import type { Lesson, Module } from '@/types'

export const lessonsTsModule9: Lesson[] = [
  // ── Lección 63 ───────────────────────────────────────────────────────────
  {
    slug: 'que-es-interface',
    title: '¿Qué es una interface?',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 1,
    description:
      'Aprende qué es una interface y cómo se usa para describir la forma de un objeto.',
    explanation: `Una **interface** en TypeScript es una forma de describir la estructura (forma) que debe tener un objeto. Es muy similar a un type alias para objetos, pero tiene algunas características especiales que la hacen especialmente útil para modelar datos.

**Sintaxis**

\`\`\`ts
interface NombreInterface {
  propiedad: tipo
  otraPropiedad: tipo
}
\`\`\`

**Ejemplo básico**

\`\`\`ts
interface Usuario {
  nombre: string
  correo: string
  edad: number
}
\`\`\`

**Usando una interface**

Una vez definida la interface, la usas como tipo:

\`\`\`ts
const usuario: Usuario = {
  nombre: "Ana",
  correo: "ana@mail.com",
  edad: 25,
}
\`\`\`

TypeScript verifica que el objeto tenga exactamente las propiedades definidas en la interface, con los tipos correctos.

**¿En qué se parece a un type alias?**

Para objetos simples, las interfaces y los type aliases son casi idénticos:

\`\`\`ts
// Son equivalentes para casos básicos:
interface Usuario { nombre: string; edad: number }
type Usuario = { nombre: string; edad: number }
\`\`\`

**¿En qué se diferencia de un type alias?**

Las interfaces tienen características que los type aliases no tienen (o no de la misma forma):
1. Pueden ser extendidas con \`extends\` (lo verás en la lección 67).
2. Pueden ser "fusionadas" — si declaras la misma interface dos veces, se combinan.
3. Son más comúnmente usadas para describir la forma de objetos en código orientado a objetos.

**Una analogía útil**

Una interface es como el plano de un edificio. El plano no es el edificio en sí, sino la descripción de cómo debe ser. Cualquier objeto que "implemente" la interface debe seguir ese plano.

**¿Cuándo usar interface?**

- Para describir la forma de objetos, especialmente cuando podrías querer extenderla.
- Cuando trabajas con código orientado a objetos o quieres describir contratos entre partes del sistema.
- En general, para tipos de objeto que representan entidades (Usuario, Producto, Pedido).`,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Definición de interface
interface Estudiante {
  id: number
  nombre: string
  correo: string
  promedio: number
}

// Usando la interface
const est1: Estudiante = {
  id: 1,
  nombre: "Ana García",
  correo: "ana@uni.edu",
  promedio: 9.0,
}

const est2: Estudiante = {
  id: 2,
  nombre: "Carlos López",
  correo: "carlos@uni.edu",
  promedio: 7.5,
}

// Funciones que usan la interface
function mostrarEstudiante(est: Estudiante): void {
  console.log(\`[\${est.id}] \${est.nombre} — Promedio: \${est.promedio}\`)
}

function buscarPorId(lista: Estudiante[], id: number): Estudiante | undefined {
  return lista.find((e) => e.id === id)
}

function filtrarPorPromedio(lista: Estudiante[], minimo: number): Estudiante[] {
  return lista.filter((e) => e.promedio >= minimo)
}

// Usar las funciones
const estudiantes: Estudiante[] = [est1, est2]
estudiantes.forEach(mostrarEstudiante)
// → [1] Ana García — Promedio: 9
// → [2] Carlos López — Promedio: 7.5

const encontrado = buscarPorId(estudiantes, 1)
if (encontrado) {
  console.log("Encontrado:", encontrado.nombre)  // → Ana García
}

const aprobados = filtrarPorPromedio(estudiantes, 8)
console.log("Promedio ≥ 8:", aprobados.map((e) => e.nombre))  // → ["Ana García"]

// Error que TypeScript detecta:
// const incorrecto: Estudiante = { id: "uno", nombre: "Bob", correo: "b@b.com", promedio: 7 }
// Error: Type 'string' is not assignable to type 'number'`,
    keyPoints: [
      'Una interface define la estructura (forma) que debe tener un objeto.',
      'La sintaxis es `interface Nombre { propiedad: tipo }` — sin el `=` que usa `type`.',
      'TypeScript verifica que los objetos tengan las propiedades correctas con los tipos correctos.',
      'Para objetos simples, las interfaces y los type aliases son funcionalmente equivalentes.',
      'Las interfaces pueden extenderse con `extends`, lo que las hace más flexibles para herencia de tipos.',
      'Los nombres de interfaces en TypeScript suelen comenzar con mayúscula.',
    ],
    exercise: {
      description:
        'Define una interface `Producto` con `id` (number), `nombre` (string), `precio` (number) y `categoria` (string). Crea tres productos de diferentes categorías. Escribe una función `filtrarPorCategoria` que reciba un array de `Producto` y un string de categoría, y retorne los productos de esa categoría. Pruébala con "Electrónica" y "Ropa".',
      hint: 'La función devuelve `Producto[]`. Usa `.filter((p) => p.categoria === categoria)`. Recuerda que las interfaces usan la sintaxis `interface Nombre { }` sin el signo igual.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para definir una interface en TypeScript?',
        options: [
          'interface Usuario = { nombre: string }',
          'type interface Usuario { nombre: string }',
          'interface Usuario { nombre: string }',
          'interface: Usuario { nombre: string }',
        ],
        correctAnswer: 'interface Usuario { nombre: string }',
        correctFeedback:
          'Correcto. La sintaxis de interface es `interface Nombre { propiedades }` — sin el signo `=` que usa `type`.',
        incorrectFeedback:
          'No es correcto. La sintaxis correcta es `interface Nombre { propiedades }`. No se usa `=` (eso es para type aliases), ni se combina `type interface`, ni se usa `:` después de `interface`.',
      },
      {
        question: '¿En qué son similares las interfaces y los type aliases para objetos?',
        options: [
          'Solo los type aliases pueden tener propiedades opcionales',
          'Ambos describen la forma de objetos y TypeScript los verifica de la misma manera',
          'Las interfaces no pueden usarse como tipo de parámetro en funciones',
          'Los type aliases son más rápidos en tiempo de ejecución',
        ],
        correctAnswer: 'Ambos describen la forma de objetos y TypeScript los verifica de la misma manera',
        correctFeedback:
          'Correcto. Para objetos simples, interfaces y type aliases son funcionalmente equivalentes — TypeScript los trata de la misma forma al verificar tipos.',
        incorrectFeedback:
          'No es correcto. Para objetos simples, interfaces y type aliases son casi equivalentes: ambos describen la forma del objeto y TypeScript los verifica igual. Ambos pueden tener propiedades opcionales y ambos se pueden usar como tipos de parámetros.',
      },
      {
        question: '¿Cuál es una característica que las interfaces tienen y los type aliases NO en la misma forma?',
        options: [
          'Las interfaces pueden tener propiedades opcionales',
          'Las interfaces pueden extenderse con `extends`',
          'Las interfaces pueden usarse como tipos de función',
          'Las interfaces soportan readonly',
        ],
        correctAnswer: 'Las interfaces pueden extenderse con `extends`',
        correctFeedback:
          'Correcto. Las interfaces pueden usar `extends` para heredar propiedades de otras interfaces. Los type aliases usan `&` para algo similar, pero la semántica y casos de uso difieren.',
        incorrectFeedback:
          'No es correcto. Tanto interfaces como type aliases soportan propiedades opcionales, tipos de función y readonly. La característica distintiva de las interfaces es que pueden extenderse con `extends`, lo que permite herencia de tipos de forma natural.',
      },
      {
        question: '¿Qué código JavaScript genera una interface de TypeScript?',
        options: [
          'Una clase con los mismos atributos',
          'Un objeto vacío como plantilla',
          'Ningún código — las interfaces desaparecen al compilar',
          'Una función constructora',
        ],
        correctAnswer: 'Ningún código — las interfaces desaparecen al compilar',
        correctFeedback:
          'Correcto. Como los type aliases, las interfaces son construcciones de TypeScript puro y no generan código JavaScript al compilar.',
        incorrectFeedback:
          'No es correcto. Las interfaces, igual que los type aliases, son herramientas de TypeScript para verificación en tiempo de compilación. No generan ningún código JavaScript — desaparecen completamente al compilar.',
      },
      {
        question: '¿Cuándo es especialmente útil usar una interface en lugar de un type alias?',
        options: [
          'Cuando el tipo es una unión de strings',
          'Cuando quieres que el tipo pueda extenderse con herencia',
          'Cuando el tipo tiene menos de 3 propiedades',
          'Solo para tipos de función',
        ],
        correctAnswer: 'Cuando quieres que el tipo pueda extenderse con herencia',
        correctFeedback:
          'Correcto. Las interfaces son especialmente útiles cuando planeas extenderlas o cuando trabajas con jerarquías de tipos, ya que su sintaxis de extensión es más natural.',
        incorrectFeedback:
          'No es correcto. Las interfaces son especialmente útiles cuando planeas extenderlas con `extends` para crear jerarquías de tipos, o cuando trabajas con código orientado a objetos. Los type aliases son más flexibles para uniones y combinaciones complejas.',
      },
    ],
  },

  // ── Lección 64 ───────────────────────────────────────────────────────────
  {
    slug: 'crear-interfaces',
    title: 'Crear interfaces',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 2,
    description:
      'Aprende a crear interfaces para objetos comunes.',
    explanation: `Crear interfaces es una de las tareas más frecuentes en TypeScript. Una interface bien diseñada hace que tu código sea más legible, mantenible y seguro.

**Buenas prácticas al crear interfaces**

1. **Nombres en PascalCase** (primera letra de cada palabra en mayúscula):
\`\`\`ts
interface UsuarioRegistrado { }   // ✓
interface usuario_registrado { }  // ✗ (no es convención)
interface USUARIOREGISTRADO { }   // ✗ (tampoco es convención)
\`\`\`

2. **Una interface por entidad del dominio**:
\`\`\`ts
interface Usuario { ... }
interface Producto { ... }
interface Pedido { ... }
\`\`\`

3. **Propiedades requeridas primero, opcionales después**:
\`\`\`ts
interface Perfil {
  id: number        // requerido
  nombre: string    // requerido
  correo: string    // requerido
  bio?: string      // opcional al final
  avatar?: string   // opcional al final
}
\`\`\`

4. **Nombres descriptivos para las propiedades**:
\`\`\`ts
// ✗ ambiguo
interface Datos { d: string; n: number; a: boolean }

// ✓ claro
interface Curso { descripcion: string; numLecciones: number; activo: boolean }
\`\`\`

**Interfaces para datos de API**

Un caso muy común es modelar las respuestas de APIs:

\`\`\`ts
interface RespuestaAPI<T> {
  datos: T
  total: number
  pagina: number
  mensaje?: string
}
\`\`\`

**Interfaces anidadas**

Al igual que los type aliases, puedes anidar interfaces:

\`\`\`ts
interface Direccion {
  calle: string
  ciudad: string
}

interface Usuario {
  nombre: string
  direccion: Direccion
}
\`\`\``,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Interface para una lección del curso
interface Leccion {
  id: number
  titulo: string
  duracion: number     // en minutos
  completada: boolean
  descripcion?: string
}

// Interface para un módulo del curso
interface ModuloCurso {
  id: number
  titulo: string
  lecciones: Leccion[]
}

// Interface para el curso completo
interface Curso {
  id: number
  titulo: string
  instructor: string
  precio: number
  gratuito: boolean
  modulos: ModuloCurso[]
}

// Datos de ejemplo
const leccion1: Leccion = {
  id: 1,
  titulo: "Introducción a TypeScript",
  duracion: 15,
  completada: true,
}

const leccion2: Leccion = {
  id: 2,
  titulo: "Variables y tipos",
  duracion: 20,
  completada: false,
  descripcion: "Aprende string, number y boolean",
}

const modulo1: ModuloCurso = {
  id: 1,
  titulo: "Fundamentos",
  lecciones: [leccion1, leccion2],
}

const curso: Curso = {
  id: 101,
  titulo: "TypeScript desde Cero",
  instructor: "Ronaldo",
  precio: 0,
  gratuito: true,
  modulos: [modulo1],
}

// Funciones que usan las interfaces
function calcularProgreso(modulo: ModuloCurso): number {
  const completadas = modulo.lecciones.filter((l) => l.completada).length
  return Math.round((completadas / modulo.lecciones.length) * 100)
}

function duracionTotal(modulo: ModuloCurso): number {
  return modulo.lecciones.reduce((sum, l) => sum + l.duracion, 0)
}

console.log(\`Progreso: \${calcularProgreso(modulo1)}%\`)  // → 50%
console.log(\`Duración: \${duracionTotal(modulo1)} min\`)  // → 35 min
console.log(\`Precio: \${curso.gratuito ? "Gratis" : "$" + curso.precio}\`)  // → Gratis`,
    keyPoints: [
      'Los nombres de interfaces usan PascalCase por convención.',
      'Coloca las propiedades requeridas primero y las opcionales al final.',
      'Usa nombres descriptivos para las propiedades — evita abreviaciones ambiguas.',
      'Puedes anidar interfaces como tipos de propiedades.',
      'Las interfaces modelan entidades del dominio: Usuario, Producto, Pedido, Curso.',
      'Una interface bien nombrada actúa como documentación del tipo de dato.',
    ],
    exercise: {
      description:
        'Crea las interfaces `Autor` (id, nombre, correo), `Articulo` (id, titulo, contenido: string, autor: Autor, publicado: boolean, fecha?: string) y `Blog` (nombre: string, articulos: Articulo[]). Escribe una función `obtenerArticulosPublicados` y otra `contarArticulosPorAutor` que reciba un `Blog` y un nombre de autor y retorne cuántos artículos tiene publicados ese autor.',
      hint: 'Para `contarArticulosPorAutor` filtra por `articulo.autor.nombre === nombreAutor && articulo.publicado`. Para las fechas usa `new Date().toISOString()` o un string cualquiera.',
    },
    quiz: [
      {
        question: '¿Cuál es la convención de nombre para interfaces en TypeScript?',
        options: [
          'snake_case: usuario_registrado',
          'MAYÚSCULAS: USUARIO',
          'PascalCase: UsuarioRegistrado',
          'camelCase: usuarioRegistrado',
        ],
        correctAnswer: 'PascalCase: UsuarioRegistrado',
        correctFeedback:
          'Correcto. Las interfaces en TypeScript usan PascalCase — la primera letra de cada palabra en mayúscula.',
        incorrectFeedback:
          'No es correcto. La convención en TypeScript para interfaces es PascalCase: `UsuarioRegistrado\`, \`ProductoDisponible\`, etc. Cada palabra empieza con mayúscula.',
      },
      {
        question: '¿En qué orden se recomienda colocar las propiedades en una interface?',
        options: [
          'Alfabéticamente',
          'Por tipo: primero strings, luego numbers, luego booleans',
          'Primero las requeridas, luego las opcionales',
          'Primero las opcionales, luego las requeridas',
        ],
        correctAnswer: 'Primero las requeridas, luego las opcionales',
        correctFeedback:
          'Correcto. Colocar las propiedades requeridas primero y las opcionales al final hace la interface más fácil de leer.',
        incorrectFeedback:
          'No es correcto. La buena práctica es colocar primero las propiedades requeridas y luego las opcionales. Esto hace que quien lea la interface vea inmediatamente qué es obligatorio.',
      },
      {
        question: '¿Cómo se usa una interface anidada como tipo de propiedad?',
        options: [
          'Solo puedes anidar type aliases, no interfaces',
          'Con la sintaxis \`propiedad: NombreInterface\`',
          'Con corchetes: \`propiedad: [NombreInterface]\`',
          'Con llaves extras: \`propiedad: { NombreInterface }\`',
        ],
        correctAnswer: 'Con la sintaxis \`propiedad: NombreInterface\`',
        correctFeedback:
          'Correcto. Se usa el nombre de la interface directamente como tipo de propiedad, igual que con cualquier otro tipo.',
        incorrectFeedback:
          'No es correcto. Para usar una interface como tipo de propiedad, simplemente escribes el nombre de la interface: \`propiedad: NombreInterface\`. No se necesitan corchetes ni llaves adicionales.',
      },
      {
        question: '¿Por qué es importante usar nombres descriptivos en las propiedades de una interface?',
        options: [
          'TypeScript los requiere para compilar',
          'Porque los nombres cortos causan errores de tipo',
          'Porque sirven como documentación y hacen el código más legible',
          'Solo para cumplir con los estándares de linting',
        ],
        correctAnswer: 'Porque sirven como documentación y hacen el código más legible',
        correctFeedback:
          'Correcto. \`descripcion: string\` es mucho más claro que \`d: string\`. Una interface bien nombrada documenta el significado de los datos.',
        incorrectFeedback:
          'No es correcto. TypeScript no requiere nombres específicos. La razón es práctica: nombres descriptivos hacen el código más legible y actúan como documentación. Cuando otro desarrollador (o tú en el futuro) lea \`numLecciones\`, sabrá inmediatamente qué representa.',
      },
      {
        question: '¿Cuándo es útil tener varias interfaces separadas para partes de un objeto complejo?',
        options: [
          'Nunca, siempre es mejor tener una sola interface grande',
          'Cuando diferentes partes del objeto pueden reutilizarse en distintos contextos',
          'Solo cuando la interface tiene más de 10 propiedades',
          'Solo si las partes son de tipo string o number',
        ],
        correctAnswer: 'Cuando diferentes partes del objeto pueden reutilizarse en distintos contextos',
        correctFeedback:
          'Correcto. Por ejemplo, \`Direccion\` puede usarse en \`Usuario\`, \`Empresa\` y \`Pedido\`. Separar en interfaces más pequeñas favorece la reutilización.',
        incorrectFeedback:
          'No es correcto. Separar un objeto complejo en múltiples interfaces tiene sentido cuando las partes pueden reutilizarse. Por ejemplo, una interface \`Direccion\` puede ser propiedad de \`Usuario\`, \`Empresa\` o \`Pedido\`, evitando duplicar las propiedades de dirección en cada una.',
      },
    ],
  },

  // ── Lección 65 ───────────────────────────────────────────────────────────
  {
    slug: 'interfaces-propiedades-opcionales',
    title: 'Interfaces con propiedades opcionales',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 3,
    description:
      'Aprende a definir propiedades opcionales dentro de una interface.',
    explanation: `Al igual que en los type aliases, puedes marcar propiedades de una interface como opcionales con el símbolo \`?\`.

**Sintaxis**

\`\`\`ts
interface Usuario {
  nombre: string     // requerido
  correo?: string    // opcional
  telefono?: string  // opcional
}
\`\`\`

**Casos de uso reales**

Las propiedades opcionales son muy útiles para:

1. **Formularios**: no todos los campos son obligatorios.
2. **Perfiles de usuario**: bio, foto, redes sociales — el usuario puede o no haberlas llenado.
3. **Respuestas de API**: algunos campos vienen solo en ciertas condiciones.
4. **Configuraciones**: muchos valores tienen configuraciones por defecto.

**Verificar propiedades opcionales**

Como con type aliases, debes verificar antes de usar:

\`\`\`ts
function mostrar(usuario: Usuario): void {
  console.log(usuario.nombre)
  if (usuario.correo) {
    console.log("Correo:", usuario.correo)
  }
}
\`\`\`

**Interfaces con combinación de requeridos y opcionales**

\`\`\`ts
interface ConfiguracionNotificacion {
  // Requeridos
  titulo: string
  mensaje: string
  tipo: "info" | "error" | "exito"

  // Opcionales
  duracion?: number        // ms, default: 3000
  accionTexto?: string     // texto del botón de acción
  enCerrar?: () => void    // callback al cerrar
}
\`\`\`

**Diferencia con la lección anterior**

Estás aplicando el mismo concepto de propiedades opcionales que viste en type aliases, pero ahora con la sintaxis de interface. El comportamiento es idéntico — la diferencia está en la forma de definirlos.`,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Interface con mezcla de propiedades
interface PerfilUsuario {
  // Requeridos
  id: number
  username: string

  // Opcionales — el usuario puede o no haberlos llenado
  nombre?: string
  bio?: string
  avatar?: string
  sitioWeb?: string
  ubicacion?: string
}

// Objetos con distintas combinaciones
const perfil1: PerfilUsuario = {
  id: 1,
  username: "ana_dev",
}

const perfil2: PerfilUsuario = {
  id: 2,
  username: "carlos_code",
  nombre: "Carlos López",
  bio: "Desarrollador TypeScript apasionado",
  ubicacion: "CDMX, México",
}

const perfil3: PerfilUsuario = {
  id: 3,
  username: "sofia_ts",
  nombre: "Sofía Martínez",
  bio: "Aprendiendo TypeScript",
  avatar: "https://ejemplo.com/avatar.jpg",
  sitioWeb: "https://sofia.dev",
  ubicacion: "Monterrey, México",
}

// Función que maneja propiedades opcionales
function mostrarPerfil(perfil: PerfilUsuario): void {
  console.log(\`@\${perfil.username} (ID: \${perfil.id})\`)

  if (perfil.nombre) console.log(\`Nombre: \${perfil.nombre}\`)
  if (perfil.bio) console.log(\`Bio: \${perfil.bio}\`)
  if (perfil.ubicacion) console.log(\`Ubicación: \${perfil.ubicacion}\`)
  if (perfil.sitioWeb) console.log(\`Web: \${perfil.sitioWeb}\`)
}

mostrarPerfil(perfil1)
// → @ana_dev (ID: 1)

mostrarPerfil(perfil2)
// → @carlos_code (ID: 2)
// → Nombre: Carlos López
// → Bio: Desarrollador TypeScript apasionado
// → Ubicación: CDMX, México

// Operador ?. para acceso seguro
const nombreCompleto = perfil1.nombre?.toUpperCase() ?? "Sin nombre"
console.log(nombreCompleto)  // → Sin nombre

const bioLarga = perfil3.bio?.length ?? 0
console.log("Longitud bio:", bioLarga)  // → 23`,
    keyPoints: [
      'Las propiedades opcionales en interfaces se marcan con `?`, igual que en type aliases.',
      'Un objeto puede omitir las propiedades opcionales al implementar la interface.',
      'El tipo de una propiedad opcional es `tipo | undefined` — verifica antes de usar.',
      'Usa `?.` para acceder de forma segura y `??` para valores por defecto.',
      'Coloca las propiedades opcionales al final de la interface por convención.',
      'Las propiedades opcionales son ideales para campos de formulario no obligatorios y datos de API variables.',
    ],
    exercise: {
      description:
        'Crea una interface `ConfiguracionApp` con las propiedades requeridas `nombre` (string) y `version` (string), y las opcionales: `tema\` (string, ej: "oscuro"/"claro"), \`idioma\` (string), \`maxUsuarios\` (number) y \`debugMode\` (boolean). Crea una función \`iniciarApp\` que reciba una \`ConfiguracionApp\` e imprima un resumen de la configuración, mostrando los valores por defecto para las propiedades opcionales no proporcionadas.',
      hint: 'Para los valores por defecto usa \`??\`: \`config.tema ?? "claro"\`, \`config.idioma ?? "es"\`, \`config.maxUsuarios ?? 100\`, \`config.debugMode ?? false\`.',
    },
    quiz: [
      {
        question: '¿Cómo se marca una propiedad como opcional en una interface?',
        options: [
          'Con \`!\` después del nombre',
          'Con \`optional\` antes del tipo',
          'Con \`?\` después del nombre',
          'Con \`| undefined\` al final del tipo',
        ],
        correctAnswer: 'Con \`?\` después del nombre',
        correctFeedback:
          'Correcto. La sintaxis es \`propiedad?: tipo\`, igual que en type aliases.',
        incorrectFeedback:
          'No es correcto. Tanto en interfaces como en type aliases, el símbolo \`?\` después del nombre de la propiedad la hace opcional: \`propiedad?: tipo\`. También puedes hacer \`propiedad: tipo | undefined\` pero \`?\` es la forma estándar.',
      },
      {
        question: '¿Qué tipo tiene \`usuario.correo\` si está declarada como \`correo?: string\`?',
        options: [
          'string',
          'null',
          'string | undefined',
          'string | null',
        ],
        correctAnswer: 'string | undefined',
        correctFeedback:
          'Correcto. Las propiedades opcionales tienen tipo \`tipo | undefined\` porque pueden no estar presentes.',
        incorrectFeedback:
          'No es correcto. Una propiedad opcional \`correo?: string\` tiene tipo \`string | undefined\` dentro de la interface, porque puede estar presente (string) o ausente (undefined).',
      },
      {
        question: '¿Cuál es un buen caso de uso para propiedades opcionales en una interface?',
        options: [
          'Cuando la propiedad siempre debe tener un valor',
          'Cuando la propiedad puede o no estar disponible según el contexto',
          'Solo para propiedades de tipo boolean',
          'Cuando no sabes el tipo de la propiedad',
        ],
        correctAnswer: 'Cuando la propiedad puede o no estar disponible según el contexto',
        correctFeedback:
          'Correcto. Las opcionales son perfectas para campos de formulario no obligatorios, datos de API variables, o configuraciones con valores por defecto.',
        incorrectFeedback:
          'No es correcto. Las propiedades opcionales son para cuando un campo puede o no estar presente en el objeto. No tienen que ver con el tipo de la propiedad ni con ignorar el tipo. Son perfectas para perfiles de usuario, configuraciones opcionales y respuestas de API variables.',
      },
      {
        question: '¿Qué retorna \`perfil.bio?.length\` si \`bio\` es una propiedad opcional no definida?',
        options: [
          '0',
          'null',
          'undefined',
          'Lanza un TypeError',
        ],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. El operador \`?.\` retorna \`undefined\` si la propiedad de la izquierda no existe, sin lanzar error.',
        incorrectFeedback:
          'No es correcto. El operador \`?.\` (optional chaining) retorna \`undefined\` si la propiedad no está definida. No lanza error ni retorna 0. Es precisamente para acceder de forma segura a propiedades que pueden no existir.',
      },
      {
        question: '¿Dónde se recomienda colocar las propiedades opcionales en una interface?',
        options: [
          'Al principio, antes de las requeridas',
          'Alternadas con las requeridas',
          'Después de las propiedades requeridas',
          'No importa el orden',
        ],
        correctAnswer: 'Después de las propiedades requeridas',
        correctFeedback:
          'Correcto. Por convención y legibilidad, primero van las propiedades requeridas y luego las opcionales.',
        incorrectFeedback:
          'No es correcto. La convención es colocar las propiedades requeridas primero y las opcionales después. Esto hace que sea inmediatamente visible qué campos son obligatorios al leer la interface.',
      },
    ],
  },

  // ── Lección 66 ───────────────────────────────────────────────────────────
  {
    slug: 'interfaces-readonly',
    title: 'Interfaces con readonly',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 4,
    description:
      'Aprende a usar readonly dentro de interfaces para proteger propiedades.',
    explanation: `Al igual que en type aliases, puedes usar \`readonly\` en las propiedades de una interface para evitar que sean modificadas después de crear el objeto.

**Sintaxis**

\`\`\`ts
interface Producto {
  readonly id: number    // no puede cambiar
  nombre: string         // puede cambiar
  precio: number         // puede cambiar
}
\`\`\`

**¿Cuándo usar readonly en interfaces?**

- Propiedades que nunca deberían cambiar después de crearse: **identificadores**, **fechas de creación**, **números de serie**.
- Datos que vienen de una fuente externa y no deben modificarse localmente.
- Invariantes del dominio: una factura siempre tendrá el mismo número de factura.

**Interface completamente inmutable**

\`\`\`ts
interface PuntoGeometrico {
  readonly x: number
  readonly y: number
}

const punto: PuntoGeometrico = { x: 3, y: 4 }
// punto.x = 5  // Error: x es readonly
\`\`\`

**Readonly en arrays dentro de interfaces**

\`\`\`ts
interface Configuracion {
  readonly roles: readonly string[]
}

const config: Configuracion = {
  roles: ["admin", "editor"],
}

// config.roles.push("lector")  // Error: el array es readonly
// config.roles = []             // Error: roles es readonly
\`\`\`

**Nota práctica**

\`readonly\` en TypeScript solo se verifica en tiempo de compilación. Si conviertes el tipo a \`any\` o usas \`Object.assign\`, puedes saltarte la protección. \`readonly\` es una herramienta de desarrollo, no una garantía de seguridad en tiempo de ejecución.`,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Interface con readonly para entidad de base de datos
interface Factura {
  readonly id: number
  readonly numeroFactura: string
  readonly fechaEmision: string
  cliente: string         // puede actualizarse
  items: string[]         // puede actualizarse
  total: number           // se recalcula al agregar items
}

const factura: Factura = {
  id: 1001,
  numeroFactura: "FAC-2024-001",
  fechaEmision: "2024-01-15",
  cliente: "Ana García",
  items: ["Teclado mecánico"],
  total: 850,
}

// Modificaciones permitidas
factura.cliente = "Ana M. García"     // ✓ puede corregirse
factura.items.push("Mouse")           // ✓ agregar items
factura.total = 1050                  // ✓ actualizar total

// Modificaciones prohibidas
// factura.id = 9999                  // Error: id es readonly
// factura.numeroFactura = "FAC-X"    // Error: numeroFactura es readonly
// factura.fechaEmision = "2024-02-01" // Error: fechaEmision es readonly

console.log(factura)
// Muestra la factura con cliente actualizado y nuevo item

// Interface con todo readonly — objeto inmutable
interface Coordenada {
  readonly lat: number
  readonly lng: number
}

const ubicacion: Coordenada = { lat: 19.4326, lng: -99.1332 }
// ubicacion.lat = 0  // Error: lat es readonly
console.log(\`Lat: \${ubicacion.lat}, Lng: \${ubicacion.lng}\`)

// Función que garantiza no modificar el parámetro
function calcularDistancia(desde: Coordenada, hasta: Coordenada): number {
  // TypeScript previene modificaciones accidentales dentro de la función
  const difLat = hasta.lat - desde.lat
  const difLng = hasta.lng - desde.lng
  return Math.sqrt(difLat ** 2 + difLng ** 2)
}

const cdmx: Coordenada = { lat: 19.4326, lng: -99.1332 }
const monterrey: Coordenada = { lat: 25.6866, lng: -100.3161 }
console.log("Distancia:", calcularDistancia(cdmx, monterrey).toFixed(4))`,
    keyPoints: [
      '`readonly` en interfaces funciona igual que en type aliases: protege propiedades de modificación.',
      'Úsalo para identificadores, fechas de creación y otras propiedades que no deben cambiar.',
      'Puedes tener mezcla de propiedades `readonly` y mutables en la misma interface.',
      'Los arrays también pueden ser `readonly` dentro de interfaces.',
      '`readonly` es una verificación de tiempo de compilación, no una garantía en tiempo de ejecución.',
      'Usar `readonly` en parámetros de función previene modificaciones accidentales del argumento.',
    ],
    exercise: {
      description:
        'Crea una interface `Transaccion` con: `id\` y \`fecha\` como \`readonly\`, y \`concepto\` (string), \`monto\` (number) y \`tipo\` (string: "ingreso" o "egreso") como mutables. Crea un array de transacciones y escribe funciones \`calcularBalance\` (suma ingresos, resta egresos) y \`obtenerResumen\` que retorne un objeto con \`totalIngresos\`, \`totalEgresos\` y \`balance\`.',
      hint: 'Para \`calcularBalance\` usa \`reduce\`: suma cuando \`tipo === "ingreso"\` y resta cuando es \`"egreso"\`. Para \`obtenerResumen\` retorna un objeto con los tres valores calculados.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis para hacer una propiedad \`id\` de tipo number readonly en una interface?',
        options: [
          'id: readonly number',
          'readonly id: number',
          'id: number (readonly)',
          'const id: number',
        ],
        correctAnswer: 'readonly id: number',
        correctFeedback:
          'Correcto. \`readonly\` va antes del nombre de la propiedad: \`readonly id: number\`.',
        incorrectFeedback:
          'No es correcto. El modificador \`readonly\` va antes del nombre de la propiedad: \`readonly id: number\`. No va después del nombre ni dentro del tipo.',
      },
      {
        question: '¿Qué propiedades son candidatas ideales para \`readonly\` en una interface?',
        options: [
          'Todas las propiedades para máxima inmutabilidad',
          'Propiedades que nunca deben cambiar después de crearse: ids, fechas de creación',
          'Solo propiedades de tipo string',
          'Propiedades que vienen de un formulario',
        ],
        correctAnswer: 'Propiedades que nunca deben cambiar después de crearse: ids, fechas de creación',
        correctFeedback:
          'Correcto. \`readonly\` es ideal para identificadores únicos, fechas de creación, números de serie — datos que son inmutables por naturaleza.',
        incorrectFeedback:
          'No es correcto. Si haces todas las propiedades \`readonly\`, el objeto sería completamente inmutable. \`readonly\` se usa para propiedades que naturalmente no deben cambiar: ids, fechas de creación, números de serie, versiones.',
      },
      {
        question: '¿Qué sucede al intentar modificar una propiedad \`readonly\` de una interface?',
        options: [
          'La modificación se ignora silenciosamente',
          'TypeScript muestra un error en tiempo de compilación',
          'El valor cambia pero TypeScript da una advertencia',
          'Solo falla en tiempo de ejecución',
        ],
        correctAnswer: 'TypeScript muestra un error en tiempo de compilación',
        correctFeedback:
          'Correcto. TypeScript detecta inmediatamente el intento de modificar una propiedad \`readonly\` y reporta un error antes de compilar.',
        incorrectFeedback:
          'No es correcto. TypeScript detecta el intento de modificar una propiedad \`readonly\` en tiempo de compilación y reporta un error: "Cannot assign to \'X\' because it is a read-only property". No es solo una advertencia ni falla en tiempo de ejecución.',
      },
      {
        question: '¿Puede una interface tener mezcla de propiedades \`readonly\` y mutables?',
        options: [
          'No, o todas son readonly o ninguna',
          'Solo si las readonly van al final',
          'Sí, puedes mezclar según la lógica del dominio',
          'Solo si la interface tiene la anotación @mutable',
        ],
        correctAnswer: 'Sí, puedes mezclar según la lógica del dominio',
        correctFeedback:
          'Correcto. Es muy común tener \`readonly id\` y \`readonly fechaCreacion\` junto a propiedades mutables como \`nombre\` o \`estado\`.',
        incorrectFeedback:
          'No es correcto. Puedes mezclar propiedades \`readonly\` y mutables en la misma interface. Lo común es hacer \`readonly\` las propiedades que naturalmente no deben cambiar (id, fechaCreacion) y dejar mutables las que sí pueden actualizarse.',
      },
      {
        question: '¿Cuál es la limitación de \`readonly\` en TypeScript?',
        options: [
          'Solo funciona en interfaces, no en type aliases',
          'Es una verificación en compilación, no una garantía real en tiempo de ejecución',
          'Solo protege propiedades de tipo string y number',
          'No funciona en arrays dentro de interfaces',
        ],
        correctAnswer: 'Es una verificación en compilación, no una garantía real en tiempo de ejecución',
        correctFeedback:
          'Correcto. Si conviertes el tipo a \`any\` o usas JavaScript puro, puedes modificar propiedades \`readonly\`. Es una herramienta de desarrollo, no seguridad de tiempo de ejecución.',
        incorrectFeedback:
          'No es correcto. \`readonly\` funciona en interfaces, type aliases y arrays. Su limitación real es que es solo una verificación de TypeScript en tiempo de compilación. En el JavaScript generado, las propiedades siguen siendo mutables — si alguien usa \`any\` o JavaScript puro, puede modificarlas.',
      },
    ],
  },

  // ── Lección 67 ───────────────────────────────────────────────────────────
  {
    slug: 'extender-interfaces',
    title: 'Extender interfaces',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 5,
    description:
      'Aprende cómo una interface puede heredar propiedades de otra usando extends.',
    explanation: `Una de las características más útiles de las interfaces es que pueden **extenderse**: una interface puede heredar las propiedades de otra y agregar las suyas propias. Se hace con la palabra clave \`extends\`.

**Sintaxis**

\`\`\`ts
interface Base {
  id: number
  creadoEn: string
}

interface Usuario extends Base {
  nombre: string
  correo: string
}
// Usuario tiene: id, creadoEn, nombre, correo
\`\`\`

**¿Para qué sirve extends?**

1. **Reutilización**: evita repetir propiedades comunes.
2. **Especialización**: crea tipos más específicos basados en uno general.
3. **Jerarquía de tipos**: modelo natural para entidades relacionadas.

**Ejemplo: Entidades de base de datos**

\`\`\`ts
interface EntidadBase {
  readonly id: number
  creadoEn: string
  actualizadoEn?: string
}

interface Producto extends EntidadBase {
  nombre: string
  precio: number
}

interface Usuario extends EntidadBase {
  nombre: string
  correo: string
}
\`\`\`

Tanto \`Producto\` como \`Usuario\` tienen \`id\`, \`creadoEn\` y \`actualizadoEn\` automáticamente.

**Extender múltiples interfaces**

Una interface puede extender múltiples interfaces a la vez:

\`\`\`ts
interface A { propA: string }
interface B { propB: number }
interface C extends A, B { propC: boolean }
// C tiene: propA, propB, propC
\`\`\`

**Diferencia con intersection (\`&\`)**

Tanto \`extends\` como \`&\` combinan propiedades, pero:
- \`extends\` es específico de interfaces y es más explícito sobre la jerarquía.
- \`&\` funciona con type aliases y es más flexible para combinaciones ad-hoc.

**Una analogía útil**

Es como la herencia en la vida real: un "Estudiante de posgrado" hereda todas las características de un "Estudiante" y agrega las suyas propias (tema de tesis, director, etc.). No necesitas redefinir lo que ya es un estudiante.`,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Interface base para todas las entidades
interface EntidadBase {
  readonly id: number
  creadoEn: string
  actualizadoEn?: string
}

// Interfaces que extienden la base
interface Usuario extends EntidadBase {
  nombre: string
  correo: string
  activo: boolean
}

interface Producto extends EntidadBase {
  nombre: string
  precio: number
  descripcion?: string
  disponible: boolean
}

interface Pedido extends EntidadBase {
  usuario: Usuario
  productos: Producto[]
  total: number
  estado: string
}

// Objetos que usan las interfaces extendidas
const usuario: Usuario = {
  id: 1,                        // de EntidadBase
  creadoEn: "2024-01-01",       // de EntidadBase
  nombre: "Ana García",         // propio de Usuario
  correo: "ana@mail.com",       // propio de Usuario
  activo: true,                 // propio de Usuario
}

const teclado: Producto = {
  id: 101,
  creadoEn: "2024-01-10",
  nombre: "Teclado mecánico",
  precio: 850,
  disponible: true,
}

const pedido: Pedido = {
  id: 5001,
  creadoEn: "2024-02-01",
  usuario,
  productos: [teclado],
  total: 850,
  estado: "pendiente",
}

// Función genérica que acepta cualquier entidad base
function mostrarId(entidad: EntidadBase): void {
  console.log(\`ID: \${entidad.id} | Creado: \${entidad.creadoEn}\`)
}

mostrarId(usuario)   // → ID: 1 | Creado: 2024-01-01
mostrarId(teclado)   // → ID: 101 | Creado: 2024-01-10
mostrarId(pedido)    // → ID: 5001 | Creado: 2024-02-01

// Extender múltiples interfaces
interface Auditable {
  ultimoEditor: string
}

interface ProductoAuditado extends Producto, Auditable {
  motivoCambio?: string
}

const productoAuditado: ProductoAuditado = {
  id: 102,
  creadoEn: "2024-01-15",
  nombre: "Mouse inalámbrico",
  precio: 350,
  disponible: true,
  ultimoEditor: "Carlos",
  motivoCambio: "Actualización de precio",
}

console.log(\`Editor: \${productoAuditado.ultimoEditor}\`)
console.log(\`Precio: $\${productoAuditado.precio}\`)`,
    keyPoints: [
      'Una interface puede extender otra con `interface B extends A { propias }`. B hereda todas las propiedades de A.',
      'Esto permite reutilizar propiedades comunes sin repetirlas.',
      'Puedes extender múltiples interfaces: `interface C extends A, B { }\`.',
      'Una interface que extiende otra tiene todas sus propiedades más las propias.',
      'Los objetos de la interface extendida deben cumplir con todas las propiedades (las heredadas y las propias).',
      'La extensión de interfaces es ideal para crear jerarquías de tipos relacionados.',
    ],
    exercise: {
      description:
        'Crea una interface \`Entidad\` con \`id\` (readonly number) y \`activo\` (boolean). Luego crea tres interfaces que la extiendan: \`Estudiante\` (con \`nombre\`, \`promedio\`), \`Instructor\` (con \`nombre\`, \`especialidad\`) y \`Curso\` (con \`titulo\`, \`instructor: Instructor\`, \`estudiantes: Estudiante[]\`). Escribe una función \`contarActivos\` que reciba \`Entidad[]\` y retorne cuántos están activos.',
      hint: 'La función \`contarActivos\` acepta \`Entidad[]\` y funciona con cualquier tipo que extienda \`Entidad\`. Usa \`.filter((e) => e.activo).length\`. Puedes pasar arrays de \`Estudiante[]\`, \`Instructor[]\` o mezclas.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis para que \`Empleado\` herede las propiedades de \`Persona\`?',
        options: [
          'interface Empleado inherits Persona { }',
          'interface Empleado implements Persona { }',
          'interface Empleado extends Persona { }',
          'interface Empleado: Persona { }',
        ],
        correctAnswer: 'interface Empleado extends Persona { }',
        correctFeedback:
          'Correcto. La palabra clave \`extends\` indica herencia entre interfaces.',
        incorrectFeedback:
          'No es correcto. La palabra clave correcta es \`extends\`: \`interface Empleado extends Persona { }\`. \`implements\` se usa con clases, no entre interfaces. \`inherits\` no existe en TypeScript.',
      },
      {
        question: '¿Qué propiedades tiene \`interface Admin extends Usuario\` si Usuario tiene \`nombre\` y \`correo\`?',
        options: [
          'Solo las propiedades nuevas que define Admin',
          'Solo nombre y correo, las de Usuario',
          'Todas: nombre, correo (de Usuario) más las propias de Admin',
          'Depende de si Admin redefine las mismas propiedades',
        ],
        correctAnswer: 'Todas: nombre, correo (de Usuario) más las propias de Admin',
        correctFeedback:
          'Correcto. \`extends\` hereda todas las propiedades de la interface padre. Admin tendrá \`nombre\`, \`correo\` y todo lo que Admin defina adicionalmente.',
        incorrectFeedback:
          'No es correcto. Cuando una interface extiende otra, hereda TODAS las propiedades de la interface padre. Si \`Admin extends Usuario\` y \`Usuario\` tiene \`nombre\` y \`correo\`, entonces \`Admin\` también los tiene, más cualquier propiedad adicional que Admin defina.',
      },
      {
        question: '¿Puede una interface extender múltiples interfaces a la vez?',
        options: [
          'No, solo puede extender una',
          'Sí, separando los nombres con comas: \`extends A, B\`',
          'Solo si A y B tienen las mismas propiedades',
          'Solo en TypeScript 5.0 o superior',
        ],
        correctAnswer: 'Sí, separando los nombres con comas: \`extends A, B\`',
        correctFeedback:
          'Correcto. TypeScript permite extender múltiples interfaces: \`interface C extends A, B { }\`. La interface resultante tiene todas las propiedades de A, B y C.',
        incorrectFeedback:
          'No es correcto. TypeScript permite extender múltiples interfaces separando los nombres con comas: \`interface C extends A, B { }\`. La interface resultante tendrá todas las propiedades de A, B, y las propias de C.',
      },
      {
        question: '¿Cuál es la diferencia entre \`extends\` en interfaces y \`&\` en type aliases?',
        options: [
          'Son completamente equivalentes',
          '\`extends\` es para herencia natural de interfaces; \`&\` es para combinaciones ad-hoc con type aliases',
          '\`extends\` solo funciona con un nivel de herencia; \`&\` puede hacer más niveles',
          '\`&\` incluye las propiedades opcionales; \`extends\` no',
        ],
        correctAnswer: '\`extends\` es para herencia natural de interfaces; \`&\` es para combinaciones ad-hoc con type aliases',
        correctFeedback:
          'Correcto. \`extends\` es más expresivo para jerarquías de tipos. \`&\` es más flexible para combinaciones ad-hoc entre type aliases.',
        incorrectFeedback:
          'No es correcto. Ambos combinan tipos, pero \`extends\` es específico de interfaces y expresa herencia de forma más natural. \`&\` (intersection) funciona con type aliases y es más flexible para combinaciones sin jerarquía explícita. Ambos pueden tener múltiples niveles.',
      },
      {
        question: '¿Por qué es útil una interface base como \`EntidadBase\` con \`id\` y \`creadoEn\`?',
        options: [
          'Hace el código más lento pero más legible',
          'Evita repetir las mismas propiedades en múltiples interfaces relacionadas',
          'Solo sirve para entidades de base de datos reales',
          'TypeScript la requiere para objetos persistentes',
        ],
        correctAnswer: 'Evita repetir las mismas propiedades en múltiples interfaces relacionadas',
        correctFeedback:
          'Correcto. En lugar de poner \`id\` y \`creadoEn\` en Usuario, Producto y Pedido por separado, los defines en \`EntidadBase\` y los heredas automáticamente.',
        incorrectFeedback:
          'No es correcto. Una interface base es útil porque evita repetir propiedades comunes en múltiples interfaces. Si tienes 10 entidades que todas tienen \`id\` y \`creadoEn\`, defines esas propiedades una sola vez en \`EntidadBase\` y las 10 la extienden.',
      },
    ],
  },

  // ── Lección 68 ───────────────────────────────────────────────────────────
  {
    slug: 'interfaces-para-funciones',
    title: 'Interfaces para funciones',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 6,
    description:
      'Aprende cómo describir la forma de una función usando interfaces.',
    explanation: `Además de describir objetos, las interfaces también pueden describir la forma de una función. Esto es útil cuando tienes patrones de función que quieres nombrar y reutilizar.

**Sintaxis**

\`\`\`ts
interface NombreFuncion {
  (param1: tipo1, param2: tipo2): tipoRetorno
}
\`\`\`

**Ejemplo básico**

\`\`\`ts
interface Comparador {
  (a: number, b: number): number
}

const ordenarAscendente: Comparador = (a, b) => a - b
const ordenarDescendente: Comparador = (a, b) => b - a
\`\`\`

**¿Cuándo usar interface para funciones vs. type alias?**

Para tipos de función, los type aliases son más comunes y más legibles:

\`\`\`ts
// Con type alias (más legible)
type Comparador = (a: number, b: number) => number

// Con interface (menos común para funciones simples)
interface Comparador {
  (a: number, b: number): number
}
\`\`\`

La interface para función es más útil cuando también quieres describir propiedades en la misma función:

\`\`\`ts
interface FuncionConMetadata {
  (n: number): string      // la función en sí
  version: string          // una propiedad de la función
  nombreFuncion: string    // otra propiedad
}
\`\`\`

**Interfaces que mezclan propiedades y métodos**

Las interfaces pueden describir objetos con métodos:

\`\`\`ts
interface Calculadora {
  // Propiedades
  historial: number[]

  // Métodos
  sumar(a: number, b: number): number
  restar(a: number, b: number): number
  limpiarHistorial(): void
}
\`\`\`

**Métodos en interfaces vs. propiedades de tipo función**

Hay dos formas de declarar métodos en interfaces:

\`\`\`ts
interface Ejemplo {
  // Forma 1: método (sintaxis de método)
  calcular(n: number): number

  // Forma 2: propiedad de tipo función
  calcular: (n: number) => number
}
\`\`\`

Ambas son válidas, pero la forma 1 es más común en interfaces.`,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Interface para describir la forma de un objeto con métodos
interface GestorTareas {
  tareas: string[]
  agregar(tarea: string): void
  eliminar(tarea: string): boolean
  listar(): string[]
  contarPendientes(): number
}

// Implementación que cumple con la interface
const miGestor: GestorTareas = {
  tareas: [],

  agregar(tarea: string): void {
    this.tareas.push(tarea)
    console.log(\`Tarea agregada: "\${tarea}"\`)
  },

  eliminar(tarea: string): boolean {
    const indice = this.tareas.indexOf(tarea)
    if (indice !== -1) {
      this.tareas.splice(indice, 1)
      return true
    }
    return false
  },

  listar(): string[] {
    return [...this.tareas]
  },

  contarPendientes(): number {
    return this.tareas.length
  },
}

miGestor.agregar("Estudiar TypeScript")
miGestor.agregar("Hacer ejercicio")
miGestor.agregar("Leer documentación")

console.log("Pendientes:", miGestor.contarPendientes())  // → 3
console.log("Lista:", miGestor.listar())

miGestor.eliminar("Hacer ejercicio")
console.log("Después de eliminar:", miGestor.contarPendientes())  // → 2

// Interface para función con type alias (más común)
type Transformador = (n: number) => number
type Predicado = (n: number) => boolean

function aplicarSiCumple(
  numeros: number[],
  condicion: Predicado,
  transformacion: Transformador
): number[] {
  return numeros.filter(condicion).map(transformacion)
}

const numeros = [1, -2, 3, -4, 5, 6]
const positivos = aplicarSiCumple(
  numeros,
  (n) => n > 0,   // condicion
  (n) => n * 2    // transformacion
)
console.log("Positivos duplicados:", positivos)  // → [2, 6, 10, 12]`,
    keyPoints: [
      'Las interfaces pueden describir funciones con la sintaxis `interface F { (params): retorno }`.',
      'Para tipos de función simples, los type aliases son más legibles y más comunes.',
      'Las interfaces son más útiles para describir objetos con múltiples métodos.',
      'Los métodos en interfaces se declaran como `nombreMetodo(params): retorno`.',
      'Hay dos formas de declarar métodos: sintaxis de método (`fn(a): b`) y propiedad función (`fn: (a) => b`).',
      'Un objeto que implementa la interface debe tener todos los métodos y propiedades declarados.',
    ],
    exercise: {
      description:
        'Crea una interface `Calculadora` con: propiedad `memoria` (number), y métodos `sumar`, `restar`, `multiplicar`, `dividir` (todos reciben dos números y retornan number), `guardarEnMemoria` (recibe number, retorna void) y `recuperarMemoria` (no recibe nada, retorna number). Implementa la calculadora como un objeto literal y prueba las operaciones.',
      hint: 'Para implementar la interface, crea un objeto `const calc: Calculadora = { memoria: 0, sumar(a, b) { return a + b }, ... }`. Para `dividir` considera el caso de división por cero.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis para declarar que una interface describe una función?',
        options: [
          'interface Fn { function(n: number): string }',
          'interface Fn { (n: number): string }',
          'interface Fn => (n: number): string',
          'interface Fn: (n: number) => string',
        ],
        correctAnswer: 'interface Fn { (n: number): string }',
        correctFeedback:
          'Correcto. La sintaxis usa paréntesis con los parámetros y el retorno, sin la palabra `function`.',
        incorrectFeedback:
          'No es correcto. La sintaxis de interface para función es `interface Fn { (params): retorno }`. No se usa la palabra `function` dentro de la interface ni `=>`.',
      },
      {
        question: '¿Cuál es la forma más común de describir tipos de función en TypeScript moderno?',
        options: [
          'Interface de función',
          'Type alias de función',
          'Clase abstracta',
          'Función genérica',
        ],
        correctAnswer: 'Type alias de función',
        correctFeedback:
          'Correcto. Para tipos de función simples, los type aliases (`type F = (n: number) => string`) son más legibles y más comúnmente usados.',
        incorrectFeedback:
          'No es correcto. Para tipos de función simples, los type aliases son más comunes porque la sintaxis es más clara: `type F = (n: number) => string\`. Las interfaces de función son menos frecuentes salvo para casos especiales.',
      },
      {
        question: '¿Cuáles son las dos formas válidas de declarar un método \`calcular(n: number): number\` en una interface?',
        options: [
          'calcular(n: number): number  ó  calcular: (n: number) => number',
          'function calcular(n: number): number  ó  calcular = (n: number) => number',
          'readonly calcular(n: number): number  ó  optional calcular(n: number): number',
          'Solo existe una forma válida',
        ],
        correctAnswer: 'calcular(n: number): number  ó  calcular: (n: number) => number',
        correctFeedback:
          'Correcto. Ambas formas son válidas: la sintaxis de método \`calcular(n): number\` y la propiedad función \`calcular: (n) => number\`.',
        incorrectFeedback:
          'No es correcto. Hay dos formas válidas: la sintaxis de método \`calcular(n: number): number\` y la propiedad de tipo función \`calcular: (n: number) => number\`. Ambas pueden usarse en una interface. No se usa \`function\` dentro de la interface.',
      },
      {
        question: '¿Qué debe hacer un objeto para "implementar" una interface con métodos?',
        options: [
          'Declarar \`implements NombreInterface\` en su definición',
          'Tener todas las propiedades y métodos que la interface define, con los tipos correctos',
          'Extender la interface con \`extends\`',
          'Registrarse en el sistema de tipos de TypeScript',
        ],
        correctAnswer: 'Tener todas las propiedades y métodos que la interface define, con los tipos correctos',
        correctFeedback:
          'Correcto. TypeScript usa structural typing: si el objeto tiene todas las propiedades y métodos requeridos con los tipos correctos, es compatible con la interface.',
        incorrectFeedback:
          'No es correcto. TypeScript usa structural typing. Un objeto "implementa" una interface automáticamente si tiene todas las propiedades y métodos con los tipos correctos. No se necesita una declaración especial \`implements\` en objetos literales (solo en clases).',
      },
      {
        question: '¿Cuándo es más útil una interface para función que un type alias?',
        options: [
          'Siempre, las interfaces son más poderosas',
          'Cuando la función también tiene propiedades estáticas que necesitas describir',
          'Cuando el retorno es void',
          'Solo en TypeScript con modo estricto',
        ],
        correctAnswer: 'Cuando la función también tiene propiedades estáticas que necesitas describir',
        correctFeedback:
          'Correcto. Las interfaces de función son útiles cuando quieres describir tanto la función como propiedades que tiene adjuntas (como \`version\` o \`nombre\`).',
        incorrectFeedback:
          'No es correcto. Los type aliases son suficientes para la mayoría de funciones. Las interfaces de función tienen ventaja cuando necesitas describir una función que además tiene propiedades adjuntas (funciones son objetos en JavaScript). Para funciones simples, el type alias es más claro.',
      },
    ],
  },

  // ── Lección 69 ───────────────────────────────────────────────────────────
  {
    slug: 'interfaces-estructuras-reales',
    title: 'Interfaces en estructuras reales',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 7,
    description:
      'Aprende a usar interfaces para modelar datos de usuarios, productos, cursos o respuestas simples.',
    explanation: `Las interfaces brillan cuando modelas datos reales de una aplicación. En esta lección verás ejemplos prácticos de interfaces aplicadas a situaciones comunes de desarrollo web.

**Modelar datos de una API**

Las APIs devuelven datos estructurados. Las interfaces ayudan a describir esos datos:

\`\`\`ts
interface RespuestaLogin {
  token: string
  usuario: {
    id: number
    nombre: string
    rol: string
  }
  expira: string
}
\`\`\`

**Modelar formularios**

\`\`\`ts
interface FormularioRegistro {
  username: string
  correo: string
  contrasena: string
  confirmarContrasena: string
  aceptaTerminos: boolean
}
\`\`\`

**Modelar estados de carga**

Un patrón muy común es el estado de carga de datos:

\`\`\`ts
interface EstadoCarga<T> {
  cargando: boolean
  datos?: T
  error?: string
}
\`\`\`

**Modelar un carrito de compras**

\`\`\`ts
interface ItemCarrito {
  producto: Producto
  cantidad: number
  precioUnitario: number
}

interface Carrito {
  items: ItemCarrito[]
  calcularTotal(): number
  agregarItem(producto: Producto, cantidad: number): void
}
\`\`\`

**Por qué las interfaces son la elección natural aquí**

Para estas estructuras de datos de dominio, las interfaces son preferidas porque:
1. Sus nombres comunican entidades del negocio.
2. Pueden extenderse cuando los requisitos cambian.
3. Son compatibles con clases que puedan implementarlas.
4. La herramienta de autocompletado del editor funciona muy bien con ellas.`,
    codeExample: `// ── archivo: interfaces.ts ───────────────────────────────────────────────

// Interfaces para un sistema de cursos

interface Instructor {
  id: number
  nombre: string
  especialidad: string
  avatar?: string
}

interface Leccion {
  readonly id: number
  titulo: string
  duracion: number
  completada: boolean
  tipo: "video" | "texto" | "quiz"
}

interface Modulo {
  readonly id: number
  titulo: string
  lecciones: Leccion[]
}

interface Curso {
  readonly id: number
  titulo: string
  descripcion: string
  instructor: Instructor
  modulos: Modulo[]
  precio: number
  gratuito: boolean
  nivel: "principiante" | "intermedio" | "avanzado"
  etiquetas?: string[]
}

// Funciones que trabajan con estas interfaces
function calcularProgresoModulo(modulo: Modulo): number {
  if (modulo.lecciones.length === 0) return 0
  const completadas = modulo.lecciones.filter((l) => l.completada).length
  return Math.round((completadas / modulo.lecciones.length) * 100)
}

function calcularProgresoCurso(curso: Curso): number {
  const totalLecciones = curso.modulos.reduce((sum, m) => sum + m.lecciones.length, 0)
  if (totalLecciones === 0) return 0
  const completadas = curso.modulos.reduce((sum, m) =>
    sum + m.lecciones.filter((l) => l.completada).length, 0
  )
  return Math.round((completadas / totalLecciones) * 100)
}

function duracionTotalCurso(curso: Curso): number {
  return curso.modulos.reduce((sum, m) =>
    sum + m.lecciones.reduce((s, l) => s + l.duracion, 0), 0
  )
}

// Datos de ejemplo
const instructor: Instructor = {
  id: 1,
  nombre: "Ronaldo",
  especialidad: "TypeScript y React",
}

const leccion1: Leccion = { id: 1, titulo: "Introducción", duracion: 10, completada: true, tipo: "video" }
const leccion2: Leccion = { id: 2, titulo: "Variables", duracion: 15, completada: true, tipo: "video" }
const leccion3: Leccion = { id: 3, titulo: "Quiz básico", duracion: 5, completada: false, tipo: "quiz" }

const modulo: Modulo = { id: 1, titulo: "Fundamentos", lecciones: [leccion1, leccion2, leccion3] }

const curso: Curso = {
  id: 101,
  titulo: "TypeScript desde Cero",
  descripcion: "Aprende TypeScript paso a paso",
  instructor,
  modulos: [modulo],
  precio: 0,
  gratuito: true,
  nivel: "principiante",
  etiquetas: ["typescript", "javascript", "programación"],
}

console.log(\`Progreso módulo: \${calcularProgresoModulo(modulo)}%\`)   // → 67%
console.log(\`Progreso curso: \${calcularProgresoCurso(curso)}%\`)      // → 67%
console.log(\`Duración total: \${duracionTotalCurso(curso)} minutos\`)  // → 30 minutos`,
    keyPoints: [
      'Las interfaces son la herramienta principal para modelar entidades del dominio de negocio.',
      'Modela respuestas de API, formularios, estados de carga y carritos con interfaces.',
      'Las interfaces anidadas reflejan relaciones entre entidades (Curso tiene Módulos, Módulos tienen Lecciones).',
      'Las propiedades opcionales capturan campos que no siempre están presentes en los datos reales.',
      'Las interfaces bien diseñadas hacen el autocompletado del editor más útil.',
      'Combina `readonly` con interfaces para propiedades que no deben cambiar (ids, fechas de creación).',
    ],
    exercise: {
      description:
        'Diseña interfaces para un sistema de tienda online: `Direccion\` (calle, ciudad, estado, codigoPostal), \`Cliente\` (id readonly, nombre, correo, direccion: Direccion, fechaRegistro readonly), \`ItemPedido\` (producto: Producto simplificado, cantidad, precioUnitario), y \`Pedido\` (id readonly, cliente: Cliente, items: ItemPedido[], estado, fechaCreacion readonly, fechaEntrega?). Escribe funciones \`calcularTotalPedido\` y \`obtenerResumenPedido\`.',
      hint: 'Para \`calcularTotalPedido\` suma \`item.precioUnitario * item.cantidad\` de cada item. Para \`obtenerResumenPedido\` retorna un objeto con \`numItems\`, \`total\`, \`cliente\` (nombre) y \`estado\`.',
    },
    quiz: [
      {
        question: '¿Por qué las interfaces son la elección natural para modelar entidades de dominio como Usuario o Producto?',
        options: [
          'Porque son más rápidas que los type aliases',
          'Porque pueden extenderse, tienen nombres descriptivos y son compatibles con clases',
          'Porque solo las interfaces pueden tener propiedades opcionales',
          'Porque TypeScript optimiza mejor el código con interfaces',
        ],
        correctAnswer: 'Porque pueden extenderse, tienen nombres descriptivos y son compatibles con clases',
        correctFeedback:
          'Correcto. Las interfaces son naturales para entidades de dominio porque pueden extenderse para especialización, sus nombres comunican entidades del negocio, y son compatibles con clases.',
        incorrectFeedback:
          'No es correcto. Las interfaces son preferidas para entidades de dominio porque pueden extenderse con \`extends\`, son compatibles con clases que puedan implementarlas, y sus nombres (\`Usuario\`, \`Producto\`) comunican entidades del negocio naturalmente.',
      },
      {
        question: '¿Cuál es la forma más clara de modelar una relación "Curso tiene múltiples Módulos" con interfaces?',
        options: [
          'Combinar todo en una sola interface grande',
          'Usar \`modulos: Modulo[]\` como propiedad en la interface Curso',
          'Usar herencia: \`interface Curso extends Modulo\`',
          'Usar string para el módulo y parsearlo luego',
        ],
        correctAnswer: 'Usar \`modulos: Modulo[]\` como propiedad en la interface Curso',
        correctFeedback:
          'Correcto. La composición mediante arrays de interfaces es la forma natural de modelar relaciones uno-a-muchos.',
        incorrectFeedback:
          'No es correcto. Para modelar "Curso tiene Módulos", se usa composición: \`modulos: Modulo[]\` como propiedad en \`Curso\`. La herencia (\`extends\`) es para "un Curso ES un Módulo", que no tiene sentido aquí. Una interface grande mezclando todo es difícil de mantener.',
      },
      {
        question: '¿Cuándo usarías una propiedad opcional en la interface \`Pedido\`?',
        options: [
          'Para propiedades que no son importantes',
          'Para campos que pueden o no estar presentes según el estado del pedido (como fechaEntrega)',
          'Solo para propiedades de tipo boolean',
          'Para hacer la interface más flexible en general',
        ],
        correctAnswer: 'Para campos que pueden o no estar presentes según el estado del pedido (como fechaEntrega)',
        correctFeedback:
          'Correcto. \`fechaEntrega?\` es opcional porque no siempre existe — un pedido pendiente no tiene fecha de entrega todavía.',
        incorrectFeedback:
          'No es correcto. Las propiedades opcionales se usan para campos que genuinamente pueden no estar presentes. Por ejemplo, \`fechaEntrega?\` en un pedido porque un pedido pendiente aún no tiene fecha de entrega. No se trata de importancia sino de presencia real de los datos.',
      },
      {
        question: '¿Qué patrón describe mejor una respuesta de API con estado de carga?',
        options: [
          'Una función que retorna string',
          'Una interface con \`cargando: boolean\`, \`datos?: T\` y \`error?: string\`',
          'Un array de cualquier tipo',
          'Una interface con todas las propiedades requeridas',
        ],
        correctAnswer: 'Una interface con \`cargando: boolean\`, \`datos?: T\` y \`error?: string\`',
        correctFeedback:
          'Correcto. Este patrón captura los tres estados posibles: cargando, datos disponibles, o error. \`datos\` y \`error\` son opcionales porque solo existen en ciertos estados.',
        incorrectFeedback:
          'No es correcto. El patrón estándar para estados de carga tiene tres partes: \`cargando\` (boolean), \`datos\` (opcional, solo cuando la carga terminó con éxito), y \`error\` (opcional, solo cuando hubo un problema). Aprenderás más sobre esto al estudiar union types.',
      },
      {
        question: '¿Por qué es útil marcar \`id\` y \`fechaCreacion\` como \`readonly\` en interfaces de dominio?',
        options: [
          'Para hacerlas visibles en el autocompletado del editor',
          'Porque son datos del servidor que no deben modificarse localmente',
          'Para que TypeScript las optimice mejor',
          'Solo por estética',
        ],
        correctAnswer: 'Porque son datos del servidor que no deben modificarse localmente',
        correctFeedback:
          'Correcto. El id y la fecha de creación son asignados por el servidor/base de datos y nunca deberían modificarse en el cliente. \`readonly\` previene errores accidentales.',
        incorrectFeedback:
          'No es correcto. Marcar \`id\` y \`fechaCreacion\` como \`readonly\` tiene sentido de negocio: son datos asignados por el servidor que nunca deben modificarse en el cliente. Si alguien intenta cambiar el id de un pedido, TypeScript lo previene inmediatamente.',
      },
    ],
  },

  // ── Lección 70 ───────────────────────────────────────────────────────────
  {
    slug: 'interfaces-vs-type-aliases',
    title: 'Interfaces vs type aliases',
    module: 'Interfaces',
    moduleNumber: 9,
    order: 8,
    description:
      'Aprende las diferencias prácticas entre interfaces y type aliases, y cuándo usar cada uno.',
    explanation: `Una pregunta muy frecuente en TypeScript es: ¿debo usar \`interface\` o \`type\`? Ambos son muy similares para describir objetos, pero tienen diferencias que importan en ciertos casos.

**Lo que ambos pueden hacer:**
- Describir la forma de un objeto.
- Tener propiedades opcionales (\`?\`) y \`readonly\`.
- Usarse como tipo de parámetros y retornos.
- Ser usados en arrays y composición.

**Lo que las interfaces pueden y los type aliases NO:**

1. **Declaración de fusión (declaration merging)**:

\`\`\`ts
interface Usuario { nombre: string }
interface Usuario { edad: number }
// Válido: se fusionan en { nombre: string; edad: number }

type Usuario = { nombre: string }
type Usuario = { edad: number }
// Error: identificador duplicado
\`\`\`

2. **Sintaxis natural para herencia**:

\`\`\`ts
interface Admin extends Usuario { permisos: string[] }
// vs.
type Admin = Usuario & { permisos: string[] }
\`\`\`

**Lo que los type aliases pueden y las interfaces NO:**

1. **Uniones de tipos**:

\`\`\`ts
type Resultado = "exito" | "error"  // ✓ con type
// interface Resultado = "exito" | "error"  // No es posible con interface
\`\`\`

2. **Tipos primitivos y de función**:

\`\`\`ts
type Email = string           // ✓ con type
type Callback = () => void    // ✓ con type
\`\`\`

3. **Intersections ad-hoc**:

\`\`\`ts
type A = B & C & { extra: boolean }  // ✓ con type
\`\`\`

**Regla práctica para elegir**

- Usa **interface** para describir formas de objetos que pueden extenderse o que representan entidades de dominio.
- Usa **type alias** para uniones, intersections, tipos de función, primitivos semánticos, o cuando prefieras la flexibilidad.

La comunidad TypeScript tiende a preferir interfaces para objetos y type aliases para todo lo demás. Pero ambos son válidos y a veces la preferencia es simplemente de estilo.`,
    codeExample: `// ── archivo: comparacion.ts ──────────────────────────────────────────────

// ── Para OBJETOS: interface y type son casi equivalentes ──────────────────
interface UsuarioI {
  nombre: string
  edad: number
}

type UsuarioT = {
  nombre: string
  edad: number
}

// Ambos se usan exactamente igual
const u1: UsuarioI = { nombre: "Ana", edad: 25 }
const u2: UsuarioT = { nombre: "Ana", edad: 25 }

// ── Interface: puede extenderse ────────────────────────────────────────────
interface Persona {
  nombre: string
}

interface Empleado extends Persona {
  empresa: string
}

// Type alias: usa & para lo mismo
type PersonaT = { nombre: string }
type EmpleadoT = PersonaT & { empresa: string }

// ── Type alias: puede hacer uniones ───────────────────────────────────────
type Estado = "activo" | "inactivo" | "suspendido"
// interface Estado = "activo" | "inactivo"  // No válido

type Resultado<T> = { datos: T } | { error: string }

// ── Type alias: para funciones primitivas ────────────────────────────────
type Comparador = (a: number, b: number) => number
type Email = string  // semántico

// ── Cuándo usar cada uno en la práctica ─────────────────────────────────

// Entidad de dominio → interface
interface Curso {
  id: number
  titulo: string
  precio: number
}

// Extensión de entidad → interface extends
interface CursoGratuito extends Curso {
  razonGratuito: string
}

// Unión de tipos → type alias
type EstadoCurso = "borrador" | "publicado" | "archivado"

// Tipo de función → type alias
type ManejadorError = (error: string) => void

// Combinación flexible → type alias
type CursoConEstado = Curso & {
  estado: EstadoCurso
  publicadoEn?: string
}

const curso: CursoConEstado = {
  id: 1,
  titulo: "TypeScript",
  precio: 0,
  estado: "publicado",
  publicadoEn: "2024-01-01",
}

console.log(\`\${curso.titulo}: \${curso.estado}\`)  // → TypeScript: publicado`,
    keyPoints: [
      'Para objetos simples, interfaces y type aliases son intercambiables.',
      'Las interfaces soportan declaración de fusión (declaration merging) — los type aliases no.',
      'Las interfaces tienen la sintaxis `extends` para herencia; los type aliases usan `&`.',
      'Solo los type aliases pueden definir uniones (`"a" | "b"`), primitivos semánticos y funciones simples.',
      'La convención de la comunidad: interfaces para objetos/entidades, type aliases para todo lo demás.',
      'Consistencia dentro del proyecto importa más que elegir la opción "perfecta".',
    ],
    exercise: {
      description:
        'Crea un pequeño sistema usando la herramienta correcta para cada caso: usa `interface` para `Usuario` y `Publicacion`, usa `type alias` para `EstadoPublicacion` ("borrador" | "publicado" | "archivado"), usa `interface extends` para `PublicacionExtendida` que extienda `Publicacion` con campos de analítica. Luego escribe funciones que usen estos tipos. Agrega comentarios explicando por qué elegiste interface o type en cada caso.',
      hint: 'Usa interface para entidades con propiedades estructuradas. Usa type para uniones de strings. Usa extends cuando una entidad es una versión más específica de otra.',
    },
    quiz: [
      {
        question: '¿Qué puede hacer un type alias que una interface NO puede?',
        options: [
          'Tener propiedades opcionales',
          'Usarse como tipo de parámetro',
          'Definir uniones de tipos como `"a" | "b"`',
          'Tener propiedades readonly',
        ],
        correctAnswer: 'Definir uniones de tipos como `"a" | "b"`',
        correctFeedback:
          'Correcto. Las uniones de tipos solo son posibles con `type`. No puedes hacer `interface Estado = "a" | "b"`.',
        incorrectFeedback:
          'No es correcto. Tanto interfaces como type aliases pueden tener propiedades opcionales, readonly, y usarse como tipos de parámetros. Lo que solo puede hacer un type alias es definir uniones: `type Estado = "a" | "b" | "c"\`.',
      },
      {
        question: '¿Qué es la "declaración de fusión" (declaration merging) en interfaces?',
        options: [
          'Combinar dos interfaces con el operador &',
          'Declarar la misma interface dos veces — TypeScript las fusiona automáticamente',
          'Importar una interface y extenderla',
          'Mezclar interface con type alias',
        ],
        correctAnswer: 'Declarar la misma interface dos veces — TypeScript las fusiona automáticamente',
        correctFeedback:
          'Correcto. Si declaras \`interface Usuario { nombre: string }\` y luego \`interface Usuario { edad: number }\`, TypeScript las fusiona en una sola interface con ambas propiedades.',
        incorrectFeedback:
          'No es correcto. La declaración de fusión permite declarar la misma interface en múltiples lugares y TypeScript las combina. Si declares \`interface A { x: number }\` dos veces, TypeScript las fusiona en \`{ x: number; x: number }\` (o agrega propiedades nuevas si difieren). Los type aliases no permiten esto.',
      },
      {
        question: '¿Cuál es la equivalencia entre \`interface Admin extends Usuario\` y type aliases?',
        options: [
          'type Admin = Admin | Usuario',
          'type Admin = Admin extends Usuario',
          'type Admin = Usuario & { propiedades de Admin }',
          'No existe equivalencia',
        ],
        correctAnswer: 'type Admin = Usuario & { propiedades de Admin }',
        correctFeedback:
          'Correcto. \`extends\` en interfaces y \`&\` en type aliases producen resultados similares — combinar propiedades de múltiples tipos.',
        incorrectFeedback:
          'No es correcto. La equivalencia es \`type Admin = Usuario & { propiedadesDeAdmin }\`. Tanto \`interface extends\` como la intersection \`&\` combinan propiedades, aunque con diferencias sutiles en comportamiento y semántica.',
      },
      {
        question: '¿Cuál es la convención de la comunidad TypeScript para elegir entre interface y type?',
        options: [
          'Siempre usar type, es más moderno',
          'Siempre usar interface, es más legible',
          'Interface para objetos/entidades, type alias para uniones y tipos funcionales',
          'El compilador elige automáticamente',
        ],
        correctAnswer: 'Interface para objetos/entidades, type alias para uniones y tipos funcionales',
        correctFeedback:
          'Correcto. Esta es la convención más común: interfaces para entidades de dominio (que pueden necesitar extensión), type aliases para uniones, funciones y combinaciones más complejas.',
        incorrectFeedback:
          'No es correcto. La convención más aceptada en la comunidad es: usa interfaces para entidades de dominio y objetos que puedan extenderse, y type aliases para uniones de tipos, tipos de función, primitivos semánticos y combinaciones complejas.',
      },
      {
        question: '¿Cuál es el factor más importante al elegir entre interface y type en un proyecto?',
        options: [
          'El rendimiento en tiempo de ejecución',
          'La versión de TypeScript instalada',
          'La consistencia dentro del equipo y del proyecto',
          'El número de propiedades que tendrá el tipo',
        ],
        correctAnswer: 'La consistencia dentro del equipo y del proyecto',
        correctFeedback:
          'Correcto. Más que la elección "perfecta", lo que importa es ser consistente. Si el equipo usa interfaces para todo, sé consistente. Si usa type aliases, también.',
        incorrectFeedback:
          'No es correcto. Ni el rendimiento (ambos desaparecen al compilar) ni la versión de TypeScript determinan la elección. Lo más importante es la consistencia dentro del equipo: si todos usan el mismo estilo, el código es más fácil de leer y mantener.',
      },
    ],
  },
]

export const tsModule9: Module = {
  number: 9,
  title: 'Interfaces',
  level: 'nivel2',
  lessons: lessonsTsModule9,
}
