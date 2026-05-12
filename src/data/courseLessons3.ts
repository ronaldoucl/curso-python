import type { Lesson } from '@/types'
import { lessonsModule11, module11 } from './module11'
import { lessonsModule12, module12 } from './module12'
import { lessonsModule13, module13 } from './module13'
import { lessonsModule14, module14 } from './module14'
import { lessonsModule15, module15 } from './module15'
import { lessonsModule16, module16 } from './module16'
import { lessonsModule17, module17 } from './module17'
import { lessonsModule18, module18 } from './module18'
import { lessonsModule19, module19 } from './module19'
import { lessonsModule20, module20 } from './module20'
import type { Module } from '@/types'

export const intermediateLessons: Lesson[] = [
  ...lessonsModule11,
  ...lessonsModule12,
  ...lessonsModule13,
  ...lessonsModule14,
  ...lessonsModule15,
  ...lessonsModule16,
  ...lessonsModule17,
  ...lessonsModule18,
  ...lessonsModule19,
  ...lessonsModule20,
]

export const intermediateModules: Module[] = [
  module11,
  module12,
  module13,
  module14,
  module15,
  module16,
  module17,
  module18,
  module19,
  module20,
]
