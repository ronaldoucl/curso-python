import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="text-white font-bold text-sm">RonaldoScript</p>
                <p className="text-yellow-400 text-xs">Aprende a programar</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Cursos gratuitos de programación en español, con explicaciones simples, ejercicios prácticos y proyectos reales.
            </p>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Cursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Ver todos los cursos
                </Link>
              </li>
              <li>
                <Link href="/cursos/python" className="text-gray-400 hover:text-white text-sm transition-colors">
                  🐍 Python desde Cero
                </Link>
              </li>
              <li>
                <Link href="/progreso" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Mi progreso
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca-de" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RonaldoScript · Hecho con ❤️ para la comunidad hispana
          </p>
        </div>
      </div>
    </footer>
  )
}
