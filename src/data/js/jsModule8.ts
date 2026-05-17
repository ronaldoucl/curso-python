import type { Lesson, Module } from '@/types'

export const lessonsJsModule8: Lesson[] = [
  // ── Lección 52 ────────────────────────────────────────────────────────────
  {
    slug: 'repaso-funciones-js',
    title: 'Repaso: ¿Qué es una función?',
    module: 'Funciones',
    moduleNumber: 8,
    order: 52,
    description:
      'Refuerza qué es una función y por qué ayuda a organizar, reutilizar y simplificar el código.',
    explanation: `Una **función** es un bloque de código con nombre que realiza una tarea específica. Las funciones son el bloque de construcción más importante de cualquier programa bien organizado.

**¿Para qué sirven las funciones?**

1. **Reutilización:** escribe una vez, usa muchas veces.
2. **Organización:** divides un problema grande en partes pequeñas.
3. **Legibilidad:** \`calcularDescuento(precio)\` es más claro que 5 líneas repetidas.
4. **Mantenimiento:** cambias la lógica en un solo lugar.

**Sintaxis básica (function declaration)**
\`\`\`js
function nombreFuncion(parametro1, parametro2) {
  // cuerpo: lo que hace la función
  return resultado; // (opcional)
}
\`\`\`

**Llamar (ejecutar) una función**
\`\`\`js
nombreFuncion(argumento1, argumento2);
\`\`\`

**La diferencia entre declarar y llamar:**
\`\`\`js
// Declarar: define qué hace la función (no la ejecuta)
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

// Llamar: la ejecuta con un valor concreto
saludar("Ana");    // → Hola, Ana
saludar("Carlos"); // → Hola, Carlos
\`\`\`

**Funciones con y sin return:**
\`\`\`js
// Sin return: solo hace algo (efecto secundario)
function mostrarMensaje(texto) {
  console.log(texto);
}

// Con return: devuelve un valor para usar después
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(3, 4); // 7
\`\`\`

**Cuándo crear una función:**
- Cuando escribes el mismo código más de una vez.
- Cuando un bloque de código hace una sola tarea bien definida.
- Cuando el código tiene más de 5-10 líneas y se puede separar en pasos.`,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

// Función sin parámetros ni return
function mostrarSeparador() {
  console.log("─────────────────────────────");
}

// Función con parámetros
function saludarEstudiante(nombre, materia) {
  console.log(\`Bienvenido, \${nombre}. Hoy vemos: \${materia}\`);
}

// Función con return
function calcularPromedio(nota1, nota2, nota3) {
  let suma = nota1 + nota2 + nota3;
  return suma / 3;
}

// Usar las funciones
mostrarSeparador();
saludarEstudiante("Ana", "JavaScript");
mostrarSeparador();

let promedio = calcularPromedio(85, 90, 78);
console.log("Promedio:", promedio.toFixed(1));

// Reutilización: llamamos la misma función con datos distintos
let p1 = calcularPromedio(70, 65, 80);
let p2 = calcularPromedio(95, 88, 92);
let p3 = calcularPromedio(60, 72, 68);

mostrarSeparador();
console.log("Estudiante 1:", p1.toFixed(1));
console.log("Estudiante 2:", p2.toFixed(1));
console.log("Estudiante 3:", p3.toFixed(1));`,
    keyPoints: [
      'Una función es un bloque de código con nombre que realiza una tarea específica.',
      'Declarar define la función; llamar la ejecuta. Son dos pasos distintos.',
      'Los parámetros son los nombres que la función usa internamente para recibir datos.',
      'Los argumentos son los valores reales que pasas al llamar la función.',
      'return devuelve un valor; sin return la función devuelve undefined.',
      'Una función bien diseñada hace una sola cosa y lo hace bien.',
    ],
    exercise: {
      description:
        'Crea tres funciones: 1) bienvenida(nombre) que muestre "¡Hola, [nombre]! Bienvenido al curso de JavaScript.". 2) calcularAreaCirculo(radio) que devuelva el área (Math.PI * radio * radio). 3) mostrarResultado(nombre, valor) que muestre "Resultado de [nombre]: [valor]". Llama cada una al menos 2 veces con valores distintos.',
      hint: 'Para Math.PI: es una constante de JavaScript. Para mostrarResultado: pasa el nombre de la operación y el resultado como argumentos.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre declarar y llamar una función?',
        options: [
          'Son lo mismo, ambos ejecutan la función',
          'Declarar define la función; llamar la ejecuta',
          'Declarar ejecuta la función; llamar la define',
          'Solo se puede llamar una función si se declaró antes en el mismo archivo',
        ],
        correctAnswer: 'Declarar define la función; llamar la ejecuta',
        correctFeedback:
          'Correcto. function miFuncion() {} la declara (define qué hace). miFuncion() la llama (la ejecuta). Son pasos distintos.',
        incorrectFeedback:
          'Incorrecto. Declarar (function miFuncion() {}) solo define qué va a hacer la función. Llamar (miFuncion()) la ejecuta realmente.',
      },
      {
        question: '¿Qué son los "parámetros" de una función?',
        options: [
          'Los valores que se le pasan al llamar la función',
          'Los nombres que la función usa internamente para recibir datos',
          'El resultado que devuelve la función',
          'El nombre de la función',
        ],
        correctAnswer: 'Los nombres que la función usa internamente para recibir datos',
        correctFeedback:
          'Correcto. En function sumar(a, b), a y b son parámetros. Los valores reales (argumentos) se pasan al llamar: sumar(3, 4).',
        incorrectFeedback:
          'Incorrecto. Los parámetros son los nombres en la declaración (function sumar(a, b): a y b). Los argumentos son los valores al llamar (sumar(3, 4): 3 y 4).',
      },
      {
        question: '¿Qué devuelve una función que no tiene return?',
        options: ['null', '0', 'undefined', 'Error'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. Si una función no tiene return (o tiene return sin valor), devuelve undefined automáticamente.',
        incorrectFeedback:
          'Incorrecto. Una función sin return devuelve undefined automáticamente. Esto significa que si intentas guardar su resultado en una variable, esa variable valdrá undefined.',
      },
      {
        question: '¿Cuándo tiene sentido convertir un bloque de código en una función?',
        options: [
          'Solo cuando el código tiene más de 100 líneas',
          'Cuando el mismo código se repite más de una vez o realiza una tarea bien definida',
          'Nunca, es mejor repetir el código',
          'Solo cuando el código usa arrays u objetos',
        ],
        correctAnswer: 'Cuando el mismo código se repite más de una vez o realiza una tarea bien definida',
        correctFeedback:
          'Correcto. Dos buenas razones para crear una función: el código se repite, o el código hace una tarea específica que vale la pena nombrar.',
        incorrectFeedback:
          'Incorrecto. Debes crear funciones cuando el código se repite (evitar duplicación) o cuando realiza una tarea bien definida que merece un nombre descriptivo. No tiene que ver con la longitud del código.',
      },
    ],
  },

  // ── Lección 53 ────────────────────────────────────────────────────────────
  {
    slug: 'parametros-argumentos-profundidad',
    title: 'Parámetros y argumentos en profundidad',
    module: 'Funciones',
    moduleNumber: 8,
    order: 53,
    description:
      'Aprende con más detalle cómo las funciones reciben información y cómo usar parámetros correctamente.',
    explanation: `Los **parámetros** son los nombres que defines en la función para recibir datos. Los **argumentos** son los valores reales que le pasas al llamarla. Entender bien esta diferencia evita muchos errores.

**Más parámetros que argumentos: undefined**
\`\`\`js
function saludar(nombre, ciudad) {
  console.log(\`Hola \${nombre} de \${ciudad}\`);
}
saludar("Ana"); // nombre = "Ana", ciudad = undefined
// → "Hola Ana de undefined"
\`\`\`

**Más argumentos que parámetros: se ignoran**
\`\`\`js
function sumar(a, b) {
  return a + b;
}
sumar(1, 2, 99, 100); // 99 y 100 se ignoran
// → 3
\`\`\`

**Parámetros por defecto (default parameters)**
\`\`\`js
function saludar(nombre, saludo = "Hola") {
  console.log(\`\${saludo}, \${nombre}!\`);
}
saludar("Ana");         // → "Hola, Ana!"  (usa el default)
saludar("Ana", "Hey"); // → "Hey, Ana!"   (usa el argumento)
\`\`\`

**Orden importa**

Los argumentos se asignan en orden: el primero al primer parámetro, etc.
\`\`\`js
function presentar(nombre, edad, ciudad) {
  console.log(\`\${nombre}, \${edad} años, vive en \${ciudad}\`);
}
presentar("Ana", 20, "Madrid"); // orden correcto
presentar("Madrid", 20, "Ana"); // ⚠️ datos confundidos
\`\`\`

**Pasar objetos como parámetros**

Pasar un objeto es una buena práctica cuando hay muchos datos:
\`\`\`js
function mostrarUsuario(usuario) {
  console.log(\`\${usuario.nombre} (\${usuario.edad})\`);
}
mostrarUsuario({ nombre: "Ana", edad: 20, ciudad: "Madrid" });
\`\`\`

**Buena práctica: parámetros con nombres claros**

Prefiere parámetros descriptivos: \`calcularTotal(precio, cantidad)\` en lugar de \`calcularTotal(a, b)\`.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Parámetros y argumentos básicos
function crearEtiqueta(producto, precio, moneda) {
  return \`\${producto}: \${moneda}\${precio}\`;
}

console.log(crearEtiqueta("Laptop", 1200, "$"));    // → "Laptop: $1200"
console.log(crearEtiqueta("Auriculares", 80, "€")); // → "Auriculares: €80"

// Parámetro faltante → undefined
console.log(crearEtiqueta("Mouse", 25)); // → "Mouse: undefined25"

// Parámetros por defecto
function crearEtiqueta2(producto, precio, moneda = "$") {
  return \`\${producto}: \${moneda}\${precio}\`;
}

console.log(crearEtiqueta2("Mouse", 25));        // → "Mouse: $25" (usa default)
console.log(crearEtiqueta2("Laptop", 1200, "€")); // → "Laptop: €1200" (usa argumento)

// Pasar objeto como parámetro
function mostrarProducto(producto) {
  console.log(\`[\${producto.id}] \${producto.nombre} — $\${producto.precio}\`);
}

mostrarProducto({ id: 1, nombre: "Teclado", precio: 80 });
mostrarProducto({ id: 2, nombre: "Monitor", precio: 350, disponible: true });

// Pasar array como parámetro
function calcularPromedioArray(notas) {
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

let notasAna = [85, 90, 78, 92];
let notasCarlos = [70, 65, 80];
console.log("Promedio Ana:", calcularPromedioArray(notasAna).toFixed(2));
console.log("Promedio Carlos:", calcularPromedioArray(notasCarlos).toFixed(2));`,
    keyPoints: [
      'Parámetros: nombres en la declaración. Argumentos: valores al llamar.',
      'Si faltan argumentos, los parámetros sin valor valen undefined.',
      'Los argumentos extra se ignoran silenciosamente.',
      'Los parámetros por defecto (= valor) evitan undefined cuando falta un argumento.',
      'El orden de los argumentos importa: se asignan en el mismo orden que los parámetros.',
      'Pasar objetos o arrays como parámetros es una práctica común y muy útil.',
    ],
    exercise: {
      description:
        'Crea una función generarReporte(titulo, datos, formato = "texto") donde: si formato es "texto", muestra el titulo y los datos como lista con console.log. Si formato es "resumen", muestra solo el titulo y cuántos items hay. Pruébala: 1) sin pasar formato (usa el default), 2) pasando "resumen" como formato. Los datos deben ser un array de strings.',
      hint: 'Dentro de la función: if (formato === "texto") { for (let item of datos) { ... } } else if (formato === "resumen") { ... }.',
    },
    quiz: [
      {
        question: '¿Qué valor tiene un parámetro si no se le pasa ningún argumento?',
        options: ['null', '0', 'undefined', 'Lanza un error'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. Si no pasas un argumento para un parámetro, JavaScript le asigna undefined automáticamente (a menos que tenga un valor por defecto).',
        incorrectFeedback:
          'Incorrecto. JavaScript no lanza error cuando faltan argumentos. El parámetro recibe undefined. Puedes evitarlo con parámetros por defecto: function f(x = 0).',
      },
      {
        question: '¿Cuál es la sintaxis correcta para un parámetro con valor por defecto?',
        options: [
          'function f(x || 10)',
          'function f(x ?? 10)',
          'function f(x = 10)',
          'function f(default x = 10)',
        ],
        correctAnswer: 'function f(x = 10)',
        correctFeedback:
          'Correcto. La sintaxis es parámetro = valorPorDefecto directamente en la lista de parámetros.',
        incorrectFeedback:
          'Incorrecto. La sintaxis correcta es function f(x = 10). El valor por defecto se pone con = en la declaración de la función.',
      },
      {
        question: 'Dado: function suma(a, b) { return a + b; }\nsumar(5, 3, 100, 200);\n¿Cuál es el resultado?',
        options: ['308', '8', 'Error', 'undefined'],
        correctAnswer: '8',
        correctFeedback:
          'Correcto. La función solo usa a y b. Los argumentos extras (100, 200) se ignoran. 5 + 3 = 8.',
        incorrectFeedback:
          'Incorrecto. JavaScript no lanza error si pasas más argumentos de los que la función espera. Los extras simplemente se ignoran. suma(5, 3, 100, 200) = 5 + 3 = 8.',
      },
      {
        question: '¿Cuál es la ventaja de pasar un objeto como parámetro en lugar de múltiples parámetros?',
        options: [
          'Los objetos son más rápidos que múltiples parámetros',
          'El orden no importa y es más fácil agregar datos opcionales',
          'Es obligatorio en JavaScript moderno',
          'Solo funciona con arrow functions',
        ],
        correctAnswer: 'El orden no importa y es más fácil agregar datos opcionales',
        correctFeedback:
          'Correcto. Con un objeto puedes agregar o quitar propiedades sin cambiar la firma de la función y sin preocuparte por el orden.',
        incorrectFeedback:
          'Incorrecto. La ventaja real es flexibilidad: el orden de las propiedades del objeto no importa, y puedes agregar nuevas propiedades sin romper las llamadas existentes.',
      },
    ],
  },

  // ── Lección 54 ────────────────────────────────────────────────────────────
  {
    slug: 'return-en-profundidad',
    title: 'Return en profundidad',
    module: 'Funciones',
    moduleNumber: 8,
    order: 54,
    description:
      'Aprende cómo return devuelve valores, detiene la función y permite reutilizar resultados.',
    explanation: `\`return\` es una de las instrucciones más importantes en las funciones. Tiene dos efectos simultáneos: **detiene la ejecución** de la función y **devuelve un valor** al código que la llamó.

**return básico**
\`\`\`js
function sumar(a, b) {
  return a + b; // detiene la función y devuelve el resultado
  console.log("esto nunca se ejecuta"); // código muerto
}
let resultado = sumar(3, 4); // resultado = 7
\`\`\`

**Return vs console.log — la confusión más común**
\`\`\`js
function conLog(x) {
  console.log(x * 2); // muestra en consola, no devuelve
}
function conReturn(x) {
  return x * 2; // devuelve el valor
}

let a = conLog(5);   // imprime 10, pero a = undefined
let b = conReturn(5); // b = 10, puedes usarlo después
console.log(b + 1);  // → 11 (¡funciona porque b tiene valor!)
console.log(a + 1);  // → NaN (a es undefined)
\`\`\`

**Return temprano (early return)**

Una forma de evitar if/else anidados:
\`\`\`js
function obtenerDescuento(puntos) {
  if (puntos < 0) return 0;           // caso inválido
  if (puntos < 100) return 0.05;      // 5%
  if (puntos < 500) return 0.10;      // 10%
  return 0.20;                         // 20% (500+)
}
\`\`\`

**Return devuelve cualquier tipo**
\`\`\`js
function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad,
    activo: true,
  };
}
let usuario = crearUsuario("Ana", 20);
console.log(usuario.nombre); // → "Ana"
\`\`\`

**Múltiples return en una función**

Una función puede tener varios return pero solo ejecuta el primero que alcanza:
\`\`\`js
function clasificar(nota) {
  if (nota >= 90) return "Excelente";
  if (nota >= 70) return "Bueno";
  if (nota >= 50) return "Regular";
  return "Insuficiente";
}
\`\`\``,
    codeExample: `// ── main.js ──────────────────────────────────────────────────────────────

// return vs console.log
function calcularIVA(precio) {
  return precio * 0.16; // devuelve el valor
}

let precioBase = 500;
let iva = calcularIVA(precioBase);
let total = precioBase + iva;
console.log("IVA:", iva);     // → 80
console.log("Total:", total); // → 580

// sin return, no puedes usar el resultado
function mostrarIVA(precio) {
  console.log("IVA:", precio * 0.16); // solo muestra
}
let resultado = mostrarIVA(500); // imprime "IVA: 80"
console.log(resultado);          // → undefined ❌

// early return para limpiar código
function validarEdad(edad) {
  if (typeof edad !== "number") return "Error: debe ser número";
  if (edad < 0) return "Error: edad negativa";
  if (edad < 18) return "Menor de edad";
  return "Mayor de edad";
}

console.log(validarEdad(25));   // → "Mayor de edad"
console.log(validarEdad(15));   // → "Menor de edad"
console.log(validarEdad(-5));   // → "Error: edad negativa"
console.log(validarEdad("abc")); // → "Error: debe ser número"

// return de un objeto
function crearProducto(nombre, precio, stock = 0) {
  return {
    nombre,
    precio,
    stock,
    disponible: stock > 0,
  };
}

let laptop = crearProducto("Laptop", 1200, 5);
let agotado = crearProducto("Mouse");
console.log(laptop);  // → { nombre: "Laptop", precio: 1200, stock: 5, disponible: true }
console.log(agotado); // → { nombre: "Mouse", precio: undefined, stock: 0, disponible: false }`,
    keyPoints: [
      'return detiene la función inmediatamente y devuelve un valor al código que la llamó.',
      'El código escrito después de return nunca se ejecuta (código muerto).',
      'console.log() muestra algo en pantalla pero NO devuelve un valor útil.',
      'Una función sin return devuelve undefined — guardar su resultado en una variable dará undefined.',
      'El early return es una técnica para manejar casos especiales al inicio y evitar if/else anidados.',
      'return puede devolver cualquier tipo: número, string, booleano, objeto, array.',
    ],
    exercise: {
      description:
        'Crea una función calcularDescuento(precio, tipo) donde tipo puede ser "estudiante" (20%), "empleado" (15%), o "normal" (0%). La función debe devolver el precio final con descuento. Usa early return para cada tipo. Luego llama la función 3 veces con tipos distintos, guarda los resultados y muéstralos.',
      hint: 'if (tipo === "estudiante") return precio * 0.80. Si no coincide ningún tipo, return precio al final.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre return y console.log()?',
        options: [
          'No hay diferencia, ambos muestran el valor',
          'return devuelve un valor para usar fuera; console.log() solo muestra en pantalla',
          'console.log() es más moderno que return',
          'return solo funciona dentro de bucles',
        ],
        correctAnswer: 'return devuelve un valor para usar fuera; console.log() solo muestra en pantalla',
        correctFeedback:
          'Correcto. return le da el valor al código que llamó la función. console.log() solo lo imprime — el resultado no queda disponible para usar.',
        incorrectFeedback:
          'Incorrecto. La diferencia es crítica: return hace que el valor esté disponible para quien llamó la función. console.log() solo lo muestra visualmente — el valor "desaparece" después.',
      },
      {
        question: '¿Qué pasa con el código escrito después de un return?',
        options: [
          'Se ejecuta normalmente',
          'Se ejecuta solo si return devuelve null',
          'Nunca se ejecuta',
          'Depende del tipo de dato devuelto',
        ],
        correctAnswer: 'Nunca se ejecuta',
        correctFeedback:
          'Correcto. Return detiene la función inmediatamente. Cualquier código después de return es código muerto: nunca se ejecuta.',
        incorrectFeedback:
          'Incorrecto. Return detiene la función en ese punto. El código que viene después de return es código muerto — nunca se ejecuta sin importar qué devuelva el return.',
      },
      {
        question: 'Dado:\nfunction f() { console.log("Hola"); }\nlet x = f();\nconsole.log(x);\n¿Qué imprime la segunda línea?',
        options: ['"Hola"', 'undefined', 'null', 'Error'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. f() no tiene return, así que devuelve undefined. x = undefined, y console.log(x) imprime undefined.',
        incorrectFeedback:
          'Incorrecto. f() no tiene return, así que devuelve undefined automáticamente. x valdrá undefined, y la segunda línea imprimirá undefined.',
      },
      {
        question: '¿Qué es el "early return"?',
        options: [
          'Devolver el valor antes de calcular nada',
          'Usar return al inicio de una función para manejar casos especiales y evitar anidación',
          'Un error en el código que causa que return no funcione',
          'Devolver una función desde otra función',
        ],
        correctAnswer: 'Usar return al inicio de una función para manejar casos especiales y evitar anidación',
        correctFeedback:
          'Correcto. El early return maneja los casos de error o especiales al inicio y sale temprano, haciendo el código principal más limpio.',
        incorrectFeedback:
          'Incorrecto. El early return es una técnica de diseño: validas casos especiales (datos inválidos, valores extremos) al inicio de la función con return inmediato, evitando if/else profundamente anidados.',
      },
    ],
  },

  // ── Lección 55 ────────────────────────────────────────────────────────────
  {
    slug: 'scope-dentro-funciones',
    title: 'Scope dentro de funciones',
    module: 'Funciones',
    moduleNumber: 8,
    order: 55,
    description:
      'Aprende cómo funcionan las variables dentro y fuera de una función.',
    explanation: `El **scope** (ámbito) determina desde dónde se puede acceder a una variable. En JavaScript, las funciones crean su propio scope.

**Variables locales (dentro de la función)**

Solo existen dentro de la función donde se declaran:
\`\`\`js
function calcularTotal() {
  let subtotal = 100; // variable local
  let iva = 16;
  return subtotal + iva;
}
console.log(subtotal); // ReferenceError: subtotal is not defined
\`\`\`

**Variables globales (fuera de todas las funciones)**

Accesibles desde cualquier parte:
\`\`\`js
let TASA_IVA = 0.16; // global

function calcularImpuesto(precio) {
  return precio * TASA_IVA; // puede acceder a la global
}
\`\`\`

**Una función puede leer variables globales, pero no es buena práctica depender de ellas para valores que cambian.**

**El scope protege las variables**
\`\`\`js
function operacionA() {
  let contador = 0;
  contador++;
  return contador;
}

function operacionB() {
  let contador = 0; // es OTRA variable, no la misma
  contador += 10;
  return contador;
}

console.log(operacionA()); // → 1
console.log(operacionB()); // → 10
// No hay conflicto entre los dos "contador"
\`\`\`

**Variables definidas en bucles y bloques**

let y const tienen scope de bloque (dentro de {} también):
\`\`\`js
for (let i = 0; i < 3; i++) {
  let temp = i * 2;
}
console.log(i);    // ReferenceError
console.log(temp); // ReferenceError
\`\`\`

**Buena práctica:** prefer let y const sobre var. var tiene comportamiento extraño con scope de función y hoisting que puede causar bugs difíciles de encontrar.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── Variable global ───────────────────────────────────────────────────────
const DESCUENTO_VIP = 0.20;
const DESCUENTO_NORMAL = 0.05;

// ── Variables locales: cada función tiene las suyas ───────────────────────
function calcularPrecioVIP(precio) {
  let descuento = precio * DESCUENTO_VIP; // local
  let precioFinal = precio - descuento;   // local
  return precioFinal;
}

function calcularPrecioNormal(precio) {
  let descuento = precio * DESCUENTO_NORMAL; // OTRA variable local llamada igual
  let precioFinal = precio - descuento;       // también es otra variable local
  return precioFinal;
}

console.log(calcularPrecioVIP(1000));    // → 800
console.log(calcularPrecioNormal(1000)); // → 950
// Los "descuento" de cada función son independientes: no se pisan

// ── Las variables locales no existen fuera ────────────────────────────────
function prepararInforme() {
  let titulo = "Informe de ventas 2024"; // local
  let total = 0;
  let items = ["Laptop", "Mouse"];
  // puedes usar titulo, total, items aquí
  return { titulo, total, items };
}

let informe = prepararInforme();
// console.log(titulo); // ❌ ReferenceError: titulo is not defined

// ── scope de bloque con let ───────────────────────────────────────────────
function procesarLista(precios) {
  let suma = 0;

  for (let i = 0; i < precios.length; i++) {
    let precio = precios[i]; // precio solo existe dentro del for
    suma += precio;
  }

  // console.log(precio); // ❌ ReferenceError: precio is not defined
  return suma;
}

console.log(procesarLista([100, 200, 50])); // → 350`,
    keyPoints: [
      'Scope determina desde dónde se puede acceder a una variable.',
      'Las variables declaradas dentro de una función son locales: no existen fuera.',
      'Las variables globales (fuera de funciones) son accesibles desde cualquier lugar.',
      'Dos funciones pueden tener variables con el mismo nombre sin conflicto.',
      'let y const tienen scope de bloque ({}).',
      'Depender de variables globales que cambian hace el código difícil de mantener.',
    ],
    exercise: {
      description:
        'Crea dos funciones: contarAprobados(estudiantes) y contarReprobados(estudiantes), ambas reciben un array de objetos con propiedad aprobado (booleano). Cada función tiene su propia variable local contador. Prueba que si cambias el contador en una función no afecta el contador de la otra. Al final muestra cuántos aprobados y cuántos reprobados hay.',
      hint: 'let contador = 0 dentro de cada función es independiente. Usa for...of y si el estudiante.aprobado es true, incrementa el contador.',
    },
    quiz: [
      {
        question: '¿Qué es una variable local en JavaScript?',
        options: [
          'Una variable que solo puede guardar números pequeños',
          'Una variable declarada dentro de una función, accesible solo dentro de ella',
          'Una variable que se guarda en la memoria del navegador',
          'Una variable definida en el HTML',
        ],
        correctAnswer: 'Una variable declarada dentro de una función, accesible solo dentro de ella',
        correctFeedback:
          'Correcto. Una variable local solo existe dentro del bloque {} donde se declara. Fuera de ese bloque lanza ReferenceError.',
        incorrectFeedback:
          'Incorrecto. Una variable local es la que se declara dentro de una función (con let o const). Solo se puede usar dentro de esa función; fuera no existe.',
      },
      {
        question: 'Dado:\nfunction f() { let x = 5; }\nf();\nconsole.log(x);\n¿Qué pasa?',
        options: [
          'Imprime 5',
          'Imprime undefined',
          'ReferenceError: x is not defined',
          'Imprime null',
        ],
        correctAnswer: 'ReferenceError: x is not defined',
        correctFeedback:
          'Correcto. x es local a la función f(). Fuera de f(), x no existe y JavaScript lanza un ReferenceError.',
        incorrectFeedback:
          'Incorrecto. x se declara dentro de f() con let, por lo que es local. Fuera de la función, x no existe y JavaScript lanza ReferenceError: x is not defined.',
      },
      {
        question: '¿Dos funciones pueden tener variables locales con el mismo nombre?',
        options: [
          'No, lanzaría un error de nombre duplicado',
          'Sí, cada función tiene su propio scope y no hay conflicto',
          'Solo si una de ellas es global',
          'Solo en modo estricto',
        ],
        correctAnswer: 'Sí, cada función tiene su propio scope y no hay conflicto',
        correctFeedback:
          'Correcto. Cada función tiene su propio scope independiente. let contador en funcionA y let contador en funcionB son variables completamente distintas.',
        incorrectFeedback:
          'Incorrecto. Las funciones tienen scope independiente. Si funcionA y funcionB ambas declaran let contador, son variables distintas que viven en espacios de memoria separados.',
      },
      {
        question: '¿Por qué es mala práctica depender de variables globales que cambian dentro de funciones?',
        options: [
          'Porque las variables globales no existen en JavaScript',
          'Porque hace el código difícil de entender y probar — la función depende de estado externo',
          'Porque JavaScript prohíbe acceder a variables globales',
          'Porque las variables globales se borran al cerrar el navegador',
        ],
        correctAnswer: 'Porque hace el código difícil de entender y probar — la función depende de estado externo',
        correctFeedback:
          'Correcto. Una función que depende de variables globales que cambian es impredecible: su resultado depende de quién más modificó esa variable global antes.',
        incorrectFeedback:
          'Incorrecto. Las variables globales que cambian crean dependencias ocultas: la función parece independiente pero su comportamiento cambia según el estado global. Esto hace el código frágil y difícil de probar.',
      },
    ],
  },

  // ── Lección 56 ────────────────────────────────────────────────────────────
  {
    slug: 'funciones-reciben-arrays',
    title: 'Funciones que reciben arrays',
    module: 'Funciones',
    moduleNumber: 8,
    order: 56,
    description:
      'Aprende a crear funciones que procesan listas de datos.',
    explanation: `Pasar arrays a funciones es muy común. La función recibe el array como parámetro y puede recorrerlo, calcular valores o devolver un nuevo resultado.

**Pasar un array como parámetro**
\`\`\`js
function mostrarLista(items) {
  for (let item of items) {
    console.log("•", item);
  }
}

mostrarLista(["Laptop", "Mouse", "Teclado"]);
\`\`\`

**Funciones que calculan sobre arrays**
\`\`\`js
function calcularTotal(precios) {
  let total = 0;
  for (let precio of precios) {
    total += precio;
  }
  return total;
}

let resultado = calcularTotal([100, 200, 50, 75]);
console.log("Total:", resultado); // → 425
\`\`\`

**Funciones que devuelven arrays**
\`\`\`js
function obtenerAprobados(notas) {
  let aprobados = [];
  for (let nota of notas) {
    if (nota >= 60) {
      aprobados.push(nota);
    }
  }
  return aprobados;
}

let todasLasNotas = [85, 45, 90, 55, 78];
let aprobadas = obtenerAprobados(todasLasNotas);
console.log(aprobadas); // → [85, 90, 78]
\`\`\`

**Cuidado: los arrays se pasan por referencia**
\`\`\`js
function agregarCero(lista) {
  lista.push(0); // modifica el array ORIGINAL
}

let numeros = [1, 2, 3];
agregarCero(numeros);
console.log(numeros); // → [1, 2, 3, 0] ← cambió el original
\`\`\`

Si no quieres modificar el original, trabaja con una copia dentro de la función:
\`\`\`js
function agregarCeroSeguro(lista) {
  let copia = [...lista];
  copia.push(0);
  return copia;
}
\`\`\``,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

// Funciones que procesan arrays de números
function calcularPromedio(valores) {
  if (valores.length === 0) return 0;
  let suma = 0;
  for (let v of valores) {
    suma += v;
  }
  return suma / valores.length;
}

function encontrarMaximo(valores) {
  if (valores.length === 0) return null;
  let max = valores[0];
  for (let v of valores) {
    if (v > max) max = v;
  }
  return max;
}

let ventas = [1200, 850, 2100, 950, 1750, 600];
console.log("Promedio:", calcularPromedio(ventas).toFixed(2)); // → 1241.67
console.log("Máximo:", encontrarMaximo(ventas));               // → 2100

// Función que procesa array de objetos
function totalCarrito(items) {
  let total = 0;
  for (let item of items) {
    total += item.precio * item.cantidad;
  }
  return total;
}

let carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 80, cantidad: 1 },
];

console.log("Total carrito: $" + totalCarrito(carrito)); // → $1330

// Función que devuelve nuevo array
function filtrarPorPrecio(productos, maximo) {
  let resultado = [];
  for (let p of productos) {
    if (p.precio <= maximo) {
      resultado.push(p);
    }
  }
  return resultado;
}

let economicos = filtrarPorPrecio(carrito, 100);
console.log("Económicos:");
for (let p of economicos) {
  console.log(" -", p.nombre, "$" + p.precio);
}`,
    keyPoints: [
      'Los arrays se pasan como cualquier otro parámetro a las funciones.',
      'Las funciones pueden recorrer, calcular o filtrar el array recibido.',
      'Las funciones también pueden devolver arrays con return.',
      'Los arrays se pasan por referencia: modificarlos dentro cambia el original.',
      'Para no mutar el original, trabaja con una copia: let copia = [...array].',
      'Es buena práctica verificar si el array está vacío antes de procesarlo.',
    ],
    exercise: {
      description:
        'Crea tres funciones: 1) sumarNotas(notas): recibe array de números y devuelve la suma. 2) contarAprobados(notas, minimo = 60): recibe array y devuelve cuántos valores son >= minimo. 3) obtenerEtiquetas(notas): recibe array de números y devuelve un array de strings con "Aprobado" o "Reprobado" según cada nota >= 60. Prueba las tres con el mismo array de notas.',
      hint: 'Para obtenerEtiquetas: let etiquetas = []; for (let n of notas) { etiquetas.push(n >= 60 ? "Aprobado" : "Reprobado"); } return etiquetas;',
    },
    quiz: [
      {
        question: 'Dado:\nfunction agregar(lista) { lista.push(99); }\nlet arr = [1, 2];\nagregar(arr);\nconsole.log(arr);\n¿Qué imprime?',
        options: ['[1, 2]', '[1, 2, 99]', 'Error', 'undefined'],
        correctAnswer: '[1, 2, 99]',
        correctFeedback:
          'Correcto. Los arrays se pasan por referencia. La función modifica el array original, por lo que arr queda como [1, 2, 99].',
        incorrectFeedback:
          'Incorrecto. Los arrays se pasan por referencia, no por copia. La función agregar() modifica el array original arr directamente, así que el resultado es [1, 2, 99].',
      },
      {
        question: '¿Cómo evitas que una función modifique el array original?',
        options: [
          'No es posible evitarlo',
          'Usar let copia = [...array] dentro de la función y trabajar con la copia',
          'Marcar el array como const antes de pasarlo',
          'Pasar el length del array en lugar del array',
        ],
        correctAnswer: 'Usar let copia = [...array] dentro de la función y trabajar con la copia',
        correctFeedback:
          'Correcto. El spread operator crea una copia superficial. Modificar la copia no afecta el array original.',
        incorrectFeedback:
          'Incorrecto. const no previene modificaciones al contenido del array. La solución es crear una copia con spread: let copia = [...parametro], y trabajar solo con la copia.',
      },
      {
        question: '¿Puede una función devolver un array?',
        options: [
          'No, solo puede devolver números o strings',
          'Sí, return puede devolver cualquier tipo de valor, incluyendo arrays',
          'Solo si el array tiene menos de 10 elementos',
          'Solo con arrow functions',
        ],
        correctAnswer: 'Sí, return puede devolver cualquier tipo de valor, incluyendo arrays',
        correctFeedback:
          'Correcto. return puede devolver arrays, objetos, funciones, o cualquier otro tipo de dato.',
        incorrectFeedback:
          'Incorrecto. return puede devolver cualquier tipo: número, string, booleano, array, objeto. Esta flexibilidad es muy útil para funciones que filtran o transforman listas.',
      },
    ],
  },

  // ── Lección 57 ────────────────────────────────────────────────────────────
  {
    slug: 'funciones-reciben-objetos',
    title: 'Funciones que reciben objetos',
    module: 'Funciones',
    moduleNumber: 8,
    order: 57,
    description:
      'Aprende a crear funciones que trabajan con objetos y sus propiedades.',
    explanation: `Pasar objetos a funciones es una de las prácticas más comunes en JavaScript. Permite que la función acceda a múltiples datos relacionados a través de un solo parámetro.

**Función que recibe un objeto**
\`\`\`js
function mostrarProducto(producto) {
  console.log(\`\${producto.nombre}: $\${producto.precio}\`);
}

mostrarProducto({ nombre: "Laptop", precio: 1200 });
\`\`\`

**Destructuring en parámetros (extracción directa)**

Es una forma más limpia de extraer propiedades del objeto directamente en los parámetros:
\`\`\`js
function mostrarProducto({ nombre, precio }) {
  console.log(\`\${nombre}: $\${precio}\`);
}
\`\`\`

Esto es equivalente a:
\`\`\`js
function mostrarProducto(producto) {
  let nombre = producto.nombre;
  let precio = producto.precio;
  console.log(\`\${nombre}: $\${precio}\`);
}
\`\`\`

**Los objetos también se pasan por referencia**
\`\`\`js
function activarUsuario(usuario) {
  usuario.activo = true; // modifica el objeto original
}

let user = { nombre: "Ana", activo: false };
activarUsuario(user);
console.log(user.activo); // → true (¡cambió!)
\`\`\`

**Para no mutar el original, devuelve un nuevo objeto:**
\`\`\`js
function activarUsuario(usuario) {
  return { ...usuario, activo: true }; // crea un nuevo objeto
}
let usuarioActivado = activarUsuario(user);
console.log(user.activo);           // → false (intacto)
console.log(usuarioActivado.activo); // → true
\`\`\`

**Funciones que devuelven objetos**
\`\`\`js
function crearEstudiante(nombre, promedio) {
  return {
    nombre,
    promedio,
    aprobado: promedio >= 6,
    nivel: promedio >= 8 ? "avanzado" : "básico",
  };
}
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Función que recibe un objeto completo
function calcularPrecioFinal(producto) {
  let precio = producto.precio;
  let descuento = producto.descuento || 0;
  return precio * (1 - descuento);
}

let laptop = { nombre: "Laptop", precio: 1200, descuento: 0.10 };
let mouse  = { nombre: "Mouse", precio: 25 };

console.log("Laptop:", calcularPrecioFinal(laptop)); // → 1080
console.log("Mouse:", calcularPrecioFinal(mouse));   // → 25

// Función que procesa array de objetos
function calcularTotalCarrito(items) {
  let total = 0;
  for (let item of items) {
    total += item.precio * (item.cantidad || 1);
  }
  return total;
}

let carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 80, cantidad: 1 },
];

console.log("Total: $" + calcularTotalCarrito(carrito)); // → $1330

// Función que devuelve un objeto nuevo
function aplicarDescuento(producto, porcentaje) {
  return {
    ...producto,
    precio: producto.precio * (1 - porcentaje),
    descuento: porcentaje,
  };
}

let productoOriginal = { nombre: "Monitor", precio: 400 };
let productoConDescuento = aplicarDescuento(productoOriginal, 0.15);

console.log("Original:", productoOriginal.precio);       // → 400 (intacto)
console.log("Con descuento:", productoConDescuento.precio); // → 340`,
    keyPoints: [
      'Los objetos se pasan como parámetros igual que cualquier otro valor.',
      'Los objetos se pasan por referencia: modificarlos dentro cambia el original.',
      'Para no mutar el original, devuelve un nuevo objeto con { ...objeto, cambios }.',
      'El destructuring en parámetros permite extraer propiedades directamente.',
      'Las funciones pueden devolver objetos nuevos con return {}.',
      'Pasar un objeto en lugar de múltiples parámetros es más flexible y escalable.',
    ],
    exercise: {
      description:
        'Crea una función evaluarEstudiante(estudiante) que recibe un objeto con nombre y calificaciones (array de números). La función debe calcular el promedio, determinar si aprobó (promedio >= 6), asignar una categoría ("Excelente" si >= 9, "Bien" si >= 7, "Regular" si >= 6, "Reprobado" si < 6), y devolver un nuevo objeto con nombre, promedio, aprobado y categoria. Prueba con 3 estudiantes distintos.',
      hint: 'Usa calcularPromedio dentro de la función. Para categoria: if/else encadenados. return { nombre: estudiante.nombre, promedio, aprobado, categoria }.',
    },
    quiz: [
      {
        question: 'Dado:\nfunction f(obj) { obj.x = 99; }\nlet a = {x: 1};\nf(a);\nconsole.log(a.x);\n¿Qué imprime?',
        options: ['1', '99', 'undefined', 'Error'],
        correctAnswer: '99',
        correctFeedback:
          'Correcto. Los objetos se pasan por referencia. La función modifica el objeto original a, así que a.x queda en 99.',
        incorrectFeedback:
          'Incorrecto. Los objetos se pasan por referencia. Cuando f(a) modifica obj.x, está modificando el mismo objeto al que apunta a. Por eso a.x es 99.',
      },
      {
        question: '¿Cuál es la forma de devolver un nuevo objeto sin mutar el original?',
        options: [
          'return objeto',
          'return { ...objeto, cambio: nuevoValor }',
          'return Object.copy(objeto)',
          'objeto.nuevo = true; return objeto;',
        ],
        correctAnswer: 'return { ...objeto, nuevoValor }',
        correctFeedback:
          'Correcto. El spread operator { ...objeto, propiedad: valor } crea un nuevo objeto con todas las propiedades del original más los cambios.',
        incorrectFeedback:
          'Incorrecto. Para no mutar el original, usa spread: return { ...objeto, cambio: valor }. Esto crea un nuevo objeto con las propiedades del original y agrega/sobreescribe con los cambios.',
      },
      {
        question: '¿Cuál es la ventaja de pasar un objeto como parámetro en lugar de 5 parámetros separados?',
        options: [
          'Los objetos son más rápidos',
          'Puedes agregar propiedades sin cambiar la firma de la función',
          'Es obligatorio en JavaScript moderno',
          'Los parámetros múltiples no funcionan en JavaScript',
        ],
        correctAnswer: 'Puedes agregar propiedades sin cambiar la firma de la función',
        correctFeedback:
          'Correcto. Con un objeto, puedes agregar nuevas propiedades sin romper el código existente que ya llama a la función.',
        incorrectFeedback:
          'Incorrecto. La ventaja es la flexibilidad: si la función recibe un objeto, puedes agregar nuevas propiedades al objeto sin romper la firma de la función ni el código que ya la usa.',
      },
    ],
  },

  // ── Lección 58 ────────────────────────────────────────────────────────────
  {
    slug: 'dividir-problemas-funciones',
    title: 'Dividir problemas en funciones pequeñas',
    module: 'Funciones',
    moduleNumber: 8,
    order: 58,
    description:
      'Aprende a dividir problemas grandes en funciones pequeñas y fáciles de entender.',
    explanation: `Una de las habilidades más importantes en programación es saber dividir un problema grande en partes pequeñas, cada una con una función clara y un nombre descriptivo.

**El principio de responsabilidad única**

Cada función debe hacer **una sola cosa** y hacerla bien. Una función llamada \`procesarPedido()\` probablemente intenta hacer demasiado. Mejor dividirla en:
- \`validarPedido()\`
- \`calcularTotal()\`
- \`aplicarDescuentos()\`
- \`mostrarResumen()\`

**Ejemplo: de una función grande a varias pequeñas**

MAL: todo junto en una función
\`\`\`js
function procesarVenta(productos, descuento) {
  // calcular subtotal
  let subtotal = 0;
  for (let p of productos) subtotal += p.precio;
  // aplicar descuento
  let totalConDescuento = subtotal * (1 - descuento);
  // calcular IVA
  let iva = totalConDescuento * 0.16;
  let total = totalConDescuento + iva;
  // mostrar
  console.log("Subtotal:", subtotal);
  console.log("Descuento:", descuento * 100 + "%");
  console.log("IVA:", iva);
  console.log("Total:", total);
}
\`\`\`

BIEN: dividido en funciones con responsabilidad clara
\`\`\`js
function calcularSubtotal(productos) {
  return productos.reduce((sum, p) => sum + p.precio, 0);
}
function aplicarDescuento(precio, descuento) {
  return precio * (1 - descuento);
}
function calcularIVA(precio) {
  return precio * 0.16;
}
function mostrarResumen(subtotal, iva, total) {
  console.log("Subtotal:", subtotal);
  console.log("IVA:", iva.toFixed(2));
  console.log("Total:", total.toFixed(2));
}
function procesarVenta(productos, descuento) {
  let subtotal = calcularSubtotal(productos);
  let conDescuento = aplicarDescuento(subtotal, descuento);
  let iva = calcularIVA(conDescuento);
  let total = conDescuento + iva;
  mostrarResumen(subtotal, iva, total);
}
\`\`\`

**Ventajas de la versión pequeña:**
- Puedes probar calcularSubtotal sola.
- Puedes reutilizar calcularIVA en otro lugar.
- El código es más fácil de leer y mantener.`,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

// Funciones pequeñas con una sola responsabilidad
function calcularSubtotal(productos) {
  let suma = 0;
  for (let p of productos) {
    suma += p.precio * p.cantidad;
  }
  return suma;
}

function aplicarDescuento(monto, porcentaje) {
  return monto * (1 - porcentaje);
}

function calcularIVA(monto, tasa = 0.16) {
  return monto * tasa;
}

function formatearMoneda(valor) {
  return "$" + valor.toFixed(2);
}

function mostrarResumenVenta(pedido) {
  let subtotal = calcularSubtotal(pedido.productos);
  let conDescuento = aplicarDescuento(subtotal, pedido.descuento);
  let iva = calcularIVA(conDescuento);
  let total = conDescuento + iva;

  console.log("=== Resumen de venta ===");
  console.log("Cliente:", pedido.cliente);
  console.log("Subtotal:", formatearMoneda(subtotal));
  console.log("Descuento:", pedido.descuento * 100 + "%");
  console.log("Precio con descuento:", formatearMoneda(conDescuento));
  console.log("IVA (16%):", formatearMoneda(iva));
  console.log("TOTAL:", formatearMoneda(total));
}

// Uso: la función principal es legible y clara
let pedido = {
  cliente: "Ana García",
  descuento: 0.10,
  productos: [
    { nombre: "Laptop", precio: 1200, cantidad: 1 },
    { nombre: "Mouse", precio: 25, cantidad: 2 },
  ],
};

mostrarResumenVenta(pedido);`,
    keyPoints: [
      'Cada función debe tener una sola responsabilidad bien definida.',
      'Una función larga se puede dividir en varias pequeñas y reutilizables.',
      'Los nombres descriptivos hacen el código legible sin necesitar comentarios.',
      'Las funciones pequeñas son más fáciles de probar, corregir y reutilizar.',
      'La función principal puede orquestar las pequeñas, siendo fácil de leer.',
      'Si un nombre de función dice "y" (calcularYMostrar), probablemente hace dos cosas.',
    ],
    exercise: {
      description:
        'Tienes que procesar una lista de estudiantes y generar un reporte. Divide el problema en funciones pequeñas: calcularPromedioEstudiante(estudiante), asignarNivel(promedio), generarReporteEstudiante(estudiante), y mostrarReporteGrupo(estudiantes). Cada función hace solo su parte. El reporte debe mostrar nombre, promedio y nivel para cada estudiante.',
      hint: 'Primero escribe cada función por separado y pruébala. Luego escribe mostrarReporteGrupo que llame a las demás. Los niveles: "A" si >= 9, "B" si >= 7, "C" si >= 5, "D" si < 5.',
    },
    quiz: [
      {
        question: '¿Qué significa el "principio de responsabilidad única" en funciones?',
        options: [
          'Que una función solo puede tener un parámetro',
          'Que cada función debe hacer una sola cosa y hacerla bien',
          'Que una función solo puede llamar a otra función',
          'Que el código solo puede tener una función',
        ],
        correctAnswer: 'Que cada función debe hacer una sola cosa y hacerla bien',
        correctFeedback:
          'Correcto. Una función con una sola responsabilidad es más fácil de entender, probar y reutilizar.',
        incorrectFeedback:
          'Incorrecto. El principio de responsabilidad única significa que cada función tiene una tarea específica y bien definida. No tiene que ver con el número de parámetros.',
      },
      {
        question: '¿Cuál es la señal de que una función probablemente hace demasiado?',
        options: [
          'Si tiene más de 2 parámetros',
          'Si su nombre contiene "y" o hace múltiples cosas distintas',
          'Si usa return',
          'Si no tiene comentarios',
        ],
        correctAnswer: 'Si su nombre contiene "y" o hace múltiples cosas distintas',
        correctFeedback:
          'Correcto. Nombres como calcularYMostrar() o validarYGuardar() revelan que la función intenta hacer dos cosas. Mejor separarlo.',
        incorrectFeedback:
          'Incorrecto. La señal más clara de que una función hace demasiado es que su nombre incluye "y" (calcularYMostrar) o que internamente hace cosas que no están relacionadas entre sí.',
      },
      {
        question: '¿Cuál es la ventaja de dividir un problema en funciones pequeñas?',
        options: [
          'El código corre más rápido',
          'Cada parte es más fácil de entender, probar y reutilizar',
          'Se escribe menos código en total',
          'No hay ventajas concretas, es solo estilo',
        ],
        correctAnswer: 'Cada parte es más fácil de entender, probar y reutilizar',
        correctFeedback:
          'Correcto. Las funciones pequeñas y enfocadas son más legibles, más fáciles de probar de forma independiente y reutilizables en otros contextos.',
        incorrectFeedback:
          'Incorrecto. La ventaja principal es la claridad y la reutilización: cada función pequeña es más fácil de entender, corregir si tiene un bug, y usar en otras partes del programa.',
      },
    ],
  },

  // ── Lección 59 ────────────────────────────────────────────────────────────
  {
    slug: 'errores-comunes-funciones-js',
    title: 'Errores comunes con funciones',
    module: 'Funciones',
    moduleNumber: 8,
    order: 59,
    description:
      'Aprende a evitar errores como olvidar return, confundir parámetros con argumentos o usar variables fuera de su scope.',
    explanation: `Los errores con funciones son muy comunes y pueden ser difíciles de detectar. Aquí están los más frecuentes y cómo evitarlos.

**Error 1: Olvidar return**
\`\`\`js
function calcularTotal(a, b) {
  let resultado = a + b; // ← calcula...
  // pero olvidó el return
}
let total = calcularTotal(10, 5);
console.log(total); // → undefined ❌
// Solución: agregar return resultado;
\`\`\`

**Error 2: Llamar la función sin paréntesis**
\`\`\`js
let x = Math.random; // ← función, no su resultado
let y = Math.random(); // ← resultado correcto
\`\`\`

**Error 3: console.log en lugar de return**
\`\`\`js
function sumar(a, b) {
  console.log(a + b); // solo muestra, no devuelve
}
let resultado = sumar(3, 4); // resultado = undefined
\`\`\`

**Error 4: Usar variable antes de declararla (con let/const)**
\`\`\`js
function calcular() {
  console.log(x); // ReferenceError: x no está inicializada
  let x = 10;
}
\`\`\`

**Error 5: Asumir que modificar el parámetro cambia el argumento**
\`\`\`js
function cambiarNombre(nombre) {
  nombre = "Carlos"; // no cambia la variable original
}
let nombreOriginal = "Ana";
cambiarNombre(nombreOriginal);
console.log(nombreOriginal); // → "Ana" (strings son inmutables y se pasan por valor)
\`\`\`

**Error 6: Función recursiva sin caso base (bucle infinito)**
\`\`\`js
// MAL:
function contar(n) {
  console.log(n);
  contar(n - 1); // ← sin condición de parada → infinito
}
// BIEN:
function contar(n) {
  if (n <= 0) return; // caso base
  console.log(n);
  contar(n - 1);
}
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── Error 1: olvidar return ───────────────────────────────────────────────
function calcularAreaMAL(base, altura) {
  let area = base * altura; // calcula pero no devuelve
}

function calcularAreaBIEN(base, altura) {
  return base * altura; // ✓
}

console.log(calcularAreaMAL(5, 3));  // → undefined ❌
console.log(calcularAreaBIEN(5, 3)); // → 15 ✓

// ── Error 2: function vs resultado de function ────────────────────────────
function obtenerSaludo(nombre) {
  return "Hola " + nombre;
}

let a = obtenerSaludo;   // ← ES la función (objeto Function)
let b = obtenerSaludo(); // ← RESULTADO: "Hola undefined"
let c = obtenerSaludo("Ana"); // ← RESULTADO correcto: "Hola Ana"

console.log(typeof a); // → "function"
console.log(b);        // → "Hola undefined"
console.log(c);        // → "Hola Ana"

// ── Error 3: strings se pasan por valor ──────────────────────────────────
function intentarCambiar(texto) {
  texto = "modificado"; // solo cambia el parámetro local
}

let original = "original";
intentarCambiar(original);
console.log(original); // → "original" (no cambió)

// ── Correcto: objetos SÍ se pasan por referencia ─────────────────────────
function actualizarPrecio(producto) {
  producto.precio *= 1.10; // SÍ modifica el objeto original
}

let item = { nombre: "Teclado", precio: 80 };
actualizarPrecio(item);
console.log(item.precio); // → 88 (sí cambió)`,
    keyPoints: [
      'Si olvidas return, la función devuelve undefined aunque calcule algo.',
      'Llamar una función sin () devuelve la función misma, no su resultado.',
      'console.log() no reemplaza return: solo muestra, no devuelve.',
      'Los strings y números se pasan por valor: cambiarlos en la función no afecta el original.',
      'Los objetos y arrays se pasan por referencia: modificarlos dentro sí afecta el original.',
      'Siempre revisa que tu función devuelva algo cuando sea necesario.',
    ],
    exercise: {
      description:
        'Encuentra y corrige los errores en estas 3 funciones con bugs intencionales: 1) function getDouble(n) { n * 2; } — ¿cuál es el error y cómo se corrige? 2) function formatear(nombre) { console.log("Hola " + nombre); } let msg = formatear("Ana"); console.log(msg.length); — ¿qué falla? 3) function aplicarImpuesto(precio, tasa) { return precio + (precio * impuesto); } — ¿cuál es el error?. Corrige cada una y muestra que funciona.',
      hint: '1) Falta return. 2) formatear devuelve undefined, no string. 3) "impuesto" no existe, debe ser "tasa".',
    },
    quiz: [
      {
        question: '¿Cuál es el resultado de este código?\nfunction double(x) { x * 2; }\nconsole.log(double(5));',
        options: ['10', '5', 'undefined', 'Error'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. La función calcula x * 2 pero no lo devuelve con return. Al no tener return, devuelve undefined.',
        incorrectFeedback:
          'Incorrecto. La función calcula x * 2 internamente pero no tiene return, así que devuelve undefined. El cálculo se pierde.',
      },
      {
        question: '¿Qué diferencia hay entre llamar f y llamar f()?',
        options: [
          'No hay diferencia',
          'f hace referencia a la función; f() la ejecuta y devuelve su resultado',
          'f() crea una nueva función; f ejecuta la existente',
          'f solo funciona en modo estricto',
        ],
        correctAnswer: 'f hace referencia a la función; f() la ejecuta y devuelve su resultado',
        correctFeedback:
          'Correcto. f sin paréntesis es la función misma (objeto de tipo function). f() con paréntesis la ejecuta y devuelve lo que tenga en return.',
        incorrectFeedback:
          'Incorrecto. f es el objeto función. f() la invoca. Si haces let x = f, x es una función. Si haces let x = f(), x es el valor devuelto por f.',
      },
      {
        question: '¿Qué pasa si modificas el valor de un parámetro string dentro de una función?',
        options: [
          'El string original también cambia',
          'Solo cambia el parámetro local; el string original no se ve afectado',
          'Lanza un TypeError',
          'El string se duplica',
        ],
        correctAnswer: 'Solo cambia el parámetro local; el string original no se ve afectado',
        correctFeedback:
          'Correcto. Los strings (y números) se pasan por valor. Reasignar el parámetro dentro de la función solo afecta la copia local.',
        incorrectFeedback:
          'Incorrecto. Los strings y números son primitivos y se pasan por VALOR. Cambiar el parámetro dentro de la función no afecta la variable original fuera de ella.',
      },
      {
        question: 'Una función usa console.log(resultado) en lugar de return resultado. ¿Cuál es el problema?',
        options: [
          'No hay problema, es equivalente',
          'El valor no está disponible para usarse fuera de la función',
          'console.log lanza un error en algunos navegadores',
          'La función se ejecutará dos veces',
        ],
        correctAnswer: 'El valor no está disponible para usarse fuera de la función',
        correctFeedback:
          'Correcto. console.log() solo muestra el valor en pantalla. Si no hay return, la función devuelve undefined y no puedes usar el resultado en otro cálculo.',
        incorrectFeedback:
          'Incorrecto. console.log() muestra el valor visualmente pero no lo devuelve. Si necesitas usar el resultado de la función en otro cálculo o variable, debes usar return.',
      },
    ],
  },
]

export const jsModule8: Module = {
  number: 8,
  title: 'Funciones',
  level: 'nivel2',
  lessons: lessonsJsModule8,
}
