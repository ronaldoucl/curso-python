import type { Lesson, Module } from '@/types'
import { lessonsModule6 } from './module6'
import { lessonsModule7 } from './module7'
import { lessonsModule8 } from './module8'
import { lessonsModule9 } from './module9'
import { lessonsModule10 } from './module10'

export const newLessons: Lesson[] = [
  ...lessonsModule6,
  ...lessonsModule7,
  ...lessonsModule8,
  ...lessonsModule9,
  ...lessonsModule10,
]

export const newModules: Module[] = [
  {
    number: 6,
    title: 'Manejo de errores',
    level: 'básico',
    lessons: lessonsModule6,
  },
  {
    number: 7,
    title: 'Entrada y salida de datos',
    level: 'básico',
    lessons: lessonsModule7,
  },
  {
    number: 8,
    title: 'Archivos en Python',
    level: 'básico',
    lessons: lessonsModule8,
  },
  {
    number: 9,
    title: 'Programación orientada a objetos',
    level: 'básico',
    lessons: lessonsModule9,
  },
  {
    number: 10,
    title: 'Módulos y librerías',
    level: 'básico',
    lessons: lessonsModule10,
  },
]
