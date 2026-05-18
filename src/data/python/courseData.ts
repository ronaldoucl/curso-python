import type { Lesson, Module } from '@/types'
import { baseLessons, baseModules } from './courseLessons1'
import { newLessons, newModules } from './courseLessons2'
import { intermediateLessons, intermediateModules } from './courseLessons3'
import { practicalLessons, practicalModules } from './courseLessons4'

export const lessons: Lesson[] = [
  ...baseLessons,
  ...newLessons,
  ...intermediateLessons,
  ...practicalLessons,
]

export const modules: Module[] = [
  ...baseModules,
  ...newModules,
  ...intermediateModules,
  ...practicalModules,
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}

export function getPrevNextLessons(slug: string): {
  prev: Lesson | null
  next: Lesson | null
} {
  const index = lessons.findIndex((l) => l.slug === slug)
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  }
}

export const totalLessons = lessons.length
