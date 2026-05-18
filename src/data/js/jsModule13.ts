import type { Lesson, Module } from '@/types'

export const lessonsJsModule13: Lesson[] = [
  // ── Lección 91 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-un-evento',
    title: '¿Qué es un evento?',
    module: 'Eventos',
    moduleNumber: 13,
    order: 91,
    description: 'Aprende qué es un evento y cómo JavaScript puede responder a acciones del usuario.',
    explanation: `Un **evento** es cualquier acción que ocurre en el navegador: el usuario hace clic, escribe una tecla, mueve el ratón, envía un formulario, o incluso la página termina de cargarse.

**Analogía:** Los eventos son como las alarmas de un edificio. Cuando alguien abre una puerta (evento), suena una alarma (función que se ejecuta). Puedes colocar alarmas en distintas puertas (elementos HTML) para distintas situaciones.

**¿Cómo funciona?**

1. El navegador siempre está "escuchando" lo que hace el usuario.
2. Cuando algo ocurre, el navegador dispara un evento.
3. Si tenías un "oyente" (listener) registrado para ese evento, tu función se ejecuta.

**Tipos de eventos más comunes**

| Categoría | Eventos |
|-----------|---------|
| Ratón | \`click\`, \`dblclick\`, \`mouseover\`, \`mouseout\` |
| Teclado | \`keydown\`, \`keyup\`, \`keypress\` |
| Formulario | \`submit\`, \`input\`, \`change\`, \`focus\`, \`blur\` |
| Ventana | \`load\`, \`resize\`, \`scroll\` |

**El ciclo de un evento**
\`\`\`
Usuario hace clic
  → Navegador detecta el click
  → Navegar crea un objeto "event" con información
  → Ejecuta todas las funciones registradas para ese evento
\`\`\`

Los eventos son la base de toda interacción web. Sin ellos, las páginas serían solo texto estático.`,
    codeExample: `// ── eventos-introduccion.js ──────────────────────────────────────────────

// Los eventos ocurren constantemente en el navegador.
// Aquí algunos ejemplos de lo que JS puede detectar:

// 1. CLICK en un botón
document.querySelector('#miBoton').addEventListener('click', () => {
  console.log('El usuario hizo clic');
});

// 2. TECLA presionada en cualquier parte de la página
document.addEventListener('keydown', (event) => {
  console.log('Tecla presionada:', event.key);
});

// 3. FORMULARIO enviado
document.querySelector('#miFormulario').addEventListener('submit', (event) => {
  event.preventDefault(); // evitar que recargue la página
  console.log('Formulario enviado');
});

// 4. MOUSE encima de un elemento
document.querySelector('.tarjeta').addEventListener('mouseover', () => {
  console.log('Mouse sobre la tarjeta');
});

// 5. PÁGINA cargada completamente
window.addEventListener('load', () => {
  console.log('La página terminó de cargar');
});`,
    keyPoints: [
      'Un evento es cualquier acción que ocurre en el navegador (click, tecla, scroll, etc.)',
      'JavaScript puede "escuchar" eventos y ejecutar código cuando ocurren',
      'Los eventos más comunes son: click, keydown, submit, input, change',
      'El navegador crea automáticamente un objeto event con información sobre lo ocurrido',
      'Sin eventos, las páginas web serían completamente estáticas',
    ],
    exercise: {
      description: 'Abre la consola del navegador y escribe: document.addEventListener("click", () => console.log("¡Clic en la página!")). Luego haz clic en cualquier parte. ¿Qué ves en la consola?',
      hint: 'Cada clic en cualquier parte de la página debería mostrar el mensaje en la consola.',
    },
    quiz: [
      {
        question: '¿Qué es un evento en JavaScript?',
        options: [
          'Un error que ocurre en el código',
          'Una acción que ocurre en el navegador, como un clic o una tecla presionada',
          'Una función especial de JavaScript',
          'Un tipo de variable',
        ],
        correctAnswer: 'Una acción que ocurre en el navegador, como un clic o una tecla presionada',
        correctFeedback: '¡Correcto! Los eventos son acciones que ocurren en el navegador y a las que JavaScript puede responder.',
        incorrectFeedback: 'Incorrecto. Un evento es una acción que ocurre en el navegador (click, tecla, scroll, etc.) a la cual JavaScript puede reaccionar con una función.',
      },
      {
        question: '¿Cuál de estos NO es un evento del navegador?',
        options: ['click', 'keydown', 'submit', 'console'],
        correctAnswer: 'console',
        correctFeedback: '¡Correcto! console es un objeto de JavaScript para imprimir, no un evento.',
        incorrectFeedback: 'Incorrecto. click, keydown y submit son eventos reales del navegador. console es un objeto de JavaScript para depuración, no un evento.',
      },
      {
        question: '¿Qué hace el navegador cuando ocurre un evento?',
        options: [
          'Recarga la página automáticamente',
          'Ejecuta todas las funciones registradas como oyentes para ese evento',
          'Muestra una alerta al usuario',
          'Detiene la ejecución de JavaScript',
        ],
        correctAnswer: 'Ejecuta todas las funciones registradas como oyentes para ese evento',
        correctFeedback: '¡Exacto! El navegador ejecuta los "listeners" (oyentes) registrados para ese evento.',
        incorrectFeedback: 'Incorrecto. Cuando ocurre un evento, el navegador ejecuta todas las funciones que estaban escuchando ese evento (los listeners registrados con addEventListener).',
      },
      {
        question: '¿Qué evento usarías para detectar que el usuario escribió texto en un input?',
        options: ['click', 'submit', 'input', 'load'],
        correctAnswer: 'input',
        correctFeedback: '¡Correcto! El evento input se dispara cada vez que el usuario escribe o modifica el contenido de un campo.',
        incorrectFeedback: 'Incorrecto. El evento input se dispara en tiempo real mientras el usuario escribe. submit es solo cuando se envía el formulario. load es cuando carga la página.',
      },
      {
        question: '¿Para qué sirve el objeto "event" que recibe el callback de un listener?',
        options: [
          'Para cancelar el evento',
          'Para contener información sobre lo que ocurrió (qué tecla, qué elemento, etc.)',
          'Para crear nuevos eventos',
          'Para recargar la página',
        ],
        correctAnswer: 'Para contener información sobre lo que ocurrió (qué tecla, qué elemento, etc.)',
        correctFeedback: '¡Correcto! El objeto event tiene propiedades como event.key, event.target, event.type con detalles del evento.',
        incorrectFeedback: 'Incorrecto. El objeto event contiene información sobre lo que ocurrió: la tecla presionada, el elemento que fue clicado, el tipo de evento, etc.',
      },
    ],
  },

  // ── Lección 92 ────────────────────────────────────────────────────────────
  {
    slug: 'add-event-listener',
    title: 'addEventListener: escuchar eventos',
    module: 'Eventos',
    moduleNumber: 13,
    order: 92,
    description: 'Aprende a escuchar eventos usando addEventListener().',
    explanation: `\`addEventListener()\` es la forma moderna y recomendada de conectar eventos con funciones en JavaScript.

**Sintaxis**
\`\`\`js
elemento.addEventListener('nombreEvento', funcionCallback);
\`\`\`

**Ejemplo básico**
\`\`\`js
const boton = document.querySelector('#miBoton');

boton.addEventListener('click', function() {
  console.log('¡Clic!');
});
\`\`\`

**Con arrow function (más común)**
\`\`\`js
boton.addEventListener('click', () => {
  console.log('¡Clic!');
});
\`\`\`

**¿Por qué NO usar onclick = ...?**
\`\`\`js
// MAL: solo puedes tener una función, sobreescribe la anterior
boton.onclick = () => console.log('función 1');
boton.onclick = () => console.log('función 2'); // borra la anterior

// BIEN: puedes agregar múltiples listeners
boton.addEventListener('click', () => console.log('función 1'));
boton.addEventListener('click', () => console.log('función 2')); // ambas funcionan
\`\`\`

**Remover un listener**

Para eliminar un listener, la función debe ser nombrada (no anónima):
\`\`\`js
function manejarClic() {
  console.log('clic');
}

boton.addEventListener('click', manejarClic);
boton.removeEventListener('click', manejarClic); // elimina el listener
\`\`\`

**Opción once: ejecutar solo una vez**
\`\`\`js
boton.addEventListener('click', () => {
  console.log('Solo la primera vez');
}, { once: true });
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

const boton = document.querySelector('#btn-contador');
const display = document.querySelector('#contador');
let cuenta = 0;

// Listener de click: incrementar contador
boton.addEventListener('click', () => {
  cuenta++;
  display.textContent = cuenta;
});

// Múltiples listeners en el mismo elemento
boton.addEventListener('click', () => {
  if (cuenta >= 10) {
    boton.textContent = '¡Llegaste a 10!';
    boton.disabled = true;
  }
});

// Listener en el documento (teclado)
document.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    cuenta = 0;
    display.textContent = 0;
    boton.textContent = 'Incrementar';
    boton.disabled = false;
    console.log('Contador reiniciado con la tecla R');
  }
});

// Listener que solo se ejecuta una vez
const banner = document.querySelector('#bienvenida');
banner.addEventListener('click', () => {
  banner.remove();
}, { once: true });`,
    keyPoints: [
      'addEventListener(evento, callback) es la forma moderna de escuchar eventos',
      'Puedes agregar múltiples listeners al mismo elemento sin que se sobreescriban',
      'Evita usar onclick = porque solo admite una función y sobreescribe las anteriores',
      'removeEventListener elimina un listener (la función debe ser nombrada, no anónima)',
      'La opción { once: true } hace que el listener se ejecute solo la primera vez',
    ],
    exercise: {
      description: 'Crea un botón que al hacer clic muestre "¡Hola!" la primera vez, "¡Hola de nuevo!" las siguientes veces, y se deshabilite después de 5 clics.',
      hint: 'Usa una variable contadora. Para { once: true }, solo el primer mensaje. Para los siguientes, un listener normal con condición.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta de addEventListener?',
        options: [
          'elemento.addEventListener(callback, evento)',
          'elemento.addEventListener("evento", callback)',
          'addEventListener(elemento, "evento", callback)',
          'elemento.on("evento", callback)',
        ],
        correctAnswer: 'elemento.addEventListener("evento", callback)',
        correctFeedback: '¡Correcto! Primero el nombre del evento como string, luego la función callback.',
        incorrectFeedback: 'Incorrecto. La sintaxis correcta es elemento.addEventListener("nombreEvento", función). El nombre del evento va primero como string.',
      },
      {
        question: '¿Qué ventaja tiene addEventListener sobre onclick = ...?',
        options: [
          'addEventListener es más rápido',
          'onclick = funciona en más navegadores',
          'addEventListener permite múltiples listeners en el mismo elemento',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'addEventListener permite múltiples listeners en el mismo elemento',
        correctFeedback: '¡Correcto! Con addEventListener puedes agregar varios listeners sin que se sobreescriban.',
        incorrectFeedback: 'Incorrecto. La principal ventaja de addEventListener es que permite múltiples listeners en el mismo elemento. onclick = solo admite una función y sobreescribe la anterior.',
      },
      {
        question: '¿Qué hace { once: true } en addEventListener?',
        options: [
          'Hace que el listener se ejecute cada vez que se llame once()',
          'El listener se ejecuta solo la primera vez y luego se elimina automáticamente',
          'El listener se ejecuta exactamente 100 veces',
          'Hace el listener más eficiente en memoria',
        ],
        correctAnswer: 'El listener se ejecuta solo la primera vez y luego se elimina automáticamente',
        correctFeedback: '¡Exacto! { once: true } es equivalente a hacer removeEventListener dentro del callback.',
        incorrectFeedback: 'Incorrecto. { once: true } hace que el listener se ejecute exactamente una vez y luego se elimina automáticamente del elemento.',
      },
      {
        question: 'Para poder usar removeEventListener, ¿cómo debe estar definida la función?',
        options: [
          'Como una arrow function anónima',
          'Como una función anónima con function()',
          'Como una función nombrada o guardada en una variable',
          'No importa cómo esté definida',
        ],
        correctAnswer: 'Como una función nombrada o guardada en una variable',
        correctFeedback: '¡Correcto! Necesitas una referencia a la misma función para poder eliminarla.',
        incorrectFeedback: 'Incorrecto. removeEventListener necesita una referencia a la misma función. Las funciones anónimas crean una nueva referencia cada vez, por lo que no pueden ser eliminadas con removeEventListener.',
      },
      {
        question: '¿Qué pasa si usas onclick = en el mismo botón dos veces con funciones diferentes?',
        options: [
          'Se ejecutan ambas funciones al hacer clic',
          'La segunda función sobreescribe (reemplaza) a la primera',
          'Se produce un error de JavaScript',
          'Se ejecuta la primera y se ignora la segunda',
        ],
        correctAnswer: 'La segunda función sobreescribe (reemplaza) a la primera',
        correctFeedback: '¡Correcto! onclick solo puede tener una función asignada. La segunda asignación reemplaza a la primera.',
        incorrectFeedback: 'Incorrecto. onclick es simplemente una propiedad del elemento. Cuando asignas una segunda función, sobreescribes la primera. Por eso se prefiere addEventListener.',
      },
    ],
  },

  // ── Lección 93 ────────────────────────────────────────────────────────────
  {
    slug: 'eventos-click',
    title: 'Eventos de clic',
    module: 'Eventos',
    moduleNumber: 13,
    order: 93,
    description: 'Aprende a reaccionar cuando el usuario hace clic en botones, enlaces u otros elementos.',
    explanation: `El evento \`click\` es el más usado en JavaScript. Se dispara cuando el usuario hace clic (o toca en móvil) sobre cualquier elemento.

**Tipos de eventos de clic**

| Evento | Cuándo se dispara |
|--------|-------------------|
| \`click\` | Un clic normal |
| \`dblclick\` | Doble clic |
| \`contextmenu\` | Clic derecho (menú contextual) |
| \`mousedown\` | Botón del ratón presionado |
| \`mouseup\` | Botón del ratón soltado |

**Casos de uso comunes**

**1. Toggle (mostrar/ocultar)**
\`\`\`js
const menu = document.querySelector('#menu');
document.querySelector('#btn-menu').addEventListener('click', () => {
  menu.classList.toggle('oculto');
});
\`\`\`

**2. Cambiar el estado de un botón**
\`\`\`js
const btn = document.querySelector('#like');
btn.addEventListener('click', () => {
  btn.classList.toggle('activo');
  btn.textContent = btn.classList.contains('activo') ? '❤️ Me gusta' : '🤍 Me gusta';
});
\`\`\`

**3. Confirmar antes de ejecutar**
\`\`\`js
document.querySelector('#btn-eliminar').addEventListener('click', () => {
  if (confirm('¿Seguro que quieres eliminar?')) {
    // eliminar el elemento
  }
});
\`\`\`

**Clic en cualquier elemento**

Técnicamente puedes agregar \`click\` a cualquier elemento HTML, no solo botones. Pero para accesibilidad, los botones son la opción correcta para acciones.`,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

// ── 1. Botón contador con doble clic para resetear ────────────────────────
const btnContador = document.querySelector('#contador-btn');
const displayContador = document.querySelector('#contador-display');
let count = 0;

btnContador.addEventListener('click', () => {
  count++;
  displayContador.textContent = count;
});

btnContador.addEventListener('dblclick', () => {
  count = 0;
  displayContador.textContent = 0;
  console.log('Contador reiniciado');
});

// ── 2. Toggle de menú hamburguesa ─────────────────────────────────────────
const btnMenu = document.querySelector('#btn-hamburguesa');
const navMenu = document.querySelector('#nav-menu');

btnMenu.addEventListener('click', () => {
  const estaAbierto = navMenu.classList.toggle('visible');
  btnMenu.setAttribute('aria-expanded', estaAbierto);
  btnMenu.textContent = estaAbierto ? '✕ Cerrar' : '☰ Menú';
});

// ── 3. Botón "like" con estado activo ─────────────────────────────────────
const btnLike = document.querySelector('#like-btn');
let liked = false;

btnLike.addEventListener('click', () => {
  liked = !liked;
  btnLike.textContent = liked ? '❤️ Me gusta (1)' : '🤍 Me gusta (0)';
  btnLike.classList.toggle('liked', liked);
});

// ── 4. Copiar texto al portapapeles ───────────────────────────────────────
const btnCopiar = document.querySelector('#btn-copiar');
const codigo = document.querySelector('#codigo-compartir').textContent;

btnCopiar.addEventListener('click', async () => {
  await navigator.clipboard.writeText(codigo);
  btnCopiar.textContent = '✓ Copiado';
  setTimeout(() => { btnCopiar.textContent = 'Copiar'; }, 2000);
});`,
    keyPoints: [
      'click es el evento más común, se dispara con un clic del ratón o toque en móvil',
      'dblclick detecta doble clic; contextmenu detecta clic derecho',
      'classList.toggle() es ideal para mostrar/ocultar con un botón',
      'Puedes agregar click a cualquier elemento, pero usa <button> para accesibilidad',
      'El patrón toggle (alternar estado) es muy común: menús, likes, acordeones',
    ],
    exercise: {
      description: 'Crea un botón "Modo oscuro" que al hacer clic agregue la clase "dark" al body. Si la clase ya existe, debe quitarla. El texto del botón debe cambiar entre "🌙 Modo oscuro" y "☀️ Modo claro".',
      hint: 'Usa document.body.classList.toggle("dark") y luego classList.contains("dark") para cambiar el texto del botón.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre click y dblclick?',
        options: [
          'No hay diferencia, son lo mismo',
          'click se dispara con un clic; dblclick requiere dos clics rápidos',
          'click funciona solo en botones; dblclick en cualquier elemento',
          'dblclick es más moderno que click',
        ],
        correctAnswer: 'click se dispara con un clic; dblclick requiere dos clics rápidos',
        correctFeedback: '¡Correcto! dblclick requiere dos clics consecutivos rápidos.',
        incorrectFeedback: 'Incorrecto. click se dispara con un solo clic, mientras que dblclick requiere dos clics consecutivos rápidos sobre el mismo elemento.',
      },
      {
        question: '¿Qué hace classList.toggle("activo")?',
        options: [
          'Siempre agrega la clase "activo"',
          'Siempre quita la clase "activo"',
          'Agrega la clase si no existe, la quita si ya existe',
          'Verifica si la clase existe y devuelve true o false',
        ],
        correctAnswer: 'Agrega la clase si no existe, la quita si ya existe',
        correctFeedback: '¡Correcto! toggle alterna la presencia de la clase, perfecto para estados on/off.',
        incorrectFeedback: 'Incorrecto. classList.toggle() alterna la clase: la agrega si no estaba, la quita si ya estaba. Es perfecto para implementar estados on/off.',
      },
      {
        question: '¿Qué evento detecta el clic derecho del ratón?',
        options: ['rightclick', 'contextmenu', 'mouseright', 'click-right'],
        correctAnswer: 'contextmenu',
        correctFeedback: '¡Correcto! contextmenu se dispara cuando el usuario hace clic derecho.',
        incorrectFeedback: 'Incorrecto. El evento para detectar clic derecho es contextmenu (porque normalmente muestra el menú contextual del navegador).',
      },
      {
        question: 'Un usuario hace clic en un <div> con un listener de click. ¿Qué ocurre?',
        options: [
          'Nada, click solo funciona en botones',
          'Se ejecuta el callback del listener',
          'Se produce un error porque div no es clickeable',
          'El navegador muestra una alerta de confirmación',
        ],
        correctAnswer: 'Se ejecuta el callback del listener',
        correctFeedback: '¡Correcto! Puedes agregar un listener de click a cualquier elemento HTML.',
        incorrectFeedback: 'Incorrecto. El evento click funciona en cualquier elemento HTML, no solo en botones. Sin embargo, para accesibilidad es preferible usar <button> para acciones interactivas.',
      },
    ],
  },

  // ── Lección 94 ────────────────────────────────────────────────────────────
  {
    slug: 'eventos-teclado',
    title: 'Eventos de teclado',
    module: 'Eventos',
    moduleNumber: 13,
    order: 94,
    description: 'Aprende a detectar teclas presionadas y crear interacciones con el teclado.',
    explanation: `Los eventos de teclado permiten que tu aplicación responda cuando el usuario presiona teclas. Son esenciales para atajos, validación en tiempo real y accesibilidad.

**Tipos de eventos de teclado**

| Evento | Cuándo se dispara |
|--------|-------------------|
| \`keydown\` | Cuando la tecla es presionada (se repite si se mantiene) |
| \`keyup\` | Cuando la tecla es soltada |
| \`keypress\` | Obsoleto — no usar |

**Usa keydown o keyup** — \`keypress\` está obsoleto.

**Propiedades clave del objeto event**

\`\`\`js
document.addEventListener('keydown', (event) => {
  console.log(event.key);   // "a", "Enter", "ArrowLeft", " " (espacio)
  console.log(event.code);  // "KeyA", "Enter", "ArrowLeft", "Space"
});
\`\`\`

**Diferencia entre key y code:**
- \`event.key\`: la tecla **lógica** (lo que produce). Cambia según el idioma.
- \`event.code\`: la tecla **física** (posición en el teclado). Siempre igual.

Para atajos, usa \`event.key\`. Para juegos (posición física), usa \`event.code\`.

**Teclas modificadoras**
\`\`\`js
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault(); // evitar guardar la página del navegador
    guardarDocumento();
  }
});
\`\`\`

**Teclas especiales comunes**
- \`"Enter"\`, \`"Escape"\`, \`"Tab"\`
- \`"ArrowUp"\`, \`"ArrowDown"\`, \`"ArrowLeft"\`, \`"ArrowRight"\`
- \`" "\` (espacio)`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── 1. Buscar al presionar Enter ──────────────────────────────────────────
const inputBusqueda = document.querySelector('#buscador');

inputBusqueda.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const termino = inputBusqueda.value.trim();
    if (termino) {
      console.log('Buscando:', termino);
      // realizarBusqueda(termino);
    }
  }
});

