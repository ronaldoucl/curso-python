import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐍</span>
              <div>
                <p className="text-white font-bold text-sm">RonaldoScript</p>
                <p className="text-yellow-400 text-xs">Python desde Cero</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aprende programación paso a paso, en español, con ejemplos simples y ejercicios prácticos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Curso</h3>
            <ul className="space-y-2">
              <li><Link href="/curso" className="text-gray-400 hover:text-white text-sm transition-colors">Ver todas las lecciones</Link></li>
              <li><Link href="/progreso" className="text-gray-400 hover:text-white text-sm transition-colors">Mi progreso</Link></li>
              <li><Link href="/curso/que-es-python" className="text-gray-400 hover:text-white text-sm transition-colors">Empezar desde el principio</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Información</h3>
            <ul className="space-y-2">
              <li><Link href="/acerca-de" className="text-gray-400 hover:text-white text-sm transition-colors">Acerca de</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RonaldoScript · Python desde Cero · Hecho con ❤️ para la comunidad hispana
          </p>
        </div>
      </div>
    </footer>
  )
}
