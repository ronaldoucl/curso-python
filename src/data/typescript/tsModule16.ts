import type { Lesson, Module } from '@/types'

export const lessonsTsModule16: Lesson[] = [
  {
    slug: 'que-son-genericos',
    title: '¿Qué son los genéricos?',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 120,
    description:
      'Aprende qué son los genéricos y cómo permiten crear funciones, tipos y estructuras reutilizables sin perder seguridad de tipos.',
    explanation: `## ¿Qué son los genéricos?

Los **genéricos** son una de las características más poderosas de TypeScript. Permiten escribir funciones, interfaces y tipos que trabajan con **cualquier tipo de dato**, pero sin perder la seguridad que ofrece TypeScript.

### La idea central

Imagina que tienes una caja. La caja puede guardar cualquier cosa: un libro, un número, una fruta. Pero una vez que metes algo adentro, la caja recuerda **qué tipo de cosa tiene**.

Eso son los genéricos: una caja flexible que no olvida qué contiene.

### El problema sin genéricos

Sin genéricos, si quisieras una función que devuelve lo mismo que recibe, tendrías dos opciones malas:

**Opción 1 — repetir el código para cada tipo:**
\`\`\`typescript
function devolverString(valor: string): string { return valor }
function devolverNumber(valor: number): number { return valor }
// ¡Copiar y pegar infinitamente!
\`\`\`

**Opción 2 — usar \`any\` y perder la seguridad:**
\`\`\`typescript
function devolver(valor: any): any { return valor }
const resultado = devolver("hola")
// TypeScript no sabe que resultado es string
resultado.toUpperCase() // sin autocomplete, sin verificación
\`\`\`

### La solución: genéricos

Con genéricos puedes escribir la función **una sola vez** y funciona con cualquier tipo:

\`\`\`typescript
function devolver<T>(valor: T): T {
  return valor
}

const texto = devolver("hola")     // TypeScript sabe que es string
const numero = devolver(42)        // TypeScript sabe que es number
const lista = devolver([1, 2, 3])  // TypeScript sabe que es number[]
\`\`\`

### ¿Qué significa \`<T>\`?

La \`T\` entre los signos \`<>\` es el **parámetro de tipo genérico**. Es como un marcador de posición que se reemplaza por el tipo real cuando usas la función.

\`T\` es solo una convención (viene de "Type"). Podrías llamarlo \`X\`, \`Dato\`, \`Elemento\` — lo que quieras. Pero \`T\` es el nombre más común y que todos reconocen.

### Genéricos vs \`any\`

| | \`any\` | Genérico |
|---|---|---|
| Flexibilidad | ✅ | ✅ |
| Seguridad de tipos | ❌ | ✅ |
| Autocomplete | ❌ | ✅ |
| TypeScript te avisa de errores | ❌ | ✅ |

Los genéricos dan la misma **flexibilidad** que \`any\`, pero con toda la **seguridad** de TypeScript.`,
    codeExample: `// generics.ts

// Sin genéricos: necesitas una función por tipo
function devolverString(valor: string): string {
  return valor
}
function devolverNumber(valor: number): number {
  return valor
}

// Con genéricos: una función para todos los tipos
function devolver<T>(valor: T): T {
  return valor
}

// TypeScript infiere el tipo automáticamente
const nombre = devolver("Ana")      // tipo: string
const edad = devolver(25)           // tipo: number
const activo = devolver(true)       // tipo: boolean
const notas = devolver([9, 8, 10])  // tipo: number[]

// También puedes especificar el tipo manualmente
const curso = devolver<string>("TypeScript")

// TypeScript te avisa si algo no cuadra
const resultado = devolver("hola")
// resultado.toFixed(2)  // ❌ Error: toFixed no existe en string`,
    keyPoints: [
      'Los genéricos permiten crear funciones y tipos reutilizables sin perder seguridad de tipos',
      'La sintaxis <T> define un parámetro de tipo genérico',
      'T es solo un nombre convencional — puedes usar cualquier nombre válido',
      'Los genéricos son mejores que any porque preservan la información del tipo',
      'TypeScript puede inferir el tipo genérico automáticamente desde los argumentos',
    ],
    exercise: {
      description:
        'Crea una función genérica llamada `mostrar` que reciba un valor de cualquier tipo y lo devuelva tal cual. Úsala con un string, un number y un array de strings. Verifica que TypeScript conoce el tipo de cada valor devuelto.',
      hint: 'Usa la sintaxis `function mostrar<T>(valor: T): T { return valor }` y prueba con diferentes tipos.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal ventaja de los genéricos sobre el tipo `any`?',
        options: [
          'Los genéricos son más rápidos en ejecución',
          'Los genéricos preservan la información del tipo, any la descarta',
          'Los genéricos solo funcionan con arrays',
          'Los genéricos no necesitan ser declarados',
        ],
        correctAnswer: 'Los genéricos preservan la información del tipo, any la descarta',
        correctFeedback:
          '¡Exacto! Con genéricos TypeScript sabe qué tipo tiene el valor y puede ayudarte con autocomplete y verificación. Con any, esa información se pierde.',
        incorrectFeedback:
          'Los genéricos no afectan la velocidad de ejecución. Su ventaja es que preservan la información del tipo, a diferencia de any que descarta toda seguridad de tipos.',
      },
      {
        question: '¿Qué representa la `T` en `function devolver<T>(valor: T): T`?',
        options: [
          'Un tipo llamado T que debe importarse',
          'La letra T del alfabeto usada como string',
          'Un parámetro de tipo que se reemplaza por el tipo real al usar la función',
          'Una restricción que solo permite strings',
        ],
        correctAnswer: 'Un parámetro de tipo que se reemplaza por el tipo real al usar la función',
        correctFeedback:
          '¡Correcto! T es un marcador de posición para el tipo real. Cuando llamas a devolver("hola"), TypeScript reemplaza T por string automáticamente.',
        incorrectFeedback:
          'T no es un tipo predefinido ni solo la letra T. Es un parámetro genérico — un marcador de posición que TypeScript reemplaza por el tipo real cuando usas la función.',
      },
      {
        question: 'Si llamas a `devolver(42)`, ¿qué tipo tiene el valor devuelto?',
        options: ['any', 'unknown', 'number', 'T'],
        correctAnswer: 'number',
        correctFeedback:
          '¡Correcto! TypeScript infiere que T es number porque pasaste 42. El tipo de retorno queda como number, no como T genérico.',
        incorrectFeedback:
          'TypeScript infiere el tipo automáticamente. Como pasaste 42 (un number), T se convierte en number y el valor devuelto es de tipo number.',
      },
      {
        question: '¿Es obligatorio especificar el tipo manualmente al usar una función genérica?',
        options: [
          'Sí, siempre hay que escribir el tipo entre <>',
          'No, TypeScript puede inferirlo desde los argumentos',
          'Solo si el tipo es string o number',
          'Sí, si no se especifica TypeScript usa any',
        ],
        correctAnswer: 'No, TypeScript puede inferirlo desde los argumentos',
        correctFeedback:
          '¡Exacto! TypeScript infiere el tipo genérico automáticamente en la mayoría de casos. Puedes escribir devolver("hola") en lugar de devolver<string>("hola").',
        incorrectFeedback:
          'TypeScript tiene inferencia de tipos genéricos. En la mayoría de casos puedes omitir el tipo entre <> y TypeScript lo deduce del argumento que pasas.',
      },
      {
        question: '¿Qué problema tiene este código?\n```typescript\nfunction primero(lista: any[]): any {\n  return lista[0]\n}\nconst item = primero([1, 2, 3])\n```',
        options: [
          'No hay problema, funciona perfectamente',
          'TypeScript no sabe que item es number, pierde la seguridad de tipos',
          'any[] no es un tipo válido en TypeScript',
          'La función no puede retornar any',
        ],
        correctAnswer: 'TypeScript no sabe que item es number, pierde la seguridad de tipos',
        correctFeedback:
          '¡Correcto! item tiene tipo any, así que TypeScript no te avisará si intentas hacer item.toUpperCase() aunque item sea un número. Los genéricos solucionan esto.',
        incorrectFeedback:
          'El código compila, pero item tiene tipo any. TypeScript pierde la información de que los elementos son numbers. Un genérico <T>(lista: T[]): T preservaría esa información.',
      },
      {
        question: '¿Cuál de estas versiones es la mejor práctica para una función que recibe y devuelve el mismo tipo?',
        options: [
          'function f(x: any): any { return x }',
          'function f(x: unknown): unknown { return x }',
          'function f<T>(x: T): T { return x }',
          'function f(x: object): object { return x }',
        ],
        correctAnswer: 'function f<T>(x: T): T { return x }',
        correctFeedback:
          '¡Perfecto! La versión genérica es la correcta: flexible para cualquier tipo pero segura, porque TypeScript recuerda qué tipo se pasó.',
        incorrectFeedback:
          'La versión genérica `<T>` es la mejor práctica. `any` descarta la seguridad, `unknown` requiere conversiones para usar el valor, y `object` excluye tipos primitivos.',
      },
    ],
  },
  {
    slug: 'problema-que-resuelven-genericos',
    title: 'El problema que resuelven los genéricos',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 121,
    description:
      'Entiende por qué usar any no es una buena solución y cómo los genéricos permiten conservar el tipo original de los datos.',
    explanation: `## El problema que resuelven los genéricos

Antes de los genéricos, los desarrolladores enfrentaban un dilema clásico: **flexibilidad o seguridad**. Con genéricos, puedes tener ambas.

### El escenario: una función de envolver datos

Imagina que estás construyendo una plataforma y necesitas una función que tome cualquier valor y lo envuelva en un objeto con metadatos:

\`\`\`typescript
{
  valor: ...,
  timestamp: Date.now(),
  procesado: false
}
\`\`\`

### Intento 1: repetir código para cada tipo

\`\`\`typescript
function envolverString(v: string) { return { valor: v, timestamp: Date.now(), procesado: false } }
function envolverNumber(v: number) { return { valor: v, timestamp: Date.now(), procesado: false } }
function envolverBoolean(v: boolean) { return { valor: v, timestamp: Date.now(), procesado: false } }
// Para cada nuevo tipo: escribir otra función...
\`\`\`

**Problema:** duplicación masiva de código.

### Intento 2: usar \`any\`

\`\`\`typescript
function envolver(v: any) {
  return { valor: v, timestamp: Date.now(), procesado: false }
}

const resultado = envolver("Ana")
// resultado.valor tiene tipo any — TypeScript no sabe que es string
resultado.valor.toUpperCase()   // no hay error... pero tampoco hay seguridad
resultado.valor.toFixed(2)      // tampoco da error, ¡aunque sea un string!
\`\`\`

**Problema:** \`any\` desactiva la verificación de tipos. TypeScript deja de ayudarte.

### Intento 3: \`unknown\`

\`\`\`typescript
function envolver(v: unknown) {
  return { valor: v, timestamp: Date.now(), procesado: false }
}

const resultado = envolver("Ana")
resultado.valor.toUpperCase()  // ❌ Error: Object is of type unknown
\`\`\`

**Problema:** demasiado restrictivo. Necesitas hacer conversiones (casting) para hacer cualquier cosa con el valor.

### La solución correcta: genéricos

\`\`\`typescript
function envolver<T>(v: T) {
  return { valor: v, timestamp: Date.now(), procesado: false }
}

const nombre = envolver("Ana")
nombre.valor.toUpperCase()   // ✅ TypeScript sabe que es string

const edad = envolver(25)
edad.valor.toFixed(2)        // ✅ TypeScript sabe que es number

const usuario = envolver({ id: 1, nombre: "Ana" })
usuario.valor.nombre         // ✅ TypeScript sabe la estructura del objeto
\`\`\`

### La analogía del sobre

Piensa en un sobre: puede llevar cualquier contenido (carta, foto, cheque). Pero tú sabes qué metiste. Cuando abres el sobre, puedes usarlo correctamente porque conoces el contenido.

\`any\` sería como olvidar qué metiste en el sobre. \`genérico\` es como anotar en el sobre "este tiene una carta" — la caja es reutilizable pero el contenido está identificado.`,
    codeExample: `// main.ts

// ❌ Problema: usar any pierde la seguridad de tipos
function envolverAny(valor: any) {
  return {
    dato: valor,
    timestamp: Date.now(),
    procesado: false,
  }
}

const resA = envolverAny("Ana")
// TypeScript no sabe que resA.dato es string
// No hay autocomplete, no hay verificación
console.log(resA.dato.toUpperCase()) // funciona, pero por suerte

// ✅ Solución: usar un genérico
function envolver<T>(valor: T) {
  return {
    dato: valor,
    timestamp: Date.now(),
    procesado: false,
  }
}

const resString = envolver("Ana")
console.log(resString.dato.toUpperCase()) // ✅ TypeScript sabe que es string

const resNumber = envolver(42)
console.log(resNumber.dato.toFixed(2))    // ✅ TypeScript sabe que es number

const resObj = envolver({ id: 1, nombre: "Ana" })
console.log(resObj.dato.nombre)            // ✅ TypeScript conoce la estructura

// resString.dato.toFixed(2)  // ❌ Error: toFixed no existe en string — correcto!`,
    keyPoints: [
      'any elimina la verificación de tipos — TypeScript ya no puede ayudarte',
      'unknown es seguro pero requiere conversiones constantes para usar el valor',
      'Los genéricos dan flexibilidad sin sacrificar seguridad',
      'El tipo genérico T "viaja" desde el argumento hasta el valor de retorno',
      'TypeScript puede inferir T automáticamente sin que tengas que especificarlo',
    ],
    exercise: {
      description:
        'Tienes una función `crearRespuesta(datos: any)` que devuelve `{ datos, exito: true }`. Conviértela en una función genérica `crearRespuesta<T>(datos: T)` y úsala con un string, un number y un objeto `{ nombre: string }`. Verifica que TypeScript conoce el tipo de `datos` en cada resultado.',
      hint: 'Cambia `any` por `<T>` en la declaración y `T` en el parámetro y retorno. TypeScript inferirá el tipo automáticamente.',
    },
    quiz: [
      {
        question: '¿Por qué usar `any` en una función genérica es problemático?',
        options: [
          'Porque any hace el código más lento',
          'Porque any desactiva la verificación de tipos y pierdes el autocomplete',
          'Porque any solo funciona con strings',
          'Porque any no es un tipo válido en TypeScript moderno',
        ],
        correctAnswer: 'Porque any desactiva la verificación de tipos y pierdes el autocomplete',
        correctFeedback:
          '¡Correcto! Con any TypeScript deja de verificar si estás usando el valor correctamente. Los errores solo aparecen en ejecución, no en tiempo de desarrollo.',
        incorrectFeedback:
          'any no afecta el rendimiento y sí es válido en TypeScript. El problema es que desactiva la verificación de tipos — TypeScript no te avisa de errores y pierdes el autocomplete del editor.',
      },
      {
        question: '¿Qué diferencia hay entre `any` y un genérico `<T>`?',
        options: [
          'No hay diferencia, son equivalentes',
          'any es para tipos simples, T es para objetos complejos',
          'Con T TypeScript recuerda el tipo específico; con any lo descarta',
          'T solo funciona si el tipo empieza con T',
        ],
        correctAnswer: 'Con T TypeScript recuerda el tipo específico; con any lo descarta',
        correctFeedback:
          '¡Exacto! Cuando usas T y pasas un string, TypeScript sabe que T = string en esa llamada. Con any, esa información se pierde permanentemente.',
        incorrectFeedback:
          'La diferencia clave es la preservación del tipo. Con T, TypeScript rastrea el tipo real. Con any, lo descarta y ya no puede verificar nada sobre ese valor.',
      },
      {
        question: '¿Qué tipo tiene `resultado.dato` en este código?\n```typescript\nfunction envolver<T>(v: T) { return { dato: v } }\nconst resultado = envolver(["a", "b"])\n```',
        options: ['any', 'unknown', 'string[]', 'Array<T>'],
        correctAnswer: 'string[]',
        correctFeedback:
          '¡Perfecto! TypeScript infiere que T = string[] porque pasaste ["a", "b"]. Entonces resultado.dato tiene tipo string[].',
        incorrectFeedback:
          'TypeScript infiere T desde el argumento ["a", "b"]. Como es un array de strings, T = string[], y resultado.dato tiene tipo string[].',
      },
      {
        question: '¿Cuál es el problema de usar `unknown` en lugar de genéricos?',
        options: [
          'unknown no es un tipo válido en TypeScript',
          'unknown hace el código más lento',
          'Con unknown necesitas hacer conversiones para poder usar el valor',
          'unknown solo acepta objetos, no valores primitivos',
        ],
        correctAnswer: 'Con unknown necesitas hacer conversiones para poder usar el valor',
        correctFeedback:
          '¡Correcto! unknown es seguro pero muy restrictivo — debes usar type guards o conversiones antes de poder hacer cualquier operación con el valor.',
        incorrectFeedback:
          'unknown sí es válido y no afecta el rendimiento. El problema es la rigidez: antes de usar un valor unknown debes verificar o convertir su tipo, lo que puede hacer el código verboso.',
      },
      {
        question: '¿Cuál es la versión mejorada con genéricos de esta función?\n```typescript\nfunction obtenerPrimero(lista: any[]): any {\n  return lista[0]\n}\n```',
        options: [
          'function obtenerPrimero<T>(lista: T): T { return lista[0] }',
          'function obtenerPrimero<T>(lista: T[]): T { return lista[0] }',
          'function obtenerPrimero(lista: unknown[]): unknown { return lista[0] }',
          'function obtenerPrimero<any>(lista: any[]): any { return lista[0] }',
        ],
        correctAnswer: 'function obtenerPrimero<T>(lista: T[]): T { return lista[0] }',
        correctFeedback:
          '¡Exacto! `T[]` indica que lista es un array de T, y el retorno `T` indica que devuelve un elemento del mismo tipo. Así TypeScript preserva la información del tipo.',
        incorrectFeedback:
          'La versión correcta es `<T>(lista: T[]): T`. `T[]` significa "array de T", y el retorno `T` asegura que el elemento devuelto tiene el mismo tipo que los elementos del array.',
      },
    ],
  },
  {
    slug: 'genericos-en-funciones',
    title: 'Genéricos en funciones',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 122,
    description: 'Aprende a crear funciones genéricas usando la sintaxis <T>.',
    explanation: `## Genéricos en funciones

Crear funciones genéricas es la forma más común de usar genéricos en TypeScript. Una función genérica puede trabajar con **cualquier tipo** mientras mantiene toda la seguridad.

### Sintaxis básica

\`\`\`typescript
function nombreFuncion<T>(parametro: T): T {
  return parametro
}
\`\`\`

Los elementos de la sintaxis:
- **\`<T>\`** después del nombre: declara el parámetro de tipo genérico
- **\`parametro: T\`**: el argumento usa ese tipo genérico
- **\`: T\`** al final: el retorno también usa ese tipo genérico

### Ejemplos prácticos

**Función que envuelve un valor en un array:**
\`\`\`typescript
function enArray<T>(valor: T): T[] {
  return [valor]
}

enArray("hola")    // ["hola"] — tipo: string[]
enArray(42)        // [42]     — tipo: number[]
enArray(true)      // [true]   — tipo: boolean[]
\`\`\`

**Función que clona un objeto:**
\`\`\`typescript
function clonar<T>(obj: T): T {
  return { ...obj } as T
}

const usuario = { id: 1, nombre: "Ana" }
const copia = clonar(usuario)
// TypeScript sabe que copia tiene id y nombre
\`\`\`

**Función que elige entre dos valores:**
\`\`\`typescript
function elegir<T>(condicion: boolean, a: T, b: T): T {
  return condicion ? a : b
}

const resultado = elegir(true, "aprobado", "reprobado") // tipo: string
const valor = elegir(false, 10, 20)                      // tipo: number
\`\`\`

### Funciones arrow genéricas

También puedes escribir funciones genéricas como arrow functions:

\`\`\`typescript
const devolver = <T>(valor: T): T => valor

const resultado = devolver("hola") // tipo: string
\`\`\`

### Cuándo el genérico aparece en el retorno

El tipo de retorno puede ser diferente del parámetro:

\`\`\`typescript
function crearPair<T>(valor: T): [T, string] {
  return [valor, "listo"]
}

const par = crearPair(42) // tipo: [number, string]
\`\`\`

### El genérico debe ser usado

Si declaras un genérico pero no lo usas en los parámetros ni en el retorno, TypeScript no puede inferirlo. Declara genéricos solo cuando realmente los necesitas.`,
    codeExample: `// generics.ts

// Función genérica básica
function devolver<T>(valor: T): T {
  return valor
}

// TypeScript infiere el tipo automáticamente
const nombre = devolver("Ana")       // string
const puntos = devolver(100)         // number
const activo = devolver(true)        // boolean

// Función que envuelve en array
function enArray<T>(valor: T): T[] {
  return [valor]
}

const letras = enArray("x")         // string[]
const numeros = enArray(5)          // number[]

// Función que elige entre dos opciones del mismo tipo
function elegir<T>(condicion: boolean, a: T, b: T): T {
  return condicion ? a : b
}

const estado = elegir(true, "activo", "inactivo")   // string
const nivel = elegir(false, 1, 2)                    // number

// Función que clona un objeto manteniendo su tipo
function clonar<T extends object>(obj: T): T {
  return { ...obj } as T
}

const usuario = { id: 1, nombre: "Ana", activo: true }
const copiaUsuario = clonar(usuario)
console.log(copiaUsuario.nombre) // ✅ TypeScript conoce la propiedad nombre

// Arrow function genérica
const envolver = <T>(valor: T): { dato: T } => ({ dato: valor })

const envuelto = envolver(42)
console.log(envuelto.dato.toFixed(1)) // ✅ TypeScript sabe que dato es number`,
    keyPoints: [
      'La sintaxis <T> después del nombre de la función declara el parámetro genérico',
      'El genérico T puede usarse en parámetros, tipo de retorno, y dentro del cuerpo',
      'Las arrow functions también pueden ser genéricas',
      'TypeScript infiere el tipo genérico automáticamente desde los argumentos',
      'Declara genéricos solo cuando los necesitas — no los agregues innecesariamente',
    ],
    exercise: {
      description:
        'Crea tres funciones genéricas: `primero<T>(lista: T[]): T` que devuelva el primer elemento, `ultimo<T>(lista: T[]): T` que devuelva el último, y `repetir<T>(valor: T, veces: number): T[]` que devuelva un array con el valor repetido. Pruébalas con strings y numbers.',
      hint: 'Para `primero` usa `lista[0]`, para `ultimo` usa `lista[lista.length - 1]`, y para `repetir` usa `Array(veces).fill(valor)`.',
    },
    quiz: [
      {
        question: '¿Dónde se coloca `<T>` en una función genérica?',
        options: [
          'Antes del nombre de la función',
          'Después del nombre de la función, antes de los paréntesis',
          'Dentro de los paréntesis como primer parámetro',
          'Al final de la función, después del tipo de retorno',
        ],
        correctAnswer: 'Después del nombre de la función, antes de los paréntesis',
        correctFeedback:
          '¡Correcto! La sintaxis es `function nombre<T>(params): retorno`. Los <> van entre el nombre y los paréntesis de parámetros.',
        incorrectFeedback:
          'La posición correcta es después del nombre y antes de los paréntesis: `function nombre<T>(...)`. No va antes del nombre ni dentro de los paréntesis.',
      },
      {
        question: '¿Qué devuelve `enArray<T>(valor: T): T[]` si la llamas con `enArray("hola")`?',
        options: ['any[]', 'T[]', 'string[]', 'unknown[]'],
        correctAnswer: 'string[]',
        correctFeedback:
          '¡Correcto! TypeScript infiere T = string porque pasaste "hola". Entonces T[] se convierte en string[].',
        incorrectFeedback:
          'TypeScript reemplaza T por el tipo inferido. Como pasaste "hola" (string), T = string, y T[] = string[]. El resultado es string[], no el genérico T[].',
      },
      {
        question: '¿Qué error daría este código?\n```typescript\nfunction elegir<T>(a: T, b: T): T { return a }\nelegir("hola", 42)\n```',
        options: [
          'Ningún error, funciona perfectamente',
          'Error: T no puede ser string y number al mismo tiempo en la misma llamada',
          'Error: la función necesita tres argumentos',
          'Error: el genérico T no está definido',
        ],
        correctAnswer: 'Error: T no puede ser string y number al mismo tiempo en la misma llamada',
        correctFeedback:
          '¡Exacto! Cuando TypeScript infiere T desde el primer argumento como string, el segundo argumento también debe ser string. Pasar 42 (number) causa un error de tipo.',
        incorrectFeedback:
          'Hay un error de tipos. T se infiere como string desde "hola", pero el segundo argumento 42 es number. Ambos deben ser del mismo tipo T en esa llamada.',
      },
      {
        question: '¿Cuál de estas es la declaración correcta de una función genérica?',
        options: [
          'function f(T)(valor: T): T { return valor }',
          'function f<T>(valor: T): T { return valor }',
          'function<T> f(valor: T): T { return valor }',
          'function f(valor: <T>): T { return valor }',
        ],
        correctAnswer: 'function f<T>(valor: T): T { return valor }',
        correctFeedback:
          '¡Perfecto! La sintaxis correcta pone <T> inmediatamente después del nombre de la función.',
        incorrectFeedback:
          'La sintaxis correcta es `function nombreFuncion<T>(params): retorno`. Los <T> van entre el nombre y los paréntesis de parámetros, no en otros lugares.',
      },
      {
        question: '¿Cuándo debería NO usarse un genérico?',
        options: [
          'Cuando la función trabaja con arrays',
          'Cuando la función siempre trabaja con el mismo tipo fijo',
          'Cuando la función tiene más de un parámetro',
          'Cuando la función es un arrow function',
        ],
        correctAnswer: 'Cuando la función siempre trabaja con el mismo tipo fijo',
        correctFeedback:
          '¡Correcto! Si tu función siempre recibe y devuelve string, escribe `string` directamente. Los genéricos se usan cuando el tipo varía según el uso.',
        incorrectFeedback:
          'Los genéricos son útiles cuando el tipo puede variar. Si la función siempre trabaja con un tipo concreto (ej. siempre string), es mejor usar ese tipo directamente en vez de un genérico innecesario.',
      },
    ],
  },
  {
    slug: 'inferencia-genericos',
    title: 'Inferencia en genéricos',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 123,
    description:
      'Aprende cómo TypeScript puede inferir el tipo genérico automáticamente según el argumento que recibe la función.',
    explanation: `## Inferencia en genéricos

Una de las características más cómodas de los genéricos en TypeScript es que **no siempre necesitas especificar el tipo**. TypeScript puede inferirlo automáticamente desde los argumentos que pasas.

### Inferencia automática

\`\`\`typescript
function devolver<T>(valor: T): T {
  return valor
}

// Con tipo explícito (manual)
const a = devolver<string>("hola")

// Con inferencia (automática) — TypeScript deduce que T = string
const b = devolver("hola")
\`\`\`

Ambas formas son equivalentes. La segunda es más limpia y es la que se usa en la práctica.

### ¿Cómo funciona la inferencia?

TypeScript mira el **argumento** que le pasas y deduce el tipo:

\`\`\`typescript
function envolver<T>(valor: T) {
  return { dato: valor }
}

envolver("texto")        // T inferido como string
envolver(42)             // T inferido como number
envolver([1, 2, 3])      // T inferido como number[]
envolver({ id: 1 })      // T inferido como { id: number }
\`\`\`

### Cuándo especificar el tipo manualmente

A veces TypeScript no puede inferir el tipo, o quieres ser más explícito. Especifica el tipo manualmente en estos casos:

**1. Cuando el tipo no se puede deducir del argumento:**
\`\`\`typescript
function crearLista<T>(): T[] {
  return []
}
// TypeScript no sabe qué tipo será la lista
const lista = crearLista<string>() // debes especificarlo
\`\`\`

**2. Cuando quieres un tipo más específico que el inferido:**
\`\`\`typescript
const valor = devolver(42)            // T inferido como number
const valor2 = devolver<42>(42)       // T es el literal 42
\`\`\`

**3. Para mayor claridad en código complejo:**
A veces especificar el tipo hace el código más fácil de leer, aunque no sea técnicamente necesario.

### La inferencia respeta el tipo real

\`\`\`typescript
function intercambiar<T>(a: T, b: T): [T, T] {
  return [b, a]
}

const resultado = intercambiar("hola", "mundo")
// resultado es [string, string] — TypeScript lo sabe
const [x, y] = resultado
// x e y son string — TypeScript lo sabe

// intercambiar("hola", 42) // ❌ Error: tipos incompatibles para T
\`\`\`

### Inferencia en objetos complejos

\`\`\`typescript
function crearRespuesta<T>(datos: T) {
  return { datos, exito: true, timestamp: Date.now() }
}

const respuesta = crearRespuesta({ id: 1, nombre: "Ana" })
// TypeScript infiere que datos es { id: number, nombre: string }
console.log(respuesta.datos.nombre) // ✅ funciona
\`\`\``,
    codeExample: `// main.ts

function devolver<T>(valor: T): T {
  return valor
}

// Inferencia automática — TypeScript deduce el tipo
const texto = devolver("Hola TypeScript")  // string
const numero = devolver(2024)              // number
const lista = devolver([1, 2, 3])          // number[]
const usuario = devolver({ id: 1, nombre: "Ana" }) // { id: number, nombre: string }

// Especificación manual del tipo (cuando es necesario)
function crearArray<T>(): T[] {
  return []
}

const strings = crearArray<string>()   // string[] — necesario especificarlo
const numeros = crearArray<number>()   // number[] — necesario especificarlo

// Inferencia con múltiples parámetros del mismo tipo
function elegir<T>(condicion: boolean, a: T, b: T): T {
  return condicion ? a : b
}

const resultado1 = elegir(true, "activo", "inactivo") // string
const resultado2 = elegir(false, 100, 200)             // number

// TypeScript verifica la coherencia
// elegir(true, "hola", 42) // ❌ Error: 42 no es del mismo tipo que "hola"

// Inferencia en objetos anidados
function envolver<T>(dato: T) {
  return { dato, procesado: false, timestamp: Date.now() }
}

const envuelto = envolver({ nombre: "Producto A", precio: 99.99 })
console.log(envuelto.dato.nombre)  // ✅ TypeScript conoce la estructura`,
    keyPoints: [
      'TypeScript infiere el tipo genérico automáticamente desde los argumentos',
      'No siempre necesitas escribir el tipo entre <> — la inferencia lo hace por ti',
      'Cuando TypeScript no puede inferir el tipo, debes especificarlo manualmente',
      'La inferencia verifica que todos los argumentos del mismo genérico sean compatibles',
      'La inferencia automática hace el código más limpio sin perder seguridad',
    ],
    exercise: {
      description:
        'Crea una función genérica `empaquetar<T>(contenido: T, etiqueta: string)` que devuelva `{ contenido, etiqueta, creado: new Date() }`. Úsala con diferentes tipos sin especificar el tipo manualmente — deja que TypeScript lo infiera. Verifica que TypeScript conoce el tipo de `contenido` en cada caso.',
      hint: 'Simplemente llama a empaquetar("dato", "texto") sin escribir <string>. TypeScript inferirá T = string automáticamente.',
    },
    quiz: [
      {
        question: '¿Qué significa que TypeScript "infiere" el tipo genérico?',
        options: [
          'Que TypeScript convierte el tipo a any automáticamente',
          'Que TypeScript deduce el tipo genérico desde los argumentos sin que lo escribas',
          'Que TypeScript no verifica los tipos genéricos',
          'Que el tipo genérico siempre es unknown',
        ],
        correctAnswer: 'Que TypeScript deduce el tipo genérico desde los argumentos sin que lo escribas',
        correctFeedback:
          '¡Correcto! La inferencia significa que TypeScript analiza los argumentos y determina automáticamente qué tipo concreto reemplaza al genérico T.',
        incorrectFeedback:
          'Inferir significa deducir. TypeScript analiza los argumentos que pasas y determina automáticamente el tipo genérico. No necesitas escribirlo tú mismo.',
      },
      {
        question: '¿Cuándo es necesario especificar el tipo genérico manualmente?',
        options: [
          'Siempre — TypeScript no puede inferir tipos genéricos',
          'Nunca — TypeScript siempre lo infiere correctamente',
          'Cuando TypeScript no puede deducirlo desde los argumentos (ej. lista vacía)',
          'Solo cuando el tipo es string o number',
        ],
        correctAnswer: 'Cuando TypeScript no puede deducirlo desde los argumentos (ej. lista vacía)',
        correctFeedback:
          '¡Exacto! Si llamas `crearArray()` sin argumentos, TypeScript no sabe qué tipo tendrá el array. Debes escribir `crearArray<string>()` para especificarlo.',
        incorrectFeedback:
          'La inferencia funciona cuando TypeScript puede ver qué tipo es el argumento. Cuando no hay argumentos (o son ambiguos), debes especificar el tipo manualmente.',
      },
      {
        question: '¿Cuál de estas llamadas tiene tipo de retorno `number[]`?\n```typescript\nfunction devolver<T>(v: T): T { return v }\n```',
        options: [
          'devolver("hello")',
          'devolver([1, 2, 3])',
          'devolver(true)',
          'devolver({ n: 1 })',
        ],
        correctAnswer: 'devolver([1, 2, 3])',
        correctFeedback:
          '¡Perfecto! `[1, 2, 3]` es `number[]`, así que TypeScript infiere T = number[] y el retorno es number[].',
        incorrectFeedback:
          'TypeScript infiere T desde el argumento. `[1, 2, 3]` es un array de números, por lo que T = number[] y el retorno es number[].',
      },
      {
        question: '¿Qué pasa si llamas `elegir<string>(true, "ok", 42)`?\n```typescript\nfunction elegir<T>(c: boolean, a: T, b: T): T { return c ? a : b }\n```',
        options: [
          'Funciona porque 42 se convierte a string automáticamente',
          'Error: 42 no es del tipo string que se especificó para T',
          'Funciona pero devuelve any',
          'Error: no se puede especificar T manualmente si hay inferencia',
        ],
        correctAnswer: 'Error: 42 no es del tipo string que se especificó para T',
        correctFeedback:
          '¡Correcto! Especificaste T = string, entonces ambos argumentos deben ser string. 42 (number) no es compatible y TypeScript lanza un error.',
        incorrectFeedback:
          'Cuando especificas T = string manualmente, TypeScript exige que TODOS los argumentos que usan T sean string. 42 es number, así que hay un error de tipo.',
      },
      {
        question: '¿Es equivalente `devolver<string>("hola")` y `devolver("hola")`?',
        options: [
          'No, la primera tiene T = string y la segunda tiene T = any',
          'Sí, en ambas T = string, pero la segunda es más limpia',
          'No, la segunda no tiene tipo — es implícitamente unknown',
          'Solo son equivalentes si strictMode está desactivado',
        ],
        correctAnswer: 'Sí, en ambas T = string, pero la segunda es más limpia',
        correctFeedback:
          '¡Perfecto! La inferencia es tan poderosa que no necesitas escribir el tipo. `devolver("hola")` ya sabe que T = string. La versión sin <string> es la preferida por limpieza.',
        incorrectFeedback:
          'La inferencia automática produce exactamente el mismo resultado que la especificación manual. `devolver("hola")` infiere T = string, igual que `devolver<string>("hola")`. Prefiere la versión más limpia.',
      },
    ],
  },
  {
    slug: 'genericos-con-arrays',
    title: 'Genéricos con arrays',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 124,
    description:
      'Aprende a crear funciones genéricas que trabajan con arrays de diferentes tipos.',
    explanation: `## Genéricos con arrays

Los arrays son uno de los casos más comunes y naturales para usar genéricos. Puedes crear funciones que trabajen con **arrays de cualquier tipo** y TypeScript sabrá exactamente qué tipo de elementos contienen.

### La sintaxis: \`T[]\`

Para indicar "array de T" simplemente escribes \`T[]\`:

\`\`\`typescript
function primero<T>(lista: T[]): T {
  return lista[0]
}

primero([1, 2, 3])          // tipo de retorno: number
primero(["a", "b", "c"])    // tipo de retorno: string
primero([true, false])      // tipo de retorno: boolean
\`\`\`

### Alternativa: \`Array<T>\`

También puedes usar la forma genérica de Array:

\`\`\`typescript
function ultimo<T>(lista: Array<T>): T {
  return lista[lista.length - 1]
}
\`\`\`

Ambas formas son equivalentes. \`T[]\` es más común y conciso.

### Funciones útiles con arrays genéricos

**Filtrar sin perder el tipo:**
\`\`\`typescript
function filtrar<T>(lista: T[], condicion: (item: T) => boolean): T[] {
  return lista.filter(condicion)
}

const activos = filtrar(
  [{ id: 1, activo: true }, { id: 2, activo: false }],
  (u) => u.activo
)
// activos es { id: number, activo: boolean }[]
\`\`\`

**Transformar arrays manteniendo el tipo de entrada:**
\`\`\`typescript
function duplicar<T>(lista: T[]): T[] {
  return [...lista, ...lista]
}

const numeros = duplicar([1, 2, 3]) // [1, 2, 3, 1, 2, 3] — number[]
const palabras = duplicar(["a", "b"]) // ["a", "b", "a", "b"] — string[]
\`\`\`

**Combinar arrays del mismo tipo:**
\`\`\`typescript
function combinar<T>(a: T[], b: T[]): T[] {
  return [...a, ...b]
}

const notas = combinar([9, 8], [7, 10]) // number[]
const nombres = combinar(["Ana"], ["Luis", "Pedro"]) // string[]
\`\`\`

### Funciones que transforman el tipo

A veces la función recibe un array de un tipo y devuelve un array de otro. Para eso necesitas **dos parámetros genéricos** (lo veremos en la próxima lección):

\`\`\`typescript
function transformar<T, U>(lista: T[], fn: (item: T) => U): U[] {
  return lista.map(fn)
}
\`\`\`

Pero con un solo tipo ya puedes hacer muchísimas cosas útiles.`,
    codeExample: `// utils.ts

// Obtener el primer elemento de cualquier array
function primero<T>(lista: T[]): T | undefined {
  return lista[0]
}

const primerNombre = primero(["Ana", "Luis", "Pedro"]) // string | undefined
const primerNumero = primero([10, 20, 30])              // number | undefined

// Obtener el último elemento
function ultimo<T>(lista: T[]): T | undefined {
  return lista[lista.length - 1]
}

const ultimoNombre = ultimo(["Ana", "Luis", "Pedro"]) // string | undefined

// Combinar dos arrays del mismo tipo
function combinar<T>(a: T[], b: T[]): T[] {
  return [...a, ...b]
}

const notas = combinar([9, 8, 7], [10, 6])          // number[]
const cursos = combinar(["Python", "JS"], ["TS"])    // string[]

// Eliminar duplicados de cualquier array de primitivos
function sinDuplicados<T>(lista: T[]): T[] {
  return [...new Set(lista)]
}

const sinRep = sinDuplicados([1, 2, 2, 3, 3, 3]) // number[]
const sinRepStr = sinDuplicados(["a", "b", "a"])  // string[]

// Verificar si un elemento existe en el array
function contiene<T>(lista: T[], elemento: T): boolean {
  return lista.includes(elemento)
}

const hayDiez = contiene([5, 10, 15], 10)      // true
const hayAna = contiene(["Ana", "Luis"], "Ana") // true`,
    keyPoints: [
      'T[] significa "array de elementos de tipo T" en funciones genéricas',
      'Array<T> es equivalente a T[], pero T[] es más conciso y común',
      'TypeScript infiere el tipo de los elementos del array automáticamente',
      'Puedes devolver T[] para que el resultado también sea un array tipado',
      'Las funciones de array genéricas son reutilizables para cualquier tipo de dato',
    ],
    exercise: {
      description:
        'Crea una función genérica `paginar<T>(lista: T[], pagina: number, porPagina: number): T[]` que devuelva un subconjunto del array según la página solicitada. Por ejemplo, `paginar(["a","b","c","d","e"], 1, 2)` devuelve `["a","b"]` y `paginar(["a","b","c","d","e"], 2, 2)` devuelve `["c","d"]`. Pruébala con arrays de strings y de objetos.',
      hint: 'Usa `slice((pagina - 1) * porPagina, pagina * porPagina)` para obtener el rango correcto.',
    },
    quiz: [
      {
        question: '¿Cómo se representa "array de T" en una función genérica?',
        options: ['Array(T)', 'T[]', '[T]', 'typeof T[]'],
        correctAnswer: 'T[]',
        correctFeedback:
          '¡Correcto! `T[]` es la sintaxis para "array de T". También puedes escribir `Array<T>` que es equivalente.',
        incorrectFeedback:
          'La sintaxis correcta es `T[]`. Opcionalmente puedes escribir `Array<T>` que es equivalente. `[T]` es una tupla con un único elemento, no un array genérico.',
      },
      {
        question: '¿Qué tipo tiene el retorno de esta función?\n```typescript\nfunction primero<T>(lista: T[]): T | undefined {\n  return lista[0]\n}\nconst r = primero([true, false, true])\n```',
        options: ['any', 'T | undefined', 'boolean | undefined', 'undefined'],
        correctAnswer: 'boolean | undefined',
        correctFeedback:
          '¡Perfecto! TypeScript infiere T = boolean desde `[true, false, true]`. El retorno es T | undefined = boolean | undefined.',
        incorrectFeedback:
          'TypeScript reemplaza T por el tipo inferido. El array es boolean[], así que T = boolean y el retorno es boolean | undefined.',
      },
      {
        question: '¿Qué error daría este código?\n```typescript\nfunction combinar<T>(a: T[], b: T[]): T[] {\n  return [...a, ...b]\n}\ncombinar([1, 2], ["a", "b"])\n```',
        options: [
          'Ningún error — combina todos los tipos',
          'Error: T no puede ser number y string al mismo tiempo en la misma llamada',
          'Error: el spread operator no funciona con genéricos',
          'Error: la función necesita cuatro parámetros',
        ],
        correctAnswer: 'Error: T no puede ser number y string al mismo tiempo en la misma llamada',
        correctFeedback:
          '¡Exacto! TypeScript infiere T = number desde `[1, 2]`, luego `["a", "b"]` (string[]) no es compatible con number[]. Son tipos distintos para el mismo T.',
        incorrectFeedback:
          'Hay un error de tipos. T se infiere como number desde el primer array, pero el segundo array es string[]. Ambos arrays deben tener el mismo tipo de elementos cuando usan el mismo T.',
      },
      {
        question: '¿Cuál es la ventaja de `sinDuplicados<T>(lista: T[]): T[]` sobre `sinDuplicados(lista: any[]): any[]`?',
        options: [
          'La versión genérica es más rápida',
          'La versión genérica preserva el tipo de los elementos en el resultado',
          'La versión any da error en TypeScript',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'La versión genérica preserva el tipo de los elementos en el resultado',
        correctFeedback:
          '¡Correcto! Con el genérico, si pasas `number[]` obtienes `number[]`. Con `any[]` el resultado es `any[]` y TypeScript ya no sabe qué tipo tiene cada elemento.',
        incorrectFeedback:
          'La diferencia está en la seguridad de tipos. Con `any[]` el resultado es `any[]` y TypeScript no puede verificar nada. Con `T[]` TypeScript sabe exactamente qué tipo tienen los elementos del resultado.',
      },
      {
        question: '¿Qué tipo infiere TypeScript para `resultado` en este código?\n```typescript\nfunction duplicar<T>(lista: T[]): T[] { return [...lista, ...lista] }\nconst resultado = duplicar([{ id: 1 }, { id: 2 }])\n```',
        options: [
          'any[]',
          'object[]',
          '{ id: number }[]',
          'T[]',
        ],
        correctAnswer: '{ id: number }[]',
        correctFeedback:
          '¡Perfecto! TypeScript infiere T = { id: number } desde los elementos del array. El resultado es { id: number }[], y puedes acceder a `.id` en cada elemento.',
        incorrectFeedback:
          'TypeScript infiere la estructura del objeto del array. Como los elementos tienen forma `{ id: number }`, T = { id: number } y el resultado es `{ id: number }[]`.',
      },
    ],
  },
  {
    slug: 'genericos-con-objetos',
    title: 'Genéricos con objetos',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 125,
    description:
      'Aprende a crear funciones genéricas que reciben y devuelven objetos manteniendo su estructura.',
    explanation: `## Genéricos con objetos

Los genéricos son especialmente útiles cuando trabajas con objetos, porque TypeScript puede recordar toda la **estructura** del objeto — no solo que "es un objeto", sino exactamente qué propiedades tiene.

### El problema sin genéricos

\`\`\`typescript
function envolver(obj: object) {
  return { datos: obj, timestamp: Date.now() }
}

const resultado = envolver({ nombre: "Ana", edad: 25 })
// resultado.datos.nombre // ❌ Error: object no tiene propiedad "nombre"
\`\`\`

\`object\` es demasiado genérico — TypeScript sabe que hay un objeto, pero no sabe qué propiedades tiene.

### La solución con genéricos

\`\`\`typescript
function envolver<T>(obj: T) {
  return { datos: obj, timestamp: Date.now() }
}

const resultado = envolver({ nombre: "Ana", edad: 25 })
// resultado.datos.nombre // ✅ TypeScript conoce la propiedad "nombre"
// resultado.datos.edad   // ✅ TypeScript conoce la propiedad "edad"
\`\`\`

### Funciones que transforman objetos

\`\`\`typescript
function agregarId<T>(obj: T, id: number): T & { id: number } {
  return { ...obj, id }
}

const producto = agregarId({ nombre: "Mochila", precio: 45 }, 1)
// producto.nombre  ✅
// producto.precio  ✅
// producto.id      ✅
\`\`\`

### Fusionar dos objetos

\`\`\`typescript
function fusionar<A, B>(a: A, b: B): A & B {
  return { ...a, ...b } as A & B
}

const base = { id: 1, nombre: "Ana" }
const extra = { email: "ana@email.com", activo: true }
const completo = fusionar(base, extra)
// completo.id, completo.nombre, completo.email, completo.activo — todos disponibles
\`\`\`

### Clonar un objeto

\`\`\`typescript
function clonar<T extends object>(original: T): T {
  return { ...original }
}

const usuario = { id: 1, nombre: "Luis", activo: true }
const copiaUsuario = clonar(usuario)
copiaUsuario.nombre // ✅ TypeScript sabe que existe nombre
\`\`\`

El \`extends object\` es una **restricción** que dice: "T debe ser un objeto" (no puede ser un primitivo). Veremos esto más en el módulo de constraints.

### Actualizar parcialmente un objeto

\`\`\`typescript
function actualizar<T>(original: T, cambios: Partial<T>): T {
  return { ...original, ...cambios }
}

const usuario = { id: 1, nombre: "Ana", activo: true }
const actualizado = actualizar(usuario, { nombre: "Ana García" })
// actualizado.id = 1, actualizado.nombre = "Ana García", actualizado.activo = true
\`\`\``,
    codeExample: `// helpers.ts

// Envolver un objeto en una estructura de respuesta
function crearRespuesta<T>(datos: T) {
  return {
    datos,
    exito: true,
    timestamp: new Date().toISOString(),
  }
}

const respUsuario = crearRespuesta({ id: 1, nombre: "Ana", email: "ana@email.com" })
console.log(respUsuario.datos.nombre)  // ✅ string
console.log(respUsuario.datos.email)   // ✅ string
console.log(respUsuario.exito)         // ✅ boolean

const respProducto = crearRespuesta({ id: 2, nombre: "Laptop", precio: 999 })
console.log(respProducto.datos.precio) // ✅ number

// Agregar una propiedad a cualquier objeto
function conId<T>(obj: T, id: number): T & { id: number } {
  return { ...obj, id }
}

const productoCon = conId({ nombre: "Mochila", precio: 45 }, 1)
console.log(productoCon.id)     // ✅ number
console.log(productoCon.nombre) // ✅ string
console.log(productoCon.precio) // ✅ number

// Fusionar dos objetos con tipos distintos
function fusionar<A, B>(a: A, b: B): A & B {
  return { ...a, ...b } as A & B
}

const perfil = fusionar(
  { nombre: "Luis", edad: 28 },
  { email: "luis@email.com", activo: true }
)
// perfil.nombre, perfil.edad, perfil.email, perfil.activo — todos disponibles`,
    keyPoints: [
      'Los genéricos con objetos preservan toda la estructura de propiedades del objeto',
      'object como tipo es demasiado general — TypeScript no conoce sus propiedades',
      'Con T, TypeScript recuerda exactamente qué propiedades tiene el objeto',
      'Puedes combinar T con operadores de intersección (&) para añadir propiedades',
      'extends object restringe el genérico para que solo acepte objetos, no primitivos',
    ],
    exercise: {
      description:
        'Crea una función genérica `conFecha<T>(obj: T): T & { creadoEn: string }` que añada una propiedad `creadoEn` con la fecha actual (como string ISO). Pruébala con `{ nombre: "Producto A", precio: 50 }` y `{ id: 1, email: "a@b.com" }`. Verifica que TypeScript conoce todas las propiedades del resultado.',
      hint: 'Usa `{ ...obj, creadoEn: new Date().toISOString() }` y el tipo de retorno `T & { creadoEn: string }`.',
    },
    quiz: [
      {
        question: '¿Por qué usar `object` como tipo de parámetro es menos útil que un genérico?',
        options: [
          'Porque object no existe en TypeScript',
          'Porque object no permite acceder a propiedades específicas del objeto',
          'Porque object solo acepta arrays',
          'Porque object hace el código más lento',
        ],
        correctAnswer: 'Porque object no permite acceder a propiedades específicas del objeto',
        correctFeedback:
          '¡Correcto! Con `object` TypeScript solo sabe que hay un objeto, pero no qué propiedades tiene. Con un genérico T, preserva toda la estructura.',
        incorrectFeedback:
          'El tipo `object` sí existe pero es demasiado amplio — TypeScript no sabe qué propiedades tiene. Con un genérico T, preserva toda la estructura del objeto que se pasa.',
      },
      {
        question: '¿Qué tipo tiene `resultado.datos` en este código?\n```typescript\nfunction envolver<T>(obj: T) { return { datos: obj } }\nconst resultado = envolver({ id: 5, activo: true })\n```',
        options: [
          'object',
          'any',
          '{ id: number, activo: boolean }',
          'T',
        ],
        correctAnswer: '{ id: number, activo: boolean }',
        correctFeedback:
          '¡Perfecto! TypeScript infiere T = { id: number, activo: boolean } desde el argumento. Por lo tanto, resultado.datos tiene exactamente ese tipo.',
        incorrectFeedback:
          'TypeScript infiere T desde el argumento. Como pasaste `{ id: 5, activo: true }`, T es `{ id: number, activo: boolean }` y resultado.datos tiene ese tipo exacto.',
      },
      {
        question: '¿Qué hace `T & { id: number }` en el tipo de retorno?',
        options: [
          'Reemplaza T por { id: number }',
          'Crea un tipo que tiene todas las propiedades de T más la propiedad id',
          'Restringe T para que solo tenga id',
          'Es inválido — T no puede usarse con &',
        ],
        correctAnswer: 'Crea un tipo que tiene todas las propiedades de T más la propiedad id',
        correctFeedback:
          '¡Exacto! `&` es intersección de tipos. T & { id: number } significa "todo lo que tenga T, más la propiedad id de tipo number".',
        incorrectFeedback:
          '`&` es el operador de intersección. `T & { id: number }` significa que el resultado tiene TODAS las propiedades de T, además de la propiedad `id: number`.',
      },
      {
        question: '¿Para qué sirve `extends object` en `function clonar<T extends object>(obj: T)`?',
        options: [
          'Para que clonar herede métodos de object',
          'Para restringir T — solo se pueden pasar objetos, no primitivos como string o number',
          'Para indicar que T es siempre object',
          'extends object no es sintaxis válida en TypeScript',
        ],
        correctAnswer: 'Para restringir T — solo se pueden pasar objetos, no primitivos como string o number',
        correctFeedback:
          '¡Correcto! `extends object` es una restricción (constraint). Garantiza que T sea un tipo objeto, no un primitivo como string, number o boolean.',
        incorrectFeedback:
          '`extends object` es una restricción o constraint. Le dice a TypeScript que T debe ser un objeto. Si intentas pasar un string o number, TypeScript dará un error.',
      },
      {
        question: '¿Qué propiedades tiene `resultado` aquí?\n```typescript\nfunction fusionar<A, B>(a: A, b: B): A & B {\n  return { ...a, ...b } as A & B\n}\nconst resultado = fusionar({ nombre: "Ana" }, { activo: true })\n```',
        options: [
          'Solo nombre',
          'Solo activo',
          'nombre y activo',
          'Ninguna — el tipo es A & B que es unknown',
        ],
        correctAnswer: 'nombre y activo',
        correctFeedback:
          '¡Perfecto! A = { nombre: string } y B = { activo: boolean }. A & B tiene ambas propiedades: nombre y activo.',
        incorrectFeedback:
          'A & B es una intersección — el resultado tiene TODAS las propiedades de A y de B. A = { nombre: string }, B = { activo: boolean }, así que A & B tiene nombre y activo.',
      },
    ],
  },
  {
    slug: 'multiples-genericos',
    title: 'Múltiples genéricos',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 126,
    description:
      'Aprende a usar más de un parámetro genérico, como <T, U>, cuando una función trabaja con varios tipos.',
    explanation: `## Múltiples genéricos

A veces una función trabaja con **más de un tipo**. En esos casos puedes declarar múltiples parámetros genéricos: \`<T, U>\`, \`<A, B>\`, \`<K, V>\`, etc.

### La sintaxis

\`\`\`typescript
function nombreFuncion<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}
\`\`\`

Puedes declarar tantos genéricos como necesites, separados por comas.

### Ejemplo básico: crear un par

\`\`\`typescript
function crearPar<T, U>(primero: T, segundo: U): [T, U] {
  return [primero, segundo]
}

crearPar("hola", 42)          // [string, number]
crearPar(true, ["a", "b"])    // [boolean, string[]]
crearPar({ id: 1 }, "activo") // [{ id: number }, string]
\`\`\`

### Transformar un array: \`<T, U>\`

El caso más común de dos genéricos es una función que recibe un array de un tipo y lo transforma en un array de otro tipo:

\`\`\`typescript
function transformar<T, U>(lista: T[], fn: (item: T) => U): U[] {
  return lista.map(fn)
}

const nombres = transformar(
  [{ id: 1, nombre: "Ana" }, { id: 2, nombre: "Luis" }],
  (usuario) => usuario.nombre
)
// nombres es string[]

const precios = transformar(
  [{ nombre: "Producto A", precio: 10.5 }],
  (p) => p.precio * 1.2
)
// precios es number[]
\`\`\`

### Función que combina dos valores en un objeto

\`\`\`typescript
function combinar<K extends string, V>(clave: K, valor: V): { [key in K]: V } {
  return { [clave]: valor } as { [key in K]: V }
}
\`\`\`

### Nombres de parámetros genéricos comunes

| Letra | Convención |
|-------|-----------|
| \`T\` | Type — tipo general |
| \`U\` | Second type — segundo tipo genérico |
| \`K\` | Key — clave (normalmente string o keyof algo) |
| \`V\` | Value — valor |
| \`E\` | Element — elemento de colección |
| \`R\` | Return — tipo de retorno |

Estas son solo **convenciones**, no reglas obligatorias. Puedes usar nombres más descriptivos cuando ayude a la claridad:

\`\`\`typescript
function transformar<Entrada, Salida>(lista: Entrada[], fn: (item: Entrada) => Salida): Salida[]
\`\`\`

### Cuándo usar múltiples genéricos

Usa múltiples genéricos cuando:
- La entrada y la salida tienen tipos **diferentes**
- Trabajas con pares de valores
- Tienes relaciones entre tipos (clave-valor, entrada-salida)

No uses múltiples genéricos si no los necesitas — más genéricos = más complejidad.`,
    codeExample: `// utils.ts

// Par de valores con tipos distintos
function crearPar<T, U>(primero: T, segundo: U): [T, U] {
  return [primero, segundo]
}

const par1 = crearPar("Ana", 25)          // [string, number]
const par2 = crearPar(true, [1, 2, 3])   // [boolean, number[]]

// Transformar array de un tipo a otro
function transformar<T, U>(lista: T[], fn: (item: T) => U): U[] {
  return lista.map(fn)
}

const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
]

const nombres = transformar(usuarios, (u) => u.nombre)
// nombres es string[]

const ids = transformar(usuarios, (u) => u.id)
// ids es number[]

const etiquetas = transformar(usuarios, (u) => \`\${u.nombre} (\${u.activo ? "activo" : "inactivo"})\`)
// etiquetas es string[]

// Envolver un valor con su clave
function conClave<K extends string, V>(clave: K, valor: V) {
  return { clave, valor }
}

const item1 = conClave("nombre", "Ana")    // { clave: string, valor: string }
const item2 = conClave("precio", 99.9)     // { clave: string, valor: number }

// Aplicar función a un valor y devolver ambos
function conResultado<T, U>(valor: T, fn: (v: T) => U): { entrada: T; salida: U } {
  return { entrada: valor, salida: fn(valor) }
}

const resultado = conResultado("hola mundo", (s) => s.toUpperCase())
// resultado.entrada: string, resultado.salida: string`,
    keyPoints: [
      'Puedes declarar múltiples genéricos separándolos con comas: <T, U>',
      'Las letras T, U, K, V son convenciones — puedes usar nombres descriptivos',
      'Los múltiples genéricos son útiles cuando entrada y salida tienen tipos distintos',
      'La función transformar<T, U> es un ejemplo clásico de dos genéricos',
      'No añadas genéricos extra si no los necesitas — aumentan la complejidad innecesariamente',
    ],
    exercise: {
      description:
        'Crea una función genérica `zipear<T, U>(lista1: T[], lista2: U[]): [T, U][]` que combine dos arrays en un array de pares. Por ejemplo, `zipear(["a", "b"], [1, 2])` devuelve `[["a", 1], ["b", 2]]`. Verifica que TypeScript conoce el tipo de cada elemento del resultado.',
      hint: 'Usa `lista1.map((item, i) => [item, lista2[i]] as [T, U])` para combinar los elementos por índice.',
    },
    quiz: [
      {
        question: '¿Para qué se usan múltiples parámetros genéricos como `<T, U>`?',
        options: [
          'Para manejar errores en la función',
          'Cuando la función trabaja con más de un tipo independiente',
          'Para hacer la función más rápida',
          'Porque TypeScript requiere al menos dos genéricos',
        ],
        correctAnswer: 'Cuando la función trabaja con más de un tipo independiente',
        correctFeedback:
          '¡Correcto! Usas T, U cuando la función recibe o devuelve valores de tipos distintos que no tienen que ser iguales entre sí.',
        incorrectFeedback:
          'Los múltiples genéricos se usan cuando la función maneja tipos independientes. Por ejemplo, transformar datos de tipo T en resultados de tipo U.',
      },
      {
        question: '¿Qué tipo tiene `nombres` aquí?\n```typescript\nfunction transformar<T, U>(lista: T[], fn: (item: T) => U): U[]\nconst nombres = transformar([{ id: 1, nombre: "Ana" }], u => u.nombre)\n```',
        options: ['T[]', 'U[]', 'string[]', 'any[]'],
        correctAnswer: 'string[]',
        correctFeedback:
          '¡Perfecto! U se infiere como string porque la función `u => u.nombre` devuelve un string. El resultado es U[] = string[].',
        incorrectFeedback:
          'TypeScript infiere U desde el retorno de la función lambda. Como `u.nombre` es string, U = string y el resultado es string[].',
      },
      {
        question: '¿Cuándo NO deberías usar múltiples genéricos?',
        options: [
          'Cuando trabajas con arrays',
          'Cuando los tipos de entrada y salida son siempre el mismo',
          'Cuando la función tiene más de un parámetro',
          'Cuando usas objetos como argumentos',
        ],
        correctAnswer: 'Cuando los tipos de entrada y salida son siempre el mismo',
        correctFeedback:
          '¡Exacto! Si la función recibe T y devuelve T, solo necesitas un genérico. Agregar U innecesariamente complica el código.',
        incorrectFeedback:
          'Si entrada y salida son del mismo tipo, un solo genérico `<T>` es suficiente. Los múltiples genéricos se justifican cuando hay tipos independientes distintos.',
      },
      {
        question: '¿Cuál es la convención del parámetro genérico `K`?',
        options: [
          'K es para arrays (de "keep")',
          'K es para claves (de "key")',
          'K es para valores de tipo constante',
          'K es una letra aleatoria sin convención',
        ],
        correctAnswer: 'K es para claves (de "key")',
        correctFeedback:
          '¡Correcto! K es la convención para claves (keys), normalmente de tipo string o creado con keyof. V (value) es la convención complementaria para valores.',
        incorrectFeedback:
          'Por convención, K viene de "key" (clave) y se usa para claves de objetos o diccionarios. Su complemento es V (value). Aunque son convenciones, seguirlas hace el código más legible.',
      },
      {
        question: '¿Qué tipo tiene el resultado de `crearPar("hola", 42)` si `crearPar<T, U>(a: T, b: U): [T, U]`?',
        options: ['[any, any]', '[T, U]', '[string, number]', '[unknown, unknown]'],
        correctAnswer: '[string, number]',
        correctFeedback:
          '¡Perfecto! TypeScript infiere T = string desde "hola" y U = number desde 42. El retorno es [string, number].',
        incorrectFeedback:
          'TypeScript infiere los tipos de T y U desde los argumentos. "hola" es string, 42 es number. El retorno [T, U] se convierte en [string, number].',
      },
    ],
  },
  {
    slug: 'errores-comunes-genericos',
    title: 'Errores comunes con genéricos',
    module: 'Introducción a genéricos',
    moduleNumber: 16,
    order: 127,
    description:
      'Aprende a evitar errores como usar genéricos sin necesidad, abusar de T o crear tipos más complejos de lo necesario.',
    explanation: `## Errores comunes con genéricos

Los genéricos son poderosos, pero también pueden usarse mal. Conocer los errores más comunes te ayudará a escribir código más limpio y mantenible.

### Error 1: usar genéricos cuando no son necesarios

\`\`\`typescript
// ❌ Innecesario — T siempre será string
function saludar<T extends string>(nombre: T): string {
  return "Hola, " + nombre
}

// ✅ Simplificado — solo usa string directamente
function saludar(nombre: string): string {
  return "Hola, " + nombre
}
\`\`\`

**Regla:** Si el tipo de un parámetro o retorno siempre es el mismo, usa ese tipo directamente. Los genéricos se justifican cuando el tipo varía.

### Error 2: abusar de T como si fuera \`any\`

\`\`\`typescript
// ❌ No uses T si vas a acceder a propiedades sin restricciones
function obtenerNombre<T>(obj: T): string {
  return obj.nombre // ❌ Error: T no tiene propiedad "nombre"
}

// ✅ Agrega la restricción necesaria
function obtenerNombre<T extends { nombre: string }>(obj: T): string {
  return obj.nombre // ✅ TypeScript sabe que T tiene "nombre"
}
\`\`\`

### Error 3: genérico que nunca se usa en los parámetros

\`\`\`typescript
// ❌ T nunca se usa — TypeScript no puede inferirlo
function crear<T>(): T {
  return {} as T // Peligroso — no hay verificación real
}

// ✅ Si necesitas crear vacíos, recibe una función constructora
function crear<T>(constructor: () => T): T {
  return constructor()
}
\`\`\`

### Error 4: nombres poco claros para genéricos complejos

\`\`\`typescript
// ❌ Difícil de entender
function procesar<T, U, V>(a: T, b: U, c: V): V {
  return c
}

// ✅ Usa nombres descriptivos cuando T, U no son claros
function procesar<Entrada, Transformacion, Salida>(
  dato: Entrada,
  fn: (d: Entrada) => Transformacion,
  formateador: (t: Transformacion) => Salida
): Salida {
  return formateador(fn(dato))
}
\`\`\`

### Error 5: tipos demasiado complejos con genéricos

\`\`\`typescript
// ❌ Demasiado complejo — difícil de leer y mantener
function procesar<T extends Record<string, unknown[]>>(
  datos: T,
  clave: keyof T
): T[keyof T][0] {
  return datos[clave][0]
}

// ✅ Si el tipo se vuelve incomprensible, simplifica o divide en pasos
\`\`\`

### Error 6: usar \`as T\` como escape del sistema de tipos

\`\`\`typescript
// ❌ Forzar un tipo con as T elimina la seguridad
function convertir<T>(valor: unknown): T {
  return valor as T // Peligroso — TypeScript confía en ti sin verificar
}

// Si TypeScript no puede inferir el tipo, considera si realmente necesitas genéricos
\`\`\`

### La regla de oro

**Usa genéricos solo cuando el tipo varía entre llamadas y quieres preservar esa información.** Si el tipo es siempre el mismo, usa el tipo directamente. Si no necesitas preservar el tipo, considera \`unknown\` o un type guard.`,
    codeExample: `// main.ts

// ❌ Error 1: genérico innecesario
function saludarMal<T extends string>(nombre: T): string {
  return 'Hola, ' + nombre
}

// ✅ Correcto: tipo directo cuando siempre es string
function saludar(nombre: string): string {
  return 'Hola, ' + nombre
}

// ❌ Error 2: acceder a propiedades sin restricción
// function obtenerNombreMal<T>(obj: T): string {
//   return obj.nombre  // ❌ T no tiene nombre garantizado
// }

// ✅ Correcto: usar extends para garantizar la propiedad
function obtenerNombre<T extends { nombre: string }>(obj: T): string {
  return obj.nombre
}

const usuario = { id: 1, nombre: "Ana", activo: true }
console.log(obtenerNombre(usuario)) // ✅ "Ana"

// ❌ Error 3: genérico que nunca se usa en parámetros
// function crearVacioMal<T>(): T {
//   return {} as T  // Peligroso — sin verificación real
// }

// ✅ Correcto: o recibe el tipo como factory o usa un approach diferente
function crearConDefecto<T>(valorDefecto: T): T {
  return valorDefecto
}

const defecto = crearConDefecto({ nombre: "", activo: false })

// ❌ Error 4: demasiados genéricos para algo simple
// function f<A, B, C, D>(a: A, b: B, c: C): D { ... }

// ✅ Correcto: solo los genéricos que realmente varían
function transformar<T, U>(lista: T[], fn: (item: T) => U): U[] {
  return lista.map(fn)
}`,
    keyPoints: [
      'No uses genéricos cuando el tipo siempre es el mismo — usa el tipo directamente',
      'No accedas a propiedades de T sin restricciones — usa extends para garantizarlas',
      'Evita as T para forzar tipos — elimina la seguridad que dan los genéricos',
      'Usa nombres descriptivos cuando T, U no transmiten suficiente información',
      'Más genéricos no siempre es mejor — la complejidad tiene un costo',
    ],
    exercise: {
      description:
        'Revisa estas tres funciones y corrige los errores: (1) `function obtenerEdad<T>(p: T): number { return p.edad }`, (2) `function convertir<T>(v: unknown): T { return v as T }`, y (3) `function repetir<T extends string>(s: T, n: number): string { return s.repeat(n) }`. Explica qué está mal en cada una y propón la versión correcta.',
      hint: 'Para (1) usa extends con la propiedad necesaria, para (2) considera si el genérico aporta algo real, para (3) simplifica usando string directamente.',
    },
    quiz: [
      {
        question: '¿Cuál es el problema de `function saludar<T extends string>(n: T): string`?',
        options: [
          'T extends string no es sintaxis válida',
          'El genérico es innecesario — T siempre será string, mejor usar string directamente',
          'La función no puede retornar string',
          'No se puede usar string en un genérico',
        ],
        correctAnswer: 'El genérico es innecesario — T siempre será string, mejor usar string directamente',
        correctFeedback:
          '¡Correcto! Si el tipo siempre es string, escribir `function saludar(n: string): string` es más claro y simple. El genérico no aporta nada aquí.',
        incorrectFeedback:
          'La función compila, pero el genérico no aporta valor. Como T siempre será string (o un subtipo de string), es más claro escribir el tipo directamente: `function saludar(n: string): string`.',
      },
      {
        question: '¿Qué error da este código?\n```typescript\nfunction obtener<T>(obj: T): string {\n  return obj.nombre\n}\n```',
        options: [
          'Ningún error — T puede tener cualquier propiedad',
          'Error: la propiedad "nombre" no existe en el tipo T',
          'Error: T no puede usarse como objeto',
          'Error: el retorno debe ser T, no string',
        ],
        correctAnswer: 'Error: la propiedad "nombre" no existe en el tipo T',
        correctFeedback:
          '¡Exacto! T es genérico — puede ser cualquier tipo, incluso number o boolean que no tienen "nombre". Debes usar `T extends { nombre: string }` para garantizarlo.',
        incorrectFeedback:
          'TypeScript no puede garantizar que T tenga la propiedad "nombre" — T podría ser number, boolean, o cualquier cosa. Necesitas `T extends { nombre: string }` para acceder a esa propiedad de forma segura.',
      },
      {
        question: '¿Por qué `return valor as T` en una función genérica es peligroso?',
        options: [
          'Porque as T es sintaxis inválida',
          'Porque elimina la verificación de tipos — TypeScript confía en ti sin validar',
          'Porque T no puede usarse con as',
          'Porque solo funciona si T es string',
        ],
        correctAnswer: 'Porque elimina la verificación de tipos — TypeScript confía en ti sin validar',
        correctFeedback:
          '¡Correcto! `as T` es un type assertion — le dices a TypeScript "confía en mí, sé que es T". Pero si estás equivocado, el error aparecerá en ejecución, no en compilación.',
        incorrectFeedback:
          '`as T` le dice a TypeScript "confía en mí". Pero TypeScript no verifica si eso es verdad. Si el tipo real no es T, el código fallará en ejecución sin ninguna advertencia en compilación.',
      },
      {
        question: '¿Cuándo está justificado usar un genérico?',
        options: [
          'Siempre — los genéricos hacen el código más profesional',
          'Cuando el tipo varía entre llamadas y quieres preservar esa información',
          'Solo cuando el tipo es string o number',
          'Nunca — es mejor usar any para flexibilidad',
        ],
        correctAnswer: 'Cuando el tipo varía entre llamadas y quieres preservar esa información',
        correctFeedback:
          '¡Perfecto! Un genérico se justifica cuando diferentes llamadas usarán tipos distintos Y necesitas que el tipo se preserve en el retorno o en otros parámetros.',
        incorrectFeedback:
          'Los genéricos tienen un costo en complejidad. Solo se justifican cuando el tipo varía entre llamadas y necesitas preservar esa información. Si el tipo siempre es el mismo, usa el tipo directamente.',
      },
      {
        question: '¿Cuál es la versión correcta de esta función?\n```typescript\nfunction obtenerEdad<T>(persona: T): number {\n  return persona.edad\n}\n```',
        options: [
          'function obtenerEdad<T>(persona: T): T { return persona.edad }',
          'function obtenerEdad(persona: any): number { return persona.edad }',
          'function obtenerEdad<T extends { edad: number }>(persona: T): number { return persona.edad }',
          'function obtenerEdad<T>(persona: T & object): number { return (persona as any).edad }',
        ],
        correctAnswer: 'function obtenerEdad<T extends { edad: number }>(persona: T): number { return persona.edad }',
        correctFeedback:
          '¡Perfecto! `T extends { edad: number }` garantiza que T siempre tendrá la propiedad `edad` de tipo number. Es seguro y flexible.',
        incorrectFeedback:
          'La solución correcta es agregar la restricción: `T extends { edad: number }`. Esto garantiza que el tipo pasado siempre tendrá una propiedad `edad` de tipo number, haciéndola segura.',
      },
    ],
  },
]

export const tsModule16: Module = {
  number: 16,
  title: 'Introducción a genéricos',
  level: 'nivel4',
  lessons: lessonsTsModule16,
}
