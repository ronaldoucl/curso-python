import Link from 'next/link'
import { totalLessons, modules } from '@/data/courseData'

const totalModules = modules.length
const basicCount = modules.filter((m) => m.level === 'básico' || !m.level).length
const intermediateCount = modules.filter((m) => m.level === 'intermedio').length
const practicalCount = modules.filter((m) => m.level === 'practico').length

export default function AcercaDePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-5">
          <span className="text-5xl">🐍</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-3">Python desde Cero</h1>
        <p className="text-gray-400 text-lg">por RonaldoScript</p>
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">{totalLessons}</p>
            <p className="text-gray-500">lecciones</p>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">{totalModules}</p>
            <p className="text-gray-500">módulos</p>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">3</p>
            <p className="text-gray-500">niveles</p>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">100%</p>
            <p className="text-gray-500">gratis</p>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">

        {/* Objetivo */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">🎯 Objetivo del curso</h2>
          <p>
            <strong className="text-white">Python desde Cero</strong> tiene un objetivo claro: llevarte de
            no saber nada de programación a escribir código Python real que resuelve problemas del mundo real.
          </p>
          <p className="mt-3">
            No se trata de memorizar sintaxis ni de teoría aburrida. Cada lección está diseñada para
            que entiendas el <em className="text-white">porqué</em> de cada concepto, practiques con
            ejemplos útiles y avances a tu ritmo, sin presión.
          </p>
          <p className="mt-3">
            Al terminar el curso habrás aprendido a crear scripts de automatización, consumir APIs,
            manipular archivos y datos, y construir herramientas reales desde la línea de comandos.
          </p>
        </section>

        {/* Contenido */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-5">📚 Qué vas a aprender</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-yellow-400/5 border border-yellow-400/15 rounded-xl">
              <span className="text-yellow-400 text-xl mt-0.5">🟡</span>
              <div>
                <p className="font-semibold text-white mb-1">
                  Python Básico — {basicCount} módulos
                </p>
                <p className="text-sm text-gray-400">
                  Variables, tipos de datos, operadores, condicionales, bucles, listas, diccionarios,
                  tuplas, sets y funciones. La base sólida que todo programador necesita.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl">
              <span className="text-blue-400 text-xl mt-0.5">🔵</span>
              <div>
                <p className="font-semibold text-white mb-1">
                  Python Intermedio — {intermediateCount} módulos
                </p>
                <p className="text-sm text-gray-400">
                  Programación orientada a objetos, manejo de archivos, excepciones, módulos,
                  expresiones regulares, decoradores, generadores y más.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl">
              <span className="text-emerald-400 text-xl mt-0.5">🟢</span>
              <div>
                <p className="font-semibold text-white mb-1">
                  Python Práctico — {practicalCount} módulos
                </p>
                <p className="text-sm text-gray-400">
                  Automatización de tareas, web scraping, consumo de APIs, envío de correos,
                  manejo de Excel, herramientas CLI y un proyecto final completo.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-gray-500">
            Cada lección incluye explicación detallada, ejemplo de código ejecutable, ejercicio práctico
            y quiz con retroalimentación personalizada.
          </p>
        </section>

        {/* Por qué aprovechar */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">💡 Por qué deberías aprovecharlo ahora</h2>
          <ul className="space-y-3">
            {[
              {
                icon: '🆓',
                text: 'Es completamente gratis y siempre lo será. Sin suscripciones, sin pagos ocultos.',
              },
              {
                icon: '🇪🇸',
                text: 'En español de verdad, con un tono cercano y sin traducciones raras de manuales.',
              },
              {
                icon: '⚡',
                text: 'Sin registro obligatorio. Puedes empezar ahora mismo, sin crear cuenta.',
              },
              {
                icon: '📈',
                text: 'Python es el lenguaje más demandado en ofertas de empleo de tecnología a nivel global.',
              },
              {
                icon: '🎯',
                text: 'El contenido va de lo más simple hasta proyectos reales, sin saltos bruscos.',
              },
              {
                icon: '💾',
                text: 'Tu progreso se guarda automáticamente, localmente o en la nube si creas una cuenta.',
              },
            ].map((item) => (
              <li key={item.icon} className="flex gap-3">
                <span className="text-lg shrink-0">{item.icon}</span>
                <span className="text-gray-300 text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sobre RonaldoScript */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">👨‍💻 Sobre RonaldoScript</h2>
          <p>
            Soy <strong className="text-white">Ronaldo</strong>, desarrollador de software con experiencia
            en desarrollo web fullstack, automatización y arquitectura de sistemas. He trabajado con
            tecnologías como React, Next.js, TypeScript, Python y bases de datos relacionales y no
            relacionales.
          </p>
          <p className="mt-3">
            Creé <strong className="text-white">RonaldoScript</strong> con una sola misión: acercar la
            programación a la comunidad hispanohablante de una forma honesta, práctica y sin barreras.
            Creo que aprender a programar puede cambiarle la vida a cualquier persona, y que ese acceso
            no debería depender del idioma ni del dinero.
          </p>
          <p className="mt-3">
            Este curso lo construí desde cero, lección por lección, pensando en el estudiante que no
            sabe por dónde empezar. Cada explicación, cada analogía y cada ejercicio fue elegido para
            que tenga sentido real, no solo en papel.
          </p>
          <div className="mt-5 pt-5 border-t border-gray-800 flex flex-wrap gap-2">
            {['Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Automatización'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </section>

        {/* Comparte */}
        <section className="bg-linear-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-2xl p-7 text-center">
          <p className="text-3xl mb-3">🙌</p>
          <h2 className="text-white font-bold text-xl mb-3">¿Te está siendo útil?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-5">
            Si este curso te está ayudando, la mejor forma de apoyarlo es compartirlo con alguien
            que también quiera aprender a programar. Una sola persona a quien le llegue puede cambiar
            su trayectoria profesional.
          </p>
          <p className="text-yellow-400 font-semibold text-sm">
            Compártelo con un amigo, en tu grupo de WhatsApp, en redes sociales o en tu comunidad.
            Es gratis y siempre lo será.
          </p>
        </section>

        {/* Stack técnico */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">🛠 Tecnología del proyecto</h2>
          <p className="text-sm text-gray-400 mb-5">
            Esta plataforma fue construida de manera completamente personalizada, sin usar plantillas
            ni builders. Cada componente, ruta y función fue escrita desde cero.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { tech: 'Next.js 16', desc: 'Framework de React con App Router' },
              { tech: 'TypeScript', desc: 'Tipado estático en todo el proyecto' },
              { tech: 'Tailwind CSS', desc: 'Sistema de diseño utilitario' },
              { tech: 'Supabase', desc: 'Backend, base de datos y autenticación' },
            ].map((t) => (
              <div key={t.tech} className="bg-gray-800 rounded-xl p-3 border border-gray-700/50">
                <p className="text-yellow-400 font-semibold">{t.tech}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 space-y-3">
        <Link
          href="/curso"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          Empezar el curso →
        </Link>
        <p className="text-gray-600 text-xs">Sin registro. Sin tarjeta. Empieza ahora.</p>
      </div>
    </div>
  )
}
