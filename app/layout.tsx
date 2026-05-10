import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Python desde Cero · RonaldoScript',
  description:
    'Aprende Python paso a paso, en español, con ejemplos simples y ejercicios prácticos. Curso gratuito para principiantes.',
  keywords: ['Python', 'programación', 'curso', 'español', 'gratis', 'principiantes'],
  authors: [{ name: 'RonaldoScript' }],
  openGraph: {
    title: 'Python desde Cero · RonaldoScript',
    description: 'Aprende programación paso a paso, en español, con ejemplos simples y ejercicios prácticos.',
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
