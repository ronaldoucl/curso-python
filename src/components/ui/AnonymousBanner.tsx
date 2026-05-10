'use client'

import { signInWithGoogle } from '@/lib/auth'
import { useState } from 'react'

export default function AnonymousBanner() {
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    setLoading(true)
    try {
      await signInWithGoogle()
    } catch {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1">
        <p className="text-sm text-blue-200">
          💡 <strong>Puedes empezar gratis sin cuenta.</strong>{' '}
          Crea una cuenta para guardar tu progreso en cualquier dispositivo.
        </p>
      </div>
      <button
        onClick={handleSignIn}
        disabled={loading}
        className="shrink-0 text-sm bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {loading ? 'Cargando…' : 'Crear cuenta gratis'}
      </button>
    </div>
  )
}