// ── 2. Cerrar modal con Escape ────────────────────────────────────────────
const modal = document.querySelector('#modal');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('visible')) {
    modal.classList.remove('visible');
  }
});

// ── 3. Contador de caracteres en tiempo real ──────────────────────────────
const textarea = document.querySelector('#mensaje');
const contador = document.querySelector('#chars');
const MAX = 280;

textarea.addEventListener('keyup', () => {
  const restantes = MAX - textarea.value.length;
  contador.textContent = restantes;
  contador.style.color = restantes < 20 ? 'red' : 'gray';
});

// ── 4. Atajo de teclado personalizado ─────────────────────────────────────
document.addEventListener('keydown', (event) => {
  // Ctrl+K o Cmd+K para abrir búsqueda
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault();
    document.querySelector('#buscador').focus();
    console.log('Búsqueda activada con atajo');
  }
});`,
    keyPoints: [
      'keydown se dispara al presionar la tecla (se repite si se mantiene); keyup al soltarla',
      'event.key devuelve el valor lógico ("Enter", "a", "ArrowUp"); event.code la posición física',
      'Usa event.key para atajos de texto y event.code para juegos o controles de posición',
      'event.ctrlKey, event.shiftKey y event.metaKey detectan teclas modificadoras',
      'keypress está obsoleto; usa keydown o keyup en su lugar',
    ],
    exercise: {
      description: 'Crea un input de contraseña con un botón "👁 Mostrar". Al hacer clic en el botón, alterna el type del input entre "password" y "text". También permite que el usuario presione Enter en el input para enviar (mostrar en consola el valor).',
      hint: 'input.type = input.type === "password" ? "text" : "password" para el toggle. Usa keydown con event.key === "Enter" para detectar Enter.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre event.key y event.code?',
        options: [
          'Son idénticos, son sinónimos',
          'key devuelve el valor lógico de la tecla; code devuelve su posición física',
          'key es obsoleto, code es el moderno',
          'code solo funciona en navegadores Chrome',
        ],
        correctAnswer: 'key devuelve el valor lógico de la tecla; code devuelve su posición física',
        correctFeedback: '¡Correcto! key devuelve "a" o "A" según shift; code devuelve siempre "KeyA".',
        incorrectFeedback: 'Incorrecto. event.key devuelve el valor lógico (lo que produce la tecla, cambia según idioma), mientras que event.code devuelve la posición física del teclado (siempre igual sin importar el idioma).',
      },
      {
        question: '¿Qué evento de teclado debes usar para detectar que el usuario presionó la tecla "a"?',
        options: ['keypress', 'keydown', 'keytype', 'keyhit'],
        correctAnswer: 'keydown',
        correctFeedback: '¡Correcto! keydown es el evento moderno para detectar teclas presionadas.',
        incorrectFeedback: 'Incorrecto. Debes usar keydown (o keyup). keypress está obsoleto y no se recomienda usar. keytype y keyhit no existen.',
      },
      {
        question: '¿Cómo detectas que el usuario presionó Ctrl+S?',
        options: [
          'event.key === "Ctrl+S"',
          'event.ctrlKey && event.key === "s"',
          'event.key === "ctrl" && event.key === "s"',
          'event.shortcut === "ctrl-s"',
        ],
        correctAnswer: 'event.ctrlKey && event.key === "s"',
        correctFeedback: '¡Correcto! event.ctrlKey es true cuando Ctrl está presionado, y event.key === "s" detecta la tecla S.',
        incorrectFeedback: 'Incorrecto. Las teclas modificadoras (Ctrl, Shift, Alt) tienen propiedades booleanas separadas: event.ctrlKey, event.shiftKey, event.altKey. La combinación correcta es event.ctrlKey && event.key === "s".',
      },
      {
        question: 'Un textarea tiene un listener keyup. El usuario presiona y mantiene la letra "a". ¿Cuántas veces se dispara keyup?',
        options: [
          'Una vez por cada repetición automática',
          'Solo una vez, cuando suelta la tecla',
          'Nunca, keyup no funciona en textarea',
          'Depende del navegador',
        ],
        correctAnswer: 'Solo una vez, cuando suelta la tecla',
        correctFeedback: '¡Correcto! keyup se dispara una sola vez al soltar la tecla. keydown sería el que se repetiría.',
        incorrectFeedback: 'Incorrecto. keyup se dispara una sola vez cuando la tecla es soltada. Es keydown el que puede repetirse mientras se mantiene presionada la tecla.',
      },
    ],
  },

  // ── Lección 95 ────────────────────────────────────────────────────────────
  {
    slug: 'eventos-formulario',
    title: 'Eventos de formulario',
    module: 'Eventos',
    moduleNumber: 13,
    order: 95,
    description: 'Aprende a trabajar con eventos como submit, input y change.',
    explanation: `Los formularios tienen sus propios eventos especializados que permiten controlar cuándo y cómo se procesan los datos del usuario.

