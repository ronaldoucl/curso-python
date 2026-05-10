'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '@/hooks/useUser'
import { getLessonProgress, getQuizAttempts } from '@/lib/progress'
import { getLessonBySlug, totalLessons } from '@/data/courseData'
import ProgressBar from '@/components/ui/ProgressBar'
import AnonymousBanner from '@/components/ui/AnonymousBanner'
import type { QuizAttempt } from '@/types'

export default function ProgresoPage() {
  const { user, loading } = useUser()
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (loading) return
    const fetchData = async () => {
      try {
        const slugs = await getLessonProgress(user?.id ?? null)
        setCompletedSlugs(slugs)
        if (user) {
          const attempts = await getQuizAttempts(user.id)
          setQuizAttempts(attempts)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingData(false)
      }
    }
    fetchData()
  }, [user, loading])

  if (loading || loadingData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="text-gray-400 animate-pulse">Cargando tu progreso…</div>
      </div>
    )
  }

  const percentage = Math.round((completedSlugs.length / totalLessons) * 100)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Mi progreso</h1>
        <p className="text-gray-400">
          {user
            ? `Hola, ${user.user_metadata?.full_name?.split(' ')[0] ?? 'estudiante'} 👋`
            : 'Tu avance guardado en este dispositivo'}
        </p>
      </div>

      {!user && (
        <div className="mb-8">
          <AnonymousBanner />
        </div>
      )}

      {/* Resumen */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-yellow-400">{completedSlugs.length}</p>
            <p className="text-gray-400 text-sm mt-1">completadas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">{totalLessons}</p>
            <p className="text-gray-400 text-sm mt-1">total</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-green-400">{percentage}%</p>
            <p className="text-gray-400 text-sm mt-1">completado</p>
          </div>
        </div>
        <ProgressBar completed={completedSlugs.length} total={totalLessons} showLabel={false} size="lg" />
      </div>

      {/* Lecciones completadas */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 className="text-white font-bold text-lg mb-4">Lecciones completadas</h2>
        {completedSlugs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Aún no has completado ninguna lección.</p>
            <Link
              href="/curso"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Empezar ahora →
            </Link>
          </div>
        ) : (
          <ul className="space-y-2">
            {completedSlugs.map((slug) => {
              const lesson = getLessonBySlug(slug)
              if (!lesson) return null
              return (
                <li key={slug}>
                  <Link
                    href={`/curso/${slug}`}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-800"
                  >
                    <span className="text-green-400 shrink-0">✓</span>
                    <span className="flex-1">{lesson.title}</span>
                    <span className="text-gray-600 text-xs">{lesson.module}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Quiz attempts (solo para usuarios registrados) */}
      {user && quizAttempts.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-bold text-lg mb-4">Resultados de quizzes</h2>
          <div className="space-y-2">
            {quizAttempts.slice(0, 10).map((attempt) => {
              const lesson = getLessonBySlug(attempt.lesson_slug)
              const pct = Math.round((attempt.score / attempt.total_questions) * 100)
              return (
                <div key={attempt.id} className="flex items-center gap-3 text-sm py-2 px-3 rounded-lg bg-gray-800">
                  <span className={`font-bold shrink-0 ${pct === 100 ? 'text-green-400' : pct >= 67 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {attempt.score}/{attempt.total_questions}
                  </span>
                  <span className="flex-1 text-gray-300">{lesson?.title ?? attempt.lesson_slug}</span>
                  <span className="text-gray-500 text-xs">
                    {new Date(attempt.created_at).toLocaleDateString('es-ES')}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Siguiente lección sugerida */}
      {completedSlugs.length < totalLessons && (
        <div className="bg-linear-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-2xl p-6 text-center">
          <p className="text-yellow-400 font-semibold mb-2">¡Sigue adelante!</p>
          <p className="text-gray-400 text-sm mb-4">
            Te faltan {totalLessons - completedSlugs.length} lecciones para completar el curso.
          </p>
          <Link
            href="/curso"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Continuar aprendiendo →
          </Link>
        </div>
      )}

      {completedSlugs.length === totalLessons && (
        <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-8 text-center">
          <p className="text-5xl mb-4">🎓</p>
          <p className="text-green-400 font-bold text-xl mb-2">¡Curso completado!</p>
          <p className="text-gray-400 text-sm">
            Felicidades, terminaste todas las lecciones de Python desde Cero.
          </p>
        </div>
      )}
    </div>
  )
}
