import type { Lesson, Module } from '@/types'

export const lessonsJsModule24: Lesson[] = [
  {
    slug: 'que-es-fetch',
    title: '¿Qué es la Fetch API?',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 180,
    description: 'Aprende qué es la Fetch API y cómo permite hacer peticiones HTTP desde el navegador.',
    explanation: `La **Fetch API** es la forma moderna de hacer peticiones HTTP desde JavaScript en el navegador.

Antes existía **XMLHttpRequest (XHR)**, que era complicada y usaba callbacks. Fetch la reemplaza con una API limpia basada en Promises.

**¿Qué puedes hacer con Fetch?**
- Obtener datos de una API (GET)
- Enviar datos a un servidor (POST, PUT, DELETE)
- Cargar archivos JSON, texto, imágenes
- Interactuar con servicios web

**Sintaxis básica:**
\`\`\`
fetch(url)               // retorna una Promise
  .then(response => ...) // respuesta HTTP
  .catch(error => ...)   // error de red
\`\`\`

**Importante:** Fetch **no lanza errores para respuestas HTTP como 404 o 500**. Solo lanza error si hay un problema de red (sin conexión, servidor inalcanzable). Debes verificar \`response.ok\` manualmente.

**Disponibilidad:** Fetch está disponible en todos los navegadores modernos y en Node.js 18+.`,
    codeExample: `// Fetch básico
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Status:', response.status) // → 200
    console.log('OK:', response.ok)         // → true
    return response.json() // parsear JSON
  })
  .then(dato => {
    console.log('Dato:', dato)
    // → { id: 1, title: "...", completed: false, ... }
  })
  .catch(error => {
    // Solo errores de RED, no HTTP 404/500
    console.error('Error de red:', error.message)
  })

// Con async/await (más legible)
async function obtenerTodo(id) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)

    if (!respuesta.ok) {
      throw new Error('Error HTTP: ' + respuesta.status)
    }

    const dato = await respuesta.json()
    console.log('Título:', dato.title)
    return dato
  } catch (error) {
    console.error('No se pudo cargar el dato:', error.message)
    return null
  }
}

obtenerTodo(1)`,
    keyPoints: [
      'Fetch es la forma moderna de hacer peticiones HTTP en JavaScript',
      'Retorna una Promise que resuelve con un objeto Response',
      'No lanza error para respuestas 404 o 500 — debes verificar response.ok',
      'Solo lanza error si hay un problema de red (sin conexión)',
      'Disponible en navegadores modernos y Node.js 18+',
      'Es mucho más simple que XMLHttpRequest (XHR)',
    ],
    exercise: {
      description: 'Usa fetch para obtener el post con id=1 de "https://jsonplaceholder.typicode.com/posts/1". Muestra el título y el cuerpo del post en la consola.',
      hint: 'Usa async/await con try/catch. Recuerda verificar response.ok antes de parsear el JSON.',
    },
    quiz: [
      {
        question: '¿Qué retorna la función fetch()?',
        options: [
          'Una Promise que resuelve con un objeto Response',
          'Los datos JSON directamente',
          'Un objeto XMLHttpRequest',
          'undefined',
        ],
        correctAnswer: 'Una Promise que resuelve con un objeto Response',
        correctFeedback: '¡Correcto! fetch() retorna una Promise con la respuesta HTTP completa.',
        incorrectFeedback: 'fetch() retorna una Promise que resuelve con un objeto Response (no los datos directamente).',
      },
      {
        question: '¿Cuándo lanza un error la función fetch()?',
        options: [
          'Solo cuando hay un problema de red (sin conexión)',
          'Cuando el servidor retorna 404',
          'Cuando el servidor retorna 500',
          'Siempre que el status no sea 200',
        ],
        correctAnswer: 'Solo cuando hay un problema de red (sin conexión)',
        correctFeedback: '¡Correcto! fetch() no lanza error para respuestas HTTP — debes verificar response.ok.',
        incorrectFeedback: 'fetch() solo lanza error si hay falla de red. Para errores HTTP (404, 500), debes verificar response.ok manualmente.',
      },
      {
        question: '¿Qué es response.ok?',
        options: [
          'Un booleano que indica si el status HTTP está entre 200 y 299',
          'El cuerpo de la respuesta',
          'El mensaje de éxito del servidor',
          'Un método para parsear JSON',
        ],
        correctAnswer: 'Un booleano que indica si el status HTTP está entre 200 y 299',
        correctFeedback: '¡Correcto! response.ok es true si el status es 2xx (éxito).',
        incorrectFeedback: 'response.ok es true cuando el status HTTP está entre 200 y 299, indicando una respuesta exitosa.',
      },
      {
        question: '¿Qué reemplaza Fetch API?',
        options: [
          'XMLHttpRequest (XHR)',
          'localStorage',
          'setTimeout',
          'JSON.parse',
        ],
        correctAnswer: 'XMLHttpRequest (XHR)',
        correctFeedback: '¡Correcto! Fetch es la alternativa moderna a XHR.',
        incorrectFeedback: 'Fetch API es la alternativa moderna y más limpia a XMLHttpRequest (XHR).',
      },
      {
        question: '¿En qué entornos está disponible fetch()?',
        options: [
          'Navegadores modernos y Node.js 18+',
          'Solo en navegadores, no en Node.js',
          'Solo en Chrome',
          'Solo en Node.js',
        ],
        correctAnswer: 'Navegadores modernos y Node.js 18+',
        correctFeedback: '¡Correcto! Fetch es universal en los entornos modernos de JavaScript.',
        incorrectFeedback: 'Fetch está disponible en todos los navegadores modernos y natively en Node.js desde la versión 18.',
      },
    ],
  },
  {
    slug: 'fetch-get',
    title: 'Peticiones GET con fetch',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 181,
    description: 'Aprende a hacer peticiones GET con fetch para obtener datos de una API.',
    explanation: `**GET** es el método HTTP para **obtener datos**. Es el método por defecto de fetch.

Una petición GET:
- No tiene cuerpo (body)
- Los parámetros van en la URL como query strings: \`?nombre=Ana&edad=25\`
- Es segura: no modifica datos en el servidor
- Es idempotente: hacerla varias veces da el mismo resultado

**Estructura de una petición GET con fetch:**
\`\`\`
const response = await fetch(url)
// response tiene:
// - response.status: número (200, 404, 500...)
// - response.ok: booleano (true si 200-299)
// - response.json(): Promise que parsea JSON
// - response.text(): Promise que retorna texto
// - response.headers: los headers de la respuesta
\`\`\`

**APIs públicas para practicar (sin API key):**
- https://jsonplaceholder.typicode.com — datos de prueba
- https://catfact.ninja/fact — datos de gatos
- https://api.coindesk.com/v1/bpi/currentprice.json — precio de Bitcoin`,
    codeExample: `// GET básico
async function obtenerPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
      throw new Error('Error: ' + res.status)
    }

    const posts = await res.json()
    console.log('Total posts:', posts.length) // → 100
    console.log('Primer post:', posts[0].title)
    return posts
  } catch (error) {
    console.error('No se pudieron cargar los posts:', error.message)
    return []
  }
}

// GET con parámetros en la URL
async function obtenerPostsDeUsuario(userId) {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId
    const res = await fetch(url)

    if (!res.ok) throw new Error('Error ' + res.status)

    const posts = await res.json()
    console.log('Posts del usuario', userId + ':', posts.length)
    return posts
  } catch (error) {
    console.error('Error al cargar posts:', error.message)
    return []
  }
}

// Llamadas
obtenerPosts()
obtenerPostsDeUsuario(1)`,
    keyPoints: [
      'GET es el método HTTP por defecto de fetch',
      'No requiere especificar el método: fetch(url) ya es GET',
      'Los parámetros van en la URL como query strings',
      'La respuesta tiene métodos como .json() y .text()',
      'Siempre verifica response.ok antes de parsear',
      'Usa APIs públicas sin API key para practicar',
    ],
    exercise: {
      description: 'Haz una petición GET a "https://jsonplaceholder.typicode.com/users" para obtener la lista de usuarios. Muestra el nombre y email de cada usuario.',
      hint: 'La respuesta es un array. Usa .forEach() o .map() para mostrar cada usuario.',
    },
    quiz: [
      {
        question: '¿Necesitas especificar method: "GET" en fetch?',
        options: [
          'No, GET es el método por defecto',
          'Sí, siempre es obligatorio',
          'Solo en Node.js',
          'Solo para APIs externas',
        ],
        correctAnswer: 'No, GET es el método por defecto',
        correctFeedback: '¡Correcto! fetch(url) hace una petición GET automáticamente.',
        incorrectFeedback: 'GET es el método por defecto de fetch. Solo necesitas especificar el método para POST, PUT, DELETE, etc.',
      },
      {
        question: '¿Cómo se pasan parámetros en una petición GET?',
        options: [
          'En la URL como query strings (?clave=valor)',
          'En el body de la petición',
          'En los headers HTTP',
          'Como argumentos de fetch()',
        ],
        correctAnswer: 'En la URL como query strings (?clave=valor)',
        correctFeedback: '¡Correcto! Los parámetros GET van en la URL: url?clave=valor&clave2=valor2.',
        incorrectFeedback: 'Las peticiones GET no tienen body. Los parámetros van en la URL como query strings.',
      },
      {
        question: '¿Qué retorna response.json()?',
        options: [
          'Una Promise que resuelve con los datos parseados',
          'Un string JSON',
          'El objeto Response directamente',
          'Los datos síncronamente',
        ],
        correctAnswer: 'Una Promise que resuelve con los datos parseados',
        correctFeedback: '¡Correcto! Por eso debes usar await response.json() o .then().',
        incorrectFeedback: 'response.json() retorna una Promise. Debes usar await (o .then()) para obtener los datos.',
      },
      {
        question: '¿Es seguro hacer varias peticiones GET al mismo endpoint?',
        options: [
          'Sí, GET es seguro e idempotente (no modifica datos)',
          'No, puede duplicar datos',
          'Solo si el servidor lo permite',
          'No, puede causar errores 429',
        ],
        correctAnswer: 'Sí, GET es seguro e idempotente (no modifica datos)',
        correctFeedback: '¡Correcto! GET solo lee datos, nunca los modifica.',
        incorrectFeedback: 'GET es un método seguro e idempotente: no modifica datos en el servidor. Puedes hacerlo múltiples veces sin efectos secundarios.',
      },
      {
        question: '¿Qué indica response.status === 200?',
        options: [
          'La petición fue exitosa',
          'La petición está en proceso',
          'Hubo un error del servidor',
          'El recurso no fue encontrado',
        ],
        correctAnswer: 'La petición fue exitosa',
        correctFeedback: '¡Correcto! Status 200 significa "OK" — la petición fue exitosa.',
        incorrectFeedback: 'HTTP status 200 significa "OK" — la petición fue exitosa y hay datos en la respuesta.',
      },
    ],
  },
  {
    slug: 'fetch-leer-json',
    title: 'Leer y procesar JSON de una API',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 182,
    description: 'Aprende a parsear, validar y procesar datos JSON obtenidos con fetch.',
    explanation: `Una vez que tienes la respuesta de fetch, necesitas **parsear el JSON** y **procesar los datos**.

**El flujo típico:**
\`\`\`
1. fetch(url)                    → Promise<Response>
2. response.json()               → Promise<datos>
3. Validar estructura de datos
4. Usar los datos
\`\`\`

**Buenas prácticas al trabajar con JSON:**

1. **Verifica response.ok antes de parsear**
2. **Valida la estructura esperada** — la API puede cambiar
3. **Maneja campos opcionales** con valores por defecto
4. **Transforma los datos** al formato que necesitas tu app

\`\`\`
// Transformar datos de la API al formato de tu app
const apiDato = { user_name: 'ana', user_age: 25 }
const appDato = {
  nombre: apiDato.user_name ?? 'Desconocido',
  edad: apiDato.user_age ?? 0,
}
\`\`\`

**JSON.parse vs response.json():**
- \`response.json()\` parsea automáticamente el body de la respuesta
- \`JSON.parse(texto)\` parsea un string manualmente`,
    codeExample: `// Parsear y procesar JSON
async function cargarProductos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('Error ' + res.status)

    const posts = await res.json() // array de objetos

    // Procesar: tomar solo los primeros 5 y formatear
    const resumenes = posts.slice(0, 5).map(post => ({
      id: post.id,
      titulo: post.title.slice(0, 40) + '...', // truncar
      usuario: post.userId,
    }))

    resumenes.forEach(r => {
      console.log(r.id + '. ' + r.titulo + ' (usuario: ' + r.usuario + ')')
    })

    return resumenes
  } catch (error) {
    console.error('Error al cargar productos:', error.message)
    return []
  }
}

// Manejar campos opcionales con valores por defecto
function transformarUsuario(apiUser) {
  return {
    id: apiUser.id ?? 0,
    nombre: apiUser.name ?? 'Sin nombre',
    email: apiUser.email ?? '',
    ciudad: apiUser.address?.city ?? 'Desconocida',
    empresa: apiUser.company?.name ?? 'Sin empresa',
  }
}

async function cargarUsuario(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  if (!res.ok) return null
  const apiUser = await res.json()
  return transformarUsuario(apiUser)
}

cargarUsuario(1).then(u => console.log('Usuario:', u))`,
    keyPoints: [
      'response.json() parsea el cuerpo de la respuesta como JSON',
      'Siempre verifica response.ok antes de llamar a response.json()',
      'Valida la estructura de los datos recibidos',
      'Usa ?? para manejar campos opcionales con valores por defecto',
      'Transforma los datos al formato que necesita tu app',
      'JSON.parse() es para strings, response.json() es para respuestas HTTP',
    ],
    exercise: {
      description: 'Carga los usuarios de "https://jsonplaceholder.typicode.com/users" y transforma cada uno para mostrar solo: nombre, email y ciudad (de address.city). Imprime la lista transformada.',
      hint: 'Usa .map() para transformar el array. Accede a user.address.city para la ciudad.',
    },
    quiz: [
      {
        question: '¿Cuándo debes llamar a response.json()?',
        options: [
          'Solo después de verificar que response.ok es true',
          'Inmediatamente después de fetch()',
          'Solo si el status es exactamente 200',
          'Antes de verificar el status',
        ],
        correctAnswer: 'Solo después de verificar que response.ok es true',
        correctFeedback: '¡Correcto! Parsear el JSON de una respuesta de error puede causar confusión.',
        incorrectFeedback: 'Siempre verifica response.ok primero. Si llamas response.json() en un error, obtendrás el cuerpo del error, no los datos esperados.',
      },
      {
        question: '¿Qué hace response.json()?',
        options: [
          'Parsea el cuerpo de la respuesta HTTP como JSON',
          'Retorna los headers en formato JSON',
          'Convierte los datos a string',
          'Valida el schema del JSON',
        ],
        correctAnswer: 'Parsea el cuerpo de la respuesta HTTP como JSON',
        correctFeedback: '¡Correcto! response.json() lee el body y lo parsea automáticamente.',
        incorrectFeedback: 'response.json() lee el cuerpo de la respuesta HTTP y lo parsea como JSON, retornando una Promise con los datos.',
      },
      {
        question: '¿Cuál es la diferencia entre response.json() y JSON.parse()?',
        options: [
          'json() es para respuestas HTTP; JSON.parse() es para strings',
          'Son exactamente iguales',
          'JSON.parse() es más moderno',
          'json() solo funciona con arrays',
        ],
        correctAnswer: 'json() es para respuestas HTTP; JSON.parse() es para strings',
        correctFeedback: '¡Correcto! response.json() lee el body HTTP; JSON.parse() parsea strings.',
        incorrectFeedback: 'response.json() es un método del objeto Response HTTP. JSON.parse() convierte un string JSON en un objeto JavaScript.',
      },
      {
        question: '¿Para qué sirve el operador ?? cuando procesas datos de API?',
        options: [
          'Para usar un valor por defecto cuando el campo es null o undefined',
          'Para comparar dos objetos',
          'Para hacer peticiones paralelas',
          'Para parsear JSON anidado',
        ],
        correctAnswer: 'Para usar un valor por defecto cuando el campo es null o undefined',
        correctFeedback: '¡Correcto! apiData.campo ?? "default" es más seguro que apiData.campo || "default".',
        incorrectFeedback: 'El operador ?? (nullish coalescing) retorna el lado derecho solo si el lado izquierdo es null o undefined.',
      },
      {
        question: '¿Por qué es buena práctica transformar datos de la API antes de usarlos?',
        options: [
          'Para aislar tu app de cambios en la estructura de la API',
          'Porque la API envía datos corruptos',
          'Para hacerlos más rápidos',
          'No es necesario, usa siempre la estructura de la API',
        ],
        correctAnswer: 'Para aislar tu app de cambios en la estructura de la API',
        correctFeedback: '¡Correcto! La transformación protege tu app de cambios en la API externa.',
        incorrectFeedback: 'Transformar datos crea una capa entre la API externa y tu app. Si la API cambia su estructura, solo actualizas la función de transformación.',
      },
    ],
  },
  {
    slug: 'errores-http-fetch',
    title: 'Manejo de errores HTTP en fetch',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 183,
    description: 'Aprende a manejar correctamente errores HTTP (404, 500, etc.) y errores de red en fetch.',
    explanation: `Fetch tiene un comportamiento peculiar con los errores HTTP: **no lanza un error para status 4xx o 5xx**. Solo lanza error si hay un problema de red.

**Tipos de error en fetch:**

**1. Error de red** (fetch lanza error automáticamente):
- Sin conexión a internet
- Servidor inalcanzable
- Timeout

**2. Error HTTP** (debes detectarlo manualmente):
- 400 Bad Request (datos inválidos)
- 401 Unauthorized (sin autenticación)
- 403 Forbidden (sin permisos)
- 404 Not Found (recurso no existe)
- 429 Too Many Requests (límite de API)
- 500 Internal Server Error (error del servidor)

**Patrón correcto:**
\`\`\`
const res = await fetch(url)
if (!res.ok) {
  throw new Error('HTTP ' + res.status)
}
const data = await res.json()
\`\`\``,
    codeExample: `// Manejo completo de errores HTTP
async function fetchConManejo(url) {
  try {
    const res = await fetch(url)

    // Manejar errores HTTP específicos
    if (res.status === 404) {
      throw new Error('Recurso no encontrado')
    }
    if (res.status === 403) {
      throw new Error('Sin permisos para acceder')
    }
    if (res.status === 429) {
      throw new Error('Demasiadas peticiones. Espera un momento.')
    }
    if (!res.ok) {
      throw new Error('Error del servidor: ' + res.status)
    }

    return await res.json()

  } catch (error) {
    // Distinguir error de red vs HTTP
    if (error instanceof TypeError) {
      // TypeError = error de red (fetch no pudo conectar)
      console.error('Sin conexión:', error.message)
      return null
    }
    // Error HTTP o de parseo
    console.error('Error:', error.message)
    throw error // relanzar para que el llamador decida
  }
}

// Uso
fetchConManejo('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Éxito:', data?.title))
  .catch(err => console.log('Fallo:', err.message))

// Error 404
fetchConManejo('https://jsonplaceholder.typicode.com/posts/99999')
  .catch(err => console.log('No encontrado:', err.message))`,
    keyPoints: [
      'fetch() NO lanza error para HTTP 404 o 500 — debes verificar response.ok',
      'Solo lanza un TypeError si hay un problema de red',
      'Verifica siempre response.ok o response.status después de fetch',
      'Puedes manejar status específicos para mensajes más descriptivos',
      'Los errores de red son instanceof TypeError',
      'Muestra mensajes amigables al usuario, no códigos HTTP técnicos',
    ],
    exercise: {
      description: 'Crea una función fetchSeguro(url) que maneje: error de red (TypeError), error 404 con mensaje "No encontrado", y otros errores HTTP con su status. Pruébala con una URL que no existe.',
      hint: 'Usa instanceof TypeError para detectar errores de red. Para HTTP, verifica res.status.',
    },
    quiz: [
      {
        question: '¿Cuándo lanza automáticamente un error fetch()?',
        options: [
          'Solo cuando hay error de red (sin conexión, timeout)',
          'Cuando el status es 404',
          'Cuando el status es 500',
          'Siempre que el status no sea 200',
        ],
        correctAnswer: 'Solo cuando hay error de red (sin conexión, timeout)',
        correctFeedback: '¡Correcto! Para errores HTTP debes verificar response.ok manualmente.',
        incorrectFeedback: 'fetch() solo lanza un error automáticamente para problemas de red. Los errores HTTP (404, 500) debes detectarlos con response.ok.',
      },
      {
        question: '¿Qué tipo de error lanza fetch() cuando no hay conexión?',
        options: [
          'TypeError',
          'NetworkError',
          'HTTPError',
          'FetchError',
        ],
        correctAnswer: 'TypeError',
        correctFeedback: '¡Correcto! Los errores de red en fetch son instancias de TypeError.',
        incorrectFeedback: 'Cuando fetch() falla por error de red, lanza un TypeError. Puedes detectarlo con error instanceof TypeError.',
      },
      {
        question: '¿Qué significa HTTP status 404?',
        options: [
          'Recurso no encontrado',
          'Sin permisos',
          'Error del servidor',
          'Petición inválida',
        ],
        correctAnswer: 'Recurso no encontrado',
        correctFeedback: '¡Correcto! 404 Not Found significa que el recurso solicitado no existe.',
        incorrectFeedback: 'HTTP 404 significa "Not Found" — el recurso solicitado no existe en el servidor.',
      },
      {
        question: '¿Por qué deberías manejar el error 429 de forma especial?',
        options: [
          'Indica que superaste el límite de peticiones de la API',
          'Indica que la API está caída',
          'Indica un error en los datos enviados',
          'Indica que no tienes conexión',
        ],
        correctAnswer: 'Indica que superaste el límite de peticiones de la API',
        correctFeedback: '¡Correcto! 429 Too Many Requests significa que excediste el rate limit de la API.',
        incorrectFeedback: 'HTTP 429 "Too Many Requests" significa que has hecho demasiadas peticiones en poco tiempo (rate limiting).',
      },
      {
        question: '¿Qué mensaje de error es más apropiado mostrar al usuario cuando hay un 500?',
        options: [
          '"No se pudo completar la operación. Intenta más tarde."',
          '"Error HTTP 500 Internal Server Error"',
          '"TypeError: Failed to fetch"',
          '"Stack trace: Error en línea 42"',
        ],
        correctAnswer: '"No se pudo completar la operación. Intenta más tarde."',
        correctFeedback: '¡Correcto! Los usuarios no necesitan saber los detalles técnicos del error.',
        incorrectFeedback: 'Los mensajes de error para usuarios deben ser amigables y sin detalles técnicos. Los detalles técnicos van a console.error().',
      },
    ],
  },
  {
    slug: 'mostrar-datos-api-dom',
    title: 'Mostrar datos de una API en el DOM',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 184,
    description: 'Aprende a renderizar en el DOM los datos obtenidos de una API con fetch.',
    explanation: `Obtener datos es solo la mitad. La otra mitad es **mostrarlos en la interfaz**.

**Flujo típico:**
\`\`\`
1. Usuario hace una acción (clic, carga de página)
2. Mostrar spinner de carga
3. fetch() → datos
4. Crear elementos HTML con los datos
5. Insertar en el DOM
6. Ocultar spinner
\`\`\`

**Formas de crear HTML con datos:**

1. **innerHTML** (simple, cuidado con XSS):
\`\`\`
contenedor.innerHTML = datos.map(item =>
  '<p>' + item.nombre + '</p>'
).join('')
\`\`\`

2. **createElement** (más seguro):
\`\`\`
datos.forEach(item => {
  const p = document.createElement('p')
  p.textContent = item.nombre // textContent es seguro
  contenedor.appendChild(p)
})
\`\`\`

**⚠️ Seguridad:** Usa **textContent** en lugar de innerHTML cuando muestras datos de usuarios o de APIs externas, para evitar XSS.`,
    codeExample: `// Renderizar lista de posts en el DOM
async function cargarYMostrarPosts(contenedorId) {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) return

  // Estado de carga
  contenedor.innerHTML = '<p>Cargando posts...</p>'

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (!res.ok) throw new Error('Error ' + res.status)

    const posts = await res.json()

    // Limpiar y renderizar
    contenedor.innerHTML = ''

    posts.forEach(post => {
      // Crear elemento de forma segura (evita XSS)
      const articulo = document.createElement('article')

      const titulo = document.createElement('h3')
      titulo.textContent = post.title // textContent = seguro

      const cuerpo = document.createElement('p')
      cuerpo.textContent = post.body

      const etiqueta = document.createElement('span')
      etiqueta.textContent = 'Usuario ' + post.userId

      articulo.appendChild(titulo)
      articulo.appendChild(cuerpo)
      articulo.appendChild(etiqueta)
      contenedor.appendChild(articulo)
    })

  } catch (error) {
    // Mensaje amigable, sin detalles técnicos
    contenedor.innerHTML = '<p>No se pudieron cargar los posts. Intenta de nuevo.</p>'
    console.error('Error técnico:', error)
  }
}

cargarYMostrarPosts('lista-posts')`,
    keyPoints: [
      'Muestra un indicador de carga antes de hacer fetch',
      'Usa textContent (no innerHTML) para datos de usuarios o APIs externas',
      'Crea elementos HTML con createElement para mayor seguridad',
      'Maneja el estado de error con un mensaje amigable en el DOM',
      'Limpia el contenedor antes de insertar nuevos datos',
      'Siempre proporciona feedback visual al usuario durante la carga',
    ],
    exercise: {
      description: 'Crea una función que cargue usuarios de la API JSONPlaceholder y los muestre como una lista. Cada elemento debe mostrar nombre y email. Incluye estado de carga y manejo de error.',
      hint: 'Usa document.createElement para cada usuario. Añade el elemento al contenedor con appendChild.',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda textContent en lugar de innerHTML para datos de APIs?',
        options: [
          'textContent no interpreta HTML, evitando ataques XSS',
          'textContent es más rápido',
          'innerHTML no funciona con datos JSON',
          'textContent soporta más caracteres',
        ],
        correctAnswer: 'textContent no interpreta HTML, evitando ataques XSS',
        correctFeedback: '¡Correcto! Si los datos contienen HTML malicioso, textContent lo muestra como texto, no lo ejecuta.',
        incorrectFeedback: 'textContent trata el contenido como texto puro, ignorando cualquier HTML. Esto previene ataques XSS cuando muestras datos externos.',
      },
      {
        question: '¿Cuál es el orden correcto para renderizar datos de una API?',
        options: [
          'Mostrar carga → fetch → renderizar datos → ocultar carga',
          'fetch → mostrar carga → renderizar → ocultar',
          'Renderizar → fetch → actualizar',
          'fetch → renderizar → mostrar carga',
        ],
        correctAnswer: 'Mostrar carga → fetch → renderizar datos → ocultar carga',
        correctFeedback: '¡Correcto! El usuario debe ver feedback inmediato antes de que lleguen los datos.',
        incorrectFeedback: 'Primero muestra el indicador de carga, luego haz fetch, luego renderiza los datos y oculta el indicador.',
      },
      {
        question: '¿Por qué debes limpiar el contenedor antes de insertar nuevos datos?',
        options: [
          'Para no acumular datos de peticiones anteriores',
          'Porque innerHTML no permite añadir más elementos',
          'Para mejorar el rendimiento',
          'No es necesario limpiarlo',
        ],
        correctAnswer: 'Para no acumular datos de peticiones anteriores',
        correctFeedback: '¡Correcto! Sin limpiar, los nuevos datos se añaden a los anteriores.',
        incorrectFeedback: 'Si no limpias el contenedor, cada nueva carga añade datos a los anteriores, resultando en datos duplicados.',
      },
      {
        question: '¿Qué debe mostrar el contenedor cuando fetch falla?',
        options: [
          'Un mensaje amigable de error para el usuario',
          'El stack trace del error',
          'Quedarse en el estado de "cargando"',
          'Una página en blanco',
        ],
        correctAnswer: 'Un mensaje amigable de error para el usuario',
        correctFeedback: '¡Correcto! El usuario debe saber que algo falló, con un mensaje que entienda.',
        incorrectFeedback: 'Cuando fetch falla, muestra un mensaje amigable en el DOM. El error técnico va a console.error().',
      },
      {
        question: '¿Qué método de DOM es más seguro para crear elementos con datos externos?',
        options: [
          'createElement + textContent',
          'innerHTML con los datos directamente',
          'document.write()',
          'outerHTML',
        ],
        correctAnswer: 'createElement + textContent',
        correctFeedback: '¡Correcto! Crear elementos manualmente con textContent es la forma más segura.',
        incorrectFeedback: 'createElement + textContent es la forma más segura. Evita interpolación de datos en innerHTML que puede llevar a XSS.',
      },
    ],
  },
  {
    slug: 'loading-estados-vacios',
    title: 'Estados de carga y listas vacías',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 185,
    description: 'Aprende a manejar estados de carga, listas vacías y errores para una experiencia de usuario completa.',
    explanation: `Una UI robusta maneja **cuatro estados** posibles:

**1. Idle:** Antes de cargar (estado inicial)
**2. Loading:** Cargando datos
**3. Success con datos:** Mostrar la lista
**4. Success vacío:** Sin resultados (empty state)
**5. Error:** Algo salió mal

El **empty state** (estado vacío) es muy importante:
- Es diferente a un error
- Ocurre cuando la API responde correctamente pero retorna un array vacío
- Muestra un mensaje útil: "No hay resultados" o "Aún no tienes publicaciones"

**Patrón completo:**
\`\`\`
if (cargando) return mostrarSpinner()
if (error) return mostrarError(error)
if (datos.length === 0) return mostrarEstadoVacio()
return mostrarLista(datos)
\`\`\``,
    codeExample: `// Manejo completo de estados
async function cargarBusqueda(termino, contenedorId) {
  const el = document.getElementById(contenedorId)

  // Estado: loading
  el.innerHTML = \`
    <div class="spinner">Buscando "\${termino}"...</div>
  \`

  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?title=' + termino
    )
    if (!res.ok) throw new Error('Error ' + res.status)
    const resultados = await res.json()

    // Estado: vacío
    if (resultados.length === 0) {
      el.innerHTML = \`
        <div class="empty-state">
          <p>No se encontraron resultados para "\${termino}"</p>
          <p>Intenta con otro término de búsqueda</p>
        </div>
      \`
      return
    }

    // Estado: con datos
    el.innerHTML = ''
    resultados.forEach(r => {
      const item = document.createElement('div')
      const titulo = document.createElement('strong')
      titulo.textContent = r.title
      item.appendChild(titulo)
      el.appendChild(item)
    })

  } catch (error) {
    // Estado: error
    el.innerHTML = \`
      <div class="error">
        No se pudo realizar la búsqueda. Intenta de nuevo.
      </div>
    \`
    console.error(error)
  }
}`,
    keyPoints: [
      'Una UI robusta maneja: idle, loading, success, empty y error',
      'El empty state es diferente al error — los datos cargaron pero están vacíos',
      'Muestra mensajes útiles en cada estado para guiar al usuario',
      'El spinner debe desaparecer en cualquier caso (usa finally)',
      'Los empty states deben ser accionables: "intenta con otro término"',
      'Nunca dejes la UI en estado "cargando" indefinidamente',
    ],
    exercise: {
      description: 'Crea una función que simule una búsqueda con tres casos: éxito con 3 items, éxito vacío (array []), y error. Muestra el estado correcto para cada caso con mensajes apropiados.',
      hint: 'Puedes simular los casos con una variable que selecciona qué Promise retornar.',
    },
    quiz: [
      {
        question: '¿Cuándo ocurre un "empty state" (estado vacío)?',
        options: [
          'Cuando la API responde exitosamente pero retorna un array vacío',
          'Cuando hay un error de red',
          'Cuando el servidor retorna 404',
          'Cuando el usuario no ha hecho ninguna acción',
        ],
        correctAnswer: 'Cuando la API responde exitosamente pero retorna un array vacío',
        correctFeedback: '¡Correcto! El empty state es una respuesta exitosa con datos vacíos.',
        incorrectFeedback: 'El empty state ocurre cuando la petición fue exitosa pero no hay datos que mostrar (array vacío).',
      },
      {
        question: '¿En qué se diferencia el empty state del estado de error?',
        options: [
          'El empty state es éxito sin datos; el error es fallo en la operación',
          'Son lo mismo, solo con mensajes diferentes',
          'El error siempre muestra datos vacíos también',
          'El empty state es temporal; el error es permanente',
        ],
        correctAnswer: 'El empty state es éxito sin datos; el error es fallo en la operación',
        correctFeedback: '¡Correcto! Distinguirlos permite dar mensajes más precisos al usuario.',
        incorrectFeedback: 'El empty state: la API respondió bien pero no hay datos. El error: algo falló en la operación (red, servidor, etc.).',
      },
      {
        question: '¿Por qué es importante el "empty state" para la UX?',
        options: [
          'Porque sin él, el usuario piensa que la app está rota',
          'Solo por estética',
          'Por razones de rendimiento',
          'Solo en aplicaciones móviles',
        ],
        correctAnswer: 'Porque sin él, el usuario piensa que la app está rota',
        correctFeedback: '¡Correcto! Un contenedor vacío sin mensaje confunde al usuario.',
        incorrectFeedback: 'Sin empty state, el usuario ve un contenedor vacío y no sabe si hay un error o si simplemente no hay datos.',
      },
      {
        question: '¿Qué debe incluir un buen mensaje de empty state?',
        options: [
          'Explicación de por qué no hay datos y qué puede hacer el usuario',
          'Solo el texto "Sin resultados"',
          'El código de respuesta de la API',
          'Un enlace de soporte técnico',
        ],
        correctAnswer: 'Explicación de por qué no hay datos y qué puede hacer el usuario',
        correctFeedback: '¡Correcto! Un buen empty state es accionable: le dice al usuario qué puede hacer.',
        incorrectFeedback: 'El mejor empty state explica la situación y sugiere acciones: "No hay posts todavía. ¡Crea el primero!"',
      },
      {
        question: '¿Con qué se verifica si una respuesta tiene datos vacíos?',
        options: [
          'datos.length === 0',
          'datos === null',
          'datos === undefined',
          'datos.isEmpty()',
        ],
        correctAnswer: 'datos.length === 0',
        correctFeedback: '¡Correcto! Si el array tiene longitud 0, no hay elementos que mostrar.',
        incorrectFeedback: 'Para verificar un array vacío, comprueba datos.length === 0. Si la API retorna null, verifica datos === null antes.',
      },
    ],
  },
  {
    slug: 'fetch-post-basico',
    title: 'Peticiones POST con fetch',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 186,
    description: 'Aprende a enviar datos a un servidor usando peticiones POST con fetch.',
    explanation: `**POST** es el método HTTP para **enviar datos** al servidor. Se usa para crear recursos, enviar formularios, etc.

A diferencia de GET, POST:
- Tiene un **body** (cuerpo) con los datos a enviar
- Los datos no van en la URL
- Crea un efecto en el servidor (no es idempotente)

**Estructura de un POST con fetch:**
\`\`\`
const respuesta = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datos),
})
\`\`\`

**Pasos importantes:**
1. Especificar \`method: 'POST'\`
2. Añadir header \`Content-Type: application/json\` para indicar que enviamos JSON
3. Usar \`JSON.stringify()\` para convertir el objeto a string JSON

**El servidor responde** generalmente con el recurso creado, incluyendo el ID asignado.`,
    codeExample: `// POST básico
async function crearPost(titulo, cuerpo, usuarioId) {
  try {
    const nuevoPost = {
      title: titulo,
      body: cuerpo,
      userId: usuarioId,
    }

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoPost),
    })

    if (!res.ok) {
      throw new Error('Error al crear post: ' + res.status)
    }

    const postCreado = await res.json()
    console.log('Post creado con ID:', postCreado.id)
    console.log('Datos:', postCreado)
    return postCreado

  } catch (error) {
    console.error('No se pudo crear el post:', error.message)
    return null
  }
}

// Llamar la función
crearPost(
  'Mi primer post',
  'Este es el contenido del post creado con fetch POST',
  1
).then(post => {
  if (post) {
    console.log('¡Post creado exitosamente!')
  }
})`,
    keyPoints: [
      'POST requiere especificar method: "POST" en las opciones de fetch',
      'El Content-Type header indica el formato de los datos enviados',
      'JSON.stringify() convierte el objeto JavaScript a string JSON',
      'El servidor generalmente responde con el recurso creado (incluyendo ID)',
      'POST no es idempotente — crear el mismo recurso dos veces crea dos copias',
      'Verifica response.ok igual que con GET',
    ],
    exercise: {
      description: 'Crea una función async que envíe un comentario a "https://jsonplaceholder.typicode.com/comments" con: postId, name, email y body. Imprime el comentario creado con su ID.',
      hint: 'Usa method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...}).',
    },
    quiz: [
      {
        question: '¿Qué header es necesario al enviar JSON en un POST?',
        options: [
          'Content-Type: application/json',
          'Accept: application/json',
          'Authorization: Bearer',
          'X-Method: POST',
        ],
        correctAnswer: 'Content-Type: application/json',
        correctFeedback: '¡Correcto! Content-Type indica al servidor qué formato tienen los datos enviados.',
        incorrectFeedback: 'Content-Type: application/json le dice al servidor que el body es JSON. Sin este header, el servidor puede no parsear correctamente los datos.',
      },
      {
        question: '¿Por qué se usa JSON.stringify() al hacer POST?',
        options: [
          'Porque fetch solo acepta strings en el body, no objetos',
          'Para comprimir los datos',
          'Para cifrar los datos',
          'Para validar el JSON',
        ],
        correctAnswer: 'Porque fetch solo acepta strings en el body, no objetos',
        correctFeedback: '¡Correcto! El body de fetch debe ser un string; JSON.stringify convierte el objeto.',
        incorrectFeedback: 'El body de fetch acepta strings, no objetos JavaScript directamente. JSON.stringify convierte el objeto a string JSON.',
      },
      {
        question: '¿Cuándo se usa POST en lugar de GET?',
        options: [
          'Cuando queremos crear o enviar datos al servidor',
          'Cuando queremos obtener datos del servidor',
          'Para buscar información',
          'Para eliminar un recurso',
        ],
        correctAnswer: 'Cuando queremos crear o enviar datos al servidor',
        correctFeedback: '¡Correcto! POST es para enviar datos y crear recursos.',
        incorrectFeedback: 'POST se usa para enviar datos al servidor (crear recursos, enviar formularios). GET es para obtener datos.',
      },
      {
        question: '¿Qué devuelve el servidor normalmente después de un POST exitoso?',
        options: [
          'El recurso creado, incluyendo el ID asignado',
          'Solo el status 200',
          'El mismo body que se envió',
          'Un token de seguridad',
        ],
        correctAnswer: 'El recurso creado, incluyendo el ID asignado',
        correctFeedback: '¡Correcto! El servidor retorna el objeto creado con sus campos generados como el ID.',
        incorrectFeedback: 'Típicamente, el servidor responde con el recurso creado, que incluye el ID asignado y otros campos generados.',
      },
      {
        question: '¿Es POST idempotente?',
        options: [
          'No, crear el mismo recurso dos veces crea dos recursos',
          'Sí, siempre produce el mismo resultado',
          'Solo en APIs REST estrictas',
          'Depende del servidor',
        ],
        correctAnswer: 'No, crear el mismo recurso dos veces crea dos recursos',
        correctFeedback: '¡Correcto! POST no es idempotente, a diferencia de GET.',
        incorrectFeedback: 'POST no es idempotente. Hacer la misma petición POST dos veces puede crear dos recursos duplicados.',
      },
    ],
  },
  {
    slug: 'headers-json-fetch',
    title: 'Headers en peticiones fetch',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 187,
    description: 'Aprende a configurar headers HTTP en tus peticiones fetch para APIs que los requieren.',
    explanation: `Los **headers HTTP** son metadatos que se envían junto con la petición. Sirven para:
- Indicar el formato de los datos (\`Content-Type\`)
- Indicar qué formato aceptas (\`Accept\`)
- Autenticación (\`Authorization\`)
- Control de caché
- API keys (aunque preferiblemente desde un backend)

**Configurar headers en fetch:**
\`\`\`
fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Mi-Header': 'valor',
  }
})
\`\`\`

**⚠️ Seguridad con API keys:**
Nunca pongas API keys secretas en el código JavaScript del frontend. Son visibles en el navegador. Para APIs que requieren autenticación:
- Usa APIs públicas sin key para practicar
- En producción, usa un backend que llama a la API y protege las keys
- Las API keys públicas (como las de demo) tienen limitaciones de uso`,
    codeExample: `// Headers comunes en fetch
async function peticionConHeaders(url, datos = null) {
  const opciones = {
    method: datos ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }

  if (datos) {
    opciones.body = JSON.stringify(datos)
  }

  const res = await fetch(url, opciones)
  if (!res.ok) throw new Error('Error ' + res.status)
  return res.json()
}

// Ver los headers de la respuesta
async function verHeadersRespuesta(url) {
  const res = await fetch(url)
  console.log('Content-Type:', res.headers.get('content-type'))
  console.log('Status:', res.status)
  console.log('Status Text:', res.statusText)
}

// Ejemplo con API que requiere Accept header
async function obtenerDatosJson(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      }
    })
    if (!res.ok) throw new Error('Error ' + res.status)
    return await res.json()
  } catch (error) {
    console.error('Error:', error.message)
    return null
  }
}

// USO CORRECTO: API pública sin key
obtenerDatosJson('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Datos:', data?.title))`,
    keyPoints: [
      'Los headers añaden metadatos a la petición HTTP',
      'Content-Type: application/json indica que envías JSON',
      'Accept: application/json indica que esperas JSON de vuelta',
      'Puedes leer los headers de la respuesta con response.headers.get()',
      'Nunca pongas API keys secretas en el frontend — son visibles en el navegador',
      'Para practicar, usa APIs públicas que no requieren autenticación',
    ],
    exercise: {
      description: 'Crea una función que haga un GET a una URL con los headers Content-Type y Accept configurados como "application/json". Luego imprime el header "content-type" de la respuesta.',
      hint: 'Usa res.headers.get("content-type") para leer el header de la respuesta.',
    },
    quiz: [
      {
        question: '¿Para qué sirve el header Content-Type: application/json?',
        options: [
          'Indica al servidor que el body de la petición está en formato JSON',
          'Indica que esperamos JSON de respuesta',
          'Autentica la petición',
          'Comprime los datos JSON',
        ],
        correctAnswer: 'Indica al servidor que el body de la petición está en formato JSON',
        correctFeedback: '¡Correcto! Content-Type describe el formato de los datos enviados.',
        incorrectFeedback: 'Content-Type indica el formato del body que estás ENVIANDO. Para indicar lo que ESPERAS recibir, usa el header Accept.',
      },
      {
        question: '¿Por qué NO debes poner API keys secretas en JavaScript del frontend?',
        options: [
          'Porque son visibles para cualquiera que inspeccione el código',
          'Porque JavaScript no soporta strings largos',
          'Porque fetch no acepta el header Authorization',
          'Porque las APIs no permiten llamadas desde el frontend',
        ],
        correctAnswer: 'Porque son visibles para cualquiera que inspeccione el código',
        correctFeedback: '¡Correcto! El JavaScript del frontend es público. Cualquiera puede verlo en DevTools.',
        incorrectFeedback: 'El código JavaScript que corre en el navegador es público. Las API keys en el frontend pueden ser robadas y usadas maliciosamente.',
      },
      {
        question: '¿Cómo se lee el header Content-Type de una respuesta?',
        options: [
          'response.headers.get("content-type")',
          'response.contentType',
          'response.getHeader("Content-Type")',
          'response.headers["Content-Type"]',
        ],
        correctAnswer: 'response.headers.get("content-type")',
        correctFeedback: '¡Correcto! El método .get() del objeto Headers es la forma correcta.',
        incorrectFeedback: 'Para leer headers de la respuesta usa response.headers.get("nombre-del-header").',
      },
      {
        question: '¿Qué alternativa existe para APIs que requieren API key en producción?',
        options: [
          'Un backend que llama a la API y protege la key',
          'Poner la key en comentarios del código',
          'Usar una variable global en JavaScript',
          'Ponerla en el localStorage',
        ],
        correctAnswer: 'Un backend que llama a la API y protege la key',
        correctFeedback: '¡Correcto! El backend actúa como proxy y mantiene la key segura.',
        incorrectFeedback: 'En producción, el backend hace las llamadas a la API usando la key guardada en variables de entorno del servidor (nunca en el frontend).',
      },
      {
        question: '¿Cuál es la forma segura de usar APIs externas para practicar?',
        options: [
          'Usar APIs públicas que no requieren autenticación',
          'Poner la API key en el código y borrarla antes de subir',
          'Usar una key de otra persona',
          'Desactivar CORS en el navegador',
        ],
        correctAnswer: 'Usar APIs públicas que no requieren autenticación',
        correctFeedback: '¡Correcto! JSONPlaceholder, catfact.ninja y otras son perfectas para practicar.',
        incorrectFeedback: 'Para aprender y practicar, usa APIs públicas sin key como JSONPlaceholder. Son seguras y sin limitaciones problemáticas.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-fetch',
    title: 'Buenas prácticas con fetch',
    module: 'Fetch API',
    moduleNumber: 24,
    order: 188,
    description: 'Aprende las mejores prácticas para usar fetch de forma robusta, segura y mantenible.',
    explanation: `Después de aprender fetch, es importante usarlo bien. Estas son las mejores prácticas:

**1. Siempre verifica response.ok**
**2. Siempre usa try/catch**
**3. Crea una función fetchHelper reutilizable:**
\`\`\`
async function apiFetch(url, opciones = {}) {
  const res = await fetch(url, opciones)
  if (!res.ok) throw new Error('HTTP ' + res.status)
  return res.json()
}
\`\`\`

**4. No pongas API keys en el frontend**
**5. Muestra estados de carga y error**
**6. Usa AbortController para cancelar peticiones si es necesario**
**7. Trata las respuestas de error de forma amigable**

**Antipatrones a evitar:**
- Hacer fetch sin verificar response.ok
- Ignorar el manejo de errores
- Poner URLs hardcoded dispersas por todo el código
- Hacer peticiones innecesarias (caché cuando sea posible)`,
    codeExample: `// Helper de fetch reutilizable
async function apiFetch(url, opciones = {}) {
  try {
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json', ...opciones.headers },
      ...opciones,
    })

    if (res.status === 404) throw new Error('Recurso no encontrado')
    if (res.status === 403) throw new Error('Sin permisos')
    if (!res.ok) throw new Error('Error HTTP: ' + res.status)

    return await res.json()
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Sin conexión a internet')
    }
    throw error
  }
}

// Usar el helper en lugar de fetch directamente
async function cargarUsuarios() {
  try {
    const usuarios = await apiFetch('https://jsonplaceholder.typicode.com/users')
    return usuarios.map(u => ({ id: u.id, nombre: u.name, email: u.email }))
  } catch (error) {
    console.error('cargarUsuarios:', error.message)
    return []
  }
}

// AbortController para cancelar peticiones
async function buscarConCancelacion(termino, signal) {
  try {
    const res = await fetch('/api/buscar?q=' + termino, { signal })
    if (!res.ok) throw new Error('Error ' + res.status)
    return await res.json()
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Búsqueda cancelada')
      return null
    }
    throw error
  }
}`,
    keyPoints: [
      'Crea un helper de fetch reutilizable para no repetir lógica de error',
      'Centraliza las URLs de la API en un solo lugar',
      'Distingue errores de red (TypeError) de errores HTTP',
      'Usa AbortController para cancelar peticiones obsoletas',
      'Nunca expongas API keys en el código frontend',
      'Proporciona mensajes de error amigables para cada tipo de fallo',
    ],
    exercise: {
      description: 'Crea tu propia función fetchHelper(url) que: verifique response.ok, distinga errores de red de HTTP, y retorne los datos o lance un error descriptivo. Úsala para cargar un post de JSONPlaceholder.',
      hint: 'if (error instanceof TypeError) significa error de red. Para HTTP usa response.ok y response.status.',
    },
    quiz: [
      {
        question: '¿Por qué es útil crear un helper de fetch reutilizable?',
        options: [
          'Para centralizar la lógica de manejo de errores y evitar repetición',
          'Porque fetch() por sí solo no funciona',
          'Para hacerlo más rápido',
          'Por requisito de JavaScript',
        ],
        correctAnswer: 'Para centralizar la lógica de manejo de errores y evitar repetición',
        correctFeedback: '¡Correcto! Un helper evita repetir if (!res.ok) en cada petición.',
        incorrectFeedback: 'Un helper reutilizable centraliza la verificación de response.ok y el manejo de errores, evitando código repetido.',
      },
      {
        question: '¿Qué es AbortController?',
        options: [
          'Una API para cancelar peticiones fetch en curso',
          'Un controlador de errores HTTP',
          'Una alternativa a fetch',
          'Un tipo de header HTTP',
        ],
        correctAnswer: 'Una API para cancelar peticiones fetch en curso',
        correctFeedback: '¡Correcto! AbortController es útil para cancelar búsquedas cuando el usuario sigue escribiendo.',
        incorrectFeedback: 'AbortController permite cancelar peticiones fetch en curso. Útil para evitar respuestas obsoletas cuando el usuario escribe rápido.',
      },
      {
        question: '¿Qué antipatrón debes evitar al usar fetch?',
        options: [
          'Hacer fetch sin verificar response.ok',
          'Usar async/await',
          'Usar try/catch',
          'Crear funciones helper',
        ],
        correctAnswer: 'Hacer fetch sin verificar response.ok',
        correctFeedback: '¡Correcto! Sin verificar response.ok, tratarás errores HTTP como éxitos.',
        incorrectFeedback: 'Hacer fetch sin verificar response.ok es peligroso: tratarás respuestas de error (404, 500) como si fueran exitosas.',
      },
      {
        question: '¿Dónde deben centralizarse las URLs de la API?',
        options: [
          'En un único lugar (constante o archivo de configuración)',
          'En cada componente que las necesite',
          'En el localStorage',
          'En comentarios del código',
        ],
        correctAnswer: 'En un único lugar (constante o archivo de configuración)',
        correctFeedback: '¡Correcto! Centralizar URLs facilita el mantenimiento cuando cambia la API.',
        incorrectFeedback: 'Las URLs deben estar en un lugar central. Si la API cambia, actualizas un solo lugar en lugar de buscar en todo el código.',
      },
      {
        question: '¿Cuál es la distinción más importante en el manejo de errores de fetch?',
        options: [
          'Errores de red (TypeError) vs errores HTTP (response.ok false)',
          'Errores síncronos vs asíncronos',
          'Errores de JSON vs errores de URL',
          'Errores de GET vs errores de POST',
        ],
        correctAnswer: 'Errores de red (TypeError) vs errores HTTP (response.ok false)',
        correctFeedback: '¡Correcto! Cada tipo de error tiene una causa y manejo diferentes.',
        incorrectFeedback: 'La distinción clave es: TypeError (sin conexión, falla de red) vs !response.ok (servidor respondió pero con error HTTP).',
      },
    ],
  },
]

export const jsModule24: Module = {
  number: 24,
  title: 'Fetch API',
  level: 'nivel5',
  lessons: lessonsJsModule24,
}
