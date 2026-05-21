import type { Lesson, Module } from '@/types'

export const lessonsTsModule22: Lesson[] = [
  {
    slug: 'typescript-datos-externos',
    title: 'TypeScript y datos externos',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 170,
    description:
      'Aprende por qué los datos que vienen de una API deben tratarse con cuidado, aunque tengas tipos definidos.',
    explanation: `## TypeScript y datos externos

Uno de los conceptos más importantes al trabajar con APIs en TypeScript es este:

> **TypeScript no puede verificar los datos que vienen de fuera de tu código en tiempo de ejecución.**

### El problema fundamental

Los tipos en TypeScript existen solo durante la compilación. Cuando tu código se compila a JavaScript y se ejecuta en el navegador, los tipos desaparecen. Si le dices a TypeScript "estos datos son de tipo Usuario", TypeScript te creerá — aunque en realidad la API haya devuelto algo diferente.

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
}

// TypeScript no verifica que la respuesta realmente tenga esta forma
const respuesta = await fetch('/api/usuario/1')
const usuario = await respuesta.json() as Usuario

console.log(usuario.nombre.toUpperCase())
// Si la API devuelve { id: 1, name: "Ana" } (en inglés),
// usuario.nombre es undefined, y esto lanza TypeError en tiempo de ejecución
\`\`\`

### Por qué ocurre esto

Los tipos de TypeScript son **información estática**. La API es una fuente **dinámica y externa**. TypeScript no puede inspeccionar las respuestas de red.

### La analogía

Imagina que pediste un paquete por correo y firmaste diciendo que el contenido es "una laptop". Firmaste el documento, pero eso no significa que el paquete realmente contiene una laptop. Lo que hay dentro depende de quién lo envió.

En TypeScript, la type assertion (\`as Usuario\`) es como firmar ese documento. Le dices al sistema de tipos "aquí hay una laptop", pero el contenido real puede ser diferente.

### Qué hacer al respecto

1. **Validar los datos** antes de usarlos como si fueran del tipo esperado
2. **Usar type guards** que verifiquen las propiedades en tiempo de ejecución
3. **Manejar respuestas incompletas o malformadas** explícitamente`,
    codeExample: `// api.ts

// ❌ Problema: TypeScript confía en el as, pero no hay verificación real
interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
}

async function obtenerProducto_inseguro(id: number): Promise<Producto> {
  const resp = await fetch(\`/api/productos/\${id}\`)
  const data = await resp.json()
  return data as Producto  // TypeScript confía en esto, pero...
  // Si la API devuelve { id: 1, name: "Laptop" } (nombre en inglés),
  // producto.nombre será undefined en tiempo de ejecución
}

// ✅ Mejor enfoque: reconocer que los datos externos son unknown
async function obtenerProducto_seguro(id: number): Promise<unknown> {
  const resp = await fetch(\`/api/productos/\${id}\`)
  // .json() devuelve Promise<any>, pero podemos tratarlo como unknown
  const data: unknown = await resp.json()
  return data
  // El llamador debe validar los datos antes de usarlos
}

// ✅ Incluso mejor: retornar null si los datos no son válidos
async function obtenerProductoValidado(id: number): Promise<Producto | null> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`)
    if (!resp.ok) return null

    const data: unknown = await resp.json()

    // Validación básica antes de confiar en la estructura
    if (
      typeof data === 'object' &&
      data !== null &&
      'id' in data &&
      'nombre' in data &&
      'precio' in data
    ) {
      return data as Producto  // Ahora el as está más justificado
    }

    return null
  } catch {
    return null
  }
}