**Los tres eventos principales**

| Evento | Cuándo se dispara | Elemento típico |
|--------|-------------------|-----------------|
| \`submit\` | Al enviar el formulario | \`<form>\` |
| \`input\` | Cada vez que el valor cambia | \`<input>\`, \`<textarea>\` |
| \`change\` | Al perder el foco o cambiar valor | \`<select>\`, \`<checkbox>\` |

**submit — el más importante**
\`\`\`js
const form = document.querySelector('#mi-formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // SIEMPRE para evitar que recargue la página
  const datos = new FormData(form);
  console.log(datos.get('nombre'));
});
\`\`\`

**input — en tiempo real**
\`\`\`js
const campo = document.querySelector('#nombre');

campo.addEventListener('input', () => {
  console.log('Valor actual:', campo.value);
  // Se ejecuta con CADA pulsación de tecla
});
\`\`\`

**change — al terminar de editar**
\`\`\`js
const select = document.querySelector('#pais');

select.addEventListener('change', () => {
  console.log('País seleccionado:', select.value);
  // Para inputs: se dispara al perder el foco (blur)
  // Para select/checkbox: al cambiar el valor
});
\`\`\`

**¿Cuándo usar input vs change?**
- \`input\`: validación en tiempo real, contador de caracteres, búsqueda instantánea.
- \`change\`: cuando solo te importa el valor final, como al seleccionar una opción.`,
    codeExample: `// ── formulario.js ────────────────────────────────────────────────────────

const form = document.querySelector('#form-registro');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const selectPais = document.querySelector('#pais');
const checkTerminos = document.querySelector('#terminos');
const mensajeError = document.querySelector('#error');

// ── submit: procesar el formulario ───────────────────────────────────────
form.addEventListener('submit', (event) => {
  event.preventDefault(); // evitar recarga de página

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();

  if (!nombre || !email) {
    mensajeError.textContent = 'Por favor completa todos los campos';
    mensajeError.style.display = 'block';
    return;
  }

  console.log('Formulario válido:', { nombre, email, pais: selectPais.value });
  mensajeError.style.display = 'none';
  form.reset();
});

// ── input: contador de caracteres en tiempo real ──────────────────────────
inputNombre.addEventListener('input', () => {
  const longitud = inputNombre.value.length;
  document.querySelector('#chars-nombre').textContent = longitud + '/50';
  if (longitud > 50) {
    inputNombre.value = inputNombre.value.slice(0, 50);
  }
});

// ── change: actualizar sección según selección ───────────────────────────
selectPais.addEventListener('change', () => {
  const pais = selectPais.value;
  document.querySelector('#ciudad-label').textContent =
    pais === 'mx' ? 'Estado' : pais === 'es' ? 'Provincia' : 'Ciudad';
});

// ── change: habilitar botón solo cuando se aceptan términos ──────────────
checkTerminos.addEventListener('change', () => {
  document.querySelector('#btn-enviar').disabled = !checkTerminos.checked;
});`,
    keyPoints: [
      'submit se dispara en el <form> al enviarlo; siempre usa event.preventDefault()',
      'input se ejecuta con cada cambio de valor (cada tecla), ideal para tiempo real',
      'change en inputs se dispara al perder el foco; en select/checkbox al cambiar',
      'FormData(form) permite obtener todos los valores del formulario fácilmente',
      'input sirve para validación instantánea; change para reaccionar al valor final',
    ],
    exercise: {
      description: 'Crea un formulario con un input de texto y un área de vista previa. Mientras el usuario escribe en el input (evento input), muestra el texto en tiempo real en el área de vista previa. Si el texto supera 100 caracteres, muestra el texto en rojo.',
      hint: 'Usa input.addEventListener("input", ...) y cambia el textContent del área de vista previa. Compara input.value.length con 100.',
    },
    quiz: [
      {
        question: '¿Por qué es importante usar event.preventDefault() en el submit de un formulario?',
        options: [
          'Para mejorar el rendimiento',
          'Para evitar que la página se recargue al enviar el formulario',
          'Para validar los datos automáticamente',
          'Para activar el envío del formulario',
        ],
        correctAnswer: 'Para evitar que la página se recargue al enviar el formulario',
        correctFeedback: '¡Correcto! Sin preventDefault, el navegador envía el formulario y recarga la página, perdiendo el estado de la aplicación.',
        incorrectFeedback: 'Incorrecto. El comportamiento predeterminado del navegador al hacer submit es enviar el formulario y recargar la página. event.preventDefault() evita esa recarga para que JavaScript pueda manejar los datos.',
      },
      {
        question: '¿En qué se diferencia el evento input del evento change en un <input type="text">?',
        options: [
          'input se dispara al perder el foco; change con cada tecla',
          'input se dispara con cada tecla; change al perder el foco',
          'Son idénticos en todos los elementos',
          'change solo funciona en select, no en input',
        ],
        correctAnswer: 'input se dispara con cada tecla; change al perder el foco',
        correctFeedback: '¡Correcto! input es en tiempo real; change espera a que el usuario termine de editar.',
        incorrectFeedback: 'Incorrecto. En <input type="text">: el evento input se dispara con cada cambio (cada tecla), mientras que change se dispara cuando el campo pierde el foco (blur) después de que el valor cambió.',
      },
      {
        question: '¿Dónde debes colocar el listener del evento submit?',
        options: [
          'En el botón de submit (<button type="submit">)',
          'En el elemento <form>',
          'En el último input del formulario',
          'En el document',
        ],
        correctAnswer: 'En el elemento <form>',
        correctFeedback: '¡Correcto! El evento submit pertenece al elemento <form>, no al botón.',
        incorrectFeedback: 'Incorrecto. El evento submit se registra en el elemento <form>, no en el botón. El formulario puede enviarse con Enter o con un botón type="submit", y el evento submit en el <form> captura ambos casos.',
      },
      {
        question: 'Si tienes un <select> con opciones de países, ¿qué evento usas para detectar cuándo el usuario elige uno?',
        options: ['input', 'click', 'change', 'select'],
        correctAnswer: 'change',
        correctFeedback: '¡Correcto! change es el evento apropiado para <select> y se dispara cuando el valor cambia.',
        incorrectFeedback: 'Incorrecto. Para <select>, el evento change es el apropiado. Se dispara cuando el usuario selecciona una opción diferente a la actual.',
      },
    ],
  },

  // ── Lección 96 ────────────────────────────────────────────────────────────
  {
    slug: 'objeto-event',
    title: 'El objeto event',
    module: 'Eventos',
    moduleNumber: 13,
    order: 96,
    description: 'Aprende qué información contiene el objeto event y cómo usarlo.',
    explanation: `Cuando ocurre un evento, el navegador crea automáticamente un objeto \`event\` (también llamado \`e\` o \`evt\`) y lo pasa como argumento a tu callback. Este objeto contiene toda la información sobre lo que ocurrió.

**Propiedades más útiles**

| Propiedad | Qué contiene |
|-----------|-------------|
| \`event.type\` | Nombre del evento ("click", "keydown", etc.) |
| \`event.target\` | El elemento que disparó el evento |
| \`event.currentTarget\` | El elemento que tiene el listener |
| \`event.key\` | Tecla presionada (keydown/keyup) |
| \`event.target.value\` | Valor del input que disparó el evento |

**event.target — el más importante**
\`\`\`js
document.addEventListener('click', (event) => {
  console.log(event.target); // elemento exacto que fue clicado
  console.log(event.target.tagName); // "BUTTON", "A", "DIV"...
  console.log(event.target.id); // id del elemento
});
\`\`\`

**event.target vs event.currentTarget**
\`\`\`js
const lista = document.querySelector('#lista');

lista.addEventListener('click', (event) => {
  // event.target: el elemento exacto que fue clicado (puede ser <li> o un hijo)
  // event.currentTarget: siempre el elemento que tiene el listener (<ul>)
  console.log(event.target);        // el <li> o hijo que fue clicado
  console.log(event.currentTarget); // siempre el <ul>
});
\`\`\`

**event.target.value — para inputs**
\`\`\`js
const input = document.querySelector('#buscar');

input.addEventListener('input', (event) => {
  // event.target es el input
  console.log(event.target.value); // lo que el usuario escribe
});
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── 1. Inspeccionar event.target ──────────────────────────────────────────
document.addEventListener('click', (event) => {
  console.log('Tipo:', event.type);
  console.log('Elemento clicado:', event.target.tagName);
  console.log('ID:', event.target.id || '(sin id)');
  console.log('Clases:', event.target.className || '(sin clases)');
});

// ── 2. event.target.value en inputs ──────────────────────────────────────
const inputNombre = document.querySelector('#nombre');

inputNombre.addEventListener('input', (event) => {
  const valor = event.target.value;
  document.querySelector('#preview').textContent = valor || '(vacío)';
});

// ── 3. target vs currentTarget ────────────────────────────────────────────
const tarjeta = document.querySelector('.tarjeta');

tarjeta.addEventListener('click', (event) => {
  console.log('target (clicado):', event.target.tagName);
  console.log('currentTarget (listener):', event.currentTarget.tagName);
  // Si clicas en un <p> dentro de .tarjeta:
  // target = P, currentTarget = DIV
});

// ── 4. Usar event para un formulario dinámico ─────────────────────────────
const form = document.querySelector('#form-busqueda');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const termino = event.target.querySelector('#query').value.trim();
  if (termino) {
    console.log('Buscando:', termino);
  }
});

// ── 5. Posición del clic ──────────────────────────────────────────────────
document.addEventListener('click', (event) => {
  console.log('Posición X:', event.clientX);
  console.log('Posición Y:', event.clientY);
});`,
    keyPoints: [
      'El objeto event se crea automáticamente y se pasa como argumento al callback',
      'event.target es el elemento exacto que disparó el evento',
      'event.currentTarget es el elemento que tiene el listener (siempre fijo)',
      'event.target.value obtiene el valor de un input cuando se usa en eventos de formulario',
      'event.type contiene el nombre del evento ("click", "keydown", etc.)',
    ],
    exercise: {
      description: 'Agrega un listener de click al document. Cuando el usuario haga clic en cualquier elemento, muestra en un <p> de "info" el tagName, id y textContent (primeros 30 caracteres) del elemento clicado.',
      hint: 'event.target.tagName, event.target.id, event.target.textContent.slice(0, 30)',
    },
    quiz: [
      {
        question: '¿Qué contiene event.target?',
        options: [
          'El elemento que tiene el listener de eventos',
          'El elemento exacto que disparó el evento (fue clicado, presionado, etc.)',
          'El elemento padre del que disparó el evento',
          'El tipo de evento que ocurrió',
        ],
        correctAnswer: 'El elemento exacto que disparó el evento (fue clicado, presionado, etc.)',
        correctFeedback: '¡Correcto! event.target es el elemento más específico que originó el evento.',
        incorrectFeedback: 'Incorrecto. event.target es el elemento exacto que disparó el evento, no el que tiene el listener. El que tiene el listener es event.currentTarget.',
      },
      {
        question: 'Tienes un <ul> con listener de click. El usuario hace clic en un <li> dentro. ¿Qué valor tienen target y currentTarget?',
        options: [
          'Ambos son el <ul>',
          'Ambos son el <li>',
          'target es el <li>; currentTarget es el <ul>',
          'target es el <ul>; currentTarget es el <li>',
        ],
        correctAnswer: 'target es el <li>; currentTarget es el <ul>',
        correctFeedback: '¡Correcto! target es el elemento clicado (<li>), currentTarget es donde está el listener (<ul>).',
        incorrectFeedback: 'Incorrecto. event.target es el elemento exacto clicado (el <li>). event.currentTarget es el elemento donde está registrado el listener (el <ul>).',
      },
      {
        question: '¿Cómo obtienes el valor de un input desde el evento input?',
        options: [
          'event.value',
          'event.inputValue',
          'event.target.value',
          'event.data.value',
        ],
        correctAnswer: 'event.target.value',
        correctFeedback: '¡Correcto! event.target es el input, y .value es el valor actual.',
        incorrectFeedback: 'Incorrecto. Para obtener el valor de un input desde un evento, usa event.target.value. event.target es el elemento que disparó el evento (el input), y .value es su valor actual.',
      },
      {
        question: '¿Cómo se llama el objeto de evento en el callback de addEventListener?',
        options: [
          'Siempre debe llamarse "event"',
          'Siempre debe llamarse "e"',
          'Puede llamarse con cualquier nombre, es solo el primer parámetro del callback',
          'No existe tal objeto, los eventos no tienen parámetros',
        ],
        correctAnswer: 'Puede llamarse con cualquier nombre, es solo el primer parámetro del callback',
        correctFeedback: '¡Correcto! Es una convención llamarlo event o e, pero puedes usar cualquier nombre.',
        incorrectFeedback: 'Incorrecto. El objeto de evento es simplemente el primer parámetro de la función callback. Puedes llamarlo event, e, evt, o cualquier otro nombre. Lo importante es que siempre es el primer argumento.',
      },
    ],
  },

  // ── Lección 97 ────────────────────────────────────────────────────────────
  {
    slug: 'prevent-default',
    title: 'preventDefault: controlar comportamientos',
    module: 'Eventos',
    moduleNumber: 13,
    order: 97,
    description: 'Aprende a evitar comportamientos predeterminados, como que un formulario recargue la página.',
    explanation: `Muchos elementos HTML tienen comportamientos predeterminados del navegador. \`event.preventDefault()\` te permite cancelar esos comportamientos para que JavaScript tome el control.

**Comportamientos predeterminados comunes**

| Elemento / Evento | Comportamiento predeterminado |
|-------------------|-------------------------------|
| \`<form>\` + submit | Enviar datos y recargar la página |
| \`<a>\` + click | Navegar a la URL del href |
| \`<input type="checkbox">\` | Marcar / desmarcar |
| Clic derecho | Mostrar menú contextual |

**Formulario sin recargar**
\`\`\`js
form.addEventListener('submit', (event) => {
  event.preventDefault(); // cancelar el envío nativo
  // ahora controlas tú qué pasa con los datos
  procesarDatos();
});
\`\`\`

**Enlace sin navegar**
\`\`\`js
enlace.addEventListener('click', (event) => {
  event.preventDefault(); // no navegar
  abrirModalContenido(enlace.href);
});
\`\`\`

**¿Cuándo NO usar preventDefault?**

- No lo uses solo para "ver qué pasa".
- No canceles el comportamiento de checkbox/radio sin ofrecer una alternativa.
- No canceles la navegación de un enlace si no ofreces el mismo destino de otra forma.

**Importante:** \`preventDefault()\` cancela el comportamiento del navegador, pero **no** detiene la propagación del evento a otros elementos padre (para eso existe \`stopPropagation()\`).`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── 1. Formulario — evitar recarga ────────────────────────────────────────
const form = document.querySelector('#form-contacto');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // sin esto, la página se recargaría

  const nombre = form.querySelector('#nombre').value.trim();
  const email = form.querySelector('#email').value.trim();

  if (!nombre || !email) {
    document.querySelector('#error-msg').textContent = 'Completa todos los campos';
    return;
  }

  console.log('Enviando:', { nombre, email });
  // fetch('/api/contacto', { ... })
  form.reset();
  document.querySelector('#success-msg').textContent = '¡Mensaje enviado!';
});

