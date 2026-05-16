'use client'

import { signInWithGoogle } from '@/lib/auth'
import { useState } from 'react'

export default function AnonymousBanner() {
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    setLoading(true)
    try { await signInWithGoogle() }
    catch { setLoading(false) }
  }

  return (
    <div className="bg-gray-900 border border-primary/20 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-start gap-3 flex-1">
        <span className="text-primary text-lg shrink-0 mt-0.5">💾</span>
        <div>
          <p className="text-gray-200 text-sm font-medium mb-0.5">Guarda tu progreso en la nube</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            Estás aprendiendo sin cuenta. Crea una gratis para guardar tu avance en cualquier dispositivo.
          </p>
        </div>
      </div>
      <button
        onClick={handleSignIn}
        disabled={loading}
        className="shrink-0 text-sm bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {loading ? 'Cargando…' : 'Crear cuenta gratis'}
      </button>
    </div>
  )
}