// La clave: los datos externos son unknown hasta que los validas
// TypeScript no los verifica en tiempo de ejecución — tú debes hacerlo`,
    keyPoints: [
      'TypeScript verifica tipos en compilación, no en tiempo de ejecución con datos de APIs',
      'response.json() devuelve any — TypeScript no sabe qué forma tienen los datos reales',
      'Usar as con datos de API asume que la API siempre devuelve exactamente lo que esperas',
      'Tratar los datos de APIs como unknown y validar antes de usar es más seguro',
      'Las APIs pueden cambiar, devolver datos incompletos, o retornar errores en formato inesperado',
    ],
    exercise: {
      description:
        'Escribe una función `fetchUsuario(id: number): Promise<unknown>` que llame a la URL ficticia "/api/usuarios/${id}", verifique que resp.ok es true, y retorne los datos como unknown. Luego escribe un comentario explicando por qué usar `as Usuario` directamente podría ser peligroso y qué deberías verificar antes de usarlo.',
      hint: 'El punto principal de este ejercicio es entender el concepto. La función que retorna Promise<unknown> comunica honestamente que no sabemos la forma de los datos. Cuando los datos son unknown, TypeScript te obliga a verificar antes de acceder a propiedades.',
    },
    quiz: [
      {
        question: '¿En qué momento TypeScript verifica los tipos de las respuestas de una API?',
        options: [
          'En tiempo de ejecución cuando llega la respuesta',
          'Nunca — TypeScript solo verifica tipos en tiempo de compilación',
          'Cuando usas fetch',
          'Cuando usas async/await',
        ],
        correctAnswer: 'Nunca — TypeScript solo verifica tipos en tiempo de compilación',
        correctFeedback:
          '¡Correcto! Los tipos de TypeScript desaparecen después de compilar. En tiempo de ejecución, no hay verificación de tipos para los datos que llegan de una API.',
        incorrectFeedback:
          'TypeScript solo verifica tipos durante la compilación. En tiempo de ejecución, el código es JavaScript puro y no hay verificación de tipos. Los datos de APIs pueden tener cualquier forma.',
      },
      {
        question: '¿Qué tipo tiene el valor devuelto por `response.json()` en TypeScript?',
        options: [
          'unknown',
          'object',
          'any',
          'Record<string, unknown>',
        ],
        correctAnswer: 'any',
        correctFeedback:
          '¡Exacto! response.json() devuelve Promise<any>. TypeScript no puede saber la forma real de los datos. Es tu responsabilidad validar antes de usar.',
        incorrectFeedback:
          'response.json() devuelve Promise<any>. any desactiva la verificación de tipos para ese valor. TypeScript no puede conocer la estructura real de los datos que devuelve la API.',
      },
      {
        question: '¿Por qué `const usuario = await response.json() as Usuario` puede ser peligroso?',
        options: [
          'Porque as siempre lanza errores',
          'Porque la type assertion no verifica en tiempo de ejecución que los datos realmente tengan la forma de Usuario',
          'Porque async/await no funciona con as',
          'Porque as solo funciona con tipos primitivos',
        ],
        correctAnswer: 'Porque la type assertion no verifica en tiempo de ejecución que los datos realmente tengan la forma de Usuario',
        correctFeedback:
          '¡Perfecto! as es solo una instrucción para el compilador — no ejecuta ninguna verificación. Si la API devuelve datos con una forma diferente, tu código falla en tiempo de ejecución.',
        incorrectFeedback:
          'as es solo una promesa al compilador. No ejecuta verificación en tiempo de ejecución. Si la API devuelve datos con otra estructura (campos en inglés, datos faltantes, tipo diferente), el error ocurre cuando intentas usar las propiedades.',
      },
      {
        question: '¿Qué ventaja tiene declarar una función como `obtenerDatos(): Promise<unknown>` en lugar de `Promise<MiTipo>`?',
        options: [
          'Es más eficiente',
          'Comunica honestamente que los datos no están verificados y obliga al llamador a validarlos',
          'TypeScript requiere usar unknown para las APIs',
          'No hay ventaja — es más trabajo',
        ],
        correctAnswer: 'Comunica honestamente que los datos no están verificados y obliga al llamador a validarlos',
        correctFeedback:
          '¡Correcto! Al retornar unknown, el sistema de tipos de TypeScript obliga al código que llama a verificar los datos antes de usarlos. Comunica la incertidumbre de forma explícita.',
        incorrectFeedback:
          'Promise<unknown> es más honesto: dice "no sé qué forma tienen los datos". TypeScript entonces obliga al código que llama a verificar antes de usar. Con Promise<MiTipo> sin verificación, asumes que la API siempre devuelve exactamente eso.',
      },
      {
        question: '¿Cuál es la analogía correcta para entender las type assertions con datos de API?',
        options: [
          'Es como etiquetar una caja — si la etiqueta dice laptop, el contenido ES una laptop',
          'Es como firmar un documento diciendo que el paquete contiene X, sin haber abierto el paquete',
          'Es como instalar un programa — el sistema verifica que funciona',
          'Es como una prueba unitaria — verifica el comportamiento',
        ],
        correctAnswer: 'Es como firmar un documento diciendo que el paquete contiene X, sin haber abierto el paquete',
        correctFeedback:
          '¡Exacto! Firmas el documento (type assertion) pero no verificas el contenido real. El paquete (datos de la API) puede contener algo diferente a lo que dice el documento.',
        incorrectFeedback:
          'La type assertion es como firmar un documento de entrega sin revisar el paquete. Dices "aquí hay una laptop" (as Usuario) pero no verificas el contenido real. El contenido puede ser diferente.',
      },
    ],
  },
  {
    slug: 'tipar-respuestas-api',
    title: 'Tipar respuestas de API',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 171,
    description:
      'Aprende a crear interfaces o types para representar respuestas de una API.',
    explanation: `## Tipar respuestas de API

Definir tipos para las respuestas de una API es una práctica esencial. Aunque TypeScript no puede verificar los datos en tiempo de ejecución, tener tipos bien definidos te ayuda a escribir código más seguro y a detectar errores de programación.

### Definir la estructura esperada

\`\`\`typescript
// Representa lo que esperas que la API devuelva
interface UsuarioAPI {
  id: number
  name: string            // La API usa inglés
  email: string
  avatar_url: string | null
  created_at: string      // ISO 8601 string
  is_active: boolean
}

// Tu representación interna (puede diferir de la API)
interface Usuario {
  id: number
  nombre: string
  email: string
  avatarUrl: string | null
  creadoEn: Date
  activo: boolean
}
\`\`\`

### Separar la respuesta de la API de tu modelo

Es recomendable tener dos tipos:
1. El tipo de la **respuesta de la API** (tal como viene)
2. Tu **tipo interno** (como lo usas en tu app)

\`\`\`typescript
// Lo que viene de la API
interface RespuestaProductoAPI {
  product_id: number
  product_name: string
  price_usd: number
  in_stock: boolean
}

// Tu modelo interno (camelCase, names en español)
interface Producto {
  id: number
  nombre: string
  precio: number
  disponible: boolean
}

// Función que transforma de API a tu modelo
function transformarProducto(api: RespuestaProductoAPI): Producto {
  return {
    id: api.product_id,
    nombre: api.product_name,
    precio: api.price_usd,
    disponible: api.in_stock,
  }
}
\`\`\`

### Tipos de respuesta comunes

Muchas APIs devuelven la misma estructura general:

\`\`\`typescript
// Respuesta con datos paginados
interface RespuestaPaginada<T> {
  data: T[]
  total: number
  page: number
  per_page: number
}

// Respuesta con envoltura
interface RespuestaAPI<T> {
  success: boolean
  data: T
  message?: string
}
\`\`\``,
    codeExample: `// api.ts

// ===== TIPOS DE LA API =====
// Representan exactamente lo que devuelve el servidor

interface TareaAPI {
  task_id: number
  task_title: string
  is_completed: boolean
  priority_level: 'low' | 'medium' | 'high'
  assigned_to: string | null
  created_at: string  // ISO string
  due_date: string | null
}

interface RespuestaListaTareasAPI {
  tasks: TareaAPI[]
  total_count: number
  page: number
  page_size: number
}

// ===== TUS TIPOS INTERNOS =====
// Cómo usas los datos en tu aplicación

interface Tarea {
  id: number
  titulo: string
  completada: boolean
  prioridad: 'baja' | 'media' | 'alta'
  asignadoA: string | null
  creadaEn: Date
  fechaVencimiento: Date | null
}

interface ListaTareas {
  tareas: Tarea[]
  total: number
  pagina: number
  porPagina: number
}

// ===== TRANSFORMACIONES =====
// De API a modelo interno

function transformarTarea(api: TareaAPI): Tarea {
  const prioridadMap: Record<TareaAPI['priority_level'], Tarea['prioridad']> = {
    low: 'baja',
    medium: 'media',
    high: 'alta',
  }

  return {
    id: api.task_id,
    titulo: api.task_title,
    completada: api.is_completed,
    prioridad: prioridadMap[api.priority_level],
    asignadoA: api.assigned_to,
    creadaEn: new Date(api.created_at),
    fechaVencimiento: api.due_date ? new Date(api.due_date) : null,
  }
}

function transformarListaTareas(api: RespuestaListaTareasAPI): ListaTareas {
  return {
    tareas: api.tasks.map(transformarTarea),
    total: api.total_count,
    pagina: api.page,
    porPagina: api.page_size,
  }
}

// Tipo genérico para respuesta estándar de la API
interface RespuestaAPI<T> {
  success: boolean
  data: T
  error?: string
}`,
    keyPoints: [
      'Define tipos separados para la respuesta de la API y tu modelo interno de datos',
      'Los tipos de la API reflejan exactamente lo que el servidor devuelve (snake_case, inglés, etc.)',
      'Los tipos internos usan las convenciones de tu app (camelCase, español, etc.)',
      'Las funciones de transformación convierten de API a modelo interno',
      'Los tipos genéricos como RespuestaAPI<T> evitan repetir la misma envoltura',
    ],
    exercise: {
      description:
        'Define los tipos para una API de blog. La API devuelve: `{ post_id: number, post_title: string, post_body: string, author_name: string, published_at: string, view_count: number, tag_list: string[] }`. Crea: (1) `interface ArticuloAPI` con esos campos, (2) `interface Articulo` con nombres en español y camelCase, y (3) `function transformarArticulo(api: ArticuloAPI): Articulo`. La fecha debe convertirse a Date.',
      hint: 'Para la fecha: `publicadoEn: new Date(api.published_at)`. Recuerda que el tipo de retorno de transformarArticulo es Articulo, y TypeScript verificará que el objeto retornado tiene todos los campos requeridos.',
    },
    quiz: [
      {
        question: '¿Por qué separar `interface UsuarioAPI` de `interface Usuario` (tu modelo interno)?',
        options: [
          'TypeScript lo requiere',
          'Porque la API puede cambiar o usar convenciones diferentes; tu modelo interno permanece estable en tu app',
          'Para tener más código',
          'No hay razón — son lo mismo',
        ],
        correctAnswer: 'Porque la API puede cambiar o usar convenciones diferentes; tu modelo interno permanece estable en tu app',
        correctFeedback:
          '¡Exacto! Si la API cambia (por ejemplo, renombra un campo), solo actualizas la transformación. El resto de tu código sigue usando tu modelo interno sin cambios.',
        incorrectFeedback:
          'Separar los tipos aísla los cambios. Si la API renombra "name" a "full_name", solo cambias la función de transformación. El resto de tu app sigue usando "nombre" sin cambios.',
      },
      {
        question: '¿Qué ventaja tiene `interface RespuestaPaginada<T> { data: T[]; total: number }`?',
        options: [
          'Solo funciona con strings',
          'Evita repetir la misma estructura de paginación para cada tipo de dato',
          'Hace las respuestas más rápidas',
          'TypeScript requiere genéricos para paginación',
        ],
        correctAnswer: 'Evita repetir la misma estructura de paginación para cada tipo de dato',
        correctFeedback:
          '¡Correcto! Con genéricos puedes tener RespuestaPaginada<Producto>, RespuestaPaginada<Usuario>, etc., reutilizando la misma estructura de paginación.',
        incorrectFeedback:
          'El genérico <T> permite reutilizar la estructura. RespuestaPaginada<Producto> para listas de productos, RespuestaPaginada<Usuario> para usuarios. Sin genérico, tendrías que definir una interfaz de paginación para cada tipo.',
      },
      {
        question: '¿Para qué sirve la función `transformarProducto(api: RespuestaProductoAPI): Producto`?',
        options: [
          'Para validar que los datos de la API son correctos',
          'Para convertir los datos de la API al formato interno de la aplicación',
          'Para enviar datos a la API',
          'Para hacer la petición HTTP',
        ],
        correctAnswer: 'Para convertir los datos de la API al formato interno de la aplicación',
        correctFeedback:
          '¡Perfecto! La función de transformación convierte del formato de la API (snake_case, inglés, strings para fechas) al formato interno (camelCase, español, objetos Date).',
        incorrectFeedback:
          'La transformación adapta los datos de la API a tu modelo interno. Cambia nombres de campos, convierte tipos (string a Date), aplica el mapeo de convenciones de la API a las de tu app.',
      },
      {
        question: '¿Qué representa el campo `created_at: string` en un tipo de API versus `creadoEn: Date` en tu modelo interno?',
        options: [
          'Son equivalentes — string y Date son lo mismo',
          'La API envía la fecha como texto ISO (string); tu modelo la convierte a un objeto Date más útil',
          'Date no existe en TypeScript',
          'string es más seguro que Date',
        ],
        correctAnswer: 'La API envía la fecha como texto ISO (string); tu modelo la convierte a un objeto Date más útil',
        correctFeedback:
          '¡Correcto! Las APIs envían fechas como strings ("2024-01-15T10:30:00Z"). Tu modelo convierte ese string a Date para poder hacer cálculos, formateos, etc.',
        incorrectFeedback:
          'JSON no tiene un tipo fecha — las fechas se envían como strings ISO. En tu modelo interno, conviertes ese string a Date con `new Date(api.created_at)` para tener acceso a los métodos de Date.',
      },
      {
        question: '¿Cuándo deberías actualizar tu función de transformación?',
        options: [
          'Nunca — las APIs son estables',
          'Cuando la API cambia su estructura, de forma que solo esa función cambia y el resto de la app no',
          'Cada vez que cambias el modelo interno',
          'Solo cuando hay errores',
        ],
        correctAnswer: 'Cuando la API cambia su estructura, de forma que solo esa función cambia y el resto de la app no',
        correctFeedback:
          '¡Exacto! La función de transformación es el punto de contacto entre la API y tu app. Si la API cambia, solo esa función cambia. El resto de tu código sigue usando el modelo interno sin cambios.',
        incorrectFeedback:
          'La función de transformación es el adaptador. Cuando la API cambia su estructura, actualizas solo la transformación. El resto de tu app usa el modelo interno estable y no necesita cambios.',
      },
    ],
  },
  {
    slug: 'fetch-con-typescript',
    title: 'Fetch con TypeScript',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 172,
    description:
      'Aprende a usar fetch con TypeScript y a tipar los datos recibidos.',
    explanation: `## Fetch con TypeScript

La API \`fetch\` del navegador funciona perfectamente en TypeScript. La diferencia está en cómo manejas los tipos de los datos que recibes.

### La función fetch básica

\`\`\`typescript
// Fetch devuelve Promise<Response>
const respuesta = await fetch('/api/usuarios')

// Response.ok es true si el status code es 200-299
if (!respuesta.ok) {
  throw new Error(\`Error HTTP: \${respuesta.status}\`)
}

// .json() devuelve Promise<any>
const datos = await respuesta.json()
\`\`\`

### Tipar el resultado de .json()

\`\`\`typescript
interface Usuario {
  id: number
  nombre: string
  email: string
}

async function obtenerUsuario(id: number): Promise<Usuario> {
  const resp = await fetch(\`/api/usuarios/\${id}\`)
  if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`)

  // json() devuelve any — hacemos la type assertion
  const data = await resp.json() as Usuario
  return data
}
\`\`\`

### Patrón más seguro con verificación

\`\`\`typescript
async function obtenerUsuario(id: number): Promise<Usuario | null> {
  try {
    const resp = await fetch(\`/api/usuarios/\${id}\`)
    if (!resp.ok) return null

    const data: unknown = await resp.json()

    // Validación básica antes de confiar
    if (typeof data !== 'object' || data === null) return null

    return data as Usuario  // Asumimos estructura correcta tras la validación básica
  } catch {
    return null
  }
}
\`\`\`

### fetch con POST y tipos

\`\`\`typescript
interface NuevoProducto {
  nombre: string
  precio: number
}

async function crearProducto(producto: NuevoProducto): Promise<{ id: number }> {
  const resp = await fetch('/api/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),  // TypeScript verifica que producto cumple NuevoProducto
  })

  if (!resp.ok) throw new Error(\`Error al crear: \${resp.status}\`)
  return resp.json() as Promise<{ id: number }>
}
\`\`\``,
    codeExample: `// api.ts

interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
  activo: boolean
}

interface NuevoProducto {
  nombre: string
  precio: number
  stock: number
}

// GET — obtener un producto por id
async function obtenerProducto(id: number): Promise<Producto | null> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`)

    if (resp.status === 404) return null
    if (!resp.ok) throw new Error(\`Error HTTP \${resp.status}\`)

    const data = await resp.json() as Producto
    return data
  } catch (error) {
    console.error('Error al obtener producto:', error)
    return null
  }
}

// GET — obtener lista de productos
async function listarProductos(): Promise<Producto[]> {
  try {
    const resp = await fetch('/api/productos')
    if (!resp.ok) throw new Error(\`Error HTTP \${resp.status}\`)

    const data = await resp.json() as Producto[]
    return data
  } catch (error) {
    console.error('Error al listar productos:', error)
    return []
  }
}

// POST — crear un producto
async function crearProducto(nuevo: NuevoProducto): Promise<Producto | null> {
  try {
    const resp = await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo),
    })

    if (!resp.ok) throw new Error(\`Error al crear: \${resp.status}\`)

    const creado = await resp.json() as Producto
    return creado
  } catch (error) {
    console.error('Error al crear producto:', error)
    return null
  }
}

// PUT — actualizar un producto
async function actualizarProducto(
  id: number,
  cambios: Partial<NuevoProducto>
): Promise<Producto | null> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cambios),
    })

    if (!resp.ok) throw new Error(\`Error al actualizar: \${resp.status}\`)

    return resp.json() as Promise<Producto>
  } catch (error) {
    console.error('Error al actualizar:', error)
    return null
  }
}

// DELETE
async function eliminarProducto(id: number): Promise<boolean> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`, { method: 'DELETE' })
    return resp.ok
  } catch {
    return false
  }
}`,
    keyPoints: [
      'fetch devuelve Promise<Response> — siempre verifica resp.ok antes de procesar los datos',
      'response.json() devuelve Promise<any> — usa as o valida antes de confiar en la estructura',
      'Para POST, JSON.stringify serializa el body y TypeScript verifica que el objeto sea del tipo correcto',
      'Envuelve las llamadas en try/catch para manejar errores de red',
      'Retornar null en lugar de lanzar excepciones hace el manejo de errores más predecible',
    ],
    exercise: {
      description:
        'Implementa `async function buscarProductos(termino: string): Promise<Producto[]>` que llame a `/api/productos?q=${termino}`, verifique resp.ok, y retorne el array de productos (o array vacío si falla). Luego implementa `async function actualizarPrecio(id: number, nuevoPrecio: number): Promise<boolean>` que use PATCH a `/api/productos/${id}` con body `{ precio: nuevoPrecio }` y retorne true si fue exitoso.',
      hint: 'Para PATCH: `method: "PATCH"`, body: `JSON.stringify({ precio: nuevoPrecio })`. Para el query string de búsqueda: usa `encodeURIComponent(termino)` para manejar caracteres especiales. Retorna array vacío [] si hay error.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene `response` en `const response = await fetch("/api/data")`?',
        options: [
          'unknown',
          'any',
          'Response',
          'Promise<Response>',
        ],
        correctAnswer: 'Response',
        correctFeedback:
          '¡Correcto! fetch devuelve Promise<Response>. Después del await, tienes un objeto Response con propiedades como .ok, .status, .json(), .text(), etc.',
        incorrectFeedback:
          'fetch devuelve Promise<Response>. Después del await, response es de tipo Response — no el dato final. Debes llamar response.json() para obtener los datos.',
      },
      {
        question: '¿Por qué verificar `if (!resp.ok)` antes de procesar los datos?',
        options: [
          'TypeScript lo requiere',
          'El servidor puede devolver un status de error (4xx, 5xx) con body JSON — sin verificar, tratarías el error como datos válidos',
          'fetch lanza una excepción si resp.ok es false',
          'Solo es necesario con fetch en TypeScript',
        ],
        correctAnswer: 'El servidor puede devolver un status de error (4xx, 5xx) con body JSON — sin verificar, tratarías el error como datos válidos',
        correctFeedback:
          '¡Exacto! Una respuesta 404 o 500 puede incluir JSON (como un mensaje de error), pero no son datos válidos. Verificar resp.ok asegura que el servidor respondió exitosamente.',
        incorrectFeedback:
          'fetch NO lanza excepción por status 4xx o 5xx — solo lo hace si hay error de red. Un status 404 con JSON retorna ok=false. Si no verificas, tratarías { error: "no encontrado" } como si fuera el dato esperado.',
      },
      {
        question: '¿Qué tipo devuelve `response.json()`?',
        options: [
          'unknown',
          'object',
          'Promise<any>',
          'Promise<unknown>',
        ],
        correctAnswer: 'Promise<any>',
        correctFeedback:
          '¡Correcto! response.json() devuelve Promise<any>. TypeScript no puede saber la forma de los datos JSON. El any significa que TypeScript confía en ti sin verificar.',
        incorrectFeedback:
          'response.json() devuelve Promise<any>. TypeScript no puede conocer la estructura del JSON. Al ser any, TypeScript no hará verificaciones — es tu responsabilidad validar antes de usar.',
      },
      {
        question: '¿Qué ventaja tiene `JSON.stringify(miObjeto)` cuando TypeScript tipó `miObjeto: NuevoProducto`?',
        options: [
          'JSON.stringify es más rápido con tipos',
          'TypeScript verifica que miObjeto cumple la interfaz NuevoProducto antes de enviarlo',
          'JSON.stringify solo funciona con tipos TypeScript',
          'No hay ventaja especial',
        ],
        correctAnswer: 'TypeScript verifica que miObjeto cumple la interfaz NuevoProducto antes de enviarlo',
        correctFeedback:
          '¡Perfecto! Al tipar el parámetro como NuevoProducto, TypeScript verifica que el objeto que pasas tiene todos los campos requeridos con los tipos correctos antes de enviarlo.',
        incorrectFeedback:
          'El tipado del objeto que pasas a JSON.stringify es verificado por TypeScript en compilación. Si NuevoProducto requiere "nombre: string" y pasas un número, TypeScript da error antes de que el código se ejecute.',
      },
      {
        question: '¿Por qué retornar `[]` en caso de error en lugar de lanzar una excepción?',
        options: [
          'Los arrays son siempre seguros',
          'Retornar un valor por defecto hace el manejo de errores más predecible y evita que el error se propague',
          'TypeScript requiere retornar arrays',
          'Las excepciones no funcionan en código async',
        ],
        correctAnswer: 'Retornar un valor por defecto hace el manejo de errores más predecible y evita que el error se propague',
        correctFeedback:
          '¡Correcto! Retornar [] o null centraliza el manejo de errores. El código que llama a la función puede manejar el resultado vacío sin preocuparse por try/catch.',
        incorrectFeedback:
          'Retornar un valor por defecto ([] o null) es más predecible. El código que llama recibe siempre un valor del mismo tipo. Con excepciones, el llamador debe recordar usar try/catch.',
      },
    ],
  },
  {
    slug: 'datos-posiblemente-incompletos',
    title: 'Manejar datos posiblemente incompletos',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 173,
    description:
      'Aprende a manejar propiedades opcionales, null, undefined y respuestas incompletas de APIs.',
    explanation: `## Manejar datos posiblemente incompletos

