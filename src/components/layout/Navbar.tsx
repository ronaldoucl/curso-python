'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import { signInWithGoogle, signOut } from '@/lib/auth'

export default function Navbar() {
  const { user, loading } = useUser()
  const [menuOpen, setMenuOpen] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)

  async function handleSignIn() {
    setAuthLoading(true)
    try {
      await signInWithGoogle()
    } catch {
      setAuthLoading(false)
    }
  }

  async function handleSignOut() {
    setAuthLoading(true)
    try {
      await signOut()
    } finally {
      setAuthLoading(false)
    }
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐍</span>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-sm">RonaldoScript</span>
              <span className="text-yellow-400 text-xs font-medium">Python desde Cero</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/curso" className="text-gray-300 hover:text-white text-sm transition-colors">
              Lecciones
            </Link>
            <Link href="/progreso" className="text-gray-300 hover:text-white text-sm transition-colors">
              Mi progreso
            </Link>
            <Link href="/acerca-de" className="text-gray-300 hover:text-white text-sm transition-colors">
              Acerca de
            </Link>

            {loading ? (
              <div className="h-8 w-24 bg-gray-700 rounded-lg animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm">
                  {user.user_metadata?.full_name?.split(' ')[0] ?? user.email?.split('@')[0]}
                </span>
                <button
                  onClick={handleSignOut}
                  disabled={authLoading}
                  className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={authLoading}
                className="text-sm bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-4 py-1.5 rounded-lg transition-colors disabled:opacity-50"
              >
                {authLoading ? 'Cargando…' : 'Iniciar sesión'}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 flex flex-col gap-3">
            <Link href="/curso" className="text-gray-300 hover:text-white text-sm px-2" onClick={() => setMenuOpen(false)}>
              Lecciones
            </Link>
            <Link href="/progreso" className="text-gray-300 hover:text-white text-sm px-2" onClick={() => setMenuOpen(false)}>
              Mi progreso
            </Link>
            <Link href="/acerca-de" className="text-gray-300 hover:text-white text-sm px-2" onClick={() => setMenuOpen(false)}>
              Acerca de
            </Link>
            {!loading && (
              user ? (
                <button onClick={handleSignOut} className="text-sm bg-gray-700 text-white px-3 py-2 rounded-lg w-full text-left">
                  Cerrar sesión
                </button>
              ) : (
                <button onClick={handleSignIn} className="text-sm bg-yellow-400 text-gray-900 font-semibold px-3 py-2 rounded-lg">
                  Iniciar sesión con Google
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
