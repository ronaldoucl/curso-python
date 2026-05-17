import type { Lesson, Module } from '@/types'

export const lessonsJsModule5: Lesson[] = [
  // ── Lección 29 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-una-funcion-js',
    title: '¿Qué es una función?',
    module: 'Funciones',
    moduleNumber: 5,
    order: 29,
    description:
      'Aprende por qué las funciones ayudan a organizar y reutilizar código en JavaScript.',
    explanation: `Una **función** es un bloque de código con nombre que puedes ejecutar cuando lo necesites. Es como una receta: la escribes una vez y la sigues cuantas veces quieras.

**¿Por qué usar funciones?**

Sin funciones, si quisieras saludar a 5 usuarios distintos, repetirías el mismo código 5 veces. Con una función, lo escribes una vez y lo reutilizas.

**Ventajas de las funciones:**

1. **Reutilización:** escribe el código una vez, úsalo muchas veces.
2. **Organización:** divide el programa en partes más pequeñas y manejables.
3. **Legibilidad:** un nombre descriptivo como \`calcularDescuento()\` explica qué hace sin leer el detalle.
4. **Mantenimiento:** si necesitas cambiar la lógica, solo la cambias en un lugar.

**La analogía perfecta**

Piensa en una lavadora. La lavadora tiene un ciclo de lavado: agrega agua, agita, centrifuga, etc. Tú no tienes que hacer eso manualmente cada vez. Presionas un botón y la lavadora ejecuta todo el proceso. Una función es ese botón: encapsula un proceso y lo ejecuta cuando la "llamas".

**Partes de una función:**

\`\`\`js
function saludar() {        // ← declaración: nombre de la función
  console.log("¡Hola!");   // ← cuerpo: lo que hace
}

saludar(); // ← llamada: la ejecutas aquí
\`\`\`

**Funciones con y sin parámetros**

- Sin parámetros: siempre hace lo mismo.
- Con parámetros: recibe información y actúa según ella (aprenderemos esto en la siguiente lección).

**¿Cuándo crear una función?**

Una buena regla: si escribes el mismo código más de una vez, conviértelo en función. También cuando un bloque de código hace una tarea específica y tiene sentido darle nombre.`,
    codeExample: `// ── Función básica: sin parámetros ───────────────────────────────────────

function mostrarBienvenida() {
  console.log("===========================");
  console.log("  Bienvenido a RonaldoScript");
  console.log("  Aprende programación gratis");
  console.log("===========================");
}

// Llamar a la función
mostrarBienvenida();
mostrarBienvenida(); // puedes llamarla cuantas veces quieras

// ── Sin función (código repetido — MAL) ───────────────────────────────────

// console.log("Calculando precio...");
// let precio1 = 100 * 0.9;
// console.log("Precio final:", precio1);

// console.log("Calculando precio...");
// let precio2 = 250 * 0.9;
// console.log("Precio final:", precio2);

// ── Con función (código reutilizable — BIEN) ──────────────────────────────

function calcularPrecioConDescuento(precio) {
  console.log("Calculando precio...");
  const precioFinal = precio * 0.9;
  console.log("Precio final:", precioFinal);
}

calcularPrecioConDescuento(100); // → 90
calcularPrecioConDescuento(250); // → 225
calcularPrecioConDescuento(80);  // → 72

// ── Función que encapsula lógica ──────────────────────────────────────────

function mostrarSeparador() {
  console.log("─────────────────────────");
}

console.log("Resultado 1: 42");
mostrarSeparador();
console.log("Resultado 2: 85");
mostrarSeparador();`,
    keyPoints: [
      'Una función es un bloque de código con nombre que se puede ejecutar cuando se necesite.',
      'Las funciones evitan la repetición de código y facilitan el mantenimiento.',
      'Se declaran con la palabra clave function, un nombre y llaves {}.',
      'Se ejecutan (llaman) escribiendo su nombre seguido de paréntesis: funcionNombre().',
      'Una función puede llamarse múltiples veces desde cualquier parte del programa.',
      'Regla práctica: si copias y pegas código, probablemente debería ser una función.',
    ],
    exercise: {
      description:
        'Crea tres funciones: 1) mostrarLinea(): muestra una línea de 30 guiones. 2) mostrarFecha(): muestra la fecha actual usando new Date().toLocaleDateString("es-ES"). 3) mostrarEncabezado(): usa las dos anteriores para mostrar un encabezado bonito con la fecha entre líneas. Llama a mostrarEncabezado() al menos 3 veces.',
      hint: 'Dentro de mostrarEncabezado(), llama a mostrarLinea(), luego console.log() con un mensaje, luego mostrarFecha(), luego mostrarLinea() de nuevo. Las funciones pueden llamar a otras funciones.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal ventaja de usar funciones?',
        options: [
          'El código corre más rápido con funciones',
          'Reutilizar código y evitar repetición',
          'Las funciones son obligatorias en JavaScript',
          'Permiten usar variables globales',
        ],
        correctAnswer: 'Reutilizar código y evitar repetición',
        correctFeedback:
          'Correcto. Las funciones permiten escribir el código una vez y reutilizarlo cuantas veces sea necesario, evitando la duplicación.',
        incorrectFeedback:
          'No es correcto. La principal ventaja de las funciones es la reutilización del código: escribes la lógica una vez y la ejecutas cuando la necesites.',
      },
      {
        question: '¿Qué hace esta línea de código?\n\ncalcularTotal()',
        options: [
          'Declara una función llamada calcularTotal',
          'Llama (ejecuta) la función calcularTotal',
          'Crea una variable llamada calcularTotal',
          'Elimina la función calcularTotal',
        ],
        correctAnswer: 'Llama (ejecuta) la función calcularTotal',
        correctFeedback:
          'Correcto. Escribir el nombre de la función seguido de () la ejecuta. La declaración usaría la palabra "function" al inicio.',
        incorrectFeedback:
          'No es correcto. calcularTotal() sin la palabra "function" es una llamada (ejecución) de la función, no su declaración.',
      },
    ],
  },

  // ── Lección 30 ────────────────────────────────────────────────────────────
  {
    slug: 'declarar-funciones',
    title: 'Declarar funciones',
    module: 'Funciones',
    moduleNumber: 5,
    order: 30,
    description: 'Aprende a crear funciones usando function declaration.',
    explanation: `Hay varias formas de declarar funciones en JavaScript. La forma más básica y clásica es la **function declaration** (declaración de función).

**Sintaxis:**
\`\`\`js
function nombreFuncion() {
  // cuerpo de la función
}
\`\`\`

**Características importantes de function declaration:**

1. **Hoisting:** las function declarations son "elevadas" al inicio del scope. Esto significa que puedes llamarlas antes de declararlas en el código:

\`\`\`js
saludar(); // ← funciona aunque está antes de la declaración

function saludar() {
  console.log("Hola");
}
\`\`\`

2. **Nombre obligatorio:** una function declaration siempre necesita nombre.

3. **Scope:** si está dentro de un bloque, el comportamiento depende del modo estricto. Por seguridad, declara funciones siempre al mismo nivel donde las usarás.

**Convenciones de nomenclatura:**

- Usa **camelCase**: \`calcularDescuento()\`, \`obtenerUsuario()\`.
- Usa **verbos**: los nombres de funciones deben describir una acción. Prefijos comunes: get, set, calculate, show, create, update, delete, validate, handle.
- Sé descriptivo: \`calcularPrecioFinal()\` es mejor que \`calc()\`.

**Buenas prácticas:**

- Una función debe hacer **una sola cosa** (principio de responsabilidad única).
- Si una función tiene más de 15-20 líneas, probablemente se puede dividir.
- El nombre debe dejar claro qué hace sin necesidad de leer el cuerpo.`,
    codeExample: `// ── Declaraciones de función básicas ─────────────────────────────────────

function saludar() {
  console.log("¡Hola! Bienvenido.");
}

function mostrarFecha() {
  const fecha = new Date();
  console.log("Fecha actual:", fecha.toLocaleDateString("es-ES"));
}

function calcularAreaRectangulo(base, altura) {
  const area = base * altura;
  console.log(\`Área del rectángulo: \${area} m²\`);
}

// Llamadas
saludar();
mostrarFecha();
calcularAreaRectangulo(5, 8); // → 40 m²

// ── Hoisting: puedes llamar antes de declarar ──────────────────────────────

mostrarBienvenida(); // ← funciona gracias al hoisting

function mostrarBienvenida() {
  console.log("=== Plataforma RonaldoScript ===");
}

// ── Funciones bien nombradas ──────────────────────────────────────────────

// MAL: nombres poco descriptivos
function f() { }
function calc(x) { }
function p(msg) { }

// BIEN: nombres descriptivos con verbos
function calcularDescuento(precio, porcentaje) {
  return precio * (1 - porcentaje / 100);
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

function mostrarMensajeError(mensaje) {
  console.log("Error:", mensaje);
}

// Uso
console.log(calcularDescuento(200, 15)); // → 170
console.log(validarEmail("user@email.com")); // → true
mostrarMensajeError("Contraseña incorrecta");`,
    keyPoints: [
      'function declaration: function nombre() { cuerpo }.',
      'Las function declarations tienen hoisting: pueden usarse antes de ser declaradas.',
      'Los nombres de funciones deben usar camelCase y comenzar con un verbo descriptivo.',
      'Una función debe hacer una sola cosa bien definida.',
      'Prefijos comunes: get, set, calculate, show, create, update, validate, handle.',
      'Si el nombre no deja claro qué hace la función, es una señal de que debe renombrarse.',
    ],
    exercise: {
      description:
        'Crea 4 funciones bien nombradas: 1) Una que calcule el área de un círculo (usa Math.PI * radio ** 2). 2) Una que determine si un año es bisiesto (divisible por 4, excepto los divisibles por 100 a menos que también sean divisibles por 400). 3) Una que muestre un recibo simple con nombre del producto, cantidad y precio total. 4) Una que valide si un nombre tiene al menos 2 caracteres y no está vacío. Llama a cada una con al menos 2 ejemplos.',
      hint: 'Año bisiesto: (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0). Recibo: usa console.log con template literals. Para la validación: nombre.trim().length >= 2.',
    },
    quiz: [
      {
        question: '¿Qué es el hoisting de function declarations?',
        options: [
          'Las funciones se borran al terminar de ejecutarse',
          'Las funciones se "elevan" y pueden usarse antes de ser declaradas en el código',
          'Las funciones se copian globalmente',
          'Las funciones se ejecutan automáticamente al cargar el script',
        ],
        correctAnswer: 'Las funciones se "elevan" y pueden usarse antes de ser declaradas en el código',
        correctFeedback:
          'Correcto. El hoisting hace que las function declarations estén disponibles desde el inicio del scope, aunque el código las declare más abajo.',
        incorrectFeedback:
          'No es correcto. Hoisting significa que las function declarations se "elevan" al inicio del scope. Esto permite llamarlas antes de que aparezcan declaradas en el código.',
      },
      {
        question: '¿Cuál de estos nombres de función sigue las buenas prácticas?',
        options: ['fn1()', 'DataProcessor()', 'calcularImpuesto()', 'CALCULAIMPUESTO()'],
        correctAnswer: 'calcularImpuesto()',
        correctFeedback:
          'Correcto. calcularImpuesto() usa camelCase, comienza con un verbo y describe claramente la acción.',
        incorrectFeedback:
          'No es correcto. El nombre correcto es calcularImpuesto(): usa camelCase, comienza con un verbo descriptivo y sigue las convenciones de JavaScript.',
      },
    ],
  },

  // ── Lección 31 ────────────────────────────────────────────────────────────
  {
    slug: 'parametros-argumentos-js',
    title: 'Parámetros y argumentos',
    module: 'Funciones',
    moduleNumber: 5,
    order: 31,
    description:
      'Aprende cómo enviar información a una función usando parámetros y argumentos.",',
    explanation: `Los **parámetros** son las variables que una función acepta como entrada. Los **argumentos** son los valores reales que le pasas cuando la llamas.

\`\`\`js
function saludar(nombre) { // "nombre" es el PARÁMETRO
  console.log("Hola,", nombre);
}

saludar("Ana"); // "Ana" es el ARGUMENTO
saludar("Luis");
\`\`\`

**Múltiples parámetros**

Una función puede tener varios parámetros, separados por comas:

\`\`\`js
function presentar(nombre, edad, ciudad) {
  console.log(\`Soy \${nombre}, tengo \${edad} años y vivo en \${ciudad}.\`);
}

presentar("Sofía", 25, "Bogotá");
\`\`\`

**Parámetros por defecto (default parameters)**

Puedes definir un valor predeterminado para un parámetro. Si no se pasa ese argumento, usa el valor por defecto:

\`\`\`js
function saludar(nombre = "visitante") {
  console.log(\`Hola, \${nombre}!\`);
}

saludar("María"); // → "Hola, María!"
saludar();        // → "Hola, visitante!"
\`\`\`

**¿Qué pasa si falta un argumento?**

Si llamas a una función sin pasar un argumento esperado y no tiene valor por defecto, el parámetro será \`undefined\`:

\`\`\`js
function sumar(a, b) {
  console.log(a + b);
}

sumar(5, 3);  // → 8
sumar(5);     // → NaN (5 + undefined = NaN)
\`\`\`

**Número de parámetros recomendado**

Idealmente, una función debe tener como máximo 3 parámetros. Si necesita más, considera agruparlos en un objeto:

\`\`\`js
// Muchos parámetros (evitar):
function crearUsuario(nombre, apellido, edad, email, ciudad, plan) { ... }

// Mejor con objeto:
function crearUsuario({ nombre, apellido, edad, email }) { ... }
\`\`\``,
    codeExample: `// ── Un parámetro ─────────────────────────────────────────────────────────

function doblar(numero) {
  console.log(numero * 2);
}

doblar(5);   // → 10
doblar(18);  // → 36
doblar(100); // → 200

// ── Múltiples parámetros ──────────────────────────────────────────────────

function calcularDescuento(precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  const precioFinal = precio - descuento;
  console.log(\`Precio: $\${precio} | Descuento: \${porcentaje}% | Final: $\${precioFinal}\`);
}

calcularDescuento(200, 10);  // → Precio: $200 | Descuento: 10% | Final: $180
calcularDescuento(500, 25);  // → Precio: $500 | Descuento: 25% | Final: $375
calcularDescuento(89, 5);    // → Precio: $89  | Descuento: 5%  | Final: $84.55

// ── Parámetros por defecto ────────────────────────────────────────────────

function crearSaludo(nombre = "visitante", hora = "el día") {
  console.log(\`¡Buenas \${hora}, \${nombre}!\`);
}

crearSaludo("Ana", "tardes");  // → ¡Buenas tardes, Ana!
crearSaludo("Luis");           // → ¡Buenas el día, Luis!
crearSaludo();                 // → ¡Buenas el día, visitante!

// ── Parámetro como objeto ─────────────────────────────────────────────────

function mostrarProducto({ nombre, precio, categoria = "General" }) {
  console.log(\`[\${categoria}] \${nombre} — $\${precio}\`);
}

mostrarProducto({ nombre: "Laptop", precio: 999, categoria: "Tecnología" });
mostrarProducto({ nombre: "Cuaderno", precio: 3 }); // usa "General" por defecto`,
    keyPoints: [
      'Parámetros: las variables en la declaración de la función. Argumentos: los valores al llamarla.',
      'Una función puede tener 0, 1 o múltiples parámetros separados por comas.',
      'Los parámetros por defecto (param = valor) se usan si no se pasa el argumento.',
      'Si falta un argumento sin valor por defecto, el parámetro será undefined.',
      'Si una función necesita más de 3 parámetros, considera agruparlos en un objeto.',
      'Los argumentos se pasan en el mismo orden que los parámetros fueron declarados.',
    ],
    exercise: {
      description:
        'Crea las siguientes funciones con parámetros: 1) calcularImc(peso, altura): IMC = peso / altura². Muestra el resultado y la categoría (bajo peso <18.5, normal 18.5-24.9, sobrepeso 25-29.9, obesidad >=30). 2) generarEmail(nombre, dominio = "gmail.com"): devuelve nombre.toLowerCase() + "@" + dominio. 3) aplicarIva(precio, tasa = 16): devuelve el precio con IVA. Prueba cada función con diferentes argumentos, incluyendo casos donde usas el valor por defecto.',
      hint: 'Para el IMC usa .toFixed(2) para mostrar 2 decimales. Para generarEmail: recuerda que puedes concatenar strings. Para aplicarIva: precio * (1 + tasa/100).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre parámetro y argumento?',
        options: [
          'Son exactamente lo mismo',
          'Parámetro es la variable en la declaración; argumento es el valor al llamar la función',
          'Argumento es la variable en la declaración; parámetro es el valor al llamar',
          'Los parámetros son opcionales; los argumentos son obligatorios',
        ],
        correctAnswer: 'Parámetro es la variable en la declaración; argumento es el valor al llamar la función',
        correctFeedback:
          'Correcto. function sumar(a, b) — a y b son parámetros. sumar(5, 3) — 5 y 3 son argumentos.',
        incorrectFeedback:
          'No es correcto. El parámetro es la variable que aparece en la declaración de la función. El argumento es el valor concreto que pasas al llamarla.',
      },
      {
        question: '¿Qué muestra este código?\n\nfunction saludar(nombre = "amigo") {\n  console.log("Hola,", nombre);\n}\nsaludar()',
        options: ['"Hola, undefined"', '"Hola,"', '"Hola, amigo"', 'Error'],
        correctAnswer: '"Hola, amigo"',
        correctFeedback:
          'Correcto. Al no pasar un argumento, se usa el valor por defecto "amigo". La salida es "Hola, amigo".',
        incorrectFeedback:
          'No es correcto. Como nombre tiene un valor por defecto ("amigo"), cuando se llama sin argumento, usa ese valor. La salida es "Hola, amigo".',
      },
    ],
  },

  // ── Lección 32 ────────────────────────────────────────────────────────────
  {
    slug: 'return-javascript',
    title: 'Return',
    module: 'Funciones',
    moduleNumber: 5,
    order: 32,
    description: 'Aprende cómo devolver resultados desde una función usando return.',
    explanation: `Hasta ahora las funciones mostraban resultados con \`console.log()\`. Pero en el mundo real, generalmente quieres que una función **calcule algo y te devuelva el resultado** para usarlo en otra parte del programa. Para eso existe \`return\`.

**Función sin return:**
\`\`\`js
function sumar(a, b) {
  console.log(a + b); // muestra en consola, pero no "devuelve" nada
}

let resultado = sumar(3, 5); // resultado = undefined
\`\`\`

**Función con return:**
\`\`\`js
function sumar(a, b) {
  return a + b; // devuelve el valor al código que la llamó
}

let resultado = sumar(3, 5); // resultado = 8
console.log(resultado);      // → 8
console.log(sumar(10, 20));  // → 30
\`\`\`

**Características de return:**

1. **Para la ejecución:** cuando JavaScript encuentra \`return\`, termina la función inmediatamente. El código después del return no se ejecuta:

\`\`\`js
function verificar(numero) {
  if (numero < 0) return "número negativo";
  // si llegamos aquí, numero es >= 0
  return "número positivo";
}
\`\`\`

2. **Retorno temprano:** esta técnica (retorno anticipado) ayuda a evitar \`else\` anidados.

3. **return sin valor:** devuelve \`undefined\` y termina la función (útil para salir anticipadamente).

\`\`\`js
function procesarUsuario(usuario) {
  if (!usuario) return; // sale si no hay usuario
  // procesa el usuario...
}
\`\`\`

**Diferencia clave:**
- \`console.log()\`: muestra en la consola, solo sirve para ver.
- \`return\`: entrega el valor al código que llamó a la función, para usarlo.`,
    codeExample: `// ── return básico ────────────────────────────────────────────────────────

function calcularArea(base, altura) {
  return base * altura;
}

// Guardamos el resultado
const area = calcularArea(5, 8);
console.log("Área:", area); // → 40

// O lo usamos directamente
console.log("Área doble:", calcularArea(5, 8) * 2); // → 80

// ── return para valores string ────────────────────────────────────────────

function clasificarEdad(edad) {
  if (edad < 12) return "Niño";
  if (edad < 18) return "Adolescente";
  if (edad < 65) return "Adulto";
  return "Adulto mayor";
}

console.log(clasificarEdad(8));  // → "Niño"
console.log(clasificarEdad(15)); // → "Adolescente"
console.log(clasificarEdad(40)); // → "Adulto"

// ── Usando el return en cálculos ──────────────────────────────────────────

function calcularPrecioFinal(precio, descuento, iva) {
  const precioConDescuento = precio * (1 - descuento / 100);
  const precioConIva = precioConDescuento * (1 + iva / 100);
  return Math.round(precioConIva * 100) / 100; // redondea a 2 decimales
}

function mostrarResumenCompra(producto, precio, descuento = 0) {
  const precioFinal = calcularPrecioFinal(precio, descuento, 16);
  return \`\${producto}: $\${precio} → con \${descuento}% dto + IVA = $\${precioFinal}\`;
}

console.log(mostrarResumenCompra("Laptop", 800, 10));
// → Laptop: $800 → con 10% dto + IVA = $835.2

// ── return temprano ───────────────────────────────────────────────────────

function dividir(a, b) {
  if (b === 0) return "Error: no se puede dividir por cero";
  return a / b;
}

console.log(dividir(10, 2));  // → 5
console.log(dividir(10, 0));  // → "Error: no se puede dividir por cero"`,
    keyPoints: [
      'return devuelve un valor de la función al código que la llamó.',
      'Una función sin return (o con return vacío) devuelve undefined.',
      'El return detiene la ejecución de la función inmediatamente.',
      'Puedes usar múltiples return en una función (pero solo uno se ejecutará).',
      'El retorno temprano (early return) ayuda a simplificar la lógica y evitar anidamiento.',
      'console.log() solo muestra; return permite usar el valor en otras partes del programa.',
    ],
    exercise: {
      description:
        'Crea las siguientes funciones con return: 1) esPar(numero): devuelve true si es par, false si es impar. 2) calcularPromedio(notas): recibe un array de notas y devuelve el promedio. 3) obtenerNota(promedio): devuelve "A" (>=90), "B" (>=80), "C" (>=70), "D" (>=60), "F" (<60). 4) generarReporte(nombre, notas): usa las funciones anteriores y devuelve un string con el reporte completo del estudiante.',
      hint: 'Para calcularPromedio: suma todos con un bucle y divide por notas.length. Para generarReporte: llama a calcularPromedio y obtenerNota y ensambla el string con template literals.',
    },
    quiz: [
      {
        question: '¿Qué valor devuelve una función que no tiene return?',
        options: ['0', 'null', 'undefined', 'Error'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. Cuando una función no tiene return o tiene return sin valor, JavaScript devuelve undefined automáticamente.',
        incorrectFeedback:
          'No es correcto. En JavaScript, toda función devuelve algo. Si no hay return (o el return está vacío), el valor devuelto es undefined.',
      },
      {
        question: '¿Qué ocurre con el código después de un return en una función?',
        options: [
          'Se ejecuta normalmente',
          'Se ejecuta solo si hay un if',
          'No se ejecuta; el return termina la función',
          'Se guarda para ejecutarse después',
        ],
        correctAnswer: 'No se ejecuta; el return termina la función',
        correctFeedback:
          'Correcto. return detiene la ejecución de la función inmediatamente. Todo el código que le sigue dentro de la función queda sin ejecutarse.',
        incorrectFeedback:
          'No es correcto. return es la instrucción de salida de una función. Cuando se ejecuta, la función termina de inmediato y el código que le sigue no se ejecuta.',
      },
    ],
  },

  // ── Lección 33 ────────────────────────────────────────────────────────────
  {
    slug: 'function-expressions',
    title: 'Function expressions',
    module: 'Funciones',
    moduleNumber: 5,
    order: 33,
    description: 'Aprende a guardar funciones dentro de variables.',
    explanation: `En JavaScript, las funciones son **valores de primera clase** — esto significa que puedes tratarlas como cualquier otro valor: guardarlas en una variable, pasarlas como argumento, o devolverlas desde otra función.

Una **function expression** (expresión de función) es cuando asignas una función a una variable:

\`\`\`js
const saludar = function() {
  console.log("Hola!");
};

saludar(); // se llama igual que una function declaration
\`\`\`

**Function expression vs Function declaration**

| Característica | Function Declaration | Function Expression |
|---------------|---------------------|---------------------|
| Sintaxis | function nombre() {} | const nombre = function() {} |
| Hoisting | Sí (disponible antes de declararse) | No (no disponible antes de declararse) |
| Nombre | Obligatorio | Opcional (puede ser anónima) |

**Sin hoisting en function expressions:**
\`\`\`js
saludar(); // ← ERROR: Cannot access 'saludar' before initialization

const saludar = function() {
  console.log("Hola!");
};
\`\`\`

**¿Por qué usar function expressions?**

1. Dejan claro que la función se usa como un valor.
2. No hay hoisting, lo que obliga a definirla antes de usarla (más predecible).
3. Son necesarias cuando quieres pasar funciones como argumentos (callbacks).

**Funciones anónimas vs nombradas**

\`\`\`js
// Anónima: no tiene nombre después de "function"
const calcular = function(x) { return x * 2; };

// Nombrada: útil para depuración en stack traces
const calcular = function multiplicarPor2(x) { return x * 2; };
\`\`\``,
    codeExample: `// ── Function expression básica ───────────────────────────────────────────

const sumar = function(a, b) {
  return a + b;
};

console.log(sumar(3, 5));   // → 8
console.log(sumar(10, 20)); // → 30

// ── Guardar diferentes funciones según condición ───────────────────────────

let operacion;
const tipo = "multiplicacion";

if (tipo === "suma") {
  operacion = function(a, b) { return a + b; };
} else if (tipo === "multiplicacion") {
  operacion = function(a, b) { return a * b; };
} else {
  operacion = function(a, b) { return a - b; };
}

console.log("Resultado:", operacion(4, 5)); // → 20

// ── Función en un objeto (método) ─────────────────────────────────────────

const calculadora = {
  sumar: function(a, b) { return a + b; },
  restar: function(a, b) { return a - b; },
  multiplicar: function(a, b) { return a * b; },
};

console.log(calculadora.sumar(10, 3));       // → 13
console.log(calculadora.multiplicar(4, 7));  // → 28

// ── Diferencia de hoisting ────────────────────────────────────────────────

// Function declaration: funciona antes de declararse
console.log(cuadrado(5)); // → 25 (gracias al hoisting)
function cuadrado(n) { return n * n; }

// Function expression: NO funciona antes de declararse
// console.log(cubo(3)); // ← Error: Cannot access 'cubo' before initialization
const cubo = function(n) { return n * n * n; };
console.log(cubo(3)); // → 27 (solo funciona después de la declaración)`,
    keyPoints: [
      'Una function expression asigna una función a una variable: const fn = function() {}.',
      'Las function expressions NO tienen hoisting: debes declararlas antes de usarlas.',
      'Las funciones son valores de primera clase: puedes guardarlas, pasarlas y devolverlas.',
      'Las function expressions pueden ser anónimas (sin nombre después de function).',
      'Son la base para entender callbacks y arrow functions.',
      'Puedes guardar funciones en objetos como métodos: objeto.metodo = function() {}.',
    ],
    exercise: {
      description:
        'Crea una calculadora usando un objeto con function expressions como métodos: sumar, restar, multiplicar, dividir (con protección si el divisor es 0), y potencia. Luego crea una función "operar(a, operacion, b)" que reciba una operación como string ("suma", "resta", etc.) y decida cuál función de la calculadora llamar.',
      hint: 'Para operar: usa if/else if para mapear el string a la función de la calculadora. calculadora.sumar(a, b) llama al método sumar del objeto.',
    },
    quiz: [
      {
        question: '¿Por qué las function expressions no tienen hoisting?',
        options: [
          'Porque usan const o let, que no tienen hoisting en su inicialización',
          'Porque son anónimas',
          'Porque son más modernas que las function declarations',
          'Porque JavaScript no las reconoce como funciones',
        ],
        correctAnswer: 'Porque usan const o let, que no tienen hoisting en su inicialización',
        correctFeedback:
          'Correcto. const y let sí son elevadas (hoisted), pero en la Temporal Dead Zone — no pueden usarse antes de inicializarse. Por eso la function expression no está disponible antes de su declaración.',
        incorrectFeedback:
          'No es correcto. La razón es que const y let no permiten acceso antes de su inicialización (Temporal Dead Zone). La función en sí podría tener hoisting, pero la variable que la contiene no está disponible aún.',
      },
      {
        question: '¿Qué significa que las funciones sean "valores de primera clase" en JavaScript?',
        options: [
          'Son más rápidas que otros tipos de datos',
          'Se pueden guardar en variables, pasar como argumentos y devolver desde funciones',
          'Son las funciones más importantes del lenguaje',
          'No pueden ser modificadas después de crearse',
        ],
        correctAnswer: 'Se pueden guardar en variables, pasar como argumentos y devolver desde funciones',
        correctFeedback:
          'Correcto. Ser un "valor de primera clase" significa que las funciones se pueden tratar como cualquier otro dato: guardar en variables, pasar como argumento, devolver desde otra función.',
        incorrectFeedback:
          'No es correcto. "Primera clase" en programación significa que el tipo de dato puede usarse en todos los contextos donde se usaría cualquier otro valor: variables, argumentos, valores de retorno.',
      },
    ],
  },

  // ── Lección 34 ────────────────────────────────────────────────────────────
  {
    slug: 'arrow-functions',
    title: 'Arrow functions',
    module: 'Funciones',
    moduleNumber: 5,
    order: 34,
    description:
      'Aprende a escribir funciones modernas usando la sintaxis de flecha.',
    explanation: `Las **arrow functions** (funciones flecha) son una sintaxis más compacta para escribir function expressions, introducidas en ES6 (2015). Son muy comunes en código JavaScript moderno.

**Sintaxis básica:**

\`\`\`js
// Function expression tradicional:
const sumar = function(a, b) {
  return a + b;
};

// Arrow function equivalente:
const sumar = (a, b) => {
  return a + b;
};

// Forma ultracorta (return implícito):
const sumar = (a, b) => a + b;
\`\`\`

**Formas de arrow function:**

\`\`\`js
// Sin parámetros: paréntesis vacíos obligatorios
const saludar = () => console.log("Hola");

// Un parámetro: paréntesis opcionales
const doble = n => n * 2;
const doble = (n) => n * 2; // también válido

// Múltiples parámetros: paréntesis obligatorios
const sumar = (a, b) => a + b;

// Cuerpo con múltiples líneas: necesita {} y return
const calcular = (a, b) => {
  const resultado = a * b + 10;
  return resultado;
};

// Devolver un objeto: envuelve en paréntesis
const crearUsuario = (nombre) => ({ nombre, activo: true });
\`\`\`

**Diferencia importante con this**

Las arrow functions NO tienen su propio \`this\`. Esto las hace diferentes de las funciones regulares en contextos como objetos y clases. Para principiantes: esto importa cuando trabajas con métodos de objetos — en ese caso, usa function declaration o function expression.

**¿Cuándo usar arrow functions?**

- Para funciones cortas y de una sola expresión.
- Como callbacks en map(), filter(), forEach().
- Cuando no necesitas \`this\` propio.`,
    codeExample: `// ── De function expression a arrow function ──────────────────────────────

// Antes:
const cuadrado = function(n) { return n * n; };

// Con arrow function:
const cuadrado = (n) => n * n;

// Incluso más corto (paréntesis opcionales con 1 parámetro):
const cuadrado = n => n * n;

console.log(cuadrado(5)); // → 25
console.log(cuadrado(9)); // → 81

// ── Arrow functions con arrays ────────────────────────────────────────────

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Con function expression:
const pares1 = numeros.filter(function(n) { return n % 2 === 0; });

// Con arrow function (más compacto):
const pares2 = numeros.filter(n => n % 2 === 0);

const dobles = numeros.map(n => n * 2);
const suma = numeros.reduce((acc, n) => acc + n, 0);

console.log("Pares:", pares2);   // → [2, 4, 6, 8, 10]
console.log("Dobles:", dobles);  // → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log("Suma:", suma);      // → 55

// ── Arrow function con múltiples líneas ───────────────────────────────────

const calcularPrecioFinal = (precio, descuento = 0) => {
  const descuentoAplicado = precio * (descuento / 100);
  const precioConDescuento = precio - descuentoAplicado;
  const precioConIVA = precioConDescuento * 1.16;
  return Math.round(precioConIVA * 100) / 100;
};

console.log(calcularPrecioFinal(200, 10)); // → 208.08
console.log(calcularPrecioFinal(100));     // → 116`,
    keyPoints: [
      'Las arrow functions son una sintaxis compacta para function expressions: (params) => expresion.',
      'Si hay un solo parámetro, los paréntesis son opcionales: n => n * 2.',
      'Si el cuerpo tiene una sola expresión, return es implícito: no necesitas escribirlo.',
      'Si hay varias líneas en el cuerpo, se necesitan {} y return explícito.',
      'Las arrow functions son muy comunes como callbacks en map(), filter(), forEach().',
      'No tienen su propio this — evítalas como métodos de objetos.',
    ],
    exercise: {
      description:
        'Convierte estas function expressions a arrow functions: 1) const triple = function(n) { return n * 3; } 2) const esMayorDeEdad = function(edad) { return edad >= 18; } 3) const formatearPrecio = function(precio) { return "$" + precio.toFixed(2); }. Luego, usa arrow functions en map() para: a) obtener todos los cuadrados de [1,2,3,4,5], b) convertir ["hola","mundo"] a mayúsculas. Y en filter() para: c) obtener solo los impares de [1,2,3,4,5,6,7,8].',
      hint: 'Arrow function de una línea: const triple = n => n * 3. Para map y filter en cadena: array.filter(n => n % 2 !== 0).map(n => n * 2).',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de una arrow function con un parámetro y return implícito?',
        options: [
          'function(n) => n * 2',
          'n -> n * 2',
          'n => n * 2',
          '(n) -> { return n * 2 }',
        ],
        correctAnswer: 'n => n * 2',
        correctFeedback:
          'Correcto. Con un parámetro los paréntesis son opcionales, y con una sola expresión el return es implícito: n => n * 2.',
        incorrectFeedback:
          'No es correcto. La sintaxis de arrow function en JavaScript es: (params) => expresion. Con un parámetro: n => n * 2.',
      },
      {
        question: '¿Cuándo necesita una arrow function usar {} y return explícito?',
        options: [
          'Siempre',
          'Cuando tiene más de un parámetro',
          'Cuando el cuerpo tiene más de una instrucción',
          'Cuando devuelve un número',
        ],
        correctAnswer: 'Cuando el cuerpo tiene más de una instrucción',
        correctFeedback:
          'Correcto. Si la función tiene múltiples líneas de código, necesitas {} para delimitar el cuerpo y return explícito para devolver el valor.',
        incorrectFeedback:
          'No es correcto. Una arrow function con una sola expresión puede omitir {} y return. Cuando el cuerpo tiene múltiples instrucciones, necesita {} y return explícito.',
      },
    ],
  },

  // ── Lección 35 ────────────────────────────────────────────────────────────
  {
    slug: 'callbacks-basicos',
    title: 'Funciones callback',
    module: 'Funciones',
    moduleNumber: 5,
    order: 35,
    description:
      'Aprende qué es una función callback y por qué es muy común en JavaScript.',
    explanation: `Un **callback** es una función que se pasa como argumento a otra función, para que esa función la llame en el momento adecuado.

El nombre viene del inglés "call back" — "llamar de vuelta". Le dices a una función: "cuando termines tu trabajo, llama a esta función para hacer lo siguiente".

**Analogía:**

Imagina que dejas tu auto en el taller. Le dices al mecánico: "cuando termines de repararlo, llámame". Esa instrucción de "llámame cuando termines" es el callback.

**Sintaxis básica:**

\`\`\`js
function ejecutar(accion) {
  console.log("Preparando...");
  accion(); // llama a la función que recibió como argumento
  console.log("Listo.");
}

function saludar() {
  console.log("¡Hola!");
}

ejecutar(saludar); // pasamos saludar como callback
// → Preparando...
// → ¡Hola!
// → Listo.
\`\`\`

**Callbacks que ya conoces:**

Ya usaste callbacks sin darte cuenta:
\`\`\`js
// forEach espera un callback:
array.forEach(elemento => console.log(elemento));

// map espera un callback:
array.map(n => n * 2);

// filter espera un callback:
array.filter(n => n > 5);
\`\`\`

**Callbacks con parámetros:**

\`\`\`js
function procesarNumeros(numeros, operacion) {
  const resultado = [];
  for (const n of numeros) {
    resultado.push(operacion(n));
  }
  return resultado;
}

const numeros = [1, 2, 3, 4, 5];
console.log(procesarNumeros(numeros, n => n * 3));  // → [3, 6, 9, 12, 15]
console.log(procesarNumeros(numeros, n => n ** 2)); // → [1, 4, 9, 16, 25]
\`\`\`

**¿Por qué son importantes los callbacks?**

Son la base de la programación asíncrona en JavaScript: cuando cargas datos de internet, lees archivos o esperas un evento del usuario, usas callbacks para "hacer algo cuando termine". En módulos más avanzados aprenderás Promises y async/await, que son formas más modernas de manejar esto.`,
    codeExample: `// ── Callback básico ───────────────────────────────────────────────────────

function aplicarDescuento(precio, calcularDescuento) {
  const descuento = calcularDescuento(precio);
  return precio - descuento;
}

// Diferentes callbacks para diferentes reglas de descuento
const descuento10 = precio => precio * 0.10;
const descuento20 = precio => precio * 0.20;
const descuentoVIP = precio => precio > 500 ? precio * 0.30 : precio * 0.15;

console.log(aplicarDescuento(200, descuento10));   // → 180
console.log(aplicarDescuento(200, descuento20));   // → 160
console.log(aplicarDescuento(600, descuentoVIP));  // → 420

// ── Callbacks en acciones de usuario (simulado) ───────────────────────────

function alHacerClic(elemento, accion) {
  console.log(\`El usuario hizo clic en: \${elemento}\`);
  accion();
}

alHacerClic("Botón Comprar", () => {
  console.log("Procesando la compra...");
  console.log("¡Compra realizada con éxito!");
});

alHacerClic("Botón Cancelar", () => {
  console.log("Compra cancelada.");
});

// ── forEach y map: callbacks que ya usaste ────────────────────────────────

const tareas = ["Estudiar JS", "Hacer ejercicio", "Leer"];

// forEach recibe un callback
tareas.forEach((tarea, i) => {
  console.log(\`\${i + 1}. \${tarea}\`);
});

// map recibe un callback
const tareasEnMayusculas = tareas.map(tarea => tarea.toUpperCase());
console.log(tareasEnMayusculas);`,
    keyPoints: [
      'Un callback es una función pasada como argumento a otra función para ser llamada después.',
      'Ya usas callbacks en forEach(), map() y filter() — son los argumentos que les pasas.',
      'Los callbacks permiten personalizar el comportamiento de una función desde fuera.',
      'Puedes pasar funciones nombradas o arrow functions directamente como callbacks.',
      'Los callbacks son la base de la programación asíncrona en JavaScript.',
      'No necesitas entender asincronía ahora — lo importante es reconocer el patrón.',
    ],
    exercise: {
      description:
        'Crea una función "filtrarYMostrar(array, criterio, etiqueta)" que: 1) Filtra el array usando el callback "criterio". 2) Muestra cada elemento filtrado con la etiqueta. Úsala con el array [15, 8, 42, 3, 67, 29, 11, 55] y tres criterios distintos como arrow functions: mayores de 20, múltiplos de 3, entre 10 y 50. Muestra cuántos elementos cumple cada criterio.',
      hint: 'La función recibe criterio como parámetro y lo llama con cada elemento: array.filter(criterio). Las arrow functions que pasas como argumento son los callbacks.',
    },
    quiz: [
      {
        question: '¿Qué es un callback?',
        options: [
          'Una función que llama a otra función y espera resultado',
          'Una función pasada como argumento a otra función para ser ejecutada después',
          'Una forma de manejar errores en JavaScript',
          'Una función que se ejecuta automáticamente al cargar la página',
        ],
        correctAnswer: 'Una función pasada como argumento a otra función para ser ejecutada después',
        correctFeedback:
          'Correcto. Un callback es una función que le pasas a otra como argumento, para que esa función la llame cuando necesite.',
        incorrectFeedback:
          'No es correcto. Un callback es una función que se pasa como argumento a otra función. La función que la recibe la llama en el momento apropiado.',
      },
      {
        question: '¿En cuál de estas llamadas estás usando un callback?',
        options: [
          'console.log("hola")',
          'Math.max(1, 2, 3)',
          '[1,2,3].map(n => n * 2)',
          'parseInt("42")',
        ],
        correctAnswer: '[1,2,3].map(n => n * 2)',
        correctFeedback:
          'Correcto. La arrow function n => n * 2 se pasa como argumento a map(). Eso es exactamente un callback.',
        incorrectFeedback:
          'No es correcto. En [1,2,3].map(n => n * 2), la arrow function n => n * 2 se pasa como argumento a map() para que map() la llame con cada elemento. Eso es un callback.',
      },
    ],
  },

  // ── Lección 36 ────────────────────────────────────────────────────────────
  {
    slug: 'buenas-practicas-funciones-js',
    title: 'Buenas prácticas con funciones',
    module: 'Funciones',
    moduleNumber: 5,
    order: 36,
    description:
      'Aprende a escribir funciones pequeñas, claras y fáciles de reutilizar.',
    explanation: `Escribir funciones que funcionen es solo el primer paso. Las funciones de calidad son fáciles de leer, mantener y reutilizar. Aquí están las principales buenas prácticas.

**1. Una función, una responsabilidad**

Cada función debe hacer **una sola cosa** y hacerla bien. Si una función hace demasiado, divídela.

\`\`\`js
// MAL: una función que hace demasiado
function procesarPedido(pedido) {
  validarDatos(pedido);
  calcularTotal(pedido);
  aplicarDescuento(pedido);
  enviarEmail(pedido);
  actualizarInventario(pedido);
  generarFactura(pedido);
}

// BIEN: funciones pequeñas y específicas
function validarPedido(pedido) { ... }
function calcularTotalPedido(pedido) { ... }
function procesarPedido(pedido) {
  validarPedido(pedido);
  calcularTotalPedido(pedido);
}
\`\`\`

**2. Nombres descriptivos**

El nombre debe decir exactamente qué hace la función. Si necesitas un comentario para explicarlo, el nombre probablemente es malo.

\`\`\`js
// MAL
function proceso(d, n) { ... }
function calcular(x) { ... }

// BIEN
function calcularImpuestoRenta(salario) { ... }
function obtenerNombreCompleto(usuario) { ... }
\`\`\`

**3. Pocos parámetros**

Idealmente 0-2 parámetros. Máximo 3. Si necesitas más, usa un objeto.

**4. Funciones puras cuando sea posible**

Una función **pura** siempre devuelve el mismo resultado con los mismos argumentos y no produce efectos secundarios (no modifica variables externas, no hace llamadas a APIs, no modifica el DOM).

\`\`\`js
// Función pura: predecible, fácil de testear
function calcularDescuento(precio, porcentaje) {
  return precio * (1 - porcentaje / 100);
}

// No pura: depende de estado externo
function calcularDescuento() {
  return precioGlobal * descuentoGlobal; // depende de variables externas
}
\`\`\`

**5. Evitar funciones largas**

Si una función tiene más de 20 líneas, probablemente hace demasiado. Divídela.

**6. Return temprano para evitar anidamiento**

\`\`\`js
// Con anidamiento profundo (difícil de leer)
function validar(usuario) {
  if (usuario) {
    if (usuario.nombre) {
      if (usuario.email) {
        return true;
      }
    }
  }
  return false;
}

// Con return temprano (más claro)
function validar(usuario) {
  if (!usuario) return false;
  if (!usuario.nombre) return false;
  if (!usuario.email) return false;
  return true;
}
\`\`\``,
    codeExample: `// ── Aplicando buenas prácticas ───────────────────────────────────────────

// ❌ Función que hace demasiado
function procesar(datos) {
  if (!datos || datos.length === 0) return;
  for (const d of datos) {
    if (d.precio > 0) {
      const total = d.precio * d.cantidad;
      const desc = total > 500 ? total * 0.1 : 0;
      console.log(d.nombre, total - desc);
    }
  }
}

// ✅ Dividida en funciones pequeñas y claras
function esPedidoValido(pedido) {
  return pedido.precio > 0 && pedido.cantidad > 0;
}

function calcularSubtotal(pedido) {
  return pedido.precio * pedido.cantidad;
}

function calcularDescuentoPedido(subtotal) {
  return subtotal > 500 ? subtotal * 0.1 : 0;
}

function calcularTotalPedido(pedido) {
  const subtotal = calcularSubtotal(pedido);
  const descuento = calcularDescuentoPedido(subtotal);
  return subtotal - descuento;
}

function mostrarResumenPedido(pedido) {
  if (!esPedidoValido(pedido)) {
    console.log("Pedido inválido:", pedido.nombre);
    return;
  }
  const total = calcularTotalPedido(pedido);
  console.log(\`\${pedido.nombre}: $\${total.toFixed(2)}\`);
}

// Ahora es fácil de usar, probar y mantener
const pedidos = [
  { nombre: "Laptop", precio: 800, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 3 },
  { nombre: "INVÁLIDO", precio: -10, cantidad: 0 },
];

pedidos.forEach(mostrarResumenPedido);`,
    keyPoints: [
      'Principio de responsabilidad única: cada función debe hacer una sola cosa.',
      'Los nombres deben ser descriptivos y comenzar con un verbo: calcular, obtener, validar.',
      'Idealmente 0-2 parámetros. Más de 3 es señal de que la función hace demasiado.',
      'Las funciones puras son predecibles: mismo input → mismo output, sin efectos secundarios.',
      'El return temprano evita el anidamiento profundo y hace el código más legible.',
      'Divide las funciones largas en funciones más pequeñas con nombres descriptivos.',
    ],
    exercise: {
      description:
        'Toma este código y refactorízalo en múltiples funciones pequeñas siguiendo las buenas prácticas: "function procesarEstudiante(nombre, notas) { let suma = 0; for (let n of notas) suma += n; let promedio = suma / notas.length; let estado = promedio >= 6 ? \'Aprobado\' : \'Reprobado\'; console.log(nombre + \': \' + promedio.toFixed(2) + \' - \' + estado); }". Crea funciones separadas para calcular promedio, determinar estado, y mostrar resultado. Asegúrate de que cada función tenga un solo propósito.',
      hint: 'Funciones resultantes sugeridas: calcularPromedio(notas), determinarEstado(promedio), formatearReporte(nombre, promedio, estado), mostrarReporteEstudiante(nombre, notas). La última llama a las otras.',
    },
    quiz: [
      {
        question: '¿Qué es una función "pura"?',
        options: [
          'Una función sin parámetros',
          'Una función que siempre devuelve el mismo resultado para los mismos argumentos y sin efectos secundarios',
          'Una función que usa solo variables locales',
          'Una función que no usa callbacks',
        ],
        correctAnswer: 'Una función que siempre devuelve el mismo resultado para los mismos argumentos y sin efectos secundarios',
        correctFeedback:
          'Correcto. Una función pura es predecible (mismo input = mismo output) y no modifica nada fuera de ella misma.',
        incorrectFeedback:
          'No es correcto. Una función pura tiene dos características: mismo input produce siempre mismo output, y no produce efectos secundarios (no modifica variables externas, no hace llamadas a APIs).',
      },
      {
        question: '¿Qué ventaja tiene el "early return" (return temprano)?',
        options: [
          'Hace la función más rápida',
          'Evita el anidamiento profundo y hace el código más legible',
          'Permite usar más parámetros',
          'Convierte la función en pura automáticamente',
        ],
        correctAnswer: 'Evita el anidamiento profundo y hace el código más legible',
        correctFeedback:
          'Correcto. El return temprano maneja los casos de error/edge case primero, dejando el flujo principal sin anidamiento excesivo.',
        incorrectFeedback:
          'No es correcto. El return temprano mejora la legibilidad al manejar los casos especiales primero, evitando múltiples niveles de if/else anidados.',
      },
    ],
  },
]

export const jsModule5: Module = {
  number: 5,
  title: 'Funciones',
  level: 'básico',
  lessons: lessonsJsModule5,
}
