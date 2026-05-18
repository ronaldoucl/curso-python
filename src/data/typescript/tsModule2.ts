import type { Lesson, Module } from '@/types'

export const lessonsTsModule2: Lesson[] = [
  // ── Lección 7 ────────────────────────────────────────────────────────────
  {
    slug: 'instalar-nodejs-typescript',
    title: 'Instalar Node.js',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 1,
    description:
      'Aprende por qué necesitas Node.js para trabajar con TypeScript en tu computadora.',
    explanation: `Para trabajar con TypeScript en tu computadora necesitas **Node.js**. Puede parecer extraño al principio: ¿por qué necesito Node.js si TypeScript no es lo mismo que Node.js? La respuesta es sencilla.

**¿Qué es Node.js?**

Node.js es un entorno de ejecución de JavaScript que corre fuera del navegador. Fue creado en 2009 y permite ejecutar JavaScript (y por lo tanto, el JavaScript generado por TypeScript) en tu computadora, servidores y otros entornos.

**¿Por qué Node.js para TypeScript?**

Hay dos razones principales:

1. **El compilador de TypeScript (\`tsc\`) se instala como un paquete de Node.js.** Cuando instalas TypeScript, en realidad estás instalando un programa de Node.js que se encarga de compilar tu código.

2. **npm (el gestor de paquetes de Node.js) es la herramienta que se usa para instalar TypeScript.** npm viene incluido cuando instalas Node.js.

Piénsalo así: Node.js es como instalar el motor que hace funcionar a TypeScript en tu máquina.

**¿Qué versión de Node.js necesito?**

Para trabajar con TypeScript moderno, necesitas Node.js versión 18 o superior (LTS). Las versiones LTS (Long Term Support) son las más estables y recomendadas.

**Cómo instalar Node.js**

1. Ve a nodejs.org
2. Descarga la versión LTS (la recomendada)
3. Ejecuta el instalador (es como instalar cualquier programa)
4. Abre una terminal y verifica la instalación

**Verificar que Node.js está instalado**

Una vez instalado, abre tu terminal y escribe:

\`\`\`bash
node --version
\`\`\`

Deberías ver algo como: \`v20.11.0\` (el número puede variar).

También verifica npm:

\`\`\`bash
npm --version
\`\`\`

Si ambos comandos muestran versiones, Node.js está correctamente instalado.

**¿Qué es npm?**

npm (Node Package Manager) es el gestor de paquetes que viene con Node.js. Con npm puedes instalar herramientas y librerías para tus proyectos. TypeScript se instala con npm, igual que miles de otras herramientas del ecosistema JavaScript.

**¿Qué pasa si ya tengo Node.js instalado?**

Verifica tu versión con \`node --version\`. Si tienes una versión reciente (18+), estás listo para continuar. No necesitas reinstalar.`,
    codeExample: `// ── Verificar la instalación en la terminal ──────────────────────────────
// Abre tu terminal (cmd, PowerShell, Terminal, iTerm, etc.)
// y ejecuta estos comandos:

// Verificar Node.js
// > node --version
// v20.11.0   ← verás el número de tu versión

// Verificar npm
// > npm --version
// 10.2.4     ← verás el número de tu versión

// Si ambos comandos funcionan, estás listo para el siguiente paso.

// ── ¿Qué puede pasar si el comando no funciona? ──────────────────────────
// Si ves "command not found" o "no se reconoce como comando interno":
// → Node.js no está instalado o no está en el PATH del sistema.
// → Solución: descarga e instala desde nodejs.org y reinicia la terminal.

// ── Ejemplo de código Node.js (para entender el contexto) ────────────────
// Una vez instalado Node.js, puedes ejecutar JavaScript directamente:

// archivo: hola.js
console.log("Hola desde Node.js")
console.log("Node.js version:", process.version)

// En terminal: node hola.js
// → Hola desde Node.js
// → Node.js version: v20.11.0`,
    keyPoints: [
      'Node.js es necesario para TypeScript porque el compilador tsc se instala como paquete de Node.js.',
      'npm (Node Package Manager) viene incluido con Node.js y se usa para instalar TypeScript.',
      'La versión recomendada es LTS (18 o superior) — se descarga desde nodejs.org.',
      'Verifica la instalación con: node --version y npm --version en la terminal.',
      'Si ves un número de versión en ambos comandos, Node.js está correctamente instalado.',
      'Si ya tienes Node.js instalado con versión 18+, no necesitas reinstalar.',
    ],
    exercise: {
      description:
        'Instala Node.js si no lo tienes. Luego abre tu terminal y ejecuta: node --version y npm --version. Anota las versiones que ves. Si ya lo tienes instalado, verifica que sea versión 18 o superior. ¿Qué versiones obtienes?',
      hint: 'Si estás en Windows puedes usar CMD, PowerShell o el terminal de VS Code. Si estás en Mac o Linux usa Terminal. El comando es el mismo en todos: node --version',
    },
    quiz: [
      {
        question: '¿Por qué necesitas Node.js para usar TypeScript?',
        options: [
          'Porque TypeScript solo funciona en servidores Node.js',
          'Porque el compilador de TypeScript (tsc) es un paquete de Node.js y se instala con npm',
          'Porque Node.js convierte TypeScript a JavaScript automáticamente',
          'Porque TypeScript y Node.js son el mismo programa',
        ],
        correctAnswer: 'Porque el compilador de TypeScript (tsc) es un paquete de Node.js y se instala con npm',
        correctFeedback:
          'Correcto. El compilador tsc se instala como un paquete de Node.js usando npm. Por eso necesitas Node.js incluso si no vas a usar Node.js como entorno de ejecución.',
        incorrectFeedback:
          'No es correcto. Node.js es necesario porque el compilador de TypeScript (tsc) se instala como paquete de Node.js usando npm. Node.js no convierte TypeScript automáticamente ni es lo mismo que TypeScript.',
      },
      {
        question: '¿Qué comando verifica que Node.js está instalado correctamente?',
        options: ['node install', 'node check', 'node --version', 'npm install node'],
        correctAnswer: 'node --version',
        correctFeedback:
          'Correcto. node --version muestra la versión instalada de Node.js. Si ves un número como v20.11.0, Node.js está correctamente instalado.',
        incorrectFeedback:
          'No es correcto. Para verificar la versión de Node.js instalada, el comando es node --version. Si devuelve un número de versión, la instalación es correcta.',
      },
      {
        question: '¿Qué versión mínima de Node.js se recomienda para TypeScript moderno?',
        options: ['Node.js 8', 'Node.js 12', 'Node.js 18 LTS o superior', 'Cualquier versión funciona igual'],
        correctAnswer: 'Node.js 18 LTS o superior',
        correctFeedback:
          'Correcto. Se recomienda Node.js 18 LTS o superior para trabajar con TypeScript moderno. Las versiones LTS son las más estables.',
        incorrectFeedback:
          'No es correcto. Se recomienda Node.js 18 LTS o superior. Las versiones más antiguas pueden no soportar todas las funciones de TypeScript moderno.',
      },
      {
        question: '¿Qué es npm?',
        options: [
          'Un lenguaje de programación de Node.js',
          'El gestor de paquetes de Node.js, usado para instalar herramientas y librerías',
          'Un framework de JavaScript para el backend',
          'Un tipo de base de datos NoSQL',
        ],
        correctAnswer: 'El gestor de paquetes de Node.js, usado para instalar herramientas y librerías',
        correctFeedback:
          'Correcto. npm es Node Package Manager, el gestor de paquetes que viene incluido con Node.js. Se usa para instalar TypeScript y miles de otras herramientas.',
        incorrectFeedback:
          'No es correcto. npm (Node Package Manager) es el gestor de paquetes que viene incluido con Node.js. Permite instalar herramientas como TypeScript y librerías para tus proyectos.',
      },
    ],
  },

  // ── Lección 8 ────────────────────────────────────────────────────────────
  {
    slug: 'instalar-typescript',
    title: 'Instalar TypeScript',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 2,
    description:
      'Aprende a instalar TypeScript y verificar que el compilador esté disponible.',
    explanation: `Con Node.js instalado, instalar TypeScript es muy sencillo. Solo necesitas un comando en la terminal.

**Instalar TypeScript globalmente**

La forma más directa es instalar TypeScript de forma global en tu computadora. Esto significa que podrás usar el comando \`tsc\` desde cualquier carpeta:

\`\`\`bash
npm install -g typescript
\`\`\`

El flag \`-g\` significa "global". Sin él, TypeScript se instalaría solo en la carpeta actual del proyecto.

**Verificar la instalación**

Una vez instalado, verifica que TypeScript está disponible:

\`\`\`bash
tsc --version
\`\`\`

Deberías ver algo como: \`Version 5.4.5\`

**¿Instalación global o local?**

Existen dos formas de instalar TypeScript:

- **Global (\`npm install -g typescript\`):** Disponible en toda la computadora. Útil para aprender y para uso personal.
- **Local (\`npm install typescript\`):** Solo en la carpeta del proyecto. Mejor práctica para proyectos en equipo, ya que garantiza que todos usan la misma versión.

Para este curso, la instalación global es perfecta.

**También puedes usar npx**

Si prefieres no instalar TypeScript globalmente, puedes usar \`npx\` para ejecutar el compilador sin instalarlo permanentemente:

\`\`\`bash
npx tsc --version
\`\`\`

\`npx\` descarga y ejecuta el paquete sin instalarlo permanentemente. Es útil para probar sin comprometer la configuración de tu computadora.

**¿Qué se instala exactamente?**

Cuando instalas TypeScript, obtienes principalmente:

1. **\`tsc\`:** el compilador de TypeScript que convierte \`.ts\` a \`.js\`.
2. **Las definiciones de tipo de la librería estándar:** TypeScript ya "sabe" cómo son los métodos de String, Array, Math, etc.

**Desinstalar TypeScript**

Si necesitas desinstalar:

\`\`\`bash
npm uninstall -g typescript
\`\`\`

Pero no hay razón para hacerlo — es una herramienta pequeña y útil.`,
    codeExample: `// ── Pasos de instalación en la terminal ─────────────────────────────────

// Paso 1: Instalar TypeScript globalmente
// > npm install -g typescript

// Paso 2: Verificar la instalación
// > tsc --version
// Version 5.4.5

// Paso 3: Verificar también con npx (alternativa sin instalación global)
// > npx tsc --version
// Version 5.4.5

// ── ¿Qué pasa si tsc no se reconoce? ────────────────────────────────────
// En Windows, si tsc no funciona después de instalar, puede ser por la
// política de ejecución de PowerShell. Solución:
//
// > Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
//
// O usa npm run tsc en lugar del comando global.

// ── Resumen de comandos útiles de npm ────────────────────────────────────
// npm install -g typescript    → instala TypeScript globalmente
// npm install typescript       → instala TypeScript en el proyecto actual
// npm uninstall -g typescript  → desinstala TypeScript global
// tsc --version                → muestra la versión instalada
// tsc --help                   → muestra la ayuda del compilador`,
    keyPoints: [
      'TypeScript se instala con npm: npm install -g typescript',
      'El flag -g instala TypeScript globalmente, disponible en toda la computadora.',
      'Verifica la instalación con: tsc --version — debe mostrar un número de versión.',
      'npx tsc es una alternativa para usar TypeScript sin instalación global permanente.',
      'La instalación global es perfecta para aprender; en proyectos de equipo se prefiere local.',
      'Si tsc no se reconoce en Windows, revisa la política de ejecución de PowerShell.',
    ],
    exercise: {
      description:
        'Instala TypeScript con npm install -g typescript. Luego ejecuta tsc --version en la terminal y anota el número de versión que ves. Si ya lo tienes instalado, simplemente verifica la versión. ¿Qué versión obtienes?',
      hint: 'Si ves un mensaje de error en Windows como "la ejecución de scripts está deshabilitada", ejecuta: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned en PowerShell como administrador.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando correcto para instalar TypeScript globalmente?',
        options: [
          'node install typescript',
          'npm install typescript',
          'npm install -g typescript',
          'tsc install global',
        ],
        correctAnswer: 'npm install -g typescript',
        correctFeedback:
          'Correcto. npm install -g typescript instala TypeScript globalmente. El flag -g significa global, lo que hace que tsc esté disponible en toda la computadora.',
        incorrectFeedback:
          'No es correcto. El comando correcto es npm install -g typescript. El flag -g es crucial: sin él, TypeScript se instalaría solo en la carpeta actual.',
      },
      {
        question: '¿Qué hace el comando tsc --version?',
        options: [
          'Instala la última versión de TypeScript',
          'Muestra la versión de TypeScript instalada',
          'Compila todos los archivos .ts del proyecto',
          'Actualiza TypeScript a la última versión',
        ],
        correctAnswer: 'Muestra la versión de TypeScript instalada',
        correctFeedback:
          'Correcto. tsc --version muestra el número de versión de TypeScript instalado, como "Version 5.4.5". Es una forma de verificar que la instalación fue exitosa.',
        incorrectFeedback:
          'No es correcto. tsc --version solo muestra la versión instalada. Para compilar archivos usarías tsc archivo.ts, y para actualizar usarías npm install -g typescript@latest.',
      },
      {
        question: '¿Qué instala exactamente el paquete TypeScript?',
        options: [
          'Solo el compilador tsc',
          'El compilador tsc y las definiciones de tipo de la librería estándar',
          'Node.js, npm y el compilador tsc',
          'Solo las definiciones de tipo, el compilador viene aparte',
        ],
        correctAnswer: 'El compilador tsc y las definiciones de tipo de la librería estándar',
        correctFeedback:
          'Correcto. Al instalar TypeScript obtienes el compilador tsc y las definiciones de tipo de la librería estándar, que le dicen a TypeScript cómo son los métodos de String, Array, Math, etc.',
        incorrectFeedback:
          'No es correcto. El paquete TypeScript incluye el compilador tsc y las definiciones de tipo de la librería estándar de JavaScript. Node.js y npm deben instalarse por separado.',
      },
    ],
  },

  // ── Lección 9 ────────────────────────────────────────────────────────────
  {
    slug: 'usar-tsc',
    title: 'Usar tsc',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 3,
    description:
      'Aprende qué es tsc, el compilador de TypeScript, y cómo convierte archivos .ts en JavaScript.',
    explanation: `\`tsc\` es el **compilador de TypeScript** (TypeScript Compiler). Es el corazón de TypeScript: convierte tus archivos \`.ts\` en archivos \`.js\` que el navegador y Node.js pueden ejecutar.

**¿Qué hace tsc exactamente?**

1. Lee tu archivo \`.ts\`
2. **Verifica los tipos:** si hay errores de tipo, los muestra en la terminal
3. **Genera el archivo \`.js\`:** convierte tu TypeScript a JavaScript eliminando los tipos
4. El archivo \`.js\` resultante es JavaScript puro, listo para ejecutarse

**Comandos básicos de tsc**

\`\`\`bash
# Compilar un archivo específico
tsc archivo.ts

# Compilar con observación de cambios (útil durante desarrollo)
tsc archivo.ts --watch

# Compilar todo el proyecto (usa tsconfig.json)
tsc

# Ver la versión
tsc --version

# Ver ayuda
tsc --help
\`\`\`

**Lo que pasa durante la compilación**

Cuando ejecutas \`tsc main.ts\`:
- Si no hay errores: genera \`main.js\` silenciosamente
- Si hay errores de tipo: muestra los errores pero **igual genera el archivo \`.js\`** (por defecto)

Esto puede sorprenderte al principio. TypeScript muestra el error pero aun así genera el JavaScript. Esto es intencional para facilitar la migración gradual desde JavaScript.

**Ejemplo del proceso**

\`\`\`ts
// main.ts
let nombre: string = "Ana"
console.log(nombre)
\`\`\`

Después de ejecutar \`tsc main.ts\`, obtienes:

\`\`\`js
// main.js (generado automáticamente)
let nombre = "Ana";
console.log(nombre);
\`\`\`

¿Ves? El tipo \`: string\` desapareció. El JavaScript resultante es equivalente.

**El modo watch**

Durante el desarrollo, es molesto compilar manualmente cada vez que haces un cambio. El modo watch (\`--watch\` o \`-w\`) hace que tsc vigile el archivo y recompile automáticamente cuando detecta cambios:

\`\`\`bash
tsc main.ts --watch
\`\`\`

**Ejecutar el resultado**

Después de compilar, ejecutas el archivo JavaScript con Node.js:

\`\`\`bash
node main.js
\`\`\`

O lo incluyes en tu HTML con \`<script src="main.js">\`.`,
    codeExample: `// ── Flujo completo: escribir → compilar → ejecutar ───────────────────────

// PASO 1: Crea el archivo main.ts con este contenido:

function saludar(nombre: string): string {
  return \`¡Hola, \${nombre}!\`
}

const mensaje = saludar("Sofía")
console.log(mensaje)

// PASO 2: En la terminal, compila:
// > tsc main.ts

// PASO 3: TypeScript genera main.js:
// function saludar(nombre) {
//   return \`¡Hola, \${nombre}!\`;
// }
// const mensaje = saludar("Sofía");
// console.log(mensaje);

// PASO 4: Ejecuta el resultado con Node.js:
// > node main.js
// → ¡Hola, Sofía!

// ── Ejemplo con error de tipo ─────────────────────────────────────────────

// Si el archivo tuviera:
// saludar(42)  ← número en vez de string

// tsc mostraría:
// error TS2345: Argument of type 'number' is not assignable
//              to parameter of type 'string'.

// El error aparece con: número de línea, tipo esperado y tipo recibido.`,
    keyPoints: [
      'tsc es el compilador de TypeScript que convierte archivos .ts en archivos .js.',
      'Uso básico: tsc archivo.ts — genera un archivo .js en el mismo directorio.',
      'Si hay errores de tipo, tsc los muestra pero igual genera el JavaScript (por defecto).',
      'El modo watch (tsc --watch) recompila automáticamente al detectar cambios.',
      'El archivo .js generado es JavaScript puro sin tipos — listo para el navegador o Node.js.',
      'Después de compilar, ejecutas el .js con Node.js: node archivo.js',
    ],
    exercise: {
      description:
        'Crea un archivo llamado saludo.ts con una función que reciba un nombre (string) y devuelva un saludo. Compílalo con tsc saludo.ts. Abre el archivo saludo.js generado y compara el TypeScript original con el JavaScript resultante. ¿Qué diferencias ves?',
      hint: 'Las principales diferencias serán: los tipos (: string) desaparecen en el .js, y puede que TypeScript cambie template literals o const según la versión de JavaScript objetivo. Usa tsc saludo.ts para compilar y node saludo.js para ejecutar.',
    },
    quiz: [
      {
        question: '¿Qué hace el comando tsc main.ts?',
        options: [
          'Ejecuta el archivo main.ts directamente',
          'Compila main.ts y genera un archivo main.js',
          'Instala TypeScript en la carpeta actual',
          'Verifica los tipos pero no genera ningún archivo',
        ],
        correctAnswer: 'Compila main.ts y genera un archivo main.js',
        correctFeedback:
          'Correcto. tsc main.ts compila el archivo TypeScript y genera un archivo main.js en el mismo directorio, con el código convertido a JavaScript.',
        incorrectFeedback:
          'No es correcto. tsc main.ts compila el archivo TypeScript: verifica los tipos y genera un archivo main.js con JavaScript puro.',
      },
      {
        question: '¿Qué ocurre si hay un error de tipo cuando ejecutas tsc?',
        options: [
          'tsc no genera ningún archivo hasta que corrijas el error',
          'tsc muestra el error pero igual genera el archivo .js por defecto',
          'tsc corrige automáticamente el error',
          'tsc solo muestra el error si usas el flag --strict',
        ],
        correctAnswer: 'tsc muestra el error pero igual genera el archivo .js por defecto',
        correctFeedback:
          'Correcto. Por defecto, tsc muestra el error en la terminal pero aun así genera el JavaScript. Esto facilita migrar proyectos gradualmente desde JavaScript.',
        incorrectFeedback:
          'No es correcto. Por defecto, tsc muestra el error de tipo pero igual genera el archivo .js. Puedes cambiar este comportamiento con la opción noEmitOnError en tsconfig.json.',
      },
      {
        question: '¿Qué hace el flag --watch en el comando tsc main.ts --watch?',
        options: [
          'Muestra los cambios del archivo sin compilar',
          'Vigila el archivo y recompila automáticamente cuando detecta cambios',
          'Ejecuta el archivo .js después de compilar',
          'Solo muestra los errores sin generar el .js',
        ],
        correctAnswer: 'Vigila el archivo y recompila automáticamente cuando detecta cambios',
        correctFeedback:
          'Correcto. El modo watch vigila el archivo y lo recompila cada vez que lo guardas. Muy útil durante el desarrollo para no compilar manualmente cada vez.',
        incorrectFeedback:
          'No es correcto. El flag --watch activa el modo de observación: tsc vigila el archivo y lo recompila automáticamente cuando detecta cambios al guardar.',
      },
    ],
  },

  // ── Lección 10 ───────────────────────────────────────────────────────────
  {
    slug: 'primer-archivo-ts',
    title: 'Crear tu primer archivo .ts',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 4,
    description:
      'Crea tu primer archivo TypeScript y compílalo a JavaScript.',
    explanation: `Es momento de escribir y compilar tu primer archivo TypeScript. No hay mejor forma de aprender que hacerlo.

**El plan**

1. Crear una carpeta para el proyecto
2. Crear el archivo \`main.ts\`
3. Escribir código TypeScript básico
4. Compilarlo con \`tsc main.ts\`
5. Ejecutar el resultado con \`node main.js\`

**Paso 1: Crear una carpeta**

Crea una carpeta llamada \`mi-typescript\` en tu computadora. Puedes hacerlo desde el explorador de archivos o con el terminal:

\`\`\`bash
mkdir mi-typescript
cd mi-typescript
\`\`\`

**Paso 2: Crear el archivo main.ts**

Abre VS Code en esa carpeta (\`code .\`) y crea un archivo llamado \`main.ts\`.

La extensión \`.ts\` le dice al editor y al compilador que es un archivo TypeScript.

**Paso 3: Escribir el código**

\`\`\`ts
// main.ts
let nombre: string = "Sofía"
let edad: number = 22
let estaActiva: boolean = true

console.log(\`Nombre: \${nombre}\`)
console.log(\`Edad: \${edad}\`)
console.log(\`Activa: \${estaActiva}\`)
\`\`\`

**Paso 4: Compilar**

En el terminal, dentro de la carpeta del proyecto:

\`\`\`bash
tsc main.ts
\`\`\`

Si no hay errores, verás que se creó un archivo \`main.js\`.

**Paso 5: Ejecutar**

\`\`\`bash
node main.js
\`\`\`

Deberías ver:
\`\`\`
Nombre: Sofía
Edad: 22
Activa: true
\`\`\`

**¿Qué contiene el archivo main.js generado?**

\`\`\`js
let nombre = "Sofía";
let edad = 22;
let estaActiva = true;
console.log(\`Nombre: \${nombre}\`);
console.log(\`Edad: \${edad}\`);
console.log(\`Activa: \${estaActiva}\`);
\`\`\`

Exactamente igual, pero sin los tipos. TypeScript hizo su trabajo y ahora el archivo es JavaScript puro.

**Ventaja con VS Code**

Si tienes VS Code y TypeScript instalado, mientras escribes el código TS verás:
- Colores de sintaxis para TypeScript
- Autocompletado con los tipos
- Errores subrayados en rojo antes de compilar`,
    codeExample: `// ── main.ts: tu primer archivo TypeScript ───────────────────────────────

// Variables con tipos explícitos
let nombre: string = "Sofía"
let edad: number = 22
let estaActiva: boolean = true

// Función con tipos en parámetros y retorno
function presentar(nombre: string, edad: number): string {
  return \`Hola, me llamo \${nombre} y tengo \${edad} años.\`
}

// Llamada correcta
const presentacion = presentar(nombre, edad)
console.log(presentacion)
// → Hola, me llamo Sofía y tengo 22 años.

// Datos de un producto
const producto = {
  nombre: "Laptop",
  precio: 850,
  disponible: true
}

console.log(\`Producto: \${producto.nombre} — $\${producto.precio}\`)

// ── Comandos en terminal ──────────────────────────────────────────────────
// Para compilar:   tsc main.ts
// Para ejecutar:   node main.js
// Para ambos:      tsc main.ts && node main.js  (en Mac/Linux/PowerShell)`,
    keyPoints: [
      'Los archivos TypeScript tienen extensión .ts en lugar de .js.',
      'El flujo básico es: crear main.ts → compilar con tsc main.ts → ejecutar con node main.js.',
      'Si no hay errores de tipo, tsc crea el archivo .js silenciosamente.',
      'El archivo .js generado es idéntico al TypeScript original pero sin los tipos.',
      'VS Code muestra errores de TypeScript en rojo antes de que compiles.',
      'Puedes compilar y ejecutar en un solo paso: tsc main.ts && node main.js',
    ],
    exercise: {
      description:
        'Crea una carpeta llamada "mi-typescript" y dentro un archivo main.ts. En ese archivo, declara variables tipadas con tu nombre (string), edad (number) y si tienes mascota (boolean). Agrega una función que reciba nombre y edad y devuelva un string de presentación. Compila con tsc y ejecuta con node. Verifica que funciona correctamente.',
      hint: 'Si ves el error "cannot find name X" en VS Code pero el código es correcto, prueba guardar el archivo con Ctrl+S y esperar un momento. El editor de VS Code necesita tiempo para analizar el archivo.',
    },
    quiz: [
      {
        question: '¿Qué extensión tienen los archivos TypeScript?',
        options: ['.tsx', '.js', '.ts', '.typ'],
        correctAnswer: '.ts',
        correctFeedback:
          'Correcto. Los archivos TypeScript usan la extensión .ts. (La extensión .tsx se usa para archivos TypeScript con JSX, típicamente en React.)',
        incorrectFeedback:
          'No es correcto. Los archivos TypeScript tienen extensión .ts. La extensión .tsx se usa para TypeScript con JSX (React). Los archivos .js son JavaScript puro.',
      },
      {
        question: '¿Cuál es el orden correcto para compilar y ejecutar un archivo TypeScript?',
        options: [
          'node main.ts → tsc main.ts',
          'tsc main.ts → node main.js',
          'node main.ts directamente (no necesita compilar)',
          'tsc main.js → node main.ts',
        ],
        correctAnswer: 'tsc main.ts → node main.js',
        correctFeedback:
          'Correcto. Primero compilas el TypeScript con tsc (genera main.js), luego ejecutas el JavaScript resultante con node main.js.',
        incorrectFeedback:
          'No es correcto. El orden es: primero compilas con tsc main.ts (genera main.js), luego ejecutas con node main.js. Node.js no puede ejecutar .ts directamente.',
      },
      {
        question: '¿Qué diferencia hay entre main.ts y el main.js que genera TypeScript?',
        options: [
          'El .js tiene más código optimizado por TypeScript',
          'El .js es idéntico pero sin los tipos ni anotaciones de TypeScript',
          'El .js usa una sintaxis de JavaScript muy antigua',
          'No hay diferencia: los archivos son idénticos',
        ],
        correctAnswer: 'El .js es idéntico pero sin los tipos ni anotaciones de TypeScript',
        correctFeedback:
          'Correcto. El archivo .js generado contiene el mismo código lógico pero sin las anotaciones de tipo (: string, : number, etc.). Los tipos solo existen en el archivo .ts.',
        incorrectFeedback:
          'No es correcto. La diferencia principal es que el .js no tiene los tipos. TypeScript elimina todas las anotaciones de tipo (: string, : number, etc.) al compilar.',
      },
    ],
  },

  // ── Lección 11 ───────────────────────────────────────────────────────────
  {
    slug: 'configurar-tsconfig',
    title: 'Configurar tsconfig.json',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 5,
    description:
      'Aprende qué es tsconfig.json y por qué ayuda a controlar cómo TypeScript analiza y compila tu proyecto.',
    explanation: `Cuando compilas con \`tsc archivo.ts\`, TypeScript usa una configuración mínima por defecto. Pero en proyectos reales, necesitas más control. Para eso existe \`tsconfig.json\`.

**¿Qué es tsconfig.json?**

Es un archivo de configuración en formato JSON que le dice a TypeScript:
- ¿Qué archivos compilar?
- ¿A qué versión de JavaScript convertir el resultado?
- ¿Qué tan estricta debe ser la verificación de tipos?
- ¿Dónde colocar los archivos compilados?

**Crear tsconfig.json**

En la carpeta de tu proyecto, ejecuta:

\`\`\`bash
tsc --init
\`\`\`

Esto genera un \`tsconfig.json\` con todas las opciones disponibles (la mayoría comentadas).

**Opciones más importantes para principiantes**

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
\`\`\`

- **\`target\`:** la versión de JavaScript que se genera. \`ES2020\` es una buena opción moderna.
- **\`strict\`:** activa todas las verificaciones estrictas de TypeScript. Muy recomendado.
- **\`outDir\`:** carpeta donde se guardan los archivos \`.js\` compilados.
- **\`rootDir\`:** carpeta donde están los archivos \`.ts\` fuente.

**Compilar con tsconfig.json**

Una vez que tienes \`tsconfig.json\`, simplemente ejecutas:

\`\`\`bash
tsc
\`\`\`

Sin nombre de archivo. TypeScript lee el \`tsconfig.json\`, encuentra todos los archivos \`.ts\` configurados y los compila según las opciones.

**La opción strict**

\`"strict": true\` activa varias verificaciones de seguridad adicionales. Es la práctica recomendada en proyectos nuevos. Puede ser un poco más exigente al principio, pero te ayuda a escribir código más correcto.

**Para aprender, ¿necesito tsconfig.json?**

Para lecciones simples con un solo archivo, puedes compilar con \`tsc archivo.ts\` sin tsconfig. Pero es buena práctica entender cómo funciona, ya que todos los proyectos reales lo usan.`,
    codeExample: `// ── Crear tsconfig.json con el comando ───────────────────────────────────
// En terminal, dentro de tu proyecto:
// > tsc --init

// ── tsconfig.json básico para aprender ───────────────────────────────────
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "module": "commonjs",
//     "strict": true,
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "esModuleInterop": true
//   },
//   "include": ["src/**/*"],
//   "exclude": ["node_modules"]
// }

// ── Estructura de proyecto con tsconfig ──────────────────────────────────
// mi-proyecto/
// ├── src/
// │   └── main.ts        ← archivos TypeScript
// ├── dist/
// │   └── main.js        ← JavaScript compilado (generado automáticamente)
// ├── tsconfig.json
// └── package.json

// ── Compilar todo el proyecto ─────────────────────────────────────────────
// Con tsconfig.json en la carpeta raíz:
// > tsc
// TypeScript lee el tsconfig y compila todos los archivos en src/

// > tsc --watch
// Modo watch: recompila automáticamente al detectar cambios`,
    keyPoints: [
      'tsconfig.json configura cómo TypeScript analiza y compila el proyecto.',
      'Se crea con el comando: tsc --init',
      'La opción target define la versión de JavaScript que se genera.',
      'La opción strict activa todas las verificaciones estrictas — muy recomendada.',
      'outDir y rootDir organizan dónde están los .ts y dónde van los .js compilados.',
      'Con tsconfig.json, compilas todo el proyecto con solo ejecutar: tsc',
    ],
    exercise: {
      description:
        'En tu carpeta de proyecto, ejecuta tsc --init para crear un tsconfig.json. Ábrelo y localiza las opciones: target, strict, outDir. Cambia target a "ES2020", descomenta strict y ponlo en true, y descomenta outDir y ponlo en "./dist". Guarda y compila con tsc. ¿Dónde aparece el archivo .js compilado?',
      hint: 'El archivo tsconfig.json tiene muchas líneas comentadas (con //). Para activar una opción, quita el // al inicio de la línea. Con outDir: "./dist", los archivos .js se guardarán en una carpeta llamada "dist".',
    },
    quiz: [
      {
        question: '¿Qué hace el comando tsc --init?',
        options: [
          'Inicia la compilación de todos los archivos .ts',
          'Instala TypeScript en el proyecto actual',
          'Crea un archivo tsconfig.json con la configuración por defecto',
          'Reinicia el compilador de TypeScript',
        ],
        correctAnswer: 'Crea un archivo tsconfig.json con la configuración por defecto',
        correctFeedback:
          'Correcto. tsc --init genera un tsconfig.json con todas las opciones disponibles (la mayoría comentadas) como punto de partida para configurar tu proyecto.',
        incorrectFeedback:
          'No es correcto. tsc --init crea un archivo tsconfig.json con la configuración por defecto de TypeScript. Es el punto de partida para configurar tu proyecto.',
      },
      {
        question: '¿Qué controla la opción "target" en tsconfig.json?',
        options: [
          'La carpeta donde se guardan los archivos .ts',
          'La versión de JavaScript que TypeScript genera al compilar',
          'El nivel de estrictez de la verificación de tipos',
          'Los archivos que TypeScript debe ignorar',
        ],
        correctAnswer: 'La versión de JavaScript que TypeScript genera al compilar',
        correctFeedback:
          'Correcto. La opción target define la versión de JavaScript del archivo compilado. Por ejemplo, "ES2020" genera código compatible con navegadores modernos.',
        incorrectFeedback:
          'No es correcto. La opción target controla la versión de JavaScript que TypeScript genera. "outDir" es la carpeta de salida, "strict" es el nivel de estrictez, y "exclude" maneja archivos a ignorar.',
      },
      {
        question: '¿Qué hace "strict": true en tsconfig.json?',
        options: [
          'Impide que TypeScript genere el .js si hay errores',
          'Activa todas las verificaciones estrictas de tipos de TypeScript',
          'Hace que TypeScript use una sintaxis más antigua',
          'Obliga a documentar todas las funciones con comentarios',
        ],
        correctAnswer: 'Activa todas las verificaciones estrictas de tipos de TypeScript',
        correctFeedback:
          'Correcto. "strict": true activa un conjunto de verificaciones adicionales que hacen el código más seguro. Es la práctica recomendada en proyectos nuevos.',
        incorrectFeedback:
          'No es correcto. "strict": true activa todas las verificaciones de tipos estrictas de TypeScript. Para impedir que se genere el .js con errores, se usa "noEmitOnError": true.',
      },
    ],
  },

  // ── Lección 12 ───────────────────────────────────────────────────────────
  {
    slug: 'ejecutar-typescript-desarrollo',
    title: 'Ejecutar TypeScript en desarrollo',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 6,
    description:
      'Conoce formas prácticas de ejecutar TypeScript durante el desarrollo usando herramientas simples.',
    explanation: `El flujo básico de TypeScript (escribir .ts → compilar con tsc → ejecutar .js con node) funciona perfectamente, pero puede volverse repetitivo durante el desarrollo. Existen herramientas que simplifican este proceso.

**Opción 1: ts-node (la más simple para aprender)**

\`ts-node\` es una herramienta que compila y ejecuta TypeScript en un solo paso, sin necesidad de crear archivos \`.js\` manualmente:

\`\`\`bash
# Instalar ts-node globalmente
npm install -g ts-node

# Ejecutar un archivo TypeScript directamente
ts-node main.ts
\`\`\`

En lugar de: \`tsc main.ts\` y luego \`node main.js\`
Solo necesitas: \`ts-node main.ts\`

**Opción 2: nodemon + ts-node (para recarga automática)**

Si quieres que tu código se reejcute automáticamente cuando cambias un archivo:

\`\`\`bash
npm install -g ts-node nodemon
nodemon --exec ts-node main.ts
\`\`\`

Cada vez que guardas, \`nodemon\` detecta el cambio y \`ts-node\` vuelve a ejecutar el archivo.

**Opción 3: tsx (más rápida que ts-node)**

\`tsx\` es una alternativa moderna y más rápida a \`ts-node\`:

\`\`\`bash
npm install -g tsx
tsx main.ts
\`\`\`

**Opción 4: El playground online (sin instalar nada)**

Si solo quieres experimentar sin instalar nada, puedes usar el playground oficial de TypeScript en: typescriptlang.org/play

Puedes escribir TypeScript, ver el JavaScript generado y ver los errores en tiempo real. Es perfecto para probar conceptos rápidamente.

**¿Cuál usar para este curso?**

Para aprender, cualquiera de estas opciones funciona:
- **ts-node:** simple, directo, perfecto para aprender
- **El playground:** cero configuración, ideal para experimentar
- **tsc + node:** te enseña el proceso real que ocurre en proyectos

Para este curso, usarás principalmente \`tsc\` para entender el proceso completo, pero es útil saber que \`ts-node\` existe.`,
    codeExample: `// ── Comparación de métodos para ejecutar TypeScript ─────────────────────

// archivo: main.ts
interface Producto {
  nombre: string
  precio: number
}

function mostrarProducto(p: Producto): void {
  console.log(\`\${p.nombre}: $\${p.precio}\`)
}

mostrarProducto({ nombre: "Laptop", precio: 850 })

// ── Método 1: tsc + node (flujo estándar) ────────────────────────────────
// > tsc main.ts
// > node main.js
// → Laptop: $850

// ── Método 2: ts-node (un solo paso) ─────────────────────────────────────
// > ts-node main.ts
// → Laptop: $850

// ── Método 3: tsx (más rápido) ────────────────────────────────────────────
// > tsx main.ts
// → Laptop: $850

// ── Modo watch con ts-node ────────────────────────────────────────────────
// > nodemon --exec ts-node main.ts
// [nodemon] starting...
// → Laptop: $850
// [nodemon] watching path(s): *.*
// (guarda el archivo → reejcuta automáticamente)

// ── Playground online ─────────────────────────────────────────────────────
// typescriptlang.org/play
// Sin instalación, muestra TypeScript y JavaScript lado a lado.`,
    keyPoints: [
      'ts-node ejecuta TypeScript en un solo paso sin generar archivos .js temporales.',
      'nodemon + ts-node permite recarga automática al guardar cambios.',
      'tsx es una alternativa más rápida a ts-node.',
      'El playground de TypeScript (typescriptlang.org/play) funciona sin instalar nada.',
      'Para aprender, cualquier método funciona bien — elige el que te resulte más cómodo.',
      'En proyectos reales se suele usar tsc o bundlers como webpack/esbuild, no ts-node en producción.',
    ],
    exercise: {
      description:
        'Instala ts-node con npm install -g ts-node. Luego ejecuta tu archivo main.ts con ts-node main.ts. Compara la experiencia con el flujo tsc + node que usaste en la lección anterior. ¿Cuál prefieres para aprender? Si no puedes instalar ts-node, usa el playground en typescriptlang.org/play para escribir y ejecutar código TypeScript.',
      hint: 'Si ts-node no funciona en Windows por la política de ejecución, usa: npx ts-node main.ts en lugar del comando global.',
    },
    quiz: [
      {
        question: '¿Qué hace ts-node en comparación con el flujo tsc + node?',
        options: [
          'ts-node instala TypeScript automáticamente',
          'ts-node compila y ejecuta TypeScript en un solo paso sin generar archivos .js',
          'ts-node solo verifica los tipos sin ejecutar el código',
          'ts-node es lo mismo que tsc pero más lento',
        ],
        correctAnswer: 'ts-node compila y ejecuta TypeScript en un solo paso sin generar archivos .js',
        correctFeedback:
          'Correcto. ts-node simplifica el flujo: en lugar de compilar con tsc y luego ejecutar con node, lo hace en un solo comando y sin crear archivos .js en el disco.',
        incorrectFeedback:
          'No es correcto. ts-node simplifica el flujo compilando y ejecutando en un solo paso. No necesitas correr tsc primero ni crear un archivo .js.',
      },
      {
        question: '¿Cuál es la ventaja del playground de TypeScript (typescriptlang.org/play)?',
        options: [
          'Es más rápido que ts-node para proyectos grandes',
          'Funciona sin instalar nada y muestra TypeScript y JavaScript lado a lado',
          'Permite publicar el código directamente en producción',
          'Es el único lugar donde TypeScript funciona correctamente',
        ],
        correctAnswer: 'Funciona sin instalar nada y muestra TypeScript y JavaScript lado a lado',
        correctFeedback:
          'Correcto. El playground online es perfecto para experimentar: no requiere instalación y muestra en tiempo real el JavaScript que TypeScript genera, además de los errores.',
        incorrectFeedback:
          'No es correcto. El playground de TypeScript es un editor online que funciona sin instalar nada y muestra TypeScript y el JavaScript resultante lado a lado. Es ideal para probar conceptos rápidamente.',
      },
    ],
  },

  // ── Lección 13 ───────────────────────────────────────────────────────────
  {
    slug: 'errores-configurar-typescript',
    title: 'Errores comunes al configurar TypeScript',
    module: 'Preparar el entorno',
    moduleNumber: 2,
    order: 7,
    description:
      'Aprende a resolver problemas comunes como comandos no encontrados, archivos que no compilan o configuraciones incorrectas.',
    explanation: `Configurar TypeScript es relativamente sencillo, pero hay algunos problemas comunes que los principiantes encuentran. Esta lección te ayuda a resolverlos.

**Problema 1: "tsc: command not found" o "no se reconoce"**

Esto ocurre cuando TypeScript no está en el PATH del sistema, o no se instaló correctamente.

Soluciones:
- Verifica con \`npm list -g typescript\` si está instalado
- Reinstala con \`npm install -g typescript\`
- En Windows/PowerShell: usa \`npx tsc\` en lugar de \`tsc\`
- Cierra y abre la terminal después de instalar

**Problema 2: En Windows — "la ejecución de scripts está deshabilitada"**

Este error aparece en PowerShell porque la política de seguridad bloquea scripts externos.

Solución:
\`\`\`powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
\`\`\`

O usa el terminal de VS Code o CMD en lugar de PowerShell.

**Problema 3: El archivo .ts no compila**

Causas comunes:
- Estás en la carpeta equivocada (usa \`ls\` o \`dir\` para verificar)
- El nombre del archivo tiene un error de tipeo
- El tsconfig.json excluye ese archivo

**Problema 4: Los errores de TypeScript aparecen pero no entiendo el mensaje**

Los mensajes de error de TypeScript pueden ser verbosos al principio. La clave es leer la primera línea del error:

\`\`\`
error TS2345: Argument of type 'string' is not assignable
              to parameter of type 'number'.
\`\`\`

Esto dice: "intentaste pasar un string donde se espera un number". Con el tiempo aprenderás a leer estos mensajes rápidamente.

**Problema 5: Los cambios no se reflejan**

Si modificas el archivo \`.ts\` pero el comportamiento no cambia:
- Olvidaste recompilar con \`tsc archivo.ts\`
- Estás ejecutando el \`.js\` antiguo en lugar del nuevo
- Usa el modo watch (\`tsc --watch\`) para evitar esto

**Problema 6: Cannot find module o Cannot find name**

Cuando TypeScript no puede encontrar un tipo o módulo:
- Para módulos de npm: instala las definiciones de tipo con \`npm install @types/nombre-modulo\`
- Para errores de "cannot find name": asegúrate de que el nombre está correctamente escrito y en el scope correcto

**Estrategia general para resolver errores**

1. Lee el mensaje de error completo (número de línea incluido)
2. Ve a esa línea en el código
3. Pregúntate: "¿qué tipo tiene esta variable?" y "¿qué tipo espera la función?"
4. Busca el error en Google si no lo entiendes (incluye el código TS#### en la búsqueda)`,
    codeExample: `// ── Errores comunes y sus soluciones ─────────────────────────────────────

// ERROR 1: tipos incorrectos
// ─────────────────────────
// let nombre: string = 42
// Error TS2322: Type 'number' is not assignable to type 'string'.
// Solución: usar el tipo correcto
let nombre: string = "Ana"  // ✓

// ERROR 2: propiedad inexistente
// ──────────────────────────────
interface Producto {
  nombre: string
  precio: number
}
// const p: Producto = { nombre: "Laptop", precio: 850, stock: 10 }
// Error TS2322: Object literal may only specify known properties,
//              and 'stock' does not exist in type 'Producto'.
// Solución: eliminar la propiedad extra o agregarla a la interfaz
const p: Producto = { nombre: "Laptop", precio: 850 }  // ✓

// ERROR 3: parámetro de tipo incorrecto
// ─────────────────────────────────────
function sumar(a: number, b: number): number {
  return a + b
}
// sumar("5", 3)
// Error TS2345: Argument of type 'string' is not assignable
//              to parameter of type 'number'.
// Solución: pasar el tipo correcto
sumar(5, 3)  // ✓

// ── Cómo leer un error de TypeScript ─────────────────────────────────────
// error TS2345:    ← número del error (útil para buscar en Google)
// Argument of...  ← qué está mal
// at file.ts:10   ← número de línea donde ocurre`,
    keyPoints: [
      'Si tsc no se reconoce: reinstala TypeScript con npm install -g typescript y reinicia la terminal.',
      'En Windows/PowerShell: ejecuta Set-ExecutionPolicy si aparece el error de "scripts deshabilitados".',
      'Si los cambios no se reflejan: recuerda recompilar con tsc o usa el modo --watch.',
      'Los mensajes de error incluyen el número de línea y el tipo incorrecto — léelos con calma.',
      'Busca el código de error (TS2345, TS2322, etc.) en Google si no entiendes el mensaje.',
      'La mayoría de errores de principiante se resuelven verificando que los tipos coincidan.',
    ],
    exercise: {
      description:
        'Crea un archivo errores.ts con el siguiente código a propósito incorrecto: let edad: number = "veinticinco". Intenta compilarlo con tsc errores.ts. Anota el mensaje de error que ves. Luego corrige el error y compila de nuevo. ¿Qué número de error TS aparece? ¿Entiendes qué dice el mensaje?',
      hint: 'El error debería ser algo como "TS2322: Type string is not assignable to type number". El número TS2322 es el código del error. Para corregirlo, cambia "veinticinco" (string) por 25 (number).',
    },
    quiz: [
      {
        question: '¿Qué debes hacer si el comando tsc no se reconoce después de instalar TypeScript?',
        options: [
          'Reinstalar Node.js desde cero',
          'Usar npm run typescript en su lugar',
          'Verificar con npm list -g typescript y si es necesario, cerrar y abrir la terminal',
          'TypeScript no se puede instalar en esta computadora',
        ],
        correctAnswer: 'Verificar con npm list -g typescript y si es necesario, cerrar y abrir la terminal',
        correctFeedback:
          'Correcto. A veces el PATH necesita que cierres y abras la terminal después de instalar. Verifica con npm list -g typescript si la instalación fue exitosa.',
        incorrectFeedback:
          'No es correcto. Si tsc no se reconoce, primero verifica la instalación con npm list -g typescript. Si está instalado, cierra y abre la terminal. Si no, reinstala con npm install -g typescript.',
      },
      {
        question: '¿Qué indica el número en un error como "error TS2345"?',
        options: [
          'El número de línea donde ocurre el error',
          'El código identificador del tipo de error de TypeScript',
          'La versión de TypeScript que detectó el error',
          'La gravedad del error (1 = leve, 9999 = crítico)',
        ],
        correctAnswer: 'El código identificador del tipo de error de TypeScript',
        correctFeedback:
          'Correcto. TS2345 es el código del error. Cada tipo de error de TypeScript tiene un número único que puedes buscar en Google para encontrar más información y soluciones.',
        incorrectFeedback:
          'No es correcto. El número en "error TS2345" es el código identificador del tipo de error. Es muy útil buscarlo en Google para entender qué significa y cómo resolverlo.',
      },
      {
        question: '¿Por qué los cambios en el archivo .ts a veces no se reflejan al ejecutar?',
        options: [
          'Porque TypeScript solo aplica cambios al reiniciar la computadora',
          'Porque olvidaste recompilar con tsc y sigues ejecutando el .js anterior',
          'Porque Node.js tiene un caché que impide actualizar',
          'Porque TypeScript no detecta cambios en archivos guardados',
        ],
        correctAnswer: 'Porque olvidaste recompilar con tsc y sigues ejecutando el .js anterior',
        correctFeedback:
          'Correcto. Si no recompilas, el archivo .js antiguo sigue siendo el mismo. Por eso el modo --watch es útil: recompila automáticamente cada vez que guardas.',
        incorrectFeedback:
          'No es correcto. Si los cambios no se reflejan, probablemente olvidaste recompilar con tsc. El .js que ejecutas es el generado en la compilación anterior. El modo --watch evita este problema.',
      },
    ],
  },
]

export const tsModule2: Module = {
  number: 2,
  title: 'Preparar el entorno',
  level: 'básico',
  lessons: lessonsTsModule2,
}
