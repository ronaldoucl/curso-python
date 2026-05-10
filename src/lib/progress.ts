import { createClient } from '@/lib/supabase/client'
import type { QuizAttempt } from '@/types'

const LOCAL_STORAGE_KEY = 'python_desde_cero_progress'

// ── localStorage helpers ─────────────────────────────────────────

function getLocalProgress(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveLocalProgress(slugs: string[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(slugs))
}

// ── Progress API ─────────────────────────────────────────────────

export async function saveLessonProgress(
  userId: string | null,
  lessonSlug: string
): Promise<void> {
  if (!userId) {
    const current = getLocalProgress()
    if (!current.includes(lessonSlug)) {
      saveLocalProgress([...current, lessonSlug])
    }
    return
  }

  const supabase = createClient()
  const { error } = await supabase.from('lesson_progress').upsert(
    {
      user_id: userId,
      lesson_slug: lessonSlug,
      completed: true,
      completed_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,lesson_slug' }
  )
  if (error) throw error
}

export async function getLessonProgress(
  userId: string | null
): Promise<string[]> {
  if (!userId) {
    return getLocalProgress()
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
  lessonSlug: string,
  score: number,
  totalQuestions: number
): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.from('quiz_attempts').insert({
    user_id: userId,
    lesson_slug: lessonSlug,
    score,
    total_questions: totalQuestions,
  })
  if (error) throw error
}

export async function getQuizAttempts(
  userId: string
): Promise<QuizAttempt[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('quiz_attempts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}

/**
 * Sincroniza el progreso de localStorage a Supabase cuando el usuario inicia sesión.
 * Llama esta función después del login exitoso.
 */
export async function syncLocalProgressToSupabase(
  userId: string
): Promise<void> {
  const localSlugs = getLocalProgress()
  if (localSlugs.length === 0) return

  const supabase = createClient()
  const rows = localSlugs.map((slug) => ({
    user_id: userId,
    lesson_slug: slug,
    completed: true,
    completed_at: new Date().toISOString(),
  }))

  const { error } = await supabase
    .from('lesson_progress')
    .upsert(rows, { onConflict: 'user_id,lesson_slug' })

  if (!error) {
    // Limpiar localStorage tras sincronizar
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }
}
