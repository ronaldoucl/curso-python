import type { Lesson, Module } from '@/types'

export const lessonsTsModule23: Lesson[] = [
  {
    slug: 'errores-con-unknown',
    title: 'Errores con unknown',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 179,
    description:
      'Aprende por qué los errores capturados pueden tratarse como unknown y cómo manejarlos de forma segura.',
    explanation: `## Errores con unknown

En TypeScript moderno (versión 4.0+), el parámetro de un bloque \`catch\` tiene tipo \`unknown\` por defecto cuando usas \`useUnknownInCatchVariables\` (activado con \`strict\`).

### El problema con any en errores

En JavaScript, cualquier cosa puede ser lanzada como error:

\`\`\`typescript
throw "un string"      // válido
throw 42               // válido
throw { mensaje: "x" } // válido
throw new Error("x")   // lo más común
\`\`\`

Por eso, TypeScript no puede asumir que lo capturado en \`catch\` es un objeto \`Error\`.

### Antes (TypeScript < 4.0): catch siempre era any

\`\`\`typescript
try {
  // ...
} catch (error) {
  console.log(error.message)  // TypeScript permitía esto (any)
  // Pero si lanzaron un string o número, .message no existe
}
\`\`\`

### Ahora con unknown: TypeScript te protege

\`\`\`typescript
try {
  // ...
} catch (error) {
  // error es unknown — TypeScript no te permite usarlo sin verificar
  console.log(error.message)  // ❌ Error: error es unknown
}
\`\`\`

### Cómo manejar el unknown correctamente

\`\`\`typescript
try {
  // ...
} catch (error) {
  if (error instanceof Error) {
    // Dentro del if, error es Error ✅
    console.log(error.message)
    console.log(error.stack)
  } else {
    // Error no convencional — convertir a string de forma segura
    console.log(String(error))
  }
}
\`\`\`

### Helper para obtener el mensaje de forma segura

\`\`\`typescript
function obtenerMensajeError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Error desconocido'
}
\`\`\``,
    codeExample: `// errors.ts

// Helper reutilizable para obtener mensaje de error
function obtenerMensaje(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  if (typeof error === 'number') return \`Error código: \${error}\`
  return 'Error desconocido'
}

// ✅ Manejo correcto con unknown
async function cargarDatos(url: string): Promise<unknown> {
  try {
    const resp = await fetch(url)
    if (!resp.ok) throw new Error(\`HTTP \${resp.status}: \${resp.statusText}\`)
    return await resp.json()
  } catch (error) {
    // error es unknown — debemos verificar antes de usar
    const mensaje = obtenerMensaje(error)
    console.error(\`Error al cargar \${url}:\`, mensaje)
    throw error  // Re-lanzar para que el llamador lo maneje
  }
}

// Ejemplo: diferentes tipos de error
function ejemploDiferentesErrores(): void {
  const errores: unknown[] = [
    new Error('Error estándar'),
    'String como error',
    42,
    { tipo: 'personalizado', codigo: 500 },
    null,
  ]

  errores.forEach((err) => {
    if (err instanceof Error) {
      console.log(\`Error: \${err.message} (stack: \${err.stack?.split('\\n')[0]})\`)
    } else if (typeof err === 'string') {
      console.log(\`String lanzado: "\${err}"\`)
    } else if (typeof err === 'number') {
      console.log(\`Número lanzado: \${err}\`)
    } else if (typeof err === 'object' && err !== null) {
      console.log(\`Objeto lanzado:, \${JSON.stringify(err)}\`)
    } else {
      console.log(\`Valor desconocido: \${String(err)}\`)
    }
  })
}

// Función que puede fallar de varias formas
function parsearJSON(texto: string): unknown {
  try {
    return JSON.parse(texto)
  } catch (error) {
    // SyntaxError si el JSON es inválido
    if (error instanceof SyntaxError) {
      throw new Error(\`JSON inválido: \${error.message}\`)
    }
    throw error  // Re-lanzar si es otro tipo de error
  }
}

// Uso práctico
async function procesarRespuesta(url: string): Promise<void> {
  try {
    const datos = await cargarDatos(url)
    console.log('Datos cargados:', datos)
  } catch (error) {
    // Mostrar mensaje seguro al usuario
    const mensaje = obtenerMensaje(error)
    const errorEl = document.getElementById('error-mensaje')
    if (errorEl) {
      errorEl.textContent = \`No se pudieron cargar los datos: \${mensaje}\`
    }
  }
}`,
    keyPoints: [
      'Con strict mode, el parámetro catch tiene tipo unknown — TypeScript te obliga a verificar antes de usar',
      'Cualquier valor puede ser lanzado con throw — no solo instancias de Error',
      'instanceof Error verifica si el error es un Error estándar',
      'Un helper como obtenerMensaje(error: unknown): string centraliza el manejo de errores desconocidos',
      'String(error) convierte cualquier valor a string de forma segura como fallback',
    ],
    exercise: {
      description:
        'Crea un helper `function describirError(error: unknown): { tipo: string; mensaje: string; codigo?: number }` que: si es instanceof Error retorne { tipo: "Error", mensaje: error.message }, si es string retorne { tipo: "string", mensaje: error }, si es un objeto con propiedad "code" número retorne { tipo: "codigo", mensaje: String(error), codigo: error.code }, y en cualquier otro caso retorne { tipo: "desconocido", mensaje: String(error) }.',
      hint: 'Para verificar el objeto con "code": `typeof error === "object" && error !== null && "code" in error && typeof (error as { code: unknown }).code === "number"`. Después del narrowing, accede a (error as { code: number }).code.',
    },
    quiz: [
      {
        question: '¿Por qué el parámetro `catch (error)` tiene tipo `unknown` en TypeScript moderno?',
        options: [
          'Es un error de TypeScript',
          'Porque cualquier valor puede ser lanzado con throw — no solo instancias de Error',
          'Porque unknown es más rápido que any',
          'Solo ocurre en TypeScript 5+',
        ],
        correctAnswer: 'Porque cualquier valor puede ser lanzado con throw — no solo instancias de Error',
        correctFeedback:
          '¡Correcto! En JavaScript puedes lanzar strings, números, objetos, etc. TypeScript no puede asumir que lo capturado es un Error, así que usa unknown para protegerte.',
        incorrectFeedback:
          'JavaScript permite lanzar cualquier valor: `throw "string"`, `throw 42`, `throw { custom: true }`. TypeScript no puede saber qué tipo tendrá el error, así que usa unknown para que debas verificar antes de usar.',
      },
      {
        question: '¿Qué verificas con `error instanceof Error`?',
        options: [
          'Que error es any',
          'Que error es una instancia de la clase Error o de una subclase suya',
          'Que error tiene la propiedad message',
          'Que el catch tiene un error real',
        ],
        correctAnswer: 'Que error es una instancia de la clase Error o de una subclase suya',
        correctFeedback:
          '¡Exacto! instanceof Error verifica que el valor fue creado con new Error() (o new TypeError(), new SyntaxError(), etc.). Después del if, TypeScript sabe que error tiene .message y .stack.',
        incorrectFeedback:
          'instanceof Error verifica que error es una instancia de la clase Error o de una subclase. Después de la verificación, TypeScript sabe que tiene .message, .name y .stack.',
      },
      {
        question: '¿Qué hace `String(error)` cuando error es un objeto no conocido?',
        options: [
          'Lanza un error',
          'Retorna "[object Object]" o llama .toString() del objeto',
          'Retorna undefined',
          'Convierte el objeto a JSON',
        ],
        correctAnswer: 'Retorna "[object Object]" o llama .toString() del objeto',
        correctFeedback:
          '¡Correcto! String() convierte cualquier valor a string de forma segura. Para objetos sin toString personalizado devuelve "[object Object]". Para Error usa .toString() que devuelve "Error: mensaje".',
        incorrectFeedback:
          'String() es el último recurso seguro. Nunca lanza. Para objetos devuelve "[object Object]" o el resultado de .toString(). Para Error devuelve "Error: el mensaje". Para null devuelve "null".',
      },
      {
        question: '¿Cuál es el tipo más preciso para el parámetro de `obtenerMensaje(error: unknown): string`?',
        options: [
          'any — para aceptar cualquier cosa',
          'Error — para solo aceptar errores reales',
          'unknown — porque cualquier valor puede ser lanzado',
          'string — porque los mensajes son strings',
        ],
        correctAnswer: 'unknown — porque cualquier valor puede ser lanzado',
        correctFeedback:
          '¡Perfecto! unknown es el tipo correcto porque la función recibe valores lanzados con throw, que pueden ser de cualquier tipo. unknown obliga a verificar antes de usar.',
        incorrectFeedback:
          'unknown es correcto porque cualquier valor puede llegar a la función (fue lanzado con throw). any también funcionaría pero es menos seguro. Error sería muy restrictivo — no todos los errores son instancias de Error.',
      },
      {
        question: '¿Por qué es mejor `instanceof Error` que verificar `typeof error === "object" && error.message`?',
        options: [
          'instanceof es más corto',
          'instanceof verifica que viene de la clase Error con todas sus garantías; typeof solo verifica que es un objeto',
          'typeof no funciona en TypeScript',
          'Ambos son equivalentes',
        ],
        correctAnswer: 'instanceof verifica que viene de la clase Error con todas sus garantías; typeof solo verifica que es un objeto',
        correctFeedback:
          '¡Exacto! Un objeto { message: "algo" } pasa el typeof check pero no es un Error real. instanceof Error verifica que tiene el prototipo de Error, incluyendo .stack, .name, etc.',
        incorrectFeedback:
          'typeof verifica solo que es un objeto — cualquier objeto con .message pasaría. instanceof Error verifica que el valor realmente viene de la clase Error, con todas las garantías del prototipo.',
      },
    ],
  },
  {
    slug: 'try-catch-tipado',
    title: 'try...catch tipado',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 180,
    description:
      'Aprende a manejar errores en TypeScript sin asumir tipos incorrectos dentro de catch.',
    explanation: `## try...catch tipado

El bloque \`try...catch\` en TypeScript funciona como en JavaScript, pero la forma en que manejas el error dentro del \`catch\` es importante para la seguridad de tipos.

### Patrón básico correcto

\`\`\`typescript
try {
  const datos = await obtenerDatos()
  procesarDatos(datos)
} catch (error) {
  // ✅ Siempre verificar antes de usar
  if (error instanceof Error) {
    mostrarError(error.message)
  } else {
    mostrarError('Ocurrió un error inesperado')
  }
}
\`\`\`

### No asumir el tipo del error

\`\`\`typescript
// ❌ Incorrecto — asumir que siempre es Error
try {
  lanzarCualquierCosa()
} catch (error) {
  console.log((error as Error).message)  // Peligroso si no es Error
}

// ✅ Correcto — verificar
try {
  lanzarCualquierCosa()
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message)
  }
}
\`\`\`

### Re-lanzar errores específicos

\`\`\`typescript
try {
  // ...
} catch (error) {
  if (error instanceof NetworkError) {
    // Manejo específico de error de red
    reintentarConexion()
  } else if (error instanceof ValidationError) {
    // Manejo específico de error de validación
    mostrarErrorValidacion((error as ValidationError).campo)
  } else {
    // Error no esperado — re-lanzar para que llegue más arriba
    throw error
  }
}
\`\`\`

### finally: código que siempre ejecuta

\`\`\`typescript
async function operacion(): Promise<void> {
  mostrarCargando(true)
  try {
    const datos = await fetch('/api/datos')
    procesarDatos(datos)
  } catch (error) {
    mostrarError(obtenerMensaje(error))
  } finally {
    mostrarCargando(false)  // Siempre se ejecuta, haya error o no
  }
}
\`\`\``,
    codeExample: `// errors.ts

function obtenerMensaje(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Error desconocido'
}

// Patrón básico con verificación de tipo
async function guardarFormulario(datos: { nombre: string; email: string }): Promise<boolean> {
  try {
    const resp = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    })

    if (!resp.ok) {
      throw new Error(\`Error del servidor: \${resp.status}\`)
    }

    return true
  } catch (error) {
    // Verificar el tipo antes de usar
    if (error instanceof Error) {
      console.error('Error al guardar:', error.message)
      // Podemos acceder a error.stack, error.name, etc.
    } else {
      console.error('Error inesperado:', error)
    }
    return false
  }
}

// Re-lanzar errores que no puedes manejar aquí
async function procesarPedido(pedidoId: number): Promise<void> {
  try {
    const resp = await fetch(\`/api/pedidos/\${pedidoId}/procesar\`, {
      method: 'POST',
    })

    if (resp.status === 404) {
      throw new Error('Pedido no encontrado')
    }

    if (resp.status === 409) {
      throw new Error('El pedido ya fue procesado')
    }

    if (!resp.ok) {
      throw new Error(\`Error del servidor: \${resp.status}\`)
    }

    console.log('Pedido procesado exitosamente')

  } catch (error) {
    if (error instanceof Error) {
      // Errores que podemos describir bien — los mostramos
      if (error.message.includes('no encontrado') || error.message.includes('ya fue')) {
        const el = document.getElementById('mensaje-pedido')
        if (el) el.textContent = error.message
        return  // No re-lanzar — es un error esperado
      }
    }
    // Error no esperado — re-lanzar para que el nivel superior lo maneje
    throw error
  }
}

// Finally — limpiar siempre
async function cargarConSpinner(url: string): Promise<unknown> {
  const spinner = document.getElementById('spinner')
  spinner?.setAttribute('aria-hidden', 'false')

  try {
    const resp = await fetch(url)
    if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
    return await resp.json()
  } catch (error) {
    console.error(obtenerMensaje(error))
    return null
  } finally {
    // Siempre ocultar el spinner, haya error o no
    spinner?.setAttribute('aria-hidden', 'true')
  }
}`,
    keyPoints: [
      'Siempre verifica el tipo del error antes de acceder a sus propiedades',
      'Re-lanza errores que no puedes manejar en el catch actual',
      'finally garantiza que el código de limpieza siempre se ejecuta',
      'Distingue entre errores esperados (que puedes manejar) y errores inesperados (re-lanzar)',
      'No uses as Error para silenciar el error de TypeScript — puede fallar en runtime',
    ],
    exercise: {
      description:
        'Implementa `async function eliminarUsuario(id: number): Promise<{ exito: boolean; mensaje: string }>` que: llame DELETE a `/api/usuarios/${id}`, si el status es 404 retorne `{ exito: false, mensaje: "Usuario no encontrado" }`, si el status es 403 retorne `{ exito: false, mensaje: "Sin permiso" }`, si resp.ok retorne `{ exito: true, mensaje: "Usuario eliminado" }`, en catch si es Error retorne `{ exito: false, mensaje: error.message }`, y use finally para loggear "Intento de eliminación completado".',
      hint: 'Puedes lanzar errores con new Error("...") para los casos 404 y 403, y capturarlos en el catch. O puedes manejarlos directamente con if antes de lanzar. Usa finally para el log.',
    },
    quiz: [
      {
        question: '¿Cuándo ejecuta el bloque `finally`?',
        options: [
          'Solo cuando no hay error',
          'Solo cuando hay error',
          'Siempre — haya error o no, incluso si el try retorna',
          'Solo cuando se usa throw',
        ],
        correctAnswer: 'Siempre — haya error o no, incluso si el try retorna',
        correctFeedback:
          '¡Correcto! finally siempre ejecuta. Es perfecto para código de limpieza: ocultar spinners, cerrar conexiones, liberar recursos.',
        incorrectFeedback:
          'finally ejecuta siempre: si el try termina normalmente, si hay un error, o incluso si hay un return dentro del try o catch. Es la garantía de que el código de limpieza siempre corre.',
      },
      {
        question: '¿Por qué re-lanzar un error con `throw error` en un catch?',
        options: [
          'Para que TypeScript compile el código',
          'Cuando no puedes manejar ese error en el catch actual — lo propaga para que un nivel superior lo maneje',
          'Para convertir el error a otro tipo',
          'Para detener el programa',
        ],
        correctAnswer: 'Cuando no puedes manejar ese error en el catch actual — lo propaga para que un nivel superior lo maneje',
        correctFeedback:
          '¡Exacto! Re-lanzar es útil cuando el error es de un tipo que no esperabas o que no puedes manejar localmente. Lo propagas para que alguien más arriba en el stack lo maneje.',
        incorrectFeedback:
          'Re-lanzar con throw error propaga el error original a un catch más arriba en el stack. Es el patrón correcto cuando el catch actual no sabe cómo manejar ese error específico.',
      },
      {
        question: '¿Qué problema tiene `(error as Error).message` en un catch?',
        options: [
          'message no existe en Error',
          'Si error no es una instancia de Error, acceder a .message puede retornar undefined o lanzar error',
          'as no funciona en catch',
          'No hay problema — siempre es seguro',
        ],
        correctAnswer: 'Si error no es una instancia de Error, acceder a .message puede retornar undefined o lanzar error',
        correctFeedback:
          '¡Correcto! Si alguien lanzó `throw "un string"`, then error es un string y `(error as Error).message` devuelve undefined. TypeScript no detecta este error — ocurre en runtime.',
        incorrectFeedback:
          'as Error silencia a TypeScript pero no verifica el tipo en runtime. Si el error no es una instancia de Error (por ejemplo, un string), .message devuelve undefined. Usa instanceof Error para verificar.',
      },
      {
        question: '¿Cuál es la diferencia entre manejar un error y re-lanzarlo?',
        options: [
          'No hay diferencia',
          'Manejar = hacer algo con el error (mostrar UI, loggear, retornar valor). Re-lanzar = propagarlo para que otro catch lo maneje',
          'Re-lanzar siempre termina el programa',
          'Manejar solo funciona con errores de network',
        ],
        correctAnswer: 'Manejar = hacer algo con el error (mostrar UI, loggear, retornar valor). Re-lanzar = propagarlo para que otro catch lo maneje',
        correctFeedback:
          '¡Perfecto! Manejar significa resolver el problema a nivel local. Re-lanzar significa "no puedo manejarlo aquí, que lo haga otro".',
        incorrectFeedback:
          'Manejar un error significa hacer algo con él: mostrar un mensaje, retornar un valor por defecto, registrar el error. Re-lanzar significa propagarlo al catch más cercano en el stack de llamadas.',
      },
      {
        question: '¿Por qué usar `finally` para ocultar un spinner de carga?',
        options: [
          'finally es más rápido que hacerlo en try y catch por separado',
          'Garantiza que el spinner se oculte incluso si el try retorna antes o si hay un error',
          'finally es el único lugar donde se puede acceder al DOM',
          'TypeScript requiere finally en funciones async',
        ],
        correctAnswer: 'Garantiza que el spinner se oculte incluso si el try retorna antes o si hay un error',
        correctFeedback:
          '¡Exacto! Si pones el código de ocultar el spinner en el try y en el catch por separado, puedes olvidar uno. Con finally, siempre se oculta sin importar qué pasó.',
        incorrectFeedback:
          'finally garantiza que el código corre siempre. Si pusieras el spinner en el try, no correría en caso de error. Si lo pusieras en el catch, no correría en el caso exitoso. finally cubre ambos.',
      },
    ],
  },
  {
    slug: 'narrowing-errores',
    title: 'Narrowing de errores',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 181,
    description:
      'Aprende a verificar si un error es una instancia de Error antes de acceder a message.',
    explanation: `## Narrowing de errores

El **narrowing** de errores es el proceso de verificar el tipo de un error capturado antes de acceder a sus propiedades.

### Los tipos de verificación disponibles

**1. instanceof para clases de Error**

\`\`\`typescript
if (error instanceof Error) {
  // error es Error — tiene .message, .name, .stack
  console.log(error.message)
}

if (error instanceof TypeError) {
  // error es TypeError — subclase de Error
  console.log(error.message)
}
\`\`\`

**2. typeof para primitivos**

\`\`\`typescript
if (typeof error === 'string') {
  // error es string
  console.log(error)
}

if (typeof error === 'number') {
  console.log(\`Código de error: \${error}\`)
}
\`\`\`

**3. Narrowing compuesto**

\`\`\`typescript
function manejarError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  if (typeof error === 'object' && error !== null) {
    // Puede ser un objeto de error personalizado
    const obj = error as Record<string, unknown>
    if (typeof obj['message'] === 'string') return obj['message']
  }
  return String(error)
}
\`\`\`

### Narrowing con type guards de error

\`\`\`typescript
interface ErrorAPI {
  code: number
  message: string
  field?: string
}

function esErrorAPI(error: unknown): error is ErrorAPI {
  return (
    typeof error === 'object' &&
    error !== null &&
    typeof (error as { code?: unknown }).code === 'number' &&
    typeof (error as { message?: unknown }).message === 'string'
  )
}

// Uso
catch (error) {
  if (esErrorAPI(error)) {
    mostrarErrorCampo(error.field ?? 'general', error.message)
  }
}
\`\`\``,
    codeExample: `// error-narrowing.ts

// ===== JERARQUÍA DE ERRORES NATIVOS =====
// TypeError — tipo de operación incorrecto
// RangeError — valor fuera de rango
// SyntaxError — syntax inválida
// ReferenceError — referencia no definida

function analizarError(error: unknown): void {
  if (error instanceof TypeError) {
    console.log(\`TypeError: \${error.message}\`)
    console.log('Probablemente accediste a una propiedad de null/undefined')
  } else if (error instanceof RangeError) {
    console.log(\`RangeError: \${error.message}\`)
    console.log('Probablemente un índice o tamaño fuera de rango')
  } else if (error instanceof SyntaxError) {
    console.log(\`SyntaxError: \${error.message}\`)
    console.log('JSON inválido u otro error de sintaxis')
  } else if (error instanceof Error) {
    // Error genérico (o una subclase no reconocida)
    console.log(\`Error (\${error.name}): \${error.message}\`)
  } else if (typeof error === 'string') {
    console.log(\`String lanzado: \${error}\`)
  } else if (typeof error === 'object' && error !== null) {
    // Objeto lanzado que no es Error
    console.log('Objeto lanzado:', error)
    const obj = error as Record<string, unknown>
    if (typeof obj['message'] === 'string') {
      console.log(\`Mensaje: \${obj['message']}\`)
    }
  } else {
    console.log(\`Valor primitivo lanzado: \${String(error)}\`)
  }
}

// Type guard para errores de API personalizado
interface ErrorDeValidacion {
  tipo: 'validacion'
  campo: string
  mensaje: string
}

function esErrorDeValidacion(e: unknown): e is ErrorDeValidacion {
  return (
    typeof e === 'object' &&
    e !== null &&
    (e as { tipo?: unknown }).tipo === 'validacion' &&
    typeof (e as { campo?: unknown }).campo === 'string' &&
    typeof (e as { mensaje?: unknown }).mensaje === 'string'
  )
}

// Función que puede lanzar diferentes tipos de error
async function procesarFormulario(datos: unknown): Promise<void> {
  try {
    // Simular procesamiento con diferentes tipos de error
    const resp = await fetch('/api/procesar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    })

    if (!resp.ok) {
      const errorData: unknown = await resp.json()
      throw errorData  // Puede ser cualquier cosa
    }

    console.log('Formulario procesado')

  } catch (error) {
    // Narrowing para manejar cada caso
    if (esErrorDeValidacion(error)) {
      console.log(\`Error de validación en \${error.campo}: \${error.mensaje}\`)
      const campo = document.getElementById(\`error-\${error.campo}\`)
      if (campo) campo.textContent = error.mensaje

    } else if (error instanceof Error) {
      console.log(\`Error técnico: \${error.message}\`)
      const general = document.getElementById('error-general')
      if (general) general.textContent = 'Error al procesar el formulario'

    } else {
      console.log('Error desconocido:', String(error))
    }
  }
}`,
    keyPoints: [
      'instanceof verifica la jerarquía de clases: TypeError, RangeError, SyntaxError son subclases de Error',
      'typeof es para valores primitivos: string, number, boolean',
      'Los type guards personalizados permiten narrowing de objetos de error con forma específica',
      'El orden importa: verifica los tipos más específicos primero, luego los más generales',
      'Record<string, unknown> permite acceder a propiedades de un objeto desconocido después de verificar que es un objeto',
    ],
    exercise: {
      description:
        'Crea una función `clasificarError(error: unknown): "red" | "autenticacion" | "validacion" | "servidor" | "desconocido"` que: retorne "red" si error es instanceof Error y message incluye "network" o "fetch", retorne "autenticacion" si es un objeto con `{ status: 401 }` o `{ code: "UNAUTHORIZED" }`, retorne "validacion" si tiene `{ tipo: "validacion" }`, retorne "servidor" si es instanceof Error y message incluye "500", y retorne "desconocido" en cualquier otro caso.',
      hint: 'Empieza con las verificaciones más específicas. Para el objeto con status 401: `typeof error === "object" && error !== null && (error as { status?: unknown }).status === 401`. Verifica el mensaje de red con `error.message.includes("network") || error.message.includes("fetch")`.',
    },
    quiz: [
      {
        question: '¿Por qué verificar `error instanceof TypeError` antes de `error instanceof Error`?',
        options: [
          'El orden no importa',
          'TypeError es una subclase de Error — si verificas Error primero, el case de TypeError nunca llega',
          'TypeError e Error no están relacionados',
          'instanceof no respeta la jerarquía de clases',
        ],
        correctAnswer: 'TypeError es una subclase de Error — si verificas Error primero, el case de TypeError nunca llega',
        correctFeedback:
          '¡Exacto! TypeError hereda de Error, así que `error instanceof Error` es true para TypeErrors también. Debes verificar las subclases antes que la clase base.',
        incorrectFeedback:
          'TypeError es subclase de Error. Si primero verificas `error instanceof Error`, todos los TypeErrors entrarán por esa rama. Para capturar TypeError específicamente, debe ir ANTES del check de Error.',
      },
      {
        question: '¿Cómo accedes a una propiedad de un objeto unknown de forma segura?',
        options: [
          'error.propiedad directamente',
          '(error as { propiedad: string }).propiedad después de verificar que es un objeto',
          'error["propiedad"] sin verificar',
          'Nunca puedes acceder a propiedades de unknown',
        ],
        correctAnswer: '(error as { propiedad: string }).propiedad después de verificar que es un objeto',
        correctFeedback:
          '¡Correcto! Primero verifica `typeof error === "object" && error !== null`, luego accede con `(error as Record<string, unknown>).propiedad` o con un type assertion más específico.',
        incorrectFeedback:
          'Para acceder a propiedades de unknown: primero verifica que es un objeto (typeof === "object" && !== null), luego usa type assertion para acceder a la propiedad. TypeScript necesita la verificación antes de permitir el acceso.',
      },
      {
        question: '¿Qué hace `const obj = error as Record<string, unknown>` después de verificar que error es un objeto?',
        options: [
          'Convierte error a un objeto',
          'Le dice a TypeScript que error tiene propiedades string que pueden ser cualquier tipo',
          'Crea una copia del objeto',
          'Lanza error si las propiedades no son strings',
        ],
        correctAnswer: 'Le dice a TypeScript que error tiene propiedades string que pueden ser cualquier tipo',
        correctFeedback:
          '¡Perfecto! Record<string, unknown> es la forma de decir "objeto con claves string y valores de tipo desconocido". Después puedes hacer `obj["mensaje"]` y TypeScript sabe que el resultado es unknown.',
        incorrectFeedback:
          'Record<string, unknown> es el tipo de "objeto con propiedades de tipo desconocido". Después de la verificación typeof === "object", el as Record<string, unknown> es razonable para acceder a propiedades individuales.',
      },
      {
        question: '¿Cuándo es apropiado crear un type guard personalizado para un error?',
        options: [
          'Nunca — siempre usa instanceof Error',
          'Cuando el error es un objeto con una forma específica que no hereda de Error',
          'Solo con strings',
          'TypeScript genera type guards de error automáticamente',
        ],
        correctAnswer: 'Cuando el error es un objeto con una forma específica que no hereda de Error',
        correctFeedback:
          '¡Correcto! Algunos sistemas (APIs, librerías) lanzan objetos que no son instancias de Error. Un type guard personalizado permite verificar su estructura de forma segura.',
        incorrectFeedback:
          'Un type guard es útil cuando el error tiene una forma específica que no es una subclase de Error. Por ejemplo, una API que lanza `{ code: 422, field: "email", message: "inválido" }`. instanceof Error no funcionaría.',
      },
      {
        question: '¿Qué pasa si lanzas un objeto `{}` con `throw {}` y luego haces `error instanceof Error`?',
        options: [
          'Devuelve true porque todos los objetos son Error',
          'Devuelve false — {} no es una instancia de Error',
          'Lanza una excepción',
          'TypeScript lo previene en compilación',
        ],
        correctAnswer: 'Devuelve false — {} no es una instancia de Error',
        correctFeedback:
          '¡Correcto! {} no tiene Error en su cadena de prototipos. instanceof Error verifica la cadena de prototipos, no si el objeto tiene propiedades de Error.',
        incorrectFeedback:
          'instanceof verifica la cadena de prototipos. {} no es una instancia de Error porque no fue creado con new Error(). Devuelve false, así que el if(error instanceof Error) no ejecuta.',
      },
    ],
  },
  {
    slug: 'errores-personalizados-typescript',
    title: 'Crear errores personalizados',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 182,
    description:
      'Aprende a crear clases de error personalizadas para representar problemas específicos de tu aplicación.',
    explanation: `## Crear errores personalizados

TypeScript permite crear clases de error que extienden \`Error\`. Esto te permite:
- Dar nombres descriptivos a los errores
- Agregar propiedades específicas (código HTTP, campo con error, etc.)
- Hacer narrowing específico con \`instanceof\`

### Clase de error básica

\`\`\`typescript
class ErrorDeRed extends Error {
  constructor(mensaje: string) {
    super(mensaje)
    this.name = 'ErrorDeRed'
  }
}

class ErrorDeValidacion extends Error {
  campo: string

  constructor(campo: string, mensaje: string) {
    super(mensaje)
    this.name = 'ErrorDeValidacion'
    this.campo = campo
  }
}
\`\`\`

### Usar y distinguir errores personalizados

\`\`\`typescript
try {
  await enviarFormulario(datos)
} catch (error) {
  if (error instanceof ErrorDeValidacion) {
    // Acceso a error.campo ✅
    mostrarErrorEnCampo(error.campo, error.message)
  } else if (error instanceof ErrorDeRed) {
    mostrarMensajeRed()
  } else if (error instanceof Error) {
    mostrarErrorGeneral(error.message)
  }
}
\`\`\`

### Cuándo crear errores personalizados

- Cuando necesitas llevar información adicional (campo, código HTTP, etc.)
- Cuando tienes múltiples tipos de error que quieres distinguir con instanceof
- Cuando quieres nombres de error descriptivos en los logs
- Cuando construyes una librería o módulo reutilizable`,
    codeExample: `// errors.ts

// ===== ERRORES PERSONALIZADOS =====

class ErrorHTTP extends Error {
  readonly status: number
  readonly statusText: string

  constructor(status: number, statusText: string) {
    super(\`HTTP Error \${status}: \${statusText}\`)
    this.name = 'ErrorHTTP'
    this.status = status
    this.statusText = statusText
  }
}

class ErrorAutenticacion extends ErrorHTTP {
  constructor() {
    super(401, 'Unauthorized')
    this.name = 'ErrorAutenticacion'
  }
}

class ErrorNoEncontrado extends ErrorHTTP {
  readonly recurso: string

  constructor(recurso: string) {
    super(404, 'Not Found')
    this.name = 'ErrorNoEncontrado'
    this.recurso = recurso
  }
}

class ErrorDeValidacion extends Error {
  readonly errores: Record<string, string>

  constructor(errores: Record<string, string>) {
    const campos = Object.keys(errores).join(', ')
    super(\`Validación fallida en: \${campos}\`)
    this.name = 'ErrorDeValidacion'
    this.errores = errores
  }
}

// ===== USO DE LOS ERRORES =====

async function obtenerProducto(id: number): Promise<{ nombre: string; precio: number }> {
  const resp = await fetch(\`/api/productos/\${id}\`)

  if (resp.status === 401) throw new ErrorAutenticacion()
  if (resp.status === 404) throw new ErrorNoEncontrado(\`producto #\${id}\`)
  if (!resp.ok) throw new ErrorHTTP(resp.status, resp.statusText)

  return resp.json()
}

// Manejo centralizado de errores con narrowing
async function mostrarProducto(id: number): Promise<void> {
  try {
    const producto = await obtenerProducto(id)
    console.log(\`\${producto.nombre}: $\${producto.precio}\`)

  } catch (error) {
    if (error instanceof ErrorAutenticacion) {
      window.location.href = '/login'

    } else if (error instanceof ErrorNoEncontrado) {
      const el = document.getElementById('producto')
      if (el) el.textContent = \`No se encontró el \${error.recurso}\`

    } else if (error instanceof ErrorDeValidacion) {
      // Mostrar errores por campo
      Object.entries(error.errores).forEach(([campo, mensaje]) => {
        const el = document.getElementById(\`error-\${campo}\`)
        if (el) el.textContent = mensaje
      })

    } else if (error instanceof ErrorHTTP) {
      console.error(\`Error HTTP \${error.status}\`)

    } else if (error instanceof Error) {
      console.error(\`Error: \${error.message}\`)
    }
  }
}

// Función que valida y lanza ErrorDeValidacion
function validarRegistro(datos: { nombre: string; email: string }): void {
  const errores: Record<string, string> = {}

  if (!datos.nombre || datos.nombre.trim().length < 2) {
    errores['nombre'] = 'El nombre debe tener al menos 2 caracteres'
  }

  if (!datos.email || !datos.email.includes('@')) {
    errores['email'] = 'Email inválido'
  }

  if (Object.keys(errores).length > 0) {
    throw new ErrorDeValidacion(errores)
  }
}`,
    keyPoints: [
      'Extender Error con una clase personalizada permite instanceof específico y propiedades extras',
      'Siempre asigna this.name en el constructor para que los logs sean descriptivos',
      'Los errores personalizados pueden encadenar información — ErrorAutenticacion extends ErrorHTTP extends Error',
      'instanceof con errores personalizados da narrowing automático de TypeScript',
      'Centraliza la lógica de los errores en un archivo errors.ts para reutilizarlos',
    ],
    exercise: {
      description:
        'Crea tres clases de error para un sistema de tienda online: (1) `ErrorStock extends Error` con propiedad `readonly productoId: number` y `readonly stockDisponible: number`, (2) `ErrorPago extends Error` con propiedad `readonly codigoError: string` y `readonly reintentable: boolean`, (3) `ErrorEnvio extends Error` con propiedad `readonly pais: string`. Luego crea una función `procesarCompra(datos: { productoId: number, pais: string }): void` que lance el tipo correcto de error según la situación.',
      hint: 'Cada clase llama super(mensaje) y asigna this.name = "NombreClase". Después crea las propiedades en el constructor. Para procesarCompra, simula errores con condiciones ficticias.',
    },
    quiz: [
      {
        question: '¿Por qué asignar `this.name = "MiError"` en el constructor de una clase de error personalizada?',
        options: [
          'Es requerido por TypeScript',
          'Para que el log de errores muestre el nombre descriptivo en lugar de "Error"',
          'Para que instanceof funcione correctamente',
          'Para agregar propiedades extras',
        ],
        correctAnswer: 'Para que el log de errores muestre el nombre descriptivo en lugar de "Error"',
        correctFeedback:
          '¡Correcto! Sin this.name, el error aparece como "Error: mensaje" en los logs. Con this.name = "ErrorAutenticacion", aparece como "ErrorAutenticacion: mensaje" — mucho más descriptivo.',
        incorrectFeedback:
          'this.name afecta cómo aparece el error en los logs y en .toString(). Sin asignarlo, todos los errores personalizados aparecen como "Error". Con it, aparece el nombre de la clase.',
      },
      {
        question: '¿Cuál es la ventaja de `error instanceof ErrorNoEncontrado` sobre verificar `error.status === 404`?',
        options: [
          'instanceof es más rápido',
          'instanceof permite narrowing de TypeScript y acceso a propiedades específicas de ErrorNoEncontrado',
          'No hay diferencia',
          'status === 404 no funciona en TypeScript',
        ],
        correctAnswer: 'instanceof permite narrowing de TypeScript y acceso a propiedades específicas de ErrorNoEncontrado',
        correctFeedback:
          '¡Exacto! Con instanceof ErrorNoEncontrado, TypeScript estrecha el tipo y sabes que error.recurso, error.status, etc. están disponibles. Con error.status, TypeScript sigue viendo error como unknown.',
        incorrectFeedback:
          'instanceof hace narrowing automático. Dentro del if(error instanceof ErrorNoEncontrado), TypeScript sabe que error tiene status, statusText, recurso, etc. Verificar error.status directamente requeriría type assertions primero.',
      },
      {
        question: '¿Cuándo crear una clase de error en lugar de solo usar `throw new Error("mensaje")`?',
        options: [
          'Siempre hay que crear clases',
          'Cuando necesitas llevar información adicional o distinguir entre tipos de error con instanceof',
          'Solo en TypeScript 5+',
          'Nunca — Error base siempre es suficiente',
        ],
        correctAnswer: 'Cuando necesitas llevar información adicional o distinguir entre tipos de error con instanceof',
        correctFeedback:
          '¡Correcto! Si solo necesitas un mensaje, Error base es suficiente. Las clases personalizadas son útiles cuando necesitas datos extras (campo, código, recurso) o cuando quieres distinguir tipos específicos de error.',
        incorrectFeedback:
          'Error base es apropiado para errores simples. Las clases personalizadas agregan valor cuando: (1) necesitas propiedades extra (campo de validación, código HTTP), (2) quieres distinguir tipos con instanceof en el catch.',
      },
      {
        question: '¿Qué tiene acceso el código dentro de `if (error instanceof ErrorDeValidacion)`?',
        options: [
          'Solo error.message',
          'Todas las propiedades de Error más las específicas de ErrorDeValidacion',
          'Solo las propiedades de ErrorDeValidacion',
          'Ninguna propiedad — el tipo sigue siendo unknown',
        ],
        correctAnswer: 'Todas las propiedades de Error más las específicas de ErrorDeValidacion',
        correctFeedback:
          '¡Perfecto! TypeScript estrecha el tipo a ErrorDeValidacion, que hereda de Error. Tienes acceso a .message, .name, .stack (de Error) y a .errores (de ErrorDeValidacion).',
        incorrectFeedback:
          'ErrorDeValidacion extiende Error, así que hereda .message, .name, .stack más sus propias propiedades (como .errores). TypeScript estrecha el tipo y te da acceso a todo.',
      },
      {
        question: '¿Funciona `instanceof` con `ErrorAutenticacion` si `ErrorAutenticacion extends ErrorHTTP extends Error`?',
        options: [
          'Solo funciona con instanceof Error',
          'Sí — instanceof verifica toda la cadena de prototipos',
          'No — instanceof no funciona con herencia múltiple',
          'Solo funciona con instanceof ErrorHTTP',
        ],
        correctAnswer: 'Sí — instanceof verifica toda la cadena de prototipos',
        correctFeedback:
          '¡Correcto! Una instancia de ErrorAutenticacion es también instanceof ErrorHTTP y también instanceof Error. La jerarquía funciona con instanceof.',
        incorrectFeedback:
          'instanceof verifica la cadena de prototipos. ErrorAutenticacion → ErrorHTTP → Error → Object. Por eso `error instanceof Error` es true, `error instanceof ErrorHTTP` es true, y `error instanceof ErrorAutenticacion` también es true.',
      },
    ],
  },
  {
    slug: 'result-pattern-simple',
    title: 'Result pattern simple',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 183,
    description:
      'Aprende a representar operaciones exitosas o fallidas usando un tipo Result simple.',
    explanation: `## Result pattern simple

El **Result pattern** (también llamado Either pattern) es una forma de representar el resultado de una operación que puede tener éxito o fallar, sin usar excepciones.

### El problema con las excepciones

Las excepciones son difíciles de rastrear:
\`\`\`typescript
// ¿Puede fallar esta función? ¿Qué tipos de errores puede lanzar?
// No lo sabes sin leer la implementación
function procesarPedido(datos: DatosPedido): Pedido { ... }
\`\`\`

### El tipo Result

\`\`\`typescript
type Resultado<T, E = string> =
  | { exito: true; valor: T }
  | { exito: false; error: E }
\`\`\`

Ahora el tipo de retorno comunica claramente que puede fallar:

\`\`\`typescript
function procesarPedido(datos: DatosPedido): Resultado<Pedido, string> { ... }
\`\`\`

### Crear helpers

\`\`\`typescript
function ok<T>(valor: T): Resultado<T, never> {
  return { exito: true, valor }
}

function err<E>(error: E): Resultado<never, E> {
  return { exito: false, error }
}
\`\`\`

### Usar el Result

\`\`\`typescript
const resultado = procesarPedido(datos)

if (resultado.exito) {
  // resultado.valor es Pedido ✅
  console.log(\`Pedido #\${resultado.valor.id} creado\`)
} else {
  // resultado.error es string ✅
  console.error(resultado.error)
}
\`\`\``,
    codeExample: `// result.ts

// ===== TIPO RESULT =====
type Resultado<T, E = string> =
  | { exito: true; valor: T }
  | { exito: false; error: E }

// Helpers constructores
function ok<T>(valor: T): Resultado<T, never> {
  return { exito: true, valor }
}

function falló<E>(error: E): Resultado<never, E> {
  return { exito: false, error }
}

// ===== FUNCIONES QUE USAN RESULT =====

interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

// Función de validación que retorna Result
function validarPrecio(precio: number): Resultado<number, string> {
  if (isNaN(precio)) return falló('El precio debe ser un número')
  if (precio < 0) return falló('El precio no puede ser negativo')
  if (precio > 100000) return falló('El precio supera el máximo permitido')
  return ok(precio)
}

// Función de fetch que retorna Result
async function obtenerProducto(id: number): Promise<Resultado<Producto, string>> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`)

    if (resp.status === 404) {
      return falló(\`Producto #\${id} no encontrado\`)
    }

    if (!resp.ok) {
      return falló(\`Error del servidor: \${resp.status}\`)
    }

    const producto = await resp.json() as Producto
    return ok(producto)

  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error de conexión'
    return falló(mensaje)
  }
}

// ===== COMPONER RESULTADOS =====
// Encadenar operaciones que pueden fallar

async function actualizarPrecioProducto(
  id: number,
  nuevoPrecio: number
): Promise<Resultado<Producto, string>> {
  // Paso 1: validar el precio
  const precioValidado = validarPrecio(nuevoPrecio)
  if (!precioValidado.exito) {
    return falló(\`Precio inválido: \${precioValidado.error}\`)
  }

  // Paso 2: obtener el producto
  const productoActual = await obtenerProducto(id)
  if (!productoActual.exito) {
    return falló(\`No se puede actualizar: \${productoActual.error}\`)
  }

  // Paso 3: enviar la actualización
  try {
    const resp = await fetch(\`/api/productos/\${id}\`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ precio: precioValidado.valor }),
    })

    if (!resp.ok) return falló(\`Error al actualizar: \${resp.status}\`)

    const actualizado = await resp.json() as Producto
    return ok(actualizado)
  } catch (error) {
    return falló(error instanceof Error ? error.message : 'Error desconocido')
  }
}

// ===== USO =====
async function main(): Promise<void> {
  const resultado = await actualizarPrecioProducto(1, 299.99)

  if (resultado.exito) {
    console.log(\`Precio actualizado: \${resultado.valor.nombre} = $\${resultado.valor.precio}\`)
  } else {
    console.error(\`No se pudo actualizar: \${resultado.error}\`)
    const errorEl = document.getElementById('error')
    if (errorEl) errorEl.textContent = resultado.error
  }
}`,
    keyPoints: [
      'El tipo Result hace explícito en la firma de la función que puede fallar',
      'Con { exito: true; valor: T } | { exito: false; error: E }, TypeScript estrecha el tipo con if',
      'Los helpers ok() y falló() hacen el código más legible',
      'Result facilita la composición de operaciones que pueden fallar',
      'A diferencia de excepciones, Result obliga al llamador a manejar el caso de error',
    ],
    exercise: {
      description:
        'Implementa `type Result<T, E = string>` con las variantes ok y error. Luego crea `function dividir(a: number, b: number): Result<number, "division-por-cero">` que retorne ok(a/b) si b !== 0, o error("division-por-cero"). Crea también `function raizCuadrada(n: number): Result<number, string>` que retorne error si n < 0. Finalmente, usa estas funciones en cadena para calcular `sqrt(a / b)` retornando un Result combinado.',
      hint: 'Para la composición: primero llama dividir(a, b), verifica si exito. Si sí, llama raizCuadrada(resultado.valor). Retorna el resultado de la raíz. Así encadenas dos operaciones que pueden fallar.',
    },
    quiz: [
      {
        question: '¿Cuál es la ventaja del Result pattern sobre las excepciones?',
        options: [
          'Es más rápido que throw',
          'El tipo de retorno hace explícito que la función puede fallar, y el llamador es obligado a manejar ambos casos',
          'TypeScript requiere Result para código async',
          'Las excepciones son más lentas',
        ],
        correctAnswer: 'El tipo de retorno hace explícito que la función puede fallar, y el llamador es obligado a manejar ambos casos',
        correctFeedback:
          '¡Correcto! Con Result, el tipo de retorno `Result<T, E>` dice "esto puede salir bien o mal". El llamador no puede ignorar el error — debe verificar exito antes de usar valor.',
        incorrectFeedback:
          'Con excepciones, puedes olvidar el try/catch. Con Result, el tipo de retorno hace el posible fallo visible. TypeScript te obliga a verificar exito antes de acceder a valor.',
      },
      {
        question: '¿Qué propiedades están disponibles dentro de `if (resultado.exito) { ... }`?',
        options: [
          'Solo exito',
          'resultado.valor — TypeScript estrecha el tipo a la variante de éxito',
          'resultado.error',
          'Todas las propiedades de ambas variantes',
        ],
        correctAnswer: 'resultado.valor — TypeScript estrecha el tipo a la variante de éxito',
        correctFeedback:
          '¡Exacto! Dentro del if(resultado.exito), TypeScript estrecha el tipo a `{ exito: true; valor: T }`. Solo valor está disponible — error no existe en esta variante.',
        incorrectFeedback:
          'La unión discriminada hace narrowing automático. Dentro del if(resultado.exito), TypeScript sabe que estamos en la variante de éxito. resultado.valor está disponible, resultado.error no.',
      },
      {
        question: '¿Para qué sirven los helpers `ok(valor)` y `falló(error)`?',
        options: [
          'Son requeridos por TypeScript',
          'Hacen el código más legible evitando escribir `{ exito: true, valor: ... }` directamente',
          'Validan los datos automáticamente',
          'Convierten errores a strings',
        ],
        correctAnswer: 'Hacen el código más legible evitando escribir `{ exito: true, valor: ... }` directamente',
        correctFeedback:
          '¡Correcto! ok(valor) es más corto y expresivo que { exito: true, valor }. Hace el código más legible y reduce errores tipográficos.',
        incorrectFeedback:
          'ok() y falló() son azúcar sintáctica. ok(valor) = { exito: true, valor }, falló(error) = { exito: false, error }. Hacen el código más legible.',
      },
      {
        question: '¿Cómo se componen dos funciones que retornan Result?',
        options: [
          'Se combinan automáticamente',
          'Se verifica el resultado de la primera y, si exito, se llama a la segunda con el valor',
          'Se usan con try/catch',
          'No se pueden componer',
        ],
        correctAnswer: 'Se verifica el resultado de la primera y, si exito, se llama a la segunda con el valor',
        correctFeedback:
          '¡Perfecto! const r1 = f1(x); if (!r1.exito) return falló(r1.error); const r2 = f2(r1.valor); if (!r2.exito) return falló(r2.error); return ok(r2.valor).',
        incorrectFeedback:
          'Para componer: verifica el resultado de cada paso. Si falla, propaga el error (return falló(r.error)). Si tiene éxito, usa el valor en el siguiente paso. Así se encadenan operaciones que pueden fallar.',
      },
      {
        question: '¿En qué se diferencia Result de retornar `null` en caso de error?',
        options: [
          'Son equivalentes',
          'null solo comunica "falló" sin razón; Result lleva el error específico',
          'null no funciona en TypeScript',
          'Result es para errores de red; null para errores de validación',
        ],
        correctAnswer: 'null solo comunica "falló" sin razón; Result lleva el error específico',
        correctFeedback:
          '¡Exacto! null dice "algo salió mal" pero no qué. Result<T, E> lleva el error específico — puedes mostrar el mensaje correcto al usuario o loggear el error detallado.',
        incorrectFeedback:
          'null es como un error sin contexto. Result lleva el error específico (un string, un código, un objeto). El llamador puede saber exactamente qué salió mal y responder apropiadamente.',
      },
    ],
  },
  {
    slug: 'evitar-any-errores',
    title: 'Evitar any en errores',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 184,
    description:
      'Aprende por qué usar any en errores puede ocultar problemas y cómo usar unknown de forma más segura.',
    explanation: `## Evitar any en errores

Usar \`any\` en el manejo de errores silencia a TypeScript pero no soluciona nada. Puede crear errores difíciles de detectar.

### El problema de any en errores

\`\`\`typescript
// ❌ Con any — TypeScript no te protege
try {
  // ...
} catch (error: any) {
  console.log(error.message)    // TypeScript acepta esto
  console.log(error.badField)   // TypeScript acepta esto también — sin verificar si existe
  error.nonExistentMethod()     // TypeScript acepta esto... pero falla en runtime
}
\`\`\`

Con \`any\`, TypeScript desactiva todas las verificaciones. Puedes acceder a cualquier propiedad sin que TypeScript avise — incluso si no existe.

### La diferencia con unknown

\`\`\`typescript
// ✅ Con unknown — TypeScript te protege
try {
  // ...
} catch (error) {  // error es unknown por defecto con strict
  console.log(error.message)  // ❌ Error: no puedes acceder sin verificar

  if (error instanceof Error) {
    console.log(error.message)  // ✅ Verificado
  }
}
\`\`\`

### Dónde any se cuela silenciosamente

\`\`\`typescript
// Error sutil: error se escapa del catch como any
function ejecutar(fn: () => void): any | null {
  try {
    fn()
    return null
  } catch (error) {
    return error  // Retorna any — pierde la seguridad de tipos
  }
}

// ✅ Mejor: retornar unknown
function ejecutar(fn: () => void): unknown | null {
  try {
    fn()
    return null
  } catch (error) {
    return error
  }
}
\`\`\`

### Reglas prácticas

1. Nunca uses \`catch (error: any)\` — usa \`unknown\` o sin anotación (defaultea a unknown con strict)
2. No uses \`as any\` para silenciar errores de tipos en manejo de errores
3. Crea type guards para verificar antes de acceder a propiedades del error`,
    codeExample: `// avoid-any-errors.ts

function obtenerMensaje(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Error desconocido'
}

// ❌ Ejemplos de any problemático
function malManejo(): void {
  try {
    throw { codigo: 500, mensaje: 'Servidor caído' }
  } catch (error: any) {
    // TypeScript acepta todo esto sin quejarse
    console.log(error.message)          // undefined en runtime
    console.log(error.stack.split('\\n')) // TypeError en runtime
    error.inexistente()                 // TypeError en runtime
  }
}

// ✅ Con unknown y verificación
function buenManejo(): void {
  try {
    throw { codigo: 500, mensaje: 'Servidor caído' }
  } catch (error) {
    // TypeScript te obliga a verificar
    if (error instanceof Error) {
      console.log(error.message)  // ✅
    } else if (
      typeof error === 'object' &&
      error !== null &&
      typeof (error as { mensaje?: unknown }).mensaje === 'string'
    ) {
      console.log((error as { mensaje: string }).mensaje)  // ✅
    } else {
      console.log(String(error))
    }
  }
}

// ✅ Retorno tipado de errores capturados
type ErrorCapturado =
  | { tipo: 'error'; error: Error }
  | { tipo: 'desconocido'; valor: unknown }

function capturarError(fn: () => void): ErrorCapturado | null {
  try {
    fn()
    return null
  } catch (error) {
    if (error instanceof Error) {
      return { tipo: 'error', error }
    }
    return { tipo: 'desconocido', valor: error }
  }
}

// ✅ Logging seguro de errores
function logError(error: unknown, contexto: string): void {
  const timestamp = new Date().toISOString()

  if (error instanceof Error) {
    console.error(\`[\${timestamp}] [\${contexto}] \${error.name}: \${error.message}\`)
    if (error.stack) {
      console.error(error.stack)
    }
  } else {
    console.error(\`[\${timestamp}] [\${contexto}] Error no estándar:\`, error)
  }
}

// Uso
async function cargarUsuario(id: number): Promise<void> {
  try {
    const resp = await fetch(\`/api/usuarios/\${id}\`)
    if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)
    const usuario = await resp.json()
    console.log(usuario)
  } catch (error) {
    logError(error, 'cargarUsuario')
    // Mostrar mensaje seguro al usuario
    const el = document.getElementById('error')
    if (el) el.textContent = 'No se pudo cargar el usuario'
  }
}`,
    keyPoints: [
      'catch (error: any) desactiva las verificaciones de TypeScript — es tan peligroso como any en cualquier otro lugar',
      'unknown en el catch obliga a verificar el tipo antes de acceder a propiedades',
      'Retornar el error como any desde una función propaga la falta de tipos',
      'Usa instanceof y typeof para narrowing en lugar de as any',
      'Mantén el mensaje técnico para el log y el mensaje amigable para el usuario',
    ],
    exercise: {
      description:
        'Refactoriza esta función eliminando todo uso de any: `function procesarError(error: any): string { return error.message || error.toString() }`. La versión correcta debe usar `unknown`, verificar con instanceof Error para retornar error.message, verificar con typeof === "string" para retornar el string directamente, y retornar String(error) como fallback.',
      hint: 'La firma correcta es `function procesarError(error: unknown): string`. El cuerpo usa if/else if para los diferentes casos. String() siempre funciona como último recurso.',
    },
    quiz: [
      {
        question: '¿Por qué `catch (error: any)` es problemático?',
        options: [
          'TypeScript no permite any en catch',
          'any desactiva todas las verificaciones de tipos — puedes acceder a propiedades inexistentes sin que TypeScript avise',
          'any hace el código más lento',
          'any solo funciona con strings',
        ],
        correctAnswer: 'any desactiva todas las verificaciones de tipos — puedes acceder a propiedades inexistentes sin que TypeScript avise',
        correctFeedback:
          '¡Correcto! Con any, TypeScript acepta cualquier acceso a propiedades o métodos. Puedes escribir error.campoInexistente sin error — pero falla en runtime.',
        incorrectFeedback:
          'any desactiva la verificación de tipos. Con catch (error: any), TypeScript acepta error.message, error.inexistente, error.metodo() sin verificar si existen. El error solo aparece en runtime.',
      },
      {
        question: '¿Cuál es la diferencia entre `unknown` y `any` en el contexto de un catch?',
        options: [
          'Son equivalentes',
          'unknown obliga a verificar el tipo antes de usar; any permite cualquier acceso sin verificar',
          'unknown solo funciona con objetos',
          'any es más moderno que unknown',
        ],
        correctAnswer: 'unknown obliga a verificar el tipo antes de usar; any permite cualquier acceso sin verificar',
        correctFeedback:
          '¡Exacto! unknown es el tipo "no sé qué es esto" que obliga a verificar. any es el tipo "confío en ti, haz lo que quieras" que desactiva la protección.',
        incorrectFeedback:
          'unknown es la opción segura: TypeScript no te deja usar el valor sin verificar su tipo. any es la opción peligrosa: TypeScript acepta cualquier acceso sin preguntar.',
      },
      {
        question: '¿Qué pasa si retornas `error` (any) desde una función que lo capturó?',
        options: [
          'TypeScript lo convierte automáticamente a Error',
          'El any se propaga — el código que recibe el retorno también pierde las verificaciones de tipos',
          'TypeScript da error de compilación',
          'El error se convierte a string',
        ],
        correctAnswer: 'El any se propaga — el código que recibe el retorno también pierde las verificaciones de tipos',
        correctFeedback:
          '¡Correcto! any es "contagioso". Si una función retorna any, el código que usa ese retorno también opera sin verificaciones. La falta de tipos se propaga.',
        incorrectFeedback:
          'any se propaga. Si retornas el error como any, el llamador recibe any. Puede hacer lo que quiera con él sin verificaciones. Retorna unknown en su lugar para mantener la seguridad.',
      },
      {
        question: '¿Cuál es la alternativa correcta a `(error as Error).message` en un catch?',
        options: [
          'error.message directamente',
          'Verificar con instanceof Error primero: `if (error instanceof Error) { error.message }`',
          'String(error.message)',
          'error?.message',
        ],
        correctAnswer: 'Verificar con instanceof Error primero: `if (error instanceof Error) { error.message }`',
        correctFeedback:
          '¡Exacto! instanceof Error primero verifica que el valor es realmente un Error. TypeScript estrecha el tipo y puedes acceder a .message con seguridad.',
        incorrectFeedback:
          '(error as Error).message silencia a TypeScript pero puede fallar si error no es Error. La alternativa correcta es verificar primero con instanceof Error, luego acceder a .message dentro del if.',
      },
      {
        question: '¿Cuál es la función de `String(error)` como fallback en el manejo de errores?',
        options: [
          'Convierte el error a JSON',
          'Convierte cualquier valor a string de forma segura, sin lanzar excepciones',
          'Solo funciona con instancias de Error',
          'Es equivalente a error.toString()',
        ],
        correctAnswer: 'Convierte cualquier valor a string de forma segura, sin lanzar excepciones',
        correctFeedback:
          '¡Correcto! String() nunca lanza. Para null devuelve "null", para undefined devuelve "undefined", para objetos devuelve "[object Object]". Es el último recurso seguro.',
        incorrectFeedback:
          'String() como función global convierte cualquier valor a string sin lanzar. error.toString() podría fallar si error es null o no tiene el método. String() es más seguro como fallback.',
      },
    ],
  },
  {
    slug: 'mensajes-seguros-usuarios',
    title: 'Mensajes seguros para usuarios',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 185,
    description:
      'Aprende a mostrar errores claros al usuario sin exponer detalles técnicos innecesarios.',
    explanation: `## Mensajes seguros para usuarios

Cuando tu aplicación falla, tienes dos audiencias:
1. **El desarrollador**: necesita detalles técnicos para depurar (stack trace, código de error, etc.)
2. **El usuario**: necesita un mensaje claro y amigable que le diga qué hacer

### El problema de mostrar errores técnicos

\`\`\`typescript
// ❌ Expone detalles internos al usuario
catch (error) {
  if (error instanceof Error) {
    alert(error.message)  // "Cannot read properties of undefined reading 'nombre'"
    // El usuario no entiende esto y tampoco debería verlo
  }
}
\`\`\`

### La solución: separar mensajes técnicos de mensajes de usuario

\`\`\`typescript
catch (error) {
  // Para el desarrollador (o tu sistema de logs)
  console.error('[cargarProducto]', error)

  // Para el usuario — claro y accionable
  mostrarError('No pudimos cargar el producto. Intenta de nuevo más tarde.')
}
\`\`\`

### Categorizar errores para mensajes apropiados

\`\`\`typescript
function obtenerMensajeParaUsuario(error: unknown): string {
  if (error instanceof ErrorAutenticacion) {
    return 'Tu sesión ha expirado. Inicia sesión nuevamente.'
  }

  if (error instanceof ErrorNoEncontrado) {
    return 'El elemento que buscas no existe.'
  }

  if (error instanceof ErrorDeValidacion) {
    return 'Por favor revisa los datos ingresados.'
  }

  if (error instanceof Error && error.message.includes('network')) {
    return 'Sin conexión a internet. Verifica tu red y vuelve a intentarlo.'
  }

  // Error técnico genérico — no exponemos detalles
  return 'Ocurrió un error inesperado. Inténtalo de nuevo.'
}
\`\`\``,
    codeExample: `// user-messages.ts

// ===== ERRORES PERSONALIZADOS =====
class ErrorAutenticacion extends Error {
  constructor() { super('Unauthorized'); this.name = 'ErrorAutenticacion' }
}
class ErrorNoEncontrado extends Error {
  constructor(recurso: string) { super(\`\${recurso} not found\`); this.name = 'ErrorNoEncontrado' }
}
class ErrorServidor extends Error {
  readonly codigo: number
  constructor(codigo: number) { super(\`Server Error \${codigo}\`); this.name = 'ErrorServidor'; this.codigo = codigo }
}

// ===== SISTEMA DE MENSAJES =====

interface MensajeError {
  titulo: string
  descripcion: string
  accion?: string  // Qué puede hacer el usuario
}

function crearMensajeParaUsuario(error: unknown): MensajeError {
  if (error instanceof ErrorAutenticacion) {
    return {
      titulo: 'Sesión expirada',
      descripcion: 'Tu sesión ha expirado por seguridad.',
      accion: 'Inicia sesión nuevamente para continuar.',
    }
  }

  if (error instanceof ErrorNoEncontrado) {
    return {
      titulo: 'No encontrado',
      descripcion: 'El elemento que buscas no existe o fue eliminado.',
      accion: 'Vuelve al inicio para explorar el contenido disponible.',
    }
  }

  if (error instanceof ErrorServidor && error.codigo >= 500) {
    return {
      titulo: 'Error del servidor',
      descripcion: 'Nuestro servidor está teniendo problemas.',
      accion: 'Inténtalo de nuevo en unos minutos.',
    }
  }

  if (error instanceof Error && (
    error.message.toLowerCase().includes('network') ||
    error.message.toLowerCase().includes('fetch') ||
    error.message.toLowerCase().includes('connection')
  )) {
    return {
      titulo: 'Sin conexión',
      descripcion: 'No pudimos conectar con el servidor.',
      accion: 'Verifica tu conexión a internet e inténtalo de nuevo.',
    }
  }

  // Error desconocido — mensaje genérico seguro
  return {
    titulo: 'Error inesperado',
    descripcion: 'Algo salió mal. Nuestro equipo ha sido notificado.',
    accion: 'Inténtalo de nuevo o contacta soporte si el problema persiste.',
  }
}

// ===== MOSTRAR EN EL DOM =====
function mostrarErrorEnUI(error: unknown): void {
  // 1. Log técnico — para el desarrollador
  console.error('[Error]', error)

  // 2. Mensaje para el usuario
  const mensaje = crearMensajeParaUsuario(error)

  const contenedor = document.getElementById('error-ui')
  if (!contenedor) return

  contenedor.textContent = ''

  const titulo = document.createElement('h3')
  titulo.textContent = mensaje.titulo

  const desc = document.createElement('p')
  desc.textContent = mensaje.descripcion

  contenedor.append(titulo, desc)

  if (mensaje.accion) {
    const accion = document.createElement('p')
    accion.className = 'error-accion'
    accion.textContent = mensaje.accion
    contenedor.appendChild(accion)
  }

  contenedor.style.display = 'block'
}

// ===== USO =====
async function cargarPerfil(userId: number): Promise<void> {
  try {
    const resp = await fetch(\`/api/usuarios/\${userId}\`)
    if (resp.status === 401) throw new ErrorAutenticacion()
    if (resp.status === 404) throw new ErrorNoEncontrado('perfil')
    if (!resp.ok) throw new ErrorServidor(resp.status)
    const perfil = await resp.json()
    console.log('Perfil cargado:', perfil)
  } catch (error) {
    mostrarErrorEnUI(error)
  }
}`,
    keyPoints: [
      'Los errores técnicos van al log (console.error) — los mensajes amigables van al usuario',
      'Categoriza los errores con instanceof para dar mensajes apropiados según el tipo',
      'Incluye "qué puede hacer el usuario" — no solo qué salió mal',
      'Los mensajes genéricos ("Error inesperado") evitan exponer detalles técnicos',
      'Nunca muestres stack traces, mensajes de error internos, ni detalles del servidor al usuario',
    ],
    exercise: {
      description:
        'Crea una función `mensajeParaUsuario(error: unknown, operacion: string): string` que: para ErrorAutenticacion retorne "No tienes permiso para {operacion}.", para Error cuyo message incluya "network" retorne "Sin conexión. No se pudo {operacion}.", para ErrorServidor retorne "El servidor no pudo completar {operacion}. Inténtalo en unos minutos.", y en cualquier otro caso retorne "No se pudo {operacion}. Inténtalo de nuevo.".',
      hint: 'Usa template literals para insertar el parámetro `operacion`. Ejemplo: `return \`No tienes permiso para \${operacion}.\``. Verifica los tipos de error con instanceof primero.',
    },
    quiz: [
      {
        question: '¿Por qué no deberías mostrar `error.message` directamente al usuario?',
        options: [
          'error.message es undefined siempre',
          'Puede contener información técnica interna como paths de archivo, nombres de variables, o detalles del servidor',
          'TypeScript lo prohíbe',
          'Los usuarios no pueden leer strings',
        ],
        correctAnswer: 'Puede contener información técnica interna como paths de archivo, nombres de variables, o detalles del servidor',
        correctFeedback:
          '¡Correcto! Mensajes como "Cannot read property \'id\' of undefined" o "Connection refused to 192.168.1.1:5432" no ayudan al usuario y pueden revelar información sensible.',
        incorrectFeedback:
          'error.message contiene detalles técnicos para desarrolladores: paths de archivo, nombres de variables, mensajes internos. El usuario necesita un mensaje claro de qué hacer, no detalles técnicos.',
      },
      {
        question: '¿Qué información útil debería incluir un mensaje de error para el usuario?',
        options: [
          'El stack trace completo',
          'Qué salió mal y qué puede hacer el usuario para resolverlo',
          'Los detalles del servidor y la IP',
          'El código de error HTTP exacto',
        ],
        correctAnswer: 'Qué salió mal y qué puede hacer el usuario para resolverlo',
        correctFeedback:
          '¡Exacto! Un buen mensaje de error tiene: qué pasó ("Tu sesión expiró") y qué hacer ("Inicia sesión nuevamente"). Información accionable, no técnica.',
        incorrectFeedback:
          'Un mensaje de error útil para el usuario tiene dos partes: qué ocurrió (en términos simples) y qué puede hacer el usuario (acción concreta). El stack trace y los códigos de error son para los desarrolladores.',
      },
      {
        question: '¿Por qué es importante el log técnico `console.error(error)` además del mensaje de usuario?',
        options: [
          'console.error es más visible que console.log',
          'El desarrollador necesita los detalles técnicos para depurar el problema',
          'TypeScript requiere console.error en el catch',
          'Es equivalente al mensaje del usuario',
        ],
        correctAnswer: 'El desarrollador necesita los detalles técnicos para depurar el problema',
        correctFeedback:
          '¡Correcto! El desarrollador necesita stack trace, mensajes técnicos, y contexto para depurar. El usuario necesita un mensaje amigable. Son dos audiencias diferentes con necesidades distintas.',
        incorrectFeedback:
          'El log técnico es para el desarrollador — incluye detalles completos para depurar. El mensaje al usuario es para que sepa qué pasó y qué hacer. Son complementarios, no redundantes.',
      },
      {
        question: '¿Qué mensaje de error es más apropiado para un usuario cuando hay un error de red?',
        options: [
          '"TypeError: Failed to fetch"',
          '"Error de conexión en fetch()"',
          '"Sin conexión. Verifica tu internet e inténtalo de nuevo."',
          '"Network Error 0: ECONNREFUSED"',
        ],
        correctAnswer: '"Sin conexión. Verifica tu internet e inténtalo de nuevo."',
        correctFeedback:
          '¡Exacto! Este mensaje le dice al usuario qué pasó ("sin conexión") y qué hacer ("verifica tu internet"). Los otros mensajes son técnicos y no ayudan.',
        incorrectFeedback:
          '"Sin conexión. Verifica tu internet e inténtalo de nuevo." es claro, accionable y no técnico. "Failed to fetch" es el mensaje interno que el desarrollador lee, no el usuario.',
      },
      {
        question: '¿Cuándo es apropiado usar el mensaje genérico "Ocurrió un error inesperado"?',
        options: [
          'Siempre — es el mejor mensaje',
          'Cuando el error no coincide con ninguna categoría específica y no quieres exponer detalles técnicos',
          'Solo para errores de servidor',
          'Nunca — siempre hay que ser específico',
        ],
        correctAnswer: 'Cuando el error no coincide con ninguna categoría específica y no quieres exponer detalles técnicos',
        correctFeedback:
          '¡Correcto! Para errores no anticipados, el mensaje genérico es la opción segura. No expone detalles internos y comunica que algo salió mal sin tecnicismos.',
        incorrectFeedback:
          'El mensaje genérico es el fallback seguro para errores inesperados. Es mejor que exponer detalles técnicos que el usuario no puede interpretar. Para errores comunes (auth, 404, red), usa mensajes específicos.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-errores-typescript',
    title: 'Buenas prácticas de errores en proyectos TypeScript',
    module: 'Manejo de errores en TypeScript',
    moduleNumber: 23,
    order: 186,
    description:
      'Aprende prácticas recomendadas para manejar errores de forma clara, segura y mantenible.',
    explanation: `## Buenas prácticas de errores en proyectos TypeScript

Después de aprender los mecanismos de manejo de errores, aquí están las prácticas que hacen el código más mantenible.

### 1. Centraliza los tipos de error

\`\`\`typescript
// errors.ts — un solo lugar para todos los errores
export class ErrorHTTP extends Error { ... }
export class ErrorAutenticacion extends ErrorHTTP { ... }
export class ErrorDeValidacion extends Error { ... }
\`\`\`

### 2. Centraliza el helper de mensajes

\`\`\`typescript
// errors.ts
export function obtenerMensaje(error: unknown): string { ... }
export function obtenerMensajeParaUsuario(error: unknown): string { ... }
\`\`\`

### 3. Sé consistente con el patrón de retorno

Elige y mantén el mismo patrón en todo el proyecto:

- **Excepciones**: para errores inesperados que no puedes recuperar
- **Result type**: para operaciones que esperan fallar (validaciones, peticiones)
- **null**: cuando "no encontrado" es un estado normal esperado

### 4. No atrapes errores que no puedes manejar

\`\`\`typescript
// ❌ Silenciar un error que no puedes manejar
try {
  await operacionCritica()
} catch {
  // No hacer nada — el error desaparece silenciosamente
}

// ✅ Si no puedes manejar, re-lanza o al menos loggea
try {
  await operacionCritica()
} catch (error) {
  console.error('[operacionCritica]', error)
  throw error  // Propagar para que alguien más lo maneje
}
\`\`\`

### 5. Escribe el tipo de los errores que puede lanzar una función en JSDoc

\`\`\`typescript
/**
 * @throws {ErrorAutenticacion} Si el usuario no tiene sesión
 * @throws {ErrorNoEncontrado} Si el producto no existe
 */
async function obtenerProducto(id: number): Promise<Producto> { ... }
\`\`\``,
    codeExample: `// errors.ts — Archivo centralizado de errores para el proyecto

// ===== CLASES DE ERROR =====
export class ErrorHTTP extends Error {
  readonly status: number
  constructor(status: number, mensaje: string) {
    super(mensaje)
    this.name = 'ErrorHTTP'
    this.status = status
  }
}

export class ErrorAutenticacion extends ErrorHTTP {
  constructor() { super(401, 'No autenticado'); this.name = 'ErrorAutenticacion' }
}

export class ErrorNoEncontrado extends ErrorHTTP {
  constructor(recurso: string) { super(404, \`\${recurso} no encontrado\`); this.name = 'ErrorNoEncontrado' }
}

export class ErrorDeValidacion extends Error {
  readonly errores: Record<string, string>
  constructor(errores: Record<string, string>) {
    super('Error de validación')
    this.name = 'ErrorDeValidacion'
    this.errores = errores
  }
}

// ===== HELPERS =====
export function obtenerMensajeTecnico(error: unknown): string {
  if (error instanceof Error) return \`[\${error.name}] \${error.message}\`
  if (typeof error === 'string') return error
  return String(error)
}

export function obtenerMensajeParaUsuario(error: unknown): string {
  if (error instanceof ErrorAutenticacion) return 'Sesión expirada. Inicia sesión.'
  if (error instanceof ErrorNoEncontrado) return 'El elemento no existe.'
  if (error instanceof ErrorDeValidacion) return 'Revisa los datos del formulario.'
  if (error instanceof ErrorHTTP && error.status >= 500) return 'Error del servidor. Inténtalo más tarde.'
  return 'Error inesperado. Inténtalo de nuevo.'
}

// ===== PATRÓN: FETCH CON ERRORES TIPADOS =====
export async function fetchSeguro(url: string): Promise<unknown> {
  const resp = await fetch(url)

  if (resp.status === 401) throw new ErrorAutenticacion()
  if (resp.status === 404) throw new ErrorNoEncontrado(url)
  if (!resp.ok) throw new ErrorHTTP(resp.status, resp.statusText)

  return resp.json()
}

// ===== PATRÓN: HANDLER GLOBAL EN EL DOM =====
export function manejarErrorEnUI(error: unknown, operacion: string): void {
  // Técnico: para debugging
  console.error(\`[ERROR] \${operacion}:\`, error)

  // Usuario: mensaje amigable
  const mensaje = obtenerMensajeParaUsuario(error)
  const el = document.getElementById('error-global')
  if (el) {
    el.textContent = mensaje
    el.style.display = 'block'
    // Ocultar después de 5 segundos
    setTimeout(() => { el.style.display = 'none' }, 5000)
  }

  // Si es autenticación — redirigir
  if (error instanceof ErrorAutenticacion) {
    setTimeout(() => { window.location.href = '/login' }, 2000)
  }
}

// ===== USO EN EL RESTO DEL PROYECTO =====
// Cada módulo importa desde errors.ts
// import { fetchSeguro, manejarErrorEnUI, ErrorDeValidacion } from './errors'

async function guardarPerfil(datos: { nombre: string }): Promise<void> {
  try {
    await fetchSeguro('/api/perfil')
    console.log('Perfil guardado')
  } catch (error) {
    manejarErrorEnUI(error, 'guardar perfil')
  }
}`,
    keyPoints: [
      'Centraliza errores, helpers y patrones en un archivo errors.ts importado por los demás módulos',
      'Nunca silencie errores con un catch vacío — al menos loggea o re-lanza',
      'Sé consistente con el patrón elegido (excepciones vs Result) en todo el proyecto',
      'Documenta qué errores puede lanzar una función en JSDoc o en el tipo de retorno',
      'Un handler global en el UI simplifica el manejo de errores en toda la aplicación',
    ],
    exercise: {
      description:
        'Crea un archivo `errors.ts` completo para un proyecto de lista de compras que incluya: (1) clase `ErrorProductoNoEncontrado extends Error` con propiedad `productoId: number`, (2) clase `ErrorStockInsuficiente extends Error` con propiedades `disponible: number` y `solicitado: number`, (3) helper `obtenerMensajeCompra(error: unknown): string` con mensajes apropiados para cada tipo, y (4) función async `agregarAlCarrito(productoId: number, cantidad: number): Promise<void>` que use fetchSeguro y maneje los errores correctamente.',
      hint: 'ErrorStockInsuficiente debería incluir un mensaje como "Solo quedan X unidades disponibles". La función agregarAlCarrito debe lanzar ErrorProductoNoEncontrado si el producto no existe o ErrorStockInsuficiente si no hay suficiente stock.',
    },
    quiz: [
      {
        question: '¿Por qué centralizar los tipos de error en un archivo `errors.ts`?',
        options: [
          'TypeScript lo requiere',
          'Evita duplicar definiciones y garantiza que todos los módulos usen los mismos tipos de error',
          'Hace el código más largo',
          'Solo funciona en proyectos grandes',
        ],
        correctAnswer: 'Evita duplicar definiciones y garantiza que todos los módulos usen los mismos tipos de error',
        correctFeedback:
          '¡Correcto! Con un archivo centralizado, todos los módulos importan los mismos errores. Si necesitas cambiar ErrorHTTP, lo cambias una vez y todo el proyecto se actualiza.',
        incorrectFeedback:
          'Centralizar en errors.ts significa que todos importan desde el mismo lugar. No hay duplicación y los cambios son en un solo lugar. Sin centralización, podrías tener ErrorAutenticacion definido de forma diferente en diferentes archivos.',
      },
      {
        question: '¿Qué pasa si tienes un `catch` vacío?',
        options: [
          'TypeScript da error de compilación',
          'El error se silencia — desaparece silenciosamente y no sabes qué falló',
          'El error se propaga automáticamente',
          'Es una buena práctica para errores conocidos',
        ],
        correctAnswer: 'El error se silencia — desaparece silenciosamente y no sabes qué falló',
        correctFeedback:
          '¡Exacto! Un catch vacío hace que los errores desaparezcan sin dejar rastro. El programa puede continuar en un estado inconsistente sin que sepas por qué.',
        incorrectFeedback:
          'Un catch vacío silencia el error. La operación falla, pero no hay forma de saber qué pasó. Siempre al menos loggea el error o re-lánzalo si no puedes manejarlo.',
      },
      {
        question: '¿Cuándo deberías usar el Result type en lugar de excepciones?',
        options: [
          'Siempre',
          'Cuando el fallo es esperado y normal — como validaciones o peticiones de API',
          'Solo con código async',
          'Nunca — las excepciones son siempre mejores',
        ],
        correctAnswer: 'Cuando el fallo es esperado y normal — como validaciones o peticiones de API',
        correctFeedback:
          '¡Correcto! Result es ideal cuando el fallo es un resultado esperado del flujo normal. Las excepciones son para situaciones realmente inesperadas o no recuperables.',
        incorrectFeedback:
          'Result es mejor para operaciones que esperan fallar con frecuencia (validación de formularios, peticiones de API). Las excepciones son para errores inesperados — no deberían ser parte del flujo normal.',
      },
      {
        question: '¿Por qué documentar con JSDoc `@throws {ErrorAutenticacion}` en una función?',
        options: [
          'TypeScript verifica los JSDoc automáticamente',
          'Comunica a los usuarios de la función qué errores pueden ocurrir — sin tener que leer la implementación',
          'Solo es útil para equipos grandes',
          'JSDoc es obligatorio en TypeScript',
        ],
        correctAnswer: 'Comunica a los usuarios de la función qué errores pueden ocurrir — sin tener que leer la implementación',
        correctFeedback:
          '¡Exacto! @throws documenta el contrato de la función. El desarrollador que la llama sabe qué errores debe manejar sin tener que leer la implementación completa.',
        incorrectFeedback:
          '@throws en JSDoc actúa como documentación del contrato de la función. Le dice al llamador qué puede salir mal. TypeScript no verifica los throws declarados, pero la documentación ayuda al equipo.',
      },
      {
        question: '¿Cuál es el orden correcto de verificación de errores con instanceof cuando hay jerarquía?',
        options: [
          'El orden no importa',
          'Verificar las subclases más específicas primero, luego las clases base',
          'Verificar las clases base primero, luego las subclases',
          'Verificar todas al mismo tiempo con ||',
        ],
        correctAnswer: 'Verificar las subclases más específicas primero, luego las clases base',
        correctFeedback:
          '¡Correcto! ErrorAutenticacion extends ErrorHTTP extends Error. Si verificas instanceof Error primero, atrapa también a ErrorAutenticacion y ErrorHTTP antes de que lleguen a sus checks específicos.',
        incorrectFeedback:
          'El orden importa con jerarquías. ErrorAutenticacion es también instanceof ErrorHTTP y instanceof Error. Si verificas las clases base primero, los errores específicos nunca llegan a sus checks. Verifica siempre de más específico a más general.',
      },
    ],
  },
]

export const tsModule23: Module = {
  number: 23,
  title: 'Manejo de errores en TypeScript',
  level: 'nivel5',
  lessons: lessonsTsModule23,
}
