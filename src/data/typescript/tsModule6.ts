import type { Lesson, Module } from '@/types'

export const lessonsTsModule6: Lesson[] = [
  // ── Lección 39 ───────────────────────────────────────────────────────────
  {
    slug: 'tipar-parametros',
    title: 'Tipar parámetros',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 1,
    description:
      'Aprende a indicar qué tipo de datos debe recibir una función en sus parámetros.',
    explanation: `Cuando defines una función en TypeScript, puedes indicar exactamente qué tipo de dato debe recibir cada parámetro. Esto se llama **tipar parámetros** y es una de las características más útiles de TypeScript.

**¿Por qué es importante tipar los parámetros?**

En JavaScript puro, una función puede recibir cualquier cosa:

\`\`\`js
function saludar(nombre) {
  return "Hola, " + nombre
}

saludar("Ana")   // funciona
saludar(42)      // funciona aunque sea raro
saludar(true)    // funciona y es confuso
saludar()        // funciona pero devuelve "Hola, undefined"
\`\`\`

En TypeScript, puedes indicar que \`nombre\` debe ser \`string\`:

\`\`\`ts
function saludar(nombre: string) {
  return "Hola, " + nombre
}

saludar("Ana")   // ✓
saludar(42)      // Error: number no es string
saludar(true)    // Error: boolean no es string
\`\`\`

**Sintaxis para tipar parámetros**

La sintaxis es simple: después del nombre del parámetro, escribes \`:\` seguido del tipo:

\`\`\`ts
function nombreFuncion(parametro: tipo) {
  // ...
}
\`\`\`

Puedes tipar múltiples parámetros:

\`\`\`ts
function calcularDescuento(precio: number, porcentaje: number) {
  return precio - (precio * porcentaje / 100)
}
\`\`\`

**Una analogía útil**

Imagina que una función es una máquina en una fábrica. Si la máquina está diseñada para procesar naranjas, no tiene sentido que alguien le meta tornillos. TypeScript actúa como el operario que revisa lo que entra en la máquina antes de que llegue.

**¿Qué pasa si no tipas los parámetros?**

Si no tipas un parámetro, TypeScript le asigna el tipo \`any\`, lo que desactiva la verificación de tipos para ese parámetro. Esto es como no tener TypeScript en esa parte del código.

\`\`\`ts
function saludar(nombre) {  // nombre es implícitamente any
  return "Hola, " + nombre  // TypeScript no verifica nada aquí
}
\`\`\`

Por eso es una buena práctica tipar siempre los parámetros de tus funciones.

**Tipos que puedes usar en parámetros**

Puedes usar cualquier tipo de TypeScript en tus parámetros:
- \`string\`
- \`number\`
- \`boolean\`
- \`string[]\` (array de strings)
- \`number[]\` (array de números)
- Y muchos más que aprenderás en este nivel.`,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// Parámetro de tipo string
function saludar(nombre: string): void {
  console.log("Hola, " + nombre)
}

saludar("Ana")     // ✓ → Hola, Ana
// saludar(42)     // Error: number no es string

// Parámetro de tipo number
function doblar(numero: number): number {
  return numero * 2
}

console.log(doblar(5))   // → 10
// console.log(doblar("cinco"))  // Error

// Parámetro de tipo boolean
function mostrarEstado(activo: boolean): string {
  return activo ? "Activo" : "Inactivo"
}

console.log(mostrarEstado(true))   // → Activo
console.log(mostrarEstado(false))  // → Inactivo

// Múltiples parámetros tipados
function calcularDescuento(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje / 100)
}

console.log(calcularDescuento(100, 20))  // → 80
// calcularDescuento("cien", 20)  // Error: string no es number

// Parámetro de tipo array
function mostrarNotas(notas: number[]): void {
  const promedio = notas.reduce((sum, n) => sum + n, 0) / notas.length
  console.log("Promedio:", promedio.toFixed(2))
}

mostrarNotas([8, 7.5, 9, 6.5])  // → Promedio: 7.75

// Parámetro de tipo string[]
function listarEstudiantes(nombres: string[]): void {
  nombres.forEach((nombre, i) => {
    console.log(\`\${i + 1}. \${nombre}\`)
  })
}

listarEstudiantes(["Ana", "Carlos", "Sofía"])
// → 1. Ana
// → 2. Carlos
// → 3. Sofía`,
    keyPoints: [
      'Tipar parámetros permite a TypeScript verificar que se pase el tipo correcto al llamar la función.',
      'La sintaxis es: `parámetro: tipo\` dentro de los paréntesis de la función.',
      'Si no tipas un parámetro, TypeScript le asigna \`any\`, lo que desactiva la verificación.',
      'Puedes tipar múltiples parámetros separándolos con comas.',
      'Los tipos disponibles incluyen: string, number, boolean, arrays y más.',
      'TypeScript detecta el error en tiempo de compilación, no cuando el código se ejecuta.',
    ],
    exercise: {
      description:
        'Escribe una función \`calcularArea\` que reciba dos parámetros \`ancho\` y \`alto\` de tipo \`number\`, y devuelva su producto. Luego escribe una función \`presentarEstudiante\` que reciba \`nombre\` (string), \`edad\` (number) y \`aprobado\` (boolean), e imprima un mensaje como "Ana, 20 años, Estado: Aprobado".',
      hint: 'Recuerda la sintaxis: \`function nombre(param1: tipo1, param2: tipo2)\`. Para el estado usa un condicional: \`aprobado ? "Aprobado" : "Reprobado"\`.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para tipar el parámetro \`edad\` como número?',
        options: [
          'function saludar(edad: number)',
          'function saludar(number edad)',
          'function saludar(edad = number)',
          'function saludar<number>(edad)',
        ],
        correctAnswer: 'function saludar(edad: number)',
        correctFeedback:
          'Correcto. La sintaxis es \`parámetro: tipo\`, con los dos puntos entre el nombre del parámetro y su tipo.',
        incorrectFeedback:
          'No es correcto. En TypeScript, la sintaxis para tipar un parámetro es \`nombre: tipo\`, con los dos puntos después del nombre. No se usan paréntesis angulares ni el tipo antes del nombre como en otros lenguajes.',
      },
      {
        question: '¿Qué tipo asigna TypeScript a un parámetro que no tiene anotación de tipo?',
        options: [
          'unknown',
          'never',
          'any',
          'void',
        ],
        correctAnswer: 'any',
        correctFeedback:
          'Correcto. TypeScript asigna el tipo \`any\` a parámetros sin anotación, lo que desactiva la verificación de tipos para ese parámetro.',
        incorrectFeedback:
          'No es correcto. Cuando un parámetro no tiene tipo declarado, TypeScript le asigna \`any\` implícitamente. Esto desactiva la verificación de tipos y es equivalente a no usar TypeScript para ese valor.',
      },
      {
        question: '¿Cuál de las siguientes llamadas causaría un error de TypeScript?\n\nfunction sumar(a: number, b: number): number {\n  return a + b\n}',
        options: [
          'sumar(5, 10)',
          'sumar(3.14, 2.71)',
          'sumar("5", 10)',
          'sumar(0, -1)',
        ],
        correctAnswer: 'sumar("5", 10)',
        correctFeedback:
          'Correcto. \`"5"\` es un string, pero \`a\` espera un número. TypeScript detecta este error antes de ejecutar el código.',
        incorrectFeedback:
          'No es correcto. El único error ocurre cuando se pasa \`"5"\` como argumento, porque es un string y el parámetro \`a\` espera un \`number\`. TypeScript no convierte automáticamente tipos.',
      },
      {
        question: '¿Cuál es el tipo correcto para un parámetro que debe recibir una lista de nombres?',
        options: [
          'names: string',
          'names: Array',
          'names: string[]',
          'names: [string]',
        ],
        correctAnswer: 'names: string[]',
        correctFeedback:
          'Correcto. \`string[]\` es la sintaxis para un array de strings. También se puede escribir \`Array<string>\`, que es equivalente.',
        incorrectFeedback:
          'No es correcto. Para tipar un array de strings se usa \`string[]\` o \`Array<string>\`. Solo escribir \`string\` indica un valor de texto único, no una lista. \`[string]\` es la sintaxis de una tupla de un solo elemento.',
      },
      {
        question: 'Una función recibe \`activo: boolean\`. ¿Cuál de estas llamadas es válida?',
        options: [
          'funcion("true")',
          'funcion(1)',
          'funcion(false)',
          'funcion(null)',
        ],
        correctAnswer: 'funcion(false)',
        correctFeedback:
          'Correcto. \`false\` es un valor booleano válido. \`"true"\` es un string, \`1\` es un número, y \`null\` no es boolean (a menos que se use \`strictNullChecks: false\`).',
        incorrectFeedback:
          'No es correcto. Si el parámetro espera \`boolean\`, solo se puede pasar \`true\` o \`false\`. Los strings como \`"true"\`, los números como \`1\`, o \`null\` no son booleanos en TypeScript con configuración estricta.',
      },
      {
        question: '¿Por qué es recomendable tipar siempre los parámetros de una función?',
        options: [
          'Porque TypeScript no compila si hay parámetros sin tipo',
          'Porque los parámetros sin tipo se convierten en any, desactivando la verificación de tipos',
          'Porque los parámetros sin tipo no se pueden usar dentro de la función',
          'Porque es un requisito de JavaScript moderno',
        ],
        correctAnswer: 'Porque los parámetros sin tipo se convierten en any, desactivando la verificación de tipos',
        correctFeedback:
          'Correcto. Sin anotación de tipo, TypeScript asigna \`any\` implícitamente, lo que elimina la protección de tipos para ese parámetro.',
        incorrectFeedback:
          'No es correcto. TypeScript sí compila sin tipos explícitos, pero los parámetros sin tipo se convierten en \`any\`, lo que desactiva la verificación de tipos. El objetivo de TypeScript es precisamente evitar ese tipo de errores.',
      },
    ],
  },

  // ── Lección 40 ───────────────────────────────────────────────────────────
  {
    slug: 'tipar-valores-retorno',
    title: 'Tipar valores de retorno',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 2,
    description:
      'Aprende a indicar qué tipo de dato devuelve una función y cuándo TypeScript puede inferirlo.',
    explanation: `Además de tipar los parámetros, en TypeScript puedes indicar qué tipo de dato devuelve una función. Esto se llama **tipar el valor de retorno**.

**Sintaxis del tipo de retorno**

El tipo de retorno se escribe después de los paréntesis, separado por \`:\`:

\`\`\`ts
function nombreFuncion(parametro: tipo): tipoDeRetorno {
  return valor
}
\`\`\`

Por ejemplo:

\`\`\`ts
function sumar(a: number, b: number): number {
  return a + b
}

function obtenerNombre(): string {
  return "Ana"
}

function estaActivo(): boolean {
  return true
}
\`\`\`

**Inferencia del tipo de retorno**

TypeScript puede **inferir** el tipo de retorno automáticamente. Si una función retorna un número, TypeScript lo detecta sin que tú lo escribas:

\`\`\`ts
function sumar(a: number, b: number) {
  return a + b  // TypeScript infiere que el retorno es number
}
\`\`\`

Entonces, ¿cuándo escribir el tipo de retorno explícitamente?

- **Siempre** en funciones públicas o reutilizables: facilita leerlas y documentarlas.
- Cuando la función es compleja y quieres asegurarte de que devuelves el tipo correcto.
- Cuando trabajas en equipo y otros desarrolladores usarán tu función.

**¿Qué pasa si el retorno no coincide con el tipo declarado?**

TypeScript te avisará de inmediato:

\`\`\`ts
function obtenerEdad(): number {
  return "veinte"  // Error: string no es number
}
\`\`\`

**Un error común: olvidar el return**

Si declaras un tipo de retorno, TypeScript verifica que siempre haya un \`return\` que devuelva ese tipo:

\`\`\`ts
function calcularIVA(precio: number): number {
  if (precio > 0) {
    return precio * 0.16
  }
  // Error: no todos los caminos retornan un número
}
\`\`\`

Este tipo de error es muy común en JavaScript y TypeScript te ayuda a detectarlo.`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Tipo de retorno explícito: number
function calcularPromedio(notas: number[]): number {
  const suma = notas.reduce((acc, n) => acc + n, 0)
  return suma / notas.length
}

const promedio = calcularPromedio([8, 7, 9, 6])
console.log("Promedio:", promedio.toFixed(2))  // → 7.50

// Tipo de retorno explícito: string
function formatearNombre(nombre: string, apellido: string): string {
  return \`\${apellido}, \${nombre}\`
}

console.log(formatearNombre("Ana", "García"))  // → García, Ana

// Tipo de retorno explícito: boolean
function aprobó(nota: number): boolean {
  return nota >= 6
}

console.log(aprobó(7.5))  // → true
console.log(aprobó(4.0))  // → false

// Inferencia automática (TypeScript detecta el tipo)
function multiplicar(a: number, b: number) {
  return a * b  // TypeScript infiere: number
}

// La variable hereda el tipo inferido
const resultado = multiplicar(3, 4)  // tipo: number
// const texto: string = multiplicar(3, 4)  // Error: number no es string

// Función que devuelve array tipado
function crearSaludo(nombres: string[]): string[] {
  return nombres.map(nombre => \`Hola, \${nombre}!\`)
}

const saludos = crearSaludo(["Ana", "Carlos"])
console.log(saludos)  // → ["Hola, Ana!", "Hola, Carlos!"]

// Error que TypeScript detecta:
// function obtenerNota(): number {
//   return "nueve"  // Error: Type 'string' is not assignable to type 'number'
// }`,
    keyPoints: [
      'El tipo de retorno se escribe después de los paréntesis de la función, separado por `:`.',
      'TypeScript puede inferir el tipo de retorno automáticamente en muchos casos.',
      'Se recomienda escribir el tipo de retorno explícitamente en funciones reutilizables o públicas.',
      'Si el retorno no coincide con el tipo declarado, TypeScript muestra un error.',
      'TypeScript detecta si una función no siempre retorna un valor del tipo declarado.',
      'Anotar el retorno sirve como documentación: quien llame la función sabe qué esperar.',
    ],
    exercise: {
      description:
        'Escribe una función `obtenerCalificacion` que reciba una `nota` (number) y devuelva un string según el rango: 9-10 → "Excelente", 7-8 → "Bien", 5-6 → "Regular", menos de 5 → "Reprobado". Anota explícitamente el tipo de retorno. Prueba con varios valores.',
      hint: 'Usa `if/else if` para los rangos. El tipo de retorno será `: string`. Recuerda que todos los caminos deben retornar un string.',
    },
    quiz: [
      {
        question: '¿Dónde se escribe el tipo de retorno de una función en TypeScript?',
        options: [
          'Antes del nombre de la función',
          'Después de los paréntesis y antes de las llaves',
          'Dentro de las llaves al inicio',
          'Después de la palabra `return`',
        ],
        correctAnswer: 'Después de los paréntesis y antes de las llaves',
        correctFeedback:
          'Correcto. La sintaxis es: `function nombre(params): tipoRetorno { ... }\`. El tipo va después del cierre de paréntesis.',
        incorrectFeedback:
          'No es correcto. El tipo de retorno se escribe después de los paréntesis y antes de las llaves de la función: \`function nombre(params): tipoRetorno { ... }\`.',
      },
      {
        question: '¿Qué hace TypeScript con el tipo de retorno si no lo declares explícitamente?',
        options: [
          'Asigna \`any\` siempre',
          'Da un error de compilación',
          'Lo infiere automáticamente a partir de lo que devuelve la función',
          'Asigna \`void\` por defecto',
        ],
        correctAnswer: 'Lo infiere automáticamente a partir de lo que devuelve la función',
        correctFeedback:
          'Correcto. TypeScript analiza el valor que retorna la función y deduce el tipo automáticamente. Si retorna un número, el tipo inferido es \`number\`.',
        incorrectFeedback:
          'No es correcto. TypeScript no siempre asigna \`any\` ni da error. En cambio, infiere el tipo de retorno analizando el valor que devuelve la función. Si retorna \`true\` o \`false\`, infiere \`boolean\`.',
      },
      {
        question: '¿Qué error mostraría TypeScript en este código?\n\nfunction getEdad(): number {\n  return "veinte"\n}',
        options: [
          'Ningún error, TypeScript convierte el string a número automáticamente',
          'Error: Type \'string\' is not assignable to type \'number\'',
          'Error: Missing return statement',
          'Error: Function must use arrow syntax',
        ],
        correctAnswer: "Error: Type 'string' is not assignable to type 'number'",
        correctFeedback:
          'Correcto. TypeScript detecta que \`"veinte"\` es un string pero el tipo de retorno declarado es \`number\`. No hace conversiones automáticas.',
        incorrectFeedback:
          'No es correcto. TypeScript no convierte tipos automáticamente. Como el retorno declarado es \`number\` pero se devuelve \`"veinte"\` (un string), TypeScript mostrará un error de asignación de tipos.',
      },
      {
        question: '¿Cuándo es especialmente recomendable anotar el tipo de retorno explícitamente?',
        options: [
          'Solo en funciones que devuelven booleanos',
          'Nunca, porque TypeScript siempre lo infiere correctamente',
          'En funciones reutilizables o públicas, para claridad y documentación',
          'Solo cuando la función tiene más de 3 parámetros',
        ],
        correctAnswer: 'En funciones reutilizables o públicas, para claridad y documentación',
        correctFeedback:
          'Correcto. Anotar el tipo de retorno en funciones reutilizables documenta su contrato: quien la use sabe qué esperar sin necesidad de leer la implementación.',
        incorrectFeedback:
          'No es correcto. Aunque TypeScript puede inferir el tipo de retorno, se recomienda anotarlo explícitamente en funciones reutilizables o públicas. Esto mejora la legibilidad, facilita el trabajo en equipo y sirve como documentación.',
      },
      {
        question: '¿Qué problema detecta TypeScript en este código?\n\nfunction calcularIVA(precio: number): number {\n  if (precio > 0) {\n    return precio * 0.16\n  }\n}',
        options: [
          'No hay problema, TypeScript retorna undefined automáticamente',
          'Error: no todos los caminos retornan un valor del tipo declarado',
          'Error: falta el tipo en el parámetro precio',
          'Error: las funciones deben retornar siempre en la última línea',
        ],
        correctAnswer: 'Error: no todos los caminos retornan un valor del tipo declarado',
        correctFeedback:
          'Correcto. Si \`precio <= 0\`, la función no retorna nada (retorna \`undefined\`), pero el tipo declarado es \`number\`. TypeScript detecta este camino sin retorno.',
        incorrectFeedback:
          'No es correcto. Cuando una función declara un tipo de retorno como \`number\`, TypeScript verifica que todos los caminos posibles retornen ese tipo. En este caso, si \`precio <= 0\`, la función no retorna nada, lo cual es un error.',
      },
    ],
  },

  // ── Lección 41 ───────────────────────────────────────────────────────────
  {
    slug: 'funciones-void',
    title: 'Funciones que no retornan nada: void',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 3,
    description:
      'Aprende qué significa void y cuándo usarlo en funciones que ejecutan una acción pero no devuelven un valor.',
    explanation: `En TypeScript, \`void\` es el tipo que indica que **una función no devuelve ningún valor útil**. Es el tipo de retorno correcto cuando una función realiza una acción (imprimir, guardar, actualizar) pero no necesita devolver ningún dato.

**¿Cuándo usas void?**

\`\`\`ts
function imprimirMensaje(mensaje: string): void {
  console.log(mensaje)
  // No hay return con valor
}
\`\`\`

Esta función ejecuta una acción (imprimir) pero no devuelve nada. Si intentas usar su resultado, obtienes \`undefined\`:

\`\`\`ts
const resultado = imprimirMensaje("Hola")
console.log(resultado)  // → undefined
\`\`\`

**void vs. undefined**

Aunque son similares, hay una diferencia importante:
- \`void\` significa que la función **intencionalmente no retorna un valor útil**.
- \`undefined\` es el valor concreto que JavaScript produce cuando no hay \`return\`.

En la práctica, cuando una función no devuelve nada, usa \`void\`.

**¿Puedes tener un return en una función void?**

Sí, pero sin valor:

\`\`\`ts
function procesarNota(nota: number): void {
  if (nota < 0) {
    console.log("Nota inválida")
    return  // Salida temprana, sin valor
  }
  console.log("Nota registrada:", nota)
}
\`\`\`

Si intentas retornar un valor en una función void, TypeScript te lo impide:

\`\`\`ts
function saludar(): void {
  return "Hola"  // Error: no se puede retornar un valor en una función void
}
\`\`\`

**Una analogía útil**

Imagina que un void es como el botón de "enviar" en un formulario: hace algo (envía los datos), pero no te entrega un resultado visible en tus manos. Solo ejecuta la acción.

**¿Cuándo NO usar void?**

No uses void si la función debe devolver un valor para ser usada en otra parte:

\`\`\`ts
// MAL: no puedes usar el resultado
function sumar(a: number, b: number): void {
  const suma = a + b
  // ¿Y ahora? No puedo retornarlo
}

// BIEN:
function sumar(a: number, b: number): number {
  return a + b
}

const total = sumar(3, 4)  // ✓
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Función void: imprime pero no devuelve nada
function mostrarBienvenida(nombre: string): void {
  console.log(\`¡Bienvenido al curso, \${nombre}!\`)
}

mostrarBienvenida("Ana")  // → ¡Bienvenido al curso, Ana!

// Función void: registra datos
function registrarAcceso(usuario: string, hora: string): void {
  console.log(\`[LOG] Usuario: \${usuario} entró a las \${hora}\`)
}

registrarAcceso("carlos@mail.com", "09:45")
// → [LOG] Usuario: carlos@mail.com entró a las 09:45

// Función void con return temprano
function validarEdad(edad: number): void {
  if (edad < 0 || edad > 150) {
    console.log("Edad inválida:", edad)
    return
  }
  console.log("Edad válida:", edad)
}

validarEdad(25)   // → Edad válida: 25
validarEdad(-5)   // → Edad inválida: -5

// El resultado de una función void es undefined
const resultado = mostrarBienvenida("Sofía")
console.log(resultado)  // → undefined

// Función void que modifica algo externo
const tareas: string[] = []

function agregarTarea(tarea: string): void {
  tareas.push(tarea)
  console.log(\`Tarea "\${tarea}" agregada. Total: \${tareas.length}\`)
}

agregarTarea("Estudiar TypeScript")  // → Tarea "Estudiar TypeScript" agregada. Total: 1
agregarTarea("Hacer ejercicio")      // → Tarea "Hacer ejercicio" agregada. Total: 2

// Diferencia: void vs number
function imprimirSuma(a: number, b: number): void {
  console.log(a + b)  // Solo imprime, no devuelve
}

function calcularSuma(a: number, b: number): number {
  return a + b  // Devuelve para ser usado
}

// const x = imprimirSuma(3, 4)  // x sería undefined
const y = calcularSuma(3, 4)    // y es 7 (number)`,
    keyPoints: [
      '`void` indica que una función no devuelve un valor útil.',
      'Las funciones `void` realizan acciones como imprimir, guardar o modificar algo.',
      'Si intentas usar el resultado de una función `void`, obtienes `undefined`.',
      'Puedes usar `return` sin valor en una función `void` para salir antes de tiempo.',
      'No puedes retornar un valor concreto en una función declarada como `void`.',
      'Usa `void` cuando la función es para efectos secundarios, no para producir valores.',
    ],
    exercise: {
      description:
        'Crea una función `mostrarInfoEstudiante` que reciba `nombre` (string), `nota` (number) y `aprobado` (boolean), devuelva void, e imprima: "Estudiante: [nombre] | Nota: [nota] | Estado: Aprobado/Reprobado". Luego crea otra función `registrarResultados` que reciba un array de nombres y un array de notas, y llame `mostrarInfoEstudiante` para cada par.',
      hint: 'Para la segunda función usa `forEach` o un loop con `for`. Recuerda que ambas funciones deben retornar `void`.',
    },
    quiz: [
      {
        question: '¿Qué significa el tipo `void` en el retorno de una función?',
        options: [
          'Que la función puede retornar cualquier tipo',
          'Que la función no retorna ningún valor útil',
          'Que la función retorna null',
          'Que la función está vacía por dentro',
        ],
        correctAnswer: 'Que la función no retorna ningún valor útil',
        correctFeedback:
          'Correcto. `void` indica que la función realiza una acción pero no devuelve un valor que se pueda usar. Su resultado siempre es `undefined`.',
        incorrectFeedback:
          'No es correcto. `void` no significa que pueda retornar cualquier tipo, ni que retorne `null`. Significa que la función no devuelve ningún valor útil — su resultado es siempre `undefined`.',
      },
      {
        question: '¿Qué valor produce una función `void` cuando se intenta guardar su resultado?',
        options: [
          'null',
          '0',
          'undefined',
          'NaN',
        ],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. En JavaScript y TypeScript, cuando una función no retorna nada, su resultado es `undefined`.',
        incorrectFeedback:
          'No es correcto. Las funciones que no retornan un valor producen `undefined` en JavaScript y TypeScript, no `null`, `0` ni `NaN`.',
      },
      {
        question: '¿Cuál de estos códigos es válido en TypeScript?\n\nfunction saludar(): void { ... }',
        options: [
          'function saludar(): void { return "Hola" }',
          'function saludar(): void { return 42 }',
          'function saludar(): void { return }',
          'function saludar(): void { return true }',
        ],
        correctAnswer: 'function saludar(): void { return }',
        correctFeedback:
          'Correcto. En una función `void`, puedes usar `return` sin valor para salir temprano. No puedes retornar strings, números ni booleanos.',
        incorrectFeedback:
          'No es correcto. En una función declarada como `void`, no puedes retornar un valor concreto (string, number, boolean). El único `return` permitido es uno sin valor: simplemente `return`.',
      },
      {
        question: '¿Cuál es el tipo de retorno correcto para esta función?\n\nfunction guardarNombre(nombre: string) {\n  localStorage.setItem("nombre", nombre)\n}',
        options: [
          'string',
          'boolean',
          'void',
          'undefined',
        ],
        correctAnswer: 'void',
        correctFeedback:
          'Correcto. Esta función realiza una acción (guardar en localStorage) pero no devuelve ningún valor. El tipo correcto es `void`.',
        incorrectFeedback:
          'No es correcto. Como la función no devuelve nada útil (solo ejecuta `setItem`), el tipo de retorno correcto es `void`. Aunque `undefined` y `void` son similares, en funciones TypeScript el estándar es usar `void` para indicar que no hay retorno intencional.',
      },
      {
        question: '¿Cuándo deberías usar `void` como tipo de retorno en lugar de `number`?',
        options: [
          'Cuando la función calcula un valor para usarlo en otra parte',
          'Cuando la función solo imprime, registra o modifica algo sin devolver datos',
          'Cuando la función puede fallar',
          'Cuando la función recibe muchos parámetros',
        ],
        correctAnswer: 'Cuando la función solo imprime, registra o modifica algo sin devolver datos',
        correctFeedback:
          'Correcto. `void` es para funciones de efectos secundarios: imprimir, guardar, modificar un array. Si la función necesita devolver datos para ser usados, el tipo de retorno debe ser el tipo de esos datos.',
        incorrectFeedback:
          'No es correcto. `void` se usa cuando la función solo realiza una acción sin devolver datos útiles. Si una función calcula algo que necesitas usar (como una suma o un nombre formateado), debe retornar el tipo correcto, no `void`.',
      },
    ],
  },

  // ── Lección 42 ───────────────────────────────────────────────────────────
  {
    slug: 'parametros-opcionales',
    title: 'Parámetros opcionales',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 4,
    description:
      'Aprende a crear funciones con parámetros opcionales usando el símbolo ?.',
    explanation: `En TypeScript, un **parámetro opcional** es uno que puede o no ser pasado al llamar la función. Se marca con el símbolo \`?\` después del nombre del parámetro.

**Sintaxis**

\`\`\`ts
function saludar(nombre: string, saludo?: string): void {
  // saludo puede ser string o undefined
}
\`\`\`

**¿Por qué son útiles?**

A veces quieres que una función tenga un comportamiento flexible. Por ejemplo, una función de saludo que puede recibir el nombre de la ciudad del usuario o no:

\`\`\`ts
function saludar(nombre: string, ciudad?: string): string {
  if (ciudad) {
    return \`Hola, \${nombre} desde \${ciudad}\`
  }
  return \`Hola, \${nombre}\`
}

saludar("Ana")           // → Hola, Ana
saludar("Ana", "CDMX")  // → Hola, Ana desde CDMX
\`\`\`

**¿Qué tipo tiene un parámetro opcional?**

Dentro de la función, un parámetro opcional tiene el tipo \`string | undefined\` (o el tipo que hayas declarado unido con \`undefined\`):

\`\`\`ts
function ejemplo(texto?: string): void {
  // texto es: string | undefined
  console.log(texto)  // puede ser un string o undefined
}
\`\`\`

Por eso siempre debes verificar si el parámetro tiene valor antes de usarlo:

\`\`\`ts
function mostrarDescripcion(titulo: string, descripcion?: string): void {
  console.log("Título:", titulo)
  if (descripcion) {
    console.log("Descripción:", descripcion)
  }
}
\`\`\`

**Regla importante: los parámetros opcionales van al final**

Los parámetros opcionales deben colocarse después de los parámetros requeridos:

\`\`\`ts
// ✓ Correcto: opcionales al final
function crear(nombre: string, descripcion?: string) { ... }

// Error: parámetro requerido después de opcional
function crear(descripcion?: string, nombre: string) { ... }
\`\`\`

**Parámetros opcionales vs. parámetros por defecto**

Son diferentes:
- \`param?\` — el parámetro puede no pasarse (será \`undefined\`)
- \`param = valor\` — si no se pasa, toma el valor por defecto (aprenderás esto en la siguiente lección)`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Parámetro opcional: saludo puede no pasarse
function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return \`\${saludo}, \${nombre}!\`
  }
  return \`Hola, \${nombre}!\`
}

console.log(saludar("Ana"))           // → Hola, Ana!
console.log(saludar("Ana", "Buenos días"))  // → Buenos días, Ana!

// Parámetro opcional: descripción del producto
function mostrarProducto(nombre: string, precio: number, descripcion?: string): void {
  console.log(\`Producto: \${nombre}\`)
  console.log(\`Precio: $\${precio}\`)
  if (descripcion) {
    console.log(\`Descripción: \${descripcion}\`)
  }
}

mostrarProducto("Teclado", 350)
// → Producto: Teclado
// → Precio: $350

mostrarProducto("Mouse", 200, "Mouse inalámbrico ergonómico")
// → Producto: Mouse
// → Precio: $200
// → Descripción: Mouse inalámbrico ergonómico

// Múltiples parámetros opcionales
function crearPerfil(
  nombre: string,
  edad?: number,
  ciudad?: string
): string {
  let perfil = nombre
  if (edad !== undefined) perfil += \`, \${edad} años\`
  if (ciudad) perfil += \` de \${ciudad}\`
  return perfil
}

console.log(crearPerfil("Carlos"))              // → Carlos
console.log(crearPerfil("Carlos", 28))          // → Carlos, 28 años
console.log(crearPerfil("Carlos", 28, "Lima"))  // → Carlos, 28 años de Lima

// El tipo real de un parámetro opcional es: tipo | undefined
function procesarTag(texto: string, tag?: string): string {
  // tag es: string | undefined
  const etiqueta = tag ?? "div"  // ?? = operador nullish coalescing
  return \`<\${etiqueta}>\${texto}</\${etiqueta}>\`
}

console.log(procesarTag("Hola"))          // → <div>Hola</div>
console.log(procesarTag("Hola", "span"))  // → <span>Hola</span>`,
    keyPoints: [
      'Los parámetros opcionales se marcan con `?` después del nombre: `param?: tipo\`.',
      'Dentro de la función, el tipo de un parámetro opcional es \`tipo | undefined\`.',
      'Siempre verifica si el parámetro tiene valor antes de usarlo (\`if (param)\` o \`param !== undefined\`).',
      'Los parámetros opcionales deben ir al final, después de los parámetros requeridos.',
      'Si no se pasa un parámetro opcional, su valor dentro de la función es \`undefined\`.',
      'Los parámetros opcionales son diferentes a los parámetros con valor por defecto.',
    ],
    exercise: {
      description:
        'Escribe una función \`generarReporte\` que reciba \`titulo\` (string), \`datos\` (number[]) y un parámetro opcional \`autor\` (string). La función debe imprimir el título, el promedio de los datos y, si se pasa un autor, también imprimir "Autor: [nombre]". Pruébala con y sin el parámetro autor.',
      hint: 'Recuerda que dentro de la función necesitas verificar \`if (autor)\` antes de usarlo. El promedio es la suma dividida entre la cantidad de elementos.',
    },
    quiz: [
      {
        question: '¿Cómo se marca un parámetro como opcional en TypeScript?',
        options: [
          'Con \`!\` después del nombre',
          'Con \`?\` después del nombre',
          'Con \`optional\` antes del tipo',
          'Con \`??\` entre el nombre y el tipo',
        ],
        correctAnswer: 'Con \`?\` después del nombre',
        correctFeedback:
          'Correcto. La sintaxis es \`parametro?: tipo\`. El símbolo \`?\` indica que el parámetro es opcional.',
        incorrectFeedback:
          'No es correcto. El símbolo \`?\` colocado después del nombre del parámetro es lo que lo hace opcional en TypeScript: \`parametro?: tipo\`. El \`!\` tiene otro significado (non-null assertion) y \`optional\` no es una palabra clave válida en este contexto.',
      },
      {
        question: '¿Qué tipo tiene \`apellido\` dentro de esta función?\n\nfunction obtener(nombre: string, apellido?: string): void {}',
        options: [
          'string',
          'undefined',
          'string | undefined',
          'string | null',
        ],
        correctAnswer: 'string | undefined',
        correctFeedback:
          'Correcto. Un parámetro opcional tiene el tipo de su anotación más \`undefined\`, porque puede no ser pasado.',
        incorrectFeedback:
          'No es correcto. Cuando un parámetro es opcional (\`apellido?: string\`), TypeScript lo trata como \`string | undefined\` dentro de la función, ya que puede no recibir un valor. Por eso siempre debes verificar si tiene valor antes de usarlo.',
      },
      {
        question: '¿Cuál de estas declaraciones de función es incorrecta en TypeScript?',
        options: [
          'function f(a: string, b?: number): void',
          'function f(a?: string, b?: number): void',
          'function f(a?: string, b: number): void',
          'function f(a: string, b?: string, c?: boolean): void',
        ],
        correctAnswer: 'function f(a?: string, b: number): void',
        correctFeedback:
          'Correcto. Los parámetros opcionales deben ir después de los requeridos. Aquí \`a\` es opcional pero \`b\` es requerido y viene después, lo cual es inválido.',
        incorrectFeedback:
          'No es correcto. El problema es \`function f(a?: string, b: number)\`: un parámetro requerido (\`b\`) no puede ir después de uno opcional (\`a\`). Los parámetros opcionales siempre van al final.',
      },
      {
        question: '¿Qué imprime este código?\n\nfunction saludar(nombre: string, titulo?: string): string {\n  return titulo ? \`${titulo} ${nombre}\` : nombre\n}\nconsole.log(saludar("García"))',
        options: [
          'undefined García',
          'García',
          'Error en tiempo de ejecución',
          ' García (con espacio al inicio)',
        ],
        correctAnswer: 'García',
        correctFeedback:
          'Correcto. Como \`titulo\` no se pasa, es \`undefined\`, que es falsy. Por eso el ternario devuelve solo \`nombre\`, que es "García".',
        incorrectFeedback:
          'No es correcto. Como \`titulo\` no se pasa, su valor es \`undefined\`. La expresión \`titulo ?\` evalúa a falso, así que retorna solo \`nombre\`, que es "García".',
      },
      {
        question: '¿Cuál es la diferencia entre \`param?: string\` y \`param: string = ""\`?',
        options: [
          'Son exactamente lo mismo',
          '\`param?: string\` puede ser undefined, mientras \`param = ""\` siempre tiene un valor',
          '\`param?: string\` acepta null, mientras \`param = ""\` no',
          '\`param = ""\` es opcional, \`param?: string\` es requerido',
        ],
        correctAnswer: '\`param?: string\` puede ser undefined, mientras \`param = ""\` siempre tiene un valor',
        correctFeedback:
          'Correcto. Con \`?\`, si no se pasa el parámetro su valor es \`undefined\`. Con un valor por defecto, si no se pasa, toma el valor especificado (en este caso \`""\`).',
        incorrectFeedback:
          'No es correcto. La diferencia clave es: \`param?: string\` significa que el parámetro puede no pasarse y su valor será \`undefined\`. \`param: string = ""\` significa que si no se pasa, toma el valor \`""\` en vez de \`undefined\`.',
      },
    ],
  },

  // ── Lección 43 ───────────────────────────────────────────────────────────
  {
    slug: 'parametros-por-defecto-typescript',
    title: 'Parámetros por defecto',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 5,
    description:
      'Aprende a usar valores por defecto en funciones tipadas.',
    explanation: `Los **parámetros por defecto** en TypeScript funcionan igual que en JavaScript: si no se pasa el argumento, el parámetro toma automáticamente el valor que hayas definido.

**Sintaxis**

\`\`\`ts
function saludar(nombre: string, saludo: string = "Hola"): string {
  return \`\${saludo}, \${nombre}!\`
}
\`\`\`

**¿Qué hace TypeScript aquí que JavaScript no hace?**

TypeScript infiere automáticamente el tipo del parámetro a partir del valor por defecto. En el ejemplo anterior, TypeScript sabe que \`saludo\` es \`string\` porque su valor por defecto es un string. No necesitas escribir el tipo explícitamente:

\`\`\`ts
function saludar(nombre: string, saludo = "Hola"): string {
  // TypeScript infiere que saludo es string
  return \`\${saludo}, \${nombre}!\`
}
\`\`\`

Sin embargo, si el tipo por defecto no es suficientemente claro, es buena práctica anotarlo:

\`\`\`ts
function calcularPrecio(base: number, descuento: number = 0): number {
  return base - (base * descuento / 100)
}
\`\`\`

**Diferencia clave entre opcionales y por defecto**

| Característica | Parámetro opcional (\`?\`) | Parámetro por defecto |
|---|---|---|
| Si no se pasa | Valor: \`undefined\` | Valor: el valor por defecto |
| Tipo dentro | \`tipo \| undefined\` | solo el \`tipo\` declarado |
| Necesita verificación | Sí | No (siempre tiene un valor) |

\`\`\`ts
// Opcional: necesitas verificar
function a(x?: number): void {
  if (x !== undefined) console.log(x * 2)
}

// Por defecto: no necesitas verificar
function b(x: number = 0): void {
  console.log(x * 2)  // seguro, x siempre es number
}
\`\`\`

**Los parámetros por defecto también pueden ir en cualquier posición**

A diferencia de los opcionales, los parámetros por defecto pueden ir antes de los requeridos (aunque esto es inusual y no recomendado):

\`\`\`ts
function crear(activo: boolean = true, nombre: string): void {
  // posible pero confuso de llamar
}
// crear(undefined, "Ana")  // necesitas pasar undefined explícitamente
\`\`\`

Por claridad, colócalos al final cuando sea posible.`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Parámetro con valor por defecto
function saludar(nombre: string, saludo: string = "Hola"): string {
  return \`\${saludo}, \${nombre}!\`
}

console.log(saludar("Ana"))              // → Hola, Ana!
console.log(saludar("Ana", "Buenas"))    // → Buenas, Ana!

// TypeScript infiere el tipo del valor por defecto
function calcularDescuento(precio: number, descuento = 10): number {
  // TypeScript infiere descuento: number (por el valor 10)
  return precio - (precio * descuento / 100)
}

console.log(calcularDescuento(100))      // → 90 (descuento del 10%)
console.log(calcularDescuento(100, 20))  // → 80 (descuento del 20%)

// Múltiples parámetros por defecto
function crearUsuario(
  nombre: string,
  rol: string = "estudiante",
  activo: boolean = true
): string {
  return \`[\${activo ? "✓" : "✗"}] \${nombre} — \${rol}\`
}

console.log(crearUsuario("Ana"))                    // → [✓] Ana — estudiante
console.log(crearUsuario("Carlos", "instructor"))   // → [✓] Carlos — instructor
console.log(crearUsuario("Sofía", "admin", false))  // → [✗] Sofía — admin

// Por defecto vs opcional: diferencia práctica
function formatearNota(nota: number, decimales: number = 2): string {
  return nota.toFixed(decimales)  // seguro: decimales siempre es number
}

function formatearNotaOpcional(nota: number, decimales?: number): string {
  // decimales podría ser undefined, necesitamos verificar
  return nota.toFixed(decimales ?? 2)
}

console.log(formatearNota(8.567))    // → 8.57
console.log(formatearNota(8.567, 1)) // → 8.6

// Parámetro por defecto con objeto
function configurarCurso(
  titulo: string,
  opciones: { gratis: boolean; duracion: number } = { gratis: true, duracion: 60 }
): void {
  console.log(\`\${titulo}: \${opciones.gratis ? "Gratis" : "De pago"}, \${opciones.duracion} min\`)
}

configurarCurso("TypeScript")
// → TypeScript: Gratis, 60 min
configurarCurso("React", { gratis: false, duracion: 120 })
// → React: De pago, 120 min`,
    keyPoints: [
      'Los parámetros por defecto usan la sintaxis `param: tipo = valor` o `param = valor`.',
      'TypeScript infiere el tipo del parámetro a partir del valor por defecto.',
      'A diferencia de los opcionales, un parámetro por defecto nunca es `undefined` dentro de la función.',
      'No necesitas verificar si un parámetro por defecto tiene valor — siempre lo tiene.',
      'Los parámetros por defecto también son opcionales al llamar la función.',
      'Para mayor claridad, coloca los parámetros con valor por defecto al final.',
    ],
    exercise: {
      description:
        'Escribe una función `generarFactura` que reciba `producto` (string), `precio` (number), `cantidad` (number con defecto 1) e `impuesto` (number con defecto 16). La función debe retornar un string con el formato: "Factura: [cantidad]x [producto] = $[total con impuesto]". Pruébala pasando solo producto y precio, luego con cantidad, luego con los cuatro valores.',
      hint: 'El total con impuesto es: `precio * cantidad * (1 + impuesto/100)\`. Usa \`toFixed(2)\` para redondear el resultado.',
    },
    quiz: [
      {
        question: '¿Qué tipo infiere TypeScript para \`nivel\` en esta función?\n\nfunction avanzar(pasos: number, nivel = 1) { }',
        options: [
          'any',
          'undefined',
          'number',
          'number | undefined',
        ],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. TypeScript infiere el tipo de \`nivel\` como \`number\` porque su valor por defecto es \`1\`, que es un número.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere el tipo del parámetro a partir del valor por defecto. Como el valor por defecto es \`1\` (un número), TypeScript infiere que \`nivel\` es de tipo \`number\`, no \`any\` ni \`number | undefined\`.',
      },
      {
        question: '¿Cuál es la diferencia principal entre \`desc?: string\` y \`desc: string = ""\`?',
        options: [
          'No hay diferencia, ambos son opcionales',
          'Con \`?\`, si no se pasa el valor es \`undefined\`. Con \`= ""\`, el valor es \`""\`',
          'Con \`?\` TypeScript no verifica el tipo, con \`= ""\` sí',
          'Solo \`desc = ""\` funciona en TypeScript moderno',
        ],
        correctAnswer: 'Con \`?\`, si no se pasa el valor es \`undefined\`. Con \`= ""\`, el valor es \`""\`',
        correctFeedback:
          'Correcto. La diferencia práctica es el valor cuando no se pasa el argumento: \`undefined\` con \`?\` y el valor por defecto con \`= valor\`.',
        incorrectFeedback:
          'No es correcto. La diferencia principal es el valor del parámetro cuando no se pasa: con \`?\` es \`undefined\` y debes verificarlo antes de usarlo; con \`= ""\` siempre tiene el valor \`""\` y puedes usarlo sin verificación.',
      },
      {
        question: '¿Qué imprime este código?\n\nfunction saludar(nombre: string, veces: number = 3): void {\n  for (let i = 0; i < veces; i++) console.log("Hola", nombre)\n}\nsaludar("Ana", 1)',
        options: [
          'Hola Ana (3 veces)',
          'Hola Ana (1 vez)',
          'Error: el parámetro por defecto no puede sobreescribirse',
          'Hola Ana undefined',
        ],
        correctAnswer: 'Hola Ana (1 vez)',
        correctFeedback:
          'Correcto. Cuando se pasa un valor explícito (1), ese valor sobreescribe el valor por defecto (3). El loop se ejecuta una vez.',
        incorrectFeedback:
          'No es correcto. Cuando se pasa un valor explícito al llamar la función, ese valor sobreescribe el valor por defecto. Aquí se pasa \`1\`, así que el loop se ejecuta solo una vez, imprimiendo "Hola Ana" una sola vez.',
      },
      {
        question: '¿Es válida esta declaración de función en TypeScript?\n\nfunction f(a = "hola", b: number): string { return a + b }',
        options: [
          'Sí, siempre es válida',
          'No, los parámetros por defecto solo pueden ir al final',
          'Sí, pero debes pasar \`undefined\` explícitamente para \`a\` si quieres el valor por defecto',
          'No, \`a\` y \`b\` deben tener el mismo tipo',
        ],
        correctAnswer: 'Sí, pero debes pasar \`undefined\` explícitamente para \`a\` si quieres el valor por defecto',
        correctFeedback:
          'Correcto. TypeScript permite parámetros por defecto antes de requeridos, pero es incómodo de usar: debes llamarla como \`f(undefined, 5)\` para que \`a\` use su valor por defecto.',
        incorrectFeedback:
          'No es correcto. A diferencia de los parámetros opcionales, los parámetros por defecto sí pueden ir antes de los requeridos en TypeScript. Sin embargo, para usar el valor por defecto debes pasar \`undefined\` explícitamente: \`f(undefined, 5)\`.',
      },
      {
        question: '¿Por qué no necesitas verificar si un parámetro por defecto es \`undefined\` dentro de la función?',
        options: [
          'Porque TypeScript lo inicializa automáticamente a 0 o ""',
          'Porque siempre tendrá el valor que pasaste o el valor por defecto, nunca será undefined',
          'Porque TypeScript ignora los parámetros sin valor',
          'Porque los parámetros por defecto son siempre opcionales en JavaScript',
        ],
        correctAnswer: 'Porque siempre tendrá el valor que pasaste o el valor por defecto, nunca será undefined',
        correctFeedback:
          'Correcto. El parámetro siempre tiene un valor: o el que pasaste, o el valor por defecto. Por eso su tipo nunca incluye \`undefined\`.',
        incorrectFeedback:
          'No es correcto. La razón es que el parámetro siempre tendrá un valor: o el que el llamador pasó, o el valor por defecto que definiste. Su tipo es el tipo declarado, sin \`undefined\`, así que no necesitas verificarlo.',
      },
    ],
  },

  // ── Lección 44 ───────────────────────────────────────────────────────────
  {
    slug: 'funciones-flecha-tipadas',
    title: 'Funciones flecha tipadas',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 6,
    description:
      'Aprende a escribir arrow functions con parámetros y retornos tipados.',
    explanation: `Las **funciones flecha** (arrow functions) son una forma concisa de escribir funciones en JavaScript. En TypeScript, también puedes tipar sus parámetros y retornos.

**Sintaxis básica**

\`\`\`ts
const nombreFuncion = (param: tipo): tipoRetorno => {
  return valor
}
\`\`\`

**Comparación: función tradicional vs. flecha**

\`\`\`ts
// Función tradicional
function sumar(a: number, b: number): number {
  return a + b
}

// Arrow function equivalente
const sumar = (a: number, b: number): number => {
  return a + b
}

// Arrow function con retorno implícito (una sola expresión)
const sumar = (a: number, b: number): number => a + b
\`\`\`

**Retorno implícito con arrow functions**

Cuando la función solo tiene una expresión que retornar, puedes omitir las llaves y el \`return\`:

\`\`\`ts
const doblar = (n: number): number => n * 2
const mayusculas = (s: string): string => s.toUpperCase()
const esPar = (n: number): boolean => n % 2 === 0
\`\`\`

**Arrow functions en callbacks**

Las arrow functions son muy comunes en callbacks de métodos como \`map\`, \`filter\` y \`forEach\`. TypeScript infiere los tipos en estos contextos:

\`\`\`ts
const notas: number[] = [8, 6, 9, 4, 7]

// TypeScript sabe que n es number dentro del callback
const aprobadas = notas.filter((n) => n >= 6)
const dobles = notas.map((n) => n * 2)
\`\`\`

**Arrow functions almacenadas en variables con tipo explícito**

A veces quieres declarar el tipo completo de la variable que guarda la función:

\`\`\`ts
// Tipo explícito para la variable
const calcular: (a: number, b: number) => number = (a, b) => a + b
\`\`\`

Esta sintaxis declara el tipo de la función completa (parámetros y retorno) en la izquierda, y la implementación en la derecha.

**Una nota sobre void en arrow functions**

\`\`\`ts
const imprimir = (mensaje: string): void => {
  console.log(mensaje)
}
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Arrow function tipada básica
const saludar = (nombre: string): string => {
  return \`Hola, \${nombre}!\`
}

console.log(saludar("Ana"))  // → Hola, Ana!

// Arrow function con retorno implícito (sin llaves)
const doblar = (n: number): number => n * 2
const esPar = (n: number): boolean => n % 2 === 0
const mayusculas = (s: string): string => s.toUpperCase()

console.log(doblar(5))        // → 10
console.log(esPar(4))         // → true
console.log(mayusculas("ts")) // → TS

// Arrow function void
const mostrarProducto = (nombre: string, precio: number): void => {
  console.log(\`\${nombre}: $\${precio}\`)
}

mostrarProducto("Teclado", 350)  // → Teclado: $350

// Arrow functions en callbacks con inferencia de tipos
const notas: number[] = [8.5, 6.0, 4.5, 9.0, 7.5]

const aprobadas = notas.filter((n) => n >= 6)
// TypeScript infiere n: number, retorno: number[]
console.log("Aprobadas:", aprobadas)  // → [8.5, 6.0, 9.0, 7.5]

const mensajes = notas.map((n) => \`Nota: \${n.toFixed(1)}\`)
// TypeScript infiere n: number, retorno: string[]
console.log(mensajes)

// Arrow function con parámetro opcional
const crearEtiqueta = (texto: string, tag?: string): string => {
  const etiqueta = tag ?? "span"
  return \`<\${etiqueta}>\${texto}</\${etiqueta}>\`
}

console.log(crearEtiqueta("Hola"))         // → <span>Hola</span>
console.log(crearEtiqueta("Hola", "div")) // → <div>Hola</div>

// Tipo explícito para la variable que contiene la función
const calcularPromedio: (numeros: number[]) => number = (numeros) => {
  return numeros.reduce((sum, n) => sum + n, 0) / numeros.length
}

console.log(calcularPromedio([8, 7, 9, 6]))  // → 7.5`,
    keyPoints: [
      'Las arrow functions en TypeScript se tipan igual que las funciones tradicionales: `(param: tipo): retorno => expr\`.',
      'Si la función tiene una sola expresión de retorno, puedes omitir las llaves y el \`return\`.',
      'TypeScript infiere los tipos en callbacks de \`map\`, \`filter\`, etc., según el tipo del array.',
      'Puedes anotar el tipo completo de la función en la variable: \`const f: (a: number) => number = (a) => a * 2\`.',
      'Las arrow functions son la forma preferida para callbacks y funciones simples.',
      'void funciona igual en arrow functions que en funciones tradicionales.',
    ],
    exercise: {
      description:
        'Usa arrow functions tipadas para crear tres helpers: \`calcularArea\` que reciba \`base\` y \`altura\` (numbers) y retorne su producto, \`esMayorDeEdad\` que reciba \`edad\` (number) y retorne boolean, y \`formatearPrecio\` que reciba \`precio\` (number) y retorne un string con formato "$X.XX". Luego aplica estas funciones sobre un array de datos usando \`map\` o \`filter\`.',
      hint: 'Para el formato del precio usa \`precio.toFixed(2)\`. Para \`esMayorDeEdad\` compara \`edad >= 18\`. Recuerda la sintaxis: \`const fn = (param: tipo): retorno => expresión\`.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta de una arrow function tipada que recibe un número y devuelve un string?',
        options: [
          'const f = (n: number): string { return String(n) }',
          'const f: (n: number) => string = n => String(n)',
          'const f = function(n: number): string => String(n)',
          'const f = (n: number) string => String(n)',
        ],
        correctAnswer: 'const f: (n: number) => string = n => String(n)',
        correctFeedback:
          'Correcto. Esta es la forma con el tipo explícito en la variable. También es válido \`const f = (n: number): string => String(n)\` con el tipo en los paréntesis.',
        incorrectFeedback:
          'No es correcto. La sintaxis de una arrow function tipada es \`(param: tipo): retorno => expresion\`. Si quieres anotar el tipo en la variable: \`const f: (n: number) => string = n => String(n)\`. No se usan llaves sin \`return\` ni \`function\` con \`=>\`.',
      },
      {
        question: '¿Qué tipo infiere TypeScript para \`n\` en este código?\n\nconst nums: number[] = [1, 2, 3]\nconst dobles = nums.map((n) => n * 2)',
        options: [
          'any',
          'unknown',
          'number',
          'number | string',
        ],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. TypeScript infiere que \`n\` es \`number\` porque \`nums\` es \`number[]\`, y \`map\` pasa cada elemento al callback.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere el tipo del parámetro en callbacks de \`map\`, \`filter\`, etc., a partir del tipo del array. Como \`nums\` es \`number[]\`, TypeScript sabe que cada elemento (y por tanto \`n\`) es \`number\`.',
      },
      {
        question: '¿Cuál de estas arrow functions usa correctamente el retorno implícito?',
        options: [
          'const f = (n: number): number => { n * 2 }',
          'const f = (n: number): number => return n * 2',
          'const f = (n: number): number => n * 2',
          'const f = (n: number): number = n * 2',
        ],
        correctAnswer: 'const f = (n: number): number => n * 2',
        correctFeedback:
          'Correcto. El retorno implícito omite las llaves y el \`return\`. La expresión después de \`=>\` se retorna directamente.',
        incorrectFeedback:
          'No es correcto. El retorno implícito funciona así: \`(params): tipo => expresión\`. No se usan llaves ni \`return\`. Si usas llaves, necesitas \`return\` explícito. La opción \`{ n * 2 }\` no retorna nada (es \`void\`), y \`return\` no va después de \`=>\`.',
      },
      {
        question: '¿Qué problema tiene este código?\n\nconst imprimir = (msg: string): void => {\n  return msg.toUpperCase()\n}',
        options: [
          'El parámetro \`msg\` no puede ser string en una arrow function',
          'Las arrow functions no pueden retornar void',
          'Una función void no puede retornar un valor concreto',
          'Ningún problema, este código es válido',
        ],
        correctAnswer: 'Una función void no puede retornar un valor concreto',
        correctFeedback:
          'Correcto. El tipo de retorno es \`void\`, pero la función intenta retornar \`msg.toUpperCase()\` que es un string. TypeScript reporta un error.',
        incorrectFeedback:
          'No es correcto. El problema es que la función declara \`void\` como tipo de retorno, pero intenta retornar un valor concreto (\`msg.toUpperCase()\`). Las funciones \`void\` no pueden retornar valores.',
      },
      {
        question: '¿Cuál es una ventaja de usar arrow functions en callbacks como \`filter\` y \`map\`?',
        options: [
          'Son más rápidas que las funciones tradicionales en ejecución',
          'TypeScript infiere los tipos automáticamente, reduciendo código repetitivo',
          'Permiten usar tipos que las funciones tradicionales no soportan',
          'Solo las arrow functions pueden usarse como callbacks',
        ],
        correctAnswer: 'TypeScript infiere los tipos automáticamente, reduciendo código repetitivo',
        correctFeedback:
          'Correcto. En callbacks de métodos de array, TypeScript infiere el tipo del parámetro según el tipo del array, así no necesitas anotarlo explícitamente.',
        incorrectFeedback:
          'No es correcto. Una ventaja importante en TypeScript es que dentro de callbacks como \`map\` y \`filter\`, TypeScript infiere los tipos automáticamente desde el tipo del array. Esto reduce el código de anotación necesario. Las funciones tradicionales también pueden usarse como callbacks.',
      },
    ],
  },

  // ── Lección 45 ───────────────────────────────────────────────────────────
  {
    slug: 'funciones-como-parametros-typescript',
    title: 'Funciones como parámetros',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 7,
    description:
      'Aprende a tipar funciones que reciben otras funciones como argumentos.',
    explanation: `En TypeScript puedes pasar funciones como argumentos a otras funciones. Esto es muy común en programación funcional y en el uso de callbacks. Para hacerlo correctamente, necesitas tipar el parámetro que recibirá la función.

**Sintaxis para tipar una función como parámetro**

\`\`\`ts
function ejecutar(callback: () => void): void {
  callback()
}
\`\`\`

Aquí \`callback\` es un parámetro de tipo función que no recibe nada y no devuelve nada.

**Funciones con parámetros y retorno**

\`\`\`ts
// Una función que recibe un número y devuelve un string
function aplicar(n: number, transformar: (x: number) => string): string {
  return transformar(n)
}

aplicar(42, (x) => \`El número es \${x}\`)
// → "El número es 42"
\`\`\`

**La sintaxis del tipo de función**

El tipo de una función se escribe como:

\`\`\`ts
(param1: tipo1, param2: tipo2) => tipoRetorno
\`\`\`

Ejemplos:
- \`() => void\` — función sin parámetros ni retorno
- \`(n: number) => number\` — recibe un número, devuelve un número
- \`(s: string) => boolean\` — recibe string, devuelve boolean
- \`(a: number, b: number) => number\` — dos números, devuelve número

**Ejemplo práctico: callbacks de eventos**

\`\`\`ts
function procesarLista(
  items: string[],
  callback: (item: string, index: number) => void
): void {
  items.forEach((item, i) => callback(item, i))
}

procesarLista(["Ana", "Carlos"], (nombre, i) => {
  console.log(\`\${i + 1}. \${nombre}\`)
})
\`\`\`

**¿Por qué tipar funciones como parámetros?**

Sin tipos, cualquier función podría pasarse como callback, incluso una que no tiene el formato correcto. TypeScript verifica que la función pasada tenga la firma correcta (parámetros y retorno compatibles).`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Función que recibe una función sin parámetros
function ejecutarTarea(tarea: () => void): void {
  console.log("Iniciando tarea...")
  tarea()
  console.log("Tarea completada.")
}

ejecutarTarea(() => console.log("Guardando datos..."))
// → Iniciando tarea...
// → Guardando datos...
// → Tarea completada.

// Función que recibe una función con parámetros y retorno
function transformarNumero(n: number, fn: (x: number) => number): number {
  return fn(n)
}

const doble = transformarNumero(5, (x) => x * 2)   // → 10
const triple = transformarNumero(5, (x) => x * 3)  // → 15
console.log(doble, triple)

// Función de orden superior: filtrar con criterio personalizable
function filtrarEstudiantes(
  nombres: string[],
  criterio: (nombre: string) => boolean
): string[] {
  return nombres.filter(criterio)
}

const estudiantes = ["Ana", "Alejandro", "Carlos", "Alberto", "Sofía"]

const conA = filtrarEstudiantes(estudiantes, (n) => n.startsWith("A"))
console.log("Con A:", conA)  // → ["Ana", "Alejandro", "Alberto"]

const largos = filtrarEstudiantes(estudiantes, (n) => n.length > 5)
console.log("Nombre largo:", largos)  // → ["Alejandro", "Carlos", "Alberto"]

// Función que recibe callback con múltiples parámetros
function procesarNotas(
  notas: number[],
  onAprobado: (nota: number, posicion: number) => void,
  onReprobado: (nota: number, posicion: number) => void
): void {
  notas.forEach((nota, i) => {
    if (nota >= 6) onAprobado(nota, i)
    else onReprobado(nota, i)
  })
}

procesarNotas(
  [8, 4, 7, 3, 9],
  (nota, i) => console.log(\`✓ Posición \${i}: \${nota}\`),
  (nota, i) => console.log(\`✗ Posición \${i}: \${nota}\`)
)
// → ✓ Posición 0: 8
// → ✗ Posición 1: 4
// → ✓ Posición 2: 7
// → ✗ Posición 3: 3
// → ✓ Posición 4: 9`,
    keyPoints: [
      'El tipo de una función como parámetro es: `(param: tipo) => tipoRetorno\`.',
      'Puedes tipar callbacks con cero, uno o múltiples parámetros.',
      'TypeScript verifica que la función pasada sea compatible con el tipo esperado.',
      'En callbacks inline (arrow functions), TypeScript infiere los tipos del parámetro automáticamente.',
      'Esta técnica es la base de la programación funcional: funciones como ciudadanos de primera clase.',
      'Los métodos de array como \`map\`, \`filter\` y \`forEach\` son ejemplos de funciones que reciben funciones.',
    ],
    exercise: {
      description:
        'Crea una función \`aplicarATodos\` que reciba un array de números (\`numeros: number[]\`) y una función de transformación (\`transformar: (n: number) => number\`), y devuelva un nuevo array con cada número transformado. Pruébala tres veces: una para doblar cada número, otra para elevar al cuadrado y otra para restar 1.',
      hint: 'El retorno de \`aplicarATodos\` es \`number[]\`. Puedes usar \`.map()\` internamente. Llámala así: \`aplicarATodos([1,2,3], (n) => n * 2)\`.',
    },
    quiz: [
      {
        question: '¿Cómo se escribe el tipo de un parámetro que es una función que recibe un string y devuelve un boolean?',
        options: [
          'function(s: string): boolean',
          '(s: string) => boolean',
          'callback<string, boolean>',
          'Function<string, boolean>',
        ],
        correctAnswer: '(s: string) => boolean',
        correctFeedback:
          'Correcto. La sintaxis del tipo de función es \`(params) => retorno\`. En este caso \`(s: string) => boolean\`.',
        incorrectFeedback:
          'No es correcto. El tipo de una función en TypeScript se escribe como \`(param: tipo) => tipoRetorno\`. Para una función que recibe string y devuelve boolean: \`(s: string) => boolean\`.',
      },
      {
        question: '¿Qué tipo debe tener el parámetro \`accion\` si la función no recibe parámetros y no devuelve nada?',
        options: [
          '() => undefined',
          '() => void',
          'void',
          'Function',
        ],
        correctAnswer: '() => void',
        correctFeedback:
          'Correcto. \`() => void\` significa una función sin parámetros que no devuelve un valor útil.',
        incorrectFeedback:
          'No es correcto. Para una función sin parámetros y sin retorno, el tipo es \`() => void\`. Solo escribir \`void\` es el tipo de retorno, no el tipo de la función. \`Function\` existe pero no es seguro porque no especifica parámetros ni retorno.',
      },
      {
        question: '¿Cuál sería el error en este código?\n\nfunction ejecutar(fn: (n: number) => number): void {\n  fn("hola")\n}',
        options: [
          'Ningún error, cualquier función puede recibir strings',
          'Error: se pasa "hola" (string) pero fn espera un número',
          'Error: fn no puede llamarse dentro de otra función',
          'Error: el retorno debería ser string',
        ],
        correctAnswer: 'Error: se pasa "hola" (string) pero fn espera un número',
        correctFeedback:
          'Correcto. El tipo de \`fn\` es \`(n: number) => number\`, por lo que llamarla con un string causa un error de tipo.',
        incorrectFeedback:
          'No es correcto. El tipo de \`fn\` especifica que recibe un \`number\`. Al llamar \`fn("hola")\`, se pasa un string, lo que viola el tipo declarado. TypeScript reportará un error de asignación de tipos.',
      },
      {
        question: '¿Qué ventaja tiene tipar una función como parámetro en lugar de usar el tipo \`Function\`?',
        options: [
          'Ninguna, \`Function\` es más seguro',
          '\`Function\` es más rápido en ejecución',
          'Tipar correctamente permite a TypeScript verificar parámetros y retorno del callback',
          'Solo las funciones tipadas pueden pasarse como argumentos',
        ],
        correctAnswer: 'Tipar correctamente permite a TypeScript verificar parámetros y retorno del callback',
        correctFeedback:
          'Correcto. Con \`Function\` TypeScript no sabe qué parámetros espera ni qué devuelve. Con el tipo exacto \`(n: number) => string\`, TypeScript puede verificar que la función pasada sea compatible.',
        incorrectFeedback:
          'No es correcto. Usar \`Function\` como tipo desactiva la verificación de la firma del callback. Al usar el tipo exacto \`(param: tipo) => retorno\`, TypeScript puede verificar que la función pasada tenga los parámetros y retorno correctos.',
      },
      {
        question: '¿Qué infiere TypeScript para \`nombre\` en este callback?\n\nconst lista: string[] = ["Ana", "Carlos"]\nlista.forEach((nombre) => console.log(nombre))',
        options: [
          'any',
          'unknown',
          'string',
          'string | undefined',
        ],
        correctAnswer: 'string',
        correctFeedback:
          'Correcto. TypeScript infiere que \`nombre\` es \`string\` porque \`lista\` es \`string[]\` y \`forEach\` pasa cada elemento al callback.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere el tipo del parámetro del callback a partir del tipo del array. Como \`lista\` es \`string[]\`, TypeScript sabe que cada elemento es \`string\`, así que \`nombre\` tiene tipo \`string\`.',
      },
    ],
  },

  // ── Lección 46 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-tipar-funciones',
    title: 'Errores comunes al tipar funciones',
    module: 'Funciones en TypeScript',
    moduleNumber: 6,
    order: 8,
    description:
      'Aprende a evitar errores como olvidar tipos de parámetros, confundir void con return o permitir any accidentalmente.',
    explanation: `Cuando empiezas a tipar funciones en TypeScript, es fácil cometer ciertos errores. Conocerlos de antemano te ahorrará mucho tiempo de depuración.

**Error 1: Olvidar tipar los parámetros**

\`\`\`ts
// ❌ Error silencioso: nombre es implícitamente any
function saludar(nombre) {
  return "Hola, " + nombre
}

// ✓ Correcto
function saludar(nombre: string): string {
  return "Hola, " + nombre
}
\`\`\`

**Error 2: Confundir void con undefined**

\`\`\`ts
// ❌ Confusión: undefined como tipo de retorno
function imprimir(msg: string): undefined {
  console.log(msg)
  // Debe retornar undefined explícitamente o TypeScript protesta
}

// ✓ Correcto: usa void
function imprimir(msg: string): void {
  console.log(msg)
}
\`\`\`

**Error 3: Retornar tipos incompatibles**

\`\`\`ts
// ❌ Retorna string pero declara number
function obtenerEdad(): number {
  return "veinte"  // Error
}

// ✓ Correcto
function obtenerEdad(): number {
  return 20
}
\`\`\`

**Error 4: Olvidar que los parámetros opcionales pueden ser undefined**

\`\`\`ts
// ❌ Error: titulo puede ser undefined
function mostrar(titulo?: string): void {
  console.log(titulo.toUpperCase())  // Error: titulo puede ser undefined
}

// ✓ Correcto: verificar antes de usar
function mostrar(titulo?: string): void {
  if (titulo) {
    console.log(titulo.toUpperCase())
  }
}
\`\`\`

**Error 5: Usar any como atajo**

\`\`\`ts
// ❌ Escapar con any elimina la seguridad de TypeScript
function procesar(datos: any): any {
  return datos.nombre.toUpperCase()  // Sin protección
}

// ✓ Mejor: tipar correctamente
function procesar(datos: { nombre: string }): string {
  return datos.nombre.toUpperCase()
}
\`\`\`

**Error 6: Caminos sin retorno en funciones con tipo de retorno**

\`\`\`ts
// ❌ El else no retorna nada
function clasificar(nota: number): string {
  if (nota >= 6) {
    return "Aprobado"
  }
  // Error: no todos los caminos retornan string
}

// ✓ Correcto
function clasificar(nota: number): string {
  if (nota >= 6) return "Aprobado"
  return "Reprobado"
}
\`\`\``,
    codeExample: `// ── archivo: errores-funciones.ts ───────────────────────────────────────

// ── Error 1: parámetros sin tipo (any implícito) ─────────────────────────
// ❌
function calcularDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje / 100)
  // precio y porcentaje son any: no hay protección
}

// ✓
function calcularDescuento(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje / 100)
}

// ── Error 2: confundir void y undefined ──────────────────────────────────
// ❌ undefined como tipo de retorno requiere return undefined explícito
function registrar(evento: string): undefined {
  console.log(evento)
  // TypeScript se queja: debes retornar undefined
}

// ✓ void no requiere ningún return
function registrar(evento: string): void {
  console.log(evento)
}

// ── Error 3: parámetro opcional sin verificación ─────────────────────────
// ❌ Peligroso: TypeScript lo detecta como error
function mostrarTitulo(titulo?: string): void {
  // console.log(titulo.length)  // Error: titulo puede ser undefined
}

// ✓ Verificar antes de usar
function mostrarTituloSeguro(titulo?: string): void {
  if (titulo !== undefined) {
    console.log(titulo.length)
  } else {
    console.log("Sin título")
  }
}

mostrarTituloSeguro("TypeScript")  // → 10
mostrarTituloSeguro()              // → Sin título

// ── Error 4: camino sin retorno ──────────────────────────────────────────
// ❌ TypeScript detecta el camino vacío
// function clasificar(nota: number): string {
//   if (nota >= 6) return "Aprobado"
//   // Error: no hay retorno para nota < 6
// }

// ✓ Todos los caminos retornan
function clasificar(nota: number): string {
  if (nota >= 9) return "Excelente"
  if (nota >= 7) return "Bien"
  if (nota >= 6) return "Suficiente"
  return "Reprobado"
}

console.log(clasificar(9.5))  // → Excelente
console.log(clasificar(7.2))  // → Bien
console.log(clasificar(4.0))  // → Reprobado

// ── Error 5: usar any como escape ────────────────────────────────────────
// ❌ Peligroso: sin seguridad de tipos
// function procesar(datos: any) { return datos.nombre }

// ✓ Tipar el objeto correctamente
function procesar(datos: { nombre: string; edad: number }): string {
  return \`\${datos.nombre}, \${datos.edad} años\`
}

console.log(procesar({ nombre: "Ana", edad: 25 }))  // → Ana, 25 años`,
    keyPoints: [
      'Siempre tipa los parámetros de tus funciones para evitar `any` implícito.',
      'Usa `void` para funciones sin retorno útil, no `undefined`.',
      'Verifica parámetros opcionales antes de usarlos — pueden ser `undefined`.',
      'Asegúrate de que todos los caminos posibles de una función retornen el tipo correcto.',
      'Evita usar `any` como atajo — destruye la protección que ofrece TypeScript.',
      'El tipo de retorno declarado es un contrato: TypeScript verifica que lo cumplas.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los 3 errores en este código:\n\n```ts\nfunction calcularTotal(precio, cantidad?: number): number {\n  return precio * cantidad.toFixed(2)\n}\n\nfunction mostrarMensaje(texto: string): number {\n  console.log(texto)\n}\n```\n\nPista: los errores son (1) parámetro sin tipo, (2) usar parámetro opcional sin verificar y (3) tipo de retorno incorrecto.',
      hint: 'Para el parámetro `precio`, agrega `: number`. Para `cantidad`, verifica `if (cantidad !== undefined)` o usa un valor por defecto. Para `mostrarMensaje`, el retorno debe ser `void` ya que solo imprime.',
    },
    quiz: [
      {
        question: '¿Qué problema silencioso ocurre cuando no tipas un parámetro en TypeScript?',
        options: [
          'La función no se puede llamar',
          'El parámetro se convierte en any, desactivando la verificación de tipos',
          'TypeScript asigna el tipo number por defecto',
          'La función lanza un error en tiempo de ejecución',
        ],
        correctAnswer: 'El parámetro se convierte en any, desactivando la verificación de tipos',
        correctFeedback:
          'Correcto. TypeScript asigna `any` implícitamente, lo que desactiva la protección de tipos para ese parámetro. El código compila pero no tienes seguridad de tipos.',
        incorrectFeedback:
          'No es correcto. Cuando no tipas un parámetro, TypeScript le asigna `any` implícitamente. Esto no causa un error inmediato, pero desactiva la verificación de tipos: puedes pasar cualquier valor y TypeScript no protestará.',
      },
      {
        question: '¿Qué pasa al ejecutar este código sin verificar el parámetro opcional?\n\nfunction mostrar(titulo?: string): void {\n  console.log(titulo.toUpperCase())\n}',
        options: [
          'TypeScript convierte undefined a string automáticamente',
          'TypeScript reporta un error: titulo puede ser undefined',
          'El código funciona porque title siempre es string',
          'La función simplemente no imprime nada',
        ],
        correctAnswer: 'TypeScript reporta un error: titulo puede ser undefined',
        correctFeedback:
          'Correcto. TypeScript sabe que `titulo` puede ser `string | undefined`, y `.toUpperCase()` no existe en `undefined`. TypeScript reporta este error antes de ejecutar.',
        incorrectFeedback:
          'No es correcto. Cuando `titulo` es `undefined`, llamar `.toUpperCase()` causaría un error en tiempo de ejecución. TypeScript detecta esto en tiempo de compilación y muestra un error, porque `titulo` puede ser `undefined` al ser un parámetro opcional.',
      },
      {
        question: '¿Cuál es la forma correcta de usar `void` en comparación con `undefined` como tipo de retorno?',
        options: [
          'Son exactamente iguales, cualquiera funciona',
          '`void` indica intencionalmente que no hay retorno útil; `undefined` requiere un `return undefined` explícito',
          '`undefined` es más moderno y reemplaza a `void`',
          '`void` solo se usa en funciones que reciben callbacks',
        ],
        correctAnswer: '`void` indica intencionalmente que no hay retorno útil; `undefined` requiere un `return undefined` explícito',
        correctFeedback:
          'Correcto. `void` es el tipo semántico correcto para funciones sin retorno útil. `undefined` como tipo de retorno obliga a retornar `undefined` explícitamente.',
        incorrectFeedback:
          'No es correcto. Aunque son similares, tienen una diferencia práctica: `void\` significa que la función no retorna un valor útil y no necesitas ningún \`return\`. Si usas \`undefined\` como tipo de retorno, TypeScript puede requerir que retornes \`undefined\` explícitamente.',
      },
      {
        question: '¿Por qué deberías evitar usar \`any\` como tipo en los parámetros?',
        options: [
          'Porque \`any\` no está disponible en TypeScript',
          'Porque hace que el código sea más lento',
          'Porque desactiva la verificación de tipos, eliminando la protección que ofrece TypeScript',
          'Porque \`any\` no es compatible con funciones',
        ],
        correctAnswer: 'Porque desactiva la verificación de tipos, eliminando la protección que ofrece TypeScript',
        correctFeedback:
          'Correcto. Usar \`any\` es como no usar TypeScript: pierdes toda la seguridad de tipos, las sugerencias del editor y la detección temprana de errores.',
        incorrectFeedback:
          'No es correcto. \`any\` sí existe y funciona en TypeScript, pero su uso excesivo elimina los beneficios de TypeScript. Con \`any\`, puedes hacer cualquier operación sin que TypeScript proteste, pero los errores solo aparecen en tiempo de ejecución.',
      },
      {
        question: '¿Qué error detecta TypeScript en este código?\n\nfunction obtenerEstado(activo: boolean): string {\n  if (activo) return "Activo"\n}',
        options: [
          'Error: el parámetro no está tipado',
          'Error: no todos los caminos de la función retornan un string',
          'Error: boolean no puede usarse en condiciones',
          'Ningún error, TypeScript retorna undefined automáticamente',
        ],
        correctAnswer: 'Error: no todos los caminos de la función retornan un string',
        correctFeedback:
          'Correcto. Si \`activo\` es \`false\`, la función no retorna nada (retorna \`undefined\`), pero el tipo declarado es \`string\`. TypeScript detecta este camino sin retorno.',
        incorrectFeedback:
          'No es correcto. Cuando el tipo de retorno declarado es \`string\`, TypeScript verifica que todos los caminos posibles retornen un string. En este caso, si \`activo\` es \`false\`, la función no retorna nada, lo que causa un error.',
      },
    ],
  },
]

export const tsModule6: Module = {
  number: 6,
  title: 'Funciones en TypeScript',
  level: 'nivel2',
  lessons: lessonsTsModule6,
}
