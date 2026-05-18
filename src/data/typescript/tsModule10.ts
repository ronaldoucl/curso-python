import type { Lesson, Module } from '@/types'

export const lessonsTsModule10: Lesson[] = [
  // ── Lección 71 ───────────────────────────────────────────────────────────
  {
    slug: 'union-types',
    title: 'Union types con |',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 1,
    description:
      'Aprende a permitir que un valor pueda tener más de un tipo usando union types.',
    explanation: `Un **union type** permite que una variable, parámetro o propiedad pueda ser de más de un tipo. Se escribe usando el operador \`|\` (pipe) entre los tipos posibles.

**Sintaxis**

\`\`\`ts
tipo1 | tipo2 | tipo3
\`\`\`

**Ejemplo básico**

\`\`\`ts
let id: string | number

id = "abc-123"   // ✓ string
id = 42          // ✓ number
id = true        // Error: boolean no está en la unión
\`\`\`

**¿Por qué son útiles?**

En JavaScript, los valores frecuentemente pueden ser de más de un tipo:
- Un input del usuario puede devolver un \`string\` o \`null\`.
- Un id puede ser \`string\` o \`number\` según el sistema.
- Una respuesta de API puede traer \`datos\` o un \`error\`.

Sin union types, tendrías que usar \`any\`, perdiendo toda la seguridad de TypeScript.

**Union types en funciones**

\`\`\`ts
function formatearId(id: string | number): string {
  return String(id)
}

formatearId("abc")  // ✓
formatearId(42)     // ✓
\`\`\`

**Narrowing: reducir el tipo**

Cuando tienes un union type, TypeScript a veces no sabe cuál de los tipos tienes en ese momento. Puedes usar verificaciones para "reducir" el tipo:

\`\`\`ts
function mostrar(valor: string | number): void {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase())  // TypeScript sabe que es string aquí
  } else {
    console.log(valor.toFixed(2))     // TypeScript sabe que es number aquí
  }
}
\`\`\`

Esto se llama **type narrowing** (reducción de tipo).

**Una analogía útil**

Imagina una caja que puede contener naranjas o manzanas. Antes de pelarla, no sabes cuál hay adentro. Cuando abres y miras, ya sabes con certeza. TypeScript hace lo mismo: después de verificar el tipo con \`typeof\`, ya "sabe" cuál es.`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Union type básico
let id: string | number

id = "usr-001"  // ✓
id = 42         // ✓
// id = true    // Error: boolean no está en la unión

// Función con union type en parámetro
function mostrarId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID texto:", id.toUpperCase())
  } else {
    console.log("ID número:", id)
  }
}

mostrarId("abc-123")  // → ID texto: ABC-123
mostrarId(42)         // → ID número: 42

// Union type en propiedad de objeto
interface Respuesta {
  datos: string | null
  error?: string
}

const exitosa: Respuesta = { datos: "Operación completada" }
const fallida: Respuesta = { datos: null, error: "Tiempo de espera agotado" }

function procesarRespuesta(resp: Respuesta): void {
  if (resp.datos !== null) {
    console.log("Éxito:", resp.datos)
  } else {
    console.log("Error:", resp.error ?? "Error desconocido")
  }
}

procesarRespuesta(exitosa)  // → Éxito: Operación completada
procesarRespuesta(fallida)  // → Error: Tiempo de espera agotado

// Union type en array
const mixto: (string | number)[] = ["Ana", 1, "Carlos", 2, "Sofía", 3]
console.log(mixto)

// Función que procesa string o array de strings
function normalizar(input: string | string[]): string[] {
  if (typeof input === "string") {
    return [input]
  }
  return input
}

