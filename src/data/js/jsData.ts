import type { Lesson, Module } from '@/types'
import { lessonsJsModule1, jsModule1 } from './jsModule1'
import { lessonsJsModule2, jsModule2 } from './jsModule2'
import { lessonsJsModule3, jsModule3 } from './jsModule3'
import { lessonsJsModule4, jsModule4 } from './jsModule4'
import { lessonsJsModule5, jsModule5 } from './jsModule5'
import { lessonsJsModule6, jsModule6 } from './jsModule6'
import { lessonsJsModule7, jsModule7 } from './jsModule7'
import { lessonsJsModule8, jsModule8 } from './jsModule8'
import { lessonsJsModule9, jsModule9 } from './jsModule9'
import { lessonsJsModule10, jsModule10 } from './jsModule10'

export const jsLessons: Lesson[] = [
  ...lessonsJsModule1,
  ...lessonsJsModule2,
  ...lessonsJsModule3,
  ...lessonsJsModule4,
  ...lessonsJsModule5,
  ...lessonsJsModule6,
  ...lessonsJsModule7,
  ...lessonsJsModule8,
  ...lessonsJsModule9,
  ...lessonsJsModule10,
]

export const jsModules: Module[] = [
  jsModule1,
  jsModule2,
  jsModule3,
  jsModule4,
  jsModule5,
  jsModule6,
  jsModule7,
  jsModule8,
  jsModule9,
  jsModule10,
]

export const jsTotalLessons = jsLessons.length

export function getJsLessonBySlug(slug: string): Lesson | undefined {
  return jsLessons.find((l) => l.slug === slug)
}

export function getJsPrevNextLessons(slug: string): { prev: Lesson | null; next: Lesson | null } {
  const index = jsLessons.findIndex((l) => l.slug === slug)
  return {
    prev: index > 0 ? jsLessons[index - 1] : null,
    next: index < jsLessons.length - 1 ? jsLessons[index + 1] : null,
  }
}
