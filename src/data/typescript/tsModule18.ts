import type { Lesson, Module } from '@/types'

export const lessonsTsModule18: Lesson[] = [
  {
    slug: 'que-son-constraints',
    title: '¿Qué son constraints?',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 136,
    description:
      'Aprende qué son las restricciones en genéricos y por qué ayudan a limitar los tipos permitidos.',
    explanation: `## ¿Qué son constraints?

Los **constraints** (restricciones) en genéricos permiten limitar qué tipos puede ser un parámetro genérico. En vez de aceptar absolutamente cualquier tipo, puedes decir "T debe tener al menos estas propiedades" o "T debe ser de esta forma".

### El problema sin constraints

\`\`\`typescript
function obtenerLongitud<T>(valor: T): number {
  return valor.length // ❌ Error: T no tiene propiedad length garantizada
}
\`\`\`

TypeScript no sabe si T es string, number, array, u otro tipo. Number no tiene \`length\`, así que TypeScript no te deja acceder a ella.

### La solución: extends como constraint

\`\`\`typescript
function obtenerLongitud<T extends { length: number }>(valor: T): number {
  return valor.length // ✅ TypeScript sabe que T tiene length
}

obtenerLongitud("hola")       // ✅ string tiene length
obtenerLongitud([1, 2, 3])    // ✅ arrays tienen length
obtenerLongitud({ length: 5, datos: "x" }) // ✅ tiene length

// obtenerLongitud(42)  // ❌ Error: number no tiene length
\`\`\`

### ¿Qué significa \`extends\` aquí?

En el contexto de constraints, \`extends\` no significa herencia de clases. Significa **"debe satisfacer esta forma"** o **"debe tener al menos estas propiedades"**.

\`T extends { length: number }\` = "T puede ser cualquier tipo que tenga una propiedad \`length\` de tipo number".

### Constraints con tipos básicos

\`\`\`typescript
// T debe ser string o number
function formatear<T extends string | number>(valor: T): string {
  return String(valor)
}

// T debe ser un objeto (no puede ser primitivo)
function clonar<T extends object>(obj: T): T {
  return { ...obj } as T
}
\`\`\`

### Constraints con interfaces

\`\`\`typescript
interface TieneId {
  id: number
}

function obtenerPorId<T extends TieneId>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id)
}

// Funciona con cualquier tipo que tenga id
const usuario = obtenerPorId([{ id: 1, nombre: "Ana" }], 1)  // ✅
const producto = obtenerPorId([{ id: 5, precio: 99 }], 5)    // ✅
\`\`\`

### La diferencia con inferencia pura

Sin constraint, \`T\` puede ser cualquier cosa. Con constraint, TypeScript **garantiza** que T tiene ciertas propiedades, lo que te permite usarlas de forma segura.`,
    codeExample: `// helpers.ts

// Sin constraint — no puedes acceder a propiedades específicas
// function longitud<T>(v: T): number { return v.length } // ❌

// Con constraint — T debe tener length
function longitud<T extends { length: number }>(valor: T): number {
  return valor.length
}

console.log(longitud("TypeScript"))  // 10
console.log(longitud([1, 2, 3, 4])) // 4
console.log(longitud({ length: 7, datos: "abc" })) // 7
// longitud(42)  // ❌ Error: number no satisface { length: number }

// Constraint con interfaz
interface TieneId {
  id: number
}

function buscarPorId<T extends TieneId>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id)
}

const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
]

const productos = [
  { id: 10, nombre: "Laptop", precio: 999 },
  { id: 11, nombre: "Mouse", precio: 29 },
]

const usuarioFound = buscarPorId(usuarios, 1)    // { id, nombre, activo } | undefined
const productoFound = buscarPorId(productos, 10) // { id, nombre, precio } | undefined

// Constraint básico: solo string o number
function mostrar<T extends string | number>(valor: T): string {
  return String(valor)
}

mostrar("hola")  // ✅
mostrar(42)      // ✅
// mostrar(true) // ❌ boolean no está en la unión`,
    keyPoints: [
      'Los constraints limitan qué tipos puede tomar un parámetro genérico',
      'La sintaxis es: <T extends AlgúnTipo>',
      'extends en constraints significa "debe satisfacer esta forma", no herencia',
      'Los constraints permiten acceder a propiedades que TypeScript puede garantizar',
      'Puedes usar interfaces, tipos de unión, u objetos literales como constraints',
    ],
    exercise: {
      description:
        'Crea una función genérica `obtenerPrimero<T extends { length: number }>(coleccion: T): T` que devuelva el mismo valor recibido si length > 0, o null si está vacía. Luego crea otra función `tieneNombre<T extends { nombre: string }>(obj: T): string` que devuelva el nombre. Prueba ambas con strings, arrays y objetos.',
      hint: 'Para obtenerPrimero verifica `coleccion.length > 0`. Para tieneNombre simplemente accede a `obj.nombre` — el constraint lo garantiza.',
    },
    quiz: [
      {
        question: '¿Qué significa `<T extends { length: number }>` en una función genérica?',
        options: [
          'T es exactamente el tipo { length: number }',
          'T puede ser cualquier tipo que tenga al menos una propiedad length de tipo number',
          'T hereda de la clase length',
          'T debe ser un array con números',
        ],
        correctAnswer: 'T puede ser cualquier tipo que tenga al menos una propiedad length de tipo number',
        correctFeedback:
          '¡Correcto! `extends` en constraints significa "debe satisfacer esta forma". T puede tener más propiedades además de length, pero debe tener al menos esa.',
        incorrectFeedback:
          'En constraints, `extends` no es herencia. Significa "debe tener al menos estas propiedades". T puede ser string, array, o cualquier objeto con length, pero no un number puro.',
      },
      {
        question: '¿Por qué da error `function longitud<T>(v: T): number { return v.length }`?',
        options: [
          'Porque los genéricos no pueden devolver number',
          'Porque TypeScript no puede garantizar que T tenga la propiedad length',
          'Porque la función debe recibir un array',
          'Porque length es una propiedad privada',
        ],
        correctAnswer: 'Porque TypeScript no puede garantizar que T tiene la propiedad length',
        correctFeedback:
          '¡Exacto! T podría ser number, boolean, u cualquier cosa sin length. TypeScript no te permite acceder a una propiedad que no está garantizada.',
        incorrectFeedback:
          'T es completamente genérico — podría ser number, boolean, u objeto sin length. TypeScript no puede verificar que v.length existe sin un constraint que lo garantice.',
      },
      {
        question: '¿Cuál de estas llamadas daría error?\n```typescript\nfunction f<T extends string | number>(v: T): string { return String(v) }\n```',
        options: [
          'f("hola")',
          'f(42)',
          'f(true)',
          'f("123")',
        ],
        correctAnswer: 'f(true)',
        correctFeedback:
          '¡Perfecto! El constraint es `string | number`. boolean no está en esa unión, así que TypeScript rechaza `f(true)`.',
        incorrectFeedback:
          'El constraint `extends string | number` solo acepta strings y números. `true` es boolean, que no está en la unión, así que TypeScript da error.',
      },
      {
        question: '¿Cuál es la diferencia entre usar `any` y un constraint en un genérico?',
        options: [
          'No hay diferencia — ambos aceptan cualquier tipo',
          'Con any el código es más seguro; con constraint es más flexible',
          'Con constraint TypeScript verifica que T cumple ciertas condiciones; con any no verifica nada',
          'any solo funciona en JavaScript; constraints solo funcionan en TypeScript',
        ],
        correctAnswer: 'Con constraint TypeScript verifica que T cumple ciertas condiciones; con any no verifica nada',
        correctFeedback:
          '¡Exacto! Un constraint mantiene la seguridad de tipos — TypeScript verifica que el argumento cumple las condiciones. Con any, esa verificación desaparece.',
        incorrectFeedback:
          'La diferencia clave es la seguridad. Con constraints, TypeScript verifica en tiempo de compilación que T tiene las propiedades requeridas. Con any, no hay verificación.',
      },
      {
        question: '¿Qué tipo tiene `encontrado` si `buscarPorId(usuarios, 1)` y usuarios es `{ id: number, nombre: string, activo: boolean }[]`?',
        options: [
          '{ id: number } | undefined',
          'TieneId | undefined',
          '{ id: number, nombre: string, activo: boolean } | undefined',
          'any | undefined',
        ],
        correctAnswer: '{ id: number, nombre: string, activo: boolean } | undefined',
        correctFeedback:
          '¡Perfecto! TypeScript infiere T = { id: number, nombre: string, activo: boolean } desde el array. El constraint solo impone el mínimo, pero TypeScript recuerda el tipo completo.',
        incorrectFeedback:
          'TypeScript infiere el tipo completo del array, no solo el constraint. T = { id, nombre, activo } — el tipo completo del objeto, aunque el constraint solo requiere id.',
      },
    ],
  },
  {
    slug: 'extends-en-genericos',
    title: 'Usar extends en genéricos',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 137,
    description:
      'Aprende a usar extends para exigir que un tipo genérico cumpla cierta estructura.',
    explanation: `## Usar extends en genéricos

El uso de \`extends\` en genéricos es la forma principal de añadir **restricciones** a los tipos. Dominar su uso te permite crear funciones robustas que trabajan con cualquier tipo que cumpla cierta forma.

### Formas de usar extends

**1. Extender una interfaz:**
\`\`\`typescript
interface TieneNombre {
  nombre: string
}

function saludar<T extends TieneNombre>(persona: T): string {
  return \`Hola, \${persona.nombre}!\`
}

saludar({ nombre: "Ana", edad: 25 })        // ✅
saludar({ nombre: "Luis", activo: true })   // ✅
// saludar({ id: 1 })                        // ❌ falta nombre
\`\`\`

**2. Extender un tipo de unión:**
\`\`\`typescript
function procesar<T extends string | number | boolean>(valor: T): string {
  return String(valor)
}
\`\`\`

**3. Extender un objeto literal:**
\`\`\`typescript
function mostrarId<T extends { id: number }>(entidad: T): void {
  console.log(\`ID: \${entidad.id}\`)
}
\`\`\`

**4. Extender otro genérico:**
\`\`\`typescript
function copiarPrimero<T extends U[], U>(lista: T): U {
  return lista[0]
}
\`\`\`

### extends no limita las propiedades extra

Cuando dices \`T extends { id: number }\`, TypeScript no exige que T **solo** tenga id. Exige que T tenga **al menos** id. El objeto puede tener muchas más propiedades.

\`\`\`typescript
function usarId<T extends { id: number }>(obj: T): T {
  console.log(obj.id) // garantizado
  return obj           // devuelve el tipo completo T, no solo { id: number }
}

const resultado = usarId({ id: 1, nombre: "Ana", activo: true })
resultado.nombre // ✅ TypeScript preserva todas las propiedades
\`\`\`

### Combinando constraints

\`\`\`typescript
interface TieneId { id: number }
interface TieneNombre { nombre: string }

function mostrarEntidad<T extends TieneId & TieneNombre>(entidad: T): string {
  return \`[\${entidad.id}] \${entidad.nombre}\`
}
\`\`\`

### extends con tipos de clase

\`\`\`typescript
class Evento {
  constructor(public tipo: string) {}
}

function procesarEvento<T extends Evento>(evento: T): void {
  console.log(\`Procesando evento: \${evento.tipo}\`)
}
\`\`\``,
    codeExample: `// utils.ts

// Constraint con interfaz
interface TieneId {
  id: number
}

interface TieneNombre {
  nombre: string
}

// T debe tener id Y nombre (intersección)
function formatearEntidad<T extends TieneId & TieneNombre>(entidad: T): string {
  return \`[\${entidad.id}] \${entidad.nombre}\`
}

const usuario = { id: 1, nombre: "Ana", email: "ana@email.com" }
const producto = { id: 5, nombre: "Laptop", precio: 999, stock: 10 }

console.log(formatearEntidad(usuario))   // "[1] Ana"
console.log(formatearEntidad(producto))  // "[5] Laptop"

// Constraint que preserva el tipo completo
function actualizarNombre<T extends { nombre: string }>(entidad: T, nuevoNombre: string): T {
  return { ...entidad, nombre: nuevoNombre }
}

const usuarioActualizado = actualizarNombre(usuario, "Ana García")
// usuarioActualizado tiene id, nombre, email — tipo completo preservado
console.log(usuarioActualizado.email)    // ✅ TypeScript sabe que existe email

// Constraint con tipo primitivo
function duplicar<T extends string | number>(valor: T): string {
  return \`\${valor} \${valor}\`
}

console.log(duplicar("hola"))  // "hola hola"
console.log(duplicar(42))      // "42 42"
// duplicar(true)              // ❌ boolean no está en string | number

// Función genérica con constraint de array
function ordenarPor<T extends { [key: string]: unknown }>(
  lista: T[],
  campo: keyof T
): T[] {
  return [...lista].sort((a, b) => {
    if (a[campo] < b[campo]) return -1
    if (a[campo] > b[campo]) return 1
    return 0
  })
}

const ordenados = ordenarPor(usuario ? [usuario] : [], 'nombre')`,
    keyPoints: [
      'extends en constraints exige que T tenga al menos las propiedades indicadas',
      'T puede tener propiedades adicionales — el constraint solo establece el mínimo',
      'Puedes combinar constraints con intersección: T extends A & B',
      'El tipo de retorno preserva el tipo completo T, no solo el constraint',
      'extends puede usarse con interfaces, uniones, objetos literales, y tipos de clase',
    ],
    exercise: {
      description:
        'Crea una función `actualizarItem<T extends { id: number }>(lista: T[], id: number, cambios: Partial<T>): T[]` que devuelva la lista con el elemento de ese id actualizado con los cambios. Pruébala con una lista de usuarios `{ id, nombre, activo }` actualizando el nombre de uno.',
      hint: 'Usa `lista.map(item => item.id === id ? { ...item, ...cambios } : item)` para crear la nueva lista sin mutar la original.',
    },
    quiz: [
      {
        question: '¿Qué garantiza `<T extends { nombre: string }>`?',
        options: [
          'Que T solo tiene la propiedad nombre',
          'Que T tiene al menos la propiedad nombre de tipo string',
          'Que T es exactamente el tipo { nombre: string }',
          'Que T debe ser una clase con propiedad nombre',
        ],
        correctAnswer: 'Que T tiene al menos la propiedad nombre de tipo string',
        correctFeedback:
          '¡Correcto! El constraint establece el mínimo. T puede tener nombre, edad, email, y muchas más propiedades.',
        incorrectFeedback:
          '`extends` en constraints establece el mínimo requerido, no el máximo. T puede tener nombre y muchas más propiedades. Solo se garantiza que nombre: string existe.',
      },
      {
        question: 'Si `function f<T extends { id: number }>(obj: T): T`, ¿qué tipo tiene el retorno con `f({ id: 1, nombre: "Ana" })`?',
        options: [
          '{ id: number }',
          'TieneId',
          '{ id: number, nombre: string }',
          'any',
        ],
        correctAnswer: '{ id: number, nombre: string }',
        correctFeedback:
          '¡Perfecto! T se infiere como el tipo completo { id: number, nombre: string }. El retorno es T, no el constraint. TypeScript preserva toda la información.',
        incorrectFeedback:
          'T se infiere como el tipo completo del argumento, no solo el constraint. Como pasaste { id: 1, nombre: "Ana" }, T = { id: number, nombre: string } y el retorno preserva ese tipo completo.',
      },
      {
        question: '¿Cuál sería el error al llamar `formatearEntidad({ id: 1, activo: true })` si el constraint es `T extends TieneId & TieneNombre`?',
        options: [
          'No hay error — TieneId se satisface con id: 1',
          'Error: falta la propiedad nombre que exige TieneNombre',
          'Error: activo no está en TieneId ni TieneNombre',
          'Error: TieneId & TieneNombre no es un constraint válido',
        ],
        correctAnswer: 'Error: falta la propiedad nombre que exige TieneNombre',
        correctFeedback:
          '¡Exacto! El constraint exige AMBAS: TieneId (id: number) y TieneNombre (nombre: string). El objeto pasado tiene id pero le falta nombre.',
        incorrectFeedback:
          'El constraint `TieneId & TieneNombre` exige tener id (de TieneId) Y nombre (de TieneNombre). El objeto tiene id pero le falta nombre, así que TypeScript rechaza la llamada.',
      },
      {
        question: '¿Qué significa que `extends` en constraints "no limita las propiedades extra"?',
        options: [
          'Que el objeto puede no tener las propiedades del constraint',
          'Que puedes pasar objetos con más propiedades de las que el constraint especifica',
          'Que TypeScript ignora las propiedades extra',
          'Que el constraint no sirve si hay propiedades adicionales',
        ],
        correctAnswer: 'Que puedes pasar objetos con más propiedades de las que el constraint especifica',
        correctFeedback:
          '¡Correcto! `T extends { id: number }` acepta { id: 1, nombre: "Ana", email: "..." } — tiene id y más. El constraint solo exige el mínimo.',
        incorrectFeedback:
          'El constraint establece el mínimo, no el máximo. Si el constraint pide `{ id: number }`, puedes pasar un objeto con id, nombre, email, y lo que quieras. Lo extra está bien.',
      },
      {
        question: '¿Cuál de estas declaraciones es correcta para una función que requiere id y nombre?',
        options: [
          'function f<T>(obj: T & { id: number; nombre: string })',
          'function f<T extends { id: number; nombre: string }>(obj: T)',
          'function f(obj: { id: number } & { nombre: string })',
          'Opciones 1 y 2 son válidas; opciones 3 también funciona',
        ],
        correctAnswer: 'Opciones 1 y 2 son válidas; opciones 3 también funciona',
        correctFeedback:
          '¡Perfecto! Las tres formas funcionan. La diferencia es que con genérico (opciones 1 y 2) TypeScript preserva el tipo completo en el retorno. La opción 3 es más simple si no necesitas preservar T.',
        incorrectFeedback:
          'Las tres formas pueden funcionar. Con genérico (<T extends ...>) TypeScript preserva el tipo completo. Sin genérico (opción 3) el tipo se fija a { id: number; nombre: string }. La elección depende de si necesitas preservar propiedades extra.',
      },
    ],
  },
  {
    slug: 'constraints-con-objetos',
    title: 'Constraints con objetos',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 138,
    description:
      'Aprende a limitar un genérico para que solo acepte objetos con ciertas propiedades.',
    explanation: `## Constraints con objetos

Los constraints más comunes en TypeScript son los que exigen que un tipo sea un **objeto con ciertas propiedades**. Esto permite crear funciones genéricas que trabajen de forma segura con estructuras de datos del dominio.

### Constraint básico con propiedad

\`\`\`typescript
function obtenerCampo<T extends { [campo: string]: unknown }>(obj: T, campo: keyof T) {
  return obj[campo]
}
\`\`\`

### Funciones CRUD genéricas

\`\`\`typescript
interface ConId {
  id: number
}

// Eliminar por id de cualquier lista
function eliminarPorId<T extends ConId>(lista: T[], id: number): T[] {
  return lista.filter((item) => item.id !== id)
}

// Actualizar un item en una lista
function actualizarItem<T extends ConId>(lista: T[], item: T): T[] {
  return lista.map((existing) => existing.id === item.id ? item : existing)
}
\`\`\`

### Constraint con múltiples propiedades

\`\`\`typescript
interface Entidad {
  id: number
  creadoEn: string
  actualizadoEn: string
}

function formatearEntidad<T extends Entidad>(entidad: T): string {
  return \`[#\${entidad.id}] Creado: \${entidad.creadoEn}\`
}
\`\`\`

### Constraint con objeto anidado

\`\`\`typescript
interface TieneMetadata {
  metadata: {
    version: number
    autor: string
  }
}

function obtenerVersion<T extends TieneMetadata>(item: T): number {
  return item.metadata.version
}
\`\`\`

### Combinar constraints y Partial

\`\`\`typescript
// Actualizar parcialmente cualquier objeto con id
function patchItem<T extends { id: number }>(
  lista: T[],
  id: number,
  cambios: Partial<Omit<T, 'id'>>
): T[] {
  return lista.map((item) =>
    item.id === id ? { ...item, ...cambios } : item
  )
}
\`\`\`

### Constraint para objetos iterables

\`\`\`typescript
// Solo para objetos con items array
function contarItems<T extends { items: unknown[] }>(coleccion: T): number {
  return coleccion.items.length
}
\`\`\``,
    codeExample: `// helpers.ts

// Constraint básico: objeto con id
interface ConId {
  id: number
}

// Buscar por id en cualquier lista
function buscarPorId<T extends ConId>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id)
}

// Eliminar por id de cualquier lista
function eliminarPorId<T extends ConId>(lista: T[], id: number): T[] {
  return lista.filter((item) => item.id !== id)
}

// Actualizar por id en cualquier lista
function actualizarPorId<T extends ConId>(lista: T[], item: T): T[] {
  return lista.map((existing) => existing.id === item.id ? item : existing)
}

// Datos de prueba
const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "María", activo: true },
]

const productos = [
  { id: 10, nombre: "Laptop", precio: 999 },
  { id: 11, nombre: "Mouse", precio: 29 },
]

// Mismas funciones, distintos tipos
const ana = buscarPorId(usuarios, 1)       // { id, nombre, activo } | undefined
const laptop = buscarPorId(productos, 10)  // { id, nombre, precio } | undefined

const sinLuis = eliminarPorId(usuarios, 2) // Usuario[] sin el id=2
const sinMouse = eliminarPorId(productos, 11) // Producto[] sin el id=11

const usuarioActualizado = actualizarPorId(usuarios, { id: 1, nombre: "Ana García", activo: true })
// TypeScript verifica que el item tiene el tipo correcto

console.log(ana?.nombre)     // ✅ TypeScript sabe que nombre existe
console.log(laptop?.precio)  // ✅ TypeScript sabe que precio existe`,
    keyPoints: [
      'Los constraints con objetos son los más comunes y prácticos en TypeScript',
      'Una interfaz como constraint establece las propiedades mínimas requeridas',
      'Funciones CRUD (buscar, eliminar, actualizar) pueden ser genéricas con constraint ConId',
      'El tipo completo T se preserva en los retornos — no solo el constraint mínimo',
      'Puedes combinar constraints con Partial, Omit, y otros utility types',
    ],
    exercise: {
      description:
        'Crea tres funciones genéricas usando el constraint `T extends { id: number; nombre: string }`: (1) `mostrarItems<T>(lista: T[]): void` que imprima `"[id] nombre"` por cada elemento, (2) `filtrarActivos<T extends { id: number; nombre: string; activo: boolean }>(lista: T[]): T[]` que devuelva solo los activos, y (3) `buscarPorNombre<T extends { id: number; nombre: string }>(lista: T[], nombre: string): T | undefined`. Pruébalas con una lista de usuarios.',
      hint: 'Usa `lista.filter`, `lista.find`, y template literals para los mensajes. Cada función puede usar su propio constraint.',
    },
    quiz: [
      {
        question: '¿Por qué usar `<T extends { id: number }>` en lugar de aceptar directamente `{ id: number }`?',
        options: [
          'No hay diferencia práctica entre las dos formas',
          'Con el genérico TypeScript preserva el tipo completo en el retorno; sin él lo fija a { id: number }',
          'El constraint es necesario para que TypeScript compile',
          'Sin el genérico la función es más lenta',
        ],
        correctAnswer: 'Con el genérico TypeScript preserva el tipo completo en el retorno; sin él lo fija a { id: number }',
        correctFeedback:
          '¡Correcto! Si devuelves `T`, TypeScript recuerda que es { id: number, nombre: string, activo: boolean }. Si devuelves { id: number }, pierdes las propiedades extra.',
        incorrectFeedback:
          'La clave es el tipo de retorno. Con `T extends { id: number }` y retorno `T`, TypeScript sabe el tipo completo del objeto. Sin genérico, el retorno es solo { id: number } y pierdes propiedades extra.',
      },
      {
        question: '¿Qué hace `lista.filter((item) => item.id !== id)` en una función `<T extends { id: number }>`?',
        options: [
          'Filtra elementos cuyo id es igual al especificado',
          'Devuelve T[] con todos los elementos excepto el que tiene ese id',
          'Modifica la lista original eliminando el elemento',
          'Devuelve undefined si no encuentra el id',
        ],
        correctAnswer: 'Devuelve T[] con todos los elementos excepto el que tiene ese id',
        correctFeedback:
          '¡Exacto! filter con `!== id` devuelve todos EXCEPTO el que tiene ese id. No muta la lista original — crea una nueva.',
        incorrectFeedback:
          'filter devuelve un nuevo array con los elementos que pasan la condición. `item.id !== id` pasa cuando el id NO coincide. Resultado: nuevo array sin el elemento con ese id.',
      },
      {
        question: '¿Qué error produce este código?\n```typescript\nfunction mostrar<T extends { nombre: string }>(item: T): void {\n  console.log(item.nombre)\n}\nmostrar({ id: 1, activo: true })\n```',
        options: [
          'Ningún error — TypeScript acepta objetos con cualquier propiedades',
          'Error: el argumento no tiene la propiedad nombre requerida por el constraint',
          'Error: el constraint no puede ser un objeto literal',
          'Error: mostrar no puede devolver void con genéricos',
        ],
        correctAnswer: 'Error: el argumento no tiene la propiedad nombre requerida por el constraint',
        correctFeedback:
          '¡Correcto! El constraint exige `nombre: string` pero el objeto `{ id: 1, activo: true }` no tiene nombre. TypeScript rechaza la llamada.',
        incorrectFeedback:
          'El constraint `{ nombre: string }` exige que el argumento tenga la propiedad nombre. El objeto `{ id: 1, activo: true }` no la tiene, así que TypeScript da un error de tipos.',
      },
      {
        question: 'Si `buscarPorId([{ id: 1, nombre: "Ana", email: "a@b.com" }], 1)` y la función usa `T extends { id: number }`, ¿qué tipo tiene el resultado?',
        options: [
          '{ id: number } | undefined',
          '{ id: number, nombre: string, email: string } | undefined',
          'ConId | undefined',
          'any',
        ],
        correctAnswer: '{ id: number, nombre: string, email: string } | undefined',
        correctFeedback:
          '¡Perfecto! TypeScript infiere T = { id: number, nombre: string, email: string } — el tipo completo del objeto en el array, no solo el constraint mínimo.',
        incorrectFeedback:
          'TypeScript infiere T desde los elementos del array. Como son `{ id, nombre, email }`, T tiene ese tipo completo. El constraint es solo el mínimo — el tipo real preserva todas las propiedades.',
      },
      {
        question: '¿Para qué sirve `Partial<Omit<T, "id">>` en una función de actualización parcial?',
        options: [
          'Para crear un nuevo objeto sin ninguna propiedad',
          'Para crear un tipo con todas las propiedades de T excepto id, todas opcionales',
          'Para eliminar el id del objeto resultante',
          'Para convertir T en un tipo con solo id como propiedad',
        ],
        correctAnswer: 'Para crear un tipo con todas las propiedades de T excepto id, todas opcionales',
        correctFeedback:
          '¡Exacto! `Omit<T, "id">` quita la propiedad id. `Partial<...>` hace todas las propiedades restantes opcionales. Perfecto para actualizaciones parciales donde no quieres cambiar el id.',
        incorrectFeedback:
          'Son dos utility types combinados: `Omit<T, "id">` crea un tipo igual a T pero sin id, y `Partial<...>` hace todas esas propiedades opcionales. Esto permite pasar solo los campos que quieres actualizar.',
      },
    ],
  },
  {
    slug: 'keyof-explicado-simple',
    title: 'keyof explicado simple',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 139,
    description: 'Aprende qué es keyof y cómo obtiene las claves de un tipo.',
    explanation: `## keyof explicado simple

\`keyof\` es un operador de TypeScript que obtiene **todas las claves** de un tipo como una unión de string literals. Es como preguntarle a TypeScript: "¿qué propiedades tiene este tipo?"

### La idea básica

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

type ClavesUsuario = keyof Usuario
// Equivale a: "id" | "nombre" | "email" | "activo"
\`\`\`

### ¿Por qué es útil?

Sin \`keyof\`, si quieres acceder a una propiedad de un objeto de forma dinámica, TypeScript no puede verificar que la clave existe:

\`\`\`typescript
function obtenerValor(obj: Usuario, clave: string) {
  return obj[clave] // ❌ Error: string no es una clave válida de Usuario
}
\`\`\`

Con \`keyof\`:

\`\`\`typescript
function obtenerValor(obj: Usuario, clave: keyof Usuario) {
  return obj[clave] // ✅ TypeScript sabe que clave es "id" | "nombre" | ...
}

obtenerValor(usuario, "nombre")  // ✅
// obtenerValor(usuario, "edad") // ❌ Error: "edad" no es clave de Usuario
\`\`\`

### keyof con tipos indexados

Cuando usas \`keyof T\` y accedes a \`obj[clave]\`, TypeScript también sabe el tipo del valor:

\`\`\`typescript
// T[K] es el tipo del valor de la propiedad K en T
function obtener<T, K extends keyof T>(obj: T, clave: K): T[K] {
  return obj[clave]
}

const usuario = { id: 1, nombre: "Ana", activo: true }
const nombre = obtener(usuario, "nombre")   // tipo: string
const id = obtener(usuario, "id")           // tipo: number
const activo = obtener(usuario, "activo")   // tipo: boolean
\`\`\`

### keyof con clases y tipos complejos

\`\`\`typescript
class Producto {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number
  ) {}
}

type ClavesProducto = keyof Producto
// "id" | "nombre" | "precio"
\`\`\`

### Valor del tipo de una propiedad: T[K]

\`T[K]\` (índice de tipo) obtiene el tipo del valor de la propiedad K en T:

\`\`\`typescript
type TipoNombre = Usuario["nombre"]   // string
type TipoId = Usuario["id"]           // number
type TipoActivo = Usuario["activo"]   // boolean
\`\`\``,
    codeExample: `// types.ts

interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
  enStock: boolean
}

// keyof obtiene las claves como unión de string literals
type ClavesProducto = keyof Producto
// "id" | "nombre" | "precio" | "categoria" | "enStock"

// Acceso seguro a propiedades dinámicas
function obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] {
  return obj[clave]
}

const laptop: Producto = {
  id: 1,
  nombre: "Laptop Pro",
  precio: 1299,
  categoria: "Tecnología",
  enStock: true,
}

// TypeScript conoce el tipo exacto de cada propiedad
const nombre = obtenerPropiedad(laptop, "nombre")    // tipo: string
const precio = obtenerPropiedad(laptop, "precio")    // tipo: number
const enStock = obtenerPropiedad(laptop, "enStock")  // tipo: boolean

console.log(nombre)   // "Laptop Pro"
console.log(precio)   // 1299
console.log(enStock)  // true

// Esto daría error de TypeScript — "descuento" no es clave de Producto
// obtenerPropiedad(laptop, "descuento")  // ❌

// keyof como restricción en funciones
function mostrarCampos<T>(obj: T, campos: (keyof T)[]): void {
  campos.forEach((campo) => {
    console.log(\`\${String(campo)}: \${obj[campo]}\`)
  })
}

mostrarCampos(laptop, ["nombre", "precio", "categoria"])
// nombre: Laptop Pro
// precio: 1299
// categoria: Tecnología`,
    keyPoints: [
      'keyof T crea una unión de todas las claves del tipo T como string literals',
      'keyof permite acceder a propiedades dinámicas de forma segura',
      'T[K] obtiene el tipo del valor de la propiedad K en T',
      'K extends keyof T garantiza que K es una clave válida de T',
      'keyof previene errores de acceso a propiedades inexistentes en tiempo de compilación',
    ],
    exercise: {
      description:
        'Crea una función `obtenerValores<T>(obj: T, claves: (keyof T)[]): T[keyof T][]` que devuelva un array con los valores de las claves especificadas. Por ejemplo, `obtenerValores({ id: 1, nombre: "Ana", activo: true }, ["id", "nombre"])` devuelve `[1, "Ana"]`. Pruébala con diferentes tipos de objeto.',
      hint: 'Usa `claves.map(clave => obj[clave])` y el tipo de retorno `T[keyof T][]` para tiparlo correctamente.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `keyof { nombre: string; edad: number; activo: boolean }`?',
        options: [
          '"nombre" | "edad" | "activo"',
          'string | number | boolean',
          '["nombre", "edad", "activo"]',
          'string',
        ],
        correctAnswer: '"nombre" | "edad" | "activo"',
        correctFeedback:
          '¡Correcto! keyof devuelve una unión de las claves del tipo como string literals. No devuelve los tipos de los valores, sino los nombres de las propiedades.',
        incorrectFeedback:
          'keyof devuelve las CLAVES del tipo, no los tipos de los valores. Las claves son los nombres de las propiedades: "nombre" | "edad" | "activo".',
      },
      {
        question: '¿Qué tipo tiene `obtener(usuario, "nombre")` si `function obtener<T, K extends keyof T>(obj: T, k: K): T[K]` y `usuario: { nombre: string; id: number }`?',
        options: ['any', 'string | number', 'string', 'T[K]'],
        correctAnswer: 'string',
        correctFeedback:
          '¡Exacto! K = "nombre", T = { nombre: string, id: number }. T[K] = T["nombre"] = string. TypeScript conoce el tipo exacto del valor.',
        incorrectFeedback:
          'TypeScript resuelve T[K] cuando K es concreto. K = "nombre", T["nombre"] = string. El resultado es string, no string | number ni any.',
      },
      {
        question: '¿Por qué `obtener(usuario, "edad")` daría error si `usuario: { nombre: string; id: number }`?',
        options: [
          'Porque obtener solo acepta string como segundo argumento',
          'Porque "edad" no es una clave válida de T — K extends keyof T lo previene',
          'Porque edad no está en el type index T[K]',
          'Porque T no puede tener claves dinámicas',
        ],
        correctAnswer: 'Porque "edad" no es una clave válida de T — K extends keyof T lo previene',
        correctFeedback:
          '¡Perfecto! K extends keyof T garantiza que K debe ser una clave real de T. "edad" no es clave de { nombre: string, id: number }, así que TypeScript da error.',
        incorrectFeedback:
          '`K extends keyof T` restringe K a ser solo las claves que existen en T. Como "edad" no es clave de { nombre: string, id: number }, TypeScript rechaza la llamada.',
      },
      {
        question: '¿Qué tipo tiene `Usuario["email"]` si `interface Usuario { id: number; email: string }`?',
        options: ['"email"', 'string', 'keyof Usuario', 'number'],
        correctAnswer: 'string',
        correctFeedback:
          '¡Correcto! `T[K]` es el tipo del valor, no el tipo de la clave. `Usuario["email"]` es el tipo de la propiedad email, que es string.',
        incorrectFeedback:
          '`Usuario["email"]` es la notación de tipo indexado — devuelve el tipo del VALOR de esa propiedad. La propiedad email tiene tipo string, así que `Usuario["email"]` = string.',
      },
      {
        question: '¿Qué ventaja ofrece `keyof T` sobre aceptar un `string` genérico para claves de objeto?',
        options: [
          'keyof T es más rápido en tiempo de ejecución',
          'keyof T restringe las claves a las que realmente existen en el tipo, evitando errores',
          'Los strings genéricos no funcionan en TypeScript',
          'keyof T convierte las claves a números automáticamente',
        ],
        correctAnswer: 'keyof T restringe las claves a las que realmente existen en el tipo, evitando errores',
        correctFeedback:
          '¡Exacto! Con string podrías pasar "propiedad_que_no_existe" y TypeScript no diría nada. Con keyof T, solo puedes pasar claves que el tipo realmente tiene.',
        incorrectFeedback:
          'La ventaja es la seguridad en tiempo de compilación. Con string, TypeScript no puede verificar si la clave existe. Con keyof T, solo se aceptan las claves reales del tipo.',
      },
    ],
  },
  {
    slug: 'genericos-con-keyof',
    title: 'Genéricos con keyof',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 140,
    description:
      'Aprende a crear funciones seguras que acceden a propiedades de objetos usando keyof.',
    explanation: `## Genéricos con keyof

La combinación de genéricos y \`keyof\` es uno de los patrones más poderosos de TypeScript. Permite crear funciones que acceden a propiedades de cualquier objeto de forma **completamente segura**.

### El patrón clásico: getProperty

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
\`\`\`

Este patrón es tan útil que TypeScript lo usa internamente en muchos lugares.

- \`T\`: el tipo del objeto
- \`K extends keyof T\`: K debe ser una clave real de T
- \`T[K]\`: el tipo del valor de esa propiedad

### Ejemplo con objetos del dominio

\`\`\`typescript
interface Estudiante {
  id: number
  nombre: string
  nota: number
  aprobado: boolean
}

const estudiante: Estudiante = { id: 1, nombre: "Ana", nota: 9.5, aprobado: true }

getProperty(estudiante, "nombre")   // "Ana" — tipo: string
getProperty(estudiante, "nota")     // 9.5 — tipo: number
getProperty(estudiante, "aprobado") // true — tipo: boolean
// getProperty(estudiante, "edad")  // ❌ Error: "edad" no es clave de Estudiante
\`\`\`

### Función de comparación por campo

\`\`\`typescript
function ordenarPorCampo<T>(lista: T[], campo: keyof T): T[] {
  return [...lista].sort((a, b) => {
    const va = a[campo]
    const vb = b[campo]
    if (va < vb) return -1
    if (va > vb) return 1
    return 0
  })
}

const estudiantesOrdenados = ordenarPorCampo(estudiantes, "nota")  // ✅
// ordenarPorCampo(estudiantes, "grado")  // ❌ Error
\`\`\`

### Función para seleccionar campos

\`\`\`typescript
function seleccionar<T, K extends keyof T>(obj: T, claves: K[]): Pick<T, K> {
  const resultado = {} as Pick<T, K>
  claves.forEach((clave) => {
    resultado[clave] = obj[clave]
  })
  return resultado
}

const resumen = seleccionar(estudiante, ["nombre", "nota"])
// resumen es { nombre: string, nota: number }
\`\`\`

### Función para actualizar un campo

\`\`\`typescript
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value }
}

const actualizado = setProperty(estudiante, "nota", 10)
// actualizado es Estudiante con nota = 10
// setProperty(estudiante, "nota", "diez")  // ❌ Error: "diez" no es number
\`\`\``,
    codeExample: `// utils.ts

// El patrón clásico: acceso seguro a propiedades
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// Actualizar una propiedad de forma segura
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value }
}

// Datos de prueba
interface Tarea {
  id: number
  titulo: string
  prioridad: 'alta' | 'media' | 'baja'
  completada: boolean
}

const tarea: Tarea = {
  id: 1,
  titulo: "Estudiar TypeScript",
  prioridad: "alta",
  completada: false,
}

// getProperty — TypeScript sabe el tipo de cada valor
const titulo = getProperty(tarea, "titulo")       // tipo: string
const prioridad = getProperty(tarea, "prioridad") // tipo: "alta" | "media" | "baja"
const completada = getProperty(tarea, "completada") // tipo: boolean

// setProperty — TypeScript verifica que el valor es del tipo correcto
const tareaCompletada = setProperty(tarea, "completada", true)  // ✅
const conNuevaProri = setProperty(tarea, "prioridad", "media")  // ✅
// setProperty(tarea, "completada", "si")  // ❌ "si" no es boolean

// Función para filtrar por campo
function filtrarPorValor<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[] {
  return lista.filter((item) => item[campo] === valor)
}

const tareas: Tarea[] = [
  { id: 1, titulo: "A", prioridad: "alta", completada: false },
  { id: 2, titulo: "B", prioridad: "media", completada: true },
  { id: 3, titulo: "C", prioridad: "alta", completada: false },
]

const altaPrioridad = filtrarPorValor(tareas, "prioridad", "alta")
// [Tarea1, Tarea3] — TypeScript verifica que "alta" es válido para prioridad`,
    keyPoints: [
      'La combinación <T, K extends keyof T> es el patrón más poderoso para acceso dinámico seguro',
      'T[K] es el tipo del valor de la propiedad K en T',
      'setProperty verifica que el valor tiene el tipo correcto para esa propiedad',
      'keyof permite crear funciones reutilizables que funcionan con cualquier objeto',
      'TypeScript puede inferir K automáticamente desde la clave que pasas',
    ],
    exercise: {
      description:
        'Crea una función `seleccionarCampos<T, K extends keyof T>(obj: T, campos: K[]): Pick<T, K>` que devuelva un nuevo objeto solo con los campos seleccionados. Por ejemplo, `seleccionarCampos({ id: 1, nombre: "Ana", email: "...", activo: true }, ["nombre", "activo"])` devuelve `{ nombre: "Ana", activo: true }`. Pruébala con usuarios y productos.',
      hint: 'Crea un objeto vacío con `{} as Pick<T, K>` y usa `campos.forEach` para copiar cada campo. El tipo de retorno Pick<T, K> es un utility type que veremos en el módulo siguiente.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene el retorno de `getProperty(producto, "precio")` si `interface Producto { precio: number }`?',
        options: ['keyof Producto', 'T[K]', 'number', 'string | number'],
        correctAnswer: 'number',
        correctFeedback:
          '¡Perfecto! K = "precio", T = Producto, T[K] = Producto["precio"] = number. TypeScript resuelve el tipo indexado automáticamente.',
        incorrectFeedback:
          'T[K] se resuelve con los tipos concretos. K = "precio", T = Producto, Producto["precio"] = number. El resultado es number.',
      },
      {
        question: '¿Por qué `setProperty(tarea, "completada", "sí")` daría error si `completada: boolean`?',
        options: [
          'Porque setProperty no acepta strings',
          'Porque T[K] = boolean para "completada", pero se pasó "sí" (string)',
          'Porque "sí" no es un valor boolean válido',
          'Porque tarea ya está completada',
        ],
        correctAnswer: 'Porque T[K] = boolean para "completada", pero se pasó "sí" (string)',
        correctFeedback:
          '¡Exacto! El tercer parámetro de setProperty es `value: T[K]`. Para la clave "completada", T[K] = boolean. "sí" es string, no boolean.',
        incorrectFeedback:
          'El tercer argumento de setProperty debe ser `T[K]` — el tipo del valor para esa clave. Como `completada: boolean`, el valor debe ser boolean. "sí" (string) no es compatible.',
      },
      {
        question: '¿Cuál es la diferencia entre `keyof T` y `K extends keyof T`?',
        options: [
          'No hay diferencia — son equivalentes',
          'keyof T es el tipo de todas las claves; K extends keyof T crea un parámetro genérico restringido a esas claves',
          'K extends keyof T solo funciona con strings',
          'keyof T es para tipos; K extends keyof T es para variables',
        ],
        correctAnswer: 'keyof T es el tipo de todas las claves; K extends keyof T crea un parámetro genérico restringido a esas claves',
        correctFeedback:
          '¡Correcto! `keyof T` es una expresión de tipo (la unión de claves). `K extends keyof T` declara un parámetro genérico K que debe ser una de esas claves.',
        incorrectFeedback:
          '`keyof T` es el tipo resultado (la unión). `K extends keyof T` declara K como un parámetro genérico que solo puede ser una clave de T. La diferencia es que K captura la clave específica.',
      },
      {
        question: '¿Para qué sirve `filtrarPorValor<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[]`?',
        options: [
          'Para ordenar la lista por el campo dado',
          'Para filtrar la lista manteniendo solo los elementos donde campo === valor, con tipos verificados',
          'Para eliminar el campo de todos los elementos',
          'Para crear un nuevo array con solo el campo especificado',
        ],
        correctAnswer: 'Para filtrar la lista manteniendo solo los elementos donde campo === valor, con tipos verificados',
        correctFeedback:
          '¡Exacto! La ventaja es que TypeScript verifica que `valor` tiene el tipo correcto para ese `campo`. Así `filtrarPorValor(tareas, "completada", "sí")` daría error porque "sí" no es boolean.',
        incorrectFeedback:
          'La función filtra la lista, pero la clave es la seguridad de tipos: `valor: T[K]` garantiza que el valor tiene el tipo correcto para ese campo. Así se evitan comparaciones de tipo incorrecto.',
      },
      {
        question: '¿Cuál de estas llamadas NO daría error?\n```typescript\nfunction g<T, K extends keyof T>(obj: T, k: K): T[K] { return obj[k] }\nconst p = { nombre: "Laptop", precio: 999, activo: true }\n```',
        options: [
          'g(p, "descuento")',
          'g(p, "nombre")',
          'g(p, "stock")',
          'g(p, 0)',
        ],
        correctAnswer: 'g(p, "nombre")',
        correctFeedback:
          '¡Correcto! "nombre" es una clave real de p. Las otras opciones (descuento, stock, 0) no son claves válidas del objeto.',
        incorrectFeedback:
          'Solo "nombre" es una clave real del objeto p = { nombre, precio, activo }. Las otras opciones (descuento, stock, 0) no son claves de p, así que TypeScript las rechaza.',
      },
    ],
  },
  {
    slug: 'constraints-con-arrays',
    title: 'Constraints con arrays',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 141,
    description:
      'Aprende a aplicar restricciones en funciones que trabajan con listas de datos.',
    explanation: `## Constraints con arrays

Puedes combinar constraints y arrays para crear funciones genéricas que trabajen con **listas de objetos específicos**. Esto es extremadamente útil para operaciones de filtrado, búsqueda, ordenación y transformación.

### Constraint básico con arrays

\`\`\`typescript
function primero<T extends { id: number }>(lista: T[]): T | undefined {
  return lista[0]
}
\`\`\`

### Filtrar arrays con constraint

\`\`\`typescript
function filtrarActivos<T extends { activo: boolean }>(lista: T[]): T[] {
  return lista.filter((item) => item.activo)
}

const activos = filtrarActivos(usuarios)  // Usuario[] donde activo = true
const enStock = filtrarActivos(productos) // Producto[] donde activo = true
\`\`\`

### Agrupar por campo

\`\`\`typescript
function agruparPor<T>(lista: T[], clave: keyof T): Record<string, T[]> {
  return lista.reduce((grupos, item) => {
    const valor = String(item[clave])
    return {
      ...grupos,
      [valor]: [...(grupos[valor] ?? []), item],
    }
  }, {} as Record<string, T[]>)
}
\`\`\`

### Encontrar máximo por campo numérico

\`\`\`typescript
function maximoPor<T>(lista: T[], campo: keyof T): T | undefined {
  return lista.reduce((max, item) => {
    if (max === undefined) return item
    return item[campo] > max[campo] ? item : max
  }, undefined as T | undefined)
}
\`\`\`

### Suma de campo numérico

\`\`\`typescript
function sumarCampo<T>(lista: T[], campo: keyof T): number {
  return lista.reduce((suma, item) => {
    const valor = item[campo]
    return typeof valor === 'number' ? suma + valor : suma
  }, 0)
}
\`\`\`

### Paginación genérica

\`\`\`typescript
function paginar<T>(lista: T[], pagina: number, porPagina: number): {
  items: T[]
  total: number
  pagina: number
  totalPaginas: number
} {
  const inicio = (pagina - 1) * porPagina
  const items = lista.slice(inicio, inicio + porPagina)
  return {
    items,
    total: lista.length,
    pagina,
    totalPaginas: Math.ceil(lista.length / porPagina),
  }
}
\`\`\``,
    codeExample: `// utils.ts

// Filtrar por propiedad boolean
function filtrarActivos<T extends { activo: boolean }>(lista: T[]): T[] {
  return lista.filter((item) => item.activo)
}

// Buscar por cualquier campo
function buscarPor<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[] {
  return lista.filter((item) => item[campo] === valor)
}

// Extraer un campo de todos los elementos
function extraerCampo<T, K extends keyof T>(lista: T[], campo: K): T[K][] {
  return lista.map((item) => item[campo])
}

// Datos de prueba
interface Estudiante {
  id: number
  nombre: string
  nota: number
  aprobado: boolean
}

const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Ana", nota: 9.5, aprobado: true },
  { id: 2, nombre: "Luis", nota: 4.8, aprobado: false },
  { id: 3, nombre: "María", nota: 7.2, aprobado: true },
  { id: 4, nombre: "Pedro", nota: 5.5, aprobado: true },
]

// Usar las funciones genéricas
const aprobados = filtrarActivos(
  estudiantes.map((e) => ({ ...e, activo: e.aprobado }))
)

const notasAltas = buscarPor(
  estudiantes.map(e => ({ ...e, categoria: e.nota >= 7 ? 'alta' : 'normal' })),
  'categoria',
  'alta'
)

const nombres = extraerCampo(estudiantes, "nombre")    // string[]
const notas = extraerCampo(estudiantes, "nota")        // number[]
const ids = extraerCampo(estudiantes, "id")            // number[]

console.log(nombres)  // ["Ana", "Luis", "María", "Pedro"]
console.log(notas)    // [9.5, 4.8, 7.2, 5.5]`,
    keyPoints: [
      'Puedes combinar constraints con arrays: T extends SomeTipo para T[]',
      'Funciones como filtrar, buscar, y extraer pueden ser genéricas con constraints',
      'keyof T + T[K] permite acceso seguro a cualquier campo de los elementos',
      'Los constraints garantizan que los arrays tienen la estructura mínima necesaria',
      'Las funciones genéricas de array son reutilizables con usuarios, productos, tareas, etc.',
    ],
    exercise: {
      description:
        'Crea tres funciones genéricas para trabajar con arrays: (1) `ordenarPorCampo<T>(lista: T[], campo: keyof T, orden: "asc" | "desc"): T[]` que ordene la lista, (2) `contarPorValor<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): number` que cuente cuántos elementos tienen ese valor, y (3) `primeroDondeCampoEs<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T | undefined`. Pruébalas con una lista de tareas.',
      hint: 'Para ordenar usa `[...lista].sort()` con comparación. Para contar usa `filter().length`. Para buscar usa `find()`.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene el resultado de `extraerCampo(estudiantes, "nombre")` si los estudiantes tienen `nombre: string`?',
        options: ['any[]', 'keyof Estudiante[]', 'string[]', 'T[K][]'],
        correctAnswer: 'string[]',
        correctFeedback:
          '¡Perfecto! K = "nombre", T[K] = string. La función devuelve T[K][] = string[].',
        incorrectFeedback:
          'TypeScript resuelve T[K] con los tipos concretos. K = "nombre", Estudiante["nombre"] = string. El resultado es string[].',
      },
      {
        question: '¿Por qué `filtrarActivos<T extends { activo: boolean }>(lista: T[]): T[]` devuelve T[] y no `{ activo: boolean }[]`?',
        options: [
          'Porque TypeScript siempre devuelve el tipo genérico T',
          'Para preservar el tipo completo de cada elemento — no solo el constraint mínimo',
          'Porque boolean no puede ser el tipo de retorno',
          'No hay diferencia entre T[] y { activo: boolean }[]',
        ],
        correctAnswer: 'Para preservar el tipo completo de cada elemento — no solo el constraint mínimo',
        correctFeedback:
          '¡Exacto! Si devolviera { activo: boolean }[] perderías nombre, id, precio, y todas las propiedades extra. Con T[], el tipo completo se preserva.',
        incorrectFeedback:
          'El tipo de retorno T[] preserva toda la información. Si devolviera { activo: boolean }[], solo tendrías la propiedad activo en el resultado, perdiendo nombre, id, precio, etc.',
      },
      {
        question: '¿Cuál sería la función correcta para buscar estudiantes con una nota específica?',
        options: [
          'function buscar(lista: any[], nota: any): any[]',
          'function buscar<T extends { nota: number }>(lista: T[], nota: number): T[]',
          'function buscar(lista: Estudiante[], nota: number): Estudiante[]',
          'Opciones 2 y 3 son correctas según el contexto',
        ],
        correctAnswer: 'Opciones 2 y 3 son correctas según el contexto',
        correctFeedback:
          '¡Perfecto! La opción 2 es genérica — funciona con cualquier tipo que tenga nota. La opción 3 es específica — solo con Estudiante. Ambas son correctas según si quieres reutilización o especificidad.',
        incorrectFeedback:
          'Ambas son correctas. La genérica (opción 2) es reutilizable con cualquier objeto que tenga nota. La específica (opción 3) es más simple y clara para uso solo con Estudiante. La elección depende del contexto.',
      },
      {
        question: '¿Qué hace `lista.reduce((grupos, item) => ...)` en agruparPor?',
        options: [
          'Suma todos los valores del campo',
          'Transforma la lista en un objeto donde cada clave es un valor único del campo y el valor es el array de elementos con ese valor',
          'Filtra los elementos duplicados',
          'Ordena la lista por el campo especificado',
        ],
        correctAnswer: 'Transforma la lista en un objeto donde cada clave es un valor único del campo y el valor es el array de elementos con ese valor',
        correctFeedback:
          '¡Correcto! reduce acumula en un objeto Record<string, T[]> donde las claves son los valores únicos del campo y cada valor es el array de elementos que tienen ese valor.',
        incorrectFeedback:
          'reduce acumula la lista en un objeto. Para agrupar, el acumulador es un Record<string, T[]>. Por cada item, añade el item al array del grupo correspondiente a su valor del campo.',
      },
      {
        question: '¿Qué tipo de retorno tiene `extraerCampo<T, K extends keyof T>(lista: T[], campo: K): T[K][]`?',
        options: [
          'any[]',
          'string[]',
          'El tipo de los valores de la propiedad K en T',
          'keyof T[]',
        ],
        correctAnswer: 'El tipo de los valores de la propiedad K en T',
        correctFeedback:
          '¡Perfecto! T[K] es el tipo del valor de la propiedad K. Si K = "precio" y precio: number, entonces T[K][] = number[].',
        incorrectFeedback:
          'T[K] se resuelve al tipo concreto del valor de esa propiedad. Si extrae precios, T[K] = number y el retorno es number[]. TypeScript lo calcula automáticamente.',
      },
    ],
  },
  {
    slug: 'helpers-seguros-constraints',
    title: 'Crear helpers seguros con constraints',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 142,
    description:
      'Aprende a crear funciones reutilizables como getProperty, updateItem o filterByKey usando constraints.',
    explanation: `## Crear helpers seguros con constraints

Los helpers son funciones de utilidad que resuelven problemas comunes. Con genéricos y constraints puedes crear helpers que son seguros para cualquier tipo de dato.

### La librería de helpers

\`\`\`typescript
// helpers.ts

// Obtener una propiedad
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// Establecer una propiedad (inmutable)
function set<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value }
}

// Actualizar por id en una lista
function updateById<T extends { id: number }>(lista: T[], id: number, cambios: Partial<T>): T[] {
  return lista.map((item) => item.id === id ? { ...item, ...cambios } : item)
}

// Eliminar por id
function removeById<T extends { id: number }>(lista: T[], id: number): T[] {
  return lista.filter((item) => item.id !== id)
}

// Filtrar por clave-valor
function filterByKey<T, K extends keyof T>(lista: T[], key: K, value: T[K]): T[] {
  return lista.filter((item) => item[key] === value)
}

// Ordenar por clave
function sortByKey<T>(lista: T[], key: keyof T, desc = false): T[] {
  return [...lista].sort((a, b) => {
    if (a[key] < b[key]) return desc ? 1 : -1
    if (a[key] > b[key]) return desc ? -1 : 1
    return 0
  })
}
\`\`\`

### Helpers para formularios

\`\`\`typescript
// Actualizar un campo de un formulario
function updateField<T, K extends keyof T>(
  estado: T,
  campo: K,
  valor: T[K]
): T {
  return { ...estado, [campo]: valor }
}

// Validar que los campos requeridos están presentes
function tieneRequeridos<T>(
  obj: Partial<T>,
  requeridos: (keyof T)[]
): obj is T {
  return requeridos.every((campo) => obj[campo] !== undefined)
}
\`\`\`

### Composición de helpers

Los helpers pequeños se pueden combinar:

\`\`\`typescript
const tareaActualizada = set(
  updateById(tareas, 1, { completada: true })[0],
  "prioridad",
  "baja"
)
\`\`\``,
    codeExample: `// helpers.ts

// Colección de helpers tipados

// Acceso seguro a propiedad
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// Actualización inmutable de propiedad
function set<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value }
}

// Filtrado por clave-valor
function filterByKey<T, K extends keyof T>(lista: T[], key: K, value: T[K]): T[] {
  return lista.filter((item) => item[key] === value)
}

// Actualización por id
function updateById<T extends { id: number }>(
  lista: T[],
  id: number,
  cambios: Partial<T>
): T[] {
  return lista.map((item) => item.id === id ? { ...item, ...cambios } : item)
}

// Eliminación por id
function removeById<T extends { id: number }>(lista: T[], id: number): T[] {
  return lista.filter((item) => item.id !== id)
}

// Datos de prueba
interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
  enStock: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 999, categoria: "tech", enStock: true },
  { id: 2, nombre: "Mouse", precio: 29, categoria: "tech", enStock: true },
  { id: 3, nombre: "Mochila", precio: 49, categoria: "accesorios", enStock: false },
]

// Usar los helpers
const tech = filterByKey(productos, "categoria", "tech")          // Producto[]
const enStock = filterByKey(productos, "enStock", true)           // Producto[]
const sinMouse = removeById(productos, 2)                         // Producto[]
const conDescuento = updateById(productos, 1, { precio: 799 })    // Producto[]

const nombre = get(productos[0], "nombre")           // "Laptop" — tipo: string
const actualizado = set(productos[0], "precio", 899) // Producto con precio=899`,
    keyPoints: [
      'Los helpers genéricos con constraints son funciones reutilizables y seguras',
      'get, set, updateById, removeById, filterByKey son helpers comunes en cualquier app',
      'Los constraints garantizan que solo se usan con los tipos correctos',
      'Los helpers inmutables (devuelven nuevos objetos) son más seguros que los mutables',
      'Puedes componer helpers pequeños para operaciones más complejas',
    ],
    exercise: {
      description:
        'Crea un módulo de helpers con: (1) `toggle<T, K extends keyof T>(obj: T, campo: K): T` que cambia un campo boolean de true a false y viceversa (el campo debe ser boolean), (2) `incrementar<T, K extends keyof T>(obj: T, campo: K, cantidad: number): T` que suma a un campo numérico, y (3) `incluye<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): boolean` que verifica si algún elemento tiene ese valor. Pruébalos con tareas y productos.',
      hint: 'Para toggle usa `{ ...obj, [campo]: !obj[campo] }`. Para incrementar usa `{ ...obj, [campo]: (obj[campo] as number) + cantidad }`. Para incluye usa `lista.some()`.',
    },
    quiz: [
      {
        question: '¿Por qué los helpers son inmutables (devuelven nuevos objetos)?',
        options: [
          'Porque TypeScript no permite mutar objetos',
          'Para evitar efectos secundarios — no modificar el objeto original permite un código más predecible',
          'Porque la inmutabilidad es más rápida',
          'Porque los objetos en TypeScript son siempre readonly',
        ],
        correctAnswer: 'Para evitar efectos secundarios — no modificar el objeto original permite un código más predecible',
        correctFeedback:
          '¡Correcto! Mutar el objeto original puede causar errores difíciles de rastrear. Devolver un nuevo objeto hace el código más predecible y fácil de razonar.',
        incorrectFeedback:
          'La inmutabilidad no es un requisito de TypeScript, pero es una buena práctica. Modificar objetos originales puede causar bugs sutiles cuando hay múltiples referencias al mismo objeto.',
      },
      {
        question: '¿Por qué `set<T, K extends keyof T>(obj: T, key: K, value: T[K])` es más seguro que `set(obj: any, key: string, value: any)`?',
        options: [
          'No hay diferencia en seguridad',
          'La versión tipada verifica que key es una clave real de T y que value tiene el tipo correcto',
          'La versión con any es más rápida',
          'La versión tipada solo funciona con objetos simples',
        ],
        correctAnswer: 'La versión tipada verifica que key es una clave real de T y que value tiene el tipo correcto',
        correctFeedback:
          '¡Perfecto! Con tipos, TypeScript previene `set(producto, "descuento", 10)` si descuento no existe, y `set(producto, "precio", "gratis")` si precio es number.',
        incorrectFeedback:
          'La versión tipada tiene dos capas de seguridad: verifica que `key` es una clave real de T (no cualquier string), y que `value` tiene exactamente el tipo que esa propiedad espera (T[K]).',
      },
      {
        question: '¿Qué devuelve `filterByKey(productos, "enStock", true)` si productos es `Producto[]` con `enStock: boolean`?',
        options: [
          'boolean[]',
          'Producto[] — solo los que tienen enStock === true',
          'true[]',
          'El primer producto con enStock === true',
        ],
        correctAnswer: 'Producto[] — solo los que tienen enStock === true',
        correctFeedback:
          '¡Exacto! La función filtra y devuelve T[] — el array completo de elementos que cumplen la condición, preservando el tipo completo Producto.',
        incorrectFeedback:
          'filterByKey devuelve T[] — el array filtrado con los elementos donde el campo tiene ese valor. El tipo completo Producto se preserva en cada elemento.',
      },
      {
        question: '¿Qué error daría `set(producto, "precio", "gratis")` si `precio: number`?',
        options: [
          'Ningún error — set acepta cualquier valor',
          'Error: "gratis" (string) no es del tipo number que espera la propiedad precio (T[K])',
          'Error: set no puede usarse con strings',
          'Error: precio no es una clave válida',
        ],
        correctAnswer: 'Error: "gratis" (string) no es del tipo number que espera la propiedad precio (T[K])',
        correctFeedback:
          '¡Correcto! `T[K]` para la clave "precio" es number. "gratis" es string. TypeScript rechaza la llamada porque los tipos no son compatibles.',
        incorrectFeedback:
          'El tercer parámetro `value: T[K]` exige que el valor sea del tipo de esa propiedad. Para "precio" (number), solo se aceptan números. "gratis" (string) causa un error de tipos.',
      },
      {
        question: '¿Cuándo usarías `updateById` en lugar de `set`?',
        options: [
          'Cuando quieres actualizar el id de un elemento',
          'Cuando quieres actualizar un elemento dentro de una lista identificado por su id',
          'Cuando el objeto no tiene propiedades',
          'Son equivalentes — se pueden usar intercambiablemente',
        ],
        correctAnswer: 'Cuando quieres actualizar un elemento dentro de una lista identificado por su id',
        correctFeedback:
          '¡Perfecto! `set` trabaja con un objeto individual. `updateById` trabaja con una lista y actualiza el elemento que tiene el id especificado.',
        incorrectFeedback:
          '`set` actualiza una propiedad de un objeto individual. `updateById` busca en una lista el elemento con ese id y lo actualiza. Son para niveles distintos de la estructura de datos.',
      },
    ],
  },
  {
    slug: 'errores-constraints',
    title: 'Errores comunes con constraints',
    module: 'Constraints en genéricos',
    moduleNumber: 18,
    order: 143,
    description:
      'Aprende a evitar restricciones demasiado débiles, demasiado estrictas o difíciles de entender.',
    explanation: `## Errores comunes con constraints

Los constraints son poderosos, pero mal usados pueden hacer el código confuso o crear problemas de tipos. Veamos los errores más frecuentes.

### Error 1: constraint demasiado débil

\`\`\`typescript
// ❌ object es demasiado débil — casi nada se verifica
function procesar<T extends object>(item: T): void {
  // TypeScript no sabe qué propiedades tiene item
  // item.nombre  // ❌ Error: object no tiene nombre
}

// ✅ Especifica las propiedades que necesitas
function procesar<T extends { nombre: string; id: number }>(item: T): void {
  console.log(item.nombre, item.id) // ✅
}
\`\`\`

### Error 2: constraint demasiado estricto

\`\`\`typescript
// ❌ Demasiado específico — no reutilizable
function saludarUsuario<T extends Usuario>(persona: T): string {
  return "Hola, " + persona.nombre
}

// ✅ Solo pide lo que necesitas
function saludar<T extends { nombre: string }>(persona: T): string {
  return "Hola, " + persona.nombre
}
// Ahora funciona con Usuario, Empleado, Cliente, cualquier cosa con nombre
\`\`\`

### Error 3: no usar el constraint en el cuerpo

\`\`\`typescript
// ❌ Si tienes un constraint, úsalo
function transformar<T extends { activo: boolean }>(item: T): string {
  return JSON.stringify(item)  // No usa activo para nada — constraint inútil
}

// ✅ O quita el constraint si no lo necesitas
function transformar<T>(item: T): string {
  return JSON.stringify(item)
}
\`\`\`

### Error 4: olvidar que extends no es igualdad

\`\`\`typescript
// ❌ Confundir: T extends { id: number } NO significa T = { id: number }
function solo<T extends { id: number }>(item: T): { id: number } {
  return item  // ❌ Error: T puede tener más propiedades que { id: number }
}

// ✅ El retorno debe ser T para preservar el tipo completo
function solo<T extends { id: number }>(item: T): T {
  return item  // ✅
}
\`\`\`

### Error 5: constraints anidados ilegibles

\`\`\`typescript
// ❌ Difícil de leer
function f<T extends Record<string, Array<{ id: number; datos: unknown[] }>>>(v: T) {}

// ✅ Usa interfaces para nombrar las partes
interface DatoConId { id: number; datos: unknown[] }
interface Registro { [clave: string]: DatoConId[] }

function f<T extends Registro>(v: T) {}
\`\`\`

### La regla de los constraints

**El constraint debe ser el mínimo necesario para que la función funcione correctamente.** Ni más amplio (pierde seguridad) ni más estrecho (pierde reutilización) que lo necesario.`,
    codeExample: `// main.ts

// ❌ Error 1: constraint demasiado débil (object)
// function clonarMal<T extends object>(obj: T): T {
//   console.log(obj.nombre)  // ❌ object no garantiza nombre
//   return { ...obj } as T
// }

// ✅ Constraint específico según lo que necesitas
function clonar<T extends object>(obj: T): T {
  return { ...obj } as T
}
// Aquí object SÍ es correcto — solo necesitamos saber que es un objeto para spread

// ❌ Error 2: constraint demasiado estricto
interface Usuario {
  id: number
  nombre: string
  email: string
}

// function saludarSoloUsuario<T extends Usuario>(p: T): string {
//   return "Hola, " + p.nombre  // Solo usa nombre — ¿por qué pedir toda Usuario?
// }

// ✅ Pide solo lo que usas
function saludar<T extends { nombre: string }>(p: T): string {
  return \`Hola, \${p.nombre}!\`
}
// Funciona con Usuario, Empleado, Cliente, cualquier cosa con nombre

// ❌ Error 3: tipo de retorno incorrecto
function envolver<T extends { id: number }>(item: T): T {
  // Si devuelves { id: number } en vez de T, pierdes las propiedades extra
  return { ...item }  // ✅ devuelve T con todas las propiedades
}

// ✅ Uso correcto del constraint
function actualizarEstado<T extends { id: number; activo: boolean }>(
  item: T,
  nuevoEstado: boolean
): T {
  return { ...item, activo: nuevoEstado } // Usa el constraint correctamente
}`,
    keyPoints: [
      'El constraint debe ser el mínimo necesario — no pedir más propiedades de las que usas',
      'object como constraint es débil — especifica las propiedades que realmente necesitas',
      'extends no es igualdad — T puede tener más propiedades que el constraint',
      'Si no usas el constraint en el cuerpo, probablemente no lo necesitas',
      'Usa interfaces para nombrar constraints complejos y hacerlos más legibles',
    ],
    exercise: {
      description:
        'Analiza estos tres constraints y mejóralos: (1) `<T extends object>` en una función que accede a `item.nombre`, (2) `<T extends Usuario>` en una función que solo usa `nombre` y `email`, y (3) `<T extends { id: number; nombre: string; email: string; activo: boolean; creadoEn: string }>` en una función que solo usa `id` y `activo`. Para cada uno, escribe la versión mejorada con el constraint mínimo necesario.',
      hint: 'El principio es: el constraint debe tener exactamente las propiedades que la función usa internamente, no más ni menos.',
    },
    quiz: [
      {
        question: '¿Qué error da `<T extends object>` si la función accede a `item.nombre`?',
        options: [
          'Ningún error — object tiene todas las propiedades posibles',
          'Error: TypeScript no puede garantizar que T tenga nombre, porque object no especifica nombre',
          'Error: object no es un constraint válido',
          'Error: nombre no es una propiedad de object',
        ],
        correctAnswer: 'Error: TypeScript no puede garantizar que T tenga nombre, porque object no especifica nombre',
        correctFeedback:
          '¡Correcto! `object` solo garantiza que T es un objeto (no primitivo), pero no qué propiedades tiene. Para acceder a `nombre`, necesitas `T extends { nombre: string }`.',
        incorrectFeedback:
          '`object` es demasiado genérico. TypeScript sabe que T es un objeto, pero no qué propiedades tiene. Para acceder a `nombre` de forma segura, el constraint debe incluir `nombre: string`.',
      },
      {
        question: '¿Por qué `<T extends Usuario>` es un constraint demasiado estricto si la función solo usa nombre?',
        options: [
          'Porque Usuario es una interfaz y los constraints deben ser tipos primitivos',
          'Porque exige que el argumento sea exactamente Usuario, excluyendo otros tipos válidos que también tienen nombre',
          'Porque Usuario no puede usarse como constraint',
          'Porque los campos extra de Usuario causan errores',
        ],
        correctAnswer: 'Porque exige que el argumento sea exactamente Usuario, excluyendo otros tipos válidos que también tienen nombre',
        correctFeedback:
          '¡Exacto! Si solo usas nombre, cualquier objeto con nombre sirve. Al poner `extends Usuario` excluyes Empleado, Cliente, Estudiante, etc., que también tienen nombre pero no todos los campos de Usuario.',
        incorrectFeedback:
          'Un constraint muy estricto reduce la reutilización. Si la función solo usa `nombre`, el constraint ideal es `{ nombre: string }`. Así funciona con Usuario, Empleado, Cliente, o cualquier tipo con nombre.',
      },
      {
        question: '¿Qué pasa si devuelves `{ id: number }` en vez de `T` en `function f<T extends { id: number }>(item: T): ???`?',
        options: [
          'Nada diferente — el tipo de retorno es siempre { id: number }',
          'Pierdes las propiedades extra de T — el resultado pierde nombre, activo, etc.',
          'TypeScript convierte T automáticamente a { id: number }',
          'Esto causa un error de compilación',
        ],
        correctAnswer: 'Pierdes las propiedades extra de T — el resultado pierde nombre, activo, etc.',
        correctFeedback:
          '¡Correcto! Si T = { id: 1, nombre: "Ana", activo: true } pero devuelves `{ id: number }`, el tipo del resultado pierde nombre y activo. Debes devolver T.',
        incorrectFeedback:
          'Si el tipo de retorno es `{ id: number }` en lugar de `T`, TypeScript "reduce" la información. El objeto físicamente puede tener más propiedades, pero TypeScript ya no las conoce en el tipo del resultado.',
      },
      {
        question: '¿Cuál es el constraint mínimo necesario para `function obtenerNombre<T ???>(obj: T): string { return obj.nombre }`?',
        options: [
          'T extends object',
          'T extends { nombre: string }',
          'T extends Record<string, string>',
          'T extends { nombre: string; id: number }',
        ],
        correctAnswer: 'T extends { nombre: string }',
        correctFeedback:
          '¡Perfecto! Solo necesitas garantizar que T tiene `nombre: string`. Pedir id o usar Record es más de lo necesario.',
        incorrectFeedback:
          'La función solo accede a `nombre`. El constraint mínimo es `{ nombre: string }`. Pedir `id` o `Record<string, string>` sería pedir más de lo que la función necesita.',
      },
      {
        question: '¿Cuándo está bien usar `<T extends object>` como constraint?',
        options: [
          'Nunca — siempre hay que especificar las propiedades',
          'Cuando la función necesita saber que T es un objeto pero no requiere propiedades específicas (ej. clonar con spread)',
          'Cuando la función trabaja con arrays',
          'Cuando el objeto tiene más de 3 propiedades',
        ],
        correctAnswer: 'Cuando la función necesita saber que T es un objeto pero no requiere propiedades específicas (ej. clonar con spread)',
        correctFeedback:
          '¡Correcto! Para clonar con spread `{ ...obj }`, solo necesitas saber que T es un objeto (no un primitivo). No necesitas propiedades específicas, así que `object` es el constraint correcto.',
        incorrectFeedback:
          '`extends object` es apropiado cuando solo necesitas saber que T es un objeto, no sus propiedades. Por ejemplo, para usar spread (`{...obj}`) o para garantizar que no es un primitivo.',
      },
    ],
  },
]

export const tsModule18: Module = {
  number: 18,
  title: 'Constraints en genéricos',
  level: 'nivel4',
  lessons: lessonsTsModule18,
}
