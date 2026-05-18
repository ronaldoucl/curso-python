import type { Lesson, Module } from '@/types'

export const lessonsTsModule7: Lesson[] = [
  // ── Lección 47 ───────────────────────────────────────────────────────────
  {
    slug: 'tipar-objetos-simples',
    title: 'Tipar objetos simples',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 1,
    description:
      'Aprende a definir la forma de un objeto indicando los tipos de sus propiedades.',
    explanation: `En TypeScript, puedes definir exactamente qué propiedades debe tener un objeto y de qué tipo debe ser cada una. Esto se llama **tipar un objeto**.

**¿Por qué es importante?**

En JavaScript, un objeto puede tener cualquier forma:

\`\`\`js
const usuario = { nombre: "Ana", edad: 25 }
usuario.correo = "ana@mail.com"  // Puedes agregar propiedades en cualquier momento
usuario.nombre = 42              // Puedes cambiar el tipo sin aviso
\`\`\`

En TypeScript, defines la "forma" del objeto desde el principio:

\`\`\`ts
const usuario: { nombre: string; edad: number } = {
  nombre: "Ana",
  edad: 25
}

// usuario.nombre = 42  // Error: number no es string
// usuario.correo = "ana@mail.com"  // Error: correo no existe en el tipo
\`\`\`

**Sintaxis de un tipo objeto inline**

\`\`\`ts
const variable: {
  propiedad1: tipo1
  propiedad2: tipo2
} = {
  propiedad1: valor1,
  propiedad2: valor2,
}
\`\`\`

**Una analogía útil**

Piensa en el tipo de un objeto como el formulario en blanco que debes llenar. Si el formulario tiene campos para "nombre" (texto) y "edad" (número), no puedes poner un número en el campo de nombre ni dejar un campo vacío sin indicarlo como opcional.

**Tipar objetos en funciones**

También puedes usar tipos objeto como tipos de parámetros y retorno:

\`\`\`ts
function mostrarUsuario(usuario: { nombre: string; edad: number }): void {
  console.log(\`\${usuario.nombre}, \${usuario.edad} años\`)
}
\`\`\`

**Acceso a propiedades**

Dentro de la función, TypeScript sabe exactamente qué propiedades tiene el objeto y de qué tipo son, así que puedes usarlas con autocompletado y seguridad.`,
    codeExample: `// ── archivo: user.ts ─────────────────────────────────────────────────────

// Objeto tipado directamente
const estudiante: { nombre: string; nota: number; activo: boolean } = {
  nombre: "Ana",
  nota: 8.5,
  activo: true,
}

console.log(estudiante.nombre)  // → Ana
console.log(estudiante.nota)    // → 8.5

// Error que TypeScript detecta:
// estudiante.nombre = 42       // Error: number no es string
// estudiante.ciudad = "CDMX"   // Error: propiedad no existe en el tipo

// Objeto tipado en múltiples líneas (más legible)
const producto: {
  id: number
  nombre: string
  precio: number
  disponible: boolean
} = {
  id: 1,
  nombre: "Teclado mecánico",
  precio: 850,
  disponible: true,
}

console.log(\`\${producto.nombre}: $\${producto.precio}\`)
// → Teclado mecánico: $850

// Función que recibe un objeto tipado
function mostrarEstudiante(est: { nombre: string; nota: number }): void {
  const estado = est.nota >= 6 ? "Aprobado" : "Reprobado"
  console.log(\`\${est.nombre}: \${est.nota} → \${estado}\`)
}

mostrarEstudiante({ nombre: "Carlos", nota: 7.0 })  // → Carlos: 7 → Aprobado
mostrarEstudiante({ nombre: "Sofía", nota: 4.5 })   // → Sofía: 4.5 → Reprobado

// Función que retorna un objeto tipado
function crearProducto(id: number, nombre: string, precio: number): {
  id: number
  nombre: string
  precio: number
} {
  return { id, nombre, precio }
}

const nuevoProducto = crearProducto(2, "Mouse inalámbrico", 350)
console.log(nuevoProducto)
// → { id: 2, nombre: "Mouse inalámbrico", precio: 350 }`,
    keyPoints: [
      'La sintaxis inline para tipar objetos es: `{ propiedad: tipo; otraPropiedad: tipo }`.',
      'TypeScript verifica que el objeto tenga exactamente las propiedades del tipo: ni más, ni menos.',
      'Puedes usar tipos objeto como parámetros y retornos de funciones.',
      'Dentro de la función, TypeScript conoce las propiedades del objeto y sus tipos.',
      'Si intentas acceder a una propiedad que no está en el tipo, TypeScript muestra un error.',
      'Si intentas asignar un tipo incorrecto a una propiedad, TypeScript también lo detecta.',
    ],
    exercise: {
      description:
        'Define un objeto `tarea` con las propiedades `titulo` (string), `completada` (boolean) y `prioridad` (number del 1 al 3). Luego escribe una función `mostrarTarea` que reciba ese tipo de objeto e imprima un resumen: "[prioridad] titulo — Completada/Pendiente". Prueba la función con dos tareas diferentes.',
      hint: 'El tipo del parámetro es `{ titulo: string; completada: boolean; prioridad: number }`. Para el estado usa `tarea.completada ? "Completada" : "Pendiente"`.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de tipar un objeto en TypeScript?',
        options: [
          'const user: Object(nombre: string, edad: number)',
          'const user: { nombre: string; edad: number }',
          'const user = { nombre: String, edad: Number }',
          'const user: [nombre: string, edad: number]',
        ],
        correctAnswer: 'const user: { nombre: string; edad: number }',
        correctFeedback:
          'Correcto. Los tipos de objetos usan llaves `{}` con propiedades separadas por punto y coma.',
        incorrectFeedback:
          'No es correcto. Los tipos de objetos en TypeScript se escriben con llaves: `{ propiedad: tipo; otraPropiedad: tipo }`. No se usan paréntesis ni corchetes para esta sintaxis.',
      },
      {
        question: '¿Qué error mostraría TypeScript si intentas hacer esto?\n\nconst p: { nombre: string; precio: number } = { nombre: "Teclado" }',
        options: [
          'Ningún error, las propiedades faltantes son undefined automáticamente',
          'Error: la propiedad `precio` falta en el objeto asignado',
          'Error: el tipo del objeto es incorrecto',
          'Error: no se puede omitir el precio en un objeto',
        ],
        correctAnswer: 'Error: la propiedad `precio` falta en el objeto asignado',
        correctFeedback:
          'Correcto. Si el tipo declara `precio: number` como propiedad requerida, el objeto debe incluirla. TypeScript reporta que falta.',
        incorrectFeedback:
          'No es correcto. En TypeScript, si una propiedad está en el tipo pero no en el objeto asignado, TypeScript reporta un error de que falta esa propiedad. A diferencia de JavaScript, no asume `undefined` automáticamente para propiedades requeridas.',
      },
      {
        question: '¿Qué detecta TypeScript en este código?\n\nconst p: { nombre: string } = { nombre: "Teclado", precio: 350 }',
        options: [
          'Nada, propiedades extra están permitidas',
          'Error: el objeto tiene más propiedades de las que declara el tipo',
          'Error: el tipo debería incluir precio',
          'Warning: precio no está tipado',
        ],
        correctAnswer: 'Error: el objeto tiene más propiedades de las que declara el tipo',
        correctFeedback:
          'Correcto. TypeScript verifica que el objeto literal no tenga propiedades extra cuando se asigna directamente a un tipo. Esta verificación se llama "excess property checking".',
        incorrectFeedback:
          'No es correcto. Cuando asignas un objeto literal directamente a una variable tipada, TypeScript verifica que no tenga propiedades extra que no estén en el tipo. Esto se llama "excess property checking" y previene errores comunes.',
      },
      {
        question: '¿Cuál es la ventaja de tipar el parámetro de una función como objeto?',
        options: [
          'Hace la función más rápida',
          'TypeScript puede verificar las propiedades usadas y sus tipos dentro de la función',
          'Permite que el objeto tenga cualquier estructura',
          'Elimina la necesidad de verificar valores nulos',
        ],
        correctAnswer: 'TypeScript puede verificar las propiedades usadas y sus tipos dentro de la función',
        correctFeedback:
          'Correcto. Con el tipo definido, TypeScript sabe que propiedades existen y de qué tipo son, lo que permite autocompletado y detección de errores.',
        incorrectFeedback:
          'No es correcto. La ventaja principal es que TypeScript conoce la estructura del objeto: sabe qué propiedades existen, de qué tipo son, y puede detectar errores como acceder a una propiedad que no existe o usar un tipo incorrecto.',
      },
      {
        question: '¿Qué tipo tiene `estudiante.nota` en este código?\n\nfunction ver(estudiante: { nombre: string; nota: number }): void { }',
        options: [
          'any',
          'number',
          'string | number',
          'unknown',
        ],
        correctAnswer: 'number',
        correctFeedback:
          'Correcto. TypeScript sabe que `nota` es `number` porque está declarada como `nota: number` en el tipo del parámetro.',
        incorrectFeedback:
          'No es correcto. Como el parámetro está tipado como `{ nombre: string; nota: number }`, TypeScript sabe que `nota` es de tipo `number`. Puedes acceder a métodos y propiedades de `number` sin ningún error.',
      },
    ],
  },

  // ── Lección 48 ───────────────────────────────────────────────────────────
  {
    slug: 'propiedades-requeridas',
    title: 'Propiedades requeridas',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 2,
    description:
      'Aprende cómo TypeScript exige propiedades obligatorias en objetos tipados.',
    explanation: `Por defecto, todas las propiedades en un tipo objeto de TypeScript son **requeridas**. Esto significa que cuando creas un objeto con ese tipo, debes incluir todas las propiedades.

**Verificación en asignación**

\`\`\`ts
const usuario: { nombre: string; edad: number } = {
  nombre: "Ana",
  // Error: falta la propiedad 'edad'
}
\`\`\`

**Verificación en funciones**

TypeScript también verifica cuando pasas un objeto a una función:

\`\`\`ts
function mostrar(usuario: { nombre: string; correo: string }): void {
  console.log(usuario.nombre, usuario.correo)
}

mostrar({ nombre: "Ana" })
// Error: falta la propiedad 'correo'
\`\`\`

**¿Qué hace TypeScript exactamente?**

Cuando asignas un objeto literal directamente, TypeScript:
1. Verifica que todas las propiedades requeridas estén presentes.
2. Verifica que cada propiedad tenga el tipo correcto.
3. Verifica que no haya propiedades extra (en asignaciones directas).

**¿Y si tienes propiedades que no siempre existen?**

Para eso existen las propiedades opcionales, que verás en la siguiente lección. Pero el principio general es: **si una propiedad está en el tipo sin \`?\`, es obligatoria**.

**Un caso real: modelar datos de API**

Cuando recibes datos de una API, a veces quieres asegurarte de que la respuesta incluya ciertos campos:

\`\`\`ts
function procesarRespuesta(datos: { id: number; titulo: string; activo: boolean }): void {
  // TypeScript garantiza que id, titulo y activo están aquí
  console.log(datos.id, datos.titulo)
}
\`\`\`

Esto te protege de olvidar campos importantes.`,
    codeExample: `// ── archivo: product.ts ─────────────────────────────────────────────────

// Todas las propiedades son requeridas por defecto
type ProductoCompleto = {
  id: number
  nombre: string
  precio: number
  disponible: boolean
}

// ✓ Correcto: todas las propiedades presentes
const teclado: ProductoCompleto = {
  id: 1,
  nombre: "Teclado mecánico",
  precio: 850,
  disponible: true,
}

// ❌ Error: falta 'disponible'
// const mouse: ProductoCompleto = {
//   id: 2,
//   nombre: "Mouse",
//   precio: 200,
// }

// ❌ Error: tipo incorrecto en 'precio'
// const monitor: ProductoCompleto = {
//   id: 3,
//   nombre: "Monitor",
//   precio: "caro",  // string, no number
//   disponible: true,
// }

// Función con parámetro objeto — todas las propiedades son requeridas
function registrarVenta(producto: { nombre: string; precio: number; cantidad: number }): void {
  const total = producto.precio * producto.cantidad
  console.log(\`Venta: \${producto.nombre} x\${producto.cantidad} = $\${total}\`)
}

registrarVenta({ nombre: "Teclado", precio: 850, cantidad: 2 })
// → Venta: Teclado x2 = $1700

// registrarVenta({ nombre: "Mouse", precio: 200 })
// Error: falta 'cantidad'

// Función que retorna objeto completo — todas las propiedades deben estar
function crearEstudiante(nombre: string, nota: number): {
  id: number
  nombre: string
  nota: number
  aprobado: boolean
} {
  return {
    id: Math.floor(Math.random() * 1000),
    nombre,
    nota,
    aprobado: nota >= 6,
  }
}

const estudiante = crearEstudiante("Ana", 8.5)
console.log(estudiante)
// → { id: 742, nombre: "Ana", nota: 8.5, aprobado: true }`,
    keyPoints: [
      'Todas las propiedades en un tipo objeto son requeridas por defecto en TypeScript.',
      'Si falta una propiedad requerida en el objeto asignado, TypeScript muestra un error.',
      'Si una propiedad tiene el tipo incorrecto, TypeScript también lo detecta.',
      'En asignaciones directas, TypeScript verifica que no haya propiedades extra.',
      'Esta verificación aplica tanto en variables como en argumentos de funciones.',
      'Para propiedades opcionales (que pueden faltar), usa `?` — lo verás en la siguiente lección.',
    ],
    exercise: {
      description:
        'Define un tipo para un objeto `Curso` con las propiedades requeridas: `id` (number), `titulo` (string), `duracion` (number en horas) y `gratuito` (boolean). Crea dos objetos de tipo `Curso` y una función `mostrarCurso` que los reciba e imprima su información. Intenta crear un objeto con una propiedad faltante y observa el error.',
      hint: 'Usa la sintaxis inline: `function mostrarCurso(curso: { id: number; titulo: string; duracion: number; gratuito: boolean }): void`. Para ver el error, comenta una propiedad.',
    },
    quiz: [
      {
        question: '¿Qué significa que una propiedad sea "requerida" en un tipo objeto de TypeScript?',
        options: [
          'Que la propiedad debe tener un valor numérico',
          'Que el objeto debe incluir esa propiedad — no puede estar ausente',
          'Que la propiedad no puede cambiarse después',
          'Que la propiedad tiene un valor por defecto',
        ],
        correctAnswer: 'Que el objeto debe incluir esa propiedad — no puede estar ausente',
        correctFeedback:
          'Correcto. Una propiedad requerida debe estar presente en el objeto. Si falta, TypeScript reporta un error.',
        incorrectFeedback:
          'No es correcto. Una propiedad requerida simplemente debe estar presente cuando creas o pasas el objeto. No se relaciona con el tipo del valor ni con si puede cambiarse.',
      },
      {
        question: '¿Cuál de estos objetos causaría un error de TypeScript?\n\ntype Tarea = { titulo: string; prioridad: number }',
        options: [
          '{ titulo: "Estudiar", prioridad: 1 }',
          '{ titulo: "Estudiar" }',
          '{ titulo: "Estudiar", prioridad: 3 }',
          'Ninguno de los anteriores',
        ],
        correctAnswer: '{ titulo: "Estudiar" }',
        correctFeedback:
          'Correcto. El tipo `Tarea` requiere tanto `titulo` como `prioridad`. El objeto `{ titulo: "Estudiar" }` no incluye `prioridad`, lo que causa un error.',
        incorrectFeedback:
          'No es correcto. El tipo `Tarea` requiere ambas propiedades. `{ titulo: "Estudiar" }` no incluye `prioridad`, que es obligatoria, por lo que TypeScript reportaría un error de propiedad faltante.',
      },
      {
        question: '¿Qué hace TypeScript cuando asignas un objeto con una propiedad extra no declarada en el tipo?',
        options: [
          'Ignora la propiedad extra silenciosamente',
          'Reporta un error por propiedad extra en asignaciones directas',
          'Agrega la propiedad al tipo automáticamente',
          'Solo da una advertencia, no un error',
        ],
        correctAnswer: 'Reporta un error por propiedad extra en asignaciones directas',
        correctFeedback:
          'Correcto. Esto se llama "excess property checking" — TypeScript verifica propiedades extras cuando asignas un objeto literal directamente a un tipo.',
        incorrectFeedback:
          'No es correcto. Cuando asignas un objeto literal directamente a una variable tipada, TypeScript aplica "excess property checking" y reporta un error si hay propiedades que no están en el tipo.',
      },
      {
        question: '¿Para qué tipo de propiedad usarías `?` en un tipo objeto?',
        options: [
          'Propiedades de tipo boolean',
          'Propiedades que siempre deben estar presentes',
          'Propiedades que pueden o no estar presentes en el objeto',
          'Propiedades de solo lectura',
        ],
        correctAnswer: 'Propiedades que pueden o no estar presentes en el objeto',
        correctFeedback:
          'Correcto. El `?` marca una propiedad como opcional, lo que significa que puede estar ausente del objeto sin causar error.',
        incorrectFeedback:
          'No es correcto. El `?` se usa para marcar propiedades como opcionales — pueden existir o no en el objeto. Para propiedades de solo lectura se usa `readonly`. Para propiedades requeridas no se necesita ningún símbolo especial.',
      },
      {
        question: '¿Qué garantiza TypeScript cuando una función recibe un parámetro con tipo objeto?',
        options: [
          'Que el objeto no puede modificarse dentro de la función',
          'Que el objeto tiene exactamente las propiedades declaradas con sus tipos correctos',
          'Que el objeto proviene de una API válida',
          'Que el objeto no es null ni undefined',
        ],
        correctAnswer: 'Que el objeto tiene exactamente las propiedades declaradas con sus tipos correctos',
        correctFeedback:
          'Correcto. TypeScript garantiza que el objeto pasado tiene las propiedades requeridas con los tipos correctos, lo que permite usarlas de forma segura dentro de la función.',
        incorrectFeedback:
          'No es correcto. TypeScript garantiza que el objeto tiene las propiedades declaradas con los tipos correctos. No garantiza que el objeto sea inmutable ni que no sea null (para eso necesitas `strictNullChecks` y manejo explícito).',
      },
    ],
  },

  // ── Lección 49 ───────────────────────────────────────────────────────────
  {
    slug: 'propiedades-opcionales',
    title: 'Propiedades opcionales',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 3,
    description:
      'Aprende a usar ? para indicar que una propiedad puede existir o no.',
    explanation: `En TypeScript, puedes marcar una propiedad de un objeto como **opcional** con el símbolo \`?\`. Esto significa que la propiedad puede existir en el objeto o puede estar ausente.

**Sintaxis**

\`\`\`ts
type Usuario = {
  nombre: string
  correo?: string   // opcional: puede estar o no
  edad?: number     // opcional: puede estar o no
}
\`\`\`

Con esta definición, todos estos objetos son válidos:

\`\`\`ts
const u1: Usuario = { nombre: "Ana" }
const u2: Usuario = { nombre: "Ana", correo: "ana@mail.com" }
const u3: Usuario = { nombre: "Ana", correo: "ana@mail.com", edad: 25 }
\`\`\`

**Tipo real de una propiedad opcional**

Cuando una propiedad es opcional, su tipo real dentro del objeto es \`tipo | undefined\`. Por eso, antes de usar una propiedad opcional, debes verificar que exista:

\`\`\`ts
type Producto = {
  nombre: string
  descripcion?: string
}

function mostrar(p: Producto): void {
  console.log(p.nombre)
  // p.descripcion puede ser string o undefined
  if (p.descripcion) {
    console.log(p.descripcion)
  }
}
\`\`\`

**Operador de encadenamiento opcional (?.)**

TypeScript y JavaScript moderno ofrecen el operador \`?.\` para acceder a propiedades que podrían ser \`undefined\` sin lanzar un error:

\`\`\`ts
const longitud = p.descripcion?.length  // undefined si descripcion no existe
\`\`\`

**Casos de uso reales**

Las propiedades opcionales son muy comunes en:
- Formularios (no todos los campos son obligatorios)
- Respuestas de API (no todos los campos siempre vienen)
- Configuraciones (algunos valores tienen valores por defecto)
- Perfiles de usuario (campos que el usuario puede no haber llenado)`,
    codeExample: `// ── archivo: user.ts ─────────────────────────────────────────────────────

// Tipo con propiedades opcionales
type Usuario = {
  nombre: string         // requerido
  apellido: string       // requerido
  correo?: string        // opcional
  telefono?: string      // opcional
  edad?: number          // opcional
}

// Todos estos son válidos
const u1: Usuario = { nombre: "Ana", apellido: "García" }
const u2: Usuario = { nombre: "Carlos", apellido: "López", correo: "c@mail.com" }
const u3: Usuario = {
  nombre: "Sofía",
  apellido: "Martínez",
  correo: "sofia@mail.com",
  telefono: "555-1234",
  edad: 28,
}

// Función que usa propiedades opcionales
function mostrarPerfil(usuario: Usuario): void {
  console.log(\`\${usuario.nombre} \${usuario.apellido}\`)

  // Verificar antes de usar
  if (usuario.correo) {
    console.log(\`Correo: \${usuario.correo}\`)
  }
  if (usuario.edad !== undefined) {
    console.log(\`Edad: \${usuario.edad}\`)
  }
}

mostrarPerfil(u1)
// → Ana García

mostrarPerfil(u3)
// → Sofía Martínez
// → Correo: sofia@mail.com
// → Edad: 28

// Operador ?. para acceso seguro
type Producto = {
  nombre: string
  descripcion?: string
  especificaciones?: {
    peso: number
    color: string
  }
}

const teclado: Producto = {
  nombre: "Teclado RGB",
  descripcion: "Teclado mecánico con retroiluminación",
}

const mouse: Producto = { nombre: "Mouse básico" }

// Acceso seguro con ?.
console.log(teclado.descripcion?.length)  // → 35 (longitud del string)
console.log(mouse.descripcion?.length)    // → undefined (no existe)

// Operador ?? para valor por defecto
function obtenerDescripcion(p: Producto): string {
  return p.descripcion ?? "Sin descripción disponible"
}

console.log(obtenerDescripcion(teclado))  // → Teclado mecánico con retroiluminación
console.log(obtenerDescripcion(mouse))    // → Sin descripción disponible`,
    keyPoints: [
      'Las propiedades opcionales se marcan con `?`: `propiedad?: tipo`.',
      'Un objeto con propiedades opcionales puede incluirlas o no.',
      'El tipo real de una propiedad opcional es `tipo | undefined`.',
      'Siempre verifica una propiedad opcional antes de usarla.',
      'El operador `?.` permite acceder a propiedades opcionales sin lanzar error si no existen.',
      'El operador `??` permite dar un valor por defecto cuando la propiedad es `undefined`.',
    ],
    exercise: {
      description:
        'Crea un tipo `Estudiante` con `nombre` y `id` como propiedades requeridas, y `correo`, `telefono` y `promedio` como opcionales. Escribe una función `generarCredencial` que reciba un `Estudiante` y retorne un string con el formato "ID[id]: nombre — correo (si existe) — Promedio: X.XX (si existe, si no dice N/A)". Prueba con estudiantes con distintas combinaciones de datos.',
      hint: 'Usa `estudiante.correo ?? "Sin correo"` para el valor por defecto. Para el promedio usa `estudiante.promedio !== undefined ? estudiante.promedio.toFixed(2) : "N/A"`.',
    },
    quiz: [
      {
        question: '¿Cómo se declara una propiedad opcional en un tipo objeto?',
        options: [
          'propiedad: tipo | null',
          'optional propiedad: tipo',
          'propiedad?: tipo',
          'propiedad: tipo?',
        ],
        correctAnswer: 'propiedad?: tipo',
        correctFeedback:
          'Correcto. El `?` va después del nombre de la propiedad, antes de los dos puntos: `propiedad?: tipo`.',
        incorrectFeedback:
          'No es correcto. La sintaxis correcta es `propiedad?: tipo`, con el `?` después del nombre de la propiedad. No se usa `optional` como palabra clave ni se pone el `?` después del tipo.',
      },
      {
        question: '¿Qué tipo tiene `usuario.telefono` dentro de una función si `telefono?: string` está en el tipo?',
        options: [
          'string',
          'null',
          'string | undefined',
          'string | null',
        ],
        correctAnswer: 'string | undefined',
        correctFeedback:
          'Correcto. Las propiedades opcionales tienen el tipo `tipo | undefined` porque pueden no estar presentes en el objeto.',
        incorrectFeedback:
          'No es correcto. Una propiedad opcional (`telefono?: string`) tiene el tipo `string | undefined` dentro de la función, porque puede estar presente (string) o ausente (undefined).',
      },
      {
        question: '¿Cuál de estos objetos es válido para el tipo `{ nombre: string; edad?: number }`?',
        options: [
          '{ nombre: "Ana", edad: "veinte" }',
          '{ edad: 25 }',
          '{ nombre: "Ana" }',
          '{ nombre: "Ana", edad: null }',
        ],
        correctAnswer: '{ nombre: "Ana" }',
        correctFeedback:
          'Correcto. `nombre` es requerido (está presente) y `edad` es opcional (puede omitirse). Este objeto es válido.',
        incorrectFeedback:
          'No es correcto. El tipo requiere `nombre` (obligatorio) y permite `edad` (opcional). `{ nombre: "Ana" }` es el único válido: tiene el campo requerido y omite el opcional. `{ edad: 25 }` falta `nombre`; `"veinte"` no es number; `null` no es number en TypeScript estricto.',
      },
      {
        question: '¿Qué hace el operador `?.` en este código?\n\nconsole.log(usuario.correo?.length)',
        options: [
          'Accede a `length` y lanza error si `correo` es undefined',
          'Accede a `length` de forma segura — retorna undefined si `correo` es undefined',
          'Convierte `correo` a string si es undefined',
          'Verifica si `correo` tiene más de 0 caracteres',
        ],
        correctAnswer: 'Accede a `length` de forma segura — retorna undefined si `correo` es undefined',
        correctFeedback:
          'Correcto. El operador `?.` (encadenamiento opcional) retorna `undefined` en lugar de lanzar un error si la propiedad de la izquierda es `undefined`.',
        incorrectFeedback:
          'No es correcto. El operador `?.` es el "optional chaining" (encadenamiento opcional). Si `correo` es `undefined`, la expresión completa retorna `undefined` sin lanzar error. Solo si `correo` existe accede a `.length`.',
      },
      {
        question: '¿Cuál es la forma correcta de verificar y usar una propiedad opcional?',
        options: [
          'console.log(usuario.telefono.toUpperCase())',
          'if (usuario.telefono) { console.log(usuario.telefono.toUpperCase()) }',
          'console.log(usuario?.telefono)',
          'usuario.telefono || console.log(usuario.telefono)',
        ],
        correctAnswer: 'if (usuario.telefono) { console.log(usuario.telefono.toUpperCase()) }',
        correctFeedback:
          'Correcto. Verificar primero con `if` asegura que `telefono` no sea `undefined` antes de usar `.toUpperCase()`.',
        incorrectFeedback:
          'No es correcto. La forma correcta es verificar si la propiedad tiene valor antes de usarla. `if (usuario.telefono)` garantiza que no es `undefined` o `""` antes de llamar `.toUpperCase()`. Sin esta verificación, habría un error si `telefono` es `undefined`.',
      },
    ],
  },

  // ── Lección 50 ───────────────────────────────────────────────────────────
  {
    slug: 'propiedades-readonly',
    title: 'Propiedades readonly',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 4,
    description:
      'Aprende a usar readonly para evitar que ciertas propiedades sean modificadas después de crearse.',
    explanation: `En TypeScript, puedes marcar propiedades de un objeto como **readonly**. Esto significa que la propiedad puede leerse pero no puede ser modificada después de que el objeto es creado.

**Sintaxis**

\`\`\`ts
type Usuario = {
  readonly id: number   // no puede cambiar
  nombre: string        // puede cambiar
}
\`\`\`

**¿Por qué usar readonly?**

Algunas propiedades nunca deberían cambiar después de crearse:
- Un **id** de base de datos — siempre es el mismo
- Una **fecha de creación** — nunca cambia
- Un **número de orden** — fijo desde que se crea
- Una **versión** del sistema

\`\`\`ts
const usuario: { readonly id: number; nombre: string } = {
  id: 42,
  nombre: "Ana",
}

usuario.nombre = "Ana García"  // ✓ nombre puede cambiar
usuario.id = 99               // Error: id es readonly
\`\`\`

**readonly vs. const**

\`\`\`ts
// const protege la VARIABLE (no puedes reasignar la variable)
const usuario = { nombre: "Ana", id: 1 }
usuario = { nombre: "Carlos", id: 2 }  // Error: la variable es const
usuario.nombre = "Carlos"  // ✓ pero la propiedad puede cambiar

// readonly protege la PROPIEDAD (no puedes cambiar la propiedad)
const usuario2: { readonly id: number; nombre: string } = { id: 1, nombre: "Ana" }
usuario2.id = 2        // Error: id es readonly
usuario2.nombre = "B"  // ✓ nombre puede cambiar
\`\`\`

**readonly en arrays**

También puedes usar \`readonly\` con arrays para evitar que sean modificados:

\`\`\`ts
type Config = {
  readonly roles: readonly string[]
}

const config: Config = {
  roles: ["admin", "editor", "lector"],
}

// config.roles.push("nuevo")  // Error: array es readonly
// config.roles = []            // Error: roles es readonly
\`\`\`

**Nota importante**

\`readonly\` en TypeScript es una verificación **en tiempo de compilación**. A nivel de JavaScript, el objeto sigue siendo mutable. Para inmutabilidad real en JavaScript puedes usar \`Object.freeze()\`.`,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// Tipo con propiedades readonly
type Pedido = {
  readonly id: number
  readonly fechaCreacion: string
  producto: string      // puede cambiar (ej: actualizar producto)
  cantidad: number      // puede cambiar
  estado: string        // puede cambiar: "pendiente" → "enviado" → "entregado"
}

const pedido: Pedido = {
  id: 1001,
  fechaCreacion: "2024-01-15",
  producto: "Teclado mecánico",
  cantidad: 1,
  estado: "pendiente",
}

// Modificaciones permitidas
pedido.estado = "enviado"     // ✓ estado puede cambiar
pedido.cantidad = 2           // ✓ cantidad puede cambiar

// Modificaciones prohibidas
// pedido.id = 9999           // Error: id es readonly
// pedido.fechaCreacion = ""  // Error: fechaCreacion es readonly

console.log(pedido)
// → { id: 1001, fechaCreacion: "2024-01-15", ... estado: "enviado" }

// Diferencia entre const y readonly
const estudiante = {
  id: 42,
  nombre: "Ana",
}

// const: no puedes reasignar la variable
// estudiante = { id: 99, nombre: "Carlos" }  // Error: const

// Pero las propiedades SÍ pueden cambiar
estudiante.nombre = "Ana García"  // ✓ (const no protege propiedades)
console.log(estudiante.nombre)    // → Ana García

// readonly: protege la propiedad específica
type EstudianteSeguro = {
  readonly id: number
  nombre: string
}

const est: EstudianteSeguro = { id: 42, nombre: "Ana" }
est.nombre = "Ana García"  // ✓
// est.id = 99             // Error: id es readonly

// Función con parámetro readonly (solo lectura)
function mostrarId(usuario: { readonly id: number; nombre: string }): void {
  console.log(\`ID: \${usuario.id}, Nombre: \${usuario.nombre}\`)
  // usuario.id = 0  // Error: readonly dentro de la función
}

mostrarId({ id: 1, nombre: "Carlos" })`,
    keyPoints: [
      '`readonly` en una propiedad evita que sea reasignada después de crear el objeto.',
      'La sintaxis es: `readonly propiedad: tipo`.',
      '`const` protege la variable de ser reasignada; `readonly` protege la propiedad del objeto.',
      'Las propiedades `readonly` aún pueden ser leídas, solo no pueden ser escritas.',
      'Usa `readonly` para propiedades que no deben cambiar: ids, fechas de creación, versiones.',
      '`readonly` es una verificación en tiempo de compilación; a nivel JavaScript el objeto sigue siendo mutable.',
    ],
    exercise: {
      description:
        'Crea un tipo `Factura` con las propiedades `id` (readonly number), `fecha` (readonly string), `cliente` (string) y `total` (number). Crea una factura y prueba que puedes cambiar `cliente` y `total`, pero no `id` ni `fecha`. Luego escribe una función `aplicarDescuento` que reciba una `Factura` y un `descuento` (number) y retorne el total con descuento (sin modificar la factura original).',
      hint: 'Para `aplicarDescuento`, no necesitas modificar el objeto, solo calcular y retornar el valor: `return factura.total * (1 - descuento/100)`.',
    },
    quiz: [
      {
        question: '¿Qué hace `readonly` en una propiedad de un tipo objeto?',
        options: [
          'Hace que la propiedad solo acepte valores primitivos',
          'Evita que la propiedad sea modificada después de crear el objeto',
          'Hace que la propiedad sea invisible fuera del objeto',
          'Convierte la propiedad en una constante global',
        ],
        correctAnswer: 'Evita que la propiedad sea modificada después de crear el objeto',
        correctFeedback:
          'Correcto. `readonly` es una restricción de escritura: la propiedad puede leerse pero no puede ser reasignada después de crearse el objeto.',
        incorrectFeedback:
          'No es correcto. `readonly` simplemente evita que la propiedad sea reasignada después de que el objeto es creado. La propiedad puede leerse normalmente, pero no puede escribirse.',
      },
      {
        question: '¿Cuál es la diferencia entre `const` y `readonly`?',
        options: [
          'No hay diferencia, ambos hacen lo mismo',
          '`const` protege la variable completa; `readonly` protege propiedades específicas del objeto',
          '`const` es para primitivos; `readonly` es solo para objetos',
          '`readonly` es más potente que `const`',
        ],
        correctAnswer: '`const` protege la variable completa; `readonly` protege propiedades específicas del objeto',
        correctFeedback:
          'Correcto. `const` evita reasignar la variable, pero sus propiedades pueden cambiar. `readonly` protege propiedades específicas de ser reasignadas.',
        incorrectFeedback:
          'No es correcto. Son diferentes: `const` evita que la variable sea reasignada a otro objeto/valor, pero las propiedades del objeto siguen siendo mutables. `readonly` protege propiedades específicas dentro del objeto de ser modificadas.',
      },
      {
        question: '¿Cuál de estas líneas causaría un error con el tipo `{ readonly id: number; nombre: string }`?',
        options: [
          'const u = { id: 1, nombre: "Ana" }',
          'u.nombre = "Carlos"',
          'u.id = 99',
          'console.log(u.id)',
        ],
        correctAnswer: 'u.id = 99',
        correctFeedback:
          'Correcto. `id` es `readonly`, por lo que intentar reasignarlo causa un error de TypeScript.',
        incorrectFeedback:
          'No es correcto. Solo `u.id = 99` causa error porque `id` es `readonly`. Crear el objeto, leer `id` o modificar `nombre` (que no es readonly) son operaciones válidas.',
      },
      {
        question: '¿Cuándo es especialmente útil usar `readonly` en un tipo?',
        options: [
          'En propiedades que cambian con frecuencia como el stock',
          'En propiedades que nunca deben cambiar, como el id o la fecha de creación',
          'En todas las propiedades para máxima seguridad',
          'Solo en propiedades de tipo string',
        ],
        correctAnswer: 'En propiedades que nunca deben cambiar, como el id o la fecha de creación',
        correctFeedback:
          'Correcto. `readonly` es ideal para propiedades inmutables por naturaleza: identificadores únicos, fechas de creación, números de serie, etc.',
        incorrectFeedback:
          'No es correcto. `readonly` es para propiedades que nunca deberían cambiar: ids, fechas de creación, versiones, números de serie. Si usas `readonly` en todo, el objeto sería completamente inmutable y no podrías actualizarlo.',
      },
      {
        question: '¿Es posible leer una propiedad `readonly` normalmente?',
        options: [
          'No, readonly también bloquea la lectura',
          'Solo si se usa un método especial',
          'Sí, solo bloquea la escritura (reasignación)',
          'Solo dentro de la misma función donde se creó el objeto',
        ],
        correctAnswer: 'Sí, solo bloquea la escritura (reasignación)',
        correctFeedback:
          'Correcto. `readonly` solo restringe escribir en la propiedad. Puedes leerla normalmente en cualquier parte del código.',
        incorrectFeedback:
          'No es correcto. `readonly` solo bloquea la modificación (escritura) de la propiedad. La lectura es completamente normal y no necesita ningún método especial.',
      },
    ],
  },

  // ── Lección 51 ───────────────────────────────────────────────────────────
  {
    slug: 'objetos-anidados-tipados',
    title: 'Objetos anidados tipados',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 5,
    description:
      'Aprende a tipar objetos que contienen otros objetos dentro.',
    explanation: `En la programación real, los objetos frecuentemente contienen otros objetos. En TypeScript puedes tipar esta estructura anidada de forma precisa.

**Sintaxis básica**

\`\`\`ts
const usuario: {
  nombre: string
  direccion: {
    calle: string
    ciudad: string
    codigoPostal: number
  }
} = {
  nombre: "Ana",
  direccion: {
    calle: "Av. Principal 123",
    ciudad: "Ciudad de México",
    codigoPostal: 6600,
  },
}
\`\`\`

**Acceso a propiedades anidadas**

\`\`\`ts
console.log(usuario.nombre)            // → Ana
console.log(usuario.direccion.ciudad)  // → Ciudad de México
\`\`\`

**¿Qué verifica TypeScript?**

TypeScript verifica cada nivel del objeto anidado:
- Que el objeto interno tenga todas sus propiedades
- Que cada propiedad tenga el tipo correcto
- Que no haya propiedades extra

**Objeto anidado con propiedades opcionales**

\`\`\`ts
type Producto = {
  nombre: string
  precio: number
  especificaciones?: {
    peso: number
    dimensiones: {
      ancho: number
      alto: number
    }
  }
}
\`\`\`

**Una analogía útil**

Es como una caja (objeto externo) que contiene otra caja (objeto interno) dentro. La primera caja tiene su propia etiqueta con lo que contiene, y la segunda caja también tiene su etiqueta. TypeScript verifica que las dos cajas tengan su contenido correcto.

**Por qué anidamos objetos**

En la práctica, anidar objetos te permite modelar datos complejos del mundo real:
- Un usuario con dirección
- Un producto con especificaciones técnicas
- Un estudiante con información académica
- Una orden con datos de envío y pago`,
    codeExample: `// ── archivo: user.ts ─────────────────────────────────────────────────────

// Objeto con dirección anidada
const usuario: {
  id: number
  nombre: string
  contacto: {
    correo: string
    telefono?: string
  }
  direccion: {
    calle: string
    ciudad: string
    pais: string
  }
} = {
  id: 1,
  nombre: "Ana García",
  contacto: {
    correo: "ana@mail.com",
    telefono: "555-1234",
  },
  direccion: {
    calle: "Av. Reforma 456",
    ciudad: "CDMX",
    pais: "México",
  },
}

console.log(usuario.nombre)              // → Ana García
console.log(usuario.contacto.correo)     // → ana@mail.com
console.log(usuario.direccion.ciudad)    // → CDMX

// Función que trabaja con objeto anidado
function mostrarResumen(u: {
  nombre: string
  contacto: { correo: string }
  direccion: { ciudad: string; pais: string }
}): void {
  console.log(\`\${u.nombre} — \${u.contacto.correo}\`)
  console.log(\`Ubicación: \${u.direccion.ciudad}, \${u.direccion.pais}\`)
}

mostrarResumen(usuario)
// → Ana García — ana@mail.com
// → Ubicación: CDMX, México

// Objeto anidado con propiedad opcional
const producto: {
  nombre: string
  precio: number
  especificaciones?: {
    peso: number
    color: string
  }
} = {
  nombre: "Teclado mecánico",
  precio: 850,
  especificaciones: {
    peso: 1.2,
    color: "Negro",
  },
}

const mouse: {
  nombre: string
  precio: number
  especificaciones?: {
    peso: number
    color: string
  }
} = {
  nombre: "Mouse básico",
  precio: 150,
  // especificaciones es opcional — puede omitirse
}

// Acceso seguro al objeto anidado opcional
console.log(producto.especificaciones?.color)  // → Negro
console.log(mouse.especificaciones?.color)     // → undefined`,
    keyPoints: [
      'Los objetos anidados se tipan simplemente incluyendo otro tipo objeto como valor de propiedad.',
      'TypeScript verifica cada nivel del objeto anidado: propiedades y sus tipos.',
      'Puedes hacer propiedades opcionales en cualquier nivel del anidamiento.',
      'Para acceder a objetos anidados opcionales, usa el operador `?.`.',
      'Los objetos anidados modelan datos complejos del mundo real como usuarios con dirección.',
      'Cada nivel de anidamiento necesita pasar la verificación de TypeScript.',
    ],
    exercise: {
      description:
        'Crea un tipo para un `Estudiante` que tenga: `nombre`, `id` (readonly), `contacto` (objeto con `correo` y `telefono` opcional), e `información académica` como objeto con `promedio` (number) y `materias` (string[]). Escribe una función `generarReporte` que reciba este tipo e imprima todos los datos disponibles.',
      hint: 'Recuerda usar `?.` al acceder a `contacto.telefono` ya que es opcional. Para las materias usa `.join(", ")` para listarlas separadas por coma.',
    },
    quiz: [
      {
        question: '¿Cómo se tipa una propiedad `direccion` que es un objeto con `ciudad: string` y `pais: string`?',
        options: [
          'direccion: [ciudad: string, pais: string]',
          'direccion: Object',
          'direccion: { ciudad: string; pais: string }',
          'direccion: (ciudad: string, pais: string)',
        ],
        correctAnswer: 'direccion: { ciudad: string; pais: string }',
        correctFeedback:
          'Correcto. La propiedad `direccion` tiene como tipo un objeto literal con sus propias propiedades tipadas.',
        incorrectFeedback:
          'No es correcto. Para tipar una propiedad que es un objeto, se usa la misma sintaxis de tipo objeto: `{ propiedad: tipo }`. Los corchetes son para arrays/tuplas, los paréntesis son para funciones, y `Object` no es un tipo útil en TypeScript.',
      },
      {
        question: '¿Cómo accedes de forma segura a `usuario.contacto.telefono` si `contacto` es opcional?',
        options: [
          'usuario.contacto.telefono',
          'usuario.contacto?.telefono',
          'usuario?.contacto.telefono',
          'usuario.contacto!.telefono',
        ],
        correctAnswer: 'usuario.contacto?.telefono',
        correctFeedback:
          'Correcto. Si `contacto` puede ser `undefined`, usas `?.` entre `contacto` y `telefono` para evitar el error.',
        incorrectFeedback:
          'No es correcto. Para acceder de forma segura a una propiedad de un objeto que puede ser `undefined`, usas `?.` después de ese objeto. Si `contacto` puede no existir, escribes `usuario.contacto?.telefono`.',
      },
      {
        question: '¿Qué verificaría TypeScript al asignar este objeto?\n\nconst p: { nombre: string; spec: { peso: number } } = { nombre: "X", spec: { peso: "1.2kg" } }',
        options: [
          'Ningún error: TypeScript convierte "1.2kg" a número',
          'Error: `peso` debe ser `number`, pero se pasó un string',
          'Error: el objeto `spec` no puede estar anidado',
          'Error: falta el punto y coma entre propiedades',
        ],
        correctAnswer: 'Error: `peso` debe ser `number`, pero se pasó un string',
        correctFeedback:
          'Correcto. TypeScript verifica cada nivel del objeto anidado. `peso` debe ser `number`, pero `"1.2kg"` es un string, lo que causa un error.',
        incorrectFeedback:
          'No es correcto. TypeScript verifica los tipos en todos los niveles del objeto anidado. `peso` está declarado como `number`, pero `"1.2kg"` es un string. TypeScript reporta este error de tipo aunque esté dentro de un objeto anidado.',
      },
      {
        question: '¿Por qué es útil tipar objetos anidados en TypeScript?',
        options: [
          'Para que el objeto ocupe menos memoria',
          'Para modelar datos complejos y tener verificación de tipos en cada nivel',
          'Porque los objetos anidados no existen en JavaScript',
          'Para que TypeScript pueda serializar el objeto automáticamente',
        ],
        correctAnswer: 'Para modelar datos complejos y tener verificación de tipos en cada nivel',
        correctFeedback:
          'Correcto. Los objetos anidados permiten modelar estructuras de datos complejas (usuarios con dirección, productos con especificaciones) y TypeScript verifica los tipos en cada nivel.',
        incorrectFeedback:
          'No es correcto. Los objetos anidados existen perfectamente en JavaScript. La ventaja de tiparlos en TypeScript es que puedes modelar datos complejos y tener verificación de tipos en cada nivel, lo que evita errores difíciles de detectar.',
      },
      {
        question: '¿Qué retorna `usuario.contacto?.telefono` si `contacto` es `undefined`?',
        options: [
          'null',
          '""',
          'undefined',
          'Lanza un error en tiempo de ejecución',
        ],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. El operador `?.` retorna `undefined` si la propiedad de la izquierda es `undefined`, en lugar de lanzar un error.',
        incorrectFeedback:
          'No es correcto. El operador `?.` (optional chaining) retorna `undefined` — no lanza error, no retorna `null` ni `""`. Es precisamente su función: acceder a propiedades de forma segura cuando el objeto puede ser `undefined`.',
      },
    ],
  },

  // ── Lección 52 ───────────────────────────────────────────────────────────
  {
    slug: 'arrays-objetos-tipados',
    title: 'Arrays de objetos tipados',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 6,
    description:
      'Aprende a trabajar con listas de objetos que comparten una estructura definida.',
    explanation: `En la práctica, frecuentemente trabajas con listas de objetos: lista de usuarios, lista de productos, lista de tareas. TypeScript te permite tipar estos arrays de forma precisa.

**Sintaxis**

\`\`\`ts
const usuarios: { nombre: string; edad: number }[] = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 },
]
\`\`\`

O de forma más limpia con un type alias (que aprenderás a fondo en el módulo 8):

\`\`\`ts
type Usuario = { nombre: string; edad: number }
const usuarios: Usuario[] = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 },
]
\`\`\`

**¿Qué verifica TypeScript?**

Cuando tienes \`tipo[]\`, TypeScript verifica que:
1. Cada elemento del array sea del tipo correcto.
2. Cada objeto en el array tenga las propiedades requeridas.
3. Las propiedades tengan los tipos correctos.

**Métodos de array con objetos tipados**

Los métodos \`map\`, \`filter\`, \`find\`, etc., conocen el tipo de cada elemento:

\`\`\`ts
const adultos = usuarios.filter((u) => u.edad >= 18)
// TypeScript sabe que 'u' es { nombre: string; edad: number }
// y que adultos es { nombre: string; edad: number }[]
\`\`\`

**Funciones que trabajan con arrays de objetos**

\`\`\`ts
function obtenerNombres(lista: { nombre: string }[]): string[] {
  return lista.map((item) => item.nombre)
}
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Array de objetos tipado inline
const estudiantes: { nombre: string; nota: number; aprobado: boolean }[] = [
  { nombre: "Ana", nota: 9.0, aprobado: true },
  { nombre: "Carlos", nota: 5.5, aprobado: false },
  { nombre: "Sofía", nota: 7.5, aprobado: true },
  { nombre: "Miguel", nota: 4.0, aprobado: false },
]

// TypeScript sabe el tipo de 'e' en el callback
const aprobados = estudiantes.filter((e) => e.aprobado)
console.log("Aprobados:", aprobados.length)  // → 2

const nombres = estudiantes.map((e) => e.nombre)
console.log("Nombres:", nombres)  // → ["Ana", "Carlos", "Sofía", "Miguel"]

const promedio =
  estudiantes.reduce((sum, e) => sum + e.nota, 0) / estudiantes.length
console.log("Promedio clase:", promedio.toFixed(2))  // → 6.50

// Función que trabaja con arrays de objetos
function mostrarLista(lista: { nombre: string; nota: number }[]): void {
  lista.forEach((e, i) => {
    const estado = e.nota >= 6 ? "✓" : "✗"
    console.log(\`\${i + 1}. \${estado} \${e.nombre}: \${e.nota}\`)
  })
}

mostrarLista(estudiantes)
// → 1. ✓ Ana: 9
// → 2. ✗ Carlos: 5.5
// → 3. ✓ Sofía: 7.5
// → 4. ✗ Miguel: 4

// Función que busca en el array
function buscarEstudiante(
  lista: { nombre: string; nota: number }[],
  nombre: string
): { nombre: string; nota: number } | undefined {
  return lista.find((e) => e.nombre === nombre)
}

const ana = buscarEstudiante(estudiantes, "Ana")
if (ana) {
  console.log(\`Encontrado: \${ana.nombre} — \${ana.nota}\`)  // → Encontrado: Ana — 9
}

// Función que crea y retorna array tipado
function filtrarAprobados(
  lista: { nombre: string; nota: number }[]
): { nombre: string; nota: number }[] {
  return lista.filter((e) => e.nota >= 6)
}

const soloAprobados = filtrarAprobados(estudiantes)
console.log("Solo aprobados:", soloAprobados.map((e) => e.nombre))
// → ["Ana", "Sofía"]`,
    keyPoints: [
      'Un array de objetos tipados se declara como `Tipo[]` o `Array<Tipo>`.',
      'TypeScript verifica que cada elemento del array tenga el tipo correcto.',
      'Los métodos `map`, `filter`, `find`, `forEach` conocen el tipo de cada elemento.',
      'Las funciones que trabajan con arrays de objetos se tipan con `Tipo[]` en el parámetro.',
      'TypeScript infiere correctamente el tipo de retorno de `filter`, `map`, etc.',
      'Usar un type alias hace el código más legible cuando el tipo es complejo.',
    ],
    exercise: {
      description:
        'Crea un array tipado de al menos 4 `Producto` (con `id`, `nombre`, `precio` y `disponible`). Luego escribe tres funciones: `obtenerDisponibles` (retorna solo los disponibles), `calcularTotalInventario` (suma todos los precios) y `buscarPorNombre` (recibe un string y retorna el producto encontrado o `undefined`).',
      hint: 'Para `obtenerDisponibles` usa `.filter()`. Para `calcularTotalInventario` usa `.reduce()`. Para `buscarPorNombre` usa `.find()`. El tipo de retorno de `buscarPorNombre` es `{ id: number; nombre: string; precio: number; disponible: boolean } | undefined`.',
    },
    quiz: [
      {
        question: '¿Cómo se declara el tipo de un array de objetos con `{ nombre: string; edad: number }`?',
        options: [
          '{ nombre: string; edad: number }',
          '{ nombre: string; edad: number }[]',
          'Array({ nombre: string; edad: number })',
          '[{ nombre: string; edad: number }]',
        ],
        correctAnswer: '{ nombre: string; edad: number }[]',
        correctFeedback:
          'Correcto. Se agrega `[]` al final del tipo objeto para indicar que es un array de esos objetos.',
        incorrectFeedback:
          'No es correcto. Para un array de objetos, se agrega `[]` al final del tipo: `{ nombre: string; edad: number }[]`. Esto indica que es un array donde cada elemento tiene esa estructura.',
      },
      {
        question: '¿Qué tipo infiere TypeScript para `u` dentro de `.filter()` en este código?\n\nconst usuarios: { nombre: string; edad: number }[] = []\nusuarios.filter((u) => u.edad > 18)',
        options: [
          'any',
          '{ nombre: string; edad: number }',
          'object',
          'unknown',
        ],
        correctAnswer: '{ nombre: string; edad: number }',
        correctFeedback:
          'Correcto. TypeScript infiere que `u` es del tipo de los elementos del array, es decir `{ nombre: string; edad: number }`.',
        incorrectFeedback:
          'No es correcto. TypeScript infiere el tipo de `u` a partir del tipo del array. Como `usuarios` es `{ nombre: string; edad: number }[]`, TypeScript sabe que cada elemento (y por tanto `u`) tiene tipo `{ nombre: string; edad: number }`.',
      },
      {
        question: '¿Qué tipo retorna `find()` cuando busca en un array de objetos tipados?',
        options: [
          'Siempre retorna el tipo del objeto',
          'Retorna el tipo del objeto o undefined',
          'Retorna null si no encuentra nada',
          'Retorna un boolean',
        ],
        correctAnswer: 'Retorna el tipo del objeto o undefined',
        correctFeedback:
          'Correcto. `find()` retorna el primer elemento que cumple la condición, o `undefined` si no hay ninguno. Por eso el tipo de retorno es `Tipo | undefined`.',
        incorrectFeedback:
          'No es correcto. El método `find()` retorna el primer elemento que cumple la condición del callback, o `undefined` si ningún elemento cumple. TypeScript refleja esto con el tipo de retorno `Tipo | undefined`.',
      },
      {
        question: '¿Por qué es ventajoso usar un type alias para arrays de objetos complejos?',
        options: [
          'Los type aliases hacen el código más rápido',
          'Solo los type aliases permiten arrays de objetos',
          'Mejoran la legibilidad y permiten reutilizar el tipo sin repetirlo',
          'TypeScript no puede inferir tipos sin aliases',
        ],
        correctAnswer: 'Mejoran la legibilidad y permiten reutilizar el tipo sin repetirlo',
        correctFeedback:
          'Correcto. Un type alias como `type Usuario = { nombre: string; edad: number }` permite escribir `Usuario[]` en lugar de repetir el objeto completo cada vez.',
        incorrectFeedback:
          'No es correcto. Un type alias mejora la legibilidad y permite reutilizar el tipo. Sin alias, tendrías que repetir `{ nombre: string; edad: number }[]` cada vez que usas ese tipo, lo que es propenso a errores e inconsistencias.',
      },
      {
        question: '¿Qué elemento devuelve `.map()` cuando lo usas en un array de objetos para extraer una propiedad?',
        options: [
          'Un nuevo array del mismo tipo de objeto',
          'Un array del tipo de la propiedad extraída',
          'Siempre un array de strings',
          'undefined si el array está vacío',
        ],
        correctAnswer: 'Un array del tipo de la propiedad extraída',
        correctFeedback:
          'Correcto. Si usas `.map((u) => u.nombre)` en un `{ nombre: string }[]`, el resultado es `string[]`. TypeScript infiere el tipo según lo que retorne el callback.',
        incorrectFeedback:
          'No es correcto. `.map()` crea un nuevo array a partir de lo que retorne el callback. Si el callback retorna `u.nombre` (un string), el resultado es `string[]`. TypeScript infiere el tipo correcto automáticamente.',
      },
    ],
  },

  // ── Lección 53 ───────────────────────────────────────────────────────────
  {
    slug: 'funciones-reciben-objetos-typescript',
    title: 'Funciones que reciben objetos',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 7,
    description:
      'Aprende a tipar funciones que reciben objetos como argumentos.',
    explanation: `Pasar objetos a funciones es muy común. En TypeScript, cuando tipas el parámetro como objeto, obtienes todas las ventajas del sistema de tipos: autocompletado, verificación de propiedades y detección de errores.

**Patrones comunes**

**Patrón 1: Parámetro objeto completo**

\`\`\`ts
function mostrarUsuario(usuario: { nombre: string; edad: number }): void {
  console.log(\`\${usuario.nombre}, \${usuario.edad} años\`)
}
\`\`\`

**Patrón 2: Desestructuración con tipos**

\`\`\`ts
function mostrarUsuario({ nombre, edad }: { nombre: string; edad: number }): void {
  console.log(\`\${nombre}, \${edad} años\`)
}
\`\`\`

Ambos patrones son equivalentes, pero la desestructuración es más concisa.

**Patrón 3: Objeto de configuración (options object)**

Muy común en funciones con muchos parámetros:

\`\`\`ts
function crearNotificacion(opciones: {
  titulo: string
  mensaje: string
  tipo?: "info" | "error" | "exito"
  duracion?: number
}): void {
  const tipo = opciones.tipo ?? "info"
  const duracion = opciones.duracion ?? 3000
  console.log(\`[\${tipo}] \${opciones.titulo}: \${opciones.mensaje} (\${duracion}ms)\`)
}
\`\`\`

**¿Cuándo pasar objeto vs. parámetros individuales?**

- **Parámetros individuales** — cuando hay 1-3 valores simples
- **Objeto** — cuando hay 4+ valores, o cuando varios son opcionales
- **Objeto de configuración** — cuando quieres un API flexible con valores por defecto

**Destructuring de parámetros**

\`\`\`ts
// Sin desestructuración
function obtenerTotal(venta: { precio: number; cantidad: number }): number {
  return venta.precio * venta.cantidad
}

// Con desestructuración
function obtenerTotal({ precio, cantidad }: { precio: number; cantidad: number }): number {
  return precio * cantidad
}
\`\`\``,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// Patrón 1: Objeto como parámetro
function calcularDescuento(
  producto: { nombre: string; precio: number; descuento: number }
): string {
  const precioFinal = producto.precio * (1 - producto.descuento / 100)
  return \`\${producto.nombre}: $\${precioFinal.toFixed(2)} (antes: $\${producto.precio})\`
}

console.log(calcularDescuento({ nombre: "Teclado", precio: 850, descuento: 20 }))
// → Teclado: $680.00 (antes: $850)

// Patrón 2: Desestructuración del parámetro objeto
function formatearEstudiante({ nombre, nota, activo }: {
  nombre: string
  nota: number
  activo: boolean
}): string {
  const estado = activo ? "Activo" : "Inactivo"
  const resultado = nota >= 6 ? "Aprobado" : "Reprobado"
  return \`[\${estado}] \${nombre}: \${nota} — \${resultado}\`
}

console.log(formatearEstudiante({ nombre: "Ana", nota: 8.5, activo: true }))
// → [Activo] Ana: 8.5 — Aprobado

// Patrón 3: Objeto de configuración con opcionales
function generarSaludo(config: {
  nombre: string
  saludo?: string
  mayusculas?: boolean
}): string {
  const saludo = config.saludo ?? "Hola"
  const texto = \`\${saludo}, \${config.nombre}!\`
  return config.mayusculas ? texto.toUpperCase() : texto
}

console.log(generarSaludo({ nombre: "Ana" }))
// → Hola, Ana!
console.log(generarSaludo({ nombre: "Carlos", saludo: "Buenos días", mayusculas: true }))
// → BUENOS DÍAS, CARLOS!

// Función que retorna un objeto enriquecido
function procesarVenta(venta: {
  producto: string
  precio: number
  cantidad: number
}): {
  producto: string
  subtotal: number
  iva: number
  total: number
} {
  const subtotal = venta.precio * venta.cantidad
  const iva = subtotal * 0.16
  return {
    producto: venta.producto,
    subtotal,
    iva: parseFloat(iva.toFixed(2)),
    total: parseFloat((subtotal + iva).toFixed(2)),
  }
}

const resultado = procesarVenta({ producto: "Mouse", precio: 200, cantidad: 3 })
console.log(resultado)
// → { producto: "Mouse", subtotal: 600, iva: 96, total: 696 }`,
    keyPoints: [
      'Pasar objetos a funciones es común y TypeScript verifica la estructura del argumento.',
      'Puedes desestructurar el parámetro objeto directamente en la firma de la función.',
      'El patrón "options object" es útil para funciones con muchos parámetros opcionales.',
      'TypeScript verifica que el objeto pasado tenga las propiedades requeridas.',
      'Puedes tener propiedades opcionales en el tipo del parámetro objeto.',
      'Las funciones también pueden retornar objetos tipados.',
    ],
    exercise: {
      description:
        'Crea una función `registrarPago` que reciba un objeto de configuración con: `monto` (number), `moneda` (string, por defecto "MXN"), `referencia` (string), y `notas` (string, opcional). La función debe retornar un objeto con `id` (un número aleatorio), `monto`, `moneda`, `referencia`, `notas` (o "Sin notas" si no se pasó) y `fecha` (la fecha actual como string).',
      hint: 'Usa `new Date().toLocaleDateString()` para la fecha. Para el id usa `Math.floor(Math.random() * 100000)`. Recuerda que puedes usar `??` para el valor por defecto de `notas`.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis para desestructurar un parámetro objeto en la firma de la función?',
        options: [
          'function f(obj.nombre, obj.edad): void',
          'function f({ nombre, edad }: { nombre: string; edad: number }): void',
          'function f(desestructurar { nombre: string; edad: number }): void',
          'function f(nombre: string, edad: number from objeto): void',
        ],
        correctAnswer: 'function f({ nombre, edad }: { nombre: string; edad: number }): void',
        correctFeedback:
          'Correcto. La desestructuración en la firma se escribe con `{ propiedades }` seguido de `:` y el tipo del objeto.',
        incorrectFeedback:
          'No es correcto. Para desestructurar un parámetro objeto en la firma, la sintaxis es `{ propiedad1, propiedad2 }: { propiedad1: tipo1; propiedad2: tipo2 }`. El tipo del objeto completo va después de los dos puntos.',
      },
      {
        question: '¿Cuándo conviene usar un "options object" en lugar de múltiples parámetros?',
        options: [
          'Siempre, es mejor práctica',
          'Cuando hay muchos parámetros o varios son opcionales',
          'Solo cuando todos los parámetros son del mismo tipo',
          'Nunca, los parámetros individuales siempre son mejores',
        ],
        correctAnswer: 'Cuando hay muchos parámetros o varios son opcionales',
        correctFeedback:
          'Correcto. El patrón "options object" es especialmente útil cuando hay 4+ parámetros o varios opcionales, ya que hace el llamado más claro y flexible.',
        incorrectFeedback:
          'No es correcto. El "options object" es conveniente cuando hay muchos parámetros (difícil recordar el orden) o varios opcionales (evita pasar `undefined` en posiciones intermedias). Para 1-3 parámetros simples y requeridos, los parámetros individuales suelen ser más claros.',
      },
      {
        question: '¿Cuál es la ventaja de tipar un parámetro objeto en TypeScript?',
        options: [
          'La función se ejecuta más rápido',
          'TypeScript verifica que el argumento tenga las propiedades correctas con los tipos correctos',
          'El objeto no puede modificarse dentro de la función',
          'TypeScript convierte automáticamente los tipos incorrectos',
        ],
        correctAnswer: 'TypeScript verifica que el argumento tenga las propiedades correctas con los tipos correctos',
        correctFeedback:
          'Correcto. Al tipar el parámetro, TypeScript verifica la estructura del objeto pasado: que tenga las propiedades requeridas, que no falte ninguna, y que los tipos sean correctos.',
        incorrectFeedback:
          'No es correcto. La ventaja principal es la verificación de tipos: TypeScript verifica que el objeto pasado tenga las propiedades requeridas con los tipos correctos. No afecta el rendimiento, no hace el objeto inmutable, y no convierte tipos automáticamente.',
      },
      {
        question: '¿Qué pasa si pasas un objeto con una propiedad extra a una función con un tipo específico?\n\nfunction f(p: { nombre: string }): void { }\nf({ nombre: "Ana", edad: 25 })',
        options: [
          'TypeScript ignora la propiedad extra y todo funciona',
          'TypeScript reporta un error por propiedad extra en literales objeto',
          'La función recibe undefined para la propiedad extra',
          'TypeScript agrega automáticamente edad al tipo',
        ],
        correctAnswer: 'TypeScript reporta un error por propiedad extra en literales objeto',
        correctFeedback:
          'Correcto. Cuando pasas un objeto literal directamente, TypeScript aplica "excess property checking" y reporta error por propiedades no declaradas en el tipo.',
        incorrectFeedback:
          'No es correcto. Al pasar un objeto literal directamente a una función con un tipo específico, TypeScript aplica "excess property checking" y reporta un error si hay propiedades que no están en el tipo. Sin embargo, si el objeto viene de una variable, este check no aplica.',
      },
      {
        question: '¿Cómo se tipa una función que retorna un objeto con `id: number` y `nombre: string`?',
        options: [
          'function f(): Object',
          'function f(): { id: number; nombre: string }',
          'function f(): [id: number, nombre: string]',
          'function f() -> { id: number; nombre: string }',
        ],
        correctAnswer: 'function f(): { id: number; nombre: string }',
        correctFeedback:
          'Correcto. El tipo de retorno de un objeto se escribe igual que en cualquier otra posición: `{ propiedad: tipo }`.',
        incorrectFeedback:
          'No es correcto. El tipo de retorno de una función que devuelve un objeto usa la misma sintaxis de tipo objeto: `function f(): { id: number; nombre: string }`. Los corchetes son para tuplas y `->` no es sintaxis válida en TypeScript.',
      },
    ],
  },

  // ── Lección 54 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-objetos-tipados',
    title: 'Errores comunes con objetos tipados',
    module: 'Objetos tipados',
    moduleNumber: 7,
    order: 8,
    description:
      'Aprende a evitar errores como propiedades faltantes, nombres incorrectos o tipos incompatibles.',
    explanation: `Trabajar con objetos tipados es muy poderoso, pero hay errores comunes que se cometen al empezar. Conocerlos te ayudará a escribir código más seguro.

**Error 1: Propiedad faltante**

\`\`\`ts
type Producto = { nombre: string; precio: number }

// ❌ Falta 'precio'
const p: Producto = { nombre: "Teclado" }
// Error: Property 'precio' is missing
\`\`\`

**Error 2: Nombre de propiedad incorrecto (typo)**

\`\`\`ts
// ❌ Typo en el nombre
const p: Producto = { nombre: "Teclado", preico: 850 }
// Error: Object literal may only specify known properties
// (TypeScript detecta que 'preico' no existe, y 'precio' falta)
\`\`\`

**Error 3: Tipo incorrecto en una propiedad**

\`\`\`ts
// ❌ precio debería ser number, no string
const p: Producto = { nombre: "Teclado", precio: "850" }
// Error: Type 'string' is not assignable to type 'number'
\`\`\`

**Error 4: Acceder a propiedad que no existe**

\`\`\`ts
function mostrar(p: Producto): void {
  console.log(p.descripcion)  // Error: Property 'descripcion' does not exist
}
\`\`\`

**Error 5: Usar propiedad opcional sin verificar**

\`\`\`ts
type Tarea = { titulo: string; descripcion?: string }

function mostrar(t: Tarea): void {
  console.log(t.descripcion.toUpperCase())
  // Error: t.descripcion puede ser undefined
}

// ✓ Correcto
function mostrar(t: Tarea): void {
  if (t.descripcion) {
    console.log(t.descripcion.toUpperCase())
  }
}
\`\`\`

**Error 6: Modificar una propiedad readonly**

\`\`\`ts
type Usuario = { readonly id: number; nombre: string }
const u: Usuario = { id: 1, nombre: "Ana" }
u.id = 2  // Error: Cannot assign to 'id' because it is a read-only property
\`\`\`

**Mensaje de error más común para entender**

\`\`\`
Type '{ nombre: string }' is not assignable to type 'Producto'.
  Property 'precio' is missing in type '{ nombre: string }' but required in type 'Producto'.
\`\`\`

Este mensaje te dice exactamente qué falta y dónde.`,
    codeExample: `// ── archivo: errores-objetos.ts ─────────────────────────────────────────

type Producto = {
  id: number
  nombre: string
  precio: number
  disponible?: boolean
}

// ── Error 1: Propiedad faltante ──────────────────────────────────────────
// ❌
// const teclado: Producto = { id: 1, nombre: "Teclado" }
// Error: Property 'precio' is missing

// ✓ Correcto
const teclado: Producto = { id: 1, nombre: "Teclado", precio: 850 }

// ── Error 2: Typo en el nombre de propiedad ──────────────────────────────
// ❌
// const mouse: Producto = { id: 2, nombre: "Mouse", preico: 200 }
// Error: Object literal may only specify known properties, and 'preico' does not exist

// ✓ Correcto
const mouse: Producto = { id: 2, nombre: "Mouse", precio: 200 }

// ── Error 3: Tipo incorrecto ─────────────────────────────────────────────
// ❌
// const monitor: Producto = { id: 3, nombre: "Monitor", precio: "caro" }
// Error: Type 'string' is not assignable to type 'number'

// ✓ Correcto
const monitor: Producto = { id: 3, nombre: "Monitor", precio: 5000 }

// ── Error 4: Acceder a propiedad inexistente ──────────────────────────────
function mostrarProducto(p: Producto): void {
  console.log(p.nombre)
  console.log(p.precio)
  // console.log(p.categoria)  // Error: Property 'categoria' does not exist
}

mostrarProducto(teclado)
// → Teclado
// → 850

// ── Error 5: Propiedad opcional sin verificar ─────────────────────────────
function mostrarDisponibilidad(p: Producto): void {
  // ❌ p.disponible puede ser undefined
  // console.log(p.disponible ? "Disponible" : "Agotado")

  // ✓ Correcto: verificar primero
  if (p.disponible !== undefined) {
    console.log(p.disponible ? "Disponible" : "Agotado")
  } else {
    console.log("Sin información de disponibilidad")
  }
}

mostrarDisponibilidad(teclado)     // → Sin información de disponibilidad
mostrarDisponibilidad({ ...teclado, disponible: true })   // → Disponible

// ── Error 6: Propiedad readonly ──────────────────────────────────────────
type Pedido = {
  readonly id: number
  producto: string
}

const pedido: Pedido = { id: 1001, producto: "Teclado" }
pedido.producto = "Mouse"     // ✓ puede cambiar
// pedido.id = 9999           // Error: Cannot assign to 'id' because it is read-only`,
    keyPoints: [
      'TypeScript detecta propiedades faltantes y te muestra exactamente cuál falta.',
      'Los typos en nombres de propiedades son detectados como "propiedad desconocida".',
      'TypeScript verifica que el tipo del valor asignado coincida con el tipo declarado.',
      'Acceder a propiedades que no existen en el tipo es un error en TypeScript.',
      'Las propiedades opcionales deben verificarse antes de usarse.',
      'Las propiedades `readonly` no pueden reasignarse; TypeScript lo detecta inmediatamente.',
    ],
    exercise: {
      description:
        'Identifica y corrige los 4 errores en este código:\n\n```ts\ntype Estudiante = {\n  nombre: string\n  readonly id: number\n  nota: number\n  correo?: string\n}\n\nconst est: Estudiante = { nombre: "Ana", notaa: 8.5, id: 1 }\nest.id = 999\nconsole.log(est.correo.toUpperCase())\nconsole.log(est.telefono)\n```',
      hint: 'Los errores son: (1) typo en `notaa`, (2) `nota` falta, (3) `id` es readonly, (4) `correo` debe verificarse antes de usarse, (5) `telefono` no existe en el tipo.',
    },
    quiz: [
      {
        question: '¿Qué mensaje típico muestra TypeScript cuando falta una propiedad requerida?',
        options: [
          '"undefined is not a function"',
          '"Property X is missing in type ... but required in type ..."',
          '"Object has no method X"',
          '"Cannot read property X of undefined"',
        ],
        correctAnswer: '"Property X is missing in type ... but required in type ..."',
        correctFeedback:
          'Correcto. TypeScript te dice exactamente qué propiedad falta y en qué tipo se requiere, lo que facilita corregir el error rápidamente.',
        incorrectFeedback:
          'No es correcto. Cuando falta una propiedad requerida, TypeScript muestra el mensaje: "Property \'X\' is missing in type \'...\' but required in type \'...\'" — te indica exactamente qué falta y dónde.',
      },
      {
        question: '¿Cómo detecta TypeScript un typo en el nombre de una propiedad?',
        options: [
          'No lo detecta, JavaScript es flexible con los nombres',
          'Lo reporta como "Object literal may only specify known properties"',
          'Solo lo detecta si habilitas una configuración especial',
          'Lo detecta solo si el typo cambia el tipo de la propiedad',
        ],
        correctAnswer: 'Lo reporta como "Object literal may only specify known properties"',
        correctFeedback:
          'Correcto. TypeScript detecta propiedades desconocidas en literales de objeto y las reporta. Si `preico` no está en el tipo pero `precio` sí, TypeScript te avisa.',
        incorrectFeedback:
          'No es correcto. TypeScript aplica "excess property checking" en literales de objeto. Si escribes `preico` en lugar de `precio`, TypeScript detecta que `preico` no es una propiedad conocida del tipo y reporta un error.',
      },
      {
        question: '¿Cuál es el error al ejecutar este código en TypeScript?\n\nconst t: { titulo?: string } = { titulo: "Hola" }\nconsole.log(t.titulo.length)',
        options: [
          'Ningún error, titulo existe en este caso',
          'TypeScript siempre reporta error por usar propiedades opcionales',
          'TypeScript detecta que titulo puede ser undefined y reporta error',
          'Error solo en tiempo de ejecución',
        ],
        correctAnswer: 'TypeScript detecta que titulo puede ser undefined y reporta error',
        correctFeedback:
          'Correcto. Aunque `titulo` tiene valor en este caso, TypeScript sabe que su tipo es `string | undefined`, y `.length` no existe en `undefined`. TypeScript reporta el error.',
        incorrectFeedback:
          'No es correcto. Aunque en este caso concreto `titulo` tiene valor, TypeScript analiza el tipo, no el valor. El tipo de `titulo?` es `string | undefined`. Como `.length` no existe en `undefined`, TypeScript reporta el posible error.',
      },
      {
        question: '¿Qué pasaría si intentas acceder a `usuario.telefono` cuando el tipo solo declara `nombre: string`?',
        options: [
          'Retorna undefined silenciosamente',
          'TypeScript reporta: Property \'telefono\' does not exist on type',
          'TypeScript lo infiere como any',
          'La función lanza un error solo en tiempo de ejecución',
        ],
        correctAnswer: "TypeScript reporta: Property 'telefono' does not exist on type",
        correctFeedback:
          'Correcto. Acceder a una propiedad que no está en el tipo declarado es un error en TypeScript. Te dice exactamente qué propiedad no existe.',
        incorrectFeedback:
          'No es correcto. TypeScript es estricto con las propiedades: si `telefono` no está en el tipo declarado, TypeScript reporta inmediatamente el error "Property \'telefono\' does not exist on type", sin esperar a tiempo de ejecución.',
      },
      {
        question: '¿Cuál de estas prácticas evita errores con propiedades opcionales?',
        options: [
          'Usar `!` para asegurar que la propiedad no es undefined',
          'Verificar con `if (propiedad)` o `if (propiedad !== undefined)` antes de usarla',
          'Siempre hacer las propiedades requeridas para evitar el problema',
          'Usar `any` como tipo para no tener que verificar',
        ],
        correctAnswer: 'Verificar con `if (propiedad)` o `if (propiedad !== undefined)` antes de usarla',
        correctFeedback:
          'Correcto. Verificar antes de usar es la práctica más segura. También puedes usar el operador `?.` o `??` para manejar propiedades opcionales con elegancia.',
        incorrectFeedback:
          'No es correcto. La forma correcta es verificar si la propiedad tiene valor antes de usarla: `if (propiedad)` o `if (propiedad !== undefined)`. Usar `!` (non-null assertion) es riesgoso porque le dices a TypeScript que confíe en ti sin verificación real. Usar `any` elimina toda la seguridad de tipos.',
      },
    ],
  },
]

export const tsModule7: Module = {
  number: 7,
  title: 'Objetos tipados',
  level: 'nivel2',
  lessons: lessonsTsModule7,
}
