import type { Lesson, Module } from '@/types'

export const lessonsJsModule2: Lesson[] = [
  // ── Lección 7 ────────────────────────────────────────────────────────────
  {
    slug: 'variables-let-const',
    title: 'Variables con let y const',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 7,
    description:
      'Aprende a guardar información usando let y const, y cuándo conviene usar cada una.',
    explanation: `Una **variable** es un espacio con nombre en la memoria de la computadora donde guardas un valor para usarlo después. Imagina una caja con una etiqueta: la etiqueta es el nombre de la variable y lo que hay dentro es el valor.

En JavaScript moderno hay dos formas principales de declarar variables: **let** y **const**.

**let — para valores que pueden cambiar**

Usa \`let\` cuando el valor de la variable puede cambiar durante la ejecución del programa.

\`\`\`js
let edad = 20;
edad = 21;  // ← puedes cambiar el valor, esto es válido
\`\`\`

**const — para valores que no deben cambiar**

Usa \`const\` cuando el valor no va a cambiar. Si intentas reasignarlo, JavaScript lanzará un error.

\`\`\`js
const pais = "Colombia";
pais = "México";  // ← ERROR: no puedes reasignar una const
\`\`\`

**¿Cuándo usar let y cuándo const?**

Una buena regla general: **usa const por defecto**. Solo cambia a let cuando sepas que el valor va a necesitar cambiar. Esto hace el código más predecible y fácil de leer.

Ejemplos donde usar const:
- El nombre de un país o ciudad en tu aplicación.
- El valor del IVA o una tasa fija.
- Una URL de API que no cambiará.

Ejemplos donde usar let:
- La puntuación de un jugador (aumenta con el tiempo).
- El nombre de usuario ingresado en un formulario.
- Un contador que aumenta en un bucle.

**Reglas para nombrar variables**

- Solo pueden contener letras, números, \`_\` y \`$\`.
- No pueden empezar con un número.
- No pueden ser palabras reservadas de JavaScript (let, const, function, if, etc.).
- JavaScript usa el estilo **camelCase**: primera palabra en minúscula, siguientes con mayúscula inicial.

\`\`\`js
let nombreUsuario = "Ana";   // ← camelCase ✓
let nombre_usuario = "Ana";  // ← snake_case (funciona, pero no es estilo JS)
let NombreUsuario = "Ana";   // ← PascalCase (se usa para clases, no variables)
\`\`\``,
    codeExample: `// ── Variables con let ────────────────────────────────────────────────────

let puntuacion = 0;
console.log("Puntuación inicial:", puntuacion); // → 0

puntuacion = puntuacion + 10;
console.log("Después de ganar puntos:", puntuacion); // → 10

puntuacion = puntuacion + 5;
console.log("Puntuación final:", puntuacion); // → 15

// ── Variables con const ───────────────────────────────────────────────────

const nombreJuego = "Aventura en el Bosque";
const maxJugadores = 4;

console.log("Juego:", nombreJuego);
console.log("Máximo de jugadores:", maxJugadores);

// const no permite reasignar:
// nombreJuego = "Otro Juego"; // ← Error: Assignment to constant variable

// ── Ejemplo real: carrito de compras ─────────────────────────────────────

const nombreProducto = "Auriculares";
const precioUnitario = 120;
let cantidadEnCarrito = 1;

cantidadEnCarrito = 3; // el usuario agrega más
let total = precioUnitario * cantidadEnCarrito;

console.log("Producto:", nombreProducto);
console.log("Cantidad:", cantidadEnCarrito);
console.log("Total: $" + total); // → Total: $360`,
    keyPoints: [
      'let se usa para variables que pueden cambiar de valor durante el programa.',
      'const se usa para valores que no deben cambiar; reasignarlos genera un error.',
      'Buena práctica: usa const por defecto y cambia a let solo si el valor necesita cambiar.',
      'Los nombres de variables siguen el estilo camelCase en JavaScript.',
      'Los nombres no pueden empezar con número ni ser palabras reservadas del lenguaje.',
      'Una variable declarada con let o const existe en el ámbito (scope) donde fue creada.',
    ],
    exercise: {
      description:
        'Crea un programa que simule el perfil de un estudiante. Usa const para: nombre, carrera y universidad. Usa let para: semestre actual y promedio. Muestra todos los valores con console.log(). Luego actualiza el semestre (súbelo en 1) y el promedio (ponle un nuevo valor) y vuelve a mostrarlos.',
      hint: 'Recuerda: const no se puede reasignar. Para sumar 1 al semestre: semestre = semestre + 1 o semestre += 1.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre let y const?',
        options: [
          'let es más rápido que const',
          'let puede reasignarse, const no puede reasignarse',
          'const solo funciona con números',
          'let solo funciona con texto',
        ],
        correctAnswer: 'let puede reasignarse, const no puede reasignarse',
        correctFeedback:
          'Correcto. let permite cambiar el valor después de declararlo, const no permite cambiar el valor una vez asignado.',
        incorrectFeedback:
          'No es correcto. La diferencia clave es que let permite reasignar el valor más adelante, mientras que const lo prohíbe y genera un error si lo intentas.',
      },
      {
        question: '¿Qué pasa si intentas reasignar una variable declarada con const?',
        options: [
          'JavaScript ignora la reasignación silenciosamente',
          'La variable toma el nuevo valor sin problemas',
          'JavaScript lanza un error: TypeError',
          'La variable se convierte automáticamente en let',
        ],
        correctAnswer: 'JavaScript lanza un error: TypeError',
        correctFeedback:
          'Correcto. Intentar reasignar una const produce un TypeError con el mensaje "Assignment to constant variable".',
        incorrectFeedback:
          'No es correcto. Intentar reasignar una const produce un error de tipo TypeError. JavaScript no permite esta operación.',
      },
      {
        question: '¿Cuál de estos nombres de variables sigue el estilo recomendado en JavaScript?',
        options: ['nombre_usuario', 'NombreUsuario', 'nombreUsuario', 'NOMBREUSUARIO'],
        correctAnswer: 'nombreUsuario',
        correctFeedback:
          'Correcto. JavaScript usa camelCase: la primera palabra en minúscula y cada palabra siguiente con mayúscula inicial.',
        incorrectFeedback:
          'No es correcto. El estilo recomendado en JavaScript es camelCase: "nombreUsuario". snake_case se usa en Python, PascalCase se reserva para clases.',
      },
      {
        question: '¿Cuál de estas declaraciones de variable producirá un error?',
        options: [
          'let $precio = 100',
          'let _descuento = 0.1',
          'let 2producto = "Libro"',
          'let precioFinal = 90',
        ],
        correctAnswer: 'let 2producto = "Libro"',
        correctFeedback:
          'Correcto. Los nombres de variables no pueden empezar con un número. "2producto" es inválido.',
        incorrectFeedback:
          'No es correcto. Los nombres de variables no pueden empezar con números. "2producto" es inválido. Sí pueden empezar con letras, $ o _.',
      },
      {
        question: '¿Qué muestra este código?\n\nlet x = 10;\nx = x + 5;\nconsole.log(x)',
        options: ['10', '5', '15', 'x + 5'],
        correctAnswer: '15',
        correctFeedback:
          'Correcto. x empieza en 10, luego x = 10 + 5 = 15. console.log(x) muestra 15.',
        incorrectFeedback:
          'No es correcto. x comienza con 10, luego se reasigna a x + 5 = 10 + 5 = 15. console.log(x) muestra el valor actual de x: 15.',
      },
    ],
  },

  // ── Lección 8 ────────────────────────────────────────────────────────────
  {
    slug: 'evitar-var',
    title: '¿Por qué evitar var?',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 8,
    description:
      'Aprende qué es var, por qué existe y por qué en código moderno se recomienda usar let y const.',
    explanation: `Antes de que existieran \`let\` y \`const\` (introducidos en 2015 con ES6), JavaScript solo tenía \`var\` para declarar variables. Si ves código JavaScript antiguo, probablemente encuentres \`var\` por todas partes.

**¿Por qué ya no se recomienda var?**

\`var\` tiene dos comportamientos que pueden causar bugs difíciles de detectar:

**1. Scope de función (no de bloque)**

\`let\` y \`const\` tienen **block scope**: solo existen dentro del bloque \`{}\` donde fueron declaradas. \`var\` tiene **function scope**: existe en toda la función, incluso fuera del bloque donde se declaró.

\`\`\`js
if (true) {
  let x = 10;   // solo existe dentro del if
  var y = 20;   // existe fuera del if también
}
console.log(x); // Error: x is not defined
console.log(y); // 20 — var "se escapa" del bloque
\`\`\`

Esto puede causar que uses una variable sin darte cuenta de que ya fue modificada en otro lugar.

**2. Hoisting (elevación)**

Con \`var\`, puedes usar una variable antes de declararla sin que JavaScript lance un error — simplemente tendrá el valor \`undefined\`. Con \`let\` y \`const\`, esto produce un ReferenceError, lo cual es más útil porque te avisa del error.

\`\`\`js
console.log(nombre); // undefined (con var — no da error, pero confunde)
var nombre = "Ana";

console.log(apellido); // ReferenceError (con let — error claro)
let apellido = "García";
\`\`\`

**¿Debo usar var alguna vez?**

En código nuevo, nunca. Usa siempre \`let\` o \`const\`. Pero reconocerás \`var\` cuando leas código antiguo o tutoriales desactualizados.

**Resumen de las tres palabras clave:**

| | var | let | const |
|---|---|---|---|
| Puede reasignarse | Sí | Sí | No |
| Scope | Función | Bloque | Bloque |
| Hoisting con valor | undefined | Error | Error |
| Recomendado hoy | No | Sí | Sí (preferido) |`,
    codeExample: `// ── Demostración del problema con var ────────────────────────────────────

// Problema 1: var "se escapa" del bloque
function ejemploVar() {
  if (true) {
    var mensaje = "Hola desde el if";
  }
  console.log(mensaje); // "Hola desde el if" — var escapa del if
}

function ejemploLet() {
  if (true) {
    let mensaje = "Hola desde el if";
  }
  // console.log(mensaje); // Error: mensaje is not defined
}

// Problema 2: var se puede declarar dos veces sin error
var nombre = "Ana";
var nombre = "Carlos"; // ← no da error, pero puede causar bugs
console.log(nombre);   // → Carlos

// Con let, esto sería un error claro:
// let apellido = "García";
// let apellido = "Martínez"; // Error: Identifier 'apellido' has already been declared

// ── Código moderno correcto ───────────────────────────────────────────────

const TASA_IVA = 0.16;      // constante: nunca cambia
let precioBase = 500;       // variable: puede cambiar
let precioFinal = precioBase * (1 + TASA_IVA);

console.log("Precio con IVA:", precioFinal); // → 580`,
    keyPoints: [
      'var es la forma antigua de declarar variables en JavaScript, anterior a 2015.',
      'var tiene function scope: existe en toda la función aunque se declare dentro de un if o bucle.',
      'let y const tienen block scope: solo existen dentro del bloque {} donde se declararon.',
      'var permite declararse dos veces sin error, lo que puede causar bugs difíciles de detectar.',
      'En código moderno, siempre usa let o const. Nunca uses var en código nuevo.',
      'Reconocer var en código antiguo es útil, pero no lo imites en tu propio código.',
    ],
    exercise: {
      description:
        'Escribe un pequeño programa con let y const que calcule el precio final de un producto aplicando un descuento y luego un IVA. Usa const para: nombre del producto, precio original, porcentaje de descuento, porcentaje de IVA. Usa let para: precio con descuento y precio final. Muestra cada paso con console.log().',
      hint: 'Fórmula: precioConDescuento = precioOriginal * (1 - descuento). Luego: precioFinal = precioConDescuento * (1 + iva). Si el producto cuesta $200 con 20% de descuento y 16% de IVA, ¿cuánto cuesta al final?',
    },
    quiz: [
      {
        question: '¿Qué tipo de scope tiene var en JavaScript?',
        options: ['Block scope', 'Global scope siempre', 'Function scope', 'Module scope'],
        correctAnswer: 'Function scope',
        correctFeedback:
          'Correcto. var tiene function scope: existe en toda la función donde fue declarada, incluso fuera de bloques if o bucles.',
        incorrectFeedback:
          'No es correcto. var tiene function scope, lo que significa que existe en toda la función donde fue declarada, no solo en el bloque donde aparece.',
      },
      {
        question: '¿Qué muestra este código?\n\nconsole.log(x);\nvar x = 5;',
        options: ['5', 'undefined', 'ReferenceError', 'null'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. var tiene hoisting: la declaración se "eleva" al inicio de la función, pero no el valor. Por eso console.log(x) muestra undefined antes de la asignación.',
        incorrectFeedback:
          'No es correcto. Con var, la declaración se "eleva" (hoisting) pero no el valor asignado. Así que antes de la línea x = 5, x existe pero vale undefined.',
      },
      {
        question: '¿Cuál es la razón principal para no usar var en código moderno?',
        options: [
          'var es más lento que let y const',
          'var no funciona en navegadores modernos',
          'var tiene comportamientos de scope confusos que pueden causar bugs',
          'var no puede guardar strings',
        ],
        correctAnswer: 'var tiene comportamientos de scope confusos que pueden causar bugs',
        correctFeedback:
          'Correcto. El function scope y el hoisting de var pueden causar errores difíciles de detectar. let y const tienen comportamientos más predecibles.',
        incorrectFeedback:
          'No es correcto. var funciona perfectamente en todos los navegadores, pero sus comportamientos de scope (function scope y hoisting) pueden causar bugs difíciles de encontrar.',
      },
    ],
  },

  // ── Lección 9 ────────────────────────────────────────────────────────────
  {
    slug: 'tipos-de-datos-javascript',
    title: 'Tipos de datos',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 9,
    description:
      'Conoce los tipos de datos básicos en JavaScript: strings, numbers, booleans, null, undefined, objects y arrays.',
    explanation: `En JavaScript, cada valor tiene un **tipo de dato** que determina qué puedes hacer con él. Entender los tipos de datos es fundamental porque muchos errores en JavaScript ocurren cuando mezclas tipos sin darte cuenta.

**Los 7 tipos primitivos + objetos**

**1. String (cadena de texto)**
Texto entre comillas simples, dobles o backticks.
\`\`\`js
let nombre = "Lucía";
let saludo = 'Hola';
let mensaje = \`Buenos días, \${nombre}\`;
\`\`\`

**2. Number (número)**
Números enteros y decimales. JavaScript no distingue entre ambos.
\`\`\`js
let edad = 25;
let precio = 99.99;
let temperatura = -5;
\`\`\`

**3. Boolean (booleano)**
Solo puede ser \`true\` o \`false\`.
\`\`\`js
let esMayorDeEdad = true;
let tieneCuenta = false;
\`\`\`

**4. null**
Representa la ausencia intencional de un valor. Lo asignas tú explícitamente.
\`\`\`js
let respuesta = null; // todavía no tenemos respuesta
\`\`\`

**5. undefined**
Una variable que fue declarada pero a la que no se le asignó ningún valor todavía.
\`\`\`js
let x; // x existe pero su valor es undefined
\`\`\`

**6. Object (objeto)**
Una colección de pares clave-valor. Se aprende en detalle en el módulo 4.
\`\`\`js
let persona = { nombre: "Sofía", edad: 30 };
\`\`\`

**7. Array (arreglo)**
Una lista ordenada de valores. Técnicamente es un tipo de objeto.
\`\`\`js
let colores = ["rojo", "azul", "verde"];
\`\`\`

**null vs undefined**

Es una distinción que confunde a los principiantes:
- \`undefined\`: JavaScript aún no sabe qué valor tiene la variable.
- \`null\`: el programador decidió intencionalmente que no hay valor.

Piénsalo así: \`undefined\` es "aún no se sabe", \`null\` es "sabemos que está vacío".

**typeof para verificar tipos**

El operador \`typeof\` te dice el tipo de un valor:
\`\`\`js
typeof "hola"       // → "string"
typeof 42           // → "number"
typeof true         // → "boolean"
typeof undefined    // → "undefined"
typeof null         // → "object" (histórico bug de JS, cuidado)
typeof {}           // → "object"
typeof []           // → "object"
\`\`\``,
    codeExample: `// ── Los tipos de datos en acción ─────────────────────────────────────────

// String
let nombreProducto = "Auriculares Bluetooth";
let categoria = 'Electrónica';

// Number
let precio = 89.99;
let stock = 15;
let calificacion = 4.5;

// Boolean
let enStock = true;
let tieneEnvioGratis = false;

// null (sin valor intencional)
let fechaEntrega = null; // todavía no se confirma

// undefined (sin valor todavía)
let codigoDescuento; // declarada, pero sin valor asignado
console.log(codigoDescuento); // → undefined

// Object
let producto = {
  nombre: "Teclado Mecánico",
  precio: 150,
  disponible: true,
};

// Array
let categorias = ["Electrónica", "Hogar", "Ropa", "Juguetes"];

// ── Verificar tipos con typeof ────────────────────────────────────────────

console.log(typeof nombreProducto); // → "string"
console.log(typeof precio);         // → "number"
console.log(typeof enStock);        // → "boolean"
console.log(typeof fechaEntrega);   // → "object" ← ojo: bug histórico de JS
console.log(typeof codigoDescuento);// → "undefined"`,
    keyPoints: [
      'JavaScript tiene tipos primitivos: string, number, boolean, null, undefined, symbol y bigint.',
      'También tiene tipos de referencia: object y array (que es un tipo especial de object).',
      'null es ausencia intencional de valor; undefined es una variable sin valor asignado todavía.',
      'typeof permite saber el tipo de un valor, pero cuidado: typeof null devuelve "object" (bug histórico).',
      'JavaScript es un lenguaje de tipado dinámico: una variable puede cambiar de tipo.',
      'Conocer los tipos es clave para evitar errores al operar con valores de distintos tipos.',
    ],
    exercise: {
      description:
        'Crea variables que representen la ficha de un estudiante: nombre (string), edad (number), promedio (number con decimales), estaInscrito (boolean), materiaFavorita (string), becaActual (null si no tiene). Usa typeof para verificar el tipo de cada variable y muéstralo en la consola.',
      hint: 'Recuerda que typeof devuelve un string con el nombre del tipo. Puedes hacer: console.log("Tipo de nombre:", typeof nombre).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre null y undefined?',
        options: [
          'Son exactamente lo mismo en JavaScript',
          'null es ausencia intencional; undefined es una variable sin valor asignado',
          'undefined es más nuevo que null',
          'null es para números, undefined es para strings',
        ],
        correctAnswer: 'null es ausencia intencional; undefined es una variable sin valor asignado',
        correctFeedback:
          'Correcto. null lo asignas tú explícitamente para indicar "sin valor". undefined aparece cuando una variable fue declarada pero no tiene valor aún.',
        incorrectFeedback:
          'No es correcto. null es un valor que asignas intencionalmente para indicar ausencia. undefined aparece automáticamente cuando una variable existe pero no tiene valor asignado.',
      },
      {
        question: '¿Qué devuelve typeof null?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correctAnswer: '"object"',
        correctFeedback:
          'Correcto. typeof null devuelve "object" — esto es un error histórico de JavaScript que se mantiene por compatibilidad.',
        incorrectFeedback:
          'No es correcto. typeof null devuelve "object", lo cual es considerado un bug histórico de JavaScript que se mantiene por compatibilidad con código antiguo.',
      },
      {
        question: '¿Cuál de estos valores es de tipo boolean?',
        options: ['"true"', '1', 'true', 'undefined'],
        correctAnswer: 'true',
        correctFeedback:
          'Correcto. true (sin comillas) es el valor booleano verdadero. "true" con comillas sería un string.',
        incorrectFeedback:
          'No es correcto. El valor boolean true va sin comillas. "true" entre comillas es un string, y 1 es un número.',
      },
      {
        question: '¿Qué tipo devuelve typeof [] (un array vacío)?',
        options: ['"array"', '"list"', '"object"', '"undefined"'],
        correctAnswer: '"object"',
        correctFeedback:
          'Correcto. Los arrays en JavaScript son un tipo especial de objeto, por lo que typeof [] devuelve "object".',
        incorrectFeedback:
          'No es correcto. En JavaScript, los arrays son un tipo especial de objeto, así que typeof [] devuelve "object". Para verificar si algo es un array usa Array.isArray().',
      },
    ],
  },

  // ── Lección 10 ────────────────────────────────────────────────────────────
  {
    slug: 'strings-template-literals',
    title: 'Strings y template literals',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 10,
    description:
      'Aprende a trabajar con texto y a crear mensajes dinámicos usando template literals.',
    explanation: `Los **strings** (cadenas de texto) son uno de los tipos de datos más usados en programación. En JavaScript puedes crearlos con comillas simples, dobles, o backticks (template literals).

**Comillas simples y dobles**

Son equivalentes. Usa la que prefieras, pero sé consistente:
\`\`\`js
let a = "Hola";   // comillas dobles
let b = 'Mundo';  // comillas simples
\`\`\`

Si tu texto contiene una comilla del mismo tipo que usas para delimitar el string, necesitas escaparla con \\\\ o usar el otro tipo de comillas:
\`\`\`js
let frase = "Ella dijo: \\"Hola\\"";   // escapar con backslash
let frase2 = 'Ella dijo: "Hola"';   // usar el otro tipo de comillas
\`\`\`

**Template literals (la forma moderna)**

Los template literals usan backticks (\` \`) y permiten:
1. Insertar variables directamente con \`\${variable}\`.
2. Escribir strings en varias líneas.

\`\`\`js
const nombre = "Andrés";
const edad = 22;

// Sin template literals (concatenación clásica):
console.log("Hola, " + nombre + ". Tienes " + edad + " años.");

// Con template literals (más limpio):
console.log(\`Hola, \${nombre}. Tienes \${edad} años.\`);
\`\`\`

**Propiedades y métodos útiles de strings**

Los strings tienen propiedades y métodos que puedes usar:

- \`.length\` — longitud del string.
- \`.toUpperCase()\` — convierte a mayúsculas.
- \`.toLowerCase()\` — convierte a minúsculas.
- \`.trim()\` — elimina espacios al inicio y final.
- \`.includes("texto")\` — devuelve true si contiene ese texto.
- \`.startsWith("texto")\` — devuelve true si empieza con ese texto.
- \`.replace("viejo", "nuevo")\` — reemplaza texto.
- \`.slice(inicio, fin)\` — extrae una parte del string.

**Acceder a caracteres individuales**

Puedes acceder a cada carácter por su posición (índice), que empieza en 0:
\`\`\`js
let palabra = "Hola";
console.log(palabra[0]); // → "H"
console.log(palabra[3]); // → "a"
\`\`\``,
    codeExample: `// ── Strings básicos ──────────────────────────────────────────────────────

const nombre = "Valentina";
const apellido = 'Ramírez';
const ciudad = "Bogotá";

// Concatenación clásica (menos recomendada)
console.log("Nombre completo: " + nombre + " " + apellido);

// Template literal (recomendado)
console.log(\`Nombre completo: \${nombre} \${apellido}\`);
console.log(\`Vive en: \${ciudad}\`);

// Expresión dentro de template literal
const anioNacimiento = 2001;
const anioActual = 2025;
console.log(\`Edad aproximada: \${anioActual - anioNacimiento} años\`);

// ── Métodos de strings ────────────────────────────────────────────────────

const correo = "  usuario@ejemplo.com  ";
console.log(correo.trim());            // → "usuario@ejemplo.com"
console.log(correo.trim().length);     // → 20

const titulo = "javascript desde cero";
console.log(titulo.toUpperCase());     // → "JAVASCRIPT DESDE CERO"

const descripcion = "Aprende JavaScript con ejemplos prácticos";
console.log(descripcion.includes("JavaScript")); // → true
console.log(descripcion.startsWith("Aprende"));  // → true
console.log(descripcion.replace("JavaScript", "JS")); // → "Aprende JS con ejemplos prácticos"

// ── Acceder a caracteres ──────────────────────────────────────────────────

const lenguaje = "JavaScript";
console.log(lenguaje[0]);        // → "J"
console.log(lenguaje.length);    // → 10
console.log(lenguaje.slice(0, 4)); // → "Java"`,
    keyPoints: [
      'Los strings pueden crearse con comillas simples, dobles o backticks.',
      'Los template literals (backticks) permiten insertar variables con ${variable} directamente.',
      'Los template literals también permiten strings multilínea sin caracteres especiales.',
      '.length devuelve la cantidad de caracteres del string.',
      'Métodos útiles: toUpperCase(), toLowerCase(), trim(), includes(), replace(), slice().',
      'Los caracteres se acceden por índice empezando en 0: string[0] es el primer carácter.',
    ],
    exercise: {
      description:
        'Crea variables con tu nombre, apellido y ciudad. Luego usa template literals para construir: 1) Un saludo formal: "Buenos días, [nombre] [apellido]." 2) Una presentación: "Me llamo [nombre], soy de [ciudad]." 3) Prueba al menos 3 métodos de string con alguno de tus datos (por ejemplo, toUpperCase(), includes(), length).',
      hint: 'Recuerda la sintaxis de template literal: `texto ${variable} más texto`. Para los métodos, escríbelos después de la variable: nombre.toUpperCase().',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para insertar una variable dentro de un template literal?',
        options: ['{{variable}}', '#{variable}', '${variable}', '%{variable}'],
        correctAnswer: '${variable}',
        correctFeedback:
          'Correcto. Dentro de un template literal (backticks), usas ${variable} para insertar el valor de una variable.',
        incorrectFeedback:
          'No es correcto. La sintaxis para insertar variables en template literals de JavaScript es ${variable}, siempre dentro de backticks.',
      },
      {
        question: '¿Qué devuelve "JavaScript".length?',
        options: ['9', '10', '11', 'undefined'],
        correctAnswer: '10',
        correctFeedback:
          'Correcto. "JavaScript" tiene 10 caracteres: J-a-v-a-S-c-r-i-p-t.',
        incorrectFeedback:
          'No es correcto. Cuenta los caracteres: J-a-v-a-S-c-r-i-p-t = 10 caracteres. .length devuelve 10.',
      },
      {
        question: '¿Qué produce este código?\n\nconst ciudad = "  Lima  ";\nconsole.log(ciudad.trim())',
        options: ['"  Lima  "', '"Lima"', '"lima"', 'Error'],
        correctAnswer: '"Lima"',
        correctFeedback:
          'Correcto. .trim() elimina los espacios al inicio y al final del string, dejando "Lima".',
        incorrectFeedback:
          'No es correcto. El método .trim() elimina los espacios en blanco al inicio y al final del string. "  Lima  " se convierte en "Lima".',
      },
      {
        question: '¿Qué devuelve "Hola mundo".includes("mundo")?',
        options: ['true', 'false', '"mundo"', '5'],
        correctAnswer: 'true',
        correctFeedback:
          'Correcto. .includes() devuelve true si el string contiene el texto buscado, y "Hola mundo" sí contiene "mundo".',
        incorrectFeedback:
          'No es correcto. .includes() devuelve true o false. Como "Hola mundo" contiene "mundo", el resultado es true.',
      },
    ],
  },

  // ── Lección 11 ────────────────────────────────────────────────────────────
  {
    slug: 'numbers-operaciones',
    title: 'Numbers y operaciones matemáticas',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 11,
    description:
      'Aprende a trabajar con números, operaciones aritméticas y algunos comportamientos importantes de JavaScript.',
    explanation: `En JavaScript, todos los números — enteros y decimales — son del tipo \`number\`. No hay tipos separados como \`int\` o \`float\` como en otros lenguajes.

**Operadores aritméticos**

| Operador | Significado | Ejemplo | Resultado |
|----------|------------|---------|-----------|
| + | Suma | 5 + 3 | 8 |
| - | Resta | 10 - 4 | 6 |
| * | Multiplicación | 6 * 7 | 42 |
| / | División | 15 / 4 | 3.75 |
| % | Módulo (resto) | 17 % 5 | 2 |
| ** | Potencia | 2 ** 8 | 256 |

**El operador % (módulo)**

El módulo devuelve el **resto** de una división. Es muy útil:
- Saber si un número es par: \`numero % 2 === 0\`
- Contar en ciclos: minutos, ángulos, etc.

**Operadores de asignación abreviada**

\`\`\`js
let x = 10;
x += 5;  // equivale a: x = x + 5  → 15
x -= 3;  // equivale a: x = x - 3  → 12
x *= 2;  // equivale a: x = x * 2  → 24
x /= 4;  // equivale a: x = x / 4  → 6
x++;     // equivale a: x = x + 1  → 7
x--;     // equivale a: x = x - 1  → 6
\`\`\`

**Cuidados importantes**

**Números con punto flotante:** JavaScript tiene el mismo comportamiento que muchos lenguajes con decimales:
\`\`\`js
console.log(0.1 + 0.2); // → 0.30000000000000004 (no 0.3)
\`\`\`
Esto se debe a cómo los computadores representan decimales en binario. Para dinero u operaciones precisas, multiplica por 100 y luego divide.

**NaN (Not a Number):** el resultado de una operación matemática inválida.
\`\`\`js
console.log("hola" * 3); // → NaN
console.log(NaN === NaN); // → false (peculiaridad de JS)
console.log(isNaN("hola" * 3)); // → true
\`\`\`

**Infinity:** ocurre cuando divides por cero.
\`\`\`js
console.log(10 / 0); // → Infinity
\`\`\`

**El objeto Math**

JavaScript tiene el objeto \`Math\` con funciones matemáticas:
- \`Math.round(4.7)\` → 5 (redondear al entero más cercano)
- \`Math.floor(4.9)\` → 4 (redondear hacia abajo)
- \`Math.ceil(4.1)\` → 5 (redondear hacia arriba)
- \`Math.abs(-15)\` → 15 (valor absoluto)
- \`Math.max(3, 8, 1)\` → 8 (máximo)
- \`Math.min(3, 8, 1)\` → 1 (mínimo)
- \`Math.random()\` → número aleatorio entre 0 y 1`,
    codeExample: `// ── Operaciones básicas ──────────────────────────────────────────────────

let precio = 250;
let cantidad = 3;
let descuento = 0.1; // 10%

let subtotal = precio * cantidad;
let ahorro = subtotal * descuento;
let total = subtotal - ahorro;

console.log("Subtotal:", subtotal);    // → 750
console.log("Ahorro:", ahorro);        // → 75
console.log("Total a pagar:", total);  // → 675

// ── Módulo (resto de división) ────────────────────────────────────────────

let numero = 17;
console.log(numero % 2 === 0 ? "par" : "impar"); // → "impar"

// ── Operadores abreviados ─────────────────────────────────────────────────

let puntos = 0;
puntos += 100; // ganó un nivel
puntos += 50;  // encontró un ítem
puntos -= 20;  // perdió vidas
console.log("Puntos totales:", puntos); // → 130

// ── Math ──────────────────────────────────────────────────────────────────

let calificacion = 7.8;
console.log(Math.round(calificacion)); // → 8
console.log(Math.floor(calificacion)); // → 7
console.log(Math.ceil(calificacion));  // → 8

// Número aleatorio entre 1 y 10
let aleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio:", aleatorio);

// ── Cuidado con decimales ─────────────────────────────────────────────────

console.log(0.1 + 0.2);                    // → 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));       // → "0.30" (string con 2 decimales)`,
    keyPoints: [
      'En JavaScript todos los números son de tipo number, sin distinción entre enteros y decimales.',
      'Los operadores aritméticos: + - * / % ** (potencia).',
      'El módulo % devuelve el resto de una división y es útil para verificar paridad o ciclos.',
      'Los operadores abreviados += -= *= /= ++ -- simplifican actualizaciones de variables.',
      'JavaScript puede producir NaN (operación inválida) o Infinity (división por cero).',
      'El objeto Math provee funciones útiles: round, floor, ceil, abs, max, min, random.',
    ],
    exercise: {
      description:
        'Escribe un programa que calcule: 1) El área de un rectángulo con ancho=15 y alto=8. 2) Si un número de tu elección es par o impar usando el operador %. 3) El promedio de 5 calificaciones que elijas. 4) El número mayor entre 3 valores usando Math.max(). Muestra cada resultado con console.log() y una etiqueta descriptiva.',
      hint: 'Área = base * altura. Par/impar: numero % 2 === 0 es par. Promedio = (suma de todos) / cantidad. Math.max(a, b, c) devuelve el mayor.',
    },
    quiz: [
      {
        question: '¿Qué resultado produce 17 % 5?',
        options: ['3', '2', '3.4', '12'],
        correctAnswer: '2',
        correctFeedback:
          'Correcto. 17 dividido entre 5 es 3 con residuo 2. El operador % devuelve ese residuo: 2.',
        incorrectFeedback:
          'No es correcto. El operador % devuelve el resto de la división. 17 ÷ 5 = 3 con residuo 2, por lo que 17 % 5 = 2.',
      },
      {
        question: '¿Qué muestra console.log(0.1 + 0.2)?',
        options: ['0.3', '0.30000000000000004', 'NaN', 'Error'],
        correctAnswer: '0.30000000000000004',
        correctFeedback:
          'Correcto. Esto se debe a cómo los computadores representan decimales en binario. Para mostrar solo 2 decimales usa .toFixed(2).',
        incorrectFeedback:
          'No es correcto. Por la representación de decimales en binario, 0.1 + 0.2 en JavaScript produce 0.30000000000000004, no exactamente 0.3.',
      },
      {
        question: '¿Qué devuelve Math.floor(4.9)?',
        options: ['5', '4', '4.9', 'Error'],
        correctAnswer: '4',
        correctFeedback:
          'Correcto. Math.floor() siempre redondea hacia abajo al entero más cercano, sin importar la parte decimal.',
        incorrectFeedback:
          'No es correcto. Math.floor() redondea siempre hacia abajo. Math.floor(4.9) devuelve 4, no 5.',
      },
      {
        question: '¿Qué produce este código?\n\nconsole.log("5" * 2)',
        options: ['"52"', '10', 'NaN', 'Error'],
        correctAnswer: '10',
        correctFeedback:
          'Correcto. JavaScript convierte automáticamente el string "5" a número cuando se usa con *. "5" * 2 = 10.',
        incorrectFeedback:
          'No es correcto. Al usar el operador *, JavaScript intenta convertir "5" a número. "5" → 5, y 5 * 2 = 10.',
      },
    ],
  },

  // ── Lección 12 ────────────────────────────────────────────────────────────
  {
    slug: 'booleanos-truthy-falsy',
    title: 'Booleanos y valores truthy/falsy',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 12,
    description:
      'Aprende cómo funcionan los booleanos y qué significa que un valor sea truthy o falsy en JavaScript.',
    explanation: `Los **booleanos** son el tipo de dato más simple: solo pueden ser \`true\` o \`false\`. Son fundamentales para tomar decisiones en un programa (condicionales, bucles, validaciones).

**¿De dónde vienen los booleanos?**

Puedes crearlos directamente o como resultado de comparaciones:
\`\`\`js
let activo = true;
let bloqueado = false;
let esMayor = edad >= 18;    // true o false según el valor de edad
let coincide = nombre === "Ana";
\`\`\`

**Truthy y Falsy — el concepto clave**

JavaScript tiene un comportamiento especial: cuando necesita un booleano (por ejemplo, en un \`if\`), convierte automáticamente cualquier valor a \`true\` o \`false\`. A esto se le llama **coerción de tipo**.

Los valores que se convierten a \`false\` se llaman **falsy**. Solo hay 6 valores falsy en JavaScript:

| Valor | Tipo |
|-------|------|
| false | boolean |
| 0 | number |
| "" (string vacío) | string |
| null | null |
| undefined | undefined |
| NaN | number |

**Todos los demás valores son truthy** — es decir, se comportan como \`true\` en un contexto booleano.

\`\`\`js
// Truthy (se comportan como true):
if (1) ...             // número distinto de 0
if ("hola") ...        // string no vacío
if ([]) ...            // array vacío (sorprendente, pero es truthy)
if ({}) ...            // objeto vacío (también truthy)

// Falsy (se comportan como false):
if (0) ...             // cero
if ("") ...            // string vacío
if (null) ...          // null
if (undefined) ...     // undefined
\`\`\`

**¿Por qué es útil?**

Puedes escribir condiciones más cortas:
\`\`\`js
let nombre = "";

// En lugar de:
if (nombre !== "" && nombre !== null && nombre !== undefined) ...

// Puedes escribir:
if (nombre) ... // solo es truthy si nombre tiene contenido real
\`\`\`

**Errores comunes con truthy/falsy:**

- \`[]\` (array vacío) es **truthy**. Muchos principiantes asumen que es falsy por estar "vacío".
- \`0\` es **falsy**, así que \`if (cantidad)\` puede fallar si la cantidad legítimamente es 0.
- El string \`"false"\` es **truthy** porque es un string no vacío.`,
    codeExample: `// ── Booleanos básicos ────────────────────────────────────────────────────

let usuarioConectado = true;
let tieneSuscripcion = false;

console.log(usuarioConectado);     // → true
console.log(tieneSuscripcion);     // → false
console.log(typeof true);          // → "boolean"

// ── Booleanos desde comparaciones ────────────────────────────────────────

let calificacion = 75;
let aprobado = calificacion >= 60;
console.log("¿Aprobó?", aprobado); // → true

// ── Truthy y Falsy ────────────────────────────────────────────────────────

// Valores falsy:
console.log(Boolean(0));         // → false
console.log(Boolean(""));        // → false
console.log(Boolean(null));      // → false
console.log(Boolean(undefined)); // → false
console.log(Boolean(NaN));       // → false

// Valores truthy:
console.log(Boolean(1));         // → true
console.log(Boolean("hola"));    // → true
console.log(Boolean([]));        // → true (¡array vacío es truthy!)
console.log(Boolean({}));        // → true (¡objeto vacío es truthy!)

// ── Uso práctico de truthy/falsy ──────────────────────────────────────────

let nombreUsuario = "";

if (nombreUsuario) {
  console.log("Bienvenido,", nombreUsuario);
} else {
  console.log("Por favor ingresa tu nombre"); // ← se ejecuta porque "" es falsy
}

// Cuidado: 0 es falsy
let itemsEnCarrito = 0;
if (itemsEnCarrito) {
  console.log("Tienes items");
} else {
  console.log("Carrito vacío"); // ← se ejecuta aunque 0 es un número válido
}`,
    keyPoints: [
      'Los booleanos solo tienen dos valores posibles: true o false.',
      'Los 6 valores falsy de JavaScript: false, 0, "" (string vacío), null, undefined y NaN.',
      'Todos los demás valores son truthy, incluyendo [], {} y cualquier número distinto de 0.',
      'Boolean() convierte cualquier valor a su equivalente booleano.',
      'Los valores truthy/falsy permiten escribir condiciones más cortas, pero requieren cuidado.',
      'El string "false" es truthy porque es un string no vacío — es un error común de principiantes.',
    ],
    exercise: {
      description:
        'Para cada uno de estos valores, predice si es truthy o falsy y luego verifica con Boolean(): 1) 0, 2) "0", 3) [], 4) -1, 5) "", 6) " " (espacio), 7) null, 8) false, 9) "false", 10) 0.0. ¿Cuáles te sorprendieron?',
      hint: 'Boolean(valor) convierte el valor y muestra true o false. Recuerda: solo hay 6 falsy. Todo lo demás, sin excepción, es truthy.',
    },
    quiz: [
      {
        question: '¿Cuál de estos valores es FALSY en JavaScript?',
        options: ['"false"', '[]', '{}', '0'],
        correctAnswer: '0',
        correctFeedback:
          'Correcto. El número 0 es falsy. "false" es un string no vacío (truthy), [] y {} son truthy aunque estén vacíos.',
        incorrectFeedback:
          'No es correcto. El único valor falsy entre las opciones es 0. "false" es un string (truthy), [] y {} son objetos (truthy).',
      },
      {
        question: '¿Qué muestra Boolean([]) en JavaScript?',
        options: ['false', 'true', 'undefined', 'Error'],
        correctAnswer: 'true',
        correctFeedback:
          'Correcto. Un array vacío [] es truthy en JavaScript, lo que sorprende a muchos principiantes.',
        incorrectFeedback:
          'No es correcto. Un array vacío [] es truthy en JavaScript. Boolean([]) devuelve true. Solo los 6 valores específicos (false, 0, "", null, undefined, NaN) son falsy.',
      },
      {
        question: '¿Cuántos valores falsy existen en JavaScript?',
        options: ['3', '4', '6', '8'],
        correctAnswer: '6',
        correctFeedback:
          'Correcto. Los 6 valores falsy son: false, 0, "" (string vacío), null, undefined y NaN.',
        incorrectFeedback:
          'No es correcto. JavaScript tiene exactamente 6 valores falsy: false, 0, "" (string vacío), null, undefined y NaN. Todo lo demás es truthy.',
      },
    ],
  },

  // ── Lección 13 ────────────────────────────────────────────────────────────
  {
    slug: 'operadores-comparacion-logicos-js',
    title: 'Operadores de comparación y lógicos',
    module: 'Fundamentos de JavaScript',
    moduleNumber: 2,
    order: 13,
    description:
      'Aprende a comparar valores y combinar condiciones usando operadores como ===, !==, >, <, &&, || y !.',
    explanation: `Los **operadores de comparación** comparan dos valores y devuelven \`true\` o \`false\`. Los **operadores lógicos** combinan múltiples condiciones.

**Operadores de comparación**

| Operador | Significado | Ejemplo | Resultado |
|----------|------------|---------|-----------|
| === | Igual (estricto) | 5 === 5 | true |
| !== | Diferente (estricto) | 5 !== 3 | true |
| > | Mayor que | 8 > 5 | true |
| < | Menor que | 3 < 10 | true |
| >= | Mayor o igual | 5 >= 5 | true |
| <= | Menor o igual | 4 <= 3 | false |
| == | Igual (débil) | "5" == 5 | true |
| != | Diferente (débil) | "5" != 5 | false |

**=== vs == (la diferencia crucial)**

\`===\` compara valor **y tipo**. \`==\` solo compara valor y convierte tipos automáticamente.

\`\`\`js
5 === 5       // → true  (mismo valor, mismo tipo)
"5" === 5     // → false (mismo valor, pero distinto tipo)
"5" == 5      // → true  (JS convierte "5" a número para comparar)
0 == false    // → true  (JS convierte false a 0)
0 === false   // → false (number vs boolean, distinto tipo)
\`\`\`

**Siempre usa === en lugar de ==** en código moderno. El == puede dar resultados inesperados.

**Operadores lógicos**

| Operador | Nombre | Comportamiento |
|----------|--------|---------------|
| && | AND (Y) | true solo si ambos son true |
| \|\| | OR (O) | true si al menos uno es true |
| ! | NOT (negación) | invierte el booleano |

\`\`\`js
true && true   // → true
true && false  // → false
false || true  // → true
false || false // → false
!true          // → false
!false         // → true
\`\`\`

**Short-circuit evaluation**

- \`&&\` para cuando encuentra el primer falsy y devuelve ese valor.
- \`||\` para cuando encuentra el primer truthy y devuelve ese valor.

\`\`\`js
let nombre = null;
let nombreMostrar = nombre || "Anónimo"; // → "Anónimo"
\`\`\``,
    codeExample: `// ── Operadores de comparación ────────────────────────────────────────────

let edad = 20;
let edadMinima = 18;

console.log(edad >= edadMinima);   // → true  (es mayor de edad)
console.log(edad === 20);          // → true  (valor y tipo coinciden)
console.log(edad === "20");        // → false (number vs string)
console.log(edad == "20");         // → true  (== convierte tipos, evítalo)

// ── Operadores lógicos ────────────────────────────────────────────────────

let tieneEntrada = true;
let llegoPuntoal = false;
let esVIP = true;

// AND: entra solo si tiene entrada Y llegó puntual
console.log(tieneEntrada && llegoPuntoal); // → false

// OR: entra si tiene entrada O es VIP
console.log(tieneEntrada || esVIP);        // → true

// NOT: invierte
console.log(!tieneEntrada);  // → false
console.log(!llegoPuntoal);  // → true

// ── Ejemplo real: validación de formulario ────────────────────────────────

const usuario = "ana";
const contrasena = "12345";

const usuarioValido = usuario.length >= 3;
const contrasenaValida = contrasena.length >= 8;

console.log("¿Usuario válido?", usuarioValido);    // → true
console.log("¿Contraseña válida?", contrasenaValida); // → false
console.log("¿Puede registrarse?", usuarioValido && contrasenaValida); // → false

// ── Short-circuit con || ──────────────────────────────────────────────────

let nombreGuardado = null;
let nombreMostrar = nombreGuardado || "Usuario anónimo";
console.log(nombreMostrar); // → "Usuario anónimo"`,
    keyPoints: [
      'Los operadores de comparación devuelven true o false: ===, !==, >, <, >=, <=.',
      '=== compara valor Y tipo (estricto); == solo compara valor convirtiendo tipos (evítalo).',
      'Siempre usa === en lugar de == para evitar resultados inesperados.',
      'Los operadores lógicos: && (AND), || (OR), ! (NOT).',
      '&& devuelve true solo si ambas condiciones son true.',
      '|| devuelve true si al menos una condición es true.',
      'El short-circuit de || permite valores por defecto: let x = valor || "default".',
    ],
    exercise: {
      description:
        'Escribe un programa que valide si un usuario puede hacer login. Condiciones: el email debe tener al menos 5 caracteres, la contraseña debe tener al menos 8 caracteres, y el usuario no debe estar bloqueado (usa una variable booleana). Usa && para combinar las condiciones y muestra "Acceso permitido" o "Acceso denegado" según el resultado.',
      hint: 'email.length >= 5, password.length >= 8, !bloqueado. Combina con &&: const puedeLogin = emailValido && passwordValida && !bloqueado.',
    },
    quiz: [
      {
        question: '¿Qué devuelve "5" === 5?',
        options: ['true', 'false', 'undefined', 'Error'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. === compara valor y tipo. "5" es un string y 5 es un number, son tipos distintos, por lo que el resultado es false.',
        incorrectFeedback:
          'No es correcto. El operador === compara tanto el valor como el tipo. "5" es string y 5 es number — tipos distintos, resultado: false.',
      },
      {
        question: '¿Qué devuelve true && false?',
        options: ['true', 'false', 'null', 'undefined'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. El operador && (AND) solo devuelve true si AMBOS operandos son true. Como false es uno de ellos, el resultado es false.',
        incorrectFeedback:
          'No es correcto. && (AND) requiere que ambos valores sean true. Como uno es false, el resultado es false.',
      },
      {
        question: '¿Qué resultado tiene este código?\n\nlet x = null;\nlet y = x || "valor por defecto";\nconsole.log(y)',
        options: ['null', '"valor por defecto"', 'undefined', 'false'],
        correctAnswer: '"valor por defecto"',
        correctFeedback:
          'Correcto. null es falsy, así que || evalúa el segundo operando y devuelve "valor por defecto".',
        incorrectFeedback:
          'No es correcto. null es un valor falsy. Con ||, JavaScript devuelve el segundo operando cuando el primero es falsy. Resultado: "valor por defecto".',
      },
      {
        question: '¿Qué devuelve !false?',
        options: ['false', 'true', '0', 'null'],
        correctAnswer: 'true',
        correctFeedback:
          'Correcto. El operador ! (NOT) invierte el booleano. !false devuelve true.',
        incorrectFeedback:
          'No es correcto. El operador ! invierte el valor booleano. !false devuelve true.',
      },
    ],
  },
]

export const jsModule2: Module = {
  number: 2,
  title: 'Fundamentos de JavaScript',
  level: 'básico',
  lessons: lessonsJsModule2,
}
