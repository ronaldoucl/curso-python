import type { Lesson, Module } from '@/types'

export const lessonsJsModule9: Lesson[] = [
  // ── Lección 60 ────────────────────────────────────────────────────────────
  {
    slug: 'function-expressions-2',
    title: 'Function expressions',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 60,
    description:
      'Aprende a guardar funciones dentro de variables y entiende cómo se diferencian de las function declarations.',
    explanation: `Una **function expression** es cuando guardas una función dentro de una variable en lugar de declararla con el nombre directamente. La función pasa a ser un valor, como un número o un string.

**Function declaration (la que ya conoces)**
\`\`\`js
function saludar(nombre) {
  return "Hola, " + nombre;
}
\`\`\`

**Function expression (función como valor en variable)**
\`\`\`js
const saludar = function(nombre) {
  return "Hola, " + nombre;
};
\`\`\`

La diferencia clave: en la expression, la función no tiene nombre propio — se guarda en la variable. La variable ES la función.

**¿Cómo se llaman?**

Igual que siempre: \`saludar("Ana")\`. En ambos casos.

**Diferencia importante: hoisting**

Las function declarations son "elevadas" al inicio del scope:
\`\`\`js
hola(); // ✓ funciona antes de la declaración
function hola() { console.log("Hola"); }
\`\`\`

Las function expressions NO:
\`\`\`js
hola(); // ❌ ReferenceError
const hola = function() { console.log("Hola"); };
\`\`\`

**¿Cuándo usar cada una?**

| Tipo | Cuándo usar |
|------|-------------|
| Declaration | Funciones principales, se usan en todo el archivo |
| Expression | Funciones asignadas dinámicamente, callbacks, funciones opcionales |

**Function expressions con nombres**

Útil para debugging:
\`\`\`js
const factorial = function calcFactorial(n) {
  if (n <= 1) return 1;
  return n * calcFactorial(n - 1);
};
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Function declaration: disponible en todo el scope (hoisting)
console.log(sumar(3, 4)); // → 7 (funciona antes de la declaración)

function sumar(a, b) {
  return a + b;
}

// Function expression: no tiene hoisting
const restar = function(a, b) {
  return a - b;
};
// restar se puede usar DESPUÉS de esta línea
console.log(restar(10, 4)); // → 6

// La variable ES la función
const multiplicar = function(a, b) {
  return a * b;
};

console.log(typeof multiplicar);    // → "function"
console.log(multiplicar(3, 5));     // → 15

// Asignar funciones a objetos o estructuras dinámicamente
let operaciones = {};

if (true) {
  operaciones.calcular = function(x) {
    return x * x;
  };
}

console.log(operaciones.calcular(4)); // → 16

// Function expression con nombre (para recursión o debugging)
const potencia = function calcPotencia(base, exp) {
  if (exp === 0) return 1;
  return base * calcPotencia(base, exp - 1);
};

console.log(potencia(2, 8)); // → 256`,
    keyPoints: [
      'Una function expression guarda una función como valor en una variable.',
      'Se llama igual que una function declaration: variable(argumentos).',
      'Las function expressions NO tienen hoisting: no puedes llamarlas antes de declararlas.',
      'Las function declarations SÍ tienen hoisting: se pueden llamar antes en el código.',
      'La variable que guarda la función tiene tipo "function" en JavaScript.',
      'Son útiles para asignar funciones dinámicamente o en callbacks.',
    ],
    exercise: {
      description:
        'Crea function expressions para: 1) calcularCuadrado(n) que devuelva n al cuadrado. 2) esPar(n) que devuelva true si n es par. 3) formatearPrecio(precio, moneda = "USD") que devuelva un string como "USD 150.00". Guarda las tres en constantes y úsalas. Intenta también llamarlas ANTES de declararlas y observa el error (ponlo en un comentario).',
      hint: 'Para formatear: return moneda + " " + precio.toFixed(2). Para esPar: return n % 2 === 0.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal diferencia entre function declaration y function expression?',
        options: [
          'La declaration es más rápida',
          'La expression se puede llamar antes de declararla (hoisting)',
          'La declaration tiene hoisting; la expression no puede usarse antes de su definición',
          'La expression no puede recibir parámetros',
        ],
        correctAnswer: 'La declaration tiene hoisting; la expression no puede usarse antes de su definición',
        correctFeedback:
          'Correcto. El hoisting "eleva" las function declarations al inicio del scope. Las function expressions no se elevan, por lo que no puedes usarlas antes de la línea donde las declaras.',
        incorrectFeedback:
          'Incorrecto. La diferencia clave es el hoisting: function declarations están disponibles desde el inicio del scope. Las function expressions solo están disponibles después de la línea donde se definen.',
      },
      {
        question: '¿Cómo se llama una function expression guardada en la variable calcular?',
        options: [
          'function calcular()',
          'calcular()',
          'expression.calcular()',
          'call(calcular)',
        ],
        correctAnswer: 'calcular()',
        correctFeedback:
          'Correcto. La variable calcular guarda la función, así que calcular() la llama exactamente igual que cualquier otra función.',
        incorrectFeedback:
          'Incorrecto. Una function expression se llama igual que cualquier función: usando el nombre de la variable seguido de paréntesis: calcular().',
      },
      {
        question: 'Dado: calcular(5);\nconst calcular = function(x) { return x * 2; };\n¿Qué pasa?',
        options: [
          'Devuelve 10',
          'ReferenceError: calcular no está definida',
          'Devuelve undefined',
          'La función se ejecuta normalmente',
        ],
        correctAnswer: 'ReferenceError: calcular no está definida',
        correctFeedback:
          'Correcto. Las function expressions no tienen hoisting. Llamar calcular() antes de que se ejecute la línea const calcular = function... lanza un ReferenceError.',
        incorrectFeedback:
          'Incorrecto. Las function expressions no tienen hoisting. Intentar llamar calcular() antes de que se ejecute const calcular = function... causa un ReferenceError.',
      },
      {
        question: '¿Qué tipo de dato devuelve typeof para una variable que guarda una function expression?',
        options: ['"object"', '"expression"', '"function"', '"undefined"'],
        correctAnswer: '"function"',
        correctFeedback:
          'Correcto. En JavaScript, las funciones tienen el tipo "function" independientemente de cómo se definan.',
        incorrectFeedback:
          'Incorrecto. typeof devuelve "function" para cualquier función, sea declaration o expression. Las funciones son un tipo especial en JavaScript.',
      },
    ],
  },

  // ── Lección 61 ────────────────────────────────────────────────────────────
  {
    slug: 'arrow-functions-2',
    title: 'Arrow functions',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 61,
    description:
      'Aprende a escribir funciones con sintaxis de flecha y cuándo usarlas.',
    explanation: `Las **arrow functions** (funciones flecha) son una sintaxis más concisa para escribir funciones. Las introdujo ES6 en 2015 y hoy son muy comunes.

**Sintaxis básica**
\`\`\`js
// Function expression tradicional
const sumar = function(a, b) {
  return a + b;
};

// Arrow function equivalente
const sumar = (a, b) => {
  return a + b;
};

// Forma ultra-corta (implicit return): si el cuerpo es una sola expresión
const sumar = (a, b) => a + b;
\`\`\`

**Variaciones de sintaxis**

Un solo parámetro: se pueden omitir los paréntesis:
\`\`\`js
const doble = x => x * 2;
const mayusculas = nombre => nombre.toUpperCase();
\`\`\`

Sin parámetros: los paréntesis son obligatorios:
\`\`\`js
const obtenerFecha = () => new Date().toLocaleDateString("es-ES");
\`\`\`

Cuerpo con múltiples líneas: necesitas {} y return explícito:
\`\`\`js
const calcularDescuento = (precio, descuento) => {
  let ahorro = precio * descuento;
  let final = precio - ahorro;
  return final;
};
\`\`\`

**Devolver un objeto (truco especial)**

Envuelve el objeto en paréntesis para evitar que las {} sean confundidas con el cuerpo:
\`\`\`js
const crearProducto = (nombre, precio) => ({ nombre, precio });
\`\`\`

**¿Cuándo usar arrow functions?**
- Callbacks (forEach, map, filter)
- Funciones cortas de una línea
- Cuando no necesitas this

**Cuándo NO usar arrow functions:**
- Métodos de objetos que usen this
- Funciones constructoras`,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

// Equivalencias: function expression → arrow function
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(sumar(5, 3));        // → 8
console.log(restar(10, 4));      // → 6
console.log(multiplicar(4, 7));  // → 28

// Un parámetro: sin paréntesis
const cuadrado = x => x * x;
const esPar = n => n % 2 === 0;
const mayusculas = s => s.toUpperCase();

console.log(cuadrado(5));        // → 25
console.log(esPar(8));           // → true
console.log(mayusculas("hola")); // → "HOLA"

// Sin parámetros
const obtenerSaludo = () => "Bienvenido a RonaldoScript";
console.log(obtenerSaludo()); // → "Bienvenido a RonaldoScript"

// Múltiples líneas: {} y return
const calcularTotal = (precio, cantidad, descuento) => {
  let subtotal = precio * cantidad;
  let ahorro = subtotal * descuento;
  return subtotal - ahorro;
};

console.log(calcularTotal(100, 3, 0.10)); // → 270

// Devolver objeto: envuelto en ()
const crearEstudiante = (nombre, nota) => ({
  nombre,
  nota,
  aprobado: nota >= 6,
});

console.log(crearEstudiante("Ana", 8.5));
// → { nombre: "Ana", nota: 8.5, aprobado: true }`,
    keyPoints: [
      'Las arrow functions son una sintaxis más corta para function expressions.',
      'Si el cuerpo es una sola expresión, se puede omitir {} y return (implicit return).',
      'Un solo parámetro puede omitir los paréntesis. Sin parámetros, los paréntesis son obligatorios.',
      'Para devolver un objeto directamente, envuelve las {} en paréntesis: () => ({ }).',
      'Las arrow functions no tienen su propio this — no las uses como métodos de objeto.',
      'Son ideales para callbacks en forEach, map, filter y funciones de una línea.',
    ],
    exercise: {
      description:
        'Convierte estas function expressions en arrow functions: 1) const doble = function(n) { return n * 2; }. 2) const saludo = function(nombre) { return "Hola, " + nombre + "!"; }. 3) const calcularIMC = function(peso, altura) { return peso / (altura * altura); }. 4) const crearItem = function(nombre, precio) { return { nombre: nombre, precio: precio }; }. Usa la forma más corta posible en cada caso.',
      hint: 'Para 1 y 2 puedes usar implicit return de una línea. Para 4, devolver objeto: usa => ({ nombre, precio }).',
    },
    quiz: [
      {
        question: '¿Cuál de estas arrow functions usa implicit return correctamente?',
        options: [
          'const f = x => { x * 2 }',
          'const f = x => x * 2',
          'const f = (x) => return x * 2',
          'const f = x -> x * 2',
        ],
        correctAnswer: 'const f = x => x * 2',
        correctFeedback:
          'Correcto. Cuando el cuerpo es una sola expresión y no hay llaves {}, el valor se devuelve implícitamente. No se escribe return.',
        incorrectFeedback:
          'Incorrecto. Con implicit return no se usan llaves {} ni la palabra return. La sintaxis correcta es const f = x => x * 2.',
      },
      {
        question: '¿Cómo escribirías una arrow function sin parámetros?',
        options: [
          'const f = => "hola"',
          'const f = _ => "hola"',
          'const f = () => "hola"',
          'const f = function => "hola"',
        ],
        correctAnswer: 'const f = () => "hola"',
        correctFeedback:
          'Correcto. Sin parámetros, los paréntesis vacíos () son obligatorios antes de la flecha.',
        incorrectFeedback:
          'Incorrecto. Cuando no hay parámetros, los paréntesis vacíos () son obligatorios: const f = () => "hola". La sintaxis => sin paréntesis lanza un error.',
      },
      {
        question: '¿Qué problema tiene este código?\nconst crearUser = (nombre) => { nombre: nombre }',
        options: [
          'Nada, devuelve el objeto correctamente',
          'Las llaves {} se interpretan como el cuerpo de la función, no como objeto',
          'Las arrow functions no pueden devolver objetos',
          'Falta el punto y coma',
        ],
        correctAnswer: 'Las llaves {} se interpretan como el cuerpo de la función, no como objeto',
        correctFeedback:
          'Correcto. Para devolver un objeto directamente, debes envolverlo en paréntesis: () => ({ nombre: nombre }). Sin los paréntesis, {} es el cuerpo de la función.',
        incorrectFeedback:
          'Incorrecto. Las {} en una arrow function se interpretan como el cuerpo de la función. Para devolver un objeto literal directamente, debes envolverlo en paréntesis: (nombre) => ({ nombre: nombre }).',
      },
      {
        question: '¿Cuándo NO deberías usar una arrow function?',
        options: [
          'Cuando tiene más de un parámetro',
          'Cuando es un método de objeto que necesita acceder a this',
          'Cuando devuelve un número',
          'Cuando se usa dentro de un forEach',
        ],
        correctAnswer: 'Cuando es un método de objeto que necesita acceder a this',
        correctFeedback:
          'Correcto. Las arrow functions no tienen su propio this. Si usas this dentro de una arrow function en un objeto, no apuntará al objeto.',
        incorrectFeedback:
          'Incorrecto. Las arrow functions no tienen su propio this. Si usas una arrow function como método de un objeto y dentro usas this, no funcionará como esperas.',
      },
    ],
  },

  // ── Lección 62 ────────────────────────────────────────────────────────────
  {
    slug: 'parametros-por-defecto-js',
    title: 'Parámetros por defecto',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 62,
    description:
      'Aprende a definir valores por defecto para parámetros cuando no se envían argumentos.',
    explanation: `Los **parámetros por defecto** (default parameters) permiten que una función funcione correctamente aunque no reciba todos sus argumentos. Se introdujeron en ES6.

**Sintaxis**
\`\`\`js
function saludar(nombre = "usuario") {
  return "Hola, " + nombre;
}
saludar("Ana");   // → "Hola, Ana"
saludar();        // → "Hola, usuario" (usa el default)
saludar(undefined); // → "Hola, usuario" (undefined activa el default)
\`\`\`

**Con múltiples parámetros**
\`\`\`js
function crearProducto(nombre, precio = 0, stock = 10, disponible = true) {
  return { nombre, precio, stock, disponible };
}

crearProducto("Laptop", 1200);
// → { nombre: "Laptop", precio: 1200, stock: 10, disponible: true }
\`\`\`

**Los parámetros por defecto van al final**

Por convención (y lógica), pon los parámetros con default al final. Los parámetros obligatorios van primero:
\`\`\`js
// BIEN: obligatorios primero, opcionales al final
function calcular(precio, descuento = 0, tasa = 0.16) { ... }

// MAL: parámetro obligatorio después de uno con default
function calcular(descuento = 0, precio) { ... } // confuso
\`\`\`

**Usar otra variable como default**
\`\`\`js
const MONEDA_DEFAULT = "USD";
function formatear(valor, moneda = MONEDA_DEFAULT) {
  return \`\${moneda} \${valor.toFixed(2)}\`;
}
\`\`\`

**Expresiones como default**
\`\`\`js
function crearFecha(fecha = new Date().toLocaleDateString("es-ES")) {
  return fecha;
}
console.log(crearFecha()); // → fecha de hoy
\`\`\`

**Con arrow functions**
\`\`\`js
const potencia = (base, exp = 2) => base ** exp;
potencia(3);    // → 9 (3 al cuadrado)
potencia(3, 3); // → 27 (3 al cubo)
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Parámetros por defecto básicos
function generarBienvenida(nombre = "visitante", plataforma = "RonaldoScript") {
  return \`¡Bienvenido a \${plataforma}, \${nombre}!\`;
}

console.log(generarBienvenida("Ana"));           // → "¡Bienvenido a RonaldoScript, Ana!"
console.log(generarBienvenida());                // → "¡Bienvenido a RonaldoScript, visitante!"
console.log(generarBienvenida("Carlos", "DevAcademy")); // → "¡Bienvenido a DevAcademy, Carlos!"

// Parámetros por defecto en función de precio
function calcularPrecioFinal(precio, descuento = 0, iva = 0.16) {
  let conDescuento = precio * (1 - descuento);
  let conIVA = conDescuento * (1 + iva);
  return conIVA;
}

console.log(calcularPrecioFinal(1000));           // → 1160 (sin descuento, con IVA)
console.log(calcularPrecioFinal(1000, 0.10));     // → 1044 (10% descuento + IVA)
console.log(calcularPrecioFinal(1000, 0.10, 0)); // → 900 (solo descuento, sin IVA)

// Arrow function con default
const redondear = (numero, decimales = 2) => Number(numero.toFixed(decimales));

console.log(redondear(3.14159));    // → 3.14
console.log(redondear(3.14159, 4)); // → 3.1416
console.log(redondear(3.14159, 0)); // → 3

// Crear objetos con defaults
const crearEstudiante = (nombre, promedio = 0, activo = true) => ({
  nombre,
  promedio,
  activo,
  nivel: promedio >= 7 ? "avanzado" : "básico",
});

console.log(crearEstudiante("Luis", 8.5));
// → { nombre: "Luis", promedio: 8.5, activo: true, nivel: "avanzado" }
console.log(crearEstudiante("María"));
// → { nombre: "María", promedio: 0, activo: true, nivel: "básico" }`,
    keyPoints: [
      'Los parámetros por defecto se activan cuando el argumento es undefined o no se pasa.',
      'Sintaxis: function f(param = valorDefault) { }.',
      'Los parámetros obligatorios van primero; los opcionales (con default) al final.',
      'undefined activa el default; null NO lo activa (null es un valor explícito).',
      'Puedes usar variables, expresiones o llamadas a funciones como valor por defecto.',
      'Funcionan igual en arrow functions: const f = (x, y = 10) => x + y.',
    ],
    exercise: {
      description:
        'Crea una función generarTarjeta(nombre, nivel = "básico", puntos = 0, activo = true) que devuelva un objeto con esas propiedades más: mensaje (string que diga "Bienvenido [nivel]" o "Cuenta inactiva" según activo), y categoría ("VIP" si puntos > 1000, "Regular" si no). Prueba la función: 1) sin valores opcionales, 2) con nivel "avanzado", 3) con puntos = 1500.',
      hint: 'Para mensaje: activo ? "Bienvenido " + nivel : "Cuenta inactiva". Para categoría: puntos > 1000 ? "VIP" : "Regular".',
    },
    quiz: [
      {
        question: '¿Cuándo se activa un parámetro por defecto?',
        options: [
          'Cuando el argumento es null',
          'Cuando el argumento es undefined o no se pasa',
          'Siempre que el parámetro sea opcional',
          'Cuando el argumento es 0 o false',
        ],
        correctAnswer: 'Cuando el argumento es undefined o no se pasa',
        correctFeedback:
          'Correcto. El default se activa cuando el argumento es undefined (o no se pasa). null, 0, false y "" son valores válidos que NO activan el default.',
        incorrectFeedback:
          'Incorrecto. El default solo se activa con undefined. null, false, 0 y "" son valores válidos y no activan el parámetro por defecto.',
      },
      {
        question: 'Dado: function f(a, b = 5) { return a + b; }\n¿Qué devuelve f(3)?',
        options: ['3', '8', 'undefined', 'Error'],
        correctAnswer: '8',
        correctFeedback:
          'Correcto. a = 3, b no se pasó así que usa el default b = 5. 3 + 5 = 8.',
        incorrectFeedback:
          'Incorrecto. a recibe 3 y b no se pasa, así que usa su valor por defecto (5). 3 + 5 = 8.',
      },
      {
        question: '¿Qué devuelve f(3, null) si f está definida como function f(a, b = 5)?',
        options: ['8', '3', 'null', 'Error'],
        correctAnswer: '3',
        correctFeedback:
          'Correcto. null es un valor explícito y NO activa el default. b = null, y 3 + null = 3 (JavaScript convierte null a 0 en suma numérica).',
        incorrectFeedback:
          'Incorrecto. null NO activa el default. b será null. En JavaScript, 3 + null = 3 porque null se convierte a 0 en operaciones numéricas.',
      },
      {
        question: '¿Cuál es la práctica correcta al usar parámetros por defecto?',
        options: [
          'Ponerlos al inicio de la lista de parámetros',
          'Ponerlos al final, después de los parámetros obligatorios',
          'Mezclarlos en cualquier posición',
          'Siempre usar undefined como valor por defecto',
        ],
        correctAnswer: 'Ponerlos al final, después de los parámetros obligatorios',
        correctFeedback:
          'Correcto. Los parámetros obligatorios van primero y los opcionales (con default) van al final, para que puedas omitir los opcionales sin saltarte los obligatorios.',
        incorrectFeedback:
          'Incorrecto. Por convención y lógica, los parámetros con default van al final. Si un parámetro opcional va antes de uno obligatorio, no puedes omitirlo sin pasar undefined explícitamente.',
      },
    ],
  },

  // ── Lección 63 ────────────────────────────────────────────────────────────
  {
    slug: 'funciones-como-valores-js',
    title: 'Funciones como valores',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 63,
    description:
      'Aprende cómo las funciones pueden guardarse, pasarse y reutilizarse como cualquier otro valor.',
    explanation: `En JavaScript, las funciones son **ciudadanos de primera clase** (first-class citizens). Esto significa que puedes tratar las funciones exactamente como cualquier otro valor: guardarlas en variables, pasarlas como argumentos y devolverlas desde otras funciones.

**Guardar una función en una variable**
\`\`\`js
const saludar = function(nombre) {
  return "Hola, " + nombre;
};

// También se puede hacer:
function saludarDirecto(nombre) {
  return "Hola, " + nombre;
}
const otraReferencia = saludarDirecto; // no la llama, la guarda
\`\`\`

**Guardar funciones en un objeto**
\`\`\`js
const operaciones = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
};
console.log(operaciones.sumar(5, 3)); // → 8
\`\`\`

**Guardar funciones en un array**
\`\`\`js
const transformaciones = [
  (x) => x * 2,
  (x) => x + 10,
  (x) => x ** 2,
];

let valor = 5;
for (let fn of transformaciones) {
  console.log(fn(valor));
}
// → 10, 15, 25
\`\`\`

**Pasar una función como argumento (callback)**

Esto se verá en la siguiente lección en detalle, pero el principio es:
\`\`\`js
function ejecutar(fn, valor) {
  return fn(valor);
}
const doble = x => x * 2;
console.log(ejecutar(doble, 7)); // → 14
\`\`\`

**Devolver una función desde otra función**
\`\`\`js
function crearSaludo(saludo) {
  return function(nombre) {
    return saludo + ", " + nombre + "!";
  };
}
const hola = crearSaludo("Hola");
const hey = crearSaludo("Hey");
console.log(hola("Ana")); // → "Hola, Ana!"
console.log(hey("Carlos")); // → "Hey, Carlos!"
\`\`\``,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

// Funciones como valores en variables
const calcularArea = {
  cuadrado: (lado) => lado * lado,
  rectangulo: (base, altura) => base * altura,
  circulo: (radio) => Math.PI * radio * radio,
  triangulo: (base, altura) => (base * altura) / 2,
};

console.log("Cuadrado 5:", calcularArea.cuadrado(5));        // → 25
console.log("Rectángulo 4x6:", calcularArea.rectangulo(4, 6)); // → 24
console.log("Círculo r=3:", calcularArea.circulo(3).toFixed(2)); // → 28.27

// Seleccionar y ejecutar funciones dinámicamente
let forma = "cuadrado";
let resultado = calcularArea[forma](7);
console.log(\`Área del \${forma}:\`, resultado); // → 49

// Funciones en array — aplicar transformaciones
const procesarNota = [
  (n) => Math.max(0, n),   // no puede ser negativa
  (n) => Math.min(10, n),  // no puede pasar de 10
  (n) => Math.round(n * 10) / 10, // redondear a 1 decimal
];

let nota = 10.8;
for (let fn of procesarNota) {
  nota = fn(nota);
}
console.log("Nota procesada:", nota); // → 10

// Devolver función con configuración
function crearFormateador(moneda, decimales = 2) {
  return (valor) => \`\${moneda} \${valor.toFixed(decimales)}\`;
}

const formatearUSD = crearFormateador("USD");
const formatearEUR = crearFormateador("EUR");
const formatearMXN = crearFormateador("MXN", 0);

console.log(formatearUSD(1500));   // → "USD 1500.00"
console.log(formatearEUR(85.5));   // → "EUR 85.50"
console.log(formatearMXN(250.9));  // → "MXN 251"`,
    keyPoints: [
      'En JavaScript las funciones son valores: se pueden guardar, pasar y devolver.',
      'Se pueden guardar en variables, objetos o arrays.',
      'Una variable que guarda una función se puede usar exactamente igual que la función.',
      'Pasar funciones como argumentos permite crear código más flexible y reutilizable.',
      'Devolver funciones desde funciones permite crear "fábricas" de comportamiento.',
      'Esto es lo que hace posible los callbacks, map, filter y otras características modernas.',
    ],
    exercise: {
      description:
        'Crea un objeto llamado validadores con tres propiedades: esMayorDeEdad (función que recibe edad, devuelve true si >= 18), esEmailValido (función que recibe string, devuelve true si contiene "@"), esPasswordSegura (función que recibe string, devuelve true si tiene longitud >= 8). Crea una función validarFormulario(datos) que reciba un objeto {edad, email, password} y use los validadores para verificar cada campo. Devuelve un objeto con los resultados.',
      hint: 'validadores.esMayorDeEdad = (edad) => edad >= 18. Para email: email.includes("@"). Para password: password.length >= 8.',
    },
    quiz: [
      {
        question: '¿Qué significa que las funciones son "ciudadanos de primera clase" en JavaScript?',
        options: [
          'Que las funciones son más importantes que los arrays',
          'Que las funciones pueden guardarse, pasarse y devolverse como cualquier otro valor',
          'Que las funciones tienen prioridad en el scope global',
          'Que solo las funciones pueden ser exportadas de un módulo',
        ],
        correctAnswer: 'Que las funciones pueden guardarse, pasarse y devolverse como cualquier otro valor',
        correctFeedback:
          'Correcto. "Primera clase" significa que las funciones tienen los mismos derechos que cualquier otro valor: se pueden asignar a variables, pasar como argumentos y devolver desde funciones.',
        incorrectFeedback:
          'Incorrecto. "Ciudadanos de primera clase" significa que las funciones son valores que se pueden guardar en variables, pasar como argumentos y devolver desde otras funciones, igual que números o strings.',
      },
      {
        question: 'Dado:\nconst ops = { doble: (x) => x * 2 };\nconsole.log(ops.doble(5));\n¿Qué imprime?',
        options: ['ops.doble', '5', '10', 'Error'],
        correctAnswer: '10',
        correctFeedback:
          'Correcto. ops.doble es una arrow function que multiplica por 2. ops.doble(5) devuelve 10.',
        incorrectFeedback:
          'Incorrecto. ops.doble es la función (x) => x * 2. Al llamarla con (5), devuelve 5 * 2 = 10.',
      },
      {
        question: '¿Cuál de estas acciones es válida con funciones en JavaScript?',
        options: [
          'Solo pueden llamarse directamente',
          'Pueden guardarse en arrays, objetos y variables',
          'No pueden pasarse como argumentos a otras funciones',
          'No pueden devolverse desde otras funciones',
        ],
        correctAnswer: 'Pueden guardarse en arrays, objetos y variables',
        correctFeedback:
          'Correcto. Las funciones son valores flexibles: se pueden guardar en variables, en propiedades de objetos, en arrays, pasarse como argumentos y devolverse.',
        incorrectFeedback:
          'Incorrecto. Las funciones pueden guardarse en variables, arrays y objetos, pasarse como argumentos a otras funciones Y devolverse desde otras funciones. Son valores de primera clase.',
      },
    ],
  },

  // ── Lección 64 ────────────────────────────────────────────────────────────
  {
    slug: 'callbacks-explicados-simple',
    title: 'Callbacks explicados simple',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 64,
    description:
      'Aprende qué es un callback usando ejemplos simples y cotidianos.',
    explanation: `Un **callback** es una función que se pasa como argumento a otra función para que sea llamada (ejecutada) en algún momento. El nombre viene de "call back" — llamar de vuelta.

**Analogía cotidiana**

Cuando pides una pizza por teléfono, le das al restaurante tu número para que te llamen cuando esté lista. Tu número es el "callback" — se usa más tarde, cuando se necesite.

**Ejemplo básico: función con callback**
\`\`\`js
function ejecutarDespues(callback) {
  console.log("Preparando...");
  callback(); // llamamos al callback
}

function listo() {
  console.log("¡Todo listo!");
}

ejecutarDespues(listo); // pasamos la función sin ()
// → "Preparando..."
// → "¡Todo listo!"
\`\`\`

**Importante: pasas la función, no la llamas**
\`\`\`js
ejecutarDespues(listo);   // ✓ correcto: pasas la función
ejecutarDespues(listo()); // ❌ error: llamas listo() y pasas su resultado (undefined)
\`\`\`

**Callback con argumentos**
\`\`\`js
function procesarNota(nota, mostrarResultado) {
  let aprobado = nota >= 6;
  mostrarResultado(nota, aprobado); // llama el callback con datos
}

function mostrarEnPantalla(nota, aprobado) {
  let estado = aprobado ? "Aprobado" : "Reprobado";
  console.log(\`Nota \${nota}: \${estado}\`);
}

procesarNota(8, mostrarEnPantalla); // → "Nota 8: Aprobado"
procesarNota(4, mostrarEnPantalla); // → "Nota 4: Reprobado"
\`\`\`

**Callback anónimo (inline)**

En lugar de definir la función por separado, la puedes escribir directamente:
\`\`\`js
procesarNota(9, function(nota, aprobado) {
  console.log("Callback anónimo:", nota, aprobado);
});

// Con arrow function:
procesarNota(9, (nota, aprobado) => {
  console.log("Arrow callback:", nota, aprobado);
});
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Función que recibe un callback
function procesarEstudiante(estudiante, accion) {
  console.log("Procesando:", estudiante.nombre);
  accion(estudiante); // ejecuta el callback con el estudiante
}

// Callbacks con nombre
function mostrarInfo(estudiante) {
  console.log(\`  \${estudiante.nombre} — Promedio: \${estudiante.promedio}\`);
}

function verificarAprobado(estudiante) {
  let estado = estudiante.promedio >= 6 ? "Aprobado ✓" : "Reprobado ✗";
  console.log(\`  \${estudiante.nombre}: \${estado}\`);
}

function darFelicitacion(estudiante) {
  if (estudiante.promedio >= 9) {
    console.log(\`  ¡Felicidades, \${estudiante.nombre}! Excelente rendimiento.\`);
  }
}

let ana = { nombre: "Ana", promedio: 9.2 };
let carlos = { nombre: "Carlos", promedio: 5.8 };

procesarEstudiante(ana, mostrarInfo);
procesarEstudiante(ana, verificarAprobado);
procesarEstudiante(ana, darFelicitacion);

procesarEstudiante(carlos, mostrarInfo);
procesarEstudiante(carlos, verificarAprobado);
procesarEstudiante(carlos, darFelicitacion); // no imprime nada (no cumple la condición)

// Callback inline con arrow function
let estudiantes = [
  { nombre: "María", promedio: 8.5 },
  { nombre: "Luis", promedio: 4.2 },
];

estudiantes.forEach((e) => {
  let nivel = e.promedio >= 7 ? "Bien" : "Necesita mejorar";
  console.log(\`\${e.nombre}: \${nivel}\`);
});`,
    keyPoints: [
      'Un callback es una función que se pasa como argumento a otra función.',
      'El callback se ejecuta dentro de la función que lo recibe, cuando sea necesario.',
      'Se pasa la función SIN paréntesis: fn(callback), no fn(callback()).',
      'Los callbacks pueden ser funciones con nombre o funciones anónimas (inline).',
      'Los callbacks permiten personalizar el comportamiento de una función.',
      'forEach, setTimeout, addEventListener — todos usan callbacks internamente.',
    ],
    exercise: {
      description:
        'Crea una función procesarLista(items, callback) que recorra el array items con un for...of y llame al callback con cada elemento. Pruébala con 3 callbacks distintos: uno que muestre el item en mayúsculas, otro que muestre su longitud (si es string), y otro que lo muestre con un prefijo "➤". El array puede ser de strings con nombres de frutas.',
      hint: 'procesarLista(frutas, (item) => console.log(item.toUpperCase())). La función procesarLista simplemente hace: for (let item of items) { callback(item); }.',
    },
    quiz: [
      {
        question: '¿Qué es un callback?',
        options: [
          'Una función que llama a otra al inicio del programa',
          'Una función pasada como argumento para ser ejecutada después',
          'Una función que devuelve otro callback',
          'Un método especial de los arrays',
        ],
        correctAnswer: 'Una función pasada como argumento para ser ejecutada después',
        correctFeedback:
          'Correcto. Un callback es una función que pasas a otra función para que la ejecute en el momento adecuado.',
        incorrectFeedback:
          'Incorrecto. Un callback es una función que pasas como argumento a otra función. La función receptora la ejecutará cuando la necesite.',
      },
      {
        question: '¿Cuál es el error en este código?\nfunction aplicar(fn) { fn(); }\naplicar(saludar());',
        options: [
          'fn() está mal escrito dentro de aplicar()',
          'Se está llamando saludar() en lugar de pasar la función saludar',
          'aplicar() no puede recibir funciones como argumento',
          'No hay error, funciona correctamente',
        ],
        correctAnswer: 'Se está llamando saludar() en lugar de pasar la función saludar',
        correctFeedback:
          'Correcto. aplicar(saludar()) llama a saludar() primero y pasa su resultado (probablemente undefined) a aplicar(). La forma correcta es aplicar(saludar) sin paréntesis.',
        incorrectFeedback:
          'Incorrecto. El error está en saludar(): los paréntesis lo llaman inmediatamente y pasan el resultado a aplicar(). Para pasar la función como callback: aplicar(saludar) sin paréntesis.',
      },
      {
        question: '¿Cuál de estas formas pasa correctamente un callback a una función?',
        options: [
          'ejecutar(callback())',
          'ejecutar("callback")',
          'ejecutar(callback)',
          'ejecutar(function callback())',
        ],
        correctAnswer: 'ejecutar(callback)',
        correctFeedback:
          'Correcto. Para pasar una función como callback, se escribe solo el nombre sin paréntesis: ejecutar(callback).',
        incorrectFeedback:
          'Incorrecto. Para pasar una función como callback debes pasarla sin llamarla: ejecutar(callback). Con () la llamarías y pasarías su resultado, no la función.',
      },
      {
        question: 'forEach() usa callbacks internamente. ¿Qué recibe el callback de forEach()?',
        options: [
          'El array completo',
          'El índice del elemento actual',
          'Cada elemento del array en cada iteración',
          'El length del array',
        ],
        correctAnswer: 'Cada elemento del array en cada iteración',
        correctFeedback:
          'Correcto. El callback de forEach recibe el elemento actual como primer argumento en cada iteración. También puede recibir el índice y el array completo como argumentos adicionales.',
        incorrectFeedback:
          'Incorrecto. El callback de forEach() recibe el elemento actual en cada iteración: arr.forEach((elemento) => { ... }). También puede recibir el índice como segundo argumento si lo necesitas.',
      },
    ],
  },

  // ── Lección 65 ────────────────────────────────────────────────────────────
  {
    slug: 'callbacks-con-arrays',
    title: 'Callbacks con arrays',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 65,
    description:
      'Aprende cómo métodos como forEach(), map() y filter() usan funciones callback.',
    explanation: `Los métodos modernos de arrays como \`forEach()\`, \`map()\` y \`filter()\` son funciones que reciben un callback y lo aplican a cada elemento. Este patrón es la base del JavaScript moderno.

**forEach() — ejecutar una acción por cada elemento**
\`\`\`js
let nombres = ["Ana", "Carlos", "María"];
nombres.forEach((nombre) => {
  console.log("Hola,", nombre);
});
\`\`\`

El callback recibe el elemento actual. También puede recibir el índice:
\`\`\`js
nombres.forEach((nombre, indice) => {
  console.log(indice + 1, ".", nombre);
});
\`\`\`

**map() — transformar cada elemento en algo nuevo**

\`map()\` devuelve un NUEVO array con los resultados del callback:
\`\`\`js
let precios = [100, 200, 350];
let preciosConIVA = precios.map((precio) => precio * 1.16);
console.log(preciosConIVA); // → [116, 232, 406]
console.log(precios);       // → [100, 200, 350] (intacto)
\`\`\`

**filter() — filtrar elementos según una condición**

\`filter()\` devuelve un NUEVO array solo con los elementos que devuelven true:
\`\`\`js
let notas = [85, 45, 90, 55, 78, 30];
let aprobadas = notas.filter((nota) => nota >= 60);
console.log(aprobadas); // → [85, 90, 78]
\`\`\`

**Diferencias clave**

| Método | Devuelve | Propósito |
|--------|----------|-----------|
| forEach() | undefined | Ejecutar una acción por elemento |
| map() | Nuevo array (misma longitud) | Transformar cada elemento |
| filter() | Nuevo array (puede ser menor) | Seleccionar elementos que cumplen condición |

**Callbacks con nombre vs inline**
\`\`\`js
// Con función nombrada
const esAprobado = (nota) => nota >= 60;
const aprobadas = notas.filter(esAprobado);

// Inline (más común en la práctica)
const aprobadas2 = notas.filter((nota) => nota >= 60);
\`\`\``,
    codeExample: `// ── main.js ──────────────────────────────────────────────────────────────

let productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: true },
  { nombre: "Teclado", precio: 80, disponible: false },
  { nombre: "Monitor", precio: 350, disponible: true },
  { nombre: "Webcam", precio: 60, disponible: false },
];

// forEach: mostrar cada producto disponible
console.log("=== Productos disponibles ===");
productos.forEach((p) => {
  if (p.disponible) {
    console.log(\`• \${p.nombre}: $\${p.precio}\`);
  }
});

// map: crear array de nombres
let nombres = productos.map((p) => p.nombre);
console.log("Nombres:", nombres);
// → ["Laptop", "Mouse", "Teclado", "Monitor", "Webcam"]

// map: aplicar descuento del 10%
let conDescuento = productos.map((p) => ({
  ...p,
  precioFinal: p.precio * 0.90,
}));
console.log("Con descuento:", conDescuento[0]);
// → { nombre: "Laptop", precio: 1200, precioFinal: 1080, ... }

// filter: solo los disponibles
let disponibles = productos.filter((p) => p.disponible);
console.log("Disponibles:", disponibles.length); // → 3

// filter: los que cuestan menos de 100
let economicos = productos.filter((p) => p.precio < 100);
console.log("Económicos:");
economicos.forEach((p) => console.log(\` - \${p.nombre}: $\${p.precio}\`));

// Combinar filter + map
let nombresDisponibles = productos
  .filter((p) => p.disponible)
  .map((p) => p.nombre);
console.log("Disponibles (nombres):", nombresDisponibles);
// → ["Laptop", "Mouse", "Monitor"]`,
    keyPoints: [
      'forEach() ejecuta un callback por cada elemento pero NO devuelve un nuevo array.',
      'map() transforma cada elemento y devuelve un NUEVO array de la misma longitud.',
      'filter() devuelve un NUEVO array solo con elementos donde el callback devuelve true.',
      'Ninguno de los tres modifica el array original.',
      'El callback de map() debe devolver el nuevo valor; el de filter() devuelve true/false.',
      'Se pueden encadenar: filter().map() para filtrar y luego transformar.',
    ],
    exercise: {
      description:
        'Tienes un array de 5 objetos estudiante con nombre, calificacion (número) y ciudad. Usa: 1) forEach() para mostrar todos los estudiantes con su calificación. 2) map() para crear un array solo con los nombres en mayúsculas. 3) filter() para obtener solo los que tienen calificación >= 7. 4) Combina filter() + map() para obtener los nombres de los estudiantes aprobados.',
      hint: 'Para mayúsculas: .map(e => e.nombre.toUpperCase()). Para combinar: arr.filter(e => e.calificacion >= 7).map(e => e.nombre).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre forEach() y map()?',
        options: [
          'forEach() es más rápido que map()',
          'map() devuelve un nuevo array; forEach() devuelve undefined',
          'forEach() transforma; map() solo itera',
          'Son exactamente iguales',
        ],
        correctAnswer: 'map() devuelve un nuevo array; forEach() devuelve undefined',
        correctFeedback:
          'Correcto. forEach() ejecuta el callback por efecto secundario y devuelve undefined. map() usa el valor devuelto por el callback para construir un nuevo array.',
        incorrectFeedback:
          'Incorrecto. La diferencia clave: map() devuelve un nuevo array con los valores transformados. forEach() devuelve undefined — solo ejecuta el callback por sus efectos.',
      },
      {
        question: 'Dado: let nums = [1, 2, 3, 4];\nlet resultado = nums.filter(n => n > 2);\n¿Qué contiene resultado?',
        options: ['[1, 2]', '[3, 4]', '[true, false, false, true]', 'undefined'],
        correctAnswer: '[3, 4]',
        correctFeedback:
          'Correcto. filter() devuelve un nuevo array con los elementos para los que el callback devuelve true. Solo 3 y 4 son > 2.',
        incorrectFeedback:
          'Incorrecto. filter() devuelve los ELEMENTOS (no los booleanos) para los que el callback retorna true. 3 y 4 son > 2, así que resultado = [3, 4].',
      },
      {
        question: '¿Qué devuelve el callback de filter() para incluir un elemento?',
        options: [
          'El elemento transformado',
          'true (para incluir) o false (para excluir)',
          'El índice del elemento',
          'undefined',
        ],
        correctAnswer: 'true (para incluir) o false (para excluir)',
        correctFeedback:
          'Correcto. El callback de filter() debe devolver un valor truthy para incluir el elemento, o falsy para excluirlo.',
        incorrectFeedback:
          'Incorrecto. El callback de filter() devuelve un booleano (o valor truthy/falsy). Si devuelve true, el elemento se incluye en el nuevo array. Si devuelve false, se excluye.',
      },
      {
        question: '¿Qué hace arr.filter(fn).map(fn2)?',
        options: [
          'Filtra el array y luego transforma los elementos que pasaron el filtro',
          'Es un error de sintaxis en JavaScript',
          'Primero transforma y luego filtra',
          'filter() y map() no se pueden encadenar',
        ],
        correctAnswer: 'Filtra el array y luego transforma los elementos que pasaron el filtro',
        correctFeedback:
          'Correcto. Como filter() y map() devuelven nuevos arrays, puedes encadenarlos: primero filtra y luego transforma los elementos resultantes.',
        incorrectFeedback:
          'Incorrecto. filter() y map() se pueden encadenar porque ambos devuelven arrays. filter() primero selecciona los elementos y map() luego transforma los seleccionados.',
      },
    ],
  },

  // ── Lección 66 ────────────────────────────────────────────────────────────
  {
    slug: 'cuando-usar-funciones-modernas',
    title: 'Cuándo usar funciones modernas',
    module: 'Funciones modernas',
    moduleNumber: 9,
    order: 66,
    description:
      'Aprende cuándo conviene usar function declarations, function expressions o arrow functions.',
    explanation: `Ahora que conoces las tres formas de definir funciones, es importante saber cuándo usar cada una. No hay una respuesta única — depende del contexto.

**Function declaration**
\`\`\`js
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}
\`\`\`
Úsala cuando:
- Es una función principal del módulo o archivo.
- Necesitas que esté disponible antes de su definición (hoisting).
- Quieres un nombre descriptivo en el stack trace para debugging.

**Function expression**
\`\`\`js
const calcularTotal = function(precio, cantidad) {
  return precio * cantidad;
};
\`\`\`
Úsala cuando:
- Quieres asignar una función a una variable de forma explícita.
- Necesitas controlar con const que la función no se reasigne.
- Estás asignando funciones dinámicamente según condiciones.

**Arrow function**
\`\`\`js
const calcularTotal = (precio, cantidad) => precio * cantidad;
\`\`\`
Úsala cuando:
- Es un callback (forEach, map, filter, etc.).
- Es una función corta de una sola línea.
- No necesitas this.

**Tabla resumen**

| Situación | Recomendación |
|-----------|---------------|
| Función principal del archivo | Declaration |
| Callback en forEach/map | Arrow function |
| Método de objeto (usa this) | Declaration o method shorthand |
| Función en una línea | Arrow function |
| Asignación condicional | Expression |
| Constructor (new) | Declaration |

**Consistencia sobre perfección**

En la práctica, lo más importante es ser consistente dentro de un proyecto. Elige un estilo y mantenlo. La mayoría del código moderno usa:
- Declarations para funciones principales.
- Arrow functions para callbacks y funciones cortas.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── Function declaration: funciones principales ───────────────────────────
function calcularDescuento(precio, porcentaje) {
  return precio * (1 - porcentaje);
}

function generarReporte(ventas) {
  let total = ventas.reduce((sum, v) => sum + v.monto, 0);
  let promedio = total / ventas.length;
  return { total, promedio, cantidad: ventas.length };
}

// ── Arrow functions: callbacks y funciones cortas ─────────────────────────
let productos = [
  { nombre: "Laptop", precio: 1200, categoria: "tech" },
  { nombre: "Camiseta", precio: 30, categoria: "ropa" },
  { nombre: "Mouse", precio: 25, categoria: "tech" },
  { nombre: "Pantalón", precio: 60, categoria: "ropa" },
];

// Arrow functions en callbacks
let soloBtech = productos.filter((p) => p.categoria === "tech");
let nombres = productos.map((p) => p.nombre);
let conDescuento = productos.map((p) => ({
  ...p,
  precioFinal: calcularDescuento(p.precio, 0.10),
}));

console.log("Tech:", soloBtech.length);    // → 2
console.log("Nombres:", nombres);
console.log("Primer precio con descuento:", conDescuento[0].precioFinal); // → 1080

// ── Method shorthand: métodos de objeto ──────────────────────────────────
let carrito = {
  items: [],
  total: 0,
  agregar(producto) {           // method shorthand (no arrow)
    this.items.push(producto);
    this.total += producto.precio;
  },
  mostrar() {
    this.items.forEach((item) => { // arrow está bien aquí (no usa this propio)
      console.log(\`• \${item.nombre}: $\${item.precio}\`);
    });
    console.log("Total:", this.total);
  },
};

carrito.agregar({ nombre: "Laptop", precio: 1200 });
carrito.agregar({ nombre: "Mouse", precio: 25 });
carrito.mostrar();`,
    keyPoints: [
      'Usa function declaration para funciones principales del archivo o módulo.',
      'Usa arrow functions para callbacks (forEach, map, filter) y funciones cortas.',
      'Usa method shorthand para métodos de objetos que necesiten this.',
      'Evita arrow functions en métodos de objetos que usan this.',
      'La consistencia en el estilo es más importante que la perfección.',
      'En proyectos modernos: declarations para lo principal, arrows para callbacks.',
    ],
    exercise: {
      description:
        'Escribe un programa que procese una lista de 4 ventas (objetos con vendedor, monto, categoria). Usa: 1) function declaration para calcularComision(venta) que devuelva el 5% del monto. 2) arrow function en un filter para obtener solo las ventas de categoría "premium". 3) arrow function en un map para crear un array de strings "Vendedor: monto". 4) method shorthand en un objeto reporte con un método mostrar() que use this. Mezcla los tipos de función según corresponda.',
      hint: 'function calcularComision(v) { return v.monto * 0.05; } es una declaration. Para el reporte: let reporte = { titulo: "...", mostrar() { ... } }.',
    },
    quiz: [
      {
        question: '¿Cuándo es preferible usar una arrow function en lugar de una function declaration?',
        options: [
          'Cuando la función tiene más de 3 parámetros',
          'Como callback en forEach, map o filter, o en funciones cortas de una línea',
          'Cuando la función necesita acceder a this del objeto',
          'Cuando la función debe ser reutilizada en varios archivos',
        ],
        correctAnswer: 'Como callback en forEach, map o filter, o en funciones cortas de una línea',
        correctFeedback:
          'Correcto. Las arrow functions brillan en callbacks y funciones cortas. Evítalas en métodos que usen this.',
        incorrectFeedback:
          'Incorrecto. Las arrow functions son ideales para callbacks (forEach, map, filter) y funciones cortas. No las uses en métodos de objetos que necesiten this.',
      },
      {
        question: '¿Qué ventaja tiene usar function declaration para funciones principales?',
        options: [
          'Son más rápidas que las arrow functions',
          'Tienen hoisting: están disponibles antes de su definición en el código',
          'No necesitan parámetros',
          'No pueden lanzar errores',
        ],
        correctAnswer: 'Tienen hoisting: están disponibles antes de su definición en el código',
        correctFeedback:
          'Correcto. El hoisting permite usar la función antes de su declaración. Esto da flexibilidad para organizar el código con las funciones principales al final.',
        incorrectFeedback:
          'Incorrecto. La ventaja principal de las declarations es el hoisting: puedes llamarlas antes de que aparezcan en el código fuente, lo que permite más flexibilidad en la organización.',
      },
      {
        question: '¿Por qué no deberías usar una arrow function como método de objeto que usa this?',
        options: [
          'Porque arrow functions son más lentas en objetos',
          'Porque las arrow functions no tienen su propio this y no apuntarán al objeto',
          'Porque los objetos no aceptan arrow functions',
          'Porque causaría un error de sintaxis',
        ],
        correctAnswer: 'Porque las arrow functions no tienen su propio this y no apuntarán al objeto',
        correctFeedback:
          'Correcto. Las arrow functions heredan el this del contexto exterior, no del objeto donde están definidas. Esto hace que this.propiedad no funcione como se espera.',
        incorrectFeedback:
          'Incorrecto. Las arrow functions no tienen su propio this — heredan el del scope donde fueron creadas. En un método que necesite this para acceder a propiedades del objeto, usa function normal o method shorthand.',
      },
    ],
  },
]

export const jsModule9: Module = {
  number: 9,
  title: 'Funciones modernas',
  level: 'nivel2',
  lessons: lessonsJsModule9,
}
