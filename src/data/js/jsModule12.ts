import type { Lesson, Module } from '@/types'

export const lessonsJsModule12: Lesson[] = [
  // ── Lección 83 ────────────────────────────────────────────────────────────
  {
    slug: 'cambiar-textos-html',
    title: 'Cambiar textos y HTML',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 83,
    description:
      'Aprende la diferencia entre textContent, innerText e innerHTML, y cuándo usar cada uno.',
    explanation: `Cuando tienes una referencia a un elemento del DOM, puedes cambiar lo que muestra de tres formas distintas. Cada una tiene un propósito diferente y es importante elegir la correcta.

**textContent — texto plano (la opción más segura)**

\`\`\`js
const titulo = document.querySelector('h1');
titulo.textContent = 'Bienvenido al curso';
\`\`\`

Asigna texto plano. Si el texto contiene etiquetas HTML como \`<b>hola</b>\`, se muestran literalmente como texto, no se interpretan. Esto lo hace seguro cuando muestras datos que vienen del usuario.

**innerText — texto visible según CSS**

\`\`\`js
const parrafo = document.querySelector('p');
console.log(parrafo.innerText); // Solo el texto que el usuario puede ver
\`\`\`

Similar a \`textContent\`, pero respeta el CSS: si un elemento está oculto con \`display: none\`, \`innerText\` no lo incluye. Es más lento porque obliga al navegador a calcular los estilos.

**innerHTML — contenido HTML completo**

\`\`\`js
const contenedor = document.querySelector('#app');
contenedor.innerHTML = '<p>Hola <strong>mundo</strong></p>';
\`\`\`

Interpreta el texto como HTML real, lo que te permite insertar etiquetas. Es muy útil para plantillas simples, pero tiene un peligro importante:

**⚠️ Advertencia de seguridad — XSS (Cross-Site Scripting)**

\`\`\`js
// NUNCA hagas esto con datos del usuario:
const nombreUsuario = obtenerDatosDelFormulario(); // podría ser "<script>robarCookies()</script>"
contenedor.innerHTML = nombreUsuario; // ¡el script se ejecutaría!

// ✅ Solución segura: usa textContent para datos del usuario
const span = document.createElement('span');
span.textContent = nombreUsuario; // se muestra como texto, nunca se ejecuta
contenedor.appendChild(span);
\`\`\`

**¿Cuándo usar cada uno?**

| Propiedad | Cuándo usarla |
|-----------|---------------|
| \`textContent\` | Siempre que solo necesites texto, especialmente con datos del usuario |
| \`innerText\` | Cuando necesites leer el texto visible que ve el usuario |
| \`innerHTML\` | Solo para HTML estático que tú controlas, nunca con datos externos |`,
    codeExample: `// ── textos.js ────────────────────────────────────────────────────────────

// HTML de referencia:
// <h1 id="titulo">Texto original</h1>
// <div id="tarjeta"></div>
// <div id="notificacion"></div>

const titulo = document.querySelector('#titulo');
const tarjeta = document.querySelector('#tarjeta');
const notificacion = document.querySelector('#notificacion');

// ── textContent: cambiar texto plano ─────────────────────────────────────

titulo.textContent = 'Módulo 12: Manipulación del DOM';

// Si pones HTML, se muestra como texto literal (seguro):
titulo.textContent = '<em>Hola</em>'; // muestra literalmente: <em>Hola</em>

// ── innerHTML: insertar HTML real ────────────────────────────────────────

tarjeta.innerHTML = \`
  <h2>JavaScript desde Cero</h2>
  <p>Módulo <strong>12</strong> de 15</p>
  <span class="badge">Nivel 3</span>
\`;

// ── Ejemplo práctico: notificación dinámica ───────────────────────────────

function mostrarNotificacion(mensaje, tipo = 'info') {
  // ✅ usamos textContent para el mensaje (puede venir del usuario)
  notificacion.textContent = '';          // limpiar contenido anterior

  const icono = document.createElement('span');
  icono.textContent = tipo === 'error' ? '✗ ' : '✓ ';

  const texto = document.createElement('span');
  texto.textContent = mensaje;            // seguro: no interpreta HTML

  notificacion.appendChild(icono);
  notificacion.appendChild(texto);
  notificacion.className = \`notificacion \${tipo}\`;
}

mostrarNotificacion('Lección completada correctamente');
mostrarNotificacion('Error al guardar', 'error');

// ── Leer texto visible con innerText ─────────────────────────────────────

const boton = document.querySelector('#btnGuardar');
console.log(boton.innerText);    // "Guardar" (solo el texto visible)
console.log(boton.textContent);  // puede incluir espacios ocultos o saltos`,
    keyPoints: [
      'textContent asigna o lee texto plano; las etiquetas HTML se muestran como texto literal, no se ejecutan.',
      'innerText respeta el CSS y solo devuelve el texto que el usuario puede ver; es más lento que textContent.',
      'innerHTML interpreta el contenido como HTML real; nunca lo uses con datos que provengan del usuario (riesgo XSS).',
      'Para mostrar datos del usuario de forma segura, usa textContent o crea elementos con createElement y textContent.',
      'La combinación createElement + textContent es la forma más segura y moderna de agregar contenido dinámico.',
    ],
    exercise: {
      description:
        'Crea una función llamada `actualizarTarjeta(nombre, nivel)` que reciba un nombre de curso y un nivel. La función debe actualizar el `textContent` de un elemento `<h2 id="nombreCurso">` con el nombre, y el `textContent` de un elemento `<span id="nivelCurso">` con el nivel. Asegúrate de NO usar innerHTML para estos valores.',
      hint: 'Selecciona cada elemento con document.querySelector() y asigna el valor con .textContent = valor. Recuerda que los IDs se seleccionan con el prefijo "#".',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre textContent e innerHTML?',
        options: [
          'textContent es más lento que innerHTML',
          'textContent trata el valor como texto plano; innerHTML lo interpreta como HTML',
          'innerHTML no puede insertar etiquetas <p>',
          'textContent solo funciona en elementos <span>',
        ],
        correctAnswer: 'textContent trata el valor como texto plano; innerHTML lo interpreta como HTML',
        correctFeedback: '¡Correcto! textContent nunca ejecuta HTML, lo muestra como texto literal. innerHTML sí interpreta las etiquetas.',
        incorrectFeedback: 'La diferencia clave es cómo tratan el valor asignado: textContent lo muestra como texto plano (seguro), mientras que innerHTML lo parsea como HTML (potencialmente peligroso con datos externos).',
      },
      {
        question: '¿Por qué usar innerHTML con datos del usuario es peligroso?',
        options: [
          'Porque innerHTML solo acepta texto en mayúsculas',
          'Porque el navegador puede ignorar el contenido',
          'Porque permite ataques XSS: el usuario podría inyectar scripts maliciosos',
          'Porque innerHTML es más lento que textContent',
        ],
        correctAnswer: 'Porque permite ataques XSS: el usuario podría inyectar scripts maliciosos',
        correctFeedback: '¡Exacto! Si un usuario escribe <script>código malicioso</script> y lo insertas con innerHTML, ese script se ejecuta en el navegador de otros usuarios.',
        incorrectFeedback: 'El peligro de innerHTML con datos externos se llama XSS (Cross-Site Scripting). Un usuario malintencionado podría escribir etiquetas <script> que se ejecutarían como código real en el navegador de otras personas.',
      },
      {
        question: '¿Cuándo usarías innerText en lugar de textContent?',
        options: [
          'Cuando quieras insertar HTML dentro del elemento',
          'Cuando necesites el texto que el usuario puede ver visualmente, respetando el CSS',
          'Cuando el elemento esté oculto con display: none',
          'Cuando el elemento no tenga id',
        ],
        correctAnswer: 'Cuando necesites el texto que el usuario puede ver visualmente, respetando el CSS',
        correctFeedback: '¡Correcto! innerText omite el texto de elementos ocultos por CSS, por eso refleja lo que realmente ve el usuario en pantalla.',
        incorrectFeedback: 'innerText es útil cuando necesitas el texto visible, ya que respeta el CSS. Si un elemento está oculto con display:none, innerText no lo incluye, pero textContent sí. Para leer o escribir texto de forma general, textContent es más eficiente.',
      },
      {
        question: '¿Cuál de estos fragmentos es seguro para mostrar el nombre ingresado por un usuario?',
        options: [
          'contenedor.innerHTML = nombreUsuario',
          'contenedor.textContent = nombreUsuario',
          'contenedor.innerText = `<b>${nombreUsuario}</b>`',
          'contenedor.innerHTML = `<b>${nombreUsuario}</b>`',
        ],
        correctAnswer: 'contenedor.textContent = nombreUsuario',
        correctFeedback: '¡Correcto! textContent trata el valor como texto puro, así que aunque el usuario escriba <script>...</script>, se muestra como texto y no se ejecuta.',
        incorrectFeedback: 'Solo `contenedor.textContent = nombreUsuario` es seguro porque trata el valor como texto plano. Las opciones con innerHTML ejecutarían cualquier HTML o script que el usuario haya escrito, creando una vulnerabilidad XSS.',
      },
      {
        question: 'Si un elemento tiene `display: none`, ¿qué devuelve `elemento.innerText`?',
        options: [
          'El texto del elemento aunque esté oculto',
          'Una cadena vacía, porque innerText respeta el CSS',
          'Un error de JavaScript',
          'El mismo valor que textContent',
        ],
        correctAnswer: 'Una cadena vacía, porque innerText respeta el CSS',
        correctFeedback: '¡Exacto! innerText solo devuelve el texto de los elementos visibles. Si el elemento está oculto, innerText retorna una cadena vacía.',
        incorrectFeedback: 'innerText respeta el CSS: si el elemento tiene display:none o visibility:hidden, innerText retorna una cadena vacía porque el elemento no es visible para el usuario. En cambio, textContent devuelve todo el texto sin importar la visibilidad.',
      },
      {
        question: '¿Qué muestra en pantalla este código? `titulo.textContent = "<strong>Hola</strong>"`',
        options: [
          'La palabra Hola en negrita',
          'El texto literal: <strong>Hola</strong>',
          'Hola sin formato, porque textContent ignora HTML',
          'Un error porque textContent no acepta etiquetas',
        ],
        correctAnswer: 'El texto literal: <strong>Hola</strong>',
        correctFeedback: '¡Correcto! textContent no interpreta HTML. Muestra exactamente los caracteres que le asignas, incluyendo los ángulos de la etiqueta.',
        incorrectFeedback: 'Con textContent, el valor se trata como texto puro. Las etiquetas HTML no se interpretan, así que el navegador muestra literalmente los caracteres < > y el nombre de la etiqueta en pantalla.',
      },
      {
        question: '¿Cuál es la forma más segura de mostrar HTML que contiene datos del usuario?',
        options: [
          'Usar innerHTML con los datos directamente',
          'Crear un elemento con createElement, asignar los datos con textContent, e insertar el elemento',
          'Concatenar los datos en una plantilla con innerHTML',
          'Usar innerText con etiquetas HTML',
        ],
        correctAnswer: 'Crear un elemento con createElement, asignar los datos con textContent, e insertar el elemento',
        correctFeedback: '¡Perfecto! Esta técnica es la más segura: creas el elemento programáticamente, asignas el texto con textContent (sin interpretar HTML) y luego lo insertas en el DOM.',
        incorrectFeedback: 'La forma segura es: const el = document.createElement("span"); el.textContent = datosUsuario; contenedor.appendChild(el). Así los datos del usuario nunca se interpretan como HTML, previniendo ataques XSS.',
      },
    ],
  },

  // ── Lección 84 ────────────────────────────────────────────────────────────
  {
    slug: 'cambiar-estilos-javascript',
    title: 'Cambiar estilos con JavaScript',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 84,
    description:
      'Aprende a modificar estilos directamente desde JavaScript usando la propiedad style.',
    explanation: `Cada elemento del DOM tiene una propiedad \`style\` que te permite leer y modificar sus estilos en línea (inline styles) directamente desde JavaScript.

**La propiedad style**

\`\`\`js
const boton = document.querySelector('#miBoton');

boton.style.color = 'white';
boton.style.backgroundColor = 'blue';   // camelCase, no kebab-case
boton.style.fontSize = '18px';
boton.style.borderRadius = '8px';
\`\`\`

Nota importante: las propiedades CSS que usan guion (\`background-color\`, \`font-size\`, \`border-radius\`) se escriben en **camelCase** en JavaScript: \`backgroundColor\`, \`fontSize\`, \`borderRadius\`.

**Leer estilos inline existentes**

\`\`\`js
console.log(boton.style.color); // "white" (si fue asignado inline)
\`\`\`

\`element.style\` solo lee los estilos que están escritos directamente en el atributo \`style\` del elemento. No lee los estilos que vienen de una hoja de estilos CSS.

**Leer el estilo calculado (incluyendo CSS externo)**

\`\`\`js
const estilos = window.getComputedStyle(boton);
console.log(estilos.backgroundColor); // lee el color real aplicado
\`\`\`

**Eliminar un estilo inline**

\`\`\`js
boton.style.color = '';   // cadena vacía = eliminar el estilo inline
\`\`\`

**⚠️ Advertencia: prefiere classList sobre style**

Modificar \`style\` directamente es útil para valores dinámicos (como una posición calculada con JavaScript). Para cambios de apariencia, es mejor agregar o quitar clases CSS:

\`\`\`js
// Menos recomendado para cambios de apariencia:
boton.style.backgroundColor = 'green';
boton.style.color = 'white';
boton.style.padding = '10px 20px';

// ✅ Más recomendado: definir la clase en CSS y aplicarla en JS
boton.classList.add('boton-activo');
\`\`\`

Con classList, los estilos están en el CSS (donde corresponden) y el JavaScript solo indica qué estado tiene el elemento. Esto separa responsabilidades y hace el código más fácil de mantener.`,
    codeExample: `// ── estilos.js ───────────────────────────────────────────────────────────

// HTML de referencia:
// <div id="tarjeta">Tarjeta de producto</div>
// <button id="btnResaltar">Resaltar</button>
// <div id="barra" style="width: 0%"></div>

const tarjeta = document.querySelector('#tarjeta');
const btnResaltar = document.querySelector('#btnResaltar');
const barra = document.querySelector('#barra');

// ── Cambiar estilos directamente ─────────────────────────────────────────

tarjeta.style.backgroundColor = '#1e40af';  // azul oscuro
tarjeta.style.color = 'white';
tarjeta.style.padding = '20px';
tarjeta.style.borderRadius = '12px';
tarjeta.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
tarjeta.style.transition = 'all 0.3s ease';

// ── Caso útil: valores calculados dinámicamente ───────────────────────────

// Barra de progreso: el porcentaje es dinámico → style tiene sentido aquí
function actualizarProgreso(porcentaje) {
  barra.style.width = porcentaje + '%';     // no se puede hacer solo con CSS
  barra.style.backgroundColor = porcentaje >= 100 ? '#16a34a' : '#2563eb';
}

actualizarProgreso(65);   // barra al 65%, color azul
actualizarProgreso(100);  // barra al 100%, color verde

// ── Leer estilos calculados ───────────────────────────────────────────────

const estilosTarjeta = window.getComputedStyle(tarjeta);
console.log('Ancho de la tarjeta:', estilosTarjeta.width);
console.log('Color de fondo:', estilosTarjeta.backgroundColor);

// ── Eliminar un estilo inline ─────────────────────────────────────────────

tarjeta.style.boxShadow = '';   // quita solo la sombra; el resto permanece

// ── Mejor práctica: usar classList para apariencia ────────────────────────

btnResaltar.addEventListener('click', () => {
  tarjeta.classList.toggle('tarjeta-resaltada');
  // Los estilos de .tarjeta-resaltada están en el CSS, no aquí
});

// CSS correspondiente (en tu archivo .css):
// .tarjeta-resaltada {
//   border: 3px solid #facc15;
//   transform: scale(1.02);
// }`,
    keyPoints: [
      'La propiedad element.style te permite leer y escribir estilos inline directamente desde JavaScript.',
      'Las propiedades CSS con guion se escriben en camelCase en JavaScript: background-color → backgroundColor.',
      'element.style solo lee estilos inline; usa getComputedStyle() para leer el estilo real calculado por el navegador.',
      'Para eliminar un estilo inline, asigna una cadena vacía: element.style.color = "".',
      'Usa style para valores dinámicos calculados en JS (como posiciones o porcentajes). Para cambios de apariencia, prefiere classList.',
    ],
    exercise: {
      description:
        'Crea una función `resaltarElemento(id)` que reciba el id de un elemento y le aplique estos estilos: backgroundColor a "#fef08a" (amarillo), color a "#1e293b" (oscuro), fontWeight a "bold" y padding a "8px 12px". Luego crea otra función `quitarResaltado(id)` que elimine todos esos estilos asignando cadenas vacías.',
      hint: 'Selecciona el elemento con document.getElementById(id) o document.querySelector("#" + id). Para cada propiedad, asigna el valor o "" para eliminar.',
    },
    quiz: [
      {
        question: '¿Cómo se escribe la propiedad CSS "background-color" en JavaScript?',
        options: [
          'background-color',
          'background_color',
          'backgroundColor',
          'BackgroundColor',
        ],
        correctAnswer: 'backgroundColor',
        correctFeedback: '¡Correcto! En JavaScript, las propiedades CSS con guion se convierten a camelCase: la letra después de cada guion se pone en mayúscula.',
        incorrectFeedback: 'En JavaScript, no puedes usar guiones en nombres de propiedad sin comillas. Las propiedades CSS con guion se convierten a camelCase: "background-color" → "backgroundColor", "font-size" → "fontSize", etc.',
      },
      {
        question: '¿Qué devuelve element.style.color si el color fue definido en una hoja de estilos CSS externa?',
        options: [
          'El color definido en la hoja de estilos',
          'Una cadena vacía, porque style solo lee estilos inline',
          'El valor por defecto del navegador',
          'Un error de JavaScript',
        ],
        correctAnswer: 'Una cadena vacía, porque style solo lee estilos inline',
        correctFeedback: '¡Exacto! element.style solo accede a los estilos definidos directamente en el atributo style del elemento. Para leer estilos de hojas CSS externas, necesitas getComputedStyle().',
        incorrectFeedback: 'element.style solo lee los estilos definidos inline (en el atributo style del HTML). Si el estilo viene de una clase CSS o de un archivo .css, element.style devuelve cadena vacía. Para obtener el valor real, usa window.getComputedStyle(elemento).',
      },
      {
        question: '¿Cómo eliminas el estilo inline de "color" de un elemento?',
        options: [
          'delete elemento.style.color',
          'elemento.style.color = null',
          'elemento.style.color = ""',
          'elemento.style.removeColor()',
        ],
        correctAnswer: 'elemento.style.color = ""',
        correctFeedback: '¡Correcto! Asignar una cadena vacía elimina ese estilo inline específico, permitiendo que los estilos de la hoja CSS vuelvan a aplicarse.',
        incorrectFeedback: 'Para eliminar un estilo inline, asigna una cadena vacía: elemento.style.color = "". Esto borra ese atributo inline específico y deja que los estilos de la hoja CSS tomen efecto de nuevo. delete no funciona correctamente para estilos.',
      },
      {
        question: '¿Para qué caso es más apropiado usar element.style en lugar de classList?',
        options: [
          'Para cambiar el color de fondo cuando el usuario hace clic en un botón',
          'Para actualizar el ancho de una barra de progreso con un valor calculado en JavaScript',
          'Para mostrar u ocultar un menú desplegable',
          'Para aplicar un tema oscuro a toda la página',
        ],
        correctAnswer: 'Para actualizar el ancho de una barra de progreso con un valor calculado en JavaScript',
        correctFeedback: '¡Perfecto! Cuando el valor es dinámico y calculado en tiempo de ejecución (como un porcentaje variable), no puedes definirlo en CSS de antemano. Ahí es donde style tiene sentido.',
        incorrectFeedback: 'element.style es ideal cuando el valor CSS es dinámico y se calcula en JavaScript, como element.style.width = progreso + "%". Para cambios de apariencia predefinidos (hover, activo, tema), es mejor definir clases CSS y usar classList.',
      },
      {
        question: '¿Cómo lees el color de fondo real de un elemento, incluyendo los estilos de hojas CSS?',
        options: [
          'elemento.style.backgroundColor',
          'elemento.getStyle("background-color")',
          'window.getComputedStyle(elemento).backgroundColor',
          'documento.getStyle(elemento)',
        ],
        correctAnswer: 'window.getComputedStyle(elemento).backgroundColor',
        correctFeedback: '¡Correcto! getComputedStyle devuelve el valor final calculado por el navegador, combinando estilos inline, hojas de estilo y valores por defecto.',
        incorrectFeedback: 'Para leer el estilo real calculado por el navegador (considerando todas las fuentes de CSS), usa: const estilos = window.getComputedStyle(elemento); console.log(estilos.backgroundColor). element.style solo ve los estilos inline.',
      },
      {
        question: '¿Por qué se prefiere classList sobre element.style para cambios de apariencia?',
        options: [
          'Porque classList es más rápido que style',
          'Porque style no puede cambiar más de una propiedad',
          'Porque los estilos quedan en el CSS (separación de responsabilidades) y el JS solo gestiona el estado',
          'Porque classList funciona en todos los navegadores y style no',
        ],
        correctAnswer: 'Porque los estilos quedan en el CSS (separación de responsabilidades) y el JS solo gestiona el estado',
        correctFeedback: '¡Exacto! Con classList, los estilos están donde deben estar (CSS) y el JavaScript solo dice "este elemento está activo/oculto/resaltado". Eso hace el código más fácil de mantener y los diseñadores pueden editar CSS sin tocar JS.',
        incorrectFeedback: 'La razón principal de preferir classList es la separación de responsabilidades: el CSS define los estilos y el JavaScript define el estado del elemento. Con element.style mezclamos estilos dentro del JS, dificultando el mantenimiento.',
      },
    ],
  },

  // ── Lección 85 ────────────────────────────────────────────────────────────
  {
    slug: 'agregar-quitar-clases',
    title: 'Agregar y quitar clases CSS',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 85,
    description:
      'Aprende a usar classList.add(), classList.remove(), classList.toggle() y classList.contains().',
    explanation: `La propiedad \`classList\` es la forma más recomendada de manipular la apariencia de un elemento desde JavaScript. En lugar de escribir estilos dentro del JS, defines las clases en tu CSS y usas JS para aplicarlas o quitarlas según el estado de la interfaz.

**Los cuatro métodos principales**

\`\`\`js
const panel = document.querySelector('#panel');

panel.classList.add('visible');         // agrega la clase "visible"
panel.classList.remove('oculto');       // quita la clase "oculto"
panel.classList.toggle('activo');       // si tiene la clase, la quita; si no, la agrega
panel.classList.contains('visible');    // devuelve true o false
\`\`\`

**add() — agregar una clase**

\`\`\`js
const boton = document.querySelector('#btn');
boton.classList.add('boton-primario', 'grande');  // puedes agregar varias a la vez
\`\`\`

No importa si la clase ya existe: add() no la duplica.

**remove() — quitar una clase**

\`\`\`js
boton.classList.remove('boton-primario');   // quita la clase
// Si la clase no existe, no lanza error; simplemente no hace nada
\`\`\`

**toggle() — alternar (mostrar/ocultar)**

\`\`\`js
// Cada vez que se llama, si la clase está → la quita; si no está → la agrega
boton.addEventListener('click', () => {
  menu.classList.toggle('abierto');
});
\`\`\`

toggle() es perfecto para menús desplegables, modales, acordeones y cualquier elemento que alterne entre dos estados.

**contains() — verificar si tiene la clase**

\`\`\`js
if (modal.classList.contains('visible')) {
  cerrarModal();
}
\`\`\`

Útil antes de tomar una decisión basada en el estado actual del elemento.

**¿Por qué classList es mejor que style inline?**

- Los estilos están en el CSS, donde pertenecen.
- El JavaScript solo describe el estado: "este menú está abierto".
- El CSS puede cambiar sin tocar el JavaScript.
- El código es más fácil de leer: \`.classList.add('error')\` dice claramente qué pasa.`,
    codeExample: `// ── clases.js ────────────────────────────────────────────────────────────

// HTML de referencia:
// <button id="btnMenu">Abrir menú</button>
// <nav id="menu" class="menu">...</nav>
// <div id="modal" class="modal oculto">...</div>
// <button id="btnModal">Ver detalles</button>
// <button id="btnCerrar">Cerrar</button>
// <form id="formulario">
//   <input id="email" type="email">
//   <button type="submit">Enviar</button>
// </form>

const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const modal = document.querySelector('#modal');
const btnModal = document.querySelector('#btnModal');
const btnCerrar = document.querySelector('#btnCerrar');
const emailInput = document.querySelector('#email');

// ── Menú desplegable con toggle ───────────────────────────────────────────

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-abierto');

  // Cambiar el texto del botón según el estado
  const estaAbierto = menu.classList.contains('menu-abierto');
  btnMenu.textContent = estaAbierto ? 'Cerrar menú' : 'Abrir menú';
});

// CSS correspondiente:
// .menu { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
// .menu-abierto { max-height: 500px; }

// ── Modal con add() y remove() ────────────────────────────────────────────

btnModal.addEventListener('click', () => {
  modal.classList.remove('oculto');   // quita "oculto", el modal aparece
  modal.classList.add('visible');
  document.body.classList.add('sin-scroll');   // evita scroll del fondo
});

btnCerrar.addEventListener('click', () => {
  modal.classList.add('oculto');
  modal.classList.remove('visible');
  document.body.classList.remove('sin-scroll');
});

// ── Validación de formulario con add/remove ───────────────────────────────

emailInput.addEventListener('blur', () => {
  const valor = emailInput.value.trim();
  const esValido = valor.includes('@') && valor.includes('.');

  if (esValido) {
    emailInput.classList.remove('input-error');
    emailInput.classList.add('input-ok');
  } else {
    emailInput.classList.remove('input-ok');
    emailInput.classList.add('input-error');
  }
});

// ── Agregar varias clases a la vez ────────────────────────────────────────

const tarjeta = document.querySelector('#tarjeta');
tarjeta.classList.add('animado', 'elevado', 'redondeado');   // tres a la vez`,
    keyPoints: [
      'classList.add() agrega una o varias clases sin duplicarlas; classList.remove() las quita sin lanzar error si no existen.',
      'classList.toggle() es ideal para alternar entre dos estados: si la clase está la quita, si no está la agrega.',
      'classList.contains() devuelve true o false y es útil para tomar decisiones basadas en el estado actual del elemento.',
      'Usar classList mantiene los estilos en el CSS y el estado en el JavaScript, separando correctamente las responsabilidades.',
      'toggle() acepta un segundo parámetro booleano: classList.toggle("clase", condicion) agrega si condicion es true, quita si es false.',
    ],
    exercise: {
      description:
        'Crea un botón con id "btnTema" y un div con id "pagina". Al hacer clic en el botón, alterna la clase "tema-oscuro" en el div usando classList.toggle(). Dentro del handler, usa classList.contains() para actualizar el texto del botón: si tiene "tema-oscuro" muestra "Cambiar a claro", si no muestra "Cambiar a oscuro".',
      hint: 'Usa btnTema.addEventListener("click", () => { ... }). Dentro, primero haz el toggle en pagina, luego con contains() verifica el estado y actualiza el textContent del botón.',
    },
    quiz: [
      {
        question: '¿Qué hace classList.toggle("activo") si el elemento YA tiene la clase "activo"?',
        options: [
          'Agrega otra copia de la clase "activo"',
          'No hace nada',
          'Quita la clase "activo"',
          'Lanza un error',
        ],
        correctAnswer: 'Quita la clase "activo"',
        correctFeedback: '¡Correcto! toggle alterna el estado: si la clase está, la quita; si no está, la agrega. Es perfecto para elementos que cambian entre dos estados.',
        incorrectFeedback: 'classList.toggle() alterna el estado de la clase. Si el elemento tiene la clase, la quita. Si no la tiene, la agrega. Por eso se llama "toggle" (interruptor).',
      },
      {
        question: '¿Qué devuelve classList.contains("visible") si el elemento NO tiene esa clase?',
        options: [
          'null',
          'undefined',
          'false',
          'true',
        ],
        correctAnswer: 'false',
        correctFeedback: '¡Exacto! contains() siempre devuelve un booleano: true si el elemento tiene la clase, false si no la tiene.',
        incorrectFeedback: 'classList.contains() siempre devuelve un booleano. Devuelve true si el elemento tiene esa clase, y false si no la tiene. Nunca devuelve null ni undefined.',
      },
      {
        question: '¿Cuál es la forma correcta de agregar dos clases al mismo tiempo con classList?',
        options: [
          'elemento.classList.add("clase1" + "clase2")',
          'elemento.classList.add("clase1", "clase2")',
          'elemento.classList.add(["clase1", "clase2"])',
          'elemento.classList = "clase1 clase2"',
        ],
        correctAnswer: 'elemento.classList.add("clase1", "clase2")',
        correctFeedback: '¡Correcto! add() acepta múltiples argumentos separados por comas. Puedes agregar todas las clases que necesites en una sola llamada.',
        incorrectFeedback: 'classList.add() acepta múltiples argumentos separados por comas: elemento.classList.add("clase1", "clase2"). No uses arrays ni concatenación de strings.',
      },
      {
        question: '¿Qué ocurre si llamas a classList.remove("inexistente") en un elemento que no tiene esa clase?',
        options: [
          'Lanza un TypeError',
          'No hace nada, simplemente ignora la operación',
          'Elimina todas las clases del elemento',
          'Devuelve false',
        ],
        correctAnswer: 'No hace nada, simplemente ignora la operación',
        correctFeedback: '¡Perfecto! classList.remove() es seguro: si la clase no existe, no lanza ningún error. Simplemente no hace nada.',
        incorrectFeedback: 'classList.remove() es tolerante: si la clase que intentas quitar no existe en el elemento, simplemente no hace nada. No lanza errores. Esto hace que sea seguro llamarlo sin verificar primero si la clase existe.',
      },
      {
        question: '¿Por qué se prefiere classList sobre element.style para manejar apariencia?',
        options: [
          'Porque classList es más rápido en todos los casos',
          'Porque element.style no puede cambiar colores',
          'Porque con classList los estilos quedan en el CSS y el JS solo describe el estado del elemento',
          'Porque classList funciona en todos los navegadores y style no',
        ],
        correctAnswer: 'Porque con classList los estilos quedan en el CSS y el JS solo describe el estado del elemento',
        correctFeedback: '¡Exacto! Separar responsabilidades: el CSS define cómo se ve cada estado, el JavaScript decide qué estado tiene el elemento. Eso hace el código más limpio y mantenible.',
        incorrectFeedback: 'La ventaja principal de classList es la separación de responsabilidades. El CSS define los estilos de cada estado (.activo, .error, .visible) y el JavaScript solo aplica o quita esas clases. Así cada lenguaje hace lo que sabe hacer mejor.',
      },
      {
        question: '¿Para qué situación es más adecuado classList.toggle()?',
        options: [
          'Para agregar una clase que nunca se quitará',
          'Para alternar un menú entre abierto y cerrado al hacer clic',
          'Para quitar todas las clases de un elemento',
          'Para verificar si una clase existe',
        ],
        correctAnswer: 'Para alternar un menú entre abierto y cerrado al hacer clic',
        correctFeedback: '¡Perfecto! toggle() es ideal para cualquier elemento que alterna entre dos estados: menús, acordeones, modo oscuro/claro, mostrar/ocultar contraseña.',
        incorrectFeedback: 'classList.toggle() brilla en situaciones donde un elemento alterna entre dos estados: menú abierto/cerrado, modal visible/oculto, tema claro/oscuro. Cada clic cambia el estado al opuesto sin necesidad de verificar el estado actual.',
      },
    ],
  },

  // ── Lección 86 ────────────────────────────────────────────────────────────
  {
    slug: 'crear-elementos-html',
    title: 'Crear elementos HTML desde JavaScript',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 86,
    description:
      'Aprende a crear elementos nuevos usando document.createElement().',
    explanation: `Hasta ahora hemos modificado elementos que ya existen en el HTML. Pero también puedes crear elementos nuevos desde cero con JavaScript y agregarlos a la página.

**document.createElement()**

\`\`\`js
const nuevoParrafo = document.createElement('p');
\`\`\`

Esto crea un elemento \`<p>\` en memoria, pero aún no está en la página. Ahora puedes configurarlo antes de insertarlo.

**Flujo completo: crear → configurar → insertar**

\`\`\`js
// 1. Crear el elemento
const tarjeta = document.createElement('div');

// 2. Configurar su contenido y atributos
tarjeta.textContent = 'Nuevo producto';
tarjeta.classList.add('tarjeta', 'animado');
tarjeta.id = 'tarjeta-nueva';

// 3. Insertar en el DOM (lo veremos a fondo en la siguiente lección)
document.querySelector('#contenedor').appendChild(tarjeta);
\`\`\`

**Construir estructuras más complejas**

\`\`\`js
const articulo = document.createElement('article');
articulo.classList.add('card');

const titulo = document.createElement('h2');
titulo.textContent = 'JavaScript desde Cero';

const precio = document.createElement('p');
precio.classList.add('precio');
precio.textContent = 'Gratis';

// Anidar: agregar hijos al artículo
articulo.appendChild(titulo);
articulo.appendChild(precio);

// Agregar a la página
document.querySelector('#lista').appendChild(articulo);
\`\`\`

**Ventajas sobre innerHTML**

| Enfoque | Seguridad | Rendimiento | Control |
|---------|-----------|-------------|---------|
| createElement | ✅ Seguro | ✅ Bueno para muchos elementos | ✅ Total |
| innerHTML | ⚠️ Riesgo XSS | ⚠️ Más lento (reparsea) | ⚠️ Limitado |

**Atributos personalizados y propiedades**

\`\`\`js
const enlace = document.createElement('a');
enlace.href = 'https://ejemplo.com';           // propiedad directa
enlace.target = '_blank';
enlace.textContent = 'Ver más';
enlace.setAttribute('aria-label', 'Ver detalles del curso');
\`\`\``,
    codeExample: `// ── crear-elementos.js ───────────────────────────────────────────────────

// HTML de referencia:
// <ul id="listaTareas"></ul>
// <div id="catalogo"></div>

const listaTareas = document.querySelector('#listaTareas');
const catalogo = document.querySelector('#catalogo');

// ── Crear un elemento simple ──────────────────────────────────────────────

function crearItemTarea(texto) {
  const li = document.createElement('li');
  li.classList.add('tarea-item');
  li.textContent = texto;
  return li;   // devuelve el elemento para que el caller decida dónde insertarlo
}

listaTareas.appendChild(crearItemTarea('Aprender createElement'));
listaTareas.appendChild(crearItemTarea('Practicar classList'));
listaTareas.appendChild(crearItemTarea('Completar el módulo 12'));

// ── Crear una tarjeta de producto completa ────────────────────────────────

function crearTarjetaProducto({ nombre, precio, categoria }) {
  // Contenedor principal
  const card = document.createElement('article');
  card.classList.add('card-producto');
  card.dataset.categoria = categoria;   // data-categoria para filtros

  // Badge de categoría
  const badge = document.createElement('span');
  badge.classList.add('badge');
  badge.textContent = categoria;

  // Título del producto
  const titulo = document.createElement('h3');
  titulo.textContent = nombre;   // ✅ textContent, no innerHTML

  // Precio
  const precioEl = document.createElement('p');
  precioEl.classList.add('precio');
  precioEl.textContent = \`$\${precio}\`;

  // Botón de compra
  const boton = document.createElement('button');
  boton.classList.add('btn-comprar');
  boton.textContent = 'Agregar al carrito';
  boton.addEventListener('click', () => {
    boton.textContent = '✓ Agregado';
    boton.classList.add('comprado');
    boton.disabled = true;
  });

  // Anidar todo dentro de card
  card.appendChild(badge);
  card.appendChild(titulo);
  card.appendChild(precioEl);
  card.appendChild(boton);

  return card;
}

// Insertar tarjetas en el catálogo
const productos = [
  { nombre: 'Teclado mecánico', precio: 85, categoria: 'tech' },
  { nombre: 'Silla ergonómica', precio: 299, categoria: 'oficina' },
  { nombre: 'Monitor 4K', precio: 450, categoria: 'tech' },
];

productos.forEach(producto => {
  catalogo.appendChild(crearTarjetaProducto(producto));
});`,
    keyPoints: [
      'document.createElement("etiqueta") crea un elemento en memoria; debes insertarlo en el DOM para que aparezca en la página.',
      'El flujo recomendado es: crear → configurar (textContent, classList, atributos) → insertar.',
      'Puedes anidar elementos usando appendChild() para construir estructuras HTML complejas desde JavaScript.',
      'Encapsula la creación de elementos en funciones reutilizables que devuelvan el elemento construido.',
      'createElement es más seguro que innerHTML porque los valores de textContent nunca se interpretan como HTML.',
    ],
    exercise: {
      description:
        'Crea una función `crearNotificacion(mensaje, tipo)` donde tipo puede ser "exito" o "error". La función debe: crear un div con classList.add("notificacion", tipo), asignar el mensaje con textContent, crear un botón de cierre con textContent "×" que al hacer clic elimine la notificación con element.remove(), y retornar el div completo.',
      hint: 'Crea el div principal, luego el botón por separado. El botón cierra la notificación: btnCerrar.addEventListener("click", () => div.remove()). Al final: div.appendChild(btnCerrar) y return div.',
    },
    quiz: [
      {
        question: '¿Qué hace document.createElement("button") exactamente?',
        options: [
          'Crea un botón y lo inserta automáticamente al final del body',
          'Crea un elemento button en memoria, listo para configurar e insertar',
          'Busca un botón existente en el DOM',
          'Crea una copia del primer botón que encuentre en el HTML',
        ],
        correctAnswer: 'Crea un elemento button en memoria, listo para configurar e insertar',
        correctFeedback: '¡Correcto! createElement solo crea el elemento en memoria. No aparece en la página hasta que lo insertes con appendChild(), append() u otro método de inserción.',
        incorrectFeedback: 'createElement crea el elemento en memoria del navegador, pero NO lo inserta en la página automáticamente. Debes configurarlo primero y luego insertarlo con append() o appendChild() para que el usuario lo vea.',
      },
      {
        question: '¿Cuál es el orden correcto al trabajar con createElement?',
        options: [
          'Insertar en el DOM → crear → configurar',
          'Configurar → crear → insertar en el DOM',
          'Crear → configurar → insertar en el DOM',
          'Crear → insertar en el DOM → configurar',
        ],
        correctAnswer: 'Crear → configurar → insertar en el DOM',
        correctFeedback: '¡Perfecto! Este orden es el más eficiente: primero creates el elemento, luego le añades clases, texto y atributos, y finalmente lo insertas una sola vez en el DOM.',
        incorrectFeedback: 'El orden recomendado es: 1) Crear con createElement, 2) Configurar (textContent, classList, atributos), 3) Insertar en el DOM. Configurar antes de insertar es más eficiente porque evita múltiples redibujos del navegador.',
      },
      {
        question: '¿Qué ventaja tiene createElement + textContent sobre innerHTML para agregar contenido dinámico?',
        options: [
          'createElement es siempre más rápido que innerHTML',
          'textContent previene ataques XSS porque no interpreta el contenido como HTML',
          'innerHTML no puede crear elementos con clases CSS',
          'createElement funciona en más navegadores que innerHTML',
        ],
        correctAnswer: 'textContent previene ataques XSS porque no interpreta el contenido como HTML',
        correctFeedback: '¡Exacto! Con createElement + textContent, el texto se trata como texto plano. Incluso si contiene etiquetas HTML o scripts, nunca se ejecutarán.',
        incorrectFeedback: 'La ventaja clave de seguridad es que textContent trata el valor como texto puro, nunca como HTML. Si usas innerHTML con datos dinámicos, un valor como "<script>robar()</script>" se ejecutaría. Con textContent, se mostraría como texto literal.',
      },
      {
        question: '¿Qué hace el siguiente código?\n`const p = document.createElement("p"); p.textContent = "Hola";`',
        options: [
          'Crea un párrafo con texto "Hola" y lo muestra en la página',
          'Crea un párrafo en memoria con texto "Hola", pero no lo muestra todavía',
          'Reemplaza el primer párrafo de la página por "Hola"',
          'Lanza un error porque falta appendChild',
        ],
        correctAnswer: 'Crea un párrafo en memoria con texto "Hola", pero no lo muestra todavía',
        correctFeedback: '¡Correcto! El elemento existe en la memoria de JavaScript pero no está conectado al DOM. Para verlo en la página necesitarías: document.body.appendChild(p) o similar.',
        incorrectFeedback: 'createElement solo crea el elemento en memoria. Aunque le asignes textContent, el elemento no aparece en la página hasta que lo insertes con appendChild(), append() o insertAdjacentElement(). No lanza error; simplemente espera a ser insertado.',
      },
      {
        question: '¿Cómo anidas un elemento "hijo" dentro de otro "padre" con createElement?',
        options: [
          'hijo.parent = padre',
          'padre.appendChild(hijo)',
          'padre.createElement(hijo)',
          'document.nest(padre, hijo)',
        ],
        correctAnswer: 'padre.appendChild(hijo)',
        correctFeedback: '¡Correcto! appendChild() toma un elemento y lo agrega como el último hijo del elemento padre. Es la forma clásica de anidar elementos creados con createElement.',
        incorrectFeedback: 'Para anidar elementos, usa padre.appendChild(hijo). Esto agrega "hijo" como el último hijo de "padre". También puedes usar padre.append(hijo) que es más moderno y flexible.',
      },
      {
        question: '¿Cuál de estas prácticas es la más recomendada para crear múltiples tarjetas dinámicas?',
        options: [
          'Concatenar strings HTML y usar innerHTML una vez',
          'Crear una función que devuelva el elemento configurado y llamarla por cada elemento',
          'Usar document.write() para escribir el HTML',
          'Modificar el HTML del archivo directamente',
        ],
        correctAnswer: 'Crear una función que devuelva el elemento configurado y llamarla por cada elemento',
        correctFeedback: '¡Perfecto! Encapsular la creación en una función hace el código reutilizable, testeable y seguro. Puedes llamarla con forEach() para cada elemento de un array.',
        incorrectFeedback: 'La mejor práctica es encapsular la lógica de creación en una función (como crearTarjeta(datos)) que devuelva el elemento listo para insertar. Luego úsala con forEach() o map() sobre tus datos. Esto hace el código limpio y reutilizable.',
      },
    ],
  },

  // ── Lección 87 ────────────────────────────────────────────────────────────
  {
    slug: 'insertar-elementos-pagina',
    title: 'Insertar elementos en la página',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 87,
    description:
      'Aprende a insertar elementos usando append(), prepend(), appendChild() e insertAdjacentHTML().',
    explanation: `Una vez que tienes un elemento creado con \`createElement\`, necesitas insertarlo en el DOM para que aparezca en la página. Hay varias formas de hacerlo, cada una con un propósito específico.

**appendChild() — el clásico**

\`\`\`js
const lista = document.querySelector('#lista');
const item = document.createElement('li');
item.textContent = 'Nuevo elemento';

lista.appendChild(item);   // lo inserta como el último hijo
\`\`\`

**append() — más moderno y flexible**

\`\`\`js
lista.append(item);                          // un elemento
lista.append(item1, item2, item3);           // varios elementos a la vez
lista.append('Texto directo');               // también acepta strings
lista.append(item, ' y esto es texto');      // mezcla de elementos y texto
\`\`\`

\`append()\` es la evolución de \`appendChild()\`. Puede recibir múltiples argumentos y también acepta strings de texto directamente.

**prepend() — insertar al principio**

\`\`\`js
lista.prepend(item);   // lo inserta como el primer hijo (al principio)
\`\`\`

Útil para listas donde los más nuevos van primero (como un feed de noticias o notificaciones).

**insertAdjacentHTML() — posición precisa con HTML**

\`\`\`js
const referencia = document.querySelector('#separador');

referencia.insertAdjacentHTML('beforebegin', '<h2>Sección nueva</h2>');
// Antes del elemento referencia (como hermano)

referencia.insertAdjacentHTML('afterbegin', '<li>Primero de la lista</li>');
// Como primer hijo dentro del elemento

referencia.insertAdjacentHTML('beforeend', '<li>Último de la lista</li>');
// Como último hijo dentro del elemento

referencia.insertAdjacentHTML('afterend', '<p>Después del elemento</p>');
// Después del elemento referencia (como hermano)
\`\`\`

**¿Cuándo usar cada uno?**

| Método | Cuándo usarlo |
|--------|---------------|
| \`appendChild()\` | Un solo elemento, compatibilidad máxima |
| \`append()\` | Varios elementos o texto, código moderno |
| \`prepend()\` | Insertar al principio (feeds, notificaciones) |
| \`insertAdjacentHTML()\` | HTML estático en una posición específica, con cuidado |`,
    codeExample: `// ── insertar.js ──────────────────────────────────────────────────────────

// HTML de referencia:
// <ul id="feed"></ul>
// <ul id="tareas"></ul>
// <div id="contenido">
//   <p id="intro">Bienvenido al curso</p>
// </div>

const feed = document.querySelector('#feed');
const tareas = document.querySelector('#tareas');
const intro = document.querySelector('#intro');
const contenido = document.querySelector('#contenido');

// ── append(): agregar al final ────────────────────────────────────────────

function agregarTarea(texto) {
  const li = document.createElement('li');
  li.textContent = texto;
  li.classList.add('tarea');
  tareas.append(li);   // al final de la lista
}

agregarTarea('Lección 87: Insertar elementos');
agregarTarea('Practicar append y prepend');

// ── prepend(): las noticias más nuevas van primero ────────────────────────

function agregarNoticia(titulo) {
  const li = document.createElement('li');
  li.classList.add('noticia');
  li.textContent = titulo;
  feed.prepend(li);   // siempre al principio → las nuevas quedan arriba
}

agregarNoticia('Noticia 1: JavaScript moderno');
agregarNoticia('Noticia 2: Nuevas APIs del DOM');  // esta queda primera

// ── append() con múltiples elementos ─────────────────────────────────────

const item1 = document.createElement('li');
item1.textContent = 'Elemento A';

const item2 = document.createElement('li');
item2.textContent = 'Elemento B';

tareas.append(item1, item2);   // los dos a la vez, en orden

// ── insertAdjacentHTML: posición exacta ───────────────────────────────────

// Insertar un título ANTES del párrafo intro (como hermano, antes de él)
intro.insertAdjacentHTML('beforebegin', '<h2 class="seccion">Cursos disponibles</h2>');

// Insertar un enlace DESPUÉS del párrafo intro
intro.insertAdjacentHTML('afterend', '<a href="/cursos">Ver todos los cursos →</a>');

// Insertar al final DENTRO del contenido
contenido.insertAdjacentHTML('beforeend', '<footer class="pie">Fin del contenido</footer>');

// ── Mover un elemento existente ───────────────────────────────────────────

// Si usas append() con un elemento que ya está en el DOM, lo MUEVE (no lo duplica)
const primeraTarea = tareas.querySelector('li');
feed.append(primeraTarea);   // el elemento se mueve de tareas → feed`,
    keyPoints: [
      'append() es la versión moderna de appendChild(): acepta múltiples elementos y también strings de texto directamente.',
      'prepend() inserta como primer hijo; es ideal para feeds y notificaciones donde los más nuevos van al principio.',
      'insertAdjacentHTML() permite insertar HTML en cuatro posiciones: beforebegin, afterbegin, beforeend, afterend.',
      'Si usas append() o appendChild() con un elemento que ya está en el DOM, lo mueve en lugar de duplicarlo.',
      'Para insertar HTML estático controlado, insertAdjacentHTML es conveniente; para datos dinámicos, prefiere createElement + textContent.',
    ],
    exercise: {
      description:
        'Crea una función `agregarMensaje(texto, tipo)` que cree un elemento <div> con las clases "mensaje" y el valor de tipo ("enviado" o "recibido"), asigne el texto con textContent, y lo inserte: si tipo es "enviado" usa append() (al final del chat), si tipo es "recibido" usa prepend() (al principio). Prueba la función con al menos dos mensajes de cada tipo.',
      hint: 'Selecciona el contenedor del chat con querySelector. Crea el div, agrega clases con classList.add("mensaje", tipo), asigna texto con textContent, y decide dónde insertarlo con un if: si tipo === "enviado" usa contenedor.append(div), si no, usa contenedor.prepend(div).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre append() y appendChild()?',
        options: [
          'appendChild() es más rápido que append()',
          'append() acepta múltiples argumentos y strings; appendChild() solo acepta un nodo',
          'append() solo funciona en navegadores modernos y appendChild() no',
          'No hay diferencia, son exactamente iguales',
        ],
        correctAnswer: 'append() acepta múltiples argumentos y strings; appendChild() solo acepta un nodo',
        correctFeedback: '¡Correcto! append() es más flexible: puede recibir varios elementos a la vez y también strings de texto. appendChild() solo acepta un nodo DOM como argumento.',
        incorrectFeedback: 'La diferencia clave es la flexibilidad: append() puede recibir múltiples argumentos y también strings de texto directamente. appendChild() solo acepta un argumento y debe ser un nodo DOM. Para código moderno, append() es la opción preferida.',
      },
      {
        question: '¿Dónde inserta el elemento `lista.prepend(item)` dentro de la lista?',
        options: [
          'Como el último hijo de la lista',
          'Antes del elemento lista (como hermano)',
          'Como el primer hijo de la lista',
          'Después del elemento lista (como hermano)',
        ],
        correctAnswer: 'Como el primer hijo de la lista',
        correctFeedback: '¡Exacto! prepend() inserta el elemento como el primer hijo del padre. Si la lista ya tenía elementos, el nuevo queda al principio.',
        incorrectFeedback: 'prepend() inserta el elemento como el PRIMER hijo del elemento padre. Es lo opuesto a append(). Útil para feeds o notificaciones donde los elementos más nuevos deben aparecer al principio.',
      },
      {
        question: '¿Cuáles son las cuatro posiciones de insertAdjacentHTML?',
        options: [
          'before, after, inside, outside',
          'beforebegin, afterbegin, beforeend, afterend',
          'top, bottom, left, right',
          'first, last, prev, next',
        ],
        correctAnswer: 'beforebegin, afterbegin, beforeend, afterend',
        correctFeedback: '¡Perfecto! Estas cuatro posiciones cubren todos los lugares posibles: antes/después del elemento como hermano, y al principio/final dentro del elemento.',
        incorrectFeedback: 'Las cuatro posiciones de insertAdjacentHTML son: "beforebegin" (antes del elemento, como hermano), "afterbegin" (primer hijo dentro del elemento), "beforeend" (último hijo dentro del elemento), "afterend" (después del elemento, como hermano).',
      },
      {
        question: '¿Qué ocurre si usas append() con un elemento que ya existe en el DOM?',
        options: [
          'Se crea una copia del elemento en la nueva posición',
          'Lanza un error porque el elemento ya está en el DOM',
          'El elemento se mueve de su posición actual a la nueva',
          'El elemento aparece dos veces en la página',
        ],
        correctAnswer: 'El elemento se mueve de su posición actual a la nueva',
        correctFeedback: '¡Correcto! Un elemento solo puede estar en un lugar del DOM. Si lo insertas en otro lugar, se mueve automáticamente. Si quieres copiarlo, primero usa element.cloneNode(true).',
        incorrectFeedback: 'En el DOM, cada elemento solo puede existir en un lugar. Si usas append() con un elemento que ya está en el DOM, el navegador lo mueve (no lo duplica). Para crear una copia, primero usa element.cloneNode(true).',
      },
      {
        question: '¿Cuándo es más apropiado usar prepend() sobre append()?',
        options: [
          'Cuando el elemento es muy grande',
          'Cuando tienes muchos elementos que insertar a la vez',
          'Cuando los elementos más nuevos deben aparecer al principio, como en un feed de noticias',
          'Cuando el contenedor tiene la clase "primero"',
        ],
        correctAnswer: 'Cuando los elementos más nuevos deben aparecer al principio, como en un feed de noticias',
        correctFeedback: '¡Exacto! prepend() es perfecto para feeds de actividad, notificaciones y listas donde los más recientes deben aparecer al principio sin tener que reordenar.',
        incorrectFeedback: 'prepend() es más apropiado cuando los elementos nuevos deben ir al principio de la lista, como en un feed de noticias, historial de mensajes o lista de notificaciones donde lo más reciente aparece arriba.',
      },
      {
        question: '¿Cuál de estos métodos acepta strings de texto directamente además de nodos DOM?',
        options: [
          'appendChild()',
          'append()',
          'insertBefore()',
          'replaceChild()',
        ],
        correctAnswer: 'append()',
        correctFeedback: '¡Correcto! append() puede recibir tanto nodos DOM como strings de texto. Por ejemplo: lista.append(elemento, " y más texto"). appendChild() solo acepta nodos.',
        incorrectFeedback: 'append() es el único de esta lista que acepta tanto nodos DOM como strings de texto directamente. appendChild() solo acepta un nodo DOM. Esto hace a append() más conveniente para muchos casos de uso.',
      },
    ],
  },

  // ── Lección 88 ────────────────────────────────────────────────────────────
  {
    slug: 'eliminar-elementos-dom',
    title: 'Eliminar elementos del DOM',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 88,
    description:
      'Aprende a eliminar elementos de la página usando remove() y otras técnicas seguras.',
    explanation: `Tan importante como agregar elementos es saber cómo eliminarlos. JavaScript ofrece formas directas y seguras de hacer esto.

**element.remove() — la forma moderna y directa**

\`\`\`js
const notificacion = document.querySelector('#notificacion');
notificacion.remove();   // se elimina a sí mismo del DOM
\`\`\`

El método \`remove()\` elimina el elemento directamente. No necesitas referencia al padre. Es la forma más simple y recomendada en código moderno.

**parent.removeChild(child) — la forma clásica**

\`\`\`js
const lista = document.querySelector('#lista');
const primerItem = lista.querySelector('li');

lista.removeChild(primerItem);
\`\`\`

\`removeChild()\` es más antigua pero útil cuando ya tienes referencia al padre. Lanza un error si el nodo no es hijo directo del padre.

**Verificar existencia antes de eliminar**

\`\`\`js
const elemento = document.querySelector('#panel');

if (elemento) {
  elemento.remove();   // solo elimina si existe
}
\`\`\`

Si el elemento no existe, \`querySelector\` devuelve \`null\` y llamar \`.remove()\` en null lanzaría un error. Siempre verifica primero con un if.

**Eliminar todos los hijos de un contenedor**

\`\`\`js
const contenedor = document.querySelector('#lista');

// Opción 1: innerHTML vacío (rápido pero no ejecuta cleanup de eventos)
contenedor.innerHTML = '';

// Opción 2: remove() en bucle (más explícito)
while (contenedor.firstChild) {
  contenedor.removeChild(contenedor.firstChild);
}

// Opción 3: replaceChildren() (moderna)
contenedor.replaceChildren();   // elimina todos los hijos
\`\`\`

**Eliminar con animación antes de remover**

\`\`\`js
function eliminarConAnimacion(elemento) {
  elemento.classList.add('desvaneciendo');   // clase CSS con transición de opacidad

  elemento.addEventListener('transitionend', () => {
    elemento.remove();   // elimina después de que termine la animación
  }, { once: true });
}
\`\`\``,
    codeExample: `// ── eliminar.js ──────────────────────────────────────────────────────────

// HTML de referencia:
// <ul id="listaTareas">
//   <li class="tarea">Tarea 1</li>
//   <li class="tarea">Tarea 2</li>
//   <li class="tarea">Tarea 3</li>
// </ul>
// <div id="notificacion" class="notif">¡Guardado correctamente!</div>
// <button id="btnCerrar">×</button>

const listaTareas = document.querySelector('#listaTareas');
const notificacion = document.querySelector('#notificacion');
const btnCerrar = document.querySelector('#btnCerrar');

// ── remove(): forma directa y moderna ────────────────────────────────────

btnCerrar.addEventListener('click', () => {
  notificacion.remove();   // la notificación desaparece
});

// ── Eliminar tarea específica al hacer clic ───────────────────────────────

function agregarTareaConBoton(texto) {
  const li = document.createElement('li');
  li.classList.add('tarea');

  const span = document.createElement('span');
  span.textContent = texto;

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '×';
  btnEliminar.classList.add('btn-eliminar');

  // El botón elimina su propio elemento li
  btnEliminar.addEventListener('click', () => {
    li.remove();   // elimina el li completo
  });

  li.append(span, btnEliminar);
  listaTareas.append(li);
}

agregarTareaConBoton('Estudiar classList');
agregarTareaConBoton('Practicar createElement');
agregarTareaConBoton('Completar ejercicios');

// ── Verificar existencia antes de eliminar ────────────────────────────────

function cerrarPanel(id) {
  const panel = document.querySelector(\`#\${id}\`);
  if (panel) {
    panel.remove();
  } else {
    console.warn(\`Panel "\${id}" no encontrado\`);
  }
}

cerrarPanel('modal-bienvenida');   // si existe, lo elimina; si no, avisa

// ── Eliminar con animación ────────────────────────────────────────────────

function eliminarConFade(elemento) {
  elemento.style.transition = 'opacity 0.4s ease';
  elemento.style.opacity = '0';

  elemento.addEventListener('transitionend', () => {
    elemento.remove();
  }, { once: true });   // { once: true } = el listener se elimina automáticamente
}

// ── Vaciar toda la lista ──────────────────────────────────────────────────

function vaciarLista() {
  listaTareas.replaceChildren();   // elimina todos los hijos de una vez
  console.log('Lista vaciada');
}`,
    keyPoints: [
      'element.remove() elimina el elemento del DOM directamente, sin necesitar referencia al padre. Es la forma más moderna.',
      'parent.removeChild(child) es la forma clásica; lanza error si el nodo no es hijo directo del padre indicado.',
      'Siempre verifica que el elemento existe con if (elemento) antes de llamar .remove() para evitar errores en tiempo de ejecución.',
      'Para vaciar un contenedor, usa replaceChildren() (moderna) o innerHTML = "" (rápida pero no limpia event listeners).',
      'Para eliminar con animación, agrega la clase de transición CSS y usa el evento transitionend para llamar remove() al final.',
    ],
    exercise: {
      description:
        'Crea una lista de tareas con id "miLista" que contenga al menos 3 items. Crea una función `eliminarTarea(li)` que use remove() para eliminar ese elemento. Luego crea otra función `vaciarLista()` que use replaceChildren() para eliminar todos los hijos de la lista. Agrega un botón "Vaciar todo" que llame a vaciarLista() al hacer clic.',
      hint: 'Para la función eliminarTarea(li), simplemente llama li.remove(). Para vaciarLista(), selecciona el elemento de lista y llama .replaceChildren() sin argumentos. El botón puede seleccionarse con querySelector y usar addEventListener("click", vaciarLista).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre element.remove() y parent.removeChild(child)?',
        options: [
          'remove() es más lento que removeChild()',
          'remove() no necesita referencia al padre; removeChild() sí requiere el padre',
          'removeChild() elimina el elemento; remove() solo lo oculta',
          'No hay diferencia práctica entre los dos',
        ],
        correctAnswer: 'remove() no necesita referencia al padre; removeChild() sí requiere el padre',
        correctFeedback: '¡Correcto! remove() es más simple: el elemento se elimina a sí mismo. removeChild() es más antiguo y requiere tener la referencia al nodo padre.',
        incorrectFeedback: 'La diferencia está en quién inicia la operación: remove() lo llamas directamente en el elemento que quieres eliminar (sin necesitar su padre). removeChild() lo llamas en el padre y le pasas el hijo como argumento.',
      },
      {
        question: '¿Qué error ocurre si llamas .remove() en un valor null?',
        options: [
          'No ocurre nada, null.remove() es seguro',
          'TypeError: Cannot read properties of null (reading "remove")',
          'El DOM se limpia completamente',
          'JavaScript convierte null a un elemento vacío',
        ],
        correctAnswer: 'TypeError: Cannot read properties of null (reading "remove")',
        correctFeedback: '¡Exacto! Si querySelector no encuentra el elemento, devuelve null. Llamar .remove() en null lanza un TypeError. Por eso siempre debes verificar con if (elemento) antes de llamar remove().',
        incorrectFeedback: 'Si querySelector() no encuentra un elemento, devuelve null. Llamar .remove() en null lanza un TypeError porque null no tiene métodos. Siempre verifica: const el = document.querySelector("#id"); if (el) { el.remove(); }',
      },
      {
        question: '¿Cuál es la forma más moderna de eliminar todos los hijos de un contenedor?',
        options: [
          'contenedor.innerHTML = ""',
          'contenedor.replaceChildren()',
          'contenedor.remove()',
          'delete contenedor.children',
        ],
        correctAnswer: 'contenedor.replaceChildren()',
        correctFeedback: '¡Correcto! replaceChildren() sin argumentos elimina todos los hijos. Es la forma más moderna y semánticamente clara.',
        incorrectFeedback: 'La forma más moderna es contenedor.replaceChildren() sin argumentos. También es común usar contenedor.innerHTML = "" (más rápido, pero no ejecuta cleanup de event listeners). contenedor.remove() eliminaría el contenedor mismo, no sus hijos.',
      },
      {
        question: '¿Qué hace { once: true } en addEventListener?',
        options: [
          'El evento se activa solo una vez y luego el listener se elimina automáticamente',
          'El evento solo ocurre una vez por segundo',
          'El listener se ejecuta antes que otros listeners',
          'El evento se activa solo si ocurre exactamente una vez',
        ],
        correctAnswer: 'El evento se activa solo una vez y luego el listener se elimina automáticamente',
        correctFeedback: '¡Perfecto! { once: true } es una opción muy útil para eventos que solo deben ocurrir una vez, como transitionend. Evita tener que llamar removeEventListener manualmente.',
        incorrectFeedback: '{ once: true } le dice al navegador que ejecute el callback solo la primera vez que ocurra el evento y luego elimine el listener automáticamente. Es muy útil para transitionend, animationend u otros eventos que solo deben ejecutarse una vez.',
      },
      {
        question: '¿Qué ocurre con los event listeners cuando eliminas un elemento con remove()?',
        options: [
          'Los event listeners permanecen activos aunque el elemento ya no esté en el DOM',
          'Los event listeners se eliminan automáticamente junto con el elemento',
          'Los event listeners se transfieren al elemento padre',
          'Los event listeners causan un error después de que el elemento es removido',
        ],
        correctAnswer: 'Los event listeners se eliminan automáticamente junto con el elemento',
        correctFeedback: '¡Correcto! Cuando un elemento es eliminado del DOM con remove(), sus event listeners también se eliminan. No hay "memory leak" por los listeners del elemento removido.',
        incorrectFeedback: 'Cuando usas remove(), el elemento y sus event listeners son eliminados por el recolector de basura de JavaScript. No dejan "memoria fantasma". Sin embargo, si tienes referencias externas al elemento, esas referencias impedirían que el garbage collector lo limpie.',
      },
      {
        question: '¿Por qué es importante verificar if (elemento) antes de llamar elemento.remove()?',
        options: [
          'Porque remove() lanza una advertencia si el elemento no existe',
          'Porque querySelector puede devolver null si no encuentra el elemento',
          'Porque el elemento podría estar en modo solo lectura',
          'Porque remove() solo funciona en elementos con id',
        ],
        correctAnswer: 'Porque querySelector puede devolver null si no encuentra el elemento',
        correctFeedback: '¡Exacto! querySelector devuelve null cuando no encuentra el selector. Llamar .remove() en null lanza un TypeError. La verificación if (elemento) previene este error.',
        incorrectFeedback: 'document.querySelector() devuelve null cuando no existe ningún elemento que coincida con el selector. Si intentas llamar .remove() en null, JavaScript lanza un TypeError. El if (elemento) actúa como salvaguarda antes de operar sobre el elemento.',
      },
    ],
  },

  // ── Lección 89 ────────────────────────────────────────────────────────────
  {
    slug: 'atributos-dataset',
    title: 'Atributos y data attributes',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 89,
    description:
      'Aprende a leer y modificar atributos, y a usar data attributes con dataset.',
    explanation: `Los atributos HTML como \`href\`, \`src\`, \`class\`, \`id\`, \`disabled\` y \`placeholder\` se pueden leer y modificar desde JavaScript. Además, puedes crear tus propios atributos personalizados usando el prefijo \`data-\`.

**Métodos para atributos estándar**

\`\`\`js
const enlace = document.querySelector('a');

// Leer un atributo
enlace.getAttribute('href');         // "/cursos"

// Escribir un atributo
enlace.setAttribute('href', '/inicio');
enlace.setAttribute('target', '_blank');

// Eliminar un atributo
enlace.removeAttribute('target');

// Verificar si tiene un atributo
enlace.hasAttribute('disabled');     // true o false
\`\`\`

**Propiedades directas vs getAttribute**

Muchos atributos estándar tienen una propiedad directa en el elemento:

\`\`\`js
const input = document.querySelector('input');

// Las dos formas funcionan para atributos estándar:
input.setAttribute('disabled', '');
input.disabled = true;              // propiedad directa (más cómoda)

enlace.setAttribute('href', '/cursos');
enlace.href = '/cursos';            // propiedad directa
\`\`\`

Para atributos personalizados (\`data-*\`), siempre usa \`dataset\` o \`getAttribute/setAttribute\`.

**Data attributes — atributos personalizados**

Los \`data-*\` attributes te permiten almacenar información extra en el HTML que puedes leer desde JavaScript:

\`\`\`html
<!-- En el HTML: -->
<button data-accion="eliminar" data-id="42" data-confirmacion="true">Eliminar</button>
\`\`\`

\`\`\`js
// En JavaScript, accede con dataset:
const boton = document.querySelector('button');

console.log(boton.dataset.accion);        // "eliminar"
console.log(boton.dataset.id);            // "42" (siempre string)
console.log(boton.dataset.confirmacion);  // "true" (string, no booleano)

// Escribir data attributes desde JavaScript:
boton.dataset.estado = 'activo';   // crea data-estado="activo"
\`\`\`

**Conversión de nombres — kebab-case → camelCase**

\`\`\`js
// data-nombre-usuario → dataset.nombreUsuario
// data-fecha-creacion → dataset.fechaCreacion
const el = document.querySelector('[data-nombre-usuario]');
console.log(el.dataset.nombreUsuario);
\`\`\`

**Casos de uso comunes**

- Guardar el ID de un item para enviarlo al servidor al hacer clic.
- Marcar el estado de un elemento (\`data-estado="activo"\`).
- Almacenar información para filtros (\`data-categoria="tech"\`).
- Pasar datos al JavaScript sin necesitar un array global.`,
    codeExample: `// ── atributos.js ─────────────────────────────────────────────────────────

// HTML de referencia:
// <input id="correo" type="email" placeholder="Tu correo" required>
// <a id="enlacePerfil" href="/perfil/1">Ver perfil</a>
// <ul id="listaProductos">
//   <li data-id="101" data-categoria="tech" data-precio="85">Teclado</li>
//   <li data-id="102" data-categoria="oficina" data-precio="299">Silla</li>
//   <li data-id="103" data-categoria="tech" data-precio="450">Monitor</li>
// </ul>
// <button id="btnFiltrar" data-filtro-activo="todos">Filtrar Tech</button>

const correo = document.querySelector('#correo');
const enlace = document.querySelector('#enlacePerfil');
const btnFiltrar = document.querySelector('#btnFiltrar');

// ── Leer y modificar atributos estándar ──────────────────────────────────

console.log(correo.getAttribute('type'));        // "email"
console.log(correo.getAttribute('placeholder')); // "Tu correo"
console.log(correo.hasAttribute('required'));    // true

// Deshabilitar el input:
correo.setAttribute('disabled', '');
// Equivalente con propiedad directa:
// correo.disabled = true;

// Habilitar de nuevo:
correo.removeAttribute('disabled');

// Cambiar el destino del enlace:
enlace.setAttribute('href', '/perfil/42');
enlace.setAttribute('target', '_blank');

// ── Leer data attributes de productos ────────────────────────────────────

const items = document.querySelectorAll('#listaProductos li');

items.forEach(item => {
  const id = item.dataset.id;              // "101", "102", etc.
  const categoria = item.dataset.categoria; // "tech" u "oficina"
  const precio = Number(item.dataset.precio); // convertir a número

  console.log(\`Producto \${id}: \${categoria} — $\${precio}\`);
});

// ── Filtrar por categoría usando dataset ──────────────────────────────────

btnFiltrar.addEventListener('click', () => {
  const filtroActual = btnFiltrar.dataset.filtroActivo;
  const nuevoFiltro = filtroActual === 'todos' ? 'tech' : 'todos';

  // Actualizar el estado del filtro en el propio botón
  btnFiltrar.dataset.filtroActivo = nuevoFiltro;
  btnFiltrar.textContent = nuevoFiltro === 'tech' ? 'Mostrar todos' : 'Filtrar Tech';

  items.forEach(item => {
    const visible = nuevoFiltro === 'todos' || item.dataset.categoria === nuevoFiltro;
    item.classList.toggle('oculto', !visible);
  });
});

// ── Escribir data attributes desde JavaScript ─────────────────────────────

items.forEach((item, index) => {
  item.dataset.posicion = index + 1;   // agrega data-posicion="1", "2", "3"
  item.dataset.seleccionado = 'false'; // estado inicial
});

// Seleccionar un item al hacer clic:
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => { i.dataset.seleccionado = 'false'; });
    item.dataset.seleccionado = 'true';
    console.log('Seleccionado:', item.dataset.id);
  });
});`,
    keyPoints: [
      'getAttribute(), setAttribute(), removeAttribute() y hasAttribute() funcionan con cualquier atributo HTML.',
      'Los atributos estándar (href, disabled, type) también tienen propiedades directas en el elemento que son más cómodas de usar.',
      'Los data attributes (data-*) permiten almacenar datos personalizados en elementos HTML, accesibles mediante element.dataset.',
      'Los nombres data-kebab-case se convierten a camelCase en dataset: data-nombre-usuario → dataset.nombreUsuario.',
      'Los valores de dataset siempre son strings; convierte a número con Number() o a booleano con comparación cuando sea necesario.',
    ],
    exercise: {
      description:
        'Crea tres botones en HTML con los atributos data-accion="copiar", data-accion="compartir" y data-accion="eliminar". Agrega un event listener a cada botón que lea su dataset.accion y muestre en un div con id "resultado" el mensaje "Acción ejecutada: [accion]". Además, guarda en dataset.ultimaEjecucion la hora actual (new Date().toLocaleTimeString()) cada vez que se haga clic.',
      hint: 'Selecciona todos los botones con querySelectorAll("[data-accion]") y usa forEach para agregar el listener. Dentro del handler, lee this.dataset.accion o event.currentTarget.dataset.accion. Para la hora: btn.dataset.ultimaEjecucion = new Date().toLocaleTimeString().',
    },
    quiz: [
      {
        question: '¿Cómo se accede al atributo data-nombre-usuario desde JavaScript?',
        options: [
          'elemento.dataset["data-nombre-usuario"]',
          'elemento.getAttribute("nombre-usuario")',
          'elemento.dataset.nombreUsuario',
          'elemento["data-nombre-usuario"]',
        ],
        correctAnswer: 'elemento.dataset.nombreUsuario',
        correctFeedback: '¡Correcto! Los atributos data-* se convierten a camelCase en dataset: el guion se quita y la letra siguiente va en mayúscula.',
        incorrectFeedback: 'Los data attributes se acceden con dataset en camelCase. El atributo data-nombre-usuario en HTML se convierte a dataset.nombreUsuario en JavaScript: cada guion se elimina y la letra siguiente pasa a mayúscula.',
      },
      {
        question: '¿Qué tipo de valor devuelve siempre dataset?',
        options: [
          'El tipo original del valor (número, booleano, etc.)',
          'Siempre un string',
          'Un número si el valor es numérico',
          'Un objeto JSON',
        ],
        correctAnswer: 'Siempre un string',
        correctFeedback: '¡Exacto! dataset siempre devuelve strings. Si guardaste "42", recibes "42" no 42. Convierte con Number() o parseInt() cuando necesites operar matemáticamente.',
        incorrectFeedback: 'Todos los valores de dataset son strings, sin importar qué guardaste. El atributo data-precio="85" devuelve la cadena "85", no el número 85. Siempre convierte con Number(), parseInt() o comparaciones estrictas según lo necesites.',
      },
      {
        question: '¿Qué hace elemento.removeAttribute("disabled")?',
        options: [
          'Establece disabled en false',
          'Elimina completamente el atributo disabled del elemento',
          'Oculta el elemento deshabilitado',
          'Lanza un error si el atributo no existe',
        ],
        correctAnswer: 'Elimina completamente el atributo disabled del elemento',
        correctFeedback: '¡Correcto! removeAttribute elimina el atributo del elemento, habilitándolo de nuevo. Es diferente a setAttribute("disabled", "false") que mantendría el atributo (el elemento seguiría deshabilitado).',
        incorrectFeedback: 'removeAttribute() elimina físicamente el atributo del elemento HTML. Para habilitar un input deshabilitado, debes usar removeAttribute("disabled") o la propiedad directa: elemento.disabled = false. Hacer setAttribute("disabled", "false") NO funcionaría porque el atributo seguiría presente.',
      },
      {
        question: '¿Cómo verificas si un elemento tiene el atributo "required"?',
        options: [
          'elemento.getAttribute("required") === true',
          'elemento.required !== undefined',
          'elemento.hasAttribute("required")',
          '"required" in elemento',
        ],
        correctAnswer: 'elemento.hasAttribute("required")',
        correctFeedback: '¡Perfecto! hasAttribute() devuelve true si el elemento tiene ese atributo (con cualquier valor) y false si no lo tiene. Es la forma semánticamente correcta de verificar presencia de atributo.',
        incorrectFeedback: 'La forma correcta es elemento.hasAttribute("required"), que devuelve true o false. getAttribute("required") devuelve el valor del atributo o null, lo que puede dar resultados confusos en comparaciones.',
      },
      {
        question: '¿Cuál es la diferencia entre `enlace.href` y `enlace.getAttribute("href")`?',
        options: [
          'Son exactamente iguales en todos los casos',
          'enlace.href devuelve la URL absoluta completa; getAttribute devuelve el valor original del HTML',
          'getAttribute es más lento que la propiedad directa',
          'enlace.href solo funciona en elementos <a>',
        ],
        correctAnswer: 'enlace.href devuelve la URL absoluta completa; getAttribute devuelve el valor original del HTML',
        correctFeedback: '¡Exacto! Si el HTML tiene href="/cursos", enlace.href devuelve "https://misitio.com/cursos" (URL completa), mientras que enlace.getAttribute("href") devuelve "/cursos" (el valor original).',
        incorrectFeedback: 'La diferencia está en la normalización: la propiedad directa enlace.href devuelve la URL absoluta que el navegador resuelve. getAttribute("href") devuelve el valor literal que está en el HTML, sin procesar.',
      },
      {
        question: '¿Cómo creas el atributo data-estado="activo" desde JavaScript?',
        options: [
          'elemento["data-estado"] = "activo"',
          'elemento.setAttribute("estado", "activo")',
          'elemento.dataset.estado = "activo"',
          'elemento.data.estado = "activo"',
        ],
        correctAnswer: 'elemento.dataset.estado = "activo"',
        correctFeedback: '¡Correcto! Asignar a dataset crea automáticamente el atributo data-* correspondiente en el HTML. También puedes usar setAttribute("data-estado", "activo").',
        incorrectFeedback: 'Para crear un data attribute desde JavaScript, asigna a dataset: elemento.dataset.estado = "activo". Esto crea automáticamente el atributo data-estado="activo" en el HTML. También funciona setAttribute("data-estado", "activo").',
      },
    ],
  },

  // ── Lección 90 ────────────────────────────────────────────────────────────
  {
    slug: 'buenas-practicas-dom',
    title: 'Buenas prácticas al manipular el DOM',
    module: 'Manipulación del DOM',
    moduleNumber: 12,
    order: 90,
    description:
      'Aprende buenas prácticas para escribir código DOM claro, seguro y fácil de mantener.',
    explanation: `Manipular el DOM es sencillo, pero escribir código DOM que sea fácil de mantener, seguro y eficiente requiere seguir algunas prácticas que los desarrolladores experimentados aplican constantemente.

**1. Cachea los selectores en variables**

\`\`\`js
// ❌ Mal: busca en el DOM cada vez que se ejecuta el handler
boton.addEventListener('click', () => {
  document.querySelector('#resultado').textContent = 'Listo';
  document.querySelector('#resultado').classList.add('ok');
});

// ✅ Bien: busca una sola vez y guarda la referencia
const resultado = document.querySelector('#resultado');
boton.addEventListener('click', () => {
  resultado.textContent = 'Listo';
  resultado.classList.add('ok');
});
\`\`\`

**2. Usa funciones pequeñas con un solo propósito**

\`\`\`js
// ❌ Un event listener que hace demasiado
btnGuardar.addEventListener('click', () => {
  // validar, guardar, actualizar UI, mostrar notificación...
  // 40 líneas de código mezclado
});

// ✅ Separar responsabilidades
btnGuardar.addEventListener('click', () => {
  if (!validarFormulario()) return;
  const datos = obtenerDatos();
  guardarDatos(datos);
  mostrarNotificacion('Guardado correctamente');
  actualizarUI();
});
\`\`\`

**3. Nunca uses innerHTML con datos del usuario**

\`\`\`js
// ❌ Peligroso — XSS
contenedor.innerHTML = \`<p>Hola \${nombreUsuario}</p>\`;

// ✅ Seguro
const p = document.createElement('p');
p.textContent = \`Hola \${nombreUsuario}\`;
contenedor.appendChild(p);
\`\`\`

**4. Separa la lógica de la manipulación de UI**

\`\`\`js
// ❌ Lógica mezclada con DOM
function procesarPedido() {
  const total = precio * cantidad;
  document.querySelector('#total').textContent = total;
  document.querySelector('#boton').disabled = true;
}

// ✅ Separados
function calcularTotal(precio, cantidad) { return precio * cantidad; }
function actualizarTotalUI(total) { document.querySelector('#total').textContent = total; }
function deshabilitarBoton() { document.querySelector('#boton').disabled = true; }
\`\`\`

**5. Organiza el código en secciones**

\`\`\`js
// ── Selección de elementos ────────────────────────────────────────────────
const boton = document.querySelector('#btn');
const lista = document.querySelector('#lista');

// ── Funciones de utilidad ─────────────────────────────────────────────────
function crearItem(texto) { ... }
function eliminarItem(item) { ... }

// ── Manejadores de eventos ────────────────────────────────────────────────
boton.addEventListener('click', agregarNuevoItem);
lista.addEventListener('click', manejarClickEnLista);

// ── Inicialización ────────────────────────────────────────────────────────
cargarItemsIniciales();
\`\`\`

**6. Usa event delegation para listas dinámicas**

\`\`\`js
// ❌ Un listener por cada item (ineficiente si hay muchos o son dinámicos)
document.querySelectorAll('.item').forEach(el => {
  el.addEventListener('click', handler);
});

// ✅ Un solo listener en el contenedor
lista.addEventListener('click', (evento) => {
  const item = evento.target.closest('.item');
  if (item) handler(item);
});
\`\`\``,
    codeExample: `// ── buenas-practicas.js ──────────────────────────────────────────────────
// Ejemplo: lista de tareas completa aplicando todas las buenas prácticas

// ═══════════════════════════════════════════════════════════════════════════
// 1. SELECCIÓN DE ELEMENTOS (una sola vez, al inicio)
// ═══════════════════════════════════════════════════════════════════════════

const formulario = document.querySelector('#formTarea');
const inputTarea = document.querySelector('#inputTarea');
const listaTareas = document.querySelector('#listaTareas');
const contadorEl = document.querySelector('#contador');

// ═══════════════════════════════════════════════════════════════════════════
// 2. ESTADO DE LA APLICACIÓN (separado del DOM)
// ═══════════════════════════════════════════════════════════════════════════

let tareas = [];
let contadorTotal = 0;

// ═══════════════════════════════════════════════════════════════════════════
// 3. FUNCIONES DE LÓGICA (sin tocar el DOM)
// ═══════════════════════════════════════════════════════════════════════════

function validarTarea(texto) {
  return texto.trim().length >= 3;
}

function crearTarea(texto) {
  contadorTotal++;
  return { id: contadorTotal, texto: texto.trim(), completada: false };
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. FUNCIONES DE UI (solo manipulación del DOM)
// ═══════════════════════════════════════════════════════════════════════════

function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.classList.add('tarea-item');
  li.dataset.id = tarea.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = tarea.completada;

  const span = document.createElement('span');
  span.textContent = tarea.texto;   // ✅ textContent, nunca innerHTML con datos del usuario

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '×';
  btnEliminar.classList.add('btn-eliminar');
  btnEliminar.setAttribute('aria-label', \`Eliminar tarea: \${tarea.texto}\`);

  li.append(checkbox, span, btnEliminar);
  return li;
}

function actualizarContador() {
  const pendientes = tareas.filter(t => !t.completada).length;
  contadorEl.textContent = \`\${pendientes} tarea\${pendientes !== 1 ? 's' : ''} pendiente\${pendientes !== 1 ? 's' : ''}\`;
}

function renderizarLista() {
  listaTareas.replaceChildren();   // vaciar antes de re-renderizar
  tareas.forEach(tarea => {
    listaTareas.append(crearElementoTarea(tarea));
  });
  actualizarContador();
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. MANEJADORES DE EVENTOS
// ═══════════════════════════════════════════════════════════════════════════

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = inputTarea.value;

  if (!validarTarea(texto)) {
    inputTarea.classList.add('input-error');
    return;
  }

  inputTarea.classList.remove('input-error');
  tareas.push(crearTarea(texto));
  inputTarea.value = '';
  inputTarea.focus();
  renderizarLista();
});

// ✅ Event delegation: un solo listener para toda la lista
listaTareas.addEventListener('click', (evento) => {
  const li = evento.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return;

  if (evento.target.type === 'checkbox') {
    tarea.completada = evento.target.checked;
    li.classList.toggle('completada', tarea.completada);
    actualizarContador();
  }

  if (evento.target.classList.contains('btn-eliminar')) {
    tareas = tareas.filter(t => t.id !== id);
    li.remove();
    actualizarContador();
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// 6. INICIALIZACIÓN
// ═══════════════════════════════════════════════════════════════════════════

['Estudiar DOM', 'Practicar classList', 'Completar el módulo'].forEach(texto => {
  tareas.push(crearTarea(texto));
});
renderizarLista();`,
    keyPoints: [
      'Cachea los selectores en variables al inicio del script para evitar buscar en el DOM repetidamente en cada evento.',
      'Escribe funciones pequeñas con un único propósito: separa la lógica de negocio de las funciones que manipulan el DOM.',
      'Nunca uses innerHTML con datos que provengan del usuario; siempre usa textContent o createElement para prevenir XSS.',
      'La event delegation (un listener en el padre) es más eficiente que poner un listener en cada elemento hijo, especialmente con listas dinámicas.',
      'Organiza el código en secciones claras: selección de elementos, estado, lógica, UI, handlers e inicialización.',
      'Usa classList para cambios de apariencia y element.style solo para valores dinámicos calculados en JavaScript.',
    ],
    exercise: {
      description:
        'Refactoriza este código aplicando buenas prácticas: tienes un botón con id "btnAgregar" y una lista con id "lista". Actualmente, el addEventListener del botón hace querySelector("#lista") en cada clic, usa innerHTML para insertar el texto del input, y todo está en un bloque sin funciones. Reescríbelo: cachea los selectores al inicio, crea una función crearItem(texto) que use createElement + textContent, y una función agregarItem() que valide que el texto no esté vacío antes de agregar.',
      hint: 'Primero declara las variables: const btnAgregar = ..., const lista = ..., const input = .... Luego crea la función crearItem(texto) que devuelva un <li> con textContent. Crea agregarItem() que lea input.value, valide con if (texto.trim()) y llame a lista.append(crearItem(texto)). Conecta con btnAgregar.addEventListener("click", agregarItem).',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda cachear los selectores en variables al inicio?',
        options: [
          'Porque querySelector puede cambiar de comportamiento con el tiempo',
          'Para evitar buscar en todo el DOM cada vez que el selector se ejecuta en un evento',
          'Porque las variables ocupan menos memoria que las llamadas a funciones',
          'Porque los elementos cambian de id cuando se modifican',
        ],
        correctAnswer: 'Para evitar buscar en todo el DOM cada vez que el selector se ejecuta en un evento',
        correctFeedback: '¡Correcto! Guardar la referencia en una variable evita que el navegador recorra todo el árbol DOM en cada ejecución del evento. Es especialmente importante en handlers que se ejecutan frecuentemente.',
        incorrectFeedback: 'querySelector recorre el árbol DOM para encontrar el elemento. Si lo llamas dentro de un event handler, lo hace en cada clic. Guardar el resultado en una variable al inicio significa buscarlo solo una vez.',
      },
      {
        question: '¿Qué es "event delegation" y cuándo es útil?',
        options: [
          'Es poner un listener en cada elemento de una lista para mayor control',
          'Es poner un solo listener en el padre y usar event.target para identificar qué hijo fue clicado',
          'Es usar setTimeout para retrasar la ejecución de un evento',
          'Es delegar la creación de eventos al navegador automáticamente',
        ],
        correctAnswer: 'Es poner un solo listener en el padre y usar event.target para identificar qué hijo fue clicado',
        correctFeedback: '¡Exacto! Con event delegation, un solo listener maneja todos los clics de los hijos. Es especialmente útil cuando los hijos son dinámicos (se agregan o eliminan) porque el listener en el padre sigue funcionando para los nuevos elementos.',
        incorrectFeedback: 'Event delegation: en lugar de poner un listener en cada item de la lista, pones uno en el contenedor padre. Cuando el usuario hace clic en un item, el evento "sube" al padre y allí lo detectas con evento.target. Funciona para elementos dinámicos y es más eficiente.',
      },
      {
        question: '¿Cuál de estas opciones aplica correctamente la separación entre lógica y UI?',
        options: [
          'Una función que calcula el total Y actualiza el DOM en el mismo bloque',
          'Funciones separadas: una calcula el total (sin DOM) y otra actualiza el DOM con el resultado',
          'Usar innerHTML para insertar el resultado directamente en la función de cálculo',
          'Declarar todas las variables del DOM dentro de cada función que las necesite',
        ],
        correctAnswer: 'Funciones separadas: una calcula el total (sin DOM) y otra actualiza el DOM con el resultado',
        correctFeedback: '¡Perfecto! Separar la lógica del DOM hace que las funciones sean reutilizables, fáciles de testear y fáciles de modificar. Si cambia la UI, no tienes que tocar la lógica y viceversa.',
        incorrectFeedback: 'La separación de responsabilidades significa: las funciones de lógica calculan y transforman datos (sin tocar el DOM) y las funciones de UI muestran esos resultados en el DOM. Esto hace el código más fácil de probar, mantener y modificar.',
      },
      {
        question: '¿Por qué es importante usar { once: true } en listeners de eventos como transitionend?',
        options: [
          'Porque sin él el evento no funciona correctamente',
          'Porque transitionend puede dispararse múltiples veces y el listener se acumula si no se elimina',
          'Porque es más rápido que el addEventListener normal',
          'Porque solo funciona con eventos de animación',
        ],
        correctAnswer: 'Porque transitionend puede dispararse múltiples veces y el listener se acumula si no se elimina',
        correctFeedback: '¡Correcto! Sin { once: true }, si llamas a la función de animación varias veces, acumulas múltiples listeners de transitionend en el mismo elemento. { once: true } elimina el listener automáticamente tras la primera ejecución.',
        incorrectFeedback: '{ once: true } elimina el listener automáticamente después de la primera ejecución. Sin él, cada vez que llames a la función de animación agregas otro listener de transitionend, acumulando handlers que se ejecutan múltiples veces. Previene este tipo de "memory leak".',
      },
      {
        question: '¿Cuál es la forma más segura de mostrar el nombre de un usuario en el DOM?',
        options: [
          'div.innerHTML = `<b>${nombreUsuario}</b>`',
          'div.innerText = `<b>${nombreUsuario}</b>`',
          'const b = document.createElement("b"); b.textContent = nombreUsuario; div.appendChild(b)',
          'div.setAttribute("innerHTML", nombreUsuario)',
        ],
        correctAnswer: 'const b = document.createElement("b"); b.textContent = nombreUsuario; div.appendChild(b)',
        correctFeedback: '¡Perfecto! Crear el elemento con createElement y asignar los datos con textContent es la forma más segura: ningún dato del usuario se interpreta como HTML.',
        incorrectFeedback: 'La forma más segura es createElement + textContent. Ni innerHTML ni innerText son seguros para datos del usuario porque con innerHTML el texto se parsea como HTML (riesgo XSS), e innerText con etiquetas podría tener comportamiento inesperado.',
      },
      {
        question: '¿Por qué es recomendable organizar el código DOM en secciones (selectores, funciones, handlers, inicialización)?',
        options: [
          'Porque JavaScript lo requiere para funcionar correctamente',
          'Porque facilita encontrar y modificar el código, y hace más clara la estructura de la aplicación',
          'Porque los navegadores ejecutan las secciones en paralelo para mayor rendimiento',
          'Porque es un requisito de las herramientas de linting',
        ],
        correctAnswer: 'Porque facilita encontrar y modificar el código, y hace más clara la estructura de la aplicación',
        correctFeedback: '¡Exacto! La organización por secciones es una convención que hace que cualquier desarrollador (incluyendo tú mismo en el futuro) pueda entender rápidamente dónde está cada parte del código.',
        incorrectFeedback: 'Organizar el código en secciones (selectores, lógica, UI, handlers, inicialización) no es un requisito técnico de JavaScript, sino una buena práctica de mantenibilidad. Hace que el código sea predecible y fácil de navegar para todo el equipo.',
      },
      {
        question: '¿Cuándo tiene sentido usar element.style directamente en lugar de classList?',
        options: [
          'Para aplicar un tema oscuro a toda la aplicación',
          'Para mostrar u ocultar un modal',
          'Para establecer el ancho de una barra de progreso calculado dinámicamente en JavaScript',
          'Para cambiar el color de un botón al pasar el ratón',
        ],
        correctAnswer: 'Para establecer el ancho de una barra de progreso calculado dinámicamente en JavaScript',
        correctFeedback: '¡Correcto! Cuando el valor CSS es calculado en tiempo de ejecución (como un porcentaje variable), no puedes definirlo en una clase de antemano. Ahí element.style tiene sentido. Para cambios de apariencia predefinidos, prefiere classList.',
        incorrectFeedback: 'element.style es apropiado cuando el valor es dinámico y calculado en JavaScript, como una posición o un porcentaje que varía en cada interacción. Para cambios de apariencia definidos de antemano (mostrar/ocultar, tema, estado), siempre es mejor agregar o quitar clases CSS.',
      },
    ],
  },
]

export const jsModule12: Module = {
  number: 12,
  title: 'Manipulación del DOM',
  level: 'nivel3',
  lessons: lessonsJsModule12,
}
