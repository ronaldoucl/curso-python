'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '@/hooks/useUser'
import { getLessonProgress, getQuizAttempts } from '@/lib/progress'
import { getLessonBySlug } from '@/data/courses'
import { courses, futureCourses } from '@/data/courses'
import ProgressBar from '@/components/ui/ProgressBar'
import AnonymousBanner from '@/components/ui/AnonymousBanner'
import Badge from '@/components/ui/Badge'
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
        <p className="font-mono text-xs text-gray-600 animate-pulse">// cargando progreso…</p>
      </div>
    )
  }

  const pythonCourse = courses[0]
  const pythonTotal = pythonCourse.totalLessons
  const pythonCompleted = completedByPython.length
  const pythonPct = Math.round((pythonCompleted / pythonTotal) * 100)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="mb-8">
        <p className="font-mono text-xs text-primary mb-2">// mi progreso</p>
        <h1 className="text-3xl font-bold text-gray-50 mb-1">Mi progreso</h1>
        <p className="text-gray-400 text-sm">
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
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl shrink-0">
            {pythonCourse.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-gray-50 font-bold text-base">{pythonCourse.title}</h2>
            <p className="font-mono text-xs text-gray-500">{pythonCourse.level} · {pythonCourse.language}</p>
          </div>
          <Link
            href="/cursos/python"
            className="text-xs bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            Continuar →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="text-center">
            <p className="font-mono font-extrabold text-2xl text-accent">{pythonCompleted}</p>
            <p className="text-gray-500 text-xs mt-1">completadas</p>
          </div>
          <div className="text-center">
            <p className="font-mono font-extrabold text-2xl text-gray-300">{pythonTotal}</p>
            <p className="text-gray-500 text-xs mt-1">total</p>
          </div>
          <div className="text-center">
            <p className="font-mono font-extrabold text-2xl text-success">{pythonPct}%</p>
            <p className="text-gray-500 text-xs mt-1">completado</p>
          </div>
        </div>

        <ProgressBar completed={pythonCompleted} total={pythonTotal} showLabel={false} size="lg" />
      </div>

      {/* Lecciones completadas */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-200 font-semibold text-sm">
            Lecciones completadas
          </h2>
          <span className="font-mono text-xs text-gray-600">{pythonCompleted}/{pythonTotal}</span>
        </div>

        {completedByPython.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm mb-4">Aún no has completado ninguna lección.</p>
            <Link
              href="/cursos/python"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Empezar Python ahora →
            </Link>
          </div>
        ) : (
          <ul className="space-y-1">
            {completedByPython.map((slug) => {
              const lesson = getLessonBySlug('python', slug)
              if (!lesson) return null
              return (
                <li key={slug}>
                  <Link
                    href={`/cursos/python/${slug}`}
                    className="flex items-center gap-3 text-sm py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <span className="text-success shrink-0 font-mono text-xs">✓</span>
                    <span className="flex-1 text-gray-300 group-hover:text-gray-100 transition-colors truncate">
                      {lesson.title}
                    </span>
                    <span className="text-gray-600 text-xs font-mono shrink-0">{lesson.module}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Resultados de quizzes */}
      {user && quizAttempts.length > 0 && (
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-6">
          <h2 className="text-gray-200 font-semibold text-sm mb-4">Resultados de quizzes — Python</h2>
          <div className="space-y-1.5">
            {quizAttempts.slice(0, 10).map((attempt) => {
              const lesson = getLessonBySlug('python', attempt.lesson_slug)
              const pct = Math.round((attempt.score / attempt.total_questions) * 100)
              return (
                <div key={attempt.id} className="flex items-center gap-3 text-sm py-2 px-3 rounded-lg bg-gray-800">
                  <span className={`font-mono font-bold text-xs shrink-0 ${
                    pct === 100 ? 'text-success' : pct >= 67 ? 'text-accent' : 'text-danger'
                  }`}>
                    {attempt.score}/{attempt.total_questions}
                  </span>
                  <span className="flex-1 text-gray-300 truncate">{lesson?.title ?? attempt.lesson_slug}</span>
                  <span className="text-gray-600 text-xs font-mono shrink-0">
                    {new Date(attempt.created_at).toLocaleDateString('es-ES')}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Cursos próximamente */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-gray-400 font-mono text-xs uppercase tracking-wider">Próximamente</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {futureCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 opacity-60"
            >
              <span className="text-2xl block mb-1.5">{course.icon}</span>
              <p className="text-gray-300 font-semibold text-sm leading-tight">{course.shortTitle}</p>
              <Badge variant="comingSoon" className="mt-1.5">Próximamente</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* CTA según estado */}
      {pythonCompleted < pythonTotal && (
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center">
          <p className="font-mono text-xs text-accent mb-2">// sigue adelante</p>
          <p className="text-gray-300 font-semibold mb-1">¡Vas muy bien!</p>
          <p className="text-gray-400 text-sm mb-4">
            Te faltan <span className="font-mono text-accent">{pythonTotal - pythonCompleted}</span> lecciones para completar Python desde Cero.
          </p>
          <Link
            href="/cursos/python"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Continuar aprendiendo →
          </Link>
        </div>
      )}

      {pythonCompleted === pythonTotal && pythonTotal > 0 && (
        <div className="bg-success/8 border border-success/20 rounded-2xl p-8 text-center">
          <p className="text-5xl mb-4">🎓</p>
          <p className="text-success font-bold text-xl mb-2">¡Curso completado!</p>
          <p className="text-gray-400 text-sm">
            Felicidades, terminaste todas las lecciones de {pythonCourse.title}.
          </p>
        </div>
      )}
    </div>
  )
}
