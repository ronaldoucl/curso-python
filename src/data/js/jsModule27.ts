import type { Lesson, Module } from '@/types'

export const lessonsJsModule27: Lesson[] = [
  {
    slug: 'que-es-vite',
    title: '¿Qué es Vite?',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 207,
    description: 'Aprende qué es Vite y por qué se usa para crear proyectos frontend modernos de forma rápida.',
    explanation: `**Vite** (pronunciado "vit", del francés "rápido") es una herramienta de desarrollo que te da un servidor de desarrollo ultrarrápido y un sistema de construcción optimizado para proyectos frontend modernos.

**Analogía:** Antes de Vite, preparar un proyecto era como cocinar cada plato desde cero cada vez que pedías algo. Vite es como tener los ingredientes ya listos, por lo que el plato llega en segundos.

**¿Por qué Vite y no solo un archivo HTML con script?**
- Permite usar módulos ES (\`import/export\`) sin configuración
- Recarga automática al guardar cambios (Hot Module Replacement)
- Transforma el código para navegadores modernos
- Optimiza los archivos para producción (build)
- Soporte para TypeScript, SASS, etc.

**¿Qué problema resolvía antes Vite?**
Herramientas como Webpack tardaban mucho en arrancar porque procesaban todo el proyecto antes de mostrarlo. Vite solo procesa lo que el navegador necesita en cada momento.

**Velocidades comparadas:**
| Herramienta | Arranque en proyecto grande |
|-------------|---------------------------|
| Webpack | 30-60 segundos |
| Vite | < 1 segundo |

**¿Cuándo usar Vite?**
Cuando quieres organizar tu JavaScript en múltiples archivos con import/export y necesitas un entorno de desarrollo profesional sin configuración compleja.`,
    codeExample: `// Terminal: crear un proyecto con Vite
// npm create vite@latest mi-app -- --template vanilla

// Estructura generada:
// mi-app/
// ├── index.html        ← punto de entrada del navegador
// ├── main.js           ← archivo JavaScript principal
// ├── style.css         ← estilos globales
// ├── package.json      ← configuración del proyecto
// └── public/           ← archivos estáticos (favicon, imágenes)

// main.js generado por Vite:
import './style.css'

document.querySelector('#app').innerHTML = '<h1>Hola Mundo</h1>'

// index.html generado por Vite:
// <!DOCTYPE html>
// <html>
//   <body>
//     <div id="app"></div>
//     <script type="module" src="/main.js"></script>
//   </body>
// </html>

// Nota: type="module" permite usar import/export

// Comandos del proyecto:
// npm run dev     → servidor local en http://localhost:5173
// npm run build   → genera archivos optimizados en dist/`,
    keyPoints: [
      'Vite es una herramienta de desarrollo ultrarrápida para frontend',
      'Permite usar import/export sin configuración adicional',
      'Recarga el navegador automáticamente al guardar cambios',
      'npm run dev inicia el servidor de desarrollo',
      'npm run build genera los archivos optimizados para producción',
      'Es mucho más rápido que herramientas como Webpack',
    ],
    exercise: {
      description: 'Instala Vite y crea tu primer proyecto con: npm create vite@latest mi-task-app -- --template vanilla. Entra a la carpeta, ejecuta npm install y luego npm run dev. Abre http://localhost:5173 en el navegador.',
      hint: 'El template "vanilla" crea un proyecto JavaScript puro sin frameworks. Después de npm run dev, Vite muestra la URL del servidor local.',
    },
    quiz: [
      {
        question: '¿Qué es Vite principalmente?',
        options: [
          'Un lenguaje de programación nuevo',
          'Una herramienta de desarrollo rápida para proyectos frontend',
          'Un gestor de paquetes alternativo a npm',
          'Una base de datos para JavaScript',
        ],
        correctAnswer: 'Una herramienta de desarrollo rápida para proyectos frontend',
        correctFeedback: 'Correcto. Vite es una herramienta de desarrollo que proporciona un servidor local rápido y un sistema de construcción optimizado para proyectos frontend.',
        incorrectFeedback: 'Vite no es un lenguaje, no gestiona paquetes (eso es npm) y no es una base de datos. Es una herramienta de desarrollo que acelera el flujo de trabajo frontend.',
      },
      {
        question: '¿Qué ventaja principal tiene Vite sobre herramientas anteriores como Webpack?',
        options: [
          'Escribe el código JavaScript automáticamente',
          'Arranca el servidor de desarrollo en menos de un segundo',
          'No requiere Node.js para funcionar',
          'Genera código más pequeño que cualquier otra herramienta',
        ],
        correctAnswer: 'Arranca el servidor de desarrollo en menos de un segundo',
        correctFeedback: 'Correcto. Vite es extremadamente rápido al iniciar porque solo procesa lo que el navegador necesita en cada momento, en lugar de procesar todo el proyecto primero.',
        incorrectFeedback: 'Vite no escribe código ni elimina la necesidad de Node.js. Su ventaja principal es la velocidad de arranque: mientras Webpack puede tardar minutos, Vite inicia en menos de un segundo.',
      },
      {
        question: '¿Qué comando arranca el servidor de desarrollo de Vite?',
        options: [
          'npm start vite',
          'vite start',
          'npm run dev',
          'node vite.js',
        ],
        correctAnswer: 'npm run dev',
        correctFeedback: 'Correcto. En proyectos Vite, el script "dev" ejecuta Vite y lo encuentras en npm run dev. El servidor local aparece en http://localhost:5173.',
        incorrectFeedback: 'El comando estándar para iniciar Vite es npm run dev, definido en el script "dev" de package.json. npm start vite, vite start y node vite.js no son los comandos correctos.',
      },
      {
        question: '¿Qué hace el comando npm run build en un proyecto Vite?',
        options: [
          'Instala más paquetes',
          'Genera archivos optimizados para producción en la carpeta dist/',
          'Inicia el servidor de desarrollo',
          'Actualiza Vite a la versión más reciente',
        ],
        correctAnswer: 'Genera archivos optimizados para producción en la carpeta dist/',
        correctFeedback: 'Correcto. npm run build crea los archivos finales optimizados (HTML, CSS, JS minificado) en la carpeta dist/, listos para publicar en un servidor.',
        incorrectFeedback: 'npm run build genera los archivos de producción en dist/. No instala paquetes, no es el servidor de desarrollo y no actualiza Vite. Es el paso final antes de publicar la app.',
      },
      {
        question: '¿Para qué sirve el atributo type="module" en el script de index.html?',
        options: [
          'Para cargar el script más lento y evitar errores',
          'Para indicar que el archivo es un módulo y permite usar import/export',
          'Para conectarse a una base de datos',
          'Para indicar que el script es de TypeScript',
        ],
        correctAnswer: 'Para indicar que el archivo es un módulo y permite usar import/export',
        correctFeedback: 'Correcto. type="module" activa el sistema de módulos ES en el navegador, lo que habilita import/export entre archivos JavaScript.',
        incorrectFeedback: 'type="module" no ralentiza la carga ni conecta bases de datos. Activa el sistema de módulos ES del navegador, permitiendo usar import y export entre archivos JavaScript.',
      },
    ],
  },
  {
    slug: 'crear-proyecto-vite',
    title: 'Crear un proyecto con Vite',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 208,
    description: 'Aprende a crear un proyecto JavaScript usando Vite paso a paso.',
    explanation: `Crear un proyecto con Vite es rápido y el resultado es un entorno de desarrollo profesional listo para usar.

**Comando para crear un proyecto:**
\`\`\`
npm create vite@latest nombre-del-proyecto -- --template vanilla
\`\`\`

- \`vite@latest\`: usa la versión más reciente de Vite
- \`nombre-del-proyecto\`: nombre de tu carpeta
- \`--template vanilla\`: JavaScript puro (sin React, sin Vue)

**Pasos completos:**
\`\`\`
1. npm create vite@latest task-app -- --template vanilla
2. cd task-app
3. npm install
4. npm run dev
\`\`\`

**¿Por qué necesito npm install después?**
El comando \`create vite\` solo crea los archivos. Los paquetes (incluyendo Vite mismo) no están instalados todavía. \`npm install\` los descarga.

**Otros templates disponibles:**
\`\`\`
--template vanilla        → JavaScript puro
--template vanilla-ts     → TypeScript puro
--template react          → React con JavaScript
--template vue            → Vue con JavaScript
\`\`\`

**¿Qué versión de Vite se instala?**
El package.json del proyecto creado tendrá algo como:
\`\`\`json
"devDependencies": {
  "vite": "^5.2.0"
}
\`\`\``,
    codeExample: `// Pasos completos en la terminal:

// 1. Crear el proyecto
// npm create vite@latest task-app -- --template vanilla

// 2. Entrar a la carpeta
// cd task-app

// 3. Instalar dependencias
// npm install

// 4. Iniciar el servidor de desarrollo
// npm run dev

// Salida esperada en la terminal:
// VITE v5.x.x  ready in 300 ms
//   ➜  Local:   http://localhost:5173/
//   ➜  Network: http://192.168.x.x:5173/

// package.json creado por Vite:
{
  "name": "task-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.2.0"
  }
}

// "type": "module" es clave:
// permite usar import/export en los archivos .js`,
    keyPoints: [
      'npm create vite@latest nombre -- --template vanilla crea el proyecto',
      'Después de crear, siempre ejecuta npm install',
      'npm run dev inicia el servidor en http://localhost:5173',
      'El template vanilla es JavaScript puro sin frameworks',
      'package.json incluye "type": "module" para habilitar import/export',
      'Vite se instala como devDependency, no globalmente',
    ],
    exercise: {
      description: 'Crea un proyecto Vite llamado "notes-app" usando el template vanilla. Sigue los 4 pasos: npm create, cd, npm install, npm run dev. Verifica que el servidor abre en el navegador y muestra la página por defecto de Vite.',
      hint: 'Si ya tienes un proyecto Vite creado anteriormente, puedes hacer los pasos nuevamente para practicar. Cada npm create vite genera una estructura limpia.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando completo para crear un proyecto Vite con JavaScript puro?',
        options: [
          'npm install vite --template vanilla',
          'npm create vite@latest mi-app -- --template vanilla',
          'vite create mi-app',
          'npm init vite mi-app',
        ],
        correctAnswer: 'npm create vite@latest mi-app -- --template vanilla',
        correctFeedback: 'Correcto. npm create vite@latest nombre -- --template vanilla es el comando oficial para crear un proyecto Vite con JavaScript puro.',
        incorrectFeedback: 'El comando correcto es npm create vite@latest mi-app -- --template vanilla. vite create no existe, npm install vite no crea proyectos y npm init vite tampoco.',
      },
      {
        question: '¿Por qué debes ejecutar npm install después de crear el proyecto con Vite?',
        options: [
          'Para crear el archivo index.html',
          'Porque create vite solo crea los archivos, los paquetes aún no están instalados',
          'Para conectar el proyecto a internet',
          'No es necesario, Vite ya viene instalado',
        ],
        correctAnswer: 'Porque create vite solo crea los archivos, los paquetes aún no están instalados',
        correctFeedback: 'Correcto. npm create vite genera los archivos del proyecto (package.json, index.html, main.js), pero no descarga los paquetes. npm install los instala.',
        incorrectFeedback: 'create vite solo genera los archivos de configuración. Los paquetes (incluyendo Vite mismo) están listados en package.json pero no descargados. npm install los descarga e instala.',
      },
      {
        question: '¿En qué URL abre el servidor de desarrollo de Vite por defecto?',
        options: [
          'http://localhost:3000',
          'http://localhost:5173',
          'http://localhost:8080',
          'http://localhost:4200',
        ],
        correctAnswer: 'http://localhost:5173',
        correctFeedback: 'Correcto. Vite usa el puerto 5173 por defecto. Si ese puerto está ocupado, Vite usa automáticamente el siguiente disponible.',
        incorrectFeedback: 'Vite usa el puerto 5173 por defecto (http://localhost:5173). El puerto 3000 es común en React con CRA, 8080 en algunos otros bundlers, y 4200 en Angular.',
      },
      {
        question: '¿Qué significa "type": "module" en package.json generado por Vite?',
        options: [
          'Que el proyecto solo puede usar módulos de pago',
          'Que todos los archivos .js del proyecto pueden usar import/export',
          'Que el proyecto usa TypeScript obligatoriamente',
          'Que solo un archivo puede importar módulos',
        ],
        correctAnswer: 'Que todos los archivos .js del proyecto pueden usar import/export',
        correctFeedback: 'Correcto. "type": "module" activa el sistema de módulos ES en todo el proyecto, permitiendo import/export en cualquier archivo .js.',
        incorrectFeedback: '"type": "module" no tiene nada que ver con pago ni TypeScript. Activa el sistema de módulos ES6 para todos los archivos .js, habilitando import y export.',
      },
      {
        question: '¿Cuál es el orden correcto de pasos para iniciar un proyecto Vite?',
        options: [
          'npm run dev → npm install → npm create vite',
          'npm create vite → npm run dev → npm install',
          'npm create vite → npm install → npm run dev',
          'npm install → npm create vite → npm run dev',
        ],
        correctAnswer: 'npm create vite → npm install → npm run dev',
        correctFeedback: 'Correcto. Primero creas el proyecto, luego instalas los paquetes, y finalmente inicias el servidor de desarrollo. El orden importa.',
        incorrectFeedback: 'El orden correcto es: 1) npm create vite (crea los archivos), 2) npm install (descarga los paquetes), 3) npm run dev (inicia el servidor). Sin npm install primero, npm run dev fallará.',
      },
    ],
  },
  {
    slug: 'estructura-proyecto-vite',
    title: 'Estructura básica de un proyecto Vite',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 209,
    description: 'Aprende para qué sirven archivos como index.html, main.js, package.json y la carpeta src.',
    explanation: `Entender la estructura de un proyecto Vite te ayuda a saber dónde colocar cada tipo de archivo.

**Estructura generada por Vite (vanilla):**
\`\`\`
mi-app/
├── index.html          ← punto de entrada para el navegador
├── main.js             ← JavaScript principal
├── style.css           ← estilos globales
├── package.json        ← configuración del proyecto
├── package-lock.json   ← versiones exactas de paquetes
├── public/             ← archivos estáticos sin transformar
│   └── vite.svg        ← icono del ejemplo
└── node_modules/       ← paquetes instalados (no tocar)
\`\`\`

**¿Para qué sirve cada archivo?**

**index.html:** Es la página HTML que el navegador carga primero. Contiene el \`<div id="app">\` donde tu JavaScript inserta el contenido.

**main.js:** El archivo JavaScript de entrada. Desde aquí importas otros módulos y arranca tu aplicación.

**style.css:** Estilos globales de la aplicación.

**public/:** Archivos que se sirven tal cual, sin que Vite los procese (favicon, imágenes que referencias en HTML).

**¿Debo usar src/?**
Vite no crea src/ por defecto en el template vanilla, pero es buena práctica organizarlo así:
\`\`\`
mi-app/
├── index.html
├── src/
│   ├── main.js
│   ├── style.css
│   ├── utils/
│   └── components/
└── package.json
\`\`\``,
    codeExample: `// index.html: punto de entrada del proyecto
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Task App</title>
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>

// src/main.js: punto de entrada de JavaScript
import { renderApp } from './app.js'
import './style.css'

renderApp(document.querySelector('#app'))

// src/app.js: lógica principal
export function renderApp(container) {
  container.innerHTML = '<h1>Mis Tareas</h1>'
  // resto de la lógica...
}

// public/: solo para archivos estáticos
// - favicon.ico
// - logo.png
// - robots.txt
// Estos se copian sin cambios en el build`,
    keyPoints: [
      'index.html es el punto de entrada que carga el navegador',
      'main.js es el archivo JavaScript raíz de la aplicación',
      'public/ contiene archivos estáticos sin procesar (favicon, imágenes)',
      'node_modules/ es gestionado por npm, nunca lo edites manualmente',
      'Organizar el código en src/ es buena práctica aunque Vite no lo exige',
      'package.json y package-lock.json van siempre en la raíz',
    ],
    exercise: {
      description: 'En tu proyecto Vite, crea la carpeta src/ y mueve main.js y style.css dentro de ella. Actualiza la referencia en index.html de /main.js a /src/main.js. Verifica que npm run dev sigue funcionando correctamente.',
      hint: 'Cuando muevas main.js a src/, debes actualizar el atributo src del script en index.html: <script type="module" src="/src/main.js"></script>',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito de index.html en un proyecto Vite?',
        options: [
          'Definir la lógica JavaScript de la aplicación',
          'Ser el punto de entrada que el navegador carga primero',
          'Almacenar la configuración de Vite',
          'Listar los paquetes instalados',
        ],
        correctAnswer: 'Ser el punto de entrada que el navegador carga primero',
        correctFeedback: 'Correcto. index.html es el archivo HTML inicial. El navegador lo carga y desde allí carga el script JavaScript y los estilos.',
        incorrectFeedback: 'index.html es el archivo HTML principal que el navegador carga primero. La lógica JavaScript va en main.js, la configuración de Vite en vite.config.js y los paquetes en package.json.',
      },
      {
        question: '¿Qué tipo de archivos debes colocar en la carpeta public/?',
        options: [
          'Archivos JavaScript con funciones auxiliares',
          'Archivos estáticos que Vite no debe procesar (favicon, imágenes)',
          'Archivos de configuración de npm',
          'Los tests del proyecto',
        ],
        correctAnswer: 'Archivos estáticos que Vite no debe procesar (favicon, imágenes)',
        correctFeedback: 'Correcto. public/ es para archivos que se sirven exactamente como están, sin que Vite los transforme: favicon.ico, imágenes referenciadas en HTML, robots.txt.',
        incorrectFeedback: 'public/ es para archivos estáticos como favicon.ico, imágenes y archivos de texto que no necesitan procesamiento. Los JS van en src/, la config de npm en package.json y los tests en su propia carpeta.',
      },
      {
        question: '¿Por qué nunca debes editar la carpeta node_modules/ manualmente?',
        options: [
          'Porque está protegida con contraseña',
          'Porque npm la gestiona y cualquier cambio manual se pierde al reinstalar',
          'Porque es solo de lectura en todos los sistemas operativos',
          'Porque contiene archivos del sistema operativo',
        ],
        correctAnswer: 'Porque npm la gestiona y cualquier cambio manual se pierde al reinstalar',
        correctFeedback: 'Correcto. node_modules es completamente gestionada por npm. Si haces cambios manuales, se perderán la próxima vez que alguien ejecute npm install.',
        incorrectFeedback: 'node_modules no está protegida con contraseña ni es solo de lectura. El problema es que npm la sobrescribe. Cualquier cambio manual desaparece al ejecutar npm install.',
      },
      {
        question: '¿Qué archivo deberías actualizar si mueves main.js de la raíz a la carpeta src/?',
        options: [
          'package.json',
          'index.html (la referencia al script)',
          'package-lock.json',
          'No hay que actualizar nada',
        ],
        correctAnswer: 'index.html (la referencia al script)',
        correctFeedback: 'Correcto. index.html tiene una etiqueta <script src="/main.js">. Si mueves main.js a src/, debes cambiarlo a <script src="/src/main.js">.',
        incorrectFeedback: 'index.html referencia la ruta del archivo JavaScript. Si mueves main.js, debes actualizar esa ruta en index.html de /main.js a /src/main.js.',
      },
      {
        question: '¿Qué pasa si borras package-lock.json accidentalmente?',
        options: [
          'El proyecto deja de funcionar permanentemente',
          'npm lo regenera la próxima vez que ejecutas npm install',
          'Todos los paquetes se desinstalan también',
          'Vite no puede arrancar sin ese archivo',
        ],
        correctAnswer: 'npm lo regenera la próxima vez que ejecutas npm install',
        correctFeedback: 'Correcto. package-lock.json se regenera automáticamente con npm install. Sin él, npm instala la versión compatible más reciente de cada paquete.',
        incorrectFeedback: 'package-lock.json es regenerable. Si lo borras, npm lo recrea al ejecutar npm install. La diferencia es que puede instalar versiones ligeramente distintas a las anteriores.',
      },
    ],
  },
  {
    slug: 'separar-javascript-archivos',
    title: 'Separar JavaScript en archivos',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 210,
    description: 'Aprende a organizar tu código en varios archivos para evitar scripts gigantes difíciles de mantener.',
    explanation: `Un archivo JavaScript con 1000 líneas es difícil de leer, depurar y mantener. La solución es separar el código en archivos con una responsabilidad clara.

**Principio de responsabilidad única:**
Cada archivo debe tener una función principal bien definida.

**Ejemplo de mala organización (todo en main.js):**
\`\`\`
main.js → 800 líneas con renderizado, lógica, llamadas a API, storage...
\`\`\`

**Ejemplo de buena organización:**
\`\`\`
src/
├── main.js          ← solo inicia la app
├── app.js           ← renderizado principal
├── utils/
│   ├── storage.js   ← todo lo relacionado con localStorage
│   └── dates.js     ← funciones de fechas
└── api/
    └── tasks.js     ← llamadas a la API de tareas
\`\`\`

**Beneficios de separar archivos:**
- Más fácil de leer y entender
- Más fácil de encontrar y corregir errores
- Puedes reutilizar funciones en diferentes partes
- Varios desarrolladores pueden trabajar en paralelo

**Reglas prácticas:**
- Si un archivo supera 150-200 líneas, considera dividirlo
- Agrupa archivos por tema o funcionalidad
- Usa nombres de archivo descriptivos (storage.js, api.js, ui.js)`,
    codeExample: `// Mala práctica: todo en un archivo
// main.js (500 líneas mezcladas)
let tareas = JSON.parse(localStorage.getItem('tareas')) || []
function guardarTareas() { localStorage.setItem('tareas', JSON.stringify(tareas)) }
function agregarTarea(texto) { /* ... */ }
function renderizar() { /* ... */ }
// ... 450 líneas más

// Buena práctica: archivos separados

// src/storage.js → solo gestión de localStorage
const CLAVE = 'tareas'
export function cargarTareas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || []
  } catch {
    return []
  }
}
export function guardarTareas(tareas) {
  localStorage.setItem(CLAVE, JSON.stringify(tareas))
}

// src/ui.js → solo funciones de renderizado
export function renderizarTareas(tareas, container) {
  container.innerHTML = tareas
    .map(t => \`<li>\${t.texto}</li>\`)
    .join('')
}

// src/main.js → solo orquesta los módulos
import { cargarTareas, guardarTareas } from './storage.js'
import { renderizarTareas } from './ui.js'

let tareas = cargarTareas()
const lista = document.querySelector('#lista')
renderizarTareas(tareas, lista)`,
    keyPoints: [
      'Separar el código en archivos con una responsabilidad clara',
      'Archivos de más de 150-200 líneas suelen necesitar dividirse',
      'Usar nombres descriptivos: storage.js, api.js, ui.js',
      'Agrupar archivos relacionados en carpetas (utils/, api/)',
      'Cada archivo importa solo lo que necesita',
      'La separación facilita el debugging y el trabajo en equipo',
    ],
    exercise: {
      description: 'Toma un archivo main.js que tenga mezcladas funciones de localStorage, renderizado y lógica. Sepáralo en tres archivos: storage.js (localStorage), ui.js (renderizado), y main.js (que importa de los otros dos). Verifica que todo sigue funcionando.',
      hint: 'Empieza identificando grupos de funciones relacionadas. Las que usan localStorage van juntas, las que manipulan el DOM van juntas. Luego muévelas y exporta/importa según necesites.',
    },
    quiz: [
      {
        question: '¿Cuál es el beneficio principal de separar el código en múltiples archivos?',
        options: [
          'El código se ejecuta más rápido',
          'Es más fácil de leer, mantener y encontrar errores',
          'Usa menos memoria RAM',
          'Evita la necesidad de comentarios',
        ],
        correctAnswer: 'Es más fácil de leer, mantener y encontrar errores',
        correctFeedback: 'Correcto. Separar el código en archivos pequeños con una responsabilidad clara hace que sea mucho más fácil entenderlo, debugear y modificarlo sin afectar otras partes.',
        incorrectFeedback: 'La separación de archivos no hace el código más rápido ni usa menos RAM. El beneficio principal es organizacional: código más fácil de leer, mantener y encontrar errores.',
      },
      {
        question: '¿Qué responsabilidad debería tener un archivo llamado storage.js?',
        options: [
          'Almacenar imágenes del proyecto',
          'Todo lo relacionado con guardar y leer datos en localStorage',
          'La configuración de Vite',
          'Los estilos CSS del proyecto',
        ],
        correctAnswer: 'Todo lo relacionado con guardar y leer datos en localStorage',
        correctFeedback: 'Correcto. storage.js debería contener solo las funciones que gestionan la persistencia de datos: guardar, cargar, borrar de localStorage.',
        incorrectFeedback: 'Un archivo storage.js debería contener toda la lógica de persistencia de datos: funciones para guardar y leer de localStorage (o sessionStorage). Las imágenes van en public/, la config en vite.config.js.',
      },
      {
        question: '¿Cuándo es buen momento para dividir un archivo JavaScript en varios?',
        options: [
          'Nunca, un solo archivo es siempre mejor',
          'Cuando el archivo supera 150-200 líneas o mezcla responsabilidades distintas',
          'Solo cuando el equipo tiene más de 10 personas',
          'Solo cuando hay errores de rendimiento',
        ],
        correctAnswer: 'Cuando el archivo supera 150-200 líneas o mezcla responsabilidades distintas',
        correctFeedback: 'Correcto. Un archivo que crece demasiado o mezcla lógica de localStorage, renderizado y API es señal de que necesita dividirse en archivos más pequeños.',
        incorrectFeedback: 'La división de archivos no depende del tamaño del equipo ni del rendimiento. La señal es cuando un archivo crece demasiado (150-200+ líneas) o mezcla responsabilidades distintas.',
      },
      {
        question: '¿Cuál es una buena forma de organizar los archivos en un proyecto mediano?',
        options: [
          'Todo en main.js para simplificar',
          'Agrupar archivos por tema en carpetas: utils/, api/, components/',
          'Un archivo por cada función que tengas',
          'Todos los archivos en la carpeta public/',
        ],
        correctAnswer: 'Agrupar archivos por tema en carpetas: utils/, api/, components/',
        correctFeedback: 'Correcto. Organizar por carpetas temáticas (utils/, api/, components/) hace que sea fácil encontrar dónde está cada tipo de código.',
        incorrectFeedback: 'Todo en main.js es mala práctica. Un archivo por función es excesivo. public/ es solo para archivos estáticos. La buena práctica es agrupar en carpetas temáticas: utils/, api/, etc.',
      },
    ],
  },
  {
    slug: 'importar-exportar-proyecto-real',
    title: 'Importar y exportar en un proyecto real',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 211,
    description: 'Aprende a usar import y export dentro de un proyecto Vite para conectar múltiples archivos.',
    explanation: `En un proyecto Vite, \`import\` y \`export\` son la forma de conectar código entre archivos.

**Tipos de export:**

**Named export:** exportas cosas con nombre
\`\`\`javascript
export function sumar(a, b) { return a + b }
export const PI = 3.14159
\`\`\`

**Default export:** exportas una cosa principal por archivo
\`\`\`javascript
export default function App() { /* ... */ }
\`\`\`

**Named import:**
\`\`\`javascript
import { sumar, PI } from './utils/math.js'
\`\`\`

**Default import:**
\`\`\`javascript
import App from './App.js'
\`\`\`

**Reglas importantes:**
- Los imports van al principio del archivo
- Las rutas son relativas: \`./archivo.js\`, \`../utils/archivo.js\`
- La extensión \`.js\` es opcional en Vite pero recomendada
- Solo puedes tener un default export por archivo
- Puedes tener múltiples named exports

**Error común:**
\`\`\`javascript
// ❌ Exportar sin declaración
export sumar  // Error

// ✅ Correcto
export function sumar(a, b) { return a + b }
// o
function sumar(a, b) { return a + b }
export { sumar }
\`\`\``,
    codeExample: `// utils/storage.js → named exports
export function guardar(clave, datos) {
  localStorage.setItem(clave, JSON.stringify(datos))
}

export function cargar(clave, porDefecto = null) {
  try {
    const datos = localStorage.getItem(clave)
    return datos ? JSON.parse(datos) : porDefecto
  } catch {
    return porDefecto
  }
}

export const CLAVE_TAREAS = 'app:tareas'

// utils/ui.js → named export
export function mostrarMensaje(texto, tipo = 'info') {
  const el = document.querySelector('#mensaje')
  el.textContent = texto
  el.className = \`mensaje mensaje--\${tipo}\`
}

// app.js → default export
export default class TaskApp {
  constructor() {
    this.tareas = []
  }
  init() { /* ... */ }
}

// main.js → usando todos los módulos
import TaskApp from './app.js'
import { guardar, cargar, CLAVE_TAREAS } from './utils/storage.js'
import { mostrarMensaje } from './utils/ui.js'

const app = new TaskApp()
const tareas = cargar(CLAVE_TAREAS, [])
app.tareas = tareas
app.init()`,
    keyPoints: [
      'Named exports: múltiples por archivo, import con llaves {}',
      'Default export: uno por archivo, import sin llaves',
      'Las rutas en import son relativas al archivo actual',
      'Los imports siempre van al principio del archivo',
      'Vite permite omitir .js en los imports pero es buena práctica incluirlo',
      'Solo puedes re-exportar lo que fue exportado en el archivo fuente',
    ],
    exercise: {
      description: 'Crea un archivo utils/math.js que exporte con nombre las funciones sumar, restar y multiplicar. Crea también un default export con una función calcular. Desde main.js, importa todo y llama a cada función con valores de prueba.',
      hint: 'Para la función calcular como default, puedes usar: export default function calcular(a, operacion, b) { ... }. En main.js usa import calcular, { sumar, restar, multiplicar } from "./utils/math.js".',
    },
    quiz: [
      {
        question: '¿Cómo importas una función llamada "formatearFecha" que fue exportada como named export?',
        options: [
          'import formatearFecha from "./utils.js"',
          'import { formatearFecha } from "./utils.js"',
          'import all formatearFecha from "./utils.js"',
          'require("./utils.js").formatearFecha',
        ],
        correctAnswer: 'import { formatearFecha } from "./utils.js"',
        correctFeedback: 'Correcto. Los named exports se importan con llaves {}. La sintaxis es import { nombre } from "ruta".',
        incorrectFeedback: 'Los named exports se importan con llaves {}: import { formatearFecha } from "./utils.js". Sin llaves sería para default exports. require() es la sintaxis antigua de CommonJS.',
      },
      {
        question: '¿Cuántos default exports puede tener un archivo JavaScript?',
        options: [
          'Ilimitados',
          'Exactamente uno',
          'Máximo cinco',
          'Depende del tamaño del archivo',
        ],
        correctAnswer: 'Exactamente uno',
        correctFeedback: 'Correcto. Solo puede haber un default export por archivo. Para exportar múltiples cosas, usa named exports.',
        incorrectFeedback: 'Un archivo puede tener exactamente un default export. Si necesitas exportar múltiples cosas, usa named exports para las adicionales.',
      },
      {
        question: '¿Qué ruta usas para importar un archivo en la misma carpeta llamado "storage.js"?',
        options: [
          'import algo from "storage.js"',
          'import algo from "./storage.js"',
          'import algo from "/storage.js"',
          'import algo from "src/storage.js"',
        ],
        correctAnswer: 'import algo from "./storage.js"',
        correctFeedback: 'Correcto. El ./ significa "en la misma carpeta". Las rutas relativas en import siempre empiezan con ./ o ../.',
        incorrectFeedback: 'Para importar de la misma carpeta, usa ./: import algo from "./storage.js". Sin ./ el módulo buscará en node_modules. El / inicial busca desde la raíz del sistema de archivos.',
      },
      {
        question: '¿Cuál es el error en este código? import { calcular } from "./math.js" — si calcular fue exportado como default.',
        options: [
          'No hay ningún error',
          'Las llaves {} son incorrectas para un default export',
          'La ruta ./math.js no es válida',
          'import debe ir al final del archivo',
        ],
        correctAnswer: 'Las llaves {} son incorrectas para un default export',
        correctFeedback: 'Correcto. Los default exports se importan sin llaves: import calcular from "./math.js". Con llaves {} se importan named exports.',
        incorrectFeedback: 'Las llaves {} son para named exports, no para default exports. Si calcular fue exportado con "export default", debes importarlo sin llaves: import calcular from "./math.js".',
      },
      {
        question: '¿Qué problema tiene esta importación? import { add } from "mi-modulo"',
        options: [
          'Ninguno, es completamente válida',
          'Buscará "mi-modulo" en node_modules, no en los archivos del proyecto',
          'Los nombres en inglés no son válidos en imports',
          'Solo se puede importar desde rutas absolutas',
        ],
        correctAnswer: 'Buscará "mi-modulo" en node_modules, no en los archivos del proyecto',
        correctFeedback: 'Correcto. Sin ./ o ../ al inicio, JavaScript busca el módulo en node_modules. Para importar archivos propios, siempre usa rutas relativas: "./mi-modulo.js".',
        incorrectFeedback: 'Sin ./ al inicio, el import busca en node_modules (paquetes instalados). Para tus propios archivos, usa rutas relativas: import { add } from "./mi-modulo.js".',
      },
    ],
  },
  {
    slug: 'variables-entorno-basicas',
    title: 'Variables de entorno básicas',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 212,
    description: 'Aprende qué son las variables de entorno y cómo se usan de forma básica en proyectos frontend.',
    explanation: `Las **variables de entorno** son valores de configuración que se definen fuera del código principal. Permiten cambiar comportamientos sin modificar el código.

**¿Para qué sirven?**
- Guardar la URL base de una API (diferente en desarrollo y producción)
- Guardar claves de configuración no sensibles
- Activar o desactivar funcionalidades según el entorno

**¿Cómo se usan en Vite?**
Crea un archivo \`.env\` en la raíz del proyecto:
\`\`\`
VITE_API_URL=https://api.ejemplo.com
VITE_APP_TITLE=Mi Task App
\`\`\`

**Reglas en Vite:**
- **Solo las variables que empiecen con \`VITE_\` son accesibles en el frontend**
- Se acceden con \`import.meta.env.VITE_NOMBRE\`
- El archivo \`.env\` **no debe commitearse a GitHub si contiene información sensible**

**⚠️ Advertencia crítica de seguridad:**
Las variables de entorno en proyectos Vite/frontend son **visibles para el usuario**. El código frontend se descarga al navegador. Nunca pongas API keys secretas o contraseñas en variables de entorno del frontend.

**Tipos de archivos .env:**
\`\`\`
.env              → para todos los entornos
.env.development  → solo en npm run dev
.env.production   → solo en npm run build
\`\`\`

**Agregar .env a .gitignore:**
\`\`\`
# .gitignore
.env
.env.local
\`\`\``,
    codeExample: `// .env (en la raíz del proyecto)
VITE_API_URL=https://jsonplaceholder.typicode.com
VITE_APP_TITLE=Task Manager
VITE_MAX_TAREAS=50

// Acceder en JavaScript:
console.log(import.meta.env.VITE_API_URL)
// "https://jsonplaceholder.typicode.com"

console.log(import.meta.env.VITE_APP_TITLE)
// "Task Manager"

// Uso práctico: URL de API configurable
const API_BASE = import.meta.env.VITE_API_URL

async function obtenerTareas() {
  const res = await fetch(\`\${API_BASE}/todos?_limit=10\`)
  return res.json()
}

// .env.development → URL de API de pruebas
// VITE_API_URL=https://jsonplaceholder.typicode.com

// .env.production → URL de API real
// VITE_API_URL=https://api.mi-app.com

// ⚠️ Nunca hagas esto en el frontend:
// VITE_SECRET_API_KEY=sk-123abc  ← visible para todos los usuarios
// VITE_DATABASE_PASSWORD=123456  ← peligroso

// .gitignore
// .env
// .env.local`,
    keyPoints: [
      'Las variables de entorno se definen en archivos .env',
      'En Vite, solo las que empiezan con VITE_ son accesibles en el frontend',
      'Se acceden con import.meta.env.VITE_NOMBRE_VARIABLE',
      'Las variables de entorno del frontend son visibles para los usuarios',
      'Nunca pongas API keys secretas o contraseñas en variables del frontend',
      'Agrega .env a .gitignore para no subirlo accidentalmente a GitHub',
    ],
    exercise: {
      description: 'Crea un archivo .env en tu proyecto Vite con VITE_APP_TITLE=Mi App de Tareas. Accede a ese valor desde main.js y muéstralo en el título de la página con document.title = import.meta.env.VITE_APP_TITLE. Crea también un .gitignore que ignore el archivo .env.',
      hint: 'Después de crear o modificar el .env, reinicia npm run dev para que Vite cargue los nuevos valores. Las variables de entorno se leen al iniciar el servidor.',
    },
    quiz: [
      {
        question: '¿Qué prefix deben tener las variables de entorno para ser accesibles en el código frontend de Vite?',
        options: [
          'ENV_',
          'VITE_',
          'PUBLIC_',
          'JS_',
        ],
        correctAnswer: 'VITE_',
        correctFeedback: 'Correcto. Solo las variables que empiezan con VITE_ son expuestas al código frontend en Vite. Las demás quedan ocultas para mayor seguridad.',
        incorrectFeedback: 'En Vite, solo las variables con prefijo VITE_ son accesibles en el código JavaScript del navegador. Las otras variables del .env no se exponen por seguridad.',
      },
      {
        question: '¿Cómo se accede a VITE_API_URL en el código JavaScript de Vite?',
        options: [
          'process.env.VITE_API_URL',
          'import.meta.env.VITE_API_URL',
          'window.env.VITE_API_URL',
          'env.VITE_API_URL',
        ],
        correctAnswer: 'import.meta.env.VITE_API_URL',
        correctFeedback: 'Correcto. Vite expone las variables de entorno a través de import.meta.env. En Node.js se usaría process.env, pero en Vite es import.meta.env.',
        incorrectFeedback: 'En Vite se usa import.meta.env.NOMBRE. process.env es de Node.js puro, window.env no existe por defecto, y env.NOMBRE tampoco es válido.',
      },
      {
        question: '¿Por qué NO debes poner una API key secreta en las variables de entorno del frontend?',
        options: [
          'Porque las variables de entorno del frontend no soportan claves largas',
          'Porque el código frontend se descarga al navegador y los usuarios pueden verla',
          'Porque npm no permite guardar claves en .env',
          'Porque las API keys deben estar en package.json',
        ],
        correctAnswer: 'Porque el código frontend se descarga al navegador y los usuarios pueden verla',
        correctFeedback: 'Correcto. Todo el código frontend (incluyendo variables de entorno con VITE_) es visible en el navegador usando las DevTools. Una API key secreta ahí estaría expuesta a todos.',
        incorrectFeedback: 'El frontend se ejecuta en el navegador del usuario. Cualquier valor en el código JavaScript, incluyendo variables de entorno VITE_, puede verlo el usuario con las DevTools. Las claves secretas deben vivir en el backend.',
      },
      {
        question: '¿Por qué debes agregar .env a .gitignore?',
        options: [
          'Para que Vite lo procese correctamente',
          'Para evitar subir accidentalmente claves o configuración sensible a GitHub',
          'Porque .env ralentiza npm install',
          'Porque Git no puede leer archivos que empiezan con punto',
        ],
        correctAnswer: 'Para evitar subir accidentalmente claves o configuración sensible a GitHub',
        correctFeedback: 'Correcto. Aunque en el frontend las variables .env no sean "secretas" para los usuarios, sí pueden contener configuración específica del entorno que no debe compartirse en el repositorio.',
        incorrectFeedback: '.gitignore evita que Git suba ciertos archivos. .env debe estar en .gitignore porque puede contener claves de APIs o configuración que no debería estar en el historial de Git del repositorio.',
      },
      {
        question: '¿Qué archivo de entorno usa Vite cuando ejecutas npm run build?',
        options: [
          '.env.development',
          '.env.production',
          '.env.test',
          'Siempre usa .env sin importar el comando',
        ],
        correctAnswer: '.env.production',
        correctFeedback: 'Correcto. Vite usa .env.production cuando ejecutas npm run build (modo producción). Para npm run dev usa .env.development. El .env base aplica en ambos.',
        incorrectFeedback: 'Vite selecciona el archivo .env según el modo: .env.development para npm run dev y .env.production para npm run build. El .env base aplica en todos los modos.',
      },
    ],
  },
  {
    slug: 'servidor-local-vite',
    title: 'Ejecutar servidor local con Vite',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 213,
    description: 'Aprende a ejecutar el servidor de desarrollo y probar tu proyecto localmente.',
    explanation: `El **servidor de desarrollo** de Vite te permite ver tu proyecto en el navegador mientras lo desarrollas, con recarga automática cada vez que guardas un cambio.

**Iniciar el servidor:**
\`\`\`
npm run dev
\`\`\`

**Lo que verás en la terminal:**
\`\`\`
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
\`\`\`

**¿Qué hace el servidor de desarrollo?**
- Sirve tus archivos en \`localhost:5173\`
- Recarga el navegador automáticamente al guardar (Hot Module Replacement)
- Muestra errores de JavaScript en la terminal y el navegador
- Procesa los \`import\` entre archivos en tiempo real

**Detener el servidor:**
Presiona \`Ctrl + C\` en la terminal donde está corriendo.

**Si el puerto 5173 está ocupado:**
Vite automáticamente intenta el siguiente puerto disponible (5174, 5175...).

**¿Puedo ver el proyecto en otro dispositivo?**
Sí, usando la URL de Network (no localhost): \`http://192.168.x.x:5173\`

**Diferencia entre servidor de desarrollo y producción:**
| Servidor de desarrollo | Producción (build) |
|------------------------|-------------------|
| npm run dev | npm run build |
| Código sin optimizar | Código minificado |
| Recarga automática | Sin servidor de desarrollo |
| Solo en tu máquina | Se sube al hosting |`,
    codeExample: `// Terminal: iniciar el servidor de desarrollo
// npm run dev

// Salida esperada:
//   VITE v5.2.11  ready in 187 ms
//   ➜  Local:   http://localhost:5173/
//   ➜  Network: http://192.168.1.100:5173/
//   ➜  press h + enter to show help

// El servidor sirve automáticamente cualquier cambio que hagas.
// Cuando guardas un archivo, el navegador se actualiza solo.

// Errores comunes durante el servidor de desarrollo:

// Error 1: Puerto en uso
// Error: listen EADDRINUSE: address already in use :::5173
// Solución: Vite intentará 5174, 5175... automáticamente
// O detén el proceso que usa ese puerto

// Error 2: Cannot find module
// [vite] Internal server error: Failed to resolve import "./storage"
// Solución: verifica la ruta y que el archivo exista

// Error 3: SyntaxError en tu código
// [vite] Error: Transform failed
// Solución: revisa el error que indica la línea exacta

// Consejo: mantén la terminal visible mientras desarrollas
// Los errores de JavaScript aparecen allí primero`,
    keyPoints: [
      'npm run dev inicia el servidor de desarrollo de Vite',
      'El servidor sirve en http://localhost:5173 por defecto',
      'Recarga automáticamente el navegador al guardar cambios',
      'Ctrl + C detiene el servidor de desarrollo',
      'Los errores de JavaScript aparecen en la terminal del servidor',
      'La URL de Network permite ver el proyecto desde otros dispositivos',
    ],
    exercise: {
      description: 'Inicia npm run dev en tu proyecto Vite. Con el servidor corriendo, modifica el título en index.html y guarda. Verifica que el navegador se recarga automáticamente. Luego crea un error de sintaxis intencional en main.js y observa cómo Vite lo reporta.',
      hint: 'Para crear un error intencional, escribe algo inválido como "let x = ;" en main.js. Vite mostrará el error en la terminal y en el navegador con la línea exacta.',
    },
    quiz: [
      {
        question: '¿Qué hace Hot Module Replacement (HMR) en Vite?',
        options: [
          'Caliente los módulos para que corran más rápido',
          'Recarga solo el módulo que cambió sin refrescar toda la página',
          'Instala módulos automáticamente cuando los importas',
          'Elimina módulos no usados del bundle',
        ],
        correctAnswer: 'Recarga solo el módulo que cambió sin refrescar toda la página',
        correctFeedback: 'Correcto. HMR actualiza el módulo modificado en el navegador al instante sin perder el estado de la aplicación, haciendo el desarrollo más fluido.',
        incorrectFeedback: 'HMR (Hot Module Replacement) actualiza en el navegador únicamente el módulo que cambió, sin refrescar toda la página. Esto mantiene el estado de la app y hace el desarrollo más rápido.',
      },
      {
        question: '¿Cómo detienes el servidor de desarrollo de Vite?',
        options: [
          'npm stop',
          'Ctrl + C en la terminal donde está corriendo',
          'Cerrando el navegador',
          'npm run stop',
        ],
        correctAnswer: 'Ctrl + C en la terminal donde está corriendo',
        correctFeedback: 'Correcto. Ctrl + C es el atajo universal para terminar un proceso en la terminal. Funciona en Windows, Mac y Linux.',
        incorrectFeedback: 'Para detener el servidor de Vite, usa Ctrl + C en la terminal donde está corriendo. Cerrar el navegador no detiene el servidor. npm stop y npm run stop no son comandos estándar.',
      },
      {
        question: '¿Qué pasa si guardas un archivo con un error de sintaxis mientras Vite está corriendo?',
        options: [
          'Vite se detiene automáticamente',
          'Vite muestra el error en la terminal y en el navegador con la línea exacta',
          'El error se ignora y los cambios se aplican de todas formas',
          'Vite reinstala todos los paquetes',
        ],
        correctAnswer: 'Vite muestra el error en la terminal y en el navegador con la línea exacta',
        correctFeedback: 'Correcto. Vite detecta los errores de sintaxis y los muestra claramente, indicando el archivo y la línea donde ocurrió el problema.',
        incorrectFeedback: 'Vite no se detiene ante errores de sintaxis, pero sí los reporta claramente en la terminal y en una pantalla de error en el navegador, mostrando el archivo y la línea exacta.',
      },
      {
        question: '¿Qué diferencia hay entre el servidor de desarrollo (npm run dev) y el build de producción (npm run build)?',
        options: [
          'Son exactamente iguales',
          'El servidor de desarrollo no optimiza el código; el build sí lo minifica y optimiza',
          'El build es más lento que el servidor de desarrollo',
          'El servidor de desarrollo requiere internet; el build no',
        ],
        correctAnswer: 'El servidor de desarrollo no optimiza el código; el build sí lo minifica y optimiza',
        correctFeedback: 'Correcto. El servidor de desarrollo prioriza la velocidad de desarrollo. El build de producción optimiza, minifica y empaqueta el código para que cargue más rápido en producción.',
        incorrectFeedback: 'No son iguales. npm run dev sirve código sin optimizar para desarrollo rápido. npm run build genera archivos minificados y optimizados para producción. El build es más lento pero el resultado es más eficiente.',
      },
    ],
  },
  {
    slug: 'build-produccion-vite',
    title: 'Preparar proyecto para producción',
    module: 'Vite y estructura de proyectos',
    moduleNumber: 27,
    order: 214,
    description: 'Aprende qué significa hacer build de un proyecto y preparar archivos para publicarlos.',
    explanation: `**Hacer un build** significa convertir el código de desarrollo (múltiples archivos, sin optimizar) en archivos listos para publicar en internet (optimizados, minificados, empaquetados).

**El comando:**
\`\`\`
npm run build
\`\`\`

**¿Qué hace Vite durante el build?**
1. **Empaqueta** todos los archivos JS en uno o pocos archivos
2. **Minifica** el código (elimina espacios, acorta nombres de variables)
3. **Optimiza** imágenes y otros assets
4. **Genera hash** en nombres de archivos para control de caché
5. Coloca todo en la carpeta \`dist/\`

**Estructura de dist/ generada:**
\`\`\`
dist/
├── index.html
├── assets/
│   ├── index-BH3SaMPP.js    ← tu JS empaquetado y minificado
│   └── index-DLn4HgRy.css   ← tu CSS optimizado
└── (archivos de public/)
\`\`\`

**Previsualizar el build:**
\`\`\`
npm run preview
\`\`\`
Sirve la carpeta dist/ localmente para verificar antes de publicar.

**¿Dónde se publica el build?**
- Netlify, Vercel, GitHub Pages (arrastrando dist/ o conectando el repositorio)

**⚠️ La carpeta dist/ generalmente se agrega a .gitignore.**
El build se genera en cada deploy, no necesita estar en el repositorio.`,
    codeExample: `// Terminal: generar el build de producción
// npm run build

// Salida típica de Vite al hacer build:
// vite v5.x.x building for production...
// ✓ 8 modules transformed.
// dist/index.html                    0.45 kB │ gzip:  0.30 kB
// dist/assets/index-BH3SaMPP.js    42.35 kB │ gzip: 16.20 kB
// dist/assets/index-DLn4HgRy.css    1.25 kB │ gzip:  0.65 kB
// ✓ built in 1.23s

// El código minificado se ve así (ilegible para humanos):
// function a(b,c){return b+c}const d=a(1,2);

// Tu código original era:
// function sumar(numA, numB) { return numA + numB }
// const resultado = sumar(1, 2)

// Previsualizar el build antes de publicar:
// npm run preview
// → http://localhost:4173/

// .gitignore recomendado:
// node_modules/
// dist/
// .env
// .env.local

// Para publicar en Netlify:
// Simplemente arrastra la carpeta dist/ al dashboard de Netlify
// O conecta tu repositorio y configura:
//   Build command: npm run build
//   Publish directory: dist`,
    keyPoints: [
      'npm run build genera los archivos optimizados en la carpeta dist/',
      'Vite minifica, empaqueta y optimiza el código durante el build',
      'npm run preview sirve el build localmente para verificarlo',
      'Los archivos en dist/ son los que se publican en el servidor',
      'dist/ generalmente se agrega a .gitignore',
      'El build genera hashes en los nombres de archivo para el control de caché',
    ],
    exercise: {
      description: 'Ejecuta npm run build en tu proyecto Vite. Examina la carpeta dist/ generada y compara el tamaño del archivo .js minificado con tu código original. Luego ejecuta npm run preview y verifica que el build funciona correctamente en el navegador.',
      hint: 'Puedes comparar el tamaño con el explorador de archivos o con ls -lh dist/assets/ en la terminal. El archivo minificado debería ser significativamente más pequeño que el código original.',
    },
    quiz: [
      {
        question: '¿Qué comando genera los archivos de producción en Vite?',
        options: [
          'npm run production',
          'npm run build',
          'npm run deploy',
          'npm run export',
        ],
        correctAnswer: 'npm run build',
        correctFeedback: 'Correcto. npm run build ejecuta Vite en modo producción y genera los archivos optimizados en la carpeta dist/.',
        incorrectFeedback: 'El comando estándar es npm run build. npm run production, deploy y export no son scripts definidos por Vite por defecto.',
      },
      {
        question: '¿Dónde coloca Vite los archivos generados por npm run build?',
        options: [
          'En la carpeta src/',
          'En la carpeta dist/',
          'En la carpeta public/',
          'En node_modules/output/',
        ],
        correctAnswer: 'En la carpeta dist/',
        correctFeedback: 'Correcto. Vite coloca todos los archivos de producción en la carpeta dist/ (distribution), que es lo que subes al servidor de hosting.',
        incorrectFeedback: 'Vite coloca los archivos de producción en dist/ (distribution). src/ es tu código fuente, public/ son archivos estáticos y node_modules es de paquetes.',
      },
      {
        question: '¿Qué hace la minificación durante el build?',
        options: [
          'Reduce la resolución de las imágenes',
          'Elimina espacios, comentarios y acorta nombres de variables para reducir el tamaño',
          'Convierte JavaScript a TypeScript',
          'Elimina archivos que no se usan',
        ],
        correctAnswer: 'Elimina espacios, comentarios y acorta nombres de variables para reducir el tamaño',
        correctFeedback: 'Correcto. La minificación hace el archivo más pequeño eliminando lo que no es necesario en producción: espacios, saltos de línea, comentarios y acortando nombres de variables.',
        incorrectFeedback: 'La minificación reduce el tamaño del código JS/CSS eliminando espacios innecesarios, comentarios y acortando nombres. No afecta imágenes (eso es compresión) ni convierte a TypeScript.',
      },
      {
        question: '¿Para qué sirve npm run preview?',
        options: [
          'Para mostrar una vista previa del código fuente',
          'Para servir localmente el build de producción y verificarlo antes de publicar',
          'Para previsualizar cómo se verá el proyecto en móviles',
          'Para generar screenshots del proyecto',
        ],
        correctAnswer: 'Para servir localmente el build de producción y verificarlo antes de publicar',
        correctFeedback: 'Correcto. npm run preview sirve la carpeta dist/ en un servidor local, permitiendo verificar que el build funciona correctamente antes de publicarlo.',
        incorrectFeedback: 'npm run preview inicia un servidor local que sirve dist/. Es un paso de verificación entre hacer el build y publicarlo. Así compruebas que la versión de producción funciona como esperas.',
      },
      {
        question: '¿Por qué se recomienda agregar la carpeta dist/ a .gitignore?',
        options: [
          'Porque Git no puede comprimir archivos JavaScript',
          'Porque dist/ se genera automáticamente en cada deploy y no es código fuente',
          'Porque dist/ contiene información personal',
          'Porque Vite no permite subir dist/ a GitHub',
        ],
        correctAnswer: 'Porque dist/ se genera automáticamente en cada deploy y no es código fuente',
        correctFeedback: 'Correcto. dist/ se regenera con npm run build en cada deploy. Commitear archivos generados automáticamente aumenta el tamaño del repositorio innecesariamente.',
        incorrectFeedback: 'dist/ es código generado automáticamente. Los servidores de hosting ejecutan npm run build durante el deploy. No tiene sentido commitear archivos generados que se recrean en cada deploy.',
      },
    ],
  },
]

export const jsModule27: Module = {
  number: 27,
  title: 'Vite y estructura de proyectos',
  level: 'nivel6',
  lessons: lessonsJsModule27,
}
