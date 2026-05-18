import type { Lesson, Module } from '@/types'

export const lessonsTsModule11: Lesson[] = [
  // ── Lección 80 ───────────────────────────────────────────────────────────
  {
    slug: 'que-es-narrowing',
    title: '¿Qué es narrowing?',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 80,
    description:
      'Aprende qué es narrowing y cómo TypeScript reduce un tipo amplio a uno más específico según las condiciones del código.',
    explanation: `El **narrowing** (reducción de tipo) es el proceso por el cual TypeScript analiza el flujo de tu código y reduce un tipo amplio a uno más específico dentro de ciertos bloques.

Cuando una variable puede ser de varios tipos (como \`string | number\`), TypeScript no sabe cuál de los dos es en cada momento. El narrowing le permite a TypeScript "aprender" cuál es el tipo real dentro de una condición o bloque específico.

**Una analogía útil**

Imagina que tienes una bolsa que puede contener un libro o una botella. Antes de meterle la mano, no sabes qué hay adentro. Pero si abres la bolsa y ves que tiene tapa, ya sabes que es la botella. En ese momento, puedes usar la botella con seguridad. TypeScript hace algo similar: cuando detecta que verificaste el tipo, ya sabe cuál es.

**¿Por qué es importante?**

Sin narrowing, TypeScript te obligaría a usar tipos muy amplios o a hacer conversiones manuales inseguras. Con narrowing, puedes escribir código más seguro y preciso sin perder flexibilidad.

**Ejemplo básico**

\`\`\`ts
function mostrar(valor: string | number): void {
  // Aquí TypeScript no sabe si valor es string o number
  console.log(valor) // ✓ funciona porque ambos tipos tienen toString()

  // Esto daría error: valor.toUpperCase()
  // porque number no tiene toUpperCase
}
\`\`\`

**Con narrowing**

\`\`\`ts
function mostrar(valor: string | number): void {
  if (typeof valor === 'string') {
    // Dentro de este bloque, TypeScript SABE que valor es string
    console.log(valor.toUpperCase()) // ✓
  } else {
    // Aquí TypeScript SABE que valor es number
    console.log(valor.toFixed(2)) // ✓
  }
}
\`\`\`

**¿Cómo funciona internamente?**

TypeScript analiza el flujo de ejecución de tu código. Cuando encuentra una condición como \`typeof valor === 'string'\`, entiende que dentro de ese bloque el tipo ya no puede ser \`number\`. A esto se le llama **control flow analysis** (análisis de flujo de control).

**Técnicas de narrowing en TypeScript**

Hay varias formas de aplicar narrowing:
- Con \`typeof\` — para tipos primitivos
- Con \`if\`, \`else\`, \`switch\`
- Con comparaciones de igualdad (\`===\`, \`!==\`)
- Con el operador \`in\` — para propiedades de objetos
- Con \`instanceof\` — para clases y constructores
- Con type guards personalizados (funciones predicado)

En este módulo aprenderás cada una de estas técnicas paso a paso.`,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// Sin narrowing: TypeScript no sabe el tipo exacto
function procesarValor(valor: string | number): void {
  console.log(valor) // ✓ funciona (ambos tienen toString)
  // valor.toUpperCase() // Error: number no tiene toUpperCase
  // valor.toFixed(2)    // Error: string no tiene toFixed
}

// Con narrowing: TypeScript aprende el tipo en cada bloque
function procesarConNarrowing(valor: string | number): void {
  if (typeof valor === 'string') {
    // TypeScript sabe: valor es string aquí
    console.log('Texto en mayúsculas:', valor.toUpperCase())
  } else {
    // TypeScript sabe: valor es number aquí
    console.log('Número formateado:', valor.toFixed(2))
  }
}

procesarConNarrowing('hola')   // → Texto en mayúsculas: HOLA
procesarConNarrowing(3.14159)  // → Número formateado: 3.14

// ── Narrowing en variables ────────────────────────────────────────────────

let entrada: string | null = obtenerEntrada()

if (entrada !== null) {
  // TypeScript sabe: entrada es string aquí (no null)
  console.log(entrada.trim())
}

function obtenerEntrada(): string | null {
  return '  hola mundo  '
}

// ── Narrowing con union más amplio ────────────────────────────────────────

type Estado = 'activo' | 'inactivo' | 'pendiente'

function describir(estado: Estado): string {
  if (estado === 'activo') {
    return 'El usuario está activo'
  } else if (estado === 'inactivo') {
    return 'El usuario fue desactivado'
  } else {
    // TypeScript sabe: solo puede ser 'pendiente' aquí
    return 'El usuario está pendiente de activación'
  }
}`,
    keyPoints: [
      'Narrowing es el proceso por el cual TypeScript reduce un tipo amplio a uno más específico dentro de un bloque de código.',
      'TypeScript analiza el flujo de control para determinar qué tipo es posible en cada punto del código.',
      'Sin narrowing, TypeScript solo permite operaciones comunes a todos los tipos del union.',
      'Con narrowing, puedes acceder a métodos y propiedades específicas del tipo reducido.',
      'Existen múltiples técnicas de narrowing: typeof, instanceof, operador in, comparaciones, y type guards.',
    ],
    exercise: {
      description:
        'Escribe una función llamada `describir` que reciba un parámetro `dato` de tipo `string | number | boolean`. Dentro de la función, usa `typeof` para mostrar: si es string, su longitud; si es number, si es positivo o negativo; si es boolean, "verdadero" o "falso". TypeScript debe entender el tipo correcto en cada rama.',
      hint: 'Usa `typeof dato === "string"`, `typeof dato === "number"` y `typeof dato === "boolean"` como condiciones. TypeScript reducirá automáticamente el tipo dentro de cada bloque.',
    },
    quiz: [
      {
        question: '¿Qué es el narrowing en TypeScript?',
        options: [
          'Una forma de convertir tipos de forma forzada con as',
          'El proceso por el cual TypeScript reduce un tipo amplio a uno más específico según el flujo del código',
          'Una técnica para eliminar tipos de un union',
          'Un método especial de los objetos TypeScript',
        ],
        correctAnswer:
          'El proceso por el cual TypeScript reduce un tipo amplio a uno más específico según el flujo del código',
        correctFeedback:
          'Correcto. Narrowing es cuando TypeScript analiza las condiciones de tu código y entiende que dentro de cierto bloque, el tipo debe ser más específico.',
        incorrectFeedback:
          'No es correcto. Narrowing no es una conversión forzada ni un método. Es el análisis automático que hace TypeScript del flujo de tu código para entender qué tipo tiene una variable en cada punto.',
      },
      {
        question:
          '¿Qué ocurre si intentas llamar a `valor.toUpperCase()` donde `valor: string | number` sin aplicar narrowing?',
        options: [
          'TypeScript lo permite porque string tiene ese método',
          'TypeScript lo convierte automáticamente a string',
          'TypeScript genera un error porque number no tiene ese método',
          'El código se ejecuta solo si valor es un string',
        ],
        correctAnswer: 'TypeScript genera un error porque number no tiene ese método',
        correctFeedback:
          'Correcto. TypeScript no puede garantizar que `valor` sea un string, así que no permite métodos que solo existen en string. Necesitas hacer narrowing primero.',
        incorrectFeedback:
          'No es correcto. TypeScript es conservador: si una variable puede ser `string | number`, solo permite operaciones que existen en ambos tipos. `toUpperCase` solo existe en string, por lo que genera error sin narrowing.',
      },
      {
        question:
          'Dado `let dato: string | null = "hola"`. Después de escribir `if (dato !== null) { ... }`, ¿qué tipo tiene `dato` dentro del bloque?',
        options: [
          'string | null',
          'null',
          'string',
          'undefined',
        ],
        correctAnswer: 'string',
        correctFeedback:
          'Correcto. Al verificar que `dato !== null`, TypeScript sabe que dentro del bloque solo puede ser `string`. El tipo null fue descartado.',
        incorrectFeedback:
          'No es correcto. Al verificar `dato !== null`, TypeScript aplica narrowing y descarta `null` del union. Dentro del bloque, `dato` es definitivamente `string`.',
      },
      {
        question:
          '¿Cuál de las siguientes afirmaciones sobre narrowing es correcta?',
        options: [
          'Narrowing solo funciona con tipos primitivos como string y number',
          'TypeScript analiza el flujo de control para determinar qué tipo es posible en cada punto',
          'Narrowing elimina los tipos del union de forma permanente',
          'Para hacer narrowing siempre necesitas escribir una función especial',
        ],
        correctAnswer:
          'TypeScript analiza el flujo de control para determinar qué tipo es posible en cada punto',
        correctFeedback:
          'Correcto. TypeScript usa análisis de flujo de control para entender qué tipos son posibles en cada parte del código, sin que tú tengas que hacer nada especial más que escribir condiciones normales.',
        incorrectFeedback:
          'No es correcto. Narrowing funciona con todo tipo de valores, no solo primitivos, y no necesitas funciones especiales para los casos básicos. TypeScript analiza automáticamente el flujo de control de tu código.',
      },
      {
        question:
          '¿Qué permite hacer el narrowing que no sería posible sin él?',
        options: [
          'Usar variables sin declararlas',
          'Acceder a métodos y propiedades específicas del tipo más específico dentro de un bloque',
          'Ignorar los errores de TypeScript',
          'Ejecutar código TypeScript sin compilarlo',
        ],
        correctAnswer:
          'Acceder a métodos y propiedades específicas del tipo más específico dentro de un bloque',
        correctFeedback:
          'Correcto. Sin narrowing, TypeScript solo permite usar lo que es común a todos los tipos del union. Con narrowing, puedes acceder a propiedades y métodos del tipo específico dentro de cada bloque.',
        incorrectFeedback:
          'No es correcto. El propósito del narrowing es permitirte usar operaciones específicas de un tipo más concreto después de verificar cuál es, de forma segura y con la validación de TypeScript.',
      },
    ],
  },

  // ── Lección 81 ───────────────────────────────────────────────────────────
  {
    slug: 'narrowing-typeof',
    title: 'Narrowing con typeof',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 81,
    description:
      'Aprende a usar typeof para diferenciar entre string, number, boolean, undefined y otros tipos primitivos.',
    explanation: `El operador \`typeof\` es la forma más común de hacer narrowing con tipos primitivos. TypeScript entiende las verificaciones con \`typeof\` y reduce el tipo dentro de los bloques condicionales.

**Valores que puede devolver typeof**

| Expresión | Resultado |
|---|---|
| \`typeof "hola"\` | \`"string"\` |
| \`typeof 42\` | \`"number"\` |
| \`typeof true\` | \`"boolean"\` |
| \`typeof undefined\` | \`"undefined"\` |
| \`typeof Symbol()\` | \`"symbol"\` |
| \`typeof 10n\` | \`"bigint"\` |
| \`typeof {}\` | \`"object"\` |
| \`typeof []\` | \`"object"\` |
| \`typeof null\` | \`"object"\` ← ¡cuidado! |
| \`typeof function(){}\` | \`"function"\` |

**Importante:** \`typeof null\` devuelve \`"object"\`, no \`"null"\`. Esto es un error histórico de JavaScript que TypeScript hereda.

**Narrowing básico con typeof**

\`\`\`ts
function formatear(valor: string | number): string {
  if (typeof valor === 'string') {
    return valor.trim()         // TypeScript sabe: string
  } else {
    return valor.toFixed(2)    // TypeScript sabe: number
  }
}
\`\`\`

**Union con tres tipos**

\`\`\`ts
function describir(dato: string | number | boolean): string {
  if (typeof dato === 'string') {
    return \`Texto de \${dato.length} caracteres\`
  } else if (typeof dato === 'number') {
    return \`Número: \${dato}\`
  } else {
    return \`Booleano: \${dato ? 'verdadero' : 'falso'}\`
  }
}
\`\`\`

**Verificar undefined**

\`\`\`ts
function saludar(nombre?: string): string {
  if (typeof nombre === 'undefined') {
    return 'Hola, visitante'
  }
  return \`Hola, \${nombre}\`
}
\`\`\`

**¿Por qué no usar typeof para objetos?**

Porque \`typeof objeto\` siempre devuelve \`"object"\` sin importar si es un arreglo, una clase personalizada, o un objeto simple. Para esos casos usarás \`instanceof\` o el operador \`in\`, que aprenderás más adelante.

**typeof null — el caso especial**

\`\`\`ts
function procesar(valor: string | null): void {
  // INCORRECTO: typeof null === "object", así que esto NO funciona
  if (typeof valor === 'object') {
    // Esto NO significa que valor es null
  }

  // CORRECTO: comparar directamente con null
  if (valor !== null) {
    console.log(valor.trim()) // TypeScript sabe: string aquí
  }
}
\`\`\``,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// Narrowing con typeof para primitivos
function formatearDato(dato: string | number | boolean): string {
  if (typeof dato === 'string') {
    return \`"\${dato.toUpperCase()}"\`
  } else if (typeof dato === 'number') {
    return dato.toFixed(2)
  } else {
    return dato ? 'sí' : 'no'
  }
}

console.log(formatearDato('hola'))   // → "HOLA"
console.log(formatearDato(3.14))     // → 3.14
console.log(formatearDato(true))     // → sí

// ── Verificar undefined con typeof ───────────────────────────────────────

interface Producto {
  nombre: string
  descuento?: number
}

function calcularPrecioFinal(precio: number, producto: Producto): number {
  if (typeof producto.descuento === 'undefined') {
    return precio
  }
  // TypeScript sabe: producto.descuento es number aquí
  return precio * (1 - producto.descuento / 100)
}

const prod = { nombre: 'Laptop', descuento: 15 }
console.log(calcularPrecioFinal(1000, prod))  // → 850

// ── Null requiere comparación directa, no typeof ──────────────────────────

function obtenerLongitud(texto: string | null): number {
  if (texto !== null) {
    // TypeScript sabe: texto es string aquí
    return texto.length
  }
  return 0
}

console.log(obtenerLongitud('TypeScript'))  // → 10
console.log(obtenerLongitud(null))          // → 0

// ── typeof en switch ──────────────────────────────────────────────────────

function describir(valor: string | number | boolean | undefined): string {
  switch (typeof valor) {
    case 'string':
      return \`Texto: \${valor}\`
    case 'number':
      return \`Número: \${valor}\`
    case 'boolean':
      return \`Booleano: \${valor}\`
    default:
      return 'Sin valor'
  }
}`,
    keyPoints: [
      'typeof es la herramienta principal para narrowing con tipos primitivos (string, number, boolean, undefined).',
      'typeof null devuelve "object", no "null" — comparar con null directamente: valor !== null.',
      'typeof [array] también devuelve "object" — no sirve para distinguir arreglos de objetos.',
      'TypeScript entiende typeof en if, else if, y switch — aplica narrowing en todos.',
      'Para tipos de objetos personalizados, usa instanceof o el operador in en lugar de typeof.',
    ],
    exercise: {
      description:
        'Escribe una función `calcularArea` que reciba un parámetro `forma` de tipo `string | number`. Si es string, devuelve un mensaje "Forma desconocida: [nombre]". Si es number, asume que es el radio de un círculo y calcula el área (π × r²) redondeada a 2 decimales. Usa typeof para el narrowing.',
      hint: 'Usa `typeof forma === "string"` y `typeof forma === "number"`. Para π usa `Math.PI`. Para redondear usa `.toFixed(2)` o `Math.round`.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `typeof null` en JavaScript y TypeScript?',
        options: ['"null"', '"undefined"', '"object"', '"empty"'],
        correctAnswer: '"object"',
        correctFeedback:
          'Correcto. `typeof null` devuelve "object". Es un error histórico de JavaScript. Por eso, para verificar si algo es null debes usar `valor === null` o `valor !== null`, no typeof.',
        incorrectFeedback:
          'No es correcto. `typeof null` devuelve "object" — este es un error histórico de JavaScript que TypeScript hereda. Siempre compara con null directamente: `valor === null`.',
      },
      {
        question:
          '¿Cuál de estas condiciones verifica correctamente si `dato` es string dentro de una función con `dato: string | number`?',
        options: [
          'if (dato.type === "string")',
          'if (dato instanceof String)',
          'if (typeof dato === "string")',
          'if (dato.isString())',
        ],
        correctAnswer: 'if (typeof dato === "string")',
        correctFeedback:
          'Correcto. `typeof dato === "string"` es la forma estándar de verificar si un primitivo es string. TypeScript entiende esta verificación y aplica narrowing.',
        incorrectFeedback:
          'No es correcto. La forma estándar para verificar tipos primitivos es `typeof dato === "string"`. `.type` no existe en primitivos, `instanceof String` no funciona con string primitivos, y `.isString()` no existe.',
      },
      {
        question:
          'Tienes `function saludar(nombre?: string)`. ¿Cuál es la mejor forma de verificar que nombre fue proporcionado?',
        options: [
          'if (typeof nombre === "null")',
          'if (typeof nombre === "defined")',
          'if (typeof nombre !== "undefined")',
          'if (typeof nombre === "object")',
        ],
        correctAnswer: 'if (typeof nombre !== "undefined")',
        correctFeedback:
          'Correcto. Un parámetro opcional puede ser `string` o `undefined`. Verificar `typeof nombre !== "undefined"` confirma que fue proporcionado. También puedes usar `if (nombre !== undefined)` o simplemente `if (nombre)`.',
        incorrectFeedback:
          'No es correcto. Los parámetros opcionales son `string | undefined`. Para verificar que fue proporcionado usa `typeof nombre !== "undefined"`. "null" y "defined" no son valores válidos de typeof.',
      },
      {
        question:
          '¿Qué devuelve `typeof []` (un arreglo vacío)?',
        options: ['"array"', '"object"', '"list"', '"undefined"'],
        correctAnswer: '"object"',
        correctFeedback:
          'Correcto. `typeof []` devuelve "object", no "array". Los arreglos son objetos en JavaScript. Para verificar si algo es un arreglo, usa `Array.isArray(valor)`.',
        incorrectFeedback:
          'No es correcto. `typeof []` devuelve "object" porque los arreglos son objetos en JavaScript. No existe "array" como resultado de typeof. Usa `Array.isArray(valor)` para verificar arreglos.',
      },
      {
        question:
          'En el siguiente código, ¿qué tipo tiene `x` dentro del bloque else?\n\n```ts\nfunction procesar(x: string | number) {\n  if (typeof x === "string") {\n    // x es string aquí\n  } else {\n    // x es ??? aquí\n  }\n}\n```',
        options: [
          'string | number',
          'string',
          'number',
          'unknown',
        ],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. Si el tipo de `x` es `string | number` y dentro del if verificamos que es string, entonces en el else TypeScript sabe que solo puede ser `number`. Este es el poder del narrowing.',
        incorrectFeedback:
          'No es correcto. TypeScript aplica narrowing al resto del union. Si en el if se verifica que es string, en el else solo puede ser number. TypeScript lo sabe gracias al análisis de flujo de control.',
      },
    ],
  },

  // ── Lección 82 ───────────────────────────────────────────────────────────
  {
    slug: 'narrowing-if',
    title: 'Narrowing con if',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 82,
    description:
      'Aprende cómo los condicionales ayudan a TypeScript a entender mejor qué tipo tiene una variable dentro de cada bloque.',
    explanation: `Los condicionales \`if\`, \`else if\` y \`else\` son la forma más natural de hacer narrowing. TypeScript analiza las condiciones que escribes y reduce los tipos posibles dentro de cada bloque.

**Narrowing con truthy/falsy**

En JavaScript, ciertos valores son "falsy" (null, undefined, 0, "", false, NaN). TypeScript aprovecha esto para narrowing:

\`\`\`ts
function mostrar(nombre: string | null | undefined): void {
  if (nombre) {
    // TypeScript sabe: nombre es string (no null ni undefined)
    console.log(nombre.toUpperCase())
  } else {
    console.log('Sin nombre')
  }
}
\`\`\`

**Cuidado con truthy narrowing:** una cadena vacía \`""\` es falsy, entonces \`if (nombre)\` también descartaría \`""\`. Si necesitas distinguir entre \`""\` y \`null\`/\`undefined\`, usa comparaciones explícitas:

\`\`\`ts
if (nombre !== null && nombre !== undefined) {
  console.log(nombre.length)  // incluye "" como válido
}
\`\`\`

**Narrowing con else if y else**

\`\`\`ts
function clasificar(valor: string | number | null): string {
  if (valor === null) {
    return 'Sin valor'
  } else if (typeof valor === 'string') {
    return \`Texto: \${valor}\`
  } else {
    // TypeScript sabe: solo puede ser number aquí
    return \`Número: \${valor}\`
  }
}
\`\`\`

**Retorno anticipado (early return)**

El narrowing también funciona con retornos anticipados. Cuando retornas dentro de un if, TypeScript sabe que el código que sigue ya no puede tener ese tipo:

\`\`\`ts
function procesar(valor: string | null): string {
  if (valor === null) {
    return 'Valor nulo'
  }
  // TypeScript sabe: valor es string aquí (null ya fue descartado)
  return valor.toUpperCase()
}
\`\`\`

Este patrón es muy común y limpio. Se llama **guard clause** (cláusula de guarda).

**Narrowing con operadores lógicos**

\`\`\`ts
function procesar(a: string | null, b: number | undefined): void {
  if (a !== null && b !== undefined) {
    // TypeScript sabe: a es string, b es number
    console.log(a.toUpperCase(), b.toFixed(2))
  }
}
\`\`\`

**Switch como narrowing**

\`\`\`ts
type Rol = 'admin' | 'editor' | 'lector'

function obtenerPermiso(rol: Rol): string {
  switch (rol) {
    case 'admin':
      return 'Acceso total'
    case 'editor':
      return 'Puede editar'
    case 'lector':
      return 'Solo lectura'
  }
}
\`\`\``,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// ── Narrowing con truthy ──────────────────────────────────────────────────

function mostrarNombre(nombre: string | null | undefined): void {
  if (nombre) {
    // nombre es string aquí (no null ni undefined, y no "")
    console.log('Nombre:', nombre.toUpperCase())
  } else {
    console.log('Sin nombre proporcionado')
  }
}

mostrarNombre('Ana')      // → Nombre: ANA
mostrarNombre(null)       // → Sin nombre proporcionado
mostrarNombre(undefined)  // → Sin nombre proporcionado

// ── Guard clause (retorno anticipado) ────────────────────────────────────

function calcularDescuento(precio: number, cupon: string | null): number {
  if (cupon === null) {
    return precio  // retorno anticipado
  }
  // TypeScript sabe: cupon es string aquí
  if (cupon === 'VERANO20') return precio * 0.8
  if (cupon === 'BIENVENIDA') return precio * 0.9
  return precio
}

console.log(calcularDescuento(100, null))         // → 100
console.log(calcularDescuento(100, 'VERANO20'))   // → 80
console.log(calcularDescuento(100, 'OTRO'))       // → 100

// ── Narrowing con switch ──────────────────────────────────────────────────

type EstadoPedido = 'pendiente' | 'procesando' | 'enviado' | 'entregado'

function describir(estado: EstadoPedido): string {
  switch (estado) {
    case 'pendiente':
      return '⏳ Esperando confirmación'
    case 'procesando':
      return '⚙️ En preparación'
    case 'enviado':
      return '🚚 En camino'
    case 'entregado':
      return '✅ Entregado'
  }
}

console.log(describir('enviado'))  // → 🚚 En camino

// ── Narrowing con múltiples condiciones ──────────────────────────────────

interface Usuario {
  nombre: string
  email: string | null
  edad: number | undefined
}

function validarUsuario(u: Usuario): string[] {
  const errores: string[] = []

  if (!u.nombre) {
    errores.push('El nombre es requerido')
  }

  if (u.email !== null && typeof u.email === 'string') {
    if (!u.email.includes('@')) {
      errores.push('El email no es válido')
    }
  }

  if (u.edad !== undefined && u.edad < 18) {
    errores.push('Debe ser mayor de edad')
  }

  return errores
}`,
    keyPoints: [
      'Los condicionales if/else if/else aplican narrowing: TypeScript reduce el tipo en cada bloque.',
      'El patrón guard clause (retorno anticipado dentro de if) es limpio y muy usado en TypeScript.',
      'if (valor) descarta null, undefined, 0, "" y false — úsalo con cuidado si "" es un valor válido.',
      'Para narrowing preciso, usa comparaciones explícitas: valor !== null, valor !== undefined.',
      'switch también aplica narrowing: en cada case, TypeScript sabe el valor exacto.',
    ],
    exercise: {
      description:
        'Escribe una función `procesarBusqueda` que reciba un parámetro `query` de tipo `string | null | undefined`. Si es null, devuelve "Sin búsqueda". Si es undefined, devuelve "Búsqueda no iniciada". Si es string vacío "", devuelve "Búsqueda vacía". Si es un string con contenido, devuelve "Buscando: [query en mayúsculas]". Usa guard clauses.',
      hint: 'Maneja cada caso con un retorno anticipado: primero null, luego undefined, luego string vacío, y al final el caso normal. TypeScript irá reduciendo los tipos a medida que avanzas.',
    },
    quiz: [
      {
        question:
          '¿Qué ocurre con el tipo de `x` después de esta guard clause?\n\n```ts\nfunction fn(x: string | null): void {\n  if (x === null) return\n  // ¿Qué tipo es x aquí?\n}\n```',
        options: ['string | null', 'null', 'string', 'undefined'],
        correctAnswer: 'string',
        correctFeedback:
          'Correcto. Después del `if (x === null) return`, TypeScript sabe que si el código continúa, x no puede ser null. Por lo tanto x es string en el resto de la función.',
        incorrectFeedback:
          'No es correcto. Al retornar cuando x es null, el resto de la función solo se ejecuta cuando x no es null. TypeScript aplica narrowing y sabe que x es string después del guard clause.',
      },
      {
        question:
          '¿Cuál es el problema con usar `if (nombre)` para verificar que nombre es un string válido, donde `nombre: string | null`?',
        options: [
          'No hay problema, funciona perfectamente',
          'Una cadena vacía "" también es falsy, así que "" sería descartado aunque sea un string válido',
          'TypeScript no entiende condiciones truthy',
          'Solo funciona si nombre es string, no con null',
        ],
        correctAnswer:
          'Una cadena vacía "" también es falsy, así que "" sería descartado aunque sea un string válido',
        correctFeedback:
          'Correcto. `if (nombre)` usa evaluación truthy, y "" es falsy en JavaScript. Si un string vacío es un valor válido en tu lógica, usa `if (nombre !== null)` en su lugar.',
        incorrectFeedback:
          'No es correcto. El problema es que "" es falsy en JavaScript. Si tu lógica necesita permitir strings vacíos, `if (nombre)` los rechazaría. Usa `if (nombre !== null)` para ser más explícito.',
      },
      {
        question:
          '¿Cuál de estos patrones es el más limpio para hacer narrowing múltiple?',
        options: [
          'Usar muchos if anidados dentro de otros if',
          'Usar guard clauses con retornos anticipados para cada caso especial',
          'Usar any para evitar el narrowing',
          'Convertir siempre al tipo más general',
        ],
        correctAnswer:
          'Usar guard clauses con retornos anticipados para cada caso especial',
        correctFeedback:
          'Correcto. Las guard clauses permiten eliminar casos especiales al inicio de la función y trabajar con el tipo reducido en el resto del cuerpo, sin necesidad de anidar if.',
        incorrectFeedback:
          'No es correcto. Las guard clauses son el patrón más limpio: eliminan casos especiales al inicio (con return), y el resto del código trabaja con el tipo ya reducido, sin anidamiento excesivo.',
      },
      {
        question:
          'Tienes `type Rol = "admin" | "editor"`. En un switch con `case "admin":` y `case "editor":`, ¿qué pasa si agregas `default:`?',
        options: [
          'TypeScript muestra un error porque ya están todos los casos cubiertos',
          'El default nunca se ejecutará y TypeScript puede marcar el tipo como never en ese bloque',
          'TypeScript ignora el default',
          'Es obligatorio tener default en todo switch',
        ],
        correctAnswer:
          'El default nunca se ejecutará y TypeScript puede marcar el tipo como never en ese bloque',
        correctFeedback:
          'Correcto. Cuando cubres todos los valores posibles de un union type en un switch, TypeScript sabe que el default nunca se alcanzará. El tipo se convierte en `never` en ese bloque.',
        incorrectFeedback:
          'No es correcto. Cuando todos los casos del union están cubiertos, TypeScript sabe que el default nunca puede ejecutarse. El tipo en el default sería `never`, indicando que es código inalcanzable.',
      },
      {
        question:
          '¿Qué hace el siguiente código?\n\n```ts\nfunction saludar(nombre: string | undefined): string {\n  if (nombre === undefined) return "Hola"\n  return `Hola, ${nombre}`\n}\n```',
        options: [
          'Genera un error porque no se puede retornar dentro de un if',
          'Aplica un guard clause: si nombre es undefined retorna temprano; si no, nombre es string',
          'Falla porque undefined no es un tipo válido',
          'Solo funciona si nombre tiene al menos un carácter',
        ],
        correctAnswer:
          'Aplica un guard clause: si nombre es undefined retorna temprano; si no, nombre es string',
        correctFeedback:
          'Correcto. Este es el patrón guard clause. Al retornar cuando nombre es undefined, el resto del código sabe que nombre es string. Es un patrón limpio y muy usado en TypeScript.',
        incorrectFeedback:
          'No es correcto. Esto es un guard clause válido. Al verificar y retornar cuando es undefined, el código posterior garantiza que nombre es string. TypeScript lo entiende y aplica narrowing.',
      },
    ],
  },

  // ── Lección 83 ───────────────────────────────────────────────────────────
  {
    slug: 'narrowing-igualdad',
    title: 'Narrowing con igualdad',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 83,
    description:
      'Aprende cómo TypeScript usa comparaciones como === y !== para reducir tipos posibles.',
    explanation: `TypeScript entiende las comparaciones de igualdad estricta (\`===\`) y desigualdad estricta (\`!==\`) como mecanismos de narrowing. Son especialmente útiles con valores literales y con null/undefined.

**Comparaciones con valores literales**

\`\`\`ts
type Direccion = 'arriba' | 'abajo' | 'izquierda' | 'derecha'

function mover(d: Direccion): void {
  if (d === 'arriba') {
    // TypeScript sabe: d es exactamente 'arriba'
    console.log('Moviendo hacia arriba')
  }
}
\`\`\`

**Comparaciones con null y undefined**

\`\`\`ts
function obtenerLongitud(texto: string | null | undefined): number {
  if (texto !== null && texto !== undefined) {
    // TypeScript sabe: texto es string
    return texto.length
  }
  return 0
}
\`\`\`

**El operador de igualdad libre (==) también funciona**

\`\`\`ts
function obtenerLongitud(texto: string | null | undefined): number {
  if (texto != null) {
    // texto != null descarta tanto null como undefined (== loose equality)
    return texto.length  // TypeScript sabe: texto es string
  }
  return 0
}
\`\`\`

\`texto != null\` es \`true\` cuando texto no es ni \`null\` ni \`undefined\`. Esto aprovecha la igualdad abstracta de JavaScript. TypeScript lo entiende y hace narrowing de ambos simultáneamente.

**Narrowing con switch y valores específicos**

\`\`\`ts
type Color = 'rojo' | 'verde' | 'azul'

function obtenerHex(color: Color): string {
  switch (color) {
    case 'rojo':   return '#FF0000'
    case 'verde':  return '#00FF00'
    case 'azul':   return '#0000FF'
  }
}
\`\`\`

**Narrowing cruzado entre dos variables**

TypeScript también puede hacer narrowing comparando dos variables que pueden tener tipos superpuestos:

\`\`\`ts
function comparar(a: string | number, b: string | boolean): void {
  if (a === b) {
    // Aquí TypeScript sabe que ambos deben ser string (el único tipo común)
    console.log(a.toUpperCase())
    console.log(b.toUpperCase())
  }
}
\`\`\`

**Diferencia entre === y ==**

- \`===\` (igualdad estricta): verifica tipo Y valor.
- \`==\` (igualdad abstracta): permite conversiones de tipo. \`null == undefined\` es \`true\`.

Para narrowing preciso siempre usa \`===\`. La única excepción útil es \`!= null\` que descarta tanto null como undefined a la vez.`,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// ── Narrowing con === y valores literales ─────────────────────────────────

type EstadoTarea = 'pendiente' | 'en_progreso' | 'completada' | 'cancelada'

function obtenerIcono(estado: EstadoTarea): string {
  if (estado === 'pendiente')    return '⏳'
  if (estado === 'en_progreso')  return '⚙️'
  if (estado === 'completada')   return '✅'
  // TypeScript sabe: solo puede ser 'cancelada' aquí
  return '❌'
}

console.log(obtenerIcono('completada'))   // → ✅
console.log(obtenerIcono('pendiente'))    // → ⏳

// ── Narrowing con !== null ────────────────────────────────────────────────

interface Notificacion {
  mensaje: string
  link: string | null
}

function mostrarNotificacion(n: Notificacion): void {
  console.log(n.mensaje)

  if (n.link !== null) {
    // TypeScript sabe: n.link es string
    console.log('Ver más en:', n.link.toUpperCase())
  }
}

// ── El truco != null: descarta null y undefined a la vez ─────────────────

function procesar(valor: string | null | undefined): string {
  if (valor != null) {
    // TypeScript sabe: valor es string (no null NI undefined)
    return valor.trim()
  }
  return '(vacío)'
}

console.log(procesar('  hola  '))  // → hola
console.log(procesar(null))        // → (vacío)
console.log(procesar(undefined))   // → (vacío)

// ── Narrowing cruzado ─────────────────────────────────────────────────────

function interseccion(a: string | number, b: string | boolean): void {
  if (a === b) {
    // TypeScript infiere: solo puede ser string (tipo común entre ambos)
    console.log('Mismo valor de texto:', a.toUpperCase())
  } else {
    console.log('Valores distintos o tipos incompatibles')
  }
}`,
    keyPoints: [
      '=== hace narrowing exacto con valores literales: si x === "activo", TypeScript sabe que x es exactamente "activo".',
      '!== null descarta solo null; para descartar también undefined usa !== null && !== undefined, o usa != null.',
      'valor != null (igualdad abstracta) descarta tanto null como undefined en una sola comparación.',
      'switch con literal types cubre todos los casos posibles y TypeScript lo verifica.',
      'TypeScript también hace narrowing cruzado: comparar dos variables reduce sus tipos al tipo común.',
    ],
    exercise: {
      description:
        'Crea una función `obtenerMensaje` que reciba `codigo: number | string | null`. Si es null, devuelve "Código no disponible". Si es number igual a 200, devuelve "Éxito". Si es number igual a 404, devuelve "No encontrado". Si es string, devuelve "Código de texto: [codigo]". Usa comparaciones de igualdad para cada caso.',
      hint: 'Maneja null primero con una guard clause. Luego verifica si es number con typeof. Dentro del bloque de number usa === para comparar valores específicos.',
    },
    quiz: [
      {
        question:
          '¿Qué diferencia hay entre `valor != null` y `valor !== null` para narrowing?',
        options: [
          'No hay diferencia, ambos hacen exactamente lo mismo',
          '`valor != null` descarta tanto null como undefined; `valor !== null` descarta solo null',
          '`valor !== null` descarta tanto null como undefined',
          '`valor != null` solo funciona en JavaScript, no en TypeScript',
        ],
        correctAnswer:
          '`valor != null` descarta tanto null como undefined; `valor !== null` descarta solo null',
        correctFeedback:
          'Correcto. La igualdad abstracta `!=` considera null y undefined equivalentes. Por eso `valor != null` es un atajo útil cuando quieres descartar ambos a la vez.',
        incorrectFeedback:
          'No es correcto. En JavaScript, `null == undefined` es true. Entonces `valor != null` excluye tanto null como undefined. La igualdad estricta `!==` solo excluye null.',
      },
      {
        question:
          'Tienes `type Nivel = "básico" | "intermedio" | "avanzado"`. Después de verificar `if (nivel === "básico") { ... } else if (nivel === "intermedio") { ... }`, ¿qué tipo tiene `nivel` en el bloque `else`?',
        options: [
          'string',
          'Nivel',
          '"avanzado"',
          '"básico" | "intermedio"',
        ],
        correctAnswer: '"avanzado"',
        correctFeedback:
          'Correcto. TypeScript aplica narrowing y sabe que si nivel no es "básico" ni "intermedio", solo puede ser "avanzado". Esto es el poder de las comparaciones con literal types.',
        incorrectFeedback:
          'No es correcto. Al descartar "básico" e "intermedio" con las comparaciones, TypeScript sabe que en el else solo puede quedar "avanzado".',
      },
      {
        question:
          'En el siguiente código, ¿qué tipo tiene `x` dentro del if?\n\n```ts\nfunction fn(x: string | null | undefined) {\n  if (x != null) {\n    // ¿Qué tipo es x?\n  }\n}\n```',
        options: [
          'string | null | undefined',
          'null | undefined',
          'string',
          'defined',
        ],
        correctAnswer: 'string',
        correctFeedback:
          'Correcto. `x != null` usa igualdad abstracta y descarta tanto null como undefined. Dentro del bloque, x solo puede ser string.',
        incorrectFeedback:
          'No es correcto. `!= null` con igualdad abstracta descarta tanto null como undefined en un solo paso. Dentro del if, el único tipo posible es string.',
      },
      {
        question:
          '¿Cuándo es útil usar switch para narrowing en lugar de if/else if?',
        options: [
          'Solo cuando los valores son números',
          'Cuando hay muchos valores posibles de un union type y cada uno necesita lógica diferente',
          'Switch no hace narrowing, solo if hace narrowing',
          'Cuando los tipos son objetos complejos',
        ],
        correctAnswer:
          'Cuando hay muchos valores posibles de un union type y cada uno necesita lógica diferente',
        correctFeedback:
          'Correcto. Switch es más legible que múltiples if/else if cuando hay varios valores posibles. TypeScript aplica narrowing en cada case igual que con if.',
        incorrectFeedback:
          'No es correcto. Switch también aplica narrowing en TypeScript. Es especialmente útil cuando tienes muchos valores literales en un union type, haciendo el código más limpio que múltiples if/else if.',
      },
      {
        question:
          '¿Qué herramienta de TypeScript te avisa si olvidaste cubrir un caso en un switch con literal types?',
        options: [
          'eslint',
          'El compilador de TypeScript, cuando el tipo resultante se asigna a never',
          'No hay herramienta para eso',
          'Solo si usas strictNullChecks',
        ],
        correctAnswer:
          'El compilador de TypeScript, cuando el tipo resultante se asigna a never',
        correctFeedback:
          'Correcto. Si en el default de un switch asignas el valor a una variable de tipo `never`, TypeScript te avisará si hay un caso sin cubrir. Es una técnica llamada "exhaustive check".',
        incorrectFeedback:
          'No es correcto. TypeScript puede detectar casos no cubiertos en un switch. Una técnica común es usar `never` en el default: si el union no está completamente cubierto, TypeScript da error al intentar asignar a `never`.',
      },
    ],
  },

  // ── Lección 84 ───────────────────────────────────────────────────────────
  {
    slug: 'narrowing-operador-in',
    title: 'Narrowing con el operador in',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 84,
    description:
      'Aprende a usar el operador in para verificar si una propiedad existe dentro de un objeto.',
    explanation: `El operador \`in\` verifica si una propiedad existe en un objeto. TypeScript lo entiende como una técnica de narrowing para distinguir entre diferentes tipos de objeto en un union.

**Sintaxis básica**

\`\`\`ts
"propiedad" in objeto
\`\`\`

Devuelve \`true\` si la propiedad existe en el objeto o en su cadena de prototipos.

**Narrowing con in para distinguir tipos de objeto**

Cuando tienes un union de dos tipos de objeto, cada uno con propiedades diferentes, puedes usar \`in\` para saber cuál es cuál:

\`\`\`ts
interface Circulo {
  radio: number
}

interface Rectangulo {
  ancho: number
  alto: number
}

type Forma = Circulo | Rectangulo

function calcularArea(forma: Forma): number {
  if ('radio' in forma) {
    // TypeScript sabe: forma es Circulo
    return Math.PI * forma.radio ** 2
  } else {
    // TypeScript sabe: forma es Rectangulo
    return forma.ancho * forma.alto
  }
}
\`\`\`

**¿Por qué funciona esto?**

TypeScript sabe que \`Rectangulo\` no tiene la propiedad \`radio\`. Entonces si \`"radio" in forma\` es \`true\`, el tipo debe ser \`Circulo\`. Si es \`false\`, debe ser \`Rectangulo\`.

**Requisito importante:** la propiedad que usas para discriminar debe existir solo en uno de los tipos, o tener diferente tipo en cada uno.

**Ejemplo práctico con roles de usuario**

\`\`\`ts
interface UsuarioBase {
  nombre: string
  email: string
}

interface Admin extends UsuarioBase {
  permisos: string[]
}

interface ClienteReg extends UsuarioBase {
  puntosFidelidad: number
}

type Usuario = Admin | ClienteReg

function obtenerInfo(usuario: Usuario): string {
  if ('permisos' in usuario) {
    // TypeScript sabe: usuario es Admin
    return \`Admin con \${usuario.permisos.length} permisos\`
  } else {
    // TypeScript sabe: usuario es ClienteReg
    return \`Cliente con \${usuario.puntosFidelidad} puntos\`
  }
}
\`\`\`

**Combinando in con propiedades opcionales**

Si una propiedad es opcional en un tipo y no existe en otro:

\`\`\`ts
interface ConFoto {
  nombre: string
  foto: string
}

interface SinFoto {
  nombre: string
}

function mostrar(perfil: ConFoto | SinFoto): void {
  if ('foto' in perfil) {
    // TypeScript sabe: perfil es ConFoto
    console.log('Foto:', perfil.foto)
  }
  console.log('Nombre:', perfil.nombre)
}
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

interface ProductoFisico {
  nombre: string
  peso: number
  dimensiones: string
}

interface ProductoDigital {
  nombre: string
  urlDescarga: string
  tamanioMB: number
}

type Producto = ProductoFisico | ProductoDigital

// ── archivo: main.ts ─────────────────────────────────────────────────────

function procesarEnvio(producto: Producto): string {
  if ('peso' in producto) {
    // TypeScript sabe: ProductoFisico
    return \`Enviar \${producto.nombre}: \${producto.peso}kg, dims: \${producto.dimensiones}\`
  } else {
    // TypeScript sabe: ProductoDigital
    return \`Enviar enlace de \${producto.nombre}: \${producto.urlDescarga}\`
  }
}

const laptop: ProductoFisico = {
  nombre: 'Laptop Pro',
  peso: 1.8,
  dimensiones: '35x25x2cm',
}

const curso: ProductoDigital = {
  nombre: 'Curso TypeScript',
  urlDescarga: 'https://example.com/curso.zip',
  tamanioMB: 450,
}

console.log(procesarEnvio(laptop))  // → Enviar Laptop Pro: 1.8kg, dims: 35x25x2cm
console.log(procesarEnvio(curso))   // → Enviar enlace de Curso TypeScript: ...

// ── Distinción de notificaciones por tipo ─────────────────────────────────

interface NotificacionEmail {
  destinatario: string
  asunto: string
  cuerpo: string
}

interface NotificacionPush {
  dispositivoId: string
  titulo: string
  icono?: string
}

type Notificacion = NotificacionEmail | NotificacionPush

function enviarNotificacion(n: Notificacion): void {
  if ('destinatario' in n) {
    // TypeScript sabe: NotificacionEmail
    console.log(\`Email a \${n.destinatario}: \${n.asunto}\`)
  } else {
    // TypeScript sabe: NotificacionPush
    console.log(\`Push a dispositivo \${n.dispositivoId}: \${n.titulo}\`)
  }
}`,
    keyPoints: [
      'El operador in verifica si una propiedad existe en un objeto y TypeScript lo usa para narrowing.',
      'Es ideal para distinguir entre tipos de objeto que tienen propiedades diferentes.',
      'La propiedad usada para discriminar debe ser exclusiva de uno de los tipos del union.',
      'Funciona con interfaces, type aliases y objetos en general.',
      'Para tipos con las mismas propiedades pero diferentes tipos de valores, in no ayuda — usa otros métodos.',
    ],
    exercise: {
      description:
        'Crea dos interfaces: `TarjetaCredito` con propiedades `numero: string` y `cvv: string`, y `TransferenciaBancaria` con propiedades `cuenta: string` y `banco: string`. Crea un tipo `MetodoPago = TarjetaCredito | TransferenciaBancaria`. Escribe una función `procesarPago` que use el operador `in` para identificar el tipo y devuelva un string describiendo el pago.',
      hint: 'Usa una propiedad exclusiva de una interfaz, como "cvv" en TarjetaCredito o "banco" en TransferenciaBancaria, para hacer el narrowing con `in`.',
    },
    quiz: [
      {
        question:
          '¿Qué hace el operador `in` cuando se usa para narrowing en TypeScript?',
        options: [
          'Itera sobre las propiedades de un objeto',
          'Verifica si una propiedad existe en un objeto, y TypeScript usa esa información para reducir el tipo',
          'Importa módulos en TypeScript',
          'Verifica si un valor está dentro de un arreglo',
        ],
        correctAnswer:
          'Verifica si una propiedad existe en un objeto, y TypeScript usa esa información para reducir el tipo',
        correctFeedback:
          'Correcto. `"propiedad" in objeto` verifica la existencia de esa propiedad, y TypeScript usa el resultado para narrowing en el bloque correspondiente.',
        incorrectFeedback:
          'No es correcto. El operador `in` para narrowing verifica si una propiedad existe en un objeto. TypeScript usa esta información para determinar cuál de los tipos del union tiene esa propiedad.',
      },
      {
        question:
          'Tienes `type Figura = Circulo | Cuadrado` donde Circulo tiene `radio` y Cuadrado tiene `lado`. ¿Cómo distingues entre ellos con `in`?',
        options: [
          'if (Circulo in figura)',
          'if ("radio" in figura)',
          'if (figura.tipo === "circulo")',
          'if (typeof figura === "Circulo")',
        ],
        correctAnswer: 'if ("radio" in figura)',
        correctFeedback:
          'Correcto. `"radio" in figura` verifica si la propiedad radio existe. Si existe, TypeScript sabe que es Circulo. La propiedad va entre comillas como string.',
        incorrectFeedback:
          'No es correcto. La sintaxis correcta es `"radio" in figura` — el nombre de la propiedad como string, seguido de `in`, y luego el objeto. `typeof` no funciona para distinguir objetos personalizados.',
      },
      {
        question:
          '¿Cuándo NO es útil usar `in` para narrowing?',
        options: [
          'Cuando los tipos tienen propiedades con el mismo nombre y tipo',
          'Cuando hay más de dos tipos en el union',
          'Cuando los objetos tienen propiedades opcionales',
          'Cuando los tipos son interfaces y no type aliases',
        ],
        correctAnswer:
          'Cuando los tipos tienen propiedades con el mismo nombre y tipo',
        correctFeedback:
          'Correcto. Si ambos tipos tienen la misma propiedad con el mismo nombre, `in` no puede distinguirlos. Necesitas otra propiedad discriminante o usar un campo tipo discriminante.',
        incorrectFeedback:
          'No es correcto. `in` no ayuda cuando ambos tipos tienen la misma propiedad. Para distinguirlos necesitas una propiedad exclusiva de cada tipo, o usar un campo discriminante como `tipo: "circulo" | "cuadrado"`.',
      },
      {
        question:
          '¿Qué hace TypeScript con el tipo en el bloque `else` cuando usas `in` para narrowing?\n\n```ts\ntype Res = { data: string } | { error: string }\nfunction fn(res: Res) {\n  if ("data" in res) { /* ... */ }\n  else { /* ¿qué tipo es res aquí? */ }\n}\n```',
        options: [
          'res sigue siendo Res (sin cambios)',
          'res es { data: string } en el else',
          'res es { error: string } en el else',
          'res es never en el else',
        ],
        correctAnswer: 'res es { error: string } en el else',
        correctFeedback:
          'Correcto. Si `"data" in res` es false en el else, TypeScript descarta el tipo `{ data: string }` y sabe que `res` es `{ error: string }`.',
        incorrectFeedback:
          'No es correcto. TypeScript aplica narrowing: si en el if cubrimos el caso con "data", en el else solo puede estar el otro tipo del union. `res` es `{ error: string }` en el else.',
      },
      {
        question:
          '¿Es válido usar `in` con una variable que tiene tipo `unknown`?',
        options: [
          'Sí, siempre funciona con cualquier tipo',
          'No, TypeScript da error porque unknown no garantiza ser un objeto',
          'Sí, pero solo si usas una aserción de tipo antes',
          'Depende de la versión de TypeScript',
        ],
        correctAnswer:
          'No, TypeScript da error porque unknown no garantiza ser un objeto',
        correctFeedback:
          'Correcto. Para usar `in`, el valor debe poder ser un objeto. Con `unknown`, TypeScript no puede garantizarlo. Primero debes verificar que es un objeto: `if (typeof x === "object" && x !== null && "prop" in x)`.',
        incorrectFeedback:
          'No es correcto. `in` requiere que el lado derecho sea un objeto. Con `unknown`, TypeScript no sabe si es un objeto o no, así que da error. Debes verificar primero: `typeof x === "object" && x !== null`.',
      },
    ],
  },

  // ── Lección 85 ───────────────────────────────────────────────────────────
  {
    slug: 'narrowing-instanceof',
    title: 'Narrowing con instanceof',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 85,
    description:
      'Aprende a usar instanceof para verificar si un valor pertenece a una clase o constructor específico.',
    explanation: `El operador \`instanceof\` verifica si un objeto fue creado con una clase o función constructora específica. TypeScript lo entiende como narrowing para tipos basados en clases.

**Sintaxis**

\`\`\`ts
valor instanceof ClaseOConstructor
\`\`\`

Devuelve \`true\` si \`valor\` es una instancia de esa clase.

**Ejemplo con clases**

\`\`\`ts
class Perro {
  ladrar(): void {
    console.log('¡Guau!')
  }
}

class Gato {
  maullar(): void {
    console.log('¡Miau!')
  }
}

type Animal = Perro | Gato

function hacerRuido(animal: Animal): void {
  if (animal instanceof Perro) {
    // TypeScript sabe: animal es Perro
    animal.ladrar()
  } else {
    // TypeScript sabe: animal es Gato
    animal.maullar()
  }
}
\`\`\`

**Caso de uso común: manejo de errores**

El manejo de errores en TypeScript usa \`instanceof\` frecuentemente:

\`\`\`ts
function manejarError(error: unknown): string {
  if (error instanceof Error) {
    // TypeScript sabe: error es un objeto Error con .message
    return \`Error: \${error.message}\`
  }
  return 'Ocurrió un error desconocido'
}
\`\`\`

**instanceof con herencia**

\`instanceof\` también funciona con clases que extienden otras:

\`\`\`ts
class ErrorRed extends Error {
  statusCode: number
  constructor(mensaje: string, codigo: number) {
    super(mensaje)
    this.statusCode = codigo
  }
}

function procesar(err: Error): string {
  if (err instanceof ErrorRed) {
    // TypeScript sabe: err es ErrorRed (que extends Error)
    return \`Error \${err.statusCode}: \${err.message}\`
  }
  return \`Error genérico: \${err.message}\`
}
\`\`\`

**¿Cuándo usar instanceof vs in?**

- Usa \`instanceof\` cuando trabajas con **clases** (objetos creados con \`new\`).
- Usa \`in\` cuando trabajas con **interfaces** o **objetos literales** (TypeScript no genera constructores para interfaces en tiempo de ejecución).

**Importante:** \`instanceof\` no funciona con interfaces porque las interfaces no existen en el JavaScript compilado — solo existen durante el desarrollo TypeScript.

\`\`\`ts
interface Producto { nombre: string }

// INCORRECTO: interfaces no existen en tiempo de ejecución
// if (dato instanceof Producto) { ... }  // Error

// CORRECTO: usa in para interfaces
if ('nombre' in dato) { ... }
\`\`\``,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// ── Clases con instanceof ─────────────────────────────────────────────────

class FormularioLogin {
  tipo = 'login'
  email: string
  password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
}

class FormularioRegistro {
  tipo = 'registro'
  email: string
  password: string
  nombre: string

  constructor(email: string, password: string, nombre: string) {
    this.email = email
    this.password = password
    this.nombre = nombre
  }
}

type FormularioAuth = FormularioLogin | FormularioRegistro

function procesarFormulario(form: FormularioAuth): void {
  if (form instanceof FormularioLogin) {
    // TypeScript sabe: form es FormularioLogin
    console.log(\`Iniciando sesión con: \${form.email}\`)
  } else {
    // TypeScript sabe: form es FormularioRegistro
    console.log(\`Registrando a \${form.nombre} con: \${form.email}\`)
  }
}

const login = new FormularioLogin('ana@email.com', '1234')
const registro = new FormularioRegistro('luis@email.com', 'abcd', 'Luis')

procesarFormulario(login)     // → Iniciando sesión con: ana@email.com
procesarFormulario(registro)  // → Registrando a Luis con: luis@email.com

// ── Manejo de errores con instanceof ─────────────────────────────────────

class ErrorValidacion extends Error {
  campos: string[]

  constructor(mensaje: string, campos: string[]) {
    super(mensaje)
    this.campos = campos
    this.name = 'ErrorValidacion'
  }
}

function manejarError(error: unknown): string {
  if (error instanceof ErrorValidacion) {
    return \`Error de validación en: \${error.campos.join(', ')}\`
  }
  if (error instanceof Error) {
    return \`Error: \${error.message}\`
  }
  return 'Error desconocido'
}

try {
  throw new ErrorValidacion('Datos inválidos', ['email', 'nombre'])
} catch (e) {
  console.log(manejarError(e))  // → Error de validación en: email, nombre
}`,
    keyPoints: [
      'instanceof verifica si un valor es instancia de una clase y TypeScript aplica narrowing en consecuencia.',
      'Solo funciona con clases y constructores — no con interfaces (que no existen en tiempo de ejecución).',
      'Es el método preferido para narrowing con clases personalizadas y objetos Error.',
      'En manejo de errores con catch (e: unknown), instanceof Error es el patrón correcto.',
      'La herencia funciona: si B extends A, entonces b instanceof A también es true.',
    ],
    exercise: {
      description:
        'Crea dos clases: `CuentaAhorro` con propiedad `tasaInteres: number`, y `CuentaCorriente` con propiedad `limiteDescubierto: number`. Ambas tienen `saldo: number`. Escribe una función `describir` que reciba `cuenta: CuentaAhorro | CuentaCorriente` y use `instanceof` para mostrar información específica de cada tipo.',
      hint: 'Usa `cuenta instanceof CuentaAhorro` para identificar el tipo. En el bloque if, TypeScript sabrá que es CuentaAhorro y podrás acceder a tasaInteres.',
    },
    quiz: [
      {
        question: '¿Cuándo debes usar instanceof en lugar de in para narrowing?',
        options: [
          'Cuando trabajas con interfaces de TypeScript',
          'Cuando trabajas con clases y objetos creados con new',
          'Cuando el tipo es string o number',
          'Cuando la propiedad es opcional',
        ],
        correctAnswer: 'Cuando trabajas con clases y objetos creados con new',
        correctFeedback:
          'Correcto. instanceof verifica la cadena de prototipos de un objeto, lo que funciona con clases. Las interfaces no generan código en tiempo de ejecución, así que instanceof no funciona con ellas.',
        incorrectFeedback:
          'No es correcto. instanceof funciona con clases (objetos creados con new) porque verifica la cadena de prototipos. Para interfaces, que no existen en tiempo de ejecución, usa el operador in.',
      },
      {
        question:
          '¿Por qué no puedes usar instanceof con interfaces de TypeScript?',
        options: [
          'Porque instanceof solo funciona con números',
          'Porque las interfaces no generan código en el JavaScript compilado — solo existen en TypeScript',
          'Porque TypeScript lo prohíbe por seguridad',
          'Porque instanceof es más lento con interfaces',
        ],
        correctAnswer:
          'Porque las interfaces no generan código en el JavaScript compilado — solo existen en TypeScript',
        correctFeedback:
          'Correcto. Las interfaces son una construcción de TypeScript que solo existe durante el desarrollo. Al compilar, desaparecen. instanceof verifica en tiempo de ejecución, donde las interfaces ya no existen.',
        incorrectFeedback:
          'No es correcto. Las interfaces de TypeScript son "borradas" al compilar a JavaScript. No generan ningún constructor ni objeto. Por eso instanceof no puede verificarlas — solo existe durante el desarrollo.',
      },
      {
        question:
          '¿Qué tipo tiene `error` dentro de `if (error instanceof Error)`?',
        options: [
          'unknown',
          'Error',
          'any',
          'object',
        ],
        correctAnswer: 'Error',
        correctFeedback:
          'Correcto. instanceof aplica narrowing: dentro del if, TypeScript sabe que error es de tipo Error y permite acceder a sus propiedades como .message, .name, y .stack.',
        incorrectFeedback:
          'No es correcto. instanceof hace narrowing del tipo. Dentro del if, TypeScript reduce el tipo a Error, permitiéndote acceder a propiedades como .message que son específicas de Error.',
      },
      {
        question:
          'Tienes `class B extends A`. ¿Qué devuelve `new B() instanceof A`?',
        options: [
          'false, porque B no es exactamente A',
          'true, porque instanceof verifica toda la cadena de herencia',
          'undefined',
          'Depende de la implementación de A',
        ],
        correctAnswer:
          'true, porque instanceof verifica toda la cadena de herencia',
        correctFeedback:
          'Correcto. instanceof verifica toda la cadena de prototipos. Si B extiende A, entonces una instancia de B también es instancia de A. Esto es la herencia funcionando.',
        incorrectFeedback:
          'No es correcto. instanceof verifica la cadena de prototipos completa. Si B extiende A, `new B() instanceof A` es true porque B hereda de A. Esto es importante en el manejo de errores con subclases de Error.',
      },
      {
        question:
          '¿Cuál es el patrón correcto para manejar errores de tipo unknown en un bloque catch?',
        options: [
          'catch (e: Error) { console.log(e.message) }',
          'catch (e) { console.log(e.message) }',
          'catch (e: unknown) { if (e instanceof Error) { console.log(e.message) } }',
          'catch (e: any) { console.log(e.message) }',
        ],
        correctAnswer:
          'catch (e: unknown) { if (e instanceof Error) { console.log(e.message) } }',
        correctFeedback:
          'Correcto. En TypeScript moderno, el tipo de catch es unknown. Debes verificar con instanceof Error antes de acceder a .message. Es la forma más segura.',
        incorrectFeedback:
          'No es correcto. En TypeScript moderno el error en catch es unknown. No puedes acceder a .message directamente. El patrón correcto es verificar con instanceof Error primero.',
      },
    ],
  },

  // ── Lección 86 ───────────────────────────────────────────────────────────
  {
    slug: 'narrowing-en-funciones',
    title: 'Narrowing en funciones',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 86,
    description:
      'Aprende a aplicar narrowing dentro de funciones que reciben union types.',
    explanation: `El narrowing es especialmente valioso dentro de funciones, ya que los parámetros frecuentemente pueden ser de varios tipos. Combinar las técnicas aprendidas te permite escribir funciones robustas y claras.

**Función que acepta múltiples tipos de entrada**

\`\`\`ts
type EntradaUsuario = string | number | null

function procesarEntrada(entrada: EntradaUsuario): string {
  if (entrada === null) {
    return 'Sin entrada'
  }

  if (typeof entrada === 'string') {
    return entrada.trim().toUpperCase()
  }

  // TypeScript sabe: es number aquí
  return entrada.toFixed(2)
}
\`\`\`

**Narrowing con objetos en parámetros**

\`\`\`ts
interface Estudiante {
  nombre: string
  notas: number[]
}

interface Profesor {
  nombre: string
  materia: string
}

type Persona = Estudiante | Profesor

function saludar(persona: Persona): string {
  if ('notas' in persona) {
    const promedio = persona.notas.reduce((a, b) => a + b, 0) / persona.notas.length
    return \`Hola \${persona.nombre}, tu promedio es \${promedio.toFixed(1)}\`
  } else {
    return \`Hola \${persona.nombre}, ¿cómo va \${persona.materia}?\`
  }
}
\`\`\`

**Funciones con retorno de tipo union**

A veces una función devuelve tipos diferentes. El caller tiene que hacer narrowing:

\`\`\`ts
function buscarProducto(id: number): Producto | null {
  // ...busca en la base de datos
  return id > 0 ? { nombre: 'Laptop', precio: 999 } : null
}

const resultado = buscarProducto(1)

if (resultado !== null) {
  // TypeScript sabe: resultado es Producto
  console.log(resultado.nombre)
}
\`\`\`

**Patrón de función con varios tipos de salida según el input**

\`\`\`ts
function calcular(a: number, b: number, operacion: 'suma' | 'division'): number | string {
  if (operacion === 'division') {
    if (b === 0) return 'Error: división por cero'
    return a / b
  }
  return a + b
}

const resultado = calcular(10, 2, 'division')

if (typeof resultado === 'string') {
  console.log('Error:', resultado)
} else {
  console.log('Resultado:', resultado.toFixed(2))
}
\`\`\`

**Narrowing en callbacks**

El narrowing también funciona dentro de callbacks:

\`\`\`ts
const valores: (string | number)[] = ['a', 1, 'b', 2, 3]

const soloStrings = valores.filter((v): v is string => typeof v === 'string')
// soloStrings es string[]

valores.forEach((v) => {
  if (typeof v === 'string') {
    console.log(v.toUpperCase()) // TypeScript sabe: string aquí
  }
})
\`\`\``,
    codeExample: `// ── archivo: utils.ts ────────────────────────────────────────────────────

type ValorFormulario = string | number | boolean | null | undefined

function formatearCampo(valor: ValorFormulario, etiqueta: string): string {
  if (valor === null || valor === undefined) {
    return \`\${etiqueta}: (sin valor)\`
  }

  if (typeof valor === 'boolean') {
    return \`\${etiqueta}: \${valor ? 'Sí' : 'No'}\`
  }

  if (typeof valor === 'number') {
    return \`\${etiqueta}: \${valor.toLocaleString()}\`
  }

  // TypeScript sabe: valor es string aquí
  return \`\${etiqueta}: \${valor.trim()}\`
}

console.log(formatearCampo('  Ana  ', 'Nombre'))   // → Nombre: Ana
console.log(formatearCampo(42000, 'Salario'))       // → Salario: 42.000
console.log(formatearCampo(true, 'Activo'))         // → Activo: Sí
console.log(formatearCampo(null, 'Empresa'))        // → Empresa: (sin valor)

// ── Función con union de objetos ──────────────────────────────────────────

interface RespuestaExitosa {
  status: 'ok'
  datos: unknown
  total: number
}

interface RespuestaError {
  status: 'error'
  mensaje: string
  codigo: number
}

type RespuestaAPI = RespuestaExitosa | RespuestaError

function manejarRespuesta(resp: RespuestaAPI): void {
  if (resp.status === 'ok') {
    // TypeScript sabe: RespuestaExitosa
    console.log(\`Éxito: \${resp.total} resultados\`)
  } else {
    // TypeScript sabe: RespuestaError
    console.log(\`Error \${resp.codigo}: \${resp.mensaje}\`)
  }
}

const exitosa: RespuestaExitosa = { status: 'ok', datos: [], total: 5 }
const error: RespuestaError = { status: 'error', mensaje: 'No encontrado', codigo: 404 }

manejarRespuesta(exitosa)  // → Éxito: 5 resultados
manejarRespuesta(error)    // → Error 404: No encontrado`,
    keyPoints: [
      'Dentro de funciones, el narrowing permite trabajar con cada tipo del union de forma segura.',
      'Combina typeof, in, instanceof y comparaciones según el tipo de datos que proceses.',
      'Las guard clauses (retornos anticipados) son el patrón más limpio para funciones con union types.',
      'El patrón de campo discriminante (status: "ok" | "error") es muy común en respuestas de API.',
      'Cuando una función devuelve un union type, el caller también necesita hacer narrowing antes de usar el resultado.',
    ],
    exercise: {
      description:
        'Crea una función `calcularImpuesto` que reciba `ingreso: number | string | null`. Si es null, lanza un error o devuelve 0. Si es string, intenta convertirlo a número con parseFloat — si no es un número válido (isNaN), devuelve 0. Si es number (o conversión exitosa), calcula el 21% de impuesto y devuelve el resultado redondeado a 2 decimales.',
      hint: 'Maneja null primero con guard clause. Luego maneja string con typeof y parseFloat. Al final, calcula con el número. Puedes usar Number.isNaN para verificar si parseFloat falló.',
    },
    quiz: [
      {
        question:
          '¿Cuál es la ventaja de usar narrowing dentro de funciones con parámetros de tipo union?',
        options: [
          'Hace el código más lento pero más seguro',
          'Permite usar métodos y propiedades específicas del tipo reducido sin casting',
          'Evita tener que escribir tipos en los parámetros',
          'Solo funciona con clases, no con tipos primitivos',
        ],
        correctAnswer:
          'Permite usar métodos y propiedades específicas del tipo reducido sin casting',
        correctFeedback:
          'Correcto. El narrowing permite trabajar con el tipo específico de forma segura, sin necesidad de usar `as` para forzar el tipo.',
        incorrectFeedback:
          'No es correcto. La ventaja del narrowing es que después de una verificación, puedes usar métodos específicos del tipo (como .toUpperCase() para string) sin hacer ningún casting forzado.',
      },
      {
        question:
          '¿Cuál es la forma más limpia de manejar múltiples tipos en una función?',
        options: [
          'Usar any como tipo del parámetro para evitar problemas',
          'Usar guard clauses para eliminar tipos imposibles al inicio y trabajar con el tipo reducido',
          'Convertir siempre todo a string al inicio',
          'Usar múltiples funciones separadas para cada tipo',
        ],
        correctAnswer:
          'Usar guard clauses para eliminar tipos imposibles al inicio y trabajar con el tipo reducido',
        correctFeedback:
          'Correcto. Las guard clauses eliminan los casos especiales al inicio (retornando temprano), y el resto del código trabaja con el tipo ya reducido, sin anidamiento excesivo.',
        incorrectFeedback:
          'No es correcto. Usar `any` pierde toda la seguridad de tipos. La forma más limpia es usar guard clauses: tratar cada caso especial al inicio con un return temprano, y trabajar con el tipo reducido en el cuerpo principal.',
      },
      {
        question:
          'Tienes una función que devuelve `Producto | null`. ¿Cómo usas el resultado de forma segura?',
        options: [
          'const prod = buscar(1); console.log(prod.nombre)',
          'const prod = buscar(1) as Producto; console.log(prod.nombre)',
          'const prod = buscar(1); if (prod !== null) { console.log(prod.nombre) }',
          'const prod = buscar(1)!; console.log(prod.nombre)',
        ],
        correctAnswer:
          'const prod = buscar(1); if (prod !== null) { console.log(prod.nombre) }',
        correctFeedback:
          'Correcto. Verificar con `if (prod !== null)` es el patrón seguro. TypeScript sabrá que dentro del bloque, prod es Producto y puedes acceder a sus propiedades.',
        incorrectFeedback:
          'No es correcto. Acceder directamente, usar `as`, o usar `!` (non-null assertion) sin verificar primero puede causar errores en tiempo de ejecución. Lo seguro es verificar con if antes de usar.',
      },
      {
        question:
          '¿Qué es el patrón de campo discriminante en union types de objetos?',
        options: [
          'Usar any en el campo que puede variar',
          'Tener un campo como `tipo` o `status` con valor literal diferente en cada tipo del union',
          'Eliminar propiedades comunes entre los tipos',
          'Usar clases en lugar de interfaces',
        ],
        correctAnswer:
          'Tener un campo como `tipo` o `status` con valor literal diferente en cada tipo del union',
        correctFeedback:
          'Correcto. Un campo discriminante como `status: "ok" | "error"` permite a TypeScript saber exactamente qué tipo es cada variante del union, haciendo el narrowing muy claro.',
        incorrectFeedback:
          'No es correcto. El campo discriminante es una propiedad con un literal type diferente en cada variante del union. Por ejemplo `{ tipo: "círculo", radio: number }` y `{ tipo: "cuadrado", lado: number }`. TypeScript lo usa automáticamente para narrowing.',
      },
      {
        question:
          '¿Cuál de estas funciones aplica narrowing de forma correcta?\n\n```ts\nfunction fn(x: string | number): string {\n  return x.toUpperCase()\n}\n```',
        options: [
          'La función es correcta porque TypeScript entiende que x puede ser string',
          'La función tiene un error: number no tiene toUpperCase, y TypeScript lo detecta',
          'La función funciona porque toUpperCase convierte números automáticamente',
          'No hay error porque TypeScript convierte number a string antes de llamar toUpperCase',
        ],
        correctAnswer:
          'La función tiene un error: number no tiene toUpperCase, y TypeScript lo detecta',
        correctFeedback:
          'Correcto. TypeScript detecta que number no tiene .toUpperCase(). Para que funcione, necesitas hacer narrowing: verificar que x es string antes de llamar toUpperCase.',
        incorrectFeedback:
          'No es correcto. TypeScript da error porque `number` no tiene `.toUpperCase()`. Para usar ese método, necesitas narrowing: `if (typeof x === "string") { return x.toUpperCase() }`.',
      },
    ],
  },

  // ── Lección 87 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-narrowing',
    title: 'Errores comunes con narrowing',
    module: 'Narrowing',
    moduleNumber: 11,
    order: 87,
    description:
      'Aprende a evitar errores como acceder a propiedades antes de verificar el tipo correcto.',
    explanation: `El narrowing es poderoso, pero hay errores comunes que debes conocer para evitar bugs difíciles de detectar.

**Error 1: Acceder a propiedades sin verificar el tipo**

\`\`\`ts
function procesar(valor: string | number): void {
  console.log(valor.toUpperCase()) // Error: number no tiene toUpperCase
}

// Correcto:
function procesar(valor: string | number): void {
  if (typeof valor === 'string') {
    console.log(valor.toUpperCase())
  }
}
\`\`\`

**Error 2: Confiar en typeof para null**

\`\`\`ts
function fn(x: string | null): void {
  if (typeof x === 'object') {
    // INCORRECTO: typeof null === "object"
    // x podría ser null aquí, no necesariamente un objeto
    console.log(x.toUpperCase()) // ¡Error en tiempo de ejecución!
  }
}

// Correcto:
function fn(x: string | null): void {
  if (x !== null) {
    console.log(x.toUpperCase())
  }
}
\`\`\`

**Error 3: Olvidar que el narrowing no persiste después de llamadas asíncronas**

\`\`\`ts
let datos: string | null = obtenerDatos()

if (datos !== null) {
  setTimeout(() => {
    // PELIGROSO: datos podría haber cambiado a null
    // entre el if y este callback
    console.log(datos!.toUpperCase()) // TypeScript puede quejarse
  }, 1000)
}

// Mejor:
if (datos !== null) {
  const datosSeguro = datos  // captura el valor
  setTimeout(() => {
    console.log(datosSeguro.toUpperCase()) // TypeScript lo sabe como string
  }, 1000)
}
\`\`\`

**Error 4: typeof con objetos no distingue entre tipos**

\`\`\`ts
function fn(x: { nombre: string } | { email: string }): void {
  if (typeof x === 'object') {
    // TypeScript aún no sabe si es el primer o segundo tipo
    // typeof no ayuda aquí
  }

  // Correcto: usa in
  if ('nombre' in x) {
    console.log(x.nombre)
  }
}
\`\`\`

**Error 5: instanceof con interfaces (no clases)**

\`\`\`ts
interface Perro { ladrar(): void }

// INCORRECTO: interfaces no existen en tiempo de ejecución
// if (animal instanceof Perro) { ... }  // Error de compilación

// Correcto: usa in
if ('ladrar' in animal) { ... }
\`\`\`

**Error 6: Narrowing "demasiado optimista" con any**

\`\`\`ts
function fn(x: any): void {
  if (typeof x === 'string') {
    console.log(x.toUpperCase())
  }
  // Fuera del if, x sigue siendo any
  // TypeScript no avisa si accedes a propiedades incorrectas
}

// Mejor usar unknown:
function fn(x: unknown): void {
  if (typeof x === 'string') {
    console.log(x.toUpperCase()) // Seguro aquí
  }
  // Fuera del if, TypeScript SI te avisa si intentas usar x como string
}
\`\`\`

**Resumen de errores a evitar**

| Error | Problema | Solución |
|---|---|---|
| Acceder sin verificar | Error en tiempo de ejecución | Hacer narrowing antes |
| typeof null | typeof null es "object" | Comparar con null directamente |
| typeof con objetos | No distingue tipos personalizados | Usar in o instanceof |
| instanceof con interfaces | Las interfaces no existen en runtime | Usar in |
| any vs unknown | any no avisa de errores | Preferir unknown |`,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

// ── Error 1: acceder sin verificar ───────────────────────────────────────

// INCORRECTO ❌
function procesarMal(valor: string | number): void {
  // console.log(valor.toUpperCase())  // Error: number no tiene este método
}

// CORRECTO ✓
function procesarBien(valor: string | number): void {
  if (typeof valor === 'string') {
    console.log(valor.toUpperCase())
  } else {
    console.log(valor.toFixed(2))
  }
}

// ── Error 2: confiar en typeof para null ──────────────────────────────────

// INCORRECTO ❌
function longitudMal(texto: string | null): number {
  if (typeof texto === 'object') {
    // typeof null === "object" — el if pasa también cuando texto es null
    // return texto.length  // ¡TypeError en tiempo de ejecución!
    return -1
  }
  return texto.length  // Error: texto podría ser null aquí también
}

// CORRECTO ✓
function longitudBien(texto: string | null): number {
  if (texto !== null) {
    return texto.length  // TypeScript sabe: texto es string
  }
  return 0
}

// ── Error 3: typeof no distingue tipos de objeto ─────────────────────────

interface ConEmail { email: string }
interface ConTelefono { telefono: string }
type Contacto = ConEmail | ConTelefono

// INCORRECTO ❌ — typeof solo dice "object", no distingue
function contactoMal(c: Contacto): void {
  if (typeof c === 'object') {
    // TypeScript aún no sabe si tiene email o telefono
    // c.email  // puede dar error
  }
}

// CORRECTO ✓
function contactoBien(c: Contacto): void {
  if ('email' in c) {
    console.log('Email:', c.email)
  } else {
    console.log('Teléfono:', c.telefono)
  }
}

// ── Prefiere unknown sobre any para narrowing seguro ─────────────────────

// Con any: TypeScript no avisa de errores fuera del narrowing
function procesarAny(dato: any): void {
  if (typeof dato === 'string') {
    console.log(dato.toUpperCase())
  }
  dato.cualquierCosa()  // TypeScript NO avisa — ¡peligroso!
}

// Con unknown: TypeScript SÍ avisa
function procesarUnknown(dato: unknown): void {
  if (typeof dato === 'string') {
    console.log(dato.toUpperCase())  // Seguro
  }
  // dato.cualquierCosa()  // Error: no puedes usar dato sin verificar antes
}`,
    keyPoints: [
      'typeof null devuelve "object" — siempre compara con null directamente: valor !== null.',
      'typeof no distingue entre tipos de objetos personalizados — usa in o instanceof para eso.',
      'instanceof no funciona con interfaces — solo con clases.',
      'El narrowing no garantiza que una variable no cambie más adelante (ej: asincronía). Captura el valor si es necesario.',
      'Prefiere unknown sobre any cuando no sabes el tipo: unknown te obliga a hacer narrowing, any no.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los 3 errores en este código:\n\n```ts\nfunction describir(entrada: string | number | null): string {\n  if (typeof entrada === "object") {\n    return "Sin valor"\n  }\n  if (typeof entrada === "object") {\n    return "Número: " + entrada.toFixed(2)\n  }\n  return entrada.toUpperCase()\n}\n```',
      hint: 'Error 1: typeof null es "object", no "null". Error 2: typeof number no es "object". Error 3: no hay verificación antes de llamar a toUpperCase — entrada podría ser number. Reescribe usando comparaciones correctas.',
    },
    quiz: [
      {
        question:
          '¿Por qué `if (typeof x === "object")` no es una verificación segura para `null` cuando `x: string | null`?',
        options: [
          'Porque typeof no funciona con null',
          'Porque typeof null devuelve "object", no "null", así que el if también pasa cuando x es null',
          'Porque TypeScript prohíbe usar typeof con null',
          'Porque null y undefined son el mismo tipo',
        ],
        correctAnswer:
          'Porque typeof null devuelve "object", no "null", así que el if también pasa cuando x es null',
        correctFeedback:
          'Correcto. Este es uno de los errores históricos de JavaScript. `typeof null === "object"`, así que esta condición no distingue null de un objeto real. Usa `x !== null` en su lugar.',
        incorrectFeedback:
          'No es correcto. El problema específico es que `typeof null === "object"`, un error histórico de JavaScript. Si escribes `if (typeof x === "object")`, el bloque se ejecutará tanto para objetos como para null.',
      },
      {
        question:
          '¿Cuál es la diferencia principal entre usar `any` y `unknown` en relación al narrowing?',
        options: [
          'No hay diferencia, ambos permiten hacer narrowing',
          'Con unknown, TypeScript obliga a hacer narrowing antes de usar el valor; con any, no avisa de nada',
          'Con any puedes hacer narrowing pero con unknown no',
          'unknown solo funciona con typeof, any funciona con todos los métodos',
        ],
        correctAnswer:
          'Con unknown, TypeScript obliga a hacer narrowing antes de usar el valor; con any, no avisa de nada',
        correctFeedback:
          'Correcto. `unknown` es el tipo seguro para cuando no sabes qué llegará. TypeScript te obliga a verificar antes de usar. Con `any`, TypeScript desactiva sus verificaciones completamente.',
        incorrectFeedback:
          'No es correcto. La diferencia clave es que `unknown` requiere que hagas narrowing antes de usar el valor, mientras que `any` desactiva toda verificación de tipos — cualquier operación está "permitida" aunque sea incorrecta.',
      },
      {
        question:
          '¿Qué error ocurre al usar `instanceof` con una interfaz de TypeScript?',
        options: [
          'Un error en tiempo de ejecución porque las interfaces no existen en JavaScript',
          'Un error de compilación porque TypeScript sabe que las interfaces no generan constructores',
          'No hay error, funciona igual que con clases',
          'Un error de importación',
        ],
        correctAnswer:
          'Un error de compilación porque TypeScript sabe que las interfaces no generan constructores',
        correctFeedback:
          'Correcto. TypeScript detecta el error en compilación. Las interfaces no generan ningún código en el JavaScript final, así que no tienen constructor para que instanceof pueda verificar.',
        incorrectFeedback:
          'No es correcto. TypeScript detecta este error en tiempo de compilación. Las interfaces son solo una construcción de TypeScript — al compilar no generan ningún código. instanceof necesita un constructor real en tiempo de ejecución.',
      },
      {
        question:
          '¿Cuál es el problema con el siguiente código?\n\n```ts\nlet msg: string | null = obtenerMensaje()\nif (msg !== null) {\n  setTimeout(() => {\n    console.log(msg.length) // ¿seguro?\n  }, 1000)\n}\n```',
        options: [
          'No hay ningún problema, es completamente seguro',
          'msg podría haber cambiado a null entre el if y el callback del setTimeout',
          'setTimeout no funciona con variables TypeScript',
          'El if no hace narrowing correctamente',
        ],
        correctAnswer:
          'msg podría haber cambiado a null entre el if y el callback del setTimeout',
        correctFeedback:
          'Correcto. El narrowing ocurre en el momento del if, pero el callback de setTimeout se ejecuta más tarde. Si algo cambia msg a null entre tanto, el código podría fallar. La solución es capturar: `const safeMsg = msg` dentro del if.',
        incorrectFeedback:
          'No es correcto. El narrowing del if es válido en ese momento, pero el callback de setTimeout se ejecuta después. Si msg cambia a null antes del callback, `msg.length` falla. Captura la referencia: `const safeMsg = msg` dentro del if.',
      },
      {
        question:
          '¿Cuál es el mejor tipo para recibir datos de fuente desconocida (como una API) en una función que necesita hacer narrowing?',
        options: [
          'any — para mayor flexibilidad',
          'object — para saber que es al menos un objeto',
          'unknown — obliga a verificar antes de usar',
          'never — para mayor seguridad',
        ],
        correctAnswer: 'unknown — obliga a verificar antes de usar',
        correctFeedback:
          'Correcto. `unknown` es el tipo más seguro para datos de fuente desconocida. TypeScript te obliga a verificar el tipo antes de poder usarlo, evitando accesos incorrectos.',
        incorrectFeedback:
          'No es correcto. `unknown` es el tipo correcto para datos de fuente desconocida. A diferencia de `any`, `unknown` obliga a verificar el tipo antes de usarlo. `object` es demasiado específico y `never` significa que el valor nunca puede existir.',
      },
    ],
  },
]

export const tsModule11: Module = {
  number: 11,
  title: 'Narrowing',
  level: 'nivel3',
  lessons: lessonsTsModule11,
}
