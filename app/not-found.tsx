import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-32 text-center">
      <p className="font-mono text-xs text-primary mb-6">// 404</p>
      <h1 className="text-6xl font-extrabold text-gray-50 mb-4">404</h1>
      <p className="text-gray-400 text-base mb-8">
        Esta página no existe. ¡Pero el curso sí!
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
      >
        ← Volver al inicio
      </Link>
    </div>
  )
}
