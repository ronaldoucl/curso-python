'use client'

import { useEffect, useState } from 'react'
import { modules, totalLessons } from '@/data/courseData'
import { getLessonProgress } from '@/lib/progress'
import { useUser } from '@/hooks/useUser'
import LessonCard from '@/components/course/LessonCard'
import ProgressBar from '@/components/ui/ProgressBar'
import AnonymousBanner from '@/components/ui/AnonymousBanner'

export default function CursoPage() {
  const { user, loading } = useUser()
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [loadingProgress, setLoadingProgress] = useState(true)

  useEffect(() => {
    if (loading) return
    getLessonProgress(user?.id ?? null)
      .then(setCompletedSlugs)
      .catch(console.error)
      .finally(() => setLoadingProgress(false))
  }, [user, loading])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Python desde Cero</h1>
        <p className="text-gray-400">
          {totalLessons} lecciones · 5 módulos · Para principiantes
        </p>
      </div>

      {/* Progreso */}
      {!loadingProgress && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Tu progreso</h2>
            {!user && (
              <span className="text-xs text-gray-500">Guardado localmente</span>
            )}
          </div>
          <ProgressBar completed={completedSlugs.length} total={totalLessons} />
        </div>
      )}

      {/* Banner anónimo */}
      {!loading && !user && (
        <div className="mb-8">
          <AnonymousBanner />
        </div>
      )}

      {/* Módulos */}
      <div className="space-y-8">
        {modules.map((mod) => (
          <div key={mod.number}>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-gray-900 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                {mod.number}
              </span>
              <h2 className="text-white font-bold text-lg">{mod.title}</h2>
              <span className="text-gray-500 text-sm ml-auto">
                {mod.lessons.filter((l) => completedSlugs.includes(l.slug)).length}
                /{mod.lessons.length}
              </span>
            </div>
            <div className="space-y-2">
              {mod.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.slug}
                  lesson={lesson}
                  completed={completedSlugs.includes(lesson.slug)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
