import type { Lesson, Module } from '@/types'

export const lessonsJsModule21: Lesson[] = [
  {
    slug: 'codigo-sincrono-vs-asincrono',
    title: 'Código síncrono vs asíncrono',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 156,
    description:
      'Aprende la diferencia entre código que se ejecuta paso a paso y código que espera tareas externas sin detener toda la aplicación.',
    explanation: `## Código síncrono vs asíncrono

Antes de entender la asincronía, necesitas entender cómo JavaScript ejecuta el código normalmente.

### Código síncrono

**Síncrono** significa "uno después del otro". JavaScript ejecuta las instrucciones línea por línea, esperando que cada una termine antes de pasar a la siguiente.

\`\`\`js
console.log('1. Inicio')
console.log('2. Procesando...')
console.log('3. Fin')
// Imprime: 1, 2, 3 — siempre en ese orden
\`\`\`

### El problema del código síncrono

¿Qué pasa si una operación tarda mucho tiempo?

\`\`\`js
// Imagina que esta función tarda 3 segundos
let datos = obtenerDatosDelServidor() // 😰 bloquea todo 3 segundos
console.log('Esto no se ejecuta hasta que termina lo de arriba')
\`\`\`

Si JavaScript tuviera que **esperar** 3 segundos para obtener datos de internet, el navegador se **congelaría** completamente. No podrías hacer clic, escribir ni nada.

### Código asíncrono: la solución

El código **asíncrono** permite que JavaScript diga "empieza esta tarea, pero no esperes — sigue con lo demás".

\`\`\`js
console.log('1. Inicio')

// Le decimos: ejecuta esto en 2 segundos, pero no esperes
setTimeout(() => {
  console.log('3. Esto llega después de 2 segundos')
}, 2000)

console.log('2. Esto se ejecuta inmediatamente, sin esperar')

// Imprime: 1, 2, y luego 3 (después de 2 segundos)
\`\`\`

### La analogía del restaurante

Imagina un restaurante con un solo mesero:

**Síncrono (malo):** El mesero toma el pedido de la mesa 1, va a la cocina, espera 20 minutos a que esté listo, lo lleva, y solo entonces atiende a la mesa 2. Todas las demás mesas esperan en silencio.

**Asíncrono (lo que hace JavaScript):** El mesero toma el pedido de la mesa 1, lo pasa a la cocina, y mientras la cocina trabaja, atiende a las mesas 2, 3 y 4. Cuando la cocina avisa que el pedido 1 está listo, el mesero lo lleva.

### ¿Cuándo ocurre el código asíncrono?

En JavaScript, las operaciones asíncronas incluyen:
- Temporizadores (\`setTimeout\`, \`setInterval\`)
- Solicitudes a servidores (fetch, AJAX)
- Lectura de archivos (en Node.js)
- Eventos del usuario (clicks, teclado)
- Promesas y async/await`,
    codeExample: `// app.js

// === CÓDIGO SÍNCRONO ===
console.log('Síncrono: paso 1')
console.log('Síncrono: paso 2')
console.log('Síncrono: paso 3')
// Salida: paso 1, paso 2, paso 3 (en orden)

// === CÓDIGO ASÍNCRONO con setTimeout ===
console.log('Asíncrono: inicio')

setTimeout(() => {
  console.log('Asíncrono: este mensaje llegó después de 2 segundos')
}, 2000)

console.log('Asíncrono: esto se ejecuta SIN esperar el setTimeout')

// Salida:
// "Asíncrono: inicio"
// "Asíncrono: esto se ejecuta SIN esperar el setTimeout"
// ... (2 segundos después)
// "Asíncrono: este mensaje llegó después de 2 segundos"

// === DEMOSTRACIÓN: el navegador no se congela ===
function simularCargaLenta() {
  console.log('Iniciando carga de datos...')

  setTimeout(() => {
    const datos = { usuario: 'Ana', puntos: 150 }
    console.log('Datos recibidos:', datos.usuario)
  }, 3000) // Simula 3 segundos de espera (como una solicitud a un servidor)

  // Mientras esperamos los datos, el programa sigue funcionando:
  console.log('La UI sigue respondiendo mientras cargamos datos...')
}

simularCargaLenta()`,
    keyPoints: [
      'El código síncrono se ejecuta línea por línea — cada instrucción espera a que la anterior termine.',
      'El código asíncrono permite iniciar una tarea y continuar sin esperar su resultado.',
      'Sin asincronía, el navegador se congela durante operaciones lentas como solicitudes a servidores.',
      'setTimeout es el ejemplo más simple de asincronía en JavaScript.',
      'El orden de ejecución del código asíncrono puede no coincidir con el orden en que está escrito.',
      'La asincronía es fundamental en JavaScript porque el navegador trabaja en un solo hilo.',
    ],
    exercise: {
      description:
        'Predice el orden de los console.log antes de ejecutar el código. Escribe tu predicción y luego compruébala en la consola del navegador:\n\n```js\nconsole.log("A")\nsetTimeout(() => console.log("B"), 1000)\nconsole.log("C")\nsetTimeout(() => console.log("D"), 0)\nconsole.log("E")\n```\n\nDespués de comprobarlo, responde: ¿Por qué "D" no se imprime después de "C" aunque su delay es 0?',
      hint: 'Recuerda: setTimeout siempre es asíncrono, incluso con delay 0. El callback se pone en una "cola de tareas" y se ejecuta solo cuando el código síncrono actual termina. Por eso E se ejecuta antes que D.',
    },
    quiz: [
      {
        question: '¿Qué significa que el código JavaScript es síncrono por defecto?',
        options: [
          'Que se ejecuta en múltiples hilos al mismo tiempo',
          'Que se ejecuta línea por línea, esperando que cada instrucción termine antes de la siguiente',
          'Que solo puede ejecutar una función a la vez en todo el programa',
          'Que las variables son sincronizadas automáticamente',
        ],
        correctAnswer: 'Que se ejecuta línea por línea, esperando que cada instrucción termine antes de la siguiente',
        correctFeedback: 'Exacto. JavaScript síncrono es secuencial: cada línea termina antes de que empiece la siguiente.',
        incorrectFeedback: 'JavaScript no usa múltiples hilos en el navegador. Síncrono significa secuencial: línea 1, luego línea 2, luego línea 3, sin superposición.',
      },
      {
        question: '¿Qué imprime primero este código?\n\nconsole.log("A")\nsetTimeout(() => console.log("B"), 0)\nconsole.log("C")',
        options: [
          'B primero, porque su delay es 0',
          'A, luego B, luego C',
          'A, luego C, luego B',
          'C, luego A, luego B',
        ],
        correctAnswer: 'A, luego C, luego B',
        correctFeedback: 'Correcto. Aunque el delay sea 0, setTimeout es asíncrono. B se mueve a la cola de tareas y se ejecuta solo después de que todo el código síncrono (A y C) termina.',
        incorrectFeedback: 'setTimeout siempre es asíncrono, incluso con delay 0. JavaScript ejecuta A y C primero (código síncrono) y luego B (tarea asíncrona pendiente).',
      },
      {
        question: '¿Por qué es importante la asincronía en el navegador?',
        options: [
          'Para que el código sea más corto de escribir',
          'Para que el navegador no se congele mientras espera operaciones lentas como solicitudes de red',
          'Para ejecutar código en múltiples pestañas a la vez',
          'Para mejorar la seguridad del código',
        ],
        correctAnswer: 'Para que el navegador no se congele mientras espera operaciones lentas como solicitudes de red',
        correctFeedback: 'Correcto. Sin asincronía, el navegador quedaría "congelado" esperando datos de internet, haciendo la página imposible de usar.',
        incorrectFeedback: 'La asincronía no tiene que ver con seguridad ni múltiples pestañas. Su propósito es mantener la UI responsiva mientras ocurren operaciones lentas como fetch, timers, etc.',
      },
      {
        question: '¿Cuál de estas operaciones es asíncrona en JavaScript?',
        options: [
          'let x = 5 + 3',
          'console.log("hola")',
          'setTimeout(() => {}, 1000)',
          'const arr = [1, 2, 3]',
        ],
        correctAnswer: 'setTimeout(() => {}, 1000)',
        correctFeedback: 'Correcto. setTimeout es asíncrono — programa la ejecución de un callback para más adelante, sin bloquear el código actual.',
        incorrectFeedback: 'Las asignaciones y console.log son síncronas — se ejecutan inmediatamente. Solo setTimeout (y operaciones similares como fetch) son asíncronas.',
      },
      {
        question: 'Usando la analogía del restaurante, ¿qué representa el "mesero asíncrono"?',
        options: [
          'Un servidor que solo atiende una mesa a la vez',
          'Un mesero que toma pedidos de varias mesas mientras la cocina prepara los anteriores',
          'Un sistema con múltiples meseros trabajando simultáneamente',
          'Un restaurante sin cocina que prepara todo al instante',
        ],
        correctAnswer: 'Un mesero que toma pedidos de varias mesas mientras la cocina prepara los anteriores',
        correctFeedback: 'Exacto. El modelo asíncrono permite que JavaScript "tome pedidos" (inicie tareas) y siga trabajando mientras espera los resultados.',
        incorrectFeedback: 'JavaScript tiene un solo hilo (un mesero). La clave de la asincronía es que ese único mesero no espera parado — sigue tomando otros pedidos mientras la cocina trabaja.',
      },
    ],
  },

  {
    slug: 'por-que-existe-asincronia',
    title: '¿Por qué existe la asincronía?',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 157,
    description:
      'Entiende por qué JavaScript necesita manejar tareas como temporizadores, solicitudes a servidores, eventos y archivos de forma asíncrona.',
    explanation: `## ¿Por qué existe la asincronía?

JavaScript fue diseñado para correr en el navegador, donde muchas operaciones toman tiempo. Sin asincronía, la experiencia de usuario sería terrible.

### El problema fundamental

JavaScript se ejecuta en un **único hilo** (single-threaded). Eso significa que solo puede hacer una cosa a la vez. Si tuviera que esperar cada operación lenta, la página entera se bloquearía.

### ¿Qué operaciones son lentas?

**1. Solicitudes de red (la más común)**
\`\`\`js
// Obtener el clima desde una API puede tardar 200ms - 2s
fetch('https://api.clima.com/ciudad/Madrid')
\`\`\`
Si esperaras bloqueando, el usuario no podría hacer nada en esos segundos.

**2. Temporizadores**
\`\`\`js
// Mostrar una notificación después de 3 segundos
setTimeout(() => mostrarNotificacion(), 3000)
\`\`\`

**3. Eventos del usuario**
Los clicks, teclas y movimientos del mouse no ocurren en un momento predecible — llegan cuando el usuario los genera.

**4. Lectura de archivos (Node.js)**
\`\`\`js
// En Node.js: leer un archivo puede tardar varios milisegundos
fs.readFile('datos.json', (err, contenido) => { ... })
\`\`\`

### La solución: el modelo de eventos

JavaScript usa un sistema donde:
1. Las operaciones lentas se **delegan** al navegador (o sistema operativo)
2. JavaScript sigue ejecutando código síncrono
3. Cuando la operación termina, el resultado vuelve como un **callback** o **promise**

\`\`\`js
// JavaScript delega al navegador: "hazme una solicitud y avísame"
fetch('https://api.ejemplo.com/datos')
  .then(respuesta => respuesta.json())    // cuando llegue la respuesta
  .then(datos => mostrarEnPantalla(datos)) // cuando se parsee el JSON
  .catch(err => mostrarError(err))         // si algo falla

// Mientras tanto, JavaScript sigue trabajando...
actualizarReloj()  // esto no espera al fetch
\`\`\`

### ¿Por qué es JavaScript de un solo hilo?

Fue una decisión de diseño. En el navegador, manejar múltiples hilos que modifiquen el DOM al mismo tiempo causaría condiciones de carrera y bugs difíciles de reproducir. El modelo de un solo hilo con asincronía por eventos es más simple y predecible.`,
    codeExample: `// app.js

// === PROBLEMA: sin asincronía ===

// Imagina que estas funciones fueran síncronas y tardaran 2 segundos cada una
// El usuario esperaría 6 segundos sin poder hacer NADA:

// simularBloqueante(2000) // pausa todo 2s
// simularBloqueante(2000) // pausa todo 2s más
// simularBloqueante(2000) // pausa todo 2s más

// === SOLUCIÓN: asincronía real ===

function mostrarMensaje(texto) {
  console.log('[UI] ' + texto)
}

// Simula carga de datos del usuario (como un fetch real)
function cargarPerfil(callback) {
  mostrarMensaje('Cargando perfil...')
  setTimeout(() => {
    const perfil = { nombre: 'Ana García', nivel: 'Intermedio', puntos: 1250 }
    callback(perfil)
  }, 1500) // simula 1.5 segundos de espera
}

// Simula carga del historial de cursos
function cargarHistorial(callback) {
  mostrarMensaje('Cargando historial...')
  setTimeout(() => {
    const historial = ['Python básico', 'JavaScript fundamentos']
    callback(historial)
  }, 1000)
}

// Iniciar carga — la UI no se congela
cargarPerfil((perfil) => {
  mostrarMensaje('Perfil listo: ' + perfil.nombre)
})

cargarHistorial((cursos) => {
  mostrarMensaje('Cursos completados: ' + cursos.length)
})

// Esto se ejecuta INMEDIATAMENTE, sin esperar las cargas
mostrarMensaje('La página sigue funcionando mientras cargamos datos')`,
    keyPoints: [
      'JavaScript es single-threaded: solo puede hacer una cosa a la vez.',
      'Las operaciones lentas (red, timers, archivos) se delegan al navegador o sistema operativo.',
      'Sin asincronía, la página quedaría congelada esperando cada operación.',
      'La asincronía permite que la UI siga siendo responsiva mientras ocurren tareas en segundo plano.',
      'Los resultados de operaciones asíncronas llegan como callbacks, promesas o eventos.',
      'Este modelo de un solo hilo fue una decisión de diseño para simplificar el desarrollo web.',
    ],
    exercise: {
      description:
        'Crea una función `simularBusqueda(termino, callback)` que simule una búsqueda en un servidor. Debe esperar 2 segundos (setTimeout) y luego llamar al callback con un array de resultados inventados que incluyan el término de búsqueda. Luego úsala para buscar "javascript" y "python" casi simultáneamente y observa que ambos resultados llegan sin bloquear nada.',
      hint: 'Dentro de simularBusqueda, usa setTimeout de 2000ms. El callback debe recibir un array como [{id:1, titulo:"Curso de "+termino}, {id:2, titulo:termino+" desde cero"}]. Llama a la función dos veces seguidas y observa que ambas respuestas llegan después de ~2 segundos (no 4 segundos).',
    },
    quiz: [
      {
        question: '¿Por qué JavaScript fue diseñado con un único hilo de ejecución?',
        options: [
          'Para que sea más rápido que otros lenguajes',
          'Para simplificar el manejo del DOM y evitar condiciones de carrera entre hilos',
          'Porque el hardware de los computadores no soporta múltiples hilos',
          'Para ahorrar memoria en el navegador',
        ],
        correctAnswer: 'Para simplificar el manejo del DOM y evitar condiciones de carrera entre hilos',
        correctFeedback: 'Correcto. Con múltiples hilos modificando el DOM al mismo tiempo, los bugs serían mucho más difíciles de reproducir y corregir.',
        incorrectFeedback: 'No es por limitaciones de hardware. La decisión fue de diseño: un solo hilo en el navegador hace el modelo más predecible y evita problemas de concurrencia al manipular el DOM.',
      },
      {
        question: '¿Cuál de estas operaciones requiere asincronía en el navegador?',
        options: [
          'Sumar dos números',
          'Filtrar un array de 100 elementos',
          'Solicitar datos desde una API REST',
          'Concatenar dos strings',
        ],
        correctAnswer: 'Solicitar datos desde una API REST',
        correctFeedback: 'Correcto. Una solicitud de red toma tiempo impredecible (puede ser 100ms o 5 segundos) y no debe bloquear el hilo principal.',
        incorrectFeedback: 'Las operaciones matemáticas y de arrays son instantáneas. Las solicitudes de red toman tiempo variable y se manejan de forma asíncrona.',
      },
      {
        question: '¿Qué ocurre en el hilo principal de JavaScript mientras se espera una respuesta de red?',
        options: [
          'Se pausa hasta que llega la respuesta',
          'Crea un nuevo hilo para esperar',
          'Sigue ejecutando código síncrono normalmente',
          'Se congela el navegador',
        ],
        correctAnswer: 'Sigue ejecutando código síncrono normalmente',
        correctFeedback: 'Correcto. JavaScript delega la espera de red al navegador y sigue ejecutando código. Solo cuando llega la respuesta, el callback o la promesa se resuelve.',
        incorrectFeedback: 'JavaScript no se pausa ni crea hilos nuevos. Delega la operación de red al navegador y continúa con el código síncrono. El resultado llega como un evento cuando está listo.',
      },
      {
        question: '¿Cuál de estos es un ejemplo real de operación asíncrona en el navegador?',
        options: [
          'const suma = 2 + 2',
          'document.querySelector(".boton")',
          'fetch("https://api.ejemplo.com/datos")',
          'JSON.parse(\'{"x": 1}\')',
        ],
        correctAnswer: 'fetch("https://api.ejemplo.com/datos")',
        correctFeedback: 'Exacto. fetch hace una solicitud de red que puede tardar tiempo variable, por eso es asíncrono y retorna una Promise.',
        incorrectFeedback: 'querySelector y JSON.parse son síncronos e instantáneos. fetch inicia una solicitud de red que puede tardar milisegundos o segundos — es asíncrono.',
      },
      {
        question: '¿Qué ventaja ofrece la asincronía para la experiencia del usuario?',
        options: [
          'El código se ejecuta más rápido en total',
          'La página permanece interactiva mientras se cargan datos en segundo plano',
          'Los datos llegan más rápido desde el servidor',
          'Se eliminan todos los errores de red',
        ],
        correctAnswer: 'La página permanece interactiva mientras se cargan datos en segundo plano',
        correctFeedback: 'Exacto. La asincronía permite que el usuario siga navegando e interactuando mientras los datos se cargan, en lugar de ver una página congelada.',
        incorrectFeedback: 'La asincronía no hace los datos llegar más rápido ni elimina errores. Su beneficio principal es que el usuario puede seguir usando la página mientras ocurren operaciones lentas.',
      },
    ],
  },

  {
    slug: 'settimeout-javascript',
    title: 'setTimeout()',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 158,
    description:
      'Aprende a ejecutar código después de cierto tiempo usando setTimeout().',
    explanation: `## setTimeout()

\`setTimeout()\` es la función asíncrona más básica en JavaScript. Ejecuta una función después de un tiempo determinado.

### Sintaxis

\`\`\`js
setTimeout(callback, milisegundos)
\`\`\`

- **callback**: la función que se ejecutará después del tiempo
- **milisegundos**: cuánto tiempo esperar (1000 ms = 1 segundo)

### Ejemplos básicos

\`\`\`js
// Espera 2 segundos y muestra un mensaje
setTimeout(() => {
  console.log('¡Han pasado 2 segundos!')
}, 2000)

// Con función nombrada
function mostrarBienvenida() {
  console.log('¡Bienvenido a RonaldoScript!')
}
setTimeout(mostrarBienvenida, 3000)
\`\`\`

### El valor de retorno: timerID

\`setTimeout()\` devuelve un número entero llamado **timer ID**. Puedes usarlo para cancelar el temporizador antes de que se ejecute.

\`\`\`js
const timerId = setTimeout(() => {
  console.log('Esto nunca se ejecutará')
}, 5000)

// Cancelar el temporizador
clearTimeout(timerId)
console.log('Timer cancelado')
\`\`\`

### Pasar argumentos a la función

Puedes pasar argumentos adicionales a \`setTimeout()\` después del delay:

\`\`\`js
function saludar(nombre, ciudad) {
  console.log('Hola ' + nombre + ' desde ' + ciudad + '!')
}

setTimeout(saludar, 1000, 'Ana', 'Madrid')
// Después de 1 segundo: "Hola Ana desde Madrid!"
\`\`\`

### El truco del delay 0

Incluso con delay 0, el callback siempre es asíncrono:

\`\`\`js
console.log('1')
setTimeout(() => console.log('2'), 0)
console.log('3')
// Imprime: 1, 3, 2
\`\`\`

### Casos de uso comunes

- Mostrar un mensaje de éxito y ocultarlo después de unos segundos
- Retrasar la apertura de un popup para no ser intrusivo
- Simular tiempos de espera en pruebas y ejemplos
- Debouncing (esperar a que el usuario termine de escribir)`,
    codeExample: `// app.js

// 1. Notificación temporal
function mostrarNotificacion(mensaje) {
  const notif = document.createElement('div')
  notif.textContent = mensaje
  notif.style.cssText = 'background:#22c55e; color:white; padding:10px; border-radius:8px;'
  document.body.appendChild(notif)

  // Ocultar automáticamente después de 3 segundos
  setTimeout(() => {
    notif.remove()
  }, 3000)
}

mostrarNotificacion('¡Guardado correctamente!')

// 2. Cancelar un timer antes de que se ejecute
let timerBienvenida = setTimeout(() => {
  console.log('Bienvenida tardía')
}, 5000)

// Si el usuario hace algo antes de 5 segundos, cancelamos la bienvenida
document.addEventListener('click', () => {
  clearTimeout(timerBienvenida)
  console.log('Timer cancelado por click del usuario')
})

// 3. Simulación de carga de datos (patrón muy usado)
function obtenerDatos(callback) {
  console.log('Cargando datos...')
  setTimeout(() => {
    const datos = {
      usuarios: 42,
      cursos: 3,
      ultimaConexion: '2024-01-15',
    }
    callback(datos)
  }, 1500) // simula 1.5s de respuesta del servidor
}

obtenerDatos((datos) => {
  console.log('Usuarios activos:', datos.usuarios)
  console.log('Cursos:', datos.cursos)
})

console.log('La app sigue funcionando mientras se cargan los datos')`,
    keyPoints: [
      'setTimeout(fn, ms) ejecuta fn después de ms milisegundos.',
      'Devuelve un ID de timer que puedes usar para cancelarlo con clearTimeout(id).',
      'setTimeout siempre es asíncrono — incluso con delay 0, el callback va a la cola de tareas.',
      'El delay no es un tiempo exacto garantizado, sino el tiempo mínimo antes de ejecutarse.',
      'Puedes pasar argumentos adicionales a setTimeout: setTimeout(fn, ms, arg1, arg2).',
      'Es la forma más simple de crear comportamiento retardado o animaciones simples.',
    ],
    exercise: {
      description:
        'Crea una función `mostrarCuenta(inicio)` que cuente hacia atrás desde el número dado hasta 0, mostrando cada número con un setTimeout de 1 segundo de diferencia. Cuando llegue a 0, muestra "¡Tiempo!". Implementa también una función `cancelarCuenta()` que detenga la cuenta si se llama antes de que termine.',
      hint: 'Para una cuenta atrás, puedes usar setTimeout múltiples veces: setTimeout(() => console.log(3), 1000), setTimeout(() => console.log(2), 2000), etc. O de forma dinámica con un bucle calculando i * 1000. Para cancelar, guarda todos los IDs en un array y usa clearTimeout en cada uno.',
    },
    quiz: [
      {
        question: '¿Qué hace `clearTimeout(id)`?',
        options: [
          'Pausa el timer temporalmente',
          'Cancela el timer antes de que se ejecute',
          'Reinicia el timer desde cero',
          'Hace que el timer se ejecute inmediatamente',
        ],
        correctAnswer: 'Cancela el timer antes de que se ejecute',
        correctFeedback: 'Correcto. clearTimeout(id) cancela definitivamente el timer. Si ya se ejecutó, no hace nada.',
        incorrectFeedback: 'clearTimeout no pausa ni reinicia. Cancela definitivamente el timer. Si ya se ejecutó, no tiene efecto.',
      },
      {
        question: '¿Qué imprime este código?\n\nlet id = setTimeout(() => console.log("Hola"), 1000)\nclearTimeout(id)\nconsole.log("Fin")',
        options: [
          '"Fin" y luego "Hola"',
          'Solo "Hola"',
          'Solo "Fin"',
          '"Hola" y luego "Fin"',
        ],
        correctAnswer: 'Solo "Fin"',
        correctFeedback: 'Correcto. El timer fue cancelado con clearTimeout antes de ejecutarse, así que "Hola" nunca se imprime.',
        incorrectFeedback: 'clearTimeout(id) cancela el timer inmediatamente. El callback nunca se ejecuta. Solo se imprime "Fin".',
      },
      {
        question: '¿Cuántos milisegundos equivalen a 2.5 segundos?',
        options: ['250', '25', '2500', '25000'],
        correctAnswer: '2500',
        correctFeedback: 'Correcto. 1 segundo = 1000ms, así que 2.5 segundos = 2500ms.',
        incorrectFeedback: '1 segundo = 1000 milisegundos. 2.5 segundos × 1000 = 2500ms.',
      },
      {
        question: '¿Qué devuelve setTimeout()?',
        options: [
          'La función que se ejecutará',
          'undefined',
          'Un número entero que identifica el timer',
          'El resultado de ejecutar el callback',
        ],
        correctAnswer: 'Un número entero que identifica el timer',
        correctFeedback: 'Correcto. setTimeout devuelve un ID numérico del timer. Este ID se usa con clearTimeout() para cancelarlo si es necesario.',
        incorrectFeedback: 'setTimeout devuelve un timer ID (número entero), no el callback ni su resultado. Este ID sirve para cancelar el timer con clearTimeout(id).',
      },
      {
        question: '¿Qué pasa con el código que está DESPUÉS de un setTimeout?',
        options: [
          'Se pausa hasta que el setTimeout termine',
          'Se ejecuta inmediatamente, sin esperar el setTimeout',
          'Se ejecuta en paralelo con el callback del setTimeout',
          'Se ignora hasta que el setTimeout se complete',
        ],
        correctAnswer: 'Se ejecuta inmediatamente, sin esperar el setTimeout',
        correctFeedback: 'Exacto. setTimeout no bloquea. El código que le sigue se ejecuta de inmediato, y el callback del timer se ejecuta después cuando el tiempo expira.',
        incorrectFeedback: 'setTimeout no bloquea el hilo. El código siguiente se ejecuta inmediatamente. El callback del timer se agrega a la cola de tareas y se ejecuta cuando el tiempo pasa.',
      },
    ],
  },

  {
    slug: 'setinterval-javascript',
    title: 'setInterval()',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 159,
    description:
      'Aprende a ejecutar código repetidamente usando setInterval() y cómo detenerlo correctamente.',
    explanation: `## setInterval()

\`setInterval()\` ejecuta una función repetidamente cada X milisegundos. Es como un \`setTimeout\` que se reinicia solo.

### Sintaxis

\`\`\`js
const intervalo = setInterval(callback, milisegundos)
\`\`\`

### Ejemplo básico

\`\`\`js
let contador = 0

const intervalo = setInterval(() => {
  contador++
  console.log('Tick:', contador)
}, 1000) // cada 1 segundo

// Después de 5 segundos, detenerlo
setTimeout(() => {
  clearInterval(intervalo)
  console.log('Intervalo detenido')
}, 5000)
\`\`\`

### Siempre debes limpiar el intervalo

El error más común es olvidar llamar a \`clearInterval()\`. Un intervalo que nunca se detiene causa **memory leaks** y comportamiento inesperado.

\`\`\`js
// ❌ MALO: intervalo eterno
setInterval(() => {
  console.log('Esto corre para siempre...')
}, 1000)

// ✅ BUENO: guarda el ID y límpialo cuando termines
const id = setInterval(actualizarReloj, 1000)

// Cuando el componente se cierra o ya no necesitas el intervalo:
clearInterval(id)
\`\`\`

### setInterval vs setTimeout recursivo

Ambos patrones logran repetición, pero con diferencias importantes:

\`\`\`js
// Con setInterval (tiempo fijo entre inicios de ejecución)
setInterval(tarea, 1000)

// Con setTimeout recursivo (tiempo fijo después de que termina cada ejecución)
function repetir() {
  tarea()
  setTimeout(repetir, 1000)
}
repetir()
\`\`\`

Para tareas simples, \`setInterval\` es más claro. Para tareas que pueden tardar tiempo variable, el timeout recursivo es más seguro.

### Casos de uso comunes

- Reloj en tiempo real
- Actualización periódica de datos (polling)
- Animaciones simples
- Contador regresivo`,
    codeExample: `// app.js

// Reloj digital en tiempo real
function iniciarReloj() {
  function actualizarHora() {
    const ahora = new Date()
    const horas = String(ahora.getHours()).padStart(2, '0')
    const minutos = String(ahora.getMinutes()).padStart(2, '0')
    const segundos = String(ahora.getSeconds()).padStart(2, '0')
    const hora = horas + ':' + minutos + ':' + segundos
    console.log('Hora actual:', hora)
    // En una página real: document.getElementById('reloj').textContent = hora
  }

  actualizarHora() // ejecutar inmediatamente
  return setInterval(actualizarHora, 1000) // luego cada segundo
}

const relojId = iniciarReloj()

// Detener el reloj después de 10 segundos (para la demo)
setTimeout(() => {
  clearInterval(relojId)
  console.log('Reloj detenido')
}, 10000)

// Cuenta regresiva
function cuentaRegresiva(segundos, alTerminar) {
  let restantes = segundos

  const id = setInterval(() => {
    console.log('Tiempo restante:', restantes + 's')
    restantes--

    if (restantes < 0) {
      clearInterval(id)
      alTerminar()
    }
  }, 1000)

  return id // permite cancelar desde fuera
}

cuentaRegresiva(5, () => {
  console.log('¡Tiempo agotado!')
})`,
    keyPoints: [
      'setInterval(fn, ms) ejecuta fn cada ms milisegundos indefinidamente.',
      'Siempre guarda el ID devuelto por setInterval para poder detenerlo con clearInterval(id).',
      'No limpiar un intervalo causa memory leaks y comportamiento inesperado.',
      'setInterval ejecuta el callback en intervalos fijos desde el inicio, sin importar cuánto tarda el callback.',
      'Para mayor control, el patrón setTimeout recursivo asegura que la siguiente ejecución espere a que termine la actual.',
      'El intervalo se puede detener desde dentro del callback o desde fuera usando el ID guardado.',
    ],
    exercise: {
      description:
        'Crea un sistema de "polling" simple que simule consultar un servidor cada 3 segundos para verificar si hay nuevas notificaciones. La función `consultarNotificaciones()` debe usar Math.random() para simular si hay notificaciones (50% de probabilidad) e imprimirlas. Después de 5 consultas, el polling debe detenerse automáticamente.',
      hint: 'Usa setInterval con 3000ms. Dentro del callback, lleva un contador de consultas. Cuando llegue a 5, llama clearInterval(id). Para simular notificaciones: if (Math.random() > 0.5) { console.log("Nueva notificación") } else { console.log("Sin novedades") }.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre setTimeout y setInterval?',
        options: [
          'setTimeout es más rápido que setInterval',
          'setTimeout ejecuta el callback una vez; setInterval lo ejecuta repetidamente',
          'setInterval solo funciona en Node.js',
          'setTimeout no puede ser cancelado; setInterval sí',
        ],
        correctAnswer: 'setTimeout ejecuta el callback una vez; setInterval lo ejecuta repetidamente',
        correctFeedback: 'Exacto. setTimeout ejecuta el callback una sola vez después del delay. setInterval lo ejecuta indefinidamente cada X milisegundos hasta que se cancele.',
        incorrectFeedback: 'La diferencia es sobre cuántas veces se ejecuta: setTimeout ejecuta una vez, setInterval ejecuta repetidamente. Ambos pueden cancelarse con clearTimeout/clearInterval.',
      },
      {
        question: '¿Qué problema causa no guardar el ID de setInterval?',
        options: [
          'El intervalo no se ejecuta',
          'No puedes detenerlo con clearInterval, causando un bucle eterno',
          'JavaScript lanza un error',
          'El intervalo se detiene solo después de 60 segundos',
        ],
        correctAnswer: 'No puedes detenerlo con clearInterval, causando un bucle eterno',
        correctFeedback: 'Correcto. Sin el ID, no puedes llamar clearInterval(id), y el intervalo corre para siempre — consumiendo recursos y potencialmente causando problemas.',
        incorrectFeedback: 'El intervalo sí se ejecuta, pero sin su ID no puedes detenerlo. Esto es un memory leak: el intervalo corre indefinidamente aunque ya no lo necesites.',
      },
      {
        question: '¿Qué función se usa para detener un setInterval?',
        options: ['clearTimeout()', 'stopInterval()', 'clearInterval()', 'cancelInterval()'],
        correctAnswer: 'clearInterval()',
        correctFeedback: 'Correcto. clearInterval(id) detiene el intervalo identificado por id. Es el complemento de setInterval.',
        incorrectFeedback: 'clearTimeout es para setTimeout. La función correcta para detener un setInterval es clearInterval(id).',
      },
      {
        question: '¿Qué imprime este código?\n\nlet n = 0\nconst id = setInterval(() => {\n  n++\n  console.log(n)\n  if (n >= 3) clearInterval(id)\n}, 500)',
        options: [
          'Imprime 1, 2, 3 y se detiene',
          'Imprime 0, 1, 2 y se detiene',
          'Imprime 1, 2, 3, 4, 5... indefinidamente',
          'Solo imprime 3',
        ],
        correctAnswer: 'Imprime 1, 2, 3 y se detiene',
        correctFeedback: 'Correcto. El intervalo incrementa n cada 500ms. Cuando n llega a 3, clearInterval detiene el intervalo. Imprime 1, 2, 3.',
        incorrectFeedback: 'n empieza en 0. Primer tick: n=1, imprime 1. Segundo: n=2, imprime 2. Tercero: n=3, imprime 3 y clearInterval detiene el intervalo.',
      },
      {
        question: '¿Cuándo es más adecuado usar setTimeout recursivo en lugar de setInterval?',
        options: [
          'Siempre — setTimeout recursivo es mejor en todos los casos',
          'Cuando el callback puede tardar tiempo variable y no quieres que las ejecuciones se superpongan',
          'Solo cuando necesitas exactamente 3 repeticiones',
          'Cuando el delay es menor a 100ms',
        ],
        correctAnswer: 'Cuando el callback puede tardar tiempo variable y no quieres que las ejecuciones se superpongan',
        correctFeedback: 'Correcto. Si el callback tarda 800ms y el intervalo es 1000ms, setInterval puede acumular ejecuciones. setTimeout recursivo espera a que termine cada ejecución antes de programar la siguiente.',
        incorrectFeedback: 'setInterval puede causar solapamientos si el callback tarda más que el intervalo. setTimeout recursivo garantiza que la siguiente ejecución solo empiece después de que la anterior termine.',
      },
    ],
  },

  {
    slug: 'callbacks-asincronos',
    title: 'Callbacks asíncronos',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 160,
    description:
      'Aprende cómo los callbacks pueden ejecutarse después de que termina una tarea asíncrona.',
    explanation: `## Callbacks asíncronos

Un **callback** es una función que se pasa como argumento a otra función para ser llamada más tarde. Cuando se usa con operaciones asíncronas, el callback se ejecuta **cuando la operación termina**.

### ¿Qué es un callback?

\`\`\`js
function saludar(nombre, alTerminar) {
  console.log('Hola, ' + nombre + '!')
  alTerminar() // llama al callback
}

saludar('Ana', () => {
  console.log('Saludo completado')
})
\`\`\`

### Callbacks asíncronos

En el contexto asíncrono, el callback se ejecuta después de que una tarea termine:

\`\`\`js
// El callback se ejecuta cuando el servidor responde
fetch('/api/datos')
  .then(respuesta => respuesta.json()) // este .then recibe un callback

// setTimeout: el callback se ejecuta cuando pasa el tiempo
setTimeout(() => {
  console.log('Listo después de 1 segundo')
}, 1000)
\`\`\`

### El patrón Error-First Callback

En Node.js y código antiguo, es común el patrón "error primero":

\`\`\`js
function cargarDatos(url, callback) {
  setTimeout(() => {
    if (!url) {
      callback(new Error('URL requerida'), null)
      return
    }
    const datos = { id: 1, nombre: 'Ana' }
    callback(null, datos) // null = sin error
  }, 1000)
}

cargarDatos('/api/usuario', (error, datos) => {
  if (error) {
    console.error('Error:', error.message)
    return
  }
  console.log('Datos:', datos.nombre)
})
\`\`\`

### El Callback Hell (Pirámide de la Perdición)

El mayor problema de los callbacks es que anidar muchos crea código difícil de leer:

\`\`\`js
// ❌ Callback hell — difícil de leer y mantener
login(usuario, contrasena, (err, sesion) => {
  if (err) return handleError(err)
  cargarPerfil(sesion.userId, (err, perfil) => {
    if (err) return handleError(err)
    cargarCursos(perfil.id, (err, cursos) => {
      if (err) return handleError(err)
      mostrarDashboard(perfil, cursos)
    })
  })
})
\`\`\`

Este problema fue la motivación para crear las **Promesas** y **async/await**, que veremos en los siguientes módulos.`,
    codeExample: `// app.js

// Patrón de callback asíncrono limpio
function simularFetch(url, callback) {
  console.log('Consultando:', url)
  setTimeout(() => {
    // Simulamos éxito o error según la URL
    if (url.includes('error')) {
      callback(new Error('Error 404: Recurso no encontrado'), null)
    } else {
      const datos = { url, respuesta: 'Datos simulados', timestamp: Date.now() }
      callback(null, datos)
    }
  }, 800)
}

// Uso correcto del callback
simularFetch('/api/usuarios', (error, datos) => {
  if (error) {
    console.log('Falló la carga:', error.message)
    return // importante: salir si hay error
  }
  console.log('Usuarios cargados:', datos.respuesta)
})

simularFetch('/api/error/404', (error, datos) => {
  if (error) {
    console.log('Error manejado:', error.message)
    return
  }
  console.log(datos) // nunca llega aquí
})

// Callbacks en paralelo: ambas solicitudes inician al mismo tiempo
let perfilCargado = false
let cursosCargados = false

function verificarCargaCompleta() {
  if (perfilCargado && cursosCargados) {
    console.log('Todo cargado, mostrando dashboard')
  }
}

simularFetch('/api/perfil', (err, datos) => {
  if (!err) { perfilCargado = true; verificarCargaCompleta() }
})

simularFetch('/api/cursos', (err, datos) => {
  if (!err) { cursosCargados = true; verificarCargaCompleta() }
})`,
    keyPoints: [
      'Un callback es una función pasada como argumento para ser llamada más tarde.',
      'Los callbacks asíncronos se ejecutan cuando una operación (timer, red, evento) termina.',
      'El patrón "error-first callback" pasa el error como primer argumento: callback(error, datos).',
      'Siempre verifica si hay error antes de usar los datos en el callback.',
      'El Callback Hell ocurre cuando anidas demasiados callbacks — código en forma de pirámide.',
      'Las Promesas y async/await fueron creadas para resolver el problema del Callback Hell.',
    ],
    exercise: {
      description:
        'Crea un sistema de carga por etapas usando callbacks. Implementa tres funciones asíncronas: `autenticar(usuario, cb)`, `cargarPerfil(userId, cb)`, y `cargarConfiguracion(perfilId, cb)`. Cada una debe usar setTimeout de 500ms para simular trabajo. Encadénalas usando callbacks (aunque quede algo anidado) para mostrar finalmente el resultado completo del usuario.',
      hint: 'La primera función llama al callback con el userId. La segunda recibe userId y llama al callback con el perfil. La tercera recibe perfilId y llama al callback con la configuración. Al anidarlas, notarás el callback hell que las promesas resuelven.',
    },
    quiz: [
      {
        question: '¿Qué es un callback en JavaScript?',
        options: [
          'Una variable especial para guardar errores',
          'Una función pasada como argumento a otra función para ser ejecutada después',
          'Un método especial de las promesas',
          'Una forma de llamar funciones de forma sincrónica',
        ],
        correctAnswer: 'Una función pasada como argumento a otra función para ser ejecutada después',
        correctFeedback: 'Correcto. Un callback es simplemente una función que se pasa como parámetro y se ejecuta cuando algo sucede — inmediatamente o después de una operación asíncrona.',
        incorrectFeedback: 'Un callback no es una variable ni un método especial. Es una función que pasas como argumento para que sea llamada más adelante, cuando la operación termine.',
      },
      {
        question: 'En el patrón error-first callback, ¿qué representa el primer argumento?',
        options: [
          'El resultado exitoso de la operación',
          'El nombre de la función que falló',
          'El error (o null si no hubo error)',
          'El tiempo que tardó la operación',
        ],
        correctAnswer: 'El error (o null si no hubo error)',
        correctFeedback: 'Correcto. En error-first callbacks, el primer parámetro es el error (un objeto Error o null). Si es null, significa que todo salió bien.',
        incorrectFeedback: 'En el patrón error-first, el primer argumento es siempre el error. Si fue null, no hubo error. Los datos exitosos van en el segundo argumento.',
      },
      {
        question: '¿Qué es el "Callback Hell"?',
        options: [
          'Un error específico de JavaScript',
          'Cuando los callbacks se anidan excesivamente, creando código difícil de leer',
          'Un tipo especial de error asíncrono',
          'Cuando setTimeout se llama demasiadas veces',
        ],
        correctAnswer: 'Cuando los callbacks se anidan excesivamente, creando código difícil de leer',
        correctFeedback: 'Exacto. El Callback Hell es el patrón de anidar callbacks dentro de callbacks creando una "pirámide" de código muy difícil de mantener.',
        incorrectFeedback: 'El Callback Hell no es un error específico — es un patrón de código problemático donde los callbacks se anidan tanto que el código se vuelve difícil de leer y mantener.',
      },
      {
        question: '¿Qué soluciona el uso de Promesas y async/await respecto a los callbacks?',
        options: [
          'Hace que el código sea más rápido',
          'Elimina la necesidad de funciones asíncronas',
          'Permite escribir código asíncrono más legible, evitando el callback hell',
          'Permite usar múltiples hilos',
        ],
        correctAnswer: 'Permite escribir código asíncrono más legible, evitando el callback hell',
        correctFeedback: 'Correcto. Promesas y async/await fueron diseñadas para reemplazar el patrón de callbacks anidados con código más lineal y legible.',
        incorrectFeedback: 'Promesas y async/await no hacen el código más rápido ni usan múltiples hilos. Resuelven el problema de legibilidad del callback hell, permitiendo escribir código asíncrono de forma más lineal.',
      },
      {
        question: '¿Qué debería hacer siempre en el callback después de verificar el error?',
        options: [
          'Continuar el código aunque haya error',
          'Ignorar el error si es pequeño',
          'Retornar o salir del callback para no ejecutar el código de éxito',
          'Llamar al callback de nuevo',
        ],
        correctAnswer: 'Retornar o salir del callback para no ejecutar el código de éxito',
        correctFeedback: 'Correcto. Si hay error, debes usar return después de manejarlo para evitar que el código de éxito se ejecute con datos potencialmente nulos o inválidos.',
        incorrectFeedback: 'Si detectas un error, debes hacer return para salir del callback. Si no lo haces, el código de éxito seguirá ejecutándose con datos nulos o incorrectos, causando más errores.',
      },
    ],
  },

  {
    slug: 'event-loop-explicado-simple',
    title: 'El event loop explicado simple',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 161,
    description:
      'Aprende de forma simple cómo JavaScript coordina tareas síncronas, callbacks y eventos.',
    explanation: `## El Event Loop explicado simple

El **event loop** es el mecanismo que permite a JavaScript manejar tareas asíncronas aunque tenga un solo hilo. No tienes que dominar todos sus detalles, pero entender el modelo básico te ayudará a predecir el comportamiento del código.

### Las tres piezas del puzzle

**1. Call Stack (Pila de llamadas)**
Donde se ejecutan las funciones síncronas. Cuando llamas a una función, se agrega a la pila. Cuando termina, se saca.

\`\`\`js
function a() { b() }
function b() { c() }
function c() { console.log('c') }
a()
// Pila: a → b → c → (imprime 'c') → c sale → b sale → a sale
\`\`\`

**2. Task Queue (Cola de tareas)**
Donde esperan los callbacks asíncronos (setTimeout, eventos del usuario, etc.) hasta que el call stack esté vacío.

**3. Event Loop**
El event loop mira constantemente si el call stack está vacío. Si lo está, toma la primera tarea de la cola y la mueve al call stack.

### Visualización del flujo

\`\`\`js
console.log('A')          // Stack: [A]  → imprime A
setTimeout(() => {         // Browser API: timer programado
  console.log('B')
}, 0)
console.log('C')          // Stack: [C]  → imprime C
// Stack vacío → Event loop mueve B de la cola → imprime B
\`\`\`

Salida: A, C, B

### ¿Por qué setTimeout(fn, 0) no es inmediato?

Aunque el delay sea 0, el callback pasa por la Task Queue. Solo se ejecuta cuando el call stack esté completamente vacío.

### Web APIs del navegador

El navegador tiene APIs para manejar operaciones asíncronas fuera del hilo de JavaScript:
- Timer API → gestiona setTimeout/setInterval
- Fetch API → gestiona solicitudes de red
- DOM Events → gestiona eventos del usuario

Cuando una de estas completa su tarea, pone el callback en la Task Queue.

### El modelo simplificado

\`\`\`
Código síncrono → Call Stack
Callbacks asíncronos → esperan en Task Queue
Event Loop → mueve callbacks al Stack cuando está vacío
\`\`\``,
    codeExample: `// script.js

// Observando el event loop en acción

console.log('=== Inicio del script ===')

// 1. Código síncrono: va directo al Call Stack
function calcular(n) {
  return n * n
}
let resultado = calcular(5)
console.log('Resultado síncrono:', resultado) // 25

// 2. setTimeout: el callback va a la Task Queue
setTimeout(() => {
  console.log('setTimeout 1000ms: ejecutado')
}, 1000)

setTimeout(() => {
  console.log('setTimeout 0ms: ejecutado (aunque delay sea 0)')
}, 0)

// 3. Evento simulado: también asíncrono
document.addEventListener('click', () => {
  console.log('Click del usuario: procesado')
})

// 4. Más código síncrono: se ejecuta antes que los callbacks
function procesarDatos(arr) {
  return arr.map(x => x * 2)
}
let datos = procesarDatos([1, 2, 3, 4, 5])
console.log('Datos procesados:', datos) // [2,4,6,8,10]

console.log('=== Fin del código síncrono ===')

// ORDEN DE SALIDA:
// "=== Inicio del script ==="
// "Resultado síncrono: 25"
// "Datos procesados: [2, 4, 6, 8, 10]"
// "=== Fin del código síncrono ==="
// "setTimeout 0ms: ejecutado" (después de que el stack esté vacío)
// "setTimeout 1000ms: ejecutado" (después de 1 segundo)`,
    keyPoints: [
      'El Call Stack es donde se ejecutan las funciones síncronas, una a la vez.',
      'La Task Queue es donde esperan los callbacks asíncronos hasta que el Stack esté vacío.',
      'El Event Loop revisa constantemente si el Stack está vacío para mover tareas de la Queue.',
      'El código síncrono SIEMPRE se ejecuta antes que los callbacks asíncronos, aunque tengan delay 0.',
      'Las Web APIs del navegador manejan timers, red y eventos fuera del hilo de JavaScript.',
      'No necesitas memorizar todos los detalles — lo importante es entender que síncrono va antes que asíncrono.',
    ],
    exercise: {
      description:
        'Sin ejecutar el código, predice el orden exacto de los console.log:\n\n```js\nconsole.log("1")\nsetTimeout(() => console.log("2"), 500)\nconsole.log("3")\nsetTimeout(() => console.log("4"), 0)\nfunction foo() {\n  console.log("5")\n  setTimeout(() => console.log("6"), 0)\n  console.log("7")\n}\nfoo()\nconsole.log("8")\n```\n\nDespués ejecútalo y verifica si tu predicción fue correcta.',
      hint: 'Recuerda: todo el código síncrono (console.log directos y dentro de foo) se ejecuta primero. Los setTimeout van a la cola. Los de delay 0 van primero que los de delay 500.',
    },
    quiz: [
      {
        question: '¿Qué es el Event Loop en JavaScript?',
        options: [
          'Un bucle for especial para operaciones asíncronas',
          'El mecanismo que mueve callbacks de la Task Queue al Call Stack cuando este está vacío',
          'Una API del navegador para manejar eventos del usuario',
          'Un método de Array para iterar elementos',
        ],
        correctAnswer: 'El mecanismo que mueve callbacks de la Task Queue al Call Stack cuando este está vacío',
        correctFeedback: 'Exacto. El Event Loop coordina el código síncrono (Call Stack) con los callbacks asíncronos (Task Queue), moviéndolos al Stack solo cuando está vacío.',
        incorrectFeedback: 'El Event Loop no es un bucle for ni una API. Es el mecanismo interno de JavaScript que coordina la ejecución entre el código síncrono (Call Stack) y las tareas asíncronas pendientes (Task Queue).',
      },
      {
        question: '¿Cuándo se mueve un callback de la Task Queue al Call Stack?',
        options: [
          'Inmediatamente cuando termina la operación asíncrona',
          'Cuando el timer expira, sin importar qué está ejecutando el Stack',
          'Cuando el Call Stack está completamente vacío',
          'En el siguiente segundo exacto',
        ],
        correctAnswer: 'Cuando el Call Stack está completamente vacío',
        correctFeedback: 'Correcto. El Event Loop solo mueve callbacks al Stack cuando este está completamente vacío. Por eso setTimeout(fn, 0) no es inmediato si hay código síncrono ejecutándose.',
        incorrectFeedback: 'Los callbacks esperan en la Queue. Solo se mueven al Stack cuando el Stack está completamente vacío — aunque el timer haya expirado hace tiempo.',
      },
      {
        question: '¿En qué orden se imprimen: setTimeout(fn, 0) y el código síncrono que viene después?',
        options: [
          'Primero el setTimeout, luego el código síncrono',
          'Al mismo tiempo',
          'Primero el código síncrono, luego el setTimeout',
          'Depende del dispositivo',
        ],
        correctAnswer: 'Primero el código síncrono, luego el setTimeout',
        correctFeedback: 'Correcto. El código síncrono siempre va primero. Aunque setTimeout tenga delay 0, su callback espera en la Queue hasta que todo el código síncrono actual termine.',
        incorrectFeedback: 'El código síncrono siempre tiene prioridad. El callback de setTimeout(fn, 0) se pone en la Queue y solo se ejecuta cuando el Call Stack está vacío.',
      },
      {
        question: '¿Qué hace el navegador con las operaciones de red (fetch) mientras JavaScript ejecuta código síncrono?',
        options: [
          'Pausa el código síncrono para completar el fetch primero',
          'Las maneja en segundo plano a través de Web APIs, fuera del hilo de JavaScript',
          'Crea un nuevo hilo de JavaScript para el fetch',
          'Espera a que el código síncrono termine para iniciar el fetch',
        ],
        correctAnswer: 'Las maneja en segundo plano a través de Web APIs, fuera del hilo de JavaScript',
        correctFeedback: 'Exacto. El navegador tiene Web APIs para manejar operaciones de red fuera del hilo de JavaScript. Cuando la solicitud termina, el callback se pone en la Task Queue.',
        incorrectFeedback: 'El fetch no pausa el código síncrono ni crea nuevos hilos de JavaScript. El navegador lo maneja en segundo plano con sus propias Web APIs. Cuando termina, el callback pasa a la Queue.',
      },
      {
        question: '¿Por qué una función con un bucle muy largo puede hacer que la página no responda a clicks?',
        options: [
          'Porque los eventos del usuario no funcionan durante bucles',
          'Porque el Call Stack está ocupado con el bucle y los callbacks de eventos no pueden entrar',
          'Porque JavaScript pausa los eventos del DOM durante operaciones pesadas',
          'Porque los clicks generan demasiado tráfico de red',
        ],
        correctAnswer: 'Porque el Call Stack está ocupado con el bucle y los callbacks de eventos no pueden entrar',
        correctFeedback: 'Correcto. Si el Call Stack tiene un bucle largo, el Event Loop no puede mover los callbacks de click al Stack. La página parece congelada.',
        incorrectFeedback: 'Los clicks sí generan eventos, pero sus callbacks esperan en la Queue. Si el Call Stack está ocupado con un bucle largo, el Event Loop no puede moverlos, causando la sensación de página congelada.',
      },
    ],
  },

  {
    slug: 'errores-comunes-asincronia',
    title: 'Errores comunes con asincronía',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 162,
    description:
      'Aprende a evitar errores como esperar resultados antes de tiempo o asumir que el código asíncrono se ejecuta inmediatamente.',
    explanation: `## Errores comunes con asincronía

La asincronía es uno de los temas que más confunde a los principiantes. Estos son los errores más frecuentes.

### Error 1: Usar el resultado asíncrono antes de que llegue

\`\`\`js
// ❌ Error clásico
let datos = null

setTimeout(() => {
  datos = { nombre: 'Ana', puntos: 150 }
}, 1000)

console.log(datos.nombre) // ❌ TypeError: Cannot read property 'nombre' of null
// datos es null porque el setTimeout no ha terminado todavía
\`\`\`

**Solución:** usa el resultado DENTRO del callback:
\`\`\`js
// ✅ Correcto
setTimeout(() => {
  const datos = { nombre: 'Ana', puntos: 150 }
  console.log(datos.nombre) // ✅ "Ana" — usamos datos cuando ya están disponibles
}, 1000)
\`\`\`

### Error 2: No limpiar intervalos

\`\`\`js
// ❌ Este intervalo nunca termina
function iniciarActualizacion() {
  setInterval(() => {
    console.log('Actualizando...')
  }, 1000)
}

// ✅ Siempre guarda el ID y límpialoComo
let intervaloId = null
function iniciarActualizacion() {
  intervaloId = setInterval(() => {
    console.log('Actualizando...')
  }, 1000)
}
function detenerActualizacion() {
  clearInterval(intervaloId)
}
\`\`\`

### Error 3: Asumir orden de ejecución asíncrono

\`\`\`js
// ❌ Este código asume que fn1 termina antes que fn2
let resultadoFn1 = null
setTimeout(() => { resultadoFn1 = 'Resultado A' }, 2000)
setTimeout(() => {
  // ❌ resultadoFn1 puede ser null aquí si no consideramos los tiempos
  console.log('Con resultado:', resultadoFn1)
}, 1000) // este timeout es más corto!
\`\`\`

### Error 4: Callback hell por falta de estructura

\`\`\`js
// ❌ Callbacks anidados — difícil de mantener
obtenerUsuario(id, (usuario) => {
  obtenerCursos(usuario.id, (cursos) => {
    obtenerProgreso(cursos[0].id, (progreso) => {
      // más niveles...
    })
  })
})

// ✅ Mejor: usar funciones nombradas y separadas
function manejarProgreso(progreso) { ... }
function manejarCursos(cursos) {
  obtenerProgreso(cursos[0].id, manejarProgreso)
}
function manejarUsuario(usuario) {
  obtenerCursos(usuario.id, manejarCursos)
}
obtenerUsuario(id, manejarUsuario)
\`\`\`

### Error 5: Olvidar manejar errores

\`\`\`js
// ❌ Sin manejo de error
fetch('/api/datos')
  .then(r => r.json())
  .then(datos => mostrar(datos))
  // Si el servidor falla, el error se silencia

// ✅ Con manejo de error
fetch('/api/datos')
  .then(r => r.json())
  .then(datos => mostrar(datos))
  .catch(err => mostrarError('No se pudieron cargar los datos'))
\`\`\``,
    codeExample: `// app.js — Patrones correctos vs incorrectos

// ❌ ERROR 1: usar datos antes de que lleguen
// setTimeout(() => { datos = obtenerDatos() }, 1000)
// console.log(datos) // null — el timeout no terminó

// ✅ CORRECTO: usar datos dentro del callback
function cargarYMostrarDatos() {
  console.log('Iniciando carga...')

  setTimeout(() => {
    const datos = {
      usuario: 'Ana García',
      progreso: 75,
      ultimaLeccion: 'Closures',
    }
    // Los datos solo se usan aquí, donde ya existen
    console.log('Usuario:', datos.usuario)
    console.log('Progreso:', datos.progreso + '%')
    console.log('Última lección:', datos.ultimaLeccion)
  }, 1000)
}

cargarYMostrarDatos()

// ❌ ERROR 2: intervalo sin limpiar
// setInterval(() => actualizarDatos(), 2000) // corre para siempre

// ✅ CORRECTO: intervalo controlado
class ActualizadorDatos {
  constructor() {
    this.intervalo = null
    this.activo = false
  }

  iniciar() {
    if (this.activo) return
    this.activo = true
    this.intervalo = setInterval(() => {
      console.log('Datos actualizados:', new Date().toLocaleTimeString())
    }, 2000)
  }

  detener() {
    clearInterval(this.intervalo)
    this.activo = false
    console.log('Actualización detenida')
  }
}

const actualizador = new ActualizadorDatos()
actualizador.iniciar()
setTimeout(() => actualizador.detener(), 8000) // detener después de 8s`,
    keyPoints: [
      'Nunca uses el resultado de una operación asíncrona fuera de su callback — todavía no existe.',
      'Siempre guarda el ID de setInterval y llama clearInterval cuando ya no lo necesites.',
      'No asumas el orden de ejecución entre múltiples operaciones asíncronas.',
      'Evita el callback hell usando funciones nombradas separadas o promesas.',
      'Siempre maneja errores en operaciones asíncronas — los errores no manejados se silencian.',
      'Las Promesas y async/await resuelven muchos de estos problemas — los veremos en el siguiente módulo.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los 3 errores en este código:\n\n```js\nlet resultado = null\nsetTimeout(() => {\n  resultado = { datos: [1, 2, 3], total: 3 }\n}, 500)\nconsole.log("Total:", resultado.total)\n\nfunction iniciarPoll() {\n  setInterval(() => console.log("Polling..."), 1000)\n}\niniciarPoll() // error 2: sin limpiar\n\nfunction cargarDos(cb1, cb2) {\n  setTimeout(cb1, 2000)\n  setTimeout(cb2, 500)\n  // error 3: cb2 termina antes que cb1 aunque se esperaba cb1 primero\n}\ncargarDos(\n  () => console.log("Primero"),\n  () => console.log("Segundo")\n)\n```',
      hint: 'Error 1: mueve el console.log dentro del setTimeout. Error 2: guarda el ID del setInterval en una variable y llama clearInterval después de N iteraciones. Error 3: si cb1 debe ejecutarse antes, dale menos tiempo que cb2.',
    },
    quiz: [
      {
        question: '¿Qué error ocurre si intentas usar una variable asignada dentro de setTimeout fuera de él?',
        options: [
          'SyntaxError',
          'TypeError o el valor es null/undefined porque la asignación no ha ocurrido aún',
          'RangeError',
          'Ningún error — funciona normalmente',
        ],
        correctAnswer: 'TypeError o el valor es null/undefined porque la asignación no ha ocurrido aún',
        correctFeedback: 'Correcto. Si la variable inicia como null y se asigna dentro del setTimeout, al usarla fuera antes de que el timer expire, todavía es null.',
        incorrectFeedback: 'El setTimeout no ha ejecutado su callback todavía cuando el código externo corre. La variable sigue siendo null o undefined, lo que puede causar TypeError.',
      },
      {
        question: '¿Cuál es el problema de no guardar el ID de setInterval?',
        options: [
          'El intervalo se ejecuta más lentamente',
          'No puedes detenerlo con clearInterval, causando una fuga de memoria',
          'El intervalo se ejecuta solo una vez',
          'No hay problema — el navegador lo limpia automáticamente',
        ],
        correctAnswer: 'No puedes detenerlo con clearInterval, causando una fuga de memoria',
        correctFeedback: 'Correcto. Sin el ID, no puedes llamar clearInterval. El intervalo corre indefinidamente consumiendo memoria y CPU innecesariamente.',
        incorrectFeedback: 'El navegador no limpia intervalos automáticamente. Sin el ID, no puedes detenerlos. Este es un patrón de memory leak: el intervalo sigue corriendo aunque ya no lo necesites.',
      },
      {
        question: '¿Cuál es la mejor solución para el "callback hell"?',
        options: [
          'Usar más setTimeout anidados',
          'Usar variables globales para compartir datos entre callbacks',
          'Usar funciones nombradas separadas, Promesas o async/await',
          'Evitar las operaciones asíncronas',
        ],
        correctAnswer: 'Usar funciones nombradas separadas, Promesas o async/await',
        correctFeedback: 'Correcto. Las Promesas y async/await transforman el código anidado en código más lineal. Las funciones nombradas también ayudan a reducir el anidamiento.',
        incorrectFeedback: 'Las variables globales crean otros problemas. La solución al callback hell es estructurar mejor el código: funciones nombradas, Promesas o async/await.',
      },
      {
        question: '¿Cuándo se ejecuta el callback de setTimeout(fn, 500) en relación al callback de setTimeout(fn, 200)?',
        options: [
          'Al mismo tiempo',
          'El de 500ms siempre se ejecuta después del de 200ms',
          'El orden depende del tamaño de los callbacks',
          'El de 200ms podría ejecutarse después si el sistema está ocupado',
        ],
        correctAnswer: 'El de 500ms siempre se ejecuta después del de 200ms',
        correctFeedback: 'Correcto. Los timeouts se ordenan por su delay. El de 200ms expira primero y su callback pasa a la Queue antes que el de 500ms.',
        incorrectFeedback: 'Los timeouts se miden en milisegundos desde cuando se crean. El de 200ms siempre expirará antes que el de 500ms, así que su callback llega a la Queue primero.',
      },
      {
        question: '¿Por qué es importante siempre manejar errores en callbacks y promesas?',
        options: [
          'JavaScript lanza una excepción si no los manejas',
          'Los errores no manejados pueden silenciarse y causar comportamiento inesperado difícil de depurar',
          'El código no funciona sin manejo de errores',
          'Los navegadores modernos manejan errores automáticamente',
        ],
        correctAnswer: 'Los errores no manejados pueden silenciarse y causar comportamiento inesperado difícil de depurar',
        correctFeedback: 'Correcto. Las promesas sin .catch() silencian los errores. El código parece no hacer nada, sin indicar por qué — muy difícil de depurar.',
        incorrectFeedback: 'Los errores en promesas sin .catch() se silencian — no aparecen en la consola (en algunos entornos) y el código simplemente no hace nada. Son muy difíciles de detectar.',
      },
    ],
  },

  {
    slug: 'proyecto-temporizador-interactivo',
    title: 'Mini proyecto: temporizador interactivo',
    module: 'Introducción a la asincronía',
    moduleNumber: 21,
    order: 163,
    description:
      'Crea un temporizador simple usando setInterval(), eventos del DOM y control de estado básico.',
    explanation: `## Mini proyecto: temporizador interactivo

En esta lección construiremos un temporizador interactivo que combina todo lo aprendido: \`setInterval\`, \`clearInterval\`, manipulación del DOM y manejo de estado básico.

### Lo que construiremos

Un temporizador con:
- Pantalla que muestra el tiempo en formato MM:SS
- Botón para iniciar/pausar
- Botón para reiniciar
- Estado que sabe si está corriendo o pausado

### El diseño del estado

Antes de escribir código, planifica el estado:

\`\`\`js
const estado = {
  segundos: 0,      // segundos transcurridos
  corriendo: false, // ¿está contando?
  intervaloId: null // ID del setInterval para poder pararlo
}
\`\`\`

### Formatear el tiempo

\`\`\`js
function formatearTiempo(segundos) {
  const mins = Math.floor(segundos / 60)
  const segs = segundos % 60
  return String(mins).padStart(2, '0') + ':' + String(segs).padStart(2, '0')
}
\`\`\`

### Patrón de control de estado

\`\`\`js
function iniciar() {
  if (estado.corriendo) return // evitar doble inicio
  estado.corriendo = true
  estado.intervaloId = setInterval(() => {
    estado.segundos++
    actualizarPantalla()
  }, 1000)
}

function pausar() {
  clearInterval(estado.intervaloId)
  estado.corriendo = false
}

function reiniciar() {
  pausar()
  estado.segundos = 0
  actualizarPantalla()
}
\`\`\`

### Lo importante de este proyecto

- El estado centralizado (un objeto) hace el código más predecible
- Siempre verificar si ya está corriendo antes de iniciar un nuevo intervalo
- Guardar el ID del intervalo en el estado para poder controlarlo
- Separar la lógica (modificar estado) de la presentación (actualizar el DOM)`,
    codeExample: `// temporizador.js

// Estado centralizado del temporizador
const temporizador = {
  segundos: 0,
  corriendo: false,
  intervaloId: null,
}

// Formatea segundos en MM:SS
function formatearTiempo(segundos) {
  const mins = Math.floor(segundos / 60)
  const segs = segundos % 60
  return String(mins).padStart(2, '0') + ':' + String(segs).padStart(2, '0')
}

// Actualiza la pantalla con el tiempo actual
function actualizarPantalla() {
  const display = document.getElementById('tiempo')
  if (display) {
    display.textContent = formatearTiempo(temporizador.segundos)
  }
  console.log('Tiempo:', formatearTiempo(temporizador.segundos))
}

// Lógica del temporizador
function iniciar() {
  if (temporizador.corriendo) return // evitar doble inicio

  temporizador.corriendo = true
  temporizador.intervaloId = setInterval(() => {
    temporizador.segundos++
    actualizarPantalla()
  }, 1000)

  const btnIniciar = document.getElementById('btn-iniciar')
  if (btnIniciar) btnIniciar.textContent = 'Pausar'
  console.log('Temporizador iniciado')
}

function pausar() {
  if (!temporizador.corriendo) return

  clearInterval(temporizador.intervaloId)
  temporizador.corriendo = false

  const btnIniciar = document.getElementById('btn-iniciar')
  if (btnIniciar) btnIniciar.textContent = 'Continuar'
  console.log('Temporizador pausado')
}

function reiniciar() {
  pausar()
  temporizador.segundos = 0
  actualizarPantalla()
  console.log('Temporizador reiniciado')
}

function alternarIniciarPausar() {
  if (temporizador.corriendo) {
    pausar()
  } else {
    iniciar()
  }
}

// Conectar con botones del HTML
// document.getElementById('btn-iniciar').addEventListener('click', alternarIniciarPausar)
// document.getElementById('btn-reiniciar').addEventListener('click', reiniciar)

// Para probar en la consola:
iniciar()
setTimeout(pausar, 5000)    // pausar después de 5 segundos
setTimeout(iniciar, 7000)   // reanudar después de 7 segundos
setTimeout(reiniciar, 12000) // reiniciar después de 12 segundos`,
    keyPoints: [
      'Centralizar el estado en un objeto hace el código más predecible y fácil de controlar.',
      'Siempre verifica si el temporizador ya está corriendo antes de iniciar un nuevo setInterval.',
      'Guarda el ID del setInterval en el estado para poder detenerlo con clearInterval.',
      'Separa la lógica de negocio (cambiar estado) de la presentación (actualizar el DOM).',
      'padStart(2, "0") formatea números de un dígito con un cero inicial: "5" → "05".',
      'Este patrón (estado + acciones + render) es la base de frameworks como React y Vue.',
    ],
    exercise: {
      description:
        'Extiende el temporizador con estas funciones: 1) Agrega un límite máximo de 5 minutos (300 segundos) — cuando se alcance, el temporizador se detiene y muestra "¡Tiempo agotado!". 2) Agrega una función `registrarLap()` que guarde el tiempo actual en un array y lo imprima. 3) Agrega una propiedad `vueltas` al estado para rastrear cuántas vueltas se han registrado.',
      hint: 'Para el límite: dentro del setInterval, verifica if (temporizador.segundos >= 300) { detener() }. Para las vueltas: agrega vueltas: [] al estado y en registrarLap() haz temporizador.vueltas.push(formatearTiempo(temporizador.segundos)).',
    },
    quiz: [
      {
        question: '¿Por qué es importante verificar `if (temporizador.corriendo) return` antes de iniciar?',
        options: [
          'Para hacer el código más rápido',
          'Para evitar crear múltiples setIntervals simultáneos que causarían incrementos dobles',
          'Porque setInterval no funciona si ya hay uno activo',
          'Para ahorrar memoria',
        ],
        correctAnswer: 'Para evitar crear múltiples setIntervals simultáneos que causarían incrementos dobles',
        correctFeedback: 'Correcto. Sin esta verificación, cada click en "Iniciar" crearía un nuevo setInterval. Con dos intervalos activos, el contador incrementaría el doble de rápido.',
        incorrectFeedback: 'Si no verificas, cada llamada a iniciar() crea un nuevo setInterval. Con dos activos, el contador aumenta 2 veces por segundo. La verificación previene este bug.',
      },
      {
        question: '¿Qué devuelve `String(5).padStart(2, "0")`?',
        options: ['"5"', '"05"', '"50"', '"005"'],
        correctAnswer: '"05"',
        correctFeedback: 'Correcto. padStart(2, "0") agrega un "0" al inicio si el string tiene menos de 2 caracteres. "5" pasa a "05".',
        incorrectFeedback: 'padStart(longitud, relleno) rellena el inicio hasta alcanzar la longitud indicada. "5" tiene 1 carácter, necesita 2, así que agrega "0" al inicio → "05".',
      },
      {
        question: '¿Qué ventaja tiene guardar el estado en un objeto centralizado?',
        options: [
          'Hace el código más rápido',
          'Permite que todas las funciones lean y modifiquen el mismo estado de forma predecible',
          'Evita el uso de variables globales',
          'Hace que setInterval funcione mejor',
        ],
        correctAnswer: 'Permite que todas las funciones lean y modifiquen el mismo estado de forma predecible',
        correctFeedback: 'Exacto. Con un objeto de estado, todas las funciones (iniciar, pausar, reiniciar) trabajan sobre la misma fuente de verdad, evitando inconsistencias.',
        incorrectFeedback: 'El beneficio principal es coherencia: todas las funciones leen y modifican el mismo objeto de estado. No hay variables flotantes ni inconsistencias entre funciones.',
      },
      {
        question: '¿Cuál de estas expresiones calcula correctamente los segundos restantes de un número total?',
        options: [
          'Math.ceil(total / 60)',
          'total * 60',
          'total % 60',
          'Math.floor(total / 60)',
        ],
        correctAnswer: 'total % 60',
        correctFeedback: 'Correcto. El operador % (módulo) da el resto de la división. 125 % 60 = 5 (los segundos que sobran después de 2 minutos completos).',
        incorrectFeedback: 'Para extraer los segundos de un total, usa el módulo: total % 60. Ejemplo: 125 segundos → 125 % 60 = 5 segundos. Los minutos serían Math.floor(125 / 60) = 2.',
      },
      {
        question: '¿Qué hace `clearInterval(temporizador.intervaloId)` cuando `intervaloId` es null?',
        options: [
          'Lanza un TypeError',
          'Detiene todos los intervalos activos',
          'No hace nada — clearInterval ignora null sin error',
          'Pausa el Event Loop',
        ],
        correctAnswer: 'No hace nada — clearInterval ignora null sin error',
        correctFeedback: 'Correcto. clearInterval(null) es seguro — simplemente no hace nada. Esto es útil porque puedes llamar pausar() aunque el timer no haya iniciado.',
        incorrectFeedback: 'clearInterval es tolerante con valores inválidos como null o undefined — simplemente no hace nada. No lanza errores, lo que es conveniente para el código de limpieza.',
      },
    ],
  },
]

export const jsModule21: Module = {
  number: 21,
  title: 'Introducción a la asincronía',
  level: 'nivel5',
  lessons: lessonsJsModule21,
}
