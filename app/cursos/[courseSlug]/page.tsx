'use client'

import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourseBySlug } from '@/data/courses'
import { getLessonProgress } from '@/lib/progress'
import { useUser } from '@/hooks/useUser'
import LessonCard from '@/components/course/LessonCard'
import ProgressBar from '@/components/ui/ProgressBar'
import AnonymousBanner from '@/components/ui/AnonymousBanner'
import type { Module } from '@/types'

interface Props {
  params: Promise<{ courseSlug: string }>
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const LEVEL_CONFIG = {
  básico: {
    label: 'Básico',
    numberBg: 'bg-accent/15 text-accent border border-accent/30',
    badge: 'bg-accent/10 text-accent border-accent/30',
  },
  intermedio: {
    label: 'Intermedio',
    numberBg: 'bg-primary/15 text-primary border border-primary/30',
    badge: 'bg-primary/10 text-primary border-primary/30',
  },
  practico: {
    label: 'Práctico',
    numberBg: 'bg-success/15 text-success border border-success/30',
    badge: 'bg-success/10 text-success border-success/30',
  },
  nivel2: {
    label: 'Nivel 2',
    numberBg: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
  nivel3: {
    label: 'Nivel 3',
    numberBg: 'bg-violet-500/15 text-violet-400 border border-violet-500/30',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  },
  nivel4: {
    label: 'Nivel 4',
    numberBg: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  },
  nivel5: {
    label: 'Nivel 5',
    numberBg: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
  nivel6: {
    label: 'Nivel 6',
    numberBg: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
}

function ModuleSection({
  mod,
  courseSlug,
  completedSlugs,
  numberBg,
}: {
  mod: Module
  courseSlug: string
  completedSlugs: string[]
  numberBg: string
}) {
  const completed = mod.lessons.filter((l) => completedSlugs.includes(l.slug)).length
  const [open, setOpen] = useState(true)

  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 bg-gray-900 hover:bg-gray-800 transition-colors text-left"
      >
        <span className={`font-mono font-bold text-xs w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${numberBg}`}>
          {mod.number}
        </span>
        <h3 className="text-gray-100 font-semibold text-sm flex-1">{mod.title}</h3>
        <span className="font-mono text-xs text-gray-600 mr-2">
          {completed}/{mod.lessons.length}
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="px-3 py-2 space-y-1.5 bg-gray-950/60">
          {mod.lessons.map((lesson) => (
            <LessonCard
              key={lesson.slug}
              lesson={lesson}
              courseSlug={courseSlug}
              completed={completedSlugs.includes(lesson.slug)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function LevelSection({
  title,
  badge,
  mods,
  courseSlug,
  completedSlugs,
  numberBg,
}: {
  title: string
  badge: string
  mods: Module[]
  courseSlug: string
  completedSlugs: string[]
  numberBg: string
}) {
  if (mods.length === 0) return null

  const totalInLevel = mods.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedInLevel = mods.reduce(
    (acc, m) => acc + m.lessons.filter((l) => completedSlugs.includes(l.slug)).length,
    0
  )

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2.5 mb-4">
        <h2 className="text-base font-bold text-gray-200">{title}</h2>
        <span className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${badge}`}>
          nivel
        </span>
        <span className="font-mono text-xs text-gray-600 ml-auto">
          {completedInLevel}/{totalInLevel}
        </span>
      </div>
      <div className="space-y-2.5">
        {mods.map((mod) => (
          <ModuleSection
            key={mod.number}
            mod={mod}
            courseSlug={courseSlug}
            completedSlugs={completedSlugs}
            numberBg={numberBg}
          />
        ))}
      </div>
    </div>
  )
}

export default function CourseDetailPage({ params }: Props) {
  const { courseSlug } = use(params)
  const course = getCourseBySlug(courseSlug)
  if (!course) notFound()

  const { user, loading } = useUser()
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [loadingProgress, setLoadingProgress] = useState(true)

  useEffect(() => {
    if (loading) return
    getLessonProgress(user?.id ?? null, courseSlug)
      .then(setCompletedSlugs)
      .catch(console.error)
      .finally(() => setLoadingProgress(false))
  }, [user, loading, courseSlug])

  const basicModules = course.modules.filter((m) => m.level === 'básico' || !m.level)
  const intermediateModules = course.modules.filter((m) => m.level === 'intermedio')
  const practicalModules = course.modules.filter((m) => m.level === 'practico')
  const nivel2Modules = course.modules.filter((m) => m.level === 'nivel2')
  const nivel3Modules = course.modules.filter((m) => m.level === 'nivel3')
  const nivel4Modules = course.modules.filter((m) => m.level === 'nivel4')
  const nivel5Modules = course.modules.filter((m) => m.level === 'nivel5')
  const nivel6Modules = course.modules.filter((m) => m.level === 'nivel6')

  // Primera lección del curso para el CTA
  const firstLesson = course.modules[0]?.lessons[0]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-gray-600 mb-8">
        <Link href="/cursos" className="hover:text-gray-400 transition-colors">cursos</Link>
        <span>/</span>
        <span className="text-gray-400">{course.slug}</span>
      </nav>

      {/* Header del curso */}
      <div className="flex items-start gap-5 mb-10">
        <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-4xl shrink-0">
          {course.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-50 mb-1">{course.title}</h1>
          <p className="text-gray-400 text-sm mb-2">{course.description}</p>
          <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
            <span>{course.totalLessons} lecciones</span>
            <span className="text-gray-700">·</span>
            <span>{course.modules.length} módulos</span>
            <span className="text-gray-700">·</span>
            <span>{course.level}</span>
            <span className="text-gray-700">·</span>
            <span className="text-success">Gratis</span>
          </div>
        </div>
      </div>

      {/* Progreso */}
      {!loadingProgress && (
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-200 font-semibold text-sm">Tu progreso</h2>
            <div className="flex items-center gap-3">
              {!user && <span className="font-mono text-xs text-gray-600">guardado localmente</span>}
              {firstLesson && completedSlugs.length === 0 && (
                <Link
                  href={`/cursos/${courseSlug}/${firstLesson.slug}`}
                  className="text-xs bg-primary hover:bg-primary-dark text-white font-semibold px-3 py-1.5 rounded-lg transition-colors"
                >
                  Empezar →
                </Link>
              )}
            </div>
          </div>
          <ProgressBar completed={completedSlugs.length} total={course.totalLessons} />
        </div>
      )}

      {/* Banner anónimo */}
      {!loading && !user && (
        <div className="mb-8">
          <AnonymousBanner />
        </div>
      )}

      {/* Módulos por nivel */}
      <LevelSection
        title={courseSlug === 'typescript' ? 'Nivel 1: Fundamentos de TypeScript' : (nivel2Modules.length > 0 || nivel3Modules.length > 0) ? 'Nivel 1: Fundamentos absolutos' : `Nivel 1: Fundamentos de ${course.shortTitle}`}
        badge={LEVEL_CONFIG.básico.badge}
        mods={basicModules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.básico.numberBg}
      />
      <LevelSection
        title={`${course.shortTitle} Intermedio`}
        badge={LEVEL_CONFIG.intermedio.badge}
        mods={intermediateModules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.intermedio.numberBg}
      />
      <LevelSection
        title={`${course.shortTitle} Práctico`}
        badge={LEVEL_CONFIG.practico.badge}
        mods={practicalModules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.practico.numberBg}
      />
      <LevelSection
        title={courseSlug === 'typescript' ? 'Nivel 2: Funciones y objetos tipados' : 'Nivel 2: Datos, funciones y lógica'}
        badge={LEVEL_CONFIG.nivel2.badge}
        mods={nivel2Modules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.nivel2.numberBg}
      />
      <LevelSection
        title={courseSlug === 'typescript' ? 'Nivel 3: Tipado más inteligente' : 'Nivel 3: JavaScript en el navegador'}
        badge={LEVEL_CONFIG.nivel3.badge}
        mods={nivel3Modules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.nivel3.numberBg}
      />
      <LevelSection
        title={courseSlug === 'typescript' ? 'Nivel 4: Genéricos y utilidades' : 'Nivel 4: JavaScript moderno'}
        badge={LEVEL_CONFIG.nivel4.badge}
        mods={nivel4Modules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.nivel4.numberBg}
      />
      <LevelSection
        title="Nivel 5: Asincronía y APIs"
        badge={LEVEL_CONFIG.nivel5.badge}
        mods={nivel5Modules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.nivel5.numberBg}
      />
      <LevelSection
        title="Nivel 6: Herramientas, calidad y proyectos"
        badge={LEVEL_CONFIG.nivel6.badge}
        mods={nivel6Modules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg={LEVEL_CONFIG.nivel6.numberBg}
      />

      {/* Roadmap — próximos módulos */}
      {course.roadmap && course.roadmap.length > 0 && (
        <div className="mt-4 mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <h2 className="text-base font-bold text-gray-200">Próximamente</h2>
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border bg-gray-800/60 text-gray-500 border-gray-700">
              en desarrollo
            </span>
          </div>
          <div className="border border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-800">
            {course.roadmap.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 bg-gray-950/40"
              >
                <span className="font-mono text-xs w-6 h-6 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-600 shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-500">{topic}</span>
                <span className="ml-auto text-xs font-mono text-gray-700">próximamente</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
