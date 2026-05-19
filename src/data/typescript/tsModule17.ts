import type { Lesson, Module } from '@/types'

export const lessonsTsModule17: Lesson[] = [
  {
    slug: 'interfaces-genericas',
    title: 'Interfaces genéricas',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 128,
    description:
      'Aprende a crear interfaces reutilizables que pueden adaptarse a diferentes tipos de datos.',
    explanation: `## Interfaces genéricas

Las interfaces también pueden ser **genéricas**. Esto permite definir estructuras reutilizables que funcionan con cualquier tipo de dato, sin duplicar código.

### Sintaxis básica

\`\`\`typescript
interface Contenedor<T> {
  valor: T
  descripcion: string
}
\`\`\`

Aquí \`T\` es el parámetro genérico de la interfaz. Cuando usas la interfaz, especificas (o TypeScript infiere) el tipo concreto.

### Ejemplo: caja genérica

\`\`\`typescript
interface Caja<T> {
  contenido: T
  etiqueta: string
  peso: number
}

const cajaDeLibro: Caja<string> = {
  contenido: "El Quijote",
  etiqueta: "Libro clásico",
  peso: 0.8,
}

const cajaDeNumero: Caja<number> = {
  contenido: 42,
  etiqueta: "Número especial",
  peso: 0.1,
}
\`\`\`

### Interfaz de respuesta de API

Un caso muy común es modelar la estructura estándar de una respuesta de API:

\`\`\`typescript
interface Respuesta<T> {
  datos: T
  exito: boolean
  mensaje: string
}

interface Usuario {
  id: number
  nombre: string
  email: string
}

const respuesta: Respuesta<Usuario> = {
  datos: { id: 1, nombre: "Ana", email: "ana@email.com" },
  exito: true,
  mensaje: "Usuario encontrado",
}

// TypeScript conoce la estructura completa
console.log(respuesta.datos.nombre) // ✅ string
\`\`\`

### Interfaz con múltiples genéricos

\`\`\`typescript
interface Par<K, V> {
  clave: K
  valor: V
}

const par1: Par<string, number> = { clave: "edad", valor: 25 }
const par2: Par<number, boolean> = { clave: 1, valor: true }
\`\`\`

### Reutilización práctica

Gracias a las interfaces genéricas, puedes definir estructuras comunes una sola vez y usarlas con diferentes tipos de datos:

\`\`\`typescript
interface Lista<T> {
  items: T[]
  total: number
  pagina: number
}

// Lista de usuarios
const usuarios: Lista<{ id: number; nombre: string }> = {
  items: [{ id: 1, nombre: "Ana" }],
  total: 1,
  pagina: 1,
}

// Lista de productos
const productos: Lista<{ id: number; precio: number }> = {
  items: [{ id: 1, precio: 99 }],
  total: 1,
  pagina: 1,
}
\`\`\``,
    codeExample: `// types.ts

// Interfaz genérica para respuesta de API
interface Respuesta<T> {
  datos: T
  exito: boolean
  mensaje: string
  timestamp: string
}

// Tipos de datos específicos
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

// Usar la misma interfaz Respuesta con distintos tipos
const respUsuario: Respuesta<Usuario> = {
  datos: { id: 1, nombre: "Ana", email: "ana@email.com", activo: true },
  exito: true,
  mensaje: "Usuario encontrado",
  timestamp: new Date().toISOString(),
}

const respProducto: Respuesta<Producto> = {
  datos: { id: 5, nombre: "Laptop", precio: 999, stock: 10 },
  exito: true,
  mensaje: "Producto encontrado",
  timestamp: new Date().toISOString(),
}

// TypeScript conoce los tipos exactos
console.log(respUsuario.datos.nombre)    // ✅ string
console.log(respProducto.datos.precio)   // ✅ number

// Interfaz genérica de lista paginada
interface ListaPaginada<T> {
  items: T[]
  total: number
  pagina: number
  porPagina: number
}

const listaUsuarios: ListaPaginada<Usuario> = {
  items: [{ id: 1, nombre: "Ana", email: "ana@email.com", activo: true }],
  total: 50,
  pagina: 1,
  porPagina: 10,
}`,
    keyPoints: [
      'Las interfaces genéricas se declaran con <T> después del nombre de la interfaz',
      'Al usar la interfaz debes especificar el tipo concreto: Respuesta<Usuario>',
      'Permiten definir estructuras comunes reutilizables con diferentes tipos de datos',
      'Son ideales para modelar respuestas de API, listas paginadas, y contenedores',
      'Puedes usar múltiples genéricos: Par<K, V>',
    ],
    exercise: {
      description:
        'Crea una interfaz genérica `Resultado<T>` con propiedades `datos: T`, `error: string | null`, y `cargando: boolean`. Luego crea dos variables usando esa interfaz: una con `datos` de tipo `{ nombre: string; edad: number }` y otra con `datos` de tipo `number[]`.',
      hint: 'Define la interfaz con <T> y especifica el tipo concreto al declarar las variables: `Resultado<{ nombre: string; edad: number }>`.',
    },
    quiz: [
      {
        question: '¿Cómo se declara una interfaz genérica en TypeScript?',
        options: [
          'interface Nombre { tipo: T }',
          'interface Nombre<T> { valor: T }',
          'interface<T> Nombre { valor: T }',
          'generic interface Nombre { valor: T }',
        ],
        correctAnswer: 'interface Nombre<T> { valor: T }',
        correctFeedback:
          '¡Correcto! El parámetro genérico <T> va después del nombre de la interfaz, antes de las llaves.',
        incorrectFeedback:
          'La sintaxis correcta es `interface Nombre<T>`. El genérico va entre el nombre y la llave de apertura, no dentro del cuerpo ni antes del nombre.',
      },
      {
        question: '¿Qué tipo tiene `respuesta.datos.nombre` si `respuesta: Respuesta<{ nombre: string }>`?',
        options: ['any', 'unknown', 'string', 'T'],
        correctAnswer: 'string',
        correctFeedback:
          '¡Exacto! Como especificaste T = { nombre: string }, TypeScript sabe que datos es { nombre: string } y que datos.nombre es string.',
        incorrectFeedback:
          'Cuando especificas Respuesta<{ nombre: string }>, T se vuelve { nombre: string }. Entonces datos.nombre es de tipo string.',
      },
      {
        question: '¿Cuál es la ventaja de usar `Respuesta<T>` en lugar de definir `RespuestaUsuario`, `RespuestaProducto`, etc.?',
        options: [
          'La interfaz genérica es más rápida en tiempo de ejecución',
          'Evita duplicar la estructura de la respuesta — se define una vez y se reutiliza',
          'Solo las interfaces genéricas pueden tener propiedades opcionales',
          'Las interfaces genéricas no requieren especificar tipos',
        ],
        correctAnswer: 'Evita duplicar la estructura de la respuesta — se define una vez y se reutiliza',
        correctFeedback:
          '¡Perfecto! Con una interfaz genérica defines `exito`, `mensaje`, `timestamp` una sola vez. El tipo de datos cambia según el uso.',
        incorrectFeedback:
          'La ventaja principal es la reutilización. En lugar de definir una interfaz por cada tipo de respuesta, defines la estructura común una vez y varía solo el tipo de datos.',
      },
      {
        question: '¿Cómo se declara una interfaz genérica con dos parámetros?',
        options: [
          'interface Par<K V> { clave: K; valor: V }',
          'interface Par<K, V> { clave: K; valor: V }',
          'interface Par<K> <V> { clave: K; valor: V }',
          'interface Par { clave: K; valor: V }',
        ],
        correctAnswer: 'interface Par<K, V> { clave: K; valor: V }',
        correctFeedback:
          '¡Correcto! Múltiples genéricos se separan con comas dentro de los <>.',
        incorrectFeedback:
          'Múltiples parámetros genéricos van separados por comas dentro de los mismos <>: `interface Par<K, V>`.',
      },
      {
        question: '¿Qué problema resuelven las interfaces genéricas `ListaPaginada<T>`?',
        options: [
          'Permiten paginar arrays en tiempo de ejecución',
          'Evitan definir ListaUsuarios, ListaProductos, ListaTareas por separado',
          'Hacen los arrays más rápidos',
          'Permiten que TypeScript compile más rápido',
        ],
        correctAnswer: 'Evitan definir ListaUsuarios, ListaProductos, ListaTareas por separado',
        correctFeedback:
          '¡Exacto! Con `ListaPaginada<T>` defines la estructura de paginación una vez y la reutilizas con cualquier tipo de dato.',
        incorrectFeedback:
          'Las interfaces genéricas evitan la duplicación de código. En lugar de definir una interfaz de lista paginada por cada tipo de dato, defines una sola y la reutilizas.',
      },
    ],
  },
  {
    slug: 'type-aliases-genericos',
    title: 'Type aliases genéricos',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 129,
    description: 'Aprende a crear type aliases con parámetros genéricos.',
    explanation: `## Type aliases genéricos

Los **type aliases** también pueden ser genéricos. La sintaxis es muy similar a las interfaces genéricas, pero con la palabra clave \`type\`.

### Sintaxis

\`\`\`typescript
type Contenedor<T> = {
  valor: T
  descripcion: string
}
\`\`\`

O para tipos más simples:

\`\`\`typescript
type Opcional<T> = T | null
type Promesa<T> = Promise<T>
type Par<A, B> = [A, B]
\`\`\`

### Type alias vs Interface genérica

Ambos son muy similares. La diferencia principal:

| | Interface | Type alias |
|---|---|---|
| Genéricos | ✅ | ✅ |
| Extensión | \`extends\` | \`&\` |
| Union types | ❌ | ✅ |
| Tipos primitivos | ❌ | ✅ |

Para estructuras de objetos, ambos funcionan. Usa **type alias** cuando necesites uniones, tuplas, o tipos más complejos.

### Type aliases para casos de uso comunes

**Resultado con error:**
\`\`\`typescript
type Resultado<T> =
  | { exito: true; datos: T }
  | { exito: false; error: string }
\`\`\`

**Opcional:**
\`\`\`typescript
type Nullable<T> = T | null
type Optional<T> = T | undefined
\`\`\`

**Función genérica como tipo:**
\`\`\`typescript
type Transformador<T, U> = (entrada: T) => U

const stringToNumber: Transformador<string, number> = (s) => parseInt(s)
const numberToString: Transformador<number, string> = (n) => n.toString()
\`\`\`

### Type alias para estados

\`\`\`typescript
type Estado<T> =
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }
\`\`\`

### Diferencia clave con unions

A diferencia de las interfaces, los type aliases pueden representar **uniones discriminadas** — algo que las interfaces no pueden hacer:

\`\`\`typescript
// ✅ Solo posible con type
type FormularioEstado<T> =
  | { modo: 'vacio' }
  | { modo: 'editando'; datos: Partial<T> }
  | { modo: 'enviado'; datos: T }
\`\`\``,
    codeExample: `// types.ts

// Type alias genérico básico
type Envoltorio<T> = {
  dato: T
  creadoEn: string
  version: number
}

const envueltoString: Envoltorio<string> = {
  dato: "Hola TypeScript",
  creadoEn: new Date().toISOString(),
  version: 1,
}

const envueltoObj: Envoltorio<{ id: number; nombre: string }> = {
  dato: { id: 1, nombre: "Ana" },
  creadoEn: new Date().toISOString(),
  version: 2,
}

// Type alias con union discriminada — más poderoso que interface
type Resultado<T> =
  | { exito: true; datos: T }
  | { exito: false; error: string }

function procesarRespuesta<T>(resultado: Resultado<T>) {
  if (resultado.exito) {
    // TypeScript sabe que resultado.datos existe aquí
    console.log(resultado.datos)
  } else {
    // TypeScript sabe que resultado.error existe aquí
    console.log(resultado.error)
  }
}

// Type alias para funciones genéricas
type Transformador<T, U> = (entrada: T) => U

const aMayusculas: Transformador<string, string> = (s) => s.toUpperCase()
const aNumero: Transformador<string, number> = (s) => parseInt(s)
const aLongitud: Transformador<string, number> = (s) => s.length

// Type alias para tipos opcionales
type Nullable<T> = T | null
type MaybeArray<T> = T | T[]

const nombre: Nullable<string> = null
const ids: MaybeArray<number> = [1, 2, 3]`,
    keyPoints: [
      'Los type aliases genéricos usan la misma sintaxis <T> que las interfaces',
      'Los type aliases pueden representar uniones discriminadas, cosa que las interfaces no pueden',
      'Son ideales para modelar estados, resultados, y tipos con múltiples variantes',
      'Puedes usar type aliases genéricos para tipar funciones como valores',
      'Para objetos simples, interface y type alias son prácticamente intercambiables',
    ],
    exercise: {
      description:
        'Crea un type alias `Estado<T>` que represente tres variantes: `{ tipo: "cargando" }`, `{ tipo: "exito"; datos: T }`, y `{ tipo: "error"; mensaje: string }`. Luego crea una función `mostrarEstado<T>(estado: Estado<T>): void` que imprima un mensaje diferente según el tipo. Pruébala con los tres estados.',
      hint: 'Usa un switch o if-else sobre `estado.tipo`. TypeScript reducirá el tipo automáticamente en cada rama.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre un type alias genérico y una interface genérica?',
        options: [
          'Los type aliases no pueden ser genéricos',
          'Los type aliases pueden representar uniones y tipos primitivos; las interfaces no',
          'Las interfaces son más seguras que los type aliases',
          'Solo las interfaces pueden tener múltiples genéricos',
        ],
        correctAnswer: 'Los type aliases pueden representar uniones y tipos primitivos; las interfaces no',
        correctFeedback:
          '¡Exacto! Los type aliases son más flexibles — pueden definir uniones (A | B), tuplas, tipos primitivos, etc. Las interfaces solo pueden definir formas de objetos.',
        incorrectFeedback:
          'La diferencia clave es la flexibilidad. Los type aliases pueden definir uniones, tuplas, y tipos no-objeto. Las interfaces están limitadas a describir formas de objetos.',
      },
      {
        question: '¿Qué hace este type alias?\n```typescript\ntype Resultado<T> = { exito: true; datos: T } | { exito: false; error: string }\n```',
        options: [
          'Define un objeto con propiedades exito, datos, y error simultáneamente',
          'Define dos variantes: una con datos cuando hay éxito, otra con error cuando falla',
          'Es un error — los type aliases no pueden tener uniones',
          'Define un tipo que siempre tiene exito = true',
        ],
        correctAnswer: 'Define dos variantes: una con datos cuando hay éxito, otra con error cuando falla',
        correctFeedback:
          '¡Perfecto! Es una unión discriminada. Cuando `exito` es true, hay `datos`. Cuando `exito` es false, hay `error`. TypeScript puede distinguir entre las dos variantes.',
        incorrectFeedback:
          'Es una unión discriminada: la propiedad `exito` discrimina las dos variantes. Con `exito: true` tienes acceso a `datos`. Con `exito: false` tienes acceso a `error`.',
      },
      {
        question: '¿Cuál es la sintaxis correcta para un type alias genérico?',
        options: [
          'generic type Envoltorio { valor: T }',
          'type Envoltorio = <T>{ valor: T }',
          'type Envoltorio<T> = { valor: T }',
          'type<T> Envoltorio = { valor: T }',
        ],
        correctAnswer: 'type Envoltorio<T> = { valor: T }',
        correctFeedback:
          '¡Correcto! El genérico <T> va entre el nombre del alias y el signo igual.',
        incorrectFeedback:
          'La sintaxis correcta es `type NombreAlias<T> = tipo`. El genérico va después del nombre, antes del =.',
      },
      {
        question: '¿Cuál de estas declaraciones solo es posible con `type`, no con `interface`?',
        options: [
          'type Usuario = { nombre: string; edad: number }',
          'type Par<A, B> = { primero: A; segundo: B }',
          'type ID = string | number',
          'type Config = { debug: boolean }',
        ],
        correctAnswer: 'type ID = string | number',
        correctFeedback:
          '¡Correcto! Las uniones (string | number) solo se pueden definir con type. Una interface no puede representar una unión de tipos primitivos.',
        incorrectFeedback:
          'Los tipos de unión como `string | number` solo se pueden definir con `type`. Las interfaces solo describen formas de objetos, no uniones de tipos.',
      },
      {
        question: '¿Para qué sirve `type Transformador<T, U> = (entrada: T) => U`?',
        options: [
          'Para crear objetos con una función de transformación',
          'Para tipar funciones que reciben T y devuelven U como valores de primera clase',
          'Para extender el tipo T con el tipo U',
          'Para crear arrays de transformaciones',
        ],
        correctAnswer: 'Para tipar funciones que reciben T y devuelven U como valores de primera clase',
        correctFeedback:
          '¡Perfecto! Este type alias describe el tipo de una función. Puedes usarlo para tipar variables, parámetros, y retornos de funciones que sean transformadores.',
        incorrectFeedback:
          'Es un type alias que describe el tipo de una función. Permite tipar variables de tipo función: `const f: Transformador<string, number> = s => parseInt(s)`.',
      },
    ],
  },
  {
    slug: 'genericos-respuestas-api',
    title: 'Genéricos con respuestas de API',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 130,
    description: 'Aprende a modelar respuestas de API reutilizables usando genéricos.',
    explanation: `## Genéricos con respuestas de API

Una de las aplicaciones más prácticas de los genéricos es modelar las **respuestas de una API**. Las APIs siempre devuelven datos con una estructura similar (éxito, mensaje, timestamp) pero con diferentes tipos de contenido.

### El problema sin genéricos

\`\`\`typescript
// Tienes que crear una interfaz por cada endpoint
interface RespuestaUsuario {
  datos: { id: number; nombre: string }
  exito: boolean
  mensaje: string
}

interface RespuestaProducto {
  datos: { id: number; precio: number }
  exito: boolean
  mensaje: string
}

// ¡Mucha repetición!
\`\`\`

### La solución con genéricos

\`\`\`typescript
interface ApiRespuesta<T> {
  datos: T
  exito: boolean
  mensaje: string
  timestamp: string
}
\`\`\`

### Modelar endpoints reales

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
}

interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

// Una interfaz, múltiples usos
type RespuestaUsuario = ApiRespuesta<Usuario>
type RespuestaProductos = ApiRespuesta<Producto[]>
type RespuestaLogin = ApiRespuesta<{ token: string; expira: string }>
\`\`\`

### Función para llamar a la API

\`\`\`typescript
async function fetchApi<T>(url: string): Promise<ApiRespuesta<T>> {
  const response = await fetch(url)
  const datos = await response.json()
  return datos as ApiRespuesta<T>
}

// Uso tipado
const respUsuario = await fetchApi<Usuario>('/api/usuarios/1')
respUsuario.datos.nombre // ✅ TypeScript conoce el tipo
\`\`\`

### Respuesta con lista paginada

\`\`\`typescript
interface Paginado<T> {
  items: T[]
  total: number
  pagina: number
  totalPaginas: number
}

type ApiLista<T> = ApiRespuesta<Paginado<T>>

// Uso
type ListaUsuarios = ApiLista<Usuario>
// datos.items es Usuario[]
// datos.total es number
\`\`\`

### Tipado de errores

\`\`\`typescript
type ApiResultado<T> =
  | { exito: true; datos: T; mensaje: string }
  | { exito: false; error: string; codigo: number }
\`\`\``,
    codeExample: `// api.ts

// Interfaz genérica base para respuestas de API
interface ApiRespuesta<T> {
  datos: T
  exito: boolean
  mensaje: string
  timestamp: string
}

// Tipos de datos de los recursos
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
}

interface Tarea {
  id: number
  titulo: string
  completada: boolean
  prioridad: 'alta' | 'media' | 'baja'
}

// Crear respuestas tipadas simulando un fetch
function simularApiResponse<T>(datos: T): ApiRespuesta<T> {
  return {
    datos,
    exito: true,
    mensaje: 'Operación exitosa',
    timestamp: new Date().toISOString(),
  }
}

const respUsuario = simularApiResponse<Usuario>({
  id: 1,
  nombre: 'Ana García',
  email: 'ana@email.com',
  activo: true,
})

// TypeScript conoce la estructura completa
console.log(respUsuario.datos.nombre)   // ✅ string
console.log(respUsuario.datos.activo)   // ✅ boolean
console.log(respUsuario.exito)          // ✅ boolean

const respProductos = simularApiResponse<Producto[]>([
  { id: 1, nombre: 'Laptop', precio: 999, categoria: 'tecnología' },
  { id: 2, nombre: 'Mochila', precio: 49, categoria: 'accesorios' },
])

// respProductos.datos es Producto[]
respProductos.datos.forEach((p) => {
  console.log(p.nombre, p.precio) // ✅ TypeScript conoce cada campo
})`,
    keyPoints: [
      'Una interfaz genérica ApiRespuesta<T> evita repetir la estructura en cada endpoint',
      'El tipo T varía según el recurso: Usuario, Producto[], etc.',
      'Puedes combinar genéricos anidados: ApiRespuesta<Paginado<T>>',
      'Las funciones de fetch pueden ser genéricas para tipar la respuesta correctamente',
      'Los type aliases facilitan nombrar variantes comunes: type ListaUsuarios = ApiLista<Usuario>',
    ],
    exercise: {
      description:
        'Crea una interfaz genérica `ApiRespuesta<T>` con `datos: T`, `exito: boolean`, `codigo: number`, y `mensaje: string`. Luego crea una función `crearRespuesta<T>(datos: T, codigo: number): ApiRespuesta<T>` que construya la respuesta. Úsala para crear respuestas de tipo `Usuario` (con id, nombre, email) y de tipo `Tarea[]` (con id, titulo, completada).',
      hint: 'La función puede devolver `{ datos, exito: codigo >= 200 && codigo < 300, codigo, mensaje: "OK" }`.',
    },
    quiz: [
      {
        question: '¿Por qué es útil `ApiRespuesta<T>` en vez de definir `RespuestaUsuario`, `RespuestaProducto` por separado?',
        options: [
          'Porque una interfaz genérica es siempre más rápida',
          'Porque evita duplicar las propiedades comunes (exito, mensaje) en cada interfaz',
          'Porque TypeScript no permite múltiples interfaces con las mismas propiedades',
          'Porque las interfaces específicas no pueden tener tipos diferentes',
        ],
        correctAnswer: 'Porque evita duplicar las propiedades comunes (exito, mensaje) en cada interfaz',
        correctFeedback:
          '¡Perfecto! La estructura de exito, mensaje, timestamp es siempre la misma. Solo los datos cambian. Una interfaz genérica captura eso perfectamente.',
        incorrectFeedback:
          'La ventaja es evitar la repetición. Las propiedades exito, mensaje, y timestamp son iguales en todas las respuestas — solo los datos varían. Un genérico captura esa relación.',
      },
      {
        question: '¿Qué tipo tiene `respuesta.datos` si `respuesta: ApiRespuesta<Producto[]>`?',
        options: ['any[]', 'object[]', 'Producto[]', 'T[]'],
        correctAnswer: 'Producto[]',
        correctFeedback:
          '¡Correcto! T = Producto[], entonces datos tiene tipo Producto[] y puedes acceder a propiedades como nombre y precio en cada elemento.',
        incorrectFeedback:
          'Cuando T = Producto[], la propiedad `datos` tiene tipo Producto[]. TypeScript sabe exactamente qué propiedades tiene cada elemento del array.',
      },
      {
        question: '¿Qué significa `ApiLista<T> = ApiRespuesta<Paginado<T>>`?',
        options: [
          'Una respuesta cuyo campo datos es un objeto Paginado con una lista de T',
          'Una lista de APIs que devuelven T',
          'Un error — no se pueden anidar genéricos',
          'Una respuesta que combina ApiRespuesta y Paginado en un solo objeto plano',
        ],
        correctAnswer: 'Una respuesta cuyo campo datos es un objeto Paginado con una lista de T',
        correctFeedback:
          '¡Exacto! Es una respuesta de API donde datos es un objeto paginado. Dentro del paginado hay un array de T. Los genéricos se pueden anidar.',
        incorrectFeedback:
          'Los genéricos se pueden anidar. `ApiRespuesta<Paginado<T>>` es una respuesta de API donde `datos` es un objeto `Paginado<T>`, que a su vez contiene `items: T[]`.',
      },
      {
        question: '¿Cuál es el tipo de retorno correcto para `fetchApi<T>(url: string)`?',
        options: [
          'T',
          'Promise<T>',
          'Promise<ApiRespuesta<T>>',
          'ApiRespuesta<Promise<T>>',
        ],
        correctAnswer: 'Promise<ApiRespuesta<T>>',
        correctFeedback:
          '¡Perfecto! Una función async devuelve una Promise. El contenido de la promesa es la respuesta de la API tipada con T.',
        incorrectFeedback:
          'Una función async devuelve una Promise. Como fetchApi devuelve una ApiRespuesta<T> de forma asíncrona, el tipo de retorno es Promise<ApiRespuesta<T>>.',
      },
      {
        question: '¿Para qué sirve `type RespuestaLogin = ApiRespuesta<{ token: string; expira: string }>`?',
        options: [
          'Para definir un alias más descriptivo para una respuesta específica',
          'Para hacer que la respuesta solo acepte tokens',
          'Para extender ApiRespuesta con nuevas propiedades',
          'Para que el tipo sea más rápido de inferir',
        ],
        correctAnswer: 'Para definir un alias más descriptivo para una respuesta específica',
        correctFeedback:
          '¡Correcto! Es solo un alias conveniente. En lugar de escribir `ApiRespuesta<{ token: string; expira: string }>` cada vez, puedes escribir `RespuestaLogin`.',
        incorrectFeedback:
          'Es un type alias de conveniencia. En lugar de repetir `ApiRespuesta<{ token: string; expira: string }>` en cada función que trabaje con el login, defines un alias legible.',
      },
    ],
  },
  {
    slug: 'genericos-listas-datos',
    title: 'Genéricos con listas de datos',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 131,
    description:
      'Aprende a crear estructuras genéricas para representar listas de usuarios, productos, tareas o cursos.',
    explanation: `## Genéricos con listas de datos

En cualquier aplicación necesitas manejar **listas de datos**: listas de usuarios, productos, tareas, pedidos, cursos. Con genéricos puedes crear estructuras de lista reutilizables.

### La estructura base

\`\`\`typescript
interface Lista<T> {
  items: T[]
  total: number
}
\`\`\`

Tan simple como eso. Ahora la misma interfaz sirve para cualquier tipo de lista.

### Lista paginada

\`\`\`typescript
interface ListaPaginada<T> {
  items: T[]
  total: number
  pagina: number
  porPagina: number
  totalPaginas: number
}
\`\`\`

### Operaciones sobre listas genéricas

\`\`\`typescript
function buscar<T>(lista: Lista<T>, condicion: (item: T) => boolean): T[] {
  return lista.items.filter(condicion)
}

function ordenar<T>(lista: Lista<T>, clave: keyof T): Lista<T> {
  const itemsOrdenados = [...lista.items].sort((a, b) => {
    if (a[clave] < b[clave]) return -1
    if (a[clave] > b[clave]) return 1
    return 0
  })
  return { ...lista, items: itemsOrdenados }
}
\`\`\`

### Listas filtradas por campo

\`\`\`typescript
interface Filtros<T> {
  campo: keyof T
  valor: unknown
}

function filtrar<T>(lista: Lista<T>, filtros: Filtros<T>[]): Lista<T> {
  const filtrados = lista.items.filter((item) =>
    filtros.every((f) => item[f.campo] === f.valor)
  )
  return { items: filtrados, total: filtrados.length }
}
\`\`\`

### Transformar listas

\`\`\`typescript
function mapearLista<T, U>(lista: Lista<T>, fn: (item: T) => U): Lista<U> {
  const mapped = lista.items.map(fn)
  return { items: mapped, total: mapped.length }
}
\`\`\`

### Caso práctico: dashboard

\`\`\`typescript
interface DashboardData {
  usuarios: ListaPaginada<Usuario>
  productos: ListaPaginada<Producto>
  pedidos: ListaPaginada<Pedido>
}
\`\`\``,
    codeExample: `// types.ts

interface ListaPaginada<T> {
  items: T[]
  total: number
  pagina: number
  porPagina: number
  totalPaginas: number
}

// Tipos de datos
interface Usuario {
  id: number
  nombre: string
  activo: boolean
}

interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
}

interface Tarea {
  id: number
  titulo: string
  completada: boolean
  prioridad: 'alta' | 'media' | 'baja'
}

// Crear listas tipadas
const listaUsuarios: ListaPaginada<Usuario> = {
  items: [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "María", activo: true },
  ],
  total: 50,
  pagina: 1,
  porPagina: 3,
  totalPaginas: 17,
}

const listaTareas: ListaPaginada<Tarea> = {
  items: [
    { id: 1, titulo: "Revisar código", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Actualizar docs", completada: true, prioridad: "media" },
  ],
  total: 2,
  pagina: 1,
  porPagina: 10,
  totalPaginas: 1,
}

// Función genérica para buscar en cualquier lista
function buscarEnLista<T>(lista: ListaPaginada<T>, condicion: (item: T) => boolean): T[] {
  return lista.items.filter(condicion)
}

const activos = buscarEnLista(listaUsuarios, (u) => u.activo)
// activos es Usuario[] — TypeScript lo sabe

const pendientes = buscarEnLista(listaTareas, (t) => !t.completada)
// pendientes es Tarea[] — TypeScript lo sabe`,
    keyPoints: [
      'ListaPaginada<T> es una estructura genérica reutilizable para cualquier tipo de dato',
      'Las funciones que operan sobre listas también pueden ser genéricas',
      'keyof T permite acceder a propiedades de T de forma segura',
      'Puedes transformar listas de un tipo a otro con mapearLista<T, U>',
      'Las estructuras genéricas de listas son la base de tablas, dashboards, y grids',
    ],
    exercise: {
      description:
        'Crea una interfaz `Lista<T>` con `items: T[]` y `total: number`. Luego crea una función genérica `agregarItem<T>(lista: Lista<T>, item: T): Lista<T>` que devuelva una nueva lista con el item agregado y el total actualizado. Pruébala con una lista de `{ id: number; nombre: string }` y agrega dos elementos.',
      hint: 'La función devuelve `{ items: [...lista.items, item], total: lista.total + 1 }`. No mutes el array original.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene `activos` si `buscarEnLista(listaUsuarios, u => u.activo)` y `listaUsuarios: ListaPaginada<Usuario>`?',
        options: ['any[]', 'object[]', 'Usuario[]', 'boolean[]'],
        correctAnswer: 'Usuario[]',
        correctFeedback:
          '¡Correcto! T se infiere como Usuario, y el filtro devuelve T[] = Usuario[]. TypeScript sabe exactamente qué propiedades tienen los elementos.',
        incorrectFeedback:
          'T se infiere como Usuario desde listaUsuarios. La función de filtro devuelve T[] = Usuario[]. No se pierde la información del tipo.',
      },
      {
        question: '¿Por qué usar `ListaPaginada<Tarea>` en lugar de un array `Tarea[]`?',
        options: [
          'Porque los arrays genéricos no existen en TypeScript',
          'Porque ListaPaginada agrega metadatos útiles como total, pagina, totalPaginas',
          'Porque Tarea[] es menos eficiente que ListaPaginada<Tarea>',
          'Porque TypeScript no puede inferir el tipo de Tarea[]',
        ],
        correctAnswer: 'Porque ListaPaginada agrega metadatos útiles como total, pagina, totalPaginas',
        correctFeedback:
          '¡Exacto! Una lista paginada no es solo datos — también incluye información de paginación necesaria para la UI.',
        incorrectFeedback:
          'La diferencia está en la estructura. Un array es solo datos. ListaPaginada añade metadatos de paginación (total, pagina, totalPaginas) que la UI necesita para renderizar controles de paginación.',
      },
      {
        question: '¿Qué problema resuelve `mapearLista<T, U>(lista: Lista<T>, fn: (item: T) => U): Lista<U>`?',
        options: [
          'Permite transformar una lista de un tipo en una lista de otro tipo manteniendo la estructura',
          'Permite ordenar la lista de cualquier manera',
          'Permite filtrar elementos duplicados',
          'Permite paginar la lista automáticamente',
        ],
        correctAnswer: 'Permite transformar una lista de un tipo en una lista de otro tipo manteniendo la estructura',
        correctFeedback:
          '¡Perfecto! Si tienes `Lista<Usuario>` y quieres solo los nombres, mapearLista convierte a `Lista<string>` manteniendo el total y la estructura de lista.',
        incorrectFeedback:
          'mapearLista transforma el tipo de los elementos. Por ejemplo, de `Lista<Usuario>` a `Lista<string>` si la función extrae el nombre. La estructura Lista se preserva.',
      },
      {
        question: '¿Qué resultado produce `buscarEnLista(listaProductos, p => p.precio < 100)` si listaProductos tiene productos con precio 50 y 150?',
        options: [
          '[true, false]',
          'Solo el producto con precio 50',
          'Todos los productos sin filtrar',
          'Error — filter no funciona con genéricos',
        ],
        correctAnswer: 'Solo el producto con precio 50',
        correctFeedback:
          '¡Correcto! El filtro devuelve solo los elementos que cumplen la condición. El producto con precio 50 pasa el filtro, el de 150 no.',
        incorrectFeedback:
          'filter devuelve los elementos donde la condición es true. Solo el producto con precio 50 tiene precio < 100, así que ese es el único resultado.',
      },
      {
        question: '¿Cuál de estas declaraciones es correcta para una lista de cursos?',
        options: [
          'const lista: Lista = { items: cursos, total: 3 }',
          'const lista: Lista<Curso> = { items: cursos, total: 3 }',
          'const lista: Lista(Curso) = { items: cursos, total: 3 }',
          'const lista: Lista[Curso] = { items: cursos, total: 3 }',
        ],
        correctAnswer: 'const lista: Lista<Curso> = { items: cursos, total: 3 }',
        correctFeedback:
          '¡Perfecto! Los genéricos se especifican con <> en la anotación de tipo.',
        incorrectFeedback:
          'Los tipos genéricos se especifican con <> entre el nombre y el tipo concreto: `Lista<Curso>`. Las otras sintaxis no son válidas en TypeScript.',
      },
    ],
  },
  {
    slug: 'genericos-estados-app',
    title: 'Genéricos con estados de una app',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 132,
    description:
      'Aprende a representar estados como loading, success y error usando genéricos.',
    explanation: `## Genéricos con estados de una app

En cualquier aplicación que hace peticiones a una API, tienes que manejar **estados**: la petición puede estar cargando, puede tener éxito, o puede haber fallado. Los genéricos son perfectos para modelar esto.

### El patrón de estados

\`\`\`typescript
type EstadoPeticion<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }
\`\`\`

Con este type alias genérico, puedes representar el estado de **cualquier petición** — sin importar qué tipo de datos devuelve.

### Uso práctico

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
}

type EstadoUsuario = EstadoPeticion<Usuario>
type EstadoProductos = EstadoPeticion<Producto[]>

// Variables de estado
let estadoUsuario: EstadoUsuario = { tipo: 'idle' }
estadoUsuario = { tipo: 'cargando' }
estadoUsuario = { tipo: 'exito', datos: { id: 1, nombre: "Ana", email: "ana@email.com" } }
estadoUsuario = { tipo: 'error', mensaje: "Usuario no encontrado" }
\`\`\`

### Narrowing con estados

TypeScript puede reducir el tipo automáticamente según el valor de \`tipo\`:

\`\`\`typescript
function renderEstado<T>(estado: EstadoPeticion<T>) {
  switch (estado.tipo) {
    case 'idle':
      return "Esperando..."
    case 'cargando':
      return "Cargando datos..."
    case 'exito':
      // Aquí TypeScript sabe que estado.datos existe
      return \`Éxito: \${JSON.stringify(estado.datos)}\`
    case 'error':
      // Aquí TypeScript sabe que estado.mensaje existe
      return \`Error: \${estado.mensaje}\`
  }
}
\`\`\`

### Estado con función de actualización

\`\`\`typescript
interface Contenedor<T> {
  estado: EstadoPeticion<T>
  actualizar: (nuevoEstado: EstadoPeticion<T>) => void
}
\`\`\`

### Estados simples sin carga

Para estados más simples (sin el estado idle):

\`\`\`typescript
type AsyncData<T> =
  | { cargando: true }
  | { cargando: false; datos: T; error: null }
  | { cargando: false; datos: null; error: string }
\`\`\``,
    codeExample: `// types.ts

// Estado genérico para cualquier petición async
type EstadoPeticion<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }

// Tipos de datos
interface Curso {
  id: number
  titulo: string
  estudiantes: number
}

interface Perfil {
  id: number
  nombre: string
  avatar: string
}

// Usar el mismo tipo de estado con distintos datos
let estadoCurso: EstadoPeticion<Curso> = { tipo: 'idle' }
let estadoPerfil: EstadoPeticion<Perfil> = { tipo: 'cargando' }
let estadoLista: EstadoPeticion<Curso[]> = { tipo: 'exito', datos: [] }

// Función genérica que muestra el estado
function procesarEstado<T>(estado: EstadoPeticion<T>): string {
  switch (estado.tipo) {
    case 'idle':
      return 'Sin iniciar'
    case 'cargando':
      return 'Cargando...'
    case 'exito':
      // TypeScript sabe que estado.datos existe y es de tipo T
      return \`Datos recibidos: \${JSON.stringify(estado.datos)}\`
    case 'error':
      // TypeScript sabe que estado.mensaje existe
      return \`Error: \${estado.mensaje}\`
  }
}

// Estados de un formulario de login
type EstadoLogin = EstadoPeticion<{ token: string; usuario: string }>

let loginEstado: EstadoLogin = { tipo: 'cargando' }
loginEstado = { tipo: 'exito', datos: { token: 'abc123', usuario: 'ana' } }

if (loginEstado.tipo === 'exito') {
  console.log(loginEstado.datos.token) // ✅ TypeScript sabe que token existe
}`,
    keyPoints: [
      'El patrón EstadoPeticion<T> modela los 4 estados de una petición asíncrona',
      'TypeScript puede hacer narrowing del estado basándose en la propiedad discriminante',
      'Una sola definición funciona para cualquier tipo de datos que devuelva la petición',
      'Los estados con uniones discriminadas hacen el narrowing más seguro',
      'Puedes combinar estados con otras estructuras genéricas',
    ],
    exercise: {
      description:
        'Crea un type alias `AsyncEstado<T>` con cuatro variantes: `idle`, `cargando`, `exito` (con `datos: T`), y `error` (con `mensaje: string` y `codigo: number`). Crea una función `obtenerMensaje<T>(estado: AsyncEstado<T>): string` que use un switch para devolver un string descriptivo de cada estado. Pruébala con los cuatro tipos de estado.',
      hint: 'El switch puede usar `estado.tipo` como discriminante. TypeScript reducirá el tipo automáticamente en cada case.',
    },
    quiz: [
      {
        question: '¿Por qué usar `tipo: "exito"` como discriminante en lugar de un boolean `exito: boolean`?',
        options: [
          'Porque boolean no es válido en uniones discriminadas',
          'Porque con un string literal TypeScript puede distinguir más de dos variantes (idle, cargando, exito, error)',
          'Porque los string son más rápidos que los boolean',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'Porque con un string literal TypeScript puede distinguir más de dos variantes (idle, cargando, exito, error)',
        correctFeedback:
          '¡Correcto! Un boolean solo distingue dos casos (true/false), pero con strings literales puedes tener idle, cargando, exito, error, y más variantes claramente nombradas.',
        incorrectFeedback:
          'Un boolean solo tiene dos valores. Con strings literales ("idle", "cargando", "exito", "error") tienes cuatro estados distintos bien nombrados, y TypeScript puede hacer narrowing para cada uno.',
      },
      {
        question: 'En este código:\n```typescript\nif (estado.tipo === "exito") {\n  console.log(estado.datos)\n}\n```\n¿Por qué TypeScript sabe que `estado.datos` existe dentro del if?',
        options: [
          'Porque los datos siempre existen en cualquier estado',
          'Porque TypeScript hace narrowing — dentro del if, sabe que estado es la variante "exito"',
          'Porque datos es una propiedad común a todas las variantes',
          'Porque el if verifica la existencia de datos antes de acceder a él',
        ],
        correctAnswer: 'Porque TypeScript hace narrowing — dentro del if, sabe que estado es la variante "exito"',
        correctFeedback:
          '¡Perfecto! El check `estado.tipo === "exito"` es un type guard. Dentro del if, TypeScript sabe que estado es de la variante que tiene `datos: T`.',
        incorrectFeedback:
          'TypeScript usa narrowing. Cuando verificas `estado.tipo === "exito"`, TypeScript sabe que dentro de ese bloque `estado` es la variante con `datos: T`, así que puede acceder a ella.',
      },
      {
        question: '¿Qué tipo tiene `estado.datos` dentro del case "exito" si `estado: EstadoPeticion<Producto[]>`?',
        options: ['any', 'T', 'Producto[] | undefined', 'Producto[]'],
        correctAnswer: 'Producto[]',
        correctFeedback:
          '¡Exacto! T = Producto[], y dentro del case "exito", TypeScript sabe que datos: T = Producto[].',
        incorrectFeedback:
          'Dentro del case "exito", TypeScript sabe que estamos en la variante `{ tipo: "exito"; datos: T }`. Como T = Producto[], `datos` tiene tipo Producto[].',
      },
      {
        question: '¿Cuál es la ventaja de `EstadoPeticion<T>` frente a `EstadoUsuario`, `EstadoProducto` separados?',
        options: [
          'EstadoPeticion es más rápido en ejecución',
          'Defines la lógica de estados una sola vez y la reutilizas con cualquier tipo de datos',
          'TypeScript solo puede hacer narrowing con tipos genéricos',
          'Los tipos separados no pueden tener uniones discriminadas',
        ],
        correctAnswer: 'Defines la lógica de estados una sola vez y la reutilizas con cualquier tipo de datos',
        correctFeedback:
          '¡Correcto! Las 4 variantes (idle, cargando, exito, error) son siempre iguales. Solo los datos cambian. El genérico captura exactamente esa variabilidad.',
        incorrectFeedback:
          'La ventaja es la reutilización. La estructura de estados (idle, cargando, exito, error) es siempre la misma. Solo el tipo de datos en "exito" varía. El genérico T captura esa variabilidad.',
      },
      {
        question: '¿Cuál es la declaración correcta de un estado de éxito para un usuario?\n```typescript\ntype Estado<T> = | { tipo: "exito"; datos: T } | { tipo: "error"; msg: string }\ninterface Usuario { id: number; nombre: string }\n```',
        options: [
          'const s: Estado = { tipo: "exito", datos: { id: 1, nombre: "Ana" } }',
          'const s: Estado<Usuario> = { tipo: "exito", datos: { id: 1, nombre: "Ana" } }',
          'const s: Estado(Usuario) = { tipo: "exito", datos: { id: 1, nombre: "Ana" } }',
          'const s = { tipo: "exito" as Estado<Usuario>, datos: { id: 1, nombre: "Ana" } }',
        ],
        correctAnswer: 'const s: Estado<Usuario> = { tipo: "exito", datos: { id: 1, nombre: "Ana" } }',
        correctFeedback:
          '¡Perfecto! Se especifica el tipo con Estado<Usuario> y los datos tienen la forma correcta de Usuario.',
        incorrectFeedback:
          'La sintaxis correcta usa <> para especificar el tipo: `Estado<Usuario>`. Sin el tipo concreto, TypeScript no sabe qué tipo tienen los datos.',
      },
    ],
  },
  {
    slug: 'valores-defecto-genericos',
    title: 'Valores por defecto en genéricos',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 133,
    description:
      'Aprende a definir tipos por defecto en genéricos para hacer tus tipos más flexibles.',
    explanation: `## Valores por defecto en genéricos

Al igual que los parámetros de funciones pueden tener valores por defecto, los parámetros genéricos también pueden tener **tipos por defecto**. Esto hace que los tipos sean más flexibles y fáciles de usar.

### Sintaxis

\`\`\`typescript
interface Respuesta<T = string> {
  datos: T
  exito: boolean
}
\`\`\`

Si no especificas T al usar la interfaz, TypeScript asume que T = string.

### Ejemplo práctico

\`\`\`typescript
interface Configuracion<T = Record<string, unknown>> {
  nombre: string
  opciones: T
  activo: boolean
}

// Sin especificar T — usa el defecto Record<string, unknown>
const configBasica: Configuracion = {
  nombre: "config-global",
  opciones: { debug: true, idioma: "es" },
  activo: true,
}

// Con T explícito
interface OpcionesTema {
  colores: string[]
  fuente: string
}

const configTema: Configuracion<OpcionesTema> = {
  nombre: "config-tema",
  opciones: { colores: ["#000", "#fff"], fuente: "Inter" },
  activo: true,
}
\`\`\`

### Defecto con tipos comunes

\`\`\`typescript
// Defecto a string
type Campo<T = string> = {
  valor: T
  etiqueta: string
  requerido: boolean
}

const campoTexto: Campo = { valor: "", etiqueta: "Nombre", requerido: true }
const campoNumero: Campo<number> = { valor: 0, etiqueta: "Edad", requerido: false }
\`\`\`

### Múltiples genéricos con defecto

\`\`\`typescript
interface Mapa<K = string, V = unknown> {
  clave: K
  valor: V
}

const m1: Mapa = { clave: "color", valor: "azul" }          // K=string, V=unknown
const m2: Mapa<string, number> = { clave: "precio", valor: 99 } // explícito
\`\`\`

### Cuándo usar valores por defecto

Usa valores por defecto cuando:
- El genérico tiene un tipo "más común" que se usa la mayoría de las veces
- Quieres que la interfaz sea usable sin especificar el tipo
- El tipo por defecto es sensato y no sorprende a quien lee el código`,
    codeExample: `// types.ts

// Interfaz con tipo por defecto
interface Campo<T = string> {
  valor: T
  etiqueta: string
  requerido: boolean
  placeholder?: string
}

// Sin especificar T — usa string por defecto
const campoNombre: Campo = {
  valor: "",
  etiqueta: "Nombre completo",
  requerido: true,
  placeholder: "Ingresa tu nombre",
}

// Con T explícito para otros tipos
const campoEdad: Campo<number> = {
  valor: 0,
  etiqueta: "Edad",
  requerido: true,
}

const campoActivo: Campo<boolean> = {
  valor: false,
  etiqueta: "¿Cuenta activa?",
  requerido: false,
}

// Respuesta con defecto de objeto genérico
interface Respuesta<T = Record<string, unknown>> {
  datos: T
  exito: boolean
  mensaje: string
}

// Usando el defecto
const respSimple: Respuesta = {
  datos: { resultado: "OK" },
  exito: true,
  mensaje: "Operación completada",
}

// Con tipo específico
interface Usuario {
  id: number
  nombre: string
}

const respUsuario: Respuesta<Usuario> = {
  datos: { id: 1, nombre: "Ana" },
  exito: true,
  mensaje: "Usuario encontrado",
}`,
    keyPoints: [
      'Los genéricos pueden tener tipos por defecto con la sintaxis <T = TipoDefecto>',
      'Si no especificas T, TypeScript usa el tipo por defecto',
      'Los valores por defecto hacen las interfaces más cómodas de usar en casos comunes',
      'Puedes mezclar genéricos con y sin defecto en la misma interfaz',
      'El tipo por defecto debe ser un tipo válido y sensato para el contexto',
    ],
    exercise: {
      description:
        'Crea una interfaz `Contenedor<T = string>` con `contenido: T`, `etiqueta: string`, y `version: number`. Luego crea tres variables: una sin especificar T (usa el defecto string), una con `T = number`, y una con `T = { id: number; nombre: string }`. Comprueba que TypeScript conoce el tipo de `contenido` en cada caso.',
      hint: 'Para usar el defecto simplemente escribe `Contenedor` sin <>. Para tipos específicos escribe `Contenedor<number>` o `Contenedor<{ id: number; nombre: string }>`.',
    },
    quiz: [
      {
        question: '¿Qué significa `interface Respuesta<T = string>` ?',
        options: [
          'T es exactamente string y no puede cambiarse',
          'Si no se especifica T, TypeScript asume que T es string',
          'T debe extender string',
          'La interfaz solo acepta strings',
        ],
        correctAnswer: 'Si no se especifica T, TypeScript asume que T es string',
        correctFeedback:
          '¡Correcto! Es un tipo por defecto. Puedes usarlo como `Respuesta` (T = string) o como `Respuesta<number>` para especificar otro tipo.',
        incorrectFeedback:
          '`= string` define un tipo por defecto. Si usas `Respuesta` sin <>, T será string. Si usas `Respuesta<number>`, T será number. El defecto se puede sobrescribir.',
      },
      {
        question: '¿Qué tipo tiene `campo.valor` si `campo: Campo` y `interface Campo<T = boolean> { valor: T }`?',
        options: ['any', 'unknown', 'boolean', 'T'],
        correctAnswer: 'boolean',
        correctFeedback:
          '¡Perfecto! El tipo por defecto es boolean, así que sin especificar T, `campo.valor` es boolean.',
        incorrectFeedback:
          'El tipo por defecto es boolean. Cuando usas `Campo` sin especificar T, TypeScript usa el defecto y `valor` tiene tipo boolean.',
      },
      {
        question: '¿Cuándo tiene sentido poner un valor por defecto en un genérico?',
        options: [
          'Siempre — todos los genéricos deben tener defecto',
          'Cuando hay un tipo que se usa la mayoría de las veces y quieres evitar repetirlo',
          'Solo cuando el tipo es string o number',
          'Nunca — los valores por defecto confunden',
        ],
        correctAnswer: 'Cuando hay un tipo que se usa la mayoría de las veces y quieres evitar repetirlo',
        correctFeedback:
          '¡Exacto! Si la mayoría de usos de una interfaz usan el mismo tipo, el defecto evita repetirlo constantemente.',
        incorrectFeedback:
          'Los valores por defecto son útiles cuando hay un tipo "más común". Si el 80% de usos usan string, poner `<T = string>` simplifica esos casos sin afectar los otros.',
      },
      {
        question: '¿Es posible tener `interface Mapa<K = string, V>` (defecto en K pero no en V)?',
        options: [
          'Sí, siempre funciona',
          'No — si un parámetro genérico tiene defecto, los siguientes también deben tenerlo',
          'Solo si K y V son compatibles',
          'Solo si V = unknown',
        ],
        correctAnswer: 'No — si un parámetro genérico tiene defecto, los siguientes también deben tenerlo',
        correctFeedback:
          '¡Correcto! En TypeScript (como en muchos lenguajes), los parámetros con valor por defecto deben venir al final: `Mapa<K, V = unknown>` o `Mapa<K = string, V = unknown>`.',
        incorrectFeedback:
          'Si un parámetro tiene valor por defecto, todos los que le siguen también deben tenerlo. No puedes tener `<K = string, V>` — `V` sin defecto después de K con defecto no es válido.',
      },
      {
        question: '¿Qué ocurre si escribes `const r: Respuesta<number>` cuando `interface Respuesta<T = string>`?',
        options: [
          'Error — ya tiene el defecto string, no puede cambiarse',
          'Funciona — el defecto se sobrescribe con number',
          'r.datos tendría tipo string | number',
          'TypeScript ignora el <number> y usa string de todas formas',
        ],
        correctAnswer: 'Funciona — el defecto se sobrescribe con number',
        correctFeedback:
          '¡Perfecto! El defecto solo se aplica cuando no especificas el tipo. Si escribes `Respuesta<number>`, T = number y `datos` es number.',
        incorrectFeedback:
          'El tipo por defecto solo se usa cuando NO especificas el tipo. Si escribes `Respuesta<number>`, el defecto se ignora y T = number.',
      },
    ],
  },
  {
    slug: 'reutilizar-estructuras-genericos',
    title: 'Reutilizar estructuras con genéricos',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 134,
    description: 'Aprende a evitar repetición creando estructuras genéricas reutilizables.',
    explanation: `## Reutilizar estructuras con genéricos

Uno de los mayores beneficios de los genéricos es **eliminar la repetición**. En lugar de definir estructuras similares una y otra vez para cada tipo de dato, defines la estructura una vez y la reutilizas.

### El problema: estructuras repetidas

Imagina que tienes estos tipos para tu app:

\`\`\`typescript
interface UsuarioEnFormulario {
  datos: { id: number; nombre: string }
  errores: string[]
  cargando: boolean
}

interface ProductoEnFormulario {
  datos: { id: number; precio: number }
  errores: string[]
  cargando: boolean
}

interface TareaEnFormulario {
  datos: { id: number; titulo: string }
  errores: string[]
  cargando: boolean
}
\`\`\`

Todo lo que cambia es el tipo de \`datos\`. El resto es idéntico. ¡Hay mucha repetición!

### La solución: estructura genérica

\`\`\`typescript
interface EnFormulario<T> {
  datos: T
  errores: string[]
  cargando: boolean
}

// Ahora defines cada tipo en una sola línea
type UsuarioEnForm = EnFormulario<{ id: number; nombre: string }>
type ProductoEnForm = EnFormulario<{ id: number; precio: number }>
type TareaEnForm = EnFormulario<{ id: number; titulo: string }>
\`\`\`

### Combinando estructuras genéricas

\`\`\`typescript
interface Respuesta<T> {
  datos: T
  exito: boolean
}

interface Paginado<T> {
  items: T[]
  total: number
}

// Combinación
type RespuestaPaginada<T> = Respuesta<Paginado<T>>
\`\`\`

### Caso práctico: sistema de CRUD

\`\`\`typescript
interface EstadoCrud<T> {
  lista: T[]
  seleccionado: T | null
  cargando: boolean
  error: string | null
  formulario: Partial<T>
}

interface Usuario { id: number; nombre: string; email: string }
interface Producto { id: number; nombre: string; precio: number }

type EstadoUsuarios = EstadoCrud<Usuario>
type EstadoProductos = EstadoCrud<Producto>
\`\`\`

### Las operaciones también son reutilizables

\`\`\`typescript
function actualizarEnLista<T extends { id: number }>(
  lista: T[],
  actualizado: T
): T[] {
  return lista.map((item) => item.id === actualizado.id ? actualizado : item)
}
\`\`\``,
    codeExample: `// types.ts

// Estructura genérica para cualquier formulario
interface EstadoFormulario<T> {
  datos: Partial<T>
  errores: Partial<Record<keyof T, string>>
  enviando: boolean
  enviado: boolean
}

// Tipos de datos del dominio
interface RegistroUsuario {
  nombre: string
  email: string
  password: string
}

interface NuevoProducto {
  nombre: string
  precio: number
  categoria: string
  stock: number
}

// Reutilizar la estructura con distintos tipos
const formRegistro: EstadoFormulario<RegistroUsuario> = {
  datos: { nombre: "", email: "" },
  errores: { email: "Email inválido" },
  enviando: false,
  enviado: false,
}

const formProducto: EstadoFormulario<NuevoProducto> = {
  datos: { nombre: "Laptop", precio: 999 },
  errores: {},
  enviando: true,
  enviado: false,
}

// TypeScript conoce el tipo de datos y errores en cada caso
console.log(formRegistro.datos.email)    // ✅ string | undefined
console.log(formRegistro.errores.email)  // ✅ string | undefined
console.log(formProducto.datos.precio)   // ✅ number | undefined

// Función reutilizable para actualizar el estado del formulario
function actualizarCampo<T>(
  estado: EstadoFormulario<T>,
  campo: keyof T,
  valor: T[keyof T]
): EstadoFormulario<T> {
  return {
    ...estado,
    datos: { ...estado.datos, [campo]: valor },
    errores: { ...estado.errores, [campo]: undefined },
  }
}`,
    keyPoints: [
      'Los genéricos eliminan la repetición de estructuras similares en el código',
      'Define la estructura una vez con <T> y reutilízala con diferentes tipos concretos',
      'Puedes combinar estructuras genéricas: Respuesta<Paginado<T>>',
      'Las operaciones sobre estructuras genéricas también son reutilizables',
      'Los type aliases hacen los tipos compuestos más legibles: type EstadoUsuarios = EstadoCrud<Usuario>',
    ],
    exercise: {
      description:
        'Crea una interfaz genérica `EstadoCrud<T>` con: `items: T[]`, `seleccionado: T | null`, `cargando: boolean`, y `error: string | null`. Luego crea dos types: `EstadoUsuarios = EstadoCrud<{ id: number; nombre: string }>` y `EstadoProductos = EstadoCrud<{ id: number; precio: number }>`. Crea una instancia válida de cada tipo.',
      hint: 'Los types son solo alias de EstadoCrud con el tipo concreto. Las instancias deben tener todas las propiedades de EstadoCrud.',
    },
    quiz: [
      {
        question: '¿Cuál es el principal beneficio de las estructuras genéricas reutilizables?',
        options: [
          'Hacen el código más rápido en tiempo de ejecución',
          'Eliminan la repetición de código — defines la estructura una vez para múltiples tipos',
          'Permiten que TypeScript compile más rápido',
          'Hacen el código más difícil de leer',
        ],
        correctAnswer: 'Eliminan la repetición de código — defines la estructura una vez para múltiples tipos',
        correctFeedback:
          '¡Correcto! DRY (Don\'t Repeat Yourself) es el principio clave. Si la estructura es la misma y solo cambia el tipo de datos, un genérico es la solución.',
        incorrectFeedback:
          'Los genéricos son azúcar sintáctica en TypeScript — no afectan el JavaScript final. Su beneficio es la reutilización: defines una estructura una vez y la usas con muchos tipos.',
      },
      {
        question: '¿Qué tipo tiene `formRegistro.datos.email` si:\n```typescript\nconst formRegistro: EstadoFormulario<{ nombre: string; email: string }>\ninterface EstadoFormulario<T> { datos: Partial<T>; ... }\n```',
        options: ['string', 'string | undefined', 'any', 'T'],
        correctAnswer: 'string | undefined',
        correctFeedback:
          '¡Perfecto! `Partial<T>` hace todas las propiedades opcionales. Así `datos.email` es `string | undefined`, no `string`.',
        incorrectFeedback:
          '`Partial<T>` convierte todas las propiedades de T en opcionales. Si T = { email: string }, Partial<T> = { email?: string }. Por eso el tipo es `string | undefined`.',
      },
      {
        question: '¿Cuál de estas estructuras evita más repetición?',
        options: [
          'Definir EstadoUsuarios, EstadoProductos, EstadoTareas por separado con las mismas propiedades',
          'Una interfaz genérica EstadoCrud<T> con todas las propiedades comunes',
          'Usar any[] para todas las listas',
          'Definir cada estado como un objeto literal sin tipo',
        ],
        correctAnswer: 'Una interfaz genérica EstadoCrud<T> con todas las propiedades comunes',
        correctFeedback:
          '¡Exacto! Con EstadoCrud<T> defines las propiedades una vez y las reutilizas con cualquier tipo de dato.',
        incorrectFeedback:
          'Definir interfaces separadas con las mismas propiedades viola el principio DRY. Una interfaz genérica captura lo que es común (cargando, error, seleccionado) y lo que varía (el tipo de items).',
      },
      {
        question: '¿Qué hace `type RespuestaPaginada<T> = Respuesta<Paginado<T>>`?',
        options: [
          'Es un error — no se pueden anidar genéricos',
          'Crea un alias que combina Respuesta y Paginado — el campo datos es un Paginado<T>',
          'Aplana los genéricos en un solo nivel',
          'Hace que T sea tanto Respuesta como Paginado al mismo tiempo',
        ],
        correctAnswer: 'Crea un alias que combina Respuesta y Paginado — el campo datos es un Paginado<T>',
        correctFeedback:
          '¡Perfecto! Los genéricos anidados funcionan así: `RespuestaPaginada<Usuario>` tiene `datos: Paginado<Usuario>`, que a su vez tiene `items: Usuario[]`.',
        incorrectFeedback:
          'Los genéricos se pueden anidar. `Respuesta<Paginado<T>>` significa que el campo `datos` es un `Paginado<T>`, que contiene `items: T[]` y otros campos de paginación.',
      },
      {
        question: '¿Para qué sirve el type alias `type EstadoUsuarios = EstadoCrud<Usuario>`?',
        options: [
          'Para restringir que EstadoCrud solo acepte usuarios',
          'Para crear un nombre más descriptivo del tipo compuesto, sin repetir la definición',
          'Para hacer que EstadoUsuarios sea más rápido que EstadoCrud<Usuario>',
          'Para extender EstadoCrud con propiedades específicas de usuarios',
        ],
        correctAnswer: 'Para crear un nombre más descriptivo del tipo compuesto, sin repetir la definición',
        correctFeedback:
          '¡Correcto! Es un alias de conveniencia. En lugar de escribir `EstadoCrud<Usuario>` en todos lados, usas el nombre más descriptivo `EstadoUsuarios`.',
        incorrectFeedback:
          'Es un alias de conveniencia. No añade funcionalidad — solo da un nombre más legible al tipo compuesto. Útil cuando usas el tipo frecuentemente y quieres evitar repetir `EstadoCrud<Usuario>`.',
      },
    ],
  },
  {
    slug: 'errores-interfaces-types-genericos',
    title: 'Errores comunes en interfaces y types genéricos',
    module: 'Genéricos en interfaces y types',
    moduleNumber: 17,
    order: 135,
    description:
      'Aprende a evitar tipos demasiado abstractos, nombres poco claros o genéricos innecesarios.',
    explanation: `## Errores comunes en interfaces y types genéricos

Los tipos genéricos bien usados hacen el código más claro. Pero mal usados, pueden volverse confusos y difíciles de mantener. Estos son los errores más frecuentes.

### Error 1: genérico cuando no se necesita

\`\`\`typescript
// ❌ Innecesario — la interfaz siempre tiene string como nombre
interface UsuarioGenerico<T> {
  id: number
  nombre: T  // ¿Por qué T? nombre siempre es string
}

// ✅ Correcto — usa el tipo directamente
interface Usuario {
  id: number
  nombre: string
}
\`\`\`

### Error 2: nombre del genérico poco claro

\`\`\`typescript
// ❌ T no dice nada sobre qué representa
interface Contenedor<T> {
  datos: T
  metadata: string
}

// ✅ Mejor cuando el contexto lo requiere
interface Respuesta<TDatos> {
  datos: TDatos
  metadata: string
}

// O simplemente deja T cuando el contexto es obvio
interface Lista<T> { items: T[]; total: number }
// Aquí T es suficientemente claro
\`\`\`

### Error 3: genéricos anidados demasiado complejos

\`\`\`typescript
// ❌ Difícil de leer
type X<A, B, C> = Respuesta<Paginado<Par<A, B> & { extra: C }>>

// ✅ Divide en pasos legibles
type ParConExtra<A, B, C> = Par<A, B> & { extra: C }
type ResultadoPaginado<T> = Respuesta<Paginado<T>>
type XMejor<A, B, C> = ResultadoPaginado<ParConExtra<A, B, C>>
\`\`\`

### Error 4: confundir genérico con \`any\`

\`\`\`typescript
// ❌ Si no usas el genérico, es como any
interface Contenedor<T> {
  datos: any  // ¡aquí deberías usar T!
  meta: T
}

// ✅ Usa T donde corresponde
interface Contenedor<T> {
  datos: T
  meta: string
}
\`\`\`

### Error 5: type alias genérico que solo oculta complejidad

\`\`\`typescript
// ❌ No aporta valor real — es solo renombrar
type MiString<T extends string> = T
// Usar string directamente sería más claro

// ✅ Un type alias genérico debe simplificar algo
type Nullable<T> = T | null
// Esto sí aporta — modela un patrón común
\`\`\`

### Error 6: hacer todo genérico

No todo necesita ser genérico. Si tienes un componente, función, o tipo que **siempre** trabaja con el mismo tipo, no lo hagas genérico. Los genéricos añaden complejidad visual. Úsalos cuando la variabilidad de tipos es real.

### La regla de oro

**Un genérico se justifica cuando el tipo cambia entre usos y quieres preservar esa información con seguridad.**`,
    codeExample: `// types.ts

// ❌ Error 1: genérico innecesario
interface ProductoGenerico<T> {
  id: number
  nombre: T  // nombre siempre es string — T es innecesario
  precio: number
}

// ✅ Correcto
interface Producto {
  id: number
  nombre: string
  precio: number
}

// ❌ Error 2: genérico que no se usa en el tipo principal
interface ContenedorMal<T> {
  datos: any    // debería ser T
  metadata: T   // T se usa aquí, pero no donde debería
}

// ✅ Correcto
interface Contenedor<T> {
  datos: T       // T en el lugar correcto
  metadata: string
}

// ❌ Error 3: tipo anidado ilegible
// type X<A, B> = Respuesta<Par<A, Paginado<B>>>  // muy difícil de leer

// ✅ Divide en partes
interface Par<A, B> { primero: A; segundo: B }
interface Paginado<T> { items: T[]; total: number }
interface Respuesta<T> { datos: T; exito: boolean }

type ParPaginado<A, B> = Par<A, Paginado<B>>
// Ahora es legible paso a paso

// ✅ Type alias que sí aporta valor
type Nullable<T> = T | null
type ErrorODatos<T> = T | Error

const nombre: Nullable<string> = null
const resultado: ErrorODatos<number> = new Error("Algo salió mal")`,
    keyPoints: [
      'No hagas genérico algo que siempre tendrá el mismo tipo concreto',
      'Usa T donde corresponde — no lo reemplaces con any accidentalmente',
      'Si el tipo genérico anidado es ilegible, divide en pasos intermedios',
      'Los nombres descriptivos (TDatos) son útiles cuando T no transmite suficiente contexto',
      'Un genérico se justifica cuando la variabilidad de tipos es real y necesitas preservarla',
    ],
    exercise: {
      description:
        'Revisa y corrige estos tres tipos: (1) `interface Reporte<T> { titulo: T; datos: string[] }` — ¿es necesario T?, (2) `interface ApiResp<T> { datos: any; exito: T }` — ¿se usa T correctamente?, y (3) `type Config<A, B, C, D> = { host: A; puerto: B; debug: C; timeout: D }` — ¿es razonable tanto genérico?. Propón la versión mejorada de cada uno.',
      hint: 'Para (1) considera si titulo siempre es string. Para (2) revisa dónde debería ir T. Para (3) considera si todos esos tipos realmente varían o si deberían ser concretos.',
    },
    quiz: [
      {
        question: '¿Cuál es el problema de `interface Reporte<T> { titulo: T; contenido: string }`?',
        options: [
          'T no puede usarse en una interfaz',
          'El genérico es innecesario si titulo siempre es string en la práctica',
          'contenido debería ser T también',
          'La interfaz no puede tener dos propiedades',
        ],
        correctAnswer: 'El genérico es innecesario si titulo siempre es string en la práctica',
        correctFeedback:
          '¡Correcto! Si titulo siempre es string, el genérico añade complejidad sin beneficio. Simplifica a `titulo: string` directamente.',
        incorrectFeedback:
          'Si titulo siempre será string, no hay razón para hacerlo genérico. El genérico solo se justifica cuando el tipo varía entre diferentes usos de la interfaz.',
      },
      {
        question: '¿Cuál es el error en `interface Contenedor<T> { datos: any; metadata: T }`?',
        options: [
          'metadata debería ser string, no T',
          'T se aplica a metadata cuando debería aplicarse a datos',
          'Los genéricos no pueden usarse en interfaces con any',
          'La interfaz debería tener más propiedades',
        ],
        correctAnswer: 'T se aplica a metadata cuando debería aplicarse a datos',
        correctFeedback:
          '¡Exacto! El dato principal que varía es datos, no metadata. El genérico debería estar en datos. metadata probablemente siempre es string u otro tipo fijo.',
        incorrectFeedback:
          'El genérico T debería aplicarse a `datos` — eso es lo que varía entre usos. `metadata` probablemente es siempre string o algo fijo. Usar `any` en `datos` elimina la ventaja del genérico.',
      },
      {
        question: '¿Por qué `type X<A, B, C, D> = { a: A; b: B; c: C; d: D }` es problemático?',
        options: [
          'Los type aliases no pueden tener más de 2 genéricos',
          'Cuatro genéricos para un objeto simple es excesivo — probablemente los tipos son conocidos',
          'A, B, C, D son nombres inválidos para genéricos',
          'Los type aliases no pueden tener 4 propiedades',
        ],
        correctAnswer: 'Cuatro genéricos para un objeto simple es excesivo — probablemente los tipos son conocidos',
        correctFeedback:
          '¡Correcto! Si todos los campos tienen tipos concretos en la práctica, define el tipo directamente. Los genéricos son para cuando los tipos realmente varían.',
        incorrectFeedback:
          'Cuatro genéricos independientes es una señal de que algo puede simplificarse. Si todos los campos siempre tienen tipos concretos (string, number), define el tipo directamente sin genéricos.',
      },
      {
        question: '¿Cuál de estos type aliases genéricos está bien justificado?',
        options: [
          'type MiString<T extends string> = T',
          'type Nullable<T> = T | null',
          'type SiempreString<T> = string',
          'type Doble<T> = T & T',
        ],
        correctAnswer: 'type Nullable<T> = T | null',
        correctFeedback:
          '¡Perfecto! `Nullable<T>` captura un patrón real y útil: un valor que puede ser de tipo T o null. Es reutilizable y claro.',
        incorrectFeedback:
          '`Nullable<T>` es el único que aporta valor real — modela un patrón común (`T | null`) de forma reutilizable. Los otros son redundantes (renombrar string, duplicar T, o solo retornar el mismo tipo).',
      },
      {
        question: '¿Cuál es la señal de que un genérico es innecesario?',
        options: [
          'Cuando la interfaz tiene más de 3 propiedades',
          'Cuando en todos los usos reales el tipo genérico siempre es el mismo',
          'Cuando el nombre del genérico es T y no algo más descriptivo',
          'Cuando la interfaz tiene propiedades opcionales',
        ],
        correctAnswer: 'Cuando en todos los usos reales el tipo genérico siempre es el mismo',
        correctFeedback:
          '¡Exacto! Si revisas todos los usos y siempre es `Interfaz<string>` o siempre es `Interfaz<number>`, elimina el genérico y usa el tipo directamente.',
        incorrectFeedback:
          'La señal clave es la variabilidad real. Si en la práctica el genérico siempre se reemplaza por el mismo tipo, no hay razón para el genérico — usa el tipo directamente.',
      },
    ],
  },
]

export const tsModule17: Module = {
  number: 17,
  title: 'Genéricos en interfaces y types',
  level: 'nivel4',
  lessons: lessonsTsModule17,
}
