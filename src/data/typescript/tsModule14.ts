import type { Lesson, Module } from '@/types'

export const lessonsTsModule14: Lesson[] = [
  // ── Lección 104 ──────────────────────────────────────────────────────────
  {
    slug: 'que-es-intersection-type',
    title: '¿Qué es un intersection type?',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 104,
    description:
      'Aprende qué significa combinar tipos usando & y cómo TypeScript exige que se cumplan varias estructuras al mismo tiempo.',
    explanation: `Un **intersection type** combina múltiples tipos en uno solo usando el operador \`&\`. El resultado es un tipo que debe cumplir con **todos** los tipos combinados al mismo tiempo.

**Sintaxis**

\`\`\`ts
TipoA & TipoB & TipoC
\`\`\`

El valor debe tener todas las propiedades de TipoA, todas las de TipoB, y todas las de TipoC.

**Ejemplo básico**

\`\`\`ts
interface TieneNombre {
  nombre: string
}

interface TieneEdad {
  edad: number
}

type Persona = TieneNombre & TieneEdad

const persona: Persona = {
  nombre: 'Ana',  // requerido por TieneNombre
  edad: 30,       // requerido por TieneEdad
}
\`\`\`

**Comparación con union types**

La diferencia fundamental:
- **Union type (\`|\`)**: el valor puede ser **uno u otro** tipo.
- **Intersection type (\`&\`)**: el valor debe ser **los dos tipos a la vez**.

\`\`\`ts
type UnionEjemplo = string | number   // puede ser string O number
type IntersEjemplo = string & number  // debería ser string Y number (imposible en práctica)
\`\`\`

Nota: la intersección de primitivos incompatibles como \`string & number\` resulta en el tipo \`never\` (es imposible ser ambos a la vez). Las intersecciones son útiles principalmente con tipos de objeto.

**Una analogía útil**

Imagina que contratas a alguien. Si buscas alguien que sea "programador O diseñador" (union), cualquiera de los dos sirve. Si buscas alguien que sea "programador Y diseñador" (intersection), la persona debe tener ambas habilidades al mismo tiempo.

**Por qué son útiles**

Las intersecciones son útiles para:
1. Combinar tipos de objeto para crear tipos más completos.
2. Agregar propiedades a un tipo existente sin modificarlo.
3. Mezclar roles o capacidades en un solo tipo.

\`\`\`ts
interface Auditable {
  creadoEn: Date
  actualizadoEn: Date
  creadoPor: string
}

interface Producto {
  id: number
  nombre: string
  precio: number
}

type ProductoAuditable = Producto & Auditable
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// ── Intersection type básico ──────────────────────────────────────────────

interface Identificable {
  id: number
}

interface TieneNombre {
  nombre: string
}

interface TieneEmail {
  email: string
}

// La intersección requiere TODAS las propiedades
type ContactoCompleto = Identificable & TieneNombre & TieneEmail

const contacto: ContactoCompleto = {
  id: 1,             // de Identificable
  nombre: 'Ana',     // de TieneNombre
  email: 'ana@mail.com',  // de TieneEmail
}

// Faltaría alguna propiedad → TypeScript da error:
// const incompleto: ContactoCompleto = { id: 1, nombre: 'Ana' }
// Error: falta 'email'

// ── Intersection para roles ───────────────────────────────────────────────

interface RolAdmin {
  puedeEliminar: boolean
  puedeGestionar: boolean
}

interface RolEditor {
  puedeEditar: boolean
  puedePublicar: boolean
}

interface UsuarioBase {
  nombre: string
  email: string
}

// Un super-administrador tiene capacidades de admin Y editor
type SuperAdmin = UsuarioBase & RolAdmin & RolEditor

const superAdmin: SuperAdmin = {
  nombre: 'Carlos',
  email: 'carlos@empresa.com',
  puedeEliminar: true,
  puedeGestionar: true,
  puedeEditar: true,
  puedePublicar: true,
}

// ── Función que requiere intersection ────────────────────────────────────

function realizarAccionAdmin(usuario: UsuarioBase & RolAdmin): string {
  if (usuario.puedeEliminar) {
    return \`\${usuario.nombre} eliminó el recurso\`
  }
  return \`\${usuario.nombre} no tiene permiso para eliminar\`
}

console.log(realizarAccionAdmin(superAdmin))  // ✓ superAdmin cumple ambos tipos`,
    keyPoints: [
      'Un intersection type (&) combina múltiples tipos: el valor debe cumplir con todos ellos.',
      'A diferencia de union (|), que permite uno u otro, intersection exige ambos al mismo tiempo.',
      'Son útiles para combinar tipos de objeto y crear tipos más completos o especializados.',
      'La intersección de tipos incompatibles (como string & number) resulta en never.',
      'Se puede usar con interfaces, type aliases y tipos literales.',
    ],
    exercise: {
      description:
        'Crea tres interfaces: \`Nombrable\` con \`nombre: string\`, \`Evaluable\` con \`puntuacion: number\` y \`activo: boolean\`, y \`Temporal\` con \`creadoEn: string\`. Crea un tipo \`Elemento = Nombrable & Evaluable & Temporal\`. Escribe una función \`mostrarElemento\` que reciba un Elemento y muestre su información. Crea dos instancias válidas.',
      hint: 'El tipo Elemento debe tener todas las propiedades de las tres interfaces. Al crear instancias, TypeScript verificará que todas las propiedades estén presentes.',
    },
    quiz: [
      {
        question: '¿Qué significa el operador & en TypeScript?',
        options: [
          'Es el operador OR — el valor puede ser uno u otro',
          'Es el operador AND — el valor debe ser todos los tipos al mismo tiempo',
          'Es el operador de suma de tipos',
          'Es el operador de herencia entre interfaces',
        ],
        correctAnswer:
          'Es el operador AND — el valor debe ser todos los tipos al mismo tiempo',
        correctFeedback:
          'Correcto. \`A & B\` crea una intersección: el valor debe satisfacer tanto A como B simultáneamente, teniendo todas las propiedades de ambos.',
        incorrectFeedback:
          'No es correcto. El operador \`&\` crea una intersección, no una unión. El valor debe satisfacer TODOS los tipos involucrados al mismo tiempo.',
      },
      {
        question:
          'Si \`type AB = A & B\` donde A tiene \`{ x: number }\` y B tiene \`{ y: string }\`, ¿qué propiedades debe tener un valor de tipo AB?',
        options: [
          'Solo x',
          'Solo y',
          'x o y (uno de los dos)',
          'Tanto x como y',
        ],
        correctAnswer: 'Tanto x como y',
        correctFeedback:
          'Correcto. La intersección requiere TODAS las propiedades de todos los tipos. AB debe tener \`x: number\` Y \`y: string\`.',
        incorrectFeedback:
          'No es correcto. La intersección A & B requiere todas las propiedades de A Y todas las propiedades de B. El valor debe tener tanto x como y.',
      },
      {
        question:
          '¿Qué tipo resulta de \`string & number\`?',
        options: [
          'string | number',
          'string',
          'number',
          'never',
        ],
        correctAnswer: 'never',
        correctFeedback:
          'Correcto. Es imposible que un valor sea string y number al mismo tiempo, así que la intersección resulta en \`never\`. Las intersecciones son útiles principalmente con tipos de objeto.',
        incorrectFeedback:
          'No es correcto. \`string & number\` resulta en \`never\` porque es imposible que un valor sea string y number al mismo tiempo. Las intersecciones tienen sentido principalmente con tipos de objeto.',
      },
      {
        question:
          '¿Cuál es la diferencia principal entre \`A | B\` y \`A & B\`?',
        options: [
          '\`A | B\` requiere ambos tipos; \`A & B\` requiere uno',
          '\`A | B\` acepta un valor que sea A o B; \`A & B\` requiere un valor que sea A y B al mismo tiempo',
          '\`A & B\` es más rápido que \`A | B\`',
          'No hay diferencia práctica',
        ],
        correctAnswer:
          '\`A | B\` acepta un valor que sea A o B; \`A & B\` requiere un valor que sea A y B al mismo tiempo',
        correctFeedback:
          'Correcto. Union (|) es flexible: el valor puede ser cualquiera de los tipos. Intersection (&) es estricto: el valor debe cumplir todos los tipos simultáneamente.',
        incorrectFeedback:
          'No es correcto. \`A | B\` acepta un valor que sea A OR B (uno de los dos). \`A & B\` requiere un valor que sea A AND B (ambos al mismo tiempo, con todas sus propiedades).',
      },
      {
        question:
          '¿Para qué escenario es más útil el intersection type?',
        options: [
          'Para cuando un valor puede ser de varios tipos diferentes',
          'Para combinar capacidades o roles en un solo objeto que debe tener todas las propiedades de múltiples interfaces',
          'Para verificar si una variable es de un tipo específico',
          'Para crear enums con múltiples valores',
        ],
        correctAnswer:
          'Para combinar capacidades o roles en un solo objeto que debe tener todas las propiedades de múltiples interfaces',
        correctFeedback:
          'Correcto. Los intersection types son ideales para combinar roles, capacidades o características en un solo tipo. Por ejemplo, un SuperAdmin que debe ser tanto Admin como Editor.',
        incorrectFeedback:
          'No es correcto. Los union types sirven para valores que pueden ser de diferentes tipos. Los intersection types sirven para combinar tipos de objeto — el valor debe tener todas las propiedades de todos los tipos involucrados.',
      },
    ],
  },

  // ── Lección 105 ──────────────────────────────────────────────────────────
  {
    slug: 'combinar-objetos-intersection',
    title: 'Combinar objetos con &',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 105,
    description:
      'Aprende a combinar tipos de objetos para crear estructuras más completas.',
    explanation: `Combinar tipos de objeto es el uso más común de las intersecciones. Permite construir tipos complejos a partir de partes más pequeñas y específicas.

**Patrón: Tipo base + extensión**

\`\`\`ts
interface EntidadBase {
  id: number
  creadoEn: string
  actualizadoEn: string
}

interface DatosProducto {
  nombre: string
  precio: number
  stock: number
}

type Producto = EntidadBase & DatosProducto
\`\`\`

**Intersection vs extends**

Puedes lograr algo similar con \`extends\` en interfaces:

\`\`\`ts
// Con extends:
interface Producto extends EntidadBase {
  nombre: string
  precio: number
}

// Con intersection (equivalente funcional):
type Producto = EntidadBase & { nombre: string; precio: number }
\`\`\`

La diferencia principal: \`extends\` solo funciona con interfaces, \`&\` funciona con cualquier tipo.

**Combinar múltiples tipos**

\`\`\`ts
interface TieneTimestamps {
  creadoEn: Date
  actualizadoEn: Date
}

interface TieneAuditoria {
  creadoPor: string
  ultimaModificacionPor: string
}

interface DatosUsuario {
  nombre: string
  email: string
}

type UsuarioCompleto = DatosUsuario & TieneTimestamps & TieneAuditoria
\`\`\`

**Intersection en parámetros de función**

Puedes usar intersecciones directamente en parámetros:

\`\`\`ts
function guardarEntidad(
  entidad: { id: number } & { nombre: string }
): void {
  console.log(\`Guardando \${entidad.nombre} (\${entidad.id})\`)
}
\`\`\`

**Caso práctico: mezclar un tipo con propiedades adicionales**

\`\`\`ts
type UsuarioConToken = DatosUsuario & { token: string; expiraEn: Date }

function procesarLogin(usuario: UsuarioConToken): void {
  console.log(\`\${usuario.nombre} autenticado hasta \${usuario.expiraEn}\`)
}
\`\`\`

**Crear factories con intersection**

\`\`\`ts
function crearEntidad<T>(datos: T): T & { id: number; creadoEn: Date } {
  return {
    ...datos,
    id: Math.random(),
    creadoEn: new Date(),
  }
}
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// ── Tipos pequeños y reutilizables ────────────────────────────────────────

interface ConId {
  id: number
}

interface ConTimestamps {
  creadoEn: string
  actualizadoEn: string
}

interface ConSoftDelete {
  eliminado: boolean
  eliminadoEn: string | null
}

// ── Combinar según necesidades ────────────────────────────────────────────

interface DatosUsuario {
  nombre: string
  email: string
  rol: 'admin' | 'editor' | 'lector'
}

interface DatosProducto {
  nombre: string
  precio: number
  categoria: string
  stock: number
}

// Tipos completos usando intersección
type Usuario = ConId & DatosUsuario & ConTimestamps & ConSoftDelete
type Producto = ConId & DatosProducto & ConTimestamps

// ── Crear instancias ──────────────────────────────────────────────────────

const usuario: Usuario = {
  id: 1,
  nombre: 'Ana García',
  email: 'ana@empresa.com',
  rol: 'admin',
  creadoEn: '2024-01-15',
  actualizadoEn: '2024-06-20',
  eliminado: false,
  eliminadoEn: null,
}

const producto: Producto = {
  id: 42,
  nombre: 'Laptop Profesional',
  precio: 1299.99,
  categoria: 'Electrónica',
  stock: 15,
  creadoEn: '2024-03-10',
  actualizadoEn: '2024-06-18',
}

// ── Funciones que usan los tipos combinados ──────────────────────────────

function mostrarInfo(entidad: ConId & { nombre: string }): string {
  return \`[\${entidad.id}] \${entidad.nombre}\`
}

console.log(mostrarInfo(usuario))   // → [1] Ana García
console.log(mostrarInfo(producto))  // → [42] Laptop Profesional

function estaEliminado(entidad: ConSoftDelete): boolean {
  return entidad.eliminado
}

console.log(estaEliminado(usuario))  // → false`,
    keyPoints: [
      'Los intersection types permiten construir tipos complejos combinando interfaces más pequeñas.',
      'El patrón "tipo base + extensión" es muy común para tipos de base de datos con campos de auditoría.',
      'A diferencia de extends, el operador & funciona con cualquier tipo, no solo interfaces.',
      'Las intersecciones inline en parámetros son útiles para funciones que necesitan un subconjunto de propiedades.',
      'Los tipos pequeños y reutilizables (ConId, ConTimestamps) son más fáciles de mantener que tipos grandes monolíticos.',
    ],
    exercise: {
      description:
        'Crea un sistema de entidades para una app. Define: \`ConId\` (id: number), \`ConTimestamps\` (creadoEn: string, actualizadoEn: string), \`DatosProducto\` (nombre: string, precio: number). Crea el tipo \`ProductoDB = ConId & ConTimestamps & DatosProducto\`. Escribe una función \`crearProducto\` que reciba solo \`DatosProducto\` y devuelva \`ProductoDB\` agregando id aleatorio y timestamps actuales.',
      hint: 'La función crearProducto recibe DatosProducto pero devuelve ProductoCompleto. Usa el spread operator \`{ ...datos, id: ..., creadoEn: ..., actualizadoEn: ... }\` para construir el objeto completo.',
    },
    quiz: [
      {
        question:
          '¿Qué propiedades debe tener un objeto de tipo \`A & B\` si A = \`{ x: number }\` y B = \`{ y: string, z: boolean }\`?',
        options: [
          'Solo x',
          'x, y y z (todas las propiedades de ambos)',
          'y y z (solo las de B)',
          'x o y y z (uno de los grupos)',
        ],
        correctAnswer: 'x, y y z (todas las propiedades de ambos)',
        correctFeedback:
          'Correcto. La intersección A & B requiere todas las propiedades de A (x) y todas las de B (y, z). El objeto debe tener los tres campos.',
        incorrectFeedback:
          'No es correcto. La intersección A & B requiere TODAS las propiedades de ambos tipos: x de A, y y z de B. Sin alguna de ellas, TypeScript da error.',
      },
      {
        question:
          '¿Cuál es la diferencia práctica entre usar \`extends\` en una interfaz y usar \`&\` para combinar tipos?',
        options: [
          'No hay diferencia práctica',
          'extends solo funciona con interfaces, & funciona con cualquier tipo incluyendo type aliases',
          '& es más lento en compilación',
          'extends es para clases y & es para interfaces',
        ],
        correctAnswer:
          'extends solo funciona con interfaces, & funciona con cualquier tipo incluyendo type aliases',
        correctFeedback:
          'Correcto. \`extends\` solo funciona en el contexto de interfaces o clases. El operador \`&\` es más flexible y funciona con interfaces, type aliases, tipos literales, y otros tipos.',
        incorrectFeedback:
          'No es correcto. La diferencia práctica es que \`extends\` solo funciona con interfaces, mientras que \`&\` puede usarse con cualquier tipo. También \`&\` permite crear tipos anónimos inline.',
      },
      {
        question:
          '¿Qué ventaja tiene crear tipos pequeños reutilizables como \`ConId\`, \`ConTimestamps\` y combinarlos con &?',
        options: [
          'Genera código JavaScript más eficiente',
          'Permite reutilizar los tipos pequeños en múltiples combinaciones y mantener un solo punto de modificación',
          'Es más rápido que escribir todas las propiedades juntas',
          'Solo funciona con interfaces, no con type aliases',
        ],
        correctAnswer:
          'Permite reutilizar los tipos pequeños en múltiples combinaciones y mantener un solo punto de modificación',
        correctFeedback:
          'Correcto. Si necesitas agregar un campo a \`ConTimestamps\`, lo cambias en un lugar y todos los tipos que lo usan se actualizan automáticamente. Es el principio DRY aplicado a los tipos.',
        incorrectFeedback:
          'No es correcto. La ventaja es la reutilización y mantenibilidad. Si tienes \`ConTimestamps\` reutilizable, solo lo defines una vez y lo combinas donde lo necesitas. Si cambia, se actualiza automáticamente en todos los tipos que lo usan.',
      },
      {
        question:
          'Puedes usar intersecciones directamente en el parámetro de una función, como \`function f(x: A & B)\`. ¿Cuándo es útil hacerlo?',
        options: [
          'Nunca, siempre mejor crear un tipo aparte',
          'Cuando la combinación específica solo se necesita en esa función y no en otras partes del código',
          'Solo cuando los tipos son interfaces',
          'Cuando hay más de 5 propiedades',
        ],
        correctAnswer:
          'Cuando la combinación específica solo se necesita en esa función y no en otras partes del código',
        correctFeedback:
          'Correcto. Para combinaciones de un solo uso, escribirla inline es más conciso. Para combinaciones que se reusan, crear un type alias con nombre es mejor.',
        incorrectFeedback:
          'No es correcto. Las intersecciones inline en parámetros son útiles cuando esa combinación es específica de esa función y no se usa en otros lugares. Si la usas en múltiples lugares, es mejor crear un type alias con nombre.',
      },
      {
        question:
          '¿Qué ocurre con las propiedades que tienen el mismo nombre en ambos tipos de una intersección?',
        options: [
          'TypeScript usa la propiedad del primer tipo',
          'TypeScript usa la propiedad del segundo tipo',
          'TypeScript intersecta los tipos de esa propiedad — se debe cumplir con ambos tipos',
          'TypeScript da un error de compilación',
        ],
        correctAnswer:
          'TypeScript intersecta los tipos de esa propiedad — se debe cumplir con ambos tipos',
        correctFeedback:
          'Correcto. Si A tiene \`x: string\` y B tiene \`x: string | number\`, entonces \`A & B\` tiene \`x: string\` (la intersección de string y string|number es string). Verás más sobre esto en la lección de propiedades compartidas.',
        incorrectFeedback:
          'No es correcto. TypeScript intersecta los tipos de las propiedades duplicadas. \`A & B\` donde A tiene \`x: string\` y B tiene \`x: string | number\` resulta en \`x: string\` (el tipo más restrictivo que cumple ambas condiciones).',
      },
    ],
  },

  // ── Lección 106 ──────────────────────────────────────────────────────────
  {
    slug: 'reutilizar-partes-tipos',
    title: 'Reutilizar partes de tipos',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 106,
    description:
      'Aprende a crear tipos pequeños y combinarlos para evitar repetir código.',
    explanation: `Una de las ventajas más poderosas de los intersection types es la **composición de tipos**: crear piezas pequeñas y reutilizables que se combinan según necesidad.

**El problema sin composición**

\`\`\`ts
// Sin composición: repites las mismas propiedades en cada tipo
interface Usuario {
  id: number
  nombre: string
  email: string
  creadoEn: Date
  actualizadoEn: Date
}

interface Producto {
  id: number
  nombre: string
  precio: number
  creadoEn: Date
  actualizadoEn: Date
}
\`\`\`

Si el formato de los timestamps cambia, debes actualizar cada tipo por separado.

**Con composición**

\`\`\`ts
// Piezas reutilizables
interface Persistido {
  id: number
}

interface Auditable {
  creadoEn: Date
  actualizadoEn: Date
}

// Combinaciones específicas
interface DatosUsuario {
  nombre: string
  email: string
}

interface DatosProducto {
  nombre: string
  precio: number
}

type UsuarioDB = Persistido & Auditable & DatosUsuario
type ProductoDB = Persistido & Auditable & DatosProducto
\`\`\`

Ahora si cambias \`Auditable\`, ambos tipos se actualizan.

**Patrones comunes de tipos reutilizables**

\`\`\`ts
// Metadatos comunes a entidades de base de datos
interface Meta {
  id: string
  version: number
  creadoEn: Date
  actualizadoEn: Date
  creadoPor: string
}

// Propiedades de paginación
interface Paginable {
  pagina: number
  porPagina: number
  total: number
}

// Propiedades de estado
interface ConEstado<T extends string> {
  estado: T
  historialEstados: Array<{ estado: T; fecha: Date }>
}
\`\`\`

**Intersección con tipos genéricos**

\`\`\`ts
type Respuesta<T> = {
  datos: T
  meta: { tiempo: number; fuente: string }
}

type RespuestaConPaginacion<T> = Respuesta<T> & Paginable

// RespuestaConPaginacion<Producto> tiene:
// - datos: Producto
// - meta: { tiempo, fuente }
// - pagina: number
// - porPagina: number
// - total: number
\`\`\`

**Tipos parciales reutilizables**

\`\`\`ts
// Para crear nuevos registros (sin id ni timestamps)
type NuevoUsuario = Omit<UsuarioDB, 'id' | 'creadoEn' | 'actualizadoEn'>

// Para actualizar (solo los campos editables, todos opcionales)
type ActualizarUsuario = Partial<Pick<UsuarioDB, 'nombre' | 'email'>>
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// ── Bloques de construcción de tipos ─────────────────────────────────────

interface EntidadBase {
  id: number
  creadoEn: string
  actualizadoEn: string
}

interface ConNombre {
  nombre: string
}

interface ConPrecio {
  precio: number
  moneda: 'USD' | 'EUR' | 'MXN'
}

interface ConStock {
  stock: number
  disponible: boolean
}

interface ConDescripcion {
  descripcion: string
  imagenes: string[]
}

// ── Combinar según necesidades ────────────────────────────────────────────

// Producto en catálogo (sin stock)
type ProductoCatalogo = EntidadBase & ConNombre & ConPrecio & ConDescripcion

// Producto en inventario (con stock)
type ProductoInventario = EntidadBase & ConNombre & ConPrecio & ConStock

// Producto completo (todo)
type ProductoCompleto = EntidadBase & ConNombre & ConPrecio & ConStock & ConDescripcion

// ── Funciones para cada combinación ──────────────────────────────────────

function mostrarCatalogo(p: ConNombre & ConPrecio): string {
  return \`\${p.nombre} — \${p.precio} \${p.moneda}\`
}

function verificarDisponibilidad(p: ConStock): string {
  return p.disponible && p.stock > 0
    ? \`En stock: \${p.stock} unidades\`
    : 'Sin disponibilidad'
}

// ── Instancias de ejemplo ─────────────────────────────────────────────────

const productoCompleto: ProductoCompleto = {
  id: 1,
  creadoEn: '2024-01-10',
  actualizadoEn: '2024-06-15',
  nombre: 'Auriculares Pro',
  precio: 89.99,
  moneda: 'USD',
  stock: 34,
  disponible: true,
  descripcion: 'Auriculares inalámbricos de alta calidad',
  imagenes: ['img1.jpg', 'img2.jpg'],
}

console.log(mostrarCatalogo(productoCompleto))
// → Auriculares Pro — 89.99 USD

console.log(verificarDisponibilidad(productoCompleto))
// → En stock: 34 unidades`,
    keyPoints: [
      'La composición de tipos con & evita repetir las mismas propiedades en múltiples interfaces.',
      'Los tipos pequeños y enfocados son más fáciles de mantener y reutilizar.',
      'Cuando una propiedad compartida cambia, solo se actualiza en el tipo pequeño y todas las composiciones se actualizan.',
      'Las funciones pueden aceptar intersecciones inline para ser más precisas en qué propiedades necesitan.',
      'Este patrón escala bien: puedes crear tipos para creación, actualización, visualización, etc. desde los mismos bloques base.',
    ],
    exercise: {
      description:
        'Crea un sistema de tipos para una app de tareas reutilizando partes. Define: \`ConId\` (id: number), \`ConFecha\` (fecha: string), \`DatosTarea\` (titulo: string, descripcion: string, completada: boolean), \`ConPrioridad\` (prioridad: "alta" | "media" | "baja"). Crea: \`TareaSimple = ConId & DatosTarea\`, \`TareaCompleta = ConId & DatosTarea & ConFecha & ConPrioridad\`. Escribe funciones para cada tipo.',
      hint: 'TareaSimple y TareaCompleta comparten ConId y DatosTarea. Si cambias DatosTarea, ambas se actualizan. Escribe funciones que acepten solo la intersección de las propiedades que necesitan.',
    },
    quiz: [
      {
        question:
          '¿Cuál es el principio de diseño que aplican los intersection types al combinar tipos pequeños?',
        options: [
          'Herencia — un tipo hereda de otro',
          'Composición — construir tipos complejos desde piezas pequeñas y reutilizables',
          'Encapsulamiento — ocultar propiedades internas',
          'Polimorfismo — un tipo puede tomar múltiples formas',
        ],
        correctAnswer:
          'Composición — construir tipos complejos desde piezas pequeñas y reutilizables',
        correctFeedback:
          'Correcto. Los intersection types aplican el principio de composición: se prefiere componer objetos pequeños y enfocados en lugar de crear jerarquías de herencia complejas.',
        incorrectFeedback:
          'No es correcto. El principio es la composición: crear pequeñas piezas con responsabilidades claras y combinarlas. "Prefer composition over inheritance" es un principio clásico de diseño que los intersection types facilitan.',
      },
      {
        question:
          '¿Qué ventaja de mantenimiento tienen los tipos reutilizables combinados con &?',
        options: [
          'Generan menos código JavaScript',
          'Si cambias un tipo pequeño compartido, todas las composiciones que lo usan se actualizan automáticamente',
          'Son más rápidos en tiempo de compilación',
          'No necesitan ser importados',
        ],
        correctAnswer:
          'Si cambias un tipo pequeño compartido, todas las composiciones que lo usan se actualizan automáticamente',
        correctFeedback:
          'Correcto. Este es el principio DRY (Don\'t Repeat Yourself) aplicado a los tipos. Si \`ConTimestamps\` cambia, todos los tipos que lo incluyen reflejan el cambio sin tocarlos individualmente.',
        incorrectFeedback:
          'No es correcto. La ventaja de mantenimiento es que tienes un único punto de modificación. Si \`ConTimestamps\` cambia, todos los tipos compuestos que lo incluyen se actualizan automáticamente.',
      },
      {
        question:
          '¿Cuándo es preferible crear un type alias para una intersección en lugar de escribirla inline en parámetros?',
        options: [
          'Siempre — los type alias son siempre mejor que inline',
          'Cuando la misma combinación se usa en múltiples lugares del código',
          'Nunca — el inline siempre es más claro',
          'Solo cuando la intersección tiene más de 3 tipos',
        ],
        correctAnswer:
          'Cuando la misma combinación se usa en múltiples lugares del código',
        correctFeedback:
          'Correcto. Si la misma combinación aparece en múltiples funciones o variables, crear un type alias con nombre evita repetir la intersección y da un nombre descriptivo a ese concepto.',
        incorrectFeedback:
          'No es correcto. Si la misma combinación se usa en múltiples lugares, un type alias evita la repetición y da un nombre al concepto. Para usos únicos en una función específica, el inline puede ser suficiente.',
      },
      {
        question:
          '¿Qué hace \`Omit<UsuarioDB, "id" | "creadoEn">\` en relación a la intersección?',
        options: [
          'Crea una intersección de UsuarioDB con un tipo vacío',
          'Crea un tipo con todas las propiedades de UsuarioDB excepto id y creadoEn',
          'Elimina permanentemente esas propiedades de UsuarioDB',
          'Convierte UsuarioDB en un union type',
        ],
        correctAnswer:
          'Crea un tipo con todas las propiedades de UsuarioDB excepto id y creadoEn',
        correctFeedback:
          'Correcto. \`Omit<T, Keys>\` es un utility type que crea un tipo con todas las propiedades de T excepto las indicadas. Es útil para crear tipos como "NuevoUsuario" desde el tipo completo.',
        incorrectFeedback:
          'No es correcto. \`Omit<T, K>\` crea un tipo derivado con todas las propiedades de T excepto las en K. No modifica el tipo original. Es útil para crear variantes como "para crear" (sin id) desde el tipo completo.',
      },
      {
        question:
          '¿Puede una función aceptar un tipo de intersección como parámetro aunque el caller pase un tipo más amplio?',
        options: [
          'No, los tipos deben coincidir exactamente',
          'Sí, si el tipo que se pasa tiene al menos todas las propiedades requeridas por la intersección',
          'Solo si usa casting explícito',
          'Solo con clases, no con interfaces',
        ],
        correctAnswer:
          'Sí, si el tipo que se pasa tiene al menos todas las propiedades requeridas por la intersección',
        correctFeedback:
          'Correcto. TypeScript usa tipado estructural: si el objeto tiene todas las propiedades requeridas (y posiblemente más), es compatible. Un \`ProductoCompleto\` puede pasarse a una función que acepta \`ConNombre & ConPrecio\`.',
        incorrectFeedback:
          'No es correcto. TypeScript usa tipado estructural. Si un valor tiene todas las propiedades requeridas por la intersección (y posiblemente más), es compatible. Un tipo más amplio puede usarse donde se espera una intersección más específica.',
      },
    ],
  },

  // ── Lección 107 ──────────────────────────────────────────────────────────
  {
    slug: 'union-vs-intersection',
    title: 'Union vs intersection',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 107,
    description:
      'Aprende la diferencia entre permitir una opción u otra con union y exigir varias estructuras con intersection.',
    explanation: `La diferencia entre \`|\` y \`&\` es fundamental en TypeScript y representa dos filosofías diferentes sobre los tipos.

**Union (\`|\`): uno u otro**

Un union type dice "este valor puede ser de este tipo O de este otro". Es inclusivo en cuanto a los posibles tipos, pero exclusivo en cuanto a lo que puedes hacer con el valor (solo lo que es común a todos los tipos).

\`\`\`ts
type Entrada = string | number

// Con union, solo puedes usar lo que es común a ambos tipos
function procesar(e: Entrada): void {
  console.log(e)  // ✓ (ambos tienen toString)
  // e.toUpperCase()  // Error: number no tiene esto
}
\`\`\`

**Intersection (\`&\`): todos a la vez**

Un intersection type dice "este valor debe ser de este tipo Y de este otro". El valor tiene que cumplir con todos los tipos.

\`\`\`ts
type EntidadCompleta = { id: number } & { nombre: string }

// Con intersection, puedes usar todo lo de ambos tipos
function procesar(e: EntidadCompleta): void {
  console.log(e.id)      // ✓ (de { id: number })
  console.log(e.nombre)  // ✓ (de { nombre: string })
}
\`\`\`

**Analogía con conjuntos**

- **Union (|)**: es la unión de conjuntos. Los valores pueden venir de cualquier conjunto.
- **Intersection (&)**: es la intersección de conjuntos. Los valores deben pertenecer a todos los conjuntos.

Con tipos de objeto, la intersección es el "superconjunto" que tiene todo:

\`\`\`ts
// A tiene: { x, y }
// B tiene: { y, z }

type Union_AB = A | B        // valor puede ser { x, y } o { y, z }
type Interseccion_AB = A & B  // valor debe tener { x, y, z } (todo)
\`\`\`

**Cuándo usar cada uno**

Usa **union** cuando:
- Un valor puede ser de diferentes tipos en diferentes momentos.
- Tienes tipos alternativos (Exito | Error).
- Necesitas manejar múltiples casos con narrowing.

\`\`\`ts
type Resultado = { ok: true; datos: string } | { ok: false; error: string }
\`\`\`

Usa **intersection** cuando:
- Un valor debe tener múltiples conjuntos de propiedades simultáneamente.
- Combinas capacidades o roles.
- Añades propiedades a un tipo existente sin modificarlo.

\`\`\`ts
type AdminAutenticado = Usuario & { token: string; expira: Date }
\`\`\``,
    codeExample: `// ── archivo: tipos.ts ────────────────────────────────────────────────────

// ── Union: un tipo u otro ─────────────────────────────────────────────────

type UsuarioLocal = {
  tipo: 'local'
  email: string
  passwordHash: string
}

type UsuarioOAuth = {
  tipo: 'oauth'
  proveedor: 'google' | 'github'
  tokenExterno: string
}

// Un usuario puede ser local OR oauth
type Usuario = UsuarioLocal | UsuarioOAuth

function obtenerIdentificador(usuario: Usuario): string {
  if (usuario.tipo === 'local') {
    return usuario.email   // TypeScript sabe: UsuarioLocal
  }
  return \`\${usuario.proveedor}:\${usuario.tokenExterno}\`  // TypeScript sabe: UsuarioOAuth
}

// ── Intersection: ambos al mismo tiempo ───────────────────────────────────

interface DatosBasicos {
  nombre: string
  email: string
}

interface Autenticado {
  token: string
  roles: string[]
  expiraEn: Date
}

// Un usuario autenticado debe tener AMBAS estructuras
type UsuarioAutenticado = DatosBasicos & Autenticado

function obtenerPanel(usuario: UsuarioAutenticado): string {
  // Puede usar propiedades de AMBAS interfaces
  return \`Panel de \${usuario.nombre} (roles: \${usuario.roles.join(', ')})\`
}

// ── Comparación visual ────────────────────────────────────────────────────

// Union:
// UsuarioLocal | UsuarioOAuth
// Puedes ser uno u otro, pero no accedes a todo sin narrowing

// Intersection:
// DatosBasicos & Autenticado
// Debes ser ambos — tienes acceso a todo sin condiciones

const uAutenticado: UsuarioAutenticado = {
  nombre: 'Ana',
  email: 'ana@mail.com',
  token: 'jwt-abc-123',
  roles: ['admin', 'editor'],
  expiraEn: new Date('2024-12-31'),
}

console.log(obtenerPanel(uAutenticado))
// → Panel de Ana (roles: admin, editor)`,
    keyPoints: [
      'Union (|) = "O" — el valor puede ser un tipo OR otro. Solo puedes usar lo común a todos.',
      'Intersection (&) = "Y" — el valor debe ser todos los tipos. Puedes usar todo.',
      'Union necesita narrowing para acceder a propiedades específicas de cada tipo.',
      'Intersection permite acceso directo a todas las propiedades de todos los tipos.',
      'Usa union para alternativas (éxito/error, local/oauth); usa intersection para combinaciones (usuario + autenticado).',
    ],
    exercise: {
      description:
        'Crea tipos para una app de notificaciones. Para el tipo "Notificacion" usa union: puede ser \`NotifEmail\` (tiene \`email: string\`) o \`NotifSMS\` (tiene \`telefono: string\`), ambas tienen \`mensaje: string\`. Para "NotificacionEncolada" usa intersection: \`Notificacion\` combinada con \`{ id: string; fechaEnvio: Date; reintentos: number }\`. Escribe funciones para ambos casos.',
      hint: 'Para Notificacion como union, necesitas narrowing para enviar (verificar si tiene email o telefono). Para NotificacionEncolada como intersection con Notificacion union, el valor debe tener tanto las propiedades de la notificación como las del encolado.',
    },
    quiz: [
      {
        question:
          '¿Qué puedes hacer con las propiedades de un union type SIN hacer narrowing?',
        options: [
          'Acceder a todas las propiedades de todos los tipos del union',
          'Solo acceder a las propiedades que son comunes a todos los tipos del union',
          'No puedes acceder a ninguna propiedad',
          'Acceder a las propiedades del primer tipo del union',
        ],
        correctAnswer:
          'Solo acceder a las propiedades que son comunes a todos los tipos del union',
        correctFeedback:
          'Correcto. Sin narrowing, TypeScript solo permite acceder a lo que es común a todos los tipos del union. Para acceder a propiedades específicas de un tipo, debes hacer narrowing primero.',
        incorrectFeedback:
          'No es correcto. Sin narrowing, TypeScript es conservador: solo permite acceder a propiedades que existen en TODOS los tipos del union. Para propiedades específicas, necesitas narrowing.',
      },
      {
        question:
          '¿Qué puedes hacer con las propiedades de un intersection type?',
        options: [
          'Solo acceder a las propiedades del primer tipo',
          'Acceder a todas las propiedades de todos los tipos involucrados, sin necesidad de narrowing',
          'Solo acceder si haces narrowing primero',
          'Solo acceder a las propiedades opcionales',
        ],
        correctAnswer:
          'Acceder a todas las propiedades de todos los tipos involucrados, sin necesidad de narrowing',
        correctFeedback:
          'Correcto. Con intersección, el valor tiene garantizadas todas las propiedades de todos los tipos. No necesitas hacer narrowing — puedes acceder a todo directamente.',
        incorrectFeedback:
          'No es correcto. Con intersección, el valor debe satisfacer todos los tipos, así que tiene todas las propiedades disponibles. Puedes acceder directamente a cualquier propiedad sin narrowing.',
      },
      {
        question:
          '¿Para qué escenario es más apropiado un union type?',
        options: [
          'Cuando un valor debe ser dos cosas al mismo tiempo',
          'Cuando un valor puede ser de diferentes tipos en diferentes situaciones (ej: éxito o error)',
          'Cuando necesitas combinar roles de usuario',
          'Cuando necesitas agregar propiedades a un tipo existente',
        ],
        correctAnswer:
          'Cuando un valor puede ser de diferentes tipos en diferentes situaciones (ej: éxito o error)',
        correctFeedback:
          'Correcto. Los union types representan alternativas: el valor será uno u otro tipo dependiendo del caso. El patrón de respuesta de API \`{ ok: true, datos } | { ok: false, error }\` es un ejemplo clásico.',
        incorrectFeedback:
          'No es correcto. Los union types son para alternativas: el valor puede ser un tipo O el otro en diferentes situaciones. Los intersection types son para cuando el valor debe ser múltiples cosas simultáneamente.',
      },
      {
        question:
          'Si tienes \`type AB = A & B\` y \`type AB_union = A | B\`, ¿qué puedes decir sobre un valor de tipo AB comparado con uno de tipo AB_union?',
        options: [
          'AB tiene menos propiedades que AB_union',
          'AB tiene TODAS las propiedades de A y B; AB_union solo garantiza las propiedades comunes a ambos sin narrowing',
          'Son tipos equivalentes',
          'AB_union es más seguro que AB',
        ],
        correctAnswer:
          'AB tiene TODAS las propiedades de A y B; AB_union solo garantiza las propiedades comunes a ambos sin narrowing',
        correctFeedback:
          'Correcto. Un valor de tipo AB tiene todas las propiedades de A y B (más propiedades). Un valor de AB_union puede ser A o B — sin narrowing solo puedes usar propiedades comunes a ambos.',
        incorrectFeedback:
          'No es correcto. AB (intersección) tiene MÁS propiedades garantizadas — tienes todo de A y todo de B. AB_union (unión) tiene MENOS garantías — el valor puede ser solo A o solo B, y sin narrowing solo puedes usar lo común.',
      },
      {
        question:
          '¿Cuál es un ejemplo donde deberías usar intersection en lugar de union?',
        options: [
          'Una respuesta de API que puede ser exitosa o fallida',
          'Un usuario que puede iniciar sesión con email o con Google',
          'Un empleado que tiene propiedades de "persona" y también propiedades de "empleado de la empresa"',
          'Un campo de formulario que puede ser string o null',
        ],
        correctAnswer:
          'Un empleado que tiene propiedades de "persona" y también propiedades de "empleado de la empresa"',
        correctFeedback:
          'Correcto. Un empleado ES una persona Y ES un empleado al mismo tiempo — tiene ambos conjuntos de propiedades. Eso es intersection: \`Persona & DatosEmpleado\`.',
        incorrectFeedback:
          'No es correcto. Los ejemplos con "puede ser X o Y" son unions. El ejemplo de intersection es el empleado: debe ser persona Y empleado al mismo tiempo, teniendo ambos conjuntos de propiedades.',
      },
    ],
  },

  // ── Lección 108 ──────────────────────────────────────────────────────────
  {
    slug: 'intersection-propiedades-compartidas',
    title: 'Intersection con propiedades compartidas',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 108,
    description:
      'Aprende qué ocurre cuando combinas tipos que tienen propiedades con el mismo nombre.',
    explanation: `Cuando combinas tipos con \`&\` y ambos tienen una propiedad con el mismo nombre, TypeScript intersecta los tipos de esa propiedad. Los resultados pueden ser sorprendentes.

**Propiedades con el mismo tipo**

Si ambos tipos tienen la misma propiedad con el mismo tipo, la intersección simplemente mantiene ese tipo:

\`\`\`ts
interface A { nombre: string }
interface B { nombre: string }

type AB = A & B  // { nombre: string }
// El tipo de nombre sigue siendo string — no hay conflicto
\`\`\`

**Propiedades con tipos diferentes (compatibles)**

Si los tipos son compatibles (uno es subtipo del otro), la intersección usa el más restrictivo:

\`\`\`ts
interface A { nivel: string | number }
interface B { nivel: string }

type AB = A & B  // { nivel: string }
// string es la intersección de (string | number) y string
\`\`\`

**Propiedades con tipos incompatibles → never**

Si los tipos son incompatibles, la propiedad se convierte en \`never\`:

\`\`\`ts
interface A { id: string }
interface B { id: number }

type AB = A & B  // { id: never }
// No puede ser string Y number al mismo tiempo → never
\`\`\`

Un valor de tipo \`never\` es imposible de crear — esto significa que \`AB\` es efectivamente inutilizable:

\`\`\`ts
const ab: AB = {
  id: 'abc'  // Error: Type 'string' is not assignable to type 'never'
}
\`\`\`

**Propiedad requerida vs opcional**

\`\`\`ts
interface A { descripcion?: string }  // opcional
interface B { descripcion: string }   // requerida

type AB = A & B  // { descripcion: string } — requerida gana sobre opcional
\`\`\`

**Cómo evitar conflictos**

Si necesitas combinar tipos con propiedades conflictivas, tienes opciones:

\`\`\`ts
// Opción 1: Omitir la propiedad conflictiva antes de combinar
type AsinId = Omit<A, 'id'>
type AB = AsinId & B  // ahora usa el id de B

// Opción 2: Redefinir la propiedad en la intersección
type AB = Omit<A, 'id'> & Omit<B, 'id'> & { id: string | number }
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// ── Propiedades compatibles ───────────────────────────────────────────────

interface EntidadA {
  id: number
  nombre: string
  tipo: 'A' | 'B' | 'C'
}

interface EntidadB {
  descripcion: string
  tipo: 'B' | 'C' | 'D'
}

// tipo en EntidadA: 'A' | 'B' | 'C'
// tipo en EntidadB: 'B' | 'C' | 'D'
// tipo en EntidadA & EntidadB: 'B' | 'C' (la intersección de ambos)
type EntidadAB = EntidadA & EntidadB

const entidad: EntidadAB = {
  id: 1,
  nombre: 'Test',
  descripcion: 'Descripción',
  tipo: 'B',   // ✓ 'B' es válido en ambos
  // tipo: 'A'  // Error: 'A' no está en EntidadB.tipo
  // tipo: 'D'  // Error: 'D' no está en EntidadA.tipo
}

// ── Propiedad con never (tipos incompatibles) ─────────────────────────────

interface Evento {
  id: string    // string
  nombre: string
}

interface Registro {
  id: number    // number — incompatible con string
  fecha: Date
}

// PROBLEMA: id se convierte en never
type EventoRegistro = Evento & Registro
// { id: never; nombre: string; fecha: Date }

// const imposible: EventoRegistro = {
//   id: 'abc',  // Error: Type 'string' is not assignable to type 'never'
//   nombre: 'Evento 1',
//   fecha: new Date(),
// }

// ── SOLUCIÓN: Omit antes de combinar ──────────────────────────────────────

type EventoRegistroSeguro = Omit<Evento, 'id'> & Omit<Registro, 'id'> & {
  id: string  // definimos el tipo que queremos
}

const seguro: EventoRegistroSeguro = {
  id: 'evento-001',  // ✓ string
  nombre: 'Conferencia TS',
  fecha: new Date(),
}

console.log(\`Evento: \${seguro.id} - \${seguro.nombre}\`)`,
    keyPoints: [
      'Si ambos tipos tienen una propiedad con el mismo nombre, TypeScript intersecta sus tipos.',
      'Para tipos compatibles (uno es subtipo), la intersección usa el tipo más restrictivo.',
      'Para tipos incompatibles (string y number), la propiedad se convierte en never.',
      'Una propiedad never hace el tipo imposible de instanciar — es una señal de conflicto en el diseño.',
      'Para resolver conflictos, usa Omit<T, "propiedad"> antes de combinar.',
    ],
    exercise: {
      description:
        'Tienes \`interface Base { id: number; timestamp: string }\` y \`interface Enriquecido { timestamp: Date; extra: string }\`. Identifica el conflicto en \`Base & Enriquecido\`. Luego crea un tipo \`BaseEnriquecida\` que combine ambos de forma correcta usando Omit para resolver el conflicto, manteniendo timestamp como Date.',
      hint: 'El conflicto es \`timestamp\`: string en Base y Date en Enriquecido. Usa \`Omit<Base, "timestamp"> & Enriquecido\` para que timestamp sea Date en el tipo final.',
    },
    quiz: [
      {
        question:
          '¿Qué tipo tiene una propiedad cuando dos tipos que se intersectan tienen esa propiedad con tipos incompatibles?',
        options: [
          'El tipo del primer tipo',
          'El tipo del segundo tipo',
          'never',
          'string | number (la unión)',
        ],
        correctAnswer: 'never',
        correctFeedback:
          'Correcto. TypeScript intersecta los tipos de la propiedad. Si son incompatibles (como string y number), la intersección es never — imposible de asignar.',
        incorrectFeedback:
          'No es correcto. TypeScript intersecta los tipos de propiedades con el mismo nombre. Si son incompatibles, el tipo resultante es never. Esto hace la propiedad imposible de asignar.',
      },
      {
        question:
          '¿Qué ocurre cuando intentas crear un valor de un tipo con una propiedad never?',
        options: [
          'TypeScript lo permite si omites esa propiedad',
          'TypeScript da un error porque never no puede tener ningún valor',
          'La propiedad automáticamente toma el valor undefined',
          'Solo falla en tiempo de ejecución, no en compilación',
        ],
        correctAnswer:
          'TypeScript da un error porque never no puede tener ningún valor',
        correctFeedback:
          'Correcto. never es el tipo vacío — ningún valor puede ser never. Intentar asignar cualquier cosa a una propiedad never genera un error de compilación.',
        incorrectFeedback:
          'No es correcto. never es el tipo que no tiene ningún valor posible. Intentar asignar cualquier valor a una propiedad de tipo never genera un error de TypeScript.',
      },
      {
        question:
          '¿Cuál es la solución para combinar dos tipos que tienen una propiedad con el mismo nombre pero tipos incompatibles?',
        options: [
          'Renombrar la propiedad en uno de los tipos',
          'Usar Omit<T, "propiedad"> en uno o ambos tipos antes de combinar, y agregar la propiedad con el tipo correcto',
          'Usar any para esa propiedad',
          'No es posible combinar tipos con propiedades conflictivas',
        ],
        correctAnswer:
          'Usar Omit<T, "propiedad"> en uno o ambos tipos antes de combinar, y agregar la propiedad con el tipo correcto',
        correctFeedback:
          'Correcto. \`Omit<A, "id"> & B\` excluye la propiedad conflictiva de A antes de combinar. Luego puedes agregar la propiedad con el tipo que necesites.',
        incorrectFeedback:
          'No es correcto. La solución es usar \`Omit<T, "propiedad">\` para excluir la propiedad conflictiva de uno de los tipos antes de combinar. Luego puedes redefinir la propiedad con el tipo correcto.',
      },
      {
        question:
          'Si A tiene \`{ nivel: string | number }\` y B tiene \`{ nivel: string }\`, ¿qué tipo tiene \`nivel\` en \`A & B\`?',
        options: [
          'string | number',
          'string',
          'number',
          'never',
        ],
        correctAnswer: 'string',
        correctFeedback:
          'Correcto. La intersección de \`string | number\` y \`string\` es \`string\` — el tipo más restrictivo que satisface ambas condiciones. Un string cumple con "string | number" y con "string".',
        incorrectFeedback:
          'No es correcto. La intersección es el conjunto de valores que satisfacen AMBAS condiciones. String cumple con "string | number" y con "string". Number solo cumple la primera. Por lo tanto la intersección es string.',
      },
      {
        question:
          '¿Qué propiedad prevalece cuando una interfaz tiene \`descripcion?: string\` (opcional) y la otra tiene \`descripcion: string\` (requerida)?',
        options: [
          'La propiedad queda opcional',
          'La propiedad queda requerida — la intersección de opcional y requerido es requerido',
          'La propiedad queda como never',
          'TypeScript da error',
        ],
        correctAnswer:
          'La propiedad queda requerida — la intersección de opcional y requerido es requerido',
        correctFeedback:
          'Correcto. La intersección de "puede estar" y "debe estar" es "debe estar". La propiedad queda requerida en el tipo intersectado.',
        incorrectFeedback:
          'No es correcto. La intersección de una propiedad opcional y una requerida resulta en requerida. El valor debe satisfacer ambas condiciones: "puede ser string" y "debe ser string" → debe ser string.',
      },
    ],
  },

  // ── Lección 109 ──────────────────────────────────────────────────────────
  {
    slug: 'casos-practicos-intersection',
    title: 'Casos prácticos de intersection types',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 109,
    description:
      'Aprende a usar intersection types en usuarios, permisos, productos, respuestas de API y componentes reutilizables.',
    explanation: `Los intersection types tienen aplicaciones muy concretas en proyectos reales. Veamos los patrones más comunes.

**Patrón 1: Entidades de base de datos con metadatos**

\`\`\`ts
interface MetaDB {
  id: string
  creadoEn: Date
  actualizadoEn: Date
  version: number
}

interface DatosCliente {
  nombre: string
  email: string
  plan: 'free' | 'pro' | 'enterprise'
}

type Cliente = MetaDB & DatosCliente

// Para crear: sin los metadatos (los genera el servidor)
type NuevoCliente = Omit<Cliente, keyof MetaDB>
\`\`\`

**Patrón 2: Usuario con sesión**

\`\`\`ts
interface UsuarioPublico {
  id: string
  nombre: string
  avatarUrl: string | null
}

interface Sesion {
  token: string
  expiraEn: Date
  permisos: string[]
}

type UsuarioAutenticado = UsuarioPublico & Sesion
\`\`\`

**Patrón 3: Respuesta paginada de API**

\`\`\`ts
interface MetaPaginacion {
  pagina: number
  porPagina: number
  total: number
  totalPaginas: number
}

type RespuestaPaginada<T> = {
  datos: T[]
} & MetaPaginacion
\`\`\`

**Patrón 4: Componente con props de estilo**

\`\`\`ts
interface PropsPropias {
  titulo: string
  descripcion: string
  onClick: () => void
}

interface PropsEstilo {
  className?: string
  style?: Record<string, string>
  id?: string
}

type PropsCard = PropsPropias & PropsEstilo
\`\`\`

**Patrón 5: Producto con propiedades condicionales**

\`\`\`ts
interface ProductoBase {
  id: number
  nombre: string
  precio: number
}

interface InfoEnvio {
  peso: number
  dimensiones: string
  requiereRefrigeracion: boolean
}

// Solo productos físicos tienen info de envío
type ProductoFisico = ProductoBase & InfoEnvio
type ProductoDigital = ProductoBase & { urlDescarga: string }
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// ── Sistema de usuarios con permisos ─────────────────────────────────────

interface UsuarioBase {
  id: number
  nombre: string
  email: string
}

interface PermisosRol {
  rol: 'admin' | 'editor' | 'lector'
  permisos: string[]
  puedeCrear: boolean
  puedeEditar: boolean
  puedeEliminar: boolean
}

interface SesionActiva {
  token: string
  loginEn: Date
  ipOrigen: string
}

type UsuarioConSesion = UsuarioBase & PermisosRol & SesionActiva

// ── Respuesta paginada de API ─────────────────────────────────────────────

interface Paginacion {
  pagina: number
  porPagina: number
  total: number
}

type RespuestaPaginada<T> = {
  datos: T[]
  exito: boolean
} & Paginacion

// ── Crear datos de prueba ─────────────────────────────────────────────────

const usuario: UsuarioConSesion = {
  id: 1,
  nombre: 'Ana García',
  email: 'ana@empresa.com',
  rol: 'admin',
  permisos: ['usuarios:leer', 'usuarios:crear', 'usuarios:editar'],
  puedeCrear: true,
  puedeEditar: true,
  puedeEliminar: true,
  token: 'eyJhbGciOiJIUzI1...',
  loginEn: new Date(),
  ipOrigen: '192.168.1.100',
}

function mostrarSesion(u: UsuarioConSesion): void {
  console.log(\`\${u.nombre} [\${u.rol}]\`)
  console.log(\`Sesión desde: \${u.ipOrigen}\`)
  console.log(\`Permisos: \${u.permisos.join(', ')}\`)
}

mostrarSesion(usuario)

// ── Respuesta paginada ────────────────────────────────────────────────────

interface Producto {
  id: number
  nombre: string
  precio: number
}

const respuesta: RespuestaPaginada<Producto> = {
  datos: [
    { id: 1, nombre: 'Laptop', precio: 999 },
    { id: 2, nombre: 'Monitor', precio: 349 },
  ],
  exito: true,
  pagina: 1,
  porPagina: 10,
  total: 25,
}

console.log(\`Página \${respuesta.pagina} — \${respuesta.datos.length} de \${respuesta.total}\`)`,
    keyPoints: [
      'El patrón MetaDB + Datos es muy común en aplicaciones con base de datos.',
      'Usuario + Sesión = UsuarioAutenticado es una intersección típica en apps con autenticación.',
      'Las respuestas paginadas de API se benefician de tipos genéricos con intersección.',
      'Para "crear" un registro, usa Omit<EntidadCompleta, keyof MetaDB> para quitar los campos generados por el servidor.',
      'Los intersection types hacen el código más explícito sobre qué propiedades se necesitan en cada contexto.',
    ],
    exercise: {
      description:
        'Crea un sistema para una app de cursos. Define: \`CursoBase\` (id: number, titulo: string, precio: number), \`EstadisticasCurso\` (totalEstudiantes: number, calificacion: number, reseñas: number), \`InfoInstructor\` (instructorId: number, nombreInstructor: string). Crea \`CursoCompleto = CursoBase & EstadisticasCurso & InfoInstructor\`. Escribe una función \`formatearCurso\` y una función \`esPopular\` que verifique si tiene más de 100 estudiantes y calificación >= 4.5.',
      hint: 'La función esPopular solo necesita EstadisticasCurso — úsala como tipo del parámetro. La función formatearCurso puede aceptar CursoCompleto o un subconjunto via intersección inline.',
    },
    quiz: [
      {
        question:
          '¿Por qué usar \`Omit<Cliente, keyof MetaDB>\` para crear el tipo "NuevoCliente"?',
        options: [
          'Para hacerlo más rápido',
          'Para quitar los campos que genera el servidor (id, creadoEn, etc.) y solo requerir los datos que proporciona el usuario',
          'Para convertirlo en un union type',
          'Porque keyof MetaDB no funciona de otra manera',
        ],
        correctAnswer:
          'Para quitar los campos que genera el servidor (id, creadoEn, etc.) y solo requerir los datos que proporciona el usuario',
        correctFeedback:
          'Correcto. Al crear un nuevo registro, el servidor genera id, timestamps y version. El cliente no debe proveer esos campos. \`Omit<T, keyof MetaDB>\` quita exactamente esos campos del tipo.',
        incorrectFeedback:
          'No es correcto. Al crear un nuevo registro, algunos campos los genera el servidor automáticamente (id, timestamps). \`Omit<Cliente, keyof MetaDB>\` crea un tipo sin esos campos — el usuario solo proporciona los datos que le corresponden.',
      },
      {
        question:
          '¿Cuál es la ventaja de usar \`RespuestaPaginada<T>\` con genérico en lugar de crear un tipo de respuesta por entidad?',
        options: [
          'Es más rápido en compilación',
          'Permite reutilizar la estructura de paginación para cualquier tipo de datos sin repetir el código',
          'Solo funciona con interfaces, no con type aliases',
          'Evita errores de TypeScript',
        ],
        correctAnswer:
          'Permite reutilizar la estructura de paginación para cualquier tipo de datos sin repetir el código',
        correctFeedback:
          'Correcto. Con \`RespuestaPaginada<Producto>\`, \`RespuestaPaginada<Usuario>\`, etc., reutilizas la estructura de paginación para cualquier entidad sin duplicar código.',
        incorrectFeedback:
          'No es correcto. El genérico \`<T>\` permite reutilizar la misma estructura de paginación para cualquier tipo de datos. Sin genérico, necesitarías \`RespuestaPaginadaProductos\`, \`RespuestaPaginadaUsuarios\`, etc.',
      },
      {
        question:
          '¿Qué ventaja de tipado ofrece \`UsuarioBase & PermisosRol & SesionActiva\` sobre un único tipo grande con todas las propiedades?',
        options: [
          'Genera código más pequeño',
          'Puedes usar subconjuntos de las propiedades en funciones que solo necesitan parte de los datos',
          'Es más rápido en runtime',
          'Permite herencia',
        ],
        correctAnswer:
          'Puedes usar subconjuntos de las propiedades en funciones que solo necesitan parte de los datos',
        correctFeedback:
          'Correcto. Si tienes los tipos separados, una función que solo necesita \`PermisosRol\` puede declarar ese tipo como parámetro. Esto hace que la función sea más reutilizable y el código más claro sobre qué propiedades realmente necesita.',
        incorrectFeedback:
          'No es correcto. La ventaja es la granularidad. Con tipos separados, las funciones pueden declarar exactamente qué propiedades necesitan (\`PermisosRol\` en lugar de \`UsuarioCompleto\`). Esto hace el código más preciso y reutilizable.',
      },
      {
        question:
          '¿Cuándo es apropiado usar \`type ProductoFisico = ProductoBase & InfoEnvio\`?',
        options: [
          'Cuando quieres que el producto pueda ser físico O digital',
          'Cuando todos los productos siempre tienen información de envío',
          'Cuando solo algunos productos son físicos y necesitan información de envío específica',
          'Cuando la información de envío es opcional',
        ],
        correctAnswer:
          'Cuando solo algunos productos son físicos y necesitan información de envío específica',
        correctFeedback:
          'Correcto. No todos los productos tienen información de envío. La intersección \`ProductoBase & InfoEnvio\` representa específicamente el subconjunto de productos que son físicos y tienen esa información.',
        incorrectFeedback:
          'No es correcto. La intersección \`ProductoBase & InfoEnvio\` es apropiada cuando quieres un tipo específico para productos físicos — que tienen todo de ProductoBase MÁS información de envío. Los productos digitales tendrían su propia intersección.',
      },
      {
        question:
          'En el patrón \`type UsuarioAutenticado = UsuarioPublico & Sesion\`, ¿puede una función que acepta \`UsuarioPublico\` recibir un \`UsuarioAutenticado\`?',
        options: [
          'No, los tipos deben coincidir exactamente',
          'Sí, porque UsuarioAutenticado tiene todas las propiedades de UsuarioPublico y más',
          'Solo si usa casting explícito',
          'Solo si están en el mismo archivo',
        ],
        correctAnswer:
          'Sí, porque UsuarioAutenticado tiene todas las propiedades de UsuarioPublico y más',
        correctFeedback:
          'Correcto. TypeScript usa tipado estructural. Si una función espera \`UsuarioPublico\`, puede recibir cualquier objeto que tenga al menos esas propiedades. \`UsuarioAutenticado\` las tiene todas (y más).',
        incorrectFeedback:
          'No es correcto. TypeScript usa tipado estructural. Una función que acepta \`UsuarioPublico\` acepta cualquier objeto con al menos esas propiedades. \`UsuarioAutenticado = UsuarioPublico & Sesion\` tiene todas las propiedades de UsuarioPublico, así que es compatible.',
      },
    ],
  },

  // ── Lección 110 ──────────────────────────────────────────────────────────
  {
    slug: 'errores-intersection-types',
    title: 'Errores comunes con intersection types',
    module: 'Intersection types',
    moduleNumber: 14,
    order: 110,
    description:
      'Aprende a evitar combinaciones imposibles, tipos demasiado grandes o estructuras difíciles de entender.',
    explanation: `Los intersection types son poderosos, pero usarlos mal puede crear tipos imposibles, confusos o difíciles de mantener.

**Error 1: Intersección de primitivos incompatibles**

\`\`\`ts
// IMPOSIBLE: ningún valor puede ser string Y number al mismo tiempo
type Imposible = string & number  // → never

// Evita hacer esto accidentalmente
type ConfigMal = { timeout: string } & { timeout: number }
// { timeout: never } — inutilizable
\`\`\`

**Error 2: Crear tipos demasiado grandes**

\`\`\`ts
// MAL: un tipo con 20+ propiedades de 5 interfaces
type Dios = EntidadA & EntidadB & EntidadC & EntidadD & EntidadE
// Difícil de entender, difícil de instanciar, difícil de mantener
\`\`\`

La solución es crear niveles intermedios o usar composición más granular.

**Error 3: Confundir intersection con herencia**

\`\`\`ts
// Intersection NO es herencia — no hay override de métodos
// Si A tiene método \`hacer()\` y B tiene método \`hacer()\` con diferente firma,
// el resultado puede ser confuso
\`\`\`

**Error 4: Usar intersection donde union es correcto**

\`\`\`ts
// MAL: un usuario NO puede ser admin Y editor al mismo tiempo si son roles exclusivos
type UsuarioRol = Admin & Editor  // ← si son mutuamente excluyentes, esto es incorrecto

// BIEN: usar union si son roles alternativos
type UsuarioRol = Admin | Editor
\`\`\`

**Error 5: Intersección con tipos que ya usan extends**

\`\`\`ts
interface Base { id: number }
interface ExtendedBase extends Base { extra: string }

// No necesitas Base & ExtendedBase — ExtendedBase ya incluye Base
type Redundante = Base & ExtendedBase  // ExtendedBase ya tiene id
\`\`\`

**Error 6: Mezclar union e intersection sin paréntesis claros**

\`\`\`ts
// ¿Cómo interpreta TypeScript esto?
type Confuso = A | B & C

// & tiene mayor precedencia que |
// TypeScript lo interpreta como: A | (B & C)
// Si querías (A | B) & C, necesitas los paréntesis

type Claro = (A | B) & C
\`\`\`

**Checklist para usar intersecciones correctamente**

✓ ¿Tienen sentido semántico juntos?
✓ ¿No hay propiedades con el mismo nombre y tipos incompatibles?
✓ ¿El tipo resultante no es never ni demasiado complejo?
✓ ¿Son complementarios, no alternativos?
✓ ¿Considera usar paréntesis si combinas | y & en la misma expresión?`,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// ── Error 1: propiedad never ──────────────────────────────────────────────

interface TipoA { id: string; nombre: string }
interface TipoB { id: number; descripcion: string }

// PROBLEMA: id se convierte en never
type AB_Mal = TipoA & TipoB
// { id: never; nombre: string; descripcion: string }

// SOLUCIÓN: usar Omit para resolver el conflicto
type AB_Bien = Omit<TipoA, 'id'> & TipoB
// { nombre: string; id: number; descripcion: string }

// ── Error 4: intersection donde debería ser union ─────────────────────────

// Supongamos que un pago solo puede ser uno de estos tipos (excluyentes)
interface PagoTarjeta {
  metodo: 'tarjeta'
  numeroTarjeta: string
  cvv: string
}

interface PagoTransferencia {
  metodo: 'transferencia'
  cuentaDestino: string
  codigoSwift: string
}

// MAL: un pago no puede ser tarjeta Y transferencia al mismo tiempo
// type PagoMal = PagoTarjeta & PagoTransferencia
// metodo: never (conflicto 'tarjeta' & 'transferencia')

// BIEN: un pago es tarjeta O transferencia
type PagoBien = PagoTarjeta | PagoTransferencia

function procesarPago(pago: PagoBien): void {
  if (pago.metodo === 'tarjeta') {
    console.log(\`Cargo a tarjeta: \${pago.numeroTarjeta}\`)
  } else {
    console.log(\`Transferencia a: \${pago.cuentaDestino}\`)
  }
}

// ── Error 6: precedencia de | y & ────────────────────────────────────────

interface Admin { puedeEliminar: boolean }
interface Editor { puedeEditar: boolean }
interface Lector { puedeLeer: boolean }

// Sin paréntesis: A | (B & C) — NO es (A | B) & C
type SinParentesis = Admin | Editor & Lector
// Equivale a: Admin | (Editor & Lector)

// Con paréntesis: explícito
type ConParentesis1 = (Admin | Editor) & Lector
// Debe tener puedeLeer Y (puedeEliminar O puedeEditar)

console.log('Los tipos funcionan correctamente')`,
    keyPoints: [
      'La intersección de primitivos incompatibles resulta en never — evita combinar tipos primitivos incompatibles.',
      'Las propiedades con el mismo nombre y tipos incompatibles resultan en never para esa propiedad.',
      'Usa union para tipos alternativos/excluyentes; usa intersection para tipos complementarios.',
      '& tiene mayor precedencia que | — usa paréntesis cuando combinas ambos operadores.',
      'Evita intersecciones de más de 3-4 tipos a la vez; considera crear tipos intermedios nombrados.',
    ],
    exercise: {
      description:
        'Identifica y corrige los errores en estas declaraciones:\n\n\`\`\`ts\n// Error 1:\ntype Configuracion = { host: string } & { host: number }\n\n// Error 2:\ntype Pago = TarjetaCredito & TarjetaDebito  // son métodos excluyentes\n\n// Error 3:\ntype Resultado = Exito | Fallido & Parcial  // sin paréntesis\n\`\`\`',
      hint: 'Error 1: host: never — usa Omit y elige un tipo para host. Error 2: usa union en lugar de intersection. Error 3: agrega paréntesis según la intención: ¿(Exito | Fallido) & Parcial, o Exito | (Fallido & Parcial)?',
    },
    quiz: [
      {
        question:
          '¿Qué tipo resulta de \`{ campo: string } & { campo: number }\`?',
        options: [
          '{ campo: string | number }',
          '{ campo: string }',
          '{ campo: never }',
          'TypeScript da error de compilación',
        ],
        correctAnswer: '{ campo: never }',
        correctFeedback:
          'Correcto. TypeScript intersecta los tipos de \`campo\`: \`string & number\` = never. El objeto resultante tiene la propiedad \`campo\` de tipo never, lo que lo hace imposible de instanciar.',
        incorrectFeedback:
          'No es correcto. TypeScript intersecta los tipos de propiedades con el mismo nombre. \`string & number\` resulta en never (son incompatibles). El objeto resultante tiene \`campo: never\`.',
      },
      {
        question:
          '¿Cuándo deberías usar union en lugar de intersection para representar tipos?',
        options: [
          'Cuando los tipos son complementarios y el valor debe tener ambos',
          'Cuando los tipos son alternativos o mutuamente excluyentes',
          'Siempre que haya más de 2 tipos',
          'Solo cuando los tipos son clases',
        ],
        correctAnswer:
          'Cuando los tipos son alternativos o mutuamente excluyentes',
        correctFeedback:
          'Correcto. Si los tipos representan alternativas (un pago es tarjeta O transferencia, no ambas), usa union. Si son complementarios (un usuario tiene datos base Y datos de sesión), usa intersection.',
        incorrectFeedback:
          'No es correcto. Los tipos alternativos o excluyentes deben representarse con union. La intersección es para tipos que se complementan — el valor debe ser ambas cosas al mismo tiempo.',
      },
      {
        question:
          '¿Cómo interpreta TypeScript \`A | B & C\` (sin paréntesis)?',
        options: [
          '(A | B) & C — union primero, luego intersection',
          'A | (B & C) — intersection tiene mayor precedencia',
          'No está permitido sin paréntesis',
          'TypeScript los trata con la misma precedencia de izquierda a derecha',
        ],
        correctAnswer:
          'A | (B & C) — intersection tiene mayor precedencia',
        correctFeedback:
          'Correcto. El operador \`&\` tiene mayor precedencia que \`|\`, igual que en matemáticas la multiplicación tiene mayor precedencia que la suma. Usa paréntesis para ser explícito.',
        incorrectFeedback:
          'No es correcto. El operador \`&\` tiene mayor precedencia que \`|\`. TypeScript interpreta \`A | B & C\` como \`A | (B & C)\`. Si necesitas \`(A | B) & C\`, debes escribir los paréntesis explícitamente.',
      },
      {
        question:
          '¿Cuál es la señal de que una intersección está mal diseñada?',
        options: [
          'Si el tipo tiene más de 5 propiedades',
          'Si alguna propiedad resulta en tipo never, indicando un conflicto en el diseño',
          'Si los tipos provienen de archivos diferentes',
          'Si se usa con tipos genéricos',
        ],
        correctAnswer:
          'Si alguna propiedad resulta en tipo never, indicando un conflicto en el diseño',
        correctFeedback:
          'Correcto. Una propiedad never indica que los tipos tienen una propiedad con el mismo nombre y tipos incompatibles. Es una señal de conflicto en el diseño que debe resolverse.',
        incorrectFeedback:
          'No es correcto. El indicador más claro de una intersección mal diseñada es una propiedad de tipo never. Significa que hay un conflicto — dos tipos quieren que esa propiedad sea de tipos incompatibles.',
      },
      {
        question:
          '¿Qué técnica puedes usar para resolver el conflicto de una propiedad antes de combinar dos tipos?',
        options: [
          'Renombrar uno de los tipos',
          'Usar Omit<T, "propiedad"> para excluir la propiedad conflictiva de uno de los tipos',
          'Usar any para esa propiedad específica',
          'Usar extends en lugar de &',
        ],
        correctAnswer:
          'Usar Omit<T, "propiedad"> para excluir la propiedad conflictiva de uno de los tipos',
        correctFeedback:
          'Correcto. \`Omit<A, "campo"> & B\` excluye \`campo\` de A antes de combinar. Puedes luego agregar \`campo\` con el tipo que necesites: \`Omit<A, "campo"> & B & { campo: string }\`.',
        incorrectFeedback:
          'No es correcto. La técnica correcta es usar \`Omit<T, "propiedad">\` para excluir la propiedad conflictiva de uno de los tipos antes de combinar. Luego puedes agregar la propiedad con el tipo correcto.',
      },
    ],
  },
]

export const tsModule14: Module = {
  number: 14,
  title: 'Intersection types',
  level: 'nivel3',
  lessons: lessonsTsModule14,
}
