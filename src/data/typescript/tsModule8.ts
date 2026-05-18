import type { Lesson, Module } from '@/types'

export const lessonsTsModule8: Lesson[] = [
  // ── Lección 55 ───────────────────────────────────────────────────────────
  {
    slug: 'que-es-type-alias',
    title: '¿Qué es un type alias?',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 1,
    description:
      'Aprende qué es un type alias y cómo permite darle nombre a una estructura de tipos.',
    explanation: `Un **type alias** (alias de tipo) es una forma de darle un nombre a un tipo en TypeScript. En lugar de repetir la misma estructura de tipo en varios lugares de tu código, puedes definirla una vez con un nombre y reutilizarla.

**Sintaxis**

\`\`\`ts
type NombreDelTipo = definicionDelTipo
\`\`\`

**Ejemplo simple**

Sin type alias:

\`\`\`ts
function saludar(usuario: { nombre: string; edad: number }): void { }
function actualizar(usuario: { nombre: string; edad: number }): void { }
function eliminar(usuario: { nombre: string; edad: number }): void { }
\`\`\`

Con type alias:

\`\`\`ts
type Usuario = { nombre: string; edad: number }

function saludar(usuario: Usuario): void { }
function actualizar(usuario: Usuario): void { }
function eliminar(usuario: Usuario): void { }
\`\`\`

Mucho más limpio y fácil de mantener.

**¿Para qué sirve un type alias?**

1. **Reutilización**: define el tipo una vez, úsalo en muchos lugares.
2. **Legibilidad**: \`Usuario\` es más claro que \`{ nombre: string; edad: number }\`.
3. **Mantenimiento**: si el tipo cambia, solo lo cambias en un lugar.
4. **Documentación**: el nombre del tipo comunica qué representa.

**Type aliases para distintos tipos**

\`\`\`ts
// Para objetos
type Producto = { nombre: string; precio: number }

// Para primitivos con significado semántico
type Email = string
type Edad = number

// Para arrays
type ListaDeNombres = string[]

// Para funciones
type Comparador = (a: number, b: number) => boolean

// Para uniones
type EstadoOrden = "pendiente" | "enviado" | "entregado"
\`\`\`

**Una analogía útil**

Un type alias es como una plantilla o molde en una fábrica. En lugar de describir la forma del producto cada vez que lo necesitas, tienes el molde con un nombre y lo reutilizas cuantas veces quieras.

**Nota importante**

Los type aliases no crean tipos nuevos — son solo nombres para tipos que ya existen. TypeScript los reemplaza internamente con su definición. Por eso un \`Usuario\` es completamente compatible con \`{ nombre: string; edad: number }\` si tienen la misma estructura.`,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// Type alias para un objeto
type Estudiante = {
  id: number
  nombre: string
  nota: number
  activo: boolean
}

// Ahora podemos usar Estudiante en cualquier parte
const est1: Estudiante = { id: 1, nombre: "Ana", nota: 9.0, activo: true }
const est2: Estudiante = { id: 2, nombre: "Carlos", nota: 6.5, activo: true }
const est3: Estudiante = { id: 3, nombre: "Sofía", nota: 4.5, activo: false }

// Funciones que usan el type alias
function mostrarEstudiante(est: Estudiante): void {
  const estado = est.nota >= 6 ? "✓" : "✗"
  console.log(\`\${estado} \${est.nombre}: \${est.nota}\`)
}

function filtrarActivos(lista: Estudiante[]): Estudiante[] {
  return lista.filter((e) => e.activo)
}

function calcularPromedio(lista: Estudiante[]): number {
  return lista.reduce((sum, e) => sum + e.nota, 0) / lista.length
}

// Usar las funciones
const todos = [est1, est2, est3]
todos.forEach(mostrarEstudiante)
// → ✓ Ana: 9
// → ✓ Carlos: 6.5
// → ✗ Sofía: 4.5

const activos = filtrarActivos(todos)
console.log("Activos:", activos.length)  // → 2

console.log("Promedio:", calcularPromedio(todos).toFixed(2))  // → 6.67

// Type alias para primitivos con semántica
type Email = string
type PrecioEnCentavos = number
type NombreCompleto = string

// Estos tipos son string/number, solo con un nombre más descriptivo
const correo: Email = "ana@mail.com"
const precio: PrecioEnCentavos = 85000  // $850.00 en centavos

// Type alias para array
type ListaEstudiantes = Estudiante[]

const clase: ListaEstudiantes = [est1, est2, est3]
console.log("Total en clase:", clase.length)  // → 3`,
    keyPoints: [
      'Un type alias se define con `type NombreDelTipo = definicion`.',
      'Permite reutilizar un tipo sin repetir su definición en múltiples lugares.',
      'Mejora la legibilidad: `Usuario\` es más claro que \`{ nombre: string; edad: number }\`.',
      'Los type aliases no crean nuevos tipos — son nombres para tipos existentes.',
      'Puedes crear aliases para objetos, primitivos, arrays, funciones y más.',
      'Si el tipo cambia, solo debes modificarlo en la definición del alias.',
    ],
    exercise: {
      description:
        'Crea un type alias \`Tarea\` con las propiedades \`id\` (number), \`titulo\` (string), \`completada\` (boolean) y \`prioridad\` (number). Luego crea un type alias \`ListaTareas\` que sea un array de \`Tarea\`. Escribe tres funciones que reciban \`ListaTareas\`: \`contarPendientes\`, \`marcarCompletada\` (recibe el id) y \`ordenarPorPrioridad\`. Prueba con 4 tareas de ejemplo.',
      hint: 'Para \`ordenarPorPrioridad\` usa \`.sort((a, b) => b.prioridad - a.prioridad)\` (mayor prioridad primero). Para \`marcarCompletada\` usa \`.map()\` para crear un nuevo array con la tarea modificada.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para crear un type alias?',
        options: [
          'alias Usuario = { nombre: string }',
          'type Usuario = { nombre: string }',
          'typedef Usuario { nombre: string }',
          'let type Usuario = { nombre: string }',
        ],
        correctAnswer: 'type Usuario = { nombre: string }',
        correctFeedback:
          'Correcto. La sintaxis es \`type NombreDelAlias = definicionDelTipo\`. La palabra clave es \`type\`.',
        incorrectFeedback:
          'No es correcto. En TypeScript, los type aliases se crean con la palabra clave \`type\`: \`type NombreDelAlias = definicion\`. No se usa \`alias\`, \`typedef\` ni \`let type\`.',
      },
      {
        question: '¿Qué ventaja principal ofrece usar un type alias para un objeto complejo?',
        options: [
          'El código se ejecuta más rápido',
          'Permite reutilizar el tipo sin repetirlo y mejora la legibilidad',
          'Agrega propiedades extra automáticamente',
          'Protege las propiedades de ser modificadas',
        ],
        correctAnswer: 'Permite reutilizar el tipo sin repetirlo y mejora la legibilidad',
        correctFeedback:
          'Correcto. Un type alias permite definir el tipo una vez y usarlo en muchos lugares, y hace el código más legible con nombres descriptivos.',
        incorrectFeedback:
          'No es correcto. La ventaja principal de un type alias es la reutilización y la legibilidad. No afecta el rendimiento, no agrega propiedades y no hace el objeto inmutable (para eso está \`readonly\`).',
      },
      {
        question: '¿Son compatibles \`type Usuario = { nombre: string }\` y \`{ nombre: string }\` en TypeScript?',
        options: [
          'No, son tipos completamente diferentes',
          'Sí, TypeScript usa estructural typing — si tienen la misma forma, son compatibles',
          'Solo si se hace una conversión explícita',
          'Solo si el alias se llama exactamente igual que el tipo original',
        ],
        correctAnswer: 'Sí, TypeScript usa estructural typing — si tienen la misma forma, son compatibles',
        correctFeedback:
          'Correcto. TypeScript usa "structural typing": dos tipos son compatibles si tienen la misma estructura, independientemente de sus nombres.',
        incorrectFeedback:
          'No es correcto. TypeScript usa "structural typing" (tipado estructural): dos tipos son compatibles si tienen la misma forma (mismas propiedades con los mismos tipos). Un alias no crea un tipo completamente nuevo — solo le da un nombre al tipo existente.',
      },
      {
        question: '¿Para qué sirve crear un type alias como \`type Email = string\`?',
        options: [
          'Para que TypeScript valide el formato del email automáticamente',
          'Para agregar significado semántico: el nombre comunica el propósito del valor',
          'Para que el string solo acepte caracteres de email',
          'No tiene ninguna utilidad práctica',
        ],
        correctAnswer: 'Para agregar significado semántico: el nombre comunica el propósito del valor',
        correctFeedback:
          'Correcto. \`type Email = string\` no cambia el tipo real (sigue siendo string), pero el nombre \`Email\` comunica la intención — hace el código más legible y documentado.',
        incorrectFeedback:
          'No es correcto. \`type Email = string\` no valida el formato del email ni restringe los caracteres. Su utilidad es semántica: el nombre \`Email\` comunica qué representa ese string, mejorando la legibilidad del código.',
      },
      {
        question: '¿En cuántos lugares debes cambiar el tipo si usas un type alias y necesitas agregar una propiedad?',
        options: [
          'En cada lugar donde se usa el alias',
          'Solo en la definición del alias',
          'En la definición y en cada función que lo usa',
          'No es posible agregar propiedades a un alias',
        ],
        correctAnswer: 'Solo en la definición del alias',
        correctFeedback:
          'Correcto. Esta es una ventaja clave: al cambiar la definición del alias, el cambio se propaga a todos los lugares que lo usan. TypeScript verifica automáticamente que todos sean compatibles.',
        incorrectFeedback:
          'No es correcto. Una ventaja importante de los type aliases es el mantenimiento: si necesitas agregar una propiedad, solo modificas la definición del alias. TypeScript verifica automáticamente todos los lugares que usan ese alias y te indica dónde puede haber incompatibilidades.',
      },
    ],
  },

  // ── Lección 56 ───────────────────────────────────────────────────────────
  {
    slug: 'alias-para-objetos',
    title: 'Crear alias para objetos',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 2,
    description:
      'Aprende a crear tipos reutilizables para objetos.',
    explanation: `La aplicación más común de los type aliases es crear tipos para objetos. Esto te permite nombrar estructuras de datos complejas y reutilizarlas en todo tu código.

**Anatomía de un type alias para objeto**

\`\`\`ts
type Producto = {
  id: number             // requerido
  nombre: string         // requerido
  precio: number         // requerido
  descripcion?: string   // opcional
  readonly sku: string   // readonly
}
\`\`\`

Puedes usar todas las características que ya conoces: propiedades requeridas, opcionales y \`readonly\`.

**Composición de type aliases**

Puedes crear un type alias que use otro type alias:

\`\`\`ts
type Direccion = {
  calle: string
  ciudad: string
  pais: string
}

type Usuario = {
  nombre: string
  direccion: Direccion   // Reutilizando el alias Direccion
}
\`\`\`

**Múltiples type aliases en el mismo archivo**

En archivos de tipos, es común tener varios aliases relacionados:

\`\`\`ts
type Categoria = {
  id: number
  nombre: string
}

type Producto = {
  id: number
  nombre: string
  precio: number
  categoria: Categoria   // Composición
}

type CarritoItem = {
  producto: Producto
  cantidad: number
}
\`\`\`

**Dónde definir los type aliases**

- Para tipos usados en un solo archivo: defínelos al inicio de ese archivo.
- Para tipos compartidos entre archivos: crea un archivo dedicado como \`types.ts\`.

**Diferencia con las clases**

Los type aliases para objetos son solo **tipos** — no generan ningún código JavaScript. Son una herramienta de desarrollo que desaparece cuando compilas. Las clases sí generan código JavaScript.`,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// Type alias básico para objeto
type Categoria = {
  id: number
  nombre: string
}

// Type alias que usa otro alias (composición)
type Producto = {
  readonly id: number
  nombre: string
  precio: number
  descripcion?: string
  categoria: Categoria
}

// Type alias para carrito
type ItemCarrito = {
  producto: Producto
  cantidad: number
}

// ── archivo: app.ts ──────────────────────────────────────────────────────
const electronicos: Categoria = { id: 1, nombre: "Electrónicos" }
const ropa: Categoria = { id: 2, nombre: "Ropa" }

const teclado: Producto = {
  id: 101,
  nombre: "Teclado mecánico",
  precio: 850,
  descripcion: "Con retroiluminación RGB",
  categoria: electronicos,
}

const camisa: Producto = {
  id: 201,
  nombre: "Camisa casual",
  precio: 350,
  categoria: ropa,
  // descripcion es opcional — no es necesario incluirla
}

// Funciones que reciben type aliases
function mostrarProducto(p: Producto): void {
  console.log(\`[\${p.categoria.nombre}] \${p.nombre}: $\${p.precio}\`)
  if (p.descripcion) console.log(\`  → \${p.descripcion}\`)
}

mostrarProducto(teclado)
// → [Electrónicos] Teclado mecánico: $850
// →   → Con retroiluminación RGB

mostrarProducto(camisa)
// → [Ropa] Camisa casual: $350

// Función que trabaja con array de type aliases
function calcularTotal(items: ItemCarrito[]): number {
  return items.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0)
}

const carrito: ItemCarrito[] = [
  { producto: teclado, cantidad: 1 },
  { producto: camisa, cantidad: 2 },
]

console.log("Total:", calcularTotal(carrito))  // → 1550`,
    keyPoints: [
      'Los type aliases para objetos se definen con `type Nombre = { propiedades }`.',
      'Puedes usar propiedades opcionales (`?`) y `readonly` dentro de un alias.',
      'Puedes componer type aliases: usar un alias como tipo de una propiedad en otro alias.',
      'Los type aliases no generan código JavaScript — son solo para verificación en tiempo de compilación.',
      'Para tipos compartidos entre archivos, agrúpalos en un archivo `types.ts`.',
      'La composición de aliases modela relaciones entre entidades del mundo real.',
    ],
    exercise: {
      description:
        'Crea los siguientes type aliases: `Autor\` (con \`id\`, \`nombre\`, \`correo\`), \`Leccion\` (con \`id\`, \`titulo\`, \`duracion\` en minutos, \`completada\` boolean), y \`Curso\` (con \`id\`, \`titulo\`, \`autor: Autor\`, \`lecciones: Leccion[]\`, \`precio\` y \`gratuito\` boolean). Crea dos cursos de ejemplo y una función \`mostrarResumenCurso\` que imprima el título, el autor, el número de lecciones y el precio o "Gratis".',
      hint: 'La función recibirá un parámetro de tipo \`Curso\`. Para el precio usa \`curso.gratuito ? "Gratis" : "$" + curso.precio\`. Para contar lecciones usa \`curso.lecciones.length\`.',
    },
    quiz: [
      {
        question: '¿Cómo se llama la técnica de usar un type alias como tipo de propiedad en otro alias?',
        options: [
          'Herencia de tipos',
          'Composición de type aliases',
          'Extensión de tipos',
          'Encadenamiento de tipos',
        ],
        correctAnswer: 'Composición de type aliases',
        correctFeedback:
          'Correcto. La composición consiste en usar un alias como tipo de una propiedad en otro alias, permitiendo modelar relaciones entre entidades.',
        incorrectFeedback:
          'No es correcto. Cuando un alias usa otro alias como tipo de propiedad, se llama composición. La herencia y extensión son conceptos diferentes relacionados con interfaces y clases.',
      },
      {
        question: '¿Qué código JavaScript genera un type alias?',
        options: [
          'Una clase con las propiedades definidas',
          'Un objeto vacío como plantilla',
          'Ningún código — los type aliases desaparecen al compilar',
          'Una función constructora',
        ],
        correctAnswer: 'Ningún código — los type aliases desaparecen al compilar',
        correctFeedback:
          'Correcto. Los type aliases son una construcción exclusiva de TypeScript. Al compilar a JavaScript, no generan ningún código — solo existen durante el desarrollo.',
        incorrectFeedback:
          'No es correcto. Los type aliases son herramientas de TypeScript puro. Al compilar a JavaScript, desaparecen completamente. No generan clases, objetos ni funciones en el JavaScript final.',
      },
      {
        question: '¿Dónde es recomendable definir type aliases que se usan en múltiples archivos?',
        options: [
          'En el archivo \`index.ts\` del proyecto',
          'Directamente en el archivo donde se usan',
          'En un archivo dedicado como \`types.ts\`',
          'En el archivo \`package.json\`',
        ],
        correctAnswer: 'En un archivo dedicado como \`types.ts\`',
        correctFeedback:
          'Correcto. Centralizar los tipos compartidos en un \`types.ts\` facilita el mantenimiento y permite importarlos desde cualquier archivo que los necesite.',
        incorrectFeedback:
          'No es correcto. Cuando un type alias se usa en múltiples archivos, es mejor definirlo en un archivo dedicado como \`types.ts\` y exportarlo. Definirlo en cada archivo que lo usa genera duplicación y dificulta el mantenimiento.',
      },
      {
        question: '¿Cuál de estas definiciones usa correctamente la composición de type aliases?',
        options: [
          'type Pedido = { usuario: "Usuario"; producto: "Producto" }',
          'type Pedido = { usuario: Usuario; producto: Producto }',
          'type Pedido extends Usuario { producto: Producto }',
          'type Pedido = Usuario + Producto',
        ],
        correctAnswer: 'type Pedido = { usuario: Usuario; producto: Producto }',
        correctFeedback:
          'Correcto. Se usa el nombre del alias directamente como tipo de propiedad, sin comillas ni sintaxis especial.',
        incorrectFeedback:
          'No es correcto. Para usar un alias como tipo de propiedad, simplemente escribes el nombre del alias: \`usuario: Usuario\`. Las comillas harían que sea literalmente el string "Usuario". \`extends\` es para interfaces, no para aliases con esta sintaxis.',
      },
      {
        question: 'Si agregas una propiedad a \`type Producto\`, ¿en cuántos lugares debes actualizar el código?',
        options: [
          'Solo en la definición del alias — TypeScript te indica los incompatibles',
          'En la definición y en cada variable de tipo Producto',
          'Solo en los archivos donde Producto es parámetro',
          'No se puede agregar propiedades a un type alias',
        ],
        correctAnswer: 'Solo en la definición del alias — TypeScript te indica los incompatibles',
        correctFeedback:
          'Correcto. Cambias el alias y TypeScript verifica automáticamente todos los lugares donde se usa, mostrando errores donde el tipo ya no coincide.',
        incorrectFeedback:
          'No es correcto. Solo necesitas cambiar la definición del alias. TypeScript luego verifica todos los lugares donde se usa y te indica dónde hay incompatibilidades. Esto hace que el mantenimiento sea mucho más fácil que si repetieras el tipo.',
      },
    ],
  },

  // ── Lección 57 ───────────────────────────────────────────────────────────
  {
    slug: 'alias-valores-primitivos',
    title: 'Crear alias para valores primitivos',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 3,
    description:
      'Aprende a crear aliases para tipos como string, number o boolean cuando aportan claridad.',
    explanation: `Aunque es menos común que los aliases para objetos, también puedes crear type aliases para tipos primitivos. Esto añade **semántica** a tu código: el nombre del tipo comunica el propósito del valor.

**Ejemplos de aliases para primitivos**

\`\`\`ts
type Email = string
type Edad = number
type Activo = boolean
type NombreCompleto = string
type PorcentajeDescuento = number
\`\`\`

**¿Cuándo son útiles?**

1. **Cuando el nombre hace más claro el propósito**:

\`\`\`ts
// Sin alias: ¿qué representa cada string?
function enviarCorreo(de: string, para: string, asunto: string): void { }

// Con alias: queda claro
type Email = string
type Asunto = string
function enviarCorreo(de: Email, para: Email, asunto: Asunto): void { }
\`\`\`

2. **Cuando necesitas documentar un rango de valores**:

\`\`\`ts
// Semánticamente, Porcentaje va de 0 a 100
type Porcentaje = number
function calcularDescuento(precio: number, descuento: Porcentaje): number {
  return precio * (1 - descuento / 100)
}
\`\`\`

**Limitaciones importantes**

Un alias de primitivo **no restringe los valores**. \`type Edad = number\` acepta cualquier número, incluyendo negativos. TypeScript no valida el rango:

\`\`\`ts
const edad: Edad = -5  // TypeScript no lo impide
\`\`\`

Para validaciones de rango o formato, necesitas validación en tiempo de ejecución (por ejemplo, con funciones guard o librerías externas).

**Cuándo NO usar alias para primitivos**

Si el alias no añade claridad, no lo uses. \`type Nombre = string\` puede ser redundante si el contexto ya es claro. Úsalos solo cuando el nombre agrega información significativa sobre el propósito del valor.

**Opaque types (concepto avanzado)**

En lenguajes más estrictos existen "opaque types" que previenen el uso de un tipo en lugar de otro aunque tengan el mismo tipo base. TypeScript no los soporta nativamente de forma simple, pero hay técnicas avanzadas para emularlos. Por ahora, los aliases de primitivos son útiles principalmente para documentación y legibilidad.`,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// Aliases para primitivos con significado semántico
type Email = string
type NombreCompleto = string
type Edad = number
type Calificacion = number
type Activo = boolean

// El código se vuelve más autodocumentado
type Estudiante = {
  nombre: NombreCompleto
  correo: Email
  edad: Edad
  promedio: Calificacion
  inscrito: Activo
}

const estudiante: Estudiante = {
  nombre: "Ana García",
  correo: "ana@universidad.edu",
  edad: 22,
  promedio: 8.75,
  inscrito: true,
}

// Funciones con aliases de primitivos: más claras en su intención
function verificarEmail(correo: Email): boolean {
  return correo.includes("@") && correo.includes(".")
}

function esMayorDeEdad(edad: Edad): boolean {
  return edad >= 18
}

function calificacionLetra(nota: Calificacion): string {
  if (nota >= 9) return "A"
  if (nota >= 8) return "B"
  if (nota >= 7) return "C"
  if (nota >= 6) return "D"
  return "F"
}

console.log(verificarEmail("ana@universidad.edu"))  // → true
console.log(esMayorDeEdad(22))                      // → true
console.log(calificacionLetra(8.75))                // → B

// LIMITACIÓN: el alias no restringe el rango de valores
type Porcentaje = number
const descuento: Porcentaje = 150  // TypeScript no lo impide
// Debes validar el rango en tiempo de ejecución:
function aplicarDescuento(precio: number, descuento: Porcentaje): number {
  if (descuento < 0 || descuento > 100) {
    throw new Error("El descuento debe estar entre 0 y 100")
  }
  return precio * (1 - descuento / 100)
}

console.log(aplicarDescuento(1000, 20))  // → 800`,
    keyPoints: [
      'Puedes crear aliases para primitivos: `type Email = string\`, \`type Edad = number\`.',
      'Los aliases de primitivos añaden semántica — el nombre comunica el propósito del valor.',
      'Un alias de primitivo NO restringe los valores: \`type Edad = number\` acepta números negativos.',
      'Para validar rangos o formatos, necesitas validación en tiempo de ejecución.',
      'Úsalos solo cuando el nombre añade información significativa al contexto.',
      'No abuses de aliases de primitivos si el contexto ya hace claro el propósito del valor.',
    ],
    exercise: {
      description:
        'Crea aliases para: \`PrecioEnPesos\` (number), \`NombreProducto\` (string) y \`CantidadEnInventario\` (number). Luego crea un type \`ItemInventario\` usando estos aliases. Escribe una función \`validarItem\` que reciba un \`ItemInventario\` y retorne \`true\` si el precio es mayor a 0 y la cantidad es mayor o igual a 0. Prueba con items válidos e inválidos.',
      hint: 'La función devuelve \`boolean\`. Recuerda que el alias no valida el rango por sí solo — necesitas la validación en el cuerpo de la función: \`return item.precio > 0 && item.cantidad >= 0\`.',
    },
    quiz: [
      {
        question: '¿Cuál es el principal beneficio de \`type Email = string\` sobre usar \`string\` directamente?',
        options: [
          'Valida automáticamente el formato del email',
          'Agrega significado semántico — el nombre comunica el propósito del valor',
          'Restringe el string a solo caracteres válidos de email',
          'Hace que TypeScript rechace strings que no sean emails',
        ],
        correctAnswer: 'Agrega significado semántico — el nombre comunica el propósito del valor',
        correctFeedback:
          'Correcto. \`type Email = string\` no valida nada — su beneficio es la legibilidad y documentación implícita.',
        incorrectFeedback:
          'No es correcto. Un alias de primitivo como \`type Email = string\` no valida formato ni restringe caracteres. Su utilidad es puramente semántica: el nombre \`Email\` comunica el propósito del valor, haciendo el código más legible.',
      },
      {
        question: '¿Puede \`const edad: Edad = -5\` causar un error si \`type Edad = number\`?',
        options: [
          'Sí, TypeScript valida que la edad sea positiva',
          'No, TypeScript solo verifica el tipo (number), no el rango de valores',
          'Sí, si se activa la configuración de validación de rangos',
          'No, pero genera una advertencia',
        ],
        correctAnswer: 'No, TypeScript solo verifica el tipo (number), no el rango de valores',
        correctFeedback:
          'Correcto. TypeScript verifica tipos, no valores específicos. \`-5\` es un número válido, así que no hay error.',
        incorrectFeedback:
          'No es correcto. TypeScript verifica que el valor sea del tipo correcto (\`number\`), pero no valida el rango. \`-5\` es un número válido para TypeScript, aunque semánticamente una edad negativa no tenga sentido. La validación de rango debe hacerse en tiempo de ejecución.',
      },
      {
        question: '¿Cuándo NO debería usarse un alias para un primitivo?',
        options: [
          'Nunca, siempre deben usarse aliases',
          'Cuando el alias no añade información más allá de lo que el contexto ya comunica',
          'Cuando el valor es de tipo boolean',
          'Cuando el valor se usa en más de un lugar',
        ],
        correctAnswer: 'Cuando el alias no añade información más allá de lo que el contexto ya comunica',
        correctFeedback:
          'Correcto. Si el alias no añade claridad — por ejemplo, \`type Numero = number\` — es mejor usar el tipo directamente. Los aliases deben tener un nombre que comunique algo significativo.',
        incorrectFeedback:
          'No es correcto. Un alias de primitivo es útil cuando el nombre comunica algo que el tipo base no comunica. Si el contexto ya es claro, usar el alias puede ser redundante o incluso confuso. La clave es preguntarse: ¿el nombre agrega información útil?',
      },
      {
        question: '¿Qué pasa si dos funciones tienen parámetros de tipo \`Email\` y \`Telefono\`, ambos aliases de \`string\`?',
        options: [
          'TypeScript detecta el error si pasas un Email donde se espera Telefono',
          'Son intercambiables porque ambos son string internamente',
          'Solo funciona si los aliases están en el mismo archivo',
          'TypeScript crea tipos distintos y no son compatibles',
        ],
        correctAnswer: 'Son intercambiables porque ambos son string internamente',
        correctFeedback:
          'Correcto. TypeScript usa structural typing. Ambos son \`string\` internamente, así que son completamente compatibles e intercambiables. Esta es una limitación de los aliases de primitivos.',
        incorrectFeedback:
          'No es correcto. TypeScript usa structural typing: si dos tipos tienen la misma estructura, son compatibles. Como \`Email\` y \`Telefono\` son ambos \`string\`, TypeScript los trata como el mismo tipo y son intercambiables. Esta es una limitación — no puedes "mezclar" errores de Email/Telefono con aliases simples.',
      },
      {
        question: '¿Qué se necesita para validar que un \`Porcentaje\` esté entre 0 y 100?',
        options: [
          'Cambiar la definición a \`type Porcentaje = 0 | 1 | ... | 100\`',
          'Usar \`type Porcentaje = number\` y validar el rango en la función con código JavaScript',
          'TypeScript lo valida automáticamente si el nombre del alias lo sugiere',
          'Usar una librería de tipos especial',
        ],
        correctAnswer: 'Usar \`type Porcentaje = number\` y validar el rango en la función con código JavaScript',
        correctFeedback:
          'Correcto. TypeScript no valida rangos automáticamente. Debes agregar validación en tiempo de ejecución: \`if (valor < 0 || valor > 100) throw new Error(...)\`. Los literal types pueden restringir valores exactos, pero no rangos continuos.',
        incorrectFeedback:
          'No es correcto. TypeScript no valida rangos numéricos automáticamente. Para validar que un número esté en un rango, debes agregar código JavaScript en el cuerpo de la función. TypeScript solo verifica el tipo (number), no los valores posibles en un rango.',
      },
    ],
  },

  // ── Lección 58 ───────────────────────────────────────────────────────────
  {
    slug: 'reutilizar-tipos',
    title: 'Reutilizar tipos',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 4,
    description:
      'Aprende cómo los type aliases evitan repetir estructuras de tipo en varias partes del código.',
    explanation: `La reutilización de tipos es uno de los beneficios más prácticos de los type aliases. Cuando defines un tipo una sola vez y lo usas en múltiples lugares, tu código se vuelve más mantenible y consistente.

**El problema sin reutilización**

Imagina que defines el mismo tipo en múltiples funciones:

\`\`\`ts
function crearUsuario(u: { nombre: string; correo: string; edad: number }): void { }
function actualizarUsuario(u: { nombre: string; correo: string; edad: number }): void { }
function eliminarUsuario(u: { nombre: string; correo: string; edad: number }): void { }
\`\`\`

Si necesitas agregar \`telefono\` al usuario, debes cambiar las tres funciones (y todas las que omitiste). Es propenso a errores.

**La solución con un type alias**

\`\`\`ts
type Usuario = {
  nombre: string
  correo: string
  edad: number
  telefono?: string  // Agrega aquí, se propaga a todos
}

function crearUsuario(u: Usuario): void { }
function actualizarUsuario(u: Usuario): void { }
function eliminarUsuario(u: Usuario): void { }
\`\`\`

**Importar y exportar types**

Puedes exportar type aliases desde un archivo y usarlos en otros:

\`\`\`ts
// types.ts
export type Usuario = { nombre: string; correo: string }
export type Producto = { id: number; nombre: string; precio: number }

// app.ts
import type { Usuario, Producto } from './types'
\`\`\`

La sintaxis \`import type\` es específica de TypeScript — importa solo el tipo sin incluir código JavaScript.

**Consistencia en el código**

Cuando varias funciones usan el mismo type alias, se garantiza que todas trabajan con la misma estructura. Si hay un error de tipo, TypeScript lo detecta en todos los lugares que usan el alias.

**Tipos parciales y modificaciones**

A veces necesitas una variante de un tipo. Por ahora, puedes crear un alias separado:

\`\`\`ts
type Usuario = { nombre: string; correo: string; edad: number }

// Para actualización, solo el correo es requerido
type ActualizarUsuario = { correo: string; nombre?: string; edad?: number }
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

export type Estudiante = {
  id: number
  nombre: string
  correo: string
  promedio: number
  activo: boolean
}

export type Curso = {
  id: number
  titulo: string
  instructor: string
  estudiantes: Estudiante[]
}

// ── archivo: app.ts ──────────────────────────────────────────────────────
// import type { Estudiante, Curso } from './types'
// (En este ejemplo usamos los tipos directamente)

type Estudiante = {
  id: number
  nombre: string
  correo: string
  promedio: number
  activo: boolean
}

// Reutilizando Estudiante en múltiples funciones
function mostrarEstudiante(est: Estudiante): void {
  console.log(\`[\${est.id}] \${est.nombre} — Promedio: \${est.promedio}\`)
}

function filtrarActivos(lista: Estudiante[]): Estudiante[] {
  return lista.filter((e) => e.activo)
}

function ordenarPorPromedio(lista: Estudiante[]): Estudiante[] {
  return [...lista].sort((a, b) => b.promedio - a.promedio)
}

function buscarPorCorreo(lista: Estudiante[], correo: string): Estudiante | undefined {
  return lista.find((e) => e.correo === correo)
}

// Datos de ejemplo
const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Ana", correo: "ana@mail.com", promedio: 9.0, activo: true },
  { id: 2, nombre: "Carlos", correo: "carlos@mail.com", promedio: 7.5, activo: true },
  { id: 3, nombre: "Sofía", correo: "sofia@mail.com", promedio: 5.5, activo: false },
]

// Todas las funciones usan el mismo tipo Estudiante
const activos = filtrarActivos(estudiantes)
console.log("Activos:", activos.map((e) => e.nombre))  // → ["Ana", "Carlos"]

const ordenados = ordenarPorPromedio(activos)
ordenados.forEach(mostrarEstudiante)
// → [1] Ana — Promedio: 9
// → [2] Carlos — Promedio: 7.5

const encontrado = buscarPorCorreo(estudiantes, "carlos@mail.com")
if (encontrado) console.log("Encontrado:", encontrado.nombre)  // → Carlos`,
    keyPoints: [
      'Los type aliases eliminan la repetición de estructuras de tipo en múltiples lugares.',
      'Cuando el tipo cambia, solo modificas la definición del alias — TypeScript verifica el resto.',
      'Puedes exportar e importar type aliases entre archivos con `export type` e `import type`.',
      'La reutilización garantiza consistencia: todas las funciones usan la misma estructura.',
      'TypeScript detecta automáticamente dónde un cambio en el alias rompe el código.',
      'Para variantes del mismo tipo, crea aliases adicionales con nombres descriptivos.',
    ],
    exercise: {
      description:
        'Crea un archivo de tipos con `Producto`, `Inventario` (con `producto: Producto` y `stock: number`) y `Tienda` (con `nombre`, `inventario: Inventario[]`). Luego escribe funciones que usen estos tipos: `productosDisponibles\` (stock > 0), \`valorTotalInventario\` (suma de precio * stock) y \`buscarProducto\` (por nombre). Usa los aliases en todas las funciones.',
      hint: 'Para \`valorTotalInventario\` usa \`reduce\`: \`inventario.reduce((sum, item) => sum + item.producto.precio * item.stock, 0)\`. Para \`productosDisponibles\` filtra por \`item.stock > 0\`.',
    },
    quiz: [
      {
        question: '¿Qué ventaja tiene definir un type alias una sola vez en lugar de repetirlo?',
        options: [
          'El código se ejecuta más rápido',
          'Si el tipo cambia, solo debes actualizar la definición — TypeScript verifica el resto',
          'Los aliases hacen el código más corto en tiempo de ejecución',
          'TypeScript valida los valores automáticamente',
        ],
        correctAnswer: 'Si el tipo cambia, solo debes actualizar la definición — TypeScript verifica el resto',
        correctFeedback:
          'Correcto. Esta es la ventaja de mantenimiento: cambias el alias en un lugar y TypeScript te indica dónde hay incompatibilidades.',
        incorrectFeedback:
          'No es correcto. La ventaja principal es de mantenimiento: si el tipo cambia (por ejemplo, agregas una propiedad), solo modificas la definición del alias. TypeScript automáticamente verifica todos los lugares donde se usa y te indica dónde hay incompatibilidades.',
      },
      {
        question: '¿Cuál es la sintaxis correcta para importar solo el tipo \`Usuario\` desde \`./types\`?',
        options: [
          'import { Usuario } from "./types"',
          'import type { Usuario } from "./types"',
          'import Usuario from "./types"',
          'require type { Usuario } from "./types"',
        ],
        correctAnswer: 'import type { Usuario } from "./types"',
        correctFeedback:
          'Correcto. \`import type\` importa solo el tipo sin incluir código JavaScript. Es la forma recomendada en TypeScript.',
        incorrectFeedback:
          'No es correcto. Para importar solo un tipo en TypeScript, se usa \`import type { Nombre } from "ruta"\`. La palabra \`type\` después de \`import\` indica que es una importación de solo tipo, sin generar código JavaScript.',
      },
      {
        question: '¿Qué pasa si cambias \`type Producto\` agregando una nueva propiedad requerida?',
        options: [
          'El cambio no afecta a las variables ya creadas',
          'TypeScript muestra errores en todos los objetos que no incluyen la nueva propiedad',
          'TypeScript agrega la propiedad automáticamente con un valor por defecto',
          'Solo afecta a las variables declaradas después del cambio',
        ],
        correctAnswer: 'TypeScript muestra errores en todos los objetos que no incluyen la nueva propiedad',
        correctFeedback:
          'Correcto. Agregar una propiedad requerida al alias hace que todos los objetos de ese tipo sean incompatibles hasta que incluyan la nueva propiedad. TypeScript te muestra exactamente qué actualizar.',
        incorrectFeedback:
          'No es correcto. Si agregas una propiedad requerida al alias, TypeScript verifica todos los objetos de ese tipo en el código. Donde falte la nueva propiedad, TypeScript reportará un error, guiándote exactamente a qué actualizar.',
      },
      {
        question: '¿Cuál es la forma correcta de crear un type alias para una versión parcial de \`Usuario\`?',
        options: [
          'Modificar el alias original para hacer todo opcional',
          'Crear un alias nuevo con las propiedades necesarias opcionales',
          'Usar \`any\` cuando necesites un Usuario parcial',
          'No es posible tener versiones parciales de un alias',
        ],
        correctAnswer: 'Crear un alias nuevo con las propiedades necesarias opcionales',
        correctFeedback:
          'Correcto. Puedes crear aliases adicionales para casos especiales, como \`type ActualizarUsuario = { correo: string; nombre?: string }\`. Más adelante aprenderás utility types como \`Partial<Usuario>\` para esto.',
        incorrectFeedback:
          'No es correcto. La solución más sencilla es crear un alias adicional con las propiedades que necesitas, haciéndolas opcionales según el caso. Modificar el alias original afectaría todos los lugares donde se usa. Más adelante aprenderás utility types como \`Partial<T>\` que automatizan esto.',
      },
      {
        question: '¿Qué hace \`import type\` a diferencia de \`import\` normal?',
        options: [
          'Importa solo en modo de solo lectura',
          'Importa solo el tipo sin incluir código JavaScript en el bundle final',
          'Solo funciona con interfaces, no con type aliases',
          'Es más rápido en tiempo de ejecución',
        ],
        correctAnswer: 'Importa solo el tipo sin incluir código JavaScript en el bundle final',
        correctFeedback:
          'Correcto. \`import type\` es una importación exclusiva de TypeScript que se elimina al compilar. No agrega código al bundle JavaScript final.',
        incorrectFeedback:
          'No es correcto. \`import type\` importa solo definiciones de tipo para verificación en tiempo de compilación. Al compilar a JavaScript, esta importación desaparece completamente del bundle final, lo que reduce el tamaño del código generado.',
      },
    ],
  },

  // ── Lección 59 ───────────────────────────────────────────────────────────
  {
    slug: 'combinar-tipos-intersection-basico',
    title: 'Combinar tipos con intersection',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 5,
    description:
      'Aprende a combinar type aliases usando & para construir tipos más completos.',
    explanation: `El operador **\`&\`** (ampersand) en TypeScript se llama **intersection type** y te permite combinar múltiples tipos en uno. El resultado es un tipo que tiene **todas** las propiedades de los tipos combinados.

**Sintaxis**

\`\`\`ts
type TipoCombinado = TipoA & TipoB
\`\`\`

**Ejemplo básico**

\`\`\`ts
type InfoPersonal = {
  nombre: string
  edad: number
}

type InfoContacto = {
  correo: string
  telefono?: string
}

type Persona = InfoPersonal & InfoContacto
// Persona tiene: nombre, edad, correo, telefono?
\`\`\`

Un objeto de tipo \`Persona\` debe cumplir con **ambos** tipos:

\`\`\`ts
const persona: Persona = {
  nombre: "Ana",
  edad: 25,
  correo: "ana@mail.com",
  // telefono es opcional
}
\`\`\`

**¿Para qué es útil?**

1. **Reutilización de partes comunes**: si varios tipos comparten propiedades, extrae esas propiedades en un tipo base y combínalos.
2. **Extender tipos existentes**: cuando quieres agregar propiedades a un tipo sin modificar el original.
3. **Mixins de comportamiento**: combinar varios tipos pequeños en uno más específico.

**Ejemplo con reutilización**

\`\`\`ts
type Base = {
  id: number
  creadoEn: string
}

type Usuario = Base & {
  nombre: string
  correo: string
}

type Producto = Base & {
  nombre: string
  precio: number
}
// Tanto Usuario como Producto tendrán id y creadoEn
\`\`\`

**¿Qué pasa si los tipos tienen propiedades con el mismo nombre pero diferente tipo?**

Esto puede causar un tipo \`never\` (imposible) para esa propiedad:

\`\`\`ts
type A = { id: number }
type B = { id: string }
type C = A & B  // id: number & string = never
\`\`\`

Evita combinar tipos con propiedades incompatibles.`,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// Tipos base reutilizables
type Timestamps = {
  creadoEn: string
  actualizadoEn?: string
}

type Identificable = {
  readonly id: number
}

// Combinar con &
type Estudiante = Identificable & Timestamps & {
  nombre: string
  correo: string
  promedio: number
}

type Curso = Identificable & Timestamps & {
  titulo: string
  instructor: string
  precio: number
  gratuito: boolean
}

// Los objetos deben cumplir TODAS las propiedades combinadas
const estudiante: Estudiante = {
  id: 1,
  creadoEn: "2024-01-15",
  nombre: "Ana García",
  correo: "ana@mail.com",
  promedio: 9.0,
}

const curso: Curso = {
  id: 101,
  creadoEn: "2024-01-01",
  actualizadoEn: "2024-02-15",
  titulo: "TypeScript desde Cero",
  instructor: "Ronaldo",
  precio: 0,
  gratuito: true,
}

// Las funciones conocen todos los campos combinados
function mostrarEstudiante(est: Estudiante): void {
  console.log(\`ID: \${est.id}\`)
  console.log(\`Nombre: \${est.nombre}\`)
  console.log(\`Promedio: \${est.promedio}\`)
  console.log(\`Registrado: \${est.creadoEn}\`)
}

mostrarEstudiante(estudiante)

// Intersection con tipo inline
type Admin = Estudiante & {
  rol: string
  permisos: string[]
}

const admin: Admin = {
  ...estudiante,
  rol: "administrador",
  permisos: ["leer", "escribir", "eliminar"],
}

console.log(\`\${admin.nombre} es \${admin.rol}\`)
// → Ana García es administrador`,
    keyPoints: [
      'El operador `&` crea un tipo que combina todas las propiedades de los tipos involucrados.',
      'Un objeto del tipo intersection debe cumplir con TODAS las propiedades de todos los tipos.',
      'Las intersections son útiles para reutilizar partes comunes de tipos.',
      'Puedes combinar un alias existente con propiedades inline: `TipoBase & { nuevaPropiedad: tipo }\`.',
      'Evita combinar tipos con propiedades del mismo nombre pero tipos incompatibles.',
      'La intersection con tipos base (\`Timestamps\`, \`Identificable\`) es un patrón común.',
    ],
    exercise: {
      description:
        'Crea un tipo \`Auditado\` con \`creadoPor\` (string) y \`fechaCreacion\` (string). Crea un tipo \`Producto\` con \`nombre\`, \`precio\` y \`disponible\`. Luego crea \`ProductoAuditado\` combinando ambos con \`&\`. Escribe una función \`registrarProducto\` que reciba un \`ProductoAuditado\` e imprima todos sus datos incluyendo quién lo creó y cuándo.',
      hint: 'El tipo combinado es: \`type ProductoAuditado = Producto & Auditado\`. La función recibirá un \`ProductoAuditado\` y tendrá acceso a las propiedades de ambos tipos.',
    },
    quiz: [
      {
        question: '¿Qué produce el operador \`&\` entre dos type aliases?',
        options: [
          'Un tipo que puede ser cualquiera de los dos',
          'Un tipo que debe cumplir con las propiedades de AMBOS tipos',
          'Un tipo que solo tiene las propiedades en común',
          'Un tipo que es la mitad de cada uno',
        ],
        correctAnswer: 'Un tipo que debe cumplir con las propiedades de AMBOS tipos',
        correctFeedback:
          'Correcto. La intersection (\`&\`) produce un tipo con TODAS las propiedades de todos los tipos combinados.',
        incorrectFeedback:
          'No es correcto. El operador \`&\` (intersection) produce un tipo que combina TODAS las propiedades de los tipos involucrados. Un objeto debe cumplir con las propiedades de todos los tipos participantes.',
      },
      {
        question: 'Si \`type A = { x: number }\` y \`type B = { y: string }\`, ¿qué propiedades tiene \`A & B\`?',
        options: [
          'Solo \`x\`',
          'Solo \`y\`',
          'Tanto \`x\` como \`y\`',
          'Ninguna de las dos',
        ],
        correctAnswer: 'Tanto \`x\` como \`y\`',
        correctFeedback:
          'Correcto. La intersection combina todas las propiedades. \`A & B\` tiene \`x: number\` e \`y: string\`.',
        incorrectFeedback:
          'No es correcto. La intersection (\`&\`) combina todas las propiedades de ambos tipos. \`A & B\` tiene \`x\` de \`A\` e \`y\` de \`B\`, por lo que ambas propiedades son necesarias.',
      },
      {
        question: '¿Para qué es especialmente útil extraer un tipo \`Timestamps\` y combinarlo con \`&\`?',
        options: [
          'Para hacer el código más corto',
          'Para reutilizar propiedades comunes como fechas en múltiples tipos',
          'Para que TypeScript genere las fechas automáticamente',
          'Para validar que las fechas sean strings',
        ],
        correctAnswer: 'Para reutilizar propiedades comunes como fechas en múltiples tipos',
        correctFeedback:
          'Correcto. Extraer propiedades comunes como \`creadoEn\`/\`actualizadoEn\` en un tipo \`Timestamps\` permite agregarlas fácilmente a cualquier tipo sin repetirlas.',
        incorrectFeedback:
          'No es correcto. El patrón de extraer propiedades comunes (como timestamps o ids) en un tipo base y combinarlo con \`&\` evita la repetición. Puedes agregar \`Timestamps\` a cualquier tipo que lo necesite sin copiar las propiedades.',
      },
      {
        question: '¿Qué pasa cuando combinas \`type A = { id: number }\` y \`type B = { id: string }\` con \`A & B\`?',
        options: [
          'La propiedad \`id\` será de tipo \`number\`',
          'La propiedad \`id\` será de tipo \`string\`',
          'La propiedad \`id\` será de tipo \`never\` (imposible satisfacer)',
          'TypeScript elige automáticamente el tipo más apropiado',
        ],
        correctAnswer: 'La propiedad \`id\` será de tipo \`never\` (imposible satisfacer)',
        correctFeedback:
          'Correcto. \`number & string = never\` porque ningún valor puede ser a la vez \`number\` y \`string\`. Esta combinación es un error de diseño que debes evitar.',
        incorrectFeedback:
          'No es correcto. Cuando dos tipos tienen la misma propiedad con tipos incompatibles, la intersection produce \`never\` para esa propiedad. \`number & string\` es \`never\` porque ningún valor puede ser simultáneamente número y string. Evita combinar tipos con propiedades del mismo nombre pero tipos distintos.',
      },
      {
        question: '¿Cuál es la diferencia entre \`A & B\` (intersection) y \`A | B\` (union)?',
        options: [
          'Son lo mismo, solo sintaxis diferente',
          '\`A & B\` requiere TODAS las propiedades de ambos; \`A | B\` requiere las de UNO u otro',
          '\`A & B\` combina valores; \`A | B\` combina tipos',
          '\`A & B\` es para objetos; \`A | B\` es para primitivos',
        ],
        correctAnswer: '\`A & B\` requiere TODAS las propiedades de ambos; \`A | B\` requiere las de UNO u otro',
        correctFeedback:
          'Correcto. La intersection (\`&\`) es "y" — necesitas todo. La union (\`|\`) es "o" — necesitas uno u otro. Aprenderás más sobre union types en el módulo 10.',
        incorrectFeedback:
          'No es correcto. La diferencia es fundamental: \`A & B\` (intersection) significa "y" — el valor debe cumplir con TODOS los tipos. \`A | B\` (union) significa "o" — el valor puede ser de cualquiera de los tipos. Aprenderás los union types en el módulo 10.',
      },
    ],
  },

  // ── Lección 60 ───────────────────────────────────────────────────────────
  {
    slug: 'type-aliases-funciones',
    title: 'Type aliases para funciones',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 6,
    description:
      'Aprende a crear aliases para describir la forma de una función.',
    explanation: `Al igual que puedes crear type aliases para objetos, también puedes crear aliases para tipos de función. Esto es útil cuando usas el mismo tipo de función en múltiples lugares.

**Sintaxis**

\`\`\`ts
type NombreFuncion = (param1: tipo1, param2: tipo2) => tipoRetorno
\`\`\`

**Sin alias (repetitivo)**

\`\`\`ts
function aplicar(n: number, fn: (x: number) => number): number { return fn(n) }
function mapear(lista: number[], fn: (x: number) => number): number[] { return lista.map(fn) }
function filtrar(lista: number[], fn: (x: number) => boolean): number[] { return lista.filter(fn) }
\`\`\`

**Con alias (limpio)**

\`\`\`ts
type Transformador = (x: number) => number
type Predicado = (x: number) => boolean

function aplicar(n: number, fn: Transformador): number { return fn(n) }
function mapear(lista: number[], fn: Transformador): number[] { return lista.map(fn) }
function filtrar(lista: number[], fn: Predicado): number[] { return lista.filter(fn) }
\`\`\`

**Aliases para callbacks**

Son muy útiles cuando tienes un patrón de callback específico:

\`\`\`ts
type CallbackExito = (datos: string) => void
type CallbackError = (error: string) => void

function fetchDatos(url: string, onExito: CallbackExito, onError: CallbackError): void {
  // simulación
}
\`\`\`

**Aliases para event handlers**

\`\`\`ts
type ManejadorClick = (evento: { x: number; y: number }) => void
type ManejadorTeclado = (tecla: string) => void
\`\`\`

**¿Qué compatibilidad verifican?**

TypeScript verifica que la función asignada tenga la firma compatible:

\`\`\`ts
type Transformador = (x: number) => number

const doble: Transformador = (x) => x * 2          // ✓
const triple: Transformador = (x) => x * 3         // ✓
const incorrecto: Transformador = (x) => \`\${x}\`  // Error: retorna string
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

// Aliases para tipos de función
type Transformador = (n: number) => number
type Predicado<T> = (item: T) => boolean
type Formateador = (valor: number) => string
type Comparador = (a: number, b: number) => number

// Funciones que usan el alias
function aplicarTransformacion(numeros: number[], fn: Transformador): number[] {
  return numeros.map(fn)
}

function filtrarLista(numeros: number[], fn: Predicado<number>): number[] {
  return numeros.filter(fn)
}

function formatearLista(numeros: number[], fn: Formateador): string[] {
  return numeros.map(fn)
}

// Implementaciones compatibles con los aliases
const doble: Transformador = (n) => n * 2
const triple: Transformador = (n) => n * 3
const esPositivo: Predicado<number> = (n) => n > 0
const esPar: Predicado<number> = (n) => n % 2 === 0
const formatearPeso: Formateador = (n) => \`$\${n.toFixed(2)}\`
const formatearPorcentaje: Formateador = (n) => \`\${n}%\`

const numeros = [1, -2, 3, -4, 5, 6]

console.log(aplicarTransformacion(numeros, doble))
// → [2, -4, 6, -8, 10, 12]

console.log(filtrarLista(numeros, esPositivo))
// → [1, 3, 5, 6]

console.log(filtrarLista(numeros, esPar))
// → [-2, -4, 6]

const precios = [100, 250, 75, 300]
console.log(formatearLista(precios, formatearPeso))
// → ["$100.00", "$250.00", "$75.00", "$300.00"]

// Alias de función como propiedad de objeto
type Configuracion = {
  calcularDescuento: (precio: number) => number
  formatearPrecio: Formateador
}

const config: Configuracion = {
  calcularDescuento: (precio) => precio * 0.9,
  formatearPrecio: formatearPeso,
}

console.log(config.formatearPrecio(config.calcularDescuento(500)))
// → $450.00`,
    keyPoints: [
      'Los type aliases para funciones siguen la sintaxis: `type Nombre = (params) => retorno\`.',
      'Permiten reutilizar el mismo tipo de función en múltiples parámetros y variables.',
      'TypeScript verifica que las funciones asignadas sean compatibles con el alias.',
      'Son especialmente útiles para callbacks, handlers y transformadores.',
      'Puedes usar aliases de función como tipos de propiedades en objetos.',
      'Hacen el código más legible y reducen la repetición de tipos de función.',
    ],
    exercise: {
      description:
        'Crea dos type aliases para funciones: \`ValidadorTexto\` (recibe string, retorna boolean) y \`TransformadorTexto\` (recibe string, retorna string). Luego crea una función \`procesarTexto\` que reciba un texto (string), un validador (ValidadorTexto) y un transformador (TransformadorTexto), y retorne el texto transformado solo si pasa la validación, o \`null\` si no pasa. Prueba con: validar que el texto tenga más de 3 caracteres y transformar a mayúsculas.',
      hint: 'La función retorna \`string | null\`. Si el validador retorna false, retorna null. Si retorna true, retorna el resultado del transformador. Llama así: \`procesarTexto("hola", (t) => t.length > 3, (t) => t.toUpperCase())\`.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para un type alias de función?',
        options: [
          'type Fn = function(n: number): string',
          'type Fn = (n: number) => string',
          'type Fn = { call(n: number): string }',
          'type Fn(n: number): string',
        ],
        correctAnswer: 'type Fn = (n: number) => string',
        correctFeedback:
          'Correcto. Los type aliases para funciones usan la sintaxis de arrow function: \`(params) => retorno\`.',
        incorrectFeedback:
          'No es correcto. La sintaxis correcta usa la forma de arrow function: \`type Nombre = (param: tipo) => tipoRetorno\`. No se usa la palabra \`function\` ni corchetes.',
      },
      {
        question: '¿Cuál de estas funciones es compatible con \`type Transformador = (n: number) => number\`?',
        options: [
          '(n: number) => n.toString()',
          '(n: number) => n > 0',
          '(n: string) => parseInt(n)',
          '(n: number) => n * 2',
        ],
        correctAnswer: '(n: number) => n * 2',
        correctFeedback:
          'Correcto. \`(n: number) => n * 2\` recibe un number y retorna un number, que coincide con el tipo \`Transformador\`.',
        incorrectFeedback:
          'No es correcto. Solo \`(n: number) => n * 2\` es compatible porque recibe \`number\` y retorna \`number\`. Las otras opciones retornan string o boolean, o reciben string, lo que no coincide con \`(n: number) => number\`.',
      },
      {
        question: '¿Por qué es útil crear un type alias para un tipo de función que usas en múltiples parámetros?',
        options: [
          'Para que las funciones sean más rápidas',
          'Para evitar repetir la misma firma de función y mejorar legibilidad',
          'Para que TypeScript genere automáticamente implementaciones',
          'Para que las funciones puedan recibir más parámetros',
        ],
        correctAnswer: 'Para evitar repetir la misma firma de función y mejorar legibilidad',
        correctFeedback:
          'Correcto. En lugar de repetir \`(x: number) => number\` en cada parámetro, defines \`type Transformador\` una vez y lo reutilizas.',
        incorrectFeedback:
          'No es correcto. La ventaja es de legibilidad y mantenimiento: en lugar de repetir la misma firma \`(x: number) => number\` en múltiples parámetros, creas un alias descriptivo que comunica el propósito de la función.',
      },
      {
        question: '¿Puede un type alias de función usarse como tipo de propiedad en un objeto?',
        options: [
          'No, los aliases de función solo se usan en parámetros',
          'Sí, se usa igual que cualquier otro tipo',
          'Solo si la propiedad se llama igual que el alias',
          'Solo con interfaces, no con type aliases',
        ],
        correctAnswer: 'Sí, se usa igual que cualquier otro tipo',
        correctFeedback:
          'Correcto. Los type aliases son tipos de primera clase — puedes usarlos en cualquier posición donde se usa un tipo: parámetros, retornos, propiedades de objetos, etc.',
        incorrectFeedback:
          'No es correcto. Un type alias puede usarse en cualquier posición donde se usa un tipo: como parámetro, tipo de retorno, tipo de variable, y también como tipo de propiedad en un objeto. Son ciudadanos de primera clase en el sistema de tipos.',
      },
      {
        question: '¿Qué verifica TypeScript cuando asignas una función a una variable de tipo alias?',
        options: [
          'Solo que la función exista y no sea undefined',
          'Que la función tenga los parámetros y retorno compatibles con el alias',
          'Solo el tipo de retorno, no los parámetros',
          'Solo los nombres de los parámetros',
        ],
        correctAnswer: 'Que la función tenga los parámetros y retorno compatibles con el alias',
        correctFeedback:
          'Correcto. TypeScript verifica la firma completa: los tipos de los parámetros y el tipo de retorno. Los nombres de los parámetros no importan.',
        incorrectFeedback:
          'No es correcto. TypeScript verifica la firma completa de la función: que los tipos de los parámetros sean compatibles y que el tipo de retorno coincida. Los nombres de los parámetros no importan.',
      },
    ],
  },

  // ── Lección 61 ───────────────────────────────────────────────────────────
  {
    slug: 'type-aliases-arrays',
    title: 'Type aliases con arrays',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 7,
    description:
      'Aprende a usar type aliases para representar arrays de datos como usuarios, productos o tareas.',
    explanation: `Los type aliases son especialmente útiles cuando trabajas con arrays de objetos complejos. Puedes crear un alias para el tipo del elemento individual y otro para el array completo.

**Patrones comunes**

\`\`\`ts
// Tipo del elemento
type Producto = { id: number; nombre: string; precio: number }

// Tipo del array
type ListaProductos = Producto[]

// Equivalentes:
const p1: Producto[] = []
const p2: ListaProductos = []
\`\`\`

**¿Por qué crear el alias del array?**

Si tienes funciones que trabajan con listas, el alias hace la firma más clara:

\`\`\`ts
// Sin alias de array
function mostrar(productos: { id: number; nombre: string; precio: number }[]): void { }

// Con alias de array
type ListaProductos = Producto[]
function mostrar(productos: ListaProductos): void { }
\`\`\`

**Aliases para arrays de primitivos**

\`\`\`ts
type Calificaciones = number[]
type Etiquetas = string[]
type Banderas = boolean[]
\`\`\`

**Arrays con readonly**

Puedes crear aliases para arrays que no pueden modificarse:

\`\`\`ts
type CalificacionesFijas = readonly number[]
// No puedes hacer push, pop, sort, etc.
\`\`\`

**Tuplas con alias**

También puedes crear aliases para tuplas (arrays de longitud fija con tipos por posición):

\`\`\`ts
type Coordenada = [number, number]
type Rango = [minimo: number, maximo: number]
type EntradaLog = [string, Date, number]  // [mensaje, fecha, nivel]
\`\`\`

**Ejemplo real: respuesta de API**

\`\`\`ts
type Estudiante = { id: number; nombre: string; nota: number }
type RespuestaAPI = {
  datos: Estudiante[]
  total: number
  pagina: number
}
\`\`\``,
    codeExample: `// ── archivo: types.ts ────────────────────────────────────────────────────

type Tarea = {
  id: number
  titulo: string
  completada: boolean
  prioridad: 1 | 2 | 3
}

type ListaTareas = Tarea[]

// Funciones que usan los aliases
function contarPendientes(tareas: ListaTareas): number {
  return tareas.filter((t) => !t.completada).length
}

function ordenarPorPrioridad(tareas: ListaTareas): ListaTareas {
  return [...tareas].sort((a, b) => a.prioridad - b.prioridad)
}

function completarTarea(tareas: ListaTareas, id: number): ListaTareas {
  return tareas.map((t) => t.id === id ? { ...t, completada: true } : t)
}

// Datos de ejemplo
const tareas: ListaTareas = [
  { id: 1, titulo: "Estudiar TypeScript", completada: false, prioridad: 1 },
  { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: 3 },
  { id: 3, titulo: "Leer documentación", completada: false, prioridad: 2 },
  { id: 4, titulo: "Practicar ejercicios", completada: false, prioridad: 1 },
]

console.log("Pendientes:", contarPendientes(tareas))  // → 3

const ordenadas = ordenarPorPrioridad(tareas)
ordenadas.forEach((t) => {
  const estado = t.completada ? "✓" : "○"
  console.log(\`[\${t.prioridad}] \${estado} \${t.titulo}\`)
})
// → [1] ○ Estudiar TypeScript
// → [1] ○ Practicar ejercicios
// → [2] ○ Leer documentación
// → [3] ✓ Hacer ejercicio

const actualizadas = completarTarea(tareas, 1)
console.log("Completadas ahora:", actualizadas.filter((t) => t.completada).length)  // → 2

// Aliases para arrays simples
type Calificaciones = number[]
const notas: Calificaciones = [8.5, 7.0, 9.5, 6.0, 4.5]
const promedio = notas.reduce((sum, n) => sum + n, 0) / notas.length
console.log("Promedio:", promedio.toFixed(2))  // → 7.10`,
    keyPoints: [
      'Puedes crear un alias para el tipo individual (`type Producto`) y otro para el array (`type ListaProductos = Producto[]`).',
      'Los aliases de array hacen las firmas de funciones más legibles.',
      'Puedes crear aliases para arrays de primitivos: `type Calificaciones = number[]\`.',
      'Los arrays \`readonly\` evitan mutaciones: \`type Lista = readonly Tipo[]\`.',
      'Las tuplas también pueden tener aliases: \`type Coordenada = [number, number]\`.',
      'Combinar el alias del elemento con el alias del array es un patrón limpio y mantenible.',
    ],
    exercise: {
      description:
        'Crea los tipos \`Producto\` y \`ListaProductos\`. Luego crea una función \`generarReporteInventario\` que reciba un \`ListaProductos\` y retorne un objeto con: \`total\` (cantidad de productos), \`disponibles\` (con stock > 0), \`valorTotal\` (suma de precio * stock), y \`masCaros\` (los 3 más caros). Agrega la propiedad \`stock: number\` a \`Producto\`.',
      hint: 'Para \`masCaros\` usa \`.sort((a, b) => b.precio - a.precio).slice(0, 3)\`. La función retorna \`{ total: number; disponibles: number; valorTotal: number; masCaros: ListaProductos }\`.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de crear un alias para un array de \`Producto\`?',
        options: [
          'type ListaProductos = Array(Producto)',
          'type ListaProductos = Producto[]',
          'type ListaProductos = [Producto]',
          'type ListaProductos = Producto.Array',
        ],
        correctAnswer: 'type ListaProductos = Producto[]',
        correctFeedback:
          'Correcto. \`Producto[]\` es la sintaxis para un array de \`Producto\`. El alias se crea con \`type ListaProductos = Producto[]\`.',
        incorrectFeedback:
          'No es correcto. Para crear un alias de array, usas \`tipo[]\`: \`type ListaProductos = Producto[]\`. Los corchetes \`[Producto]\` son para tuplas, y \`Array(Producto)\` no es sintaxis TypeScript válida.',
      },
      {
        question: '¿Qué ventaja tiene crear un alias \`type ListaProductos = Producto[]\` además de \`type Producto\`?',
        options: [
          'Hace el array más rápido',
          'Hace las firmas de funciones más cortas y legibles',
          'Permite agregar más productos automáticamente',
          'Solo puede usarse con arrays, no con variables individuales',
        ],
        correctAnswer: 'Hace las firmas de funciones más cortas y legibles',
        correctFeedback:
          'Correcto. En lugar de escribir \`Producto[]\` en cada parámetro o retorno, usas \`ListaProductos\`, que también comunica el propósito de la lista.',
        incorrectFeedback:
          'No es correcto. La ventaja es de legibilidad. En lugar de repetir \`{ id: number; nombre: string; precio: number }[]\` en cada función, usas \`ListaProductos\`, que es más corto y semánticamente más claro.',
      },
      {
        question: '¿Qué diferencia hay entre \`Producto[]\` y \`readonly Producto[]\`?',
        options: [
          'No hay diferencia',
          '\`readonly Producto[]\` no puede ser modificado (push, pop, etc.)',
          '\`readonly Producto[]\` solo acepta objetos con propiedad \`readonly\`',
          '\`Producto[]\` es mutable pero \`readonly\` hace el array de solo lectura y más rápido',
        ],
        correctAnswer: '\`readonly Producto[]\` no puede ser modificado (push, pop, etc.)',
        correctFeedback:
          'Correcto. Un array \`readonly\` no permite métodos mutantes como \`push\`, \`pop\`, \`sort\`, o \`splice\`. Solo permite métodos de lectura.',
        incorrectFeedback:
          'No es correcto. La diferencia es que \`readonly Producto[]\` previene modificaciones del array (no puedes hacer \`push\`, \`pop\`, \`sort\`, etc.). El array normal \`Producto[]\` permite todas las operaciones de modificación.',
      },
      {
        question: '¿Para qué se usan las tuplas en TypeScript?',
        options: [
          'Para arrays de longitud fija con tipos específicos por posición',
          'Son un sinónimo de arrays normales',
          'Para arrays que solo contienen strings',
          'Para arrays que pueden cambiar de longitud dinámicamente',
        ],
        correctAnswer: 'Para arrays de longitud fija con tipos específicos por posición',
        correctFeedback:
          'Correcto. Una tupla como \`[string, number]\` representa un array de exactamente 2 elementos donde el primero es string y el segundo es number.',
        incorrectFeedback:
          'No es correcto. Las tuplas son arrays de longitud fija donde cada posición tiene un tipo específico. \`[string, number]\` significa: exactamente 2 elementos, el primero es string y el segundo es number.',
      },
      {
        question: '¿Cuál es la forma de crear un alias para la tupla \`[mensaje: string, nivel: number]\`?',
        options: [
          'type EntradaLog = (string, number)',
          'type EntradaLog = { mensaje: string; nivel: number }',
          'type EntradaLog = [string, number]',
          'type EntradaLog = string | number',
        ],
        correctAnswer: 'type EntradaLog = [string, number]',
        correctFeedback:
          'Correcto. Las tuplas usan corchetes con los tipos en orden. \`[string, number]\` es una tupla de 2 elementos.',
        incorrectFeedback:
          'No es correcto. Las tuplas en TypeScript usan corchetes con los tipos en orden: \`[string, number]\`. Esto representa un array de exactamente 2 elementos: primero string, luego number.',
      },
    ],
  },

  // ── Lección 62 ───────────────────────────────────────────────────────────
  {
    slug: 'cuando-usar-type-aliases',
    title: 'Cuándo usar type aliases',
    module: 'Type aliases',
    moduleNumber: 8,
    order: 8,
    description:
      'Aprende cuándo un type alias hace tu código más claro y cuándo puede ser innecesario.',
    explanation: `Los type aliases son una herramienta poderosa, pero como toda herramienta, hay momentos donde usarlos mejora el código y momentos donde pueden ser innecesarios o incluso añadir complejidad.

**Cuándo SÍ usar un type alias**

1. **Cuando el tipo se repite en múltiples lugares**:
\`\`\`ts
type Usuario = { nombre: string; correo: string }
// Mucho mejor que repetir { nombre: string; correo: string } en 5 funciones
\`\`\`

2. **Cuando el nombre añade significado**:
\`\`\`ts
type EstadoOrden = "pendiente" | "enviado" | "entregado"
// Mucho más claro que string
\`\`\`

3. **Para uniones y combinaciones complejas**:
\`\`\`ts
type Resultado = { datos: string } | { error: string }
\`\`\`

4. **Para tipos de función que se reutilizan**:
\`\`\`ts
type Comparador = (a: number, b: number) => number
\`\`\`

5. **Para documentar la intención del tipo**:
\`\`\`ts
type IdEstudiante = number  // Comunica que no es un número cualquiera
\`\`\`

**Cuándo puede ser innecesario**

1. **Cuando el tipo es simple y se usa una sola vez**:
\`\`\`ts
// Innecesario: solo se usa aquí
type NombreParametro = string
function saludar(nombre: NombreParametro): void { }

// Mejor directo:
function saludar(nombre: string): void { }
\`\`\`

2. **Cuando el alias no añade información nueva**:
\`\`\`ts
// Añade poco valor si no communica nada especial
type MiNumero = number
\`\`\`

**Type alias vs. interface**

Una pregunta frecuente es: ¿debo usar type alias o interface? Ambos son similares para objetos, pero tienen diferencias sutiles que aprenderás en el módulo 9. Por ahora, la regla práctica es:
- Usa **interface** para describir la forma de objetos que pueden extenderse.
- Usa **type alias** para uniones, intersections, funciones o cuando prefieras la sintaxis.

**Regla general**

Usa un type alias cuando el nombre añade claridad, el tipo se reutiliza, o la definición es compleja. Cuando el tipo es simple y solo se usa una vez, úsalo directamente.`,
    codeExample: `// ── archivo: app.ts ──────────────────────────────────────────────────────

// ✓ BIEN: alias que añade significado y se reutiliza
type EstadoPedido = "pendiente" | "procesando" | "enviado" | "entregado" | "cancelado"

type Pedido = {
  id: number
  estado: EstadoPedido   // más claro que string
  producto: string
  total: number
}

function actualizarEstado(pedido: Pedido, nuevoEstado: EstadoPedido): Pedido {
  return { ...pedido, estado: nuevoEstado }
}

function esEstadoFinal(estado: EstadoPedido): boolean {
  return estado === "entregado" || estado === "cancelado"
}

const pedido: Pedido = { id: 1, estado: "pendiente", producto: "Teclado", total: 850 }
const pedidoEnviado = actualizarEstado(pedido, "enviado")
console.log(esEstadoFinal("enviado"))    // → false
console.log(esEstadoFinal("entregado")) // → true

// ✓ BIEN: alias para tipo de función reutilizable
type ProcesadorPedido = (pedido: Pedido) => string

const formatearPedido: ProcesadorPedido = (p) => \`#\${p.id}: \${p.producto} — \${p.estado}\`
const resumirPedido: ProcesadorPedido = (p) => \`Pedido #\${p.id}: $\${p.total}\`

console.log(formatearPedido(pedidoEnviado))  // → #1: Teclado — enviado
console.log(resumirPedido(pedidoEnviado))    // → Pedido #1: $850

// ✓ BIEN: alias para array reutilizable
type ListaPedidos = Pedido[]

function totalVentas(pedidos: ListaPedidos): number {
  return pedidos.reduce((sum, p) => sum + p.total, 0)
}

// ○ INNECESARIO: alias que no añade valor
// type MiString = string  ← no aporta nada
// type NumeroSimple = number  ← igual de claro que number

// ✓ BIEN CUANDO: documentar intención
type DescuentoPorcentual = number  // Aclara que es un porcentaje (0-100)
function aplicarDescuento(precio: number, descuento: DescuentoPorcentual): number {
  return precio * (1 - descuento / 100)
}

console.log(aplicarDescuento(1000, 25))  // → 750`,
    keyPoints: [
      'Usa type aliases cuando el tipo se repite en múltiples lugares del código.',
      'Úsalos cuando el nombre añade significado semántico que el tipo base no tiene.',
      'Son especialmente útiles para uniones, intersections y tipos de función.',
      'Evítalos cuando el tipo es simple y solo se usa en un solo lugar.',
      'No crees aliases que no añadan información nueva (`type MiNumero = number`).',
      'La regla práctica: si el alias hace el código más claro, úsalo; si no, usa el tipo directamente.',
    ],
    exercise: {
      description:
        'Revisa este código y decide cuáles de estos aliases son útiles y cuáles innecesarios. Explica por qué:\n\n```ts\ntype MiString = string\ntype NombreCompleto = string\ntype EstadoConexion = "conectado" | "desconectado" | "reconectando"\ntype N = number\ntype CallbackConexion = (estado: EstadoConexion) => void\ntype ListaNumeros = number[]\ntype IdUsuario = number\n```\n\nDespués de analizar, crea un pequeño sistema usando los aliases que SÍ son útiles.',
      hint: 'Los aliases útiles son los que comunican intención (EstadoConexion, NombreCompleto, CallbackConexion, IdUsuario) o se usan en múltiples lugares. `MiString` y `N` son innecesarios porque no añaden información.',
    },
    quiz: [
      {
        question: '¿Cuándo es más útil un type alias?',
        options: [
          'Cuando el tipo es simple como string o number',
          'Cuando el tipo se usa solo en una función',
          'Cuando el nombre añade claridad y el tipo se reutiliza',
          'Siempre, para todos los tipos',
        ],
        correctAnswer: 'Cuando el nombre añade claridad y el tipo se reutiliza',
        correctFeedback:
          'Correcto. Los type aliases brillan cuando el nombre añade significado y cuando el tipo aparece en múltiples lugares.',
        incorrectFeedback:
          'No es correcto. Un type alias es más útil cuando su nombre añade información que el tipo base no comunica, y cuando el tipo se usa en múltiples lugares. Para tipos simples usados una sola vez, es mejor usar el tipo directamente.',
      },
      {
        question: '¿Cuál de estos type aliases añade valor real?',
        options: [
          'type MiTexto = string',
          'type X = number',
          'type EstadoOrden = "pendiente" | "enviado" | "entregado"',
          'type UnNumero = number',
        ],
        correctAnswer: 'type EstadoOrden = "pendiente" | "enviado" | "entregado"',
        correctFeedback:
          'Correcto. `EstadoOrden` restringe los valores posibles a tres estados específicos y comunica claramente el propósito del tipo.',
        incorrectFeedback:
          'No es correcto. Solo `EstadoOrden` añade valor real: restringe los valores a opciones específicas y comunica claramente el propósito. `MiTexto`, `X` y `UnNumero` son aliases de `string`/`number` sin añadir información útil.',
      },
      {
        question: '¿Cuál sería el momento ideal para crear `type IdUsuario = number`?',
        options: [
          'Nunca, es redundante',
          'Cuando quieres documentar que ese number representa específicamente un id de usuario',
          'Solo cuando el id puede ser negativo',
          'Solo si el id tiene más de 5 dígitos',
        ],
        correctAnswer: 'Cuando quieres documentar que ese number representa específicamente un id de usuario',
        correctFeedback:
          'Correcto. Aunque `IdUsuario` sigue siendo `number` internamente, el nombre comunica el propósito — especialmente útil en funciones con múltiples parámetros numéricos.',
        incorrectFeedback:
          'No es correcto. `type IdUsuario = number` tiene valor semántico: comunica que ese número representa un id de usuario específico, no cualquier número. Es útil cuando tienes funciones con múltiples parámetros numéricos y quieres claridad sobre qué representa cada uno.',
      },
      {
        question: '¿Cuál es la diferencia práctica entre type alias e interface para objetos en TypeScript?',
        options: [
          'No hay diferencia en TypeScript moderno para objetos básicos',
          'Los type aliases son más rápidos',
          'Las interfaces no pueden tener propiedades opcionales',
          'Los type aliases solo funcionan en archivos .ts',
        ],
        correctAnswer: 'No hay diferencia en TypeScript moderno para objetos básicos',
        correctFeedback:
          'Correcto. Para objetos básicos, type alias e interface son muy similares. Las diferencias están en características avanzadas como la extensión y la declaración de fusión.',
        incorrectFeedback:
          'No es correcto. En TypeScript moderno, para objetos básicos, type alias e interface son muy similares y a menudo intercambiables. Las diferencias aparecen en características más avanzadas como `extends`, la fusión de declaraciones y casos de uso específicos que verás en el módulo 9.',
      },
      {
        question: '¿Cuándo conviene usar el tipo directamente en lugar de crear un alias?',
        options: [
          'Nunca, siempre crea un alias',
          'Cuando el tipo es complejo y largo',
          'Cuando el tipo es simple y solo se usa en un lugar',
          'Solo cuando el proyecto tiene menos de 100 líneas',
        ],
        correctAnswer: 'Cuando el tipo es simple y solo se usa en un lugar',
        correctFeedback:
          'Correcto. Para `function saludar(nombre: string)`, crear `type NombreParam = string` es innecesario. El contexto ya es claro.',
        incorrectFeedback:
          'No es correcto. Para tipos simples que se usan en un solo lugar y donde el contexto es claro, es mejor usar el tipo directamente. Crear un alias en ese caso añade una indirección sin beneficio. La regla: si el alias no hace el código más claro, no lo crees.',
      },
    ],
  },
]

export const tsModule8: Module = {
  number: 8,
  title: 'Type aliases',
  level: 'nivel2',
  lessons: lessonsTsModule8,
}
