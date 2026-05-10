import Link from 'next/link'
import { totalLessons } from '@/data/courseData'

export default function AcercaDePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <span className="text-6xl">🐍</span>
        <h1 className="text-4xl font-extrabold text-white mt-4 mb-3">
          Python desde Cero
        </h1>
        <p className="text-gray-400 text-lg">por RonaldoScript</p>
      </div>

      <div className="space-y-10 text-gray-300 leading-relaxed">
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">¿Qué es este curso?</h2>
          <p>
            <strong className="text-white">Python desde Cero</strong> es un curso gratuito en español
            diseñado para personas que quieren aprender a programar desde el principio, sin experiencia
            previa. El curso cubre los fundamentos de Python con {totalLessons} lecciones organizadas
            en 5 módulos progresivos.
          </p>
          <p className="mt-3">
            Cada lección incluye una explicación detallada, ejemplos de código, ejercicios prácticos
            y un quiz para reforzar lo aprendido.
          </p>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">¿Por qué Python?</h2>
          <p>
            Python es el lenguaje de programación más popular para principiantes por varias razones:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
            <li>Sintaxis simple y cercana al lenguaje humano.</li>
            <li>Comunidad enorme y recursos abundantes.</li>
            <li>Se usa en desarrollo web, ciencia de datos, IA, automatización y más.</li>
            <li>Muy demandado en el mercado laboral.</li>
            <li>Gratuito y de código abierto.</li>
          </ul>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">Sobre RonaldoScript</h2>
          <p>
            RonaldoScript nació con la misión de acercar la programación a la comunidad hispanohablante.
            Creemos que aprender a programar no debería ser una barrera idiomática, y que todos merecen
            acceso a educación de calidad en su idioma nativo.
          </p>
          <p className="mt-3">
            Este curso es completamente gratuito y siempre lo será. Nuestra meta es que cualquier
            persona de habla hispana pueda aprender Python sin importar su país, edad o experiencia.
          </p>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
          <h2 className="text-white font-bold text-xl mb-4">Tecnología del proyecto</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { tech: 'Next.js 15', desc: 'Framework de React' },
              { tech: 'TypeScript', desc: 'Tipado estático' },
              { tech: 'Tailwind CSS', desc: 'Estilos utilitarios' },
              { tech: 'Supabase', desc: 'Backend y autenticación' },
            ].map((t) => (
              <div key={t.tech} className="bg-gray-800 rounded-xl p-3">
                <p className="text-yellow-400 font-semibold">{t.tech}</p>
                <p className="text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/curso"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          Ir al curso →
        </Link>
      </div>
    </div>
  )
}
