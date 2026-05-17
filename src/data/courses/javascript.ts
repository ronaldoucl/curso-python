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
    'DOM y eventos',
    'Formularios y validaciones',
    'JSON y localStorage',
    'Manejo de errores',
    'JavaScript moderno (ES6+)',
    'Módulos en JavaScript',
    'Asincronía: callbacks, promises y async/await',
    'Fetch API',
    'Consumo de APIs reales',
    'NPM y herramientas básicas',
    'Vite y estructura de proyectos',
    'Proyecto final práctico',
  ],
}

export const javascriptEntry: CourseEntry = {
  course: javascriptCourse,
  getLessonBySlug: getJsLessonBySlug,
  getPrevNextLessons: getJsPrevNextLessons,
  getAllLessons: () => jsLessons,
}
