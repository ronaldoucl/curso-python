import type { Lesson, Module } from '@/types'

export const lessonsJsModule29: Lesson[] = [
  {
    slug: 'que-es-testing-js',
    title: '¿Qué es testing?',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 224,
    description: 'Aprende qué significa probar código y por qué las pruebas ayudan a detectar errores antes.',
    explanation: `**Testing** es el proceso de verificar que tu código hace lo que se supone que debe hacer.

**Analogía:** Cuando construyes un puente, antes de abrirlo al público haces pruebas de carga. Los tests de software son esas pruebas de carga para tu código.

**¿Por qué hacer tests?**
- Detectas errores antes de que lleguen a los usuarios
- Cuando cambias algo, sabes si rompiste otra parte
- Dan confianza para refactorizar código
- Documentan cómo se espera que funcione el código

**¿Qué se puede testear?**
- **Funciones puras:** dado el input X, ¿devuelve Y?
- **Validaciones:** ¿rechaza correctamente entradas inválidas?
- **Cálculos:** ¿el resultado matemático es correcto?
- **Transformaciones:** ¿transforma los datos correctamente?

**¿Qué es más difícil de testear?**
- Código que manipula el DOM
- Código que hace peticiones a APIs externas
- Código que depende del tiempo (fechas, timers)

**¿Cuándo escribir tests?**
- Cuando la función tiene lógica clara: entradas → salidas
- Cuando has encontrado un bug y quieres asegurarte de no repetirlo
- Antes de refactorizar código existente

**No toda lógica necesita tests.** Empieza con las funciones más críticas y con lógica más compleja.`,
    codeExample: `// Función sin test: ¿cómo sabes si funciona?
function calcularPrecioConDescuento(precio, descuentoPct) {
  return precio - (precio * descuentoPct / 100)
}

// Test manual: lo pruebas en la consola cada vez que cambias algo
console.log(calcularPrecioConDescuento(100, 10)) // ¿100 o 90?
console.log(calcularPrecioConDescuento(200, 25)) // ¿150 o algo raro?

// El problema: este "test manual" se pierde cuando cierras la consola
// y tienes que repetirlo cada vez que cambias la función.

// Con un test automatizado (usando Vitest):
import { test, expect } from 'vitest'

test('calcula correctamente el precio con descuento del 10%', () => {
  const resultado = calcularPrecioConDescuento(100, 10)
  expect(resultado).toBe(90)
})

test('descuento del 25% en precio de 200', () => {
  const resultado = calcularPrecioConDescuento(200, 25)
  expect(resultado).toBe(150)
})

// Ahora puedes ejecutar npm test en cualquier momento
// y en 0.1 segundos sabes si la función sigue funcionando.`,
    keyPoints: [
      'Testing verifica que el código hace lo que se supone que debe hacer',
      'Los tests automatizados son reutilizables y se ejecutan rápidamente',
      'Facilitan refactorizar código con confianza',
      'Las funciones puras (entrada → salida) son las más fáciles de testear',
      'No toda lógica necesita tests, empieza por la más crítica y compleja',
      'Un test que falla después de un cambio te dice exactamente qué rompiste',
    ],
    exercise: {
      description: 'Escribe en papel (o en comentarios) 3 casos de prueba para esta función: function esPalindromo(texto) { return texto === texto.split("").reverse().join("") }. Piensa en: un texto que sí es palíndromo, uno que no, y un caso borde (texto vacío).',
      hint: 'Un palíndromo se lee igual al derecho y al revés: "ana", "racecar". Piensa también en qué debería pasar con un string vacío o con un solo carácter.',
    },
    quiz: [
      {
        question: '¿Cuál es el principal beneficio de los tests automatizados frente a las pruebas manuales?',
        options: [
          'Los tests automatizados son siempre más fáciles de escribir',
          'Puedes ejecutarlos en segundos cada vez que cambias el código',
          'Los tests automatizados no pueden fallar',
          'Solo los tests automatizados pueden detectar errores',
        ],
        correctAnswer: 'Puedes ejecutarlos en segundos cada vez que cambias el código',
        correctFeedback: 'Correcto. Los tests automatizados se ejecutan en milisegundos y puedes correrlos después de cada cambio. Las pruebas manuales requieren tiempo y atención cada vez.',
        incorrectFeedback: 'Los tests automatizados pueden fallar (eso es bueno: te dicen cuándo algo se rompió). Su ventaja principal es la velocidad y repetibilidad: ejecutarlos después de cada cambio toma segundos.',
      },
      {
        question: '¿Qué tipo de función es más fácil de testear?',
        options: [
          'Funciones que manipulan el DOM directamente',
          'Funciones puras con entradas y salidas claras',
          'Funciones que hacen peticiones a APIs externas',
          'Funciones que usan setTimeout',
        ],
        correctAnswer: 'Funciones puras con entradas y salidas claras',
        correctFeedback: 'Correcto. Una función pura siempre devuelve el mismo resultado para los mismos argumentos, sin efectos secundarios. Es trivial testear: si le doy X, espero Y.',
        incorrectFeedback: 'Las funciones puras son las más fáciles de testear porque son predecibles: mismos inputs siempre dan mismos outputs. El DOM, APIs y timers introducen dependencias externas que complican el testing.',
      },
      {
        question: '¿Por qué los tests dan confianza para refactorizar código?',
        options: [
          'Porque generan documentación automáticamente',
          'Porque si algo se rompe al refactorizar, los tests fallan y te avisan',
          'Porque hacen que el código sea más rápido',
          'Porque reemplazan la necesidad de revisar el código manualmente',
        ],
        correctAnswer: 'Porque si algo se rompe al refactorizar, los tests fallan y te avisan',
        correctFeedback: 'Correcto. Con tests, puedes refactorizar libremente. Si rompes algo, los tests fallan inmediatamente y sabes exactamente qué funcionalidad se vio afectada.',
        incorrectFeedback: 'Los tests funcionan como una red de seguridad: si al refactorizar rompes algo, los tests que cubrían esa funcionalidad fallan y te avisan. Sin tests, descubres el problema cuando lo reporta un usuario.',
      },
      {
        question: '¿Cuándo NO es necesario escribir un test?',
        options: [
          'Cuando la función tiene un nombre claro',
          'Cuando la función simplemente llama a document.querySelector y muestra texto',
          'Cuando la función tiene más de 5 líneas',
          'Siempre se deben escribir tests para todo',
        ],
        correctAnswer: 'Cuando la función simplemente llama a document.querySelector y muestra texto',
        correctFeedback: 'Correcto. Las funciones de renderizado simple que solo muestran texto en el DOM tienen poco valor de testear en comparación con funciones con lógica compleja. Empieza por lo que tiene más lógica.',
        incorrectFeedback: 'No todo necesita tests. Las funciones de renderizado simples (mostrar texto en el DOM) son difíciles de testear y aportan poco valor. Prioriza testear funciones con lógica compleja: cálculos, validaciones, transformaciones.',
      },
      {
        question: '¿Qué pasa cuando agregas una nueva función y los tests existentes fallan?',
        options: [
          'Debes eliminar los tests que fallan',
          'La nueva función rompió algo que antes funcionaba, debes revisar el cambio',
          'Es normal y puedes ignorar los tests que fallan',
          'Significa que los tests están mal escritos',
        ],
        correctAnswer: 'La nueva función rompió algo que antes funcionaba, debes revisar el cambio',
        correctFeedback: 'Correcto. Un test que falla después de un cambio es una alarma valiosa: te dice que tu nueva funcionalidad rompió algo que antes funcionaba. Investiga antes de continuar.',
        incorrectFeedback: 'Un test fallido después de un cambio es información valiosa: algo que funcionaba ya no funciona. No ignores los tests ni los borres. Investiga qué cambio causó el fallo.',
      },
    ],
  },
  {
    slug: 'pruebas-manuales-vs-automatizadas',
    title: 'Pruebas manuales vs automatizadas',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 225,
    description: 'Aprende la diferencia entre probar manualmente una app y escribir pruebas automatizadas.',
    explanation: `Ambos tipos de pruebas son válidos y se complementan. Saber cuándo usar cada uno es parte de trabajar como desarrollador.

**Pruebas manuales:**
Tú mismo interactúas con la aplicación para verificar que funciona.

Proceso: abres la app → haces clic → llenas formularios → verificas que el resultado es el esperado.

**Ventajas:**
- Descubres errores de UX y visuales que los tests automatizados no ven
- No requieren configuración ni código adicional
- Útiles para verificar el flujo completo ("happy path")

**Desventajas:**
- Lentas: verificar 50 casos toma horas
- No son repetibles automáticamente
- Es fácil olvidar casos de prueba

**Pruebas automatizadas:**
Código que verifica que otro código funciona correctamente.

\`\`\`javascript
test('sumar 2 + 3 devuelve 5', () => {
  expect(sumar(2, 3)).toBe(5)
})
\`\`\`

**Ventajas:**
- Se ejecutan en milisegundos
- Repetibles: siempre verifican los mismos casos
- No dependen de que alguien recuerde probarlos

**Desventajas:**
- Requieren tiempo para escribirlas
- No detectan errores visuales ni de UX
- Las pruebas malas dan falsa seguridad

**La combinación ideal:**
- Tests automatizados para lógica de negocio (cálculos, validaciones)
- Pruebas manuales para el flujo visual y la experiencia del usuario`,
    codeExample: `// Prueba manual (informal, en la consola):
// 1. Abro la app
// 2. Escribo "comprar leche" y presiono Enter
// 3. Verifico que aparece en la lista
// 4. Marco como completada
// 5. Verifico que el contador cambia
// → Lleva 30 segundos hacerlo bien

// Prueba automatizada (Vitest):
import { test, expect } from 'vitest'
import { agregarTarea, marcarCompletada, contarPendientes } from './tareas.js'

test('agregar tarea la incluye en la lista', () => {
  const tareas = []
  const nuevasTareas = agregarTarea(tareas, 'comprar leche')
  expect(nuevasTareas).toHaveLength(1)
  expect(nuevasTareas[0].texto).toBe('comprar leche')
  expect(nuevasTareas[0].completada).toBe(false)
})

test('marcar como completada actualiza el estado', () => {
  const tareas = [{ id: 1, texto: 'comprar', completada: false }]
  const actualizadas = marcarCompletada(tareas, 1)
  expect(actualizadas[0].completada).toBe(true)
})

test('contar pendientes excluye las completadas', () => {
  const tareas = [
    { id: 1, completada: true },
    { id: 2, completada: false },
    { id: 3, completada: false },
  ]
  expect(contarPendientes(tareas)).toBe(2)
})

// Ejecutar: npm test → 0.05s para verificar los 3 casos`,
    keyPoints: [
      'Las pruebas manuales verifican el flujo visual y la experiencia del usuario',
      'Las pruebas automatizadas verifican lógica de negocio de forma rápida y repetible',
      'Las pruebas automatizadas no reemplazan a las manuales: se complementan',
      'Las pruebas manuales son lentas para casos de regresión (verificar que nada se rompió)',
      'Las pruebas automatizadas no detectan errores visuales ni de UX',
      'Empieza con tests automatizados para la lógica más crítica',
    ],
    exercise: {
      description: 'Elige una funcionalidad de tu proyecto y escribe 3 casos de prueba para ella en lenguaje natural (sin código): "dado X, cuando hago Y, espero Z". Luego identifica cuáles serían fáciles de automatizar y cuáles requieren prueba manual.',
      hint: 'Los casos que involucran "abrir la app" o "ver con mis ojos" son candidatos a prueba manual. Los que involucran "función con datos de entrada → resultado" son candidatos a automatizar.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal ventaja de las pruebas automatizadas sobre las manuales?',
        options: [
          'Detectan errores de diseño visual',
          'Se ejecutan en milisegundos y son perfectamente repetibles',
          'Son más baratas de implementar al inicio',
          'No requieren que el desarrollador entienda el código',
        ],
        correctAnswer: 'Se ejecutan en milisegundos y son perfectamente repetibles',
        correctFeedback: 'Correcto. Las pruebas automatizadas corren en milisegundos y siempre verifican exactamente los mismos casos. No olvidan nada ni se cansan.',
        incorrectFeedback: 'Las pruebas automatizadas no detectan errores visuales. Su ventaja principal es velocidad y repetibilidad: verifican el mismo conjunto de casos en milisegundos cada vez que cambias algo.',
      },
      {
        question: '¿Para qué tipo de verificación son mejores las pruebas manuales?',
        options: [
          'Para cálculos matemáticos complejos',
          'Para la experiencia visual y el flujo completo de la aplicación',
          'Para verificar que todos los imports funcionan',
          'Para probar cada función individualmente',
        ],
        correctAnswer: 'Para la experiencia visual y el flujo completo de la aplicación',
        correctFeedback: 'Correcto. Las pruebas manuales son insustituibles para verificar que la interfaz se ve bien, que los flujos de usuario son intuitivos y que la experiencia general es correcta.',
        incorrectFeedback: 'Los cálculos e imports se verifican mejor con tests automatizados. Las pruebas manuales brillan donde los ojos humanos son necesarios: verificar que la UI se ve correctamente y que la experiencia del usuario funciona bien.',
      },
      {
        question: '¿Qué NO pueden detectar los tests automatizados?',
        options: [
          'Errores en cálculos matemáticos',
          'Fallos en la validación de formularios',
          'Errores visuales como colores incorrectos o elementos mal alineados',
          'Errores de lógica en funciones puras',
        ],
        correctAnswer: 'Errores visuales como colores incorrectos o elementos mal alineados',
        correctFeedback: 'Correcto. Los tests automatizados básicos verifican lógica, no aspecto visual. Un botón mal alineado o un color incorrecto requieren prueba manual (o tests visuales especializados).',
        incorrectFeedback: 'Los tests automatizados pueden verificar cálculos, validaciones y lógica perfectamente. Lo que no pueden hacer es "ver" errores visuales: colores, alineaciones, tipografía. Eso requiere revisión humana.',
      },
      {
        question: '¿Cuál es la combinación ideal de pruebas?',
        options: [
          'Solo pruebas manuales para todo',
          'Solo pruebas automatizadas para todo',
          'Automatizadas para lógica de negocio, manuales para flujo visual y UX',
          'Manuales primero, automatizadas después como respaldo',
        ],
        correctAnswer: 'Automatizadas para lógica de negocio, manuales para flujo visual y UX',
        correctFeedback: 'Correcto. Las pruebas automatizadas cubren la lógica (rápido y repetible) y las manuales cubren lo visual y la experiencia del usuario. Se complementan.',
        incorrectFeedback: 'La mejor estrategia combina ambas: tests automatizados para lógica (cálculos, validaciones, transformaciones de datos) y pruebas manuales para verificar la experiencia visual y el flujo del usuario.',
      },
    ],
  },
  {
    slug: 'funciones-faciles-de-probar',
    title: 'Funciones fáciles de probar',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 226,
    description: 'Aprende a escribir funciones puras y pequeñas que sean más fáciles de probar.',
    explanation: `La **testabilidad** es una característica de diseño. El código bien diseñado es fácil de testear.

**¿Qué hace a una función fácil de testear?**

**1. Es una función pura:**
- Dado el mismo input, siempre devuelve el mismo output
- No tiene efectos secundarios (no modifica estado global, no hace llamadas a APIs, no modifica el DOM)

**2. Hace una sola cosa:**
- Tiene una responsabilidad clara
- Nombre que describe exactamente qué hace

**3. Sus dependencias son explícitas:**
- Recibe todo lo que necesita como parámetros
- No depende de variables globales

**Función difícil de testear:**
\`\`\`javascript
function guardarYActualizar() {
  // Depende de variable global "tareas"
  // Modifica el DOM
  // Guarda en localStorage
  // Hace cálculos
}
\`\`\`

**Función fácil de testear:**
\`\`\`javascript
function calcularPorcentajeCompletado(tareas) {
  if (tareas.length === 0) return 0
  const completadas = tareas.filter(t => t.completada).length
  return Math.round((completadas / tareas.length) * 100)
}
\`\`\`

Esta función recibe datos → devuelve datos. Sin efectos secundarios. Perfecta para testear.`,
    codeExample: `// ❌ Difícil de testear: efectos secundarios y dependencias globales
let tareas = []

function agregarYRenderizar(texto) {
  // Modifica estado global
  tareas.push({ texto, completada: false })
  // Modifica el DOM
  const li = document.createElement('li')
  li.textContent = texto
  document.querySelector('#lista').appendChild(li)
  // Guarda en localStorage
  localStorage.setItem('tareas', JSON.stringify(tareas))
}

// ✅ Fácil de testear: separar lógica de efectos
function crearTarea(texto) {
  return { texto: texto.trim(), completada: false, id: Date.now() }
}

function filtrarCompletadas(tareas) {
  return tareas.filter(t => t.completada)
}

function calcularPorcentaje(tareas) {
  if (tareas.length === 0) return 0
  return Math.round(
    (tareas.filter(t => t.completada).length / tareas.length) * 100
  )
}

function ordenarPorFecha(tareas) {
  return [...tareas].sort((a, b) => b.fecha - a.fecha)
}

// Estas 4 funciones son puras: input → output, sin efectos.
// Los efectos (DOM, localStorage) se manejan por separado.

// Tests simples:
// crearTarea("comprar") → { texto: "comprar", completada: false }
// filtrarCompletadas([{completada: true}, {completada: false}]) → 1 elemento
// calcularPorcentaje([{completada:true}, {completada:false}]) → 50`,
    keyPoints: [
      'Las funciones puras (mismo input → mismo output) son las más fáciles de testear',
      'Una función sin efectos secundarios no modifica el DOM ni variables globales',
      'Separar la lógica de los efectos secundarios mejora la testabilidad',
      'Las dependencias deben ser parámetros, no variables globales',
      'Funciones pequeñas con una responsabilidad son más fáciles de testear',
      'Si una función es difícil de testear, probablemente está haciendo demasiado',
    ],
    exercise: {
      description: 'Toma la función guardarYActualizar (u otra función con efectos secundarios de tu proyecto) y divídela: extrae la lógica pura (cálculos, transformaciones) en funciones separadas sin efectos. Verifica que puedes llamarlas directamente en la consola con datos de prueba.',
      hint: 'Pregúntate: ¿qué devuelve esta función si le doy estos datos? Si la respuesta es "depende del estado de la aplicación", tiene efectos secundarios que debes separar.',
    },
    quiz: [
      {
        question: '¿Qué es una función pura?',
        options: [
          'Una función que no usa variables',
          'Una función que siempre devuelve el mismo resultado para los mismos argumentos sin efectos secundarios',
          'Una función que solo usa números',
          'Una función que no tiene más de 5 líneas',
        ],
        correctAnswer: 'Una función que siempre devuelve el mismo resultado para los mismos argumentos sin efectos secundarios',
        correctFeedback: 'Correcto. Una función pura es predecible: mismos inputs → mismo output, sin modificar nada externo. Eso la hace trivial de testear.',
        incorrectFeedback: 'Una función pura tiene dos características: 1) mismo input siempre produce el mismo output, 2) no tiene efectos secundarios (no modifica el DOM, localStorage, variables globales, ni hace peticiones).',
      },
      {
        question: '¿Cuál de estas funciones es más fácil de testear?',
        options: [
          'function guardar() { localStorage.setItem("k", JSON.stringify(tareas)) }',
          'function calcularTotal(items) { return items.reduce((sum, i) => sum + i.precio, 0) }',
          'function actualizar() { document.querySelector("#lista").innerHTML = "" }',
          'function cargar() { return JSON.parse(localStorage.getItem("k")) }',
        ],
        correctAnswer: 'function calcularTotal(items) { return items.reduce((sum, i) => sum + i.precio, 0) }',
        correctFeedback: 'Correcto. calcularTotal recibe datos y devuelve un número. No tiene efectos secundarios. Es una función pura: fácil de testear con diferentes arrays de items.',
        incorrectFeedback: 'calcularTotal es la función pura: recibe un array y devuelve un número sin modificar nada externo. Las otras funciones modifican localStorage o el DOM, lo que complica el testing.',
      },
      {
        question: '¿Qué es un efecto secundario en una función?',
        options: [
          'Un error que ocurre a veces y otras no',
          'Cualquier modificación que la función hace fuera de su propio scope',
          'Un valor de retorno inesperado',
          'Una función que tarda mucho en ejecutarse',
        ],
        correctAnswer: 'Cualquier modificación que la función hace fuera de su propio scope',
        correctFeedback: 'Correcto. Un efecto secundario es cualquier cambio observable fuera de la función: modificar el DOM, guardar en localStorage, actualizar variables globales, hacer peticiones HTTP.',
        incorrectFeedback: 'Un efecto secundario es cualquier cambio que la función hace fuera de su propio ámbito: modificar el DOM, variables globales, localStorage, o hacer llamadas a APIs. Dificultan el testing porque el resultado depende del estado externo.',
      },
      {
        question: '¿Por qué separar la lógica pura de los efectos secundarios mejora el código?',
        options: [
          'Porque el código con efectos secundarios es siempre incorrecto',
          'Porque la lógica pura es testeable y los efectos pueden probarse manualmente o con mocks',
          'Porque JavaScript no permite tener efectos secundarios',
          'Porque los efectos secundarios causan errores de rendimiento',
        ],
        correctAnswer: 'Porque la lógica pura es testeable y los efectos pueden probarse manualmente o con mocks',
        correctFeedback: 'Correcto. La lógica pura (calcular, transformar, validar) se testea automáticamente. Los efectos (DOM, localStorage) se verifican manualmente o con herramientas especializadas.',
        incorrectFeedback: 'Los efectos secundarios son necesarios (sin ellos, la app no hace nada visible). La clave es separarlos: pones la lógica pura en funciones testtables y los efectos en funciones de "orquestación" más difíciles de testear.',
      },
    ],
  },
  {
    slug: 'introduccion-vitest',
    title: 'Introducción a Vitest',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 227,
    description: 'Aprende qué es Vitest y cómo puede ayudarte a escribir pruebas en proyectos JavaScript modernos.',
    explanation: `**Vitest** es un framework de testing moderno diseñado para proyectos con Vite. Es rápido, fácil de configurar y usa la misma sintaxis que Jest (el framework de testing más popular).

**¿Por qué Vitest y no Jest?**
- Funciona nativamente con Vite (sin configuración extra)
- Es más rápido que Jest en proyectos con Vite
- Compatible con la sintaxis de Jest (si sabes Jest, sabes Vitest)
- Soporte nativo para módulos ES (import/export)

**Instalación:**
\`\`\`
npm install -D vitest
\`\`\`

**Configurar script en package.json:**
\`\`\`json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run"
  }
}
\`\`\`

**Diferencia entre modos:**
- \`npm test\` → modo watch (se ejecuta automáticamente al guardar)
- \`npm run test:run\` → ejecuta una vez y termina

**¿Dónde van los archivos de test?**
Por convención: junto al archivo que testea, con sufijo \`.test.js\`:
\`\`\`
src/
├── utils/
│   ├── math.js
│   └── math.test.js    ← tests de math.js
├── storage.js
└── storage.test.js     ← tests de storage.js
\`\`\``,
    codeExample: `// 1. Instalar Vitest:
// npm install -D vitest

// 2. Agregar scripts a package.json:
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "test:run": "vitest run"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "vitest": "^1.6.0"
  }
}

// 3. Crear archivo de tests: src/utils/math.test.js
import { describe, test, expect } from 'vitest'
import { sumar, restar, multiplicar } from './math.js'

describe('Funciones matemáticas', () => {
  test('sumar suma dos números', () => {
    expect(sumar(2, 3)).toBe(5)
  })

  test('restar resta dos números', () => {
    expect(restar(10, 4)).toBe(6)
  })

  test('multiplicar multiplica dos números', () => {
    expect(multiplicar(3, 4)).toBe(12)
  })
})

// 4. Ejecutar tests:
// npm test
// → muestra resultados en la terminal
// → se actualiza automáticamente al guardar archivos`,
    keyPoints: [
      'Vitest es un framework de testing moderno diseñado para proyectos Vite',
      'Se instala como devDependency: npm install -D vitest',
      'Se configura un script "test": "vitest" en package.json',
      'Los archivos de test usan el sufijo .test.js por convención',
      'npm test ejecuta en modo watch; npm run test:run ejecuta una vez',
      'La sintaxis es compatible con Jest, el framework más popular',
    ],
    exercise: {
      description: 'En tu proyecto Vite, instala Vitest con npm install -D vitest. Agrega los scripts test y test:run al package.json. Crea un archivo src/utils/math.js con funciones sumar y restar, y un archivo src/utils/math.test.js con 2 tests básicos. Ejecuta npm run test:run.',
      hint: 'Necesitas que Vitest pueda encontrar los archivos. Por defecto busca archivos con extensión .test.js o .spec.js. El archivo math.test.js debe importar de math.js con ruta relativa.',
    },
    quiz: [
      {
        question: '¿Por qué Vitest es una buena elección para proyectos con Vite?',
        options: [
          'Porque es el único framework de testing disponible',
          'Porque está diseñado para funcionar nativamente con Vite sin configuración extra',
          'Porque es más antiguo que Jest y más estable',
          'Porque permite testear CSS directamente',
        ],
        correctAnswer: 'Porque está diseñado para funcionar nativamente con Vite sin configuración extra',
        correctFeedback: 'Correcto. Vitest está diseñado específicamente para proyectos Vite. Comparte la configuración y maneja módulos ES nativamente, sin necesidad de configuraciones adicionales.',
        incorrectFeedback: 'Jest es más antiguo y más popular, no Vitest. Vitest brilla por su integración nativa con Vite: usa la misma configuración, maneja módulos ES y no requiere setup adicional.',
      },
      {
        question: '¿Cómo se instala Vitest?',
        options: [
          'npm install vitest',
          'npm install -D vitest',
          'npm install --global vitest',
          'npm create vitest',
        ],
        correctAnswer: 'npm install -D vitest',
        correctFeedback: 'Correcto. Vitest se instala como devDependency (-D) porque solo lo usa el desarrollador para correr tests, no los usuarios finales de la aplicación.',
        incorrectFeedback: 'Vitest es una herramienta de desarrollo, así que se instala como devDependency con -D. npm install sin -D lo pondría en dependencies de producción, lo cual no tiene sentido.',
      },
      {
        question: '¿Cuál es la convención para nombrar archivos de test?',
        options: [
          'tests/test-math.js',
          'math.test.js (junto al archivo que testea)',
          '__tests__/math.js (en carpeta separada)',
          'No hay convención establecida',
        ],
        correctAnswer: 'math.test.js (junto al archivo que testea)',
        correctFeedback: 'Correcto. La convención más común es poner el archivo de test junto al archivo que testea con el sufijo .test.js. Esto hace fácil ver qué tiene tests y qué no.',
        incorrectFeedback: 'La convención más recomendada es poner el archivo de test junto al archivo original con sufijo .test.js: math.js → math.test.js. Así es fácil ver qué tiene tests.',
      },
      {
        question: '¿Cuál es la diferencia entre npm test y npm run test:run?',
        options: [
          'Son exactamente iguales',
          'npm test ejecuta en modo watch (continuo); npm run test:run ejecuta una vez y termina',
          'npm run test:run solo corre los tests fallidos',
          'npm test corre más lento que npm run test:run',
        ],
        correctAnswer: 'npm test ejecuta en modo watch (continuo); npm run test:run ejecuta una vez y termina',
        correctFeedback: 'Correcto. En modo watch (npm test), Vitest queda escuchando cambios y re-ejecuta los tests automáticamente. test:run es para CI/CD o para verificar rápidamente.',
        incorrectFeedback: 'La diferencia es el modo de ejecución: npm test inicia Vitest en modo watch (queda corriendo, re-ejecuta al cambiar archivos). npm run test:run ejecuta los tests una vez y termina.',
      },
    ],
  },
  {
    slug: 'crear-prueba-simple',
    title: 'Crear una prueba simple',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 228,
    description: 'Aprende a crear tu primera prueba usando describe, it/test y expect.',
    explanation: `La estructura básica de un test en Vitest (y Jest) usa tres elementos principales:

**describe:** agrupa tests relacionados
**test (o it):** define un caso de prueba individual
**expect:** verifica que el resultado es el esperado

**Sintaxis básica:**
\`\`\`javascript
import { describe, test, expect } from 'vitest'

describe('nombre del grupo', () => {
  test('descripción de lo que verifica', () => {
    // Arrange: prepara los datos
    const input = 5

    // Act: ejecuta la función
    const resultado = miFuncion(input)

    // Assert: verifica el resultado
    expect(resultado).toBe(25)
  })
})
\`\`\`

**Matchers más comunes:**

| Matcher | Uso |
|---------|-----|
| \`.toBe(valor)\` | Igualdad estricta (===) |
| \`.toEqual(objeto)\` | Igualdad de contenido (para arrays/objetos) |
| \`.toBeTruthy()\` | El valor es truthy |
| \`.toBeFalsy()\` | El valor es falsy |
| \`.toContain(elemento)\` | Array contiene el elemento |
| \`.toHaveLength(n)\` | Array/string tiene longitud n |
| \`.toThrow()\` | La función lanza un error |

**AAA: el patrón para escribir tests:**
- **Arrange:** preparar los datos de prueba
- **Act:** ejecutar la función que se testea
- **Assert:** verificar que el resultado es el esperado`,
    codeExample: `// src/utils/tareas.js
export function crearTarea(texto) {
  if (!texto || !texto.trim()) throw new Error('El texto no puede estar vacío')
  return {
    texto: texto.trim(),
    completada: false,
    id: Date.now(),
  }
}

export function filtrarPendientes(tareas) {
  return tareas.filter(t => !t.completada)
}

export function contarPorEstado(tareas) {
  return {
    completadas: tareas.filter(t => t.completada).length,
    pendientes: tareas.filter(t => !t.completada).length,
  }
}

// src/utils/tareas.test.js
import { describe, test, expect } from 'vitest'
import { crearTarea, filtrarPendientes, contarPorEstado } from './tareas.js'

describe('crearTarea', () => {
  test('crea una tarea con el texto dado', () => {
    const tarea = crearTarea('comprar leche')
    expect(tarea.texto).toBe('comprar leche')
    expect(tarea.completada).toBe(false)
  })

  test('elimina espacios del texto', () => {
    const tarea = crearTarea('  estudiar  ')
    expect(tarea.texto).toBe('estudiar')
  })

  test('lanza error si el texto está vacío', () => {
    expect(() => crearTarea('')).toThrow('El texto no puede estar vacío')
  })
})

describe('filtrarPendientes', () => {
  test('devuelve solo las tareas no completadas', () => {
    const tareas = [
      { id: 1, completada: true },
      { id: 2, completada: false },
      { id: 3, completada: false },
    ]
    const pendientes = filtrarPendientes(tareas)
    expect(pendientes).toHaveLength(2)
  })
})`,
    keyPoints: [
      'describe agrupa tests relacionados bajo un nombre común',
      'test (o it) define un caso de prueba con una descripción clara',
      'expect(valor).toBe(esperado) verifica igualdad estricta',
      'toEqual verifica contenido de objetos y arrays (no referencia)',
      'El patrón AAA: Arrange (preparar), Act (ejecutar), Assert (verificar)',
      'Cada test debería verificar exactamente una cosa',
    ],
    exercise: {
      description: 'Crea un archivo src/utils/validaciones.js con una función validarTexto(texto, maxLength) que devuelva true si el texto no está vacío y tiene menos de maxLength caracteres. Crea src/utils/validaciones.test.js con al menos 4 tests: texto válido, texto vacío, texto muy largo, y texto con solo espacios.',
      hint: 'Para el caso de texto con solo espacios, usa texto.trim() en la validación. El test debe verificar que " " (solo espacios) se considera inválido.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre .toBe() y .toEqual()?',
        options: [
          'Son exactamente iguales',
          '.toBe() compara por referencia, .toEqual() compara por contenido',
          '.toBe() solo funciona con números, .toEqual() con cualquier tipo',
          '.toEqual() es más estricto que .toBe()',
        ],
        correctAnswer: '.toBe() compara por referencia, .toEqual() compara por contenido',
        correctFeedback: 'Correcto. expect({a:1}).toBe({a:1}) falla porque son objetos distintos (diferente referencia). expect({a:1}).toEqual({a:1}) pasa porque el contenido es igual.',
        incorrectFeedback: 'La diferencia: .toBe() usa === (compara referencia para objetos). .toEqual() compara el contenido. Para arrays y objetos, siempre usa .toEqual(). Para strings, números y booleanos, .toBe() está bien.',
      },
      {
        question: '¿Cuál es el patrón AAA en testing?',
        options: [
          'Automatizar, Aprobar, Archivar',
          'Arrange (preparar), Act (ejecutar), Assert (verificar)',
          'API, Assert, Async',
          'Add, Apply, Adjust',
        ],
        correctAnswer: 'Arrange (preparar), Act (ejecutar), Assert (verificar)',
        correctFeedback: 'Correcto. AAA es el patrón estándar: Arrange (prepara los datos de prueba), Act (ejecuta la función), Assert (verifica el resultado con expect).',
        incorrectFeedback: 'AAA son las tres fases de un test: Arrange (prepara los datos), Act (ejecuta el código que testeas), Assert (verifica que el resultado es el esperado con expect).',
      },
      {
        question: '¿Cómo verificas que una función lanza un error en Vitest?',
        options: [
          'expect(funcion()).toBeError()',
          'expect(() => funcion()).toThrow()',
          'expect(funcion()).error === true',
          'try { funcion() } catch { pass() }',
        ],
        correctAnswer: 'expect(() => funcion()).toThrow()',
        correctFeedback: 'Correcto. Para testear que una función lanza un error, debes envolver la llamada en una arrow function: expect(() => miFuncion()).toThrow(). Puedes también pasar el mensaje esperado: .toThrow("mensaje").',
        incorrectFeedback: 'Para testear errores en Vitest, usa expect(() => miFuncion()).toThrow(). El wrapper de arrow function es necesario para que Vitest capture el error en lugar de que tu test falle.',
      },
      {
        question: '¿Cuántas cosas debería verificar cada test idealmente?',
        options: [
          'Lo más posible para ahorrar tiempo',
          'Exactamente una cosa',
          'Mínimo 5 para que sea exhaustivo',
          'Depende del tamaño de la función',
        ],
        correctAnswer: 'Exactamente una cosa',
        correctFeedback: 'Correcto. Un test que verifica una sola cosa es más fácil de entender y cuando falla, sabes exactamente qué está mal.',
        incorrectFeedback: 'La buena práctica es que cada test verifique exactamente una cosa. Si un test verifica múltiples aspectos, cuando falla no sabes cuál de ellos falló.',
      },
      {
        question: '¿Para qué sirve describe() en Vitest?',
        options: [
          'Para describir el proyecto en el informe de testing',
          'Para agrupar tests relacionados bajo un nombre común',
          'Para describir los parámetros de una función',
          'Es obligatorio para que los tests funcionen',
        ],
        correctAnswer: 'Para agrupar tests relacionados bajo un nombre común',
        correctFeedback: 'Correcto. describe() agrupa tests relacionados. Por ejemplo, todos los tests de una función van en un describe("nombreFuncion"). Organiza el output y hace más claro el reporte.',
        incorrectFeedback: 'describe() no es obligatorio pero organiza los tests. Agrupa casos relacionados bajo un nombre, haciendo el output más legible: "crearTarea → crea una tarea con el texto dado".',
      },
    ],
  },
  {
    slug: 'probar-casos-esperados',
    title: 'Probar casos esperados',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 229,
    description: 'Aprende a probar que una función devuelve el resultado correcto en situaciones normales.',
    explanation: `Los **casos esperados** (happy path) son las situaciones normales en las que la función funciona como se diseñó. Son el punto de partida del testing.

**¿Qué probar primero?**
1. El caso más común: la función usada con datos válidos típicos
2. Las condiciones de contorno: listas vacías, cero, un elemento
3. Variaciones de los parámetros: distintos valores válidos

**Ejemplos de casos esperados para una función de filtro:**
- Filtrar lista con mezcla de completadas/pendientes → devuelve las correctas
- Filtrar lista ya toda completada → devuelve lista completa
- Filtrar lista ya toda pendiente → devuelve lista vacía

**Escribir descripciones de tests como especificaciones:**
Los nombres de los tests documentan el comportamiento esperado:
\`\`\`javascript
test('devuelve el nombre en mayúsculas', ...)
test('calcula el 20% de descuento en precio de 100', ...)
test('devuelve array vacío si no hay tareas completadas', ...)
\`\`\`

Alguien que lea solo los nombres entiende qué hace la función.

**¿Cuántos tests de casos esperados necesito?**
Suficientes para tener confianza en que la función funciona en los usos normales. No hay un número exacto, pero empieza con 3-5 casos principales.`,
    codeExample: `// Función a testear: src/utils/formatear.js
export function formatearPrecio(precio, moneda = 'USD') {
  if (typeof precio !== 'number') return 'Precio inválido'
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: moneda,
  }).format(precio)
}

export function calcularDescuento(precio, porcentaje) {
  return Math.round(precio * (1 - porcentaje / 100) * 100) / 100
}

export function agruparPorCategoria(productos) {
  return productos.reduce((grupos, producto) => {
    const cat = producto.categoria
    return {
      ...grupos,
      [cat]: [...(grupos[cat] || []), producto],
    }
  }, {})
}

// src/utils/formatear.test.js
import { describe, test, expect } from 'vitest'
import { formatearPrecio, calcularDescuento, agruparPorCategoria } from './formatear.js'

describe('calcularDescuento', () => {
  test('aplica 10% de descuento a precio de 100', () => {
    expect(calcularDescuento(100, 10)).toBe(90)
  })

  test('aplica 25% de descuento a precio de 200', () => {
    expect(calcularDescuento(200, 25)).toBe(150)
  })

  test('con 0% de descuento devuelve el mismo precio', () => {
    expect(calcularDescuento(100, 0)).toBe(100)
  })
})

describe('agruparPorCategoria', () => {
  test('agrupa productos correctamente por categoría', () => {
    const productos = [
      { nombre: 'Manzana', categoria: 'frutas' },
      { nombre: 'Pan', categoria: 'panadería' },
      { nombre: 'Pera', categoria: 'frutas' },
    ]
    const grupos = agruparPorCategoria(productos)
    expect(grupos.frutas).toHaveLength(2)
    expect(grupos.panadería).toHaveLength(1)
  })
})`,
    keyPoints: [
      'Los casos esperados (happy path) prueban la función con datos válidos típicos',
      'Empieza con el caso más común y agrega variaciones',
      'Los nombres de los tests documentan el comportamiento esperado',
      'Prueba condiciones de contorno: lista vacía, un elemento, cero',
      '3-5 casos esperados bien elegidos dan buena cobertura inicial',
      'Los tests funcionan como especificaciones vivas del comportamiento',
    ],
    exercise: {
      description: 'Crea una función validarContrasena(contrasena) que devuelva { valida: boolean, errores: string[] }. Verifica que la contraseña tiene al menos 8 caracteres, al menos una mayúscula y al menos un número. Escribe tests para: contraseña válida, demasiado corta, sin mayúsculas, sin números.',
      hint: 'Para el test de contraseña válida, usa algo como "Password1" que cumple todas las condiciones. Verifica que errores está vacío y valida es true.',
    },
    quiz: [
      {
        question: '¿Qué es el "happy path" en testing?',
        options: [
          'El camino más corto de ejecución en el código',
          'Los casos normales en que la función recibe datos válidos y funciona como se diseñó',
          'Los tests que siempre pasan sin importar el input',
          'El primer test que escribes',
        ],
        correctAnswer: 'Los casos normales en que la función recibe datos válidos y funciona como se diseñó',
        correctFeedback: 'Correcto. El happy path son las situaciones normales de uso: la función recibe datos válidos típicos y devuelve el resultado esperado. Son el punto de partida del testing.',
        incorrectFeedback: 'El "happy path" son los flujos normales: función con datos válidos → resultado esperado. En contraste, los "edge cases" son situaciones límite o inusuales.',
      },
      {
        question: '¿Cómo debería redactarse el nombre de un test?',
        options: [
          'test001, test002, test003',
          'Describiendo qué hace la función cuando recibe X: "calcula el 10% de descuento"',
          'Con el nombre de la función solamente: "descuento"',
          'En inglés siempre, sin importar el idioma del proyecto',
        ],
        correctAnswer: 'Describiendo qué hace la función cuando recibe X: "calcula el 10% de descuento"',
        correctFeedback: 'Correcto. Los nombres descriptivos hacen que los tests funcionen como documentación. Cuando un test falla, el nombre explica qué funcionalidad está rota.',
        incorrectFeedback: 'Los nombres de tests deben describir el comportamiento esperado: "calcula el 10% de descuento en precio de 100". Evita nombres genéricos como test001 o solo el nombre de la función.',
      },
      {
        question: '¿Qué deberías probar para una función que recibe una lista de elementos?',
        options: [
          'Solo con una lista de 100 elementos',
          'Con lista normal, lista de un elemento y lista vacía',
          'Solo con el caso más común',
          'No se pueden testear funciones que reciben listas',
        ],
        correctAnswer: 'Con lista normal, lista de un elemento y lista vacía',
        correctFeedback: 'Correcto. Para funciones que reciben listas, los casos importantes son: lista normal (varios elementos), un elemento, y lista vacía. Cubren las condiciones de contorno.',
        incorrectFeedback: 'Para listas es importante probar varios casos: lista normal con varios elementos, lista de un solo elemento (caso límite) y lista vacía (caso especial). 100 elementos raramente revela más que una lista pequeña.',
      },
    ],
  },
  {
    slug: 'probar-casos-borde',
    title: 'Probar casos borde',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 230,
    description: 'Aprende a probar situaciones especiales como valores vacíos, números negativos, null o datos inesperados.',
    explanation: `Los **casos borde** (edge cases) son las situaciones límite o inusuales que pueden causar comportamientos inesperados.

**¿Por qué importan los casos borde?**
Muchos bugs en producción ocurren con datos que el desarrollador no consideró al escribir la función.

**Casos borde comunes a considerar:**

**Para strings:**
- String vacío: \`""\`
- Solo espacios: \`"   "\`
- String muy largo
- Caracteres especiales: emojis, acentos, comillas

**Para números:**
- Cero: \`0\`
- Número negativo: \`-5\`
- Número muy grande: \`Number.MAX_SAFE_INTEGER\`
- \`NaN\`
- \`Infinity\`

**Para arrays:**
- Array vacío: \`[]\`
- Array de un elemento: \`[1]\`
- Array con valores \`null\` o \`undefined\` dentro

**Para valores nulos:**
- \`null\`
- \`undefined\`
- \`0\` (falsy pero válido)
- \`false\` (falsy pero válido)

**Estrategia:**
1. Primero escribe los casos esperados (happy path)
2. Pregúntate: "¿qué pasa si le paso X en vez de Y?"
3. Escribe un test para cada caso que podría causar un bug`,
    codeExample: `// Función a testear:
export function obtenerPrimerElemento(array) {
  return array[0]
}

// Tests de casos borde:
import { describe, test, expect } from 'vitest'
import { obtenerPrimerElemento } from './array.js'

describe('obtenerPrimerElemento', () => {
  // Happy path
  test('devuelve el primer elemento de un array normal', () => {
    expect(obtenerPrimerElemento([1, 2, 3])).toBe(1)
  })

  // Casos borde
  test('devuelve undefined para array vacío', () => {
    expect(obtenerPrimerElemento([])).toBeUndefined()
  })

  test('devuelve el elemento si el array tiene solo uno', () => {
    expect(obtenerPrimerElemento(['único'])).toBe('único')
  })

  test('devuelve null si el primer elemento es null', () => {
    expect(obtenerPrimerElemento([null, 1, 2])).toBeNull()
  })
})

// Otro ejemplo: función de división
export function dividir(a, b) {
  if (b === 0) throw new Error('No se puede dividir entre cero')
  return a / b
}

describe('dividir', () => {
  test('divide correctamente 10 entre 2', () => {
    expect(dividir(10, 2)).toBe(5)
  })

  test('lanza error al dividir entre cero', () => {
    expect(() => dividir(10, 0)).toThrow('No se puede dividir entre cero')
  })

  test('divide número negativo correctamente', () => {
    expect(dividir(-10, 2)).toBe(-5)
  })
})`,
    keyPoints: [
      'Los casos borde son situaciones límite que revelan bugs ocultos',
      'Prueba siempre: vacío, nulo, cero, negativo, un elemento',
      'Los bugs en producción suelen ocurrir con datos que nadie consideró',
      'Después de los casos esperados, pregúntate: ¿qué pasa con X inusual?',
      'Un test de caso borde que falla descubre un bug real antes de producción',
      'Las funciones robustas manejan correctamente los casos borde',
    ],
    exercise: {
      description: 'Para la función calcularDescuento(precio, porcentaje) → precio con descuento, escribe tests de casos borde: precio de 0, descuento de 0%, descuento de 100%, descuento negativo (-10%), precio negativo. Para cada caso, decide qué resultado es razonable y ajusta la función si es necesario.',
      hint: 'No todos los casos borde son bugs. Un descuento del 100% es válido (precio = 0). Un precio negativo o descuento negativo podría necesitar validación. Decide el comportamiento esperado antes de escribir el test.',
    },
    quiz: [
      {
        question: '¿Cuál es un ejemplo de caso borde para una función que calcula el promedio de un array?',
        options: [
          'Un array de 5 números entre 1 y 10',
          'Un array vacío []',
          'Un array con el número 3',
          'Un array con números grandes como 1000',
        ],
        correctAnswer: 'Un array vacío []',
        correctFeedback: 'Correcto. Un array vacío es un caso borde: ¿cuál es el promedio de nada? La función podría devolver 0, undefined, NaN o lanzar un error. Es importante definir y testear ese comportamiento.',
        incorrectFeedback: 'Un array de 5 números normales es el happy path. El caso borde es el array vacío: ¿cuál es el promedio de 0 elementos? Esto puede causar una división entre cero si no se maneja.',
      },
      {
        question: '¿Cuándo deben escribirse los tests de casos borde en relación a los del happy path?',
        options: [
          'Antes que los del happy path',
          'Después de los del happy path, cuando ya tienes confianza en el caso normal',
          'Al mismo tiempo, en el mismo test',
          'Los casos borde no se testean con Vitest',
        ],
        correctAnswer: 'Después de los del happy path, cuando ya tienes confianza en el caso normal',
        correctFeedback: 'Correcto. Empieza por los casos normales para verificar que la función básica funciona. Luego agrega casos borde para cubrir situaciones inusuales.',
        incorrectFeedback: 'La buena práctica es primero el happy path (casos normales) y luego los edge cases. Así validas que lo básico funciona antes de preocuparte por situaciones inusuales.',
      },
      {
        question: '¿Por qué son importantes los tests de casos borde?',
        options: [
          'Porque el 90% de los usuarios usan la app con datos inusuales',
          'Porque muchos bugs en producción ocurren con datos que el desarrollador no consideró',
          'Porque son los más fáciles de escribir',
          'Porque los frameworks de testing los requieren obligatoriamente',
        ],
        correctAnswer: 'Porque muchos bugs en producción ocurren con datos que el desarrollador no consideró',
        correctFeedback: 'Correcto. Al desarrollar pensamos en el caso normal. Los bugs en producción aparecen cuando el usuario hace algo que no consideramos. Los edge cases testean exactamente esos escenarios.',
        incorrectFeedback: 'La mayoría de usuarios usan la app con datos normales. Sin embargo, los bugs en producción frecuentemente ocurren con datos que el desarrollador no anticipó. Los edge cases cubren esos escenarios.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-testing-js',
    title: 'Buenas prácticas al escribir pruebas',
    module: 'Testing básico en JavaScript',
    moduleNumber: 29,
    order: 231,
    description: 'Aprende buenas prácticas para que tus pruebas sean claras, útiles y fáciles de mantener.',
    explanation: `Las pruebas mal escritas son tan problemáticas como no tener pruebas. Aquí las prácticas que hacen a los tests duraderos y útiles.

**1. Un test, una verificación:**
Cada test debe verificar una sola cosa. Si falla, sabes exactamente qué está mal.

**2. Nombres descriptivos:**
El nombre del test describe el comportamiento que verifica, no el método.
\`\`\`javascript
// ❌ Mal
test('test 1')
test('función agregar')

// ✅ Bien
test('agrega la tarea al final de la lista')
test('rechaza tareas con texto vacío')
\`\`\`

**3. Tests independientes:**
Cada test debe funcionar solo, sin depender del orden ni del estado de otro test. Usa datos frescos en cada test.

**4. No testees detalles de implementación:**
Testea el comportamiento observable, no cómo está implementado internamente.
\`\`\`javascript
// ❌ Mal: testea implementación
expect(tareas._internalArray.length).toBe(2)

// ✅ Bien: testea comportamiento
expect(obtenerTareas()).toHaveLength(2)
\`\`\`

**5. Tests rápidos:**
Los tests deben ejecutarse rápido. Si un test tarda más de 1 segundo, probablemente hace algo que no debería (llamada HTTP real, espera de timer).

**6. Tests que fallan por la razón correcta:**
Un test debe fallar cuando la funcionalidad no funciona, no por problemas de configuración o datos.`,
    codeExample: `// ❌ Tests con malas prácticas:
let tareasGlobales = [] // estado compartido entre tests

test('test1', () => {
  tareasGlobales.push('tarea 1')
  expect(tareasGlobales.length).toBe(1) // depende del orden
})

test('test2', () => {
  // Si test1 no corrió, tareasGlobales está vacía
  expect(tareasGlobales[0]).toBe('tarea 1') // frágil
})

// ✅ Tests independientes con datos frescos:
import { describe, test, expect } from 'vitest'
import { agregarTarea, eliminarTarea } from './tareas.js'

describe('agregarTarea', () => {
  test('agrega la tarea al final de la lista', () => {
    // Arrange: datos frescos en cada test
    const tareas = [{ id: 1, texto: 'primera' }]

    // Act
    const resultado = agregarTarea(tareas, 'segunda')

    // Assert: verifica comportamiento, no implementación
    expect(resultado).toHaveLength(2)
    expect(resultado[resultado.length - 1].texto).toBe('segunda')
  })

  test('la nueva tarea inicia como no completada', () => {
    const resultado = agregarTarea([], 'nueva tarea')
    expect(resultado[0].completada).toBe(false)
  })

  test('rechaza texto vacío lanzando un error', () => {
    expect(() => agregarTarea([], '')).toThrow()
  })
})

describe('eliminarTarea', () => {
  test('elimina la tarea con el id dado', () => {
    const tareas = [
      { id: 1, texto: 'primera' },
      { id: 2, texto: 'segunda' },
    ]
    const resultado = eliminarTarea(tareas, 1)
    expect(resultado).toHaveLength(1)
    expect(resultado[0].id).toBe(2)
  })
})`,
    keyPoints: [
      'Un test debe verificar exactamente una cosa para ser claro al fallar',
      'Los tests deben ser independientes, sin compartir estado entre ellos',
      'Los nombres de tests describen el comportamiento, no el método',
      'Testea el comportamiento observable, no los detalles de implementación',
      'Los tests deben ejecutarse rápido (milisegundos, no segundos)',
      'Usa datos frescos en cada test con variables locales, no globales compartidas',
    ],
    exercise: {
      description: 'Revisa los tests que escribiste en los ejercicios anteriores. Verifica que: 1) cada test verifica una sola cosa, 2) los nombres son descriptivos, 3) cada test crea sus propios datos sin depender de otros tests. Corrige los que no cumplen estas prácticas.',
      hint: 'Busca variables declaradas fuera de los tests que comparten estado. Muévelas dentro de cada test o usa beforeEach() si Vitest lo soporta, para inicializarlas antes de cada test.',
    },
    quiz: [
      {
        question: '¿Por qué cada test debe tener datos frescos en lugar de compartir estado?',
        options: [
          'Para que los tests sean más lentos y detecten más errores',
          'Para que los tests sean independientes y no dependan del orden de ejecución',
          'Porque Vitest no permite variables compartidas',
          'Para que el código de tests sea más largo',
        ],
        correctAnswer: 'Para que los tests sean independientes y no dependan del orden de ejecución',
        correctFeedback: 'Correcto. Si los tests comparten estado, el resultado de uno puede afectar a otro. Con datos frescos en cada test, el orden no importa y los tests son predecibles.',
        incorrectFeedback: 'Si los tests comparten estado mutable, un test puede dejar el estado en un modo que rompe el siguiente. Con datos frescos en cada test, son completamente independientes y el orden no importa.',
      },
      {
        question: '¿Qué significa "no testear detalles de implementación"?',
        options: [
          'Que no debes leer el código de la función que testeas',
          'Que debes testear el comportamiento observable, no cómo está internamente implementado',
          'Que los tests no deben incluir código JavaScript',
          'Que solo debes testear funciones de una línea',
        ],
        correctAnswer: 'Que debes testear el comportamiento observable, no cómo está internamente implementado',
        correctFeedback: 'Correcto. Si testeas cómo está implementado (qué array interno usa, qué variable privada tiene), cuando refactorizas la implementación los tests fallan aunque la función siga funcionando igual.',
        incorrectFeedback: 'Testear la implementación significa verificar cómo funciona por dentro (qué estructura de datos usa). Debes testear el comportamiento externo: dado X, la función devuelve Y. Así puedes refactorizar libremente.',
      },
      {
        question: '¿Qué indica que un test es demasiado lento?',
        options: [
          'Que tiene más de 10 líneas',
          'Que tarda más de 1 segundo, posiblemente por hacer llamadas HTTP reales o esperar timers',
          'Que usa más de 3 expects',
          'Que el nombre es demasiado largo',
        ],
        correctAnswer: 'Que tarda más de 1 segundo, posiblemente por hacer llamadas HTTP reales o esperar timers',
        correctFeedback: 'Correcto. Los tests unitarios deben correr en milisegundos. Si tarda más de 1 segundo, probablemente hace algo que no debería: peticiones HTTP reales, esperas de setTimeout, acceso al disco.',
        incorrectFeedback: 'Un test lento suele significar que está haciendo algo que los tests unitarios no deberían: llamadas HTTP reales, timers de varios segundos, acceso al sistema de archivos. Los tests unitarios corren en milisegundos.',
      },
      {
        question: '¿Cuál es el principal riesgo de tener tests que siempre pasan sin importar el código?',
        options: [
          'Que el código sea más lento',
          'Que dan falsa seguridad: crees que todo está bien pero los bugs llegan a producción',
          'Que el repositorio de Git sea más grande',
          'Que Vitest consume más recursos',
        ],
        correctAnswer: 'Que dan falsa seguridad: crees que todo está bien pero los bugs llegan a producción',
        correctFeedback: 'Correcto. Un test que siempre pasa sin verificar realmente el comportamiento es peor que no tener tests: te hace creer que estás protegido cuando no lo estás.',
        incorrectFeedback: 'Los tests que siempre pasan dan falsa confianza. Si el test no falla cuando la función está rota, no está cumpliendo su función. Es peor que no tener tests porque te hace creer que estás cubierto.',
      },
    ],
  },
]

export const jsModule29: Module = {
  number: 29,
  title: 'Testing básico en JavaScript',
  level: 'nivel6',
  lessons: lessonsJsModule29,
}
