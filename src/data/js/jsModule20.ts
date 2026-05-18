import type { Lesson, Module } from '@/types'

export const lessonsJsModule20: Lesson[] = [
  {
    slug: 'que-es-json',
    title: '¿Qué es JSON?',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 147,
    description:
      'Aprende qué es JSON y por qué se usa tanto para guardar e intercambiar información.',
    explanation: `## ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es un formato de texto para representar datos estructurados. Es como un idioma universal que entienden casi todos los lenguajes de programación y sistemas.

### La analogía del formulario

Imagina que llenas un formulario en papel para enviar por correo. El papel (texto) viaja, llega al destino, y el receptor lee los datos. JSON es ese "papel" digital — transforma datos complejos en texto que puede viajar o guardarse.

### ¿Cómo se ve JSON?

\`\`\`json
{
  "nombre": "Ana García",
  "edad": 28,
  "activo": true,
  "cursos": ["JavaScript", "Python"],
  "direccion": {
    "ciudad": "Madrid",
    "pais": "España"
  }
}
\`\`\`

### Reglas de JSON

1. Las claves deben ir entre **comillas dobles** (no simples).
2. Los strings usan **comillas dobles**.
3. Los números, booleanos y null van sin comillas.
4. No se permiten comentarios.
5. No se permiten comas finales.

\`\`\`json
{
  "nombre": "Ana",    ✅
  nombre: "Ana",      ❌ (clave sin comillas)
  "nombre": 'Ana',    ❌ (comillas simples)
  "activo": true,     ✅
  "activo": True,     ❌ (True en mayúscula no es JSON)
  // comentario       ❌ (sin comentarios en JSON)
  "lista": [1, 2,]    ❌ (coma final)
}
\`\`\`

### Tipos de datos válidos en JSON

| Tipo      | Ejemplo                    |
|-----------|----------------------------|
| String    | \`"texto"\`                |
| Number    | \`42\`, \`3.14\`           |
| Boolean   | \`true\`, \`false\`        |
| null      | \`null\`                   |
| Array     | \`[1, "dos", true]\`       |
| Object    | \`{ "clave": "valor" }\`   |

**No válidos en JSON:** funciones, undefined, Date, Map, Set.

### JSON vs objeto JavaScript

\`\`\`js
// Objeto JavaScript — comillas opcionales en claves
const obj = { nombre: 'Ana', edad: 28 }

// JSON — siempre comillas dobles en claves, es texto
'{ "nombre": "Ana", "edad": 28 }'
\`\`\`

JSON es texto. Un objeto JavaScript es una estructura en memoria.`,
    codeExample: `// Ejemplos de JSON válidos e inválidos

// ✅ JSON válido — datos de un producto
const jsonProductoValido = \`{
  "id": "PROD-001",
  "nombre": "Teclado Mecánico RGB",
  "precio": 349.99,
  "disponible": true,
  "categorias": ["Periféricos", "Gaming"],
  "especificaciones": {
    "switches": "Red",
    "conexion": "USB-C",
    "retroiluminacion": true
  }
}\`

// ✅ JSON de un array de usuarios
const jsonUsuarios = \`[
  { "id": 1, "nombre": "Ana", "activo": true },
  { "id": 2, "nombre": "Luis", "activo": false },
  { "id": 3, "nombre": "María", "activo": true }
]\`

// ❌ JSON inválido — errores comunes
// { nombre: "Ana" }           → clave sin comillas dobles
// { "nombre": 'Ana' }         → comillas simples
// { "activo": True }          → True con mayúscula
// { "lista": [1, 2, 3,] }     → coma final
// { "fn": function(){} }      → funciones no permitidas

console.log('JSON de producto:', jsonProductoValido.length, 'caracteres')
console.log('JSON es solo texto (string):', typeof jsonProductoValido)`,
    keyPoints: [
      'JSON es texto con formato específico para representar datos estructurados.',
      'Las claves en JSON siempre van entre comillas dobles.',
      'JSON no permite funciones, undefined, comentarios ni comas finales.',
      'Los tipos válidos en JSON: string, number, boolean, null, array, object.',
      'JSON no es lo mismo que un objeto JavaScript — JSON es texto.',
      'Es el formato más usado para intercambiar datos entre aplicaciones.',
    ],
    exercise: {
      description:
        'Escribe JSON válido para estos datos: un perfil de estudiante con nombre, email, cursos completados (array), progreso (número del 0 al 100), y una configuración que tenga tema y notificaciones. Luego identifica qué está mal en este JSON: `{ nombre: "Ana", cursos: [\'JS\', \'CSS\',], completado: True }`',
      hint: 'Para el JSON válido, todas las claves y strings deben ir entre comillas dobles. Para el incorrecto: "nombre" sin comillas, comillas simples en strings, coma final, y "True" con mayúscula son los 4 errores.',
    },
    quiz: [
      {
        question: '¿Cuál de estas afirmaciones sobre JSON es correcta?',
        options: [
          'JSON es un tipo especial de objeto JavaScript',
          'JSON es texto con formato específico para representar datos',
          'JSON puede contener funciones JavaScript',
          'JSON usa comillas simples para strings',
        ],
        correctAnswer: 'JSON es texto con formato específico para representar datos',
        correctFeedback: 'Correcto. JSON es texto plano con reglas específicas. No es código ejecutable — es datos serializados.',
        incorrectFeedback: 'JSON no es un objeto JavaScript — es texto. No puede contener funciones. Las claves y strings van entre comillas dobles, no simples.',
      },
      {
        question: '¿Cuál de estos elementos NO es válido en JSON?',
        options: [
          'null',
          'true',
          'undefined',
          '3.14',
        ],
        correctAnswer: 'undefined',
        correctFeedback: 'Correcto. undefined no existe en JSON. Los tipos válidos son: string, number, boolean, null, array y object.',
        incorrectFeedback: 'undefined no es un tipo JSON válido. Tampoco lo son las funciones, Symbol, Date, Map o Set. Los tipos JSON son: string, number, boolean (true/false), null, array y object.',
      },
      {
        question: '¿Cuál de estas es la forma correcta de una clave en JSON?',
        options: [
          'nombre: "valor"',
          '\'nombre\': "valor"',
          '"nombre": "valor"',
          'nombre = "valor"',
        ],
        correctAnswer: '"nombre": "valor"',
        correctFeedback: 'Correcto. En JSON, las claves siempre deben ir entre comillas dobles. Esta es una diferencia clave con los objetos JavaScript donde las comillas son opcionales.',
        incorrectFeedback: 'En JSON, las claves siempre van entre comillas dobles. No se aceptan comillas simples, ni claves sin comillas, ni el operador =.',
      },
      {
        question: '¿Por qué JSON no puede contener funciones?',
        options: [
          'Por limitaciones de memoria',
          'Porque JSON es texto y las funciones son código ejecutable — no se pueden serializar como texto',
          'Porque las funciones son demasiado grandes',
          'Por razones de seguridad del navegador',
        ],
        correctAnswer: 'Porque JSON es texto y las funciones son código ejecutable — no se pueden serializar como texto',
        correctFeedback: 'Correcto. JSON es un formato de datos, no de código. Las funciones son ejecutables y no tienen una representación de texto estándar.',
        incorrectFeedback: 'La razón fundamental es que JSON es datos, no código. Una función no puede representarse como texto de forma portable y ejecutable entre diferentes lenguajes.',
      },
      {
        question: '¿Cuál de estos NO es un tipo de dato válido en JSON?',
        options: [
          'string',
          'number',
          'undefined',
          'boolean',
        ],
        correctAnswer: 'undefined',
        correctFeedback: 'Correcto. JSON no reconoce undefined. Los tipos válidos en JSON son: string, number, boolean, null, array y object. undefined, funciones y Date no son tipos JSON válidos.',
        incorrectFeedback: 'JSON tiene tipos limitados: string, number (sin NaN/Infinity), boolean, null, array y object. undefined y funciones no existen en JSON.',
      },
    ],
  },

  {
    slug: 'json-stringify',
    title: 'Convertir objetos a JSON con JSON.stringify()',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 148,
    description:
      'Aprende a convertir objetos y arrays de JavaScript en texto JSON.',
    explanation: `## JSON.stringify()

\`JSON.stringify()\` convierte un objeto o array de JavaScript en texto JSON. Este texto puede guardarse en localStorage, enviarse a un servidor, o escribirse en un archivo.

### Uso básico

\`\`\`js
let usuario = { nombre: 'Ana', edad: 28, activo: true }
let textoJSON = JSON.stringify(usuario)

console.log(textoJSON)    // '{"nombre":"Ana","edad":28,"activo":true}'
console.log(typeof textoJSON) // "string"
\`\`\`

### Arrays también funcionan

\`\`\`js
let frutas = ['manzana', 'banana', 'uva']
console.log(JSON.stringify(frutas)) // '["manzana","banana","uva"]'
\`\`\`

### ¿Qué pasa con tipos no serializables?

\`\`\`js
let obj = {
  nombre: 'Ana',
  fn: function() {},     // función — se omite
  fecha: new Date(),     // Date — se convierte a string ISO
  indefinido: undefined, // undefined — se omite
  activo: true,          // boolean — se incluye
}

console.log(JSON.stringify(obj))
// '{"nombre":"Ana","fecha":"2024-01-15T10:30:00.000Z","activo":true}'
// fn y undefined se omiten silenciosamente
\`\`\`

### Formato legible: el parámetro indent

\`\`\`js
let config = { tema: 'oscuro', idioma: 'es', fontSize: 14 }

console.log(JSON.stringify(config, null, 2))
// {
//   "tema": "oscuro",
//   "idioma": "es",
//   "fontSize": 14
// }
\`\`\`

El tercer parámetro (2) indica espacios de indentación. Útil para depurar.

### El segundo parámetro: filtrar propiedades

\`\`\`js
let usuario = { nombre: 'Ana', password: '12345', email: 'ana@ej.com' }

// Solo incluir nombre y email — excluir password
let seguro = JSON.stringify(usuario, ['nombre', 'email'])
// '{"nombre":"Ana","email":"ana@ej.com"}'
\`\`\``,
    codeExample: `// app.js

// Convertir diferentes tipos a JSON

let producto = {
  id: 'PROD-001',
  nombre: 'Monitor 4K',
  precio: 899.99,
  disponible: true,
  etiquetas: ['Gaming', 'Profesional'],
  specs: { resolucion: '3840x2160', hz: 144 },
}

// JSON compacto — para guardar
let jsonCompacto = JSON.stringify(producto)
console.log('Tamaño:', jsonCompacto.length, 'chars')
console.log(jsonCompacto)

// JSON formateado — para depurar o mostrar
let jsonFormateado = JSON.stringify(producto, null, 2)
console.log('Formateado:')
console.log(jsonFormateado)

// Filtrar propiedades sensibles antes de exportar
let pedido = {
  id: 'PED-001',
  cliente: 'Ana García',
  tarjeta: '4532-XXXX-XXXX-1234',  // sensible
  total: 899.99,
  estado: 'pendiente',
}

let pedidoPublico = JSON.stringify(pedido, ['id', 'total', 'estado'])
console.log('Pedido (sin datos sensibles):', pedidoPublico)

// Array de objetos
let carrito = [
  { nombre: 'Monitor', precio: 899 },
  { nombre: 'Teclado', precio: 299 },
]
console.log(JSON.stringify(carrito))`,
    keyPoints: [
      'JSON.stringify() convierte cualquier valor serializable a texto JSON.',
      'Las funciones y undefined se omiten silenciosamente.',
      'Los Date se convierten a string en formato ISO.',
      'El tercer parámetro (número o string) define la indentación para formato legible.',
      'El segundo parámetro puede ser un array de propiedades para filtrar (útil para omitir datos sensibles).',
      'El resultado es siempre un string — no es un objeto JavaScript.',
    ],
    exercise: {
      description:
        'Crea un objeto `configuracionApp` con al menos 6 propiedades (tema, idioma, fontSize, notificaciones, historial como array, y ultimaConexion como new Date()). Convierte este objeto a JSON de tres formas: compacto (para guardar), formateado con 2 espacios (para depurar), y filtrado para incluir solo tema, idioma y fontSize. Observa qué pasa con la fecha y qué función en el objeto sería omitida.',
      hint: 'Añade una propiedad función y observa que desaparece con stringify. La fecha se convierte a string ISO. Para filtrar: `JSON.stringify(obj, ["tema", "idioma", "fontSize"])`.',
    },
    quiz: [
      {
        question: '¿Qué tipo devuelve JSON.stringify()?',
        options: [
          'Object',
          'Array',
          'String',
          'JSON',
        ],
        correctAnswer: 'String',
        correctFeedback: 'Correcto. JSON.stringify siempre devuelve un string — texto plano con el formato JSON.',
        incorrectFeedback: 'JSON.stringify siempre devuelve un string. El resultado es texto — no un objeto, aunque el texto represente un objeto.',
      },
      {
        question: '¿Qué sucede con las funciones al usar JSON.stringify()?',
        options: [
          'Se convierten a string de código',
          'Se lanza un error',
          'Se omiten silenciosamente del resultado',
          'Se reemplazan por null',
        ],
        correctAnswer: 'Se omiten silenciosamente del resultado',
        correctFeedback: 'Correcto. Las funciones no son un tipo JSON válido, así que JSON.stringify las omite sin lanzar error. También pasa con undefined.',
        incorrectFeedback: 'JSON.stringify no lanza error con funciones — las omite silenciosamente. Esto puede ser un bug difícil de detectar si asumes que se serializarán.',
      },
      {
        question: '¿Para qué sirve el tercer parámetro en JSON.stringify(obj, null, 2)?',
        options: [
          'Para establecer el límite de profundidad de serialización',
          'Para añadir indentación y hacer el JSON más legible',
          'Para filtrar propiedades',
          'Para establecer la codificación de caracteres',
        ],
        correctAnswer: 'Para añadir indentación y hacer el JSON más legible',
        correctFeedback: 'Correcto. El tercer parámetro es el "espacio" de indentación. 2 significa 2 espacios por nivel — útil para depuración.',
        incorrectFeedback: 'El tercer parámetro controla el formato: 2 (o 4) añade indentación para legibilidad. El segundo parámetro es para filtrar. Sin tercer parámetro, el JSON es compacto (sin saltos de línea).',
      },
      {
        question: '¿Cómo se convierte un objeto Date con JSON.stringify()?',
        options: [
          'Se omite igual que las funciones',
          'Se reemplaza por 0',
          'Se convierte a string en formato ISO (ej. "2024-01-15T10:30:00.000Z")',
          'Se lanza un error',
        ],
        correctAnswer: 'Se convierte a string en formato ISO (ej. "2024-01-15T10:30:00.000Z")',
        correctFeedback: 'Correcto. Los Date se convierten a string ISO 8601. Al hacer JSON.parse() después, ese string no se reconvierte automáticamente en Date.',
        incorrectFeedback: 'Los Date se convierten a string ISO. Atención: al hacer JSON.parse(), ese string no vuelve a ser un Date automáticamente — necesitas hacerlo manualmente.',
      },
      {
        question: '¿Qué pasa con las funciones de un objeto cuando usas JSON.stringify()?',
        options: [
          'Se convierten a strings con su código fuente',
          'Se convierten a null',
          'Se omiten completamente del resultado',
          'Lanzan un error al hacer stringify',
        ],
        correctAnswer: 'Se omiten completamente del resultado',
        correctFeedback: 'Correcto. JSON.stringify() omite propiedades que son funciones, undefined o Symbol. Las funciones simplemente desaparecen del JSON resultante.',
        incorrectFeedback: 'Las funciones no se pueden representar en JSON. JSON.stringify las ignora silenciosamente — la propiedad desaparece del resultado. Por eso JSON es solo para datos, no para objetos con comportamiento.',
      },
    ],
  },

  {
    slug: 'json-parse',
    title: 'Convertir JSON a objetos con JSON.parse()',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 149,
    description:
      'Aprende a convertir texto JSON de vuelta a objetos o arrays de JavaScript.',
    explanation: `## JSON.parse()

\`JSON.parse()\` hace lo opuesto de \`JSON.stringify()\`: convierte texto JSON de vuelta a un valor JavaScript (objeto, array, número, string, etc.).

### Uso básico

\`\`\`js
let texto = '{"nombre":"Ana","edad":28,"activo":true}'
let objeto = JSON.parse(texto)

console.log(objeto.nombre) // "Ana"
console.log(objeto.edad)   // 28
console.log(typeof objeto) // "object"
\`\`\`

### Parsear arrays

\`\`\`js
let textoArray = '["manzana","banana","uva"]'
let frutas = JSON.parse(textoArray)

console.log(frutas[0])     // "manzana"
console.log(frutas.length) // 3
\`\`\`

### JSON.parse puede lanzar error

Si el texto no es JSON válido, \`JSON.parse()\` lanza \`SyntaxError\`:

\`\`\`js
JSON.parse('esto no es JSON') // ❌ SyntaxError: Unexpected token 'e'...
JSON.parse(undefined)          // ❌ SyntaxError
JSON.parse(null)               // ❌ SyntaxError
JSON.parse('{ clave: "sin comillas" }') // ❌ SyntaxError
\`\`\`

Por eso siempre usa \`JSON.parse()\` dentro de \`try/catch\`:

\`\`\`js
function parsearJSON(texto) {
  try {
    return JSON.parse(texto)
  } catch (error) {
    console.error('JSON inválido:', error.message)
    return null
  }
}
\`\`\`

### Los Dates siguen siendo strings después del parse

\`\`\`js
let json = '{"fecha":"2024-01-15T10:30:00.000Z"}'
let obj = JSON.parse(json)

console.log(typeof obj.fecha)      // "string" — no es un Date
console.log(obj.fecha instanceof Date) // false

// Si necesitas un Date real:
let fecha = new Date(obj.fecha)
console.log(fecha.getFullYear()) // 2024
\`\`\`

### Stringify + Parse = copia profunda

\`\`\`js
let original = { nombre: 'Ana', config: { tema: 'oscuro' } }

// Copia profunda con JSON (funciona para datos simples sin funciones)
let copia = JSON.parse(JSON.stringify(original))

copia.config.tema = 'claro'
console.log(original.config.tema) // "oscuro" — no se afectó
\`\`\``,
    codeExample: `// storage.js — usando JSON.parse de forma segura

function leerDatosJSON(clave) {
  try {
    const texto = localStorage.getItem(clave)

    // localStorage puede devolver null si la clave no existe
    if (texto === null) return null

    return JSON.parse(texto)
  } catch (error) {
    // JSON.parse falla si el dato está corrupto
    console.error('Error al parsear JSON desde localStorage:', error.message)
    // Limpiamos el dato corrupto
    localStorage.removeItem(clave)
    return null
  }
}

function guardarDatosJSON(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor))
    return true
  } catch {
    return false
  }
}

// Uso
guardarDatosJSON('preferencias', {
  tema: 'oscuro',
  idioma: 'es',
  ultimaVisita: new Date().toISOString(),
})

let preferencias = leerDatosJSON('preferencias')
if (preferencias) {
  console.log('Tema:', preferencias.tema)      // "oscuro"
  console.log('Fecha:', preferencias.ultimaVisita) // string ISO

  // Convertir la fecha de string a Date si la necesitas
  let fecha = new Date(preferencias.ultimaVisita)
  console.log('Año:', fecha.getFullYear())
}`,
    keyPoints: [
      'JSON.parse() convierte texto JSON en un valor JavaScript.',
      'Siempre usa JSON.parse() dentro de try/catch — puede lanzar SyntaxError.',
      'Las fechas (Date) se convierten a string al serializar y quedan como string al parsear.',
      'JSON.parse(null) y JSON.parse(undefined) lanzan SyntaxError.',
      'La combinación JSON.parse(JSON.stringify(obj)) crea una copia profunda (con limitaciones).',
      'Verifica que el resultado no sea null antes de usarlo.',
    ],
    exercise: {
      description:
        'Crea una función `cargarUsuario()` que: lea desde localStorage con la clave "usuario_actual", use try/catch por si el JSON está corrupto, devuelva null si no hay nada guardado, y si hay datos convierta la propiedad "fechaRegistro" de string a Date. También crea `guardarUsuario(usuario)` que agregue la fecha actual como "fechaGuardado" antes de guardar.',
      hint: 'Para cargar: `const texto = localStorage.getItem("usuario_actual"); if (!texto) return null; const user = JSON.parse(texto); user.fechaRegistro = new Date(user.fechaRegistro); return user`. Para guardar: `{ ...usuario, fechaGuardado: new Date().toISOString() }`.',
    },
    quiz: [
      {
        question: '¿Qué ocurre al llamar `JSON.parse("texto no válido")`?',
        options: [
          'Devuelve null',
          'Devuelve undefined',
          'Lanza un SyntaxError',
          'Devuelve el texto sin cambios',
        ],
        correctAnswer: 'Lanza un SyntaxError',
        correctFeedback: 'Correcto. JSON.parse lanza SyntaxError si el texto no es JSON válido. Por eso siempre debe ir dentro de try/catch.',
        incorrectFeedback: 'JSON.parse lanza SyntaxError con texto inválido. No devuelve null ni undefined silenciosamente — falla con una excepción. Usa try/catch para manejarlo.',
      },
      {
        question: '¿Cuál es el tipo de `obj.fecha` después de `JSON.parse(\'{"fecha":"2024-01-15"}\')`?',
        options: [
          'Date',
          'Number',
          'String',
          'Object',
        ],
        correctAnswer: 'String',
        correctFeedback: 'Correcto. JSON.parse no convierte strings que parecen fechas en objetos Date — los mantiene como string. Debes convertirlos manualmente con `new Date(obj.fecha)`.',
        incorrectFeedback: 'JSON.parse no "adivina" tipos. Un string que parece una fecha sigue siendo un string después del parse. Necesitas `new Date(obj.fecha)` para obtener un objeto Date.',
      },
      {
        question: '¿Qué devuelve `JSON.parse(JSON.stringify(obj))` en comparación con `obj`?',
        options: [
          'El mismo objeto (misma referencia en memoria)',
          'Una copia profunda independiente (para datos sin funciones ni undefined)',
          'Una copia superficial',
          'null si el objeto tiene métodos',
        ],
        correctAnswer: 'Una copia profunda independiente (para datos sin funciones ni undefined)',
        correctFeedback: 'Correcto. Stringify serializa el objeto a texto y parse lo reconstruye, creando un nuevo objeto completamente independiente en memoria.',
        incorrectFeedback: 'stringify+parse crea una copia profunda — un nuevo objeto sin referencias compartidas. La limitación es que funciones y undefined se pierden en el proceso.',
      },
      {
        question: '¿Qué error lanza JSON.parse() si el string no es JSON válido?',
        options: [
          'TypeError',
          'ReferenceError',
          'SyntaxError',
          'ValueError',
        ],
        correctAnswer: 'SyntaxError',
        correctFeedback: 'Correcto. JSON.parse() lanza SyntaxError cuando el string no tiene formato JSON válido. Por eso siempre se recomienda envolver JSON.parse() en un try-catch.',
        incorrectFeedback: 'Si el JSON está malformado, parse() lanza SyntaxError: Unexpected token. Es importante capturar este error con try-catch, especialmente al parsear datos de fuentes externas.',
      },
      {
        question: '¿Por qué es importante usar try-catch al llamar JSON.parse()?',
        options: [
          'Porque JSON.parse() siempre devuelve null si hay un error',
          'Porque el string puede no ser JSON válido y lanzar SyntaxError',
          'Porque JSON.parse() es asíncrono',
          'Porque JSON.parse() modifica el string original',
        ],
        correctAnswer: 'Porque el string puede no ser JSON válido y lanzar SyntaxError',
        correctFeedback: 'Correcto. Al parsear JSON de fuentes externas (localStorage, APIs), el contenido podría estar corrupto o ser inválido. Sin try-catch, un JSON malformado detiene el programa.',
        incorrectFeedback: 'No siempre controlas la fuente del JSON. Si viene de localStorage podría estar corrupto; si viene de una API podría ser un HTML de error. try-catch protege contra estos casos.',
      },
    ],
  },

  {
    slug: 'errores-comunes-json',
    title: 'Errores comunes al trabajar con JSON',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 150,
    description:
      'Aprende a evitar errores con comillas, comas finales, valores inválidos y JSON mal formado.',
    explanation: `## Errores comunes al trabajar con JSON

### Error 1: Confundir objeto JavaScript con JSON

\`\`\`js
// ❌ Esto es un OBJETO JavaScript, no JSON
const obj = { nombre: 'Ana', activo: true }

// ✅ Esto es JSON (texto)
const json = '{"nombre":"Ana","activo":true}'

// El error clásico: intentar acceder a .nombre en el JSON (texto)
console.log(json.nombre)  // undefined — es texto, no objeto!

// Debes parsearlo primero
console.log(JSON.parse(json).nombre) // "Ana"
\`\`\`

### Error 2: Olvidar try/catch con JSON.parse()

\`\`\`js
// ❌ Sin protección
let datos = JSON.parse(localStorage.getItem('config'))  // puede fallar

// ✅ Con protección
try {
  let datos = JSON.parse(localStorage.getItem('config'))
  // usar datos...
} catch (error) {
  console.error('Config corrupta')
}
\`\`\`

### Error 3: Comas finales en JSON escrito a mano

\`\`\`json
{
  "nombre": "Ana",
  "edad": 28,    ← coma final — inválido
}
\`\`\`

### Error 4: Asumir que las fechas se reconstruyen

\`\`\`js
let obj = { fecha: new Date() }
let json = JSON.stringify(obj)
let back = JSON.parse(json)

// ❌ Asumir que back.fecha es un Date
back.fecha.getFullYear()  // TypeError — es string

// ✅ Convertir manualmente
let fecha = new Date(back.fecha)
\`\`\`

### Error 5: Stringify/Parse con valores null de localStorage

\`\`\`js
let raw = localStorage.getItem('clave-que-no-existe') // null
let datos = JSON.parse(raw) // ❌ JSON.parse(null) lanza SyntaxError

// ✅ Verificar primero
let raw2 = localStorage.getItem('clave')
if (raw2) {
  let datos2 = JSON.parse(raw2)
}
\`\`\`

### Error 6: No stringificar objetos antes de guardar en localStorage

\`\`\`js
localStorage.setItem('usuario', { nombre: 'Ana' })
// localStorage convierte el objeto a "[object Object]"

localStorage.getItem('usuario')  // "[object Object]" — inútil!

// ✅ Siempre stringify antes de guardar objetos
localStorage.setItem('usuario', JSON.stringify({ nombre: 'Ana' }))
\`\`\``,
    codeExample: `// Demostración de errores comunes y cómo evitarlos

// ❌ Error 1: no stringificar al guardar en localStorage
function guardarMal(datos) {
  localStorage.setItem('datos', datos)  // guarda "[object Object]"
  let recuperado = localStorage.getItem('datos')
  console.log(recuperado)  // "[object Object]" — inútil
}

// ✅ Correcto: siempre stringify
function guardarBien(datos) {
  localStorage.setItem('datos', JSON.stringify(datos))
  let recuperado = JSON.parse(localStorage.getItem('datos'))
  console.log(recuperado.nombre)  // "Ana" ✅
}

// ❌ Error 2: parse sin verificar null
function leerSinVerificar(clave) {
  return JSON.parse(localStorage.getItem(clave))  // puede ser null → error
}

// ✅ Correcto: verificar + try/catch
function leerSeguro(clave, porDefecto = null) {
  try {
    const texto = localStorage.getItem(clave)
    if (!texto) return porDefecto
    return JSON.parse(texto)
  } catch {
    return porDefecto
  }
}

// Demostración
guardarBien({ nombre: 'Ana', edad: 28 })
let usuario = leerSeguro('datos', {})
console.log('Usuario:', usuario.nombre)  // "Ana"

let noExiste = leerSeguro('clave-inexistente', { defecto: true })
console.log('Default:', noExiste.defecto)  // true`,
    keyPoints: [
      'JSON es texto — no puedes acceder a propiedades directamente sin parsearlo.',
      'Siempre usa try/catch cuando usas JSON.parse() con datos externos.',
      'Verifica que localStorage.getItem() no devuelve null antes de parsear.',
      'Las fechas se convierten a string al serializar — conviértelas de vuelta con new Date().',
      'Siempre usa JSON.stringify() antes de guardar objetos en localStorage.',
      'Las comas finales hacen el JSON inválido — cuidado cuando lo escribes a mano.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los 4 errores en este código:\n\n```js\nconst datos = { nombre: "Ana", activo: true }\nlocalStorage.setItem("datos", datos)\n\nconst recuperado = JSON.parse(localStorage.getItem("datos"))\nconst recuperado2 = JSON.parse(localStorage.getItem("otraClave"))\n\nif (recuperado.activo) {\n  console.log("activo")\n}\n```',
      hint: 'Error 1: no se hace stringify al guardar. Error 2: JSON.parse de null (si "otraClave" no existe). Error 3 y 4: el primer parse también podría fallar. Añade stringify al guardar, verifica null antes de parsear, y usa try/catch.',
    },
    quiz: [
      {
        question: '¿Qué pasa al hacer `localStorage.setItem("obj", { nombre: "Ana" })`?',
        options: [
          'El objeto se guarda correctamente',
          'Se guarda el string "[object Object]" — el objeto se pierde',
          'Lanza un TypeError',
          'Solo se guarda la clave "nombre"',
        ],
        correctAnswer: 'Se guarda el string "[object Object]" — el objeto se pierde',
        correctFeedback: 'Correcto. localStorage solo guarda strings. Si pasas un objeto, JavaScript lo convierte con .toString(), que resulta en "[object Object]". Siempre usa JSON.stringify primero.',
        incorrectFeedback: 'localStorage solo guarda strings. Al pasar un objeto, JavaScript llama .toString() que produce "[object Object]". Debes usar JSON.stringify(objeto) antes de guardarlo.',
      },
      {
        question: '¿Qué error lanza `JSON.parse(null)`?',
        options: [
          'TypeError',
          'ReferenceError',
          'SyntaxError',
          'Devuelve null sin error',
        ],
        correctAnswer: 'SyntaxError',
        correctFeedback: 'Correcto. JSON.parse(null) lanza SyntaxError. Siempre verifica que el valor de localStorage no sea null antes de parsearlo.',
        incorrectFeedback: 'JSON.parse(null) lanza SyntaxError. localStorage.getItem() devuelve null cuando la clave no existe — verificar antes de parsear es esencial.',
      },
      {
        question: '¿Cuál es el patrón seguro para leer JSON de localStorage?',
        options: [
          'JSON.parse(localStorage.getItem(clave))',
          'localStorage.getItem(clave).parse()',
          'try { const t = localStorage.getItem(k); return t ? JSON.parse(t) : null } catch { return null }',
          'JSON.get(clave)',
        ],
        correctAnswer: 'try { const t = localStorage.getItem(k); return t ? JSON.parse(t) : null } catch { return null }',
        correctFeedback: 'Correcto. El patrón seguro verifica que no sea null antes del parse y envuelve todo en try/catch por si el JSON está corrupto.',
        incorrectFeedback: 'El patrón seguro tiene dos capas: verificar null (localStorage puede devolver null) y try/catch (el JSON puede estar corrupto). Ambas protecciones son necesarias.',
      },
      {
        question: '¿Por qué NO debes guardar contraseñas en JSON en localStorage?',
        options: [
          'Porque JSON.stringify() cifra las contraseñas incorrectamente',
          'Porque localStorage es accesible desde cualquier JavaScript en la página — no tiene cifrado',
          'Porque las contraseñas no se pueden representar como strings en JSON',
          'Porque localStorage borra los datos al cerrar el navegador',
        ],
        correctAnswer: 'Porque localStorage es accesible desde cualquier JavaScript en la página — no tiene cifrado',
        correctFeedback: 'Correcto. localStorage no tiene cifrado ni control de acceso. Cualquier script en la página puede leer su contenido, incluyendo scripts maliciosos (ataques XSS).',
        incorrectFeedback: 'localStorage no cifra ni protege los datos. Cualquier JavaScript en la página puede leer localStorage — incluyendo scripts inyectados maliciosamente. Las contraseñas nunca deben guardarse ahí.',
      },
      {
        question: '¿Qué hace JSON.stringify() con el valor `undefined` dentro de un objeto?',
        options: [
          'Lo convierte al string "undefined"',
          'Lo convierte a null',
          'Omite la propiedad del resultado',
          'Lanza un error',
        ],
        correctAnswer: 'Omite la propiedad del resultado',
        correctFeedback: 'Correcto. Las propiedades con valor undefined son omitidas por JSON.stringify(). undefined simplemente no existe en JSON.',
        incorrectFeedback: 'undefined es un valor de JavaScript que no existe en JSON. Cuando stringify encuentra una propiedad undefined, la elimina silenciosamente del resultado.',
      },
    ],
  },

  {
    slug: 'que-es-localstorage',
    title: '¿Qué es localStorage?',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 151,
    description:
      'Aprende qué es localStorage y cómo permite guardar datos simples en el navegador.',
    explanation: `## ¿Qué es localStorage?

**localStorage** es un espacio de almacenamiento en el navegador que permite guardar datos de forma persistente. Los datos sobreviven al cerrar y reabrir el navegador (hasta que los borras tú o el usuario).

### La analogía del cajón del escritorio

Imagina un cajón en tu escritorio donde puedes dejar notas. Aunque cierres la oficina y vuelvas al día siguiente, las notas siguen ahí. localStorage es ese cajón para el navegador.

### Características principales

| Característica | Valor |
|----------------|-------|
| Persistencia   | Permanente hasta que se borra |
| Alcance        | Solo el mismo dominio/origen |
| Capacidad      | ~5 MB (varía por navegador) |
| Tipo de datos  | Solo strings |
| Acceso         | Solo JavaScript (no se envía al servidor) |

### API básica

\`\`\`js
// Guardar
localStorage.setItem('clave', 'valor')

// Leer
let valor = localStorage.getItem('clave')

// Eliminar una clave
localStorage.removeItem('clave')

// Eliminar todo
localStorage.clear()

// Ver cuántas claves hay
console.log(localStorage.length)
\`\`\`

### localStorage vs sessionStorage

| Característica     | localStorage      | sessionStorage     |
|--------------------|-------------------|--------------------|
| Persistencia       | Permanente        | Solo sesión (tab)  |
| Cierre de tab      | Datos persisten   | Se borran          |
| Compartido         | Todas las tabs    | Solo la tab actual |

### ¿Para qué usar localStorage?

✅ Adecuado para:
- Preferencias del usuario (tema, idioma).
- Datos de progreso de un curso.
- Carrito de compras temporal.
- Configuración de la aplicación.
- Notas simples.

⚠️ NO usar para:
- Contraseñas.
- Tokens de autenticación.
- Datos de tarjeta de crédito.
- Información médica u otros datos sensibles.

**Razón:** localStorage es accesible por cualquier JavaScript en el mismo dominio, incluyendo scripts de terceros. No está cifrado.`,
    codeExample: `// Demostración de la API de localStorage

// Guardar datos simples (strings)
localStorage.setItem('idioma', 'es')
localStorage.setItem('tema', 'oscuro')
localStorage.setItem('version', '2.0')

// Leer datos
let idioma = localStorage.getItem('idioma')
console.log('Idioma:', idioma)   // "es"

let noExiste = localStorage.getItem('clave-inexistente')
console.log('No existe:', noExiste) // null (no undefined)

// Cuántas claves hay guardadas
console.log('Total de claves:', localStorage.length)

// Iterar todas las claves
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i)
  let valor = localStorage.getItem(clave)
  console.log(clave + ' → ' + valor)
}

// Eliminar una clave
localStorage.removeItem('version')
console.log('Después de eliminar:', localStorage.length)

// Verificar si existe una clave
function existe(clave) {
  return localStorage.getItem(clave) !== null
}
console.log('¿Existe idioma?', existe('idioma'))   // true
console.log('¿Existe version?', existe('version')) // false`,
    keyPoints: [
      'localStorage guarda datos de forma persistente en el navegador (sobreviven al cierre).',
      'Solo almacena strings — debes convertir objetos con JSON.stringify/parse.',
      'getItem() devuelve null (no undefined) cuando la clave no existe.',
      'Los datos son accesibles solo desde el mismo dominio (origen).',
      'Capacidad aproximada de 5 MB — no para datos grandes.',
      'No usar localStorage para datos sensibles: contraseñas, tokens, datos financieros.',
    ],
    exercise: {
      description:
        'Crea una función `contadorVisitas()` que use localStorage para llevar un contador de visitas. Cada vez que se llama, debe incrementar el contador y devolverlo. Si es la primera vez (clave no existe), empieza en 1. Pruébala varias veces y verifica que persiste.',
      hint: 'Lee con `localStorage.getItem("visitas")`, convierte a número con parseInt o Number (recuerda que localStorage devuelve strings), incrementa, guarda con setItem. Si getItem devuelve null, empieza en 0 antes de incrementar.',
    },
    quiz: [
      {
        question: '¿Qué devuelve localStorage.getItem() cuando la clave no existe?',
        options: [
          'undefined',
          'null',
          '""',
          'false',
        ],
        correctAnswer: 'null',
        correctFeedback: 'Correcto. localStorage.getItem() devuelve null (no undefined) cuando la clave no existe. Esta distinción es importante al verificar si hay datos guardados.',
        incorrectFeedback: 'localStorage.getItem() devuelve null cuando la clave no existe. Verifica con `=== null` (no `=== undefined`) para detectar claves inexistentes.',
      },
      {
        question: '¿Por qué NO debes guardar contraseñas en localStorage?',
        options: [
          'Porque localStorage tiene un límite de caracteres muy pequeño',
          'Porque localStorage solo acepta números',
          'Porque cualquier JavaScript del mismo dominio puede leerlo — incluidos scripts de terceros',
          'Porque el servidor no puede acceder a él',
        ],
        correctAnswer: 'Porque cualquier JavaScript del mismo dominio puede leerlo — incluidos scripts de terceros',
        correctFeedback: 'Correcto. localStorage no está cifrado y es accesible por cualquier script JavaScript del mismo dominio. Un script malicioso podría leer las contraseñas.',
        incorrectFeedback: 'El problema de seguridad es que localStorage es accesible por cualquier JavaScript del dominio — incluyendo scripts de analítica, publicidad o potencialmente maliciosos.',
      },
      {
        question: '¿Cuál es la diferencia entre localStorage y sessionStorage?',
        options: [
          'localStorage es más rápido',
          'localStorage persiste después de cerrar el navegador; sessionStorage se borra al cerrar la pestaña',
          'sessionStorage puede guardar objetos; localStorage solo strings',
          'localStorage está disponible en todos los dominios; sessionStorage solo en HTTPS',
        ],
        correctAnswer: 'localStorage persiste después de cerrar el navegador; sessionStorage se borra al cerrar la pestaña',
        correctFeedback: 'Correcto. La diferencia principal es la duración: localStorage es permanente hasta que se borra explícitamente; sessionStorage solo dura lo que la pestaña.',
        incorrectFeedback: 'Ambos solo guardan strings. La diferencia es la persistencia: localStorage sobrevive al cierre del navegador; sessionStorage se elimina cuando se cierra la pestaña.',
      },
      {
        question: '¿Cuál es la diferencia entre localStorage y sessionStorage?',
        options: [
          'No hay diferencia — son lo mismo',
          'localStorage persiste entre sesiones; sessionStorage se elimina al cerrar la pestaña',
          'sessionStorage puede guardar más datos que localStorage',
          'localStorage es solo para objetos; sessionStorage solo para strings',
        ],
        correctAnswer: 'localStorage persiste entre sesiones; sessionStorage se elimina al cerrar la pestaña',
        correctFeedback: 'Correcto. localStorage persiste indefinidamente (hasta que el código o el usuario lo borre). sessionStorage solo dura mientras la pestaña está abierta.',
        incorrectFeedback: 'La diferencia clave es la duración: localStorage sobrevive al cerrar el navegador. sessionStorage se borra al cerrar la pestaña o el navegador.',
      },
      {
        question: '¿Qué tipos de datos puede guardar directamente localStorage?',
        options: [
          'Cualquier tipo: strings, números, objetos, arrays, funciones',
          'Solo strings — los demás tipos deben convertirse primero con JSON.stringify()',
          'Solo números y strings primitivos',
          'Solo objetos JSON válidos directamente',
        ],
        correctAnswer: 'Solo strings — los demás tipos deben convertirse primero con JSON.stringify()',
        correctFeedback: 'Correcto. localStorage.setItem() convierte todo a string automáticamente. Para guardar objetos o arrays, debes usar JSON.stringify() explícitamente.',
        incorrectFeedback: 'localStorage solo almacena strings. Si guardas un número, lo convierte a "42". Para objetos/arrays, usa JSON.stringify() antes de guardar y JSON.parse() al leer.',
      },
    ],
  },

  {
    slug: 'guardar-localstorage',
    title: 'Guardar datos en localStorage',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 152,
    description:
      'Aprende a guardar strings, objetos y arrays en localStorage usando JSON.stringify().',
    explanation: `## Guardar datos en localStorage

### Guardar strings simples

\`\`\`js
localStorage.setItem('tema', 'oscuro')
localStorage.setItem('idioma', 'es')
localStorage.setItem('usuario', 'ana_garcia')
\`\`\`

### Guardar números y booleanos

localStorage solo guarda strings, así que los convierte automáticamente:

\`\`\`js
localStorage.setItem('fontSize', 16)        // guarda "16"
localStorage.setItem('notificaciones', true) // guarda "true"

// Al leer necesitarás convertir de vuelta:
let fontSize = Number(localStorage.getItem('fontSize'))     // 16
let notifs = localStorage.getItem('notificaciones') === 'true' // true
\`\`\`

### Guardar objetos — siempre con JSON.stringify()

\`\`\`js
let configuracion = {
  tema: 'oscuro',
  idioma: 'es',
  fontSize: 14,
  notificaciones: true,
}

localStorage.setItem('config', JSON.stringify(configuracion))
\`\`\`

### Guardar arrays

\`\`\`js
let historial = ['lección-1', 'lección-2', 'lección-3']
localStorage.setItem('historial', JSON.stringify(historial))
\`\`\`

### Actualizar un valor existente

Para actualizar, simplemente usa setItem con la misma clave — sobreescribe:

\`\`\`js
// Leer → modificar → guardar
let config = JSON.parse(localStorage.getItem('config')) ?? {}
config.tema = 'claro'
localStorage.setItem('config', JSON.stringify(config))
\`\`\`

### localStorage puede fallar

En modo incógnito o con cuota llena, setItem puede lanzar error:

\`\`\`js
function guardarSeguro(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor))
    return true
  } catch (error) {
    console.error('No se pudo guardar:', error.message)
    return false
  }
}
\`\`\``,
    codeExample: `// storage.js — módulo de almacenamiento

const PREFIX = 'ronaldoscript_'

function guardar(clave, valor) {
  try {
    const claveCompleta = PREFIX + clave
    const serializado = typeof valor === 'string' ? valor : JSON.stringify(valor)
    localStorage.setItem(claveCompleta, serializado)
    return true
  } catch (error) {
    console.error('localStorage.guardar falló:', error.message)
    return false
  }
}

// Uso con diferentes tipos
guardar('tema', 'oscuro')           // string — guardado tal cual
guardar('fontSize', 16)             // número — se stringifica
guardar('preferencias', {           // objeto — JSON.stringify
  notificaciones: true,
  autoguardado: true,
  intervalo: 5,
})
guardar('progreso', ['lec-1', 'lec-2', 'lec-3']) // array

// Actualizar el progreso agregando una lección
let progresoActual = JSON.parse(localStorage.getItem(PREFIX + 'progreso')) ?? []
progresoActual.push('lec-4')
guardar('progreso', progresoActual)

console.log('Claves guardadas:', localStorage.length)`,
    keyPoints: [
      'localStorage.setItem(clave, valor) siempre espera strings.',
      'Usa JSON.stringify() antes de guardar objetos o arrays.',
      'Para actualizar: leer → modificar → guardar con la misma clave.',
      'localStorage puede fallar (modo incógnito, cuota llena) — usa try/catch.',
      'Las primitivas no-string (números, booleanos) se convierten a string automáticamente.',
      'Usa un prefijo en las claves para evitar colisiones con otras librerías.',
    ],
    exercise: {
      description:
        'Crea un sistema de notas simple usando localStorage. Implementa: `crearNota(titulo, contenido)` que guarda la nota con un ID único (puedes usar Date.now()), `obtenerNotas()` que retorna todas las notas guardadas, y `eliminarNota(id)` que elimina una nota por ID. Todas las notas deben guardarse como un array bajo la clave "mis_notas".',
      hint: 'Guarda el array completo de notas: `localStorage.setItem("mis_notas", JSON.stringify(notas))`. Para crear: lee el array actual, agrega la nueva nota, guarda el array completo. Para eliminar: filtra el array y guarda.',
    },
    quiz: [
      {
        question: '¿Cómo debes guardar un objeto en localStorage correctamente?',
        options: [
          'localStorage.setItem("clave", objeto)',
          'localStorage.setItem("clave", JSON.stringify(objeto))',
          'localStorage.save("clave", objeto)',
          'localStorage.setObject("clave", objeto)',
        ],
        correctAnswer: 'localStorage.setItem("clave", JSON.stringify(objeto))',
        correctFeedback: 'Correcto. localStorage solo acepta strings, así que debes convertir el objeto a JSON con JSON.stringify antes de guardarlo.',
        incorrectFeedback: 'localStorage solo guarda strings. Si pasas un objeto directamente, se guarda como "[object Object]". Siempre usa JSON.stringify primero.',
      },
      {
        question: '¿Qué estrategia es correcta para actualizar un valor guardado en localStorage?',
        options: [
          'Usar localStorage.update() con la clave',
          'Leer el valor actual, modificarlo y guardar con setItem usando la misma clave',
          'localStorage.setItem crea una nueva entrada, no actualiza',
          'Borrar y recrear la clave con clear()',
        ],
        correctAnswer: 'Leer el valor actual, modificarlo y guardar con setItem usando la misma clave',
        correctFeedback: 'Correcto. setItem sobreescribe si la clave ya existe. No hay método update — simplemente usas setItem de nuevo con la misma clave.',
        incorrectFeedback: 'No existe localStorage.update(). Para actualizar: lee con getItem, parsea con JSON.parse, modifica el objeto, serializa con JSON.stringify, y guarda con setItem de nuevo.',
      },
      {
        question: '¿Qué código guarda correctamente un array en localStorage?',
        options: [
          'localStorage.setItem("lista", [1, 2, 3])',
          'localStorage.setItem("lista", JSON.stringify([1, 2, 3]))',
          'localStorage.save("lista", [1, 2, 3])',
          'localStorage["lista"] = [1, 2, 3]',
        ],
        correctAnswer: 'localStorage.setItem("lista", JSON.stringify([1, 2, 3]))',
        correctFeedback: 'Correcto. localStorage solo guarda strings. Debes convertir el array a JSON string con JSON.stringify() antes de guardarlo.',
        incorrectFeedback: 'localStorage.setItem("lista", [1,2,3]) guardaría el string "1,2,3" (conversión automática incorrecta). El método correcto es JSON.stringify() primero.',
      },
      {
        question: '¿Cuántos datos puede guardar localStorage por dominio aproximadamente?',
        options: [
          'Solo 1 KB',
          'Ilimitados',
          'Hasta 5 MB aproximadamente (varía por navegador)',
          'Exactamente 100 claves',
        ],
        correctAnswer: 'Hasta 5 MB aproximadamente (varía por navegador)',
        correctFeedback: 'Correcto. El límite típico es alrededor de 5 MB por origen. No es para datos grandes — es para preferencias y datos de sesión pequeños.',
        incorrectFeedback: 'localStorage tiene un límite de almacenamiento (generalmente ~5 MB por dominio, aunque varía por navegador). No es adecuado para grandes cantidades de datos.',
      },
      {
        question: '¿Qué pasa si localStorage está lleno y llamas setItem()?',
        options: [
          'Sobreescribe automáticamente los datos más antiguos',
          'Lanza una excepción QuotaExceededError',
          'El dato nuevo simplemente no se guarda sin avisar',
          'El navegador muestra un diálogo al usuario',
        ],
        correctAnswer: 'Lanza una excepción QuotaExceededError',
        correctFeedback: 'Correcto. Cuando localStorage alcanza su límite, setItem() lanza QuotaExceededError. Es importante manejar este error con try-catch al guardar datos.',
        incorrectFeedback: 'localStorage no sobreescribe ni ignora silenciosamente. Si el almacenamiento está lleno, lanza QuotaExceededError. Por eso conviene envolver setItem() en try-catch.',
      },
    ],
  },

  {
    slug: 'leer-localstorage',
    title: 'Leer datos desde localStorage',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 153,
    description:
      'Aprende a recuperar datos guardados y convertirlos de vuelta a objetos usando JSON.parse().',
    explanation: `## Leer datos desde localStorage

### Leer un string simple

\`\`\`js
let tema = localStorage.getItem('tema')
console.log(tema) // "oscuro" o null si no existe
\`\`\`

### Leer con valor por defecto

\`\`\`js
let idioma = localStorage.getItem('idioma') ?? 'es'
// Si no existe, usa 'es' como default
\`\`\`

### Leer objetos — siempre con JSON.parse()

\`\`\`js
function leerObjeto(clave, defecto = null) {
  try {
    const texto = localStorage.getItem(clave)
    if (!texto) return defecto
    return JSON.parse(texto)
  } catch {
    return defecto
  }
}

let config = leerObjeto('config', { tema: 'claro', idioma: 'es' })
console.log(config.tema) // "oscuro" o "claro" (el default)
\`\`\`

### Leer números y booleanos

\`\`\`js
// Números: localStorage guarda strings
let fontSizeStr = localStorage.getItem('fontSize')
let fontSize = fontSizeStr ? Number(fontSizeStr) : 14

// Booleanos: comparar con el string "true"
let notifsStr = localStorage.getItem('notificaciones')
let notificaciones = notifsStr === 'true'
\`\`\`

### Leer arrays

\`\`\`js
function leerArray(clave) {
  try {
    const texto = localStorage.getItem(clave)
    if (!texto) return []
    const parsed = JSON.parse(texto)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

let historial = leerArray('historial')
console.log(historial.length)
\`\`\`

### Patrón completo de lectura

\`\`\`js
function leerConDefault(clave, defecto) {
  try {
    const raw = localStorage.getItem(clave)
    if (raw === null) return defecto
    return JSON.parse(raw)
  } catch {
    return defecto
  }
}

// Ejemplos
let progreso = leerConDefault('progreso', 0)
let tareas = leerConDefault('tareas', [])
let prefs = leerConDefault('preferencias', { tema: 'claro' })
\`\`\``,
    codeExample: `// app.js — carga de datos al iniciar la aplicación

// Función de lectura segura y genérica
function leer(clave, valorPorDefecto = null) {
  try {
    const texto = localStorage.getItem('app_' + clave)
    if (texto === null) return valorPorDefecto
    return JSON.parse(texto)
  } catch (error) {
    console.warn('Error al leer "' + clave + '" de localStorage:', error.message)
    return valorPorDefecto
  }
}

// Inicializar la app con datos guardados
function inicializarApp() {
  // Leer preferencias con valores por defecto
  const preferencias = leer('preferencias', {
    tema: 'claro',
    idioma: 'es',
    fontSize: 14,
  })

  // Leer progreso del curso
  const leccionesCompletadas = leer('lecciones_completadas', [])
  const puntosTotales = leer('puntos', 0)

  // Leer datos del usuario (si inició sesión antes)
  const ultimoUsuario = leer('ultimo_usuario', null)

  console.log('=== Datos cargados ===')
  console.log('Tema:', preferencias.tema)
  console.log('Lecciones completadas:', leccionesCompletadas.length)
  console.log('Puntos:', puntosTotales)
  console.log('Último usuario:', ultimoUsuario ?? 'Ninguno')

  return { preferencias, leccionesCompletadas, puntosTotales }
}

const estado = inicializarApp()`,
    keyPoints: [
      'getItem() devuelve null si la clave no existe — usa ?? para dar un valor por defecto.',
      'Los objetos y arrays deben parsearse con JSON.parse() después de leer.',
      'Los números y booleanos se guardaron como string — convierte de vuelta al leer.',
      'Siempre usa try/catch al parsear datos de localStorage.',
      'Verifica que el array sigue siendo array (Array.isArray) después del parse.',
      'Tener una función genérica de lectura evita repetir el patrón try/catch en todo el código.',
    ],
    exercise: {
      description:
        'Crea una función `cargarEstadoApp()` que lea del localStorage las siguientes claves (con sus defaults): "tema" (default: "claro"), "volumen" (default: 50, debe ser número), "historial" (default: [], debe ser array), "usuario" (default: null, puede ser objeto). Retorna un objeto con todos estos valores. Maneja los casos donde los datos estén corruptos.',
      hint: 'Crea una función de lectura segura genérica y llámala para cada clave. Para el volumen: `Number(leer("volumen", 50))`. Para historial: verifica que sea array con `Array.isArray()`.',
    },
    quiz: [
      {
        question: '¿Por qué debes usar JSON.parse() al leer un objeto de localStorage?',
        options: [
          'Para mejorar el rendimiento de la lectura',
          'Porque localStorage guarda todo como string — JSON.parse convierte el texto de vuelta a objeto',
          'Porque localStorage comprime los datos al guardar',
          'JSON.parse es opcional si el objeto no tiene arrays',
        ],
        correctAnswer: 'Porque localStorage guarda todo como string — JSON.parse convierte el texto de vuelta a objeto',
        correctFeedback: 'Correcto. localStorage devuelve siempre strings. JSON.parse convierte ese string de vuelta a la estructura de datos original (objeto, array, número, etc.).',
        incorrectFeedback: 'localStorage solo guarda y devuelve strings. Sin JSON.parse, lo que obtienes es el texto JSON crudo, no el objeto. JSON.parse reconstruye la estructura.',
      },
      {
        question: '¿Cuál es el resultado de `Number("42")` al leer un número guardado en localStorage?',
        options: [
          '"42" (sigue siendo string)',
          '42 (número)',
          'NaN',
          'undefined',
        ],
        correctAnswer: '42 (número)',
        correctFeedback: 'Correcto. Number() convierte un string numérico a number. También puedes usar parseInt(), parseFloat(), o el operador unario +.',
        incorrectFeedback: 'Number("42") convierte el string "42" al número 42. Necesitas esta conversión porque localStorage siempre devuelve strings.',
      },
      {
        question: '¿Qué devuelve localStorage.getItem("clave") si la clave no existe?',
        options: [
          'undefined',
          'false',
          'null',
          '""',
        ],
        correctAnswer: 'null',
        correctFeedback: 'Correcto. A diferencia de variables JavaScript (que son undefined cuando no existen), localStorage.getItem() devuelve null si la clave no existe.',
        incorrectFeedback: 'localStorage.getItem() retorna null (no undefined) cuando la clave no existe. Esto es importante al verificar: debes usar === null, no === undefined.',
      },
      {
        question: '¿Por qué debes parsear el resultado de getItem() antes de usarlo como objeto?',
        options: [
          'Porque getItem() devuelve el dato cifrado',
          'Porque localStorage solo guarda strings — el objeto fue serializado con JSON.stringify() al guardarlo',
          'Porque getItem() devuelve un array de caracteres',
          'No es necesario — JavaScript convierte automáticamente',
        ],
        correctAnswer: 'Porque localStorage solo guarda strings — el objeto fue serializado con JSON.stringify() al guardarlo',
        correctFeedback: 'Correcto. Lo que guardaste con JSON.stringify() es un string. Al leerlo obtienes ese string. Para usarlo como objeto necesitas JSON.parse() para reconstruirlo.',
        incorrectFeedback: 'localStorage guarda strings. Si usaste JSON.stringify() para guardar, necesitas JSON.parse() para leer. Sin parse, obtienes el string crudo en lugar del objeto.',
      },
      {
        question: '¿Cuál es la forma más segura de leer un objeto de localStorage?',
        options: [
          'const data = JSON.parse(localStorage.getItem("key"))',
          'const data = localStorage.getItem("key").parse()',
          'const raw = localStorage.getItem("key"); const data = raw ? JSON.parse(raw) : null',
          'const data = eval(localStorage.getItem("key"))',
        ],
        correctAnswer: 'const raw = localStorage.getItem("key"); const data = raw ? JSON.parse(raw) : null',
        correctFeedback: 'Correcto. Verificar que raw no sea null antes de parsear evita errores inesperados. Lo ideal es también envolver esto en try-catch.',
        incorrectFeedback: 'La forma más segura verifica que el valor existe antes de parsear. JSON.parse(null) devuelve null sin error, pero verificar explícitamente es más claro. Agrega try-catch para JSON malformado.',
      },
    ],
  },

  {
    slug: 'eliminar-limpiar-localstorage',
    title: 'Eliminar y limpiar datos de localStorage',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 154,
    description:
      'Aprende a usar removeItem() y clear() para borrar información guardada.',
    explanation: `## Eliminar y limpiar localStorage

### removeItem() — eliminar una clave

\`\`\`js
// Elimina solo esa clave
localStorage.removeItem('tema')

// Si la clave no existe, no hace nada (no lanza error)
localStorage.removeItem('clave-inexistente') // sin error
\`\`\`

### clear() — eliminar todo

\`\`\`js
// ⚠️ Borra TODAS las claves del localStorage de ese origen
localStorage.clear()
\`\`\`

Usa clear() con cuidado — elimina también claves de otras librerías o scripts que usen el mismo localStorage.

### Borrar solo las claves de tu app

Si usas un prefijo en las claves, puedes borrar solo las tuyas:

\`\`\`js
function limpiarMiApp(prefix) {
  const clavesAEliminar = []

  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i)
    if (clave.startsWith(prefix)) {
      clavesAEliminar.push(clave)
    }
  }

  clavesAEliminar.forEach((c) => localStorage.removeItem(c))
  console.log('Eliminadas:', clavesAEliminar.length, 'claves')
}

limpiarMiApp('ronaldoscript_')
\`\`\`

### Cuándo eliminar datos

**removeItem:**
- El usuario cierra sesión → eliminar sus datos de preferencias.
- Una lección se "desmarca" → eliminar de la lista de completadas.
- Una nota se elimina → actualizar el array y guardarlo.

**clear:**
- Opción "Restablecer todo" en la app.
- Pruebas y desarrollo.

### Actualizar un array eliminando un elemento

\`\`\`js
function eliminarTarea(id) {
  let tareas = JSON.parse(localStorage.getItem('tareas')) ?? []
  tareas = tareas.filter((t) => t.id !== id)
  localStorage.setItem('tareas', JSON.stringify(tareas))
}
\`\`\``,
    codeExample: `// app.js — gestión de datos de usuario

const APP_PREFIX = 'mi_app_'

function guardar(clave, valor) {
  localStorage.setItem(APP_PREFIX + clave, JSON.stringify(valor))
}

function leer(clave, defecto = null) {
  try {
    const texto = localStorage.getItem(APP_PREFIX + clave)
    return texto !== null ? JSON.parse(texto) : defecto
  } catch { return defecto }
}

function eliminar(clave) {
  localStorage.removeItem(APP_PREFIX + clave)
}

function limpiarSesion() {
  // Eliminar solo los datos de sesión, no las preferencias
  eliminar('usuario_actual')
  eliminar('token_sesion')
  eliminar('carrito_temporal')
  console.log('Sesión cerrada y datos eliminados')
}

function restablecerApp() {
  // Eliminar todo lo de la app (con prefijo)
  const claves = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k.startsWith(APP_PREFIX)) claves.push(k)
  }
  claves.forEach((k) => localStorage.removeItem(k))
  console.log('App restablecida. Claves eliminadas:', claves.length)
}

// Ejemplo: gestión de lista de tareas
guardar('tareas', [
  { id: 1, texto: 'Estudiar JS', completada: false },
  { id: 2, texto: 'Practicar ejercicios', completada: true },
  { id: 3, texto: 'Revisar apuntes', completada: false },
])

function eliminarTarea(id) {
  let tareas = leer('tareas', [])
  tareas = tareas.filter((t) => t.id !== id)
  guardar('tareas', tareas)
  console.log('Tarea eliminada. Quedan:', tareas.length)
}

eliminarTarea(2)  // elimina la tarea completada
console.log('Tareas:', leer('tareas').length) // 2`,
    keyPoints: [
      'removeItem() elimina una clave específica. Si no existe, no hace nada.',
      'clear() elimina TODAS las claves del origen — úsalo con cuidado.',
      'Para borrar solo las claves de tu app, usa un prefijo y filtra por él.',
      'Para "eliminar" un elemento de un array, filtra el array y guárdalo de nuevo.',
      'Al cerrar sesión, elimina solo los datos de sesión, no las preferencias del usuario.',
      'En desarrollo, clear() es útil para empezar desde cero al probar.',
    ],
    exercise: {
      description:
        'Crea un sistema de favoritos con localStorage. Implementa: `agregarFavorito(producto)` que agrega el producto al array de favoritos, `eliminarFavorito(id)` que lo elimina por ID, `esFavorito(id)` que retorna true si está en favoritos, y `limpiarFavoritos()` que elimina todos. Los favoritos se guardan en la clave "favoritos".',
      hint: '`esFavorito(id)`: lee el array y usa `.some(p => p.id === id)`. `eliminarFavorito(id)`: filtra con `.filter(p => p.id !== id)` y guarda. `limpiarFavoritos()`: `localStorage.removeItem("favoritos")` o guarda un array vacío.',
    },
    quiz: [
      {
        question: '¿Qué sucede al llamar `localStorage.removeItem("clave-inexistente")`?',
        options: [
          'Lanza un ReferenceError',
          'Lanza un TypeError',
          'No hace nada — no lanza error',
          'Devuelve false para indicar que no se encontró',
        ],
        correctAnswer: 'No hace nada — no lanza error',
        correctFeedback: 'Correcto. removeItem() es idempotente — llamarlo con una clave inexistente no hace nada y no lanza error.',
        incorrectFeedback: 'removeItem() no lanza errores si la clave no existe. Es seguro llamarlo incluso si no sabes si la clave existe.',
      },
      {
        question: '¿Por qué es peligroso usar `localStorage.clear()` sin cuidado?',
        options: [
          'Porque es muy lento y bloquea el navegador',
          'Porque elimina TODAS las claves del origen, incluyendo las de otras librerías',
          'Porque no funciona en Firefox',
          'Porque puede corromper el sistema de archivos',
        ],
        correctAnswer: 'Porque elimina TODAS las claves del origen, incluyendo las de otras librerías',
        correctFeedback: 'Correcto. clear() no discrimina — borra todo el localStorage del dominio, incluyendo datos de analytics, chat widgets, u otras librerías.',
        incorrectFeedback: 'clear() es un borrado total. Si tu página usa librerías de terceros que guardan datos en localStorage, clear() también los elimina. Mejor usar un prefijo y borrar solo tus claves.',
      },
      {
        question: '¿Cuál es la forma correcta de "eliminar" un elemento de un array guardado en localStorage?',
        options: [
          'localStorage.deleteItem(clave, id)',
          'Leer el array, filtrar el elemento, guardar el array modificado',
          'localStorage.removeItem con el id del elemento',
          'Acceder directamente con localStorage[clave][id] = undefined',
        ],
        correctAnswer: 'Leer el array, filtrar el elemento, guardar el array modificado',
        correctFeedback: 'Correcto. localStorage guarda el array como un todo. Para "eliminar" un elemento debes: leer → parsear → filtrar → serializar → guardar.',
        incorrectFeedback: 'localStorage no tiene operaciones a nivel de elemento. Trabaja con todo el valor almacenado. Para modificar un array: lee todo el array, filtra el elemento, y guarda el array completo.',
      },
      {
        question: '¿Cuál es la diferencia entre localStorage.removeItem() y localStorage.clear()?',
        options: [
          'No hay diferencia — ambas hacen lo mismo',
          'removeItem elimina solo una clave específica; clear elimina todo el localStorage del dominio',
          'clear es más lento pero más seguro que removeItem',
          'removeItem solo funciona si el valor es null',
        ],
        correctAnswer: 'removeItem elimina solo una clave específica; clear elimina todo el localStorage del dominio',
        correctFeedback: 'Correcto. removeItem("clave") elimina solo ese dato. clear() elimina TODOS los datos guardados por ese dominio — usar con precaución.',
        incorrectFeedback: 'Son muy diferentes en alcance: removeItem es quirúrgico (elimina una clave), clear es total (elimina todo). clear() elimina TODOS los datos del dominio.',
      },
      {
        question: '¿Por qué localStorage.clear() puede ser peligroso en un sitio con múltiples aplicaciones en el mismo dominio?',
        options: [
          'Porque clear() puede fallar si hay muchos datos guardados',
          'Porque clear() elimina los datos de todas las aplicaciones en ese dominio, no solo la tuya',
          'Porque clear() también borra las cookies del dominio',
          'Porque clear() es irreversible y tarda mucho',
        ],
        correctAnswer: 'Porque clear() elimina los datos de todas las aplicaciones en ese dominio, no solo la tuya',
        correctFeedback: 'Correcto. Si dos aplicaciones comparten el mismo dominio, localStorage.clear() en una borra los datos de la otra también. Es mejor usar removeItem() con claves específicas.',
        incorrectFeedback: 'localStorage es compartido por dominio. Si varias apps usan el mismo dominio, clear() destruye todos los datos de todas ellas. Es mejor usar removeItem() con claves con prefijos únicos.',
      },
    ],
  },

  {
    slug: 'proyecto-notas-localstorage',
    title: 'Proyecto: notas guardadas en el navegador',
    module: 'JSON y localStorage',
    moduleNumber: 20,
    order: 155,
    description:
      'Crea una pequeña aplicación de notas que guarde información en localStorage para que no se pierda al recargar la página.',
    explanation: `## Proyecto: Notas guardadas en el navegador

En esta lección construyes una aplicación de notas completa que usa todo lo aprendido en este módulo: JSON, localStorage, y buenas prácticas de manejo de datos.

### Funcionalidades del proyecto

1. **Crear nota** — titulo + contenido
2. **Listar notas** — mostrar todas las guardadas
3. **Eliminar nota** — por ID
4. **Buscar notas** — filtrar por texto
5. **Persistencia** — sobrevive al recargar la página

### Estructura de una nota

\`\`\`js
{
  id: 1705337400000,        // Date.now() — único
  titulo: "Closures en JS",
  contenido: "Un closure es...",
  creadaEn: "2024-01-15T10:30:00.000Z",
  actualizada: "2024-01-15T11:00:00.000Z",
}
\`\`\`

### Módulo de almacenamiento

\`\`\`js
// storage.js
const CLAVE = 'notas_app'

function obtenerNotas() {
  try {
    const texto = localStorage.getItem(CLAVE)
    if (!texto) return []
    const datos = JSON.parse(texto)
    return Array.isArray(datos) ? datos : []
  } catch { return [] }
}

function guardarNotas(notas) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(notas))
    return true
  } catch { return false }
}
\`\`\`

### Lógica de la aplicación

\`\`\`js
function crearNota(titulo, contenido) {
  if (!titulo.trim()) throw new Error('El título es obligatorio')

  const nuevaNota = {
    id: Date.now(),
    titulo: titulo.trim(),
    contenido: contenido.trim(),
    creadaEn: new Date().toISOString(),
    actualizada: new Date().toISOString(),
  }

  const notas = obtenerNotas()
  notas.unshift(nuevaNota)  // agregar al inicio
  guardarNotas(notas)
  return nuevaNota
}

function eliminarNota(id) {
  let notas = obtenerNotas()
  const antes = notas.length
  notas = notas.filter((n) => n.id !== id)
  guardarNotas(notas)
  return antes !== notas.length  // true si se eliminó algo
}

function buscarNotas(texto) {
  if (!texto.trim()) return obtenerNotas()
  const q = texto.toLowerCase()
  return obtenerNotas().filter(
    (n) =>
      n.titulo.toLowerCase().includes(q) ||
      n.contenido.toLowerCase().includes(q)
  )
}
\`\`\``,
    codeExample: `// notas-app.js — Aplicación completa de notas con localStorage

const STORAGE_KEY = 'mi_app_notas'

// --- Módulo de storage ---
function obtenerTodasLasNotas() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const datos = JSON.parse(raw)
    return Array.isArray(datos) ? datos : []
  } catch {
    return []
  }
}

function persistirNotas(notas) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notas))
    return true
  } catch (error) {
    console.error('No se pudieron guardar las notas:', error.message)
    return false
  }
}

// --- Lógica de notas ---
function crearNota(titulo, contenido = '') {
  if (!titulo || titulo.trim().length === 0) {
    throw new Error('El título no puede estar vacío')
  }

  const nota = {
    id: Date.now(),
    titulo: titulo.trim(),
    contenido: contenido.trim(),
    creadaEn: new Date().toISOString(),
    actualizada: new Date().toISOString(),
  }

  const notas = obtenerTodasLasNotas()
  notas.unshift(nota)
  persistirNotas(notas)
  return nota
}

function actualizarNota(id, cambios) {
  const notas = obtenerTodasLasNotas().map((n) => {
    if (n.id !== id) return n
    return { ...n, ...cambios, actualizada: new Date().toISOString() }
  })
  return persistirNotas(notas)
}

function eliminarNota(id) {
  const notas = obtenerTodasLasNotas().filter((n) => n.id !== id)
  return persistirNotas(notas)
}

function buscarNotas(query) {
  if (!query?.trim()) return obtenerTodasLasNotas()
  const q = query.toLowerCase()
  return obtenerTodasLasNotas().filter(
    (n) =>
      n.titulo.toLowerCase().includes(q) ||
      n.contenido.toLowerCase().includes(q)
  )
}

function obtenerEstadisticas() {
  const notas = obtenerTodasLasNotas()
  return {
    total: notas.length,
    totalCaracteres: notas.reduce((s, n) => s + n.contenido.length, 0),
    masReciente: notas[0]?.titulo ?? 'Sin notas',
  }
}

// --- Demo ---
crearNota('Closures en JS', 'Un closure es una función que recuerda su entorno.')
crearNota('Módulos', 'Los módulos organizan el código en archivos con responsabilidades claras.')
crearNota('localStorage', 'Solo guarda strings — usa JSON.stringify y JSON.parse.')

console.log('Notas guardadas:', obtenerTodasLasNotas().length)
console.log('Búsqueda "módulos":', buscarNotas('módulos').length, 'resultado(s)')
console.log('Estadísticas:', obtenerEstadisticas())`,
    keyPoints: [
      'Una app de notas completa combina: JSON (serialización), localStorage (persistencia) y módulos (organización).',
      'Usa Date.now() como ID único simple — cambia si la precisión es crítica.',
      'Array.prototype.unshift() agrega al inicio del array — útil para mostrar la nota más reciente primero.',
      'unshift() + filter() para agregar/eliminar; map() para actualizar elementos del array.',
      'Envuelve todas las operaciones de localStorage en try/catch.',
      'Una función de búsqueda que filtra en cliente es simple y eficiente para colecciones pequeñas.',
    ],
    exercise: {
      description:
        'Extiende el proyecto de notas agregando: 1) Una función `editarNota(id, nuevoTitulo, nuevoContenido)` que actualiza una nota existente y su campo "actualizada". 2) Una función `obtenerNotaPorId(id)` que retorna una nota específica o null. 3) Una función `ordenarNotas(criterio)` que retorne las notas ordenadas por "creadaEn" (más reciente primero) o "titulo" (alfabético). Integra estas funciones con el sistema de storage existente.',
      hint: 'editarNota: lee todas las notas, usa .map() para encontrar la correcta y crear un nuevo objeto con los campos actualizados y la fecha actualizada. obtenerNotaPorId: usa .find(). ordenarNotas: usa .sort() con los comparadores adecuados para fechas y strings.',
    },
    quiz: [
      {
        question: '¿Por qué se usa `Date.now()` como ID de una nota?',
        options: [
          'Porque es el único tipo de ID que soporta localStorage',
          'Porque genera un número basado en el tiempo actual — prácticamente único para uso simple',
          'Porque es requerido por la especificación de JSON',
          'Porque es más corto que un UUID',
        ],
        correctAnswer: 'Porque genera un número basado en el tiempo actual — prácticamente único para uso simple',
        correctFeedback: 'Correcto. Date.now() devuelve los milisegundos desde 1970 — es prácticamente único para operaciones no simultáneas. Simple y efectivo para apps pequeñas.',
        incorrectFeedback: 'Date.now() es el tiempo en milisegundos — dos notas creadas en el mismo milisegundo tendrían el mismo ID. Para apps simples es suficiente, pero en producción se usaría UUID.',
      },
      {
        question: '¿Para qué sirve `Array.prototype.unshift()` al crear una nota?',
        options: [
          'Para ordenar el array alfabéticamente',
          'Para agregar el elemento al final del array',
          'Para agregar el elemento al inicio del array — mostrar la nota más reciente primero',
          'Para eliminar duplicados',
        ],
        correctAnswer: 'Para agregar el elemento al inicio del array — mostrar la nota más reciente primero',
        correctFeedback: 'Correcto. unshift() agrega al inicio, push() al final. Agregar al inicio hace que la lista muestre automáticamente las notas más recientes primero.',
        incorrectFeedback: 'unshift() agrega al inicio (lo opuesto de push que agrega al final). Agregar la nueva nota al inicio garantiza que aparece primero en la lista, sin necesidad de ordenar.',
      },
      {
        question: '¿Cuál es la forma correcta de actualizar una nota en un array sin mutar el array original?',
        options: [
          'notas[indice].titulo = nuevoTitulo',
          'notas.find(n => n.id === id).titulo = nuevoTitulo',
          'notas.map(n => n.id === id ? {...n, titulo: nuevoTitulo} : n)',
          'notas.update(id, {titulo: nuevoTitulo})',
        ],
        correctAnswer: 'notas.map(n => n.id === id ? {...n, titulo: nuevoTitulo} : n)',
        correctFeedback: 'Correcto. map() recorre el array y para la nota correcta crea un nuevo objeto con spread + los campos actualizados. Las demás notas se devuelven sin cambio.',
        incorrectFeedback: 'Las opciones que acceden directamente a propiedades mutan el objeto original. Con map() y spread `{...n, titulo: nuevoTitulo}` creas un nuevo objeto — inmutabilidad.',
      },
      {
        question: '¿Por qué es importante guardar notas completas como array en localStorage en lugar de una clave por nota?',
        options: [
          'Porque localStorage no permite más de una clave',
          'Porque permite operaciones atómicas y facilita la gestión (filtrar, ordenar, contar) sin múltiples lecturas',
          'Porque JSON solo puede representar arrays',
          'Porque las notas individuales no se pueden serializar',
        ],
        correctAnswer: 'Porque permite operaciones atómicas y facilita la gestión (filtrar, ordenar, contar) sin múltiples lecturas',
        correctFeedback: 'Correcto. Guardar todo en un array te permite leer de una vez y hacer todas las operaciones en memoria (filter, sort, find) sin múltiples accesos a localStorage.',
        incorrectFeedback: 'Técnicamente podrías tener una clave por nota, pero sería más difícil de gestionar: necesitarías listar todas las claves para obtener todas las notas. El array centraliza todo en una lectura.',
      },
      {
        question: '¿Por qué es importante envolver las operaciones de localStorage en try-catch en un proyecto real?',
        options: [
          'Porque localStorage puede estar deshabilitado o el almacenamiento puede estar lleno',
          'Porque localStorage lanza errores siempre que se usa en modo estricto',
          'Porque try-catch es obligatorio en proyectos con módulos',
          'Porque localStorage es asíncrono y puede retrasarse',
        ],
        correctAnswer: 'Porque localStorage puede estar deshabilitado o el almacenamiento puede estar lleno',
        correctFeedback: 'Correcto. localStorage puede no estar disponible (modo incógnito en algunos navegadores, configuraciones de privacidad) o la cuota puede estar llena. El try-catch hace la app más robusta.',
        incorrectFeedback: 'localStorage es síncrono, no asíncrono. Pero puede fallar: storage lleno (QuotaExceededError) o bloqueado por configuración de privacidad. Try-catch es la forma de manejar estos casos.',
      },
    ],
  },
]

export const jsModule20: Module = {
  number: 20,
  title: 'JSON y localStorage',
  level: 'nivel4',
  lessons: lessonsJsModule20,
}
