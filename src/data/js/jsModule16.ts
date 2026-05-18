import type { Lesson, Module } from '@/types'

export const lessonsJsModule16: Lesson[] = [
  {
    slug: 'scope-global-local',
    title: 'Scope global y local',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 116,
    description:
      'Aprende la diferencia entre variables globales y locales, y cómo el lugar donde declaras una variable afecta dónde puedes usarla.',
    explanation: `## Scope global y local

El **scope** (alcance) determina desde qué parte del código puedes acceder a una variable. Es una de las reglas más importantes de JavaScript.

### La analogía del edificio

Imagina que trabajas en un edificio de oficinas:
- Una **variable global** es como el cartel en la entrada — cualquiera en el edificio puede verlo.
- Una **variable local** es como una nota en tu escritorio — solo tú (esa función) puedes leerla.

### Scope global

Una variable declarada fuera de cualquier función tiene scope **global**: es accesible desde cualquier parte del programa.

\`\`\`js
// app.js
let appName = 'RonaldoScript' // variable global

function mostrarApp() {
  console.log(appName) // puede leerla
}

mostrarApp() // "RonaldoScript"
console.log(appName) // "RonaldoScript" — también accesible aquí
\`\`\`

### Scope local (de función)

Una variable declarada dentro de una función solo existe dentro de esa función:

\`\`\`js
function calcularTotal() {
  let subtotal = 100 // variable local
  let impuesto = 16
  return subtotal + impuesto
}

console.log(calcularTotal()) // 116
console.log(subtotal) // ❌ ReferenceError: subtotal is not defined
\`\`\`

La variable \`subtotal\` "muere" cuando la función termina. Fuera de la función, no existe.

### Variables locales en cada llamada

Cada vez que llamas a una función, se crean nuevas variables locales independientes:

\`\`\`js
function crearUsuario(nombre) {
  let mensaje = 'Bienvenido, ' + nombre
  return mensaje
}

let m1 = crearUsuario('Ana')  // mensaje = "Bienvenido, Ana"
let m2 = crearUsuario('Luis') // mensaje = "Bienvenido, Luis" (diferente)

console.log(m1) // "Bienvenido, Ana"
console.log(m2) // "Bienvenido, Luis"
\`\`\`

### ¿Por qué importa el scope?

- Evita conflictos de nombres entre funciones.
- Protege variables internas de ser modificadas accidentalmente.
- Hace el código más predecible y fácil de depurar.`,
    codeExample: `// app.js

// Variable global — accesible en todo el programa
let curso = 'JavaScript desde Cero'
let totalEstudiantes = 0

function registrarEstudiante(nombre) {
  // Variable local — solo existe dentro de esta función
  let mensaje = 'Estudiante registrado: ' + nombre

  // Puede leer y modificar variables globales
  totalEstudiantes++

  return mensaje
}

function mostrarResumen() {
  // También puede leer variables globales
  console.log('Curso:', curso)
  console.log('Total:', totalEstudiantes)

  // 'mensaje' no existe aquí — es local de registrarEstudiante
}

console.log(registrarEstudiante('Ana'))  // "Estudiante registrado: Ana"
console.log(registrarEstudiante('Luis')) // "Estudiante registrado: Luis"
mostrarResumen()
// Curso: JavaScript desde Cero
// Total: 2`,
    keyPoints: [
      'El scope determina desde dónde es accesible una variable.',
      'Las variables globales son accesibles en todo el programa.',
      'Las variables locales solo existen dentro de la función donde fueron declaradas.',
      'Cada llamada a una función crea su propio conjunto de variables locales.',
      'Las funciones pueden leer y modificar variables globales, pero no al revés.',
      'Limitar el scope de las variables hace el código más seguro y predecible.',
    ],
    exercise: {
      description:
        'Crea una función `calcularDescuento(precio, porcentaje)` que calcule el precio final con descuento. Usa variables locales para los cálculos internos. Luego crea una variable global `impuesto = 0.16` y crea una función `calcularPrecioFinal(precio)` que aplique ese impuesto al precio usando la variable global.',
      hint: 'El descuento se calcula como precio - (precio * porcentaje / 100). El precio final con impuesto es precio * (1 + impuesto). Las variables internas de cada función son locales; el impuesto es global porque se usa en varias funciones.',
    },
    quiz: [
      {
        question: '¿Qué es el scope en JavaScript?',
        options: [
          'El lugar donde se ejecuta el código',
          'La región del código donde una variable es accesible',
          'Un tipo especial de función',
          'El nombre de una variable',
        ],
        correctAnswer: 'La región del código donde una variable es accesible',
        correctFeedback: 'Exacto. El scope determina desde qué partes del código puedes acceder a una variable.',
        incorrectFeedback: 'El scope no es sobre ejecución ni tipos. Es sobre visibilidad: desde dónde puede verse (accederse) una variable.',
      },
      {
        question: '¿Qué imprime este código?\n\nfunction saludar() {\n  let nombre = "Ana"\n}\nsaludar()\nconsole.log(nombre)',
        options: [
          '"Ana"',
          'undefined',
          'ReferenceError: nombre is not defined',
          'null',
        ],
        correctAnswer: 'ReferenceError: nombre is not defined',
        correctFeedback: 'Correcto. La variable `nombre` es local a la función `saludar` y no existe fuera de ella.',
        incorrectFeedback: 'La variable `nombre` fue declarada dentro de la función con `let`, por lo que solo existe en ese scope local. Acceder a ella fuera produce un ReferenceError.',
      },
      {
        question: '¿Cuál de estas afirmaciones sobre variables globales es correcta?',
        options: [
          'Solo pueden ser leídas, no modificadas desde funciones',
          'Son accesibles desde cualquier parte del programa',
          'Solo existen mientras dura la ejecución de una función',
          'Deben declararse con la palabra clave global',
        ],
        correctAnswer: 'Son accesibles desde cualquier parte del programa',
        correctFeedback: 'Exacto. Las variables globales pueden ser leídas y modificadas desde cualquier función.',
        incorrectFeedback: 'Las variables globales pueden ser leídas Y modificadas desde funciones. No hay keyword `global` en JavaScript, y no desaparecen cuando termina una función.',
      },
      {
        question: '¿Por qué es recomendable evitar el uso excesivo de variables globales?',
        options: [
          'Porque ocupan más memoria que las locales',
          'Porque cualquier función puede modificarlas accidentalmente',
          'Porque son más lentas de leer',
          'Porque no funcionan en todos los navegadores',
        ],
        correctAnswer: 'Porque cualquier función puede modificarlas accidentalmente',
        correctFeedback: 'Correcto. Las variables globales son accesibles por todo el código, lo que aumenta el riesgo de modificaciones accidentales y hace el código más difícil de depurar.',
        incorrectFeedback: 'El problema con los globales no es rendimiento ni compatibilidad — es que cualquier parte del código puede leerlas y cambiarlas, lo que genera bugs difíciles de rastrear.',
      },
      {
        question: '¿Qué sucede con las variables locales cuando una función termina de ejecutarse?',
        options: [
          'Se vuelven globales automáticamente',
          'Se guardan para la próxima llamada',
          'Son eliminadas de la memoria',
          'Se convierten en undefined',
        ],
        correctAnswer: 'Son eliminadas de la memoria',
        correctFeedback: 'Correcto. Las variables locales se crean al inicio de la función y se eliminan cuando termina. (Hay una excepción: los closures, que veremos en lecciones siguientes.)',
        incorrectFeedback: 'Las variables locales no persisten. Cada llamada crea nuevas variables desde cero. La excepción son los closures, que aprenderemos pronto.',
      },
    ],
  },

  {
    slug: 'block-scope-let-const',
    title: 'Block scope con let y const',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 117,
    description:
      'Aprende cómo let y const respetan el alcance de bloque dentro de if, for y otros bloques de código.',
    explanation: `## Block scope con let y const

Además del scope de función, JavaScript tiene el **block scope** (alcance de bloque). Un bloque es cualquier par de llaves \`{}\`.

### ¿Qué es un bloque?

\`\`\`js
if (true) {
  // esto es un bloque
}

for (let i = 0; i < 3; i++) {
  // esto también es un bloque
}

{
  // incluso esto es un bloque
}
\`\`\`

### \`let\` y \`const\` respetan el bloque

Con \`let\` y \`const\`, las variables declaradas dentro de un bloque no existen fuera:

\`\`\`js
if (true) {
  let mensaje = 'Acceso permitido'
  console.log(mensaje) // "Acceso permitido"
}

console.log(mensaje) // ❌ ReferenceError: mensaje is not defined
\`\`\`

### El problema clásico de \`var\` en bucles

\`var\` ignora el bloque y "escapa" hacia la función (o global). Esto causó muchos bugs históricos:

\`\`\`js
for (var i = 0; i < 3; i++) {
  // usando var
}
console.log(i) // 3 — var "escapó" del bucle!

for (let j = 0; j < 3; j++) {
  // usando let
}
console.log(j) // ❌ ReferenceError — let sí respeta el bloque
\`\`\`

### Block scope en la práctica

\`\`\`js
function procesarPedido(usuario) {
  if (usuario.premium) {
    const descuento = 0.20  // solo existe aquí
    const total = usuario.total * (1 - descuento)
    return total
  }

  // 'descuento' y 'total' no existen aquí
  return usuario.total
}
\`\`\`

### \`var\` vs \`let\` vs \`const\`

| Característica    | \`var\` | \`let\` | \`const\` |
|-------------------|---------|---------|-----------|
| Scope de función  | ✅      | ✅      | ✅        |
| Block scope       | ❌      | ✅      | ✅        |
| Reasignable       | ✅      | ✅      | ❌        |
| Hoisting          | ✅      | Parcial | Parcial   |

### Regla práctica

Usa siempre \`const\` por defecto. Si necesitas reasignar, usa \`let\`. Evita \`var\` en código moderno.`,
    codeExample: `// script.js

// Block scope con if
function verificarEdad(edad) {
  if (edad >= 18) {
    const mensaje = '✅ Acceso permitido'
    const categoria = 'adulto'
    console.log(mensaje)
    return categoria
  } else {
    const mensaje = '❌ Acceso denegado'
    const categoria = 'menor'
    console.log(mensaje)
    return categoria
  }
  // 'mensaje' y 'categoria' no existen aquí fuera de los bloques if/else
}

// Block scope con for
function calcularTotales(precios) {
  let suma = 0

  for (let i = 0; i < precios.length; i++) {
    let precio = precios[i]     // local al bloque del for
    let iva = precio * 0.16     // local al bloque del for
    suma += precio + iva
  }

  // 'precio' e 'iva' no existen aquí
  return suma
}

console.log(verificarEdad(20))  // ✅ Acceso permitido → "adulto"
console.log(verificarEdad(15))  // ❌ Acceso denegado → "menor"
console.log(calcularTotales([100, 200, 300])) // 696`,
    keyPoints: [
      'Un bloque es cualquier código dentro de llaves {}.',
      'let y const tienen block scope: no existen fuera del bloque donde fueron declaradas.',
      'var ignora el block scope — solo respeta el scope de función.',
      'Usar let/const en bucles for evita el bug clásico de var que "escapa" del bucle.',
      'const no puede reasignarse; let sí. Ambas respetan el block scope.',
      'Preferir const > let > var es la práctica recomendada en JavaScript moderno.',
    ],
    exercise: {
      description:
        'Escribe una función `clasificarProducto(precio)` que use block scope correctamente: si el precio es mayor a 1000, declara una constante `categoria = "premium"` y un `descuento = 0.15` dentro del bloque if. Si no, declara `categoria = "estándar"` y `descuento = 0`. Retorna un objeto con la categoría y el precio final aplicando el descuento.',
      hint: 'Declara las variables con const dentro de cada bloque if/else. Para retornar después del if/else, puedes declarar una variable `let resultado` antes del if y asignarla dentro de cada rama.',
    },
    quiz: [
      {
        question: '¿Qué es el block scope?',
        options: [
          'El scope que solo aplica a funciones',
          'El alcance de una variable limitado al bloque {} donde fue declarada',
          'Un tipo especial de variable global',
          'El scope de los módulos de JavaScript',
        ],
        correctAnswer: 'El alcance de una variable limitado al bloque {} donde fue declarada',
        correctFeedback: 'Correcto. Las variables con let/const solo existen dentro del bloque {} en el que fueron declaradas.',
        incorrectFeedback: 'El block scope es específicamente el alcance delimitado por llaves {}. No aplica solo a funciones — cualquier bloque if, for, while, o {} vacío crea un nuevo bloque.',
      },
      {
        question: '¿Qué imprime este código?\n\nfor (var i = 0; i < 3; i++) {}\nconsole.log(i)',
        options: [
          'ReferenceError: i is not defined',
          '3',
          '0',
          'undefined',
        ],
        correctAnswer: '3',
        correctFeedback: 'Correcto. var no respeta el block scope, así que i "escapa" del bucle for con el valor 3 (cuando la condición i < 3 fue falsa).',
        incorrectFeedback: 'var ignora los bloques. La variable i definida con var en un for queda accesible fuera del bucle con el valor final que tenía cuando el bucle terminó, que es 3.',
      },
      {
        question: '¿Cuál es la regla práctica recomendada para elegir var, let o const?',
        options: [
          'Usar var siempre por compatibilidad',
          'Usar const por defecto, let cuando necesites reasignar, evitar var',
          'Usar let siempre para mayor claridad',
          'Mezclar var y let según el contexto',
        ],
        correctAnswer: 'Usar const por defecto, let cuando necesites reasignar, evitar var',
        correctFeedback: 'Exacto. const comunica que el valor no cambiará, lo cual es el caso más común. Si necesitas reasignar, usa let. var ya no se usa en código moderno.',
        incorrectFeedback: 'var tiene comportamientos impredecibles con el scope que generan bugs difíciles. La práctica moderna es: const por defecto, let cuando reasignas, var nunca.',
      },
      {
        question: '¿Qué sucede si intentas acceder a una variable let fuera de su bloque?',
        options: [
          'Devuelve undefined',
          'Devuelve null',
          'Lanza un ReferenceError',
          'Devuelve el valor que tenía antes del bloque',
        ],
        correctAnswer: 'Lanza un ReferenceError',
        correctFeedback: 'Correcto. let y const respetan el block scope estrictamente — acceder a ellas fuera de su bloque genera un ReferenceError.',
        incorrectFeedback: 'A diferencia de var, las variables declaradas con let y const fuera de su bloque no devuelven undefined — directamente no existen en ese contexto y JavaScript lanza un ReferenceError.',
      },
      {
        question: '¿Cuál de estas declaraciones tiene block scope?',
        options: [
          'var dentro de un if',
          'let dentro de un for',
          'var en el nivel global',
          'Una función declarada con function',
        ],
        correctAnswer: 'let dentro de un for',
        correctFeedback: 'Correcto. let (y const) respetan el block scope. Una variable let dentro de un bloque for solo existe dentro de ese bucle.',
        incorrectFeedback: 'var NO tiene block scope — escapa al scope de función más cercano (o global). Solo let y const crean variables con block scope.',
      },
    ],
  },

  {
    slug: 'hoisting-explicado-simple',
    title: 'Hoisting explicado simple',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 118,
    description:
      'Aprende qué es hoisting y por qué algunas declaraciones parecen estar disponibles antes de la línea donde fueron escritas.',
    explanation: `## Hoisting explicado simple

**Hoisting** es el comportamiento de JavaScript de "elevar" ciertas declaraciones al inicio del scope antes de ejecutar el código.

### La analogía del libro de asistencia

Imagina que el profesor, antes de empezar la clase, revisa la lista de estudiantes inscritos (aunque todavía no hayan llegado). Sabe que "Ana" existe en el sistema, pero aún no sabe qué calificación tiene.

Hoisting es similar: JavaScript "lee" todas las declaraciones primero, antes de ejecutar el código línea por línea.

### ¿Qué es hoisted?

| Declaración                      | ¿Se eleva? | ¿Con valor? |
|----------------------------------|------------|-------------|
| \`var\`                          | ✅         | Con \`undefined\` |
| \`let\` y \`const\`             | ✅ (parcial)| ❌ (temporal dead zone) |
| \`function declaration\`         | ✅         | Sí, completa |
| \`function expression\` (var/let)| Solo el nombre | ❌ |

### Ejemplo con \`var\`

\`\`\`js
console.log(nombre) // undefined — fue elevada, pero sin valor
var nombre = 'Ana'
console.log(nombre) // "Ana"
\`\`\`

Internamente, JavaScript lo transforma en:

\`\`\`js
var nombre            // declaración elevada
console.log(nombre)  // undefined
nombre = 'Ana'        // asignación en su lugar original
console.log(nombre)  // "Ana"
\`\`\`

### Ejemplo con \`function declaration\`

Las funciones declaradas con \`function\` se elevan completas:

\`\`\`js
// Funciona aunque la función esté declarada abajo
saludar('Ana')       // "Hola, Ana!"

function saludar(nombre) {
  console.log('Hola, ' + nombre + '!')
}
\`\`\`

### La Temporal Dead Zone (TDZ)

\`let\` y \`const\` también se elevan, pero no se pueden usar hasta llegar a su línea de declaración. Ese periodo se llama **Temporal Dead Zone**:

\`\`\`js
console.log(edad) // ❌ ReferenceError: Cannot access 'edad' before initialization
let edad = 25
\`\`\`

### ¿Por qué importa entender hoisting?

Para evitar bugs confusos: código que usa \`var\` antes de asignarlo devuelve \`undefined\` en lugar de un error, lo cual es difícil de depurar.`,
    codeExample: `// script.js

// --- Function declarations se elevan completas ---
// Esto funciona aunque la función esté más abajo
let resultado = sumar(3, 4)
console.log(resultado) // 7

function sumar(a, b) {
  return a + b
}

// --- var se eleva con valor undefined ---
console.log(status) // undefined (no error, pero tampoco el valor real)
var status = 'activo'
console.log(status) // "activo"

// --- let y const tienen Temporal Dead Zone ---
// console.log(precio) // ❌ ReferenceError si se descomenta
let precio = 100
console.log(precio) // 100

// --- Buena práctica: declarar siempre antes de usar ---
const MAX_INTENTOS = 3
let intentos = 0

function intentarConexion() {
  if (intentos < MAX_INTENTOS) {
    intentos++
    return 'Conectando... intento ' + intentos
  }
  return 'Máximo de intentos alcanzado'
}`,
    keyPoints: [
      'Hoisting es el proceso por el que JavaScript "eleva" declaraciones al inicio del scope.',
      'var se eleva con valor undefined — no lanza error si se usa antes de asignar.',
      'Las function declarations se elevan completamente y pueden usarse antes de su línea.',
      'let y const tienen Temporal Dead Zone — no se pueden usar antes de su línea de declaración.',
      'Entender hoisting ayuda a evitar bugs confusos con undefined.',
      'La buena práctica es siempre declarar variables antes de usarlas.',
    ],
    exercise: {
      description:
        'Analiza este código y predice qué imprime cada console.log, explicando por qué:\n\nconsole.log(x)\nvar x = 10\nconsole.log(x)\n\nconsole.log(doble(5))\nfunction doble(n) { return n * 2 }\n\n// console.log(y) — ¿qué pasaría si descomentas esto?\nlet y = 20',
      hint: 'Recuerda: var se eleva con undefined, function declarations se elevan completas, let tiene TDZ. Escribe tus predicciones y luego pruébalas en la consola del navegador.',
    },
    quiz: [
      {
        question: '¿Qué es el hoisting en JavaScript?',
        options: [
          'Un método para elevar el rendimiento del código',
          'El proceso por el que las declaraciones se mueven al inicio del scope antes de ejecutar',
          'La forma de elevar variables de local a global',
          'Un error que ocurre al usar variables no declaradas',
        ],
        correctAnswer: 'El proceso por el que las declaraciones se mueven al inicio del scope antes de ejecutar',
        correctFeedback: 'Exacto. JavaScript procesa las declaraciones antes de ejecutar el código, como si las "moviera" al inicio del scope.',
        incorrectFeedback: 'Hoisting no mejora el rendimiento ni cambia el scope de las variables. Es el comportamiento interno de JavaScript de procesar declaraciones antes de ejecutar código.',
      },
      {
        question: '¿Qué imprime este código?\n\nconsole.log(ciudad)\nvar ciudad = "Madrid"',
        options: [
          '"Madrid"',
          'ReferenceError',
          'undefined',
          'null',
        ],
        correctAnswer: 'undefined',
        correctFeedback: 'Correcto. var se eleva al inicio pero sin su valor — solo la declaración. Por eso la variable existe pero su valor es undefined.',
        incorrectFeedback: 'Con var, JavaScript "sabe" que la variable existe (por hoisting) pero no asigna el valor hasta esa línea. Así que no lanza error pero devuelve undefined.',
      },
      {
        question: '¿Cuál de estos puede ser llamado antes de su declaración sin errores?',
        options: [
          'Una variable declarada con let',
          'Una variable declarada con const',
          'Una function declaration',
          'Una function expression asignada a var',
        ],
        correctAnswer: 'Una function declaration',
        correctFeedback: 'Correcto. Las function declarations se elevan completamente — JavaScript las pone disponibles desde el inicio del scope.',
        incorrectFeedback: 'let y const tienen TDZ. function expressions solo elevan el nombre de la variable (con undefined o en TDZ). Solo las function declarations se elevan completamente.',
      },
      {
        question: '¿Qué es la Temporal Dead Zone (TDZ)?',
        options: [
          'El tiempo que tarda JavaScript en ejecutar un programa',
          'El período entre el inicio del scope y la declaración de let/const donde no se puede acceder a la variable',
          'Una zona donde las variables globales no funcionan',
          'El tiempo que var tarda en ser inicializada',
        ],
        correctAnswer: 'El período entre el inicio del scope y la declaración de let/const donde no se puede acceder a la variable',
        correctFeedback: 'Exacto. let y const se elevan pero permanecen en TDZ hasta llegar a su línea de declaración — cualquier acceso antes lanza ReferenceError.',
        incorrectFeedback: 'TDZ es específica de let y const. Es la zona "prohibida" donde la variable fue elevada pero todavía no fue inicializada — acceder ahí lanza ReferenceError.',
      },
      {
        question: '¿Por qué var puede generar bugs difíciles de detectar por el hoisting?',
        options: [
          'Porque lanza ReferenceError en lugar de undefined',
          'Porque devuelve undefined en lugar de error al usarse antes de asignar',
          'Porque no puede usarse dentro de funciones',
          'Porque es más lenta que let y const',
        ],
        correctAnswer: 'Porque devuelve undefined en lugar de error al usarse antes de asignar',
        correctFeedback: 'Correcto. Que var devuelva undefined en lugar de un error hace que el bug sea silencioso y difícil de detectar.',
        incorrectFeedback: 'El peligro de var es precisamente que no lanza error — simplemente devuelve undefined, lo que puede producir comportamientos inesperados difíciles de rastrear.',
      },
    ],
  },

  {
    slug: 'hoisting-var-let-const-funciones',
    title: 'Hoisting con var, let, const y funciones',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 119,
    description:
      'Compara cómo funciona hoisting con var, let, const, function declarations y function expressions.',
    explanation: `## Hoisting: comparación completa

Ahora que entiendes el concepto básico, vamos a comparar en detalle cómo se comporta cada tipo de declaración.

### 1. \`var\` — se eleva con \`undefined\`

\`\`\`js
console.log(a) // undefined (no error)
var a = 5
console.log(a) // 5
\`\`\`

Internamente:
\`\`\`js
var a       // declaración elevada (valor: undefined)
console.log(a)  // undefined
a = 5
console.log(a)  // 5
\`\`\`

### 2. \`let\` — elevada pero en TDZ

\`\`\`js
console.log(b) // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10
\`\`\`

### 3. \`const\` — igual que let, pero nunca reasignable

\`\`\`js
console.log(c) // ❌ ReferenceError
const c = 20
\`\`\`

### 4. \`function declaration\` — se eleva completa

\`\`\`js
saludar() // "Hola!" — funciona antes de la declaración

function saludar() {
  console.log('Hola!')
}
\`\`\`

### 5. \`function expression\` — solo se eleva el nombre

Con \`var\`:
\`\`\`js
saludar() // ❌ TypeError: saludar is not a function
var saludar = function() {
  console.log('Hola!')
}
\`\`\`

Aquí \`var saludar\` se eleva con \`undefined\`, y llamar \`undefined()\` lanza \`TypeError\`.

Con \`let\` o \`const\`:
\`\`\`js
saludar() // ❌ ReferenceError: Cannot access 'saludar' before initialization
const saludar = function() {
  console.log('Hola!')
}
\`\`\`

### 6. Arrow functions — igual que function expression

\`\`\`js
saludar() // ❌ ReferenceError o TypeError según la declaración
const saludar = () => {
  console.log('Hola!')
}
\`\`\`

### Resumen visual

| Tipo                  | ¿Elevada? | ¿Usable antes? | Error si se usa antes |
|-----------------------|-----------|-----------------|----------------------|
| \`var\`               | ✅        | ✅ (pero undefined) | Ninguno (bug silencioso) |
| \`let\`               | ✅        | ❌              | ReferenceError       |
| \`const\`             | ✅        | ❌              | ReferenceError       |
| function declaration  | ✅ (completa) | ✅          | Ninguno              |
| function expression   | Solo nombre | ❌            | TypeError/ReferenceError |
| arrow function        | Solo nombre | ❌            | TypeError/ReferenceError |

### Consejo práctico

Declara siempre las variables y funciones **antes de usarlas**. Esto elimina la necesidad de pensar en hoisting y hace el código más claro.`,
    codeExample: `// script.js

// ✅ function declaration — elevada completa
console.log(multiplicar(3, 4)) // 12 — funciona antes de la declaración

function multiplicar(a, b) {
  return a * b
}

// ❌ function expression — solo el nombre se eleva
// console.log(dividir(10, 2)) // TypeError: dividir is not a function
const dividir = function(a, b) {
  return a / b
}
console.log(dividir(10, 2)) // 5

// ❌ arrow function — solo el nombre se eleva
// console.log(restar(8, 3)) // ReferenceError
const restar = (a, b) => a - b
console.log(restar(8, 3)) // 5

// var — elevada con undefined
// console.log(impuesto) // undefined (¡bug silencioso!)
var impuesto = 0.16

// let/const — en TDZ hasta su línea
// console.log(descuento) // ReferenceError
const descuento = 0.10

// Mejor práctica: declarar antes de usar
const precio = 100
const precioFinal = precio * (1 - descuento) * (1 + impuesto)
console.log(precioFinal) // 104.4`,
    keyPoints: [
      'var se eleva con undefined — usar antes de asignar no lanza error pero devuelve undefined.',
      'let y const se elevan pero en TDZ — usar antes lanza ReferenceError.',
      'Las function declarations se elevan completas y pueden usarse antes de declararse.',
      'Las function expressions y arrow functions solo elevan el nombre (como var/let/const).',
      'Llamar una var-function-expression antes de asignarla lanza TypeError (undefined no es función).',
      'La mejor práctica es siempre declarar antes de usar, sin depender de hoisting.',
    ],
    exercise: {
      description:
        'Sin ejecutar el código, predice qué pasa en cada caso y explica por qué:\n1. `console.log(x); var x = 5`\n2. `saludar(); function saludar() { console.log("hola") }`\n3. `console.log(y); let y = 10`\n4. `fn(); const fn = () => console.log("fn")`\nDespués ejecuta cada caso en la consola y verifica tus predicciones.',
      hint: 'Recuerda la tabla: var → undefined, let/const → ReferenceError, function declaration → funciona, const arrow → ReferenceError antes de la línea.',
    },
    quiz: [
      {
        question: '¿Qué ocurre cuando llamas una function expression (const fn = function(){}) antes de su declaración?',
        options: [
          'La función se ejecuta normalmente',
          'Devuelve undefined',
          'Lanza ReferenceError porque const está en TDZ',
          'Lanza TypeError: fn is not a function',
        ],
        correctAnswer: 'Lanza ReferenceError porque const está en TDZ',
        correctFeedback: 'Correcto. Con const, la variable está en TDZ hasta su línea, así que ni siquiera puedes acceder a ella — lanza ReferenceError.',
        incorrectFeedback: 'Con const, la variable está en Temporal Dead Zone. Intentar usarla antes de su declaración lanza ReferenceError, no TypeError.',
      },
      {
        question: '¿Cuál es la única declaración que se eleva completamente y funciona antes de su línea?',
        options: [
          'var',
          'let',
          'const arrow function',
          'function declaration',
        ],
        correctAnswer: 'function declaration',
        correctFeedback: 'Exacto. Solo las function declarations (function nombre() {}) se elevan completamente con su cuerpo, permitiendo usarlas antes de su línea.',
        incorrectFeedback: 'var se eleva solo la declaración (con undefined). let/const tienen TDZ. Solo function declaration sube completa.',
      },
      {
        question: '¿Qué imprime esto?\n\nconsole.log(x)\nvar x = "hola"',
        options: [
          '"hola"',
          'ReferenceError',
          'undefined',
          'TypeError',
        ],
        correctAnswer: 'undefined',
        correctFeedback: 'Correcto. var se eleva como declaración (con undefined). El valor "hola" no se asigna hasta esa línea.',
        incorrectFeedback: 'var se eleva con undefined, no con el valor asignado. La asignación x = "hola" ocurre en su línea original, no al inicio.',
      },
      {
        question: '¿Por qué es mejor práctica declarar variables antes de usarlas?',
        options: [
          'Porque JavaScript no puede procesar hoisting de otra manera',
          'Para evitar depender de comportamientos como undefined silencioso o TDZ que hacen el código menos predecible',
          'Porque let y const no funcionan si se declaran después',
          'Porque mejora el rendimiento del programa',
        ],
        correctAnswer: 'Para evitar depender de comportamientos como undefined silencioso o TDZ que hacen el código menos predecible',
        correctFeedback: 'Exacto. Declarar antes de usar hace el código lineal y predecible, sin sorpresas de hoisting.',
        incorrectFeedback: 'Técnicamente JavaScript puede procesarlo, pero los comportamientos (undefined silencioso o ReferenceError) hacen el código confuso y propenso a bugs.',
      },
      {
        question: 'Una var-function-expression (var fn = function(){}) usada antes de su declaración produce:',
        options: [
          'ReferenceError porque var está en TDZ',
          'TypeError porque se intenta llamar undefined como función',
          'La función se ejecuta normalmente',
          'null',
        ],
        correctAnswer: 'TypeError porque se intenta llamar undefined como función',
        correctFeedback: 'Correcto. var fn se eleva con undefined, y llamar undefined() lanza TypeError: fn is not a function.',
        incorrectFeedback: 'var no tiene TDZ — se eleva con undefined. Pero llamar undefined() produce TypeError porque undefined no es una función.',
      },
    ],
  },

  {
    slug: 'closures-explicados-simple',
    title: 'Closures explicados simple',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 120,
    description:
      'Aprende qué es un closure y cómo una función puede recordar variables del contexto donde fue creada.',
    explanation: `## Closures explicados simple

Un **closure** es una función que recuerda las variables del entorno donde fue creada, incluso después de que ese entorno haya "terminado".

### La analogía de la mochila

Imagina que una función es como una persona que lleva una mochila. Cuando la función es creada, mete en su mochila todas las variables a las que puede acceder en ese momento. Cuando la función se ejecuta más tarde, puede abrir su mochila y usar esas variables.

### Un closure simple

\`\`\`js
function crearSaludo(nombre) {
  // 'nombre' vive en el scope de crearSaludo

  function saludar() {
    // saludar "recuerda" la variable nombre — eso es un closure
    console.log('Hola, ' + nombre + '!')
  }

  return saludar
}

let saludarAna = crearSaludo('Ana')
let saludarLuis = crearSaludo('Luis')

saludarAna()   // "Hola, Ana!"
saludarLuis()  // "Hola, Luis!"
\`\`\`

¿Ves lo interesante? Cuando llamamos \`saludarAna()\`, la función \`crearSaludo('Ana')\` ya terminó — pero \`saludar\` todavía recuerda que \`nombre = 'Ana'\`.

### ¿Por qué funciona?

Normalmente las variables locales de una función se eliminan cuando termina. Pero si una función interna sigue referenciando esas variables, JavaScript las mantiene vivas en memoria.

### Closures en código real

\`\`\`js
function crearContador() {
  let cuenta = 0  // esta variable vive en el closure

  return {
    incrementar: function() { cuenta++ },
    obtener: function() { return cuenta },
    reiniciar: function() { cuenta = 0 },
  }
}

let contador = crearContador()
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.obtener()) // 3
contador.reiniciar()
console.log(contador.obtener()) // 0
\`\`\`

La variable \`cuenta\` está protegida — solo las funciones del objeto pueden modificarla.

### Closures con parámetros

\`\`\`js
function multiplicarPor(factor) {
  return function(numero) {
    return numero * factor
  }
}

let doble = multiplicarPor(2)
let triple = multiplicarPor(3)

console.log(doble(5))   // 10
console.log(triple(5))  // 15
\`\`\``,
    codeExample: `// script.js

// Closure básico: función que recuerda su contexto
function crearMensajeBienvenida(plataforma) {
  let visitas = 0

  function registrarVisita(usuario) {
    visitas++
    return '¡Bienvenido a ' + plataforma + ', ' + usuario + '! Visita #' + visitas
  }

  return registrarVisita
}

let bienvenidaRonaldoScript = crearMensajeBienvenida('RonaldoScript')

console.log(bienvenidaRonaldoScript('Ana'))   // ¡Bienvenido a RonaldoScript, Ana! Visita #1
console.log(bienvenidaRonaldoScript('Luis'))  // ¡Bienvenido a RonaldoScript, Luis! Visita #2
console.log(bienvenidaRonaldoScript('María')) // ¡Bienvenido a RonaldoScript, María! Visita #3

// 'visitas' y 'plataforma' son recordadas por el closure
// Nadie más puede acceder a ellas directamente

// Dos closures independientes
let bienvenidaCurso = crearMensajeBienvenida('JavaScript desde Cero')
console.log(bienvenidaCurso('Carlos')) // ¡Bienvenido a JavaScript desde Cero, Carlos! Visita #1
// El contador de bienvenidaRonaldoScript no se afectó`,
    keyPoints: [
      'Un closure es una función que recuerda las variables del entorno donde fue creada.',
      'Las variables referenciadas por un closure no se eliminan cuando la función externa termina.',
      'Cada closure tiene su propio conjunto de variables recordadas — son independientes.',
      'Los closures permiten crear "datos privados" que solo las funciones internas pueden acceder.',
      'Las arrow functions también forman closures.',
      'Los closures son fundamentales para patrones como contadores, funciones configurables y módulos.',
    ],
    exercise: {
      description:
        'Crea una función `crearCarrito()` que use un closure para mantener una lista de productos. Debe retornar un objeto con tres métodos: `agregar(producto)` que agrega un producto a la lista, `obtener()` que devuelve la lista actual, y `total()` que suma los precios (los productos son objetos con nombre y precio).',
      hint: 'Declara `let productos = []` dentro de crearCarrito. Las funciones del objeto retornado formarán closures que recordarán el array `productos`. El método total puede usar reduce o un for loop.',
    },
    quiz: [
      {
        question: '¿Qué es un closure en JavaScript?',
        options: [
          'Una función que cierra el programa al terminar',
          'Una función que recuerda las variables del entorno donde fue creada',
          'Un bloque de código que no puede ser modificado',
          'Un tipo especial de variable global',
        ],
        correctAnswer: 'Una función que recuerda las variables del entorno donde fue creada',
        correctFeedback: 'Exacto. Un closure permite que una función "lleve consigo" las variables de su contexto de creación, incluso cuando ese contexto ya terminó.',
        incorrectFeedback: 'Un closure no cierra nada — al contrario, "mantiene abierto" el acceso a las variables del entorno donde fue creada la función.',
      },
      {
        question: '¿Qué imprime el siguiente código?\n\nfunction crearSuma(x) {\n  return function(y) { return x + y }\n}\nlet suma5 = crearSuma(5)\nconsole.log(suma5(3))',
        options: [
          'undefined',
          '8',
          'ReferenceError: x is not defined',
          '3',
        ],
        correctAnswer: '8',
        correctFeedback: 'Correcto. La función interna forma un closure que recuerda x = 5. Al llamarla con y = 3, devuelve 5 + 3 = 8.',
        incorrectFeedback: 'La función interna forma un closure que recuerda x = 5 aunque crearSuma(5) ya terminó. Al llamar suma5(3), calcula 5 + 3 = 8.',
      },
      {
        question: '¿Por qué los closures son útiles para crear "datos privados"?',
        options: [
          'Porque cifran las variables automáticamente',
          'Porque las variables del closure solo son accesibles desde las funciones internas',
          'Porque convierten variables en constantes',
          'Porque eliminan las variables después de usarlas',
        ],
        correctAnswer: 'Porque las variables del closure solo son accesibles desde las funciones internas',
        correctFeedback: 'Exacto. Las variables en el closure no son accesibles desde fuera — actúan como datos privados que solo pueden modificar las funciones que las "recuerdan".',
        incorrectFeedback: 'No hay cifrado. La privacidad viene del scope: las variables del closure no son accesibles directamente desde fuera, solo desde las funciones internas que las referencian.',
      },
      {
        question: 'Si creas dos closures con la misma función fábrica, ¿comparten el mismo estado?',
        options: [
          'Sí, siempre comparten el mismo estado',
          'No, cada closure tiene su propia copia de las variables',
          'Depende de si las variables son let o const',
          'Sí, pero solo las variables numéricas',
        ],
        correctAnswer: 'No, cada closure tiene su propia copia de las variables',
        correctFeedback: 'Correcto. Cada llamada a la función fábrica crea un nuevo entorno (scope) con sus propias variables. Los closures resultantes son independientes.',
        incorrectFeedback: 'Cada llamada a la función crea un nuevo scope con nuevas variables. Los closures son independientes — uno no afecta al otro.',
      },
      {
        question: '¿En cuál de estos casos se forma un closure?',
        options: [
          'Una función que no devuelve nada',
          'Una función interna que usa variables de la función externa',
          'Una variable global usada dentro de una función',
          'Una función que se llama a sí misma',
        ],
        correctAnswer: 'Una función interna que usa variables de la función externa',
        correctFeedback: 'Correcto. El closure se forma cuando una función interna referencia variables del scope de la función que la contiene.',
        incorrectFeedback: 'Un closure requiere que una función interna referencie variables del scope exterior. Las variables globales no forman closures y las funciones recursivas tampoco.',
      },
    ],
  },

  {
    slug: 'casos-practicos-closures',
    title: 'Casos prácticos de closures',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 121,
    description:
      'Aprende a usar closures en contadores, funciones configurables y pequeñas herramientas reutilizables.',
    explanation: `## Casos prácticos de closures

Los closures no son solo un concepto teórico — aparecen constantemente en código JavaScript real.

### 1. Contadores independientes

\`\`\`js
function crearContador(inicio = 0) {
  let cuenta = inicio

  return {
    incrementar() { cuenta++ },
    decrementar() { cuenta-- },
    valor() { return cuenta },
  }
}

let contadorA = crearContador()
let contadorB = crearContador(10)

contadorA.incrementar()
contadorA.incrementar()
contadorB.incrementar()

console.log(contadorA.valor()) // 2
console.log(contadorB.valor()) // 11 — independiente de A
\`\`\`

### 2. Funciones configurables (función fábrica)

\`\`\`js
function crearDescuento(porcentaje) {
  return function(precio) {
    return precio - (precio * porcentaje / 100)
  }
}

let descuento10 = crearDescuento(10)
let descuento25 = crearDescuento(25)

console.log(descuento10(200)) // 180
console.log(descuento25(200)) // 150
\`\`\`

### 3. Memoización simple (cache de resultados)

\`\`\`js
function crearCalculadoraCached() {
  let cache = {}

  return function calcular(n) {
    if (cache[n] !== undefined) {
      console.log('desde cache')
      return cache[n]
    }
    let resultado = n * n  // simulamos cálculo costoso
    cache[n] = resultado
    return resultado
  }
}

let calcular = crearCalculadoraCached()
console.log(calcular(5))  // 25
console.log(calcular(5))  // "desde cache" → 25
\`\`\`

### 4. Handlers de eventos con datos privados

\`\`\`js
function configurarBoton(boton, limite) {
  let clicks = 0

  boton.addEventListener('click', function() {
    clicks++
    if (clicks >= limite) {
      boton.disabled = true
      boton.textContent = 'Límite alcanzado'
    } else {
      boton.textContent = 'Clicks: ' + clicks + '/' + limite
    }
  })
}
\`\`\`

### 5. Módulo patrón (datos privados)

\`\`\`js
const carrito = (function() {
  let productos = []

  return {
    agregar(p) { productos.push(p) },
    total() { return productos.reduce((s, p) => s + p.precio, 0) },
    cantidad() { return productos.length },
  }
})()

carrito.agregar({ nombre: 'Libro', precio: 150 })
carrito.agregar({ nombre: 'Curso', precio: 299 })
console.log(carrito.total())    // 449
console.log(carrito.cantidad()) // 2
\`\`\``,
    codeExample: `// app.js

// Función configuradora de notificaciones
function crearNotificador(tipo) {
  let historial = []

  function mostrar(mensaje) {
    historial.push({ tipo, mensaje, hora: new Date().toLocaleTimeString() })
    console.log('[' + tipo.toUpperCase() + '] ' + mensaje)
  }

  function obtenerHistorial() {
    return historial
  }

  return { mostrar, obtenerHistorial }
}

let errorNotif = crearNotificador('error')
let infoNotif = crearNotificador('info')

errorNotif.mostrar('Conexión fallida')
infoNotif.mostrar('Usuario conectado')
errorNotif.mostrar('Tiempo de espera agotado')

console.log(errorNotif.obtenerHistorial())
// [{tipo:'error', mensaje:'Conexión fallida', hora:'...'}, ...]

console.log(infoNotif.obtenerHistorial())
// [{tipo:'info', mensaje:'Usuario conectado', hora:'...'}]`,
    keyPoints: [
      'Los closures permiten crear contadores y estados privados que solo las funciones internas pueden modificar.',
      'Las funciones fábrica usan closures para crear versiones especializadas de otras funciones.',
      'Los closures son ideales para event handlers que necesitan recordar datos del contexto de configuración.',
      'El patrón módulo usa closures para encapsular datos privados y exponer solo una API pública.',
      'La memoización usa closures para guardar resultados de cálculos costosos.',
      'Cada closure es independiente — múltiples closures de la misma función no comparten estado.',
    ],
    exercise: {
      description:
        'Crea una función `crearValidador(minCaracteres, maxCaracteres)` que retorne una función validadora. La función retornada debe recibir un texto y devolver un objeto con `valido` (boolean) y `mensaje` (string explicando si es válido, muy corto o muy largo). Crea al menos dos validadores con diferentes límites y pruébalos.',
      hint: 'La función interna forma un closure que recuerda minCaracteres y maxCaracteres. Usa text.length para verificar. El objeto retornado debe tener la forma { valido: true/false, mensaje: "..." }.',
    },
    quiz: [
      {
        question: '¿Cuál es la ventaja de una función fábrica (factory function) con closures?',
        options: [
          'Que puede ejecutarse sin ser llamada',
          'Que crea funciones especializadas con datos configurados en el momento de creación',
          'Que elimina la necesidad de parámetros',
          'Que comparte el mismo estado entre todas las instancias creadas',
        ],
        correctAnswer: 'Que crea funciones especializadas con datos configurados en el momento de creación',
        correctFeedback: 'Correcto. Una función fábrica crea funciones nuevas configuradas con los parámetros que se le pasaron, usando closures para recordarlos.',
        incorrectFeedback: 'Las factory functions usan closures para "pre-configurar" funciones — cada instancia recuerda sus propios parámetros de creación y son independientes entre sí.',
      },
      {
        question: '¿Qué ventaja ofrece el patrón módulo con closures para datos privados?',
        options: [
          'Que los datos son accesibles desde cualquier parte del programa',
          'Que solo las funciones expuestas en la API pública pueden acceder y modificar los datos internos',
          'Que los datos se guardan automáticamente en localStorage',
          'Que impide que JavaScript elimine las variables de memoria',
        ],
        correctAnswer: 'Que solo las funciones expuestas en la API pública pueden acceder y modificar los datos internos',
        correctFeedback: 'Exacto. El patrón módulo encapsula datos en un closure — la única forma de acceder o modificarlos es través de las funciones que se exponen públicamente.',
        incorrectFeedback: 'El patrón módulo hace lo opuesto: los datos internos no son accesibles directamente. Solo las funciones que se retornan (la API pública) pueden manipularlos.',
      },
      {
        question: '¿Qué imprime este código?\n\nfunction crearMultiplicador(x) {\n  return n => n * x\n}\nlet por3 = crearMultiplicador(3)\nlet por5 = crearMultiplicador(5)\nconsole.log(por3(4))\nconsole.log(por5(4))',
        options: [
          '12 y 12',
          '12 y 20',
          '7 y 9',
          'ReferenceError',
        ],
        correctAnswer: '12 y 20',
        correctFeedback: 'Correcto. por3 recuerda x=3, por5 recuerda x=5. por3(4) = 4*3 = 12. por5(4) = 4*5 = 20. Closures independientes.',
        incorrectFeedback: 'Cada closure recuerda su propio x. por3 tiene x=3 → 4*3=12. por5 tiene x=5 → 4*5=20. Son independientes.',
      },
      {
        question: '¿En qué situación es especialmente útil usar un closure en un event listener?',
        options: [
          'Cuando el evento no necesita ningún dato externo',
          'Cuando el handler necesita recordar datos del contexto donde fue configurado sin variables globales',
          'Cuando se quiere que el evento se ejecute solo una vez',
          'Cuando el elemento HTML no existe todavía',
        ],
        correctAnswer: 'Cuando el handler necesita recordar datos del contexto donde fue configurado sin variables globales',
        correctFeedback: 'Exacto. Un closure en un event listener permite que el handler tenga acceso a datos de configuración sin necesidad de variables globales.',
        incorrectFeedback: 'Los closures en event listeners son útiles específicamente cuando el handler necesita datos del contexto de configuración (como un límite de clicks, un ID de usuario, etc.) sin usar variables globales.',
      },
      {
        question: '¿Qué ventaja ofrece la memoización con closures?',
        options: [
          'Elimina la necesidad de llamar funciones múltiples veces',
          'Guarda resultados de cálculos previos en un cache para evitar recalcularlos',
          'Hace que las funciones sean más rápidas automáticamente',
          'Permite ejecutar código sin funciones',
        ],
        correctAnswer: 'Guarda resultados de cálculos previos en un cache para evitar recalcularlos',
        correctFeedback: 'Exacto. La memoización usa un closure para mantener un cache. Si la misma entrada ya fue calculada, devuelve el resultado guardado en lugar de recalcular.',
        incorrectFeedback: 'La memoización no elimina las llamadas ni acelera el código mágicamente. Guarda en un cache (que vive en el closure) los resultados ya calculados para evitar trabajo redundante.',
      },
    ],
  },

  {
    slug: 'errores-scope-closures',
    title: 'Errores comunes con scope y closures',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 122,
    description:
      'Aprende a evitar errores comunes al usar variables fuera de alcance o closures sin entender qué valores recuerdan.',
    explanation: `## Errores comunes con scope y closures

### Error 1: Usar var en bucles con callbacks

El error más clásico de closures:

\`\`\`js
// ❌ Problema con var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i) // 3, 3, 3 — no 0, 1, 2
  }, 100)
}
\`\`\`

**Por qué falla:** \`var\` no tiene block scope. Cuando los timeouts se ejecutan, el bucle ya terminó e \`i = 3\`. Todos los callbacks comparten la misma \`i\`.

**Solución con let:**
\`\`\`js
// ✅ Solución con let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i) // 0, 1, 2 ✅
  }, 100)
}
\`\`\`

\`let\` crea una nueva \`i\` en cada iteración.

### Error 2: Asumir que el closure congela el valor

\`\`\`js
let valor = 10

function mostrarValor() {
  console.log(valor) // no captura 10 — accede a la variable viva
}

valor = 99
mostrarValor() // 99, no 10
\`\`\`

El closure recuerda la **referencia** a la variable, no una copia de su valor.

### Error 3: Pérdida de this en closures de métodos

\`\`\`js
const usuario = {
  nombre: 'Ana',
  saludar: function() {
    setTimeout(function() {
      console.log('Hola, ' + this.nombre) // ❌ this es undefined (o window)
    }, 100)
  }
}

// ✅ Solución con arrow function
const usuario2 = {
  nombre: 'Ana',
  saludar: function() {
    setTimeout(() => {
      console.log('Hola, ' + this.nombre) // ✅ "Hola, Ana"
    }, 100)
  }
}
\`\`\`

### Error 4: Variables fuera de scope

\`\`\`js
function procesarPedido() {
  if (true) {
    var total = 100 // var escapa del if
  }
  return total // ¿qué pasa si la condición es false?
}
// Solución: usa let dentro del if y declara total antes
\`\`\`

### Error 5: Modificar una variable del closure sin querer

\`\`\`js
function crearConfig() {
  let config = { tema: 'oscuro', idioma: 'es' }

  return {
    obtener: () => config,        // ⚠️ expone referencia
    cambiar: (clave, val) => {
      config[clave] = val          // modifica el objeto
    }
  }
}
\`\`\`

Devolver objetos por referencia permite modificarlos desde fuera. Para protegerlos, retorna una copia.`,
    codeExample: `// script.js

// ✅ Correcto: let en bucles con callbacks
function configurarBotones() {
  let botones = document.querySelectorAll('.btn-numero')

  botones.forEach(function(boton, indice) {
    // indice es un nuevo parámetro en cada iteración — no hay problema de closure aquí
    boton.addEventListener('click', function() {
      console.log('Botón número:', indice)
    })
  })
}

// ✅ Correcto: closure que accede a variable mutable
function crearTemporizador() {
  let segundos = 0

  setInterval(function() {
    segundos++
    // accede a la variable viva — ve los cambios
  }, 1000)

  return {
    obtener: () => segundos,
  }
}

// ✅ Correcto: arrow function preserva this
const app = {
  nombre: 'RonaldoScript',
  iniciar: function() {
    setTimeout(() => {
      // Arrow function hereda el this del contexto externo
      console.log('Iniciando:', this.nombre)
    }, 500)
  }
}`,
    keyPoints: [
      'var en bucles con callbacks es el error clásico de closures — todos comparten la misma variable.',
      'Usar let en bucles soluciona el problema: cada iteración crea su propia variable.',
      'Los closures recuerdan la referencia a la variable, no una copia de su valor en el momento.',
      'Las arrow functions heredan el this del contexto exterior — útil para evitar pérdida de this.',
      'Devolver objetos desde closures expone una referencia mutable — retorna copias si necesitas protegerlos.',
      'Entender estos errores comunes ahorra horas de depuración.',
    ],
    exercise: {
      description:
        'Corrige este código que tiene el error clásico de var en bucles:\n\n```js\nvar tareas = ["Estudiar", "Practicar", "Repasar"]\nfor (var i = 0; i < tareas.length; i++) {\n  setTimeout(function() {\n    console.log(tareas[i])\n  }, i * 500)\n}\n```\nExplica qué imprime el código original (incorrecto) y por qué. Luego corrígelo con let.',
      hint: 'Con var, cuando los timeouts se ejecutan, i ya vale tareas.length (3), así que tareas[3] es undefined. Con let, cada iteración tiene su propia i.',
    },
    quiz: [
      {
        question: '¿Qué imprime este código?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0)\n}',
        options: [
          '0, 1, 2',
          '3, 3, 3',
          '0, 0, 0',
          'undefined, undefined, undefined',
        ],
        correctAnswer: '3, 3, 3',
        correctFeedback: 'Correcto. var no tiene block scope, así que todos los callbacks comparten la misma i. Para cuando se ejecutan, el bucle terminó e i=3.',
        incorrectFeedback: 'Con var, todos los callbacks del setTimeout comparten la misma i. El bucle termina (i=3) antes de que los callbacks se ejecuten, así que imprimen 3 tres veces.',
      },
      {
        question: '¿Cómo se corrige el error de var en bucles con callbacks?',
        options: [
          'Usar const en lugar de var',
          'Usar let en lugar de var',
          'Mover el setTimeout fuera del bucle',
          'Usar una función global para guardar el índice',
        ],
        correctAnswer: 'Usar let en lugar de var',
        correctFeedback: 'Correcto. let crea una nueva variable en cada iteración del bucle, así cada callback tiene su propio valor de i.',
        incorrectFeedback: 'const no se puede reasignar en un bucle for. La solución es let, que crea un nuevo scope por iteración, dando a cada callback su propia copia de la variable.',
      },
      {
        question: '¿Qué recuerda un closure sobre una variable: su valor actual o una referencia a la variable?',
        options: [
          'Una copia del valor en el momento de creación del closure',
          'Una referencia a la variable — ve los cambios posteriores',
          'El último valor antes de que la función externa termine',
          'Depende de si la variable es let o const',
        ],
        correctAnswer: 'Una referencia a la variable — ve los cambios posteriores',
        correctFeedback: 'Correcto. El closure guarda una referencia viva a la variable, no una copia. Si la variable cambia después, el closure ve el nuevo valor.',
        incorrectFeedback: 'Los closures no congelan valores — mantienen una referencia activa. Si la variable cambia después de que el closure fue creado, el closure verá el valor actualizado.',
      },
      {
        question: '¿Por qué las arrow functions son útiles para preservar this en métodos con callbacks?',
        options: [
          'Porque ignoran el this completamente',
          'Porque crean su propio this basado en el objeto que las llama',
          'Porque heredan el this del contexto léxico donde fueron escritas',
          'Porque this siempre apunta a window en arrow functions',
        ],
        correctAnswer: 'Porque heredan el this del contexto léxico donde fueron escritas',
        correctFeedback: 'Exacto. Las arrow functions no tienen su propio this — usan el this del código que las rodea (contexto léxico), lo cual las hace perfectas para callbacks en métodos.',
        incorrectFeedback: 'Las arrow functions no tienen su propio this. En lugar de eso, lo heredan del scope donde fueron escritas (léxico), manteniendo el this del método exterior.',
      },
      {
        question: '¿Cuál es la causa del bug clásico de var en bucles con setTimeout?',
        options: [
          'var no puede usarse dentro de bucles for',
          'var no tiene block scope — todos los callbacks comparten la misma i que ya fue modificada por el bucle',
          'setTimeout no funciona correctamente dentro de bucles',
          'El bucle for se ejecuta después de los callbacks',
        ],
        correctAnswer: 'var no tiene block scope — todos los callbacks comparten la misma i que ya fue modificada por el bucle',
        correctFeedback: 'Correcto. Con var, solo hay una variable i compartida por todos los callbacks. Para cuando se ejecutan, el bucle terminó e i tiene el valor final.',
        incorrectFeedback: 'var puede usarse en bucles. El problema es que var no crea un scope nuevo por iteración — todos los closures apuntan a la misma i, que tiene el valor del final del bucle cuando los callbacks se ejecutan.',
      },
    ],
  },

  {
    slug: 'buenas-practicas-scope',
    title: 'Buenas prácticas con scope',
    module: 'Scope, hoisting y closures',
    moduleNumber: 16,
    order: 123,
    description:
      'Aprende a mantener el código claro limitando variables globales, usando nombres claros y declarando variables cerca de donde se usan.',
    explanation: `## Buenas prácticas con scope

### 1. Minimiza las variables globales

Cada variable global es un riesgo: cualquier función puede modificarla accidentalmente.

\`\`\`js
// ❌ Demasiadas variables globales
var usuario = 'Ana'
var edad = 25
var puntaje = 0
var intentos = 0

// ✅ Encapsula en objeto o módulo
const estadoJuego = {
  usuario: 'Ana',
  edad: 25,
  puntaje: 0,
  intentos: 0,
}
\`\`\`

### 2. Declara variables cerca de donde las usas

\`\`\`js
// ❌ Variables declaradas al inicio aunque se usen lejos
function procesarPedido(items) {
  let total
  let descuento
  let impuesto
  let nombreUsuario
  // ... 50 líneas de código ...
  total = calcularTotal(items)
  // ...
}

// ✅ Declarar cuando se necesitan
function procesarPedido(items) {
  // ...
  const total = calcularTotal(items)
  const impuesto = total * 0.16
  return total + impuesto
}
\`\`\`

### 3. Usa const por defecto

\`\`\`js
// ✅ const comunica que no hay reasignación intencional
const MAX_INTENTOS = 3
const URL_API = 'https://api.ejemplo.com'
const COLORES = ['rojo', 'verde', 'azul']

// Solo usa let cuando necesitas reasignar
let intentosActuales = 0
\`\`\`

### 4. Evita modificar variables de scope externo en funciones

\`\`\`js
// ❌ Efecto secundario — modifica variable externa
let total = 0
function agregarImpuesto(precio) {
  total = precio * 1.16 // modifica variable externa
}

// ✅ Función pura — recibe y devuelve, sin efectos externos
function calcularConImpuesto(precio) {
  return precio * 1.16
}
\`\`\`

### 5. Usa nombres descriptivos

\`\`\`js
// ❌ Nombres que no dicen nada
let x = 100
let y = 0.16
let z = x * (1 + y)

// ✅ Nombres claros
let precioBase = 100
let tasaImpuesto = 0.16
let precioFinal = precioBase * (1 + tasaImpuesto)
\`\`\`

### 6. Bloquea scope con bloques cuando tengas lógica temporal

\`\`\`js
function calcular(datos) {
  let resultado = 0

  {
    // bloque temporal para cálculo intermedio
    const subtotal = datos.reduce((s, d) => s + d.valor, 0)
    const factor = datos.length > 10 ? 0.9 : 1
    resultado = subtotal * factor
  }

  return resultado
}
\`\`\``,
    codeExample: `// utils.js — Ejemplo de buenas prácticas de scope

// ✅ Constante global con nombre descriptivo
const DESCUENTO_PREMIUM = 0.20
const DESCUENTO_ESTANDAR = 0.10
const MINIMO_PREMIUM = 500

// ✅ Función pura — no modifica variables externas
function calcularPrecioFinal(precio, esPremium) {
  const descuento = esPremium ? DESCUENTO_PREMIUM : DESCUENTO_ESTANDAR
  const precioConDescuento = precio * (1 - descuento)
  const impuesto = precioConDescuento * 0.16
  return precioConDescuento + impuesto
}

// ✅ Encapsulación con closure para datos privados
function crearCarrito() {
  const items = []  // privado

  return {
    agregar(producto) {
      items.push(producto)
    },
    total() {
      return items.reduce((suma, item) => suma + item.precio, 0)
    },
    resumen() {
      return items.map(i => i.nombre + ': $' + i.precio)
    },
  }
}

const carrito = crearCarrito()
carrito.agregar({ nombre: 'Libro JS', precio: 150 })
carrito.agregar({ nombre: 'Curso Online', precio: 299 })
console.log(carrito.total()) // 449
console.log(calcularPrecioFinal(1000, true)) // 928`,
    keyPoints: [
      'Minimiza las variables globales — encapsula estado relacionado en objetos o closures.',
      'Declara variables cerca de donde las usas para mejorar la legibilidad.',
      'Usa const por defecto; solo let cuando necesitas reasignar.',
      'Prefiere funciones puras que no modifiquen variables externas — son más predecibles.',
      'Usa nombres descriptivos: el nombre debe explicar qué guarda la variable.',
      'Los bloques {} pueden usarse para aislar lógica temporal y limitar el scope de variables.',
    ],
    exercise: {
      description:
        'Refactoriza este código aplicando buenas prácticas de scope:\n\n```js\nvar x = 100\nvar y = 0\nvar z = false\n\nfunction f(a) {\n  y = y + a\n  if (y > x) {\n    z = true\n  }\n  return y\n}\n```\n\nMejora los nombres, usa const/let correctamente, evita modificar variables externas, y haz la función pura.',
      hint: 'Piensa qué representa cada variable en el contexto de un negocio (presupuesto, gasto, si excede el límite). Una función pura recibe todo lo que necesita como parámetros y devuelve el resultado sin modificar nada fuera.',
    },
    quiz: [
      {
        question: '¿Por qué es recomendable minimizar las variables globales?',
        options: [
          'Porque ocupan más memoria que las variables locales',
          'Porque son más difíciles de declarar con let y const',
          'Porque cualquier parte del código puede modificarlas accidentalmente',
          'Porque los navegadores modernos no las soportan bien',
        ],
        correctAnswer: 'Porque cualquier parte del código puede modificarlas accidentalmente',
        correctFeedback: 'Correcto. Las variables globales son accesibles desde cualquier función, lo que aumenta el riesgo de modificaciones accidentales y hace el código más difícil de depurar.',
        incorrectFeedback: 'No es un tema de rendimiento ni compatibilidad. El problema es que cualquier función puede leer y modificar variables globales, lo que genera bugs difíciles de rastrear.',
      },
      {
        question: '¿Qué es una función pura en el contexto del scope?',
        options: [
          'Una función que solo usa variables const',
          'Una función que no usa variables del scope exterior y devuelve siempre el mismo resultado para los mismos argumentos',
          'Una función que no tiene parámetros',
          'Una función declarada con function declaration',
        ],
        correctAnswer: 'Una función que no usa variables del scope exterior y devuelve siempre el mismo resultado para los mismos argumentos',
        correctFeedback: 'Exacto. Una función pura depende solo de sus parámetros, no modifica nada externo, y siempre devuelve el mismo resultado con los mismos inputs.',
        incorrectFeedback: 'Una función pura no es sobre const — es sobre comportamiento: no modifica estado externo y su resultado depende solo de sus parámetros.',
      },
      {
        question: '¿Cuál es la mejor práctica para declarar variables en una función larga?',
        options: [
          'Declarar todas las variables al inicio de la función para tenerlas organizadas',
          'Declarar cada variable cerca de donde se usa por primera vez',
          'Usar var para todas las variables locales',
          'Declarar variables en el scope global para mayor accesibilidad',
        ],
        correctAnswer: 'Declarar cada variable cerca de donde se usa por primera vez',
        correctFeedback: 'Exacto. Declarar cerca del uso hace el código más legible: no tienes que buscar al inicio para entender qué es la variable.',
        incorrectFeedback: 'Declarar todo al inicio era una convención de C y JavaScript antiguo. En JavaScript moderno, declara cerca del uso para claridad — el lector no tiene que saltar al inicio para entender una variable.',
      },
      {
        question: '¿Por qué usar const por defecto es una buena práctica?',
        options: [
          'Porque const hace el código más rápido',
          'Porque comunica al lector que esa variable no será reasignada, reduciendo la carga mental',
          'Porque const funciona en más navegadores que let',
          'Porque evita que JavaScript aplique hoisting',
        ],
        correctAnswer: 'Porque comunica al lector que esa variable no será reasignada, reduciendo la carga mental',
        correctFeedback: 'Correcto. const es un contrato de legibilidad: al leer el código sabes que ese valor no cambia, lo que simplifica el razonamiento sobre el programa.',
        incorrectFeedback: 'No es por rendimiento ni compatibilidad. const es una señal al lector: este valor no cambia. Reduce la carga cognitiva de seguir cambios de estado.',
      },
      {
        question: '¿Cuál describe mejor una función pura?',
        options: [
          'Una función que solo usa variables con const',
          'Una función que no modifica estado externo y siempre devuelve el mismo resultado para los mismos argumentos',
          'Una función sin parámetros',
          'Una función que se llama solo una vez',
        ],
        correctAnswer: 'Una función que no modifica estado externo y siempre devuelve el mismo resultado para los mismos argumentos',
        correctFeedback: 'Correcto. Una función pura es predecible: dado el mismo input, siempre da el mismo output, sin efectos secundarios en el exterior.',
        incorrectFeedback: 'Una función pura no depende de usar const. Es sobre comportamiento: no modifica nada fuera y es determinista — mismos argumentos, mismo resultado siempre.',
      },
    ],
  },
]

export const jsModule16: Module = {
  number: 16,
  title: 'Scope, hoisting y closures',
  level: 'nivel4',
  lessons: lessonsJsModule16,
}
