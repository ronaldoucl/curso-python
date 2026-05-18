import type { Lesson, Module } from '@/types'

export const lessonsJsModule11: Lesson[] = [
  {
    slug: 'que-es-el-dom',
    title: '¿Qué es el DOM?',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 76,
    description:
      'Aprende qué es el DOM y cómo el navegador convierte el HTML en una estructura que JavaScript puede leer y modificar.',
    explanation: `## ¿Qué es el DOM?

El **DOM** (Document Object Model) es la representación del HTML de tu página como un árbol de objetos que JavaScript puede leer y modificar en tiempo real.

### La analogía del edificio

Piensa así:
- El **HTML** es el **plano del edificio** — describe cómo debe verse la estructura.
- El **DOM** es el **edificio real** — lo que el navegador construye a partir de ese plano.
- **JavaScript** es el **arquitecto en vivo** — puede entrar al edificio y mover paredes, pintar, agregar muebles.

### ¿Cómo lo construye el navegador?

Cuando abres una página web, el navegador:
1. Descarga el HTML.
2. Lo **parsea** (lee y analiza).
3. Construye un **árbol de nodos** llamado DOM.
4. Renderiza la página en pantalla.

### El árbol del DOM

Cada elemento HTML se convierte en un **nodo** del árbol:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Esto es un párrafo.</p>
  </body>
</html>
\`\`\`

El DOM de ese HTML se ve así (árbol):

\`\`\`
document
└── html
    ├── head
    │   └── title → "Mi página"
    └── body
        ├── h1 → "Hola mundo"
        └── p → "Esto es un párrafo."
\`\`\`

### JavaScript accede al DOM con \`document\`

El objeto global \`document\` es el punto de entrada al DOM:

\`\`\`js
console.log(document.title)   // "Mi página"
console.log(document.body)    // <body>...</body>
\`\`\`

### ¿Por qué importa?

Sin el DOM, JavaScript no podría:
- Cambiar el texto de un botón.
- Mostrar u ocultar elementos.
- Leer lo que el usuario escribió en un formulario.
- Crear páginas interactivas.

El DOM es el puente entre tu código JavaScript y la pantalla del usuario.`,
    codeExample: `// El objeto 'document' representa toda la página HTML

// Ver el título de la página
console.log(document.title)

// Ver el elemento <body>
console.log(document.body)

// El DOM es un árbol — puedes navegar sus nodos
console.log(document.body.children)       // elementos hijos del body
console.log(document.body.childNodes)     // todos los nodos (incluye texto)

// Ejemplo: el navegador construye esto a partir del HTML:
// document
//   └── html
//       ├── head → title, meta, link...
//       └── body → h1, p, div, button...

// Cada nodo tiene propiedades
console.log(document.body.nodeName)   // "BODY"
console.log(document.body.nodeType)   // 1 (elemento)`,
    keyPoints: [
      'DOM significa Document Object Model — es el árbol de objetos que representa el HTML.',
      'El navegador construye el DOM a partir del HTML cuando carga la página.',
      'JavaScript accede al DOM mediante el objeto global `document`.',
      'Cada etiqueta HTML se convierte en un nodo del árbol DOM.',
      'El DOM permite leer y modificar la página en tiempo real desde JavaScript.',
    ],
    exercise: {
      description:
        'Abre la consola del navegador (F12 → Console) en cualquier página web. Escribe `document.title` y presiona Enter. Luego escribe `document.body` y observa el resultado. ¿Qué información devuelve cada expresión?',
      hint: '`document.title` devuelve un string con el título de la pestaña. `document.body` devuelve el objeto nodo del elemento <body> con todos sus hijos.',
    },
    quiz: [
      {
        question: '¿Qué significa DOM?',
        options: [
          'Document Object Model',
          'Dynamic Output Module',
          'Display Object Manager',
          'Document Order Map',
        ],
        correctAnswer: 'Document Object Model',
        correctFeedback: '¡Correcto! DOM significa Document Object Model.',
        incorrectFeedback:
          'DOM significa **Document Object Model**. Es la representación del HTML como un árbol de objetos que JavaScript puede manipular.',
      },
      {
        question: '¿Cuál es el punto de entrada de JavaScript al DOM?',
        options: ['window', 'document', 'html', 'body'],
        correctAnswer: 'document',
        correctFeedback:
          '¡Exacto! El objeto `document` es el punto de entrada al DOM.',
        incorrectFeedback:
          'El objeto `document` es el punto de entrada al DOM. `window` es el objeto global del navegador, pero para el DOM usamos `document`.',
      },
      {
        question: '¿Qué hace el navegador con el HTML para crear el DOM?',
        options: [
          'Lo descarga y lo muestra tal cual',
          'Lo compila como código máquina',
          'Lo parsea y construye un árbol de nodos',
          'Lo convierte en CSS automáticamente',
        ],
        correctAnswer: 'Lo parsea y construye un árbol de nodos',
        correctFeedback:
          '¡Correcto! El navegador parsea el HTML y construye un árbol de nodos llamado DOM.',
        incorrectFeedback:
          'El navegador **parsea** (analiza) el HTML y a partir de él construye un árbol de objetos llamado DOM. No lo muestra como texto plano ni lo compila.',
      },
      {
        question: '¿Cuál es la analogía correcta para el DOM?',
        options: [
          'El HTML es el edificio real y el DOM es el plano',
          'El HTML es el plano y el DOM es el edificio real construido',
          'El DOM es el arquitecto y el HTML es la construcción',
          'HTML y DOM son exactamente lo mismo',
        ],
        correctAnswer: 'El HTML es el plano y el DOM es el edificio real construido',
        correctFeedback:
          '¡Perfecto! El HTML describe la estructura (plano) y el DOM es lo que el navegador construye a partir de ese plano.',
        incorrectFeedback:
          'El HTML es el **plano** (descripción estática) y el DOM es el **edificio real** que el navegador construye a partir de ese plano y que JavaScript puede modificar.',
      },
      {
        question: '¿Qué devuelve `document.title`?',
        options: [
          'El elemento <title> como objeto HTML',
          'El texto del título de la página como string',
          'Todos los títulos h1 de la página',
          'Un error porque title no existe en document',
        ],
        correctAnswer: 'El texto del título de la página como string',
        correctFeedback:
          '¡Correcto! `document.title` devuelve el contenido de texto del elemento <title> como un string.',
        incorrectFeedback:
          '`document.title` devuelve el **texto** del título de la página (el contenido de la etiqueta <title>) como un string, no el elemento HTML en sí.',
      },
      {
        question: '¿Para qué necesitamos el DOM en el desarrollo web?',
        options: [
          'Solo para aplicar estilos CSS',
          'Para que el servidor procese las páginas',
          'Para que JavaScript pueda leer y modificar la página',
          'Para describir la estructura del HTML',
        ],
        correctAnswer: 'Para que JavaScript pueda leer y modificar la página',
        correctFeedback:
          '¡Exacto! El DOM es el puente que permite a JavaScript interactuar con la página.',
        incorrectFeedback:
          'El DOM es el puente entre JavaScript y la página. Sin él, JavaScript no podría modificar textos, mostrar u ocultar elementos ni reaccionar a acciones del usuario.',
      },
    ],
  },
  {
    slug: 'html-css-javascript',
    title: 'Relación entre HTML, CSS y JavaScript',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 77,
    description:
      'Entiende cómo HTML da estructura, CSS da estilo y JavaScript agrega interacción y lógica a una página web.',
    explanation: `## HTML, CSS y JavaScript: el equipo completo

Una página web moderna se construye con tres tecnologías que trabajan juntas, cada una con su propia responsabilidad.

### La separación de responsabilidades

| Tecnología | Rol | Analogía |
|---|---|---|
| **HTML** | Estructura y contenido | El esqueleto del cuerpo |
| **CSS** | Presentación y estilos | La ropa y apariencia |
| **JavaScript** | Comportamiento e interacción | El cerebro y los músculos |

### HTML — la estructura

HTML define **qué existe** en la página:

\`\`\`html
<button id="btn-saludar">Saludar</button>
<p id="mensaje"></p>
\`\`\`

Sin CSS ni JS, los elementos existen pero son simples y sin comportamiento.

### CSS — el estilo

CSS define **cómo se ve** cada elemento:

\`\`\`css
#btn-saludar {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
\`\`\`

El botón ahora se ve bonito, pero todavía no hace nada.

### JavaScript — el comportamiento

JavaScript define **qué sucede** cuando el usuario interactúa:

\`\`\`js
const boton = document.querySelector('#btn-saludar')
const mensaje = document.querySelector('#mensaje')

boton.addEventListener('click', function () {
  mensaje.textContent = '¡Hola! Bienvenido a la página.'
})
\`\`\`

Ahora el botón reacciona al clic y muestra un mensaje.

### ¿Cómo se conectan?

Generalmente se incluyen en el HTML así:

\`\`\`html
<!DOCTYPE html>
<html lang="es">
  <head>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <button id="btn-saludar">Saludar</button>
    <p id="mensaje"></p>

    <script src="app.js"></script>
  </body>
</html>
\`\`\`

> Nota: el \`<script>\` va **al final del body** para que el HTML cargue primero antes de que JavaScript intente acceder a los elementos.

### Modificar estilos desde JavaScript

JavaScript puede cambiar CSS dinámicamente a través del DOM:

\`\`\`js
const caja = document.querySelector('.caja')

// Cambiar un estilo directamente
caja.style.backgroundColor = 'red'

// Agregar o quitar clases CSS
caja.classList.add('activo')
caja.classList.remove('oculto')
caja.classList.toggle('destacado')
\`\`\`

### Buena práctica: mantener la separación

- Los estilos van en CSS, no en atributos \`style\` del HTML.
- La lógica va en JavaScript, no en atributos \`onclick\` del HTML.
- El contenido va en HTML, no generado dinámicamente cuando no hace falta.`,
    codeExample: `// HTML (estructura):
// <button id="btn-tema">Cambiar tema</button>
// <p id="info">El tema actual es: claro</p>

// JavaScript (comportamiento):
const boton = document.querySelector('#btn-tema')
const info = document.querySelector('#info')

let temaOscuro = false

boton.addEventListener('click', function () {
  temaOscuro = !temaOscuro

  if (temaOscuro) {
    // Agrega clase CSS 'oscuro' al body
    document.body.classList.add('oscuro')
    info.textContent = 'El tema actual es: oscuro'
  } else {
    // Quita la clase CSS 'oscuro' del body
    document.body.classList.remove('oscuro')
    info.textContent = 'El tema actual es: claro'
  }
})

// CSS (estilo) — en el archivo .css:
// body.oscuro {
//   background-color: #1a1a2e;
//   color: #e0e0e0;
// }`,
    keyPoints: [
      'HTML define la estructura y el contenido — qué elementos existen.',
      'CSS define la presentación — cómo se ven esos elementos.',
      'JavaScript define el comportamiento — qué sucede al interactuar.',
      'Los tres trabajan juntos: JS accede al HTML a través del DOM y puede modificar clases CSS.',
      'El `<script>` debe ir al final del `<body>` para que el HTML cargue primero.',
      'Buena práctica: separar responsabilidades manteniendo lógica en JS y estilos en CSS.',
    ],
    exercise: {
      description:
        'Crea un archivo HTML con un párrafo que diga "Texto normal" y un botón que diga "Agrandar texto". Usando JavaScript, haz que al hacer clic en el botón, el párrafo cambie su `style.fontSize` a `"2rem"`. Agrega un segundo clic que lo regrese al tamaño original.',
      hint: 'Puedes usar una variable booleana para saber si el texto está grande o pequeño, igual que en el ejemplo del tema oscuro.',
    },
    quiz: [
      {
        question: '¿Cuál es la responsabilidad de HTML en una página web?',
        options: [
          'Definir los colores y fuentes',
          'Manejar las interacciones del usuario',
          'Definir la estructura y el contenido',
          'Hacer peticiones al servidor',
        ],
        correctAnswer: 'Definir la estructura y el contenido',
        correctFeedback:
          '¡Correcto! HTML define qué elementos existen y cuál es su contenido.',
        incorrectFeedback:
          'HTML se encarga de la **estructura y el contenido** — define qué elementos existen en la página. Los colores y fuentes son responsabilidad de CSS.',
      },
      {
        question: '¿Por qué se recomienda poner el `<script>` al final del `<body>`?',
        options: [
          'Para que el CSS cargue antes que el JS',
          'Para que el HTML cargue primero y los elementos existan cuando JS los busque',
          'Porque el navegador solo lee scripts al final',
          'Para mejorar el estilo visual de la página',
        ],
        correctAnswer:
          'Para que el HTML cargue primero y los elementos existan cuando JS los busque',
        correctFeedback:
          '¡Exacto! Si el script va antes del HTML, los elementos aún no existen y JavaScript no puede encontrarlos.',
        incorrectFeedback:
          'Si el `<script>` va antes del HTML, los elementos todavía no han sido creados por el navegador y JavaScript no puede seleccionarlos. Ponerlo al final del `<body>` garantiza que el HTML ya cargó.',
      },
      {
        question: '¿Qué hace `elemento.classList.toggle("activo")`?',
        options: [
          'Siempre agrega la clase "activo"',
          'Siempre elimina la clase "activo"',
          'Agrega la clase si no existe, o la elimina si ya existe',
          'Verifica si el elemento tiene la clase sin modificarla',
        ],
        correctAnswer: 'Agrega la clase si no existe, o la elimina si ya existe',
        correctFeedback:
          '¡Correcto! `toggle` alterna la clase: la agrega si no está, la quita si ya está.',
        incorrectFeedback:
          '`classList.toggle()` **alterna** la clase: si el elemento no la tiene, la agrega; si ya la tiene, la elimina. Es ideal para implementar interruptores (como modo oscuro).',
      },
      {
        question:
          'Siguiendo el principio de separación de responsabilidades, ¿dónde deben ir los estilos?',
        options: [
          'En atributos `style` dentro del HTML',
          'En el archivo JavaScript usando `element.style`',
          'En un archivo CSS separado',
          'En comentarios del HTML',
        ],
        correctAnswer: 'En un archivo CSS separado',
        correctFeedback:
          '¡Muy bien! La buena práctica es mantener los estilos en CSS y la lógica en JavaScript.',
        incorrectFeedback:
          'La buena práctica de separación de responsabilidades indica que los **estilos van en CSS**. Usar `style` en HTML o manipular `element.style` en JS para todo mezcla responsabilidades y hace el código difícil de mantener.',
      },
      {
        question:
          'Un desarrollador usa `onclick="alert(\'hola\')"` directamente en un botón HTML. ¿Cuál es el problema?',
        options: [
          'alert() no existe en JavaScript',
          'Los atributos onclick no funcionan en HTML',
          'Mezcla comportamiento (JS) con estructura (HTML), lo que dificulta el mantenimiento',
          'No hay ningún problema, es la forma correcta',
        ],
        correctAnswer:
          'Mezcla comportamiento (JS) con estructura (HTML), lo que dificulta el mantenimiento',
        correctFeedback:
          '¡Correcto! Mezclar JS dentro del HTML rompe la separación de responsabilidades.',
        incorrectFeedback:
          'Aunque `onclick` en HTML funciona técnicamente, **mezcla comportamiento con estructura**. Si necesitas cambiar la lógica, debes buscarla en el HTML en lugar de en el JS. La práctica recomendada es usar `addEventListener` en JavaScript.',
      },
      {
        question: '¿Cuál es la analogía correcta para JavaScript en el equipo HTML-CSS-JS?',
        options: [
          'El esqueleto del cuerpo',
          'La ropa y apariencia',
          'El cerebro y los músculos',
          'Los órganos internos',
        ],
        correctAnswer: 'El cerebro y los músculos',
        correctFeedback:
          '¡Exacto! JavaScript es el cerebro (lógica) y los músculos (acción) de la página.',
        incorrectFeedback:
          'JavaScript actúa como el **cerebro y los músculos**: toma decisiones (lógica) y ejecuta acciones (modifica el DOM). El esqueleto es HTML y la ropa/apariencia es CSS.',
      },
    ],
  },
  {
    slug: 'queryselector',
    title: 'Seleccionar elementos con querySelector',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 78,
    description:
      'Aprende a seleccionar elementos del HTML usando document.querySelector().',
    explanation: `## Seleccionar elementos con querySelector

Para poder modificar un elemento del DOM, primero debes **seleccionarlo**. El método más flexible es \`document.querySelector()\`.

### Sintaxis

\`\`\`js
const elemento = document.querySelector(selector)
\`\`\`

El **selector** es exactamente igual a los selectores de CSS.

### Selección por ID

El símbolo \`#\` indica un ID:

\`\`\`js
// HTML: <h1 id="titulo">Bienvenido</h1>

const titulo = document.querySelector('#titulo')
console.log(titulo)   // <h1 id="titulo">Bienvenido</h1>
\`\`\`

### Selección por clase

El punto \`.\` indica una clase:

\`\`\`js
// HTML: <p class="descripcion">Texto aquí.</p>

const descripcion = document.querySelector('.descripcion')
console.log(descripcion)  // <p class="descripcion">Texto aquí.</p>
\`\`\`

### Selección por etiqueta

Sin símbolo, selecciona por nombre de etiqueta:

\`\`\`js
// Selecciona el PRIMER <button> de la página
const boton = document.querySelector('button')
\`\`\`

### Solo devuelve el PRIMER elemento coincidente

Si hay múltiples elementos que coinciden, \`querySelector\` devuelve **solo el primero**:

\`\`\`js
// HTML:
// <p class="item">Primero</p>
// <p class="item">Segundo</p>
// <p class="item">Tercero</p>

const item = document.querySelector('.item')
console.log(item.textContent)  // "Primero"
\`\`\`

### Devuelve null si no encuentra nada

Si el selector no coincide con ningún elemento, devuelve \`null\`:

\`\`\`js
const inexistente = document.querySelector('#no-existe')
console.log(inexistente)  // null
\`\`\`

> Siempre verifica que el elemento existe antes de usarlo, o tendrás un error.

### Selectores avanzados

Como usa selectores CSS, puedes ser muy específico:

\`\`\`js
// Un elemento dentro de otro
const enlace = document.querySelector('nav a')

// Un input de tipo texto
const campo = document.querySelector('input[type="text"]')

// Un botón con una clase específica
const btnEnviar = document.querySelector('button.btn-enviar')
\`\`\`

### getElementById (alternativa clásica)

\`\`\`js
// Equivalentes:
const el1 = document.querySelector('#titulo')
const el2 = document.getElementById('titulo')   // sin el #
\`\`\`

\`querySelector\` es más moderno y flexible, por eso se prefiere.`,
    codeExample: `// HTML de ejemplo:
// <h1 id="titulo-principal">Mi Página</h1>
// <p class="intro">Texto de introducción.</p>
// <button class="btn">Aceptar</button>
// <input type="text" id="nombre" />

// Selección por ID (con #)
const titulo = document.querySelector('#titulo-principal')
console.log(titulo.textContent)   // "Mi Página"

// Selección por clase (con .)
const intro = document.querySelector('.intro')
console.log(intro.textContent)    // "Texto de introducción."

// Selección por etiqueta
const boton = document.querySelector('button')
console.log(boton.textContent)    // "Aceptar"

// Selector de atributo
const input = document.querySelector('input[type="text"]')
console.log(input)                // <input type="text" id="nombre" />

// Si no existe, devuelve null
const nada = document.querySelector('#fantasma')
console.log(nada)                 // null

// Verificar antes de usar
if (nada !== null) {
  // solo accedemos si existe
  nada.textContent = 'Hola'
}`,
    keyPoints: [
      '`document.querySelector(selector)` selecciona el primer elemento que coincide con el selector CSS.',
      'Usa `#id` para seleccionar por ID, `.clase` para clase y `etiqueta` para tipo de elemento.',
      'Si no encuentra ningún elemento, devuelve `null`.',
      'Solo devuelve el PRIMER elemento coincidente — usa `querySelectorAll` para varios.',
      'Admite selectores CSS complejos como `nav a` o `input[type="text"]`.',
      '`querySelector` es más moderno y flexible que `getElementById`.',
    ],
    exercise: {
      description:
        'Crea un archivo HTML con: un `<h2 id="subtitulo">` con algún texto, un `<p class="nota">` con otro texto, y un `<button>`. Usando la consola del navegador (o un `<script>`), selecciona cada uno con `querySelector` y muestra sus contenidos con `console.log`.',
      hint: 'Recuerda: para el ID usa `"#subtitulo"`, para la clase usa `".nota"` y para el botón usa `"button"` como selector.',
    },
    quiz: [
      {
        question: '¿Qué selector usas para seleccionar un elemento con id="cabecera"?',
        options: ['"cabecera"', '".cabecera"', '"#cabecera"', '"id=cabecera"'],
        correctAnswer: '"#cabecera"',
        correctFeedback: '¡Correcto! El símbolo `#` indica selección por ID en CSS y querySelector.',
        incorrectFeedback:
          'Para seleccionar por ID debes usar `#` delante del nombre: `"#cabecera"`. Sin el `#` buscaría una etiqueta HTML llamada "cabecera", y con `.` buscaría una clase.',
      },
      {
        question: '¿Qué devuelve querySelector si ningún elemento coincide?',
        options: ['undefined', 'false', 'null', 'Un array vacío []'],
        correctAnswer: 'null',
        correctFeedback:
          '¡Exacto! `querySelector` devuelve `null` cuando no encuentra ningún elemento.',
        incorrectFeedback:
          '`querySelector` devuelve **`null`** cuando no encuentra ningún elemento (no `undefined`, no `false`, no un array vacío). Por eso es importante verificar `if (elemento !== null)` antes de usarlo.',
      },
      {
        question: '¿Cuántos elementos devuelve `document.querySelector(".item")` si hay 5 elementos con esa clase?',
        options: [
          'Los 5 elementos en un array',
          'Solo el primero',
          'Solo el último',
          'Todos en un NodeList',
        ],
        correctAnswer: 'Solo el primero',
        correctFeedback:
          '¡Correcto! `querySelector` siempre devuelve solo el primer elemento coincidente.',
        incorrectFeedback:
          '`querySelector` devuelve **solo el primer** elemento que coincide con el selector. Si necesitas todos los elementos con esa clase, debes usar `querySelectorAll`.',
      },
      {
        question: '¿Cuál de estos selectores elige un `<input>` con `type="email"`?',
        options: [
          'document.querySelector("input")',
          'document.querySelector("#email")',
          'document.querySelector("input[type=\'email\']")',
          'document.querySelector(".email")',
        ],
        correctAnswer: 'document.querySelector("input[type=\'email\']")',
        correctFeedback:
          '¡Muy bien! Los selectores de atributo `[atributo="valor"]` funcionan exactamente igual en querySelector que en CSS.',
        incorrectFeedback:
          'Para seleccionar un input por su tipo debes usar el selector de atributo: `"input[type=\'email\']"`. `querySelector("input")` seleccionaría el primer input de cualquier tipo.',
      },
      {
        question: '¿En qué se diferencia `querySelector("#id")` de `getElementById("id")`?',
        options: [
          'querySelector es más lento y debe evitarse',
          'getElementById no existe en JavaScript moderno',
          'querySelector usa selector CSS (con #) y es más flexible; getElementById solo acepta el nombre sin #',
          'Son exactamente iguales en todos los aspectos',
        ],
        correctAnswer:
          'querySelector usa selector CSS (con #) y es más flexible; getElementById solo acepta el nombre sin #',
        correctFeedback:
          '¡Correcto! `querySelector` acepta cualquier selector CSS, mientras que `getElementById` solo busca por ID y recibe el nombre sin `#`.',
        incorrectFeedback:
          'La diferencia clave: `querySelector` acepta **cualquier selector CSS** (más flexible) y requiere el `#` para IDs. `getElementById` solo busca por ID y recibe el nombre **sin `#`**. Ambos funcionan bien, pero `querySelector` es más moderno.',
      },
      {
        question:
          'Tienes el siguiente código: `const btn = document.querySelector(".boton"); btn.textContent = "Hola";`. ¿Qué error puede ocurrir?',
        options: [
          'textContent no existe en los botones',
          'querySelector no puede seleccionar por clase',
          'Si no existe ningún elemento con clase "boton", btn es null y la segunda línea lanza un error',
          'No puede ocurrir ningún error',
        ],
        correctAnswer:
          'Si no existe ningún elemento con clase "boton", btn es null y la segunda línea lanza un error',
        correctFeedback:
          '¡Exacto! Si no existe el elemento, `btn` es `null` y acceder a `null.textContent` lanza un TypeError.',
        incorrectFeedback:
          'Si no existe ningún elemento con clase "boton", `querySelector` devuelve `null`. Entonces `btn.textContent = "Hola"` intenta acceder a una propiedad de `null`, lo que lanza un **TypeError**. Siempre verifica que el elemento existe.',
      },
    ],
  },
  {
    slug: 'queryselectorall',
    title: 'Seleccionar varios elementos con querySelectorAll',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 79,
    description:
      'Aprende a seleccionar múltiples elementos y trabajar con una lista de nodos usando document.querySelectorAll().',
    explanation: `## Seleccionar varios elementos con querySelectorAll

Cuando necesitas trabajar con varios elementos al mismo tiempo, \`querySelectorAll\` es la herramienta correcta.

### Sintaxis

\`\`\`js
const elementos = document.querySelectorAll(selector)
\`\`\`

Devuelve un **NodeList** con todos los elementos que coinciden.

### Diferencia clave con querySelector

| | querySelector | querySelectorAll |
|---|---|---|
| Devuelve | Un elemento (o null) | Un NodeList |
| Cantidad | Solo el primero | Todos los coincidentes |
| Si no hay | null | NodeList vacío |

### Ejemplo básico

\`\`\`js
// HTML:
// <li class="item">Manzana</li>
// <li class="item">Banana</li>
// <li class="item">Naranja</li>

const frutas = document.querySelectorAll('.item')
console.log(frutas)         // NodeList(3) [li, li, li]
console.log(frutas.length)  // 3
\`\`\`

### ¿Qué es un NodeList?

Es una lista de nodos del DOM. Se parece a un array pero **no es un array**:
- Tiene índices: \`frutas[0]\`, \`frutas[1]\`...
- Tiene \`.length\`
- Tiene \`.forEach()\`
- NO tiene \`.map()\`, \`.filter()\`, \`.reduce()\`

### Recorrer con forEach

\`\`\`js
const items = document.querySelectorAll('.item')

items.forEach(function (item) {
  console.log(item.textContent)
})
// "Manzana"
// "Banana"
// "Naranja"
\`\`\`

### Recorrer con for...of

También funciona con \`for...of\`:

\`\`\`js
for (const item of items) {
  item.style.color = 'green'
}
\`\`\`

### Convertir a array real

Si necesitas \`.map()\` u otros métodos de array:

\`\`\`js
const itemsArray = Array.from(items)
// o también:
const itemsArray2 = [...items]

const textos = itemsArray.map(item => item.textContent)
console.log(textos)  // ["Manzana", "Banana", "Naranja"]
\`\`\`

### Si no hay coincidencias

A diferencia de \`querySelector\`, no devuelve \`null\` sino un NodeList vacío:

\`\`\`js
const nada = document.querySelectorAll('.no-existe')
console.log(nada)         // NodeList []
console.log(nada.length)  // 0
\`\`\`

Puedes verificar con \`nada.length === 0\`.`,
    codeExample: `// HTML de ejemplo:
// <ul>
//   <li class="tarea">Comprar pan</li>
//   <li class="tarea completada">Llamar al banco</li>
//   <li class="tarea">Estudiar JavaScript</li>
//   <li class="tarea completada">Hacer ejercicio</li>
// </ul>

// Seleccionar TODAS las tareas
const tareas = document.querySelectorAll('.tarea')
console.log(tareas.length)   // 4

// Recorrer con forEach
tareas.forEach(function (tarea) {
  console.log(tarea.textContent)
})

// Seleccionar solo las completadas
const completadas = document.querySelectorAll('.completada')
console.log(completadas.length)  // 2

// Modificar todas a la vez
tareas.forEach(function (tarea) {
  tarea.style.padding = '8px'
})

// Convertir a array para usar .map()
const textos = Array.from(tareas).map(t => t.textContent)
console.log(textos)
// ["Comprar pan", "Llamar al banco", "Estudiar JavaScript", "Hacer ejercicio"]`,
    keyPoints: [
      '`querySelectorAll` devuelve un NodeList con todos los elementos que coinciden.',
      'Un NodeList tiene índices y `.length`, pero no es un array completo.',
      'Puedes recorrerlo con `.forEach()` o `for...of`.',
      'Si no hay coincidencias devuelve un NodeList vacío (no `null`).',
      'Para usar `.map()` o `.filter()` convierte a array con `Array.from()` o el spread `[...nodeList]`.',
      '`querySelector` devuelve uno, `querySelectorAll` devuelve todos.',
    ],
    exercise: {
      description:
        'Crea un HTML con 4 párrafos que tengan la clase "parrafo". Usando `querySelectorAll`, selecciónalos todos y cambia el color del texto de cada uno a azul (`style.color = "blue"`) usando `forEach`. Luego muestra en consola cuántos párrafos encontraste.',
      hint: 'Usa `document.querySelectorAll(".parrafo")` y luego `.forEach(function(p) { p.style.color = "blue" })`. El total está en `elementos.length`.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `querySelectorAll` cuando no hay elementos coincidentes?',
        options: [
          'null',
          'undefined',
          'Un NodeList vacío',
          'Un array vacío []',
        ],
        correctAnswer: 'Un NodeList vacío',
        correctFeedback:
          '¡Correcto! A diferencia de `querySelector`, `querySelectorAll` nunca devuelve `null`, sino un NodeList vacío.',
        incorrectFeedback:
          '`querySelectorAll` devuelve un **NodeList vacío** cuando no hay coincidencias, no `null`. Puedes verificarlo con `.length === 0`. Esto lo diferencia de `querySelector` que sí devuelve `null`.',
      },
      {
        question: '¿Cuál de los siguientes métodos NO está disponible directamente en un NodeList?',
        options: ['forEach', 'length', 'map', 'Acceso por índice [0]'],
        correctAnswer: 'map',
        correctFeedback:
          '¡Exacto! `map` es un método de Array, no de NodeList. Debes convertirlo primero con `Array.from()`.',
        incorrectFeedback:
          'Un NodeList tiene `forEach`, `length` y acceso por índice, pero **no tiene `map`** (ni `filter`, ni `reduce`). Para usarlos debes convertirlo a array con `Array.from(nodeList)` o `[...nodeList]`.',
      },
      {
        question: '¿Qué hace el siguiente código?\n`const items = document.querySelectorAll("li"); items.forEach(el => el.style.fontWeight = "bold");`',
        options: [
          'Selecciona el primer `<li>` y lo pone en negrita',
          'Selecciona todos los `<li>` y los pone en negrita',
          'Lanza un error porque NodeList no tiene forEach',
          'Selecciona los `<li>` pero no aplica estilos',
        ],
        correctAnswer: 'Selecciona todos los `<li>` y los pone en negrita',
        correctFeedback:
          '¡Muy bien! `querySelectorAll("li")` trae todos los `<li>` y `forEach` aplica negrita a cada uno.',
        incorrectFeedback:
          '`querySelectorAll("li")` selecciona **todos** los `<li>` y devuelve un NodeList. `forEach` recorre cada elemento y le aplica `fontWeight = "bold"`. NodeList sí tiene `forEach`, no lanza error.',
      },
      {
        question: '¿Cómo conviertes un NodeList en un array real?',
        options: [
          'nodeList.toArray()',
          'Array.from(nodeList) o [...nodeList]',
          'nodeList.convert()',
          'No se puede convertir',
        ],
        correctAnswer: 'Array.from(nodeList) o [...nodeList]',
        correctFeedback:
          '¡Correcto! Ambas formas funcionan para convertir un NodeList en un array.',
        incorrectFeedback:
          'Para convertir un NodeList a array puedes usar `Array.from(nodeList)` o el operador spread `[...nodeList]`. No existe un método `.toArray()` ni `.convert()` en JavaScript.',
      },
      {
        question: '¿Cuántos elementos devuelve `querySelectorAll` si el selector coincide con 10 elementos?',
        options: [
          'Solo el primero',
          'Solo el último',
          'Los 10 elementos en un NodeList',
          'Depende del navegador',
        ],
        correctAnswer: 'Los 10 elementos en un NodeList',
        correctFeedback:
          '¡Exacto! `querySelectorAll` devuelve todos los elementos coincidentes.',
        incorrectFeedback:
          '`querySelectorAll` devuelve **todos** los elementos que coinciden con el selector, los 10 en un NodeList. Es diferente de `querySelector` que solo devuelve el primero.',
      },
      {
        question:
          'Un desarrollador escribe `document.querySelectorAll(".btn")[0]`. ¿Qué obtiene?',
        options: [
          'Todos los elementos con clase "btn"',
          'El primer elemento con clase "btn"',
          'Un error porque querySelectorAll no tiene índices',
          'El último elemento con clase "btn"',
        ],
        correctAnswer: 'El primer elemento con clase "btn"',
        correctFeedback:
          '¡Correcto! El índice `[0]` accede al primer elemento del NodeList, igual que en un array.',
        incorrectFeedback:
          'El NodeList tiene acceso por índice como los arrays. `querySelectorAll(".btn")[0]` devuelve el **primer** elemento con clase "btn". Es una forma válida de obtener el primero, aunque generalmente es más claro usar `querySelector` directamente.',
      },
    ],
  },
  {
    slug: 'leer-contenido-dom',
    title: 'Leer contenido del DOM',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 80,
    description:
      'Aprende a leer textos, valores y atributos de elementos HTML desde JavaScript.',
    explanation: `## Leer contenido del DOM

Una vez que seleccionas un elemento, puedes leer su contenido usando diferentes propiedades según lo que necesites.

### textContent — leer el texto

Devuelve todo el texto dentro de un elemento (sin etiquetas HTML):

\`\`\`js
// HTML: <p id="info">Hola <strong>mundo</strong>!</p>

const parrafo = document.querySelector('#info')
console.log(parrafo.textContent)   // "Hola mundo!"
\`\`\`

Ignora las etiquetas HTML, solo devuelve el texto puro.

### innerHTML — leer el HTML interno

Devuelve el contenido HTML del elemento, incluyendo las etiquetas:

\`\`\`js
console.log(parrafo.innerHTML)   // "Hola <strong>mundo</strong>!"
\`\`\`

### value — leer el valor de un input

Los campos de formulario tienen la propiedad \`value\`:

\`\`\`js
// HTML: <input type="text" id="nombre" value="Ana" />

const input = document.querySelector('#nombre')
console.log(input.value)   // "Ana"  (lo que el usuario escribió o el valor inicial)
\`\`\`

Esto funciona para \`<input>\`, \`<textarea>\` y \`<select>\`.

### getAttribute — leer atributos HTML

Para leer cualquier atributo de un elemento:

\`\`\`js
// HTML: <a id="enlace" href="https://ejemplo.com" target="_blank">Visitar</a>

const enlace = document.querySelector('#enlace')
console.log(enlace.getAttribute('href'))    // "https://ejemplo.com"
console.log(enlace.getAttribute('target'))  // "_blank"
\`\`\`

### classList — leer las clases

\`\`\`js
// HTML: <div id="caja" class="contenedor activo grande"></div>

const caja = document.querySelector('#caja')
console.log(caja.classList)                   // DOMTokenList ["contenedor", "activo", "grande"]
console.log(caja.classList.contains('activo')) // true
console.log(caja.classList.contains('oculto')) // false
\`\`\`

### Acceso directo a atributos comunes

Algunos atributos tienen propiedades directas más convenientes:

\`\`\`js
const img = document.querySelector('img')
console.log(img.src)         // URL completa de la imagen
console.log(img.alt)         // texto alternativo
console.log(img.id)          // el id del elemento
console.log(img.className)   // todas las clases como string
\`\`\`

### Resumen rápido

| Qué quieres leer | Propiedad |
|---|---|
| Texto de un elemento | \`textContent\` |
| HTML interno | \`innerHTML\` |
| Valor de un input | \`value\` |
| Un atributo específico | \`getAttribute("attr")\` |
| Las clases | \`classList\` |`,
    codeExample: `// HTML de ejemplo:
// <h1 id="titulo">Bienvenido a <em>JavaScript</em></h1>
// <input type="email" id="correo" value="usuario@correo.com" />
// <a id="enlace" href="https://mdn.com" class="link externo">MDN Web Docs</a>
// <div id="caja" class="contenedor activo"></div>

// Leer texto (sin etiquetas)
const titulo = document.querySelector('#titulo')
console.log(titulo.textContent)    // "Bienvenido a JavaScript"

// Leer HTML interno (con etiquetas)
console.log(titulo.innerHTML)      // "Bienvenido a <em>JavaScript</em>"

// Leer valor de un input
const correo = document.querySelector('#correo')
console.log(correo.value)          // "usuario@correo.com"

// Leer atributos
const enlace = document.querySelector('#enlace')
console.log(enlace.getAttribute('href'))   // "https://mdn.com"
console.log(enlace.getAttribute('class'))  // "link externo"

// Leer clases
const caja = document.querySelector('#caja')
console.log(caja.classList.contains('activo'))  // true
console.log(caja.classList.contains('oculto'))  // false`,
    keyPoints: [
      '`textContent` devuelve el texto puro del elemento, sin etiquetas HTML.',
      '`innerHTML` devuelve el contenido incluyendo las etiquetas HTML internas.',
      '`value` se usa para leer el valor de inputs, textareas y selects.',
      '`getAttribute("nombre")` lee cualquier atributo HTML del elemento.',
      '`classList.contains("clase")` verifica si el elemento tiene una clase específica.',
      'Algunos atributos tienen propiedades directas: `element.href`, `element.src`, `element.id`.',
    ],
    exercise: {
      description:
        'Crea un HTML con: un `<h2>` con texto, un `<input>` con un valor inicial, y un `<a>` con un href. Usando JavaScript, lee y muestra en consola el `textContent` del h2, el `value` del input y el `href` del enlace con `getAttribute`.',
      hint: 'Para el enlace usa `enlace.getAttribute("href")`. Recuerda que `value` es una propiedad del objeto, no necesitas getAttribute para ella.',
    },
    quiz: [
      {
        question:
          'Dado `<p id="msg">Hola <strong>mundo</strong></p>`, ¿qué devuelve `document.querySelector("#msg").textContent`?',
        options: [
          '"Hola <strong>mundo</strong>"',
          '"Hola mundo"',
          '"<p>Hola <strong>mundo</strong></p>"',
          'undefined',
        ],
        correctAnswer: '"Hola mundo"',
        correctFeedback:
          '¡Correcto! `textContent` devuelve solo el texto, sin ninguna etiqueta HTML.',
        incorrectFeedback:
          '`textContent` devuelve el **texto puro** del elemento, ignorando las etiquetas HTML. Por eso el resultado es `"Hola mundo"` sin el `<strong>`. Para obtener el HTML usa `innerHTML`.',
      },
      {
        question: '¿Qué propiedad usas para leer lo que el usuario escribió en un `<input>`?',
        options: ['textContent', 'innerHTML', 'value', 'getAttribute("text")'],
        correctAnswer: 'value',
        correctFeedback:
          '¡Exacto! La propiedad `value` contiene el valor actual del input.',
        incorrectFeedback:
          'Para los campos de formulario (`<input>`, `<textarea>`, `<select>`), debes usar la propiedad **`value`**. `textContent` e `innerHTML` no funcionan para leer lo que el usuario escribe.',
      },
      {
        question:
          'Dado `<a id="link" href="/contacto">Contáctanos</a>`, ¿cómo lees el href?',
        options: [
          'document.querySelector("#link").textContent',
          'document.querySelector("#link").getAttribute("href")',
          'document.querySelector("#link").value',
          'document.querySelector("#link").class',
        ],
        correctAnswer: 'document.querySelector("#link").getAttribute("href")',
        correctFeedback:
          '¡Correcto! `getAttribute("href")` lee el valor del atributo href del enlace.',
        incorrectFeedback:
          'Para leer atributos HTML como `href`, `src`, `type`, etc., usa **`getAttribute("nombre")`**. `textContent` daría el texto del enlace ("Contáctanos"), no el href.',
      },
      {
        question:
          'Un elemento tiene `class="btn primary active"`. ¿Qué devuelve `elemento.classList.contains("primary")`?',
        options: ['La cadena "primary"', 'true', 'false', '"btn primary active"'],
        correctAnswer: 'true',
        correctFeedback:
          '¡Exacto! `classList.contains()` devuelve `true` o `false` según si la clase existe.',
        incorrectFeedback:
          '`classList.contains("primary")` devuelve **`true`** porque el elemento sí tiene la clase "primary". Si la clase no existiera devolvería `false`. Siempre devuelve un booleano.',
      },
      {
        question: '¿En qué se diferencia `textContent` de `innerHTML`?',
        options: [
          'Son exactamente iguales',
          '`textContent` incluye etiquetas HTML, `innerHTML` solo texto',
          '`textContent` devuelve solo texto sin etiquetas, `innerHTML` incluye las etiquetas HTML',
          '`innerHTML` es más seguro de usar',
        ],
        correctAnswer:
          '`textContent` devuelve solo texto sin etiquetas, `innerHTML` incluye las etiquetas HTML',
        correctFeedback:
          '¡Correcto! `textContent` es texto puro, `innerHTML` incluye el HTML interno.',
        incorrectFeedback:
          '`textContent` devuelve el **texto puro** ignorando etiquetas, mientras que `innerHTML` devuelve el **HTML interno** con todas sus etiquetas. Es al revés de lo que dice la opción incorrecta.',
      },
      {
        question:
          'Un desarrollador hace `console.log(input.value)` pero el input aún no tiene texto. ¿Qué se muestra?',
        options: ['null', 'undefined', 'Un string vacío ""', 'false'],
        correctAnswer: 'Un string vacío ""',
        correctFeedback:
          '¡Correcto! Un input vacío tiene `value` igual a un string vacío `""`.',
        incorrectFeedback:
          'Cuando un input está vacío, su propiedad `value` es un **string vacío `""`**, no `null` ni `undefined`. Esto significa que siempre puedes hacer comparaciones como `if (input.value === "")` de forma segura.',
      },
    ],
  },
  {
    slug: 'cambiar-contenido-javascript',
    title: 'Cambiar contenido desde JavaScript',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 81,
    description:
      'Aprende a modificar textos, valores y contenido HTML usando JavaScript.',
    explanation: `## Cambiar contenido desde JavaScript

Leer el DOM es útil, pero el verdadero poder de JavaScript está en **modificar** el contenido de la página en tiempo real.

### Cambiar texto con textContent

Asignas un nuevo valor directamente:

\`\`\`js
// HTML: <h1 id="titulo">Hola</h1>

const titulo = document.querySelector('#titulo')
titulo.textContent = '¡Bienvenido al curso!'
// El <h1> ahora muestra: ¡Bienvenido al curso!
\`\`\`

Si asignas texto que incluye etiquetas HTML, se mostrarán como texto literal (no se interpretan):

\`\`\`js
titulo.textContent = '<strong>Negrita</strong>'
// Muestra: <strong>Negrita</strong>  (como texto, no como HTML)
\`\`\`

### Cambiar HTML con innerHTML

Permite insertar HTML real:

\`\`\`js
const contenedor = document.querySelector('#contenedor')
contenedor.innerHTML = '<strong>Texto en negrita</strong>'
// El contenedor ahora renderiza el texto en negrita
\`\`\`

> **Advertencia de seguridad (XSS):** Nunca uses \`innerHTML\` con datos que vienen del usuario (formularios, URL, etc.) sin sanitizarlos. Un atacante podría inyectar código malicioso:

\`\`\`js
// PELIGROSO — nunca hagas esto con datos del usuario:
contenedor.innerHTML = inputDelUsuario

// SEGURO — usa textContent para texto del usuario:
contenedor.textContent = inputDelUsuario
\`\`\`

### Cambiar el valor de un input

\`\`\`js
const campo = document.querySelector('#nombre')
campo.value = 'María'
// El input ahora muestra "María"
\`\`\`

Esto es útil para pre-llenar formularios o limpiarlos:

\`\`\`js
// Limpiar un campo:
campo.value = ''
\`\`\`

### Cambiar atributos con setAttribute

\`\`\`js
const imagen = document.querySelector('img')
imagen.setAttribute('src', 'nueva-foto.jpg')
imagen.setAttribute('alt', 'Foto actualizada')

const enlace = document.querySelector('a')
enlace.setAttribute('href', 'https://nuevo-destino.com')
\`\`\`

### Cambiar estilos directamente

\`\`\`js
const caja = document.querySelector('.caja')
caja.style.backgroundColor = 'coral'
caja.style.fontSize = '1.5rem'
caja.style.display = 'none'    // ocultar elemento
caja.style.display = 'block'   // mostrar elemento
\`\`\`

### Agregar y quitar clases (mejor práctica para estilos)

En vez de modificar \`style\` directamente, es mejor agregar/quitar clases CSS:

\`\`\`js
const btn = document.querySelector('#btn')
btn.classList.add('activo')       // agrega clase
btn.classList.remove('inactivo')  // quita clase
btn.classList.toggle('seleccionado')  // alterna

// Verificar antes de cambiar
if (btn.classList.contains('activo')) {
  btn.classList.remove('activo')
}
\`\`\``,
    codeExample: `// HTML de ejemplo:
// <h2 id="saludo">Hola, visitante</h2>
// <p id="descripcion">Descripción aquí.</p>
// <input id="campo-nombre" type="text" />
// <button id="btn-actualizar">Actualizar</button>

const saludo = document.querySelector('#saludo')
const descripcion = document.querySelector('#descripcion')
const campo = document.querySelector('#campo-nombre')
const boton = document.querySelector('#btn-actualizar')

boton.addEventListener('click', function () {
  const nombre = campo.value

  if (nombre !== '') {
    // Cambiar texto con textContent (seguro)
    saludo.textContent = 'Hola, ' + nombre + '!'

    // Cambiar HTML con innerHTML (solo con texto propio, no del usuario)
    descripcion.innerHTML = 'Bienvenido al <strong>curso de JavaScript</strong>.'

    // Limpiar el input
    campo.value = ''

    // Cambiar estilo
    saludo.style.color = '#3b82f6'
  } else {
    saludo.textContent = 'Por favor escribe tu nombre.'
  }
})`,
    keyPoints: [
      '`elemento.textContent = "texto"` cambia el texto del elemento de forma segura.',
      '`elemento.innerHTML = "html"` permite insertar HTML, pero es peligroso con datos del usuario (XSS).',
      '`elemento.value = "texto"` cambia el valor de inputs y textareas.',
      '`elemento.setAttribute("attr", "valor")` modifica cualquier atributo HTML.',
      '`elemento.style.propiedad = "valor"` cambia estilos directamente (en camelCase).',
      'Preferir `classList.add/remove/toggle` sobre `style` directo para mantener estilos en CSS.',
    ],
    exercise: {
      description:
        'Crea un HTML con un `<p id="mensaje">` vacío, un `<input id="texto">` y un botón. Al hacer clic en el botón, toma el valor del input y ponlo como `textContent` del párrafo. Si el input está vacío, muestra el mensaje "Escribe algo primero" en el párrafo.',
      hint: 'Usa `input.value` para leer el texto, verifica si está vacío con `=== ""` y asigna con `parrafo.textContent = ...`.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia de seguridad entre `textContent` e `innerHTML` al mostrar datos del usuario?',
        options: [
          'No hay diferencia, ambos son igual de seguros',
          '`textContent` es seguro porque trata el contenido como texto puro; `innerHTML` es peligroso porque puede ejecutar scripts',
          '`innerHTML` es más seguro porque valida el HTML',
          '`textContent` es peligroso con datos del usuario',
        ],
        correctAnswer:
          '`textContent` es seguro porque trata el contenido como texto puro; `innerHTML` es peligroso porque puede ejecutar scripts',
        correctFeedback:
          '¡Correcto! `textContent` siempre trata el contenido como texto, nunca como código HTML ejecutable.',
        incorrectFeedback:
          '`textContent` es seguro porque trata cualquier contenido como **texto puro**, sin interpretar etiquetas. `innerHTML` interpreta el HTML, lo que permite ataques XSS si insertas datos del usuario sin validar.',
      },
      {
        question: '¿Cómo ocultas un elemento cambiando su estilo desde JavaScript?',
        options: [
          'elemento.style.visible = false',
          'elemento.style.display = "none"',
          'elemento.style.hide = true',
          'elemento.style.opacity = "hidden"',
        ],
        correctAnswer: 'elemento.style.display = "none"',
        correctFeedback:
          '¡Exacto! `display = "none"` oculta el elemento completamente.',
        incorrectFeedback:
          'Para ocultar un elemento desde JavaScript usa `elemento.style.display = "none"`. La propiedad `visible` no existe en JS; `opacity = "hidden"` no es válido (opacity acepta números 0-1); y `hide` tampoco existe.',
      },
      {
        question:
          '¿Cómo se escribe `background-color` en JavaScript al usar `element.style`?',
        options: [
          '"background-color"',
          '"background_color"',
          '"backgroundColor"',
          '"BackgroundColor"',
        ],
        correctAnswer: '"backgroundColor"',
        correctFeedback:
          '¡Correcto! Las propiedades CSS con guiones se escriben en camelCase en JavaScript.',
        incorrectFeedback:
          'En JavaScript, las propiedades CSS con guiones se convierten a **camelCase**: `background-color` → `backgroundColor`, `font-size` → `fontSize`, `border-radius` → `borderRadius`. Los guiones no son válidos en nombres de propiedades de JavaScript.',
      },
      {
        question:
          '¿Cuál es la forma recomendada de cambiar el estilo de un elemento para mantener la separación de responsabilidades?',
        options: [
          'Usar `elemento.style.propiedad` para cada estilo',
          'Escribir el CSS directamente en el atributo style del HTML',
          'Agregar y quitar clases CSS con classList',
          'Usar innerHTML con estilos inline',
        ],
        correctAnswer: 'Agregar y quitar clases CSS con classList',
        correctFeedback:
          '¡Exacto! Usar clases mantiene los estilos en CSS y la lógica en JavaScript.',
        incorrectFeedback:
          'La mejor práctica es usar **`classList.add/remove/toggle`** para agregar y quitar clases CSS. Así los estilos permanecen en el archivo CSS y JavaScript solo controla qué clases están activas.',
      },
      {
        question: '¿Qué hace `campo.value = ""`?',
        options: [
          'Elimina el elemento input del DOM',
          'Limpiar el valor del input, dejándolo vacío',
          'Bloquea el input para que no se pueda escribir',
          'Pone el texto literal "" en el input',
        ],
        correctAnswer: 'Limpiar el valor del input, dejándolo vacío',
        correctFeedback:
          '¡Correcto! Asignar `""` a `value` limpia el campo del formulario.',
        incorrectFeedback:
          'Asignar un string vacío `""` a `value` **limpia el campo** del formulario — el input queda visualmente vacío. Es la forma estándar de limpiar campos después de enviar un formulario.',
      },
      {
        question:
          '¿Cuál es el peligro de hacer `div.innerHTML = req.query.nombre`?',
        options: [
          'No hay peligro, es la forma correcta de mostrar datos',
          'Puede causar un ataque XSS si el nombre contiene código HTML/JavaScript',
          'Solo funciona con strings cortos',
          'req.query no existe en JavaScript',
        ],
        correctAnswer:
          'Puede causar un ataque XSS si el nombre contiene código HTML/JavaScript',
        correctFeedback:
          '¡Exacto! Insertar datos externos con innerHTML puede ejecutar código malicioso.',
        incorrectFeedback:
          'Usar `innerHTML` con datos externos (formularios, URL, servidor) puede causar un **ataque XSS (Cross-Site Scripting)**. Si el dato contiene `<script>alert("hackeado")</script>`, el navegador lo ejecutaría. Siempre usa `textContent` para datos del usuario.',
      },
    ],
  },
  {
    slug: 'errores-seleccionar-elementos',
    title: 'Errores comunes al seleccionar elementos',
    module: 'Introducción al DOM',
    moduleNumber: 11,
    order: 82,
    description:
      'Aprende a evitar errores comunes como seleccionar elementos que no existen o ejecutar JavaScript antes de que cargue el HTML.',
    explanation: `## Errores comunes al seleccionar elementos

Cuando comienzas a trabajar con el DOM, es muy fácil cometer ciertos errores que generan mensajes confusos. Aquí aprenderás a reconocerlos y evitarlos.

### Error 1: El script corre antes de que el HTML cargue

Este es el error más frecuente. Si tu \`<script>\` va en el \`<head>\`, el HTML no existe todavía cuando JavaScript intenta seleccionarlo.

\`\`\`html
<!-- INCORRECTO: el script corre antes del HTML -->
<head>
  <script src="app.js"></script>
</head>
<body>
  <button id="btn">Click</button>
</body>
\`\`\`

\`\`\`js
// app.js: el #btn no existe aún → btn es null → ERROR
const btn = document.querySelector('#btn')
btn.addEventListener('click', ...)  // TypeError: Cannot read properties of null
\`\`\`

**Solución:** Pon el script al final del \`<body>\`:

\`\`\`html
<body>
  <button id="btn">Click</button>
  <script src="app.js"></script>  <!-- ✓ el HTML ya cargó -->
</body>
\`\`\`

### Error 2: Olvidar el # o el . en el selector

\`\`\`js
// INCORRECTO: busca una etiqueta HTML llamada "titulo" — no existe
const el = document.querySelector('titulo')    // null

// CORRECTO: selección por ID
const el = document.querySelector('#titulo')   // ✓

// INCORRECTO: busca etiqueta "menu"
const nav = document.querySelector('menu')     // null

// CORRECTO: selección por clase
const nav = document.querySelector('.menu')    // ✓
\`\`\`

### Error 3: El elemento no existe en el HTML

Si el selector es correcto pero el elemento no está en el HTML, el resultado es \`null\`:

\`\`\`js
// Si no hay ningún elemento con id="fantasma":
const el = document.querySelector('#fantasma')
el.textContent = 'Hola'  // TypeError: Cannot set properties of null
\`\`\`

**Solución:** Verifica antes de usar:

\`\`\`js
const el = document.querySelector('#fantasma')
if (el !== null) {
  el.textContent = 'Hola'
}
// O con optional chaining (más moderno):
el?.textContent = 'Hola'
\`\`\`

### Error 4: Confundir querySelector con getElementById

\`\`\`js
// getElementById NO lleva el símbolo #
document.getElementById('titulo')      // ✓ correcto
document.getElementById('#titulo')     // null — busca id="#titulo" que no existe

// querySelector SÍ lleva el #
document.querySelector('#titulo')      // ✓ correcto
document.querySelector('titulo')       // null — busca etiqueta <titulo>
\`\`\`

### Error 5: Usar querySelector en lugar de querySelectorAll para varios elementos

\`\`\`js
// Solo modifica el PRIMER .item, no todos
document.querySelector('.item').style.color = 'red'

// Correcto: modifica todos los .item
document.querySelectorAll('.item').forEach(el => {
  el.style.color = 'red'
})
\`\`\`

### Error 6: Escribir mal el selector

\`\`\`js
// HTML: <div class="mi-clase">
document.querySelector('.miclase')    // null — falta el guion
document.querySelector('.mi-clase')   // ✓

// HTML: <button id="btn-enviar">
document.querySelector('#btnenviar')  // null
document.querySelector('#btn-enviar') // ✓
\`\`\`

### Cómo depurar errores del DOM

1. Abre DevTools (F12) → Console.
2. Lee el mensaje de error. \`Cannot read properties of null\` → el elemento es null.
3. Usa \`console.log(elemento)\` antes de usarlo para verificar.
4. Revisa el selector comparando con el HTML real.`,
    codeExample: `// Ejemplo de código defensivo — maneja casos de error

// 1. Verificar que el elemento existe
const boton = document.querySelector('#btn-enviar')

if (boton === null) {
  console.error('No se encontró el botón #btn-enviar')
} else {
  boton.addEventListener('click', function () {
    console.log('Click!')
  })
}

// 2. Optional chaining — forma moderna
const titulo = document.querySelector('#titulo')
console.log(titulo?.textContent)  // undefined si es null, sin error

// 3. Error por script antes del HTML — ejemplo de diagnóstico
// Si ves: "Cannot read properties of null (reading 'addEventListener')"
// Verifica:
//   a) ¿El script va antes del <body>?   → muévelo al final
//   b) ¿El selector es correcto?         → revisa # y .
//   c) ¿El elemento existe en el HTML?   → busca el id/clase en el HTML

// 4. Error getElementById vs querySelector
const a = document.getElementById('titulo')    // sin #
const b = document.querySelector('#titulo')    // con #
// Ambos seleccionan lo mismo, pero con sintaxis diferente`,
    keyPoints: [
      'Pon el `<script>` al final del `<body>` para que el HTML cargue antes que JavaScript.',
      '`querySelector` usa selectores CSS: `#id`, `.clase`, `etiqueta`.',
      '`getElementById` NO lleva `#` — recibe solo el nombre del id.',
      'Siempre verifica que el elemento no sea `null` antes de usarlo.',
      'El mensaje "Cannot read properties of null" indica que el elemento no fue encontrado.',
      '`querySelector` selecciona uno, `querySelectorAll` selecciona todos — úsalos correctamente.',
    ],
    exercise: {
      description:
        'Crea un HTML con un `<script>` al final del body. Dentro del script, intenta seleccionar un elemento con un ID que NO existe. Muestra en consola el valor obtenido. Luego agrega una verificación con `if (elemento !== null)` para manejar el caso. ¿Qué ves en la consola?',
      hint: 'Al seleccionar un ID inexistente con `querySelector`, obtendrás `null`. El `if (elemento !== null)` evita el error al intentar usar ese `null` como objeto.',
    },
    quiz: [
      {
        question:
          'Tu script tiene este código: `document.querySelector("#boton").textContent = "OK"`, pero la consola muestra "Cannot read properties of null". ¿Cuál es la causa más probable?',
        options: [
          'textContent no existe para los botones',
          'El script corre antes de que el HTML cargue, o el id "boton" no existe en el HTML',
          'querySelector no puede seleccionar por ID',
          'El navegador no soporta querySelector',
        ],
        correctAnswer:
          'El script corre antes de que el HTML cargue, o el id "boton" no existe en el HTML',
        correctFeedback:
          '¡Exacto! "Cannot read properties of null" significa que querySelector devolvió null porque no encontró el elemento.',
        incorrectFeedback:
          '"Cannot read properties of null" significa que `querySelector` devolvió `null`. Las causas más comunes son: el script corre **antes de que el HTML cargue** (script en el head) o el elemento con ese id **no existe** en el HTML.',
      },
      {
        question: '¿Cuál es el resultado de `document.getElementById("#titulo")`?',
        options: [
          'El elemento con id="titulo"',
          'null, porque getElementById no usa el símbolo #',
          'Un error de sintaxis',
          'Lo mismo que querySelector("#titulo")',
        ],
        correctAnswer: 'null, porque getElementById no usa el símbolo #',
        correctFeedback:
          '¡Correcto! `getElementById` busca literalmente un id que sea "#titulo", que no existe.',
        incorrectFeedback:
          '`getElementById` recibe el nombre del id **sin el símbolo #**. Si escribes `getElementById("#titulo")` buscará un elemento con el id literal `#titulo` (con el símbolo incluido), que no existe → devuelve `null`.',
      },
      {
        question:
          'Tienes `<div class="caja">` en el HTML. ¿Cuál selector funciona correctamente?',
        options: [
          'document.querySelector("caja")',
          'document.querySelector("#caja")',
          'document.querySelector(".caja")',
          'document.querySelector("div#caja")',
        ],
        correctAnswer: 'document.querySelector(".caja")',
        correctFeedback:
          '¡Exacto! Para seleccionar por clase se usa el punto `.` antes del nombre.',
        incorrectFeedback:
          'Para seleccionar un elemento **por clase** debes usar el punto: `".caja"`. Sin prefijo busca etiqueta, con `#` busca ID. `"div#caja"` buscaría un div con ID "caja", no clase.',
      },
      {
        question: '¿Qué hace `elemento?.textContent` si `elemento` es null?',
        options: [
          'Lanza un TypeError',
          'Devuelve undefined sin lanzar un error',
          'Devuelve null',
          'Devuelve un string vacío',
        ],
        correctAnswer: 'Devuelve undefined sin lanzar un error',
        correctFeedback:
          '¡Correcto! El optional chaining `?.` devuelve `undefined` en vez de lanzar un error si el objeto es null.',
        incorrectFeedback:
          'El operador **optional chaining** `?.` cortocircuita la expresión si el valor es `null` o `undefined`, devolviendo `undefined` en lugar de lanzar un TypeError. Es una forma moderna y segura de acceder a propiedades que podrían no existir.',
      },
      {
        question:
          'Un desarrollador quiere cambiar el color de todos los `<li>` de la página. Escribe `document.querySelector("li").style.color = "red"`. ¿Qué problema tiene?',
        options: [
          'querySelector no puede seleccionar elementos por etiqueta',
          'Solo cambia el color del primer <li>, no de todos',
          'La propiedad color no existe en style',
          'No hay ningún problema',
        ],
        correctAnswer: 'Solo cambia el color del primer <li>, no de todos',
        correctFeedback:
          '¡Correcto! `querySelector` solo devuelve el primero. Para todos se necesita `querySelectorAll` con `forEach`.',
        incorrectFeedback:
          '`querySelector("li")` devuelve **solo el primer `<li>`**. Para modificar todos, debe usar `querySelectorAll("li").forEach(el => el.style.color = "red")`. Este es un error muy común al empezar con el DOM.',
      },
      {
        question:
          '¿Cuál es la forma correcta de evitar el error "Cannot read properties of null"?',
        options: [
          'Usar `try/catch` en todo el código',
          'Verificar que el elemento no sea null antes de usarlo: `if (el !== null) { ... }`',
          'Recargar la página automáticamente',
          'Usar siempre getElementById en lugar de querySelector',
        ],
        correctAnswer:
          'Verificar que el elemento no sea null antes de usarlo: `if (el !== null) { ... }`',
        correctFeedback:
          '¡Exacto! Verificar que el elemento existe antes de usarlo es la práctica correcta.',
        incorrectFeedback:
          'La forma más directa de evitar el error es **verificar que el elemento no sea null** antes de usarlo: `if (el !== null) { ... }`. También puedes usar optional chaining `el?.propiedad`. Cambiar a `getElementById` no resuelve el problema si el elemento no existe.',
      },
    ],
  },
]

export const jsModule11: Module = {
  number: 11,
  title: 'Introducción al DOM',
  level: 'nivel3',
  lessons: lessonsJsModule11,
}
