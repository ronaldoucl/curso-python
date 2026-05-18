import type { Lesson, Module } from '@/types'

export const lessonsTsModule15: Lesson[] = [
  {
    slug: 'sobrecarga-funciones',
    title: 'Sobrecarga de funciones',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 111,
    description: 'Aprende a definir múltiples firmas para una misma función en TypeScript.',
    explanation: `## Sobrecarga de funciones

En TypeScript puedes declarar **múltiples firmas** para una misma función, permitiendo que acepte diferentes combinaciones de argumentos y retorne tipos distintos según el caso.

### ¿Por qué existe la sobrecarga?

A veces una función puede comportarse de forma diferente dependiendo de lo que recibe:

\`\`\`
formatear("hola")           // → "HOLA"
formatear(42)               // → "42"
formatear("hola", true)     // → "  hola"
\`\`\`

Sin sobrecarga tendrías que usar \`any\` o uniones confusas. Con sobrecarga el contrato queda claro.

### Sintaxis básica

La sobrecarga se escribe declarando las firmas **antes** de la implementación:

\`\`\`typescript
// Firmas de sobrecarga (sin cuerpo)
function procesar(valor: string): string
function procesar(valor: number): number

// Implementación (firma más amplia)
function procesar(valor: string | number): string | number {
  if (typeof valor === 'string') return valor.toUpperCase()
  return valor * 2
}
\`\`\`

La implementación no es visible desde afuera — solo se usan las firmas declaradas.

### Regla importante

La firma de implementación debe ser **compatible** (más general) que todas las firmas de sobrecarga. No puede ser más restrictiva.

### Cuándo usar sobrecarga

- Cuando el tipo de retorno depende del tipo del argumento
- Cuando el número de parámetros varía con comportamientos distintos
- Cuando necesitas documentar claramente los casos de uso`,
    codeExample: `// main.ts

// Firmas de sobrecarga
function formatear(valor: string): string
function formatear(valor: number): string
function formatear(valor: boolean): string

// Implementación
function formatear(valor: string | number | boolean): string {
  if (typeof valor === 'string') return valor.toUpperCase()
  if (typeof valor === 'number') return valor.toFixed(2)
  return valor ? 'Sí' : 'No'
}

console.log(formatear('hola'))   // "HOLA"
console.log(formatear(3.14159))  // "3.14"
console.log(formatear(true))     // "Sí"

// TypeScript conoce el tipo de retorno exacto por firma
const resultado: string = formatear('mundo')`,
    keyPoints: [
      'Las firmas de sobrecarga se declaran antes de la implementación, sin cuerpo',
      'La implementación usa una firma más amplia (unión de todos los casos)',
      'Solo las firmas declaradas son visibles para el consumidor de la función',
      'El tipo de retorno puede variar según la firma usada',
      'La sobrecarga documenta los casos de uso de forma explícita',
    ],
    exercise: {
      description:
        'Escribe una función sobrecargada \`duplicar\` que, si recibe un \`string\`, retorna ese string dos veces concatenado; si recibe un \`number\`, retorna el doble. Añade al menos dos firmas y la implementación.',
      hint: 'Usa \`typeof\` en la implementación para separar los casos.',
    },
    quiz: [
      {
        question: '¿Cuántas firmas de sobrecarga necesita una función como mínimo para ser considerada sobrecargada?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        correctFeedback: 'Correcto. Con una sola firma no hay sobrecarga; necesitas al menos dos declaraciones antes de la implementación.',
        incorrectFeedback: 'Necesitas al menos 2 firmas de sobrecarga (más la implementación).',
      },
      {
        question: '¿Qué ocurre si llamas a la función con un tipo que no coincide con ninguna firma de sobrecarga?',
        options: [
          'TypeScript lanza error en tiempo de compilación',
          'Se ejecuta la implementación con \`any\`',
          'TypeScript infiere automáticamente un nuevo tipo',
          'La función retorna \`undefined\`',
        ],
        correctAnswer: 'TypeScript lanza error en tiempo de compilación',
        correctFeedback: '¡Correcto! TypeScript te avisa que ninguna firma de sobrecarga coincide con los argumentos dados.',
        incorrectFeedback: 'TypeScript detecta la incompatibilidad en compilación y lanza un error.',
      },
      {
        question: '¿La firma de implementación es visible para quien llama a la función?',
        options: ['No, solo las firmas de sobrecarga son visibles', 'Sí, siempre es visible', 'Solo si se exporta', 'Solo en modo estricto'],
        correctAnswer: 'No, solo las firmas de sobrecarga son visibles',
        correctFeedback: '¡Exacto! La implementación es un detalle interno; el consumidor solo ve las firmas declaradas.',
        incorrectFeedback: 'La implementación no es visible externamente; solo se exponen las firmas de sobrecarga.',
      },
      {
        question: '¿Cuál es la diferencia entre sobrecarga de funciones y usar una unión directamente en la firma?',
        options: [
          'La sobrecarga permite tipar el retorno según el argumento específico recibido',
          'Son exactamente lo mismo',
          'La unión es más precisa',
          'La sobrecarga solo funciona con clases',
        ],
        correctAnswer: 'La sobrecarga permite tipar el retorno según el argumento específico recibido',
        correctFeedback: '¡Correcto! Con sobrecarga TypeScript sabe que si pasas un \`string\` recibes un \`string\`, no \`string | number\`.',
        incorrectFeedback: 'La ventaja de la sobrecarga es poder correlacionar el tipo de entrada con el tipo de salida de forma precisa.',
      },
      {
        question: '¿Puede la firma de implementación ser más restrictiva que las firmas de sobrecarga?',
        options: ['No, debe ser igual o más amplia', 'Sí, puede ser más restrictiva', 'Solo si usa genéricos', 'Depende del número de parámetros'],
        correctAnswer: 'No, debe ser igual o más amplia',
        correctFeedback: '¡Correcto! La implementación debe cubrir todos los casos declarados en las firmas de sobrecarga.',
        incorrectFeedback: 'La firma de implementación debe ser compatible con todas las firmas de sobrecarga, es decir, igual o más amplia.',
      },
    ],
  },
  {
    slug: 'firmas-sobrecarga',
    title: 'Firmas de sobrecarga',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 112,
    description: 'Domina la sintaxis y casos de uso de las firmas de sobrecarga en TypeScript.',
    explanation: `## Firmas de sobrecarga

Las firmas de sobrecarga son las declaraciones que definen el contrato visible de una función. Cada firma especifica una combinación válida de parámetros y tipo de retorno.

### Firmas con número de parámetros diferente

Una firma puede tener más o menos parámetros que otra:

\`\`\`typescript
function crearUsuario(nombre: string): Usuario
function crearUsuario(nombre: string, edad: number): Usuario
function crearUsuario(nombre: string, edad?: number): Usuario {
  return { nombre, edad: edad ?? 0 }
}
\`\`\`

### Firmas con tipos de retorno diferentes

El retorno puede variar según el argumento:

\`\`\`typescript
function buscar(id: number): Producto
function buscar(nombre: string): Producto[]
function buscar(criterio: number | string): Producto | Producto[] {
  // implementación
}
\`\`\`

### Orden de las firmas

TypeScript evalúa las firmas **de arriba hacia abajo**. Coloca las más específicas primero:

\`\`\`typescript
// ✅ Correcto: específico primero
function parse(valor: '0' | '1'): boolean
function parse(valor: string): number

// ❌ Problemático: lo general primero atrapa todo
function parse(valor: string): number
function parse(valor: '0' | '1'): boolean  // nunca se alcanza
\`\`\`

### Firmas opcionales y predeterminadas

Los parámetros opcionales en las firmas crean contratos claros:

\`\`\`typescript
function log(mensaje: string): void
function log(mensaje: string, nivel: 'info' | 'error'): void
function log(mensaje: string, nivel: 'info' | 'error' = 'info'): void {
  console.log(\`[\${nivel}] \${mensaje}\`)
}
\`\`\``,
    codeExample: `// main.ts
interface Producto {
  id: number
  nombre: string
}

const inventario: Producto[] = [
  { id: 1, nombre: 'Laptop' },
  { id: 2, nombre: 'Mouse' },
  { id: 3, nombre: 'Teclado' },
]

// Firmas: buscar por id retorna uno, por nombre retorna array
function buscar(id: number): Producto | undefined
function buscar(nombre: string): Producto[]
function buscar(criterio: number | string): Producto | undefined | Producto[] {
  if (typeof criterio === 'number') {
    return inventario.find((p) => p.id === criterio)
  }
  return inventario.filter((p) =>
    p.nombre.toLowerCase().includes(criterio.toLowerCase())
  )
}

const uno = buscar(1)           // Producto | undefined
const varios = buscar('a')      // Producto[]

console.log(uno)                // { id: 1, nombre: 'Laptop' }
console.log(varios)             // [{ id: 2, ... }, { id: 3, ... }]`,
    keyPoints: [
      'Cada firma define una combinación válida de parámetros y tipo de retorno',
      'Las firmas más específicas deben ir antes que las más generales',
      'El número y tipos de parámetros pueden variar entre firmas',
      'TypeScript evalúa las firmas en orden descendente',
      'Los parámetros opcionales permiten firmas con diferente aridad',
    ],
    exercise: {
      description:
        'Crea una función sobrecargada \`repetir\` con las firmas: si recibe \`(texto: string, veces: number)\` retorna \`string\`; si solo recibe \`(texto: string)\` retorna \`string[]\` con el texto dividido en caracteres.',
      hint: 'Usa \`text.repeat(veces)\` para el primer caso y \`text.split("")\` para el segundo.',
    },
    quiz: [
      {
        question: '¿En qué orden se deben colocar las firmas de sobrecarga?',
        options: [
          'Las más específicas primero',
          'Las más generales primero',
          'En orden alfabético',
          'El orden no importa',
        ],
        correctAnswer: 'Las más específicas primero',
        correctFeedback: '¡Correcto! TypeScript evalúa las firmas de arriba a abajo; colocar las específicas primero garantiza que se usen correctamente.',
        incorrectFeedback: 'Las firmas específicas deben ir antes porque TypeScript las evalúa en orden y las generales absorberían los casos específicos.',
      },
      {
        question: '¿Qué sucede si la firma de implementación no cubre todos los casos de las firmas de sobrecarga?',
        options: [
          'TypeScript lanza un error de compilación',
          'Solo se usan las firmas que sí están cubiertas',
          'La función retorna \`undefined\` para los no cubiertos',
          'TypeScript infiere la implementación automáticamente',
        ],
        correctAnswer: 'TypeScript lanza un error de compilación',
        correctFeedback: '¡Exacto! La implementación debe ser compatible con todas las firmas declaradas.',
        incorrectFeedback: 'TypeScript verifica que la implementación cubra todos los casos; si no, lanza error en compilación.',
      },
      {
        question: '¿Puede una firma de sobrecarga tener parámetros opcionales?',
        options: ['Sí, igual que cualquier función', 'No, todos los parámetros deben ser requeridos', 'Solo en la última firma', 'Solo si la implementación también los tiene opcionales'],
        correctAnswer: 'Sí, igual que cualquier función',
        correctFeedback: '¡Correcto! Los parámetros opcionales son válidos en cualquier firma de sobrecarga.',
        incorrectFeedback: 'Los parámetros opcionales (\`?\`) son válidos en firmas de sobrecarga.',
      },
      {
        question: 'Si tienes las firmas \`f(x: string): number\` y \`f(x: number): string\`, ¿qué tipo tiene la variable al llamar \`f("hola")\`?',
        options: ['number', 'string', 'string | number', 'any'],
        correctAnswer: 'number',
        correctFeedback: '¡Correcto! TypeScript usa la primera firma que coincide: \`string\` → \`number\`.',
        incorrectFeedback: 'TypeScript selecciona la firma \`f(x: string): number\`, así que el retorno es \`number\`.',
      },
      {
        question: '¿Cuántas firmas de sobrecarga puede tener una función?',
        options: ['Tantas como necesites', 'Máximo 3', 'Máximo 5', 'Solo 2'],
        correctAnswer: 'Tantas como necesites',
        correctFeedback: '¡Correcto! No hay límite en el número de firmas de sobrecarga.',
        incorrectFeedback: 'TypeScript no limita el número de firmas de sobrecarga; puedes tener tantas como necesites.',
      },
    ],
  },
  {
    slug: 'tipar-callbacks-profundidad',
    title: 'Tipar callbacks en profundidad',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 113,
    description: 'Aprende a tipar callbacks de forma precisa para evitar errores silenciosos.',
    explanation: `## Tipar callbacks en profundidad

Los **callbacks** son funciones que se pasan como argumentos a otras funciones. Tiparlos correctamente asegura que el código que los consume y el que los provee estén sincronizados.

### Tipos de función básicos

Hay dos formas de declarar el tipo de una función:

\`\`\`typescript
// Tipo flecha (recomendado para callbacks)
type Transformador = (valor: number) => string

// Interfaz con firma de llamada (útil para objetos con métodos)
interface Transformador {
  (valor: number): string
}
\`\`\`

### Tipando parámetros callback

\`\`\`typescript
function aplicar(datos: number[], fn: (n: number) => number): number[] {
  return datos.map(fn)
}

aplicar([1, 2, 3], (n) => n * 2)  // ✅ TypeScript infiere que n es number
\`\`\`

### Callbacks con múltiples parámetros

\`\`\`typescript
function filtrarYTransformar<T, R>(
  items: T[],
  filtro: (item: T) => boolean,
  transformar: (item: T) => R
): R[] {
  return items.filter(filtro).map(transformar)
}
\`\`\`

### void vs undefined en callbacks

El tipo \`void\` en un callback significa "no me importa el valor de retorno":

\`\`\`typescript
// void permite retornar cualquier valor (se ignora)
function ejecutar(cb: () => void) {
  cb()
}

ejecutar(() => 42)      // ✅ válido aunque retorne 42
ejecutar(() => {})      // ✅ también válido
\`\`\`

Si el callback debe retornar explícitamente nada, usa \`undefined\` en lugar de \`void\`.`,
    codeExample: `// callbacks.ts

type Predicado<T> = (item: T) => boolean
type Mapeador<T, R> = (item: T, indice: number) => R
type Manejador<E> = (error: E) => void

function procesarLista<T, R>(
  lista: T[],
  predicado: Predicado<T>,
  mapeador: Mapeador<T, R>,
  alError: Manejador<string>
): R[] {
  try {
    return lista.filter(predicado).map(mapeador)
  } catch {
    alError('Error al procesar la lista')
    return []
  }
}

const numeros = [1, 2, 3, 4, 5, 6]

const resultado = procesarLista(
  numeros,
  (n) => n % 2 === 0,          // solo pares
  (n, i) => \`[\${i}] \${n * 10}\`, // formatea
  (err) => console.error(err)
)

console.log(resultado) // ["[0] 20", "[1] 40", "[2] 60"]`,
    keyPoints: [
      'Los callbacks se tipan con la sintaxis \`(param: Tipo) => RetornoTipo\`',
      '\`void\` en callback significa "ignora el retorno"; \`undefined\` significa "no debe retornar nada"',
      'TypeScript infiere el tipo de los parámetros del callback desde la firma del parámetro',
      'Puedes crear alias de tipo para callbacks reutilizables',
      'Los genéricos en callbacks permiten funciones de orden superior completamente tipadas',
    ],
    exercise: {
      description:
        'Escribe una función \`ejecutarConRetry(accion: () => boolean, intentos: number, alFallo: (intento: number) => void): boolean\` que llame a \`accion\` hasta \`intentos\` veces; si falla, llama \`alFallo\` con el número del intento.',
      hint: 'Usa un bucle \`for\` y llama al callback \`alFallo\` cuando \`accion()\` retorne \`false\`.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre \`() => void\` y \`() => undefined\` como tipo de callback?',
        options: [
          '\`void\` ignora cualquier valor retornado; \`undefined\` exige que no se retorne nada',
          'Son exactamente iguales',
          '\`void\` es más estricto que \`undefined\`',
          '\`undefined\` permite retornar \`null\` también',
        ],
        correctAnswer: '\`void\` ignora cualquier valor retornado; \`undefined\` exige que no se retorne nada',
        correctFeedback: '¡Correcto! \`void\` es más permisivo: acepta callbacks que retornan algo (el valor se descarta).',
        incorrectFeedback: '\`void\` significa "no me importa el retorno". \`undefined\` exige que literalmente no se retorne un valor.',
      },
      {
        question: 'Al tipar un callback \`(n: number) => string\`, ¿TypeScript puede inferir el tipo de \`n\` cuando se usa en \`.map()\`?',
        options: ['Sí, infiere \`number\` desde el tipo del array', 'No, siempre debes anotarlo explícitamente', 'Solo si el array es de tipo literal', 'Solo con \`--strict\`'],
        correctAnswer: 'Sí, infiere \`number\` desde el tipo del array',
        correctFeedback: '¡Correcto! TypeScript usa el contexto del tipo del array para inferir el tipo del parámetro del callback.',
        incorrectFeedback: 'TypeScript aplica "tipado contextual": infiere el tipo del parámetro del callback desde el contexto en que se usa.',
      },
      {
        question: 'Si una función acepta un callback \`cb: () => void\`, ¿qué pasa si pasas \`() => 42\`?',
        options: ['Es válido; el 42 se ignora', 'TypeScript lanza error porque retorna un número', 'Solo es válido si se usa \`as any\`', 'Depende del modo estricto'],
        correctAnswer: 'Es válido; el 42 se ignora',
        correctFeedback: '¡Exacto! \`void\` como tipo de retorno de callback permite que este retorne cualquier valor; simplemente se descarta.',
        incorrectFeedback: '\`void\` en callbacks es deliberadamente permisivo para facilitar su uso. El valor retornado se ignora.',
      },
      {
        question: '¿Para qué sirve crear un alias de tipo para un callback (\`type Predicado<T> = (item: T) => boolean\`)?',
        options: [
          'Para reutilizar el tipo en múltiples firmas y mejorar la legibilidad',
          'Es obligatorio para callbacks genéricos',
          'Mejora el rendimiento en tiempo de ejecución',
          'Solo funciona con interfaces, no con \`type\`',
        ],
        correctAnswer: 'Para reutilizar el tipo en múltiples firmas y mejorar la legibilidad',
        correctFeedback: '¡Correcto! Los alias de tipo para callbacks evitan repetición y dan nombres significativos a contratos de función.',
        incorrectFeedback: 'Los alias de tipo son principalmente para reutilización y legibilidad del código.',
      },
      {
        question: '¿Cuál es la ventaja de usar genéricos en callbacks (\`<T>(item: T) => boolean\`) frente a \`any\`?',
        options: [
          'Mantiene la seguridad de tipos mientras permite flexibilidad',
          'Los genéricos son más rápidos en ejecución',
          'Solo los genéricos funcionan con arrays',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'Mantiene la seguridad de tipos mientras permite flexibilidad',
        correctFeedback: '¡Correcto! Los genéricos dan la flexibilidad de \`any\` pero con verificación de tipos.',
        incorrectFeedback: 'Los genéricos conservan la seguridad de tipos: TypeScript sabe el tipo concreto en cada uso, a diferencia de \`any\`.',
      },
    ],
  },
  {
    slug: 'tipar-funciones-parametros',
    title: 'Tipar funciones como parámetros',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 114,
    description: 'Aprende a usar funciones como parámetros con tipos precisos y reutilizables.',
    explanation: `## Tipar funciones como parámetros

Cuando pasas una función como argumento, TypeScript necesita saber su firma exacta. Hay varias formas de expresar esto.

### Tipo inline

Directamente en la firma de la función:

\`\`\`typescript
function ejecutar(accion: (x: number) => void): void {
  accion(42)
}
\`\`\`

### Alias de tipo

Nombra el tipo para reutilizarlo:

\`\`\`typescript
type Accion = (x: number) => void

function ejecutar(accion: Accion): void {
  accion(42)
}
\`\`\`

### Interfaz con firma de llamada

Útil cuando la función también tiene propiedades:

\`\`\`typescript
interface Validador {
  (valor: string): boolean
  descripcion: string
}

const validarEmail: Validador = (v) => v.includes('@')
validarEmail.descripcion = 'Valida formato de email'
\`\`\`

### Parámetros opcionales en callbacks

\`\`\`typescript
// El callback puede o no recibir el índice
function recorrer(
  lista: string[],
  fn: (item: string, indice?: number) => void
): void {
  lista.forEach(fn)
}
\`\`\`

### El tipo \`Function\`

Evita usar el tipo \`Function\` genérico — no informa sobre argumentos ni retorno:

\`\`\`typescript
// ❌ Evitar
function llamar(fn: Function) { fn() }

// ✅ Preferir
function llamar(fn: () => void) { fn() }
\`\`\``,
    codeExample: `// funciones-parametros.ts

type Selector<T, R> = (item: T) => R
type Comparador<T> = (a: T, b: T) => number

function ordenarYExtraer<T, R>(
  lista: T[],
  comparar: Comparador<T>,
  extraer: Selector<T, R>
): R[] {
  return [...lista].sort(comparar).map(extraer)
}

interface Empleado {
  nombre: string
  salario: number
}

const empleados: Empleado[] = [
  { nombre: 'Ana', salario: 3000 },
  { nombre: 'Luis', salario: 4500 },
  { nombre: 'Eva', salario: 2800 },
]

const nombres = ordenarYExtraer(
  empleados,
  (a, b) => a.salario - b.salario,   // ordena por salario
  (e) => e.nombre                     // extrae nombre
)

console.log(nombres) // ["Eva", "Ana", "Luis"]`,
    keyPoints: [
      'Puedes tipar funciones como parámetros inline, con alias de tipo, o con interfaces',
      'El tipo \`Function\` es demasiado general; usa siempre la firma concreta',
      'Los parámetros opcionales en callbacks añaden flexibilidad al contrato',
      'Las interfaces con firma de llamada permiten funciones con propiedades adicionales',
      'Los genéricos en parámetros función permiten reutilizar la lógica con tipos distintos',
    ],
    exercise: {
      description:
        'Define un tipo \`Transformador<T, R>\` y una función \`aplicarATodos<T, R>(lista: T[], fn: Transformador<T, R>): R[]\`. Úsala para convertir un array de números a sus cuadrados como strings (\`["1", "4", "9"]\`).',
      hint: 'El tipo es \`(item: T) => R\`. En la llamada, \`T\` = \`number\` y \`R\` = \`string\`.',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda evitar el tipo \`Function\`?',
        options: [
          'No informa sobre los parámetros ni el tipo de retorno',
          'No existe en TypeScript moderno',
          'Solo funciona con funciones flecha',
          'Causa errores en tiempo de ejecución',
        ],
        correctAnswer: 'No informa sobre los parámetros ni el tipo de retorno',
        correctFeedback: '¡Correcto! \`Function\` acepta cualquier función sin validar su firma, perdiendo la seguridad de tipos.',
        incorrectFeedback: '\`Function\` es demasiado permisivo: no describe qué argumentos acepta ni qué retorna.',
      },
      {
        question: '¿Cuándo conviene usar una interfaz con firma de llamada en vez de un alias de tipo?',
        options: [
          'Cuando la función también tiene propiedades (como \`.descripcion\` o \`.nombre\`)',
          'Solo cuando la función es asíncrona',
          'Cuando tiene más de 2 parámetros',
          'Siempre es preferible el alias de tipo',
        ],
        correctAnswer: 'Cuando la función también tiene propiedades (como \`.descripcion\` o \`.nombre\`)',
        correctFeedback: '¡Correcto! Las interfaces con firma de llamada permiten combinar la signatura de función con propiedades adicionales.',
        incorrectFeedback: 'Las interfaces con firma de llamada son útiles cuando la función necesita tener propiedades además de ser invocable.',
      },
      {
        question: 'Si tienes \`type Cb = (x: number, y?: string) => void\`, ¿qué llama válida puede pasar como \`Cb\`?',
        options: [
          'Ambas: \`(x) => {}\` y \`(x, y) => {}\`',
          'Solo \`(x, y) => {}\` porque \`y\` está definido',
          'Solo \`(x) => {}\` porque \`y\` es opcional',
          'Ninguna, porque el tipo tiene un parámetro opcional',
        ],
        correctAnswer: 'Ambas: \`(x) => {}\` y \`(x, y) => {}\`',
        correctFeedback: '¡Correcto! Un callback puede ignorar parámetros opcionales; ambas implementaciones son compatibles.',
        incorrectFeedback: 'TypeScript permite que un callback ignore parámetros (incluso requeridos en la firma), porque los no usados son válidos.',
      },
      {
        question: '¿Qué ventaja dan los genéricos en funciones que reciben funciones como parámetros?',
        options: [
          'Permiten reutilizar la función con cualquier tipo manteniendo la seguridad de tipos',
          'Hacen la función más rápida',
          'Eliminan la necesidad de tipar los callbacks',
          'Solo funcionan con arrays',
        ],
        correctAnswer: 'Permiten reutilizar la función con cualquier tipo manteniendo la seguridad de tipos',
        correctFeedback: '¡Exacto! Los genéricos dan flexibilidad sin sacrificar la verificación de tipos.',
        incorrectFeedback: 'Los genéricos permiten que la función sea polimórfica: funciona con múltiples tipos pero TypeScript los rastrea.',
      },
      {
        question: '¿Cómo se declara el tipo de una función que recibe un número y retorna un string?',
        options: [
          '\`(n: number) => string\`',
          '\`function(n: number): string\`',
          '\`number -> string\`',
          '\`Function<number, string>\`',
        ],
        correctAnswer: '\`(n: number) => string\`',
        correctFeedback: '¡Correcto! La sintaxis de tipo función en TypeScript es \`(param: Tipo) => TipoRetorno\`.',
        incorrectFeedback: 'La sintaxis correcta para tipar funciones en TypeScript es \`(param: Tipo) => TipoRetorno\`.',
      },
    ],
  },
  {
    slug: 'funciones-retornan-funciones',
    title: 'Funciones que retornan funciones',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 115,
    description: 'Aprende a tipar closures y fábricas de funciones en TypeScript.',
    explanation: `## Funciones que retornan funciones

Una función puede retornar otra función. Esto se llama **closure** o **función de orden superior**. TypeScript infiere el tipo de retorno automáticamente, pero también puedes anotarlo explícitamente.

### Inferencia automática

TypeScript infiere el tipo de la función retornada:

\`\`\`typescript
function multiplicador(factor: number) {
  return (valor: number) => valor * factor
  // TypeScript infiere: (valor: number) => number
}

const doble = multiplicador(2)
const triple = multiplicador(3)
doble(5)  // 10
triple(5) // 15
\`\`\`

### Anotación explícita

Puedes anotar el tipo de retorno para mayor claridad:

\`\`\`typescript
function multiplicador(factor: number): (valor: number) => number {
  return (valor) => valor * factor
}
\`\`\`

### Fábricas de funciones tipadas

\`\`\`typescript
type Validador<T> = (valor: T) => boolean

function crearValidador<T>(condicion: (v: T) => boolean): Validador<T> {
  return (valor) => condicion(valor)
}

const esPositivo = crearValidador((n: number) => n > 0)
const tieneLongitud = crearValidador((s: string) => s.length > 0)
\`\`\`

### Currying básico

Transformar una función de N argumentos en N funciones de 1 argumento:

\`\`\`typescript
function sumar(a: number): (b: number) => number {
  return (b) => a + b
}

const sumar10 = sumar(10)
sumar10(5)  // 15
sumar10(20) // 30
\`\`\``,
    codeExample: `// closures.ts

type FiltroFn<T> = (item: T) => boolean

function crearFiltro<T>(
  campo: keyof T,
  valor: T[keyof T]
): FiltroFn<T> {
  return (item) => item[campo] === valor
}

interface Tarea {
  titulo: string
  estado: 'pendiente' | 'hecha' | 'cancelada'
  prioridad: number
}

const tareas: Tarea[] = [
  { titulo: 'Diseñar UI', estado: 'hecha', prioridad: 2 },
  { titulo: 'Escribir tests', estado: 'pendiente', prioridad: 1 },
  { titulo: 'Revisar PR', estado: 'pendiente', prioridad: 3 },
  { titulo: 'Deploy', estado: 'cancelada', prioridad: 1 },
]

const solosPendientes = crearFiltro<Tarea>('estado', 'pendiente')
const solosPrioridad1 = crearFiltro<Tarea>('prioridad', 1)

console.log(tareas.filter(solosPendientes).map((t) => t.titulo))
// ["Escribir tests", "Revisar PR"]

console.log(tareas.filter(solosPrioridad1).map((t) => t.titulo))
// ["Escribir tests", "Deploy"]`,
    keyPoints: [
      'Las funciones que retornan funciones se tipan con la sintaxis \`() => () => Tipo\`',
      'TypeScript infiere el tipo de la función retornada de la implementación',
      'Puedes anotar explícitamente el tipo de retorno para documentar el contrato',
      'Las closures capturan variables del scope externo con sus tipos',
      'Las fábricas de funciones con genéricos permiten crear funciones especializadas',
    ],
    exercise: {
      description:
        'Escribe una función \`multiplicador(factor: number): (n: number) => number\`. Luego crea \`doble\` y \`triple\` usando esa fábrica y verifica que \`doble(5) === 10\` y \`triple(5) === 15\`.',
      hint: 'El cuerpo retorna una función flecha que usa \`factor\` del closure.',
    },
    quiz: [
      {
        question: '¿Cómo se anota el tipo de retorno de \`function f(): (x: number) => string\`?',
        options: [
          'Con \`: (x: number) => string\` después de los paréntesis de parámetros',
          'Con \`returns (x: number) => string\`',
          'Con \`-> (x: number) => string\`',
          'No se puede anotar, solo se infiere',
        ],
        correctAnswer: 'Con \`: (x: number) => string\` después de los paréntesis de parámetros',
        correctFeedback: '¡Correcto! La anotación del tipo de retorno va después de los paréntesis: \`function f(): (x: number) => string\`.',
        incorrectFeedback: 'En TypeScript, el tipo de retorno se anota con \`:\` después de los paréntesis de la función.',
      },
      {
        question: '¿Qué es un closure en el contexto de funciones que retornan funciones?',
        options: [
          'Una función interna que "recuerda" variables del scope en que fue creada',
          'Una función que se llama inmediatamente',
          'Una función sin parámetros',
          'Una función que retorna \`undefined\`',
        ],
        correctAnswer: 'Una función interna que "recuerda" variables del scope en que fue creada',
        correctFeedback: '¡Correcto! La función retornada cierra sobre (captura) las variables del scope de la función exterior.',
        incorrectFeedback: 'Un closure es la capacidad de una función de recordar el scope donde fue definida, incluso después de que esa función exterior haya terminado.',
      },
      {
        question: '¿TypeScript puede inferir el tipo de la función retornada sin anotación?',
        options: ['Sí, desde la implementación del cuerpo', 'No, siempre debes anotarlo', 'Solo si es una función flecha', 'Solo con \`--strict\`'],
        correctAnswer: 'Sí, desde la implementación del cuerpo',
        correctFeedback: '¡Exacto! TypeScript infiere el tipo de retorno leyendo el cuerpo de la función.',
        incorrectFeedback: 'TypeScript infiere tipos de retorno automáticamente, incluyendo cuando el retorno es una función.',
      },
      {
        question: 'En \`function sumar(a: number) { return (b: number) => a + b }\`, ¿qué tipo tiene \`sumar(5)\`?',
        options: ['\`(b: number) => number\`', '\`number\`', '\`() => number\`', '\`(a: number, b: number) => number\`'],
        correctAnswer: '\`(b: number) => number\`',
        correctFeedback: '¡Correcto! \`sumar(5)\` retorna una función que espera \`b: number\` y devuelve \`number\`.',
        incorrectFeedback: '\`sumar(5)\` retorna la función interna \`(b: number) => a + b\`, cuyo tipo es \`(b: number) => number\`.',
      },
      {
        question: '¿Cuál es el patrón cuando transformas \`f(a, b)\` en \`f(a)(b)\`?',
        options: ['Currying', 'Memoización', 'Recursión', 'Decoración'],
        correctAnswer: 'Currying',
        correctFeedback: '¡Correcto! Currying transforma una función de múltiples argumentos en una cadena de funciones de un argumento.',
        incorrectFeedback: 'El patrón de transformar \`f(a, b)\` en \`f(a)(b)\` se llama currying.',
      },
    ],
  },
  {
    slug: 'rest-parameters-tipados',
    title: 'Rest parameters tipados',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 116,
    description: 'Aprende a tipar parámetros rest y spread en funciones TypeScript.',
    explanation: `## Rest parameters tipados

Los **rest parameters** (\`...args\`) permiten que una función acepte un número variable de argumentos. En TypeScript siempre se tipan como un array.

### Sintaxis básica

\`\`\`typescript
function sumar(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0)
}

sumar(1, 2, 3)       // 6
sumar(10, 20)        // 30
sumar()              // 0
\`\`\`

### Rest con parámetros previos

El rest parameter debe ir **al final**:

\`\`\`typescript
function log(nivel: string, ...mensajes: string[]): void {
  console.log(\`[\${nivel}]\`, ...mensajes)
}

log('error', 'Fallo', 'en línea 42')
// [error] Fallo en línea 42
\`\`\`

### Tuples como rest parameters

TypeScript 4.0+ permite usar tuples como tipo de rest:

\`\`\`typescript
type Punto = [number, number]

function mover(nombre: string, ...[x, y]: Punto): string {
  return \`\${nombre} se mueve a (\${x}, \${y})\`
}

mover('Jugador', 10, 20)  // "Jugador se mueve a (10, 20)"
\`\`\`

### Spread al llamar funciones

El operador spread también es válido en llamadas:

\`\`\`typescript
function multiplicar(a: number, b: number, c: number): number {
  return a * b * c
}

const valores: [number, number, number] = [2, 3, 4]
multiplicar(...valores)  // 24
\`\`\`

### Evitar \`any[]\` en rest parameters

Tipar el rest como \`any[]\` pierde toda seguridad. Usa el tipo concreto o genéricos.`,
    codeExample: `// rest-params.ts

// Rest tipado con unión
function combinar(...partes: (string | number)[]): string {
  return partes.map(String).join(' ')
}

console.log(combinar('Precio:', 29.99, 'USD')) // "Precio: 29.99 USD"

// Rest con genérico para máxima flexibilidad
function primero<T>(...items: T[]): T | undefined {
  return items[0]
}

console.log(primero(10, 20, 30))        // 10
console.log(primero('a', 'b', 'c'))     // "a"
console.log(primero<boolean>())          // undefined

// Spread para pasar array a función con rest
const notas: number[] = [7, 8, 9, 6, 10]
console.log(combinar(...notas))  // "7 8 9 6 10"`,
    keyPoints: [
      'Los rest parameters se tipan como array: \`...args: TipoElemento[]\`',
      'El rest parameter debe ser siempre el último en la lista de parámetros',
      'TypeScript 4.0+ permite tuples como tipo de rest para posiciones fijas',
      'El spread (\`...array\`) al llamar funciones debe coincidir con los tipos esperados',
      'Evita \`any[]\` como tipo de rest; usa el tipo concreto o genéricos',
    ],
    exercise: {
      description:
        'Escribe una función \`maximo(...numeros: number[]): number\` que retorne el mayor valor del array. Maneja el caso en que se llame sin argumentos retornando \`-Infinity\`. Prueba con \`maximo(3, 1, 4, 1, 5, 9)\` → \`9\`.',
      hint: 'Usa \`Math.max(...numeros)\` o \`reduce\`. Para 0 argumentos, \`Math.max()\` ya retorna \`-Infinity\`.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene \`args\` en \`function f(...args: number[])\`?',
        options: ['\`number[]\`', '\`number\`', '\`...number\`', '\`tuple<number>\`'],
        correctAnswer: '\`number[]\`',
        correctFeedback: '¡Correcto! Dentro de la función, \`args\` es simplemente un \`number[]\`.',
        incorrectFeedback: 'El rest parameter \`...args\` es de tipo \`number[]\` dentro del cuerpo de la función.',
      },
      {
        question: '¿Puede el rest parameter ir en una posición que no sea la última?',
        options: ['No, siempre debe ser el último parámetro', 'Sí, puede ir en cualquier posición', 'Solo si es opcional', 'Solo en constructores de clase'],
        correctAnswer: 'No, siempre debe ser el último parámetro',
        correctFeedback: '¡Correcto! El rest parameter recopila "el resto" de los argumentos, por lo que debe ir al final.',
        incorrectFeedback: 'El rest parameter solo puede ser el último en la lista de parámetros.',
      },
      {
        question: 'Al usar \`spread\` para pasar un array a una función con rest: \`f(...[1,2,3])\`, ¿TypeScript valida los tipos?',
        options: ['Sí, el tipo del array debe coincidir con el rest parameter', 'No, el spread omite la verificación', 'Solo si el array está tipado como tuple', 'Solo en modo estricto'],
        correctAnswer: 'Sí, el tipo del array debe coincidir con el rest parameter',
        correctFeedback: '¡Correcto! TypeScript verifica que los elementos del array spread sean compatibles con el tipo del parámetro.',
        incorrectFeedback: 'TypeScript valida los tipos del spread igual que los de argumentos normales.',
      },
      {
        question: '¿Qué ocurre si llamas una función con rest parameter sin pasar ningún argumento?',
        options: [
          '\`args\` es un array vacío \`[]\`',
          '\`args\` es \`undefined\`',
          'TypeScript lanza un error',
          '\`args\` es \`null\`',
        ],
        correctAnswer: '\`args\` es un array vacío \`[]\`',
        correctFeedback: '¡Exacto! Si no se pasan argumentos para el rest parameter, este es simplemente \`[]\`.',
        incorrectFeedback: 'Sin argumentos, el rest parameter recibe un array vacío \`[]\`, no \`undefined\` ni error.',
      },
      {
        question: '¿Por qué es problemático tipar un rest parameter como \`any[]\`?',
        options: [
          'Pierde la verificación de tipos, permitiendo pasar cualquier valor sin error',
          'Genera errores en tiempo de ejecución',
          'No es sintaxis válida en TypeScript',
          'Solo causa problemas con arrays anidados',
        ],
        correctAnswer: 'Pierde la verificación de tipos, permitiendo pasar cualquier valor sin error',
        correctFeedback: '¡Correcto! \`any[]\` desactiva la verificación de tipos para todos los argumentos rest.',
        incorrectFeedback: '\`any[]\` elimina la seguridad de tipos: TypeScript deja de verificar qué se pasa al rest parameter.',
      },
    ],
  },
  {
    slug: 'this-en-funciones-typescript',
    title: 'This en funciones',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 117,
    description: 'Comprende cómo TypeScript maneja el tipo de \`this\` en funciones y métodos.',
    explanation: `## This en funciones TypeScript

El valor de \`this\` en JavaScript es infame por ser dinámico. TypeScript puede tipar \`this\` explícitamente para evitar errores.

### El parámetro especial \`this\`

TypeScript permite declarar \`this\` como un **parámetro falso** (no cuenta como argumento real) para indicar qué tipo debe tener el contexto de llamada:

\`\`\`typescript
function saludar(this: { nombre: string }): string {
  return \`Hola, soy \${this.nombre}\`
}

const obj = { nombre: 'Ana', saludar }
obj.saludar()  // ✅ "Hola, soy Ana"

saludar()      // ❌ Error: 'this' implicitly has type 'any'
\`\`\`

### This en métodos de clase

En clases, \`this\` siempre hace referencia a la instancia:

\`\`\`typescript
class Contador {
  private valor = 0

  incrementar(this: Contador): this {
    this.valor++
    return this  // retorna this para encadenamiento
  }

  obtener(): number {
    return this.valor
  }
}

new Contador().incrementar().incrementar().obtener()  // 2
\`\`\`

### Tipar this para callbacks seguros

\`\`\`typescript
class Boton {
  private clicks = 0

  manejarClick(this: Boton): void {
    this.clicks++
  }
}

const boton = new Boton()
// Al pasar como callback puede perder el contexto:
document.addEventListener('click', boton.manejarClick.bind(boton))
\`\`\`

### noImplicitThis

Con \`"noImplicitThis": true\` en \`tsconfig.json\`, TypeScript te obliga a declarar el tipo de \`this\` cuando no puede inferirlo, evitando accesos accidentales.`,
    codeExample: `// this-funciones.ts

interface Configuracion {
  host: string
  puerto: number
  conectar(this: Configuracion): string
}

const config: Configuracion = {
  host: 'localhost',
  puerto: 3000,
  conectar() {
    return \`Conectando a \${this.host}:\${this.puerto}\`
  },
}

console.log(config.conectar()) // "Conectando a localhost:3000"

// Función independiente con this tipado
function describir(this: { nombre: string; edad: number }): string {
  return \`\${this.nombre} tiene \${this.edad} años\`
}

const persona = { nombre: 'Laura', edad: 28, describir }
console.log(persona.describir()) // "Laura tiene 28 años"

// Error si se llama sin contexto adecuado:
// describir() // ❌ Error: el contexto 'this' no tiene tipo correcto`,
    keyPoints: [
      '\`this\` se puede tipar como primer parámetro falso: \`function f(this: Tipo)\`',
      'El parámetro \`this\` no cuenta como argumento real de la función',
      'TypeScript con \`noImplicitThis: true\` obliga a declarar el tipo de \`this\` cuando es necesario',
      'En clases, \`this\` siempre se infiere como el tipo de la instancia',
      'Retornar \`this\` desde métodos permite encadenamiento fluido (fluent API)',
    ],
    exercise: {
      description:
        'Crea una interfaz \`Calculadora\` con propiedades \`valor: number\` y métodos \`sumar(this: Calculadora, n: number): Calculadora\` y \`restar(this: Calculadora, n: number): Calculadora\`. Implementa el objeto y prueba el encadenamiento: \`calc.sumar(5).sumar(3).restar(2)\`.',
      hint: 'Cada método debe retornar \`this\` para permitir el encadenamiento.',
    },
    quiz: [
      {
        question: '¿El parámetro \`this\` declarado en una función TypeScript cuenta como argumento al llamarla?',
        options: ['No, es un parámetro falso solo para el sistema de tipos', 'Sí, debe pasarse como primer argumento', 'Solo en métodos de clase', 'Solo con \`bind\`'],
        correctAnswer: 'No, es un parámetro falso solo para el sistema de tipos',
        correctFeedback: '¡Correcto! TypeScript elimina el parámetro \`this\` en la salida JavaScript; es solo información para el verificador de tipos.',
        incorrectFeedback: '\`this\` como parámetro es una construcción de TypeScript para el sistema de tipos, no aparece en JavaScript compilado.',
      },
      {
        question: '¿Qué opción de \`tsconfig.json\` obliga a declarar el tipo de \`this\` cuando no se puede inferir?',
        options: ['\`noImplicitThis\`', '\`strictThis\`', '\`thisType\`', '\`noThis\`'],
        correctAnswer: '\`noImplicitThis\`',
        correctFeedback: '¡Correcto! \`noImplicitThis: true\` activa el error cuando \`this\` tiene tipo \`any\` implícitamente.',
        incorrectFeedback: 'La opción es \`noImplicitThis\` en \`tsconfig.json\`.',
      },
      {
        question: '¿Para qué sirve retornar \`this\` desde un método de clase?',
        options: [
          'Para permitir encadenamiento de llamadas (fluent API)',
          'Para forzar la herencia',
          'Para evitar que el método sea sobreescrito',
          'Para retornar la clase, no la instancia',
        ],
        correctAnswer: 'Para permitir encadenamiento de llamadas (fluent API)',
        correctFeedback: '¡Exacto! Retornar \`this\` permite escribir \`obj.metodo1().metodo2().metodo3()\`.',
        incorrectFeedback: 'Retornar \`this\` permite el patrón fluent API: encadenar llamadas a métodos sobre el mismo objeto.',
      },
      {
        question: 'En una función independiente (no método), ¿TypeScript puede inferir automáticamente el tipo de \`this\`?',
        options: [
          'No generalmente; debes declararlo o usar \`noImplicitThis\`',
          'Sí, siempre lo infiere del contexto de llamada',
          'Solo si la función está tipada con una interfaz',
          'Solo en modo estricto',
        ],
        correctAnswer: 'No generalmente; debes declararlo o usar \`noImplicitThis\`',
        correctFeedback: '¡Correcto! En funciones independientes, \`this\` es ambiguo; TypeScript lo marca como error con \`noImplicitThis\`.',
        incorrectFeedback: 'TypeScript no puede inferir el tipo de \`this\` en funciones independientes sin contexto adicional.',
      },
      {
        question: '¿Cuál es el tipo de \`this\` en un método de una clase TypeScript sin anotación explícita?',
        options: [
          'El tipo de la instancia de la clase',
          '\`any\`',
          '\`object\`',
          '\`unknown\`',
        ],
        correctAnswer: 'El tipo de la instancia de la clase',
        correctFeedback: '¡Correcto! TypeScript infiere automáticamente que \`this\` en un método es la instancia de esa clase.',
        incorrectFeedback: 'En clases, TypeScript siempre sabe que \`this\` es la instancia; no necesitas anotarlo.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-funciones-avanzadas',
    title: 'Buenas prácticas al tipar funciones avanzadas',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 118,
    description: 'Aprende las mejores prácticas para escribir funciones avanzadas claras y seguras.',
    explanation: `## Buenas prácticas al tipar funciones avanzadas

Tipar funciones avanzadas correctamente mejora la mantenibilidad, legibilidad y seguridad del código. Estas son las pautas más importantes.

### 1. Prefiere la inferencia cuando es clara

No anotes lo que TypeScript ya puede inferir:

\`\`\`typescript
// ❌ Redundante
const doble = (n: number): number => n * 2

// ✅ La inferencia es suficiente
const doble = (n: number) => n * 2
\`\`\`

### 2. Anota cuando el contrato importa

Para funciones públicas, APIs y callbacks, la anotación explícita sirve de documentación:

\`\`\`typescript
// ✅ Anotación útil en API pública
export function parsearFecha(iso: string): Date | null {
  // ...
}
\`\`\`

### 3. Usa genéricos en lugar de any

Cuando necesitas flexibilidad, los genéricos son siempre mejores que \`any\`:

\`\`\`typescript
// ❌ any pierde tipos
function primero(arr: any[]): any { return arr[0] }

// ✅ genérico preserva tipos
function primero<T>(arr: T[]): T | undefined { return arr[0] }
\`\`\`

### 4. Evita sobrecargas innecesarias

Si una unión en la firma es suficientemente clara, no necesitas sobrecarga:

\`\`\`typescript
// ❌ sobrecarga innecesaria
function mostrar(v: string): void
function mostrar(v: number): void
function mostrar(v: string | number): void { console.log(v) }

// ✅ unión directa es más simple
function mostrar(v: string | number): void { console.log(v) }
\`\`\`

### 5. Acota el tipo de this cuando sea relevante

No dejes \`this\` implícito en funciones que dependen de él; decláradlo explícitamente para atrapar errores en compilación.

### 6. Mantén las funciones pequeñas y con un solo propósito

Una función bien tipada con muchas responsabilidades sigue siendo difícil de mantener. El tipado no reemplaza el buen diseño.`,
    codeExample: `// buenas-practicas.ts

// ✅ Genérico mejor que any
function agruparPor<T, K extends keyof T>(
  items: T[],
  clave: K
): Map<T[K], T[]> {
  const mapa = new Map<T[K], T[]>()
  for (const item of items) {
    const k = item[clave]
    const grupo = mapa.get(k) ?? []
    grupo.push(item)
    mapa.set(k, grupo)
  }
  return mapa
}

interface Producto {
  nombre: string
  categoria: string
  precio: number
}

const productos: Producto[] = [
  { nombre: 'Laptop', categoria: 'Tech', precio: 1200 },
  { nombre: 'Mouse', categoria: 'Tech', precio: 25 },
  { nombre: 'Mesa', categoria: 'Hogar', precio: 300 },
]

const porCategoria = agruparPor(productos, 'categoria')
console.log([...porCategoria.keys()]) // ["Tech", "Hogar"]`,
    keyPoints: [
      'Deja que TypeScript infiera cuando el tipo es obvio; anota cuando es un contrato público',
      'Siempre prefiere genéricos sobre \`any\` para mantener la seguridad de tipos',
      'Evita sobrecargas cuando una unión en la firma es suficientemente clara',
      'Declara el tipo de \`this\` en funciones que dependen del contexto de llamada',
      'El buen tipado y el buen diseño de funciones se complementan, no se reemplazan',
    ],
    exercise: {
      description:
        'Refactoriza esta función para eliminar \`any\`: \`function ultimo(arr: any[]): any { return arr[arr.length - 1] }\`. Usa un genérico para que \`ultimo([1,2,3])\` retorne \`number\` y \`ultimo(["a","b"])\` retorne \`string\`.',
      hint: 'Declara la función como \`function ultimo<T>(arr: T[]): T | undefined\`.',
    },
    quiz: [
      {
        question: '¿Cuándo conviene anotar explícitamente el tipo de retorno aunque TypeScript pueda inferirlo?',
        options: [
          'En funciones públicas o exportadas donde el contrato importa',
          'En todas las funciones siempre',
          'Solo en funciones asíncronas',
          'Nunca; la inferencia siempre es suficiente',
        ],
        correctAnswer: 'En funciones públicas o exportadas donde el contrato importa',
        correctFeedback: '¡Correcto! La anotación explícita en APIs públicas sirve de documentación y detecta cambios accidentales.',
        incorrectFeedback: 'La anotación explícita es valiosa en funciones exportadas o públicas donde el tipo de retorno es parte del contrato.',
      },
      {
        question: '¿Por qué es mejor usar genéricos que \`any\` para parámetros de tipo desconocido?',
        options: [
          'Los genéricos preservan la relación entre tipos de entrada y salida',
          'Los genéricos son más rápidos en ejecución',
          'Los genéricos son obligatorios en TypeScript 5',
          'Solo los genéricos funcionan con arrays',
        ],
        correctAnswer: 'Los genéricos preservan la relación entre tipos de entrada y salida',
        correctFeedback: '¡Exacto! Con \`<T>\` TypeScript sabe que el tipo de salida está relacionado con el de entrada; con \`any\` esa relación se pierde.',
        incorrectFeedback: 'Los genéricos le permiten a TypeScript rastrear la relación entre tipos de entrada y salida, algo que \`any\` destruye.',
      },
      {
        question: '¿Cuándo NO necesitas sobrecarga de funciones?',
        options: [
          'Cuando una unión en la firma describe el contrato igual de claro',
          'Cuando la función tiene más de 3 parámetros',
          'Cuando se usa en una clase',
          'Cuando el retorno es \`void\`',
        ],
        correctAnswer: 'Cuando una unión en la firma describe el contrato igual de claro',
        correctFeedback: '¡Correcto! Si el tipo de retorno no varía según el input, una unión es más simple y suficiente.',
        incorrectFeedback: 'La sobrecarga solo añade valor cuando el tipo de retorno cambia con el tipo de entrada; de lo contrario, usa uniones.',
      },
      {
        question: '¿Qué principio de diseño complementa el buen tipado de funciones?',
        options: [
          'Responsabilidad única: cada función hace una sola cosa bien',
          'Cuantos más parámetros, mejor tipados',
          'Siempre usar clases en lugar de funciones',
          'Evitar el uso de genéricos',
        ],
        correctAnswer: 'Responsabilidad única: cada función hace una sola cosa bien',
        correctFeedback: '¡Correcto! El buen tipado no compensa una función que hace demasiado; ambos aspectos son necesarios.',
        incorrectFeedback: 'El principio de responsabilidad única es fundamental: una función pequeña y enfocada es más fácil de tipar y mantener.',
      },
      {
        question: '¿Qué hace que una función sea "segura de tipos" en TypeScript?',
        options: [
          'Que todos sus parámetros y retorno tengan tipos no-any y verificados',
          'Que use \`try/catch\` internamente',
          'Que sea asíncrona',
          'Que esté en un módulo exportado',
        ],
        correctAnswer: 'Que todos sus parámetros y retorno tengan tipos no-any y verificados',
        correctFeedback: '¡Correcto! Una función type-safe no usa \`any\`, y TypeScript puede verificar todos los tipos involucrados.',
        incorrectFeedback: 'Type safety significa que TypeScript puede verificar todas las entradas y salidas sin recurrir a \`any\`.',
      },
    ],
  },
  {
    slug: 'mini-practica-filtros-tipados',
    title: 'Mini práctica: utilidad de filtros tipada',
    module: 'Funciones avanzadas',
    moduleNumber: 15,
    order: 119,
    description: 'Construye una utilidad de filtros reutilizable aplicando todo lo aprendido sobre funciones avanzadas.',
    explanation: `## Mini práctica: utilidad de filtros tipada

En esta lección construimos una **utilidad de filtros tipada** que combina sobrecargas, genéricos, callbacks y closures para crear una herramienta flexible y segura.

### El problema

Filtrar arrays es una operación común, pero a menudo los filtros se escriben de forma ad hoc, sin reutilización. Queremos construir una utilidad que:

- Acepte cualquier tipo de array
- Permita componer múltiples predicados
- Retorne el tipo correcto siempre
- Sea fácil de usar y extender

### Diseño de la API

\`\`\`typescript
// Uso deseado
const filtro = crearFiltrador([1, 2, 3, 4, 5, 6])
  .donde((n) => n > 2)
  .donde((n) => n % 2 === 0)
  .obtener()
// → [4, 6]
\`\`\`

### Construcción paso a paso

1. Definir el tipo del predicado
2. Crear la fábrica de filtradores
3. Implementar la composición de predicados
4. Tipar el retorno de cada método

### Técnicas usadas

- **Genéricos** para tipar el array y los predicados
- **Closures** para acumular los filtros
- **Método encadenado** retornando \`this\`
- **Rest parameters** opcionales
- **Tipos de función** para los predicados`,
    codeExample: `// filtros.ts

type Predicado<T> = (item: T) => boolean

function crearFiltrador<T>(fuente: T[]) {
  let predicados: Predicado<T>[] = []

  const api = {
    donde(predicado: Predicado<T>) {
      predicados = [...predicados, predicado]
      return api
    },
    o(predicado: Predicado<T>) {
      // ANY de los predicados acumulados O este nuevo
      const anteriores = [...predicados]
      predicados = [
        (item) => anteriores.some((p) => p(item)) || predicado(item),
      ]
      return api
    },
    obtener(): T[] {
      return fuente.filter((item) =>
        predicados.every((p) => p(item))
      )
    },
    contar(): number {
      return api.obtener().length
    },
  }

  return api
}

// Uso con números
const nums = crearFiltrador([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const pares = nums.donde((n) => n % 2 === 0).obtener()
console.log(pares) // [2, 4, 6, 8, 10]

const paresMayores5 = crearFiltrador([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .donde((n) => n % 2 === 0)
  .donde((n) => n > 5)
  .obtener()
console.log(paresMayores5) // [6, 8, 10]

// Uso con objetos
interface Usuario {
  nombre: string
  activo: boolean
  rol: 'admin' | 'usuario'
}

const usuarios: Usuario[] = [
  { nombre: 'Ana', activo: true, rol: 'admin' },
  { nombre: 'Luis', activo: false, rol: 'usuario' },
  { nombre: 'Eva', activo: true, rol: 'usuario' },
  { nombre: 'Pedro', activo: true, rol: 'admin' },
]

const adminsActivos = crearFiltrador(usuarios)
  .donde((u) => u.activo)
  .donde((u) => u.rol === 'admin')
  .obtener()

console.log(adminsActivos.map((u) => u.nombre)) // ["Ana", "Pedro"]
console.log(crearFiltrador(usuarios).donde((u) => u.activo).contar()) // 3`,
    keyPoints: [
      'Una utilidad genérica de filtros puede reutilizarse con cualquier tipo de array',
      'El encadenamiento de métodos (fluent API) se logra retornando el objeto \`api\`',
      'Los genéricos garantizan que el tipo del array y los predicados sean siempre coherentes',
      'Las closures permiten acumular estado (los predicados) entre llamadas encadenadas',
      'Esta arquitectura aplica sobrecargas, callbacks, genéricos y closures de forma integrada',
    ],
    exercise: {
      description:
        'Extiende la utilidad \`crearFiltrador\` con un método \`transformar<R>(fn: (item: T) => R): R[]\` que primero aplica todos los filtros y luego mapea cada elemento con \`fn\`. Prueba: \`crearFiltrador([1,2,3,4,5]).donde(n => n > 2).transformar(n => n * 10)\` → \`[30, 40, 50]\`.',
      hint: 'El método \`transformar\` llama internamente a \`api.obtener()\` y luego hace \`.map(fn)\`.',
    },
    quiz: [
      {
        question: '¿Cómo permite el patrón de retornar \`api\` en cada método el encadenamiento?',
        options: [
          'Cada llamada retorna el mismo objeto, permitiendo llamar otro método sobre él',
          'TypeScript genera automáticamente los métodos encadenados',
          'Solo funciona si los métodos son asíncronos',
          'Requiere que la función sea una clase',
        ],
        correctAnswer: 'Cada llamada retorna el mismo objeto, permitiendo llamar otro método sobre él',
        correctFeedback: '¡Correcto! Retornar \`api\` (o \`this\`) es lo que hace posible escribir \`.metodo1().metodo2().metodo3()\`.',
        incorrectFeedback: 'El encadenamiento (fluent API) funciona retornando el mismo objeto desde cada método.',
      },
      {
        question: '¿Por qué se usa un genérico \`<T>\` en \`crearFiltrador<T>\`?',
        options: [
          'Para que funcione con arrays de cualquier tipo manteniendo la seguridad de tipos',
          'Para que funcione solo con arrays de objetos',
          'Para mejorar el rendimiento',
          'Porque los closures requieren genéricos',
        ],
        correctAnswer: 'Para que funcione con arrays de cualquier tipo manteniendo la seguridad de tipos',
        correctFeedback: '¡Correcto! El genérico hace que la utilidad sea reutilizable con \`number[]\`, \`string[]\`, o cualquier tipo de objeto.',
        incorrectFeedback: 'El genérico \`<T>\` permite que la función trabaje con cualquier tipo de array mientras TypeScript verifica los tipos.',
      },
      {
        question: '¿Qué rol juegan las closures en esta utilidad de filtros?',
        options: [
          'Acumulan el array de predicados entre llamadas encadenadas',
          'Evitan que los predicados sean reutilizados',
          'Permiten llamar la función sin argumentos',
          'Solo se usan en el método \`o()\`',
        ],
        correctAnswer: 'Acumulan el array de predicados entre llamadas encadenadas',
        correctFeedback: '¡Exacto! La variable \`predicados\` vive en el closure de \`crearFiltrador\` y persiste entre llamadas a \`donde()\`.',
        incorrectFeedback: 'Las closures permiten que \`predicados\` persista y se acumule entre las llamadas encadenadas a \`donde()\`.',
      },
      {
        question: 'Si llamas \`.donde(p1).donde(p2).obtener()\`, ¿qué elementos retorna?',
        options: [
          'Los que cumplen p1 Y p2 (intersección)',
          'Los que cumplen p1 O p2 (unión)',
          'Solo los que cumplen p2',
          'Solo los que cumplen p1',
        ],
        correctAnswer: 'Los que cumplen p1 Y p2 (intersección)',
        correctFeedback: '¡Correcto! \`predicados.every(p => p(item))\` requiere que todos los predicados sean verdaderos.',
        incorrectFeedback: 'Múltiples \`.donde()\` usan \`every\`, que exige que TODOS los predicados sean verdaderos (AND lógico).',
      },
      {
        question: '¿Qué técnica permite que \`crearFiltrador([1,2,3])\` infiera automáticamente \`T = number\`?',
        options: [
          'Inferencia de tipo desde el argumento al crear la instancia',
          'El tipo literal del array',
          'Una anotación explícita en el array',
          'La opción \`strictGenericChecks\`',
        ],
        correctAnswer: 'Inferencia de tipo desde el argumento al crear la instancia',
        correctFeedback: '¡Correcto! TypeScript infiere \`T\` del tipo del array pasado como argumento: \`number[]\` → \`T = number\`.',
        incorrectFeedback: 'TypeScript infiere el tipo genérico \`T\` automáticamente desde el tipo del argumento \`fuente\`.',
      },
    ],
  },
]

export const tsModule15: Module = {
  number: 15,
  title: 'Funciones avanzadas',
  level: 'nivel3',
  lessons: lessonsTsModule15,
}
