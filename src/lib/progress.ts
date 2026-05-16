import { createClient } from '@/lib/supabase/client'
import type { QuizAttempt } from '@/types'

const LEGACY_KEY = 'python_desde_cero_progress'

function localKey(courseSlug: string) {
  return `ronaldoscript_progress_${courseSlug}`
}

// ── localStorage helpers ─────────────────────────────────────────────────────

function getLocalProgress(courseSlug: string): string[] {
  if (typeof window === 'undefined') return []
  try {
    // Migrar clave legacy de Python si existe
    if (courseSlug === 'python') {
      const legacy = localStorage.getItem(LEGACY_KEY)
      if (legacy) {
        localStorage.setItem(localKey('python'), legacy)
        localStorage.removeItem(LEGACY_KEY)
      }
    }
    const data = localStorage.getItem(localKey(courseSlug))
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveLocalProgress(courseSlug: string, slugs: string[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(localKey(courseSlug), JSON.stringify(slugs))
}

// ── Progress API ─────────────────────────────────────────────────────────────

export async function saveLessonProgress(
  userId: string | null,
  courseSlug: string,
  lessonSlug: string
): Promise<void> {
  if (!userId) {
    const current = getLocalProgress(courseSlug)
    if (!current.includes(lessonSlug)) {
      saveLocalProgress(courseSlug, [...current, lessonSlug])
    }
    return
  }

  const supabase = createClient()
  const { error } = await supabase.from('lesson_progress').upsert(
    {
      user_id: userId,
      course_slug: courseSlug,
      lesson_slug: lessonSlug,
      completed: true,
      completed_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,lesson_slug' }
  )
  if (error) throw error
}

export async function getLessonProgress(
  userId: string | null,
  courseSlug: string = 'python'
): Promise<string[]> {
  if (!userId) {
    return getLocalProgress(courseSlug)
  }

  const supabase = createClient()
  const { data, error } = await supabase
    .from('lesson_progress')
    .select('lesson_slug')
    .eq('user_id', userId)
    .eq('completed', true)

  if (error) throw error
  return data?.map((row) => row.lesson_slug) ?? []
}

export async function saveQuizAttempt(
  userId: string,
  courseSlug: string,
  lessonSlug: string,
  score: number,
  totalQuestions: number
): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.from('quiz_attempts').insert({
    user_id: userId,
    course_slug: courseSlug,
    lesson_slug: lessonSlug,
    score,
    total_questions: totalQuestions,
  })
  if (error) throw error
}

export async function getQuizAttempts(
  userId: string,
  courseSlug?: string
): Promise<QuizAttempt[]> {
  const supabase = createClient()
  let query = supabase
    .from('quiz_attempts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (courseSlug) {
    query = query.eq('course_slug', courseSlug)
  }

  const { data, error } = await query
  if (error) throw error
  return data ?? []
}

export async function syncLocalProgressToSupabase(
  userId: string,
  courseSlug: string = 'python'
): Promise<void> {
  const localSlugs = getLocalProgress(courseSlug)
  if (localSlugs.length === 0) return

  const supabase = createClient()
  const rows = localSlugs.map((slug) => ({
    user_id: userId,
    course_slug: courseSlug,
    lesson_slug: slug,
    completed: true,
    completed_at: new Date().toISOString(),
  }))

  const { error } = await supabase
    .from('lesson_progress')
    .upsert(rows, { onConflict: 'user_id,lesson_slug' })

  if (!error) {
    localStorage.removeItem(localKey(courseSlug))
  }
}