Las APIs del mundo real no siempre devuelven datos perfectos. Los campos pueden ser null, pueden faltar, o pueden tener valores vacíos. TypeScript puede ayudarte a modelar esta realidad.

### Campos opcionales en la interfaz

\`\`\`typescript
interface UsuarioAPI {
  id: number
  nombre: string
  email: string
  telefono?: string           // Puede no venir
  avatar: string | null       // Viene, pero puede ser null
  ultima_conexion: string | null | undefined  // Puede faltar o ser null
}
\`\`\`

### La diferencia entre opcional y null

\`\`\`typescript
// Campo opcional: puede no estar presente en el objeto
interface A { nombre?: string }
// A puede ser: {} o { nombre: "Ana" } o { nombre: undefined }

// Campo nullable: está presente pero puede ser null
interface B { nombre: string | null }
// B debe ser: { nombre: "Ana" } o { nombre: null }
\`\`\`

### Acceder de forma segura con ??

El operador \`??\` (nullish coalescing) devuelve el lado derecho cuando el izquierdo es \`null\` o \`undefined\`:

\`\`\`typescript
const avatar = usuario.avatar ?? '/avatar-default.png'
const telefono = usuario.telefono ?? 'Sin teléfono'
const nombre = usuario.nombre ?? 'Usuario'
\`\`\`

### Transformar null a valor por defecto

\`\`\`typescript
function normalizarUsuario(api: UsuarioAPI): UsuarioNormalizado {
  return {
    id: api.id,
    nombre: api.nombre,
    email: api.email,
    telefono: api.telefono ?? null,  // undefined → null
    avatar: api.avatar ?? '/default.png',
    ultimaConexion: api.ultima_conexion ? new Date(api.ultima_conexion) : null,
  }
}
\`\`\``,
    codeExample: `// api.ts

// La API puede devolver estos datos con campos faltantes o null
interface ProductoAPI {
  id: number
  nombre: string
  descripcion: string | null
  precio: number
  precio_descuento: number | null
  imagenes: string[] | null
  categoria?: string             // Puede no venir
  stock: number | null           // Null significa "sin información de stock"
  fecha_publicacion: string | null
}

// Tu modelo normalizado — sin nulls incómodos
interface Producto {
  id: number
  nombre: string
  descripcion: string            // Siempre tiene valor
  precio: number
  precioDescuento: number | null // null es un estado válido
  imagenes: string[]             // Siempre es array (puede estar vacío)
  categoria: string              // Siempre tiene valor
  stock: number | null           // Mantiene el null (sin info)
  publicadoEn: Date | null
}

function normalizarProducto(api: ProductoAPI): Producto {
  return {
    id: api.id,
    nombre: api.nombre,
    descripcion: api.descripcion ?? 'Sin descripción',
    precio: api.precio,
    precioDescuento: api.precio_descuento,  // Mantenemos null — es válido
    imagenes: api.imagenes ?? [],           // null → array vacío
    categoria: api.categoria ?? 'Sin categoría',
    stock: api.stock,                       // null significa "sin info"
    publicadoEn: api.fecha_publicacion
      ? new Date(api.fecha_publicacion)
      : null,
  }
}

// Funciones helper para usar el producto normalizado de forma segura
function obtenerImagenPrincipal(producto: Producto): string {
  return producto.imagenes[0] ?? '/placeholder.jpg'
}

function obtenerPrecioFinal(producto: Producto): number {
  return producto.precioDescuento ?? producto.precio
}

function estaDisponible(producto: Producto): boolean {
  if (producto.stock === null) return true  // Sin info de stock = asumimos disponible
  return producto.stock > 0
}

function formatearStock(producto: Producto): string {
  if (producto.stock === null) return 'Consultar disponibilidad'
  if (producto.stock === 0) return 'Sin stock'
  return \`\${producto.stock} unidades\`
}`,
    keyPoints: [
      'Distingue entre campo opcional (puede faltar) y campo nullable (presente pero puede ser null)',
      'El operador ?? provee valores por defecto para null y undefined',
      'Algunos null son informativos — "stock: null" puede significar "sin información" y no debe reemplazarse',
      'La normalización transforma null a valores por defecto donde tenga sentido',
      'Funciones helper encapsulan la lógica de manejo de null para un tipo específico',
    ],
    exercise: {
      description:
        'Dada `interface ArticuloAPI { id: number, titulo: string, resumen: string | null, contenido: string, autor?: string, tags: string[] | null, portada: string | null, publicado_en: string | null, vistas: number | null }`, crea una función `normalizarArticulo(api: ArticuloAPI): Articulo` donde Articulo tenga los campos normalizados: resumen con valor por defecto, autor con valor por defecto, tags como array vacío si null, portada con imagen placeholder, publicadoEn como Date | null, vistas como 0 si null.',
      hint: 'Define primero `interface Articulo` con los tipos normalizados. Luego `normalizarArticulo` usa ?? para proveer valores por defecto: `autor: api.autor ?? "Autor desconocido"`, `tags: api.tags ?? []`, etc.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `telefono?: string` y `telefono: string | null`?',
        options: [
          'Son exactamente equivalentes',
          '? significa que el campo puede no estar en el objeto; | null significa que el campo siempre está pero puede ser null',
          '? solo funciona en interfaces; | null en type aliases',
          '| null hace el campo obligatorio; ? lo hace opcional',
        ],
        correctAnswer: '? significa que el campo puede no estar en el objeto; | null significa que el campo siempre está pero puede ser null',
        correctFeedback:
          '¡Exacto! Con ?, el objeto puede ser {} (sin el campo) o { telefono: "123" }. Con | null, el campo siempre está: { telefono: "123" } o { telefono: null }.',
        incorrectFeedback:
          'Diferencia clave: ? (opcional) significa que el campo puede no existir en el objeto. | null significa que el campo existe pero su valor puede ser null. Son distintas situaciones.',
      },
      {
        question: '¿Qué devuelve `null ?? "defecto"`?',
        options: [
          'null',
          '"defecto"',
          'undefined',
          'false',
        ],
        correctAnswer: '"defecto"',
        correctFeedback:
          '¡Correcto! ?? devuelve el lado derecho cuando el izquierdo es null o undefined. Como null es null, devuelve "defecto".',
        incorrectFeedback:
          'El operador ?? (nullish coalescing) devuelve el lado derecho cuando el izquierdo es null o undefined. null ?? "defecto" = "defecto".',
      },
      {
        question: '¿Cuándo deberías mantener `null` en lugar de reemplazarlo con un valor por defecto?',
        options: [
          'Nunca — siempre reemplaza null con valores por defecto',
          'Cuando null tiene un significado semántico propio, como "stock: null" = "sin información de stock"',
          'Cuando el campo es opcional',
          'Solo con strings',
        ],
        correctAnswer: 'Cuando null tiene un significado semántico propio, como "stock: null" = "sin información de stock"',
        correctFeedback:
          '¡Perfecto! A veces null significa algo específico: "no se proporcionó", "no aplica", "sin información". Reemplazarlo con 0 o "" cambiaría ese significado.',
        incorrectFeedback:
          'Null puede tener significado semántico. "stock: null" puede significar "no tenemos información de stock" — diferente a "stock: 0" que significa "sin inventario". Mantener ese null preserva la información.',
      },
      {
        question: '¿Por qué usar `api.imagenes ?? []` al normalizar?',
        options: [
          'Porque null y [] son lo mismo',
          'Porque así el campo siempre es un array, lo que hace las operaciones de array (map, filter) siempre seguras',
          'Porque TypeScript no acepta null en arrays',
          'Para ahorrar memoria',
        ],
        correctAnswer: 'Porque así el campo siempre es un array, lo que hace las operaciones de array (map, filter) siempre seguras',
        correctFeedback:
          '¡Correcto! Con `imagenes: api.imagenes ?? []`, el campo siempre es un array. Puedes hacer `producto.imagenes.map(...)` sin verificar null primero.',
        incorrectFeedback:
          'Al normalizar null → [], el campo siempre tiene el tipo array. Esto permite usar métodos de array directamente sin verificar null. Sin normalización, cada vez que uses .map o .filter deberías verificar primero.',
      },
      {
        question: '¿Qué hace `api.fecha ? new Date(api.fecha) : null`?',
        options: [
          'Siempre crea un objeto Date',
          'Si fecha existe y no es null/undefined/vacío, la convierte a Date; si es falsy, retorna null',
          'Lanza un error si fecha es null',
          'Convierte null a undefined',
        ],
        correctAnswer: 'Si fecha existe y no es null/undefined/vacío, la convierte a Date; si es falsy, retorna null',
        correctFeedback:
          '¡Exacto! El ternario verifica si fecha es truthy (tiene valor, no es null/undefined/""). Si sí, crea un Date. Si no, retorna null.',
        incorrectFeedback:
          'El ternario `api.fecha ? new Date(api.fecha) : null` verifica si fecha es truthy. Si tiene un valor real (string con fecha), lo convierte a Date. Si es null, undefined, o string vacío, retorna null.',
      },
    ],
  },
  {
    slug: 'validar-antes-de-usar',
    title: 'Validar antes de usar',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 174,
    description:
      'Aprende por qué TypeScript no valida datos en runtime y cómo usar validaciones antes de confiar en datos externos.',
    explanation: `## Validar antes de usar datos externos

Como vimos antes, TypeScript no verifica los datos de APIs en tiempo de ejecución. Debes hacer esa verificación manualmente o con herramientas.

### Validación manual básica

\`\`\`typescript
function esUsuario(dato: unknown): boolean {
  return (
    typeof dato === 'object' &&
    dato !== null &&
    'id' in dato &&
    'nombre' in dato &&
    typeof (dato as { id: unknown }).id === 'number' &&
    typeof (dato as { nombre: unknown }).nombre === 'string'
  )
}
\`\`\`

### Por qué esto es importante

Imagina que la API cambia sin avisar:

\`\`\`typescript
// Lo que esperas
interface Usuario { id: number; nombre: string }

// Lo que la API ahora devuelve (cambio en el servidor)
// { user_id: number; full_name: string }

const usuario = await fetch('/api/usuario').then(r => r.json()) as Usuario
console.log(usuario.nombre)  // undefined — el campo se llama full_name ahora
console.log(usuario.nombre.toUpperCase())  // TypeError: Cannot read properties of undefined
\`\`\`

### Estrategias de validación

**Estrategia 1: Verificación básica antes de usar**
\`\`\`typescript
const data: unknown = await resp.json()

if (typeof data !== 'object' || data === null) {
  return null
}
// Al menos sabemos que es un objeto
\`\`\`

**Estrategia 2: Type guard personalizado**
\`\`\`typescript
function esProducto(x: unknown): x is Producto {
  return (
    typeof x === 'object' && x !== null &&
    typeof (x as Producto).id === 'number' &&
    typeof (x as Producto).nombre === 'string' &&
    typeof (x as Producto).precio === 'number'
  )
}
\`\`\`

**Estrategia 3: Acceso defensivo**
\`\`\`typescript
// Si no puedes validar todo, al menos verifica lo que uses
const dato = await resp.json()
const nombre = typeof dato?.nombre === 'string' ? dato.nombre : 'Desconocido'
\`\`\``,
    codeExample: `// validation.ts

// Validación básica de tipo objeto
function esObjeto(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
}

// Type guard para Producto
interface Producto {
  id: number
  nombre: string
  precio: number
  activo: boolean
}

function esProducto(x: unknown): x is Producto {
  if (!esObjeto(x)) return false

  return (
    typeof x['id'] === 'number' &&
    typeof x['nombre'] === 'string' &&
    typeof x['precio'] === 'number' &&
    typeof x['activo'] === 'boolean'
  )
}

// Type guard para array de productos
function esArrayProductos(x: unknown): x is Producto[] {
  return Array.isArray(x) && x.every(esProducto)
}

// Función de fetch con validación
async function obtenerProducto(id: number): Promise<Producto | null> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`)
    if (!resp.ok) return null

    const data: unknown = await resp.json()

    if (!esProducto(data)) {
      console.error('La respuesta de la API no tiene la forma esperada:', data)
      return null
    }

    return data  // TypeScript sabe que data es Producto ✅
  } catch {
    return null
  }
}

