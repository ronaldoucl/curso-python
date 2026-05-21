import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-xs">RS</span>
              </div>
              <span className="text-gray-50 font-bold">
                Ronaldo<span className="text-primary">Script</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Aprende programación desde cero, en español y con proyectos reales.
              Cursos gratuitos para la comunidad hispana.
            </p>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="text-gray-200 font-semibold text-sm mb-3">Cursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                  Ver todos los cursos
                </Link>
              </li>
              <li>
                <Link href="/cursos/logica-programacion" className="text-gray-400 hover:text-gray-200 text-sm transition-colors inline-flex items-center gap-1.5">
                  <span className="font-mono text-accent text-xs">🧠</span>
                  Lógica de Programación
                </Link>
              </li>
              <li>
                <Link href="/cursos/python" className="text-gray-400 hover:text-gray-200 text-sm transition-colors inline-flex items-center gap-1.5">
                  <span className="font-mono text-accent text-xs">🐍</span>
                  Python desde Cero
                </Link>
              </li>
              <li>
                <Link href="/progreso" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                  Mi progreso
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-gray-200 font-semibold text-sm mb-3">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca-de" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs font-mono">
            © {new Date().getFullYear()} RonaldoScript
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con ❤️ para la comunidad hispana
          </p>
        </div>
      </div>
    </footer>
  )
}
