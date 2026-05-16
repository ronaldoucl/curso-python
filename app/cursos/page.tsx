import Link from 'next/link'
import type { Metadata } from 'next'
import { courses, futureCourses } from '@/data/courses'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Cursos | RonaldoScript',
  description:
    'Cursos gratuitos de programación en español. Aprende Python, JavaScript, React y más desde cero con RonaldoScript.',
}

export default function CursosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-primary mb-2">// cursos disponibles</p>
        <h1 className="text-3xl font-bold text-gray-50 mb-3">Cursos</h1>
        <p className="text-gray-400 max-w-xl leading-relaxed text-sm">
          Aprende programación desde cero, en español, con ejercicios prácticos y quizzes en cada lección.
          Todos los cursos son completamente gratuitos.
        </p>
      </div>

      {/* Cursos disponibles */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <h2 className="text-sm font-mono font-semibold text-gray-400 uppercase tracking-wider">
            Disponibles ahora
          </h2>
        </div>

        <div className="space-y-4">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/cursos/${course.slug}`}
              className="group block bg-gray-900 border border-gray-700 hover:border-primary/40 rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl shrink-0">
                  {course.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-gray-50 font-bold text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <Badge variant="success">Disponible</Badge>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      `📚 ${course.totalLessons} lecciones`,
                      `🗂 ${course.modules.length} módulos`,
                      `⭐ ${course.level}`,
                      `🌐 ${course.language}`,
                      `💰 Gratis`,
                    ].map((tag) => (
                      <span key={tag} className="font-mono text-xs text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:flex items-start pt-1 shrink-0">
                  <span className="bg-primary group-hover:bg-primary-dark text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
                    Ver curso →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Próximamente */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-gray-600" />
          <h2 className="text-sm font-mono font-semibold text-gray-600 uppercase tracking-wider">
            Próximamente
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {futureCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-gray-900/50 border border-gray-700 rounded-2xl p-5 opacity-65 cursor-not-allowed"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl">
                  {course.icon}
                </div>
                <div>
                  <p className="text-gray-300 font-bold text-sm">{course.title}</p>
                  <Badge variant="comingSoon" className="mt-0.5">Próximamente</Badge>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{course.description}</p>
              <span className="font-mono text-xs text-gray-600">⭐ {course.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
