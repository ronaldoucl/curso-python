'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '@/hooks/useUser'
import { getLessonProgress, getQuizAttempts } from '@/lib/progress'
import { getLessonBySlug } from '@/data/courses'
import { courses, futureCourses } from '@/data/courses'
import ProgressBar from '@/components/ui/ProgressBar'
import AnonymousBanner from '@/components/ui/AnonymousBanner'
import type { QuizAttempt } from '@/types'

export default function ProgresoPage() {
  const { user, loading } = useUser()
  const [completedByPython, setCompletedByPython] = useState<string[]>([])
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (loading) return
    const fetchData = async () => {
      try {
        const slugs = await getLessonProgress(user?.id ?? null, 'python')
        setCompletedByPython(slugs)
        if (user) {
          const attempts = await getQuizAttempts(user.id, 'python')
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

  const pythonCourse = courses[0]
  const pythonTotal = pythonCourse.totalLessons
  const pythonCompleted = completedByPython.length
  const pythonPct = Math.round((pythonCompleted / pythonTotal) * 100)

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

      {/* Tarjeta Python desde Cero */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">{pythonCourse.icon}</span>
          <div className="flex-1">
            <h2 className="text-white font-bold text-lg">{pythonCourse.title}</h2>
            <p className="text-gray-500 text-sm">{pythonCourse.level} · {pythonCourse.language}</p>
          </div>
          <Link
            href="/cursos/python"
            className="text-sm bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Continuar →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-yellow-400">{pythonCompleted}</p>
            <p className="text-gray-400 text-xs mt-1">completadas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">{pythonTotal}</p>
            <p className="text-gray-400 text-xs mt-1">total</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-green-400">{pythonPct}%</p>
            <p className="text-gray-400 text-xs mt-1">completado</p>
          </div>
        </div>

        <ProgressBar completed={pythonCompleted} total={pythonTotal} showLabel={false} size="lg" />
      </div>

      {/* Cursos próximamente */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-lg mb-4">Más cursos próximamente</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {futureCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 opacity-60"
            >
              <span className="text-2xl block mb-1">{course.icon}</span>
              <p className="text-white text-sm font-medium leading-tight">{course.shortTitle}</p>
              <p className="text-gray-500 text-xs mt-0.5">Próximamente</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lecciones completadas */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 className="text-white font-bold text-lg mb-4">
          Lecciones completadas — {pythonCourse.shortTitle}
        </h2>
        {completedByPython.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Aún no has completado ninguna lección.</p>
            <Link
              href="/cursos/python"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Empezar Python ahora →
            </Link>
          </div>
        ) : (
          <ul className="space-y-2">
            {completedByPython.map((slug) => {
              const lesson = getLessonBySlug('python', slug)
              if (!lesson) return null
              return (
                <li key={slug}>
                  <Link
                    href={`/cursos/python/${slug}`}
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

      {/* Resultados de quizzes (solo para usuarios registrados) */}
      {user && quizAttempts.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-bold text-lg mb-4">Resultados de quizzes — Python</h2>
          <div className="space-y-2">
            {quizAttempts.slice(0, 10).map((attempt) => {
              const lesson = getLessonBySlug('python', attempt.lesson_slug)
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

      {/* CTA según estado */}
      {pythonCompleted < pythonTotal && (
        <div className="bg-linear-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-2xl p-6 text-center">
          <p className="text-yellow-400 font-semibold mb-2">¡Sigue adelante!</p>
          <p className="text-gray-400 text-sm mb-4">
            Te faltan {pythonTotal - pythonCompleted} lecciones para completar Python desde Cero.
          </p>
          <Link
            href="/cursos/python"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Continuar aprendiendo →
          </Link>
        </div>
      )}

      {pythonCompleted === pythonTotal && pythonTotal > 0 && (
        <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-8 text-center">
          <p className="text-5xl mb-4">🎓</p>
          <p className="text-green-400 font-bold text-xl mb-2">¡Curso completado!</p>
          <p className="text-gray-400 text-sm">
            Felicidades, terminaste todas las lecciones de {pythonCourse.title}.
          </p>
        </div>
      )}
    </div>
  )
}
