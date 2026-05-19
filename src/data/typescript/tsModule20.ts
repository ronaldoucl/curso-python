import type { Lesson, Module } from '@/types'

export const lessonsTsModule20: Lesson[] = [
  {
    slug: 'utility-record',
    title: 'Record',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 152,
    description:
      'Aprende a usar Record<K, V> para crear objetos cuyas claves y valores tienen tipos definidos.',
    explanation: `## Record<K, V>

\`Record<K, V>\` crea un tipo de **objeto (diccionario)** donde todas las claves son de tipo K y todos los valores son de tipo V. Es la forma tipada de un objeto que funciona como mapa o diccionario.

### Sintaxis

\`\`\`typescript
type MiDiccionario = Record<K, V>
// equivale a: { [clave: K]: V }
\`\`\`

### Ejemplos básicos

\`\`\`typescript
// Diccionario de traducciones
type Traducciones = Record<string, string>
const trad: Traducciones = { hola: "hello", adios: "bye" }

// Mapa de precios por producto (clave = nombre, valor = precio)
type Precios = Record<string, number>
const precios: Precios = { laptop: 999, mouse: 29, mochila: 49 }
\`\`\`

### Record con literal types como claves

El uso más potente de Record es cuando las claves son **string literals** conocidos:

\`\`\`typescript
type Idioma = "es" | "en" | "fr"
type Etiquetas = Record<Idioma, string>

const etiquetas: Etiquetas = {
  es: "Hola",
  en: "Hello",
  fr: "Bonjour",
}
// TypeScript exige que estén los tres idiomas — ninguno puede faltar
\`\`\`

### Record con enum

\`\`\`typescript
enum Prioridad { ALTA, MEDIA, BAJA }

type ConfigPorPrioridad = Record<Prioridad, { color: string; icono: string }>

const config: ConfigPorPrioridad = {
  [Prioridad.ALTA]: { color: "red", icono: "⬆" },
  [Prioridad.MEDIA]: { color: "yellow", icono: "➡" },
  [Prioridad.BAJA]: { color: "green", icono: "⬇" },
}
\`\`\`

### Record para agrupar datos

\`\`\`typescript
interface Estudiante {
  nombre: string
  nota: number
}

type EstudiantesPorCurso = Record<string, Estudiante[]>

const grupos: EstudiantesPorCurso = {
  "TypeScript": [{ nombre: "Ana", nota: 9.5 }],
  "Python": [{ nombre: "Luis", nota: 8.0 }],
}
\`\`\`

### Diferencia con \`{ [key: string]: V }\`

\`Record<string, V>\` y \`{ [key: string]: V }\` son funcionalmente equivalentes. Record es más conciso y explícito sobre la intención.`,
    codeExample: `// types.ts

// Record con strings libres — diccionario simple
type Cache = Record<string, unknown>
const cache: Cache = {}
cache['usuario_1'] = { nombre: 'Ana', activo: true }
cache['usuario_2'] = { nombre: 'Luis', activo: false }

// Record con union de literales — exhaustivo y verificado
type EstadoTarea = 'pendiente' | 'en_progreso' | 'completada' | 'cancelada'

type ColoresEstado = Record<EstadoTarea, string>
const colores: ColoresEstado = {
  pendiente: '#gray',
  en_progreso: '#blue',
  completada: '#green',
  cancelada: '#red',
}
// TypeScript exige los 4 estados — si falta uno, da error

// Record para contadores por categoría
type Categoria = 'tecnología' | 'ropa' | 'hogar' | 'deportes'
type ContadorPorCategoria = Record<Categoria, number>

function contarPorCategoria(productos: { categoria: Categoria }[]): ContadorPorCategoria {
  const resultado: ContadorPorCategoria = {
    tecnología: 0,
    ropa: 0,
    hogar: 0,
    deportes: 0,
  }
  productos.forEach((p) => {
    resultado[p.categoria]++
  })
  return resultado
}

// Record con objetos como valores
interface ConfiguracionRuta {
  titulo: string
  icono: string
  requiereAuth: boolean
}

type RutasApp = Record<string, ConfiguracionRuta>

const rutas: RutasApp = {
  '/inicio': { titulo: 'Inicio', icono: '🏠', requiereAuth: false },
  '/perfil': { titulo: 'Perfil', icono: '👤', requiereAuth: true },
  '/cursos': { titulo: 'Cursos', icono: '📚', requiereAuth: false },
}`,
    keyPoints: [
      'Record<K, V> crea un tipo de objeto (diccionario) con claves de tipo K y valores de tipo V',
      'Con string literals como K, TypeScript exige que todas las claves estén presentes',
      'Es más legible que la notación de índice { [key: K]: V }',
      'Muy útil para mapas, configuraciones, contadores y agrupaciones',
      'Se puede usar con enums como clave para configuraciones exhaustivas',
    ],
    exercise: {
      description:
        'Crea un tipo `NivelesCurso = "principiante" | "intermedio" | "avanzado"`. Luego crea un `Record<NivelesCurso, { descripcion: string; color: string; lecciones: number }>` llamado `configNiveles` con datos para cada nivel. TypeScript debe exigir que los tres niveles estén presentes. Luego crea una función `obtenerConfigNivel(nivel: NivelesCurso): { descripcion: string; color: string; lecciones: number }` que devuelva la configuración.',
      hint: 'Si omites uno de los tres niveles en configNiveles, TypeScript dará un error. El tipo de K determina qué claves son obligatorias.',
    },
    quiz: [
      {
        question: '¿Qué crea `Record<"norte" | "sur" | "este" | "oeste", number>`?',
        options: [
          'Una unión de los cuatro strings con números',
          'Un objeto con exactamente cuatro claves (norte, sur, este, oeste) cada una con valor number',
          'Un array de cuatro números',
          'Un tipo donde las claves son numbers y los valores son strings',
        ],
        correctAnswer: 'Un objeto con exactamente cuatro claves (norte, sur, este, oeste) cada una con valor number',
        correctFeedback:
          '¡Correcto! Con literal types como clave, Record exige que todas las claves especificadas estén presentes en el objeto.',
        incorrectFeedback:
          'Record<K, V> crea un objeto. Con string literals como K, TypeScript exige que TODAS las claves especificadas estén presentes. El resultado es { norte: number, sur: number, este: number, oeste: number }.',
      },
      {
        question: '¿Qué pasa si omites una clave en `const c: Record<"a" | "b" | "c", number> = { a: 1, b: 2 }`?',
        options: [
          'TypeScript pone 0 automáticamente para la clave faltante',
          'Error de compilación: falta la propiedad "c" que es requerida',
          'Solo ocurre un error en tiempo de ejecución',
          'TypeScript usa undefined para la clave faltante',
        ],
        correctAnswer: 'Error de compilación: falta la propiedad "c" que es requerida',
        correctFeedback:
          '¡Perfecto! Cuando usas literal types como K, TypeScript verifica que todas las claves estén presentes. Faltar "c" es un error.',
        incorrectFeedback:
          'Record con literal types es exhaustivo. TypeScript exige que todas las claves de la unión estén presentes. Omitir "c" causa un error de compilación.',
      },
      {
        question: '¿Cuál es la diferencia entre `Record<string, number>` y `Record<"alto" | "bajo", number>`?',
        options: [
          'No hay diferencia — ambos crean el mismo tipo',
          'El primero acepta cualquier string como clave; el segundo solo acepta "alto" o "bajo" y exige ambas',
          'El primero es más lento en ejecución',
          'El primero solo acepta strings cortos',
        ],
        correctAnswer: 'El primero acepta cualquier string como clave; el segundo solo acepta "alto" o "bajo" y exige ambas',
        correctFeedback:
          '¡Exacto! `Record<string, V>` es un diccionario flexible. `Record<"alto" | "bajo", V>` es exhaustivo — TypeScript exige exactamente esas dos claves.',
        incorrectFeedback:
          'Con `string`, cualquier clave es válida. Con literal types, las claves están restringidas y son exhaustivas — debes proporcionar todas las especificadas.',
      },
      {
        question: '¿Para qué es útil `type ContadorPorCategoria = Record<Categoria, number>` donde Categoria es una unión de literales?',
        options: [
          'Para contar cuántas categorías existen',
          'Para garantizar que todas las categorías tienen un contador, sin olvidar ninguna',
          'Para hacer que los contadores sean de solo lectura',
          'Para convertir categorías en números',
        ],
        correctAnswer: 'Para garantizar que todas las categorías tienen un contador, sin olvidar ninguna',
        correctFeedback:
          '¡Correcto! Si la unión tiene 4 categorías, TypeScript exige que el objeto tenga las 4 claves. Nunca olvidarás inicializar el contador de una categoría.',
        incorrectFeedback:
          'La exhaustividad es la clave. Si tienes 4 categorías en la unión, TypeScript te obliga a tener las 4 claves. No puedes olvidar ninguna.',
      },
      {
        question: '¿En qué se diferencia `Record<K, V>` de `{ [key: string]: V }`?',
        options: [
          'Son exactamente equivalentes cuando K es string',
          'Record es más legible y permite usar tipos literales como K; la notación de índice también funciona pero es menos flexible con literales',
          'La notación de índice no existe en TypeScript',
          'Record solo funciona con enums',
        ],
        correctAnswer: 'Record es más legible y permite usar tipos literales como K; la notación de índice también funciona pero es menos flexible con literales',
        correctFeedback:
          '¡Perfecto! Para `string` libre son equivalentes. Pero `Record<"a" | "b", V>` con literales es exhaustivo, mientras que `{ [key: string]: V }` no lo es.',
        incorrectFeedback:
          'Para `string` libre son equivalentes. La ventaja de Record está con literal types: `Record<"a" | "b", V>` exige ambas claves. La notación de índice no ofrece esa exhaustividad.',
      },
    ],
  },
  {
    slug: 'utility-exclude',
    title: 'Exclude',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 153,
    description: 'Aprende a usar Exclude<T, U> para eliminar tipos de una unión.',
    explanation: `## Exclude<T, U>

\`Exclude<T, U>\` toma una unión T y **elimina** de ella todos los tipos que son asignables a U. El resultado es una nueva unión con los tipos restantes.

### Sintaxis

\`\`\`typescript
type Resultado = Exclude<TipoUnion, QueExcluir>
\`\`\`

### Ejemplo básico

\`\`\`typescript
type TodosLosTipos = "pendiente" | "activo" | "inactivo" | "eliminado"
type SinEliminado = Exclude<TodosLosTipos, "eliminado">
// "pendiente" | "activo" | "inactivo"

type SinInactivoNiEliminado = Exclude<TodosLosTipos, "inactivo" | "eliminado">
// "pendiente" | "activo"
\`\`\`

### Excluir tipos primitivos

\`\`\`typescript
type Primitivos = string | number | boolean | null | undefined
type SoloDefinidos = Exclude<Primitivos, null | undefined>
// string | number | boolean
\`\`\`

### Excluir función de una unión

\`\`\`typescript
type Valor = string | number | (() => void)
type SoloValores = Exclude<Valor, Function>
// string | number
\`\`\`

### Caso de uso: permisos por rol

\`\`\`typescript
type Permiso = "leer" | "escribir" | "eliminar" | "administrar"

// Los usuarios regulares no pueden administrar ni eliminar
type PermisoUsuario = Exclude<Permiso, "eliminar" | "administrar">
// "leer" | "escribir"

// Los moderadores pueden todo excepto administrar
type PermisoModerador = Exclude<Permiso, "administrar">
// "leer" | "escribir" | "eliminar"
\`\`\`

### Exclude vs Omit

- **Exclude**: opera sobre **uniones** de tipos
- **Omit**: opera sobre **propiedades** de objetos

\`\`\`typescript
// Exclude — quita tipos de una unión
type SinString = Exclude<string | number | boolean, string> // number | boolean

// Omit — quita propiedades de un tipo objeto
type SinId = Omit<{ id: number; nombre: string }, "id"> // { nombre: string }
\`\`\``,
    codeExample: `// types.ts

// Exclude con string literals — remover estados
type EstadoPedido = 'borrador' | 'pendiente' | 'procesando' | 'enviado' | 'entregado' | 'cancelado'

// Para la vista de cliente: sin estados internos
type EstadoPedidoCliente = Exclude<EstadoPedido, 'borrador'>
// 'pendiente' | 'procesando' | 'enviado' | 'entregado' | 'cancelado'

// Solo estados "activos" — excluyendo finales
type EstadoActivo = Exclude<EstadoPedido, 'entregado' | 'cancelado'>
// 'borrador' | 'pendiente' | 'procesando' | 'enviado'

// Exclude con tipos primitivos
type ValorPosible = string | number | boolean | null | undefined
type ValorDefinido = Exclude<ValorPosible, null | undefined>
// string | number | boolean

// Exclude para permisos por rol
type AccionAdmin = 'crear' | 'leer' | 'actualizar' | 'eliminar' | 'gestionar_usuarios' | 'ver_reportes'
type AccionUsuario = Exclude<AccionAdmin, 'eliminar' | 'gestionar_usuarios' | 'ver_reportes'>
// 'crear' | 'leer' | 'actualizar'

// Función que acepta solo estados activos
function actualizarEstado(id: number, nuevoEstado: EstadoActivo): void {
  console.log(\`Pedido \${id} → \${nuevoEstado}\`)
}

actualizarEstado(1, 'procesando')  // ✅
actualizarEstado(1, 'enviado')     // ✅
// actualizarEstado(1, 'entregado') // ❌ entregado es estado final, no activo`,
    keyPoints: [
      'Exclude<T, U> elimina de la unión T todos los tipos que son asignables a U',
      'Opera sobre uniones de tipos, no sobre propiedades de objetos',
      'Útil para crear variantes más restringidas de una unión existente',
      'Diferente de Omit — Exclude es para uniones, Omit es para propiedades de objetos',
      'Puede excluir múltiples tipos con una unión: Exclude<T, "a" | "b">',
    ],
    exercise: {
      description:
        'Crea un tipo `EventoApp = "click" | "hover" | "focus" | "blur" | "keydown" | "keyup" | "scroll" | "resize"`. Luego crea: (1) `EventoMouse` excluyendo los eventos de teclado y resize, (2) `EventoTeclado` con solo keydown y keyup (usa Exclude para quitar todos los demás), y (3) una función `manejarEvento(evento: EventoMouse, callback: () => void): void`. Prueba que TypeScript rechaza pasar un evento de teclado.',
      hint: 'Para EventoTeclado puedes usar `Exclude<EventoApp, "click" | "hover" | "focus" | "blur" | "scroll" | "resize">` o directamente `"keydown" | "keyup"`. Ambos son válidos.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `Exclude<"a" | "b" | "c" | "d", "b" | "d">`?',
        options: ['"b" | "d"', '"a" | "c"', '"a" | "b" | "c" | "d"', 'never'],
        correctAnswer: '"a" | "c"',
        correctFeedback:
          '¡Correcto! Exclude elimina "b" y "d" de la unión. Lo que queda es "a" | "c".',
        incorrectFeedback:
          'Exclude elimina los tipos especificados. Al quitar "b" y "d" de "a" | "b" | "c" | "d", queda "a" | "c".',
      },
      {
        question: '¿Cuál es la diferencia entre Exclude y Omit?',
        options: [
          'Son lo mismo — ambos eliminan cosas de un tipo',
          'Exclude elimina tipos de una unión; Omit elimina propiedades de un tipo objeto',
          'Exclude es para interfaces; Omit es para type aliases',
          'Omit es más moderno que Exclude',
        ],
        correctAnswer: 'Exclude elimina tipos de una unión; Omit elimina propiedades de un tipo objeto',
        correctFeedback:
          '¡Exacto! Exclude trabaja con uniones de tipos. Omit trabaja con propiedades de tipos objeto. Son para contextos completamente distintos.',
        incorrectFeedback:
          'Son para contextos distintos. Exclude<"a" | "b" | "c", "b"> = "a" | "c" (quita de la unión). Omit<{ a: 1; b: 2 }, "b"> = { a: 1 } (quita la propiedad).',
      },
      {
        question: '¿Qué devuelve `Exclude<string | number | null, null>`?',
        options: ['null', 'string | number', 'string | number | null', 'never'],
        correctAnswer: 'string | number',
        correctFeedback:
          '¡Perfecto! Exclude elimina null de la unión. El resultado es string | number.',
        incorrectFeedback:
          'Exclude<T, U> elimina U de T. Al eliminar null de `string | number | null`, queda `string | number`.',
      },
      {
        question: '¿Por qué `Exclude<EstadoPedido, "cancelado" | "entregado">` es útil?',
        options: [
          'Para eliminar el estado del tipo',
          'Para crear un tipo que solo incluye estados donde el pedido aún puede cambiar',
          'Para hacer los estados más rápidos',
          'Para que el pedido no pueda cancelarse',
        ],
        correctAnswer: 'Para crear un tipo que solo incluye estados donde el pedido aún puede cambiar',
        correctFeedback:
          '¡Correcto! Al excluir los estados finales, el tipo resultante solo incluye estados "activos" — donde el pedido puede actualizarse.',
        incorrectFeedback:
          'El resultado excluye los estados finales. Así puedes tipar funciones de actualización para que solo acepten estados que todavía pueden cambiar.',
      },
      {
        question: '¿Qué sucede si aplicas `Exclude<T, T>` a cualquier tipo T?',
        options: [
          'Devuelve T',
          'Devuelve never — porque excluyes todo T de sí mismo',
          'Devuelve unknown',
          'Es un error de tipos',
        ],
        correctAnswer: 'Devuelve never — porque excluyes todo T de sí mismo',
        correctFeedback:
          '¡Perfecto! Si excluyes todo de una unión, no queda nada. En TypeScript, "sin ningún tipo posible" es `never`.',
        incorrectFeedback:
          'Si excluyes todos los tipos de una unión, el resultado es `never` — el tipo que no tiene valores posibles. `Exclude<"a" | "b", "a" | "b">` = never.',
      },
    ],
  },
  {
    slug: 'utility-extract',
    title: 'Extract',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 154,
    description:
      'Aprende a usar Extract<T, U> para conservar solo ciertos tipos dentro de una unión.',
    explanation: `## Extract<T, U>

\`Extract<T, U>\` es el complemento de Exclude. En lugar de eliminar tipos de una unión, los **extrae** — conserva solo los tipos de T que son asignables a U.

### Sintaxis

\`\`\`typescript
type Resultado = Extract<TipoUnion, QueConservar>
\`\`\`

### Ejemplo básico

\`\`\`typescript
type Tipos = "pendiente" | "activo" | "inactivo" | "eliminado"
type SoloActivos = Extract<Tipos, "pendiente" | "activo">
// "pendiente" | "activo"
\`\`\`

### Extracting from mixed types

\`\`\`typescript
type Mixto = string | number | boolean | null | undefined | object
type SoloStrings = Extract<Mixto, string>           // string
type SoloStringONumber = Extract<Mixto, string | number> // string | number
\`\`\`

### Comparación: Exclude vs Extract

\`\`\`typescript
type Estados = "nuevo" | "activo" | "inactivo" | "eliminado"

// Exclude — quita estados inactivos/eliminados
type EstadosActivos = Exclude<Estados, "inactivo" | "eliminado">
// "nuevo" | "activo"

// Extract — conserva solo los estados del ciclo normal
type EstadosNormales = Extract<Estados, "nuevo" | "activo">
// "nuevo" | "activo"
// El resultado es el mismo — pero el intent es diferente
\`\`\`

### Caso de uso: filtrar tipos compatibles

\`\`\`typescript
type Evento = MouseEvent | KeyboardEvent | FocusEvent | WheelEvent

// Extraer solo tipos de eventos de teclado
type EventoTeclado = Extract<Evento, KeyboardEvent>
\`\`\`

### Extract con objetos en unión

\`\`\`typescript
type Resultado =
  | { tipo: "usuario"; nombre: string }
  | { tipo: "producto"; precio: number }
  | { tipo: "pedido"; total: number }

// Extraer solo el resultado de usuario
type ResultadoUsuario = Extract<Resultado, { tipo: "usuario" }>
// { tipo: "usuario"; nombre: string }
\`\`\``,
    codeExample: `// types.ts

// Extract con string literals
type Prioridad = 'crítica' | 'alta' | 'media' | 'baja' | 'mínima'

// Extraer solo las prioridades urgentes
type PrioridadUrgente = Extract<Prioridad, 'crítica' | 'alta'>
// 'crítica' | 'alta'

// Extraer solo las no urgentes
type PrioridadNormal = Extract<Prioridad, 'media' | 'baja' | 'mínima'>
// 'media' | 'baja' | 'mínima'

// Extract con tipos primitivos
type Entrada = string | number | boolean | null | object
type EntradaNumérica = Extract<Entrada, number>        // number
type EntradaString = Extract<Entrada, string | number> // string | number

// Extract con uniones discriminadas (muy útil)
type NotificacionApp =
  | { tipo: 'info'; mensaje: string }
  | { tipo: 'error'; mensaje: string; codigo: number }
  | { tipo: 'exito'; mensaje: string; duracion: number }
  | { tipo: 'advertencia'; mensaje: string }

// Extraer solo el tipo de error (tiene propiedades únicas)
type NotificacionError = Extract<NotificacionApp, { tipo: 'error' }>
// { tipo: 'error'; mensaje: string; codigo: number }

type NotificacionExito = Extract<NotificacionApp, { tipo: 'exito' }>
// { tipo: 'exito'; mensaje: string; duracion: number }

function manejarError(notif: NotificacionError): void {
  console.log(\`Error \${notif.codigo}: \${notif.mensaje}\`)
  // TypeScript sabe que notif.codigo existe — es NotificacionError
}

function manejarExito(notif: NotificacionExito): void {
  setTimeout(() => console.log('Cerrar'), notif.duracion)
}`,
    keyPoints: [
      'Extract<T, U> conserva de la unión T solo los tipos que son asignables a U',
      'Es el complemento exacto de Exclude',
      'Muy útil para extraer variantes de uniones discriminadas',
      'Puede usarse con objetos para extraer por la propiedad discriminante',
      'El resultado nunca tiene más tipos que los especificados en U',
    ],
    exercise: {
      description:
        'Crea una unión `AccionUI = { tipo: "abrir"; modal: string } | { tipo: "cerrar"; id: number } | { tipo: "navegar"; ruta: string } | { tipo: "enviar"; form: string; datos: Record<string, unknown> }`. Usa Extract para crear: (1) `AccionAbrir` (solo la variante abrir), (2) `AccionNavegar` (solo navegar), y (3) `AccionConDatos` (solo las variantes que tienen datos — solo "enviar"). Crea una función para cada tipo extraído.',
      hint: 'Usa `Extract<AccionUI, { tipo: "abrir" }>` etc. para extraer cada variante. TypeScript conocerá las propiedades exactas de cada variante.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `Extract<"a" | "b" | "c", "b" | "c" | "d">`?',
        options: ['"d"', '"a"', '"b" | "c"', '"a" | "b" | "c" | "d"'],
        correctAnswer: '"b" | "c"',
        correctFeedback:
          '¡Correcto! Extract conserva los tipos de T que también aparecen en U. "b" y "c" están en ambos, "a" no está en U, "d" no está en T.',
        incorrectFeedback:
          'Extract conserva los tipos que aparecen en AMBOS T y U. "b" y "c" están en la primera unión Y en la segunda. "a" no está en U y "d" no está en T.',
      },
      {
        question: '¿En qué se diferencia Extract de Include (si existiera)?',
        options: [
          'Son lo mismo',
          'Extract es lo que ya existe y hace exactamente la "inclusión" — conserva los tipos que coinciden',
          'Include haría algo diferente que aún no existe en TypeScript',
          'Extract no existe en TypeScript',
        ],
        correctAnswer: 'Extract es lo que ya existe y hace exactamente la "inclusión" — conserva los tipos que coinciden',
        correctFeedback:
          '¡Exacto! Extract es la operación de "conservar los que coinciden". No existe Include porque Extract ya hace ese trabajo.',
        incorrectFeedback:
          'Extract ya hace la función de "inclusión". Conserva los tipos de T que también están en U. TypeScript no necesita un Include separado.',
      },
      {
        question: '¿Qué devuelve `Extract<NotificacionApp, { tipo: "error" }>` si NotificacionApp tiene una variante `{ tipo: "error"; codigo: number }`?',
        options: [
          '{ tipo: "error" }',
          '{ tipo: "error"; codigo: number }',
          'never',
          'NotificacionApp',
        ],
        correctAnswer: '{ tipo: "error"; codigo: number }',
        correctFeedback:
          '¡Perfecto! Extract extrae la variante completa que coincide con `{ tipo: "error" }`. El resultado incluye todas las propiedades de esa variante, no solo tipo.',
        incorrectFeedback:
          'Extract extrae la variante completa, no solo el patrón de búsqueda. Si la variante de error tiene tipo y codigo, Extract devuelve el tipo completo: { tipo: "error"; codigo: number }.',
      },
      {
        question: '¿Cuándo es más útil usar Extract vs Exclude?',
        options: [
          'Son intercambiables — usar cualquiera da el mismo resultado',
          'Extract cuando quieres conservar pocos tipos de muchos; Exclude cuando quieres quitar pocos de muchos',
          'Exclude para strings; Extract para objetos',
          'Extract es más rápido que Exclude',
        ],
        correctAnswer: 'Extract cuando quieres conservar pocos tipos de muchos; Exclude cuando quieres quitar pocos de muchos',
        correctFeedback:
          '¡Exacto! Si tienes 10 tipos y quieres 2, Extract es más claro. Si tienes 10 y quieres quitar 2 (quedarte 8), Exclude es más claro.',
        incorrectFeedback:
          'La elección depende de cuántos quieres conservar vs quitar. Extract es mejor cuando conservas pocos. Exclude es mejor cuando quitas pocos.',
      },
      {
        question: '¿Qué devuelve `Extract<string, number>`?',
        options: ['string', 'number', 'string | number', 'never'],
        correctAnswer: 'never',
        correctFeedback:
          '¡Correcto! string no es asignable a number. Como no hay intersección, Extract devuelve never — el tipo vacío.',
        incorrectFeedback:
          'Cuando no hay ningún tipo en T que sea asignable a U, Extract devuelve never. string y number no se superponen, así que Extract<string, number> = never.',
      },
    ],
  },
  {
    slug: 'utility-nonnullable',
    title: 'NonNullable',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 155,
    description:
      'Aprende a usar NonNullable<T> para eliminar null y undefined de un tipo.',
    explanation: `## NonNullable<T>

\`NonNullable<T>\` elimina \`null\` y \`undefined\` de un tipo. Es equivalente a \`Exclude<T, null | undefined>\`.

### Sintaxis

\`\`\`typescript
type Resultado = NonNullable<T>
\`\`\`

### Ejemplos

\`\`\`typescript
type Nullable = string | null | undefined
type SoloString = NonNullable<Nullable>  // string

type MaybeNumber = number | null
type SoloNumber = NonNullable<MaybeNumber>  // number

type ComplexNullable = string | number | null | undefined | boolean
type SinNulos = NonNullable<ComplexNullable>  // string | number | boolean
\`\`\`

### Cuándo usar NonNullable

**1. Después de verificar que un valor existe:**
\`\`\`typescript
function procesarSiExiste<T>(valor: T | null | undefined): NonNullable<T> | null {
  if (valor == null) return null
  return valor as NonNullable<T>
}
\`\`\`

**2. Tipar resultados de find que sabes que existen:**
\`\`\`typescript
type UsuarioEncontrado = NonNullable<ReturnType<typeof usuarios.find>>
\`\`\`

**3. Validar que las propiedades opcionales están presentes:**
\`\`\`typescript
interface Formulario {
  nombre?: string
  email?: string
}

type FormularioCompleto = Required<{
  [K in keyof Formulario]: NonNullable<Formulario[K]>
}>
\`\`\`

### La conexión con strictNullChecks

\`NonNullable\` es más relevante cuando TypeScript tiene \`strictNullChecks: true\` (lo cual es la configuración recomendada). Sin strictNullChecks, null y undefined son subtipos de todos los tipos.

### Diferencia con Required

\`\`\`typescript
interface Config {
  tema?: string | null
}

// Required hace tema obligatorio pero puede ser null
type Config1 = Required<Config>  // { tema: string | null }

// NonNullable quita el null pero no hace obligatorio
type Config2 = { tema?: NonNullable<Config["tema"]> }  // { tema?: string }
\`\`\``,
    codeExample: `// utils.ts

// NonNullable con tipos simples
type NombreNullable = string | null | undefined
type Nombre = NonNullable<NombreNullable>  // string

// Función que garantiza no-null en retorno
function garantizarValor<T>(valor: T | null | undefined, defecto: NonNullable<T>): NonNullable<T> {
  if (valor == null) return defecto
  return valor as NonNullable<T>
}

const nombre = garantizarValor(null, "Anónimo")     // string garantizado
const precio = garantizarValor(undefined, 0)         // number garantizado
const activo = garantizarValor(undefined, false)     // boolean garantizado

// NonNullable en funciones de búsqueda
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
]

// Array.find devuelve T | undefined
const encontrado = usuarios.find((u) => u.id === 1)
// encontrado tiene tipo { id: number; nombre: string } | undefined

// Si sabemos que existe, podemos usarlo con !
const usuarioConfirmado: NonNullable<typeof encontrado> = encontrado!

// Tipo de datos que pueden ser null desde la API
interface RespuestaApi {
  usuario: {
    nombre: string | null
    email: string | null
    avatar: string | null | undefined
  }
}

// Función que normaliza los valores null a strings vacíos
function normalizarUsuario(u: RespuestaApi['usuario']): {
  nombre: NonNullable<typeof u.nombre>
  email: NonNullable<typeof u.email>
  avatar: string
} {
  return {
    nombre: u.nombre ?? '',
    email: u.email ?? '',
    avatar: u.avatar ?? '/default-avatar.png',
  }
}`,
    keyPoints: [
      'NonNullable<T> elimina null y undefined de un tipo',
      'Es equivalente a Exclude<T, null | undefined>',
      'Útil para garantizar que un valor existe antes de usarlo',
      'Se combina bien con ?? (nullish coalescing) y ! (non-null assertion)',
      'Importante cuando strictNullChecks está activado',
    ],
    exercise: {
      description:
        'Crea una función genérica `filtrarNulos<T>(lista: (T | null | undefined)[]): NonNullable<T>[]` que devuelva solo los elementos que no son null ni undefined. Pruébala con `[1, null, 2, undefined, 3]` (debe devolver `[1, 2, 3]`) y `["a", null, "b"]` (debe devolver `["a", "b"]`). Verifica que el tipo de retorno es correcto.',
      hint: 'Usa `lista.filter((item): item is NonNullable<T> => item != null)`. El type predicate `item is NonNullable<T>` le dice a TypeScript que después del filter los elementos no son null ni undefined.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `NonNullable<string | number | null | undefined>`?',
        options: ['string | number | null | undefined', 'string | number', 'never', 'unknown'],
        correctAnswer: 'string | number',
        correctFeedback:
          '¡Correcto! NonNullable elimina null y undefined. El resultado es string | number.',
        incorrectFeedback:
          'NonNullable elimina null y undefined. De `string | number | null | undefined` queda `string | number`.',
      },
      {
        question: '¿Es `NonNullable<T>` equivalente a `Exclude<T, null | undefined>`?',
        options: [
          'No — NonNullable es más restrictivo que Exclude',
          'Sí — son exactamente equivalentes',
          'Solo cuando T es una unión',
          'Solo con strictNullChecks activado',
        ],
        correctAnswer: 'Sí — son exactamente equivalentes',
        correctFeedback:
          '¡Exacto! NonNullable<T> es simplemente un alias más descriptivo de Exclude<T, null | undefined>.',
        incorrectFeedback:
          'NonNullable<T> es internamente equivalente a Exclude<T, null | undefined>. Es solo un alias más descriptivo para esta operación común.',
      },
      {
        question: '¿Cuál es la diferencia entre `Required<T>` y `NonNullable<T>` en el contexto de `tipo?: string | null`?',
        options: [
          'Son equivalentes para propiedades opcionales con null',
          'Required hace la propiedad obligatoria pero puede ser null; NonNullable quita el null pero la propiedad puede seguir siendo opcional',
          'Required quita null; NonNullable hace la propiedad obligatoria',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'Required hace la propiedad obligatoria pero puede ser null; NonNullable quita el null pero la propiedad puede seguir siendo opcional',
        correctFeedback:
          '¡Perfecto! Son transformaciones distintas. Required afecta la opcionalidad (?). NonNullable afecta si el valor puede ser null/undefined.',
        incorrectFeedback:
          'Required convierte `tipo?: string | null` en `tipo: string | null` (obligatorio, pero puede ser null). NonNullable<string | null> = string (quita el null). Son operaciones distintas.',
      },
      {
        question: '¿Para qué sirve `filtrarNulos<T>(lista: (T | null | undefined)[]): NonNullable<T>[]`?',
        options: [
          'Para contar los elementos nulos de la lista',
          'Para devolver solo los elementos que no son null ni undefined, con el tipo correcto',
          'Para convertir null a undefined',
          'Para hacer la lista inmutable',
        ],
        correctAnswer: 'Para devolver solo los elementos que no son null ni undefined, con el tipo correcto',
        correctFeedback:
          '¡Correcto! La función filtra los nulos y el tipo de retorno NonNullable<T>[] comunica que el resultado no tiene null ni undefined.',
        incorrectFeedback:
          'La función filtra null y undefined de la lista. El tipo de retorno NonNullable<T>[] le dice a TypeScript que el resultado no puede contener null ni undefined.',
      },
      {
        question: '¿Qué valor tiene `resultado` con `garantizarValor(null, "default")`?\n```typescript\nfunction garantizarValor<T>(v: T | null, d: NonNullable<T>): NonNullable<T> { return v ?? d }\n```',
        options: ['null', '"default"', 'undefined', 'null | "default"'],
        correctAnswer: '"default"',
        correctFeedback:
          '¡Perfecto! Como v es null, el operador ?? devuelve d = "default". El tipo de retorno es NonNullable<string> = string.',
        incorrectFeedback:
          'El operador ?? devuelve el lado derecho cuando el lado izquierdo es null o undefined. Como v = null, el resultado es d = "default".',
      },
    ],
  },
  {
    slug: 'utility-returntype',
    title: 'ReturnType',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 156,
    description:
      'Aprende a obtener el tipo de retorno de una función usando ReturnType<T>.',
    explanation: `## ReturnType<T>

\`ReturnType<T>\` extrae el **tipo de retorno** de una función. Recibe el tipo de una función y devuelve el tipo que esa función retorna.

### Sintaxis

\`\`\`typescript
type Resultado = ReturnType<typeof miFuncion>
// o con el tipo directamente:
type Resultado = ReturnType<(x: number) => string>  // string
\`\`\`

### ¿Por qué es útil?

Hay situaciones donde **no controlas** la definición de la función (viene de una librería, de otro módulo, etc.) y necesitas el tipo de lo que devuelve.

\`\`\`typescript
// Sin ReturnType
function crearUsuario() {
  return { id: 1, nombre: "Ana", email: "ana@email.com", activo: true }
}

// Con ReturnType no necesitas definir una interfaz separada
type Usuario = ReturnType<typeof crearUsuario>
// { id: number, nombre: string, email: string, activo: boolean }

const u: Usuario = crearUsuario()
\`\`\`

### Casos de uso

**1. Inferir el tipo de objetos devueltos:**
\`\`\`typescript
function getConfig() {
  return {
    apiUrl: "https://api.com",
    timeout: 5000,
    debug: false,
  }
}

type Config = ReturnType<typeof getConfig>
// Ahora Config y la función siempre están sincronizadas
\`\`\`

**2. Con funciones async:**
\`\`\`typescript
async function fetchUser(id: number) {
  const response = await fetch(\`/api/users/\${id}\`)
  return response.json() as Promise<{ id: number; nombre: string }>
}

// Awaited<ReturnType<F>> para el tipo sin la Promise
type FetchResult = Awaited<ReturnType<typeof fetchUser>>
// { id: number; nombre: string }
\`\`\`

**3. Reutilizar tipos de factorías:**
\`\`\`typescript
function crearEstado() {
  return { datos: null, cargando: false, error: null }
}

type Estado = ReturnType<typeof crearEstado>
// Si cambias crearEstado, Estado se actualiza automáticamente
\`\`\``,
    codeExample: `// helpers.ts

// Función que crea un objeto complejo
function crearProducto(nombre: string, precio: number) {
  return {
    id: Math.random(),
    nombre,
    precio,
    creadoEn: new Date(),
    activo: true,
    metadata: {
      version: 1,
      tags: [] as string[],
    },
  }
}

// ReturnType infiere la estructura completa
type Producto = ReturnType<typeof crearProducto>
// {
//   id: number,
//   nombre: string,
//   precio: number,
//   creadoEn: Date,
//   activo: boolean,
//   metadata: { version: number; tags: string[] }
// }

const laptop: Producto = crearProducto("Laptop Pro", 999)
console.log(laptop.metadata.tags)  // ✅ TypeScript conoce la estructura completa

// ReturnType con funciones de configuración
function obtenerConfiguracion() {
  return {
    api: {
      url: 'https://api.ejemplo.com',
      version: 'v2',
      timeout: 5000,
    },
    cache: {
      duracion: 300,
      maxSize: 100,
    },
    debug: process.env.NODE_ENV !== 'production',
  }
}

type Configuracion = ReturnType<typeof obtenerConfiguracion>
// Si agregas campos a la función, Configuracion se actualiza automáticamente

// Función que usa ReturnType para inyección de dependencias
function procesarConConfiguracion(config: Configuracion): void {
  console.log(\`API: \${config.api.url} (v\${config.api.version})\`)
  console.log(\`Debug: \${config.debug}\`)
}

procesarConConfiguracion(obtenerConfiguracion())`,
    keyPoints: [
      'ReturnType<T> extrae el tipo de retorno de una función',
      'Se usa con typeof para pasar el tipo de la función: ReturnType<typeof miFuncion>',
      'Mantiene el tipo sincronizado con la función — si cambia la función, el tipo cambia',
      'Muy útil cuando no defines el tipo de retorno explícitamente (se infiere)',
      'Para funciones async, usa Awaited<ReturnType<...>> para el tipo sin Promise',
    ],
    exercise: {
      description:
        'Crea una función `crearEstudianteConNotas(nombre: string, materia: string)` que devuelva `{ id: number, nombre, materia, notas: number[], promedio: number, aprobado: boolean, creadoEn: Date }`. Usa `ReturnType<typeof crearEstudianteConNotas>` para definir el tipo `EstudianteConNotas`. Luego crea una función `calcularRanking(estudiantes: EstudianteConNotas[]): EstudianteConNotas[]` que ordene por promedio descendente.',
      hint: 'Usa `Math.random()` para el id y calcula el promedio si el array de notas es fijo o vacío. ReturnType captura toda la estructura automáticamente.',
    },
    quiz: [
      {
        question: '¿Para qué sirve `ReturnType<typeof crearUsuario>`?',
        options: [
          'Para llamar a la función crearUsuario',
          'Para obtener el tipo del objeto que devuelve crearUsuario, sin necesidad de definir una interfaz',
          'Para hacer la función readonly',
          'Para convertir el tipo de retorno a any',
        ],
        correctAnswer: 'Para obtener el tipo del objeto que devuelve crearUsuario, sin necesidad de definir una interfaz',
        correctFeedback:
          '¡Correcto! ReturnType extrae el tipo de retorno. Así tienes el tipo sincronizado con la función automáticamente, sin definir una interfaz separada.',
        incorrectFeedback:
          'ReturnType extrae el tipo de retorno de la función. En lugar de definir `interface Usuario { ... }` manualmente, dejas que TypeScript infiera la estructura de la función.',
      },
      {
        question: '¿Por qué usar `typeof` con ReturnType: `ReturnType<typeof f>` en lugar de `ReturnType<f>`?',
        options: [
          'No hay diferencia — ambas formas son equivalentes',
          'typeof f obtiene el tipo de la función (para usarlo como T en ReturnType); f sola es un valor, no un tipo',
          'typeof f es más moderno',
          'f como tipo causaría un error porque no existe en TypeScript',
        ],
        correctAnswer: 'typeof f obtiene el tipo de la función (para usarlo como T en ReturnType); f sola es un valor, no un tipo',
        correctFeedback:
          '¡Exacto! En TypeScript, `f` es un valor (la función en sí). `typeof f` es su tipo (el tipo de la función). ReturnType espera un tipo, así que debes usar `typeof`.',
        incorrectFeedback:
          'En TypeScript, los valores y los tipos son espacios distintos. `f` es un valor. `typeof f` da el tipo de ese valor. ReturnType<T> espera un tipo, así que necesitas `typeof f`.',
      },
      {
        question: '¿Qué ventaja tiene `type Config = ReturnType<typeof getConfig>` sobre `interface Config { ... }`?',
        options: [
          'ReturnType es más rápido de procesar',
          'Si agregas una propiedad a getConfig, Config se actualiza automáticamente',
          'ReturnType permite heredar de otras interfaces',
          'No hay ventaja — es solo estilo',
        ],
        correctAnswer: 'Si agregas una propiedad a getConfig, Config se actualiza automáticamente',
        correctFeedback:
          '¡Perfecto! La sincronización automática es la clave. La función es la fuente de verdad, y ReturnType garantiza que el tipo siempre refleja la función.',
        incorrectFeedback:
          'La ventaja es el mantenimiento. Si modificas getConfig (agregas o cambias campos), Config se actualiza automáticamente. Con una interfaz manual, tendrías que actualizarla por separado.',
      },
      {
        question: '¿Qué tipo devuelve `ReturnType<() => string | number>`?',
        options: ['string', 'number', 'string | number', '() => string | number'],
        correctAnswer: 'string | number',
        correctFeedback:
          '¡Correcto! El tipo de retorno de la función es `string | number`, así que ReturnType devuelve `string | number`.',
        incorrectFeedback:
          'ReturnType extrae el tipo del valor que retorna la función. La función retorna `string | number`, así que ReturnType devuelve `string | number`.',
      },
      {
        question: '¿Qué se usa para obtener el tipo de retorno de una función async sin la Promise?',
        options: [
          'ReturnType<typeof asyncFn>',
          'AsyncReturnType<typeof asyncFn>',
          'Awaited<ReturnType<typeof asyncFn>>',
          'Promise<ReturnType<typeof asyncFn>>',
        ],
        correctAnswer: 'Awaited<ReturnType<typeof asyncFn>>',
        correctFeedback:
          '¡Perfecto! Una función async devuelve Promise<T>. ReturnType da Promise<T>. Awaited<Promise<T>> da T — el tipo real sin la Promise.',
        incorrectFeedback:
          'Una función async devuelve Promise<T>. ReturnType<typeof asyncFn> = Promise<T>. Para obtener T (sin la Promise), necesitas Awaited<ReturnType<typeof asyncFn>>.',
      },
    ],
  },
  {
    slug: 'utility-parameters',
    title: 'Parameters',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 157,
    description:
      'Aprende a obtener los tipos de los parámetros de una función usando Parameters<T>.',
    explanation: `## Parameters<T>

\`Parameters<T>\` extrae los **tipos de los parámetros** de una función como una **tupla**. Es complementario a ReturnType.

### Sintaxis

\`\`\`typescript
type Params = Parameters<typeof miFuncion>
// Devuelve una tupla con los tipos de cada parámetro
\`\`\`

### Ejemplos

\`\`\`typescript
function crearUsuario(nombre: string, edad: number, activo: boolean) {
  return { nombre, edad, activo }
}

type ParamsCrearUsuario = Parameters<typeof crearUsuario>
// [string, number, boolean] — una tupla

// Acceder a parámetros individuales
type PrimerParam = Parameters<typeof crearUsuario>[0]  // string
type SegundoParam = Parameters<typeof crearUsuario>[1]  // number
\`\`\`

### Casos de uso

**1. Crear un tipo para los argumentos de una función:**
\`\`\`typescript
function buscar(termino: string, pagina: number, filtros: string[]) {
  // ...
}

type ArgsBuscar = Parameters<typeof buscar>
// [string, number, string[]]

// Guardar y reutilizar argumentos
const args: ArgsBuscar = ["typescript", 1, ["gratis"]]
buscar(...args)  // ✅
\`\`\`

**2. Crear wrappers o decoradores:**
\`\`\`typescript
function conLog<F extends (...args: unknown[]) => unknown>(fn: F) {
  return (...args: Parameters<F>): ReturnType<F> => {
    console.log("Argumentos:", args)
    return fn(...args) as ReturnType<F>
  }
}
\`\`\`

**3. Reutilizar tipos de argumentos:**
\`\`\`typescript
function enviarEmail(para: string, asunto: string, cuerpo: string) {}

type ArgsEmail = Parameters<typeof enviarEmail>
// [string, string, string]

function programarEmail(...args: ArgsEmail): void {
  // Reutiliza exactamente la misma firma
}
\`\`\``,
    codeExample: `// utils.ts

// Función de dominio
function crearPedido(
  clienteId: number,
  productos: { id: number; cantidad: number }[],
  direccion: string,
  prioridad: 'normal' | 'express'
): { id: number; clienteId: number; productos: { id: number; cantidad: number }[]; direccion: string; prioridad: 'normal' | 'express' } {
  return {
    id: Math.floor(Math.random() * 10000),
    clienteId,
    productos,
    direccion,
    prioridad,
  }
}

// Parameters extrae la tupla de parámetros
type ParamsCrearPedido = Parameters<typeof crearPedido>
// [number, { id: number; cantidad: number }[], string, 'normal' | 'express']

// Acceder a tipos individuales
type ClienteIdType = Parameters<typeof crearPedido>[0]  // number
type ProductosType = Parameters<typeof crearPedido>[1]  // { id: number; cantidad: number }[]
type PrioridadType = Parameters<typeof crearPedido>[3]  // 'normal' | 'express'

// Reutilizar la firma de parámetros
function validarPedido(...params: ParamsCrearPedido): boolean {
  const [clienteId, productos, direccion, prioridad] = params
  return clienteId > 0 && productos.length > 0 && direccion.length > 0 && !!prioridad
}

const params: ParamsCrearPedido = [
  1,
  [{ id: 10, cantidad: 2 }],
  'Calle 123, Ciudad',
  'express'
]

if (validarPedido(...params)) {
  const pedido = crearPedido(...params)
  console.log(\`Pedido #\${pedido.id} creado\`)
}`,
    keyPoints: [
      'Parameters<T> devuelve una tupla con los tipos de todos los parámetros de T',
      'Se usa con typeof: Parameters<typeof miFuncion>',
      'Puedes acceder a parámetros individuales con [0], [1], etc.',
      'Útil para crear wrappers que necesitan la misma firma de parámetros',
      'Complementario a ReturnType — juntos permiten replicar la firma completa de una función',
    ],
    exercise: {
      description:
        'Crea una función `actualizarInventario(productoId: number, cantidad: number, operacion: "sumar" | "restar", nota: string)`. Usa `Parameters<typeof actualizarInventario>` para definir el tipo `ParamsActualizar`. Luego crea una función `ejecutarConDelay(params: ParamsActualizar, delayMs: number): Promise<void>` que simule un delay con `setTimeout` antes de llamar a la función. Verifica que TypeScript verifica los tipos de params correctamente.',
      hint: 'Usa `(...params: ParamsActualizar)` para que la función tenga la misma firma. Los tipos de la tupla son verificados automáticamente.',
    },
    quiz: [
      {
        question: '¿Qué tipo devuelve `Parameters<(a: string, b: number) => void>`?',
        options: ['string | number', '[string, number]', 'string & number', 'void'],
        correctAnswer: '[string, number]',
        correctFeedback:
          '¡Correcto! Parameters devuelve una tupla con los tipos de los parámetros en orden. [string, number] es una tupla de dos elementos.',
        incorrectFeedback:
          'Parameters devuelve una TUPLA, no una unión. La diferencia es que [string, number] tiene orden y tamaño fijo. string | number sería una unión de tipos.',
      },
      {
        question: '¿Cómo accedes al tipo del segundo parámetro con Parameters?',
        options: [
          'Parameters<typeof f>.second',
          'Parameters<typeof f>[1]',
          'Parameters<typeof f>[2]',
          'Parameters<typeof f>.param1',
        ],
        correctAnswer: 'Parameters<typeof f>[1]',
        correctFeedback:
          '¡Correcto! Como es una tupla, accedes por índice (base 0). El segundo parámetro está en el índice 1.',
        incorrectFeedback:
          'Parameters devuelve una tupla (array con tipos fijos). Para acceder al segundo elemento de una tupla, usas el índice 1 (base 0). `[1]` es el segundo, `[0]` es el primero.',
      },
      {
        question: '¿Para qué sirve `(...args: Parameters<F>): ReturnType<F>` en un wrapper genérico?',
        options: [
          'Para copiar el nombre de la función',
          'Para que el wrapper tenga exactamente la misma firma que F — mismos parámetros y tipo de retorno',
          'Para hacer la función F inmutable',
          'Para agregar parámetros extra a F',
        ],
        correctAnswer: 'Para que el wrapper tenga exactamente la misma firma que F — mismos parámetros y tipo de retorno',
        correctFeedback:
          '¡Perfecto! Usando Parameters<F> y ReturnType<F>, el wrapper tiene la misma interfaz pública que la función original. El código que llama al wrapper no nota la diferencia.',
        incorrectFeedback:
          'Combinando Parameters<F> para los argumentos y ReturnType<F> para el retorno, el wrapper es transparente — tiene exactamente la misma firma que la función original.',
      },
      {
        question: '¿En qué se diferencia Parameters de ReturnType?',
        options: [
          'Son lo mismo aplicado a partes diferentes de la función',
          'Parameters extrae los tipos de los parámetros (entrada); ReturnType extrae el tipo de retorno (salida)',
          'Parameters es solo para funciones async; ReturnType para sync',
          'ReturnType devuelve una tupla; Parameters devuelve un tipo simple',
        ],
        correctAnswer: 'Parameters extrae los tipos de los parámetros (entrada); ReturnType extrae el tipo de retorno (salida)',
        correctFeedback:
          '¡Exacto! Son complementarios. Parameters da la firma de entrada (como tupla), ReturnType da el tipo de salida.',
        incorrectFeedback:
          'Son complementarios. Parameters captura la entrada (parámetros de la función). ReturnType captura la salida (lo que la función devuelve).',
      },
      {
        question: '¿Cuál sería `Parameters<typeof setTimeout>`?',
        options: [
          '[number]',
          '[() => void, number]',
          '(callback: TimerHandler, ms?: number) => number',
          '[TimerHandler, number?, ...unknown[]]',
        ],
        correctAnswer: '[TimerHandler, number?, ...unknown[]]',
        correctFeedback:
          '¡Perfecto! setTimeout recibe una función (TimerHandler), un delay opcional (number?), y parámetros adicionales opcionales. Parameters captura esa tupla.',
        incorrectFeedback:
          'setTimeout tiene la firma `(callback, delay?, ...args)`. Parameters captura esa firma como tupla: [TimerHandler, number?, ...unknown[]].',
      },
    ],
  },
  {
    slug: 'utility-types-api',
    title: 'Utility types con respuestas de API',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 158,
    description:
      'Aprende a usar utility types para adaptar tipos de datos que vienen de una API.',
    explanation: `## Utility types con respuestas de API

Cuando trabajas con APIs, los datos que recibes raramente tienen exactamente la forma que necesitas en el frontend. Los utility types permiten **transformar** esos tipos de forma segura.

### El problema

Una API puede devolver:
- Más datos de los que necesitas (datos sensibles, campos internos)
- Datos con nulls que necesitas manejar
- Estructuras que necesitas ampliar
- Tipos que necesitas reducir para formularios

### Caso 1: Limpiar respuesta de API

\`\`\`typescript
// Lo que devuelve la API
interface UsuarioAPI {
  id: number
  nombre: string
  email: string
  passwordHash: string      // Nunca debería llegar al cliente
  tokenRefresco: string     // Dato interno
  metadatos: Record<string, unknown>
  creadoEn: string          // ISO string
  actualizadoEn: string
}

// Lo que expone el frontend
type UsuarioFrontend = Pick<UsuarioAPI, "id" | "nombre" | "email">
\`\`\`

### Caso 2: Normalizar nulls de API

\`\`\`typescript
// La API puede devolver campos null
interface RespuestaAPI {
  nombre: string | null
  avatar: string | null
  descripcion: string | null | undefined
}

// Normalizado: sin nulls
type RespuestaNormalizada = {
  [K in keyof RespuestaAPI]: NonNullable<RespuestaAPI[K]>
}
\`\`\`

### Caso 3: Adaptar para formulario de edición

\`\`\`typescript
// La API devuelve esto
interface ProductoAPI {
  id: number
  nombre: string
  precio: number
  categoria: string
  stock: number
  publicado: boolean
  creadoEn: string
}

// Para editar: sin id y creadoEn, todo opcional
type FormularioEditar = Partial<Omit<ProductoAPI, "id" | "creadoEn">>
\`\`\`

### Caso 4: Crear variantes por rol

\`\`\`typescript
// Vista de administrador (todo)
type VistaAdmin = ProductoAPI

// Vista de usuario (sin datos de gestión)
type VistaUsuario = Pick<ProductoAPI, "id" | "nombre" | "precio" | "categoria">

// Vista de inventario (solo datos de stock)
type VistaInventario = Pick<ProductoAPI, "id" | "nombre" | "stock">
\`\`\``,
    codeExample: `// api.ts

// Tipo completo de la API (como viene del servidor)
interface PedidoAPI {
  id: number
  numero: string
  clienteId: number
  clienteEmail: string
  productos: {
    productoId: number
    nombre: string
    precio: number
    cantidad: number
  }[]
  subtotal: number
  impuestos: number
  total: number
  estado: 'nuevo' | 'procesando' | 'enviado' | 'entregado' | 'cancelado'
  notas: string | null
  direccionEnvio: string
  fechaCreacion: string
  fechaActualizacion: string
  internoCodigo: string  // No mostrar al cliente
}

// Vista para el cliente (sin datos internos)
type PedidoCliente = Omit<PedidoAPI, 'clienteId' | 'internoCodigo' | 'fechaActualizacion'>

// Vista para el repartidor (solo lo necesario para entregar)
type PedidoRepartidor = Pick<PedidoAPI, 'id' | 'numero' | 'direccionEnvio' | 'estado' | 'productos'>

// Para actualizar estado (solo esos campos, limitados)
type EstadoActualizable = Exclude<PedidoAPI['estado'], 'nuevo'>
type ActualizarPedido = {
  id: number
  estado: EstadoActualizable
  notas?: NonNullable<PedidoAPI['notas']>
}

// Para crear pedido (sin campos del servidor)
type NuevoPedido = Omit<PedidoAPI, 'id' | 'numero' | 'fechaCreacion' | 'fechaActualizacion' | 'internoCodigo' | 'subtotal' | 'impuestos' | 'total'>

// Función que transforma respuesta de API a vista del cliente
function adaptarParaCliente(pedido: PedidoAPI): PedidoCliente {
  const { clienteId: _clienteId, internoCodigo: _codigo, fechaActualizacion: _fecha, ...resto } = pedido
  return resto
}`,
    keyPoints: [
      'Pick elimina datos sensibles o innecesarios de respuestas de API',
      'Omit quita los campos que genera el servidor al crear datos para envío',
      'NonNullable normaliza los campos null/undefined de respuestas de API',
      'Exclude crea subconjuntos de uniones de estados o permisos',
      'Los utility types permiten crear múltiples vistas del mismo tipo para diferentes roles o contextos',
    ],
    exercise: {
      description:
        'Tienes `interface ArticuloAPI { id: number; slug: string; titulo: string; contenido: string; autor: string; email_autor: string; publicado: boolean; vistas: number; likes: number; creadoEn: string; tags: string[]; borrador: boolean }`. Crea: (1) `ArticuloPublico` sin email_autor, borrador, y vistas, (2) `ArticuloResumen` con solo id, slug, titulo, autor, y creadoEn, (3) `NuevoArticulo` sin id, vistas, likes, y creadoEn, y (4) `ArticuloEditable` como NuevoArticulo pero todo opcional excepto id.',
      hint: 'Para (4) combina Partial con Pick o Omit. El id debe seguir siendo requerido, así que sepáralo: `{ id: number } & Partial<Omit<ArticuloAPI, "id" | "vistas" | "likes" | "creadoEn">>`.',
    },
    quiz: [
      {
        question: '¿Por qué usar `Pick<UsuarioAPI, "id" | "nombre" | "email">` en lugar de devolver UsuarioAPI completo al cliente?',
        options: [
          'Pick hace la respuesta más rápida',
          'Para excluir campos sensibles (passwordHash, tokens internos) que nunca deben llegar al cliente',
          'Porque TypeScript no puede manejar tipos grandes',
          'Para reducir el tamaño del tipo en memoria',
        ],
        correctAnswer: 'Para excluir campos sensibles (passwordHash, tokens internos) que nunca deben llegar al cliente',
        correctFeedback:
          '¡Correcto! La seguridad es la razón principal. Los campos sensibles como passwordHash nunca deben exponerse al frontend. Pick los excluye a nivel de tipos.',
        incorrectFeedback:
          'La razón principal es la seguridad. Datos como passwordHash, tokens, y IDs internos no deben llegar al cliente. Pick define exactamente qué se expone.',
      },
      {
        question: '¿Qué hace `Exclude<PedidoAPI["estado"], "nuevo">` si estado es una unión de strings?',
        options: [
          'Hace que "nuevo" sea readonly',
          'Crea una unión de estados sin "nuevo" — el estado inicial que el cliente no puede establecer',
          'Elimina la propiedad estado del pedido',
          'Hace que estado sea siempre "nuevo"',
        ],
        correctAnswer: 'Crea una unión de estados sin "nuevo" — el estado inicial que el cliente no puede establecer',
        correctFeedback:
          '¡Exacto! `PedidoAPI["estado"]` obtiene el tipo de la propiedad estado. Exclude quita "nuevo" de esa unión, creando los estados que se pueden asignar desde fuera.',
        incorrectFeedback:
          '`PedidoAPI["estado"]` usa indexación de tipos para obtener el tipo de la propiedad. Exclude luego quita "nuevo" de esa unión, dejando solo los estados actualizables.',
      },
      {
        question: '¿Cuál es el patrón correcto para tipar datos que se envían a la API para crear un recurso?',
        options: [
          'El tipo completo del recurso',
          'Omit<RecursoCompleto, "id" | "creadoEn" | "actualizadoEn"> — sin los campos que genera el servidor',
          'Partial<RecursoCompleto>',
          'any',
        ],
        correctAnswer: 'Omit<RecursoCompleto, "id" | "creadoEn" | "actualizadoEn"> — sin los campos que genera el servidor',
        correctFeedback:
          '¡Perfecto! El patrón estándar para tipos de creación (POST) es Omit con los campos que el servidor genera automáticamente.',
        incorrectFeedback:
          'El patrón para crear recursos es Omit con los campos que genera el servidor (id, timestamps). El cliente no debe enviar esos datos.',
      },
      {
        question: '¿Para qué sirve crear múltiples tipos (VistaAdmin, VistaUsuario, VistaInventario) del mismo tipo base?',
        options: [
          'Para hacer el código más largo',
          'Para exponer solo los campos relevantes para cada rol o contexto, evitando acceso accidental a datos no necesarios',
          'Para que TypeScript compile más rápido',
          'Porque cada rol usa un lenguaje de programación diferente',
        ],
        correctAnswer: 'Para exponer solo los campos relevantes para cada rol o contexto, evitando acceso accidental a datos no necesarios',
        correctFeedback:
          '¡Correcto! Cada contexto necesita diferentes datos. Las vistas especializadas hacen explícito qué datos son relevantes y previenen el uso accidental de campos no necesarios.',
        incorrectFeedback:
          'Las vistas especializadas aplican el principio de menor privilegio a nivel de tipos. Cada rol solo ve lo que necesita, lo que también sirve como documentación del sistema.',
      },
      {
        question: '¿Cuál utility type usarías para convertir `notas: string | null` de la API en un campo que nunca sea null?',
        options: [
          'Required<notas>',
          'NonNullable<typeof notas>',
          'Readonly<string | null>',
          'Exclude<string | null, undefined>',
        ],
        correctAnswer: 'NonNullable<typeof notas>',
        correctFeedback:
          '¡Exacto! NonNullable<string | null> = string. Elimina null del tipo, garantizando que el campo siempre tiene un valor string.',
        incorrectFeedback:
          'NonNullable<string | null> = string. Es el utility type diseñado exactamente para esto — eliminar null y undefined de un tipo.',
      },
    ],
  },
  {
    slug: 'utility-types-estados-app',
    title: 'Utility types con estados de aplicación',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 159,
    description:
      'Aprende a combinar utility types con estados como loading, success, error y empty.',
    explanation: `## Utility types con estados de aplicación

Los utility types son especialmente útiles para modelar los distintos **estados** de los datos en una aplicación. Combinados con genéricos, dan una descripción precisa de cómo cambia la información en cada estado.

### El patrón AsyncState

\`\`\`typescript
type AsyncState<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }
\`\`\`

### Variante con Partial para datos parciales

\`\`\`typescript
// El estado de éxito puede tener datos parciales (se van cargando)
type AsyncStatePartial<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando'; datosPrevios?: T }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string; datosPrevios?: T }
\`\`\`

### Estado de formulario con utility types

\`\`\`typescript
interface FormState<T> {
  datos: Partial<T>
  errores: Partial<Record<keyof T, string>>
  estado: 'vacio' | 'editando' | 'enviando' | 'exito' | 'error'
  mensajeError?: string
}
\`\`\`

### Estado de lista paginada

\`\`\`typescript
interface ListState<T> {
  items: T[]
  total: number
  pagina: number
  porPagina: number
  cargando: boolean
  error: string | null
  filtros: Partial<Pick<T, keyof T extends string ? keyof T : never>>
}
\`\`\`

### Combinar estados con Required para validación

\`\`\`typescript
interface DatosFormulario {
  nombre?: string
  email?: string
  mensaje?: string
}

// Estado "válido para enviar"
type FormularioListo = Required<DatosFormulario>

function puedeEnviarse(datos: DatosFormulario): datos is FormularioListo {
  return !!datos.nombre && !!datos.email && !!datos.mensaje
}
\`\`\``,
    codeExample: `// states.ts

// Estado genérico de petición asíncrona con utility types
type AsyncState<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }

// Estado de formulario con utility types
interface FormState<T> {
  datos: Partial<T>
  errores: Partial<Record<keyof T, string>>
  estado: 'inicial' | 'modificado' | 'enviando' | 'enviado' | 'error'
}

// Tipos del dominio
interface ContactoForm {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}

// Combinaciones útiles con utility types
type EstadoLista<T> = AsyncState<{
  items: T[]
  total: number
  pagina: number
}>

// Estado inicial de cualquier formulario
function crearEstadoInicial<T>(): FormState<T> {
  return {
    datos: {},
    errores: {},
    estado: 'inicial',
  }
}

// Actualizar campo del formulario
function actualizarCampo<T, K extends keyof T>(
  estado: FormState<T>,
  campo: K,
  valor: T[K]
): FormState<T> {
  return {
    ...estado,
    datos: { ...estado.datos, [campo]: valor },
    errores: { ...estado.errores, [campo]: undefined },
    estado: 'modificado',
  }
}

// Verificar si el formulario está listo
function formularioListo<T>(
  datos: Partial<T>,
  camposRequeridos: (keyof T)[]
): datos is Required<Pick<T, typeof camposRequeridos[number]>> {
  return camposRequeridos.every((campo) => datos[campo] !== undefined && datos[campo] !== '')
}

// Uso
const estadoForm = crearEstadoInicial<ContactoForm>()
const conNombre = actualizarCampo(estadoForm, 'nombre', 'Ana García')
const conEmail = actualizarCampo(conNombre, 'email', 'ana@email.com')

const listo = formularioListo(conEmail.datos, ['nombre', 'email', 'asunto', 'mensaje'])
// false — faltan asunto y mensaje`,
    keyPoints: [
      'AsyncState<T> combina genéricos con utility types para estados de carga',
      'FormState<T> con Partial<T> y Partial<Record<keyof T, string>> es un patrón robusto',
      'Required se usa para modelar el estado "datos validados y completos"',
      'Los type predicates permiten el narrowing de Partial a Required después de validar',
      'Combinar utility types con genéricos crea sistemas de tipos reutilizables y seguros',
    ],
    exercise: {
      description:
        'Implementa un sistema de gestión de estado para una lista de tareas. Crea: (1) `EstadoLista<T>` con items: T[], cargando: boolean, error: string | null, y filtros: Partial<T>, (2) `EstadoTareas = EstadoLista<{ id: number; titulo: string; completada: boolean; prioridad: "alta" | "media" | "baja" }>`, (3) una función `aplicarFiltros(estado: EstadoTareas): EstadoTareas["items"]` que filtre según los filtros activos, y (4) una función `toggleCompletada(estado: EstadoTareas, id: number): EstadoTareas` que cambie el estado de completada.',
      hint: 'Para aplicarFiltros, filtra items según cada clave en filtros que no sea undefined. Para toggleCompletada, usa map y retorna un nuevo estado sin mutar el original.',
    },
    quiz: [
      {
        question: '¿Por qué `Partial<T>` es ideal para los datos de un formulario en progreso?',
        options: [
          'Porque los formularios siempre tienen todos los campos',
          'Porque el usuario llena el formulario campo por campo — en cualquier momento puede haber campos sin llenar',
          'Porque Partial hace los formularios más rápidos',
          'Porque los formularios no necesitan tipos en TypeScript',
        ],
        correctAnswer: 'Porque el usuario llena el formulario campo por campo — en cualquier momento puede haber campos sin llenar',
        correctFeedback:
          '¡Exacto! Un formulario en progreso es inherentemente parcial. El usuario puede haber llenado nombre pero no email. Partial modela exactamente eso.',
        incorrectFeedback:
          'Un formulario en progreso no siempre tiene todos los campos. El usuario lo llena gradualmente. Partial<T> modela ese estado correctamente — cualquier combinación de campos es válida.',
      },
      {
        question: '¿Qué ventaja tiene `Required<Pick<T, K>>` como tipo de retorno de un type guard?',
        options: [
          'Hace los campos readonly',
          'Le dice a TypeScript que dentro del if, los campos K de T están garantizados y no son undefined',
          'Hace todos los campos obligatorios en toda la app',
          'Convierte el tipo a any',
        ],
        correctAnswer: 'Le dice a TypeScript que dentro del if, los campos K de T están garantizados y no son undefined',
        correctFeedback:
          '¡Perfecto! Un type guard con `datos is Required<Pick<T, K>>` le dice a TypeScript que después de la verificación, los campos K están garantizados.',
        incorrectFeedback:
          'Un type guard que retorna `datos is AlgúnTipo` hace narrowing. TypeScript sabe que en la rama `true`, datos tiene ese tipo. Required<Pick<T, K>> dice que esos campos específicos están presentes.',
      },
      {
        question: '¿Qué tipo tiene `errores` en `FormState<T>` si es `Partial<Record<keyof T, string>>`?',
        options: [
          'string — todos los errores en un solo string',
          'Un objeto donde las claves son las mismas que T pero todas opcionales, y los valores son strings (o undefined)',
          'Record<string, string> sin restricciones',
          'keyof T[]',
        ],
        correctAnswer: 'Un objeto donde las claves son las mismas que T pero todas opcionales, y los valores son strings (o undefined)',
        correctFeedback:
          '¡Correcto! Record<keyof T, string> crea un objeto con las mismas claves que T, y Partial lo hace todo opcional. Perfecto para errores por campo.',
        incorrectFeedback:
          'Record<keyof T, string> = { campo1: string, campo2: string, ... }. Partial hace todo opcional. El resultado: cada clave de T puede tener un string de error o estar ausente.',
      },
      {
        question: '¿Por qué `AsyncState<T>` con cuatro variantes (idle, cargando, exito, error) es mejor que `{ cargando: boolean; datos: T | null; error: string | null }`?',
        options: [
          'AsyncState es más corto de escribir',
          'La unión discriminada previene estados imposibles — con boolean+null puedes tener cargando=true Y datos=algo al mismo tiempo',
          'TypeScript solo admite uniones discriminadas',
          'El boolean approach es más rápido',
        ],
        correctAnswer: 'La unión discriminada previene estados imposibles — con boolean+null puedes tener cargando=true Y datos=algo al mismo tiempo',
        correctFeedback:
          '¡Perfectísimo! Con boolean+null, puedes representar `{ cargando: true, datos: { id: 1 }, error: "algo" }` — un estado que no tiene sentido. La unión discriminada lo previene.',
        incorrectFeedback:
          'Las uniones discriminadas modelan estados mutuamente excluyentes. Con booleans y nulls, puedes crear estados imposibles (cargando Y con datos). La unión garantiza que solo un estado es posible a la vez.',
      },
      {
        question: '¿Cómo ayuda TypeScript cuando haces narrowing de `AsyncState<T>` con `if (estado.tipo === "exito")`?',
        options: [
          'TypeScript convierte estado a any dentro del if',
          'TypeScript sabe que dentro del if, estado es la variante con datos: T — puedes acceder a estado.datos de forma segura',
          'TypeScript ignora el if en los genéricos',
          'TypeScript solo ayuda con narrowing en tipos primitivos',
        ],
        correctAnswer: 'TypeScript sabe que dentro del if, estado es la variante con datos: T — puedes acceder a estado.datos de forma segura',
        correctFeedback:
          '¡Correcto! El narrowing reduce el tipo. Dentro del if, TypeScript sabe que estamos en la variante de éxito que tiene `datos: T`. Fuera del if, datos no existe.',
        incorrectFeedback:
          'El narrowing con discriminantes funciona perfectamente con genéricos. TypeScript rastrea que dentro del if `estado.tipo === "exito"`, el estado es de la variante que tiene `datos: T`.',
      },
    ],
  },
  {
    slug: 'mini-practica-sistema-productos-tipado',
    title: 'Mini práctica: sistema de productos tipado',
    module: 'Utility types intermedios',
    moduleNumber: 20,
    order: 160,
    description:
      'Crea un pequeño sistema tipado de productos usando genéricos, constraints y utility types.',
    explanation: `## Mini práctica: sistema de productos tipado

En esta lección pondrás en práctica todo lo aprendido en el Nivel 4: genéricos, constraints, y utility types para construir un pequeño sistema de gestión de productos completamente tipado.

### Lo que construirás

Un sistema de gestión de productos con:
- Tipos de datos del dominio
- CRUD genérico con constraints
- Transformaciones con utility types
- Estados de la aplicación tipados
- Helpers reutilizables

### Arquitectura del sistema

\`\`\`typescript
// 1. Tipos del dominio
interface Producto { ... }
interface Categoria { ... }

// 2. Tipos de API (lo que envía/recibe el servidor)
type NuevoProducto = Omit<Producto, "id" | "creadoEn">
type ActualizarProducto = Partial<Omit<Producto, "id" | "creadoEn">>
type ProductoPublico = Pick<Producto, "id" | "nombre" | "precio" | "categoria">

// 3. Estado de la aplicación
type EstadoProductos = {
  lista: AsyncState<Producto[]>
  seleccionado: Producto | null
  formulario: FormState<NuevoProducto>
  filtros: Partial<Pick<Producto, "categoria" | "activo">>
}

// 4. Helpers genéricos
function buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined
function actualizarEnLista<T extends { id: number }>(lista: T[], item: T): T[]
function eliminarDeLista<T extends { id: number }>(lista: T[], id: number): T[]
\`\`\`

### Qué aplica de cada lección

| Concepto | Aplicación |
|---|---|
| Genéricos básicos | Funciones CRUD genéricas |
| Interfaces genéricas | AsyncState<T>, FormState<T> |
| Constraints | T extends { id: number } |
| keyof | Acceso seguro a propiedades |
| Partial | Formularios y actualizaciones parciales |
| Required | Validación antes de enviar |
| Readonly | Configuraciones inmutables |
| Pick | Vistas públicas del producto |
| Omit | Tipos de creación/actualización |
| Record | Mapa de categorías |
| Exclude | Filtrar estados no válidos |
| NonNullable | Normalizar nulls de la API |
| ReturnType | Inferir tipos de factories |`,
    codeExample: `// products.ts — Sistema completo de gestión de productos

// ===== TIPOS DEL DOMINIO =====

interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria: 'tecnología' | 'ropa' | 'hogar' | 'deportes' | 'libros'
  stock: number
  activo: boolean
  imagen: string | null
  creadoEn: string
}

// ===== UTILITY TYPES APLICADOS =====

// Para crear (sin id y creadoEn)
type NuevoProducto = Omit<Producto, 'id' | 'creadoEn'>

// Para actualizar (sin id y creadoEn, todo opcional)
type ActualizarProducto = Partial<Omit<Producto, 'id' | 'creadoEn'>>

// Vista pública (sin stock y activo)
type ProductoPublico = Pick<Producto, 'id' | 'nombre' | 'precio' | 'categoria' | 'imagen'>

// Mapa de categorías con metadata
type MetadataCategoria = Record<Producto['categoria'], { icono: string; color: string }>

// Estados de petición
type AsyncState<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string }

// ===== HELPERS GENÉRICOS =====

function buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find((item) => item.id === id)
}

function actualizarEnLista<T extends { id: number }>(lista: T[], actualizado: T): T[] {
  return lista.map((item) => item.id === actualizado.id ? actualizado : item)
}

function eliminarDeLista<T extends { id: number }>(lista: T[], id: number): T[] {
  return lista.filter((item) => item.id !== id)
}

function filtrarPor<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[] {
  return lista.filter((item) => item[campo] === valor)
}

// ===== ESTADO DE LA APP =====

interface EstadoProductos {
  lista: AsyncState<Producto[]>
  seleccionado: Producto | null
  filtros: Partial<Pick<Producto, 'categoria' | 'activo'>>
}

const estadoInicial: EstadoProductos = {
  lista: { tipo: 'idle' },
  seleccionado: null,
  filtros: {},
}

// ===== DATOS DE PRUEBA =====

const productos: Producto[] = [
  { id: 1, nombre: 'Laptop Pro', descripcion: 'Potente laptop', precio: 999, categoria: 'tecnología', stock: 10, activo: true, imagen: '/laptop.jpg', creadoEn: '2024-01-01' },
  { id: 2, nombre: 'Camiseta Deportiva', descripcion: 'Cómoda y ligera', precio: 29, categoria: 'ropa', stock: 50, activo: true, imagen: null, creadoEn: '2024-01-02' },
]

// Usar los helpers
const laptop = buscarPorId(productos, 1)           // Producto | undefined
const tecno = filtrarPor(productos, 'categoria', 'tecnología')  // Producto[]
const sinId1 = eliminarDeLista(productos, 1)       // Producto[]

// Normalizar null de imagen
const productosNormalizados = productos.map((p) => ({
  ...p,
  imagen: p.imagen ?? '/placeholder.jpg',
}))`,
    keyPoints: [
      'Los genéricos permiten crear helpers CRUD reutilizables para cualquier entidad con id',
      'Los utility types crean variantes del tipo base para diferentes contextos (crear, actualizar, ver)',
      'Los estados tipados como AsyncState<T> previenen estados imposibles en la app',
      'keyof + constraints permiten funciones de filtrado seguras y reutilizables',
      'Toda esta maquinaria de tipos no afecta el JavaScript generado — es solo verificación en tiempo de compilación',
    ],
    exercise: {
      description:
        'Extiende el sistema de productos con: (1) una función `crearProducto(datos: NuevoProducto): Producto` que genere id y creadoEn automáticamente, (2) una función `aplicarActualizacion(producto: Producto, cambios: ActualizarProducto): Producto` que aplique cambios inmutablemente, (3) una función `convertirAPublico(producto: Producto): ProductoPublico` que devuelva solo los campos públicos, y (4) la metadata de categorías como `const CATEGORIAS: MetadataCategoria` con iconos y colores para cada categoría. TypeScript debe verificar que todos los tipos son correctos.',
      hint: 'Para crearProducto usa spread y añade id (Math.random()) y creadoEn (new Date().toISOString()). Para aplicarActualizacion usa spread: `{ ...producto, ...cambios }`. Para convertirAPublico destructura y retorna solo los campos de ProductoPublico.',
    },
    quiz: [
      {
        question: '¿Por qué `NuevoProducto = Omit<Producto, "id" | "creadoEn">` es más mantenible que redefinir la interfaz manualmente?',
        options: [
          'Porque Omit es más rápido de escribir',
          'Porque si agregas campos a Producto, NuevoProducto los incluye automáticamente sin cambio manual',
          'Porque TypeScript requiere Omit para tipos de creación',
          'No hay diferencia en mantenibilidad',
        ],
        correctAnswer: 'Porque si agregas campos a Producto, NuevoProducto los incluye automáticamente sin cambio manual',
        correctFeedback:
          '¡Correcto! El mantenimiento automático es la clave. Si agregas descripcionCorta a Producto, NuevoProducto la incluirá sin que tengas que actualizar nada más.',
        incorrectFeedback:
          'La sincronización automática es crucial. Con Omit, agregar un campo a Producto se refleja automáticamente en NuevoProducto. Con una interfaz manual, tendrías que actualizar ambas.',
      },
      {
        question: '¿Por qué `filtrarPor<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[]` es mejor que `filtrarPor(lista: any[], campo: string, valor: any): any[]`?',
        options: [
          'La versión tipada es más rápida en ejecución',
          'La versión tipada verifica que campo existe en T y que valor tiene el tipo correcto para ese campo',
          'La versión con any lanza excepciones',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'La versión tipada verifica que campo existe en T y que valor tiene el tipo correcto para ese campo',
        correctFeedback:
          '¡Exacto! TypeScript previene `filtrarPor(productos, "precioInvalido", "barato")` y `filtrarPor(productos, "precio", "caro")` — campo inválido y valor del tipo incorrecto.',
        incorrectFeedback:
          'Con tipos, TypeScript verifica dos cosas: (1) que el campo existe en T (keyof T), y (2) que el valor tiene el tipo correcto para ese campo (T[K]). Con any, nada se verifica.',
      },
      {
        question: '¿Qué representan los cuatro estados de `AsyncState<T>`?',
        options: [
          'Los cuatro tipos de errores posibles',
          'El ciclo de vida de una petición: sin iniciar, en progreso, completada con éxito, completada con error',
          'Los cuatro métodos HTTP',
          'Las cuatro fases de compilación de TypeScript',
        ],
        correctAnswer: 'El ciclo de vida de una petición: sin iniciar, en progreso, completada con éxito, completada con error',
        correctFeedback:
          '¡Perfecto! Idle (sin iniciar), cargando (en progreso), exito (completada), error (falló). Son los únicos estados posibles de una petición asíncrona.',
        incorrectFeedback:
          'Los cuatro estados modelan el ciclo de vida completo. Idle = no empezada, cargando = en progreso, exito = terminó bien, error = terminó mal. Son mutuamente excluyentes.',
      },
      {
        question: '¿Qué garantiza `<T extends { id: number }>` en los helpers CRUD?',
        options: [
          'Que T solo puede ser el tipo Producto',
          'Que T puede ser cualquier entidad con id — hace los helpers reutilizables para usuarios, pedidos, etc.',
          'Que id es siempre mayor que 0',
          'Que la lista no puede estar vacía',
        ],
        correctAnswer: 'Que T puede ser cualquier entidad con id — hace los helpers reutilizables para usuarios, pedidos, etc.',
        correctFeedback:
          '¡Exacto! El constraint es el mínimo necesario. Como solo se necesita id para comparar, los helpers funcionan con productos, usuarios, pedidos, tareas — cualquier cosa con id.',
        incorrectFeedback:
          'El constraint establece el mínimo: necesitamos id para comparar. Al no pedir más, los helpers son reutilizables con cualquier entidad que tenga id — no solo Producto.',
      },
      {
        question: '¿En qué afectan los tipos de TypeScript al JavaScript generado en producción?',
        options: [
          'Los tipos añaden código de verificación al JavaScript final',
          'Los tipos no tienen ningún efecto en el JavaScript final — son eliminados en la compilación',
          'Los tipos hacen el JavaScript más lento',
          'Los tipos se convierten en comentarios en el JavaScript',
        ],
        correctAnswer: 'Los tipos no tienen ningún efecto en el JavaScript final — son eliminados en la compilación',
        correctFeedback:
          '¡Correcto! TypeScript es JavaScript con tipos. Los tipos son eliminados durante la compilación. El JavaScript resultante no contiene ninguna traza de los tipos.',
        incorrectFeedback:
          'TypeScript compila a JavaScript puro. Los tipos, interfaces, genéricos — todo desaparece. El código JavaScript resultante es exactamente el que habrías escrito a mano, sin nada extra.',
      },
    ],
  },
]

export const tsModule20: Module = {
  number: 20,
  title: 'Utility types intermedios',
  level: 'nivel4',
  lessons: lessonsTsModule20,
}
