import type { Lesson, Module } from '@/types'

export const lessonsTsModule4: Lesson[] = [
  // ── Lección 23 ───────────────────────────────────────────────────────────
  {
    slug: 'tipar-variables',
    title: 'Tipar variables',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 1,
    description:
      'Aprende a escribir anotaciones de tipo en variables usando TypeScript.',
    explanation: `**Tipar una variable** significa agregar una anotación que le dice a TypeScript qué tipo de valor puede contener esa variable. Se escribe con dos puntos (\`:\`) después del nombre de la variable.

**Sintaxis básica**

\`\`\`ts
let nombreVariable: tipo = valor
\`\`\`

Ejemplos:

\`\`\`ts
let nombre: string = "Ana"
let edad: number = 28
let activo: boolean = true
\`\`\`

**¿Por qué tipar variables?**

1. **Claridad:** cualquiera que lea el código sabe exactamente qué tipo de dato espera esa variable.
2. **Protección:** TypeScript te avisa si intentas asignar un tipo incorrecto.
3. **Autocompletado:** el editor sugiere métodos y propiedades apropiados para ese tipo.

**Tipar vs no tipar (con inferencia)**

\`\`\`ts
// Con anotación explícita:
let nombre: string = "Ana"

// Con inferencia (TypeScript deduce el tipo):
let nombre = "Ana"  // TypeScript infiere string
\`\`\`

Ambos producen el mismo resultado de seguridad. La diferencia es si escribes el tipo explícitamente o dejas que TypeScript lo deduzca.

**Cuándo es útil tipar explícitamente**

1. **Al declarar sin asignar:**
\`\`\`ts
let resultado: number  // necesario porque no hay valor inicial
\`\`\`

2. **Para documentar la intención:**
\`\`\`ts
let descuento: number = 0  // quiero que siempre sea number, incluso si empieza en 0
\`\`\`

3. **Para aclarar cuando la inferencia podría ser ambigua:**
\`\`\`ts
let estado: "activo" | "inactivo" = "activo"  // tipo más específico que string
\`\`\`

**Tipar const**

Con \`const\`, TypeScript infiere el tipo literal del valor (no solo el tipo genérico):

\`\`\`ts
const nombre = "Ana"   // TypeScript infiere: "Ana" (tipo literal), no string
const precio = 99      // TypeScript infiere: 99 (tipo literal), no number

// Con anotación explícita, el tipo es más general:
const nombre: string = "Ana"   // tipo: string
\`\`\`

Esta distinción es sutil pero importante cuando trabajas con tipos específicos.`,
    codeExample: `// ── archivo: variables.ts ────────────────────────────────────────────────

// Anotaciones de tipo básicas
let nombre: string = "Sofía"
let edad: number = 22
let activa: boolean = true
let puntuacion: number = 0  // declara con tipo aunque empiece en 0

// Declarar sin asignar (aquí la anotación es necesaria)
let respuesta: string
let intentos: number
let completado: boolean

respuesta = "sí"
intentos = 3
completado = false

// Tipos en objetos simples
let usuario: { nombre: string; edad: number; email: string }
usuario = {
  nombre: "Carlos",
  edad: 35,
  email: "carlos@email.com"
}

console.log(usuario.nombre)  // → Carlos
console.log(usuario.edad)    // → 35

// Función con parámetros y retorno tipados
function crearSaludo(nombre: string, edad: number): string {
  return \`Hola, soy \${nombre} y tengo \${edad} años.\`
}

console.log(crearSaludo("Ana", 28))
// → Hola, soy Ana y tengo 28 años.

// Errores que TypeScript detecta:
// nombre = 42              // Error: number no es string
// edad = "veintidós"       // Error: string no es number
// activa = 1               // Error: number no es boolean`,
    keyPoints: [
      'La anotación de tipo se escribe con : después del nombre de la variable: let nombre: string.',
      'Tipar explícitamente es necesario cuando declaras sin asignar valor.',
      'Si asignas valor al declarar, TypeScript puede inferir el tipo automáticamente.',
      'Las anotaciones de tipo documentan la intención del programador y protegen contra errores.',
      'Con const, TypeScript infiere el tipo literal (no el genérico) a menos que anotes explícitamente.',
      'TypeScript detecta si intentas asignar un valor del tipo incorrecto a una variable tipada.',
    ],
    exercise: {
      description:
        'Crea un archivo variables.ts con: 1) 5 variables declaradas sin valor inicial con tipos explícitos (string, number, boolean, string, number), 2) asigna valores correctos a cada una, 3) intenta asignar un valor incorrecto a una y observa el error de TypeScript, 4) una función tipada que reciba algunas de esas variables y devuelva un resumen en string.',
      hint: 'Para declarar sin valor: let puntuacion: number. Luego asigna: puntuacion = 0. El error lo verás en el editor antes de compilar, o al compilar con tsc.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para declarar una variable tipada en TypeScript?',
        options: [
          'let nombre = string "Ana"',
          'string nombre = "Ana"',
          'let nombre: string = "Ana"',
          'let nombre: "Ana"',
        ],
        correctAnswer: 'let nombre: string = "Ana"',
        correctFeedback:
          'Correcto. La sintaxis de TypeScript es: let nombre: tipo = valor. El tipo va después del nombre, separado por dos puntos.',
        incorrectFeedback:
          'No es correcto. La sintaxis correcta para tipar una variable es: let nombre: string = "Ana". El tipo va después del nombre de la variable con dos puntos.',
      },
      {
        question: '¿Cuándo es obligatorio escribir la anotación de tipo en una variable?',
        options: [
          'Siempre, TypeScript lo requiere en todos los casos',
          'Nunca, TypeScript siempre puede inferir el tipo',
          'Cuando declaras la variable sin asignar un valor inicial',
          'Solo con const, no con let',
        ],
        correctAnswer: 'Cuando declaras la variable sin asignar un valor inicial',
        correctFeedback:
          'Correcto. Si declaras y asignas en la misma línea, TypeScript puede inferir el tipo. Pero si solo declaras sin valor (let x), debes anotar el tipo para que TypeScript sepa qué tipo esperar.',
        incorrectFeedback:
          'No es correcto. La anotación de tipo es necesaria cuando declaras sin asignar valor. Si asignas valor al declarar, TypeScript puede inferir el tipo automáticamente.',
      },
      {
        question: '¿Qué diferencia hay entre: const a = 42 y const a: number = 42 en TypeScript?',
        options: [
          'No hay ninguna diferencia práctica',
          'El primer caso infiere el tipo literal 42; el segundo infiere el tipo genérico number',
          'El primer caso produce un error; el segundo es correcto',
          'Solo el segundo permite reasignar el valor',
        ],
        correctAnswer: 'El primer caso infiere el tipo literal 42; el segundo infiere el tipo genérico number',
        correctFeedback:
          'Correcto. Con const y sin anotación, TypeScript infiere el tipo literal (42). Con anotación number, TypeScript usa el tipo genérico. Esta diferencia importa al trabajar con tipos literales y uniones.',
        incorrectFeedback:
          'No es correcto. Con const a = 42, TypeScript infiere el tipo literal "42" (el número exacto). Con const a: number = 42, TypeScript usa el tipo genérico "number". Es una diferencia sutil pero relevante.',
      },
    ],
  },

  // ── Lección 24 ───────────────────────────────────────────────────────────
  {
    slug: 'cuando-typescript-infiere-tipos',
    title: 'Cuándo TypeScript infiere tipos',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 2,
    description:
      'Aprende cuándo TypeScript puede entender el tipo automáticamente y cuándo no necesitas escribirlo manualmente.',
    explanation: `La inferencia de tipos es una de las características más convenientes de TypeScript. Entender cuándo ocurre te ayuda a escribir código más limpio sin sacrificar la seguridad.

**Casos donde TypeScript infiere correctamente**

**1. Al asignar un valor primitivo al declarar:**
\`\`\`ts
let nombre = "Ana"      // → string
let edad = 28           // → number
let activo = true       // → boolean
\`\`\`

**2. Al asignar un array:**
\`\`\`ts
let numeros = [1, 2, 3]           // → number[]
let palabras = ["hola", "mundo"]   // → string[]
\`\`\`

**3. Al asignar un objeto:**
\`\`\`ts
let persona = { nombre: "Ana", edad: 28 }
// TypeScript infiere: { nombre: string; edad: number }
\`\`\`

**4. En el retorno de una función:**
\`\`\`ts
function duplicar(n: number) {
  return n * 2  // TypeScript infiere: retorna number
}
\`\`\`

**5. En variables de ciclos for:**
\`\`\`ts
const lista = [1, 2, 3]
for (const item of lista) {
  // TypeScript sabe que item es number
  console.log(item.toFixed(2))
}
\`\`\`

**Casos donde TypeScript NO puede inferir (o infiere mal)**

**1. Declaración sin asignación:**
\`\`\`ts
let puntuacion          // TypeScript infiere: any — problemático
let puntuacion: number  // Mejor: escribe el tipo
\`\`\`

**2. Arrays vacíos:**
\`\`\`ts
let lista = []          // TypeScript infiere: never[] — puede generar problemas
let lista: string[] = []  // Mejor
\`\`\`

**3. Parámetros de funciones:**
\`\`\`ts
// Con strict, esto da error:
function saludar(nombre) { ... }  // Error: parámetro implícitamente tiene tipo 'any'

// Debes anotarlos:
function saludar(nombre: string) { ... }  // ✓
\`\`\`

**4. Cuando quieres un tipo más específico:**
\`\`\`ts
let estado = "activo"   // TypeScript infiere: string
let estado: "activo" | "inactivo" = "activo"  // Más específico y útil
\`\`\`

**La regla práctica**

Si TypeScript puede inferir correctamente y claramente → no escribas el tipo.
Si hay ambigüedad, la variable se declara sin valor, o quieres ser más específico → escríbelo.`,
    codeExample: `// ── archivo: inferencia-practica.ts ─────────────────────────────────────

// ✓ TypeScript infiere correctamente — no necesitas anotar
let nombre = "Sofía"
let precio = 29.99
let disponible = true
let categorias = ["tech", "hogar", "moda"]

// ✓ Inferencia en objetos
let producto = {
  nombre: "Laptop",
  precio: 850,
  stock: 5
}
// TypeScript sabe: { nombre: string; precio: number; stock: number }

// ✓ Inferencia en retorno de función
function calcularTotal(precio: number, cantidad: number) {
  return precio * cantidad  // TypeScript infiere: devuelve number
}
const total = calcularTotal(99, 3)  // total es number

// ✗ Casos donde SÍ debes anotar:

// 1. Declaración sin valor inicial
let contador: number         // necesario
let mensaje: string          // necesario
let habilitado: boolean      // necesario

contador = 0
mensaje = "listo"
habilitado = true

// 2. Array vacío
let tareas: string[] = []    // necesario para que TypeScript sepa qué contendrá
tareas.push("Estudiar TypeScript")
tareas.push("Practicar ejercicios")

// 3. Parámetros de función (siempre)
function formatearPrecio(precio: number, moneda: string): string {
  return \`\${moneda}\${precio.toFixed(2)}\`
}

console.log(formatearPrecio(29.99, "$"))  // → $29.99`,
    keyPoints: [
      'TypeScript infiere el tipo cuando declaras y asignas en la misma línea con un valor claro.',
      'La inferencia funciona para primitivos, arrays, objetos y retornos de funciones.',
      'Declarar sin asignar, o arrays vacíos, requieren anotación explícita.',
      'Los parámetros de funciones siempre necesitan anotación de tipo (con strict activado).',
      'Si la inferencia es correcta y clara, no escribas el tipo — el código es más limpio.',
      'Escribe el tipo cuando hay ambigüedad, cuando necesitas un tipo más específico, o cuando declaras sin valor.',
    ],
    exercise: {
      description:
        'Revisa este código y decide en cada línea si la anotación de tipo es necesaria o redundante: 1) let ciudad: string = "Madrid", 2) let poblacion: number = 3200000, 3) let lista: string[] = [], 4) let x: number (sin valor), 5) function suma(a: number, b: number): number { return a+b }. Explica tu razonamiento para cada caso.',
      hint: 'Una anotación es redundante cuando TypeScript puede inferirla solo. Es necesaria cuando TypeScript no puede saber el tipo. Los parámetros de función siempre la necesitan.',
    },
    quiz: [
      {
        question: '¿En cuál de estos casos TypeScript NO puede inferir el tipo correctamente?',
        options: [
          'let precio = 99.99',
          'let nombre = "Ana"',
          'let resultado (sin valor asignado)',
          'let activo = true',
        ],
        correctAnswer: 'let resultado (sin valor asignado)',
        correctFeedback:
          'Correcto. Cuando declaras sin asignar un valor, TypeScript no tiene información para inferir el tipo. Obtendrías implícitamente any, lo cual es problemático con strict activado.',
        incorrectFeedback:
          'No es correcto. TypeScript puede inferir correctamente el tipo de cualquier variable con un valor asignado. El problema es cuando se declara sin valor: let resultado — TypeScript no sabe qué tipo tendrá.',
      },
      {
        question: '¿Qué tipo infiere TypeScript para: let lista = []?',
        options: ['string[]', 'number[]', 'any[]', 'never[]'],
        correctAnswer: 'never[]',
        correctFeedback:
          'Correcto. TypeScript infiere never[] para un array vacío porque no tiene información sobre qué tipo contendrá. Es mejor anotar explícitamente: let lista: string[] = [].',
        incorrectFeedback:
          'No es correcto. Para un array vacío [], TypeScript infiere never[] porque no sabe qué tipo de elementos contendrá. Por eso es mejor usar una anotación explícita: let lista: string[] = [].',
      },
      {
        question: '¿Los parámetros de una función necesitan anotación de tipo en TypeScript con strict?',
        options: [
          'No, TypeScript puede inferirlos del contexto de llamada',
          'Solo si la función tiene más de 2 parámetros',
          'Sí, con strict activado los parámetros sin tipo generan un error',
          'Solo para funciones que devuelven un valor',
        ],
        correctAnswer: 'Sí, con strict activado los parámetros sin tipo generan un error',
        correctFeedback:
          'Correcto. Con noImplicitAny (activado por strict), los parámetros sin tipo generan un error porque TypeScript no puede inferirlos. Siempre anota los parámetros de tus funciones.',
        incorrectFeedback:
          'No es correcto. Con strict activado (que activa noImplicitAny), los parámetros de función sin anotación de tipo generan un error. TypeScript no puede inferir el tipo de un parámetro antes de que se llame la función.',
      },
    ],
  },

  // ── Lección 25 ───────────────────────────────────────────────────────────
  {
    slug: 'cuando-escribir-tipos-manualmente',
    title: 'Cuándo conviene escribir tipos manualmente',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 3,
    description:
      'Aprende en qué situaciones una anotación de tipo mejora la claridad o evita errores.',
    explanation: `Ya sabes que TypeScript puede inferir tipos automáticamente. Pero hay situaciones donde escribir el tipo explícitamente es mejor práctica, incluso si no es técnicamente obligatorio.

**Situación 1: Declarar sin valor inicial**

La más obvia — si no hay valor, TypeScript no puede inferir:

\`\`\`ts
let respuesta: string       // necesario
let intentos: number        // necesario
\`\`\`

**Situación 2: Arrays vacíos**

\`\`\`ts
let nombres: string[] = []  // TypeScript sabe qué tipo tendrá
let numeros: number[] = []
\`\`\`

**Situación 3: Cuando quieres documentar la intención**

Aunque TypeScript infiera \`number\`, puede ser útil ser explícito en código que otros leerán:

\`\`\`ts
// Más legible para otros desarrolladores:
function calcularPrecioFinal(precio: number, descuento: number): number {
  return precio - (precio * descuento / 100)
}
\`\`\`

**Situación 4: Tipos literales y uniones**

\`\`\`ts
// TypeScript infería string, pero quieres ser más específico:
let estado: "activo" | "inactivo" | "pendiente" = "activo"

// Sin la anotación, TypeScript inferiría string (menos seguro)
\`\`\`

**Situación 5: Variables cuyo tipo cambia de valor pero no de tipo**

\`\`\`ts
let puntuacion: number = 0
// ... (más adelante)
puntuacion = 100  // sigue siendo number ✓
\`\`\`

**Situación 6: Funciones de API pública**

Si escribes funciones que otros usan (tu equipo, una librería), ser explícito con los tipos hace la interfaz más clara:

\`\`\`ts
// Esta firma comunica exactamente qué recibe y qué devuelve:
function registrarPago(
  monto: number,
  moneda: string,
  referencia: string
): boolean {
  // ...
  return true
}
\`\`\`

**Situación 7: Objetos complejos**

Cuando la forma del objeto es importante, es mejor usar una interfaz o anotar explícitamente en lugar de confiar en la inferencia:

\`\`\`ts
// Inferencia menos clara:
let config = { timeout: 3000, reintentos: 3, ssl: true }

// Más explícito y mantenible:
interface Config {
  timeout: number
  reintentos: number
  ssl: boolean
}
let config: Config = { timeout: 3000, reintentos: 3, ssl: true }
\`\`\`

**El principio general**

Escribe el tipo cuando: no hay valor inicial, quieres ser más específico de lo que TypeScript infiere, la claridad para otros lectores es importante, o cuando hay riesgo de confusión.`,
    codeExample: `// ── archivo: cuando-tipar.ts ─────────────────────────────────────────────

// ✓ Caso 1: Sin valor inicial (necesario)
let nombre: string
let puntuacion: number
let completado: boolean

// ✓ Caso 2: Array vacío (necesario)
let tareas: string[] = []
let precios: number[] = []

// ✓ Caso 3: Tipo unión específico (mejor que string)
type EstadoPedido = "pendiente" | "procesando" | "enviado" | "entregado"
let estadoPedido: EstadoPedido = "pendiente"

// Esto sería un error:
// estadoPedido = "cancelado"  // Error: no es parte del tipo

// ✓ Caso 4: Funciones públicas (claridad para el equipo)
function buscarUsuario(id: number): string | null {
  // Quien lea la firma sabe exactamente qué recibe y qué devuelve
  const usuarios: Record<number, string> = {
    1: "Ana",
    2: "Carlos"
  }
  return usuarios[id] ?? null
}

// ✓ Caso 5: Objetos con estructura importante
interface Factura {
  numero: string
  fecha: string
  monto: number
  pagado: boolean
}

let factura: Factura = {
  numero: "F-2024-001",
  fecha: "2024-01-15",
  monto: 250.00,
  pagado: false
}

// TypeScript verifica que el objeto tiene todas las propiedades de Factura`,
    keyPoints: [
      'Escribe el tipo cuando declaras sin valor inicial — TypeScript no puede inferirlo.',
      'Para arrays vacíos, anota el tipo para que TypeScript sepa qué elementos tendrá: string[] = [].',
      'Los tipos literales y uniones (como "activo" | "inactivo") son más seguros que solo string.',
      'En funciones de API pública, los tipos explícitos documentan la interfaz para el equipo.',
      'Para objetos complejos, una interfaz o anotación explícita es más mantenible que confiar en la inferencia.',
      'La regla: si la anotación agrega claridad o previene confusión, escríbela, aunque sea opcional.',
    ],
    exercise: {
      description:
        'Crea una función crearCuenta(nombre: string, email: string, plan: "gratuito" | "basico" | "premium"): objeto. La función debe devolver un objeto con esas propiedades más: fechaCreacion (string con la fecha actual) y activa (boolean en true). Define una interfaz Cuenta con todos esos campos antes de la función.',
      hint: 'Usa type o interface para definir Cuenta. La función puede usar new Date().toISOString() para la fecha. El tipo de retorno debe ser: Cuenta.',
    },
    quiz: [
      {
        question: '¿Por qué es mejor usar "activo" | "inactivo" que solo string para el estado de un usuario?',
        options: [
          'Porque string es más lento que los tipos literales',
          'Porque los tipos literales son más pequeños en tamaño',
          'Porque TypeScript solo verifica los valores exactos permitidos, evitando valores inválidos como "activado"',
          'No hay diferencia práctica entre ambos',
        ],
        correctAnswer: 'Porque TypeScript solo verifica los valores exactos permitidos, evitando valores inválidos como "activado"',
        correctFeedback:
          'Correcto. Con "activo" | "inactivo", TypeScript verifica que el valor sea exactamente uno de esos strings. Con solo string, podrías asignar "activado" por error sin que TypeScript lo detecte.',
        incorrectFeedback:
          'No es correcto. El beneficio de los tipos literales es que TypeScript verifica que el valor sea exactamente uno de los permitidos. Con string, cualquier texto es válido incluyendo valores incorrectos.',
      },
      {
        question: '¿En cuál de estos casos es recomendable escribir el tipo aunque no sea obligatorio?',
        options: [
          'let x = 5 (inferencia clara)',
          'let activo = true (inferencia clara)',
          'En funciones públicas que usa el equipo, para documentar la interfaz',
          'let nombre = "Ana" (inferencia clara)',
        ],
        correctAnswer: 'En funciones públicas que usa el equipo, para documentar la interfaz',
        correctFeedback:
          'Correcto. En funciones que otros usan, los tipos explícitos documentan qué recibe la función y qué devuelve, haciendo la interfaz más clara sin necesidad de leer la implementación.',
        incorrectFeedback:
          'No es correcto. En variables con valores asignados simples, la inferencia es suficiente. En funciones públicas del equipo, escribir los tipos documenta la interfaz y facilita el uso correcto.',
      },
    ],
  },

  // ── Lección 26 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-tipar-variables',
    title: 'Errores comunes al tipar variables',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 4,
    description:
      'Aprende a reconocer y corregir errores cuando una variable recibe un tipo incorrecto.',
    explanation: `Tipar variables es sencillo, pero hay errores frecuentes que aparecen cuando empiezas. Reconocerlos y entender el mensaje de TypeScript es clave para avanzar.

**Error 1: Asignar un tipo incorrecto**

\`\`\`ts
let edad: number = "veintiocho"
// Error TS2322: Type 'string' is not assignable to type 'number'
\`\`\`

El error TS2322 (type mismatch) es el más común. Dice: "el tipo que intentas asignar no coincide con el tipo declarado".

**Error 2: Mayúsculas en los tipos**

\`\`\`ts
let nombre: String = "Ana"  // funciona pero no es correcto
let nombre: string = "Ana"  // ✓ correcto
\`\`\`

Aunque \`String\` con mayúscula funciona técnicamente, no es la práctica correcta. Usa siempre los tipos primitivos en minúsculas.

**Error 3: Tipos en parámetros de funciones**

\`\`\`ts
function saludar(nombre) { ... }  // Error con strict: implicit any
\`\`\`

Con strict activado, los parámetros sin tipo generan un error. Siempre anota los parámetros.

**Error 4: Confundir el tipo de un objeto**

\`\`\`ts
let precio: string = {
  valor: 99,
  moneda: "USD"
}
// Error: Type '{ valor: number; moneda: string }' is not assignable to type 'string'
\`\`\`

Si el valor es un objeto, el tipo también debe ser un objeto (interface o tipo inline).

**Error 5: No inicializar una variable tipada antes de usarla**

\`\`\`ts
let puntuacion: number
console.log(puntuacion)  // Error: Variable 'puntuacion' is used before being assigned
\`\`\`

Declara y asigna o usa un valor inicial:

\`\`\`ts
let puntuacion: number = 0  // ✓
\`\`\`

**Error 6: Asignar null a una variable que no permite null**

\`\`\`ts
let nombre: string = null
// Error: Type 'null' is not assignable to type 'string'
// (con strictNullChecks activado)
\`\`\`

Si la variable puede ser null:

\`\`\`ts
let nombre: string | null = null  // ✓
\`\`\`

**Cómo leer los errores de tipo**

La clave está en entender el mensaje:
- **TS2322:** tipo incorrecto asignado
- **TS2345:** argumento de tipo incorrecto en una llamada a función
- **TS7006:** parámetro implícitamente tiene tipo 'any'

Lee: "Type X is not assignable to type Y" → X es lo que intentas asignar, Y es lo que se espera.`,
    codeExample: `// ── archivo: errores-variables.ts ────────────────────────────────────────

// Error 1: tipo incorrecto
// let nota: number = "diez"  // ✗
let nota: number = 10          // ✓

// Error 2: objeto en lugar de primitivo
// let estado: boolean = { activo: true }  // ✗
let estado: boolean = true                  // ✓

// Error 3: null sin tipo unión
// let email: string = null  // ✗ con strictNullChecks
let email: string | null = null              // ✓

// Error 4: parámetros sin tipo (con strict)
// function saludar(nombre) { ... }  // ✗
function saludar(nombre: string): string {   // ✓
  return \`Hola, \${nombre}\`
}

// Error 5: variable usada antes de inicializar
let contador: number = 0  // ✓ inicializa con valor
// (no lo usamos antes de asignar)
contador += 1
console.log(contador)  // → 1

// Ejemplo completo con buenas prácticas:
interface Tarea {
  titulo: string
  completada: boolean
  prioridad: number
}

let tarea: Tarea = {
  titulo: "Aprender TypeScript",
  completada: false,
  prioridad: 1
}

// TypeScript te protege:
// tarea.titulo = 42        // Error: number no es string
// tarea.completada = "no"  // Error: string no es boolean
// tarea.nueva = "test"     // Error: propiedad no existe en Tarea`,
    keyPoints: [
      'TS2322 es el error más común: significa que intentas asignar un tipo donde se espera otro.',
      'Usa siempre tipos en minúsculas: string, number, boolean (no String, Number, Boolean).',
      'Con strict, los parámetros de función sin tipo generan TS7006 (implicitly any).',
      'Si una variable puede ser null, declárala como: string | null, no solo string.',
      'Inicializa las variables tipadas con un valor antes de usarlas para evitar el error "used before assigned".',
      'Lee el mensaje de error: "Type X is not assignable to type Y" te dice exactamente qué está mal.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los 5 errores en este código: let nombre: number = "Ana"; let activo: boolean = 1; function procesar(dato) { return dato }; let precio: string = { valor: 100 }; let resultado: number; console.log(resultado + 1). Para cada error, anota qué código TS aparece y cómo lo corregiste.',
      hint: 'Error 1: string no es number. Error 2: number no es boolean. Error 3: parámetro sin tipo. Error 4: objeto no es string. Error 5: variable usada antes de asignarse.',
    },
    quiz: [
      {
        question: '¿Qué significa el error TS2322 en TypeScript?',
        options: [
          'Un módulo no se puede importar',
          'Se está intentando asignar un tipo donde se espera otro tipo diferente',
          'Una variable se usa antes de ser declarada',
          'Una función no tiene tipo de retorno',
        ],
        correctAnswer: 'Se está intentando asignar un tipo donde se espera otro tipo diferente',
        correctFeedback:
          'Correcto. TS2322 es el error "Type X is not assignable to type Y". Significa que el tipo del valor que asignas no coincide con el tipo declarado de la variable.',
        incorrectFeedback:
          'No es correcto. TS2322 es un error de asignación de tipo: "Type X is not assignable to type Y". Ocurre cuando intentas asignar un valor de tipo incorrecto a una variable tipada.',
      },
      {
        question: '¿Cómo se corrige este error?\n\nlet email: string = null',
        options: [
          'let email: string = ""',
          'let email: String = null',
          'let email: string | null = null',
          'let email = null',
        ],
        correctAnswer: 'let email: string | null = null',
        correctFeedback:
          'Correcto. Para que una variable pueda ser null, debes incluirlo en el tipo: string | null. Así TypeScript sabe que es válido que tenga null.',
        incorrectFeedback:
          'No es correcto. Si la variable puede ser null, debes declarar el tipo como string | null. Usar String con mayúscula no resuelve el problema, y let email = null sería inferido como null (no string | null).',
      },
      {
        question: '¿Qué error genera este código con strict?\n\nfunction calcular(valor) { return valor * 2 }',
        options: [
          'TS2322: tipo incorrecto',
          'TS7006: parámetro implícitamente tiene tipo any',
          'TS2345: argumento incorrecto',
          'No genera ningún error',
        ],
        correctAnswer: 'TS7006: parámetro implícitamente tiene tipo any',
        correctFeedback:
          'Correcto. Con noImplicitAny (activado por strict), los parámetros de función sin tipo generan TS7006. Debes anotar: function calcular(valor: number).',
        incorrectFeedback:
          'No es correcto. Con strict activado, que incluye noImplicitAny, los parámetros sin tipo generan el error TS7006: "Parameter implicitly has an any type". Solución: function calcular(valor: number).',
      },
    ],
  },

  // ── Lección 27 ───────────────────────────────────────────────────────────
  {
    slug: 'let-const-tipos',
    title: 'let, const y tipos',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 5,
    description:
      'Aprende cómo let y const se comportan con la inferencia de tipos y valores literales.',
    explanation: `En JavaScript, la diferencia entre \`let\` y \`const\` es simple: \`let\` permite reasignar el valor, \`const\` no. En TypeScript, esta diferencia tiene un impacto interesante en cómo se infieren los tipos.

**let y tipos**

Con \`let\`, TypeScript infiere el tipo genérico del valor:

\`\`\`ts
let nombre = "Ana"     // TypeScript infiere: string (no "Ana" específicamente)
let edad = 28          // TypeScript infiere: number (no 28 específicamente)
\`\`\`

¿Por qué? Porque con \`let\`, el valor puede cambiar. Así que TypeScript usa el tipo más general.

Puedes reasignar a cualquier string o number válido:

\`\`\`ts
nombre = "Carlos"  // ✓ sigue siendo string
nombre = "Sofía"   // ✓ sigue siendo string
// nombre = 42     // Error: no es string
\`\`\`

**const y tipos literales**

Con \`const\`, TypeScript infiere el tipo literal — el valor exacto:

\`\`\`ts
const nombre = "Ana"  // TypeScript infiere: "Ana" (tipo literal, no string)
const edad = 28        // TypeScript infiere: 28 (tipo literal, no number)
const activo = true    // TypeScript infiere: true (tipo literal, no boolean)
\`\`\`

¿Por qué? Porque con \`const\` el valor nunca va a cambiar, así que puede ser más específico.

**¿Esto qué significa en la práctica?**

La diferencia importa cuando trabajas con tipos unión o literales:

\`\`\`ts
type Direccion = "norte" | "sur" | "este" | "oeste"

let dir1 = "norte"         // tipo: string — no compatible con Direccion directamente
const dir2 = "norte"       // tipo: "norte" — compatible con Direccion

let dir3: Direccion = "norte"  // tipo: Direccion — correcto
\`\`\`

**const no significa inmutable en objetos**

Con objetos y arrays, \`const\` impide reasignar la referencia, pero no las propiedades:

\`\`\`ts
const persona = { nombre: "Ana", edad: 28 }
persona.nombre = "Carlos"  // ✓ se puede cambiar la propiedad
// persona = { nombre: "Luis", edad: 30 }  // Error: no puedes reasignar la variable
\`\`\`

TypeScript infiere el objeto como \`{ nombre: string; edad: number }\`, no con tipos literales.

**¿Cuándo usar let vs const?**

- **const:** para valores que no van a cambiar (la mayoría de los casos)
- **let:** para valores que sí cambiarán (contadores, estados, resultados acumulativos)

En TypeScript moderno, se recomienda usar \`const\` por defecto y cambiar a \`let\` solo cuando sea necesario.`,
    codeExample: `// ── archivo: let-const.ts ────────────────────────────────────────────────

// let: tipo genérico
let nombreUsuario = "Sofía"    // string
let puntos = 0                  // number
let estaLogueado = false        // boolean

nombreUsuario = "Carlos"        // ✓
puntos = 100                    // ✓
// puntos = "cien"              // Error: string no es number

// const: tipo literal
const PI = 3.14159              // 3.14159 (literal, no number)
const NOMBRE_APP = "RonaldoScript" // "RonaldoScript" (literal, no string)
const MAX_INTENTOS = 3          // 3 (literal, no number)

// No puedes reasignar una const:
// PI = 3.14  // Error: Cannot assign to 'PI' because it is a constant

// const con objetos: las propiedades sí pueden cambiar
const configuracion = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true
}
configuracion.tema = "claro"  // ✓ se puede cambiar la propiedad
// configuracion = { tema: "claro" }  // Error: no puedes reasignar

// const con arrays: el array sí puede mutarse
const tareas = ["Tarea 1", "Tarea 2"]
tareas.push("Tarea 3")  // ✓ se puede mutar el array
// tareas = ["Nueva tarea"]  // Error: no puedes reasignar

// Tipo literal vs genérico
type Tema = "claro" | "oscuro"
const temaElegido = "oscuro"    // tipo: "oscuro" (compatible con Tema)
let temaActual = "oscuro"       // tipo: string (no directamente compatible con Tema)
let temaCorregido: Tema = "oscuro"  // ✓ anotación explícita`,
    keyPoints: [
      'let infiere el tipo genérico (string, number, boolean) porque el valor puede cambiar.',
      'const infiere el tipo literal ("Ana", 28, true) porque el valor no puede cambiar.',
      'Con const de objetos, las propiedades sí pueden mutar — solo la referencia es constante.',
      'Los tipos literales son más específicos y útiles con tipos unión como "norte" | "sur".',
      'Usa const por defecto y let solo cuando necesites reasignar el valor.',
      'La diferencia entre let y const en tipos importa principalmente con tipos literales y uniones.',
    ],
    exercise: {
      description:
        'Crea variables con const y let. Para cada una, anota en un comentario qué tipo infiere TypeScript. Luego crea un tipo unión: type Rol = "admin" | "usuario" | "moderador". Intenta asignar ese tipo con let y con const y observa la diferencia en cómo TypeScript lo maneja.',
      hint: 'En VS Code, pasa el cursor sobre la variable para ver el tipo inferido. Con const rol = "admin", TypeScript infiere "admin". Con let rol = "admin", TypeScript infiere string. Solo con anotación explícita: let rol: Rol = "admin" funciona directamente.',
    },
    quiz: [
      {
        question: '¿Qué tipo infiere TypeScript para: const MAX = 100?',
        options: ['number', 'integer', '100 (tipo literal)', 'any'],
        correctAnswer: '100 (tipo literal)',
        correctFeedback:
          'Correcto. Con const, TypeScript infiere el tipo literal 100, no el tipo genérico number. Esto es porque el valor de una const nunca puede cambiar.',
        incorrectFeedback:
          'No es correcto. Con const, TypeScript infiere el tipo literal del valor: 100 (no number genérico). Con let MAX = 100, TypeScript inferiría number.',
      },
      {
        question: '¿Puede cambiar una propiedad de un objeto declarado con const?',
        options: [
          'No, const hace todo el objeto inmutable',
          'Sí, const solo impide reasignar la variable, no cambiar sus propiedades',
          'Solo si la propiedad es de tipo string',
          'Solo con el operador as en TypeScript',
        ],
        correctAnswer: 'Sí, const solo impide reasignar la variable, no cambiar sus propiedades',
        correctFeedback:
          'Correcto. const previene que la variable apunte a otro objeto, pero las propiedades del objeto sí pueden cambiar. Para inmutabilidad real, se necesita Object.freeze() o tipos de solo lectura.',
        incorrectFeedback:
          'No es correcto. const solo previene que la variable sea reasignada a otro valor. Las propiedades de un objeto declarado con const sí pueden modificarse.',
      },
      {
        question: '¿Qué se recomienda en TypeScript moderno: usar const o let por defecto?',
        options: [
          'let, porque es más flexible',
          'const, y usar let solo cuando se necesite reasignar',
          'var, que es compatible con todos los navegadores',
          'No importa, es solo una cuestión de estilo',
        ],
        correctAnswer: 'const, y usar let solo cuando se necesite reasignar',
        correctFeedback:
          'Correcto. La convención moderna es usar const por defecto. Cuando necesitas reasignar el valor, cambias a let. Esto hace el código más predecible y fácil de entender.',
        incorrectFeedback:
          'No es correcto. La práctica recomendada en TypeScript (y JavaScript moderno) es usar const por defecto, y solo usar let cuando necesites reasignar el valor.',
      },
    ],
  },

  // ── Lección 28 ───────────────────────────────────────────────────────────
  {
    slug: 'any-vs-tipos-seguros',
    title: 'Diferencia entre any y tipos seguros',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 6,
    description:
      'Compara el uso de any con tipos específicos y entiende por qué los tipos seguros ayudan más.',
    explanation: `Esta lección compara directamente el código con \`any\` versus el código con tipos específicos. Ver las diferencias concretas te ayuda a entender por qué evitar \`any\` en la práctica.

**Escenario: sistema de notas de estudiantes**

Imagina que tienes una función que procesa la nota de un estudiante.

**Con any (código sin seguridad):**

\`\`\`ts
function procesarNota(nota: any): any {
  return nota * 10 / 10  // parecería correcto...
}

procesarNota(8.5)      // → 8.5 ✓
procesarNota("ocho")   // → NaN (error silencioso, TypeScript no avisa)
procesarNota(null)     // → 0 (comportamiento inesperado, TypeScript no avisa)
\`\`\`

**Con tipos seguros:**

\`\`\`ts
function procesarNota(nota: number): number {
  return Math.round(nota * 10) / 10
}

procesarNota(8.5)      // → 8.5 ✓
// procesarNota("ocho") // Error: string no es number — detectado antes de ejecutar
// procesarNota(null)   // Error: null no es number — detectado antes de ejecutar
\`\`\`

**Lo que pierdes con any**

1. **Autocompletado:** el editor no sabe qué métodos ofrecer
2. **Detección de errores:** TypeScript no puede avisar de nada
3. **Documentación implícita:** quien lea la función no sabe qué espera ni qué devuelve
4. **Refactorización segura:** si cambias el tipo del parámetro, TypeScript no puede guiarte

**Lo que ganas con tipos específicos**

1. **Autocompletado preciso:** el editor sugiere solo los métodos correctos
2. **Errores detectados temprano:** antes de que lleguen al usuario
3. **Documentación gratis:** la firma de la función explica todo
4. **Confianza al refactorizar:** TypeScript guía los cambios necesarios

**La excusa más común para usar any**

"No sé exactamente qué tipo tendrá este dato".

Respuesta: si realmente no sabes el tipo, usa \`unknown\` en lugar de \`any\`. \`unknown\` te protege obligándote a verificar el tipo antes de usar el valor.

**Cuándo any es aceptable**

- Migración gradual de JavaScript a TypeScript
- Prototipado muy rápido donde la corrección no importa aún
- Código que interactúa con sistemas externos no tipados (pero aquí \`unknown\` suele ser mejor)

**La mentalidad correcta**

Cuando sientas la tentación de escribir \`any\`, párate un momento y pregúntate:
- ¿Puedo ser más específico? (types, interfaces, uniones)
- ¿Debería usar \`unknown\` si genuinamente no conozco el tipo?
- ¿Estoy intentando silenciar un error que debería resolver?`,
    codeExample: `// ── archivo: any-vs-tipos.ts ─────────────────────────────────────────────

// ── Con any: sin protección ───────────────────────────────────────────────
function calcularBonusAny(salario: any, porcentaje: any): any {
  return salario * (porcentaje / 100)
}

// TypeScript no detecta ninguno de estos errores:
calcularBonusAny(3000, 10)         // → 300 ✓
calcularBonusAny("3000", 10)       // → 300 (string convertido, funciona por accidente)
calcularBonusAny(3000, "diez")     // → NaN (falla silenciosamente)
calcularBonusAny(null, 10)         // → 0 (resultado inesperado, sin error)

// ── Con tipos seguros: con protección ────────────────────────────────────
function calcularBonus(salario: number, porcentaje: number): number {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error("El porcentaje debe estar entre 0 y 100")
  }
  return salario * (porcentaje / 100)
}

calcularBonus(3000, 10)       // → 300 ✓
// calcularBonus("3000", 10)  // Error: string no es number ✓ (detectado)
// calcularBonus(3000, "diez") // Error: string no es number ✓ (detectado)
// calcularBonus(null, 10)    // Error: null no es number ✓ (detectado)

// ── Con unknown: cuando realmente no conoces el tipo ─────────────────────
function registrarEvento(datos: unknown): void {
  // unknown obliga a verificar antes de usar
  if (typeof datos === "string") {
    console.log("Evento:", datos.toUpperCase())
  } else if (typeof datos === "object" && datos !== null) {
    console.log("Evento objeto:", JSON.stringify(datos))
  }
}

registrarEvento("click")
registrarEvento({ tipo: "keydown", tecla: "Enter" })`,
    keyPoints: [
      'Con any, TypeScript no detecta errores — el código se comporta como JavaScript sin tipos.',
      'Con tipos específicos, TypeScript detecta errores antes de ejecutar el código.',
      'any elimina el autocompletado preciso, la detección de errores y la documentación implícita.',
      'Si genuinamente no conoces el tipo, usa unknown en lugar de any — es más seguro.',
      'any es aceptable en migraciones o prototipado, pero no como solución permanente.',
      'Antes de escribir any, pregúntate: ¿puedo ser más específico? ¿Debería usar unknown?',
    ],
    exercise: {
      description:
        'Toma esta función con any y reescríbela con tipos seguros: function procesarPago(monto: any, metodo: any, moneda: any): any { return { aprobado: monto > 0, resumen: metodo + " " + moneda } }. Define tipos apropiados para cada parámetro, incluye un tipo de retorno, y usa una interfaz para el objeto que devuelve la función.',
      hint: 'monto debe ser number, metodo podría ser "tarjeta" | "transferencia" | "efectivo", moneda podría ser string. Crea una interfaz ResultadoPago con: aprobado: boolean y resumen: string.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal desventaja de usar any en lugar de un tipo específico?',
        options: [
          'El código con any es más lento',
          'TypeScript no puede detectar errores de tipo para esa variable',
          'any no existe en versiones modernas de TypeScript',
          'El código con any no se puede compilar',
        ],
        correctAnswer: 'TypeScript no puede detectar errores de tipo para esa variable',
        correctFeedback:
          'Correcto. Con any, TypeScript desactiva la verificación de tipos. No puede detectar si pasas un string donde se espera un number, ni ofrecerte autocompletado preciso.',
        incorrectFeedback:
          'No es correcto. La principal desventaja de any es que desactiva la verificación de tipos: TypeScript no puede detectar errores, no ofrece autocompletado preciso y no documenta la interfaz.',
      },
      {
        question: '¿Qué alternativa más segura existe cuando genuinamente no conoces el tipo de un valor?',
        options: ['Object', 'void', 'unknown', 'never'],
        correctAnswer: 'unknown',
        correctFeedback:
          'Correcto. unknown es más seguro que any porque obliga a verificar el tipo antes de usar el valor. TypeScript no te deja hacer nada con un unknown sin comprobar primero qué es.',
        incorrectFeedback:
          'No es correcto. La alternativa más segura cuando no conoces el tipo es unknown. A diferencia de any, unknown te obliga a verificar el tipo antes de usar el valor.',
      },
    ],
  },

  // ── Lección 29 ───────────────────────────────────────────────────────────
  {
    slug: 'type-annotations-objetos-simples',
    title: 'Type annotations en objetos simples',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 7,
    description:
      'Aprende a agregar tipos básicos a objetos pequeños sin entrar todavía en interfaces o type aliases avanzados.',
    explanation: `Los objetos son una parte fundamental de JavaScript y TypeScript. Puedes anotar el tipo de un objeto directamente en la declaración de la variable, sin necesidad de crear una interfaz separada.

**Anotación de tipo inline para objetos**

\`\`\`ts
let usuario: { nombre: string; edad: number; email: string }

usuario = {
  nombre: "Ana",
  edad: 28,
  email: "ana@email.com"
}
\`\`\`

La anotación define la "forma" del objeto: qué propiedades tiene y de qué tipo es cada una.

**Propiedades opcionales**

Puedes marcar una propiedad como opcional con \`?\`:

\`\`\`ts
let producto: { nombre: string; precio: number; descripcion?: string }

producto = { nombre: "Laptop", precio: 850 }  // ✓ descripcion es opcional
producto = { nombre: "Mouse", precio: 25, descripcion: "USB inalámbrico" }  // ✓
\`\`\`

**Verificaciones que TypeScript hace con objetos**

1. **Propiedades obligatorias:** si una propiedad no tiene \`?\`, debe estar presente.
2. **Tipos de propiedades:** cada propiedad debe tener el tipo correcto.
3. **Propiedades extras:** por defecto, TypeScript no permite propiedades adicionales no declaradas.

\`\`\`ts
let config: { host: string; puerto: number }

// config = { host: "localhost" }  // Error: falta 'puerto'
// config = { host: "localhost", puerto: 3000, extra: true }  // Error: propiedad no declarada
config = { host: "localhost", puerto: 3000 }  // ✓
\`\`\`

**Cuándo usar anotación inline vs interfaz**

- **Anotación inline:** para objetos simples usados una sola vez o en contextos pequeños.
- **Interfaz o type alias:** cuando el mismo "tipo de objeto" se usa en múltiples lugares.

En las próximas lecciones verás interfaces. Por ahora, la anotación inline es perfecta para empezar.

**Objetos en funciones**

Puedes anotar el tipo de objeto directamente en los parámetros:

\`\`\`ts
function mostrarProducto(producto: { nombre: string; precio: number }): void {
  console.log(\`\${producto.nombre}: $\${producto.precio}\`)
}
\`\`\`

Esto es conveniente para funciones que usan objetos simples sin necesitar una interfaz completa.`,
    codeExample: `// ── archivo: objetos.ts ──────────────────────────────────────────────────

// Objeto con anotación inline
let estudiante: {
  nombre: string
  edad: number
  nota: number
  aprobado: boolean
}

estudiante = {
  nombre: "Sofía",
  edad: 22,
  nota: 8.5,
  aprobado: true
}

console.log(\`\${estudiante.nombre}: \${estudiante.nota}\`)
// → Sofía: 8.5

// Objeto con propiedad opcional
let perfil: {
  nombre: string
  email: string
  telefono?: string  // opcional
}

perfil = { nombre: "Carlos", email: "carlos@email.com" }              // ✓
perfil = { nombre: "Ana", email: "ana@email.com", telefono: "555-1234" }  // ✓

// Función que recibe objeto con tipo inline
function calcularDescuento(
  producto: { nombre: string; precio: number },
  pct: number
): string {
  const final = producto.precio * (1 - pct / 100)
  return \`\${producto.nombre}: $\${final.toFixed(2)}\`
}

console.log(calcularDescuento({ nombre: "Laptop", precio: 850 }, 10))
// → Laptop: $765.00

// Verificación de propiedades
let config: { host: string; puerto: number; ssl: boolean }
// config = { host: "localhost" }  // Error: faltan puerto y ssl
config = { host: "localhost", puerto: 3000, ssl: false }  // ✓`,
    keyPoints: [
      'Puedes anotar el tipo de un objeto inline con: let x: { propiedad: tipo; otra: tipo }.',
      'Las propiedades marcadas con ? son opcionales — no es necesario incluirlas.',
      'TypeScript verifica que el objeto tenga todas las propiedades obligatorias y los tipos correctos.',
      'Las propiedades no declaradas en el tipo generan error al asignar un objeto literal.',
      'Para objetos simples de un solo uso, la anotación inline es perfecta.',
      'Cuando necesitas el mismo tipo en varios lugares, usa interfaces (próximo módulo).',
    ],
    exercise: {
      description:
        'Crea 3 variables con anotación de tipo inline para: 1) un producto con nombre (string), precio (number) y disponible (boolean), 2) una dirección con calle (string), ciudad (string) y codigoPostal (number), y 3) una tarea con titulo (string), completada (boolean) y prioridad opcional (number). Asigna valores válidos a cada una y muéstralos con console.log.',
      hint: 'Para la propiedad opcional: prioridad?: number. Para mostrar: console.log(producto.nombre, "$" + producto.precio). Las propiedades opcionales no necesitan estar en el objeto asignado.',
    },
    quiz: [
      {
        question: '¿Cómo se marca una propiedad como opcional en la anotación de tipo de un objeto?',
        options: [
          'Con ! después del nombre: nombre!: string',
          'Con ? antes del tipo: nombre: ?string',
          'Con ? después del nombre: nombre?: string',
          'Con optional antes del nombre: optional nombre: string',
        ],
        correctAnswer: 'Con ? después del nombre: nombre?: string',
        correctFeedback:
          'Correcto. En TypeScript, las propiedades opcionales se marcan con ? justo después del nombre de la propiedad: { nombre?: string }.',
        incorrectFeedback:
          'No es correcto. En TypeScript, la propiedad opcional se escribe con ? después del nombre: nombre?: string. El signo va entre el nombre y los dos puntos.',
      },
      {
        question: '¿Qué ocurre si intentas asignar un objeto con una propiedad extra no declarada en el tipo?',
        options: [
          'TypeScript ignora las propiedades extras',
          'TypeScript agrega la propiedad extra al tipo automáticamente',
          'TypeScript genera un error: "Object literal may only specify known properties"',
          'La propiedad extra se convierte en optional automáticamente',
        ],
        correctAnswer: 'TypeScript genera un error: "Object literal may only specify known properties"',
        correctFeedback:
          'Correcto. Por defecto, TypeScript no permite propiedades extras en objetos literales. Si el tipo tiene { nombre: string }, no puedes asignar { nombre: "Ana", extra: true }.',
        incorrectFeedback:
          'No es correcto. TypeScript genera un error cuando un objeto literal tiene propiedades no declaradas en el tipo. El mensaje es: "Object literal may only specify known properties".',
      },
    ],
  },

  // ── Lección 30 ───────────────────────────────────────────────────────────
  {
    slug: 'buenas-practicas-variables-tipadas',
    title: 'Buenas prácticas al declarar variables tipadas',
    module: 'Variables y anotaciones de tipo',
    moduleNumber: 4,
    order: 8,
    description:
      'Aprende prácticas simples para declarar variables con tipos claros, útiles y mantenibles.',
    explanation: `Tipar variables no es solo una cuestión de "hacer funcionar TypeScript". Hay prácticas que hacen el código más legible, mantenible y fácil de trabajar para ti y para tu equipo.

**Práctica 1: Usa const por defecto**

Ya lo vimos, pero vale repetirlo. \`const\` comunica la intención: "este valor no cambia".

\`\`\`ts
const MAX_REINTENTOS = 3         // claramente una constante
const NOMBRE_APP = "RonaldoScript"
let contador = 0                  // sí necesita cambiar
\`\`\`

**Práctica 2: Nombres descriptivos que hacen el tipo obvio**

Un buen nombre puede reducir la necesidad de leer el tipo:

\`\`\`ts
// Nombre descriptivo → tipo inferido es obvio
const nombreEstudiante = "Ana"
const precioProducto = 29.99
const estaLogueado = true

// Nombre malo → el tipo no ayuda a entender
const x: string = "Ana"  // ¿qué es x?
const n: number = 29.99   // ¿qué número es?
\`\`\`

**Práctica 3: Inicializa las variables con un valor significativo**

Evita declarar sin valor cuando puedes inicializar con un valor neutro:

\`\`\`ts
// ✗ Menos claro
let total: number
let nombre: string
let items: string[]

// ✓ Más claro y listo para usar
let total: number = 0
let nombre: string = ""
let items: string[] = []
\`\`\`

**Práctica 4: No repitas el tipo cuando la inferencia es obvia**

\`\`\`ts
// Redundante (TypeScript ya lo sabe):
let nombre: string = "Ana"  // la inferencia sería suficiente

// Solo útil cuando declaras sin valor:
let nombre: string  // aquí sí es necesario
\`\`\`

**Práctica 5: Usa tipos literales y uniones para estados**

\`\`\`ts
// ✗ Demasiado general
let estado: string = "activo"

// ✓ Más específico y seguro
type EstadoCuenta = "activo" | "suspendido" | "eliminado"
let estado: EstadoCuenta = "activo"
\`\`\`

**Práctica 6: Documenta las constantes importantes**

\`\`\`ts
// Constante con nombre claro (no necesita comentario)
const MAX_INTENTOS_LOGIN = 3

// Si el valor no es obvio, explica el porqué
const TIMEOUT_MS = 5000  // 5 segundos para evitar bloquear la UI
\`\`\`

**Práctica 7: Agrupa variables relacionadas en objetos**

En lugar de muchas variables sueltas:

\`\`\`ts
// ✗ Variables sueltas
let nombreUsuario: string
let edadUsuario: number
let emailUsuario: string

// ✓ Agrupadas en objeto (más limpio)
interface Usuario {
  nombre: string
  edad: number
  email: string
}
let usuario: Usuario = { nombre: "Ana", edad: 28, email: "ana@email.com" }
\`\`\``,
    codeExample: `// ── archivo: buenas-practicas.ts ─────────────────────────────────────────

// ✓ Práctica 1: const por defecto
const LIMITE_INTENTOS = 5
const VERSION_APP = "1.0.0"
let sesionesActivas = 0  // cambia con el tiempo

// ✓ Práctica 2: nombres descriptivos
const precioOriginal = 150.00
const porcentajeDescuento = 20
const nombreProducto = "Laptop ProMax"

// ✓ Práctica 3: inicializar con valor significativo
let totalVentas: number = 0
let registrosEncontrados: string[] = []
let errorCargando: boolean = false

// ✓ Práctica 4: tipos literales para estados
type EstadoPedido = "nuevo" | "procesando" | "enviado" | "entregado" | "cancelado"

let estadoPedido: EstadoPedido = "nuevo"
estadoPedido = "procesando"  // ✓
// estadoPedido = "pendiente"  // Error: no es un estado válido

// ✓ Práctica 5: agrupar en objetos
interface ConfiguracionApp {
  nombreApp: string
  version: string
  modo: "desarrollo" | "produccion"
  maxConexiones: number
}

const config: ConfiguracionApp = {
  nombreApp: "RonaldoScript",
  version: "1.0.0",
  modo: "desarrollo",
  maxConexiones: 100
}

console.log(\`\${config.nombreApp} v\${config.version} (\${config.modo})\`)
// → RonaldoScript v1.0.0 (desarrollo)`,
    keyPoints: [
      'Usa const por defecto y let solo cuando necesites reasignar.',
      'Los nombres descriptivos hacen el tipo obvio sin necesidad de leerlo explícitamente.',
      'Inicializa con valores neutros (0, "", [], false) en lugar de declarar sin valor.',
      'No repitas el tipo cuando la inferencia lo hace automáticamente con claridad.',
      'Los tipos literales y uniones son más seguros para variables que tienen un conjunto fijo de valores.',
      'Agrupa variables relacionadas en objetos o interfaces en lugar de tener muchas variables sueltas.',
    ],
    exercise: {
      description:
        'Analiza este código con malas prácticas y reescríbelo aplicando las 7 buenas prácticas de esta lección: let x: string = "administrador"; let n: number = 3; let a: boolean = false; let b: boolean = true; let estado: string = "activo". Aplica nombres descriptivos, const donde corresponda, tipos literales para estado y agrupa si tiene sentido.',
      hint: 'x podría ser rol: Rol = "administrador" (con tipo literal). n podría ser maxIntentos = 3. a y b podrían ser errorEnCarga = false y sesionIniciada = true. estado podría ser: type EstadoCuenta = "activo" | "inactivo".',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda usar const por defecto y let solo cuando sea necesario?',
        options: [
          'Porque const es más rápido que let en JavaScript',
          'Porque const comunica la intención: el valor no va a cambiar',
          'Porque TypeScript requiere const para la inferencia de tipos',
          'Porque let no funciona con tipos explícitos',
        ],
        correctAnswer: 'Porque const comunica la intención: el valor no va a cambiar',
        correctFeedback:
          'Correcto. const no es solo una restricción técnica — es una comunicación de intención. Al ver const, cualquier lector entiende que ese valor no debería cambiar.',
        incorrectFeedback:
          'No es correcto. const comunica intención: "este valor no va a cambiar". Hace el código más predecible y fácil de entender. La diferencia de rendimiento entre let y const es insignificante.',
      },
      {
        question: '¿Cuál de estas prácticas es correcta para variables de estado?',
        options: [
          'let estado: string = "activo" (más flexible)',
          'let estado: any = "activo" (más general)',
          'type Estado = "activo" | "inactivo"; let estado: Estado = "activo"',
          'let estado = "activo" (inferencia suficiente)',
        ],
        correctAnswer: 'type Estado = "activo" | "inactivo"; let estado: Estado = "activo"',
        correctFeedback:
          'Correcto. Definir un tipo con los valores permitidos y usarlo en la variable es la mejor práctica. TypeScript verifica que el estado solo sea "activo" o "inactivo", evitando valores inválidos.',
        incorrectFeedback:
          'No es correcto. La mejor práctica para variables de estado es usar tipos literales y uniones: type Estado = "activo" | "inactivo". Esto es más seguro que string o any porque TypeScript verifica los valores permitidos.',
      },
    ],
  },
]

export const tsModule4: Module = {
  number: 4,
  title: 'Variables y anotaciones de tipo',
  level: 'básico',
  lessons: lessonsTsModule4,
}
