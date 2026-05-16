import Link from 'next/link'
import type { Metadata } from 'next'
import { courses, futureCourses } from '@/data/courses'

export const metadata: Metadata = {
  title: 'Cursos | RonaldoScript',
  description:
    'Explora cursos gratuitos de programación en español por RonaldoScript. Aprende Python, JavaScript, React y más desde cero.',
}

export default function CursosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">Cursos</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Cursos gratuitos de programación en español. Aprende a tu ritmo, con ejercicios prácticos y quizzes en cada lección.
        </p>
      </div>

      {/* Cursos disponibles */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
          Disponibles ahora
        </h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/cursos/${course.slug}`}
              className="block bg-gray-900 border border-gray-800 hover:border-yellow-400/40 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="text-5xl shrink-0">{course.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-xl group-hover:text-yellow-400 transition-colors">
                      {course.title}
                    </h3>
                    <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-2.5 py-0.5 font-medium">
                      Disponible
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span>📚 {course.totalLessons} lecciones</span>
                    <span>🗂 {course.modules.length} módulos</span>
                    <span>⭐ {course.level}</span>
                    <span>🌐 {course.language}</span>
                    <span>💰 Gratis</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center shrink-0">
                  <span className="bg-yellow-400 group-hover:bg-yellow-300 text-gray-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
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
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-500 inline-block"></span>
          Próximamente
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {futureCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 opacity-70 cursor-not-allowed"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{course.icon}</span>
                <div>
                  <p className="text-white font-bold text-base">{course.title}</p>
                  <span className="text-xs text-gray-500 bg-gray-800 rounded-full px-2.5 py-0.5">
                    Próximamente
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span>⭐ {course.level}</span>
                <span>🌐 {course.language}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
