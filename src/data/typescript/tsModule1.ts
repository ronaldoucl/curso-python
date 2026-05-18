import type { Lesson, Module } from '@/types'

export const lessonsTsModule1: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-typescript',
    title: '¿Qué es TypeScript?',
    module: 'Introducción a TypeScript',
    moduleNumber: 1,
    order: 1,
    description:
      'Descubre qué es TypeScript y cómo ayuda a escribir JavaScript más seguro, claro y fácil de mantener.',
    explanation: `TypeScript es un **lenguaje de programación** creado por Microsoft en 2012. Pero hay algo muy importante que debes entender desde el principio: **TypeScript no reemplaza a JavaScript**. TypeScript es JavaScript con una capa extra de seguridad llamada **tipos**.

Puedes pensar en TypeScript como JavaScript con "superpoderes". Todo lo que sabes de JavaScript sigue funcionando en TypeScript. La diferencia es que TypeScript te permite decirle al editor y al compilador qué tipo de dato espera cada variable, función y parámetro.

**¿Qué significa "tipos"?**

Un tipo le dice a TypeScript qué clase de valor va a contener una variable. Por ejemplo:
- ¿Esta variable guarda texto o un número?
- ¿Esta función devuelve verdadero/falso o una lista?
- ¿Este objeto tiene un campo "nombre" que es texto?

En JavaScript puro, esas preguntas no tienen respuesta hasta que el programa corre. En TypeScript, las respondes mientras escribes el código.

**Una analogía útil**

Imagina que JavaScript es un cuaderno en blanco donde puedes escribir lo que quieras. TypeScript es ese mismo cuaderno, pero con columnas etiquetadas. Cuando quieres escribir algo en la columna "Nombre", solo puedes escribir texto, no números. Si intentas poner un número donde debería ir texto, alguien te avisa de inmediato, antes de que el cuaderno sea entregado.

**¿Cómo funciona TypeScript?**

TypeScript tiene un proceso llamado **compilación**. Cuando escribes código TypeScript (archivos \`.ts\`), necesitas "compilarlo" para convertirlo en JavaScript (archivos \`.js\`). Los navegadores y Node.js no entienden TypeScript directamente, solo entienden JavaScript. TypeScript se convierte en JavaScript antes de que el código se ejecute.

Este proceso de compilación es el momento en que TypeScript verifica tus tipos y te avisa si hay errores. Si intentas guardar un número en una variable que debería ser texto, TypeScript te lo dice en ese momento, antes de ejecutar nada.

**¿Por qué fue creado TypeScript?**

JavaScript fue diseñado originalmente para pequeños scripts en páginas web. Con el tiempo, los proyectos crecieron enormemente. Aplicaciones con miles de archivos y decenas de desarrolladores trabajando al mismo tiempo necesitaban más estructura y seguridad. TypeScript fue la respuesta de Microsoft a ese problema.

Hoy en día, proyectos grandes como Angular, el editor VS Code (sí, el editor que probablemente usas está escrito en TypeScript), Slack, Asana y muchos más usan TypeScript.

**Errores comunes de principiantes:**

- **"TypeScript es un lenguaje completamente diferente a JavaScript"** — No. TypeScript es JavaScript con tipos. Todo JavaScript válido es TypeScript válido.
- **"Necesito aprender TypeScript antes que JavaScript"** — No. TypeScript requiere conocer JavaScript. Siempre aprende JavaScript primero.
- **"TypeScript corre directamente en el navegador"** — No. Debe compilarse a JavaScript primero.`,
    codeExample: `// ── archivo: main.ts ─────────────────────────────────────────────────────

// En JavaScript normal escribirías:
// let nombre = "Ana"
// let edad = 25

// En TypeScript puedes agregar tipos:
let nombre: string = "Ana"
let edad: number = 25

console.log(nombre)  // → Ana
console.log(edad)    // → 25

// TypeScript te avisa si intentas hacer algo incorrecto:
// nombre = 42  ← Error: no puedes asignar un número a un string

// La analogía: TypeScript es como poner etiquetas en cajas
// Una caja etiquetada "ropa" no debería recibir herramientas.

// ── Qué hace el compilador tsc ───────────────────────────────────────────
// Cuando compilas este archivo con: tsc main.ts
// TypeScript genera un archivo main.js con:

// let nombre = "Ana";
// let edad = 25;
// console.log(nombre);
// console.log(edad);

// Los tipos desaparecen en el JavaScript final.
// Solo existen durante el desarrollo.`,
    keyPoints: [
      'TypeScript es JavaScript con tipos — no es un lenguaje completamente diferente.',
      'TypeScript fue creado por Microsoft en 2012 para facilitar el desarrollo de aplicaciones grandes.',
      'Los tipos te permiten decirle a TypeScript qué clase de valor espera cada variable o función.',
      'TypeScript debe compilarse a JavaScript antes de ejecutarse — los navegadores no lo entienden directamente.',
      'El compilador de TypeScript detecta errores de tipo antes de que el código se ejecute.',
      'Todo JavaScript válido es también TypeScript válido — puedes migrar gradualmente.',
    ],
    exercise: {
      description:
        'Reflexiona: si tuvieras una variable llamada "precioProducto", ¿qué tipo de dato esperarías que contenga? ¿Y una variable llamada "nombreUsuario"? ¿Y una variable llamada "estaActivo"? Escribe tus respuestas y piensa en qué pasaría si por error asignaras un tipo incorrecto a cada una.',
      hint: 'Piensa en los tipos básicos que conoces de JavaScript: texto (string), número (number), verdadero/falso (boolean). Cada variable en un programa real guarda un tipo específico de información.',
    },
    quiz: [
      {
        question: '¿Qué es TypeScript?',
        options: [
          'Un lenguaje completamente diferente a JavaScript',
          'JavaScript con la posibilidad de agregar tipos',
          'Una librería de JavaScript para hacer animaciones',
          'Un framework para crear páginas web',
        ],
        correctAnswer: 'JavaScript con la posibilidad de agregar tipos',
        correctFeedback:
          'Correcto. TypeScript es JavaScript con tipos. No reemplaza a JavaScript, lo extiende con seguridad adicional.',
        incorrectFeedback:
          'No es correcto. TypeScript no es un lenguaje separado ni una librería. Es JavaScript con la posibilidad de agregar tipos, lo que permite detectar errores antes de ejecutar el código.',
      },
      {
        question: '¿Los navegadores pueden ejecutar TypeScript directamente?',
        options: [
          'Sí, los navegadores modernos lo soportan nativamente',
          'Solo Chrome y Firefox lo soportan',
          'No, TypeScript debe compilarse a JavaScript primero',
          'Sí, si se incluye la librería correcta',
        ],
        correctAnswer: 'No, TypeScript debe compilarse a JavaScript primero',
        correctFeedback:
          'Correcto. Los navegadores solo entienden JavaScript. TypeScript debe pasar por un proceso de compilación para convertirse en JavaScript antes de ejecutarse.',
        incorrectFeedback:
          'No es correcto. Los navegadores no pueden ejecutar TypeScript directamente. Primero debe compilarse (convertirse) a JavaScript usando el compilador tsc.',
      },
      {
        question: '¿Cuándo detecta TypeScript los errores de tipo?',
        options: [
          'En tiempo de ejecución, cuando el programa ya está corriendo',
          'Solo cuando el usuario interactúa con la página',
          'Durante la compilación, antes de ejecutar el código',
          'Solo cuando se ejecutan las pruebas automatizadas',
        ],
        correctAnswer: 'Durante la compilación, antes de ejecutar el código',
        correctFeedback:
          'Correcto. Una de las ventajas principales de TypeScript es que detecta errores de tipo durante la compilación, antes de que el código se ejecute en producción.',
        incorrectFeedback:
          'No es correcto. TypeScript detecta errores durante la compilación, no en tiempo de ejecución. Esto significa que encuentras los errores mucho antes de que lleguen a los usuarios.',
      },
      {
        question: '¿Es válido usar código JavaScript dentro de un proyecto TypeScript?',
        options: [
          'No, debes reescribir todo en TypeScript desde cero',
          'Sí, todo JavaScript válido es también TypeScript válido',
          'Solo si usas la extensión .jsx',
          'Solo en archivos con la extensión .js, no .ts',
        ],
        correctAnswer: 'Sí, todo JavaScript válido es también TypeScript válido',
        correctFeedback:
          'Correcto. TypeScript es un superconjunto de JavaScript. Puedes empezar con JavaScript y agregar tipos gradualmente. No necesitas reescribir nada desde cero.',
        incorrectFeedback:
          'No es correcto. TypeScript es un superconjunto de JavaScript, lo que significa que todo JavaScript válido también es TypeScript válido. Puedes migrar un proyecto gradualmente sin reescribirlo.',
      },
      {
        question: '¿Quién creó TypeScript y en qué año?',
        options: [
          'Google en 2009',
          'Facebook en 2013',
          'Microsoft en 2012',
          'Brendan Eich en 1995',
        ],
        correctAnswer: 'Microsoft en 2012',
        correctFeedback:
          'Correcto. TypeScript fue creado por Microsoft y lanzado públicamente en 2012. Fue diseñado para facilitar el desarrollo de aplicaciones JavaScript grandes.',
        incorrectFeedback:
          'No es correcto. TypeScript fue creado por Microsoft en 2012. Brendan Eich creó JavaScript en 1995, que es el lenguaje sobre el que se construye TypeScript.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'typescript-vs-javascript',
    title: 'TypeScript vs JavaScript',
    module: 'Introducción a TypeScript',
    moduleNumber: 1,
    order: 2,
    description:
      'Aprende las diferencias principales entre JavaScript y TypeScript, y por qué TypeScript se construye sobre JavaScript.',
    explanation: `TypeScript y JavaScript son dos caras de la misma moneda. Para entender sus diferencias, primero necesitas entender qué tienen en común: **TypeScript incluye todo lo que tiene JavaScript**. No es una alternativa, es una extensión.

**Lo que tienen en común**

- La misma sintaxis básica (variables, funciones, bucles, condiciones)
- Los mismos tipos de datos primitivos (string, number, boolean, etc.)
- Los mismos métodos de arrays y objetos
- El mismo comportamiento en tiempo de ejecución
- La misma comunidad y ecosistema de paquetes (npm)

**Lo que TypeScript agrega**

| Característica | JavaScript | TypeScript |
|---|---|---|
| Tipos explícitos | No | Sí |
| Interfaces | No | Sí |
| Errores antes de ejecutar | No | Sí |
| Autocompletado avanzado | Limitado | Muy bueno |
| Requiere compilación | No | Sí |
| Corre en el navegador | Sí (directo) | No (requiere compilar) |

**El ciclo de vida del código**

En JavaScript:
1. Escribes el código.
2. Lo ejecutas directamente en el navegador o Node.js.
3. Si hay errores, los ves cuando el programa corre.

En TypeScript:
1. Escribes el código con tipos.
2. **Compilas** el código con \`tsc\`.
3. TypeScript verifica los tipos y muestra errores si los hay.
4. Se genera JavaScript.
5. Ejecutas el JavaScript en el navegador o Node.js.

**Un ejemplo concreto**

Imagina que tienes una función que suma dos números. En JavaScript, nadie te impide llamarla con un texto:

\`\`\`js
// JavaScript
function sumar(a, b) {
  return a + b
}

sumar(5, 3)       // → 8 (correcto)
sumar("5", 3)     // → "53" (concatenación — probablemente no lo querías)
sumar("hola", 3)  // → "hola3" (JavaScript no protesta)
\`\`\`

Con TypeScript, defines que la función espera números y el compilador te avisa si intentas pasarle algo diferente:

\`\`\`ts
// TypeScript
function sumar(a: number, b: number): number {
  return a + b
}

sumar(5, 3)       // → 8 ✓
sumar("5", 3)     // Error: Argument of type 'string' is not assignable to parameter of type 'number'
\`\`\`

**¿Cuál es mejor?**

Depende del contexto:
- Para scripts pequeños, proyectos rápidos o aprendizaje inicial: JavaScript es suficiente.
- Para proyectos grandes, equipos de varias personas o aplicaciones profesionales: TypeScript es la elección estándar hoy en día.

**Errores comunes:**

- **"TypeScript es más lento que JavaScript"** — El JavaScript generado es igual de rápido. La compilación toma unos segundos, pero la velocidad de ejecución es la misma.
- **"TypeScript hace el código más largo sin beneficio"** — Al principio parece así, pero en proyectos grandes los tipos ahorran horas de depuración.`,
    codeExample: `// ── JavaScript (sin tipos) ───────────────────────────────────────────────
// archivo: calculo.js

function calcularDescuento(precio, descuento) {
  return precio - (precio * descuento / 100)
}

// JavaScript acepta cualquier valor sin protestar:
calcularDescuento(100, 10)        // → 90 ✓
calcularDescuento("100", 10)      // → 90 (funciona por coerción)
calcularDescuento(undefined, 10)  // → NaN (error silencioso en tiempo de ejecución)

// ── TypeScript (con tipos) ────────────────────────────────────────────────
// archivo: calculo.ts

function calcularDescuento(precio: number, descuento: number): number {
  return precio - (precio * descuento / 100)
}

// TypeScript verifica los tipos antes de compilar:
calcularDescuento(100, 10)        // → 90 ✓
// calcularDescuento("100", 10)   // Error: 'string' no es assignable a 'number'
// calcularDescuento(undefined, 10) // Error: 'undefined' no es assignable a 'number'

// ── El JavaScript generado es idéntico al original ───────────────────────
// TypeScript solo agrega seguridad durante el desarrollo.
// El archivo .js resultante no contiene tipos.`,
    keyPoints: [
      'TypeScript incluye todo lo que tiene JavaScript — es una extensión, no un reemplazo.',
      'TypeScript agrega tipos explícitos, interfaces y detección de errores en tiempo de compilación.',
      'El JavaScript generado por TypeScript es igual de rápido que JavaScript escrito a mano.',
      'TypeScript requiere un paso de compilación adicional antes de poder ejecutar el código.',
      'En proyectos grandes y con equipos, TypeScript reduce significativamente los errores.',
      'Para proyectos pequeños o scripts rápidos, JavaScript puro puede ser suficiente.',
    ],
    exercise: {
      description:
        'Compara estos dos fragmentos de código y explica en tus propias palabras qué ventaja ofrece la versión TypeScript: Versión JS: function saludar(nombre) { return "Hola, " + nombre } | Versión TS: function saludar(nombre: string): string { return "Hola, " + nombre }. ¿Qué información extra da la versión TypeScript? ¿Qué error podría prevenir?',
      hint: 'Piensa en qué pasaría si alguien llama a saludar(42) o saludar(true). ¿Qué haría JavaScript? ¿Qué haría TypeScript?',
    },
    quiz: [
      {
        question: '¿Cuál de estas afirmaciones sobre TypeScript y JavaScript es verdadera?',
        options: [
          'TypeScript reemplaza a JavaScript en el navegador',
          'TypeScript incluye todo lo de JavaScript y agrega tipos',
          'TypeScript es más rápido que JavaScript en tiempo de ejecución',
          'TypeScript no puede usar paquetes de npm',
        ],
        correctAnswer: 'TypeScript incluye todo lo de JavaScript y agrega tipos',
        correctFeedback:
          'Correcto. TypeScript es un superconjunto de JavaScript. Incluye todo lo que JavaScript tiene y agrega tipos, interfaces y otras características.',
        incorrectFeedback:
          'No es correcto. TypeScript no reemplaza a JavaScript ni es más rápido en tiempo de ejecución. Es un superconjunto que agrega tipos y se compila a JavaScript.',
      },
      {
        question: '¿Qué problema soluciona TypeScript en este código?\n\nfunction sumar(a, b) { return a + b }\nsumar("5", 3)',
        options: [
          'El resultado de sumar("5", 3) en JavaScript es un error',
          'TypeScript impide que se llame sumar() con un string, evitando la concatenación no deseada',
          'TypeScript convierte el string "5" a número automáticamente',
          'En JavaScript, sumar("5", 3) devuelve NaN',
        ],
        correctAnswer: 'TypeScript impide que se llame sumar() con un string, evitando la concatenación no deseada',
        correctFeedback:
          'Correcto. En JavaScript, sumar("5", 3) devuelve "53" por concatenación. TypeScript detecta este error antes de ejecutar el código si los parámetros están tipados como number.',
        incorrectFeedback:
          'No es correcto. En JavaScript, sumar("5", 3) devuelve "53" (concatenación de string y número) sin ningún error. TypeScript con tipos number impediría esta llamada incorrecta.',
      },
      {
        question: '¿Cuándo se detectan los errores de tipo en TypeScript?',
        options: [
          'Cuando el usuario usa la aplicación',
          'Durante la compilación, antes de ejecutar el código',
          'Al instalar las dependencias con npm',
          'Al guardar el archivo en el editor',
        ],
        correctAnswer: 'Durante la compilación, antes de ejecutar el código',
        correctFeedback:
          'Correcto. TypeScript detecta los errores de tipo al compilar, antes de que el JavaScript llegue al navegador o Node.js.',
        incorrectFeedback:
          'No es correcto. TypeScript detecta los errores de tipo durante el proceso de compilación (con tsc), no cuando el usuario usa la aplicación ni al guardar el archivo.',
      },
      {
        question: '¿Qué contiene el archivo JavaScript generado por TypeScript?',
        options: [
          'El código TypeScript original sin cambios',
          'JavaScript equivalente sin los tipos ni anotaciones de TypeScript',
          'Un archivo binario que el navegador interpreta',
          'El código TypeScript y el JavaScript juntos',
        ],
        correctAnswer: 'JavaScript equivalente sin los tipos ni anotaciones de TypeScript',
        correctFeedback:
          'Correcto. El archivo .js generado es JavaScript puro, sin tipos ni ninguna sintaxis exclusiva de TypeScript. Los tipos solo existen durante el desarrollo.',
        incorrectFeedback:
          'No es correcto. El archivo JavaScript generado es JavaScript puro. TypeScript elimina todos los tipos y anotaciones en el proceso de compilación.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'por-que-usar-typescript',
    title: '¿Por qué usar TypeScript?',
    module: 'Introducción a TypeScript',
    moduleNumber: 1,
    order: 3,
    description:
      'Entiende los beneficios de TypeScript: detectar errores antes, mejorar el autocompletado, documentar mejor el código y trabajar mejor en proyectos grandes.',
    explanation: `Antes de invertir tiempo en aprender TypeScript, es justo preguntarse: ¿para qué? JavaScript ya funciona. ¿Qué gana exactamente el programador que usa TypeScript?

**1. Detectar errores antes de ejecutar el código**

Este es el beneficio más mencionado y el más valioso. En JavaScript, muchos errores solo aparecen cuando el programa ya está corriendo. Con TypeScript, el compilador te avisa de los errores de tipo mientras escribes.

Imagina que un usuario reporta un bug en producción. Con JavaScript, ese error llegó hasta los usuarios. Con TypeScript, ese tipo de error hubiera sido detectado antes de lanzar el código.

**2. Mejor autocompletado en el editor**

Cuando TypeScript sabe el tipo de una variable, puede mostrarte exactamente qué métodos y propiedades están disponibles. Si tienes una variable de tipo \`string\`, tu editor puede ofrecerte \`.toUpperCase()\`, \`.includes()\`, \`.split()\` automáticamente.

Esto no es solo comodidad — reduce errores por escribir mal el nombre de un método y te hace más productivo.

**3. El código se documenta a sí mismo**

Mira estas dos funciones:

\`\`\`js
// JavaScript — ¿qué espera esta función? ¿qué devuelve?
function registrarUsuario(datos, opciones) { ... }

// TypeScript — todo queda claro
function registrarUsuario(datos: Usuario, opciones: OpcionesRegistro): Promise<boolean> { ... }
\`\`\`

Con TypeScript, cualquier persona que lea el código sabe inmediatamente qué espera y qué devuelve la función, sin necesidad de leer la implementación completa.

**4. Refactorización segura**

Cuando renombras una variable o cambias la estructura de un objeto en un proyecto grande, TypeScript actualiza todos los errores relacionados instantáneamente. En JavaScript puro, podrías hacer ese cambio y no darte cuenta de que rompiste algo en otro archivo hasta que el usuario lo encuentre.

**5. Mejor trabajo en equipo**

En proyectos con varios desarrolladores, TypeScript actúa como un contrato entre el código. Si alguien cambia la forma de un objeto compartido, TypeScript le avisa a todos los que lo usan que algo cambió y que necesitan actualizar su código.

**6. Adopción en la industria**

TypeScript es hoy estándar en muchos equipos profesionales. Frameworks como Angular lo usan por defecto. React, Vue, Next.js, NestJS tienen soporte oficial. Conocer TypeScript mejora tu perfil profesional.

**¿Cuándo TypeScript NO vale la pena?**

- Scripts pequeños de una sola vez.
- Proyectos de aprendizaje donde ya estás sobrecargado.
- Prototipado rápido donde los tipos ralentizan la exploración.

La clave es entender que TypeScript es una herramienta. Úsala cuando el proyecto lo justifica.`,
    codeExample: `// ── Beneficio 1: Detectar errores antes ──────────────────────────────────
// archivo: usuario.ts

interface Usuario {
  nombre: string
  edad: number
  email: string
}

function mostrarPerfil(usuario: Usuario): void {
  console.log(\`\${usuario.nombre}, \${usuario.edad} años\`)
  console.log(\`Email: \${usuario.email}\`)
}

const ana: Usuario = {
  nombre: "Ana",
  edad: 28,
  email: "ana@ejemplo.com"
}

mostrarPerfil(ana)  // ✓ Correcto

// mostrarPerfil({ nombre: "Ana", edad: "veintiocho" })
// ↑ Error: 'string' no es asignable a 'number' para la propiedad 'edad'
// TypeScript detecta esto ANTES de ejecutar el código.

// ── Beneficio 2: Autocompletado ───────────────────────────────────────────
// Cuando escribes "ana." tu editor sugiere:
// .nombre  .edad  .email
// (solo las propiedades que existen en Usuario)

// ── Beneficio 3: Refactorización segura ───────────────────────────────────
// Si cambias "email" por "correo" en la interfaz Usuario,
// TypeScript te mostrará todos los lugares donde se usa "email"
// que necesitan actualizarse.`,
    keyPoints: [
      'TypeScript detecta errores de tipo antes de ejecutar el código, reduciendo bugs en producción.',
      'El autocompletado mejora porque el editor sabe qué métodos y propiedades existen para cada tipo.',
      'Los tipos actúan como documentación integrada: explican qué espera y qué devuelve cada función.',
      'La refactorización es más segura porque TypeScript detecta todos los cambios relacionados.',
      'TypeScript facilita el trabajo en equipo al establecer contratos claros entre partes del código.',
      'No siempre es necesario: para scripts pequeños o prototipado rápido, JavaScript puede ser suficiente.',
    ],
    exercise: {
      description:
        'Imagina que trabajas en un equipo de 5 personas en una tienda en línea. Una función llamada calcularTotal() recibe productos y un código de descuento. Sin TypeScript, ¿qué problemas podrían surgir cuando dos personas del equipo usen esa función de formas diferentes? Escribe al menos 3 situaciones donde TypeScript ayudaría en ese escenario.',
      hint: 'Piensa en: ¿qué pasa si alguien pasa el precio como string en vez de número? ¿qué pasa si alguien olvida pasar el código de descuento? ¿qué pasa si alguien cambia la estructura del objeto "producto"?',
    },
    quiz: [
      {
        question: '¿Cuál de estos es un beneficio real de TypeScript?',
        options: [
          'El código TypeScript corre más rápido que el JavaScript equivalente',
          'TypeScript detecta errores de tipo antes de ejecutar el código',
          'TypeScript elimina la necesidad de escribir pruebas automatizadas',
          'TypeScript convierte automáticamente strings a números cuando es necesario',
        ],
        correctAnswer: 'TypeScript detecta errores de tipo antes de ejecutar el código',
        correctFeedback:
          'Correcto. La detección temprana de errores es uno de los beneficios más valiosos de TypeScript: los problemas aparecen durante el desarrollo, no en producción.',
        incorrectFeedback:
          'No es correcto. TypeScript no hace el código más rápido ni elimina la necesidad de pruebas. Su principal beneficio es detectar errores de tipo durante la compilación, antes de ejecutar el código.',
      },
      {
        question: '¿Cómo ayuda TypeScript al trabajar en equipo?',
        options: [
          'Permite que dos personas editen el mismo archivo al mismo tiempo',
          'Establece contratos de tipos que avisan cuando un cambio afecta a otras partes del código',
          'Genera automáticamente la documentación del proyecto',
          'Impide que dos personas creen funciones con el mismo nombre',
        ],
        correctAnswer: 'Establece contratos de tipos que avisan cuando un cambio afecta a otras partes del código',
        correctFeedback:
          'Correcto. En proyectos con varios desarrolladores, los tipos actúan como contratos. Si alguien cambia la estructura de un objeto compartido, TypeScript avisa a todos los que lo usan.',
        incorrectFeedback:
          'No es correcto. TypeScript ayuda en equipo principalmente porque los tipos actúan como contratos: si alguien cambia la forma de un objeto, TypeScript detecta todos los lugares afectados.',
      },
      {
        question: '¿En qué situación TypeScript probablemente NO vale la pena?',
        options: [
          'Una aplicación web con 50 archivos y 3 desarrolladores',
          'Un proyecto de Next.js con autenticación y base de datos',
          'Un script pequeño de 20 líneas para automatizar una tarea',
          'Una API con múltiples endpoints y validaciones',
        ],
        correctAnswer: 'Un script pequeño de 20 líneas para automatizar una tarea',
        correctFeedback:
          'Correcto. Para scripts pequeños y de corta vida, la configuración y los tipos de TypeScript pueden ser más trabajo del que vale. TypeScript brilla en proyectos grandes y duraderos.',
        incorrectFeedback:
          'No es correcto. TypeScript es más valioso en proyectos grandes y con equipos. Para un script pequeño de pocas líneas, configurar TypeScript puede ser más trabajo del que ahorra.',
      },
      {
        question: '¿Qué ventaja ofrece TypeScript para el autocompletado en el editor?',
        options: [
          'El editor puede sugerir cualquier método de cualquier lenguaje',
          'TypeScript desactiva el autocompletado para evitar errores',
          'El editor sabe exactamente qué métodos y propiedades existen para cada tipo',
          'TypeScript solo autocompleta nombres de variables, no métodos',
        ],
        correctAnswer: 'El editor sabe exactamente qué métodos y propiedades existen para cada tipo',
        correctFeedback:
          'Correcto. Cuando TypeScript conoce el tipo de una variable, el editor puede mostrar solo las propiedades y métodos realmente disponibles, reduciendo errores de tipeo.',
        incorrectFeedback:
          'No es correcto. TypeScript mejora el autocompletado porque el editor sabe el tipo exacto de cada variable y puede sugerir solo los métodos y propiedades que realmente existen.',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'typescript-en-proyectos-reales',
    title: 'TypeScript en proyectos reales',
    module: 'Introducción a TypeScript',
    moduleNumber: 1,
    order: 4,
    description:
      'Conoce dónde se usa TypeScript en el mundo real, incluyendo aplicaciones web, React, Next.js, Node.js y proyectos profesionales.',
    explanation: `TypeScript no es solo un concepto académico — está en producción en miles de proyectos reales en todo el mundo. Entender dónde se usa te ayuda a visualizar por qué vale la pena aprenderlo.

**Frameworks y librerías que usan TypeScript**

- **Angular:** el framework de Google para aplicaciones web empresariales. Usa TypeScript por defecto desde su versión 2 (2016). No puedes usar Angular sin TypeScript.
- **React:** aunque React no requiere TypeScript, la combinación React + TypeScript es hoy uno de los stacks más comunes en el desarrollo frontend profesional.
- **Next.js:** el framework de React para producción tiene soporte oficial para TypeScript y lo recomienda en proyectos nuevos.
- **NestJS:** el framework de Node.js más popular para construir APIs y aplicaciones backend está escrito completamente en TypeScript.
- **Deno:** el entorno de ejecución creado por el inventor de Node.js tiene soporte nativo para TypeScript.

**Herramientas y proyectos famosos escritos en TypeScript**

- **VS Code:** el editor que probablemente usas está escrito en TypeScript.
- **Prettier:** la herramienta de formateo de código más popular.
- **ESLint:** la herramienta de análisis estático más usada en JavaScript.
- **TypeORM / Prisma:** ORMs populares para bases de datos.

**Empresas que usan TypeScript**

- **Microsoft** (creadores de TypeScript)
- **Google** (usa TypeScript en Angular y en proyectos internos)
- **Airbnb** (una de las primeras grandes empresas en adoptarlo)
- **Slack** (reescribieron su aplicación de escritorio en TypeScript)
- **Asana, Lyft, Dropbox** y muchas otras

**TypeScript en el backend con Node.js**

No confundas TypeScript como una tecnología solo de frontend. Con Node.js puedes construir APIs, servidores, scripts de automatización y microservicios completamente en TypeScript.

\`\`\`ts
// Una API simple con Express + TypeScript
import express, { Request, Response } from 'express'

const app = express()

interface Producto {
  id: number
  nombre: string
  precio: number
}

app.get('/productos', (req: Request, res: Response) => {
  const productos: Producto[] = [
    { id: 1, nombre: 'Laptop', precio: 850 }
  ]
  res.json(productos)
})
\`\`\`

**¿Cuándo lo encontrarás como estudiante/desarrollador?**

Si buscas trabajo en desarrollo web en 2024+, es muy probable que veas TypeScript en los requisitos de las ofertas de trabajo. No es obligatorio en todos los casos, pero tener TypeScript en tu CV es un plus significativo.

Si trabajas con React, Next.js o Node.js en proyectos profesionales, encontrarás TypeScript constantemente. Aprender TypeScript mientras aprendes estas tecnologías es la ruta más eficiente.

**El punto de partida es este curso**

No necesitas conocer React ni Next.js para aprender TypeScript. Este curso empieza desde los fundamentos. Cuando llegues a aprender esas tecnologías, TypeScript ya será familiar para ti.`,
    codeExample: `// ── TypeScript con Node.js (backend) ─────────────────────────────────────
// archivo: server.ts

interface Estudiante {
  id: number
  nombre: string
  nota: number
  aprobado: boolean
}

function calcularPromedio(estudiantes: Estudiante[]): number {
  const total = estudiantes.reduce((sum, e) => sum + e.nota, 0)
  return total / estudiantes.length
}

const clase: Estudiante[] = [
  { id: 1, nombre: "Ana",    nota: 8.5, aprobado: true  },
  { id: 2, nombre: "Carlos", nota: 6.0, aprobado: true  },
  { id: 3, nombre: "María",  nota: 4.5, aprobado: false },
]

const promedio = calcularPromedio(clase)
console.log(\`Promedio de la clase: \${promedio}\`)
// → Promedio de la clase: 6.333...

// ── TypeScript con React (frontend) ──────────────────────────────────────
// archivo: TarjetaEstudiante.tsx (componente React)
// (esto es un ejemplo visual — lo aprenderás más adelante)

// interface Props {
//   nombre: string
//   nota: number
// }
//
// function TarjetaEstudiante({ nombre, nota }: Props) {
//   return <div>{nombre}: {nota}</div>
// }

// ── TypeScript en el editor ───────────────────────────────────────────────
// Cuando escribes "clase[0]." tu editor sugiere:
// .id  .nombre  .nota  .aprobado
// Solo las propiedades de Estudiante, nada más.`,
    keyPoints: [
      'Angular usa TypeScript por defecto — no puedes usar Angular sin TypeScript.',
      'React, Next.js y NestJS tienen soporte oficial para TypeScript y lo recomiendan.',
      'VS Code, Prettier y ESLint están escritos en TypeScript.',
      'TypeScript funciona tanto en frontend (React, Angular) como en backend (Node.js, Deno).',
      'Empresas como Microsoft, Google, Airbnb y Slack usan TypeScript en producción.',
      'TypeScript en el CV mejora las oportunidades laborales en desarrollo web profesional.',
    ],
    exercise: {
      description:
        'Busca en LinkedIn o en portales de empleo (Indeed, Glassdoor, InfoJobs) 3 ofertas de trabajo de desarrollador web. Anota si mencionan TypeScript en los requisitos. ¿Es obligatorio o deseable? ¿Con qué frameworks o tecnologías aparece combinado TypeScript en esas ofertas?',
      hint: 'Busca términos como "frontend developer", "full stack developer" o "React developer". Verás que TypeScript aparece muy frecuentemente, especialmente combinado con React, Next.js o Node.js.',
    },
    quiz: [
      {
        question: '¿Qué framework de Google usa TypeScript por defecto y es casi imposible usar sin él?',
        options: ['React', 'Vue', 'Angular', 'Svelte'],
        correctAnswer: 'Angular',
        correctFeedback:
          'Correcto. Angular adoptó TypeScript como lenguaje predeterminado desde la versión 2 en 2016. Es difícil trabajar con Angular sin TypeScript.',
        incorrectFeedback:
          'No es correcto. Angular es el framework de Google que usa TypeScript por defecto. React, Vue y Svelte soportan TypeScript pero no lo requieren obligatoriamente.',
      },
      {
        question: '¿Cuál de estos proyectos famosos está escrito en TypeScript?',
        options: ['Python', 'Linux', 'VS Code', 'MySQL'],
        correctAnswer: 'VS Code',
        correctFeedback:
          'Correcto. Visual Studio Code, uno de los editores de código más populares del mundo, está escrito en TypeScript.',
        incorrectFeedback:
          'No es correcto. VS Code (Visual Studio Code) está escrito en TypeScript. Python, Linux y MySQL son proyectos de otros lenguajes.',
      },
      {
        question: '¿TypeScript solo sirve para el desarrollo frontend?',
        options: [
          'Sí, solo funciona en el navegador con React o Angular',
          'No, también se usa en backend con Node.js, Deno y NestJS',
          'Sí, porque TypeScript compila a JavaScript y JavaScript solo corre en navegadores',
          'No, pero en backend es muy poco común y no recomendado',
        ],
        correctAnswer: 'No, también se usa en backend con Node.js, Deno y NestJS',
        correctFeedback:
          'Correcto. TypeScript funciona tanto en frontend como en backend. Node.js, Deno y frameworks como NestJS son muy populares en el desarrollo backend con TypeScript.',
        incorrectFeedback:
          'No es correcto. TypeScript se usa tanto en frontend como en backend. Node.js puede ejecutar el JavaScript generado por TypeScript. NestJS es uno de los frameworks backend más populares y usa TypeScript.',
      },
      {
        question: '¿Por qué aprender TypeScript mejora las oportunidades laborales?',
        options: [
          'Porque TypeScript paga más que JavaScript',
          'Porque TypeScript reemplazará a JavaScript en el futuro',
          'Porque muchas ofertas de trabajo modernas lo incluyen como requisito o deseable',
          'Porque es el único lenguaje que React puede usar',
        ],
        correctAnswer: 'Porque muchas ofertas de trabajo modernas lo incluyen como requisito o deseable',
        correctFeedback:
          'Correcto. TypeScript aparece frecuentemente en ofertas de trabajo de desarrollo web profesional, especialmente combinado con React, Next.js o Node.js.',
        incorrectFeedback:
          'No es correcto. TypeScript no reemplazará a JavaScript ni es el único lenguaje para React. Su valor en el mercado laboral viene de que muchas empresas y proyectos profesionales lo requieren o valoran.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'typescript-evita-errores',
    title: 'Cómo TypeScript ayuda a evitar errores',
    module: 'Introducción a TypeScript',
    moduleNumber: 1,
    order: 5,
    description:
      'Aprende con ejemplos simples cómo TypeScript puede detectar errores antes de ejecutar el código.',
    explanation: `Una de las mejores formas de entender el valor de TypeScript es ver ejemplos concretos de errores que JavaScript permite silenciosamente y que TypeScript detecta inmediatamente.

**Error 1: Pasar el tipo incorrecto a una función**

Este es el caso más básico. Una función espera un número pero recibe un texto.

\`\`\`js
// JavaScript — sin error hasta que algo falla
function duplicar(n) {
  return n * 2
}

duplicar(5)       // → 10 ✓
duplicar("5")     // → 10 (JavaScript convierte el string a número)
duplicar("hola")  // → NaN (no es un número — fallo silencioso)
\`\`\`

\`\`\`ts
// TypeScript — el error aparece en el editor
function duplicar(n: number): number {
  return n * 2
}

duplicar(5)       // → 10 ✓
// duplicar("5")  // Error: Argument of type 'string' is not assignable...
\`\`\`

**Error 2: Acceder a una propiedad que no existe**

\`\`\`js
// JavaScript
const producto = { nombre: "Laptop", precio: 850 }
console.log(producto.precis)  // → undefined (sin error, pero valor incorrecto)
\`\`\`

\`\`\`ts
// TypeScript
const producto = { nombre: "Laptop", precio: 850 }
// console.log(producto.precis)  // Error: Property 'precis' does not exist
\`\`\`

**Error 3: Operaciones con tipos incompatibles**

\`\`\`ts
let edad: number = 25
// edad = "veinticinco"  // Error: Type 'string' is not assignable to type 'number'
\`\`\`

**Error 4: Función que puede devolver undefined sin que el código lo maneje**

TypeScript puede detectar situaciones donde un valor podría ser \`undefined\` y obligarte a manejarlo antes de usarlo.

**Los errores de TypeScript son mensajes de ayuda**

Al principio, los errores de TypeScript pueden sentirse frustrantes. Es tentador desactivar la verificación o usar el tipo \`any\` para que "no moleste". Pero esos mensajes son información valiosa que te dice: "aquí hay algo que podría fallar en producción".

Con la práctica, leer los mensajes de error de TypeScript se vuelve fácil y útil. Aprenderás a entender qué está diciendo y cómo resolverlo.

**TypeScript no previene todos los errores**

Es importante aclarar: TypeScript no es magia. Solo ayuda con errores de tipo. No puede prevenir:
- Errores de lógica (calcular mal un descuento)
- Errores de red (el servidor no responde)
- Errores de runtime que no tienen que ver con tipos

TypeScript es una herramienta poderosa, pero no reemplaza las pruebas, la revisión de código ni una buena lógica.`,
    codeExample: `// ── Ejemplo 1: función con tipo incorrecto ───────────────────────────────
// archivo: errores.ts

function calcularIVA(precio: number, porcentaje: number): number {
  return precio * (porcentaje / 100)
}

calcularIVA(100, 21)      // → 21 ✓
// calcularIVA("100", 21) // Error: Argument of type 'string' is not assignable
//                        // to parameter of type 'number'

// ── Ejemplo 2: propiedad inexistente ─────────────────────────────────────

interface Producto {
  nombre: string
  precio: number
}

const laptop: Producto = { nombre: "Laptop", precio: 850 }

console.log(laptop.nombre)   // → Laptop ✓
console.log(laptop.precio)   // → 850 ✓
// console.log(laptop.stock) // Error: Property 'stock' does not exist on type 'Producto'

// ── Ejemplo 3: asignación de tipo incorrecto ──────────────────────────────

let puntuacion: number = 95
// puntuacion = "noventa y cinco"
// Error: Type 'string' is not assignable to type 'number'

// ── Lo que TypeScript NO previene ────────────────────────────────────────

function calcularDescuento(precio: number, descuento: number): number {
  // TypeScript no detecta que la lógica aquí es incorrecta:
  return precio * descuento / 100  // ← debería ser precio - (precio * descuento / 100)
}
// TypeScript verifica tipos, no lógica de negocio.`,
    keyPoints: [
      'TypeScript detecta errores de tipo antes de ejecutar el código: tipos incorrectos, propiedades inexistentes.',
      'En JavaScript, pasar un string a una función que espera número puede causar NaN silenciosamente.',
      'TypeScript muestra errores como mensajes de ayuda, no como obstáculos — úsalos para mejorar el código.',
      'TypeScript no previene errores de lógica, solo errores de tipo.',
      'Usar any para evitar errores de TypeScript elimina la protección que ofrece.',
      'Con práctica, leer y resolver mensajes de error de TypeScript se vuelve rápido y natural.',
    ],
    exercise: {
      description:
        'Observa este código JavaScript y encuentra los 3 posibles errores que TypeScript detectaría si se tiparan las variables: function procesarPedido(cliente, total, cantidad) { return cliente.nombre + " debe pagar: " + total * cantidad }. Piensa: ¿qué tipo debería ser cada parámetro? ¿Qué pasaría si alguien llama procesarPedido(42, "cien", true)?',
      hint: 'Piensa en: ¿puede cliente ser un número? ¿puede total ser un string? ¿puede cantidad ser un booleano? En JavaScript ninguna de esas llamadas daría error inmediato, pero el resultado sería incorrecto.',
    },
    quiz: [
      {
        question: '¿Qué devuelve JavaScript con esta expresión: "5" * 2?',
        options: ['Error de tipo', '"55"', '10', 'undefined'],
        correctAnswer: '10',
        correctFeedback:
          'Correcto. JavaScript convierte el string "5" a número automáticamente al usarse con el operador *. Devuelve 10. TypeScript con tipos number impediría pasar "5" donde se espera un número.',
        incorrectFeedback:
          'No es correcto. JavaScript hace una conversión automática de tipo (coerción): convierte el string "5" a número 5 y luego multiplica por 2. El resultado es 10. TypeScript impediría esta ambigüedad con tipos explícitos.',
      },
      {
        question: '¿Qué sucede en JavaScript si accedes a una propiedad que no existe en un objeto?',
        options: [
          'Un error de ejecución que detiene el programa',
          'Una excepción TypeError automática',
          'Devuelve undefined sin mostrar ningún error',
          'Devuelve null',
        ],
        correctAnswer: 'Devuelve undefined sin mostrar ningún error',
        correctFeedback:
          'Correcto. JavaScript devuelve undefined cuando accedes a una propiedad que no existe. Esto puede causar errores silenciosos que son difíciles de detectar. TypeScript te avisa de inmediato.',
        incorrectFeedback:
          'No es correcto. JavaScript devuelve undefined al acceder a propiedades inexistentes, sin mostrar ningún error. Esto puede causar fallos difíciles de rastrear. TypeScript detecta esto en tiempo de compilación.',
      },
      {
        question: '¿Cuál de estos errores TypeScript NO puede prevenir?',
        options: [
          'Pasar un string donde se espera un número',
          'Acceder a una propiedad que no existe en un objeto tipado',
          'Calcular incorrectamente un descuento por un error de lógica matemática',
          'Asignar un boolean a una variable tipada como string',
        ],
        correctAnswer: 'Calcular incorrectamente un descuento por un error de lógica matemática',
        correctFeedback:
          'Correcto. TypeScript verifica tipos, no lógica de negocio. Un cálculo matemáticamente incorrecto pero con los tipos correctos no será detectado por TypeScript.',
        incorrectFeedback:
          'No es correcto. TypeScript no puede detectar errores de lógica, solo errores de tipo. Si calculas un descuento incorrectamente pero usas number en todos lados, TypeScript no lo detectará.',
      },
      {
        question: '¿Por qué no es buena práctica usar "any" para evitar errores de TypeScript?',
        options: [
          'Porque "any" no existe en TypeScript',
          'Porque "any" hace el código más lento',
          'Porque "any" desactiva la verificación de tipos, eliminando la protección que ofrece TypeScript',
          'Porque "any" solo funciona en variables, no en funciones',
        ],
        correctAnswer: 'Porque "any" desactiva la verificación de tipos, eliminando la protección que ofrece TypeScript',
        correctFeedback:
          'Correcto. Cuando usas any, le dices a TypeScript que no verifique ese valor. Pierdes todo el beneficio de los tipos para esa variable. Es como poner una caja sin etiqueta: ya no sabes qué hay adentro.',
        incorrectFeedback:
          'No es correcto. El problema con any es que desactiva la verificación de tipos. TypeScript no puede darte sugerencias ni detectar errores para valores tipados como any. Úsalo solo cuando sea absolutamente necesario.',
      },
    ],
  },

  // ── Lección 6 ────────────────────────────────────────────────────────────
  {
    slug: 'requisitos-para-aprender-typescript',
    title: 'Qué necesitas saber antes de aprender TypeScript',
    module: 'Introducción a TypeScript',
    moduleNumber: 1,
    order: 6,
    description:
      'Repasa los conocimientos básicos de JavaScript que te ayudarán a aprender TypeScript con más facilidad.',
    explanation: `TypeScript es JavaScript con tipos. Para aprender TypeScript con comodidad, necesitas tener cierta base de JavaScript. No necesitas ser experto, pero sí entender algunos conceptos fundamentales.

**Lo que deberías saber de JavaScript**

**1. Variables: let, const, var**

Saber declarar variables y entender la diferencia entre \`let\` (puede cambiar) y \`const\` (no puede cambiar):

\`\`\`js
let nombre = "Ana"       // puede cambiar
const PI = 3.14          // no puede cambiar
\`\`\`

**2. Tipos de datos básicos**

Conocer los tipos primitivos de JavaScript:
- \`string\` → texto: \`"hola"\`, \`'mundo'\`
- \`number\` → números: \`42\`, \`3.14\`
- \`boolean\` → \`true\` o \`false\`
- \`null\` → ausencia intencional de valor
- \`undefined\` → variable declarada sin valor

**3. Funciones**

Declarar y llamar funciones, incluyendo funciones flecha:

\`\`\`js
function saludar(nombre) {
  return "Hola, " + nombre
}

const saludar = (nombre) => "Hola, " + nombre
\`\`\`

**4. Objetos y arrays**

Crear objetos y acceder a sus propiedades, y trabajar con arrays básicos:

\`\`\`js
const persona = { nombre: "Ana", edad: 28 }
const numeros = [1, 2, 3, 4, 5]
\`\`\`

**5. Métodos de array básicos**

Idealmente conocer \`.map()\`, \`.filter()\`, \`.find()\`, \`.forEach()\`.

**6. Template literals**

\`\`\`js
const mensaje = \`Hola, \${nombre}!\`
\`\`\`

**¿Qué pasa si te falta algo de esto?**

No es un bloqueante absoluto. Puedes aprender TypeScript mientras refuerzas JavaScript. Pero si muchos de estos conceptos te son completamente desconocidos, te recomiendo empezar con el curso de JavaScript desde Cero de RonaldoScript antes de continuar aquí.

**Lo que NO necesitas saber aún**

No necesitas saber React, Next.js, Node.js, npm avanzado, ni nada de backend para aprender los fundamentos de TypeScript. Este curso empieza desde cero con TypeScript.

**Resumen del nivel esperado**

Si puedes leer y entender este código sin mayor dificultad, estás listo para TypeScript:

\`\`\`js
const productos = [
  { nombre: "Laptop", precio: 850 },
  { nombre: "Mouse", precio: 25 }
]

const caros = productos.filter(p => p.precio > 100)
console.log(caros.map(p => p.nombre))
\`\`\``,
    codeExample: `// ── Repaso: conceptos de JavaScript necesarios para TypeScript ───────────
// archivo: repaso.js

// 1. Variables
let puntuacion = 0          // puede cambiar
const MAX_PUNTOS = 100      // constante

// 2. Tipos de datos
const nombre = "Sofía"      // string
const edad = 22             // number
const activo = true         // boolean
const sinValor = null       // null
let indefinido              // undefined (no se asignó valor)

// 3. Funciones
function calcularNota(puntos, total) {
  return (puntos / total) * 10
}

const calcularNota2 = (puntos, total) => (puntos / total) * 10

// 4. Objetos
const estudiante = {
  nombre: "Sofía",
  edad: 22,
  nota: 8.5
}

console.log(estudiante.nombre)   // → Sofía
console.log(estudiante["nota"])  // → 8.5

// 5. Arrays
const notas = [7.5, 8.0, 9.5, 6.0]
const aprobadas = notas.filter(n => n >= 6)
const dobles = notas.map(n => n * 2)

// 6. Template literals
const mensaje = \`\${nombre} tiene \${edad} años y sacó \${estudiante.nota}\`
console.log(mensaje)
// → Sofía tiene 22 años y sacó 8.5

// Si puedes leer esto sin dificultad, estás listo para TypeScript.`,
    keyPoints: [
      'TypeScript requiere conocimientos básicos de JavaScript: variables, tipos, funciones y objetos.',
      'Debes conocer let/const, los tipos primitivos (string, number, boolean, null, undefined) y funciones.',
      'Los métodos de array como .map(), .filter() y .find() son muy comunes en TypeScript.',
      'No necesitas saber React, Node.js ni nada avanzado para empezar con los fundamentos de TypeScript.',
      'Si los conceptos básicos de JavaScript te son completamente desconocidos, empieza con JavaScript primero.',
      'Los template literals (` `) son muy frecuentes en TypeScript y es importante conocerlos.',
    ],
    exercise: {
      description:
        'Autoevalúate: escribe de memoria (sin mirar) una función en JavaScript que reciba un array de objetos con propiedades "nombre" y "precio", filtre los que cuesten más de 50, y devuelva solo los nombres en un nuevo array. Si puedes hacerlo, estás listo para TypeScript. Si no, refuerza primero esos conceptos.',
      hint: 'La solución usa: una función, un array de objetos, .filter() para filtrar por precio, y .map() para obtener solo los nombres. Si no recuerdas alguno de estos métodos, el curso de JavaScript desde Cero te ayudará.',
    },
    quiz: [
      {
        question: '¿Cuál de estos conceptos de JavaScript deberías conocer antes de aprender TypeScript?',
        options: [
          'Cómo crear componentes en React',
          'Cómo usar Express para crear servidores',
          'Qué es let, const, y los tipos primitivos (string, number, boolean)',
          'Cómo configurar webpack y babel',
        ],
        correctAnswer: 'Qué es let, const, y los tipos primitivos (string, number, boolean)',
        correctFeedback:
          'Correcto. Las variables (let, const) y los tipos de datos básicos (string, number, boolean) son el fundamento que necesitas de JavaScript antes de añadir tipos con TypeScript.',
        incorrectFeedback:
          'No es correcto. React, Express, webpack y babel son herramientas más avanzadas que no necesitas para aprender TypeScript. Lo esencial es conocer las variables, tipos primitivos y funciones de JavaScript.',
      },
      {
        question: '¿Qué devuelve este código?\n\nconst nums = [1, 2, 3, 4, 5]\nnums.filter(n => n > 3)',
        options: ['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', 'undefined'],
        correctAnswer: '[4, 5]',
        correctFeedback:
          'Correcto. filter() devuelve un nuevo array con los elementos que cumplen la condición. Solo 4 y 5 son mayores que 3.',
        incorrectFeedback:
          'No es correcto. filter() devuelve un nuevo array con los elementos que pasan la condición n > 3. Solo 4 y 5 cumplen esa condición, por lo que el resultado es [4, 5].',
      },
      {
        question: '¿Necesitas saber React o Next.js para empezar a aprender TypeScript?',
        options: [
          'Sí, TypeScript solo tiene sentido dentro de React',
          'Sí, Next.js es el entorno donde TypeScript funciona mejor',
          'No, TypeScript se puede aprender desde los fundamentos sin frameworks',
          'Solo si quieres usar TypeScript en el frontend',
        ],
        correctAnswer: 'No, TypeScript se puede aprender desde los fundamentos sin frameworks',
        correctFeedback:
          'Correcto. TypeScript tiene sus propios conceptos fundamentales que no dependen de React ni Next.js. Aprenderlos primero te hará más fácil usar TypeScript en cualquier framework.',
        incorrectFeedback:
          'No es correcto. TypeScript es independiente de React y Next.js. Puedes aprender sus fundamentos (tipos, interfaces, funciones tipadas) sin necesitar ningún framework.',
      },
      {
        question: '¿Qué hace el método .map() en un array de JavaScript?',
        options: [
          'Devuelve el primer elemento que cumple una condición',
          'Filtra elementos según una condición y devuelve los que la cumplen',
          'Transforma cada elemento del array y devuelve un nuevo array',
          'Combina todos los elementos en un solo valor',
        ],
        correctAnswer: 'Transforma cada elemento del array y devuelve un nuevo array',
        correctFeedback:
          'Correcto. map() recorre el array, aplica una función a cada elemento y devuelve un nuevo array con los resultados transformados. Por ejemplo: [1,2,3].map(n => n*2) devuelve [2,4,6].',
        incorrectFeedback:
          'No es correcto. map() transforma cada elemento del array y devuelve un nuevo array con los resultados. find() devuelve el primer elemento que cumple una condición. filter() filtra. reduce() combina.',
      },
    ],
  },
]

export const tsModule1: Module = {
  number: 1,
  title: 'Introducción a TypeScript',
  level: 'básico',
  lessons: lessonsTsModule1,
}
