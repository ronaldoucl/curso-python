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
    try { await signInWithGoogle() }
    catch { setAuthLoading(false) }
  }

  async function handleSignOut() {
    setAuthLoading(true)
    try { await signOut() }
    finally { setAuthLoading(false) }
  }

  const navLinks = [
    { href: '/cursos', label: 'Cursos' },
    { href: '/progreso', label: 'Mi progreso' },
    { href: '/acerca-de', label: 'Acerca de' },
  ]

  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-mono font-bold text-sm">RS</span>
            </div>
            <span className="text-gray-50 font-bold text-base leading-none">
              Ronaldo<span className="text-primary">Script</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gray-100 hover:bg-gray-800 text-sm px-3 py-2 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cursos/python"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent border border-accent/30 bg-accent/5 hover:bg-accent/10 px-3 py-1.5 rounded-lg transition-all"
            >
              <span>🐍</span>
              Python
            </Link>

            {loading ? (
              <div className="h-8 w-28 bg-gray-800 rounded-lg animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm truncate max-w-[120px]">
                  {user.user_metadata?.full_name?.split(' ')[0] ?? user.email?.split('@')[0]}
                </span>
                <button
                  onClick={handleSignOut}
                  disabled={authLoading}
                  className="text-xs text-gray-400 hover:text-gray-100 bg-gray-800 hover:bg-gray-750 border border-gray-700 px-3 py-1.5 rounded-lg transition-all disabled:opacity-50"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={authLoading}
                className="text-sm bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-1.5 rounded-lg transition-all disabled:opacity-50"
              >
                {authLoading ? 'Cargando…' : 'Iniciar sesión'}
              </button>
            )}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-700 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gray-100 text-sm px-3 py-2 rounded-lg hover:bg-gray-800 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cursos/python"
              className="text-accent font-mono text-sm px-3 py-2"
              onClick={() => setMenuOpen(false)}
            >
              🐍 Python desde Cero
            </Link>
            {!loading && (
              user ? (
                <button
                  onClick={handleSignOut}
                  className="text-sm text-gray-400 bg-gray-800 border border-gray-700 px-3 py-2 rounded-lg text-left mt-1"
                >
                  Cerrar sesión
                </button>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="text-sm bg-primary text-white font-semibold px-3 py-2 rounded-lg mt-1"
                >
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
