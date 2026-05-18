import type { Lesson, Module } from '@/types'

export const lessonsJsModule17: Lesson[] = [
  {
    slug: 'destructuring-arrays',
    title: 'Destructuring en arrays',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 124,
    description:
      'Aprende a extraer valores de arrays de forma clara y directa usando destructuring.',
    explanation: `## Destructuring en arrays

El **destructuring** (desestructuración) es una sintaxis que te permite extraer valores de arrays o propiedades de objetos en variables individuales de forma más concisa.

### Sin destructuring

\`\`\`js
let colores = ['rojo', 'verde', 'azul']

let primero = colores[0]
let segundo = colores[1]
let tercero = colores[2]
\`\`\`

### Con destructuring

\`\`\`js
let colores = ['rojo', 'verde', 'azul']

let [primero, segundo, tercero] = colores
console.log(primero) // "rojo"
console.log(segundo) // "verde"
console.log(tercero) // "azul"
\`\`\`

La posición en el lado izquierdo determina qué valor se toma.

### Saltar elementos

Deja un espacio vacío con una coma para omitir un elemento:

\`\`\`js
let [primera, , tercera] = ['manzana', 'banana', 'uva']
console.log(primera) // "manzana"
console.log(tercera) // "uva"
\`\`\`

### Valores por defecto en arrays

\`\`\`js
let [nombre = 'Invitado', rol = 'usuario'] = ['Ana']
console.log(nombre) // "Ana"
console.log(rol)    // "usuario" — valor por defecto
\`\`\`

### Intercambiar variables

El destructuring permite intercambiar valores elegantemente:

\`\`\`js
let a = 1
let b = 2

;[a, b] = [b, a]
console.log(a) // 2
console.log(b) // 1
\`\`\`

### Destructuring con rest

\`\`\`js
let [primero, ...resto] = [10, 20, 30, 40]
console.log(primero) // 10
console.log(resto)   // [20, 30, 40]
\`\`\`

### Destructuring de retorno de función

\`\`\`js
function obtenerCoordenadas() {
  return [40.4168, -3.7038]
}

let [latitud, longitud] = obtenerCoordenadas()
console.log(latitud)  // 40.4168
console.log(longitud) // -3.7038
\`\`\``,
    codeExample: `// script.js

// Datos de un producto como array
let producto = ['Laptop Gaming', 'Electrónica', 1299.99, true]

// Sin destructuring — menos legible
// let nombreProducto = producto[0]
// let categoria = producto[1]

// ✅ Con destructuring — más claro
let [nombreProducto, categoria, precio, disponible] = producto

console.log(nombreProducto) // "Laptop Gaming"
console.log(categoria)      // "Electrónica"
console.log(precio)         // 1299.99
console.log(disponible)     // true

// Función que retorna múltiples valores
function calcularEstadisticas(numeros) {
  let ordenados = [...numeros].sort((a, b) => a - b)
  let minimo = ordenados[0]
  let maximo = ordenados[ordenados.length - 1]
  let suma = numeros.reduce((s, n) => s + n, 0)
  let promedio = suma / numeros.length
  return [minimo, maximo, promedio]
}

let [min, max, prom] = calcularEstadisticas([5, 3, 8, 1, 9, 2])
console.log('Mínimo:', min)    // 1
console.log('Máximo:', max)    // 9
console.log('Promedio:', prom) // 4.666...`,
    keyPoints: [
      'El destructuring de arrays extrae valores por posición.',
      'Puedes saltarte elementos usando comas vacías.',
      'Puedes asignar valores por defecto en caso de que el elemento sea undefined.',
      'El intercambio de variables [a, b] = [b, a] es una forma elegante y sin variable temporal.',
      'Puedes combinar destructuring con rest (...) para capturar los elementos restantes.',
      'Es ideal para extraer múltiples valores de retorno de una función.',
    ],
    exercise: {
      description:
        'Dado este array de configuración: `const config = ["oscuro", "es", 14, true, "Inter"]`, extrae cada valor en variables descriptivas usando destructuring. Luego crea una función `procesarRGB(colorArray)` que reciba un array como `[255, 128, 0]` y devuelva un string con formato `"rgb(255, 128, 0)"` usando destructuring en los parámetros o en el cuerpo.',
      hint: 'Para config: `const [tema, idioma, tamanoFuente, notificaciones, fuente] = config`. Para procesarRGB: puedes hacer `const [r, g, b] = colorArray` o directamente en el parámetro `function procesarRGB([r, g, b])`.',
    },
    quiz: [
      {
        question: '¿Qué valor tiene `b` después de: `let [a, b] = [10, 20, 30]`?',
        options: [
          '10',
          '20',
          '30',
          'undefined',
        ],
        correctAnswer: '20',
        correctFeedback: 'Correcto. En el destructuring de arrays, la posición determina el valor. b está en posición 1 (segunda), que corresponde al valor 20.',
        incorrectFeedback: 'El destructuring de arrays se basa en posición. a recibe el primer elemento (10), b recibe el segundo (20). El 30 no se captura.',
      },
      {
        question: '¿Qué imprime este código?\n\nlet [x, , z] = [1, 2, 3]\nconsole.log(x, z)',
        options: [
          '1 2',
          '1 3',
          '2 3',
          'undefined undefined',
        ],
        correctAnswer: '1 3',
        correctFeedback: 'Correcto. La coma vacía entre x y z "salta" el segundo elemento (2). x recibe 1 y z recibe 3.',
        incorrectFeedback: 'La doble coma en el destructuring actúa como "saltar posición". x = primer elemento (1), la posición 2 se salta, z = tercer elemento (3).',
      },
      {
        question: '¿Qué resultado da `let [a, b] = [b, a]` para intercambiar a=1, b=2?',
        options: [
          'a=1, b=2 (sin cambio)',
          'a=2, b=1 (intercambiados correctamente)',
          'a=undefined, b=undefined',
          'Lanza un error de sintaxis',
        ],
        correctAnswer: 'a=2, b=1 (intercambiados correctamente)',
        correctFeedback: 'Correcto. JavaScript evalúa primero el lado derecho [b, a] → [2, 1], luego desestructura en [a, b]. Resultado: a=2, b=1.',
        incorrectFeedback: 'El lado derecho [b, a] se evalúa primero produciendo [2, 1]. Luego se asigna a [a, b]. Intercambio exitoso sin variable temporal.',
      },
      {
        question: '¿Qué es `resto` después de `let [x, ...resto] = [1, 2, 3, 4]`?',
        options: [
          '2',
          '[2, 3, 4]',
          '[1, 2, 3, 4]',
          'undefined',
        ],
        correctAnswer: '[2, 3, 4]',
        correctFeedback: 'Exacto. x captura el primer elemento (1) y ...resto captura todos los restantes en un nuevo array [2, 3, 4].',
        incorrectFeedback: '...resto con spread/rest en destructuring captura todos los elementos que quedaron después de los capturados. x toma 1, y resto recibe [2, 3, 4].',
      },
      {
        question: '¿Cuál es el valor de `b` en: `let [a, b = 99] = [5]`?',
        options: [
          'undefined',
          '5',
          '99',
          'null',
        ],
        correctAnswer: '99',
        correctFeedback: 'Correcto. Como el array solo tiene un elemento, b no tiene valor correspondiente (undefined), así que se usa el valor por defecto: 99.',
        incorrectFeedback: 'Cuando el elemento del array es undefined (no existe), se usa el valor por defecto asignado en el destructuring. Como no hay segundo elemento, b = 99.',
      },
    ],
  },

  {
    slug: 'destructuring-objetos',
    title: 'Destructuring en objetos',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 125,
    description:
      'Aprende a extraer propiedades de objetos y guardarlas en variables.',
    explanation: `## Destructuring en objetos

El destructuring de objetos extrae propiedades por **nombre** (no por posición como en arrays).

### Sin destructuring

\`\`\`js
let usuario = { nombre: 'Ana', edad: 28, rol: 'admin' }

let nombre = usuario.nombre
let edad = usuario.edad
let rol = usuario.rol
\`\`\`

### Con destructuring

\`\`\`js
let usuario = { nombre: 'Ana', edad: 28, rol: 'admin' }

let { nombre, edad, rol } = usuario
console.log(nombre) // "Ana"
console.log(edad)   // 28
console.log(rol)    // "admin"
\`\`\`

El nombre de la variable debe coincidir con la propiedad del objeto.

### Orden no importa

A diferencia de los arrays, el orden no importa en objetos:

\`\`\`js
let { rol, nombre } = usuario  // mismo resultado
\`\`\`

### Propiedades no existentes

Si la propiedad no existe en el objeto, la variable tiene valor \`undefined\`:

\`\`\`js
let { nombre, pais } = { nombre: 'Ana' }
console.log(pais) // undefined
\`\`\`

### Destructuring anidado

\`\`\`js
let pedido = {
  id: 1,
  cliente: {
    nombre: 'Ana',
    ciudad: 'Madrid',
  },
}

let { cliente: { nombre, ciudad } } = pedido
console.log(nombre) // "Ana"
console.log(ciudad) // "Madrid"
\`\`\`

### Destructuring en asignación (no declaración)

\`\`\`js
let nombre, edad

;({ nombre, edad } = { nombre: 'Luis', edad: 30 })
\`\`\`

Los paréntesis son necesarios cuando no hay declaración \`let/const/var\`.`,
    codeExample: `// script.js

// Producto en un catálogo
let producto = {
  id: 'PROD-001',
  nombre: 'Teclado Mecánico',
  precio: 349.99,
  categoria: 'Periféricos',
  stock: 15,
  disponible: true,
}

// ✅ Destructuring de objeto
let { nombre, precio, categoria, stock } = producto
console.log(nombre)    // "Teclado Mecánico"
console.log(precio)    // 349.99
console.log(categoria) // "Periféricos"
console.log(stock)     // 15

// Destructuring de datos de usuario con objetos anidados
let perfil = {
  id: 'USR-42',
  nombre: 'Ana García',
  configuracion: {
    tema: 'oscuro',
    idioma: 'es',
    notificaciones: true,
  },
}

let {
  nombre: nombreUsuario,
  configuracion: { tema, idioma },
} = perfil

console.log(nombreUsuario) // "Ana García"
console.log(tema)          // "oscuro"
console.log(idioma)        // "es"`,
    keyPoints: [
      'El destructuring de objetos extrae propiedades por nombre, no por posición.',
      'El nombre de la variable debe coincidir con el nombre de la propiedad.',
      'El orden de las variables en el destructuring no importa.',
      'Las propiedades que no existen devuelven undefined.',
      'Se puede hacer destructuring anidado para extraer propiedades de objetos internos.',
      'Es una de las sintaxis más utilizadas en JavaScript moderno y en frameworks como React.',
    ],
    exercise: {
      description:
        'Dado este objeto de configuración de una aplicación:\n```js\nconst appConfig = {\n  nombre: "RonaldoScript",\n  version: "2.0",\n  ui: { tema: "oscuro", fuente: "Inter" },\n  limites: { sesiones: 3, peticiones: 100 }\n}\n```\nExtrae `nombre`, `version`, `tema` (de ui), `fuente` (de ui), y `sesiones` (de limites) usando destructuring en una sola expresión.',
      hint: 'Puedes anidar el destructuring: `const { nombre, version, ui: { tema, fuente }, limites: { sesiones } } = appConfig`',
    },
    quiz: [
      {
        question: '¿Qué valor tiene `edad` después de: `const { edad } = { nombre: "Ana", edad: 25 }`?',
        options: [
          'undefined',
          'null',
          '25',
          '"Ana"',
        ],
        correctAnswer: '25',
        correctFeedback: 'Correcto. El destructuring de objetos extrae la propiedad por nombre. La variable `edad` recibe el valor 25.',
        incorrectFeedback: 'El destructuring de objetos usa el nombre de la propiedad para encontrar el valor. `edad` en el objeto tiene valor 25.',
      },
      {
        question: '¿Qué imprime este código?\n\nconst obj = { a: 1, b: 2 }\nconst { b, a } = obj\nconsole.log(a, b)',
        options: [
          '2 1 (el orden del destructuring importa)',
          '1 2 (el orden no importa, usa los nombres)',
          'undefined undefined',
          'ReferenceError',
        ],
        correctAnswer: '1 2 (el orden no importa, usa los nombres)',
        correctFeedback: 'Correcto. El destructuring de objetos usa los nombres, no las posiciones. a=1 y b=2 independientemente del orden en el destructuring.',
        incorrectFeedback: 'A diferencia de arrays, en el destructuring de objetos el orden no importa — se usa el nombre. a siempre extrae la propiedad a (1) y b extrae b (2).',
      },
      {
        question: '¿Qué valor tiene `ciudad` en: `const { nombre, ciudad } = { nombre: "Ana" }`?',
        options: [
          '"Ana"',
          'null',
          'undefined',
          'Lanza ReferenceError',
        ],
        correctAnswer: 'undefined',
        correctFeedback: 'Correcto. Si la propiedad no existe en el objeto, la variable obtiene undefined.',
        incorrectFeedback: 'Cuando una propiedad no existe en el objeto, el destructuring no lanza error — simplemente asigna undefined a esa variable.',
      },
      {
        question: '¿Cuál es la sintaxis correcta para extraer la propiedad `tema` de `config` en `{ ui: { config: { tema } } }`?',
        options: [
          'const { ui.config.tema } = obj',
          'const { ui: { config: { tema } } } = obj',
          'const { [ui][config][tema] } = obj',
          'const tema = obj.ui.config.tema (no se puede con destructuring)',
        ],
        correctAnswer: 'const { ui: { config: { tema } } } = obj',
        correctFeedback: 'Correcto. El destructuring anidado sigue la estructura del objeto: cada nivel se separa con `:` y las propiedades del siguiente nivel van entre {}.',
        incorrectFeedback: 'El destructuring anidado usa la sintaxis `prop: { subprop }`. Para extraer profundamente: `const { ui: { config: { tema } } } = obj`.',
      },
      {
        question: '¿Cuál es la diferencia principal entre destructuring de arrays y de objetos?',
        options: [
          'El destructuring de arrays usa {} y el de objetos usa []',
          'El destructuring de arrays extrae por posición; el de objetos extrae por nombre de propiedad',
          'El destructuring de objetos solo funciona con const',
          'No hay diferencia — ambos funcionan igual',
        ],
        correctAnswer: 'El destructuring de arrays extrae por posición; el de objetos extrae por nombre de propiedad',
        correctFeedback: 'Exacto. Arrays: la posición determina qué valor recibes. Objetos: el nombre de la propiedad determina qué valor recibes, sin importar el orden.',
        incorrectFeedback: 'Arrays usan [], objetos usan {}. La diferencia clave: arrays dependen del orden (posición), objetos dependen del nombre de la propiedad.',
      },
    ],
  },

  {
    slug: 'destructuring-renombrar-defaults',
    title: 'Renombrar variables y valores por defecto',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 126,
    description:
      'Aprende a renombrar variables y usar valores por defecto al hacer destructuring.',
    explanation: `## Renombrar variables y valores por defecto

### Renombrar variables en destructuring de objetos

A veces el nombre de la propiedad no es ideal para tu variable local, o ya tienes una variable con ese nombre:

\`\`\`js
let producto = { nombre: 'Laptop', precio: 1200 }

// Sin renombrar
let { nombre } = producto  // 'nombre' puede colisionar

// Con renombrar: propiedad: nuevoNombre
let { nombre: nombreProducto, precio: precioProducto } = producto

console.log(nombreProducto) // "Laptop"
console.log(precioProducto) // 1200
\`\`\`

La sintaxis es: \`{ propiedadOriginal: nombreNuevo }\`

### Valores por defecto en objetos

\`\`\`js
let configuracion = { tema: 'oscuro' }

let { tema, idioma = 'es', tamano = 14 } = configuracion

console.log(tema)   // "oscuro"
console.log(idioma) // "es"   — valor por defecto
console.log(tamano) // 14     — valor por defecto
\`\`\`

El valor por defecto solo se usa si la propiedad es \`undefined\`.

### Combinar renombrar y valor por defecto

\`\`\`js
let datos = { usr: 'ana' }

let { usr: nombreUsuario = 'Invitado' } = datos

console.log(nombreUsuario) // "ana"

let { usr: nombre2 = 'Invitado' } = {}
console.log(nombre2) // "Invitado"
\`\`\`

### Casos prácticos

**Respuesta de API:**
\`\`\`js
function mostrarPerfil(usuario) {
  const {
    name: nombre = 'Desconocido',
    email: correo = 'Sin correo',
    role: rol = 'usuario',
    avatar: foto = '/default-avatar.png',
  } = usuario

  console.log(nombre, correo, rol)
}
\`\`\`

**Parámetros de función:**
\`\`\`js
function configurarApp({ tema: t = 'claro', idioma: lang = 'es' } = {}) {
  console.log('Tema:', t, 'Idioma:', lang)
}

configurarApp({ tema: 'oscuro' })  // Tema: oscuro, Idioma: es
configurarApp()                     // Tema: claro, Idioma: es
\`\`\``,
    codeExample: `// app.js

// Datos de usuario provenientes de una API (los nombres podrían ser en inglés)
const datosApi = {
  user_name: 'ana_garcia',
  full_name: 'Ana García',
  email_address: 'ana@ejemplo.com',
  is_premium: true,
  avatar_url: null,  // podría ser null si no tiene foto
}

// Renombrar a nombres más amigables
const {
  user_name: nombreUsuario,
  full_name: nombreCompleto,
  email_address: correo,
  is_premium: esPremium,
  avatar_url: foto = '/imagenes/avatar-default.png',  // renombrar + default
} = datosApi

console.log(nombreUsuario)  // "ana_garcia"
console.log(nombreCompleto) // "Ana García"
console.log(correo)         // "ana@ejemplo.com"
console.log(esPremium)      // true
console.log(foto)           // "/imagenes/avatar-default.png" (era null, pero null !== undefined)

// ⚠️ Nota: el default solo aplica si el valor es undefined, no null
// Para manejar null también:
const fotoFinal = datosApi.avatar_url ?? '/imagenes/avatar-default.png'
console.log(fotoFinal) // "/imagenes/avatar-default.png"`,
    keyPoints: [
      'Puedes renombrar variables en el destructuring con la sintaxis `propiedad: nuevoNombre`.',
      'Puedes asignar valores por defecto con la sintaxis `propiedad = valorDefault`.',
      'Puedes combinar ambas: `propiedad: nuevoNombre = valorDefault`.',
      'El valor por defecto solo aplica cuando la propiedad es undefined — NOT cuando es null.',
      'Renombrar es útil cuando las propiedades del objeto tienen nombres en inglés o formatos snake_case.',
      'Esta combinación es muy común al consumir APIs donde los nombres no siempre son ideales.',
    ],
    exercise: {
      description:
        'Dada esta respuesta de API:\n```js\nconst respuesta = {\n  user_id: "USR-001",\n  display_name: "Carlos López",\n  score: undefined,\n  level: null,\n  last_login: "2024-01-15"\n}\n```\nUsa destructuring para extraer: `user_id` como `id`, `display_name` como `nombre`, `score` con valor por defecto `0`, `level` con valor por defecto `1` (observa qué pasa con null vs undefined), `last_login` como `ultimaConexion`.',
      hint: 'La sintaxis sería: `const { user_id: id, display_name: nombre, score = 0, level = 1, last_login: ultimaConexion } = respuesta`. Observa qué pasa con level — null no activa el default.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis para renombrar una propiedad en destructuring de objetos?',
        options: [
          '{ propiedadOriginal as nuevoNombre }',
          '{ propiedadOriginal: nuevoNombre }',
          '{ nuevoNombre = propiedadOriginal }',
          '{ propiedadOriginal => nuevoNombre }',
        ],
        correctAnswer: '{ propiedadOriginal: nuevoNombre }',
        correctFeedback: 'Correcto. La sintaxis es `{ propiedadOriginal: nuevoNombre }` — se lee "extrae propiedadOriginal y llámala nuevoNombre".',
        incorrectFeedback: 'En el destructuring de objetos, los dos puntos `:` tienen doble uso: si el lado derecho es un nombre de variable, es para renombrar; si es `{}`, es para destructuring anidado.',
      },
      {
        question: '¿Cuándo se aplica el valor por defecto en el destructuring?',
        options: [
          'Cuando la propiedad es null o undefined',
          'Solo cuando la propiedad es undefined',
          'Cuando la propiedad no existe o es null',
          'Siempre que el valor sea falsy (false, 0, "")',
        ],
        correctAnswer: 'Solo cuando la propiedad es undefined',
        correctFeedback: 'Correcto. El valor por defecto SOLO se activa cuando la propiedad es undefined — no cuando es null, 0, false, o cadena vacía.',
        incorrectFeedback: 'Importante: el default solo aplica con undefined. null, 0, false, y "" NO activan el valor por defecto — son valores definidos.',
      },
      {
        question: '¿Qué imprime: `const { a: x = 10 } = { a: undefined }`? `console.log(x)`',
        options: [
          'undefined',
          '10',
          'null',
          'ReferenceError: a is not defined',
        ],
        correctAnswer: '10',
        correctFeedback: 'Correcto. La propiedad `a` existe pero es undefined, así que se activa el valor por defecto 10. La variable se llamará `x` (renombrada).',
        incorrectFeedback: 'Se combina renombrar (a → x) con valor por defecto (= 10). Como a es undefined, se usa el default. x = 10.',
      },
      {
        question: '¿Qué valor tiene `nivel` en: `const { level: nivel = 1 } = { level: null }`?',
        options: [
          '1 (null activa el valor por defecto)',
          'null (null no activa el valor por defecto)',
          'undefined',
          '0',
        ],
        correctAnswer: 'null (null no activa el valor por defecto)',
        correctFeedback: 'Correcto. El valor por defecto solo aplica cuando la propiedad es undefined. null es un valor definido, así que nivel = null.',
        incorrectFeedback: 'null ≠ undefined. Los valores por defecto en destructuring solo se activan con undefined. null es un valor definido, así que nivel recibe null.',
      },
      {
        question: 'Dado `const { x: a = 5 } = {}`, ¿qué valor tiene `a`?',
        options: [
          '{}',
          'undefined',
          '5',
          'null',
        ],
        correctAnswer: '5',
        correctFeedback: 'Correcto. La propiedad x no existe en el objeto vacío (undefined), así que se usa el valor por defecto 5. La variable se llama a (renombrada desde x).',
        incorrectFeedback: 'Se combina renombrar (x → a) y valor por defecto (5). Como el objeto está vacío, x es undefined y se activa el default. a = 5.',
      },
    ],
  },

  {
    slug: 'destructuring-parametros-funciones',
    title: 'Destructuring en parámetros de funciones',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 127,
    description:
      'Aprende a usar destructuring directamente en los parámetros de una función.',
    explanation: `## Destructuring en parámetros de funciones

Puedes aplicar destructuring directamente en los parámetros de una función, sin necesidad de hacerlo dentro del cuerpo.

### Sin destructuring en parámetros

\`\`\`js
function mostrarUsuario(usuario) {
  console.log(usuario.nombre)
  console.log(usuario.email)
  console.log(usuario.rol)
}
\`\`\`

### Con destructuring en parámetros

\`\`\`js
function mostrarUsuario({ nombre, email, rol }) {
  console.log(nombre)
  console.log(email)
  console.log(rol)
}

mostrarUsuario({ nombre: 'Ana', email: 'ana@ej.com', rol: 'admin' })
\`\`\`

### Con valores por defecto en parámetros

\`\`\`js
function configurarConexion({ host = 'localhost', puerto = 3000, seguro = false } = {}) {
  console.log(\`Conectando a \${host}:\${puerto} (seguro: \${seguro})\`)
}

configurarConexion({ host: 'api.ejemplo.com', seguro: true })
// "Conectando a api.ejemplo.com:3000 (seguro: true)"

configurarConexion()
// "Conectando a localhost:3000 (seguro: false)"
\`\`\`

El \`= {}\` al final del parámetro permite llamar la función sin argumentos.

### Destructuring de arrays en parámetros

\`\`\`js
function procesarPunto([x, y, z = 0]) {
  console.log(\`Punto: (\${x}, \${y}, \${z})\`)
}

procesarPunto([3, 5])       // "Punto: (3, 5, 0)"
procesarPunto([1, 2, 7])   // "Punto: (1, 2, 7)"
\`\`\`

### En callbacks con arrays de datos

\`\`\`js
let usuarios = [
  { nombre: 'Ana', activo: true },
  { nombre: 'Luis', activo: false },
  { nombre: 'María', activo: true },
]

// ✅ Destructuring en el parámetro del callback
let activos = usuarios.filter(({ activo }) => activo)
let nombres = usuarios.map(({ nombre }) => nombre)

console.log(activos) // [{nombre:'Ana', activo:true}, {nombre:'María', activo:true}]
console.log(nombres) // ["Ana", "Luis", "María"]
\`\`\``,
    codeExample: `// app.js

// Función que muestra tarjeta de producto
function renderizarProducto({ nombre, precio, categoria = 'General', stock = 0, disponible = true }) {
  if (!disponible || stock === 0) {
    return \`[\${categoria}] \${nombre} — Sin stock\`
  }
  return \`[\${categoria}] \${nombre} — $\${precio} (\${stock} disponibles)\`
}

console.log(renderizarProducto({
  nombre: 'Teclado RGB',
  precio: 299,
  categoria: 'Periféricos',
  stock: 8,
  disponible: true,
}))
// "[Periféricos] Teclado RGB — $299 (8 disponibles)"

console.log(renderizarProducto({
  nombre: 'Mouse Gamer',
  precio: 149,
  stock: 0,
}))
// "[General] Mouse Gamer — Sin stock"

// Uso con map — destructuring en callback
let catalogo = [
  { nombre: 'Monitor', precio: 799, categoria: 'Pantallas', stock: 3 },
  { nombre: 'Webcam', precio: 149, categoria: 'Video', stock: 0 },
]

let tarjetas = catalogo.map(renderizarProducto)
console.log(tarjetas)`,
    keyPoints: [
      'Puedes hacer destructuring directamente en los parámetros de una función.',
      'Esto hace el código más explícito sobre qué propiedades usa la función.',
      'Puedes combinar destructuring con valores por defecto en parámetros.',
      'Añadir `= {}` al parámetro permite llamar la función sin argumentos.',
      'Es especialmente útil en callbacks de map, filter y reduce.',
      'Comunica mejor la "interfaz" de la función — qué espera recibir.',
    ],
    exercise: {
      description:
        'Crea una función `calcularEnvio({ peso, destino, prioritario = false, descuento = 0 })` que calcule el costo de envío. El costo base es `peso * 10`. Si el destino es "internacional", se multiplica por 3. Si es prioritario, se agrega un fijo de 50. Luego se aplica el descuento como porcentaje. Pruébala con diferentes configuraciones.',
      hint: 'Recuerda que el parámetro destructurado puede tener valores por defecto. El cálculo sería: `let costo = peso * 10; if (destino === "internacional") costo *= 3; if (prioritario) costo += 50; return costo * (1 - descuento / 100)`.',
    },
    quiz: [
      {
        question: '¿Cuál es la ventaja de usar destructuring en parámetros de función?',
        options: [
          'Que la función puede recibir más parámetros',
          'Que hace el código más rápido al evitar acceder a propiedades',
          'Que el código es más explícito sobre qué propiedades usa la función',
          'Que permite omitir el return en la función',
        ],
        correctAnswer: 'Que el código es más explícito sobre qué propiedades usa la función',
        correctFeedback: 'Correcto. Al ver `function fn({ nombre, precio })`, inmediatamente sabes qué propiedades necesita la función, sin leer el cuerpo.',
        incorrectFeedback: 'No mejora el rendimiento significativamente. La ventaja principal es claridad: al ver la firma de la función, sabes exactamente qué necesita.',
      },
      {
        question: '¿Para qué sirve el `= {}` al final del parámetro destructurado en `function fn({ x = 0 } = {})`?',
        options: [
          'Para establecer x = 0',
          'Para permitir llamar fn() sin argumentos sin que lance error',
          'Para hacer el parámetro obligatorio',
          'Para que el parámetro acepte arrays además de objetos',
        ],
        correctAnswer: 'Para permitir llamar fn() sin argumentos sin que lance error',
        correctFeedback: 'Correcto. Sin `= {}`, llamar fn() intentaría desestructurar undefined, lo cual lanza error. `= {}` proporciona un objeto vacío como valor por defecto del parámetro.',
        incorrectFeedback: 'Sin `= {}`, fn() intentaría hacer `const { x } = undefined` — lo cual lanza TypeError. El `= {}` hace que el parámetro tenga un objeto vacío por defecto cuando no se pasa nada.',
      },
      {
        question: '¿Cuál de estas opciones usa destructuring correctamente en un callback de filter?',
        options: [
          'usuarios.filter(u => u.activo)',
          'usuarios.filter(({ activo }) => activo)',
          'usuarios.filter(activo => activo === true)',
          'usuarios.filter(u.activo)',
        ],
        correctAnswer: 'usuarios.filter(({ activo }) => activo)',
        correctFeedback: 'Correcto. El callback recibe cada elemento (un objeto usuario) y usa destructuring para extraer directamente la propiedad activo.',
        incorrectFeedback: 'La opción `usuarios.filter(u => u.activo)` también funciona, pero la que usa destructuring explícitamente es `({ activo }) => activo`, que extrae la propiedad directamente en el parámetro.',
      },
      {
        question: '¿Qué imprime: `function f([a, b = 5]) { console.log(a, b) }; f([3])`?',
        options: [
          '3 undefined',
          '3 5',
          'ReferenceError',
          'undefined undefined',
        ],
        correctAnswer: '3 5',
        correctFeedback: 'Correcto. Se hace destructuring del array [3]: a=3, y b no tiene valor (undefined), así que se usa el default b=5.',
        incorrectFeedback: 'El destructuring del array [3] asigna a=3. El segundo elemento no existe (undefined), así que b usa su valor por defecto: 5.',
      },
      {
        question: '¿Qué imprime `function f({ a, b = 10 }) { console.log(a + b) }` al llamar `f({ a: 5 })`?',
        options: [
          'NaN',
          '15',
          '5',
          'undefined',
        ],
        correctAnswer: '15',
        correctFeedback: 'Correcto. a recibe 5 del objeto. b no está en el objeto pasado, así que usa el valor por defecto 10. 5 + 10 = 15.',
        incorrectFeedback: 'a=5 viene del objeto. b no existe en el objeto pasado, así que se activa el default b=10. La suma es 5+10=15.',
      },
    ],
  },

  {
    slug: 'spread-arrays',
    title: 'Spread operator en arrays',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 128,
    description:
      'Aprende a copiar, combinar y agregar elementos a arrays usando el spread operator.',
    explanation: `## Spread operator en arrays

El **spread operator** (\`...\`) "expande" un array en sus elementos individuales.

### La analogía del ketchup

Imagina que tienes un frasco de ketchup (el array). El spread operator es como "vaciar" el frasco — saca todos los elementos individualmente para usarlos donde quieras.

### Copiar un array

\`\`\`js
let original = [1, 2, 3]
let copia = [...original]

copia.push(4)
console.log(original) // [1, 2, 3] — no se modificó
console.log(copia)    // [1, 2, 3, 4]
\`\`\`

Sin spread: \`let copia = original\` copia la referencia, no los datos.

### Combinar arrays

\`\`\`js
let frutas = ['manzana', 'banana']
let verduras = ['zanahoria', 'brócoli']

let alimentos = [...frutas, ...verduras]
console.log(alimentos) // ["manzana", "banana", "zanahoria", "brócoli"]
\`\`\`

### Agregar elementos al inicio o al final

\`\`\`js
let tareas = ['Estudiar', 'Practicar']

let tareasActualizadas = ['Revisar notas', ...tareas, 'Hacer ejercicio']
// ["Revisar notas", "Estudiar", "Practicar", "Hacer ejercicio"]
\`\`\`

### Pasar array como argumentos de función

\`\`\`js
let numeros = [3, 1, 4, 1, 5, 9, 2, 6]

let maximo = Math.max(...numeros)
console.log(maximo) // 9

let minimo = Math.min(...numeros)
console.log(minimo) // 1
\`\`\`

Sin spread, \`Math.max([3,1,4])\` devuelve \`NaN\` — espera números, no un array.

### Convertir NodeList o string a array

\`\`\`js
let nodos = document.querySelectorAll('p')
let arrayNodos = [...nodos]

let letras = [..."hola"]
console.log(letras) // ["h", "o", "l", "a"]
\`\`\``,
    codeExample: `// app.js

// Carrito de compras con spread
let carritoActual = [
  { nombre: 'Teclado', precio: 299 },
  { nombre: 'Mouse', precio: 149 },
]

// Agregar producto sin mutar el array original
let nuevaOrden = {
  nombre: 'Monitor',
  precio: 799,
}

let carritoActualizado = [...carritoActual, nuevaOrden]

console.log(carritoActual.length)      // 2 — no se modificó
console.log(carritoActualizado.length) // 3

// Combinar listas de distintas fuentes
let productosElectronicos = ['Laptop', 'Tablet']
let productosPerifericos = ['Teclado', 'Mouse']
let productosAudio = ['Auriculares', 'Micrófono']

let todosLosProductos = [
  ...productosElectronicos,
  ...productosPerifericos,
  ...productosAudio,
]

console.log(todosLosProductos.length) // 6

// Ordenar sin mutar el original
let precios = [499, 129, 899, 299, 59]
let preciosOrdenados = [...precios].sort((a, b) => a - b)

console.log(precios)          // [499, 129, 899, 299, 59] — intacto
console.log(preciosOrdenados) // [59, 129, 299, 499, 899]`,
    keyPoints: [
      'El spread operator (...) expande un array en sus elementos individuales.',
      'Crear una copia con spread ([...arr]) crea un nuevo array — no comparte referencia.',
      'Puedes combinar múltiples arrays con spread de forma limpia.',
      'Es útil para pasar arrays como argumentos a funciones que esperan valores individuales.',
      'Permite agregar elementos al inicio o al final sin mutar el array original.',
      'Spread solo crea copias superficiales (shallow copies) — los objetos dentro siguen siendo referencias.',
    ],
    exercise: {
      description:
        'Tienes estos dos arrays de tareas: `const pendientes = ["Estudiar JS", "Practicar ejercicios"]` y `const completadas = ["Ver videos", "Leer documentación"]`. Crea un nuevo array `todas` que combine ambos con las completadas primero. Luego crea una copia de `pendientes` y agrégale una nueva tarea sin modificar el original. Finalmente, encuentra el número máximo en `[8, 3, 15, 2, 9]` usando spread con Math.max.',
      hint: 'Para combinar: `[...completadas, ...pendientes]`. Para copiar y agregar: `[...pendientes, "Nueva tarea"]`. Para Math.max: `Math.max(...numeros)`.',
    },
    quiz: [
      {
        question: '¿Qué hace el spread operator (...) en un array?',
        options: [
          'Crea una referencia al array original',
          'Expande el array en sus elementos individuales',
          'Ordena los elementos del array',
          'Elimina duplicados del array',
        ],
        correctAnswer: 'Expande el array en sus elementos individuales',
        correctFeedback: 'Correcto. El spread "desempaqueta" el array — [...arr] en un contexto de array crea una copia, y f(...arr) pasa cada elemento como argumento separado.',
        incorrectFeedback: 'El spread operator expande o "desempaqueta" un array — distribuye sus elementos donde los necesitas, ya sea para copiar, combinar o pasar como argumentos.',
      },
      {
        question: '¿Cuál es la diferencia entre `let b = a` y `let b = [...a]` cuando `a` es un array?',
        options: [
          'No hay diferencia — ambas crean copias independientes',
          'b = a copia solo el primer elemento; b = [...a] copia todos',
          'b = a crea una referencia compartida; b = [...a] crea un nuevo array independiente',
          'b = [...a] es más lento y no se recomienda',
        ],
        correctAnswer: 'b = a crea una referencia compartida; b = [...a] crea un nuevo array independiente',
        correctFeedback: 'Exacto. `b = a` hace que b y a apunten al mismo array. `b = [...a]` crea un array nuevo con los mismos valores pero completamente independiente.',
        incorrectFeedback: 'b = a no copia datos — comparte la misma referencia. Si modificas b, también modificas a. Con spread, b es un array nuevo, independiente.',
      },
      {
        question: '¿Cómo pasar los elementos de `let nums = [5, 2, 8]` a Math.max?',
        options: [
          'Math.max(nums)',
          'Math.max([...nums])',
          'Math.max(...nums)',
          'Math.max(nums.spread())',
        ],
        correctAnswer: 'Math.max(...nums)',
        correctFeedback: 'Correcto. `...nums` expande el array en argumentos individuales: Math.max(5, 2, 8). Math.max espera números separados, no un array.',
        incorrectFeedback: 'Math.max necesita números separados, no un array. `Math.max(nums)` devuelve NaN. La forma correcta es `Math.max(...nums)` que expande el array.',
      },
      {
        question: '¿Qué imprime: `let a = [1,2]; let b = [...a, 3]; a.push(9); console.log(b)`?',
        options: [
          '[1, 2, 3, 9]',
          '[1, 2, 3]',
          '[1, 2, 9, 3]',
          'ReferenceError',
        ],
        correctAnswer: '[1, 2, 3]',
        correctFeedback: 'Correcto. b = [...a, 3] crea un nuevo array [1,2,3] en el momento de la creación. Luego a.push(9) modifica a pero b ya es independiente.',
        incorrectFeedback: 'Spread crea una copia independiente en el momento de la creación. b se crea como [1,2,3]. El push posterior en a no afecta a b.',
      },
      {
        question: 'Si haces `let b = [...a]` y luego `b.push(4)`, ¿qué le pasa a `a`?',
        options: [
          'a también recibe el 4 porque comparten referencia',
          'a no cambia porque [...a] crea un nuevo array independiente',
          'JavaScript lanza un error al modificar un array copiado con spread',
          'b queda como undefined después del push',
        ],
        correctAnswer: 'a no cambia porque [...a] crea un nuevo array independiente',
        correctFeedback: 'Correcto. Spread crea un nuevo array con los mismos valores. Modificar b no afecta a a porque son arrays diferentes en memoria.',
        incorrectFeedback: 'Spread no comparte referencia — crea un array nuevo. b es completamente independiente de a. Los cambios en b no afectan a a.',
      },
    ],
  },

  {
    slug: 'spread-objetos',
    title: 'Spread operator en objetos',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 129,
    description:
      'Aprende a copiar y combinar objetos usando el spread operator.',
    explanation: `## Spread operator en objetos

El spread también funciona con objetos: "expande" las propiedades de un objeto en otro.

### Copiar un objeto

\`\`\`js
let usuario = { nombre: 'Ana', edad: 28 }
let copia = { ...usuario }

copia.nombre = 'Luis'
console.log(usuario.nombre) // "Ana" — no se afectó
console.log(copia.nombre)   // "Luis"
\`\`\`

### Combinar objetos

\`\`\`js
let datosBasicos = { nombre: 'Ana', edad: 28 }
let datosExtra = { rol: 'admin', activo: true }

let perfilCompleto = { ...datosBasicos, ...datosExtra }
// { nombre: 'Ana', edad: 28, rol: 'admin', activo: true }
\`\`\`

### Sobreescribir propiedades

Las propiedades del lado derecho sobreescriben las del izquierdo:

\`\`\`js
let configDefecto = { tema: 'claro', idioma: 'es', fontSize: 14 }
let configUsuario = { tema: 'oscuro', fontSize: 18 }

let configFinal = { ...configDefecto, ...configUsuario }
// { tema: 'oscuro', idioma: 'es', fontSize: 18 }
\`\`\`

### Actualizar una propiedad sin mutar

\`\`\`js
let producto = { id: 1, nombre: 'Laptop', precio: 1200, stock: 5 }

// Actualizar solo el precio
let productoActualizado = { ...producto, precio: 999 }
console.log(producto.precio)          // 1200 — intacto
console.log(productoActualizado.precio) // 999
\`\`\`

### Agregar nuevas propiedades

\`\`\`js
let base = { nombre: 'Ana', email: 'ana@ej.com' }
let conFecha = { ...base, creadoEn: new Date().toISOString() }
\`\`\``,
    codeExample: `// app.js

// Configuración con valores por defecto
const CONFIG_DEFECTO = {
  tema: 'claro',
  idioma: 'es',
  notificaciones: true,
  fontSize: 14,
  sidebar: true,
}

function aplicarConfiguracion(configPersonalizada) {
  // Los valores del usuario sobreescriben los de defecto
  return { ...CONFIG_DEFECTO, ...configPersonalizada }
}

let configAna = aplicarConfiguracion({ tema: 'oscuro', fontSize: 16 })
console.log(configAna)
// { tema: 'oscuro', idioma: 'es', notificaciones: true, fontSize: 16, sidebar: true }

let configLuis = aplicarConfiguracion({ idioma: 'en', notificaciones: false })
console.log(configLuis)
// { tema: 'claro', idioma: 'en', notificaciones: false, fontSize: 14, sidebar: true }

// Actualizar producto en un array sin mutar
let inventario = [
  { id: 1, nombre: 'Libro JS', precio: 150, stock: 10 },
  { id: 2, nombre: 'Curso Online', precio: 299, stock: 5 },
]

// Actualizar stock del producto con id 1
let inventarioActualizado = inventario.map((p) =>
  p.id === 1 ? { ...p, stock: p.stock - 1 } : p
)

console.log(inventario[0].stock)          // 10 — intacto
console.log(inventarioActualizado[0].stock) // 9`,
    keyPoints: [
      'El spread en objetos copia todas las propiedades enumerables en un nuevo objeto.',
      'Las propiedades que aparecen más a la derecha sobreescriben las de la izquierda.',
      'Es ideal para combinar un objeto de configuración por defecto con uno personalizado.',
      'Permite actualizar propiedades específicas sin mutar el objeto original.',
      'Solo crea copias superficiales — los objetos anidados siguen siendo referencias compartidas.',
      'Es muy usado en patrones de estado inmutable (como en React).',
    ],
    exercise: {
      description:
        'Crea un objeto `productoBase = { categoria: "Digital", moneda: "MXN", disponible: true, descuento: 0 }`. Luego crea dos productos específicos usando spread para combinar con el base: uno para un libro y otro para un curso, ambos con sus propios valores de nombre, precio y cualquier propiedad que sobreescriba el base. Después, "actualiza" el precio del libro usando spread sin mutar el original.',
      hint: 'Para crear: `const libro = { ...productoBase, nombre: "Libro JS", precio: 150 }`. Para actualizar: `const libroConDescuento = { ...libro, descuento: 10, precio: libro.precio * 0.9 }`.',
    },
    quiz: [
      {
        question: '¿Qué ocurre cuando dos objetos combinados con spread tienen la misma propiedad?',
        options: [
          'Se lanza un error de propiedad duplicada',
          'Se mantiene el valor del objeto de la izquierda',
          'Se mantiene el valor del objeto de la derecha (sobreescribe)',
          'Se crea un array con ambos valores',
        ],
        correctAnswer: 'Se mantiene el valor del objeto de la derecha (sobreescribe)',
        correctFeedback: 'Correcto. En `{ ...a, ...b }`, si a y b tienen la misma propiedad, el valor de b gana (está más a la derecha).',
        incorrectFeedback: 'El spread de objetos funciona de izquierda a derecha. Las propiedades del objeto más a la derecha sobreescriben las anteriores.',
      },
      {
        question: '¿Cuál es la forma correcta de actualizar solo la propiedad `precio` de un objeto sin mutarlo?',
        options: [
          'producto.precio = nuevoPrecio',
          'Object.assign(producto, { precio: nuevoPrecio })',
          'const actualizado = { ...producto, precio: nuevoPrecio }',
          'producto = { precio: nuevoPrecio }',
        ],
        correctAnswer: 'const actualizado = { ...producto, precio: nuevoPrecio }',
        correctFeedback: 'Correcto. Spread crea un nuevo objeto con todas las propiedades del original más el precio actualizado. El objeto original no se modifica.',
        incorrectFeedback: 'Las otras opciones mutan el objeto original. Con spread, creas un nuevo objeto que tiene todas las propiedades del original más el precio nuevo, sin tocar el original.',
      },
      {
        question: '¿Qué imprime: `const a = { x: 1 }; const b = { ...a }; b.x = 99; console.log(a.x)`?',
        options: [
          '99 (se comparte la referencia)',
          '1 (son objetos independientes)',
          'undefined',
          'null',
        ],
        correctAnswer: '1 (son objetos independientes)',
        correctFeedback: 'Correcto. `{ ...a }` crea un nuevo objeto. Modificar b.x no afecta a a.x porque son objetos separados.',
        incorrectFeedback: 'Spread crea un nuevo objeto, no una referencia. b y a son objetos diferentes — modificar b.x no toca a.x.',
      },
      {
        question: '¿Qué problema tiene el spread con objetos anidados?',
        options: [
          'No funciona con objetos que tienen más de 5 propiedades',
          'Solo copia propiedades string, no numéricas',
          'Los objetos anidados se siguen compartiendo por referencia (copia superficial)',
          'No se puede usar con const',
        ],
        correctAnswer: 'Los objetos anidados se siguen compartiendo por referencia (copia superficial)',
        correctFeedback: 'Correcto. Spread solo copia un nivel. Si el objeto tiene objetos internos, esos siguen siendo la misma referencia — modificarlos afecta a la "copia".',
        incorrectFeedback: 'Spread crea una copia superficial (shallow copy). Las propiedades primitivas se copian por valor, pero los objetos internos todavía se comparten por referencia.',
      },
      {
        question: '¿Cuál es el resultado de `const c = { ...{a:1}, ...{a:2, b:3} }`?',
        options: [
          '{ a: 1, b: 3 }',
          '{ a: 2, b: 3 }',
          '{ a: [1, 2], b: 3 }',
          'Lanza error por propiedad duplicada',
        ],
        correctAnswer: '{ a: 2, b: 3 }',
        correctFeedback: 'Correcto. El spread fusiona objetos de izquierda a derecha. El segundo a:2 sobreescribe al primer a:1. Resultado: { a:2, b:3 }.',
        incorrectFeedback: 'El spread de objetos aplica propiedades en orden. Si hay duplicadas, gana la de la derecha. a:2 sobreescribe a:1, y se agrega b:3.',
      },
    ],
  },

  {
    slug: 'rest-parameters',
    title: 'Rest parameters',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 130,
    description:
      'Aprende a recibir una cantidad variable de argumentos usando rest parameters.',
    explanation: `## Rest parameters

El **rest parameter** (\`...nombre\`) recolecta múltiples argumentos de una función en un array. Es el opuesto del spread: en lugar de expandir, comprime.

### La analogía de la bolsa

Si spread es "vaciar un frasco", rest es "meter todo lo que sobra en una bolsa".

### Sintaxis básica

\`\`\`js
function sumarTodos(...numeros) {
  return numeros.reduce((total, n) => total + n, 0)
}

console.log(sumarTodos(1, 2, 3))       // 6
console.log(sumarTodos(10, 20, 30, 40)) // 100
console.log(sumarTodos(5))              // 5
\`\`\`

\`...numeros\` captura todos los argumentos en un array llamado \`numeros\`.

### Rest con parámetros fijos

\`\`\`js
function registrar(tipo, ...mensajes) {
  mensajes.forEach((msg) => {
    console.log('[' + tipo + '] ' + msg)
  })
}

registrar('INFO', 'Iniciando app', 'Cargando módulos', 'Listo')
// [INFO] Iniciando app
// [INFO] Cargando módulos
// [INFO] Listo
\`\`\`

El rest parameter debe ser siempre el **último** parámetro.

### Rest vs arguments

Antes de ES6, se usaba el objeto \`arguments\`, que tiene problemas:
\`\`\`js
// ❌ Forma antigua — arguments no es un array real
function antigua() {
  console.log(arguments)        // no tiene .map, .filter, etc.
}

// ✅ Con rest — es un array verdadero
function moderna(...args) {
  let dobles = args.map((n) => n * 2)  // .map funciona perfectamente
  return dobles
}
\`\`\`

### Rest en destructuring

\`\`\`js
let [primero, segundo, ...resto] = [10, 20, 30, 40, 50]
console.log(primero)  // 10
console.log(segundo)  // 20
console.log(resto)    // [30, 40, 50]

let { nombre, ...otrasPropiedades } = { nombre: 'Ana', edad: 28, rol: 'admin' }
console.log(nombre)             // "Ana"
console.log(otrasPropiedades)   // { edad: 28, rol: 'admin' }
\`\`\``,
    codeExample: `// utils.js

// Función de log con nivel y mensajes variables
function log(nivel, ...mensajes) {
  const prefijo = {
    info: '[INFO]',
    warn: '[WARN]',
    error: '[ERROR]',
  }[nivel] || '[LOG]'

  mensajes.forEach((msg) => {
    console.log(prefijo + ' ' + msg)
  })
}

log('info', 'App iniciada', 'Módulos cargados')
// [INFO] App iniciada
// [INFO] Módulos cargados

log('error', 'Conexión fallida')
// [ERROR] Conexión fallida

// Función que acepta varios productos para agregar al carrito
function agregarAlCarrito(carrito, ...productosNuevos) {
  return [...carrito, ...productosNuevos]
}

let carrito = [{ nombre: 'Libro', precio: 150 }]
let carritoActualizado = agregarAlCarrito(
  carrito,
  { nombre: 'Curso', precio: 299 },
  { nombre: 'Teclado', precio: 199 }
)

console.log(carritoActualizado.length) // 3`,
    keyPoints: [
      'El rest parameter (...nombre) recolecta múltiples argumentos en un array.',
      'El rest parameter siempre debe ir último en la lista de parámetros.',
      'A diferencia de arguments, el rest parameter es un array real con todos los métodos de Array.',
      'En destructuring, rest captura los elementos o propiedades que no fueron desestructurados.',
      'Es ideal para funciones que deben aceptar una cantidad variable de argumentos.',
      'Rest (recolecta) y spread (expande) son conceptos opuestos que se complementan.',
    ],
    exercise: {
      description:
        'Crea una función `calcularEstadisticas(etiqueta, ...numeros)` que reciba una etiqueta descriptiva y cualquier cantidad de números. La función debe mostrar la etiqueta y calcular: total de números recibidos, suma, promedio, mínimo y máximo. Pruébala con al menos dos llamadas con diferente cantidad de argumentos.',
      hint: 'Usa `numeros.length` para el total, `reduce` para suma, `Math.min(...numeros)` y `Math.max(...numeros)` para min/max. El spread en Math.min/max expande el array rest en argumentos individuales.',
    },
    quiz: [
      {
        question: '¿Qué tipo de valor es `args` en `function f(...args) {}` cuando llamas `f(1, 2, 3)`?',
        options: [
          'Un objeto arguments',
          'Un array [1, 2, 3]',
          'Un Set {1, 2, 3}',
          'Un Map',
        ],
        correctAnswer: 'Un array [1, 2, 3]',
        correctFeedback: 'Correcto. El rest parameter crea un array real con todos los argumentos recibidos. Puedes usar map, filter, reduce, etc.',
        incorrectFeedback: 'El rest parameter crea un array real (no el objeto arguments de ES5). Esto significa que tienes acceso a todos los métodos de Array: map, filter, reduce, etc.',
      },
      {
        question: '¿Cuál es la regla sobre la posición del rest parameter?',
        options: [
          'Puede ir en cualquier posición',
          'Debe ir primero',
          'Debe ir último',
          'No puede combinarse con parámetros normales',
        ],
        correctAnswer: 'Debe ir último',
        correctFeedback: 'Correcto. El rest parameter captura "lo que sobra" — solo tiene sentido al final. `function f(a, b, ...resto)` es válido; `function f(...resto, a)` no lo es.',
        incorrectFeedback: 'El rest parameter debe ser siempre el último parámetro. Poner parámetros después de ... generará un SyntaxError.',
      },
      {
        question: '¿Qué diferencia hay entre el rest parameter y el objeto `arguments`?',
        options: [
          'No hay diferencia, son equivalentes',
          'Rest parameter crea un array real con métodos de Array; arguments es un objeto array-like sin esos métodos',
          'Arguments captura más argumentos que rest',
          'Rest solo funciona en arrow functions; arguments en function declarations',
        ],
        correctAnswer: 'Rest parameter crea un array real con métodos de Array; arguments es un objeto array-like sin esos métodos',
        correctFeedback: 'Correcto. arguments es un objeto especial que se parece a un array pero no tiene map, filter, etc. El rest parameter es un array real.',
        incorrectFeedback: 'arguments existe en ES5 pero es un objeto array-like — no un array real. No puedes llamar .map() directamente. El rest parameter ES6 sí crea un array verdadero.',
      },
      {
        question: '¿Qué imprime: `const [a, ...b] = [1, 2, 3]; console.log(b)`?',
        options: [
          '2',
          '[2, 3]',
          '[1, 2, 3]',
          'undefined',
        ],
        correctAnswer: '[2, 3]',
        correctFeedback: 'Correcto. a captura el primer elemento (1), y ...b captura el resto en un nuevo array [2, 3].',
        incorrectFeedback: 'En destructuring, ...b captura todos los elementos que quedan después de los ya desestructurados. a=1, b=[2,3].',
      },
      {
        question: '¿Qué imprime `function f(x, ...rest) { console.log(rest.length) }` al llamar `f(1, 2, 3, 4)`?',
        options: [
          '4',
          '3',
          '1',
          '0',
        ],
        correctAnswer: '3',
        correctFeedback: 'Correcto. x captura el primer argumento (1). ...rest captura el resto: [2, 3, 4]. Su length es 3.',
        incorrectFeedback: 'x toma el primer argumento (1). ...rest captura todos los demás como array: [2, 3, 4]. rest.length = 3.',
      },
    ],
  },

  {
    slug: 'copias-superficiales-errores',
    title: 'Copias superficiales y errores comunes',
    module: 'Destructuring y spread/rest',
    moduleNumber: 17,
    order: 131,
    description:
      'Aprende por qué spread crea copias superficiales y qué problemas pueden aparecer con objetos o arrays anidados.',
    explanation: `## Copias superficiales y errores comunes

### ¿Qué es una copia superficial (shallow copy)?

Spread solo copia **un nivel** de profundidad. Los valores primitivos (strings, números, booleanos) se copian correctamente. Los objetos y arrays anidados se copian por **referencia**.

### El problema

\`\`\`js
let original = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Madrid',
    pais: 'España',
  }
}

let copia = { ...original }

copia.nombre = 'Luis'           // ✅ OK — primitivo, no afecta original
copia.direccion.ciudad = 'Barcelona' // ❌ Modifica TAMBIÉN el original

console.log(original.nombre)          // "Ana" — no se afectó
console.log(original.direccion.ciudad) // "Barcelona" — ¡sí se afectó!
\`\`\`

Esto pasa porque \`copia.direccion\` y \`original.direccion\` apuntan al **mismo objeto**.

### Copia profunda: JSON.parse + JSON.stringify

\`\`\`js
let original = { nombre: 'Ana', direccion: { ciudad: 'Madrid' } }

let copiaProfunda = JSON.parse(JSON.stringify(original))

copiaProfunda.direccion.ciudad = 'Barcelona'
console.log(original.direccion.ciudad) // "Madrid" — no se afectó
\`\`\`

**Limitaciones:** no funciona con funciones, \`undefined\`, \`Date\`, \`Map\`, \`Set\`.

### Copia profunda: structuredClone (moderno)

\`\`\`js
let copiaProfunda = structuredClone(original)
\`\`\`

Funciona con más tipos que JSON, pero tampoco copia funciones.

### Errores comunes con spread

**1. Asumir que spread copia todo el árbol:**
\`\`\`js
// ❌ Error: pensamos que tareas es una copia profunda
let proyecto = { nombre: 'App', tareas: ['Login', 'Dashboard'] }
let copia = { ...proyecto }
copia.tareas.push('Perfil')
console.log(proyecto.tareas) // ["Login", "Dashboard", "Perfil"] — ¡modificado!
\`\`\`

**2. Spread de null o undefined:**
\`\`\`js
let extra = null
let resultado = { ...extra } // ❌ lanza error — null no es spread-able

// ✅ Protégete
let resultado2 = { ...(extra || {}) }
\`\`\`

**3. Sobreescritura accidental:**
\`\`\`js
let base = { id: 1, activo: true }
let override = { activo: false, nombre: 'Test' }

let resultado = { ...override, ...base }  // ¡base sobreescribe override!
// { id: 1, activo: true, nombre: 'Test' }
// Querías que override ganara, pero pusiste base después
\`\`\``,
    codeExample: `// app.js

// ⚠️ Demostración del problema de copia superficial
let pedidoOriginal = {
  id: 'PED-001',
  cliente: 'Ana García',
  items: [
    { nombre: 'Libro JS', cantidad: 1 },
  ],
  direccionEntrega: {
    calle: 'Calle Mayor 10',
    ciudad: 'Madrid',
  },
}

let pedidoCopia = { ...pedidoOriginal }

// ✅ Primitivos: seguros con spread
pedidoCopia.id = 'PED-002'
pedidoCopia.cliente = 'Luis López'
console.log(pedidoOriginal.id)      // "PED-001" — intacto
console.log(pedidoOriginal.cliente) // "Ana García" — intacto

// ❌ Objetos anidados: compartidos
pedidoCopia.direccionEntrega.ciudad = 'Barcelona'
console.log(pedidoOriginal.direccionEntrega.ciudad) // "Barcelona" — ¡modificado!

// ✅ Para arrays anidados, crea copia explícita
let pedidoSeguro = {
  ...pedidoOriginal,
  items: [...pedidoOriginal.items],
  direccionEntrega: { ...pedidoOriginal.direccionEntrega },
}

pedidoSeguro.direccionEntrega.ciudad = 'Valencia'
console.log(pedidoOriginal.direccionEntrega.ciudad) // "Barcelona" — no se afectó`,
    keyPoints: [
      'Spread crea copias superficiales (shallow copies) — solo copia un nivel de profundidad.',
      'Primitivos (strings, números, booleanos) se copian correctamente con spread.',
      'Objetos y arrays anidados se comparten por referencia — modificarlos afecta al original.',
      'Para copias profundas simples: JSON.parse(JSON.stringify(obj)) (no funciona con funciones ni undefined).',
      'structuredClone() es la forma moderna y más robusta de hacer copias profundas.',
      'Para niveles específicos, puedes usar spread en cada nivel que necesites copiar.',
    ],
    exercise: {
      description:
        'Dado este objeto: `const perfil = { nombre: "Ana", config: { tema: "oscuro", idioma: "es" }, tags: ["js", "css"] }`, crea una copia segura que permita modificar `config.tema` y agregar elementos a `tags` sin afectar el original. Luego verifica que el original no cambió.',
      hint: 'Necesitas hacer spread en cada nivel: `const copia = { ...perfil, config: { ...perfil.config }, tags: [...perfil.tags] }`. Luego: `copia.config.tema = "claro"` y `copia.tags.push("html")`. Verifica con console.log(perfil.config.tema) y console.log(perfil.tags).',
    },
    quiz: [
      {
        question: '¿Qué es una copia superficial (shallow copy)?',
        options: [
          'Una copia que solo incluye la mitad de las propiedades',
          'Una copia donde los primitivos se copian por valor pero los objetos anidados se comparten por referencia',
          'Una copia que se elimina después de usarse',
          'Una copia que no incluye métodos, solo datos',
        ],
        correctAnswer: 'Una copia donde los primitivos se copian por valor pero los objetos anidados se comparten por referencia',
        correctFeedback: 'Exacto. Shallow copy significa que solo el primer nivel se copia "de verdad". Los objetos anidados son compartidos — modificarlos afecta al original.',
        incorrectFeedback: 'Shallow (superficial) se refiere a la profundidad de la copia. El primer nivel es independiente, pero los objetos internos siguen siendo la misma referencia compartida.',
      },
      {
        question: '¿Qué pasa al ejecutar `const b = {...a}; b.config.tema = "oscuro"` si a.config es un objeto?',
        options: [
          'Solo cambia b.config.tema, a no se modifica',
          'a.config.tema también cambia porque b.config y a.config son el mismo objeto',
          'JavaScript lanza un error porque config es de solo lectura',
          'b.config pasa a ser undefined',
        ],
        correctAnswer: 'a.config.tema también cambia porque b.config y a.config son el mismo objeto',
        correctFeedback: 'Correcto. Spread copia la referencia de `config` — b.config y a.config apuntan al mismo objeto. Modificar uno modifica el otro.',
        incorrectFeedback: 'Spread solo copia un nivel. b.config no es un nuevo objeto — es la misma referencia que a.config. Modificar b.config.tema también cambia a.config.tema.',
      },
      {
        question: '¿Cuál de estas técnicas crea una copia profunda de un objeto simple (sin funciones)?',
        options: [
          '{ ...obj }',
          'Object.assign({}, obj)',
          'JSON.parse(JSON.stringify(obj))',
          'obj.slice()',
        ],
        correctAnswer: 'JSON.parse(JSON.stringify(obj))',
        correctFeedback: 'Correcto. JSON.stringify serializa todo el objeto a texto y JSON.parse lo reconstruye como un nuevo objeto completamente independiente.',
        incorrectFeedback: 'Spread y Object.assign hacen shallow copy. obj.slice() es para arrays. JSON.parse(JSON.stringify(obj)) es la forma clásica de deep copy (con limitaciones para funciones y undefined).',
      },
      {
        question: '¿Cuál es una limitación de JSON.parse(JSON.stringify()) para copias profundas?',
        options: [
          'Solo funciona con arrays, no con objetos',
          'No preserva funciones, undefined, Date, Map, ni Set',
          'Es más lento que spread en todos los casos',
          'No funciona en navegadores modernos',
        ],
        correctAnswer: 'No preserva funciones, undefined, Date, Map, ni Set',
        correctFeedback: 'Correcto. JSON solo puede representar tipos básicos: strings, números, booleanos, arrays y objetos planos. Funciones, undefined, Date, Map y Set se pierden o se convierten.',
        incorrectFeedback: 'JSON.stringify solo puede serializar tipos primitivos y objetos/arrays planos. Funciones se omiten, undefined se convierte en null, Date se convierte en string, Map y Set se pierden.',
      },
      {
        question: '¿Qué función moderna de JavaScript permite hacer una copia profunda de objetos?',
        options: [
          'Object.copy()',
          'structuredClone()',
          'JSON.deepCopy()',
          'Array.from()',
        ],
        correctAnswer: 'structuredClone()',
        correctFeedback: 'Correcto. structuredClone() es la API moderna para copias profundas. Funciona con más tipos que JSON.parse(JSON.stringify()), aunque tampoco copia funciones.',
        incorrectFeedback: 'Object.copy y JSON.deepCopy no existen. Array.from es para arrays. structuredClone() es la API estándar moderna para copias profundas en JavaScript.',
      },
    ],
  },
]

export const jsModule17: Module = {
  number: 17,
  title: 'Destructuring y spread/rest',
  level: 'nivel4',
  lessons: lessonsJsModule17,
}
