import type { Lesson, Module } from '@/types'

export const lessonsTsModule19: Lesson[] = [
  {
    slug: 'que-son-utility-types',
    title: '¿Qué son los utility types?',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 144,
    description:
      'Aprende qué son los utility types y cómo TypeScript incluye herramientas para transformar tipos existentes.',
    explanation: `## ¿Qué son los utility types?

Los **utility types** son tipos genéricos que ya vienen incluidos en TypeScript y sirven para **transformar tipos existentes** de formas comunes. Son como herramientas de una caja de trabajo — no tienes que fabricarlas tú, solo usarlas.

### ¿Por qué existen?

En el desarrollo de aplicaciones, constantemente necesitas variantes de tipos:
- "Este tipo pero con todos los campos opcionales" → \`Partial<T>\`
- "Este tipo pero solo con algunas propiedades" → \`Pick<T, K>\`
- "Este tipo pero sin esta propiedad" → \`Omit<T, K>\`
- "Este tipo pero con todo readonly" → \`Readonly<T>\`

Sin utility types, tendrías que redefinir cada variante manualmente.

### Los utility types más usados

| Utility type | ¿Qué hace? |
|---|---|
| \`Partial<T>\` | Hace todas las propiedades opcionales |
| \`Required<T>\` | Hace todas las propiedades obligatorias |
| \`Readonly<T>\` | Hace todas las propiedades de solo lectura |
| \`Pick<T, K>\` | Selecciona algunas propiedades de T |
| \`Omit<T, K>\` | Elimina algunas propiedades de T |
| \`Record<K, V>\` | Crea un objeto con claves K y valores V |
| \`Exclude<T, U>\` | Elimina tipos de una unión |
| \`Extract<T, U>\` | Conserva tipos de una unión |
| \`NonNullable<T>\` | Elimina null y undefined |
| \`ReturnType<F>\` | Obtiene el tipo de retorno de una función |
| \`Parameters<F>\` | Obtiene los tipos de parámetros de una función |

### Ejemplo rápido

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  password: string
}

// Todos los campos opcionales (para formularios de edición)
type UsuarioParcial = Partial<Usuario>

// Solo algunos campos (para mostrar en una lista)
type UsuarioResumen = Pick<Usuario, "id" | "nombre">

// Sin el password (para respuesta pública de la API)
type UsuarioPublico = Omit<Usuario, "password">
\`\`\`

### Son genéricos globales

Los utility types son simplemente **interfaces o type aliases genéricos** predefinidos por TypeScript. No necesitas importarlos — están disponibles en cualquier archivo .ts.

### Componer utility types

\`\`\`typescript
// Puedes combinar utility types
type FormularioEdicion = Partial<Omit<Usuario, "id">>
// Todos los campos de Usuario excepto id, todos opcionales
\`\`\``,
    codeExample: `// main.ts

interface Producto {
  id: number
  nombre: string
  precio: number
  descripcion: string
  stock: number
  activo: boolean
}

// Partial — todos los campos opcionales
type ProductoParcial = Partial<Producto>
// { id?: number; nombre?: string; precio?: number; ... }

// Required — todos obligatorios (inverso de Partial)
type ProductoCompleto = Required<Producto>
// todos los campos son obligatorios

// Readonly — sin posibilidad de modificar
type ProductoFijo = Readonly<Producto>
// { readonly id: number; readonly nombre: string; ... }

// Pick — solo algunos campos
type ProductoResumen = Pick<Producto, "id" | "nombre" | "precio">
// { id: number; nombre: string; precio: number }

// Omit — todos excepto algunos
type ProductoPublico = Omit<Producto, "stock" | "activo">
// { id: number; nombre: string; precio: number; descripcion: string }

// Combinando utility types
type FormularioNuevoProducto = Omit<Partial<Producto>, "id">
// Todos los campos son opcionales excepto que no tiene id (para crear)

// Uso práctico
const borrador: ProductoParcial = { nombre: "Nuevo producto" }  // ✅ solo nombre

const fijo: ProductoFijo = {
  id: 1, nombre: "Laptop", precio: 999,
  descripcion: "Laptop Pro", stock: 5, activo: true
}
// fijo.precio = 899  // ❌ Error: readonly`,
    keyPoints: [
      'Los utility types son tipos genéricos predefinidos por TypeScript para transformar tipos',
      'No necesitas importarlos — están disponibles en cualquier archivo TypeScript',
      'Los más comunes son Partial, Required, Readonly, Pick, Omit, Record',
      'Se pueden componer: Partial<Omit<T, "id">>',
      'Evitan tener que redefinir manualmente variantes comunes de un tipo',
    ],
    exercise: {
      description:
        'Dado este interface: `interface Tarea { id: number; titulo: string; descripcion: string; prioridad: "alta" | "media" | "baja"; completada: boolean; asignadoA: string }`, crea cuatro tipos usando utility types: (1) `TareaResumen` con solo id, titulo, y completada, (2) `TareaEditable` con todos los campos excepto id, todos opcionales, (3) `TareaFija` que no se puede modificar, y (4) `NuevaTarea` con todos los campos excepto id e completada, todos requeridos.',
      hint: 'Usa Pick para (1), Partial<Omit<>> para (2), Readonly para (3), y Required<Omit<>> para (4).',
    },
    quiz: [
      {
        question: '¿Dónde están definidos los utility types en TypeScript?',
        options: [
          'En el paquete npm @types/typescript',
          'En la librería estándar de TypeScript — disponibles globalmente sin importar',
          'En node_modules/typescript/lib',
          'Debes definirlos tú mismo',
        ],
        correctAnswer: 'En la librería estándar de TypeScript — disponibles globalmente sin importar',
        correctFeedback:
          '¡Correcto! Los utility types son parte de TypeScript y están disponibles en cualquier archivo .ts sin necesidad de importarlos.',
        incorrectFeedback:
          'Los utility types vienen incluidos en TypeScript. Están definidos en los archivos de definición de TypeScript y disponibles globalmente en cualquier proyecto TypeScript.',
      },
      {
        question: '¿Qué hace `Partial<Usuario>` si `Usuario` tiene id, nombre, y email como obligatorios?',
        options: [
          'Elimina todas las propiedades de Usuario',
          'Hace que id, nombre, y email sean todas opcionales',
          'Hace que id, nombre, y email sean readonly',
          'Crea una unión de los tipos de las propiedades',
        ],
        correctAnswer: 'Hace que id, nombre, y email sean todas opcionales',
        correctFeedback:
          '¡Exacto! Partial convierte todas las propiedades de T en opcionales (agrega ? a cada una).',
        incorrectFeedback:
          'Partial hace que todas las propiedades de T sean opcionales — agrega ? a cada propiedad. Así puedes crear objetos con solo algunas propiedades.',
      },
      {
        question: '¿Qué hace `Omit<Producto, "stock" | "activo">`?',
        options: [
          'Hace que stock y activo sean opcionales',
          'Crea un tipo con todas las propiedades de Producto excepto stock y activo',
          'Elimina Producto del sistema de tipos',
          'Crea una unión de stock y activo',
        ],
        correctAnswer: 'Crea un tipo con todas las propiedades de Producto excepto stock y activo',
        correctFeedback:
          '¡Correcto! Omit crea un tipo nuevo que tiene todas las propiedades de Producto EXCEPTO las especificadas.',
        incorrectFeedback:
          'Omit<T, K> crea un nuevo tipo igual a T pero sin las propiedades en K. El resultado tiene todas las propiedades de Producto excepto stock y activo.',
      },
      {
        question: '¿Puedes combinar utility types como `Partial<Omit<T, "id">>`?',
        options: [
          'No — los utility types no se pueden anidar',
          'Sí — se aplican de adentro hacia afuera: primero Omit quita id, luego Partial hace el resto opcional',
          'Solo si el tipo base es una interface, no un type alias',
          'Solo con Partial y Omit — no con otros utility types',
        ],
        correctAnswer: 'Sí — se aplican de adentro hacia afuera: primero Omit quita id, luego Partial hace el resto opcional',
        correctFeedback:
          '¡Perfecto! Los utility types son tipos genéricos normales y se pueden componer. Se resuelven de adentro hacia afuera como cualquier expresión de tipo.',
        incorrectFeedback:
          'Los utility types se pueden anidar y componer. Primero se evalúa el más interno (Omit quita id), luego el externo (Partial hace el resultado opcional).',
      },
      {
        question: '¿Cuál utility type usarías para que un objeto no pueda ser modificado después de crearse?',
        options: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Immutable<T>'],
        correctAnswer: 'Readonly<T>',
        correctFeedback:
          '¡Correcto! `Readonly<T>` agrega `readonly` a todas las propiedades. TypeScript da error si intentas reasignar cualquier propiedad.',
        incorrectFeedback:
          '`Readonly<T>` es el utility type correcto. Hace que todas las propiedades sean de solo lectura. `Immutable<T>` no existe en TypeScript.',
      },
    ],
  },
  {
    slug: 'utility-partial',
    title: 'Partial',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 145,
    description:
      'Aprende a usar Partial<T> para convertir todas las propiedades de un tipo en opcionales.',
    explanation: `## Partial<T>

\`Partial<T>\` convierte **todas las propiedades** de un tipo en **opcionales**. Es como agregar \`?\` a cada propiedad del tipo original.

### Definición conceptual

\`\`\`typescript
// Esto es básicamente lo que hace Partial internamente:
type Partial<T> = {
  [P in keyof T]?: T[P]
}
\`\`\`

### Cuándo usar Partial

**1. Actualización parcial de datos (PATCH):**
\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

// Para actualizar, solo necesitas los campos que cambian
function actualizarUsuario(id: number, cambios: Partial<Usuario>): void {
  // cambios puede tener solo nombre, o solo email, o ambos, etc.
}

actualizarUsuario(1, { nombre: "Ana García" })          // ✅
actualizarUsuario(1, { email: "nueva@email.com" })      // ✅
actualizarUsuario(1, { nombre: "Ana", activo: false })  // ✅
\`\`\`

**2. Valores por defecto:**
\`\`\`typescript
interface Config {
  tema: "claro" | "oscuro"
  idioma: string
  notificaciones: boolean
}

const DEFAULT_CONFIG: Config = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true,
}

function crearConfig(opciones: Partial<Config> = {}): Config {
  return { ...DEFAULT_CONFIG, ...opciones }
}

crearConfig()                        // Config completa con defecto
crearConfig({ tema: "claro" })       // Tema claro, resto por defecto
\`\`\`

**3. Estado inicial de formulario:**
\`\`\`typescript
interface FormularioProducto {
  nombre: string
  precio: number
  descripcion: string
}

const estadoInicial: Partial<FormularioProducto> = {}
\`\`\`

### Lo que Partial NO hace

Partial es superficial — solo hace opcionales las propiedades del primer nivel:

\`\`\`typescript
interface Pedido {
  id: number
  usuario: {
    nombre: string
    email: string
  }
}

type PedidoParcial = Partial<Pedido>
// id?: number; usuario?: { nombre: string; email: string }
// ¡El objeto interno NO se hace parcial!
// usuario es { nombre: string; email: string } | undefined (completo o nada)
\`\`\``,
    codeExample: `// forms.ts

interface Configuracion {
  tema: 'claro' | 'oscuro'
  idioma: string
  tamanioFuente: number
  notificaciones: boolean
  animaciones: boolean
}

// Partial — todos los campos opcionales
type ConfigParcial = Partial<Configuracion>

// Configuración por defecto completa
const DEFAULT: Configuracion = {
  tema: 'oscuro',
  idioma: 'es',
  tamanioFuente: 16,
  notificaciones: true,
  animaciones: true,
}

// Función para crear config combinando defecto con opciones
function crearConfig(opciones: ConfigParcial = {}): Configuracion {
  return { ...DEFAULT, ...opciones }
}

// Uso flexible — solo especificas lo que quieres cambiar
const config1 = crearConfig()                        // todo por defecto
const config2 = crearConfig({ tema: 'claro' })       // solo tema cambia
const config3 = crearConfig({ idioma: 'en', notificaciones: false })

// Función de actualización parcial (tipo PATCH de API)
function actualizarConfig(
  actual: Configuracion,
  cambios: Partial<Configuracion>
): Configuracion {
  return { ...actual, ...cambios }
}

const configActualizada = actualizarConfig(config1, { tamanioFuente: 18 })
// configActualizada tiene todos los campos de config1
// pero con tamanioFuente = 18

// Estado de formulario que se va llenando
let formulario: Partial<Configuracion> = {}
formulario.tema = 'claro'        // ✅ Puedes agregar de a poco
formulario.idioma = 'en'         // ✅
// formulario.invalido = true    // ❌ No existe en Configuracion`,
    keyPoints: [
      'Partial<T> convierte todas las propiedades de T en opcionales (agrega ? a cada una)',
      'Es ideal para actualizaciones parciales de datos (tipo PATCH en APIs)',
      'Útil para estados iniciales de formularios y valores por defecto',
      'Partial es superficial — solo afecta el primer nivel de propiedades',
      'Puedes combinar con spread: { ...DEFAULT, ...parcial }',
    ],
    exercise: {
      description:
        'Crea una interfaz `Perfil` con `id: number`, `nombre: string`, `bio: string`, `avatar: string`, y `website: string`. Luego crea: (1) una función `actualizarPerfil(actual: Perfil, cambios: Partial<Perfil>): Perfil` que devuelva el perfil actualizado, y (2) una variable `perfilVacio: Partial<Perfil>` que empiece con solo `{ nombre: "" }`. Prueba actualizando solo la bio y el avatar.',
      hint: 'La función de actualización usa spread: `{ ...actual, ...cambios }`. TypeScript verifica que los campos en cambios existen en Perfil.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene `{ nombre?: string; email?: string }` si viene de `Partial<{ nombre: string; email: string }>`?',
        options: [
          'Es inválido — Partial no puede usarse así',
          'Es exactamente eso: todas las propiedades de T pero marcadas como opcionales con ?',
          'string | undefined para cada campo',
          'El tipo original sin cambios',
        ],
        correctAnswer: 'Es exactamente eso: todas las propiedades de T pero marcadas como opcionales con ?',
        correctFeedback:
          '¡Correcto! Partial agrega ? a cada propiedad. El resultado es un tipo donde ninguna propiedad es requerida.',
        incorrectFeedback:
          'Partial agrega ? a cada propiedad del tipo. Eso convierte propiedades requeridas en opcionales. El resultado tiene las mismas propiedades pero ninguna es obligatoria.',
      },
      {
        question: '¿Cuál es el caso de uso más típico de `Partial<T>`?',
        options: [
          'Para hacer un objeto completamente inmutable',
          'Para actualizaciones parciales donde no todos los campos cambian',
          'Para eliminar propiedades de un tipo',
          'Para crear uniones de tipos',
        ],
        correctAnswer: 'Para actualizaciones parciales donde no todos los campos cambian',
        correctFeedback:
          '¡Exacto! Cuando solo quieres actualizar un nombre o un email sin pasar todos los demás campos, Partial<T> es la herramienta correcta.',
        incorrectFeedback:
          'Partial es ideal para el patrón PATCH — actualizar solo los campos que cambian, sin necesidad de pasar todos los datos del objeto.',
      },
      {
        question: '¿Cuál es la limitación de `Partial<T>` cuando T tiene propiedades que son objetos?',
        options: [
          'No funciona con objetos anidados en absoluto',
          'Solo hace opcionales las propiedades del primer nivel — los objetos internos siguen siendo totalmente requeridos',
          'Hace opcionales todas las propiedades en todos los niveles',
          'Convierte los objetos internos en any',
        ],
        correctAnswer: 'Solo hace opcionales las propiedades del primer nivel — los objetos internos siguen siendo totalmente requeridos',
        correctFeedback:
          '¡Correcto! Partial es superficial. Si T tiene `direccion: { calle: string; ciudad: string }`, Partial hace `direccion` opcional pero, si se proporciona, debe ser el objeto completo.',
        incorrectFeedback:
          'Partial solo actúa en el primer nivel. Los objetos anidados siguen siendo del tipo original — si los proporcionas, deben estar completos. Para profundidad, necesitarías un tipo personalizado.',
      },
      {
        question: '¿Es válido `const borrador: Partial<Usuario> = {}`?',
        options: [
          'No — Partial<Usuario> siempre requiere al menos una propiedad',
          'Sí — Partial hace todas las propiedades opcionales, incluyendo que puedas tener un objeto vacío',
          'Solo si Usuario tiene propiedades opcionales por defecto',
          'Solo en modo strict de TypeScript',
        ],
        correctAnswer: 'Sí — Partial hace todas las propiedades opcionales, incluyendo que puedas tener un objeto vacío',
        correctFeedback:
          '¡Perfecto! Como todas las propiedades son opcionales, un objeto vacío {} es válido para Partial<T>. Esto es útil para estados iniciales.',
        incorrectFeedback:
          'Partial hace TODAS las propiedades opcionales. Eso incluye la posibilidad de no tener ninguna — un objeto vacío {} es válido para Partial<T>.',
      },
      {
        question: '¿Qué devuelve `actualizarUsuario(actual, { nombre: "Ana" })` si `function actualizarUsuario(u: Usuario, c: Partial<Usuario>): Usuario { return { ...u, ...c } }`?',
        options: [
          'Solo { nombre: "Ana" }',
          'El objeto actual con nombre reemplazado por "Ana" y el resto de campos sin cambio',
          'Partial<Usuario> con solo nombre',
          'Error — no puedes hacer spread de tipos distintos',
        ],
        correctAnswer: 'El objeto actual con nombre reemplazado por "Ana" y el resto de campos sin cambio',
        correctFeedback:
          '¡Correcto! El spread copia todos los campos de `actual` y luego los campos de `c` sobreescriben los coincidentes. El resultado es Usuario completo con nombre actualizado.',
        incorrectFeedback:
          'El spread `{ ...u, ...c }` copia todos los campos de u primero, luego c sobreescribe los que coincidan. El resultado es un Usuario completo con el nombre actualizado.',
      },
    ],
  },
  {
    slug: 'utility-required',
    title: 'Required',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 146,
    description:
      'Aprende a usar Required<T> para convertir propiedades opcionales en obligatorias.',
    explanation: `## Required<T>

\`Required<T>\` es el **inverso de Partial**. Convierte todas las propiedades opcionales de un tipo en **obligatorias**. Es como eliminar el \`?\` de cada propiedad.

### Cuándo usar Required

**1. Después de validar un formulario:**
\`\`\`typescript
interface FormularioRegistro {
  nombre?: string
  email?: string
  password?: string
}

function enviarFormulario(datos: Required<FormularioRegistro>) {
  // Aquí todos los campos son obligatorios — el formulario ya fue validado
}
\`\`\`

**2. Convertir configuración parcial a completa:**
\`\`\`typescript
interface ConfigOpcional {
  tema?: "claro" | "oscuro"
  idioma?: string
  tamano?: number
}

function aplicarConfig(config: Required<ConfigOpcional>): void {
  // Todos los campos están garantizados
  console.log(config.tema)  // no puede ser undefined
}
\`\`\`

**3. Garantizar que una función recibe datos completos:**
\`\`\`typescript
interface Producto {
  nombre?: string
  precio?: number
  descripcion?: string
}

function publicarProducto(p: Required<Producto>): void {
  // Solo se puede publicar si todo está completo
}
\`\`\`

### Required es superficial

Al igual que Partial, Required solo afecta el **primer nivel** de propiedades. Los objetos anidados con campos opcionales siguen siendo opcionales internamente.

### Combinando Required con otros utility types

\`\`\`typescript
interface Borrador {
  id?: number
  titulo?: string
  contenido?: string
  publicado?: boolean
}

// Solo los campos que no son id, todos requeridos
type ArticuloPublicado = Required<Omit<Borrador, "id">> & { id: number }
\`\`\`

### Type guards con Required

\`\`\`typescript
function estaCompleto<T>(obj: Partial<T>, campos: (keyof T)[]): obj is Required<T> {
  return campos.every((campo) => obj[campo] !== undefined)
}
\`\`\``,
    codeExample: `// forms.ts

interface ConfiguracionApp {
  tema?: 'claro' | 'oscuro'
  idioma?: string
  tamanioFuente?: number
  notificaciones?: boolean
}

// Required — todos los campos obligatorios
type ConfiguracionCompleta = Required<ConfiguracionApp>
// { tema: 'claro' | 'oscuro'; idioma: string; tamanioFuente: number; notificaciones: boolean }

// Uso práctico: validar antes de aplicar
function aplicarConfiguracion(config: ConfiguracionCompleta): void {
  console.log(\`Tema: \${config.tema}\`)      // ✅ nunca undefined
  console.log(\`Idioma: \${config.idioma}\`)  // ✅ nunca undefined
}

// Estado inicial (Partial) → validado (Required)
const parcial: ConfiguracionApp = { tema: 'oscuro', idioma: 'es' }

// Verificar si todos los campos están presentes
function configuracionCompleta(c: ConfiguracionApp): c is ConfiguracionCompleta {
  return (
    c.tema !== undefined &&
    c.idioma !== undefined &&
    c.tamanioFuente !== undefined &&
    c.notificaciones !== undefined
  )
}

if (configuracionCompleta(parcial)) {
  aplicarConfiguracion(parcial) // ✅ TypeScript sabe que es ConfiguracionCompleta
}

// Combinar: Required con valores por defecto para completar
function completarConfig(parcial: ConfiguracionApp): ConfiguracionCompleta {
  return {
    tema: parcial.tema ?? 'oscuro',
    idioma: parcial.idioma ?? 'es',
    tamanioFuente: parcial.tamanioFuente ?? 16,
    notificaciones: parcial.notificaciones ?? true,
  }
}`,
    keyPoints: [
      'Required<T> hace obligatorias todas las propiedades opcionales de T',
      'Es el inverso exacto de Partial',
      'Útil para funciones que necesitan garantizar que todos los datos están presentes',
      'Se puede usar como tipo de retorno cuando completas un Partial con valores por defecto',
      'También es superficial — solo afecta el primer nivel',
    ],
    exercise: {
      description:
        'Crea un interface `ConfigEmail` con propiedades opcionales: `servidor?: string`, `puerto?: number`, `usuario?: string`, `password?: string`, `ssl?: boolean`. Luego crea: (1) una función `conectar(config: Required<ConfigEmail>): void` que simule una conexión (imprimiendo el servidor y puerto), y (2) una función `prepararConfig(parcial: ConfigEmail): Required<ConfigEmail>` que complete los campos faltantes con valores por defecto (servidor "smtp.default.com", puerto 587, ssl true).',
      hint: 'Usa el operador ?? (nullish coalescing) para asignar defectos: `parcial.servidor ?? "smtp.default.com"`.',
    },
    quiz: [
      {
        question: '¿Qué hace `Required<{ nombre?: string; activo?: boolean }>`?',
        options: [
          'Hace nombre y activo de tipo any',
          'Crea { nombre: string; activo: boolean } — todos requeridos sin el ?',
          'Elimina nombre y activo del tipo',
          'Hace nombre y activo readonly',
        ],
        correctAnswer: 'Crea { nombre: string; activo: boolean } — todos requeridos sin el ?',
        correctFeedback:
          '¡Correcto! Required elimina el ? de cada propiedad, haciendo que todas sean requeridas.',
        incorrectFeedback:
          'Required elimina el ? de las propiedades opcionales. El resultado tiene las mismas propiedades pero todas son obligatorias.',
      },
      {
        question: '¿Cuál es la relación entre `Partial<T>` y `Required<T>`?',
        options: [
          'Son lo mismo — sinónimos',
          'Son inversos: Partial hace todo opcional, Required hace todo obligatorio',
          'Partial actúa sobre arrays; Required sobre objetos',
          'Partial requiere TypeScript 4+; Required es más antiguo',
        ],
        correctAnswer: 'Son inversos: Partial hace todo opcional, Required hace todo obligatorio',
        correctFeedback:
          '¡Exacto! Son operaciones inversas. Partial({ a: string }) = { a?: string }. Required({ a?: string }) = { a: string }.',
        incorrectFeedback:
          'Son complementarios. Partial convierte propiedades requeridas en opcionales. Required convierte propiedades opcionales en requeridas. Son operaciones inversas.',
      },
      {
        question: '¿Cuándo es útil `Required<T>` como tipo de retorno de una función?',
        options: [
          'Cuando la función devuelve undefined',
          'Cuando la función completa los campos opcionales de un objeto Partial con valores por defecto',
          'Cuando la función elimina propiedades del objeto',
          'Siempre que la función trabaje con objetos',
        ],
        correctAnswer: 'Cuando la función completa los campos opcionales de un objeto Partial con valores por defecto',
        correctFeedback:
          '¡Perfecto! Un patrón común es `function completar(parcial: Partial<T>): Required<T>` que llena los campos faltantes con valores por defecto.',
        incorrectFeedback:
          'Required como tipo de retorno tiene sentido cuando la función garantiza que el resultado tiene todos los campos. Por ejemplo, una función que completa un Partial con valores por defecto.',
      },
      {
        question: '¿Qué tipo tiene `config.tema` si `config: Required<ConfiguracionApp>` y `ConfiguracionApp` tiene `tema?: "claro" | "oscuro"`?',
        options: [
          '"claro" | "oscuro" | undefined',
          '"claro" | "oscuro"',
          'string',
          'undefined',
        ],
        correctAnswer: '"claro" | "oscuro"',
        correctFeedback:
          '¡Correcto! Required elimina el ? (y por tanto el undefined) del tipo. tema es "claro" | "oscuro", nunca undefined.',
        incorrectFeedback:
          'Required elimina la opcionalidad. La propiedad `tema?: "claro" | "oscuro"` tiene tipo `"claro" | "oscuro" | undefined`. Con Required, se convierte en `"claro" | "oscuro"` — sin undefined.',
      },
      {
        question: '¿Podría dar error `aplicarConfig(parcial)` si `parcial: ConfiguracionApp` (Partial) y `aplicarConfig` recibe `Required<ConfiguracionApp>`?',
        options: [
          'No — TypeScript convierte automáticamente Partial en Required',
          'Sí — no puedes pasar un Partial donde se espera Required, porque los campos podrían faltar',
          'Solo si parcial no tiene todos los campos',
          'No — son tipos equivalentes',
        ],
        correctAnswer: 'Sí — no puedes pasar un Partial donde se espera Required, porque los campos podrían faltar',
        correctFeedback:
          '¡Exacto! TypeScript es estricto: Partial<T> no es compatible con Required<T> porque los campos podrían ser undefined. Debes convertir o validar primero.',
        incorrectFeedback:
          'TypeScript no permite pasar Partial<T> donde se espera Required<T>. Los campos opcionales podrían ser undefined, y Required<T> los necesita garantizados. Debes completar o validar primero.',
      },
    ],
  },
  {
    slug: 'utility-readonly',
    title: 'Readonly',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 147,
    description:
      'Aprende a usar Readonly<T> para evitar modificar propiedades de un objeto.',
    explanation: `## Readonly<T>

\`Readonly<T>\` convierte todas las propiedades de un tipo en **de solo lectura** (readonly). Después de asignar el objeto, TypeScript da error si intentas modificar cualquier propiedad.

### La palabra clave readonly

\`\`\`typescript
interface Punto {
  readonly x: number
  readonly y: number
}

const p: Punto = { x: 1, y: 2 }
// p.x = 5  // ❌ Error: cannot assign to x because it is read-only
\`\`\`

\`Readonly<T>\` hace lo mismo pero de forma global:

\`\`\`typescript
interface Config {
  url: string
  timeout: number
  debug: boolean
}

type ConfigFija = Readonly<Config>
// { readonly url: string; readonly timeout: number; readonly debug: boolean }
\`\`\`

### Cuándo usar Readonly

**1. Configuración que no debe cambiar:**
\`\`\`typescript
const CONFIG: Readonly<Config> = {
  url: "https://api.ejemplo.com",
  timeout: 5000,
  debug: false,
}
// CONFIG.url = "otro"  // ❌ Error en tiempo de compilación
\`\`\`

**2. Props de componentes:**
\`\`\`typescript
interface ProductoCard {
  id: number
  nombre: string
  precio: number
}

function renderProducto(props: Readonly<ProductoCard>): void {
  // Garantizado: la función no puede modificar las props
}
\`\`\`

**3. Resultados de API que no deben mutarse:**
\`\`\`typescript
function obtenerUsuario(): Readonly<Usuario> {
  return { id: 1, nombre: "Ana", email: "ana@email.com" }
}

const usuario = obtenerUsuario()
// usuario.nombre = "otro"  // ❌ Error
\`\`\`

### Readonly es superficial

Al igual que Partial y Required, Readonly solo afecta el primer nivel:

\`\`\`typescript
interface Pedido {
  id: number
  items: { id: number; cantidad: number }[]
}

type PedidoFijo = Readonly<Pedido>
// id es readonly ✅
// items es readonly (no puedes reasignar items) ✅
// ¡pero puedes mutar items[0].cantidad! ❌ — Readonly no llega a objetos anidados
\`\`\`

### Readonly con arrays

\`\`\`typescript
const lista: Readonly<string[]> = ["a", "b", "c"]
// lista.push("d")   // ❌ Error
// lista[0] = "x"    // ❌ Error
// lista.length = 0  // ❌ Error
\`\`\``,
    codeExample: `// config.ts

interface ConfiguracionDB {
  host: string
  puerto: number
  nombre: string
  usuario: string
  maxConexiones: number
}

// Readonly — configuración inmutable
const DB_CONFIG: Readonly<ConfiguracionDB> = {
  host: 'localhost',
  puerto: 5432,
  nombre: 'miapp',
  usuario: 'admin',
  maxConexiones: 10,
}

// Estas líneas darían error de TypeScript:
// DB_CONFIG.host = 'otro'           // ❌ readonly
// DB_CONFIG.maxConexiones = 100     // ❌ readonly

// Readonly como parámetro — la función garantiza no mutar
function conectarDB(config: Readonly<ConfiguracionDB>): void {
  // Puede leer config pero no modificarla
  console.log(\`Conectando a \${config.host}:\${config.puerto}/\${config.nombre}\`)
}

conectarDB(DB_CONFIG) // ✅

// Readonly con arrays
const ESTADOS_VALIDOS: Readonly<string[]> = ['activo', 'inactivo', 'pendiente']
// ESTADOS_VALIDOS.push('otro')  // ❌ Error: readonly

// Hacer objeto readonly al devolverlo de función
interface Producto {
  id: number
  nombre: string
  precio: number
}

function obtenerCatalogo(): Readonly<Producto>[] {
  return [
    { id: 1, nombre: 'Laptop', precio: 999 },
    { id: 2, nombre: 'Mouse', precio: 29 },
  ]
}

const catalogo = obtenerCatalogo()
// catalogo[0].precio = 0  // ❌ Error: readonly`,
    keyPoints: [
      'Readonly<T> agrega readonly a todas las propiedades de T',
      'Previene modificaciones accidentales en tiempo de compilación',
      'Ideal para configuraciones, constantes, y datos que no deben mutar',
      'Readonly es superficial — los objetos anidados siguen siendo mutables',
      'Puedes usar Readonly<T[]> para arrays inmutables',
    ],
    exercise: {
      description:
        'Crea una interfaz `PreciosProductos` con `nombre: string`, `precio: number`, y `descuento: number`. Luego: (1) crea una constante `PRECIOS: Readonly<PreciosProductos>[]` con algunos productos (intenta demostrar que no se pueden modificar), (2) crea una función `calcularPrecioFinal(producto: Readonly<PreciosProductos>): number` que calcule `precio * (1 - descuento / 100)`, y (3) demuestra que la función no puede modificar el producto recibido.',
      hint: 'En el array, intenta `PRECIOS[0].precio = 0` y verás el error de TypeScript. Readonly previene esas mutaciones.',
    },
    quiz: [
      {
        question: '¿Qué diferencia hay entre `readonly` como modificador en la interfaz y `Readonly<T>`?',
        options: [
          'No hay diferencia — son exactamente lo mismo',
          'readonly se aplica propiedad por propiedad; Readonly<T> se aplica a todas las propiedades de T a la vez',
          'Readonly<T> es más estricto que readonly individual',
          'readonly solo funciona en clases; Readonly<T> en interfaces',
        ],
        correctAnswer: 'readonly se aplica propiedad por propiedad; Readonly<T> se aplica a todas las propiedades de T a la vez',
        correctFeedback:
          '¡Correcto! Con readonly tienes control granular por propiedad. Readonly<T> es conveniente para hacer todo el tipo inmutable de una vez.',
        incorrectFeedback:
          'readonly en la interfaz se aplica a cada propiedad individualmente. Readonly<T> es un shortcut para aplicar readonly a todas las propiedades de T a la vez.',
      },
      {
        question: '¿Qué error daría `config.url = "nuevo"` si `config: Readonly<Config>` y Config tiene `url: string`?',
        options: [
          'Error: url no existe en Config',
          'Error: cannot assign to url because it is a read-only property',
          'Advertencia: url es inmutable',
          'Ningún error — se puede reasignar aunque sea Readonly',
        ],
        correctAnswer: 'Error: cannot assign to url because it is a read-only property',
        correctFeedback:
          '¡Perfecto! TypeScript da un error de compilación al intentar modificar una propiedad readonly.',
        incorrectFeedback:
          'TypeScript da un error de compilación: "Cannot assign to url because it is a read-only property". La mutación se previene en tiempo de desarrollo, no solo en ejecución.',
      },
      {
        question: '¿Puede mutar `pedido.items[0].cantidad` si `pedido: Readonly<Pedido>` y `Pedido` tiene `items: { cantidad: number }[]`?',
        options: [
          'No — Readonly protege todos los niveles de anidamiento',
          'Sí — Readonly es superficial, los objetos internos siguen siendo mutables',
          'Solo si items tiene la longitud correcta',
          'Depende del modo strict de TypeScript',
        ],
        correctAnswer: 'Sí — Readonly es superficial, los objetos internos siguen siendo mutables',
        correctFeedback:
          '¡Correcto! Readonly<Pedido> hace que `items` sea readonly (no puedes reasignar items), pero los objetos dentro del array siguen siendo mutables.',
        incorrectFeedback:
          'Readonly es superficial. Hace que `items` sea readonly (no puedes hacer `pedido.items = [...]`), pero los objetos dentro del array siguen teniendo propiedades mutables.',
      },
      {
        question: '¿Por qué usar `Readonly<T>` en los parámetros de una función?',
        options: [
          'Para hacer la función más rápida',
          'Para documentar y garantizar que la función no modificará el objeto recibido',
          'Para evitar pasar null como argumento',
          'Porque es requerido cuando el parámetro es un objeto',
        ],
        correctAnswer: 'Para documentar y garantizar que la función no modificará el objeto recibido',
        correctFeedback:
          '¡Exacto! Es una forma de documentar el contrato: esta función solo lee los datos, no los modifica. TypeScript da error si accidentalmente intentas mutar el parámetro.',
        incorrectFeedback:
          'Usar Readonly<T> en parámetros es una forma de documentar y hacer cumplir que la función no muta los datos recibidos. TypeScript detecta mutaciones accidentales.',
      },
      {
        question: '¿Cuál de estas operaciones daría error con `const arr: Readonly<number[]> = [1, 2, 3]`?',
        options: [
          'console.log(arr[0])',
          'const x = arr.length',
          'arr.push(4)',
          'arr.find(n => n > 1)',
        ],
        correctAnswer: 'arr.push(4)',
        correctFeedback:
          '¡Perfecto! push, pop, splice y otros métodos que mutan el array dan error con Readonly. Los métodos de solo lectura como find, length, y acceso por índice están permitidos.',
        incorrectFeedback:
          'Readonly<number[]> permite leer (arr[0], arr.length, find, etc.) pero no mutar. push, pop, sort (in-place), y splice dan error porque modifican el array.',
      },
    ],
  },
  {
    slug: 'utility-pick',
    title: 'Pick',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 148,
    description:
      'Aprende a crear un nuevo tipo seleccionando solo algunas propiedades de otro tipo.',
    explanation: `## Pick<T, K>

\`Pick<T, K>\` crea un nuevo tipo seleccionando **solo algunas propiedades** de T. K es una unión de los nombres de las propiedades que quieres incluir.

### Sintaxis

\`\`\`typescript
type Resultado = Pick<TipoOriginal, "propiedad1" | "propiedad2">
\`\`\`

### Ejemplo básico

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  password: string
  fechaCreacion: Date
  activo: boolean
}

// Solo id y nombre (para mostrar en una lista)
type UsuarioResumen = Pick<Usuario, "id" | "nombre">
// { id: number; nombre: string }

// Solo los campos de contacto
type ContactoUsuario = Pick<Usuario, "nombre" | "email">
// { nombre: string; email: string }
\`\`\`

### Casos de uso comunes

**1. Vistas de solo lectura:**
\`\`\`typescript
type VistaProducto = Pick<Producto, "id" | "nombre" | "precio">
\`\`\`

**2. Formularios parciales:**
\`\`\`typescript
type FormularioLogin = Pick<Usuario, "email" | "password">
\`\`\`

**3. Respuestas de API públicas:**
\`\`\`typescript
type RespuestaPublica = Pick<Usuario, "id" | "nombre">
// Nunca incluye password o datos sensibles
\`\`\`

**4. Cabeceras de tabla:**
\`\`\`typescript
type ColumnaTabla = keyof Pick<Usuario, "id" | "nombre" | "email" | "activo">
// "id" | "nombre" | "email" | "activo"
\`\`\`

### Ventaja sobre redefinir manualmente

\`\`\`typescript
// ❌ Duplicar propiedades manualmente
interface UsuarioResumenManual {
  id: number
  nombre: string
}

// ✅ Pick — si Usuario cambia, UsuarioResumen también actualiza
type UsuarioResumen = Pick<Usuario, "id" | "nombre">
\`\`\`

Con Pick, si cambias el tipo de \`id\` en Usuario de \`number\` a \`string\`, UsuarioResumen se actualiza automáticamente.

### Pick con keyof

\`\`\`typescript
// Puedes usar keyof para obtener las claves
type ClavesPublicas = "id" | "nombre" | "email"
type VistaPublica = Pick<Usuario, ClavesPublicas>
\`\`\``,
    codeExample: `// types.ts

interface Pedido {
  id: number
  numeroPedido: string
  cliente: string
  email: string
  productos: string[]
  total: number
  estado: 'pendiente' | 'procesando' | 'enviado' | 'entregado'
  direccionEnvio: string
  fechaCreacion: Date
  fechaEntrega?: Date
  notas?: string
}

// Resumen para mostrar en lista
type ResumenPedido = Pick<Pedido, 'id' | 'numeroPedido' | 'cliente' | 'total' | 'estado'>

// Solo la información de envío
type InfoEnvio = Pick<Pedido, 'numeroPedido' | 'direccionEnvio' | 'estado' | 'fechaEntrega'>

// Para formulario de actualización de estado
type ActualizarEstado = Pick<Pedido, 'id' | 'estado' | 'notas'>

// Vista pública del pedido (sin datos sensibles)
type PedidoPublico = Pick<Pedido, 'numeroPedido' | 'estado' | 'fechaEntrega'>

// Datos de ejemplo
const pedido: Pedido = {
  id: 1,
  numeroPedido: 'PED-001',
  cliente: 'Ana García',
  email: 'ana@email.com',
  productos: ['Laptop', 'Mouse'],
  total: 1028,
  estado: 'procesando',
  direccionEnvio: 'Calle 123, Ciudad',
  fechaCreacion: new Date(),
}

// Pick preserva los tipos originales
const resumen: ResumenPedido = {
  id: pedido.id,
  numeroPedido: pedido.numeroPedido,
  cliente: pedido.cliente,
  total: pedido.total,
  estado: pedido.estado,
}

// TypeScript sabe exactamente qué propiedades tiene cada tipo
console.log(resumen.numeroPedido) // ✅
// resumen.email  // ❌ email no está en ResumenPedido`,
    keyPoints: [
      'Pick<T, K> crea un nuevo tipo con solo las propiedades especificadas en K',
      'K es una unión de string literals: "prop1" | "prop2"',
      'Los tipos de las propiedades se preservan del tipo original',
      'Evita duplicar manualmente tipos — si T cambia, Pick actualiza automáticamente',
      'Útil para vistas, formularios parciales, y respuestas de API',
    ],
    exercise: {
      description:
        'Dado `interface Empleado { id: number; nombre: string; departamento: string; salario: number; email: string; telefono: string; fechaIngreso: Date; activo: boolean }`, crea cuatro tipos con Pick: (1) `EmpleadoDirectorio` con id, nombre, email, y telefono, (2) `EmpleadoHR` con id, nombre, departamento, salario, y fechaIngreso, (3) `EmpleadoPublico` con id, nombre, y departamento, y (4) `FormularioActualizarEmpleado` con departamento y activo.',
      hint: 'Cada tipo usa Pick con las propiedades exactas necesarias. Verifica que TypeScript sabe qué propiedades tiene cada tipo.',
    },
    quiz: [
      {
        question: '¿Qué crea `Pick<Usuario, "id" | "nombre">`?',
        options: [
          'Un tipo con solo la propiedad id y nombre eliminadas',
          'Un tipo con solo las propiedades id y nombre de Usuario',
          'Una unión de los tipos de id y nombre',
          'Una interfaz que extiende id y nombre',
        ],
        correctAnswer: 'Un tipo con solo las propiedades id y nombre de Usuario',
        correctFeedback:
          '¡Correcto! Pick selecciona las propiedades especificadas y crea un nuevo tipo con solo esas propiedades.',
        incorrectFeedback:
          'Pick<T, K> crea un tipo que incluye SOLO las propiedades de K. No elimina las especificadas (eso es Omit) — las selecciona.',
      },
      {
        question: '¿Por qué usar `Pick<Usuario, "email" | "password">` en lugar de redefinir la interfaz de login manualmente?',
        options: [
          'Porque las interfaces no pueden tener email y password',
          'Porque Pick actualiza automáticamente si el tipo de email o password cambia en Usuario',
          'Porque Pick es más rápido de procesar',
          'No hay diferencia práctica entre los dos enfoques',
        ],
        correctAnswer: 'Porque Pick actualiza automáticamente si el tipo de email o password cambia en Usuario',
        correctFeedback:
          '¡Exacto! Si cambias email en Usuario de string a string | null, Pick<Usuario, "email" | "password"> refleja ese cambio automáticamente. Una redefinición manual no.',
        incorrectFeedback:
          'La ventaja de Pick es que el tipo se mantiene sincronizado con el original. Si cambias la estructura de Usuario, los tipos derivados con Pick se actualizan automáticamente.',
      },
      {
        question: '¿Qué pasa si usas una propiedad que no existe en T? `Pick<Usuario, "id" | "apellido">` si Usuario no tiene apellido?',
        options: [
          'TypeScript crea apellido como undefined',
          'Error de compilación: "apellido" no es una clave válida de Usuario',
          'Pick omite apellido silenciosamente',
          'Pick añade apellido con tipo unknown',
        ],
        correctAnswer: 'Error de compilación: "apellido" no es una clave válida de Usuario',
        correctFeedback:
          '¡Correcto! TypeScript verifica que las propiedades que especificas en K existen realmente en T. Si no existen, da error.',
        incorrectFeedback:
          'TypeScript valida que las propiedades en K son claves reales de T. Si especificas una propiedad que no existe, TypeScript da un error de compilación.',
      },
      {
        question: '¿En qué se diferencia Pick de Partial?',
        options: [
          'Son lo mismo — ambos reducen el tipo',
          'Pick selecciona propiedades; Partial hace propiedades opcionales. Operaciones distintas',
          'Pick solo funciona con interfaces; Partial con type aliases',
          'Partial es más moderno que Pick',
        ],
        correctAnswer: 'Pick selecciona propiedades; Partial hace propiedades opcionales. Operaciones distintas',
        correctFeedback:
          '¡Perfecto! Pick cambia qué propiedades existen en el tipo. Partial cambia si las propiedades son requeridas u opcionales. Son transformaciones distintas.',
        incorrectFeedback:
          'Pick y Partial son transformaciones distintas. Pick selecciona un subconjunto de propiedades. Partial hace todas las propiedades opcionales sin quitar ninguna.',
      },
      {
        question: '¿Cuál sería el tipo de `resumen.estado` si `resumen: Pick<Pedido, "id" | "estado">` y `Pedido` tiene `estado: "pendiente" | "enviado"`?',
        options: [
          'string',
          '"pendiente" | "enviado"',
          'any',
          'unknown',
        ],
        correctAnswer: '"pendiente" | "enviado"',
        correctFeedback:
          '¡Exacto! Pick preserva el tipo exacto de cada propiedad. Como estado en Pedido es "pendiente" | "enviado", en el Pick también lo es.',
        incorrectFeedback:
          'Pick preserva los tipos de las propiedades del tipo original. Como `estado` en Pedido es `"pendiente" | "enviado"`, en el resultado de Pick también es ese tipo literal.',
      },
    ],
  },
  {
    slug: 'utility-omit',
    title: 'Omit',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 149,
    description:
      'Aprende a crear un nuevo tipo excluyendo algunas propiedades de otro tipo.',
    explanation: `## Omit<T, K>

\`Omit<T, K>\` es el complemento de \`Pick\`. En lugar de seleccionar las propiedades que quieres, **excluyes** las que no quieres. El resultado tiene todas las propiedades de T excepto las de K.

### Sintaxis

\`\`\`typescript
type Resultado = Omit<TipoOriginal, "propiedadAExcluir" | "otraAExcluir">
\`\`\`

### Ejemplo básico

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

// Sin datos sensibles (para respuesta de API)
type UsuarioPublico = Omit<Usuario, "password">
// { id: number; nombre: string; email: string; createdAt: Date; updatedAt: Date }

// Para crear usuario (sin id ni fechas — los genera el servidor)
type NuevoUsuario = Omit<Usuario, "id" | "createdAt" | "updatedAt">
// { nombre: string; email: string; password: string }
\`\`\`

### Cuándo preferir Omit sobre Pick

Usa **Omit** cuando quieres la mayoría de las propiedades pero excluir pocas:
\`\`\`typescript
// Si tienes 10 propiedades y quieres 9 — mejor Omit que Pick de 9
type CasiTodo = Omit<Interface, "soloEstaUna">
\`\`\`

Usa **Pick** cuando quieres pocas propiedades de un tipo grande:
\`\`\`typescript
// Si tienes 10 propiedades y quieres 2 — mejor Pick
type SoloDos = Pick<Interface, "una" | "dos">
\`\`\`

### Casos de uso comunes

**1. Sin el id para crear (POST):**
\`\`\`typescript
type CrearProducto = Omit<Producto, "id">
\`\`\`

**2. Sin datos sensibles:**
\`\`\`typescript
type SinPassword = Omit<Usuario, "password" | "salt">
\`\`\`

**3. Sin campos generados por el servidor:**
\`\`\`typescript
type DatosFormulario = Omit<Entidad, "id" | "creadoEn" | "actualizadoEn">
\`\`\`

### Combinar Omit con Partial

\`\`\`typescript
// Para actualizar: sin id (no puede cambiar), resto opcional
type ActualizarUsuario = Partial<Omit<Usuario, "id">>
\`\`\``,
    codeExample: `// api.ts

interface Articulo {
  id: number
  titulo: string
  contenido: string
  autor: string
  tags: string[]
  publicado: boolean
  vistas: number
  creadoEn: Date
  actualizadoEn: Date
  borrador: boolean
}

// Para crear un artículo nuevo (sin campos del servidor)
type NuevoArticulo = Omit<Articulo, 'id' | 'vistas' | 'creadoEn' | 'actualizadoEn'>
// { titulo, contenido, autor, tags, publicado, borrador }

// Para la respuesta pública (sin borrador ni datos internos)
type ArticuloPublico = Omit<Articulo, 'borrador'>

// Para actualizar (sin id ni fechas generadas, todos opcionales)
type ActualizarArticulo = Partial<Omit<Articulo, 'id' | 'creadoEn' | 'actualizadoEn' | 'vistas'>>

// Función para crear artículo — recibe los datos del usuario
function crearArticulo(datos: NuevoArticulo): Articulo {
  return {
    ...datos,
    id: Math.random(),
    vistas: 0,
    creadoEn: new Date(),
    actualizadoEn: new Date(),
  }
}

const nuevoArticulo: NuevoArticulo = {
  titulo: 'TypeScript desde Cero',
  contenido: 'Contenido del artículo...',
  autor: 'Ana García',
  tags: ['typescript', 'programación'],
  publicado: false,
  borrador: true,
}

const articuloCreado = crearArticulo(nuevoArticulo)
console.log(articuloCreado.id)          // ✅ existe en el resultado
console.log(articuloCreado.creadoEn)    // ✅ existe en el resultado
// nuevoArticulo.id                     // ❌ id no existe en NuevoArticulo`,
    keyPoints: [
      'Omit<T, K> crea un tipo con todas las propiedades de T excepto las de K',
      'Es el complemento de Pick — en lugar de incluir, excluye',
      'Usa Omit cuando quieres la mayoría de propiedades y excluyes pocas',
      'Muy útil para crear variantes de tipos para crear/actualizar datos',
      'Se combina bien con Partial para actualizaciones parciales sin campos fijos',
    ],
    exercise: {
      description:
        'Crea una interfaz `Curso { id: number; slug: string; titulo: string; descripcion: string; precio: number; instructor: string; publicado: boolean; creadoEn: Date; totalEstudiantes: number }`. Luego crea cuatro tipos con Omit: (1) `NuevoCurso` sin id, creadoEn, y totalEstudiantes, (2) `CursoPublico` sin precio (para ver sin login), (3) `ActualizarCurso` (sin id, creadoEn, totalEstudiantes, todos opcionales), y (4) `VistaInstructor` sin precio y slug.',
      hint: 'Para ActualizarCurso combina Partial con Omit: `Partial<Omit<Curso, "id" | "creadoEn" | "totalEstudiantes">>`.',
    },
    quiz: [
      {
        question: '¿Qué crea `Omit<Producto, "id" | "createdAt">`?',
        options: [
          'Un tipo con solo id y createdAt',
          'Un tipo con todas las propiedades de Producto EXCEPTO id y createdAt',
          'Un tipo donde id y createdAt son opcionales',
          'Una unión de Producto sin id y Producto sin createdAt',
        ],
        correctAnswer: 'Un tipo con todas las propiedades de Producto EXCEPTO id y createdAt',
        correctFeedback:
          '¡Correcto! Omit excluye las propiedades especificadas. El resultado tiene todo menos las indicadas.',
        incorrectFeedback:
          'Omit<T, K> mantiene todas las propiedades de T EXCEPTO las en K. El resultado tiene todo lo de Producto menos id y createdAt.',
      },
      {
        question: '¿Cuándo es mejor usar Omit vs Pick?',
        options: [
          'Siempre Omit — es más moderno',
          'Omit cuando quieres la mayoría de propiedades y excluyes pocas; Pick cuando quieres pocas de muchas',
          'Pick para interfaces; Omit para type aliases',
          'Omit para propiedades opcionales; Pick para requeridas',
        ],
        correctAnswer: 'Omit cuando quieres la mayoría de propiedades y excluyes pocas; Pick cuando quieres pocas de muchas',
        correctFeedback:
          '¡Exacto! Si tienes 10 propiedades y quieres 9, usa Omit (excluye 1). Si quieres 2 de 10, usa Pick (selecciona 2). Elige el que resulta en menos código.',
        incorrectFeedback:
          'La elección depende de cuántas propiedades quieres incluir vs excluir. Omit es mejor cuando excluyes pocas. Pick es mejor cuando incluyes pocas.',
      },
      {
        question: '¿Qué hace `Partial<Omit<Usuario, "id">>`?',
        options: [
          'Elimina id y hace el resto optional',
          'Primero hace todo opcional, luego elimina id',
          'Solo elimina id',
          'Es inválido — no se pueden componer Partial y Omit',
        ],
        correctAnswer: 'Elimina id y hace el resto optional',
        correctFeedback:
          '¡Perfecto! Se evalúa de adentro hacia afuera: primero Omit quita id, luego Partial hace el resto opcional. El resultado es un tipo sin id y con el resto de propiedades opcionales.',
        incorrectFeedback:
          'Se evalúa de adentro hacia afuera. Primero: Omit<Usuario, "id"> crea un tipo sin id. Luego: Partial<...> hace todas las propiedades restantes opcionales.',
      },
      {
        question: '¿Por qué `NuevoUsuario = Omit<Usuario, "id">` es mejor que redefinir la interfaz manualmente?',
        options: [
          'Porque Omit es más rápido',
          'Porque si agregas campos a Usuario, NuevoUsuario los incluye automáticamente',
          'Porque TypeScript no permite interfaces con id',
          'No hay diferencia — es solo estilo',
        ],
        correctAnswer: 'Porque si agregas campos a Usuario, NuevoUsuario los incluye automáticamente',
        correctFeedback:
          '¡Correcto! Si agregas `direccion: string` a Usuario, NuevoUsuario automáticamente lo incluye (porque Omit copia todo excepto id). Una interfaz manual requeriría actualización manual.',
        incorrectFeedback:
          'Los tipos derivados con Omit se mantienen sincronizados con el tipo base. Si agregas campos a Usuario, Omit los incluye automáticamente (excepto los excluidos). Con una interfaz manual tendrías que actualizarla.',
      },
      {
        question: '¿Puede usarse una variable de tipo T donde se espera Omit<T, "id"> si T tiene id?',
        options: [
          'Sí siempre — T tiene más propiedades que Omit<T, "id">',
          'No — Omit<T, "id"> tiene menos propiedades que T, pero TypeScript verifica la compatibilidad',
          'Solo si id es opcional en T',
          'Sí siempre — TypeScript ignora propiedades extra',
        ],
        correctAnswer: 'Sí siempre — T tiene más propiedades que Omit<T, "id">',
        correctFeedback:
          '¡Correcto! TypeScript usa estructural typing. T tiene todas las propiedades de Omit<T, "id"> y además id. Un supertipo siempre es compatible con un subtipo más restringido.',
        incorrectFeedback:
          'TypeScript usa compatibilidad estructural. T tiene todas las propiedades de Omit<T, "id"> más id. Como T "satisface" Omit<T, "id"> (tiene todo lo que pide, y más), es compatible.',
      },
    ],
  },
  {
    slug: 'utility-types-formularios',
    title: 'Utility types básicos en formularios',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 150,
    description:
      'Aprende a usar Partial, Pick y Omit para representar datos de formularios, edición y creación.',
    explanation: `## Utility types en formularios

Los formularios son uno de los casos de uso más prácticos de los utility types. Los datos que el usuario introduce son siempre una versión parcial, reducida, o modificada del tipo completo del dominio.

### El patrón típico de formularios

\`\`\`typescript
interface Producto {
  id: number           // Lo genera el servidor
  nombre: string
  precio: number
  descripcion: string
  categoria: string
  activo: boolean      // Lo decide el servidor al publicar
  creadoEn: Date      // Lo genera el servidor
}

// Para crear — sin los campos del servidor
type FormularioCrear = Omit<Producto, "id" | "activo" | "creadoEn">

// Para editar — sin id (no cambia), el resto opcional
type FormularioEditar = Partial<Omit<Producto, "id">>

// Para buscar — solo los campos por los que puedes filtrar
type FormularioBuscar = Pick<Producto, "nombre" | "categoria">
\`\`\`

### Estado del formulario

\`\`\`typescript
interface EstadoFormulario<TDatos> {
  datos: Partial<TDatos>
  errores: Partial<Record<keyof TDatos, string>>
  enviando: boolean
  enviado: boolean
  valido: boolean
}
\`\`\`

### Validación tipada

\`\`\`typescript
type Validaciones<T> = Partial<Record<keyof T, string>>

function validar<T>(datos: Partial<T>, reglas: { [K in keyof T]?: (v: T[K] | undefined) => string | null }): Validaciones<T> {
  const errores: Validaciones<T> = {}
  for (const campo in reglas) {
    const error = reglas[campo]?.(datos[campo] as T[typeof campo] | undefined)
    if (error) errores[campo] = error
  }
  return errores
}
\`\`\`

### Formulario de registro

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
  password: string
  rol: "usuario" | "admin"
  creadoEn: Date
}

// Solo los campos que el usuario llena
type FormularioRegistro = Pick<Usuario, "nombre" | "email" | "password">

// Para actualizar perfil (sin email ni id)
type FormularioPerfil = Partial<Pick<Usuario, "nombre">>
\`\`\``,
    codeExample: `// forms.ts

interface Tarea {
  id: number
  titulo: string
  descripcion: string
  prioridad: 'alta' | 'media' | 'baja'
  asignadoA: string
  completada: boolean
  fechaVencimiento: Date
  creadoEn: Date
}

// Formulario de creación — sin campos del servidor
type NuevaTarea = Omit<Tarea, 'id' | 'completada' | 'creadoEn'>

// Formulario de edición — todo excepto id y creadoEn, todo opcional
type EditarTarea = Partial<Omit<Tarea, 'id' | 'creadoEn'>>

// Filtros de búsqueda — solo algunos campos
type FiltrosTareas = Partial<Pick<Tarea, 'prioridad' | 'asignadoA' | 'completada'>>

// Estado del formulario de nueva tarea
interface EstadoFormNuevaTarea {
  datos: Partial<NuevaTarea>
  errores: Partial<Record<keyof NuevaTarea, string>>
  enviando: boolean
}

// Estado inicial del formulario
const estadoInicial: EstadoFormNuevaTarea = {
  datos: {},
  errores: {},
  enviando: false,
}

// Función para actualizar un campo del formulario
function actualizarCampo<K extends keyof NuevaTarea>(
  estado: EstadoFormNuevaTarea,
  campo: K,
  valor: NuevaTarea[K]
): EstadoFormNuevaTarea {
  return {
    ...estado,
    datos: { ...estado.datos, [campo]: valor },
    errores: { ...estado.errores, [campo]: undefined },
  }
}

// Verificar si el formulario está completo
function formularioValido(datos: Partial<NuevaTarea>): datos is NuevaTarea {
  return !!(datos.titulo && datos.descripcion && datos.prioridad && datos.asignadoA && datos.fechaVencimiento)
}`,
    keyPoints: [
      'Omit<T, "id" | "creadoEn"> es el patrón para formularios de creación',
      'Partial<Omit<T, "id">> es el patrón para formularios de edición',
      'Pick<T, campos_relevantes> es el patrón para formularios de búsqueda/filtro',
      'EstadoFormulario<T> genérico puede manejar cualquier tipo de formulario',
      'Combinar utility types mantiene los tipos sincronizados con el dominio',
    ],
    exercise: {
      description:
        'Crea una interfaz `Proyecto { id: number; nombre: string; descripcion: string; presupuesto: number; responsable: string; estado: "activo" | "pausado" | "finalizado"; creadoEn: Date; actualizadoEn: Date }`. Luego crea: (1) `FormularioCrearProyecto` sin id, estado, creadoEn, actualizadoEn, (2) `FormularioEditarProyecto` (sin id, creadoEn, actualizadoEn, todo opcional), (3) `FiltrosProyecto` con estado y responsable opcionales, y (4) una función `esProyectoValido(datos: FormularioCrearProyecto | undefined): datos is FormularioCrearProyecto` que verifique si los campos principales están presentes.',
      hint: 'Para esProyectoValido verifica que nombre, descripcion, responsable, y presupuesto no sean undefined. El patrón `datos is FormularioCrearProyecto` es un type predicate.',
    },
    quiz: [
      {
        question: '¿Por qué `type FormularioCrear = Omit<Entidad, "id" | "creadoEn">` es un buen patrón?',
        options: [
          'Porque el formulario no necesita id ni fechas que el servidor genera',
          'Porque id y creadoEn siempre son opcionales',
          'Porque el servidor no puede manejar id',
          'Porque Omit es obligatorio en formularios',
        ],
        correctAnswer: 'Porque el formulario no necesita id ni fechas que el servidor genera',
        correctFeedback:
          '¡Exacto! Los campos que el servidor genera (id, timestamps) no deben ser enviados por el usuario. Omit los excluye limpiamente.',
        incorrectFeedback:
          'El patrón es excluir lo que el servidor genera. El usuario no debe (ni puede) decidir el id o las fechas de creación — son generados automáticamente por el backend.',
      },
      {
        question: '¿Para qué sirve `Partial<Omit<T, "id">>` en el contexto de un formulario de edición?',
        options: [
          'Para que el id se vuelva opcional',
          'Para crear un tipo donde ningún campo excepto id es obligatorio — solo envías lo que cambia',
          'Para eliminar todos los campos opcionales',
          'Es un error — no se pueden combinar Partial y Omit',
        ],
        correctAnswer: 'Para crear un tipo donde ningún campo excepto id es obligatorio — solo envías lo que cambia',
        correctFeedback:
          '¡Perfecto! Omit quita id (que no puede cambiar), Partial hace el resto opcional. Así el usuario puede editar solo el nombre, o solo el precio, sin enviar todo.',
        incorrectFeedback:
          'Primero Omit quita id (no debe cambiar), luego Partial hace el resto opcional. El resultado permite enviar solo los campos que cambian — el patrón PATCH de las APIs REST.',
      },
      {
        question: '¿Cuál tipo usarías para representar los filtros de búsqueda de una lista de tareas?',
        options: [
          'Required<Tarea>',
          'Partial<Pick<Tarea, "prioridad" | "asignadoA" | "completada">>',
          'Omit<Tarea, "id" | "titulo">',
          'Tarea[]',
        ],
        correctAnswer: 'Partial<Pick<Tarea, "prioridad" | "asignadoA" | "completada">>',
        correctFeedback:
          '¡Correcto! Pick selecciona los campos por los que puedes filtrar, Partial los hace opcionales (el usuario puede no usar todos los filtros).',
        incorrectFeedback:
          'Los filtros son campos opcionales de búsqueda. Pick selecciona los campos filtrables, Partial los hace opcionales (no todos los filtros tienen que estar activos).',
      },
      {
        question: '¿Por qué `EstadoFormulario<T>` con `datos: Partial<T>` y `errores: Partial<Record<keyof T, string>>` es un buen tipo genérico?',
        options: [
          'Porque es el más corto de escribir',
          'Porque captura la estructura común de cualquier formulario: datos parciales y errores por campo',
          'Porque TypeScript lo requiere para formularios',
          'Porque Partial hace los datos más seguros',
        ],
        correctAnswer: 'Porque captura la estructura común de cualquier formulario: datos parciales y errores por campo',
        correctFeedback:
          '¡Exacto! Todo formulario tiene datos (siempre parciales — el usuario va llenando), errores por campo, y estado de envío. Esta estructura es reutilizable para cualquier tipo T.',
        incorrectFeedback:
          'La estructura es universal: datos parciales (el usuario no ha llenado todo), errores mapeados por campo, y estados de envío. Al ser genérica, funciona para cualquier formulario.',
      },
      {
        question: '¿Qué ventaja tiene sincronizar `FormularioEditar` con `Entidad` usando utility types vs redefinirlo manualmente?',
        options: [
          'Ninguna — el resultado es el mismo',
          'Si agregas campos a Entidad, FormularioEditar se actualiza automáticamente sin cambio manual',
          'Hace el código más rápido',
          'Permite que TypeScript compile más rápido',
        ],
        correctAnswer: 'Si agregas campos a Entidad, FormularioEditar se actualiza automáticamente sin cambio manual',
        correctFeedback:
          '¡Perfecto! Mantenimiento automático es la clave. Si agregas un campo a tu interfaz de dominio, los tipos derivados con utility types capturan ese cambio automáticamente.',
        incorrectFeedback:
          'El beneficio principal es el mantenimiento. Los tipos derivados con utility types se mantienen sincronizados con el tipo base. Si cambias la entidad, el formulario refleja el cambio automáticamente.',
      },
    ],
  },
  {
    slug: 'errores-utility-types-basicos',
    title: 'Errores comunes con utility types básicos',
    module: 'Utility types básicos',
    moduleNumber: 19,
    order: 151,
    description:
      'Aprende a evitar abusar de utility types cuando un tipo explícito sería más claro.',
    explanation: `## Errores comunes con utility types básicos

Los utility types son herramientas poderosas, pero como cualquier herramienta pueden usarse mal. Aquí están los errores más frecuentes.

### Error 1: usar Partial cuando los campos son realmente requeridos

\`\`\`typescript
// ❌ Si precio siempre es requerido, no uses Partial
function publicarProducto(producto: Partial<Producto>): void {
  // producto.precio podría ser undefined
  // TypeScript no protege en el uso
}

// ✅ Si precio es requerido, ponlo como requerido
function publicarProducto(producto: Required<Omit<Producto, "id">>): void {
  // precio está garantizado
}
\`\`\`

### Error 2: Omit vs redefinición manual para tipos muy distintos

\`\`\`typescript
// ❌ Si solo comparten 2 de 10 campos, Omit puede crear confusión
// El tipo resultante puede ser sorprendente y difícil de entender
type MuyDiferente = Omit<Entidad, "campo1" | "campo2" | "campo3" | "campo4" | "campo5">

// ✅ Si el tipo resultante es muy diferente, define uno nuevo
interface TipoNuevo {
  campo6: string
  campo7: number
}
\`\`\`

### Error 3: anidar demasiados utility types

\`\`\`typescript
// ❌ Difícil de leer — ¿qué es esto?
type X = Partial<Required<Omit<Pick<T, "a" | "b" | "c">, "b">>>

// ✅ Divide en pasos nombrados
type TConABC = Pick<T, "a" | "b" | "c">
type TConAC = Omit<TConABC, "b">
type X = Partial<Required<TConAC>>
// O simplemente define el tipo directamente si es más claro
\`\`\`

### Error 4: Partial como atajo para "no sé qué tipo es"

\`\`\`typescript
// ❌ Partial usado para evitar definir el tipo correctamente
function guardar(datos: Partial<unknown>): void {}
// Esto es básicamente any con más pasos

// ✅ Define el tipo que realmente necesitas
function guardar(datos: Parcial<MiTipo>): void {}
\`\`\`

### Error 5: olvidar que Readonly es superficial

\`\`\`typescript
// ❌ Pensar que esto protege todo
const pedido: Readonly<Pedido> = { id: 1, items: [{ cantidad: 3 }] }
pedido.items[0].cantidad = 99  // ¡Esto funciona! Readonly no protege el interior

// ✅ Saber la limitación y documentarla
// Si necesitas inmutabilidad profunda, debes manejarla en otro nivel
\`\`\`

### La regla de los utility types

**Usa utility types cuando simplifican y clarifican el código. Si el tipo resultante es confuso, difícil de entender, o muy diferente del original, considera definir el tipo directamente.**`,
    codeExample: `// main.ts

interface ConfiguracionCompleja {
  host: string
  puerto: number
  usuario: string
  password: string
  baseDatos: string
  maxConexiones: number
  timeout: number
  ssl: boolean
  opciones: { debug: boolean; log: boolean }
}

// ❌ Error 1: Partial cuando los campos son realmente requeridos
// function conectar(config: Partial<ConfiguracionCompleja>) — incorrecto si todo es necesario

// ✅ Correcto: usa el tipo exacto que necesitas
function conectar(config: ConfiguracionCompleja): void {
  console.log(\`Conectando a \${config.host}:\${config.puerto}\`)
}

// ❌ Error 2: anidar demasiado
// type X = Partial<Required<Omit<Pick<ConfiguracionCompleja, "host" | "puerto" | "timeout">, "timeout">>>

// ✅ Divide en pasos legibles
type InfoConexion = Pick<ConfiguracionCompleja, 'host' | 'puerto' | 'timeout'>
type InfoConexionSinTimeout = Omit<InfoConexion, 'timeout'>
type InfoConexionOpcional = Partial<InfoConexionSinTimeout>
// Ahora es legible paso a paso

// ❌ Error 3: olvidar que Readonly es superficial
const config: Readonly<ConfiguracionCompleja> = {
  host: 'localhost',
  puerto: 5432,
  usuario: 'admin',
  password: 'secret',
  baseDatos: 'miapp',
  maxConexiones: 10,
  timeout: 5000,
  ssl: true,
  opciones: { debug: false, log: true },
}

// config.host = 'otro'          // ❌ Error: readonly (correcto)
config.opciones.debug = true     // ✅ Sin error — Readonly no llega al interior

// ✅ Buena práctica: usa utility types cuando simplifican
type ConfigPublica = Omit<ConfiguracionCompleja, 'password' | 'usuario'>
// Esto sí tiene sentido — excluye datos sensibles`,
    keyPoints: [
      'No uses Partial cuando los campos son realmente requeridos — usa el tipo exacto',
      'Si el tipo resultante de Omit es muy diferente al original, define un tipo nuevo',
      'Evita anidar demasiados utility types — divide en pasos con nombres descriptivos',
      'Recuerda que Partial, Required, y Readonly son superficiales',
      'Los utility types deben simplificar el código, no complicarlo',
    ],
    exercise: {
      description:
        'Revisa y mejora estos tres tipos problemáticos: (1) `type X = Partial<Required<Omit<Pick<Empleado, "nombre" | "email" | "cargo">, "cargo">>>` — simplifica con nombres descriptivos, (2) `function crearPedido(datos: Partial<Pedido>)` — ¿cuáles campos son realmente requeridos?, y (3) `const config: Readonly<{ opciones: { debug: boolean } }> = { opciones: { debug: false } }` — explica por qué `config.opciones.debug = true` no da error aunque config es Readonly.',
      hint: 'Para (1) usa dos o tres type aliases intermedios con nombres claros. Para (2) distingue qué campos provee el usuario vs el servidor. Para (3) Readonly es superficial.',
    },
    quiz: [
      {
        question: '¿Cuál es el problema de usar `Partial<T>` como tipo de parámetro cuando todos los campos son requeridos?',
        options: [
          'No hay problema — Partial es siempre más flexible',
          'TypeScript no puede verificar que los campos requeridos están presentes — pueden ser undefined',
          'Partial hace el código más lento',
          'Partial no puede usarse en parámetros de funciones',
        ],
        correctAnswer: 'TypeScript no puede verificar que los campos requeridos están presentes — pueden ser undefined',
        correctFeedback:
          '¡Correcto! Si la función necesita todos los campos para funcionar, Partial le dice a TypeScript que algunos pueden faltar, perdiendo la verificación de que están presentes.',
        incorrectFeedback:
          'Con Partial<T>, TypeScript permite pasar objetos con campos faltantes. Si tu función necesita esos campos para funcionar, deberías verificarlos manualmente o usar el tipo correcto.',
      },
      {
        question: '¿Cuándo es mejor definir un tipo nuevo en lugar de usar Omit?',
        options: [
          'Siempre — los tipos nuevos son más claros',
          'Cuando el tipo resultante es muy diferente al original y Omit excluiría muchos campos',
          'Cuando el tipo base tiene propiedades opcionales',
          'Nunca — Omit siempre es preferible',
        ],
        correctAnswer: 'Cuando el tipo resultante es muy diferente al original y Omit excluiría muchos campos',
        correctFeedback:
          '¡Exacto! Si terminas excluyendo 7 de 10 propiedades, Pick o un tipo nuevo son más claros que un Omit con una lista larga.',
        incorrectFeedback:
          'Si el tipo resultante tiene poco que ver con el original (excluyes demasiado), es más claro definir el tipo directamente. Omit brillaa cuando excluyes pocas propiedades.',
      },
      {
        question: '¿Por qué `config.opciones.debug = true` no da error si `config: Readonly<{ opciones: { debug: boolean } }>`?',
        options: [
          'Porque Readonly no afecta propiedades boolean',
          'Porque Readonly es superficial — solo hace readonly las propiedades del primer nivel, no las de objetos anidados',
          'Porque TypeScript no puede verificar propiedades anidadas',
          'Porque debug es un nombre de propiedad especial',
        ],
        correctAnswer: 'Porque Readonly es superficial — solo hace readonly las propiedades del primer nivel, no las de objetos anidados',
        correctFeedback:
          '¡Perfecto! Readonly hace `opciones` readonly (no puedes reasignar el objeto opciones), pero las propiedades DENTRO de opciones siguen siendo mutables.',
        incorrectFeedback:
          'Readonly solo actúa en el primer nivel. `config.opciones = otro` daría error (opciones es readonly), pero `config.opciones.debug = true` es válido porque el interior del objeto no es readonly.',
      },
      {
        question: '¿Cuál de estas es la forma correcta de simplificar `type X = Partial<Required<Omit<T, "a">>>`?',
        options: [
          'Dejarlo tal cual — los utility types anidados son normales',
          'Dividir en pasos: `type SinA = Omit<T, "a">; type SinARequerido = Required<SinA>; type X = Partial<SinARequerido>`',
          'Simplificarlo a `type X = T`',
          'Usar any en su lugar',
        ],
        correctAnswer: 'Dividir en pasos: `type SinA = Omit<T, "a">; type SinARequerido = Required<SinA>; type X = Partial<SinARequerido>`',
        correctFeedback:
          '¡Correcto! Los pasos intermedios nombrados hacen el tipo legible y documentan la intención de cada transformación.',
        incorrectFeedback:
          'Dividir en pasos con nombres descriptivos es la mejor práctica. Cada paso comunica su propósito y el tipo final es más fácil de entender.',
      },
      {
        question: '¿Cuál utility type básico NO es superficial (actúa en todos los niveles)?',
        options: [
          'Partial',
          'Required',
          'Readonly',
          'Ninguno — todos los utility types básicos son superficiales',
        ],
        correctAnswer: 'Ninguno — todos los utility types básicos son superficiales',
        correctFeedback:
          '¡Exacto! Partial, Required, y Readonly son todos superficiales — solo afectan el primer nivel de propiedades. Los objetos anidados mantienen su comportamiento original.',
        incorrectFeedback:
          'Partial, Required, y Readonly son todos superficiales. Para inmutabilidad o parcialidad profunda necesitas tipos recursivos personalizados, que están fuera del alcance de los utility types básicos.',
      },
    ],
  },
]

export const tsModule19: Module = {
  number: 19,
  title: 'Utility types básicos',
  level: 'nivel4',
  lessons: lessonsTsModule19,
}
