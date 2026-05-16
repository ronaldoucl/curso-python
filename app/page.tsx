import Link from 'next/link'
import type { Metadata } from 'next'
import { courses, futureCourses } from '@/data/courses'

export const metadata: Metadata = {
  title: 'RonaldoScript | Aprende programación desde cero',
  description:
    'Cursos gratuitos de programación en español con explicaciones simples, ejercicios prácticos y proyectos reales.',
}

export default function HomePage() {
  const pythonCourse = courses[0]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 pt-20 pb-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 50%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 70% 30%, #8b5cf6 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
            <span>🚀</span>
            <span className="text-yellow-400 text-sm font-medium">RonaldoScript · Cursos gratuitos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Aprende programación{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
              desde cero
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            En español, con proyectos reales y sin experiencia previa necesaria.{' '}
            <strong className="text-white">Completamente gratis.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl text-lg transition-colors shadow-lg shadow-yellow-400/20"
            >
              Explorar cursos 🚀
            </Link>
            <Link
              href="/cursos/python/que-es-python"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors"
            >
              Empezar Python gratis 🐍
            </Link>
          </div>

          <div className="flex justify-center gap-8 mt-14">
            {[
              { value: `${pythonCourse.totalLessons}+`, label: 'lecciones' },
              { value: `${pythonCourse.modules.length}`, label: 'módulos' },
              { value: '100%', label: 'gratis' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-yellow-400">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué es RonaldoScript */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">¿Qué es RonaldoScript?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Una plataforma de aprendizaje creada para hispanohablantes que quieren aprender a programar desde cero, con cursos
              gratuitos, explicaciones claras y proyectos prácticos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '💡',
                title: 'Explicaciones simples',
                desc: 'Usamos lenguaje cotidiano, analogías y ejemplos del mundo real. Sin jerga técnica innecesaria.',
              },
              {
                emoji: '🏋️',
                title: 'Ejercicios prácticos',
                desc: 'Cada lección tiene ejercicios para que apliques lo aprendido. La práctica es lo que realmente enseña.',
              },
              {
                emoji: '📊',
                title: 'Progreso guardado',
                desc: 'Regístrate con Google y guarda tu avance en la nube. Retoma desde cualquier dispositivo.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <div className="text-5xl mb-4">{b.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos disponibles */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Cursos disponibles</h2>
            <p className="text-gray-400">Empieza hoy mismo, sin costo, sin tarjeta de crédito.</p>
          </div>

          {/* Curso disponible: Python */}
          <div className="mb-6">
            <Link
              href="/cursos/python"
              className="block bg-gray-900 border border-gray-800 hover:border-yellow-400/40 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="text-5xl shrink-0">{pythonCourse.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-xl group-hover:text-yellow-400 transition-colors">
                      {pythonCourse.title}
                    </h3>
                    <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-2.5 py-0.5 font-medium">
                      Disponible
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{pythonCourse.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span>📚 {pythonCourse.totalLessons} lecciones</span>
                    <span>🗂 {pythonCourse.modules.length} módulos</span>
                    <span>⭐ {pythonCourse.level}</span>
                    <span>🌐 {pythonCourse.language}</span>
                    <span>💰 Gratis</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center shrink-0">
                  <span className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Ver curso →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Próximamente */}
          <div>
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Próximamente</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureCourses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 opacity-70"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{course.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{course.title}</p>
                      <span className="text-xs text-gray-500 bg-gray-800 rounded-full px-2 py-0.5">Próximamente</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">¿Para quién son estos cursos?</h2>
            <p className="text-gray-400">No importa tu edad ni tu experiencia previa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🌱',
                title: 'Principiantes absolutos',
                desc: 'Nunca has escrito código en tu vida. Empezamos desde lo más básico y avanzamos poco a poco.',
              },
              {
                emoji: '🎓',
                title: 'Estudiantes',
                desc: 'Estás en la universidad o secundaria y quieres aprender programación de forma práctica y en español.',
              },
              {
                emoji: '💼',
                title: 'Profesionales curiosos',
                desc: 'Trabajas en otro campo y quieres añadir programación a tus habilidades para automatizar tareas.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-linear-to-br from-yellow-400/10 to-orange-400/10 border-t border-gray-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para empezar?</h2>
          <p className="text-gray-400 mb-8">
            Todos los cursos son completamente gratuitos. No necesitas tarjeta de crédito ni cuenta para comenzar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos/python/que-es-python"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-yellow-400/20"
            >
              Empezar Python ahora — gratis 🐍
            </Link>
            <Link
              href="/cursos"
              className="inline-block bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
