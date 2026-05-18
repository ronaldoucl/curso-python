import type { Lesson, Module } from '@/types'

export const lessonsJsModule22: Lesson[] = [
  {
    slug: 'que-es-una-promise',
    title: '¿Qué es una Promise?',
    module: 'Promesas',
    moduleNumber: 22,
    order: 164,
    description: 'Aprende qué son las Promises en JavaScript y cómo representan un valor futuro.',
    explanation: `Una **Promise** (promesa) es un objeto que representa la eventual finalización o falla de una operación asíncrona.

Imagina que pides comida a domicilio: te dan un "ticket" (la promise). Ese ticket puede resolverse de tres formas:
- **Pending (pendiente):** el pedido está en camino
- **Fulfilled (cumplida):** el pedido llegó exitosamente
- **Rejected (rechazada):** el pedido fue cancelado

Antes de las Promises, el código asíncrono se manejaba con callbacks anidados (el "callback hell"). Las Promises organizan ese código de forma más legible.

\`\`\`
// Sin Promises (callback hell)
getData(function(a) {
  getMore(a, function(b) {
    getEvenMore(b, function(c) {
      // profundamente anidado...
    })
  })
})

// Con Promises
getData()
  .then(a => getMore(a))
  .then(b => getEvenMore(b))
  .then(c => console.log(c))
\`\`\`

Una Promise se crea con \`new Promise(executor)\` donde \`executor\` es una función que recibe \`resolve\` y \`reject\`.`,
    codeExample: `// Crear una Promise simple
const miPromesa = new Promise((resolve, reject) => {
  const exito = true // simula resultado

  if (exito) {
    resolve('¡Operación exitosa!')
  } else {
    reject('Algo salió mal')
  }
})

// Consumir la Promise
miPromesa
  .then(resultado => {
    console.log('Éxito:', resultado)
  })
  .catch(error => {
    console.log('Error:', error)
  })

// Promise que simula una espera
const esperarSegundo = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Pasó un segundo')
  }, 1000)
})

esperarSegundo.then(msg => console.log(msg))
// → (después de 1s) "Pasó un segundo"`,
    keyPoints: [
      'Una Promise representa un valor que estará disponible en el futuro',
      'Tiene tres estados: pending, fulfilled y rejected',
      'Se crea con new Promise((resolve, reject) => { ... })',
      'resolve() se llama cuando la operación tiene éxito',
      'reject() se llama cuando la operación falla',
      'Las Promises evitan el "callback hell" y mejoran la legibilidad',
    ],
    exercise: {
      description: 'Crea una Promise que se resuelva con el número 42 después de 500ms. Luego consúmela con .then() e imprime el resultado.',
      hint: 'Usa new Promise con setTimeout dentro. Llama resolve(42) dentro del setTimeout.',
    },
    quiz: [
      {
        question: '¿Qué representa una Promise en JavaScript?',
        options: [
          'Un valor que estará disponible en el futuro',
          'Una función que se ejecuta inmediatamente',
          'Un tipo de variable especial',
          'Un bucle asíncrono',
        ],
        correctAnswer: 'Un valor que estará disponible en el futuro',
        correctFeedback: 'Correcto. Una Promise encapsula una operación que aún no ha terminado.',
        incorrectFeedback: 'Una Promise es un objeto que representa un valor futuro, no una función inmediata ni un bucle.',
      },
      {
        question: '¿Cuáles son los tres estados de una Promise?',
        options: [
          'pending, fulfilled, rejected',
          'loading, success, error',
          'start, running, done',
          'init, active, closed',
        ],
        correctAnswer: 'pending, fulfilled, rejected',
        correctFeedback: '¡Exacto! Pending (pendiente), fulfilled (cumplida) y rejected (rechazada).',
        incorrectFeedback: 'Los estados oficiales son: pending (pendiente), fulfilled (cumplida) y rejected (rechazada).',
      },
      {
        question: '¿Qué función se llama cuando una Promise tiene éxito?',
        options: [
          'resolve()',
          'reject()',
          'done()',
          'success()',
        ],
        correctAnswer: 'resolve()',
        correctFeedback: '¡Correcto! resolve() marca la Promise como fulfilled.',
        incorrectFeedback: 'resolve() indica éxito. reject() indica fallo. done() y success() no existen en el API de Promise.',
      },
      {
        question: '¿Qué problema resuelven principalmente las Promises?',
        options: [
          'El callback hell (callbacks profundamente anidados)',
          'Los errores de sintaxis',
          'El consumo excesivo de memoria',
          'La velocidad de ejecución del código',
        ],
        correctAnswer: 'El callback hell (callbacks profundamente anidados)',
        correctFeedback: '¡Correcto! Las Promises hacen el código asíncrono más legible y menos anidado.',
        incorrectFeedback: 'El principal problema que resuelven es el "callback hell": callbacks dentro de callbacks que hacen el código difícil de leer.',
      },
      {
        question: '¿Cómo se crea una Promise?',
        options: [
          'new Promise((resolve, reject) => { ... })',
          'Promise.create(() => { ... })',
          'async function() { ... }',
          'promise(() => { ... })',
        ],
        correctAnswer: 'new Promise((resolve, reject) => { ... })',
        correctFeedback: '¡Correcto! Se usa el constructor new Promise con una función ejecutora.',
        incorrectFeedback: 'La sintaxis correcta es: new Promise((resolve, reject) => { ... })',
      },
    ],
  },
  {
    slug: 'estados-promesa',
    title: 'Estados de una Promise',
    module: 'Promesas',
    moduleNumber: 22,
    order: 165,
    description: 'Comprende en profundidad los tres estados de una Promise y cómo transicionan.',
    explanation: `Una Promise puede estar en uno de tres estados, y estas transiciones son **irreversibles**:

**1. Pending (pendiente)**
Estado inicial. La operación aún no ha terminado.

**2. Fulfilled (cumplida)**
La operación terminó exitosamente. El valor está disponible.

**3. Rejected (rechazada)**
La operación falló. El motivo del error está disponible.

Una Promise transiciona de **pending** a **fulfilled** (vía resolve) o de **pending** a **rejected** (vía reject). Una vez que cambia de estado, **no puede cambiar de nuevo**.

\`\`\`
pending → fulfilled  (via resolve)
pending → rejected   (via reject)
\`\`\`

**Settled:** Una Promise que ya no está en pending (ya sea fulfilled o rejected) se dice que está "settled" (asentada).

Puedes inspeccionar el estado actual de una Promise en las DevTools del navegador.`,
    codeExample: `// Observar estados de Promise
console.log('1. Creando Promise...')

const promesaLenta = new Promise((resolve) => {
  console.log('2. Executor ejecutado (Promise en pending)')
  setTimeout(() => {
    resolve('¡Lista!')
    console.log('4. resolve() llamado (ahora fulfilled)')
  }, 1000)
})

console.log('3. Después de crear (aún pending)')

promesaLenta.then(valor => {
  console.log('5. .then() ejecutado:', valor)
})

// ¿Qué pasa si llamamos resolve y reject?
const promesaDoble = new Promise((resolve, reject) => {
  resolve('primer valor')  // esto cuenta
  reject('error')          // esto se ignora
  resolve('segundo valor') // esto también se ignora
})

promesaDoble.then(v => console.log('Resultado:', v))
// → "Resultado: primer valor"
// Solo el primer estado importa`,
    keyPoints: [
      'Pending es el estado inicial de toda Promise',
      'Fulfilled significa que la operación completó con éxito',
      'Rejected significa que la operación falló',
      'Los cambios de estado son irreversibles: una Promise no puede "deshacerse"',
      '"Settled" describe una Promise que ya no está en pending',
      'Solo la primera llamada a resolve() o reject() tiene efecto',
    ],
    exercise: {
      description: 'Crea una Promise que esté en estado rejected después de 200ms. Maneja el rechazo con .catch() e imprime el mensaje de error.',
      hint: 'Usa setTimeout y llama reject("mensaje de error") dentro del callback.',
    },
    quiz: [
      {
        question: 'Una Promise que ha llamado resolve() está en estado...',
        options: ['fulfilled', 'pending', 'rejected', 'settled'],
        correctAnswer: 'fulfilled',
        correctFeedback: '¡Correcto! resolve() lleva la Promise al estado fulfilled.',
        incorrectFeedback: 'Cuando se llama resolve(), la Promise pasa a estado fulfilled (cumplida).',
      },
      {
        question: '¿Qué pasa si llamas resolve() dos veces en una Promise?',
        options: [
          'Solo la primera llamada tiene efecto',
          'La segunda sobreescribe la primera',
          'La Promise queda en error',
          'Ambas se ejecutan en orden',
        ],
        correctAnswer: 'Solo la primera llamada tiene efecto',
        correctFeedback: '¡Correcto! El estado de una Promise es inmutable una vez establecido.',
        incorrectFeedback: 'Una Promise solo puede cambiar de estado una vez. La segunda llamada a resolve() o reject() se ignora completamente.',
      },
      {
        question: '¿Qué significa que una Promise está "settled"?',
        options: [
          'Que ya no está en estado pending (está fulfilled o rejected)',
          'Que está en estado pending',
          'Que fue cancelada',
          'Que tiene un valor undefined',
        ],
        correctAnswer: 'Que ya no está en estado pending (está fulfilled o rejected)',
        correctFeedback: '¡Exacto! "Settled" significa que la Promise terminó, independientemente del resultado.',
        incorrectFeedback: '"Settled" describe cualquier Promise que ya salió del estado pending, ya sea fulfilled o rejected.',
      },
      {
        question: '¿En qué estado comienza siempre una Promise?',
        options: ['pending', 'fulfilled', 'rejected', 'idle'],
        correctAnswer: 'pending',
        correctFeedback: '¡Correcto! Toda Promise empieza en estado pending.',
        incorrectFeedback: 'Toda Promise comienza en estado pending, esperando que se llame resolve() o reject().',
      },
      {
        question: '¿Puede una Promise pasar de fulfilled a rejected?',
        options: [
          'No, los cambios de estado son irreversibles',
          'Sí, llamando reject() después',
          'Sí, pero solo dentro del mismo tick',
          'Depende del navegador',
        ],
        correctAnswer: 'No, los cambios de estado son irreversibles',
        correctFeedback: '¡Correcto! Una vez que una Promise cambia de estado, ese estado es permanente.',
        incorrectFeedback: 'Los estados de una Promise son irreversibles. Una vez fulfilled o rejected, no puede cambiar.',
      },
    ],
  },
  {
    slug: 'then-promesas',
    title: 'El método .then()',
    module: 'Promesas',
    moduleNumber: 22,
    order: 166,
    description: 'Aprende a usar .then() para manejar el resultado exitoso de una Promise.',
    explanation: `El método **.then()** se ejecuta cuando una Promise se resuelve exitosamente (fulfilled).

**Sintaxis básica:**
\`\`\`
promise.then(callbackExito, callbackError)
\`\`\`

El segundo argumento es opcional. Generalmente se usa solo el primero y se maneja el error con **.catch()** por separado.

**Encadenamiento:**
.then() retorna **una nueva Promise**, lo que permite encadenar múltiples .then():

\`\`\`
fetch(url)
  .then(response => response.json())
  .then(data => procesarData(data))
  .then(resultado => mostrarResultado(resultado))
\`\`\`

Cada .then() recibe el **valor retornado** por el anterior. Si retornas otra Promise, el siguiente .then() espera a que se resuelva.

**Importante:** El callback de .then() siempre se ejecuta de forma **asíncrona**, incluso si la Promise ya está resuelta.`,
    codeExample: `// .then() básico
const promesa = Promise.resolve(10)

promesa.then(valor => {
  console.log('Valor:', valor) // → 10
})

// Encadenamiento de .then()
Promise.resolve(5)
  .then(n => n * 2)       // retorna 10
  .then(n => n + 3)       // retorna 13
  .then(n => {
    console.log('Resultado final:', n) // → 13
  })

// .then() con transformación
const obtenerUsuario = () => Promise.resolve({ id: 1, nombre: 'Ana' })

obtenerUsuario()
  .then(usuario => {
    console.log('Usuario:', usuario.nombre) // → Ana
    return usuario.id // pasa el id al siguiente .then()
  })
  .then(id => {
    console.log('ID:', id) // → 1
  })

// Si .then() retorna una Promise, espera a que se resuelva
Promise.resolve('inicio')
  .then(val => {
    return new Promise(resolve => setTimeout(() => resolve(val + ' → fin'), 500))
  })
  .then(resultado => console.log(resultado)) // → "inicio → fin"`,
    keyPoints: [
      '.then() se ejecuta cuando la Promise se resuelve exitosamente',
      'Recibe el valor pasado a resolve() como argumento',
      'Retorna una nueva Promise, permitiendo el encadenamiento',
      'El valor retornado por el callback se convierte en el valor de la siguiente Promise',
      'Si retornas una Promise, el siguiente .then() espera su resolución',
      'El callback de .then() siempre es asíncrono',
    ],
    exercise: {
      description: 'Crea una función que retorne una Promise que se resuelve con un número. Encadena tres .then() que lo multipliquen por 2, lo sumen 5, y finalmente lo impriman.',
      hint: 'Cada .then() recibe el valor anterior. Retorna el resultado de la operación para pasarlo al siguiente.',
    },
    quiz: [
      {
        question: '¿Qué recibe el callback de .then() como argumento?',
        options: [
          'El valor pasado a resolve()',
          'El valor pasado a reject()',
          'La Promise original',
          'Un objeto de estado',
        ],
        correctAnswer: 'El valor pasado a resolve()',
        correctFeedback: '¡Correcto! El argumento de .then() es exactamente lo que se pasó a resolve().',
        incorrectFeedback: '.then() recibe el valor con el que se llamó resolve(). Para el valor de reject(), se usa .catch().',
      },
      {
        question: '¿Qué retorna .then()?',
        options: [
          'Una nueva Promise',
          'El mismo objeto Promise original',
          'undefined',
          'El valor del callback',
        ],
        correctAnswer: 'Una nueva Promise',
        correctFeedback: '¡Correcto! .then() siempre retorna una Promise, lo que permite el encadenamiento.',
        incorrectFeedback: '.then() retorna una nueva Promise. Esto es lo que hace posible el encadenamiento de múltiples .then().',
      },
      {
        question: '¿Qué pasa si el callback de .then() retorna una Promise?',
        options: [
          'El siguiente .then() espera a que esa Promise se resuelva',
          'Se ignora y el siguiente .then() recibe undefined',
          'Se produce un error',
          'Se ejecutan en paralelo',
        ],
        correctAnswer: 'El siguiente .then() espera a que esa Promise se resuelva',
        correctFeedback: '¡Exacto! Si retornas una Promise, el encadenamiento se "aplana" automáticamente.',
        incorrectFeedback: 'Cuando un callback retorna una Promise, el siguiente .then() espera a que esa Promise se resuelva antes de ejecutarse.',
      },
      {
        question: '¿Cuándo se ejecuta el callback de .then()?',
        options: [
          'Cuando la Promise pasa a estado fulfilled',
          'Cuando la Promise pasa a estado rejected',
          'Inmediatamente al crearse la Promise',
          'Siempre de forma síncrona',
        ],
        correctAnswer: 'Cuando la Promise pasa a estado fulfilled',
        correctFeedback: '¡Correcto! .then() solo se ejecuta cuando la Promise se resuelve exitosamente.',
        incorrectFeedback: '.then() se ejecuta cuando la Promise alcanza el estado fulfilled (cumplida exitosamente).',
      },
      {
        question: '¿Cuál es la ventaja principal del encadenamiento de .then()?',
        options: [
          'Evita la anidación profunda del callback hell',
          'Hace el código más rápido',
          'Permite usar variables globales',
          'Elimina la necesidad de manejo de errores',
        ],
        correctAnswer: 'Evita la anidación profunda del callback hell',
        correctFeedback: '¡Correcto! El encadenamiento mantiene el código plano y legible.',
        incorrectFeedback: 'La principal ventaja es que el código queda plano (no anidado), evitando el callback hell.',
      },
    ],
  },
  {
    slug: 'catch-promesas',
    title: 'El método .catch()',
    module: 'Promesas',
    moduleNumber: 22,
    order: 167,
    description: 'Aprende a manejar errores en Promises con el método .catch().',
    explanation: `El método **.catch()** captura errores que ocurran en la Promise o en cualquier .then() anterior de la cadena.

**.catch(callback)** es equivalente a **.then(undefined, callback)**, pero es más legible y se prefiere.

**¿Cuándo se ejecuta .catch()?**
1. Cuando la Promise se rechaza (se llama reject())
2. Cuando se lanza un error (throw) dentro de un .then()
3. Cuando ocurre cualquier error no manejado en la cadena

**Importante:** Si no tienes un .catch(), los errores quedan como "unhandled promise rejection" — un error silencioso peligroso.

**Recovery:** El callback de .catch() puede retornar un valor para "recuperarse" del error y continuar la cadena.`,
    codeExample: `// .catch() básico
const promesaFallida = Promise.reject('Error de red')

promesaFallida
  .then(valor => console.log('Éxito:', valor)) // se omite
  .catch(error => console.log('Error capturado:', error))
// → "Error capturado: Error de red"

// .catch() captura errores de .then() también
Promise.resolve(10)
  .then(n => {
    throw new Error('algo salió mal')
  })
  .then(n => console.log('nunca llega aquí'))
  .catch(err => console.log('Capturado:', err.message))
// → "Capturado: algo salió mal"

// Recuperación con .catch()
Promise.reject('error inicial')
  .catch(err => {
    console.log('Error:', err)
    return 'valor de recuperación' // continúa la cadena
  })
  .then(val => console.log('Recuperado:', val))
// → "Error: error inicial"
// → "Recuperado: valor de recuperación"

// Siempre añade .catch() para evitar unhandled rejections
fetch('https://api.ejemplo.com/datos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('No se pudieron cargar los datos'))`,
    keyPoints: [
      '.catch() se ejecuta cuando la Promise es rechazada o hay un error',
      'Es equivalente a .then(undefined, callback) pero más legible',
      'Captura errores de cualquier .then() anterior en la cadena',
      'Sin .catch(), los errores producen "unhandled promise rejection"',
      '.catch() puede retornar un valor para recuperar la cadena',
      'Siempre añade .catch() al final de tus cadenas de Promises',
    ],
    exercise: {
      description: 'Crea una función que retorne una Promise rechazada con el mensaje "datos no disponibles". Maneja el error con .catch() e imprime un mensaje amigable al usuario.',
      hint: 'Usa Promise.reject("mensaje") o new Promise((resolve, reject) => reject("mensaje")).',
    },
    quiz: [
      {
        question: '¿Cuándo se ejecuta el callback de .catch()?',
        options: [
          'Cuando la Promise es rechazada o hay un throw en un .then()',
          'Solo cuando se llama reject()',
          'Siempre, sin importar el resultado',
          'Solo cuando hay un error de sintaxis',
        ],
        correctAnswer: 'Cuando la Promise es rechazada o hay un throw en un .then()',
        correctFeedback: '¡Correcto! .catch() atrapa rechazos y también errores lanzados con throw.',
        incorrectFeedback: '.catch() se ejecuta tanto cuando la Promise se rechaza como cuando se lanza un error dentro de un .then() anterior.',
      },
      {
        question: '¿A qué es equivalente .catch(fn)?',
        options: [
          '.then(undefined, fn)',
          '.then(fn)',
          '.finally(fn)',
          '.error(fn)',
        ],
        correctAnswer: '.then(undefined, fn)',
        correctFeedback: '¡Correcto! .catch(fn) es azúcar sintáctico para .then(undefined, fn).',
        incorrectFeedback: '.catch(fn) es equivalente a .then(undefined, fn). El primer argumento de .then() se omite para solo capturar errores.',
      },
      {
        question: '¿Qué pasa si no añades .catch() a una Promise que se rechaza?',
        options: [
          'Se produce un "unhandled promise rejection" (rechazo no manejado)',
          'El error se ignora silenciosamente',
          'El programa se detiene completamente',
          'Se ejecuta el .then() de todos modos',
        ],
        correctAnswer: 'Se produce un "unhandled promise rejection" (rechazo no manejado)',
        correctFeedback: '¡Correcto! Los rechazos no manejados son errores peligrosos que deben evitarse.',
        incorrectFeedback: 'Sin .catch(), JavaScript reporta un "unhandled promise rejection" — en Node.js moderno puede terminar el proceso.',
      },
      {
        question: '¿Puede .catch() "recuperar" la cadena y permitir más .then()?',
        options: [
          'Sí, retornando un valor desde el callback',
          'No, la cadena siempre termina en .catch()',
          'Solo si usa Promise.resolve()',
          'No, .catch() siempre lanza el error de nuevo',
        ],
        correctAnswer: 'Sí, retornando un valor desde el callback',
        correctFeedback: '¡Exacto! Si .catch() retorna un valor, los .then() siguientes continúan normalmente.',
        incorrectFeedback: '.catch() puede retornar un valor para "recuperarse", y los .then() que vengan después recibirán ese valor.',
      },
      {
        question: '¿Qué captura un .catch() al final de esta cadena: .then().then().then().catch()?',
        options: [
          'Errores de cualquiera de los tres .then() anteriores',
          'Solo errores del último .then()',
          'Solo el rechazo inicial de la Promise',
          'Nada, solo aplica al final',
        ],
        correctAnswer: 'Errores de cualquiera de los tres .then() anteriores',
        correctFeedback: '¡Correcto! Un .catch() al final protege toda la cadena.',
        incorrectFeedback: 'El .catch() al final de la cadena captura cualquier error que ocurra en cualquiera de los .then() anteriores.',
      },
    ],
  },
  {
    slug: 'finally-promesas',
    title: 'El método .finally()',
    module: 'Promesas',
    moduleNumber: 22,
    order: 168,
    description: 'Usa .finally() para ejecutar código independientemente del resultado de una Promise.',
    explanation: `El método **.finally()** se ejecuta **siempre**, tanto si la Promise se resuelve como si se rechaza.

Es perfecto para código de limpieza: ocultar spinners de carga, liberar recursos, restablecer estados.

**Características de .finally():**
- No recibe el valor de resolve ni el error de reject (sin argumentos útiles)
- Pasa el valor o error al siguiente .then() o .catch() sin modificarlo
- No interfiere con la cadena de Promises

\`\`\`
fetch(url)
  .then(res => res.json())
  .then(data => mostrar(data))
  .catch(err => mostrarError(err))
  .finally(() => ocultarSpinner())  // siempre se ejecuta
\`\`\`

**Cuándo usar .finally():**
- Ocultar indicadores de carga
- Habilitar botones deshabilitados
- Cerrar conexiones o archivos
- Limpiar estado temporal`,
    codeExample: `// .finally() básico
let cargando = true

const traerDatos = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve({ nombre: 'Ana' }), 1000)
})

console.log('cargando:', cargando) // → true

traerDatos()
  .then(data => {
    console.log('Datos:', data.nombre)
  })
  .catch(err => {
    console.log('Error:', err)
  })
  .finally(() => {
    cargando = false
    console.log('cargando:', cargando) // → false (siempre)
  })

// .finally() no modifica el valor
Promise.resolve(42)
  .finally(() => {
    console.log('finally ejecutado') // → "finally ejecutado"
    // no retorna nada útil
  })
  .then(val => console.log('Valor:', val)) // → 42 (sin cambios)

// .finally() tampoco atrapa el error
Promise.reject('error')
  .finally(() => console.log('limpiando...'))
  .catch(err => console.log('Error:', err)) // → "Error: error"`,
    keyPoints: [
      '.finally() se ejecuta siempre, sin importar si la Promise tuvo éxito o falló',
      'No recibe el valor de resolve ni el error de reject',
      'Es ideal para limpiar recursos o ocultar indicadores de carga',
      'No modifica el valor o error que fluye por la cadena',
      'Puedes añadirlo al final de cualquier cadena de Promises',
      '.finally() retorna una Promise, así que puedes seguir encadenando',
    ],
    exercise: {
      description: 'Simula una operación de carga: crea una variable "spinner = true", haz una Promise que se resuelva después de 500ms, y usa .finally() para poner "spinner = false". Imprime el valor del spinner antes, durante y después.',
      hint: 'Usa console.log antes de la Promise, dentro del .then(), y dentro del .finally().',
    },
    quiz: [
      {
        question: '¿Cuándo se ejecuta .finally()?',
        options: [
          'Siempre, tanto si la Promise se resuelve como si se rechaza',
          'Solo si la Promise se resuelve',
          'Solo si la Promise se rechaza',
          'Nunca, es un método obsoleto',
        ],
        correctAnswer: 'Siempre, tanto si la Promise se resuelve como si se rechaza',
        correctFeedback: '¡Correcto! .finally() es el "siempre" de las Promises.',
        incorrectFeedback: '.finally() se ejecuta siempre, independientemente del resultado de la Promise.',
      },
      {
        question: '¿Qué argumento recibe el callback de .finally()?',
        options: [
          'Ninguno (no recibe argumentos útiles)',
          'El valor de resolve',
          'El error de reject',
          'Un objeto con ambos valores',
        ],
        correctAnswer: 'Ninguno (no recibe argumentos útiles)',
        correctFeedback: '¡Correcto! .finally() no recibe el valor ni el error.',
        incorrectFeedback: '.finally() no recibe argumentos útiles. Si necesitas el valor, úsalo en .then().',
      },
      {
        question: '¿Para qué es ideal usar .finally()?',
        options: [
          'Para ocultar spinners de carga o limpiar recursos',
          'Para transformar datos',
          'Para manejar errores específicos',
          'Para crear nuevas Promises',
        ],
        correctAnswer: 'Para ocultar spinners de carga o limpiar recursos',
        correctFeedback: '¡Exacto! .finally() es perfecto para código de limpieza que debe ejecutarse siempre.',
        incorrectFeedback: '.finally() es ideal para código que debe ejecutarse siempre: ocultar spinners, liberar recursos, restablecer estados.',
      },
      {
        question: '¿Modifica .finally() el valor que pasa por la cadena?',
        options: [
          'No, el valor o error pasa sin modificaciones',
          'Sí, siempre reemplaza el valor',
          'Sí, añade información extra',
          'Depende del valor de retorno',
        ],
        correctAnswer: 'No, el valor o error pasa sin modificaciones',
        correctFeedback: '¡Correcto! .finally() no interfiere con el flujo de datos de la cadena.',
        incorrectFeedback: '.finally() deja pasar el valor o error tal como está. El .then() o .catch() siguiente recibe el mismo valor.',
      },
      {
        question: '¿Cuál es el orden correcto para manejar una Promise completa?',
        options: [
          '.then() → .catch() → .finally()',
          '.finally() → .then() → .catch()',
          '.catch() → .then() → .finally()',
          '.then() → .finally() → .catch()',
        ],
        correctAnswer: '.then() → .catch() → .finally()',
        correctFeedback: '¡Correcto! Primero el éxito, luego los errores, y finalmente la limpieza.',
        incorrectFeedback: 'La convención es: .then() para éxito, .catch() para errores, .finally() para limpieza al final.',
      },
    ],
  },
  {
    slug: 'encadenamiento-promesas',
    title: 'Encadenamiento de Promesas',
    module: 'Promesas',
    moduleNumber: 22,
    order: 169,
    description: 'Aprende a encadenar múltiples Promises para manejar operaciones asíncronas en secuencia.',
    explanation: `El **encadenamiento de Promises** permite ejecutar operaciones asíncronas en secuencia, donde cada paso depende del resultado anterior.

Cada .then() retorna una nueva Promise, lo que permite continuar la cadena indefinidamente.

**Reglas del encadenamiento:**
1. Si el callback retorna un valor, ese valor se envuelve en una Promise resuelta
2. Si el callback retorna una Promise, la cadena espera esa Promise
3. Si el callback lanza un error, el siguiente .catch() lo captura

**Comparación con callbacks anidados:**
\`\`\`
// Callback hell
login(user, pass, function(token) {
  getProfile(token, function(profile) {
    getPosts(profile.id, function(posts) {
      // profundamente anidado
    })
  })
})

// Encadenamiento de Promises
login(user, pass)
  .then(token => getProfile(token))
  .then(profile => getPosts(profile.id))
  .then(posts => mostrar(posts))
  .catch(err => manejarError(err))
\`\`\`

El encadenamiento hace el código más legible, fácil de depurar y de mantener.`,
    codeExample: `// Simulando operaciones asíncronas
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const login = (usuario) => {
  return esperar(300).then(() => ({ token: 'abc123', nombre: usuario }))
}

const obtenerPerfil = (token) => {
  return esperar(200).then(() => ({ id: 1, token, rol: 'admin' }))
}

const obtenerPermisos = (perfil) => {
  return esperar(100).then(() => ['leer', 'escribir', 'borrar'])
}

// Encadenamiento secuencial
login('Ana')
  .then(session => {
    console.log('Sesión:', session.nombre)
    return obtenerPerfil(session.token)
  })
  .then(perfil => {
    console.log('Perfil ID:', perfil.id)
    return obtenerPermisos(perfil)
  })
  .then(permisos => {
    console.log('Permisos:', permisos.join(', '))
  })
  .catch(err => {
    console.error('Error en el proceso:', err)
  })
  .finally(() => {
    console.log('Proceso de login terminado')
  })`,
    keyPoints: [
      'El encadenamiento permite ejecutar operaciones asíncronas en secuencia',
      'Cada .then() recibe el resultado del anterior',
      'Retornar una Promise en .then() la "aplana" automáticamente',
      'Un solo .catch() al final protege toda la cadena',
      'El encadenamiento elimina el callback hell',
      'Cada paso puede transformar o enriquecer los datos',
    ],
    exercise: {
      description: 'Crea tres funciones que retornen Promises (simula obtener nombre, apellido y edad). Encadénalas para construir un objeto con todos los datos y mostrarlo.',
      hint: 'Cada función puede usar Promise.resolve(valor). En cada .then() acumula los datos retornando un objeto actualizado.',
    },
    quiz: [
      {
        question: '¿Qué permite hacer el encadenamiento de Promises?',
        options: [
          'Ejecutar operaciones asíncronas en secuencia de forma legible',
          'Ejecutar todas las Promises en paralelo',
          'Hacer el código síncrono',
          'Eliminar la necesidad de .catch()',
        ],
        correctAnswer: 'Ejecutar operaciones asíncronas en secuencia de forma legible',
        correctFeedback: '¡Correcto! El encadenamiento mantiene el código plano y secuencial.',
        incorrectFeedback: 'El encadenamiento sirve para secuencias donde cada paso depende del anterior, de forma legible.',
      },
      {
        question: 'Si un .then() retorna una Promise, ¿qué hace el siguiente .then()?',
        options: [
          'Espera a que esa Promise se resuelva',
          'Se ejecuta inmediatamente',
          'Se ignora',
          'Lanza un error',
        ],
        correctAnswer: 'Espera a que esa Promise se resuelva',
        correctFeedback: '¡Exacto! El encadenamiento "aplana" Promises automáticamente.',
        incorrectFeedback: 'El siguiente .then() espera automáticamente a que la Promise retornada por el anterior se resuelva.',
      },
      {
        question: '¿Cuántos .catch() necesita una cadena larga de .then()?',
        options: [
          'Generalmente uno al final es suficiente',
          'Uno por cada .then()',
          'Dos: uno al inicio y uno al final',
          'Ninguno si el código es correcto',
        ],
        correctAnswer: 'Generalmente uno al final es suficiente',
        correctFeedback: '¡Correcto! Un .catch() al final captura errores de cualquier punto de la cadena.',
        incorrectFeedback: 'Un solo .catch() al final protege toda la cadena. No necesitas uno por cada .then().',
      },
      {
        question: '¿Qué problema histórico resuelve el encadenamiento de Promises?',
        options: [
          'El callback hell (anidación excesiva de callbacks)',
          'La falta de variables en JavaScript',
          'Los errores de tipo',
          'La lentitud del código síncrono',
        ],
        correctAnswer: 'El callback hell (anidación excesiva de callbacks)',
        correctFeedback: '¡Correcto! El encadenamiento reemplaza la pirámide de callbacks anidados.',
        incorrectFeedback: 'El encadenamiento de Promises fue diseñado para resolver el "callback hell": la anidación excesiva de callbacks que hace el código ilegible.',
      },
      {
        question: '¿Puede un .then() en la cadena modificar los datos antes de pasarlos al siguiente?',
        options: [
          'Sí, retornando el valor transformado',
          'No, los datos son inmutables en las Promises',
          'Solo si usa spread operator',
          'No, debe retornar exactamente lo que recibió',
        ],
        correctAnswer: 'Sí, retornando el valor transformado',
        correctFeedback: '¡Correcto! Cada .then() puede transformar los datos y el siguiente recibe el nuevo valor.',
        incorrectFeedback: 'Cada .then() puede transformar datos retornando cualquier valor. El siguiente .then() recibirá ese nuevo valor.',
      },
    ],
  },
  {
    slug: 'crear-promesas',
    title: 'Crear tus propias Promises',
    module: 'Promesas',
    moduleNumber: 22,
    order: 170,
    description: 'Aprende a crear Promises personalizadas para envolver código asíncrono.',
    explanation: `Crear tus propias Promises es útil cuando necesitas "promisificar" código que usa callbacks o crear operaciones asíncronas personalizadas.

**Anatomía de una Promise:**
\`\`\`
const miPromesa = new Promise((resolve, reject) => {
  // código asíncrono aquí
  // llama resolve(valor) si todo va bien
  // llama reject(error) si algo falla
})
\`\`\`

**Casos comunes para crear Promises:**

1. **Envolver setTimeout:**
\`\`\`
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))
\`\`\`

2. **Promisificar callbacks:**
\`\`\`
const leerArchivo = (ruta) => new Promise((resolve, reject) => {
  fs.readFile(ruta, (err, data) => {
    if (err) reject(err)
    else resolve(data)
  })
})
\`\`\`

3. **Promise.resolve() y Promise.reject():**
Métodos estáticos para crear Promises ya resueltas o rechazadas.`,
    codeExample: `// Función de espera personalizada
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Usar la función
esperar(1000).then(() => console.log('Pasó 1 segundo'))

// Promise con lógica de negocio
const validarEdad = (edad) => new Promise((resolve, reject) => {
  if (typeof edad !== 'number') {
    reject(new Error('La edad debe ser un número'))
    return
  }
  if (edad < 0 || edad > 150) {
    reject(new Error('Edad fuera de rango válido'))
    return
  }
  resolve({ edad, mayorDeEdad: edad >= 18 })
})

validarEdad(25)
  .then(resultado => console.log('Válido:', resultado))
  .catch(err => console.log('Error:', err.message))

validarEdad(-5)
  .then(resultado => console.log('Válido:', resultado))
  .catch(err => console.log('Error:', err.message))

// Promise.resolve y Promise.reject para pruebas rápidas
const promesaExito = Promise.resolve({ datos: [1, 2, 3] })
const promesaFallo = Promise.reject(new Error('Datos no disponibles'))

promesaExito.then(d => console.log('Datos:', d.datos))
promesaFallo.catch(e => console.log('Fallo:', e.message))`,
    keyPoints: [
      'new Promise((resolve, reject) => {...}) crea una Promise personalizada',
      'resolve() se llama con el valor de éxito',
      'reject() se llama con el error (generalmente un objeto Error)',
      'Es buena práctica usar new Error() en lugar de strings para reject',
      'Promise.resolve() y Promise.reject() crean Promises ya establecidas',
      'La "promisificación" convierte APIs de callbacks en APIs de Promises',
    ],
    exercise: {
      description: 'Crea una función "dividir(a, b)" que retorne una Promise. Si b es 0, rechaza con un error. Si no, resuelve con el resultado de a/b. Pruébala con varios casos.',
      hint: 'Usa reject(new Error("No se puede dividir por cero")) para el caso de error.',
    },
    quiz: [
      {
        question: '¿Cuándo es útil crear una Promise personalizada?',
        options: [
          'Para envolver código con callbacks o crear operaciones asíncronas propias',
          'Solo cuando fetch no está disponible',
          'Para reemplazar variables',
          'Solo en Node.js, no en el navegador',
        ],
        correctAnswer: 'Para envolver código con callbacks o crear operaciones asíncronas propias',
        correctFeedback: '¡Correcto! Crear Promises es útil para modernizar código antiguo o crear abstracciones.',
        incorrectFeedback: 'Crear Promises es útil para convertir APIs de callbacks a Promises y para cualquier operación asíncrona personalizada.',
      },
      {
        question: '¿Qué es recomendable pasar a reject()?',
        options: [
          'Un objeto Error (new Error("mensaje"))',
          'Una cadena de texto simple',
          'El número -1',
          'null o undefined',
        ],
        correctAnswer: 'Un objeto Error (new Error("mensaje"))',
        correctFeedback: '¡Correcto! Usar new Error() incluye un stack trace útil para depurar.',
        incorrectFeedback: 'Es buena práctica pasar new Error("mensaje") a reject(), ya que incluye stack trace y es más informativo.',
      },
      {
        question: '¿Qué hace Promise.resolve(42)?',
        options: [
          'Crea una Promise ya resuelta con el valor 42',
          'Espera 42 milisegundos y luego resuelve',
          'Crea una Promise que resuelve 42 veces',
          'Convierte 42 en una cadena de texto',
        ],
        correctAnswer: 'Crea una Promise ya resuelta con el valor 42',
        correctFeedback: '¡Correcto! Promise.resolve() es un atajo para crear Promises ya cumplidas.',
        incorrectFeedback: 'Promise.resolve(42) crea inmediatamente una Promise en estado fulfilled con el valor 42.',
      },
      {
        question: '¿Qué pasa si en el executor llamas resolve() y luego reject()?',
        options: [
          'Solo resolve() tiene efecto; reject() se ignora',
          'Solo reject() tiene efecto; resolve() se ignora',
          'Ambas tienen efecto en orden',
          'La Promise queda en estado indefinido',
        ],
        correctAnswer: 'Solo resolve() tiene efecto; reject() se ignora',
        correctFeedback: '¡Correcto! El primer cambio de estado es el que cuenta.',
        incorrectFeedback: 'Solo la primera llamada (resolve o reject) tiene efecto. Las siguientes se ignoran porque el estado ya fue establecido.',
      },
      {
        question: '¿Para qué sirve la "promisificación"?',
        options: [
          'Convertir APIs de callbacks en APIs basadas en Promises',
          'Hacer las Promises más rápidas',
          'Eliminar el uso de async/await',
          'Convertir Promises en callbacks',
        ],
        correctAnswer: 'Convertir APIs de callbacks en APIs basadas en Promises',
        correctFeedback: '¡Exacto! La promisificación moderniza código antiguo que usa callbacks.',
        incorrectFeedback: 'La promisificación envuelve una API de callbacks en una Promise, permitiendo usar .then()/.catch() en lugar de callbacks.',
      },
    ],
  },
  {
    slug: 'errores-comunes-promesas',
    title: 'Errores comunes con Promesas',
    module: 'Promesas',
    moduleNumber: 22,
    order: 171,
    description: 'Identifica y evita los errores más frecuentes al trabajar con Promises en JavaScript.',
    explanation: `Trabajar con Promises tiene sus trampas. Conocerlas te ahorrará horas de depuración.

**1. Olvidar retornar la Promise en .then()**
\`\`\`
// MAL: no retorna la Promise
.then(data => {
  procesarAsync(data) // la cadena no espera esto
})

// BIEN:
.then(data => {
  return procesarAsync(data)
})
\`\`\`

**2. No añadir .catch()**
Los errores no manejados son silenciosos y peligrosos.

**3. "Promise nesting" (anidar en lugar de encadenar)**
\`\`\`
// MAL:
promesa1.then(res1 => {
  promesa2.then(res2 => { ... }) // anidado!
})

// BIEN:
promesa1.then(res1 => promesa2).then(res2 => { ... })
\`\`\`

**4. Mezclar callbacks y Promises**
Elige un estilo y úsalo consistentemente.

**5. Crear Promises innecesariamente**
Si una función ya retorna una Promise, no la envuelvas en otra.`,
    codeExample: `// ERROR 1: Olvidar return en .then()
const obtenerDatos = () => Promise.resolve([1, 2, 3])
const procesarDatos = (d) => Promise.resolve(d.map(n => n * 2))

// MAL - la cadena no espera procesarDatos
obtenerDatos()
  .then(datos => {
    procesarDatos(datos) // falta return!
  })
  .then(resultado => console.log(resultado)) // → undefined

// BIEN
obtenerDatos()
  .then(datos => procesarDatos(datos)) // con return implícito
  .then(resultado => console.log(resultado)) // → [2, 4, 6]

// ERROR 2: Promise nesting innecesario
// MAL
obtenerDatos().then(d1 => {
  procesarDatos(d1).then(d2 => {
    console.log('Mal:', d2) // anidado otra vez!
  })
})

// BIEN
obtenerDatos()
  .then(d1 => procesarDatos(d1))
  .then(d2 => console.log('Bien:', d2))

// ERROR 3: Envolver promesas innecesariamente
// MAL
const buscarUsuario = (id) => new Promise((resolve) => {
  resolve(fetch('/api/user/' + id)) // fetch ya retorna Promise!
})

// BIEN
const buscarUsuario2 = (id) => fetch('/api/user/' + id)`,
    keyPoints: [
      'Siempre retorna la Promise en .then() si necesitas que la cadena espere',
      'Siempre añade .catch() para manejar errores',
      'Encadena Promises en lugar de anidarlas',
      'No envuelvas Promises en otras Promises innecesariamente',
      'Elige entre Promises y async/await y sé consistente',
      'Depura con console.log() o las DevTools para ver el estado de las Promises',
    ],
    exercise: {
      description: 'Encuentra y corrige los dos errores en este código: una cadena de .then() que olvida retornar la Promise interna, y un .catch() que falta. Escribe la versión corregida.',
      hint: 'El return implícito funciona con funciones flecha de una línea. Para funciones de bloque { }, necesitas return explícito.',
    },
    quiz: [
      {
        question: '¿Qué pasa si olvidas retornar la Promise dentro de un .then()?',
        options: [
          'El siguiente .then() recibe undefined en lugar de esperar',
          'La cadena lanza un error',
          'La cadena espera igualmente',
          'La Promise se cancela',
        ],
        correctAnswer: 'El siguiente .then() recibe undefined en lugar de esperar',
        correctFeedback: '¡Correcto! Sin return, el .then() retorna undefined y la cadena continúa sin esperar.',
        incorrectFeedback: 'Si olvidas el return, el .then() retorna undefined implícitamente, y el siguiente .then() recibe undefined.',
      },
      {
        question: '¿Qué es el "Promise nesting" y por qué es malo?',
        options: [
          'Anidar .then() dentro de .then() en lugar de encadenar',
          'Usar muchos .then() seguidos',
          'Crear Promises dentro de funciones',
          'Mezclar .then() con async/await',
        ],
        correctAnswer: 'Anidar .then() dentro de .then() en lugar de encadenar',
        correctFeedback: '¡Correcto! El nesting recrea el callback hell que las Promises intentaban resolver.',
        incorrectFeedback: 'El Promise nesting es poner un .then() dentro de otro .then(), recreando el mismo problema del callback hell.',
      },
      {
        question: '¿Por qué es un error envolver fetch() en new Promise()?',
        options: [
          'Porque fetch ya retorna una Promise (es redundante)',
          'Porque fetch es síncrono',
          'Porque new Promise es más lento',
          'Porque .then() no funciona con fetch',
        ],
        correctAnswer: 'Porque fetch ya retorna una Promise (es redundante)',
        correctFeedback: '¡Exacto! Envolver una Promise en otra Promise es innecesario y puede causar bugs.',
        incorrectFeedback: 'fetch() ya retorna una Promise. Envolverla en new Promise() es redundante y puede crear comportamientos inesperados.',
      },
      {
        question: '¿Cuál es la forma correcta de encadenar dos Promises?',
        options: [
          '.then(res => promesa2(res)).then(res2 => usar(res2))',
          '.then(res => { promesa2(res) }).then(res2 => usar(res2))',
          '.then(res => { return; promesa2(res) }).then(...)',
          'Ambas Promises en el mismo .then()',
        ],
        correctAnswer: '.then(res => promesa2(res)).then(res2 => usar(res2))',
        correctFeedback: '¡Correcto! La función flecha sin llaves tiene return implícito.',
        incorrectFeedback: 'La forma correcta es retornar la Promise en el .then(). Con función flecha de una línea, el return es implícito.',
      },
      {
        question: '¿Cuál es el riesgo de no añadir .catch() a una cadena de Promises?',
        options: [
          'Los errores se pierden silenciosamente (unhandled rejection)',
          'El código no compila',
          'Las Promises se resuelven incorrectamente',
          'El código se ejecuta dos veces',
        ],
        correctAnswer: 'Los errores se pierden silenciosamente (unhandled rejection)',
        correctFeedback: '¡Correcto! Los errores no manejados son muy difíciles de depurar.',
        incorrectFeedback: 'Sin .catch(), los errores producen "unhandled promise rejection" y se pierden silenciosamente.',
      },
    ],
  },
]

export const jsModule22: Module = {
  number: 22,
  title: 'Promesas',
  level: 'nivel5',
  lessons: lessonsJsModule22,
}
