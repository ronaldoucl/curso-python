import type { Lesson, Module } from '@/types'
import { lessonsTsModule1, tsModule1 } from './tsModule1'
import { lessonsTsModule2, tsModule2 } from './tsModule2'
import { lessonsTsModule3, tsModule3 } from './tsModule3'
import { lessonsTsModule4, tsModule4 } from './tsModule4'
import { lessonsTsModule5, tsModule5 } from './tsModule5'
import { lessonsTsModule6, tsModule6 } from './tsModule6'
import { lessonsTsModule7, tsModule7 } from './tsModule7'
import { lessonsTsModule8, tsModule8 } from './tsModule8'
import { lessonsTsModule9, tsModule9 } from './tsModule9'
import { lessonsTsModule10, tsModule10 } from './tsModule10'
import { lessonsTsModule11, tsModule11 } from './tsModule11'
import { lessonsTsModule12, tsModule12 } from './tsModule12'
import { lessonsTsModule13, tsModule13 } from './tsModule13'
import { lessonsTsModule14, tsModule14 } from './tsModule14'
import { lessonsTsModule15, tsModule15 } from './tsModule15'

export const tsLessons: Lesson[] = [
  ...lessonsTsModule1,
  ...lessonsTsModule2,
  ...lessonsTsModule3,
  ...lessonsTsModule4,
  ...lessonsTsModule5,
  ...lessonsTsModule6,
  ...lessonsTsModule7,
  ...lessonsTsModule8,
  ...lessonsTsModule9,
  ...lessonsTsModule10,
  ...lessonsTsModule11,
  ...lessonsTsModule12,
  ...lessonsTsModule13,
  ...lessonsTsModule14,
  ...lessonsTsModule15,
]

export const tsModules: Module[] = [
  tsModule1,
  tsModule2,
  tsModule3,
  tsModule4,
  tsModule5,
  tsModule6,
  tsModule7,
  tsModule8,
  tsModule9,
  tsModule10,
  tsModule11,
  tsModule12,
  tsModule13,
  tsModule14,
  tsModule15,
]

export const tsTotalLessons = tsLessons.length

export function getTsLessonBySlug(slug: string): Lesson | undefined {
  return tsLessons.find((l) => l.slug === slug)
}

export function getTsPrevNextLessons(slug: string): { prev: Lesson | null; next: Lesson | null } {
  const index = tsLessons.findIndex((l) => l.slug === slug)
  return {
    prev: index > 0 ? tsLessons[index - 1] : null,
    next: index < tsLessons.length - 1 ? tsLessons[index + 1] : null,
  }
}
