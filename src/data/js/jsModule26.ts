import type { Lesson, Module } from '@/types'

export const lessonsJsModule26: Lesson[] = [
  {
    slug: 'que-es-nodejs',
    title: '¿Qué es Node.js?',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 199,
    description: 'Aprende qué es Node.js, para qué sirve y por qué permite ejecutar JavaScript fuera del navegador.',
    explanation: `**Node.js** es un entorno de ejecución que permite correr JavaScript fuera del navegador, directamente en tu computadora o servidor.

**Analogía:** El navegador es como un cine que solo proyecta películas de JavaScript. Node.js es como tener ese proyector en tu casa para usarlo cuando quieras, sin el cine.

**¿Para qué sirve Node.js?**
- Ejecutar scripts JavaScript desde la terminal
- Crear servidores web
- Usar herramientas de desarrollo como npm, Vite, Webpack
- Automatizar tareas en tu proyecto

**¿Por qué necesitas Node.js como frontend?**
Aunque no vayas a crear servidores, Node.js es necesario para:
- Instalar paquetes con npm
- Ejecutar Vite, el servidor de desarrollo
- Usar herramientas de build y testing

**Diferencias clave con el navegador:**
| Navegador | Node.js |
|-----------|---------|
| Tiene acceso al DOM | No tiene DOM |
| Corre en el cliente del usuario | Corre en tu máquina o servidor |
| Limitado por seguridad del navegador | Accede al sistema de archivos |
| JavaScript del frontend | JavaScript del backend o herramientas |

**¿Cómo verificar que tienes Node.js instalado?**
Abre la terminal y escribe:
\`\`\`
node --version
\`\`\`
Si muestra algo como \`v20.10.0\`, ya lo tienes instalado.`,
    codeExample: `// En el navegador: JavaScript accede al DOM
document.querySelector('h1').textContent = 'Hola'

// En Node.js: JavaScript accede al sistema de archivos
// (esto NO funciona en el navegador)
const fs = require('fs')
fs.writeFileSync('hola.txt', 'Hola desde Node.js')
console.log('Archivo creado')

// Pero esto SÍ funciona igual en ambos entornos:
const numeros = [1, 2, 3, 4, 5]
const dobles = numeros.map(n => n * 2)
console.log(dobles) // [2, 4, 6, 8, 10]

// Verificar versión desde la terminal:
// node --version   → muestra la versión instalada
// node archivo.js  → ejecuta un archivo JavaScript`,
    keyPoints: [
      'Node.js permite ejecutar JavaScript fuera del navegador',
      'Es necesario para usar npm, Vite y herramientas de desarrollo',
      'No tiene acceso al DOM, pero sí al sistema de archivos',
      'Se verifica con node --version en la terminal',
      'La mayoría de herramientas frontend modernas dependen de Node.js',
      'No necesitas Node.js para escribir JS del navegador, pero sí para las herramientas',
    ],
    exercise: {
      description: 'Abre la terminal y ejecuta node --version y npm --version. Anota las versiones que tienes instaladas. Luego crea un archivo llamado prueba.js con console.log("Hola desde Node.js") y ejecútalo con node prueba.js.',
      hint: 'Si node no está instalado, descárgalo desde nodejs.org. La versión LTS (Long Term Support) es la recomendada para proyectos estables.',
    },
    quiz: [
      {
        question: '¿Cuál es la función principal de Node.js?',
        options: [
          'Ejecutar JavaScript fuera del navegador',
          'Crear páginas web con HTML y CSS',
          'Reemplazar al navegador web',
          'Compilar TypeScript a JavaScript',
        ],
        correctAnswer: 'Ejecutar JavaScript fuera del navegador',
        correctFeedback: 'Correcto. Node.js es un entorno de ejecución que permite correr JavaScript directamente en la máquina, sin necesidad de un navegador.',
        incorrectFeedback: 'Node.js no crea páginas, no reemplaza al navegador ni compila TypeScript. Su función esencial es ejecutar JavaScript fuera del navegador, en la terminal o el servidor.',
      },
      {
        question: '¿Por qué un desarrollador frontend necesita Node.js si no va a crear servidores?',
        options: [
          'No lo necesita para nada',
          'Para usar herramientas como npm y Vite',
          'Para escribir HTML más rápido',
          'Para conectarse a bases de datos',
        ],
        correctAnswer: 'Para usar herramientas como npm y Vite',
        correctFeedback: 'Exacto. Herramientas como npm y Vite requieren Node.js para funcionar. Sin Node.js no podrías instalar paquetes ni ejecutar el servidor de desarrollo.',
        incorrectFeedback: 'Un frontend developer necesita Node.js porque las herramientas modernas como npm, Vite y bundlers dependen de él para instalarse y ejecutarse.',
      },
      {
        question: '¿Qué comando verifica si Node.js está instalado?',
        options: [
          'node --version',
          'npm install node',
          'check node',
          'install --node',
        ],
        correctAnswer: 'node --version',
        correctFeedback: 'Correcto. node --version muestra la versión de Node.js instalada. Si el comando no existe, Node.js no está instalado.',
        incorrectFeedback: 'El comando correcto es node --version. Esto muestra la versión instalada como v20.10.0. Los otros comandos no son válidos para verificar la instalación.',
      },
      {
        question: '¿Qué diferencia importante existe entre JavaScript en el navegador y en Node.js?',
        options: [
          'Node.js no puede usar variables ni funciones',
          'El navegador tiene acceso al DOM, Node.js no',
          'Node.js solo puede usar números',
          'El navegador no puede ejecutar bucles',
        ],
        correctAnswer: 'El navegador tiene acceso al DOM, Node.js no',
        correctFeedback: 'Correcto. El DOM (Document Object Model) es exclusivo del navegador. Node.js, en cambio, tiene acceso al sistema de archivos y la red a nivel de servidor.',
        incorrectFeedback: 'La diferencia clave es el acceso al DOM. El navegador puede manipular el HTML con document.querySelector(), pero Node.js no tiene DOM. Ambos comparten la sintaxis de JavaScript.',
      },
      {
        question: '¿Qué sucede si intentas usar document.querySelector() en un archivo ejecutado con Node.js?',
        options: [
          'Funciona igual que en el navegador',
          'Lanza un error porque document no existe en Node.js',
          'Crea un documento HTML automáticamente',
          'Muestra el HTML del sistema operativo',
        ],
        correctAnswer: 'Lanza un error porque document no existe en Node.js',
        correctFeedback: 'Correcto. document es un objeto del navegador. En Node.js no existe, así que obtendrías ReferenceError: document is not defined.',
        incorrectFeedback: 'Node.js no tiene el objeto document. Si intentas usar document.querySelector() en Node.js, obtendrás un ReferenceError porque ese objeto pertenece al navegador, no a Node.js.',
      },
    ],
  },
  {
    slug: 'que-es-npm',
    title: '¿Qué es npm?',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 200,
    description: 'Aprende qué es npm y cómo se usa para instalar herramientas y paquetes de JavaScript.',
    explanation: `**npm** (Node Package Manager) es el gestor de paquetes oficial de Node.js. Te permite instalar, compartir y gestionar librerías y herramientas de JavaScript.

**Analogía:** npm es como una tienda de aplicaciones (App Store) para código JavaScript. En lugar de instalar apps, instalas paquetes de código que otros desarrolladores crearon y compartieron.

**¿Qué puedes hacer con npm?**
- Instalar paquetes: \`npm install nombre-del-paquete\`
- Instalar herramientas de desarrollo: \`npm install --save-dev vitest\`
- Ejecutar scripts: \`npm run dev\`
- Crear proyectos: \`npm init\`

**El registro de npm:**
- npmjs.com tiene más de 2 millones de paquetes
- Cualquier desarrollador puede publicar paquetes
- Los paquetes tienen versiones, descargas y calificaciones

**Comandos básicos:**
\`\`\`
npm --version          → verificar que npm está instalado
npm install            → instalar todo lo del package.json
npm install lodash     → instalar un paquete específico
npm uninstall lodash   → desinstalar un paquete
npm run dev            → ejecutar el script "dev"
\`\`\`

**⚠️ Importante:**
- npm viene incluido con Node.js
- Instala solo paquetes de fuentes confiables
- Los paquetes desconocidos pueden tener vulnerabilidades`,
    codeExample: `// Verificar instalación desde la terminal:
// npm --version   → algo como: 10.2.4

// Instalar un paquete popular (date-fns para fechas):
// npm install date-fns

// Después de instalarlo, úsalo en tu código:
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const hoy = new Date()
const fechaFormateada = format(hoy, "d 'de' MMMM 'de' yyyy", { locale: es })
console.log(fechaFormateada) // "17 de mayo de 2026"

// Sin npm, tendrías que escribir toda esa lógica desde cero.
// Con npm, instalas el paquete y lo usas directamente.

// Otro ejemplo: instalar y usar axios para peticiones HTTP:
// npm install axios
import axios from 'axios'
const respuesta = await axios.get('https://api.ejemplo.com/datos')
console.log(respuesta.data)`,
    keyPoints: [
      'npm es el gestor de paquetes oficial de Node.js',
      'Permite instalar librerías que otros desarrolladores crearon',
      'Viene incluido automáticamente con Node.js',
      'npm --version verifica que está instalado',
      'Los paquetes se buscan en npmjs.com',
      'Solo instala paquetes de fuentes confiables y bien mantenidas',
    ],
    exercise: {
      description: 'Ejecuta npm --version en la terminal y anota la versión. Luego busca en npmjs.com el paquete "date-fns" y lee su descripción, número de descargas y versión más reciente.',
      hint: 'El número de descargas semanales en npmjs.com es un indicador de qué tan popular y confiable es un paquete.',
    },
    quiz: [
      {
        question: '¿Qué significa npm?',
        options: [
          'Node Package Manager',
          'New Program Manager',
          'Next Project Module',
          'Node Program Maker',
        ],
        correctAnswer: 'Node Package Manager',
        correctFeedback: 'Correcto. npm son las siglas de Node Package Manager, el gestor de paquetes oficial de Node.js.',
        incorrectFeedback: 'npm significa Node Package Manager. Es el gestor de paquetes que viene incluido con Node.js y permite instalar librerías de JavaScript.',
      },
      {
        question: '¿Cómo se instala npm en tu computadora?',
        options: [
          'Instalando Node.js (npm viene incluido)',
          'Descargando npm por separado desde su sitio web',
          'Ejecutando install npm en la terminal',
          'Comprando una licencia en npmjs.com',
        ],
        correctAnswer: 'Instalando Node.js (npm viene incluido)',
        correctFeedback: 'Exacto. npm viene incluido automáticamente cuando instalas Node.js. No necesitas instalarlo por separado.',
        incorrectFeedback: 'npm viene incluido con Node.js. Al instalar Node.js desde nodejs.org, npm se instala automáticamente sin pasos adicionales.',
      },
      {
        question: '¿Qué comando instala el paquete "lodash"?',
        options: [
          'npm install lodash',
          'npm get lodash',
          'node install lodash',
          'npm add --package lodash',
        ],
        correctAnswer: 'npm install lodash',
        correctFeedback: 'Correcto. npm install nombre-del-paquete es el comando estándar para instalar cualquier paquete de npm.',
        incorrectFeedback: 'El comando correcto es npm install lodash. npm get no existe, node install no es un comando válido, y el formato npm add --package tampoco es correcto.',
      },
      {
        question: '¿Dónde puedes buscar paquetes de npm disponibles?',
        options: [
          'npmjs.com',
          'github.com',
          'node.org',
          'packages.javascript.com',
        ],
        correctAnswer: 'npmjs.com',
        correctFeedback: 'Correcto. npmjs.com es el registro oficial de npm donde puedes buscar más de 2 millones de paquetes disponibles.',
        incorrectFeedback: 'El registro oficial de npm está en npmjs.com. Allí puedes buscar paquetes, ver su documentación, número de descargas y versiones.',
      },
      {
        question: '¿Qué consideración de seguridad debes tener al instalar paquetes con npm?',
        options: [
          'Instalar siempre la versión más antigua para mayor estabilidad',
          'Instalar solo paquetes de fuentes confiables y bien mantenidas',
          'Instalar todos los paquetes que encuentres para tener más opciones',
          'Nunca instalar paquetes, siempre escribir el código desde cero',
        ],
        correctAnswer: 'Instalar solo paquetes de fuentes confiables y bien mantenidas',
        correctFeedback: 'Correcto. Los paquetes de npm son código de terceros. Instalar paquetes desconocidos o abandonados puede introducir vulnerabilidades de seguridad en tu proyecto.',
        incorrectFeedback: 'La versión más antigua no es necesariamente más segura. Debes instalar paquetes de fuentes confiables (muchas descargas, mantenimiento activo, buena reputación) para evitar vulnerabilidades.',
      },
    ],
  },
  {
    slug: 'npm-init',
    title: 'Crear un proyecto con npm init',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 201,
    description: 'Aprende a crear un archivo package.json usando npm init para iniciar un proyecto JavaScript.',
    explanation: `**npm init** es el comando que crea el archivo \`package.json\` en tu proyecto. Este archivo es la configuración central de todo proyecto JavaScript moderno.

**¿Cuándo usar npm init?**
Siempre que empieces un nuevo proyecto JavaScript que vaya a usar paquetes de npm o scripts de terminal.

**Dos formas de usarlo:**

**1. Interactivo (npm init):**
Te hace preguntas una por una: nombre, versión, descripción, etc.

**2. Automático (npm init -y):**
Crea el \`package.json\` con valores por defecto sin hacer preguntas. El flag \`-y\` significa "yes a todo".

**¿Qué preguntas hace npm init?**
- \`name\`: nombre del proyecto (letras minúsculas, sin espacios)
- \`version\`: versión inicial (generalmente 1.0.0)
- \`description\`: descripción breve del proyecto
- \`entry point\`: archivo principal (generalmente main.js)
- \`author\`: tu nombre
- \`license\`: licencia del proyecto (MIT, ISC, etc.)

**Pasos típicos para iniciar un proyecto:**
\`\`\`
1. Crea una carpeta: mkdir mi-proyecto
2. Entra a la carpeta: cd mi-proyecto
3. Ejecuta: npm init -y
4. Listo: se crea package.json
\`\`\``,
    codeExample: `// Después de ejecutar: npm init -y
// Se crea este archivo package.json automáticamente:

{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

// También puedes editar package.json manualmente después:
{
  "name": "task-app",
  "version": "1.0.0",
  "description": "Aplicación de tareas con JavaScript",
  "main": "main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "author": "Tu Nombre",
  "license": "MIT"
}`,
    keyPoints: [
      'npm init crea el archivo package.json en tu proyecto',
      'npm init -y crea package.json con valores por defecto sin preguntas',
      'El nombre del proyecto debe ser en minúsculas sin espacios',
      'Siempre ejecuta npm init dentro de la carpeta del proyecto',
      'package.json es obligatorio para usar paquetes de npm',
      'Puedes editar package.json manualmente después de crearlo',
    ],
    exercise: {
      description: 'Crea una carpeta llamada "mi-task-app" en tu escritorio, entra a esa carpeta con la terminal y ejecuta npm init -y. Verifica que se creó el archivo package.json y ábrelo para ver su contenido.',
      hint: 'Usa mkdir mi-task-app para crear la carpeta y cd mi-task-app para entrar. Luego npm init -y crea el package.json al instante.',
    },
    quiz: [
      {
        question: '¿Qué crea el comando npm init -y?',
        options: [
          'Un archivo package.json con valores por defecto',
          'Instala todos los paquetes disponibles de npm',
          'Crea una carpeta node_modules vacía',
          'Elimina el proyecto actual',
        ],
        correctAnswer: 'Un archivo package.json con valores por defecto',
        correctFeedback: 'Correcto. npm init -y crea package.json con valores por defecto sin hacer preguntas. El flag -y significa "yes a todo".',
        incorrectFeedback: 'npm init -y solo crea el archivo package.json. No instala paquetes, no crea node_modules ni elimina nada. El flag -y evita las preguntas interactivas.',
      },
      {
        question: '¿Cuál es la diferencia entre npm init y npm init -y?',
        options: [
          'npm init -y instala paquetes automáticamente',
          'npm init hace preguntas, npm init -y usa valores por defecto',
          'Son exactamente iguales',
          'npm init -y solo funciona en Windows',
        ],
        correctAnswer: 'npm init hace preguntas, npm init -y usa valores por defecto',
        correctFeedback: 'Correcto. Sin el flag -y, npm init te pregunta nombre, versión, descripción, etc. Con -y responde "sí" a todo y usa valores por defecto.',
        incorrectFeedback: 'La diferencia es el modo interactivo. Sin -y, npm init hace preguntas una por una. Con -y, salta todas las preguntas y crea package.json con valores predeterminados.',
      },
      {
        question: '¿En qué carpeta debes ejecutar npm init?',
        options: [
          'En cualquier carpeta de tu computadora',
          'Siempre en la carpeta raíz del proyecto',
          'Solo en la carpeta de Node.js',
          'En la carpeta de Documentos',
        ],
        correctAnswer: 'Siempre en la carpeta raíz del proyecto',
        correctFeedback: 'Correcto. npm init debe ejecutarse en la carpeta raíz de tu proyecto. El package.json se crea en el directorio donde ejecutas el comando.',
        incorrectFeedback: 'npm init crea package.json en el directorio actual. Por eso debes estar en la carpeta raíz de tu proyecto antes de ejecutarlo, o el archivo se creará en el lugar incorrecto.',
      },
      {
        question: '¿Qué formato debe tener el nombre del proyecto en package.json?',
        options: [
          'Letras mayúsculas con espacios están permitidos',
          'Solo letras minúsculas, sin espacios (guiones permitidos)',
          'Puede ser cualquier texto con caracteres especiales',
          'Solo números son válidos',
        ],
        correctAnswer: 'Solo letras minúsculas, sin espacios (guiones permitidos)',
        correctFeedback: 'Correcto. El nombre en package.json debe ser en minúsculas, sin espacios. Se pueden usar guiones como separadores: mi-task-app.',
        incorrectFeedback: 'npm requiere que el nombre del paquete sea en minúsculas sin espacios. Puedes usar guiones como separadores. Por ejemplo: "task-app" es válido, "Task App" no lo es.',
      },
      {
        question: '¿Qué pasa si ejecutas npm init -y sin haber creado una carpeta para el proyecto?',
        options: [
          'npm crea la carpeta automáticamente',
          'Se crea package.json en el directorio actual donde estés',
          'El comando falla con un error fatal',
          'Se instala Node.js automáticamente',
        ],
        correctAnswer: 'Se crea package.json en el directorio actual donde estés',
        correctFeedback: 'Correcto. npm init -y crea package.json donde estés parado en la terminal. Por eso es importante moverse a la carpeta del proyecto antes de ejecutarlo.',
        incorrectFeedback: 'npm no crea carpetas automáticamente. El archivo package.json se crea en el directorio actual. Si no estás en tu carpeta de proyecto, el archivo quedará en el lugar equivocado.',
      },
    ],
  },
  {
    slug: 'package-json',
    title: 'Entender package.json',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 202,
    description: 'Aprende qué es package.json y por qué es importante en proyectos JavaScript modernos.',
    explanation: `**package.json** es el archivo de configuración central de todo proyecto JavaScript moderno. Describe el proyecto y gestiona sus dependencias.

**¿Para qué sirve package.json?**
- Registra los paquetes que el proyecto necesita
- Define scripts que puedes ejecutar con \`npm run\`
- Describe el proyecto (nombre, versión, autor)
- Permite que cualquier persona reproduzca el entorno del proyecto

**Campos más importantes:**

| Campo | Propósito |
|-------|-----------|
| \`name\` | Nombre del proyecto |
| \`version\` | Versión actual (semver: major.minor.patch) |
| \`scripts\` | Comandos que puedes ejecutar con npm run |
| \`dependencies\` | Paquetes necesarios en producción |
| \`devDependencies\` | Paquetes solo para desarrollo |

**¿Por qué es tan importante?**
Cuando compartes tu proyecto (GitHub, equipo, etc.) no incluyes la carpeta \`node_modules\` porque pesa demasiado. En cambio, compartes \`package.json\` y cualquier persona puede recrear el entorno con \`npm install\`.

**El archivo package-lock.json:**
Se crea automáticamente con las versiones exactas de cada paquete instalado. Garantiza que todos instalen exactamente las mismas versiones.

**⚠️ Nunca edites node_modules a mano.** Es gestionado por npm.`,
    codeExample: `// package.json de una task app típica:
{
  "name": "task-app",
  "version": "1.0.0",
  "description": "App de tareas con JavaScript y Vite",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "date-fns": "^3.6.0"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "vitest": "^1.6.0"
  }
}

// Para instalar todos los paquetes listados:
// npm install

// Esto lee package.json e instala todo lo necesario
// en la carpeta node_modules/

// El símbolo ^ antes de la versión significa:
// "instala esta versión o una compatible más nueva"
// ^3.6.0 puede instalar 3.7.0, 3.8.0, etc. (no 4.0.0)`,
    keyPoints: [
      'package.json es el archivo de configuración central del proyecto',
      'Registra todos los paquetes necesarios y sus versiones',
      'npm install lee package.json e instala todo automáticamente',
      'package-lock.json guarda las versiones exactas instaladas',
      'Nunca edites manualmente la carpeta node_modules',
      'Compartir package.json permite recrear el entorno en cualquier máquina',
    ],
    exercise: {
      description: 'Abre el package.json de un proyecto tuyo (o crea uno con npm init -y). Identifica: 1) el campo name, 2) el campo scripts, 3) si existe dependencies o devDependencies. Modifica la descripción del proyecto manualmente.',
      hint: 'package.json es simplemente un archivo de texto en formato JSON. Puedes abrirlo con cualquier editor de código.',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito principal de package.json?',
        options: [
          'Almacenar el código JavaScript del proyecto',
          'Configurar y describir el proyecto, incluyendo sus dependencias',
          'Reemplazar a node_modules',
          'Conectarse automáticamente a internet',
        ],
        correctAnswer: 'Configurar y describir el proyecto, incluyendo sus dependencias',
        correctFeedback: 'Correcto. package.json describe el proyecto y registra qué paquetes necesita, permitiendo que cualquier persona pueda reproducir el entorno.',
        incorrectFeedback: 'package.json no almacena código JavaScript. Su función es describir el proyecto: su nombre, versión, scripts y qué paquetes necesita instalar.',
      },
      {
        question: '¿Por qué no se incluye la carpeta node_modules al compartir un proyecto en GitHub?',
        options: [
          'Porque GitHub no soporta carpetas',
          'Porque pesa demasiado y puede recrearse con npm install',
          'Porque node_modules contiene información personal',
          'Porque solo funciona en la computadora donde se instaló',
        ],
        correctAnswer: 'Porque pesa demasiado y puede recrearse con npm install',
        correctFeedback: 'Correcto. node_modules puede pesar cientos de MB. Como package.json registra todos los paquetes, cualquiera puede recrearla con npm install.',
        incorrectFeedback: 'El motivo principal es el tamaño. node_modules puede pesar cientos de MB. Como package.json ya describe todos los paquetes necesarios, npm install los descarga e instala de nuevo.',
      },
      {
        question: '¿Qué hace el comando npm install cuando ejecutas un proyecto descargado?',
        options: [
          'Crea un nuevo package.json',
          'Lee package.json e instala todos los paquetes listados',
          'Actualiza Node.js a la versión más reciente',
          'Elimina los archivos innecesarios del proyecto',
        ],
        correctAnswer: 'Lee package.json e instala todos los paquetes listados',
        correctFeedback: 'Correcto. npm install sin argumentos lee package.json y descarga e instala todos los paquetes en dependencies y devDependencies.',
        incorrectFeedback: 'Cuando ejecutas npm install sin especificar un paquete, npm lee el package.json del proyecto e instala todo lo que está listado en dependencies y devDependencies.',
      },
      {
        question: '¿Para qué sirve el archivo package-lock.json?',
        options: [
          'Para bloquear el proyecto y que nadie más lo edite',
          'Para guardar las versiones exactas de cada paquete instalado',
          'Para almacenar las contraseñas del proyecto',
          'Para reemplazar package.json en proyectos grandes',
        ],
        correctAnswer: 'Para guardar las versiones exactas de cada paquete instalado',
        correctFeedback: 'Correcto. package-lock.json registra las versiones exactas de cada paquete y sus subdependencias, garantizando instalaciones idénticas en cualquier máquina.',
        incorrectFeedback: 'package-lock.json no bloquea el acceso ni guarda contraseñas. Registra las versiones exactas instaladas para que todos en el equipo usen exactamente los mismos paquetes.',
      },
      {
        question: '¿Qué significa el símbolo ^ antes de una versión en package.json (por ejemplo: "^3.6.0")?',
        options: [
          'Instala exactamente esa versión y ninguna otra',
          'Instala esta versión o cualquier versión compatible más nueva (sin cambios mayores)',
          'No instala este paquete',
          'Instala la versión más antigua disponible',
        ],
        correctAnswer: 'Instala esta versión o cualquier versión compatible más nueva (sin cambios mayores)',
        correctFeedback: 'Correcto. El ^ significa "compatible con". ^3.6.0 permite instalar 3.7.0, 3.8.0, etc., pero no 4.0.0 porque sería un cambio de versión mayor potencialmente incompatible.',
        incorrectFeedback: 'El símbolo ^ no significa versión exacta. Significa "compatible": ^3.6.0 permite actualizaciones menores (3.7.0, 3.8.0) pero no cambios de versión mayor (4.0.0) que podrían romper la compatibilidad.',
      },
    ],
  },
  {
    slug: 'instalar-paquetes-npm',
    title: 'Instalar paquetes con npm',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 203,
    description: 'Aprende a instalar paquetes con npm install y entender cómo se agregan al proyecto.',
    explanation: `Instalar paquetes con npm es una de las tareas más frecuentes en el desarrollo JavaScript moderno.

**Comandos principales:**
\`\`\`
npm install nombre-paquete        → instala como dependencia de producción
npm install --save-dev paquete    → instala como dependencia de desarrollo
npm install                       → instala todo lo del package.json
npm uninstall nombre-paquete      → desinstala un paquete
\`\`\`

**¿Qué pasa cuando instalas un paquete?**
1. npm descarga el paquete de npmjs.com
2. Lo coloca en la carpeta \`node_modules/\`
3. Actualiza \`package.json\` (en dependencies o devDependencies)
4. Actualiza \`package-lock.json\` con la versión exacta

**Instalar múltiples paquetes a la vez:**
\`\`\`
npm install date-fns axios lodash
\`\`\`

**¿Dónde queda el paquete instalado?**
En la carpeta \`node_modules/\` dentro de tu proyecto. Esta carpeta puede tener cientos de subcarpetas porque cada paquete también tiene sus propias dependencias.

**⚠️ Nunca modifiques node_modules manualmente.**

**Importar un paquete instalado:**
\`\`\`javascript
import { format } from 'date-fns'
import axios from 'axios'
\`\`\``,
    codeExample: `// Terminal: instalar date-fns (librería de fechas)
// npm install date-fns

// Después de instalar, package.json se actualiza:
{
  "dependencies": {
    "date-fns": "^3.6.0"
  }
}

// Usar el paquete en tu código JavaScript:
import { format, addDays, isToday } from 'date-fns'
import { es } from 'date-fns/locale'

const hoy = new Date()
const manana = addDays(hoy, 1)

console.log(format(hoy, 'EEEE d MMMM', { locale: es }))
// "sábado 17 mayo"

console.log(isToday(hoy)) // true
console.log(isToday(manana)) // false

// Terminal: desinstalar un paquete
// npm uninstall date-fns

// Terminal: instalar varios paquetes a la vez
// npm install date-fns axios`,
    keyPoints: [
      'npm install nombre-paquete agrega el paquete a dependencies',
      'npm install --save-dev agrega el paquete a devDependencies',
      'Los paquetes se descargan en la carpeta node_modules/',
      'package.json y package-lock.json se actualizan automáticamente',
      'npm install sin argumentos instala todo lo del package.json',
      'Nunca modifiques node_modules manualmente',
    ],
    exercise: {
      description: 'En un proyecto con npm init -y, instala el paquete "date-fns" con npm install date-fns. Verifica que aparece en package.json en dependencies. Luego crea un archivo index.js que importe format de date-fns y muestre la fecha actual formateada.',
      hint: 'Después de instalar, encontrarás date-fns en node_modules/date-fns/. Para usar import en Node.js, agrega "type": "module" en package.json.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando para instalar el paquete "axios"?',
        options: [
          'npm install axios',
          'npm get axios',
          'node install axios',
          'npm add package axios',
        ],
        correctAnswer: 'npm install axios',
        correctFeedback: 'Correcto. npm install nombre-del-paquete es el comando estándar para instalar cualquier paquete desde el registro de npm.',
        incorrectFeedback: 'El comando correcto es npm install axios. Las otras opciones (npm get, node install, npm add package) no son comandos válidos de npm.',
      },
      {
        question: '¿Dónde se almacenan los paquetes instalados con npm install?',
        options: [
          'En la carpeta src/ del proyecto',
          'En la carpeta node_modules/',
          'En la carpeta home del usuario',
          'En la nube de npmjs.com',
        ],
        correctAnswer: 'En la carpeta node_modules/',
        correctFeedback: 'Correcto. npm descarga los paquetes y los coloca en node_modules/ dentro de tu proyecto. Esta carpeta puede llegar a ser muy grande.',
        incorrectFeedback: 'npm almacena los paquetes en node_modules/, una carpeta que crea automáticamente en la raíz de tu proyecto. No se almacenan en src/ ni en la nube local.',
      },
      {
        question: '¿Qué hace npm install cuando no especificas ningún paquete?',
        options: [
          'Actualiza npm a la versión más reciente',
          'Lee package.json e instala todo lo listado en dependencies y devDependencies',
          'Elimina todos los paquetes instalados',
          'Crea un nuevo package.json vacío',
        ],
        correctAnswer: 'Lee package.json e instala todo lo listado en dependencies y devDependencies',
        correctFeedback: 'Correcto. npm install sin argumentos lee el package.json y descarga todos los paquetes registrados. Útil cuando descargas un proyecto de GitHub.',
        incorrectFeedback: 'Sin argumentos, npm install lee el package.json del directorio actual e instala todos los paquetes en dependencies y devDependencies. No actualiza npm ni elimina paquetes.',
      },
      {
        question: '¿Cómo instalas varios paquetes al mismo tiempo con npm?',
        options: [
          'npm install date-fns && npm install axios (dos comandos)',
          'npm install date-fns axios (en un solo comando)',
          'npm install --all date-fns axios',
          'No es posible instalar varios paquetes a la vez',
        ],
        correctAnswer: 'npm install date-fns axios (en un solo comando)',
        correctFeedback: 'Correcto. Puedes listar múltiples paquetes separados por espacios en un solo comando npm install y se instalan todos juntos.',
        incorrectFeedback: 'npm permite instalar múltiples paquetes en un solo comando: npm install date-fns axios. No necesitas dos comandos separados ni el flag --all.',
      },
      {
        question: '¿Qué archivo se actualiza automáticamente cuando instalas un paquete?',
        options: [
          'Solo main.js',
          'package.json y package-lock.json',
          'Solo node_modules/index.js',
          'index.html',
        ],
        correctAnswer: 'package.json y package-lock.json',
        correctFeedback: 'Correcto. npm actualiza automáticamente package.json (añade el paquete a dependencies) y package-lock.json (registra la versión exacta).',
        incorrectFeedback: 'Cuando instalas un paquete, npm actualiza automáticamente dos archivos: package.json (agrega la dependencia) y package-lock.json (guarda la versión exacta). main.js e index.html no cambian.',
      },
    ],
  },
  {
    slug: 'dependencias-vs-devdependencies',
    title: 'Dependencias vs devDependencies',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 204,
    description: 'Aprende la diferencia entre dependencias de producción y dependencias de desarrollo.',
    explanation: `En \`package.json\` existen dos tipos de dependencias con propósitos distintos:

**dependencies (producción):**
Paquetes que tu aplicación necesita para funcionar cuando la usan los usuarios finales.

Ejemplos: librerías de fechas, peticiones HTTP, validaciones.

**devDependencies (desarrollo):**
Paquetes que solo necesitas mientras desarrollas: testing, bundlers, formateadores de código.

Los usuarios finales nunca ven ni necesitan estos paquetes.

**¿Por qué importa la diferencia?**
- Al hacer \`npm install --production\`, solo se instalan las dependencies
- Los servidores de producción son más ligeros sin devDependencies
- Es una forma de organización clara del proyecto

**Comandos:**
\`\`\`
npm install axios                → va a dependencies
npm install --save-dev vitest   → va a devDependencies
npm install -D vitest           → -D es el atajo de --save-dev
\`\`\`

**Ejemplos típicos:**

| Paquete | Tipo | Razón |
|---------|------|-------|
| date-fns | dependency | Los usuarios usan fechas |
| axios | dependency | Las peticiones son parte del producto |
| vitest | devDependency | Solo para tests del desarrollador |
| vite | devDependency | Solo para el servidor de desarrollo |
| eslint | devDependency | Solo para revisar código |`,
    codeExample: `// Terminal: instalar dependencias de diferente tipo

// Dependencia de producción (los usuarios la necesitan):
// npm install date-fns

// Dependencia de desarrollo (solo para el desarrollador):
// npm install --save-dev vitest
// npm install -D vite          (-D es el atajo)

// package.json resultante:
{
  "name": "task-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "test": "vitest"
  },
  "dependencies": {
    "date-fns": "^3.6.0"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "vitest": "^1.6.0"
  }
}

// Regla para decidir:
// ¿El usuario final necesita este paquete para que la app funcione?
// Sí → dependencies
// No (solo lo necesito yo al desarrollar) → devDependencies`,
    keyPoints: [
      'dependencies son paquetes que la app necesita en producción',
      'devDependencies son solo para el entorno de desarrollo',
      'npm install paquete agrega a dependencies por defecto',
      'npm install -D paquete o --save-dev agrega a devDependencies',
      'Herramientas como Vite, Vitest y ESLint van en devDependencies',
      'Librerías que usa el usuario final van en dependencies',
    ],
    exercise: {
      description: 'En tu proyecto de práctica, instala date-fns como dependencia de producción y vitest como dependencia de desarrollo. Verifica en package.json que cada uno aparece en la sección correcta.',
      hint: 'npm install date-fns (sin flags) y npm install -D vitest. Revisa que date-fns esté en "dependencies" y vitest en "devDependencies".',
    },
    quiz: [
      {
        question: '¿Qué tipo de dependencia debería ser Vitest (framework de testing)?',
        options: [
          'dependency (producción)',
          'devDependency (desarrollo)',
          'peerDependency',
          'No debería instalarse con npm',
        ],
        correctAnswer: 'devDependency (desarrollo)',
        correctFeedback: 'Correcto. Vitest solo lo usa el desarrollador para correr pruebas. Los usuarios finales de la aplicación no necesitan Vitest para que la app funcione.',
        incorrectFeedback: 'Vitest es una herramienta de testing, no algo que necesiten los usuarios finales. Por eso va en devDependencies. Los usuarios no ejecutan las pruebas.',
      },
      {
        question: '¿Qué tipo de dependencia debería ser axios (librería para peticiones HTTP)?',
        options: [
          'devDependency (desarrollo)',
          'dependency (producción)',
          'No debe instalarse con npm',
          'Va en scripts, no en dependencies',
        ],
        correctAnswer: 'dependency (producción)',
        correctFeedback: 'Correcto. axios se usa para hacer peticiones HTTP en la aplicación. Los usuarios finales usan esa funcionalidad, así que es una dependency de producción.',
        incorrectFeedback: 'axios forma parte de la funcionalidad que usan los usuarios (peticiones HTTP). Por eso va en dependencies, no en devDependencies. Los usuarios necesitan que axios funcione.',
      },
      {
        question: '¿Cuál es el comando para instalar un paquete como devDependency?',
        options: [
          'npm install --dev paquete',
          'npm install -D paquete',
          'npm dev-install paquete',
          'npm install --development paquete',
        ],
        correctAnswer: 'npm install -D paquete',
        correctFeedback: 'Correcto. npm install -D (o --save-dev) instala el paquete en devDependencies. El flag -D es el atajo estándar.',
        incorrectFeedback: 'El flag correcto es -D o --save-dev. El comando npm install --dev y npm dev-install no existen. --development tampoco es un flag válido de npm.',
      },
      {
        question: '¿Qué sucede si instalas Vite en dependencies en lugar de devDependencies?',
        options: [
          'El proyecto no funciona en ningún caso',
          'Funciona igual pero es una mala práctica que hace el proyecto más pesado en producción',
          'Vite se instala de forma diferente',
          'npm lanza un error y cancela la instalación',
        ],
        correctAnswer: 'Funciona igual pero es una mala práctica que hace el proyecto más pesado en producción',
        correctFeedback: 'Correcto. Técnicamente funciona, pero es mala práctica. Los servidores de producción instalan todo lo de dependencies, y Vite no es necesario allí, aumentando el tamaño innecesariamente.',
        incorrectFeedback: 'Poner Vite en dependencies no rompe el proyecto, pero es mala práctica. Vite es una herramienta de desarrollo, no de producción. Incluirla en dependencies hace el deploy más pesado sin necesidad.',
      },
      {
        question: '¿Cuál es la regla para decidir si un paquete va en dependencies o devDependencies?',
        options: [
          'Los paquetes grandes van en devDependencies',
          '¿El usuario final necesita este paquete para que la app funcione?',
          'Los paquetes gratuitos van en devDependencies',
          'Todo va en dependencies para simplificar',
        ],
        correctAnswer: '¿El usuario final necesita este paquete para que la app funcione?',
        correctFeedback: 'Correcto. La pregunta clave es: ¿sin este paquete, los usuarios no pueden usar la app? Si sí, es dependency. Si solo tú lo necesitas al desarrollar, es devDependency.',
        incorrectFeedback: 'El tamaño ni el precio del paquete determinan el tipo. La pregunta correcta es: ¿el usuario final necesita este paquete para usar la app? Sí → dependency. Solo el dev lo necesita → devDependency.',
      },
    ],
  },
  {
    slug: 'scripts-npm',
    title: 'Scripts de npm',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 205,
    description: 'Aprende a crear y ejecutar scripts desde package.json usando npm run.',
    explanation: `Los **scripts de npm** son comandos personalizados que defines en \`package.json\` y ejecutas con \`npm run\`.

**¿Por qué usar scripts?**
- Acortan comandos largos a palabras simples
- Estandarizan cómo se corre el proyecto en el equipo
- Cualquiera puede ejecutar el proyecto sin conocer los comandos completos

**Definir scripts en package.json:**
\`\`\`json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "test": "vitest",
  "lint": "eslint src/"
}
\`\`\`

**Ejecutar scripts:**
\`\`\`
npm run dev     → ejecuta "vite"
npm run build   → ejecuta "vite build"
npm run test    → ejecuta "vitest"
\`\`\`

**Scripts especiales (sin necesitar run):**
\`\`\`
npm start       → equivale a npm run start
npm test        → equivale a npm run test
\`\`\`

**Cadena de scripts:**
\`\`\`json
"scripts": {
  "lint": "eslint src/",
  "format": "prettier --write src/",
  "check": "npm run lint && npm run format"
}
\`\`\`

**¿Por qué no escribir los comandos directos?**
Un comando como \`./node_modules/.bin/vite --config vite.config.js --port 3000\` es difícil de recordar. Como script \`dev\` es simplemente \`npm run dev\`.`,
    codeExample: `// package.json con scripts de un proyecto típico:
{
  "name": "task-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:run": "vitest run",
    "lint": "eslint src/ --ext .js"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "vitest": "^1.6.0"
  }
}

// Cómo usar cada script desde la terminal:
// npm run dev       → arranca el servidor de desarrollo
// npm run build     → genera los archivos de producción
// npm run preview   → previsualiza el build de producción
// npm run test      → corre las pruebas en modo watch
// npm run test:run  → corre las pruebas una vez y termina
// npm run lint      → revisa el estilo del código

// Script personalizado para limpiar y construir:
{
  "scripts": {
    "clean": "rm -rf dist",
    "build": "npm run clean && vite build"
  }
}`,
    keyPoints: [
      'Los scripts se definen en el campo "scripts" de package.json',
      'Se ejecutan con npm run nombre-del-script',
      'Acortan comandos largos a palabras cortas y memorizables',
      'npm start y npm test pueden ejecutarse sin la palabra run',
      'Puedes encadenar scripts con && en el valor del script',
      'Estandarizan los comandos del proyecto para todo el equipo',
    ],
    exercise: {
      description: 'En tu package.json, agrega tres scripts: "dev" que ejecute "vite", "build" que ejecute "vite build" y "hello" que ejecute \'echo "Hola desde npm scripts"\'. Ejecuta npm run hello y verifica que funciona.',
      hint: 'El script hello usa echo que es un comando de terminal. npm run hello ejecutará ese comando en tu terminal. No necesitas instalar nada para probarlo.',
    },
    quiz: [
      {
        question: '¿Cómo se ejecuta un script llamado "dev" desde la terminal?',
        options: [
          'node dev',
          'npm run dev',
          'npm start dev',
          'execute dev',
        ],
        correctAnswer: 'npm run dev',
        correctFeedback: 'Correcto. npm run nombre-del-script ejecuta el comando definido en el campo scripts de package.json.',
        incorrectFeedback: 'El comando correcto es npm run dev. node dev intentaría ejecutar un archivo dev.js. npm start dev y execute dev no son comandos válidos.',
      },
      {
        question: '¿Dónde se definen los scripts de npm?',
        options: [
          'En un archivo llamado scripts.js',
          'En el campo "scripts" dentro de package.json',
          'En la carpeta node_modules/scripts/',
          'En un archivo .npmscripts separado',
        ],
        correctAnswer: 'En el campo "scripts" dentro de package.json',
        correctFeedback: 'Correcto. Los scripts se definen en el campo "scripts" de package.json. Cada entrada es un nombre de script y su valor es el comando a ejecutar.',
        incorrectFeedback: 'Los scripts se definen en package.json, en la sección "scripts". No existe un archivo scripts.js ni .npmscripts para esto. node_modules es solo para paquetes.',
      },
      {
        question: '¿Cuál de los siguientes scripts NO requiere escribir "run"?',
        options: [
          'npm dev',
          'npm build',
          'npm test',
          'npm lint',
        ],
        correctAnswer: 'npm test',
        correctFeedback: 'Correcto. npm test (y npm start) son scripts especiales que no requieren la palabra "run". Los demás scripts personalizados sí requieren npm run.',
        incorrectFeedback: 'Solo los scripts especiales "start" y "test" pueden ejecutarse sin "run": npm start y npm test. Para dev, build, lint y otros scripts personalizados, necesitas npm run.',
      },
      {
        question: '¿Cuál es la ventaja principal de usar scripts de npm?',
        options: [
          'Hacen que el código JavaScript sea más rápido',
          'Acortan comandos largos y estandarizan los comandos del proyecto',
          'Reemplazan a package.json',
          'Aumentan la velocidad de descarga de paquetes',
        ],
        correctAnswer: 'Acortan comandos largos y estandarizan los comandos del proyecto',
        correctFeedback: 'Correcto. Los scripts permiten escribir npm run dev en lugar de comandos largos y complicados, y cualquier persona del equipo usa los mismos comandos.',
        incorrectFeedback: 'Los scripts no aceleran el código ni la descarga de paquetes. Su beneficio principal es crear atajos: npm run dev en lugar de comandos largos y difíciles de recordar.',
      },
      {
        question: 'En package.json tienes: "build": "vite build && echo Listo". ¿Qué hace este script?',
        options: [
          'Solo ejecuta vite build',
          'Falla porque && no funciona en scripts de npm',
          'Ejecuta vite build y si tiene éxito muestra "Listo" en la terminal',
          'Solo muestra "Listo" sin compilar',
        ],
        correctAnswer: 'Ejecuta vite build y si tiene éxito muestra "Listo" en la terminal',
        correctFeedback: 'Correcto. El operador && encadena comandos: si el primero tiene éxito, ejecuta el segundo. Así puedes encadenar pasos en un script.',
        incorrectFeedback: '&& funciona perfectamente en scripts de npm. Significa "si el primer comando tiene éxito, ejecuta el segundo". Así que vite build && echo Listo ejecuta vite build y luego muestra "Listo".',
      },
    ],
  },
  {
    slug: 'errores-comunes-npm',
    title: 'Errores comunes con npm',
    module: 'NPM y herramientas básicas',
    moduleNumber: 26,
    order: 206,
    description: 'Aprende a resolver errores comunes relacionados con node_modules, package-lock.json, versiones y comandos mal escritos.',
    explanation: `Trabajar con npm implica encontrar errores comunes. Saber reconocerlos y resolverlos es una habilidad esencial.

**Error 1: ENOENT (no existe el archivo o directorio)**
\`\`\`
Error: ENOENT: no such file or directory, open 'package.json'
\`\`\`
**Causa:** Ejecutaste npm install en la carpeta incorrecta.
**Solución:** Navega a la carpeta que contiene package.json.

**Error 2: Cannot find module**
\`\`\`
Error: Cannot find module 'date-fns'
\`\`\`
**Causa:** Olvidaste instalar el paquete o node_modules fue borrada.
**Solución:** Ejecuta \`npm install\`

**Error 3: EACCES (permisos)**
\`\`\`
Error: EACCES: permission denied
\`\`\`
**Causa:** En Mac/Linux, intentas instalar paquetes globalmente sin permisos.
**Solución:** Nunca uses \`sudo npm install\` para proyectos locales. Usa nvm para gestionar Node.js.

**Error 4: Conflictos de versiones**
\`\`\`
npm WARN ERESOLVE overriding peer dependency
\`\`\`
**Causa:** Dos paquetes requieren versiones incompatibles de una dependencia.
**Solución:** Ejecuta \`npm install --legacy-peer-deps\` como solución temporal.

**Solución general para muchos errores:**
\`\`\`
1. Borra node_modules: rm -rf node_modules
2. Borra package-lock.json: rm package-lock.json
3. Reinstala todo: npm install
\`\`\``,
    codeExample: `// Error frecuente 1: typo en el nombre del paquete
// npm install dat-fns   ← error de escritura
// npm install date-fns  ← correcto

// Error frecuente 2: olvidar npm install al clonar proyecto
// Clonas el repo → no hay node_modules
// Solución: npm install

// Error frecuente 3: package.json corrupto
// Síntoma: SyntaxError en package.json
// Causa: editaste manualmente package.json y rompiste el JSON

// package.json INVÁLIDO (falta coma):
{
  "name": "mi-app"
  "version": "1.0.0"
}

// package.json VÁLIDO:
{
  "name": "mi-app",
  "version": "1.0.0"
}

// Solución nuclear (cuando todo falla):
// 1. rm -rf node_modules
// 2. rm package-lock.json
// 3. npm install

// Verificar si un paquete está instalado:
// npm list nombre-paquete
// npm list date-fns`,
    keyPoints: [
      'ENOENT significa que no estás en la carpeta correcta del proyecto',
      'Cannot find module significa que olvidaste hacer npm install',
      'Borrar node_modules y package-lock.json y reinstalar resuelve muchos errores',
      'Nunca uses sudo npm install en proyectos locales',
      'Un JSON inválido en package.json causa errores de sintaxis',
      'npm list nombre-paquete verifica si un paquete está instalado',
    ],
    exercise: {
      description: 'Practica la solución nuclear: en un proyecto de práctica, borra manualmente la carpeta node_modules y ejecuta npm install para verificar que los paquetes se reinstalan correctamente desde package.json.',
      hint: 'En Windows usa rmdir /s node_modules, en Mac/Linux usa rm -rf node_modules. Después de borrarla, npm install debería recrearla correctamente.',
    },
    quiz: [
      {
        question: '¿Qué significa el error "Cannot find module \'date-fns\'"?',
        options: [
          'date-fns es un nombre inválido',
          'El paquete date-fns no está instalado (falta npm install)',
          'Node.js está desactualizado',
          'Hay un error en el código de date-fns',
        ],
        correctAnswer: 'El paquete date-fns no está instalado (falta npm install)',
        correctFeedback: 'Correcto. "Cannot find module" significa que el paquete no está en node_modules. Ejecuta npm install para instalarlo.',
        incorrectFeedback: 'El error "Cannot find module" indica que el paquete no está instalado en node_modules. La solución es ejecutar npm install o npm install date-fns si es nuevo.',
      },
      {
        question: '¿Qué significa el error "ENOENT: no such file or directory, open package.json"?',
        options: [
          'package.json está corrupto',
          'Estás ejecutando el comando en la carpeta incorrecta',
          'npm está desinstalado',
          'El proyecto es incompatible con Node.js',
        ],
        correctAnswer: 'Estás ejecutando el comando en la carpeta incorrecta',
        correctFeedback: 'Correcto. ENOENT en package.json significa que npm no encuentra ese archivo en el directorio actual. Navega a la carpeta del proyecto primero.',
        incorrectFeedback: 'ENOENT significa "no such file or directory". npm busca package.json en el directorio actual. Si no lo encuentra, es porque no estás en la carpeta correcta del proyecto.',
      },
      {
        question: '¿Cuál es la "solución nuclear" para errores extraños de npm?',
        options: [
          'Reinstalar Node.js completamente',
          'Borrar node_modules y package-lock.json, luego npm install',
          'Ejecutar npm fix --all',
          'Crear un nuevo package.json desde cero',
        ],
        correctAnswer: 'Borrar node_modules y package-lock.json, luego npm install',
        correctFeedback: 'Correcto. Borrar node_modules y package-lock.json elimina cualquier estado corrupto. npm install los recrea desde el registro de npm con el estado de package.json.',
        incorrectFeedback: 'La solución más efectiva para errores inexplicables de npm es: 1) borrar node_modules, 2) borrar package-lock.json, 3) ejecutar npm install. Esto reinstala todo desde cero.',
      },
      {
        question: '¿Por qué NO debes usar "sudo npm install" en proyectos locales?',
        options: [
          'Porque sudo no existe en Windows',
          'Porque puede crear archivos con permisos incorrectos y causar más problemas',
          'Porque npm no permite sudo',
          'Porque sudo hace la instalación más lenta',
        ],
        correctAnswer: 'Porque puede crear archivos con permisos incorrectos y causar más problemas',
        correctFeedback: 'Correcto. Usar sudo en proyectos locales crea archivos con permisos de root, lo que causa errores de permisos en instalaciones futuras sin sudo.',
        incorrectFeedback: 'sudo puede crear node_modules con permisos de root, haciendo que futuras instalaciones sin sudo fallen con errores de permisos. La solución correcta es usar nvm para gestionar Node.js.',
      },
      {
        question: '¿Cómo verificas si el paquete "axios" está instalado en tu proyecto?',
        options: [
          'npm check axios',
          'npm list axios',
          'npm verify axios',
          'npm status axios',
        ],
        correctAnswer: 'npm list axios',
        correctFeedback: 'Correcto. npm list nombre-paquete muestra si el paquete está instalado y su versión. Si no aparece, no está instalado.',
        incorrectFeedback: 'El comando correcto es npm list axios. npm check, npm verify y npm status no son comandos válidos de npm. npm list muestra los paquetes instalados.',
      },
    ],
  },
]

export const jsModule26: Module = {
  number: 26,
  title: 'NPM y herramientas básicas',
  level: 'nivel6',
  lessons: lessonsJsModule26,
}