// ── 2. Enlace — abrir modal en lugar de navegar ───────────────────────────
document.querySelectorAll('a[data-modal]').forEach((enlace) => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    const modalId = enlace.dataset.modal;
    document.querySelector('#' + modalId).classList.add('visible');
  });
});

// ── 3. Clic derecho personalizado ─────────────────────────────────────────
const canvas = document.querySelector('#area-dibujo');

canvas.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // evitar menú contextual del navegador
  mostrarMenuPersonalizado(event.clientX, event.clientY);
});

// ── 4. Prevenir drag en imágenes ──────────────────────────────────────────
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('dragstart', (event) => {
    event.preventDefault(); // evitar arrastrar imágenes
  });
});`,
    keyPoints: [
      'event.preventDefault() cancela el comportamiento predeterminado del navegador',
      'Úsalo en submit para evitar que el formulario recargue la página',
      'Úsalo en click de <a> para navegar con JavaScript en lugar de recargar',
      'No detiene la propagación del evento (para eso está stopPropagation)',
      'No abuses: solo cancela comportamientos cuando ofreces una alternativa mejor',
    ],
    exercise: {
      description: 'Crea una lista de enlaces <a href="#"> que al hacer clic NO naveguen. En cambio, deben mostrar el texto del enlace en un <p> de "destino seleccionado". Usa preventDefault para evitar el scroll al inicio de la página.',
      hint: 'event.preventDefault() en el click. Luego usa event.target.textContent para mostrar el texto del enlace.',
    },
    quiz: [
      {
        question: '¿Qué ocurre si no usas event.preventDefault() en el evento submit de un formulario?',
        options: [
          'El formulario no hace nada',
          'El navegador envía el formulario y recarga la página',
          'Se dispara un error de JavaScript',
          'Los datos del formulario se borran',
        ],
        correctAnswer: 'El navegador envía el formulario y recarga la página',
        correctFeedback: '¡Correcto! El comportamiento predeterminado del submit es enviar y recargar.',
        incorrectFeedback: 'Incorrecto. Sin preventDefault(), el navegador ejecuta su comportamiento predeterminado: envía los datos del formulario y recarga la página, lo que hace que pierdas el estado de tu aplicación.',
      },
      {
        question: '¿event.preventDefault() detiene la propagación del evento a elementos padre?',
        options: [
          'Sí, cancela todo el flujo del evento',
          'No, solo cancela el comportamiento del navegador',
          'Depende del tipo de evento',
          'Solo si también usas stopPropagation()',
        ],
        correctAnswer: 'No, solo cancela el comportamiento del navegador',
        correctFeedback: '¡Correcto! preventDefault solo cancela el comportamiento del navegador. Para detener la propagación, necesitas stopPropagation().',
        incorrectFeedback: 'Incorrecto. event.preventDefault() solo cancela el comportamiento predeterminado del navegador. El evento sigue propagándose hacia los elementos padre. Para detener eso necesitas event.stopPropagation().',
      },
      {
        question: 'Tienes un enlace <a href="/dashboard">. ¿Qué hace este código? enlace.addEventListener("click", e => { e.preventDefault(); abrirModal(); })',
        options: [
          'Navega a /dashboard y abre el modal',
          'Cancela el click completamente y no hace nada',
          'Evita la navegación a /dashboard y ejecuta abrirModal()',
          'Produce un error porque preventDefault no funciona en enlaces',
        ],
        correctAnswer: 'Evita la navegación a /dashboard y ejecuta abrirModal()',
        correctFeedback: '¡Correcto! Se cancela la navegación nativa y en su lugar se ejecuta abrirModal().',
        incorrectFeedback: 'Incorrecto. e.preventDefault() cancela la navegación a /dashboard, pero el código JavaScript continúa ejecutándose normalmente. Por eso abrirModal() sí se ejecuta.',
      },
      {
        question: '¿En qué caso NO deberías usar preventDefault en un enlace?',
        options: [
          'Cuando quieres abrir un modal con el contenido',
          'Cuando quieres navegar a la misma URL con una animación',
          'Cuando el enlace lleva a otra página y no tienes alternativa JavaScript',
          'Cuando el enlace tiene data attributes',
        ],
        correctAnswer: 'Cuando el enlace lleva a otra página y no tienes alternativa JavaScript',
        correctFeedback: '¡Correcto! Si cancelas la navegación debes siempre ofrecer una alternativa para el usuario.',
        incorrectFeedback: 'Incorrecto. No debes usar preventDefault si cancelas la navegación sin ofrecer una alternativa equivalente. El usuario esperaría ir a otra página y si cancelas sin hacer nada equivalente, rompes la experiencia.',
      },
    ],
  },

  // ── Lección 98 ────────────────────────────────────────────────────────────
  {
    slug: 'event-delegation',
    title: 'Event delegation: eventos en elementos dinámicos',
    module: 'Eventos',
    moduleNumber: 13,
    order: 98,
    description: 'Aprende a manejar eventos en elementos dinámicos usando delegación de eventos.',
    explanation: `**Event delegation** (delegación de eventos) es una técnica donde pones el listener en un elemento **padre** en lugar de en cada elemento hijo individualmente.

