'use client'

import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getLessonBySlug, getPrevNextLessons } from '@/data/courseData'
import { useUser } from '@/hooks/useUser'
import { getLessonProgress, saveLessonProgress, saveQuizAttempt } from '@/lib/progress'
import CodeBlock from '@/components/ui/CodeBlock'
import QuizSection from '@/components/course/QuizSection'
import AnonymousBanner from '@/components/ui/AnonymousBanner'
import ReactMarkdown from 'react-markdown'
import { lessons as allLessons } from '@/data/courseData'

interface Props {
  params: Promise<{ slug: string }>
}

export default function LessonPage({ params }: Props) {
  const { slug } = use(params)
  const lesson = getLessonBySlug(slug)

  if (!lesson) notFound()

  const { prev, next } = getPrevNextLessons(slug)
  const { user, loading } = useUser()

  const [completed, setCompleted] = useState(false)
  const [markingDone, setMarkingDone] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(true)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    if (loading) return
    getLessonProgress(user?.id ?? null).then((slugs) => {
      setCompleted(slugs.includes(slug))
      setLoadingProgress(false)
    })
  }, [user, loading, slug])

  async function handleMarkComplete() {
    setMarkingDone(true)
    try {
      await saveLessonProgress(user?.id ?? null, slug)
      setCompleted(true)
      setSuccessMsg('¡Lección marcada como completada! ✓')
      setTimeout(() => setSuccessMsg(''), 3000)
    } catch (err) {
      console.error(err)
    } finally {
      setMarkingDone(false)
    }
  }

  async function handleQuizComplete(score: number, total: number) {
    if (user) {
      try {
        await saveQuizAttempt(user.id, slug, score, total)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/curso" className="hover:text-gray-300 transition-colors">Curso</Link>
        <span>›</span>
        <span className="text-gray-400">Módulo {lesson.moduleNumber}</span>
        <span>›</span>
        <span className="text-gray-300">{lesson.title}</span>
      </nav>

      {/* Banner anónimo */}
      {!loading && !user && (
        <div className="mb-8">
          <AnonymousBanner />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contenido principal */}
        <div className="lg:col-span-3 space-y-10">
          {/* Cabecera */}
          <header>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-3 py-0.5 font-medium">
                Módulo {lesson.moduleNumber} · {lesson.module}
              </span>
              {!loadingProgress && completed && (
                <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/30 rounded-full px-3 py-0.5">
                  ✓ Completada
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              {lesson.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">{lesson.description}</p>
          </header>

          {/* Explicación */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📖</span> Explicación
            </h2>
            <div className="lesson-content">
              <ReactMarkdown>{lesson.explanation}</ReactMarkdown>
            </div>
          </section>

          {/* Ejemplo de código */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>💻</span> Ejemplo de código
            </h2>
            <CodeBlock code={lesson.codeExample} />
          </section>

          {/* Puntos clave */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>🔑</span> Puntos clave
            </h2>
            <ul className="space-y-2">
              {lesson.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-yellow-400 mt-0.5 shrink-0">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Ejercicio */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>✍️</span> Ejercicio práctico
            </h2>
            <div className="bg-blue-900/20 border border-blue-700/40 rounded-xl p-5 space-y-3">
              <p className="text-blue-200 text-sm leading-relaxed">{lesson.exercise.description}</p>
              <details className="cursor-pointer">
                <summary className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors select-none">
                  Ver pista
                </summary>
                <p className="mt-2 text-gray-400 text-xs leading-relaxed pl-3 border-l border-gray-700">
                  {lesson.exercise.hint}
                </p>
              </details>
            </div>
          </section>

          {/* Quiz */}
          <section>
            <QuizSection
              questions={lesson.quiz}
              lessonSlug={slug}
              userId={user?.id ?? null}
              onComplete={handleQuizComplete}
            />
          </section>

          {/* Marcar como completada */}
          <section className="border-t border-gray-800 pt-8">
            {successMsg && (
              <div className="mb-4 bg-green-900/30 border border-green-700 text-green-300 rounded-lg px-4 py-3 text-sm">
                {successMsg}
              </div>
            )}
            {!loadingProgress && (
              completed ? (
                <div className="flex items-center gap-3 text-green-400">
                  <span className="text-2xl">🎉</span>
                  <p className="font-semibold">¡Lección completada!</p>
                </div>
              ) : (
                <button
                  onClick={handleMarkComplete}
                  disabled={markingDone}
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {markingDone ? (
                    <>
                      <span className="animate-spin">⏳</span> Guardando…
                    </>
                  ) : (
                    <>✓ Marcar como completada</>
                  )}
                </button>
              )
            )}
          </section>

          {/* Navegación prev/next */}
          <nav className="flex justify-between gap-4 pt-4">
            {prev ? (
              <Link
                href={`/curso/${prev.slug}`}
                className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 text-left transition-colors group"
              >
                <p className="text-gray-500 text-xs mb-1">← Anterior</p>
                <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/curso/${next.slug}`}
                className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 text-right transition-colors group"
              >
                <p className="text-gray-500 text-xs mb-1">Siguiente →</p>
                <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1 text-center bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4">
                <p className="text-yellow-400 font-semibold text-sm">🎓 ¡Fin del curso!</p>
                <Link href="/progreso" className="text-gray-400 text-xs hover:text-white transition-colors">
                  Ver mi progreso
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Sidebar: navegación del módulo */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-gray-900 border border-gray-800 rounded-2xl p-4">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Módulo {lesson.moduleNumber} · {lesson.module}
            </p>
            {/* Se importan las lecciones del módulo actual */}
            <ModuleSidebarLinks currentSlug={slug} moduleNumber={lesson.moduleNumber} completedSlugs={[]} />
          </div>
        </aside>
      </div>
    </div>
  )
}

function ModuleSidebarLinks({
  currentSlug,
  moduleNumber,
  completedSlugs,
}: {
  currentSlug: string
  moduleNumber: number
  completedSlugs: string[]
}) {
  const moduleLessons = allLessons.filter((l) => l.moduleNumber === moduleNumber)

  return (
    <ul className="space-y-1">
      {moduleLessons.map((l) => (
        <li key={l.slug}>
          <Link
            href={`/curso/${l.slug}`}
            className={`block text-sm px-3 py-2 rounded-lg transition-colors ${
              l.slug === currentSlug
                ? 'bg-yellow-400/10 text-yellow-400 font-medium'
                : completedSlugs.includes(l.slug)
                ? 'text-green-400 hover:text-green-300'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {completedSlugs.includes(l.slug) && '✓ '}
            {l.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
