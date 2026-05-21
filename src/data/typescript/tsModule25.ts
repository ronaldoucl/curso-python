import type { Lesson, Module } from '@/types'

export const lessonsTsModule25: Lesson[] = [
  {
    slug: 'que-es-tsconfig-json',
    title: '¿Qué es tsconfig.json?',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 196,
    description:
      'Aprende qué es el archivo tsconfig.json y por qué es el corazón de todo proyecto TypeScript.',
    explanation: `## ¿Qué es tsconfig.json?

\`tsconfig.json\` es el archivo de configuración de TypeScript. Le indica al compilador **cómo** debe transformar tu código TypeScript a JavaScript.

### ¿Por qué existe?

TypeScript es un lenguaje compilado: antes de ejecutarse, se convierte a JavaScript. El compilador necesita saber:

- ¿Qué archivos compilar?
- ¿A qué versión de JavaScript convertir?
- ¿Qué tan estricto ser con los errores?
- ¿Dónde poner los archivos compilados?

Todo eso lo controla \`tsconfig.json\`.

### ¿Cómo se crea?

\`\`\`bash
tsc --init
\`\`\`

Ese comando genera un \`tsconfig.json\` con opciones comentadas. Puedes editarlo a tu medida.

### Estructura básica

\`\`\`json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
\`\`\`

### Las tres secciones principales

| Sección | ¿Qué hace? |
|---|---|
| \`compilerOptions\` | Controla el comportamiento del compilador |
| \`include\` | Qué archivos compilar |
| \`exclude\` | Qué archivos ignorar |

### ¿Dónde va el archivo?

En la raíz del proyecto, al mismo nivel que \`package.json\`:

\`\`\`
mi-proyecto/
├── src/
│   └── index.ts
├── tsconfig.json
└── package.json
\`\`\`

### Sin tsconfig.json

Si no existe \`tsconfig.json\`, TypeScript usa valores por defecto muy permisivos que pueden dejar pasar errores importantes. Siempre es mejor tener un \`tsconfig.json\` explícito.`,
    codeExample: `// tsconfig.json — ejemplo básico para aprender TypeScript
{
  "compilerOptions": {
    "target": "ES6",        // Versión de JavaScript de salida
    "module": "commonjs",   // Sistema de módulos
    "strict": true,         // Activar todas las verificaciones estrictas
    "outDir": "./dist",     // Carpeta de salida
    "rootDir": "./src"      // Carpeta de entrada
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

// Para compilar:
// tsc          → compila todo el proyecto
// tsc --watch  → compila en modo vigilancia (recompila al guardar)
// tsc --noEmit → verifica tipos sin generar archivos

// Ejemplo de archivo src/index.ts
const saludo = (nombre: string): string => {
  return \`Hola, \${nombre}\`
}

console.log(saludo('TypeScript'))
// → Hola, TypeScript`,
    keyPoints: [
      'tsconfig.json controla cómo TypeScript compila tu código',
      'Se crea con "tsc --init" y va en la raíz del proyecto',
      'compilerOptions es la sección más importante',
      'include y exclude controlan qué archivos se compilan',
      'Sin tsconfig.json TypeScript usa valores poco seguros por defecto',
    ],
    exercise: {
      description:
        'Crea un tsconfig.json básico para un proyecto de aprendizaje. Debe incluir: target ES6, strict true, outDir ./dist, rootDir ./src, y excluir node_modules.',
      hint: 'Usa las claves exactas: compilerOptions, include, exclude. Recuerda que outDir y rootDir van dentro de compilerOptions.',
    },
    quiz: [
      {
        question: '¿Qué archivo controla la compilación en un proyecto TypeScript?',
        options: ['package.json', 'tsconfig.json', '.babelrc', 'webpack.config.js'],
        correctAnswer: 'tsconfig.json',
        correctFeedback: '¡Correcto! tsconfig.json le dice al compilador de TypeScript cómo comportarse.',
        incorrectFeedback: 'El archivo de configuración de TypeScript se llama tsconfig.json.',
      },
      {
        question: '¿Qué comando genera un tsconfig.json inicial?',
        options: ['npm init', 'ts --config', 'tsc --init', 'typescript init'],
        correctAnswer: 'tsc --init',
        correctFeedback: '¡Correcto! tsc --init crea un tsconfig.json con todas las opciones comentadas.',
        incorrectFeedback: 'El comando es "tsc --init" (tsc es el compilador de TypeScript).',
      },
      {
        question: '¿Dentro de qué sección van opciones como "target", "strict" y "outDir"?',
        options: ['include', 'exclude', 'compilerOptions', 'settings'],
        correctAnswer: 'compilerOptions',
        correctFeedback: '¡Exacto! compilerOptions contiene todas las opciones del compilador.',
        incorrectFeedback: 'Las opciones del compilador van dentro de la sección "compilerOptions".',
      },
      {
        question: '¿Dónde debe colocarse el archivo tsconfig.json?',
        options: ['En la carpeta src/', 'En la carpeta dist/', 'En la raíz del proyecto', 'En node_modules/'],
        correctAnswer: 'En la raíz del proyecto',
        correctFeedback: '¡Correcto! tsconfig.json va en la raíz, al mismo nivel que package.json.',
        incorrectFeedback: 'tsconfig.json va en la raíz del proyecto, junto a package.json.',
      },
      {
        question: '¿Qué hace "tsc --noEmit"?',
        options: [
          'Borra los archivos compilados',
          'Verifica tipos sin generar archivos JavaScript',
          'Desactiva la emisión de errores',
          'Compila sin tsconfig.json',
        ],
        correctAnswer: 'Verifica tipos sin generar archivos JavaScript',
        correctFeedback: '¡Correcto! --noEmit es útil para verificar errores de tipos sin generar archivos de salida.',
        incorrectFeedback: '--noEmit verifica los tipos pero no genera archivos JavaScript de salida.',
      },
    ],
  },
  {
    slug: 'tsconfig-strict',
    title: 'La opción strict',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 197,
    description:
      'Descubre qué activa la opción strict y por qué deberías usarla siempre en tus proyectos.',
    explanation: `## La opción strict

La opción \`strict: true\` es la más importante de \`tsconfig.json\`. Activa un conjunto de verificaciones que hacen TypeScript realmente útil.

### ¿Qué activa strict?

\`strict: true\` es un atajo que enciende varias opciones a la vez:

| Opción | ¿Qué verifica? |
|---|---|
| \`strictNullChecks\` | No permite usar null/undefined donde no se espera |
| \`noImplicitAny\` | No permite variables sin tipo implícito |
| \`strictFunctionTypes\` | Verificación estricta de tipos en funciones |
| \`strictBindCallApply\` | Verificación en bind, call, apply |
| \`strictPropertyInitialization\` | Propiedades de clase deben inicializarse |
| \`useUnknownInCatchVariables\` | El error en catch es unknown, no any |

### Sin strict

\`\`\`typescript
// Sin strict — esto compila sin errores ¡pero es peligroso!
function saludar(nombre) {  // nombre es implícitamente 'any'
  return nombre.toUpperCase()
}

saludar(null)  // ¡Error en runtime!
\`\`\`

### Con strict

\`\`\`typescript
// Con strict — TypeScript atrapa los problemas
function saludar(nombre: string): string {
  return nombre.toUpperCase()
}

saludar(null)  // Error: Argument of type 'null' is not assignable to parameter of type 'string'
\`\`\`

### ¿Puedo activar opciones individualmente?

Sí. Si \`strict: true\` es demasiado para un proyecto existente, puedes activar opciones una por una:

\`\`\`json
{
  "compilerOptions": {
    "strict": false,
    "strictNullChecks": true,
    "noImplicitAny": true
  }
}
\`\`\`

### Recomendación

**Siempre usa \`strict: true\`** en proyectos nuevos. El costo de adoptarlo desde el inicio es mínimo, y el beneficio es enorme.`,
    codeExample: `// tsconfig.json con strict activado
{
  "compilerOptions": {
    "strict": true  // Activa todas las verificaciones estrictas
  }
}

// ─── Efecto 1: strictNullChecks ───────────────────────────────
let nombre: string = 'Ana'
nombre = null  // Error: Type 'null' is not assignable to type 'string'

// Para aceptar null, debes ser explícito:
let nombreONulo: string | null = null  // Correcto

// ─── Efecto 2: noImplicitAny ──────────────────────────────────
function duplicar(valor) {  // Error: implicitly has 'any' type
  return valor * 2
}

function duplicarBien(valor: number): number {  // Correcto
  return valor * 2
}

// ─── Efecto 3: useUnknownInCatchVariables ─────────────────────
try {
  JSON.parse('invalido{')
} catch (error) {
  // Con strict, error es 'unknown', no 'any'
  console.log(error.message)  // Error: Object is of type 'unknown'

  // Solución: narrowing
  if (error instanceof Error) {
    console.log(error.message)  // Ahora sí es seguro
  }
}`,
    keyPoints: [
      'strict: true activa múltiples verificaciones de seguridad a la vez',
      'strictNullChecks evita errores de null/undefined en runtime',
      'noImplicitAny obliga a declarar tipos explícitos',
      'Siempre usa strict: true en proyectos nuevos',
      'Puedes activar opciones individualmente si necesitas migrar gradualmente',
    ],
    exercise: {
      description:
        'Tienes este código que compila sin strict. Identifica qué errores aparecerían al activar strict: true y corrígelos: `function obtenerLongitud(texto) { return texto.length }` llamada con `obtenerLongitud(null)`.',
      hint: 'Con strict, el parámetro necesita tipo explícito (noImplicitAny) y null no es válido donde se espera string (strictNullChecks).',
    },
    quiz: [
      {
        question: '¿Qué hace "strict: true" en tsconfig.json?',
        options: [
          'Activa solo noImplicitAny',
          'Activa un conjunto de verificaciones de seguridad',
          'Hace que TypeScript sea más lento',
          'Desactiva los errores de compilación',
        ],
        correctAnswer: 'Activa un conjunto de verificaciones de seguridad',
        correctFeedback: '¡Correcto! strict: true es un atajo que activa varias opciones de seguridad a la vez.',
        incorrectFeedback: 'strict: true activa múltiples opciones como strictNullChecks, noImplicitAny y otras.',
      },
      {
        question: '¿Qué opción activa strict que previene usar null donde no se espera?',
        options: ['noImplicitNull', 'strictNullChecks', 'nullSafety', 'checkNull'],
        correctAnswer: 'strictNullChecks',
        correctFeedback: '¡Exacto! strictNullChecks es una de las opciones más valiosas dentro de strict.',
        incorrectFeedback: 'La opción que controla null y undefined es "strictNullChecks".',
      },
      {
        question: 'Con strict activado, ¿qué tipo tiene el error en un bloque catch?',
        options: ['any', 'Error', 'string', 'unknown'],
        correctAnswer: 'unknown',
        correctFeedback: '¡Correcto! Con useUnknownInCatchVariables (parte de strict), el error es "unknown" y debes hacer narrowing.',
        incorrectFeedback: 'Con strict activado, el error en catch es de tipo "unknown", no "any".',
      },
      {
        question: '¿Cuándo es recomendable usar strict: true?',
        options: [
          'Solo en producción',
          'Solo en proyectos grandes',
          'Siempre, especialmente en proyectos nuevos',
          'Nunca, es demasiado restrictivo',
        ],
        correctAnswer: 'Siempre, especialmente en proyectos nuevos',
        correctFeedback: '¡Correcto! Adoptar strict desde el inicio tiene costo mínimo y máximo beneficio.',
        incorrectFeedback: 'Se recomienda usar strict: true siempre, especialmente en proyectos nuevos.',
      },
      {
        question: '¿Qué pasa si tienes strict: true pero quieres desactivar solo una opción?',
        options: [
          'No se puede, strict es todo o nada',
          'Puedes sobrescribir opciones individuales con false',
          'Debes eliminar strict y poner todas las demás',
          'Debes usar un archivo .tsconfig.override',
        ],
        correctAnswer: 'Puedes sobrescribir opciones individuales con false',
        correctFeedback: '¡Correcto! Puedes combinar strict: true con opciones individuales en false para ajuste fino.',
        incorrectFeedback: 'Puedes tener strict: true y luego poner una opción específica en false para sobrescribirla.',
      },
    ],
  },
  {
    slug: 'tsconfig-target',
    title: 'target: a qué versión de JavaScript compilar',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 198,
    description:
      'Entiende la opción target y cómo afecta el JavaScript que genera TypeScript.',
    explanation: `## La opción target

\`target\` le dice a TypeScript **a qué versión de JavaScript** debe convertir tu código.

### Valores disponibles

| Valor | Versión JS | Soporte |
|---|---|---|
| \`ES5\` | JavaScript clásico | Todos los navegadores |
| \`ES6\` / \`ES2015\` | Arrow functions, clases, let/const | Navegadores modernos |
| \`ES2017\` | async/await nativo | Navegadores modernos |
| \`ES2020\` | Optional chaining, nullish coalescing | Navegadores recientes |
| \`ESNext\` | Última versión | Solo entornos muy actuales |

### ¿Qué cambia según el target?

\`\`\`typescript
// Tu código TypeScript
const suma = (a: number, b: number) => a + b
\`\`\`

Con \`target: "ES5"\` se convierte a:
\`\`\`javascript
var suma = function(a, b) { return a + b }
\`\`\`

Con \`target: "ES6"\` permanece como:
\`\`\`javascript
const suma = (a, b) => a + b
\`\`\`

### async/await

\`\`\`typescript
// Tu código TypeScript
async function cargarDatos() {
  const datos = await fetch('/api')
  return datos.json()
}
\`\`\`

Con \`target: "ES5"\` TypeScript convierte async/await a un sistema de generadores complejo.
Con \`target: "ES2017"\` lo deja como async/await nativo.

### ¿Qué target elegir?

- **Node.js moderno**: \`ES2020\` o \`ESNext\`
- **Navegadores modernos (>2020)**: \`ES2020\`
- **Compatibilidad amplia**: \`ES6\` (recomendado para aprender)
- **IE11 o similar**: \`ES5\` (solo si es necesario)

### Recomendación para aprender

\`\`\`json
{
  "compilerOptions": {
    "target": "ES6"
  }
}
\`\`\`

ES6 tiene buen soporte, mantiene el código legible y es suficiente para aprender TypeScript.`,
    codeExample: `// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020"  // Compila a JavaScript ES2020
  }
}

// ─── Ejemplo: optional chaining ──────────────────────────────
interface Usuario {
  nombre: string
  direccion?: {
    ciudad: string
  }
}

const usuario: Usuario = { nombre: 'Ana' }

// Con target ES2020 — se mantiene como optional chaining
const ciudad = usuario.direccion?.ciudad

// Con target ES5 — se transforma a:
// var ciudad = (_a = usuario.direccion) === null
//   || _a === void 0 ? void 0 : _a.ciudad

// ─── Ejemplo: async/await ─────────────────────────────────────
// Con target ES2017+ → async/await nativo en salida
async function obtenerUsuario(id: number): Promise<Usuario> {
  const respuesta = await fetch(\`/api/usuarios/\${id}\`)
  return respuesta.json()
}

// Con target ES5 → transformado a generadores (código complejo)

// ─── Regla práctica ───────────────────────────────────────────
// - Aprender TypeScript: target "ES6"
// - Node.js 18+: target "ES2022"
// - Navegadores modernos: target "ES2020"`,
    keyPoints: [
      'target define a qué versión de JavaScript se compila tu código TypeScript',
      'ES5 maximiza compatibilidad pero produce código menos legible',
      'ES6 es un buen balance para aprender y para proyectos modernos',
      'async/await y optional chaining se transforman según el target elegido',
      'Para Node.js moderno, ES2020 o ESNext son opciones adecuadas',
    ],
    exercise: {
      description:
        'Dado este código TypeScript con optional chaining y async/await, explica qué diferencia habrá en el JavaScript generado si usas target "ES5" vs target "ES2020": `const resultado = objeto?.propiedad; async function cargar() { return await fetch("/api") }`',
      hint: 'Con ES5, optional chaining se convierte a expresiones condicionales largas y async/await a generadores. Con ES2020 se mantienen tal cual.',
    },
    quiz: [
      {
        question: '¿Qué controla la opción "target" en tsconfig.json?',
        options: ['La carpeta de salida', 'La versión de JavaScript generada', 'El nivel de strictness', 'Los archivos a compilar'],
        correctAnswer: 'La versión de JavaScript generada',
        correctFeedback: '¡Correcto! target define a qué versión de JavaScript se compilará tu código TypeScript.',
        incorrectFeedback: 'La opción "target" controla la versión de JavaScript de la salida compilada.',
      },
      {
        question: '¿Qué target mantiene las arrow functions en la salida compilada?',
        options: ['ES3', 'ES5', 'ES6', 'Ninguno las mantiene'],
        correctAnswer: 'ES6',
        correctFeedback: '¡Exacto! Las arrow functions son una característica de ES6, así que target ES6 o superior las mantiene.',
        incorrectFeedback: 'ES6 y superiores mantienen las arrow functions. ES5 las convierte a funciones tradicionales.',
      },
      {
        question: '¿Qué target es recomendable para proyectos de aprendizaje de TypeScript?',
        options: ['ES3', 'ES5', 'ES6', 'ESNext'],
        correctAnswer: 'ES6',
        correctFeedback: '¡Correcto! ES6 tiene buen soporte, mantiene el código legible y es ideal para aprender.',
        incorrectFeedback: 'ES6 es el recomendado para aprender: buen soporte y código legible en la salida.',
      },
      {
        question: 'Con target ES5, ¿cómo transforma TypeScript el código async/await?',
        options: [
          'Lo elimina',
          'Lo deja igual',
          'Lo convierte a Promises',
          'Lo convierte a un sistema de generadores complejo',
        ],
        correctAnswer: 'Lo convierte a un sistema de generadores complejo',
        correctFeedback: '¡Correcto! TypeScript transforma async/await a generadores cuando el target no los soporta nativamente.',
        incorrectFeedback: 'Con target ES5, async/await se transforma a un sistema de generadores porque ES5 no lo soporta.',
      },
      {
        question: '¿Cuál es el target más apropiado para una aplicación Node.js 18 moderna?',
        options: ['ES3', 'ES5', 'ES6', 'ES2022'],
        correctAnswer: 'ES2022',
        correctFeedback: '¡Correcto! Node.js 18+ soporta ES2022, así que puedes aprovechar todas sus características.',
        incorrectFeedback: 'Para Node.js 18+ moderno, ES2022 o ESNext son opciones adecuadas.',
      },
    ],
  },
  {
    slug: 'tsconfig-module',
    title: 'module: el sistema de módulos',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 199,
    description:
      'Aprende qué es la opción module y cuándo usar CommonJS vs ESM.',
    explanation: `## La opción module

\`module\` define el **sistema de módulos** que TypeScript usará en el JavaScript generado.

### ¿Qué son los sistemas de módulos?

Cuando haces \`import\` y \`export\`, TypeScript necesita saber qué formato usar en la salida:

| Valor | Sistema | Usa |
|---|---|---|
| \`commonjs\` | Node.js tradicional | \`require()\` / \`module.exports\` |
| \`ES6\` / \`ESNext\` | ESModules | \`import\` / \`export\` nativos |
| \`NodeNext\` | Node.js moderno | \`import\` / \`export\` para Node.js |

### CommonJS (Node.js tradicional)

\`\`\`json
{ "compilerOptions": { "module": "commonjs" } }
\`\`\`

Tu código TypeScript:
\`\`\`typescript
import { suma } from './utils'
export const resultado = suma(1, 2)
\`\`\`

Se convierte a:
\`\`\`javascript
const utils_1 = require('./utils')
exports.resultado = utils_1.suma(1, 2)
\`\`\`

### ESModules (navegador / proyectos modernos)

\`\`\`json
{ "compilerOptions": { "module": "ESNext" } }
\`\`\`

Tu código permanece como:
\`\`\`javascript
import { suma } from './utils.js'
export const resultado = suma(1, 2)
\`\`\`

### ¿Cuál elegir?

| Entorno | Recomendación |
|---|---|
| Node.js (backend) | \`commonjs\` o \`NodeNext\` |
| Navegador / Vite / Webpack | \`ESNext\` o \`ES6\` |
| Next.js | Configurado automáticamente, no tocar |
| Aprender TypeScript | \`commonjs\` (más simple) |

### target y module deben ser compatibles

Si usas \`target: "ES5"\`, el \`module\` automáticamente será \`commonjs\`. Para usar \`module: "ESNext"\` necesitas un target más moderno.`,
    codeExample: `// ─── Configuración para Node.js ──────────────────────────────
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs"
  }
}

// Tu código TypeScript (utils.ts)
export function suma(a: number, b: number): number {
  return a + b
}

// Tu código TypeScript (main.ts)
import { suma } from './utils'
console.log(suma(3, 4))

// JavaScript generado con module: "commonjs" (main.js):
// "use strict"
// Object.defineProperty(exports, "__esModule", { value: true })
// const utils_1 = require("./utils")
// console.log((0, utils_1.suma)(3, 4))

// ─── Configuración para ESModules ─────────────────────────────
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext"
  }
}

// JavaScript generado con module: "ESNext" (main.js):
// import { suma } from './utils.js'
// console.log(suma(3, 4))

// ─── Nota importante ──────────────────────────────────────────
// En frameworks como Next.js o Vite, esta opción está
// configurada automáticamente. No necesitas tocarla.`,
    keyPoints: [
      'module define el sistema de módulos del JavaScript generado',
      'commonjs usa require/module.exports — ideal para Node.js tradicional',
      'ESNext usa import/export nativos — ideal para navegadores y herramientas modernas',
      'En frameworks como Next.js, module está configurado automáticamente',
      'target y module deben ser compatibles entre sí',
    ],
    exercise: {
      description:
        'Escribe la configuración tsconfig.json completa para un proyecto de Node.js tradicional que necesita compatibilidad amplia: target ES2017 (para async/await nativo), module commonjs, strict activado.',
      hint: 'Recuerda que las opciones van dentro de compilerOptions y los valores de string van entre comillas.',
    },
    quiz: [
      {
        question: '¿Qué controla la opción "module" en tsconfig.json?',
        options: [
          'Los archivos a incluir',
          'El sistema de módulos en el JavaScript generado',
          'La versión de TypeScript',
          'El nivel de strictness',
        ],
        correctAnswer: 'El sistema de módulos en el JavaScript generado',
        correctFeedback: '¡Correcto! module define si TypeScript genera require/module.exports o import/export.',
        incorrectFeedback: 'La opción "module" controla el sistema de módulos (CommonJS vs ESModules) en la salida.',
      },
      {
        question: '¿Qué sistema de módulos usa "module: commonjs"?',
        options: ['import/export nativos', 'require/module.exports', 'define/require de AMD', 'System.import'],
        correctAnswer: 'require/module.exports',
        correctFeedback: '¡Exacto! CommonJS usa require() para importar y module.exports para exportar.',
        incorrectFeedback: 'CommonJS usa require() para importar y module.exports para exportar.',
      },
      {
        question: '¿Cuál es la opción de module recomendada para proyectos Node.js tradicionales?',
        options: ['ESNext', 'AMD', 'commonjs', 'UMD'],
        correctAnswer: 'commonjs',
        correctFeedback: '¡Correcto! CommonJS es el sistema de módulos nativo de Node.js.',
        incorrectFeedback: 'Para Node.js tradicional se recomienda "commonjs".',
      },
      {
        question: 'En un proyecto con Next.js, ¿deberías configurar manualmente la opción module?',
        options: [
          'Sí, siempre a ESNext',
          'Sí, siempre a commonjs',
          'No, Next.js lo configura automáticamente',
          'Depende del sistema operativo',
        ],
        correctAnswer: 'No, Next.js lo configura automáticamente',
        correctFeedback: '¡Correcto! Frameworks como Next.js configuran module automáticamente, no debes tocarla.',
        incorrectFeedback: 'En Next.js y otros frameworks, la opción module está configurada automáticamente.',
      },
      {
        question: '¿Qué pasa si usas target ES5 y module ESNext?',
        options: [
          'Funciona perfectamente',
          'Genera código más rápido',
          'Puede ser incompatible — target y module deben ser compatibles',
          'Solo afecta a los tests',
        ],
        correctAnswer: 'Puede ser incompatible — target y module deben ser compatibles',
        correctFeedback: '¡Correcto! target y module deben ser compatibles. ES5 y ESNext son incompatibles.',
        incorrectFeedback: 'target y module deben ser compatibles. Una combinación como ES5+ESNext puede causar problemas.',
      },
    ],
  },
  {
    slug: 'tsconfig-rootdir-outdir',
    title: 'rootDir y outDir',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 200,
    description:
      'Aprende a organizar la estructura de carpetas de tu proyecto con rootDir y outDir.',
    explanation: `## rootDir y outDir

Estas dos opciones definen la **estructura de carpetas** del proyecto:

- **\`rootDir\`**: dónde están tus archivos TypeScript fuente
- **\`outDir\`**: dónde TypeScript pondrá los archivos JavaScript compilados

### Sin estas opciones

Si no las configuras, TypeScript mezcla los \`.ts\` y \`.js\` en la misma carpeta, lo que es difícil de manejar.

### Con rootDir y outDir

\`\`\`
mi-proyecto/
├── src/              ← rootDir
│   ├── index.ts
│   └── utils.ts
├── dist/             ← outDir (generado por tsc)
│   ├── index.js
│   └── utils.js
└── tsconfig.json
\`\`\`

### Configuración

\`\`\`json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
\`\`\`

### TypeScript mantiene la estructura

Si tienes:
\`\`\`
src/
├── index.ts
└── helpers/
    └── fecha.ts
\`\`\`

TypeScript genera:
\`\`\`
dist/
├── index.js
└── helpers/
    └── fecha.js
\`\`\`

La estructura interna se replica automáticamente.

### .gitignore y dist/

La carpeta \`dist/\` contiene archivos **generados**. No deberías subirla a git:

\`\`\`
# .gitignore
dist/
node_modules/
\`\`\`

### Errores comunes

\`\`\`
error TS6059: File 'src/index.ts' is not under 'rootDir'
\`\`\`

Este error ocurre cuando un archivo importado está fuera de \`rootDir\`. Solución: mover el archivo dentro de \`src/\` o ajustar \`rootDir\`.`,
    codeExample: `// tsconfig.json — estructura limpia con rootDir y outDir
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "rootDir": "./src",    // Aquí viven tus archivos .ts
    "outDir": "./dist"     // Aquí irán los .js compilados
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

// Estructura del proyecto:
// src/
//   index.ts
//   modelos/
//     usuario.ts
//   utilidades/
//     formato.ts

// Después de ejecutar 'tsc':
// dist/
//   index.js
//   modelos/
//     usuario.js
//   utilidades/
//     formato.js

// src/modelos/usuario.ts
export interface Usuario {
  id: number
  nombre: string
  email: string
}

// src/utilidades/formato.ts
export function formatearNombre(nombre: string): string {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
}

// src/index.ts
import { Usuario } from './modelos/usuario'
import { formatearNombre } from './utilidades/formato'

const usuario: Usuario = {
  id: 1,
  nombre: formatearNombre('ANA'),
  email: 'ana@ejemplo.com',
}

console.log(usuario)`,
    keyPoints: [
      'rootDir indica dónde están los archivos TypeScript fuente',
      'outDir indica dónde se guardarán los archivos JavaScript compilados',
      'TypeScript replica la estructura interna de carpetas al compilar',
      'La carpeta dist/ debe ignorarse en .gitignore',
      'Error TS6059 indica que un archivo está fuera de rootDir',
    ],
    exercise: {
      description:
        'Configura un tsconfig.json para un proyecto con esta estructura: archivos TypeScript en "./src", salida en "./build", strict activado, target ES2020, module commonjs. Además escribe qué línea añadirías al .gitignore.',
      hint: 'outDir y rootDir van dentro de compilerOptions. El .gitignore debe incluir la carpeta de salida.',
    },
    quiz: [
      {
        question: '¿Qué define "rootDir" en tsconfig.json?',
        options: [
          'La carpeta raíz de los archivos compilados',
          'La carpeta donde están los archivos TypeScript fuente',
          'La carpeta de node_modules',
          'La carpeta del proyecto en general',
        ],
        correctAnswer: 'La carpeta donde están los archivos TypeScript fuente',
        correctFeedback: '¡Correcto! rootDir es donde TypeScript busca los archivos .ts fuente.',
        incorrectFeedback: 'rootDir indica dónde están los archivos TypeScript fuente (normalmente "src").',
      },
      {
        question: '¿Qué define "outDir" en tsconfig.json?',
        options: [
          'Dónde están los archivos fuente',
          'Dónde se generan los archivos JavaScript compilados',
          'Dónde instalar paquetes',
          'La carpeta de tests',
        ],
        correctAnswer: 'Dónde se generan los archivos JavaScript compilados',
        correctFeedback: '¡Exacto! outDir es donde TypeScript deposita los archivos .js compilados.',
        incorrectFeedback: 'outDir define el destino de los archivos JavaScript compilados.',
      },
      {
        question: '¿Qué hace TypeScript con la estructura de subcarpetas dentro de rootDir?',
        options: ['La aplana, pone todo en un nivel', 'La replica en outDir', 'La ignora', 'La ordena alfabéticamente'],
        correctAnswer: 'La replica en outDir',
        correctFeedback: '¡Correcto! TypeScript replica la estructura de carpetas de src/ dentro de dist/.',
        incorrectFeedback: 'TypeScript replica la misma estructura de carpetas de rootDir a outDir.',
      },
      {
        question: '¿Por qué deberías añadir "dist/" al .gitignore?',
        options: [
          'Porque ocupa mucho espacio',
          'Porque son archivos generados, no código fuente',
          'Porque git no puede leer JavaScript',
          'Porque TypeScript lo requiere',
        ],
        correctAnswer: 'Porque son archivos generados, no código fuente',
        correctFeedback: '¡Correcto! dist/ contiene archivos generados automáticamente. No tiene sentido versionar código generado.',
        incorrectFeedback: 'dist/ contiene archivos generados que pueden recrearse con "tsc". No tiene sentido subirlos a git.',
      },
      {
        question: '¿Qué error indica que un archivo está fuera de rootDir?',
        options: ['TS2307', 'TS6059', 'TS2322', 'TS1005'],
        correctAnswer: 'TS6059',
        correctFeedback: '¡Correcto! TS6059 es el error que aparece cuando un archivo importado está fuera del rootDir configurado.',
        incorrectFeedback: 'El error TS6059 indica que un archivo está fuera del rootDir especificado.',
      },
    ],
  },
  {
    slug: 'tsconfig-noimplicitany',
    title: 'noImplicitAny: el fin de los tipos ocultos',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 201,
    description:
      'Comprende por qué noImplicitAny es esencial y cómo eliminar los "any" que se cuelan sin que los veas.',
    explanation: `## noImplicitAny

\`noImplicitAny: true\` hace que TypeScript te avise cuando infiere \`any\` de manera implícita, es decir, sin que tú lo hayas escrito.

### El problema: any silencioso

\`\`\`typescript
// Sin noImplicitAny — TypeScript infiere 'any' en silencio
function procesar(dato) {  // dato es 'any' sin que lo sepas
  return dato.toLowerCase()  // Podría fallar en runtime
}

procesar(42)  // ¡Error en runtime! 42.toLowerCase() no existe
\`\`\`

### Con noImplicitAny activado

\`\`\`typescript
// Con noImplicitAny — TypeScript te obliga a ser explícito
function procesar(dato) {
  // Error: Parameter 'dato' implicitly has an 'any' type
}

// Debes declarar el tipo:
function procesar(dato: string): string {
  return dato.toLowerCase()  // Ahora es seguro
}
\`\`\`

### ¿Cuándo aparece any implícito?

1. Parámetros sin tipo en funciones
2. Variables declaradas sin valor inicial ni tipo
3. Arrays vacíos sin tipo
4. Destructuring sin anotaciones

### ¿Puedo usar any explícito?

Sí. \`noImplicitAny\` solo prohíbe el \`any\` que TypeScript infiere, no el que tú escribes a propósito.

\`\`\`typescript
function procesarDesconocido(dato: any): void {  // Explícito — permitido
  console.log(dato)
}
\`\`\`

Pero mejor usa \`unknown\` cuando no sabes el tipo:

\`\`\`typescript
function procesarDesconocido(dato: unknown): void {
  if (typeof dato === 'string') {
    console.log(dato.toUpperCase())  // Seguro con narrowing
  }
}
\`\`\`

### noImplicitAny está dentro de strict

Si usas \`strict: true\`, \`noImplicitAny\` ya está activado automáticamente.`,
    codeExample: `// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": true  // O simplemente usa strict: true
  }
}

// ─── Casos que generan error ──────────────────────────────────
// 1. Parámetro sin tipo
function doblar(x) {  // Error: Parameter 'x' implicitly has 'any' type
  return x * 2
}

// 2. Variable sin inicializar ni tipo
let resultado  // Error: Variable 'resultado' implicitly has 'any' type

// 3. Array vacío sin tipo
const lista = []  // Error: Variable 'lista' implicitly has 'any[]' type

// ─── Correcciones ─────────────────────────────────────────────
// 1. Parámetro con tipo
function doblarBien(x: number): number {
  return x * 2
}

// 2. Variable con tipo explícito
let resultadoBien: number

// 3. Array con tipo
const listaBien: string[] = []

// ─── any explícito (permitido, pero úsalo poco) ───────────────
function manejarDato(dato: any): void {
  console.log(dato)
}

// ─── Mejor: unknown con narrowing ─────────────────────────────
function manejarDatoSeguro(dato: unknown): void {
  if (typeof dato === 'string') {
    console.log(dato.toUpperCase())
  } else if (typeof dato === 'number') {
    console.log(dato.toFixed(2))
  }
}`,
    keyPoints: [
      'noImplicitAny prohíbe que TypeScript infiera "any" en silencio',
      'Se activa automáticamente con strict: true',
      'Parámetros sin tipo, variables no inicializadas y arrays vacíos pueden generar any implícito',
      'any explícito (escrito por ti) sigue siendo permitido',
      'Prefiere "unknown" sobre "any" cuando no sabes el tipo',
    ],
    exercise: {
      description:
        'Corrige este código que tiene any implícito: `function calcular(a, b) { return a + b }` y `let total; total = calcular(5, 3)`. Añade los tipos necesarios para que funcione con noImplicitAny: true.',
      hint: 'Los parámetros de función necesitan tipo explícito. La variable total también puede tener tipo o inicializarse directamente.',
    },
    quiz: [
      {
        question: '¿Qué prohíbe "noImplicitAny: true"?',
        options: [
          'Usar "any" en absoluto',
          'Que TypeScript infiera "any" de forma silenciosa',
          'Usar variables sin inicializar',
          'Usar funciones sin retorno',
        ],
        correctAnswer: 'Que TypeScript infiera "any" de forma silenciosa',
        correctFeedback: '¡Correcto! noImplicitAny prohíbe el "any" que TypeScript asigna implícitamente, no el que tú escribes.',
        incorrectFeedback: 'noImplicitAny prohíbe el "any" inferido en silencio, no el que tú escribes explícitamente.',
      },
      {
        question: '¿Cuál de estos genera un error con noImplicitAny?',
        options: ['function f(x: any) {}', 'function f(x: unknown) {}', 'function f(x) {}', 'const x: any = 5'],
        correctAnswer: 'function f(x) {}',
        correctFeedback: '¡Correcto! Un parámetro sin tipo hace que TypeScript lo infiera como "any", lo que noImplicitAny prohíbe.',
        incorrectFeedback: 'function f(x) {} tiene un parámetro sin tipo, TypeScript lo inferiría como "any" implícito.',
      },
      {
        question: 'Con noImplicitAny, ¿puedes escribir "const x: any = algo"?',
        options: [
          'No, any está completamente prohibido',
          'Sí, "any" explícito está permitido',
          'Solo en archivos .d.ts',
          'Solo con // @ts-ignore',
        ],
        correctAnswer: 'Sí, "any" explícito está permitido',
        correctFeedback: '¡Correcto! noImplicitAny solo prohíbe el "any" inferido. El "any" que tú escribes explícitamente sigue siendo válido.',
        incorrectFeedback: 'noImplicitAny solo prohíbe el "any" inferido. Puedes escribir "any" explícitamente si realmente lo necesitas.',
      },
      {
        question: '¿Está noImplicitAny incluido en "strict: true"?',
        options: [
          'No, son opciones separadas',
          'Sí, strict: true activa noImplicitAny automáticamente',
          'Solo en versiones recientes de TypeScript',
          'Solo si también activas strictNullChecks',
        ],
        correctAnswer: 'Sí, strict: true activa noImplicitAny automáticamente',
        correctFeedback: '¡Exacto! noImplicitAny es una de las opciones que strict: true activa automáticamente.',
        incorrectFeedback: 'Sí, noImplicitAny forma parte del conjunto de opciones que activa strict: true.',
      },
      {
        question: '¿Cuál es la alternativa más segura a "any" cuando no conoces el tipo?',
        options: ['object', 'void', 'unknown', 'never'],
        correctAnswer: 'unknown',
        correctFeedback: '¡Correcto! "unknown" es seguro porque obliga a hacer narrowing antes de usar el valor.',
        incorrectFeedback: '"unknown" es más seguro que "any" porque requiere verificar el tipo antes de usarlo.',
      },
    ],
  },
  {
    slug: 'tsconfig-esmoduleinterop',
    title: 'esModuleInterop: compatibilidad entre módulos',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 202,
    description:
      'Entiende qué hace esModuleInterop y por qué suele estar activado en proyectos modernos.',
    explanation: `## esModuleInterop

\`esModuleInterop: true\` resuelve un problema histórico de compatibilidad entre el sistema de módulos de Node.js (CommonJS) y los imports de ES Modules.

### El problema

Muchos paquetes de npm están escritos en CommonJS y exportan así:

\`\`\`javascript
// Paquete CommonJS (por ejemplo, 'express')
module.exports = function() { ... }
// o
module.exports = { default: function() { ... } }
\`\`\`

Sin \`esModuleInterop\`, importarlos con ES Module syntax da problemas:

\`\`\`typescript
// Sin esModuleInterop — puede fallar
import express from 'express'  // Error en algunos casos
import * as express from 'express'  // Workaround feo
\`\`\`

### La solución

\`\`\`json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
\`\`\`

Ahora puedes hacer:

\`\`\`typescript
// Con esModuleInterop — import limpio y correcto
import express from 'express'
import fs from 'fs'
import path from 'path'
\`\`\`

### ¿Qué hace internamente?

TypeScript añade código de compatibilidad que convierte los exports de CommonJS para que funcionen como si fueran exports de ES Modules.

### allowSyntheticDefaultImports

\`esModuleInterop: true\` activa automáticamente \`allowSyntheticDefaultImports: true\`, que permite el import de default de módulos que no tienen \`export default\` explícito.

### ¿Siempre debo activarlo?

- Sí si usas paquetes CommonJS con import default syntax
- Sí en proyectos Node.js (muy común)
- No necesario si solo usas paquetes que son ESModules puros

En la práctica, casi siempre lo querrás activado.`,
    codeExample: `// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,           // Activa compatibilidad
    "allowSyntheticDefaultImports": true  // Se activa automáticamente
  }
}

// ─── Sin esModuleInterop ──────────────────────────────────────
import * as fs from 'fs'       // Workaround necesario
import * as path from 'path'   // Poco elegante

// ─── Con esModuleInterop ──────────────────────────────────────
import fs from 'fs'            // Import limpio
import path from 'path'        // Mucho mejor
import express from 'express'  // Funciona correctamente

// ─── Ejemplo práctico ─────────────────────────────────────────
import fs from 'fs'
import path from 'path'

function leerArchivo(nombre: string): string {
  const ruta = path.join(__dirname, nombre)
  return fs.readFileSync(ruta, 'utf-8')
}

function guardarArchivo(nombre: string, contenido: string): void {
  const ruta = path.join(__dirname, nombre)
  fs.writeFileSync(ruta, contenido, 'utf-8')
}

guardarArchivo('datos.txt', 'Hola TypeScript')
const contenido = leerArchivo('datos.txt')
console.log(contenido)  // → Hola TypeScript`,
    keyPoints: [
      'esModuleInterop resuelve incompatibilidades entre CommonJS y ESModules',
      'Permite hacer "import x from módulo" con paquetes CommonJS como fs, path, express',
      'Activa automáticamente allowSyntheticDefaultImports',
      'Es muy recomendable en proyectos Node.js',
      'Sin él, necesitas el workaround feo "import * as x from módulo"',
    ],
    exercise: {
      description:
        'Sin esModuleInterop, este código falla: `import fs from "fs"; import path from "path"`. ¿Cómo quedaría el código usando el workaround sin esModuleInterop? Y ¿cómo quedaría el tsconfig.json con esModuleInterop: true?',
      hint: 'El workaround es "import * as fs from fs". Con esModuleInterop en true, el import default funciona directamente.',
    },
    quiz: [
      {
        question: '¿Qué problema resuelve esModuleInterop?',
        options: [
          'Permite usar TypeScript sin compilar',
          'Resuelve incompatibilidades entre CommonJS y ESModules',
          'Hace que los tipos sean más estrictos',
          'Mejora la velocidad de compilación',
        ],
        correctAnswer: 'Resuelve incompatibilidades entre CommonJS y ESModules',
        correctFeedback: '¡Correcto! esModuleInterop permite importar paquetes CommonJS con la sintaxis moderna de import.',
        incorrectFeedback: 'esModuleInterop resuelve el problema de compatibilidad entre CommonJS y ESModules.',
      },
      {
        question: 'Sin esModuleInterop, ¿cómo deberías importar el módulo "fs" de Node.js?',
        options: ["import fs from 'fs'", "require('fs')", "import * as fs from 'fs'", "import { fs } from 'fs'"],
        correctAnswer: "import * as fs from 'fs'",
        correctFeedback: '¡Correcto! Sin esModuleInterop el workaround es "import * as fs from fs".',
        incorrectFeedback: 'Sin esModuleInterop se usa el workaround "import * as fs from fs".',
      },
      {
        question: '¿Qué otra opción activa automáticamente esModuleInterop?',
        options: ['noImplicitAny', 'allowSyntheticDefaultImports', 'skipLibCheck', 'resolveJsonModule'],
        correctAnswer: 'allowSyntheticDefaultImports',
        correctFeedback: '¡Correcto! esModuleInterop activa automáticamente allowSyntheticDefaultImports.',
        incorrectFeedback: 'esModuleInterop activa automáticamente la opción allowSyntheticDefaultImports.',
      },
      {
        question: '¿En qué tipo de proyectos es más útil esModuleInterop?',
        options: [
          'Solo en proyectos de frontend',
          'Proyectos Node.js que usan paquetes CommonJS',
          'Solo en proyectos con Deno',
          'Solo cuando se usa Webpack',
        ],
        correctAnswer: 'Proyectos Node.js que usan paquetes CommonJS',
        correctFeedback: '¡Correcto! Es especialmente útil en Node.js donde muchos paquetes son CommonJS.',
        incorrectFeedback: 'esModuleInterop es muy útil en proyectos Node.js donde los paquetes suelen ser CommonJS.',
      },
      {
        question: "Con esModuleInterop: true, ¿cómo importas 'express'?",
        options: [
          "const express = require('express')",
          "import * as express from 'express'",
          "import express from 'express'",
          "import { express } from 'express'",
        ],
        correctAnswer: "import express from 'express'",
        correctFeedback: '¡Exacto! Con esModuleInterop puedes usar el import default limpio.',
        incorrectFeedback: 'Con esModuleInterop: true, puedes usar "import express from express" limpiamente.',
      },
    ],
  },
  {
    slug: 'tsconfig-recomendado-principiantes',
    title: 'Configuración recomendada para principiantes',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 203,
    description:
      'Un tsconfig.json completo, explicado línea por línea, ideal para aprender y proyectos personales.',
    explanation: `## Configuración recomendada para principiantes

Después de ver todas las opciones principales, aquí está la configuración ideal para alguien que está aprendiendo TypeScript o creando proyectos personales.

### El tsconfig.json completo

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

### Explicación línea por línea

| Opción | Valor | Por qué |
|---|---|---|
| \`target\` | ES2020 | Código moderno, compatible con Node.js actual |
| \`module\` | commonjs | Sistema de módulos de Node.js |
| \`lib\` | [ES2020] | Tipos de las APIs disponibles |
| \`strict\` | true | Todas las verificaciones de seguridad |
| \`esModuleInterop\` | true | Importar paquetes CommonJS limpiamente |
| \`skipLibCheck\` | true | Salta verificación de tipos en .d.ts externos |
| \`forceConsistentCasingInFileNames\` | true | Evita problemas en sistemas case-sensitive |
| \`outDir\` | ./dist | Carpeta de salida compilada |
| \`rootDir\` | ./src | Carpeta de fuentes |
| \`sourceMap\` | true | Facilita depuración |

### ¿Qué es sourceMap?

Los source maps relacionan el JavaScript compilado con el TypeScript original. Cuando hay un error en ejecución, puedes ver la línea correcta en tu \`.ts\` y no en el \`.js\` generado.

### ¿Qué es skipLibCheck?

Salta la verificación de tipos en archivos \`.d.ts\` de dependencias externas. Evita errores en librerías que tienen tipos inconsistentes entre sí.

### Paso a paso para un proyecto nuevo

\`\`\`bash
mkdir mi-proyecto
cd mi-proyecto
npm init -y
npm install typescript --save-dev
npx tsc --init
# Luego edita el tsconfig.json generado con los valores recomendados
mkdir src
\`\`\``,
    codeExample: `// tsconfig.json completo y recomendado para aprender TypeScript
{
  "compilerOptions": {
    // ─── Compilación ──────────────────────────────────────────
    "target": "ES2020",              // JavaScript moderno
    "module": "commonjs",            // Para Node.js
    "lib": ["ES2020"],               // APIs disponibles

    // ─── Seguridad ────────────────────────────────────────────
    "strict": true,                  // Todas las verificaciones
    "noUnusedLocals": true,          // Variables no usadas = error
    "noUnusedParameters": true,      // Parámetros no usados = error
    "noImplicitReturns": true,       // Todas las rutas deben retornar

    // ─── Compatibilidad ───────────────────────────────────────
    "esModuleInterop": true,         // Import limpio de CommonJS
    "skipLibCheck": true,            // Evita errores en .d.ts externos
    "forceConsistentCasingInFileNames": true,

    // ─── Estructura de carpetas ───────────────────────────────
    "rootDir": "./src",              // Fuentes aquí
    "outDir": "./dist",              // Compilado aquí

    // ─── Depuración ───────────────────────────────────────────
    "sourceMap": true                // Facilita debug
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

// package.json — scripts útiles
// {
//   "scripts": {
//     "build": "tsc",
//     "build:watch": "tsc --watch",
//     "typecheck": "tsc --noEmit",
//     "start": "node dist/index.js",
//     "dev": "ts-node src/index.ts"
//   }
// }`,
    keyPoints: [
      'strict: true es la opción más importante — nunca la desactives',
      'esModuleInterop: true facilita los imports con paquetes npm',
      'skipLibCheck: true evita errores en tipos de librerías externas',
      'sourceMap: true facilita la depuración enlazando JS con TS',
      'Siempre excluye node_modules y dist en la sección exclude',
    ],
    exercise: {
      description:
        'Crea un proyecto TypeScript desde cero: inicializa npm, instala TypeScript, crea el tsconfig.json recomendado, crea src/index.ts con una función tipada, y compila con "tsc". ¿Qué archivos aparecen en dist/?',
      hint: 'Sigue los pasos: npm init -y, npm install typescript, crea tsconfig.json con la configuración recomendada, crea src/index.ts, ejecuta npx tsc.',
    },
    quiz: [
      {
        question: '¿Qué hace "sourceMap: true" en tsconfig.json?',
        options: [
          'Crea un mapa de las variables',
          'Relaciona el JS compilado con el TS original para facilitar debug',
          'Genera documentación automática',
          'Crea un archivo de índice de módulos',
        ],
        correctAnswer: 'Relaciona el JS compilado con el TS original para facilitar debug',
        correctFeedback: '¡Correcto! Los source maps permiten ver errores apuntando al código TypeScript original, no al JS generado.',
        incorrectFeedback: 'sourceMap: true crea archivos .map que relacionan el JS compilado con el TS fuente para depuración.',
      },
      {
        question: '¿Qué hace "skipLibCheck: true"?',
        options: [
          'Salta la compilación de las librerías',
          'Omite verificación de tipos en archivos .d.ts externos',
          'Ignora errores en node_modules',
          'Evita instalar librerías',
        ],
        correctAnswer: 'Omite verificación de tipos en archivos .d.ts externos',
        correctFeedback: '¡Exacto! skipLibCheck evita errores causados por tipos inconsistentes en dependencias externas.',
        incorrectFeedback: 'skipLibCheck omite la verificación de tipos en archivos de definición (.d.ts) de librerías.',
      },
      {
        question: '¿Qué hace "noUnusedLocals: true"?',
        options: [
          'Elimina variables locales en la compilación',
          'Genera error si declaras variables locales sin usar',
          'Prohíbe declarar variables con let',
          'Requiere que todas las variables sean const',
        ],
        correctAnswer: 'Genera error si declaras variables locales sin usar',
        correctFeedback: '¡Correcto! noUnusedLocals te avisa cuando declaras variables que nunca usas.',
        incorrectFeedback: 'noUnusedLocals genera un error de compilación si declaras variables locales que no usas.',
      },
      {
        question: 'Para un proyecto Node.js nuevo, ¿cuál es la combinación correcta de target y module?',
        options: ['ES3 + ESNext', 'ES2020 + commonjs', 'ESNext + AMD', 'ES5 + UMD'],
        correctAnswer: 'ES2020 + commonjs',
        correctFeedback: '¡Correcto! ES2020 + commonjs es la combinación recomendada para Node.js moderno.',
        incorrectFeedback: 'Para Node.js moderno, ES2020 + commonjs es la combinación más apropiada.',
      },
      {
        question: '¿Por qué es importante "forceConsistentCasingInFileNames"?',
        options: [
          'Para que los nombres de archivo sean más cortos',
          'Evita problemas de importaciones en sistemas de archivos case-sensitive (Linux/Mac)',
          'Convierte los nombres a minúsculas automáticamente',
          'Solo sirve en Windows',
        ],
        correctAnswer: 'Evita problemas de importaciones en sistemas de archivos case-sensitive (Linux/Mac)',
        correctFeedback: '¡Correcto! En Linux las importaciones son case-sensitive, esta opción previene bugs al mover código entre sistemas.',
        incorrectFeedback: 'forceConsistentCasingInFileNames previene bugs de importaciones al trabajar en equipos con diferentes sistemas operativos.',
      },
    ],
  },
  {
    slug: 'errores-comunes-tsconfig',
    title: 'Errores comunes con tsconfig',
    module: 'Configuración de tsconfig',
    moduleNumber: 25,
    order: 204,
    description:
      'Aprende a identificar y solucionar los errores más frecuentes al configurar tsconfig.json.',
    explanation: `## Errores comunes con tsconfig

Al configurar TypeScript por primera vez, es normal encontrar errores. Aquí están los más frecuentes y cómo solucionarlos.

### Error 1: TS6059 — Archivo fuera de rootDir

\`\`\`
error TS6059: File 'index.ts' is not under 'rootDir' 'src'
\`\`\`

**Causa**: tienes archivos \`.ts\` fuera de la carpeta configurada en \`rootDir\`.

**Solución**: mover el archivo a \`src/\` o ajustar \`rootDir\`.

### Error 2: TS2307 — No se puede encontrar el módulo

\`\`\`
error TS2307: Cannot find module './utils' or its corresponding type declarations
\`\`\`

**Causa**: importas un archivo que no existe o tiene un nombre diferente.

**Solución**: verificar el nombre del archivo y la ruta.

### Error 3: outDir sin exclude

Ocurre cuando \`outDir\` no está en \`exclude\` y TypeScript intenta compilar sus propios archivos generados.

**Solución**: añadir \`outDir\` a la sección \`exclude\`.

### Error 4: JSON inválido

\`\`\`
error TS5024: Compiler option 'target' requires a value of type string
\`\`\`

**Causa**: el \`tsconfig.json\` tiene un error de sintaxis (coma extra, comillas faltantes, etc.).

**Solución**: validar el JSON con un linter o validador online.

### Error 5: Opciones desconocidas

\`\`\`
error TS5023: Unknown compiler option 'strictNull'
\`\`\`

**Causa**: nombre de opción incorrecto (el correcto es \`strictNullChecks\`).

**Solución**: revisar la documentación oficial para el nombre exacto.

### Herramienta de diagnóstico

\`\`\`bash
tsc --noEmit      # Verifica tipos sin generar archivos
tsc --listFiles   # Lista todos los archivos que TypeScript está compilando
\`\`\``,
    codeExample: `// ─── tsconfig.json con errores comunes ───────────────────────

// ❌ Error 1: outDir no está en exclude
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "exclude": ["node_modules"]  // Falta "dist"!
}

// ✅ Correcto: incluir dist en exclude
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "exclude": ["node_modules", "dist"]
}

// ─────────────────────────────────────────────────────────────

// ❌ Error 2: coma extra al final (JSON inválido)
// {
//   "compilerOptions": {
//     "strict": true,
//     "target": "ES6",   ← coma extra al ser el último elemento
//   }
// }

// ✅ Correcto: sin coma al final del último elemento
{
  "compilerOptions": {
    "strict": true,
    "target": "ES6"
  }
}

// ─────────────────────────────────────────────────────────────

// ❌ Error 3: nombre de opción incorrecto
// {
//   "compilerOptions": {
//     "strictNull": true,        // No existe
//     "noImplicit": true,        // No existe
//     "esModuleInterOp": true    // Mayúscula incorrecta
//   }
// }

// ✅ Correcto: nombres exactos
{
  "compilerOptions": {
    "strictNullChecks": true,
    "noImplicitAny": true,
    "esModuleInterop": true
  }
}

// Comandos de diagnóstico:
// tsc --noEmit    → verifica sin generar archivos
// tsc --listFiles → muestra qué archivos compila TypeScript`,
    keyPoints: [
      'TS6059 indica que un archivo está fuera de rootDir — muévelo a src/',
      'TS2307 indica que no se encuentra un módulo — verifica la ruta',
      'JSON inválido (comas extra, comillas faltantes) causa errores crípticos',
      'Los nombres de opciones son case-sensitive: "esModuleInterop" no "esModuleInterOp"',
      'Siempre excluye la carpeta outDir para evitar compilar archivos ya compilados',
    ],
    exercise: {
      description:
        'Encuentra y corrige todos los errores en este tsconfig.json: `{ "compilerOptions": { "strictNull": true, "target": "ES6", "outDir": "./dist", } }`. Hay al menos 3 errores: nombre incorrecto, coma extra, y falta el exclude.',
      hint: '1) strictNull → strictNullChecks, 2) elimina la coma del último elemento en compilerOptions, 3) añade exclude con node_modules y dist.',
    },
    quiz: [
      {
        question: '¿Qué error genera un archivo .ts fuera de la carpeta rootDir?',
        options: ['TS2307', 'TS6059', 'TS2322', 'TS1128'],
        correctAnswer: 'TS6059',
        correctFeedback: '¡Correcto! TS6059 indica que un archivo está fuera del rootDir configurado.',
        incorrectFeedback: 'El error TS6059 aparece cuando un archivo está fuera de la carpeta rootDir.',
      },
      {
        question: '¿Por qué debes añadir "dist" a la sección exclude?',
        options: [
          'Para compilar más rápido',
          'Para evitar que TypeScript compile sus propios archivos generados',
          'Porque dist no puede contener TypeScript',
          'Es solo una convención, no tiene efecto real',
        ],
        correctAnswer: 'Para evitar que TypeScript compile sus propios archivos generados',
        correctFeedback: '¡Correcto! Sin excluir dist, TypeScript podría intentar compilar los .js ya generados, causando errores.',
        incorrectFeedback: 'Si no excluyes dist, TypeScript podría intentar compilar los archivos JavaScript que él mismo generó.',
      },
      {
        question: '¿Qué problema tiene este JSON: { "target": "ES6", }',
        options: ['target no es válido', 'ES6 debe ir sin comillas', 'Hay una coma extra al final', 'Falta la sección compilerOptions'],
        correctAnswer: 'Hay una coma extra al final',
        correctFeedback: '¡Correcto! JSON no permite comas al final del último elemento de un objeto o array.',
        incorrectFeedback: 'El JSON tiene una coma extra después de ES6. JSON no permite comas trailing.',
      },
      {
        question: '¿Cuál es el nombre CORRECTO de la opción para verificar nulls?',
        options: ['strictNull', 'checkNulls', 'strictNullChecks', 'noNullCheck'],
        correctAnswer: 'strictNullChecks',
        correctFeedback: '¡Correcto! La opción se llama exactamente "strictNullChecks".',
        incorrectFeedback: 'La opción correcta se llama "strictNullChecks" — los nombres son case-sensitive.',
      },
      {
        question: '¿Qué comando usarías para verificar errores de tipos sin generar archivos JavaScript?',
        options: ['tsc --dry-run', 'tsc --check-only', 'tsc --noEmit', 'tsc --verify'],
        correctAnswer: 'tsc --noEmit',
        correctFeedback: '¡Correcto! tsc --noEmit verifica tipos y reporta errores sin generar archivos .js.',
        incorrectFeedback: 'El comando "tsc --noEmit" verifica los tipos sin generar archivos de salida.',
      },
    ],
  },
]

export const tsModule25: Module = {
  number: 25,
  title: 'Configuración de tsconfig',
  level: 'nivel5',
  lessons: lessonsTsModule25,
}
