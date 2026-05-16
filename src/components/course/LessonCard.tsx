import Link from 'next/link'
import type { Lesson } from '@/types'

interface LessonCardProps {
  lesson: Lesson
  courseSlug: string
  completed?: boolean
}

export default function LessonCard({ lesson, courseSlug, completed = false }: LessonCardProps) {
  return (
    <Link
      href={`/cursos/${courseSlug}/${lesson.slug}`}
      className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-primary/40 rounded-xl p-3.5 transition-all"
    >
      {/* Número de lección */}
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold transition-colors ${
        completed
          ? 'bg-success/15 text-success border border-success/30'
          : 'bg-gray-700 text-gray-400 group-hover:bg-primary/15 group-hover:text-primary group-hover:border-primary/30 border border-gray-600'
      }`}>
        {completed ? '✓' : lesson.order}
      </div>

      {/* Contenido */}
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm truncate transition-colors ${
          completed ? 'text-success' : 'text-gray-200 group-hover:text-gray-50'
        }`}>
          {lesson.title}
        </p>
        <p className="text-gray-500 text-xs truncate mt-0.5">{lesson.description}</p>
      </div>

      {/* Flecha */}
      <svg
        className="w-4 h-4 text-gray-600 group-hover:text-primary shrink-0 transition-colors"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
