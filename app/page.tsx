import Link from 'next/link'
import type { Metadata } from 'next'
import { courses, futureCourses } from '@/data/courses'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'RonaldoScript | Aprende programación desde cero',
  description:
    'Cursos gratuitos de programación en español con explicaciones simples, ejercicios prácticos y proyectos reales.',
}

const HERO_CODE = `# RonaldoScript — Python desde Cero

nombre = "Python"
version = 3

print(f"Hola, {nombre} {version}! 🐍")
# → Hola, Python 3! 🐍

numeros = [10, 20, 30, 40, 50]
promedio = sum(numeros) / len(numeros)

print(f"Promedio: {promedio}")
# → Promedio: 30.0`

function heroFindComment(line: string): number {
  let inStr = false, strChar = ''
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (!inStr && (ch === '"' || ch === "'")) { inStr = true; strChar = ch }
    else if (inStr && ch === strChar && line[i - 1] !== '\\') { inStr = false }
    else if (!inStr && ch === '#') return i
  }
  return -1
}

function heroHighlight(segment: string): string {
  return segment
    .replace(/(f?"[^"]*"|f?'[^']*')/g, '<span class="text-green-400">$&</span>')
    .replace(/\b(def|class|if|for|while|in|return|import|from|True|False|None)\b/g,
      '<span class="text-purple-400">$1</span>')
    .replace(/\b(print|sum|len)\b/g, '<span class="text-blue-400">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-orange-300">$1</span>')
}

export default function HomePage() {
  const pythonCourse = courses[0]

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-24 border-b border-gray-700">
        {/* Gradiente de fondo */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 15% 60%, #3B82F640 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #FACC1520 0%, transparent 50%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-xs font-mono font-medium">
                  RonaldoScript · Cursos gratuitos
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-50 leading-tight mb-5">
                Aprende{' '}
                <span className="text-primary">programación</span>
                <br />desde cero
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                En español, con proyectos reales y sin experiencia previa necesaria.
                <strong className="text-gray-200"> Completamente gratis.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/cursos"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-primary/20"
                >
                  Explorar cursos →
                </Link>
                <Link
                  href="/cursos/python/que-es-python"
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-accent/30 text-gray-200 hover:text-accent font-semibold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  <span>🐍</span> Empezar Python gratis
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                {[
                  { value: `${pythonCourse.totalLessons}+`, label: 'lecciones' },
                  { value: `${pythonCourse.modules.length}`, label: 'módulos' },
                  { value: '100%', label: 'gratis' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-mono font-bold text-xl text-primary">{s.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code preview */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-black/50 bg-code-bg">
                {/* Editor header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-success/70" />
                  </div>
                  <span className="font-mono text-xs text-gray-400">main.py</span>
                  <span className="ml-auto font-mono text-xs text-gray-600">Python 3</span>
                </div>
                {/* Code */}
                <pre className="p-6 text-sm font-mono leading-relaxed overflow-hidden">
                  <code>
                    {HERO_CODE.split('\n').map((line, i) => {
                      const hashIdx = heroFindComment(line)
                      const codePart = hashIdx >= 0 ? line.slice(0, hashIdx) : line
                      const commentPart = hashIdx >= 0 ? line.slice(hashIdx) : ''
                      const colored =
                        heroHighlight(codePart) +
                        (commentPart ? `<span class="text-gray-500 italic">${commentPart}</span>` : '')
                      return (
                        <span key={i} className="block">
                          <span className="select-none text-gray-700 text-xs w-5 inline-block text-right mr-4">{i + 1}</span>
                          <span dangerouslySetInnerHTML={{ __html: colored }} />
                        </span>
                      )
                    })}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cursos disponibles ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-50 mb-1">Cursos disponibles</h2>
              <p className="text-gray-400 text-sm">Empieza hoy mismo, sin costo, sin tarjeta de crédito.</p>
            </div>
            <Link href="/cursos" className="text-primary hover:text-gray-200 text-sm transition-colors hidden sm:block">
              Ver todos →
            </Link>
          </div>

          {/* Python course card */}
          <Link
            href="/cursos/python"
            className="group block bg-gray-900 border border-gray-700 hover:border-primary/40 rounded-2xl p-6 transition-all mb-5 shadow-sm hover:shadow-primary/5 hover:shadow-lg"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl shrink-0">
                {pythonCourse.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="text-gray-50 font-bold text-xl group-hover:text-primary transition-colors">
                    {pythonCourse.title}
                  </h3>
                  <Badge variant="success">Disponible</Badge>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{pythonCourse.description}</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: '📚', label: `${pythonCourse.totalLessons} lecciones` },
                    { icon: '🗂', label: `${pythonCourse.modules.length} módulos` },
                    { icon: '⭐', label: pythonCourse.level },
                    { icon: '💰', label: 'Gratis' },
                  ].map((tag) => (
                    <span key={tag.label} className="font-mono text-xs text-gray-500">
                      {tag.icon} {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex items-center shrink-0">
                <span className="bg-primary group-hover:bg-primary-dark text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
                  Ver curso →
                </span>
              </div>
            </div>
          </Link>

          {/* Próximamente */}
          <div>
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">
              // próximamente
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {futureCourses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-gray-900/60 border border-gray-700 rounded-xl p-4 opacity-60 cursor-default"
                >
                  <span className="text-2xl block mb-2">{course.icon}</span>
                  <p className="text-gray-300 font-semibold text-sm leading-tight">{course.shortTitle}</p>
                  <p className="font-mono text-xs text-gray-600 mt-1">próximamente</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Qué es RonaldoScript ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 border-y border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-50 mb-3">
              ¿Por qué{' '}
              <span className="text-primary">Ronaldo<span className="text-accent">Script</span></span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
              Una plataforma construida para hispanohablantes que quieren aprender a programar
              desde cero, con cursos gratuitos y explicaciones claras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '💡',
                title: 'Explicaciones simples',
                desc: 'Lenguaje cotidiano, analogías y ejemplos del mundo real. Sin jerga técnica innecesaria.',
              },
              {
                icon: '🏋️',
                title: 'Ejercicios prácticos',
                desc: 'Cada lección tiene ejercicios para que apliques lo aprendido. La práctica enseña más que la teoría.',
              },
              {
                icon: '📊',
                title: 'Progreso guardado',
                desc: 'Regístrate con Google y guarda tu avance en la nube. Retoma desde cualquier dispositivo.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-gray-100 font-bold text-base mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿Para quién es? ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-50 mb-2">¿Para quién son estos cursos?</h2>
            <p className="text-gray-400 text-sm">Sin importar tu edad ni experiencia previa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '🌱',
                title: 'Principiantes absolutos',
                desc: 'Nunca has escrito código. Empezamos desde lo más básico y avanzamos poco a poco.',
              },
              {
                icon: '🎓',
                title: 'Estudiantes',
                desc: 'Estás en la universidad y quieres aprender programación de forma práctica y en español.',
              },
              {
                icon: '💼',
                title: 'Profesionales curiosos',
                desc: 'Trabajas en otro campo y quieres añadir programación a tus habilidades.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-gray-100 font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 border-t border-gray-700">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="font-mono text-xs text-primary mb-3">// empieza hoy</p>
          <h2 className="text-3xl font-bold text-gray-50 mb-4">¿Listo para escribir tu primer código?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            Todos los cursos son completamente gratuitos. No necesitas tarjeta de crédito ni cuenta para comenzar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cursos/python/que-es-python"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 text-sm"
            >
              <span>🐍</span> Empezar Python — es gratis
            </Link>
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-750 border border-gray-700 text-gray-300 hover:text-gray-100 font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
