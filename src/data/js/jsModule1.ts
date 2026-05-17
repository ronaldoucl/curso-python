import type { Lesson, Module } from '@/types'

export const lessonsJsModule1: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-javascript',
    title: '¿Qué es JavaScript?',
    module: 'Introducción a JavaScript',
    moduleNumber: 1,
    order: 1,
    description:
      'Descubre qué es JavaScript, para qué se usa y por qué es uno de los lenguajes más importantes del desarrollo web.',
    explanation: `JavaScript es un **lenguaje de programación** creado en 1995 por Brendan Eich mientras trabajaba en Netscape, uno de los primeros navegadores web. Lo desarrolló en tan solo 10 días, aunque con el tiempo se ha convertido en uno de los lenguajes más poderosos y usados del mundo.

A diferencia de Python, que se usa mucho en ciencia de datos e inteligencia artificial, JavaScript nació **para la web** y sigue siendo el único lenguaje que todos los navegadores entienden de forma nativa.

**¿Para qué sirve JavaScript?**

- **Hacer páginas web interactivas:** botones que responden, menús que se abren, formularios que validan.
- **Aplicaciones web completas:** Gmail, Google Maps, Twitter, YouTube — todo usa JavaScript.
- **Servidores y back-end:** con Node.js, JavaScript también corre fuera del navegador.
- **Aplicaciones móviles:** React Native permite crear apps para iOS y Android con JavaScript.
- **Juegos en el navegador:** muchos juegos casuales y demos 3D usan JavaScript.

**La trinidad del desarrollo web**

Cuando hablas de crear páginas web, hay tres lenguajes que siempre aparecen juntos:

- **HTML** da la **estructura**: es el esqueleto de la página (títulos, párrafos, botones, imágenes).
- **CSS** da el **estilo**: colores, fuentes, tamaños, animaciones visuales.
- **JavaScript** da la **interacción y la lógica**: reacciona a lo que hace el usuario.

Una forma fácil de recordarlo: imagina un restaurante. HTML es el menú (la lista de platos), CSS es la decoración del local y la presentación de los platos, y JavaScript es el mesero que toma tu pedido y lo lleva a la cocina.

**¿Por qué aprender JavaScript?**

1. Es el lenguaje más popular del mundo según Stack Overflow (más de 10 años consecutivos entre los top 3).
2. Puedes ver los resultados de inmediato en tu propio navegador, sin instalar nada extra.
3. Tiene una comunidad enorme: hay millones de tutoriales, libros y respuestas en internet.
4. Abre puertas al desarrollo web front-end, back-end con Node.js, y mobile con React Native.

**Errores comunes de principiantes:**

- **"JavaScript es lo mismo que Java"** — No tienen nada que ver. Java es un lenguaje completamente distinto. El nombre fue una decisión de marketing de los años 90.
- **"Necesito instalar algo para empezar"** — No. Tu navegador ya tiene un intérprete de JavaScript incorporado. Puedes practicar ahora mismo abriendo la consola.
- **"JavaScript solo sirve para páginas web"** — Hoy en día se usa en servidores, aplicaciones móviles, inteligencia artificial y más.`,
    codeExample: `// Este es un comentario. JavaScript lo ignora al ejecutar el código.
// Los comentarios sirven para explicar qué hace el código.

// La función console.log() muestra valores en la consola del navegador.
console.log("¡Hola, mundo!");

// También puedes mostrar números
console.log(42);
console.log(3.14);

// Y texto con números juntos
console.log("JavaScript fue creado en el año", 1995);

// JavaScript puede hacer operaciones matemáticas
console.log(10 + 5);    // → 15
console.log(100 - 37);  // → 63
console.log(6 * 7);     // → 42
console.log(15 / 3);    // → 5

// ¡Así de simple es empezar con JavaScript!`,
    keyPoints: [
      'JavaScript fue creado en 1995 por Brendan Eich y es el lenguaje nativo de los navegadores web.',
      'Se usa para hacer páginas web interactivas, aplicaciones web, servidores (Node.js) y apps móviles.',
      'HTML da estructura, CSS da estilo, JavaScript da interacción y lógica.',
      'Es el lenguaje de programación más popular del mundo según múltiples encuestas.',
      'No confundas JavaScript con Java — son lenguajes completamente distintos.',
      'console.log() es la función que usamos para mostrar valores en la consola.',
    ],
    exercise: {
      description:
        'Abre el navegador (Chrome o Firefox), presiona F12 para abrir las herramientas de desarrollador y selecciona la pestaña "Console". Escribe console.log("Mi nombre es [tu nombre]") y presiona Enter. ¿Qué ves? Luego intenta console.log(2025 - 1995) para calcular cuántos años tiene JavaScript.',
      hint: 'En Chrome: F12 → pestaña Console. En Firefox: F12 → pestaña Consola. Escribe directamente en la caja al final de la pantalla y presiona Enter para ejecutar.',
    },
    quiz: [
      {
        question: '¿En qué año fue creado JavaScript?',
        options: ['1991', '1995', '2000', '2010'],
        correctAnswer: '1995',
        correctFeedback:
          'Correcto. JavaScript fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape.',
        incorrectFeedback:
          'No es correcto. JavaScript fue creado en 1995 por Brendan Eich. Python, en cambio, fue creado en 1991.',
      },
      {
        question: '¿Cuál es la función que se usa para mostrar valores en la consola en JavaScript?',
        options: ['print()', 'console.log()', 'show()', 'display()'],
        correctAnswer: 'console.log()',
        correctFeedback:
          'Correcto. console.log() es la función estándar para imprimir valores en la consola de JavaScript.',
        incorrectFeedback:
          'No es correcto. En JavaScript usamos console.log() para mostrar valores en la consola. La función print() existe en Python, no en JavaScript.',
      },
      {
        question: '¿Cuál de estas afirmaciones sobre JavaScript y Java es verdadera?',
        options: [
          'JavaScript y Java son el mismo lenguaje',
          'JavaScript es una versión simplificada de Java',
          'JavaScript y Java son lenguajes completamente distintos',
          'Java fue creado después de JavaScript para mejorar sus errores',
        ],
        correctAnswer: 'JavaScript y Java son lenguajes completamente distintos',
        correctFeedback:
          'Correcto. A pesar del nombre similar, JavaScript y Java son lenguajes completamente distintos con sintaxis, propósitos y entornos de ejecución diferentes.',
        incorrectFeedback:
          'No es correcto. JavaScript y Java son lenguajes completamente diferentes. El nombre fue una decisión de marketing de los años 90, no indica ninguna relación técnica.',
      },
      {
        question: '¿Qué rol cumple JavaScript en el desarrollo web junto a HTML y CSS?',
        options: [
          'Da estructura a la página',
          'Define los colores y estilos visuales',
          'Agrega interacción y lógica a la página',
          'Almacena los datos en la base de datos',
        ],
        correctAnswer: 'Agrega interacción y lógica a la página',
        correctFeedback:
          'Correcto. HTML da estructura, CSS da estilo, y JavaScript se encarga de la interacción y la lógica de la página.',
        incorrectFeedback:
          'No es correcto. HTML se encarga de la estructura, CSS de los estilos visuales, y JavaScript es el encargado de agregar interacción y lógica.',
      },
      {
        question: '¿Qué hace este código?\n\nconsole.log(2025 - 1995)',
        options: [
          'Muestra el texto "2025 - 1995" en la consola',
          'Muestra el número 30 en la consola',
          'Guarda el resultado en una variable',
          'Produce un error porque no puede restar números',
        ],
        correctAnswer: 'Muestra el número 30 en la consola',
        correctFeedback:
          'Correcto. JavaScript evalúa la expresión 2025 - 1995 = 30 y muestra el resultado en la consola.',
        incorrectFeedback:
          'No es correcto. JavaScript calcula primero la operación matemática (2025 - 1995 = 30) y luego console.log() muestra ese resultado.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'javascript-en-nuestro-dia-a-dia',
    title: 'JavaScript en nuestro día a día',
    module: 'Introducción a JavaScript',
    moduleNumber: 1,
    order: 2,
    description:
      'Descubre cómo JavaScript está presente en muchas páginas y aplicaciones que usas todos los días, desde botones interactivos hasta formularios, menús, carritos de compra, mapas, chats y redes sociales.',
    explanation: `¿Alguna vez pensaste que cuando haces clic en un botón de una página web y algo cambia sin que la página se recargue, hay código JavaScript trabajando en ese momento? JavaScript está en casi todo lo que hacemos en internet.

**Una analogía útil**

Imagina una tienda física. El edificio con sus paredes, estantes y productos es el **HTML** — la estructura. La decoración, los colores, los letreros y la distribución visual son el **CSS** — el estilo. Y los empleados que te atienden, procesan tu compra, responden tus preguntas y actualizan el inventario son **JavaScript** — la interacción y la lógica.

Una página web sin JavaScript puede ser como un póster: puedes leerlo y verlo. Una página web con JavaScript puede sentirse más como una app: reacciona, cambia, valida, calcula y responde a lo que el usuario hace.

**¿Dónde está JavaScript en tu día a día?**

- **Botones que reaccionan:** cuando haces clic en "Me gusta" en una red social y el contador sube sin recargar la página.
- **Menús que se abren y cierran:** el menú hamburguesa en móvil que aparece y desaparece con un toque.
- **Formularios inteligentes:** cuando escribes un correo con formato incorrecto y el formulario te avisa antes de enviar.
- **Carritos de compra:** cuando agregas un producto y el ícono del carrito se actualiza al instante.
- **Chats en tiempo real:** cuando ves los mensajes de WhatsApp Web, Slack o un chat de soporte aparecer sin recargar.
- **Mapas interactivos:** cuando arrastras el mapa de Google Maps o haces zoom.
- **Recomendaciones dinámicas:** cuando YouTube actualiza sugerencias mientras navegas.
- **Loaders y animaciones:** los círculos giratorios o barras de progreso que ves mientras carga algo.
- **Filtros de búsqueda:** cuando filtras productos por precio y los resultados cambian sin recargar.
- **Notificaciones en el navegador:** los pequeños avisos que aparecen en la esquina de la pantalla.

**El código detrás de un botón**

No necesitas entender completamente este código todavía. El objetivo es solo ver que JavaScript puede detectar un clic y hacer algo:

\`\`\`html
<button id="saludo">Haz clic aquí</button>
\`\`\`

\`\`\`js
const boton = document.querySelector("#saludo");

boton.addEventListener("click", function () {
  alert("¡Hola! JavaScript respondió a tu clic.");
});
\`\`\`

Cuando el usuario hace clic en el botón, JavaScript detecta ese evento y ejecuta la función. Esto es lo que hace que las páginas "respondan".

**JavaScript también vive fuera del navegador**

Con **Node.js** (un entorno creado en 2009), JavaScript puede correr en servidores, leer archivos, conectarse a bases de datos y hacer todo lo que hace el back-end de una aplicación. Pero en este módulo nos enfocamos en lo más visible: JavaScript en el navegador, haciendo páginas interactivas.`,
    codeExample: `// Ejemplo 1: mostrar un mensaje después de un clic
// (Este código funciona en una página HTML, no en la consola sola)

const boton = document.querySelector("#saludo");

boton.addEventListener("click", function () {
  alert("¡Hola! JavaScript respondió a tu clic.");
});

// ──────────────────────────────────────────────────

// Ejemplo 2: lo que puedes hacer con console.log() por ahora
// (Esto sí puedes probarlo en la consola del navegador)

console.log("JavaScript puede mostrar texto");
console.log("JavaScript puede calcular:", 150 * 2);
console.log("JavaScript puede comparar:", 10 > 5);   // → true
console.log("JavaScript puede construir texto:", "Hola, " + "mundo");`,
    keyPoints: [
      'JavaScript está presente en casi todas las páginas web modernas que usamos a diario.',
      'HTML da estructura, CSS da estilo, y JavaScript agrega interacción y lógica.',
      'Ejemplos cotidianos: botones, menús, formularios, carritos, chats, mapas, filtros.',
      'Una página sin JavaScript es como un póster; con JavaScript se convierte en una app.',
      'JavaScript puede escuchar eventos del usuario (clics, teclado) y responder a ellos.',
      'Con Node.js, JavaScript también corre en servidores, fuera del navegador.',
    ],
    exercise: {
      description:
        'Piensa en 3 páginas o apps web que usas frecuentemente (por ejemplo: YouTube, Instagram, Google Maps). Para cada una, escribe al menos 2 funcionalidades que probablemente usen JavaScript. Piensa en cosas que cambian o reaccionan sin recargar la página.',
      hint: 'Pistas: ¿hay botones que hacen algo? ¿El contenido cambia sin que la URL cambie? ¿Hay notificaciones, cargadores, filtros o animaciones? Todas esas son señales de JavaScript.',
    },
    quiz: [
      {
        question: '¿Cuál de estos ejemplos probablemente usa JavaScript?',
        options: [
          'Un título estático en una página',
          'Un botón que abre un menú al hacer clic',
          'El color de fondo definido en CSS',
          'Una imagen guardada en una carpeta',
        ],
        correctAnswer: 'Un botón que abre un menú al hacer clic',
        correctFeedback:
          'Correcto. Cuando una página responde a una acción del usuario, como abrir un menú al hacer clic, JavaScript está involucrado.',
        incorrectFeedback:
          'No exactamente. JavaScript se usa principalmente para agregar interacción y lógica. Un botón que abre un menú al hacer clic es un ejemplo claro de interacción manejada por JavaScript.',
      },
      {
        question: 'Según la analogía de la lección, ¿a qué se parece una página web sin JavaScript?',
        options: [
          'A una aplicación móvil completa',
          'A un póster: puedes leerlo y verlo, pero no interactúa',
          'A un servidor que procesa datos',
          'A una base de datos con información',
        ],
        correctAnswer: 'A un póster: puedes leerlo y verlo, pero no interactúa',
        correctFeedback:
          'Correcto. Sin JavaScript, una página puede mostrar contenido pero no reacciona a lo que hace el usuario.',
        incorrectFeedback:
          'No es correcto. La analogía de la lección dice que una página sin JavaScript es como un póster: puedes leerlo, pero no responde ni reacciona.',
      },
      {
        question: '¿Cuál de estas características es responsabilidad de JavaScript en una página web?',
        options: [
          'Definir el tamaño y color de los textos',
          'Organizar los párrafos y títulos en la página',
          'Validar que un formulario tenga el formato correcto antes de enviarlo',
          'Guardar imágenes en el servidor',
        ],
        correctAnswer: 'Validar que un formulario tenga el formato correcto antes de enviarlo',
        correctFeedback:
          'Correcto. La validación de formularios es una tarea típica de JavaScript: detecta errores y avisa al usuario sin necesidad de recargar la página.',
        incorrectFeedback:
          'No es correcto. Definir tamaños y colores es tarea de CSS. Organizar párrafos es tarea de HTML. Guardar imágenes en el servidor puede implicar back-end. JavaScript se ocupa de la interacción, como validar formularios.',
      },
      {
        question: '¿Qué hace addEventListener("click", ...) en JavaScript?',
        options: [
          'Crea un botón en la página',
          'Espera a que el usuario haga clic y ejecuta una función',
          'Cambia el color de un elemento',
          'Recarga la página automáticamente',
        ],
        correctAnswer: 'Espera a que el usuario haga clic y ejecuta una función',
        correctFeedback:
          'Correcto. addEventListener escucha eventos del usuario (como clics) y ejecuta el código que le indiques cuando ese evento ocurre.',
        incorrectFeedback:
          'No es correcto. addEventListener es un método que "escucha" eventos. Cuando el usuario realiza la acción indicada (por ejemplo, un clic), ejecuta la función que le pasamos.',
      },
      {
        question: '¿Qué es Node.js?',
        options: [
          'Un navegador web alternativo a Chrome',
          'Un entorno que permite ejecutar JavaScript fuera del navegador',
          'Una librería de CSS para hacer diseños responsivos',
          'Una base de datos para guardar datos de JavaScript',
        ],
        correctAnswer: 'Un entorno que permite ejecutar JavaScript fuera del navegador',
        correctFeedback:
          'Correcto. Node.js es un entorno de ejecución creado en 2009 que permite usar JavaScript en servidores y otros contextos fuera del navegador.',
        incorrectFeedback:
          'No es correcto. Node.js es un entorno de ejecución que permite correr JavaScript en el servidor y en otros contextos fuera del navegador web.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'javascript-en-el-navegador',
    title: 'JavaScript en el navegador',
    module: 'Introducción a JavaScript',
    moduleNumber: 1,
    order: 3,
    description:
      'Aprende cómo JavaScript se ejecuta en el navegador y cómo permite crear páginas web interactivas.',
    explanation: `Todos los navegadores modernos (Chrome, Firefox, Safari, Edge) tienen un **motor de JavaScript** incorporado. Este motor lee y ejecuta el código JavaScript de forma automática cuando cargas una página web.

**¿Cómo llega JavaScript al navegador?**

Cuando visitas una página web, el servidor envía tres tipos de archivos a tu navegador:
1. Un archivo **HTML** con la estructura.
2. Uno o más archivos **CSS** con los estilos.
3. Uno o más archivos **JavaScript** con la lógica.

El navegador los procesa y muestra el resultado visual. El motor de JavaScript ejecuta los scripts y hace que la página reaccione.

**La consola del navegador**

La herramienta más útil para aprender JavaScript es la **consola del navegador**. Puedes abrirla con **F12** (o Cmd+Option+J en Mac) y seleccionar la pestaña "Console".

En la consola puedes:
- Ejecutar código JavaScript directamente.
- Ver los mensajes de console.log().
- Ver errores que ocurren en la página.
- Inspeccionar valores de variables.

Es como tener un cuaderno de borrador donde puedes probar ideas sin romper nada.

**¿Cómo ejecuta el navegador el JavaScript?**

El proceso es:
1. El navegador descarga el archivo HTML.
2. Mientras construye la página, encuentra una etiqueta \`<script>\`.
3. Pausa, descarga y ejecuta el script de JavaScript.
4. Continúa construyendo el resto de la página.

Por eso en HTML moderno se recomienda poner los scripts al final del \`<body>\` o usar el atributo \`defer\`, para que no bloqueen la carga de la página.

**El motor de JavaScript**

Cada navegador tiene su propio motor:
- Chrome y Edge usan **V8** (también es el motor de Node.js).
- Firefox usa **SpiderMonkey**.
- Safari usa **JavaScriptCore** (también llamado Nitro).

Todos siguen el mismo estándar llamado **ECMAScript**, por lo que el código JavaScript que escribes funciona en todos los navegadores modernos.

**Errores comunes:**

- **Ver una pantalla en blanco por un error de JavaScript:** abre la consola con F12 y busca el mensaje de error en rojo.
- **"Mi código no hace nada":** verifica que el archivo .js esté correctamente vinculado en el HTML con \`<script src="...">\`.
- **Diferencias entre navegadores:** el código JavaScript moderno funciona igual en todos los navegadores actuales si evitas características muy nuevas o muy antiguas.`,
    codeExample: `// ── Probar en la consola del navegador (F12 → Console) ──

// 1. Mostrar texto
console.log("¡Hola desde la consola!");

// 2. Hacer cálculos
console.log(12 * 8);      // → 96
console.log(2 ** 10);     // → 1024 (2 elevado a la 10)

// 3. Preguntar por el tipo de un valor
console.log(typeof "hola");    // → "string"
console.log(typeof 42);        // → "number"
console.log(typeof true);      // → "boolean"

// 4. Ver si una condición es verdadera o falsa
console.log(10 > 5);     // → true
console.log(3 === 4);    // → false

// ── En un archivo .js vinculado a HTML ────────────────────────────────────

// archivo: script.js
console.log("El script se cargó correctamente");

// ── En HTML ───────────────────────────────────────────────────────────────

// <!DOCTYPE html>
// <html>
//   <head><title>Mi página</title></head>
//   <body>
//     <h1>Hola</h1>
//     <script src="script.js"></script>   ← al final del body
//   </body>
// </html>`,
    keyPoints: [
      'Todos los navegadores modernos tienen un motor de JavaScript incorporado.',
      'La consola del navegador (F12) es la herramienta principal para practicar y depurar JavaScript.',
      'El motor de JavaScript más conocido es V8, usado en Chrome, Edge y Node.js.',
      'Todos los motores siguen el estándar ECMAScript, por lo que el código funciona en todos los navegadores.',
      'Los scripts se vinculan al HTML con <script src="archivo.js"></script>.',
      'Si algo no funciona, abre la consola: los errores aparecen en rojo con información útil.',
    ],
    exercise: {
      description:
        'Abre la consola de tu navegador (F12 → Console). Ejecuta los siguientes comandos uno por uno y anota qué muestra cada uno: 1) typeof 42, 2) typeof "hola", 3) typeof true, 4) 2 ** 8, 5) console.log("Estoy aprendiendo JavaScript"). ¿Qué patrón observas en los resultados de typeof?',
      hint: 'typeof es un operador que te dice el tipo de dato de un valor. Prueba también typeof null y typeof undefined — los resultados pueden sorprenderte.',
    },
    quiz: [
      {
        question: '¿Qué herramienta del navegador permite ejecutar JavaScript directamente sin crear archivos?',
        options: [
          'El inspector de elementos',
          'La pestaña Network',
          'La consola del navegador',
          'El panel de aplicaciones',
        ],
        correctAnswer: 'La consola del navegador',
        correctFeedback:
          'Correcto. La consola (F12 → Console) permite escribir y ejecutar JavaScript directamente en el navegador.',
        incorrectFeedback:
          'No es correcto. La consola del navegador (accesible con F12 → Console) es donde puedes escribir y ejecutar código JavaScript de forma inmediata.',
      },
      {
        question: '¿Qué hace el operador typeof en JavaScript?',
        options: [
          'Convierte un valor a otro tipo',
          'Elimina el tipo de una variable',
          'Indica el tipo de dato de un valor',
          'Compara dos valores por tipo',
        ],
        correctAnswer: 'Indica el tipo de dato de un valor',
        correctFeedback:
          'Correcto. typeof devuelve una cadena de texto que indica el tipo del valor: "string", "number", "boolean", etc.',
        incorrectFeedback:
          'No es correcto. typeof es un operador que devuelve el tipo de dato de un valor como texto: "string", "number", "boolean", entre otros.',
      },
      {
        question: '¿Qué motor de JavaScript usa el navegador Chrome?',
        options: ['SpiderMonkey', 'JavaScriptCore', 'V8', 'Chakra'],
        correctAnswer: 'V8',
        correctFeedback:
          'Correcto. Chrome (y también Edge y Node.js) usa el motor V8, desarrollado por Google.',
        incorrectFeedback:
          'No es correcto. Chrome usa el motor V8. SpiderMonkey es de Firefox y JavaScriptCore (Nitro) es de Safari.',
      },
      {
        question: '¿Qué resultado muestra este código?\n\nconsole.log(2 ** 3)',
        options: ['6', '8', '23', 'Error'],
        correctAnswer: '8',
        correctFeedback:
          'Correcto. El operador ** es el operador de potencia. 2 ** 3 = 2 × 2 × 2 = 8.',
        incorrectFeedback:
          'No es correcto. El operador ** calcula potencias. 2 ** 3 significa 2 elevado a la 3, que es 2 × 2 × 2 = 8.',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'donde-escribir-javascript',
    title: '¿Dónde puedo escribir JavaScript?',
    module: 'Introducción a JavaScript',
    moduleNumber: 1,
    order: 4,
    description:
      'Conoce diferentes formas de escribir y probar JavaScript, desde la consola del navegador hasta Visual Studio Code.',
    explanation: `Una de las ventajas de JavaScript es que puedes empezar a practicarlo sin instalar nada. Existen varias formas de escribirlo y ejecutarlo, cada una útil para diferentes situaciones.

**1. La consola del navegador (para practicar al instante)**

Ya la mencionamos en la lección anterior. Es la forma más rápida de probar una idea o un concepto. Simplemente abres el navegador, presionas F12, vas a la pestaña Console y escribes código.

Ideal para: experimentos rápidos, verificar cómo funciona algo, depurar problemas.

**2. La etiqueta \`<script>\` en HTML (forma básica)**

Puedes escribir JavaScript directamente dentro de tu HTML usando la etiqueta \`<script>\`:

\`\`\`html
<script>
  console.log("Hola desde el script");
</script>
\`\`\`

No se recomienda para proyectos grandes, pero es útil para aprender los primeros conceptos.

**3. Archivo .js externo (forma correcta para proyectos)**

La forma más ordenada es crear un archivo separado con extensión .js y vincularlo al HTML:

\`\`\`html
<script src="script.js"></script>
\`\`\`

Esto separa la estructura (HTML) de la lógica (JavaScript) y facilita el mantenimiento.

**4. Visual Studio Code (el editor más popular)**

VS Code es un editor de código gratuito creado por Microsoft. Es el más usado por desarrolladores de JavaScript en el mundo. Ventajas:
- Resalta la sintaxis con colores.
- Autocompleta código mientras escribes.
- Muestra errores antes de ejecutar.
- Tiene miles de extensiones útiles.

Para usarlo con JavaScript, solo crea un archivo .html y un archivo .js, ábrelos con VS Code y vincula el .js al .html.

**5. Plataformas online (para practicar sin instalar nada)**

Existen editores en línea donde puedes escribir HTML, CSS y JavaScript y ver el resultado en tiempo real:
- **CodePen** (codepen.io): perfecto para prototipos y demos.
- **JSFiddle** (jsfiddle.net): clásico para compartir ejemplos de código.
- **StackBlitz** o **Replit**: para proyectos más completos.

Para este curso, puedes usar la consola del navegador o cualquiera de estas plataformas para practicar.

**¿Cuál usar según el caso?**

| Situación | Herramienta recomendada |
|-----------|------------------------|
| Probar una idea rápida | Consola del navegador |
| Aprender conceptos básicos | Consola o CodePen |
| Proyecto pequeño | VS Code + archivo .js |
| Proyecto real o profesional | VS Code + Node.js |`,
    codeExample: `// ── Opción 1: Consola del navegador ──────────────────────────────────────
// Abre F12 → Console y escribe directamente:

let nombre = "Camila";
console.log("Hola, " + nombre);
// → Hola, Camila

// ── Opción 2: Script en HTML ───────────────────────────────────────────────
// Crea un archivo index.html con este contenido:

// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <title>Mi primer JS</title>
// </head>
// <body>
//   <h1>Hola desde HTML</h1>
//   <script>
//     console.log("¡JavaScript funciona!");
//   </script>
// </body>
// </html>

// ── Opción 3: Archivo JS externo ─────────────────────────────────────────
// Crea script.js con:

console.log("Este código está en un archivo .js separado");

// Y en tu HTML agrega antes de </body>:
// <script src="script.js"></script>`,
    keyPoints: [
      'La consola del navegador (F12) permite ejecutar JavaScript sin instalar nada.',
      'Puedes escribir JavaScript directamente en HTML con la etiqueta <script>.',
      'La forma más ordenada es usar archivos .js externos vinculados al HTML.',
      'VS Code es el editor más popular para JavaScript y tiene muchas herramientas útiles.',
      'CodePen, JSFiddle y StackBlitz son plataformas online para practicar sin instalar nada.',
      'Para este curso, la consola del navegador o CodePen son suficientes para aprender.',
    ],
    exercise: {
      description:
        'Elige una de estas opciones y pruébala: (A) Abre la consola del navegador (F12) y escribe al menos 3 instrucciones console.log() con diferentes tipos de valores. (B) Crea un archivo index.html y un script.js, vincula el JS al HTML, y escribe un console.log() en el archivo .js. Abre el HTML en el navegador y verifica que aparezca el mensaje en la consola.',
      hint: 'Si eliges la opción B: guarda los archivos en la misma carpeta, escribe <script src="script.js"></script> justo antes de </body> en tu HTML, y abre el archivo index.html directamente en el navegador (doble clic).',
    },
    quiz: [
      {
        question: '¿Cuál de estas opciones NO es una forma válida de ejecutar JavaScript?',
        options: [
          'En la consola del navegador',
          'En un archivo .js vinculado a HTML',
          'Directamente en un archivo .css',
          'En plataformas online como CodePen',
        ],
        correctAnswer: 'Directamente en un archivo .css',
        correctFeedback:
          'Correcto. Los archivos .css son para estilos, no para código JavaScript. JavaScript va en archivos .js o dentro de etiquetas <script>.',
        incorrectFeedback:
          'No es correcto. Los archivos .css son exclusivamente para estilos. JavaScript debe ir en archivos .js o dentro de etiquetas <script> en HTML.',
      },
      {
        question: '¿Qué etiqueta HTML se usa para vincular un archivo JavaScript externo?',
        options: ['<js src="..."></js>', '<script src="..."></script>', '<link href="..."></link>', '<code src="..."></code>'],
        correctAnswer: '<script src="..."></script>',
        correctFeedback:
          'Correcto. La etiqueta <script src="archivo.js"></script> vincula un archivo JavaScript externo a tu página HTML.',
        incorrectFeedback:
          'No es correcto. Para vincular JavaScript externo usamos <script src="archivo.js"></script>. La etiqueta <link> se usa para CSS.',
      },
      {
        question: '¿Cuál es la ventaja principal de usar un archivo .js externo en lugar de escribir el JavaScript dentro del HTML?',
        options: [
          'El código corre más rápido',
          'Separa la lógica de la estructura y facilita el mantenimiento',
          'Evita errores de JavaScript',
          'El navegador no necesita F12 para verlo',
        ],
        correctAnswer: 'Separa la lógica de la estructura y facilita el mantenimiento',
        correctFeedback:
          'Correcto. Separar el JavaScript en archivos .js aparte hace el código más organizado y fácil de mantener a medida que el proyecto crece.',
        incorrectFeedback:
          'No es correcto. La ventaja principal de archivos .js externos es la separación de responsabilidades: HTML para estructura, JS para lógica. Esto hace el código más organizado y mantenible.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'hola-mundo-javascript',
    title: 'Tu primer programa: Hola Mundo',
    module: 'Introducción a JavaScript',
    moduleNumber: 1,
    order: 5,
    description:
      'Escribe tu primer programa en JavaScript usando console.log() y entiende cómo ver resultados en la consola.',
    explanation: `La tradición de programación dice que el primer programa que escribe cualquier persona al aprender un lenguaje nuevo es el "Hola Mundo". Es simplemente un programa que muestra ese mensaje en la pantalla (o en la consola). Es simple, pero importante: confirma que todo funciona y que ya puedes ejecutar código.

**console.log() — tu mejor amiga al aprender**

\`console.log()\` es la función más usada cuando aprendes JavaScript. Sirve para:
- Ver el valor de una variable.
- Confirmar que una parte del código se ejecutó.
- Entender qué está pasando cuando algo no funciona.

La palabra \`console\` se refiere a la consola del navegador, y \`log\` significa "registrar" o "mostrar". Juntos, \`console.log()\` significa "muestra esto en la consola".

**¿Qué puede mostrar console.log()?**

Casi cualquier cosa: texto, números, booleanos, resultados de operaciones, variables, y más. Puedes pasarle uno o varios valores separados por comas.

**Puntos y comas en JavaScript**

En JavaScript, las instrucciones terminan con punto y coma \`;\`. Técnicamente son opcionales en muchos casos (JavaScript los inserta automáticamente en ciertos momentos), pero es una buena práctica escribirlos para evitar comportamientos inesperados.

**Mayúsculas y minúsculas importan**

JavaScript distingue entre mayúsculas y minúsculas. \`console.log()\` funciona, pero \`Console.Log()\` o \`CONSOLE.LOG()\` causarán un error. Esta característica se llama **case sensitive**.

**Comentarios**

Puedes agregar comentarios a tu código con \`//\` para una línea o \`/* ... */\` para varias líneas. Los comentarios son ignorados por JavaScript y sirven para explicar el código a quien lo lee (o a ti mismo en el futuro).

**Errores comunes al empezar:**

- Olvidar los paréntesis: \`console.log\` sin \`()\` no llama a la función.
- Olvidar las comillas: \`console.log(hola)\` busca una variable llamada \`hola\`, no el texto.
- Escribir en mayúsculas: \`Console.Log()\` produce un error.`,
    codeExample: `// ── Mi primer programa en JavaScript ────────────────────────────────────

// Mostrar texto (siempre entre comillas)
console.log("¡Hola, mundo!");

// Mostrar números (sin comillas)
console.log(42);
console.log(3.1416);

// Mostrar el resultado de una operación
console.log(100 + 200);        // → 300
console.log("10 + 20 =", 10 + 20); // → 10 + 20 = 30

// Mostrar varios valores juntos separados por comas
console.log("Nombre:", "Sofía", "Edad:", 25);

// Comentarios de una línea
// Esta línea es un comentario, JavaScript la ignora

/* Comentario
   de varias
   líneas */

// Errores comunes (NO hagas esto):
// console.log("Hola")   ← bien ✓
// console.log(Hola)     ← error: busca una variable llamada Hola
// Console.Log("Hola")   ← error: JavaScript es case sensitive
// console.log("Hola"    ← error: falta el paréntesis de cierre`,
    keyPoints: [
      'console.log() muestra valores en la consola del navegador y es la función más usada al aprender.',
      'Puedes mostrar texto (entre comillas), números, booleanos y resultados de operaciones.',
      'JavaScript es case sensitive: console.log() funciona, Console.Log() genera error.',
      'Los comentarios con // o /* */ son ignorados por JavaScript y ayudan a documentar el código.',
      'El punto y coma ; al final de cada instrucción es buena práctica aunque no siempre obligatorio.',
      'El primer programa de cualquier lenguaje por tradición muestra "¡Hola, mundo!".',
    ],
    exercise: {
      description:
        'Escribe un programa en la consola del navegador que muestre: tu nombre, tu edad, el resultado de multiplicar tu edad por 2, y el mensaje "Estoy aprendiendo JavaScript". Usa console.log() para cada uno. Intenta también combinar texto y números en un solo console.log() usando comas.',
      hint: 'Recuerda: el texto va entre comillas ("texto") y los números van sin comillas (25). Para combinar: console.log("Mi nombre es:", "Ana", "y tengo", 22, "años").',
    },
    quiz: [
      {
        question: '¿Qué produce este código?\n\nconsole.log("Hola", "mundo")',
        options: [
          '"Hola" en una línea y "mundo" en otra',
          'Un error porque hay dos argumentos',
          'Hola mundo (separado por un espacio)',
          '"Holamundo" sin espacio',
        ],
        correctAnswer: 'Hola mundo (separado por un espacio)',
        correctFeedback:
          'Correcto. Cuando pasas varios argumentos a console.log() separados por comas, los muestra todos en la misma línea separados por un espacio.',
        incorrectFeedback:
          'No es correcto. console.log() acepta múltiples argumentos separados por comas y los muestra en la misma línea con un espacio entre ellos.',
      },
      {
        question: '¿Cuál de estos console.log() producirá un error?',
        options: [
          'console.log("Hola")',
          'console.log(42)',
          'Console.Log("Hola")',
          'console.log(10 + 5)',
        ],
        correctAnswer: 'Console.Log("Hola")',
        correctFeedback:
          'Correcto. JavaScript es case sensitive. Console.Log con mayúsculas no es reconocido. La forma correcta es console.log con todo en minúsculas.',
        incorrectFeedback:
          'No es correcto. El error está en Console.Log con mayúsculas. JavaScript distingue mayúsculas de minúsculas, por lo que solo console.log (todo en minúsculas) es correcto.',
      },
      {
        question: '¿Qué muestra este código en la consola?\n\nconsole.log(5 * 4)',
        options: ['5 * 4', '"5 * 4"', '20', 'Error'],
        correctAnswer: '20',
        correctFeedback:
          'Correcto. Cuando pasas una expresión matemática a console.log(), JavaScript la calcula primero y muestra el resultado: 5 * 4 = 20.',
        incorrectFeedback:
          'No es correcto. Sin comillas, JavaScript evalúa 5 * 4 como una operación matemática y muestra el resultado: 20.',
      },
      {
        question: '¿Para qué sirven los comentarios en JavaScript?',
        options: [
          'Para mostrar mensajes en la pantalla',
          'Para pausar la ejecución del programa',
          'Para explicar el código; son ignorados por JavaScript',
          'Para declarar variables',
        ],
        correctAnswer: 'Para explicar el código; son ignorados por JavaScript',
        correctFeedback:
          'Correcto. Los comentarios son notas para los humanos que leen el código. JavaScript los ignora completamente al ejecutar el programa.',
        incorrectFeedback:
          'No es correcto. Los comentarios son notas de texto que JavaScript ignora por completo. Sirven para explicar qué hace el código a quien lo lea.',
      },
    ],
  },

  // ── Lección 6 ────────────────────────────────────────────────────────────
  {
    slug: 'leer-script-simple',
    title: 'Cómo leer un script simple',
    module: 'Introducción a JavaScript',
    moduleNumber: 1,
    order: 6,
    description:
      'Aprende a leer código JavaScript línea por línea para entender qué hace un programa básico.',
    explanation: `Una habilidad fundamental que desarrollarás como programador es **leer código de otros** (o tuyo propio escrito hace tiempo) y entender qué hace. Esta habilidad se llama "lectura de código" y mejora con la práctica.

**¿Cómo se lee un programa?**

JavaScript ejecuta el código de **arriba hacia abajo, línea por línea**. Cuando el intérprete llega a una instrucción, la ejecuta antes de pasar a la siguiente. Excepciones: funciones, condicionales y bucles (que aprenderemos más adelante), que pueden cambiar ese orden.

Por ahora, con lo que sabemos, podemos leer un programa así:

1. Encuentra las instrucciones (líneas sin //).
2. Lee cada instrucción de arriba a abajo.
3. Pregúntate: ¿qué hace esta línea? ¿Guarda un valor? ¿Muestra algo?
4. Sigue el flujo del programa mentalmente.

**Anatomía de una instrucción básica**

Una instrucción en JavaScript puede ser:
- **Una llamada a función:** \`console.log("Hola")\` — llama a la función console.log.
- **Una declaración de variable:** \`let nombre = "Ana"\` — crea una variable con un valor.
- **Una operación:** \`let resultado = 10 + 5\` — calcula y guarda el resultado.

**Leer errores**

Cuando hay un error, JavaScript muestra un mensaje en la consola con:
- El **tipo de error** (por ejemplo, \`ReferenceError\`, \`TypeError\`, \`SyntaxError\`).
- El **archivo y la línea** donde ocurrió.
- Una **descripción** del problema.

Aprender a leer errores es tan importante como aprender a escribir código. No te asustes cuando aparezca un error en rojo — es información valiosa.

**Estrategia para entender un script desconocido:**

1. Lee todo el código de un vistazo para hacerte una idea general.
2. Identifica las variables y qué valor tienen.
3. Sigue el orden de ejecución (de arriba a abajo).
4. Usa console.log() para ver valores en puntos específicos si algo no está claro.`,
    codeExample: `// ── Script de ejemplo para aprender a leer ──────────────────────────────
// Léelo línea por línea y predice qué mostrará antes de ejecutarlo.

// Línea 1: declaramos una variable llamada "producto" con el valor "Laptop"
let producto = "Laptop";

// Línea 2: declaramos una variable llamada "precio" con el valor 850
let precio = 850;

// Línea 3: declaramos una variable con el resultado de un cálculo
let precioConDescuento = precio * 0.9; // 10% de descuento

// Línea 4: mostramos el producto
console.log("Producto:", producto);
// → Producto: Laptop

// Línea 5: mostramos el precio original
console.log("Precio original:", precio);
// → Precio original: 850

// Línea 6: mostramos el precio con descuento
console.log("Precio con 10% de descuento:", precioConDescuento);
// → Precio con 10% de descuento: 765

// Línea 7: verificamos si el precio está por debajo de 1000
console.log("¿Cuesta menos de $1000?", precio < 1000);
// → ¿Cuesta menos de $1000? true

// ── ¿Qué aprendemos de este script? ──────────────────────────────────────
// 1. Las variables guardan valores (texto, número, resultado de cálculo).
// 2. Podemos usar variables en operaciones y en console.log().
// 3. JavaScript evalúa comparaciones y devuelve true o false.
// 4. El código se ejecuta línea por línea de arriba hacia abajo.`,
    keyPoints: [
      'JavaScript ejecuta el código de arriba hacia abajo, línea por línea.',
      'Para leer un script: identifica variables, sigue el orden y pregúntate qué hace cada línea.',
      'Una instrucción puede declarar una variable, llamar una función o hacer una operación.',
      'Los errores en la consola muestran tipo, archivo, línea y descripción del problema.',
      'Usar console.log() en puntos específicos ayuda a entender qué valor tiene una variable.',
      'Leer código ajeno y entender errores son habilidades tan importantes como escribir código.',
    ],
    exercise: {
      description:
        'Lee el siguiente código y **antes de ejecutarlo**, predice qué mostrará en la consola: let nombre = "Carlos"; let edad = 30; let anioNacimiento = 2025 - edad; console.log("Nombre:", nombre); console.log("Nació en:", anioNacimiento); console.log("¿Es mayor de 18?", edad > 18). Luego ejecútalo en la consola del navegador y comprueba si acertaste.',
      hint: 'Sigue el código línea por línea. Primero se asignan los valores, luego se calculan, y al final se muestran. Presta atención a qué valor tiene cada variable cuando llega a console.log().',
    },
    quiz: [
      {
        question: '¿En qué orden ejecuta JavaScript el código por defecto?',
        options: [
          'De abajo hacia arriba',
          'En orden aleatorio',
          'De arriba hacia abajo, línea por línea',
          'Solo las líneas que no tienen comentarios',
        ],
        correctAnswer: 'De arriba hacia abajo, línea por línea',
        correctFeedback:
          'Correcto. Por defecto, JavaScript ejecuta el código secuencialmente de arriba hacia abajo. Esto cambia con funciones, condicionales y bucles, que aprenderemos más adelante.',
        incorrectFeedback:
          'No es correcto. JavaScript ejecuta el código de arriba hacia abajo, línea por línea. El orden puede cambiar con estructuras como funciones y condicionales.',
      },
      {
        question: '¿Qué muestra la consola con este código?\n\nlet x = 5;\nlet y = x * 2;\nconsole.log(y)',
        options: ['x * 2', '5', '10', 'undefined'],
        correctAnswer: '10',
        correctFeedback:
          'Correcto. Primero x vale 5, luego y se calcula como 5 * 2 = 10, y console.log(y) muestra ese valor: 10.',
        incorrectFeedback:
          'No es correcto. El código sigue este orden: x = 5, luego y = 5 * 2 = 10. Entonces console.log(y) muestra 10.',
      },
      {
        question: '¿Qué tipo de información incluye un mensaje de error en la consola de JavaScript?',
        options: [
          'Solo el número de línea del error',
          'El tipo de error, el archivo, la línea y una descripción',
          'Solo el tipo de error (ReferenceError, TypeError, etc.)',
          'Un código de error numérico sin explicación',
        ],
        correctAnswer: 'El tipo de error, el archivo, la línea y una descripción',
        correctFeedback:
          'Correcto. Los errores de JavaScript en la consola incluyen el tipo (ej. ReferenceError), el archivo, la línea donde ocurrió y una descripción del problema.',
        incorrectFeedback:
          'No es correcto. Los mensajes de error de JavaScript son bastante informativos: incluyen el tipo de error, la ubicación (archivo y línea) y una descripción del problema.',
      },
    ],
  },
]

export const jsModule1: Module = {
  number: 1,
  title: 'Introducción a JavaScript',
  level: 'básico',
  lessons: lessonsJsModule1,
}
