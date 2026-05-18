import type { Lesson, Module } from '@/types'

export const lessonsJsModule23: Lesson[] = [
  {
    slug: 'que-es-async',
    title: '¿Qué es async?',
    module: 'Async y await',
    moduleNumber: 23,
    order: 172,
    description: 'Aprende qué significa la palabra clave async y cómo transforma una función en JavaScript.',
    explanation: `La palabra clave **async** antes de una función la convierte automáticamente en una función que **siempre retorna una Promise**.

\`\`\`
async function miFuncion() {
  return 42
}

// Es equivalente a:
function miFuncion() {
  return Promise.resolve(42)
}
\`\`\`

**¿Por qué usar async?**
- Permite usar la palabra clave **await** dentro de la función
- Hace que el código asíncrono se vea y se comporte como código síncrono
- Los errores se pueden manejar con try/catch normal

**Formas de declarar funciones async:**
\`\`\`
// Declaración de función
async function obtenerDatos() { ... }

// Expresión de función
const obtenerDatos = async function() { ... }

// Función flecha
const obtenerDatos = async () => { ... }

// Método de objeto
const obj = {
  async obtenerDatos() { ... }
}
\`\`\`

Una función async **siempre retorna una Promise**, incluso si retornas un valor primitivo.`,
    codeExample: `// async siempre retorna una Promise
async function saludar(nombre) {
  return 'Hola, ' + nombre
}

const resultado = saludar('Ana')
console.log(resultado) // → Promise {<fulfilled>: "Hola, Ana"}
resultado.then(msg => console.log(msg)) // → "Hola, Ana"

// async con función flecha
const sumar = async (a, b) => a + b

sumar(3, 4).then(total => console.log('Suma:', total)) // → 7

// async con lógica condicional
async function obtenerSaludo(idioma) {
  if (idioma === 'es') return 'Hola'
  if (idioma === 'en') return 'Hello'
  if (idioma === 'fr') return 'Bonjour'
  return 'Hi'
}

obtenerSaludo('es').then(s => console.log(s)) // → "Hola"
obtenerSaludo('jp').then(s => console.log(s)) // → "Hi"

// Los errores se convierten en Promises rechazadas
async function fallar() {
  throw new Error('algo salió mal')
}

fallar().catch(err => console.log('Error:', err.message))
// → "Error: algo salió mal"`,
    keyPoints: [
      'async antes de una función la hace retornar siempre una Promise',
      'Permite usar await dentro de la función',
      'Funciona con cualquier tipo de función: declaración, expresión, flecha, método',
      'Retornar un valor en async es equivalente a Promise.resolve(valor)',
      'Lanzar un error en async es equivalente a Promise.reject(error)',
      'El código dentro de async puede verse completamente síncrono con await',
    ],
    exercise: {
      description: 'Crea una función async llamada "cuadrado" que reciba un número y retorne su cuadrado. Luego llámala con .then() para imprimir el resultado.',
      hint: 'async function cuadrado(n) { return n * n } — retorna una Promise automáticamente.',
    },
    quiz: [
      {
        question: '¿Qué hace la palabra clave async antes de una función?',
        options: [
          'La convierte en una función que siempre retorna una Promise',
          'La hace ejecutar más rápido',
          'La hace correr en un hilo separado',
          'La hace síncrona',
        ],
        correctAnswer: 'La convierte en una función que siempre retorna una Promise',
        correctFeedback: '¡Correcto! async envuelve el valor de retorno en una Promise automáticamente.',
        incorrectFeedback: 'async hace que la función siempre retorne una Promise, sin importar lo que retornes dentro.',
      },
      {
        question: '¿Cuál es el resultado de llamar a "async function f() { return 5 }"?',
        options: [
          'Una Promise que se resuelve con 5',
          'El número 5 directamente',
          'Una Promise que se rechaza',
          'undefined',
        ],
        correctAnswer: 'Una Promise que se resuelve con 5',
        correctFeedback: '¡Correcto! async envuelve automáticamente el 5 en Promise.resolve(5).',
        incorrectFeedback: 'async siempre retorna una Promise. El 5 se convierte en Promise.resolve(5).',
      },
      {
        question: '¿Para qué sirve principalmente async?',
        options: [
          'Para poder usar await dentro de la función',
          'Para hacer el código más rápido',
          'Para evitar el uso de Promises',
          'Para ejecutar código en paralelo',
        ],
        correctAnswer: 'Para poder usar await dentro de la función',
        correctFeedback: '¡Correcto! Sin async, no puedes usar await dentro de una función.',
        incorrectFeedback: 'La razón principal de usar async es poder usar await dentro de esa función.',
      },
      {
        question: '¿Con qué tipos de función puedes usar async?',
        options: [
          'Con cualquier tipo: declaración, expresión, flecha y métodos',
          'Solo con declaraciones de función (function f())',
          'Solo con funciones flecha',
          'Solo con métodos de clase',
        ],
        correctAnswer: 'Con cualquier tipo: declaración, expresión, flecha y métodos',
        correctFeedback: '¡Correcto! async funciona con cualquier tipo de función en JavaScript.',
        incorrectFeedback: 'async funciona con todos los tipos de función: declaraciones, expresiones, funciones flecha y métodos.',
      },
      {
        question: '¿Qué pasa si lanzas un error dentro de una función async?',
        options: [
          'Se convierte en una Promise rechazada',
          'El programa se detiene completamente',
          'El error se ignora',
          'Se convierte en undefined',
        ],
        correctAnswer: 'Se convierte en una Promise rechazada',
        correctFeedback: '¡Correcto! throw dentro de async es equivalente a Promise.reject().',
        incorrectFeedback: 'Lanzar un error en async es equivalente a llamar reject(). La función retorna una Promise rechazada.',
      },
    ],
  },
  {
    slug: 'que-es-await',
    title: '¿Qué es await?',
    module: 'Async y await',
    moduleNumber: 23,
    order: 173,
    description: 'Aprende cómo await pausa la ejecución de una función async hasta que una Promise se resuelva.',
    explanation: `La palabra clave **await** pausa la ejecución de la función async hasta que la Promise se resuelva, y luego retorna el valor resuelto.

**Reglas importantes:**
1. Solo puedes usar await **dentro de una función async**
2. await puede usarse con cualquier Promise
3. await "desenvuelve" el valor de la Promise

**Sin await vs con await:**
\`\`\`
// Sin await (manual)
fetch('/api/datos')
  .then(res => res.json())
  .then(data => console.log(data))

// Con await (más legible)
async function cargar() {
  const res = await fetch('/api/datos')
  const data = await res.json()
  console.log(data)
}
\`\`\`

**await no bloquea el hilo principal:**
Aunque await "pausa" la función, JavaScript continúa ejecutando otro código mientras espera. La función se reanuda cuando la Promise se resuelve.

**await con valores no-Promise:**
Si usas await con un valor no-Promise, simplemente retorna ese valor. \`await 42\` retorna 42.`,
    codeExample: `// await básico
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function contar() {
  console.log('Inicio')
  await esperar(1000) // pausa 1 segundo
  console.log('1 segundo después')
  await esperar(1000) // pausa otro segundo
  console.log('2 segundos después')
}

contar()

// await con fetch (simulado)
const fetchSimulado = (url) => new Promise(resolve => {
  setTimeout(() => resolve({ status: 200, data: { nombre: 'Ana', edad: 25 } }), 500)
})

async function mostrarUsuario() {
  console.log('Cargando...')
  const respuesta = await fetchSimulado('/api/usuario/1')
  const usuario = respuesta.data
  console.log('Usuario:', usuario.nombre, '- Edad:', usuario.edad)
}

mostrarUsuario()

// await con valor no-Promise (funciona pero es redundante)
async function ejemplo() {
  const valor = await 42 // retorna 42 directamente
  console.log(valor) // → 42
}`,
    keyPoints: [
      'await pausa la función async hasta que la Promise se resuelve',
      'Solo se puede usar await dentro de funciones async',
      'await "desenvuelve" el valor de la Promise',
      'No bloquea el hilo principal de JavaScript',
      'Hace que el código asíncrono se vea como síncrono',
      'await con un valor no-Promise simplemente retorna ese valor',
    ],
    exercise: {
      description: 'Crea una función async que use await para esperar dos Promises en secuencia: primero obtén un nombre (después de 300ms), luego un saludo personalizado (después de 200ms). Imprime el saludo final.',
      hint: 'const nombre = await obtenerNombre() y luego const saludo = await crearSaludo(nombre).',
    },
    quiz: [
      {
        question: '¿Qué hace await cuando encuentra una Promise?',
        options: [
          'Pausa la función hasta que la Promise se resuelva y retorna el valor',
          'Ejecuta la Promise inmediatamente y continúa',
          'Cancela la Promise y continúa',
          'Convierte la Promise en un callback',
        ],
        correctAnswer: 'Pausa la función hasta que la Promise se resuelva y retorna el valor',
        correctFeedback: '¡Correcto! await espera y luego "desenvuelve" el valor resuelto.',
        incorrectFeedback: 'await pausa la ejecución de la función async y espera a que la Promise se resuelva.',
      },
      {
        question: '¿Dónde se puede usar await?',
        options: [
          'Solo dentro de funciones async',
          'En cualquier parte del código',
          'Solo en módulos ES6',
          'Solo en el nivel superior del archivo',
        ],
        correctAnswer: 'Solo dentro de funciones async',
        correctFeedback: '¡Correcto! await sin async es un error de sintaxis.',
        incorrectFeedback: 'await solo funciona dentro de funciones declaradas con async. Fuera de ellas causa un error de sintaxis.',
      },
      {
        question: '¿Bloquea await el hilo principal de JavaScript?',
        options: [
          'No, JavaScript continúa con otro código mientras espera',
          'Sí, todo el programa se pausa',
          'Solo bloquea el hilo de red',
          'Sí, pero solo por 10ms máximo',
        ],
        correctAnswer: 'No, JavaScript continúa con otro código mientras espera',
        correctFeedback: '¡Correcto! await solo pausa la función actual, no todo JavaScript.',
        incorrectFeedback: 'await pausa solo la función async actual. JavaScript sigue ejecutando otro código mientras espera.',
      },
      {
        question: '¿Qué retorna await si se usa con un valor no-Promise como await 5?',
        options: [
          'El valor 5 directamente',
          'Promise.resolve(5)',
          'Un error',
          'undefined',
        ],
        correctAnswer: 'El valor 5 directamente',
        correctFeedback: '¡Correcto! await con un no-Promise simplemente retorna ese valor.',
        incorrectFeedback: 'await con valores no-Promise los retorna directamente. Es válido pero generalmente innecesario.',
      },
      {
        question: '¿Cuál es la ventaja de await sobre .then()?',
        options: [
          'El código se lee como si fuera síncrono, es más natural',
          'Es más rápido que .then()',
          'No necesita manejo de errores',
          'Puede usarse sin async',
        ],
        correctAnswer: 'El código se lee como si fuera síncrono, es más natural',
        correctFeedback: '¡Correcto! La legibilidad es la principal ventaja de async/await sobre .then().',
        incorrectFeedback: 'La mayor ventaja de await es que el código asíncrono se lee de forma natural y secuencial, como código síncrono.',
      },
    ],
  },
  {
    slug: 'promesas-a-async-await',
    title: 'De Promesas a async/await',
    module: 'Async y await',
    moduleNumber: 23,
    order: 174,
    description: 'Aprende a convertir código con .then()/.catch() a async/await y viceversa.',
    explanation: `**async/await** y las Promises con **.then()/.catch()** son equivalentes. Puedes convertir entre ellos libremente.

**Regla de conversión:**
- Cada .then(callback) se convierte en una línea con await
- El .catch(callback) se convierte en un bloque try/catch
- El .finally(callback) se convierte en un bloque finally

**Cuándo usar cada uno:**

| Situación | Recomendación |
|-----------|---------------|
| Operaciones en secuencia | async/await |
| Promise.all() | Ambos funcionan bien |
| Callbacks de eventos | Promises/.then() |
| Código complejo con manejo de errores | async/await con try/catch |

**No los mezcles innecesariamente.** Elige uno para cada bloque de código y sé consistente.`,
    codeExample: `// Versión con .then()/.catch()
function cargarUsuario_promise(id) {
  return fetch('/api/users/' + id)
    .then(res => {
      if (!res.ok) throw new Error('No encontrado')
      return res.json()
    })
    .then(usuario => {
      console.log('Usuario:', usuario.nombre)
      return usuario
    })
    .catch(err => {
      console.error('Error:', err.message)
      throw err
    })
}

// La misma función con async/await
async function cargarUsuario_async(id) {
  try {
    const res = await fetch('/api/users/' + id)
    if (!res.ok) throw new Error('No encontrado')
    const usuario = await res.json()
    console.log('Usuario:', usuario.nombre)
    return usuario
  } catch (err) {
    console.error('Error:', err.message)
    throw err
  }
}

// Ambas se usan igual
cargarUsuario_async(1)
  .then(u => console.log('Listo:', u.nombre))
  .catch(e => console.log('Fallo'))`,
    keyPoints: [
      'async/await y .then()/.catch() son equivalentes en poder expresivo',
      'Cada await reemplaza un .then()',
      'try/catch reemplaza a .catch()',
      'El bloque finally funciona igual en ambas formas',
      'async/await suele ser más legible para secuencias complejas',
      'Las Promises con .then() son útiles para transformaciones simples',
    ],
    exercise: {
      description: 'Convierte esta cadena de Promises a async/await: fetch(url).then(r => r.json()).then(d => console.log(d)).catch(e => console.error(e)).',
      hint: 'Declara async function y usa try/catch. const r = await fetch(url), const d = await r.json().',
    },
    quiz: [
      {
        question: '¿Cómo se convierte un .catch(fn) a async/await?',
        options: [
          'Con un bloque try/catch',
          'Con un if/else',
          'Con .catch() dentro de la función async',
          'No se puede convertir',
        ],
        correctAnswer: 'Con un bloque try/catch',
        correctFeedback: '¡Correcto! try/catch es el equivalente de .catch() en async/await.',
        incorrectFeedback: 'En async/await, el manejo de errores se hace con try/catch, que es el equivalente a .catch().',
      },
      {
        question: '¿Cuándo es preferible usar async/await sobre .then()?',
        options: [
          'Para operaciones secuenciales complejas con múltiples pasos',
          'Para promesas simples con un solo .then()',
          'Cuando no hay manejo de errores',
          'Solo en funciones de flecha',
        ],
        correctAnswer: 'Para operaciones secuenciales complejas con múltiples pasos',
        correctFeedback: '¡Correcto! async/await brilla cuando hay muchos pasos en secuencia.',
        incorrectFeedback: 'async/await es especialmente útil cuando hay múltiples pasos en secuencia. Para Promises simples, .then() puede ser más conciso.',
      },
      {
        question: '¿Una función async retorna algo diferente a una función con .then()?',
        options: [
          'No, ambas retornan Promises y se usan igual',
          'Sí, async retorna un objeto especial',
          'Sí, async es más rápida',
          'Sí, no puedes usar .then() en funciones async',
        ],
        correctAnswer: 'No, ambas retornan Promises y se usan igual',
        correctFeedback: '¡Correcto! Una función async retorna una Promise que se puede consumir con .then().',
        incorrectFeedback: 'Las funciones async retornan Promises normales. Puedes usar .then() en su resultado igual que con cualquier Promise.',
      },
      {
        question: '¿Qué hace este código: const data = await fetch(url).then(r => r.json())?',
        options: [
          'Mezcla await con .then() — funciona pero es redundante',
          'Es un error de sintaxis',
          'Es la única forma correcta de parsear JSON',
          'Ejecuta fetch dos veces',
        ],
        correctAnswer: 'Mezcla await con .then() — funciona pero es redundante',
        correctFeedback: '¡Correcto! Funciona pero es mejor ser consistente: usa solo await o solo .then().',
        incorrectFeedback: 'Mezclar await y .then() funciona técnicamente, pero es inconsistente. Mejor: const r = await fetch(url); const data = await r.json().',
      },
      {
        question: '¿Puede una función async ser llamada con .then()?',
        options: [
          'Sí, porque retorna una Promise',
          'No, debe usarse solo con await',
          'Solo si está dentro de otra función async',
          'Solo en módulos ES6',
        ],
        correctAnswer: 'Sí, porque retorna una Promise',
        correctFeedback: '¡Correcto! Las funciones async retornan Promises normales, así que .then() funciona.',
        incorrectFeedback: 'Las funciones async retornan Promises normales. Puedes llamarlas con .then()/.catch() igual que cualquier Promise.',
      },
    ],
  },
  {
    slug: 'errores-async-await',
    title: 'Manejo de errores con async/await',
    module: 'Async y await',
    moduleNumber: 23,
    order: 175,
    description: 'Aprende a manejar errores correctamente en funciones async usando try/catch.',
    explanation: `En async/await, el manejo de errores se hace con **try/catch**, igual que en código síncrono.

**¿Por qué try/catch?**
Cuando una Promise es rechazada, await lanza el error como una excepción. try/catch puede capturar esa excepción.

**Estructura básica:**
\`\`\`
async function miFuncion() {
  try {
    const datos = await obtenerDatos()
    const procesado = await procesar(datos)
    return procesado
  } catch (error) {
    console.error('Error:', error.message)
    // puedes retornar un valor por defecto o relanzar
  } finally {
    // limpieza (opcional)
  }
}
\`\`\`

**Errores específicos vs generales:**
Puedes verificar el tipo de error para manejarlo diferente:
\`\`\`
} catch (error) {
  if (error instanceof TypeError) {
    // error de tipo de datos
  } else if (error.message === 'No encontrado') {
    // error 404
  } else {
    throw error // relanzar errores no manejados
  }
}
\`\`\``,
    codeExample: `// try/catch básico
async function cargarDatos(url) {
  try {
    const respuesta = await fetch(url)

    if (!respuesta.ok) {
      throw new Error('Error HTTP: ' + respuesta.status)
    }

    const datos = await respuesta.json()
    return datos
  } catch (error) {
    console.error('No se pudieron cargar los datos:', error.message)
    return null // valor por defecto
  }
}

// Con finally para limpieza
async function buscarConSpinner(termino) {
  let cargando = true
  console.log('Mostrando spinner...')

  try {
    const resultado = await buscar(termino)
    console.log('Resultados:', resultado.length)
    return resultado
  } catch (error) {
    console.error('Búsqueda fallida:', error.message)
    return []
  } finally {
    cargando = false
    console.log('Ocultando spinner...')
  }
}

// Errores específicos
async function obtenerUsuario(id) {
  try {
    const res = await fetch('/api/users/' + id)
    if (res.status === 404) throw new Error('Usuario no encontrado')
    if (res.status === 403) throw new Error('Sin permisos')
    return await res.json()
  } catch (error) {
    if (error.message === 'Usuario no encontrado') {
      return { nombre: 'Anónimo' } // fallback
    }
    throw error // relanzar otros errores
  }
}`,
    keyPoints: [
      'try/catch captura errores de Promises rechazadas con await',
      'El bloque catch recibe el error como si fuera síncrono',
      'finally se ejecuta siempre, útil para limpieza',
      'Puedes relanzar errores con throw error para que el llamador los maneje',
      'Es posible verificar el tipo de error para manejos específicos',
      'Retornar un valor por defecto en catch puede evitar que el error se propague',
    ],
    exercise: {
      description: 'Crea una función async "dividirSeguro(a, b)" que use try/catch. Si b es 0, lanza un Error. Pruébala con b=0 y con b=5, manejando ambos casos.',
      hint: 'if (b === 0) throw new Error("División por cero"). El catch puede imprimir el error y retornar null.',
    },
    quiz: [
      {
        question: '¿Cómo se capturan errores de Promises con await?',
        options: [
          'Con try/catch alrededor del await',
          'Con .catch() después del await',
          'Los errores se ignoran automáticamente',
          'Con un callback de error en el await',
        ],
        correctAnswer: 'Con try/catch alrededor del await',
        correctFeedback: '¡Correcto! await lanza el error como excepción, que try/catch puede capturar.',
        incorrectFeedback: 'En async/await, los errores de Promises se capturan con try/catch alrededor del await.',
      },
      {
        question: '¿Qué pasa si una Promise rechazada con await no está en un try/catch?',
        options: [
          'El error se propaga como "unhandled promise rejection"',
          'El error se ignora silenciosamente',
          'El programa se pausa indefinidamente',
          'JavaScript lo captura automáticamente',
        ],
        correctAnswer: 'El error se propaga como "unhandled promise rejection"',
        correctFeedback: '¡Correcto! Sin try/catch, el error no manejado puede causar problemas serios.',
        incorrectFeedback: 'Sin try/catch, el error rechazado se convierte en "unhandled promise rejection", que puede terminar el proceso en Node.js.',
      },
      {
        question: '¿Para qué sirve el bloque finally en async/await?',
        options: [
          'Para código de limpieza que debe ejecutarse siempre',
          'Para capturar errores adicionales',
          'Para reintentar la operación',
          'Para cancelar la Promise',
        ],
        correctAnswer: 'Para código de limpieza que debe ejecutarse siempre',
        correctFeedback: '¡Correcto! finally es ideal para ocultar spinners, liberar recursos, etc.',
        incorrectFeedback: 'finally se ejecuta siempre, haya error o no, y es perfecto para código de limpieza.',
      },
      {
        question: '¿Puedes relanzar un error dentro de un catch?',
        options: [
          'Sí, usando throw error dentro del catch',
          'No, el catch consume el error definitivamente',
          'Solo si usas return error',
          'Solo si la función no es async',
        ],
        correctAnswer: 'Sí, usando throw error dentro del catch',
        correctFeedback: '¡Correcto! Puedes relanzar el error para que el llamador lo maneje.',
        incorrectFeedback: 'Dentro del catch puedes hacer throw error para propagar el error al llamador de la función.',
      },
      {
        question: '¿Qué ventaja tiene try/catch sobre .catch() para errores complejos?',
        options: [
          'Permite manejar errores específicos con if/else dentro del catch',
          'Es más rápido en ejecución',
          'No necesita async',
          'Captura más tipos de errores',
        ],
        correctAnswer: 'Permite manejar errores específicos con if/else dentro del catch',
        correctFeedback: '¡Correcto! try/catch permite lógica de manejo de errores más compleja y legible.',
        incorrectFeedback: 'Con try/catch puedes usar if/else para diferentes tipos de errores dentro del bloque catch de forma muy natural.',
      },
    ],
  },
  {
    slug: 'tareas-async-secuencia',
    title: 'Tareas asíncronas en secuencia',
    module: 'Async y await',
    moduleNumber: 23,
    order: 176,
    description: 'Aprende a ejecutar múltiples operaciones asíncronas en orden usando await.',
    explanation: `Cuando tienes múltiples operaciones asíncronas donde **cada una depende de la anterior**, ejecutarlas en secuencia con await es la solución correcta.

**Secuencia con await:**
\`\`\`
async function proceso() {
  const paso1 = await operacion1()
  const paso2 = await operacion2(paso1)
  const paso3 = await operacion3(paso2)
  return paso3
}
\`\`\`

Cada await espera a que la operación anterior termine antes de continuar.

**⚠️ Cuidado con await en bucles:**
\`\`\`
// Secuencial (uno por uno) - puede ser lento
for (const id of ids) {
  const user = await fetchUser(id) // espera cada uno
  procesar(user)
}
\`\`\`

**Cuándo usar secuencia:**
- Cuando el paso B necesita el resultado del paso A
- Cuando el orden importa (ej: autenticar → cargar datos → mostrar)
- Cuando necesitas control preciso del flujo`,
    codeExample: `// Secuencia de operaciones dependientes
const esperar = (ms, valor) => new Promise(resolve => setTimeout(() => resolve(valor), ms))

async function flujoDeCompra(carritoId) {
  console.log('Iniciando compra...')

  // Paso 1: obtener carrito
  const carrito = await esperar(200, { id: carritoId, items: 3, total: 150 })
  console.log('Carrito:', carrito.items, 'items, $' + carrito.total)

  // Paso 2: validar inventario (depende del carrito)
  const inventarioOk = await esperar(150, true)
  if (!inventarioOk) throw new Error('Inventario insuficiente')
  console.log('Inventario validado')

  // Paso 3: procesar pago (depende de la validación)
  const pago = await esperar(300, { transaccionId: 'TXN-001', aprobado: true })
  if (!pago.aprobado) throw new Error('Pago rechazado')
  console.log('Pago aprobado:', pago.transaccionId)

  // Paso 4: confirmar pedido (depende del pago)
  const pedido = await esperar(100, { numeroPedido: 'PED-456' })
  console.log('Pedido confirmado:', pedido.numeroPedido)

  return pedido
}

flujoDeCompra(789)
  .then(pedido => console.log('¡Compra exitosa!', pedido))
  .catch(err => console.error('Error en compra:', err.message))`,
    keyPoints: [
      'La secuencia con await garantiza que cada paso espera al anterior',
      'Es ideal cuando cada paso depende del resultado anterior',
      'await en bucles puede ser lento: cada iteración espera a la anterior',
      'Para pasos independientes, usa Promise.all() en lugar de secuencia',
      'La secuencia es fácil de leer y depurar',
      'Siempre incluye manejo de errores con try/catch',
    ],
    exercise: {
      description: 'Crea una función async que simule el proceso de registro de usuario: 1) validar email (300ms), 2) crear cuenta (400ms), 3) enviar email de bienvenida (200ms). Cada paso retorna un objeto con datos. Muestra el progreso.',
      hint: 'Usa tres funciones que retornen Promises con setTimeout. await cada una en secuencia.',
    },
    quiz: [
      {
        question: '¿Cuándo es apropiado ejecutar Promises en secuencia con await?',
        options: [
          'Cuando cada operación depende del resultado de la anterior',
          'Siempre, es la única forma correcta',
          'Cuando quieres ejecutarlas más rápido',
          'Cuando no importa el orden',
        ],
        correctAnswer: 'Cuando cada operación depende del resultado de la anterior',
        correctFeedback: '¡Correcto! La secuencia es para operaciones dependientes.',
        incorrectFeedback: 'La secuencia con await es apropiada cuando el resultado de una operación es necesario para la siguiente.',
      },
      {
        question: '¿Qué problema tiene usar await dentro de un bucle for?',
        options: [
          'Las iteraciones se ejecutan una por una (puede ser lento)',
          'El bucle no termina nunca',
          'Es un error de sintaxis',
          'Las variables se mezclan entre iteraciones',
        ],
        correctAnswer: 'Las iteraciones se ejecutan una por una (puede ser lento)',
        correctFeedback: '¡Correcto! await en bucle serializa las operaciones. Para paralelo, usa Promise.all().',
        incorrectFeedback: 'await en un bucle hace que cada iteración espere a la anterior. Puede ser muy lento si las operaciones son independientes.',
      },
      {
        question: '¿Cuándo deberías usar Promise.all() en lugar de secuencia?',
        options: [
          'Cuando las operaciones son independientes entre sí',
          'Cuando el orden importa',
          'Cuando cada paso necesita el anterior',
          'Cuando quieres más control del flujo',
        ],
        correctAnswer: 'Cuando las operaciones son independientes entre sí',
        correctFeedback: '¡Correcto! Promise.all() ejecuta en paralelo operaciones independientes.',
        incorrectFeedback: 'Si las operaciones no dependen entre sí, Promise.all() las ejecuta en paralelo y es mucho más eficiente.',
      },
      {
        question: '¿Qué garantiza la secuencia con await?',
        options: [
          'Que cada operación comienza solo después de que la anterior termina',
          'Que todas las operaciones tardan lo mismo',
          'Que los errores se manejan automáticamente',
          'Que el código es más rápido',
        ],
        correctAnswer: 'Que cada operación comienza solo después de que la anterior termina',
        correctFeedback: '¡Correcto! await garantiza el orden de ejecución.',
        incorrectFeedback: 'La secuencia con await garantiza que cada operación espera a que la anterior complete antes de comenzar.',
      },
      {
        question: 'Si paso 1 falla en una secuencia con try/catch, ¿qué pasa con los pasos siguientes?',
        options: [
          'No se ejecutan, el catch captura el error',
          'Se ejecutan igualmente',
          'Se ejecutan con undefined',
          'Producen errores adicionales',
        ],
        correctAnswer: 'No se ejecutan, el catch captura el error',
        correctFeedback: '¡Correcto! El error se propaga al catch y los siguientes pasos no se ejecutan.',
        incorrectFeedback: 'Cuando un await lanza un error, la ejecución salta directamente al bloque catch, omitiendo los siguientes pasos.',
      },
    ],
  },
  {
    slug: 'promise-all',
    title: 'Promise.all() — Paralelismo',
    module: 'Async y await',
    moduleNumber: 23,
    order: 177,
    description: 'Aprende a ejecutar múltiples Promises en paralelo con Promise.all() para mejorar el rendimiento.',
    explanation: `**Promise.all()** recibe un array de Promises y retorna una nueva Promise que se resuelve cuando **todas** se han resuelto, o se rechaza si **alguna** falla.

**Ventaja de rendimiento:**
\`\`\`
// Secuencial: total = 300 + 200 + 250 = 750ms
const a = await operacionA() // 300ms
const b = await operacionB() // 200ms
const c = await operacionC() // 250ms

// Paralelo: total = max(300, 200, 250) = 300ms
const [a, b, c] = await Promise.all([
  operacionA(), // 300ms
  operacionB(), // 200ms
  operacionC(), // 250ms
])
\`\`\`

**Otros métodos útiles:**
- **Promise.allSettled()** — espera todas, aunque algunas fallen. Retorna array con estado de cada una.
- **Promise.race()** — retorna la primera que se resuelva o rechace.
- **Promise.any()** — retorna la primera que se resuelva exitosamente.`,
    codeExample: `// Promise.all() básico
const esperar = (ms, valor) => new Promise(r => setTimeout(() => r(valor), ms))

async function cargarEnParalelo() {
  console.log('Iniciando carga paralela...')
  const inicio = Date.now()

  const [usuario, publicaciones, seguidores] = await Promise.all([
    esperar(300, { nombre: 'Ana' }),
    esperar(200, ['post1', 'post2']),
    esperar(250, 1234),
  ])

  const tiempo = Date.now() - inicio
  console.log('Cargado en:', tiempo + 'ms') // ~300ms, no 750ms
  console.log('Usuario:', usuario.nombre)
  console.log('Posts:', publicaciones.length)
  console.log('Seguidores:', seguidores)
}

cargarEnParalelo()

// Promise.allSettled() - no falla si alguna rechaza
async function cargarConFallos() {
  const resultados = await Promise.allSettled([
    esperar(100, 'éxito'),
    Promise.reject('fallo'),
    esperar(200, 'otro éxito'),
  ])

  resultados.forEach((resultado, i) => {
    if (resultado.status === 'fulfilled') {
      console.log(i, '→ éxito:', resultado.value)
    } else {
      console.log(i, '→ fallo:', resultado.reason)
    }
  })
}

cargarConFallos()`,
    keyPoints: [
      'Promise.all() ejecuta todas las Promises en paralelo',
      'Retorna un array con todos los resultados en el mismo orden',
      'Si alguna Promise falla, toda Promise.all() falla',
      'Es mucho más eficiente que la secuencia cuando las operaciones son independientes',
      'Promise.allSettled() es como Promise.all() pero no falla si algunas fallan',
      'Promise.race() retorna la primera que termine (éxito o fallo)',
    ],
    exercise: {
      description: 'Usa Promise.all() para cargar tres recursos "en paralelo": perfil (400ms), configuración (200ms) y notificaciones (300ms). Muestra todos los resultados y el tiempo total.',
      hint: 'const [a, b, c] = await Promise.all([fn1(), fn2(), fn3()]). Mide con Date.now().',
    },
    quiz: [
      {
        question: '¿Qué retorna Promise.all([p1, p2, p3]) si todas se resuelven?',
        options: [
          'Un array con los resultados de las tres Promises',
          'Solo el resultado de la primera',
          'Una Promise con el último resultado',
          'undefined',
        ],
        correctAnswer: 'Un array con los resultados de las tres Promises',
        correctFeedback: '¡Correcto! Los resultados están en el mismo orden que las Promises del array.',
        incorrectFeedback: 'Promise.all() resuelve con un array de resultados, en el mismo orden que el array de Promises de entrada.',
      },
      {
        question: '¿Qué pasa si una de las Promises en Promise.all() falla?',
        options: [
          'Promise.all() entera falla inmediatamente',
          'Se omite esa Promise y continúa con las demás',
          'Retorna null para esa posición',
          'Espera a que las demás terminen y luego falla',
        ],
        correctAnswer: 'Promise.all() entera falla inmediatamente',
        correctFeedback: '¡Correcto! Promise.all() es "todo o nada". Si una falla, toda falla.',
        incorrectFeedback: 'Promise.all() falla inmediatamente si cualquiera de las Promises falla. Para tolerancia a fallos, usa Promise.allSettled().',
      },
      {
        question: '¿Cuándo tiene sentido usar Promise.all() en lugar de secuencia?',
        options: [
          'Cuando las operaciones son independientes entre sí',
          'Cuando el orden de los resultados importa',
          'Cuando cada operación necesita el resultado de la anterior',
          'Cuando solo hay una operación',
        ],
        correctAnswer: 'Cuando las operaciones son independientes entre sí',
        correctFeedback: '¡Correcto! Para operaciones independientes, paralelo es más eficiente.',
        incorrectFeedback: 'Promise.all() es para operaciones que pueden ejecutarse al mismo tiempo porque no dependen entre sí.',
      },
      {
        question: '¿Cuál es la diferencia entre Promise.all() y Promise.allSettled()?',
        options: [
          'allSettled espera todas aunque algunas fallen; all falla si alguna falla',
          'all es más rápido que allSettled',
          'allSettled solo funciona con tres Promises',
          'all retorna objetos con estado; allSettled retorna valores directos',
        ],
        correctAnswer: 'allSettled espera todas aunque algunas fallen; all falla si alguna falla',
        correctFeedback: '¡Correcto! allSettled es más tolerante a fallos.',
        incorrectFeedback: 'Promise.allSettled() espera todas las Promises sin importar si fallan. Retorna objetos {status, value/reason} para cada una.',
      },
      {
        question: '¿Si tienes 3 operaciones de 500ms cada una, cuánto tardará Promise.all()?',
        options: [
          '~500ms (todas corren en paralelo)',
          '~1500ms (500 + 500 + 500)',
          '~1000ms (500 * 2)',
          'Depende del servidor',
        ],
        correctAnswer: '~500ms (todas corren en paralelo)',
        correctFeedback: '¡Correcto! El tiempo total es el de la operación más lenta, no la suma.',
        incorrectFeedback: 'Con Promise.all(), las tres operaciones corren simultáneamente. El tiempo total es el de la más lenta: ~500ms.',
      },
    ],
  },
  {
    slug: 'loading-states-async-await',
    title: 'Estados de carga con async/await',
    module: 'Async y await',
    moduleNumber: 23,
    order: 178,
    description: 'Aprende a manejar estados de carga, éxito y error en operaciones async para una mejor experiencia de usuario.',
    explanation: `Una buena UX requiere manejar tres estados en operaciones asíncronas:

**1. Loading (cargando):** mostrar un indicador visual
**2. Success (éxito):** mostrar los datos
**3. Error:** mostrar un mensaje amigable

**Patrón común:**
\`\`\`
let estado = 'idle' // idle | loading | success | error
let datos = null
let mensajeError = null

async function cargar() {
  estado = 'loading'
  renderizar()

  try {
    datos = await obtenerDatos()
    estado = 'success'
  } catch (error) {
    mensajeError = 'No se pudieron cargar los datos'
    estado = 'error'
  } finally {
    renderizar()
  }
}
\`\`\`

**Reglas para mensajes de error:**
- Muestra mensajes **amigables** al usuario ("No se pudieron cargar los datos")
- **No expongas** detalles técnicos del error al usuario
- Guarda el error técnico en la consola para depuración`,
    codeExample: `// Sistema de estados de carga
const obtenerDatos = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = Math.random() > 0.3 // 70% de éxito
    if (exito) resolve({ items: ['item1', 'item2', 'item3'] })
    else reject(new Error('Error de servidor 500'))
  }, 800)
})

// Patrón de estados con DOM (simplificado)
async function cargarYMostrar(contenedor) {
  // Estado: loading
  contenedor.textContent = 'Cargando...'

  try {
    const datos = await obtenerDatos()

    // Estado: success
    contenedor.innerHTML = ''
    datos.items.forEach(item => {
      const el = document.createElement('p')
      el.textContent = item
      contenedor.appendChild(el)
    })

  } catch (error) {
    // Estado: error — mensaje amigable para el usuario
    contenedor.textContent = 'No se pudieron cargar los datos. Intenta de nuevo.'
    // Error técnico solo en consola, no visible al usuario
    console.error('Error técnico:', error.message)
  }
}

// Versión con objeto de estado
async function crearEstadoCarga() {
  const estado = { cargando: false, datos: null, error: null }

  estado.cargando = true
  try {
    estado.datos = await obtenerDatos()
  } catch (err) {
    estado.error = 'Error al cargar'
    console.error(err)
  } finally {
    estado.cargando = false
  }

  return estado
}`,
    keyPoints: [
      'Siempre maneja tres estados: loading, success y error',
      'Muestra feedback visual durante la carga para buena UX',
      'Los mensajes de error deben ser amigables, sin detalles técnicos',
      'Usa finally para quitar el indicador de carga siempre',
      'Guarda errores técnicos en la consola, no en la UI',
      'El estado inicial (idle) es importante: no mostrar nada hasta que el usuario actúe',
    ],
    exercise: {
      description: 'Crea una función async que simule cargar una lista de productos. Usa tres estados: antes de cargar muestra "presiona cargar", durante muestra "cargando...", al terminar muestra la lista. Si falla, muestra un mensaje amigable.',
      hint: 'Usa variables let estado = "idle" | "loading" | "success" | "error" y una función render() que actualice el DOM.',
    },
    quiz: [
      {
        question: '¿Cuáles son los tres estados principales de una operación asíncrona?',
        options: [
          'Loading, success y error',
          'Start, running y done',
          'Pending, fulfilled y rejected',
          'Init, active y closed',
        ],
        correctAnswer: 'Loading, success y error',
        correctFeedback: '¡Correcto! Estos tres estados cubren todos los casos de UX.',
        incorrectFeedback: 'Los tres estados de UI son: loading (cargando), success (éxito) y error (fallo).',
      },
      {
        question: '¿Qué información debe mostrar un mensaje de error al usuario?',
        options: [
          'Un mensaje amigable sin detalles técnicos',
          'El stack trace completo del error',
          'El código de estado HTTP',
          'El mensaje exacto de la excepción',
        ],
        correctAnswer: 'Un mensaje amigable sin detalles técnicos',
        correctFeedback: '¡Correcto! Los detalles técnicos van a la consola, no a la UI.',
        incorrectFeedback: 'Los mensajes de error para usuarios deben ser simples y amigables. Los detalles técnicos se guardan en console.error().',
      },
      {
        question: '¿Por qué se usa finally para ocultar el indicador de carga?',
        options: [
          'Porque se ejecuta siempre, tanto si hay éxito como error',
          'Porque es más rápido que .then()',
          'Porque el indicador solo se oculta en caso de éxito',
          'Porque catch no puede acceder al indicador',
        ],
        correctAnswer: 'Porque se ejecuta siempre, tanto si hay éxito como error',
        correctFeedback: '¡Correcto! finally garantiza que el spinner desaparece en cualquier caso.',
        incorrectFeedback: 'finally se ejecuta siempre (éxito o error), por lo que es perfecto para ocultar indicadores de carga.',
      },
      {
        question: '¿Dónde deben guardarse los detalles técnicos del error?',
        options: [
          'En la consola con console.error()',
          'En la interfaz de usuario',
          'En una variable global',
          'En el localStorage',
        ],
        correctAnswer: 'En la consola con console.error()',
        correctFeedback: '¡Correcto! console.error() es para desarrolladores, no para usuarios.',
        incorrectFeedback: 'Los errores técnicos deben ir a console.error() para que los desarrolladores puedan depurar, pero no mostrarse al usuario.',
      },
      {
        question: '¿Qué es el estado "idle" en el contexto de carga de datos?',
        options: [
          'El estado inicial antes de que el usuario haya iniciado ninguna acción',
          'Cuando el servidor no responde',
          'Cuando los datos son vacíos',
          'Cuando hay un error de red',
        ],
        correctAnswer: 'El estado inicial antes de que el usuario haya iniciado ninguna acción',
        correctFeedback: '¡Correcto! "idle" significa inactivo, esperando que el usuario actúe.',
        incorrectFeedback: '"idle" es el estado inicial donde no ha ocurrido ninguna operación todavía.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-async-await',
    title: 'Buenas prácticas con async/await',
    module: 'Async y await',
    moduleNumber: 23,
    order: 179,
    description: 'Aprende las mejores prácticas y patrones para escribir código async/await limpio y mantenible.',
    explanation: `Async/await es poderoso pero tiene sus trampas. Seguir buenas prácticas te ahorrará problemas.

**1. Siempre maneja errores**
\`\`\`
// MAL: sin manejo de errores
async function cargar() {
  const data = await fetch(url)
  return data.json()
}

// BIEN:
async function cargar() {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Error: ' + res.status)
    return await res.json()
  } catch (err) {
    console.error(err)
    throw err
  }
}
\`\`\`

**2. No await innecesario al retornar**
\`\`\`
// Innecesario (pero no incorrecto)
async function f() { return await Promise.resolve(1) }

// Mejor
async function f() { return Promise.resolve(1) }
\`\`\`

**3. Paralelo cuando sea posible**
**4. Nombres descriptivos para funciones async**
**5. No mezcles estilos innecesariamente**`,
    codeExample: `// BUENA PRÁCTICA 1: Siempre try/catch
async function obtenerPerfil(userId) {
  try {
    const res = await fetch('/api/users/' + userId)
    if (!res.ok) throw new Error('Usuario no encontrado')
    return await res.json()
  } catch (error) {
    console.error('obtenerPerfil:', error)
    return null // valor por defecto seguro
  }
}

// BUENA PRÁCTICA 2: Paralelo cuando sea posible
// MAL (lento - secuencial)
async function cargarDashboard_lento(userId) {
  const perfil = await obtenerPerfil(userId)     // 400ms
  const posts = await obtenerPosts(userId)        // 300ms
  const seguidores = await obtenerSeguidores(userId) // 200ms
  // total: ~900ms
  return { perfil, posts, seguidores }
}

// BIEN (rápido - paralelo)
async function cargarDashboard(userId) {
  const [perfil, posts, seguidores] = await Promise.all([
    obtenerPerfil(userId),
    obtenerPosts(userId),
    obtenerSeguidores(userId),
  ])
  // total: ~400ms (el más lento)
  return { perfil, posts, seguidores }
}

// BUENA PRÁCTICA 3: nombres descriptivos
// MAL
async function f() { ... }

// BIEN
async function cargarProductosDestacados() { ... }
async function guardarPreferenciasUsuario() { ... }`,
    keyPoints: [
      'Siempre usa try/catch en funciones async que llaman APIs',
      'Usa Promise.all() para operaciones independientes en paralelo',
      'Nombra las funciones async de forma descriptiva',
      'Evita mezclar .then() y await en el mismo bloque',
      'Proporciona valores por defecto en los catch para no romper la UI',
      'Relanza errores que no puedes manejar localmente',
    ],
    exercise: {
      description: 'Refactoriza esta función para que: 1) use try/catch, 2) ejecute los tres fetches en paralelo con Promise.all(), 3) retorne null en caso de error: async function f() { const a = await fetch1(); const b = await fetch2(); const c = await fetch3(); return {a,b,c} }',
      hint: 'const [a, b, c] = await Promise.all([fetch1(), fetch2(), fetch3()]) dentro de un try/catch.',
    },
    quiz: [
      {
        question: '¿Qué buena práctica se viola al hacer: const a = await f1(); const b = await f2() cuando f1 y f2 son independientes?',
        options: [
          'Ejecutar en secuencia operaciones que podrían ir en paralelo',
          'No usar try/catch',
          'No nombrar bien las funciones',
          'No usar async',
        ],
        correctAnswer: 'Ejecutar en secuencia operaciones que podrían ir en paralelo',
        correctFeedback: '¡Correcto! Si f1 y f2 son independientes, Promise.all() es más eficiente.',
        incorrectFeedback: 'Si f1 y f2 no dependen entre sí, ejecutarlas en secuencia es innecesariamente lento. Usa Promise.all().',
      },
      {
        question: '¿Qué debe hacer una función async cuando encuentra un error que no puede manejar?',
        options: [
          'Relanzar el error con throw para que el llamador lo maneje',
          'Retornar undefined silenciosamente',
          'Llamar console.log() y continuar',
          'Reintentar la operación automáticamente',
        ],
        correctAnswer: 'Relanzar el error con throw para que el llamador lo maneje',
        correctFeedback: '¡Correcto! throw propaga el error al contexto que mejor puede manejarlo.',
        incorrectFeedback: 'Si no puedes manejar el error localmente, relánzalo con throw para que el llamador lo maneje.',
      },
      {
        question: '¿Es correcto mezclar await y .then() en el mismo bloque?',
        options: [
          'Funciona pero es confuso; mejor ser consistente',
          'Sí, siempre es la mejor práctica',
          'No, causa errores de sintaxis',
          'Solo funciona en módulos ES6',
        ],
        correctAnswer: 'Funciona pero es confuso; mejor ser consistente',
        correctFeedback: '¡Correcto! Elige un estilo y mantente consistente.',
        incorrectFeedback: 'Mezclar await y .then() en el mismo bloque funciona técnicamente pero dificulta la lectura. Elige uno.',
      },
      {
        question: '¿Por qué es útil retornar null en el catch de una función async?',
        options: [
          'Para evitar que la UI se rompa cuando falla la carga',
          'Porque null es más rápido que undefined',
          'Para indicar que el error fue manejado',
          'Porque es obligatorio en JavaScript',
        ],
        correctAnswer: 'Para evitar que la UI se rompa cuando falla la carga',
        correctFeedback: '¡Correcto! Un valor por defecto controlado es mejor que propagar el error a la UI.',
        incorrectFeedback: 'Retornar null u otro valor por defecto en el catch evita que errores inesperados rompan la interfaz.',
      },
      {
        question: '¿Cuál es la mejor práctica para nombrar funciones async?',
        options: [
          'Nombres descriptivos que indiquen la acción (cargarUsuario, guardarPerfil)',
          'Nombres cortos como f, g, h para evitar escritura',
          'Añadir "async" al nombre (asyncCargar)',
          'Usar solo números como identificadores',
        ],
        correctAnswer: 'Nombres descriptivos que indiquen la acción (cargarUsuario, guardarPerfil)',
        correctFeedback: '¡Correcto! Los nombres descriptivos hacen el código auto-documentado.',
        incorrectFeedback: 'Las funciones async deben tener nombres descriptivos que indiquen qué operación realizan, como cualquier función.',
      },
    ],
  },
]

export const jsModule23: Module = {
  number: 23,
  title: 'Async y await',
  level: 'nivel5',
  lessons: lessonsJsModule23,
}
