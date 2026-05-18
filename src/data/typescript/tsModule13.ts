import type { Lesson, Module } from '@/types'

export const lessonsTsModule13: Lesson[] = [
  // ── Lección 96 ───────────────────────────────────────────────────────────
  {
    slug: 'que-es-enum',
    title: '¿Qué es un enum?',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 96,
    description:
      'Aprende qué es un enum y cómo permite agrupar valores relacionados bajo un nombre común.',
    explanation: `Un **enum** (abreviatura de "enumeration", enumeración) es una forma de dar nombres descriptivos a un conjunto de constantes relacionadas. TypeScript tiene enums como característica propia, aunque no son parte de JavaScript estándar.

**¿Para qué sirven los enums?**

Imagina que tienes una aplicación con estados de pedido: puedes representarlos con números (0, 1, 2, 3) o con cadenas de texto ("pendiente", "procesando", etc.). Un enum te permite hacer esto de forma estructurada:

\`\`\`ts
enum EstadoPedido {
  Pendiente,
  Procesando,
  Enviado,
  Entregado,
}
\`\`\`

Ahora puedes usar \`EstadoPedido.Enviado\` en lugar de recordar que "enviado" es el número 2.

**Sintaxis básica**

\`\`\`ts
enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
  Derecha,
}

const movimiento: Direccion = Direccion.Arriba
\`\`\`

**Una analogía útil**

Un enum es como un semáforo. No necesitas recordar que "rojo = parar", "amarillo = precaución", "verde = avanzar" como números — solo usas el nombre descriptivo. El enum hace lo mismo: convierte constantes sin sentido en nombres con significado.

**Lo que genera TypeScript al compilar**

Los enums numérricos generan código JavaScript real. Esta es una diferencia importante con las interfaces y type aliases, que desaparecen al compilar:

\`\`\`ts
// TypeScript
enum Color { Rojo, Verde, Azul }

// JavaScript generado
var Color;
(function (Color) {
  Color[Color["Rojo"] = 0] = "Rojo";
  Color[Color["Verde"] = 1] = "Verde";
  Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
\`\`\`

Este código genera un objeto con mapeo **bidireccional**: puedes ir de nombre a número y de número a nombre.

**Cómo usar un enum**

\`\`\`ts
enum Rol {
  Administrador,
  Editor,
  Lector,
}

function verificarAcceso(rol: Rol): boolean {
  return rol === Rol.Administrador || rol === Rol.Editor
}

const miRol = Rol.Lector
console.log(verificarAcceso(miRol))  // → false
\`\`\`

**Tipos de enums en TypeScript**

Hay dos tipos principales:
1. **Numeric enums**: los miembros tienen valores numéricos (0, 1, 2...).
2. **String enums**: los miembros tienen valores de texto.

Aprenderás cada uno en las próximas lecciones.`,
    codeExample: `// ── archivo: roles.ts ────────────────────────────────────────────────────

// ── Enum básico ───────────────────────────────────────────────────────────

enum EstadoTarea {
  Pendiente,
  EnProgreso,
  Completada,
  Cancelada,
}

// Usar el enum como tipo
interface Tarea {
  titulo: string
  estado: EstadoTarea
}

function crearTarea(titulo: string): Tarea {
  return { titulo, estado: EstadoTarea.Pendiente }
}

function completarTarea(tarea: Tarea): Tarea {
  return { ...tarea, estado: EstadoTarea.Completada }
}

const mi_tarea = crearTarea('Aprender enums')
console.log(mi_tarea.estado)             // → 0 (valor numérico)
console.log(EstadoTarea[mi_tarea.estado]) // → "Pendiente" (mapeo inverso)

const tarea_completa = completarTarea(mi_tarea)
console.log(tarea_completa.estado)        // → 2

// ── El enum como tipo en funciones ───────────────────────────────────────

function obtenerIcono(estado: EstadoTarea): string {
  if (estado === EstadoTarea.Pendiente)   return '⏳'
  if (estado === EstadoTarea.EnProgreso)  return '⚙️'
  if (estado === EstadoTarea.Completada)  return '✅'
  return '❌'  // Cancelada
}

console.log(obtenerIcono(EstadoTarea.Pendiente))   // → ⏳
console.log(obtenerIcono(EstadoTarea.Completada))  // → ✅

// ── Enum con valores asignados ────────────────────────────────────────────

enum CodigoHTTP {
  OK = 200,
  Creado = 201,
  NoEncontrado = 404,
  Error = 500,
}

function manejarCodigo(codigo: CodigoHTTP): string {
  switch (codigo) {
    case CodigoHTTP.OK:          return 'Todo bien'
    case CodigoHTTP.Creado:      return 'Recurso creado'
    case CodigoHTTP.NoEncontrado: return 'No encontrado'
    case CodigoHTTP.Error:       return 'Error del servidor'
  }
}

console.log(manejarCodigo(CodigoHTTP.OK))  // → Todo bien`,
    keyPoints: [
      'Un enum agrupa un conjunto de constantes relacionadas bajo un nombre común.',
      'Los enums de TypeScript generan código JavaScript real — no desaparecen al compilar.',
      'Los miembros de un enum numérico tienen valores 0, 1, 2... por defecto, pero se pueden cambiar.',
      'El mapeo es bidireccional: puedes ir de nombre a número y de número a nombre.',
      'Hay dos tipos principales: numeric enums y string enums.',
    ],
    exercise: {
      description:
        'Crea un enum \`NivelDificultad\` con los valores: Fácil, Medio, Difícil, Experto. Crea una interfaz \`Pregunta\` con campos \`texto: string\` y \`dificultad: NivelDificultad\`. Escribe una función \`filtrarPreguntas\` que reciba un array de preguntas y un nivel, y devuelva solo las del nivel indicado.',
      hint: 'El tipo del parámetro de dificultad en filtrarPreguntas debe ser \`NivelDificultad\`. Usa filter con comparación directa: \`p.dificultad === nivel\`.',
    },
    quiz: [
      {
        question: '¿Qué es un enum en TypeScript?',
        options: [
          'Un tipo que permite cualquier valor de string',
          'Una forma de agrupar constantes relacionadas bajo un nombre común',
          'Una función especial de TypeScript',
          'Un tipo idéntico a boolean',
        ],
        correctAnswer:
          'Una forma de agrupar constantes relacionadas bajo un nombre común',
        correctFeedback:
          'Correcto. Un enum permite dar nombres descriptivos a un conjunto de valores relacionados, como estados, roles, o categorías, haciendo el código más legible.',
        incorrectFeedback:
          'No es correcto. Un enum es una forma de agrupar constantes relacionadas con nombres descriptivos. No es un tipo genérico ni una función — es una estructura para representar un conjunto fijo de valores.',
      },
      {
        question:
          '¿Qué valor tiene el primer miembro de un enum numérico por defecto?',
        options: ['1', '0', '-1', 'undefined'],
        correctAnswer: '0',
        correctFeedback:
          'Correcto. Los enums numéricos empiezan en 0 por defecto y cada miembro siguiente es el anterior más 1. Puedes cambiar esto asignando un valor explícito.',
        incorrectFeedback:
          'No es correcto. Los enums numéricos empiezan en 0 por defecto. El segundo miembro es 1, el tercero es 2, y así sucesivamente, a menos que asignes valores explícitos.',
      },
      {
        question:
          '¿Cuál es una diferencia importante entre enums y type aliases (como \`type Estado = "activo" | "inactivo"\`)?',
        options: [
          'Los type aliases permiten más valores',
          'Los enums generan código JavaScript real, los type aliases desaparecen al compilar',
          'Los type aliases son más seguros que los enums',
          'Los enums no se pueden usar en funciones',
        ],
        correctAnswer:
          'Los enums generan código JavaScript real, los type aliases desaparecen al compilar',
        correctFeedback:
          'Correcto. Esta es una diferencia clave. Los enums se convierten en objetos JavaScript reales al compilar. Los type aliases son solo información para TypeScript y no generan código.',
        incorrectFeedback:
          'No es correcto. La diferencia fundamental es que los enums generan código JavaScript (un objeto con mapeo bidireccional). Los type aliases son solo para TypeScript y desaparecen al compilar.',
      },
      {
        question:
          'Si tienes \`enum Color { Rojo, Verde, Azul }\`, ¿qué devuelve \`Color[0]\`?',
        options: ['0', '"Rojo"', '"Color.Rojo"', 'undefined'],
        correctAnswer: '"Rojo"',
        correctFeedback:
          'Correcto. Los enums numéricos tienen mapeo bidireccional. \`Color.Rojo\` devuelve 0, y \`Color[0]\` devuelve "Rojo". Esto se llama reverse mapping.',
        incorrectFeedback:
          'No es correcto. Los enums numéricos tienen mapeo bidireccional: \`Color.Rojo\` es 0, pero también \`Color[0]\` es "Rojo". Este reverse mapping solo existe en enums numéricos, no en string enums.',
      },
      {
        question:
          '¿Para qué es útil usar un enum en lugar de números "mágicos" (0, 1, 2)?',
        options: [
          'Para que el código sea más lento',
          'Para que el código sea más legible — \`EstadoPedido.Enviado\` comunica más que el número 2',
          'Para que los números sean más grandes',
          'Solo es útil en aplicaciones muy grandes',
        ],
        correctAnswer:
          'Para que el código sea más legible — \`EstadoPedido.Enviado\` comunica más que el número 2',
        correctFeedback:
          'Correcto. Los "números mágicos" sin contexto son difíciles de entender. Un enum convierte esos números en nombres con significado, haciendo el código más legible y fácil de mantener.',
        incorrectFeedback:
          'No es correcto. La principal ventaja de los enums sobre los números mágicos es la legibilidad. \`EstadoPedido.Enviado\` es inmediatamente claro; el número 2 sin contexto no dice nada.',
      },
    ],
  },

  // ── Lección 97 ───────────────────────────────────────────────────────────
  {
    slug: 'numeric-enums',
    title: 'Numeric enums',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 97,
    description:
      'Aprende cómo funcionan los enums numéricos y qué JavaScript generan al compilar.',
    explanation: `Los **numeric enums** son el tipo de enum por defecto en TypeScript. Cada miembro tiene un valor numérico, comenzando en 0 si no se especifica otro inicio.

**Valores por defecto**

\`\`\`ts
enum Prioridad {
  Baja,     // 0
  Media,    // 1
  Alta,     // 2
  Crítica,  // 3
}
\`\`\`

**Valores personalizados**

Puedes asignar un valor inicial diferente:

\`\`\`ts
enum Puerto {
  HTTP = 80,
  HTTPS = 443,
  Dev = 3000,
}
\`\`\`

También puedes comenzar en un número específico:

\`\`\`ts
enum Version {
  V1 = 1,
  V2,  // 2
  V3,  // 3
}
\`\`\`

**Mapeo bidireccional**

Los numeric enums generan mapeo en ambas direcciones en el JavaScript compilado:

\`\`\`ts
enum Semaforo {
  Rojo = 1,
  Amarillo = 2,
  Verde = 3,
}

console.log(Semaforo.Rojo)     // → 1
console.log(Semaforo[1])       // → "Rojo"
console.log(Semaforo[Semaforo.Verde])  // → "Verde"
\`\`\`

**Problema: los valores numéricos son intercambiables**

Un problema con los numeric enums es que TypeScript acepta cualquier número donde espera el enum:

\`\`\`ts
enum Prioridad { Baja, Media, Alta }

function setPrioridad(p: Prioridad): void { ... }

setPrioridad(Prioridad.Alta)  // ✓
setPrioridad(2)               // ✓ (TypeScript no avisa) ← potencial bug
setPrioridad(99)              // ✓ (TypeScript no avisa) ← claramente incorrecto
\`\`\`

Esta permisividad es una razón por la que muchos prefieren string enums o union types.

**Usar enums con switch**

\`\`\`ts
enum EstadoConexion {
  Conectando,
  Conectado,
  Desconectado,
  Error,
}

function manejarEstado(estado: EstadoConexion): string {
  switch (estado) {
    case EstadoConexion.Conectando:   return 'Conectando...'
    case EstadoConexion.Conectado:    return 'Conectado ✓'
    case EstadoConexion.Desconectado: return 'Sin conexión'
    case EstadoConexion.Error:        return 'Error de conexión'
  }
}
\`\`\`

**Enums en tiempo de ejecución**

Puesto que generan código JavaScript, puedes usar enums en tiempo de ejecución:

\`\`\`ts
// Iterar sobre los valores
const nombres = Object.keys(EstadoConexion).filter((k) => isNaN(Number(k)))
console.log(nombres)  // → ['Conectando', 'Conectado', 'Desconectado', 'Error']
\`\`\``,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// ── Numeric enum básico ───────────────────────────────────────────────────

enum PrioridadTarea {
  Baja = 1,
  Media = 2,
  Alta = 3,
  Urgente = 4,
}

interface Tarea {
  titulo: string
  prioridad: PrioridadTarea
}

const tareas: Tarea[] = [
  { titulo: 'Responder emails',    prioridad: PrioridadTarea.Baja },
  { titulo: 'Entregar informe',    prioridad: PrioridadTarea.Alta },
  { titulo: 'Reunión con cliente', prioridad: PrioridadTarea.Urgente },
  { titulo: 'Organizar archivos',  prioridad: PrioridadTarea.Media },
]

// Ordenar por prioridad (mayor número = más urgente)
const ordenadas = [...tareas].sort((a, b) => b.prioridad - a.prioridad)

ordenadas.forEach((t) => {
  const nombre = PrioridadTarea[t.prioridad]  // mapeo inverso
  console.log(\`[\${t.prioridad}] \${nombre}: \${t.titulo}\`)
})
// → [4] Urgente: Reunión con cliente
// → [3] Alta: Entregar informe
// → [2] Media: Organizar archivos
// → [1] Baja: Responder emails

// ── Enum para códigos de error ────────────────────────────────────────────

enum CodigoError {
  OK = 0,
  NoAutorizado = 401,
  NoEncontrado = 404,
  ErrorInterno = 500,
}

function procesarCodigo(codigo: CodigoError): void {
  if (codigo === CodigoError.OK) {
    console.log('Operación exitosa')
    return
  }
  const nombre = CodigoError[codigo] ?? 'Desconocido'
  console.log(\`Error \${codigo}: \${nombre}\`)
}

procesarCodigo(CodigoError.OK)          // → Operación exitosa
procesarCodigo(CodigoError.NoEncontrado) // → Error 404: NoEncontrado

// ── Obtener todos los nombres del enum ────────────────────────────────────

const nombresEstados = Object.keys(PrioridadTarea)
  .filter((k) => isNaN(Number(k)))

console.log('Prioridades:', nombresEstados)
// → ['Baja', 'Media', 'Alta', 'Urgente']`,
    keyPoints: [
      'Los numeric enums asignan valores 0, 1, 2... por defecto; puedes cambiar el inicio asignando el primer valor.',
      'TypeScript genera código JavaScript con mapeo bidireccional para numeric enums.',
      'Un problema: TypeScript acepta números crudos donde espera un numeric enum, lo que puede generar bugs.',
      'Puedes usar el mapeo inverso para obtener el nombre de un miembro desde su valor numérico.',
      'Para iterar los nombres del enum, filtra las claves numéricas con \`isNaN(Number(k))\`.',
    ],
    exercise: {
      description:
        'Crea un enum \`NivelAcceso\` con valores numéricos: Público = 0, Registrado = 1, Premium = 2, Admin = 3. Crea una función \`tieneAcceso(nivelUsuario: NivelAcceso, nivelRequerido: NivelAcceso): boolean\` que devuelva true si el nivel del usuario es mayor o igual al requerido. Prueba con diferentes combinaciones.',
      hint: 'Como los enums son números, puedes compararlos directamente: \`nivelUsuario >= nivelRequerido\`. Los números mayores representan mayor acceso.',
    },
    quiz: [
      {
        question:
          '¿Cuál es el valor por defecto del tercer miembro de un enum numérico sin valores asignados?',
        options: ['1', '2', '3', '0'],
        correctAnswer: '2',
        correctFeedback:
          'Correcto. Sin asignación explícita, los miembros son 0, 1, 2, 3... El tercer miembro (índice 2) tiene valor 2.',
        incorrectFeedback:
          'No es correcto. Los enums numéricos empiezan en 0. El primer miembro es 0, el segundo 1, el tercero 2.',
      },
      {
        question:
          '¿Qué devuelve \`Semaforo[1]\` si \`enum Semaforo { Rojo = 1, Amarillo = 2, Verde = 3 }\`?',
        options: [
          '1',
          '"Semaforo.Rojo"',
          '"Rojo"',
          'undefined',
        ],
        correctAnswer: '"Rojo"',
        correctFeedback:
          'Correcto. Los numeric enums tienen mapeo bidireccional. \`Semaforo.Rojo\` devuelve 1, y \`Semaforo[1]\` devuelve "Rojo". Esto es el reverse mapping.',
        incorrectFeedback:
          'No es correcto. Los numeric enums generan mapeo bidireccional. \`Semaforo[1]\` devuelve "Rojo" — el nombre del miembro cuyo valor es 1.',
      },
      {
        question:
          '¿Cuál es una desventaja de los numeric enums comparados con string enums?',
        options: [
          'Los numeric enums no se pueden usar en switch',
          'TypeScript acepta cualquier número donde espera un numeric enum, permitiendo valores inválidos sin error',
          'Los numeric enums no generan código JavaScript',
          'Los numeric enums no tienen mapeo inverso',
        ],
        correctAnswer:
          'TypeScript acepta cualquier número donde espera un numeric enum, permitiendo valores inválidos sin error',
        correctFeedback:
          'Correcto. TypeScript es permisivo con numeric enums: acepta \`setPrioridad(99)\` aunque 99 no sea un miembro válido. Los string enums son más estrictos.',
        incorrectFeedback:
          'No es correcto. La desventaja principal de los numeric enums es que TypeScript acepta cualquier número en su lugar. \`function f(p: Prioridad) {}; f(999)\` compila sin error, lo que puede introducir bugs.',
      },
      {
        question:
          '¿Cómo obtienes todos los nombres (no los valores numéricos) de los miembros de un numeric enum?',
        options: [
          'Object.values(MiEnum)',
          'MiEnum.keys()',
          'Object.keys(MiEnum).filter(k => isNaN(Number(k)))',
          'Array.from(MiEnum)',
        ],
        correctAnswer:
          'Object.keys(MiEnum).filter(k => isNaN(Number(k)))',
        correctFeedback:
          'Correcto. Como los numeric enums tienen mapeo bidireccional, Object.keys devuelve tanto los nombres como los valores. Filtrando con \`isNaN(Number(k))\` obtienes solo los nombres.',
        incorrectFeedback:
          'No es correcto. Los numeric enums generan un objeto con claves tanto numéricas como de nombre. Para obtener solo los nombres, usa \`Object.keys(MiEnum).filter(k => isNaN(Number(k)))\`.',
      },
      {
        question:
          '¿Cuándo es apropiado usar un numeric enum con valores específicos como \`CodigoHTTP.OK = 200\`?',
        options: [
          'Nunca, siempre es mejor usar los números directamente',
          'Cuando los números tienen un significado estándar externo (como códigos HTTP) y quieres darles nombres descriptivos',
          'Solo cuando hay exactamente 3 valores',
          'Solo en aplicaciones de backend',
        ],
        correctAnswer:
          'Cuando los números tienen un significado estándar externo (como códigos HTTP) y quieres darles nombres descriptivos',
        correctFeedback:
          'Correcto. Usar \`CodigoHTTP.NotFound\` es más claro que usar el número 404 directamente. Los enums con valores específicos son ideales cuando los números tienen significado externo establecido.',
        incorrectFeedback:
          'No es correcto. Los numeric enums con valores específicos son muy útiles cuando los números tienen un significado estándar externo (códigos HTTP, prioridades de sistema, versiones de protocolo) y quieres reemplazar los números con nombres.',
      },
    ],
  },

  // ── Lección 98 ───────────────────────────────────────────────────────────
  {
    slug: 'string-enums',
    title: 'String enums',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 98,
    description:
      'Aprende a usar enums de texto para representar estados, roles o categorías.',
    explanation: `Los **string enums** son enums cuyos miembros tienen valores de string en lugar de números. Son más seguros y más legibles que los numeric enums en muchos casos.

**Sintaxis**

\`\`\`ts
enum Direccion {
  Arriba = 'ARRIBA',
  Abajo = 'ABAJO',
  Izquierda = 'IZQUIERDA',
  Derecha = 'DERECHA',
}
\`\`\`

Nota: en string enums, **todos** los miembros deben tener un valor asignado explícitamente (no hay auto-incremento).

**Ventajas de los string enums**

1. **Más legibles en depuración**: en la consola o en un log, ves "ARRIBA" en lugar de 0.
2. **Más estrictos**: TypeScript no acepta strings arbitrarios donde espera el enum.
3. **Sin reverse mapping**: no generan la tabla bidireccional, así que el código compilado es más pequeño.

\`\`\`ts
enum Rol {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Lector = 'READER',
}

// TypeScript NO acepta strings arbitrarios:
function asignarRol(rol: Rol): void { ... }

asignarRol(Rol.Admin)    // ✓
asignarRol('ADMIN')      // Error: string no es assignable to Rol
asignarRol('cualquier')  // Error
\`\`\`

**String enums en serialización**

Una ventaja práctica de los string enums es que son legibles cuando se serializan (como en JSON):

\`\`\`ts
enum EstadoPedido {
  Pendiente = 'pendiente',
  Enviado = 'enviado',
  Entregado = 'entregado',
}

interface Pedido {
  id: number
  estado: EstadoPedido
}

const pedido: Pedido = { id: 1, estado: EstadoPedido.Enviado }
console.log(JSON.stringify(pedido))
// → {"id":1,"estado":"enviado"}
// (legible, no un número misterioso como 2)
\`\`\`

**Sin reverse mapping**

A diferencia de los numeric enums, los string enums NO generan mapeo inverso:

\`\`\`ts
enum Color { Rojo = 'ROJO', Verde = 'VERDE' }

// Esto NO funciona con string enums:
console.log(Color['ROJO'])  // → undefined (no hay reverse mapping)

// Sí funciona:
console.log(Color.Rojo)     // → 'ROJO'
\`\`\`

**String enums para estados de aplicación**

Son ideales para representar estados en aplicaciones web:

\`\`\`ts
enum EstadoFormulario {
  Inactivo = 'idle',
  Enviando = 'submitting',
  Exito = 'success',
  Error = 'error',
}
\`\`\``,
    codeExample: `// ── archivo: roles.ts ────────────────────────────────────────────────────

// ── String enum para roles ────────────────────────────────────────────────

enum RolUsuario {
  Administrador = 'ADMIN',
  Editor = 'EDITOR',
  Colaborador = 'COLLABORATOR',
  Lector = 'READER',
}

interface Usuario {
  nombre: string
  rol: RolUsuario
}

// TypeScript es estricto: solo acepta miembros del enum
function tienePermisoDeEdicion(usuario: Usuario): boolean {
  return usuario.rol === RolUsuario.Administrador ||
         usuario.rol === RolUsuario.Editor
}

const usuarios: Usuario[] = [
  { nombre: 'Ana',  rol: RolUsuario.Administrador },
  { nombre: 'Luis', rol: RolUsuario.Editor },
  { nombre: 'Mia',  rol: RolUsuario.Lector },
]

usuarios.forEach((u) => {
  const puede = tienePermisoDeEdicion(u)
  console.log(\`\${u.nombre} (\${u.rol}): puede editar = \${puede}\`)
})
// → Ana (ADMIN): puede editar = true
// → Luis (EDITOR): puede editar = true
// → Mia (READER): puede editar = false

// ── String enum para estados de carga ────────────────────────────────────

enum EstadoCarga {
  Inactivo = 'idle',
  Cargando = 'loading',
  Exito = 'success',
  Error = 'error',
}

interface EstadoComponente {
  estado: EstadoCarga
  mensaje: string | null
}

function procesarEstado(ec: EstadoComponente): string {
  switch (ec.estado) {
    case EstadoCarga.Inactivo:  return '💤 Inactivo'
    case EstadoCarga.Cargando:  return '⏳ Cargando...'
    case EstadoCarga.Exito:     return \`✅ \${ec.mensaje ?? 'Completado'}\`
    case EstadoCarga.Error:     return \`❌ \${ec.mensaje ?? 'Error'}\`
  }
}

const estado: EstadoComponente = {
  estado: EstadoCarga.Exito,
  mensaje: '5 productos encontrados',
}

console.log(procesarEstado(estado))  // → ✅ 5 productos encontrados

// El valor string es visible en JSON
console.log(JSON.stringify({ estado: EstadoCarga.Exito }))
// → {"estado":"success"}`,
    keyPoints: [
      'Los string enums requieren valores asignados explícitamente — no hay auto-incremento.',
      'Son más estrictos que los numeric enums: TypeScript no acepta strings arbitrarios.',
      'Son más legibles en logs, consola y JSON serializado.',
      'No tienen reverse mapping — no puedes obtener el nombre del miembro desde su valor string.',
      'Son ideales para estados de UI, roles, categorías y cualquier valor que necesitas reconocer fácilmente.',
    ],
    exercise: {
      description:
        'Crea un string enum \`Moneda\` con: USD = "USD", EUR = "EUR", MXN = "MXN", COP = "COP". Crea una función \`formatearPrecio(cantidad: number, moneda: Moneda): string\` que devuelva el precio formateado con el símbolo correcto. USD = "$", EUR = "€", MXN = "MX$", COP = "COL$".',
      hint: 'Usa un switch o un objeto de mapeo para asociar cada Moneda con su símbolo. El parámetro moneda debe ser de tipo Moneda (el enum), no string.',
    },
    quiz: [
      {
        question:
          '¿Cuál es una diferencia clave entre string enums y numeric enums?',
        options: [
          'Los string enums son más lentos',
          'Los string enums no tienen reverse mapping y requieren valores explícitos en todos los miembros',
          'Los string enums no se pueden usar en switch',
          'Los string enums generan más código JavaScript',
        ],
        correctAnswer:
          'Los string enums no tienen reverse mapping y requieren valores explícitos en todos los miembros',
        correctFeedback:
          'Correcto. Los string enums no tienen reverse mapping (no puedes hacer \`Color["ROJO"]\` para obtener "Rojo"). Además, cada miembro debe tener un valor asignado explícitamente.',
        incorrectFeedback:
          'No es correcto. Las diferencias principales son: (1) los string enums requieren valores explícitos — no hay auto-incremento, (2) no tienen reverse mapping a diferencia de los numeric enums.',
      },
      {
        question:
          '¿Puede TypeScript asignar un string literal directamente donde espera un string enum?',
        options: [
          'Sí, si el string coincide con el valor del enum',
          'No, TypeScript solo acepta miembros del enum explícitamente',
          'Sí, siempre que el string sea de tipo string',
          'Depende de si usas strict mode',
        ],
        correctAnswer:
          'No, TypeScript solo acepta miembros del enum explícitamente',
        correctFeedback:
          'Correcto. Esta es una ventaja de los string enums sobre los union types: TypeScript no acepta \`asignarRol("ADMIN")\` aunque "ADMIN" sea el valor de \`Rol.Admin\`. Solo acepta \`Rol.Admin\`.',
        incorrectFeedback:
          'No es correcto. TypeScript es estricto con string enums: aunque el string "ADMIN" sea el valor de \`Rol.Admin\`, no puedes pasar "ADMIN" directamente. Solo acepta \`Rol.Admin\`. Esto previene strings arbitrarios.',
      },
      {
        question:
          '¿Por qué los string enums son más legibles en JSON que los numeric enums?',
        options: [
          'Porque JSON no puede representar números',
          'Porque el valor serializado es el string descriptivo (como "enviado") en lugar de un número sin contexto (como 2)',
          'Porque los string enums comprimen mejor',
          'No hay diferencia en JSON',
        ],
        correctAnswer:
          'Porque el valor serializado es el string descriptivo (como "enviado") en lugar de un número sin contexto (como 2)',
        correctFeedback:
          'Correcto. Cuando serializas un string enum a JSON, obtienes el string descriptivo. Con un numeric enum, obtendrías un número. Alguien que lee el JSON "estado: enviado" entiende inmediatamente; "estado: 2" no dice nada.',
        incorrectFeedback:
          'No es correcto. La ventaja es la legibilidad. \`"estado": "enviado"\` en JSON es inmediatamente comprensible. \`"estado": 2\` requiere saber que 2 significa "enviado" — ese contexto puede perderse.',
      },
      {
        question:
          '¿Qué devuelve \`RolUsuario["ADMIN"]\` si \`enum RolUsuario { Admin = "ADMIN" }\`?',
        options: ['"ADMIN"', '"Admin"', 'undefined', '0'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. Los string enums NO tienen reverse mapping. \`RolUsuario["ADMIN"]\` es undefined. Solo puedes acceder con \`RolUsuario.Admin\` para obtener "ADMIN".',
        incorrectFeedback:
          'No es correcto. Los string enums no tienen reverse mapping. A diferencia de los numeric enums, no puedes obtener el nombre del miembro desde su valor. \`RolUsuario["ADMIN"]\` es undefined.',
      },
      {
        question:
          '¿Cuándo es preferible usar un string enum sobre un numeric enum?',
        options: [
          'Cuando los valores necesitan ser legibles en logs, consola o al serializar a JSON',
          'Cuando necesitas operar matemáticamente con los valores',
          'Cuando solo hay dos posibles valores',
          'Los string enums son siempre mejores que los numeric enums',
        ],
        correctAnswer:
          'Cuando los valores necesitan ser legibles en logs, consola o al serializar a JSON',
        correctFeedback:
          'Correcto. Los string enums son preferibles cuando el valor en sí mismo debe ser legible: en logs, bases de datos, respuestas de API, o cualquier lugar donde el valor sea visible para humanos.',
        incorrectFeedback:
          'No es correcto. La principal ventaja de los string enums es la legibilidad del valor. Son preferibles cuando los valores se mostrarán en logs, se serializarán a JSON, o necesitan ser interpretados por humanos o sistemas externos.',
      },
    ],
  },

  // ── Lección 99 ───────────────────────────────────────────────────────────
  {
    slug: 'cuando-usar-enums',
    title: 'Cuándo usar enums',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 99,
    description:
      'Aprende en qué casos un enum puede hacer tu código más claro y cuándo puede ser innecesario.',
    explanation: `Los enums no son siempre la mejor herramienta. Saber cuándo usarlos y cuándo preferir alternativas es importante para escribir código claro y mantenible.

**Cuándo SÍ usar enums**

1. **Valores relacionados con comportamiento en tiempo de ejecución**

Si necesitas iterar sobre los valores del enum, obtener su nombre desde el valor, o hacer algo dinámico con el enum, los enums son ideales porque existen en JavaScript:

\`\`\`ts
enum Permiso {
  Leer = 'READ',
  Escribir = 'WRITE',
  Eliminar = 'DELETE',
}

// Iterar en tiempo de ejecución
const permisos = Object.values(Permiso)
// → ['READ', 'WRITE', 'DELETE']
\`\`\`

2. **Valores numéricos con significado de posición o rango**

\`\`\`ts
enum Prioridad {
  Baja = 1,
  Media = 2,
  Alta = 3,
}

// Puedes ordenar, comparar, hacer cálculos
const urgente = miTarea.prioridad >= Prioridad.Alta
\`\`\`

3. **Compatibilidad con sistemas que esperan enums específicos**

Algunos frameworks o protocolos usan enums numéricos específicos.

**Cuándo NO usar enums (preferir alternativas)**

1. **Cuando el conjunto de valores es pequeño y estático**

Un union type es más simple:

\`\`\`ts
// Con enum (más código, más peso)
enum Estado { Activo = 'activo', Inactivo = 'inactivo' }

// Con union type (más simple, sin código JS extra)
type Estado = 'activo' | 'inactivo'
\`\`\`

2. **Cuando los valores son strings y no necesitas comportamiento en runtime**

\`\`\`ts
// Esto es innecesariamente complejo para algo simple:
enum Tema { Oscuro = 'dark', Claro = 'light' }

// Esto es suficiente y más simple:
type Tema = 'dark' | 'light'
\`\`\`

3. **Cuando quieres que el código sea más pequeño**

Los enums agregan código JavaScript. Los type aliases y union types no agregan nada.

**La regla simple**

> Si no necesitas iterar sobre los valores ni acceder a ellos en tiempo de ejecución, un union type es generalmente más simple que un enum.`,
    codeExample: `// ── archivo: tipos.ts ────────────────────────────────────────────────────

// ── Cuándo SÍ usar enum ───────────────────────────────────────────────────

// ✓ Necesitas iterar en runtime, obtener nombres, o acceder dinámicamente
enum PermisoCRUD {
  Crear = 'CREATE',
  Leer = 'READ',
  Actualizar = 'UPDATE',
  Eliminar = 'DELETE',
}

function obtenerPermisosPorRol(rol: string): PermisoCRUD[] {
  if (rol === 'admin') return Object.values(PermisoCRUD)
  if (rol === 'editor') return [PermisoCRUD.Crear, PermisoCRUD.Leer, PermisoCRUD.Actualizar]
  return [PermisoCRUD.Leer]
}

console.log(obtenerPermisosPorRol('editor'))
// → ['CREATE', 'READ', 'UPDATE']

// ✓ Valores numéricos con orden/rango
enum NivelAlerta {
  Info = 1,
  Advertencia = 2,
  Error = 3,
  Critico = 4,
}

function esAlertaGrave(nivel: NivelAlerta): boolean {
  return nivel >= NivelAlerta.Error
}

// ── Cuándo NO usar enum (mejor alternativa) ───────────────────────────────

// ✗ Para valores simples que no necesitas en runtime:
// enum Tema { Oscuro = 'dark', Claro = 'light' }  // innecesario

// ✓ Mejor con type alias:
type Tema = 'dark' | 'light'

// ✗ Para estados simples de UI:
// enum EstadoCarga { Cargando = 'loading', Exito = 'success', Error = 'error' }

// ✓ Mejor con type alias:
type EstadoCarga = 'loading' | 'success' | 'error' | 'idle'

// ── Usando las alternativas ───────────────────────────────────────────────

function renderTema(tema: Tema): string {
  return tema === 'dark' ? '🌙 Oscuro' : '☀️ Claro'
}

function mostrarEstado(estado: EstadoCarga): string {
  const mensajes: Record<EstadoCarga, string> = {
    loading: 'Cargando...',
    success: 'Completado',
    error: 'Error al cargar',
    idle: 'En espera',
  }
  return mensajes[estado]
}

console.log(renderTema('dark'))          // → 🌙 Oscuro
console.log(mostrarEstado('success'))    // → Completado`,
    keyPoints: [
      'Usa enums cuando necesites iterar sobre los valores o acceder a ellos dinámicamente en tiempo de ejecución.',
      'Usa enums numéricos cuando los valores tengan un orden o rango significativo.',
      'Prefiere union types para conjuntos de valores simples que no necesitas en runtime.',
      'Los enums agregan código JavaScript; los union types no.',
      'Regla simple: si no necesitas el enum en runtime, considera un union type primero.',
    ],
    exercise: {
      description:
        'Decide qué usar para cada caso y justifica: (1) Los estados posibles de un pedido en una app de comercio: pendiente, procesando, enviado, entregado, cancelado. (2) Los niveles de suscripción con acceso creciente: free, basic, pro, enterprise donde cada nivel incluye las funciones del anterior. (3) Los idiomas disponibles en una configuración simple: es, en, fr.',
      hint: 'Caso 1: union type (valores estáticos, no necesitas iterar). Caso 2: enum numérico (necesitas comparar rangos: \`nivel >= Nivel.Pro\`). Caso 3: union type (simple, sin comportamiento en runtime).',
    },
    quiz: [
      {
        question:
          '¿En qué caso es más apropiado usar un enum en lugar de un union type?',
        options: [
          'Para representar dos posibles valores como activo/inactivo',
          'Cuando necesitas iterar sobre todos los valores posibles en tiempo de ejecución',
          'Cuando los valores son strings cortos',
          'Cuando solo usas TypeScript, no JavaScript',
        ],
        correctAnswer:
          'Cuando necesitas iterar sobre todos los valores posibles en tiempo de ejecución',
        correctFeedback:
          'Correcto. Los enums existen en JavaScript en tiempo de ejecución. Puedes usar \`Object.values(MiEnum)\` para obtener todos los valores. Los union types no generan código, así que no puedes iterarlos.',
        incorrectFeedback:
          'No es correcto. La principal razón para elegir enum sobre union type es cuando necesitas el valor en tiempo de ejecución: iterar, obtener todos los miembros, hacer selects dinámicos, etc.',
      },
      {
        question:
          '¿Cuál es la desventaja de usar enums para todo?',
        options: [
          'Los enums son más difíciles de leer',
          'Los enums agregan código JavaScript real que aumenta el tamaño del bundle, mientras que los union types son borrados al compilar',
          'Los enums no permiten narrowing',
          'Los enums no se pueden usar en interfaces',
        ],
        correctAnswer:
          'Los enums agregan código JavaScript real que aumenta el tamaño del bundle, mientras que los union types son borrados al compilar',
        correctFeedback:
          'Correcto. Cada enum genera código JavaScript (la función de inicialización del objeto). En aplicaciones con muchos enums innecesarios, esto puede aumentar el tamaño del código final sin beneficio.',
        incorrectFeedback:
          'No es correcto. La desventaja de usar enums donde no se necesitan es el tamaño: cada enum genera código JavaScript extra. Los type aliases y union types no agregan nada al JavaScript compilado.',
      },
      {
        question:
          '¿Qué ventaja tiene un enum numérico para representar niveles de acceso como \`Publico=0, Registrado=1, Premium=2, Admin=3\`?',
        options: [
          'Se pueden serializar en JSON',
          'Permiten comparaciones de rango: \`usuario.nivel >= Nivel.Premium\` verifica acceso de forma natural',
          'Son más seguros que los string enums',
          'No tienen ventaja sobre los string enums',
        ],
        correctAnswer:
          'Permiten comparaciones de rango: \`usuario.nivel >= Nivel.Premium\` verifica acceso de forma natural',
        correctFeedback:
          'Correcto. Los numeric enums son perfectos cuando hay un orden o jerarquía. \`nivel >= Nivel.Premium\` es más natural que comparar múltiples strings.',
        incorrectFeedback:
          'No es correcto. La ventaja clave de los numeric enums para niveles de acceso es la posibilidad de comparaciones de rango. \`if (nivel >= Nivel.Premium)\` es más expresivo que verificar múltiples strings.',
      },
      {
        question:
          '¿Cuál de estas situaciones NO justifica usar un enum?',
        options: [
          'Necesitas iterar sobre todos los roles disponibles para mostrar en un select',
          'Quieres representar el color del tema de la UI como "dark" o "light"',
          'Tienes niveles de alerta con prioridad numérica',
          'Necesitas mapear valores numéricos de una API a nombres descriptivos',
        ],
        correctAnswer:
          'Quieres representar el color del tema de la UI como "dark" o "light"',
        correctFeedback:
          'Correcto. Para dos valores simples como "dark" | "light", un union type \`type Tema = "dark" | "light"\` es más simple y no agrega código JavaScript innecesario.',
        incorrectFeedback:
          'No es correcto. Para dos valores estáticos como "dark" | "light" que no necesitas iterar ni manipular en runtime, un union type es más simple y elegante que un enum.',
      },
      {
        question:
          '¿Qué sucede con los union types cuando TypeScript compila a JavaScript?',
        options: [
          'Se convierten en objetos JavaScript',
          'Se convierten en enums de JavaScript',
          'Desaparecen completamente — no generan ningún código',
          'Se convierten en constantes de string',
        ],
        correctAnswer: 'Desaparecen completamente — no generan ningún código',
        correctFeedback:
          'Correcto. Los union types son solo información para TypeScript. Al compilar, desaparecen. \`type Estado = "activo" | "inactivo"\` no genera ni una sola línea de JavaScript.',
        incorrectFeedback:
          'No es correcto. Los union types (como todos los tipos de TypeScript) son borrados al compilar. Solo existen durante el desarrollo. Esto los hace preferibles a los enums cuando no necesitas el valor en runtime.',
      },
    ],
  },

  // ── Lección 100 ──────────────────────────────────────────────────────────
  {
    slug: 'alternativas-union-types',
    title: 'Alternativas con union types',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 100,
    description:
      'Aprende a representar valores limitados usando union types de strings en lugar de enums.',
    explanation: `Los **union types de strings literales** son la alternativa más popular a los enums en TypeScript moderno. Son simples, claros y no generan código JavaScript extra.

**Comparación directa**

\`\`\`ts
// Con enum
enum EstadoPedido {
  Pendiente = 'pendiente',
  Enviado = 'enviado',
  Entregado = 'entregado',
}

// Con union type
type EstadoPedido = 'pendiente' | 'enviado' | 'entregado'
\`\`\`

Ambos hacen lo mismo desde la perspectiva del tipado. La diferencia es que el enum genera código JavaScript y el union type no.

**Usar union types en funciones**

\`\`\`ts
type Rol = 'admin' | 'editor' | 'lector'

function tienePermiso(rol: Rol, accion: string): boolean {
  if (rol === 'admin') return true
  if (rol === 'editor') return accion !== 'eliminar'
  return accion === 'leer'
}
\`\`\`

**Union types en objetos**

\`\`\`ts
type ColorTema = 'rojo' | 'azul' | 'verde' | 'naranja'

interface Configuracion {
  tema: ColorTema
  idioma: 'es' | 'en' | 'fr'
  modoOscuro: boolean
}
\`\`\`

**Ventajas de los union types sobre enums**

1. **Sin código extra**: no generan JavaScript.
2. **Más simples de escribir**: no necesitas declarar un bloque enum separado.
3. **Compatibles con JSON**: puedes asignar directamente el string.
4. **Intellisense igual de bueno**: TypeScript te sugiere los valores igual que con enums.

\`\`\`ts
// Con union type, TypeScript sugiere los valores válidos
const config: Configuracion = {
  tema: 'rojo',     // TypeScript sugiere los valores del union
  idioma: 'es',
  modoOscuro: true,
}
\`\`\`

**Limitación de los union types**

No puedes hacer lo siguiente con union types (requeriría un enum o un objeto const):

\`\`\`ts
type Color = 'rojo' | 'verde' | 'azul'

// Esto NO funciona — no puedes iterar un union type en runtime
const colores = Object.values(Color)  // Error: Color no es un valor, es un tipo
\`\`\`

Para ese caso, usa un objeto con \`as const\` o un enum.

**Narrowing con union types**

\`\`\`ts
type ResultadoBusqueda = 'encontrado' | 'no_encontrado' | 'error'

function manejar(resultado: ResultadoBusqueda): void {
  if (resultado === 'encontrado') { ... }
  else if (resultado === 'no_encontrado') { ... }
  else { ... }  // TypeScript sabe: solo puede ser 'error'
}
\`\`\``,
    codeExample: `// ── archivo: tipos.ts ────────────────────────────────────────────────────

// ── Union types en lugar de enums ─────────────────────────────────────────

type EstadoTarea = 'pendiente' | 'en_progreso' | 'completada' | 'cancelada'
type PrioridadTarea = 'baja' | 'media' | 'alta' | 'urgente'
type CategoríaTarea = 'trabajo' | 'personal' | 'estudio' | 'salud'

interface Tarea {
  id: number
  titulo: string
  estado: EstadoTarea
  prioridad: PrioridadTarea
  categoria: CategoríaTarea
}

// ── Funciones con union types ─────────────────────────────────────────────

function obtenerIconoPrioridad(p: PrioridadTarea): string {
  const iconos: Record<PrioridadTarea, string> = {
    baja: '🟢',
    media: '🟡',
    alta: '🟠',
    urgente: '🔴',
  }
  return iconos[p]
}

function filtrarPorEstado(tareas: Tarea[], estado: EstadoTarea): Tarea[] {
  return tareas.filter((t) => t.estado === estado)
}

function estaActiva(tarea: Tarea): boolean {
  return tarea.estado === 'pendiente' || tarea.estado === 'en_progreso'
}

// ── Ejemplo de uso ────────────────────────────────────────────────────────

const tareas: Tarea[] = [
  { id: 1, titulo: 'Estudiar TypeScript', estado: 'en_progreso', prioridad: 'alta', categoria: 'estudio' },
  { id: 2, titulo: 'Ir al gimnasio',     estado: 'pendiente',   prioridad: 'media', categoria: 'salud' },
  { id: 3, titulo: 'Hacer informe',       estado: 'completada',  prioridad: 'urgente', categoria: 'trabajo' },
]

const activas = tareas.filter(estaActiva)
console.log('Tareas activas:', activas.length)  // → 2

activas.forEach((t) => {
  console.log(\`\${obtenerIconoPrioridad(t.prioridad)} \${t.titulo}\`)
})
// → 🟠 Estudiar TypeScript
// → 🟡 Ir al gimnasio

// ── El objeto Record como lookup table ───────────────────────────────────

type Moneda = 'USD' | 'EUR' | 'MXN'

const simbolos: Record<Moneda, string> = {
  USD: '$',
  EUR: '€',
  MXN: 'MX$',
}

function formatear(cantidad: number, moneda: Moneda): string {
  return \`\${simbolos[moneda]}\${cantidad.toFixed(2)}\`
}

console.log(formatear(100, 'EUR'))  // → €100.00
console.log(formatear(1500, 'MXN')) // → MX$1500.00`,
    keyPoints: [
      'Los union types de strings literales son la alternativa más simple a los string enums.',
      'No generan código JavaScript extra, son fáciles de escribir y TypeScript los entiende perfectamente.',
      'Para mapear valores a datos, usa \`Record<UnionType, Dato>\` como tabla de búsqueda.',
      'La limitación: no puedes iterar un union type en runtime — para eso necesitas un objeto const o un enum.',
      'TypeScript sugiere los valores del union con autocompletado igual que con enums.',
    ],
    exercise: {
      description:
        'Reescribe este código usando union types en lugar del enum, manteniendo el mismo comportamiento:\n\`\`\`ts\nenum TipoNotificacion {\n  Info = "info",\n  Advertencia = "warning",\n  Error = "error",\n  Exito = "success"\n}\nfunction obtenerColor(tipo: TipoNotificacion): string { ... }\n\`\`\`',
      hint: 'Cambia \`enum TipoNotificacion {...}\` por \`type TipoNotificacion = "info" | "warning" | "error" | "success"\`. La función permanece igual, solo cambia el tipo del parámetro.',
    },
    quiz: [
      {
        question:
          '¿Cuál es la ventaja principal de usar \`type Estado = "activo" | "inactivo"\` en lugar de un string enum?',
        options: [
          'Los union types son más rápidos en tiempo de ejecución',
          'Los union types no generan código JavaScript extra y son más simples de escribir',
          'Los union types tienen más valores posibles',
          'Los union types permiten narrowing y los enums no',
        ],
        correctAnswer:
          'Los union types no generan código JavaScript extra y son más simples de escribir',
        correctFeedback:
          'Correcto. Los union types son información de tipo pura que desaparece al compilar. No agregan ni un byte al JavaScript final, y son más simples de declarar que un enum.',
        incorrectFeedback:
          'No es correcto. La ventaja principal es que los union types no generan código JavaScript. Son solo información de tipo que se borra al compilar, haciendo el bundle más pequeño.',
      },
      {
        question:
          '¿Puede TypeScript inferir el autocompletado de valores para \`type Rol = "admin" | "editor" | "lector"\` de la misma forma que con enums?',
        options: [
          'No, solo los enums tienen autocompletado en IDEs',
          'Sí, TypeScript sugiere los valores del union type en el editor',
          'Solo en VS Code, no en otros editores',
          'Solo si usas tsconfig con strict: true',
        ],
        correctAnswer:
          'Sí, TypeScript sugiere los valores del union type en el editor',
        correctFeedback:
          'Correcto. TypeScript (y los language servers) ofrecen autocompletado para union types igual que para enums. Cuando escribes \`const r: Rol = "\`, TypeScript sugiere "admin", "editor", "lector".',
        incorrectFeedback:
          'No es correcto. TypeScript ofrece autocompletado para union types igual que para enums. Cuando asignas un valor a una variable tipada como union type, el editor sugiere los valores válidos.',
      },
      {
        question:
          '¿Cuál es la limitación de los union types comparados con los enums?',
        options: [
          'Los union types no permiten narrowing',
          'Los union types no se pueden usar en interfaces',
          'No puedes iterar los valores de un union type en tiempo de ejecución',
          'Los union types solo funcionan con strings',
        ],
        correctAnswer:
          'No puedes iterar los valores de un union type en tiempo de ejecución',
        correctFeedback:
          'Correcto. \`Object.values(MiUnionType)\` no funciona porque los union types no existen en JavaScript. Para iterar valores, necesitas un array, un objeto const, o un enum.',
        incorrectFeedback:
          'No es correcto. La limitación principal es que los union types no existen en runtime. No puedes iterar sobre ellos dinámicamente. Para eso necesitas un arreglo de los valores o un enum.',
      },
      {
        question:
          '¿Qué es un \`Record<UnionType, Dato>\` y para qué se usa?',
        options: [
          'Es un array de pares clave-valor',
          'Es un tipo de objeto donde cada clave es uno de los valores del union type, garantizando que están todos los casos cubiertos',
          'Es una función de transformación',
          'Es lo mismo que Map<K, V>',
        ],
        correctAnswer:
          'Es un tipo de objeto donde cada clave es uno de los valores del union type, garantizando que están todos los casos cubiertos',
        correctFeedback:
          'Correcto. \`Record<"a" | "b" | "c", string>\` es un objeto que debe tener exactamente las claves "a", "b" y "c". TypeScript verifica que todos los casos estén cubiertos.',
        incorrectFeedback:
          'No es correcto. \`Record<K, V>\` crea un tipo de objeto donde las claves son K y los valores son V. Con union types como K, TypeScript verifica que todas las claves del union estén presentes en el objeto.',
      },
      {
        question:
          '¿Qué tipo de valor puede contener un union type literal?',
        options: [
          'Solo strings',
          'Solo numbers',
          'Strings, numbers y booleanos pueden mezclarse en un union literal',
          'Solo null y undefined',
        ],
        correctAnswer:
          'Strings, numbers y booleanos pueden mezclarse en un union literal',
        correctFeedback:
          'Correcto. Un union literal puede contener cualquier combinación de strings, numbers o booleanos literales: \`type Codigo = "ok" | "error" | 200 | 404 | false\`.',
        incorrectFeedback:
          'No es correcto. Los union types pueden contener cualquier combinación de literales: \`"activo" | "inactivo"\`, \`1 | 2 | 3\`, \`"ok" | 200\`, etc. No están limitados a un solo tipo.',
      },
    ],
  },

  // ── Lección 101 ──────────────────────────────────────────────────────────
  {
    slug: 'objetos-as-const',
    title: 'Alternativas con objetos as const',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 101,
    description:
      'Aprende a usar objetos con as const como alternativa moderna para representar constantes tipadas.',
    explanation: `Los objetos con \`as const\` son una alternativa moderna y elegante a los enums. Combinan las ventajas de tener un objeto con las ventajas de los tipos estrictos.

**¿Qué hace as const?**

\`as const\` le dice a TypeScript que trate un objeto como completamente inmutable (readonly), y que infiera el tipo más específico posible para cada valor:

\`\`\`ts
// Sin as const: TypeScript infiere tipos amplios
const Temas = {
  Oscuro: 'dark',   // string
  Claro: 'light',  // string
}

// Con as const: TypeScript infiere tipos literales
const Temas = {
  Oscuro: 'dark',   // 'dark' (literal)
  Claro: 'light',  // 'light' (literal)
} as const
\`\`\`

**El patrón completo de objeto const**

\`\`\`ts
const Estado = {
  Pendiente: 'pendiente',
  EnProgreso: 'en_progreso',
  Completado: 'completado',
} as const

// Extraer el tipo de los valores
type Estado = typeof Estado[keyof typeof Estado]
// → 'pendiente' | 'en_progreso' | 'completado'
\`\`\`

**Desglosando \`typeof Estado[keyof typeof Estado]\`**

1. \`typeof Estado\` — el tipo del objeto: \`{ Pendiente: 'pendiente', EnProgreso: 'en_progreso', ... }\`
2. \`keyof typeof Estado\` — las claves: \`'Pendiente' | 'EnProgreso' | 'Completado'\`
3. \`typeof Estado[keyof typeof Estado]\` — los valores: \`'pendiente' | 'en_progreso' | 'completado'\`

**Ventajas sobre los enums**

1. **Puedes iterar los valores en runtime**: \`Object.values(Estado)\`.
2. **Es JavaScript nativo**: no hay sintaxis especial de TypeScript.
3. **Tipos estrictos**: los valores son literales, no strings amplios.
4. **Compatible con JSON**.

**Uso en funciones**

\`\`\`ts
const Rol = {
  Admin: 'ADMIN',
  Editor: 'EDITOR',
  Lector: 'READER',
} as const

type Rol = typeof Rol[keyof typeof Rol]

function asignarRol(rol: Rol): void {
  console.log('Rol asignado:', rol)
}

asignarRol(Rol.Admin)    // ✓
asignarRol('ADMIN')      // ✓ (a diferencia de enums, acepta el string directo)
asignarRol('cualquier')  // Error: no es un valor válido
\`\`\`

**Diferencia con enum: acepta strings directos**

Con un string enum, \`asignarRol('ADMIN')\` da error aunque sea el valor correcto. Con un objeto const + tipo extraído, sí se acepta. Esta es una diferencia importante según el nivel de restricción que necesites.`,
    codeExample: `// ── archivo: tipos.ts ────────────────────────────────────────────────────

// ── Objeto as const — el patrón completo ─────────────────────────────────

const Permiso = {
  Leer: 'READ',
  Escribir: 'WRITE',
  Eliminar: 'DELETE',
  Admin: 'ADMIN',
} as const

// Extraer el tipo de los valores
type Permiso = typeof Permiso[keyof typeof Permiso]
// → 'READ' | 'WRITE' | 'DELETE' | 'ADMIN'

// ── Usar el tipo extraído ─────────────────────────────────────────────────

interface ConfigRol {
  nombre: string
  permisos: Permiso[]
}

const roles: ConfigRol[] = [
  {
    nombre: 'Administrador',
    permisos: [Permiso.Leer, Permiso.Escribir, Permiso.Eliminar, Permiso.Admin],
  },
  {
    nombre: 'Editor',
    permisos: [Permiso.Leer, Permiso.Escribir],
  },
  {
    nombre: 'Visitante',
    permisos: [Permiso.Leer],
  },
]

function tienePermiso(permisos: Permiso[], accion: Permiso): boolean {
  return permisos.includes(accion)
}

const admin = roles[0]
console.log(tienePermiso(admin.permisos, Permiso.Eliminar))  // → true
console.log(tienePermiso(roles[2].permisos, Permiso.Escribir)) // → false

// ── Iterar el objeto (ventaja sobre union types) ───────────────────────────

const todosLosPermisos = Object.values(Permiso)
console.log('Permisos disponibles:', todosLosPermisos)
// → ['READ', 'WRITE', 'DELETE', 'ADMIN']

// ── Objeto const como colección de constantes de UI ──────────────────────

const ColorTema = {
  Primario: '#6366f1',
  Secundario: '#8b5cf6',
  Exito: '#22c55e',
  Error: '#ef4444',
  Advertencia: '#f59e0b',
} as const

type ColorTema = typeof ColorTema[keyof typeof ColorTema]

function obtenerColor(tipo: keyof typeof ColorTema): string {
  return ColorTema[tipo]
}

console.log(obtenerColor('Exito'))    // → #22c55e
console.log(obtenerColor('Error'))    // → #ef4444`,
    keyPoints: [
      '\`as const\` hace que TypeScript infiera literales específicos en lugar de tipos amplios.',
      'El patrón \`typeof Objeto[keyof typeof Objeto]\` extrae el tipo union de los valores del objeto.',
      'Los objetos as const se pueden iterar con Object.values() — ventaja sobre los union types.',
      'A diferencia de los string enums, aceptan el string directo como valor válido.',
      'Es JavaScript nativo — no hay sintaxis especial de TypeScript, funciona en cualquier runtime.',
    ],
    exercise: {
      description:
        'Crea un objeto \`const Idioma = { Español: "es", Inglés: "en", Francés: "fr", Alemán: "de" } as const\`. Extrae el tipo \`Idioma\` de sus valores. Escribe una función \`obtenerNombreIdioma(codigo: Idioma): string\` que devuelva el nombre completo del idioma. Usa el objeto para iterar y mostrar todos los idiomas disponibles.',
      hint: 'Usa \`type Idioma = typeof Idioma[keyof typeof Idioma]\` para extraer el union type. Para el mapeo código→nombre, puedes crear otro objeto o un switch. Para listar todos, usa \`Object.values(Idioma)\`.',
    },
    quiz: [
      {
        question: '¿Qué hace \`as const\` en un objeto de TypeScript?',
        options: [
          'Hace que el objeto sea inmutable en tiempo de ejecución',
          'Hace que TypeScript infiera tipos literales específicos para los valores y marca todo como readonly',
          'Convierte el objeto en un enum',
          'Hace que el objeto no se pueda exportar',
        ],
        correctAnswer:
          'Hace que TypeScript infiera tipos literales específicos para los valores y marca todo como readonly',
        correctFeedback:
          'Correcto. \`as const\` le dice a TypeScript: "trata estos valores como literales, no como strings genéricos". \`{ color: "rojo" } as const\` tiene tipo \`{ readonly color: "rojo" }\`, no \`{ color: string }\`.',
        incorrectFeedback:
          'No es correcto. \`as const\` es una instrucción para TypeScript que hace que infiera tipos literales (estrechos) en lugar de tipos amplios, y marca las propiedades como readonly. No afecta la ejecución de JavaScript.',
      },
      {
        question:
          '¿Qué tipo resulta de \`typeof Objeto[keyof typeof Objeto]\` para \`{ A: "x", B: "y" } as const\`?',
        options: [
          'string',
          '"x" | "y"',
          '"A" | "B"',
          '{ A: "x", B: "y" }',
        ],
        correctAnswer: '"x" | "y"',
        correctFeedback:
          'Correcto. \`keyof typeof Objeto\` da \`"A" | "B"\`. Indexar el tipo del objeto con esas claves da los valores: \`"x" | "y"\`.',
        incorrectFeedback:
          'No es correcto. \`typeof Objeto\` es el tipo del objeto. \`keyof typeof Objeto\` son las claves ("A" | "B"). Indexar con las claves (\`Objeto["A" | "B"]\`) da los valores: \`"x" | "y"\`.',
      },
      {
        question:
          '¿Cuál es una ventaja de los objetos as const sobre los union types puros?',
        options: [
          'Son más rápidos',
          'Los valores del objeto existen en runtime y se pueden iterar con Object.values()',
          'No necesitan un type alias separado',
          'Son más estrictos que los enums',
        ],
        correctAnswer:
          'Los valores del objeto existen en runtime y se pueden iterar con Object.values()',
        correctFeedback:
          'Correcto. A diferencia de un union type puro (\`type Estado = "a" | "b"\`), un objeto const existe en runtime. Puedes hacer \`Object.values(Estado)\` para obtener todos los valores.',
        incorrectFeedback:
          'No es correcto. La ventaja sobre los union types es que el objeto existe en runtime. Puedes iterar sus valores, usarlos en selects dinámicos, etc. Los union types no existen en JavaScript.',
      },
      {
        question:
          '¿Qué diferencia hay entre un string enum y un objeto const al asignar el string directamente?',
        options: [
          'No hay diferencia',
          'Con string enum, \`f("ADMIN")\` da error; con tipo extraído de objeto const, \`f("ADMIN")\` es válido',
          'Con objeto const, \`f("ADMIN")\` da error; con enum, es válido',
          'Ambos aceptan strings arbitrarios',
        ],
        correctAnswer:
          'Con string enum, \`f("ADMIN")\` da error; con tipo extraído de objeto const, \`f("ADMIN")\` es válido',
        correctFeedback:
          'Correcto. Los string enums son más restrictivos: aunque "ADMIN" sea el valor de \`Rol.Admin\`, TypeScript no acepta el string directamente. Con tipos extraídos de objetos const, el string literal sí es válido.',
        incorrectFeedback:
          'No es correcto. Los string enums son más cerrados: \`f("ADMIN")\` da error aunque sea el valor correcto. Con \`type Rol = typeof Roles[keyof typeof Roles]\`, \`f("ADMIN")\` sí es válido porque "ADMIN" es parte del union type resultante.',
      },
      {
        question:
          '¿Cuándo es preferible usar un objeto \`as const\` sobre un enum?',
        options: [
          'Cuando necesitas reverse mapping de número a nombre',
          'Cuando quieres JavaScript nativo sin la sintaxis especial de enums, pero también poder iterar los valores',
          'Cuando los valores deben ser números',
          'Cuando el objeto tiene más de 10 propiedades',
        ],
        correctAnswer:
          'Cuando quieres JavaScript nativo sin la sintaxis especial de enums, pero también poder iterar los valores',
        correctFeedback:
          'Correcto. El objeto const es JavaScript puro — funciona sin ninguna característica especial de TypeScript. Y como el objeto existe en runtime, puedes iterar sus valores a diferencia de los union types.',
        incorrectFeedback:
          'No es correcto. El objeto as const es preferible cuando quieres lo mejor de dos mundos: el tipo seguro (gracias a \`as const\`) y la capacidad de iterar en runtime (gracias a que es un objeto JavaScript real), sin la sintaxis especial de los enums.',
      },
    ],
  },

  // ── Lección 102 ──────────────────────────────────────────────────────────
  {
    slug: 'enums-vs-unions-as-const',
    title: 'Enums vs union types vs as const',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 102,
    description:
      'Compara enums, union types y objetos as const para elegir la opción más adecuada según el caso.',
    explanation: `Las tres opciones tienen sus ventajas. Compararlas lado a lado ayuda a elegir la correcta para cada situación.

**Tabla comparativa**

| Característica | Enum | Union type | Objeto as const |
|---|---|---|---|
| Genera código JS | ✓ Sí | ✗ No | ✓ Sí (mínimo) |
| Iterable en runtime | ✓ Sí | ✗ No | ✓ Sí |
| Reverse mapping | ✓ Solo numérico | ✗ No | ✗ No |
| Acepta string directo | ✗ No (string enum) | ✓ Sí | ✓ Sí |
| Sintaxis JS nativa | ✗ No (TypeScript) | ✓ Sí | ✓ Sí |
| Autocompletado IDE | ✓ Sí | ✓ Sí | ✓ Sí |

**Cuándo usar cada uno**

**Union type**:
- Conjunto pequeño de valores estáticos que no necesitas en runtime.
- Cuando la simplicidad importa.
- Cuando el código compilado debe ser mínimo.

\`\`\`ts
type Tema = 'dark' | 'light'
type Idioma = 'es' | 'en' | 'fr'
\`\`\`

**Objeto as const**:
- Cuando necesitas iterar los valores en runtime.
- Cuando quieres JavaScript nativo sin sintaxis especial.
- Cuando tienes un grupo de constantes relacionadas que también se usan como tipo.

\`\`\`ts
const Permiso = { Leer: 'READ', Escribir: 'WRITE' } as const
type Permiso = typeof Permiso[keyof typeof Permiso]
\`\`\`

**Enum**:
- Cuando necesitas reverse mapping (numérico).
- Cuando trabajas en un proyecto que ya usa enums y quieres consistencia.
- Cuando los valores tienen un orden/jerarquía numérica.
- Cuando quieres restringir absolutamente que no se pasen strings directos.

\`\`\`ts
enum NivelAcceso { Publico = 0, Registrado = 1, Premium = 2 }
\`\`\`

**El consenso de la comunidad**

En TypeScript moderno, la tendencia es:
- Para **estados simples**: union types.
- Para **constantes con comportamiento en runtime**: objeto as const.
- Para **enums numéricos con orden**: enum numérico.
- Para **valores muy restringidos (no string directo)**: string enum.

No hay una respuesta "correcta" universal. Lo importante es ser consistente dentro de un proyecto.`,
    codeExample: `// ── archivo: comparacion.ts ──────────────────────────────────────────────

// ── Caso 1: Estado de UI simple → Union type ──────────────────────────────

// ✓ Simple, sin código extra
type EstadoBoton = 'idle' | 'loading' | 'success' | 'error'

function renderBoton(estado: EstadoBoton): string {
  const textos: Record<EstadoBoton, string> = {
    idle: 'Enviar',
    loading: 'Enviando...',
    success: '¡Enviado!',
    error: 'Reintentar',
  }
  return textos[estado]
}

// ── Caso 2: Constantes de configuración → Objeto as const ─────────────────

// ✓ Iterable, JS nativo, tipado fuerte
const ConfigEndpoints = {
  Usuarios: '/api/usuarios',
  Productos: '/api/productos',
  Pedidos: '/api/pedidos',
} as const

type Endpoint = typeof ConfigEndpoints[keyof typeof ConfigEndpoints]

// Puede iterar en runtime
const endpointsDisponibles = Object.values(ConfigEndpoints)
console.log('Endpoints:', endpointsDisponibles)

// ── Caso 3: Niveles con jerarquía → Enum numérico ─────────────────────────

// ✓ Permite comparaciones de rango naturales
enum NivelPlan {
  Gratis = 0,
  Basico = 1,
  Pro = 2,
  Empresa = 3,
}

function puedeUsarFuncionalidad(planUsuario: NivelPlan, planRequerido: NivelPlan): boolean {
  return planUsuario >= planRequerido
}

console.log(puedeUsarFuncionalidad(NivelPlan.Pro, NivelPlan.Basico))   // → true
console.log(puedeUsarFuncionalidad(NivelPlan.Gratis, NivelPlan.Pro))   // → false

// ── Resumen de uso ────────────────────────────────────────────────────────

// Union type: estados, temas, idiomas, cualquier string simple
// Objeto as const: constantes con necesidad de iteración en runtime
// Enum numérico: niveles, prioridades, jerarquías con orden`,
    keyPoints: [
      'Union types: más simples, sin código JS, ideales para valores estáticos pequeños.',
      'Objeto as const: iterables en runtime, JS nativo, ideales para constantes con uso en runtime.',
      'Enum numérico: ideal cuando hay orden/jerarquía y se necesita comparar rangos.',
      'String enum: el más restrictivo — no acepta el string directo, solo el miembro del enum.',
      'No hay una opción universalmente mejor — elige según la necesidad específica y sé consistente.',
    ],
    exercise: {
      description:
        'Para cada caso, elige la mejor opción (union type, objeto as const, o enum) y justifica:\n1. Los tipos de alerta en una app: éxito, error, advertencia, info.\n2. Las categorías de productos en una tienda online que se mostrarán en un filtro dinámico.\n3. Los niveles de dificultad en un juego donde nivel 3 siempre incluye todo lo de nivel 1 y 2.',
      hint: 'Caso 1: union type (simple, 4 valores). Caso 2: objeto as const (necesitas iterar para el filtro). Caso 3: enum numérico (comparación de rango: nivel >= Nivel.Intermedio).',
    },
    quiz: [
      {
        question:
          '¿Cuál de las tres opciones es la más apropiada para valores que necesitan iterarse dinámicamente en tiempo de ejecución?',
        options: [
          'Union type',
          'Enum o Objeto as const',
          'String literal',
          'Interface',
        ],
        correctAnswer: 'Enum o Objeto as const',
        correctFeedback:
          'Correcto. Tanto los enums como los objetos as const generan código JavaScript real y son iterables con Object.values(). Los union types no existen en runtime y no se pueden iterar.',
        incorrectFeedback:
          'No es correcto. Los union types no existen en JavaScript en runtime. Para iterar los valores posibles, necesitas un enum (Object.values) o un objeto as const (Object.values). Elige entre estos dos según las demás necesidades.',
      },
      {
        question:
          '¿Cuándo tiene sentido usar un string enum en lugar de un objeto as const?',
        options: [
          'Cuando necesitas que el código sea más pequeño',
          'Cuando quieres que TypeScript rechace strings directos y solo acepte los miembros del enum',
          'Cuando los valores son numéricos',
          'Cuando usas React',
        ],
        correctAnswer:
          'Cuando quieres que TypeScript rechace strings directos y solo acepte los miembros del enum',
        correctFeedback:
          'Correcto. Los string enums son más restrictivos: \`f("ADMIN")\` da error aunque "ADMIN" sea el valor de un miembro. Con objeto as const, \`f("ADMIN")\` sí se acepta. Usa string enum cuando quieres esta restricción adicional.',
        incorrectFeedback:
          'No es correcto. La razón para preferir string enum sobre objeto as const es la restricción extra: los string enums no aceptan el string directo aunque coincida con el valor. Solo aceptan el miembro del enum explícitamente.',
      },
      {
        question:
          '¿Cuál es la opción más apropiada para representar niveles de suscripción donde pro incluye todo lo que tiene basic?',
        options: [
          'Union type: "free" | "basic" | "pro"',
          'String enum con los mismos valores',
          'Enum numérico: Free = 0, Basic = 1, Pro = 2',
          'Objeto as const con valores string',
        ],
        correctAnswer: 'Enum numérico: Free = 0, Basic = 1, Pro = 2',
        correctFeedback:
          'Correcto. Cuando hay una jerarquía o rango, el enum numérico es ideal. \`if (usuario.plan >= Plan.Basic)\` es más natural que comparar múltiples strings.',
        incorrectFeedback:
          'No es correcto. Cuando hay una jerarquía (cada nivel incluye los anteriores), el enum numérico es la mejor opción porque permite comparaciones de rango: \`nivel >= Nivel.Basic\`. Con strings no puedes hacer esa comparación de forma natural.',
      },
      {
        question:
          '¿Qué opción genera el menor tamaño en el JavaScript compilado?',
        options: [
          'String enum',
          'Numeric enum',
          'Union type',
          'Objeto as const',
        ],
        correctAnswer: 'Union type',
        correctFeedback:
          'Correcto. Los union types no generan absolutamente ningún código JavaScript. Al compilar, desaparecen completamente. Los enums y objetos generan código real.',
        incorrectFeedback:
          'No es correcto. Los union types no generan ningún código JavaScript al compilar — desaparecen completamente. Los enums y objetos as const generan objetos JavaScript reales.',
      },
      {
        question:
          'Para el tipo de tema de una aplicación con solo dos valores ("dark" | "light"), ¿cuál es la opción más apropiada?',
        options: [
          'Un string enum con dos miembros',
          'Un objeto as const con dos propiedades',
          'Un union type: type Tema = "dark" | "light"',
          'Un numeric enum con 0 y 1',
        ],
        correctAnswer: 'Un union type: type Tema = "dark" | "light"',
        correctFeedback:
          'Correcto. Para dos valores simples que no necesitan iterarse ni usarse en runtime de forma dinámica, un union type es la opción más simple y ligera.',
        incorrectFeedback:
          'No es correcto. Para dos valores simples como el tema de la UI, un union type es suficiente y más elegante. No necesitas el overhead de un enum o un objeto si no vas a iterar estos valores en runtime.',
      },
    ],
  },

  // ── Lección 103 ──────────────────────────────────────────────────────────
  {
    slug: 'errores-enums',
    title: 'Errores comunes con enums',
    module: 'Enums y alternativas',
    moduleNumber: 13,
    order: 103,
    description:
      'Aprende a evitar errores como usar enums para casos demasiado simples o mezclar valores inconsistentes.',
    explanation: `Los enums son útiles pero fácilmente se usan en exceso o de forma incorrecta. Conocer los errores comunes te ayudará a usarlos mejor.

**Error 1: Usar enum para dos valores simples**

\`\`\`ts
// INNECESARIO ❌
enum Activo { Verdadero = 'true', Falso = 'false' }

// MEJOR ✓
type Activo = boolean
// o
type EstadoCuenta = 'activo' | 'inactivo'
\`\`\`

**Error 2: Numeric enum sin verificación de rango**

\`\`\`ts
enum Prioridad { Baja, Media, Alta }

function fn(p: Prioridad): void { ... }

fn(99)  // TypeScript lo acepta sin error — puede ser un bug oculto
\`\`\`

Si usas numeric enums, considera validar en runtime que el valor está en el rango correcto.

**Error 3: Mezclar valores inconsistentes**

\`\`\`ts
// CONFUSO ❌
enum Config {
  MaxIntentos = 3,
  Timeout = 'TIMEOUT',  // Error: no se puede mezclar en TypeScript estándar
  Retardo,              // También confuso
}

// MEJOR ✓: dos constantes separadas o un objeto as const
const MAX_INTENTOS = 3
type ConfigKey = 'TIMEOUT'
\`\`\`

**Error 4: Usar un numeric enum cuando necesitas comparar como string**

\`\`\`ts
enum Estado { Activo, Inactivo }

const estado = Estado.Activo
console.log(estado === 'Activo')   // false — es 0, no el string
console.log(estado === 0)          // true
\`\`\`

Los numeric enums son números, no strings. Si guardas el estado en una base de datos o API y la comparas como string, habrá discrepancias.

**Error 5: const enum sin entender sus limitaciones**

\`\`\`ts
const enum Permiso { Leer, Escribir }

// Los const enums son inline al compilar — no generan objeto
// Esto NO funciona con const enum:
const permisos = Object.values(Permiso)  // Error en runtime
\`\`\`

**Error 6: Sobre-usar enums para todo**

No todo necesita ser un enum. Las constantes sueltas, los tipos de datos ad-hoc, o los valores de configuración simples no necesitan un enum:

\`\`\`ts
// EXCESIVO ❌
enum Direcciones {
  API_URL = 'https://api.ejemplo.com',
  LOGIN_PATH = '/auth/login',
}

// MEJOR ✓
const API_URL = 'https://api.ejemplo.com' as const
const LOGIN_PATH = '/auth/login' as const
\`\`\`

**Checklist para usar enums correctamente**

✓ ¿Hay más de 2-3 valores relacionados? (si no, usa boolean o union simple)
✓ ¿Los valores comparten un dominio semántico?
✓ ¿Necesitas el objeto en runtime? (si no, considera union type)
✓ ¿Los valores son homogéneos? (no mezcles tipos)
✓ ¿Has documentado el enum?`,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// ── Error 1: enum innecesario para boolean ────────────────────────────────

// INNECESARIO ❌
enum SiNo { Si = 'SI', No = 'NO' }

// MEJOR ✓
type SiNo = boolean  // o simplemente usa boolean directamente

// ── Error 2: numeric enum sin validación ─────────────────────────────────

enum NivelLog { Debug = 0, Info = 1, Warn = 2, Error = 3 }

// PROBLEMA: TypeScript acepta cualquier número
// function loguear(nivel: NivelLog) { ... }
// loguear(99)  // TypeScript no protesta

// SOLUCIÓN: validar en runtime si es crítico
function loguear(nivel: NivelLog): void {
  const nivelesValidos = [NivelLog.Debug, NivelLog.Info, NivelLog.Warn, NivelLog.Error]
  if (!nivelesValidos.includes(nivel)) {
    throw new Error(\`Nivel de log inválido: \${nivel}\`)
  }
  console.log(\`[\${NivelLog[nivel]}]\`)
}

// ── Error 4: confundir numeric enum con string ────────────────────────────

enum ColorPaleta { Rojo, Verde, Azul }

const color = ColorPaleta.Verde
console.log('Es número:', typeof color === 'number')  // → true
console.log('Es string:', typeof color === 'string')  // → false
// color tiene valor 1, NO el string "Verde"

// Si necesitas el string, usa string enum o mapeo
const nombreColor = ColorPaleta[color]  // mapeo inverso
console.log('Nombre:', nombreColor)  // → "Verde"

// ── Error 5: const enum no es iterable ───────────────────────────────────

// PROBLEMA con const enum:
// const enum TipoConst { A, B, C }
// Object.values(TipoConst)  // Error en runtime!

// BIEN: enum normal
enum Tipo { A, B, C }
const valores = Object.values(Tipo).filter((v) => isNaN(Number(v)))
console.log('Nombres:', valores)  // → ['A', 'B', 'C']

// ── Regla de oro ──────────────────────────────────────────────────────────
// Pregúntate: ¿necesito este enum en runtime o solo para tipado?
// - Solo tipado → union type
// - Runtime + iterable → objeto as const
// - Runtime + jerarquía numérica → enum numérico
// - Runtime + muy restrictivo (no string directo) → string enum`,
    keyPoints: [
      'No uses enums para 2 valores simples — boolean o un union type es suficiente.',
      'Los numeric enums aceptan cualquier número — valida en runtime si es crítico.',
      'No mezcles tipos de valores dentro de un enum (numérico con string).',
      'Los const enums no se pueden iterar — si necesitas Object.values(), usa enum normal.',
      'Si solo necesitas el tipo (sin iterar en runtime), considera union type en lugar de enum.',
    ],
    exercise: {
      description:
        'Identifica qué está mal en este código y propón la corrección:\n\n\`\`\`ts\nenum Config {\n  MaxReintentos = 3,\n  Timeout = "TIMEOUT_ERROR",\n  ModoDebug,\n}\n\nenum EstadoActivo { Activo = "activo", Inactivo = "inactivo" }\n\nfunction setActivo(estado: EstadoActivo): void {\n  if (estado === "activo") { ... }  // esto da error de TypeScript\n}\n\`\`\`',
      hint: 'Problema 1: Config mezcla number, string y auto-increment. Problema 2: EstadoActivo es un string enum pero en la función se compara con el string directo (da error). Correcciones: separar Config en constantes, y usar \`EstadoActivo.Activo\` en la comparación.',
    },
    quiz: [
      {
        question:
          '¿Por qué TypeScript rechaza la comparación \`estado === "activo"\` cuando \`estado: EstadoActivo\` y \`EstadoActivo.Activo = "activo"\`?',
        options: [
          'Porque TypeScript no permite comparar enums con strings',
          'Porque los string enums son tipos opacos — solo aceptan miembros del enum, no strings directos',
          'Porque el valor "activo" no está en el enum',
          'Solo en modo strict',
        ],
        correctAnswer:
          'Porque los string enums son tipos opacos — solo aceptan miembros del enum, no strings directos',
        correctFeedback:
          'Correcto. Esta es la "opacidad" de los string enums. Aunque "activo" sea el valor de EstadoActivo.Activo, TypeScript no los considera el mismo tipo. La comparación correcta es \`estado === EstadoActivo.Activo\`.',
        incorrectFeedback:
          'No es correcto. Los string enums son opacos en TypeScript: aunque el string coincida con el valor del enum, TypeScript los trata como tipos diferentes. Debes usar \`estado === EstadoActivo.Activo\`, no el string directamente.',
      },
      {
        question:
          '¿Qué problema ocurre si mezclas tipos de valores en un enum como \`Config { A = 3, B = "TIMEOUT", C }\`?',
        options: [
          'TypeScript lo permite y funciona correctamente',
          'TypeScript lo rechaza o crea comportamientos confusos — los enums deben ser homogéneos',
          'El tercer miembro C automáticamente es string',
          'Solo funciona si los valores son compatible',
        ],
        correctAnswer:
          'TypeScript lo rechaza o crea comportamientos confusos — los enums deben ser homogéneos',
        correctFeedback:
          'Correcto. Mezclar valores numéricos y de string en un enum crea confusión y problemas. TypeScript puede rechazarlo según el caso. Mantén los enums homogéneos: todos numéricos o todos strings.',
        incorrectFeedback:
          'No es correcto. Mezclar números y strings en un enum crea ambigüedad. TypeScript tiene reglas específicas sobre esto y puede rechazarlo o crear comportamientos confusos. Mantén los enums con un solo tipo de valor.',
      },
      {
        question:
          '¿Cuándo es un error usar un enum numérico sin validación adicional en runtime?',
        options: [
          'Siempre es un error usar enums numéricos',
          'Cuando la función acepta el enum y el valor puede venir de fuentes externas como APIs o formularios, donde podrían llegar números fuera del rango',
          'Solo en modo desarrollo',
          'Solo cuando el enum tiene más de 10 miembros',
        ],
        correctAnswer:
          'Cuando la función acepta el enum y el valor puede venir de fuentes externas como APIs o formularios, donde podrían llegar números fuera del rango',
        correctFeedback:
          'Correcto. TypeScript acepta cualquier número para un numeric enum sin quejarse. Si el valor viene de una fuente externa, podría ser 99 o -1. En ese caso, agregar validación en runtime es una buena práctica.',
        incorrectFeedback:
          'No es correcto. El problema es que TypeScript acepta cualquier número para un numeric enum. Si el valor viene de fuentes externas (APIs, inputs), puede ser un número fuera del rango válido. La validación en runtime protege contra eso.',
      },
      {
        question:
          '¿Cuál es la diferencia entre \`enum\` y \`const enum\` en cuanto a iterabilidad?',
        options: [
          'No hay diferencia, ambos son iterables',
          'const enum no genera ningún objeto JavaScript y no se puede iterar con Object.values()',
          'Solo enum se puede iterar con for...of',
          'const enum es solo para TypeScript 5.0+',
        ],
        correctAnswer:
          'const enum no genera ningún objeto JavaScript y no se puede iterar con Object.values()',
        correctFeedback:
          'Correcto. \`const enum\` es optimizado al compilar — los valores se sustituyen inline y no se genera ningún objeto. Por eso no puedes iterar un const enum con Object.values().',
        incorrectFeedback:
          'No es correcto. \`const enum\` es una optimización de TypeScript donde los valores se sustituyen directamente en el código compilado sin generar un objeto. Como no hay objeto en runtime, Object.values() falla.',
      },
      {
        question:
          '¿Para qué valores de configuración simple es preferible usar constantes individuales sobre un enum?',
        options: [
          'Para valores que necesitan tipos fuertes y narrowing',
          'Para URLs, timeouts, límites y otros valores de configuración que no tienen una relación semántica entre sí',
          'Para todos los valores de configuración sin excepción',
          'Solo para valores numéricos',
        ],
        correctAnswer:
          'Para URLs, timeouts, límites y otros valores de configuración que no tienen una relación semántica entre sí',
        correctFeedback:
          'Correcto. Un enum tiene sentido cuando los valores están relacionados semánticamente (estados de un pedido, niveles de alerta). Para valores de configuración sin relación entre sí, las constantes individuales o un objeto de config son más claros.',
        incorrectFeedback:
          'No es correcto. Los enums son para grupos de valores relacionados semánticamente. Para configuraciones variadas como URL de API, timeout, tamaño máximo, usa constantes individuales o un objeto de config — no es necesario agruparlos en un enum.',
      },
    ],
  },
]

export const tsModule13: Module = {
  number: 13,
  title: 'Enums y alternativas',
  level: 'nivel3',
  lessons: lessonsTsModule13,
}