console.log(normalizar("hola"))            // → ["hola"]
console.log(normalizar(["hola", "mundo"])) // → ["hola", "mundo"]`,
    keyPoints: [
      'Un union type se crea con `|`: `string | number` significa "puede ser string o number".',
      'TypeScript verifica que el valor sea de uno de los tipos permitidos.',
      'Solo puedes usar métodos/propiedades comunes a todos los tipos en la unión sin narrowing.',
      'El type narrowing (`typeof`, `if`) reduce la unión a un tipo específico en ese bloque.',
      'Los union types son una alternativa segura a `any` para valores que pueden ser de varios tipos.',
      'Pueden usarse en variables, parámetros, propiedades y tipos de retorno.',
    ],
    exercise: {
      description:
        'Crea una función `calcularDescuento` que reciba un `precio` (number) y un `descuento` que puede ser `number` (porcentaje) o `string` (como "10%" o "15%"). Si el descuento es número, aplícalo directamente. Si es string, extrae el número con `parseInt(descuento)`. Retorna el precio final. Prueba con: `calcularDescuento(100, 20)\` y \`calcularDescuento(100, "15%")\`.',
      hint: 'Usa \`typeof descuento === "string"\` para diferenciar. Para extraer el número del string usa \`parseInt(descuento)\`. El precio final es \`precio * (1 - valorDescuento / 100)\`.',
    },
    quiz: [
      {
        question: '¿Cómo se declara un union type en TypeScript?',
        options: [
          'string & number',
          'string | number',
          'string + number',
          'union(string, number)',
        ],
        correctAnswer: 'string | number',
        correctFeedback:
          'Correcto. El operador \`|\` (pipe) separa los tipos en una unión. \`string | number\` significa "puede ser string o number".',
        incorrectFeedback:
          'No es correcto. Los union types usan el operador \`|\` (pipe): \`string | number\`. El \`&\` es para intersections (ambos tipos a la vez). \`+\` y \`union()\` no son sintaxis TypeScript.',
      },
      {
        question: '¿Por qué TypeScript no permite usar \`.toUpperCase()\` directamente en un \`string | number\` sin narrowing?',
        options: [
          'Porque TypeScript no soporta métodos de string en uniones',
          'Porque \`.toUpperCase()\` no existe en \`number\` — TypeScript previene el error potencial',
          'Porque el valor puede ser null',
          'Porque las uniones desactivan los métodos',
        ],
        correctAnswer: 'Porque \`.toUpperCase()\` no existe en \`number\` — TypeScript previene el error potencial',
        correctFeedback:
          'Correcto. TypeScript sabe que el valor podría ser un \`number\`, y los números no tienen \`.toUpperCase()\`. Para usarlo, primero debes verificar que es un string.',
        incorrectFeedback:
          'No es correcto. TypeScript solo permite usar métodos que existen en TODOS los tipos de la unión. Como \`.toUpperCase()\` existe en \`string\` pero no en \`number\`, TypeScript previene el posible error si el valor resulta ser un número.',
      },
      {
        question: '¿Qué es el "type narrowing" en el contexto de union types?',
        options: [
          'Convertir el tipo a any para simplificar',
          'Usar verificaciones (typeof, if) para reducir la unión a un tipo específico',
          'Dividir el código en múltiples funciones',
          'Eliminar tipos de la unión al compilar',
        ],
        correctAnswer: 'Usar verificaciones (typeof, if) para reducir la unión a un tipo específico',
        correctFeedback:
          'Correcto. El narrowing es la técnica de verificar el tipo dentro de un bloque \`if\`, lo que permite a TypeScript saber cuál es el tipo exacto en ese punto.',
        incorrectFeedback:
          'No es correcto. El type narrowing es la técnica de usar verificaciones como \`typeof valor === "string"\` o \`if (valor !== null)\` para que TypeScript sepa con certeza cuál es el tipo en ese bloque de código.',
      },
      {
        question: '¿Cuál es la ventaja de \`string | null\` sobre usar \`string\` con \`any\` fallback?',
        options: [
          'Es más rápido en tiempo de ejecución',
          'TypeScript verifica el uso correcto de ambos casos, previniendo errores',
          'Permite más valores que \`any\`',
          'Solo funciona con strings',
        ],
        correctAnswer: 'TypeScript verifica el uso correcto de ambos casos, previniendo errores',
        correctFeedback:
          'Correcto. Con \`string | null\`, TypeScript verifica que no uses métodos de string si el valor puede ser null, forzándote a verificar primero.',
        incorrectFeedback:
          'No es correcto. Con \`string | null\`, TypeScript mantiene la verificación de tipos: te obliga a manejar el caso \`null\` antes de usar métodos de string. Con \`any\`, pierdes toda esa protección.',
      },
      {
        question: '¿Qué hace TypeScript si intentas asignar \`true\` a una variable de tipo \`string | number\`?',
        options: [
          'Lo convierte a string "true" automáticamente',
          'Muestra un error: boolean no es parte de la unión',
          'Lo convierte a 1 automáticamente',
          'Solo muestra una advertencia',
        ],
        correctAnswer: 'Muestra un error: boolean no es parte de la unión',
        correctFeedback:
          'Correcto. \`true\` es un boolean, que no está en la unión \`string | number\`. TypeScript lo detecta como error.',
        incorrectFeedback:
          'No es correcto. TypeScript no convierte tipos automáticamente. Como \`boolean\` no está en \`string | number\`, asignar \`true\` causa un error de tipo. TypeScript verifica que el valor sea exactamente uno de los tipos permitidos.',
      },
    ],
  },

  // ── Lección 72 ───────────────────────────────────────────────────────────
  {
    slug: 'uniones-strings',
    title: 'Uniones con strings',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 2,
    description:
      'Aprende a crear valores limitados usando uniones de strings.',
    explanation: `Uno de los usos más poderosos de los union types es crear un conjunto limitado de valores de string. En lugar de aceptar cualquier string, puedes restringir a opciones específicas.

**Ejemplo básico**

\`\`\`ts
type Direccion = "norte" | "sur" | "este" | "oeste"

let dir: Direccion = "norte"   // ✓
dir = "este"                    // ✓
dir = "arriba"                  // Error: no está en la unión
\`\`\`

**Casos de uso reales**

- Estado de un pedido: \`"pendiente" | "enviado" | "entregado" | "cancelado"\`
- Temas de interfaz: \`"claro" | "oscuro" | "auto"\`
- Roles de usuario: \`"admin" | "editor" | "lector"\`
- Tamaños: \`"xs" | "sm" | "md" | "lg" | "xl"\`
- Métodos HTTP: \`"GET" | "POST" | "PUT" | "DELETE"\`

**Ventajas sobre strings libres**

\`\`\`ts
// Sin restricción: cualquier error pasa desapercibido
function enviarMetodo(metodo: string): void { }
enviarMetodo("GEt")   // Error de typo — TypeScript no lo detecta

// Con restricción:
type Metodo = "GET" | "POST" | "PUT" | "DELETE"
function enviarMetodo(metodo: Metodo): void { }
enviarMetodo("GEt")   // Error: "GEt" no está en la unión ✓
\`\`\`

**Autocompletado mejorado**

Cuando el tipo es una unión de strings, el editor de código puede ofrecer exactamente las opciones válidas al escribir.

**Usar la unión en objetos**

\`\`\`ts
interface Tarea {
  titulo: string
  estado: "pendiente" | "en-progreso" | "completada"
}

const tarea: Tarea = {
  titulo: "Estudiar TypeScript",
  estado: "en-progreso",
}
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Unión de strings para estados
type EstadoPedido = "pendiente" | "procesando" | "enviado" | "entregado" | "cancelado"

interface Pedido {
  id: number
  producto: string
  estado: EstadoPedido
}

function actualizarEstado(pedido: Pedido, nuevoEstado: EstadoPedido): Pedido {
  return { ...pedido, estado: nuevoEstado }
}

function esEstadoFinal(estado: EstadoPedido): boolean {
  return estado === "entregado" || estado === "cancelado"
}

function obtenerMensaje(estado: EstadoPedido): string {
  switch (estado) {
    case "pendiente":   return "Tu pedido está siendo procesado"
    case "procesando":  return "Preparando tu pedido"
    case "enviado":     return "Tu pedido va en camino"
    case "entregado":   return "¡Tu pedido llegó!"
    case "cancelado":   return "Tu pedido fue cancelado"
  }
}

const pedido: Pedido = { id: 1, producto: "Teclado", estado: "pendiente" }

console.log(obtenerMensaje(pedido.estado))  // → Tu pedido está siendo procesado

const pedidoEnviado = actualizarEstado(pedido, "enviado")
console.log(obtenerMensaje(pedidoEnviado.estado))  // → Tu pedido va en camino

console.log(esEstadoFinal("entregado"))  // → true
console.log(esEstadoFinal("enviado"))    // → false

// Error que TypeScript detecta:
// actualizarEstado(pedido, "llego")  // Error: "llego" no está en EstadoPedido

// Unión de strings para tema de interfaz
type Tema = "claro" | "oscuro" | "auto"

function aplicarTema(tema: Tema): void {
  if (tema === "auto") {
    console.log("Usando preferencia del sistema")
  } else {
    console.log(\`Aplicando tema: \${tema}\`)
  }
}

aplicarTema("oscuro")  // → Aplicando tema: oscuro
aplicarTema("auto")    // → Usando preferencia del sistema
// aplicarTema("sepia") // Error`,
    keyPoints: [
      'Las uniones de strings restringen los valores posibles a un conjunto específico.',
      'TypeScript detecta typos y valores inválidos en tiempo de compilación.',
      'El editor ofrece autocompletado con solo las opciones válidas.',
      'Son ideales para estados, roles, temas, métodos, tamaños y categorías.',
      'Combínalas con `type alias` para reutilizarlas: `type EstadoPedido = "pendiente" | "enviado"\`.',
      'Con \`switch/case\` y uniones, TypeScript puede verificar que cubres todos los casos.',
    ],
    exercise: {
      description:
        'Crea un type \`NivelPrioridad = "baja" | "media" | "alta" | "critica"\`. Luego crea una interface \`Tarea\` con \`titulo\`, \`descripcion\` (opcional), \`prioridad: NivelPrioridad\` y \`completada: boolean\`. Escribe una función \`filtrarPorPrioridad\` y otra \`obtenerColorPrioridad\` que retorne un color hex según la prioridad: baja → "#green", media → "#yellow", alta → "#orange", critica → "#red".',
      hint: 'Para \`obtenerColorPrioridad\` usa un \`switch\` o un objeto de mapeo: \`const colores: Record<NivelPrioridad, string> = { baja: "#green", ... }\`. Filtra con \`.filter((t) => t.prioridad === prioridad)\`.',
    },
    quiz: [
      {
        question: '¿Cuál es la ventaja de \`"norte" | "sur" | "este" | "oeste"\` sobre \`string\`?',
        options: [
          'Ocupa menos memoria',
          'TypeScript detecta typos y solo permite los valores declarados',
          'El código se ejecuta más rápido',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'TypeScript detecta typos y solo permite los valores declarados',
        correctFeedback:
          'Correcto. Con la unión, TypeScript detecta si escribes "northe" o "arriba" — valores que no están en el conjunto esperado.',
        incorrectFeedback:
          'No es correcto. La ventaja principal es la seguridad: TypeScript detecta valores inválidos en tiempo de compilación. Si escribes "northe" por error, TypeScript lo detecta inmediatamente.',
      },
      {
        question: '¿Qué error mostraría TypeScript con este código?\n\ntype Rol = "admin" | "editor" | "lector"\nconst rol: Rol = "superadmin"',
        options: [
          'Ningún error, TypeScript acepta cualquier string',
          'Error: "superadmin" no es parte del tipo Rol',
          'Error: los union types no se pueden asignar a const',
          'Warning: valor fuera de rango',
        ],
        correctAnswer: 'Error: "superadmin" no es parte del tipo Rol',
        correctFeedback:
          'Correcto. \`"superadmin"\` no es ninguno de los valores permitidos en \`"admin" | "editor" | "lector"\`.',
        incorrectFeedback:
          'No es correcto. TypeScript reporta un error porque \`"superadmin"\` no está en el tipo \`Rol = "admin" | "editor" | "lector"\`. Los union types de strings son restrictivos: solo los valores declarados son válidos.',
      },
      {
        question: '¿Cuándo es útil usar un \`switch\` con una unión de strings?',
        options: [
          'Nunca, los if/else son siempre mejores',
          'Cuando quieres manejar cada valor de la unión con lógica diferente',
          'Solo cuando la unión tiene más de 10 valores',
          'Solo para uniones de números',
        ],
        correctAnswer: 'Cuando quieres manejar cada valor de la unión con lógica diferente',
        correctFeedback:
          'Correcto. Un \`switch\` es muy legible con uniones de strings, y TypeScript puede verificar que cubres todos los casos (exhaustiveness checking).',
        incorrectFeedback:
          'No es correcto. El \`switch\` es ideal para manejar cada valor de una unión con lógica diferente. Además, TypeScript puede verificar que cubres todos los casos en la unión, lo que previene olvidar estados.',
      },
      {
        question: '¿Qué mejora del editor de código obtienes con las uniones de strings?',
        options: [
          'El editor resalta errores de sintaxis',
          'El editor ofrece autocompletado con exactamente las opciones válidas',
          'El editor formatea el código automáticamente',
          'El editor agrega comentarios explicativos',
        ],
        correctAnswer: 'El editor ofrece autocompletado con exactamente las opciones válidas',
        correctFeedback:
          'Correcto. Cuando el tipo es \`"pendiente" | "enviado" | "entregado"\`, al escribir, el editor sugiere exactamente esas tres opciones.',
        incorrectFeedback:
          'No es correcto. Una ventaja práctica de las uniones de strings es el autocompletado: el editor muestra exactamente las opciones válidas, sin necesidad de recordarlas todas o consultar la documentación.',
      },
      {
        question: '¿Cuál de estas es una buena candidata para una unión de strings?',
        options: [
          'El nombre de un usuario (infinitas posibilidades)',
          'El texto de un artículo (contenido variable)',
          'El estado de un pedido (número finito de estados conocidos)',
          'El precio de un producto (valor numérico)',
        ],
        correctAnswer: 'El estado de un pedido (número finito de estados conocidos)',
        correctFeedback:
          'Correcto. Las uniones de strings son ideales para conjuntos finitos y conocidos de valores: estados, roles, categorías, etc.',
        incorrectFeedback:
          'No es correcto. Las uniones de strings son para conjuntos finitos y conocidos de valores. El estado de un pedido tiene un número limitado de estados ("pendiente", "enviado", etc.). Los nombres y textos pueden ser cualquier string, y los precios son números.',
      },
    ],
  },

  // ── Lección 73 ───────────────────────────────────────────────────────────
  {
    slug: 'uniones-numeros',
    title: 'Uniones con números',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 3,
    description:
      'Aprende a restringir valores numéricos posibles usando union types.',
    explanation: `Al igual que con strings, puedes crear uniones de valores numéricos específicos. Esto es útil cuando solo ciertos números son valores válidos.

**Ejemplo básico**

\`\`\`ts
type NivelDificultad = 1 | 2 | 3 | 4 | 5

let nivel: NivelDificultad = 3   // ✓
nivel = 5                         // ✓
nivel = 6                         // Error: 6 no está en la unión
\`\`\`

**Casos de uso**

- Niveles: \`1 | 2 | 3 | 4 | 5\`
- Calificaciones específicas: \`1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10\`
- Códigos de estado HTTP simplificados: \`200 | 201 | 400 | 401 | 404 | 500\`
- Número de columnas: \`1 | 2 | 3 | 4 | 6 | 12\`
- Tamaños en puntos: \`8 | 10 | 12 | 14 | 16 | 18 | 24\`

**Uniones mixtas (string y number)**

También puedes mezclar strings y números:

\`\`\`ts
type Id = string | number

const id1: Id = 42
const id2: Id = "abc-123"
\`\`\`

**¿Cuándo no usar uniones de números?**

Si el conjunto de valores válidos es muy grande (como cualquier número entre 0 y 100), mejor usa \`number\` con validación en tiempo de ejecución, no un union type.

\`\`\`ts
// Impracticable — demasiados valores
type Porcentaje = 0 | 1 | 2 | ... | 100

// Mejor así:
type Porcentaje = number  // y validar en runtime
\`\`\`

**Uniones de números vs. enums**

Los enums de TypeScript son otra forma de representar valores discretos. Aprenderás sobre enums más adelante. Por ahora, los union types numéricos son una alternativa ligera sin generar código JavaScript adicional.`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Unión de números para niveles
type Nivel = 1 | 2 | 3

interface Curso {
  titulo: string
  nivel: Nivel
  precio: number
}

const cursos: Curso[] = [
  { titulo: "HTML Básico", nivel: 1, precio: 0 },
  { titulo: "TypeScript", nivel: 2, precio: 299 },
  { titulo: "Arquitectura", nivel: 3, precio: 499 },
]

function obtenerEtiquetaNivel(nivel: Nivel): string {
  switch (nivel) {
    case 1: return "Principiante"
    case 2: return "Intermedio"
    case 3: return "Avanzado"
  }
}

function filtrarPorNivel(lista: Curso[], nivel: Nivel): Curso[] {
  return lista.filter((c) => c.nivel === nivel)
}

cursos.forEach((c) => {
  console.log(\`\${c.titulo} — \${obtenerEtiquetaNivel(c.nivel)} — $\${c.precio}\`)
})
// → HTML Básico — Principiante — $0
// → TypeScript — Intermedio — $299
// → Arquitectura — Avanzado — $499

const principiantes = filtrarPorNivel(cursos, 1)
console.log("Principiantes:", principiantes.map((c) => c.titulo))
// → ["HTML Básico"]

// Error: 4 no está en 1 | 2 | 3
// filtrarPorNivel(cursos, 4)

// Unión de códigos HTTP
type CodigoHTTP = 200 | 201 | 400 | 401 | 403 | 404 | 500

function interpretarCodigo(codigo: CodigoHTTP): string {
  if (codigo >= 200 && codigo < 300) return "Éxito"
  if (codigo >= 400 && codigo < 500) return "Error del cliente"
  return "Error del servidor"
}

console.log(interpretarCodigo(200))  // → Éxito
console.log(interpretarCodigo(404))  // → Error del cliente
console.log(interpretarCodigo(500))  // → Error del servidor`,
    keyPoints: [
      'Las uniones de números restringen el valor a un conjunto específico de enteros o decimales.',
      'Son útiles para niveles, códigos, columnas de cuadrícula y categorías numéricas.',
      'No son prácticas para rangos grandes — usa `number` con validación en esos casos.',
      'Puedes mezclar strings y números en la misma unión.',
      'Los `switch` con uniones numéricas son elegantes y TypeScript verifica la exhaustividad.',
      'Las uniones de números son una alternativa ligera a los enums sin código JavaScript adicional.',
    ],
    exercise: {
      description:
        'Crea un type `PrioridadNumero = 1 | 2 | 3 | 4 | 5` donde 1 es la más alta. Crea una interface `Incidencia` con `id`, `descripcion`, `prioridad: PrioridadNumero` y `resuelta: boolean`. Escribe funciones `obtenerColor` (1-2 → "rojo", 3 → "amarillo", 4-5 → "verde") y `ordenarPorPrioridad` (de mayor a menor prioridad, es decir, de 1 a 5). Prueba con 5 incidencias.',
      hint: 'Para `obtenerColor` usa condicionales: `if (prioridad <= 2)\`. Para \`ordenarPorPrioridad\` usa \`.sort((a, b) => a.prioridad - b.prioridad)\` ya que 1 es mayor prioridad.',
    },
    quiz: [
      {
        question: '¿Qué tipo es adecuado para una propiedad que solo puede ser 1, 2 o 3?',
        options: [
          'number',
          '1 | 2 | 3',
          'integer',
          'string',
        ],
        correctAnswer: '1 | 2 | 3',
        correctFeedback:
          'Correcto. La unión literal \`1 | 2 | 3\` restringe el valor exactamente a esos tres números.',
        incorrectFeedback:
          'No es correcto. \`number\` acepta cualquier número incluyendo 4, 5, decimales y negativos. Para restringir a solo 1, 2 o 3, se usa la unión literal \`1 | 2 | 3\`.',
      },
      {
        question: '¿Por qué no es práctico crear un union type para "todos los números del 0 al 100"?',
        options: [
          'TypeScript no soporta uniones de más de 10 valores',
          'Sería un tipo con 101 valores literales, lo cual es impracticable de escribir y mantener',
          'Solo strings pueden usarse en uniones de más de 5 valores',
          'Los rangos requieren tipos genéricos',
        ],
        correctAnswer: 'Sería un tipo con 101 valores literales, lo cual es impracticable de escribir y mantener',
        correctFeedback:
          'Correcto. Para rangos grandes, es mejor usar \`number\` y validar el rango en tiempo de ejecución.',
        incorrectFeedback:
          'No es correcto. TypeScript sí soporta uniones grandes, pero escribir \`0 | 1 | 2 | ... | 100\` es impracticable. Para rangos continuos o grandes, usa \`number\` con validación en el cuerpo de la función.',
      },
      {
        question: '¿Cuál es la diferencia entre \`type Nivel = 1 | 2 | 3\` y un enum \`enum Nivel { Uno = 1, Dos = 2, Tres = 3 }\`?',
        options: [
          'No hay diferencia en absoluto',
          'El union type no genera código JavaScript; el enum sí genera un objeto',
          'El enum permite más valores que el union type',
          'Solo el enum puede usarse en funciones',
        ],
        correctAnswer: 'El union type no genera código JavaScript; el enum sí genera un objeto',
        correctFeedback:
          'Correcto. Los union types son tipos puros de TypeScript y desaparecen al compilar. Los enums generan un objeto JavaScript en el bundle.',
        incorrectFeedback:
          'No es correcto. Una diferencia clave es el código generado: los union types son tipos TypeScript puros y no generan JavaScript. Los enums sí generan un objeto JavaScript en el bundle final.',
      },
      {
        question: '¿Puede un union type mezclar strings y números?',
        options: [
          'No, todos los tipos en la unión deben ser del mismo tipo',
          'Sí, un union type puede mezclar cualquier combinación de tipos',
          'Solo si el union type se llama Mixed',
          'Solo en arrays',
        ],
        correctAnswer: 'Sí, un union type puede mezclar cualquier combinación de tipos',
        correctFeedback:
          'Correcto. Un union type como \`string | number | boolean\` o \`"a" | 1 | true\` es perfectamente válido en TypeScript.',
        incorrectFeedback:
          'No es correcto. Los union types pueden mezclar cualquier combinación de tipos: \`string | number\`, \`"activo" | 1 | null\`, etc. No hay restricción de que todos los tipos sean iguales.',
      },
      {
        question: '¿Cuándo conviene usar una unión de números en lugar de \`number\` simple?',
        options: [
          'Siempre que el valor sea numérico',
          'Cuando el conjunto de valores válidos es pequeño, finito y conocido',
          'Cuando el valor puede ser mayor que 100',
          'Solo con decimales',
        ],
        correctAnswer: 'Cuando el conjunto de valores válidos es pequeño, finito y conocido',
        correctFeedback:
          'Correcto. Las uniones de números son para conjuntos discretos y manejables: niveles 1-3, códigos 200/404/500, columnas 1/2/3/4/6/12.',
        incorrectFeedback:
          'No es correcto. Las uniones de números son para conjuntos finitos, pequeños y conocidos: niveles, calificaciones discretas, códigos. Para rangos continuos o valores arbitrarios, usa \`number\` y valida en tiempo de ejecución.',
      },
    ],
  },

  // ── Lección 74 ───────────────────────────────────────────────────────────
  {
    slug: 'literal-types',
    title: 'Literal types',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 4,
    description:
      'Aprende qué son los literal types y cómo permiten representar valores exactos.',
    explanation: `Los **literal types** son un concepto fundamental en TypeScript: en lugar de un tipo genérico como \`string\` o \`number\`, el tipo es un **valor específico**.

**¿Qué es un literal type?**

\`\`\`ts
// Tipo: string (cualquier string)
let a: string = "hola"
a = "otro"  // ✓

// Tipo: literal "hola" (solo ese string)
let b: "hola" = "hola"
b = "otro"  // Error: solo puede ser "hola"
\`\`\`

**Los tres tipos de literales**

1. **String literals**: \`"norte" | "sur"\`
2. **Number literals**: \`1 | 2 | 3\`
3. **Boolean literals**: \`true\` o \`false\` (aunque raro)

**¿Cuándo TypeScript infiere literal types?**

\`\`\`ts
const x = "hola"  // Tipo inferido: "hola" (literal, por ser const)
let y = "hola"    // Tipo inferido: string (mutable, por ser let)
\`\`\`

Cuando usas \`const\` con un primitivo, TypeScript infiere el tipo literal más específico, porque sabe que el valor nunca cambiará.

**Literal types en funciones**

\`\`\`ts
function activar(modo: "on" | "off"): void {
  console.log(\`Modo: \${modo}\`)
}

activar("on")   // ✓
activar("off")  // ✓
activar("ON")   // Error: mayúsculas diferentes
\`\`\`

**Literal types y objetos**

\`\`\`ts
interface Configuracion {
  modo: "desarrollo" | "produccion"
  depurar: true | false    // equivalente a boolean
  nivel: 1 | 2 | 3
}
\`\`\`

**Una analogía útil**

Si \`string\` es el tipo "cualquier texto", un literal type es el tipo "exactamente este texto". Es como la diferencia entre decir "dame un número de teléfono" vs "dame exactamente este número: 555-1234".`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Literal type: el tipo ES el valor
const saludo = "Hola"  // TypeScript infiere tipo literal "Hola"
// saludo = "Adiós"    // Error si fuera let: "Adiós" no es "Hola"

// Diferencia const vs let
const constante = "typescript"  // tipo: "typescript" (literal)
let variable = "typescript"     // tipo: string (general)

// Función con literal types
function cambiarDireccion(dir: "izquierda" | "derecha" | "recto"): void {
  console.log(\`Girando: \${dir}\`)
}

cambiarDireccion("izquierda")  // ✓
cambiarDireccion("derecha")    // ✓
// cambiarDireccion("arriba")  // Error

// Literal type en propiedad de interface
interface ConfigApp {
  entorno: "desarrollo" | "produccion" | "prueba"
  logNivel: "debug" | "info" | "warn" | "error"
  maxReintentos: 1 | 2 | 3 | 5 | 10
}

const config: ConfigApp = {
  entorno: "desarrollo",
  logNivel: "debug",
  maxReintentos: 3,
}

function mostrarConfig(c: ConfigApp): void {
  console.log(\`Entorno: \${c.entorno}\`)
  console.log(\`Log: \${c.logNivel}\`)
  console.log(\`Reintentos: \${c.maxReintentos}\`)
}

mostrarConfig(config)
// → Entorno: desarrollo
// → Log: debug
// → Reintentos: 3

// Inferencia: const vs let
function demostrarInferencia() {
  const a = 42       // tipo: 42 (literal)
  const b = true     // tipo: true (literal)
  const c = "modo"   // tipo: "modo" (literal)

  let x = 42         // tipo: number
  let y = true       // tipo: boolean
  let z = "modo"     // tipo: string

  // TypeScript sabe que a siempre es 42, x puede cambiar
  console.log(a, b, c, x, y, z)
}`,
    keyPoints: [
      'Un literal type es cuando el tipo ES el valor exacto: `"activo"\` es un tipo, \`3\` es un tipo.',
      'Se crean automáticamente con \`const\` para primitivos.',
      'Con \`let\`, TypeScript infiere el tipo general (\`string\`, \`number\`) no el literal.',
      'Los literal types son los bloques básicos de los union types de valores específicos.',
      'Permiten que TypeScript detecte typos y valores incorrectos con alta precisión.',
      'Se usan en string literals, number literals y boolean literals.',
    ],
    exercise: {
      description:
        'Crea una función \`configurarLed\` que reciba: \`color: "rojo" | "verde" | "azul" | "blanco"\`, \`intensidad: 25 | 50 | 75 | 100\` y \`parpadeo: boolean\`. La función debe retornar un string describiendo la configuración: "LED [color] al [intensidad]% [Parpadeando/Estático]". Prueba con distintas combinaciones y verifica que TypeScript detecta valores inválidos.',
      hint: 'El retorno sería algo como \`\`LED \${color} al \${intensidad}% \${parpadeo ? "Parpadeando" : "Estático"}\`\`. Recuerda que los literal types en los parámetros restringen los valores exactos.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia de tipo entre \`const x = "hola"\` y \`let y = "hola"\`?',
        options: [
          'Ambos tienen tipo \`string\`',
          '\`const x\` tiene tipo literal \`"hola"\`; \`let y\` tiene tipo \`string\`',
          '\`let y\` tiene tipo literal \`"hola"\`; \`const x\` tiene tipo \`string\`',
          'No hay diferencia de tipo, solo de mutabilidad',
        ],
        correctAnswer: '\`const x\` tiene tipo literal \`"hola"\`; \`let y\` tiene tipo \`string\`',
        correctFeedback:
          'Correcto. TypeScript infiere el tipo literal para \`const\` (el valor no puede cambiar) y el tipo general para \`let\` (el valor puede cambiar).',
        incorrectFeedback:
          'No es correcto. TypeScript infiere tipos diferentes: para \`const x = "hola"\`, el tipo es el literal \`"hola"\` porque el valor nunca cambiará. Para \`let y = "hola"\`, el tipo es \`string\` porque \`y\` puede cambiar a cualquier otro string.',
      },
      {
        question: '¿Qué son los "literal types" en TypeScript?',
        options: [
          'Tipos que solo pueden ser strings',
          'Tipos donde el tipo ES el valor exacto (como \`"norte"\` o \`42\`)',
          'Tipos que se definen con la palabra clave \`literal\`',
          'Tipos sin anotación explícita',
        ],
        correctAnswer: 'Tipos donde el tipo ES el valor exacto (como \`"norte"\` o \`42\`)',
        correctFeedback:
          'Correcto. Un literal type es cuando el tipo representa un valor específico y exacto, no la categoría general de valores.',
        incorrectFeedback:
          'No es correcto. Los literal types son tipos donde el tipo mismo ES el valor: \`"norte"\` es un tipo string literal, \`42\` es un tipo number literal. Son más específicos que \`string\` o \`number\`.',
      },
      {
        question: '¿Cuál de estos es un literal type?',
        options: [
          'string',
          'number',
          '"activo"',
          'boolean',
        ],
        correctAnswer: '"activo"',
        correctFeedback:
          'Correcto. \`"activo"\` entre comillas es un string literal type — representa exactamente ese valor, no cualquier string.',
        incorrectFeedback:
          'No es correcto. \`string\`, \`number\` y \`boolean\` son tipos generales. \`"activo"\` (con comillas) es un literal type — representa exactamente ese string, no cualquier string.',
      },
      {
        question: '¿Por qué TypeScript infiere tipos literales para \`const\` pero no para \`let\`?',
        options: [
          'Es un bug de TypeScript',
          'Porque \`const\` no puede ser reasignado, por eso el tipo puede ser más específico',
          'Porque \`let\` no soporta literal types',
          'Por razones de rendimiento',
        ],
        correctAnswer: 'Porque \`const\` no puede ser reasignado, por eso el tipo puede ser más específico',
        correctFeedback:
          'Correcto. Como \`const\` no puede reasignarse, TypeScript sabe que el valor siempre será ese literal específico. Para \`let\`, el valor puede cambiar, así que infiere el tipo más general.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere literal types para \`const\` porque el valor nunca cambiará — puede ser más específico. Para \`let\`, el valor puede cambiar (a otro string, número, etc.), por lo que TypeScript infiere el tipo más general.',
      },
      {
        question: '¿Qué ventaja tienen los literal types en funciones?',
        options: [
          'Hacen las funciones más rápidas',
          'Permiten que TypeScript detecte argumentos incorrectos con alta precisión',
          'Eliminan la necesidad de parámetros',
          'Solo funcionan en async functions',
        ],
        correctAnswer: 'Permiten que TypeScript detecte argumentos incorrectos con alta precisión',
        correctFeedback:
          'Correcto. Si un parámetro es \`"izquierda" | "derecha"\`, TypeScript detecta inmediatamente si pasas \`"dereca"\` (typo) o \`"arriba"\` (valor incorrecto).',
        incorrectFeedback:
          'No es correcto. Los literal types en parámetros permiten una detección muy precisa de errores: TypeScript sabe exactamente qué valores son válidos y rechaza cualquier otro, incluyendo typos y valores semánticamente incorrectos.',
      },
    ],
  },

  // ── Lección 75 ───────────────────────────────────────────────────────────
  {
    slug: 'estados-literal-types',
    title: 'Estados con literal types',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 5,
    description:
      'Aprende a modelar estados como "pending", "success" y "error" usando literal types.',
    explanation: `Uno de los usos más importantes de los literal types es modelar **estados** en una aplicación. En lugar de usar strings arbitrarios o números mágicos, defines exactamente cuáles son los estados posibles.

**El patrón de estados**

\`\`\`ts
type EstadoCarga = "idle" | "cargando" | "exitoso" | "error"
\`\`\`

Este simple type alias garantiza que:
1. Solo existen esos 4 estados — no más, no menos.
2. TypeScript detecta si escribes un estado inválido.
3. El editor te muestra exactamente cuáles son las opciones válidas.

**Estados con datos asociados**

A veces el estado determina qué datos están disponibles:

\`\`\`ts
type EstadoPago =
  | "pendiente"
  | "procesando"
  | "aprobado"
  | "rechazado"
  | "reembolsado"
\`\`\`

**Máquina de estados simple**

Puedes validar transiciones de estado:

\`\`\`ts
const transicionesValidas: Record<EstadoPago, EstadoPago[]> = {
  pendiente: ["procesando", "rechazado"],
  procesando: ["aprobado", "rechazado"],
  aprobado: ["reembolsado"],
  rechazado: [],
  reembolsado: [],
}
\`\`\`

**¿Por qué no usar números mágicos?**

\`\`\`ts
// Mal — nadie sabe qué significa 2
if (estadoPago === 2) { mostrarMensajeExito() }

// Bien — claro y explícito
if (estadoPago === "aprobado") { mostrarMensajeExito() }
\`\`\`

**Combinar estados con interfaces**

\`\`\`ts
interface SolicitudAPI {
  estado: "idle" | "cargando" | "exitoso" | "error"
  datos?: string[]
  error?: string
}
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Estados de una solicitud de red
type EstadoSolicitud = "idle" | "cargando" | "exitoso" | "error"

interface EstadoApp {
  solicitud: EstadoSolicitud
  datos: string[]
  mensajeError?: string
}

// Estado inicial
let estado: EstadoApp = {
  solicitud: "idle",
  datos: [],
}

// Función que actualiza el estado según la fase
function mostrarEstado(app: EstadoApp): void {
  switch (app.solicitud) {
    case "idle":
      console.log("⏳ Esperando acción del usuario...")
      break
    case "cargando":
      console.log("🔄 Cargando datos...")
      break
    case "exitoso":
      console.log(\`✅ Datos cargados: \${app.datos.length} elementos\`)
      break
    case "error":
      console.log(\`❌ Error: \${app.mensajeError ?? "Error desconocido"}\`)
      break
  }
}

// Simulación de estados
mostrarEstado(estado)  // → ⏳ Esperando acción del usuario...

estado = { solicitud: "cargando", datos: [] }
mostrarEstado(estado)  // → 🔄 Cargando datos...

estado = { solicitud: "exitoso", datos: ["Ana", "Carlos", "Sofía"] }
mostrarEstado(estado)  // → ✅ Datos cargados: 3 elementos

estado = { solicitud: "error", datos: [], mensajeError: "Tiempo de espera agotado" }
mostrarEstado(estado)  // → ❌ Error: Tiempo de espera agotado

// Estados de un carrito
type EstadoCarrito = "vacio" | "con-items" | "procesando-pago" | "completado"

function obtenerMensajeCarrito(estado: EstadoCarrito): string {
  switch (estado) {
    case "vacio": return "Tu carrito está vacío"
    case "con-items": return "Tienes artículos en tu carrito"
    case "procesando-pago": return "Procesando tu pago..."
    case "completado": return "¡Compra realizada con éxito!"
  }
}

const estadosCarrito: EstadoCarrito[] = ["vacio", "con-items", "procesando-pago", "completado"]
estadosCarrito.forEach((e) => console.log(obtenerMensajeCarrito(e)))`,
    keyPoints: [
      'Los literal types son ideales para modelar estados finitos y conocidos de una aplicación.',
      'Prefiere strings descriptivos sobre números mágicos para los estados.',
      'El `switch` con literal types permite manejar cada estado con lógica específica.',
      'TypeScript puede verificar que cubres todos los estados posibles (exhaustiveness).',
      'Combinar el estado con datos opcionales es un patrón muy común en aplicaciones.',
      'Los estados con literal types hacen el código más legible y evitan errores de estado inválido.',
    ],
    exercise: {
      description:
        'Crea un sistema de semáforo: define `type EstadoSemaforo = "rojo" | "amarillo" | "verde"`. Crea una interface `Semaforo` con `estado: EstadoSemaforo`, `duracion: number` (segundos) y `descripcion: string`. Escribe una función `siguienteEstado` que reciba el estado actual y retorne el siguiente en el ciclo (rojo→verde→amarillo→rojo). También escribe `obtenerInstruccion` que retorne la instrucción de tráfico para cada estado.',
      hint: 'Para `siguienteEstado` usa un `switch`: `case "rojo": return "verde"`, etc. Para `obtenerInstruccion`: rojo → "Alto", amarillo → "Precaución", verde → "Avanza".',
    },
    quiz: [
      {
        question: '¿Por qué es mejor usar `"pendiente" | "aprobado" | "rechazado"` que números 0, 1, 2 para estados?',
        options: [
          'Los strings son más rápidos que los números',
          'Los strings descriptivos hacen el código más legible y evitan confusión sobre qué significa cada número',
          'TypeScript no soporta números en union types',
          'Los números consumen más memoria',
        ],
        correctAnswer: 'Los strings descriptivos hacen el código más legible y evitan confusión sobre qué significa cada número',
        correctFeedback:
          'Correcto. `estado === "aprobado"` es mucho más claro que `estado === 1`. Los números mágicos son una fuente común de bugs y confusión.',
        incorrectFeedback:
          'No es correcto. Los strings descriptivos hacen el código autoexplicativo. `if (estado === 2)` podría significar cualquier cosa; `if (estado === "aprobado")` es inequívoco. Esto previene bugs y hace el código mantenible.',
      },
      {
        question: '¿Qué verifica TypeScript cuando usas un `switch` completo sobre un union type de strings?',
        options: [
          'Que los strings estén ordenados alfabéticamente',
          'Que todos los casos del switch cubran todos los valores de la unión',
          'Que el switch tenga un caso `default`',
          'Solo que el switch tenga al menos un caso',
        ],
        correctAnswer: 'Que todos los casos del switch cubran todos los valores de la unión',
        correctFeedback:
          'Correcto. TypeScript puede verificar la exhaustividad — si olvidaste cubrir un estado, TypeScript te lo puede indicar (dependiendo de la configuración).',
        incorrectFeedback:
          'No es correcto. TypeScript puede verificar que un `switch` cubra todos los valores de una unión. Si agregas un nuevo estado a la unión y olvidas el caso en el switch, TypeScript puede advertirte. Esto se llama "exhaustiveness checking".',
      },
      {
        question: '¿Qué estado inicial es más común en un sistema de carga de datos?',
        options: [
          '"error"',
          '"exitoso"',
          '"cargando"',
          '"idle"',
        ],
        correctAnswer: '"idle"',
        correctFeedback:
          'Correcto. `"idle"` (o "reposo") indica que la aplicación está esperando que el usuario realice una acción, antes de iniciar cualquier solicitud.',
        incorrectFeedback:
          'No es correcto. El estado inicial más común es `"idle"` — la aplicación está en reposo, esperando que el usuario inicie una acción. `"cargando"` viene después de iniciar la solicitud, `"exitoso"` o `"error"` después de que termina.',
      },
      {
        question: '¿Qué permite el patrón `EstadoApp { solicitud: EstadoSolicitud; datos?: T; error?: string }`?',
        options: [
          'Que los datos y errores siempre estén presentes',
          'Que los datos y errores sean opcionales según el estado actual',
          'Que el estado siempre sea "idle"',
          'Solo funciona con arrays de datos',
        ],
        correctAnswer: 'Que los datos y errores sean opcionales según el estado actual',
        correctFeedback:
          'Correcto. `datos` solo existe cuando el estado es "exitoso", y `error` solo cuando el estado es "error". Las propiedades opcionales capturan esta realidad.',
        incorrectFeedback:
          'No es correcto. El patrón permite que `datos` y `error` sean opcionales porque no siempre están disponibles: `datos\` solo existe en estado "exitoso", \`error\` solo en estado "error". Más adelante aprenderás discriminated unions que modelan esto de forma más estricta.',
      },
      {
        question: '¿Cuál es la ventaja de modelar estados con literal types vs. usar \`string\` libre?',
        options: [
          'Los literal types hacen el código más lento pero más seguro',
          'TypeScript detecta estados inválidos y el editor autocompleta los estados válidos',
          'Solo los literal types permiten usar switch',
          'Los literal types son más cortos de escribir',
        ],
        correctAnswer: 'TypeScript detecta estados inválidos y el editor autocompleta los estados válidos',
        correctFeedback:
          'Correcto. Con literal types, si escribes \`"carganding"\` (typo) o \`"procesado"\` (estado no definido), TypeScript lo detecta inmediatamente.',
        incorrectFeedback:
          'No es correcto. Las ventajas son: (1) TypeScript detecta estados inválidos en compilación, (2) el editor autocompleta los estados válidos, (3) el código es autodocumentado. Puedes usar switch con strings libres también, pero sin las verificaciones de TypeScript.',
      },
    ],
  },

  // ── Lección 76 ───────────────────────────────────────────────────────────
  {
    slug: 'union-types-objetos',
    title: 'Union types con objetos',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 6,
    description:
      'Aprende a crear uniones de objetos con diferentes estructuras.',
    explanation: `Los union types no se limitan a primitivos — también puedes crear uniones de objetos. Esto es útil cuando un valor puede ser uno de varios tipos de objeto distintos.

**Ejemplo básico**

\`\`\`ts
type Circulo = { tipo: "circulo"; radio: number }
type Rectangulo = { tipo: "rectangulo"; ancho: number; alto: number }

type Forma = Circulo | Rectangulo
\`\`\`

**El problema del acceso a propiedades**

Con una unión de objetos, TypeScript solo permite acceder a las propiedades que existen en **todos** los tipos de la unión:

\`\`\`ts
function mostrar(forma: Forma): void {
  console.log(forma.tipo)   // ✓ existe en ambos
  // console.log(forma.radio)   // Error: radio no existe en Rectangulo
  // console.log(forma.ancho)   // Error: ancho no existe en Circulo
}
\`\`\`

**Narrowing con propiedades comunes**

La técnica de usar una propiedad común para identificar el tipo se llama **discriminated union** (la aprenderás en detalle en la siguiente lección):

\`\`\`ts
function calcularArea(forma: Forma): number {
  if (forma.tipo === "circulo") {
    return Math.PI * forma.radio ** 2  // TypeScript sabe que es Circulo
  } else {
    return forma.ancho * forma.alto    // TypeScript sabe que es Rectangulo
  }
}
\`\`\`

**Uniones de objetos sin propiedad discriminante**

Si los objetos no tienen una propiedad común que los distinga, puedes usar \`"propiedad" in objeto\`:

\`\`\`ts
type ConNombre = { nombre: string }
type ConId = { id: number }

function identificar(valor: ConNombre | ConId): void {
  if ("nombre" in valor) {
    console.log("Nombre:", valor.nombre)
  } else {
    console.log("ID:", valor.id)
  }
}
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Unión de objetos para formas geométricas
type Circulo = {
  tipo: "circulo"
  radio: number
}

type Rectangulo = {
  tipo: "rectangulo"
  ancho: number
  alto: number
}

type Triangulo = {
  tipo: "triangulo"
  base: number
  altura: number
}

type Forma = Circulo | Rectangulo | Triangulo

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2
    case "rectangulo":
      return forma.ancho * forma.alto
    case "triangulo":
      return (forma.base * forma.altura) / 2
  }
}

function describir(forma: Forma): string {
  switch (forma.tipo) {
    case "circulo":
      return \`Círculo de radio \${forma.radio}\`
    case "rectangulo":
      return \`Rectángulo de \${forma.ancho}x\${forma.alto}\`
    case "triangulo":
      return \`Triángulo de base \${forma.base} y altura \${forma.altura}\`
  }
}

const formas: Forma[] = [
  { tipo: "circulo", radio: 5 },
  { tipo: "rectangulo", ancho: 4, alto: 6 },
  { tipo: "triangulo", base: 3, altura: 8 },
]

formas.forEach((f) => {
  const area = calcularArea(f)
  console.log(\`\${describir(f)}: área = \${area.toFixed(2)}\`)
})
// → Círculo de radio 5: área = 78.54
// → Rectángulo de 4x6: área = 24.00
// → Triángulo de base 3 y altura 8: área = 12.00

// Unión sin propiedad discriminante — usando "in"
type ConCorreo = { correo: string; nombre: string }
type ConTelefono = { telefono: string; nombre: string }

type Contacto = ConCorreo | ConTelefono

function mostrarContacto(c: Contacto): void {
  console.log("Nombre:", c.nombre)  // 'nombre' existe en ambos
  if ("correo" in c) {
    console.log("Correo:", c.correo)
  } else {
    console.log("Teléfono:", c.telefono)
  }
}

mostrarContacto({ correo: "ana@mail.com", nombre: "Ana" })
// → Nombre: Ana
// → Correo: ana@mail.com`,
    keyPoints: [
      'Puedes crear uniones de tipos objeto: `type Forma = Circulo | Rectangulo\`.',
      'TypeScript solo permite acceder a propiedades que existen en TODOS los tipos de la unión.',
      'Para acceder a propiedades específicas de un tipo, debes hacer narrowing primero.',
      'Usar una propiedad común discriminante (\`tipo\`, \`kind\`) es la técnica más elegante.',
      'El operador \`"propiedad" in objeto\` sirve para hacer narrowing cuando no hay discriminante.',
      'Los union types de objetos son la base de los "discriminated unions" de la siguiente lección.',
    ],
    exercise: {
      description:
        'Crea un sistema de notificaciones con tres tipos: \`NotificacionInfo\` (\`tipo: "info"\`, \`mensaje: string\`), \`NotificacionError\` (\`tipo: "error"\`, \`mensaje: string\`, \`codigo: number\`) y \`NotificacionExito\` (\`tipo: "exito"\`, \`mensaje: string\`, \`accion?: string\`). Crea el tipo union \`Notificacion\`. Escribe funciones \`mostrarNotificacion\` (que muestre información diferente según el tipo) y \`filtrarErrores\` (que devuelva solo las de tipo error).',
      hint: 'Usa \`switch (n.tipo)\` para hacer narrowing. Para \`filtrarErrores\`, usa \`.filter((n) => n.tipo === "error")\`. El tipo de retorno de \`filtrarErrores\` puede ser \`NotificacionError[]\` después del filtrado.',
    },
    quiz: [
      {
        question: '¿Qué propiedades puedes acceder directamente en una \`Circulo | Rectangulo\` si Circulo tiene \`{tipo, radio}\` y Rectangulo tiene \`{tipo, ancho, alto}\`?',
        options: [
          'Todas: tipo, radio, ancho, alto',
          'Solo las que existen en ambos: tipo',
          'Ninguna, necesitas hacer narrowing primero',
          'Las de Circulo porque está primero en la unión',
        ],
        correctAnswer: 'Solo las que existen en ambos: tipo',
        correctFeedback:
          'Correcto. Sin narrowing, solo puedes acceder a \`tipo\` porque es la única propiedad que existe en ambos tipos de la unión.',
        incorrectFeedback:
          'No es correcto. Sin narrowing, TypeScript solo permite acceder a propiedades que existen en TODOS los tipos de la unión. Como \`tipo\` existe en ambos, puedes accederla. \`radio\`, \`ancho\` y \`alto\` requieren narrowing primero.',
      },
      {
        question: '¿Cómo funciona el operador \`"propiedad" in objeto\` para narrowing?',
        options: [
          'Verifica si la propiedad tiene un valor truthy',
          'Verifica si la propiedad existe en el objeto, permitiendo a TypeScript reducir el tipo',
          'Agrega la propiedad al objeto si no existe',
          'Solo funciona con propiedades opcionales',
        ],
        correctAnswer: 'Verifica si la propiedad existe en el objeto, permitiendo a TypeScript reducir el tipo',
        correctFeedback:
          'Correcto. \`"correo" in contacto\` retorna \`true\` si \`correo\` existe en el objeto. TypeScript usa esto para saber cuál de los tipos de la unión es en ese bloque.',
        incorrectFeedback:
          'No es correcto. El operador \`"propiedad" in objeto\` retorna \`true\` si la propiedad existe en el objeto. TypeScript usa esta verificación para hacer narrowing: si entra al bloque \`if ("correo" in c)\`, TypeScript sabe que \`c\` es el tipo que tiene \`correo\`.',
      },
      {
        question: '¿Qué error mostraría TypeScript con este código?\n\ntype A = { x: number }\ntype B = { y: string }\nfunction f(val: A | B): void { console.log(val.x) }',
        options: [
          'Ningún error, x existe en A',
          'Error: x no existe en todos los tipos de la unión',
          'Error: B no tiene propiedades',
          'Warning: tipo inferido incorrectamente',
        ],
        correctAnswer: 'Error: x no existe en todos los tipos de la unión',
        correctFeedback:
          'Correcto. TypeScript sabe que \`val\` podría ser de tipo \`B\`, que no tiene \`x\`. Por eso no permite el acceso sin narrowing.',
        incorrectFeedback:
          'No es correcto. TypeScript reporta un error porque \`val\` podría ser de tipo \`B\`, que no tiene la propiedad \`x\`. TypeScript previene acceder a propiedades que no existen en todos los tipos de la unión.',
      },
      {
        question: '¿Cuál es el patrón más elegante para hacer narrowing en una unión de objetos?',
        options: [
          'Usar \`typeof\`',
          'Usar una propiedad discriminante común como \`tipo\` o \`kind\`',
          'Convertir a \`any\` y verificar',
          'Usar \`instanceof\`',
        ],
        correctAnswer: 'Usar una propiedad discriminante común como \`tipo\` o \`kind\`',
        correctFeedback:
          'Correcto. Agregar una propiedad como \`tipo: "circulo"\` o \`tipo: "rectangulo"\` a cada objeto de la unión permite un narrowing muy claro con \`switch\` o \`if\`.',
        incorrectFeedback:
          'No es correcto. La técnica más elegante es agregar una propiedad discriminante (\`tipo\`, \`kind\`, \`tag\`) con un valor literal diferente en cada tipo de la unión. Esto permite hacer narrowing con \`switch (forma.tipo)\` de forma muy legible.',
      },
      {
        question: '¿Para qué sirve crear una unión de tipos objeto en TypeScript?',
        options: [
          'Para combinar las propiedades de dos objetos en uno',
          'Para representar valores que pueden ser de más de una estructura de objeto',
          'Para hacer que los objetos sean inmutables',
          'Solo para tipos de respuesta de API',
        ],
        correctAnswer: 'Para representar valores que pueden ser de más de una estructura de objeto',
        correctFeedback:
          'Correcto. Una variable de tipo \`Circulo | Rectangulo\` puede ser cualquiera de las dos formas, con sus propiedades específicas.',
        incorrectFeedback:
          'No es correcto. Una unión de tipos objeto representa un valor que puede ser de varias estructuras posibles. No combina propiedades (eso es intersection \`&\`), no hace objetos inmutables, y no se limita a APIs.',
      },
    ],
  },

  // ── Lección 77 ───────────────────────────────────────────────────────────
  {
    slug: 'discriminated-unions-basico',
    title: 'Discriminated unions básico',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 7,
    description:
      'Aprende a diferenciar objetos dentro de una unión usando una propiedad común como type o status.',
    explanation: `Un **discriminated union** (también llamado "tagged union") es una técnica donde cada tipo en la unión tiene una propiedad con un valor literal único que permite identificar cuál de los tipos es.

**Estructura básica**

\`\`\`ts
type Resultado =
  | { tipo: "exito"; datos: string }
  | { tipo: "error"; mensaje: string; codigo: number }
\`\`\`

La propiedad \`tipo\` es el **discriminante** — un valor literal diferente en cada alternativa.

**Por qué es tan poderoso**

Cuando haces narrowing con el discriminante, TypeScript sabe exactamente cuál estructura tiene el objeto:

\`\`\`ts
function manejar(r: Resultado): void {
  if (r.tipo === "exito") {
    console.log(r.datos)    // TypeScript sabe: solo Exito tiene datos
  } else {
    console.log(r.mensaje)  // TypeScript sabe: solo Error tiene mensaje
    console.log(r.codigo)   // TypeScript sabe: solo Error tiene codigo
  }
}
\`\`\`

**Nombres comunes para el discriminante**

- \`tipo\` / \`type\`
- \`kind\`
- \`tag\`
- \`variante\`
- \`status\`

**Discriminated unions para estados de carga**

\`\`\`ts
type EstadoCarga<T> =
  | { estado: "cargando" }
  | { estado: "exitoso"; datos: T }
  | { estado: "error"; mensaje: string }
\`\`\`

Esto es mucho más preciso que tener \`datos?: T\` y \`mensaje?: string\` opcionales, porque TypeScript garantiza que cuando \`estado === "exitoso"\`, \`datos\` definitivamente existe.

**Ventajas sobre propiedades opcionales**

Con propiedades opcionales:
\`\`\`ts
// ❌ TypeScript no garantiza que datos esté presente en estado "exitoso"
interface Estado { estado: string; datos?: string; error?: string }
\`\`\`

Con discriminated union:
\`\`\`ts
// ✓ TypeScript garantiza que datos está presente cuando estado === "exitoso"
type Estado =
  | { estado: "exitoso"; datos: string }
  | { estado: "error"; error: string }
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Discriminated union para resultado de operación
type ResultadoOperacion =
  | { tipo: "exito"; datos: string[]; total: number }
  | { tipo: "error"; mensaje: string; codigo: number }
  | { tipo: "cargando" }

function mostrarResultado(resultado: ResultadoOperacion): void {
  switch (resultado.tipo) {
    case "cargando":
      console.log("⏳ Procesando...")
      break
    case "exito":
      // TypeScript sabe que resultado tiene datos y total aquí
      console.log(\`✅ \${resultado.total} registros encontrados:\`)
      resultado.datos.forEach((d) => console.log(\`  - \${d}\`))
      break
    case "error":
      // TypeScript sabe que resultado tiene mensaje y codigo aquí
      console.log(\`❌ Error \${resultado.codigo}: \${resultado.mensaje}\`)
      break
  }
}

const cargando: ResultadoOperacion = { tipo: "cargando" }
const exitoso: ResultadoOperacion = {
  tipo: "exito",
  datos: ["Ana García", "Carlos López", "Sofía Martínez"],
  total: 3,
}
const error: ResultadoOperacion = {
  tipo: "error",
  mensaje: "No se pudo conectar a la base de datos",
  codigo: 503,
}

mostrarResultado(cargando)  // → ⏳ Procesando...
mostrarResultado(exitoso)   // → ✅ 3 registros encontrados: ...
mostrarResultado(error)     // → ❌ Error 503: No se pudo conectar...

// Discriminated union para eventos
type EventoUsuario =
  | { accion: "inicio-sesion"; usuario: string; timestamp: string }
  | { accion: "cierre-sesion"; usuario: string; timestamp: string }
  | { accion: "compra"; usuario: string; monto: number; producto: string }

function procesarEvento(evento: EventoUsuario): void {
  const base = \`[\${evento.timestamp ?? new Date().toISOString()}] \${evento.usuario}\`
  if (evento.accion === "compra") {
    console.log(\`\${base}: Compró \${evento.producto} por $\${evento.monto}\`)
  } else {
    const accion = evento.accion === "inicio-sesion" ? "inició sesión" : "cerró sesión"
    console.log(\`\${base}: \${accion}\`)
  }
}`,
    keyPoints: [
      'Un discriminated union tiene una propiedad discriminante con un valor literal único por variante.',
      'Después del narrowing con el discriminante, TypeScript sabe el tipo exacto.',
      'Las propiedades de cada variante son accesibles sin verificaciones adicionales tras el narrowing.',
      'Es más seguro que usar propiedades opcionales para representar estados mutuamente excluyentes.',
      'Los nombres comunes para el discriminante son `tipo`, `type`, `kind`, `tag`, `status`.',
      'El `switch` sobre el discriminante es especialmente elegante y verificable por TypeScript.',
    ],
    exercise: {
      description:
        'Crea un discriminated union `AccionFormulario` con tres variantes: `{ tipo: "enviar"; datos: { nombre: string; correo: string } }\`, \`{ tipo: "validar"; campo: string; valor: string }\` y \`{ tipo: "resetear" }\`. Escribe una función \`procesarAccion\` que maneje cada caso con \`switch\`. Para "enviar" muestra los datos, para "validar" verifica si el campo es correo o nombre, para "resetear" muestra confirmación.',
      hint: 'Usa \`switch (accion.tipo)\` y accede a las propiedades específicas de cada caso. Para validar correo: \`accion.valor.includes("@")\`. TypeScript sabrá exactamente qué propiedades tiene en cada caso del switch.',
    },
    quiz: [
      {
        question: '¿Qué es un "discriminated union" en TypeScript?',
        options: [
          'Una unión donde todos los tipos tienen las mismas propiedades',
          'Una unión donde cada tipo tiene una propiedad común con un valor literal único que lo identifica',
          'Una unión que solo acepta tipos primitivos',
          'Una unión de interfaces con herencia',
        ],
        correctAnswer: 'Una unión donde cada tipo tiene una propiedad común con un valor literal único que lo identifica',
        correctFeedback:
          'Correcto. La propiedad "discriminante" tiene un valor literal diferente en cada variante, permitiendo identificar cuál de los tipos es en cada momento.',
        incorrectFeedback:
          'No es correcto. Un discriminated union es una unión donde cada alternativa tiene una propiedad (el "discriminante") con un valor literal único. Esta propiedad permite que TypeScript sepa exactamente cuál tipo es después de hacer un check.',
      },
      {
        question: '¿Qué garantiza TypeScript después de \`if (resultado.tipo === "exito")\` si \`resultado\` es un discriminated union?',
        options: [
          'Que resultado no es null',
          'Que resultado tiene exactamente las propiedades del tipo con \`tipo: "exito"\`',
          'Que resultado puede ser cualquiera de los tipos',
          'Que la propiedad tipo es string',
        ],
        correctAnswer: 'Que resultado tiene exactamente las propiedades del tipo con \`tipo: "exito"\`',
        correctFeedback:
          'Correcto. Después del check, TypeScript reduce el tipo al específico con \`tipo: "exito"\`, garantizando acceso a sus propiedades particulares.',
        incorrectFeedback:
          'No es correcto. Después de verificar \`resultado.tipo === "exito"\`, TypeScript sabe exactamente cuál es el tipo — el que tiene \`tipo: "exito"\` — y permite acceder a sus propiedades específicas sin más verificaciones.',
      },
      {
        question: '¿Por qué es mejor \`{ estado: "exitoso"; datos: T } | { estado: "error"; mensaje: string }\` que \`{ estado: string; datos?: T; mensaje?: string }\`?',
        options: [
          'El primero tiene menos propiedades',
          'El primero garantiza que datos existe cuando estado es "exitoso", el segundo no',
          'El segundo es más flexible pero igual de seguro',
          'No hay diferencia real',
        ],
        correctAnswer: 'El primero garantiza que datos existe cuando estado es "exitoso", el segundo no',
        correctFeedback:
          'Correcto. Con el discriminated union, TypeScript garantiza que si el estado es "exitoso", \`datos\` existe. Con propiedades opcionales, siempre deberías verificar \`datos !== undefined\` aunque el estado sea "exitoso".',
        incorrectFeedback:
          'No es correcto. La diferencia clave es la garantía de TypeScript: con el discriminated union, cuando el estado es "exitoso", TypeScript sabe que \`datos\` existe — no es opcional en ese contexto. Con propiedades opcionales, \`datos?\` siempre puede ser \`undefined\` independientemente del estado.',
      },
      {
        question: '¿Cuáles son buenos nombres para la propiedad discriminante?',
        options: [
          'Solo "type" en inglés',
          'type, kind, tag, tipo, status, variant',
          'Solo "id" o "nombre"',
          'Cualquier propiedad booleana',
        ],
        correctAnswer: 'type, kind, tag, tipo, status, variant',
        correctFeedback:
          'Correcto. Lo importante es que el discriminante tenga valores literales únicos por variante. Los nombres comunes son \`type\`, \`kind\`, \`tag\`, \`tipo\`, \`status\`, \`variante\`.',
        incorrectFeedback:
          'No es correcto. El discriminante puede tener cualquier nombre, pero convencionalmente se usan \`type\`, \`kind\`, \`tag\`, \`tipo\` o \`status\`. Lo importante es que sea una propiedad con valores literales únicos en cada variante.',
      },
      {
        question: '¿Por qué el \`switch\` es especialmente bueno con discriminated unions?',
        options: [
          'Porque es más rápido que los if/else',
          'Porque TypeScript puede verificar que se cubran todos los casos de la unión',
          'Porque el switch siempre necesita un default',
          'Solo los switch pueden usarse con discriminated unions',
        ],
        correctAnswer: 'Porque TypeScript puede verificar que se cubran todos los casos de la unión',
        correctFeedback:
          'Correcto. TypeScript puede advertir si olvidaste un caso del discriminated union, lo que hace el switch con discriminated unions una combinación muy poderosa.',
        incorrectFeedback:
          'No es correcto. El switch es elegante con discriminated unions principalmente porque TypeScript puede verificar la exhaustividad: si agregas una nueva variante y olvidas el caso en el switch, TypeScript puede advertirte. No es necesariamente más rápido ni es la única opción.',
      },
    ],
  },

  // ── Lección 78 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-union-types',
    title: 'Errores comunes con union types',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 8,
    description:
      'Aprende a evitar errores al usar valores que pueden tener diferentes tipos.',
    explanation: `Los union types son poderosos pero hay errores comunes que se cometen al usarlos. Conocerlos te ayudará a escribir código más seguro.

**Error 1: Usar métodos sin narrowing**

\`\`\`ts
function procesar(valor: string | number): string {
  return valor.toUpperCase()  // Error: toUpperCase no existe en number
}

// ✓ Correcto
function procesar(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase()
  }
  return String(valor)
}
\`\`\`

**Error 2: Asumir un tipo específico sin verificar**

\`\`\`ts
function mostrar(id: string | number): void {
  console.log(id.length)  // Error: length no existe en number
}
\`\`\`

**Error 3: Confundir unión con cualquier valor**

Un union type no acepta cualquier valor — solo los de la unión:

\`\`\`ts
type Estado = "activo" | "inactivo"
const e: Estado = "pendiente"  // Error: no está en la unión
\`\`\`

**Error 4: Olvidar que \`null\` y \`undefined\` no son parte de la unión**

\`\`\`ts
type NombreONulo = string | null

function mostrar(nombre: NombreONulo): void {
  console.log(nombre.toUpperCase())  // Error: nombre puede ser null
}

// ✓ Correcto
function mostrar(nombre: NombreONulo): void {
  if (nombre !== null) {
    console.log(nombre.toUpperCase())  // Seguro aquí
  }
}
\`\`\`

**Error 5: Narrowing incompleto**

\`\`\`ts
type Forma = { tipo: "circulo"; radio: number } | { tipo: "cuadrado"; lado: number }

function area(f: Forma): number {
  if (f.tipo === "circulo") {
    return Math.PI * f.radio ** 2
  }
  // TypeScript sabe que aquí f es Cuadrado
  return f.lado ** 2
}
\`\`\`

**Error 6: Narrowing con == en lugar de ===**

Usa siempre \`===\` (igualdad estricta) para narrowing, no \`==\`:

\`\`\`ts
if (valor == null) { }    // Captura undefined Y null (a veces útil)
if (valor === null) { }   // Solo null — más preciso para narrowing
\`\`\``,
    codeExample: `// ── archivo: errores-union.ts ────────────────────────────────────────────

// ── Error 1: Usar métodos sin narrowing ──────────────────────────────────
// ❌
// function doblar(val: string | number): string | number {
//   return val.toFixed(2)  // Error: toFixed no existe en string
// }

// ✓
function doblar(val: string | number): string {
  if (typeof val === "number") {
    return val.toFixed(2)
  }
  return val + val  // Concatenación de strings
}

console.log(doblar(3.14159))  // → 3.14
console.log(doblar("abc"))    // → abcabc

// ── Error 2: Asumir el tipo sin verificar ────────────────────────────────
function mostrarLongitud(val: string | number): void {
  // ❌ val.length podría ser acceso a string.length pero si es number...
  if (typeof val === "string") {
    console.log("Longitud:", val.length)  // ✓ seguro
  } else {
    console.log("Dígitos:", String(val).length)  // ✓ convertir primero
  }
}

mostrarLongitud("hola")  // → Longitud: 4
mostrarLongitud(42)      // → Dígitos: 2

// ── Error 3: null no está en string sin declararlo ────────────────────────
type Nombre = string | null

function formatearNombre(nombre: Nombre): string {
  if (nombre === null) {
    return "Invitado"
  }
  return nombre.toUpperCase()  // ✓ seguro — TypeScript sabe que no es null aquí
}

console.log(formatearNombre("ana"))  // → ANA
console.log(formatearNombre(null))   // → Invitado

// ── Error 4: Narrowing incompleto en discriminated union ─────────────────
type Notificacion =
  | { tipo: "info"; mensaje: string }
  | { tipo: "error"; mensaje: string; codigo: number }
  | { tipo: "exito"; mensaje: string; duracion: number }

function mostrarNotificacion(n: Notificacion): void {
  // Si olvidas un caso, TypeScript puede advertirte
  switch (n.tipo) {
    case "info":
      console.log(\`ℹ️ \${n.mensaje}\`)
      break
    case "error":
      console.log(\`❌ [\${n.codigo}] \${n.mensaje}\`)
      break
    case "exito":
      console.log(\`✅ \${n.mensaje} (visible \${n.duracion}s)\`)
      break
  }
}

mostrarNotificacion({ tipo: "info", mensaje: "Nuevo mensaje" })
mostrarNotificacion({ tipo: "error", mensaje: "Fallo conexión", codigo: 503 })
mostrarNotificacion({ tipo: "exito", mensaje: "Guardado", duracion: 3 })`,
    keyPoints: [
      'Nunca uses métodos específicos de un tipo sin hacer narrowing primero.',
      '`typeof`, comprobaciones `=== null`, y propiedades discriminantes son las técnicas de narrowing.',
      'Un union type solo acepta los valores declarados — no es `any`.',
      '`null` y `undefined` deben declararse explícitamente en la unión si son posibles.',
      'El narrowing debe cubrir todos los casos de la unión para acceder a propiedades específicas.',
      'Usa `===` para narrowing, no `==`, para mayor precisión.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los errores en este código:\n\n```ts\ntype Input = string | number | null\n\nfunction procesar(val: Input): string {\n  return val.toUpperCase()\n}\n\ntype Estado = "activo" | "inactivo"\nconst est: Estado = "pendiente"\n\nfunction duplicar(val: string | number) {\n  return val * 2\n}\n```\n\nHay 3 errores: (1) usar `.toUpperCase()` sin narrowing, (2) valor fuera de la unión, (3) usar `*` en un posible string.',
      hint: 'Para `procesar`, verifica con `if (val === null) return "null"; if (typeof val === "string") return val.toUpperCase(); return String(val)`. Para `est`, cámbialo a "activo" o "inactivo". Para `duplicar`, verifica con `if (typeof val === "number")`.',
    },
    quiz: [
      {
        question: '¿Qué error ocurre al usar `.toUpperCase()` en un valor de tipo `string | number`?',
        options: [
          'Ningún error, TypeScript lo maneja automáticamente',
          'Error: toUpperCase no existe en el tipo number',
          'Error: no puedes llamar métodos en union types',
          'Warning: resultado puede ser undefined',
        ],
        correctAnswer: 'Error: toUpperCase no existe en el tipo number',
        correctFeedback:
          'Correcto. TypeScript sabe que el valor podría ser `number`, y `.toUpperCase()` no existe en `number`. Debes hacer narrowing primero.',
        incorrectFeedback:
          'No es correcto. TypeScript reporta un error porque si el valor es `number`, `.toUpperCase()` no existe. TypeScript te obliga a hacer narrowing para acceder a métodos específicos de un tipo.',
      },
      {
        question: '¿Cómo verificas que un valor es `string` en un union `string | number`?',
        options: [
          'valor instanceof String',
          'typeof valor === "string"',
          'valor.constructor === String',
          'isString(valor)',
        ],
        correctAnswer: 'typeof valor === "string"',
        correctFeedback:
          'Correcto. `typeof valor === "string"` es la forma estándar de hacer narrowing para primitivos en TypeScript.',
        incorrectFeedback:
          'No es correcto. La forma estándar para primitivos es `typeof valor === "string"`. `instanceof` es para clases, no para primitivos. `isString` no existe en TypeScript sin definirla.',
      },
      {
        question: '¿Qué debes hacer si una función puede recibir `null` además de `string`?',
        options: [
          'No declarar el tipo y dejar que sea any',
          'Declarar el tipo como `string | null` y verificar null antes de usar métodos de string',
          'Usar `?` en el parámetro',
          'Usar `!` para asegurar que no sea null',
        ],
        correctAnswer: 'Declarar el tipo como `string | null` y verificar null antes de usar métodos de string',
        correctFeedback:
          'Correcto. `string | null` declara explícitamente que puede ser null, y TypeScript te obliga a verificar antes de usar métodos de string.',
        incorrectFeedback:
          'No es correcto. Debes declarar explícitamente `string | null` como tipo y verificar `if (valor !== null)` antes de usar métodos de string. El `?` en parámetros es para parámetros opcionales (undefined), no null. El `!` es peligroso porque le dice a TypeScript que confíes en que no es null.',
      },
      {
        question: '¿Qué pasa si asignas un valor no listado en un union type?',
        options: [
          'TypeScript lo convierte al tipo más cercano',
          'TypeScript reporta un error: el valor no está en la unión',
          'El valor queda como undefined',
          'TypeScript amplía la unión automáticamente',
        ],
        correctAnswer: 'TypeScript reporta un error: el valor no está en la unión',
        correctFeedback:
          'Correcto. Un union type solo acepta exactamente los valores declarados. Cualquier otro valor es un error.',
        incorrectFeedback:
          'No es correcto. TypeScript reporta un error cuando asignas un valor que no está en la unión. No hace conversiones automáticas ni amplía el tipo. `type Estado = "activo" | "inactivo"` solo acepta exactamente esos dos strings.',
      },
      {
        question: '¿Por qué es mejor `===` que `==` para narrowing?',
        options: [
          '`===` es más rápido en ejecución',
          '`===` es más preciso — no hace conversión de tipos implícita',
          'TypeScript solo reconoce `===` para narrowing',
          'No hay diferencia entre `==` y `===` para narrowing',
        ],
        correctAnswer: '`===` es más preciso — no hace conversión de tipos implícita',
        correctFeedback:
          'Correcto. `valor == null` captura tanto `null` como `undefined` (por coerción de tipo). `valor === null` captura solo `null`. Para narrowing preciso, usa `===`.',
        incorrectFeedback:
          'No es correcto. La diferencia importante es que `==` hace coerción de tipo implícita (`null == undefined` es `true`), mientras que `===` es estricto. Para un narrowing preciso, especialmente cuando distingues entre `null` y `undefined`, es importante usar `===`.',
      },
    ],
  },

  // ── Lección 79 ───────────────────────────────────────────────────────────
  {
    slug: 'mini-practica-estados-app',
    title: 'Mini práctica: estados de una app',
    module: 'Union types y literal types',
    moduleNumber: 10,
    order: 9,
    description:
      'Crea una estructura tipada para representar estados de carga, éxito y error en una aplicación.',
    explanation: `En esta lección práctica vas a construir un sistema completo de estados usando todo lo que aprendiste en este módulo y en el nivel 2.

**El patrón de estado de solicitud**

En aplicaciones reales, cuando haces una solicitud (a una API, base de datos, etc.), tienes estos estados:

1. **idle**: no has iniciado nada aún
2. **cargando**: la solicitud está en progreso
3. **exitoso**: la solicitud terminó con datos
4. **error**: algo falló

**La solución con discriminated unions**

\`\`\`ts
type EstadoSolicitud<T> =
  | { estado: "idle" }
  | { estado: "cargando" }
  | { estado: "exitoso"; datos: T }
  | { estado: "error"; mensaje: string; codigo?: number }
\`\`\`

Esta es mucho más precisa que:
\`\`\`ts
// ❌ Demasiado permisivo — datos y error pueden coexistir en cualquier estado
interface Estado {
  cargando: boolean
  datos?: string[]
  error?: string
}
\`\`\`

**La clave de este patrón**

Cuando el estado es \`"exitoso"\`, TypeScript **garantiza** que \`datos\` existe. Cuando es \`"error"\`, garantiza que \`mensaje\` existe. Cuando es \`"idle"\` o \`"cargando"\`, no hay datos ni errores.

Esta precisión es uno de los superpoderes de TypeScript.

**Aplicar lo aprendido**

En esta práctica combinarás:
- Type aliases e interfaces (Módulo 8 y 9)
- Union types y literal types (Módulo 10)
- Funciones tipadas (Módulo 6)
- Objetos tipados (Módulo 7)`,
    codeExample: `// ── archivo: estados-app.ts ──────────────────────────────────────────────

// Tipos base para el sistema de cursos
interface CursoResumen {
  id: number
  titulo: string
  instructor: string
  totalLecciones: number
  nivel: "principiante" | "intermedio" | "avanzado"
}

// Discriminated union para estado de carga de cursos
type EstadoCursos =
  | { estado: "idle" }
  | { estado: "cargando" }
  | { estado: "exitoso"; cursos: CursoResumen[]; total: number }
  | { estado: "error"; mensaje: string; codigo: number }

// Renderizador de estado — modela lo que haría un componente de UI
function renderizarEstado(estadoActual: EstadoCursos): void {
  switch (estadoActual.estado) {
    case "idle":
      console.log("📋 Esperando para cargar cursos...")
      break

    case "cargando":
      console.log("⏳ Cargando cursos disponibles...")
      break

    case "exitoso":
      // TypeScript garantiza que cursos y total existen aquí
      console.log(\`✅ \${estadoActual.total} cursos disponibles:\`)
      estadoActual.cursos.forEach((c) => {
        console.log(\`  [\${c.nivel}] \${c.titulo} — \${c.instructor} (\${c.totalLecciones} lecciones)\`)
      })
      break

    case "error":
      // TypeScript garantiza que mensaje y codigo existen aquí
      console.log(\`❌ Error \${estadoActual.codigo}: \${estadoActual.mensaje}\`)
      console.log("Por favor intenta de nuevo más tarde.")
      break
  }
}

// Función que simula la carga de datos
function simularCargaCursos(debefallar: boolean): EstadoCursos {
  if (debefallar) {
    return {
      estado: "error",
      mensaje: "No se pudo conectar al servidor",
      codigo: 503,
    }
  }

  return {
    estado: "exitoso",
    total: 3,
    cursos: [
      { id: 1, titulo: "TypeScript desde Cero", instructor: "Ronaldo", totalLecciones: 79, nivel: "principiante" },
      { id: 2, titulo: "React con TypeScript", instructor: "Ronaldo", totalLecciones: 45, nivel: "intermedio" },
      { id: 3, titulo: "Node.js Avanzado", instructor: "Ronaldo", totalLecciones: 60, nivel: "avanzado" },
    ],
  }
}

// Simulación del ciclo de vida de una solicitud
let estadoActual: EstadoCursos = { estado: "idle" }
renderizarEstado(estadoActual)   // → 📋 Esperando para cargar cursos...

estadoActual = { estado: "cargando" }
renderizarEstado(estadoActual)   // → ⏳ Cargando cursos disponibles...

estadoActual = simularCargaCursos(false)
renderizarEstado(estadoActual)   // → ✅ 3 cursos disponibles: ...

estadoActual = simularCargaCursos(true)
renderizarEstado(estadoActual)   // → ❌ Error 503: ...`,
    keyPoints: [
      'El patrón "estado discriminado" es fundamental en aplicaciones modernas: idle, cargando, exitoso, error.',
      'Un discriminated union garantiza que los datos solo existen cuando el estado es el correcto.',
      'Es mucho más preciso que usar propiedades opcionales que pueden coexistir incorrectamente.',
      'El `switch` sobre el discriminante cubre todos los estados y permite acceso seguro a los datos.',
      'Este patrón combina todo lo aprendido: interfaces, type aliases, union types y literal types.',
      'En aplicaciones reales, este patrón se usa para manejar solicitudes HTTP, cargas de datos y operaciones asíncronas.',
    ],
    exercise: {
      description:
        'Implementa un sistema similar para un carrito de compras. Define los tipos necesarios para los productos y crea un discriminated union `EstadoCarrito` con las variantes: "vacio", "con-productos" (con `productos: ProductoCarrito[]` y `total: number`), "procesando-pago" (con `productos` y `total`) y "completado" (con `numeroPedido: string` y `fecha: string`). Escribe una función `renderizarCarrito` que maneje cada estado. Simula el ciclo completo de compra.',
      hint: 'El tipo `ProductoCarrito` puede ser `{ id: number; nombre: string; precio: number; cantidad: number }`. El total se calcula con `reduce`. Para el número de pedido usa algo como `"PED-" + Date.now()`.',
    },
    quiz: [
      {
        question: '¿Por qué el patrón de estados con discriminated union es superior a una interface con propiedades opcionales?',
        options: [
          'Es más corto de escribir',
          'Garantiza que los datos correctos están disponibles según el estado actual',
          'Solo funciona con TypeScript 5+',
          'Genera mejor código JavaScript',
        ],
        correctAnswer: 'Garantiza que los datos correctos están disponibles según el estado actual',
        correctFeedback:
          'Correcto. Con discriminated union, cuando el estado es "exitoso", TypeScript garantiza que `datos` existe. Con propiedades opcionales, no hay esa garantía.',
        incorrectFeedback:
          'No es correcto. La superioridad del discriminated union es la garantía de TypeScript: cuando el estado es "exitoso", `datos` definitivamente existe. Con propiedades opcionales, `datos` puede ser `undefined` incluso en estado "exitoso", y TypeScript no puede verificarlo.',
      },
      {
        question: '¿Cuáles son los cuatro estados típicos de una solicitud de red?',
        options: [
          'true, false, null, undefined',
          'idle, cargando, exitoso, error',
          'pendiente, procesando, listo, cancelado',
          'nuevo, activo, pausado, terminado',
        ],
        correctAnswer: 'idle, cargando, exitoso, error',
        correctFeedback:
          'Correcto. Este es el patrón estándar: idle (sin solicitud), cargando (en progreso), exitoso (con datos) y error (falló).',
        incorrectFeedback:
          'No es correcto. El patrón estándar para estados de solicitud de red es: idle (sin solicitud iniciada), cargando (en progreso), exitoso (completado con datos) y error (falló con mensaje). Este patrón es ampliamente usado en desarrollo web.',
      },
      {
        question: '¿Qué garantiza TypeScript cuando el estado es "exitoso" en `{ estado: "exitoso"; datos: string[] } | { estado: "error"; mensaje: string }`?',
        options: [
          'Que datos puede ser undefined',
          'Que datos existe y es string[]',
          'Que mensaje también está disponible',
          'Que el estado fue establecido por una función válida',
        ],
        correctAnswer: 'Que datos existe y es string[]',
        correctFeedback:
          'Correcto. TypeScript sabe que en el tipo con `estado: "exitoso"`, la propiedad `datos` es requerida y es `string[]`. No puede ser `undefined` en ese contexto.',
        incorrectFeedback:
          'No es correcto. Cuando haces narrowing al estado "exitoso", TypeScript sabe exactamente cuál tipo de la unión tiene esa variante, y en ese tipo `datos` es una propiedad requerida de tipo `string[]`. No puede ser `undefined`.',
      },
      {
        question: '¿Dónde se usa este patrón de estados en el desarrollo web real?',
        options: [
          'Solo en testing',
          'En solicitudes HTTP, carga de datos, operaciones asíncronas y formularios',
          'Solo en aplicaciones móviles',
          'Solo con React',
        ],
        correctAnswer: 'En solicitudes HTTP, carga de datos, operaciones asíncronas y formularios',
        correctFeedback:
          'Correcto. Este patrón es omnipresente en desarrollo web: fetch de datos, operaciones de base de datos, envío de formularios, cargas de archivos, etc.',
        incorrectFeedback:
          'No es correcto. El patrón de estados es omnipresente en desarrollo web: se usa en solicitudes HTTP, carga de datos de APIs, operaciones asíncronas, envío de formularios, procesamiento de pagos, cargas de archivos — básicamente cualquier operación que puede tener éxito o fallar.',
      },
      {
        question: '¿Qué combina esta mini práctica del nivel 2?',
        options: [
          'Solo union types y literal types',
          'Interfaces, type aliases, union types, literal types, funciones tipadas y objetos tipados',
          'Solo los conceptos del módulo 10',
          'Conceptos de JavaScript sin TypeScript',
        ],
        correctAnswer: 'Interfaces, type aliases, union types, literal types, funciones tipadas y objetos tipados',
        correctFeedback:
          'Correcto. Esta práctica es la culminación del Nivel 2: usa interfaces para los datos, type aliases para los estados, union types y literal types para el discriminated union, y funciones tipadas para procesar los estados.',
        incorrectFeedback:
          'No es correcto. La mini práctica combina todo el Nivel 2: interfaces (módulo 9), type aliases (módulo 8), union types y literal types (módulo 10), funciones tipadas (módulo 6) y objetos tipados (módulo 7). Es la integración de todos los conceptos aprendidos.',
      },
    ],
  },
]

export const tsModule10: Module = {
  number: 10,
  title: 'Union types y literal types',
  level: 'nivel2',
  lessons: lessonsTsModule10,
}
