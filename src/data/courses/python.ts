import type { Course } from '@/types'
import { lessons, modules, totalLessons } from '@/data/courseData'

export { lessons as pythonLessons, modules as pythonModules }

export const pythonCourse: Course = {
  slug: 'python',
  title: 'Python desde Cero',
  shortTitle: 'Python',
  description:
    'Aprende Python desde cero con explicaciones simples, ejercicios prácticos y quizzes interactivos. Sin experiencia previa necesaria.',
  level: 'Principiante',
  language: 'Español',
  status: 'available',
  icon: '🐍',
  totalLessons,
  modules,
}
