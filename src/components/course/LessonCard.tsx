import Link from 'next/link'
import type { Lesson } from '@/types'

interface LessonCardProps {
  lesson: Lesson
  completed?: boolean
}

export default function LessonCard({ lesson, completed = false }: LessonCardProps) {
  return (
    <Link
      href={`/curso/${lesson.slug}`}
      className="group flex items-center gap-4 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl p-4 transition-all"
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
        completed
          ? 'bg-green-500 text-white'
          : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600'
      }`}>
        {completed ? '✓' : lesson.order}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm truncate ${completed ? 'text-green-300' : 'text-white'}`}>
          {lesson.title}
        </p>
        <p className="text-gray-500 text-xs truncate">{lesson.description}</p>
      </div>
      <svg
        className="w-4 h-4 text-gray-600 group-hover:text-gray-400 shrink-0 transition-colors"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
