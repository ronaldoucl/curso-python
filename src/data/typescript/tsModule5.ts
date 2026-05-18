import type { Lesson, Module } from '@/types'

export const lessonsTsModule5: Lesson[] = [
  // ── Lección 31 ───────────────────────────────────────────────────────────
  {
    slug: 'arrays-tipados',
    title: 'Arrays tipados',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 1,
    description:
      'Aprende a crear arrays que solo aceptan valores de un tipo específico.',
    explanation: `Un **array tipado** en TypeScript es un array que solo puede contener valores de un tipo determinado. Si intentas añadir un valor del tipo incorrecto, TypeScript te lo avisa antes de ejecutar el código.

**¿Qué es un array tipado?**

En JavaScript, un array puede tener cualquier mezcla de valores:

\`\`\`js
const cosas = [1, "hola", true, null]  // JavaScript no protesta
\`\`\`

En TypeScript, puedes declarar arrays que solo acepten un tipo:

\`\`\`ts
const numeros: number[] = [1, 2, 3, 4, 5]
const nombres: string[] = ["Ana", "Carlos", "Sofía"]
const activos: boolean[] = [true, false, true]
\`\`\`

**¿Cómo se anota el tipo de un array?**

Hay dos formas (equivalentes):

\`\`\`ts
// Forma 1: tipo seguido de []
let numeros: number[] = [1, 2, 3]
let palabras: string[] = ["hola", "mundo"]

// Forma 2: Array<tipo> (genérico)
let numeros: Array<number> = [1, 2, 3]
let palabras: Array<string> = ["hola", "mundo"]
\`\`\`

Aprenderás más sobre la diferencia en la siguiente lección.

**¿Qué verifica TypeScript en arrays tipados?**

\`\`\`ts
const notas: number[] = [8.5, 7.0, 9.5, 6.0]

notas.push(10)      // ✓ es un número
notas.push(8.5)     // ✓ es un número
// notas.push("diez") // Error: string no es number
// notas.push(true)    // Error: boolean no es number
\`\`\`

**Inferencia con arrays**

Si inicializas el array con valores, TypeScript puede inferir el tipo:

\`\`\`ts
const numeros = [1, 2, 3]         // TypeScript infiere: number[]
const palabras = ["hola", "mundo"] // TypeScript infiere: string[]
\`\`\`

Pero si el array está vacío, debes anotarlo:

\`\`\`ts
const tareas = []          // TypeScript infiere: never[] (problemático)
const tareas: string[] = [] // ✓ correcto
\`\`\`

**Métodos de array con tipos**

Los métodos de array funcionan igual que en JavaScript, pero TypeScript sabe el tipo de cada elemento:

\`\`\`ts
const precios: number[] = [10, 25, 15, 30, 5]

const mayores = precios.filter(p => p > 15)  // TypeScript sabe que p es number
const total = precios.reduce((sum, p) => sum + p, 0)  // TypeScript sabe que es number
const primero = precios[0]  // TypeScript sabe que es number
\`\`\``,
    codeExample: `// ── archivo: arrays.ts ───────────────────────────────────────────────────

// Arrays tipados básicos
const notas: number[] = [7.5, 8.0, 9.5, 6.0, 8.5]
const nombres: string[] = ["Ana", "Carlos", "Sofía", "Luis"]
const activos: boolean[] = [true, false, true, true]

// TypeScript verifica el tipo de los elementos:
notas.push(10)   // ✓
// notas.push("diez")  // Error: string no es number

// Métodos de array — TypeScript conoce el tipo de cada elemento
const aprobados = notas.filter(n => n >= 6)
console.log("Aprobados:", aprobados)
// → Aprobados: [7.5, 8.0, 9.5, 6.0, 8.5]

const promedio = notas.reduce((sum, n) => sum + n, 0) / notas.length
console.log("Promedio:", promedio.toFixed(2))
// → Promedio: 7.90

// Acceso con índice — TypeScript sabe que es number
const primera = notas[0]
console.log(primera.toFixed(1))  // → 7.5

// Array de objetos
const estudiantes: { nombre: string; nota: number }[] = [
  { nombre: "Ana", nota: 8.5 },
  { nombre: "Carlos", nota: 7.0 },
  { nombre: "Sofía", nota: 9.5 }
]

// TypeScript conoce la forma de cada objeto
const mejorNota = Math.max(...estudiantes.map(e => e.nota))
console.log("Mejor nota:", mejorNota)  // → Mejor nota: 9.5

// Array vacío — siempre anota el tipo
const tareas: string[] = []
tareas.push("Estudiar TypeScript")
tareas.push("Practicar arrays")
console.log(tareas)`,
    keyPoints: [
      'Un array tipado solo acepta valores del tipo especificado.',
      'Sintaxis: number[] o Array<number> — ambas son equivalentes.',
      'TypeScript verifica el tipo cuando agregas elementos con push() o en el literal.',
      'Si inicializas con valores, TypeScript puede inferir el tipo del array.',
      'Para arrays vacíos, siempre anota el tipo: const lista: string[] = [].',
      'Los métodos de array (.filter, .map, .reduce) funcionan igual — TypeScript conoce el tipo de cada elemento.',
    ],
    exercise: {
      description:
        'Crea un archivo arrays.ts con: 1) un array de precios (number[]) con 5 valores, 2) un array de nombres de productos (string[]) con 5 valores, 3) usa .filter() para obtener los precios mayores a 50, 4) usa .map() para agregar "$" a cada precio, 5) calcula el precio total con .reduce(). Muestra todos los resultados con console.log.',
      hint: 'Para agregar "$": precios.map(p => "$" + p.toFixed(2)). Para el total: precios.reduce((suma, p) => suma + p, 0). El segundo argumento de reduce (0) es el valor inicial del acumulador.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de declarar un array de strings en TypeScript?',
        options: [
          'let nombres: [string] = ["Ana", "Carlos"]',
          'let nombres: string[] = ["Ana", "Carlos"]',
          'let nombres: Array = ["Ana", "Carlos"]',
          'let nombres: strings = ["Ana", "Carlos"]',
        ],
        correctAnswer: 'let nombres: string[] = ["Ana", "Carlos"]',
        correctFeedback:
          'Correcto. string[] es la forma más común de declarar un array de strings en TypeScript. También puedes usar Array<string>, que es equivalente.',
        incorrectFeedback:
          'No es correcto. La forma correcta es string[] (o Array<string>). [string] es la sintaxis de tupla, Array sin tipo es incompleto, y strings no es un tipo válido.',
      },
      {
        question: '¿Qué hace TypeScript si intentas hacer push() de un string en un number[]?',
        options: [
          'Convierte el string a número automáticamente',
          'Agrega el string al array sin error',
          'Genera un error de tipo: Argument of type string is not assignable to parameter of type number',
          'Solo genera un warning, no un error',
        ],
        correctAnswer: 'Genera un error de tipo: Argument of type string is not assignable to parameter of type number',
        correctFeedback:
          'Correcto. TypeScript verifica el tipo de los elementos que agregas al array. Si el array es number[], solo puedes agregar numbers.',
        incorrectFeedback:
          'No es correcto. TypeScript genera un error cuando intentas agregar un elemento del tipo incorrecto a un array tipado.',
      },
      {
        question: '¿Qué tipo infiere TypeScript para este array vacío?\n\nlet lista = []',
        options: ['any[]', 'string[]', 'never[]', 'undefined[]'],
        correctAnswer: 'never[]',
        correctFeedback:
          'Correcto. TypeScript infiere never[] para arrays vacíos porque no tiene información sobre qué tipo de elementos contendrá. Por eso debes anotar explícitamente: let lista: string[] = [].',
        incorrectFeedback:
          'No es correcto. Para un array vacío sin contexto, TypeScript infiere never[], lo que significa que no puedes agregar nada. Siempre anota el tipo de arrays vacíos: let lista: string[] = [].',
      },
    ],
  },

  // ── Lección 32 ───────────────────────────────────────────────────────────
  {
    slug: 'array-sintaxis',
    title: 'string[] vs Array<string>',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 2,
    description:
      'Aprende las dos formas comunes de escribir arrays tipados y cuándo usar cada una.',
    explanation: `TypeScript ofrece dos formas equivalentes de escribir el tipo de un array. Entender ambas te ayuda a leer código de diferentes estilos y a elegir cuál prefieres.

**Forma 1: tipo seguido de []**

\`\`\`ts
let numeros: number[] = [1, 2, 3]
let palabras: string[] = ["hola", "mundo"]
let activos: boolean[] = [true, false]
\`\`\`

Esta es la forma más común y la que verás con más frecuencia. Es concisa y fácil de leer para tipos simples.

**Forma 2: Array<tipo> (sintaxis genérica)**

\`\`\`ts
let numeros: Array<number> = [1, 2, 3]
let palabras: Array<string> = ["hola", "mundo"]
let activos: Array<boolean> = [true, false]
\`\`\`

Esta es la sintaxis de **genéricos** de TypeScript. Los genéricos son una característica avanzada que verás más cuando aprendas sobre funciones, clases e interfaces. Por ahora, solo debes saber que \`Array<string>\` y \`string[]\` son lo mismo.

**¿Cuál usar?**

Ambas son igualmente correctas y producen el mismo comportamiento. La elección es principalmente de estilo:

- **\`string[]\`:** más concisa y preferida por la mayoría de guías de estilo
- **\`Array<string>\`:** más explícita sobre la naturaleza genérica del tipo

En código real verás las dos. Lo importante es ser consistente dentro de un proyecto.

**¿Cuándo Array<> puede ser preferible?**

Con tipos más complejos, \`Array<>\` puede ser más legible:

\`\`\`ts
// Con tipo union en array:
// Usando []:
let valores: (string | number)[] = [1, "dos", 3, "cuatro"]

// Usando Array<>:
let valores: Array<string | number> = [1, "dos", 3, "cuatro"]
\`\`\`

Para tipos simples como \`string[]\` o \`number[]\`, la forma \`[]\` es más limpia.

**Equivalencia perfecta**

Las dos formas son completamente intercambiables en TypeScript. Si alguien en tu equipo prefiere una u otra, puedes trabajar con cualquiera:

\`\`\`ts
function procesarNombres(nombres: string[]): Array<string> {
  return nombres.map(n => n.toUpperCase())  // TypeScript acepta ambos
}
\`\`\``,
    codeExample: `// ── archivo: sintaxis-array.ts ───────────────────────────────────────────

// Forma 1: tipo[] — más común y concisa
const precios1: number[] = [10.5, 25.0, 15.75]
const colores1: string[] = ["rojo", "verde", "azul"]

// Forma 2: Array<tipo> — más explícita
const precios2: Array<number> = [10.5, 25.0, 15.75]
const colores2: Array<string> = ["rojo", "verde", "azul"]

// Son completamente equivalentes:
function calcularTotal1(precios: number[]): number {
  return precios.reduce((sum, p) => sum + p, 0)
}

function calcularTotal2(precios: Array<number>): number {
  return precios.reduce((sum, p) => sum + p, 0)
}

console.log(calcularTotal1([10, 20, 30]))  // → 60
console.log(calcularTotal2([10, 20, 30]))  // → 60

// Tipo unión en arrays — aquí Array<> puede ser más legible
const mixto1: (string | number)[] = [1, "dos", 3, "cuatro"]
const mixto2: Array<string | number> = [1, "dos", 3, "cuatro"]

// Ambas funcionan igual
console.log(mixto1.length)  // → 4
console.log(mixto2.length)  // → 4

// Recomendación para este curso:
// Usa string[] y number[] — es la convención más común
const nombres: string[] = ["Ana", "Carlos"]
const puntuaciones: number[] = [85, 92, 78]`,
    keyPoints: [
      'string[] y Array<string> son dos formas de escribir el mismo tipo de array — completamente equivalentes.',
      'La forma tipo[] es más concisa y la más usada en la comunidad TypeScript.',
      'La forma Array<tipo> es la sintaxis de genéricos — útil para tipos más complejos.',
      'Para tipos simples (string, number, boolean), prefiere la forma tipo[].',
      'Para tipos unión en arrays, Array<string | number> puede ser más legible que (string | number)[].',
      'Lo importante es ser consistente dentro del mismo proyecto.',
    ],
    exercise: {
      description:
        'Escribe la misma función dos veces — una con string[] y otra con Array<string> — que reciba un array de nombres y devuelva los que empiezan por "A". Usa .filter() para filtrar. Verifica que ambas funciones producen el mismo resultado al llamarlas con el mismo array.',
      hint: 'Para filtrar por primera letra: nombres.filter(n => n.startsWith("A")). La única diferencia entre las dos funciones será la anotación del tipo: string[] vs Array<string>.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre string[] y Array<string> en TypeScript?',
        options: [
          'string[] solo acepta strings de una letra',
          'Array<string> permite arrays vacíos, string[] no',
          'No hay diferencia: son dos formas equivalentes del mismo tipo',
          'Array<string> es más moderno y reemplaza a string[]',
        ],
        correctAnswer: 'No hay diferencia: son dos formas equivalentes del mismo tipo',
        correctFeedback:
          'Correcto. string[] y Array<string> son completamente equivalentes en TypeScript. Producen exactamente el mismo comportamiento.',
        incorrectFeedback:
          'No es correcto. string[] y Array<string> son equivalentes en TypeScript. Son dos sintaxis diferentes para el mismo tipo de dato.',
      },
      {
        question: '¿Cómo se escribe el tipo de un array que puede contener strings o números?',
        options: [
          'string | number[]',
          '(string | number)[] o Array<string | number>',
          'string+number[]',
          'mixed[]',
        ],
        correctAnswer: '(string | number)[] o Array<string | number>',
        correctFeedback:
          'Correcto. Para un array con tipos unión, los paréntesis son necesarios en la forma []: (string | number)[]. Con Array<> es más claro: Array<string | number>.',
        incorrectFeedback:
          'No es correcto. Para un array que acepta strings o números, la sintaxis correcta es (string | number)[] o Array<string | number>. Los paréntesis son necesarios en la forma [] para que el tipo unión se aplique al array completo.',
      },
    ],
  },

  // ── Lección 33 ───────────────────────────────────────────────────────────
  {
    slug: 'arrays-number-boolean',
    title: 'Arrays de números y booleanos',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 3,
    description:
      'Aprende a trabajar con listas de números y valores booleanos de forma segura.',
    explanation: `Los arrays de números y booleanos son muy comunes en aplicaciones reales. TypeScript te da seguridad adicional para trabajar con ellos correctamente.

**Arrays de números: casos de uso reales**

Los arrays de números se usan para: notas, precios, estadísticas, mediciones, series de tiempo, puntajes, etc.

\`\`\`ts
const notas: number[] = [7.5, 8.0, 9.5, 6.0, 8.5]
const precios: number[] = [29.99, 15.50, 99.00, 5.00]
const temperaturas: number[] = [18, 22, 25, 19, 23]
\`\`\`

**Operaciones comunes con arrays de números**

\`\`\`ts
const numeros: number[] = [5, 10, 15, 20, 25]

// Suma total
const total = numeros.reduce((sum, n) => sum + n, 0)  // → 75

// Promedio
const promedio = total / numeros.length  // → 15

// Máximo y mínimo
const max = Math.max(...numeros)  // → 25
const min = Math.min(...numeros)  // → 5

// Filtrar
const mayores = numeros.filter(n => n > 10)  // → [15, 20, 25]

// Transformar
const dobles = numeros.map(n => n * 2)  // → [10, 20, 30, 40, 50]
\`\`\`

**Arrays de booleanos**

Menos comunes que los de números, pero útiles para listas de estados:

\`\`\`ts
const respuestas: boolean[] = [true, false, true, true, false]

// Contar cuántos son true
const correctas = respuestas.filter(r => r === true).length
console.log(\`Correctas: \${correctas} de \${respuestas.length}\`)
// → Correctas: 3 de 5

// Verificar si todos son true
const todosCorrecto = respuestas.every(r => r)  // → false

// Verificar si alguno es true
const alguienCorrecto = respuestas.some(r => r)  // → true
\`\`\`

**Arrays de booleanos derivados**

Muy común: crear un array de booleanos a partir de otro array usando .map():

\`\`\`ts
const notas: number[] = [8.5, 5.0, 7.0, 4.5, 9.0]
const aprobados: boolean[] = notas.map(n => n >= 6)
// → [true, false, true, false, true]
\`\`\`

**Seguridad de tipos en operaciones**

TypeScript verifica que las operaciones tienen sentido para el tipo:

\`\`\`ts
const numeros: number[] = [1, 2, 3]
numeros.map(n => n.toFixed(2))  // ✓ toFixed es un método de number

const textos: string[] = ["hola", "mundo"]
// textos.map(t => t.toFixed(2))  // Error: toFixed no existe en string
\`\`\``,
    codeExample: `// ── archivo: arrays-num-bool.ts ──────────────────────────────────────────

// Arrays de números: estadísticas de estudiantes
const notasClase: number[] = [8.5, 7.0, 9.5, 5.0, 8.0, 6.5, 4.5, 9.0]

const aprobaron = notasClase.filter(n => n >= 6).length
const reprobaron = notasClase.filter(n => n < 6).length
const promedio = notasClase.reduce((sum, n) => sum + n, 0) / notasClase.length
const maxima = Math.max(...notasClase)
const minima = Math.min(...notasClase)

console.log(\`Total estudiantes: \${notasClase.length}\`)
console.log(\`Aprobaron: \${aprobaron}\`)
console.log(\`Reprobaron: \${reprobaron}\`)
console.log(\`Promedio: \${promedio.toFixed(2)}\`)
console.log(\`Nota máxima: \${maxima}\`)
console.log(\`Nota mínima: \${minima}\`)

// Arrays de booleanos: respuestas de un quiz
const respuestasQuiz: boolean[] = [true, true, false, true, false, true, true, false]

const correctas = respuestasQuiz.filter(r => r).length
const total = respuestasQuiz.length
const porcentaje = (correctas / total) * 100

console.log(\`Correctas: \${correctas}/\${total} (\${porcentaje}%)\`)

// ¿Pasó el umbral del 70%?
const aprobado: boolean = porcentaje >= 70
console.log(\`Aprobó: \${aprobado}\`)

// Array de booleanos derivado
const estadosAprobacion: boolean[] = notasClase.map(n => n >= 6)
console.log("Estados:", estadosAprobacion)
// → [true, true, true, false, true, true, false, true]`,
    keyPoints: [
      'Los arrays de números son muy comunes para notas, precios, estadísticas y series de datos.',
      'Math.max(...numeros) y Math.min(...numeros) encuentran el mayor y menor valor.',
      'reduce() calcula el total, dividido entre length da el promedio.',
      'Los arrays de booleanos son útiles para listas de estados o resultados de quiz.',
      'every() verifica si todos los elementos cumplen la condición, some() si al menos uno la cumple.',
      'map() permite convertir un array de números en un array de booleanos: notas.map(n => n >= 6).',
    ],
    exercise: {
      description:
        'Crea un array de 8 precios (number[]) de productos de una tienda. Calcula: 1) el precio total, 2) el precio promedio, 3) los precios que superan el promedio, 4) un array de booleanos que indique si cada precio está por encima del promedio (true) o no (false). Muestra todos los resultados.',
      hint: 'Calcula el promedio primero. Luego: preciosAltosCount = precios.filter(p => p > promedio).length. Array booleano: precios.map(p => p > promedio).',
    },
    quiz: [
      {
        question: '¿Cómo se encuentra el valor máximo de un array de números en TypeScript?',
        options: [
          'numeros.max()',
          'Math.max(numeros)',
          'Math.max(...numeros)',
          'numeros.reduce((a, b) => a > b ? a : b)',
        ],
        correctAnswer: 'Math.max(...numeros)',
        correctFeedback:
          'Correcto. Math.max() no acepta un array directamente, pero con el operador spread (...), expandes el array en argumentos individuales. También funciona numeros.reduce((a,b) => a > b ? a : b).',
        incorrectFeedback:
          'No es correcto. Arrays no tienen un método .max(). Math.max() necesita valores separados, así que debes usar spread: Math.max(...numeros) para pasar todos los elementos como argumentos.',
      },
      {
        question: '¿Qué hace el método every() en un array de booleanos?',
        options: [
          'Devuelve el número de elementos que son true',
          'Devuelve true solo si todos los elementos cumplen la condición',
          'Devuelve true si al menos un elemento cumple la condición',
          'Convierte todos los elementos a true',
        ],
        correctAnswer: 'Devuelve true solo si todos los elementos cumplen la condición',
        correctFeedback:
          'Correcto. every() devuelve true solo si todos los elementos del array cumplen la condición. Si al menos uno no la cumple, devuelve false.',
        incorrectFeedback:
          'No es correcto. every() devuelve true solo si TODOS los elementos cumplen la condición. Para verificar si al menos uno la cumple, usa some().',
      },
    ],
  },

  // ── Lección 34 ───────────────────────────────────────────────────────────
  {
    slug: 'arrays-objetos-typescript',
    title: 'Arrays de objetos',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 4,
    description:
      'Aprende a crear arrays que contienen objetos con una estructura definida.',
    explanation: `Un patrón muy común en TypeScript es trabajar con arrays de objetos — listas de productos, usuarios, tareas, transacciones, etc. TypeScript puede verificar la estructura de cada objeto en el array.

**Sintaxis básica**

\`\`\`ts
interface Producto {
  nombre: string
  precio: number
  disponible: boolean
}

const productos: Producto[] = [
  { nombre: "Laptop", precio: 850, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: true },
  { nombre: "Monitor", precio: 350, disponible: false },
]
\`\`\`

TypeScript verifica que cada objeto del array cumple con la estructura de \`Producto\`.

**¿Qué verifica TypeScript?**

1. Que cada objeto tenga todas las propiedades requeridas
2. Que cada propiedad tenga el tipo correcto
3. Que no haya propiedades no declaradas en la interfaz (en objetos literales)

\`\`\`ts
const productos: Producto[] = [
  { nombre: "Tablet", precio: 300, disponible: true },   // ✓
  // { nombre: "Cable", precio: "cinco" }  // Error: precio debe ser number y falta disponible
]
\`\`\`

**Operaciones con arrays de objetos**

\`\`\`ts
// Filtrar
const disponibles = productos.filter(p => p.disponible)

// Buscar
const laptop = productos.find(p => p.nombre === "Laptop")

// Ordenar
const porPrecio = [...productos].sort((a, b) => a.precio - b.precio)

// Transformar
const nombres = productos.map(p => p.nombre)
const precios = productos.map(p => p.precio)

// Total
const totalInventario = productos.reduce((sum, p) => sum + p.precio, 0)
\`\`\`

**Tipo inline vs interfaz**

Para arrays de objetos simples de un solo uso puedes usar tipo inline:

\`\`\`ts
const colores: { nombre: string; hex: string }[] = [
  { nombre: "rojo", hex: "#FF0000" },
  { nombre: "verde", hex: "#00FF00" },
]
\`\`\`

Pero si el mismo tipo se usa en varios lugares, define una interfaz.

**Acceso con tipo seguro**

Al acceder a un elemento del array, TypeScript sabe su tipo:

\`\`\`ts
const primer = productos[0]    // TypeScript sabe que es Producto
primer.nombre.toUpperCase()    // ✓ TypeScript sabe que nombre es string
primer.precio.toFixed(2)       // ✓ TypeScript sabe que precio es number
\`\`\``,
    codeExample: `// ── archivo: arrays-objetos.ts ───────────────────────────────────────────

interface Estudiante {
  id: number
  nombre: string
  nota: number
  aprobado: boolean
}

const clase: Estudiante[] = [
  { id: 1, nombre: "Ana",    nota: 8.5, aprobado: true  },
  { id: 2, nombre: "Carlos", nota: 5.5, aprobado: false },
  { id: 3, nombre: "Sofía",  nota: 9.5, aprobado: true  },
  { id: 4, nombre: "Luis",   nota: 4.0, aprobado: false },
  { id: 5, nombre: "María",  nota: 7.5, aprobado: true  },
]

// Filtrar aprobados
const aprobados = clase.filter(e => e.aprobado)
console.log("Aprobados:", aprobados.map(e => e.nombre))
// → ["Ana", "Sofía", "María"]

// Buscar por nombre
const buscado = clase.find(e => e.nombre === "Sofía")
if (buscado) {
  console.log(\`\${buscado.nombre}: \${buscado.nota}\`)  // → Sofía: 9.5
}

// Promedio general
const promedio = clase.reduce((sum, e) => sum + e.nota, 0) / clase.length
console.log(\`Promedio: \${promedio.toFixed(2)}\`)  // → Promedio: 7.00

// Ordenar por nota (mayor a menor)
const ranking = [...clase].sort((a, b) => b.nota - a.nota)
console.log("Ranking:")
ranking.forEach((e, i) => {
  console.log(\`  \${i + 1}. \${e.nombre}: \${e.nota}\`)
})

// TypeScript verifica el acceso:
const primero = clase[0]
primero.nombre.toUpperCase()  // ✓ TypeScript sabe que nombre es string`,
    keyPoints: [
      'Los arrays de objetos se declaran como: Interfaz[] o { prop: tipo }[].',
      'TypeScript verifica que cada objeto del array tenga la estructura correcta.',
      'filter(), find(), map(), sort() y reduce() trabajan con objetos tipados.',
      'Al acceder a un elemento del array, TypeScript conoce el tipo de cada propiedad.',
      'Usa una interfaz cuando el mismo tipo de objeto se repite en varios lugares del código.',
      'Para arrays de un solo uso, el tipo inline puede ser suficiente: { nombre: string; edad: number }[].',
    ],
    exercise: {
      description:
        'Crea una interfaz Tarea con: id (number), titulo (string), completada (boolean), prioridad (1 | 2 | 3). Crea un array de 5 tareas. Luego: 1) filtra las completadas, 2) filtra las de prioridad 1, 3) ordena por prioridad (1 es la más alta, muéstralas de 1 a 3), 4) muestra cuántas están completadas y cuántas no.',
      hint: 'Para ordenar por prioridad ascendente: tareas.sort((a, b) => a.prioridad - b.prioridad). El tipo 1 | 2 | 3 es un tipo unión de literales numéricos.',
    },
    quiz: [
      {
        question: '¿Cómo se declara un array de objetos Producto en TypeScript?',
        options: [
          'let productos: Producto = [...]',
          'let productos: Producto[] = [...]',
          'let productos: Array = [...]',
          'let productos: [Producto] = [...]',
        ],
        correctAnswer: 'let productos: Producto[] = [...]',
        correctFeedback:
          'Correcto. Para un array de objetos de tipo Producto, usas Producto[] (o Array<Producto>). Un [] después del tipo indica que es un array de ese tipo.',
        incorrectFeedback:
          'No es correcto. Para un array de objetos de tipo Producto, la sintaxis es Producto[] o Array<Producto>. Sin el [] sería una sola instancia de Producto.',
      },
      {
        question: '¿Qué hace .find() en un array de objetos?',
        options: [
          'Devuelve todos los elementos que cumplen la condición',
          'Devuelve el primer elemento que cumple la condición (o undefined si no lo encuentra)',
          'Devuelve el índice del primer elemento que cumple la condición',
          'Elimina el elemento que cumple la condición',
        ],
        correctAnswer: 'Devuelve el primer elemento que cumple la condición (o undefined si no lo encuentra)',
        correctFeedback:
          'Correcto. find() busca en el array y devuelve el primer elemento que cumple la condición. Si ninguno cumple, devuelve undefined. Por eso es buena práctica verificar el resultado antes de usarlo.',
        incorrectFeedback:
          'No es correcto. find() devuelve el primer elemento que cumple la condición (no todos — eso es filter()). Si no encuentra ninguno, devuelve undefined.',
      },
    ],
  },

  // ── Lección 35 ───────────────────────────────────────────────────────────
  {
    slug: 'tuplas-typescript',
    title: 'Tuplas',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 5,
    description:
      'Aprende qué es una tupla y cómo permite representar arrays con posiciones y tipos específicos.',
    explanation: `Una **tupla** en TypeScript es un tipo especial de array donde el número de elementos y el tipo de cada posición están fijos.

**¿Qué hace diferente a una tupla?**

Un array normal puede tener cualquier cantidad de elementos del mismo tipo:

\`\`\`ts
let numeros: number[] = [1, 2, 3, 4, 5]  // puede tener cualquier longitud
\`\`\`

Una tupla tiene un número exacto de posiciones con tipos específicos:

\`\`\`ts
let coordenada: [number, number] = [40.4168, -3.7038]  // exactamente 2 numbers
let persona: [string, number] = ["Ana", 28]  // exactamente: string, number
\`\`\`

**Sintaxis de tuplas**

\`\`\`ts
let par: [string, number] = ["Laptop", 850]
let trio: [string, number, boolean] = ["Ana", 28, true]
let punto: [number, number] = [10, 20]
\`\`\`

El tipo de cada posición es fijo. No puedes cambiar el tipo de una posición ni el orden.

**Acceso por índice**

TypeScript sabe el tipo de cada posición:

\`\`\`ts
let entrada: [string, number, boolean] = ["Ana", 28, true]

const nombre = entrada[0]   // TypeScript sabe que es string
const edad = entrada[1]     // TypeScript sabe que es number
const activa = entrada[2]   // TypeScript sabe que es boolean
\`\`\`

**¿Cuándo son útiles las tuplas?**

- Cuando necesitas un par o grupo de valores relacionados con tipos diferentes
- Cuando el orden de los valores importa y es fijo
- Como valor de retorno de funciones que devuelven múltiples valores
- Para representar coordenadas (x, y), pares (clave, valor), etc.

\`\`\`ts
function obtenerRango(valores: number[]): [number, number] {
  return [Math.min(...valores), Math.max(...valores)]
}

const [minimo, maximo] = obtenerRango([3, 7, 1, 9, 4])
// → minimo: 1, maximo: 9
\`\`\`

**Limitaciones de las tuplas**

- Menos descriptivas que los objetos (los índices 0, 1, 2 no tienen nombres)
- Más frágiles si cambias el orden o la cantidad de elementos
- Para estructuras complejas, un objeto con propiedades nombradas suele ser mejor`,
    codeExample: `// ── archivo: tuplas.ts ───────────────────────────────────────────────────

// Tupla simple: par de valores
let coordenada: [number, number] = [40.4168, -3.7038]  // Madrid
console.log(\`Latitud: \${coordenada[0]}, Longitud: \${coordenada[1]}\`)

// Tupla con tipos mixtos
let registro: [string, number, boolean] = ["Ana", 28, true]
const [nombre, edad, activo] = registro  // desestructuración

console.log(\`\${nombre}, \${edad} años, activo: \${activo}\`)
// → Ana, 28 años, activo: true

// Función que devuelve una tupla (patrón común)
function dividirNombreCompleto(nombreCompleto: string): [string, string] {
  const partes = nombreCompleto.split(" ")
  return [partes[0], partes.slice(1).join(" ")]
}

const [nombre2, apellido] = dividirNombreCompleto("Ana García López")
console.log(\`Nombre: \${nombre2}, Apellido: \${apellido}\`)
// → Nombre: Ana, Apellido: García López

// Función con rango
function calcularRango(numeros: number[]): [number, number] {
  return [Math.min(...numeros), Math.max(...numeros)]
}

const notas = [7.5, 8.0, 9.5, 5.0, 8.5]
const [min, max] = calcularRango(notas)
console.log(\`Rango: \${min} — \${max}\`)  // → Rango: 5 — 9.5

// TypeScript verifica el tipo de cada posición:
let par: [string, number] = ["Ana", 28]
// par = [28, "Ana"]    // Error: tipos en posiciones incorrectas
// par = ["Ana", 28, true]  // Error: demasiados elementos`,
    keyPoints: [
      'Una tupla define el número exacto de elementos y el tipo de cada posición.',
      'Sintaxis: [string, number] — define una tupla de exactamente 2 elementos.',
      'TypeScript sabe el tipo de cada posición al acceder por índice.',
      'La desestructuración con const [a, b] = tupla es una forma elegante de acceder a los valores.',
      'Las tuplas son útiles para devolver múltiples valores de una función.',
      'Para datos complejos, los objetos con propiedades nombradas suelen ser más claros que las tuplas.',
    ],
    exercise: {
      description:
        'Crea una función calcularEstadisticas(notas: number[]): [number, number, number] que devuelva una tupla con [promedio, minima, maxima]. Usa desestructuración para obtener los 3 valores del resultado. Prueba con un array de 6 notas y muestra los resultados con console.log.',
      hint: 'La función devuelve: [promedio, Math.min(...notas), Math.max(...notas)]. Desestructura así: const [promedio, min, max] = calcularEstadisticas(notas).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre una tupla y un array en TypeScript?',
        options: [
          'Las tuplas no pueden modificarse, los arrays sí',
          'Las tuplas tienen longitud y tipos fijos por posición; los arrays tienen elementos del mismo tipo y longitud variable',
          'Las tuplas solo aceptan strings, los arrays aceptan cualquier tipo',
          'No hay diferencia práctica entre tuplas y arrays',
        ],
        correctAnswer: 'Las tuplas tienen longitud y tipos fijos por posición; los arrays tienen elementos del mismo tipo y longitud variable',
        correctFeedback:
          'Correcto. Una tupla define exactamente cuántos elementos tiene y qué tipo es cada uno. Un array tipado define el tipo de todos sus elementos pero puede tener cualquier longitud.',
        incorrectFeedback:
          'No es correcto. La diferencia clave es que una tupla tiene longitud fija y tipos específicos por posición. Un array number[] puede tener cualquier cantidad de números, todos del mismo tipo.',
      },
      {
        question: '¿Qué tipo tiene la posición 1 en esta tupla?\n\nlet datos: [string, number, boolean] = ["Ana", 28, true]',
        options: ['string', 'number', 'boolean', 'any'],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. En la tupla [string, number, boolean], la posición 0 es string, la posición 1 es number y la posición 2 es boolean.',
        incorrectFeedback:
          'No es correcto. En la tupla [string, number, boolean], los tipos por posición son: 0 → string, 1 → number, 2 → boolean.',
      },
    ],
  },

  // ── Lección 36 ───────────────────────────────────────────────────────────
  {
    slug: 'tuplas-opcionales',
    title: 'Tuplas opcionales',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 6,
    description:
      'Aprende cómo funcionan los elementos opcionales dentro de una tupla.',
    explanation: `Al igual que las propiedades opcionales en objetos, TypeScript permite que algunos elementos de una tupla sean opcionales usando \`?\`.

**Elementos opcionales en tuplas**

\`\`\`ts
type Entrada = [string, number, boolean?]
//                                ↑ el boolean es opcional

let a: Entrada = ["Ana", 28]          // ✓ sin el booleano
let b: Entrada = ["Ana", 28, true]    // ✓ con el booleano
\`\`\`

El elemento opcional debe ir al final de la tupla. No puedes poner un elemento opcional antes de uno obligatorio.

**¿Cuándo son útiles las tuplas opcionales?**

Cuando algunos valores son comunes pero otros son opcionales para ciertos casos:

\`\`\`ts
// Una entrada de log: [mensaje, nivel, timestamp?]
type LogEntry = [string, "info" | "error" | "warning", number?]

const log1: LogEntry = ["El servidor inició", "info"]
const log2: LogEntry = ["Error crítico", "error", Date.now()]
\`\`\`

**Acceso a elementos opcionales**

Cuando accedes a un elemento opcional, TypeScript sabe que puede ser \`undefined\`:

\`\`\`ts
type Entrada = [string, number, boolean?]
let datos: Entrada = ["Ana", 28]

const nombre = datos[0]   // string
const edad = datos[1]     // number
const activo = datos[2]   // boolean | undefined
\`\`\`

Debes verificar si existe antes de usarlo:

\`\`\`ts
if (activo !== undefined) {
  console.log(\`Activo: \${activo}\`)
}
// o con optional chaining no aplica aquí, pero sí la verificación simple
\`\`\`

**Elementos rest en tuplas**

TypeScript también permite tuplas con un número variable de elementos al final usando \`...\`:

\`\`\`ts
type MinDos = [string, string, ...number[]]
let t: MinDos = ["a", "b"]             // ✓
let t2: MinDos = ["a", "b", 1, 2, 3]  // ✓
\`\`\`

Esto es más avanzado y lo verás en contextos específicos.

**Limitación importante**

Las tuplas opcionales deben estar al final:

\`\`\`ts
// ✓ Correcto: opcional al final
type Bien = [string, number?]

// ✗ Error: el obligatorio no puede ir después del opcional
// type Mal = [string?, number]  // Error de TypeScript
\`\`\``,
    codeExample: `// ── archivo: tuplas-opcionales.ts ───────────────────────────────────────

// Tupla con elemento opcional
type DatosUsuario = [string, number, string?]  // nombre, edad, email?

const usuario1: DatosUsuario = ["Ana", 28]                    // sin email
const usuario2: DatosUsuario = ["Carlos", 35, "c@email.com"]  // con email

// El tercer elemento puede ser string o undefined
const email1 = usuario1[2]   // string | undefined
const email2 = usuario2[2]   // string | undefined

console.log(\`\${usuario1[0]}: \${email1 ?? "sin email"}\`)
// → Ana: sin email

console.log(\`\${usuario2[0]}: \${email2 ?? "sin email"}\`)
// → Carlos: c@email.com

// Caso de uso: entrada de log
type LogEntry = [string, "info" | "error" | "warning", number?]

const logs: LogEntry[] = [
  ["Servidor iniciado", "info"],
  ["Error de conexión", "error", Date.now()],
  ["Advertencia: caché casi lleno", "warning", Date.now()],
]

logs.forEach(([mensaje, nivel, timestamp]) => {
  const tiempo = timestamp ? new Date(timestamp).toISOString() : "sin timestamp"
  console.log(\`[\${nivel.toUpperCase()}] \${mensaje} — \${tiempo}\`)
})

// Función con retorno de tupla opcional
function buscarEdad(nombre: string): [boolean, number?] {
  const datos: Record<string, number> = { "Ana": 28, "Carlos": 35 }
  const edad = datos[nombre]
  if (edad !== undefined) {
    return [true, edad]
  }
  return [false]
}

const [encontrado, edad] = buscarEdad("Ana")
if (encontrado && edad !== undefined) {
  console.log(\`Edad: \${edad}\`)  // → Edad: 28
}`,
    keyPoints: [
      'Los elementos opcionales en tuplas se marcan con ? y deben ir al final.',
      'Al acceder a un elemento opcional, TypeScript sabe que puede ser undefined.',
      'Verifica si el elemento opcional existe antes de usarlo: if (valor !== undefined).',
      'Las tuplas opcionales son útiles cuando algunos datos son comunes y otros son contextuales.',
      'No puedes poner un elemento obligatorio después de uno opcional.',
      'El operador ?? es útil para dar un valor predeterminado cuando el elemento opcional es undefined.',
    ],
    exercise: {
      description:
        'Crea un tipo Producto como tupla: [string, number, string?] (nombre, precio, descripción opcional). Crea un array de 4 productos, algunos con descripción y otros sin ella. Muestra cada producto con su nombre, precio y la descripción o "Sin descripción" si no tiene.',
      hint: 'Usa el operador ?? para el valor predeterminado: const desc = producto[2] ?? "Sin descripción". El tipo del elemento 2 es string | undefined.',
    },
    quiz: [
      {
        question: '¿Dónde deben ir los elementos opcionales en una tupla?',
        options: [
          'Al principio de la tupla',
          'En el medio de la tupla',
          'Al final de la tupla',
          'En cualquier posición',
        ],
        correctAnswer: 'Al final de la tupla',
        correctFeedback:
          'Correcto. Los elementos opcionales en una tupla deben ir al final. No puedes tener un elemento obligatorio después de uno opcional.',
        incorrectFeedback:
          'No es correcto. Los elementos opcionales deben estar al final de la tupla. TypeScript no permite que haya elementos obligatorios después de opcionales.',
      },
      {
        question: '¿Qué tipo tiene el tercer elemento en esta tupla?\n\ntype T = [string, number, boolean?]\nlet x: T = ["Ana", 28]',
        options: ['boolean', 'undefined', 'boolean | undefined', 'never'],
        correctAnswer: 'boolean | undefined',
        correctFeedback:
          'Correcto. Un elemento opcional (boolean?) puede ser boolean o undefined. Cuando x solo tiene dos elementos, x[2] es undefined.',
        incorrectFeedback:
          'No es correcto. Un elemento marcado como opcional (boolean?) tiene el tipo boolean | undefined. Puede existir como boolean o puede no existir (undefined).',
      },
    ],
  },

  // ── Lección 37 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-arrays-tuplas',
    title: 'Errores comunes con arrays y tuplas',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 7,
    description:
      'Aprende a evitar errores como mezclar tipos incorrectos, acceder a posiciones inválidas o usar tuplas cuando un objeto sería más claro.',
    explanation: `Trabajar con arrays y tuplas en TypeScript es potente, pero hay errores frecuentes que conviene conocer.

**Error 1: Intentar agregar un tipo incorrecto a un array tipado**

\`\`\`ts
const numeros: number[] = [1, 2, 3]
// numeros.push("cuatro")  // Error: string no es assignable a number
numeros.push(4)  // ✓
\`\`\`

**Error 2: Arrays vacíos sin anotación de tipo**

\`\`\`ts
const tareas = []         // ✗ TypeScript infiere never[]
const tareas: string[] = []  // ✓
\`\`\`

Con \`never[]\`, no puedes agregar ningún elemento. Siempre anota el tipo de arrays vacíos.

**Error 3: Acceder a un índice que puede no existir**

\`\`\`ts
const notas: number[] = [8.5, 7.0]
const tercera = notas[2]   // TypeScript dice que es number, pero es undefined en ejecución
\`\`\`

TypeScript no siempre detecta el acceso a índices fuera del rango en arrays normales (sí en tuplas). Verifica la existencia cuando el índice puede ser inválido.

**Error 4: Tipos incorrectos en una tupla**

\`\`\`ts
let par: [string, number] = [42, "Ana"]
// Error: los tipos están en el orden incorrecto
let par: [string, number] = ["Ana", 42]  // ✓
\`\`\`

**Error 5: Demasiados elementos en una tupla**

\`\`\`ts
let punto: [number, number] = [10, 20, 30]
// Error: Source has 3 element(s) but target allows only 2
\`\`\`

**Error 6: Usar tuplas cuando un objeto sería más claro**

\`\`\`ts
// ✗ Difícil de entender sin contexto
let datos: [string, number, string, boolean] = ["Ana", 28, "ana@email.com", true]

// ✓ Más claro con un objeto
interface Usuario {
  nombre: string
  edad: number
  email: string
  activo: boolean
}
let datos: Usuario = { nombre: "Ana", edad: 28, email: "ana@email.com", activo: true }
\`\`\`

Las tuplas son más útiles para casos simples de 2-3 elementos con significado obvio por el contexto. Para estructuras complejas, usa objetos o interfaces.

**Error 7: Mutar un array que debería ser readonly**

Si tienes un array que no debería cambiar, puedes marcarlo como readonly:

\`\`\`ts
const COLORES: readonly string[] = ["rojo", "verde", "azul"]
// COLORES.push("amarillo")  // Error: no puedes mutar un array readonly
\`\`\``,
    codeExample: `// ── archivo: errores-arrays.ts ───────────────────────────────────────────

// Error 1: tipo incorrecto en push
const precios: number[] = [10, 20, 30]
// precios.push("cuarenta")  // Error
precios.push(40)  // ✓

// Error 2: array vacío sin tipo
// const lista = []  // never[] — problemático
const lista: string[] = []  // ✓
lista.push("elemento")

// Error 3: acceso a índice posiblemente inválido
const notas: number[] = [8.5, 7.0]
const nota = notas[5]  // TypeScript cree que es number, pero es undefined

// Forma segura de acceder
if (nota !== undefined) {
  console.log(nota.toFixed(2))
}

// Error 4: orden incorrecto en tupla
// let par: [string, number] = [42, "Ana"]  // Error
let par: [string, number] = ["Ana", 42]  // ✓

// Error 5: tupla con demasiados elementos
// let punto: [number, number] = [10, 20, 30]  // Error
let punto: [number, number] = [10, 20]  // ✓

// ✓ Correcto: usar objeto cuando hay muchos campos
interface ConfiguracionBD {
  host: string
  puerto: number
  nombre: string
  ssl: boolean
}

const config: ConfiguracionBD = {
  host: "localhost",
  puerto: 5432,
  nombre: "mi_bd",
  ssl: false
}
// Mucho más claro que: let config: [string, number, string, boolean]

// readonly para arrays que no deben cambiar
const MESES: readonly string[] = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
// MESES.push("Mes13")  // Error: no se puede mutar un readonly array`,
    keyPoints: [
      'Siempre anota el tipo de arrays vacíos: string[] = [] en lugar de solo [].',
      'Con tuplas, el orden y el número exacto de elementos es obligatorio.',
      'El acceso a índices fuera del rango en arrays no siempre es detectado por TypeScript — verifica el resultado.',
      'Para estructuras con más de 3 campos, un objeto o interfaz es más claro que una tupla.',
      'readonly string[] previene que el array sea mutado después de su creación.',
      'Los mensajes de error de tuplas incluyen el número de elementos esperados y los tipos por posición.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los 4 errores: 1) const nums = []; nums.push(5); 2) let par: [number, string] = ["hola", 42]; 3) let trio: [string, number, boolean] = ["Ana", 28, true, "extra"]; 4) const nombres: string[] = []; nombres.push(100). Para cada uno, anota el mensaje de error y la corrección.',
      hint: 'Error 1: const nums: number[] = []. Error 2: ["hola", 42] → [42, "hola"]. Error 3: eliminar "extra". Error 4: nombres.push(100) → nombres.push("cien").',
    },
    quiz: [
      {
        question: '¿Qué error produce TypeScript con: const lista = []; lista.push("texto")?',
        options: [
          'No produce ningún error, funciona correctamente',
          'Error: Type string is not assignable to type never (porque lista es never[])',
          'Error: push no existe en arrays vacíos',
          'Error: debes usar .add() en lugar de .push()',
        ],
        correctAnswer: 'Error: Type string is not assignable to type never (porque lista es never[])',
        correctFeedback:
          'Correcto. Sin anotación, TypeScript infiere never[] para un array vacío. never no acepta ningún valor, por lo que push("texto") produce error. Solución: const lista: string[] = [].',
        incorrectFeedback:
          'No es correcto. TypeScript infiere never[] para un array vacío. never es un tipo especial que no acepta ningún valor, por lo que no puedes agregar nada. Debes anotar: const lista: string[] = [].',
      },
      {
        question: '¿En qué situación es mejor usar un objeto en lugar de una tupla?',
        options: [
          'Cuando hay exactamente 2 valores relacionados',
          'Cuando los valores son coordenadas (x, y)',
          'Cuando hay más de 3 campos con significados distintos que no son obvios por la posición',
          'Las tuplas siempre son mejores que los objetos',
        ],
        correctAnswer: 'Cuando hay más de 3 campos con significados distintos que no son obvios por la posición',
        correctFeedback:
          'Correcto. Las tuplas son útiles para valores simples donde el significado es obvio (como coordenadas). Cuando los campos son varios y su significado no es obvio por la posición, un objeto con propiedades nombradas es más claro.',
        incorrectFeedback:
          'No es correcto. Los objetos son mejores cuando hay múltiples campos donde los nombres dan contexto. Las tuplas son más apropiadas para casos simples de 2-3 valores con significado obvio.',
      },
    ],
  },

  // ── Lección 38 ───────────────────────────────────────────────────────────
  {
    slug: 'mini-practica-datos-estudiantes',
    title: 'Mini práctica: datos de estudiantes',
    module: 'Arrays y tuplas',
    moduleNumber: 5,
    order: 8,
    description:
      'Crea una pequeña estructura de datos tipada para representar estudiantes, notas y estados de aprobación.',
    explanation: `Es momento de integrar todo lo aprendido en este módulo. Crearás un pequeño sistema de gestión de estudiantes usando arrays tipados, objetos con interfaces y algunas tuplas.

**El objetivo**

Construir un programa TypeScript que:
1. Defina la estructura de un estudiante con una interfaz
2. Cree un array de estudiantes con datos
3. Realice operaciones: filtrar, calcular promedios, ordenar, buscar
4. Devuelva estadísticas del curso usando tipos apropiados

**Interfaces que usaremos**

\`\`\`ts
interface Estudiante {
  id: number
  nombre: string
  notas: number[]     // array de sus notas
  promedio: number    // promedio calculado
  aprobado: boolean
}

interface EstadisticasCurso {
  totalEstudiantes: number
  aprobados: number
  reprobados: number
  promedioGeneral: number
  notaMaxima: number
  notaMinima: number
}
\`\`\`

**Lo que practicamos**

- Interfaces para definir estructura de objetos
- Arrays tipados: \`Estudiante[]\`, \`number[]\`
- Funciones con tipos en parámetros y retorno
- Métodos de array: \`filter\`, \`map\`, \`find\`, \`reduce\`, \`sort\`
- Tuplas para devolver múltiples valores
- Tipos de retorno explícitos

**Principios que aplicas**

- Tipado explícito donde es necesario
- Inferencia donde TypeScript puede deducirlo
- Organización en interfaces en lugar de datos sueltos
- Funciones reutilizables y bien tipadas

Este es exactamente el tipo de código TypeScript que escribirás en proyectos reales.`,
    codeExample: `// ── archivo: estudiantes.ts ──────────────────────────────────────────────

// Interfaces
interface Estudiante {
  id: number
  nombre: string
  notas: number[]
  promedio: number
  aprobado: boolean
}

interface EstadisticasCurso {
  totalEstudiantes: number
  aprobados: number
  reprobados: number
  promedioGeneral: number
  notaMaxima: number
  notaMinima: number
}

// Función auxiliar: calcular promedio de un array
function calcularPromedio(notas: number[]): number {
  if (notas.length === 0) return 0
  return notas.reduce((sum, n) => sum + n, 0) / notas.length
}

// Función: crear estudiante con promedio calculado automáticamente
function crearEstudiante(id: number, nombre: string, notas: number[]): Estudiante {
  const promedio = Math.round(calcularPromedio(notas) * 10) / 10
  return {
    id,
    nombre,
    notas,
    promedio,
    aprobado: promedio >= 6
  }
}

// Datos del curso
const clase: Estudiante[] = [
  crearEstudiante(1, "Ana García",    [8.5, 9.0, 7.5, 8.0]),
  crearEstudiante(2, "Carlos López",  [5.5, 6.0, 5.0, 6.5]),
  crearEstudiante(3, "Sofía Martín",  [9.5, 10.0, 9.0, 9.5]),
  crearEstudiante(4, "Luis Pérez",    [4.0, 3.5, 5.0, 4.5]),
  crearEstudiante(5, "María Torres",  [7.0, 7.5, 8.0, 7.0]),
]

// Calcular estadísticas del curso
function calcularEstadisticas(estudiantes: Estudiante[]): EstadisticasCurso {
  const promedios = estudiantes.map(e => e.promedio)
  return {
    totalEstudiantes: estudiantes.length,
    aprobados: estudiantes.filter(e => e.aprobado).length,
    reprobados: estudiantes.filter(e => !e.aprobado).length,
    promedioGeneral: Math.round(calcularPromedio(promedios) * 10) / 10,
    notaMaxima: Math.max(...promedios),
    notaMinima: Math.min(...promedios),
  }
}

// Buscar por nombre — devuelve tupla [encontrado, estudiante?]
function buscar(nombre: string): [boolean, Estudiante | undefined] {
  const estudiante = clase.find(e =>
    e.nombre.toLowerCase().includes(nombre.toLowerCase())
  )
  return [estudiante !== undefined, estudiante]
}

// Mostrar resultados
console.log("=== RANKING ===")
const ranking = [...clase].sort((a, b) => b.promedio - a.promedio)
ranking.forEach((e, i) => {
  const estado = e.aprobado ? "✓" : "✗"
  console.log(\`\${i + 1}. \${e.nombre}: \${e.promedio} \${estado}\`)
})

console.log("\\n=== ESTADÍSTICAS ===")
const stats = calcularEstadisticas(clase)
console.log(\`Total: \${stats.totalEstudiantes}\`)
console.log(\`Aprobados: \${stats.aprobados} / Reprobados: \${stats.reprobados}\`)
console.log(\`Promedio general: \${stats.promedioGeneral}\`)
console.log(\`Nota máxima: \${stats.notaMaxima} / Nota mínima: \${stats.notaMinima}\`)

console.log("\\n=== BÚSQUEDA ===")
const [encontrado, alumna] = buscar("sofía")
if (encontrado && alumna) {
  console.log(\`Encontrado: \${alumna.nombre} — Promedio: \${alumna.promedio}\`)
}`,
    keyPoints: [
      'Las interfaces definen la estructura de objetos complejos que se usan en múltiples lugares.',
      'Los arrays de objetos tipados permiten operaciones seguras con filter, map, find, sort y reduce.',
      'Las funciones que crean objetos garantizan que tengan la estructura correcta.',
      'Las tuplas son útiles para devolver múltiples valores con tipos diferentes desde una función.',
      'Este patrón (interfaces + arrays + funciones tipadas) es el núcleo de TypeScript en proyectos reales.',
      'Practica con datos reales como notas, precios y usuarios — así el aprendizaje se vuelve concreto.',
    ],
    exercise: {
      description:
        'Amplía el sistema de estudiantes: 1) Agrega una propiedad "cursos" al objeto Estudiante que sea un array de strings (materias que toma), 2) Escribe una función que reciba un nombre de curso y devuelva todos los estudiantes que lo tienen, 3) Escribe una función que devuelva el estudiante con la nota más alta en cada materia usando un objeto como resultado. Prueba con al menos 3 cursos distintos.',
      hint: 'Para filtrar por curso: clase.filter(e => e.cursos.includes(nombreCurso)). Para la función de nota más alta por materia, necesitas recorrer los cursos únicos y encontrar el máximo en cada uno.',
    },
    quiz: [
      {
        question: '¿Cuál es el beneficio de usar una interfaz para definir la estructura de Estudiante en lugar de tipo inline?',
        options: [
          'Las interfaces son más rápidas que los tipos inline',
          'La interfaz se puede reutilizar en múltiples funciones y arrays sin repetir la estructura',
          'TypeScript solo acepta interfaces, no tipos inline para objetos',
          'Las interfaces permiten herencia y los tipos inline no',
        ],
        correctAnswer: 'La interfaz se puede reutilizar en múltiples funciones y arrays sin repetir la estructura',
        correctFeedback:
          'Correcto. Al definir la interfaz una vez, puedes usarla como tipo en múltiples variables, parámetros y arrays. Si necesitas cambiar la estructura, solo cambias la interfaz y TypeScript detecta todos los lugares afectados.',
        incorrectFeedback:
          'No es correcto. El principal beneficio de la interfaz sobre el tipo inline es la reutilización: defines la estructura una vez y la usas en múltiples lugares. TypeScript sí acepta tipos inline, pero son menos mantenibles cuando se usan en varios sitios.',
      },
      {
        question: '¿Qué función de array se usa para ordenar estudiantes por promedio de mayor a menor?',
        options: [
          '.filter()',
          '.reverse()',
          '.sort((a, b) => b.promedio - a.promedio)',
          '.map()',
        ],
        correctAnswer: '.sort((a, b) => b.promedio - a.promedio)',
        correctFeedback:
          'Correcto. sort() con un comparador ordena de mayor a menor cuando b - a es positivo (b > a). Para orden ascendente (menor a mayor) sería a.promedio - b.promedio.',
        incorrectFeedback:
          'No es correcto. Para ordenar por promedio de mayor a menor, usas .sort((a, b) => b.promedio - a.promedio). El comparador devuelve un valor negativo cuando b < a, positivo cuando b > a.',
      },
      {
        question: '¿Por qué es importante hacer [...clase].sort() en lugar de clase.sort() directamente?',
        options: [
          'Porque clase.sort() produce un error de tipo',
          'Porque spread crea una copia del array, evitando mutar el original',
          'Porque sort() no funciona directamente en variables de tipo Estudiante[]',
          'No hay diferencia entre los dos',
        ],
        correctAnswer: 'Porque spread crea una copia del array, evitando mutar el original',
        correctFeedback:
          'Correcto. sort() muta el array original. Usando [...clase], creas una copia del array antes de ordenar, preservando el array original sin cambios.',
        incorrectFeedback:
          'No es correcto. La razón de usar [...clase] es que sort() muta el array original. Si haces clase.sort(), el array clase queda reordenado permanentemente. El spread crea una copia segura.',
      },
    ],
  },
]

export const tsModule5: Module = {
  number: 5,
  title: 'Arrays y tuplas',
  level: 'básico',
  lessons: lessonsTsModule5,
}
