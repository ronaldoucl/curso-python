import type { Lesson, Module } from '@/types'

export const lessonsTsModule12: Lesson[] = [
  // ── Lección 88 ───────────────────────────────────────────────────────────
  {
    slug: 'que-es-type-guard',
    title: '¿Qué es un type guard?',
    module: 'Type guards',
    moduleNumber: 12,
    order: 88,
    description:
      'Aprende qué es un type guard y cómo ayuda a TypeScript a saber con más precisión qué tipo estás usando.',
    explanation: `Un **type guard** es una expresión que, al evaluarse a \`true\`, le garantiza a TypeScript que un valor tiene un tipo específico dentro de ese bloque de código.

Ya has visto type guards implícitos cuando usas \`typeof\`, \`instanceof\`, o comparaciones de igualdad. Pero TypeScript también permite crear **type guards personalizados**: funciones que actúan como verificadores de tipo y que TypeScript entiende como parte de su sistema de tipos.

**Type guards incorporados (los que ya conoces)**

\`\`\`ts
// typeof — para primitivos
if (typeof x === 'string') { ... }

// instanceof — para clases
if (error instanceof Error) { ... }

// in — para propiedades de objetos
if ('email' in usuario) { ... }

// comparaciones
if (x !== null) { ... }
\`\`\`

**¿Cuándo no son suficientes los type guards básicos?**

Imagina que recibes datos de una API. TypeScript los tipa como \`unknown\` y necesitas verificar que tienen la estructura correcta. Los type guards básicos no son suficientes para verificar la forma exacta de un objeto complejo:

\`\`\`ts
function procesarRespuesta(dato: unknown): void {
  // ¿Cómo sabe TypeScript si dato tiene { nombre: string, edad: number }?
  // typeof dato === "object" no es suficiente
}
\`\`\`

Para esto existen los **type guards personalizados** con predicados de tipo.

**Type predicates: el type guard personalizado**

Un type predicate es una función que devuelve \`true\` o \`false\`, pero cuyo tipo de retorno le dice a TypeScript qué tipo garantiza:

\`\`\`ts
function esString(valor: unknown): valor is string {
  return typeof valor === 'string'
}

function procesar(x: unknown): void {
  if (esString(x)) {
    // TypeScript sabe: x es string aquí
    console.log(x.toUpperCase())
  }
}
\`\`\`

La clave es la sintaxis \`valor is string\` como tipo de retorno. Le dice a TypeScript: "si esta función devuelve true, entonces valor es de tipo string".

**Ventajas de los type guards personalizados**

1. **Reutilizables**: escribe la validación una vez y úsala en múltiples lugares.
2. **Legibles**: el nombre de la función comunica qué verifica.
3. **Composables**: puedes combinar type guards para verificar estructuras complejas.

**Una analogía útil**

Piensa en un type guard personalizado como una función de seguridad en un edificio. Le das una tarjeta y la función dice "sí, esta tarjeta es válida para el área VIP". TypeScript confía en esa función y te permite entrar al área VIP (es decir, usar el tipo seguro).`,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

// ── Type guards básicos que ya conoces ───────────────────────────────────

function ejemplosBasicos(x: string | number | null): void {
  // typeof
  if (typeof x === 'string') {
    console.log(x.toUpperCase())  // x es string aquí
  }

  // comparación directa
  if (x !== null) {
    console.log(x)  // x es string | number aquí
  }
}

// ── Type guard personalizado con predicado ────────────────────────────────

// El tipo de retorno "valor is string" es el predicado
function esString(valor: unknown): valor is string {
  return typeof valor === 'string'
}

function esNumero(valor: unknown): valor is number {
  return typeof valor === 'number' && !Number.isNaN(valor)
}

// ── Usar los type guards personalizados ──────────────────────────────────

function procesarEntrada(entrada: unknown): string {
  if (esString(entrada)) {
    // TypeScript sabe: entrada es string
    return entrada.trim().toUpperCase()
  }

  if (esNumero(entrada)) {
    // TypeScript sabe: entrada es number
    return entrada.toFixed(2)
  }

  return '(tipo no reconocido)'
}

console.log(procesarEntrada('  hola  '))  // → HOLA
console.log(procesarEntrada(3.14))        // → 3.14
console.log(procesarEntrada(true))        // → (tipo no reconocido)

// ── Type guard para objetos con estructura específica ────────────────────

interface Usuario {
  nombre: string
  email: string
}

function esUsuario(dato: unknown): dato is Usuario {
  return (
    typeof dato === 'object' &&
    dato !== null &&
    'nombre' in dato &&
    'email' in dato &&
    typeof (dato as any).nombre === 'string' &&
    typeof (dato as any).email === 'string'
  )
}

const datosApi: unknown = { nombre: 'Ana', email: 'ana@email.com' }

if (esUsuario(datosApi)) {
  // TypeScript sabe: datosApi es Usuario
  console.log(\`Bienvenida, \${datosApi.nombre}\`)
}`,
    keyPoints: [
      'Un type guard es una verificación que garantiza a TypeScript que un valor tiene un tipo específico.',
      'Los type guards básicos (typeof, instanceof, in) son automáticos y TypeScript los entiende.',
      'Los type guards personalizados son funciones con tipo de retorno "valor is Tipo" (type predicate).',
      'Si la función devuelve true, TypeScript sabe que el valor es del tipo declarado en el predicado.',
      'Los type guards personalizados son especialmente útiles para verificar estructuras de objetos complejos.',
    ],
    exercise: {
      description:
        'Crea un type guard personalizado \`esProducto\` que reciba \`dato: unknown\` y verifique que tiene las propiedades \`nombre: string\` y \`precio: number\`. El tipo de retorno debe ser \`dato is Producto\` donde Producto es una interfaz. Luego úsalo para procesar de forma segura un array de \`unknown[]\`.',
      hint: 'En el cuerpo del type guard, verifica: typeof dato === "object", dato !== null, "nombre" in dato, "precio" in dato, y que cada propiedad tenga el tipo correcto usando typeof.',
    },
    quiz: [
      {
        question: '¿Qué es un type guard en TypeScript?',
        options: [
          'Una función que lanza un error si el tipo es incorrecto',
          'Una verificación que garantiza a TypeScript que un valor tiene un tipo específico dentro de un bloque',
          'Un decorador de clase que restringe los tipos',
          'Una forma de convertir tipos sin perder seguridad',
        ],
        correctAnswer:
          'Una verificación que garantiza a TypeScript que un valor tiene un tipo específico dentro de un bloque',
        correctFeedback:
          'Correcto. Un type guard es cualquier verificación que TypeScript entiende como garantía de tipo: puede ser typeof, instanceof, in, o una función predicado personalizada.',
        incorrectFeedback:
          'No es correcto. Un type guard es una verificación (condición) que garantiza a TypeScript cuál es el tipo exacto dentro de un bloque de código. No lanza errores ni convierte valores.',
      },
      {
        question:
          '¿Cuál es la sintaxis correcta para el tipo de retorno de un type guard personalizado?',
        options: [
          'boolean',
          'valor: TipoEspecifico',
          'valor is TipoEspecifico',
          'TipoEspecifico | false',
        ],
        correctAnswer: 'valor is TipoEspecifico',
        correctFeedback:
          'Correcto. La sintaxis \`valor is TipoEspecifico\` es el "type predicate". Le dice a TypeScript: si esta función devuelve true, entonces \`valor\` es de tipo \`TipoEspecifico\`.',
        incorrectFeedback:
          'No es correcto. La sintaxis de un type predicate es \`parametro is Tipo\`. Por ejemplo: \`function esString(x: unknown): x is string { return typeof x === "string" }\`. Sin esta sintaxis, TypeScript no aplica narrowing.',
      },
      {
        question:
          '¿Cuándo son especialmente útiles los type guards personalizados?',
        options: [
          'Solo con tipos primitivos como string y number',
          'Para verificar estructuras complejas de objetos, especialmente datos de fuentes externas',
          'Solo cuando los tipos son clases, no interfaces',
          'Solo con arreglos',
        ],
        correctAnswer:
          'Para verificar estructuras complejas de objetos, especialmente datos de fuentes externas',
        correctFeedback:
          'Correcto. Los type guards personalizados brillan cuando necesitas verificar que un objeto de fuente desconocida (API, localStorage, etc.) tiene la estructura exacta que esperas.',
        incorrectFeedback:
          'No es correcto. Los type guards personalizados son más útiles cuando typeof e instanceof no son suficientes, especialmente para verificar que un objeto de fuente externa tiene la estructura y tipos de propiedades correctos.',
      },
      {
        question:
          '¿Qué significa que un type guard "devuelve true" en relación al narrowing?',
        options: [
          'El programa continúa normalmente sin aplicar cambios de tipo',
          'TypeScript reduce el tipo de la variable al tipo declarado en el predicado dentro del bloque if',
          'La variable es eliminada y reemplazada por el tipo correcto',
          'TypeScript lanza un error si el tipo no coincide',
        ],
        correctAnswer:
          'TypeScript reduce el tipo de la variable al tipo declarado en el predicado dentro del bloque if',
        correctFeedback:
          'Correcto. Cuando un type guard devuelve true, TypeScript aplica narrowing: dentro del bloque if, la variable tiene el tipo más específico declarado en el predicado.',
        incorrectFeedback:
          'No es correcto. Cuando el type guard devuelve true, TypeScript "confía" en la declaración del predicado y trata la variable como ese tipo específico dentro del bloque. Es narrowing en acción.',
      },
      {
        question:
          '¿Qué diferencia hay entre un type guard básico (\`typeof x === "string"\`) y un type guard personalizado (\`esString(x)\`)?',
        options: [
          'No hay diferencia, funcionan exactamente igual',
          'Los type guards personalizados son más rápidos en tiempo de ejecución',
          'Los type guards personalizados son funciones reutilizables que encapsulan la lógica de verificación y pueden verificar estructuras complejas',
          'Los type guards básicos son más seguros que los personalizados',
        ],
        correctAnswer:
          'Los type guards personalizados son funciones reutilizables que encapsulan la lógica de verificación y pueden verificar estructuras complejas',
        correctFeedback:
          'Correcto. Los type guards básicos son verificaciones inline simples. Los personalizados son funciones que puedes reutilizar en múltiples lugares y que pueden encapsular lógica más compleja para verificar objetos.',
        incorrectFeedback:
          'No es correcto. La diferencia principal es que los type guards personalizados son funciones reutilizables. Puedes usarlos en múltiples lugares sin repetir la lógica, y pueden verificar estructuras de objetos complejos que typeof e instanceof no pueden.',
      },
    ],
  },

  // ── Lección 89 ───────────────────────────────────────────────────────────
  {
    slug: 'type-guards-typeof',
    title: 'Type guards con typeof',
    module: 'Type guards',
    moduleNumber: 12,
    order: 89,
    description:
      'Aprende a crear validaciones simples usando typeof como type guard.',
    explanation: `Aunque \`typeof\` ya lo usaste en el módulo de narrowing, en este módulo lo vemos desde la perspectiva de los **type guards**: cómo encapsularlo en funciones reutilizables que TypeScript entiende.

**typeof como type guard inline**

\`\`\`ts
function fn(x: string | number) {
  if (typeof x === 'string') { ... }  // inline type guard
}
\`\`\`

**typeof encapsulado en una función**

\`\`\`ts
function esString(valor: unknown): valor is string {
  return typeof valor === 'string'
}

function esNumero(valor: unknown): valor is number {
  return typeof valor === 'number' && !Number.isNaN(valor)
}

function esBooleano(valor: unknown): valor is boolean {
  return typeof valor === 'boolean'
}
\`\`\`

**¿Por qué encapsular?**

1. **Reutilización**: Escribes la verificación una sola vez y la usas en múltiples funciones.
2. **Nombres descriptivos**: \`esNumeroValido()\` comunica más que \`typeof x === "number" && !isNaN(x)\`.
3. **Complejidad oculta**: Puedes agregar verificaciones adicionales sin cambiar los llamadores.

**Type guards con typeof para tipos más estrictos**

A veces typeof no es suficiente — el tipo TypeScript y el verificable con typeof no coinciden exactamente:

\`\`\`ts
// number incluye NaN e Infinity en JavaScript
// pero quizás tu lógica solo acepta números finitos
function esNumeroFinito(valor: unknown): valor is number {
  return typeof valor === 'number' && Number.isFinite(valor)
}

// string no vacío
function esStringNoVacio(valor: unknown): valor is string {
  return typeof valor === 'string' && valor.trim().length > 0
}
\`\`\`

**Combinando type guards**

\`\`\`ts
function esStringONumero(valor: unknown): valor is string | number {
  return typeof valor === 'string' || typeof valor === 'number'
}
\`\`\`

**Uso en arrays con filter**

Los type guards son especialmente útiles con \`.filter()\`:

\`\`\`ts
const datos: unknown[] = ['hola', 42, null, 'mundo', true, 7]

const soloStrings = datos.filter((x): x is string => typeof x === 'string')
// soloStrings: string[] ← TypeScript conoce el tipo

const soloNumeros = datos.filter(esNumero)
// soloNumeros: number[]
\`\`\`

Sin el type guard en filter, TypeScript inferiría \`unknown[]\` como resultado.`,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

// ── Type guards básicos de primitivos ────────────────────────────────────

function esString(v: unknown): v is string {
  return typeof v === 'string'
}

function esNumero(v: unknown): v is number {
  return typeof v === 'number' && !Number.isNaN(v)
}

function esBooleano(v: unknown): v is boolean {
  return typeof v === 'boolean'
}

// ── Type guards con condiciones adicionales ───────────────────────────────

function esStringNoVacio(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

function esEnteroPositivo(v: unknown): v is number {
  return typeof v === 'number' && Number.isInteger(v) && v > 0
}

// ── Uso de type guards en funciones ──────────────────────────────────────

function formatearValor(valor: unknown): string {
  if (esStringNoVacio(valor)) {
    return \`"\${valor.trim()}"\`
  }
  if (esNumero(valor)) {
    return valor.toFixed(2)
  }
  if (esBooleano(valor)) {
    return valor ? 'verdadero' : 'falso'
  }
  return '(desconocido)'
}

console.log(formatearValor('  hola  '))  // → "hola"
console.log(formatearValor(3.14159))     // → 3.14
console.log(formatearValor(false))       // → falso
console.log(formatearValor(null))        // → (desconocido)

// ── Type guards con filter tipado ─────────────────────────────────────────

const formulario: Record<string, unknown> = {
  nombre: 'Ana',
  edad: 25,
  activo: true,
  empresa: null,
  sueldo: NaN,
}

const camposTexto = Object.values(formulario).filter(esString)
// camposTexto: string[]
console.log('Textos:', camposTexto)  // → ['Ana']

const camposNumericos = Object.values(formulario).filter(esNumero)
// camposNumericos: number[]
console.log('Números:', camposNumericos)  // → [25]

// ── Filtrar arreglo de resultados mixtos ──────────────────────────────────

type Resultado = string | number | null

const resultados: Resultado[] = ['ok', null, 200, null, 'error', 404]

const soloMensajes = resultados.filter((r): r is string => esString(r))
const soloCodigos = resultados.filter((r): r is number => esNumero(r))

console.log('Mensajes:', soloMensajes)  // → ['ok', 'error']
console.log('Códigos:', soloCodigos)    // → [200, 404]`,
    keyPoints: [
      'Encapsular typeof en funciones con predicado crea type guards reutilizables.',
      'Los type guards permiten agregar condiciones adicionales (ej: !isNaN, .trim().length > 0) sin cambiar el uso.',
      'Con filter, los type guards inline \`: x is Tipo =>\` hacen que TypeScript infiera el tipo correcto del arreglo resultante.',
      'esNumero debe incluir !Number.isNaN() porque NaN tiene typeof "number" en JavaScript.',
      'Los type guards son funciones normales de JavaScript — no hay magia especial, solo una firma especial.',
    ],
    exercise: {
      description:
        'Crea tres type guards: \`esEmail(v)\` que verifica que sea string y contenga "@", \`esEdadValida(v)\` que verifique que sea number, positivo y menor que 150, y \`esNombreValido(v)\` que verifique que sea string no vacío de al menos 2 caracteres. Luego úsalos para validar un objeto de formulario y devolver una lista de errores.',
      hint: 'Cada type guard tiene tipo de retorno \`v is string\` o \`v is number\` según corresponda. Para esEmail, usa \`typeof v === "string" && v.includes("@")\`. Para esEdadValida, verifica el rango.',
    },
    quiz: [
      {
        question:
          '¿Por qué un type guard para number debería incluir \`!Number.isNaN(valor)\`?',
        options: [
          'Porque TypeScript no reconoce NaN como number',
          'Porque NaN tiene typeof "number" en JavaScript, pero raramente es un número válido en la práctica',
          'Porque isNaN es más rápido que typeof',
          'Porque Number.isNaN es un tipo guard automático de TypeScript',
        ],
        correctAnswer:
          'Porque NaN tiene typeof "number" en JavaScript, pero raramente es un número válido en la práctica',
        correctFeedback:
          'Correcto. \`typeof NaN === "number"\` en JavaScript. Si tu type guard solo usa typeof, aceptará NaN como un number válido, lo que puede causar errores en cálculos. Agregar \`!Number.isNaN()\` hace el guard más robusto.',
        incorrectFeedback:
          'No es correcto. El problema es que \`typeof NaN === "number"\` en JavaScript. Si tu lógica requiere números válidos para cálculos, NaN causaría errores. Por eso es buena práctica verificar \`!Number.isNaN(valor)\` además de typeof.',
      },
      {
        question:
          '¿Qué tipo infiere TypeScript para \`arr.filter(esString)\` cuando \`esString(v: unknown): v is string\`?',
        options: [
          'unknown[]',
          'boolean[]',
          'string[]',
          'Array<string | unknown>',
        ],
        correctAnswer: 'string[]',
        correctFeedback:
          'Correcto. Cuando usas un type guard como función en filter, TypeScript usa el predicado para inferir el tipo del arreglo resultante. \`arr.filter(esString)\` devuelve \`string[]\`.',
        incorrectFeedback:
          'No es correcto. Cuando filter recibe una función con type predicate (\`v is string\`), TypeScript infiere que el arreglo resultante solo contiene el tipo del predicado: \`string[]\`.',
      },
      {
        question:
          '¿Cuál es la diferencia entre \`isNaN()\` y \`Number.isNaN()\`?',
        options: [
          'No hay diferencia',
          'isNaN() convierte el argumento a number antes de verificar; Number.isNaN() solo devuelve true si ya es NaN sin conversión',
          'Number.isNaN() es más lento',
          'isNaN() solo funciona en TypeScript, Number.isNaN() en JavaScript',
        ],
        correctAnswer:
          'isNaN() convierte el argumento a number antes de verificar; Number.isNaN() solo devuelve true si ya es NaN sin conversión',
        correctFeedback:
          'Correcto. \`isNaN("hola")\` devuelve true porque "hola" convertido a number es NaN. \`Number.isNaN("hola")\` devuelve false porque "hola" no es NaN — es un string. Para type guards, usa \`Number.isNaN()\`.',
        incorrectFeedback:
          'No es correcto. La diferencia es importante. \`isNaN()\` hace conversión de tipo implícita: \`isNaN("abc")\` es true porque "abc" → NaN. \`Number.isNaN()\` es estricto: solo es true si el valor ya es NaN.',
      },
      {
        question:
          '¿Qué ventaja tiene crear una función \`esStringNoVacio(v)\` en lugar de escribir \`typeof v === "string" && v.trim().length > 0\` directamente cada vez?',
        options: [
          'Es más rápido en tiempo de ejecución',
          'Se puede reutilizar, tiene un nombre descriptivo y si la lógica cambia solo se actualiza en un lugar',
          'TypeScript entiende mejor las funciones que las expresiones inline',
          'Evita errores de compilación',
        ],
        correctAnswer:
          'Se puede reutilizar, tiene un nombre descriptivo y si la lógica cambia solo se actualiza en un lugar',
        correctFeedback:
          'Correcto. Las funciones type guard son reutilizables, descriptivas y fáciles de mantener. Si las reglas de validación cambian, solo modificas la función, no todas las llamadas.',
        incorrectFeedback:
          'No es correcto. La ventaja principal es la reutilización y mantenibilidad. Una función con nombre descriptivo es más legible que una expresión larga, y si la lógica cambia, solo modificas la función.',
      },
      {
        question:
          '¿Puede un type guard personalizado verificar condiciones de negocio además de tipos?',
        options: [
          'No, solo puede verificar el tipo JavaScript (string, number, etc.)',
          'Sí, puede incluir cualquier lógica mientras el tipo de retorno sea un predicado',
          'Solo si usa instanceof',
          'Solo en modo strict de TypeScript',
        ],
        correctAnswer:
          'Sí, puede incluir cualquier lógica mientras el tipo de retorno sea un predicado',
        correctFeedback:
          'Correcto. Un type guard puede incluir cualquier lógica de verificación. La clave es que TypeScript confíe en tu declaración del predicado. Tú eres responsable de que la lógica sea correcta.',
        incorrectFeedback:
          'No es correcto. Un type guard puede contener cualquier lógica: verificar rangos, formatos, estructuras, etc. Lo único especial es el tipo de retorno \`x is Tipo\`. TypeScript confía en que tu función hace lo que dice.',
      },
    ],
  },

  // ── Lección 90 ───────────────────────────────────────────────────────────
  {
    slug: 'type-guards-in',
    title: 'Type guards con in',
    module: 'Type guards',
    moduleNumber: 12,
    order: 90,
    description:
      'Aprende a validar estructuras de objetos usando el operador in.',
    explanation: `El operador \`in\` es un type guard poderoso para distinguir entre tipos de objeto. En este módulo aprenderemos a usarlo dentro de funciones predicado para crear type guards reutilizables para objetos.

**in como type guard inline**

\`\`\`ts
function procesar(item: Tarea | Proyecto): void {
  if ('fechaLimite' in item) {
    // TypeScript sabe: item es Tarea (asumiendo que Proyecto no tiene fechaLimite)
    console.log(item.fechaLimite)
  }
}
\`\`\`

**in en funciones predicado**

\`\`\`ts
interface Tarea {
  titulo: string
  fechaLimite: string
}

interface Proyecto {
  nombre: string
  presupuesto: number
}

function esTarea(item: Tarea | Proyecto): item is Tarea {
  return 'fechaLimite' in item
}

function esProyecto(item: Tarea | Proyecto): item is Proyecto {
  return 'presupuesto' in item
}
\`\`\`

**Verificar objetos de forma segura**

Cuando el tipo de entrada es \`unknown\`, necesitas verificar paso a paso:

\`\`\`ts
function tienePropiedad<T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> {
  return key in obj
}
\`\`\`

Esta es una versión genérica más avanzada. Por ahora, veamos la versión simple:

\`\`\`ts
function esObjetoConNombre(dato: unknown): dato is { nombre: string } {
  return (
    typeof dato === 'object' &&
    dato !== null &&
    'nombre' in dato &&
    typeof (dato as { nombre: unknown }).nombre === 'string'
  )
}
\`\`\`

**Patrón: verificar múltiples propiedades**

\`\`\`ts
interface Perfil {
  nombre: string
  edad: number
  email: string
}

function esPerfil(dato: unknown): dato is Perfil {
  if (typeof dato !== 'object' || dato === null) return false

  const obj = dato as Record<string, unknown>
  return (
    typeof obj.nombre === 'string' &&
    typeof obj.edad === 'number' &&
    typeof obj.email === 'string'
  )
}
\`\`\`

**Importante:** TypeScript confía en tu implementación. Si tu type guard dice que algo es un \`Perfil\` cuando no lo es, TypeScript no lo detectará. La responsabilidad es tuya.

**Usar in para union types de objetos**

\`\`\`ts
type Evento =
  | { tipo: 'click'; coordX: number; coordY: number }
  | { tipo: 'teclado'; tecla: string }
  | { tipo: 'scroll'; delta: number }

function procesarEvento(evento: Evento): void {
  if ('coordX' in evento) {
    // TypeScript sabe: evento es el tipo click
    console.log(\`Click en (\${evento.coordX}, \${evento.coordY})\`)
  } else if ('tecla' in evento) {
    console.log(\`Tecla presionada: \${evento.tecla}\`)
  } else {
    console.log(\`Scroll: \${evento.delta}px\`)
  }
}
\`\`\``,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

interface TareaSimple {
  titulo: string
  completada: boolean
}

interface TareaConFecha extends TareaSimple {
  fechaLimite: string
  prioridad: 'alta' | 'media' | 'baja'
}

type Tarea = TareaSimple | TareaConFecha

// ── Type guards con in ────────────────────────────────────────────────────

function tieneFecharLimite(tarea: Tarea): tarea is TareaConFecha {
  return 'fechaLimite' in tarea
}

function mostrarTarea(tarea: Tarea): void {
  console.log(\`→ \${tarea.titulo} [\${tarea.completada ? 'hecha' : 'pendiente'}]\`)

  if (tieneFecharLimite(tarea)) {
    // TypeScript sabe: tarea es TareaConFecha
    console.log(\`  Límite: \${tarea.fechaLimite} | Prioridad: \${tarea.prioridad}\`)
  }
}

const simple: TareaSimple = { titulo: 'Comprar leche', completada: false }
const conFecha: TareaConFecha = {
  titulo: 'Entregar informe',
  completada: false,
  fechaLimite: '2024-12-01',
  prioridad: 'alta',
}

mostrarTarea(simple)
// → Comprar leche [pendiente]

mostrarTarea(conFecha)
// → Entregar informe [pendiente]
//   Límite: 2024-12-01 | Prioridad: alta

// ── Type guard para datos unknown ─────────────────────────────────────────

interface ConfigApp {
  idioma: string
  tema: 'oscuro' | 'claro'
  notificaciones: boolean
}

function esConfigApp(dato: unknown): dato is ConfigApp {
  if (typeof dato !== 'object' || dato === null) return false

  const obj = dato as Record<string, unknown>
  return (
    typeof obj.idioma === 'string' &&
    (obj.tema === 'oscuro' || obj.tema === 'claro') &&
    typeof obj.notificaciones === 'boolean'
  )
}

const configGuardada: unknown = JSON.parse('{"idioma":"es","tema":"oscuro","notificaciones":true}')

if (esConfigApp(configGuardada)) {
  // TypeScript sabe: configGuardada es ConfigApp
  console.log(\`Idioma: \${configGuardada.idioma}, Tema: \${configGuardada.tema}\`)
}`,
    keyPoints: [
      'in se puede encapsular en funciones predicado para crear type guards reutilizables para objetos.',
      'Al verificar datos unknown, primero comprueba typeof === "object" && !== null antes de usar in.',
      'TypeScript confía en tu implementación — si el type guard es incorrecto, no lo detectará.',
      'El patrón \`dato as Record<string, unknown>\` es útil para acceder a propiedades de un objeto unknown.',
      'Los type guards con in son ideales para distinguir variantes de un mismo union type de objetos.',
    ],
    exercise: {
      description:
        'Crea interfaces para tres tipos de notificación: \`NotifEmail\` (tiene \`destinatario: string\`, \`asunto: string\`), \`NotifSMS\` (tiene \`telefono: string\`, \`mensaje: string\`), \`NotifPush\` (tiene \`dispositivoId: string\`, \`titulo: string\`). Crea un type guard para cada uno y una función \`enviarNotificacion\` que use los guards para imprimir información específica de cada tipo.',
      hint: 'Cada type guard verifica una propiedad exclusiva de ese tipo usando \`in\`. Por ejemplo, \`esPush\` verifica si \`"dispositivoId" in notif\`. Luego en la función usa if con cada guard.',
    },
    quiz: [
      {
        question:
          '¿Por qué necesitas verificar \`typeof dato === "object" && dato !== null\` antes de usar \`in\` con un valor de tipo \`unknown\`?',
        options: [
          'Es una preferencia de estilo, no es técnicamente necesario',
          'Porque in solo funciona con objetos, y typeof "object" excluye null ya que typeof null === "object"',
          'Porque in no funciona con objetos null',
          'Para mejorar el rendimiento del código',
        ],
        correctAnswer:
          'Porque in solo funciona con objetos, y typeof "object" excluye null ya que typeof null === "object"',
        correctFeedback:
          'Correcto. El operador in requiere un objeto en el lado derecho. Primero verificamos que es un objeto con typeof, pero typeof null === "object", así que también necesitamos \`dato !== null\` explícitamente.',
        incorrectFeedback:
          'No es correcto. El operador in necesita un objeto en el lado derecho. \`typeof dato === "object"\` verifica que es un objeto, pero como typeof null === "object", también se colaría null. Por eso necesitas la segunda condición \`dato !== null\`.',
      },
      {
        question:
          '¿Qué hace \`dato as Record<string, unknown>\` dentro de un type guard?',
        options: [
          'Convierte dato a un tipo seguro para acceder a sus propiedades',
          'Le dice a TypeScript "confía en mí, esto es un objeto con propiedades string desconocidas" para poder acceder a ellas',
          'Hace una copia del objeto',
          'Elimina las propiedades null del objeto',
        ],
        correctAnswer:
          'Le dice a TypeScript "confía en mí, esto es un objeto con propiedades string desconocidas" para poder acceder a ellas',
        correctFeedback:
          'Correcto. Después de verificar que es un objeto no-null, usamos \`as Record<string, unknown>\` para decirle a TypeScript que podemos acceder a sus propiedades. Dentro de un type guard esto es aceptable porque serás tú quien verifique los tipos de cada propiedad.',
        incorrectFeedback:
          'No es correcto. \`as Record<string, unknown>\` es una aserción de tipo que le dice a TypeScript que el objeto tiene propiedades de tipo unknown. Dentro de un type guard es necesario para acceder a las propiedades y verificar sus tipos.',
      },
      {
        question:
          '¿Qué pasa si implementas incorrectamente un type guard? Por ejemplo, si siempre devuelve true.',
        options: [
          'TypeScript detecta el error y muestra una advertencia',
          'TypeScript confía en tu implementación. Si la lógica es incorrecta, habrá errores en tiempo de ejecución',
          'TypeScript descarta el type guard si detecta que es incorrecto',
          'El compilador lanza un error de compilación',
        ],
        correctAnswer:
          'TypeScript confía en tu implementación. Si la lógica es incorrecta, habrá errores en tiempo de ejecución',
        correctFeedback:
          'Correcto. TypeScript confía en que tu type guard es correcto. Si la implementación tiene bugs, TypeScript no los detecta — solo ve el tipo declarado. Los errores aparecerán en tiempo de ejecución.',
        incorrectFeedback:
          'No es correcto. TypeScript solo ve la firma de tu type guard (el predicado). No verifica que la implementación sea correcta. Si tu guard siempre devuelve true, TypeScript creerá que siempre es ese tipo y los errores aparecerán en tiempo de ejecución.',
      },
      {
        question:
          '¿Para qué sirve usar type guards con \`in\` al procesar resultados de \`JSON.parse()\`?',
        options: [
          'JSON.parse devuelve any, que ya tiene todos los tipos',
          'JSON.parse devuelve unknown y los type guards permiten verificar que el objeto tiene la estructura esperada antes de usarlo con seguridad',
          'JSON.parse lanza un error si los tipos no coinciden',
          'Solo sirve si el JSON proviene de una API externa',
        ],
        correctAnswer:
          'JSON.parse devuelve unknown y los type guards permiten verificar que el objeto tiene la estructura esperada antes de usarlo con seguridad',
        correctFeedback:
          'Correcto. En TypeScript moderno, JSON.parse puede tipificarse como unknown. Los type guards permiten verificar que el objeto parseado tiene exactamente la estructura que esperas antes de tratarlo con ese tipo.',
        incorrectFeedback:
          'No es correcto. El problema con JSON.parse es que puede devolver cualquier cosa. Los type guards permiten verificar en tiempo de ejecución que el objeto tiene las propiedades correctas antes de tratarlo como un tipo específico.',
      },
      {
        question:
          '¿Cuál es la propiedad correcta para usar \`in\` para distinguir \`{ nombre: string }\` de \`{ email: string }\`?',
        options: [
          '"nombre" in obj — siempre distingue los dos',
          'Depende de cuál quieres identificar: "nombre" in obj identifica el primer tipo, "email" in obj identifica el segundo',
          'typeof obj.nombre === "string"',
          'No es posible distinguirlos con in',
        ],
        correctAnswer:
          'Depende de cuál quieres identificar: "nombre" in obj identifica el primer tipo, "email" in obj identifica el segundo',
        correctFeedback:
          'Correcto. Puedes usar la propiedad exclusiva de cada tipo para identificarlo. \`"nombre" in obj\` identifica el objeto que tiene nombre, y \`"email" in obj\` el que tiene email.',
        incorrectFeedback:
          'No es correcto. Para distinguir entre los dos tipos, usa la propiedad exclusiva de cada uno: \`"nombre" in obj\` para el primer tipo y \`"email" in obj\` para el segundo. TypeScript aplica narrowing en consecuencia.',
      },
    ],
  },

  // ── Lección 91 ───────────────────────────────────────────────────────────
  {
    slug: 'type-predicates-is',
    title: 'Type predicates con is',
    module: 'Type guards',
    moduleNumber: 12,
    order: 91,
    description:
      'Aprende a crear funciones que devuelven predicados de tipo usando la palabra is.',
    explanation: `Los **type predicates** son la característica que convierte una función booleana normal en un type guard que TypeScript entiende. La sintaxis es simple pero poderosa.

**Sintaxis del predicado**

\`\`\`ts
function nombre(parametro: TipoEntrada): parametro is TipoResultado {
  // lógica de verificación
  return /* boolean */
}
\`\`\`

El tipo de retorno \`parametro is TipoResultado\` es el predicado. Le dice a TypeScript: "si esta función devuelve true, entonces parametro es de tipo TipoResultado".

**Diferencia entre boolean y predicado**

\`\`\`ts
// SIN predicado: TypeScript no aplica narrowing
function verificarString1(x: unknown): boolean {
  return typeof x === 'string'
}

function fn1(x: string | number): void {
  if (verificarString1(x)) {
    x.toUpperCase()  // Error: TypeScript no sabe que x es string
  }
}

// CON predicado: TypeScript sí aplica narrowing
function verificarString2(x: unknown): x is string {
  return typeof x === 'string'
}

function fn2(x: string | number): void {
  if (verificarString2(x)) {
    x.toUpperCase()  // ✓ TypeScript sabe que x es string
  }
}
\`\`\`

**El predicado puede ser más específico que el parámetro**

\`\`\`ts
interface Animal {
  nombre: string
}

interface Perro extends Animal {
  raza: string
  ladrar(): void
}

function esPerro(animal: Animal): animal is Perro {
  return 'raza' in animal && 'ladrar' in animal
}
\`\`\`

**Narrowing en ambas ramas**

Cuando usas un type guard en un if/else, TypeScript aplica narrowing en **ambas ramas**:

\`\`\`ts
function procesar(x: string | number): void {
  if (esString(x)) {
    // x es string aquí
    console.log(x.toUpperCase())
  } else {
    // x es number aquí (TypeScript lo sabe)
    console.log(x.toFixed(2))
  }
}
\`\`\`

**Type guards con genéricos**

Los type guards también funcionan con genéricos para verificaciones más flexibles:

\`\`\`ts
function esArrayDe<T>(
  valor: unknown,
  elementGuard: (el: unknown) => el is T
): valor is T[] {
  return Array.isArray(valor) && valor.every(elementGuard)
}

const datos: unknown = ['a', 'b', 'c']
if (esArrayDe(datos, esString)) {
  // TypeScript sabe: datos es string[]
  console.log(datos.map(s => s.toUpperCase()))
}
\`\`\``,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

// ── La diferencia crítica: boolean vs predicado ───────────────────────────

// Sin predicado — TypeScript NO aplica narrowing
function verificarSinPredicado(x: unknown): boolean {
  return typeof x === 'string'
}

// Con predicado — TypeScript SÍ aplica narrowing
function esString(x: unknown): x is string {
  return typeof x === 'string'
}

function demostrar(entrada: unknown): void {
  if (verificarSinPredicado(entrada)) {
    // entrada sigue siendo unknown aquí
    // entrada.toUpperCase()  // Error: unknown no tiene ese método
  }

  if (esString(entrada)) {
    // entrada es string aquí ✓
    console.log(entrada.toUpperCase())
  }
}

// ── Predicados para tipos específicos ─────────────────────────────────────

interface Rol {
  nombre: string
  permisos: string[]
}

interface Permiso {
  accion: string
  recurso: string
}

type EntidadAuth = Rol | Permiso

function esRol(entidad: EntidadAuth): entidad is Rol {
  return 'permisos' in entidad
}

function esPermiso(entidad: EntidadAuth): entidad is Permiso {
  return 'accion' in entidad && 'recurso' in entidad
}

function describirEntidad(entidad: EntidadAuth): string {
  if (esRol(entidad)) {
    // TypeScript sabe: entidad es Rol
    return \`Rol: \${entidad.nombre} (\${entidad.permisos.length} permisos)\`
  } else {
    // TypeScript sabe: entidad es Permiso
    return \`Permiso: \${entidad.accion} sobre \${entidad.recurso}\`
  }
}

const admin: Rol = { nombre: 'Admin', permisos: ['leer', 'escribir', 'eliminar'] }
const leer: Permiso = { accion: 'leer', recurso: 'productos' }

console.log(describirEntidad(admin))  // → Rol: Admin (3 permisos)
console.log(describirEntidad(leer))   // → Permiso: leer sobre productos

// ── Predicado que estrecha el tipo ────────────────────────────────────────

interface Vehiculo { marca: string }
interface Coche extends Vehiculo { puertas: number }
interface Moto extends Vehiculo { cilindrada: number }

function esCoche(v: Vehiculo): v is Coche {
  return 'puertas' in v
}

function describir(v: Vehiculo): string {
  if (esCoche(v)) {
    return \`Coche \${v.marca} con \${v.puertas} puertas\`
  }
  return \`Vehículo: \${v.marca}\`
}`,
    keyPoints: [
      'La sintaxis \`parametro is Tipo\` en el tipo de retorno convierte una función en un type guard.',
      'Sin el predicado, una función que devuelve boolean NO aplica narrowing — TypeScript necesita la declaración explícita.',
      'TypeScript aplica narrowing en ambas ramas del if/else cuando usas un type guard.',
      'El predicado puede estrechar un tipo amplio (como Animal) a uno más específico (como Perro).',
      'La responsabilidad de la implementación correcta es tuya — TypeScript confía en el predicado.',
    ],
    exercise: {
      description:
        'Tienes \`type Figura = Circulo | Rectangulo | Triangulo\` donde cada uno tiene propiedades únicas. Escribe un type predicate para cada uno y una función \`calcularArea(figura: Figura): number\` que use los predicados. Circulo tiene radio, Rectangulo tiene ancho y alto, Triangulo tiene base y altura.',
      hint: 'Cada predicado verifica una propiedad exclusiva con \`in\`. La función calcularArea usa if con cada predicado. Para el último tipo no necesitas predicado si los otros dos están cubiertos.',
    },
    quiz: [
      {
        question:
          '¿Por qué TypeScript no aplica narrowing cuando una función devuelve boolean en lugar de un predicado?',
        options: [
          'TypeScript sí aplica narrowing con boolean, son equivalentes',
          'TypeScript no puede conocer qué tipo garantiza la función si el retorno es solo boolean, sin el predicado declarado',
          'Boolean es para JavaScript, los predicados son solo para TypeScript',
          'TypeScript aplica narrowing solo con typeof y instanceof directamente',
        ],
        correctAnswer:
          'TypeScript no puede conocer qué tipo garantiza la función si el retorno es solo boolean, sin el predicado declarado',
        correctFeedback:
          'Correcto. Si el tipo de retorno es \`boolean\`, TypeScript solo sabe que la función puede devolver true o false, pero no sabe qué implica eso sobre el tipo del parámetro. El predicado \`x is Tipo\` es la declaración explícita que TypeScript necesita.',
        incorrectFeedback:
          'No es correcto. TypeScript necesita que declares explícitamente qué garantiza tu función. Con \`boolean\`, TypeScript no sabe qué implica el true o false sobre el tipo del parámetro. El predicado \`x is Tipo\` es esa declaración.',
      },
      {
        question:
          '¿Qué tipo tiene \`x\` en el bloque \`else\` de \`if (esString(x))\` donde \`x: string | number\`?',
        options: [
          'string | number',
          'string',
          'number',
          'unknown',
        ],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. En el else, TypeScript descarta string del union y queda solo number. Los type guards aplican narrowing en ambas ramas.',
        incorrectFeedback:
          'No es correcto. TypeScript aplica narrowing en ambas ramas: en el if x es string, en el else x es lo que queda del union sin string — es decir, number.',
      },
      {
        question:
          '¿Cuál de estos es el tipo de retorno correcto para un type guard que verifica si algo es un array de strings?',
        options: [
          'boolean',
          'valor is string',
          'valor is string[]',
          'Array<string>',
        ],
        correctAnswer: 'valor is string[]',
        correctFeedback:
          'Correcto. Para verificar que algo es un array de strings, el predicado debe ser \`valor is string[]\`. Después del guard, TypeScript sabrá que el valor es un arreglo de strings.',
        incorrectFeedback:
          'No es correcto. El predicado debe coincidir con el tipo exacto que verificas. Para un array de strings, el predicado es \`valor is string[]\`. \`valor is string\` solo aplica para una sola string, no para un arreglo.',
      },
      {
        question:
          '¿Qué ocurre si usas un type predicate con un tipo que no es compatible con el parámetro?\n\n\`\`\`ts\nfunction fn(x: string): x is number { return true }\n\`\`\`',
        options: [
          'TypeScript lo permite porque el predicado es una promesa del programador',
          'TypeScript da un error porque number no es compatible con string',
          'TypeScript ignora el predicado',
          'El código compila pero lanza un error en runtime',
        ],
        correctAnswer:
          'TypeScript da un error porque number no es compatible con string',
        correctFeedback:
          'Correcto. TypeScript verifica que el tipo del predicado sea compatible con el tipo del parámetro. No puedes declarar que un string es number — no tiene sentido.',
        incorrectFeedback:
          'No es correcto. TypeScript sí verifica que el predicado sea compatible con el parámetro. Si dices que un string es number, TypeScript da un error porque esos tipos no son compatibles.',
      },
      {
        question:
          '¿Cuándo usarías un type predicate en lugar de inline narrowing (como \`typeof x === "string"\`)?',
        options: [
          'Nunca, los predicados son innecesarios si tienes inline narrowing',
          'Cuando la verificación es compleja o se repite en múltiples lugares del código',
          'Solo cuando el tipo es una clase, no una interfaz',
          'Solo cuando el parámetro es unknown',
        ],
        correctAnswer:
          'Cuando la verificación es compleja o se repite en múltiples lugares del código',
        correctFeedback:
          'Correcto. Para verificaciones simples como typeof, el inline es suficiente. Pero cuando la verificación es compleja (verificar múltiples propiedades) o se repite en muchos lugares, crear una función predicado es más limpio y reutilizable.',
        incorrectFeedback:
          'No es correcto. El inline narrowing es perfecto para verificaciones simples. Los type predicates brillan cuando la verificación es compleja (como verificar la estructura completa de un objeto) o cuando la misma verificación se necesita en múltiples lugares.',
      },
    ],
  },

  // ── Lección 92 ───────────────────────────────────────────────────────────
  {
    slug: 'type-guards-personalizados',
    title: 'Crear type guards personalizados',
    module: 'Type guards',
    moduleNumber: 12,
    order: 92,
    description:
      'Aprende a escribir tus propios type guards para validar datos de forma reutilizable.',
    explanation: `Crear type guards personalizados es una habilidad práctica que usarás frecuentemente en proyectos reales. La clave es combinar las verificaciones correctas y expresarlas como predicados.

**Estrategia para crear un type guard**

1. Define la interfaz o tipo que quieres verificar.
2. Lista las propiedades obligatorias y sus tipos.
3. Verifica que el dato sea un objeto no-null.
4. Verifica cada propiedad con typeof o comparaciones.
5. Devuelve true solo si todas las verificaciones pasan.

**Ejemplo paso a paso**

\`\`\`ts
interface Producto {
  id: number
  nombre: string
  precio: number
  activo: boolean
}

function esProducto(dato: unknown): dato is Producto {
  // Paso 1: verificar que es un objeto no-null
  if (typeof dato !== 'object' || dato === null) return false

  // Paso 2: acceder a las propiedades de forma segura
  const obj = dato as Record<string, unknown>

  // Paso 3: verificar cada propiedad
  return (
    typeof obj.id === 'number' &&
    typeof obj.nombre === 'string' &&
    typeof obj.precio === 'number' &&
    typeof obj.activo === 'boolean'
  )
}
\`\`\`

**Type guard con propiedades opcionales**

\`\`\`ts
interface Config {
  host: string
  puerto: number
  ssl?: boolean     // opcional
  timeout?: number  // opcional
}

function esConfig(dato: unknown): dato is Config {
  if (typeof dato !== 'object' || dato === null) return false

  const obj = dato as Record<string, unknown>

  // Propiedades requeridas
  if (typeof obj.host !== 'string') return false
  if (typeof obj.puerto !== 'number') return false

  // Propiedades opcionales: si existen, verificar el tipo
  if ('ssl' in obj && typeof obj.ssl !== 'boolean') return false
  if ('timeout' in obj && typeof obj.timeout !== 'number') return false

  return true
}
\`\`\`

**Type guard para arreglos**

\`\`\`ts
function esArregloDeStrings(dato: unknown): dato is string[] {
  return Array.isArray(dato) && dato.every((item) => typeof item === 'string')
}

function esArregloDe<T>(
  dato: unknown,
  guard: (item: unknown) => item is T
): dato is T[] {
  return Array.isArray(dato) && dato.every(guard)
}
\`\`\`

**Composición de type guards**

\`\`\`ts
// Guard de bajo nivel
function tieneId(dato: unknown): dato is { id: number } {
  return typeof dato === 'object' && dato !== null && 'id' in dato &&
    typeof (dato as { id: unknown }).id === 'number'
}

// Guard compuesto
function esProductoCompleto(dato: unknown): dato is Producto {
  return esProducto(dato) && tieneId(dato)
}
\`\`\``,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

// ── Interfaz y su type guard ──────────────────────────────────────────────

interface Estudiante {
  nombre: string
  edad: number
  notas: number[]
  activo: boolean
  email?: string
}

function esEstudiante(dato: unknown): dato is Estudiante {
  if (typeof dato !== 'object' || dato === null) return false

  const obj = dato as Record<string, unknown>

  // Propiedades requeridas
  if (typeof obj.nombre !== 'string') return false
  if (typeof obj.edad !== 'number' || obj.edad < 0) return false
  if (!Array.isArray(obj.notas)) return false
  if (!obj.notas.every((n: unknown) => typeof n === 'number')) return false
  if (typeof obj.activo !== 'boolean') return false

  // Propiedad opcional
  if ('email' in obj && typeof obj.email !== 'string') return false

  return true
}

// ── Usar el type guard ────────────────────────────────────────────────────

const datosExternos: unknown[] = [
  { nombre: 'Ana', edad: 20, notas: [8, 9, 10], activo: true },
  { nombre: 'Luis', edad: 22, notas: [7, 8], activo: false, email: 'luis@edu.com' },
  { nombre: 'Error', notas: 'mal tipo', activo: true },  // ← inválido
  null,                                                    // ← inválido
]

const estudiantes = datosExternos.filter(esEstudiante)
// TypeScript sabe: estudiantes es Estudiante[]

console.log(\`Estudiantes válidos: \${estudiantes.length}\`)

estudiantes.forEach((est) => {
  const promedio = est.notas.reduce((a, b) => a + b, 0) / est.notas.length
  console.log(\`\${est.nombre}: promedio \${promedio.toFixed(1)}\`)
})

// ── Type guard para arreglo tipado ────────────────────────────────────────

function esArregloDe<T>(
  dato: unknown,
  guard: (item: unknown) => item is T
): dato is T[] {
  return Array.isArray(dato) && dato.every(guard)
}

function esNumero(v: unknown): v is number {
  return typeof v === 'number' && !Number.isNaN(v)
}

const listaPuntos: unknown = [10, 20, 30, 40]

if (esArregloDe(listaPuntos, esNumero)) {
  // TypeScript sabe: listaPuntos es number[]
  const total = listaPuntos.reduce((a, b) => a + b, 0)
  console.log('Total puntos:', total)  // → 100
}`,
    keyPoints: [
      'La estrategia para crear un type guard: verificar objeto no-null, luego cada propiedad.',
      'Usa \`dato as Record<string, unknown>\` para acceder a propiedades de forma segura después de verificar que es un objeto.',
      'Las propiedades opcionales deben verificarse con \`if ("prop" in obj && typeof obj.prop !== "tipo")\` para no fallar si no existen.',
      'Los type guards se pueden componer: un guard complejo puede llamar a guards más simples.',
      'Los type guards con genéricos (\`esArregloDe<T>\`) permiten crear verificaciones reutilizables para arreglos.',
    ],
    exercise: {
      description:
        'Crea un type guard \`esRespuestaApi\` para la interfaz:\n\`\`\`ts\ninterface RespuestaApi {\n  ok: boolean\n  codigo: number\n  datos: unknown\n  mensaje?: string\n}\n\`\`\`\nLuego usa el guard para procesar un array de \`unknown[]\` que simula respuestas de API, filtrando solo las válidas y mostrando las que tienen ok === true.',
      hint: 'Verifica: objeto no-null, ok boolean, codigo number, datos exists (puede ser cualquier cosa), y si mensaje existe que sea string. Usa filter con el guard para obtener solo las válidas.',
    },
    quiz: [
      {
        question:
          '¿Cuál es el primer paso al crear un type guard para un objeto?',
        options: [
          'Verificar cada propiedad con typeof',
          'Verificar que el dato sea un objeto no-null: typeof dato === "object" && dato !== null',
          'Usar instanceof para verificar el constructor',
          'Convertir el dato a any para poder acceder a sus propiedades',
        ],
        correctAnswer:
          'Verificar que el dato sea un objeto no-null: typeof dato === "object" && dato !== null',
        correctFeedback:
          'Correcto. Antes de verificar propiedades, necesitas saber que tienes un objeto. Sin esta verificación, intentar acceder a propiedades de null causaría un error.',
        incorrectFeedback:
          'No es correcto. El primer paso es verificar que el dato es realmente un objeto no-null. Si no haces esto, usar \`in\` o acceder a propiedades sobre null o un primitivo causaría errores.',
      },
      {
        question:
          '¿Cómo se verifica una propiedad opcional en un type guard?',
        options: [
          'Se ignora porque es opcional',
          'if ("prop" in obj && typeof obj.prop !== "tipoEsperado") return false',
          'typeof obj.prop === "tipoEsperado" || obj.prop === undefined',
          'Las propiedades opcionales siempre pasan la verificación',
        ],
        correctAnswer:
          'if ("prop" in obj && typeof obj.prop !== "tipoEsperado") return false',
        correctFeedback:
          'Correcto. Si la propiedad existe pero tiene el tipo incorrecto, el guard debe devolver false. Si no existe (no está en obj), está bien porque es opcional.',
        incorrectFeedback:
          'No es correcto. Para propiedades opcionales: si existen, deben tener el tipo correcto. La lógica es: \`if ("prop" in obj && typeof obj.prop !== "tipoEsperado") return false\`. Si no existe, no hay problema.',
      },
      {
        question:
          '¿Por qué es seguro usar \`dato as Record<string, unknown>\` dentro de un type guard después de verificar que es un objeto?',
        options: [
          'No es seguro, siempre debes evitar as',
          'Porque ya verificaste que es un objeto no-null, y Record<string, unknown> es una representación genérica que permite acceder a propiedades sin perder la capacidad de verificarlas',
          'Porque Record convierte automáticamente los tipos',
          'Porque as siempre es seguro en TypeScript',
        ],
        correctAnswer:
          'Porque ya verificaste que es un objeto no-null, y Record<string, unknown> es una representación genérica que permite acceder a propiedades sin perder la capacidad de verificarlas',
        correctFeedback:
          'Correcto. Después de verificar typeof y !== null, sabemos que es un objeto. \`as Record<string, unknown>\` nos permite acceder a sus propiedades sin que TypeScript se queje, manteniendo el tipo de cada valor como unknown para que podamos verificarlo con typeof.',
        incorrectFeedback:
          'No es correcto. Dentro de un type guard, \`as Record<string, unknown>\` es aceptable porque ya verificaste que es un objeto. Es la forma de decirle a TypeScript "sé que es un objeto, déjame acceder a sus propiedades para verificarlas". No es un as ciego.',
      },
      {
        question:
          '¿Qué hace \`Array.isArray(dato) && dato.every(esString)\` en un type guard?',
        options: [
          'Verifica que dato es un array no-vacío',
          'Verifica que dato es un arreglo donde cada elemento pasa el type guard esString',
          'Convierte dato a un arreglo de strings',
          'Solo verifica el primer y último elemento',
        ],
        correctAnswer:
          'Verifica que dato es un arreglo donde cada elemento pasa el type guard esString',
        correctFeedback:
          'Correcto. \`Array.isArray\` verifica que es un arreglo, y \`.every(esString)\` verifica que cada elemento pasa el type guard. Si alguno falla, every devuelve false y el guard devuelve false.',
        incorrectFeedback:
          'No es correcto. Esta combinación verifica dos cosas: que dato es un arreglo (con isArray), y que cada elemento del arreglo pasa el guard esString (con every). Si algún elemento no es string, every devuelve false.',
      },
      {
        question:
          '¿Es posible componer type guards, es decir, llamar a un type guard dentro de otro?',
        options: [
          'No, cada type guard debe ser completamente independiente',
          'Sí, puedes llamar type guards simples dentro de type guards más complejos para reutilizar la lógica',
          'Solo si los guards son del mismo tipo',
          'Solo si usas genéricos',
        ],
        correctAnswer:
          'Sí, puedes llamar type guards simples dentro de type guards más complejos para reutilizar la lógica',
        correctFeedback:
          'Correcto. La composición de type guards es una buena práctica. Puedes crear guards pequeños y reutilizables, y combinarlos en guards más complejos sin repetir código.',
        incorrectFeedback:
          'No es correcto. Los type guards son funciones normales y pueden llamarse entre sí. Crear guards pequeños y componerlos en guards más complejos es una buena práctica que evita repetir lógica.',
      },
    ],
  },

  // ── Lección 93 ───────────────────────────────────────────────────────────
  {
    slug: 'validar-objetos-desconocidos',
    title: 'Validar objetos desconocidos',
    module: 'Type guards',
    moduleNumber: 12,
    order: 93,
    description:
      'Aprende a validar objetos que vienen de fuentes externas antes de usarlos como tipos seguros.',
    explanation: `En aplicaciones reales, constantemente recibes datos de fuentes que no controlas: APIs, formularios, localStorage, archivos de configuración. TypeScript no puede verificar estos datos automáticamente — tú debes hacerlo en tiempo de ejecución.

**El problema**

\`\`\`ts
// Imaginemos que obtienes datos de una API
const respuesta = await fetch('/api/usuario')
const datos = await respuesta.json()  // tipo: any en muchos proyectos

// Si confías sin verificar:
console.log(datos.nombre.toUpperCase())  // ¡puede fallar si nombre no existe o no es string!
\`\`\`

**La solución: type guards para validar antes de usar**

\`\`\`ts
interface Usuario {
  id: number
  nombre: string
  email: string
}

function esUsuario(dato: unknown): dato is Usuario {
  if (typeof dato !== 'object' || dato === null) return false
  const obj = dato as Record<string, unknown>
  return (
    typeof obj.id === 'number' &&
    typeof obj.nombre === 'string' &&
    typeof obj.email === 'string'
  )
}

async function obtenerUsuario(id: number): Promise<Usuario | null> {
  const resp = await fetch(\`/api/usuarios/\${id}\`)
  const dato: unknown = await resp.json()
  return esUsuario(dato) ? dato : null
}
\`\`\`

**Validar localStorage**

\`\`\`ts
interface Preferencias {
  tema: 'oscuro' | 'claro'
  idioma: string
}

function esPreferencias(dato: unknown): dato is Preferencias {
  if (typeof dato !== 'object' || dato === null) return false
  const obj = dato as Record<string, unknown>
  return (
    (obj.tema === 'oscuro' || obj.tema === 'claro') &&
    typeof obj.idioma === 'string'
  )
}

function cargarPreferencias(): Preferencias {
  const guardado = localStorage.getItem('preferencias')
  if (!guardado) return { tema: 'oscuro', idioma: 'es' }

  try {
    const datos: unknown = JSON.parse(guardado)
    if (esPreferencias(datos)) return datos
  } catch {
    // JSON inválido
  }

  return { tema: 'oscuro', idioma: 'es' }
}
\`\`\`

**Errores frecuentes al no validar**

1. Acceder a propiedades que no existen (undefined silencioso).
2. Llamar métodos sobre undefined o null (TypeError).
3. Mostrar datos incorrectos al usuario.
4. Guardar datos mal formados.

**Un principio importante**

> TypeScript te dice que el tipo es correcto en tiempo de desarrollo. Pero los datos externos solo existen en tiempo de ejecución. Los type guards son el puente entre los dos mundos.`,
    codeExample: `// ── archivo: validators.ts ───────────────────────────────────────────────

// ── Interfaces de dominio ─────────────────────────────────────────────────

interface Tarea {
  id: number
  titulo: string
  completada: boolean
  etiquetas: string[]
}

// ── Type guard robusto ────────────────────────────────────────────────────

function esTarea(dato: unknown): dato is Tarea {
  if (typeof dato !== 'object' || dato === null) return false

  const obj = dato as Record<string, unknown>

  if (typeof obj.id !== 'number') return false
  if (typeof obj.titulo !== 'string' || obj.titulo.trim() === '') return false
  if (typeof obj.completada !== 'boolean') return false
  if (!Array.isArray(obj.etiquetas)) return false
  if (!obj.etiquetas.every((e: unknown) => typeof e === 'string')) return false

  return true
}

// ── Simular datos de API ──────────────────────────────────────────────────

function simularRespuestaApi(): unknown {
  return {
    id: 1,
    titulo: 'Aprender TypeScript',
    completada: false,
    etiquetas: ['estudio', 'programación'],
  }
}

// ── Usar el type guard ────────────────────────────────────────────────────

const datosCrudos: unknown = simularRespuestaApi()

if (esTarea(datosCrudos)) {
  // TypeScript sabe: datosCrudos es Tarea
  console.log(\`Tarea: \${datosCrudos.titulo}\`)
  console.log(\`Estado: \${datosCrudos.completada ? 'completada' : 'pendiente'}\`)
  console.log(\`Etiquetas: \${datosCrudos.etiquetas.join(', ')}\`)
} else {
  console.log('Los datos no tienen la estructura esperada')
}

// ── Validar array de datos ────────────────────────────────────────────────

const listaCruda: unknown = [
  { id: 1, titulo: 'Tarea 1', completada: false, etiquetas: ['a'] },
  { id: 2, titulo: '', completada: true, etiquetas: [] },         // titulo vacío
  { id: 3, completada: false, etiquetas: [] },                    // sin titulo
  { id: 4, titulo: 'Tarea 4', completada: false, etiquetas: [1] }, // etiqueta no string
]

if (Array.isArray(listaCruda)) {
  const tareasValidas = listaCruda.filter(esTarea)
  console.log(\`\${tareasValidas.length} de \${listaCruda.length} tareas son válidas\`)
}`,
    keyPoints: [
      'Los datos de fuentes externas (APIs, localStorage, JSON) no tienen tipos garantizados en tiempo de ejecución.',
      'TypeScript infiere tipos en desarrollo, pero no valida en tiempo de ejecución — eso es tu responsabilidad.',
      'Los type guards son el puente entre los datos del mundo real y los tipos de TypeScript.',
      'Siempre maneja el caso donde los datos no son válidos — devuelve null, un default, o lanza un error.',
      'Validar al recibir los datos y trabajar con tipos seguros después es el patrón correcto.',
    ],
    exercise: {
      description:
        'Simula la lectura de configuración de una app desde localStorage. La configuración tiene esta interfaz:\n\`\`\`ts\ninterface Config { volumen: number; idioma: string; autoGuardado: boolean }\n\`\`\`\nEscribe un type guard \`esConfig\` y una función \`cargarConfig\` que lea de localStorage, valide y devuelva la config o una config por defecto. Usa \`JSON.parse\` para parsear el string guardado.',
      hint: 'Envuelve el JSON.parse en un try/catch. Si falla o los datos no pasan el guard, devuelve la config por defecto. Recuerda que localStorage devuelve string | null.',
    },
    quiz: [
      {
        question:
          '¿Por qué no puedes confiar en que los datos de una API tienen la estructura que esperas sin validar?',
        options: [
          'Porque TypeScript valida los datos automáticamente en tiempo de ejecución',
          'Porque los tipos de TypeScript solo existen en desarrollo — en runtime solo existe JavaScript y los datos pueden tener cualquier estructura',
          'Porque las APIs siempre devuelven tipos incorrectos',
          'Porque JSON.parse convierte todos los tipos a string',
        ],
        correctAnswer:
          'Porque los tipos de TypeScript solo existen en desarrollo — en runtime solo existe JavaScript y los datos pueden tener cualquier estructura',
        correctFeedback:
          'Correcto. Los tipos de TypeScript son borrados al compilar. En tiempo de ejecución, los datos de una API pueden tener cualquier estructura, sin importar lo que diga tu interfaz.',
        incorrectFeedback:
          'No es correcto. TypeScript es un lenguaje de desarrollo, no de ejecución. Al compilar, los tipos desaparecen. En tiempo de ejecución, los datos de una API pueden tener cualquier estructura, y TypeScript no puede verificarlo.',
      },
      {
        question:
          '¿Cuál es el tipo más apropiado para recibir datos de \`JSON.parse()\` antes de validar?',
        options: [
          'any',
          'object',
          'unknown',
          'Record<string, string>',
        ],
        correctAnswer: 'unknown',
        correctFeedback:
          'Correcto. \`unknown\` es el tipo más seguro para datos no validados. TypeScript te obligará a hacer narrowing antes de usar el valor. \`any\` es peligroso porque desactiva las verificaciones.',
        incorrectFeedback:
          'No es correcto. \`unknown\` es el tipo correcto para datos no validados. Obliga a verificar antes de usar. \`any\` desactiva todas las protecciones de TypeScript. \`object\` es demasiado específico y tampoco garantiza la estructura.',
      },
      {
        question:
          '¿Qué debes hacer cuando un type guard devuelve false para datos de una API?',
        options: [
          'Usar any para forzar el tipo y continuar',
          'Ignorar los datos y continuar como si nada',
          'Manejar el caso devolviendo un valor por defecto, null, o lanzando un error descriptivo',
          'Reintentar la petición automáticamente',
        ],
        correctAnswer:
          'Manejar el caso devolviendo un valor por defecto, null, o lanzando un error descriptivo',
        correctFeedback:
          'Correcto. Cuando los datos no son válidos, necesitas una estrategia: devolver null, usar valores por defecto, o lanzar un error con un mensaje claro. Nunca ignores el caso de datos inválidos.',
        incorrectFeedback:
          'No es correcto. Cuando el guard falla, los datos no tienen la estructura esperada. Debes manejar ese caso: devolver null, usar defaults, o lanzar un error. Usar \`any\` o ignorarlo puede causar errores difíciles de rastrear.',
      },
      {
        question:
          '¿Por qué debes envolver \`JSON.parse()\` en un try/catch al validar datos externos?',
        options: [
          'Porque JSON.parse siempre lanza un error',
          'Porque JSON.parse lanza SyntaxError si el string no es JSON válido, lo que puede ocurrir con datos corruptos',
          'Porque TypeScript lo requiere',
          'Solo si usas TypeScript en modo strict',
        ],
        correctAnswer:
          'Porque JSON.parse lanza SyntaxError si el string no es JSON válido, lo que puede ocurrir con datos corruptos',
        correctFeedback:
          'Correcto. Si el string está truncado, corrupto, o no es JSON válido, JSON.parse lanza un SyntaxError. Sin el try/catch, esto detendría la ejecución de tu programa.',
        incorrectFeedback:
          'No es correcto. \`JSON.parse\` puede lanzar SyntaxError si el string no es JSON válido. Esto puede ocurrir con datos truncados o corruptos. El try/catch permite manejar ese caso y usar valores por defecto.',
      },
      {
        question:
          '¿Qué representa el patrón "validar al recibir, trabajar seguro después"?',
        options: [
          'Validar todos los datos en cada uso',
          'Usar any en la recepción y luego agregar tipos manualmente',
          'Aplicar type guards una vez al recibir los datos, y luego trabajar con el tipo seguro sin revalidar en cada uso',
          'Solo validar en pruebas, no en producción',
        ],
        correctAnswer:
          'Aplicar type guards una vez al recibir los datos, y luego trabajar con el tipo seguro sin revalidar en cada uso',
        correctFeedback:
          'Correcto. El patrón es: valida los datos externos una vez al recibirlos. Si pasan el guard, los tratas como el tipo correcto en el resto del código sin necesidad de revalidar.',
        incorrectFeedback:
          'No es correcto. El patrón eficiente es validar una vez al recibir los datos. Si pasan el guard, TypeScript sabe el tipo y puedes trabajar con seguridad sin revalidar en cada uso.',
      },
    ],
  },

  // ── Lección 94 ───────────────────────────────────────────────────────────
  {
    slug: 'type-guards-datos-externos',
    title: 'Type guards en datos externos',
    module: 'Type guards',
    moduleNumber: 12,
    order: 94,
    description:
      'Aprende cómo los type guards ayudan cuando recibes datos desde APIs, formularios o localStorage.',
    explanation: `Los type guards son más valiosos cuando trabajas con datos del mundo real. En este módulo veremos patrones prácticos para los escenarios más comunes.

**Patrón 1: Respuestas de API con discriminante**

\`\`\`ts
interface ApiOk<T> {
  status: 'ok'
  data: T
}

interface ApiError {
  status: 'error'
  message: string
  code: number
}

type ApiResponse<T> = ApiOk<T> | ApiError

function esApiOk<T>(
  resp: ApiResponse<T>,
  guard: (d: unknown) => d is T
): resp is ApiOk<T> {
  return resp.status === 'ok' && guard(resp.data)
}
\`\`\`

**Patrón 2: Datos de formularios**

Los formularios HTML devuelven strings para todo. Necesitas validar y convertir:

\`\`\`ts
interface FormularioRegistro {
  nombre: string
  edad: number
  email: string
}

function validarFormulario(datos: Record<string, string>): FormularioRegistro | string[] {
  const errores: string[] = []

  if (!datos.nombre || datos.nombre.trim().length < 2) {
    errores.push('Nombre inválido')
  }

  const edad = Number(datos.edad)
  if (isNaN(edad) || edad < 18 || edad > 120) {
    errores.push('Edad inválida')
  }

  if (!datos.email || !datos.email.includes('@')) {
    errores.push('Email inválido')
  }

  if (errores.length > 0) return errores

  return {
    nombre: datos.nombre.trim(),
    edad,
    email: datos.email.trim(),
  }
}
\`\`\`

**Patrón 3: Estado de la aplicación desde localStorage**

\`\`\`ts
interface EstadoApp {
  usuario: { nombre: string; id: number } | null
  token: string | null
  version: string
}

function esEstadoApp(dato: unknown): dato is EstadoApp {
  if (typeof dato !== 'object' || dato === null) return false
  const obj = dato as Record<string, unknown>

  // version es requerida
  if (typeof obj.version !== 'string') return false

  // token puede ser null o string
  if (obj.token !== null && typeof obj.token !== 'string') return false

  // usuario puede ser null o un objeto específico
  if (obj.usuario !== null) {
    if (typeof obj.usuario !== 'object' || obj.usuario === null) return false
    const u = obj.usuario as Record<string, unknown>
    if (typeof u.nombre !== 'string') return false
    if (typeof u.id !== 'number') return false
  }

  return true
}
\`\`\`

**Cuándo lanzar error vs devolver null**

- **Devuelve null** cuando los datos malos son esperables (el usuario no ha configurado nada, localStorage vacío).
- **Lanza un error** cuando los datos malos son inesperados y el sistema no puede funcionar sin ellos.`,
    codeExample: `// ── archivo: validators.ts ───────────────────────────────────────────────

// ── Patrón: validar respuesta de API ─────────────────────────────────────

interface Producto {
  id: number
  nombre: string
  precio: number
}

function esProducto(dato: unknown): dato is Producto {
  if (typeof dato !== 'object' || dato === null) return false
  const obj = dato as Record<string, unknown>
  return (
    typeof obj.id === 'number' &&
    typeof obj.nombre === 'string' &&
    typeof obj.precio === 'number' && obj.precio >= 0
  )
}

// Simula una respuesta de API
async function obtenerProducto(id: number): Promise<Producto | null> {
  // En una app real: const resp = await fetch(\`/api/productos/\${id}\`)
  // const dato: unknown = await resp.json()
  const dato: unknown = { id, nombre: 'Laptop', precio: 999 }  // simulado

  if (esProducto(dato)) {
    return dato  // TypeScript sabe: Producto
  }

  console.warn('Los datos del producto no son válidos:', dato)
  return null
}

// ── Patrón: datos de formulario ───────────────────────────────────────────

interface DatosContacto {
  nombre: string
  email: string
  mensaje: string
}

function validarContacto(
  campos: Record<string, unknown>
): { valido: true; datos: DatosContacto } | { valido: false; errores: string[] } {
  const errores: string[] = []

  if (typeof campos.nombre !== 'string' || campos.nombre.trim().length < 2) {
    errores.push('El nombre debe tener al menos 2 caracteres')
  }

  if (typeof campos.email !== 'string' || !campos.email.includes('@')) {
    errores.push('El email no es válido')
  }

  if (typeof campos.mensaje !== 'string' || campos.mensaje.trim().length < 10) {
    errores.push('El mensaje debe tener al menos 10 caracteres')
  }

  if (errores.length > 0) {
    return { valido: false, errores }
  }

  return {
    valido: true,
    datos: {
      nombre: (campos.nombre as string).trim(),
      email: (campos.email as string).trim(),
      mensaje: (campos.mensaje as string).trim(),
    },
  }
}

// Usar el validador
const formulario: Record<string, unknown> = {
  nombre: 'Ana García',
  email: 'ana@email.com',
  mensaje: 'Quiero más información sobre el curso',
}

const resultado = validarContacto(formulario)

if (resultado.valido) {
  // TypeScript sabe: resultado.datos es DatosContacto
  console.log(\`Enviando mensaje de \${resultado.datos.nombre}\`)
} else {
  console.log('Errores:', resultado.errores.join(', '))
}`,
    keyPoints: [
      'Los datos de formularios son strings por defecto — necesitas convertir y validar los tipos esperados.',
      'Para respuestas de API, el patrón discriminante (status: "ok" | "error") facilita el narrowing.',
      'Al leer de localStorage, siempre maneja el caso null y envuelve JSON.parse en try/catch.',
      'Devuelve null cuando los datos malos son esperables; lanza error cuando son inesperados y críticos.',
      'El resultado de la validación puede ser un tipo discriminante: \`{ valido: true, datos: T } | { valido: false, errores: string[] }\`.',
    ],
    exercise: {
      description:
        'Crea una función \`procesarResultadoBusqueda\` que reciba \`datos: unknown\`. Los datos válidos tienen esta forma: \`{ resultados: Array<{ id: number, titulo: string }>, total: number, pagina: number }\`. Escribe el type guard y la función que: si los datos son válidos, muestra cuántos resultados hay; si no, muestra un mensaje de error.',
      hint: 'El type guard verifica: objeto no-null, total es number, pagina es number, resultados es arreglo donde cada elemento tiene id number y titulo string. Usa Array.isArray y every.',
    },
    quiz: [
      {
        question:
          '¿Por qué los datos de un formulario HTML necesitan validación especial?',
        options: [
          'Porque HTML siempre genera errores',
          'Porque los inputs HTML devuelven strings, y necesitas convertir y validar otros tipos como números o booleanos',
          'Porque los formularios no pueden enviarse a TypeScript',
          'Solo si usas React',
        ],
        correctAnswer:
          'Porque los inputs HTML devuelven strings, y necesitas convertir y validar otros tipos como números o booleanos',
        correctFeedback:
          'Correcto. Un input de tipo number en HTML devuelve un string. Debes usar Number(), parseInt(), o parseFloat() para convertir, y luego verificar con isNaN() que la conversión fue exitosa.',
        incorrectFeedback:
          'No es correcto. La particularidad de los formularios HTML es que todos los valores son strings. Para campos numéricos o booleanos, necesitas convertirlos y verificar que la conversión fue exitosa antes de usarlos.',
      },
      {
        question:
          '¿Qué ventaja tiene el tipo discriminante \`{ valido: true, datos: T } | { valido: false, errores: string[] }\` para resultados de validación?',
        options: [
          'Es más rápido que devolver null',
          'Permite a TypeScript saber exactamente qué campos están disponibles en cada rama del resultado',
          'Es el único tipo válido para resultados de validación',
          'Permite iterar sobre los errores automáticamente',
        ],
        correctAnswer:
          'Permite a TypeScript saber exactamente qué campos están disponibles en cada rama del resultado',
        correctFeedback:
          'Correcto. Este tipo discriminante es muy expresivo: si \`valido\` es true, TypeScript sabe que \`datos\` existe y es de tipo T. Si es false, solo \`errores\` está disponible. El narrowing funciona perfectamente con \`if (resultado.valido)\`.',
        incorrectFeedback:
          'No es correcto. La ventaja es la expresividad y el narrowing: con \`if (resultado.valido)\`, TypeScript sabe en cada rama qué propiedades están disponibles. Es un patrón muy claro para comunicar resultados de validación.',
      },
      {
        question:
          '¿Cuándo deberías lanzar un error en lugar de devolver null cuando la validación falla?',
        options: [
          'Siempre es mejor lanzar errores',
          'Cuando los datos malos son completamente inesperados y el sistema no puede funcionar sin ellos',
          'Nunca, siempre devuelve null',
          'Solo en modo producción',
        ],
        correctAnswer:
          'Cuando los datos malos son completamente inesperados y el sistema no puede funcionar sin ellos',
        correctFeedback:
          'Correcto. Devuelve null para casos esperables (usuario sin config, elemento no encontrado). Lanza error para casos inesperados y críticos donde continuar sería peligroso (configuración esencial corrupta).',
        incorrectFeedback:
          'No es correcto. La decisión depende del contexto. null es apropiado cuando los datos malos son esperables (usuario nuevo, sin historial). Error es apropiado cuando los datos son críticos y su ausencia o invalidez es completamente inesperada.',
      },
      {
        question:
          'Para verificar que una propiedad es un arreglo de objetos con \`{ id: number, nombre: string }\`, ¿cuál es el enfoque correcto?',
        options: [
          'Array.isArray(arr)',
          'typeof arr === "array"',
          'Array.isArray(arr) && arr.every(el => typeof el.id === "number" && typeof el.nombre === "string")',
          'arr instanceof Array',
        ],
        correctAnswer:
          'Array.isArray(arr) && arr.every(el => typeof el.id === "number" && typeof el.nombre === "string")',
        correctFeedback:
          'Correcto. Primero verificas que es un arreglo con Array.isArray, luego que cada elemento tiene las propiedades correctas con every. Sin la verificación de elementos, podrías tener un arreglo de tipos incorrectos.',
        incorrectFeedback:
          'No es correcto. Solo \`Array.isArray\` verifica que es un arreglo, pero no verifica la estructura de cada elemento. Necesitas \`every()\` para verificar que cada elemento tiene las propiedades y tipos correctos.',
      },
      {
        question:
          '¿Cuál es la forma correcta de verificar que una propiedad puede ser null o string?',
        options: [
          'typeof obj.prop === "string" — cubre todos los casos',
          'obj.prop === null || typeof obj.prop === "string"',
          'typeof obj.prop === "null" || typeof obj.prop === "string"',
          'obj.prop !== undefined',
        ],
        correctAnswer: 'obj.prop === null || typeof obj.prop === "string"',
        correctFeedback:
          'Correcto. Verifica null con \`=== null\` (no con typeof porque typeof null === "object"), y string con typeof. Esta combinación cubre el tipo \`string | null\`.',
        incorrectFeedback:
          'No es correcto. Para \`string | null\`, necesitas verificar cada caso: \`obj.prop === null\` para null (no typeof, porque typeof null es "object"), y \`typeof obj.prop === "string"\` para strings.',
      },
    ],
  },

  // ── Lección 95 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-type-guards',
    title: 'Errores comunes con type guards',
    module: 'Type guards',
    moduleNumber: 12,
    order: 95,
    description:
      'Aprende a evitar type guards incompletos, demasiado permisivos o que dan falsa seguridad.',
    explanation: `Los type guards dan falsa seguridad si están mal implementados. TypeScript confía en ellos sin verificar la implementación. Conocer los errores comunes te ayudará a escribir guards más robustos.

**Error 1: Guard demasiado permisivo**

\`\`\`ts
// MAL: solo verifica que es un objeto, no la estructura completa
function esProducto(dato: unknown): dato is Producto {
  return typeof dato === 'object' && dato !== null
}

// Con este guard, { nombre: 123 } pasaría como Producto
// aunque las propiedades tengan tipos incorrectos
\`\`\`

**Error 2: Olvidar verificar el tipo de las propiedades**

\`\`\`ts
// MAL: verifica que las propiedades existen, pero no su tipo
function esUsuario(dato: unknown): dato is Usuario {
  if (typeof dato !== 'object' || dato === null) return false
  const obj = dato as Record<string, unknown>
  return 'nombre' in obj && 'email' in obj  // solo verifica existencia
}

// { nombre: 42, email: true } pasaría como Usuario
\`\`\`

**Error 3: Guard que devuelve boolean en lugar de predicado**

\`\`\`ts
// MAL: no es un type guard — TypeScript no aplica narrowing
function verificar(x: unknown): boolean {
  return typeof x === 'string'
}

function fn(x: unknown): void {
  if (verificar(x)) {
    x.toUpperCase()  // Error: x sigue siendo unknown
  }
}
\`\`\`

**Error 4: Confiar en guards externos sin revisarlos**

\`\`\`ts
// Si usas una librería que provee type guards, verifica que sean correctos
// Un guard de librería puede no cubrir todos los casos de tu dominio
\`\`\`

**Error 5: No manejar el arreglo interno**

\`\`\`ts
// MAL: no verifica el tipo de los elementos del arreglo
function esListaProductos(dato: unknown): dato is Producto[] {
  return Array.isArray(dato)  // solo verifica que es un arreglo
}

// BIEN:
function esListaProductos(dato: unknown): dato is Producto[] {
  return Array.isArray(dato) && dato.every(esProducto)
}
\`\`\`

**Error 6: Mutar el objeto dentro del guard**

\`\`\`ts
// MAL: nunca mutes el objeto dentro de un type guard
function esConfig(dato: unknown): dato is Config {
  if (typeof dato !== 'object' || dato === null) return false
  const obj = dato as Record<string, unknown>
  obj.version = obj.version || 'v1'  // ¡mala práctica!
  return typeof obj.version === 'string'
}
\`\`\`

**Checklist para un type guard robusto**

✓ Verifica que es un objeto no-null antes de acceder a propiedades.
✓ Verifica el tipo de cada propiedad requerida con typeof o comparaciones.
✓ Verifica el tipo de propiedades opcionales si existen.
✓ Verifica el tipo de elementos en arreglos con every().
✓ No mutes el objeto.
✓ El tipo de retorno es un predicado, no boolean.`,
    codeExample: `// ── archivo: guards.ts ───────────────────────────────────────────────────

interface Pedido {
  id: number
  cliente: string
  total: number
  items: { producto: string; cantidad: number }[]
  estado: 'pendiente' | 'enviado' | 'entregado'
}

// ── Guard INCORRECTO ❌ ───────────────────────────────────────────────────

function esPedidoMal(dato: unknown): dato is Pedido {
  // Solo verifica que es un objeto — ¡demasiado permisivo!
  return typeof dato === 'object' && dato !== null
}

// ── Guard CORRECTO ✓ ──────────────────────────────────────────────────────

const ESTADOS_VALIDOS = ['pendiente', 'enviado', 'entregado'] as const

function esItemPedido(item: unknown): item is { producto: string; cantidad: number } {
  if (typeof item !== 'object' || item === null) return false
  const obj = item as Record<string, unknown>
  return typeof obj.producto === 'string' && typeof obj.cantidad === 'number' && obj.cantidad > 0
}

function esPedido(dato: unknown): dato is Pedido {
  if (typeof dato !== 'object' || dato === null) return false

  const obj = dato as Record<string, unknown>

  // Verificar cada propiedad con su tipo
  if (typeof obj.id !== 'number') return false
  if (typeof obj.cliente !== 'string' || obj.cliente.trim() === '') return false
  if (typeof obj.total !== 'number' || obj.total < 0) return false

  // Verificar arreglo y sus elementos
  if (!Array.isArray(obj.items)) return false
  if (!obj.items.every(esItemPedido)) return false

  // Verificar enum/union como literal
  if (!ESTADOS_VALIDOS.includes(obj.estado as any)) return false

  return true
}

// ── Demostración ──────────────────────────────────────────────────────────

const pedidoCorrecto: unknown = {
  id: 1,
  cliente: 'Ana',
  total: 150,
  items: [{ producto: 'Libro', cantidad: 2 }],
  estado: 'pendiente',
}

const pedidoMal: unknown = {
  id: 1,
  cliente: '',           // nombre vacío — inválido
  total: -50,            // total negativo — inválido
  items: [{ producto: 'X', cantidad: 0 }],  // cantidad 0 — inválido
  estado: 'desconocido', // estado no válido — inválido
}

console.log('Pedido correcto válido:', esPedido(pedidoCorrecto))  // → true
console.log('Pedido mal válido:', esPedido(pedidoMal))           // → false`,
    keyPoints: [
      'Un type guard demasiado permisivo (solo verifica typeof === "object") da falsa seguridad.',
      'Siempre verifica el tipo de cada propiedad, no solo su existencia.',
      'Para arreglos, usa every() para verificar el tipo de cada elemento.',
      'El tipo de retorno debe ser un predicado (x is Tipo), no boolean, para que TypeScript aplique narrowing.',
      'Nunca mutes el objeto dentro de un type guard — solo verifica.',
    ],
    exercise: {
      description:
        'Encuentra los 4 errores en este type guard:\n\n\`\`\`ts\nfunction esConfig(dato: unknown): boolean {\n  if (typeof dato !== "object") return false\n  const obj = dato as Record<string, unknown>\n  return "host" in obj && "puerto" in obj\n}\n\`\`\`\n\nLuego escribe la versión correcta para la interfaz \`{ host: string, puerto: number, ssl?: boolean }\`.',
      hint: 'Error 1: el tipo de retorno es boolean, no el predicado. Error 2: falta verificar dato !== null. Error 3: no verifica el tipo de las propiedades (solo su existencia). Error 4: no verifica la propiedad opcional ssl.',
    },
    quiz: [
      {
        question:
          '¿Cuál es el problema con un type guard que solo verifica \`typeof dato === "object" && dato !== null\`?',
        options: [
          'No hay problema, es suficiente para verificar objetos',
          'Es demasiado permisivo: cualquier objeto pasa el guard aunque sus propiedades tengan los tipos incorrectos',
          'Falla con arreglos porque son objetos',
          'TypeScript lo rechaza como tipo de retorno de guard',
        ],
        correctAnswer:
          'Es demasiado permisivo: cualquier objeto pasa el guard aunque sus propiedades tengan los tipos incorrectos',
        correctFeedback:
          'Correcto. Solo verificar que es un objeto no es suficiente. Un objeto \`{ nombre: 42, activo: "sí" }\` pasaría el guard aunque no sea compatible con la interfaz esperada.',
        incorrectFeedback:
          'No es correcto. El problema es que este guard acepta cualquier objeto, sin importar si sus propiedades son del tipo correcto. Para ser útil, un guard debe verificar cada propiedad requerida y su tipo.',
      },
      {
        question:
          '¿Por qué es importante usar \`every()\` al verificar arreglos en un type guard?',
        options: [
          'Para verificar la longitud del arreglo',
          'Para verificar que cada elemento del arreglo tiene el tipo correcto, no solo que el arreglo existe',
          'Porque Array.isArray no funciona en TypeScript',
          'Para mejorar el rendimiento',
        ],
        correctAnswer:
          'Para verificar que cada elemento del arreglo tiene el tipo correcto, no solo que el arreglo existe',
        correctFeedback:
          'Correcto. \`Array.isArray\` solo verifica que es un arreglo. Para garantizar que es, por ejemplo, \`string[]\`, necesitas \`every(el => typeof el === "string")\`.',
        incorrectFeedback:
          'No es correcto. \`Array.isArray\` solo dice que es un arreglo, pero no qué contiene. Para verificar el tipo de los elementos necesitas \`every()\`. Sin él, \`[1, 2, true]\` pasaría como \`string[]\`.',
      },
      {
        question:
          '¿Qué consecuencia tiene un type guard que siempre devuelve true?',
        options: [
          'TypeScript detecta el error y avisa',
          'TypeScript confía en él y tratará cualquier valor como el tipo declarado, causando errores en runtime',
          'El código no compila',
          'El guard simplemente es ignorado',
        ],
        correctAnswer:
          'TypeScript confía en él y tratará cualquier valor como el tipo declarado, causando errores en runtime',
        correctFeedback:
          'Correcto. TypeScript confía ciegamente en tus type guards. Si siempre devuelves true, TypeScript tratará todo como el tipo declarado, lo que puede causar errores en tiempo de ejecución al acceder a propiedades que no existen.',
        incorrectFeedback:
          'No es correcto. TypeScript no verifica la implementación del guard — solo la firma. Si tu guard siempre devuelve true, TypeScript creerá que cualquier valor es del tipo declarado, lo que puede causar errores graves en runtime.',
      },
      {
        question:
          '¿Cuál es la forma correcta de verificar que una propiedad es un valor de un union literal como \`"pendiente" | "activo" | "inactivo"\`?',
        options: [
          'typeof obj.estado === "string"',
          'obj.estado !== undefined',
          '["pendiente", "activo", "inactivo"].includes(obj.estado as string)',
          'instanceof String',
        ],
        correctAnswer:
          '["pendiente", "activo", "inactivo"].includes(obj.estado as string)',
        correctFeedback:
          'Correcto. Para verificar que un valor es uno de los literales permitidos, usa un arreglo con todos los valores y \`.includes()\`. Aun mejor si usas \`as const\` en el arreglo para tener tipado estricto.',
        incorrectFeedback:
          'No es correcto. Solo verificar que es un string no garantiza que sea uno de los valores válidos del union. Usa un arreglo con todos los valores permitidos y \`.includes()\`.',
      },
      {
        question:
          '¿Por qué nunca debes mutar el objeto dentro de un type guard?',
        options: [
          'Porque TypeScript lo prohíbe',
          'Porque mutar el objeto puede crear efectos secundarios inesperados — el purpose de un guard es verificar, no modificar',
          'Porque la mutación hace el guard más lento',
          'Solo está prohibido con objetos readonly',
        ],
        correctAnswer:
          'Porque mutar el objeto puede crear efectos secundarios inesperados — el purpose de un guard es verificar, no modificar',
        correctFeedback:
          'Correcto. Un type guard debe ser una función pura de verificación. Mutar el objeto rompe el principio de responsabilidad única y puede crear bugs difíciles de detectar.',
        incorrectFeedback:
          'No es correcto. Un type guard debe ser puramente de lectura. Si muta el objeto, puede crear efectos secundarios inesperados: el mismo objeto llega modificado a otros lugares del código, lo que viola el principio de responsabilidad única.',
      },
    ],
  },
]

export const tsModule12: Module = {
  number: 12,
  title: 'Type guards',
  level: 'nivel3',
  lessons: lessonsTsModule12,
}
