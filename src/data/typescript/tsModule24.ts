import type { Lesson, Module } from '@/types'

export const lessonsTsModule24: Lesson[] = [
  {
    slug: 'estructura-carpetas-typescript',
    title: 'Estructura de carpetas en TypeScript',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 187,
    description:
      'Aprende cómo organizar carpetas en un proyecto TypeScript para que el código sea fácil de encontrar y mantener.',
    explanation: `## Estructura de carpetas en TypeScript

Una buena organización de archivos hace que tu proyecto sea más fácil de entender, mantener y escalar.

### Estructura básica para un proyecto TypeScript

\`\`\`
mi-proyecto/
├── src/                    # Código fuente TypeScript
│   ├── types.ts            # Tipos compartidos
│   ├── interfaces.ts       # Interfaces compartidas
│   ├── utils.ts            # Utilidades generales
│   ├── api.ts              # Llamadas a la API
│   ├── errors.ts           # Clases y helpers de error
│   └── main.ts             # Punto de entrada
├── public/                 # Archivos estáticos
│   └── index.html
├── dist/                   # Archivos compilados (no editar)
├── tsconfig.json           # Configuración de TypeScript
└── package.json
\`\`\`

### Estructura para un proyecto más grande

\`\`\`
src/
├── types/          # Tipos e interfaces compartidos
│   ├── index.ts    # Re-exporta todo
│   ├── user.ts
│   ├── product.ts
│   └── api.ts
├── api/            # Módulos de API por recurso
│   ├── users.ts
│   ├── products.ts
│   └── orders.ts
├── utils/          # Funciones reutilizables
│   ├── format.ts
│   ├── validation.ts
│   └── storage.ts
├── errors/         # Clases y helpers de error
│   └── index.ts
└── main.ts
\`\`\`

### Principios de organización

1. **Por responsabilidad**: cada archivo tiene una sola responsabilidad
2. **Cercanía**: archivos relacionados están cerca
3. **Predecibilidad**: cualquier persona del equipo puede encontrar el código
4. **Escalabilidad**: la estructura crece sin caos`,
    codeExample: `// Estructura de ejemplo para una tienda online

// src/types.ts — Tipos compartidos simples
export interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
  stock: number
}

export interface Usuario {
  id: number
  nombre: string
  email: string
}

export interface Pedido {
  id: number
  usuarioId: number
  productos: { productoId: number; cantidad: number }[]
  total: number
  estado: 'pendiente' | 'enviado' | 'entregado'
}

// src/utils.ts — Funciones reutilizables
export function formatearPrecio(precio: number, moneda = 'USD'): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: moneda,
  }).format(precio)
}

export function truncarTexto(texto: string, maxLength: number): string {
  if (texto.length <= maxLength) return texto
  return texto.slice(0, maxLength - 3) + '...'
}

// src/api.ts — Llamadas a la API centralizadas
import type { Producto, Usuario } from './types'

const BASE_URL = 'https://api.ejemplo.com'

export async function obtenerProductos(): Promise<Producto[]> {
  const resp = await fetch(\`\${BASE_URL}/productos\`)
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Producto[]>
}

export async function obtenerUsuario(id: number): Promise<Usuario | null> {
  const resp = await fetch(\`\${BASE_URL}/usuarios/\${id}\`)
  if (resp.status === 404) return null
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Usuario>
}

// src/main.ts — Punto de entrada, une todo
import { obtenerProductos } from './api'
import { formatearPrecio } from './utils'

async function inicializar(): Promise<void> {
  const productos = await obtenerProductos()
  const contenedor = document.getElementById('productos')
  if (!contenedor) return

  productos.forEach((producto) => {
    const div = document.createElement('div')
    div.className = 'producto'
    div.textContent = \`\${producto.nombre} — \${formatearPrecio(producto.precio)}\`
    contenedor.appendChild(div)
  })
}

document.addEventListener('DOMContentLoaded', inicializar)`,
    keyPoints: [
      'Agrupa el código por responsabilidad — types.ts, api.ts, utils.ts, errors.ts',
      'La carpeta src/ contiene el código fuente; dist/ contiene el código compilado',
      'No edites la carpeta dist/ manualmente — es generada por el compilador de TypeScript',
      'Un index.ts en cada carpeta puede re-exportar todo para simplificar las importaciones',
      'La estructura debe ser predecible — cualquier persona debe poder encontrar el código',
    ],
    exercise: {
      description:
        'Diseña la estructura de carpetas para una aplicación de gestión de tareas con: usuarios que pueden tener tareas, etiquetas para clasificar tareas, y una API REST. Dibuja la estructura (puedes usar comentarios de código TypeScript) y crea los archivos types.ts y utils.ts con al menos 2 interfaces y 2 funciones de utilidad respectivamente.',
      hint: 'Piensa en qué partes del código pueden reutilizarse: los tipos de datos (types.ts), las funciones genéricas (utils.ts), las llamadas al servidor (api.ts), y la lógica de la UI (main.ts o ui.ts).',
    },
    quiz: [
      {
        question: '¿Cuál es la función de la carpeta `dist/` en un proyecto TypeScript?',
        options: [
          'Guardar el código fuente TypeScript',
          'Guardar el código JavaScript compilado — no se edita manualmente',
          'Guardar configuraciones del proyecto',
          'Guardar los tests',
        ],
        correctAnswer: 'Guardar el código JavaScript compilado — no se edita manualmente',
        correctFeedback:
          '¡Correcto! dist/ (distribution) contiene el JavaScript generado por el compilador. Tú editas el TypeScript en src/; el compilador genera dist/ automáticamente.',
        incorrectFeedback:
          'dist/ contiene el código JavaScript compilado — el resultado de compilar TypeScript. No se edita directamente. Si cambias algo en dist/, el próximo build lo sobreescribirá.',
      },
      {
        question: '¿Por qué separar los tipos en `types.ts` en lugar de definirlos en cada archivo?',
        options: [
          'TypeScript lo requiere',
          'Evita duplicar definiciones y permite que cualquier archivo importe el mismo tipo',
          'Hace el código más lento',
          'Solo funciona con interfaces',
        ],
        correctAnswer: 'Evita duplicar definiciones y permite que cualquier archivo importe el mismo tipo',
        correctFeedback:
          '¡Exacto! Con types.ts centralizado, todos importan el mismo Producto, Usuario, etc. Si cambias la interfaz, el cambio se aplica en todo el proyecto automáticamente.',
        incorrectFeedback:
          'Si defines Producto en api.ts y también en ui.ts, y alguien cambia una de ellas, ahora hay dos definiciones diferentes. Centralizar en types.ts garantiza que todos usan la misma definición.',
      },
      {
        question: '¿Qué principio guía la decisión de qué va en `utils.ts`?',
        options: [
          'Todo el código va en utils.ts',
          'Funciones puras y reutilizables que no dependen del estado de la aplicación',
          'Solo funciones matemáticas',
          'Funciones que manipulan el DOM',
        ],
        correctAnswer: 'Funciones puras y reutilizables que no dependen del estado de la aplicación',
        correctFeedback:
          '¡Correcto! utils.ts contiene funciones genéricas como formatearFecha, truncarTexto, validarEmail — funciones que puedes usar en cualquier parte del proyecto sin dependencias específicas.',
        incorrectFeedback:
          'utils.ts es para funciones genéricas y reutilizables: formatear fechas, validar strings, manipular arrays, etc. No para lógica específica de la app, estado, o DOM.',
      },
      {
        question: '¿Cuándo conviene crear subcarpetas dentro de `src/`?',
        options: [
          'Siempre, desde el inicio',
          'Cuando un área del proyecto crece lo suficiente — muchos archivos relacionados que se benefician de agruparse',
          'Nunca — todos los archivos van en src/ directamente',
          'Solo en proyectos con más de 100 archivos',
        ],
        correctAnswer: 'Cuando un área del proyecto crece lo suficiente — muchos archivos relacionados que se benefician de agruparse',
        correctFeedback:
          '¡Exacto! No agregues subcarpetas por anticipación. Cuando types.ts se vuelve muy grande, divídelo en types/user.ts, types/product.ts, etc. Deja que la estructura emerja del código real.',
        incorrectFeedback:
          'Las subcarpetas se crean cuando tienen sentido — cuando hay suficientes archivos relacionados. Empezar con subcarpetas vacías añade complejidad innecesaria. La estructura debe reflejar el código real.',
      },
      {
        question: '¿Para qué sirve un archivo `index.ts` en una carpeta?',
        options: [
          'Es el archivo que TypeScript compila primero',
          'Re-exporta todo de la carpeta — simplifica las importaciones para los usuarios de esa carpeta',
          'Contiene la configuración de la carpeta',
          'Es obligatorio en cada carpeta',
        ],
        correctAnswer: 'Re-exporta todo de la carpeta — simplifica las importaciones para los usuarios de esa carpeta',
        correctFeedback:
          '¡Correcto! `types/index.ts` puede exportar todo de user.ts, product.ts, etc. Otros archivos importan `from "./types"` en lugar de `from "./types/user"`, `from "./types/product"`, etc.',
        incorrectFeedback:
          'index.ts es un punto de entrada de la carpeta. Puede re-exportar todo lo de esa carpeta. Así `import { Producto } from "./types"` funciona aunque Producto esté en "./types/product.ts".',
      },
    ],
  },
  {
    slug: 'separar-tipos-archivos',
    title: 'Separar tipos en archivos',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 188,
    description:
      'Aprende cuándo conviene mover tipos e interfaces a archivos separados.',
    explanation: `## Separar tipos en archivos

Cuándo mover tipos a archivos separados es una decisión de ingeniería. Ni siempre ni nunca — sino cuando tiene sentido.

### Cuándo mantener los tipos en el mismo archivo

\`\`\`typescript
// user.ts — El tipo está ligado a la función que lo usa
interface OpcionesOrdenar {
  campo: 'nombre' | 'fecha' | 'precio'
  direccion: 'asc' | 'desc'
}

function ordenarLista<T>(lista: T[], opciones: OpcionesOrdenar): T[] {
  // Si OpcionesOrdenar solo se usa aquí, no tiene sentido moverlo
  return lista
}
\`\`\`

### Cuándo mover tipos a archivos separados

**Caso 1: El tipo se usa en múltiples archivos**
\`\`\`typescript
// types.ts
export interface Producto {
  id: number
  nombre: string
  precio: number
}

// api.ts
import type { Producto } from './types'

// ui.ts
import type { Producto } from './types'
\`\`\`

**Caso 2: El tipo es parte del contrato público del módulo**

**Caso 3: Los tipos crecen mucho y llenan el archivo**

### La regla práctica

Empieza con los tipos en el mismo archivo. Muévelos cuando:
1. Son usados por más de un archivo
2. El archivo se vuelve difícil de leer
3. Quieres expresar que son "tipos del dominio", no solo detalles de implementación

### ¿Cada tipo en su propio archivo?

No necesariamente. Tipos relacionados pueden estar en el mismo archivo:

\`\`\`typescript
// types.ts — Tipos de usuario (relacionados)
export interface Usuario { ... }
export interface PerfilUsuario extends Usuario { ... }
export type RolUsuario = 'admin' | 'editor' | 'lector'
\`\`\``,
    codeExample: `// Antes de separar — un solo archivo con todo

// app.ts ← Demasiado grande
interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

interface Usuario {
  id: number
  email: string
  nombre: string
}

interface Pedido {
  id: number
  productos: { productoId: number; cantidad: number }[]
  usuarioId: number
  total: number
}

async function obtenerProductos(): Promise<Producto[]> { /* ... */ return [] }
async function obtenerUsuario(id: number): Promise<Usuario | null> { return null }
function calcularTotal(items: { precio: number; cantidad: number }[]): number {
  return items.reduce((acc, i) => acc + i.precio * i.cantidad, 0)
}
// ... 200 líneas más

// ===== DESPUÉS DE SEPARAR =====

// types.ts — Solo definiciones de tipos
export interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

export interface Usuario {
  id: number
  email: string
  nombre: string
}

export interface Pedido {
  id: number
  productos: Array<{ productoId: number; cantidad: number }>
  usuarioId: number
  total: number
}

// Tipos derivados — relacionados con los anteriores, tienen sentido aquí
export type NuevoProducto = Omit<Producto, 'id'>
export type UsuarioPublico = Pick<Usuario, 'id' | 'nombre'>

// api.ts — Solo lógica de API
import type { Producto, Usuario } from './types'

export async function obtenerProductos(): Promise<Producto[]> {
  const resp = await fetch('/api/productos')
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Producto[]>
}

export async function obtenerUsuario(id: number): Promise<Usuario | null> {
  const resp = await fetch(\`/api/usuarios/\${id}\`)
  if (resp.status === 404) return null
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Usuario>
}

// utils.ts — Solo funciones de utilidad
import type { Producto } from './types'

export function calcularTotal(
  items: Array<{ productoId: number; cantidad: number }>,
  productos: Producto[]
): number {
  return items.reduce((total, item) => {
    const producto = productos.find((p) => p.id === item.productoId)
    return total + (producto?.precio ?? 0) * item.cantidad
  }, 0)
}

// main.ts — Punto de entrada
import { obtenerProductos } from './api'
import { calcularTotal } from './utils'
import type { Producto } from './types'

document.addEventListener('DOMContentLoaded', async () => {
  const productos: Producto[] = await obtenerProductos()
  console.log(\`\${productos.length} productos cargados\`)
})`,
    keyPoints: [
      'Empieza con los tipos en el mismo archivo; muévelos cuando más de un archivo los necesita',
      'Los tipos de dominio (Producto, Usuario, Pedido) son buenos candidatos para types.ts',
      'Los tipos locales de implementación pueden quedarse en el archivo donde se usan',
      'Tipos relacionados entre sí pueden estar en el mismo archivo de tipos',
      'import type comunica que solo estás importando la información de tipos, no el módulo',
    ],
    exercise: {
      description:
        'Tienes un archivo app.ts con: `interface Tarea { id: number, texto: string, completada: boolean, prioridad: "alta" | "media" | "baja" }`, una función `filtrarTareas(tareas: Tarea[], filtro: Partial<Tarea>): Tarea[]`, y una función `renderizarTareas(tareas: Tarea[]): void`. Decide cuáles tipos mover a types.ts y cuáles dejar en app.ts, y justifica tu decisión con un comentario.',
      hint: 'Tarea es un tipo de dominio que probablemente se use en múltiples archivos (API, UI, utils). Muévelo. El tipo implícito del parámetro Partial<Tarea> puede quedarse inline. Agrega un comentario explicando la decisión.',
    },
    quiz: [
      {
        question: '¿Cuándo conviene mover un tipo a un archivo separado?',
        options: [
          'Siempre — todos los tipos deben estar en types.ts',
          'Cuando el tipo se usa en más de un archivo o cuando hace el archivo demasiado grande',
          'Solo cuando el tipo tiene más de 5 propiedades',
          'Nunca — los tipos deben estar con el código que los usa',
        ],
        correctAnswer: 'Cuando el tipo se usa en más de un archivo o cuando hace el archivo demasiado grande',
        correctFeedback:
          '¡Correcto! Mueve el tipo cuando se vuelve un candidato a duplicación (varios archivos lo necesitan) o cuando el archivo fuente se hace difícil de leer.',
        incorrectFeedback:
          'No hay una regla absoluta. Mueve el tipo cuando tiene sentido: lo usan varios archivos, el archivo fuente se vuelve muy grande, o el tipo es parte del contrato público del módulo.',
      },
      {
        question: '¿Qué hace `import type { Producto } from "./types"`?',
        options: [
          'Es igual que import normal pero más corto',
          'Importa solo la información de tipos — el import se borra completamente al compilar a JS',
          'Solo funciona con interfaces',
          'Hace el tipo readonly',
        ],
        correctAnswer: 'Importa solo la información de tipos — el import se borra completamente al compilar a JS',
        correctFeedback:
          '¡Exacto! import type es borrado completamente al compilar. Esto garantiza que no hay código de runtime importado accidentalmente solo por los tipos.',
        incorrectFeedback:
          'import type es una importación de solo tipos. En el JavaScript compilado, esta línea desaparece por completo porque los tipos no existen en runtime. Con import normal, el módulo podría ejecutarse aunque solo necesites sus tipos.',
      },
      {
        question: '¿Qué tipo local tiene sentido mantener en el mismo archivo en lugar de moverlo a types.ts?',
        options: [
          'La interfaz Producto que se usa en api.ts, ui.ts, y utils.ts',
          'Una interfaz de opciones que solo usa una función del mismo archivo',
          'El tipo de estado de la aplicación',
          'Todos los tipos deben estar en types.ts',
        ],
        correctAnswer: 'Una interfaz de opciones que solo usa una función del mismo archivo',
        correctFeedback:
          '¡Perfecto! Si un tipo solo se usa internamente en un archivo, puede quedarse ahí. Solo los tipos compartidos necesitan ir a types.ts.',
        incorrectFeedback:
          'Los tipos locales de implementación — opciones de configuración de una función, tipos auxiliares privados — pueden quedarse en el archivo. Solo cuando otros archivos los necesitan conviene moverlos.',
      },
      {
        question: '¿Por qué los tipos derivados (`type NuevoProducto = Omit<Producto, "id">`) deberían estar cerca de su tipo base?',
        options: [
          'TypeScript lo requiere',
          'Porque están conceptualmente ligados — si cambia Producto, NuevoProducto cambia también',
          'Para ahorrar memoria',
          'No tienen relación — pueden estar en cualquier lugar',
        ],
        correctAnswer: 'Porque están conceptualmente ligados — si cambia Producto, NuevoProducto cambia también',
        correctFeedback:
          '¡Correcto! NuevoProducto depende de Producto. Si los mantienes juntos, queda claro la relación y es más fácil actualizarlos cuando cambia la base.',
        incorrectFeedback:
          'Los tipos derivados (Omit, Pick, Partial) son variantes del tipo base. Mantenerlos cerca documenta la relación. Si Producto cambia, NuevoProducto cambia automáticamente — y el lector entiende por qué.',
      },
      {
        question: '¿Qué problema puede causar definir `interface Producto` en tanto `api.ts` como `ui.ts` por separado?',
        options: [
          'No hay problema — son archivos independientes',
          'Si cambia la estructura del producto, debes actualizar ambas definiciones y pueden desincronizarse',
          'TypeScript fusiona las dos interfaces automáticamente',
          'Solo puede existir una interface Producto en todo el proyecto',
        ],
        correctAnswer: 'Si cambia la estructura del producto, debes actualizar ambas definiciones y pueden desincronizarse',
        correctFeedback:
          '¡Exacto! Con dos definiciones separadas, agregar un campo nuevo al producto requiere actualizar ambos archivos. Si olvidas uno, hay dos versiones diferentes de Producto en tu app.',
        incorrectFeedback:
          'Dos definiciones de Producto en diferentes archivos se convierten en dos fuentes de verdad. Si una cambia y la otra no, tienes inconsistencias. Por eso se centraliza en types.ts.',
      },
    ],
  },
  {
    slug: 'archivo-types-ts',
    title: 'Archivo types.ts',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 189,
    description:
      'Aprende cómo usar un archivo types.ts para guardar tipos compartidos.',
    explanation: `## Archivo types.ts

El archivo \`types.ts\` es uno de los patrones más comunes en proyectos TypeScript. Centraliza los tipos de datos que se usan en múltiples partes del proyecto.

### Qué va en types.ts

- Interfaces de datos del dominio (Producto, Usuario, Pedido)
- Tipos derivados (NuevoProducto, ProductoPublico)
- Type aliases para uniones comunes
- Enums o tipos de estado

\`\`\`typescript
// types.ts
export interface Producto { ... }
export type NuevoProducto = Omit<Producto, 'id'>
export type EstadoPedido = 'pendiente' | 'procesando' | 'enviado' | 'entregado'
\`\`\`

### Qué NO va en types.ts

- Lógica de negocio (funciones que hacen cosas)
- Llamadas a APIs
- Manipulación del DOM
- Configuraciones de la aplicación

### Importar desde types.ts

\`\`\`typescript
// Importa solo tipos — sin código de runtime
import type { Producto, Usuario } from './types'

// o importa junto con otros valores
import { tipo, type Producto } from './types'  // TypeScript 5+
\`\`\`

### Cuándo types.ts se vuelve demasiado grande

Si types.ts tiene 200+ líneas, considera dividirlo:

\`\`\`
types/
├── index.ts       # Re-exporta todo
├── user.ts        # Tipos de usuario
├── product.ts     # Tipos de producto
└── api.ts         # Tipos de respuesta de API
\`\`\``,
    codeExample: `// types.ts — Tipos compartidos de la aplicación

// ===== ENTIDADES DEL DOMINIO =====

export interface Usuario {
  id: number
  nombre: string
  email: string
  rol: RolUsuario
  creadoEn: string
  activo: boolean
}

export interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria: CategoriaProducto
  stock: number
  imagen: string | null
  activo: boolean
}

export interface Pedido {
  id: number
  usuarioId: number
  lineas: LineaPedido[]
  total: number
  estado: EstadoPedido
  direccion: DireccionEnvio
  creadoEn: string
}

// ===== TIPOS SECUNDARIOS =====

export interface LineaPedido {
  productoId: number
  nombre: string  // Guardado al momento del pedido
  precio: number  // Guardado al momento del pedido
  cantidad: number
}

export interface DireccionEnvio {
  calle: string
  ciudad: string
  codigoPostal: string
  pais: string
}

// ===== UNIONES Y TIPOS DERIVADOS =====

export type RolUsuario = 'admin' | 'editor' | 'cliente'
export type EstadoPedido = 'pendiente' | 'procesando' | 'enviado' | 'entregado' | 'cancelado'
export type CategoriaProducto = 'tecnologia' | 'ropa' | 'hogar' | 'deportes' | 'libros'

// Tipos para crear/actualizar — sin campos del servidor
export type NuevoProducto = Omit<Producto, 'id' | 'activo'>
export type ActualizarProducto = Partial<Omit<Producto, 'id'>>
export type NuevoPedido = Omit<Pedido, 'id' | 'total' | 'estado' | 'creadoEn'>

// Tipos de vistas específicas
export type ProductoPublico = Pick<Producto, 'id' | 'nombre' | 'precio' | 'imagen' | 'categoria'>
export type UsuarioPublico = Pick<Usuario, 'id' | 'nombre'>

// ===== TIPOS DE ESTADO DE UI =====

export type EstadoCarga<T> =
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }

// ===== USO EN OTROS ARCHIVOS =====
// import type { Producto, NuevoProducto, EstadoCarga } from './types'
// import type { Usuario, RolUsuario } from './types'`,
    keyPoints: [
      'types.ts centraliza los tipos de dominio usados en múltiples archivos',
      'Solo va la definición de tipos — no lógica, no llamadas de red, no DOM',
      'Exporta todo con export para que otros archivos puedan importar lo que necesiten',
      'Los tipos derivados (Omit, Pick, Partial) relacionados con el dominio también van aquí',
      'Si types.ts crece demasiado, divide en tipos/usuario.ts, tipos/producto.ts, etc.',
    ],
    exercise: {
      description:
        'Crea un `types.ts` completo para una aplicación de blog con: interfaces `Articulo`, `Comentario`, `Autor`, y `Categoria`, tipos derivados `NuevoArticulo` (sin id, vistas, creadoEn), `ArticuloResumen` (solo id, titulo, resumen, autor, creadoEn), `ArticuloEditable` (todo opcional excepto id), y una union type `EstadoArticulo = "borrador" | "publicado" | "archivado"`. Asegúrate de que todos los tipos están exportados.',
      hint: 'Articulo debería tener campos como id, titulo, contenido, resumen, autorId, categoriaId, tags (string[]), estado (EstadoArticulo), vistas (number), creadoEn (string). Usa Omit para NuevoArticulo y Pick para ArticuloResumen.',
    },
    quiz: [
      {
        question: '¿Qué tipo de código debe ir en `types.ts`?',
        options: [
          'Funciones, clases y tipos — todo',
          'Solo definiciones de tipos e interfaces — sin lógica ni código ejecutable',
          'Solo interfaces, nunca type aliases',
          'Cualquier cosa relacionada con la aplicación',
        ],
        correctAnswer: 'Solo definiciones de tipos e interfaces — sin lógica ni código ejecutable',
        correctFeedback:
          '¡Correcto! types.ts es solo para definiciones de tipos. Las funciones van en utils.ts, las llamadas de red en api.ts. Separar los tipos facilita el uso de import type.',
        incorrectFeedback:
          'types.ts debe contener solo definiciones de tipos: interfaces, type aliases, enums. Si agregas funciones, deja de ser un archivo de solo tipos y pierde el beneficio de import type.',
      },
      {
        question: '¿Cuál es la ventaja de usar `import type { Producto }` en lugar de `import { Producto }`?',
        options: [
          'Es más rápido',
          'El import type se borra en la compilación — garantiza que no importas código ejecutable accidentalmente',
          'Solo funciona con TypeScript 5',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'El import type se borra en la compilación — garantiza que no importas código ejecutable accidentalmente',
        correctFeedback:
          '¡Exacto! import type es eliminado completamente al compilar. Es una señal explícita de que solo necesitas la información de tipos, no código ejecutable.',
        incorrectFeedback:
          'import type es borrado completamente al compilar. Esto significa que no hay impacto en el bundle de producción. Con import normal, si el módulo tiene efectos secundarios, se ejecutarían aunque solo necesites los tipos.',
      },
      {
        question: '¿Por qué exportar `type NuevoProducto = Omit<Producto, "id">` en types.ts?',
        options: [
          'Para hacer Producto más pequeño',
          'Para que toda la app use la misma definición de "producto para crear" sin duplicar la lógica de Omit',
          'TypeScript requiere tipos derivados en types.ts',
          'Para ocultar las propiedades de Producto',
        ],
        correctAnswer: 'Para que toda la app use la misma definición de "producto para crear" sin duplicar la lógica de Omit',
        correctFeedback:
          '¡Perfecto! Si api.ts y form.ts ambos necesitan el tipo "producto para crear", definir NuevoProducto en types.ts evita que cada uno escriba su propio Omit<Producto, "id">.',
        incorrectFeedback:
          'Los tipos derivados centralizados evitan duplicación. Sin types.ts, api.ts escribiría `Omit<Producto, "id">` y form.ts también, y podrían diferir. Centralizar garantiza que ambos usan la misma definición.',
      },
      {
        question: '¿Cuándo conviene dividir `types.ts` en múltiples archivos?',
        options: [
          'Desde el inicio del proyecto',
          'Cuando se vuelve muy grande (100+ líneas) y agrupa conceptos que no están relacionados',
          'Nunca — un archivo es siempre mejor',
          'Cuando hay más de 5 desarrolladores',
        ],
        correctAnswer: 'Cuando se vuelve muy grande (100+ líneas) y agrupa conceptos que no están relacionados',
        correctFeedback:
          '¡Correcto! Si types.ts tiene tipos de usuario, producto, pedido, envío, pagos, etc., dividirlo en types/user.ts, types/product.ts ayuda a encontrar los tipos más rápido.',
        incorrectFeedback:
          'Divide types.ts cuando se vuelve difícil de navegar. No lo hagas prematuramente. Cuando es grande y mezcla conceptos no relacionados, dividirlo por dominio tiene sentido.',
      },
      {
        question: '¿Qué tipo definitivamente NO debería estar en `types.ts`?',
        options: [
          'interface Usuario { id: number; nombre: string }',
          'type EstadoPedido = "pendiente" | "enviado"',
          'async function obtenerProductos(): Promise<Producto[]>',
          'type NuevoProducto = Omit<Producto, "id">',
        ],
        correctAnswer: 'async function obtenerProductos(): Promise<Producto[]>',
        correctFeedback:
          '¡Exacto! Una función async es código ejecutable, no un tipo. Va en api.ts o en el módulo que hace las peticiones. types.ts es solo para definiciones de tipos.',
        incorrectFeedback:
          'Una función async es código ejecutable con lógica de negocio. No es una definición de tipo. Va en api.ts o en otro módulo con lógica. types.ts es exclusivamente para definiciones de tipos.',
      },
    ],
  },
  {
    slug: 'archivo-interfaces-ts',
    title: 'Archivo interfaces.ts',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 190,
    description:
      'Aprende cuándo usar un archivo interfaces.ts y cómo evitar que se vuelva demasiado grande.',
    explanation: `## Archivo interfaces.ts

Algunos proyectos separan interfaces de type aliases en archivos distintos: \`interfaces.ts\` para las interfaces y \`types.ts\` para los type aliases. Es una convención opcional.

### ¿types.ts o interfaces.ts?

En muchos proyectos modernos, se usa un solo \`types.ts\` para todo. Pero si prefieres separar:

\`\`\`
src/
├── interfaces.ts   # Interfaces (structuras de objetos)
├── types.ts        # Type aliases (uniones, derivados)
└── ...
\`\`\`

### Cuándo tiene sentido interfaces.ts separado

1. **Tu proyecto usa muchas interfaces** y pocas type aliases
2. **El equipo prefiere** la distinción semántica (interfaces = objetos, types = álgebra de tipos)
3. **Tienes interfaces que extienden** otras — agruparlas en interfaces.ts las mantiene coherentes

### Cuándo NO separar

- Si el proyecto es pequeño — un solo \`types.ts\` es más simple
- Si mezclas interfaces y types frecuentemente — la separación artificial añade fricción
- Si el equipo no tiene preferencia — la consistencia es más importante que seguir esta convención

### Prevenir que interfaces.ts crezca demasiado

\`\`\`typescript
// ❌ Muy grande — mezcla todo sin relación
// interfaces.ts con 50 interfaces de dominio diferentes

// ✅ Mejor: dividir por dominio si crece demasiado
// interfaces/user.ts
// interfaces/product.ts
// interfaces/api.ts
// interfaces/index.ts ← re-exporta todo
\`\`\``,
    codeExample: `// interfaces.ts — Interfaces de la aplicación

// ===== INTERFACES DE DOMINIO =====

// Entidades base
export interface Identificable {
  id: number
}

export interface Timestampeable {
  creadoEn: string
  actualizadoEn: string
}

// Extender interfaces base
export interface Entidad extends Identificable, Timestampeable {
  activo: boolean
}

export interface Usuario extends Entidad {
  nombre: string
  email: string
  avatar: string | null
}

export interface Producto extends Entidad {
  nombre: string
  descripcion: string
  precio: number
  stock: number
}

// ===== INTERFACES DE API =====

export interface RespuestaAPI<T> {
  success: boolean
  data: T
  message?: string
  errors?: string[]
}

export interface RespuestaPaginada<T> {
  items: T[]
  total: number
  pagina: number
  porPagina: number
  hayMas: boolean
}

// ===== INTERFACES DE UI =====

export interface ComponenteConEstado {
  cargando: boolean
  error: string | null
}

export interface FormularioBase<T> {
  datos: Partial<T>
  errores: Partial<Record<keyof T, string>>
  enviando: boolean
}

// ===== INTERFACES DE CONFIGURACIÓN =====

export interface ConfiguracionAPI {
  baseUrl: string
  timeout: number
  reintentos: number
  headers?: Record<string, string>
}

// ===== USO EN OTROS ARCHIVOS =====
// Muchos proyectos no separan interfaces.ts de types.ts
// Pero si el proyecto es grande, puede ayudar a organizar

// types.ts podría contener solo tipos derivados y uniones:
// type NuevoUsuario = Omit<Usuario, 'id' | 'creadoEn' | 'actualizadoEn' | 'activo'>
// type EstadoUsuario = 'activo' | 'inactivo' | 'bloqueado'
// type RolUsuario = 'admin' | 'editor' | 'lector'`,
    keyPoints: [
      'No es obligatorio separar interfaces.ts de types.ts — en muchos proyectos un solo types.ts es suficiente',
      'La clave es la consistencia: elige un patrón y mantenlo en todo el proyecto',
      'Interfaces base reutilizables (Identificable, Timestampeable) justifican tener interfaces.ts',
      'Si interfaces.ts crece, divide por dominio: interfaces/usuario.ts, interfaces/producto.ts',
      'Prefiere un solo archivo hasta que el proyecto justifique la separación adicional',
    ],
    exercise: {
      description:
        'Para un proyecto de gestión escolar, decide si usar un solo `types.ts` o separar en `interfaces.ts` y `types.ts`. Si eliges separar, crea las interfaces base `Persona extends Identificable`, `Estudiante extends Persona`, `Profesor extends Persona`, y `Curso`. En types.ts pon los type aliases: `NivelCurso = "basico" | "intermedio" | "avanzado"`, `EstadoMatricula = "activa" | "inactiva" | "pendiente"`. Justifica tu elección.',
      hint: 'Para un proyecto escolar con jerarquía de entidades (Persona → Estudiante, Profesor), separar interfaces tiene sentido. Para la justificación: considera el tamaño del equipo, la complejidad del dominio, y la claridad semántica.',
    },
    quiz: [
      {
        question: '¿Es obligatorio separar `interfaces.ts` de `types.ts`?',
        options: [
          'Sí — TypeScript lo requiere',
          'No — es una convención opcional; muchos proyectos usan solo types.ts',
          'Sí — para proyectos con más de 10 archivos',
          'No — nunca se debe separar',
        ],
        correctAnswer: 'No — es una convención opcional; muchos proyectos usan solo types.ts',
        correctFeedback:
          '¡Correcto! Es una decisión del equipo. Muchos proyectos exitosos usan un solo types.ts. La consistencia es más importante que seguir una convención específica.',
        incorrectFeedback:
          'No hay requisito en TypeScript sobre separar interfaces de type aliases. Es una convención que algunos equipos adoptan. Lo importante es ser consistente con lo que decidas.',
      },
      {
        question: '¿Cuándo tiene más sentido tener un `interfaces.ts` separado?',
        options: [
          'Siempre',
          'Cuando hay muchas interfaces que extienden otras — la jerarquía beneficia de estar agrupada',
          'Solo en proyectos con TypeScript 5+',
          'Cuando el proyecto tiene más de 1000 líneas',
        ],
        correctAnswer: 'Cuando hay muchas interfaces que extienden otras — la jerarquía beneficia de estar agrupada',
        correctFeedback:
          '¡Exacto! Si tienes Entidad ← Producto ← ProductoDigital, tener esa jerarquía en un archivo hace explícita la relación entre ellas.',
        incorrectFeedback:
          'interfaces.ts tiene más sentido cuando hay una jerarquía clara de interfaces relacionadas. Para tipos sueltos sin relación de herencia, la separación no añade mucho valor.',
      },
      {
        question: '¿Cuál es el mayor riesgo de interfaces.ts o types.ts?',
        options: [
          'Que TypeScript no lo compile',
          'Que crezca sin control y se convierta en un "basurero" de tipos sin organización',
          'Que sea demasiado pequeño',
          'Que afecte el rendimiento en runtime',
        ],
        correctAnswer: 'Que crezca sin control y se convierta en un "basurero" de tipos sin organización',
        correctFeedback:
          '¡Correcto! Un types.ts con 50 interfaces de dominio no relacionadas es difícil de navegar. Cuando crece mucho, divídelo por dominio.',
        incorrectFeedback:
          'El riesgo real es que types.ts se convierta en un archivo donde se mete todo sin organización. Cuando eso pasa, considera dividirlo por dominio o área funcional.',
      },
      {
        question: '¿Qué valor aporta una interfaz base `Identificable { id: number }` que otras extienden?',
        options: [
          'Ninguno — es complejidad innecesaria',
          'Permite tipar funciones genéricas como buscarPorId<T extends Identificable> que funcionan con cualquier entidad',
          'Hace los objetos más rápidos',
          'TypeScript requiere una interfaz base',
        ],
        correctAnswer: 'Permite tipar funciones genéricas como buscarPorId<T extends Identificable> que funcionan con cualquier entidad',
        correctFeedback:
          '¡Perfecto! `function buscarPorId<T extends Identificable>(lista: T[], id: number): T | undefined` funciona con Producto, Usuario, Pedido — cualquier cosa que tenga id.',
        incorrectFeedback:
          'La interfaz base permite constraints en genéricos. `T extends Identificable` significa "cualquier tipo con id". Así creas funciones reutilizables que funcionan con cualquier entidad de tu dominio.',
      },
      {
        question: '¿Qué estrategia usar cuando interfaces.ts tiene demasiado contenido?',
        options: [
          'Eliminar algunas interfaces',
          'Dividirlo en subcarpetas: interfaces/usuario.ts, interfaces/producto.ts, con un index.ts que re-exporta todo',
          'Mover todas las interfaces a types.ts',
          'Ponerlo todo en un único archivo de 1000 líneas',
        ],
        correctAnswer: 'Dividirlo en subcarpetas: interfaces/usuario.ts, interfaces/producto.ts, con un index.ts que re-exporta todo',
        correctFeedback:
          '¡Exacto! La carpeta con index.ts mantiene el mismo import path (from "./interfaces") mientras divide el contenido en archivos manejables.',
        incorrectFeedback:
          'Cuando un archivo crece demasiado, divide por dominio. La carpeta interfaces/ con index.ts que re-exporta todo mantiene el API de importación estable mientras organiza mejor el contenido.',
      },
    ],
  },
  {
    slug: 'archivo-utils-ts',
    title: 'Archivo utils.ts',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 191,
    description:
      'Aprende a separar funciones reutilizables en archivos de utilidades.',
    explanation: `## Archivo utils.ts

El archivo \`utils.ts\` contiene funciones de utilidad: puras, reutilizables, y sin dependencias específicas del dominio de tu aplicación.

### Características de una buena función de utilidad

1. **Pura**: mismas entradas → mismas salidas, sin efectos secundarios
2. **Reutilizable**: sirve en múltiples partes del proyecto
3. **Sin dependencias de estado**: no depende de variables globales
4. **Sin DOM ni API**: solo lógica pura

\`\`\`typescript
// ✅ Buena utilidad — pura y reutilizable
function truncarTexto(texto: string, maxLength: number): string {
  if (texto.length <= maxLength) return texto
  return texto.slice(0, maxLength - 3) + '...'
}

// ❌ No va en utils.ts — tiene estado o dependencias externas
async function cargarDatosDelServidor(): Promise<Producto[]> { /* ... */ }
function actualizarDomConProductos(prods: Producto[]): void { /* ... */ }
\`\`\`

### Tipos de funciones para utils.ts

- **Formateo**: formatear fechas, precios, números, strings
- **Validación**: validar emails, URLs, rangos
- **Transformación**: convertir entre formatos
- **Colecciones**: agrupar, ordenar, filtrar listas
- **String**: truncar, capitalizar, normalizar
- **Números**: redondear, limitar, calcular`,
    codeExample: `// utils.ts — Funciones de utilidad tipadas

// ===== FORMATO =====

export function formatearPrecio(
  valor: number,
  moneda = 'USD',
  locale = 'es-ES'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: moneda,
  }).format(valor)
}

export function formatearFecha(
  fecha: Date | string,
  opciones?: Intl.DateTimeFormatOptions
): string {
  const d = typeof fecha === 'string' ? new Date(fecha) : fecha
  return d.toLocaleDateString('es-ES', opciones ?? {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function formatearTiempoRelativo(fecha: Date | string): string {
  const d = typeof fecha === 'string' ? new Date(fecha) : fecha
  const ahora = new Date()
  const diffMs = ahora.getTime() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMin < 1) return 'Hace un momento'
  if (diffMin < 60) return \`Hace \${diffMin} minuto\${diffMin > 1 ? 's' : ''}\`
  if (diffHours < 24) return \`Hace \${diffHours} hora\${diffHours > 1 ? 's' : ''}\`
  if (diffDays < 7) return \`Hace \${diffDays} día\${diffDays > 1 ? 's' : ''}\`
  return formatearFecha(d)
}

// ===== STRINGS =====

export function truncarTexto(texto: string, maxLength: number): string {
  if (texto.length <= maxLength) return texto
  return texto.slice(0, maxLength - 3).trimEnd() + '...'
}

export function capitalizarPrimera(texto: string): string {
  if (!texto) return ''
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}

export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')  // Remover diacríticos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// ===== VALIDACIÓN =====

export function esEmailValido(email: string): boolean {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
}

export function esURLValida(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// ===== COLECCIONES =====

export function agruparPor<T, K extends string>(
  lista: T[],
  obtenerClave: (item: T) => K
): Record<K, T[]> {
  return lista.reduce((grupos, item) => {
    const clave = obtenerClave(item)
    if (!grupos[clave]) grupos[clave] = []
    grupos[clave].push(item)
    return grupos
  }, {} as Record<K, T[]>)
}

export function unique<T>(lista: T[]): T[] {
  return [...new Set(lista)]
}

export function ordenarPor<T>(
  lista: T[],
  clave: keyof T,
  direccion: 'asc' | 'desc' = 'asc'
): T[] {
  return [...lista].sort((a, b) => {
    const va = a[clave]
    const vb = b[clave]
    const comparacion = va < vb ? -1 : va > vb ? 1 : 0
    return direccion === 'asc' ? comparacion : -comparacion
  })
}`,
    keyPoints: [
      'utils.ts contiene funciones puras, reutilizables y sin dependencias específicas del dominio',
      'Formateo, validación, transformación y manipulación de colecciones son buenos candidatos',
      'Las funciones de utils.ts no deben depender del DOM, APIs, ni estado global',
      'Cuando utils.ts crece, divide por área: utils/format.ts, utils/validation.ts, utils/collection.ts',
      'Las funciones de utils.ts son fáciles de testear porque son puras',
    ],
    exercise: {
      description:
        'Crea un utils.ts con al menos 5 funciones útiles para una tienda online: `calcularDescuento(precio: number, porcentaje: number): number`, `formatearPrecio(precio: number): string`, `validarCodigoPostal(codigo: string): boolean` (5 dígitos numéricos), `contarPorCategoria<T extends { categoria: string }>(items: T[]): Record<string, number>`, y `obtenerPrecioMasBarato(productos: { precio: number }[]): number | null`.',
      hint: 'Para formatearPrecio usa Intl.NumberFormat. Para validarCodigoPostal usa /^\\d{5}$/.test(codigo). Para contarPorCategoria usa reduce. Para obtenerPrecioMasBarato usa Math.min o .reduce — retorna null si el array está vacío.',
    },
    quiz: [
      {
        question: '¿Cuál es la característica más importante de una función que va en utils.ts?',
        options: [
          'Que sea corta',
          'Que sea pura — mismas entradas, mismas salidas, sin efectos secundarios',
          'Que use TypeScript avanzado',
          'Que tenga muchos parámetros',
        ],
        correctAnswer: 'Que sea pura — mismas entradas, mismas salidas, sin efectos secundarios',
        correctFeedback:
          '¡Correcto! Las funciones puras son predecibles y fáciles de testear. Si la función modifica estado global, llama a la API, o toca el DOM, no va en utils.ts.',
        incorrectFeedback:
          'La pureza es la característica clave. Una función pura no tiene efectos secundarios — no modifica estado externo, no llama APIs, no toca el DOM. Siempre retorna el mismo resultado para las mismas entradas.',
      },
      {
        question: '¿Por qué las funciones de utils.ts son más fáciles de testear?',
        options: [
          'Porque TypeScript las testea automáticamente',
          'Porque son puras — no dependen de APIs, DOM, ni estado externo que habría que mockear',
          'Porque son más cortas',
          'Porque no tienen tipos',
        ],
        correctAnswer: 'Porque son puras — no dependen de APIs, DOM, ni estado externo que habría que mockear',
        correctFeedback:
          '¡Exacto! Para testear una función pura, solo necesitas llamarla con inputs y verificar el output. No necesitas configurar mocks de fetch, DOM, ni estado de la aplicación.',
        incorrectFeedback:
          'Las funciones puras son testeables sin infraestructura adicional. `expect(truncarTexto("hola mundo", 5)).toBe("ho...")` es todo lo que necesitas. Sin DOM, sin fetch, sin estado.',
      },
      {
        question: '¿Qué función definitivamente NO debería estar en utils.ts?',
        options: [
          'formatearFecha(date: Date): string',
          'async function obtenerUsuario(id: number): Promise<Usuario>',
          'slugify(texto: string): string',
          'validarEmail(email: string): boolean',
        ],
        correctAnswer: 'async function obtenerUsuario(id: number): Promise<Usuario>',
        correctFeedback:
          '¡Correcto! obtenerUsuario hace una llamada de red — tiene un efecto secundario (fetch) y depende de un servidor externo. Va en api.ts, no en utils.ts.',
        incorrectFeedback:
          'obtenerUsuario hace una petición HTTP — tiene efectos secundarios y depende de un servidor externo. No es una función pura. Las otras opciones son funciones puras de transformación/validación.',
      },
      {
        question: '¿Cuándo dividir utils.ts en múltiples archivos?',
        options: [
          'Desde el inicio del proyecto',
          'Cuando el archivo crece y agrupa funciones de diferentes áreas sin relación',
          'Cuando hay más de 3 funciones',
          'Nunca — un archivo es más simple',
        ],
        correctAnswer: 'Cuando el archivo crece y agrupa funciones de diferentes áreas sin relación',
        correctFeedback:
          '¡Exacto! utils/format.ts, utils/validation.ts, utils/collection.ts tiene sentido cuando hay suficientes funciones en cada área para justificar el archivo separado.',
        incorrectFeedback:
          'Divide utils.ts cuando se vuelve grande y mezcla funciones de formato, validación, colecciones, etc. que no están relacionadas entre sí. La subdivisión hace más fácil encontrar la función que buscas.',
      },
      {
        question: '¿Qué hace que `agruparPor<T, K extends string>` sea más útil que una versión sin genéricos?',
        options: [
          'Los genéricos hacen la función más rápida',
          'Funciona con cualquier tipo de lista y el tipo de clave se infiere automáticamente',
          'Los genéricos son requeridos en utils.ts',
          'Sin genéricos, la función no compila',
        ],
        correctAnswer: 'Funciona con cualquier tipo de lista y el tipo de clave se infiere automáticamente',
        correctFeedback:
          '¡Perfecto! agruparPor<Producto, "categoria"> o agruparPor<Pedido, "estado"> — el mismo código sirve con cualquier tipo. Sin genéricos, tendrías que escribir una versión por tipo.',
        incorrectFeedback:
          'Con genéricos, agruparPor funciona con Producto[], Pedido[], o cualquier otra lista. TypeScript infiere el tipo de T según lo que pasas. Sin genéricos, tendrías que hacer una versión para cada tipo de lista.',
      },
    ],
  },
  {
    slug: 'importar-exportar-tipos',
    title: 'Importar y exportar tipos',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 192,
    description:
      'Aprende a usar import y export con tipos, incluyendo import type cuando sea útil.',
    explanation: `## Importar y exportar tipos

TypeScript ofrece varias formas de importar y exportar tipos. Entender las diferencias ayuda a organizar mejor el código.

### export normal vs export type

\`\`\`typescript
// types.ts
export interface Producto { id: number; nombre: string }  // Export normal
export type EstadoPedido = 'pendiente' | 'enviado'         // Export normal
\`\`\`

Ambas se pueden importar con import normal o import type.

### import normal vs import type

\`\`\`typescript
// a.ts
import { Producto } from './types'        // Import normal
import type { Producto } from './types'   // Import de solo tipo

// También puedes mezclar (TypeScript 4.5+)
import { calcular, type Producto } from './types'
\`\`\`

**Diferencia clave**: \`import type\` es eliminado completamente al compilar a JavaScript. \`import\` normal puede dejarse si el módulo tiene código ejecutable.

### Re-exportar tipos

\`\`\`typescript
// types/index.ts — re-exporta todo
export type { Producto } from './product'
export type { Usuario } from './user'

// O re-exportar todo
export * from './product'
export * from './user'
\`\`\`

### Cuándo usar import type

1. Cuando importas **solo tipos** (el módulo no tiene código runtime que necesites)
2. Para documentar claramente que el import no tiene impacto en runtime
3. Para optimización de bundlers — pueden omitir el módulo si solo se importan tipos

### Cuándo usar import normal

1. Cuando importas **valores** además de tipos (funciones, constantes, clases)
2. Cuando importas una **clase** para usar con \`instanceof\``,
    codeExample: `// ===== types.ts — Definiciones y exports =====
export interface Producto {
  id: number
  nombre: string
  precio: number
}

export interface Usuario {
  id: number
  email: string
  nombre: string
}

export type EstadoPedido = 'pendiente' | 'procesando' | 'enviado' | 'entregado'

// Función (valor — no solo tipo)
export function formatearPrecio(precio: number): string {
  return \`$\${precio.toFixed(2)}\`
}

// ===== api.ts — Importar tipos y valores =====

// import type para solo tipos (no necesitamos el módulo en runtime)
import type { Producto, Usuario } from './types'

// import normal cuando también importamos la función
import { formatearPrecio } from './types'

export async function obtenerProducto(id: number): Promise<Producto | null> {
  const resp = await fetch(\`/api/productos/\${id}\`)
  if (!resp.ok) return null
  return resp.json() as Promise<Producto>
}

export async function obtenerUsuario(id: number): Promise<Usuario | null> {
  const resp = await fetch(\`/api/usuarios/\${id}\`)
  if (!resp.ok) return null
  return resp.json() as Promise<Usuario>
}

// ===== main.ts — Importar mezcla de tipos y valores =====

// TypeScript 4.5+ — inline import type
import { obtenerProducto, obtenerUsuario, type EstadoPedido } from './api'
import type { Producto } from './types'  // Solo tipo — import type separado

// ===== types/index.ts — Re-exportación centralizada =====
// Si tienes carpeta types/ con múltiples archivos:

// export type { Producto } from './product'
// export type { Usuario, Rol } from './user'
// export type { EstadoPedido, EstadoEnvio } from './order'
// export { formatearFecha } from './utils'  // Valor — sin type

// ===== Importar desde la carpeta types/ =====
// import type { Producto, Usuario, EstadoPedido } from './types'
// ↑ TypeScript resuelve esto como './types/index.ts'

// ===== Exportar todo de un módulo =====
// export * from './product'         // Todos los exports (tipos y valores)
// export * as types from './types'  // Namespace — import { types } from ...`,
    keyPoints: [
      'import type es eliminado al compilar — no tiene impacto en runtime',
      'import type documenta claramente que solo necesitas información de tipos',
      'Puedes mezclar imports en una línea: `import { funcion, type MiTipo } from "./modulo"`',
      'export type { Tipo } from "./modulo" re-exporta solo el tipo, no el código del módulo',
      'Un index.ts en una carpeta actúa como barrel — re-exporta todo simplificando los imports',
    ],
    exercise: {
      description:
        'Crea una carpeta `api/` con tres archivos: `api/products.ts` que exporta `obtenerProductos(): Promise<Producto[]>` y `crearProducto(nuevo: NuevoProducto): Promise<Producto>`, `api/users.ts` que exporta `obtenerUsuario(id: number): Promise<Usuario | null>`, y `api/index.ts` que re-exporta todo de los dos archivos. Luego en `main.ts` importa todo desde `"./api"`. Usa import type donde corresponda.',
      hint: 'En api/index.ts usa `export * from "./products"` y `export * from "./users"`. En main.ts usa `import { obtenerProductos, obtenerUsuario } from "./api"` para los valores e `import type { Producto, Usuario } from "./types"` para los tipos.',
    },
    quiz: [
      {
        question: '¿Qué pasa con `import type { Producto } from "./types"` al compilar a JavaScript?',
        options: [
          'Se convierte en require("./types")',
          'La línea desaparece completamente — no hay código en el JS resultante',
          'Se convierte en import normal',
          'Genera un error si Producto no es una interfaz',
        ],
        correctAnswer: 'La línea desaparece completamente — no hay código en el JS resultante',
        correctFeedback:
          '¡Correcto! import type es borrado al compilar porque los tipos no existen en runtime. El JavaScript resultante no tiene ningún rastro de esa importación.',
        incorrectFeedback:
          'import type es una importación de tiempo de compilación. Los tipos no existen en JavaScript, así que la línea es borrada completamente. El módulo types.ts no es importado en el JS final.',
      },
      {
        question: '¿Cuándo NECESITAS usar import normal (no import type) para una clase?',
        options: [
          'Siempre — las clases son siempre valores',
          'Cuando usas la clase como tipo Y también con instanceof',
          'Nunca — las clases siempre usan import type',
          'Solo cuando la clase tiene métodos',
        ],
        correctAnswer: 'Cuando usas la clase como tipo Y también con instanceof',
        correctFeedback:
          '¡Exacto! instanceof requiere la clase en runtime. Si solo usas la clase como tipo, import type es suficiente. Pero para `error instanceof MiErrorClase`, necesitas import normal.',
        incorrectFeedback:
          'import type erases al compilar. Pero instanceof necesita la clase en runtime. Si importas con type y usas instanceof, el código JS generado fallará porque la clase no existe. Para instanceof, usa import normal.',
      },
      {
        question: '¿Qué hace `export * from "./products"` en un archivo index.ts?',
        options: [
          'Importa todos los tipos de products.ts',
          'Re-exporta todos los exports de products.ts — los hace disponibles desde index.ts',
          'Copia el código de products.ts en index.ts',
          'Solo re-exporta funciones, no tipos',
        ],
        correctAnswer: 'Re-exporta todos los exports de products.ts — los hace disponibles desde index.ts',
        correctFeedback:
          '¡Correcto! El archivo index.ts actúa como barrel. Todo lo que exporte products.ts estará disponible importando desde la carpeta (o desde index.ts).',
        incorrectFeedback:
          '`export * from "./products"` re-exporta todo lo que products.ts exporta. Permite que otros archivos hagan `import { obtenerProductos } from "./api"` en lugar de `from "./api/products"`.',
      },
      {
        question: '¿Cuál es el patrón "barrel" en organización de módulos?',
        options: [
          'Un archivo de errores',
          'Un index.ts que re-exporta todo de una carpeta — simplifica los imports para los usuarios',
          'Un archivo de configuración',
          'El primer archivo del proyecto',
        ],
        correctAnswer: 'Un index.ts que re-exporta todo de una carpeta — simplifica los imports para los usuarios',
        correctFeedback:
          '¡Exacto! El barrel (barril) centraliza los exports. `import { A, B, C } from "./mi-carpeta"` en lugar de tres imports separados.',
        incorrectFeedback:
          'Un barrel es un index.ts que actúa como punto de entrada para una carpeta. Re-exporta lo que otros archivos necesitan usar. Simplifica los paths de importación.',
      },
      {
        question: '¿Cuál es la sintaxis para inline import type en TypeScript 4.5+?',
        options: [
          'type { Producto } from "./types"',
          'import { type Producto, calcular } from "./modulo"',
          'import type { Producto }, { calcular } from "./modulo"',
          'import(type Producto) from "./modulo"',
        ],
        correctAnswer: 'import { type Producto, calcular } from "./modulo"',
        correctFeedback:
          '¡Correcto! `import { type Producto, calcular }` mezcla en una línea: Producto se importa como tipo (se borra en compilación), calcular se importa como valor (permanece en JS).',
        incorrectFeedback:
          'La sintaxis inline de TypeScript 4.5+ permite mezclar tipos y valores en un import: `import { type MiTipo, miValor }`. El `type` antes del nombre indica que esa importación específica es de solo tipo.',
      },
    ],
  },
  {
    slug: 'evitar-archivos-gigantes',
    title: 'Evitar archivos gigantes',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 193,
    description:
      'Aprende a dividir código por responsabilidad para evitar archivos difíciles de mantener.',
    explanation: `## Evitar archivos gigantes

Un archivo con 500+ líneas suele ser una señal de que hace demasiadas cosas. Dividirlo mejora la mantenibilidad.

### Señales de que un archivo es demasiado grande

1. Scrolleas mucho para encontrar una función
2. El archivo tiene funciones de naturaleza muy diferente
3. Varias personas del equipo lo editan frecuentemente (muchos conflictos)
4. El nombre del archivo ya no describe bien su contenido

### El principio de responsabilidad única

Cada archivo debería tener **una razón para cambiar**. Si tu archivo cambia cuando:
- cambias la lógica de API
- cambias el formato de fechas
- cambias las validaciones

...entonces tiene demasiadas responsabilidades.

### Estrategia de división

\`\`\`
// Antes: app.ts con 600 líneas
// - 10 tipos de datos
// - 5 funciones de fetch
// - 8 funciones de formato
// - 6 funciones de validación
// - 3 funciones de DOM

// Después: 5 archivos con 100-150 líneas cada uno
types.ts       // Tipos de datos
api.ts         // Funciones de fetch
utils.ts       // Formato y validación
ui.ts          // Manipulación del DOM
main.ts        // Punto de entrada
\`\`\`

### No sobre-dividir

El objetivo es claridad, no minimalismo. Un archivo de 80 líneas no necesita dividirse. Si después de dividir tienes archivos de 10 líneas, quizás dividiste demasiado.`,
    codeExample: `// ❌ ANTES: app.ts gigante (ejemplo condensado)
// Este archivo hace demasiadas cosas

// --- TIPOS ---
interface Producto { id: number; nombre: string; precio: number }
interface Usuario { id: number; email: string }
type EstadoPedido = 'pendiente' | 'enviado'

// --- API ---
async function obtenerProductos(): Promise<Producto[]> {
  return fetch('/api/productos').then(r => r.json()) as Promise<Producto[]>
}
async function obtenerUsuario(id: number): Promise<Usuario | null> {
  const r = await fetch(\`/api/usuarios/\${id}\`)
  return r.ok ? r.json() as Promise<Usuario> : null
}

// --- FORMATO ---
function formatearPrecio(p: number): string { return \`$\${p.toFixed(2)}\` }
function formatearFecha(f: string): string { return new Date(f).toLocaleDateString('es-ES') }
function truncarTexto(t: string, n: number): string { return t.length > n ? t.slice(0, n) + '...' : t }

// --- VALIDACIÓN ---
function validarEmail(e: string): boolean { return /^[^\\s@]+@[^\\s@]+/.test(e) }
function validarPrecio(p: number): boolean { return p > 0 && p < 100000 }

// --- DOM ---
function mostrarProductos(prods: Producto[]): void {
  const el = document.getElementById('lista')
  if (!el) return
  el.textContent = ''
  prods.forEach(p => {
    const d = document.createElement('div')
    d.textContent = \`\${p.nombre} - \${formatearPrecio(p.precio)}\`
    el.appendChild(d)
  })
}

// ✅ DESPUÉS: Separado en archivos con responsabilidad única

// types.ts
export interface Producto { id: number; nombre: string; precio: number }
export interface Usuario { id: number; email: string }
export type EstadoPedido = 'pendiente' | 'enviado'

// api.ts
import type { Producto, Usuario } from './types'
export async function obtenerProductos(): Promise<Producto[]> {
  const resp = await fetch('/api/productos')
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Producto[]>
}
export async function obtenerUsuario(id: number): Promise<Usuario | null> {
  const resp = await fetch(\`/api/usuarios/\${id}\`)
  return resp.ok ? resp.json() as Promise<Usuario> : null
}

// utils.ts
export function formatearPrecio(precio: number): string { return \`$\${precio.toFixed(2)}\` }
export function formatearFecha(fecha: string): string {
  return new Date(fecha).toLocaleDateString('es-ES')
}
export function truncarTexto(texto: string, max: number): string {
  return texto.length > max ? texto.slice(0, max).trimEnd() + '...' : texto
}
export function validarEmail(email: string): boolean { return /^[^\\s@]+@[^\\s@]+/.test(email) }
export function validarPrecio(precio: number): boolean { return precio > 0 && precio < 100000 }

// ui.ts
import type { Producto } from './types'
import { formatearPrecio } from './utils'
export function mostrarProductos(productos: Producto[]): void {
  const lista = document.getElementById('lista')
  if (!lista) return
  lista.textContent = ''
  productos.forEach((p) => {
    const div = document.createElement('div')
    div.textContent = \`\${p.nombre} - \${formatearPrecio(p.precio)}\`
    lista.appendChild(div)
  })
}

// main.ts — Punto de entrada
import { obtenerProductos } from './api'
import { mostrarProductos } from './ui'
document.addEventListener('DOMContentLoaded', async () => {
  const productos = await obtenerProductos()
  mostrarProductos(productos)
})`,
    keyPoints: [
      'Un archivo con 300+ líneas que mezcla tipos, API, formato, y DOM probablemente hace demasiado',
      'El principio de responsabilidad única: cada archivo debe tener una razón para cambiar',
      'Dividir por responsabilidad (qué hace) es más útil que dividir por tamaño arbitrario',
      'No sobre-dividas: archivos de 10-20 líneas pueden ser señal de sobre-ingeniería',
      'El punto de entrada (main.ts) une todos los módulos y tiene el mínimo de lógica propia',
    ],
    exercise: {
      description:
        'Tienes un archivo enorme `todo-en-uno.ts` con: 3 interfaces (Tarea, Etiqueta, Usuario), 4 funciones de API (fetchTareas, crearTarea, actualizarTarea, eliminarTarea), 3 utilidades (formatearFecha, truncar, validarTexto), y 2 funciones de DOM (renderizarTareas, mostrarError). Diseña cómo dividirlo en archivos separados y escribe las líneas de export/import para cada uno.',
      hint: 'La estructura natural sería: types.ts (interfaces), api.ts (funciones de fetch), utils.ts (formatear, truncar, validar), ui.ts (renderizar, mostrarError), main.ts (importa api y ui, inicializa). Asegúrate de que cada archivo importa solo lo que necesita.',
    },
    quiz: [
      {
        question: '¿Cuál es una señal clara de que un archivo TypeScript es demasiado grande?',
        options: [
          'Tiene más de 50 líneas',
          'Mezcla tipos, lógica de API, validaciones y manipulación del DOM en un solo lugar',
          'Tiene más de 5 funciones exportadas',
          'Usa muchos tipos genéricos',
        ],
        correctAnswer: 'Mezcla tipos, lógica de API, validaciones y manipulación del DOM en un solo lugar',
        correctFeedback:
          '¡Correcto! Mezclar responsabilidades diferentes es la señal clave. Un archivo puede tener 300 líneas si todas son de la misma naturaleza.',
        incorrectFeedback:
          'El tamaño no es la métrica clave — la responsabilidad sí. Si un archivo maneja API, DOM, validaciones, y tipos, tiene múltiples responsabilidades. Eso es lo que lo hace difícil de mantener.',
      },
      {
        question: '¿Cuál es el "principio de responsabilidad única" aplicado a archivos?',
        options: [
          'Cada archivo tiene una sola función',
          'Cada archivo tiene una sola razón para cambiar — una sola área de responsabilidad',
          'Cada archivo tiene una sola línea de código',
          'Cada archivo importa solo de un lugar',
        ],
        correctAnswer: 'Cada archivo tiene una sola razón para cambiar — una sola área de responsabilidad',
        correctFeedback:
          '¡Exacto! Si api.ts solo cambia cuando cambia la API, y utils.ts solo cambia cuando cambia el formato de datos, cada uno tiene una sola razón para cambiar.',
        incorrectFeedback:
          'El principio de responsabilidad única: un archivo debería tener una sola razón para cambiar. Si cambia cuando cambias el API Y cuando cambias el DOM, tiene dos responsabilidades.',
      },
      {
        question: '¿Por qué dividir en archivos separados facilita el trabajo en equipo?',
        options: [
          'Cada persona trabaja en un lenguaje diferente',
          'Menos conflictos de git — personas diferentes editan archivos diferentes',
          'TypeScript compila más rápido',
          'Los archivos pequeños son más seguros',
        ],
        correctAnswer: 'Menos conflictos de git — personas diferentes editan archivos diferentes',
        correctFeedback:
          '¡Correcto! Si Ana trabaja en la API y Carlos trabaja en la UI, cada uno edita su archivo. Con un archivo gigante, ambos estarían editando el mismo archivo y habría conflictos.',
        incorrectFeedback:
          'Con archivos separados, diferentes personas pueden trabajar en paralelo en áreas diferentes sin conflictos de git. Un archivo gigante es un punto de conflicto permanente.',
      },
      {
        question: '¿Cuándo es correcto tener un archivo de 20 líneas?',
        options: [
          'Nunca — los archivos deben ser grandes para justificar su existencia',
          'Cuando esas 20 líneas tienen una responsabilidad clara y bien definida',
          'Solo para archivos de tipos',
          'Solo para main.ts',
        ],
        correctAnswer: 'Cuando esas 20 líneas tienen una responsabilidad clara y bien definida',
        correctFeedback:
          '¡Perfecto! El tamaño no define la calidad. Un archivo de 20 líneas con una responsabilidad clara es mejor que un archivo de 20 líneas arbitrariamente dividido de uno más grande.',
        incorrectFeedback:
          'Un archivo puede ser pequeño si su responsabilidad es pequeña y clara. No hay una longitud mínima. Lo importante es que la división tenga sentido conceptual, no solo reducir el número de líneas.',
      },
      {
        question: '¿Cuál es el rol del archivo `main.ts` en una arquitectura modular?',
        options: [
          'Contiene toda la lógica de la aplicación',
          'Es el punto de entrada — importa y une los módulos, contiene mínima lógica propia',
          'Contiene todos los tipos',
          'Es el archivo más grande',
        ],
        correctAnswer: 'Es el punto de entrada — importa y une los módulos, contiene mínima lógica propia',
        correctFeedback:
          '¡Exacto! main.ts importa de api.ts, ui.ts, utils.ts, etc. y los une. Su propia lógica es mínima: inicializar la app, configurar event listeners iniciales.',
        incorrectFeedback:
          'main.ts es el orquestador. Importa los módulos especializados y los conecta. Su propio código es mínimo — la lógica real está en los módulos especializados.',
      },
    ],
  },
  {
    slug: 'organizacion-por-dominio',
    title: 'Organización por dominio',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 194,
    description:
      'Aprende a organizar archivos según áreas del proyecto como users, products, auth, api o components.',
    explanation: `## Organización por dominio

Cuando un proyecto crece, organizar por responsabilidad técnica (types/, api/, utils/) puede volverse insuficiente. La organización por dominio agrupa todo lo relacionado con un área juntos.

### Organización técnica (por tipo de archivo)

\`\`\`
src/
├── types/       # Todos los tipos
├── api/         # Todas las peticiones
├── utils/       # Todas las utilidades
└── ui/          # Todo el DOM
\`\`\`

**Problema**: para cambiar la funcionalidad de "usuarios", tienes que editar archivos en 4 carpetas diferentes.

### Organización por dominio (por área funcional)

\`\`\`
src/
├── users/
│   ├── types.ts        # Tipos de usuario
│   ├── api.ts          # API de usuarios
│   ├── utils.ts        # Utilidades de usuarios
│   └── ui.ts           # UI de usuarios
├── products/
│   ├── types.ts
│   ├── api.ts
│   └── ui.ts
├── auth/
│   ├── types.ts
│   └── api.ts
└── shared/             # Compartido entre dominios
    ├── types.ts
    └── utils.ts
\`\`\`

**Ventaja**: para cambiar la funcionalidad de "usuarios", todos los archivos relevantes están en una sola carpeta.

### Cuándo usar cada enfoque

- **Por tipo**: proyectos pequeños con pocos dominios
- **Por dominio**: proyectos medianos a grandes, cuando los dominios tienen lógica compleja propia`,
    codeExample: `// Estructura por dominio para una tienda online

// ===== products/ =====

// products/types.ts
export interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
  stock: number
}

export type NuevoProducto = Omit<Producto, 'id'>
export type FiltroProdutos = Partial<Pick<Producto, 'categoria'>> & { precioMax?: number }

// products/api.ts
import type { Producto, NuevoProducto } from './types'

export async function listarProductos(filtro?: { categoria?: string }): Promise<Producto[]> {
  const params = filtro?.categoria ? \`?categoria=\${filtro.categoria}\` : ''
  const resp = await fetch(\`/api/productos\${params}\`)
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Producto[]>
}

export async function crearProducto(nuevo: NuevoProducto): Promise<Producto> {
  const resp = await fetch('/api/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevo),
  })
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
  return resp.json() as Promise<Producto>
}

// products/ui.ts
import type { Producto } from './types'

export function renderizarListaProductos(productos: Producto[], contenedorId: string): void {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) return
  contenedor.textContent = ''
  productos.forEach((p) => {
    const card = document.createElement('div')
    card.className = 'producto-card'
    card.dataset.id = String(p.id)
    const nombre = document.createElement('h3')
    nombre.textContent = p.nombre
    const precio = document.createElement('p')
    precio.textContent = \`$\${p.precio.toFixed(2)}\`
    card.append(nombre, precio)
    contenedor.appendChild(card)
  })
}

// ===== users/ =====

// users/types.ts
export interface Usuario {
  id: number
  nombre: string
  email: string
  rol: 'admin' | 'cliente'
}

// users/api.ts
import type { Usuario } from './types'

export async function obtenerPerfil(id: number): Promise<Usuario | null> {
  const resp = await fetch(\`/api/usuarios/\${id}\`)
  return resp.ok ? resp.json() as Promise<Usuario> : null
}

// ===== shared/ — código compartido entre dominios =====

// shared/types.ts
export interface Paginacion {
  pagina: number
  porPagina: number
  total: number
}

export type EstadoCarga<T> =
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }

// shared/utils.ts
export function formatearPrecio(precio: number): string {
  return \`$\${precio.toFixed(2)}\`
}

// ===== main.ts — Importar de los dominios =====
import { listarProductos } from './products/api'
import { renderizarListaProductos } from './products/ui'
import { obtenerPerfil } from './users/api'

document.addEventListener('DOMContentLoaded', async () => {
  const productos = await listarProductos()
  renderizarListaProductos(productos, 'catalogo')
})`,
    keyPoints: [
      'La organización por dominio agrupa types, api, utils, y ui por área funcional',
      'Facilita el trabajo en equipo — un desarrollador trabaja en una carpeta específica',
      'La carpeta shared/ contiene lo que usan múltiples dominios',
      'No hay una organización "correcta" — elige la que tenga más sentido para tu proyecto',
      'Puedes combinar ambos enfoques: shared/ por tipo y dominios específicos por área',
    ],
    exercise: {
      description:
        'Diseña la estructura de carpetas para una aplicación de gestión de una biblioteca con: libros (CRUD), autores (consulta), préstamos (crear, devolver, listar por usuario), y autenticación (login, logout). Para cada dominio, lista qué archivos tendría (types.ts, api.ts, ui.ts) y qué iría en shared/. No es necesario escribir el código completo — solo la estructura y los tipos/funciones principales en cada archivo.',
      hint: 'shared/ podría tener: types.ts con EstadoCarga<T>, Paginacion, y utils.ts con formatearFecha. Préstamos podría tener una interface Prestamo que referencie Libro y Usuario por id. auth/ solo necesita api.ts con login/logout.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre organización técnica y organización por dominio?',
        options: [
          'No hay diferencia práctica',
          'Técnica agrupa por tipo de archivo (types/, api/); por dominio agrupa por área funcional (users/, products/)',
          'La organización técnica es para TypeScript; la por dominio para JavaScript',
          'La organización por dominio solo funciona con React',
        ],
        correctAnswer: 'Técnica agrupa por tipo de archivo (types/, api/); por dominio agrupa por área funcional (users/, products/)',
        correctFeedback:
          '¡Correcto! Con organización técnica, todos los tipos juntos, todas las APIs juntas. Con organización por dominio, todo lo de "usuarios" junto.',
        incorrectFeedback:
          'La diferencia es el eje de organización. Técnica: qué hace el archivo (types, api, utils). Por dominio: qué área de negocio cubre (usuarios, productos, pedidos).',
      },
      {
        question: '¿Para qué sirve la carpeta `shared/` en la organización por dominio?',
        options: [
          'Para guardar los tipos de TypeScript',
          'Para código que necesitan múltiples dominios — utilidades genéricas, tipos comunes',
          'Para la configuración del proyecto',
          'Es obligatoria en todos los proyectos',
        ],
        correctAnswer: 'Para código que necesitan múltiples dominios — utilidades genéricas, tipos comunes',
        correctFeedback:
          '¡Exacto! Si tanto users/ como products/ necesitan formatearFecha, esa función va en shared/utils.ts. Si ambos usan EstadoCarga<T>, va en shared/types.ts.',
        incorrectFeedback:
          'shared/ contiene lo que múltiples dominios necesitan: tipos genéricos (EstadoCarga<T>), utilidades comunes (formatearFecha), errores compartidos. Evita duplicar código entre dominios.',
      },
      {
        question: '¿Cuándo conviene cambiar de organización técnica a organización por dominio?',
        options: [
          'Desde el inicio siempre',
          'Cuando el proyecto crece y cada dominio tiene suficiente complejidad propia',
          'Solo en proyectos con React',
          'Cuando hay más de 3 desarrolladores',
        ],
        correctAnswer: 'Cuando el proyecto crece y cada dominio tiene suficiente complejidad propia',
        correctFeedback:
          '¡Correcto! Para un proyecto pequeño, la organización técnica es más simple. Cuando products tiene su propia lógica compleja (filtros, carrito, reviews), agruparla en una carpeta facilita el desarrollo.',
        incorrectFeedback:
          'La organización por dominio tiene más valor cuando cada dominio es complejo. Si tu proyecto tiene 5 archivos en total, la organización técnica es suficiente.',
      },
      {
        question: '¿Cómo referencian tipos entre dominios en organización por dominio?',
        options: [
          'No pueden referenciarse — cada dominio es aislado',
          'Importan directamente del otro dominio o de shared/ si el tipo es verdaderamente compartido',
          'Todos los tipos deben estar en shared/',
          'Usan any para cruzar dominios',
        ],
        correctAnswer: 'Importan directamente del otro dominio o de shared/ si el tipo es verdaderamente compartido',
        correctFeedback:
          '¡Exacto! Si Pedido en orders/ necesita Usuario, puede importar `from "../users/types"`. Si muchos dominios necesitan el tipo, va en shared/',
        incorrectFeedback:
          'Los dominios pueden importar de otros dominios. Una Prestamo puede referenciar Libro. Si la referencia es directa (uno a uno), importa del otro dominio. Si es usada por muchos, mueve a shared/.',
      },
      {
        question: '¿Qué problema resuelve la organización por dominio para el trabajo en equipo?',
        options: [
          'Elimina los conflictos de git completamente',
          'Cada persona puede trabajar en un dominio diferente sin editar los mismos archivos',
          'Permite que varias personas editen el mismo archivo a la vez',
          'Hace el código más rápido',
        ],
        correctAnswer: 'Cada persona puede trabajar en un dominio diferente sin editar los mismos archivos',
        correctFeedback:
          '¡Correcto! Ana trabaja en users/, Carlos en products/, María en auth/. Rara vez editan los mismos archivos, así que hay menos conflictos de git.',
        incorrectFeedback:
          'Con organización por dominio, diferentes personas pueden trabajar en paralelo en áreas diferentes. Ana en users/ y Carlos en products/ raramente tocan los mismos archivos.',
      },
    ],
  },
  {
    slug: 'mini-practica-estructura-proyecto-tipado',
    title: 'Mini práctica: estructura de proyecto tipado',
    module: 'Organización de proyectos TypeScript',
    moduleNumber: 24,
    order: 195,
    description:
      'Organiza un pequeño proyecto TypeScript separando tipos, utilidades, datos y lógica principal.',
    explanation: `## Mini práctica: estructura de proyecto tipado

En esta lección organizarás un proyecto TypeScript pequeño pero completo. Aplicarás todos los patrones de organización aprendidos en el módulo.

### El proyecto: Gestor de tareas

Un gestor de tareas simple con:
- Crear, completar y eliminar tareas
- Filtrar por estado (todas, pendientes, completadas)
- Persistir en localStorage
- Mostrar en el DOM

### La estructura objetivo

\`\`\`
src/
├── types.ts      # Tipos de datos del dominio
├── storage.ts    # Guardar y cargar desde localStorage
├── utils.ts      # Funciones de utilidad
├── ui.ts         # Funciones de DOM
└── main.ts       # Punto de entrada
\`\`\`

### Principios a aplicar

1. **types.ts**: solo tipos, sin lógica
2. **storage.ts**: solo interacción con localStorage
3. **utils.ts**: funciones puras (filtrar, ordenar)
4. **ui.ts**: solo manipulación del DOM
5. **main.ts**: une todo, mínima lógica propia

### Beneficios de esta estructura

- Si cambias cómo se guardan las tareas, solo editas storage.ts
- Si cambias la UI, solo editas ui.ts
- Si cambias los tipos de tarea, actualizas types.ts y TypeScript te dice dónde más hay que cambiar`,
    codeExample: `// ===== types.ts =====
export interface Tarea {
  id: string
  texto: string
  completada: boolean
  prioridad: 'alta' | 'media' | 'baja'
  creadaEn: string  // ISO string
}

export type FiltroTareas = 'todas' | 'pendientes' | 'completadas'
export type NuevaTarea = Omit<Tarea, 'id' | 'creadaEn' | 'completada'>

// ===== storage.ts =====
import type { Tarea } from './types'

const STORAGE_KEY = 'tareas-app'

export function cargarTareas(): Tarea[] {
  try {
    const datos = localStorage.getItem(STORAGE_KEY)
    if (!datos) return []
    const parseado: unknown = JSON.parse(datos)
    if (!Array.isArray(parseado)) return []
    // Validación básica antes de confiar en los datos
    return parseado.filter((item): item is Tarea => (
      typeof item === 'object' && item !== null &&
      typeof (item as { id?: unknown }).id === 'string' &&
      typeof (item as { texto?: unknown }).texto === 'string' &&
      typeof (item as { completada?: unknown }).completada === 'boolean'
    ))
  } catch {
    return []
  }
}

export function guardarTareas(tareas: Tarea[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas))
}

// ===== utils.ts =====
import type { Tarea, FiltroTareas, NuevaTarea } from './types'

export function crearTarea(datos: NuevaTarea): Tarea {
  return {
    id: crypto.randomUUID(),
    texto: datos.texto,
    prioridad: datos.prioridad,
    completada: false,
    creadaEn: new Date().toISOString(),
  }
}

export function filtrarTareas(tareas: Tarea[], filtro: FiltroTareas): Tarea[] {
  switch (filtro) {
    case 'todas': return tareas
    case 'pendientes': return tareas.filter((t) => !t.completada)
    case 'completadas': return tareas.filter((t) => t.completada)
  }
}

export function toggleCompletada(tareas: Tarea[], id: string): Tarea[] {
  return tareas.map((t) => t.id === id ? { ...t, completada: !t.completada } : t)
}

export function eliminarTarea(tareas: Tarea[], id: string): Tarea[] {
  return tareas.filter((t) => t.id !== id)
}

// ===== ui.ts =====
import type { Tarea, FiltroTareas } from './types'

export function renderizarTareas(
  tareas: Tarea[],
  contenedorId: string,
  onToggle: (id: string) => void,
  onEliminar: (id: string) => void
): void {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) return
  contenedor.textContent = ''

  if (tareas.length === 0) {
    const p = document.createElement('p')
    p.textContent = 'No hay tareas'
    contenedor.appendChild(p)
    return
  }

  tareas.forEach((tarea) => {
    const li = document.createElement('li')
    li.className = \`tarea \${tarea.completada ? 'completada' : ''} prioridad-\${tarea.prioridad}\`

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.checked = tarea.completada
    check.addEventListener('change', () => onToggle(tarea.id))

    const texto = document.createElement('span')
    texto.textContent = tarea.texto  // textContent — seguro ✅

    const btn = document.createElement('button')
    btn.textContent = '×'
    btn.addEventListener('click', () => onEliminar(tarea.id))

    li.append(check, texto, btn)
    contenedor.appendChild(li)
  })
}

// ===== main.ts =====
import { cargarTareas, guardarTareas } from './storage'
import { crearTarea, filtrarTareas, toggleCompletada, eliminarTarea } from './utils'
import { renderizarTareas } from './ui'
import type { Tarea, FiltroTareas } from './types'

let tareas: Tarea[] = cargarTareas()
let filtroActivo: FiltroTareas = 'todas'

function actualizar(): void {
  const visibles = filtrarTareas(tareas, filtroActivo)
  renderizarTareas(visibles, 'lista-tareas',
    (id) => { tareas = toggleCompletada(tareas, id); guardarTareas(tareas); actualizar() },
    (id) => { tareas = eliminarTarea(tareas, id); guardarTareas(tareas); actualizar() }
  )
}

document.addEventListener('DOMContentLoaded', () => {
  actualizar()

  document.querySelector<HTMLFormElement>('#form-nueva')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector<HTMLInputElement>('#input-tarea')
    if (!input?.value.trim()) return
    tareas = [...tareas, crearTarea({ texto: input.value.trim(), prioridad: 'media' })]
    guardarTareas(tareas)
    input.value = ''
    actualizar()
  })
})`,
    keyPoints: [
      'types.ts define los tipos; storage.ts maneja persistencia; utils.ts tiene lógica pura; ui.ts toca el DOM',
      'main.ts es el orquestador — importa de todos los módulos y contiene mínima lógica propia',
      'Si cambias el almacenamiento (de localStorage a IndexedDB), solo cambias storage.ts',
      'Los callbacks (onToggle, onEliminar) permiten que ui.ts renderice sin conocer la lógica de negocio',
      'Validar datos de localStorage con type guards protege contra datos corruptos o mal formados',
    ],
    exercise: {
      description:
        'Extiende el proyecto del gestor de tareas con: (1) agrega `etiquetas: string[]` a la interfaz Tarea en types.ts y observa qué archivos TypeScript marca como errores, (2) agrega `filtrarPorEtiqueta(tareas: Tarea[], etiqueta: string): Tarea[]` en utils.ts, (3) actualiza la función de validación en storage.ts para incluir la verificación de etiquetas, (4) muestra las etiquetas en ui.ts como badges junto al texto de la tarea.',
      hint: 'Al agregar etiquetas a la interfaz, TypeScript te indicará todos los lugares donde se crea un objeto Tarea que no incluye etiquetas. Esto es el sistema de tipos guiándote. En utils.ts: `tareas.filter(t => t.etiquetas.includes(etiqueta))`. En ui.ts usa textContent para cada etiqueta (no innerHTML).',
    },
    quiz: [
      {
        question: '¿Por qué la función `crearTarea` en utils.ts y no en main.ts?',
        options: [
          'TypeScript lo requiere en utils.ts',
          'Es una función pura y reutilizable — si la necesitas en otra parte de la app, puede importarse de utils',
          'main.ts no puede tener funciones',
          'No hay diferencia — ponerla donde se prefiera',
        ],
        correctAnswer: 'Es una función pura y reutilizable — si la necesitas en otra parte de la app, puede importarse de utils',
        correctFeedback:
          '¡Correcto! crearTarea es pura, reutilizable, y testeable. En main.ts es lógica específica de la aplicación. La separación permite usar crearTarea en tests o en otra parte sin depender de main.',
        incorrectFeedback:
          'Las funciones puras van en utils.ts porque son reutilizables e independientes del estado de la app. main.ts es para el flujo de la aplicación, no para lógica reutilizable.',
      },
      {
        question: '¿Por qué pasar callbacks (onToggle, onEliminar) a `renderizarTareas` en lugar de importar la lógica en ui.ts?',
        options: [
          'Para hacer ui.ts más complicado',
          'Para que ui.ts solo sea responsable del DOM — la lógica de datos permanece en main.ts',
          'TypeScript lo requiere',
          'Los callbacks son más rápidos',
        ],
        correctAnswer: 'Para que ui.ts solo sea responsable del DOM — la lógica de datos permanece en main.ts',
        correctFeedback:
          '¡Exacto! ui.ts no sabe cómo actualizar las tareas — solo sabe cómo renderizarlas. Cuando el usuario hace algo, notifica a main.ts a través del callback. Separación limpia.',
        incorrectFeedback:
          'Los callbacks invierten la dependencia. ui.ts no importa de utils o storage — main.ts le dice qué hacer cuando ocurre algo. ui.ts solo es responsable del DOM.',
      },
      {
        question: '¿Por qué validar los datos de localStorage con un type guard en storage.ts?',
        options: [
          'TypeScript lo requiere para localStorage',
          'Los datos de localStorage pueden estar corruptos, en formato antiguo, o modificados manualmente',
          'localStorage siempre devuelve strings válidos',
          'Para hacer el código más lento',
        ],
        correctAnswer: 'Los datos de localStorage pueden estar corruptos, en formato antiguo, o modificados manualmente',
        correctFeedback:
          '¡Correcto! localStorage guarda strings. Al parsear, puede haber datos de una versión anterior de la app, datos corruptos, o datos modificados por el usuario. El type guard filtra los inválidos.',
        incorrectFeedback:
          'localStorage almacena strings. Al recuperarlos, son unknown hasta que los verificas. Pueden ser de una versión antigua del app (sin nuevas propiedades), corruptos, o manipulados por el usuario.',
      },
      {
        question: '¿Qué ventaja tiene `tareas = [...tareas, nuevaTarea]` sobre `tareas.push(nuevaTarea)`?',
        options: [
          'Es más rápido',
          'Crea un nuevo array sin mutar el original — patrón de inmutabilidad',
          'TypeScript requiere spread para arrays',
          'push no funciona en TypeScript',
        ],
        correctAnswer: 'Crea un nuevo array sin mutar el original — patrón de inmutabilidad',
        correctFeedback:
          '¡Exacto! El spread crea un nuevo array. Si algo más tiene una referencia al array original, no se ve afectado. La inmutabilidad hace el flujo de datos más predecible.',
        incorrectFeedback:
          'El spread `[...tareas, nueva]` crea un nuevo array en lugar de mutar el existente. La inmutabilidad hace que el flujo de datos sea predecible — nadie puede ver cambios no esperados en el array original.',
      },
      {
        question: '¿Qué ocurre si agregas un campo obligatorio a `interface Tarea` en types.ts?',
        options: [
          'Nada — TypeScript no detecta errores de tipos en archivos importados',
          'TypeScript marca todos los lugares donde se crea un objeto Tarea sin el nuevo campo',
          'Solo afecta a storage.ts',
          'TypeScript agrega el campo automáticamente',
        ],
        correctAnswer: 'TypeScript marca todos los lugares donde se crea un objeto Tarea sin el nuevo campo',
        correctFeedback:
          '¡Perfecto! Esta es una de las ventajas clave de TypeScript. Agregar un campo a la interfaz y seguir los errores del compilador te guía por todos los lugares que necesitas actualizar.',
        incorrectFeedback:
          'TypeScript busca todos los lugares donde se crea un Tarea (en utils.ts, storage.ts, tests) y marca los que no incluyen el nuevo campo. Esta retroalimentación inmediata es la gran ventaja de TypeScript.',
      },
    ],
  },
]

export const tsModule24: Module = {
  number: 24,
  title: 'Organización de proyectos TypeScript',
  level: 'nivel5',
  lessons: lessonsTsModule24,
}
