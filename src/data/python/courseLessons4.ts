import type { Lesson } from '@/types'
import { lessonsModule21, module21 } from './module21'
import { lessonsModule22, module22 } from './module22'
import { lessonsModule23, module23 } from './module23'
import { lessonsModule24, module24 } from './module24'
import { lessonsModule25, module25 } from './module25'
import { lessonsModule26, module26 } from './module26'
import { lessonsModule27, module27 } from './module27'
import { lessonsModule28, module28 } from './module28'
import { lessonsModule29, module29 } from './module29'
import { lessonsModule30, module30 } from './module30'
import type { Module } from '@/types'

export const practicalLessons: Lesson[] = [
  ...lessonsModule21,
  ...lessonsModule22,
  ...lessonsModule23,
  ...lessonsModule24,
  ...lessonsModule25,
  ...lessonsModule26,
  ...lessonsModule27,
  ...lessonsModule28,
  ...lessonsModule29,
  ...lessonsModule30,
]

export const practicalModules: Module[] = [
  module21,
  module22,
  module23,
  module24,
  module25,
  module26,
  module27,
  module28,
  module29,
  module30,
]
