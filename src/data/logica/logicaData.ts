import type { Lesson, Module } from '@/types'
import { lessonsLogicaModule1, logicaModule1 } from './logicaModule1'
import { lessonsLogicaModule2, logicaModule2 } from './logicaModule2'
import { lessonsLogicaModule3, logicaModule3 } from './logicaModule3'
import { lessonsLogicaModule4, logicaModule4 } from './logicaModule4'
import { lessonsLogicaModule5, logicaModule5 } from './logicaModule5'

export const logicaLessons: Lesson[] = [
  ...lessonsLogicaModule1,
  ...lessonsLogicaModule2,
  ...lessonsLogicaModule3,
  ...lessonsLogicaModule4,
  ...lessonsLogicaModule5,
]

export const logicaModules: Module[] = [
  logicaModule1,
  logicaModule2,
  logicaModule3,
  logicaModule4,
  logicaModule5,
]

export const logicaTotalLessons = logicaLessons.length

export function getLogicaLessonBySlug(slug: string): Lesson | undefined {
  return logicaLessons.find((l) => l.slug === slug)
}

export function getLogicaPrevNextLessons(slug: string): { prev: Lesson | null; next: Lesson | null } {
  const index = logicaLessons.findIndex((l) => l.slug === slug)
  return {
    prev: index > 0 ? logicaLessons[index - 1] : null,
    next: index < logicaLessons.length - 1 ? logicaLessons[index + 1] : null,
  }
}
