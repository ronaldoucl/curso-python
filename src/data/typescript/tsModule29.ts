import type { Lesson, Module } from '@/types'

export const lessonsTsModule29: Lesson[] = [
  {
    slug: 'por-que-migrar-typescript',
    title: '¿Por qué migrar de JavaScript a TypeScript?',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 231,
    description:
      'Aprende cuándo vale la pena migrar un proyecto JavaScript a TypeScript y qué beneficios puede traer.',
    explanation: `## ¿Por qué migrar de JavaScript a TypeScript?

Migrar un proyecto existente de JavaScript a TypeScript es una decisión importante. No siempre es la respuesta correcta, pero cuando lo es, los beneficios son significativos.

### ¿Cuándo vale la pena migrar?

**Vale la pena migrar cuando:**
- El proyecto tiene muchos bugs relacionados con tipos incorrectos
- El equipo pasa tiempo depurando errores que podrían detectarse antes
- El proyecto está creciendo y se vuelve difícil de mantener
- Quieres mejorar la experiencia del editor (autocompletado, refactoring)
- El equipo nuevo tiene dificultades para entender el código

**Puede no valer la pena migrar cuando:**
- El proyecto es pequeño y está terminado (no habrá cambios)
- El equipo no tiene experiencia con TypeScript y el proyecto tiene una fecha límite muy próxima
- Los tests son excelentes y el código está bien documentado

### Los beneficios concretos de migrar

| Beneficio | Descripción |
|---|---|
| Detección temprana de errores | Los errores de tipos aparecen al escribir, no en producción |
| Mejor autocompletado | El editor conoce la forma de cada objeto |
| Refactoring más seguro | Cambiar un nombre propaga el cambio automáticamente |
| Documentación viva | Los tipos explican qué espera cada función |
| Colaboración más fácil | El código se entiende sin conocer el historial |

### La migración gradual es la clave

No tienes que migrar todo de una vez. TypeScript permite mantener archivos \`.js\` y \`.ts\` en el mismo proyecto mientras migras.

\`\`\`json
// tsconfig.json — permite migración gradual
{
  "compilerOptions": {
    "allowJs": true,       // Permite archivos .js junto a .ts
    "checkJs": false,      // No verificar archivos .js (al principio)
    "strict": false        // Menos estricto al inicio
  }
}
\`\`\``,
    codeExample: `// Ejemplo: beneficios reales de migrar

// ─── ANTES (JavaScript) ────────────────────────────────────────
// api.js

function obtenerUsuario(id) {
  return fetch(\`/api/usuarios/\${id}\`)
    .then(r => r.json())
}

// Uso — no sabes qué forma tiene el objeto devuelto
obtenerUsuario(1).then(usuario => {
  console.log(usuario.nmbre)  // Typo — "nmbre" en lugar de "nombre"
  // Solo falla en runtime cuando el usuario accede a la página
})

// ─── DESPUÉS (TypeScript) ─────────────────────────────────────
// api.ts

interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

async function obtenerUsuario(id: number): Promise<Usuario> {
  const respuesta = await fetch(\`/api/usuarios/\${id}\`)
  return respuesta.json() as Usuario
}

// Uso — TypeScript conoce la forma del objeto
const usuario = await obtenerUsuario(1)
console.log(usuario.nmbre)  // Error inmediato: "nmbre" no existe en Usuario
console.log(usuario.nombre) // ✅ Autocompletado sugiere "nombre"

// ─── tsconfig.json para migración gradual ─────────────────────
// {
//   "compilerOptions": {
//     "allowJs": true,
//     "checkJs": false,
//     "strict": false,    // Empieza sin strict, actívalo después
//     "outDir": "./dist",
//     "rootDir": "./src"
//   }
// }`,
    keyPoints: [
      'Migrar vale la pena cuando los errores de tipos frecuentes ralentizan el desarrollo',
      'La migración gradual es posible — TypeScript y JavaScript pueden coexistir en el mismo proyecto',
      'allowJs: true permite mezclar archivos .ts y .js durante la migración',
      'Los beneficios principales son detección temprana de errores, mejor autocompletado y refactoring más seguro',
      'No siempre vale la pena migrar — evalúa el tamaño, el equipo y el estado del proyecto',
    ],
    exercise: {
      description:
        'Analiza un escenario: tienes un proyecto JavaScript de 5 años con 15.000 líneas de código, un equipo de 3 personas, muchos bugs de "undefined is not a function", y sin tests. ¿Migrarias a TypeScript? ¿Cómo lo harías? Escribe 3 razones para migrar y describe las primeras 2 acciones que tomarías.',
      hint: 'Con muchos bugs de tipos y un equipo activo, la migración tiene sentido. Las primeras acciones serían: configurar tsconfig con allowJs:true y empezar por los archivos más críticos.',
    },
    quiz: [
      {
        question: '¿Cuál es la opción de tsconfig que permite tener archivos .js y .ts en el mismo proyecto?',
        options: ['"allowJavaScript": true', '"allowJs": true', '"mixedMode": true', '"jsCheck": false'],
        correctAnswer: '"allowJs": true',
        correctFeedback: '¡Correcto! allowJs: true permite que TypeScript procese archivos .js junto con .ts durante la migración.',
        incorrectFeedback: 'La opción correcta es "allowJs": true. Permite mezclar archivos JavaScript y TypeScript en el mismo proyecto.',
      },
      {
        question: '¿Cuándo puede NO valer la pena migrar a TypeScript?',
        options: [
          'Cuando el proyecto tiene más de 100 archivos',
          'Cuando el proyecto está terminado, es pequeño y no habrá más cambios',
          'Cuando el equipo tiene más de 3 personas',
          'Nunca — TypeScript siempre vale la pena',
        ],
        correctAnswer: 'Cuando el proyecto está terminado, es pequeño y no habrá más cambios',
        correctFeedback: '¡Correcto! Migrar un proyecto que ya no cambiará tiene costo sin beneficio real.',
        incorrectFeedback: 'La migración no siempre vale la pena. Si el proyecto está terminado y no recibirá cambios, el costo de migrar supera el beneficio.',
      },
      {
        question: '¿Cuál es el principal beneficio de TypeScript durante el desarrollo?',
        options: [
          'Hace que la app sea más rápida en producción',
          'Detecta errores de tipos en el editor, antes de que lleguen a producción',
          'Elimina la necesidad de pruebas',
          'Reduce el tamaño del bundle',
        ],
        correctAnswer: 'Detecta errores de tipos en el editor, antes de que lleguen a producción',
        correctFeedback: '¡Correcto! El mayor beneficio es encontrar errores mientras escribes el código, no cuando el usuario usa la app.',
        incorrectFeedback: 'TypeScript detecta errores de tipos en tiempo de edición — antes de ejecutar, antes de probar, antes de que el usuario lo vea.',
      },
      {
        question: '¿Qué beneficio concreto aporta TypeScript al refactorizar código?',
        options: [
          'Hace el código más rápido en producción',
          'Al renombrar una función o propiedad, TypeScript detecta automáticamente todos los lugares donde se usa incorrectamente',
          'Elimina la necesidad de tests durante el refactoring',
          'Solo ayuda en proyectos grandes',
        ],
        correctAnswer: 'Al renombrar una función o propiedad, TypeScript detecta automáticamente todos los lugares donde se usa incorrectamente',
        correctFeedback: '¡Correcto! TypeScript hace el refactoring más seguro — detecta todos los usos del símbolo renombrado y señala los que no se actualizaron.',
        incorrectFeedback: 'TypeScript hace el refactoring seguro: si renombras una función, detecta todos los lugares donde se llama con el nombre antiguo.',
      },
      {
        question: '¿Cuál de estos es un signo de que la migración vale la pena?',
        options: [
          'El proyecto tiene menos de 10 archivos',
          'Hay bugs frecuentes por errores de tipos como "undefined is not a function"',
          'El equipo nunca ha usado TypeScript antes',
          'El proyecto fue terminado hace 3 años y no hay cambios planeados',
        ],
        correctAnswer: 'Hay bugs frecuentes por errores de tipos como "undefined is not a function"',
        correctFeedback: '¡Correcto! Los bugs de tipos frecuentes son una señal clara de que TypeScript reduciría significativamente los problemas.',
        incorrectFeedback: 'Bugs frecuentes de tipos ("undefined is not a function") son una señal de que TypeScript tendría un impacto positivo claro.',
      },
    ],
  },
  {
    slug: 'migracion-gradual-typescript',
    title: 'Migración gradual',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 232,
    description:
      'Aprende cómo migrar poco a poco sin intentar convertir todo el proyecto de una sola vez.',
    explanation: `## Migración gradual

La migración gradual es la estrategia más segura para proyectos existentes. En lugar de convertir todo de una vez, migras un archivo o módulo a la vez.

### La estrategia básica

1. Configura TypeScript con compatibilidad para JavaScript
2. Identifica los módulos más críticos o con más bugs
3. Migra uno a uno, empezando por los más simples
4. Activa strict gradualmente cuando estés listo

### Configuración inicial para migración gradual

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "allowJs": true,           // Permite archivos .js
    "checkJs": false,          // No verifica .js (al inicio)
    "strict": false,           // Menos restrictivo al inicio
    "skipLibCheck": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
\`\`\`

### Orden recomendado de migración

\`\`\`
1. Tipos y utilidades (utils.js → utils.ts)
2. Funciones sin dependencias externas
3. Módulos de datos / modelos
4. Servicios de API
5. Componentes (si es React)
6. Punto de entrada (index.js → index.ts)
\`\`\`

### Ventajas de hacerlo gradual

- Puedes seguir entregando nuevas funcionalidades mientras migras
- Los errores de migración son pocos y fáciles de resolver
- El equipo aprende TypeScript a su ritmo
- Puedes medir si vale la pena antes de comprometerte al 100%

### Cuándo acelerar la migración

Cuando el equipo ya conoce TypeScript bien y los archivos .ts superan el 50%, puedes acelerar. En ese punto, el costo de los archivos .js mezclados supera el beneficio de ir lento.`,
    codeExample: `// Estrategia de migración gradual paso a paso

// ─── FASE 1: tsconfig.json para migración ────────────────────
// {
//   "compilerOptions": {
//     "allowJs": true,
//     "checkJs": false,
//     "strict": false
//   }
// }

// ─── FASE 2: utils.js → utils.ts (empezar por lo simple) ─────

// ANTES: utils.js
function formatearPrecio(precio) {
  return '$' + precio.toFixed(2)
}

function calcularDescuento(precio, porcentaje) {
  return precio * (1 - porcentaje / 100)
}

// DESPUÉS: utils.ts — mismo código, tipos añadidos
export function formatearPrecio(precio: number): string {
  return '$' + precio.toFixed(2)
}

export function calcularDescuento(precio: number, porcentaje: number): number {
  return precio * (1 - porcentaje / 100)
}

// ─── FASE 3: api.js → api.ts ──────────────────────────────────

// ANTES: api.js
async function fetchProductos() {
  const res = await fetch('/api/productos')
  return res.json()
}

// DESPUÉS: api.ts — con tipos definidos
interface Producto {
  id: number
  nombre: string
  precio: number
}

export async function fetchProductos(): Promise<Producto[]> {
  const res = await fetch('/api/productos')
  const datos = await res.json()
  return datos as Producto[]
}

// ─── FASE 4: Activar checkJs para verificar los .js restantes
// {
//   "compilerOptions": {
//     "allowJs": true,
//     "checkJs": true   // Ahora sí verifica los .js
//   }
// }

// ─── FASE 5: Activar strict cuando todos sean .ts
// {
//   "compilerOptions": {
//     "strict": true    // Máxima seguridad
//   }
// }`,
    keyPoints: [
      'La migración gradual es más segura que convertir todo de una vez',
      'allowJs y checkJs en tsconfig permiten mezclar archivos durante la migración',
      'Empieza por utilidades y tipos — los módulos sin dependencias son más fáciles',
      'Activa strict solo cuando hayas migrado la mayoría de archivos a TypeScript',
      'Mantén el proyecto funcionando en todo momento durante la migración',
    ],
    exercise: {
      description:
        'Tienes un proyecto JavaScript con estos archivos: constants.js (solo constantes), helpers.js (funciones puras), api.js (fetch) y app.js (punto de entrada). Escribe el orden de migración ideal y el tsconfig.json inicial. Luego migra constants.js y helpers.js a TypeScript (puedes inventar el contenido).',
      hint: 'El orden ideal es: constants.ts (sin dependencias), helpers.ts (funciones puras), api.ts (con tipos de respuesta), app.ts. tsconfig con allowJs:true y strict:false al inicio.',
    },
    quiz: [
      {
        question: '¿Cuál es la estrategia recomendada para migrar un proyecto grande?',
        options: [
          'Migrar todo de una vez en un sprint largo',
          'Crear un proyecto nuevo y copiar el código',
          'Migrar gradualmente, un módulo a la vez, empezando por los más simples',
          'Usar any en todo y quitar los errores después',
        ],
        correctAnswer: 'Migrar gradualmente, un módulo a la vez, empezando por los más simples',
        correctFeedback: '¡Correcto! La migración gradual es la estrategia más segura y que menos interrumpe el desarrollo.',
        incorrectFeedback: 'La migración gradual es la estrategia recomendada — convierte módulos uno a uno, manteniendo el proyecto funcional.',
      },
      {
        question: '¿Qué hace "checkJs: true" en tsconfig?',
        options: [
          'Convierte archivos .js a .ts automáticamente',
          'Verifica los tipos en archivos .js aunque no sean TypeScript',
          'Elimina los archivos .js del proyecto',
          'Hace que TypeScript ignore los archivos .js',
        ],
        correctAnswer: 'Verifica los tipos en archivos .js aunque no sean TypeScript',
        correctFeedback: '¡Correcto! checkJs aplica verificación de tipos a los archivos JavaScript, útil en la etapa final de migración.',
        incorrectFeedback: 'checkJs: true hace que TypeScript verifique tipos también en archivos .js — útil cuando ya sabes que están bien pero aún no son .ts.',
      },
      {
        question: '¿Por qué debes empezar por utils y tipos en lugar de por el punto de entrada (index.js)?',
        options: [
          'Por convención — no hay razón técnica',
          'Porque index.js normalmente depende de todos los demás módulos y tiene más errores en cadena',
          'Porque TypeScript solo puede migrar utils',
          'Porque el punto de entrada no necesita tipos',
        ],
        correctAnswer: 'Porque index.js normalmente depende de todos los demás módulos y tiene más errores en cadena',
        correctFeedback: '¡Correcto! El punto de entrada depende de todo. Migrar los módulos base primero hace que index.ts tenga menos errores.',
        incorrectFeedback: 'Empezar por el punto de entrada genera errores en cascada de todos sus módulos. Empieza por los módulos sin dependencias.',
      },
      {
        question: '¿Cuándo tiene sentido activar "strict: true" en lugar de mantenerlo en false?',
        options: [
          'Desde el primer momento de la migración',
          'Cuando la mayoría de archivos ya son .ts y el equipo conoce TypeScript bien',
          'Nunca — strict hace el código demasiado restrictivo',
          'Solo en proyectos nuevos',
        ],
        correctAnswer: 'Cuando la mayoría de archivos ya son .ts y el equipo conoce TypeScript bien',
        correctFeedback: '¡Correcto! Activar strict al inicio genera demasiados errores. Es mejor activarlo progresivamente al avanzar la migración.',
        incorrectFeedback: 'strict: true se activa al final de la migración. Al inicio, strict: false reduce la fricción y permite avanzar más rápido.',
      },
      {
        question: '¿Puedes seguir enviando funcionalidades nuevas mientras haces una migración gradual?',
        options: [
          'No, debes pausar el desarrollo hasta que termine la migración',
          'Sí, la migración gradual permite mantener el proyecto funcionando y seguir entregando',
          'Solo si la migración es menor al 50%',
          'Depende del tamaño del equipo',
        ],
        correctAnswer: 'Sí, la migración gradual permite mantener el proyecto funcionando y seguir entregando',
        correctFeedback: '¡Correcto! La migración gradual coexiste con el desarrollo normal — no hay que pausar el proyecto.',
        incorrectFeedback: 'La migración gradual es no disruptiva — puedes migrar módulos uno a uno mientras el proyecto sigue funcionando y el equipo entrega funcionalidades.',
      },
    ],
  },
  {
    slug: 'renombrar-js-a-ts',
    title: 'Renombrar .js a .ts',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 233,
    description:
      'Aprende qué ocurre cuando cambias archivos .js a .ts y qué errores pueden aparecer primero.',
    explanation: `## Renombrar .js a .ts

El primer paso físico de la migración es cambiar la extensión del archivo de \`.js\` a \`.ts\`. Este simple cambio puede revelar muchos problemas que antes estaban ocultos.

### El proceso básico

\`\`\`bash
# Renombrar manualmente
mv src/utils.js src/utils.ts

# O en Windows
rename src\\utils.js utils.ts
\`\`\`

### Qué pasa cuando renombras

TypeScript inmediatamente empieza a analizar el archivo. Los errores más comunes que aparecen:

**1. Parámetros sin tipo**

\`\`\`typescript
// Antes (en .js) — funcionaba sin errores
function suma(a, b) {  // a y b son implícitamente any
  return a + b
}

// Después (en .ts) — error si tienes noImplicitAny
// Parameter 'a' implicitly has an 'any' type
function suma(a, b) {  // Debes añadir tipos
  return a + b
}
\`\`\`

**2. Propiedades no definidas en objetos**

\`\`\`typescript
// En .js — funciona
const config = {}
config.debug = true  // Asignar propiedad en el aire

// En .ts — error
const config = {}
config.debug = true  // Error: Property 'debug' does not exist on type '{}'
\`\`\`

**3. Variables sin tipo inicial**

\`\`\`typescript
// En .js — funciona
let resultado
resultado = calcular()

// En .ts con strict — error
let resultado  // Error: implicitly has type 'any'
let resultado: number  // Solución
\`\`\`

### Estrategia para los primeros errores

Al renombrar un archivo complejo, pueden aparecer 50+ errores. No te alarmes. El enfoque correcto:

1. Lee los primeros 5-10 errores
2. Añade los tipos más obvios (parámetros de función)
3. Compila de nuevo — los errores disminuyen
4. Repite hasta que no queden errores

### Prioridad al añadir tipos

Añade primero los tipos de:
- Parámetros de funciones públicas
- Valores de retorno de funciones importantes
- Variables que se reasignan con diferentes valores`,
    codeExample: `// Proceso de renombrar .js a .ts — ejemplo paso a paso

// ─── ANTES: carrito.js ────────────────────────────────────────
// function agregarItem(carrito, item) {
//   carrito.items.push(item)
//   carrito.total += item.precio
//   return carrito
// }
//
// function calcularTotal(carrito) {
//   return carrito.items.reduce((acc, item) => acc + item.precio, 0)
// }

// ─── Paso 1: Renombrar a carrito.ts ───────────────────────────
// Los errores que TypeScript muestra inmediatamente:
// - Parameter 'carrito' implicitly has an 'any' type
// - Parameter 'item' implicitly has an 'any' type
// - Property 'items' does not exist on type '{}'

// ─── Paso 2: Añadir tipos mínimos ────────────────────────────

interface ItemCarrito {
  id: number
  nombre: string
  precio: number
  cantidad: number
}

interface Carrito {
  items: ItemCarrito[]
  total: number
}

// ─── Paso 3: Tipar las funciones ──────────────────────────────

function agregarItem(carrito: Carrito, item: ItemCarrito): Carrito {
  return {
    items: [...carrito.items, item],
    total: carrito.total + item.precio * item.cantidad,
  }
}

function calcularTotal(carrito: Carrito): number {
  return carrito.items.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  )
}

// ─── Paso 4: Verificar sin errores ───────────────────────────
const carritoVacio: Carrito = { items: [], total: 0 }

const nuevoItem: ItemCarrito = {
  id: 1,
  nombre: 'Curso TypeScript',
  precio: 200,
  cantidad: 1,
}

const carritoConItem = agregarItem(carritoVacio, nuevoItem)
const total = calcularTotal(carritoConItem)
console.log(total)  // 200`,
    keyPoints: [
      'Renombrar .js a .ts inmediatamente revela errores de tipos ocultos',
      'Los errores más comunes son: parámetros sin tipo, propiedades no declaradas, variables sin tipo',
      'No te alarmes si aparecen muchos errores — es normal y esperado en la primera pasada',
      'Añade primero los tipos de las funciones más públicas e importantes',
      'Compila después de cada grupo de correcciones para ver el progreso',
    ],
    exercise: {
      description:
        'Tenemos este archivo JavaScript: `function buscarProducto(lista, id) { return lista.find(p => p.id === id) || null }`. Renómbralo a TypeScript: crea la interfaz Producto (id, nombre, precio), tipa los parámetros y el retorno correctamente (puede retornar el producto o null).',
      hint: 'El retorno es Producto | null porque find puede devolver undefined, y || null lo convierte en null. Los parámetros son (lista: Producto[], id: number).',
    },
    quiz: [
      {
        question: '¿Qué error es más común al renombrar .js a .ts?',
        options: [
          '"Cannot find module"',
          '"Parameter implicitly has an any type"',
          '"SyntaxError: unexpected token"',
          '"Module not found"',
        ],
        correctAnswer: '"Parameter implicitly has an any type"',
        correctFeedback: '¡Correcto! En JavaScript los parámetros sin tipo son válidos pero TypeScript los rechaza con noImplicitAny.',
        incorrectFeedback: 'El error más común es que los parámetros de función no tienen tipo declarado y TypeScript no puede inferirlos.',
      },
      {
        question: '¿Qué pasa si en JavaScript tenías `const config = {}; config.debug = true`?',
        options: [
          'TypeScript lo acepta automáticamente',
          'TypeScript muestra error: Property "debug" does not exist on type "{}"',
          'TypeScript convierte {} a any automáticamente',
          'Solo falla con strict activado y no con el modo normal',
        ],
        correctAnswer: 'TypeScript muestra error: Property "debug" does not exist on type "{}"',
        correctFeedback: '¡Correcto! TypeScript infiere el tipo de {} como un objeto vacío sin propiedades. Añadir propiedades después es un error.',
        incorrectFeedback: 'TypeScript infiere el tipo de {} como objeto vacío. No puedes agregar propiedades después sin declararlas en una interfaz.',
      },
      {
        question: 'Al renombrar componentes React de .jsx a .tsx, ¿hay algo más que cambiar?',
        options: [
          'No, solo la extensión — todo lo demás es igual',
          'Solo la extensión — TypeScript acepta el mismo código JSX, y los errores de tipos aparecen gradualmente',
          'Debes reescribir todo el componente con clases',
          'Debes añadir "use client" al inicio',
        ],
        correctAnswer: 'Solo la extensión — TypeScript acepta el mismo código JSX, y los errores de tipos aparecen gradualmente',
        correctFeedback: '¡Correcto! El renombrado es el primer paso. Después añades tipos a los props y al estado según los errores que TypeScript muestre.',
        incorrectFeedback: 'Renombrar a .tsx es el primer paso. El código JSX funciona igual — TypeScript solo añade errores donde faltan tipos.',
      },
      {
        question: '¿Cómo solucionas "const config = {}; config.debug = true" en TypeScript?',
        options: [
          'Usando any: const config: any = {}',
          'Definiendo la interfaz antes: interface Config { debug?: boolean } const config: Config = {}',
          'Usando Object.assign',
          'No tiene solución en TypeScript',
        ],
        correctAnswer: 'Definiendo la interfaz antes: interface Config { debug?: boolean } const config: Config = {}',
        correctFeedback: '¡Correcto! Define la interfaz con las propiedades posibles antes de inicializar el objeto.',
        incorrectFeedback: 'Solución: define la interfaz con las propiedades (usando ?) antes de crear el objeto: interface Config { debug?: boolean }.',
      },
      {
        question: '¿Qué alternativa a any deberías usar cuando no sabes el tipo de un parámetro al inicio de la migración?',
        options: [
          'object',
          'unknown',
          'void',
          'never',
        ],
        correctAnswer: 'unknown',
        correctFeedback: '¡Correcto! unknown es más seguro que any — TypeScript te obliga a verificar el tipo antes de usarlo.',
        incorrectFeedback: 'unknown es la alternativa segura a any. Obliga a verificar el tipo antes de usar el valor, a diferencia de any que lo permite sin verificar.',
      },
    ],
  },
  {
    slug: 'errores-comunes-migracion-typescript',
    title: 'Resolver errores comunes de migración',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 234,
    description:
      'Aprende a resolver errores frecuentes relacionados con tipos implícitos, objetos incompletos, null y funciones sin tipos.',
    explanation: `## Resolver errores comunes de migración

Durante la migración, aparecen errores predecibles. Aprenderlos de antemano hace la migración mucho más rápida.

### Error 1: Parámetro con tipo implícito any

\`\`\`typescript
// Error: Parameter 'datos' implicitly has an 'any' type
function procesar(datos) { ... }

// Solución: añadir el tipo
function procesar(datos: DatosProcesados) { ... }

// Si aún no sabes el tipo, usa unknown temporalmente
function procesar(datos: unknown) { ... }
\`\`\`

### Error 2: Object literal puede tener solo propiedades conocidas

\`\`\`typescript
// Error: Object literal may only specify known properties
const usuario: Usuario = {
  nombre: 'Ana',
  email: 'ana@email.com',
  apellido: 'García',  // Error: 'apellido' no existe en Usuario
}

// Solución: añadir la propiedad a la interfaz o eliminarla
interface Usuario {
  nombre: string
  email: string
  apellido?: string  // Añadir si es necesaria
}
\`\`\`

### Error 3: Posiblemente null o undefined

\`\`\`typescript
// Error: Object is possibly 'null'
const elemento = document.getElementById('app')
elemento.innerHTML = '<h1>Hola</h1>'  // Error: elemento puede ser null

// Solución: verificar antes de usar
if (elemento) {
  elemento.innerHTML = '<h1>Hola</h1>'
}

// O usar optional chaining
elemento?.addEventListener('click', handleClick)
\`\`\`

### Error 4: No se puede reasignar a tipo diferente

\`\`\`typescript
// TypeScript infiere el tipo del valor inicial
let contador = 0   // TypeScript infiere: number
contador = 'cinco' // Error: Type 'string' is not assignable to type 'number'

// Solución: declarar el tipo correcto desde el inicio
let contador: number | string = 0
contador = 'cinco'  // Ahora es válido
\`\`\`

### Error 5: Propiedad no existe en el tipo

\`\`\`typescript
// Error: Property 'nombre' does not exist on type 'never'
const usuario = null
console.log(usuario.nombre)  // Error: acceder propiedad de null

// Solución: definir el tipo y verificar null
const usuario: Usuario | null = null
if (usuario) {
  console.log(usuario.nombre)  // ✅
}
\`\`\``,
    codeExample: `// Soluciones a errores comunes de migración

// ─── Error 1: Resolver parámetros implícitos ──────────────────

// ❌ Error: parámetros sin tipo
function calcular(a, b, operacion) {
  if (operacion === 'suma') return a + b
  if (operacion === 'resta') return a - b
  return 0
}

// ✅ Con tipos
type Operacion = 'suma' | 'resta'

function calcularTipado(a: number, b: number, operacion: Operacion): number {
  if (operacion === 'suma') return a + b
  if (operacion === 'resta') return a - b
  return 0
}

// ─── Error 2: Objeto con propiedades extra ────────────────────

interface Config {
  debug: boolean
  timeout: number
}

// ❌ Error: 'logging' no existe en Config
// const config: Config = { debug: true, timeout: 5000, logging: true }

// ✅ Solución: añadir a la interfaz si es necesaria
interface ConfigExtendida {
  debug: boolean
  timeout: number
  logging?: boolean  // Opcional
}

const config: ConfigExtendida = { debug: true, timeout: 5000, logging: true }

// ─── Error 3: Posible null ────────────────────────────────────

function obtenerPrimero<T>(lista: T[]): T | null {
  return lista.length > 0 ? lista[0] : null
}

const cursos = ['TypeScript', 'React', 'Next.js']
const primero = obtenerPrimero(cursos)

// ❌ Error: primero puede ser null
// console.log(primero.toUpperCase())

// ✅ Verificar antes de usar
if (primero !== null) {
  console.log(primero.toUpperCase())
}

// ✅ O usar optional chaining
console.log(primero?.toUpperCase())

// ─── Error 4: Función sin tipo de retorno ─────────────────────

// ❌ TypeScript infiere el retorno como string | number
function getId(tipo: string) {
  if (tipo === 'numero') return 42
  return 'id-123'
}

// ✅ Tipo de retorno explícito
function getIdTipado(tipo: string): string | number {
  if (tipo === 'numero') return 42
  return 'id-123'
}`,
    keyPoints: [
      'El error más frecuente es parámetros sin tipo — añade el tipo o usa unknown temporalmente',
      'Object literal may only specify known properties — tu objeto tiene una propiedad que no está en la interfaz',
      'Siempre verifica null antes de acceder a propiedades de valores que pueden ser null',
      'TypeScript infiere el tipo del valor inicial — reasignar con otro tipo requiere un union type',
      'Optional chaining (?.) es más conciso que verificar null manualmente para accesos',
    ],
    exercise: {
      description:
        'Corrige estos 3 errores de migración: 1) `function buscar(lista, termino) { return lista.filter(x => x.nombre.includes(termino)) }` 2) `const item: {id: number} = { id: 1, extra: true }` 3) `const btn = document.querySelector("button"); btn.click()`',
      hint: '1) Define una interfaz con nombre:string, 2) Añade extra?: boolean a la interfaz o quítala del objeto, 3) Usa btn?.click() o verifica if(btn).',
    },
    quiz: [
      {
        question: '¿Qué significa el error "Object literal may only specify known properties"?',
        options: [
          'El objeto tiene demasiadas propiedades',
          'Estás incluyendo una propiedad que no existe en el tipo declarado',
          'El objeto está vacío',
          'El tipo no acepta objetos literales',
        ],
        correctAnswer: 'Estás incluyendo una propiedad que no existe en el tipo declarado',
        correctFeedback: '¡Correcto! TypeScript verifica que las propiedades del objeto literal coincidan exactamente con las del tipo.',
        incorrectFeedback: 'Este error significa que el objeto tiene una propiedad extra que no está definida en la interfaz o tipo.',
      },
      {
        question: 'Para acceder a una propiedad de un valor que puede ser null, ¿cuál es la forma más concisa?',
        options: [
          'valor.propiedad',
          'if (valor !== null) { valor.propiedad }',
          'valor?.propiedad',
          'valor!.propiedad',
        ],
        correctAnswer: 'valor?.propiedad',
        correctFeedback: '¡Correcto! El optional chaining (?.) es la forma más concisa de acceder a propiedades de valores que pueden ser null.',
        incorrectFeedback: 'El optional chaining valor?.propiedad es la forma más concisa — retorna undefined si valor es null en lugar de lanzar error.',
      },
      {
        question: '¿Cómo solucionas el error "Parameter implicitly has an any type"?',
        options: [
          'Añadiendo // @ts-ignore encima de la función',
          'Añadiendo un tipo explícito al parámetro o usando unknown como temporal',
          'Desactivando noImplicitAny en tsconfig',
          'Usando any como tipo del parámetro',
        ],
        correctAnswer: 'Añadiendo un tipo explícito al parámetro o usando unknown como temporal',
        correctFeedback: '¡Correcto! La solución correcta es definir el tipo del parámetro. unknown es válido como temporal hasta que determines el tipo real.',
        incorrectFeedback: 'La solución es añadir un tipo al parámetro. Si no sabes el tipo aún, usa unknown como temporal — es más seguro que any.',
      },
      {
        question: '¿Qué hace el operador ?. (optional chaining) en usuario?.nombre?',
        options: [
          'Lanza un error si usuario es null',
          'Retorna undefined si usuario es null o undefined, sin lanzar error',
          'Convierte null a una string vacía',
          'Solo funciona si usuario es un objeto definido',
        ],
        correctAnswer: 'Retorna undefined si usuario es null o undefined, sin lanzar error',
        correctFeedback: '¡Correcto! ?. accede a la propiedad si el valor existe, o retorna undefined si es null/undefined.',
        incorrectFeedback: 'usuario?.nombre retorna undefined si usuario es null/undefined, en lugar de lanzar "Cannot read properties of null".',
      },
      {
        question: '¿Cuándo es preferible usar el operador ! (non-null assertion) sobre ??',
        options: [
          'Siempre — es más corto',
          'Cuando estás absolutamente seguro de que el valor no es null/undefined en ese contexto específico',
          'Nunca — es equivalente a any',
          'Solo en archivos .d.ts',
        ],
        correctAnswer: 'Cuando estás absolutamente seguro de que el valor no es null/undefined en ese contexto específico',
        correctFeedback: '¡Correcto! ! le dice a TypeScript que confíes en ti — úsalo solo cuando realmente tengas certeza y no puedas verificar de otra forma.',
        incorrectFeedback: 'usuario! le dice a TypeScript "confía en mí, no es null". Úsalo con cuidado — si estás equivocado, el error llega en runtime.',
      },
    ],
  },
  {
    slug: 'evitar-abusar-any-migracion',
    title: 'Evitar abusar de any',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 235,
    description:
      'Aprende por qué usar any en todas partes puede arruinar los beneficios de la migración.',
    explanation: `## Evitar abusar de any durante la migración

El mayor error que se comete al migrar es usar \`any\` para silenciar todos los errores de TypeScript. El resultado es un archivo \`.ts\` que se comporta igual que el \`.js\` original: sin seguridad.

### Por qué any es tentador durante la migración

\`\`\`typescript
// Cuando aparecen muchos errores, la tentación es:
function procesarDatos(datos: any): any {
  return datos.map((d: any) => d.valor * 2)
}
// ✅ Compila sin errores
// ❌ Pero TypeScript no verifica nada — no hay beneficio
\`\`\`

### El problema de any en cadena

\`\`\`typescript
// Si el primer valor es any, todo lo que deriva de él también es any
const datos: any = obtenerDatos()
const primer = datos[0]        // any
const valor = primer.precio    // any
const resultado = valor * 2    // any — TypeScript no puede verificar esto
\`\`\`

### Las alternativas a any

**unknown** — cuando no sabes el tipo pero quieres seguridad:

\`\`\`typescript
// unknown obliga a verificar el tipo antes de usar
function procesar(datos: unknown): number {
  if (typeof datos !== 'number') {
    throw new Error('Se esperaba un número')
  }
  return datos * 2  // TypeScript sabe que es number aquí
}
\`\`\`

**Tipos temporales** — cuando estás en proceso de migración:

\`\`\`typescript
// Definir un tipo temporal que puedes mejorar después
type DatosTemporales = {
  id: number
  [key: string]: unknown  // Acepta propiedades extra provisionalmente
}
\`\`\`

**Type assertions como último recurso**:

\`\`\`typescript
// Si sabes el tipo pero TypeScript no puede inferirlo
const datos = await fetch('/api').then(r => r.json()) as Producto[]
// Úsalo solo cuando estés razonablemente seguro del tipo
\`\`\`

### El indicador de deuda técnica

Si ves muchos \`any\` en tu código TypeScript, es señal de que aún tienes trabajo de migración pendiente. Puedes usar ESLint para detectarlos:

\`\`\`json
// .eslintrc
{
  "@typescript-eslint/no-explicit-any": "warn"
}
\`\`\``,
    codeExample: `// Cómo evitar any durante la migración

// ─── ❌ Migración con any — no hay beneficio ──────────────────
function filtrarActivos(usuarios: any[]): any[] {
  return usuarios.filter((u: any) => u.activo === true)
}

const activos = filtrarActivos([{ nombre: 'Ana', activo: true }])
activos[0].nmbre  // TypeScript no detecta el typo — activos[0] es any

// ─── ✅ Migración con tipos reales ────────────────────────────
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

function filtrarActivosTipado(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter((u) => u.activo === true)
}

const activosTipados = filtrarActivosTipado([
  { id: 1, nombre: 'Ana', email: 'ana@email.com', activo: true }
])
activosTipados[0].nmbre  // ✅ Error: 'nmbre' no existe en Usuario

// ─── Si no sabes el tipo: unknown ────────────────────────────
function parsearConfig(texto: unknown): { debug: boolean } {
  if (typeof texto !== 'string') {
    throw new Error('Se esperaba un string')
  }
  const parsed = JSON.parse(texto)
  // Validación mínima
  if (typeof parsed.debug !== 'boolean') {
    throw new Error('La configuración no tiene el formato esperado')
  }
  return parsed as { debug: boolean }
}

// ─── Tipo provisional para migración gradual ─────────────────
// Útil cuando tienes muchos campos aún por definir
type UsuarioProvisional = {
  id: number
  nombre: string
  // Acepta campos adicionales mientras terminas la migración
  [key: string]: unknown
}

function obtenerNombreUsuario(usuario: UsuarioProvisional): string {
  return usuario.nombre  // Acceso seguro — nombre está tipado
}`,
    keyPoints: [
      'any desactiva toda la verificación de TypeScript — su uso excesivo anula los beneficios',
      'unknown es más seguro que any porque obliga a verificar el tipo antes de usar',
      'Los type assertions (as Tipo) son aceptables cuando conoces el tipo pero TypeScript no puede inferirlo',
      'Los índices dinámicos ([key: string]: unknown) son útiles para objetos con propiedades aún indefinidas',
      'ESLint con @typescript-eslint/no-explicit-any ayuda a detectar uso excesivo de any',
    ],
    exercise: {
      description:
        'Reescribe esta función sin usar any: `function procesarRespuesta(respuesta: any): any { if (!respuesta.ok) throw new Error(respuesta.error || "Error"); return respuesta.datos.map((d: any) => d.valor * 2) }`. Crea las interfaces necesarias para tiparla correctamente.',
      hint: 'Crea una interfaz RespuestaApi con ok:boolean, error?:string, datos?: Array<{valor: number}>. La función retorna number[].',
    },
    quiz: [
      {
        question: '¿Por qué usar any en toda la migración es problemático?',
        options: [
          'Porque any hace el código más lento',
          'Porque any desactiva la verificación de TypeScript — el archivo .ts se comporta igual que el .js original',
          'Porque any no existe en TypeScript',
          'Solo es problema en producción',
        ],
        correctAnswer: 'Porque any desactiva la verificación de TypeScript — el archivo .ts se comporta igual que el .js original',
        correctFeedback: '¡Correcto! Si todo es any, TypeScript no puede detectar ningún error — pierdes todos los beneficios de la migración.',
        incorrectFeedback: 'Con any en todas partes, TypeScript no verifica nada. El archivo .ts es igual que el .js original — sin beneficio real.',
      },
      {
        question: '¿Cuándo es apropiado usar type assertion (as Tipo)?',
        options: [
          'Siempre que haya un error de tipo',
          'Cuando conoces razonablemente el tipo pero TypeScript no puede inferirlo, como datos de fetch',
          'Nunca — es equivalente a any',
          'Solo en archivos .d.ts',
        ],
        correctAnswer: 'Cuando conoces razonablemente el tipo pero TypeScript no puede inferirlo, como datos de fetch',
        correctFeedback: '¡Correcto! El type assertion es apropiado cuando tú sabes el tipo pero TypeScript no tiene suficiente información.',
        incorrectFeedback: 'El type assertion es válido cuando tienes certeza del tipo — como datos de una API que conoces. Úsalo con cuidado.',
      },
      {
        question: '¿Qué ocurre cuando any "contamina" el código en cadena?',
        options: [
          'Solo afecta a la variable directa, no a las derivadas',
          'Todo lo que se derive de un valor any también se convierte en any, propagando la falta de verificación',
          'TypeScript muestra una advertencia pero sigue verificando',
          'Solo afecta al archivo donde está definido',
        ],
        correctAnswer: 'Todo lo que se derive de un valor any también se convierte en any, propagando la falta de verificación',
        correctFeedback: '¡Correcto! Si datos es any, entonces datos[0] es any, datos[0].precio es any — la verificación desaparece en cascada.',
        incorrectFeedback: 'any se propaga: si datos: any, entonces datos[0] es any, y datos[0].precio es any. Un any puede contaminar todo un módulo.',
      },
      {
        question: '¿Cuál es la diferencia entre "as Tipo" y "any" al manejar datos externos?',
        options: [
          'Son equivalentes — ambos desactivan la verificación de tipos',
          '"as Tipo" hace una aserción puntual manteniendo el tipo en contexto; any lo desactiva globalmente para esa variable',
          '"as Tipo" es más lento en ejecución',
          '"as Tipo" no existe en TypeScript moderno',
        ],
        correctAnswer: '"as Tipo" hace una aserción puntual manteniendo el tipo en contexto; any lo desactiva globalmente para esa variable',
        correctFeedback: '¡Correcto! "as Tipo" es una aserción localizada. Después del cast, TypeScript sabe el tipo y verifica su uso. Con any, no verifica nada.',
        incorrectFeedback: '"as Tipo" es localizado — después del cast TypeScript conoce y verifica el tipo. any desactiva toda verificación para esa variable.',
      },
      {
        question: '¿Qué alternativa a any es más apropiada para una función que procesa datos de formato desconocido?',
        options: [
          'any — es la única opción para datos desconocidos',
          'unknown — obliga a verificar el tipo antes de usar el valor',
          'void — para funciones sin retorno',
          'object — acepta cualquier objeto',
        ],
        correctAnswer: 'unknown — obliga a verificar el tipo antes de usar el valor',
        correctFeedback: '¡Correcto! unknown es la versión segura: te obliga a verificar con typeof o instanceof antes de usar el valor.',
        incorrectFeedback: 'unknown es más seguro que any para datos desconocidos. Te obliga a verificar el tipo antes de usarlo, manteniendo la seguridad.',
      },
    ],
  },
  {
    slug: 'crear-tipos-poco-a-poco',
    title: 'Crear tipos poco a poco',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 236,
    description:
      'Aprende a crear tipos gradualmente para datos importantes como usuarios, productos, formularios y respuestas de API.',
    explanation: `## Crear tipos poco a poco

No tienes que definir todos los tipos perfectamente desde el principio. La clave es empezar con los datos más importantes y refinar con el tiempo.

### ¿Por dónde empezar?

Prioriza los tipos de:

1. **Entidades principales**: Usuario, Producto, Pedido, Curso
2. **Respuestas de API**: lo que viene del servidor
3. **Estados de formularios**: datos que el usuario ingresa
4. **Configuración**: opciones y settings

### Empezar simple, mejorar con el tiempo

\`\`\`typescript
// Fase 1: Tipo mínimo — suficiente para empezar
interface Usuario {
  id: number
  nombre: string
}

// Fase 2: Añadir más campos según los necesites
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

// Fase 3: Afinar con tipos más específicos
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
  rol: 'admin' | 'estudiante' | 'instructor'
  creadoEn: Date
}
\`\`\`

### Tipos de respuesta de API

\`\`\`typescript
// Respuesta genérica
interface RespuestaApi<T> {
  datos: T
  exitoso: boolean
  mensaje?: string
}

// Uso específico
type RespuestaUsuarios = RespuestaApi<Usuario[]>
type RespuestaCurso = RespuestaApi<Curso>
\`\`\`

### Tipos de formulario

\`\`\`typescript
// Los tipos de formulario pueden diferir del tipo de la entidad
interface FormularioRegistro {
  nombre: string
  email: string
  password: string
  confirmarPassword: string  // Solo en el formulario, no en Usuario
}

// Después de procesar el formulario
type DatosNuevoUsuario = Omit<FormularioRegistro, 'confirmarPassword'>
\`\`\``,
    codeExample: `// Crear tipos gradualmente — ejemplo de e-commerce

// ─── types/producto.ts ────────────────────────────────────────

// Fase 1: Tipo mínimo — lo que necesitas ahora
export interface Producto {
  id: number
  nombre: string
  precio: number
}

// Fase 2: Añadir más campos (cuando los necesites)
export interface ProductoCompleto extends Producto {
  descripcion: string
  imagen: string
  disponible: boolean
  stock: number
  categoria: string
}

// ─── types/api.ts ─────────────────────────────────────────────

// Respuesta genérica reutilizable
export interface RespuestaApi<T> {
  datos: T | null
  exitoso: boolean
  mensaje?: string
  error?: string
}

// Tipos específicos para cada endpoint
export type RespuestaProductos = RespuestaApi<Producto[]>
export type RespuestaProducto = RespuestaApi<ProductoCompleto>

// ─── types/formularios.ts ─────────────────────────────────────

// Estado de formulario con validación
export interface FormularioProducto {
  nombre: string
  precio: string           // String porque viene del input
  descripcion: string
  categoria: string
}

export interface ErroresFormularioProducto {
  nombre?: string
  precio?: string
  descripcion?: string
}

// Convertir formulario a tipo del dominio
export function convertirFormularioAProducto(
  form: FormularioProducto
): Omit<ProductoCompleto, 'id'> {
  return {
    nombre: form.nombre.trim(),
    precio: parseFloat(form.precio),
    descripcion: form.descripcion.trim(),
    imagen: '',
    disponible: true,
    stock: 0,
    categoria: form.categoria,
  }
}

// ─── Uso en un componente ─────────────────────────────────────
import type { Producto, RespuestaProductos } from '../types/producto'
import type { FormularioProducto } from '../types/formularios'

async function fetchProductos(): Promise<RespuestaProductos> {
  const res = await fetch('/api/productos')
  return res.json() as Promise<RespuestaProductos>
}`,
    keyPoints: [
      'Empieza con tipos mínimos y añade campos según los necesites — no sobredisenies desde el inicio',
      'Las entidades principales (Usuario, Producto) son la primera prioridad',
      'Los tipos de formulario pueden diferir del tipo de la entidad — los inputs son strings',
      'Un tipo genérico RespuestaApi<T> es reutilizable para todos los endpoints',
      'Omit<Tipo, "campo"> es útil para crear tipos derivados sin una propiedad específica',
    ],
    exercise: {
      description:
        'Para un sistema de cursos, crea tipos gradualmente: 1) Tipo mínimo Curso con id, titulo, precio. 2) CursoCompleto que extiende Curso añadiendo descripcion, nivel, lecciones, publicado. 3) FormularioCurso con los mismos campos pero precio como string. 4) Una función que convierte FormularioCurso a Omit<CursoCompleto, "id">.',
      hint: 'CursoCompleto extends Curso. FormularioCurso tiene precio:string. La función de conversión hace parseFloat para el precio.',
    },
    quiz: [
      {
        question: '¿Por qué los tipos de formulario frecuentemente tienen precio: string en lugar de precio: number?',
        options: [
          'Por convención de React',
          'Porque los inputs HTML siempre devuelven strings — el número se convierte al procesar el formulario',
          'Porque TypeScript no admite number en formularios',
          'Por compatibilidad con JSON',
        ],
        correctAnswer: 'Porque los inputs HTML siempre devuelven strings — el número se convierte al procesar el formulario',
        correctFeedback: '¡Correcto! El value de un input HTML siempre es string. Se convierte a number al procesar el formulario antes de guardarlo.',
        incorrectFeedback: 'Los inputs HTML devuelven siempre string. Por eso el tipo del formulario tiene precio:string y se convierte con parseFloat al guardar.',
      },
      {
        question: '¿Cuál es la entidad principal más importante para tipar primero en un proyecto?',
        options: [
          'Los componentes de UI',
          'Las entidades de dominio principales: Usuario, Producto, Pedido, etc.',
          'Las funciones de formato',
          'Los archivos de configuración',
        ],
        correctAnswer: 'Las entidades de dominio principales: Usuario, Producto, Pedido, etc.',
        correctFeedback: '¡Correcto! Las entidades principales son usadas en toda la aplicación — tiparlas bien primero tiene el mayor impacto.',
        incorrectFeedback: 'Los tipos de las entidades de dominio (Usuario, Producto) son fundamentales — todo el resto del código los usa y se beneficia de que estén bien tipados.',
      },
      {
        question: '¿Cuándo debes actualizar una interfaz en TypeScript para añadir más campos?',
        options: [
          'Nunca — una vez definida no se puede cambiar',
          'Cuando el código necesita nuevos campos — TypeScript marcará error en todos los lugares afectados',
          'Solo al inicio del proyecto',
          'Solo si los tests lo requieren',
        ],
        correctAnswer: 'Cuando el código necesita nuevos campos — TypeScript marcará error en todos los lugares afectados',
        correctFeedback: '¡Correcto! Añadir campos a una interfaz hace que TypeScript señale todos los lugares que necesitan actualizar su código.',
        incorrectFeedback: 'Puedes actualizar interfaces cuando lo necesites. TypeScript detectará automáticamente todos los lugares que necesitan ser actualizados.',
      },
      {
        question: '¿Por qué es buena práctica empezar con una interfaz mínima y expandirla después?',
        options: [
          'Porque TypeScript no acepta interfaces grandes',
          'Para no bloquear el avance con la perfección — un tipo mínimo correcto es mejor que ningún tipo',
          'Porque las interfaces grandes son más lentas',
          'Solo si el proyecto tiene menos de 100 archivos',
        ],
        correctAnswer: 'Para no bloquear el avance con la perfección — un tipo mínimo correcto es mejor que ningún tipo',
        correctFeedback: '¡Correcto! Empezar con los campos más importantes y añadir más según los necesites es más práctico que intentar definir todo perfectamente al inicio.',
        incorrectFeedback: 'Un tipo mínimo pero correcto es mejor que ningún tipo. Añade más campos a medida que el código los necesite.',
      },
      {
        question: '¿Cómo tipas un estado de formulario para un campo de precio que viene de un input HTML?',
        options: [
          'precio: number',
          'precio: string (se convierte a number al guardar)',
          'precio: string | number',
          'precio: any',
        ],
        correctAnswer: 'precio: string (se convierte a number al guardar)',
        correctFeedback: '¡Correcto! Los inputs HTML siempre devuelven string, así que el estado del formulario debe ser string y convertir a number al procesar.',
        incorrectFeedback: 'Los inputs HTML devuelven siempre string. El estado del formulario es precio: string, y al guardar conviertes con parseFloat o Number().',
      },
    ],
  },
  {
    slug: 'migrar-funciones-primero',
    title: 'Migrar funciones primero',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 237,
    description:
      'Aprende a empezar por funciones pequeñas para obtener beneficios rápidos y reducir errores.',
    explanation: `## Migrar funciones primero

Las funciones pequeñas y puras son el mejor lugar para empezar la migración. Son fáciles de tipar y los beneficios son inmediatos.

### ¿Por qué las funciones pequeñas primero?

- Tienen pocas dependencias — menos errores en cadena
- Los tipos de entrada y salida son claros
- Son fáciles de probar con Vitest después de migrar
- Dan confianza al equipo con TypeScript

### Pasos para migrar una función

\`\`\`typescript
// 1. Identificar la función a migrar
// Busca funciones puras, sin efectos secundarios

// 2. Entender qué recibe y qué devuelve observando el código y los usos
// calcularDescuento(precio, porcentaje) → precio con descuento aplicado

// 3. Definir las interfaces si son necesarias

// 4. Añadir los tipos a los parámetros y retorno

// 5. Verificar que compila sin errores

// 6. Añadir tests si no existen
\`\`\`

### Ejemplo de migración de funciones utils

\`\`\`typescript
// ANTES: utils.js
function truncarTexto(texto, max) {
  if (texto.length <= max) return texto
  return texto.slice(0, max) + '...'
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}

function esEmailValido(email) {
  return email.includes('@') && email.includes('.')
}

// DESPUÉS: utils.ts
export function truncarTexto(texto: string, max: number): string {
  if (texto.length <= max) return texto
  return texto.slice(0, max) + '...'
}

export function capitalizar(texto: string): string {
  if (!texto) return ''
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}

export function esEmailValido(email: string): boolean {
  return email.includes('@') && email.includes('.')
}
\`\`\`

### Las funciones migradas como base

Una vez que tienes funciones bien tipadas, los módulos que las usan también son más fáciles de migrar porque conocen los tipos de retorno de las dependencias.`,
    codeExample: `// Migración de módulo de utilidades — completo

// ─── ANTES: precio-utils.js ───────────────────────────────────
// function formatear(precio) {
//   return '$' + precio.toFixed(2)
// }
//
// function aplicarDescuento(precio, descuento) {
//   return precio * (1 - descuento / 100)
// }
//
// function calcularIVA(precio, tasa) {
//   return precio * (1 + tasa / 100)
// }
//
// function calcularTotal(items) {
//   return items.reduce((a, b) => a + b.precio * b.cantidad, 0)
// }

// ─── DESPUÉS: precio-utils.ts ─────────────────────────────────

// Primero: definir los tipos necesarios
interface ItemCompra {
  nombre: string
  precio: number
  cantidad: number
}

// Luego: migrar cada función con tipos

export function formatearPrecio(precio: number): string {
  return '$' + precio.toFixed(2)
}

export function aplicarDescuento(precio: number, descuentoPct: number): number {
  if (descuentoPct < 0 || descuentoPct > 100) return precio
  return precio * (1 - descuentoPct / 100)
}

export function calcularIVA(precio: number, tasaPct: number): number {
  return precio * (1 + tasaPct / 100)
}

export function calcularTotal(items: ItemCompra[]): number {
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
}

// Bonus: tipo de retorno complejo
export interface ResumenCompra {
  subtotal: number
  descuento: number
  iva: number
  total: number
}

export function calcularResumen(
  items: ItemCompra[],
  descuentoPct: number,
  ivaPct: number
): ResumenCompra {
  const subtotal = calcularTotal(items)
  const descuento = subtotal - aplicarDescuento(subtotal, descuentoPct)
  const base = subtotal - descuento
  const iva = calcularIVA(base, ivaPct) - base
  const total = base + iva

  return { subtotal, descuento, iva, total }
}`,
    keyPoints: [
      'Las funciones puras son el mejor punto de partida — pocas dependencias, fáciles de tipar',
      'Migra las funciones de utilidades primero — otros módulos dependen de ellas',
      'Externaliza la lógica compleja en funciones pequeñas antes de migrar',
      'Las funciones migradas dan una base sólida para migrar los módulos que las usan',
      'Añade tests después de migrar una función — es el momento ideal para hacerlo',
    ],
    exercise: {
      description:
        'Migra este archivo JavaScript completo a TypeScript: `function validarTexto(texto) { if (!texto) return false; return texto.trim().length > 0 }` y `function validarRango(valor, min, max) { return valor >= min && valor <= max }` y `function validarEmail(email) { return email.includes("@") && email.split("@")[1].includes(".") }`. Define los tipos correctos para cada función.',
      hint: 'validarTexto recibe string y retorna boolean. validarRango recibe 3 numbers y retorna boolean. validarEmail recibe string y retorna boolean.',
    },
    quiz: [
      {
        question: '¿Por qué las funciones de utilidades (utils) son las mejores para migrar primero?',
        options: [
          'Porque son las más fáciles de escribir',
          'Porque tienen pocas dependencias, son independientes y muchos módulos dependen de ellas',
          'Porque TypeScript las detecta automáticamente',
          'Porque no necesitan interfaces',
        ],
        correctAnswer: 'Porque tienen pocas dependencias, son independientes y muchos módulos dependen de ellas',
        correctFeedback: '¡Correcto! Las utils son independientes (fáciles de migrar) y otros módulos las usan (al migrarlas, ayudas a muchos módulos).',
        incorrectFeedback: 'Las funciones de utilidades tienen pocas dependencias (fácil migración) y cuando las tipas, los módulos que las usan también se benefician.',
      },
      {
        question: '¿Qué debes hacer antes de añadir tipos a una función durante la migración?',
        options: [
          'Reescribirla completamente',
          'Entender qué recibe y qué devuelve observando el código y cómo se usa',
          'Añadir any a todos los parámetros primero',
          'Crear tests primero sin excepción',
        ],
        correctAnswer: 'Entender qué recibe y qué devuelve observando el código y cómo se usa',
        correctFeedback: '¡Correcto! Antes de tipar, entiende el propósito de la función: qué datos recibe y qué forma tiene su resultado.',
        incorrectFeedback: 'El primer paso es entender la función: observa cómo se llama en el código para determinar qué tipos tienen sus parámetros y retorno.',
      },
      {
        question: '¿Por qué es una buena oportunidad añadir tests al migrar funciones a TypeScript?',
        options: [
          'Porque TypeScript lo requiere',
          'Porque al tipar la función tienes claridad exacta de qué entra y sale — ideal para escribir casos de prueba',
          'Solo para funciones de más de 10 líneas',
          'Los tests no tienen relación con la migración',
        ],
        correctAnswer: 'Porque al tipar la función tienes claridad exacta de qué entra y sale — ideal para escribir casos de prueba',
        correctFeedback: '¡Correcto! Al tipar la función, defines claramente sus entradas y salidas, lo que hace evidente qué casos de prueba escribir.',
        incorrectFeedback: 'Tipar una función la hace perfecta para agregar tests: sabes exactamente qué entra, qué sale y qué casos borde probar.',
      },
      {
        question: '¿Qué significa que una función tenga "pocas dependencias" en el contexto de la migración?',
        options: [
          'Que solo tiene un parámetro',
          'Que no importa muchos módulos externos que también necesitarían migrarse primero',
          'Que es una función de una sola línea',
          'Que no tiene efectos secundarios',
        ],
        correctAnswer: 'Que no importa muchos módulos externos que también necesitarían migrarse primero',
        correctFeedback: '¡Correcto! Una función con pocas dependencias puede migrarse sin necesitar que otros módulos estén tipados primero.',
        incorrectFeedback: 'Pocas dependencias significa que la función no necesita que otros módulos estén migrados primero. Puede migrarse de forma independiente.',
      },
      {
        question: '¿Cuál de estos archivos deberías migrar primero en un proyecto típico?',
        options: [
          'app.js — el punto de entrada principal',
          'constants.js — constantes sin dependencias',
          'server.js — el servidor principal',
          'routes.js — las rutas de la API',
        ],
        correctAnswer: 'constants.js — constantes sin dependencias',
        correctFeedback: '¡Correcto! constants.js normalmente no depende de nada — es el candidato más seguro y fácil para empezar la migración.',
        incorrectFeedback: 'constants.js no importa de otros módulos del proyecto — la migración más fácil y segura. app.js depende de todo lo demás.',
      },
    ],
  },
  {
    slug: 'migrar-componentes-modulos-grandes',
    title: 'Migrar componentes o módulos grandes',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 238,
    description:
      'Aprende estrategias para migrar partes grandes del proyecto sin romper todo el sistema.',
    explanation: `## Migrar componentes o módulos grandes

Los módulos grandes son más complejos de migrar porque tienen más dependencias, más funciones y más superficies de error.

### Estrategia: divide y vencerás

\`\`\`
Módulo grande (.js)
├── Extraer funciones puras → migrar primero a utils.ts
├── Extraer tipos → crear interfaces.ts
├── Migrar el módulo principal → con las dependencias ya tipadas
└── Actualizar importaciones en módulos dependientes
\`\`\`

### Antes de migrar: entender el módulo

\`\`\`typescript
// Antes de migrar, identifica:
// 1. ¿Qué exporta el módulo? (funciones, clases, constantes)
// 2. ¿Qué importa del exterior? (dependencias)
// 3. ¿Qué tipos de datos maneja?
// 4. ¿Hay funciones que se pueden extraer?
\`\`\`

### Migrar componentes React grandes

\`\`\`tsx
// Pasos para migrar un componente React grande:
// 1. Renombrar .jsx a .tsx
// 2. Definir la interfaz de props
// 3. Tipar el estado (useState)
// 4. Tipar los handlers de eventos
// 5. Verificar que no hay errores de TypeScript
\`\`\`

### Usar type assertion como puente temporal

\`\`\`typescript
// Si un módulo externo aún es .js y TypeScript no conoce sus tipos:
const datosExternos = moduloJs.obtenerDatos() as DatosEsperados
// Úsalo hasta que el módulo externo también se migre
\`\`\`

### Mantener los tests pasando durante la migración

La clave de migrar módulos grandes sin romper el sistema es:
1. Tener tests antes de migrar
2. Migrar
3. Verificar que los tests siguen pasando
4. Corregir si algo falla

Si no tienes tests, añade los más importantes antes de migrar.`,
    codeExample: `// Estrategia para migrar un módulo grande

// ─── PASO 1: Extraer tipos ─────────────────────────────────────
// types/gestion-cursos.ts

export interface Curso {
  id: number
  slug: string
  titulo: string
  descripcion: string
  lecciones: Leccion[]
  publicado: boolean
}

export interface Leccion {
  id: number
  slug: string
  titulo: string
  contenido: string
  modulo: number
  orden: number
}

export interface ProgresoEstudiante {
  cursoId: number
  leccionesCompletadas: string[]
  ultimaLeccion: string | null
}

// ─── PASO 2: Migrar funciones pequeñas ───────────────────────
// lib/curso-helpers.ts

import type { Curso, Leccion, ProgresoEstudiante } from '../types/gestion-cursos'

export function calcularPorcentajeProgreso(
  curso: Curso,
  progreso: ProgresoEstudiante
): number {
  if (curso.lecciones.length === 0) return 0
  const completadas = progreso.leccionesCompletadas.length
  return Math.round((completadas / curso.lecciones.length) * 100)
}

export function obtenerSiguienteLeccion(
  curso: Curso,
  progreso: ProgresoEstudiante
): Leccion | null {
  const pendientes = curso.lecciones.filter(
    (l) => !progreso.leccionesCompletadas.includes(l.slug)
  )
  return pendientes.length > 0 ? pendientes[0] : null
}

// ─── PASO 3: Migrar el módulo principal ──────────────────────
// services/curso-service.ts

import type { Curso, ProgresoEstudiante } from '../types/gestion-cursos'
import { calcularPorcentajeProgreso, obtenerSiguienteLeccion } from '../lib/curso-helpers'

export class CursoService {
  private cursos: Map<string, Curso> = new Map()

  registrarCurso(curso: Curso): void {
    this.cursos.set(curso.slug, curso)
  }

  obtenerCurso(slug: string): Curso | undefined {
    return this.cursos.get(slug)
  }

  obtenerResumenProgreso(slug: string, progreso: ProgresoEstudiante) {
    const curso = this.obtenerCurso(slug)
    if (!curso) return null

    return {
      titulo: curso.titulo,
      porcentaje: calcularPorcentajeProgreso(curso, progreso),
      siguiente: obtenerSiguienteLeccion(curso, progreso),
      completado: calcularPorcentajeProgreso(curso, progreso) === 100,
    }
  }
}`,
    keyPoints: [
      'Divide el módulo grande: extrae tipos, extrae funciones pequeñas, migra el núcleo',
      'Tener tests antes de migrar es la red de seguridad más importante',
      'Type assertions son un puente temporal aceptable durante la migración gradual',
      'Mantén el proyecto compilando y los tests pasando en todo momento',
      'El orden importa: tipos primero, luego dependencias, luego el módulo principal',
    ],
    exercise: {
      description:
        'Tienes un módulo JavaScript de gestión de usuarios que exporta: crearUsuario(datos), actualizarUsuario(id, datos), desactivarUsuario(id), y buscarUsuarios(filtros). Describe la estrategia de migración paso a paso: qué tipos defines primero, qué funciones migras antes, cómo manejas las dependencias.',
      hint: 'Paso 1: interfaz Usuario y DatosBusqueda. Paso 2: funciones de utilidad (validarEmail, formatearNombre). Paso 3: funciones del módulo con los tipos definidos.',
    },
    quiz: [
      {
        question: '¿Cuál es el primer paso al migrar un módulo grande?',
        options: [
          'Renombrar el archivo directamente y corregir todos los errores',
          'Extraer los tipos y las funciones pequeñas en archivos separados',
          'Reescribir el módulo desde cero',
          'Añadir any a todos los parámetros',
        ],
        correctAnswer: 'Extraer los tipos y las funciones pequeñas en archivos separados',
        correctFeedback: '¡Correcto! Extraer tipos y funciones pequeñas primero hace que la migración del módulo principal sea mucho más fácil.',
        incorrectFeedback: 'El primer paso es extraer y migrar las partes independientes (tipos, funciones pequeñas). Después migras el módulo principal con menos dependencias pendientes.',
      },
      {
        question: '¿Por qué es útil el type assertion "as Tipo" como puente temporal al migrar módulos grandes?',
        options: [
          'Para evitar escribir interfaces',
          'Para permitir que el módulo compile mientras otras partes del sistema aún no están tipadas',
          'Porque TypeScript lo requiere para módulos grandes',
          'Para que el código sea más rápido',
        ],
        correctAnswer: 'Para permitir que el módulo compile mientras otras partes del sistema aún no están tipadas',
        correctFeedback: '¡Correcto! Un "as Tipo" temporal permite avanzar la migración incluso cuando hay dependencias sin tipar todavía.',
        incorrectFeedback: '"as Tipo" como puente temporal permite que el módulo compile mientras otras dependencias aún no están completamente tipadas.',
      },
      {
        question: '¿Qué pasos son necesarios para migrar un componente React de .jsx a .tsx?',
        options: [
          'Solo renombrar el archivo',
          'Renombrar a .tsx, definir la interfaz de props, tipar useState y los handlers de eventos',
          'Reescribir el componente como clase',
          'Solo añadir "use client" al inicio',
        ],
        correctAnswer: 'Renombrar a .tsx, definir la interfaz de props, tipar useState y los handlers de eventos',
        correctFeedback: '¡Correcto! La migración de un componente React sigue ese orden: extensión → interface de props → estado → eventos.',
        incorrectFeedback: 'Migrar a .tsx requiere: renombrar, crear interface de props, tipar useState con genérico, y tipar los handlers con los tipos correctos de React.',
      },
      {
        question: '¿Qué significa "divide y vencerás" en el contexto de migrar módulos grandes?',
        options: [
          'Dividir el equipo en grupos para migrar en paralelo',
          'Extraer tipos y funciones pequeñas del módulo antes de migrarlo, reduciendo su complejidad',
          'Dividir el módulo en múltiples archivos .js',
          'Migrar la mitad del módulo y dejar la otra mitad en JavaScript',
        ],
        correctAnswer: 'Extraer tipos y funciones pequeñas del módulo antes de migrarlo, reduciendo su complejidad',
        correctFeedback: '¡Correcto! Al extraer las partes más fáciles primero, el módulo principal queda con menos lógica compleja y es más fácil de migrar.',
        incorrectFeedback: 'Divide y vencerás: extrae tipos e interfaces a un archivo separado, luego funciones auxiliares, y finalmente migra el módulo principal simplificado.',
      },
      {
        question: '¿Cómo verificas que un módulo migrado no rompió funcionalidad existente?',
        options: [
          'Solo mirando que TypeScript no tenga errores',
          'Ejecutando los tests existentes y verificando que siguen pasando después de la migración',
          'Verificando que el archivo .ts es igual de largo que el .js original',
          'No es necesario verificar — TypeScript garantiza que funcione',
        ],
        correctAnswer: 'Ejecutando los tests existentes y verificando que siguen pasando después de la migración',
        correctFeedback: '¡Correcto! Los tests existentes son la red de seguridad. Si siguen pasando, la migración no rompió el comportamiento.',
        incorrectFeedback: 'TypeScript verifica tipos, no comportamiento. Los tests verifican que el módulo migrado sigue funcionando igual que antes.',
      },
    ],
  },
  {
    slug: 'checklist-migracion-typescript',
    title: 'Checklist de migración',
    module: 'Migrar JavaScript a TypeScript',
    moduleNumber: 29,
    order: 239,
    description:
      'Aprende una checklist práctica para revisar que una migración a TypeScript sea segura, gradual y mantenible.',
    explanation: `## Checklist de migración a TypeScript

Una migración exitosa no es solo renombrar archivos y quitar errores. Esta checklist te ayuda a hacerlo de forma ordenada y profesional.

### Antes de empezar

- [ ] El proyecto tiene un sistema de control de versiones (Git)
- [ ] Tienes una rama de trabajo separada (\`feature/migrate-typescript\`)
- [ ] Entiendes la estructura actual del proyecto
- [ ] Tienes tests existentes (o los escribirás antes de migrar)
- [ ] El equipo conoce los conceptos básicos de TypeScript

### Configuración inicial

- [ ] tsconfig.json creado con allowJs: true, strict: false
- [ ] El proyecto compila sin errores (aunque sea con allowJs)
- [ ] Los scripts del package.json usan tsc o el bundler acepta .ts
- [ ] El linter (ESLint) está configurado con @typescript-eslint

### Durante la migración (por módulo)

- [ ] Tipos definidos en interfaces antes de tipar las funciones
- [ ] No hay parámetros con any implícito
- [ ] Los valores que pueden ser null están correctamente tipados
- [ ] Los arrays vacíos tienen tipo genérico explícito
- [ ] Los handlers de eventos tienen el tipo correcto (ChangeEvent, FormEvent)
- [ ] No se abusa de any — se usa unknown cuando es necesario

### Al finalizar cada módulo

- [ ] El módulo compila sin errores
- [ ] Los tests existentes siguen pasando
- [ ] No hay regresiones en funcionalidad

### Al completar la migración

- [ ] Todos los archivos son .ts (o .tsx para React)
- [ ] strict: true activado (puede requerir correcciones adicionales)
- [ ] No hay any salvo donde sea absolutamente necesario
- [ ] ESLint pasa sin warnings de @typescript-eslint/no-explicit-any
- [ ] Los tests tienen cobertura de los casos críticos
- [ ] El roadmap del proyecto no tiene items de migración pendientes`,
    codeExample: `// scripts/verificar-migracion.ts
// Script útil para verificar el estado de la migración

import * as fs from 'fs'
import * as path from 'path'

interface EstadoMigracion {
  archivosJs: string[]
  archivosTs: string[]
  porcentajeCompletado: number
}

function contarArchivos(directorio: string, extension: string): string[] {
  const archivos: string[] = []

  function explorar(dir: string): void {
    const entradas = fs.readdirSync(dir, { withFileTypes: true })

    for (const entrada of entradas) {
      if (entrada.name === 'node_modules' || entrada.name === 'dist') continue

      const rutaCompleta = path.join(dir, entrada.name)

      if (entrada.isDirectory()) {
        explorar(rutaCompleta)
      } else if (entrada.name.endsWith(extension)) {
        archivos.push(rutaCompleta)
      }
    }
  }

  explorar(directorio)
  return archivos
}

function verificarMigracion(directorioPrincipal: string): EstadoMigracion {
  const archivosJs = contarArchivos(directorioPrincipal, '.js')
  const archivosTs = contarArchivos(directorioPrincipal, '.ts')
  const total = archivosJs.length + archivosTs.length
  const porcentajeCompletado = total > 0
    ? Math.round((archivosTs.length / total) * 100)
    : 0

  return { archivosJs, archivosTs, porcentajeCompletado }
}

// Uso del script
const estado = verificarMigracion('./src')
console.log(\`Archivos .ts: \${estado.archivosTs.length}\`)
console.log(\`Archivos .js pendientes: \${estado.archivosJs.length}\`)
console.log(\`Progreso: \${estado.porcentajeCompletado}%\`)

if (estado.archivosJs.length > 0) {
  console.log('\\nArchivos pendientes de migrar:')
  estado.archivosJs.forEach((f) => console.log('  -', f))
}

// ─── tsconfig.json — configuración final de migración ─────────
// {
//   "compilerOptions": {
//     "strict": true,          // ← Activar al final
//     "noImplicitAny": true,
//     "strictNullChecks": true,
//     "skipLibCheck": true,
//     "esModuleInterop": true,
//     "target": "ES2020",
//     "module": "commonjs"
//   }
// }`,
    keyPoints: [
      'Trabaja siempre en una rama separada — facilita los code reviews y los rollbacks',
      'Activa strict: false al inicio y strict: true al finalizar — minimiza los errores iniciales',
      'Los tests son la red de seguridad más importante durante la migración',
      'Verifica que el proyecto compila sin errores después de cada módulo migrado',
      'La migración está completa cuando no hay archivos .js y strict: true pasa sin errores',
    ],
    exercise: {
      description:
        'Crea tu propia checklist personalizada de 10 puntos para migrar un proyecto React (create-react-app) con 20 archivos .jsx a TypeScript. Incluye: preparación (2 puntos), configuración (3 puntos), migración de componentes (3 puntos), y verificación final (2 puntos).',
      hint: 'Para React: los archivos .jsx se convierten a .tsx. La configuración debe incluir allowJs:true. Los componentes necesitan interfaces para sus props.',
    },
    quiz: [
      {
        question: '¿Cuándo deberías activar "strict: true" durante una migración?',
        options: [
          'Antes de empezar — es más seguro con strictness desde el inicio',
          'Nunca — strict es demasiado restrictivo',
          'Al finalizar la migración, cuando todos los archivos ya son .ts',
          'Solo en producción',
        ],
        correctAnswer: 'Al finalizar la migración, cuando todos los archivos ya son .ts',
        correctFeedback: '¡Correcto! Activar strict al inicio genera demasiados errores. Es mejor activarlo al final cuando ya tienes todo tipado.',
        incorrectFeedback: 'Se recomienda activar strict: true al final de la migración. Durante la migración, strict: false permite avanzar con menos fricción.',
      },
      {
        question: '¿Por qué es importante trabajar en una rama separada durante la migración?',
        options: [
          'Porque TypeScript lo requiere',
          'Para facilitar revisiones de código y poder revertir si algo sale mal',
          'Porque Git no acepta commits con archivos .ts',
          'Solo es importante en proyectos grandes',
        ],
        correctAnswer: 'Para facilitar revisiones de código y poder revertir si algo sale mal',
        correctFeedback: '¡Correcto! Una rama separada permite hacer PRs con los cambios, revisarlos con el equipo y revertir si hay problemas.',
        incorrectFeedback: 'Trabajar en una rama separada permite revisiones de código y facilita revertir si la migración causa problemas inesperados.',
      },
      {
        question: '¿Qué herramienta de linting debes configurar específicamente para TypeScript?',
        options: [
          'JSHint',
          'ESLint con el plugin @typescript-eslint',
          'Stylelint',
          'Prettier (ya incluye reglas de TypeScript)',
        ],
        correctAnswer: 'ESLint con el plugin @typescript-eslint',
        correctFeedback: '¡Correcto! @typescript-eslint extiende ESLint con reglas específicas para TypeScript, como detectar el uso innecesario de any.',
        incorrectFeedback: 'ESLint con @typescript-eslint es el linter estándar para TypeScript. Prettier se encarga del formato, no de las reglas de tipos.',
      },
      {
        question: '¿Cuál es la última cosa que debes activar al completar la migración?',
        options: [
          'allowJs: true',
          'checkJs: false',
          'strict: true para máxima seguridad de tipos',
          'noEmit: true',
        ],
        correctAnswer: 'strict: true para máxima seguridad de tipos',
        correctFeedback: '¡Correcto! strict: true es el paso final — activa todas las verificaciones más estrictas de TypeScript una vez que todo está tipado.',
        incorrectFeedback: 'Al completar la migración, activa strict: true para obtener la máxima seguridad de tipos. Es el paso final de una migración completa.',
      },
      {
        question: '¿Qué debe cumplir cada módulo al finalizar su migración individual?',
        options: [
          'Solo que compila sin errores de TypeScript',
          'Que compila sin errores, los tests existentes siguen pasando y no hay regresiones',
          'Que no tiene ningún tipo any',
          'Que tiene 100% de cobertura de tests',
        ],
        correctAnswer: 'Que compila sin errores, los tests existentes siguen pasando y no hay regresiones',
        correctFeedback: '¡Correcto! Los tres criterios de éxito por módulo: compila sin errores, tests pasan, y ninguna funcionalidad se rompió.',
        incorrectFeedback: 'La migración de cada módulo debe cumplir: compilar sin errores, tests existentes pasando, y sin regresiones en la funcionalidad.',
      },
    ],
  },
]

export const tsModule29: Module = {
  number: 29,
  title: 'Migrar JavaScript a TypeScript',
  level: 'nivel6',
  lessons: lessonsTsModule29,
}
