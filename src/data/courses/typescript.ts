import type { Course } from '@/types'
import type { CourseEntry } from './types'
import {
  tsLessons,
  tsModules,
  tsTotalLessons,
  getTsLessonBySlug,
  getTsPrevNextLessons,
} from '@/data/typescript/tsData'

export { tsLessons, tsModules }

export const typescriptCourse: Course = {
  slug: 'typescript',
  title: 'TypeScript desde Cero',
  shortTitle: 'TypeScript',
  description:
    'Aprende TypeScript desde cero y descubre cómo escribir JavaScript más seguro, profesional y fácil de mantener usando tipos, interfaces, funciones tipadas y buenas prácticas modernas.',
  level: 'Principiante',
  language: 'Español',
  status: 'available',
  icon: '🔷',
  totalLessons: tsTotalLessons,
  modules: tsModules,
  roadmap: [],
}

export const typescriptEntry: CourseEntry = {
  course: typescriptCourse,
  getLessonBySlug: getTsLessonBySlug,
  getPrevNextLessons: getTsPrevNextLessons,
  getAllLessons: () => tsLessons,
}
