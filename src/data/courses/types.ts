import type { Course, Lesson } from '@/types'

export interface CourseEntry {
  course: Course
  getLessonBySlug: (lessonSlug: string) => Lesson | undefined
  getPrevNextLessons: (lessonSlug: string) => { prev: Lesson | null; next: Lesson | null }
  getAllLessons: () => Lesson[]
}
