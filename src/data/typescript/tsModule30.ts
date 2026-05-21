import type { Lesson, Module } from '@/types'

export const lessonsTsModule30: Lesson[] = [
  {
    slug: 'proyecto-final-typescript-definir',
    title: 'Definir el proyecto final TypeScript',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 240,
    description:
      'Define un proyecto final que use TypeScript en una aplicación práctica y presentable para portafolio.',
    explanation: `## Definir el proyecto final TypeScript

El proyecto final es la demostración de todo lo que has aprendido en este curso. Debe ser práctico, bien tipado y presentable.

### ¿Qué hace un buen proyecto final?

- Tiene un propósito claro y comprensible
- Usa TypeScript correctamente (no solo como JavaScript con tipos en algunos lados)
- Tiene tipos definidos para los datos principales
- Incluye manejo de errores
- Es funcional y tiene una UI mínima
- Puede explicarse en una entrevista de trabajo

### Ideas de proyectos adecuados

**Aplicaciones de datos:**
- Gestor de tareas (To-do list con categorías, prioridades y tipos)
- Catálogo de películas o libros con búsqueda y filtros
- Rastreador de gastos personales con categorías y reportes

**Aplicaciones con API:**
- Aplicación del clima que consume una API externa
- Buscador de cursos o repositorios de GitHub
- Dashboard de criptomonedas

**Herramientas útiles:**
- Generador de contraseñas con opciones tipadas
- Calculadora de préstamos o hipotecas
- Validador y formateador de datos (JSON, CSV)

### Lo que debe mostrar el proyecto

1. **Tipos bien definidos** — interfaces para los datos principales
2. **Funciones tipadas** — parámetros y retornos con tipos claros
3. **Manejo de errores** — no ignorar los posibles fallos
4. **Organización** — carpetas y archivos con responsabilidades claras
5. **README** — explicación de cómo instalar y usar el proyecto

### Lo que NO necesita el proyecto

- Autenticación compleja
- Base de datos real (puede usar JSON local o una API pública)
- UI perfecta (funcional es suficiente)
- 100% de cobertura de tests (las pruebas de funciones críticas son suficientes)`,
    codeExample: `// Definición del proyecto final — Gestor de Tareas con TypeScript

// ─── El proyecto: TaskMaster ──────────────────────────────────
// Una aplicación de gestión de tareas que demuestra:
// - Tipos bien definidos (Tarea, Categoria, Prioridad)
// - Operaciones CRUD tipadas
// - Filtros y ordenamiento tipados
// - Persistencia en localStorage
// - Manejo de errores
// - Tests para lógica crítica

// ─── Estructura del proyecto ──────────────────────────────────
// src/
// ├── types/
// │   └── tarea.ts        ← Tipos principales
// ├── lib/
// │   ├── tarea-service.ts ← Lógica de negocio
// │   └── storage.ts      ← Persistencia localStorage
// ├── utils/
// │   └── filtros.ts      ← Funciones de filtrado y ordenamiento
// ├── components/         ← Si es React
// │   ├── TareaCard.tsx
// │   └── FormularioTarea.tsx
// ├── tests/
// │   └── tarea-service.test.ts
// └── main.ts / App.tsx

// ─── types/tarea.ts — definición del dominio ──────────────────
export type Prioridad = 'baja' | 'media' | 'alta' | 'urgente'
export type EstadoTarea = 'pendiente' | 'en-progreso' | 'completada'

export interface Categoria {
  id: string
  nombre: string
  color: string
}

export interface Tarea {
  id: string
  titulo: string
  descripcion: string
  prioridad: Prioridad
  estado: EstadoTarea
  categoriaId: string | null
  creadaEn: Date
  completadaEn: Date | null
  etiquetas: string[]
}

export interface FiltrosTarea {
  estado?: EstadoTarea
  prioridad?: Prioridad
  categoriaId?: string
  busqueda?: string
}

export interface EstadisticasTareas {
  total: number
  completadas: number
  pendientes: number
  porcentajeCompletado: number
}`,
    keyPoints: [
      'El proyecto final debe tener un propósito claro y ser explicable en una entrevista',
      'Prioriza demostrar TypeScript correcto sobre una UI perfecta',
      'Define los tipos del dominio primero — son la base de todo el proyecto',
      'Mantén el alcance realista: 1-2 semanas de trabajo es suficiente',
      'El README es parte del proyecto — explica propósito, instalación y uso',
    ],
    exercise: {
      description:
        'Elige un proyecto de la lista o propón uno propio. Escribe: 1) El nombre y propósito en 2 oraciones. 2) Los 3 tipos/interfaces principales que necesitarás. 3) Las 4-5 funciones principales del proyecto. 4) La estructura de carpetas que usarás.',
      hint: 'Elige algo que puedas terminar en 1-2 semanas. Los tipos principales son los datos centrales de tu app (Tarea, Producto, Película, etc.).',
    },
    quiz: [
      {
        question: '¿Qué es más importante en el proyecto final para demostrar habilidades TypeScript?',
        options: [
          'Tener una UI perfecta y moderna',
          'Usar TypeScript correctamente con tipos bien definidos, manejo de errores y organización',
          'Conectar con una base de datos real',
          'Tener autenticación de usuarios',
        ],
        correctAnswer: 'Usar TypeScript correctamente con tipos bien definidos, manejo de errores y organización',
        correctFeedback: '¡Correcto! El objetivo es demostrar que sabes usar TypeScript, no impresionar con features complejas.',
        incorrectFeedback: 'Lo importante es demostrar TypeScript correcto: tipos bien definidos, funciones tipadas, manejo de errores y organización.',
      },
      {
        question: '¿Cuáles son las 5 cosas que el proyecto final debe mostrar según la lección?',
        options: [
          'Framework, base de datos, autenticación, SSR y tests al 100%',
          'Tipos bien definidos, funciones tipadas, manejo de errores, organización clara y README',
          'Solo tipos e interfaces',
          'Solo que compila sin errores',
        ],
        correctAnswer: 'Tipos bien definidos, funciones tipadas, manejo de errores, organización clara y README',
        correctFeedback: '¡Correcto! Esos cinco aspectos son los que demuestran que dominas TypeScript en la práctica.',
        incorrectFeedback: 'El proyecto debe mostrar: tipos bien definidos, funciones tipadas, manejo de errores, organización y un README explicativo.',
      },
      {
        question: '¿Cuánto tiempo de trabajo debería llevar el proyecto final según la guía?',
        options: [
          'Un día máximo',
          '1-2 semanas de trabajo',
          'Al menos un mes',
          'Un trimestre completo',
        ],
        correctAnswer: '1-2 semanas de trabajo',
        correctFeedback: '¡Correcto! 1-2 semanas es suficiente para demostrar TypeScript bien aplicado sin UI perfecta ni features avanzadas.',
        incorrectFeedback: 'El proyecto debe ser alcanzable en 1-2 semanas. Mantén el alcance realista — la calidad del TypeScript importa más que la cantidad de features.',
      },
      {
        question: '¿Necesita el proyecto final una base de datos real?',
        options: [
          'Sí, siempre — sin base de datos no es un proyecto real',
          'No — puede usar JSON local, localStorage, o una API pública',
          'Solo si es Next.js',
          'Solo si tiene más de 5 entidades',
        ],
        correctAnswer: 'No — puede usar JSON local, localStorage, o una API pública',
        correctFeedback: '¡Correcto! El proyecto puede persistir datos en localStorage, archivos JSON o consumir una API pública. No necesita base de datos propia.',
        incorrectFeedback: 'Una base de datos real no es necesaria. localStorage, archivos JSON locales o una API pública son suficientes para el proyecto final.',
      },
      {
        question: '¿Qué tipo de proyectos se mencionan como ideas adecuadas para el proyecto final?',
        options: [
          'Clon de Netflix o Instagram con autenticación',
          'Gestor de tareas, catálogo de películas o rastreador de gastos',
          'Sistema de pagos con Stripe',
          'Red social completa con mensajería en tiempo real',
        ],
        correctAnswer: 'Gestor de tareas, catálogo de películas o rastreador de gastos',
        correctFeedback: '¡Correcto! Proyectos de gestión de datos son ideales — permiten mostrar tipos bien definidos, CRUD y manejo de estado.',
        incorrectFeedback: 'Proyectos como gestor de tareas, catálogo de películas o rastreador de gastos son perfectos — manejables en 1-2 semanas y demuestran TypeScript bien.',
      },
    ],
  },
  {
    slug: 'proyecto-final-typescript-stack',
    title: 'Elegir stack del proyecto',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 241,
    description:
      'Elige si construirás el proyecto con Vite + TypeScript, React + TypeScript o Next.js + TypeScript según tu nivel.',
    explanation: `## Elegir el stack del proyecto final

El stack que elijas debe coincidir con tu nivel actual y el tipo de proyecto que quieres mostrar.

### Opción 1: Vite + TypeScript (Recomendado para empezar)

**Ideal para:** proyectos de lógica pura, herramientas CLI, o proyectos sin frameworks

\`\`\`bash
npm create vite@latest mi-proyecto -- --template vanilla-ts
\`\`\`

**Ventajas:**
- Configuración mínima
- Enfoque total en TypeScript puro
- Ideal para demostrar tipos, funciones y organización

**Desventaja:**
- Necesitas construir la UI desde cero (HTML + CSS)

### Opción 2: Vite + React + TypeScript (Recomendado)

**Ideal para:** aplicaciones interactivas, to-do lists, catálogos, dashboards

\`\`\`bash
npm create vite@latest mi-proyecto -- --template react-ts
\`\`\`

**Ventajas:**
- React es familiar si completaste el módulo 26
- Buen balance entre TypeScript y UI
- Ampliamente usado en el mercado laboral

### Opción 3: Next.js + TypeScript

**Ideal para:** proyectos que consumen APIs, necesitan SEO, o tienen rutas múltiples

\`\`\`bash
npx create-next-app@latest mi-proyecto --typescript
\`\`\`

**Ventajas:**
- Muestra conocimiento de Next.js además de TypeScript
- Buen para proyectos que buscan datos de APIs externas

**Desventaja:**
- Más complejo — solo si ya conoces Next.js bien

### Recomendación general

Si es tu primer proyecto TypeScript: **Vite + React + TypeScript**

Es el stack más pedido en trabajos frontend, te permite mostrar TypeScript en React, y la configuración es sencilla.`,
    codeExample: `// Configuración inicial con Vite + React + TypeScript

// ─── Crear el proyecto ────────────────────────────────────────
// npm create vite@latest task-master -- --template react-ts
// cd task-master
// npm install

// ─── Estructura inicial del proyecto ─────────────────────────
// task-master/
// ├── src/
// │   ├── App.tsx            ← Componente raíz
// │   ├── main.tsx           ← Punto de entrada
// │   ├── types/
// │   │   └── tarea.ts       ← Definiciones de tipos
// │   ├── lib/
// │   │   └── tarea-service.ts ← Lógica
// │   ├── components/
// │   │   ├── TareaCard.tsx
// │   │   └── FormularioTarea.tsx
// │   └── hooks/
// │       └── useTareas.ts   ← Custom hook
// ├── tsconfig.json
// ├── vite.config.ts
// └── package.json

// ─── tsconfig.json generado por Vite (no lo modifiques) ───────
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "useDefineForClassFields": true,
//     "lib": ["ES2020", "DOM", "DOM.Iterable"],
//     "module": "ESNext",
//     "skipLibCheck": true,
//     "moduleResolution": "bundler",
//     "allowImportingTsExtensions": true,
//     "isolatedModules": true,
//     "moduleDetection": "force",
//     "noEmit": true,
//     "jsx": "react-jsx",
//     "strict": true
//   },
//   "include": ["src"]
// }

// ─── App.tsx inicial ──────────────────────────────────────────
import { useState } from 'react'
import type { Tarea } from './types/tarea'

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([])

  return (
    <div className="app">
      <h1>TaskMaster</h1>
      <p>{tareas.length} tareas</p>
    </div>
  )
}

export default App`,
    keyPoints: [
      'Vite + React + TypeScript es el stack más recomendado para el proyecto final',
      'Next.js es una buena opción si ya tienes experiencia con él',
      'Vite + TypeScript vanilla es ideal si quieres enfocarte solo en lógica TypeScript',
      'La configuración de TypeScript que generan estos stacks está optimizada — no la modifiques',
      'El stack debe coincidir con tu nivel actual — no elijas algo que no conoces bien',
    ],
    exercise: {
      description:
        'Crea el proyecto base con tu stack elegido (Vite + React + TypeScript es la recomendación). Una vez creado: 1) Crea la carpeta src/types/ con un archivo para los tipos principales. 2) Crea la carpeta src/lib/ para la lógica. 3) Verifica que el proyecto compila con npm run build.',
      hint: 'Usa npm create vite@latest nombre-proyecto -- --template react-ts. La estructura de carpetas puedes crearla con mkdir desde el terminal.',
    },
    quiz: [
      {
        question: '¿Para qué tipo de proyecto es más adecuado Vite + TypeScript sin framework?',
        options: [
          'Para proyectos que necesitan SSR',
          'Para lógica pura, herramientas o proyectos sin UI compleja',
          'Para proyectos con muchas rutas',
          'Para proyectos con autenticación',
        ],
        correctAnswer: 'Para lógica pura, herramientas o proyectos sin UI compleja',
        correctFeedback: '¡Correcto! Vite + TypeScript sin framework es ideal cuando quieres mostrar TypeScript puro sin la capa de un framework.',
        incorrectFeedback: 'Vite + TypeScript vanilla es mejor para demostrar TypeScript puro: tipos, funciones, organización — sin depender de React.',
      },
      {
        question: '¿Qué stack recomienda la lección para la mayoría de los desarrolladores que hacen su primer proyecto TypeScript?',
        options: [
          'Vite + TypeScript vanilla',
          'Next.js + TypeScript',
          'Vite + React + TypeScript',
          'Angular + TypeScript',
        ],
        correctAnswer: 'Vite + React + TypeScript',
        correctFeedback: '¡Correcto! Vite + React + TypeScript es el más pedido en trabajos frontend y tiene una configuración sencilla.',
        incorrectFeedback: 'La recomendación es Vite + React + TypeScript — es el stack más pedido en empleos frontend y equilibra TypeScript con UI.',
      },
      {
        question: '¿Cuál es el comando para crear un proyecto Vite + React + TypeScript?',
        options: [
          'npm create vite@latest mi-proyecto -- --template react',
          'npm create vite@latest mi-proyecto -- --template react-ts',
          'npx create-react-app mi-proyecto --typescript',
          'npm init vite mi-proyecto react-typescript',
        ],
        correctAnswer: 'npm create vite@latest mi-proyecto -- --template react-ts',
        correctFeedback: '¡Correcto! El template "react-ts" incluye React con TypeScript configurado desde el inicio.',
        incorrectFeedback: 'El comando correcto es `npm create vite@latest mi-proyecto -- --template react-ts`. La plantilla react-ts activa TypeScript desde el principio.',
      },
      {
        question: '¿Qué debes hacer con el tsconfig.json que genera Vite?',
        options: [
          'Reemplazarlo con el de otro proyecto',
          'No modificarlo — ya está optimizado para Vite',
          'Eliminar la configuración de strict',
          'Agregar manualmente todas las librerías de DOM',
        ],
        correctAnswer: 'No modificarlo — ya está optimizado para Vite',
        correctFeedback: '¡Correcto! El tsconfig.json generado por Vite está configurado específicamente para funcionar con Vite — no lo cambies.',
        incorrectFeedback: 'El tsconfig.json generado por Vite ya tiene la configuración correcta (strict: true, moduleResolution: bundler, etc.) — no lo modifiques.',
      },
      {
        question: '¿Cuándo tiene sentido elegir Next.js en lugar de Vite + React para el proyecto final?',
        options: [
          'Siempre — Next.js es superior a Vite',
          'Cuando ya conoces Next.js bien y el proyecto necesita múltiples rutas o SEO',
          'Solo si el proyecto tiene base de datos',
          'Cuando no quieres usar TypeScript estricto',
        ],
        correctAnswer: 'Cuando ya conoces Next.js bien y el proyecto necesita múltiples rutas o SEO',
        correctFeedback: '¡Correcto! Next.js es una buena opción si ya tienes experiencia con él y el proyecto se beneficia de SSR o rutas múltiples.',
        incorrectFeedback: 'Elige Next.js solo si ya lo conoces bien — es más complejo. Para el primer proyecto TypeScript, Vite + React es más manejable.',
      },
    ],
  },
  {
    slug: 'proyecto-final-disenar-tipos',
    title: 'Diseñar tipos principales',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 242,
    description:
      'Aprende a definir los tipos principales del proyecto antes de escribir toda la lógica.',
    explanation: `## Diseñar tipos principales del proyecto

Antes de escribir la lógica, define los tipos de los datos centrales de tu aplicación. Este es el paso más importante del diseño.

### El proceso de diseño de tipos

1. **Identifica las entidades principales** — ¿cuáles son los datos centrales?
2. **Define sus propiedades** — ¿qué información necesita cada entidad?
3. **Identifica las relaciones** — ¿cómo se conectan las entidades?
4. **Define los estados posibles** — ¿qué valores pueden tener ciertos campos?
5. **Crea tipos auxiliares** — filtros, estadísticas, formularios

### Principios para buenos tipos

\`\`\`typescript
// ✅ Nombres descriptivos
interface Tarea {}        // Claro
interface T {}            // No claro

// ✅ Union types para estados limitados
type Estado = 'activo' | 'inactivo' | 'archivado'
// En lugar de string

// ✅ Opcional solo cuando el valor puede ser ausente
interface Producto {
  id: number
  nombre: string
  descripcion?: string   // Puede no tener descripción
}

// ✅ Usar interfaces para objetos, type para uniones y aliases
interface Producto { ... }
type Categoria = 'cursos' | 'libros' | 'hardware'
\`\`\`

### Ejemplo: Tipos para un gestor de tareas

\`\`\`typescript
// Entidad principal
export interface Tarea {
  id: string
  titulo: string
  descripcion: string
  prioridad: 'baja' | 'media' | 'alta'
  completada: boolean
  creadaEn: Date
}

// Tipos auxiliares
export interface FiltroTareas {
  busqueda?: string
  prioridad?: Tarea['prioridad']
  soloActivas?: boolean
}

export interface EstadisticasTareas {
  total: number
  completadas: number
  porcentaje: number
}

// Tipos para formularios
export interface FormNuevaTarea {
  titulo: string
  descripcion: string
  prioridad: Tarea['prioridad']
}
\`\`\``,
    codeExample: `// types/tarea.ts — tipos completos del proyecto final

// ─── Tipos de dominio ─────────────────────────────────────────
export type Prioridad = 'baja' | 'media' | 'alta' | 'urgente'
export type EstadoTarea = 'pendiente' | 'en-progreso' | 'completada' | 'cancelada'

export interface Etiqueta {
  id: string
  nombre: string
  color: string  // Hex color: "#ff0000"
}

export interface Tarea {
  id: string
  titulo: string
  descripcion: string
  prioridad: Prioridad
  estado: EstadoTarea
  etiquetas: Etiqueta[]
  vencimiento: Date | null
  creadaEn: Date
  actualizadaEn: Date
}

// ─── Tipos auxiliares ─────────────────────────────────────────
export interface FiltrosTarea {
  busqueda?: string
  prioridad?: Prioridad
  estado?: EstadoTarea
  etiquetaId?: string
  soloVencidas?: boolean
}

export type OrdenamientoTarea = 'prioridad' | 'vencimiento' | 'creadaEn' | 'titulo'

export interface EstadisticasTareas {
  total: number
  completadas: number
  pendientes: number
  enProgreso: number
  vencidas: number
  porcentajeCompletado: number
}

// ─── Tipos de formulario ──────────────────────────────────────
export interface FormNuevaTarea {
  titulo: string
  descripcion: string
  prioridad: Prioridad
  vencimiento: string  // string porque viene del input date
  etiquetas: string[]  // IDs de etiquetas
}

export interface FormEditarTarea extends FormNuevaTarea {
  id: string
  estado: EstadoTarea
}

// ─── Tipo de resultado de operaciones ─────────────────────────
export interface ResultadoOperacion<T = void> {
  exito: boolean
  datos?: T
  error?: string
}`,
    keyPoints: [
      'Define los tipos antes de la lógica — son el contrato de tu aplicación',
      'Usa union types literales para estados y categorías limitadas',
      'Los tipos de formulario pueden diferir de los tipos de dominio (strings vs numbers, fechas)',
      'Crea tipos auxiliares para filtros, estadísticas y resultados de operaciones',
      'Un tipo ResultadoOperacion<T> reutilizable es útil para operaciones CRUD',
    ],
    exercise: {
      description:
        'Diseña los tipos principales para tu proyecto final. Debe incluir: 1) La entidad principal con al menos 6 propiedades incluyendo un union type. 2) Un tipo de filtros con propiedades opcionales. 3) Un tipo de estadísticas. 4) Un tipo de formulario para crear el elemento. Guárdalos en src/types/.',
      hint: 'La entidad principal es el dato central de tu app. El formulario suele tener las mismas propiedades pero fecha como string. Las estadísticas incluyen contadores.',
    },
    quiz: [
      {
        question: '¿Por qué es mejor diseñar los tipos antes de escribir la lógica?',
        options: [
          'Porque TypeScript lo requiere',
          'Porque los tipos definen el contrato de los datos — la lógica se construye sobre ese contrato',
          'Por convención del equipo',
          'Solo es importante en proyectos grandes',
        ],
        correctAnswer: 'Porque los tipos definen el contrato de los datos — la lógica se construye sobre ese contrato',
        correctFeedback: '¡Correcto! Los tipos son el diseño de los datos. Con los tipos definidos, la lógica es más fácil de escribir correctamente.',
        incorrectFeedback: 'Los tipos son el diseño. Cuando defines Tarea primero, cada función que la usa tiene un contrato claro de qué recibe y qué devuelve.',
      },
      {
        question: '¿Cómo se representan mejor los valores limitados como prioridades ("baja", "media", "alta")?',
        options: [
          'Como string genérico',
          'Como enum de TypeScript siempre',
          'Como union type literal: \'baja\' | \'media\' | \'alta\'',
          'Como array de strings constantes',
        ],
        correctAnswer: 'Como union type literal: \'baja\' | \'media\' | \'alta\'',
        correctFeedback: '¡Correcto! Un union type literal limita los valores posibles y TypeScript muestra error si asignas un valor no permitido.',
        incorrectFeedback: 'Los valores limitados se representan con union types literales — TypeScript verifica que solo uses los valores definidos.',
      },
      {
        question: '¿Cuándo debe una propiedad de una interface ser opcional (con ?)?',
        options: [
          'Siempre para mayor flexibilidad',
          'Cuando el valor puede estar ausente en algunos casos válidos',
          'Nunca — todas las propiedades deben ser requeridas',
          'Solo en formularios',
        ],
        correctAnswer: 'Cuando el valor puede estar ausente en algunos casos válidos',
        correctFeedback: '¡Correcto! La opcionalidad debe reflejar la realidad — si la propiedad siempre está, no la marques opcional.',
        incorrectFeedback: 'Una propiedad es opcional solo cuando puede estar ausente en un caso válido. Hacer todo opcional pierde las ventajas de TypeScript.',
      },
      {
        question: '¿Cuál es la convención de la lección para interface vs type?',
        options: [
          'Siempre usar type, nunca interface',
          'Siempre usar interface, nunca type',
          'Interface para objetos; type para uniones y aliases',
          'Son intercambiables — no importa cuál usar',
        ],
        correctAnswer: 'Interface para objetos; type para uniones y aliases',
        correctFeedback: '¡Correcto! Usar interface para objetos y type para uniones hace el código más legible y predecible.',
        incorrectFeedback: 'La convención recomendada: interface para objetos (Tarea, Categoria), type para uniones (Prioridad = "baja" | "alta") y aliases.',
      },
      {
        question: '¿Para qué sirve un tipo ResultadoOperacion<T>?',
        options: [
          'Para tipar solo los resultados de fetch',
          'Para representar operaciones que pueden tener éxito o fallar, retornando datos o error',
          'Para guardar resultados en localStorage',
          'Solo para operaciones asíncronas',
        ],
        correctAnswer: 'Para representar operaciones que pueden tener éxito o fallar, retornando datos o error',
        correctFeedback: '¡Correcto! Un tipo resultado hace explícito que la operación puede fallar — el llamador debe manejar ambos casos.',
        incorrectFeedback: 'ResultadoOperacion<T> es un tipo reutilizable para operaciones CRUD que pueden tener éxito (con datos) o fallar (con error).',
      },
    ],
  },
  {
    slug: 'proyecto-final-estructura-typescript',
    title: 'Crear estructura del proyecto',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 243,
    description:
      'Organiza carpetas, archivos, tipos, utilidades y módulos para un proyecto mantenible.',
    explanation: `## Crear estructura del proyecto

Una buena estructura de carpetas hace que el proyecto sea fácil de navegar, mantener y extender.

### Estructura recomendada para Vite + React + TypeScript

\`\`\`
src/
├── types/
│   ├── index.ts          ← Re-exporta todos los tipos
│   └── [entidad].ts      ← Tipos por entidad
├── lib/
│   ├── [entidad]-service.ts  ← Lógica de negocio
│   └── storage.ts        ← Persistencia (localStorage)
├── utils/
│   ├── format.ts         ← Funciones de formato
│   └── filtros.ts        ← Funciones de filtrado
├── hooks/                ← Solo si es React
│   └── use[Entidad].ts   ← Custom hooks
├── components/           ← Solo si es React
│   ├── [Entidad]Card.tsx
│   ├── Formulario[Entidad].tsx
│   └── ui/               ← Componentes genéricos
│       ├── Button.tsx
│       └── Badge.tsx
└── App.tsx / main.ts
\`\`\`

### Principios de organización

**1. Un archivo, una responsabilidad**

\`\`\`typescript
// ✅ tarea-service.ts — solo lógica de negocio de tareas
// ✅ storage.ts — solo persistencia
// ✅ format.ts — solo funciones de formato
// ❌ utils.ts con 50 funciones no relacionadas
\`\`\`

**2. Tipos cerca de donde se usan**

\`\`\`typescript
// Para tipos globales: src/types/
// Para tipos de un componente específico: definidos en el mismo archivo
\`\`\`

**3. Barrel files para exports limpios**

\`\`\`typescript
// src/types/index.ts
export type { Tarea, FiltrosTarea, EstadisticasTareas } from './tarea'
export type { Etiqueta } from './etiqueta'
\`\`\``,
    codeExample: `// Estructura y archivos de un proyecto bien organizado

// ─── src/types/index.ts ───────────────────────────────────────
export type { Tarea, FiltrosTarea, Prioridad, EstadoTarea } from './tarea'

// ─── src/lib/storage.ts ───────────────────────────────────────
import type { Tarea } from '../types'

const CLAVE_TAREAS = 'taskmaster-tareas'

export function cargarTareas(): Tarea[] {
  try {
    const datos = localStorage.getItem(CLAVE_TAREAS)
    if (!datos) return []
    return JSON.parse(datos) as Tarea[]
  } catch {
    return []
  }
}

export function guardarTareas(tareas: Tarea[]): void {
  localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas))
}

// ─── src/utils/format.ts ─────────────────────────────────────
export function formatearFecha(fecha: Date): string {
  return fecha.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatearPrioridad(prioridad: string): string {
  const mapa: Record<string, string> = {
    baja: '🟢 Baja',
    media: '🟡 Media',
    alta: '🔴 Alta',
    urgente: '🚨 Urgente',
  }
  return mapa[prioridad] ?? prioridad
}

// ─── src/lib/tarea-service.ts ─────────────────────────────────
import type { Tarea, FiltrosTarea } from '../types'
import { cargarTareas, guardarTareas } from './storage'

export function obtenerTareas(filtros?: FiltrosTarea): Tarea[] {
  const tareas = cargarTareas()
  if (!filtros) return tareas

  return tareas.filter((tarea) => {
    if (filtros.busqueda) {
      const termino = filtros.busqueda.toLowerCase()
      if (!tarea.titulo.toLowerCase().includes(termino)) return false
    }
    if (filtros.estado && tarea.estado !== filtros.estado) return false
    if (filtros.prioridad && tarea.prioridad !== filtros.prioridad) return false
    return true
  })
}

export function agregarTarea(nueva: Omit<Tarea, 'id' | 'creadaEn' | 'actualizadaEn'>): Tarea {
  const tareas = cargarTareas()
  const tarea: Tarea = {
    ...nueva,
    id: crypto.randomUUID(),
    creadaEn: new Date(),
    actualizadaEn: new Date(),
  }
  guardarTareas([...tareas, tarea])
  return tarea
}`,
    keyPoints: [
      'Organiza por función: types/, lib/, utils/, components/ — cada uno tiene una responsabilidad',
      'Barrel files (index.ts) simplifican las importaciones en otros archivos',
      'La lógica de negocio va en lib/, la persistencia en storage.ts, los tipos en types/',
      'Los custom hooks en React encapsulan la lógica de estado relacionada con una entidad',
      'Evita archivos utils.ts gigantes — separa por dominio o funcionalidad',
    ],
    exercise: {
      description:
        'Crea la estructura de carpetas de tu proyecto final y los archivos vacíos o con sus tipos. Debe incluir: src/types/ con al menos un archivo, src/lib/ con el service principal, src/utils/ con format.ts. Verifica que el proyecto compila con esta estructura.',
      hint: 'Crea los archivos aunque estén vacíos o con solo los tipos. La importación entre archivos valida que la estructura está correcta.',
    },
    quiz: [
      {
        question: '¿Qué archivo va en src/lib/ en este tipo de proyecto?',
        options: [
          'Los tipos e interfaces',
          'Los componentes de UI',
          'La lógica de negocio — operaciones CRUD, filtros, cálculos',
          'Las constantes de configuración',
        ],
        correctAnswer: 'La lógica de negocio — operaciones CRUD, filtros, cálculos',
        correctFeedback: '¡Correcto! lib/ es para la lógica de negocio: crear, leer, actualizar, eliminar, filtrar.',
        incorrectFeedback: 'La carpeta lib/ contiene la lógica de negocio: operaciones sobre los datos, filtros, cálculos. No UI ni tipos.',
      },
      {
        question: '¿Qué hace un "barrel file" como src/types/index.ts?',
        options: [
          'Guarda los datos de la aplicación',
          'Re-exporta tipos y funciones de otros archivos para simplificar las importaciones',
          'Configura TypeScript para el proyecto',
          'Carga los módulos de manera lazy',
        ],
        correctAnswer: 'Re-exporta tipos y funciones de otros archivos para simplificar las importaciones',
        correctFeedback: '¡Correcto! Un barrel file agrupa re-exports — en lugar de importar de rutas largas, importas de un solo lugar.',
        incorrectFeedback: 'Un barrel file (index.ts) re-exporta desde varios archivos: `export type { Tarea } from "./tarea"`. Simplifica las importaciones.',
      },
      {
        question: '¿Cuál es el problema principal de tener un archivo utils.ts con 50 funciones no relacionadas?',
        options: [
          'TypeScript no acepta archivos tan grandes',
          'Mezcla responsabilidades distintas, haciendo difícil encontrar y mantener funciones',
          'No se puede hacer tree shaking',
          'Solo afecta el rendimiento en producción',
        ],
        correctAnswer: 'Mezcla responsabilidades distintas, haciendo difícil encontrar y mantener funciones',
        correctFeedback: '¡Correcto! Un archivo gigante de utils mezcla responsabilidades — mejor separarlas en format.ts, filtros.ts, errores.ts.',
        incorrectFeedback: 'Un utils.ts gigante mezcla funciones no relacionadas. Es mejor separar por dominio: format.ts, filtros.ts, errores.ts.',
      },
      {
        question: '¿Cuál es la responsabilidad del archivo storage.ts en el proyecto?',
        options: [
          'Definir los tipos de datos',
          'Manejar la persistencia en localStorage — separada de la lógica de negocio',
          'Renderizar los componentes',
          'Configurar el servidor de desarrollo',
        ],
        correctAnswer: 'Manejar la persistencia en localStorage — separada de la lógica de negocio',
        correctFeedback: '¡Correcto! storage.ts encapsula el acceso a localStorage. La lógica de negocio en lib/ no debe acceder directamente al storage.',
        incorrectFeedback: 'storage.ts maneja solo la persistencia (leer/guardar en localStorage). La lógica de negocio se mantiene separada en lib/.',
      },
      {
        question: '¿Dónde van los custom hooks como useTareas.ts en la estructura del proyecto?',
        options: [
          'En src/lib/',
          'En src/utils/',
          'En src/hooks/',
          'En src/types/',
        ],
        correctAnswer: 'En src/hooks/',
        correctFeedback: '¡Correcto! La carpeta src/hooks/ es el lugar convencional para custom hooks en proyectos React.',
        incorrectFeedback: 'Los custom hooks van en src/hooks/. Siguen la convención use[Nombre].ts — por ejemplo useTareas.ts, useClima.ts.',
      },
    ],
  },
  {
    slug: 'proyecto-final-tipar-datos-estado',
    title: 'Tipar datos y estado',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 244,
    description:
      'Aprende a tipar datos principales, estados de aplicación, respuestas y valores opcionales.',
    explanation: `## Tipar datos y estado

En el proyecto final, todos los datos de la aplicación deben estar correctamente tipados, incluyendo el estado de la UI.

### Estado principal de la aplicación

\`\`\`tsx
// En React — todo el estado tipado
function App() {
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [filtros, setFiltros] = useState<FiltrosTarea>({})
  const [tareaSeleccionada, setTareaSeleccionada] = useState<Tarea | null>(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)
}
\`\`\`

### Estado de carga con tipos

\`\`\`typescript
type EstadoCarga = 'inactivo' | 'cargando' | 'exitoso' | 'error'

function useTareas() {
  const [estado, setEstado] = useState<EstadoCarga>('inactivo')
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null)

  async function cargar() {
    setEstado('cargando')
    try {
      const datos = await obtenerTareas()
      setTareas(datos)
      setEstado('exitoso')
    } catch (err) {
      setErrorMensaje(err instanceof Error ? err.message : 'Error desconocido')
      setEstado('error')
    }
  }

  return { estado, tareas, errorMensaje, cargar }
}
\`\`\`

### Datos calculados tipados

\`\`\`typescript
// Los datos derivados del estado también necesitan tipos
const estadisticas: EstadisticasTareas = {
  total: tareas.length,
  completadas: tareas.filter(t => t.estado === 'completada').length,
  pendientes: tareas.filter(t => t.estado === 'pendiente').length,
  porcentajeCompletado: tareas.length > 0
    ? Math.round((tareas.filter(t => t.estado === 'completada').length / tareas.length) * 100)
    : 0,
}
\`\`\``,
    codeExample: `// Estado completo tipado — hooks/useTareas.ts

import { useState, useCallback } from 'react'
import type { Tarea, FiltrosTarea, EstadisticasTareas } from '../types'
import { obtenerTareas, agregarTarea, actualizarTarea, eliminarTarea } from '../lib/tarea-service'

type EstadoCarga = 'inactivo' | 'cargando' | 'exitoso' | 'error'

interface EstadoTareas {
  items: Tarea[]
  cargando: EstadoCarga
  error: string | null
  seleccionada: Tarea | null
  filtros: FiltrosTarea
}

export function useTareas() {
  const [estado, setEstado] = useState<EstadoTareas>({
    items: [],
    cargando: 'inactivo',
    error: null,
    seleccionada: null,
    filtros: {},
  })

  // Cargar tareas
  const cargar = useCallback(async () => {
    setEstado((prev) => ({ ...prev, cargando: 'cargando', error: null }))
    try {
      const tareas = await obtenerTareas(estado.filtros)
      setEstado((prev) => ({ ...prev, items: tareas, cargando: 'exitoso' }))
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : 'Error al cargar'
      setEstado((prev) => ({ ...prev, cargando: 'error', error: mensaje }))
    }
  }, [estado.filtros])

  // Estadísticas calculadas
  const estadisticas: EstadisticasTareas = {
    total: estado.items.length,
    completadas: estado.items.filter((t) => t.estado === 'completada').length,
    pendientes: estado.items.filter((t) => t.estado === 'pendiente').length,
    enProgreso: estado.items.filter((t) => t.estado === 'en-progreso').length,
    vencidas: estado.items.filter((t) => {
      if (!t.vencimiento || t.estado === 'completada') return false
      return new Date(t.vencimiento) < new Date()
    }).length,
    porcentajeCompletado: estado.items.length > 0
      ? Math.round((estado.items.filter((t) => t.estado === 'completada').length / estado.items.length) * 100)
      : 0,
  }

  const actualizarFiltros = (nuevosFiltros: Partial<FiltrosTarea>) => {
    setEstado((prev) => ({
      ...prev,
      filtros: { ...prev.filtros, ...nuevosFiltros },
    }))
  }

  return {
    tareas: estado.items,
    cargando: estado.cargando,
    error: estado.error,
    seleccionada: estado.seleccionada,
    estadisticas,
    cargar,
    actualizarFiltros,
  }
}`,
    keyPoints: [
      'Todo el estado de la aplicación debe tener tipos explícitos — useState<Tipo>',
      'Un union type para el estado de carga evita estados inválidos',
      'Las estadísticas calculadas también deben tener un tipo de retorno definido',
      'Los custom hooks encapsulan el estado y las operaciones relacionadas',
      'Usa Partial<FiltrosTarea> para actualizar solo algunas propiedades del filtro',
    ],
    exercise: {
      description:
        'Implementa el estado principal de tu proyecto. Si usas React: crea un custom hook con el estado tipado de la entidad principal, un estado de carga con union type, un estado de error (string | null), y las estadísticas calculadas. Si usas TypeScript vanilla: implementa un objeto de estado tipado con funciones de actualización.',
      hint: 'El hook retorna { items, cargando, error, estadisticas, cargar, actualizar }. Usa useCallback para las funciones que van como dependencias de useEffect.',
    },
    quiz: [
      {
        question: '¿Por qué es útil un union type "inactivo" | "cargando" | "exitoso" | "error" para el estado de carga?',
        options: [
          'Solo por convención',
          'Garantiza que el estado de carga solo puede tener valores válidos y previene estados imposibles',
          'TypeScript lo requiere para fetch',
          'Hace el código más corto',
        ],
        correctAnswer: 'Garantiza que el estado de carga solo puede tener valores válidos y previene estados imposibles',
        correctFeedback: '¡Correcto! Un union type limita los valores posibles — TypeScript muestra error si asignas un valor no válido.',
        incorrectFeedback: 'Un union type para estados de carga hace imposible asignar valores no válidos — TypeScript lo verifica.',
      },
      {
        question: '¿Cómo se tipa correctamente un useState que puede contener una Tarea seleccionada o nada?',
        options: [
          'useState<Tarea>({})',
          'useState<Tarea | null>(null)',
          'useState<Tarea | undefined>()',
          'useState(null) — TypeScript lo infiere',
        ],
        correctAnswer: 'useState<Tarea | null>(null)',
        correctFeedback: '¡Correcto! Tarea | null es el patrón correcto — null indica explícitamente "no hay tarea seleccionada".',
        incorrectFeedback: 'useState<Tarea | null>(null) es el patrón correcto para un valor que puede estar presente o ausente.',
      },
      {
        question: '¿Qué tipo se usa para el estado de mensajes de error en la UI?',
        options: [
          'string',
          'Error',
          'string | null',
          'boolean',
        ],
        correctAnswer: 'string | null',
        correctFeedback: '¡Correcto! string | null para errores: null significa "sin error", un string contiene el mensaje a mostrar.',
        incorrectFeedback: 'El tipo correcto para errores en UI es string | null — null significa que no hay error, un string es el mensaje.',
      },
      {
        question: '¿Para qué sirve Partial<FiltrosTarea> al actualizar los filtros?',
        options: [
          'Para hacer todos los filtros opcionales permanentemente',
          'Para actualizar solo algunas propiedades sin reemplazar el objeto completo',
          'Para validar que los filtros son correctos',
          'Para convertir los filtros a string',
        ],
        correctAnswer: 'Para actualizar solo algunas propiedades sin reemplazar el objeto completo',
        correctFeedback: '¡Correcto! Partial<FiltrosTarea> permite pasar solo los filtros que cambian — el spread operator combina el estado anterior con los nuevos.',
        incorrectFeedback: 'Partial<FiltrosTarea> hace todas las propiedades opcionales temporalmente, permitiendo actualizar solo los filtros que cambiaron.',
      },
      {
        question: '¿Para qué se usa useCallback en un custom hook de datos?',
        options: [
          'Para hacer la función asíncrona',
          'Para que la función solo se ejecute una vez',
          'Para estabilizar la referencia de la función cuando se usa como dependencia de useEffect',
          'Para tipar automáticamente los parámetros',
        ],
        correctAnswer: 'Para estabilizar la referencia de la función cuando se usa como dependencia de useEffect',
        correctFeedback: '¡Correcto! useCallback memoiza la función — evita que useEffect se dispare infinitamente cuando la función está en su array de dependencias.',
        incorrectFeedback: 'useCallback estabiliza la referencia de la función. Sin él, una función definida en el componente crea una nueva referencia en cada render.',
      },
    ],
  },
  {
    slug: 'proyecto-final-funciones-tipadas',
    title: 'Crear funciones reutilizables tipadas',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 245,
    description:
      'Crea funciones reutilizables con tipos claros, retornos seguros y validaciones básicas.',
    explanation: `## Crear funciones reutilizables tipadas

Las funciones bien tipadas son el corazón de un proyecto TypeScript de calidad. Deben tener responsabilidades claras, tipos explícitos y validaciones apropiadas.

### Funciones de servicio CRUD

\`\`\`typescript
// Crear — recibe datos sin ID y devuelve el objeto completo
function crearTarea(datos: Omit<Tarea, 'id' | 'creadaEn'>): Tarea {
  return {
    ...datos,
    id: crypto.randomUUID(),
    creadaEn: new Date(),
  }
}

// Leer — puede retornar null si no se encuentra
function obtenerPorId(tareas: Tarea[], id: string): Tarea | null {
  return tareas.find((t) => t.id === id) ?? null
}

// Actualizar — recibe el ID y los campos a actualizar
function actualizarTarea(
  tareas: Tarea[],
  id: string,
  cambios: Partial<Omit<Tarea, 'id' | 'creadaEn'>>
): Tarea[] {
  return tareas.map((t) =>
    t.id === id ? { ...t, ...cambios, actualizadaEn: new Date() } : t
  )
}

// Eliminar
function eliminarTarea(tareas: Tarea[], id: string): Tarea[] {
  return tareas.filter((t) => t.id !== id)
}
\`\`\`

### Funciones de filtrado tipadas

\`\`\`typescript
function filtrarTareas(tareas: Tarea[], filtros: FiltrosTarea): Tarea[] {
  return tareas.filter((tarea) => {
    if (filtros.estado && tarea.estado !== filtros.estado) return false
    if (filtros.prioridad && tarea.prioridad !== filtros.prioridad) return false
    if (filtros.busqueda) {
      const t = filtros.busqueda.toLowerCase()
      if (!tarea.titulo.toLowerCase().includes(t)) return false
    }
    return true
  })
}
\`\`\`

### Validaciones con tipos

\`\`\`typescript
interface ErroresFormulario {
  titulo?: string
  descripcion?: string
}

function validarFormulario(form: FormNuevaTarea): ErroresFormulario {
  const errores: ErroresFormulario = {}
  if (!form.titulo.trim()) errores.titulo = 'El título es requerido'
  if (form.titulo.length > 100) errores.titulo = 'Máximo 100 caracteres'
  return errores
}

function esFormularioValido(errores: ErroresFormulario): boolean {
  return Object.keys(errores).length === 0
}
\`\`\``,
    codeExample: `// lib/tarea-service.ts — funciones tipadas completas

import type {
  Tarea,
  FiltrosTarea,
  OrdenamientoTarea,
  FormNuevaTarea,
  EstadisticasTareas,
} from '../types'
import { cargarTareas, guardarTareas } from './storage'

// ─── CRUD ─────────────────────────────────────────────────────

export function crearTarea(form: FormNuevaTarea): Tarea {
  const tareas = cargarTareas()
  const nueva: Tarea = {
    id: crypto.randomUUID(),
    titulo: form.titulo.trim(),
    descripcion: form.descripcion.trim(),
    prioridad: form.prioridad,
    estado: 'pendiente',
    etiquetas: [],
    vencimiento: form.vencimiento ? new Date(form.vencimiento) : null,
    creadaEn: new Date(),
    actualizadaEn: new Date(),
  }
  guardarTareas([...tareas, nueva])
  return nueva
}

export function actualizarEstado(id: string, estado: Tarea['estado']): boolean {
  const tareas = cargarTareas()
  const indice = tareas.findIndex((t) => t.id === id)
  if (indice === -1) return false

  tareas[indice] = {
    ...tareas[indice],
    estado,
    actualizadaEn: new Date(),
  }
  guardarTareas(tareas)
  return true
}

export function eliminarTarea(id: string): boolean {
  const tareas = cargarTareas()
  const nuevas = tareas.filter((t) => t.id !== id)
  if (nuevas.length === tareas.length) return false  // No se encontró
  guardarTareas(nuevas)
  return true
}

// ─── Filtrado y ordenamiento ───────────────────────────────────

export function obtenerTareasFiltradas(
  filtros: FiltrosTarea,
  ordenamiento: OrdenamientoTarea = 'creadaEn'
): Tarea[] {
  let tareas = cargarTareas()

  if (filtros.estado) tareas = tareas.filter((t) => t.estado === filtros.estado)
  if (filtros.prioridad) tareas = tareas.filter((t) => t.prioridad === filtros.prioridad)
  if (filtros.busqueda) {
    const b = filtros.busqueda.toLowerCase()
    tareas = tareas.filter((t) => t.titulo.toLowerCase().includes(b))
  }

  const ordenesPrioridad: Record<Tarea['prioridad'], number> = {
    urgente: 4, alta: 3, media: 2, baja: 1,
  }

  return tareas.sort((a, b) => {
    if (ordenamiento === 'prioridad') {
      return ordenesPrioridad[b.prioridad] - ordenesPrioridad[a.prioridad]
    }
    if (ordenamiento === 'titulo') {
      return a.titulo.localeCompare(b.titulo)
    }
    return new Date(b.creadaEn).getTime() - new Date(a.creadaEn).getTime()
  })
}

// ─── Estadísticas ─────────────────────────────────────────────

export function calcularEstadisticas(): EstadisticasTareas {
  const tareas = cargarTareas()
  const completadas = tareas.filter((t) => t.estado === 'completada').length

  return {
    total: tareas.length,
    completadas,
    pendientes: tareas.filter((t) => t.estado === 'pendiente').length,
    enProgreso: tareas.filter((t) => t.estado === 'en-progreso').length,
    vencidas: tareas.filter((t) => {
      if (!t.vencimiento || t.estado === 'completada') return false
      return new Date(t.vencimiento) < new Date()
    }).length,
    porcentajeCompletado: tareas.length > 0
      ? Math.round((completadas / tareas.length) * 100)
      : 0,
  }
}`,
    keyPoints: [
      'Usa Omit<Tarea, "id" | "creadaEn"> para el tipo de datos al crear — el ID se genera internamente',
      'Las funciones de actualización retornan boolean indicando si la operación fue exitosa',
      'Un objeto Record<Prioridad, number> para ordenamiento es más elegante que if/else en cadena',
      'Separa las funciones de filtrado de las de CRUD — diferentes responsabilidades',
      'Las funciones de estadísticas son cálculos derivados — deben ser puras y retornar un tipo definido',
    ],
    exercise: {
      description:
        'Implementa las funciones CRUD principales de tu proyecto con TypeScript. Deben incluir: crear (con Omit para excluir campos auto-generados), obtener por ID (retorna null si no existe), actualizar (retorna boolean), y eliminar (retorna boolean). Añade una función de filtrado con al menos 2 criterios.',
      hint: 'Usa cargarTareas/guardarTareas del storage. El ID puedes generarlo con crypto.randomUUID() o Date.now().toString().',
    },
    quiz: [
      {
        question: '¿Por qué se usa Omit<Tarea, "id" | "creadaEn"> en el tipo del parámetro de crearTarea?',
        options: [
          'Para hacer la función más corta',
          'Porque el ID y la fecha de creación se generan internamente — el llamador no debe pasarlos',
          'Porque TypeScript no acepta id en funciones',
          'Por convención de React',
        ],
        correctAnswer: 'Porque el ID y la fecha de creación se generan internamente — el llamador no debe pasarlos',
        correctFeedback: '¡Correcto! Omit excluye campos que la función genera internamente — hace la API más clara y segura.',
        incorrectFeedback: 'Omit<Tarea, "id"> excluye el ID del tipo — el ID lo genera la función. El llamador no puede ni debe pasarlo.',
      },
      {
        question: '¿Qué devuelve una función de actualización como actualizarEstado(id, estado): boolean?',
        options: [
          'La tarea actualizada',
          'true si se encontró y actualizó, false si no se encontró el ID',
          'El índice de la tarea en el array',
          'Siempre true',
        ],
        correctAnswer: 'true si se encontró y actualizó, false si no se encontró el ID',
        correctFeedback: '¡Correcto! Retornar boolean permite al llamador saber si la operación tuvo efecto sin lanzar excepciones.',
        incorrectFeedback: 'Una función de actualización que retorna boolean indica al llamador si la tarea existía — true: se actualizó, false: no se encontró.',
      },
      {
        question: '¿Qué ventaja tiene usar Tarea[\'estado\'] como tipo en lugar de repetir el union type?',
        options: [
          'Es más corto de escribir siempre',
          'Si el tipo de Tarea cambia, el tipo del parámetro se actualiza automáticamente',
          'Mejora el rendimiento en tiempo de ejecución',
          'Solo funciona con interfaces, no con types',
        ],
        correctAnswer: 'Si el tipo de Tarea cambia, el tipo del parámetro se actualiza automáticamente',
        correctFeedback: '¡Correcto! Tarea["estado"] hace referencia al tipo exacto de la propiedad — si cambias la interface, el parámetro se actualiza solo.',
        incorrectFeedback: 'Tarea["estado"] referencia el tipo de la propiedad en la interface. Si cambias la interface, todos los lugares que usan Tarea["estado"] se actualizan.',
      },
      {
        question: '¿Para qué sirve un Record<Prioridad, number> en la función de ordenamiento?',
        options: [
          'Para guardar las tareas ordenadas',
          'Para mapear cada prioridad a un número y compararlas matemáticamente',
          'Para validar que la prioridad es válida',
          'Para convertir prioridades a string',
        ],
        correctAnswer: 'Para mapear cada prioridad a un número y compararlas matemáticamente',
        correctFeedback: '¡Correcto! Record<Prioridad, number> asigna urgente:4, alta:3, media:2, baja:1 — permite ordenar con resta en lugar de if/else.',
        incorrectFeedback: 'Record<Prioridad, number> mapea cada prioridad a un número (urgente:4, alta:3...) para ordenar con resta en el comparador.',
      },
      {
        question: '¿Cómo debe comportarse filtrarTareas cuando no se pasan filtros?',
        options: [
          'Lanzar un error porque los filtros son requeridos',
          'Retornar un array vacío',
          'Retornar todas las tareas sin filtrar',
          'Retornar solo las tareas completadas por defecto',
        ],
        correctAnswer: 'Retornar todas las tareas sin filtrar',
        correctFeedback: '¡Correcto! Sin filtros, la función retorna todo — los filtros son opcionales y solo se aplican si tienen valor.',
        incorrectFeedback: 'Sin filtros, la función debe retornar todas las tareas. Cada condición del filtro solo se evalúa si el campo tiene un valor.',
      },
    ],
  },
  {
    slug: 'proyecto-final-api-tipeda',
    title: 'Consumir API tipada',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 246,
    description:
      'Integra una API externa usando tipos, validaciones, loading states y manejo de errores.',
    explanation: `## Consumir API tipada en el proyecto final

Si tu proyecto consume una API externa, TypeScript te ayuda a manejar los datos de forma segura.

### El flujo completo

\`\`\`typescript
// 1. Definir el tipo de la respuesta
interface RespuestaApiClima {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: {
    description: string
  }[]
}

// 2. Función tipada para consumir la API
async function obtenerClima(ciudad: string): Promise<RespuestaApiClima> {
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${ciudad}&appid=KEY\`
  const respuesta = await fetch(url)

  if (!respuesta.ok) {
    throw new Error(\`Error \${respuesta.status}: no se pudo obtener el clima\`)
  }

  return respuesta.json() as Promise<RespuestaApiClima>
}

// 3. Transformar a tipos internos
interface Clima {
  ciudad: string
  temperatura: number
  humedad: number
  descripcion: string
}

function transformarClima(datos: RespuestaApiClima): Clima {
  return {
    ciudad: datos.name,
    temperatura: Math.round(datos.main.temp - 273.15),  // Kelvin a Celsius
    humedad: datos.main.humidity,
    descripcion: datos.weather[0]?.description ?? 'Sin datos',
  }
}
\`\`\`

### Manejo de errores en fetch

\`\`\`typescript
type ResultadoFetch<T> =
  | { exito: true; datos: T }
  | { exito: false; error: string }

async function fetchSeguro<T>(url: string): Promise<ResultadoFetch<T>> {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(\`Error HTTP \${res.status}\`)
    const datos = await res.json() as T
    return { exito: true, datos }
  } catch (err) {
    const mensaje = err instanceof Error ? err.message : 'Error desconocido'
    return { exito: false, error: mensaje }
  }
}
\`\`\``,
    codeExample: `// lib/api.ts — consumo de API tipado para el proyecto final

// ─── Tipos de la API externa ──────────────────────────────────
// (basado en jsonplaceholder.typicode.com como ejemplo)

interface ApiTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

// ─── Tipo interno del proyecto ────────────────────────────────
interface TareaImportada {
  id: string
  titulo: string
  completada: boolean
  fuente: 'api'
}

// ─── Función de fetch tipada ──────────────────────────────────
async function fetchConTipo<T>(url: string): Promise<T> {
  const respuesta = await fetch(url)
  if (!respuesta.ok) {
    throw new Error(\`Error \${respuesta.status}: \${respuesta.statusText}\`)
  }
  return respuesta.json() as Promise<T>
}

// ─── Función de transformación ────────────────────────────────
function transformarApiTodo(apiTodo: ApiTodo): TareaImportada {
  return {
    id: \`api-\${apiTodo.id}\`,
    titulo: apiTodo.title,
    completada: apiTodo.completed,
    fuente: 'api',
  }
}

// ─── Función principal de importación ────────────────────────
export async function importarTareasDesdeApi(
  limite: number = 5
): Promise<{ tareas: TareaImportada[]; error: string | null }> {
  try {
    const url = \`https://jsonplaceholder.typicode.com/todos?_limit=\${limite}\`
    const datos = await fetchConTipo<ApiTodo[]>(url)

    const tareas = datos.map(transformarApiTodo)
    return { tareas, error: null }
  } catch (err) {
    const mensaje = err instanceof Error ? err.message : 'Error al importar'
    return { tareas: [], error: mensaje }
  }
}

// ─── Uso en React ─────────────────────────────────────────────
// import { useState, useEffect } from 'react'
// import { importarTareasDesdeApi } from '../lib/api'
//
// function ImportarTareas() {
//   const [cargando, setCargando] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//
//   async function handleImportar() {
//     setCargando(true)
//     const { tareas, error } = await importarTareasDesdeApi(10)
//     if (error) setError(error)
//     setCargando(false)
//   }
//
//   return <button onClick={handleImportar}>Importar tareas</button>
// }`,
    keyPoints: [
      'Define el tipo de la respuesta de la API externa antes de consumirla',
      'Crea una función de transformación para convertir del tipo de la API a tu tipo interno',
      'Siempre verifica respuesta.ok antes de parsear el JSON',
      'Una función wrapper fetchConTipo<T> reutilizable simplifica el código',
      'Retornar { datos, error } en lugar de lanzar excepciones facilita el manejo en la UI',
    ],
    exercise: {
      description:
        'Si tu proyecto consume una API: implementa la función de fetch con el tipo de respuesta correcto, una función de transformación al tipo interno, y el manejo de errores. Si no consume API: crea una función que simule una API con datos mock y retorne Promise<{ datos: TuTipo[], error: string | null }>.',
      hint: 'La estructura { datos, error } permite que el componente maneje ambos casos sin try/catch en cada llamada.',
    },
    quiz: [
      {
        question: '¿Por qué es útil tener una función de transformación separada para los datos de la API?',
        options: [
          'Por convención — no tiene efecto real',
          'Porque permite convertir el tipo de la API al tipo interno del proyecto sin mezclarlo con el fetch',
          'Porque TypeScript lo requiere para datos externos',
          'Solo es útil en proyectos grandes',
        ],
        correctAnswer: 'Porque permite convertir el tipo de la API al tipo interno del proyecto sin mezclarlo con el fetch',
        correctFeedback: '¡Correcto! La transformación es una responsabilidad separada. También hace que los tests sean más fáciles.',
        incorrectFeedback: 'Separar la transformación del fetch tiene una responsabilidad clara y facilita el testing — puedes probar la transformación con datos mock.',
      },
      {
        question: '¿Por qué se usa `respuesta.json() as Promise<T>` en lugar de simplemente `respuesta.json()`?',
        options: [
          'Porque json() no es una función estándar',
          'Porque fetch retorna Promise<any> — el cast le dice a TypeScript qué tipo esperar',
          'Para mejorar el rendimiento del parsing',
          'Porque TypeScript requiere siempre un cast explícito',
        ],
        correctAnswer: 'Porque fetch retorna Promise<any> — el cast le dice a TypeScript qué tipo esperar',
        correctFeedback: '¡Correcto! fetch().json() retorna Promise<any>. El cast `as Promise<T>` le indica a TypeScript el tipo esperado de la respuesta.',
        incorrectFeedback: 'json() retorna Promise<any> por defecto. El cast as Promise<T> le comunica a TypeScript el tipo esperado — sin cambiar el comportamiento en ejecución.',
      },
      {
        question: '¿Qué hace la función genérica fetchConTipo<T>(url: string): Promise<T>?',
        options: [
          'Filtra los datos del servidor antes de retornarlos',
          'Envuelve fetch con un tipo genérico para que el llamador especifique el tipo de respuesta esperado',
          'Cachea automáticamente las respuestas',
          'Solo funciona con APIs de lista (array)',
        ],
        correctAnswer: 'Envuelve fetch con un tipo genérico para que el llamador especifique el tipo de respuesta esperado',
        correctFeedback: '¡Correcto! fetchConTipo<ApiTodo[]>(url) es una función reutilizable — el tipo T define qué estructura esperar de la respuesta.',
        incorrectFeedback: 'fetchConTipo<T> es una envoltura genérica para fetch — el llamador pasa T y obtiene una respuesta tipada sin repetir el manejo de errores.',
      },
      {
        question: '¿Qué ventaja tiene retornar { tareas, error } en lugar de lanzar excepciones?',
        options: [
          'Es más rápido en tiempo de ejecución',
          'El llamador puede manejar éxito y error sin try/catch — el tipo hace explícito que puede fallar',
          'TypeScript no permite throw en funciones async',
          'Solo funciona con arrays',
        ],
        correctAnswer: 'El llamador puede manejar éxito y error sin try/catch — el tipo hace explícito que puede fallar',
        correctFeedback: '¡Correcto! La estructura { datos, error } implementa el Result pattern — el componente maneja ambos casos con un if simple.',
        incorrectFeedback: 'Retornar { datos, error } implementa el Result pattern. El llamador usa if (error) para manejar el fallo sin try/catch propio.',
      },
      {
        question: '¿Por qué se define el tipo de la API (ApiTodo) por separado del tipo interno (TareaImportada)?',
        options: [
          'Solo por convención de nombres',
          'Porque la API puede cambiar su formato — el tipo interno permanece estable y la transformación adapta',
          'TypeScript no permite usar el mismo tipo en dos lugares',
          'Para hacer el código más largo y detallado',
        ],
        correctAnswer: 'Porque la API puede cambiar su formato — el tipo interno permanece estable y la transformación adapta',
        correctFeedback: '¡Correcto! Separar el tipo de la API del tipo interno protege el resto de la aplicación de cambios externos.',
        incorrectFeedback: 'El tipo de la API y el tipo interno son distintos. Si la API cambia, solo actualizas ApiTodo y la función de transformación.',
      },
    ],
  },
  {
    slug: 'proyecto-final-errores-profesional',
    title: 'Manejar errores profesionalmente',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 247,
    description:
      'Agrega manejo de errores usando unknown, narrowing, Result pattern simple o mensajes seguros para usuario.',
    explanation: `## Manejar errores profesionalmente

El manejo de errores es lo que diferencia un prototipo de una aplicación real. En TypeScript, el error en catch es \`unknown\` y debes manejarlo explícitamente.

### El error en catch es unknown

\`\`\`typescript
try {
  const datos = await fetchDatos()
} catch (error) {
  // Con strict activado, error es unknown — debes verificar el tipo
  console.log(error.message)  // Error: Object is of type 'unknown'

  // ✅ Narrowing antes de usar
  if (error instanceof Error) {
    console.log(error.message)  // ✅
  } else {
    console.log('Error desconocido')
  }
}
\`\`\`

### Helper para obtener mensaje de error

\`\`\`typescript
// utils/errores.ts
export function obtenerMensajeError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Ha ocurrido un error inesperado'
}

// Uso
try { ... } catch (error) {
  setMensajeError(obtenerMensajeError(error))
}
\`\`\`

### Result pattern simple

\`\`\`typescript
type Resultado<T> =
  | { exito: true; valor: T }
  | { exito: false; error: string }

async function operacion(): Promise<Resultado<Tarea>> {
  try {
    const tarea = await crearTarea(datos)
    return { exito: true, valor: tarea }
  } catch (err) {
    return { exito: false, error: obtenerMensajeError(err) }
  }
}

// Uso seguro y claro
const resultado = await operacion()
if (resultado.exito) {
  console.log(resultado.valor.titulo)
} else {
  console.error(resultado.error)
}
\`\`\`

### Mensajes de error seguros para el usuario

Los mensajes de error internos (stack traces, nombres de tablas) no deben mostrarse al usuario:

\`\`\`typescript
// ❌ Mostrar error interno al usuario
setError(error.message)  // Puede ser "PostgreSQL relation not found"

// ✅ Mensaje amigable para el usuario
setError('No se pudieron cargar las tareas. Intenta de nuevo.')
// Y loguear el error real en consola o servicio de errores
console.error('Error interno:', error)
\`\`\``,
    codeExample: `// utils/errores.ts y uso en el proyecto

// ─── Helper universal para mensajes de error ──────────────────
export function obtenerMensajeError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Ha ocurrido un error inesperado'
}

// ─── Tipo Result para operaciones ────────────────────────────
export type Resultado<T, E = string> =
  | { exito: true; datos: T }
  | { exito: false; error: E }

// ─── Operaciones con Result pattern ──────────────────────────
import type { Tarea, FormNuevaTarea } from '../types'
import { obtenerMensajeError, type Resultado } from '../utils/errores'

export async function crearTareaSegura(
  form: FormNuevaTarea
): Promise<Resultado<Tarea>> {
  try {
    if (!form.titulo.trim()) {
      return { exito: false, error: 'El título no puede estar vacío' }
    }
    const tarea = crearTarea(form)
    return { exito: true, datos: tarea }
  } catch (err) {
    console.error('Error al crear tarea:', err)
    return { exito: false, error: obtenerMensajeError(err) }
  }
}

// ─── Uso en React ─────────────────────────────────────────────
import { useState } from 'react'
import { crearTareaSegura } from '../lib/tarea-service'
import type { FormNuevaTarea } from '../types'

function FormularioTarea() {
  const [titulo, setTitulo] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [exito, setExito] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const resultado = await crearTareaSegura({
      titulo,
      descripcion: '',
      prioridad: 'media',
      vencimiento: '',
      etiquetas: [],
    })

    if (resultado.exito) {
      setExito(true)
      setTitulo('')
    } else {
      setError(resultado.error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título de la tarea"
      />
      {error && <p className="error">{error}</p>}
      {exito && <p className="exito">¡Tarea creada!</p>}
      <button type="submit">Crear tarea</button>
    </form>
  )
}

function crearTarea(form: FormNuevaTarea): Tarea {
  return {
    id: crypto.randomUUID(),
    titulo: form.titulo.trim(),
    descripcion: form.descripcion,
    prioridad: form.prioridad,
    estado: 'pendiente',
    etiquetas: [],
    vencimiento: null,
    creadaEn: new Date(),
    actualizadaEn: new Date(),
  }
}`,
    keyPoints: [
      'Con strict activado, el error en catch es unknown — debes hacer narrowing antes de usarlo',
      'Un helper obtenerMensajeError(error: unknown): string centraliza la extracción del mensaje',
      'El Result pattern con union type hace explícito el éxito o fallo sin excepciones',
      'Los mensajes internos de error no deben mostrarse al usuario — muestra mensajes amigables',
      'Loguea el error real en consola aunque muestres un mensaje genérico al usuario',
    ],
    exercise: {
      description:
        'Implementa el manejo de errores en tu proyecto: 1) Crea la función obtenerMensajeError(error: unknown): string. 2) Aplica el Result pattern a una de tus operaciones principales. 3) En el componente UI, muestra un mensaje de error amigable al usuario cuando la operación falla.',
      hint: 'obtenerMensajeError verifica instanceof Error y typeof string. El Result pattern hace que no necesites try/catch en el componente.',
    },
    quiz: [
      {
        question: 'Con strict activado en TypeScript, ¿qué tipo tiene la variable "error" dentro de un bloque catch?',
        options: ['any', 'Error', 'string', 'unknown'],
        correctAnswer: 'unknown',
        correctFeedback: '¡Correcto! Con strict, el error en catch es unknown y debes verificar el tipo antes de acceder a .message.',
        incorrectFeedback: 'Con strict activado, el error en catch es "unknown". Debes usar instanceof Error u otros guards antes de acceder a sus propiedades.',
      },
      {
        question: '¿Qué verifica `if (error instanceof Error)` en el helper obtenerMensajeError?',
        options: [
          'Que el error tiene un código de estado HTTP',
          'Que el valor capturado es un objeto Error con la propiedad .message',
          'Que el error es de tipo string',
          'Que el error fue lanzado de forma asíncrona',
        ],
        correctAnswer: 'Que el valor capturado es un objeto Error con la propiedad .message',
        correctFeedback: '¡Correcto! instanceof Error verifica que el valor es una instancia de Error — solo entonces es seguro acceder a .message.',
        incorrectFeedback: 'instanceof Error comprueba que el error es un objeto Error. Permite acceder a .message con seguridad después del narrowing.',
      },
      {
        question: '¿Por qué no se debe mostrar directamente el mensaje interno del error al usuario?',
        options: [
          'Porque TypeScript lo prohíbe',
          'Porque puede revelar detalles de implementación, estructura de base de datos u otros datos sensibles',
          'Porque los mensajes internos siempre están en inglés',
          'Solo aplica a errores de red',
        ],
        correctAnswer: 'Porque puede revelar detalles de implementación, estructura de base de datos u otros datos sensibles',
        correctFeedback: '¡Correcto! Mensajes como "PostgreSQL relation not found" revelan la implementación. Muestra mensajes amigables al usuario.',
        incorrectFeedback: 'Los mensajes internos pueden exponer detalles técnicos sensibles. Muestra mensajes amigables al usuario y registra el error real internamente.',
      },
      {
        question: '¿Qué ventaja tiene el Result pattern (Resultado<T>) sobre lanzar excepciones?',
        options: [
          'Es más rápido en tiempo de ejecución',
          'El tipo de retorno hace explícito que la operación puede fallar — el llamador debe manejarlo',
          'TypeScript optimiza mejor el código con Result',
          'Las excepciones no funcionan en funciones async',
        ],
        correctAnswer: 'El tipo de retorno hace explícito que la operación puede fallar — el llamador debe manejarlo',
        correctFeedback: '¡Correcto! Con Result<T>, el tipo de retorno documenta que hay dos casos posibles — el llamador no puede olvidarse de manejar el error.',
        incorrectFeedback: 'El Result pattern usa el sistema de tipos para forzar el manejo de errores — si el tipo de retorno es Resultado<T>, el llamador sabe que puede fallar.',
      },
      {
        question: '¿Qué verifica `typeof error === "string"` en el helper de errores?',
        options: [
          'Que el error es un Error estándar',
          'Que se lanzó un string directamente en lugar de un objeto Error',
          'Que el error tiene un mensaje en español',
          'Que el error proviene de un fetch',
        ],
        correctAnswer: 'Que se lanzó un string directamente en lugar de un objeto Error',
        correctFeedback: '¡Correcto! En JavaScript es posible hacer `throw "texto"` — el helper detecta este caso con typeof para extraer el mensaje.',
        incorrectFeedback: 'Cualquier valor puede lanzarse con throw, incluyendo strings. `typeof error === "string"` captura el caso `throw "mensaje de error"`.',
      },
    ],
  },
  {
    slug: 'proyecto-final-pruebas-basicas',
    title: 'Agregar pruebas básicas',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 248,
    description:
      'Agrega pruebas para funciones importantes del proyecto usando Vitest y TypeScript.',
    explanation: `## Agregar pruebas básicas al proyecto final

No necesitas cobertura del 100%, pero sí pruebas para la lógica más crítica. Los reclutadores valoran que el proyecto tenga tests.

### ¿Qué probar en el proyecto final?

Prioriza las funciones que:
- Calculan estadísticas (porcentajes, totales, conteos)
- Filtran o transforman datos
- Validan entradas de usuario
- Tienen lógica de negocio compleja

### Configurar Vitest en Vite + React

\`\`\`bash
npm install -D vitest @vitest/ui
\`\`\`

\`\`\`typescript
// vite.config.ts — añadir configuración de test
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
\`\`\`

### Estructura de tests recomendada

\`\`\`
src/
└── tests/
    ├── tarea-service.test.ts    ← Tests de lógica de negocio
    ├── filtros.test.ts          ← Tests de funciones de filtrado
    └── validaciones.test.ts     ← Tests de validaciones
\`\`\`

### Qué NO necesitas probar

- Componentes de UI en detalle (eso requiere testing libraries más complejas)
- Funciones de fetch (son difíciles de probar sin mocking avanzado)
- Funciones triviales de una línea

Enfócate en la **lógica de negocio pura** — las funciones que calculan, filtran y transforman.`,
    codeExample: `// tests/tarea-service.test.ts — pruebas del proyecto final

import { describe, it, expect, beforeEach } from 'vitest'
import type { Tarea } from '../types'

// ─── Datos de prueba ──────────────────────────────────────────
const TAREA_PENDIENTE: Tarea = {
  id: '1',
  titulo: 'Aprender TypeScript',
  descripcion: 'Completar el curso',
  prioridad: 'alta',
  estado: 'pendiente',
  etiquetas: [],
  vencimiento: null,
  creadaEn: new Date('2024-01-01'),
  actualizadaEn: new Date('2024-01-01'),
}

const TAREA_COMPLETADA: Tarea = {
  ...TAREA_PENDIENTE,
  id: '2',
  titulo: 'Configurar TypeScript',
  estado: 'completada',
  prioridad: 'media',
}

const TAREA_URGENTE: Tarea = {
  ...TAREA_PENDIENTE,
  id: '3',
  titulo: 'Entrega urgente',
  prioridad: 'urgente',
}

// ─── Funciones bajo prueba ────────────────────────────────────
function calcularEstadisticas(tareas: Tarea[]) {
  const completadas = tareas.filter((t) => t.estado === 'completada').length
  return {
    total: tareas.length,
    completadas,
    pendientes: tareas.filter((t) => t.estado === 'pendiente').length,
    porcentajeCompletado: tareas.length > 0
      ? Math.round((completadas / tareas.length) * 100)
      : 0,
  }
}

function filtrarPorPrioridad(tareas: Tarea[], prioridad: Tarea['prioridad']): Tarea[] {
  return tareas.filter((t) => t.prioridad === prioridad)
}

function filtrarPorBusqueda(tareas: Tarea[], termino: string): Tarea[] {
  if (!termino.trim()) return tareas
  const t = termino.toLowerCase()
  return tareas.filter((tarea) => tarea.titulo.toLowerCase().includes(t))
}

// ─── Tests ────────────────────────────────────────────────────
const tareasTest = [TAREA_PENDIENTE, TAREA_COMPLETADA, TAREA_URGENTE]

describe('calcularEstadisticas', () => {
  it('calcula totales correctamente', () => {
    const stats = calcularEstadisticas(tareasTest)
    expect(stats.total).toBe(3)
    expect(stats.completadas).toBe(1)
    expect(stats.pendientes).toBe(2)
  })

  it('calcula porcentaje correcto', () => {
    const stats = calcularEstadisticas(tareasTest)
    expect(stats.porcentajeCompletado).toBe(33)  // 1/3 ≈ 33%
  })

  it('retorna 0% con lista vacía', () => {
    expect(calcularEstadisticas([]).porcentajeCompletado).toBe(0)
  })
})

describe('filtrarPorPrioridad', () => {
  it('filtra por prioridad alta', () => {
    const resultado = filtrarPorPrioridad(tareasTest, 'alta')
    expect(resultado).toHaveLength(1)
    expect(resultado[0].id).toBe('1')
  })

  it('retorna vacío cuando no hay coincidencias', () => {
    expect(filtrarPorPrioridad(tareasTest, 'baja')).toHaveLength(0)
  })
})

describe('filtrarPorBusqueda', () => {
  it('filtra por término de búsqueda', () => {
    const resultado = filtrarPorBusqueda(tareasTest, 'typescript')
    expect(resultado).toHaveLength(1)
  })

  it('búsqueda vacía retorna todas las tareas', () => {
    expect(filtrarPorBusqueda(tareasTest, '')).toHaveLength(3)
  })

  it('la búsqueda es case-insensitive', () => {
    expect(filtrarPorBusqueda(tareasTest, 'TYPESCRIPT')).toHaveLength(1)
  })
})`,
    keyPoints: [
      'Prioriza tests para lógica de negocio: estadísticas, filtros, validaciones',
      'No necesitas probar componentes de UI ni funciones de fetch en el proyecto final',
      'Los datos de prueba bien nombrados (TAREA_PENDIENTE) hacen los tests legibles',
      'Cubre al menos casos normales y casos borde (lista vacía, sin resultados)',
      'Los reclutadores valoran que el proyecto tenga tests — aunque sean pocos',
    ],
    exercise: {
      description:
        'Agrega tests a tu proyecto final. Crea src/tests/[nombre-entidad]-service.test.ts con al menos 6 tests que cubran: estadísticas (total, porcentaje), filtrado por al menos 2 criterios, y al menos un caso borde (lista vacía o sin coincidencias).',
      hint: 'Instala vitest con npm install -D vitest. Configura el script "test": "vitest" en package.json. Los tests deben ser de funciones puras que no accedan a localStorage.',
    },
    quiz: [
      {
        question: '¿Qué funciones del proyecto final deben tener pruebas?',
        options: [
          'Todas las funciones sin excepción',
          'Solo las funciones de fetch a APIs externas',
          'Las funciones de lógica de negocio: estadísticas, filtros, validaciones, transformaciones',
          'Solo los componentes de React',
        ],
        correctAnswer: 'Las funciones de lógica de negocio: estadísticas, filtros, validaciones, transformaciones',
        correctFeedback: '¡Correcto! Las funciones puras de lógica de negocio son las más valiosas de probar y las más fáciles de testear.',
        incorrectFeedback: 'Prioriza las funciones de lógica de negocio. Los componentes UI y fetch son más complejos de probar y menos críticos para el portafolio.',
      },
      {
        question: '¿Para qué sirve `environment: "jsdom"` en la configuración de Vitest?',
        options: [
          'Para ejecutar los tests en un navegador real',
          'Para poder usar APIs del navegador como DOM y localStorage en los tests',
          'Para hacer los tests más rápidos',
          'Solo es necesario si usas Next.js',
        ],
        correctAnswer: 'Para poder usar APIs del navegador como DOM y localStorage en los tests',
        correctFeedback: '¡Correcto! jsdom simula el entorno del navegador en Node.js — permite usar window, document y localStorage en los tests.',
        incorrectFeedback: 'jsdom simula el navegador en Node.js. Sin él, los tests no pueden usar APIs como document o localStorage.',
      },
      {
        question: '¿Por qué se nombran los datos de prueba con mayúsculas (TAREA_PENDIENTE, TAREA_COMPLETADA)?',
        options: [
          'TypeScript lo requiere para datos de prueba',
          'Para distinguirlos visualmente de variables locales y señalar que son constantes fijas',
          'Para que los errores sean más claros',
          'Solo es convención de Vitest',
        ],
        correctAnswer: 'Para distinguirlos visualmente de variables locales y señalar que son constantes fijas',
        correctFeedback: '¡Correcto! Las constantes de datos de prueba en mayúsculas son fáciles de identificar — señalan que son datos fijos, no variables dinámicas.',
        incorrectFeedback: 'La convención UPPER_CASE para datos de prueba los hace fáciles de reconocer — indican que son constantes fijas del test, no variables locales.',
      },
      {
        question: '¿Qué afirma `expect(resultado).toHaveLength(0)`?',
        options: [
          'Que el resultado es null o undefined',
          'Que el array o string resultado tiene cero elementos',
          'Que la función no retornó nada',
          'Que el resultado es un array vacío solo si es array',
        ],
        correctAnswer: 'Que el array o string resultado tiene cero elementos',
        correctFeedback: '¡Correcto! toHaveLength(0) verifica que el array (o string) tiene longitud 0 — ideal para probar filtros que no encuentran resultados.',
        incorrectFeedback: 'toHaveLength(0) afirma que la colección tiene 0 elementos — perfecto para probar que un filtro retorna vacío cuando no hay coincidencias.',
      },
      {
        question: '¿Qué son los "casos borde" que deben cubrirse en los tests?',
        options: [
          'Los errores de TypeScript más comunes',
          'Condiciones límite como lista vacía, valor cero, búsqueda sin coincidencias',
          'Los tests que tardan más en ejecutarse',
          'Los tests de componentes de UI',
        ],
        correctAnswer: 'Condiciones límite como lista vacía, valor cero, búsqueda sin coincidencias',
        correctFeedback: '¡Correcto! Los casos borde prueban las condiciones límite donde el código puede fallar: lista vacía, 0%, búsqueda sin resultados.',
        incorrectFeedback: 'Casos borde son condiciones límite: lista vacía retornando 0%, búsqueda que no encuentra nada, operaciones con un solo elemento.',
      },
    ],
  },
  {
    slug: 'proyecto-final-refactor-typescript',
    title: 'Refactorizar tipos y organización',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 249,
    description:
      'Mejora la estructura de tipos, elimina duplicación y organiza el proyecto para que sea más claro.',
    explanation: `## Refactorizar tipos y organización

Antes de presentar el proyecto, revisa y mejora la calidad del código. La refactorización hace que el proyecto sea más impresionante y fácil de leer.

### ¿Qué refactorizar?

**1. Eliminar duplicación de tipos**

\`\`\`typescript
// ❌ Duplicación
interface TareaCard { id: string; titulo: string; prioridad: string }
interface TareaItem { id: string; titulo: string; prioridad: string }

// ✅ Un solo tipo compartido
interface Tarea { id: string; titulo: string; prioridad: Prioridad }
\`\`\`

**2. Extraer union types repetidos**

\`\`\`typescript
// ❌ Repetido en múltiples lugares
prioridad: 'baja' | 'media' | 'alta' | 'urgente'

// ✅ Un tipo nombrado
type Prioridad = 'baja' | 'media' | 'alta' | 'urgente'
// Y Tarea['prioridad'] para reutilizarlo
\`\`\`

**3. Simplificar funciones largas**

\`\`\`typescript
// ❌ Función larga con muchas responsabilidades
function procesarTodo(tareas, filtros, orden, pagina) {
  // Filtrar, ordenar, paginar, calcular... todo junto
}

// ✅ Funciones pequeñas con responsabilidades claras
function filtrar(tareas: Tarea[], filtros: FiltrosTarea): Tarea[]
function ordenar(tareas: Tarea[], orden: OrdenamientoTarea): Tarea[]
function paginar(tareas: Tarea[], pagina: number, porPagina: number): Tarea[]
\`\`\`

**4. Revisar los nombres**

\`\`\`typescript
// ❌ Nombres poco claros
const d = datos.filter(x => x.a)

// ✅ Nombres descriptivos
const tareasActivas = todasLasTareas.filter(t => t.activa)
\`\`\`

### Revisión final de tipos

- ¿Hay any sin justificación? → Reemplaza con tipos específicos o unknown
- ¿Hay tipos duplicados? → Extrae a un archivo compartido
- ¿Las interfaces están actualizadas con el código real? → Verifica coherencia`,
    codeExample: `// Antes y después de refactorizar

// ─── ❌ ANTES: Código con problemas ───────────────────────────

// Tipos duplicados y sin organización
interface TareaResumen {
  id: string
  titulo: string
  estado: string  // ¿Qué valores válidos tiene?
}

interface TareaDetalle {
  id: string
  titulo: string
  descripcion: string
  estado: string  // Duplicado y sin unión de tipos
  prioridad: string  // Sin limitación de valores
}

// Función larga con múltiples responsabilidades
function procesarTareas(tareas: any[], filtros: any, orden: any): any[] {
  const filtradas = tareas.filter(t => {
    if (filtros.estado && t.estado !== filtros.estado) return false
    if (filtros.prioridad && t.prioridad !== filtros.prioridad) return false
    if (filtros.busqueda) {
      if (!t.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase())) return false
    }
    return true
  })
  return filtradas.sort((a: any, b: any) => {
    if (orden === 'prioridad') return 0  // Incompleto
    return a.titulo.localeCompare(b.titulo)
  })
}

// ─── ✅ DESPUÉS: Código refactorizado ─────────────────────────

// types/tarea.ts — tipos centralizados y bien definidos
export type Prioridad = 'baja' | 'media' | 'alta' | 'urgente'
export type EstadoTarea = 'pendiente' | 'en-progreso' | 'completada'
export type OrdenamientoTarea = 'titulo' | 'prioridad' | 'creadaEn'

export interface Tarea {
  id: string
  titulo: string
  descripcion: string
  estado: EstadoTarea
  prioridad: Prioridad
  creadaEn: Date
}

export interface FiltrosTarea {
  estado?: EstadoTarea
  prioridad?: Prioridad
  busqueda?: string
}

// Funciones separadas y bien tipadas
export function filtrarTareas(tareas: Tarea[], filtros: FiltrosTarea): Tarea[] {
  return tareas.filter((tarea) => {
    if (filtros.estado && tarea.estado !== filtros.estado) return false
    if (filtros.prioridad && tarea.prioridad !== filtros.prioridad) return false
    if (filtros.busqueda) {
      const termino = filtros.busqueda.toLowerCase()
      if (!tarea.titulo.toLowerCase().includes(termino)) return false
    }
    return true
  })
}

const ORDEN_PRIORIDAD: Record<Prioridad, number> = {
  urgente: 4, alta: 3, media: 2, baja: 1,
}

export function ordenarTareas(
  tareas: Tarea[],
  orden: OrdenamientoTarea
): Tarea[] {
  return [...tareas].sort((a, b) => {
    if (orden === 'prioridad') {
      return ORDEN_PRIORIDAD[b.prioridad] - ORDEN_PRIORIDAD[a.prioridad]
    }
    if (orden === 'titulo') return a.titulo.localeCompare(b.titulo)
    return new Date(b.creadaEn).getTime() - new Date(a.creadaEn).getTime()
  })
}`,
    keyPoints: [
      'Busca y elimina tipos duplicados — un tipo definido una vez es mejor que varios iguales',
      'Extrae union types repetidos a un type nombrado para consistencia',
      'Separa funciones largas en funciones pequeñas con responsabilidades claras',
      'Reemplaza any sin justificación con tipos específicos o unknown',
      'Verifica que los nombres de variables y funciones sean descriptivos y claros',
    ],
    exercise: {
      description:
        'Revisa tu proyecto y haz al menos 3 mejoras: 1) Elimina algún any innecesario. 2) Extrae un union type que esté repetido. 3) Separa una función larga en funciones más pequeñas. Documenta brevemente qué mejoraste y por qué.',
      hint: 'Usa Ctrl+F para buscar "any" en el código. Busca funciones de más de 20 líneas que puedan dividirse. Busca tipos de string donde debería haber un union type.',
    },
    quiz: [
      {
        question: '¿Cuándo es una buena señal que un tipo está bien diseñado?',
        options: [
          'Cuando tiene muchas propiedades',
          'Cuando se usa en un solo lugar',
          'Cuando se puede reutilizar en varios contextos sin duplicación',
          'Cuando tiene comentarios extensos',
        ],
        correctAnswer: 'Cuando se puede reutilizar en varios contextos sin duplicación',
        correctFeedback: '¡Correcto! Un tipo bien diseñado se puede usar en múltiples contextos — reduce la duplicación y mantiene consistencia.',
        incorrectFeedback: 'Un tipo bien diseñado es reutilizable. Si tienes 3 interfaces con las mismas propiedades, probablemente deberían ser una sola.',
      },
      {
        question: '¿Cómo encontrar usos de "any" en el código para reemplazarlos?',
        options: [
          'TypeScript genera un reporte automático',
          'Buscando con Ctrl+F la palabra "any" en todos los archivos del proyecto',
          'Solo con npx tsc — muestra todos los any',
          'Es imposible buscarlos manualmente',
        ],
        correctAnswer: 'Buscando con Ctrl+F la palabra "any" en todos los archivos del proyecto',
        correctFeedback: '¡Correcto! Una búsqueda simple de "any" en el proyecto revela todos los usos — luego evalúas cuáles reemplazar con tipos más específicos.',
        incorrectFeedback: 'Ctrl+F para buscar "any" es la forma más rápida. También puedes activar noImplicitAny en tsconfig para que TypeScript los marque como errores.',
      },
      {
        question: '¿Cuándo es buen momento para dividir una función en funciones más pequeñas?',
        options: [
          'Solo cuando supera 100 líneas',
          'Cuando tiene más de una responsabilidad clara o es difícil de entender de un vistazo',
          'Nunca — más funciones = más código',
          'Solo si los tests fallan',
        ],
        correctAnswer: 'Cuando tiene más de una responsabilidad clara o es difícil de entender de un vistazo',
        correctFeedback: '¡Correcto! Cada función debe tener una sola responsabilidad. Si filtrar, ordenar y paginar están juntos, son tres funciones separadas.',
        incorrectFeedback: 'Divide funciones cuando tienen múltiples responsabilidades — filtrar, ordenar y calcular juntos son tres funciones distintas.',
      },
      {
        question: '¿Cómo se evita repetir el union type de prioridades en múltiples archivos?',
        options: [
          'Copiando el type en cada archivo que lo necesite',
          'Definiendo `type Prioridad = ...` en types/ y exportándolo — todos los archivos importan de ahí',
          'Usando string en todos los lugares',
          'TypeScript lo deduce automáticamente',
        ],
        correctAnswer: 'Definiendo `type Prioridad = ...` en types/ y exportándolo — todos los archivos importan de ahí',
        correctFeedback: '¡Correcto! Un tipo definido una vez en types/ y exportado evita la duplicación — si cambia, solo lo actualizas en un lugar.',
        incorrectFeedback: 'Define el type una vez en src/types/ y expórtalo. Todos los archivos importan de ahí — un cambio se propaga a todos.',
      },
      {
        question: '¿Qué debe hacer un linter como ESLint con la regla @typescript-eslint/no-explicit-any durante la refactorización?',
        options: [
          'Nada — ESLint no interactúa con TypeScript',
          'Marcar automáticamente todos los usos de any como advertencias o errores',
          'Eliminar automáticamente los any del código',
          'Solo aplica en producción',
        ],
        correctAnswer: 'Marcar automáticamente todos los usos de any como advertencias o errores',
        correctFeedback: '¡Correcto! @typescript-eslint/no-explicit-any marca cada uso de any para que los revises — una guía de refactorización integrada en el editor.',
        incorrectFeedback: 'La regla @typescript-eslint/no-explicit-any señala cada any en el código. Configúrala como "warn" para identificar los que necesitas reemplazar.',
      },
    ],
  },
  {
    slug: 'proyecto-final-readme',
    title: 'Crear README del proyecto',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 250,
    description:
      'Aprende a documentar el proyecto con instrucciones de instalación, uso, tecnologías y funcionalidades.',
    explanation: `## Crear README del proyecto

El README es lo primero que ve un reclutador al visitar tu repositorio. Un buen README puede marcar la diferencia entre que revisen tu código o no.

### Estructura de un buen README

\`\`\`markdown
# Nombre del Proyecto

Descripción breve del proyecto (2-3 oraciones máximo).

## Demo

[Enlace a demo live si existe]

## Capturas de pantalla

![Screenshot](screenshot.png)

## Tecnologías

- TypeScript 5.x
- React 18 + Vite
- Vitest (testing)

## Funcionalidades

- ✅ Crear, editar y eliminar tareas
- ✅ Filtrar por prioridad y estado
- ✅ Estadísticas de progreso
- ✅ Persistencia en localStorage
- ✅ Pruebas unitarias

## Instalación y uso

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/usuario/proyecto.git

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Ejecutar pruebas
npm test

# Compilar para producción
npm run build
\`\`\`

## Estructura del proyecto

\`\`\`
src/
├── types/     Definiciones de tipos TypeScript
├── lib/       Lógica de negocio
├── utils/     Funciones auxiliares
└── components/ Componentes React
\`\`\`

## Lo que aprendí / Desafíos

Sección opcional pero valiosa para portafolio.
\`\`\`

### Lo que NO incluir en el README

- Tu información privada (correo personal, teléfono)
- Claves de API o secretos (usa variables de entorno)
- Instrucciones incorrectas o desactualizadas
- Stack traces o mensajes de error`,
    codeExample: `# TaskMaster — Gestor de Tareas con TypeScript

Aplicación de gestión de tareas construida con **TypeScript** y **React**
para demostrar patrones de tipado, organización de código y buenas prácticas.

## Tecnologías

- TypeScript 5.x
- React 18
- Vite
- Vitest (pruebas unitarias)
- CSS Modules

## Funcionalidades principales

- ✅ Crear, editar y eliminar tareas
- ✅ Prioridades tipadas: Baja, Media, Alta, Urgente
- ✅ Estados de tarea: Pendiente, En progreso, Completada
- ✅ Filtrar y buscar tareas
- ✅ Estadísticas de progreso
- ✅ Persistencia automática en localStorage
- ✅ Pruebas unitarias con Vitest

## Instalación

\`\`\`bash
git clone https://github.com/usuario/task-master.git
cd task-master
npm install
npm run dev
\`\`\`

## Scripts disponibles

| Comando | Descripción |
|---|---|
| \`npm run dev\` | Inicia el servidor de desarrollo |
| \`npm test\` | Ejecuta las pruebas en modo watch |
| \`npm run test:run\` | Ejecuta las pruebas una vez |
| \`npm run build\` | Compila para producción |
| \`npm run typecheck\` | Verifica tipos sin compilar |

## Estructura del proyecto

\`\`\`
src/
├── types/
│   └── tarea.ts        # Interfaces y tipos del dominio
├── lib/
│   ├── tarea-service.ts # Lógica de negocio (CRUD)
│   └── storage.ts       # Persistencia localStorage
├── utils/
│   ├── format.ts        # Funciones de formato
│   └── errores.ts       # Manejo de errores
├── components/          # Componentes React tipados
└── tests/               # Pruebas unitarias
\`\`\`

## Lo que aprendí

- Diseño de tipos con interfaces y union types
- Result pattern para manejo de errores
- Organización de proyectos TypeScript medianos
- Testing con Vitest y datos tipados`,
    keyPoints: [
      'El README es lo primero que ve un reclutador — invierte tiempo en hacerlo claro',
      'Incluye instrucciones de instalación que realmente funcionen — pruébalas antes',
      'Lista las funcionalidades con checkmarks (✅) para que sean fáciles de escanear',
      'Nunca incluyas claves de API, contraseñas u información privada en el README',
      'Una sección "Lo que aprendí" muestra reflexión y es valiosa para portafolio',
    ],
    exercise: {
      description:
        'Crea el README de tu proyecto final con: título y descripción (2-3 oraciones), lista de tecnologías, lista de funcionalidades con ✅, instrucciones de instalación (clona, instala, inicia), y estructura de carpetas. Bonus: añade una sección "Lo que aprendí" con 2-3 puntos.',
      hint: 'Verifica que las instrucciones de instalación funcionen ejecutándolas en una terminal limpia. El README debe ser honesto sobre el estado actual del proyecto.',
    },
    quiz: [
      {
        question: '¿Qué NO debes incluir en el README de tu proyecto de portafolio?',
        options: [
          'Instrucciones de instalación',
          'Lista de funcionalidades',
          'Claves de API o contraseñas',
          'Tecnologías utilizadas',
        ],
        correctAnswer: 'Claves de API o contraseñas',
        correctFeedback: '¡Correcto! Las claves secretas nunca deben estar en el código ni en el README — usa variables de entorno.',
        incorrectFeedback: 'Las claves de API y contraseñas son secretas y nunca deben ir en el README ni en el código. Usa variables de entorno (.env) para eso.',
      },
      {
        question: '¿Por qué debes probar las instrucciones de instalación del README antes de publicarlas?',
        options: [
          'Solo para cumplir con una convención del equipo',
          'Para asegurarte de que realmente funcionan — instrucciones incorrectas causan mala primera impresión',
          'Porque GitHub las valida automáticamente',
          'Solo si el proyecto usa una base de datos',
        ],
        correctAnswer: 'Para asegurarte de que realmente funcionan — instrucciones incorrectas causan mala primera impresión',
        correctFeedback: '¡Correcto! Un reclutador que sigue las instrucciones y no puede ejecutar el proyecto tendrá una mala impresión — pruébalas antes.',
        incorrectFeedback: 'Las instrucciones deben probarse en una terminal limpia. Instrucciones que no funcionan son peores que no tener README.',
      },
      {
        question: '¿Qué formato es útil para documentar los scripts de npm disponibles en el README?',
        options: [
          'Solo un párrafo de texto',
          'Una tabla markdown con columnas Comando | Descripción',
          'Una lista numerada',
          'Un bloque de código con todos los comandos juntos',
        ],
        correctAnswer: 'Una tabla markdown con columnas Comando | Descripción',
        correctFeedback: '¡Correcto! Una tabla es fácil de escanear — el lector encuentra rápidamente el comando que necesita y sabe para qué sirve.',
        incorrectFeedback: 'Una tabla markdown | Comando | Descripción | es la forma más legible de documentar los scripts disponibles del proyecto.',
      },
      {
        question: '¿Qué valor tiene incluir una sección "Lo que aprendí" en el README?',
        options: [
          'Ninguno — los reclutadores no la leen',
          'Demuestra capacidad de reflexión y aprendizaje — valioso para portafolio',
          'Es obligatorio en todos los proyectos open source',
          'Solo sirve para proyectos de universidad',
        ],
        correctAnswer: 'Demuestra capacidad de reflexión y aprendizaje — valioso para portafolio',
        correctFeedback: '¡Correcto! Explicar qué aprendiste muestra madurez técnica y reflexión — los reclutadores valoran desarrolladores que aprenden de su trabajo.',
        incorrectFeedback: 'Una sección "Lo que aprendí" muestra reflexión y crecimiento. Es una oportunidad de demostrar que entiendes las decisiones técnicas que tomaste.',
      },
      {
        question: '¿Qué información debe estar en el archivo .env y NO en el README?',
        options: [
          'La versión de Node.js requerida',
          'Las instrucciones de instalación',
          'Claves de API, contraseñas y tokens secretos de configuración',
          'La lista de dependencias del proyecto',
        ],
        correctAnswer: 'Claves de API, contraseñas y tokens secretos de configuración',
        correctFeedback: '¡Correcto! Las credenciales van en .env (que está en .gitignore) — nunca en el README ni en ningún archivo que se suba al repositorio.',
        incorrectFeedback: 'Las claves de API y secretos van en .env, que debe estar en .gitignore. El README solo debe mostrar que existe un .env.example con las variables necesarias.',
      },
    ],
  },
  {
    slug: 'proyecto-final-portafolio-typescript',
    title: 'Presentar el proyecto como portafolio',
    module: 'Proyecto final TypeScript',
    moduleNumber: 30,
    order: 251,
    description:
      'Aprende a explicar tu proyecto final en LinkedIn, GitHub o entrevistas como evidencia de tus habilidades con TypeScript.',
    explanation: `## Presentar el proyecto como portafolio

Completar el proyecto es solo la mitad del trabajo. Presentarlo correctamente multiplica su impacto en tu carrera.

### En GitHub

**Configura el repositorio bien:**
- Nombre del repo: claro y descriptivo (task-master, not my-project-final)
- Descripción del repo: 1 línea explicando qué es
- Topics/Tags: typescript, react, vite, vitest, portfolio
- README completo (como aprendiste en la lección anterior)
- URL del demo en "About" del repo (si tienes una)

**El código también es portafolio:**
- Commits con mensajes descriptivos
- Sin archivos innecesarios (.env, node_modules)
- .gitignore adecuado

### En LinkedIn

\`\`\`
🚀 Acabo de terminar mi primer proyecto con TypeScript desde cero.

Construí [nombre del proyecto], una aplicación de [descripción breve]
que demuestra:

✅ Tipos bien definidos con interfaces y union types
✅ Manejo de errores con unknown y narrowing
✅ Estado tipado en React con hooks personalizados
✅ Pruebas unitarias con Vitest
✅ Organización de proyecto escalable

Lo que aprendí: [2-3 aprendizajes clave]

→ [Link al repositorio en GitHub]

#TypeScript #React #WebDev #OpenToWork
\`\`\`

### En entrevistas técnicas

Practica explicar el proyecto en 2 minutos:

1. **¿Qué hace?** — La app gestiona tareas con prioridades y filtros.
2. **¿Por qué TypeScript?** — Para detectar errores en desarrollo y tener props tipadas.
3. **¿Cuál fue el desafío más interesante?** — Diseñar los tipos antes de la lógica, especialmente el manejo de errores con unknown.
4. **¿Qué mejorarías?** — Añadiría persistencia en base de datos real y auth.

### Lo que el proyecto demuestra

| Habilidad | Evidencia en el proyecto |
|---|---|
| TypeScript | Interfaces, union types, generics |
| Organización | Estructura de carpetas coherente |
| Funciones | Pequeñas, tipadas, con retornos claros |
| Errores | unknown narrowing, Result pattern |
| Testing | Vitest con datos tipados |
| React | Props tipadas, hooks con tipos |`,
    codeExample: `// Checklist final antes de publicar el portafolio

// ─── 1. Verificar que el proyecto compila ─────────────────────
// npm run build       → Sin errores
// npm run typecheck   → Sin errores de TypeScript
// npm test            → Todos los tests pasan

// ─── 2. Limpiar el código ────────────────────────────────────
// ❌ Eliminar console.log de debug que olvidaste
// ❌ Eliminar código comentado que no sirve
// ❌ Eliminar archivos temporales o de prueba

// ─── 3. Verificar el .gitignore ───────────────────────────────
// .gitignore debe incluir:
// node_modules/
// dist/
// .env
// .env.local
// *.local

// ─── 4. Verificar que no hay secretos en el código ────────────
// git grep -i "api_key"   → No debe encontrar nada
// git grep -i "password"  → No debe encontrar nada
// git grep -i "secret"    → No debe encontrar nada

// ─── 5. Hacer el commit final ─────────────────────────────────
// git add .
// git commit -m "feat: complete portfolio project with TypeScript"
// git push origin main

// ─── 6. Verificar en GitHub ───────────────────────────────────
// ✅ README se ve bien en GitHub
// ✅ Descripción del repo está completa
// ✅ Topics añadidos (typescript, react, portfolio)
// ✅ URL del demo añadida si existe

// ─── 7. Escribir el post de LinkedIn ─────────────────────────
// Template:
// "Acabo de terminar mi proyecto final de TypeScript:
//  [nombre] — [descripción breve]
//  Lo que demuestra: [3-4 habilidades]
//  → [link al repo]"

// ─── Lo que puedes decir en una entrevista ───────────────────
const descripcionProyecto = {
  que: 'Aplicación de gestión de tareas con TypeScript y React',
  porque: 'Para practicar TypeScript profesional: tipos, errores y testing',
  aprendizajes: [
    'Diseñar tipos antes de la lógica hace el código más claro',
    'El Result pattern hace el manejo de errores más explícito',
    'Los tests con Vitest dan confianza al refactorizar',
  ],
  mejoras: [
    'Añadiría autenticación con Supabase',
    'Integraría con una API real para sincronización',
    'Añadiría más cobertura de tests',
  ],
}

console.log('Proyecto listo para portafolio:', descripcionProyecto.que)`,
    keyPoints: [
      'El nombre del repositorio debe ser claro y profesional — no "mi-proyecto-final"',
      'Añade topics en GitHub (typescript, react, portfolio) para que sea más descubrible',
      'El post de LinkedIn debe mencionar qué habilidades demuestra el proyecto',
      'Practica explicar el proyecto en 2 minutos para entrevistas',
      'Nunca subas .env, claves de API ni node_modules al repositorio público',
    ],
    exercise: {
      description:
        'Prepara la presentación de tu proyecto: 1) Verifica que compila y los tests pasan. 2) Sube el código a GitHub con un README completo. 3) Escribe un párrafo de LinkedIn de máximo 5 líneas que explique el proyecto y sus habilidades demostradas. 4) Practica explicarlo verbalmente en 2 minutos.',
      hint: 'El post de LinkedIn menciona: qué construiste, con qué tecnologías, qué habilidades demuestra, y el link al repo. Los hashtags TypeScript React WebDev ayudan al alcance.',
    },
    quiz: [
      {
        question: '¿Qué debes incluir en los "topics" de tu repositorio de GitHub?',
        options: [
          'Solo el nombre de tu ciudad',
          'Las tecnologías usadas y el propósito (typescript, react, portfolio)',
          'No es necesario — los topics no sirven',
          'Solo "javascript" para mayor alcance',
        ],
        correctAnswer: 'Las tecnologías usadas y el propósito (typescript, react, portfolio)',
        correctFeedback: '¡Correcto! Los topics como "typescript", "react", "portfolio" hacen tu repositorio más descubrible en búsquedas de GitHub.',
        incorrectFeedback: 'Los topics de GitHub ayudan a la búsqueda. Usa las tecnologías (typescript, react) y el propósito (portfolio, open-source).',
      },
      {
        question: '¿Cuál es la estructura correcta para explicar tu proyecto en una entrevista?',
        options: [
          'Solo mostrar el código sin explicación',
          'Qué hace, por qué TypeScript, el desafío más interesante, qué mejorarías',
          'Solo mencionar las tecnologías usadas',
          'Leer el README en voz alta',
        ],
        correctAnswer: 'Qué hace, por qué TypeScript, el desafío más interesante, qué mejorarías',
        correctFeedback: '¡Correcto! Esta estructura demuestra comprensión del proyecto, decisiones técnicas y capacidad de reflexión.',
        incorrectFeedback: 'Una buena explicación cubre: qué hace, decisiones técnicas (por qué TypeScript), desafíos y mejoras — demuestra madurez técnica.',
      },
      {
        question: '¿Cuánto tiempo deberías poder hablar de tu proyecto final en una entrevista?',
        options: [
          '30 segundos máximo',
          'Al menos 30 minutos con detalles profundos',
          '2-3 minutos con claridad — más si te preguntan detalles',
          'No deberías hablar de proyectos personales en entrevistas',
        ],
        correctAnswer: '2-3 minutos con claridad — más si te preguntan detalles',
        correctFeedback: '¡Correcto! 2-3 minutos es el tiempo ideal para la presentación inicial. Después respondes preguntas específicas.',
        incorrectFeedback: 'Practica una presentación de 2-3 minutos. Breve, clara y enfocada en las habilidades demostradas. Los detalles los das si preguntan.',
      },
      {
        question: '¿Qué debes verificar antes de publicar el repositorio final en GitHub?',
        options: [
          'Que el proyecto tenga más de 1000 líneas de código',
          'Que no haya claves de API, secretos ni archivos .env en el historial de commits',
          'Que todos los commits sean en inglés',
          'Que el proyecto tenga al menos 10 tests',
        ],
        correctAnswer: 'Que no haya claves de API, secretos ni archivos .env en el historial de commits',
        correctFeedback: '¡Correcto! Un secreto en el historial de git es un problema de seguridad incluso si lo eliminas después — usa git grep para verificar antes de publicar.',
        incorrectFeedback: 'Antes de publicar, verifica con `git grep -i "api_key"` y similares. Un secreto en el historial es permanente incluso si eliminas el archivo.',
      },
      {
        question: '¿Qué debe mencionar un buen post de LinkedIn sobre tu proyecto TypeScript?',
        options: [
          'Solo el nombre del proyecto',
          'El proyecto, las habilidades TypeScript que demuestra y el link al repositorio',
          'Solo que lo terminaste y cuánto tiempo tardaste',
          'Una descripción técnica muy detallada de más de 500 palabras',
        ],
        correctAnswer: 'El proyecto, las habilidades TypeScript que demuestra y el link al repositorio',
        correctFeedback: '¡Correcto! El post conecta el proyecto con las habilidades — qué construiste, qué demuestra técnicamente, y el link para que puedan verlo.',
        incorrectFeedback: 'Un buen post menciona qué construiste, qué habilidades TypeScript demuestra (tipos, errores, tests) y el link al repo. Breve pero informativo.',
      },
    ],
  },
]

export const tsModule30: Module = {
  number: 30,
  title: 'Proyecto final TypeScript',
  level: 'nivel6',
  lessons: lessonsTsModule30,
}
