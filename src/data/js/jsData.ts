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
import { lessonsJsModule11, jsModule11 } from './jsModule11'
import { lessonsJsModule12, jsModule12 } from './jsModule12'
import { lessonsJsModule13, jsModule13 } from './jsModule13'
import { lessonsJsModule14, jsModule14 } from './jsModule14'
import { lessonsJsModule15, jsModule15 } from './jsModule15'
import { lessonsJsModule16, jsModule16 } from './jsModule16'
import { lessonsJsModule17, jsModule17 } from './jsModule17'
import { lessonsJsModule18, jsModule18 } from './jsModule18'
import { lessonsJsModule19, jsModule19 } from './jsModule19'
import { lessonsJsModule20, jsModule20 } from './jsModule20'
import { lessonsJsModule21, jsModule21 } from './jsModule21'
import { lessonsJsModule22, jsModule22 } from './jsModule22'
import { lessonsJsModule23, jsModule23 } from './jsModule23'
import { lessonsJsModule24, jsModule24 } from './jsModule24'
import { lessonsJsModule25, jsModule25 } from './jsModule25'
import { lessonsJsModule26, jsModule26 } from './jsModule26'
import { lessonsJsModule27, jsModule27 } from './jsModule27'
import { lessonsJsModule28, jsModule28 } from './jsModule28'
import { lessonsJsModule29, jsModule29 } from './jsModule29'
import { lessonsJsModule30, jsModule30 } from './jsModule30'

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
  ...lessonsJsModule11,
  ...lessonsJsModule12,
  ...lessonsJsModule13,
  ...lessonsJsModule14,
  ...lessonsJsModule15,
  ...lessonsJsModule16,
  ...lessonsJsModule17,
  ...lessonsJsModule18,
  ...lessonsJsModule19,
  ...lessonsJsModule20,
  ...lessonsJsModule21,
  ...lessonsJsModule22,
  ...lessonsJsModule23,
  ...lessonsJsModule24,
  ...lessonsJsModule25,
  ...lessonsJsModule26,
  ...lessonsJsModule27,
  ...lessonsJsModule28,
  ...lessonsJsModule29,
  ...lessonsJsModule30,
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
  jsModule11,
  jsModule12,
  jsModule13,
  jsModule14,
  jsModule15,
  jsModule16,
  jsModule17,
  jsModule18,
  jsModule19,
  jsModule20,
  jsModule21,
  jsModule22,
  jsModule23,
  jsModule24,
  jsModule25,
  jsModule26,
  jsModule27,
  jsModule28,
  jsModule29,
  jsModule30,
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