// Función de fetch para lista con validación
async function listarProductos(): Promise<Producto[]> {
  try {
    const resp = await fetch('/api/productos')
    if (!resp.ok) return []

    const data: unknown = await resp.json()

    if (!esArrayProductos(data)) {
      console.error('La respuesta no es un array de productos válido')
      return []
    }

    return data  // Producto[] garantizado ✅
  } catch {
    return []
  }
}

// Acceso defensivo cuando no puedes validar todo
async function obtenerNombreProducto(id: number): Promise<string> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`)
    if (!resp.ok) return 'Producto no encontrado'

    const data: unknown = await resp.json()

    // Acceso defensivo — verificamos solo lo que necesitamos
    if (esObjeto(data) && typeof data['nombre'] === 'string') {
      return data['nombre']
    }

    return 'Sin nombre'
  } catch {
    return 'Error al cargar'
  }
}`,
    keyPoints: [
      'TypeScript no valida datos externos en tiempo de ejecución — debes hacerlo manualmente',
      'Un type guard como `esProducto(x: unknown): x is Producto` verifica la estructura en runtime',
      'Después de un type guard positivo, TypeScript estrecha el tipo automáticamente',
      'El acceso defensivo verifica solo las propiedades que realmente vas a usar',
      'La validación protege tu código de cambios inesperados en la API o respuestas malformadas',
    ],
    exercise: {
      description:
        'Crea un type guard `esArticulo(x: unknown): x is Articulo` para `interface Articulo { id: number, titulo: string, contenido: string, publicado: boolean, autor: string }`. El type guard debe verificar que x es un objeto, que id es number, que titulo es string, que contenido es string, que publicado es boolean, y que autor es string. Luego úsalo en una función `fetchArticulo(id: number): Promise<Articulo | null>`.',
      hint: 'Empieza con `if (typeof x !== "object" || x === null) return false`. Luego verifica cada campo con `typeof (x as Record<string, unknown>)[campo]`. Después del type guard, TypeScript sabe que x es Articulo dentro del if positivo.',
    },
    quiz: [
      {
        question: '¿Por qué TypeScript no detecta automáticamente si los datos de la API tienen la forma correcta?',
        options: [
          'Porque fetch no está tipado',
          'Porque los tipos desaparecen al compilar — en tiempo de ejecución no hay información de tipos',
          'Porque TypeScript solo valida datos síncronos',
          'Porque as desactiva toda validación',
        ],
        correctAnswer: 'Porque los tipos desaparecen al compilar — en tiempo de ejecución no hay información de tipos',
        correctFeedback:
          '¡Correcto! Los tipos de TypeScript son borrados durante la compilación. El JavaScript resultante no tiene información de tipos para verificar los datos que llegan de la red.',
        incorrectFeedback:
          'TypeScript es un sistema de tipos estático. Los tipos existen solo en tiempo de compilación. El código JavaScript resultante no tiene información de tipos — no puede verificar la forma de los datos externos en tiempo de ejecución.',
      },
      {
        question: '¿Qué hace `function esProducto(x: unknown): x is Producto`?',
        options: [
          'Convierte x a tipo Producto',
          'Es un type guard — verifica en runtime que x tiene la forma de Producto',
          'Solo funciona en TypeScript antiguo',
          'Lanza error si x no es Producto',
        ],
        correctAnswer: 'Es un type guard — verifica en runtime que x tiene la forma de Producto',
        correctFeedback:
          '¡Exacto! Un type guard es una función que verifica el tipo en tiempo de ejecución. Si retorna true, TypeScript estrecha el tipo de x a Producto en el código que sigue.',
        incorrectFeedback:
          'Un type guard es una función con type predicate (x is Producto). Si retorna true, TypeScript estrecha el tipo en el contexto donde se usa. La verificación real ocurre en tiempo de ejecución con typeof, instanceof, etc.',
      },
      {
        question: '¿Qué ocurre después de `if (esProducto(data)) { ... }` si `esProducto` es un type guard?',
        options: [
          'data sigue siendo unknown dentro del if',
          'TypeScript estrecha el tipo de data a Producto dentro del bloque if',
          'data se convierte a any',
          'TypeScript da error porque data ya tenía tipo unknown',
        ],
        correctAnswer: 'TypeScript estrecha el tipo de data a Producto dentro del bloque if',
        correctFeedback:
          '¡Perfecto! Después de un type guard positivo, TypeScript estrecha el tipo automáticamente. Dentro del if, puedes acceder a data.id, data.nombre, etc. sin errores.',
        incorrectFeedback:
          'El type guard cambia el tipo en el contexto donde se usa. Dentro del if (esProducto(data)), TypeScript sabe que data es Producto y permite acceder a sus propiedades.',
      },
      {
        question: '¿Cuál es la verificación más importante al inicio de un type guard para un objeto?',
        options: [
          'typeof x === "string"',
          'typeof x === "object" && x !== null',
          'Array.isArray(x)',
          'x instanceof Object',
        ],
        correctAnswer: 'typeof x === "object" && x !== null',
        correctFeedback:
          '¡Correcto! typeof null === "object" en JavaScript, así que debes verificar también que x !== null. Después de esta verificación puedes acceder a sus propiedades de forma segura.',
        incorrectFeedback:
          'typeof null === "object" en JavaScript (un error histórico). Por eso siempre debes verificar `typeof x === "object" && x !== null` juntos. Si solo verificas typeof, el null pasaría la verificación.',
      },
      {
        question: '¿Qué es el "acceso defensivo" cuando no puedes validar toda la respuesta?',
        options: [
          'Usar as any para evitar errores',
          'Verificar el tipo solo de las propiedades específicas que vas a usar',
          'No usar los datos de la API',
          'Lanzar una excepción siempre',
        ],
        correctAnswer: 'Verificar el tipo solo de las propiedades específicas que vas a usar',
        correctFeedback:
          '¡Exacto! Si solo necesitas el nombre de un producto, puedes verificar solo `typeof data?.nombre === "string"` en lugar de validar toda la estructura.',
        incorrectFeedback:
          'El acceso defensivo es pragmático: verifica solo lo que necesitas. `if (esObjeto(data) && typeof data["nombre"] === "string") { usar data["nombre"] }`. No necesitas validar todo si solo usas una propiedad.',
      },
    ],
  },
  {
    slug: 'type-guards-apis',
    title: 'Type guards para APIs',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 175,
    description:
      'Aprende a crear type guards para validar respuestas externas de forma más segura.',
    explanation: `## Type guards para APIs

Un **type guard** es una función que verifica el tipo de un valor en tiempo de ejecución y le comunica a TypeScript el resultado de esa verificación.

### Sintaxis de un type guard

\`\`\`typescript
function esX(valor: unknown): valor is X {
  // verificaciones en tiempo de ejecución
  return /* boolean */
}
\`\`\`

El tipo de retorno \`valor is X\` es el **type predicate**. Le dice a TypeScript: "si esta función devuelve true, confía en que valor es de tipo X".

### Construir type guards incremental

\`\`\`typescript
// Paso 1: helper básico
function esObjeto(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
}

// Paso 2: type guard compuesto
function esUsuario(x: unknown): x is Usuario {
  if (!esObjeto(x)) return false

  return (
    typeof x['id'] === 'number' &&
    typeof x['nombre'] === 'string' &&
    typeof x['email'] === 'string'
  )
}

// Paso 3: array de tipo
function esArrayUsuarios(x: unknown): x is Usuario[] {
  return Array.isArray(x) && x.every(esUsuario)
}
\`\`\`

### Type guard para respuestas envueltas

Muchas APIs devuelven los datos dentro de un wrapper:

\`\`\`typescript
interface RespuestaExitosa<T> {
  success: true
  data: T
}

interface RespuestaError {
  success: false
  error: string
}

type Respuesta<T> = RespuestaExitosa<T> | RespuestaError

function esRespuestaExitosa<T>(
  x: unknown,
  esT: (v: unknown) => v is T
): x is RespuestaExitosa<T> {
  return (
    esObjeto(x) &&
    x['success'] === true &&
    esT(x['data'])
  )
}
\`\`\``,
    codeExample: `// guards.ts

// ===== HELPERS BASE =====

function esObjeto(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
}

function esString(x: unknown): x is string {
  return typeof x === 'string'
}

function esNumero(x: unknown): x is number {
  return typeof x === 'number' && !isNaN(x)
}

function esBooleano(x: unknown): x is boolean {
  return typeof x === 'boolean'
}

// ===== TYPE GUARDS DE DOMINIO =====

interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: string
  activo: boolean
}

function esProducto(x: unknown): x is Producto {
  if (!esObjeto(x)) return false

  return (
    esNumero(x['id']) &&
    esString(x['nombre']) &&
    esNumero(x['precio']) &&
    esString(x['categoria']) &&
    esBooleano(x['activo'])
  )
}

function esArrayProductos(x: unknown): x is Producto[] {
  return Array.isArray(x) && x.every(esProducto)
}

// ===== TYPE GUARDS PARA RESPUESTAS ENVUELTAS =====

interface ApiSuccess<T> {
  success: true
  data: T
}

interface ApiError {
  success: false
  error: string
  code?: number
}

type ApiResponse<T> = ApiSuccess<T> | ApiError

function esApiSuccess<T>(
  x: unknown,
  validarData: (v: unknown) => v is T
): x is ApiSuccess<T> {
  return esObjeto(x) && x['success'] === true && validarData(x['data'])
}

function esApiError(x: unknown): x is ApiError {
  return (
    esObjeto(x) &&
    x['success'] === false &&
    esString(x['error'])
  )
}

// ===== USO EN FETCH =====

async function fetchProducto(id: number): Promise<Producto | null> {
  try {
    const resp = await fetch(\`/api/productos/\${id}\`)
    const data: unknown = await resp.json()

    // La API envuelve todo en { success, data }
    if (esApiSuccess(data, esProducto)) {
      return data.data  // data.data es Producto ✅
    }

    if (esApiError(data)) {
      console.error(\`Error de API: \${data.error}\`)
    }

    return null
  } catch {
    return null
  }
}

async function fetchProductos(): Promise<Producto[]> {
  try {
    const resp = await fetch('/api/productos')
    const data: unknown = await resp.json()

    if (esApiSuccess(data, esArrayProductos)) {
      return data.data  // Producto[] garantizado ✅
    }

    return []
  } catch {
    return []
  }
}`,
    keyPoints: [
      'Un type guard (valor is T) verifica el tipo en runtime y permite narrowing en TypeScript',
      'Construye type guards incrementalmente — helpers base + guards de dominio + guards de envoltura',
      'Un array type guard usa Array.isArray + .every() con el type guard del elemento',
      'Los type guards genéricos funcionan con funciones validadoras como parámetros',
      'Después de un type guard positivo, TypeScript estrechó el tipo automáticamente',
    ],
    exercise: {
      description:
        'Crea type guards para esta estructura de API: La API devuelve `{ ok: true, result: T }` en éxito y `{ ok: false, message: string }` en error. Define las interfaces `ApiOk<T>` y `ApiFail`. Crea type guards `esApiOk<T>(x: unknown, validarT: (v: unknown) => v is T): x is ApiOk<T>` y `esApiFail(x: unknown): x is ApiFail`. Define también una interfaz `Tarea { id: number, texto: string, hecha: boolean }` con su type guard `esTarea(x: unknown): x is Tarea`. Finalmente usa todo en `fetchTarea(id: number): Promise<Tarea | null>`.',
      hint: 'Para ApiOk: verifica que x.ok === true y que validarT(x.result) sea true. Para Tarea: verifica id como number, texto como string, hecha como boolean. En fetchTarea, llama esApiOk(data, esTarea).',
    },
    quiz: [
      {
        question: '¿Qué significa el tipo de retorno `valor is Producto` en un type guard?',
        options: [
          'Que la función siempre devuelve un Producto',
          'Que si la función devuelve true, TypeScript estrechará el tipo de valor a Producto',
          'Que valor se convierte a Producto',
          'Que la función puede lanzar una excepción',
        ],
        correctAnswer: 'Que si la función devuelve true, TypeScript estrechará el tipo de valor a Producto',
        correctFeedback:
          '¡Correcto! El type predicate (valor is Producto) es una promesa al compilador: "cuando retorno true, garantizo que valor cumple la interfaz Producto".',
        incorrectFeedback:
          'El type predicate `valor is Producto` es información para el compilador. Cuando la función retorna true, TypeScript estrecha el tipo de valor a Producto en el contexto donde se usa. La función retorna boolean, no un Producto.',
      },
      {
        question: '¿Por qué es útil el helper `esObjeto(x: unknown): x is Record<string, unknown>`?',
        options: [
          'Para convertir cualquier valor a un objeto',
          'Como primer paso en un type guard de objeto — verifica que x es un objeto y no null',
          'Para comparar objetos por valor',
          'Solo funciona con objetos JSON',
        ],
        correctAnswer: 'Como primer paso en un type guard de objeto — verifica que x es un objeto y no null',
        correctFeedback:
          '¡Exacto! esObjeto es un paso previo. Verifica typeof x === "object" && x !== null. Después de usarlo, puedes acceder a propiedades de x de forma segura.',
        incorrectFeedback:
          'esObjeto es un helper útil porque typeof null === "object" en JavaScript. Al verificar ambos (typeof y !== null), puedes seguramente acceder a propiedades del objeto después.',
      },
      {
        question: '¿Cómo creas un type guard para un array de Productos?',
        options: [
          'function esArrayProductos(x: unknown): x is Producto[] { return typeof x === "array" }',
          'function esArrayProductos(x: unknown): x is Producto[] { return Array.isArray(x) && x.every(esProducto) }',
          'function esArrayProductos(x: unknown): x is Producto[] { return x instanceof Array }',
          'function esArrayProductos(x: Producto[]): boolean { return true }',
        ],
        correctAnswer: 'function esArrayProductos(x: unknown): x is Producto[] { return Array.isArray(x) && x.every(esProducto) }',
        correctFeedback:
          '¡Perfecto! Array.isArray verifica que es un array, y .every(esProducto) verifica que cada elemento cumple la interfaz Producto.',
        incorrectFeedback:
          'Para verificar un array de un tipo específico: Array.isArray(x) verifica que es un array, x.every(esProducto) verifica que TODOS los elementos son de ese tipo. typeof === "array" no existe — typeof para arrays devuelve "object".',
      },
      {
        question: '¿Cuándo es útil un type guard genérico como `esApiSuccess<T>(x, validarData: (v) => v is T)`?',
        options: [
          'Cuando T siempre es string',
          'Cuando la envoltura de la respuesta es consistente pero los datos internos varían',
          'Solo con arrays',
          'No es posible hacer type guards genéricos',
        ],
        correctAnswer: 'Cuando la envoltura de la respuesta es consistente pero los datos internos varían',
        correctFeedback:
          '¡Exacto! Si la API siempre devuelve { success: true, data: T }, el type guard genérico reutiliza la verificación de la envoltura y delega la verificación de data al type guard específico.',
        incorrectFeedback:
          'El type guard genérico es útil cuando la estructura "externa" es siempre la misma (success, data) pero el tipo de data cambia. En lugar de escribir un type guard por tipo, uno genérico lo maneja todos.',
      },
      {
        question: '¿Qué ventaja tiene validar los datos de la API con un type guard en lugar de usar `as`?',
        options: [
          'Los type guards son más rápidos',
          'El type guard verifica la estructura en tiempo de ejecución; as solo le dice a TypeScript que confíe sin verificar',
          'as no funciona con interfaces',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'El type guard verifica la estructura en tiempo de ejecución; as solo le dice a TypeScript que confíe sin verificar',
        correctFeedback:
          '¡Perfecto! Un type guard es código real que se ejecuta y verifica. as es solo una instrucción al compilador que no ejecuta ninguna verificación real.',
        incorrectFeedback:
          'La diferencia es fundamental: as es solo una instrucción al compilador ("confía en mí"). Un type guard ejecuta código real que verifica la estructura. Si la API cambia, el type guard lo detecta; as no.',
      },
    ],
  },
  {
    slug: 'estados-carga-exito-error',
    title: 'Estados de carga, éxito y error',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 176,
    description:
      'Aprende a modelar estados de una solicitud usando union types y discriminated unions.',
    explanation: `## Estados de carga, éxito y error

Toda petición a una API pasa por varios estados. TypeScript puede modelar esos estados de forma explícita y segura usando **uniones discriminadas**.

### El problema con booleans y nulls

\`\`\`typescript
// ❌ Problemático — permite estados imposibles
interface EstadoProblematico {
  cargando: boolean
  datos: Producto[] | null
  error: string | null
}

// Estado imposible: cargando=true Y datos=[...] Y error="algo"
// TypeScript no puede detectar que eso no tiene sentido
\`\`\`

### La solución: unión discriminada

\`\`\`typescript
// ✅ Correcto — solo un estado posible a la vez
type EstadoProductos =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: Producto[] }
  | { tipo: 'error'; mensaje: string }
\`\`\`

### Ventajas

Con una unión discriminada:
1. Solo un estado es posible a la vez
2. TypeScript sabe qué propiedades están disponibles en cada estado
3. El switch o if hace narrowing automáticamente

\`\`\`typescript
function renderizarEstado(estado: EstadoProductos): string {
  switch (estado.tipo) {
    case 'idle':
      return 'Sin iniciar'
    case 'cargando':
      return 'Cargando...'
    case 'exito':
      return \`\${estado.datos.length} productos\`  // datos disponible ✅
    case 'error':
      return \`Error: \${estado.mensaje}\`  // mensaje disponible ✅
  }
}
\`\`\``,
    codeExample: `// states.ts

interface Producto {
  id: number
  nombre: string
  precio: number
}

// Estado de petición — unión discriminada
type EstadoFetch<T> =
  | { tipo: 'idle' }
  | { tipo: 'cargando' }
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string; codigo?: number }

// Estado inicial
let estadoProductos: EstadoFetch<Producto[]> = { tipo: 'idle' }

// Actualizar UI según el estado
function actualizarUI(estado: EstadoFetch<Producto[]>): void {
  const contenedor = document.getElementById('productos')
  const spinner = document.getElementById('spinner')
  const errorEl = document.getElementById('error')

  // Limpiar estado anterior
  if (spinner) spinner.style.display = 'none'
  if (errorEl) errorEl.textContent = ''
  if (contenedor) contenedor.textContent = ''

  switch (estado.tipo) {
    case 'idle':
      break  // No mostrar nada

    case 'cargando':
      if (spinner) spinner.style.display = 'block'
      break

    case 'exito':
      // TypeScript sabe que estado.datos existe aquí ✅
      if (contenedor) {
        contenedor.textContent = \`\${estado.datos.length} productos cargados\`
      }
      break

    case 'error':
      // TypeScript sabe que estado.mensaje existe aquí ✅
      if (errorEl) {
        errorEl.textContent = estado.mensaje
        if (estado.codigo) {
          errorEl.textContent += \` (Error \${estado.codigo})\`
        }
      }
      break
  }
}

// Función que carga productos y actualiza el estado
async function cargarProductos(): Promise<void> {
  estadoProductos = { tipo: 'cargando' }
  actualizarUI(estadoProductos)

  try {
    const resp = await fetch('/api/productos')

    if (!resp.ok) {
      estadoProductos = {
        tipo: 'error',
        mensaje: 'No se pudieron cargar los productos',
        codigo: resp.status,
      }
      actualizarUI(estadoProductos)
      return
    }

    const datos = await resp.json() as Producto[]
    estadoProductos = { tipo: 'exito', datos }
    actualizarUI(estadoProductos)

  } catch {
    estadoProductos = {
      tipo: 'error',
      mensaje: 'Error de conexión',
    }
    actualizarUI(estadoProductos)
  }
}

// Retorno booleano simple para evitar estado imposible
function puedeCargarse(estado: EstadoFetch<unknown>): boolean {
  return estado.tipo === 'idle' || estado.tipo === 'error'
}`,
    keyPoints: [
      'Las uniones discriminadas (con campo tipo o kind) modelan estados mutuamente excluyentes',
      'Con switch/case o if, TypeScript estrecha el tipo y da acceso a las propiedades correctas',
      'Booleans separados (cargando, error) permiten estados imposibles; la unión discriminada no',
      'EstadoFetch<T> genérico reutiliza el patrón con cualquier tipo de datos',
      'El estado idle representa "sin iniciar" — diferente de cargando o éxito',
    ],
    exercise: {
      description:
        'Implementa `type EstadoBusqueda<T> = | { tipo: "inicial" } | { tipo: "buscando"; termino: string } | { tipo: "resultados"; termino: string; items: T[]; total: number } | { tipo: "sin-resultados"; termino: string } | { tipo: "error"; mensaje: string }`. Luego crea una función `renderizarBusqueda(estado: EstadoBusqueda<{ id: number; nombre: string }>): void` que actualice el DOM según cada estado. Usa switch para el narrowing.',
      hint: 'Cada caso del switch tiene acceso a propiedades diferentes. En "resultados" puedes acceder a estado.items y estado.total. En "buscando" y otros, puedes acceder a estado.termino. TypeScript te dirá automáticamente qué propiedades están disponibles.',
    },
    quiz: [
      {
        question: '¿Por qué usar una unión discriminada en lugar de `{ cargando: boolean; datos: T | null; error: string | null }`?',
        options: [
          'Las uniones son más eficientes',
          'Porque la interfaz con booleans permite estados imposibles — la unión garantiza que solo un estado es posible',
          'TypeScript requiere uniones para APIs',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'Porque la interfaz con booleans permite estados imposibles — la unión garantiza que solo un estado es posible',
        correctFeedback:
          '¡Correcto! Con booleans puedes tener { cargando: true, datos: [...], error: "algo" } — un estado sin sentido. La unión discriminada hace imposibles esas combinaciones.',
        incorrectFeedback:
          'Con booleans, puedes crear estados incoherentes como cargando=true AND datos con valor. La unión discriminada garantiza que solo uno de los estados es posible a la vez.',
      },
      {
        question: '¿Qué propiedades están disponibles en el case "exito" de `switch (estado.tipo)` con una unión discriminada?',
        options: [
          'Solo tipo',
          'Todas las propiedades de todos los tipos de la unión',
          'Solo las propiedades de la variante con tipo "exito"',
          'Ninguna propiedad adicional',
        ],
        correctAnswer: 'Solo las propiedades de la variante con tipo "exito"',
        correctFeedback:
          '¡Exacto! Dentro del case "exito", TypeScript estrecha el tipo a la variante de éxito. Solo las propiedades de esa variante (como datos) están disponibles.',
        incorrectFeedback:
          'Dentro de un case del switch, TypeScript estrecha el tipo a la variante correspondiente. En el case "exito", solo están disponibles las propiedades de `{ tipo: "exito"; datos: T }`, no las de otras variantes.',
      },
      {
        question: '¿Para qué sirve el estado "idle" o "inicial"?',
        options: [
          'Es equivalente a cargando',
          'Representa el estado antes de que se haya iniciado ninguna petición',
          'Es el estado de error por defecto',
          'TypeScript requiere un estado idle en las uniones',
        ],
        correctAnswer: 'Representa el estado antes de que se haya iniciado ninguna petición',
        correctFeedback:
          '¡Perfecto! idle (o inicial) es el estado de "sin iniciar". El componente existe pero todavía no se ha hecho ninguna petición. Es diferente de cargando (petición en progreso).',
        incorrectFeedback:
          '"idle" o "inicial" representa el estado neutro inicial — antes de que empiece cualquier operación. Es diferente de "cargando" (en progreso), "exito" (terminó bien), o "error" (terminó mal).',
      },
      {
        question: '¿Cómo usa TypeScript el campo "tipo" en una unión discriminada?',
        options: [
          'Lo ignora — tipo no tiene efecto especial',
          'Como discriminante — el valor literal de tipo determina qué variante es y qué propiedades están disponibles',
          'Como nombre del tipo en JavaScript',
          'Solo como string de depuración',
        ],
        correctAnswer: 'Como discriminante — el valor literal de tipo determina qué variante es y qué propiedades están disponibles',
        correctFeedback:
          '¡Exacto! El campo tipo (o kind, o cualquier campo con literal types) es el discriminante. TypeScript lo usa para hacer narrowing automático en switch/if.',
        incorrectFeedback:
          'El campo con literales (tipo, kind, tag) es el discriminante de la unión. TypeScript lo reconoce y, cuando haces switch(estado.tipo), estrecha el tipo de estado según el case. No es magia — es el sistema de tipos usando los literal types.',
      },
      {
        question: '¿Por qué `EstadoFetch<T>` con genérico es mejor que `EstadoProductos` sin él?',
        options: [
          'Los genéricos son más eficientes',
          'Permite reutilizar el mismo patrón de estados para cualquier tipo de datos',
          'TypeScript requiere genéricos para uniones',
          'Sin genérico, las uniones no funcionan',
        ],
        correctAnswer: 'Permite reutilizar el mismo patrón de estados para cualquier tipo de datos',
        correctFeedback:
          '¡Correcto! EstadoFetch<Producto[]>, EstadoFetch<Usuario>, EstadoFetch<Articulo[]> — el mismo patrón, diferentes tipos de datos. Sin genérico, necesitarías duplicar el tipo para cada caso.',
        incorrectFeedback:
          'El genérico <T> hace el patrón reutilizable. EstadoFetch<Producto[]> para productos, EstadoFetch<Usuario> para un usuario, etc. Sin genérico, tendrías que definir un tipo de estado separado para cada tipo de dato.',
      },
    ],
  },
  {
    slug: 'errores-http-respuestas-inesperadas',
    title: 'Errores HTTP y respuestas inesperadas',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 177,
    description:
      'Aprende a manejar errores HTTP, respuestas vacías y estructuras inesperadas.',
    explanation: `## Errores HTTP y respuestas inesperadas

Las APIs del mundo real fallan. Un buen código TypeScript anticipa y maneja esos fallos de forma limpia.

### Tipos de error que puedes encontrar

1. **Error de red**: sin conexión, timeout, DNS falla
2. **Error HTTP 4xx**: el cliente hizo algo mal (404 no encontrado, 401 no autorizado, 422 validación)
3. **Error HTTP 5xx**: el servidor falló (500 internal server error)
4. **Respuesta vacía**: el servidor responde 204 sin body
5. **JSON malformado**: el servidor devuelve texto que no es JSON válido
6. **Estructura inesperada**: el JSON es válido pero no tiene la forma esperada

### Manejar cada caso

\`\`\`typescript
async function fetchConManejo<T>(url: string): Promise<T | null> {
  try {
    const resp = await fetch(url)

    // Sin contenido — respuesta válida pero vacía
    if (resp.status === 204) return null

    // Error HTTP
    if (!resp.ok) {
      console.error(\`Error HTTP \${resp.status}: \${resp.statusText}\`)
      return null
    }

    // Parsear JSON — puede fallar si el body no es JSON válido
    let data: unknown
    try {
      data = await resp.json()
    } catch {
      console.error('La respuesta no es JSON válido')
      return null
    }

    return data as T
  } catch (error) {
    // Error de red (no se pudo conectar)
    console.error('Error de red:', error)
    return null
  }
}
\`\`\`

### Leer mensajes de error de la API

\`\`\`typescript
if (!resp.ok) {
  // Muchas APIs incluyen un mensaje de error en el body
  try {
    const errorData = await resp.json()
    const mensaje = typeof errorData?.message === 'string'
      ? errorData.message
      : \`Error \${resp.status}\`
    return { exito: false, error: mensaje }
  } catch {
    return { exito: false, error: \`Error \${resp.status}\` }
  }
}
\`\`\``,
    codeExample: `// http.ts

// Tipos de error HTTP comunes
type ErrorHTTP =
  | { tipo: 'red'; mensaje: string }
  | { tipo: 'http'; status: number; statusText: string; mensaje?: string }
  | { tipo: 'json'; mensaje: string }
  | { tipo: 'validacion'; mensaje: string }

type ResultadoFetch<T> =
  | { exito: true; datos: T }
  | { exito: false; error: ErrorHTTP }

// Función genérica que maneja todos los tipos de error
async function fetchSeguro<T>(
  url: string,
  validar?: (x: unknown) => x is T
): Promise<ResultadoFetch<T>> {
  // Error de red
  let resp: Response
  try {
    resp = await fetch(url)
  } catch (err) {
    return {
      exito: false,
      error: {
        tipo: 'red',
        mensaje: err instanceof Error ? err.message : 'Error de conexión desconocido',
      },
    }
  }

  // Respuesta vacía (204 No Content)
  if (resp.status === 204) {
    return { exito: false, error: { tipo: 'http', status: 204, statusText: 'No Content' } }
  }

  // Error HTTP
  if (!resp.ok) {
    let mensajeError: string | undefined
    try {
      const errorBody = await resp.json()
      if (typeof errorBody?.message === 'string') {
        mensajeError = errorBody.message
      }
    } catch {
      // El body del error no es JSON — está bien
    }

    return {
      exito: false,
      error: {
        tipo: 'http',
        status: resp.status,
        statusText: resp.statusText,
        mensaje: mensajeError,
      },
    }
  }

  // Parsear JSON
  let data: unknown
  try {
    data = await resp.json()
  } catch {
    return {
      exito: false,
      error: { tipo: 'json', mensaje: 'La respuesta no es JSON válido' },
    }
  }

  // Validar estructura si se proveyó type guard
  if (validar && !validar(data)) {
    return {
      exito: false,
      error: { tipo: 'validacion', mensaje: 'La respuesta no tiene la estructura esperada' },
    }
  }

  return { exito: true, datos: data as T }
}

// Uso
interface Producto { id: number; nombre: string; precio: number }

function esProducto(x: unknown): x is Producto {
  return (
    typeof x === 'object' && x !== null &&
    typeof (x as { id?: unknown }).id === 'number' &&
    typeof (x as { nombre?: unknown }).nombre === 'string'
  )
}

async function mostrarProducto(id: number): Promise<void> {
  const resultado = await fetchSeguro(\`/api/productos/\${id}\`, esProducto)

  if (!resultado.exito) {
    const err = resultado.error
    if (err.tipo === 'http' && err.status === 404) {
      console.log('Producto no encontrado')
    } else {
      console.error('Error:', err)
    }
    return
  }

  // resultado.datos es Producto ✅
  console.log(\`Producto: \${resultado.datos.nombre} - $\${resultado.datos.precio}\`)
}`,
    keyPoints: [
      'fetch solo lanza excepción por errores de red — los errores HTTP (4xx, 5xx) debes verificarlos con resp.ok',
      'El status 204 No Content es una respuesta exitosa sin body — no intentes parsear JSON',
      'Envuelve resp.json() en try/catch porque el body puede no ser JSON válido',
      'Muchas APIs devuelven mensajes de error en el body cuando resp.ok es false',
      'El tipo Result (exito: true/false) comunica el éxito o fallo de forma explícita',
    ],
    exercise: {
      description:
        'Crea una función `fetchConReintentos(url: string, intentos: number): Promise<unknown>` que: intente la petición hasta `intentos` veces, reintente solo si el error es de red (no si es HTTP 4xx o 5xx), espere 1000ms entre intentos (usa `new Promise(r => setTimeout(r, 1000))`), retorne los datos si tiene éxito, o lance un error si se agotaron los intentos.',
      hint: 'Usa un bucle for con contador. Si resp.ok es false con status >= 400, no reintentes (lanza el error o retorna). Solo reintenta si hay un catch de error de red. Usa `await new Promise(resolve => setTimeout(resolve, 1000))` para el delay.',
    },
    quiz: [
      {
        question: '¿En qué caso `fetch` lanza una excepción (llega al catch)?',
        options: [
          'Cuando el servidor devuelve status 404',
          'Cuando el servidor devuelve status 500',
          'Cuando hay un error de red — sin conexión, timeout, DNS falla',
          'Siempre que resp.ok sea false',
        ],
        correctAnswer: 'Cuando hay un error de red — sin conexión, timeout, DNS falla',
        correctFeedback:
          '¡Correcto! fetch solo lanza excepción si no puede establecer la conexión (sin internet, timeout, host no encontrado). Respuestas 4xx y 5xx son respuestas válidas — llegan con resp.ok = false.',
        incorrectFeedback:
          'fetch solo lanza excepción por errores de red (no se puede conectar al servidor). Si el servidor responde con 404 o 500, resp existe y resp.ok es false — pero no hay excepción. Debes verificar resp.ok.',
      },
      {
        question: '¿Qué debes hacer cuando `resp.status === 204`?',
        options: [
          'Lanzar una excepción',
          'Llamar resp.json() normalmente',
          'Retornar null — 204 No Content es una respuesta exitosa sin body',
          'Reintentar la petición',
        ],
        correctAnswer: 'Retornar null — 204 No Content es una respuesta exitosa sin body',
        correctFeedback:
          '¡Exacto! 204 No Content es un status válido de éxito. Significa que la operación fue exitosa pero no hay nada que devolver. Intentar parsear JSON en este caso lanzaría un error.',
        incorrectFeedback:
          '204 No Content es una respuesta exitosa — no es un error. Simplemente no tiene body. Intentar parsear resp.json() en este caso lanzaría SyntaxError porque el body está vacío.',
      },
      {
        question: '¿Por qué envolver `resp.json()` en try/catch?',
        options: [
          'Porque json() puede devolver undefined',
          'Porque el servidor puede devolver texto que no es JSON válido (HTML de error, texto plano)',
          'Porque json() siempre lanza excepciones',
          'TypeScript lo requiere',
        ],
        correctAnswer: 'Porque el servidor puede devolver texto que no es JSON válido (HTML de error, texto plano)',
        correctFeedback:
          '¡Perfecto! Algunos servidores devuelven páginas HTML de error, texto plano, o XML. Si intentas parsearlo como JSON con resp.json(), lanzará SyntaxError.',
        incorrectFeedback:
          'resp.json() lanza SyntaxError si el body no es JSON válido. Los servidores a veces devuelven HTML de error (503 con página "Service Unavailable"), texto plano, o están mal configurados. El try/catch protege contra eso.',
      },
      {
        question: '¿Por qué es útil el tipo `type ResultadoFetch<T> = { exito: true; datos: T } | { exito: false; error: Error }`?',
        options: [
          'Es más corto que usar try/catch',
          'Hace explícito en el tipo que la operación puede fallar y obliga al llamador a manejar ambos casos',
          'Es la única forma de manejar errores async',
          'Las excepciones no funcionan con async/await',
        ],
        correctAnswer: 'Hace explícito en el tipo que la operación puede fallar y obliga al llamador a manejar ambos casos',
        correctFeedback:
          '¡Correcto! El tipo resultado comunica claramente que hay dos posibles resultados. El código que llama a la función debe verificar exito antes de acceder a datos o error.',
        incorrectFeedback:
          'El tipo resultado hace la posibilidad de fallo visible en la firma de la función. El llamador no puede ignorar el error — debe verificar exito. Con excepciones, es fácil olvidar el try/catch.',
      },
      {
        question: '¿Cuándo reintentarías una petición fallida?',
        options: [
          'Siempre, sin límite',
          'Solo en errores de red (timeout, sin conexión) — no en errores HTTP 4xx que son permanentes',
          'Solo en errores 500',
          'Nunca — siempre hay que mostrar el error al usuario',
        ],
        correctAnswer: 'Solo en errores de red (timeout, sin conexión) — no en errores HTTP 4xx que son permanentes',
        correctFeedback:
          '¡Exacto! Un error de red puede ser temporal (conexión inestable). Un 404 no va a cambiar si reintentás. Un 401 tampoco. Solo los errores transitorios tienen sentido reintentar.',
        incorrectFeedback:
          'Los errores de red (timeout, sin conexión) pueden ser temporales — reintentar tiene sentido. Los errores 4xx son permanentes para esa petición — un 404 seguirá siendo 404. Reintentarlos solo desperdicia recursos.',
      },
    ],
  },
  {
    slug: 'mini-proyecto-buscador-tipado-api',
    title: 'Mini proyecto: buscador tipado con API',
    module: 'TypeScript con APIs',
    moduleNumber: 22,
    order: 178,
    description:
      'Crea un buscador que consuma una API, tipe datos, maneje loading, success y error states, y renderice resultados de forma segura.',
    explanation: `## Mini proyecto: buscador tipado con API

En esta lección construirás un buscador completo que integra todo lo aprendido en el módulo:

- Tipos para la respuesta de la API
- Fetch con manejo de errores
- Estados de carga, éxito y error con unión discriminada
- Renderizado seguro de resultados (sin innerHTML con datos externos)
- Debounce para no llamar la API en cada tecla

### Lo que construirás

Un campo de búsqueda que:
1. Espera que el usuario deje de escribir (debounce)
2. Muestra un spinner mientras carga
3. Renderiza los resultados de forma segura
4. Muestra un mensaje si no hay resultados
5. Muestra un error si la API falla

### Estructura del proyecto

\`\`\`
buscador.ts
  ├── Tipos (interfaces y uniones)
  ├── Type guards
  ├── Fetch y estados
  └── Renderizado y eventos del DOM
\`\`\``,
    codeExample: `// buscador.ts — Buscador tipado completo

// ===== TIPOS =====
interface ResultadoBusqueda {
  id: number
  titulo: string
  descripcion: string
  precio: number
  categoria: string
}

type EstadoBuscador =
  | { tipo: 'inicial' }
  | { tipo: 'cargando'; termino: string }
  | { tipo: 'exito'; termino: string; resultados: ResultadoBusqueda[]; total: number }
  | { tipo: 'sin-resultados'; termino: string }
  | { tipo: 'error'; termino: string; mensaje: string }

// ===== TYPE GUARD =====
function esResultado(x: unknown): x is ResultadoBusqueda {
  return (
    typeof x === 'object' && x !== null &&
    typeof (x as { id?: unknown }).id === 'number' &&
    typeof (x as { titulo?: unknown }).titulo === 'string' &&
    typeof (x as { precio?: unknown }).precio === 'number'
  )
}

// ===== FETCH =====
async function buscarProductos(termino: string): Promise<ResultadoBusqueda[]> {
  const resp = await fetch(\`/api/buscar?q=\${encodeURIComponent(termino)}\`)
  if (!resp.ok) throw new Error(\`Error HTTP \${resp.status}\`)

  const data: unknown = await resp.json()
  if (!Array.isArray(data)) throw new Error('Respuesta inesperada')

  return data.filter(esResultado)
}

// ===== RENDERIZADO =====
function renderizarResultados(estado: EstadoBuscador, contenedor: HTMLElement): void {
  contenedor.textContent = ''  // Limpiar

  switch (estado.tipo) {
    case 'inicial':
      break

    case 'cargando': {
      const p = document.createElement('p')
      p.className = 'buscador-cargando'
      p.textContent = \`Buscando "\${estado.termino}"...\`
      contenedor.appendChild(p)
      break
    }

    case 'exito': {
      const header = document.createElement('p')
      header.className = 'buscador-total'
      header.textContent = \`\${estado.total} resultados para "\${estado.termino}"\`
      contenedor.appendChild(header)

      const lista = document.createElement('ul')
      lista.className = 'buscador-lista'

      estado.resultados.forEach((item) => {
        const li = document.createElement('li')
        li.className = 'buscador-item'

        const titulo = document.createElement('h3')
        titulo.textContent = item.titulo  // textContent — seguro ✅

        const precio = document.createElement('span')
        precio.textContent = \`$\${item.precio.toFixed(2)}\`

        const desc = document.createElement('p')
        desc.textContent = item.descripcion

        li.append(titulo, precio, desc)
        lista.appendChild(li)
      })

      contenedor.appendChild(lista)
      break
    }

    case 'sin-resultados': {
      const p = document.createElement('p')
      p.className = 'buscador-vacio'
      p.textContent = \`Sin resultados para "\${estado.termino}"\`
      contenedor.appendChild(p)
      break
    }

    case 'error': {
      const p = document.createElement('p')
      p.className = 'buscador-error'
      p.textContent = \`No se pudo buscar: \${estado.mensaje}\`
      contenedor.appendChild(p)
      break
    }
  }
}

// ===== DEBOUNCE =====
function debounce<F extends (...args: Parameters<F>) => void>(fn: F, ms: number): F {
  let timer: ReturnType<typeof setTimeout>
  return ((...args: Parameters<F>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }) as F
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector<HTMLInputElement>('#buscador-input')
  const resultados = document.getElementById('buscador-resultados')

  if (!input || !resultados) return

  let estado: EstadoBuscador = { tipo: 'inicial' }

  const buscar = debounce(async (termino: string) => {
    if (!termino.trim()) {
      estado = { tipo: 'inicial' }
      renderizarResultados(estado, resultados)
      return
    }

    estado = { tipo: 'cargando', termino }
    renderizarResultados(estado, resultados)

    try {
      const items = await buscarProductos(termino)

      if (items.length === 0) {
        estado = { tipo: 'sin-resultados', termino }
      } else {
        estado = { tipo: 'exito', termino, resultados: items, total: items.length }
      }
    } catch (err) {
      estado = {
        tipo: 'error',
        termino,
        mensaje: err instanceof Error ? err.message : 'Error desconocido',
      }
    }

    renderizarResultados(estado, resultados)
  }, 400)

  input.addEventListener('input', (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      buscar(e.target.value)
    }
  })
})`,
    keyPoints: [
      'Un buscador real combina tipos, type guards, estados, fetch y renderizado seguro',
      'Debounce evita peticiones por cada tecla — espera que el usuario deje de escribir',
      'El estado "sin-resultados" es diferente de "error" — ambos necesitan mensajes distintos',
      'textContent al renderizar resultados protege contra XSS con datos externos',
      'encodeURIComponent en la URL previene errores con caracteres especiales en la búsqueda',
    ],
    exercise: {
      description:
        'Extiende el buscador con: (1) un botón "Limpiar" que ponga el input en vacío y regrese al estado inicial, (2) guarda el último término buscado en una variable y muéstralo en un elemento `<p id="ultimo-termino">` cuando el estado sea "exito" o "sin-resultados", (3) agrega un estado "sin-termino" que aparezca cuando el input tiene menos de 2 caracteres, con el mensaje "Escribe al menos 2 caracteres para buscar".',
      hint: 'Para el botón limpiar: `inputEl.value = ""` y `buscar("")`. Para el último término: guárdalo en una variable `let ultimoTermino = ""` y actualízalo al cambiar a "exito" o "sin-resultados". Para el estado "sin-termino": verifica `termino.trim().length < 2` al inicio del debounce.',
    },
    quiz: [
      {
        question: '¿Para qué sirve el debounce en un buscador?',
        options: [
          'Para hacer la búsqueda más lenta',
          'Para evitar llamar la API en cada tecla — espera que el usuario termine de escribir',
          'Para cachear los resultados',
          'Para validar el input',
        ],
        correctAnswer: 'Para evitar llamar la API en cada tecla — espera que el usuario termine de escribir',
        correctFeedback:
          '¡Correcto! Sin debounce, cada tecla haría una petición a la API. El debounce espera X milisegundos sin actividad antes de ejecutar la búsqueda.',
        incorrectFeedback:
          'El debounce es una técnica de rendimiento: cancela y reinicia el timer con cada pulsación. Solo cuando el usuario deja de escribir (X ms sin actividad) se ejecuta la búsqueda.',
      },
      {
        question: '¿Por qué usar `textContent` y no `innerHTML` al renderizar los títulos de los resultados de búsqueda?',
        options: [
          'textContent es más rápido',
          'Porque los títulos vienen de la API — datos externos que pueden contener HTML malicioso',
          'innerHTML no funciona en TypeScript',
          'No hay diferencia en este caso',
        ],
        correctAnswer: 'Porque los títulos vienen de la API — datos externos que pueden contener HTML malicioso',
        correctFeedback:
          '¡Exacto! Los datos de una API son datos externos. Si un título contiene "<script>...</script>", textContent lo mostrará como texto literal. innerHTML lo ejecutaría.',
        incorrectFeedback:
          'Los datos de la API son externos y no confiables. innerHTML interpreta el string como HTML — si el titulo contiene etiquetas, se renderizarán. textContent siempre lo trata como texto plano.',
      },
      {
        question: '¿Para qué sirve `encodeURIComponent` en la URL de búsqueda?',
        options: [
          'Para encriptar el término de búsqueda',
          'Para codificar caracteres especiales en la URL (&, #, ?, espacios, etc.) que romperían la URL',
          'Para convertir el término a minúsculas',
          'Para validar el término de búsqueda',
        ],
        correctAnswer: 'Para codificar caracteres especiales en la URL (&, #, ?, espacios, etc.) que romperían la URL',
        correctFeedback:
          '¡Perfecto! Si el usuario busca "café & té", la URL sería `/buscar?q=café & té` — el & y el espacio rompen la URL. encodeURIComponent lo convierte a `/buscar?q=caf%C3%A9%20%26%20t%C3%A9`.',
        incorrectFeedback:
          'encodeURIComponent convierte caracteres especiales en su representación URL-safe. Un espacio se convierte en %20, & en %26, etc. Sin esto, la URL malformada puede causar errores en el servidor.',
      },
      {
        question: '¿Por qué el buscador tiene un estado "sin-resultados" separado del estado "exito"?',
        options: [
          'Por requerimiento de TypeScript',
          'Para mostrar un mensaje específico cuando hay 0 resultados, diferente al mensaje de resultados normales',
          'Porque TypeScript no permite arrays vacíos en "exito"',
          'No hay razón — podrías verificar resultados.length === 0 en "exito"',
        ],
        correctAnswer: 'Para mostrar un mensaje específico cuando hay 0 resultados, diferente al mensaje de resultados normales',
        correctFeedback:
          '¡Correcto! "Sin resultados" es semánticamente diferente de "tiene resultados". El UI puede mostrar un mensaje de ayuda ("¿Quisiste decir...?", "Sin resultados para X") de forma más clara.',
        incorrectFeedback:
          'Aunque podrías verificar resultados.length en "exito", el estado "sin-resultados" hace explícito que la búsqueda funcionó pero no encontró nada. El UI puede responder de forma más específica.',
      },
      {
        question: '¿Cómo funciona el type guard `esResultado` al filtrar la respuesta con `data.filter(esResultado)`?',
        options: [
          'filter no acepta type guards',
          'Cada elemento del array se verifica con esResultado y solo los que pasan son incluidos; TypeScript estrecha el tipo del resultado',
          'Convierte todos los elementos a ResultadoBusqueda',
          'Solo filtra el primer elemento',
        ],
        correctAnswer: 'Cada elemento del array se verifica con esResultado y solo los que pasan son incluidos; TypeScript estrecha el tipo del resultado',
        correctFeedback:
          '¡Perfecto! `data.filter(esResultado)` filtra los elementos que cumple la interfaz. TypeScript infiere que el resultado es ResultadoBusqueda[] porque esResultado es un type guard.',
        incorrectFeedback:
          'filter con un type guard funciona como filtro y como narrowing. Cada elemento se verifica con esResultado en tiempo de ejecución. Los que pasan son incluidos y TypeScript sabe que el resultado tiene tipo ResultadoBusqueda[].',
      },
    ],
  },
]

export const tsModule22: Module = {
  number: 22,
  title: 'TypeScript con APIs',
  level: 'nivel5',
  lessons: lessonsTsModule22,
}
