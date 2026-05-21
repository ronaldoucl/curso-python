import type { Course } from '@/types'
import type { CourseEntry } from './types'
import {
  logicaLessons,
  logicaModules,
  logicaTotalLessons,
  getLogicaLessonBySlug,
  getLogicaPrevNextLessons,
} from '@/data/logica/logicaData'

export { logicaLessons, logicaModules }

export const logicaCourse: Course = {
  slug: 'logica-programacion',
  title: 'Lógica de Programación',
  shortTitle: 'Lógica',
  description:
    'Aprende a pensar como programador desde cero usando lógica, algoritmos, pseudocódigo, datos, operaciones básicas y resolución de problemas. El punto de inicio ideal antes de aprender cualquier lenguaje.',
  level: 'Principiante',
  language: 'Español',
  status: 'available',
  icon: '🧠',
  totalLessons: logicaTotalLessons,
  modules: logicaModules,
  roadmap: [],
  order: 0,
  label: 'Curso Base',
}

export const logicaEntry: CourseEntry = {
  course: logicaCourse,
  getLessonBySlug: getLogicaLessonBySlug,
  getPrevNextLessons: getLogicaPrevNextLessons,
  getAllLessons: () => logicaLessons,
}
