import Link from 'next/link'
import { modules, totalLessons } from '@/data/courseData'

export default function HomePage() {
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
            <span>🐍</span>
            <span className="text-yellow-400 text-sm font-medium">RonaldoScript · Curso gratuito</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Aprende Python{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
              desde Cero
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprende programación paso a paso,{' '}
            <strong className="text-white">en español</strong>, con ejemplos simples y ejercicios
            prácticos. Sin experiencia previa necesaria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/curso/que-es-python"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl text-lg transition-colors shadow-lg shadow-yellow-400/20"
            >
              Empezar gratis 🚀
            </Link>
            <Link
              href="/curso"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors"
            >
              Ver lecciones
            </Link>
          </div>

          <div className="flex justify-center gap-8 mt-14">
            {[
              { value: `${totalLessons}`, label: 'lecciones' },
              { value: '5', label: 'módulos' },
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

      {/* ¿Para quién es? */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">¿Para quién es este curso?</h2>
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

      {/* Qué vas a aprender */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Qué vas a aprender</h2>
            <p className="text-gray-400">Un currículo diseñado para que avances con confianza</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '✅ Cómo funciona Python y dónde programar',
              '✅ Variables, tipos de datos y operadores',
              '✅ Condicionales if / elif / else',
              '✅ Bucles for y while',
              '✅ Listas, diccionarios, tuplas y sets',
              '✅ Crear y reutilizar funciones',
              '✅ Buenas prácticas de programación',
              '✅ Ejercicios prácticos en cada lección',
              '✅ Quiz para reforzar lo aprendido',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gray-900 rounded-xl p-4 border border-gray-800"
              >
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">¿Por qué Python desde Cero?</h2>
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

      {/* Preview módulos */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">El contenido del curso</h2>
            <p className="text-gray-400">
              {totalLessons} lecciones organizadas en 5 módulos progresivos
            </p>
          </div>
          <div className="space-y-4">
            {modules.map((mod) => (
              <div
                key={mod.number}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-400 text-gray-900 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                    {mod.number}
                  </span>
                  <h3 className="text-white font-bold text-lg">{mod.title}</h3>
                  <span className="ml-auto text-gray-500 text-sm">
                    {mod.lessons.length} lecciones
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {mod.lessons.map((lesson) => (
                    <Link
                      key={lesson.slug}
                      href={`/curso/${lesson.slug}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors py-1"
                    >
                      <span className="text-gray-600">▸</span>
                      {lesson.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/curso"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Ir al curso completo →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-linear-to-br from-yellow-400/10 to-orange-400/10 border-t border-gray-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para empezar?</h2>
          <p className="text-gray-400 mb-8">
            El curso es completamente gratuito. No necesitas tarjeta de crédito ni cuenta para
            empezar.
          </p>
          <Link
            href="/curso/que-es-python"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-yellow-400/20"
          >
            Comenzar ahora — es gratis 🐍
          </Link>
        </div>
      </section>
    </div>
  )
}
