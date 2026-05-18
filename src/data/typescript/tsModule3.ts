import type { Lesson, Module } from '@/types'

export const lessonsTsModule3: Lesson[] = [
  // ── Lección 14 ───────────────────────────────────────────────────────────
  {
    slug: 'tipo-string',
    title: 'El tipo string',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 1,
    description:
      'Aprende a usar string para representar texto en TypeScript.',
    explanation: `El tipo \`string\` en TypeScript representa texto: palabras, frases, nombres, mensajes, URLs, o cualquier secuencia de caracteres.

**¿Qué es un string?**

Un string es una cadena de texto. Puede contener letras, números, espacios, símbolos — cualquier carácter. Se escribe entre comillas simples (\`'\`), dobles (\`"\`) o template literals (\`\`).

\`\`\`ts
let nombre: string = "Ana"
let saludo: string = '¡Hola!'
let mensaje: string = \`Bienvenida, \${nombre}\`
\`\`\`

**¿Cómo se anota el tipo string?**

Escribes \`: string\` después del nombre de la variable:

\`\`\`ts
let ciudad: string = "Madrid"
\`\`\`

Pero la mayoría de las veces TypeScript **infiere** el tipo automáticamente:

\`\`\`ts
let ciudad = "Madrid"  // TypeScript sabe que es string sin que lo escribas
\`\`\`

Aprenderás más sobre inferencia de tipos en el siguiente módulo. Por ahora practica escribiendo el tipo explícitamente.

**Métodos comunes de string en TypeScript**

Cuando TypeScript sabe que una variable es \`string\`, tu editor te sugiere automáticamente todos los métodos disponibles:

\`\`\`ts
let texto = "hola mundo"

texto.toUpperCase()      // → "HOLA MUNDO"
texto.toLowerCase()      // → "hola mundo"
texto.includes("mundo")  // → true
texto.startsWith("hola") // → true
texto.length             // → 10
texto.split(" ")         // → ["hola", "mundo"]
texto.trim()             // → "hola mundo" (elimina espacios al inicio/fin)
texto.replace("mundo", "TypeScript") // → "hola TypeScript"
\`\`\`

**String y otros tipos no se mezclan sin conversión**

\`\`\`ts
let nombre: string = "Ana"
let edad: number = 28

// Esto es un error de tipo:
// nombre = edad  // Error: number no es asignable a string

// Para combinar, usa template literals:
let presentacion: string = \`\${nombre} tiene \${edad} años\`
\`\`\`

**Errores comunes con string**

- Intentar hacer operaciones numéricas con strings: \`"5" * 2\` en TypeScript marcará error si la variable está tipada como string.
- Confundir \`string\` (el tipo TypeScript) con \`String\` (el objeto wrapper de JavaScript). Siempre usa \`string\` en minúsculas en las anotaciones de tipo.`,
    codeExample: `// ── archivo: strings.ts ──────────────────────────────────────────────────

// Declarar strings con tipo explícito
let nombre: string = "Sofía"
let apellido: string = "García"
let ciudad: string = "Buenos Aires"

// Template literal (las comillas invertidas permiten interpolar valores)
let presentacion: string = \`Hola, soy \${nombre} \${apellido} de \${ciudad}.\`
console.log(presentacion)
// → Hola, soy Sofía García de Buenos Aires.

// Métodos de string
console.log(nombre.toUpperCase())    // → SOFÍA
console.log(ciudad.toLowerCase())    // → buenos aires
console.log(ciudad.includes("Aires")) // → true
console.log(nombre.length)           // → 5

// Función con parámetro string
function formatearNombre(nombre: string, apellido: string): string {
  return \`\${nombre.trim()} \${apellido.trim()}\`
}

console.log(formatearNombre("  Ana  ", "  López  "))
// → Ana López

// Esto TypeScript NO permite:
// let puntuacion: string = 100
// Error: Type 'number' is not assignable to type 'string'`,
    keyPoints: [
      'string (en minúsculas) es el tipo para texto en TypeScript.',
      'Se puede usar con comillas simples, dobles o template literals (acento grave).',
      'TypeScript puede inferir el tipo string automáticamente si asignas texto al declarar.',
      'Todos los métodos de string de JavaScript funcionan igual en TypeScript.',
      'TypeScript te avisa si intentas asignar un número u otro tipo a una variable string.',
      'Usa siempre string en minúsculas para el tipo — no String con mayúscula.',
    ],
    exercise: {
      description:
        'Crea un archivo strings.ts con: 1) una variable nombre tipada como string con tu nombre, 2) una variable email con tu email, 3) una función formatearEmail que reciba nombre y email (ambos string) y devuelva un string formateado como "Nombre: X | Email: Y". Compila y ejecuta.',
      hint: 'La función debe tener los parámetros con tipo string y el tipo de retorno también debe ser string: function formatearEmail(nombre: string, email: string): string { ... }',
    },
    quiz: [
      {
        question: '¿Cuál de estas declaraciones es correcta en TypeScript?',
        options: [
          'let nombre: String = "Ana"',
          'let nombre: string = "Ana"',
          'let nombre: TEXT = "Ana"',
          'let nombre: "string" = "Ana"',
        ],
        correctAnswer: 'let nombre: string = "Ana"',
        correctFeedback:
          'Correcto. El tipo string en TypeScript siempre va en minúsculas. String con mayúscula es el objeto wrapper de JavaScript y no se usa como tipo en anotaciones.',
        incorrectFeedback:
          'No es correcto. En TypeScript, el tipo para texto es string (en minúsculas). String con mayúscula es un objeto de JavaScript diferente. TEXT y "string" no son tipos válidos.',
      },
      {
        question: '¿Qué devuelve "hola mundo".toUpperCase() en TypeScript?',
        options: ['"Hola Mundo"', '"HOLA MUNDO"', '"hola mundo"', 'Error de tipo'],
        correctAnswer: '"HOLA MUNDO"',
        correctFeedback:
          'Correcto. toUpperCase() convierte todos los caracteres del string a mayúsculas. El resultado es "HOLA MUNDO".',
        incorrectFeedback:
          'No es correcto. toUpperCase() convierte todos los caracteres a mayúsculas. El resultado es "HOLA MUNDO" (no solo la primera letra de cada palabra).',
      },
      {
        question: '¿Qué error produce TypeScript con este código?\n\nlet edad: string = 28',
        options: [
          'No produce ningún error, TypeScript convierte el número a string',
          'Type "number" is not assignable to type "string"',
          'Variable "edad" no puede ser string',
          'El error solo aparece al ejecutar, no al compilar',
        ],
        correctAnswer: 'Type "number" is not assignable to type "string"',
        correctFeedback:
          'Correcto. TypeScript detecta que intentas asignar un número (28) a una variable declarada como string y muestra: Type "number" is not assignable to type "string".',
        incorrectFeedback:
          'No es correcto. TypeScript no convierte tipos automáticamente. Si declaras una variable como string y le asignas un número, el error es: Type "number" is not assignable to type "string".',
      },
      {
        question: '¿Cuál de estas expresiones combina correctamente un string y un number en TypeScript?',
        options: [
          'let msg: string = "Edad: " + 25',
          'let msg: number = "Edad: " + 25',
          'let msg: string = 25',
          'let msg: string = "Edad: ".concat(25)',
        ],
        correctAnswer: 'let msg: string = "Edad: " + 25',
        correctFeedback:
          'Correcto. TypeScript permite concatenar string + number con el operador +. El resultado es un string: "Edad: 25". También podrías usar un template literal: `Edad: ${25}`.',
        incorrectFeedback:
          'No es correcto. La forma correcta de combinar texto y número en TypeScript es: let msg: string = "Edad: " + 25 (concatenación) o usando template literal: `Edad: ${25}`.',
      },
    ],
  },

  // ── Lección 15 ───────────────────────────────────────────────────────────
  {
    slug: 'tipo-number',
    title: 'El tipo number',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 2,
    description:
      'Aprende a usar number para representar enteros, decimales y operaciones numéricas.',
    explanation: `El tipo \`number\` en TypeScript representa todos los valores numéricos: enteros, decimales, negativos, y valores especiales como \`Infinity\` y \`NaN\`.

**Diferencia con otros lenguajes**

En lenguajes como Java o C#, existen tipos separados para enteros (\`int\`) y decimales (\`float\`, \`double\`). En JavaScript y TypeScript, todo es simplemente \`number\`:

\`\`\`ts
let entero: number = 42
let decimal: number = 3.14
let negativo: number = -10
let grande: number = 1_000_000  // separador visual (solo en TypeScript/JS moderno)
\`\`\`

**Operaciones numéricas**

Todas las operaciones matemáticas básicas funcionan con \`number\`:

\`\`\`ts
let a: number = 10
let b: number = 3

console.log(a + b)   // → 13
console.log(a - b)   // → 7
console.log(a * b)   // → 30
console.log(a / b)   // → 3.3333...
console.log(a % b)   // → 1 (módulo/resto)
console.log(a ** b)  // → 1000 (potencia)
\`\`\`

**Métodos del objeto Math**

\`\`\`ts
Math.round(3.7)   // → 4
Math.floor(3.9)   // → 3
Math.ceil(3.1)    // → 4
Math.abs(-5)      // → 5
Math.max(1, 5, 3) // → 5
Math.min(1, 5, 3) // → 1
Math.sqrt(16)     // → 4
\`\`\`

**NaN e Infinity**

\`NaN\` (Not a Number) y \`Infinity\` también son de tipo \`number\` en TypeScript:

\`\`\`ts
let resultado: number = 0 / 0    // → NaN
let infinito: number = 1 / 0    // → Infinity
\`\`\`

**Conversión desde string**

\`\`\`ts
let texto = "42"
let numero: number = Number(texto)   // → 42
let numero2: number = parseInt(texto) // → 42
let numero3: number = parseFloat("3.14") // → 3.14
\`\`\`

**Errores comunes con number**

- Confundir el tipo \`number\` (minúsculas) con \`Number\` (mayúscula). Siempre usa \`number\` en minúsculas.
- Esperar que TypeScript convierta automáticamente un string a número. Si tienes una variable tipada como \`number\`, no puedes asignarle un string directamente.`,
    codeExample: `// ── archivo: numeros.ts ──────────────────────────────────────────────────

// Tipos de números
let entero: number = 42
let decimal: number = 9.99
let negativo: number = -15
let precio: number = 1_250.50  // separador de miles (solo visual)

// Función para calcular descuento
function calcularPrecioFinal(precio: number, descuentoPct: number): number {
  const descuento = precio * (descuentoPct / 100)
  return precio - descuento
}

console.log(calcularPrecioFinal(100, 20))  // → 80
console.log(calcularPrecioFinal(250, 15))  // → 212.5

// Función para calcular promedio
function calcularPromedio(notas: number[]): number {
  const suma = notas.reduce((acc, n) => acc + n, 0)
  return suma / notas.length
}

const notas = [7.5, 8.0, 9.5, 6.0, 8.5]
console.log(calcularPromedio(notas))  // → 7.9

// Redondear con Math
const promedio = calcularPromedio(notas)
console.log(Math.round(promedio * 10) / 10)  // → 7.9 (1 decimal)

// Error que TypeScript detecta:
// let cantidad: number = "cinco"
// Error: Type 'string' is not assignable to type 'number'`,
    keyPoints: [
      'number (en minúsculas) es el tipo para todos los valores numéricos en TypeScript.',
      'TypeScript usa un solo tipo number para enteros y decimales (a diferencia de Java o C#).',
      'Todos los operadores matemáticos (+, -, *, /, %, **) funcionan con number.',
      'NaN e Infinity también son de tipo number en TypeScript.',
      'Para convertir string a number usa Number(), parseInt() o parseFloat().',
      'Usa siempre number en minúsculas — no Number con mayúscula para anotaciones de tipo.',
    ],
    exercise: {
      description:
        'Crea un archivo numeros.ts con: 1) una función calcularIVA(precio: number, porcentaje: number): number que devuelva el IVA de un precio, 2) una función calcularTotal que devuelva precio + IVA. Prueba con precio = 100 y IVA = 21%. El resultado debe ser 121.',
      hint: 'calcularIVA multiplica precio por (porcentaje/100). calcularTotal suma el precio original más el resultado de calcularIVA. Compila con tsc y ejecuta con node.',
    },
    quiz: [
      {
        question: '¿Cuántos tipos numéricos tiene TypeScript para representar enteros y decimales?',
        options: [
          'Dos: int para enteros y float para decimales',
          'Tres: int, float y double',
          'Uno: number para todos los valores numéricos',
          'Cuatro: byte, short, int y long',
        ],
        correctAnswer: 'Uno: number para todos los valores numéricos',
        correctFeedback:
          'Correcto. TypeScript (al igual que JavaScript) usa un único tipo number para todos los valores numéricos: enteros, decimales, negativos, etc.',
        incorrectFeedback:
          'No es correcto. TypeScript tiene un solo tipo numérico: number. No tiene int, float ni double como Java o C#. Todo número (entero o decimal) es simplemente number.',
      },
      {
        question: '¿Qué devuelve Math.floor(4.9) en TypeScript?',
        options: ['5', '4', '4.9', 'Error'],
        correctAnswer: '4',
        correctFeedback:
          'Correcto. Math.floor() redondea hacia abajo al entero más cercano. 4.9 redondeado hacia abajo es 4.',
        incorrectFeedback:
          'No es correcto. Math.floor() redondea hacia abajo (al entero inferior). floor(4.9) = 4. Para redondear hacia arriba usarías Math.ceil(4.9) = 5.',
      },
      {
        question: '¿Qué tipo tiene NaN en TypeScript?',
        options: ['nan', 'null', 'undefined', 'number'],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. Aunque parezca contradictorio, NaN (Not a Number) es de tipo number en JavaScript y TypeScript. Es el resultado de operaciones inválidas como 0/0.',
        incorrectFeedback:
          'No es correcto. NaN (Not a Number) es de tipo number en TypeScript, igual que en JavaScript. Puedes verificarlo con typeof NaN, que devuelve "number".',
      },
    ],
  },

  // ── Lección 16 ───────────────────────────────────────────────────────────
  {
    slug: 'tipo-boolean',
    title: 'El tipo boolean',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 3,
    description:
      'Aprende a usar boolean para representar valores true o false.',
    explanation: `El tipo \`boolean\` representa valores lógicos: solo puede ser \`true\` (verdadero) o \`false\` (falso).

**¿Para qué se usa boolean?**

Los booleanos se usan para representar estados, condiciones y resultados de comparaciones:

\`\`\`ts
let estaActivo: boolean = true
let tieneDescuento: boolean = false
let esMayorDeEdad: boolean = edad >= 18
\`\`\`

**Operadores que producen boolean**

Los operadores de comparación siempre devuelven un boolean:

\`\`\`ts
5 > 3     // → true
5 < 3     // → false
5 === 5   // → true
5 !== 3   // → true
5 >= 5    // → true
5 <= 4    // → false
\`\`\`

**Operadores lógicos**

\`\`\`ts
true && true    // → true  (AND: ambos deben ser verdaderos)
true && false   // → false
true || false   // → true  (OR: al menos uno debe ser verdadero)
false || false  // → false
!true           // → false (NOT: invierte el valor)
!false          // → true
\`\`\`

**Booleanos en condicionales**

\`\`\`ts
let usuarioLogueado: boolean = true

if (usuarioLogueado) {
  console.log("Bienvenido")
} else {
  console.log("Por favor, inicia sesión")
}
\`\`\`

**TypeScript vs JavaScript en booleanos**

En JavaScript, muchos valores son "falsy" (se comportan como false en condiciones) pero no son literalmente \`false\`: \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`. TypeScript con tipos explícitos te ayuda a evitar confusión:

\`\`\`ts
let activo: boolean = false  // booleano real

// TypeScript no permite:
// let activo: boolean = 0  ← Error: number no es boolean
// let activo: boolean = ""  ← Error: string no es boolean
\`\`\`

**Errores comunes con boolean**

- Escribir \`Boolean\` con mayúscula. Usa siempre \`boolean\` en minúsculas.
- Confundir \`false\` (booleano) con \`0\` o \`""\` (valores falsy pero no de tipo boolean).`,
    codeExample: `// ── archivo: booleanos.ts ────────────────────────────────────────────────

// Variables booleanas
let estaDisponible: boolean = true
let requiereSuscripcion: boolean = false

// Función que devuelve boolean
function puedeAcceder(edad: number, esMiembro: boolean): boolean {
  return edad >= 18 && esMiembro
}

console.log(puedeAcceder(25, true))   // → true
console.log(puedeAcceder(25, false))  // → false
console.log(puedeAcceder(16, true))   // → false

// Booleanos en condicionales
interface Producto {
  nombre: string
  precio: number
  disponible: boolean
}

const laptop: Producto = { nombre: "Laptop", precio: 850, disponible: true }
const auriculares: Producto = { nombre: "Auriculares", precio: 45, disponible: false }

function mostrarEstado(producto: Producto): void {
  if (producto.disponible) {
    console.log(\`\${producto.nombre}: disponible — $\${producto.precio}\`)
  } else {
    console.log(\`\${producto.nombre}: agotado\`)
  }
}

mostrarEstado(laptop)      // → Laptop: disponible — $850
mostrarEstado(auriculares) // → Auriculares: agotado

// Error que TypeScript detecta:
// let activo: boolean = 1
// Error: Type 'number' is not assignable to type 'boolean'`,
    keyPoints: [
      'boolean (en minúsculas) solo puede ser true o false — nada más.',
      'Los operadores de comparación (>, <, ===, !==) devuelven booleanos.',
      'Los operadores lógicos && (AND), || (OR) y ! (NOT) trabajan con booleanos.',
      'TypeScript con boolean explícito no permite confundir 0, "" o null con false.',
      'Usa siempre boolean en minúsculas — no Boolean con mayúscula.',
      'Los booleanos son ideales para representar estados: activo/inactivo, disponible/agotado, logueado/deslogueado.',
    ],
    exercise: {
      description:
        'Crea un archivo booleanos.ts con una interfaz Estudiante que tenga: nombre (string), nota (number), aprobado (boolean). Crea una función verificarAprobacion que reciba nota (number) y devuelva boolean (true si nota >= 6). Crea 3 estudiantes usando la interfaz y muestra si cada uno aprobó.',
      hint: 'La función: function verificarAprobacion(nota: number): boolean { return nota >= 6 }. El operador >= devuelve boolean automáticamente.',
    },
    quiz: [
      {
        question: '¿Cuáles son los únicos valores posibles para el tipo boolean?',
        options: ['0 y 1', '"true" y "false"', 'true y false', 'yes y no'],
        correctAnswer: 'true y false',
        correctFeedback:
          'Correcto. El tipo boolean en TypeScript solo acepta los valores literales true y false. No acepta 0, 1, "true" ni ningún otro valor.',
        incorrectFeedback:
          'No es correcto. El tipo boolean en TypeScript solo acepta los valores literales true y false. Los números 0/1 y los strings "true"/"false" no son booleanos en TypeScript estricto.',
      },
      {
        question: '¿Qué devuelve esta expresión?\n\n10 >= 10 && 5 < 3',
        options: ['true', 'false', 'Error de tipo', 'undefined'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. La expresión tiene dos partes: 10 >= 10 (true) && 5 < 3 (false). Con && ambas deben ser true para que el resultado sea true. Como 5 < 3 es false, el resultado es false.',
        incorrectFeedback:
          'No es correcto. Analiza las dos partes: 10 >= 10 es true, y 5 < 3 es false. Con el operador && ambas deben ser true para que el resultado sea true. Como 5 < 3 es false, el resultado final es false.',
      },
      {
        question: '¿Qué produce TypeScript con este código?\n\nlet activo: boolean = 0',
        options: [
          'Funciona: 0 equivale a false en JavaScript',
          'Error: Type "number" is not assignable to type "boolean"',
          'El valor se convierte automáticamente a false',
          'Solo produce error con --strict activado',
        ],
        correctAnswer: 'Error: Type "number" is not assignable to type "boolean"',
        correctFeedback:
          'Correcto. TypeScript con tipo boolean explícito no acepta 0, aunque en JavaScript 0 sea "falsy". El error es: Type "number" is not assignable to type "boolean".',
        incorrectFeedback:
          'No es correcto. En TypeScript con tipos explícitos, boolean solo acepta true o false. Aunque 0 sea "falsy" en JavaScript, TypeScript muestra: Type "number" is not assignable to type "boolean".',
      },
    ],
  },

  // ── Lección 17 ───────────────────────────────────────────────────────────
  {
    slug: 'null-undefined-typescript',
    title: 'null y undefined',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 4,
    description:
      'Aprende la diferencia entre null y undefined, y por qué pueden causar errores si no se manejan bien.',
    explanation: `\`null\` y \`undefined\` representan la ausencia de valor, pero de formas diferentes. Son dos de las fuentes más comunes de errores en JavaScript — y TypeScript te ayuda a manejarlos mejor.

**¿Qué es undefined?**

\`undefined\` significa que una variable fue declarada pero no se le asignó un valor. También es el valor que devuelve una función que no tiene \`return\`.

\`\`\`ts
let nombre: string | undefined
console.log(nombre)  // → undefined (no se asignó valor)

function saludar(): void {
  console.log("Hola")
  // no devuelve nada → undefined
}
\`\`\`

**¿Qué es null?**

\`null\` es una ausencia **intencional** de valor. Lo usas cuando quieres decir explícitamente "esto no tiene valor ahora mismo", en contraste con \`undefined\` que generalmente es accidental.

\`\`\`ts
let usuarioActual: string | null = null  // no hay usuario logueado
\`\`\`

**El gran problema: null y undefined antes de TypeScript**

En JavaScript es muy común este error:

\`\`\`js
const usuario = null
console.log(usuario.nombre)  // → TypeError: Cannot read properties of null
\`\`\`

Esto causa un error de ejecución que puede romper la aplicación. TypeScript con la opción \`strict\` te avisa si intentas acceder a propiedades de un valor que podría ser \`null\` o \`undefined\`.

**Tipos unión con null y undefined**

Cuando algo puede tener un valor o ser null/undefined, usas tipos unión:

\`\`\`ts
let email: string | null = null
email = "ana@email.com"  // válido
email = null              // válido
// email = 42             // Error: number no es string ni null
\`\`\`

**El operador ?. (optional chaining)**

Para acceder a propiedades de valores que pueden ser null/undefined de forma segura:

\`\`\`ts
const usuario: { nombre: string } | null = null
console.log(usuario?.nombre)  // → undefined (no lanza error)
\`\`\`

**strictNullChecks**

Con \`strict: true\` en tsconfig, TypeScript activa \`strictNullChecks\`. Esto hace que \`null\` y \`undefined\` no sean asignables a otros tipos a menos que los declares explícitamente como parte del tipo.

**Diferencia clave**

- \`undefined\`: "no se inicializó"
- \`null\`: "se inicializó intencionalmente como vacío"`,
    codeExample: `// ── archivo: null-undefined.ts ───────────────────────────────────────────

// undefined: variable declarada sin valor
let direccion: string | undefined
console.log(direccion)  // → undefined

direccion = "Calle Mayor 10"
console.log(direccion)  // → Calle Mayor 10

// null: ausencia intencional
let sesionActiva: string | null = null
console.log(sesionActiva)  // → null

sesionActiva = "usuario_abc_123"
console.log(sesionActiva)  // → usuario_abc_123

// Función que puede devolver null
function buscarUsuario(id: number): string | null {
  const usuarios: Record<number, string> = {
    1: "Ana",
    2: "Carlos"
  }
  return usuarios[id] ?? null
}

const encontrado = buscarUsuario(1)
console.log(encontrado)  // → Ana

const noEncontrado = buscarUsuario(99)
console.log(noEncontrado)  // → null

// Optional chaining: acceder con seguridad
interface Usuario {
  nombre: string
  direccion?: string  // propiedad opcional (puede ser undefined)
}

const ana: Usuario = { nombre: "Ana" }
console.log(ana.direccion?.toUpperCase())  // → undefined (no lanza error)

// Operador nullish coalescing (??)
const ciudad = ana.direccion ?? "Sin dirección"
console.log(ciudad)  // → Sin dirección`,
    keyPoints: [
      'undefined: variable declarada pero sin valor asignado, o función sin return.',
      'null: ausencia intencional de valor — cuando quieres decir explícitamente "vacío".',
      'Con strict:true, TypeScript activa strictNullChecks que previene errores comunes.',
      'Para una variable que puede ser null o string: let x: string | null = null',
      'El operador ?. (optional chaining) accede a propiedades de forma segura sin lanzar error.',
      'El operador ?? (nullish coalescing) devuelve el valor de la derecha si la izquierda es null o undefined.',
    ],
    exercise: {
      description:
        'Crea una función buscarProducto(id: number): { nombre: string, precio: number } | null que busque en un objeto con 3 productos. Si el id existe, devuelve el producto. Si no, devuelve null. Luego llama la función y usa optional chaining para mostrar el nombre del resultado de forma segura.',
      hint: 'La función puede devolver null o el objeto producto. Para mostrarlo de forma segura: const resultado = buscarProducto(5); console.log(resultado?.nombre ?? "Producto no encontrado")',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre null y undefined?',
        options: [
          'No hay diferencia, son lo mismo en TypeScript',
          'undefined es ausencia accidental, null es ausencia intencional',
          'null solo existe en JavaScript, no en TypeScript',
          'undefined es para strings, null es para números',
        ],
        correctAnswer: 'undefined es ausencia accidental, null es ausencia intencional',
        correctFeedback:
          'Correcto. undefined generalmente indica que una variable no fue inicializada. null indica que intencionalmente no hay valor en ese momento.',
        incorrectFeedback:
          'No es correcto. La diferencia es semántica: undefined suele ser accidental (variable no inicializada), mientras que null es intencional (explícitamente "sin valor").',
      },
      {
        question: '¿Qué hace el operador ?. en usuario?.nombre?',
        options: [
          'Verifica si nombre es null',
          'Accede a nombre solo si usuario no es null/undefined, sin lanzar error',
          'Convierte nombre a string opcional',
          'Solo funciona si nombre es un string',
        ],
        correctAnswer: 'Accede a nombre solo si usuario no es null/undefined, sin lanzar error',
        correctFeedback:
          'Correcto. El operador ?. (optional chaining) intenta acceder a la propiedad, pero si el objeto es null o undefined, devuelve undefined en lugar de lanzar un TypeError.',
        incorrectFeedback:
          'No es correcto. usuario?.nombre es optional chaining: intenta acceder a nombre, pero si usuario es null o undefined, devuelve undefined en lugar de lanzar un TypeError.',
      },
      {
        question: '¿Qué tipo es correcto para una variable que puede ser un string o null?',
        options: ['string?', 'nullable<string>', 'string | null', 'optional string'],
        correctAnswer: 'string | null',
        correctFeedback:
          'Correcto. En TypeScript, los tipos unión se escriben con | (pipe). Para una variable que puede ser string o null, el tipo es: string | null.',
        incorrectFeedback:
          'No es correcto. En TypeScript, los tipos que pueden ser de uno u otro tipo se escriben con el operador | (union). La forma correcta es: string | null.',
      },
    ],
  },

  // ── Lección 18 ───────────────────────────────────────────────────────────
  {
    slug: 'tipo-any',
    title: 'El tipo any',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 5,
    description:
      'Aprende qué es any, por qué puede ser útil en casos puntuales y por qué abusar de any elimina muchas ventajas de TypeScript.',
    explanation: `El tipo \`any\` es el "comodín" de TypeScript. Una variable tipada como \`any\` puede contener cualquier valor y TypeScript deja de verificar su tipo.

**¿Qué hace any?**

\`\`\`ts
let valor: any = "hola"
valor = 42           // ✓ no da error
valor = true         // ✓ no da error
valor = { x: 1 }    // ✓ no da error
valor.metodoFalso()  // ✓ TypeScript no protesta (aunque el método no existe)
\`\`\`

Con \`any\`, TypeScript se comporta como JavaScript: no verifica nada.

**¿Cuándo puede ser útil any?**

Hay casos puntuales donde \`any\` tiene sentido:
- Cuando migras código JavaScript a TypeScript gradualmente
- Cuando trabajas con datos externos cuya estructura desconoces completamente
- Cuando el tipo es genuinamente dinámico y difícil de modelar

**¿Por qué evitar any?**

Cuando usas \`any\`, pierdes todos los beneficios de TypeScript:
- Sin autocompletado útil
- Sin detección de errores de tipo
- Sin documentación implícita
- El código se comporta como JavaScript sin tipos

Si abusas de \`any\`, estás pagando el costo de configurar TypeScript (instalación, compilación) sin recibir ninguno de sus beneficios.

**La regla práctica**

Si te encuentras escribiendo \`any\` para silenciar un error de TypeScript, es una señal de que deberías entender mejor el error en lugar de ignorarlo. La mayoría de las veces hay una alternativa mejor:

- ¿El valor puede ser de varios tipos? → Usa un tipo unión: \`string | number\`
- ¿Desconoces el tipo? → Usa \`unknown\` (más seguro que \`any\`)
- ¿Es un objeto con estructura? → Define una interfaz

**any vs unknown**

\`unknown\` es una alternativa más segura que \`any\`. Con \`unknown\`, TypeScript sí verifica que compruebes el tipo antes de usarlo. Aprenderás más sobre \`unknown\` en la siguiente lección.

**noImplicitAny**

Con \`strict: true\`, TypeScript activa \`noImplicitAny\`, que te obliga a ser explícito si quieres usar \`any\`. TypeScript no inferirá \`any\` silenciosamente.`,
    codeExample: `// ── archivo: tipo-any.ts ─────────────────────────────────────────────────

// any: el comodín que desactiva la verificación de tipos
let dato: any = "texto"
dato = 42
dato = true
dato = { nombre: "Ana" }

// TypeScript NO detecta errores con any:
dato.propiedadQueNoExiste   // no da error en compilación
dato.metodo()               // no da error en compilación (¡pero sí en ejecución!)

// ── Por qué any es problemático ──────────────────────────────────────────

// Sin any: TypeScript te protege
function sumarSeguro(a: number, b: number): number {
  return a + b
}

// sumarSeguro("hola", 5)  // Error detectado ✓

// Con any: TypeScript no puede ayudarte
function sumarInseguro(a: any, b: any): any {
  return a + b
}

sumarInseguro("hola", 5)  // → "hola5" — TypeScript no dice nada ✗

// ── Cuándo es aceptable any ──────────────────────────────────────────────

// Caso 1: Migración gradual desde JavaScript
// (código que aún no has tipado completamente)
function procesarDatosLegacy(datos: any): void {
  // Temporalmente any mientras defines los tipos correctos
  console.log(datos)
}

// Caso 2: Tipos genuinamente dinámicos (usa con cuidado)
function registrarLog(mensaje: any): void {
  console.log("[LOG]:", mensaje)
}

// ── Alternativa mejor: types o interfaces ────────────────────────────────
interface Producto {
  nombre: string
  precio: number
}

function mostrarProducto(p: Producto): void {
  console.log(\`\${p.nombre}: $\${p.precio}\`)
}`,
    keyPoints: [
      'any desactiva la verificación de tipos — TypeScript ya no puede ayudarte con esa variable.',
      'Con any pierdes autocompletado, detección de errores y documentación implícita.',
      'any tiene usos legítimos: migración gradual, datos externos de estructura desconocida.',
      'La regla práctica: si usas any para "silenciar" un error, busca entender el error primero.',
      'unknown es una alternativa más segura que any cuando no conoces el tipo de un valor.',
      'Con strict:true, TypeScript activa noImplicitAny que evita que inferiera any silenciosamente.',
    ],
    exercise: {
      description:
        'Observa este código con any: function procesar(valor: any) { return valor.toUpperCase() }. ¿Qué error de ejecución ocurriría si llamas procesar(42)? Ahora reescribe la función sin any, tipando el parámetro como string. ¿Qué cambia? ¿Cuándo TypeScript detectaría el error ahora?',
      hint: 'Con any, TypeScript no protesta al compilar, pero en tiempo de ejecución 42.toUpperCase() lanza TypeError. Con string como tipo, TypeScript detecta el error durante la compilación antes de ejecutar.',
    },
    quiz: [
      {
        question: '¿Qué hace el tipo any en TypeScript?',
        options: [
          'Permite valores de cualquier tipo y desactiva la verificación de tipos para esa variable',
          'Es igual que unknown pero más seguro',
          'Solo permite números, strings y booleanos',
          'Convierte automáticamente los valores al tipo correcto',
        ],
        correctAnswer: 'Permite valores de cualquier tipo y desactiva la verificación de tipos para esa variable',
        correctFeedback:
          'Correcto. Con any, TypeScript deja de verificar el tipo de esa variable. Puedes asignarle cualquier valor y acceder a cualquier propiedad sin error de compilación.',
        incorrectFeedback:
          'No es correcto. any desactiva la verificación de tipos: una variable any puede recibir cualquier valor y TypeScript no detecta errores de tipo en ella.',
      },
      {
        question: '¿Por qué usar any en exceso es problemático?',
        options: [
          'Porque any hace el código más lento',
          'Porque any no está disponible en TypeScript moderno',
          'Porque any elimina los beneficios de TypeScript: sin errores detectados, sin autocompletado útil',
          'Porque any solo funciona con variables, no con parámetros de funciones',
        ],
        correctAnswer: 'Porque any elimina los beneficios de TypeScript: sin errores detectados, sin autocompletado útil',
        correctFeedback:
          'Correcto. Cuando usas any, TypeScript no puede verificar tipos ni ofrecer autocompletado útil. Básicamente estás escribiendo JavaScript sin las ventajas de TypeScript.',
        incorrectFeedback:
          'No es correcto. El problema con any es que desactiva todos los beneficios de TypeScript: no hay detección de errores, no hay autocompletado basado en tipos, no hay documentación implícita.',
      },
      {
        question: '¿Cuál es una situación legítima para usar any?',
        options: [
          'Cuando no quieres leer los mensajes de error de TypeScript',
          'Cuando migras código JavaScript a TypeScript gradualmente',
          'Siempre, porque any hace el código más flexible',
          'Cuando la función devuelve un número',
        ],
        correctAnswer: 'Cuando migras código JavaScript a TypeScript gradualmente',
        correctFeedback:
          'Correcto. Durante la migración gradual de JavaScript a TypeScript, any puede usarse temporalmente en partes del código que aún no han sido tipadas completamente.',
        incorrectFeedback:
          'No es correcto. Uno de los usos legítimos de any es durante la migración de JavaScript a TypeScript. Permite que el código existente funcione mientras defines los tipos correctos gradualmente.',
      },
    ],
  },

  // ── Lección 19 ───────────────────────────────────────────────────────────
  {
    slug: 'tipo-unknown',
    title: 'El tipo unknown',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 6,
    description:
      'Aprende qué es unknown y por qué es una alternativa más segura que any cuando no conoces el tipo de un valor.',
    explanation: `\`unknown\` fue introducido en TypeScript 3.0 como una alternativa más segura a \`any\`. Ambos representan "no sé el tipo de este valor", pero con una diferencia crucial: **con \`unknown\` debes verificar el tipo antes de usarlo**.

**La diferencia clave entre any y unknown**

\`\`\`ts
let valorAny: any = "hola"
valorAny.toUpperCase()  // TypeScript no protesta (aunque sea peligroso)

let valorUnknown: unknown = "hola"
// valorUnknown.toUpperCase()  // Error: Object is of type 'unknown'
\`\`\`

Con \`unknown\`, TypeScript te obliga a verificar el tipo antes de usar el valor.

**¿Cómo se usa unknown?**

Necesitas comprobar el tipo con \`typeof\`, \`instanceof\` u otras técnicas antes de operar con el valor:

\`\`\`ts
let valor: unknown = obtenerValorExterno()

if (typeof valor === "string") {
  console.log(valor.toUpperCase())  // ✓ TypeScript sabe que es string aquí
}

if (typeof valor === "number") {
  console.log(valor.toFixed(2))  // ✓ TypeScript sabe que es number aquí
}
\`\`\`

**¿Cuándo usar unknown?**

- Cuando recibes datos de una API y no sabes exactamente qué estructura tendrán
- Cuando lees archivos o datos del usuario
- Cuando el tipo varía y necesitas manejarlo de forma segura
- Como parámetro de funciones que manejan diferentes tipos sin saber cuál vendrá

**La filosofía detrás de unknown**

\`unknown\` dice: "hay algo aquí, pero no sé qué es, así que tienes que verificarlo antes de usarlo".
\`any\` dice: "hay algo aquí, confía en mí, no verifiques nada".

\`unknown\` es la opción responsable cuando genuinamente no conoces el tipo.

**Comparación rápida**

| Característica | any | unknown |
|---|---|---|
| Puede recibir cualquier valor | Sí | Sí |
| Verificación de tipos | No | Sí (obligatoria antes de usar) |
| Recomendado | Solo casos especiales | Cuando no conoces el tipo |`,
    codeExample: `// ── archivo: unknown.ts ──────────────────────────────────────────────────

// Función que puede recibir cualquier tipo (simulando datos externos)
function procesarEntrada(entrada: unknown): string {
  // Debemos verificar el tipo antes de usar el valor
  if (typeof entrada === "string") {
    return entrada.toUpperCase()
  }

  if (typeof entrada === "number") {
    return entrada.toFixed(2)
  }

  if (typeof entrada === "boolean") {
    return entrada ? "Sí" : "No"
  }

  return "Tipo no soportado"
}

console.log(procesarEntrada("hola"))   // → HOLA
console.log(procesarEntrada(3.14159))  // → 3.14
console.log(procesarEntrada(true))     // → Sí
console.log(procesarEntrada(null))     // → Tipo no soportado

// ── any vs unknown: la diferencia práctica ────────────────────────────────

function conAny(valor: any): void {
  valor.toUpperCase()  // TypeScript no avisa — puede fallar en ejecución
}

function conUnknown(valor: unknown): void {
  // valor.toUpperCase()  // Error: Object is of type 'unknown'
  if (typeof valor === "string") {
    valor.toUpperCase()  // ✓ Aquí TypeScript sabe que es string
  }
}

// unknown es la elección responsable cuando no conoces el tipo`,
    keyPoints: [
      'unknown es una alternativa más segura que any: ambos aceptan cualquier valor, pero unknown obliga a verificar el tipo antes de usarlo.',
      'Con any puedes usar el valor sin verificar — con unknown necesitas comprobar el tipo primero.',
      'typeof, instanceof y otras comprobaciones de tipo permiten "desbloquear" el valor de un unknown.',
      'Usa unknown cuando recibes datos externos cuyo tipo no conoces: APIs, archivos, input del usuario.',
      'unknown no te deja hacer nada con el valor hasta que demuestres que conoces su tipo.',
      'La regla: si necesitas any, evalúa si unknown sería más apropiado y seguro.',
    ],
    exercise: {
      description:
        'Escribe una función formatearValor(valor: unknown): string que formatee el valor según su tipo: si es string, devuelve el texto en mayúsculas; si es number, devuelve el número con 2 decimales; si es boolean, devuelve "Sí" o "No"; para cualquier otro tipo, devuelve "Valor desconocido". Prueba la función con diferentes tipos de entrada.',
      hint: 'Usa typeof para verificar el tipo dentro de la función: if (typeof valor === "string") { ... } else if (typeof valor === "number") { ... }. TypeScript permitirá usar el valor correctamente dentro de cada if.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre any y unknown?',
        options: [
          'unknown solo acepta strings, any acepta todo',
          'any y unknown son idénticos en TypeScript',
          'Con unknown, debes verificar el tipo antes de usar el valor; con any, no',
          'unknown es más lento que any en tiempo de ejecución',
        ],
        correctAnswer: 'Con unknown, debes verificar el tipo antes de usar el valor; con any, no',
        correctFeedback:
          'Correcto. Esta es la diferencia crucial: any te deja usar el valor sin verificar, mientras que unknown te obliga a comprobar el tipo primero, haciendo el código más seguro.',
        incorrectFeedback:
          'No es correcto. La diferencia clave es que unknown obliga a verificar el tipo con typeof u otras técnicas antes de usar el valor. Con any puedes hacer cualquier cosa sin verificación.',
      },
      {
        question: '¿Qué hace TypeScript con este código?\n\nlet x: unknown = "texto"\nx.toUpperCase()',
        options: [
          'Funciona correctamente y devuelve "TEXTO"',
          'Produce un error: Object is of type "unknown"',
          'Devuelve undefined',
          'Solo produce error si --strict está activado',
        ],
        correctAnswer: 'Produce un error: Object is of type "unknown"',
        correctFeedback:
          'Correcto. Con unknown, TypeScript no te permite usar el valor directamente. Necesitas verificar primero: if (typeof x === "string") { x.toUpperCase() }',
        incorrectFeedback:
          'No es correcto. TypeScript no permite usar un valor de tipo unknown directamente. Debes verificar el tipo primero: if (typeof x === "string") { x.toUpperCase() }',
      },
    ],
  },

  // ── Lección 20 ───────────────────────────────────────────────────────────
  {
    slug: 'inferencia-tipos',
    title: 'Inferencia de tipos',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 7,
    description:
      'Aprende cómo TypeScript puede detectar tipos automáticamente sin que tengas que escribirlos siempre.',
    explanation: `Una de las características más inteligentes de TypeScript es la **inferencia de tipos**. TypeScript puede deducir el tipo de una variable automáticamente basándose en el valor que se le asigna, sin que tú tengas que escribirlo explícitamente.

**¿Qué es la inferencia de tipos?**

\`\`\`ts
// Con tipo explícito:
let nombre: string = "Ana"

// Con inferencia (TypeScript deduce que es string):
let nombre = "Ana"  // TypeScript infiere: string

// Con tipo explícito:
let edad: number = 25

// Con inferencia:
let edad = 25  // TypeScript infiere: number
\`\`\`

En ambos casos, TypeScript sabe el tipo. La diferencia es que en el segundo caso no tuviste que escribirlo.

**¿Cuándo TypeScript puede inferir el tipo?**

Cuando declaras y asignas en la misma línea:

\`\`\`ts
let activo = true          // boolean
let precio = 99.99         // number
let nombre = "Sofía"       // string
let numeros = [1, 2, 3]    // number[]
let persona = { nombre: "Ana", edad: 28 }  // { nombre: string, edad: number }
\`\`\`

**¿Cuándo NO puede inferir el tipo?**

Cuando declaras la variable sin asignar un valor:

\`\`\`ts
let resultado  // TypeScript infiere: any (problema!)
resultado = "texto"
resultado = 42  // JavaScript permitiría esto, TypeScript con strict te avisará
\`\`\`

En este caso, debes anotar el tipo:

\`\`\`ts
let resultado: string
resultado = "texto"    // ✓
// resultado = 42      // Error: number no es string
\`\`\`

**Inferencia en funciones**

TypeScript también puede inferir el tipo de retorno de una función:

\`\`\`ts
function sumar(a: number, b: number) {
  return a + b  // TypeScript infiere que devuelve number
}
\`\`\`

Los parámetros, sin embargo, necesitan tipos explícitos con \`strict: true\`.

**¿Siempre debo escribir el tipo?**

No. La regla práctica es:
- Si TypeScript puede inferir el tipo claramente, no lo escribas (código más limpio).
- Si declares sin asignar, escríbelo.
- Si el tipo inferido no es exactamente lo que quieres, escríbelo.
- En funciones públicas (APIs, librerías), escríbelo para que sea más legible.

La inferencia existe para que el código sea más limpio sin perder seguridad.`,
    codeExample: `// ── archivo: inferencia.ts ───────────────────────────────────────────────

// TypeScript infiere todos estos tipos automáticamente:
let nombre = "Sofía"           // string
let edad = 22                  // number
let activa = true              // boolean
let numeros = [1, 2, 3]        // number[]
let mixto = [1, "dos", true]   // (string | number | boolean)[]

// Objeto: TypeScript infiere la forma del objeto
let producto = {
  nombre: "Laptop",
  precio: 850,
  disponible: true
}
// TypeScript sabe: { nombre: string, precio: number, disponible: boolean }

// Si intentas asignar un tipo diferente después:
// nombre = 42  // Error: Type 'number' is not assignable to type 'string'
// edad = "veintidós"  // Error: Type 'string' is not assignable to type 'number'

// Inferencia en funciones: TypeScript infiere el tipo de retorno
function duplicar(n: number) {
  return n * 2  // TypeScript infiere: devuelve number
}

const resultado = duplicar(5)  // TypeScript sabe que resultado es number
console.log(resultado)  // → 10

// Cuándo SÍ escribir el tipo explícitamente:
// 1. Cuando declaras sin asignar
let puntuacion: number  // necesario si no asignas valor
puntuacion = 0

// 2. Cuando quieres ser más específico
let estado: "activo" | "inactivo" = "activo"  // tipo más preciso que string`,
    keyPoints: [
      'TypeScript infiere el tipo automáticamente cuando declaras y asignas una variable en la misma línea.',
      'Si declaras sin asignar valor, TypeScript no puede inferir el tipo — escríbelo explícitamente.',
      'TypeScript también puede inferir el tipo de retorno de las funciones.',
      'Los parámetros de funciones necesitan tipos explícitos con strict:true.',
      'La regla: si TypeScript puede inferir el tipo claramente, no necesitas escribirlo.',
      'La inferencia existe para hacer el código más limpio sin perder la seguridad de los tipos.',
    ],
    exercise: {
      description:
        'Crea un archivo inferencia.ts con 5 variables declaradas SIN anotar el tipo explícitamente (usa inferencia). Incluye al menos un string, un number, un boolean y un objeto. Pasa el cursor sobre cada variable en VS Code y observa qué tipo infiere TypeScript. ¿Los tipos inferidos son los que esperabas?',
      hint: 'En VS Code, al pasar el cursor sobre una variable verás el tipo inferido en un tooltip. Por ejemplo: "let nombre: string". Si no tienes VS Code, puedes usar el playground en typescriptlang.org/play.',
    },
    quiz: [
      {
        question: '¿Qué tipo infiere TypeScript para esta variable?\n\nlet precio = 99.99',
        options: ['any', 'float', 'number', 'decimal'],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. TypeScript infiere el tipo number para 99.99. No existen los tipos float o decimal en TypeScript — todos los números son number.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere number para 99.99. No hay tipos float o decimal en TypeScript — todos los valores numéricos son de tipo number.',
      },
      {
        question: '¿En qué caso TypeScript NO puede inferir el tipo automáticamente?',
        options: [
          'let nombre = "Ana"',
          'let activo = true',
          'let puntuacion (sin valor asignado)',
          'let lista = [1, 2, 3]',
        ],
        correctAnswer: 'let puntuacion (sin valor asignado)',
        correctFeedback:
          'Correcto. Cuando declaras una variable sin asignar un valor, TypeScript no tiene información para inferir el tipo. En ese caso, debes anotarlo explícitamente: let puntuacion: number.',
        incorrectFeedback:
          'No es correcto. TypeScript puede inferir el tipo de cualquier variable que se declare y asigne en la misma línea. Cuando no hay valor inicial, TypeScript no puede inferir y necesitas anotar el tipo.',
      },
      {
        question: '¿Qué tipo infiere TypeScript para el retorno de esta función?\n\nfunction multiplicar(a: number, b: number) { return a * b }',
        options: ['any', 'void', 'number', 'Se necesita anotación explícita'],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. TypeScript infiere que la función devuelve number porque a y b son number, y number * number es number. No necesitas escribir el tipo de retorno explícitamente.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere el tipo de retorno a partir de la expresión return. Como a y b son number, a * b también es number, por lo que TypeScript infiere que la función devuelve number.',
      },
    ],
  },

  // ── Lección 21 ───────────────────────────────────────────────────────────
  {
    slug: 'typescript-no-cambia-javascript-final',
    title: 'TypeScript no cambia el JavaScript final',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 8,
    description:
      'Entiende que los tipos ayudan durante el desarrollo, pero no existen como tipos de TypeScript en el JavaScript final compilado.',
    explanation: `Este es uno de los conceptos más importantes de TypeScript y uno que los principiantes suelen pasar por alto: **los tipos de TypeScript solo existen durante el desarrollo, no en tiempo de ejecución**.

**¿Qué significa esto?**

Cuando TypeScript compila tu código, elimina completamente todas las anotaciones de tipo. El JavaScript resultante es idéntico al que habrías escrito sin TypeScript, excepto que ya fue verificado.

\`\`\`ts
// TypeScript (main.ts)
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad
}

const total: number = calcularTotal(25.99, 3)
console.log(total)
\`\`\`

Se convierte en:

\`\`\`js
// JavaScript (main.js) — los tipos desaparecieron
function calcularTotal(precio, cantidad) {
  return precio * cantidad
}

const total = calcularTotal(25.99, 3)
console.log(total)
\`\`\`

**¿Por qué esto importa?**

**1. TypeScript no valida tipos en ejecución**

Si de alguna manera un valor del tipo incorrecto llega a tu función en tiempo de ejecución (por ejemplo, de una API), TypeScript no puede protegerte ahí. Solo verifica durante la compilación.

\`\`\`ts
function saludar(nombre: string): string {
  return "Hola, " + nombre
}

// TypeScript verificó los tipos al compilar.
// Pero si alguien llama esta función desde JavaScript con un número:
// saludar(42) → TypeScript no puede impedirlo en tiempo de ejecución
\`\`\`

**2. No uses typeof para detectar tipos de TypeScript en ejecución**

En JavaScript puedes usar \`typeof\` para saber si algo es string, number, etc. Pero no puedes detectar interfaces de TypeScript en tiempo de ejecución porque no existen en el JavaScript final.

**3. El rendimiento no cambia**

Dado que los tipos se eliminan en la compilación, el JavaScript resultante corre igual de rápido que si lo hubieras escrito sin TypeScript.

**4. TypeScript hace el trabajo antes de que el código corra**

Este es su principal valor: encuentra los errores antes de que el usuario vea algo. Es como revisar un documento antes de entregarlo, no después.

**Resumen del modelo mental**

TypeScript vive solo en tu editor y en el proceso de compilación. Cuando el código llega al usuario (navegador o servidor), solo existe JavaScript puro.`,
    codeExample: `// ── TypeScript (antes de compilar) ───────────────────────────────────────
// archivo: tipos.ts

interface Estudiante {
  nombre: string
  nota: number
  aprobado: boolean
}

function resumirEstudiante(e: Estudiante): string {
  const estado: string = e.aprobado ? "Aprobó" : "Reprobó"
  return \`\${e.nombre}: \${e.nota} — \${estado}\`
}

const ana: Estudiante = {
  nombre: "Ana",
  nota: 8.5,
  aprobado: true
}

console.log(resumirEstudiante(ana))

// ── JavaScript generado (después de compilar) ─────────────────────────────
// archivo: tipos.js
// (interface desapareció completamente)

// function resumirEstudiante(e) {
//   const estado = e.aprobado ? "Aprobó" : "Reprobó";
//   return \`\${e.nombre}: \${e.nota} — \${estado}\`;
// }

// const ana = {
//   nombre: "Ana",
//   nota: 8.5,
//   aprobado: true
// };

// console.log(resumirEstudiante(ana));

// ← Ningún tipo, ninguna interface — JavaScript puro.
// La verificación ya ocurrió durante la compilación.`,
    keyPoints: [
      'Los tipos de TypeScript se eliminan completamente al compilar — no existen en el JavaScript final.',
      'TypeScript verifica tipos durante la compilación, no durante la ejecución del programa.',
      'El JavaScript generado corre igual de rápido que JavaScript escrito sin TypeScript.',
      'Si datos incorrectos llegan en tiempo de ejecución (ej. de una API), TypeScript no puede protegerte ahí.',
      'Las interfaces y anotaciones de tipo son solo para el desarrollador y el compilador, no para el runtime.',
      'El valor de TypeScript es prevenir errores antes de que el código llegue al usuario.',
    ],
    exercise: {
      description:
        'Crea un archivo con una interfaz, varias variables tipadas y una función con tipos en parámetros y retorno. Compílalo con tsc y abre el archivo .js generado. Lista todas las diferencias entre el .ts original y el .js generado. ¿Qué desapareció? ¿Qué se mantuvo igual?',
      hint: 'Verás que: las interfaces desaparecen completamente, los tipos en parámetros desaparecen (: string, : number), los tipos en variables desaparecen. Lo que se mantiene: la lógica, los nombres de variables, las llamadas a funciones.',
    },
    quiz: [
      {
        question: '¿Dónde existen los tipos de TypeScript?',
        options: [
          'Solo en el JavaScript final compilado',
          'En el código TypeScript y en el JavaScript final',
          'Solo durante el desarrollo, en el código .ts y la compilación',
          'Solo en el navegador, no en Node.js',
        ],
        correctAnswer: 'Solo durante el desarrollo, en el código .ts y la compilación',
        correctFeedback:
          'Correcto. Los tipos de TypeScript solo existen en el código fuente .ts y durante el proceso de compilación. El JavaScript final no contiene ningún tipo.',
        incorrectFeedback:
          'No es correcto. Los tipos de TypeScript son eliminados al compilar. Solo existen en el archivo .ts y durante el proceso de compilación. El archivo .js final es JavaScript puro sin tipos.',
      },
      {
        question: '¿Puede TypeScript protegerte de valores incorrectos que llegan de una API en tiempo de ejecución?',
        options: [
          'Sí, TypeScript verifica tipos también en tiempo de ejecución',
          'No, TypeScript solo verifica tipos en tiempo de compilación, no en ejecución',
          'Sí, pero solo si usas strict:true en tsconfig',
          'Sí, automáticamente para datos de fetch()',
        ],
        correctAnswer: 'No, TypeScript solo verifica tipos en tiempo de compilación, no en ejecución',
        correctFeedback:
          'Correcto. TypeScript verifica durante la compilación. Cuando el código corre, los tipos ya no existen. Para validar datos en tiempo de ejecución (como respuestas de APIs), se usan librerías como Zod o Yup.',
        incorrectFeedback:
          'No es correcto. TypeScript solo verifica tipos durante la compilación. En tiempo de ejecución, el código es JavaScript puro sin tipos. Para validar datos externos, se necesitan herramientas adicionales.',
      },
      {
        question: '¿Afecta TypeScript al rendimiento del código en tiempo de ejecución?',
        options: [
          'Sí, el código TypeScript es más lento porque tiene verificaciones adicionales',
          'Sí, pero solo para funciones con muchos parámetros',
          'No, el JavaScript generado es idéntico en rendimiento al escrito a mano',
          'Sí, porque TypeScript agrega código de verificación de tipos',
        ],
        correctAnswer: 'No, el JavaScript generado es idéntico en rendimiento al escrito a mano',
        correctFeedback:
          'Correcto. Como los tipos se eliminan al compilar, el JavaScript resultante es equivalente al que habrías escrito sin TypeScript. No hay overhead de rendimiento en tiempo de ejecución.',
        incorrectFeedback:
          'No es correcto. TypeScript no afecta el rendimiento porque los tipos se eliminan completamente al compilar. El JavaScript resultante es exactamente el mismo que si lo hubieras escrito sin TypeScript.',
      },
    ],
  },

  // ── Lección 22 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-tipos-basicos',
    title: 'Errores comunes con tipos básicos',
    module: 'Tipos básicos',
    moduleNumber: 3,
    order: 9,
    description:
      'Aprende a evitar errores comunes al mezclar strings, numbers, booleans, null, undefined, any y unknown.',
    explanation: `A medida que aprendes los tipos básicos de TypeScript, hay errores que los principiantes cometen frecuentemente. Esta lección los reúne para que puedas reconocerlos y evitarlos.

**Error 1: Usar String, Number, Boolean con mayúscula**

\`\`\`ts
let nombre: String = "Ana"  // ✗ (aunque funciona, no es la práctica correcta)
let nombre: string = "Ana"  // ✓ (usa siempre minúsculas)
\`\`\`

\`String\` (mayúscula) es el objeto wrapper de JavaScript. \`string\` (minúscula) es el tipo primitivo de TypeScript. Siempre usa minúsculas para los tipos.

**Error 2: Esperar que TypeScript maneje null en tiempo de ejecución**

\`\`\`ts
function obtenerNombre(): string | null {
  return null
}

const nombre = obtenerNombre()
// nombre.toUpperCase()  // ← Error de ejecución si no verificas antes

if (nombre !== null) {
  nombre.toUpperCase()  // ✓ Verificación antes de usar
}
\`\`\`

**Error 3: Confundir tipos falsy con false**

\`\`\`ts
let activo: boolean = false  // ✓ booleano real

// Esto que funciona en JS puede sorprender en TS strict:
// if (0) { ... }  // 0 es falsy pero no es boolean
// if ("") { ... } // "" es falsy pero no es boolean
\`\`\`

**Error 4: Abusar de any cuando hay mejores opciones**

\`\`\`ts
// Mala práctica:
function procesar(dato: any): any { ... }

// Mejor:
function procesar(dato: string | number): string { ... }
\`\`\`

**Error 5: Mezclar tipos incompatibles**

\`\`\`ts
let valor: string = "hola"
// valor = 42  // Error: number no es asignable a string
\`\`\`

**Error 6: Olvidar que undefined es diferente de null**

\`\`\`ts
function ejemplo(): string | null {
  return null  // explícito
}

// Undefined no es igual a null en TypeScript strict:
let x: string | null = null    // ✓
// let x: string | null = undefined  // Error con strictNullChecks
\`\`\`

**Error 7: No manejar el caso undefined en variables no inicializadas**

\`\`\`ts
let resultado: number
// console.log(resultado + 1)  // Error: Variable used before assigned
resultado = 10
console.log(resultado + 1)  // ✓
\`\`\`

**Estrategia para resolver errores de tipo**

1. Lee el mensaje de error (número de línea, tipo esperado, tipo recibido)
2. Identifica qué tipo es el valor que estás usando
3. Decide: ¿el tipo anotado es correcto? ¿O el valor que estás pasando es incorrecto?
4. Corrige el más apropiado`,
    codeExample: `// ── archivo: errores-tipos.ts ────────────────────────────────────────────

// ✗ Error 1: Tipo con mayúscula
// let nombre: String = "Ana"  ← evitar
let nombre: string = "Ana"  // ✓

// ✗ Error 2: No verificar null
function buscarEmail(id: number): string | null {
  const emails: Record<number, string> = { 1: "ana@email.com" }
  return emails[id] ?? null
}

const email = buscarEmail(99)
// email.toUpperCase()  // ✗ posible error de ejecución

if (email !== null) {
  console.log(email.toUpperCase())  // ✓
}

// Alternativa con optional chaining:
console.log(email?.toUpperCase() ?? "Email no encontrado")

// ✗ Error 3: Mezclar tipos
let precio: number = 99
// precio = "noventa y nueve"  // Error: string no es number

// ✗ Error 4: any cuando hay mejor opción
// function formatear(v: any): string { return String(v) }

// ✓ Mejor con tipo unión:
function formatear(v: string | number | boolean): string {
  return String(v)
}

console.log(formatear("hola"))  // → hola
console.log(formatear(42))      // → 42
console.log(formatear(true))    // → true

// ✗ Error 5: Variable usada antes de asignarse
let total: number
// console.log(total)  // Error: Variable 'total' is used before being assigned
total = 0
console.log(total)  // ✓`,
    keyPoints: [
      'Usa siempre string, number, boolean en minúsculas para tipos — no String, Number, Boolean.',
      'Verifica siempre si un valor puede ser null/undefined antes de usarlo.',
      'false (boolean) es diferente de 0 y "" (valores falsy) — TypeScript strict los distingue.',
      'Prefiere tipos unión (string | number) sobre any cuando el valor puede ser de varios tipos.',
      'No uses una variable antes de asignarle un valor — TypeScript lo detecta con strictNullChecks.',
      'Cuando veas un error, lee el tipo esperado y el tipo recibido — eso te dirá exactamente qué corregir.',
    ],
    exercise: {
      description:
        'Crea un archivo con estos 3 errores intencionados y corrígelos: 1) let activo: Boolean = true, 2) let valor: number = "cien", 3) una función que puede devolver string o null y la usas sin verificar si es null. Para cada uno, anota el mensaje de error que TypeScript muestra y cómo lo corregiste.',
      hint: 'Error 1: Boolean → boolean. Error 2: "cien" → 100 o cambia el tipo a string. Error 3: agrega un if para verificar que no es null antes de usar el valor, o usa optional chaining (?.).',
    },
    quiz: [
      {
        question: '¿Cuál de estas declaraciones usa incorrectamente los tipos básicos de TypeScript?',
        options: [
          'let nombre: string = "Ana"',
          'let edad: Number = 25',
          'let activo: boolean = true',
          'let precio: number = 9.99',
        ],
        correctAnswer: 'let edad: Number = 25',
        correctFeedback:
          'Correcto. Number con mayúscula es el objeto wrapper de JavaScript, no el tipo primitivo de TypeScript. Siempre usa number en minúsculas para anotaciones de tipo.',
        incorrectFeedback:
          'No es correcto. La declaración incorrecta es "let edad: Number = 25". En TypeScript, el tipo para números es number (en minúsculas). Number con mayúscula es el objeto wrapper de JavaScript.',
      },
      {
        question: '¿Qué sucede si intentas usar una variable que puede ser null sin verificarla primero?',
        options: [
          'TypeScript la convierte automáticamente a string vacío',
          'TypeScript muestra un error de compilación con strictNullChecks activado',
          'El programa continúa ejecutando sin problema',
          'TypeScript usa el valor por defecto del tipo',
        ],
        correctAnswer: 'TypeScript muestra un error de compilación con strictNullChecks activado',
        correctFeedback:
          'Correcto. Con strict:true (que activa strictNullChecks), TypeScript te obliga a verificar si un valor puede ser null antes de usarlo, previniendo errores de ejecución.',
        incorrectFeedback:
          'No es correcto. Con strictNullChecks (activado por strict:true), TypeScript detecta cuando intentas usar un valor que puede ser null sin verificarlo primero y muestra un error de compilación.',
      },
      {
        question: '¿Cuál es la forma correcta de manejar un valor que puede ser string o null?',
        options: [
          'Usar tipo any para evitar el problema',
          'Verificar con if (valor !== null) antes de usarlo, o usar optional chaining',
          'Convertirlo siempre a string con String(valor)',
          'Ignorar el null porque TypeScript lo maneja automáticamente',
        ],
        correctAnswer: 'Verificar con if (valor !== null) antes de usarlo, o usar optional chaining',
        correctFeedback:
          'Correcto. Para valores que pueden ser null, verifica antes de usar: if (valor !== null) { ... }, o usa optional chaining: valor?.metodo(), o el operador ??: valor ?? "predeterminado".',
        incorrectFeedback:
          'No es correcto. La forma correcta de manejar valores que pueden ser null es verificarlos con if, usar optional chaining (?.) o el operador nullish coalescing (??). Usar any elimina la protección de TypeScript.',
      },
    ],
  },
]

export const tsModule3: Module = {
  number: 3,
  title: 'Tipos básicos',
  level: 'básico',
  lessons: lessonsTsModule3,
}
