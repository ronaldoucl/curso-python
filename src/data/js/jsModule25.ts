import type { Lesson, Module } from '@/types'

export const lessonsJsModule25: Lesson[] = [
  {
    slug: 'que-es-api-publica',
    title: '¿Qué es una API pública?',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 189,
    description: 'Aprende qué son las APIs públicas, cómo funcionan y cómo encontrarlas para tus proyectos.',
    explanation: `Una **API pública** es un servicio web que cualquier desarrollador puede usar para obtener o enviar datos.

**¿Cómo funciona?**
1. Tu código hace una petición HTTP a una URL específica
2. El servidor procesa la petición
3. El servidor retorna datos (generalmente JSON)
4. Tu código usa esos datos

**Tipos de APIs:**
- **Sin autenticación:** Abiertas a todos (JSONPlaceholder, Open Meteo)
- **Con API key gratuita:** Requieren registro pero son gratis (OpenWeatherMap free tier)
- **Con API key de pago:** Para uso comercial

**APIs públicas populares para aprender (sin key o key gratuita):**
- **JSONPlaceholder:** Datos de prueba (posts, usuarios, comentarios)
- **Open Meteo:** Clima sin API key
- **REST Countries:** Información de países
- **The Cat API:** Imágenes y datos de gatos
- **PokeAPI:** Datos de Pokémon

**⚠️ Consideraciones:**
- Las APIs tienen límites de uso (rate limits)
- Los términos de uso deben respetarse
- Para producción, considera si la API tiene SLA
- Nunca dependas de APIs gratuitas para sistemas críticos`,
    codeExample: `// Explorar una API pública: REST Countries
async function obtenerPais(nombre) {
  try {
    const url = 'https://restcountries.com/v3.1/name/' + nombre
    const res = await fetch(url)

    if (res.status === 404) {
      return null // país no encontrado
    }
    if (!res.ok) throw new Error('Error ' + res.status)

    const paises = await res.json()
    const pais = paises[0] // tomar el primero

    return {
      nombre: pais.name.common,
      capital: pais.capital?.[0] ?? 'Sin capital',
      poblacion: pais.population.toLocaleString(),
      region: pais.region,
      bandera: pais.flag, // emoji
    }
  } catch (error) {
    console.error('Error al buscar país:', error.message)
    return null
  }
}

// Usar la función
obtenerPais('mexico').then(pais => {
  if (pais) {
    console.log(pais.bandera, pais.nombre)
    console.log('Capital:', pais.capital)
    console.log('Población:', pais.poblacion)
    console.log('Región:', pais.region)
  } else {
    console.log('País no encontrado')
  }
})`,
    keyPoints: [
      'Una API pública expone datos a través de URLs que retornan JSON',
      'Existen APIs sin autenticación perfectas para aprender',
      'Las APIs tienen límites de uso que debes respetar',
      'Lee la documentación de la API antes de usarla',
      'Para producción, verifica los términos de servicio',
      'Nunca uses API keys secretas en el frontend JavaScript',
    ],
    exercise: {
      description: 'Usa la API de JSONPlaceholder para obtener todos los usuarios (GET /users) y muestra cuántos hay y los nombres de los primeros 3.',
      hint: 'fetch("https://jsonplaceholder.typicode.com/users") retorna un array. Usa .length y .slice(0,3).',
    },
    quiz: [
      {
        question: '¿Qué es una API pública?',
        options: [
          'Un servicio web que expone datos accesibles para desarrolladores',
          'Una base de datos local del navegador',
          'Un framework de JavaScript',
          'Una librería de componentes UI',
        ],
        correctAnswer: 'Un servicio web que expone datos accesibles para desarrolladores',
        correctFeedback: '¡Correcto! Las APIs públicas permiten acceder a datos externos desde tu aplicación.',
        incorrectFeedback: 'Una API pública es un servicio web con URLs que retornan datos (generalmente JSON) para que los desarrolladores los usen.',
      },
      {
        question: '¿Cuál de estas APIs NO requiere API key para uso básico?',
        options: [
          'JSONPlaceholder',
          'Stripe (pagos)',
          'Twilio (SMS)',
          'SendGrid (email)',
        ],
        correctAnswer: 'JSONPlaceholder',
        correctFeedback: '¡Correcto! JSONPlaceholder es completamente pública y perfecta para practicar.',
        incorrectFeedback: 'JSONPlaceholder es una API pública sin autenticación diseñada para pruebas y aprendizaje.',
      },
      {
        question: '¿Qué son los "rate limits" de una API?',
        options: [
          'Límites en la cantidad de peticiones que puedes hacer en un período',
          'El tamaño máximo de los datos retornados',
          'El tiempo máximo de respuesta',
          'El número máximo de usuarios permitidos',
        ],
        correctAnswer: 'Límites en la cantidad de peticiones que puedes hacer en un período',
        correctFeedback: '¡Correcto! Por ejemplo, "100 peticiones por hora" es un rate limit típico.',
        incorrectFeedback: 'Los rate limits limitan cuántas peticiones puedes hacer en un período de tiempo (ej: 100 por hora).',
      },
      {
        question: '¿Dónde debes poner una API key para que sea segura?',
        options: [
          'En el servidor (backend), nunca en el frontend',
          'En el localStorage del navegador',
          'En una variable JavaScript global',
          'En un comentario del código',
        ],
        correctAnswer: 'En el servidor (backend), nunca en el frontend',
        correctFeedback: '¡Correcto! El código frontend es público y cualquiera puede ver las keys.',
        incorrectFeedback: 'Las API keys deben estar en el servidor. El JavaScript del frontend es visible para cualquiera que inspeccione el navegador.',
      },
      {
        question: '¿Qué debes verificar antes de usar una API en producción?',
        options: [
          'Los términos de servicio y los límites del plan gratuito',
          'Solo que retorne JSON',
          'Solo que no requiera API key',
          'Solo la velocidad de respuesta',
        ],
        correctAnswer: 'Los términos de servicio y los límites del plan gratuito',
        correctFeedback: '¡Correcto! Los términos pueden prohibir ciertos usos comerciales o tener limitaciones importantes.',
        incorrectFeedback: 'Antes de producción, verifica los términos de servicio, rate limits, disponibilidad (uptime), y costo del plan que necesitas.',
      },
    ],
  },
  {
    slug: 'leer-documentacion-api',
    title: 'Leer documentación de una API',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 190,
    description: 'Aprende a leer e interpretar documentación de APIs para integrarlas correctamente.',
    explanation: `La **documentación** es el mapa de una API. Sin leerla, es difícil usarla correctamente.

**Qué buscar en la documentación:**

**1. Base URL:** La URL raíz de la API
\`\`\`
https://api.ejemplo.com/v2/
\`\`\`

**2. Endpoints:** Las rutas disponibles
\`\`\`
GET /users           → lista de usuarios
GET /users/{id}      → un usuario específico
POST /users          → crear usuario
\`\`\`

**3. Parámetros:** Qué datos acepta
\`\`\`
GET /posts?userId=1&_limit=5
\`\`\`

**4. Respuesta de ejemplo:** El formato JSON que retorna

**5. Autenticación:** Cómo autenticarse (si es necesario)

**6. Errores:** Qué significa cada código de error

**Ejercicio mental:** Antes de escribir código, lee la documentación y responde:
- ¿Cuál es la URL que necesito?
- ¿Qué parámetros acepta?
- ¿Qué formato tiene la respuesta?
- ¿Cómo se manejan los errores?`,
    codeExample: `// Ejemplo: leyendo la documentación de JSONPlaceholder
// Documentación dice:
// GET /posts         → array de posts
// GET /posts/{id}    → un post
// GET /posts?userId=1 → posts de un usuario
// Respuesta: { id, title, body, userId }

// Implementación basada en la documentación
const BASE_URL = 'https://jsonplaceholder.typicode.com'

async function obtenerPost(id) {
  // Endpoint: GET /posts/{id}
  const res = await fetch(BASE_URL + '/posts/' + id)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error ' + res.status)
  return res.json()
  // Retorna: { id, title, body, userId }
}

async function obtenerPostsDeUsuario(userId) {
  // Endpoint: GET /posts?userId={userId}
  const res = await fetch(BASE_URL + '/posts?userId=' + userId)
  if (!res.ok) throw new Error('Error ' + res.status)
  return res.json()
  // Retorna: array de { id, title, body, userId }
}

async function obtenerComentariosDePost(postId) {
  // Endpoint: GET /posts/{postId}/comments
  const res = await fetch(BASE_URL + '/posts/' + postId + '/comments')
  if (!res.ok) throw new Error('Error ' + res.status)
  return res.json()
  // Retorna: array de { id, postId, name, email, body }
}

// Prueba
obtenerPost(1).then(p => console.log('Post:', p?.title))
obtenerPostsDeUsuario(2).then(ps => console.log('Posts del usuario 2:', ps.length))`,
    keyPoints: [
      'La documentación es esencial para entender cómo usar una API',
      'Los endpoints definen las rutas disponibles (GET /users, POST /posts)',
      'Los parámetros de query string van en la URL: ?clave=valor',
      'La respuesta de ejemplo muestra el formato JSON esperado',
      'Siempre revisa cómo maneja la API los errores (qué status retorna)',
      'Centraliza la BASE_URL en una constante para fácil mantenimiento',
    ],
    exercise: {
      description: 'Lee la "documentación" implícita de JSONPlaceholder e implementa una función que obtenga todos los comentarios de un post específico (endpoint: /posts/{id}/comments). Muestra el nombre y email del primer comentario.',
      hint: 'La URL es: https://jsonplaceholder.typicode.com/posts/1/comments',
    },
    quiz: [
      {
        question: '¿Qué es la "base URL" de una API?',
        options: [
          'La URL raíz a la que se añaden los endpoints',
          'La primera URL que se probó',
          'La URL de la documentación',
          'La URL de inicio de sesión',
        ],
        correctAnswer: 'La URL raíz a la que se añaden los endpoints',
        correctFeedback: '¡Correcto! Los endpoints se construyen añadiendo rutas a la base URL.',
        incorrectFeedback: 'La base URL es la raíz común de todos los endpoints: https://api.ejemplo.com/v1/',
      },
      {
        question: '¿Qué representa {id} en un endpoint como GET /users/{id}?',
        options: [
          'Un parámetro de ruta (path parameter) que debes reemplazar con un valor',
          'Un header HTTP obligatorio',
          'Un valor fijo de la API',
          'El ID de la API key',
        ],
        correctAnswer: 'Un parámetro de ruta (path parameter) que debes reemplazar con un valor',
        correctFeedback: '¡Correcto! GET /users/42 obtendría el usuario con ID 42.',
        incorrectFeedback: '{id} es un placeholder para un valor real. GET /users/{id} con id=5 → GET /users/5.',
      },
      {
        question: '¿Por qué centralizar la BASE_URL en una constante?',
        options: [
          'Para cambiarla en un solo lugar si la API cambia de URL',
          'Porque JavaScript lo requiere',
          'Para que fetch funcione correctamente',
          'Por razones de seguridad',
        ],
        correctAnswer: 'Para cambiarla en un solo lugar si la API cambia de URL',
        correctFeedback: '¡Correcto! Si cambia la URL base, actualizas una línea en lugar de buscar en todo el código.',
        incorrectFeedback: 'Centralizar la BASE_URL facilita el mantenimiento. Si la API cambia de URL, solo actualizas la constante.',
      },
      {
        question: '¿Qué información de la documentación te dice el formato de los datos retornados?',
        options: [
          'La sección de "Respuesta de ejemplo" o "Response example"',
          'La sección de autenticación',
          'La sección de rate limits',
          'La sección de errores',
        ],
        correctAnswer: 'La sección de "Respuesta de ejemplo" o "Response example"',
        correctFeedback: '¡Correcto! El ejemplo de respuesta muestra exactamente qué campos tendrá el JSON.',
        incorrectFeedback: 'La sección de respuesta de ejemplo te muestra el JSON exacto que retornará la API.',
      },
      {
        question: '¿Cuál es la primera acción antes de usar una nueva API?',
        options: [
          'Leer su documentación',
          'Probar con fetch directamente',
          'Buscar el código en GitHub',
          'Instalar una librería',
        ],
        correctAnswer: 'Leer su documentación',
        correctFeedback: '¡Correcto! La documentación ahorra horas de prueba y error.',
        incorrectFeedback: 'Siempre lee la documentación primero. Te dice los endpoints, parámetros, autenticación y formato de respuesta.',
      },
    ],
  },
  {
    slug: 'parametros-url-api',
    title: 'Parámetros de URL en APIs',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 191,
    description: 'Aprende a usar parámetros de ruta y query strings para personalizar peticiones a APIs.',
    explanation: `Las APIs usan dos tipos de parámetros en la URL:

**1. Parámetros de ruta (Path Parameters):**
Van integrados en la URL, reemplazando partes de la ruta.
\`\`\`
GET /users/42           → usuario con ID 42
GET /posts/5/comments   → comentarios del post 5
\`\`\`

**2. Query Strings:**
Van al final de la URL después del \`?\`. Para múltiples parámetros se separan con \`&\`.
\`\`\`
GET /posts?userId=1&_limit=5&_page=2
\`\`\`

**Construir query strings en JavaScript:**
\`\`\`
// Manual (cuidado con caracteres especiales)
const url = '/buscar?q=' + termino + '&limit=' + 10

// Con URLSearchParams (recomendado)
const params = new URLSearchParams({ q: termino, limit: 10 })
const url = '/buscar?' + params.toString()
\`\`\`

**URLSearchParams** codifica automáticamente caracteres especiales (espacios, acentos, etc.). Úsalo siempre para construir query strings.`,
    codeExample: `const BASE_URL = 'https://jsonplaceholder.typicode.com'

// Parámetros de ruta
async function obtenerPost(postId) {
  const res = await fetch(BASE_URL + '/posts/' + postId)
  if (!res.ok) return null
  return res.json()
}

// Query strings manuales (funciona para casos simples)
async function obtenerPostsPaginados(pagina, limite) {
  const url = BASE_URL + '/posts?_page=' + pagina + '&_limit=' + limite
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error ' + res.status)
  return res.json()
}

// URLSearchParams (recomendado para query strings)
async function buscarPosts(opciones = {}) {
  const params = new URLSearchParams()

  if (opciones.userId) params.set('userId', opciones.userId)
  if (opciones.limite) params.set('_limit', opciones.limite)
  if (opciones.pagina) params.set('_page', opciones.pagina)

  const url = BASE_URL + '/posts?' + params.toString()
  console.log('URL:', url) // ver la URL construida

  const res = await fetch(url)
  if (!res.ok) throw new Error('Error ' + res.status)
  return res.json()
}

// Ejemplos de uso
obtenerPost(1).then(p => console.log('Post:', p?.title))
obtenerPostsPaginados(1, 5).then(ps => console.log('Posts página 1:', ps.length))
buscarPosts({ userId: 2, limite: 3 }).then(ps => console.log('Posts usuario 2:', ps.length))`,
    keyPoints: [
      'Los path parameters van integrados en la URL: /users/42',
      'Los query strings van después del ?: /posts?userId=1&limit=5',
      'URLSearchParams codifica automáticamente caracteres especiales',
      'params.set() añade un parámetro, params.toString() genera el string',
      'Construir URLs con concatenación manual puede fallar con caracteres especiales',
      'Usa URLSearchParams para cualquier query string que venga de input del usuario',
    ],
    exercise: {
      description: 'Usa URLSearchParams para construir una URL que filtre posts por userId=3 y límite de 4 resultados. Haz la petición y muestra los títulos.',
      hint: 'const params = new URLSearchParams({ userId: 3, _limit: 4 }). La URL es BASE_URL + "/posts?" + params.toString().',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre path parameters y query strings?',
        options: [
          'Path params van en la ruta (/users/42); query strings van después de ? (?id=42)',
          'Son exactamente lo mismo',
          'Query strings van en el body; path params en la URL',
          'Path params son opcionales; query strings son obligatorios',
        ],
        correctAnswer: 'Path params van en la ruta (/users/42); query strings van después de ? (?id=42)',
        correctFeedback: '¡Correcto! Cada tipo va en un lugar diferente de la URL.',
        incorrectFeedback: 'Los path parameters están integrados en la ruta (/posts/5). Los query strings van después del signo ? (/posts?userId=5).',
      },
      {
        question: '¿Por qué se recomienda URLSearchParams sobre concatenación manual?',
        options: [
          'Codifica automáticamente caracteres especiales como espacios y acentos',
          'Es más rápido para el servidor',
          'Fetch lo requiere obligatoriamente',
          'Solo funciona con URLSearchParams',
        ],
        correctAnswer: 'Codifica automáticamente caracteres especiales como espacios y acentos',
        correctFeedback: '¡Correcto! "Ana García" se convierte en "Ana+Garc%C3%ADa" automáticamente.',
        incorrectFeedback: 'URLSearchParams codifica automáticamente caracteres especiales. La concatenación manual puede generar URLs inválidas.',
      },
      {
        question: '¿Cómo se separan múltiples query strings en una URL?',
        options: [
          'Con el signo & (?clave1=val1&clave2=val2)',
          'Con coma (?clave1=val1,clave2=val2)',
          'Con punto y coma (?clave1=val1;clave2=val2)',
          'Con barra (?clave1=val1/clave2=val2)',
        ],
        correctAnswer: 'Con el signo & (?clave1=val1&clave2=val2)',
        correctFeedback: '¡Correcto! El & separa los pares clave=valor en la query string.',
        incorrectFeedback: 'Los parámetros en query strings se separan con &: ?name=Ana&age=25&city=Madrid.',
      },
      {
        question: '¿Qué hace params.toString() en URLSearchParams?',
        options: [
          'Genera el string de query params listo para añadir a la URL',
          'Convierte los params a JSON',
          'Valida que los params sean correctos',
          'Codifica los params en Base64',
        ],
        correctAnswer: 'Genera el string de query params listo para añadir a la URL',
        correctFeedback: '¡Correcto! Retorna algo como "userId=1&_limit=5" listo para usar en la URL.',
        incorrectFeedback: 'params.toString() genera el string "clave1=val1&clave2=val2" que puedes añadir después del ? en la URL.',
      },
      {
        question: '¿Qué URL construye: new URLSearchParams({q: "hola mundo", limit: 5}).toString()?',
        options: [
          'q=hola+mundo&limit=5',
          'q=hola mundo&limit=5',
          '{q: "hola mundo", limit: 5}',
          'q=hola%20mundo,limit=5',
        ],
        correctAnswer: 'q=hola+mundo&limit=5',
        correctFeedback: '¡Correcto! Los espacios se codifican como + en query strings.',
        incorrectFeedback: 'URLSearchParams codifica espacios como + en el formato de query string. Genera: q=hola+mundo&limit=5.',
      },
    ],
  },
  {
    slug: 'query-strings-api',
    title: 'Búsqueda y filtros con query strings',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 192,
    description: 'Aprende a implementar búsqueda y filtros usando query strings con APIs reales.',
    explanation: `La mayoría de APIs permiten **filtrar, buscar y paginar** resultados usando query strings.

**Patrones comunes:**

**Búsqueda:**
\`\`\`
GET /posts?q=javascript    → buscar posts que contengan "javascript"
GET /users?name=Ana        → filtrar usuarios por nombre
\`\`\`

**Filtrado:**
\`\`\`
GET /posts?userId=1        → posts de un usuario específico
GET /products?category=tech&minPrice=100
\`\`\`

**Paginación:**
\`\`\`
GET /posts?_page=2&_limit=10    → página 2, 10 por página
\`\`\`

**Ordenamiento:**
\`\`\`
GET /posts?_sort=date&_order=desc
\`\`\`

**Implementación de búsqueda con debounce:**
Cuando el usuario escribe en un campo de búsqueda, no debes hacer una petición por cada letra. Usa un **debounce** para esperar a que deje de escribir.`,
    codeExample: `const BASE_URL = 'https://jsonplaceholder.typicode.com'

// Búsqueda con filtros combinados
async function buscarConFiltros(filtros = {}) {
  const params = new URLSearchParams()

  // Añadir solo los filtros que se proporcionaron
  if (filtros.userId) params.set('userId', filtros.userId)
  if (filtros.limite) params.set('_limit', filtros.limite)
  if (filtros.pagina) params.set('_page', filtros.pagina)

  const url = BASE_URL + '/posts?' + params.toString()

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Error ' + res.status)
    return await res.json()
  } catch (error) {
    console.error('Error en búsqueda:', error.message)
    return []
  }
}

// Implementar debounce para búsqueda en tiempo real
function crearDebounce(fn, espera) {
  let temporizador
  return function(...args) {
    clearTimeout(temporizador)
    temporizador = setTimeout(() => fn(...args), espera)
  }
}

// Función de búsqueda con debounce (espera 300ms después de escribir)
const buscarConDebounce = crearDebounce(async (termino) => {
  if (!termino.trim()) {
    console.log('Escribe algo para buscar')
    return
  }
  console.log('Buscando:', termino)
  const resultados = await buscarConFiltros({ userId: 1, limite: 5 })
  console.log('Resultados:', resultados.length)
}, 300)

// Ejemplos
buscarConFiltros({ userId: 1 }).then(r => console.log('Posts usuario 1:', r.length))
buscarConFiltros({ limite: 3, pagina: 2 }).then(r => console.log('Página 2:', r.length))`,
    keyPoints: [
      'La mayoría de APIs soportan búsqueda y filtros por query strings',
      'Combina múltiples filtros añadiendo múltiples query params',
      'Solo incluye en la URL los filtros que el usuario especificó',
      'Debounce evita hacer una petición por cada letra que el usuario escribe',
      'La paginación reduce la cantidad de datos retornados por petición',
      'Cada API tiene su propia convención de nombres para los parámetros',
    ],
    exercise: {
      description: 'Crea una función "paginar(pagina, porPagina)" que use URLSearchParams para hacer paginación en el endpoint /posts de JSONPlaceholder. Muestra los títulos de los posts de la página solicitada.',
      hint: 'Usa _page y _limit como query params. JSONPlaceholder los soporta.',
    },
    quiz: [
      {
        question: '¿Para qué sirve el "debounce" en una búsqueda?',
        options: [
          'Para esperar a que el usuario deje de escribir antes de hacer la petición',
          'Para hacer la búsqueda más rápida',
          'Para cachear los resultados',
          'Para cancelar búsquedas fallidas',
        ],
        correctAnswer: 'Para esperar a que el usuario deje de escribir antes de hacer la petición',
        correctFeedback: '¡Correcto! Sin debounce harías una petición por cada letra tecleada.',
        incorrectFeedback: 'Debounce evita hacer demasiadas peticiones. Espera X ms después de la última tecla antes de buscar.',
      },
      {
        question: '¿Cuál es la forma correcta de añadir filtros opcionales a una URL?',
        options: [
          'Solo añadir los query params que tienen valor definido',
          'Siempre incluir todos los params aunque estén vacíos',
          'Poner "null" para los filtros no usados',
          'Usar path params en lugar de query strings',
        ],
        correctAnswer: 'Solo añadir los query params que tienen valor definido',
        correctFeedback: '¡Correcto! Un parámetro vacío o undefined en la URL puede confundir a la API.',
        incorrectFeedback: 'Solo añade a la URL los query params que el usuario especificó. Los vacíos pueden causar comportamiento inesperado en la API.',
      },
      {
        question: '¿Qué permite la paginación en una API?',
        options: [
          'Obtener resultados en partes para no cargar todo a la vez',
          'Ordenar los resultados alfabéticamente',
          'Filtrar por categoría',
          'Buscar por texto',
        ],
        correctAnswer: 'Obtener resultados en partes para no cargar todo a la vez',
        correctFeedback: '¡Correcto! La paginación mejora el rendimiento y la experiencia de usuario.',
        incorrectFeedback: 'La paginación divide los resultados en páginas. En lugar de recibir 1000 items, recibes 20 a la vez.',
      },
      {
        question: '¿Son iguales los nombres de query params en todas las APIs?',
        options: [
          'No, cada API tiene su propia convención',
          'Sí, todos usan ?page=1&limit=10',
          'Sí, el estándar HTTP los define',
          'No importa, fetch los traduce',
        ],
        correctAnswer: 'No, cada API tiene su propia convención',
        correctFeedback: '¡Correcto! Algunas usan ?page=1, otras ?_page=1, otras ?offset=0. Revisa la documentación.',
        incorrectFeedback: 'Cada API define sus propios nombres de parámetros. Siempre revisa la documentación para conocer los nombres correctos.',
      },
      {
        question: '¿Cuándo deberías hacer paginación en lugar de cargar todos los datos?',
        options: [
          'Cuando el conjunto de datos puede ser muy grande',
          'Solo cuando la API lo requiere',
          'Nunca, siempre es mejor cargar todo',
          'Solo en aplicaciones móviles',
        ],
        correctAnswer: 'Cuando el conjunto de datos puede ser muy grande',
        correctFeedback: '¡Correcto! Cargar miles de registros a la vez es lento y consume mucha memoria.',
        incorrectFeedback: 'Usa paginación cuando los datos pueden ser muchos. Cargar todo a la vez es lento y puede degradar la experiencia.',
      },
    ],
  },
  {
    slug: 'headers-api-keys-js',
    title: 'API keys: seguridad en el frontend',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 193,
    description: 'Aprende por qué las API keys no deben ir en el frontend y cómo usar APIs seguras para aprender.',
    explanation: `Este es un tema crítico de seguridad que todo desarrollador web debe entender.

**El problema:**
El código JavaScript que corre en el navegador es **completamente público**. Cualquier persona puede:
- Abrir DevTools → Sources y ver tu código
- Ver los headers de las peticiones en la pestaña Network
- Extraer cualquier API key que pongas ahí

**Consecuencias de exponer una API key:**
- Alguien usa tu key para consumir la API a tu costa
- Excedes tu límite de uso o recibes facturas enormes
- Violas los términos de servicio de la API
- Comprometes datos de usuarios

**La solución correcta (para producción):**
\`\`\`
Frontend (navegador)  →  Tu backend  →  API externa
                         (guarda la key)
\`\`\`

**Para aprender (sin backend):**
- Usa APIs que no requieren key: JSONPlaceholder, REST Countries, Open Meteo
- Algunas APIs ofrecen claves de "demo" con limitaciones, solo para pruebas
- Nunca subas código con keys reales a GitHub

**Resumen de reglas:**
1. API keys secretas → solo en el servidor
2. Para aprender → usa APIs sin autenticación
3. Nunca en código que subes a repositorios públicos`,
    codeExample: `// INCORRECTO: nunca hagas esto
const API_KEY = 'sk-abc123...' // visible para todos en DevTools
fetch('https://api.servicio.com/datos', {
  headers: { 'Authorization': 'Bearer ' + API_KEY } // ⚠️ expuesto!
})

// CORRECTO para aprender: APIs sin autenticación
async function obtenerClimaActual(ciudad) {
  // Open Meteo: clima real sin API key
  // Primero necesitamos las coordenadas de la ciudad
  // Esta demo usa coordenadas hardcoded de Ciudad de México
  const lat = 19.4326
  const lon = -99.1332

  try {
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current_weather: true,
    })

    const url = 'https://api.open-meteo.com/v1/forecast?' + params.toString()
    const res = await fetch(url)
    if (!res.ok) throw new Error('Error ' + res.status)

    const datos = await res.json()
    const clima = datos.current_weather

    return {
      temperatura: clima.temperature + '°C',
      viento: clima.windspeed + ' km/h',
      ciudad: ciudad,
    }
  } catch (error) {
    console.error('Error al obtener clima:', error.message)
    return null
  }
}

// Usar la API de clima (sin API key)
obtenerClimaActual('Ciudad de México').then(clima => {
  if (clima) {
    console.log('Clima en ' + clima.ciudad + ':')
    console.log('Temperatura:', clima.temperatura)
    console.log('Viento:', clima.viento)
  }
})`,
    keyPoints: [
      'El JavaScript del frontend es público — cualquiera puede verlo',
      'Nunca pongas API keys secretas en código JavaScript del navegador',
      'En producción, usa un backend para hacer llamadas autenticadas a APIs',
      'Para aprender, usa APIs sin autenticación como Open Meteo o REST Countries',
      'Nunca subas API keys a repositorios públicos en GitHub',
      'Si expusiste una key accidentalmente, revócala inmediatamente',
    ],
    exercise: {
      description: 'Usa la API de Open Meteo (sin key) para obtener el clima de cualquier ciudad. La URL es: https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true. Muestra la temperatura y velocidad del viento.',
      hint: 'Busca las coordenadas de tu ciudad. Open Meteo no requiere API key.',
    },
    quiz: [
      {
        question: '¿Por qué es peligroso poner una API key en JavaScript del frontend?',
        options: [
          'Porque cualquiera puede verla en las DevTools del navegador',
          'Porque JavaScript no soporta strings largos',
          'Porque fetch no acepta headers de autorización',
          'Porque las APIs bloquean peticiones del navegador',
        ],
        correctAnswer: 'Porque cualquiera puede verla en las DevTools del navegador',
        correctFeedback: '¡Correcto! El código frontend es completamente público.',
        incorrectFeedback: 'El JavaScript en el navegador es público. Cualquiera puede abrir DevTools y ver el código, incluyendo las API keys.',
      },
      {
        question: '¿Cuál es la arquitectura correcta para APIs que requieren autenticación?',
        options: [
          'Frontend → Tu backend → API externa (backend guarda la key)',
          'Frontend → API externa con key en el código',
          'API externa → Frontend → Tu backend',
          'Frontend → localStorage → API externa',
        ],
        correctAnswer: 'Frontend → Tu backend → API externa (backend guarda la key)',
        correctFeedback: '¡Correcto! El backend actúa como proxy seguro.',
        incorrectFeedback: 'El patrón correcto es usar tu backend como intermediario. El frontend llama a tu backend, que usa la key protegida para llamar a la API.',
      },
      {
        question: '¿Qué debes hacer si accidentalmente subiste una API key a GitHub?',
        options: [
          'Revocarla inmediatamente en el proveedor de la API',
          'Borrar el commit y esperar',
          'Hacer el repositorio privado',
          'Cambiar el nombre de la variable',
        ],
        correctAnswer: 'Revocarla inmediatamente en el proveedor de la API',
        correctFeedback: '¡Correcto! Una vez expuesta en GitHub, debes asumir que alguien la vio. Revócala.',
        incorrectFeedback: 'Si expones una key en un repositorio público, debes revocarla inmediatamente. Borrar el commit no es suficiente (el historial queda).',
      },
      {
        question: '¿Qué tipo de APIs son seguras para usar directamente desde el frontend?',
        options: [
          'APIs públicas sin autenticación como Open Meteo o REST Countries',
          'Cualquier API con HTTPS',
          'APIs con keys de prueba ilimitadas',
          'Ninguna, siempre usa un backend',
        ],
        correctAnswer: 'APIs públicas sin autenticación como Open Meteo o REST Countries',
        correctFeedback: '¡Correcto! Las APIs sin autenticación son perfectamente seguras desde el frontend.',
        incorrectFeedback: 'Las APIs sin autenticación pueden llamarse directamente desde el frontend. La clave es que no expones información secreta.',
      },
      {
        question: '¿Es seguro poner una API key en el localStorage del navegador?',
        options: [
          'No, el localStorage también es accesible desde JavaScript y puede ser leído',
          'Sí, el localStorage está cifrado',
          'Sí, solo tu código puede acceder al localStorage',
          'Solo si usas HTTPS',
        ],
        correctAnswer: 'No, el localStorage también es accesible desde JavaScript y puede ser leído',
        correctFeedback: '¡Correcto! localStorage es accesible desde cualquier JavaScript en la página, incluyendo scripts maliciosos.',
        incorrectFeedback: 'El localStorage no es seguro para API keys. Es accesible desde JavaScript y puede ser leído por scripts de terceros o ataques XSS.',
      },
    ],
  },
  {
    slug: 'limites-errores-apis',
    title: 'Rate limits y errores de APIs reales',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 194,
    description: 'Aprende a manejar rate limits, timeouts y errores comunes al consumir APIs reales.',
    explanation: `Las APIs reales tienen **restricciones y comportamientos** que debes conocer:

**Rate Limits (límites de tasa):**
- Limitan cuántas peticiones puedes hacer en un período
- Ejemplo: 100 peticiones por hora, 1000 por día
- El servidor responde con **HTTP 429 Too Many Requests**

**Timeouts:**
- Si la API tarda demasiado, la petición puede "colgar"
- Puedes cancelar la petición con AbortController

**Reintentos (Retry):**
- Para errores transitorios (429, 503), puedes reintentar después de esperar
- Patrón: **exponential backoff** — esperar más tiempo en cada reintento

**Errores comunes en producción:**
- **429:** Too Many Requests — espera y reintenta
- **503:** Service Unavailable — servidor temporalmente caído
- **504:** Gateway Timeout — el servidor tardó demasiado
- **CORS Error:** La API no permite peticiones desde tu dominio

**Mensajes amigables para el usuario:**
Traduce los errores técnicos a mensajes que el usuario entienda.`,
    codeExample: `// Manejo de rate limits y timeouts
async function fetchConTimeout(url, opciones = {}, timeoutMs = 5000) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(url, { ...opciones, signal: controller.signal })
    clearTimeout(timeout)

    if (res.status === 429) {
      const reintentarEn = res.headers.get('Retry-After') || 60
      throw new Error('Límite de peticiones alcanzado. Espera ' + reintentarEn + ' segundos.')
    }

    if (res.status === 503) {
      throw new Error('El servicio no está disponible. Intenta más tarde.')
    }

    if (!res.ok) {
      throw new Error('Error del servidor: ' + res.status)
    }

    return await res.json()

  } catch (error) {
    clearTimeout(timeout)

    if (error.name === 'AbortError') {
      throw new Error('La petición tardó demasiado. Verifica tu conexión.')
    }

    throw error
  }
}

// Mensajes amigables por tipo de error
function mensajeDeError(error) {
  if (error instanceof TypeError) return 'Sin conexión a internet'
  if (error.message.includes('429')) return 'Demasiadas peticiones. Espera un momento.'
  if (error.message.includes('503')) return 'Servicio temporalmente no disponible'
  if (error.message.includes('504')) return 'El servidor tardó demasiado en responder'
  return 'No se pudo completar la operación. Intenta de nuevo.'
}

// Uso
fetchConTimeout('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Éxito:', data.title))
  .catch(error => console.log(mensajeDeError(error)))`,
    keyPoints: [
      'HTTP 429 significa que superaste el rate limit de la API',
      'AbortController permite cancelar peticiones que tardan demasiado',
      'El patrón exponential backoff espera más tiempo en cada reintento',
      'Los errores 503 y 504 son transitorios — vale la pena reintentar',
      'Los errores CORS impiden peticiones desde dominios no autorizados',
      'Traduce errores técnicos a mensajes amigables para el usuario',
    ],
    exercise: {
      description: 'Implementa una función fetchConTimeout(url, ms) que cancele la petición si tarda más de "ms" milisegundos usando AbortController. Si se cancela, muestra un mensaje amigable.',
      hint: 'Usa AbortController. El setTimeout llama a controller.abort(). En el catch, verifica error.name === "AbortError".',
    },
    quiz: [
      {
        question: '¿Qué significa el error HTTP 429?',
        options: [
          'Too Many Requests — superaste el límite de peticiones',
          'Too Many Users — demasiados usuarios conectados',
          'Bad Request — datos inválidos enviados',
          'Not Found — recurso no existe',
        ],
        correctAnswer: 'Too Many Requests — superaste el límite de peticiones',
        correctFeedback: '¡Correcto! 429 significa que excediste el rate limit de la API.',
        incorrectFeedback: 'HTTP 429 "Too Many Requests" indica que has hecho más peticiones de las permitidas en el período de tiempo.',
      },
      {
        question: '¿Para qué sirve AbortController con fetch?',
        options: [
          'Para cancelar una petición en curso (timeout o cambio de usuario)',
          'Para reintentar peticiones fallidas',
          'Para autenticar peticiones',
          'Para comprimir los datos enviados',
        ],
        correctAnswer: 'Para cancelar una petición en curso (timeout o cambio de usuario)',
        correctFeedback: '¡Correcto! AbortController.abort() cancela la petición y lanza un AbortError.',
        incorrectFeedback: 'AbortController permite cancelar peticiones fetch. Útil para timeouts o cuando el usuario navega a otra página.',
      },
      {
        question: '¿Qué es el "exponential backoff"?',
        options: [
          'Esperar cada vez más tiempo entre reintentos (1s, 2s, 4s, 8s...)',
          'Reintentar inmediatamente al fallar',
          'Cancelar la petición después de 3 fallos',
          'Reducir la cantidad de datos por petición',
        ],
        correctAnswer: 'Esperar cada vez más tiempo entre reintentos (1s, 2s, 4s, 8s...)',
        correctFeedback: '¡Correcto! El tiempo exponencial evita saturar el servidor que ya está bajo presión.',
        incorrectFeedback: 'Exponential backoff: esperar 1s, luego 2s, luego 4s, etc. Reduce la presión sobre un servidor con problemas.',
      },
      {
        question: '¿Qué error de navegador indica que la API no permite peticiones desde tu dominio?',
        options: [
          'Error de CORS (Cross-Origin Resource Sharing)',
          'Error 404 Not Found',
          'Error 403 Forbidden',
          'TypeError: Failed to fetch',
        ],
        correctAnswer: 'Error de CORS (Cross-Origin Resource Sharing)',
        correctFeedback: '¡Correcto! CORS es un mecanismo de seguridad del navegador para peticiones entre dominios.',
        incorrectFeedback: 'Los errores CORS ocurren cuando una API no permite peticiones desde tu dominio. El servidor debe incluir headers CORS para permitirlo.',
      },
      {
        question: '¿Cómo debes comunicar un error 429 al usuario?',
        options: [
          'Con un mensaje como "Espera un momento antes de intentar de nuevo"',
          'Mostrando el código 429 directamente',
          'Ignorándolo silenciosamente',
          'Con el header Retry-After completo',
        ],
        correctAnswer: 'Con un mensaje como "Espera un momento antes de intentar de nuevo"',
        correctFeedback: '¡Correcto! Los usuarios no entienden los códigos HTTP técnicos.',
        incorrectFeedback: 'Los usuarios no entienden "429 Too Many Requests". Tradúcelo: "Espera un momento antes de intentar de nuevo."',
      },
    ],
  },
  {
    slug: 'renderizar-listas-api',
    title: 'Renderizar listas dinámicas desde una API',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 195,
    description: 'Aprende a construir listas dinámicas en el DOM con datos de una API real.',
    explanation: `Renderizar listas es una de las tareas más comunes al consumir APIs. El patrón es:

**1. Cargar datos** → array de objetos
**2. Crear elementos HTML** → un elemento por ítem
**3. Insertar en el DOM** → dentro del contenedor

**Opciones para renderizar:**

**Con innerHTML (simple pero menos seguro):**
\`\`\`
const html = items.map(item =>
  '<li class="item">' + item.nombre + '</li>'
).join('')
lista.innerHTML = html
\`\`\`

**Con createElement (más seguro):**
\`\`\`
items.forEach(item => {
  const li = document.createElement('li')
  li.textContent = item.nombre
  lista.appendChild(li)
})
\`\`\`

**Consideraciones importantes:**
- Siempre muestra un estado de carga mientras se cargan los datos
- Maneja el caso de lista vacía con un mensaje apropiado
- Si el usuario puede interactuar con los elementos (clic, borrar), añade los event listeners
- Para listas grandes, considera cargar más datos al llegar al final (infinite scroll)`,
    codeExample: `// Renderizar lista de posts desde la API
async function renderizarPosts(contenedorId, opciones = {}) {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) return

  // Mostrar carga
  contenedor.innerHTML = '<p style="color: gray">Cargando...</p>'

  try {
    const params = new URLSearchParams({ _limit: opciones.limite || 5 })
    if (opciones.userId) params.set('userId', opciones.userId)

    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?' + params.toString()
    )
    if (!res.ok) throw new Error('Error ' + res.status)
    const posts = await res.json()

    // Estado vacío
    if (posts.length === 0) {
      contenedor.innerHTML = '<p>No hay posts disponibles</p>'
      return
    }

    // Renderizar lista
    contenedor.innerHTML = ''
    const lista = document.createElement('ul')

    posts.forEach(post => {
      const item = document.createElement('li')

      const titulo = document.createElement('strong')
      titulo.textContent = post.title

      const meta = document.createElement('small')
      meta.textContent = ' · Post #' + post.id + ' · Usuario ' + post.userId

      item.appendChild(titulo)
      item.appendChild(meta)
      lista.appendChild(item)
    })

    contenedor.appendChild(lista)
    console.log('Renderizados', posts.length, 'posts')

  } catch (error) {
    contenedor.innerHTML = '<p style="color: red">No se pudieron cargar los posts</p>'
    console.error(error)
  }
}

renderizarPosts('contenedor', { limite: 5, userId: 1 })`,
    keyPoints: [
      'El patrón: cargar datos → crear elementos → insertar en DOM',
      'Usa textContent para insertar texto de APIs de forma segura (evita XSS)',
      'Limpia el contenedor antes de renderizar para evitar duplicados',
      'Maneja siempre el estado de carga, vacío y error',
      'Para listas interactivas, añade event listeners a cada elemento',
      'Para listas grandes, implementa paginación o carga infinita',
    ],
    exercise: {
      description: 'Carga los primeros 5 usuarios de JSONPlaceholder y renderiza una lista con nombre, email y ciudad (address.city) de cada uno. Incluye estado de carga y error.',
      hint: 'Usa fetch("/users?_limit=5"). Para cada usuario crea un div con tres párrafos.',
    },
    quiz: [
      {
        question: '¿Por qué se usa textContent en lugar de innerHTML para renderizar datos de API?',
        options: [
          'textContent trata el contenido como texto puro, previniendo XSS',
          'innerHTML no soporta caracteres especiales',
          'textContent es más rápido en listas largas',
          'innerHTML no funciona dentro de forEach',
        ],
        correctAnswer: 'textContent trata el contenido como texto puro, previniendo XSS',
        correctFeedback: '¡Correcto! Si los datos contienen HTML malicioso, textContent lo muestra sin ejecutarlo.',
        incorrectFeedback: 'textContent inserta el contenido como texto literal. Si el dato contiene <script>, lo muestra como texto, no lo ejecuta.',
      },
      {
        question: '¿Cuándo debes limpiar el contenedor antes de renderizar?',
        options: [
          'Siempre, para evitar acumular elementos de cargas anteriores',
          'Solo cuando la lista tiene más de 10 elementos',
          'Nunca, mejor añadir al final',
          'Solo cuando hay errores',
        ],
        correctAnswer: 'Siempre, para evitar acumular elementos de cargas anteriores',
        correctFeedback: '¡Correcto! Sin limpiar, cada carga añade más elementos al contenedor.',
        incorrectFeedback: 'Siempre limpia el contenedor antes de renderizar nueva data, de lo contrario los elementos se acumulan.',
      },
      {
        question: '¿Qué método añade un elemento hijo al final de otro elemento?',
        options: [
          'appendChild()',
          'insertChild()',
          'addElement()',
          'pushChild()',
        ],
        correctAnswer: 'appendChild()',
        correctFeedback: '¡Correcto! padre.appendChild(hijo) añade el hijo al final del padre.',
        incorrectFeedback: 'El método correcto es appendChild(). Ejemplo: lista.appendChild(item) añade item al final de lista.',
      },
      {
        question: '¿Qué es el "infinite scroll"?',
        options: [
          'Cargar más datos automáticamente cuando el usuario llega al final de la lista',
          'Una animación CSS que hace la lista infinita',
          'Una API que retorna infinitos resultados',
          'Un tipo especial de paginación con botones',
        ],
        correctAnswer: 'Cargar más datos automáticamente cuando el usuario llega al final de la lista',
        correctFeedback: '¡Correcto! Es una alternativa a la paginación con botones.',
        incorrectFeedback: 'El infinite scroll detecta cuando el usuario llega al final de la lista y carga automáticamente más datos.',
      },
      {
        question: '¿Cómo añades interactividad (ej: clic) a cada elemento de una lista renderizada?',
        options: [
          'Con addEventListener en cada elemento creado con createElement',
          'Con un solo listener global en el body',
          'Con el atributo onclick en el HTML generado',
          'No es posible en listas dinámicas',
        ],
        correctAnswer: 'Con addEventListener en cada elemento creado con createElement',
        correctFeedback: '¡Correcto! Cada elemento puede tener su propio event listener.',
        incorrectFeedback: 'Puedes añadir elemento.addEventListener("click", fn) a cada elemento creado dinámicamente.',
      },
    ],
  },
  {
    slug: 'buscador-con-api',
    title: 'Buscador conectado a una API',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 196,
    description: 'Construye un buscador funcional que consulta una API real con cada búsqueda.',
    explanation: `Un **buscador conectado a una API** es una de las funcionalidades más comunes en aplicaciones web modernas.

**Componentes de un buscador:**
1. **Input de texto** — donde el usuario escribe
2. **Debounce** — evita peticiones por cada letra
3. **fetch** — consulta la API con el término de búsqueda
4. **Renderizado** — muestra los resultados
5. **Estados** — carga, vacío y error

**Flujo completo:**
\`\`\`
Usuario escribe → debounce (300ms) → fetch con ?q=termino
→ si resultados → renderizar lista
→ si vacío → mostrar "sin resultados"
→ si error → mostrar mensaje de error
\`\`\`

**Mejoras opcionales:**
- Resaltar el término buscado en los resultados
- Mostrar cuántos resultados se encontraron
- Permitir borrar la búsqueda con un botón X
- Navegar con teclado por los resultados`,
    codeExample: `// Buscador completo con API
function crearBuscador(contenedorId) {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) return

  // Crear la UI del buscador
  contenedor.innerHTML = \`
    <div>
      <input id="input-busqueda" type="text" placeholder="Buscar posts..." />
      <div id="resultados-busqueda"></div>
    </div>
  \`

  const input = document.getElementById('input-busqueda')
  const resultados = document.getElementById('resultados-busqueda')

  // Función de búsqueda
  async function buscar(termino) {
    if (!termino.trim()) {
      resultados.textContent = 'Escribe para buscar'
      return
    }

    resultados.textContent = 'Buscando "' + termino + '"...'

    try {
      // JSONPlaceholder no tiene búsqueda real, usamos userId como demo
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3'
      )
      if (!res.ok) throw new Error('Error ' + res.status)
      const posts = await res.json()

      if (posts.length === 0) {
        resultados.textContent = 'Sin resultados para "' + termino + '"'
        return
      }

      resultados.innerHTML = ''
      const p = document.createElement('p')
      p.textContent = posts.length + ' resultado(s) para "' + termino + '"'
      resultados.appendChild(p)

      posts.forEach(post => {
        const div = document.createElement('div')
        const titulo = document.createElement('p')
        titulo.textContent = post.title
        div.appendChild(titulo)
        resultados.appendChild(div)
      })

    } catch (error) {
      resultados.textContent = 'Error en la búsqueda. Intenta de nuevo.'
      console.error(error)
    }
  }

  // Debounce: esperar 400ms después de dejar de escribir
  let timer
  input.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(() => buscar(input.value), 400)
  })
}

crearBuscador('buscador-app')`,
    keyPoints: [
      'El debounce es esencial para no saturar la API con cada tecla',
      'Muestra el término buscado en los mensajes para mejor UX',
      'Cancela la petición anterior si el usuario sigue escribiendo',
      'Distingue entre "sin resultados" y "error en la búsqueda"',
      'Muestra el número de resultados encontrados',
      'Considera mínimo de caracteres antes de buscar (ej: 3 caracteres)',
    ],
    exercise: {
      description: 'Crea un buscador simple (sin UI) que reciba un término como parámetro, haga fetch a JSONPlaceholder filtrando por userId igual al número del término, y retorne los primeros 3 resultados. Incluye debounce de 300ms.',
      hint: 'La función de debounce crea un closure con let timer. clearTimeout(timer) cancela el anterior.',
    },
    quiz: [
      {
        question: '¿Por qué es importante el debounce en un buscador?',
        options: [
          'Para no hacer una petición API por cada letra que el usuario escribe',
          'Para hacer la búsqueda más precisa',
          'Para evitar errores de CORS',
          'Para cachear los resultados',
        ],
        correctAnswer: 'Para no hacer una petición API por cada letra que el usuario escribe',
        correctFeedback: '¡Correcto! Sin debounce, escribir "hola" haría 4 peticiones en lugar de 1.',
        incorrectFeedback: 'Sin debounce, cada letra dispara una petición. Con 10 letras, harías 10 peticiones en lugar de 1.',
      },
      {
        question: '¿Cuál es el tiempo de debounce típico para una búsqueda?',
        options: [
          '300-500ms (tiempo suficiente para que el usuario deje de escribir)',
          '50ms (casi instantáneo)',
          '2000ms (2 segundos)',
          '0ms (sin espera)',
        ],
        correctAnswer: '300-500ms (tiempo suficiente para que el usuario deje de escribir)',
        correctFeedback: '¡Correcto! 300-500ms es natural: el usuario no lo nota pero evita peticiones extras.',
        incorrectFeedback: '300-500ms es el rango estándar para debounce en búsquedas. Menos es muy agresivo; más se siente lento.',
      },
      {
        question: '¿Cómo cancelas el debounce anterior cuando el usuario sigue escribiendo?',
        options: [
          'Con clearTimeout(timerId) antes de crear el nuevo setTimeout',
          'Con AbortController',
          'Con Promise.cancel()',
          'No se puede cancelar, debes esperar',
        ],
        correctAnswer: 'Con clearTimeout(timerId) antes de crear el nuevo setTimeout',
        correctFeedback: '¡Correcto! clearTimeout cancela el setTimeout pendiente antes de crear uno nuevo.',
        incorrectFeedback: 'El patrón es: clearTimeout(timer); timer = setTimeout(buscar, 300). Así siempre esperas 300ms desde la última tecla.',
      },
      {
        question: '¿Qué mensaje es mejor mostrar cuando no hay resultados?',
        options: [
          '"Sin resultados para [término buscado]"',
          '"Error 404"',
          'Nada (dejar vacío)',
          '"Array vacío"',
        ],
        correctAnswer: '"Sin resultados para [término buscado]"',
        correctFeedback: '¡Correcto! Incluir el término buscado confirma al usuario que la búsqueda se ejecutó.',
        incorrectFeedback: 'Mostrar el término buscado en el mensaje ("Sin resultados para JavaScript") ayuda al usuario a confirmar qué buscó.',
      },
      {
        question: '¿Cuándo tiene sentido poner un mínimo de caracteres antes de buscar?',
        options: [
          'Cuando términos muy cortos retornan demasiados resultados irrelevantes',
          'Siempre, como mínimo 10 caracteres',
          'Nunca, siempre busca desde el primer carácter',
          'Solo en búsquedas de números',
        ],
        correctAnswer: 'Cuando términos muy cortos retornan demasiados resultados irrelevantes',
        correctFeedback: '¡Correcto! Un mínimo de 2-3 caracteres evita búsquedas poco útiles.',
        incorrectFeedback: 'Un mínimo de 2-3 caracteres evita buscar con "a" o "ab" que retornarían demasiados resultados.',
      },
    ],
  },
  {
    slug: 'guardar-favoritos-api',
    title: 'Guardar favoritos con localStorage',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 197,
    description: 'Aprende a combinar datos de una API con localStorage para guardar favoritos del usuario.',
    explanation: `**localStorage** permite guardar datos en el navegador del usuario de forma persistente — los datos no se pierden al recargar la página.

**¿Cuándo usar localStorage?**
- Guardar preferencias del usuario (tema oscuro/claro)
- Guardar favoritos o listas personalizadas
- Cachear datos de la API para no hacer peticiones repetidas
- Guardar el estado de la sesión para usuarios no autenticados

**API de localStorage:**
\`\`\`
localStorage.setItem('clave', valor)   // guardar string
localStorage.getItem('clave')          // obtener string o null
localStorage.removeItem('clave')       // eliminar
\`\`\`

**Guardar objetos/arrays:**
localStorage solo guarda strings. Usa JSON.stringify y JSON.parse:
\`\`\`
// Guardar array
localStorage.setItem('favoritos', JSON.stringify([1, 2, 3]))

// Leer array
const favs = JSON.parse(localStorage.getItem('favoritos') || '[]')
\`\`\`

**Limitaciones de localStorage:**
- Solo strings (~5MB por dominio)
- No es seguro para datos sensibles
- No se comparte entre pestañas (solo en el mismo dominio)`,
    codeExample: `// Sistema de favoritos combinando API + localStorage
const CLAVE_FAVORITOS = 'posts-favoritos'

// Leer favoritos del localStorage
function obtenerFavoritos() {
  try {
    const guardados = localStorage.getItem(CLAVE_FAVORITOS)
    return guardados ? JSON.parse(guardados) : []
  } catch {
    return [] // JSON inválido
  }
}

// Guardar favoritos en localStorage
function guardarFavoritos(favoritos) {
  localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos))
}

// Toggle: añadir o quitar de favoritos
function toggleFavorito(post) {
  const favoritos = obtenerFavoritos()
  const yaEsFavorito = favoritos.some(f => f.id === post.id)

  if (yaEsFavorito) {
    const nuevos = favoritos.filter(f => f.id !== post.id)
    guardarFavoritos(nuevos)
    return false // quitado
  } else {
    guardarFavoritos([...favoritos, { id: post.id, titulo: post.title }])
    return true // añadido
  }
}

// Combinar: cargar posts de API y marcar favoritos
async function cargarPostsConFavoritos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (!res.ok) throw new Error('Error ' + res.status)
    const posts = await res.json()
    const favIds = obtenerFavoritos().map(f => f.id)

    // Añadir info de favorito a cada post
    return posts.map(post => ({
      ...post,
      esFavorito: favIds.includes(post.id),
    }))
  } catch (error) {
    console.error('Error al cargar posts:', error.message)
    return []
  }
}

// Demo
cargarPostsConFavoritos().then(posts => {
  posts.forEach(post => {
    const estrella = post.esFavorito ? '★' : '☆'
    console.log(estrella, post.title.slice(0, 40))
  })
})`,
    keyPoints: [
      'localStorage persiste datos entre sesiones del navegador',
      'Solo almacena strings — usa JSON.stringify y JSON.parse para objetos',
      'Es ideal para favoritos, preferencias y caché ligero',
      'No almacenes datos sensibles en localStorage (contraseñas, tokens)',
      'Siempre maneja el caso de localStorage vacío con un valor por defecto',
      'Combinar APIs con localStorage crea experiencias ricas sin backend',
    ],
    exercise: {
      description: 'Crea un sistema que cargue 3 posts de la API y permita marcarlos como favoritos. Los IDs de favoritos se guardan en localStorage. Al recargar, los favoritos deben persistir.',
      hint: 'Guarda un array de IDs: JSON.stringify([1, 5, 12]). Al cargar, verifica si el id del post está en ese array.',
    },
    quiz: [
      {
        question: '¿Por qué se usa JSON.stringify() al guardar en localStorage?',
        options: [
          'Porque localStorage solo guarda strings, no objetos ni arrays',
          'Para comprimir los datos',
          'Para cifrar los datos',
          'Porque es más rápido que otros métodos',
        ],
        correctAnswer: 'Porque localStorage solo guarda strings, no objetos ni arrays',
        correctFeedback: '¡Correcto! localStorage.setItem("k", [1,2,3]) guarda "[object Object]", no el array real.',
        incorrectFeedback: 'localStorage solo acepta strings. JSON.stringify convierte el objeto/array a su representación en string JSON.',
      },
      {
        question: '¿Qué retorna localStorage.getItem("clave") si la clave no existe?',
        options: [
          'null',
          'undefined',
          '""  (string vacío)',
          'Lanza un error',
        ],
        correctAnswer: 'null',
        correctFeedback: '¡Correcto! Por eso usamos || [] o || {} para valores por defecto.',
        incorrectFeedback: 'localStorage.getItem() retorna null cuando la clave no existe. Por eso el patrón: JSON.parse(localStorage.getItem("k") || "[]").',
      },
      {
        question: '¿Es seguro guardar contraseñas en localStorage?',
        options: [
          'No, localStorage es accesible desde JavaScript y puede ser comprometido',
          'Sí, si usas HTTPS',
          'Sí, solo tu código puede acceder',
          'Solo si cifras con btoa()',
        ],
        correctAnswer: 'No, localStorage es accesible desde JavaScript y puede ser comprometido',
        correctFeedback: '¡Correcto! Scripts maliciosos (XSS) pueden leer el localStorage.',
        incorrectFeedback: 'Nunca guardes contraseñas en localStorage. Es accesible por cualquier JavaScript en la página, incluyendo ataques XSS.',
      },
      {
        question: '¿Cuál es un buen caso de uso para localStorage?',
        options: [
          'Guardar preferencias de usuario como tema oscuro/claro o favoritos',
          'Almacenar contraseñas y tokens de autenticación',
          'Compartir datos entre diferentes dominios',
          'Bases de datos grandes de miles de registros',
        ],
        correctAnswer: 'Guardar preferencias de usuario como tema oscuro/claro o favoritos',
        correctFeedback: '¡Correcto! localStorage es perfecto para preferencias no sensibles.',
        incorrectFeedback: 'localStorage es ideal para preferencias del usuario, favoritos, y configuraciones no sensibles. No para datos críticos de seguridad.',
      },
      {
        question: '¿Se comparte localStorage entre diferentes pestañas del navegador?',
        options: [
          'Sí, dentro del mismo dominio y protocolo',
          'No, cada pestaña tiene su propio localStorage',
          'Solo si las pestañas están sincronizadas',
          'Solo en Chrome, no en Firefox',
        ],
        correctAnswer: 'Sí, dentro del mismo dominio y protocolo',
        correctFeedback: '¡Correcto! Todas las pestañas de example.com comparten el mismo localStorage.',
        incorrectFeedback: 'El localStorage se comparte entre pestañas del mismo dominio. Un cambio en una pestaña es visible en las demás.',
      },
    ],
  },
  {
    slug: 'proyecto-buscador-api',
    title: 'Proyecto: Buscador de países',
    module: 'Consumo de APIs reales',
    moduleNumber: 25,
    order: 198,
    description: 'Construye un proyecto completo: un buscador de países usando la API REST Countries, con favoritos y todos los conceptos del nivel 5.',
    explanation: `En esta lección construimos un **proyecto completo** que integra todos los conceptos del Nivel 5:

**Qué construiremos:**
Un buscador de países que:
- Usa la API pública REST Countries (sin API key)
- Busca países por nombre con debounce
- Muestra: nombre, capital, población, región y bandera
- Permite guardar países favoritos en localStorage
- Maneja estados de carga, vacío y error

**API utilizada:** https://restcountries.com/v3.1/
- Sin autenticación requerida
- Endpoint de búsqueda: \`/name/{nombre}\`
- Retorna array de países con datos detallados

**Conceptos aplicados:**
- async/await con try/catch
- fetch con manejo de errores HTTP
- URLSearchParams para construir URLs
- Estados de UI: loading, success, empty, error
- localStorage para favoritos
- Debounce para la búsqueda
- textContent para seguridad (no innerHTML con datos externos)`,
    codeExample: `// Proyecto: Buscador de países
const BASE_URL = 'https://restcountries.com/v3.1'
const CLAVE_FAVORITOS = 'paises-favoritos'

// === localStorage helpers ===
function getFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_FAVORITOS) || '[]')
  } catch { return [] }
}

function toggleFavorito(cca3) {
  const favs = getFavoritos()
  const nuevos = favs.includes(cca3)
    ? favs.filter(c => c !== cca3)
    : [...favs, cca3]
  localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(nuevos))
  return !favs.includes(cca3)
}

// === API ===
async function buscarPais(nombre) {
  const res = await fetch(BASE_URL + '/name/' + encodeURIComponent(nombre))
  if (res.status === 404) return []
  if (!res.ok) throw new Error('Error ' + res.status)
  const paises = await res.json()
  return paises.map(p => ({
    cca3: p.cca3,
    nombre: p.name.common,
    capital: p.capital?.[0] ?? 'Sin capital',
    poblacion: p.population.toLocaleString('es'),
    region: p.region,
    bandera: p.flag,
  }))
}

// === Renderizado ===
function renderizarPaises(paises, contenedor) {
  contenedor.innerHTML = ''
  const favs = getFavoritos()

  paises.forEach(pais => {
    const card = document.createElement('div')
    const titulo = document.createElement('h3')
    titulo.textContent = pais.bandera + ' ' + pais.nombre

    const info = document.createElement('p')
    info.textContent = 'Capital: ' + pais.capital +
      ' · Población: ' + pais.poblacion +
      ' · ' + pais.region

    const btnFav = document.createElement('button')
    btnFav.textContent = favs.includes(pais.cca3) ? '★ Favorito' : '☆ Guardar'
    btnFav.addEventListener('click', () => {
      const ahora = toggleFavorito(pais.cca3)
      btnFav.textContent = ahora ? '★ Favorito' : '☆ Guardar'
    })

    card.appendChild(titulo)
    card.appendChild(info)
    card.appendChild(btnFav)
    contenedor.appendChild(card)
  })
}

// === Buscador con debounce ===
function iniciarBuscador(inputId, resultadosId) {
  const input = document.getElementById(inputId)
  const resultados = document.getElementById(resultadosId)
  if (!input || !resultados) return

  let timer
  input.addEventListener('input', () => {
    clearTimeout(timer)
    const termino = input.value.trim()

    if (termino.length < 2) {
      resultados.textContent = 'Escribe al menos 2 letras'
      return
    }

    resultados.textContent = 'Buscando "' + termino + '"...'

    timer = setTimeout(async () => {
      try {
        const paises = await buscarPais(termino)
        if (paises.length === 0) {
          resultados.textContent = 'No se encontró "' + termino + '"'
          return
        }
        renderizarPaises(paises, resultados)
      } catch (error) {
        resultados.textContent = 'Error al buscar. Intenta de nuevo.'
        console.error(error)
      }
    }, 400)
  })
}

iniciarBuscador('buscar-pais', 'lista-paises')`,
    keyPoints: [
      'Un proyecto real integra múltiples conceptos: fetch, async/await, localStorage, debounce',
      'Separa la lógica en funciones pequeñas con responsabilidad única',
      'Usa APIs públicas sin key para proyectos de aprendizaje',
      'Siempre incluye manejo completo de estados de UI',
      'Combinar datos de API con localStorage crea experiencias ricas',
      'Este proyecto demuestra todo el Nivel 5: asincronía, Promises, async/await, Fetch y APIs',
    ],
    exercise: {
      description: 'Extiende el buscador de países para mostrar el número de países encontrados ("X países encontrados para [término]"). Luego agrega un botón "Ver favoritos" que muestre la lista de países guardados.',
      hint: 'El conteo es paises.length + " países encontrados". Para favoritos: cargar los cca3 de localStorage y buscar cada uno con la API.',
    },
    quiz: [
      {
        question: '¿Por qué encodeURIComponent() es importante al construir URLs?',
        options: [
          'Codifica caracteres especiales como tildes y espacios para URLs válidas',
          'Cifra los datos para seguridad',
          'Comprime la URL para menor tamaño',
          'Es requerido por fetch obligatoriamente',
        ],
        correctAnswer: 'Codifica caracteres especiales como tildes y espacios para URLs válidas',
        correctFeedback: '¡Correcto! "México" se convierte en "M%C3%A9xico" para ser válido en una URL.',
        incorrectFeedback: 'encodeURIComponent() convierte caracteres especiales a su representación válida en URLs. "Perú" → "Per%C3%BA".',
      },
      {
        question: '¿Cuál es la ventaja de separar la lógica en funciones pequeñas?',
        options: [
          'Cada función tiene una sola responsabilidad, facilitando pruebas y mantenimiento',
          'El código corre más rápido',
          'Se usan menos variables',
          'Fetch funciona mejor con funciones pequeñas',
        ],
        correctAnswer: 'Cada función tiene una sola responsabilidad, facilitando pruebas y mantenimiento',
        correctFeedback: '¡Correcto! El principio de responsabilidad única hace el código más mantenible.',
        incorrectFeedback: 'Las funciones pequeñas con una sola responsabilidad son más fáciles de probar, depurar y reutilizar.',
      },
      {
        question: '¿Qué combinación de tecnologías permite crear una app útil sin backend?',
        options: [
          'APIs públicas + localStorage + JavaScript',
          'APIs privadas + Base de datos + Node.js',
          'Solo HTML y CSS',
          'Requieres siempre un backend',
        ],
        correctAnswer: 'APIs públicas + localStorage + JavaScript',
        correctFeedback: '¡Correcto! Con APIs públicas y localStorage puedes crear apps funcionales solo con frontend.',
        incorrectFeedback: 'APIs públicas para datos + localStorage para persistencia + JavaScript para lógica = app funcional sin backend.',
      },
      {
        question: '¿Qué significa que una función tiene "responsabilidad única"?',
        options: [
          'Hace una sola cosa bien, sin mezclar lógicas',
          'Solo puede llamarse una vez',
          'Solo acepta un parámetro',
          'No puede llamar a otras funciones',
        ],
        correctAnswer: 'Hace una sola cosa bien, sin mezclar lógicas',
        correctFeedback: '¡Correcto! Una función que busca no debe también renderizar ni guardar en localStorage.',
        incorrectFeedback: 'Responsabilidad única: una función hace una cosa. buscarPais() busca. renderizarPaises() renderiza. No las mezcles.',
      },
      {
        question: '¿Qué has aprendido en el Nivel 5 de este curso?',
        options: [
          'Asincronía, Promises, async/await, Fetch API y consumo de APIs reales',
          'Solo cómo usar fetch',
          'Solo variables y funciones',
          'Solo el DOM',
        ],
        correctAnswer: 'Asincronía, Promises, async/await, Fetch API y consumo de APIs reales',
        correctFeedback: '¡Felicitaciones! Has completado el Nivel 5 y el curso de JavaScript desde Cero.',
        incorrectFeedback: 'El Nivel 5 cubrió: asincronía (setTimeout, callbacks), Promises (.then, .catch), async/await, Fetch API y consumo de APIs reales.',
      },
    ],
  },
]

export const jsModule25: Module = {
  number: 25,
  title: 'Consumo de APIs reales',
  level: 'nivel5',
  lessons: lessonsJsModule25,
}
