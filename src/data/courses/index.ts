import type { Course, CourseMeta, Lesson } from '@/types'
import { logicaEntry } from './logica'
import { pythonEntry } from './python'
import { javascriptEntry } from './javascript'
import { typescriptEntry } from './typescript'
import type { CourseEntry } from './types'

export type { CourseEntry }

// ── Registro de cursos ───────────────────────────────────────────────────────
// Para agregar un nuevo curso: importar su CourseEntry y añadir una línea aquí.
// El orden en el Map determina el orden de aparición en la lista de cursos.

const registry = new Map<string, CourseEntry>([
  ['logica-programacion', logicaEntry],
  ['python', pythonEntry],
  ['javascript', javascriptEntry],
  ['typescript', typescriptEntry],
])

export const courses: Course[] = Array.from(registry.values()).map((e) => e.course)

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
  return registry.get(courseSlug)?.course
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string): Lesson | undefined {
  return registry.get(courseSlug)?.getLessonBySlug(lessonSlug)
}

export function getNextLesson(courseSlug: string, lessonSlug: string): Lesson | null {
  return registry.get(courseSlug)?.getPrevNextLessons(lessonSlug).next ?? null
}

export function getPreviousLesson(courseSlug: string, lessonSlug: string): Lesson | null {
  return registry.get(courseSlug)?.getPrevNextLessons(lessonSlug).prev ?? null
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
  return registry.get(courseSlug)?.getAllLessons() ?? []
}
