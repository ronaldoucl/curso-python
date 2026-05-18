import type { Lesson, Module } from '@/types'

export const lessonsJsModule19: Lesson[] = [
  {
    slug: 'errores-comunes-javascript',
    title: 'Errores comunes en JavaScript',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 139,
    description:
      'Aprende a identificar errores como ReferenceError, TypeError, SyntaxError y errores relacionados con undefined o null.',
    explanation: `## Errores comunes en JavaScript

JavaScript tiene varios tipos de errores predefinidos. Entenderlos te ahorra horas de depuración.

### 1. ReferenceError

Ocurre cuando intentas usar una variable que no existe:

\`\`\`js
console.log(nombre) // ❌ ReferenceError: nombre is not defined
\`\`\`

Causas comunes: typo en el nombre, variable no declarada, scope incorrecto.

### 2. TypeError

Ocurre cuando usas un valor de tipo incorrecto:

\`\`\`js
let nombre = null
console.log(nombre.toUpperCase()) // ❌ TypeError: Cannot read properties of null

let num = 42
num()  // ❌ TypeError: num is not a function
\`\`\`

### 3. SyntaxError

Ocurre cuando el código tiene errores de escritura que impiden que JavaScript lo procese:

\`\`\`js
let { = 'Ana'  // ❌ SyntaxError: Unexpected token '='
function(){}   // ❌ SyntaxError: Function statements require a function name
\`\`\`

Los SyntaxErrors se detectan antes de ejecutar — el programa no corre en absoluto.

### 4. RangeError

Ocurre cuando un valor está fuera del rango válido:

\`\`\`js
let arr = new Array(-1)          // ❌ RangeError: Invalid array length
let num = (1.234).toFixed(200)   // ❌ RangeError: toFixed() digits argument must be between 0 and 100
\`\`\`

### 5. Errores con undefined y null

Los más frecuentes en código real:

\`\`\`js
let usuario = undefined
console.log(usuario.nombre) // ❌ TypeError: Cannot read properties of undefined

// Solución: verificar antes de usar
if (usuario) {
  console.log(usuario.nombre)
}
// O con optional chaining:
console.log(usuario?.nombre) // undefined (sin error)
\`\`\`

### 6. Errores de lógica (no son "errores" de JavaScript)

El programa corre sin error pero produce resultados incorrectos:

\`\`\`js
function calcularEdad(nacimiento) {
  return new Date() - nacimiento  // ❌ devuelve milisegundos, no años
}
\`\`\`

Estos son los más difíciles de encontrar porque no hay mensaje de error.`,
    codeExample: `// script.js — identificando errores comunes

// --- ReferenceError ---
// Siempre declara variables antes de usarlas
// console.log(precio)  // ❌ ReferenceError si precio no fue declarada
let precio = 100
console.log(precio)  // ✅ 100

// --- TypeError con null/undefined ---
function obtenerNombre(usuario) {
  // ✅ Verifica antes de acceder a propiedades
  if (!usuario) {
    return 'Invitado'
  }
  return usuario.nombre
}
console.log(obtenerNombre(null))               // "Invitado"
console.log(obtenerNombre({ nombre: 'Ana' })) // "Ana"

// --- Optional chaining para acceso seguro ---
let perfil = null
console.log(perfil?.configuracion?.tema) // undefined (sin TypeError)

// --- Verificar tipo antes de llamar como función ---
function ejecutarSiEsFuncion(posibleFn) {
  if (typeof posibleFn === 'function') {
    return posibleFn()
  }
  return null
}

// --- Errores de lógica — verificar con casos concretos ---
function calcularPrecioFinal(base, descuento) {
  // ¿El descuento es porcentaje o decimal? Documenta y verifica
  if (descuento > 1) {
    // Asume que es porcentaje (ej. 20 = 20%)
    return base * (1 - descuento / 100)
  }
  // Asume que es decimal (ej. 0.20 = 20%)
  return base * (1 - descuento)
}`,
    keyPoints: [
      'ReferenceError: variable inexistente o fuera de scope.',
      'TypeError: usar un valor de tipo incorrecto (llamar null como función, leer propiedad de undefined).',
      'SyntaxError: código mal escrito — el programa no corre en absoluto.',
      'RangeError: valor numérico fuera de límites aceptables.',
      'Optional chaining (?.) permite acceder a propiedades de forma segura sin TypeError.',
      'Los errores de lógica no producen mensajes de error pero generan resultados incorrectos — son los más difíciles de detectar.',
    ],
    exercise: {
      description:
        'Identifica el tipo de error que produce cada línea y explica por qué:\n1. `console.log(x)` (x no declarada)\n2. `null.toString()`\n3. `let x = }`\n4. `new Array(-5)`\n5. `let arr = [1,2]; arr.push(3,4,5); console.log(arr[-1])`\nPara el #5, explica qué pasa (no es error de JavaScript, pero tampoco funciona como en otros lenguajes).',
      hint: '1=ReferenceError, 2=TypeError, 3=SyntaxError, 4=RangeError. Para el #5: en JavaScript arr[-1] no es un error — es undefined. Los índices negativos no son especiales en JS (a diferencia de Python).',
    },
    quiz: [
      {
        question: '¿Qué tipo de error produce `let obj = null; console.log(obj.nombre)`?',
        options: [
          'ReferenceError',
          'SyntaxError',
          'TypeError',
          'RangeError',
        ],
        correctAnswer: 'TypeError',
        correctFeedback: 'Correcto. Intentar acceder a una propiedad de null produce TypeError: Cannot read properties of null.',
        incorrectFeedback: 'Leer una propiedad de null o undefined produce TypeError — el tipo del valor (null) no soporta la operación de acceso a propiedades.',
      },
      {
        question: '¿Qué tipo de error ocurre antes de que el programa empiece a ejecutarse?',
        options: [
          'TypeError',
          'ReferenceError',
          'SyntaxError',
          'RangeError',
        ],
        correctAnswer: 'SyntaxError',
        correctFeedback: 'Correcto. Los SyntaxErrors son detectados durante el análisis del código (parsing), antes de que se ejecute ninguna línea.',
        incorrectFeedback: 'SyntaxError se detecta en la fase de análisis (antes de ejecutar). Los otros errores (TypeError, ReferenceError, RangeError) ocurren durante la ejecución.',
      },
      {
        question: '¿Qué hace `usuario?.perfil?.tema` si `usuario` es null?',
        options: [
          'Lanza TypeError',
          'Devuelve null',
          'Devuelve undefined sin lanzar error',
          'Devuelve ""',
        ],
        correctAnswer: 'Devuelve undefined sin lanzar error',
        correctFeedback: 'Correcto. El optional chaining (?.) detiene la evaluación y devuelve undefined si el valor a la izquierda es null o undefined — sin lanzar TypeError.',
        incorrectFeedback: 'Optional chaining (?.) es una forma segura de acceder a propiedades encadenadas. Si cualquier parte es null/undefined, devuelve undefined en lugar de lanzar TypeError.',
      },
      {
        question: '¿Cuál es la diferencia entre un error de JavaScript (TypeError, etc.) y un error de lógica?',
        options: [
          'Los errores de JavaScript son más graves',
          'Los errores de lógica producen mensajes de error; los de JavaScript no',
          'Los errores de JavaScript detienen el programa; los de lógica producen resultados incorrectos sin mensaje',
          'No hay diferencia — ambos se muestran en la consola',
        ],
        correctAnswer: 'Los errores de JavaScript detienen el programa; los de lógica producen resultados incorrectos sin mensaje',
        correctFeedback: 'Correcto. Los errores de tipo producen excepciones con mensajes. Los errores de lógica son "bugs silenciosos" — el programa corre pero produce resultados incorrectos.',
        incorrectFeedback: 'Los errores de JavaScript (TypeError, etc.) lanzan excepciones visibles en la consola. Los errores de lógica son más difíciles: el programa corre sin error pero produce resultados incorrectos.',
      },
      {
        question: '¿Cuál es la diferencia entre SyntaxError y ReferenceError?',
        options: [
          'SyntaxError ocurre en tiempo de ejecución; ReferenceError durante la compilación',
          'SyntaxError ocurre al parsear el código; ReferenceError al ejecutar al referenciar algo que no existe',
          'Son el mismo tipo de error con diferente nombre',
          'SyntaxError solo ocurre en Node.js; ReferenceError en navegadores',
        ],
        correctAnswer: 'SyntaxError ocurre al parsear el código; ReferenceError al ejecutar al referenciar algo que no existe',
        correctFeedback: 'Correcto. SyntaxError: el código ni siquiera puede interpretarse (llave sin cerrar). ReferenceError: el código es válido pero referencia algo que no existe en el scope.',
        incorrectFeedback: 'SyntaxError impide que JavaScript pueda leer el código. ReferenceError ocurre al ejecutar cuando se intenta usar una variable que no existe en el scope.',
      },
    ],
  },

  {
    slug: 'leer-errores-consola',
    title: 'Leer mensajes de error en consola',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 140,
    description:
      'Aprende a interpretar mensajes de error, líneas de archivo y stack traces en la consola del navegador.',
    explanation: `## Leer mensajes de error en consola

Saber leer la consola del navegador es una habilidad fundamental. Los mensajes de error tienen estructura y dan toda la información necesaria para corregir el problema.

### Anatomía de un mensaje de error

\`\`\`
TypeError: Cannot read properties of undefined (reading 'nombre')
    at mostrarUsuario (app.js:15:24)
    at cargarDatos (app.js:32:5)
    at app.js:45:1
\`\`\`

**Partes:**
1. **Tipo de error**: \`TypeError\`
2. **Descripción**: \`Cannot read properties of undefined (reading 'nombre')\`
3. **Stack trace**: dónde ocurrió y cómo se llegó ahí

### Leer el stack trace

El stack trace muestra la cadena de llamadas que llevó al error. **La primera línea es la más relevante** — es donde ocurrió el error.

\`\`\`
at mostrarUsuario (app.js:15:24)  ← aquí está el error
at cargarDatos (app.js:32:5)      ← esta función llamó a mostrarUsuario
at app.js:45:1                    ← esta línea llamó a cargarDatos
\`\`\`

El formato es: \`nombreFuncion (archivo.js:línea:columna)\`

### Tipos de mensajes comunes

**Uncaught TypeError:**
\`\`\`
Uncaught TypeError: undefined is not a function
\`\`\`
→ Estás intentando llamar algo que no es una función.

**Uncaught ReferenceError:**
\`\`\`
Uncaught ReferenceError: precio is not defined
\`\`\`
→ Usas una variable que no existe en ese scope.

**SyntaxError:**
\`\`\`
Uncaught SyntaxError: Unexpected token '}'
\`\`\`
→ Error de escritura — falta una llave, paréntesis, etc.

### La consola del navegador

Abre DevTools (F12 en Chrome/Firefox) → pestaña **Console**.

- Los errores aparecen en rojo.
- Puedes hacer clic en el nombre del archivo para ir exactamente a la línea del error.
- Puedes expandir el stack trace para ver toda la cadena de llamadas.

### Buscar el error en línea

Copia el mensaje de error (sin datos personales o de tu proyecto específico) y búscalo en Google o MDN. La mayoría de errores comunes tienen soluciones documentadas.`,
    codeExample: `// Ejemplo de cómo leer y corregir errores

// Supongamos que la consola muestra:
// TypeError: Cannot read properties of undefined (reading 'precio')
//     at calcularTotal (app.js:8:32)
//     at mostrarResumen (app.js:25:18)

// Paso 1: Ir a app.js línea 8
// Paso 2: Identificar cuál variable es undefined
// Paso 3: Trazar de dónde viene esa variable

// ❌ Código con el bug
function calcularTotal(productos) {
  // Si algún producto es undefined, esto falla
  return productos.reduce((suma, p) => suma + p.precio, 0)
}

function mostrarResumen(datos) {
  // ¿Qué pasa si datos.productos tiene elementos undefined?
  let total = calcularTotal(datos.productos)
  console.log('Total:', total)
}

// ✅ Código corregido
function calcularTotalSeguro(productos) {
  if (!Array.isArray(productos)) return 0
  // Filtra elementos que no tengan precio válido
  return productos
    .filter((p) => p && typeof p.precio === 'number')
    .reduce((suma, p) => suma + p.precio, 0)
}

// Prueba con datos problemáticos
let resultado = calcularTotalSeguro([
  { nombre: 'Libro', precio: 150 },
  undefined,  // elemento inválido — ahora está protegido
  { nombre: 'Curso', precio: 299 },
])
console.log(resultado) // 449`,
    keyPoints: [
      'Los mensajes de error tienen: tipo, descripción y stack trace.',
      'El stack trace muestra la cadena de llamadas — la primera línea indica dónde ocurrió el error.',
      'El formato de ubicación es: archivo.js:línea:columna.',
      '"Uncaught" significa que el error no fue manejado con try/catch.',
      'Puedes hacer clic en el nombre del archivo en la consola para ir directamente a la línea.',
      'Buscar el mensaje de error en Google o MDN suele dar soluciones rápidas.',
    ],
    exercise: {
      description:
        'Abre la consola del navegador (F12 → Console) y ejecuta estos códigos uno por uno. Para cada uno, anota: el tipo de error, la descripción y si hay stack trace:\n1. `console.log(x)`\n2. `null.toString()`\n3. `[1,2,3].filtrar(n => n > 1)` (filtrar no existe, es filter)\n4. `JSON.parse("dato inválido")`',
      hint: 'Cada error tiene su tipo al inicio. Para el #3 es TypeError porque `filtrar` es undefined (no una función). Para el #4 es SyntaxError dentro del JSON.parse. Observa dónde muestra el archivo y la línea.',
    },
    quiz: [
      {
        question: '¿Qué indica "Uncaught" en un error de consola?',
        options: [
          'Que el error es crítico y detiene todo el navegador',
          'Que el error no fue manejado con try/catch y llegó hasta el nivel superior',
          'Que el error fue lanzado con throw',
          'Que el error ocurrió en una función asíncrona',
        ],
        correctAnswer: 'Que el error no fue manejado con try/catch y llegó hasta el nivel superior',
        correctFeedback: 'Correcto. "Uncaught" significa que ningún bloque try/catch interceptó el error — llegó hasta el nivel más alto del programa.',
        incorrectFeedback: '"Uncaught" no indica gravedad del tipo de error — indica que no fue capturado por un try/catch. Si hubiera sido manejado, no aparecería como "Uncaught".',
      },
      {
        question: 'En un stack trace, ¿qué línea es más importante para encontrar el bug?',
        options: [
          'La última línea',
          'La del medio',
          'La primera — indica dónde ocurrió el error',
          'Todas son igualmente importantes',
        ],
        correctAnswer: 'La primera — indica dónde ocurrió el error',
        correctFeedback: 'Correcto. El stack trace se lee de arriba hacia abajo. La primera entrada es el punto exacto donde ocurrió el error.',
        incorrectFeedback: 'El stack trace se lee de arriba hacia abajo. La primera línea es donde ocurrió el error; las siguientes muestran cómo se llegó ahí (cadena de llamadas).',
      },
      {
        question: '¿Qué significa `app.js:15:24` en un stack trace?',
        options: [
          'App.js versión 15, build 24',
          'Archivo app.js, línea 15, columna 24',
          'Función número 15, argumento 24',
          'Módulo 15, exportación 24',
        ],
        correctAnswer: 'Archivo app.js, línea 15, columna 24',
        correctFeedback: 'Correcto. El formato es archivo:línea:columna. Puedes hacer clic en este enlace en la consola para ir directamente a esa posición.',
        incorrectFeedback: 'La notación archivo:línea:columna es estándar en los stack traces. Te indica exactamente dónde buscar en tu editor.',
      },
      {
        question: '¿Para qué sirve el stack trace en un mensaje de error de la consola?',
        options: [
          'Para mostrar el rendimiento del programa',
          'Para mostrar la secuencia de llamadas de funciones que llevó al error',
          'Para listar todas las variables del programa',
          'Para indicar qué navegador detectó el error',
        ],
        correctAnswer: 'Para mostrar la secuencia de llamadas de funciones que llevó al error',
        correctFeedback: 'Correcto. El stack trace muestra qué función llamó a qué otra función hasta llegar al error. Es esencial para entender el origen del problema.',
        incorrectFeedback: 'El stack trace (pila de llamadas) muestra el rastro de ejecución: función A llamó a B que llamó a C donde ocurrió el error. Ayuda a encontrar el origen del problema.',
      },
      {
        question: '¿Qué indica el número de línea junto al nombre del archivo en un error de consola (ej: app.js:42)?',
        options: [
          'El número de líneas totales del archivo',
          'La línea exacta del código fuente donde ocurrió el error',
          'El número de errores encontrados en el archivo',
          'La versión del archivo',
        ],
        correctAnswer: 'La línea exacta del código fuente donde ocurrió el error',
        correctFeedback: 'Exacto. El formato archivo.js:42 significa que el error ocurrió en la línea 42 de ese archivo. Puedes ir directamente a esa línea para ver el problema.',
        incorrectFeedback: 'El número de línea es una referencia directa al código fuente. Te lleva exactamente donde mirar. Es una de las informaciones más útiles del mensaje de error.',
      },
    ],
  },

  {
    slug: 'try-catch-javascript',
    title: 'try...catch',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 141,
    description:
      'Aprende a manejar errores con try...catch para evitar que tu programa se detenga inesperadamente.',
    explanation: `## try...catch

El bloque \`try...catch\` permite ejecutar código que puede fallar y manejar el error de forma controlada en lugar de detener el programa.

### Sintaxis básica

\`\`\`js
try {
  // Código que puede fallar
  let resultado = operacionRiesgosa()
  console.log(resultado)
} catch (error) {
  // Se ejecuta si algo en el try lanza un error
  console.log('Ocurrió un error:', error.message)
}
\`\`\`

### Ejemplo práctico

\`\`\`js
function dividir(a, b) {
  if (b === 0) throw new Error('No se puede dividir entre cero')
  return a / b
}

try {
  let resultado = dividir(10, 0)
  console.log(resultado)
} catch (error) {
  console.log('Error:', error.message) // "Error: No se puede dividir entre cero"
}

console.log('El programa continúa aquí') // Sí se ejecuta
\`\`\`

Sin try/catch, el \`throw\` detendría el programa. Con try/catch, lo maneja y continúa.

### El objeto error

El parámetro \`error\` en el catch contiene información:

\`\`\`js
try {
  null.toString()
} catch (error) {
  console.log(error.name)    // "TypeError"
  console.log(error.message) // "Cannot read properties of null..."
  console.log(error.stack)   // Stack trace completo
}
\`\`\`

### Solo captura errores síncronos

try/catch solo funciona con código síncrono. Para código asíncrono (fetch, async/await) necesitas otros mecanismos:

\`\`\`js
// ❌ Este catch NO captura errores de setTimeout
try {
  setTimeout(() => {
    throw new Error('Error en timeout')
  }, 100)
} catch (e) {
  // Esto no se ejecutará
}

// ✅ Para async/await sí funciona
async function cargar() {
  try {
    let datos = await fetch('/api/datos')
    // ...
  } catch (error) {
    console.log('Error de red:', error.message)
  }
}
\`\`\`

### Cuándo usar try/catch

- Al parsear JSON desconocido.
- Al acceder a localStorage.
- Al llamar APIs externas.
- Cuando la operación puede fallar por datos inválidos del usuario.`,
    codeExample: `// storage.js

// ✅ try/catch para operaciones que pueden fallar
function guardarDatos(clave, valor) {
  try {
    const serializado = JSON.stringify(valor)
    localStorage.setItem(clave, serializado)
    return { ok: true }
  } catch (error) {
    // localStorage puede fallar si está lleno o en modo privado
    console.error('No se pudieron guardar los datos:', error.message)
    return { ok: false, error: error.message }
  }
}

function leerDatos(clave) {
  try {
    const dato = localStorage.getItem(clave)
    if (!dato) return null
    return JSON.parse(dato)  // puede fallar si el dato está corrupto
  } catch (error) {
    console.error('Error al leer datos:', error.message)
    // Limpiar el dato corrupto
    localStorage.removeItem(clave)
    return null
  }
}

// Uso
let resultado = guardarDatos('perfil', { nombre: 'Ana', edad: 28 })
if (resultado.ok) {
  console.log('Guardado exitosamente')
} else {
  console.log('No se pudo guardar:', resultado.error)
}

let perfil = leerDatos('perfil')
console.log(perfil) // { nombre: 'Ana', edad: 28 }`,
    keyPoints: [
      'try/catch permite manejar errores sin detener el programa.',
      'El bloque catch recibe el objeto error con name, message y stack.',
      'El código después del try/catch se ejecuta normalmente si el catch manejó el error.',
      'try/catch solo captura errores síncronos — no funciona con callbacks de setTimeout.',
      'Con async/await, try/catch sí captura errores asíncronos.',
      'Usar try/catch en operaciones con datos externos (JSON, localStorage, APIs) es una buena práctica.',
    ],
    exercise: {
      description:
        'Crea una función `parsearConfiguracion(textoJSON)` que use try/catch para parsear el texto JSON. Si el JSON es válido, retorna el objeto parseado. Si no, retorna un objeto de configuración por defecto `{ tema: "claro", idioma: "es" }` y muestra un mensaje de error. Pruébala con JSON válido e inválido.',
      hint: 'JSON.parse lanza SyntaxError si el texto no es JSON válido. En el catch: `return { tema: "claro", idioma: "es" }`. Prueba con `parsearConfiguracion(\'{"tema":"oscuro"}\')` y `parsearConfiguracion("esto no es json")`.',
    },
    quiz: [
      {
        question: '¿Qué sucede con el código después de un try/catch si el error fue capturado?',
        options: [
          'El programa termina después del catch',
          'El código después del try/catch se ejecuta normalmente',
          'Solo se ejecuta si no hubo error',
          'Se ejecuta solo si el catch no hizo console.log',
        ],
        correctAnswer: 'El código después del try/catch se ejecuta normalmente',
        correctFeedback: 'Correcto. try/catch "atrapa" el error y el programa continúa normalmente después del bloque.',
        incorrectFeedback: 'Este es el objetivo de try/catch: manejar el error y permitir que el programa continúe. El código después del bloque se ejecuta sin importar si hubo error o no.',
      },
      {
        question: '¿Qué propiedades tiene el objeto error en el catch?',
        options: [
          'Solo message',
          'name, message y stack',
          'type, description y line',
          'code, text y file',
        ],
        correctAnswer: 'name, message y stack',
        correctFeedback: 'Correcto. Los objetos Error en JavaScript tienen name (tipo de error), message (descripción) y stack (stack trace).',
        incorrectFeedback: 'El objeto Error estándar tiene: name (tipo, ej: "TypeError"), message (descripción legible), y stack (stack trace completo).',
      },
      {
        question: '¿Por qué try/catch NO captura errores en setTimeout?',
        options: [
          'Porque setTimeout no puede lanzar errores',
          'Porque el callback de setTimeout se ejecuta fuera del contexto del try/catch original',
          'Porque try/catch solo funciona en funciones flecha',
          'Porque los errores de setTimeout son de tipo diferente',
        ],
        correctAnswer: 'Porque el callback de setTimeout se ejecuta fuera del contexto del try/catch original',
        correctFeedback: 'Correcto. setTimeout agenda el callback para ejecutarse después, en una pila de llamadas diferente. El try/catch ya terminó cuando el callback se ejecuta.',
        incorrectFeedback: 'try/catch solo captura errores que ocurren síncronamente dentro del bloque try. El callback de setTimeout se ejecuta en un ciclo del event loop posterior — el try/catch ya no está activo.',
      },
      {
        question: '¿En cuál de estos casos es más apropiado usar try/catch?',
        options: [
          'Al declarar variables',
          'Al parsear JSON de una fuente externa',
          'Al sumar dos números',
          'Al acceder a una variable local conocida',
        ],
        correctAnswer: 'Al parsear JSON de una fuente externa',
        correctFeedback: 'Correcto. JSON.parse lanza SyntaxError si el texto no es JSON válido — perfectamente manejable con try/catch.',
        incorrectFeedback: 'try/catch es útil cuando hay riesgo real de error: datos externos, localStorage, APIs. Sumar números o acceder a variables locales conocidas no necesitan try/catch.',
      },
      {
        question: '¿Qué contiene el parámetro `err` del bloque catch?',
        options: [
          'El código de línea donde ocurrió el error',
          'Un objeto de error con propiedades como message y stack',
          'Solo un string con el mensaje de error',
          'Un número de código de error HTTP',
        ],
        correctAnswer: 'Un objeto de error con propiedades como message y stack',
        correctFeedback: 'Correcto. err es un objeto Error con propiedades como err.message (el mensaje) y err.stack (el stack trace). También puedes ver err.name para el tipo de error.',
        incorrectFeedback: 'catch recibe un objeto Error. Los objetos Error tienen .message para el mensaje descriptivo y .stack para la pila de llamadas. También tiene .name con el tipo de error.',
      },
    ],
  },

  {
    slug: 'throw-javascript',
    title: 'throw',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 142,
    description:
      'Aprende a lanzar tus propios errores cuando una función recibe datos inválidos.',
    explanation: `## throw — Lanzar errores propios

\`throw\` te permite lanzar tus propios errores cuando una función recibe datos inválidos o cuando algo no debería ocurrir.

### Sintaxis básica

\`\`\`js
throw new Error('Mensaje de error')
\`\`\`

O puedes lanzar cualquier valor (aunque Error es la mejor práctica):

\`\`\`js
throw 'Algo salió mal'  // válido pero no recomendado
throw 42               // también válido pero sin información útil
throw new Error('Mensaje descriptivo')  // ✅ recomendado
\`\`\`

### ¿Cuándo usar throw?

Cuando una función no puede hacer lo que promete con los datos que recibió:

\`\`\`js
function dividir(a, b) {
  if (b === 0) {
    throw new Error('División por cero no permitida')
  }
  return a / b
}

function calcularEdad(anioNacimiento) {
  const anioActual = new Date().getFullYear()
  if (anioNacimiento > anioActual) {
    throw new Error('El año de nacimiento no puede ser futuro')
  }
  return anioActual - anioNacimiento
}
\`\`\`

### throw detiene la función inmediatamente

\`\`\`js
function procesarPago(monto) {
  if (monto <= 0) throw new Error('El monto debe ser positivo')
  if (monto > 10000) throw new Error('Monto excede el límite')

  // Solo llega aquí si monto es válido
  console.log('Procesando pago de $' + monto)
  return true
}
\`\`\`

### Tipos de Error predefinidos

\`\`\`js
throw new TypeError('Se esperaba un número')
throw new RangeError('El valor debe estar entre 1 y 100')
throw new Error('Error genérico')
\`\`\`

### throw + catch juntos

\`\`\`js
function registrarUsuario(datos) {
  if (!datos.email) throw new Error('El email es obligatorio')
  if (!datos.nombre) throw new Error('El nombre es obligatorio')
  // ... proceso de registro
  return { ok: true }
}

try {
  registrarUsuario({ nombre: 'Ana' })  // sin email
} catch (error) {
  console.log('Registro fallido:', error.message)
  // "Registro fallido: El email es obligatorio"
}
\`\`\``,
    codeExample: `// validators.js — funciones que lanzan errores descriptivos

function validarEdad(edad) {
  if (typeof edad !== 'number') {
    throw new TypeError('La edad debe ser un número')
  }
  if (edad < 0 || edad > 150) {
    throw new RangeError('La edad debe estar entre 0 y 150')
  }
  return edad
}

function validarEmail(email) {
  if (typeof email !== 'string') {
    throw new TypeError('El email debe ser texto')
  }
  if (!email.includes('@') || !email.includes('.')) {
    throw new Error('Formato de email inválido')
  }
  return email.trim().toLowerCase()
}

function registrarUsuario(nombre, email, edad) {
  // Los throws de validators se propagan hacia arriba
  validarEmail(email)
  validarEdad(edad)

  if (!nombre || nombre.trim().length < 2) {
    throw new Error('El nombre debe tener al menos 2 caracteres')
  }

  return {
    nombre: nombre.trim(),
    email: email.trim().toLowerCase(),
    edad,
    registradoEn: new Date().toISOString(),
  }
}

// Uso con try/catch
try {
  let usuario = registrarUsuario('Ana', 'ana@ejemplo.com', 28)
  console.log('Usuario registrado:', usuario.nombre)
} catch (error) {
  console.log('Error de validación:', error.message)
}

try {
  registrarUsuario('B', 'email-invalido', 25)
} catch (error) {
  console.log('Error:', error.message) // "Formato de email inválido"
}`,
    keyPoints: [
      'throw detiene la ejecución de la función y lanza el error hacia arriba.',
      'Siempre lanza instancias de Error (o sus subclases) para tener message y stack útiles.',
      'Usa TypeError cuando el tipo de dato es incorrecto, RangeError cuando el valor está fuera de rango.',
      'throw es ideal para validaciones en funciones — "falla rápido" con un mensaje claro.',
      'Los errores lanzados con throw pueden ser capturados con try/catch en el código que llama a la función.',
      'throw hace que el código sea más predecible: falla con un mensaje claro en lugar de producir resultados incorrectos.',
    ],
    exercise: {
      description:
        'Crea una función `crearProducto(nombre, precio, stock)` que valide los datos y lance errores descriptivos si: el nombre está vacío o tiene menos de 3 caracteres, el precio es menor o igual a 0, o el stock es negativo. Si todos son válidos, retorna un objeto producto. Pruébala con datos válidos e inválidos usando try/catch.',
      hint: 'Usa `throw new Error("mensaje")` para cada validación. Recuerda que throw detiene la función inmediatamente, así que puedes tener múltiples validaciones seguidas.',
    },
    quiz: [
      {
        question: '¿Qué sucede con el código después de un `throw` en una función?',
        options: [
          'El código continúa ejecutándose normalmente',
          'La ejecución de la función se detiene inmediatamente',
          'Solo se detiene si no hay try/catch',
          'El valor lanzado se convierte en el valor de retorno',
        ],
        correctAnswer: 'La ejecución de la función se detiene inmediatamente',
        correctFeedback: 'Correcto. throw es como un return que falla — detiene la función ahí mismo y transfiere el control al catch más cercano.',
        incorrectFeedback: 'throw detiene la ejecución de la función inmediatamente, sin importar si hay try/catch. La diferencia es qué pasa después: con catch se maneja, sin catch el programa se detiene.',
      },
      {
        question: '¿Por qué es mejor `throw new Error("mensaje")` que `throw "mensaje"`?',
        options: [
          'Porque los strings no se pueden lanzar en JavaScript',
          'Porque Error incluye name, message y stack trace — más útil para depurar',
          'Porque es más corto de escribir',
          'Porque solo Error puede ser capturado por catch',
        ],
        correctAnswer: 'Porque Error incluye name, message y stack trace — más útil para depurar',
        correctFeedback: 'Correcto. El objeto Error tiene name, message y stack. Lanzar un string o número no proporciona stack trace, lo que dificulta encontrar el origen del error.',
        incorrectFeedback: 'Puedes lanzar cualquier valor, pero Error da más información. El stack trace indica exactamente de dónde vino el error — crucial para depurar.',
      },
      {
        question: '¿Cuál de estas es la forma más apropiada de lanzar un error de tipo incorrecto?',
        options: [
          'throw "TypeError"',
          'throw new Error("tipo incorrecto")',
          'throw new TypeError("Se esperaba un número")',
          'console.error("TypeError")',
        ],
        correctAnswer: 'throw new TypeError("Se esperaba un número")',
        correctFeedback: 'Correcto. TypeError es la clase de error específica para problemas de tipo. Usar la clase correcta hace el código más descriptivo.',
        incorrectFeedback: 'JavaScript tiene clases de error específicas: TypeError para tipos incorrectos, RangeError para valores fuera de rango. Usarlas hace el código más expresivo.',
      },
      {
        question: '¿Qué patrón de diseño representa usar throw en funciones de validación?',
        options: [
          '"Fail silently" — fallar sin ruido',
          '"Fail fast" — fallar pronto con mensaje claro',
          '"Return null" — devolver null en vez de error',
          '"Try everything" — intentar todas las alternativas',
        ],
        correctAnswer: '"Fail fast" — fallar pronto con mensaje claro',
        correctFeedback: 'Correcto. "Fail fast" significa detectar problemas lo antes posible y comunicarlos claramente, en lugar de dejar que el error se propague silenciosamente.',
        incorrectFeedback: 'throw implementa el principio "fail fast": detectar y comunicar el error lo antes posible, con un mensaje claro, en lugar de continuar con datos inválidos.',
      },
      {
        question: '¿Qué pasa con el código que viene después de una instrucción throw?',
        options: [
          'Se ejecuta normalmente',
          'Se ejecuta solo si hay un try-catch',
          'No se ejecuta — throw interrumpe el flujo inmediatamente',
          'Se ejecuta después de que el error es capturado',
        ],
        correctAnswer: 'No se ejecuta — throw interrumpe el flujo inmediatamente',
        correctFeedback: 'Correcto. throw es como un return forzado que además lanza un error. El código después de throw no se ejecuta; el control pasa al bloque catch más cercano.',
        incorrectFeedback: 'throw interrumpe la ejecución inmediatamente. Es similar a return pero lanza un error en lugar de devolver un valor. El código posterior a throw no se ejecuta.',
      },
    ],
  },

  {
    slug: 'finally-javascript',
    title: 'finally',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 143,
    description:
      'Aprende cómo usar finally para ejecutar código sin importar si hubo error o no.',
    explanation: `## finally — Código que siempre se ejecuta

El bloque \`finally\` se ejecuta siempre, haya habido error o no. Es útil para limpiar recursos, ocultar indicadores de carga, o cerrar conexiones.

### Sintaxis

\`\`\`js
try {
  // Código que puede fallar
} catch (error) {
  // Se ejecuta si hay error
} finally {
  // Se ejecuta SIEMPRE — con error o sin él
}
\`\`\`

### Ejemplo: botón de carga

\`\`\`js
async function enviarFormulario(datos) {
  const boton = document.getElementById('btnEnviar')
  boton.disabled = true
  boton.textContent = 'Enviando...'

  try {
    let respuesta = await guardarDatos(datos)
    mostrarExito('¡Datos guardados!')
  } catch (error) {
    mostrarError('No se pudieron guardar los datos')
  } finally {
    // Siempre restaura el botón, haya habido error o no
    boton.disabled = false
    boton.textContent = 'Enviar'
  }
}
\`\`\`

### finally con return

Si el try o catch tienen \`return\`, finally igual se ejecuta antes de salir:

\`\`\`js
function cargarDatos() {
  try {
    return obtenerDatos()  // return aquí
  } catch (error) {
    return null
  } finally {
    console.log('Siempre se ejecuta')  // Se ejecuta antes del return
  }
}
\`\`\`

### try/finally sin catch

También puedes usar try/finally sin catch — útil cuando no quieres manejar el error pero sí necesitas limpiar:

\`\`\`js
function usarRecurso() {
  abrirConexion()
  try {
    return procesarDatos()
  } finally {
    cerrarConexion()  // siempre cierra la conexión
  }
}
\`\`\`

### Casos de uso típicos

- Ocultar spinners de carga.
- Restaurar el estado de botones.
- Liberar recursos (conexiones, archivos).
- Registrar que una operación terminó (con o sin error).`,
    codeExample: `// app.js

function gestionarEstadoCarga(iniciar, finalizar) {
  iniciar()
  return finalizar
}

// Simulación de carga con try/catch/finally
function cargarPerfilUsuario(userId) {
  let cargando = true
  console.log('⏳ Cargando perfil...')

  try {
    // Simulamos éxito o error según el ID
    if (userId <= 0) {
      throw new Error('ID de usuario inválido')
    }

    // Datos simulados del usuario
    let perfil = {
      id: userId,
      nombre: 'Ana García',
      email: 'ana@ejemplo.com',
    }

    console.log('✅ Perfil cargado:', perfil.nombre)
    return perfil

  } catch (error) {
    console.log('❌ Error al cargar perfil:', error.message)
    return null

  } finally {
    // Siempre se ejecuta — aquí ocultaríamos el spinner
    cargando = false
    console.log('🏁 Carga finalizada (cargando:', cargando + ')')
  }
}

let perfil1 = cargarPerfilUsuario(5)
// ⏳ Cargando perfil...
// ✅ Perfil cargado: Ana García
// 🏁 Carga finalizada (cargando: false)

let perfil2 = cargarPerfilUsuario(-1)
// ⏳ Cargando perfil...
// ❌ Error al cargar perfil: ID de usuario inválido
// 🏁 Carga finalizada (cargando: false)`,
    keyPoints: [
      'finally se ejecuta siempre, haya habido error o no, y haya return o no.',
      'Es ideal para código de limpieza: restaurar estados, liberar recursos.',
      'Si el try hace return, finally se ejecuta antes de que la función retorne.',
      'Puedes usar try/finally sin catch cuando no quieres manejar el error pero sí limpiar.',
      'Casos típicos: ocultar spinners, restaurar botones, cerrar conexiones.',
      'finally no puede "cancelar" un error — si no hay catch, el error sigue propagándose después del finally.',
    ],
    exercise: {
      description:
        'Crea una función `procesarArchivo(nombre)` que simule leer un archivo. Usa try/catch/finally donde: en el try verifica si el nombre termina en ".txt" (si no, lanza Error), y simula leer el contenido. En el catch muestra el error. En el finally siempre muestra "Operación de archivo finalizada". Pruébala con ".txt" y sin ".txt".',
      hint: 'Usa `nombre.endsWith(".txt")` para verificar la extensión. En el finally: `console.log("Operación de archivo finalizada")` — debe mostrarse en ambos casos.',
    },
    quiz: [
      {
        question: '¿En qué situación NO se ejecuta el bloque finally?',
        options: [
          'Cuando el try termina sin error',
          'Cuando el catch maneja un error',
          'Cuando hay un return en el try',
          'Prácticamente siempre se ejecuta — casi no hay excepciones normales',
        ],
        correctAnswer: 'Prácticamente siempre se ejecuta — casi no hay excepciones normales',
        correctFeedback: 'Correcto. El finally es casi garantizado — solo en casos extremos como `process.exit()` en Node.js o un crash del navegador no se ejecutaría.',
        incorrectFeedback: 'El finally se ejecuta con o sin error, con o sin return. Solo situaciones extremas como `process.exit()` o un crash del programa lo omitirían.',
      },
      {
        question: '¿Para qué es ideal usar el bloque finally?',
        options: [
          'Para volver a intentar la operación que falló',
          'Para código de limpieza que debe ejecutarse siempre: ocultar spinners, liberar recursos',
          'Para mostrar mensajes de error al usuario',
          'Para convertir el error en un valor de retorno',
        ],
        correctAnswer: 'Para código de limpieza que debe ejecutarse siempre: ocultar spinners, liberar recursos',
        correctFeedback: 'Correcto. finally garantiza que el código de limpieza corre sin importar el resultado — perfecto para restaurar estados de UI o liberar recursos.',
        incorrectFeedback: 'El catch maneja errores; el finally es para limpieza. Ocultar un spinner, restaurar un botón, cerrar una conexión — cosas que deben pasar siempre.',
      },
      {
        question: '¿Es posible usar try/finally sin catch?',
        options: [
          'No — catch es obligatorio si usas try',
          'Sí — útil cuando no quieres manejar el error pero sí necesitas limpiar recursos',
          'Sí — pero solo en funciones async',
          'No — finally necesita catch para funcionar',
        ],
        correctAnswer: 'Sí — útil cuando no quieres manejar el error pero sí necesitas limpiar recursos',
        correctFeedback: 'Correcto. try/finally sin catch es válido. El error se propaga normalmente, pero finally garantiza que el código de limpieza se ejecute antes.',
        incorrectFeedback: 'try/finally sin catch es perfectamente válido. El error no se captura (se propaga al siguiente nivel), pero finally garantiza que se ejecute el código de limpieza.',
      },
      {
        question: '¿El bloque finally se ejecuta si try lanza un error capturado por catch?',
        options: [
          'No — solo se ejecuta si no hay errores',
          'Sí — finally siempre se ejecuta, independientemente de si hubo error o no',
          'Depende del tipo de error',
          'Solo si catch no tiene código dentro',
        ],
        correctAnswer: 'Sí — finally siempre se ejecuta, independientemente de si hubo error o no',
        correctFeedback: 'Correcto. finally SIEMPRE se ejecuta: con error o sin él, después de try o después de catch. Es la garantía de que ese código se ejecutará sí o sí.',
        incorrectFeedback: 'La palabra clave de finally es siempre. Se ejecuta tanto si try terminó bien como si hubo un error capturado por catch. También se ejecuta si hay un return en try.',
      },
      {
        question: '¿Cuál es el caso de uso más común para el bloque finally?',
        options: [
          'Para agregar más código que podría lanzar errores adicionales',
          'Para liberar recursos (cerrar conexiones, ocultar loaders) sin importar si hubo error',
          'Para reintentar la operación que falló',
          'Para modificar el error antes de que llegue al catch',
        ],
        correctAnswer: 'Para liberar recursos (cerrar conexiones, ocultar loaders) sin importar si hubo error',
        correctFeedback: 'Exacto. finally garantiza que los recursos se limpien siempre: ocultar un loading spinner, cerrar una conexión, liberar un lock — sin importar si la operación tuvo éxito o falló.',
        incorrectFeedback: 'finally no es para reintentar ni para más lógica de negocio. Es para limpieza garantizada: ocultar spinners, cerrar archivos, liberar recursos — cosas que deben pasar siempre.',
      },
    ],
  },

  {
    slug: 'validaciones-defensivas',
    title: 'Validaciones defensivas',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 144,
    description:
      'Aprende a validar datos antes de usarlos para evitar errores comunes en tiempo de ejecución.',
    explanation: `## Validaciones defensivas

La programación defensiva consiste en verificar datos antes de usarlos, anticipando posibles valores incorrectos.

### Verificar null/undefined antes de acceder a propiedades

\`\`\`js
// ❌ Puede lanzar TypeError
function mostrarNombre(usuario) {
  return usuario.nombre.toUpperCase()
}

// ✅ Verificación defensiva
function mostrarNombre(usuario) {
  if (!usuario || !usuario.nombre) {
    return 'Sin nombre'
  }
  return usuario.nombre.toUpperCase()
}
\`\`\`

### Optional chaining (?.)

Una forma más concisa de acceder de forma segura:

\`\`\`js
let nombre = usuario?.nombre ?? 'Invitado'
let ciudad = usuario?.direccion?.ciudad ?? 'No especificada'
\`\`\`

### Verificar tipos

\`\`\`js
function calcularDescuento(precio, porcentaje) {
  if (typeof precio !== 'number' || typeof porcentaje !== 'number') {
    throw new TypeError('precio y porcentaje deben ser números')
  }
  if (precio < 0) throw new RangeError('El precio no puede ser negativo')
  if (porcentaje < 0 || porcentaje > 100) throw new RangeError('Porcentaje inválido')

  return precio * (1 - porcentaje / 100)
}
\`\`\`

### Verificar arrays antes de iterar

\`\`\`js
// ❌ Puede fallar si productos es undefined
function calcularTotal(productos) {
  return productos.reduce((s, p) => s + p.precio, 0)
}

// ✅ Defensivo
function calcularTotal(productos) {
  if (!Array.isArray(productos)) return 0
  return productos.reduce((s, p) => s + (p?.precio ?? 0), 0)
}
\`\`\`

### Valores por defecto como defensa

\`\`\`js
function configurar({ tema = 'claro', idioma = 'es', fontSize = 14 } = {}) {
  // Si no se pasan parámetros, usa los defaults
  return { tema, idioma, fontSize }
}

configurar()                    // { tema:'claro', idioma:'es', fontSize:14 }
configurar({ tema: 'oscuro' })  // { tema:'oscuro', idioma:'es', fontSize:14 }
\`\`\`

### El operador nullish coalescing (??)

\`\`\`js
let valor = datosApi.precio ?? 0  // 0 solo si precio es null o undefined (no si es 0)
let texto = respuesta.mensaje ?? 'Sin mensaje'
\`\`\``,
    codeExample: `// utils.js — funciones con validaciones defensivas

function procesarPedido(pedido) {
  // Verificar que pedido existe y tiene la estructura esperada
  if (!pedido || typeof pedido !== 'object') {
    throw new TypeError('Se esperaba un objeto pedido')
  }

  // Verificar campos requeridos
  if (!pedido.id) throw new Error('El pedido debe tener id')
  if (!Array.isArray(pedido.items) || pedido.items.length === 0) {
    throw new Error('El pedido debe tener al menos un item')
  }

  // Calcular total de forma defensiva
  let total = pedido.items.reduce((suma, item) => {
    // Cada item puede estar mal formado
    if (!item || typeof item.precio !== 'number') return suma
    let cantidad = item.cantidad ?? 1  // default 1 si no hay cantidad
    return suma + item.precio * cantidad
  }, 0)

  // Aplicar descuento si existe
  let descuento = pedido.descuento ?? 0
  if (descuento < 0 || descuento > 1) descuento = 0  // sanitizar

  return {
    id: pedido.id,
    total: total * (1 - descuento),
    items: pedido.items.length,
  }
}

// Prueba con datos normales
console.log(procesarPedido({
  id: 'PED-001',
  items: [{ precio: 100, cantidad: 2 }, { precio: 50 }],
  descuento: 0.1,
}))
// { id: 'PED-001', total: 225, items: 2 }`,
    keyPoints: [
      'Verifica null/undefined antes de acceder a propiedades de objetos.',
      'Optional chaining (?.) permite acceso seguro sin TypeError.',
      'El operador ?? devuelve el valor derecho solo si el izquierdo es null o undefined.',
      'Verifica tipos con typeof antes de operaciones que los asumen.',
      'Los valores por defecto en parámetros son una forma elegante de programación defensiva.',
      'Filtra o salteate datos inválidos en arrays con filtros defensivos.',
    ],
    exercise: {
      description:
        'Crea una función `calcularPromedioCalificaciones(estudiante)` que sea completamente defensiva. Debe manejar: estudiante = null/undefined, estudiante sin propiedad `calificaciones`, `calificaciones` que no sea un array, array vacío, y calificaciones que no sean números. En todos los casos problemáticos, retorna 0 con un mensaje de warning en consola.',
      hint: 'Encadena las verificaciones: `if (!estudiante) return 0`, `if (!Array.isArray(estudiante.calificaciones)) return 0`, `if (calificaciones.length === 0) return 0`. Luego filtra con `.filter(c => typeof c === "number")`.',
    },
    quiz: [
      {
        question: '¿Qué hace `valor?.propiedad` si `valor` es null?',
        options: [
          'Lanza TypeError',
          'Devuelve undefined sin error',
          'Devuelve null',
          'Devuelve 0',
        ],
        correctAnswer: 'Devuelve undefined sin error',
        correctFeedback: 'Correcto. El optional chaining (?.) detiene la evaluación si el lado izquierdo es null o undefined, devolviendo undefined en lugar de lanzar TypeError.',
        incorrectFeedback: 'El optional chaining (?.) es exactamente para esto: acceso seguro a propiedades cuando el objeto puede ser null/undefined. Devuelve undefined en lugar de lanzar error.',
      },
      {
        question: '¿Cuál es la diferencia entre `||` y `??` para valores por defecto?',
        options: [
          'No hay diferencia, son equivalentes',
          '|| usa defecto para valores falsy (incluyendo 0, ""); ?? solo para null o undefined',
          '?? usa defecto para valores falsy; || solo para null',
          '?? es más rápido que ||',
        ],
        correctAnswer: '|| usa defecto para valores falsy (incluyendo 0, ""); ?? solo para null o undefined',
        correctFeedback: 'Correcto. `valor || "default"` usa el default si valor es 0, "", false, null, o undefined. `valor ?? "default"` solo usa el default si valor es null o undefined.',
        incorrectFeedback: '`||` activa el default para cualquier valor falsy (0, "", false, null, undefined). `??` solo para null y undefined — importante cuando 0 o "" son valores válidos.',
      },
      {
        question: '¿Por qué es importante verificar `Array.isArray()` antes de iterar un supuesto array?',
        options: [
          'Porque los arrays no tienen método forEach por defecto',
          'Porque si el valor es null, undefined, u otro tipo, los métodos de array lanzarán TypeError',
          'Porque Array.isArray() mejora el rendimiento del forEach',
          'Porque solo funciona con arrays creados con []',
        ],
        correctAnswer: 'Porque si el valor es null, undefined, u otro tipo, los métodos de array lanzarán TypeError',
        correctFeedback: 'Correcto. Llamar .map() o .forEach() en algo que no es array (null, string, número) lanza TypeError. Array.isArray() es la verificación más confiable.',
        incorrectFeedback: 'Si llamas .map() o .reduce() en null, undefined, o un número, JavaScript lanza TypeError. Array.isArray() verifica que realmente sea un array antes de iterar.',
      },
      {
        question: '¿En qué consiste la programación defensiva?',
        options: [
          'Lanzar muchos throw para cualquier condición',
          'Verificar que los datos de entrada son válidos antes de procesarlos',
          'Envolver todo el código en try-catch',
          'Ignorar los errores para que el programa no se detenga',
        ],
        correctAnswer: 'Verificar que los datos de entrada son válidos antes de procesarlos',
        correctFeedback: 'Correcto. La programación defensiva verifica primero que los datos son del tipo y formato esperado. Esto previene errores más adelante en la ejecución.',
        incorrectFeedback: 'Validación defensiva es proactiva: verificar los datos al recibirlos antes de usarlos. No es sobre try-catch (reactivo) sino sobre comprobar condiciones antes de que causen problemas.',
      },
      {
        question: '¿Cuál es una validación defensiva correcta para una función que espera un número?',
        options: [
          'function calcular(n) { return n * 2 }',
          'function calcular(n) { if (typeof n !== "number") throw new Error("Se esperaba un número"); return n * 2 }',
          'function calcular(n) { try { return n * 2 } catch(e) { return 0 } }',
          'function calcular(n) { n = Number(n); return n * 2 }',
        ],
        correctAnswer: 'function calcular(n) { if (typeof n !== "number") throw new Error("Se esperaba un número"); return n * 2 }',
        correctFeedback: 'Correcto. Verificar el tipo antes de procesar y lanzar un error descriptivo si es incorrecto es la forma correcta de validación defensiva.',
        incorrectFeedback: 'La validación defensiva es explícita: comprueba el tipo del dato y lanza un error claro si es incorrecto. Convertir silenciosamente con Number() puede ocultar bugs.',
      },
    ],
  },

  {
    slug: 'mostrar-errores-utiles',
    title: 'Mostrar errores útiles al usuario',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 145,
    description:
      'Aprende a mostrar mensajes claros al usuario sin exponer errores técnicos innecesarios.',
    explanation: `## Mostrar errores útiles al usuario

Hay una diferencia entre el error técnico (para el desarrollador) y el mensaje que el usuario debe ver.

### El problema de mostrar errores técnicos

\`\`\`
❌ "TypeError: Cannot read properties of undefined (reading 'email')"
\`\`\`

El usuario no sabe qué hacer con eso. Y además puede exponer información sobre la estructura interna.

### Mensajes útiles al usuario

\`\`\`
✅ "No pudimos guardar tu perfil. Por favor intenta de nuevo."
✅ "El email ingresado no es válido."
✅ "Error de conexión. Verifica tu internet e intenta de nuevo."
\`\`\`

### El patrón: separar el error interno del mensaje de usuario

\`\`\`js
async function guardarPerfil(datos) {
  try {
    await fetch('/api/perfil', { method: 'POST', body: JSON.stringify(datos) })
    mostrarMensaje('¡Perfil guardado exitosamente!', 'success')
  } catch (error) {
    // Log técnico — para el desarrollador
    console.error('[guardarPerfil] Error:', error)

    // Mensaje amigable — para el usuario
    mostrarMensaje('No pudimos guardar tu perfil. Por favor intenta de nuevo.', 'error')
  }
}
\`\`\`

### Personalizar mensajes según el tipo de error

\`\`\`js
function getMensajeUsuario(error) {
  if (error.message.includes('network') || error.message.includes('fetch')) {
    return 'Error de conexión. Verifica tu internet.'
  }
  if (error.message.includes('unauthorized') || error.message.includes('401')) {
    return 'Tu sesión expiró. Por favor inicia sesión de nuevo.'
  }
  if (error.message.includes('not found') || error.message.includes('404')) {
    return 'No encontramos lo que buscabas.'
  }
  return 'Algo salió mal. Por favor intenta de nuevo.'
}
\`\`\`

### Mostrar errores de validación específicos

Para errores de validación de formularios, sí es apropiado ser específico:

\`\`\`js
// ✅ Específico cuando el usuario puede corregirlo
"El email debe tener formato usuario@dominio.com"
"La contraseña debe tener al menos 8 caracteres"
"El nombre no puede estar vacío"

// ❌ Demasiado técnico
"RangeError: email validation failed at index 3"
\`\`\`

### Seguridad: no expongas información sensible

\`\`\`js
// ❌ Peligroso — revela estructura interna
"Error en la consulta SQL: SELECT * FROM users WHERE id = 5"

// ✅ Seguro
"No se pudo encontrar tu cuenta. Contacta soporte si el problema persiste."
\`\`\``,
    codeExample: `// app.js — manejo de errores con mensajes de usuario

function mostrarMensaje(texto, tipo = 'info') {
  const colores = {
    success: 'color: green',
    error: 'color: red',
    warning: 'color: orange',
    info: 'color: blue',
  }
  console.log('%c' + texto, colores[tipo] || colores.info)
}

function getMensajeAmigable(error) {
  // Errores de validación — el usuario puede corregirlos
  if (error.name === 'ValidationError') {
    return error.message  // ya es un mensaje amigable
  }

  // Mapa de errores técnicos → mensajes amigables
  const mensajes = {
    'Failed to fetch': 'No hay conexión a internet. Verifica tu red.',
    'Network Error': 'No hay conexión. Intenta de nuevo.',
    'Unauthorized': 'Tu sesión expiró. Inicia sesión de nuevo.',
    'Not Found': 'El recurso no fue encontrado.',
  }

  for (let [clave, mensaje] of Object.entries(mensajes)) {
    if (error.message.includes(clave)) return mensaje
  }

  // Mensaje genérico para errores desconocidos
  return 'Ocurrió un error. Por favor intenta de nuevo.'
}

function procesarFormulario(datos) {
  try {
    if (!datos.nombre) throw Object.assign(new Error('El nombre es obligatorio'), { name: 'ValidationError' })
    if (!datos.email?.includes('@')) throw Object.assign(new Error('El email no es válido'), { name: 'ValidationError' })

    // Simulamos operación exitosa
    mostrarMensaje('✅ Formulario enviado exitosamente', 'success')
    return true

  } catch (error) {
    // Log técnico para el desarrollador
    console.error('[procesarFormulario]', error)

    // Mensaje amigable para el usuario
    mostrarMensaje('❌ ' + getMensajeAmigable(error), 'error')
    return false
  }
}

procesarFormulario({ nombre: '', email: 'ana@ejemplo.com' })
procesarFormulario({ nombre: 'Ana', email: 'ana@ejemplo.com' })`,
    keyPoints: [
      'Separa siempre el log técnico (console.error) del mensaje que ve el usuario.',
      'Los mensajes de usuario deben ser claros, accionables y sin jerga técnica.',
      'No expongas stack traces, nombres de tablas, rutas internas, ni mensajes SQL al usuario.',
      'Para errores de validación que el usuario puede corregir, sé específico y útil.',
      'Para errores internos/de sistema, usa mensajes genéricos que no revelen la estructura.',
      'Mantener un mapa de errores técnicos a mensajes amigables es una buena práctica.',
    ],
    exercise: {
      description:
        'Crea una función `registrarUsuario(nombre, email, password)` que: valide los datos (nombre no vacío, email con @, password de al menos 8 chars), use try/catch para manejar errores de validación, muestre mensajes amigables al usuario con una función `mostrarError(mensaje)` y un log técnico con console.error. Usa mensajes que el usuario pueda entender y actuar sobre ellos.',
      hint: 'Crea errores con `throw new Error("mensaje amigable")` para validaciones. En el catch, el mensaje ya es amigable, así que puedes usar `mostrarError(error.message)` para errores de validación. Para errores inesperados, usa un mensaje genérico.',
    },
    quiz: [
      {
        question: '¿Por qué no debes mostrar errores técnicos directamente al usuario?',
        options: [
          'Porque los usuarios los ignorarán de todos modos',
          'Porque pueden exponer información interna y no son útiles para el usuario',
          'Porque los errores técnicos en JavaScript siempre son en inglés',
          'Porque aumenta el tamaño de la página',
        ],
        correctAnswer: 'Porque pueden exponer información interna y no son útiles para el usuario',
        correctFeedback: 'Correcto. Los mensajes técnicos como "SELECT * FROM users" o rutas de archivos revelan la estructura interna (riesgo de seguridad) y no ayudan al usuario a resolver el problema.',
        incorrectFeedback: 'Es un tema de seguridad Y de usabilidad. Los errores técnicos pueden revelar la arquitectura del sistema (útil para atacantes) y confunden al usuario en lugar de ayudarlo.',
      },
      {
        question: '¿Cuál es el mensaje de error más útil para un usuario que no pudo iniciar sesión?',
        options: [
          '"Error 401: Unauthorized. JWT validation failed"',
          '"TypeError: user.password is not matching hash"',
          '"Tu email o contraseña son incorrectos. Por favor verifica."',
          '"Error en la base de datos al validar credenciales"',
        ],
        correctAnswer: '"Tu email o contraseña son incorrectos. Por favor verifica."',
        correctFeedback: 'Correcto. Este mensaje es claro, accionable, y no revela si el email existe o no (lo cual sería un problema de seguridad).',
        incorrectFeedback: 'El mensaje útil es el que le dice al usuario qué puede hacer: verificar su email y contraseña. Los mensajes técnicos no ayudan y pueden ser peligrosos.',
      },
      {
        question: '¿Por qué no se debe mostrar el error técnico directamente al usuario en producción?',
        options: [
          'Porque los usuarios no pueden ver la consola del navegador',
          'Porque los mensajes técnicos confunden al usuario y pueden exponer información sensible del sistema',
          'Porque los errores técnicos no tienen información útil',
          'Porque JavaScript no permite mostrar mensajes de error',
        ],
        correctAnswer: 'Porque los mensajes técnicos confunden al usuario y pueden exponer información sensible del sistema',
        correctFeedback: 'Correcto. Los errores como "TypeError: Cannot read property" no son útiles para el usuario y pueden revelar detalles internos del sistema a actores malintencionados.',
        incorrectFeedback: 'Los mensajes técnicos tienen dos problemas: confunden a usuarios no técnicos, y pueden revelar rutas de archivos o estructura interna que son un riesgo de seguridad.',
      },
      {
        question: '¿Qué información debe incluir un buen mensaje de error para el usuario?',
        options: [
          'El stack trace completo y el nombre del archivo donde ocurrió',
          'Qué salió mal en términos simples y qué puede hacer el usuario para solucionarlo',
          'El código de error interno del sistema',
          'La versión de JavaScript del navegador',
        ],
        correctAnswer: 'Qué salió mal en términos simples y qué puede hacer el usuario para solucionarlo',
        correctFeedback: 'Exacto. Un buen mensaje de error para el usuario dice qué pasó en lenguaje claro y, si es posible, qué puede hacer: "No se pudo guardar. Verifica tu conexión e intenta de nuevo."',
        incorrectFeedback: 'El stack trace y los códigos internos son para desarrolladores. El usuario necesita: qué pasó (simple y claro) y qué puede hacer al respecto.',
      },
      {
        question: '¿Cuál es la práctica recomendada para registrar errores en producción?',
        options: [
          'Mostrar todos los errores en console.error para que los usuarios los vean',
          'Ignorar los errores para no interrumpir la experiencia del usuario',
          'Registrar el error en un sistema de monitoreo y mostrar un mensaje amigable al usuario',
          'Guardar los errores solo en localStorage del navegador',
        ],
        correctAnswer: 'Registrar el error en un sistema de monitoreo y mostrar un mensaje amigable al usuario',
        correctFeedback: 'Correcto. La práctica es doble: registrar los detalles técnicos en un sistema de monitoreo (para los desarrolladores) y mostrar un mensaje simple y amigable al usuario.',
        incorrectFeedback: 'Console.error es solo para desarrollo. En producción: registra detalles técnicos en un servicio de monitoreo, y muestra al usuario un mensaje simple y amigable.',
      },
    ],
  },

  {
    slug: 'buenas-practicas-errores-js',
    title: 'Buenas prácticas al manejar errores',
    module: 'Manejo de errores',
    moduleNumber: 19,
    order: 146,
    description:
      'Aprende cuándo manejar un error, cuándo dejarlo subir y cómo evitar silencios que dificultan depurar.',
    explanation: `## Buenas prácticas al manejar errores

### 1. No silencies errores — siempre haz algo con el catch

\`\`\`js
// ❌ Silenciar errores — muy mala práctica
try {
  hacerAlgoImportante()
} catch (e) {
  // nada aquí — el error desaparece en silencio
}

// ✅ Al menos registra el error
try {
  hacerAlgoImportante()
} catch (error) {
  console.error('Error en hacerAlgoImportante:', error)
  // Y luego decide qué hacer: recuperar, notificar al usuario, etc.
}
\`\`\`

### 2. No uses try/catch para control de flujo normal

\`\`\`js
// ❌ Usar errores para lógica normal
try {
  let usuario = buscarUsuario(id)
  if (usuario === null) throw new Error('no encontrado')
} catch (e) {
  mostrarPantallaRegistro()
}

// ✅ Para lógica normal, usa if/else
let usuario = buscarUsuario(id)
if (!usuario) {
  mostrarPantallaRegistro()
}
\`\`\`

### 3. Captura errores cerca de donde pueden ocurrir

\`\`\`js
// ❌ Un catch global que no sabe qué hacer
try {
  cargarDatos()
  procesarDatos()
  mostrarDatos()
} catch (error) {
  console.log('Algo falló')  // ¿Qué? ¿Dónde?
}

// ✅ Manejo específico donde corresponde
try {
  let datos = cargarDatos()  // puede fallar por red
  let procesados = procesarDatos(datos)
  mostrarDatos(procesados)
} catch (error) {
  if (error.message.includes('network')) {
    mostrarError('Error de conexión')
  } else {
    console.error('Error inesperado:', error)
  }
}
\`\`\`

### 4. Deja subir los errores que no puedes manejar

\`\`\`js
function parsearConfig(texto) {
  // No puedo hacer nada si el JSON es inválido — dejo subir el error
  return JSON.parse(texto)
}

// El código que llama a parsearConfig decide qué hacer con el error
try {
  let config = parsearConfig(textoExterno)
} catch (error) {
  usarConfigPorDefecto()
}
\`\`\`

### 5. Verifica antes de usar (programación defensiva) vs manejo de error

\`\`\`js
// Verificación preventiva (mejor cuando es predecible)
if (usuario && usuario.email) {
  enviarEmail(usuario.email)
}

// try/catch (mejor cuando el error es impredecible)
try {
  await enviarEmailAPI(usuario.email)
} catch (error) {
  registrarFallo(error)
}
\`\`\`

### 6. Resumen de reglas

| Situación | Qué hacer |
|-----------|-----------|
| Error predecible con if/else | Verificar primero, no usar try/catch |
| Error de datos externos (JSON, API) | try/catch |
| Error que no puedes manejar | Deja subir (no catches silencioso) |
| Error que muestra al usuario | Mensaje amigable + log técnico |
| Error de validación | throw con mensaje descriptivo |`,
    codeExample: `// Ejemplo de manejo de errores bien organizado

// ✅ Función que deja subir errores que no puede manejar
function parsearRespuesta(texto) {
  return JSON.parse(texto)  // si falla, el caller decide
}

// ✅ Función que maneja lo que puede y deja subir lo que no
async function cargarConfiguracion(url) {
  try {
    let respuesta = await fetch(url)

    if (!respuesta.ok) {
      // Error HTTP — lo conocemos, podemos manejarlo
      if (respuesta.status === 404) {
        console.warn('Config no encontrada, usando defaults')
        return { tema: 'claro', idioma: 'es' }
      }
      throw new Error('Error del servidor: ' + respuesta.status)
    }

    let texto = await respuesta.text()
    return parsearRespuesta(texto)  // si falla, sube al siguiente nivel

  } catch (error) {
    if (error.message.includes('fetch')) {
      // Error de red — podemos manejar
      console.warn('Sin conexión, usando config guardada localmente')
      return leerConfigLocal() ?? { tema: 'claro', idioma: 'es' }
    }
    // Error desconocido — sube
    throw error
  }
}

function leerConfigLocal() {
  try {
    const dato = localStorage.getItem('config')
    return dato ? JSON.parse(dato) : null
  } catch {
    return null
  }
}`,
    keyPoints: [
      'Nunca silencies errores con un catch vacío — siempre al menos registra con console.error.',
      'No uses try/catch para lógica de flujo normal — usa if/else para condiciones predecibles.',
      'Captura errores cerca de donde ocurren para tener contexto y poder manejarlos mejor.',
      'Si no puedes manejar un error, déjalo subir — no lo silencies.',
      'La programación defensiva (verificar antes) es preferible a try/catch cuando el error es predecible.',
      'El objetivo no es eliminar errores sino manejarlos de forma que el sistema sea resiliente y el usuario tenga una buena experiencia.',
    ],
    exercise: {
      description:
        'Revisa este código y encuentra todos los problemas de manejo de errores:\n\n```js\ntry {\n  let datos = JSON.parse(input)\n  procesarDatos(datos)\n  guardarResultado(datos)\n} catch (e) {}\n\nfunction procesarDatos(d) {\n  try {\n    return d.items.map(i => i.valor * 2)\n  } catch {\n    return []\n  }\n}\n```\n\nCorrige: el catch vacío principal, el catch que silencia en procesarDatos, y agrega validación defensiva.',
      hint: 'El catch vacío principal es el mayor problema — ningún error llega al desarrollador. En procesarDatos, en lugar de try/catch, verifica con if: `if (!Array.isArray(d?.items)) return []`. Luego usa `.filter(i => typeof i?.valor === "number")`.',
    },
    quiz: [
      {
        question: '¿Por qué un catch vacío `catch(e) {}` es una mala práctica?',
        options: [
          'Porque lanza otro error',
          'Porque los errores desaparecen en silencio y son imposibles de depurar',
          'Porque no funciona en navegadores modernos',
          'Porque consume más memoria',
        ],
        correctAnswer: 'Porque los errores desaparecen en silencio y son imposibles de depurar',
        correctFeedback: 'Correcto. Un catch vacío "traga" el error — ningún desarrollador sabe que ocurrió, no hay información para corregirlo.',
        incorrectFeedback: 'Un catch vacío es peligroso: el error ocurrió, pero nadie lo sabe. Puede enmascarar bugs serios que se vuelven cada vez más difíciles de rastrear.',
      },
      {
        question: '¿Cuándo es apropiado NO capturar un error y dejarlo subir?',
        options: [
          'Nunca — siempre debes capturar todos los errores',
          'Cuando el error es demasiado grave',
          'Cuando no tienes información suficiente en ese nivel para manejarlo correctamente',
          'Cuando el código está en producción',
        ],
        correctAnswer: 'Cuando no tienes información suficiente en ese nivel para manejarlo correctamente',
        correctFeedback: 'Correcto. Dejar subir un error permite que el código con más contexto lo maneje adecuadamente. Un catch que no sabe qué hacer con el error no debería existir.',
        incorrectFeedback: 'Dejar subir el error es la opción correcta cuando no tienes suficiente contexto para manejarlo. Capturar y silenciar es peor que no capturar.',
      },
      {
        question: '¿Cuál es la diferencia entre usar try/catch y verificación defensiva con if?',
        options: [
          'No hay diferencia — son intercambiables',
          'if es para errores esperados/predecibles; try/catch para errores inesperados o de sistemas externos',
          'try/catch siempre es mejor que if para validar',
          'if solo funciona para valores booleanos',
        ],
        correctAnswer: 'if es para errores esperados/predecibles; try/catch para errores inesperados o de sistemas externos',
        correctFeedback: 'Correcto. Si sabes que algo puede ser null, usa if. Si algo puede fallar por razones externas (red, JSON corrupto, localStorage), usa try/catch.',
        incorrectFeedback: 'La regla es: si el "error" es predecible y parte del flujo normal (usuario no encontrado, campo vacío), usa if/else. Si el error es inesperado (falla de red, JSON inválido), usa try/catch.',
      },
      {
        question: '¿Por qué es mejor usar `new Error("mensaje")` en lugar de `throw "string"`?',
        options: [
          'Porque throw solo acepta objetos Error',
          'Porque los objetos Error incluyen stack trace y se pueden identificar con instanceof',
          'Porque los strings son más lentos de procesar',
          'Porque es más corto de escribir',
        ],
        correctAnswer: 'Porque los objetos Error incluyen stack trace y se pueden identificar con instanceof',
        correctFeedback: 'Correcto. throw "string" es válido pero los strings no tienen stack trace ni propiedades como .message. Los objetos Error tienen información de depuración mucho más útil.',
        incorrectFeedback: 'JavaScript permite throw de cualquier valor, pero Error objects tienen ventajas: stack trace automático, propiedad .message, y se pueden identificar con `instanceof Error`.',
      },
      {
        question: '¿Cuál es la desventaja de envolver todo el código en un solo try-catch gigante?',
        options: [
          'Es una práctica recomendada — no tiene desventajas',
          'Oculta el origen del error y dificulta manejar tipos de error específicos',
          'JavaScript no permite try-catch con mucho código dentro',
          'Hace el código más lento al ejecutarse',
        ],
        correctAnswer: 'Oculta el origen del error y dificulta manejar tipos de error específicos',
        correctFeedback: 'Correcto. Un catch todo-en-uno no sabe si el error es de red, de validación, de tipo, etc. Es mejor manejar errores específicos cerca de donde pueden ocurrir.',
        incorrectFeedback: 'Un try-catch muy amplio traga todos los errores sin distinción. No puedes saber qué falló exactamente ni manejarlo de forma específica. Es mejor manejar errores cerca de donde ocurren.',
      },
    ],
  },
]

export const jsModule19: Module = {
  number: 19,
  title: 'Manejo de errores',
  level: 'nivel4',
  lessons: lessonsJsModule19,
}
