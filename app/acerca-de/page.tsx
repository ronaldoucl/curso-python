import Link from 'next/link'
import type { Metadata } from 'next'
import { getCourseBySlug } from '@/data/courses'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Acerca de | RonaldoScript',
  description: 'Conoce RonaldoScript: la plataforma de cursos gratuitos de programación en español.',
}

const pythonCourse = getCourseBySlug('python')!
const totalLessons = pythonCourse.totalLessons
const totalModules = pythonCourse.modules.length
const basicCount = pythonCourse.modules.filter((m) => m.level === 'básico' || !m.level).length
const intermediateCount = pythonCourse.modules.filter((m) => m.level === 'intermedio').length
const practicalCount = pythonCourse.modules.filter((m) => m.level === 'practico').length

export default function AcercaDePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 mb-5">
          <span className="text-primary font-mono font-extrabold text-3xl">RS</span>
        </div>
        <p className="font-mono text-xs text-primary mb-2">// ronaldoscript</p>
        <h1 className="text-4xl font-extrabold text-gray-50 mb-2">RonaldoScript</h1>
        <p className="text-gray-400 text-sm mb-6">Cursos gratuitos de programación en español</p>

        <div className="flex justify-center gap-8">
          {[
            { value: totalLessons, label: 'lecciones' },
            { value: totalModules, label: 'módulos' },
            { value: 3, label: 'niveles' },
            { value: '100%', label: 'gratis' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-mono font-bold text-2xl text-accent">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">

        {/* Objetivo */}
        <section className="bg-gray-900 border border-gray-700 rounded-2xl p-7">
          <h2 className="text-gray-100 font-bold text-base mb-4 flex items-center gap-2">
            <span>🎯</span> Objetivo del curso
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-gray-100">Python desde Cero</strong> tiene un objetivo claro: llevarte de
            no saber nada de programación a escribir código Python real que resuelve problemas del mundo real.
          </p>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            No se trata de memorizar sintaxis ni de teoría aburrida. Cada lección está diseñada para
            que entiendas el <em className="text-gray-100">porqué</em> de cada concepto, practiques con
            ejemplos útiles y avances a tu ritmo, sin presión.
          </p>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Al terminar habrás aprendido a crear scripts de automatización, consumir APIs,
            manipular archivos y datos, y construir herramientas reales desde la línea de comandos.
          </p>
        </section>

        {/* Contenido */}
        <section className="bg-gray-900 border border-gray-700 rounded-2xl p-7">
          <h2 className="text-gray-100 font-bold text-base mb-5 flex items-center gap-2">
            <span>📚</span> Qué vas a aprender
          </h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 bg-accent/5 border border-accent/15 rounded-xl">
              <span className="text-accent text-lg mt-0.5">🟡</span>
              <div>
                <p className="font-semibold text-gray-100 text-sm mb-1">
                  Python Básico <span className="font-mono text-xs text-gray-500">— {basicCount} módulos</span>
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Variables, tipos de datos, operadores, condicionales, bucles, listas, diccionarios,
                  tuplas, sets y funciones. La base sólida que todo programador necesita.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-primary/5 border border-primary/15 rounded-xl">
              <span className="text-primary text-lg mt-0.5">🔵</span>
              <div>
                <p className="font-semibold text-gray-100 text-sm mb-1">
                  Python Intermedio <span className="font-mono text-xs text-gray-500">— {intermediateCount} módulos</span>
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Programación orientada a objetos, manejo de archivos, excepciones, módulos,
                  expresiones regulares, decoradores, generadores y más.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-success/5 border border-success/15 rounded-xl">
              <span className="text-success text-lg mt-0.5">🟢</span>
              <div>
                <p className="font-semibold text-gray-100 text-sm mb-1">
                  Python Práctico <span className="font-mono text-xs text-gray-500">— {practicalCount} módulos</span>
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Automatización, web scraping, consumo de APIs, manejo de Excel, herramientas CLI
                  y un proyecto final completo.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-600 font-mono">
            // cada lección: explicación · código · ejercicio · quiz
          </p>
        </section>

        {/* Por qué aprovechar */}
        <section className="bg-gray-900 border border-gray-700 rounded-2xl p-7">
          <h2 className="text-gray-100 font-bold text-base mb-4 flex items-center gap-2">
            <span>💡</span> Por qué deberías aprovecharlo ahora
          </h2>
          <ul className="space-y-3">
            {[
              { icon: '🆓', text: 'Es completamente gratis y siempre lo será. Sin suscripciones, sin pagos ocultos.' },
              { icon: '🇪🇸', text: 'En español de verdad, con un tono cercano y sin traducciones raras de manuales.' },
              { icon: '⚡', text: 'Sin registro obligatorio. Puedes empezar ahora mismo, sin crear cuenta.' },
              { icon: '📈', text: 'Python es el lenguaje más demandado en ofertas de empleo tech a nivel global.' },
              { icon: '🎯', text: 'El contenido va de lo más simple hasta proyectos reales, sin saltos bruscos.' },
              { icon: '💾', text: 'Tu progreso se guarda automáticamente, localmente o en la nube si creas cuenta.' },
            ].map((item) => (
              <li key={item.icon} className="flex gap-3">
                <span className="text-base shrink-0">{item.icon}</span>
                <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sobre RonaldoScript */}
        <section className="bg-gray-900 border border-gray-700 rounded-2xl p-7">
          <h2 className="text-gray-100 font-bold text-base mb-4 flex items-center gap-2">
            <span>👨‍💻</span> Sobre RonaldoScript
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Soy <strong className="text-gray-100">Ronaldo</strong>, desarrollador de software con experiencia
            en desarrollo web fullstack, automatización y arquitectura de sistemas. He trabajado con
            tecnologías como React, Next.js, TypeScript, Python y bases de datos relacionales y no relacionales.
          </p>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Creé <strong className="text-gray-100">RonaldoScript</strong> con una sola misión: acercar la
            programación a la comunidad hispanohablante de forma honesta, práctica y sin barreras.
            Creo que aprender a programar puede cambiarle la vida a cualquier persona, y que ese acceso
            no debería depender del idioma ni del dinero.
          </p>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Este curso lo construí desde cero, lección por lección, pensando en el estudiante que no
            sabe por dónde empezar. Cada explicación, cada analogía y cada ejercicio fue elegido para
            que tenga sentido real, no solo en papel.
          </p>
          <div className="mt-5 pt-5 border-t border-gray-700 flex flex-wrap gap-2">
            {['Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Automatización'].map((tag) => (
              <Badge key={tag} variant="mono">{tag}</Badge>
            ))}
          </div>
        </section>

        {/* Stack técnico */}
        <section className="bg-gray-900 border border-gray-700 rounded-2xl p-7">
          <h2 className="text-gray-100 font-bold text-base mb-4 flex items-center gap-2">
            <span>🛠</span> Tecnología del proyecto
          </h2>
          <p className="text-xs text-gray-500 font-mono mb-4">
            // construido desde cero, sin plantillas ni builders
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { tech: 'Next.js 16', desc: 'Framework de React con App Router' },
              { tech: 'TypeScript', desc: 'Tipado estático en todo el proyecto' },
              { tech: 'Tailwind CSS v4', desc: 'Sistema de diseño utilitario' },
              { tech: 'Supabase', desc: 'Backend, base de datos y autenticación' },
            ].map((t) => (
              <div key={t.tech} className="bg-gray-800 rounded-xl p-3.5 border border-gray-700">
                <p className="text-accent font-mono font-semibold text-xs">{t.tech}</p>
                <p className="text-gray-400 text-xs mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparte */}
        <section className="bg-accent/5 border border-accent/20 rounded-2xl p-7 text-center">
          <p className="text-3xl mb-3">🙌</p>
          <h2 className="text-gray-100 font-bold text-base mb-3">¿Te está siendo útil?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-4 leading-relaxed">
            Si este curso te está ayudando, la mejor forma de apoyarlo es compartirlo con alguien
            que también quiera aprender a programar.
          </p>
          <p className="text-accent font-semibold text-sm">
            Compártelo con un amigo, en tu grupo de WhatsApp, en redes. Es gratis y siempre lo será.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center mt-10 space-y-3">
        <Link
          href="/cursos/logica-programacion/que-es-la-logica-de-programacion"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-primary/20"
        >
          <span>🧠</span> Empezar con Lógica — es gratis →
        </Link>
        <p className="text-gray-600 font-mono text-xs">// sin registro · sin tarjeta · empieza ahora</p>
      </div>
    </div>
  )
}
