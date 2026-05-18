'use client'

import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourseBySlug, getLessonBySlug, getPreviousLesson, getNextLesson, getAllLessons } from '@/data/courses'
import { useUser } from '@/hooks/useUser'
import { getLessonProgress, saveLessonProgress, saveQuizAttempt } from '@/lib/progress'
import CodeBlock from '@/components/ui/CodeBlock'
import QuizSection from '@/components/course/QuizSection'
import AnonymousBanner from '@/components/ui/AnonymousBanner'
import ReactMarkdown from 'react-markdown'

interface Props {
  params: Promise<{ courseSlug: string; lessonSlug: string }>
}

export default function LessonPage({ params }: Props) {
  const { courseSlug, lessonSlug } = use(params)

  const course = getCourseBySlug(courseSlug)
  if (!course) notFound()

  const lesson = getLessonBySlug(courseSlug, lessonSlug)
  if (!lesson) notFound()

  const prev = getPreviousLesson(courseSlug, lessonSlug)
  const next = getNextLesson(courseSlug, lessonSlug)
  const { user, loading } = useUser()

  const [completed, setCompleted] = useState(false)
  const [markingDone, setMarkingDone] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(true)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    if (loading) return
    getLessonProgress(user?.id ?? null, courseSlug).then((slugs) => {
      setCompleted(slugs.includes(lessonSlug))
      setLoadingProgress(false)
    })
  }, [user, loading, lessonSlug, courseSlug])

  async function handleMarkComplete() {
    setMarkingDone(true)
    try {
      await saveLessonProgress(user?.id ?? null, courseSlug, lessonSlug)
      setCompleted(true)
      setSuccessMsg('¡Lección completada! ✓')
      setTimeout(() => setSuccessMsg(''), 3000)
    } catch (err) {
      console.error(err)
    } finally {
      setMarkingDone(false)
    }
  }

  async function handleQuizComplete(score: number, total: number) {
    if (user) {
      try { await saveQuizAttempt(user.id, courseSlug, lessonSlug, score, total) }
      catch (err) { console.error(err) }
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs font-mono text-gray-600 mb-8">
        <Link href="/cursos" className="hover:text-gray-400 transition-colors">cursos</Link>
        <span>/</span>
        <Link href={`/cursos/${courseSlug}`} className="hover:text-gray-400 transition-colors">
          {course.slug}
        </Link>
        <span>/</span>
        <span className="text-gray-500">{lessonSlug}</span>
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
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/25 rounded-md px-2.5 py-1">
                Módulo {lesson.moduleNumber} · {lesson.module}
              </span>
              {!loadingProgress && completed && (
                <span className="font-mono text-xs text-success bg-success/10 border border-success/25 rounded-md px-2.5 py-1">
                  ✓ Completada
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-50 mb-3 leading-tight">
              {lesson.title}
            </h1>
            <p className="text-gray-400 leading-relaxed">{lesson.description}</p>
          </header>

          {/* Explicación */}
          <section>
            <SectionHeader icon="📖" title="Explicación" />
            <div className="lesson-content">
              <ReactMarkdown>{lesson.explanation}</ReactMarkdown>
            </div>
          </section>

          {/* Código */}
          <section>
            <SectionHeader icon="💻" title="Ejemplo de código" />
            <CodeBlock code={lesson.codeExample} language={courseSlug} />
          </section>

          {/* Puntos clave */}
          <section>
            <SectionHeader icon="🔑" title="Puntos clave" />
            <ul className="space-y-2.5">
              {lesson.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Ejercicio */}
          <section>
            <SectionHeader icon="✍️" title="Ejercicio práctico" />
            <div className="bg-gray-900 border border-primary/20 rounded-xl p-5 space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">{lesson.exercise.description}</p>
              <details className="cursor-pointer group">
                <summary className="text-primary text-xs font-medium hover:text-gray-200 transition-colors select-none list-none flex items-center gap-1.5">
                  <span className="font-mono">→</span> Ver pista
                </summary>
                <p className="mt-3 text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-700">
                  {lesson.exercise.hint}
                </p>
              </details>
            </div>
          </section>

          {/* Quiz */}
          <section>
            <QuizSection
              questions={lesson.quiz}
              lessonSlug={lessonSlug}
              userId={user?.id ?? null}
              onComplete={handleQuizComplete}
            />
          </section>

          {/* Marcar como completada */}
          <section className="border-t border-gray-700 pt-8">
            {successMsg && (
              <div className="mb-4 bg-success/10 border border-success/25 text-success rounded-xl px-4 py-3 text-sm font-medium">
                {successMsg}
              </div>
            )}
            {!loadingProgress && (
              completed ? (
                <div className="flex items-center gap-3 text-success">
                  <div className="w-8 h-8 rounded-lg bg-success/15 border border-success/30 flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="font-semibold text-sm">¡Lección completada!</p>
                </div>
              ) : (
                <button
                  onClick={handleMarkComplete}
                  disabled={markingDone}
                  className="bg-success/10 hover:bg-success/20 border border-success/30 text-success font-semibold px-6 py-3 rounded-xl transition-all disabled:opacity-50 flex items-center gap-2 text-sm"
                >
                  {markingDone
                    ? <><span className="animate-spin font-mono">⏳</span> Guardando…</>
                    : <>✓ Marcar como completada</>
                  }
                </button>
              )
            )}
          </section>

          {/* Navegación prev/next */}
          <nav className="grid grid-cols-2 gap-4 pt-2">
            {prev ? (
              <Link
                href={`/cursos/${courseSlug}/${prev.slug}`}
                className="col-span-1 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-4 text-left transition-all group"
              >
                <p className="font-mono text-gray-600 text-xs mb-1">← anterior</p>
                <p className="text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors leading-snug">
                  {prev.title}
                </p>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/cursos/${courseSlug}/${next.slug}`}
                className="col-span-1 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-4 text-right transition-all group"
              >
                <p className="font-mono text-gray-600 text-xs mb-1">siguiente →</p>
                <p className="text-gray-300 text-sm font-medium group-hover:text-gray-100 transition-colors leading-snug">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="col-span-1 text-center bg-success/8 border border-success/20 rounded-xl p-4">
                <p className="text-success font-semibold text-sm mb-1">🎓 ¡Curso completado!</p>
                <Link href="/progreso" className="font-mono text-gray-500 text-xs hover:text-gray-300 transition-colors">
                  ver mi progreso →
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-gray-900 border border-gray-700 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-gray-600">mod.</span>
              <span className="font-mono text-xs text-accent">{lesson.moduleNumber}</span>
              <span className="font-mono text-xs text-gray-600 truncate">{lesson.module}</span>
            </div>
            <ModuleSidebarLinks
              currentSlug={lessonSlug}
              courseSlug={courseSlug}
              moduleNumber={lesson.moduleNumber}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="text-base font-bold text-gray-200 mb-4 flex items-center gap-2">
      <span>{icon}</span>
      {title}
    </h2>
  )
}

function ModuleSidebarLinks({
  currentSlug,
  courseSlug,
  moduleNumber,
}: {
  currentSlug: string
  courseSlug: string
  moduleNumber: number
}) {
  const moduleLessons = getAllLessons(courseSlug).filter((l) => l.moduleNumber === moduleNumber)

  return (
    <ul className="space-y-0.5">
      {moduleLessons.map((l) => (
        <li key={l.slug}>
          <Link
            href={`/cursos/${courseSlug}/${l.slug}`}
            className={`flex items-center gap-2.5 text-xs px-3 py-2 rounded-lg transition-all ${
              l.slug === currentSlug
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
            }`}
          >
            <span className={`font-mono shrink-0 ${l.slug === currentSlug ? 'text-primary' : 'text-gray-600'}`}>
              {String(l.order).padStart(2, '0')}
            </span>
            <span className="truncate">{l.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
