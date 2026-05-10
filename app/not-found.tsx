import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-32 text-center">
      <p className="text-8xl mb-6">🐍</p>
      <h1 className="text-4xl font-extrabold text-white mb-3">404</h1>
      <p className="text-gray-400 text-lg mb-8">
        Esta página no existe. ¡Pero el curso sí!
      </p>
      <Link
        href="/"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-xl transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