**¿Por qué necesitamos esto?**

Si agregas elementos dinámicamente al DOM (con \`createElement\`), los listeners que pusiste antes **no se aplican** a los nuevos elementos:
\`\`\`js
// Esto NO funciona para elementos creados después:
document.querySelectorAll('.btn-eliminar').forEach(btn => {
  btn.addEventListener('click', eliminar); // solo los que existen ahora
});

// Luego agregas un nuevo <li> — su botón no tiene el listener
lista.appendChild(nuevoLi);
\`\`\`

**La solución: delegar al padre**
\`\`\`js
// Un solo listener en el padre — funciona para elementos actuales Y futuros
lista.addEventListener('click', (event) => {
  if (event.target.matches('.btn-eliminar')) {
    const li = event.target.closest('li');
    li.remove();
  }
});
\`\`\`

**Métodos clave**

- \`event.target.matches(selector)\`: verifica si el elemento clicado coincide con el selector.
- \`event.target.closest(selector)\`: busca el ancestro más cercano que coincide.

**Ventajas de event delegation**

1. Funciona con elementos creados dinámicamente.
2. Un solo listener en vez de N listeners (más eficiente).
3. No necesitas agregar/quitar listeners al agregar/eliminar elementos.`,
    codeExample: `// ── todo-list.js ─────────────────────────────────────────────────────────

const lista = document.querySelector('#lista-tareas');

// ── Un solo listener para TODA la lista ──────────────────────────────────
lista.addEventListener('click', (event) => {
  const target = event.target;

  // Clic en botón "eliminar"
  if (target.matches('.btn-eliminar')) {
    const tarea = target.closest('.tarea');
    tarea.remove();
    console.log('Tarea eliminada');
    return;
  }

  // Clic en botón "completar"
  if (target.matches('.btn-completar')) {
    const tarea = target.closest('.tarea');
    tarea.classList.toggle('completada');
    target.textContent = tarea.classList.contains('completada')
      ? '↩ Deshacer'
      : '✓ Completar';
    return;
  }

  // Clic en el texto de la tarea
  if (target.matches('.texto-tarea')) {
    target.contentEditable = 'true';
    target.focus();
  }
});

// ── Agregar nuevas tareas dinamicamente ──────────────────────────────────
function agregarTarea(texto) {
  const li = document.createElement('li');
  li.className = 'tarea';
  li.innerHTML = \`
    <span class="texto-tarea">\${texto}</span>
    <button class="btn-completar">✓ Completar</button>
    <button class="btn-eliminar">✕</button>
  \`;
  lista.appendChild(li);
  // Los botones del nuevo <li> YA funcionan gracias a la delegación
}

const form = document.querySelector('#form-tarea');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = form.querySelector('#nueva-tarea');
  if (input.value.trim()) {
    agregarTarea(input.value.trim());
    input.value = '';
  }
});`,
    keyPoints: [
      'Los listeners no se aplican a elementos creados después de registrar el listener',
      'Event delegation: poner el listener en el padre para capturar eventos de hijos actuales y futuros',
      'event.target.matches(selector) verifica si el elemento clicado coincide con el selector',
      'event.target.closest(selector) encuentra el ancestro más cercano que coincide',
      'Un solo listener delegado es más eficiente que N listeners individuales',
    ],
    exercise: {
      description: 'Crea una lista de productos. Cada producto tiene un botón "Agregar al carrito". Usando event delegation en el <ul>, detecta el clic en cualquier botón y muestra en consola el nombre del producto (que está en un elemento hermano con clase "nombre").',
      hint: 'if (event.target.matches(".btn-carrito")) { const nombre = event.target.closest("li").querySelector(".nombre").textContent; }',
    },
    quiz: [
      {
        question: '¿Por qué los elementos creados dinámicamente no responden a listeners registrados antes?',
        options: [
          'JavaScript no soporta elementos dinámicos',
          'Los listeners se registran en elementos existentes en ese momento, no en los futuros',
          'Hay que usar un tipo especial de listener para elementos dinámicos',
          'Los elementos dinámicos necesitan un ID único para tener listeners',
        ],
        correctAnswer: 'Los listeners se registran en elementos existentes en ese momento, no en los futuros',
        correctFeedback: '¡Correcto! addEventListener actúa sobre el elemento que existe en el momento, no sobre los que se creen después.',
        incorrectFeedback: 'Incorrecto. Cuando usas querySelectorAll y forEach para agregar listeners, solo afectas a los elementos que existen en ese instante. Los elementos creados después no tienen esos listeners.',
      },
      {
        question: '¿Qué hace event.target.matches(".btn-eliminar")?',
        options: [
          'Elimina el elemento que tiene la clase btn-eliminar',
          'Verifica si el elemento clicado tiene la clase btn-eliminar',
          'Busca todos los elementos con clase btn-eliminar',
          'Agrega la clase btn-eliminar al elemento clicado',
        ],
        correctAnswer: 'Verifica si el elemento clicado tiene la clase btn-eliminar',
        correctFeedback: '¡Correcto! matches() devuelve true o false según si el elemento coincide con el selector CSS.',
        incorrectFeedback: 'Incorrecto. matches(selector) es un método que devuelve true si el elemento coincide con el selector CSS dado, o false si no. Es como querySelector pero para verificar un elemento específico.',
      },
      {
        question: '¿Para qué sirve event.target.closest(".tarea")?',
        options: [
          'Selecciona todos los elementos con clase "tarea"',
          'Busca el ancestro más cercano que tiene la clase "tarea"',
          'Verifica si el elemento tiene exactamente la clase "tarea"',
          'Crea un nuevo elemento con clase "tarea"',
        ],
        correctAnswer: 'Busca el ancestro más cercano que tiene la clase "tarea"',
        correctFeedback: '¡Correcto! closest() sube por el árbol DOM buscando el primer elemento que coincide con el selector.',
        incorrectFeedback: 'Incorrecto. closest(selector) recorre el DOM hacia arriba (hacia los padres) y devuelve el primer ancestro que coincide con el selector. Es útil para encontrar el elemento contenedor desde un elemento hijo clicado.',
      },
      {
        question: '¿Cuál es la principal ventaja de event delegation en una lista con 100 elementos?',
        options: [
          'Los eventos se ejecutan más rápido',
          'Solo se necesita un listener en el padre en lugar de 100 listeners individuales',
          'Los elementos hijos no necesitan clases para ser detectados',
          'El código funciona sin JavaScript',
        ],
        correctAnswer: 'Solo se necesita un listener en el padre en lugar de 100 listeners individuales',
        correctFeedback: '¡Correcto! Un solo listener delegado es más eficiente y también funciona para elementos futuros.',
        incorrectFeedback: 'Incorrecto. La ventaja principal es la eficiencia: en lugar de 100 listeners (uno por elemento), tienes uno solo en el padre. Además, funciona automáticamente con elementos agregados dinámicamente.',
      },
      {
        question: 'En event delegation, ¿dónde se registra el addEventListener?',
        options: [
          'En cada elemento hijo que necesita reaccionar al evento',
          'En el elemento padre que contiene a los hijos',
          'En el document.body siempre',
          'En el window siempre',
        ],
        correctAnswer: 'En el elemento padre que contiene a los hijos',
        correctFeedback: '¡Correcto! El listener va en el padre común de todos los elementos que quieres manejar.',
        incorrectFeedback: 'Incorrecto. En event delegation, el listener se registra en el elemento padre (o ancestro) que contiene a todos los elementos hijos que queremos manejar. Luego se usa event.target para identificar qué hijo fue el que disparó el evento.',
      },
    ],
  },
]

export const jsModule13: Module = {
  number: 13,
  title: 'Eventos',
  level: 'nivel3',
  lessons: lessonsJsModule13,
}
