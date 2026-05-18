import type { Lesson, Module } from '@/types'

export const lessonsJsModule18: Lesson[] = [
  {
    slug: 'que-son-modulos-javascript',
    title: '¿Qué son los módulos?',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 132,
    description:
      'Aprende qué son los módulos y por qué ayudan a organizar proyectos JavaScript en archivos más pequeños.',
    explanation: `## ¿Qué son los módulos en JavaScript?

Los **módulos** son archivos JavaScript que pueden exportar código (variables, funciones, clases) e importarlo en otros archivos.

### ¿Por qué necesitamos módulos?

Sin módulos, todo el código de una aplicación estaría en un solo archivo gigante:
\`\`\`
app.js — 5000 líneas, funciones mezcladas, difícil de mantener
\`\`\`

Con módulos:
\`\`\`
app.js         — punto de entrada, 50 líneas
utils.js       — funciones de utilidad
data.js        — datos y configuración
storage.js     — funciones de localStorage
carrito.js     — lógica del carrito de compras
\`\`\`

### La analogía del libro

Un libro sin capítulos sería un bloque de texto de 400 páginas. Los capítulos dividen el contenido en partes organizadas. Los módulos hacen lo mismo con el código.

### ¿Cómo funcionan?

Cada módulo:
1. Tiene su propio **scope** — las variables no "escapan" al script global.
2. Decide qué **exportar** (lo que otros pueden usar).
3. Puede **importar** lo que otros módulos exportan.

\`\`\`js
// math.js — exporta funciones
export function sumar(a, b) { return a + b }
export function restar(a, b) { return a - b }

// app.js — importa lo que necesita
import { sumar, restar } from './math.js'
console.log(sumar(3, 5)) // 8
\`\`\`

### Módulos en el navegador

Para usar módulos en HTML necesitas \`type="module"\`:
\`\`\`html
<script type="module" src="app.js"></script>
\`\`\`

### Módulos en proyectos con herramientas (Vite, Webpack)

En proyectos modernos con Vite o similar, los módulos funcionan sin configuración extra — la herramienta se encarga de todo.

### Beneficios de usar módulos

- **Organización**: cada archivo tiene una responsabilidad clara.
- **Reutilización**: una función escrita una vez puede importarse en muchos lugares.
- **Mantenimiento**: cambiar algo en \`utils.js\` afecta solo a ese archivo.
- **Scope aislado**: no hay contaminación del scope global.`,
    codeExample: `// Estructura de un proyecto con módulos

// data.js — datos y configuración
export const PRODUCTOS = [
  { id: 1, nombre: 'Libro JS', precio: 150 },
  { id: 2, nombre: 'Curso Online', precio: 299 },
]

export const CONFIG = {
  moneda: 'MXN',
  descuentoPremium: 0.20,
}

// utils.js — funciones de utilidad
export function formatearPrecio(precio, moneda) {
  return moneda + ' ' + precio.toFixed(2)
}

export function calcularTotal(items) {
  return items.reduce((suma, item) => suma + item.precio, 0)
}

// app.js — orquesta todo
import { PRODUCTOS, CONFIG } from './data.js'
import { formatearPrecio, calcularTotal } from './utils.js'

let carrito = [PRODUCTOS[0], PRODUCTOS[1]]
let total = calcularTotal(carrito)
console.log(formatearPrecio(total, CONFIG.moneda)) // "MXN 449.00"`,
    keyPoints: [
      'Los módulos dividen el código en archivos con responsabilidades claras.',
      'Cada módulo tiene su propio scope — no contamina el scope global.',
      'Un módulo decide qué exportar y qué mantener privado.',
      'Otros módulos importan solo lo que necesitan.',
      'En el navegador se necesita type="module" en el script tag.',
      'Los módulos mejoran la organización, reutilización y mantenibilidad del código.',
    ],
    exercise: {
      description:
        'Diseña (en comentarios o pseudocódigo) cómo dividirías esta aplicación en módulos: una tienda online con funciones para filtrar productos, calcular precios, guardar en localStorage, y mostrar notificaciones. Decide qué archivos crearías, cómo se llamarían, y qué exportaría cada uno.',
      hint: 'Piensa en responsabilidades: ¿qué funciones van juntas? filters.js para filtrar productos, prices.js para cálculos de precio, storage.js para localStorage, notifications.js para mensajes al usuario. Cada módulo debería poder funcionar por sí solo.',
    },
    quiz: [
      {
        question: '¿Cuál es el principal beneficio de organizar código en módulos?',
        options: [
          'Que el código se ejecuta más rápido',
          'Que cada archivo tiene una responsabilidad clara y el código es más fácil de mantener',
          'Que elimina la necesidad de funciones',
          'Que el código solo puede ejecutarse en navegadores modernos',
        ],
        correctAnswer: 'Que cada archivo tiene una responsabilidad clara y el código es más fácil de mantener',
        correctFeedback: 'Correcto. Los módulos mejoran la organización y mantenibilidad — cada archivo tiene una función específica y los cambios están aislados.',
        incorrectFeedback: 'No mejoran significativamente el rendimiento. El beneficio principal es organizacional: código dividido por responsabilidad, más fácil de leer, mantener y reutilizar.',
      },
      {
        question: '¿Qué atributo necesita un script tag para usar módulos en el navegador?',
        options: [
          'type="javascript"',
          'module="true"',
          'type="module"',
          'src="module"',
        ],
        correctAnswer: 'type="module"',
        correctFeedback: 'Correcto. Sin `type="module"`, el navegador trata el script como un script normal y los imports/exports no funcionan.',
        incorrectFeedback: 'El atributo correcto es `type="module"`. Sin él, el navegador no reconoce la sintaxis import/export y lanza errores.',
      },
      {
        question: '¿Qué característica del scope tienen los módulos JavaScript?',
        options: [
          'Comparten el scope global con todos los demás scripts',
          'Cada módulo tiene su propio scope — las variables no se filtran al scope global',
          'No pueden acceder a variables de otros módulos',
          'Sus variables son accesibles directamente desde la consola del navegador',
        ],
        correctAnswer: 'Cada módulo tiene su propio scope — las variables no se filtran al scope global',
        correctFeedback: 'Exacto. Los módulos tienen scope de módulo — a diferencia de los scripts tradicionales, las variables declaradas dentro no se convierten en globales.',
        incorrectFeedback: 'Una de las ventajas de los módulos es el scope aislado. Las variables dentro de un módulo no "contaminan" el scope global — solo son accesibles si se exportan explícitamente.',
      },
      {
        question: '¿Qué sucede con las variables declaradas en un módulo que NO se exportan?',
        options: [
          'Son accesibles globalmente como cualquier otra variable',
          'Quedan privadas al módulo y no pueden usarse desde fuera',
          'Se eliminan automáticamente al cargar el módulo',
          'Generan un error porque deben exportarse siempre',
        ],
        correctAnswer: 'Quedan privadas al módulo y no pueden usarse desde fuera',
        correctFeedback: 'Correcto. El módulo controla qué expone. Lo que no se exporta permanece privado — esta es una de las grandes ventajas de los módulos.',
        incorrectFeedback: 'En módulos, solo es accesible desde fuera lo que se exporta explícitamente. Lo que no se exporta es privado al módulo, similar a los closures.',
      },
      {
        question: '¿Cuál es una ventaja clave del scope aislado de los módulos ES6?',
        options: [
          'Permite que las variables sean accesibles globalmente en todo el proyecto',
          'Las variables de un módulo no contaminan el scope global — cada módulo tiene el suyo',
          'Los módulos ejecutan el código más rápido que los scripts normales',
          'Elimina la necesidad de usar funciones',
        ],
        correctAnswer: 'Las variables de un módulo no contaminan el scope global — cada módulo tiene el suyo',
        correctFeedback: 'Exacto. Una ventaja fundamental de los módulos ES6 es el scope aislado: las variables declaradas en un módulo no se escapan al scope global automáticamente.',
        incorrectFeedback: 'Los módulos no hacen el código más rápido ni eliminan funciones. Su ventaja principal es el scope aislado: las variables de cada módulo no contaminan el scope global.',
      },
    ],
  },

  {
    slug: 'export-nombrado',
    title: 'Export nombrado',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 133,
    description:
      'Aprende a exportar funciones, variables y objetos usando named exports.',
    explanation: `## Export nombrado (named export)

El **export nombrado** permite exportar múltiples elementos de un módulo, cada uno con su nombre.

### Exportar al declarar

\`\`\`js
// utils.js

export const PI = 3.14159

export function sumar(a, b) {
  return a + b
}

export function multiplicar(a, b) {
  return a * b
}
\`\`\`

### Exportar al final del archivo

\`\`\`js
// utils.js

const PI = 3.14159

function sumar(a, b) {
  return a + b
}

function multiplicar(a, b) {
  return a * b
}

// Exportar todo junto al final
export { PI, sumar, multiplicar }
\`\`\`

Ambas formas son equivalentes. Exportar al final tiene la ventaja de ver de un vistazo qué exporta el módulo.

### Exportar con alias

\`\`\`js
// validators.js

function validarEmail(email) {
  return email.includes('@')
}

// Exportar con un nombre diferente
export { validarEmail as checkEmail }
\`\`\`

### Exportar constantes de configuración

\`\`\`js
// config.js
export const API_URL = 'https://api.ejemplo.com'
export const MAX_INTENTOS = 3
export const MONEDA = 'MXN'
\`\`\`

### Exportar clases

\`\`\`js
// models.js
export class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }

  conDescuento(pct) {
    return this.precio * (1 - pct / 100)
  }
}
\`\`\`

### Cuándo usar named exports

Usa named exports cuando el módulo exporta **múltiples cosas relacionadas**. Por ejemplo: un módulo de utilidades matemáticas, un módulo de validadores, un módulo de constantes.`,
    codeExample: `// storage.js — módulo con named exports

const CLAVE_PREFIX = 'ronaldoscript_'

function guardar(clave, valor) {
  try {
    localStorage.setItem(CLAVE_PREFIX + clave, JSON.stringify(valor))
    return true
  } catch {
    console.error('Error al guardar en localStorage')
    return false
  }
}

function leer(clave) {
  try {
    const dato = localStorage.getItem(CLAVE_PREFIX + clave)
    return dato ? JSON.parse(dato) : null
  } catch {
    return null
  }
}

function eliminar(clave) {
  localStorage.removeItem(CLAVE_PREFIX + clave)
}

function existe(clave) {
  return localStorage.getItem(CLAVE_PREFIX + clave) !== null
}

// Exportar todo junto al final — fácil de ver qué expone el módulo
export { guardar, leer, eliminar, existe }

// CLAVE_PREFIX queda privada — no se exporta`,
    keyPoints: [
      'Los named exports permiten exportar múltiples elementos con sus nombres.',
      'Puedes exportar al declarar (export const) o al final del archivo (export { a, b }).',
      'Puedes exportar con un alias usando `export { nombre as otroNombre }`.',
      'Lo que no se exporta permanece privado al módulo.',
      'Los named exports son ideales para módulos con múltiples funciones o constantes.',
      'Exportar al final del archivo mejora la legibilidad al ver qué expone el módulo.',
    ],
    exercise: {
      description:
        'Crea un módulo `validators.js` que exporte: una función `validarEmail(email)` que verifique que tiene @ y un punto, una función `validarContrasena(pass)` que verifique que tiene al menos 8 caracteres, una función `validarNombre(nombre)` que verifique que no está vacío y tiene al menos 2 caracteres, y una constante `MIN_PASSWORD_LENGTH = 8`. Exporta todo al final del archivo.',
      hint: 'Declara las funciones y la constante sin export primero, luego al final: `export { validarEmail, validarContrasena, validarNombre, MIN_PASSWORD_LENGTH }`. Para validarEmail: `email.includes("@") && email.includes(".")`.',
    },
    quiz: [
      {
        question: '¿Cuántos named exports puede tener un módulo?',
        options: [
          'Solo uno',
          'Máximo dos',
          'Muchos — tantos como necesite',
          'Solo funciones, no variables',
        ],
        correctAnswer: 'Muchos — tantos como necesite',
        correctFeedback: 'Correcto. Un módulo puede tener tantos named exports como necesite: funciones, variables, constantes, clases.',
        incorrectFeedback: 'No hay límite en la cantidad de named exports. Un módulo de utilidades puede exportar decenas de funciones. Esto es precisamente lo que los hace útiles.',
      },
      {
        question: '¿Cuál de estas sintaxis exporta correctamente una función como named export?',
        options: [
          'function saludar() {} module.exports = saludar',
          'export function saludar() {}',
          'saludar.export = true; function saludar() {}',
          'exports saludar = function() {}',
        ],
        correctAnswer: 'export function saludar() {}',
        correctFeedback: 'Correcto. `export function nombre(){}` es la sintaxis de ES Modules para named exports.',
        incorrectFeedback: 'La sintaxis de ES Modules para named exports es `export function nombre(){}` o `export { nombre }` al final. `module.exports` es la sintaxis de CommonJS (Node.js antiguo).',
      },
      {
        question: '¿Qué permite hacer `export { validar as check }`?',
        options: [
          'Exportar la función con un nombre diferente al original',
          'Hacer la función privada',
          'Exportar y luego importar automáticamente',
          'Crear una copia de la función',
        ],
        correctAnswer: 'Exportar la función con un nombre diferente al original',
        correctFeedback: 'Correcto. El alias permite que los importadores usen el nombre `check` aunque internamente la función se llame `validar`.',
        incorrectFeedback: 'El `as` en export crea un alias: el módulo expone el nombre `check` aunque internamente la función se llame `validar`. Es útil para tener nombres internos limpios y nombres públicos descriptivos.',
      },
      {
        question: '¿Cuál es la ventaja de exportar al final del archivo con `export { a, b, c }` en lugar de `export` en cada declaración?',
        options: [
          'Es la única forma válida de exportar en ES Modules',
          'Permite ver de un vistazo qué expone el módulo sin leer todo el código',
          'Mejora el rendimiento del módulo',
          'Evita errores de hoisting',
        ],
        correctAnswer: 'Permite ver de un vistazo qué expone el módulo sin leer todo el código',
        correctFeedback: 'Correcto. Tener todos los exports al final actúa como un "índice" del módulo — puedes ir directamente al final para ver qué expone.',
        incorrectFeedback: 'Ambas formas son válidas. La ventaja de exportar al final es legibilidad: el final del archivo actúa como índice de la API pública del módulo.',
      },
      {
        question: '¿Cuántas exportaciones por defecto (export default) puede tener un módulo?',
        options: [
          'Ilimitadas',
          'Máximo 5',
          'Solo una',
          'Ninguna — export default no existe en ES6',
        ],
        correctAnswer: 'Solo una',
        correctFeedback: 'Correcto. Un módulo puede tener solo un export default, pero múltiples named exports. El default es el valor principal que exporta el módulo.',
        incorrectFeedback: 'Un módulo solo puede tener un export default. Para exportar múltiples cosas, se usan named exports (export function, export const, etc.).',
      },
    ],
  },

  {
    slug: 'import-nombrado',
    title: 'Import nombrado',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 134,
    description:
      'Aprende a importar elementos específicos desde otros archivos usando named imports.',
    explanation: `## Import nombrado (named import)

El **named import** importa elementos específicos de un módulo usando su nombre exacto.

### Sintaxis básica

\`\`\`js
// Importa solo lo que necesitas
import { sumar, multiplicar } from './math.js'

console.log(sumar(3, 4))       // 7
console.log(multiplicar(3, 4)) // 12
\`\`\`

### El nombre debe coincidir

El nombre en el import debe ser exactamente el mismo que en el export:

\`\`\`js
// math.js exporta:
export function sumar(a, b) { return a + b }

// ✅ Correcto
import { sumar } from './math.js'

// ❌ Error — el nombre no existe
import { suma } from './math.js' // SyntaxError o undefined
\`\`\`

### Importar con alias

Puedes renombrar al importar con \`as\`:

\`\`\`js
import { validarEmail as checkEmail } from './validators.js'

checkEmail('ana@ejemplo.com') // funciona con el nombre nuevo
\`\`\`

Útil cuando el nombre ya está en uso en el archivo actual o el nombre original es largo.

### Importar todo como objeto

\`\`\`js
import * as MathUtils from './math.js'

console.log(MathUtils.sumar(2, 3))       // 5
console.log(MathUtils.multiplicar(2, 3)) // 6
\`\`\`

### Rutas de importación

\`\`\`js
// Archivo en el mismo directorio
import { fn } from './utils.js'

// Archivo en subdirectorio
import { fn } from './helpers/utils.js'

// Archivo un nivel arriba
import { fn } from '../utils.js'

// Paquete de node_modules (sin ./)
import { useState } from 'react'
\`\`\`

### Importaciones múltiples

\`\`\`js
import { guardar, leer, eliminar } from './storage.js'
import { formatearPrecio, calcularTotal } from './utils.js'
import { validarEmail } from './validators.js'
\`\`\``,
    codeExample: `// main.js

// Importar desde diferentes módulos
import { guardar, leer } from './storage.js'
import { validarEmail, validarContrasena } from './validators.js'
import { formatearPrecio } from './utils.js'

// Importar con alias
import { API_URL as urlApi, MAX_INTENTOS as maxIntentos } from './config.js'

// Importar todo en un objeto namespace
import * as Storage from './storage.js'

function registrarUsuario(email, password) {
  // Usar los imports con sus nombres normales
  if (!validarEmail(email)) {
    return 'Email inválido'
  }

  if (!validarContrasena(password)) {
    return 'Contraseña muy corta'
  }

  // Usar import con alias
  console.log('Conectando a:', urlApi)

  // Usar namespace import
  Storage.guardar('ultimo_usuario', { email })

  return 'Registro exitoso'
}

// Usar import normal
let usuario = leer('ultimo_usuario')
if (usuario) {
  console.log('Bienvenido de vuelta:', usuario.email)
}`,
    keyPoints: [
      'Los named imports extraen elementos específicos por su nombre exacto.',
      'Puedes importar con alias usando `import { nombre as alias }`.',
      'Puedes importar todo el módulo como objeto namespace con `import * as Nombre`.',
      'Las rutas relativas empiezan con `./` o `../`; los paquetes de npm no llevan `./`.',
      'Solo puedes importar lo que el módulo exporta — lo privado no es accesible.',
      'Importar solo lo necesario ayuda a las herramientas a eliminar código no usado (tree shaking).',
    ],
    exercise: {
      description:
        'Dado que tienes un módulo `prices.js` con exports: `calcularIVA`, `aplicarDescuento`, `formatearMoneda`. Escribe las siguientes importaciones: 1) Importa solo `calcularIVA`. 2) Importa `aplicarDescuento` con el alias `rebajar`. 3) Importa todo el módulo como `Precios`. 4) Importa `calcularIVA` y `formatearMoneda` en la misma línea.',
      hint: 'Las rutas relativas llevan ./. La sintaxis de alias es `{ original as alias }`. El namespace es `import * as Nombre`. Múltiples imports se separan con comas dentro de las llaves.',
    },
    quiz: [
      {
        question: '¿Qué sucede si importas un nombre que el módulo no exporta?',
        options: [
          'Se importa como undefined sin error',
          'JavaScript lanza un SyntaxError o el valor es undefined según el entorno',
          'El módulo completo falla al cargar',
          'JavaScript importa el nombre más similar que encuentre',
        ],
        correctAnswer: 'JavaScript lanza un SyntaxError o el valor es undefined según el entorno',
        correctFeedback: 'Correcto. Los módulos estáticos pueden detectar esto en tiempo de análisis (SyntaxError). En algunos entornos dinámicos, el valor queda como undefined.',
        incorrectFeedback: 'Los módulos ES estáticos pueden detectar en tiempo de análisis que el export no existe y lanzar error. En todo caso, nunca "adivina" un nombre similar.',
      },
      {
        question: '¿Cuál es la sintaxis para importar todos los exports de un módulo como objeto?',
        options: [
          'import all from "./modulo.js"',
          'import { * } from "./modulo.js"',
          'import * as Nombre from "./modulo.js"',
          'import everything from "./modulo.js"',
        ],
        correctAnswer: 'import * as Nombre from "./modulo.js"',
        correctFeedback: 'Correcto. `import * as Nombre` crea un objeto con todas las exportaciones del módulo accesibles como Nombre.exportacion.',
        incorrectFeedback: 'La sintaxis namespace es `import * as Nombre from "..."`. Los `{}` se usan para named imports específicos, no para importar todo.',
      },
      {
        question: '¿Cuál es la diferencia entre `import { fn } from "./utils"` y `import { fn } from "utils"`?',
        options: [
          'No hay diferencia — ambas funcionan igual',
          'Con ./ es un archivo local; sin ./ es un paquete de node_modules',
          'Con ./ importa solo funciones; sin ./ importa todo',
          'Sin ./ no funciona en el navegador',
        ],
        correctAnswer: 'Con ./ es un archivo local; sin ./ es un paquete de node_modules',
        correctFeedback: 'Correcto. `./` indica ruta relativa (archivo local). Sin `./` o `../`, JavaScript busca en node_modules (paquete instalado).',
        incorrectFeedback: 'El ./ es crucial: indica que es una ruta relativa a un archivo local. Sin ./, el motor busca en node_modules, que es donde se instalan paquetes como React o lodash.',
      },
      {
        question: '¿Para qué sirve importar con alias `import { calcular as calc }`?',
        options: [
          'Para mejorar el rendimiento del import',
          'Para usar un nombre más corto o evitar conflictos con nombres locales',
          'Para hacer el import privado',
          'Para importar sin ejecutar el módulo',
        ],
        correctAnswer: 'Para usar un nombre más corto o evitar conflictos con nombres locales',
        correctFeedback: 'Correcto. El alias es útil cuando el nombre importado ya está en uso en el archivo, o cuando quieres un nombre más conveniente localmente.',
        incorrectFeedback: 'El alias no cambia el rendimiento ni la privacidad. Sirve para resolver conflictos de nombres o para usar un nombre más conveniente en el contexto actual.',
      },
      {
        question: '¿Cómo importas todos los exports de un módulo en un único objeto?',
        options: [
          'import * from "./modulo.js"',
          'import { * } from "./modulo.js"',
          'import * as mod from "./modulo.js"',
          'import all from "./modulo.js"',
        ],
        correctAnswer: 'import * as mod from "./modulo.js"',
        correctFeedback: 'Correcto. La sintaxis `import * as mod` importa todos los exports nombrados en un objeto. Luego accedes con mod.funcionA(), mod.constante, etc.',
        incorrectFeedback: 'La sintaxis correcta es `import * as nombreAlias from "..."`. No es `import *` solo ni `import { * }`. El alias es obligatorio.',
      },
    ],
  },

  {
    slug: 'export-default',
    title: 'Export default',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 135,
    description:
      'Aprende qué es export default y cuándo puede ser útil.',
    explanation: `## Export default

El **export default** permite exportar un único elemento "principal" de un módulo. A diferencia de los named exports, no requiere usar su nombre exacto al importar.

### Sintaxis

\`\`\`js
// saludo.js
export default function saludar(nombre) {
  return 'Hola, ' + nombre + '!'
}
\`\`\`

\`\`\`js
// Importar sin llaves — el nombre es libre
import saludar from './saludo.js'
import hola from './saludo.js'  // también funciona, cualquier nombre
\`\`\`

### Default con expresión

\`\`\`js
// config.js
const configuracion = {
  tema: 'oscuro',
  idioma: 'es',
}

export default configuracion
\`\`\`

### Default con clase

\`\`\`js
// Carrito.js
export default class Carrito {
  constructor() {
    this.items = []
  }
  agregar(item) {
    this.items.push(item)
  }
}
\`\`\`

### Solo uno por módulo

Un módulo solo puede tener **un** \`export default\`:

\`\`\`js
// ❌ Error — dos defaults
export default function a() {}
export default function b() {}

// ✅ Un default + muchos named
export default function principal() {}
export const auxiliar = 'dato'
\`\`\`

### Combinar default y named exports

\`\`\`js
// api.js
export default function fetchDatos(url) {
  return fetch(url).then(r => r.json())
}

export const BASE_URL = 'https://api.ejemplo.com'
export const TIMEOUT = 5000
\`\`\`

\`\`\`js
// Importar ambos
import fetchDatos, { BASE_URL, TIMEOUT } from './api.js'
\`\`\``,
    codeExample: `// router.js — módulo con export default

// Funciones internas (privadas)
function normalizarRuta(ruta) {
  return ruta.startsWith('/') ? ruta : '/' + ruta
}

function hayParametros(ruta) {
  return ruta.includes(':')
}

// La clase principal es el export default
class Router {
  constructor() {
    this.rutas = new Map()
  }

  registrar(ruta, handler) {
    this.rutas.set(normalizarRuta(ruta), handler)
  }

  navegar(ruta) {
    const rutaNorm = normalizarRuta(ruta)
    const handler = this.rutas.get(rutaNorm)
    if (handler) {
      handler()
    } else {
      console.log('Ruta no encontrada:', ruta)
    }
  }
}

// Named exports para constantes auxiliares
export const VERSION = '1.0'
export const DEFAULT_ROUTE = '/'

// Default export — la pieza principal del módulo
export default Router

// En app.js:
// import Router, { VERSION, DEFAULT_ROUTE } from './router.js'
// const router = new Router()`,
    keyPoints: [
      'Export default exporta un único elemento principal por módulo.',
      'Al importar un default, puedes usar cualquier nombre — no necesita coincidir.',
      'Solo puede haber un export default por módulo.',
      'Se puede combinar un default export con múltiples named exports.',
      'Al importar ambos, el default va primero, luego los named entre llaves.',
      'Es común en clases principales, componentes React, y funciones principales de un módulo.',
    ],
    exercise: {
      description:
        'Crea un módulo `carrito.js` con: un `export default` de una clase `Carrito` que tenga métodos `agregar(item)`, `eliminar(id)`, `calcularTotal()` y `obtenerItems()`. Además, un named export con una constante `MAX_ITEMS = 20`. Escribe también cómo importarías ambos en `app.js`.',
      hint: 'Estructura: `class Carrito { ... }` + `export const MAX_ITEMS = 20` + `export default Carrito`. Para importar: `import Carrito, { MAX_ITEMS } from "./carrito.js"`.',
    },
    quiz: [
      {
        question: '¿Cuántos export default puede tener un módulo?',
        options: [
          'Ilimitados',
          'Exactamente uno',
          'Máximo dos',
          'Depende del tamaño del archivo',
        ],
        correctAnswer: 'Exactamente uno',
        correctFeedback: 'Correcto. Solo puede haber un export default por módulo. Esto representa el "elemento principal" que el módulo expone.',
        incorrectFeedback: 'Un módulo solo puede tener un export default. Puede tener muchos named exports, pero el default es único — representa la exportación principal del módulo.',
      },
      {
        question: '¿Qué característica especial tiene el import de un default export?',
        options: [
          'Debe usar el mismo nombre que el export',
          'Puede usar cualquier nombre — no requiere coincidir con el original',
          'Requiere usar llaves {}',
          'Solo funciona si el default es una función',
        ],
        correctAnswer: 'Puede usar cualquier nombre — no requiere coincidir con el original',
        correctFeedback: 'Correcto. `import MiNombre from "./modulo.js"` funciona independientemente del nombre en el export. Esta es la principal diferencia con los named imports.',
        incorrectFeedback: 'Los named imports requieren el nombre exacto. Los default imports son diferentes: puedes importarlos con cualquier nombre conveniente para tu archivo.',
      },
      {
        question: '¿Cuál es la sintaxis correcta para importar un default export Y un named export del mismo módulo?',
        options: [
          'import { default, nombre } from "./modulo.js"',
          'import default, nombre from "./modulo.js"',
          'import DefaultNombre, { nombreExport } from "./modulo.js"',
          'import * from "./modulo.js"',
        ],
        correctAnswer: 'import DefaultNombre, { nombreExport } from "./modulo.js"',
        correctFeedback: 'Correcto. El default va primero sin llaves, y los named van dentro de {}. Ambos en la misma sentencia import.',
        incorrectFeedback: 'La sintaxis correcta es: primero el nombre del default (sin llaves), luego una coma, luego los named imports entre {}. Ejemplo: `import Carrito, { MAX_ITEMS } from "./carrito.js"`.',
      },
      {
        question: '¿Cuándo es apropiado usar export default?',
        options: [
          'Cuando el módulo exporta muchas funciones relacionadas',
          'Cuando el módulo tiene una "pieza principal" que es lo más importante',
          'Cuando no quieres que el elemento sea importable',
          'Cuando el módulo solo tiene constantes',
        ],
        correctAnswer: 'Cuando el módulo tiene una "pieza principal" que es lo más importante',
        correctFeedback: 'Correcto. Export default es ideal cuando el módulo representa principalmente una cosa: una clase, un componente, o una función principal.',
        incorrectFeedback: 'Export default se usa cuando hay un elemento que es "el protagonista" del módulo — una clase principal, un componente, o una función central. Para múltiples utilidades relacionadas, son mejores los named exports.',
      },
      {
        question: '¿Qué importa `import miFuncion from "./utils.js"` si utils.js tiene `export default function calcular() {}`?',
        options: [
          'Importa un objeto con la propiedad "calcular"',
          'Importa la función calcular con el nombre local miFuncion',
          'Lanza error porque el nombre no coincide',
          'Importa undefined porque el nombre es diferente',
        ],
        correctAnswer: 'Importa la función calcular con el nombre local miFuncion',
        correctFeedback: 'Correcto. El export default puede importarse con cualquier nombre. miFuncion es el alias local elegido para la función exportada.',
        incorrectFeedback: 'Con export default, el importador puede elegir cualquier nombre. No necesita coincidir con el nombre original. miFuncion = la función calcular.',
      },
    ],
  },

  {
    slug: 'named-export-vs-default-export',
    title: 'Diferencia entre named export y default export',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 136,
    description:
      'Aprende las diferencias prácticas entre exportaciones nombradas y exportaciones por defecto.',
    explanation: `## Named export vs Default export

### Comparación directa

| Característica    | Named export           | Default export         |
|-------------------|------------------------|------------------------|
| Cantidad          | Ilimitados por módulo  | Máximo uno por módulo  |
| Nombre al importar| Debe coincidir (o alias)| Libre — cualquier nombre|
| Sintaxis export   | export { fn } o export function fn | export default fn |
| Sintaxis import   | import { fn }          | import fn              |
| Refactoring       | Herramientas lo siguen | Puede perderse         |

### Named exports — mejor para múltiples utilidades

\`\`\`js
// utils.js — módulo de utilidades
export function sumar(a, b) { return a + b }
export function restar(a, b) { return a - b }
export function multiplicar(a, b) { return a * b }

// Solo tomas lo que necesitas
import { sumar, multiplicar } from './utils.js'
\`\`\`

### Default export — mejor para "el concepto principal"

\`\`\`js
// Carrito.js — este módulo ES el carrito
export default class Carrito { ... }

// Lo importas con el nombre que tenga sentido en tu contexto
import Carrito from './Carrito.js'
import MiCarrito from './Carrito.js'  // también válido
\`\`\`

### ¿Cuándo elegir cuál?

**Usa named exports cuando:**
- El módulo exporta múltiples cosas relacionadas (funciones de utilidad, constantes).
- Quieres que el nombre sea explícito y consistente en todos lados.
- Usas herramientas de refactoring que deben seguir el nombre.

**Usa default export cuando:**
- El módulo representa principalmente una sola cosa.
- Esa cosa tiene un nombre claro y es el "protagonista".
- Es un componente React, una clase principal, etc.

### El problema de los default exports anónimos

\`\`\`js
// ❌ Difícil de rastrear — ¿qué exporta este módulo?
export default function() {
  // función anónima
}

// ✅ Siempre nombra el default export
export default function calcularTotal() {
  // ahora herramientas pueden encontrarlo
}
\`\`\`

### Práctica en proyectos reales

En proyectos modernos (React, Vue) es común ver:
\`\`\`js
// Un componente = default export + tipos/constantes como named
export const TAMAÑOS = ['sm', 'md', 'lg']
export default function Boton({ texto, tamaño }) { ... }
\`\`\``,
    codeExample: `// Ejemplo comparativo completo

// ---- math.js (named exports — múltiples utilidades) ----
export function sumar(a, b) { return a + b }
export function restar(a, b) { return a - b }
export function porcentaje(total, pct) { return total * pct / 100 }
export const PI = 3.14159

// Uso:
// import { sumar, porcentaje } from './math.js'

// ---- Calculadora.js (default export — la pieza principal) ----
class Calculadora {
  constructor() { this.historial = [] }

  calcular(operacion, a, b) {
    let resultado
    if (operacion === '+') resultado = a + b
    else if (operacion === '-') resultado = a - b
    else if (operacion === '*') resultado = a * b
    else if (operacion === '/') resultado = a / b
    else return null

    this.historial.push({ operacion, a, b, resultado })
    return resultado
  }

  obtenerHistorial() { return this.historial }
}

export default Calculadora

// ---- app.js (usa ambos) ----
// import Calculadora from './Calculadora.js'
// import { sumar, PI } from './math.js'

// const calc = new Calculadora()
// console.log(calc.calcular('+', 3, 4)) // 7
// console.log(sumar(3, 4))              // 7
// console.log(PI)                        // 3.14159`,
    keyPoints: [
      'Named exports pueden ser múltiples por módulo; default solo uno.',
      'Named imports deben usar el nombre exacto; default imports pueden usar cualquier nombre.',
      'Named exports son mejores para módulos con múltiples utilidades.',
      'Default exports son mejores para el "concepto principal" de un módulo.',
      'Puedes combinar ambos en el mismo módulo.',
      'Evita default exports anónimos — siempre nombra la función o clase.',
    ],
    exercise: {
      description:
        'Decide cuál tipo de export usar para cada caso y escribe el código:\n1. Un módulo `formatters.js` con funciones para formatear fechas, precios y nombres.\n2. Un módulo `ApiClient.js` con una clase que maneja peticiones HTTP.\n3. Un módulo `constants.js` con constantes de configuración de la app.',
      hint: 'formatters.js → named exports (múltiples utilidades). ApiClient.js → default export (la clase ES el módulo). constants.js → named exports (múltiples constantes).',
    },
    quiz: [
      {
        question: '¿Qué ventaja tienen los named exports sobre los default exports para el refactoring?',
        options: [
          'Los named exports son más rápidos de ejecutar',
          'Los IDEs y herramientas pueden rastrear y renombrar named exports automáticamente',
          'Los named exports no necesitan ser importados',
          'Los named exports funcionan sin la sintaxis import/export',
        ],
        correctAnswer: 'Los IDEs y herramientas pueden rastrear y renombrar named exports automáticamente',
        correctFeedback: 'Correcto. Como el nombre debe coincidir, los IDEs pueden encontrar todos los usos y renombrarlos juntos. Con default exports el importador elige el nombre, lo que complica el rastreo.',
        incorrectFeedback: 'Las herramientas de refactoring (VS Code, WebStorm) pueden rastrear named exports porque el nombre es consistente. Con defaults, el importador elige el nombre — esto puede hacer más difícil rastrear dónde se usa.',
      },
      {
        question: '¿Cuál es el problema de `export default function() { ... }` (función anónima)?',
        options: [
          'No es sintaxis válida de JavaScript',
          'Es difícil de rastrear — las herramientas no saben cómo se llama la función',
          'No se puede importar en otros módulos',
          'Solo funciona si el módulo tiene un solo export',
        ],
        correctAnswer: 'Es difícil de rastrear — las herramientas no saben cómo se llama la función',
        correctFeedback: 'Correcto. Sin nombre, las herramientas de depuración muestran "anonymous function" y los IDEs tienen más dificultad para dar sugerencias útiles.',
        incorrectFeedback: 'Es válido en JavaScript, pero es mala práctica. Las herramientas de depuración y los IDEs funcionan mejor cuando las funciones tienen nombre. Siempre nombra tu export default.',
      },
      {
        question: '¿Para cuál de estos casos son más apropiados los named exports?',
        options: [
          'Un archivo que contiene un solo componente React',
          'Una clase que representa una entidad del sistema (Usuario, Producto)',
          'Un archivo con 10 funciones de utilidad matemática',
          'La función principal de arranque de una aplicación',
        ],
        correctAnswer: 'Un archivo con 10 funciones de utilidad matemática',
        correctFeedback: 'Correcto. Múltiples funciones de utilidad son el caso ideal para named exports — cada una tiene nombre propio y los importadores toman solo lo que necesitan.',
        incorrectFeedback: 'Named exports brillan cuando hay múltiples elementos a exportar. Un componente único, una clase principal o una función de arranque son mejores candidatos para default export.',
      },
      {
        question: '¿Cuándo es preferible usar named exports sobre export default?',
        options: [
          'Cuando el módulo solo exporta una cosa',
          'Cuando el módulo exporta múltiples funciones o valores relacionados',
          'Cuando el módulo es muy pequeño',
          'Nunca — export default siempre es mejor',
        ],
        correctAnswer: 'Cuando el módulo exporta múltiples funciones o valores relacionados',
        correctFeedback: 'Correcto. Named exports son ideales cuando un módulo tiene varias cosas que exportar. Export default es mejor cuando el módulo tiene una única exportación principal.',
        incorrectFeedback: 'La elección depende de cuánto exporta el módulo. Named exports permiten múltiples exportaciones explícitas. Default es para el valor principal cuando solo hay uno.',
      },
      {
        question: '¿Qué ventaja tienen los named exports para el autocompletado en editores de código?',
        options: [
          'Los named exports no tienen ventaja sobre default',
          'Los editores pueden sugerir el nombre exacto del export al importar',
          'Default exports son más rápidos de escribir siempre',
          'Named exports solo funcionan en proyectos con TypeScript',
        ],
        correctAnswer: 'Los editores pueden sugerir el nombre exacto del export al importar',
        correctFeedback: 'Exacto. Con named exports, el editor sabe exactamente qué se exporta y puede autocompletarlo. Con default, el importador elige el nombre libremente, dificultando el autocompletado.',
        incorrectFeedback: 'Named exports tienen el nombre fijo — el editor puede sugerirlos y autocompletarlos. Con default, el importador elige cualquier nombre, lo que dificulta el autocompletado.',
      },
    ],
  },

  {
    slug: 'organizar-codigo-archivos-js',
    title: 'Organizar código en varios archivos',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 137,
    description:
      'Aprende a separar código por responsabilidades usando archivos como utils.js, data.js y app.js.',
    explanation: `## Organizar código en varios archivos

### El principio de responsabilidad única

Cada archivo debe tener una responsabilidad clara. Cuando un archivo hace muchas cosas, es señal de que debe dividirse.

### Estructura de un proyecto real

\`\`\`
src/
  app.js          — punto de entrada, orquestación
  data.js         — datos estáticos y configuración
  utils.js        — funciones de utilidad reutilizables
  storage.js      — manejo de localStorage
  ui.js           — funciones de manipulación del DOM
  validators.js   — funciones de validación
\`\`\`

### Ejemplo: Tienda online modular

**data.js** — datos y constantes:
\`\`\`js
export const productos = [...]
export const CONFIG = { moneda: 'MXN', iva: 0.16 }
\`\`\`

**utils.js** — cálculos y transformaciones:
\`\`\`js
export function calcularTotal(items) { ... }
export function aplicarDescuento(precio, pct) { ... }
export function formatearMoneda(monto) { ... }
\`\`\`

**storage.js** — persistencia:
\`\`\`js
export function guardarCarrito(items) { ... }
export function recuperarCarrito() { ... }
\`\`\`

**ui.js** — manipulación del DOM:
\`\`\`js
export function renderizarProductos(lista) { ... }
export function mostrarMensaje(texto, tipo) { ... }
\`\`\`

**app.js** — todo se conecta:
\`\`\`js
import { productos } from './data.js'
import { calcularTotal } from './utils.js'
import { guardarCarrito } from './storage.js'
import { renderizarProductos } from './ui.js'
\`\`\`

### Señales de que un archivo está creciendo demasiado

- Más de 200-300 líneas.
- Tiene funciones de naturaleza muy diferente (validaciones + DOM + cálculos).
- Es difícil describir lo que hace en una frase.
- Múltiples personas necesitan editarlo simultáneamente.

### Regla práctica

Nombra los archivos por lo que contienen:
- \`validators.js\` → valida datos
- \`formatters.js\` → formatea datos para mostrar
- \`storage.js\` → guarda y recupera datos
- \`api.js\` → peticiones a servidores`,
    codeExample: `// Ejemplo de proyecto bien organizado: Lista de Notas

// --- data.js ---
export const CATEGORIAS = ['Personal', 'Trabajo', 'Estudio']
export const STORAGE_KEY = 'mis_notas'

// --- storage.js ---
// export function guardarNotas(notas) {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(notas))
// }
// export function cargarNotas() {
//   const raw = localStorage.getItem(STORAGE_KEY)
//   return raw ? JSON.parse(raw) : []
// }

// --- utils.js ---
export function crearNota(titulo, contenido, categoria) {
  return {
    id: Date.now(),
    titulo,
    contenido,
    categoria,
    creadaEn: new Date().toISOString(),
  }
}

export function filtrarPorCategoria(notas, categoria) {
  if (!categoria) return notas
  return notas.filter((n) => n.categoria === categoria)
}

export function buscarEnNotas(notas, texto) {
  const textoBusqueda = texto.toLowerCase()
  return notas.filter(
    (n) =>
      n.titulo.toLowerCase().includes(textoBusqueda) ||
      n.contenido.toLowerCase().includes(textoBusqueda)
  )
}

// --- app.js (punto de entrada) ---
// import { CATEGORIAS } from './data.js'
// import { guardarNotas, cargarNotas } from './storage.js'
// import { crearNota, filtrarPorCategoria } from './utils.js'`,
    keyPoints: [
      'Cada archivo debe tener una responsabilidad clara y describible en una frase.',
      'Los nombres de archivo deben reflejar su contenido: utils.js, storage.js, validators.js.',
      'app.js o main.js es el punto de entrada que importa y conecta los módulos.',
      'Cuando un archivo tiene más de 200-300 líneas o mezcla responsabilidades, considera dividirlo.',
      'La organización modular facilita que varios desarrolladores trabajen en paralelo.',
      'Un módulo bien definido puede reutilizarse en otros proyectos sin modificaciones.',
    ],
    exercise: {
      description:
        'Diseña la estructura de módulos para una app de "Gestor de Tareas". La app debe poder: crear/editar/eliminar tareas, filtrar por estado (pendiente/completada), guardar en localStorage, y mostrar notificaciones. Decide los archivos, sus responsabilidades, y qué funciones exporta cada uno.',
      hint: 'Posible estructura: `tasks.js` (lógica de tareas: crear, editar, eliminar, filtrar), `storage.js` (guardar/cargar del localStorage), `ui.js` (renderizar lista, mostrar notificaciones), `app.js` (conectar todo). Cada archivo importa solo lo que necesita de los demás.',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito de un archivo `app.js` o `main.js` en un proyecto modular?',
        options: [
          'Contener toda la lógica del proyecto en un solo lugar',
          'Ser el punto de entrada que importa y conecta los demás módulos',
          'Exportar todas las funciones para que otros archivos las usen',
          'Contener solo constantes y configuración',
        ],
        correctAnswer: 'Ser el punto de entrada que importa y conecta los demás módulos',
        correctFeedback: 'Correcto. app.js orquesta — importa de los módulos especializados y los conecta para que la aplicación funcione.',
        incorrectFeedback: 'app.js no debe contener toda la lógica. Su función es orquestar: importar desde módulos especializados y conectarlos para que la aplicación funcione como un todo.',
      },
      {
        question: '¿Qué señal indica que es momento de dividir un archivo en módulos?',
        options: [
          'Cuando el archivo tiene más de 10 líneas',
          'Cuando el archivo mezcla responsabilidades muy diferentes o se vuelve difícil de describir',
          'Cuando el archivo usa let y const',
          'Cuando el archivo tiene más de 2 funciones',
        ],
        correctAnswer: 'Cuando el archivo mezcla responsabilidades muy diferentes o se vuelve difícil de describir',
        correctFeedback: 'Correcto. Si un archivo hace tantas cosas que no puedes describirlo en una frase clara, probablemente deba dividirse en módulos más especializados.',
        incorrectFeedback: 'No es sobre la cantidad de líneas o funciones — es sobre responsabilidades. Si un archivo mezcla validaciones, DOM, cálculos y storage, es momento de dividirlo.',
      },
      {
        question: '¿Qué principio guía la organización de módulos en un proyecto JavaScript?',
        options: [
          'Un archivo por cada función',
          'Todo el código en un solo archivo grande',
          'Cada módulo agrupa código con una responsabilidad clara y relacionada',
          'Los módulos no deben tener más de 10 líneas',
        ],
        correctAnswer: 'Cada módulo agrupa código con una responsabilidad clara y relacionada',
        correctFeedback: 'Exacto. El principio de responsabilidad única: cada módulo agrupa código relacionado con un mismo propósito (utils, auth, storage, etc.).',
        incorrectFeedback: 'No se trata del tamaño sino de la cohesión. Un módulo debe tener una responsabilidad clara: todas las funciones de utils en utils.js, toda la lógica de auth en auth.js, etc.',
      },
      {
        question: '¿Qué problema resuelve un archivo index.js en una carpeta de módulos?',
        options: [
          'Hace que el código sea más rápido',
          'Sirve como punto de entrada que re-exporta lo necesario, simplificando los imports',
          'Almacena variables globales del proyecto',
          'Reemplaza a todas las otras exportaciones',
        ],
        correctAnswer: 'Sirve como punto de entrada que re-exporta lo necesario, simplificando los imports',
        correctFeedback: 'Correcto. Un index.js en una carpeta agrupa y re-exporta, simplificando los imports. En lugar de importar desde rutas largas, importas desde la carpeta directamente.',
        incorrectFeedback: 'index.js es un patrón de organización: actúa como la puerta de una carpeta, re-exportando lo que otros módulos necesitan conocer. Simplifica las rutas de importación.',
      },
      {
        question: '¿Cuál es la buena práctica al decidir qué exportar de un módulo?',
        options: [
          'Exportar todas las variables internas para que sean accesibles',
          'Exportar solo lo que otros módulos necesitan — mantener lo interno privado',
          'Usar siempre export default para todas las exportaciones',
          'Tener un solo archivo con todas las funciones del proyecto',
        ],
        correctAnswer: 'Exportar solo lo que otros módulos necesitan — mantener lo interno privado',
        correctFeedback: 'Exacto. Exportar solo lo necesario crea una API pública del módulo. Las funciones auxiliares internas no necesitan ser exportadas.',
        incorrectFeedback: 'La buena práctica es exportar solo lo necesario. Las funciones de ayuda internas del módulo pueden quedarse sin exportar — esto reduce el acoplamiento entre módulos.',
      },
    ],
  },

  {
    slug: 'errores-comunes-modulos-js',
    title: 'Errores comunes con módulos',
    module: 'Módulos en JavaScript',
    moduleNumber: 18,
    order: 138,
    description:
      'Aprende a evitar errores comunes como rutas incorrectas, nombres mal escritos o mezclar imports de forma incorrecta.',
    explanation: `## Errores comunes con módulos

### Error 1: Ruta incorrecta

\`\`\`js
// ❌ Le falta el ./
import { fn } from 'utils.js'   // JavaScript busca en node_modules

// ✅ Correcto para archivo local
import { fn } from './utils.js'
\`\`\`

### Error 2: Nombre que no existe en el export

\`\`\`js
// math.js exporta: sumar, restar
export function sumar(a, b) { return a + b }

// ❌ El nombre no coincide
import { suma } from './math.js'  // Error — no existe 'suma'

// ✅
import { sumar } from './math.js'
\`\`\`

### Error 3: Importar con llaves un default export

\`\`\`js
// Carrito.js tiene export default Carrito
export default class Carrito { ... }

// ❌ Los defaults NO se importan con llaves
import { Carrito } from './Carrito.js'  // undefined o error

// ✅
import Carrito from './Carrito.js'
\`\`\`

### Error 4: Olvidar el type="module" en HTML

\`\`\`html
<!-- ❌ Sin type="module" los imports no funcionan -->
<script src="app.js"></script>

<!-- ✅ Con type="module" -->
<script type="module" src="app.js"></script>
\`\`\`

### Error 5: Modificar lo importado directamente

\`\`\`js
// data.js
export const config = { tema: 'oscuro' }

// app.js
import { config } from './data.js'
config.tema = 'claro'  // ⚠️ Funciona, pero modifica el original compartido
// Si necesitas una copia: const miConfig = { ...config }
\`\`\`

### Error 6: Importaciones circulares

\`\`\`js
// a.js
import { algo } from './b.js'

// b.js
import { otraCosa } from './a.js'  // ⚠️ Circular — puede causar undefined
\`\`\`

Las importaciones circulares no siempre fallan, pero pueden producir valores \`undefined\` si un módulo usa algo antes de que esté inicializado.

### Error 7: Mezclar sintaxis CommonJS y ESM

\`\`\`js
// ❌ No mezcles require() y import en el mismo proyecto
const fs = require('fs')           // CommonJS
import { algo } from './mod.js'    // ESM
\`\`\``,
    codeExample: `// Checklist de errores al escribir módulos

// ✅ RUTAS: siempre ./ para archivos locales
import { sumar } from './math.js'       // archivo local
import { useState } from 'react'        // paquete npm (sin ./)

// ✅ NOMBRES: deben coincidir exactamente con el export
// Si math.js exporta 'calcularTotal', importas 'calcularTotal'
import { calcularTotal } from './math.js'

// ✅ DEFAULT vs NAMED: sin llaves para default, con llaves para named
import Carrito from './Carrito.js'              // default
import { agregar, eliminar } from './utils.js'  // named
import Carrito2, { MAX_ITEMS } from './Carrito.js' // ambos

// ✅ COPIAS: si necesitas modificar, usa spread
import { config } from './data.js'
const miConfig = { ...config, tema: 'claro' }  // copia, no muta

// ✅ EXTENSIÓN: en proyectos con herramientas (Vite, Webpack)
// a veces se omite .js — pero en el navegador puro sí se necesita
import { fn } from './utils'   // con herramientas
import { fn2 } from './utils.js' // sin herramientas`,
    keyPoints: [
      'Las rutas de archivos locales deben empezar con `./` o `../`.',
      'El nombre en el import debe coincidir exactamente con el nombre en el export.',
      'Los default exports se importan sin llaves; los named con llaves.',
      'En el navegador, el script tag necesita type="module" para que funcionen los imports.',
      'Importar un objeto lo trae por referencia — usa spread si necesitas una copia.',
      'Las importaciones circulares pueden causar valores undefined difíciles de depurar.',
    ],
    exercise: {
      description:
        'Identifica y corrige todos los errores en este código:\n\n```js\n// utils.js\nexport function formatear(valor) { return "$" + valor }\nexport default const MONEDA = "MXN"\n\n// app.js\nimport formatear from "utils.js"\nimport { MONEDA } from "./utils.js"\nconsole.log(formatear(100))\n```',
      hint: '1. `export default const` no es válido — separa el default del const. 2. `formatear` es un named export — se importa con llaves. 3. `"utils.js"` sin ./ busca en node_modules. MONEDA es el default — se importa sin llaves.',
    },
    quiz: [
      {
        question: '¿Qué error ocurre al escribir `import { Componente } from "./Componente.js"` si el módulo usa `export default`?',
        options: [
          'SyntaxError: No se puede importar con llaves',
          'Componente será undefined porque default no se importa con llaves',
          'Funciona normalmente — las llaves son opcionales',
          'Se importa el módulo completo como objeto',
        ],
        correctAnswer: 'Componente será undefined porque default no se importa con llaves',
        correctFeedback: 'Correcto. Los default exports se importan sin llaves. Con llaves, JavaScript busca un named export llamado "Componente" que no existe, así que queda undefined.',
        incorrectFeedback: 'Las llaves son para named exports. Un default export se importa sin llaves: `import Componente from "./Componente.js"`. Con llaves buscas un named export, que no existe.',
      },
      {
        question: '¿Por qué `import { fn } from "utils.js"` (sin ./) puede no encontrar el archivo local?',
        options: [
          'Porque las comillas dobles no funcionan con imports',
          'Porque sin ./ JavaScript busca en node_modules, no en el directorio actual',
          'Porque .js es una extensión inválida para módulos',
          'Porque utils.js debe llamarse index.js',
        ],
        correctAnswer: 'Porque sin ./ JavaScript busca en node_modules, no en el directorio actual',
        correctFeedback: 'Correcto. Las rutas sin ./ se interpretan como paquetes de npm. Para archivos locales siempre usa ./ o ../.',
        incorrectFeedback: 'JavaScript distingue entre paquetes (sin ./) y archivos locales (con ./). `"utils.js"` sin ./ busca un paquete instalado en node_modules llamado "utils.js".',
      },
      {
        question: '¿Qué problema pueden causar las importaciones circulares?',
        options: [
          'Un error de sintaxis que impide compilar',
          'Valores undefined si un módulo usa algo antes de que esté inicializado',
          'Que el programa se ejecute en bucle infinito',
          'Solo causan problemas en Node.js, no en el navegador',
        ],
        correctAnswer: 'Valores undefined si un módulo usa algo antes de que esté inicializado',
        correctFeedback: 'Correcto. Los módulos circulares no siempre fallan, pero pueden producir undefined si uno intenta usar el export del otro antes de que esté completamente inicializado.',
        incorrectFeedback: 'Las importaciones circulares pueden fallar silenciosamente — produciendo undefined en lugar de error. Esto hace los bugs difíciles de rastrear. Lo mejor es evitar ciclos rediseñando las dependencias.',
      },
      {
        question: '¿Qué resultado produce importar un named export con sintaxis de import default?',
        options: [
          'SyntaxError al escribirlo',
          'El módulo falla silenciosamente y el valor importado es undefined',
          'TypeError en tiempo de ejecución',
          'El valor correcto — JavaScript lo detecta automáticamente',
        ],
        correctAnswer: 'El módulo falla silenciosamente y el valor importado es undefined',
        correctFeedback: 'Correcto. Importar un named export como default no lanza error de sintaxis, pero el valor importado es undefined porque no existe export default.',
        incorrectFeedback: 'Mezclar named import y default import no falla en sintaxis, pero el resultado es incorrecto. El módulo no tiene default export, así que obtienes undefined.',
      },
      {
        question: '¿Por qué es importante escribir `./utils.js` en lugar de `utils` al importar un módulo propio?',
        options: [
          'No hay diferencia — ambas formas funcionan igual',
          'El ./ indica que es un archivo local, no un paquete de node_modules',
          'El .js es opcional pero ./ es obligatorio en todos los casos',
          'Solo importa en proyectos de Node.js',
        ],
        correctAnswer: 'El ./ indica que es un archivo local, no un paquete de node_modules',
        correctFeedback: 'Correcto. Sin ./, el sistema de módulos busca el nombre en node_modules (paquetes npm). Con ./, busca en el sistema de archivos local.',
        incorrectFeedback: 'La distinción es importante: `import x from "utils"` busca en node_modules. `import x from "./utils"` busca en el mismo directorio. Sin ./, intentaría cargar un paquete npm inexistente.',
      },
    ],
  },
]

export const jsModule18: Module = {
  number: 18,
  title: 'Módulos en JavaScript',
  level: 'nivel4',
  lessons: lessonsJsModule18,
}
