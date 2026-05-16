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
      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
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
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-gray-900 hover:bg-gray-800/70 transition-colors text-left"
      >
        <span className={`${numberBg} font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0`}>
          {mod.number}
        </span>
        <h3 className="text-white font-bold text-base flex-1">{mod.title}</h3>
        <span className="text-gray-500 text-sm mr-2">
          {completed}/{mod.lessons.length}
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="px-3 py-2 space-y-1.5 bg-gray-950/40">
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
  badgeStyle,
  mods,
  courseSlug,
  completedSlugs,
  numberBg,
}: {
  title: string
  badge: string
  badgeStyle: string
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
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeStyle}`}>
          {badge}
        </span>
        <span className="text-gray-600 text-sm ml-auto">
          {completedInLevel}/{totalInLevel}
        </span>
      </div>
      <div className="space-y-3">
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/cursos" className="hover:text-gray-300 transition-colors">Cursos</Link>
        <span>›</span>
        <span className="text-gray-300">{course.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{course.icon}</span>
          <h1 className="text-3xl font-bold text-white">{course.title}</h1>
        </div>
        <p className="text-gray-400 mb-2">{course.description}</p>
        <p className="text-gray-500 text-sm">
          {course.totalLessons} lecciones · {course.modules.length} módulos · {course.level} · {course.language}
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
        title={`${course.shortTitle} Básico`}
        badge="Nivel Básico"
        badgeStyle="bg-yellow-400/15 text-yellow-400 border-yellow-400/30"
        mods={basicModules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg="bg-yellow-400 text-gray-900"
      />

      <LevelSection
        title={`${course.shortTitle} Intermedio`}
        badge="Nivel Intermedio"
        badgeStyle="bg-blue-500/15 text-blue-400 border-blue-500/30"
        mods={intermediateModules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg="bg-blue-500 text-white"
      />

      <LevelSection
        title={`${course.shortTitle} Práctico`}
        badge="Nivel Práctico"
        badgeStyle="bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
        mods={practicalModules}
        courseSlug={courseSlug}
        completedSlugs={completedSlugs}
        numberBg="bg-emerald-500 text-white"
      />
    </div>
  )
}
