import type { Lesson, Module } from '@/types'

export const lessonsJsModule6: Lesson[] = [
  // ── Lección 37 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-un-array',
    title: '¿Qué es un array?',
    module: 'Arrays',
    moduleNumber: 6,
    order: 37,
    description:
      'Aprende qué es un array y por qué se usa para guardar múltiples valores en una sola variable.',
    explanation: `Un **array** es una lista ordenada de valores guardados en una sola variable. En lugar de crear diez variables para guardar diez notas de estudiantes, usas un array con diez posiciones.

**La analogía perfecta**

Imagina una fila de casilleros numerados en una escuela. Cada casillero tiene un número (empezando desde 0) y puede guardar algo dentro. Eso es un array: una colección ordenada donde cada elemento tiene su propia posición.

**¿Por qué usar arrays?**

Sin arrays:
\`\`\`js
let nota1 = 85;
let nota2 = 90;
let nota3 = 78;
let nota4 = 92;
let nota5 = 88;
// para 100 estudiantes necesitarías 100 variables 😱
\`\`\`

Con array:
\`\`\`js
let notas = [85, 90, 78, 92, 88]; // todo en una variable
\`\`\`

**Crear un array**

Se usan corchetes \`[]\` y los valores se separan con comas:

\`\`\`js
let frutas = ["manzana", "naranja", "mango"];
let numeros = [1, 2, 3, 4, 5];
let mixto = ["Ana", 25, true, null]; // puede mezclar tipos (no recomendado)
let vacio = []; // array vacío, válido
\`\`\`

**Propiedades básicas**

- \`array.length\` devuelve cuántos elementos tiene.
- Los arrays en JavaScript son objetos con superpoderes.
- Pueden crecer o encogerse dinámicamente.

**Arrays de objetos — muy común en apps reales**

\`\`\`js
let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
];
\`\`\`

Esta estructura aparece en casi toda aplicación real: listas de usuarios, productos, mensajes, pedidos, etc.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Arrays simples
let estudiantes = ["Ana", "Carlos", "María", "Luis", "Sofía"];
let notas = [85, 90, 78, 92, 88];
let aprobados = [true, true, false, true, true];

// Mostrar el array completo
console.log(estudiantes);
// → ["Ana", "Carlos", "María", "Luis", "Sofía"]

// Saber cuántos elementos tiene
console.log("Total de estudiantes:", estudiantes.length); // → 5
console.log("Total de notas:", notas.length);             // → 5

// Array vacío
let pendientes = [];
console.log("Pendientes:", pendientes.length); // → 0

// Array de objetos: estructura muy usada en apps reales
let productos = [
  { nombre: "Laptop", precio: 1200, stock: 10 },
  { nombre: "Mouse", precio: 25, stock: 50 },
  { nombre: "Teclado", precio: 80, stock: 30 },
];

console.log("Productos disponibles:", productos.length); // → 3
console.log(productos);`,
    keyPoints: [
      'Un array es una lista ordenada de valores guardados en una sola variable.',
      'Se crea con corchetes [] y los elementos se separan con comas.',
      'array.length devuelve cuántos elementos tiene el array.',
      'Los arrays pueden contener cualquier tipo de dato: strings, números, objetos, otros arrays.',
      'Los arrays de objetos son la estructura más común en aplicaciones reales.',
      'Un array vacío [] es válido y útil para ir agregando elementos después.',
    ],
    exercise: {
      description:
        'Crea tres arrays: 1) materias con al menos 5 materias de la escuela. 2) calificaciones con 5 números del 1 al 10. 3) alumnos con 3 objetos, cada uno con nombre y promedio. Muestra con console.log el length de cada array y el contenido completo de alumnos.',
      hint: 'Para el array de objetos: let alumnos = [{ nombre: "Ana", promedio: 9 }, ...]. Accede con alumnos.length y console.log(alumnos).',
    },
    quiz: [
      {
        question: '¿Qué es un array en JavaScript?',
        options: [
          'Una variable que solo puede guardar números',
          'Una lista ordenada de valores en una sola variable',
          'Una función que devuelve múltiples resultados',
          'Un tipo de bucle para repetir código',
        ],
        correctAnswer: 'Una lista ordenada de valores en una sola variable',
        correctFeedback:
          'Correcto. Un array guarda múltiples valores en orden dentro de una sola variable, usando corchetes [].',
        incorrectFeedback:
          'Incorrecto. Un array es una lista ordenada de valores (de cualquier tipo) guardados en una sola variable. No está limitado a números ni es una función.',
      },
      {
        question: '¿Cuál es la sintaxis correcta para crear un array con tres nombres?',
        options: [
          'let nombres = ("Ana", "Carlos", "María")',
          'let nombres = {"Ana", "Carlos", "María"}',
          'let nombres = ["Ana", "Carlos", "María"]',
          'let nombres = <"Ana", "Carlos", "María">',
        ],
        correctAnswer: 'let nombres = ["Ana", "Carlos", "María"]',
        correctFeedback:
          'Correcto. Los arrays se crean con corchetes [] y los elementos se separan con comas.',
        incorrectFeedback:
          'Incorrecto. Los arrays usan corchetes []. Los paréntesis son para llamar funciones y las llaves {} son para objetos.',
      },
      {
        question: '¿Qué devuelve esta expresión?\n\nlet frutas = ["mango", "pera", "uva"];\nconsole.log(frutas.length);',
        options: ['2', '3', '"mango"', 'undefined'],
        correctAnswer: '3',
        correctFeedback:
          'Correcto. El array tiene 3 elementos, así que .length devuelve 3.',
        incorrectFeedback:
          'Incorrecto. .length devuelve el número total de elementos del array. El array tiene 3 elementos ("mango", "pera", "uva"), así que devuelve 3.',
      },
      {
        question: '¿Cuál de estas opciones es un array válido en JavaScript?',
        options: [
          'let a = [1, "hola", true, null]',
          'let a = [1 "hola" true]',
          'let a = [1; 2; 3]',
          'let a = array(1, 2, 3)',
        ],
        correctAnswer: 'let a = [1, "hola", true, null]',
        correctFeedback:
          'Correcto. Los arrays pueden mezclar tipos de datos y los elementos se separan con comas dentro de [].',
        incorrectFeedback:
          'Incorrecto. Los arrays usan [] con elementos separados por comas. Sin comas o con punto y coma son errores de sintaxis. array() no es una función válida en este contexto.',
      },
      {
        question: '¿Cuál es la diferencia entre let lista = [] y let lista = {}?',
        options: [
          'No hay diferencia, ambos son lo mismo',
          '[] crea un array (lista ordenada) y {} crea un objeto (pares clave-valor)',
          '[] es para números y {} es para strings',
          '[] es incorrecto en JavaScript moderno',
        ],
        correctAnswer: '[] crea un array (lista ordenada) y {} crea un objeto (pares clave-valor)',
        correctFeedback:
          'Correcto. [] es para listas ordenadas (arrays) y {} es para objetos con propiedades nombradas (clave: valor).',
        incorrectFeedback:
          'Incorrecto. [] y {} crean estructuras distintas: [] es un array (lista con índices numéricos) y {} es un objeto (propiedades con nombre). Confundirlos es un error muy común.',
      },
      {
        question: '¿Cuál es la forma más práctica de guardar una lista de 100 productos?',
        options: [
          'Crear 100 variables separadas: let producto1, let producto2...',
          'Usar un único array con los 100 productos',
          'Usar 100 funciones, una por producto',
          'No es posible en JavaScript',
        ],
        correctAnswer: 'Usar un único array con los 100 productos',
        correctFeedback:
          'Correcto. Esa es precisamente la razón de existir de los arrays: guardar colecciones de datos de forma organizada en una sola variable.',
        incorrectFeedback:
          'Incorrecto. Crear 100 variables individuales es exactamente el problema que los arrays resuelven. Con un array manejas toda la colección desde una sola variable.',
      },
    ],
  },

  // ── Lección 38 ────────────────────────────────────────────────────────────
  {
    slug: 'acceder-elementos-array',
    title: 'Acceder a elementos de un array',
    module: 'Arrays',
    moduleNumber: 6,
    order: 38,
    description:
      'Aprende cómo acceder a elementos usando índices y entiende por qué los arrays empiezan en la posición 0.',
    explanation: `Para acceder a un elemento específico de un array usas su **índice** dentro de corchetes: \`array[indice]\`.

**La regla más importante: los índices empiezan en 0**

| Posición | 0 | 1 | 2 | 3 | 4 |
|----------|---|---|---|---|---|
| Elemento | "Ana" | "Carlos" | "María" | "Luis" | "Sofía" |

El primer elemento está en la posición **0**, el segundo en **1**, y así sucesivamente. Esto se llama "base cero" y es una convención universal en programación.

\`\`\`js
let nombres = ["Ana", "Carlos", "María", "Luis", "Sofía"];
console.log(nombres[0]); // → "Ana"    (primero)
console.log(nombres[1]); // → "Carlos" (segundo)
console.log(nombres[4]); // → "Sofía"  (quinto, el último)
\`\`\`

**Acceder al último elemento**

Como el último está en la posición \`length - 1\`:
\`\`\`js
let ultimo = nombres[nombres.length - 1]; // → "Sofía"
\`\`\`

**¿Qué pasa si accedes a un índice que no existe?**

\`\`\`js
console.log(nombres[10]); // → undefined (no error, pero tampoco un valor)
\`\`\`

Esto es importante: JavaScript no lanza error, pero devuelve \`undefined\`. Ese \`undefined\` puede causar problemas más adelante si no lo controlas.

**Modificar un elemento con su índice**

\`\`\`js
nombres[2] = "Luisa"; // reemplaza "María" por "Luisa"
console.log(nombres[2]); // → "Luisa"
\`\`\`

**Acceder a propiedades en arrays de objetos**

\`\`\`js
let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
];
console.log(productos[0].nombre); // → "Laptop"
console.log(productos[1].precio); // → 25
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

let estudiantes = ["Ana", "Carlos", "María", "Luis", "Sofía"];

// Acceder por índice (empieza en 0)
console.log(estudiantes[0]); // → "Ana"
console.log(estudiantes[1]); // → "Carlos"
console.log(estudiantes[4]); // → "Sofía"

// El último elemento: length - 1
console.log(estudiantes[estudiantes.length - 1]); // → "Sofía"

// Índice fuera de rango → undefined
console.log(estudiantes[10]); // → undefined

// Modificar un elemento
estudiantes[2] = "Luisa";
console.log(estudiantes[2]); // → "Luisa"

// ── Arrays de objetos ─────────────────────────────────────────────────────
let productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: true },
  { nombre: "Monitor", precio: 350, disponible: false },
];

// Acceder al primer producto
console.log(productos[0]);             // → { nombre: "Laptop", precio: 1200, disponible: true }
console.log(productos[0].nombre);      // → "Laptop"
console.log(productos[0].precio);      // → 1200

// Acceder al segundo producto
console.log(productos[1].nombre);      // → "Mouse"

// Modificar una propiedad
productos[2].disponible = true;
console.log(productos[2].disponible);  // → true`,
    keyPoints: [
      'Los índices de un array empiezan en 0, no en 1.',
      'Se accede a un elemento con array[indice], por ejemplo nombres[0].',
      'El último elemento está en la posición array.length - 1.',
      'Acceder a un índice que no existe devuelve undefined (no un error).',
      'Se puede modificar un elemento asignándole un valor: array[i] = nuevoValor.',
      'En arrays de objetos: array[i].propiedad para acceder a una propiedad específica.',
    ],
    exercise: {
      description:
        'Crea un array llamado tareas con 5 strings (tareas pendientes). Luego: 1) muestra la primera tarea, 2) muestra la última tarea usando length, 3) modifica la tercera tarea a "Tarea actualizada", 4) muestra el array completo, 5) intenta acceder al índice 20 y muestra qué devuelve.',
      hint: 'Recuerda: el primer índice es 0, el último es tareas.length - 1. Para modificar: tareas[2] = "nueva tarea". Para el índice 20: console.log(tareas[20]).',
    },
    quiz: [
      {
        question: '¿Cuál es el índice del primer elemento en un array?',
        options: ['1', '0', '-1', 'Depende del tamaño del array'],
        correctAnswer: '0',
        correctFeedback:
          'Correcto. En JavaScript (y en la mayoría de lenguajes de programación) los arrays empiezan en el índice 0.',
        incorrectFeedback:
          'Incorrecto. Los arrays en JavaScript usan "base cero": el primer elemento está en el índice 0, el segundo en 1, y así sucesivamente.',
      },
      {
        question: 'Dado este código, ¿qué imprime console.log(notas[2])?\n\nlet notas = [85, 90, 78, 92, 88];',
        options: ['90', '78', '85', 'undefined'],
        correctAnswer: '78',
        correctFeedback:
          'Correcto. El índice 2 corresponde al tercer elemento (85 está en 0, 90 en 1, 78 en 2).',
        incorrectFeedback:
          'Incorrecto. Recuerda que los índices empiezan en 0. notas[0] = 85, notas[1] = 90, notas[2] = 78.',
      },
      {
        question: 'Tienes let colores = ["rojo", "verde", "azul"]. ¿Cómo accedes al último elemento sin escribir el índice directamente?',
        options: [
          'colores[colores.length]',
          'colores[colores.length - 1]',
          'colores.last()',
          'colores[-1]',
        ],
        correctAnswer: 'colores[colores.length - 1]',
        correctFeedback:
          'Correcto. Como los índices van de 0 a length-1, el último elemento siempre está en length - 1.',
        incorrectFeedback:
          'Incorrecto. colores[colores.length] daría undefined (índice fuera de rango). colores[-1] no funciona en JavaScript como en Python. La forma correcta es colores[colores.length - 1].',
      },
      {
        question: '¿Qué devuelve acceder a un índice que no existe?\n\nlet items = ["a", "b"];\nconsole.log(items[5]);',
        options: ['Error de JavaScript', 'null', 'undefined', '"b"'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. JavaScript devuelve undefined cuando accedes a un índice fuera del rango del array, sin lanzar un error.',
        incorrectFeedback:
          'Incorrecto. JavaScript no lanza un error al acceder a índices inexistentes: devuelve undefined. Este comportamiento puede causar bugs silenciosos si no se controla.',
      },
      {
        question: 'Dado: let productos = [{ nombre: "Silla", precio: 150 }, { nombre: "Mesa", precio: 300 }]\n¿Cómo obtienes el precio de "Mesa"?',
        options: [
          'productos.precio[1]',
          'productos[1].precio',
          'productos["Mesa"].precio',
          'productos[2].precio',
        ],
        correctAnswer: 'productos[1].precio',
        correctFeedback:
          'Correcto. Primero accedes al elemento con su índice (productos[1]) y luego a la propiedad del objeto (.precio).',
        incorrectFeedback:
          'Incorrecto. La sintaxis correcta es: primero el índice del array (productos[1] para el segundo elemento) y luego la propiedad del objeto (.precio). "Mesa" está en el índice 1 porque los índices empiezan en 0.',
      },
    ],
  },

  // ── Lección 39 ────────────────────────────────────────────────────────────
  {
    slug: 'agregar-eliminar-elementos-array',
    title: 'Agregar y eliminar elementos',
    module: 'Arrays',
    moduleNumber: 6,
    order: 39,
    description:
      'Aprende a modificar arrays usando métodos como push(), pop(), shift() y unshift().',
    explanation: `Los arrays en JavaScript son dinámicos: puedes agregar y eliminar elementos después de crearlos. Los métodos principales son \`push()\`, \`pop()\`, \`shift()\` y \`unshift()\`.

**Agregar al final: push()**
\`\`\`js
let lista = ["Ana", "Carlos"];
lista.push("María"); // agrega al final
console.log(lista); // → ["Ana", "Carlos", "María"]
\`\`\`

**Eliminar del final: pop()**
\`\`\`js
let eliminado = lista.pop(); // elimina el último y lo devuelve
console.log(eliminado); // → "María"
console.log(lista);     // → ["Ana", "Carlos"]
\`\`\`

**Agregar al inicio: unshift()**
\`\`\`js
lista.unshift("Luis"); // agrega al inicio
console.log(lista); // → ["Luis", "Ana", "Carlos"]
\`\`\`

**Eliminar del inicio: shift()**
\`\`\`js
let primero = lista.shift(); // elimina el primer elemento y lo devuelve
console.log(primero); // → "Luis"
console.log(lista);   // → ["Ana", "Carlos"]
\`\`\`

**Truco para memorizar:**

| Método | Dónde | Acción |
|--------|-------|--------|
| push() | Final | Agrega |
| pop() | Final | Elimina |
| unshift() | Inicio | Agrega |
| shift() | Inicio | Elimina |

**Importante: estos métodos MUTAN el array original.** El array cambia de verdad, no crea una copia.

**push() puede agregar varios a la vez:**
\`\`\`js
lista.push("Pedro", "Laura", "Tomás"); // agrega 3 de una vez
\`\`\`

**push() y unshift() devuelven el nuevo length:**
\`\`\`js
let nuevaLongitud = lista.push("Nuevo");
console.log(nuevaLongitud); // → el número de elementos después de agregar
\`\`\``,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

let carrito = ["Laptop", "Mouse"];
console.log("Carrito inicial:", carrito); // → ["Laptop", "Mouse"]

// push() — agrega al final
carrito.push("Teclado");
console.log("Después de push:", carrito); // → ["Laptop", "Mouse", "Teclado"]

// push() con múltiples elementos
carrito.push("Monitor", "Webcam");
console.log("Después de push múltiple:", carrito);
// → ["Laptop", "Mouse", "Teclado", "Monitor", "Webcam"]

// pop() — elimina el último y lo devuelve
let ultimoEliminado = carrito.pop();
console.log("Elemento eliminado:", ultimoEliminado); // → "Webcam"
console.log("Después de pop:", carrito);
// → ["Laptop", "Mouse", "Teclado", "Monitor"]

// unshift() — agrega al inicio
carrito.unshift("Auriculares");
console.log("Después de unshift:", carrito);
// → ["Auriculares", "Laptop", "Mouse", "Teclado", "Monitor"]

// shift() — elimina el primero y lo devuelve
let primerEliminado = carrito.shift();
console.log("Primer eliminado:", primerEliminado); // → "Auriculares"
console.log("Después de shift:", carrito);
// → ["Laptop", "Mouse", "Teclado", "Monitor"]

// push() devuelve el nuevo length
let nuevoTamano = carrito.push("Impresora");
console.log("Nuevo tamaño:", nuevoTamano); // → 5`,
    keyPoints: [
      'push() agrega uno o más elementos al FINAL del array y devuelve el nuevo length.',
      'pop() elimina el ÚLTIMO elemento y lo devuelve.',
      'unshift() agrega uno o más elementos al INICIO del array.',
      'shift() elimina el PRIMER elemento y lo devuelve.',
      'Todos estos métodos mutan (modifican) el array original.',
      'pop() y shift() devuelven el elemento eliminado, lo que permite usarlo después.',
    ],
    exercise: {
      description:
        'Crea un array llamado tareas con 3 strings. Luego: 1) agrega una tarea al final con push(), 2) agrega una tarea urgente al inicio con unshift(), 3) completa (elimina) la primera tarea con shift() y guarda qué tarea era, 4) completa la última tarea con pop(), 5) muestra el array final y las dos tareas completadas.',
      hint: 'let tareaCompletada = tareas.shift() — esto elimina y guarda el elemento. Haz lo mismo con pop() para la última.',
    },
    quiz: [
      {
        question: '¿Qué hace el método push()?',
        options: [
          'Elimina el primer elemento del array',
          'Agrega uno o más elementos al final del array',
          'Agrega un elemento al inicio del array',
          'Devuelve el último elemento sin eliminarlo',
        ],
        correctAnswer: 'Agrega uno o más elementos al final del array',
        correctFeedback:
          'Correcto. push() agrega al final del array y devuelve el nuevo length.',
        incorrectFeedback:
          'Incorrecto. push() agrega elementos al FINAL. Para el inicio usa unshift(). Para eliminar usa pop() o shift().',
      },
      {
        question: 'Dado: let frutas = ["pera", "uva", "mango"];\nfrutas.pop();\n\n¿Qué contiene frutas después?',
        options: [
          '["pera", "uva", "mango"]',
          '["uva", "mango"]',
          '["pera", "uva"]',
          '["pera", "mango"]',
        ],
        correctAnswer: '["pera", "uva"]',
        correctFeedback:
          'Correcto. pop() elimina el último elemento ("mango"), dejando ["pera", "uva"].',
        incorrectFeedback:
          'Incorrecto. pop() elimina el ÚLTIMO elemento del array. "mango" es el último, así que el resultado es ["pera", "uva"].',
      },
      {
        question: '¿Cuál es la diferencia entre shift() y pop()?',
        options: [
          'No hay diferencia, hacen lo mismo',
          'shift() elimina el primer elemento, pop() elimina el último',
          'shift() agrega al inicio, pop() agrega al final',
          'shift() es para strings, pop() es para números',
        ],
        correctAnswer: 'shift() elimina el primer elemento, pop() elimina el último',
        correctFeedback:
          'Correcto. shift() actúa sobre el inicio del array y pop() sobre el final.',
        incorrectFeedback:
          'Incorrecto. La diferencia es la posición: shift() elimina del INICIO y pop() elimina del FINAL. Ambos devuelven el elemento eliminado.',
      },
      {
        question: '¿Qué imprime este código?\n\nlet nums = [1, 2, 3];\nnums.unshift(0);\nconsole.log(nums[0]);',
        options: ['1', '0', '3', 'undefined'],
        correctAnswer: '0',
        correctFeedback:
          'Correcto. unshift(0) agrega 0 al inicio, haciendo que nums[0] sea 0.',
        incorrectFeedback:
          'Incorrecto. unshift() agrega al INICIO del array. Después de unshift(0), el array es [0, 1, 2, 3], así que nums[0] es 0.',
      },
      {
        question: '¿Cuál de estas afirmaciones es correcta sobre push() y pop()?',
        options: [
          'Crean una copia del array sin modificar el original',
          'Mutan (modifican) el array original directamente',
          'Solo funcionan con arrays de números',
          'push() es para agregar y pop() es para ordenar',
        ],
        correctAnswer: 'Mutan (modifican) el array original directamente',
        correctFeedback:
          'Correcto. push(), pop(), shift() y unshift() son métodos mutadores: cambian el array original, no crean uno nuevo.',
        incorrectFeedback:
          'Incorrecto. push() y pop() mutan el array original. Si necesitas mantener el original intacto, debes hacer una copia del array antes de usar estos métodos.',
      },
    ],
  },

  // ── Lección 40 ────────────────────────────────────────────────────────────
  {
    slug: 'metodos-basicos-arrays-2',
    title: 'Métodos básicos de arrays',
    module: 'Arrays',
    moduleNumber: 6,
    order: 40,
    description:
      'Aprende a usar métodos comunes como includes(), indexOf(), slice(), join() y length.',
    explanation: `Además de push/pop, los arrays tienen muchos métodos útiles para consultar y transformar datos sin cambiar el original.

**includes() — ¿existe el elemento?**
\`\`\`js
let frutas = ["manzana", "naranja", "uva"];
console.log(frutas.includes("naranja")); // → true
console.log(frutas.includes("mango"));   // → false
\`\`\`

**indexOf() — ¿en qué posición está?**
\`\`\`js
console.log(frutas.indexOf("naranja")); // → 1
console.log(frutas.indexOf("mango"));   // → -1 (no existe)
\`\`\`
Si devuelve -1, el elemento no está en el array.

**slice() — extraer una parte del array (NO muta)**
\`\`\`js
let numeros = [10, 20, 30, 40, 50];
let parte = numeros.slice(1, 3); // desde índice 1, hasta antes del 3
console.log(parte);    // → [20, 30]
console.log(numeros);  // → [10, 20, 30, 40, 50] (intacto)
\`\`\`

**join() — convertir array a string**
\`\`\`js
let palabras = ["Hola", "Mundo", "desde", "JavaScript"];
console.log(palabras.join(" ")); // → "Hola Mundo desde JavaScript"
console.log(palabras.join("-")); // → "Hola-Mundo-desde-JavaScript"
\`\`\`

**length — propiedad, no método**
\`\`\`js
let items = ["a", "b", "c"];
console.log(items.length); // → 3
// length es una propiedad, NO lleva paréntesis
\`\`\`

**Diferencia clave:** \`slice()\` y \`join()\` NO mutan el array original: devuelven un nuevo valor. Esto los hace seguros para usar sin miedo a alterar tus datos.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

let materias = ["Matemáticas", "Historia", "Ciencias", "Arte", "Música"];

// length — cuántos elementos tiene
console.log("Total materias:", materias.length); // → 5

// includes() — ¿está ese elemento?
console.log(materias.includes("Historia"));  // → true
console.log(materias.includes("Inglés"));    // → false

// indexOf() — ¿en qué posición está?
console.log(materias.indexOf("Ciencias")); // → 2
console.log(materias.indexOf("Inglés"));   // → -1 (no existe)

// Uso práctico de indexOf: verificar antes de actuar
if (materias.indexOf("Inglés") === -1) {
  console.log("Inglés no está en la lista");
}

// slice() — extraer una parte SIN mutar el original
let primerTrimestre = materias.slice(0, 3);
console.log("Primer trimestre:", primerTrimestre); // → ["Matemáticas", "Historia", "Ciencias"]
console.log("Original intacto:", materias);        // → ["Matemáticas", "Historia", "Ciencias", "Arte", "Música"]

// slice() desde el inicio o hasta el final
let ultimasDos = materias.slice(-2);   // → ["Arte", "Música"]
let desdeSegunda = materias.slice(1);  // → ["Historia", "Ciencias", "Arte", "Música"]
console.log("Últimas dos:", ultimasDos);
console.log("Desde segunda:", desdeSegunda);

// join() — unir en un string
let listaTexto = materias.join(", ");
console.log("Lista:", listaTexto);
// → "Matemáticas, Historia, Ciencias, Arte, Música"

let listaConSlash = materias.join(" / ");
console.log("Con slash:", listaConSlash);
// → "Matemáticas / Historia / Ciencias / Arte / Música"`,
    keyPoints: [
      'includes() devuelve true o false según si el elemento existe en el array.',
      'indexOf() devuelve la posición del elemento, o -1 si no existe.',
      'slice(inicio, fin) extrae una parte del array SIN modificar el original.',
      'join(separador) convierte el array en un string con el separador dado.',
      'length es una PROPIEDAD, no un método: no lleva paréntesis.',
      'slice() y join() son seguros porque no mutan el array original.',
    ],
    exercise: {
      description:
        'Crea un array de 6 países. Luego: 1) verifica si "Brasil" está en el array con includes(), 2) encuentra en qué posición está "México" con indexOf(), 3) extrae los 3 primeros países con slice(), 4) convierte el array completo a un string separado por " | " con join(), 5) si indexOf() devuelve -1 para "Japón", muestra un mensaje diciendo que no está.',
      hint: 'Para la verificación: if (paises.indexOf("Japón") === -1) { console.log("...") }. slice(0, 3) da los primeros tres.',
    },
    quiz: [
      {
        question: '¿Qué devuelve includes() cuando el elemento NO está en el array?',
        options: ['-1', 'undefined', 'false', 'null'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. includes() devuelve un booleano: true si existe, false si no existe.',
        incorrectFeedback:
          'Incorrecto. includes() devuelve siempre un booleano. Si el elemento no está devuelve false. El -1 es lo que devuelve indexOf() cuando el elemento no existe.',
      },
      {
        question: '¿Qué resultado tiene slice(1, 3) aplicado a ["a", "b", "c", "d", "e"]?',
        options: [
          '["a", "b", "c"]',
          '["b", "c"]',
          '["b", "c", "d"]',
          '["c", "d"]',
        ],
        correctAnswer: '["b", "c"]',
        correctFeedback:
          'Correcto. slice(1, 3) toma desde el índice 1 ("b") hasta antes del índice 3, por lo que incluye índices 1 y 2: ["b", "c"].',
        incorrectFeedback:
          'Incorrecto. slice(inicio, fin) incluye el inicio pero excluye el fin. slice(1, 3) incluye índices 1 y 2, es decir ["b", "c"]. El índice 3 ("d") queda excluido.',
      },
      {
        question: '¿Cuál es la diferencia entre includes() e indexOf()?',
        options: [
          'No hay diferencia, ambos hacen lo mismo',
          'includes() devuelve true/false, indexOf() devuelve la posición o -1',
          'includes() es más lento que indexOf()',
          'indexOf() solo funciona con números',
        ],
        correctAnswer: 'includes() devuelve true/false, indexOf() devuelve la posición o -1',
        correctFeedback:
          'Correcto. Úsalos según lo que necesitas: includes() para saber SI existe, indexOf() para saber DÓNDE está.',
        incorrectFeedback:
          'Incorrecto. includes() devuelve un booleano (¿existe o no?). indexOf() devuelve el índice numérico donde está el elemento, o -1 si no existe.',
      },
      {
        question: 'Dado: let nums = [1, 2, 3, 4];\nconsole.log(nums.join("-"));\n\n¿Qué se imprime?',
        options: [
          '[1, 2, 3, 4]',
          '"1-2-3-4"',
          '"1, 2, 3, 4"',
          'Error',
        ],
        correctAnswer: '"1-2-3-4"',
        correctFeedback:
          'Correcto. join("-") convierte el array en un string usando "-" como separador entre cada elemento.',
        incorrectFeedback:
          'Incorrecto. join(separador) convierte cada elemento a string y los une con el separador dado. Con "-" el resultado es "1-2-3-4".',
      },
      {
        question: '¿Cuál de estas afirmaciones sobre slice() es correcta?',
        options: [
          'slice() modifica el array original',
          'slice() devuelve un nuevo array sin tocar el original',
          'slice() elimina elementos del array',
          'slice() solo funciona si el array tiene más de 5 elementos',
        ],
        correctAnswer: 'slice() devuelve un nuevo array sin tocar el original',
        correctFeedback:
          'Correcto. slice() es no-mutador: crea y devuelve un nuevo array con la porción extraída. El original queda intacto.',
        incorrectFeedback:
          'Incorrecto. slice() es un método no-mutador. Devuelve una copia de la porción seleccionada en un nuevo array, sin modificar el original.',
      },
    ],
  },

  // ── Lección 41 ────────────────────────────────────────────────────────────
  {
    slug: 'recorrer-arrays-bucles',
    title: 'Recorrer arrays con bucles',
    module: 'Arrays',
    moduleNumber: 6,
    order: 41,
    description:
      'Aprende a recorrer arrays usando for, for...of y forEach().',
    explanation: `Recorrer un array significa pasar por cada uno de sus elementos, uno a uno. Hay varias formas de hacerlo en JavaScript.

**1. Bucle for clásico**

Útil cuando necesitas el índice:
\`\`\`js
let notas = [85, 90, 78, 92, 88];
for (let i = 0; i < notas.length; i++) {
  console.log("Nota", i + 1, ":", notas[i]);
}
\`\`\`

**2. for...of — el más legible**

Cuando solo necesitas el valor (no el índice):
\`\`\`js
for (let nota of notas) {
  console.log("Nota:", nota);
}
\`\`\`

**3. forEach() — método del array**

Recibe una función (callback) que se ejecuta por cada elemento:
\`\`\`js
notas.forEach(function(nota) {
  console.log("Nota:", nota);
});

// Con arrow function (más corto):
notas.forEach((nota) => {
  console.log("Nota:", nota);
});
\`\`\`

**¿Cuál usar?**

| Bucle | Cuándo usarlo |
|-------|---------------|
| for clásico | Cuando necesitas el índice para algo específico |
| for...of | Cuando solo necesitas el valor de cada elemento |
| forEach() | Cuando quieres código más declarativo con funciones |

**Ejemplo práctico: sumar todos los valores**
\`\`\`js
let total = 0;
notas.forEach((nota) => {
  total += nota;
});
let promedio = total / notas.length;
console.log("Promedio:", promedio);
\`\`\``,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
  { nombre: "Monitor", precio: 350 },
];

// 1) for clásico: útil cuando necesitas el índice
console.log("--- for clásico ---");
for (let i = 0; i < productos.length; i++) {
  console.log(\`#\${i + 1} \${productos[i].nombre}: $\${productos[i].precio}\`);
}

// 2) for...of: más limpio cuando solo necesitas el valor
console.log("--- for...of ---");
for (let producto of productos) {
  console.log(\`\${producto.nombre}: $\${producto.precio}\`);
}

// 3) forEach: con callback
console.log("--- forEach ---");
productos.forEach((producto) => {
  console.log(\`\${producto.nombre} — $\${producto.precio}\`);
});

// Ejemplo práctico: calcular el total del carrito
let totalCarrito = 0;
productos.forEach((producto) => {
  totalCarrito += producto.precio;
});
console.log("Total del carrito: $" + totalCarrito); // → 1655

// Mostrar solo los que cuestan más de 100
console.log("--- Productos caros (> $100) ---");
for (let producto of productos) {
  if (producto.precio > 100) {
    console.log(producto.nombre, ":", producto.precio);
  }
}`,
    keyPoints: [
      'for clásico es ideal cuando necesitas el índice i durante el recorrido.',
      'for...of es el más legible cuando solo necesitas el valor de cada elemento.',
      'forEach() recibe una función que se ejecuta una vez por cada elemento.',
      'Los tres enfoques recorren todos los elementos de principio a fin.',
      'Puedes combinar recorrido con condicionales para filtrar elementos.',
      'forEach() no permite break ni continue; usa for o for...of si los necesitas.',
    ],
    exercise: {
      description:
        'Crea un array de 5 objetos, cada uno con nombre (string) y calificacion (número del 1 al 10). Usa forEach() para: 1) mostrar el nombre y calificación de cada estudiante, 2) contar cuántos tienen calificación mayor o igual a 7, 3) calcular el promedio de todas las calificaciones.',
      hint: 'Declara let aprobados = 0 y let suma = 0 antes del forEach(). Dentro del callback incrementa según la condición. Al final muestra los resultados.',
    },
    quiz: [
      {
        question: '¿Cuál de estas formas es la más legible para recorrer un array cuando solo necesitas el valor?',
        options: [
          'for (let i = 0; i < arr.length; i++)',
          'for (let item of arr)',
          'while (arr.length > 0)',
          'arr.forEach((item, i) => { ... })',
        ],
        correctAnswer: 'for (let item of arr)',
        correctFeedback:
          'Correcto. for...of es la forma más limpia y legible cuando no necesitas el índice.',
        incorrectFeedback:
          'Incorrecto. Cuando solo necesitas el valor (no el índice), for...of es la opción más limpia: for (let item of arr). El for clásico es útil cuando también necesitas i.',
      },
      {
        question: '¿Qué hace forEach() exactamente?',
        options: [
          'Crea un nuevo array transformando cada elemento',
          'Ejecuta una función por cada elemento del array',
          'Filtra elementos que cumplen una condición',
          'Ordena los elementos del array',
        ],
        correctAnswer: 'Ejecuta una función por cada elemento del array',
        correctFeedback:
          'Correcto. forEach() ejecuta el callback una vez por cada elemento. No devuelve un nuevo array ni filtra.',
        incorrectFeedback:
          'Incorrecto. forEach() ejecuta una función (callback) por cada elemento. Si necesitas transformar o filtrar, hay métodos específicos como map() y filter() que aprenderás pronto.',
      },
      {
        question: '¿Qué problema tiene este código?\n\nlet notas = [85, 90, 78];\nfor (let i = 0; i <= notas.length; i++) {\n  console.log(notas[i]);\n}',
        options: [
          'No hay ningún problema',
          'Usa <= en vez de <, por lo que el último acceso será undefined',
          'for no funciona con arrays',
          'notas.length devuelve 0',
        ],
        correctAnswer: 'Usa <= en vez de <, por lo que el último acceso será undefined',
        correctFeedback:
          'Correcto. Con <= también ejecuta el bucle cuando i === 3, y notas[3] es undefined porque el último índice válido es 2.',
        incorrectFeedback:
          'Incorrecto. El error está en <= en lugar de <. Cuando i llega a ser igual a notas.length (3), notas[3] no existe y devuelve undefined. La condición correcta es i < notas.length.',
      },
      {
        question: '¿Puedes usar break dentro de forEach()?',
        options: [
          'Sí, funciona igual que en un for',
          'No, break no funciona dentro de forEach()',
          'Sí, pero solo en versiones modernas de JavaScript',
          'Solo funciona si el array tiene menos de 10 elementos',
        ],
        correctAnswer: 'No, break no funciona dentro de forEach()',
        correctFeedback:
          'Correcto. forEach() no soporta break ni continue. Si necesitas detener el recorrido, usa un bucle for o for...of.',
        incorrectFeedback:
          'Incorrecto. Break no funciona dentro de forEach(). Si necesitas salir del bucle antes de terminar, debes usar un for clásico o for...of.',
      },
      {
        question: 'Dado:\nlet precios = [10, 20, 30];\nlet total = 0;\nprecios.forEach((p) => { total += p; });\nconsole.log(total);\n\n¿Qué imprime?',
        options: ['[10, 20, 30]', '0', '60', '30'],
        correctAnswer: '60',
        correctFeedback:
          'Correcto. El forEach() suma cada precio a total: 0 + 10 + 20 + 30 = 60.',
        incorrectFeedback:
          'Incorrecto. forEach() recorre el array y en cada iteración suma el precio a total. 10 + 20 + 30 = 60.',
      },
    ],
  },

  // ── Lección 42 ────────────────────────────────────────────────────────────
  {
    slug: 'arrays-anidados',
    title: 'Arrays anidados',
    module: 'Arrays',
    moduleNumber: 6,
    order: 42,
    description:
      'Aprende qué son los arrays dentro de arrays y cómo acceder a sus valores.',
    explanation: `Un **array anidado** es un array que contiene otros arrays como elementos. Es útil para representar datos tabulares (filas y columnas) o estructuras matriciales.

**Crear un array anidado**
\`\`\`js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
\`\`\`

**Acceder a elementos**

Se usan dos pares de corchetes: primero el índice de la fila, luego el de la columna.
\`\`\`js
console.log(matriz[0]);     // → [1, 2, 3] (primera fila)
console.log(matriz[0][0]); // → 1 (fila 0, columna 0)
console.log(matriz[1][2]); // → 6 (fila 1, columna 2)
console.log(matriz[2][1]); // → 8 (fila 2, columna 1)
\`\`\`

**Ejemplo práctico: horario semanal**
\`\`\`js
let horario = [
  ["Matemáticas", "Historia", "Inglés"],   // Lunes
  ["Ciencias", "Arte", "Educación Física"], // Martes
  ["Historia", "Matemáticas", "Inglés"],    // Miércoles
];
// Clase del Martes a las 2ª hora:
console.log(horario[1][1]); // → "Arte"
\`\`\`

**Recorrer arrays anidados**

Necesitas dos bucles (uno por dimensión):
\`\`\`js
for (let fila of matriz) {
  for (let elemento of fila) {
    console.log(elemento);
  }
}
\`\`\`

**¿Cuándo usarlos?**

- Tablas de datos (filas y columnas)
- Tableros de juego (ajedrez, tic-tac-toe)
- Horarios, calendarios
- Matrices matemáticas

En la práctica del desarrollo web, los arrays anidados aparecen con frecuencia en datos que vienen de APIs o bases de datos.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Notas de estudiantes por materia
// Filas: estudiantes, Columnas: Matemáticas, Historia, Ciencias
let notasEstudiantes = [
  [85, 90, 78],  // Ana
  [92, 75, 88],  // Carlos
  [70, 95, 82],  // María
];

// Acceder a notas específicas
console.log(notasEstudiantes[0]);     // → [85, 90, 78] (notas de Ana)
console.log(notasEstudiantes[0][0]); // → 85 (Ana en Matemáticas)
console.log(notasEstudiantes[1][2]); // → 88 (Carlos en Ciencias)
console.log(notasEstudiantes[2][1]); // → 95 (María en Historia)

// Recorrer: promedio de cada estudiante
let nombres = ["Ana", "Carlos", "María"];
for (let i = 0; i < notasEstudiantes.length; i++) {
  let fila = notasEstudiantes[i];
  let suma = 0;
  for (let nota of fila) {
    suma += nota;
  }
  let promedio = suma / fila.length;
  console.log(\`\${nombres[i]}: promedio = \${promedio.toFixed(1)}\`);
}

// Horario de clases
let horario = [
  ["Matemáticas", "Historia"],   // Lunes
  ["Ciencias", "Arte"],           // Martes
  ["Inglés", "Educación Física"], // Miércoles
];

console.log("Clase del martes por la tarde:", horario[1][1]); // → "Arte"`,
    keyPoints: [
      'Un array anidado es un array que contiene otros arrays como elementos.',
      'Se accede con dos índices: array[fila][columna].',
      'Para recorrer arrays anidados se usan dos bucles anidados.',
      'Son útiles para representar tablas, matrices o datos bidimensionales.',
      'array[i] devuelve la fila completa (que es otro array).',
      'Cada fila puede tener una longitud diferente (no tiene que ser simétrico).',
    ],
    exercise: {
      description:
        'Crea un array anidado llamado equipos con 3 equipos. Cada equipo es un array con 3 nombres de jugadores. Luego: 1) muestra el primer jugador del primer equipo, 2) muestra el último jugador del segundo equipo, 3) recorre todos los equipos con un for anidado y muestra "Equipo X — Jugador: nombre".',
      hint: 'let equipos = [["Juan", "Pedro", "Luis"], ["Ana", "Rosa", "Carmen"], ["Carlos", "Miguel", "Tomás"]]. Para el último del segundo equipo: equipos[1][2].',
    },
    quiz: [
      {
        question: 'Dado: let m = [[1,2],[3,4],[5,6]];\n¿Qué devuelve m[2][0]?',
        options: ['5', '6', '3', 'undefined'],
        correctAnswer: '5',
        correctFeedback:
          'Correcto. m[2] es la tercera fila [5,6], y m[2][0] es el primer elemento de esa fila: 5.',
        incorrectFeedback:
          'Incorrecto. m[2] accede a la tercera fila (índice 2): [5, 6]. Luego [0] accede al primer elemento de esa fila: 5.',
      },
      {
        question: '¿Cuántos bucles necesitas para recorrer todos los elementos de un array de dos dimensiones?',
        options: ['Uno', 'Dos', 'Tres', 'Depende del tamaño del array'],
        correctAnswer: 'Dos',
        correctFeedback:
          'Correcto. El bucle exterior recorre las filas y el bucle interior recorre los elementos de cada fila.',
        incorrectFeedback:
          'Incorrecto. Para un array de dos dimensiones (array de arrays) necesitas dos bucles anidados: uno para las filas y otro para los elementos dentro de cada fila.',
      },
      {
        question: 'Dado: let tabla = [["a","b"],["c","d"]]\n¿Qué devuelve tabla[1]?',
        options: [
          '"c"',
          '"d"',
          '["c","d"]',
          'undefined',
        ],
        correctAnswer: '["c","d"]',
        correctFeedback:
          'Correcto. tabla[1] devuelve la segunda fila completa, que es el array ["c","d"].',
        incorrectFeedback:
          'Incorrecto. tabla[1] accede al segundo elemento del array exterior, que es ["c","d"] (otro array completo). Para acceder a "c" necesitarías tabla[1][0].',
      },
      {
        question: '¿Para qué son útiles los arrays anidados?',
        options: [
          'Solo para almacenar números',
          'Para representar tablas o datos bidimensionales como matrices',
          'Para crear funciones más rápidas',
          'No son útiles en JavaScript moderno',
        ],
        correctAnswer: 'Para representar tablas o datos bidimensionales como matrices',
        correctFeedback:
          'Correcto. Los arrays anidados son ideales para tablas de datos, matrices matemáticas, tableros de juego, horarios, etc.',
        incorrectFeedback:
          'Incorrecto. Los arrays anidados representan datos con dos dimensiones: filas y columnas. Son muy útiles para tablas, matrices, horarios y cualquier dato con estructura de cuadrícula.',
      },
    ],
  },

  // ── Lección 43 ────────────────────────────────────────────────────────────
  {
    slug: 'errores-comunes-arrays',
    title: 'Errores comunes con arrays',
    module: 'Arrays',
    moduleNumber: 6,
    order: 43,
    description:
      'Aprende a evitar errores comunes como acceder a índices inexistentes, modificar el array incorrecto o confundir métodos que mutan y no mutan.',
    explanation: `Los arrays son simples de usar pero tienen trampas clásicas que engañan a casi todos los principiantes. Conocerlas te ahorrará horas de debugging.

**Error 1: Índice fuera de rango**
\`\`\`js
let items = ["a", "b", "c"];
console.log(items[3]); // → undefined (no "c"!)
// El último índice válido es length - 1 = 2
\`\`\`

**Error 2: Confundir el índice con el valor**
\`\`\`js
let frutas = ["manzana", "pera", "uva"];
// INCORRECTO: buscar por valor en el índice
if (frutas[0] === "pera") { ... } // frutas[0] es "manzana"
// CORRECTO: usar indexOf o includes
if (frutas.includes("pera")) { ... } // ✓
\`\`\`

**Error 3: Olvidar que los métodos mutadores cambian el original**
\`\`\`js
let original = [1, 2, 3];
original.push(4); // MUTA el array
// original ahora es [1, 2, 3, 4] — ya no es el "original"
\`\`\`

**Error 4: Confundir length con el último índice**
\`\`\`js
let nums = [10, 20, 30];
// length es 3, pero el último ÍNDICE es 2 (length - 1)
console.log(nums[nums.length]);     // → undefined ❌
console.log(nums[nums.length - 1]); // → 30 ✓
\`\`\`

**Error 5: Comparar arrays con ===**
\`\`\`js
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a === b); // → false (son objetos distintos en memoria)
// Para comparar contenido, compara elemento a elemento o convierte a JSON
console.log(JSON.stringify(a) === JSON.stringify(b)); // → true
\`\`\`

**Error 6: Modificar el array que estás recorriendo**

Evita hacer push/pop dentro de un forEach o for...of sobre el mismo array — puede causar comportamiento inesperado. Si necesitas filtrar, crea un array nuevo.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── Error 1: índice fuera de rango ────────────────────────────────────────
let estudiantes = ["Ana", "Carlos", "María"];
console.log(estudiantes[3]); // → undefined (¡no existe el índice 3!)
console.log(estudiantes[2]); // → "María" (último válido)

// ── Error 2: confundir length con último índice ───────────────────────────
let notas = [85, 90, 78];
console.log(notas.length);          // → 3
console.log(notas[notas.length]);    // → undefined ❌
console.log(notas[notas.length - 1]); // → 78 ✓

// ── Error 3: olvidar que push() muta el original ──────────────────────────
let listaOriginal = ["tarea1", "tarea2"];
listaOriginal.push("tarea3");
// Ya no hay forma de recuperar el original sin haberlo copiado antes
console.log(listaOriginal); // → ["tarea1", "tarea2", "tarea3"]

// SOLUCIÓN: copiar antes de mutar
let listaCopia = [...listaOriginal]; // spread operator hace una copia superficial
listaCopia.push("tarea4");
console.log(listaOriginal); // → ["tarea1", "tarea2", "tarea3"] (intacto)
console.log(listaCopia);    // → ["tarea1", "tarea2", "tarea3", "tarea4"]

// ── Error 4: comparar arrays con === ─────────────────────────────────────
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a === b);                              // → false ❌
console.log(JSON.stringify(a) === JSON.stringify(b)); // → true ✓

// ── Correcto: verificar existencia con includes antes de acceder ──────────
let categorias = ["ropa", "tecnología", "hogar"];
let busqueda = "deportes";
if (categorias.includes(busqueda)) {
  console.log("Categoría encontrada");
} else {
  console.log("Categoría no disponible"); // → este mensaje
}`,
    keyPoints: [
      'El último índice válido es array.length - 1, no array.length.',
      'Acceder a un índice inexistente devuelve undefined, no un error.',
      'push(), pop(), shift() y unshift() mutan el original — ten cuidado.',
      'Para comparar dos arrays, no uses === (compara referencias, no contenido).',
      'Usa includes() o indexOf() para buscar elementos, no un índice hardcodeado.',
      'Si necesitas conservar el original, haz una copia con [...array] antes de mutar.',
    ],
    exercise: {
      description:
        'Escribe código que demuestre cada error y su solución: 1) Intenta acceder al índice igual a .length y muestra que es undefined. Luego corrige con length - 1. 2) Crea un array, haz una copia con spread [...arr], agrega un elemento a la copia y verifica que el original no cambió. 3) Compara dos arrays iguales con === (muestra false) y luego con JSON.stringify (muestra true).',
      hint: 'Para copiar: let copia = [...original]. Para comparar: JSON.stringify(a) === JSON.stringify(b).',
    },
    quiz: [
      {
        question: 'Dado: let arr = ["x", "y", "z"];\nconsole.log(arr[arr.length]);\n\n¿Qué imprime?',
        options: ['"z"', 'Error', 'undefined', '3'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. arr.length es 3, pero el índice 3 no existe (el último válido es 2). JavaScript devuelve undefined sin lanzar error.',
        incorrectFeedback:
          'Incorrecto. arr.length vale 3, y arr[3] no existe (los índices van de 0 a 2). JavaScript devuelve undefined en lugar de lanzar un error.',
      },
      {
        question: '¿Qué resultado tiene esta comparación?\n\nconsole.log([1, 2] === [1, 2]);',
        options: ['true', 'false', 'Error', 'undefined'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. En JavaScript, los arrays son objetos y === compara referencias de memoria, no contenido. Son dos objetos distintos, así que el resultado es false.',
        incorrectFeedback:
          'Incorrecto. En JavaScript, los arrays son objetos y === compara si apuntan a la misma referencia en memoria. [1, 2] y [1, 2] son dos objetos distintos, así que el resultado es false aunque tengan el mismo contenido.',
      },
      {
        question: '¿Cuál es la forma correcta de hacer una copia superficial de un array para no mutar el original?',
        options: [
          'let copia = array',
          'let copia = array.copy()',
          'let copia = [...array]',
          'let copia = array.clone()',
        ],
        correctAnswer: 'let copia = [...array]',
        correctFeedback:
          'Correcto. El operador spread [...array] crea una copia superficial del array. .copy() y .clone() no existen en JavaScript.',
        incorrectFeedback:
          'Incorrecto. let copia = array no copia el array, solo crea otra referencia al mismo objeto. .copy() y .clone() no existen. La forma correcta es [...array].',
      },
      {
        question: '¿Qué método deberías usar para saber si "JavaScript" está dentro de un array de lenguajes?',
        options: [
          'lenguajes[0] === "JavaScript"',
          'lenguajes.includes("JavaScript")',
          'lenguajes.length > 0',
          'lenguajes.indexOf > 0',
        ],
        correctAnswer: 'lenguajes.includes("JavaScript")',
        correctFeedback:
          'Correcto. includes() busca si el elemento existe en cualquier posición del array y devuelve true/false.',
        incorrectFeedback:
          'Incorrecto. lenguajes[0] === "JavaScript" solo revisa la primera posición. La forma correcta es lenguajes.includes("JavaScript"), que busca en todo el array.',
      },
      {
        question: '¿Cuál es el riesgo de hacer push() dentro de un forEach() sobre el mismo array?',
        options: [
          'No hay riesgo, funciona perfectamente',
          'Puede causar un bucle infinito o comportamiento inesperado',
          'forEach() lanzará un error inmediatamente',
          'El push() simplemente no funcionará',
        ],
        correctAnswer: 'Puede causar un bucle infinito o comportamiento inesperado',
        correctFeedback:
          'Correcto. Modificar el array que estás recorriendo puede causar comportamiento impredecible. Lo más seguro es crear un nuevo array con los resultados.',
        incorrectFeedback:
          'Incorrecto. Modificar el array mientras lo recorres es peligroso: puede causar bucles infinitos o saltarse elementos. La práctica segura es crear un array separado con los resultados.',
      },
    ],
  },
]

export const jsModule6: Module = {
  number: 6,
  title: 'Arrays',
  level: 'nivel2',
  lessons: lessonsJsModule6,
}
