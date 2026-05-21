import type { Lesson, Module } from '@/types'

export const lessonsTsModule27: Lesson[] = [
  {
    slug: 'typescript-en-nextjs',
    title: 'TypeScript en Next.js',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 214,
    description:
      'Aprende cómo TypeScript se integra con Next.js y por qué es útil en proyectos full-stack modernos.',
    explanation: `## TypeScript en Next.js

Next.js tiene soporte nativo para TypeScript. Cuando creas un proyecto con \`create-next-app\`, puedes elegir TypeScript desde el inicio.

### ¿Por qué TypeScript en Next.js?

Next.js mezcla lógica de servidor y de cliente. TypeScript ayuda a:
- Saber qué datos vienen del servidor y cuáles del cliente
- Tipar los parámetros de rutas dinámicas
- Evitar pasar datos incorrectos entre componentes
- Detectar errores en Server Components y Client Components

### Cómo empieza un proyecto

\`\`\`bash
npx create-next-app@latest mi-app --typescript
\`\`\`

Next.js genera automáticamente un \`tsconfig.json\` optimizado para su ecosistema.

### El tsconfig.json de Next.js

No es necesario modificarlo manualmente. Next.js lo mantiene actualizado.

Las opciones importantes:
- \`"jsx": "preserve"\` — Next.js maneja la transformación JSX
- \`"moduleResolution": "bundler"\` — resolución moderna de módulos
- \`"paths"\` — aliases como \`@/\` para importar desde \`src/\`

### Estructura de archivos

\`\`\`
app/
├── page.tsx           ← Server Component por defecto
├── layout.tsx         ← Layout tipado
├── loading.tsx        ← Loading UI
├── error.tsx          ← Error UI
├── cursos/
│   └── [courseSlug]/
│       └── page.tsx   ← Ruta dinámica
\`\`\`

### Server Components vs Client Components

\`\`\`tsx
// Server Component — sin 'use client'
// Puede ser async, accede a datos del servidor
async function PaginaCurso({ params }: { params: { slug: string } }) {
  const datos = await obtenerCurso(params.slug)
  return <div>{datos.titulo}</div>
}

// Client Component — con 'use client'
// Puede usar useState, useEffect, eventos
'use client'
function BuscadorCursos() {
  const [query, setQuery] = useState('')
  // ...
}
\`\`\``,
    codeExample: `// page.tsx — página simple tipada en Next.js App Router

// ─── Server Component (sin 'use client') ─────────────────────
interface Curso {
  slug: string
  titulo: string
  descripcion: string
  lecciones: number
}

// Simula datos del servidor
async function obtenerCursos(): Promise<Curso[]> {
  return [
    { slug: 'typescript', titulo: 'TypeScript desde Cero', descripcion: '...', lecciones: 251 },
    { slug: 'python', titulo: 'Python desde Cero', descripcion: '...', lecciones: 120 },
  ]
}

export default async function PaginaCursos() {
  const cursos = await obtenerCursos()

  return (
    <main>
      <h1>Cursos disponibles</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.slug}>
            <a href={\`/cursos/\${curso.slug}\`}>
              {curso.titulo} — {curso.lecciones} lecciones
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}`,
    keyPoints: [
      'Next.js soporta TypeScript de forma nativa — elige TypeScript al crear el proyecto',
      'El tsconfig.json de Next.js está preconfigurado — no necesitas modificarlo',
      'Los Server Components pueden ser async y obtener datos directamente',
      'Los Client Components necesitan "use client" y pueden usar hooks',
      'La estructura de archivos en App Router define las rutas automáticamente',
    ],
    exercise: {
      description:
        'Crea una interfaz `Leccion` con slug, titulo, duracion y completada. Luego escribe una función async `obtenerLecciones(): Promise<Leccion[]>` que devuelve un array de 3 lecciones con datos de ejemplo. Finalmente crea un Server Component que los renderice como lista.',
      hint: 'Los Server Components no necesitan "use client" y pueden ser async. Usa await para esperar los datos y luego .map() para renderizar la lista.',
    },
    quiz: [
      {
        question: '¿Qué distingue a un Server Component de un Client Component en Next.js?',
        options: [
          'El nombre del archivo',
          'Los Server Components no tienen "use client" y pueden ser async; los Client Components tienen "use client" y usan hooks',
          'Los Server Components son más rápidos siempre',
          'Los Client Components no pueden usar TypeScript',
        ],
        correctAnswer: 'Los Server Components no tienen "use client" y pueden ser async; los Client Components tienen "use client" y usan hooks',
        correctFeedback: '¡Correcto! La directiva "use client" es la diferencia clave entre ambos tipos de componentes.',
        incorrectFeedback: 'Los Server Components no llevan "use client", pueden ser async y obtienen datos del servidor. Los Client Components necesitan "use client" para usar hooks.',
      },
      {
        question: '¿Necesitas configurar manualmente el tsconfig.json en un proyecto Next.js?',
        options: [
          'Sí, siempre debes configurarlo tú mismo',
          'No, Next.js genera y mantiene el tsconfig.json automáticamente',
          'Solo si usas rutas dinámicas',
          'Solo en producción',
        ],
        correctAnswer: 'No, Next.js genera y mantiene el tsconfig.json automáticamente',
        correctFeedback: '¡Correcto! Next.js genera un tsconfig.json optimizado y lo mantiene actualizado.',
        incorrectFeedback: 'Next.js genera automáticamente el tsconfig.json con las opciones correctas para su ecosistema.',
      },
      {
        question: '¿Puede un Server Component en Next.js App Router ser una función async?',
        options: [
          'No, los componentes no pueden ser async',
          'Solo en páginas, no en componentes reutilizables',
          'Sí, los Server Components pueden ser funciones async',
          'Solo con una configuración especial en tsconfig',
        ],
        correctAnswer: 'Sí, los Server Components pueden ser funciones async',
        correctFeedback: '¡Correcto! Una de las ventajas de los Server Components es poder ser funciones async que obtienen datos directamente.',
        incorrectFeedback: 'Los Server Components en Next.js App Router pueden ser funciones async — es una de sus ventajas principales.',
      },
      {
        question: '¿Qué extensión de archivo debes usar para un componente React con TypeScript?',
        options: ['.ts', '.tsx', '.jsx', '.rsx'],
        correctAnswer: '.tsx',
        correctFeedback: '¡Correcto! Los archivos con JSX en TypeScript usan la extensión .tsx. Los archivos .ts son para TypeScript sin JSX.',
        incorrectFeedback: 'Los componentes React con TypeScript usan .tsx (TypeScript + JSX). Los archivos .ts son solo TypeScript puro sin JSX.',
      },
      {
        question: '¿Para qué sirve la opción "paths" en el tsconfig.json de Next.js?',
        options: [
          'Para definir las rutas de la aplicación',
          'Para configurar aliases de importación como @/ que apunta a src/',
          'Para especificar archivos excluidos',
          'Para configurar el servidor de desarrollo',
        ],
        correctAnswer: 'Para configurar aliases de importación como @/ que apunta a src/',
        correctFeedback: '¡Correcto! "paths" en tsconfig permite usar @/components en lugar de ../../components — importaciones más limpias.',
        incorrectFeedback: '"paths" en tsconfig define aliases para importaciones. Con él puedes usar @/components/Button en lugar de rutas relativas largas.',
      },
    ],
  },
  {
    slug: 'tipar-componentes-nextjs',
    title: 'Tipar componentes en Next.js',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 215,
    description:
      'Aprende a escribir componentes reutilizables tipados dentro de una app Next.js.',
    explanation: `## Tipar componentes en Next.js

Tipar componentes en Next.js es igual que en React puro, con algunas diferencias relacionadas al contexto de servidor y cliente.

### Componentes reutilizables

\`\`\`tsx
// components/CursoCard.tsx
interface CursoCardProps {
  slug: string
  titulo: string
  descripcion: string
  icono: string
  lecciones: number
}

export function CursoCard({ slug, titulo, descripcion, icono, lecciones }: CursoCardProps) {
  return (
    <article>
      <span>{icono}</span>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <a href={\`/cursos/\${slug}\`}>{lecciones} lecciones →</a>
    </article>
  )
}
\`\`\`

### Layout tipado

\`\`\`tsx
// app/layout.tsx
interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### Componentes de error y loading

\`\`\`tsx
// app/error.tsx — debe ser Client Component
'use client'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2>Algo salió mal</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Reintentar</button>
    </div>
  )
}
\`\`\`

### Importar tipos solo cuando es necesario

\`\`\`tsx
// Importar solo el tipo, no el valor
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mi Curso',
  description: 'Aprende TypeScript',
}
\`\`\``,
    codeExample: `// components/LeccionCard.tsx — componente reutilizable tipado

import Link from 'next/link'

interface LeccionCardProps {
  slug: string
  titulo: string
  numero: number
  descripcion: string
  completada: boolean
  courseSlug: string
}

export function LeccionCard({
  slug,
  titulo,
  numero,
  descripcion,
  completada,
  courseSlug,
}: LeccionCardProps) {
  return (
    <Link
      href={\`/cursos/\${courseSlug}/\${slug}\`}
      className="leccion-card"
    >
      <span className="numero">{numero}</span>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      {completada && (
        <span className="completada">✓</span>
      )}
    </Link>
  )
}

// app/cursos/[courseSlug]/page.tsx — uso del componente
interface Leccion {
  slug: string
  titulo: string
  numero: number
  descripcion: string
}

interface PageProps {
  params: Promise<{ courseSlug: string }>
}

export default async function CursoPage({ params }: PageProps) {
  const { courseSlug } = await params
  const lecciones: Leccion[] = await obtenerLecciones(courseSlug)

  return (
    <main>
      {lecciones.map((leccion) => (
        <LeccionCard
          key={leccion.slug}
          {...leccion}
          completada={false}
          courseSlug={courseSlug}
        />
      ))}
    </main>
  )
}

async function obtenerLecciones(slug: string): Promise<Leccion[]> {
  return []
}`,
    keyPoints: [
      'Los componentes reutilizables se tipan igual que en React puro con interfaces',
      'El layout recibe children: React.ReactNode para envolver el contenido de la página',
      'El componente error.tsx debe ser Client Component ("use client") y recibe error y reset',
      'Usa "import type" para importar tipos de Next.js sin incluir el código en el bundle',
      'Metadata se exporta como constante tipada con el tipo Metadata de Next.js',
    ],
    exercise: {
      description:
        'Crea un componente `ModuloBadge` con props: numero (number), titulo (string), completadas (number) y total (number). Muestra el número, título y el progreso "X/Y lecciones". Luego úsalo en un Server Component que tenga 3 módulos hardcodeados.',
      hint: 'Define la interfaz ModuloBadgeProps con las 4 props. En el Server Component, crea un array de módulos con la forma que espera el componente.',
    },
    quiz: [
      {
        question: '¿Qué tipo usa Next.js para los metadatos de una página?',
        options: ['PageMetadata', 'NextMeta', 'Metadata', 'SeoData'],
        correctAnswer: 'Metadata',
        correctFeedback: '¡Correcto! El tipo Metadata de "next" se usa para tipar la exportación de metadatos de una página.',
        incorrectFeedback: 'Next.js tiene un tipo llamado Metadata (de "next") para tipar los metadatos de las páginas.',
      },
      {
        question: '¿Por qué el componente error.tsx debe ser "use client"?',
        options: [
          'Porque Next.js lo requiere por convención',
          'Porque usa la función reset que es un callback interactivo que necesita JS en el cliente',
          'Porque los errores solo ocurren en el cliente',
          'No es necesario — puede ser Server Component',
        ],
        correctAnswer: 'Porque usa la función reset que es un callback interactivo que necesita JS en el cliente',
        correctFeedback: '¡Correcto! El error boundary necesita interactividad (botón reset), lo que requiere ser Client Component.',
        incorrectFeedback: 'error.tsx debe ser Client Component porque necesita manejar interactividad como el botón de reset.',
      },
      {
        question: '¿Qué hace "import type { Metadata } from "next""?',
        options: [
          'Importa Metadata como valor y tipo',
          'Importa solo el tipo TypeScript de Metadata, sin incluir código JavaScript en el bundle',
          'Hace que Metadata sea readonly',
          'Es equivalente a un import normal',
        ],
        correctAnswer: 'Importa solo el tipo TypeScript de Metadata, sin incluir código JavaScript en el bundle',
        correctFeedback: '¡Correcto! "import type" importa solo la información de tipos, que se elimina al compilar.',
        incorrectFeedback: '"import type" importa solo información de tipos para TypeScript. No incluye código en el bundle de producción.',
      },
      {
        question: '¿Qué tipo se usa para la prop children en un componente contenedor en Next.js?',
        options: ['JSX.Element', 'string', 'React.ReactNode', 'React.FC'],
        correctAnswer: 'React.ReactNode',
        correctFeedback: '¡Correcto! React.ReactNode acepta texto, JSX, arrays, null y undefined — es el tipo correcto para children.',
        incorrectFeedback: 'Para children usa React.ReactNode, no JSX.Element. ReactNode es más flexible y acepta texto, JSX, arrays y null.',
      },
      {
        question: '¿Qué props recibe el componente error.tsx de Next.js?',
        options: [
          'solo message: string',
          'error (Error) y reset (() => void)',
          'status (number) y message (string)',
          'No recibe props',
        ],
        correctAnswer: 'error (Error) y reset (() => void)',
        correctFeedback: '¡Correcto! error.tsx recibe el objeto Error y la función reset para reintentar el renderizado.',
        incorrectFeedback: 'El componente error.tsx recibe error (de tipo Error) y reset (función sin parámetros) para mostrar el error y dar opción de reintentar.',
      },
    ],
  },
  {
    slug: 'tipar-params-app-router',
    title: 'Tipar params en App Router',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 216,
    description:
      'Aprende a tipar params dinámicos como courseSlug, lessonSlug o id dentro del App Router.',
    explanation: `## Tipar params en App Router

En Next.js App Router, los parámetros de rutas dinámicas llegan como props a tus páginas. Deben tiparse correctamente.

### Ruta dinámica simple

Para una ruta \`app/cursos/[courseSlug]/page.tsx\`:

\`\`\`tsx
// En Next.js 15, params es una Promise
interface PageProps {
  params: Promise<{ courseSlug: string }>
}

export default async function CursoPage({ params }: PageProps) {
  const { courseSlug } = await params
  // courseSlug es string
}
\`\`\`

### Ruta con múltiples parámetros

Para \`app/cursos/[courseSlug]/[lessonSlug]/page.tsx\`:

\`\`\`tsx
interface PageProps {
  params: Promise<{
    courseSlug: string
    lessonSlug: string
  }>
}

export default async function LeccionPage({ params }: PageProps) {
  const { courseSlug, lessonSlug } = await params
  // Ambos son string
}
\`\`\`

### Ruta con param numérico

Los params siempre llegan como \`string\`, aunque en la URL sean números:

\`\`\`tsx
interface PageProps {
  params: Promise<{ id: string }>  // Siempre string
}

export default async function ArticuloPage({ params }: PageProps) {
  const { id } = await params
  const idNumero = parseInt(id, 10)  // Convertir manualmente
  // ...
}
\`\`\`

### Versiones anteriores de Next.js

En versiones anteriores a Next.js 15, params NO es una Promise:

\`\`\`tsx
// Next.js 13/14 — params es directo
interface PageProps {
  params: { courseSlug: string }
}

export default function Page({ params }: PageProps) {
  const { courseSlug } = params  // Sin await
}
\`\`\`

### generateStaticParams

\`\`\`tsx
export async function generateStaticParams() {
  const cursos = await obtenerCursos()
  return cursos.map((curso) => ({
    courseSlug: curso.slug,  // Debe coincidir con el nombre del param
  }))
}
\`\`\``,
    codeExample: `// app/cursos/[courseSlug]/[lessonSlug]/page.tsx

interface LeccionData {
  titulo: string
  contenido: string
  modulo: string
}

interface PageProps {
  params: Promise<{
    courseSlug: string
    lessonSlug: string
  }>
}

async function obtenerLeccion(
  courseSlug: string,
  lessonSlug: string
): Promise<LeccionData | null> {
  // Simula llamada a base de datos
  if (courseSlug === 'typescript' && lessonSlug === 'tipos-basicos') {
    return {
      titulo: 'Tipos básicos',
      contenido: 'En esta lección aprenderás...',
      modulo: 'Fundamentos',
    }
  }
  return null
}

export default async function LeccionPage({ params }: PageProps) {
  const { courseSlug, lessonSlug } = await params

  const leccion = await obtenerLeccion(courseSlug, lessonSlug)

  if (!leccion) {
    return <p>Lección no encontrada</p>
  }

  return (
    <article>
      <nav>
        <a href={\`/cursos/\${courseSlug}\`}>← {courseSlug}</a>
      </nav>
      <h1>{leccion.titulo}</h1>
      <p className="modulo">{leccion.modulo}</p>
      <div>{leccion.contenido}</div>
    </article>
  )
}`,
    keyPoints: [
      'En Next.js 15, params es una Promise y debes usar await para obtener los valores',
      'Los params de ruta siempre son string, incluso si la URL tiene un número',
      'Los nombres de los params en la interfaz deben coincidir con los corchetes del archivo',
      'generateStaticParams retorna un array de objetos con los params de cada ruta estática',
      'En Next.js 13/14 params no era Promise — ten en cuenta la versión del proyecto',
    ],
    exercise: {
      description:
        'Escribe el tipo PageProps correcto para la ruta `app/blog/[categoria]/[postId]/page.tsx` en Next.js 15. Luego implementa la página que muestra la categoría y el postId, y convierte postId a número. Incluye un guard para postId inválido (NaN).',
      hint: 'En Next.js 15, params es Promise<{ categoria: string; postId: string }>. Usa parseInt para convertir y isNaN para validar.',
    },
    quiz: [
      {
        question: 'En Next.js 15, ¿cómo obtienes el valor de courseSlug de los params?',
        options: [
          'params.courseSlug',
          'const { courseSlug } = params',
          'const { courseSlug } = await params',
          'params.get("courseSlug")',
        ],
        correctAnswer: 'const { courseSlug } = await params',
        correctFeedback: '¡Correcto! En Next.js 15, params es una Promise, así que necesitas await para obtener los valores.',
        incorrectFeedback: 'En Next.js 15, params es una Promise. Debes usar "const { courseSlug } = await params" para obtener el valor.',
      },
      {
        question: 'Si la URL es /productos/42, ¿qué tipo tiene el param "id" en la página?',
        options: ['number', 'string', 'number | string', 'unknown'],
        correctAnswer: 'string',
        correctFeedback: '¡Correcto! Los params de URL siempre llegan como string, aunque en la URL sean números.',
        incorrectFeedback: 'Los params de URL siempre son string en Next.js. Si necesitas un número debes convertirlo con parseInt.',
      },
      {
        question: '¿Qué debe retornar generateStaticParams para una ruta [courseSlug]?',
        options: [
          'Un string con todos los slugs separados por coma',
          'Un array de objetos con el campo courseSlug',
          'Un array de strings',
          'Un objeto con la clave slugs',
        ],
        correctAnswer: 'Un array de objetos con el campo courseSlug',
        correctFeedback: '¡Correcto! generateStaticParams retorna un array donde cada objeto tiene los params de una ruta específica.',
        incorrectFeedback: 'generateStaticParams retorna un array de objetos. Cada objeto tiene los params de una ruta, ej: [{courseSlug: "typescript"}].',
      },
      {
        question: '¿Cómo era el tipo de params en Next.js 13/14 (antes de la versión 15)?',
        options: [
          'También era Promise — siempre fue así',
          'Era un objeto directo, no una Promise — no necesitaba await',
          'Era un array de strings',
          'Era undefined si no había params dinámicos',
        ],
        correctAnswer: 'Era un objeto directo, no una Promise — no necesitaba await',
        correctFeedback: '¡Correcto! En Next.js 13/14, params era un objeto directo. El cambio a Promise llegó en Next.js 15.',
        incorrectFeedback: 'En Next.js 13/14, params era un objeto directo sin Promise. En Next.js 15 cambió a ser una Promise que requiere await.',
      },
      {
        question: 'Si tu ruta es [courseSlug] pero en la interfaz escribes courseSlug con typo como coursSlug, ¿qué pasa?',
        options: [
          'TypeScript muestra error inmediatamente',
          'Next.js corrige el typo automáticamente',
          'El param llega como undefined en runtime porque el nombre no coincide con la URL',
          'El código funciona igual — los nombres no importan',
        ],
        correctAnswer: 'El param llega como undefined en runtime porque el nombre no coincide con la URL',
        correctFeedback: '¡Correcto! El nombre en la interfaz debe coincidir exactamente con el nombre del segmento dinámico en la URL.',
        incorrectFeedback: 'Los nombres en la interfaz deben coincidir exactamente con los corchetes del archivo. Un typo hace que el param llegue como undefined.',
      },
    ],
  },
  {
    slug: 'tipar-searchparams-nextjs',
    title: 'Tipar searchParams',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 217,
    description:
      'Aprende a tipar query params o searchParams para manejar filtros, búsquedas y paginación.',
    explanation: `## Tipar searchParams en Next.js

Los \`searchParams\` son los query params de la URL, como \`?pagina=2&categoria=javascript\`. En Next.js App Router llegan como props a las páginas.

### Estructura básica

Para una URL como \`/cursos?nivel=principiante&pagina=2\`:

\`\`\`tsx
// En Next.js 15, searchParams también es Promise
interface PageProps {
  searchParams: Promise<{
    nivel?: string
    pagina?: string
  }>
}

export default async function CursosPage({ searchParams }: PageProps) {
  const { nivel, pagina } = await searchParams
  const paginaNum = pagina ? parseInt(pagina, 10) : 1
  // ...
}
\`\`\`

### ¿Por qué son opcionales?

Los query params pueden o no estar en la URL. Si el usuario va a \`/cursos\` sin params, todos serán \`undefined\`. Por eso se marcan como opcionales con \`?\`.

### Pueden ser string o string[]

Un param puede aparecer múltiples veces en la URL:
\`/cursos?tag=typescript&tag=react\`

\`\`\`tsx
interface PageProps {
  searchParams: Promise<{
    tag?: string | string[]  // Puede ser uno o varios
  }>
}
\`\`\`

### Validar y convertir searchParams

\`\`\`tsx
async function obtenerFiltros(searchParams: Promise<Record<string, string | string[] | undefined>>) {
  const params = await searchParams

  const nivel = typeof params.nivel === 'string' ? params.nivel : undefined
  const pagina = typeof params.pagina === 'string' ? parseInt(params.pagina, 10) : 1

  return { nivel, pagina }
}
\`\`\`

### searchParams en Client Components

En Client Components puedes usar el hook \`useSearchParams()\`:

\`\`\`tsx
'use client'
import { useSearchParams } from 'next/navigation'

function FiltrosCursos() {
  const searchParams = useSearchParams()
  const nivel = searchParams.get('nivel')  // string | null
  // ...
}
\`\`\``,
    codeExample: `// app/cursos/page.tsx — filtros con searchParams tipados

interface Curso {
  slug: string
  titulo: string
  nivel: 'principiante' | 'intermedio' | 'avanzado'
  lecciones: number
}

interface PageProps {
  searchParams: Promise<{
    nivel?: string
    pagina?: string
    busqueda?: string
  }>
}

const CURSOS_POR_PAGINA = 6

export default async function CursosPage({ searchParams }: PageProps) {
  const params = await searchParams

  const nivelFiltro = params.nivel
  const pagina = params.pagina ? parseInt(params.pagina, 10) : 1
  const busqueda = params.busqueda ?? ''

  const todosCursos: Curso[] = await obtenerCursos()

  // Filtrar según los params
  let cursosFiltrados = todosCursos
  if (nivelFiltro) {
    cursosFiltrados = cursosFiltrados.filter((c) => c.nivel === nivelFiltro)
  }
  if (busqueda) {
    cursosFiltrados = cursosFiltrados.filter((c) =>
      c.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )
  }

  // Paginación
  const inicio = (pagina - 1) * CURSOS_POR_PAGINA
  const cursosPagina = cursosFiltrados.slice(inicio, inicio + CURSOS_POR_PAGINA)

  return (
    <main>
      <h1>Cursos</h1>
      {nivelFiltro && <p>Filtrando por: {nivelFiltro}</p>}
      {cursosPagina.map((curso) => (
        <div key={curso.slug}>
          <h2>{curso.titulo}</h2>
          <span>{curso.nivel}</span>
        </div>
      ))}
    </main>
  )
}

async function obtenerCursos(): Promise<Curso[]> {
  return []
}`,
    keyPoints: [
      'searchParams son siempre opcionales — el usuario puede o no incluirlos en la URL',
      'En Next.js 15, searchParams es una Promise igual que params',
      'Los valores de searchParams son siempre string, string[] o undefined — nunca number',
      'Debes convertir manualmente a número con parseInt si lo necesitas',
      'En Client Components usa el hook useSearchParams() de next/navigation',
    ],
    exercise: {
      description:
        'Crea una página `/productos` que recibe searchParams con: categoria (string opcional), minPrecio (string opcional), maxPrecio (string opcional) y ordenar ("precio" | "nombre", opcional). Implementa la validación convirtiendo los precios a número y usando un default de "nombre" para ordenar.',
      hint: 'Los precios deben convertirse con parseFloat. Para ordenar, usa el patrón: const orden = params.ordenar === "precio" ? "precio" : "nombre".',
    },
    quiz: [
      {
        question: '¿Por qué los searchParams se definen con ? (opcional) en la interfaz?',
        options: [
          'Por convención — no tiene efecto real',
          'Porque el usuario puede visitar la URL sin incluirlos, haciendo que sean undefined',
          'Porque Next.js no puede garantizar su existencia',
          'Porque son strings y los strings son siempre opcionales',
        ],
        correctAnswer: 'Porque el usuario puede visitar la URL sin incluirlos, haciendo que sean undefined',
        correctFeedback: '¡Correcto! Un query param es opcional por naturaleza — el usuario puede no incluirlo en la URL.',
        incorrectFeedback: 'Los searchParams son opcionales porque el usuario puede visitar la URL sin incluirlos. Si no están, su valor es undefined.',
      },
      {
        question: '¿Cuál es el tipo de un searchParam en Next.js App Router?',
        options: [
          'number | undefined',
          'string | undefined',
          'string | string[] | undefined',
          'string | null',
        ],
        correctAnswer: 'string | string[] | undefined',
        correctFeedback: '¡Correcto! Un param puede estar ausente (undefined), aparecer una vez (string) o varias veces (string[]).',
        incorrectFeedback: 'Un searchParam puede no estar (undefined), aparecer una vez (string) o múltiples veces (string[]).',
      },
      {
        question: '¿Cómo obtienes searchParams en un Client Component?',
        options: [
          'Como prop searchParams del componente',
          'Con el hook useSearchParams() de next/navigation',
          'Con window.location.search',
          'Con params.searchParams',
        ],
        correctAnswer: 'Con el hook useSearchParams() de next/navigation',
        correctFeedback: '¡Correcto! useSearchParams() es el hook de Next.js para acceder a query params en Client Components.',
        incorrectFeedback: 'En Client Components se usa el hook useSearchParams() de next/navigation para acceder a los query params.',
      },
      {
        question: '¿Cómo conviertes el searchParam "pagina" (string) a número con valor default 1?',
        options: [
          'parseInt(pagina)',
          'Number(pagina) || 1',
          'pagina ? parseInt(pagina, 10) : 1',
          'pagina as number',
        ],
        correctAnswer: 'pagina ? parseInt(pagina, 10) : 1',
        correctFeedback: '¡Correcto! Primero verificas que el param exista, luego lo conviertes con parseInt especificando base 10.',
        incorrectFeedback: 'El patrón correcto es: pagina ? parseInt(pagina, 10) : 1. Siempre verifica que el param existe antes de convertirlo.',
      },
      {
        question: '¿Qué retorna useSearchParams().get("nivel") cuando el param no existe en la URL?',
        options: ['undefined', 'null', '""', 'false'],
        correctAnswer: 'null',
        correctFeedback: '¡Correcto! useSearchParams().get() retorna null cuando el param no está en la URL, no undefined.',
        incorrectFeedback: 'useSearchParams().get() retorna null cuando el param no existe. Es diferente de la prop searchParams del Server Component que devuelve undefined.',
      },
    ],
  },
  {
    slug: 'tipar-datos-servidor-nextjs',
    title: 'Tipar datos de servidor',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 218,
    description:
      'Aprende a definir tipos para datos obtenidos en Server Components o funciones del servidor.',
    explanation: `## Tipar datos de servidor

En Next.js, los Server Components obtienen datos directamente — de bases de datos, APIs externas, o archivos. Tipar estos datos es fundamental.

### Definir el tipo de los datos

\`\`\`tsx
// types.ts
export interface Curso {
  id: number
  slug: string
  titulo: string
  descripcion: string
  nivel: 'principiante' | 'intermedio' | 'avanzado'
  lecciones: number
  publicado: boolean
}
\`\`\`

### Función de obtención de datos tipada

\`\`\`tsx
// lib/cursos.ts
import type { Curso } from '@/types'

export async function getCurso(slug: string): Promise<Curso | null> {
  // Llamada a base de datos o API
  const datos = await db.cursos.findOne({ slug })
  return datos ?? null
}

export async function getCursos(): Promise<Curso[]> {
  const datos = await db.cursos.findAll()
  return datos
}
\`\`\`

### Datos de API externa

Cuando consumes una API externa, los datos llegan como \`unknown\` y debes validarlos:

\`\`\`tsx
async function obtenerDatosApi(url: string): Promise<unknown> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error al obtener datos')
  return res.json()
}

interface ApiCurso {
  id: number
  name: string
  count: number
}

async function getCursosExternos(): Promise<ApiCurso[]> {
  const datos = await obtenerDatosApi('https://api.ejemplo.com/cursos')
  // Validación mínima
  if (!Array.isArray(datos)) throw new Error('Formato inesperado')
  return datos as ApiCurso[]
}
\`\`\`

### Datos de Supabase u ORM tipados

Si usas Supabase u otro ORM, la respuesta ya viene tipada:

\`\`\`tsx
const { data: cursos, error } = await supabase
  .from('cursos')
  .select('*')

// data es typed automáticamente si tienes los tipos de Supabase generados
\`\`\``,
    codeExample: `// lib/datos.ts — funciones de servidor tipadas

interface Leccion {
  slug: string
  titulo: string
  descripcion: string
  modulo: number
  orden: number
}

interface CursoCompleto {
  slug: string
  titulo: string
  descripcion: string
  lecciones: Leccion[]
  totalLecciones: number
}

// Simula datos del servidor (en realidad iría a Supabase o similar)
const DATOS_CURSOS: Record<string, CursoCompleto> = {
  typescript: {
    slug: 'typescript',
    titulo: 'TypeScript desde Cero',
    descripcion: 'Aprende TypeScript paso a paso',
    lecciones: [
      { slug: 'que-es-typescript', titulo: '¿Qué es TypeScript?', descripcion: '...', modulo: 1, orden: 1 },
    ],
    totalLecciones: 251,
  },
}

export async function getCursoCompleto(slug: string): Promise<CursoCompleto | null> {
  // Simula latencia de base de datos
  await new Promise((resolve) => setTimeout(resolve, 10))
  return DATOS_CURSOS[slug] ?? null
}

export async function getLeccion(
  courseSlug: string,
  lessonSlug: string
): Promise<Leccion | null> {
  const curso = await getCursoCompleto(courseSlug)
  if (!curso) return null
  return curso.lecciones.find((l) => l.slug === lessonSlug) ?? null
}

// app/cursos/[courseSlug]/page.tsx — uso en Server Component
export default async function CursoPage({
  params,
}: {
  params: Promise<{ courseSlug: string }>
}) {
  const { courseSlug } = await params
  const curso = await getCursoCompleto(courseSlug)

  if (!curso) {
    return <p>Curso no encontrado</p>
  }

  return (
    <main>
      <h1>{curso.titulo}</h1>
      <p>{curso.descripcion}</p>
      <p>{curso.totalLecciones} lecciones</p>
    </main>
  )
}`,
    keyPoints: [
      'Define las interfaces de tus datos de servidor en un archivo types.ts separado',
      'Las funciones de obtención de datos deben retornar Promise<Tipo> o Promise<Tipo | null>',
      'Los datos de APIs externas llegan como unknown — valida antes de usar',
      'Usar ?? null en lugar de || null es más correcto cuando el valor puede ser 0 o ""',
      'Organiza las funciones de datos en lib/ o en un archivo separado de los componentes',
    ],
    exercise: {
      description:
        'Crea una interfaz `Producto` con id, nombre, precio, stock y categoria. Crea un archivo con la función `getProducto(id: string): Promise<Producto | null>` y `getProductos(): Promise<Producto[]>`. Implementa un Server Component que muestre los productos usando estas funciones.',
      hint: 'Las funciones van en lib/productos.ts. En el Server Component, usa await para obtener los datos. Maneja el caso en que la lista esté vacía.',
    },
    quiz: [
      {
        question: '¿Qué tipo retorna una función que puede devolver un Curso o que no encontró nada?',
        options: ['Promise<Curso>', 'Promise<Curso | undefined>', 'Promise<Curso | null>', 'Curso | null'],
        correctAnswer: 'Promise<Curso | null>',
        correctFeedback: '¡Correcto! Promise<Curso | null> indica que la función es async y puede devolver el objeto o null si no existe.',
        incorrectFeedback: 'Una función async que puede no encontrar el dato retorna Promise<Curso | null>.',
      },
      {
        question: '¿Por qué los datos de una API externa llegan como unknown y no como el tipo esperado?',
        options: [
          'Porque TypeScript no puede verificar datos en tiempo de ejecución',
          'Porque fetch es asíncrono',
          'Porque las APIs siempre retornan errores',
          'Porque unknown es más rápido que any',
        ],
        correctAnswer: 'Porque TypeScript no puede verificar datos en tiempo de ejecución',
        correctFeedback: '¡Correcto! TypeScript verifica tipos en compilación, no en ejecución. Los datos externos son desconocidos hasta que llegan.',
        incorrectFeedback: 'TypeScript opera en tiempo de compilación. No puede saber qué forma tendrán los datos que lleguen de una API externa en runtime.',
      },
      {
        question: '¿Cuál es la diferencia entre ?? null y || null?',
        options: [
          'Son idénticos — ambos funcionan igual',
          '?? solo reemplaza null/undefined; || reemplaza cualquier valor falsy incluyendo 0 y ""',
          '|| solo funciona con strings',
          '?? es más lento',
        ],
        correctAnswer: '?? solo reemplaza null/undefined; || reemplaza cualquier valor falsy incluyendo 0 y ""',
        correctFeedback: '¡Correcto! ?? es el nullish coalescing operator — solo actúa cuando el valor es null o undefined, no con 0 o "".',
        incorrectFeedback: '?? solo reemplaza null/undefined. || reemplaza cualquier valor falsy (0, "", false, null, undefined). Para datos usa ??.',
      },
      {
        question: '¿Dónde deben organizarse las funciones que obtienen datos del servidor?',
        options: [
          'Directamente en los componentes que las usan',
          'En archivos dentro de lib/ o data/ separados de los componentes',
          'En el archivo tsconfig.json',
          'En la carpeta public/',
        ],
        correctAnswer: 'En archivos dentro de lib/ o data/ separados de los componentes',
        correctFeedback: '¡Correcto! Separar la obtención de datos en lib/ hace el código reutilizable y más fácil de probar.',
        incorrectFeedback: 'Las funciones de datos van en lib/ o data/ separados — esto las hace reutilizables en múltiples páginas y componentes.',
      },
      {
        question: '¿Por qué la función `res.json()` retorna `unknown` y no el tipo esperado?',
        options: [
          'Por un bug de TypeScript',
          'Porque fetch es más antiguo que TypeScript',
          'Porque TypeScript no puede saber en compilación qué forma tendrán los datos de red en runtime',
          'Porque json() no está tipado en la API de fetch',
        ],
        correctAnswer: 'Porque TypeScript no puede saber en compilación qué forma tendrán los datos de red en runtime',
        correctFeedback: '¡Correcto! TypeScript verifica en compilación, no en ejecución. Datos externos son unknown hasta que los validas.',
        incorrectFeedback: 'TypeScript opera en tiempo de compilación y no puede predecir los datos que llegarán de una API en runtime. Por eso json() es unknown.',
      },
    ],
  },
  {
    slug: 'server-client-components-typescript',
    title: 'Server Components y Client Components',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 219,
    description:
      'Aprende la diferencia entre Server Components y Client Components y cómo TypeScript ayuda a mantener límites claros.',
    explanation: `## Server Components y Client Components

En Next.js App Router, los componentes tienen dos modos: servidor y cliente. TypeScript ayuda a mantener clara la separación.

### Server Components (por defecto)

- No tienen \`"use client"\`
- Pueden ser \`async\`
- Acceden a datos del servidor directamente
- No pueden usar hooks (useState, useEffect, etc.)
- No tienen acceso a browser APIs (window, document)

### Client Components

- Tienen \`"use client"\` al inicio
- Pueden usar hooks y gestión de estado
- Se renderizan en el cliente (browser)
- No pueden ser async (directamente)

### Pasar datos de servidor a cliente

\`\`\`tsx
// page.tsx — Server Component
async function PaginaCurso({ params }: PageProps) {
  const { courseSlug } = await params
  const curso = await getCurso(courseSlug)  // Datos del servidor

  // Pasa datos al Client Component como props tipadas
  return <CursoInteractivo curso={curso} />
}

// CursoInteractivo.tsx — Client Component
'use client'

interface Props {
  curso: Curso  // Tipo compartido
}

function CursoInteractivo({ curso }: Props) {
  const [favorito, setFavorito] = useState(false)
  // ...
}
\`\`\`

### Errores comunes de límites

\`\`\`tsx
// ❌ Error: useState en Server Component
async function Pagina() {
  const [count, setCount] = useState(0)  // Error en runtime
  // ...
}

// ❌ Error: async en Client Component
'use client'
async function ClienteAsync() {  // No puede ser async directamente
  const datos = await fetch('/api')  // Problema
}

// ✅ Correcto: async en useEffect
'use client'
function ClienteConDatos() {
  const [datos, setDatos] = useState(null)
  useEffect(() => {
    fetch('/api').then(r => r.json()).then(setDatos)
  }, [])
}
\`\`\`

### TypeScript no detecta estas violaciones

TypeScript no sabe si un componente es de servidor o cliente. Estas reglas son de Next.js, no del lenguaje. Debes conocerlas tú.`,
    codeExample: `// Arquitectura Server/Client con TypeScript

// types.ts — tipos compartidos entre servidor y cliente
export interface Curso {
  slug: string
  titulo: string
  descripcion: string
  lecciones: number
}

export interface Progreso {
  completadas: number
  total: number
  porcentaje: number
}

// ─── Server Component ─────────────────────────────────────────
// app/cursos/[courseSlug]/page.tsx

import { CursoHeader } from '@/components/CursoHeader'
import { BarraProgreso } from '@/components/BarraProgreso'
import type { Curso } from '@/types'

interface PageProps {
  params: Promise<{ courseSlug: string }>
}

export default async function CursoPage({ params }: PageProps) {
  const { courseSlug } = await params
  const curso: Curso = await getCurso(courseSlug)

  return (
    <main>
      {/* Server Component — renderizado en servidor */}
      <CursoHeader curso={curso} />

      {/* Client Component — necesita interactividad */}
      <BarraProgreso courseSlug={courseSlug} total={curso.lecciones} />
    </main>
  )
}

async function getCurso(slug: string): Promise<Curso> {
  return { slug, titulo: 'TypeScript desde Cero', descripcion: '...', lecciones: 251 }
}

// ─── Client Component ─────────────────────────────────────────
// components/BarraProgreso.tsx
'use client'

import { useState, useEffect } from 'react'

interface BarraProgresoProps {
  courseSlug: string
  total: number
}

export function BarraProgreso({ courseSlug, total }: BarraProgresoProps) {
  const [completadas, setCompletadas] = useState(0)

  useEffect(() => {
    // Obtener progreso del localStorage o API
    const guardado = localStorage.getItem(\`progreso-\${courseSlug}\`)
    if (guardado) setCompletadas(parseInt(guardado, 10))
  }, [courseSlug])

  const porcentaje = total > 0 ? Math.round((completadas / total) * 100) : 0

  return (
    <div>
      <p>{completadas}/{total} lecciones</p>
      <div style={{ width: \`\${porcentaje}%\` }} />
    </div>
  )
}`,
    keyPoints: [
      'Server Components son async y obtienen datos del servidor — no usan hooks',
      'Client Components tienen "use client" — pueden usar useState, useEffect y APIs del browser',
      'El patrón más común es: Server Component obtiene datos y los pasa como props al Client Component',
      'TypeScript no detecta violaciones de Server/Client — esas reglas son de Next.js',
      'Los tipos definidos en types.ts pueden compartirse entre Server y Client Components',
    ],
    exercise: {
      description:
        'Crea un Server Component `PaginaProductos` que obtiene una lista de productos (async) y los pasa a un Client Component `FiltroProductos` que permite filtrar por categoría usando useState. Define la interfaz Producto compartida y tipa correctamente los props del Client Component.',
      hint: 'El Client Component tiene "use client" al inicio y usa useState para el filtro. El Server Component es async y pasa los productos como prop tipada.',
    },
    quiz: [
      {
        question: '¿Qué pasa si usas useState en un Server Component?',
        options: [
          'TypeScript muestra un error en compilación',
          'Funciona igual que en un Client Component',
          'Causa un error en runtime de Next.js',
          'El estado simplemente no funciona pero no da error',
        ],
        correctAnswer: 'Causa un error en runtime de Next.js',
        correctFeedback: '¡Correcto! Next.js detecta en runtime el uso de hooks en Server Components y lanza un error.',
        incorrectFeedback: 'Usar hooks como useState en un Server Component causa un error en runtime de Next.js, no en compilación de TypeScript.',
      },
      {
        question: '¿Cómo pasas datos del servidor a un Client Component?',
        options: [
          'Con variables globales compartidas',
          'Usando fetch en el Client Component para pedir los mismos datos',
          'El Server Component los pasa como props tipadas al Client Component',
          'Con cookies automáticas de Next.js',
        ],
        correctAnswer: 'El Server Component los pasa como props tipadas al Client Component',
        correctFeedback: '¡Exacto! El patrón es: Server Component obtiene datos → los pasa como props → Client Component los usa para interactividad.',
        incorrectFeedback: 'El patrón estándar es que el Server Component obtenga los datos y los pase como props tipadas al Client Component.',
      },
      {
        question: '¿Puede un Client Component ser async directamente?',
        options: [
          'Sí, sin restricciones',
          'Sí, pero solo en Next.js 15',
          'No directamente — para datos async en Client Components se usa useEffect',
          'Solo si tiene "use server"',
        ],
        correctAnswer: 'No directamente — para datos async en Client Components se usa useEffect',
        correctFeedback: '¡Correcto! Los Client Components no pueden ser async directamente. Para datos asíncronos se usa useEffect.',
        incorrectFeedback: 'Los Client Components no son async. Para obtener datos asíncronos en un Client Component, usa useEffect con fetch.',
      },
      {
        question: '¿Qué tipos de datos pueden pasar como props de un Server Component a un Client Component?',
        options: [
          'Cualquier tipo de JavaScript incluyendo funciones y clases',
          'Solo strings',
          'Solo datos serializables: strings, números, arrays, objetos planos',
          'Solo primitivos: string, number, boolean',
        ],
        correctAnswer: 'Solo datos serializables: strings, números, arrays, objetos planos',
        correctFeedback: '¡Correcto! Los datos deben ser serializables para cruzar el boundary servidor→cliente. Las funciones y clases no son serializables.',
        incorrectFeedback: 'Solo datos serializables (strings, números, arrays, objetos planos) pueden pasar del servidor al cliente. Las funciones y referencias no son serializables.',
      },
      {
        question: '¿TypeScript detecta si usas un hook en un Server Component?',
        options: [
          'Sí, muestra un error de compilación',
          'No, TypeScript no conoce las reglas de Next.js — el error aparece en runtime',
          'Sí, pero solo con la opción strict activada',
          'Solo detecta useState, no useEffect',
        ],
        correctAnswer: 'No, TypeScript no conoce las reglas de Next.js — el error aparece en runtime',
        correctFeedback: '¡Correcto! TypeScript solo verifica tipos. Las reglas de Server/Client Components son de Next.js y fallan en runtime.',
        incorrectFeedback: 'TypeScript no conoce las reglas de Next.js. Usar hooks en Server Components pasa el chequeo de TypeScript pero falla en runtime.',
      },
    ],
  },
  {
    slug: 'tipar-acciones-funciones-compartidas',
    title: 'Tipar acciones y funciones compartidas',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 220,
    description:
      'Aprende a tipar funciones compartidas entre componentes, helpers y lógica de servidor.',
    explanation: `## Tipar acciones y funciones compartidas

En un proyecto Next.js real, hay funciones que se comparten entre muchos componentes: helpers de formato, funciones de validación, y acciones del servidor.

### Helpers reutilizables tipados

\`\`\`tsx
// lib/utils.ts

export function formatearPrecio(precio: number, moneda = 'MXN'): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: moneda,
  }).format(precio)
}

export function truncarTexto(texto: string, max: number): string {
  if (texto.length <= max) return texto
  return texto.slice(0, max) + '...'
}

export function calcularProgreso(completadas: number, total: number): number {
  if (total === 0) return 0
  return Math.round((completadas / total) * 100)
}
\`\`\`

### Server Actions tipadas

\`\`\`tsx
// actions/cursos.ts
'use server'

interface ResultadoAccion<T> {
  datos: T | null
  error: string | null
}

export async function guardarProgreso(
  userId: string,
  courseSlug: string,
  lessonSlug: string
): Promise<ResultadoAccion<boolean>> {
  try {
    // Guardar en base de datos
    await db.progress.create({ userId, courseSlug, lessonSlug })
    return { datos: true, error: null }
  } catch {
    return { datos: null, error: 'No se pudo guardar el progreso' }
  }
}
\`\`\`

### Tipos compartidos entre módulos

\`\`\`tsx
// types/index.ts
export type NivelCurso = 'principiante' | 'intermedio' | 'avanzado'

export interface Curso {
  slug: string
  titulo: string
  nivel: NivelCurso
}

export interface Leccion {
  slug: string
  titulo: string
  courseSlug: string
}
\`\`\``,
    codeExample: `// Funciones compartidas y tipadas en un proyecto Next.js

// ─── lib/format.ts ────────────────────────────────────────────
export function formatearDuracion(minutos: number): string {
  if (minutos < 60) return \`\${minutos} min\`
  const horas = Math.floor(minutos / 60)
  const resto = minutos % 60
  return resto > 0 ? \`\${horas}h \${resto}min\` : \`\${horas}h\`
}

export function formatearFecha(fecha: Date): string {
  return fecha.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ─── lib/validar.ts ───────────────────────────────────────────
interface ResultadoValidacion {
  valido: boolean
  errores: string[]
}

export function validarEmail(email: string): ResultadoValidacion {
  const errores: string[] = []
  if (!email) errores.push('El email es requerido')
  if (!email.includes('@')) errores.push('Email inválido')
  return { valido: errores.length === 0, errores }
}

// ─── actions/progreso.ts ──────────────────────────────────────
'use server'

interface ProgresoGuardado {
  courseSlug: string
  lessonSlug: string
  completadaEn: Date
}

export async function marcarLeccionCompleta(
  courseSlug: string,
  lessonSlug: string
): Promise<{ exito: boolean; error?: string }> {
  try {
    // Simula guardado en base de datos
    console.log(\`Guardando: \${courseSlug}/\${lessonSlug}\`)
    return { exito: true }
  } catch {
    return { exito: false, error: 'Error al guardar el progreso' }
  }
}

// ─── Uso en Client Component ──────────────────────────────────
'use client'

import { marcarLeccionCompleta } from '@/actions/progreso'
import { formatearDuracion } from '@/lib/format'

interface BotonCompletarProps {
  courseSlug: string
  lessonSlug: string
  duracionMinutos: number
}

export function BotonCompletar({
  courseSlug,
  lessonSlug,
  duracionMinutos,
}: BotonCompletarProps) {
  async function handleCompletar() {
    const resultado = await marcarLeccionCompleta(courseSlug, lessonSlug)
    if (!resultado.exito) {
      console.error(resultado.error)
    }
  }

  return (
    <button onClick={handleCompletar}>
      Completar ({formatearDuracion(duracionMinutos)})
    </button>
  )
}`,
    keyPoints: [
      'Organiza funciones compartidas en lib/ con tipos explícitos en parámetros y retorno',
      'Los Server Actions se marcan con "use server" y pueden ser async con tipos claros',
      'Define un tipo ResultadoAccion<T> reutilizable para respuestas de acciones del servidor',
      'Los tipos compartidos entre módulos van en types/ o types/index.ts',
      'Importa funciones y tipos del servidor solo en Server Components o Server Actions',
    ],
    exercise: {
      description:
        'Crea un archivo `lib/cursos-helpers.ts` con funciones: `filtrarPorNivel(cursos: Curso[], nivel: string): Curso[]` y `ordenarPorLecciones(cursos: Curso[], orden: "asc" | "desc"): Curso[]`. Define la interfaz Curso con slug, titulo, lecciones y nivel. Úsalas en un Server Component.',
      hint: 'filtrarPorNivel usa .filter(). ordenarPorLecciones usa .sort() con (a, b) => orden === "asc" ? a.lecciones - b.lecciones : b.lecciones - a.lecciones.',
    },
    quiz: [
      {
        question: '¿Qué hace la directiva "use server" al inicio de un archivo?',
        options: [
          'Marca el archivo como solo para producción',
          'Hace que todas las funciones exportadas sean Server Actions que pueden llamarse desde el cliente',
          'Desactiva el modo de desarrollo',
          'Hace que el archivo se ejecute antes que los demás',
        ],
        correctAnswer: 'Hace que todas las funciones exportadas sean Server Actions que pueden llamarse desde el cliente',
        correctFeedback: '¡Correcto! "use server" define Server Actions — funciones del servidor que pueden invocarse desde Client Components.',
        incorrectFeedback: '"use server" marca las funciones como Server Actions, permitiendo que los Client Components las llamen aunque se ejecuten en el servidor.',
      },
      {
        question: '¿Por qué es útil tener un tipo ResultadoAccion<T> genérico?',
        options: [
          'Para hacer el código más complejo',
          'Para tener una forma consistente de retornar datos o error en acciones del servidor',
          'Porque TypeScript lo requiere para Server Actions',
          'Para compatibilidad con React',
        ],
        correctAnswer: 'Para tener una forma consistente de retornar datos o error en acciones del servidor',
        correctFeedback: '¡Correcto! Un tipo de resultado consistente hace que sea predecible manejar éxito y error en todas las acciones.',
        incorrectFeedback: 'ResultadoAccion<T> es un patrón que provee consistencia — siempre sabes cómo manejar el resultado de cualquier acción.',
      },
      {
        question: '¿Pueden los Client Components llamar a Server Actions directamente?',
        options: [
          'No, las Server Actions solo pueden llamarse desde Server Components',
          'Sí, los Client Components pueden llamar Server Actions — Next.js maneja la comunicación',
          'Solo si el Client Component también tiene "use server"',
          'Solo con fetch manual',
        ],
        correctAnswer: 'Sí, los Client Components pueden llamar Server Actions — Next.js maneja la comunicación',
        correctFeedback: '¡Correcto! Los Client Components pueden importar y llamar Server Actions. Next.js convierte la llamada en una petición HTTP internamente.',
        incorrectFeedback: 'Los Client Components pueden llamar Server Actions directamente. Next.js serializa la llamada como petición HTTP al servidor automáticamente.',
      },
      {
        question: '¿Cuál es la ventaja de tipar explícitamente el retorno de las funciones helper?',
        options: [
          'Hace el código más lento',
          'No tiene ninguna ventaja real',
          'Documenta el contrato de la función y TypeScript verifica que el retorno sea correcto',
          'Solo sirve para evitar errores con null',
        ],
        correctAnswer: 'Documenta el contrato de la función y TypeScript verifica que el retorno sea correcto',
        correctFeedback: '¡Correcto! Tipar el retorno documenta lo que la función promete devolver y TypeScript verifica que siempre se cumpla.',
        incorrectFeedback: 'Tipar el retorno documenta el contrato y TypeScript detecta si alguna rama de la función devuelve un tipo diferente al declarado.',
      },
      {
        question: '¿Dónde deben ir las funciones de formateo reutilizables como formatearPrecio o truncarTexto?',
        options: [
          'Dentro del componente que las usa',
          'En lib/utils.ts o lib/format.ts separados',
          'En app/page.tsx al inicio del archivo',
          'En el archivo tsconfig.json',
        ],
        correctAnswer: 'En lib/utils.ts o lib/format.ts separados',
        correctFeedback: '¡Correcto! Las funciones helper van en lib/ para que puedan reutilizarse en múltiples componentes y ser fáciles de probar.',
        incorrectFeedback: 'Las funciones helper van en lib/ (ej: lib/utils.ts, lib/format.ts) — así son reutilizables en toda la aplicación y fáciles de testear.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-app-router-typescript',
    title: 'Buenas prácticas en App Router',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 221,
    description:
      'Aprende buenas prácticas para organizar tipos, componentes y datos en un proyecto Next.js con App Router.',
    explanation: `## Buenas prácticas en App Router con TypeScript

Un proyecto Next.js bien organizado con TypeScript es más fácil de mantener, extender y depurar.

### Organización de tipos

\`\`\`
src/
├── types/
│   ├── index.ts       ← tipos globales compartidos
│   ├── api.ts         ← tipos de respuestas de API
│   └── supabase.ts    ← tipos generados por Supabase
├── lib/
│   ├── utils.ts       ← helpers tipados
│   ├── format.ts      ← funciones de formato
│   └── validar.ts     ← validaciones
└── actions/
    └── progreso.ts    ← Server Actions
\`\`\`

### Tipos cerca de donde se usan

\`\`\`tsx
// ✅ Tipo definido cerca del componente que lo usa
interface ModuloCardProps {
  numero: number
  titulo: string
  lecciones: number
}

function ModuloCard({ numero, titulo, lecciones }: ModuloCardProps) { ... }
\`\`\`

### Evitar archivos de tipos gigantes

\`\`\`tsx
// ❌ Un archivo con 100 interfaces no relacionadas
// types/todo.ts — interfaces de cursos, usuarios, pagos, auth...

// ✅ Tipos agrupados por dominio
// types/cursos.ts
// types/usuarios.ts
// types/pagos.ts
\`\`\`

### Re-exportar tipos con barrel files

\`\`\`tsx
// types/index.ts
export type { Curso, Leccion, Modulo } from './cursos'
export type { Usuario, Perfil } from './usuarios'
\`\`\`

### Usar import type

\`\`\`tsx
// ✅ Usar import type cuando solo necesitas el tipo
import type { Curso } from '@/types'
import { getCurso } from '@/lib/cursos'  // Importa el valor

// Esto ayuda al tree-shaking y deja claro qué es tipo y qué es código
\`\`\`

### Validar datos externos antes de confiar en ellos

\`\`\`tsx
interface ApiRespuesta {
  cursos: Curso[]
  total: number
}

async function fetchCursos(): Promise<ApiRespuesta> {
  const res = await fetch('/api/cursos')
  if (!res.ok) throw new Error('Error al obtener cursos')
  const datos = await res.json() as ApiRespuesta
  // Validación mínima
  if (!Array.isArray(datos.cursos)) throw new Error('Formato incorrecto')
  return datos
}
\`\`\``,
    codeExample: `// Estructura recomendada de un proyecto Next.js + TypeScript

// ─── types/cursos.ts ──────────────────────────────────────────
export type NivelCurso = 'principiante' | 'intermedio' | 'avanzado'

export interface Curso {
  slug: string
  titulo: string
  descripcion: string
  nivel: NivelCurso
  lecciones: number
  icono: string
}

export interface Leccion {
  slug: string
  titulo: string
  descripcion: string
  modulo: number
  orden: number
}

// ─── types/index.ts ───────────────────────────────────────────
export type { Curso, Leccion, NivelCurso } from './cursos'

// ─── lib/cursos.ts ────────────────────────────────────────────
import type { Curso } from '@/types'

export async function getCurso(slug: string): Promise<Curso | null> {
  // Implementación
  return null
}

export function filtrarCursos(
  cursos: Curso[],
  nivel?: NivelCurso
): Curso[] {
  if (!nivel) return cursos
  return cursos.filter((c) => c.nivel === nivel)
}

// ─── components/CursoGrid.tsx ─────────────────────────────────
import type { Curso } from '@/types'
import { CursoCard } from './CursoCard'

interface CursoGridProps {
  cursos: Curso[]
  columnas?: 2 | 3 | 4
}

export function CursoGrid({ cursos, columnas = 3 }: CursoGridProps) {
  return (
    <div className={\`grid grid-cols-\${columnas} gap-4\`}>
      {cursos.map((curso) => (
        <CursoCard key={curso.slug} curso={curso} />
      ))}
    </div>
  )
}

// ─── app/cursos/page.tsx ──────────────────────────────────────
import { getCurso } from '@/lib/cursos'
import { CursoGrid } from '@/components/CursoGrid'
import type { Curso } from '@/types'

export default async function PaginaCursos() {
  const cursos: Curso[] = []  // await getCursos()

  return (
    <main>
      <CursoGrid cursos={cursos} columnas={3} />
    </main>
  )
}`,
    keyPoints: [
      'Organiza los tipos por dominio (cursos.ts, usuarios.ts) no en un solo archivo gigante',
      'Usa barrel files (index.ts) para re-exportar tipos y simplificar importaciones',
      'Usa "import type" cuando solo necesitas el tipo — ayuda al tree-shaking',
      'Mantén los tipos cerca de donde se usan para componentes locales',
      'Valida los datos externos antes de confiar en que tienen la forma esperada',
    ],
    exercise: {
      description:
        'Crea la estructura de tipos para un pequeño e-commerce: `types/productos.ts` con Producto e interfaz de filtros, `types/usuarios.ts` con Usuario y Perfil, y `types/index.ts` que re-exporte todo. Luego crea un helper `lib/productos.ts` con funciones para filtrar y ordenar.',
      hint: 'El archivo index.ts usa "export type { Producto, FiltrosProducto } from ./productos". Las funciones helpers tienen tipos explícitos en parámetros y retorno.',
    },
    quiz: [
      {
        question: '¿Por qué es mejor tener tipos/cursos.ts y tipos/usuarios.ts en vez de un solo tipos.ts?',
        options: [
          'Porque TypeScript lo requiere',
          'Para organizar por dominio, hacer el código más navegable y evitar archivos gigantes',
          'Porque los tipos no pueden estar en el mismo archivo',
          'Por rendimiento — TypeScript compila más rápido',
        ],
        correctAnswer: 'Para organizar por dominio, hacer el código más navegable y evitar archivos gigantes',
        correctFeedback: '¡Correcto! Separar tipos por dominio hace el proyecto más organizado y fácil de navegar.',
        incorrectFeedback: 'Separar tipos por dominio organiza mejor el código, evita archivos gigantes y hace más claro qué pertenece a qué área.',
      },
      {
        question: '¿Qué ventaja tiene usar "import type" en lugar de "import"?',
        options: [
          'Es más rápido de escribir',
          'Deja claro que solo se usa el tipo y ayuda al tree-shaking eliminando el import del bundle',
          'Solo funciona con interfaces, no con type',
          'Hace que los tipos sean inmutables',
        ],
        correctAnswer: 'Deja claro que solo se usa el tipo y ayuda al tree-shaking eliminando el import del bundle',
        correctFeedback: '¡Correcto! "import type" hace explícita la intención y el compilador puede eliminarlo completamente del bundle.',
        incorrectFeedback: '"import type" indica que solo importas información de tipos — TypeScript lo elimina completamente al compilar, sin afectar el bundle.',
      },
      {
        question: '¿Qué es un "barrel file" en TypeScript/Next.js?',
        options: [
          'Un archivo muy grande con todo el código',
          'Un archivo index.ts que re-exporta símbolos de otros archivos para simplificar importaciones',
          'Un archivo de configuración de TypeScript',
          'El archivo principal de la aplicación',
        ],
        correctAnswer: 'Un archivo index.ts que re-exporta símbolos de otros archivos para simplificar importaciones',
        correctFeedback: '¡Correcto! Un barrel file (index.ts) centraliza las re-exportaciones para que puedas hacer import { Curso } from @/types en vez de especificar el sub-archivo.',
        incorrectFeedback: 'Un barrel file es un index.ts que re-exporta de otros archivos. Permite import { Curso } from "@/types" en lugar de "@/types/cursos".',
      },
      {
        question: '¿Por qué debes validar datos externos aunque tengas tipos TypeScript?',
        options: [
          'No es necesario — TypeScript garantiza la forma de los datos',
          'Porque TypeScript solo verifica en compilación y los datos externos llegan en runtime sin verificación',
          'Solo para datos de APIs pagas',
          'Solo cuando usas strict mode',
        ],
        correctAnswer: 'Porque TypeScript solo verifica en compilación y los datos externos llegan en runtime sin verificación',
        correctFeedback: '¡Correcto! TypeScript no valida en runtime. Un as ApiRespuesta en fetch no garantiza que los datos tengan esa forma.',
        incorrectFeedback: 'TypeScript opera en compilación, no en runtime. Los datos de una API externa pueden tener cualquier forma — debes validarlos manualmente.',
      },
      {
        question: '¿Cómo deberías importar tipos que no necesitas como valores en runtime?',
        options: [
          'import { Curso } from "@/types"',
          'import type { Curso } from "@/types"',
          'require("@/types").Curso',
          'Todos son equivalentes',
        ],
        correctAnswer: 'import type { Curso } from "@/types"',
        correctFeedback: '¡Correcto! import type importa solo la información de tipo, que TypeScript elimina completamente al compilar.',
        incorrectFeedback: 'Usa import type cuando solo necesitas el tipo para anotaciones. TypeScript lo elimina del bundle — es más explícito y eficiente.',
      },
    ],
  },
  {
    slug: 'errores-typescript-nextjs',
    title: 'Errores comunes con TypeScript y Next.js',
    module: 'TypeScript con Next.js',
    moduleNumber: 27,
    order: 222,
    description:
      'Aprende a evitar errores comunes con params, searchParams, componentes cliente, datos async y tipos compartidos.',
    explanation: `## Errores comunes con TypeScript y Next.js

Combinar Next.js con TypeScript tiene sus propios errores frecuentes. Conocerlos de antemano te ahorra tiempo.

### Error 1: Olvidar await en params (Next.js 15)

\`\`\`tsx
// ❌ En Next.js 15, params es Promise — falta await
export default async function Page({ params }: PageProps) {
  const courseSlug = params.courseSlug  // Error: params es Promise

  // ✅ Correcto
  const { courseSlug } = await params
}
\`\`\`

### Error 2: Usar hooks en Server Components

\`\`\`tsx
// ❌ useState en un Server Component (sin "use client")
export default async function Pagina() {
  const [abierto, setAbierto] = useState(false)  // Error en runtime
}

// ✅ Mover la interactividad al Client Component
\`\`\`

### Error 3: Pasar funciones no serializables como props

\`\`\`tsx
// ❌ Server Component intenta pasar una función al Client Component
// (Las funciones no son serializables — no pueden cruzar el boundary Server→Client)
export default async function Pagina() {
  const handleClick = () => console.log('click')
  return <ClienteInteractivo onClick={handleClick} />  // Error
}

// ✅ El handler va en el Client Component
\`\`\`

### Error 4: Acceder a searchParams sin await (Next.js 15)

\`\`\`tsx
// ❌ En Next.js 15
export default async function Page({ searchParams }: PageProps) {
  const nivel = searchParams.nivel  // Error: searchParams es Promise

  // ✅ Correcto
  const params = await searchParams
  const nivel = params.nivel
}
\`\`\`

### Error 5: Tipos de datos de servidor no coindicen

\`\`\`tsx
// ❌ Tipo esperado vs tipo real de la base de datos
interface Curso { id: number; titulo: string }
const datos = await db.query()
// datos.title no es datos.titulo — nombres diferentes
\`\`\`

### Error 6: Olvidar manejar el caso null/undefined

\`\`\`tsx
// ❌ Sin verificar null
const curso = await getCurso(slug)
return <h1>{curso.titulo}</h1>  // Error: curso puede ser null

// ✅ Con verificación
if (!curso) return notFound()
return <h1>{curso.titulo}</h1>
\`\`\``,
    codeExample: `// Resolución de errores comunes en Next.js + TypeScript

import { notFound } from 'next/navigation'
import type { Curso } from '@/types'

// ─── Tipo correcto para Next.js 15 ────────────────────────────
interface PageProps {
  params: Promise<{ courseSlug: string }>
  searchParams: Promise<{ pagina?: string; nivel?: string }>
}

export default async function CursoPage({ params, searchParams }: PageProps) {
  // ✅ Error 1 y 4 resueltos: await en params y searchParams
  const { courseSlug } = await params
  const { pagina, nivel } = await searchParams

  const paginaNum = pagina ? parseInt(pagina, 10) : 1

  // Simula obtener datos
  const curso: Curso | null = await getCurso(courseSlug)

  // ✅ Error 6 resuelto: verificar null antes de usar
  if (!curso) {
    notFound()  // Next.js muestra la página 404
  }

  return (
    <main>
      <h1>{curso.titulo}</h1>
      {nivel && <p>Filtro activo: {nivel}</p>}
      <p>Página: {paginaNum}</p>

      {/* ✅ Client Component separado para interactividad */}
      <AccionesInteractivas courseSlug={courseSlug} />
    </main>
  )
}

async function getCurso(slug: string): Promise<Curso | null> {
  if (slug === 'typescript') {
    return { slug: 'typescript', titulo: 'TypeScript desde Cero', descripcion: '...', nivel: 'principiante', lecciones: 251, icono: '🔷' }
  }
  return null
}

// Componente Client separado (sin pasar funciones del servidor)
// components/AccionesInteractivas.tsx
'use client'

import { useState } from 'react'

interface Props {
  courseSlug: string
}

export function AccionesInteractivas({ courseSlug }: Props) {
  const [favorito, setFavorito] = useState(false)

  return (
    <button onClick={() => setFavorito((f) => !f)}>
      {favorito ? '♥' : '♡'} {courseSlug}
    </button>
  )
}`,
    keyPoints: [
      'En Next.js 15, tanto params como searchParams son Promise y necesitan await',
      'Los hooks solo funcionan en Client Components ("use client") — nunca en Server Components',
      'Las funciones no pueden pasar del Server Component al Client Component como props',
      'Siempre verifica null después de obtener datos del servidor — usa notFound() si corresponde',
      'Los nombres de los campos en los tipos deben coincidir exactamente con los de la base de datos',
    ],
    exercise: {
      description:
        'Encuentra y corrige todos los errores en este código Next.js 15: `export default async function Page({ params }) { const slug = params.slug; const [count, setCount] = useState(0); const curso = await getCurso(slug); return <h1>{curso.titulo}</h1> }`. Hay al menos 4 errores.',
      hint: 'Errores: 1) params sin tipo, 2) params sin await, 3) useState en Server Component, 4) no verificar que curso no sea null antes de acceder a .titulo.',
    },
    quiz: [
      {
        question: 'En Next.js 15, ¿cuál de estos accesos a params es correcto?',
        options: [
          'const slug = params.slug',
          'const { slug } = await params',
          'const slug = params().slug',
          'const slug = params.get("slug")',
        ],
        correctAnswer: 'const { slug } = await params',
        correctFeedback: '¡Correcto! En Next.js 15 params es una Promise y necesita await.',
        incorrectFeedback: 'En Next.js 15, params es Promise. Necesitas "const { slug } = await params".',
      },
      {
        question: '¿Qué función de Next.js debes llamar cuando no encuentras un recurso en una página?',
        options: ['redirect("/404")', 'throw new Error("not found")', 'notFound()', 'return null'],
        correctAnswer: 'notFound()',
        correctFeedback: '¡Correcto! notFound() de next/navigation muestra la página 404 de Next.js.',
        incorrectFeedback: 'Next.js tiene la función notFound() de next/navigation para mostrar automáticamente la página 404.',
      },
      {
        question: '¿Pueden pasar funciones como props desde un Server Component a un Client Component?',
        options: [
          'Sí, sin restricciones',
          'Solo funciones async',
          'No — las funciones no son serializables y no pueden cruzar el boundary servidor→cliente',
          'Solo si las funciones no tienen parámetros',
        ],
        correctAnswer: 'No — las funciones no son serializables y no pueden cruzar el boundary servidor→cliente',
        correctFeedback: '¡Correcto! Solo datos serializables (strings, números, arrays, objetos planos) pueden pasar del servidor al cliente.',
        incorrectFeedback: 'Las funciones no son serializables y no pueden pasar del Server Component al Client Component como props.',
      },
      {
        question: '¿Qué error ocurre si accedes a curso.titulo cuando curso puede ser null?',
        options: [
          'No hay error — TypeScript lo permite',
          'Error de compilación: "Object is possibly null" con strict activado',
          'Error solo en producción',
          'Undefined exception en runtime sin error de TypeScript',
        ],
        correctAnswer: 'Error de compilación: "Object is possibly null" con strict activado',
        correctFeedback: '¡Correcto! Con strictNullChecks, TypeScript detecta el acceso a propiedades de un valor que puede ser null y muestra error en compilación.',
        incorrectFeedback: 'Con strict/strictNullChecks activado, TypeScript detecta el acceso a .titulo en un valor que puede ser null y muestra error de compilación.',
      },
      {
        question: '¿En qué versión de Next.js cambió params de objeto directo a Promise?',
        options: ['Next.js 12', 'Next.js 13', 'Next.js 14', 'Next.js 15'],
        correctAnswer: 'Next.js 15',
        correctFeedback: '¡Correcto! El cambio de params a Promise se introdujo en Next.js 15 como breaking change.',
        incorrectFeedback: 'Params se convirtió en Promise en Next.js 15. En versiones anteriores (13/14) era un objeto directo que no necesitaba await.',
      },
    ],
  },
]

export const tsModule27: Module = {
  number: 27,
  title: 'TypeScript con Next.js',
  level: 'nivel6',
  lessons: lessonsTsModule27,
}
