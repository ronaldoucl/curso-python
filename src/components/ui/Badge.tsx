import type { ReactNode } from 'react'

// ── Componente Badge ──────────────────────────────────────────────────────────
// Variantes:
//   default    → gris neutro
//   primary    → azul (plataforma)
//   accent     → amarillo (Python)
//   success    → verde (completado)
//   warning    → naranja (en progreso)
//   danger     → rojo (error)
//   mono       → fondo gris con font-mono (etiquetas técnicas)
//   comingSoon → contorno gris, texto muted (próximamente)

type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'mono' | 'comingSoon'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  default:    'bg-gray-800 text-gray-300 border-gray-700',
  primary:    'bg-primary/10 text-primary border-primary/30',
  accent:     'bg-accent/10 text-accent border-accent/30',
  success:    'bg-success/10 text-success border-success/30',
  warning:    'bg-warning/10 text-warning border-warning/30',
  danger:     'bg-danger/10 text-danger border-danger/30',
  mono:       'bg-gray-800 text-gray-400 border-gray-700 font-mono',
  comingSoon: 'bg-gray-900 text-gray-500 border-gray-700',
}

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border
      ${variants[variant]} ${className}
    `}>
      {children}
    </span>
  )
}
