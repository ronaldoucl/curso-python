import type { Lesson, Module } from '@/types'

export const lessonsJsModule15: Lesson[] = [
  // ── Lección 108 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-definir',
    title: 'Proyecto: definir la lista de tareas',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 108,
    description: 'Define el objetivo del proyecto y las funcionalidades principales de una lista de tareas.',
    explanation: `En este módulo vas a construir una **lista de tareas (todo list)** completa usando solo HTML, CSS y JavaScript puro. Sin frameworks, sin librerías: solo lo que ya sabes.

**¿Qué construiremos?**

Una app que permite:
1. ✅ Agregar nuevas tareas desde un formulario
2. ✅ Marcar tareas como completadas
3. ✅ Eliminar tareas
4. ✅ Filtrar por estado (todas / pendientes / completadas)
5. ✅ Guardar el estado en \`localStorage\` (persistencia)

**Estructura de datos**

Cada tarea es un objeto:
\`\`\`js
{
  id: 1,            // identificador único
  texto: "Estudiar JavaScript",
  completada: false
}
\`\`\`

Todas las tareas se guardan en un array:
\`\`\`js
let tareas = [
  { id: 1, texto: "Estudiar JavaScript", completada: false },
  { id: 2, texto: "Practicar DOM", completada: true },
];
\`\`\`

**Estrategia de desarrollo**

Construiremos el proyecto lección por lección, cada una agrega una funcionalidad:
\`\`\`
Lección 109 → HTML + CSS base
Lección 110 → Capturar tareas del formulario
Lección 111 → Mostrar tareas en el DOM
Lección 112 → Marcar como completadas
Lección 113 → Eliminar tareas
Lección 114 → Filtrar por estado
Lección 115 → Persistencia + mejoras de UX
\`\`\`

**Antes de escribir código, planifica:**
Pensar en la estructura de datos primero es una habilidad fundamental. Un buen modelo de datos hace que el código sea mucho más simple.`,
    codeExample: `// ── plan.js — estructura del proyecto ────────────────────────────────────

// Estado de la aplicación (toda la lógica gira alrededor de este array)
let tareas = [];
let siguienteId = 1;
let filtroActivo = 'todas'; // 'todas' | 'pendientes' | 'completadas'

// Estructura de una tarea
function crearTarea(texto) {
  return {
    id: siguienteId++,
    texto: texto.trim(),
    completada: false,
    creadaEn: new Date().toISOString(),
  };
}

// Funciones principales que implementaremos:
// - agregarTarea(texto)      → crea tarea y actualiza la UI
// - eliminarTarea(id)        → filtra el array y actualiza la UI
// - toggleCompletada(id)     → cambia completada y actualiza la UI
// - renderizarTareas()       → borra y vuelve a dibujar la lista
// - obtenerTareasFiltradas() → devuelve tareas según filtroActivo
// - guardarEnStorage()       → persiste en localStorage
// - cargarDeStorage()        → recupera al iniciar la app

// Ejemplo de datos de prueba:
const tareasEjemplo = [
  crearTarea('Aprender querySelector'),
  crearTarea('Practicar addEventListener'),
  crearTarea('Construir este proyecto'),
];
tareasEjemplo[0].completada = true;

console.log('Tareas de ejemplo:', tareasEjemplo);
// → [{ id:1, texto:'...', completada:true }, ...]`,
    keyPoints: [
      'Planificar la estructura de datos antes de escribir código es fundamental',
      'Cada tarea es un objeto con id, texto, completada (y opcionalmente más campos)',
      'El array de tareas es la "fuente de verdad" — la UI se genera a partir de él',
      'El flujo es: usuario hace algo → actualizar array → re-renderizar la UI',
      'localStorage permite que las tareas persistan aunque se cierre el navegador',
    ],
    exercise: {
      description: 'Antes de continuar, escribe en papel (o en un comentario de código) las 5 funciones principales que necesitará tu app de tareas y qué parámetros recibe cada una.',
      hint: 'Piensa en: agregar, eliminar, completar, mostrar, filtrar. ¿Qué datos necesita cada función para hacer su trabajo?',
    },
    quiz: [
      {
        question: '¿Por qué guardamos las tareas en un array de objetos y no directamente en el DOM?',
        options: [
          'Porque el DOM no puede guardar texto',
          'El array es la fuente de verdad; el DOM es solo la representación visual',
          'Porque los arrays son más rápidos que el DOM',
          'Es solo una convención, no hay razón técnica',
        ],
        correctAnswer: 'El array es la fuente de verdad; el DOM es solo la representación visual',
        correctFeedback: '¡Correcto! Separar datos de presentación hace el código más mantenible y predecible.',
        incorrectFeedback: 'Incorrecto. El array es la "fuente de verdad": contiene el estado real de la aplicación. El DOM es solo la representación visual de esos datos. Si necesitas filtrar o modificar tareas, es mucho más fácil hacerlo en el array que en el DOM.',
      },
      {
        question: '¿Para qué sirve el campo "id" en cada tarea?',
        options: [
          'Para ordenar las tareas alfabéticamente',
          'Para identificar de forma única cada tarea al eliminar o modificar',
          'Es requerido por localStorage',
          'Para mostrar el número de tarea en la UI',
        ],
        correctAnswer: 'Para identificar de forma única cada tarea al eliminar o modificar',
        correctFeedback: '¡Correcto! El id permite encontrar la tarea correcta en el array sin depender de su posición.',
        incorrectFeedback: 'Incorrecto. El id sirve para identificar de forma única cada tarea. Cuando el usuario quiere eliminar o completar una tarea específica, usamos el id para encontrarla en el array, sin importar en qué posición esté.',
      },
      {
        question: '¿Cuál es el flujo correcto cuando el usuario marca una tarea como completada?',
        options: [
          'Cambiar el estilo del elemento en el DOM directamente',
          'Actualizar el objeto en el array → volver a renderizar la UI',
          'Crear un nuevo elemento DOM con el estilo correcto',
          'Guardar en localStorage → recargar la página',
        ],
        correctAnswer: 'Actualizar el objeto en el array → volver a renderizar la UI',
        correctFeedback: '¡Correcto! Siempre actualizas los datos primero, luego la UI refleja esos datos.',
        incorrectFeedback: 'Incorrecto. El flujo correcto es: actualizar el objeto en el array (tarea.completada = true) → volver a renderizar la UI desde el array. Nunca modifiques el DOM directamente sin actualizar los datos primero.',
      },
    ],
  },

  // ── Lección 109 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-html-css',
    title: 'Estructura HTML y CSS del proyecto',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 109,
    description: 'Crea la estructura visual básica del proyecto usando HTML y CSS.',
    explanation: `Antes de escribir JavaScript, necesitamos el HTML que define la estructura de la app y el CSS que le da estilo.

**Estructura HTML principal**

La app tiene tres secciones:
1. **Formulario** — para agregar tareas
2. **Filtros** — botones para filtrar por estado
3. **Lista** — donde aparecen las tareas

\`\`\`html
<div id="app">
  <h1>Mi Lista de Tareas</h1>

  <!-- Formulario -->
  <form id="form-tarea">
    <input type="text" id="input-tarea" placeholder="Nueva tarea..." />
    <button type="submit">Agregar</button>
  </form>

  <!-- Filtros -->
  <div id="filtros">
    <button class="filtro activo" data-filtro="todas">Todas</button>
    <button class="filtro" data-filtro="pendientes">Pendientes</button>
    <button class="filtro" data-filtro="completadas">Completadas</button>
  </div>

  <!-- Lista -->
  <ul id="lista-tareas"></ul>

  <!-- Estado vacío -->
  <p id="mensaje-vacio" class="oculto">No hay tareas aún.</p>
</div>
\`\`\`

**Clases CSS clave**

- \`.oculto\` — \`display: none\` para elementos que se muestran/ocultan
- \`.completada\` — estilo tachado para tareas terminadas
- \`.activo\` — resalta el filtro seleccionado
- \`.tarea\` — cada elemento \`<li>\` de la lista`,
    codeExample: `<!-- ── index.html ──────────────────────────────────────────────────────── -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Tareas</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <h1>📝 Mi Lista de Tareas</h1>

    <form id="form-tarea">
      <input
        type="text"
        id="input-tarea"
        placeholder="¿Qué necesitas hacer?"
        autocomplete="off"
        maxlength="100"
      />
      <button type="submit">Agregar</button>
    </form>

    <div id="filtros">
      <button class="filtro activo" data-filtro="todas">Todas</button>
      <button class="filtro" data-filtro="pendientes">Pendientes</button>
      <button class="filtro" data-filtro="completadas">Completadas</button>
    </div>

    <div id="resumen">
      <span id="contador-tareas">0 tareas</span>
    </div>

    <ul id="lista-tareas"></ul>

    <p id="mensaje-vacio" class="oculto">
      ✨ No hay tareas. ¡Agrega una nueva!
    </p>
  </div>

  <script src="app.js"></script>
</body>
</html>

/* ── styles.css ──────────────────────────────────────────────────────────── */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: system-ui, sans-serif;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

#app {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

h1 { font-size: 1.5rem; margin-bottom: 1.5rem; color: #1a1a2e; }

#form-tarea {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

#input-tarea {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
}

#form-tarea button {
  padding: 0.6rem 1.2rem;
  background: #4361ee;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

#filtros { display: flex; gap: 0.5rem; margin-bottom: 1.2rem; }

.filtro {
  padding: 0.4rem 0.9rem;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-size: 0.85rem;
}

.filtro.activo {
  background: #4361ee;
  color: white;
  border-color: #4361ee;
}

#lista-tareas { list-style: none; }

.tarea {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.texto-tarea { flex: 1; font-size: 0.95rem; }

.tarea.completada .texto-tarea {
  text-decoration: line-through;
  color: #999;
}

.oculto { display: none !important; }`,
    keyPoints: [
      'El HTML define la estructura antes de que JavaScript la manipule',
      'Los data attributes (data-filtro) permiten pasar información a los listeners',
      'La clase .oculto con display:none permite mostrar/ocultar elementos con classList',
      'El <script> va al final del <body> para que el HTML ya esté cargado cuando JS corre',
      'Separar HTML, CSS y JS en archivos distintos facilita el mantenimiento',
    ],
    exercise: {
      description: 'Crea los archivos index.html y styles.css del proyecto. Abre el HTML en el navegador y verifica que la estructura se vea correctamente antes de agregar JavaScript.',
      hint: 'Copia el HTML y CSS del codeExample. Verifica en el navegador que el formulario, los filtros y el espacio para la lista aparezcan correctamente.',
    },
    quiz: [
      {
        question: '¿Por qué el <script src="app.js"> va al final del <body> y no en el <head>?',
        options: [
          'Es solo una convención de estilo sin importancia técnica',
          'Para que el HTML ya esté cargado cuando JavaScript intente seleccionar elementos',
          'Porque los scripts en el head no funcionan',
          'Para que la página cargue más lento y el usuario vea el HTML primero',
        ],
        correctAnswer: 'Para que el HTML ya esté cargado cuando JavaScript intente seleccionar elementos',
        correctFeedback: '¡Correcto! Si el script va antes del HTML, querySelector devuelve null porque los elementos aún no existen.',
        incorrectFeedback: 'Incorrecto. Si pones el <script> en el <head>, JavaScript se ejecuta antes de que el HTML esté cargado. Cuando intentas hacer querySelector("#lista-tareas"), el elemento aún no existe y obtienes null.',
      },
      {
        question: '¿Para qué sirve data-filtro="pendientes" en un botón?',
        options: [
          'Para estilizar el botón con CSS automáticamente',
          'Para guardar información personalizada que JavaScript puede leer con dataset',
          'Es un atributo requerido por el navegador para botones de filtro',
          'Para que el formulario envíe el valor "pendientes" al servidor',
        ],
        correctAnswer: 'Para guardar información personalizada que JavaScript puede leer con dataset',
        correctFeedback: '¡Correcto! btn.dataset.filtro devuelve "pendientes", útil en event delegation.',
        incorrectFeedback: 'Incorrecto. Los data attributes (data-*) permiten guardar información personalizada en elementos HTML. JavaScript puede leerlos con element.dataset.filtro. Son muy útiles en event delegation para identificar qué botón fue clicado.',
      },
      {
        question: '¿Qué hace la clase CSS .oculto con display:none?',
        options: [
          'Hace el elemento transparente (invisible pero ocupa espacio)',
          'Elimina el elemento del DOM completamente',
          'Oculta el elemento y no ocupa espacio en el layout',
          'Mueve el elemento fuera de la pantalla',
        ],
        correctAnswer: 'Oculta el elemento y no ocupa espacio en el layout',
        correctFeedback: '¡Correcto! display:none hace el elemento invisible y no ocupa espacio.',
        incorrectFeedback: 'Incorrecto. display:none oculta el elemento y además hace que no ocupe espacio en el layout (a diferencia de visibility:hidden que lo hace invisible pero sí ocupa espacio). El elemento sigue en el DOM, solo está oculto visualmente.',
      },
    ],
  },

  // ── Lección 110 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-capturar-tareas',
    title: 'Capturar tareas desde el formulario',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 110,
    description: 'Aprende a capturar el texto de una nueva tarea desde un formulario.',
    explanation: `El primer paso funcional: escuchar el formulario y capturar el texto que el usuario escribe.

**Flujo de captura**

1. El usuario escribe en el input y hace clic en "Agregar" (o presiona Enter).
2. El evento \`submit\` del formulario se dispara.
3. Llamamos a \`event.preventDefault()\` para no recargar la página.
4. Leemos \`input.value.trim()\` para obtener el texto sin espacios extra.
5. Validamos que no esté vacío.
6. Creamos el objeto tarea y lo añadimos al array.
7. Limpiamos el input.

**Crear un ID único**

\`\`\`js
let siguienteId = 1;

function crearTarea(texto) {
  return {
    id: siguienteId++,
    texto,
    completada: false,
  };
}
\`\`\`

**Manejar el formulario**

\`\`\`js
const form = document.querySelector('#form-tarea');
const input = document.querySelector('#input-tarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const texto = input.value.trim();

  if (!texto) return; // no agregar si está vacío

  const nuevaTarea = crearTarea(texto);
  tareas.push(nuevaTarea);
  input.value = ''; // limpiar el campo
  input.focus();    // devolver el foco para escribir otra

  console.log('Tareas:', tareas);
});
\`\`\``,
    codeExample: `// ── app.js — Paso 1: Capturar tareas ────────────────────────────────────

// Estado de la aplicación
let tareas = [];
let siguienteId = 1;

// Selectores
const form = document.querySelector('#form-tarea');
const inputTarea = document.querySelector('#input-tarea');

// Crear una nueva tarea (objeto)
function crearTarea(texto) {
  return {
    id: siguienteId++,
    texto: texto.trim(),
    completada: false,
  };
}

// Agregar tarea al array
function agregarTarea(texto) {
  if (!texto) {
    mostrarError('Escribe una tarea antes de agregar');
    return;
  }

  const tarea = crearTarea(texto);
  tareas.push(tarea);

  console.log('Tarea agregada:', tarea);
  console.log('Total de tareas:', tareas.length);

  // En la próxima lección: renderizarTareas()
}

// Manejar el envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const texto = inputTarea.value.trim();
  agregarTarea(texto);

  inputTarea.value = '';
  inputTarea.focus();
});

// Mensaje de error temporal
function mostrarError(mensaje) {
  inputTarea.style.borderColor = 'red';
  inputTarea.placeholder = mensaje;

  setTimeout(() => {
    inputTarea.style.borderColor = '';
    inputTarea.placeholder = '¿Qué necesitas hacer?';
  }, 2000);
}`,
    keyPoints: [
      'Siempre usa event.preventDefault() en el submit para evitar recargar la página',
      'input.value.trim() elimina espacios al inicio y al final del texto',
      'Valida que el texto no esté vacío antes de crear la tarea',
      'Limpia el input con input.value = "" y devuelve el foco con input.focus()',
      'El ID incremental garantiza que cada tarea tenga un identificador único',
    ],
    exercise: {
      description: 'Implementa el paso 1: crea los selectores, la función crearTarea(), y el listener de submit. Verifica en la consola que al enviar el formulario se agreguen tareas al array y el input se limpie.',
      hint: 'form.addEventListener("submit", (e) => { e.preventDefault(); const texto = input.value.trim(); if(texto) { tareas.push(crearTarea(texto)); input.value = ""; } })',
    },
    quiz: [
      {
        question: '¿Para qué sirve input.value.trim() al leer el texto de una tarea?',
        options: [
          'Para convertir el texto a mayúsculas',
          'Para eliminar los espacios al inicio y al final del texto',
          'Para verificar que el texto no esté vacío',
          'Para limitar la longitud máxima del texto',
        ],
        correctAnswer: 'Para eliminar los espacios al inicio y al final del texto',
        correctFeedback: '¡Correcto! trim() quita los espacios en blanco al inicio y al final, evitando tareas que solo tengan espacios.',
        incorrectFeedback: 'Incorrecto. trim() elimina los espacios en blanco (espacios, tabs, saltos de línea) al inicio y al final del string. Así evitas crear tareas que solo contengan espacios.',
      },
      {
        question: '¿Por qué usamos siguienteId++ para el ID de cada tarea?',
        options: [
          'Porque localStorage requiere IDs numéricos',
          'Para asegurar que cada tarea tenga un identificador único e incremental',
          'Porque los arrays en JavaScript usan índices numéricos',
          'Es solo una convención, podría usarse Math.random()',
        ],
        correctAnswer: 'Para asegurar que cada tarea tenga un identificador único e incremental',
        correctFeedback: '¡Correcto! El ID único permite identificar tareas al eliminar/modificar sin depender de la posición en el array.',
        incorrectFeedback: 'Incorrecto. siguienteId++ asigna el valor actual como ID y luego lo incrementa. Esto garantiza que cada tarea tenga un ID único que no cambia aunque se reordene o elimine otra tarea.',
      },
      {
        question: '¿Qué hace input.focus() después de agregar una tarea?',
        options: [
          'Selecciona todo el texto del input',
          'Devuelve el cursor al input para que el usuario pueda escribir otra tarea',
          'Resalta el input con un borde de color',
          'Guarda el valor actual del input',
        ],
        correctAnswer: 'Devuelve el cursor al input para que el usuario pueda escribir otra tarea',
        correctFeedback: '¡Correcto! focus() devuelve el foco al input, mejorando la experiencia del usuario.',
        incorrectFeedback: 'Incorrecto. input.focus() coloca el cursor en el campo de texto, lo que significa que el usuario puede escribir la siguiente tarea inmediatamente sin hacer clic de nuevo. Mejora mucho la experiencia de uso.',
      },
    ],
  },

  // ── Lección 111 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-renderizar-tareas',
    title: 'Renderizar tareas en el DOM',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 111,
    description: 'Aprende a mostrar dinámicamente las tareas en la página.',
    explanation: `Ahora que podemos capturar tareas, necesitamos **mostrarlas en la página**. La estrategia es: cada vez que cambie el array, borramos la lista y la volvemos a dibujar desde cero.

**Función renderizarTareas()**

\`\`\`js
function renderizarTareas() {
  const lista = document.querySelector('#lista-tareas');
  lista.innerHTML = ''; // limpiar la lista

  tareas.forEach((tarea) => {
    const li = crearElementoTarea(tarea);
    lista.appendChild(li);
  });
}
\`\`\`

**Función crearElementoTarea()**

\`\`\`js
function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.className = 'tarea' + (tarea.completada ? ' completada' : '');
  li.dataset.id = tarea.id;

  li.innerHTML = \`
    <span class="texto-tarea">\${tarea.texto}</span>
    <button class="btn-completar">✓</button>
    <button class="btn-eliminar">✕</button>
  \`;

  return li;
}
\`\`\`

**¡Cuidado con innerHTML y datos del usuario!**

El código anterior usa \`innerHTML\` con \`tarea.texto\` (dato del usuario). Esto puede ser un **riesgo de seguridad (XSS)** si el usuario escribe HTML o JavaScript en el texto.

La alternativa segura:
\`\`\`js
const span = document.createElement('span');
span.className = 'texto-tarea';
span.textContent = tarea.texto; // textContent es SEGURO
\`\`\`

En este proyecto usaremos \`textContent\` para el texto del usuario.`,
    codeExample: `// ── app.js — Paso 2: Renderizar tareas ───────────────────────────────────

let tareas = [];
let siguienteId = 1;

const form = document.querySelector('#form-tarea');
const inputTarea = document.querySelector('#input-tarea');
const listaTareas = document.querySelector('#lista-tareas');
const mensajeVacio = document.querySelector('#mensaje-vacio');

function crearTarea(texto) {
  return { id: siguienteId++, texto: texto.trim(), completada: false };
}

// Crear el elemento <li> de una tarea (forma segura)
function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.className = 'tarea' + (tarea.completada ? ' completada' : '');
  li.dataset.id = tarea.id;

  // Usar textContent para el texto del usuario — evita XSS
  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = tarea.texto;

  const btnCompletar = document.createElement('button');
  btnCompletar.className = 'btn-completar';
  btnCompletar.textContent = tarea.completada ? '↩' : '✓';

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = '✕';

  li.append(span, btnCompletar, btnEliminar);
  return li;
}

// Renderizar todas las tareas (borra y vuelve a dibujar)
function renderizarTareas() {
  listaTareas.innerHTML = '';

  if (tareas.length === 0) {
    mensajeVacio.classList.remove('oculto');
    return;
  }

  mensajeVacio.classList.add('oculto');
  tareas.forEach((tarea) => {
    listaTareas.appendChild(crearElementoTarea(tarea));
  });
}

function agregarTarea(texto) {
  if (!texto) return;
  tareas.push(crearTarea(texto));
  renderizarTareas(); // actualizar la UI
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  agregarTarea(inputTarea.value.trim());
  inputTarea.value = '';
  inputTarea.focus();
});`,
    keyPoints: [
      'renderizarTareas() borra la lista y la recrea desde el array — simple y predecible',
      'crearElementoTarea() construye el <li> con createElement (más seguro que innerHTML)',
      'Usa textContent para el texto del usuario, nunca innerHTML con datos externos (XSS)',
      'li.dataset.id guarda el ID de la tarea para identificarla al eliminar o completar',
      'Muestra un mensaje de "lista vacía" cuando el array no tiene elementos',
    ],
    exercise: {
      description: 'Implementa renderizarTareas() y crearElementoTarea(). Agrega tres tareas manualmente al array de prueba y llama a renderizarTareas() para verificar que aparecen en la página.',
      hint: 'tareas = [{id:1,texto:"Tarea 1",completada:false}, ...]; renderizarTareas();',
    },
    quiz: [
      {
        question: '¿Por qué debemos usar textContent y no innerHTML para mostrar el texto de una tarea?',
        options: [
          'textContent es más rápido que innerHTML',
          'innerHTML no funciona con texto plano',
          'textContent es seguro — escapa HTML y previene ataques XSS',
          'Es solo una preferencia personal',
        ],
        correctAnswer: 'textContent es seguro — escapa HTML y previene ataques XSS',
        correctFeedback: '¡Correcto! Si el usuario escribe <script> en el texto, textContent lo muestra como texto, no lo ejecuta.',
        incorrectFeedback: 'Incorrecto. textContent es seguro porque trata todo como texto plano. Si usas innerHTML con datos del usuario, alguien podría escribir <script>alert("hack")</script> y ese código se ejecutaría. Esto se llama XSS (Cross-Site Scripting).',
      },
      {
        question: '¿Por qué li.dataset.id = tarea.id es útil?',
        options: [
          'Para que el CSS pueda estilizar cada tarea diferente',
          'Para guardar el ID en el elemento y poder identificarlo al hacer clic en botones',
          'Es requerido por appendChild()',
          'Para que localStorage pueda guardar la tarea',
        ],
        correctAnswer: 'Para que CSS pueda estilizar cada tarea diferente',
        correctFeedback: '¡Correcto! Y también para poder identificar la tarea cuando el usuario hace clic en sus botones.',
        incorrectFeedback: 'Correcto también. dataset.id permite que cuando el usuario haga clic en "eliminar" o "completar", podamos leer el ID del elemento para encontrar la tarea correcta en el array.',
      },
      {
        question: '¿Por qué renderizarTareas() borra toda la lista y la vuelve a crear?',
        options: [
          'Porque no hay otra forma de actualizar la lista',
          'Es el enfoque más simple: el DOM siempre refleja el estado actual del array',
          'Para mejorar el rendimiento',
          'Porque innerHTML no puede actualizarse parcialmente',
        ],
        correctAnswer: 'Es el enfoque más simple: el DOM siempre refleja el estado actual del array',
        correctFeedback: '¡Correcto! Este patrón "borrar y redibujar" es simple y predecible, ideal para este nivel.',
        incorrectFeedback: 'Incorrecto. Borrar y redibujar es el enfoque más simple y predecible. El DOM siempre refleja exactamente el estado del array. Aunque no es el más eficiente para listas muy grandes, es perfecto para este proyecto y fácil de entender.',
      },
    ],
  },

  // ── Lección 112 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-completar-tareas',
    title: 'Marcar tareas como completadas',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 112,
    description: 'Agrega la funcionalidad para marcar tareas como completadas.',
    explanation: `Ahora añadimos la capacidad de marcar y desmarcar tareas como completadas usando **event delegation** en la lista.

**Estrategia**

1. Poner el listener en \`#lista-tareas\` (no en cada botón).
2. Detectar si el clic fue en \`.btn-completar\`.
3. Obtener el ID de la tarea con \`closest(".tarea").dataset.id\`.
4. Encontrar la tarea en el array y cambiar \`completada\`.
5. Llamar a \`renderizarTareas()\` para reflejar el cambio.

\`\`\`js
function toggleCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    renderizarTareas();
  }
}
\`\`\`

**Event delegation en la lista**

\`\`\`js
listaTareas.addEventListener('click', (event) => {
  const li = event.target.closest('.tarea');
  if (!li) return; // clic fuera de una tarea

  const id = Number(li.dataset.id); // convertir a número

  if (event.target.matches('.btn-completar')) {
    toggleCompletada(id);
  }

  if (event.target.matches('.btn-eliminar')) {
    // próxima lección
  }
});
\`\`\`

**Importante:** \`li.dataset.id\` devuelve un **string**, por eso usamos \`Number()\` para convertirlo al tipo correcto antes de compararlo con el ID numérico de las tareas.`,
    codeExample: `// ── app.js — Paso 3: Completar tareas ────────────────────────────────────

let tareas = [];
let siguienteId = 1;

const form = document.querySelector('#form-tarea');
const inputTarea = document.querySelector('#input-tarea');
const listaTareas = document.querySelector('#lista-tareas');
const mensajeVacio = document.querySelector('#mensaje-vacio');

function crearTarea(texto) {
  return { id: siguienteId++, texto: texto.trim(), completada: false };
}

function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.className = 'tarea' + (tarea.completada ? ' completada' : '');
  li.dataset.id = tarea.id;

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = tarea.texto;

  const btnCompletar = document.createElement('button');
  btnCompletar.className = 'btn-completar';
  btnCompletar.textContent = tarea.completada ? '↩ Deshacer' : '✓ Listo';
  btnCompletar.title = tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada';

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = '✕';

  li.append(span, btnCompletar, btnEliminar);
  return li;
}

function renderizarTareas() {
  listaTareas.innerHTML = '';
  if (tareas.length === 0) {
    mensajeVacio.classList.remove('oculto');
    return;
  }
  mensajeVacio.classList.add('oculto');
  tareas.forEach((t) => listaTareas.appendChild(crearElementoTarea(t)));
}

function agregarTarea(texto) {
  if (!texto) return;
  tareas.push(crearTarea(texto));
  renderizarTareas();
}

// NUEVO: alternar estado completada
function toggleCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    renderizarTareas();
  }
}

// Event delegation para TODOS los botones de la lista
listaTareas.addEventListener('click', (event) => {
  const li = event.target.closest('.tarea');
  if (!li) return;

  const id = Number(li.dataset.id); // dataset siempre es string → convertir

  if (event.target.matches('.btn-completar')) {
    toggleCompletada(id);
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  agregarTarea(inputTarea.value.trim());
  inputTarea.value = '';
  inputTarea.focus();
});`,
    keyPoints: [
      'Event delegation en la lista captura clics de botones actuales y futuros',
      'closest(".tarea") sube al <li> padre para obtener el dataset.id',
      'dataset.id devuelve un string, usa Number() para compararlo con IDs numéricos',
      'toggleCompletada busca la tarea en el array y invierte el valor de completada',
      'Siempre llama a renderizarTareas() después de modificar el array',
    ],
    exercise: {
      description: 'Implementa el listener de event delegation en la lista. Haz clic en el botón de completar de cada tarea y verifica que la clase "completada" se agrega/quita y el texto se tacha visualmente.',
      hint: 'El listener va en listaTareas, usa event.target.matches(".btn-completar") para saber si fue ese botón.',
    },
    quiz: [
      {
        question: '¿Por qué convertimos el dataset.id a número con Number()?',
        options: [
          'Porque dataset solo acepta números',
          'Porque los data attributes siempre devuelven strings y los IDs son números',
          'Para que localStorage pueda guardar el ID',
          'Porque find() requiere que el ID sea número',
        ],
        correctAnswer: 'Porque los data attributes siempre devuelven strings y los IDs son números',
        correctFeedback: '¡Correcto! "1" === 1 es false en JavaScript, por eso convertimos con Number().',
        incorrectFeedback: 'Incorrecto. Los data attributes siempre devuelven strings. Si el ID de las tareas es numérico (1, 2, 3...) y comparas con ===, "1" === 1 es false. Por eso necesitas Number(li.dataset.id) para hacer la comparación correcta.',
      },
      {
        question: '¿Qué hace tarea.completada = !tarea.completada?',
        options: [
          'Elimina la propiedad completada del objeto',
          'Invierte el valor booleano: si era false pasa a true, y viceversa',
          'Siempre pone completada en true',
          'Compara completada con otro valor',
        ],
        correctAnswer: 'Invierte el valor booleano: si era false pasa a true, y viceversa',
        correctFeedback: '¡Correcto! El operador ! invierte el booleano. Es el patrón toggle para booleanos.',
        incorrectFeedback: 'Incorrecto. !valor invierte el booleano: !false = true, !true = false. Asignar ese resultado al mismo campo alterna su valor cada vez que se ejecuta.',
      },
      {
        question: 'El usuario hace clic en el texto de la tarea (no en un botón). ¿Qué hace event.target.closest(".tarea")?',
        options: [
          'Devuelve null porque el texto no tiene clase "tarea"',
          'Devuelve el <span> con el texto',
          'Devuelve el <li> que contiene el texto, porque tiene clase "tarea"',
          'Lanza un error',
        ],
        correctAnswer: 'Devuelve el <li> que contiene el texto, porque tiene clase "tarea"',
        correctFeedback: '¡Correcto! closest() sube por el DOM hasta encontrar el primer ancestro con clase "tarea".',
        incorrectFeedback: 'Incorrecto. closest(".tarea") sube por el árbol DOM desde el elemento clicado hasta encontrar el primer ancestro que tenga la clase "tarea". Como el <span> está dentro del <li class="tarea">, devuelve ese <li>.',
      },
    ],
  },

  // ── Lección 113 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-eliminar-tareas',
    title: 'Eliminar tareas de la lista',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 113,
    description: 'Agrega la funcionalidad para eliminar tareas de la lista.',
    explanation: `Eliminar una tarea significa **filtrar el array** para quitar la tarea con ese ID, y luego volver a renderizar.

**Función eliminarTarea()**

\`\`\`js
function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  renderizarTareas();
}
\`\`\`

¿Por qué \`filter\`? Porque crea un **nuevo array** sin la tarea eliminada. Es más seguro que modificar el array original con \`splice\`.

**Agregar al event delegation**

\`\`\`js
listaTareas.addEventListener('click', (event) => {
  const li = event.target.closest('.tarea');
  if (!li) return;

  const id = Number(li.dataset.id);

  if (event.target.matches('.btn-completar')) {
    toggleCompletada(id);
  }

  if (event.target.matches('.btn-eliminar')) {
    eliminarTarea(id);
  }
});
\`\`\`

**¿Confirmar antes de eliminar?**

\`\`\`js
function eliminarTarea(id) {
  // Confirmación simple (opcional)
  if (!confirm('¿Eliminar esta tarea?')) return;

  tareas = tareas.filter((t) => t.id !== id);
  renderizarTareas();
}
\`\`\`

Para aplicaciones más pulidas se usa un modal de confirmación propio en lugar de \`confirm()\`, pero para este proyecto está bien.`,
    codeExample: `// ── app.js — Paso 4: Eliminar tareas ─────────────────────────────────────

let tareas = [];
let siguienteId = 1;

const form = document.querySelector('#form-tarea');
const inputTarea = document.querySelector('#input-tarea');
const listaTareas = document.querySelector('#lista-tareas');
const mensajeVacio = document.querySelector('#mensaje-vacio');

function crearTarea(texto) {
  return { id: siguienteId++, texto: texto.trim(), completada: false };
}

function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.className = 'tarea' + (tarea.completada ? ' completada' : '');
  li.dataset.id = tarea.id;

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = tarea.texto;

  const btnCompletar = document.createElement('button');
  btnCompletar.className = 'btn-completar';
  btnCompletar.textContent = tarea.completada ? '↩' : '✓';

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = '✕ Eliminar';
  btnEliminar.title = 'Eliminar tarea';

  li.append(span, btnCompletar, btnEliminar);
  return li;
}

function renderizarTareas() {
  listaTareas.innerHTML = '';
  if (tareas.length === 0) {
    mensajeVacio.classList.remove('oculto');
    return;
  }
  mensajeVacio.classList.add('oculto');
  tareas.forEach((t) => listaTareas.appendChild(crearElementoTarea(t)));
}

function agregarTarea(texto) {
  if (!texto) return;
  tareas.push(crearTarea(texto));
  renderizarTareas();
}

function toggleCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = !tarea.completada;
    renderizarTareas();
  }
}

// NUEVO: eliminar tarea del array
function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  renderizarTareas();
}

// Event delegation — maneja completar Y eliminar
listaTareas.addEventListener('click', (event) => {
  const li = event.target.closest('.tarea');
  if (!li) return;

  const id = Number(li.dataset.id);

  if (event.target.matches('.btn-completar')) {
    toggleCompletada(id);
  }

  if (event.target.matches('.btn-eliminar')) {
    eliminarTarea(id);
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  agregarTarea(inputTarea.value.trim());
  inputTarea.value = '';
  inputTarea.focus();
});`,
    keyPoints: [
      'filter devuelve un nuevo array sin la tarea eliminada, sin mutar el original',
      'tareas = tareas.filter(...) reemplaza el array completo con el resultado filtrado',
      'El event delegation del paso anterior ya captura clics en .btn-eliminar',
      'Actualizar el array + renderizarTareas() es siempre el flujo correcto',
      'confirm() es simple pero intrusivo; en apps reales se usan modales de confirmación',
    ],
    exercise: {
      description: 'Agrega la función eliminarTarea() y conéctala al event delegation existente. Prueba agregando 3 tareas y eliminando la del medio. Verifica que la lista se actualiza correctamente.',
      hint: 'tareas = tareas.filter(t => t.id !== id); — recuerda reasignar el array filtrado.',
    },
    quiz: [
      {
        question: '¿Por qué usamos tareas.filter() en lugar de tareas.splice() para eliminar?',
        options: [
          'filter() es más rápido que splice()',
          'filter() crea un nuevo array sin la tarea; splice() muta el original',
          'splice() no funciona con objetos',
          'filter() puede eliminar múltiples tareas a la vez',
        ],
        correctAnswer: 'filter() crea un nuevo array sin la tarea; splice() muta el original',
        correctFeedback: '¡Correcto! Preferir inmutabilidad (crear nuevo array) hace el código más predecible.',
        incorrectFeedback: 'Incorrecto. filter() crea un nuevo array sin modificar el original. splice() muta el array directamente (lo cual puede causar bugs sutiles). Preferir crear nuevos arrays en lugar de mutar los existentes es una buena práctica.',
      },
      {
        question: '¿Qué devuelve tareas.filter(t => t.id !== id) si id = 2 y hay tareas con ids 1, 2, 3?',
        options: [
          'Un array con las tareas de id 1 y 3',
          'Un array con solo la tarea de id 2',
          'El índice de la tarea eliminada',
          'Un booleano indicando si se eliminó',
        ],
        correctAnswer: 'Un array con las tareas de id 1 y 3',
        correctFeedback: '¡Correcto! filter mantiene los elementos donde la condición es true (id !== 2).',
        incorrectFeedback: 'Incorrecto. filter() mantiene los elementos para los que la función devuelve true. t.id !== 2 es true para ids 1 y 3, y false para id 2. El resultado es un array con las tareas de id 1 y 3.',
      },
    ],
  },

  // ── Lección 114 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-filtrar-tareas',
    title: 'Filtrar tareas por estado',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 114,
    description: 'Aprende a filtrar tareas por estado: todas, pendientes y completadas.',
    explanation: `Los botones de filtro permiten ver solo las tareas del estado seleccionado. La clave es tener una variable \`filtroActivo\` y una función que devuelva las tareas filtradas.

**Variable de estado del filtro**

\`\`\`js
let filtroActivo = 'todas'; // 'todas' | 'pendientes' | 'completadas'
\`\`\`

**Función obtenerTareasFiltradas()**

\`\`\`js
function obtenerTareasFiltradas() {
  if (filtroActivo === 'pendientes') {
    return tareas.filter((t) => !t.completada);
  }
  if (filtroActivo === 'completadas') {
    return tareas.filter((t) => t.completada);
  }
  return tareas; // 'todas'
}
\`\`\`

**Modificar renderizarTareas() para usar el filtro**

\`\`\`js
function renderizarTareas() {
  const tareasMostradas = obtenerTareasFiltradas();
  listaTareas.innerHTML = '';

  if (tareasMostradas.length === 0) {
    mensajeVacio.classList.remove('oculto');
    return;
  }

  mensajeVacio.classList.add('oculto');
  tareasMostradas.forEach((t) => listaTareas.appendChild(crearElementoTarea(t)));
}
\`\`\`

**Listener para los botones de filtro**

\`\`\`js
const filtros = document.querySelector('#filtros');

filtros.addEventListener('click', (event) => {
  if (!event.target.matches('.filtro')) return;

  filtroActivo = event.target.dataset.filtro;

  // Actualizar estilos de botones
  document.querySelectorAll('.filtro').forEach((btn) => {
    btn.classList.toggle('activo', btn.dataset.filtro === filtroActivo);
  });

  renderizarTareas();
});
\`\`\``,
    codeExample: `// ── app.js — Paso 5: Filtrar tareas ──────────────────────────────────────

let tareas = [];
let siguienteId = 1;
let filtroActivo = 'todas'; // NUEVO: estado del filtro

const form = document.querySelector('#form-tarea');
const inputTarea = document.querySelector('#input-tarea');
const listaTareas = document.querySelector('#lista-tareas');
const mensajeVacio = document.querySelector('#mensaje-vacio');
const contenedorFiltros = document.querySelector('#filtros');

function crearTarea(texto) {
  return { id: siguienteId++, texto: texto.trim(), completada: false };
}

function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.className = 'tarea' + (tarea.completada ? ' completada' : '');
  li.dataset.id = tarea.id;

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = tarea.texto;

  const btnCompletar = document.createElement('button');
  btnCompletar.className = 'btn-completar';
  btnCompletar.textContent = tarea.completada ? '↩' : '✓';

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = '✕';

  li.append(span, btnCompletar, btnEliminar);
  return li;
}

// NUEVO: devuelve las tareas según el filtro activo
function obtenerTareasFiltradas() {
  if (filtroActivo === 'pendientes') return tareas.filter((t) => !t.completada);
  if (filtroActivo === 'completadas') return tareas.filter((t) => t.completada);
  return tareas;
}

function renderizarTareas() {
  const tareasMostradas = obtenerTareasFiltradas(); // MODIFICADO
  listaTareas.innerHTML = '';

  if (tareasMostradas.length === 0) {
    mensajeVacio.classList.remove('oculto');
    return;
  }
  mensajeVacio.classList.add('oculto');
  tareasMostradas.forEach((t) => listaTareas.appendChild(crearElementoTarea(t)));
}

function agregarTarea(texto) {
  if (!texto) return;
  tareas.push(crearTarea(texto));
  renderizarTareas();
}

function toggleCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) { tarea.completada = !tarea.completada; renderizarTareas(); }
}

function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  renderizarTareas();
}

listaTareas.addEventListener('click', (event) => {
  const li = event.target.closest('.tarea');
  if (!li) return;
  const id = Number(li.dataset.id);
  if (event.target.matches('.btn-completar')) toggleCompletada(id);
  if (event.target.matches('.btn-eliminar')) eliminarTarea(id);
});

// NUEVO: listener para los botones de filtro
contenedorFiltros.addEventListener('click', (event) => {
  if (!event.target.matches('.filtro')) return;
  filtroActivo = event.target.dataset.filtro;
  document.querySelectorAll('.filtro').forEach((btn) => {
    btn.classList.toggle('activo', btn.dataset.filtro === filtroActivo);
  });
  renderizarTareas();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  agregarTarea(inputTarea.value.trim());
  inputTarea.value = '';
  inputTarea.focus();
});`,
    keyPoints: [
      'filtroActivo es una variable de estado que guarda el filtro seleccionado',
      'obtenerTareasFiltradas() usa filter() sobre el array completo según el filtro',
      'renderizarTareas() usa obtenerTareasFiltradas() en lugar del array directo',
      'classList.toggle("activo", condicion) es más limpio que add/remove manualmente',
      'El filtro solo afecta lo que se muestra, no el array original de tareas',
    ],
    exercise: {
      description: 'Implementa los botones de filtro. Agrega 5 tareas y completa 2. Verifica que los filtros "Pendientes" y "Completadas" muestran solo las tareas correctas, y que "Todas" las muestra de nuevo.',
      hint: 'El listener va en el contenedor de filtros (#filtros) usando event delegation. Lee event.target.dataset.filtro para saber qué filtro activar.',
    },
    quiz: [
      {
        question: '¿Por qué el filtro no elimina tareas del array, solo cambia lo que se muestra?',
        options: [
          'Porque filter() no puede eliminar objetos',
          'Porque filtroActivo afecta solo a renderizarTareas(), no al array de datos',
          'Porque localStorage guarda las tareas automáticamente',
          'Porque el DOM siempre muestra todas las tareas',
        ],
        correctAnswer: 'Porque filtroActivo afecta solo a renderizarTareas(), no al array de datos',
        correctFeedback: '¡Correcto! El array tareas siempre tiene todas las tareas; el filtro solo controla cuáles se muestran.',
        incorrectFeedback: 'Incorrecto. El array tareas siempre contiene todas las tareas. El filtro solo afecta a obtenerTareasFiltradas() que se usa dentro de renderizarTareas(). El array original nunca se modifica al filtrar.',
      },
      {
        question: '¿Qué hace classList.toggle("activo", condicion)?',
        options: [
          'Agrega y quita la clase aleatoriamente',
          'Agrega la clase si condicion es true; la quita si es false',
          'Verifica si la clase está presente y devuelve true/false',
          'Solo funciona con la clase "activo"',
        ],
        correctAnswer: 'Agrega la clase si condicion es true; la quita si es false',
        correctFeedback: '¡Correcto! La versión con segundo argumento booleano controla explícitamente si agrega o quita.',
        incorrectFeedback: 'Incorrecto. classList.toggle(clase, condicion) tiene dos formas: sin segundo argumento alterna; con segundo argumento booleano, agrega si true y quita si false. Es más limpio que un if/else con add() y remove().',
      },
    ],
  },

  // ── Lección 115 ───────────────────────────────────────────────────────────
  {
    slug: 'proyecto-todo-mejorar-ux',
    title: 'Mejorar la experiencia del usuario',
    module: 'Proyecto DOM: Lista de tareas',
    moduleNumber: 15,
    order: 115,
    description: 'Mejora el proyecto con validaciones, mensajes, estados vacíos y persistencia con localStorage.',
    explanation: `El proyecto funciona, pero podemos mejorar la experiencia del usuario con detalles que hacen la diferencia.

**1. Contador de tareas**

\`\`\`js
function actualizarContador() {
  const pendientes = tareas.filter((t) => !t.completada).length;
  document.querySelector('#contador-tareas').textContent =
    pendientes === 1 ? '1 tarea pendiente' : pendientes + ' tareas pendientes';
}
\`\`\`

**2. Persistencia con localStorage**

\`\`\`js
function guardarEnStorage() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
  localStorage.setItem('siguienteId', siguienteId);
}

function cargarDeStorage() {
  const guardadas = localStorage.getItem('tareas');
  if (guardadas) {
    tareas = JSON.parse(guardadas);
    siguienteId = Number(localStorage.getItem('siguienteId')) || 1;
  }
}
\`\`\`

**3. Limpiar completadas**

\`\`\`js
function limpiarCompletadas() {
  tareas = tareas.filter((t) => !t.completada);
  renderizarTareas();
  guardarEnStorage();
}
\`\`\`

**4. Mensaje de estado vacío personalizado**

Según el filtro activo, el mensaje cambia:
\`\`\`js
function obtenerMensajeVacio() {
  if (filtroActivo === 'pendientes') return '¡Todo al día! No hay tareas pendientes.';
  if (filtroActivo === 'completadas') return 'Aún no has completado ninguna tarea.';
  return '✨ ¡Agrega tu primera tarea!';
}
\`\`\`

**Flujo final:** cada acción (agregar, completar, eliminar) debe llamar a \`renderizarTareas()\`, \`actualizarContador()\` y \`guardarEnStorage()\`.`,
    codeExample: `// ── app.js — VERSIÓN FINAL COMPLETA ──────────────────────────────────────

let tareas = [];
let siguienteId = 1;
let filtroActivo = 'todas';

// Selectores
const form = document.querySelector('#form-tarea');
const inputTarea = document.querySelector('#input-tarea');
const listaTareas = document.querySelector('#lista-tareas');
const mensajeVacio = document.querySelector('#mensaje-vacio');
const contadorEl = document.querySelector('#contador-tareas');
const contenedorFiltros = document.querySelector('#filtros');

// ── Persistencia ──────────────────────────────────────────────────────────
function guardarEnStorage() {
  localStorage.setItem('tareas-app', JSON.stringify(tareas));
  localStorage.setItem('tareas-nextid', siguienteId);
}

function cargarDeStorage() {
  const guardadas = localStorage.getItem('tareas-app');
  if (guardadas) {
    tareas = JSON.parse(guardadas);
    siguienteId = Number(localStorage.getItem('tareas-nextid')) || tareas.length + 1;
  }
}

// ── Datos ─────────────────────────────────────────────────────────────────
function crearTarea(texto) {
  return { id: siguienteId++, texto: texto.trim(), completada: false };
}

function obtenerTareasFiltradas() {
  if (filtroActivo === 'pendientes') return tareas.filter((t) => !t.completada);
  if (filtroActivo === 'completadas') return tareas.filter((t) => t.completada);
  return tareas;
}

// ── UI ────────────────────────────────────────────────────────────────────
function actualizarContador() {
  const pendientes = tareas.filter((t) => !t.completada).length;
  contadorEl.textContent = pendientes === 1 ? '1 pendiente' : pendientes + ' pendientes';
}

function crearElementoTarea(tarea) {
  const li = document.createElement('li');
  li.className = 'tarea' + (tarea.completada ? ' completada' : '');
  li.dataset.id = tarea.id;

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = tarea.texto;

  const btnCompletar = document.createElement('button');
  btnCompletar.className = 'btn-completar';
  btnCompletar.textContent = tarea.completada ? '↩' : '✓';

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = '✕';

  li.append(span, btnCompletar, btnEliminar);
  return li;
}

function renderizarTareas() {
  const mostradas = obtenerTareasFiltradas();
  listaTareas.innerHTML = '';

  if (mostradas.length === 0) {
    const msg = filtroActivo === 'pendientes' ? '¡Todo al día!'
      : filtroActivo === 'completadas' ? 'Aún no hay completadas.'
      : '✨ Agrega tu primera tarea.';
    mensajeVacio.textContent = msg;
    mensajeVacio.classList.remove('oculto');
    return;
  }

  mensajeVacio.classList.add('oculto');
  mostradas.forEach((t) => listaTareas.appendChild(crearElementoTarea(t)));
  actualizarContador();
}

// ── Acciones ──────────────────────────────────────────────────────────────
function agregarTarea(texto) {
  if (!texto) return;
  tareas.push(crearTarea(texto));
  guardarEnStorage();
  renderizarTareas();
}

function toggleCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) { tarea.completada = !tarea.completada; guardarEnStorage(); renderizarTareas(); }
}

function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  guardarEnStorage();
  renderizarTareas();
}

// ── Listeners ─────────────────────────────────────────────────────────────
form.addEventListener('submit', (event) => {
  event.preventDefault();
  agregarTarea(inputTarea.value.trim());
  inputTarea.value = '';
  inputTarea.focus();
});

listaTareas.addEventListener('click', (event) => {
  const li = event.target.closest('.tarea');
  if (!li) return;
  const id = Number(li.dataset.id);
  if (event.target.matches('.btn-completar')) toggleCompletada(id);
  if (event.target.matches('.btn-eliminar')) eliminarTarea(id);
});

contenedorFiltros.addEventListener('click', (event) => {
  if (!event.target.matches('.filtro')) return;
  filtroActivo = event.target.dataset.filtro;
  document.querySelectorAll('.filtro').forEach((btn) => {
    btn.classList.toggle('activo', btn.dataset.filtro === filtroActivo);
  });
  renderizarTareas();
});

// ── Inicializar ───────────────────────────────────────────────────────────
cargarDeStorage();
renderizarTareas();`,
    keyPoints: [
      'localStorage.setItem(clave, JSON.stringify(array)) guarda el array como string',
      'JSON.parse(localStorage.getItem(clave)) recupera el array al recargar',
      'Llama a guardarEnStorage() en cada acción que modifique el array',
      'El mensaje de vacío puede cambiar según el filtro activo para mejor UX',
      'cargarDeStorage() al inicio permite que las tareas persistan entre sesiones',
    ],
    exercise: {
      description: 'Añade la persistencia con localStorage a tu proyecto. Agrega varias tareas, completa algunas y recarga la página. Las tareas deben seguir ahí. Luego añade el contador de tareas pendientes.',
      hint: 'Llama a guardarEnStorage() al final de agregarTarea, toggleCompletada y eliminarTarea. Llama a cargarDeStorage() al inicio del script.',
    },
    quiz: [
      {
        question: '¿Por qué usamos JSON.stringify() antes de guardar en localStorage?',
        options: [
          'Para encriptar los datos',
          'Porque localStorage solo puede guardar strings, no arrays u objetos',
          'Para comprimir los datos y ahorrar espacio',
          'Porque JSON.stringify hace que los datos sean más seguros',
        ],
        correctAnswer: 'Porque localStorage solo puede guardar strings, no arrays u objetos',
        correctFeedback: '¡Correcto! localStorage solo acepta strings. JSON.stringify convierte el array a string para guardarlo.',
        incorrectFeedback: 'Incorrecto. localStorage solo puede guardar strings. Si intentas guardar un array directamente, obtendrás el string "[object Object]". JSON.stringify convierte el array/objeto en un string JSON que luego puedes recuperar con JSON.parse.',
      },
      {
        question: '¿Qué ocurre si el usuario cierra el navegador y no usamos localStorage?',
        options: [
          'Las tareas se guardan automáticamente en el servidor',
          'Las tareas se pierden porque el estado estaba solo en memoria (JavaScript)',
          'El navegador las guarda en una cookie automáticamente',
          'Las tareas quedan en el DOM aunque se cierre',
        ],
        correctAnswer: 'Las tareas se pierden porque el estado estaba solo en memoria (JavaScript)',
        correctFeedback: '¡Correcto! Sin persistencia, la memoria del navegador se limpia al cerrar la página.',
        incorrectFeedback: 'Incorrecto. El array tareas vive en la memoria de JavaScript. Cuando se cierra o recarga la página, esa memoria se limpia. Sin localStorage (u otra forma de persistencia), se pierden todos los datos.',
      },
      {
        question: 'Después de implementar este proyecto completo, ¿qué conceptos del DOM utilizaste?',
        options: [
          'Solo querySelector y addEventListener',
          'querySelector, createElement, classList, dataset, event delegation, localStorage',
          'Solo innerHTML y onclick',
          'fetch, async/await y promesas',
        ],
        correctAnswer: 'querySelector, createElement, classList, dataset, event delegation, localStorage',
        correctFeedback: '¡Correcto! Este proyecto integra prácticamente todo lo aprendido en el nivel DOM.',
        incorrectFeedback: 'Incorrecto. El proyecto usa: querySelector/querySelectorAll, createElement, appendChild, classList, dataset, addEventListener, event delegation con matches() y closest(), preventDefault(), y localStorage. Es una integración completa del nivel DOM.',
      },
      {
        question: '¿Cuál es la forma correcta de recuperar el array de tareas desde localStorage?',
        options: [
          'localStorage.getItem("tareas-app")',
          'JSON.parse(localStorage.getItem("tareas-app"))',
          'localStorage.parse("tareas-app")',
          'JSON.getItem(localStorage, "tareas-app")',
        ],
        correctAnswer: 'JSON.parse(localStorage.getItem("tareas-app"))',
        correctFeedback: '¡Correcto! getItem obtiene el string, JSON.parse lo convierte de vuelta al array.',
        incorrectFeedback: 'Incorrecto. localStorage.getItem() devuelve un string. Para recuperar el array necesitas convertirlo de vuelta con JSON.parse(). La cadena completa es: JSON.parse(localStorage.getItem("clave")).',
      },
    ],
  },
]

export const jsModule15: Module = {
  number: 15,
  title: 'Proyecto DOM: Lista de tareas',
  level: 'nivel3',
  lessons: lessonsJsModule15,
}
