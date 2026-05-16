import type { Course, CourseMeta, Lesson } from '@/types'
import { pythonCourse } from './python'
import { lessons as pythonLessons } from '@/data/courseData'
import { getLessonBySlug as getPythonLessonBySlug, getPrevNextLessons as getPythonPrevNext } from '@/data/courseData'

// ── Cursos disponibles ───────────────────────────────────────────────────────

export const courses: Course[] = [pythonCourse]

export const futureCourses: CourseMeta[] = [
  {
    slug: 'c-sharp',
    title: 'C# desde Cero',
    shortTitle: 'C#',
    description: 'Aprende C# y .NET desde los fundamentos hasta crear aplicaciones de escritorio y web.',
    level: 'Principiante',
    language: 'Español',
    status: 'coming-soon',
    icon: '🔷',
    totalLessons: 0,
    totalModules: 0,
  },
  {
    slug: 'javascript',
    title: 'JavaScript desde Cero',
    shortTitle: 'JavaScript',
    description: 'Domina el lenguaje de la web. Variables, funciones, eventos, promesas y mucho más.',
    level: 'Principiante',
    language: 'Español',
    status: 'coming-soon',
    icon: '🟨',
    totalLessons: 0,
    totalModules: 0,
  },
  {
    slug: 'react',
    title: 'React desde Cero',
    shortTitle: 'React',
    description: 'Crea interfaces modernas con React. Componentes, hooks, estado y más.',
    level: 'Intermedio',
    language: 'Español',
    status: 'coming-soon',
    icon: '⚛️',
    totalLessons: 0,
    totalModules: 0,
  },
  {
    slug: 'nextjs',
    title: 'Next.js desde Cero',
    shortTitle: 'Next.js',
    description: 'Construye aplicaciones web full-stack con Next.js, el framework de React para producción.',
    level: 'Intermedio',
    language: 'Español',
    status: 'coming-soon',
    icon: '▲',
    totalLessons: 0,
    totalModules: 0,
  },
  {
    slug: 'sql',
    title: 'SQL desde Cero',
    shortTitle: 'SQL',
    description: 'Aprende a consultar y gestionar bases de datos con SQL. Desde SELECT hasta joins complejos.',
    level: 'Principiante',
    language: 'Español',
    status: 'coming-soon',
    icon: '🗄️',
    totalLessons: 0,
    totalModules: 0,
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getAllCourses(): Course[] {
  return courses
}

export function getCourseBySlug(courseSlug: string): Course | undefined {
  return courses.find((c) => c.slug === courseSlug)
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string): Lesson | undefined {
  if (courseSlug === 'python') return getPythonLessonBySlug(lessonSlug)
  return undefined
}

export function getNextLesson(courseSlug: string, lessonSlug: string): Lesson | null {
  if (courseSlug === 'python') return getPythonPrevNext(lessonSlug).next
  return null
}

export function getPreviousLesson(courseSlug: string, lessonSlug: string): Lesson | null {
  if (courseSlug === 'python') return getPythonPrevNext(lessonSlug).prev
  return null
}

export function getCourseProgress(
  courseSlug: string,
  completedLessons: string[]
): { completed: number; total: number; percentage: number } {
  const course = getCourseBySlug(courseSlug)
  if (!course) return { completed: 0, total: 0, percentage: 0 }
  const total = course.totalLessons
  const completed = completedLessons.length
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  return { completed, total, percentage }
}

export function getAllLessons(courseSlug: string): Lesson[] {
  if (courseSlug === 'python') return pythonLessons
  return []
}
