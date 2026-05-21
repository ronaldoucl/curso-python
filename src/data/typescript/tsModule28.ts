import type { Lesson, Module } from '@/types'

export const lessonsTsModule28: Lesson[] = [
  {
    slug: 'typescript-ayuda-testing',
    title: '¿Por qué TypeScript ayuda en testing?',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 223,
    description:
      'Aprende cómo TypeScript reduce errores antes de las pruebas y mejora la claridad de los casos de test.',
    explanation: `## ¿Por qué TypeScript ayuda en testing?

El testing y TypeScript trabajan juntos para hacer tu código más confiable. No se reemplazan — se complementan.

### La diferencia entre TypeScript y las pruebas

| | TypeScript | Pruebas |
|---|---|---|
| ¿Cuándo detecta errores? | Al compilar (antes de ejecutar) | Al ejecutar las pruebas |
| ¿Qué detecta? | Errores de tipos | Errores de lógica y comportamiento |
| ¿Reemplaza al otro? | No | No |

### TypeScript hace más fácil escribir pruebas

\`\`\`typescript
// Sin tipos — la función puede recibir cualquier cosa
function calcularTotal(items) {
  return items.reduce((acc, item) => acc + item.precio, 0)
}

// La prueba no sabe qué tipo de datos esperar
test('calcula el total', () => {
  // ¿Qué formato tiene items? No hay contexto
  expect(calcularTotal([???])).toBe(???)
})
\`\`\`

\`\`\`typescript
// Con tipos — la función es clara
interface Item {
  nombre: string
  precio: number
  cantidad: number
}

function calcularTotal(items: Item[]): number {
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
}

// La prueba tiene contexto claro
test('calcula el total correctamente', () => {
  const items: Item[] = [
    { nombre: 'Curso A', precio: 100, cantidad: 2 },
    { nombre: 'Curso B', precio: 50, cantidad: 1 },
  ]
  expect(calcularTotal(items)).toBe(250)
})
\`\`\`

### TypeScript elimina una categoría entera de errores

Con TypeScript, ya no necesitas pruebas para estos casos:

- Pasar un string donde se espera número
- Olvidar una propiedad requerida
- Llamar a un método que no existe en el tipo

Esto significa que puedes concentrarte en probar la **lógica real** del negocio.

### Los tipos como documentación de pruebas

Los tipos definen exactamente cuáles son las entradas y salidas válidas, lo que hace que sea muy claro qué casos de prueba escribir.`,
    codeExample: `// Ejemplo: TypeScript + tests trabajan juntos

// ─── tipos.ts ─────────────────────────────────────────────────
export interface Descuento {
  tipo: 'porcentaje' | 'monto_fijo'
  valor: number
}

export interface Producto {
  id: number
  nombre: string
  precio: number
}

// ─── precio.ts ────────────────────────────────────────────────
import type { Descuento, Producto } from './tipos'

export function aplicarDescuento(
  producto: Producto,
  descuento: Descuento
): number {
  if (descuento.tipo === 'porcentaje') {
    return producto.precio * (1 - descuento.valor / 100)
  }
  return Math.max(0, producto.precio - descuento.valor)
}

// ─── precio.test.ts ───────────────────────────────────────────
import { describe, it, expect } from 'vitest'
import { aplicarDescuento } from './precio'
import type { Producto, Descuento } from './tipos'

describe('aplicarDescuento', () => {
  const producto: Producto = { id: 1, nombre: 'Curso TypeScript', precio: 200 }

  it('aplica descuento por porcentaje', () => {
    const descuento: Descuento = { tipo: 'porcentaje', valor: 10 }
    expect(aplicarDescuento(producto, descuento)).toBe(180)
  })

  it('aplica descuento de monto fijo', () => {
    const descuento: Descuento = { tipo: 'monto_fijo', valor: 50 }
    expect(aplicarDescuento(producto, descuento)).toBe(150)
  })

  it('no devuelve precio negativo', () => {
    const descuento: Descuento = { tipo: 'monto_fijo', valor: 500 }
    expect(aplicarDescuento(producto, descuento)).toBe(0)
  })
})`,
    keyPoints: [
      'TypeScript detecta errores de tipos en compilación; las pruebas detectan errores de lógica en ejecución',
      'Juntos, TypeScript y las pruebas cubren diferentes categorías de errores',
      'Los tipos hacen que los tests sean más claros — sabes exactamente qué datos usar',
      'TypeScript elimina la necesidad de pruebas para errores de tipos básicos',
      'Puedes enfocarte en probar lógica real cuando TypeScript maneja los tipos',
    ],
    exercise: {
      description:
        'Crea una función `calcularEnvio(peso: number, destino: "local" | "nacional" | "internacional"): number` donde local < 1kg es 0, >= 1kg es 50; nacional es peso * 30; internacional es peso * 100. Luego escribe 3 casos de prueba que cubran casos diferentes.',
      hint: 'Para los tests, crea casos para: envío local gratis (0.5kg), envío local con cargo (2kg), envío nacional (1.5kg). Usa describe para agruparlos.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre lo que detecta TypeScript y lo que detectan las pruebas?',
        options: [
          'No hay diferencia — detectan los mismos errores',
          'TypeScript detecta errores de tipos en compilación; las pruebas detectan errores de lógica en ejecución',
          'TypeScript es más lento que las pruebas',
          'Las pruebas solo detectan errores visuales',
        ],
        correctAnswer: 'TypeScript detecta errores de tipos en compilación; las pruebas detectan errores de lógica en ejecución',
        correctFeedback: '¡Correcto! Son complementarios: TypeScript en compilación, pruebas en ejecución — cada uno detecta cosas diferentes.',
        incorrectFeedback: 'TypeScript detecta errores de tipos antes de ejecutar. Las pruebas verifican la lógica durante la ejecución. Se complementan.',
      },
      {
        question: '¿Por qué los tipos hacen más fácil escribir pruebas?',
        options: [
          'Porque generan pruebas automáticamente',
          'Porque definen claramente qué formas de datos son válidas como entradas',
          'Porque hacen las pruebas más cortas',
          'Porque TypeScript tiene un runner de pruebas integrado',
        ],
        correctAnswer: 'Porque definen claramente qué formas de datos son válidas como entradas',
        correctFeedback: '¡Correcto! Los tipos documentan qué datos son válidos — eso hace obvio qué casos de prueba escribir.',
        incorrectFeedback: 'Los tipos muestran exactamente qué forma tienen los datos esperados, haciendo evidente qué casos de prueba escribir.',
      },
      {
        question: '¿Cuál de estos errores NO necesita una prueba porque TypeScript ya lo detecta?',
        options: [
          'Calcular incorrectamente el descuento del 10%',
          'Aplicar descuento negativo al precio',
          'Pasar un string donde la función espera un número',
          'Dividir entre cero',
        ],
        correctAnswer: 'Pasar un string donde la función espera un número',
        correctFeedback: '¡Correcto! TypeScript detecta errores de tipos como pasar string donde se espera number. La lógica como dividir entre cero sí necesita prueba.',
        incorrectFeedback: 'Los errores de tipos como pasar string donde se espera número son detectados por TypeScript. Los errores de lógica necesitan pruebas.',
      },
      {
        question: '¿Cuál de estas afirmaciones describe mejor la relación entre TypeScript y las pruebas?',
        options: [
          'TypeScript reemplaza completamente la necesidad de pruebas',
          'Las pruebas reemplazan completamente TypeScript',
          'Se complementan: TypeScript verifica tipos, las pruebas verifican lógica de negocio',
          'Son herramientas independientes que no interactúan',
        ],
        correctAnswer: 'Se complementan: TypeScript verifica tipos, las pruebas verifican lógica de negocio',
        correctFeedback: '¡Correcto! Ninguno reemplaza al otro — cada uno cubre una categoría diferente de errores.',
        incorrectFeedback: 'TypeScript y las pruebas son complementarios. Usar ambos juntos da una cobertura de errores mucho más amplia.',
      },
      {
        question: 'Si tu función está bien tipada, ¿qué categoría de error ya no necesitas probar?',
        options: [
          'Errores de división entre cero',
          'Errores de lógica de negocio',
          'Errores de tipo como pasar null donde se espera un objeto',
          'Errores de red',
        ],
        correctAnswer: 'Errores de tipo como pasar null donde se espera un objeto',
        correctFeedback: '¡Correcto! TypeScript detecta errores de tipo en compilación, así que no necesitas pruebas para verificar que los tipos son correctos.',
        incorrectFeedback: 'Con TypeScript, los errores de tipos (pasar tipo incorrecto) ya no necesitan pruebas porque el compilador los detecta.',
      },
    ],
  },
  {
    slug: 'funciones-faciles-probar-typescript',
    title: 'Funciones fáciles de probar',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 224,
    description:
      'Aprende a escribir funciones puras, pequeñas y tipadas que sean fáciles de probar.',
    explanation: `## Funciones fáciles de probar

No todas las funciones son igual de fáciles de probar. Las funciones **puras** son las más fáciles: tienen entradas claras y producen salidas predecibles.

### ¿Qué es una función pura?

Una función pura:
1. Dado los mismos argumentos, siempre retorna el mismo resultado
2. No tiene efectos secundarios (no modifica estado externo, no hace peticiones, no escribe en disco)

\`\`\`typescript
// ✅ Función pura — fácil de probar
function calcularIVA(precio: number, tasa: number): number {
  return precio * (1 + tasa / 100)
}

// Siempre devuelve 121 con estos argumentos — fácil de probar
calcularIVA(100, 21)  // → 121
\`\`\`

\`\`\`typescript
// ❌ Función impura — difícil de probar
function obtenerFechaFormateada(): string {
  const ahora = new Date()  // Depende del momento exacto
  return ahora.toLocaleDateString('es-MX')
}
// ¿Cómo pruebas algo que cambia cada día?
\`\`\`

### Hacer funciones comprobables

\`\`\`typescript
// ❌ Difícil: fecha hardcodeada dentro
function calcularEdad(): number {
  const hoy = new Date()
  // ...
}

// ✅ Fácil: fecha como parámetro
function calcularEdad(nacimiento: Date, hoy: Date): number {
  const diff = hoy.getTime() - nacimiento.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
}

// En tests: pasas fechas conocidas
calcularEdad(new Date('2000-01-01'), new Date('2024-01-01'))  // → 24
\`\`\`

### Funciones pequeñas con tipos claros

\`\`\`typescript
// Función grande — difícil de probar
function procesarPedido(datos: any): any { ... }

// Funciones pequeñas — cada una es fácil de probar
function validarPedido(pedido: Pedido): string[] { ... }
function calcularTotal(items: Item[]): number { ... }
function aplicarDescuento(total: number, descuento: number): number { ... }
\`\`\``,
    codeExample: `// Funciones tipadas y fáciles de probar

// ─── utils.ts ─────────────────────────────────────────────────

// ✅ Pura y tipada — muy fácil de probar
export function calcularPorcentaje(valor: number, total: number): number {
  if (total === 0) return 0
  return Math.round((valor / total) * 100)
}

// ✅ Pura y tipada — fácil de probar
export function filtrarActivos<T extends { activo: boolean }>(items: T[]): T[] {
  return items.filter((item) => item.activo)
}

// ✅ Pura y tipada — date como parámetro para hacer testeable
export function estaVencido(fechaVencimiento: Date, ahora: Date): boolean {
  return ahora > fechaVencimiento
}

// ✅ Pura con tipos claros
export function formatearNombre(nombre: string, apellido: string): string {
  const n = nombre.trim()
  const a = apellido.trim()
  if (!n && !a) return ''
  return [n, a].filter(Boolean).join(' ')
}

// ─── utils.test.ts ────────────────────────────────────────────
import { describe, it, expect } from 'vitest'
import {
  calcularPorcentaje,
  filtrarActivos,
  estaVencido,
  formatearNombre,
} from './utils'

describe('calcularPorcentaje', () => {
  it('calcula 50% correctamente', () => {
    expect(calcularPorcentaje(5, 10)).toBe(50)
  })
  it('retorna 0 cuando total es 0', () => {
    expect(calcularPorcentaje(5, 0)).toBe(0)
  })
})

describe('estaVencido', () => {
  it('detecta fecha vencida', () => {
    const vencimiento = new Date('2023-01-01')
    const ahora = new Date('2024-01-01')
    expect(estaVencido(vencimiento, ahora)).toBe(true)
  })
  it('detecta fecha vigente', () => {
    const vencimiento = new Date('2025-01-01')
    const ahora = new Date('2024-01-01')
    expect(estaVencido(vencimiento, ahora)).toBe(false)
  })
})`,
    keyPoints: [
      'Las funciones puras son las más fáciles de probar — misma entrada, misma salida',
      'Evita efectos secundarios en funciones que quieres probar fácilmente',
      'Pasa dependencias como parámetros (fechas, IDs) en lugar de generarlos dentro',
      'Funciones pequeñas y bien tipadas son más fáciles de probar que funciones grandes',
      'Los genéricos tipados como filtrarActivos<T> funcionan para múltiples tipos de datos',
    ],
    exercise: {
      description:
        'Escribe una función `agruparPorCategoria(productos: Producto[]): Record<string, Producto[]>` donde Producto tiene nombre, precio y categoria. La función debe retornar un objeto donde cada clave es una categoría y el valor es un array de productos de esa categoría. Luego escribe 2 tests.',
      hint: 'Usa el método .reduce() para agrupar. El tipo Record<string, Producto[]> es un objeto donde las claves son strings y los valores son arrays de Producto.',
    },
    quiz: [
      {
        question: '¿Qué hace que una función sea "pura"?',
        options: [
          'Que no tenga comentarios',
          'Que dado los mismos argumentos siempre devuelva el mismo resultado y no tenga efectos secundarios',
          'Que esté escrita en TypeScript',
          'Que no use loops',
        ],
        correctAnswer: 'Que dado los mismos argumentos siempre devuelva el mismo resultado y no tenga efectos secundarios',
        correctFeedback: '¡Correcto! Una función pura es predecible y sin efectos secundarios — ideal para pruebas.',
        incorrectFeedback: 'Una función pura siempre devuelve el mismo resultado con los mismos argumentos y no modifica estado externo.',
      },
      {
        question: '¿Por qué es mejor pasar `ahora: Date` como parámetro en lugar de crear `new Date()` dentro de la función?',
        options: [
          'Porque new Date() es lento',
          'Porque permite controlar la fecha en los tests y hacer la función pura',
          'Porque TypeScript no admite new Date() en funciones',
          'Por convención — no tiene efecto real',
        ],
        correctAnswer: 'Porque permite controlar la fecha en los tests y hacer la función pura',
        correctFeedback: '¡Correcto! Si la fecha es un parámetro, puedes pasar fechas conocidas en los tests y la función es pura y predecible.',
        incorrectFeedback: 'Pasar la fecha como parámetro hace la función pura — puedes controlar exactamente qué fecha usa en los tests.',
      },
      {
        question: '¿Qué es un efecto secundario en el contexto de funciones?',
        options: [
          'Un error que ocurre en producción',
          'Modificar estado externo, hacer peticiones a la red, escribir en disco, o depender de algo fuera de los parámetros',
          'Una función que retorna múltiples valores',
          'Una función que tarda más de 1 segundo',
        ],
        correctAnswer: 'Modificar estado externo, hacer peticiones a la red, escribir en disco, o depender de algo fuera de los parámetros',
        correctFeedback: '¡Correcto! Los efectos secundarios son cualquier interacción con el mundo exterior — hacen las funciones difíciles de predecir en tests.',
        incorrectFeedback: 'Un efecto secundario es modificar estado externo, llamar APIs, escribir archivos. Las funciones con efectos son difíciles de probar.',
      },
      {
        question: '¿Por qué las funciones pequeñas son más fáciles de probar que las funciones grandes?',
        options: [
          'Porque TypeScript las compila más rápido',
          'Porque hacen menos cosas — tienen menos casos de prueba y es más claro qué están probando',
          'Porque las funciones grandes no pueden tener pruebas',
          'Por convención — no tiene efecto en la calidad',
        ],
        correctAnswer: 'Porque hacen menos cosas — tienen menos casos de prueba y es más claro qué están probando',
        correctFeedback: '¡Correcto! Una función con una responsabilidad tiene casos claros y pocos. Una función grande mezcla responsabilidades y se hace difícil de probar.',
        incorrectFeedback: 'Las funciones pequeñas tienen un propósito claro y pocos casos. Las funciones grandes mezclan responsabilidades y son difíciles de testear exhaustivamente.',
      },
      {
        question: '¿Qué ventaja tiene el genérico en filtrarActivos<T extends { activo: boolean }>(items: T[]): T[]?',
        options: [
          'Es más rápido en ejecución',
          'La función trabaja con cualquier objeto que tenga el campo activo sin perder el tipo específico',
          'Solo funciona con arrays',
          'TypeScript lo requiere para funciones con filter',
        ],
        correctAnswer: 'La función trabaja con cualquier objeto que tenga el campo activo sin perder el tipo específico',
        correctFeedback: '¡Correcto! El genérico con constraint permite reusar la función para Producto[], Usuario[], etc., conservando el tipo original.',
        incorrectFeedback: 'El genérico con constraint T extends { activo: boolean } permite que la función funcione con cualquier tipo que tenga ese campo.',
      },
    ],
  },
  {
    slug: 'vitest-con-typescript',
    title: 'Vitest con TypeScript',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 225,
    description:
      'Aprende a configurar y usar Vitest en un proyecto TypeScript.',
    explanation: `## Vitest con TypeScript

Vitest es el framework de testing más popular para proyectos modernos con TypeScript. Es rápido, compatible con la sintaxis de Jest, y tiene soporte nativo para TypeScript.

### Instalación

\`\`\`bash
npm install -D vitest
\`\`\`

### Configuración básica

\`\`\`typescript
// vite.config.ts o vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,       // Permite usar describe, it, expect sin imports
    environment: 'node', // O 'jsdom' para tests de browser
  },
})
\`\`\`

### Scripts en package.json

\`\`\`json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
\`\`\`

### Tu primer test con TypeScript

\`\`\`typescript
// suma.ts
export function suma(a: number, b: number): number {
  return a + b
}

// suma.test.ts
import { describe, it, expect } from 'vitest'
import { suma } from './suma'

describe('suma', () => {
  it('suma dos números positivos', () => {
    expect(suma(2, 3)).toBe(5)
  })

  it('suma número positivo y negativo', () => {
    expect(suma(5, -3)).toBe(2)
  })
})
\`\`\`

### Ejecutar los tests

\`\`\`bash
npx vitest          # Modo watch — re-ejecuta al guardar
npx vitest run      # Ejecuta una vez y cierra
\`\`\`

### Diferencia entre it y test

\`\`\`typescript
// Son idénticos — puedes usar cualquiera
it('hace algo', () => { ... })
test('hace algo', () => { ... })
\`\`\``,
    codeExample: `// Proyecto TypeScript con Vitest configurado

// ─── package.json ─────────────────────────────────────────────
// {
//   "scripts": {
//     "test": "vitest",
//     "test:run": "vitest run"
//   },
//   "devDependencies": {
//     "vitest": "^2.0.0",
//     "typescript": "^5.0.0"
//   }
// }

// ─── vitest.config.ts ─────────────────────────────────────────
// import { defineConfig } from 'vitest/config'
// export default defineConfig({
//   test: { globals: true }
// })

// ─── src/calculadora.ts ───────────────────────────────────────
export function sumar(a: number, b: number): number {
  return a + b
}

export function restar(a: number, b: number): number {
  return a - b
}

export function dividir(a: number, b: number): number {
  if (b === 0) throw new Error('No se puede dividir entre cero')
  return a / b
}

// ─── src/calculadora.test.ts ──────────────────────────────────
import { describe, it, expect } from 'vitest'
import { sumar, restar, dividir } from './calculadora'

describe('sumar', () => {
  it('suma correctamente', () => {
    expect(sumar(2, 3)).toBe(5)
  })

  it('suma números negativos', () => {
    expect(sumar(-1, -2)).toBe(-3)
  })
})

describe('restar', () => {
  it('resta correctamente', () => {
    expect(restar(10, 4)).toBe(6)
  })
})

describe('dividir', () => {
  it('divide correctamente', () => {
    expect(dividir(10, 2)).toBe(5)
  })

  it('lanza error al dividir entre cero', () => {
    expect(() => dividir(5, 0)).toThrow('No se puede dividir entre cero')
  })
})`,
    keyPoints: [
      'Vitest es el framework de testing recomendado para proyectos TypeScript modernos',
      'Se instala como devDependency y tiene soporte nativo para TypeScript',
      'globals: true permite usar describe, it, expect sin importarlos en cada archivo',
      'Los archivos de test van junto a los archivos que prueban, con sufijo .test.ts',
      'expect(() => fn()).toThrow() verifica que una función lance un error',
    ],
    exercise: {
      description:
        'Configura un mini-proyecto con TypeScript y Vitest: crea package.json con scripts, crea src/string-utils.ts con funciones `capitalizar(texto: string): string` y `contarPalabras(texto: string): number`. Luego crea los tests para ambas funciones con al menos 2 casos cada una.',
      hint: 'capitalizar hace que la primera letra sea mayúscula y el resto minúsculas. contarPalabras divide por espacios y cuenta. Recuerda el caso de string vacío.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando para ejecutar Vitest en modo watch (re-ejecuta al guardar)?',
        options: ['npx vitest run', 'npx vitest watch', 'npx vitest', 'npx vitest --live'],
        correctAnswer: 'npx vitest',
        correctFeedback: '¡Correcto! Sin argumentos, Vitest inicia en modo watch y re-ejecuta los tests al detectar cambios.',
        incorrectFeedback: 'Ejecutar "npx vitest" sin argumentos inicia el modo watch. "npx vitest run" ejecuta una vez y cierra.',
      },
      {
        question: '¿Cómo pruebas que una función lanza un error con Vitest?',
        options: [
          'expect(fn()).toError()',
          'expect(() => fn()).toThrow()',
          'try { fn() } catch { expect(true).toBe(true) }',
          'expect(fn).throws()',
        ],
        correctAnswer: 'expect(() => fn()).toThrow()',
        correctFeedback: '¡Correcto! Debes pasar la función envuelta en una arrow function para que Vitest capture el error.',
        incorrectFeedback: 'Para probar que lanza error: expect(() => fn()).toThrow(). Nota que fn va dentro de otra función para capturar la excepción.',
      },
      {
        question: '¿Cuál es la diferencia entre "it" y "test" en Vitest?',
        options: [
          '"test" es para async y "it" para sync',
          '"it" es más moderno que "test"',
          'Son idénticos — puedes usar cualquiera',
          '"test" pertenece a Vitest y "it" a Jest',
        ],
        correctAnswer: 'Son idénticos — puedes usar cualquiera',
        correctFeedback: '¡Correcto! "it" y "test" son aliases — hacen exactamente lo mismo.',
        incorrectFeedback: '"it" y "test" son completamente idénticos en Vitest. Son aliases del mismo bloque de prueba.',
      },
      {
        question: '¿Qué environment debes usar en vitest.config.ts para probar código que interactúa con el DOM?',
        options: ['node', 'browser', 'jsdom', 'window'],
        correctAnswer: 'jsdom',
        correctFeedback: '¡Correcto! jsdom simula el entorno del navegador en Node.js para tests que necesitan window, document, etc.',
        incorrectFeedback: 'Para tests que necesitan APIs del browser como window o document, usa environment: "jsdom" en la configuración de Vitest.',
      },
      {
        question: '¿Dónde deben estar ubicados los archivos de test según la convención de Vitest?',
        options: [
          'En una carpeta __tests__ en la raíz del proyecto',
          'Solo en src/tests/',
          'Junto a los archivos que prueban, con sufijo .test.ts o .spec.ts',
          'En la carpeta public/',
        ],
        correctAnswer: 'Junto a los archivos que prueban, con sufijo .test.ts o .spec.ts',
        correctFeedback: '¡Correcto! La convención es colocar suma.test.ts junto a suma.ts — facilita navegar y relacionar el código con sus tests.',
        incorrectFeedback: 'Los archivos de test van junto al código que prueban: suma.ts y suma.test.ts en el mismo directorio.',
      },
    ],
  },
  {
    slug: 'crear-pruebas-tipadas',
    title: 'Crear pruebas tipadas',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 226,
    description:
      'Aprende a escribir pruebas para funciones TypeScript usando describe, it/test y expect.',
    explanation: `## Crear pruebas tipadas

Las pruebas bien estructuradas son tan importantes como el código que prueban. TypeScript hace que las pruebas sean más claras y robustas.

### Estructura de una prueba

\`\`\`typescript
// 1. Arrange — preparar los datos
const usuario: Usuario = { id: 1, nombre: 'Ana', email: 'ana@email.com' }

// 2. Act — ejecutar la función
const resultado = formatearNombreUsuario(usuario)

// 3. Assert — verificar el resultado
expect(resultado).toBe('Ana')
\`\`\`

### Matchers de Vitest más usados

\`\`\`typescript
// Igualdad exacta (primitivos)
expect(suma(2, 3)).toBe(5)

// Igualdad profunda (objetos y arrays)
expect(obtenerUsuario(1)).toEqual({ id: 1, nombre: 'Ana' })

// Verdadero / falso
expect(esValido('email@test.com')).toBe(true)
expect(esValido('no-es-email')).toBe(false)

// Contiene (arrays)
expect(['a', 'b', 'c']).toContain('b')

// Longitud
expect([1, 2, 3]).toHaveLength(3)

// Definido / no definido
expect(buscarUsuario(1)).toBeDefined()
expect(buscarUsuario(99)).toBeUndefined()

// Null
expect(buscarPorId(-1)).toBeNull()

// Lanzar error
expect(() => dividir(5, 0)).toThrow()
expect(() => dividir(5, 0)).toThrow('División entre cero')
\`\`\`

### Datos tipados en tests

\`\`\`typescript
import type { Curso, Leccion } from './tipos'

// Datos de prueba tipados — TypeScript verifica que sean correctos
const cursoTest: Curso = {
  slug: 'typescript',
  titulo: 'TypeScript desde Cero',
  lecciones: 10,
  nivel: 'principiante',
}

// Error si falta un campo requerido:
const cursoIncorrecto: Curso = {
  slug: 'test',
  // Error: falta 'titulo', 'lecciones', 'nivel'
}
\`\`\`

### Tests async

\`\`\`typescript
it('obtiene el usuario correctamente', async () => {
  const usuario = await fetchUsuario(1)
  expect(usuario.nombre).toBe('Ana García')
})
\`\`\``,
    codeExample: `// Pruebas tipadas completas — usuario.test.ts

import { describe, it, expect } from 'vitest'

// ─── Tipos compartidos ────────────────────────────────────────
interface Usuario {
  id: number
  nombre: string
  email: string
  activo: boolean
}

// ─── Funciones bajo prueba ────────────────────────────────────
function formatearNombre(usuario: Usuario): string {
  return usuario.nombre.split(' ')[0]
}

function filtrarActivos(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter((u) => u.activo)
}

function buscarPorEmail(usuarios: Usuario[], email: string): Usuario | undefined {
  return usuarios.find((u) => u.email === email)
}

// ─── Datos de prueba tipados ──────────────────────────────────
const usuarios: Usuario[] = [
  { id: 1, nombre: 'Ana García', email: 'ana@email.com', activo: true },
  { id: 2, nombre: 'Carlos López', email: 'carlos@email.com', activo: false },
  { id: 3, nombre: 'María Torres', email: 'maria@email.com', activo: true },
]

// ─── Tests ────────────────────────────────────────────────────
describe('formatearNombre', () => {
  it('extrae el primer nombre', () => {
    const usuario: Usuario = usuarios[0]
    expect(formatearNombre(usuario)).toBe('Ana')
  })
})

describe('filtrarActivos', () => {
  it('filtra solo usuarios activos', () => {
    const activos = filtrarActivos(usuarios)
    expect(activos).toHaveLength(2)
    expect(activos.every((u) => u.activo)).toBe(true)
  })

  it('retorna array vacío cuando no hay activos', () => {
    const todos: Usuario[] = [{ id: 1, nombre: 'Test', email: 't@t.com', activo: false }]
    expect(filtrarActivos(todos)).toHaveLength(0)
  })
})

describe('buscarPorEmail', () => {
  it('encuentra usuario existente', () => {
    const usuario = buscarPorEmail(usuarios, 'ana@email.com')
    expect(usuario).toBeDefined()
    expect(usuario?.nombre).toBe('Ana García')
  })

  it('retorna undefined para email no encontrado', () => {
    const usuario = buscarPorEmail(usuarios, 'noexiste@email.com')
    expect(usuario).toBeUndefined()
  })
})`,
    keyPoints: [
      'Estructura tus pruebas con el patrón Arrange-Act-Assert para mayor claridad',
      'Usa datos de prueba tipados — TypeScript verifica que los datos de test sean correctos',
      'toBe() para primitivos, toEqual() para objetos y arrays',
      'toBeDefined() y toBeUndefined() para valores que pueden o no existir',
      'Los tests async necesitan async/await igual que el código normal',
    ],
    exercise: {
      description:
        'Crea pruebas para estas funciones: `esMayorDeEdad(edad: number): boolean` (true si edad >= 18) y `calcularDescuento(precio: number, porcentaje: number): number` (retorna el precio con descuento, nunca negativo). Escribe al menos 6 casos de prueba entre las dos.',
      hint: 'Para esMayorDeEdad prueba: exactamente 18, 17, 25. Para calcularDescuento prueba: descuento normal, descuento 0%, descuento que daría negativo.',
    },
    quiz: [
      {
        question: '¿Cuándo debes usar toEqual en lugar de toBe?',
        options: [
          'toBe es para strings, toEqual para números',
          'toEqual es para objetos y arrays — compara por estructura, toBe compara por referencia',
          'Son idénticos — ambos hacen lo mismo',
          'toBe es más estricto que toEqual',
        ],
        correctAnswer: 'toEqual es para objetos y arrays — compara por estructura, toBe compara por referencia',
        correctFeedback: '¡Correcto! toBe usa === (referencia), toEqual compara la estructura interna. Para objetos usa siempre toEqual.',
        incorrectFeedback: 'toBe compara con ===. Para objetos, dos objetos distintos con el mismo contenido no son === . Usa toEqual para comparar estructura.',
      },
      {
        question: '¿Qué ventaja tiene tipar los datos de prueba con interfaces?',
        options: [
          'Los tests corren más rápido',
          'TypeScript verifica que los datos de test tengan la forma correcta — un test mal formado es error de compilación',
          'Genera automáticamente los datos de prueba',
          'Solo es decorativo',
        ],
        correctAnswer: 'TypeScript verifica que los datos de test tengan la forma correcta — un test mal formado es error de compilación',
        correctFeedback: '¡Exacto! Si el tipo del dato de prueba es incorrecto, TypeScript lo detecta antes de ejecutar.',
        incorrectFeedback: 'Tipar los datos de test hace que TypeScript verifique su forma — si el dato de prueba es incorrecto, el error aparece en compilación.',
      },
      {
        question: '¿Cómo debes escribir un test async en Vitest?',
        options: [
          'it("nombre", async () => { const r = await fn(); expect(r).toBe(x) })',
          'asyncIt("nombre", () => { ... })',
          'it.async("nombre", () => { ... })',
          'Los tests no pueden ser async en Vitest',
        ],
        correctAnswer: 'it("nombre", async () => { const r = await fn(); expect(r).toBe(x) })',
        correctFeedback: '¡Correcto! El callback del it puede ser async — usa async/await igual que en el código normal.',
        incorrectFeedback: 'Para tests async, el callback del it/test es async: it("nombre", async () => { const r = await fn() }).',
      },
      {
        question: '¿Cuándo debes usar toEqual en lugar de toBe?',
        options: [
          'Siempre — toEqual es más preciso',
          'Para objetos y arrays, porque toBe compara referencias y dos objetos con el mismo contenido no son ===',
          'Para strings solamente',
          'toBe y toEqual son idénticos',
        ],
        correctAnswer: 'Para objetos y arrays, porque toBe compara referencias y dos objetos con el mismo contenido no son ===',
        correctFeedback: '¡Correcto! { a: 1 } !== { a: 1 } con ===, pero toEqual compara estructura y los considera iguales.',
        incorrectFeedback: 'toBe usa === (referencia). Para objetos usa toEqual que compara estructura. Dos objetos con el mismo contenido no son === en JavaScript.',
      },
      {
        question: '¿Qué matcher usas para verificar que un array tiene 3 elementos?',
        options: [
          'expect(arr.length).toBe(3)',
          'expect(arr).toHaveLength(3)',
          'expect(arr).toContain(3)',
          'expect(arr).toEqual(3)',
        ],
        correctAnswer: 'expect(arr).toHaveLength(3)',
        correctFeedback: '¡Correcto! toHaveLength es el matcher semántico de Vitest para verificar la longitud de arrays y strings.',
        incorrectFeedback: 'Usa toHaveLength para verificar longitudes — es más legible que expect(arr.length).toBe(3).',
      },
    ],
  },
  {
    slug: 'probar-casos-borde-typescript',
    title: 'Probar casos borde',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 227,
    description:
      'Aprende a probar valores vacíos, null, undefined, errores y entradas inesperadas.',
    explanation: `## Probar casos borde

Los bugs más frecuentes ocurren en los **casos borde**: valores vacíos, nulls, arrays vacíos, ceros, o entradas inesperadas.

### ¿Qué es un caso borde?

Es un valor o situación en el límite o extremo de lo que la función puede recibir:

- String vacío: \`''\`
- Array vacío: \`[]\`
- Número cero: \`0\`
- Número negativo: \`-1\`
- Null o undefined
- Valor máximo o mínimo posible
- Caracteres especiales: \`'<script>'\`

### Ejemplos de casos borde con tipos

\`\`\`typescript
// Función bajo prueba
function calcularPromedio(numeros: number[]): number {
  if (numeros.length === 0) return 0
  return numeros.reduce((a, b) => a + b, 0) / numeros.length
}

// Casos normales
expect(calcularPromedio([2, 4, 6])).toBe(4)

// Casos borde
expect(calcularPromedio([])).toBe(0)           // Array vacío
expect(calcularPromedio([0])).toBe(0)          // Solo cero
expect(calcularPromedio([-5, 5])).toBe(0)      // Suma cero
expect(calcularPromedio([1000000])).toBe(1000000)  // Número grande
\`\`\`

### Tipos que implican casos borde

Los tipos de TypeScript te dicen qué casos borde debes probar:

\`\`\`typescript
// Si la función acepta string | null, debes probar ambos
function procesarTexto(texto: string | null): string {
  if (texto === null) return ''
  return texto.trim().toUpperCase()
}

// Prueba el caso null explícitamente
expect(procesarTexto(null)).toBe('')
expect(procesarTexto('')).toBe('')
expect(procesarTexto('  hola  ')).toBe('HOLA')
\`\`\`

### Errores esperados

\`\`\`typescript
function obtenerElemento<T>(arr: T[], indice: number): T {
  if (indice < 0 || indice >= arr.length) {
    throw new RangeError(\`Índice \${indice} fuera de rango\`)
  }
  return arr[indice]
}

// Probar que lanza el error correcto
expect(() => obtenerElemento([1, 2, 3], -1)).toThrow(RangeError)
expect(() => obtenerElemento([1, 2, 3], 5)).toThrow('fuera de rango')
expect(obtenerElemento([1, 2, 3], 1)).toBe(2)
\`\`\``,
    codeExample: `// Casos borde completos — busqueda.test.ts

import { describe, it, expect } from 'vitest'

// ─── Función bajo prueba ──────────────────────────────────────
interface Producto {
  id: number
  nombre: string
  precio: number
  disponible: boolean
}

function buscarProductos(
  productos: Producto[],
  termino: string
): Producto[] {
  if (!termino.trim()) return []
  const t = termino.toLowerCase().trim()
  return productos.filter((p) => p.nombre.toLowerCase().includes(t))
}

function calcularTotalCarrito(productos: Producto[]): number {
  return productos
    .filter((p) => p.disponible)
    .reduce((total, p) => total + p.precio, 0)
}

// ─── Datos de prueba ──────────────────────────────────────────
const catalogo: Producto[] = [
  { id: 1, nombre: 'Curso TypeScript', precio: 200, disponible: true },
  { id: 2, nombre: 'Curso React', precio: 150, disponible: false },
  { id: 3, nombre: 'Curso TypeScript Pro', precio: 300, disponible: true },
]

// ─── Tests de casos borde ─────────────────────────────────────
describe('buscarProductos', () => {
  it('encuentra productos que coinciden', () => {
    const resultado = buscarProductos(catalogo, 'react')
    expect(resultado).toHaveLength(1)
    expect(resultado[0].id).toBe(2)
  })

  it('búsqueda vacía retorna array vacío', () => {
    expect(buscarProductos(catalogo, '')).toHaveLength(0)
  })

  it('búsqueda con solo espacios retorna array vacío', () => {
    expect(buscarProductos(catalogo, '   ')).toHaveLength(0)
  })

  it('búsqueda sin coincidencias retorna array vacío', () => {
    expect(buscarProductos(catalogo, 'python')).toHaveLength(0)
  })

  it('la búsqueda es case-insensitive', () => {
    expect(buscarProductos(catalogo, 'TYPESCRIPT')).toHaveLength(2)
  })

  it('funciona con catálogo vacío', () => {
    expect(buscarProductos([], 'react')).toHaveLength(0)
  })
})

describe('calcularTotalCarrito', () => {
  it('calcula el total de productos disponibles', () => {
    expect(calcularTotalCarrito(catalogo)).toBe(500) // 200 + 300
  })

  it('retorna 0 con carrito vacío', () => {
    expect(calcularTotalCarrito([])).toBe(0)
  })

  it('retorna 0 si todos están no disponibles', () => {
    const todos: Producto[] = catalogo.map((p) => ({ ...p, disponible: false }))
    expect(calcularTotalCarrito(todos)).toBe(0)
  })
})`,
    keyPoints: [
      'Los tipos de TypeScript te indican qué casos borde probar (string | null → probar null)',
      'Siempre prueba arrays vacíos, strings vacíos y cero para funciones que los aceptan',
      'Prueba valores en los límites: exactamente 0, exactamente 1, el máximo esperado',
      'Los errores esperados se prueban con expect(() => fn()).toThrow()',
      'Un buen conjunto de tests incluye casos felices Y casos borde',
    ],
    exercise: {
      description:
        'Crea una función `dividirTexto(texto: string, separador: string): string[]` que divide el texto por el separador. Escribe tests para: texto normal, texto vacío, separador vacío, texto sin el separador, texto con múltiples separadores consecutivos.',
      hint: 'Para separador vacío puedes lanzar un error. Para texto vacío retorna []. Usa String.prototype.split() internamente.',
    },
    quiz: [
      {
        question: '¿Por qué los tipos de TypeScript ayudan a identificar casos borde?',
        options: [
          'Porque TypeScript genera los casos borde automáticamente',
          'Porque el tipo indica qué valores válidos puede recibir la función, revelando los extremos',
          'Porque TypeScript solo acepta valores en el rango medio',
          'Los tipos no tienen relación con los casos borde',
        ],
        correctAnswer: 'Porque el tipo indica qué valores válidos puede recibir la función, revelando los extremos',
        correctFeedback: '¡Correcto! Si acepta string | null, sabes que debes probar null. Si acepta number[], debes probar []. Los tipos revelan los casos límite.',
        incorrectFeedback: 'El tipo de los parámetros muestra qué valores son válidos. Los valores extremos de ese tipo (null, [], 0) son los casos borde a probar.',
      },
      {
        question: '¿Qué debería retornar calcularPromedio([]) en lugar de dividir entre cero?',
        options: [
          'undefined',
          'NaN',
          'Un valor de default como 0',
          'Lanzar un error',
        ],
        correctAnswer: 'Un valor de default como 0',
        correctFeedback: '¡Correcto! Retornar un valor de default seguro como 0 (o lanzar un error descriptivo) es mejor que dejar que la división por cero produzca NaN.',
        incorrectFeedback: 'Cuando el array está vacío, retornar 0 o lanzar un RangeError descriptivo es mejor que producir NaN por división entre cero.',
      },
      {
        question: '¿Cómo verificas que una función lanza específicamente un RangeError?',
        options: [
          'expect(fn()).toThrow(RangeError)',
          'expect(() => fn()).toThrow(RangeError)',
          'expect(fn).throws(RangeError)',
          'try { fn() } catch (e) { expect(e).toBe(RangeError) }',
        ],
        correctAnswer: 'expect(() => fn()).toThrow(RangeError)',
        correctFeedback: '¡Correcto! La función va envuelta en una arrow function. Puedes pasar la clase del error o un string del mensaje.',
        incorrectFeedback: 'Para verificar el tipo de error: expect(() => fn()).toThrow(RangeError). Nota que fn va dentro de otra función para que Vitest capture la excepción.',
      },
      {
        question: '¿Qué caso borde debes probar si una función acepta string | null?',
        options: [
          'Solo el caso con un string válido',
          'Solo el caso con null',
          'Ambos: el caso con string válido, string vacío, y el caso con null',
          'No necesita prueba — TypeScript lo garantiza',
        ],
        correctAnswer: 'Ambos: el caso con string válido, string vacío, y el caso con null',
        correctFeedback: '¡Correcto! Si el tipo es string | null, debes probar null, string vacío y string con valor — son todos casos válidos del tipo.',
        incorrectFeedback: 'Si el tipo es string | null, los casos borde son: null, string vacío "", y un string normal. Todos son entradas válidas según el tipo.',
      },
      {
        question: '¿Cuál de estos es un caso borde al probar una función que acepta number[]?',
        options: [
          'Solo pasar [1, 2, 3]',
          'Solo pasar [0]',
          'Pasar [] (array vacío), [0], y un número negativo',
          'Pasar un string en lugar del array',
        ],
        correctAnswer: 'Pasar [] (array vacío), [0], y un número negativo',
        correctFeedback: '¡Correcto! Array vacío, cero y negativos son los casos extremos más comunes para funciones que aceptan arrays de números.',
        incorrectFeedback: 'Para number[] los casos borde son: array vacío [], array con solo ceros, y números negativos. Estos son los valores límite del tipo.',
      },
    ],
  },
  {
    slug: 'tipar-mocks-simples',
    title: 'Tipar mocks simples',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 228,
    description:
      'Aprende a crear mocks básicos con tipos claros para simular datos o funciones.',
    explanation: `## Tipar mocks simples

Los mocks son datos o funciones simuladas que usas en los tests para reemplazar dependencias externas (APIs, bases de datos, servicios).

### ¿Cuándo necesitas mocks?

Cuando tu función depende de algo externo que no controlas en el test:
- Una llamada a una API
- Una función de base de datos
- El tiempo actual
- Números aleatorios

### Mocks de datos con tipos

El tipo más simple de mock es simplemente datos tipados que simulan respuestas reales:

\`\`\`typescript
// En lugar de llamar a la API real, usas datos fijos
const usuariosMock: Usuario[] = [
  { id: 1, nombre: 'Ana García', email: 'ana@email.com', activo: true },
  { id: 2, nombre: 'Carlos López', email: 'carlos@email.com', activo: false },
]

// La función procesa los datos mock igual que los reales
const activos = filtrarActivos(usuariosMock)
expect(activos).toHaveLength(1)
\`\`\`

### Mocks de funciones con Vitest

\`\`\`typescript
import { vi } from 'vitest'

// Crear un mock de una función
const guardarMock = vi.fn<[string, number], Promise<boolean>>()

// Configurar qué devuelve
guardarMock.mockResolvedValue(true)

// Verificar que se llamó
expect(guardarMock).toHaveBeenCalled()
expect(guardarMock).toHaveBeenCalledWith('typescript', 1)
\`\`\`

### Cuando NO usar mocks complejos

Si puedes probar la función con datos directos, no uses mocks. Los mocks son para cuando:
- La dependencia es externa (API real, base de datos real)
- La dependencia es lenta
- La dependencia tiene efectos secundarios (enviar email, hacer cargo)

Para funciones puras, solo pasa los datos de prueba directamente.

### Inyección de dependencias tipada

\`\`\`typescript
// Función que acepta la dependencia como parámetro — fácil de testear
async function procesarPedido(
  pedido: Pedido,
  guardar: (pedido: Pedido) => Promise<boolean>  // Tipo de la dependencia
): Promise<boolean> {
  const valido = validarPedido(pedido)
  if (!valido) return false
  return guardar(pedido)
}

// En el test: pasa una función simple
const guardarFake = async (pedido: Pedido) => true
const resultado = await procesarPedido(pedidoTest, guardarFake)
\`\`\``,
    codeExample: `// mocks-simples.test.ts — diferentes estrategias de mock

import { describe, it, expect, vi } from 'vitest'

// ─── Tipos ────────────────────────────────────────────────────
interface Pedido {
  id: number
  productos: string[]
  total: number
}

interface ResultadoPedido {
  exito: boolean
  id: string
}

// ─── Función que depende de servicio externo ──────────────────
async function crearPedido(
  pedido: Pedido,
  // La dependencia se pasa como parámetro → fácil de mockear
  servicioPago: (total: number) => Promise<ResultadoPedido>
): Promise<ResultadoPedido | null> {
  if (pedido.total <= 0) return null
  if (pedido.productos.length === 0) return null
  return servicioPago(pedido.total)
}

// ─── Tests con mock simple ────────────────────────────────────
describe('crearPedido', () => {
  const pedidoValido: Pedido = {
    id: 1,
    productos: ['Curso TypeScript', 'Curso React'],
    total: 350,
  }

  it('procesa pedido válido correctamente', async () => {
    // Mock tipado de la función de pago
    const servicioPagoMock = vi.fn<[number], Promise<ResultadoPedido>>()
    servicioPagoMock.mockResolvedValue({ exito: true, id: 'TXN-001' })

    const resultado = await crearPedido(pedidoValido, servicioPagoMock)

    expect(resultado).toEqual({ exito: true, id: 'TXN-001' })
    expect(servicioPagoMock).toHaveBeenCalledWith(350)
  })

  it('rechaza pedido con total 0', async () => {
    const servicioPagoMock = vi.fn()

    const pedidoInvalido: Pedido = { id: 2, productos: ['Curso'], total: 0 }
    const resultado = await crearPedido(pedidoInvalido, servicioPagoMock)

    expect(resultado).toBeNull()
    expect(servicioPagoMock).not.toHaveBeenCalled()  // No llama al servicio
  })

  it('rechaza pedido sin productos', async () => {
    const servicioPagoMock = vi.fn()

    const sinProductos: Pedido = { id: 3, productos: [], total: 100 }
    const resultado = await crearPedido(sinProductos, servicioPagoMock)

    expect(resultado).toBeNull()
  })
})`,
    keyPoints: [
      'Los mocks más simples son datos tipados que simulan respuestas reales',
      'La inyección de dependencias hace que las funciones sean fáciles de testear sin mocks complejos',
      'vi.fn() crea mocks de funciones en Vitest con tipos si los especificas',
      'expect(mock).toHaveBeenCalledWith() verifica con qué argumentos se llamó el mock',
      'No uses mocks si puedes probar con datos directos — los mocks agregan complejidad',
    ],
    exercise: {
      description:
        'Crea una función `enviarNotificacion(usuario: Usuario, mensaje: string, emailService: (to: string, body: string) => Promise<void>): Promise<boolean>` que valida el email del usuario antes de enviarlo. Escribe tests usando vi.fn() para el emailService, verificando que se llame correctamente con email válido y que no se llame con email inválido.',
      hint: 'Valida que el email contenga @. Si no, retorna false sin llamar emailService. Usa expect(emailService).not.toHaveBeenCalled() para verificar.',
    },
    quiz: [
      {
        question: '¿Por qué la inyección de dependencias hace el testing más fácil?',
        options: [
          'Porque hace el código más rápido',
          'Porque permite pasar dependencias falsas directamente en los tests sin configuración compleja',
          'Porque TypeScript lo requiere para funciones async',
          'Por convención — no tiene efecto real en los tests',
        ],
        correctAnswer: 'Porque permite pasar dependencias falsas directamente en los tests sin configuración compleja',
        correctFeedback: '¡Correcto! Si la dependencia es un parámetro, en el test simplemente pasas una función fake — sin configuración compleja.',
        incorrectFeedback: 'La inyección de dependencias permite pasar en los tests cualquier implementación (real o fake) sin configuración adicional.',
      },
      {
        question: '¿Para qué sirve vi.fn() en Vitest?',
        options: [
          'Para inicializar variables en los tests',
          'Para crear una función simulada que puedes espiar y configurar qué devuelve',
          'Para importar módulos de forma automática',
          'Para lanzar errores controlados',
        ],
        correctAnswer: 'Para crear una función simulada que puedes espiar y configurar qué devuelve',
        correctFeedback: '¡Correcto! vi.fn() crea un mock de función que registra sus llamadas y puedes configurar con mockReturnValue o mockResolvedValue.',
        incorrectFeedback: 'vi.fn() crea una función simulada (mock) que registra cuándo y con qué argumentos se llama, y puedes programar qué devuelve.',
      },
      {
        question: '¿Cómo configuras que un vi.fn() devuelva una Promise resuelta con true?',
        options: [
          'mockFn.mockReturnValue(true)',
          'mockFn.mockResolvedValue(true)',
          'mockFn.resolve(true)',
          'vi.resolve(mockFn, true)',
        ],
        correctAnswer: 'mockFn.mockResolvedValue(true)',
        correctFeedback: '¡Correcto! mockResolvedValue configura el mock para que retorne Promise.resolve(true).',
        incorrectFeedback: 'Para configurar que devuelva una Promise resuelta usa mockResolvedValue. Para valores directos usa mockReturnValue.',
      },
      {
        question: '¿Cuándo NO debes usar mocks?',
        options: [
          'Nunca — siempre se deben usar mocks',
          'Cuando puedes probar la función con datos directos sin dependencias externas',
          'Cuando el código es TypeScript',
          'Cuando las pruebas son async',
        ],
        correctAnswer: 'Cuando puedes probar la función con datos directos sin dependencias externas',
        correctFeedback: '¡Correcto! Para funciones puras que solo procesan datos, pasa los datos directamente — los mocks agregan complejidad innecesaria.',
        incorrectFeedback: 'Los mocks solo son necesarios cuando la función depende de algo externo (API, BD, tiempo). Para funciones puras, pasa datos directamente.',
      },
      {
        question: '¿Cómo verificas que un mock NO fue llamado?',
        options: [
          'expect(mock).toBeFalse()',
          'expect(mock).toHaveBeenCalledTimes(0)',
          'expect(mock).not.toHaveBeenCalled()',
          'expect(mock).toBeUndefined()',
        ],
        correctAnswer: 'expect(mock).not.toHaveBeenCalled()',
        correctFeedback: '¡Correcto! .not.toHaveBeenCalled() verifica que el mock nunca fue invocado durante el test.',
        incorrectFeedback: 'Para verificar que un mock no fue llamado: expect(mock).not.toHaveBeenCalled(). Útil para confirmar que ciertas rutas de código no se ejecutaron.',
      },
    ],
  },
  {
    slug: 'calidad-codigo-typescript',
    title: 'Calidad de código con TypeScript',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 229,
    description:
      'Aprende cómo los tipos, pruebas, nombres claros y funciones pequeñas ayudan a mantener un proyecto saludable.',
    explanation: `## Calidad de código con TypeScript

La calidad del código va más allá de que funcione. Un código de calidad es fácil de entender, modificar y extender.

### Los pilares de la calidad con TypeScript

**1. Tipos explícitos**

\`\`\`typescript
// ❌ Difícil de entender
function p(d: any, t: any): any { ... }

// ✅ Claro desde los tipos
function calcularTotal(productos: Producto[], tasa: number): number { ... }
\`\`\`

**2. Nombres descriptivos**

\`\`\`typescript
// ❌ ¿Qué significa n?
const n = items.filter(i => i.a)

// ✅ Nombre que explica la intención
const productosActivos = productos.filter(p => p.activo)
\`\`\`

**3. Funciones pequeñas y con una responsabilidad**

\`\`\`typescript
// ❌ Función que hace todo
function procesarOrden(datos: any): any {
  // Validar, calcular, guardar, notificar... todo junto
}

// ✅ Funciones pequeñas con responsabilidades claras
function validarOrden(orden: Orden): string[]
function calcularTotalOrden(orden: Orden): number
async function guardarOrden(orden: Orden): Promise<string>
async function notificarOrden(orderId: string): Promise<void>
\`\`\`

**4. Evitar any**

\`\`\`typescript
// ❌ any desactiva toda la seguridad de TypeScript
function procesar(datos: any): any { ... }

// ✅ unknown si no sabes el tipo — obliga a verificar antes de usar
function procesar(datos: unknown): string {
  if (typeof datos !== 'string') throw new Error('Tipo inesperado')
  return datos.trim()
}
\`\`\`

**5. Consistencia**

Usa siempre el mismo estilo para:
- Interfaces vs type aliases
- Desestructuración vs acceso por punto
- Const vs let
- Comillas simples vs dobles

### Herramientas de calidad

- **ESLint** con @typescript-eslint — detecta patrones problemáticos
- **Prettier** — formato automático y consistente
- **TypeScript strict** — máxima seguridad de tipos`,
    codeExample: `// Antes y después: código con alta calidad

// ─── ❌ Código de baja calidad ────────────────────────────────
function proc(data: any): any {
  let r = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].s === true) {
      r = r + data[i].p * data[i].q
    }
  }
  if (r > 1000) {
    r = r - (r * 0.1)
  }
  return r
}

// ─── ✅ Código de alta calidad ────────────────────────────────
interface LineaCarrito {
  nombre: string
  precio: number
  cantidad: number
  seleccionado: boolean
}

const DESCUENTO_ALTO_VOLUMEN = 0.1
const UMBRAL_DESCUENTO = 1000

function calcularTotalSeleccionados(lineas: LineaCarrito[]): number {
  const lineasSeleccionadas = lineas.filter((l) => l.seleccionado)
  const subtotal = sumarLineas(lineasSeleccionadas)
  return aplicarDescuentoVolumen(subtotal)
}

function sumarLineas(lineas: LineaCarrito[]): number {
  return lineas.reduce((total, l) => total + l.precio * l.cantidad, 0)
}

function aplicarDescuentoVolumen(subtotal: number): number {
  if (subtotal > UMBRAL_DESCUENTO) {
    return subtotal * (1 - DESCUENTO_ALTO_VOLUMEN)
  }
  return subtotal
}

// Fácil de probar cada función por separado
// sumarLineas(lineas) → number
// aplicarDescuentoVolumen(subtotal) → number
// calcularTotalSeleccionados(lineas) → number`,
    keyPoints: [
      'Los tipos explícitos actúan como documentación viva — explican la función sin comentarios',
      'Nombres descriptivos hacen el código legible sin necesidad de conocer el contexto',
      'Funciones pequeñas con una responsabilidad son más fáciles de probar y mantener',
      'Evitar any mantiene la seguridad de tipos — usa unknown cuando no sabes el tipo',
      'La consistencia en el estilo hace que el código sea predecible y fácil de navegar',
    ],
    exercise: {
      description:
        'Refactoriza esta función de baja calidad: `function do_stuff(x: any, y: any): any { if (x > 0 && y.length > 0) { return y.filter((i: any) => i.v > x).length } return 0 }`. Identifica el propósito real, crea interfaces, renombra todo apropiadamente y separa en funciones pequeñas si es necesario.',
      hint: 'La función parece contar productos con valor mayor a un mínimo. Crea una interfaz Producto con un campo numérico, y renombra x a precioMinimo.',
    },
    quiz: [
      {
        question: '¿Por qué los tipos de TypeScript actúan como documentación?',
        options: [
          'Porque TypeScript genera documentación HTML automáticamente',
          'Porque los tipos de parámetros y retorno explican qué entra y qué sale sin necesidad de comentarios',
          'Porque los tipos son comentarios con sintaxis especial',
          'Solo si usas JSDoc junto con TypeScript',
        ],
        correctAnswer: 'Porque los tipos de parámetros y retorno explican qué entra y qué sale sin necesidad de comentarios',
        correctFeedback: '¡Correcto! calcularTotal(productos: Producto[], tasa: number): number ya explica la función sin un solo comentario.',
        incorrectFeedback: 'Los tipos son documentación ejecutable — explican entradas y salidas y TypeScript verifica que sean correctos siempre.',
      },
      {
        question: '¿Por qué usar unknown en lugar de any cuando no sabes el tipo de entrada?',
        options: [
          'Son idénticos — elige el que prefieras',
          'unknown obliga a verificar el tipo antes de usar el valor; any lo permite sin verificación',
          'any es para funciones, unknown es para variables',
          'unknown es más lento que any',
        ],
        correctAnswer: 'unknown obliga a verificar el tipo antes de usar el valor; any lo permite sin verificación',
        correctFeedback: '¡Correcto! Con unknown TypeScript te obliga a verificar el tipo antes de usarlo. Con any puedes hacer cualquier cosa sin verificar.',
        incorrectFeedback: 'unknown requiere que verifiques el tipo antes de usar el valor. any desactiva toda verificación — es menos seguro.',
      },
      {
        question: '¿Qué significa el principio de "una responsabilidad" aplicado a funciones?',
        options: [
          'Que la función solo puede tener un parámetro',
          'Que la función hace una sola cosa bien definida — validar, calcular, o guardar, no todo a la vez',
          'Que la función no puede llamar a otras funciones',
          'Que la función debe ser de una sola línea',
        ],
        correctAnswer: 'Que la función hace una sola cosa bien definida — validar, calcular, o guardar, no todo a la vez',
        correctFeedback: '¡Correcto! Una función que valida, calcula Y guarda es difícil de probar y mantener. Funciones pequeñas con una responsabilidad son más claras.',
        incorrectFeedback: 'Una responsabilidad significa hacer una sola cosa: validar, o calcular, o guardar. Mezclar varias responsabilidades hace el código difícil de probar.',
      },
      {
        question: '¿Qué herramienta complementa TypeScript para detectar patrones problemáticos de código?',
        options: [
          'Prettier',
          'Webpack',
          'ESLint con @typescript-eslint',
          'Babel',
        ],
        correctAnswer: 'ESLint con @typescript-eslint',
        correctFeedback: '¡Correcto! @typescript-eslint extiende ESLint con reglas específicas de TypeScript para detectar patrones problemáticos.',
        incorrectFeedback: 'ESLint con el plugin @typescript-eslint detecta patrones problemáticos en TypeScript. Prettier se encarga del formato.',
      },
      {
        question: '¿Qué problema tiene usar nombres de una letra como `p`, `d`, `r` en el código?',
        options: [
          'TypeScript no los acepta',
          'Son más lentos en ejecución',
          'No explican la intención — quien lee el código no sabe qué representan sin leer todo el contexto',
          'No hay ningún problema — son más rápidos de escribir',
        ],
        correctAnswer: 'No explican la intención — quien lee el código no sabe qué representan sin leer todo el contexto',
        correctFeedback: '¡Correcto! Nombres descriptivos como productosActivos son autoexplicativos. p no dice nada sobre qué representa.',
        incorrectFeedback: 'Nombres de una letra no comunican intención. productosActivos = productos.filter(p => p.activo) es más claro que r = d.filter(p => p.a).',
      },
    ],
  },
  {
    slug: 'buenas-practicas-testing-typescript',
    title: 'Buenas prácticas de testing con TypeScript',
    module: 'Testing y calidad con TypeScript',
    moduleNumber: 28,
    order: 230,
    description:
      'Aprende buenas prácticas para escribir pruebas claras, útiles y mantenibles en proyectos TypeScript.',
    explanation: `## Buenas prácticas de testing con TypeScript

Las pruebas son tan importantes como el código. Pruebas mal escritas dan falsa seguridad y son difíciles de mantener.

### 1. Nombres de tests descriptivos

\`\`\`typescript
// ❌ Nombre vago
it('funciona', () => { ... })

// ✅ Nombre que describe exactamente qué se prueba y en qué condición
it('calcula el total correctamente cuando todos los productos están disponibles', () => { ... })
it('retorna 0 cuando el carrito está vacío', () => { ... })
it('lanza error cuando el precio es negativo', () => { ... })
\`\`\`

### 2. Una afirmación lógica por test

\`\`\`typescript
// ❌ Demasiadas verificaciones en un solo test
it('el usuario funciona', () => {
  const u = crearUsuario('Ana', 'ana@email.com')
  expect(u.nombre).toBe('Ana')
  expect(u.email).toBe('ana@email.com')
  expect(u.activo).toBe(true)
  expect(u.rol).toBe('usuario')
  // ... más verificaciones
})

// ✅ Tests enfocados
it('el usuario creado tiene nombre correcto', () => {
  const u = crearUsuario('Ana', 'ana@email.com')
  expect(u.nombre).toBe('Ana')
})

it('el usuario creado está activo por defecto', () => {
  const u = crearUsuario('Ana', 'ana@email.com')
  expect(u.activo).toBe(true)
})
\`\`\`

### 3. No probar implementación — probar comportamiento

\`\`\`typescript
// ❌ Probar cómo lo hace internamente
it('usa filter para filtrar activos', () => {
  const spy = vi.spyOn(Array.prototype, 'filter')
  filtrarActivos(usuarios)
  expect(spy).toHaveBeenCalled()
})

// ✅ Probar qué resultado produce
it('retorna solo usuarios activos', () => {
  const resultado = filtrarActivos(usuarios)
  expect(resultado.every((u) => u.activo)).toBe(true)
})
\`\`\`

### 4. Datos de prueba claros y reutilizables

\`\`\`typescript
// Datos de prueba bien nombrados
const USUARIO_ACTIVO: Usuario = {
  id: 1, nombre: 'Ana García', email: 'ana@email.com', activo: true
}

const USUARIO_INACTIVO: Usuario = {
  id: 2, nombre: 'Carlos López', email: 'carlos@email.com', activo: false
}
\`\`\`

### 5. Cubrir lo que importa, no el 100%

No todas las funciones necesitan tests. Prioriza:
- Lógica compleja de negocio
- Funciones con muchos casos borde
- Cálculos críticos (precios, totales, validaciones)
- Transformaciones de datos importantes`,
    codeExample: `// Buenas prácticas aplicadas — carrito.test.ts

import { describe, it, expect } from 'vitest'

interface Producto {
  id: number
  nombre: string
  precio: number
  disponible: boolean
}

// ─── Datos de prueba reutilizables y bien nombrados ───────────
const PRODUCTO_BARATO: Producto = { id: 1, nombre: 'Curso A', precio: 50, disponible: true }
const PRODUCTO_CARO: Producto = { id: 2, nombre: 'Curso B', precio: 500, disponible: true }
const PRODUCTO_AGOTADO: Producto = { id: 3, nombre: 'Curso C', precio: 100, disponible: false }

// ─── Funciones bajo prueba ────────────────────────────────────
function productosDisponibles(productos: Producto[]): Producto[] {
  return productos.filter((p) => p.disponible)
}

function totalCarrito(productos: Producto[]): number {
  return productos
    .filter((p) => p.disponible)
    .reduce((acc, p) => acc + p.precio, 0)
}

function aplicarCupon(total: number, descuentoPct: number): number {
  if (descuentoPct < 0 || descuentoPct > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100')
  }
  return total * (1 - descuentoPct / 100)
}

// ─── Tests con buenas prácticas ───────────────────────────────
describe('productosDisponibles', () => {
  it('filtra solo los productos disponibles', () => {
    const resultado = productosDisponibles([PRODUCTO_BARATO, PRODUCTO_AGOTADO])
    expect(resultado).toHaveLength(1)
    expect(resultado[0].id).toBe(PRODUCTO_BARATO.id)
  })

  it('retorna array vacío cuando todos están agotados', () => {
    expect(productosDisponibles([PRODUCTO_AGOTADO])).toHaveLength(0)
  })
})

describe('totalCarrito', () => {
  it('suma precios de productos disponibles', () => {
    expect(totalCarrito([PRODUCTO_BARATO, PRODUCTO_CARO])).toBe(550)
  })

  it('excluye productos agotados del total', () => {
    expect(totalCarrito([PRODUCTO_BARATO, PRODUCTO_AGOTADO])).toBe(50)
  })

  it('retorna 0 con carrito vacío', () => {
    expect(totalCarrito([])).toBe(0)
  })
})

describe('aplicarCupon', () => {
  it('aplica descuento del 10% correctamente', () => {
    expect(aplicarCupon(100, 10)).toBe(90)
  })

  it('descuento 0% devuelve el total original', () => {
    expect(aplicarCupon(200, 0)).toBe(200)
  })

  it('lanza error con descuento negativo', () => {
    expect(() => aplicarCupon(100, -5)).toThrow(RangeError)
  })

  it('lanza error con descuento mayor a 100', () => {
    expect(() => aplicarCupon(100, 110)).toThrow('entre 0 y 100')
  })
})`,
    keyPoints: [
      'Nombres descriptivos: "calcula total cuando el carrito está vacío" no "funciona"',
      'Una afirmación lógica por test — más fácil identificar qué falló y por qué',
      'Prueba comportamiento (qué devuelve) no implementación (cómo lo hace)',
      'Datos de prueba con nombres claros como USUARIO_ACTIVO son más legibles que datos inline',
      'Prioriza tests para lógica compleja y cálculos críticos, no para cubrir el 100%',
    ],
    exercise: {
      description:
        'Refactoriza este test mal escrito: `it("test", () => { const r = procesar([1,2,3]); expect(r).toBe(6); expect(r).toBeGreaterThan(0); const r2 = procesar([]); expect(r2).toBe(0) })`. Sepáralo en tests individuales con nombres descriptivos, usa datos con nombres claros.',
      hint: 'Crea al menos 2 tests: uno para suma de array con elementos y otro para array vacío. Usa constantes para los datos como NUMEROS_BASICOS = [1, 2, 3].',
    },
    quiz: [
      {
        question: '¿Qué significa probar el "comportamiento" en lugar de la "implementación"?',
        options: [
          'Solo probar funciones async',
          'Verificar qué devuelve la función, no cómo lo hace internamente',
          'Usar spies en todos los tests',
          'Probar el HTML renderizado',
        ],
        correctAnswer: 'Verificar qué devuelve la función, no cómo lo hace internamente',
        correctFeedback: '¡Correcto! Los tests de comportamiento son más robustos — siguen pasando aunque cambies la implementación interna.',
        incorrectFeedback: 'Probar comportamiento significa verificar qué resultado produce la función. Probar implementación (que usa .filter) es frágil.',
      },
      {
        question: '¿Por qué es mejor tener una afirmación lógica por test?',
        options: [
          'Porque Vitest solo acepta un expect por test',
          'Para identificar fácilmente qué falló y por qué cuando el test no pasa',
          'Porque los tests corren más rápido',
          'Por convención — no tiene efecto real',
        ],
        correctAnswer: 'Para identificar fácilmente qué falló y por qué cuando el test no pasa',
        correctFeedback: '¡Correcto! Cuando un test con múltiples expects falla, no sabes cuál fue. Con uno por test, es inmediato.',
        incorrectFeedback: 'Tests con un expect lógico son más fáciles de depurar — cuando fallan, sabes exactamente qué y por qué falló.',
      },
      {
        question: '¿Qué función tiene el bloque describe en Vitest?',
        options: [
          'Ejecutar los tests en paralelo',
          'Agrupar tests relacionados bajo un nombre, organizando los resultados',
          'Configurar el timeout de los tests',
          'Importar automáticamente las dependencias',
        ],
        correctAnswer: 'Agrupar tests relacionados bajo un nombre, organizando los resultados',
        correctFeedback: '¡Correcto! describe agrupa tests relacionados (ej: todos los tests de "calcularTotal") y hace la salida más legible.',
        incorrectFeedback: 'describe agrupa tests relacionados y da contexto en los resultados: "calcularTotal > retorna 0 con carrito vacío".',
      },
      {
        question: '¿Por qué debes priorizar tests para lógica compleja y cálculos críticos?',
        options: [
          'Porque TypeScript no puede verificar esas partes',
          'Porque son los errores más costosos si llegan a producción — una mala facturación o validación falla silenciosamente',
          'Porque son más rápidos de escribir',
          'Porque el 100% de cobertura es obligatorio',
        ],
        correctAnswer: 'Porque son los errores más costosos si llegan a producción — una mala facturación o validación falla silenciosamente',
        correctFeedback: '¡Correcto! Los bugs en lógica crítica (precios, permisos, validaciones) tienen el mayor impacto. Prioriza esas pruebas.',
        incorrectFeedback: 'Los errores en cálculos críticos como precios o permisos son los más costosos en producción. Prioriza probarlos sobre funciones de presentación.',
      },
      {
        question: '¿Qué ventaja tienen los datos de prueba con nombres descriptivos como USUARIO_ACTIVO?',
        options: [
          'Son más rápidos de ejecutar',
          'Hacen el test más legible y reutilizable — el nombre comunica el propósito del dato',
          'TypeScript los tipa automáticamente',
          'Previenen errores de red',
        ],
        correctAnswer: 'Hacen el test más legible y reutilizable — el nombre comunica el propósito del dato',
        correctFeedback: '¡Correcto! USUARIO_ACTIVO es claro sobre qué tipo de usuario es. Un objeto inline anónimo no comunica eso.',
        incorrectFeedback: 'Los datos con nombres descriptivos como USUARIO_ACTIVO son reutilizables en múltiples tests y comunican el propósito del dato de prueba.',
      },
    ],
  },
]

export const tsModule28: Module = {
  number: 28,
  title: 'Testing y calidad con TypeScript',
  level: 'nivel6',
  lessons: lessonsTsModule28,
}
