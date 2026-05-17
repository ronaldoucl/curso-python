import type { Lesson, Module } from '@/types'

export const lessonsJsModule3: Lesson[] = [
  // ── Lección 14 ────────────────────────────────────────────────────────────
  {
    slug: 'condicionales-if-else-js',
    title: 'Condicionales if, else if, else',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 14,
    description:
      'Aprende a hacer que tus programas tomen decisiones usando if, else if y else.',
    explanation: `Los **condicionales** permiten que un programa tome decisiones. En lugar de ejecutar siempre el mismo código, puede elegir qué hacer según si una condición es verdadera o falsa.

Imagina un cajero automático: si el saldo es suficiente, entrega el dinero. Si no lo es, muestra un error. Esa lógica de decisión se implementa con condicionales.

**Estructura básica: if**

\`\`\`js
if (condicion) {
  // se ejecuta si la condición es true
}
\`\`\`

**if / else**

\`\`\`js
if (condicion) {
  // se ejecuta si es true
} else {
  // se ejecuta si es false
}
\`\`\`

**if / else if / else**

Cuando hay más de dos casos posibles:

\`\`\`js
if (condicion1) {
  // si condicion1 es true
} else if (condicion2) {
  // si condicion1 es false y condicion2 es true
} else if (condicion3) {
  // si las anteriores son false y esta es true
} else {
  // si ninguna condición fue true
}
\`\`\`

JavaScript evalúa las condiciones de arriba a abajo y ejecuta **solo el primer bloque** cuya condición sea verdadera. Una vez que encuentra uno, salta el resto.

**Operador ternario — versión compacta**

Para condiciones simples de dos caminos puedes usar el operador ternario:

\`\`\`js
let resultado = condicion ? "valor si true" : "valor si false";
\`\`\`

Ejemplo:
\`\`\`js
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
\`\`\`

**Errores comunes:**

- **Usar = en lugar de ===:** \`if (x = 5)\` asigna 5 a x en lugar de comparar. Usa \`if (x === 5)\`.
- **Olvidar las llaves {}:** para un solo statement son opcionales, pero omitirlas puede causar bugs cuando agregas más líneas después.`,
    codeExample: `// ── if básico ────────────────────────────────────────────────────────────

let temperatura = 35;

if (temperatura > 30) {
  console.log("Hace mucho calor, usa ropa ligera.");
}
// → Hace mucho calor, usa ropa ligera.

// ── if / else ────────────────────────────────────────────────────────────

let saldo = 500;
let retiro = 800;

if (retiro <= saldo) {
  console.log("Retiro exitoso. Saldo restante:", saldo - retiro);
} else {
  console.log("Saldo insuficiente. Necesitas:", retiro - saldo, "más.");
}
// → Saldo insuficiente. Necesitas: 300 más.

// ── if / else if / else ───────────────────────────────────────────────────

let calificacion = 78;
let nota;

if (calificacion >= 90) {
  nota = "A - Excelente";
} else if (calificacion >= 80) {
  nota = "B - Bueno";
} else if (calificacion >= 70) {
  nota = "C - Regular";
} else if (calificacion >= 60) {
  nota = "D - Suficiente";
} else {
  nota = "F - Reprobado";
}

console.log(\`Calificación: \${calificacion} → \${nota}\`);
// → Calificación: 78 → C - Regular

// ── Operador ternario ─────────────────────────────────────────────────────

let edad = 17;
let acceso = edad >= 18 ? "Acceso permitido" : "Acceso denegado";
console.log(acceso); // → Acceso denegado`,
    keyPoints: [
      'if ejecuta un bloque solo si la condición es true.',
      'else se ejecuta cuando la condición del if es false.',
      'else if permite evaluar múltiples condiciones secuencialmente.',
      'Solo el primer bloque cuya condición sea true se ejecuta.',
      'El operador ternario (condicion ? valorTrue : valorFalse) es una forma compacta de if/else.',
      'Siempre usa === para comparar, no = (que asigna) ni == (que convierte tipos).',
    ],
    exercise: {
      description:
        'Escribe un programa que determine la categoría de un producto según su precio: "Económico" (menos de $50), "Estándar" ($50-$199), "Premium" ($200-$499), "Lujo" ($500 o más). Prueba con al menos 4 precios diferentes. Luego, usa el operador ternario para determinar si el producto tiene "Envío gratis" (si cuesta $100 o más) o "Envío con costo" (si cuesta menos de $100).',
      hint: 'Usa else if para los rangos. Para el ternario: let envio = precio >= 100 ? "Envío gratis" : "Envío con costo".',
    },
    quiz: [
      {
        question: '¿Qué pasa si múltiples condiciones en un if/else if/else son true?',
        options: [
          'Se ejecutan todos los bloques que sean true',
          'Se ejecuta solo el primer bloque cuya condición sea true',
          'JavaScript lanza un error',
          'Se ejecuta el último bloque que sea true',
        ],
        correctAnswer: 'Se ejecuta solo el primer bloque cuya condición sea true',
        correctFeedback:
          'Correcto. JavaScript evalúa de arriba a abajo y ejecuta solo el primer bloque cuya condición sea verdadera, ignorando el resto.',
        incorrectFeedback:
          'No es correcto. En una cadena if/else if/else, JavaScript ejecuta únicamente el primer bloque cuya condición sea true y luego salta el resto.',
      },
      {
        question: '¿Qué hace el operador ternario?\n\nlet x = edad >= 18 ? "adulto" : "menor"',
        options: [
          'Crea una variable que puede tener tres valores',
          'Asigna "adulto" si edad >= 18 es true, "menor" si es false',
          'Compara tres valores a la vez',
          'Es una forma de escribir if/else if/else en una línea',
        ],
        correctAnswer: 'Asigna "adulto" si edad >= 18 es true, "menor" si es false',
        correctFeedback:
          'Correcto. El ternario evalúa la condición y asigna el primer valor si es true, el segundo si es false.',
        incorrectFeedback:
          'No es correcto. El ternario es una forma compacta de if/else de dos caminos: condicion ? valorSiTrue : valorSiFalse.',
      },
      {
        question: '¿Cuál de estos ejemplos tiene un error lógico común?',
        options: [
          'if (x === 5)',
          'if (x = 5)',
          'if (x !== 5)',
          'if (x > 0)',
        ],
        correctAnswer: 'if (x = 5)',
        correctFeedback:
          'Correcto. if (x = 5) usa el operador de asignación (=), que asigna 5 a x en lugar de comparar. Siempre usa === para comparar.',
        incorrectFeedback:
          'No es correcto. El error está en if (x = 5): el operador = asigna, no compara. Para comparar debes usar === o ==.',
      },
      {
        question: '¿Qué muestra este código?\n\nlet puntos = 85;\nif (puntos >= 90) {\n  console.log("A");\n} else if (puntos >= 80) {\n  console.log("B");\n} else {\n  console.log("C");\n}',
        options: ['"A"', '"B"', '"C"', '"A" y "B"'],
        correctAnswer: '"B"',
        correctFeedback:
          'Correcto. 85 no es >= 90, pero sí es >= 80, así que el bloque else if se ejecuta y muestra "B".',
        incorrectFeedback:
          'No es correcto. 85 falla la primera condición (>= 90), pero cumple la segunda (>= 80). Se muestra "B".',
      },
    ],
  },

  // ── Lección 15 ────────────────────────────────────────────────────────────
  {
    slug: 'comparacion-estricta-debil',
    title: 'Comparación estricta vs comparación débil',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 15,
    description:
      'Aprende la diferencia entre === y ==, y por qué se recomienda usar comparación estricta.',
    explanation: `Ya vimos brevemente la diferencia entre \`===\` y \`==\`, pero merece una lección propia porque es una fuente frecuente de bugs en JavaScript.

**Comparación estricta: ===**

Compara **valor y tipo**. No hace ninguna conversión automática. Si los tipos son distintos, devuelve \`false\` directamente.

\`\`\`js
5 === 5        // true  (mismo valor, mismo tipo: number)
5 === "5"      // false (number vs string)
true === 1     // false (boolean vs number)
null === undefined // false (tipos distintos)
\`\`\`

**Comparación débil: ==**

Compara solo el **valor**, pero primero convierte los tipos automáticamente (coerción de tipos). Esto puede dar resultados sorprendentes:

\`\`\`js
5 == "5"       // true  (convierte "5" a número)
0 == false     // true  (convierte false a 0)
0 == ""        // true  (convierte "" a 0)
null == undefined // true (caso especial de JS)
1 == true      // true  (convierte true a 1)
"" == false    // true  (ambos se convierten a 0)
\`\`\`

**¿Por qué siempre usar ===?**

Porque == puede hacer que condiciones parezcan verdaderas cuando no deberían serlo. Imagina un formulario donde verificas que un campo no esté vacío:

\`\`\`js
let valor = 0;   // el usuario escribió cero (es un valor válido)

if (valor == false) {
  // ← se ejecuta aunque 0 es un número válido
  console.log("Campo vacío");  // mensaje incorrecto
}

if (valor === false) {
  // ← no se ejecuta, 0 !== false (tipos distintos)
}
\`\`\`

**Tabla de == sorprendente:**

\`\`\`js
[] == false        // true
[] == 0            // true
"" == 0            // true
"" == false        // true
null == 0          // false (excepción)
null == false      // false (excepción)
\`\`\`

La regla de oro: **usa siempre ===** (y su contraparte !==). Solo usa == en situaciones muy específicas y con plena conciencia de lo que hace.`,
    codeExample: `// ── === vs == en la práctica ─────────────────────────────────────────────

// Estricto: predecible
console.log(5 === 5);       // → true
console.log(5 === "5");     // → false (distinto tipo)
console.log(0 === false);   // → false (distinto tipo)
console.log(null === undefined); // → false

// Débil: sorpresivo
console.log(5 == "5");      // → true  (JS convierte "5" a número)
console.log(0 == false);    // → true  (JS convierte false a 0)
console.log(null == undefined); // → true (caso especial)
console.log("" == false);   // → true  (ambos son falsy)

// ── Ejemplo de bug real ───────────────────────────────────────────────────

function verificarEdad(edad) {
  if (edad == 18) {
    console.log("Justo en el límite");
  }
}

verificarEdad(18);    // → "Justo en el límite" ✓
verificarEdad("18");  // → "Justo en el límite" ← con == también pasa, puede ser bug

function verificarEdadSeguro(edad) {
  if (edad === 18) {
    console.log("Justo en el límite");
  }
}

verificarEdadSeguro("18"); // ← no pasa, tipo incorrecto detectado

// ── Siempre usa === y !== ─────────────────────────────────────────────────

let input = "0";  // string, vino de un formulario HTML

if (input !== "") {
  console.log("El campo tiene contenido:", input); // ← correcto
}

if (input != false) {
  // "0" == false es true porque "0" → 0 → false
  // Esto podría causar que se ejecute código inesperado
}`,
    keyPoints: [
      '=== (estricto) compara valor y tipo, nunca hace conversión automática.',
      '== (débil) convierte tipos antes de comparar, lo que puede dar resultados inesperados.',
      'Siempre usa === y !== en tu código. Evita == y != salvo casos muy específicos.',
      '0 == false es true, pero 0 === false es false.',
      'null == undefined es true con ==, pero null === undefined es false.',
      'Entender == ayuda a leer código ajeno, pero no lo uses en código nuevo.',
    ],
    exercise: {
      description:
        'Predice el resultado de cada comparación antes de ejecutarlas en la consola: 1) 0 == false, 2) 0 === false, 3) "" == false, 4) "" === false, 5) null == undefined, 6) null === undefined, 7) 1 == true, 8) 1 === true, 9) "2" == 2, 10) "2" === 2. Luego ejecútalas y verifica. ¿Cuántas acertaste?',
      hint: 'Recuerda: == convierte tipos, === no. Los valores falsy (0, "", false, null, undefined) tienden a ser == entre sí con el operador débil.',
    },
    quiz: [
      {
        question: '¿Qué devuelve null == undefined?',
        options: ['true', 'false', 'null', 'Error'],
        correctAnswer: 'true',
        correctFeedback:
          'Correcto. Con ==, null == undefined es true — es un caso especial definido en el estándar de JavaScript.',
        incorrectFeedback:
          'No es correcto. Aunque parezca extraño, null == undefined devuelve true con el operador débil. Es un caso especial del lenguaje.',
      },
      {
        question: '¿Por qué se recomienda usar === en lugar de ==?',
        options: [
          '=== es más rápido',
          '=== evita conversiones de tipo que pueden causar bugs inesperados',
          '== no funciona con strings',
          '=== acepta más tipos de datos',
        ],
        correctAnswer: '=== evita conversiones de tipo que pueden causar bugs inesperados',
        correctFeedback:
          'Correcto. === no hace conversión de tipos, lo que hace el código más predecible y evita bugs sutiles.',
        incorrectFeedback:
          'No es correcto. La razón principal para usar === es que no realiza conversión de tipos automática, haciendo el código más predecible y libre de bugs sutiles.',
      },
    ],
  },

  // ── Lección 16 ────────────────────────────────────────────────────────────
  {
    slug: 'condiciones-multiples-js',
    title: 'Condiciones múltiples',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 16,
    description: 'Aprende a combinar varias condiciones usando &&, || y !.',
    explanation: `En el módulo anterior aprendiste los operadores lógicos. Ahora los aplicamos dentro de condicionales para construir condiciones más complejas.

**Combinando condiciones con &&**

\`\`\`js
if (condicion1 && condicion2) {
  // se ejecuta solo si AMBAS son true
}
\`\`\`

Ejemplo: un usuario puede comprar si tiene cuenta activa **Y** tiene saldo suficiente:
\`\`\`js
if (tieneCuenta && saldo >= precio) {
  console.log("Compra aprobada");
}
\`\`\`

**Combinando condiciones con ||**

\`\`\`js
if (condicion1 || condicion2) {
  // se ejecuta si AL MENOS UNA es true
}
\`\`\`

Ejemplo: puede acceder al descuento si es estudiante **O** es mayor de 65:
\`\`\`js
if (esEstudiante || edad >= 65) {
  console.log("Descuento aplicado");
}
\`\`\`

**Negando con !**

\`\`\`js
if (!estaRegistrado) {
  console.log("Por favor, regístrate primero");
}
\`\`\`

**Precedencia de operadores lógicos**

! se evalúa primero, luego && y por último ||. Usa paréntesis para mayor claridad:

\`\`\`js
// Sin paréntesis (puede ser confuso):
if (a || b && c) { ... }  // equivale a: a || (b && c)

// Con paréntesis (más claro):
if ((a || b) && c) { ... }
\`\`\`

**Errores comunes:**

- **Comparaciones encadenadas incorrectas:** \`if (18 <= edad <= 65)\` no funciona como esperas. En JavaScript lo correcto es \`if (edad >= 18 && edad <= 65)\`.
- **Demasiadas condiciones en una línea:** si la condición es muy larga, divídela en variables con nombres descriptivos.`,
    codeExample: `// ── Condiciones con && ───────────────────────────────────────────────────

let edadUsuario = 22;
let tieneDocumento = true;
let pagoPendiente = false;

// Puede entrar al evento si es mayor de edad Y tiene documento Y no tiene pago pendiente
if (edadUsuario >= 18 && tieneDocumento && !pagoPendiente) {
  console.log("Acceso al evento: PERMITIDO");
} else {
  console.log("Acceso al evento: DENEGADO");
}
// → Acceso al evento: PERMITIDO

// ── Condiciones con || ────────────────────────────────────────────────────

let esAdministrador = false;
let esModerador = true;

if (esAdministrador || esModerador) {
  console.log("Puede editar el contenido");
}
// → Puede editar el contenido

// ── Combinando && y || ────────────────────────────────────────────────────

let precio = 350;
let tieneCupon = false;
let esClienteVIP = true;
let stockDisponible = 10;

// Puede comprar si hay stock Y (tiene cupón O es VIP)
let puedeComprar = stockDisponible > 0 && (tieneCupon || esClienteVIP);
console.log("¿Puede comprar?", puedeComprar); // → true

// ── Variables descriptivas para condiciones complejas ─────────────────────

const nombreValido = nombreUsuario.length >= 3;
const emailValido = email.includes("@") && email.includes(".");
const contrasenaSegura = contrasena.length >= 8;
const formularioValido = nombreValido && emailValido && contrasenaSegura;

// En lugar de:
// if (nombreUsuario.length >= 3 && email.includes("@") && ...)`,
    keyPoints: [
      '&& requiere que todas las condiciones sean true.',
      '|| requiere que al menos una condición sea true.',
      '! invierte una condición: !true es false, !false es true.',
      'Los paréntesis ayudan a aclarar el orden de evaluación en condiciones complejas.',
      'Guardar condiciones en variables con nombre descriptivo mejora la legibilidad.',
      '18 <= edad <= 65 NO funciona en JS; usa edad >= 18 && edad <= 65.',
    ],
    exercise: {
      description:
        'Crea un sistema de descuentos con estas reglas: aplica 20% de descuento si es fin de semana (variable booleana) Y el cliente tiene membresía. Aplica 10% si solo tiene membresía. Aplica 5% si solo es fin de semana. Sin descuento en cualquier otro caso. Prueba las 4 combinaciones posibles (con/sin membresía × fin/no fin de semana).',
      hint: 'Usa if/else if/else. El primer if verifica ambas condiciones (&&). El else if siguiente verifica cada condición individual. Calcular el precio final: precioFinal = precio * (1 - descuento).',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de verificar que un número está entre 10 y 50 (inclusive) en JavaScript?',
        options: [
          '10 <= numero <= 50',
          'numero >= 10 && numero <= 50',
          'numero >= 10 || numero <= 50',
          'numero.between(10, 50)',
        ],
        correctAnswer: 'numero >= 10 && numero <= 50',
        correctFeedback:
          'Correcto. Para verificar un rango en JavaScript debes usar && con dos comparaciones separadas.',
        incorrectFeedback:
          'No es correcto. La sintaxis 10 <= numero <= 50 no funciona como en matemáticas. En JavaScript debes escribir: numero >= 10 && numero <= 50.',
      },
      {
        question: '¿Qué devuelve false || (true && false)?',
        options: ['true', 'false', 'null', 'Error'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. Primero se evalúa (true && false) = false. Luego false || false = false.',
        incorrectFeedback:
          'No es correcto. && tiene mayor precedencia que ||. Primero (true && false) = false. Luego false || false = false.',
      },
    ],
  },

  // ── Lección 17 ────────────────────────────────────────────────────────────
  {
    slug: 'switch-javascript',
    title: 'Switch',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 17,
    description:
      'Aprende a usar switch para manejar múltiples casos de forma más organizada.',
    explanation: `Cuando tienes muchos casos posibles para un mismo valor, un \`switch\` puede ser más legible que una larga cadena de \`else if\`.

**Estructura básica:**

\`\`\`js
switch (valor) {
  case opcion1:
    // código si valor === opcion1
    break;
  case opcion2:
    // código si valor === opcion2
    break;
  default:
    // código si ningún case coincidió
}
\`\`\`

**El switch usa comparación estricta (===)**. No hace conversión de tipos.

**El break es obligatorio (casi siempre)**

Sin \`break\`, JavaScript continúa ejecutando el siguiente \`case\` aunque no coincida. Esto se llama **fall-through** y generalmente es un bug, no algo intencional:

\`\`\`js
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    // ← sin break: también ejecuta el siguiente case
  case "martes":
    console.log("Segundo día");
    break;
}
// Si dia === "lunes", muestra ambos mensajes!
\`\`\`

**Casos agrupados**

Puedes agrupar cases para ejecutar el mismo código:
\`\`\`js
switch (dia) {
  case "sábado":
  case "domingo":
    console.log("Es fin de semana");
    break;
  default:
    console.log("Es día de semana");
}
\`\`\`

**¿Cuándo usar switch vs if/else?**

Usa \`switch\` cuando comparas un mismo valor contra múltiples opciones concretas (como el día de la semana, un código de estado, una categoría).

Usa \`if/else\` cuando las condiciones son rangos, booleanos complejos o involucran diferentes variables.`,
    codeExample: `// ── Switch básico: días de la semana ─────────────────────────────────────

let dia = "miércoles";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana. ¡Ánimo!");
    break;
  case "martes":
  case "miércoles":
  case "jueves":
    console.log("A mitad de semana. ¡Sigue adelante!");
    break;
  case "viernes":
    console.log("¡Casi fin de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("Descansa y recarga energías.");
    break;
  default:
    console.log("Día no reconocido:", dia);
}
// → A mitad de semana. ¡Sigue adelante!

// ── Switch con códigos de estado ─────────────────────────────────────────

let codigoEstado = 404;

switch (codigoEstado) {
  case 200:
    console.log("OK — Solicitud exitosa");
    break;
  case 201:
    console.log("Creado — Recurso creado con éxito");
    break;
  case 400:
    console.log("Bad Request — Solicitud incorrecta");
    break;
  case 401:
    console.log("Unauthorized — No autorizado");
    break;
  case 404:
    console.log("Not Found — Recurso no encontrado");
    break;
  case 500:
    console.log("Server Error — Error interno del servidor");
    break;
  default:
    console.log("Código desconocido:", codigoEstado);
}
// → Not Found — Recurso no encontrado`,
    keyPoints: [
      'switch compara un valor contra múltiples opciones usando comparación estricta (===).',
      'Cada case debe terminar con break, de lo contrario el código "cae" al siguiente case.',
      'default es opcional y se ejecuta si ningún case coincide.',
      'Puedes agrupar cases poniendo uno después del otro sin break entre ellos.',
      'switch es ideal para comparar un valor contra opciones concretas; if/else para rangos y condiciones complejas.',
      'Olvidar el break es uno de los errores más comunes con switch.',
    ],
    exercise: {
      description:
        'Crea un switch que reciba la categoría de un producto ("ropa", "electrónica", "alimentos", "libros", "juguetes") y muestre el porcentaje de IVA que aplica: ropa y alimentos 0%, libros 4%, juguetes y electrónica 16%. Si la categoría no existe, muestra un mensaje de error. Prueba con al menos 3 categorías diferentes.',
      hint: 'Puedes agrupar "ropa" y "alimentos" sin break entre ellos para que compartan el mismo resultado. Recuerda que switch usa === así que el string debe coincidir exactamente.',
    },
    quiz: [
      {
        question: '¿Qué pasa si olvidas el break en un case de un switch?',
        options: [
          'JavaScript lanza un error',
          'El switch termina normalmente',
          'La ejecución continúa hacia el siguiente case (fall-through)',
          'El default se ejecuta automáticamente',
        ],
        correctAnswer: 'La ejecución continúa hacia el siguiente case (fall-through)',
        correctFeedback:
          'Correcto. Sin break, JavaScript continúa ejecutando el código del siguiente case aunque no coincida con el valor. Esto se llama fall-through.',
        incorrectFeedback:
          'No es correcto. Sin break, JavaScript ejecuta el código del case coincidente y luego sigue ejecutando el código de los cases siguientes sin detenerse (fall-through).',
      },
      {
        question: '¿Qué tipo de comparación usa switch internamente?',
        options: ['== (débil)', '=== (estricta)', 'Solo compara valores numéricos', '.equals()'],
        correctAnswer: '=== (estricta)',
        correctFeedback:
          'Correcto. switch usa comparación estricta === internamente, por lo que "5" y 5 son casos distintos.',
        incorrectFeedback:
          'No es correcto. switch usa comparación estricta === internamente, sin conversión de tipos.',
      },
    ],
  },

  // ── Lección 18 ────────────────────────────────────────────────────────────
  {
    slug: 'bucles-for-js',
    title: 'Bucles for',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 18,
    description: 'Aprende a repetir acciones usando el bucle for.',
    explanation: `Un **bucle** (loop) permite repetir un bloque de código múltiples veces. Sin bucles, si quisieras imprimir los números del 1 al 100, tendrías que escribir 100 líneas de código.

**El bucle for**

El \`for\` es el bucle más común cuando sabes de antemano cuántas veces quieres repetir algo.

\`\`\`js
for (inicialización; condición; actualización) {
  // código que se repite
}
\`\`\`

Las tres partes:
1. **Inicialización:** se ejecuta una sola vez al inicio. Normalmente declara el contador: \`let i = 0\`.
2. **Condición:** se verifica antes de cada repetición. Si es false, el bucle termina.
3. **Actualización:** se ejecuta al final de cada repetición. Normalmente aumenta el contador: \`i++\`.

\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
\`\`\`

**El contador: convención i**

Por convención se usa \`i\` como nombre del contador (de "index" o "iteration"). Para bucles anidados se usan \`j\`, \`k\`, etc.

**Iterar sobre un array**

Una de las usos más comunes del for es recorrer todos los elementos de un array:

\`\`\`js
const frutas = ["manzana", "pera", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
\`\`\`

**Contar hacia atrás**

\`\`\`js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("¡Despegue!");
\`\`\`

**Errores comunes:**

- **Bucle infinito:** si la condición nunca es false, el bucle nunca termina. Por ejemplo: \`for (let i = 0; i >= 0; i++)\` — i siempre será >= 0.
- **Off-by-one:** errores de "uno de más o uno de menos". Si quieres los índices 0 a 4 de un array de 5 elementos, usa \`i < 5\`, no \`i <= 5\`.`,
    codeExample: `// ── for básico ───────────────────────────────────────────────────────────

for (let i = 1; i <= 5; i++) {
  console.log("Vuelta número:", i);
}
// → Vuelta número: 1
// → Vuelta número: 2
// → Vuelta número: 3
// → Vuelta número: 4
// → Vuelta número: 5

// ── Suma de números del 1 al 100 ─────────────────────────────────────────

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log("Suma del 1 al 100:", suma); // → 5050

// ── Recorrer un array ─────────────────────────────────────────────────────

const productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Auriculares"];

for (let i = 0; i < productos.length; i++) {
  console.log(\`Producto \${i + 1}: \${productos[i]}\`);
}
// → Producto 1: Laptop
// → Producto 2: Mouse
// → etc.

// ── Tablas de multiplicar ─────────────────────────────────────────────────

const numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(\`\${numero} × \${i} = \${numero * i}\`);
}
// → 7 × 1 = 7
// → 7 × 2 = 14
// → etc.

// ── Solo los pares ────────────────────────────────────────────────────────

for (let i = 2; i <= 20; i += 2) {
  console.log(i); // 2, 4, 6, 8, ... 20
}`,
    keyPoints: [
      'El bucle for repite código un número determinado de veces.',
      'Tiene tres partes: inicialización (let i = 0), condición (i < n) y actualización (i++).',
      'El contador i empieza en 0 por convención (los índices de arrays empiezan en 0).',
      'Para recorrer un array: for (let i = 0; i < array.length; i++) { ... }',
      'Puedes contar hacia atrás con i-- o saltar valores con i += 2.',
      'Un bucle infinito ocurre cuando la condición nunca es false. Evita eso siempre.',
    ],
    exercise: {
      description:
        'Escribe un programa con tres bucles for: 1) Muestra los números del 1 al 20 que sean múltiplos de 3. 2) Recorre este array y muestra cada elemento con su posición: ["Ana", "Luis", "Sofía", "Carlos", "María"]. 3) Calcula el factorial de 10 (10! = 10 × 9 × 8 × ... × 1).',
      hint: 'Para múltiplos de 3: usa el operador % dentro del bucle. Para el factorial: empieza con let resultado = 1 y multiplica en cada vuelta.',
    },
    quiz: [
      {
        question: '¿Qué muestra este bucle?\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}',
        options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
        correctAnswer: '0, 1, 2',
        correctFeedback:
          'Correcto. i empieza en 0, se ejecuta mientras i < 3 (es decir, cuando i vale 0, 1 y 2). Cuando i llega a 3, la condición es false y el bucle termina.',
        incorrectFeedback:
          'No es correcto. i empieza en 0, y el bucle se ejecuta mientras i < 3. Eso incluye i = 0, i = 1 e i = 2. Cuando i = 3, la condición i < 3 es false y el bucle termina.',
      },
      {
        question: '¿Cuántas veces se ejecuta el cuerpo de este bucle?\n\nfor (let i = 10; i >= 1; i--) { }',
        options: ['9', '10', '11', '0'],
        correctAnswer: '10',
        correctFeedback:
          'Correcto. i va desde 10 hasta 1 (inclusive), que son exactamente 10 valores: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.',
        incorrectFeedback:
          'No es correcto. i toma los valores 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 — exactamente 10 iteraciones.',
      },
    ],
  },

  // ── Lección 19 ────────────────────────────────────────────────────────────
  {
    slug: 'while-do-while-js',
    title: 'Bucles while y do while',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 19,
    description:
      'Aprende a repetir código usando while y do while, y entiende la diferencia entre ambos.',
    explanation: `Mientras el \`for\` es ideal cuando conoces el número de repeticiones, \`while\` y \`do while\` son mejores cuando **no sabes cuántas repeticiones habrá** y solo quieres repetir mientras una condición sea verdadera.

**while — repite mientras la condición sea true**

\`\`\`js
while (condicion) {
  // se ejecuta mientras condicion sea true
  // debes asegurarte de que en algún momento condicion sea false
}
\`\`\`

Ejemplo:
\`\`\`js
let intentos = 0;
while (intentos < 3) {
  console.log("Intento número:", intentos + 1);
  intentos++;
}
\`\`\`

**do while — ejecuta al menos una vez**

La diferencia con \`while\` es que \`do while\` **siempre ejecuta el cuerpo al menos una vez**, aunque la condición sea false desde el inicio:

\`\`\`js
do {
  // se ejecuta al menos una vez
} while (condicion);
\`\`\`

Ejemplo real: mostrar un menú al usuario y seguir mostrándolo mientras no elija salir. El menú debe mostrarse al menos una vez aunque la condición sea false:

\`\`\`js
let opcion;
do {
  // muestra menú
  opcion = obtenerOpcionUsuario();
} while (opcion !== "salir");
\`\`\`

**¿Cuándo usar while vs for?**

- **for:** cuando sabes el número de repeticiones (recorrer un array, contar hasta N).
- **while:** cuando no sabes cuántas repeticiones habrá (esperar hasta que algo ocurra, procesar hasta que se cumpla una condición).

**Advertencia: bucles infinitos**

Si la condición nunca se vuelve false, el bucle nunca termina y el programa se cuelga. Siempre asegúrate de que el cuerpo del bucle modifique algo que eventualmente haga la condición false.`,
    codeExample: `// ── while básico ─────────────────────────────────────────────────────────

let energia = 100;

while (energia > 0) {
  console.log("Energía restante:", energia);
  energia -= 25;
}
console.log("¡Sin energía! Juego terminado.");
// → 100, 75, 50, 25... luego "¡Sin energía!"

// ── while: encontrar el primer número divisible ────────────────────────────

let numero = 1;
while (numero % 7 !== 0) {
  numero++;
}
console.log("Primer múltiplo de 7 después de 0:", numero); // → 7

// ── do while: ejecuta al menos una vez ───────────────────────────────────

let intentos = 0;
let contrasenaCorrecta = "abc123";
let intento;

do {
  intento = "abc123"; // simulamos que el usuario escribe esto
  intentos++;
  if (intento !== contrasenaCorrecta) {
    console.log("Contraseña incorrecta, intenta de nuevo.");
  }
} while (intento !== contrasenaCorrecta && intentos < 3);

if (intento === contrasenaCorrecta) {
  console.log("Acceso concedido en el intento:", intentos);
} else {
  console.log("Demasiados intentos fallidos. Cuenta bloqueada.");
}

// ── Diferencia clave ─────────────────────────────────────────────────────

// while: puede no ejecutarse NUNCA si la condición es false desde el inicio
let x = 10;
while (x < 5) {
  console.log("Esto nunca se ejecuta");
}

// do while: se ejecuta AL MENOS UNA VEZ
do {
  console.log("Esto se ejecuta una vez aunque x sea 10");
} while (x < 5);`,
    keyPoints: [
      'while repite mientras la condición sea true; puede no ejecutarse nunca si ya es false.',
      'do while siempre ejecuta el cuerpo al menos una vez, luego verifica la condición.',
      'Usa while cuando no sabes cuántas repeticiones habrá.',
      'Siempre asegúrate de que algo dentro del bucle eventualmente haga la condición false.',
      'Un bucle infinito congela el programa; siempre modifica la variable de la condición dentro del bucle.',
      'for es mejor cuando conoces el número de repeticiones; while cuando no lo sabes.',
    ],
    exercise: {
      description:
        'Escribe un programa con while que simule una cuenta regresiva desde 10 hasta 0, mostrando cada número. Al llegar a 0 muestra "¡Despegue!". Luego escribe otro programa con do while que simule lanzar un dado (usa Math.floor(Math.random() * 6) + 1) hasta obtener un 6, mostrando cada resultado y cuántos lanzamientos tomó.',
      hint: 'Para la cuenta regresiva: empieza con let count = 10, muestra count y después count--. Para el dado: do { lanza dado; muestra resultado; contador++; } while (resultado !== 6).',
    },
    quiz: [
      {
        question: '¿Cuál es la principal diferencia entre while y do while?',
        options: [
          'while es más rápido que do while',
          'do while siempre ejecuta el cuerpo al menos una vez; while puede no ejecutarse',
          'while puede usarse con arrays; do while no',
          'do while solo funciona con números',
        ],
        correctAnswer: 'do while siempre ejecuta el cuerpo al menos una vez; while puede no ejecutarse',
        correctFeedback:
          'Correcto. En do while, el cuerpo se ejecuta antes de verificar la condición. En while, se verifica primero y puede no ejecutarse si ya es false.',
        incorrectFeedback:
          'No es correcto. La diferencia clave es el orden: do while ejecuta el cuerpo y luego verifica la condición (al menos una ejecución garantizada). while verifica primero.',
      },
      {
        question: '¿Qué riesgo existe si no actualizas la variable de la condición dentro de un while?',
        options: [
          'El bucle se ejecuta una sola vez',
          'JavaScript lanza un error automáticamente',
          'El bucle se vuelve infinito y el programa se congela',
          'La variable se actualiza automáticamente',
        ],
        correctAnswer: 'El bucle se vuelve infinito y el programa se congela',
        correctFeedback:
          'Correcto. Si la condición nunca cambia, el while nunca termina, causando un bucle infinito que congela el navegador o programa.',
        incorrectFeedback:
          'No es correcto. Si no cambias la variable de la condición, el while se ejecuta infinitamente (bucle infinito) porque la condición siempre es true.',
      },
    ],
  },

  // ── Lección 20 ────────────────────────────────────────────────────────────
  {
    slug: 'break-continue-bucles-js',
    title: 'Break, continue y errores comunes en bucles',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 20,
    description:
      'Aprende a controlar bucles con break y continue, y evita errores como bucles infinitos.',
    explanation: `\`break\` y \`continue\` son palabras clave que permiten controlar el flujo dentro de un bucle de forma más precisa.

**break — salir del bucle inmediatamente**

Cuando JavaScript encuentra \`break\`, termina el bucle en ese instante, sin importar si la condición todavía sería true.

\`\`\`js
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // para cuando i llega a 5
  console.log(i);     // muestra 0, 1, 2, 3, 4
}
\`\`\`

Útil para: buscar un elemento en un array y parar cuando lo encuentras, salir de un bucle cuando ocurre un error.

**continue — saltar a la siguiente iteración**

Cuando JavaScript encuentra \`continue\`, salta el resto del código en esa iteración y pasa a la siguiente.

\`\`\`js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // salta los pares
  console.log(i);              // muestra 1, 3, 5, 7, 9
}
\`\`\`

**break vs continue:**

- \`break\`: termina **el bucle completo**.
- \`continue\`: termina **solo la iteración actual** y pasa a la siguiente.

**Errores comunes en bucles**

1. **Bucle infinito:** la condición nunca es false.
\`\`\`js
// MAL: i nunca llega a ser >= 10 si siempre se resetea
while (true) {
  // sin condición de salida → infinito
}
\`\`\`

2. **Off-by-one:** error de "uno de más o uno de menos".
\`\`\`js
// Array con 5 elementos (índices 0 a 4)
const arr = [1, 2, 3, 4, 5];

// MAL: i <= arr.length → i llega a 5, arr[5] es undefined
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]); // el último muestra undefined
}

// BIEN:
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // correcto
}
\`\`\`

3. **Modificar el array mientras se recorre:** puede causar comportamiento inesperado.`,
    codeExample: `// ── break: buscar el primer número negativo ──────────────────────────────

const valores = [10, 25, 8, -3, 15, -7, 20];
let primerNegativo = null;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] < 0) {
    primerNegativo = valores[i];
    break; // encontrado, no necesitamos seguir
  }
}

console.log("Primer negativo:", primerNegativo); // → -3

// ── continue: mostrar solo números positivos ──────────────────────────────

const numeros = [5, -2, 8, -1, 0, 12, -4, 3];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] <= 0) continue; // salta negativos y cero
  console.log(numeros[i]);       // muestra: 5, 8, 12, 3
}

// ── break en while: buscar solución ──────────────────────────────────────

let intento = 1;
while (intento <= 100) {
  if (intento * intento > 50) {
    console.log(\`El primer número cuyo cuadrado supera 50 es: \${intento}\`);
    break;
  }
  intento++;
}

// ── Error común: off-by-one ───────────────────────────────────────────────

const colores = ["rojo", "verde", "azul"];

// MAL: llega hasta índice 3 (undefined)
// for (let i = 0; i <= colores.length; i++) { }

// BIEN:
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]); // rojo, verde, azul
}`,
    keyPoints: [
      'break termina el bucle completamente cuando se encuentra.',
      'continue salta al inicio de la siguiente iteración sin ejecutar el resto del cuerpo.',
      'break es útil para parar la búsqueda una vez encontrado el resultado.',
      'continue es útil para saltar elementos que no queremos procesar.',
      'El error off-by-one ocurre cuando usas <= en lugar de < al iterar sobre un array.',
      'Evita los bucles infinitos asegurándote de que la condición eventualmente sea false.',
    ],
    exercise: {
      description:
        'Dado el array ["Lucía", "Carlos", "Ana", "Pedro", "Sofía", "Marco"]: 1) Usa break para encontrar e imprimir el primer nombre que tenga más de 4 letras. 2) Usa continue para imprimir solo los nombres que empiecen con vocal. 3) Muestra la suma de todos los números en [3, -1, 7, 2, -5, 8, -3, 4] ignorando los negativos (usa continue).',
      hint: 'Para verificar si un nombre empieza con vocal: nombre[0].toLowerCase() y verifica si está en ["a","e","i","o","u"]. Puedes usar includes().',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre break y continue?',
        options: [
          'break pausa el bucle; continue lo reinicia desde el principio',
          'break termina el bucle completo; continue salta a la siguiente iteración',
          'break solo funciona en for; continue solo en while',
          'Son exactamente lo mismo',
        ],
        correctAnswer: 'break termina el bucle completo; continue salta a la siguiente iteración',
        correctFeedback:
          'Correcto. break sale del bucle completamente, mientras que continue solo salta el resto de la iteración actual y continúa con la siguiente.',
        incorrectFeedback:
          'No es correcto. break termina el bucle por completo. continue solo salta el código restante de la iteración actual y pasa a la siguiente vuelta.',
      },
      {
        question: '¿Cuál de estos bucles tiene un error off-by-one al recorrer un array de 5 elementos?',
        options: [
          'for (let i = 0; i < array.length; i++)',
          'for (let i = 0; i <= array.length; i++)',
          'for (let i = 0; i < 5; i++)',
          'for (let i = 1; i < array.length; i++)',
        ],
        correctAnswer: 'for (let i = 0; i <= array.length; i++)',
        correctFeedback:
          'Correcto. Con <= array.length, cuando i llega a 5 (el length del array), intenta acceder a array[5] que no existe y devuelve undefined.',
        incorrectFeedback:
          'No es correcto. El error está en <= array.length. Si el array tiene 5 elementos (índices 0-4), cuando i = 5 se intenta acceder a array[5] que es undefined.',
      },
    ],
  },
]

export const jsModule3: Module = {
  number: 3,
  title: 'Control de flujo',
  level: 'básico',
  lessons: lessonsJsModule3,
}
