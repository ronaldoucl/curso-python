import type { Course } from '@/types'
import type { CourseEntry } from './types'
import {
  jsLessons,
  jsModules,
  jsTotalLessons,
  getJsLessonBySlug,
  getJsPrevNextLessons,
} from '@/data/js/jsData'

export { jsLessons, jsModules }

export const javascriptCourse: Course = {
  slug: 'javascript',
  title: 'JavaScript desde Cero',
  shortTitle: 'JavaScript',
  description:
    'Aprende JavaScript desde cero con explicaciones simples, ejemplos prácticos, ejercicios interactivos y quizzes para dominar la lógica de programación web.',
  level: 'Principiante',
  language: 'Español',
  status: 'available',
  icon: '🟨',
  totalLessons: jsTotalLessons,
  modules: jsModules,
  roadmap: [
    'Introducción a frameworks (React o Vue)',
    'TypeScript desde cero',
    'Testing avanzado con mocks y cobertura',
    'Despliegue y CI/CD básico',
  ],
}

export const javascriptEntry: CourseEntry = {
  course: javascriptCourse,
  getLessonBySlug: getJsLessonBySlug,
  getPrevNextLessons: getJsPrevNextLessons,
  getAllLessons: () => jsLessons,
}
