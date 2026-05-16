import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RonaldoScript | Aprende programación desde cero',
  description:
    'Cursos gratuitos de programación en español con explicaciones simples, ejercicios prácticos y proyectos reales.',
  keywords: ['programación', 'Python', 'JavaScript', 'cursos', 'español', 'gratis', 'principiantes'],
  authors: [{ name: 'RonaldoScript' }],
  openGraph: {
    title: 'RonaldoScript | Aprende programación desde cero',
    description: 'Cursos gratuitos de programación en español con explicaciones simples, ejercicios prácticos y proyectos reales.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-950 text-gray-100`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
