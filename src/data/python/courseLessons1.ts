import type { Lesson, Module } from '@/types'
import { lessonsModule1, module1 } from './module1'
import { lessonsModule2, module2 } from './module2'
import { lessonsModule3, module3 } from './module3'
import { lessonsModule4, module4 } from './module4'
import { lessonsModule5, module5 } from './module5'

export const baseLessons: Lesson[] = [
  ...lessonsModule1,
  ...lessonsModule2,
  ...lessonsModule3,
  ...lessonsModule4,
  ...lessonsModule5,
]

export const baseModules: Module[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
]
