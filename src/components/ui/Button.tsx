import type { ButtonHTMLAttributes, ReactNode } from 'react'

// ── Componente Button ─────────────────────────────────────────────────────────
// Variantes:
//   primary  → azul (#3B82F6) — CTAs de plataforma
//   accent   → amarillo (#FACC15) — CTAs específicos de Python
//   ghost    → transparente con borde — acciones secundarias
//   danger   → rojo (#EF4444) — acciones destructivas
//
// Tamaños:
//   sm  → texto xs, padding ajustado
//   md  → texto sm, padding estándar  (default)
//   lg  → texto base, padding amplio

type Variant = 'primary' | 'accent' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary hover:bg-primary-dark text-white border-transparent',
  accent:  'bg-accent hover:bg-accent-dark text-gray-900 border-transparent',
  ghost:   'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-gray-100 border-gray-700 hover:border-gray-500',
  danger:  'bg-danger hover:bg-danger-muted text-white border-transparent',
}

const sizes: Record<Size, string> = {
  sm: 'text-xs px-3 py-1.5 rounded-md',
  md: 'text-sm px-5 py-2.5 rounded-lg',
  lg: 'text-base px-7 py-3.5 rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold border
        transition-all duration-150 cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
    >
      {children}
    </button>
  )
}
