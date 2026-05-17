import type { Lesson, Module } from '@/types'

export const lessonsJsModule10: Lesson[] = [
  // ── Lección 67 ────────────────────────────────────────────────────────────
  {
    slug: 'introduccion-metodos-modernos-arrays',
    title: 'Introducción a métodos modernos de arrays',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 67,
    description:
      'Aprende por qué métodos como map(), filter(), find() y reduce() hacen que trabajar con arrays sea más práctico.',
    explanation: `Los métodos modernos de arrays son una de las características más poderosas de JavaScript. En lugar de escribir bucles for manualmente para cada operación, tienes herramientas especializadas que hacen el código más corto, más legible y más expresivo.

**El problema con los bucles manuales**
\`\`\`js
// ¿Qué hace este código? Hay que leerlo todo para entenderlo:
let resultado = [];
for (let i = 0; i < productos.length; i++) {
  if (productos[i].precio < 100) {
    resultado.push(productos[i].nombre);
  }
}
\`\`\`

**La versión moderna: intención clara en una línea**
\`\`\`js
// Ahora el código dice lo que hace:
let resultado = productos
  .filter(p => p.precio < 100)
  .map(p => p.nombre);
\`\`\`

**Los métodos que aprenderás en este módulo**

| Método | ¿Qué hace? |
|--------|------------|
| \`forEach()\` | Recorre cada elemento (sin devolver nada) |
| \`map()\` | Transforma cada elemento → nuevo array |
| \`filter()\` | Filtra elementos según condición |
| \`find()\` | Devuelve el primer elemento que cumple algo |
| \`some()\` | ¿Algún elemento cumple la condición? |
| \`every()\` | ¿Todos los elementos cumplen la condición? |
| \`reduce()\` | Acumula todos los elementos en un solo valor |

**¿Por qué usarlos?**

- El código describe la **intención**, no el mecanismo.
- Menos errores: no hay índices \`i\`, no hay \`push()\` manual.
- Se pueden encadenar: \`.filter().map().reduce()\`.
- Son estándar en todo JavaScript moderno (React, Node, APIs).

Todos estos métodos reciben una **función callback** como argumento. Esa función se ejecuta una vez por cada elemento del array.`,
    codeExample: `// ── comparacion.js ───────────────────────────────────────────────────────

let productos = [
  { nombre: "Teclado", precio: 85, categoria: "tech" },
  { nombre: "Monitor", precio: 350, categoria: "tech" },
  { nombre: "Silla", precio: 120, categoria: "oficina" },
  { nombre: "Cable USB", precio: 12, categoria: "tech" },
  { nombre: "Lámpara", precio: 45, categoria: "oficina" },
];

// ── Estilo antiguo (bucles for) ───────────────────────────────────────────

// Filtrar productos tech bajo $100
let techBaratos = [];
for (let i = 0; i < productos.length; i++) {
  if (productos[i].categoria === "tech" && productos[i].precio < 100) {
    techBaratos.push(productos[i].nombre);
  }
}
console.log("Estilo antiguo:", techBaratos);
// → ["Teclado", "Cable USB"]

// ── Estilo moderno (métodos funcionales) ──────────────────────────────────

let techBaratosModerno = productos
  .filter(p => p.categoria === "tech" && p.precio < 100)
  .map(p => p.nombre);

console.log("Estilo moderno:", techBaratosModerno);
// → ["Teclado", "Cable USB"]

// ── Más ejemplos ──────────────────────────────────────────────────────────

// ¿Existe algún producto mayor a $300?
let hayCaros = productos.some(p => p.precio > 300);
console.log("¿Hay caros?", hayCaros); // → true

// ¿Todos cuestan más de $10?
let todosMayorDiez = productos.every(p => p.precio > 10);
console.log("¿Todos > $10?", todosMayorDiez); // → true

// Suma total
let total = productos.reduce((acc, p) => acc + p.precio, 0);
console.log("Total:", total); // → 612`,
    keyPoints: [
      'Los métodos modernos reemplazan bucles for con código más expresivo',
      'forEach recorre sin devolver nada; map transforma y devuelve nuevo array',
      'filter selecciona; find busca el primero; some/every verifican condiciones',
      'reduce acumula todos los elementos en un único valor',
      'Todos aceptan una función callback que se ejecuta por cada elemento',
      'Se pueden encadenar: .filter().map().reduce()',
    ],
    exercise: {
      description:
        'Tienes un array de estudiantes con nombre y calificación. Usa los métodos modernos para: (1) filtrar los que aprobaron (>= 60), (2) obtener solo sus nombres, (3) verificar si alguno sacó 100.',
      hint: 'Encadena .filter() y .map() para los primeros dos pasos. Usa .some() para el tercero.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal ventaja de los métodos modernos de arrays?',
        options: ['Son más rápidos que los bucles for', 'El código describe la intención y es más legible', 'No requieren funciones callback', 'Solo funcionan con números'],
        correctAnswer: 'El código describe la intención y es más legible',
        correctFeedback: '¡Correcto! La legibilidad y expresividad son la gran ventaja.',
        incorrectFeedback: 'No exactamente. La principal ventaja es que el código describe lo que hace (intención) en lugar de cómo lo hace (mecanismo).',
      },
      {
        question: '¿Qué tienen en común forEach, map, filter, find, some, every y reduce?',
        options: ['Todos devuelven un array', 'Todos reciben una función callback como argumento', 'Todos modifican el array original', 'Todos requieren un índice'],
        correctAnswer: 'Todos reciben una función callback como argumento',
        correctFeedback: '¡Exacto! Cada uno acepta un callback que se ejecuta por cada elemento.',
        incorrectFeedback: 'Incorrecto. Lo que tienen en común es que todos reciben una función callback.',
      },
      {
        question: '¿Qué método usarías para obtener los precios de todos los productos de un array de objetos?',
        options: ['filter()', 'forEach()', 'map()', 'find()'],
        correctAnswer: 'map()',
        correctFeedback: '¡Correcto! map() transforma cada elemento y devuelve un nuevo array.',
        incorrectFeedback: 'No es correcto. map() es el indicado para transformar (extraer un campo de) cada elemento.',
      },
      {
        question: '¿Es posible encadenar métodos modernos como .filter().map()?',
        options: ['No, cada método debe usarse por separado', 'Sí, porque cada método devuelve un array (excepto algunos)', 'Solo se pueden encadenar dos métodos', 'Solo en navegadores modernos'],
        correctAnswer: 'Sí, porque cada método devuelve un array (excepto algunos)',
        correctFeedback: '¡Correcto! Métodos como filter y map devuelven arrays, por lo que se pueden encadenar.',
        incorrectFeedback: 'Incorrecto. Se pueden encadenar porque filter y map devuelven nuevos arrays.',
      },
    ],
  },

  // ── Lección 68 ────────────────────────────────────────────────────────────
  {
    slug: 'foreach-javascript',
    title: 'forEach: recorrer sin bucles manuales',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 68,
    description:
      'Aprende a usar forEach() para ejecutar código por cada elemento de un array sin escribir un bucle for.',
    explanation: `forEach() ejecuta una función una vez por cada elemento del array. Es el reemplazo directo del bucle \`for\` cuando solo quieres recorrer y hacer algo (no necesitas el resultado).

**Sintaxis básica**
\`\`\`js
array.forEach((elemento) => {
  // código que se ejecuta por cada elemento
});
\`\`\`

**Con índice disponible**
\`\`\`js
array.forEach((elemento, indice) => {
  console.log(indice, elemento);
});
\`\`\`

**Ejemplo simple**
\`\`\`js
let frutas = ["manzana", "naranja", "uva"];
frutas.forEach((fruta) => {
  console.log("•", fruta);
});
\`\`\`

**Con índice**
\`\`\`js
frutas.forEach((fruta, i) => {
  console.log(i + 1, ".", fruta);
});
// → 1 . manzana
// → 2 . naranja
// → 3 . uva
\`\`\`

**¿Qué devuelve forEach()?**

Siempre devuelve \`undefined\`. No lo uses cuando necesitas el resultado:
\`\`\`js
let resultado = ["a", "b"].forEach(x => x); // resultado = undefined
\`\`\`

**Diferencia con for...of**

- \`for...of\` soporta \`break\` y \`continue\`.
- \`forEach()\` no soporta \`break\`: siempre recorre todos los elementos.
- Si necesitas detener el recorrido, usa \`for...of\` o \`for\` clásico.

**Uso práctico**

forEach es ideal para efectos secundarios: imprimir, actualizar la UI, enviar peticiones, etc. Cuando necesitas el resultado de la transformación, usa map().`,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

let pedidos = [
  { id: "ORD-001", cliente: "Ana", total: 1200, pagado: true },
  { id: "ORD-002", cliente: "Carlos", total: 85, pagado: false },
  { id: "ORD-003", cliente: "María", total: 350, pagado: true },
  { id: "ORD-004", cliente: "Luis", total: 60, pagado: false },
];

// forEach básico: mostrar todos los pedidos
console.log("=== Todos los pedidos ===");
pedidos.forEach((pedido) => {
  let estado = pedido.pagado ? "✓ Pagado" : "✗ Pendiente";
  console.log(\`[\${pedido.id}] \${pedido.cliente}: $\${pedido.total} — \${estado}\`);
});

// forEach con índice
console.log("\\n=== Pedidos numerados ===");
pedidos.forEach((pedido, i) => {
  console.log(\`\${i + 1}. \${pedido.cliente}\`);
});

// forEach para calcular (efecto secundario)
let totalGeneral = 0;
pedidos.forEach((pedido) => {
  totalGeneral += pedido.total;
});
console.log("\\nTotal general: $" + totalGeneral); // → $1695

// forEach devuelve undefined — no lo uses para transformar
let intento = pedidos.forEach(p => p.cliente);
console.log(intento); // → undefined (no sirve para esto, usa map)`,
    keyPoints: [
      'forEach ejecuta un callback por cada elemento del array',
      'Recibe (elemento, índice, array) como parámetros del callback',
      'Siempre devuelve undefined — no es posible usarlo para crear un nuevo array',
      'No soporta break ni continue — recorre todos los elementos siempre',
      'Ideal para efectos secundarios: imprimir, actualizar variables, etc.',
      'Si necesitas transformar, usa map(); si necesitas filtrar, usa filter()',
    ],
    exercise: {
      description:
        'Dado un array de temperaturas en Celsius, usa forEach para imprimir cada temperatura también convertida a Fahrenheit (F = C * 9/5 + 32).',
      hint: 'forEach((temp, i) => { ... }) te da el valor y el índice. La conversión es: temp * 9/5 + 32.',
    },
    quiz: [
      {
        question: '¿Qué devuelve forEach()?',
        options: ['El array original', 'Un nuevo array con los resultados', 'undefined', 'El último elemento procesado'],
        correctAnswer: 'undefined',
        correctFeedback: '¡Correcto! forEach siempre devuelve undefined.',
        incorrectFeedback: 'Incorrecto. forEach siempre devuelve undefined, no el array ni los resultados.',
      },
      {
        question: '¿Cuáles son los parámetros disponibles en el callback de forEach?',
        options: ['Solo el elemento', 'Elemento e índice', 'Elemento, índice y el array completo', 'Solo el índice'],
        correctAnswer: 'Elemento, índice y el array completo',
        correctFeedback: '¡Exacto! El callback recibe (elemento, índice, array).',
        incorrectFeedback: 'No es del todo correcto. El callback puede recibir hasta tres parámetros: elemento, índice y el array.',
      },
      {
        question: '¿Puedes usar break dentro de un forEach para detener el recorrido?',
        options: ['Sí, igual que en un for', 'No, forEach siempre recorre todos los elementos', 'Sí, pero solo en navegadores modernos', 'Solo si usas return false'],
        correctAnswer: 'No, forEach siempre recorre todos los elementos',
        correctFeedback: '¡Correcto! forEach no soporta break. Para eso usa for...of.',
        incorrectFeedback: 'Incorrecto. forEach no soporta break — siempre recorre el array completo.',
      },
      {
        question: '¿Cuándo es mejor usar forEach en lugar de map?',
        options: ['Cuando necesitas transformar cada elemento', 'Cuando necesitas un nuevo array', 'Cuando solo quieres hacer algo con cada elemento sin necesitar resultado', 'Cuando necesitas filtrar elementos'],
        correctAnswer: 'Cuando solo quieres hacer algo con cada elemento sin necesitar resultado',
        correctFeedback: '¡Correcto! forEach es ideal para efectos secundarios donde no necesitas el resultado.',
        incorrectFeedback: 'Incorrecto. forEach es para cuando no necesitas el resultado. Si necesitas transformar, usa map.',
      },
    ],
  },

  // ── Lección 69 ────────────────────────────────────────────────────────────
  {
    slug: 'map-javascript',
    title: 'map: transformar arrays',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 69,
    description:
      'Aprende a usar map() para transformar cada elemento de un array y obtener un nuevo array con los resultados.',
    explanation: `map() transforma cada elemento de un array aplicando una función y devuelve un **nuevo array** con los resultados. El array original no se modifica.

**Sintaxis**
\`\`\`js
let nuevoArray = array.map((elemento) => {
  return valorTransformado;
});
\`\`\`

O en forma compacta con arrow function:
\`\`\`js
let nuevoArray = array.map(elemento => valorTransformado);
\`\`\`

**Ejemplo básico: números**
\`\`\`js
let precios = [100, 200, 350];
let conDescuento = precios.map(p => p * 0.9);
console.log(conDescuento); // → [90, 180, 315]
console.log(precios);      // → [100, 200, 350] (sin cambios)
\`\`\`

**Ejemplo con objetos: extraer un campo**
\`\`\`js
let usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 },
];
let nombres = usuarios.map(u => u.nombre);
console.log(nombres); // → ["Ana", "Carlos"]
\`\`\`

**Ejemplo con objetos: transformar estructura**
\`\`\`js
let productos = [
  { nombre: "Teclado", precio: 100 },
  { nombre: "Mouse", precio: 50 },
];
let conIVA = productos.map(p => ({
  nombre: p.nombre,
  precioConIVA: p.precio * 1.16,
}));
\`\`\`

**Regla clave:** El array resultante siempre tiene la **misma cantidad de elementos** que el original. Si tienes 5 elementos, map devuelve 5 elementos transformados.

map es la herramienta principal para transformar datos en JavaScript moderno.`,
    codeExample: `// ── transformaciones.js ──────────────────────────────────────────────────

let empleados = [
  { id: 1, nombre: "Ana García", salario: 2500, departamento: "tech" },
  { id: 2, nombre: "Carlos López", salario: 1800, departamento: "ventas" },
  { id: 3, nombre: "María Ruiz", salario: 3200, departamento: "tech" },
  { id: 4, nombre: "Luis Mora", salario: 2100, departamento: "ventas" },
];

// Extraer solo nombres
let nombres = empleados.map(e => e.nombre);
console.log(nombres);
// → ["Ana García", "Carlos López", "María Ruiz", "Luis Mora"]

// Calcular salario con bono del 10%
let salariosBono = empleados.map(e => ({
  nombre: e.nombre,
  salarioConBono: e.salario * 1.1,
}));
console.log(salariosBono);
// → [{ nombre: "Ana García", salarioConBono: 2750 }, ...]

// Crear etiquetas de empleado
let etiquetas = empleados.map((e, i) =>
  \`#\${i + 1} - \${e.nombre} [\${e.departamento.toUpperCase()}]\`
);
console.log(etiquetas);
// → ["#1 - Ana García [TECH]", "#2 - Carlos López [VENTAS]", ...]

// Convertir a mayúsculas
let mayusculas = nombres.map(n => n.toUpperCase());
console.log(mayusculas);
// → ["ANA GARCÍA", "CARLOS LÓPEZ", "MARÍA RUIZ", "LUIS MORA"]

// El original nunca cambia
console.log(empleados[0].nombre); // → "Ana García" (intacto)`,
    keyPoints: [
      'map transforma cada elemento y devuelve un nuevo array del mismo tamaño',
      'El array original nunca se modifica',
      'El callback debe retornar el valor transformado',
      'Funciona con cualquier tipo: números, strings, objetos',
      'Para transformar objetos usa ({ ... }) con paréntesis alrededor de las llaves en arrow functions',
      'map + filter se encadenan frecuentemente para filtrar y transformar',
    ],
    exercise: {
      description:
        'Dado un array de temperaturas en Celsius, usa map() para crear un nuevo array con objetos { celsius, fahrenheit } para cada temperatura. La fórmula es: fahrenheit = celsius * 9/5 + 32.',
      hint: 'map(temp => ({ celsius: temp, fahrenheit: temp * 9/5 + 32 })) — nota los paréntesis alrededor del objeto.',
    },
    quiz: [
      {
        question: '¿Cuántos elementos devuelve map() si el array original tiene 5 elementos?',
        options: ['Depende de la condición', 'Siempre 5', 'Puede variar', 'Solo los que cumplen la condición'],
        correctAnswer: 'Siempre 5',
        correctFeedback: '¡Correcto! map siempre devuelve un array con la misma cantidad de elementos.',
        incorrectFeedback: 'Incorrecto. map siempre devuelve un array del mismo tamaño que el original.',
      },
      {
        question: '¿map() modifica el array original?',
        options: ['Sí, lo modifica en su lugar', 'No, crea y devuelve un nuevo array', 'Solo si usas return', 'Depende del tipo de dato'],
        correctAnswer: 'No, crea y devuelve un nuevo array',
        correctFeedback: '¡Exacto! map nunca modifica el original, siempre devuelve un nuevo array.',
        incorrectFeedback: 'Incorrecto. map nunca modifica el array original, devuelve uno nuevo.',
      },
      {
        question: '¿Qué debe hacer el callback de map()?',
        options: ['Imprimir el elemento', 'Retornar el valor transformado', 'Modificar el elemento original', 'Filtrar el elemento'],
        correctAnswer: 'Retornar el valor transformado',
        correctFeedback: '¡Correcto! El callback de map debe retornar el nuevo valor para ese elemento.',
        incorrectFeedback: 'Incorrecto. El callback de map debe retornar el valor transformado para ese elemento.',
      },
      {
        question: 'Al usar arrow function con objeto en map, ¿por qué se usan paréntesis? ej: map(x => ({ a: 1 }))',
        options: ['Es solo una convención de estilo', 'Para que JS no confunda las llaves con un bloque de código', 'Porque los objetos requieren paréntesis en JS', 'Para mejorar el rendimiento'],
        correctAnswer: 'Para que JS no confunda las llaves con un bloque de código',
        correctFeedback: '¡Correcto! Sin los paréntesis, JS interpreta {} como bloque de código, no como objeto.',
        incorrectFeedback: 'Incorrecto. Los paréntesis son necesarios para que JS interprete {} como un objeto literal y no como un bloque.',
      },
    ],
  },

  // ── Lección 70 ────────────────────────────────────────────────────────────
  {
    slug: 'filter-javascript',
    title: 'filter: seleccionar elementos',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 70,
    description:
      'Aprende a usar filter() para seleccionar solo los elementos de un array que cumplen una condición.',
    explanation: `filter() recorre el array y devuelve un **nuevo array** que contiene solo los elementos para los que la función callback devuelve \`true\`. Los demás elementos son ignorados.

**Sintaxis**
\`\`\`js
let resultado = array.filter((elemento) => {
  return condicion; // true = incluir, false = excluir
});
\`\`\`

**Ejemplo básico: números**
\`\`\`js
let numeros = [1, 5, 12, 3, 20, 8];
let mayoresDiez = numeros.filter(n => n > 10);
console.log(mayoresDiez); // → [12, 20]
\`\`\`

**Ejemplo con strings**
\`\`\`js
let palabras = ["sol", "luna", "estrella", "mar", "montaña"];
let largas = palabras.filter(p => p.length > 4);
console.log(largas); // → ["estrella", "montaña"]
\`\`\`

**Ejemplo con objetos**
\`\`\`js
let productos = [
  { nombre: "Teclado", precio: 85, disponible: true },
  { nombre: "Monitor", precio: 350, disponible: false },
  { nombre: "Mouse", precio: 40, disponible: true },
];
let disponibles = productos.filter(p => p.disponible);
console.log(disponibles); // → [Teclado, Mouse]
\`\`\`

**Diferencia con map**

- \`map\`: mismo número de elementos, cada uno transformado.
- \`filter\`: puede tener menos elementos (los que pasan la condición), sin transformar.

**Combinación común: filter + map**
\`\`\`js
// Nombres de productos disponibles bajo $100
let nombres = productos
  .filter(p => p.disponible && p.precio < 100)
  .map(p => p.nombre);
\`\`\`

El array resultante puede tener **0 o más elementos** dependiendo de cuántos pasen la condición.`,
    codeExample: `// ── inventario.js ────────────────────────────────────────────────────────

let inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "tech", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 85, categoria: "tech", stock: 0 },
  { id: 3, nombre: "Silla ergonómica", precio: 450, categoria: "oficina", stock: 3 },
  { id: 4, nombre: "Monitor 27\"", precio: 380, categoria: "tech", stock: 8 },
  { id: 5, nombre: "Lámpara LED", precio: 35, categoria: "oficina", stock: 12 },
  { id: 6, nombre: "Webcam", precio: 95, categoria: "tech", stock: 0 },
];

// Solo productos disponibles (stock > 0)
let disponibles = inventario.filter(p => p.stock > 0);
console.log("Disponibles:", disponibles.length); // → 4

// Solo categoría tech con stock
let techDisponible = inventario.filter(p => p.categoria === "tech" && p.stock > 0);
console.log("Tech disponible:", techDisponible.map(p => p.nombre));
// → ["Laptop", "Monitor 27\""]

// Productos bajo $100
let economicos = inventario.filter(p => p.precio < 100);
console.log("Económicos:", economicos.map(p => p.nombre));
// → ["Teclado", "Lámpara LED", "Webcam"]

// Filtrar y transformar — los nombres de tech en stock
let techNombres = inventario
  .filter(p => p.categoria === "tech" && p.stock > 0)
  .map(p => p.nombre.toUpperCase());
console.log(techNombres); // → ["LAPTOP", "MONITOR 27\""]

// Sin resultados: array vacío (no es error)
let carísimos = inventario.filter(p => p.precio > 5000);
console.log(carísimos); // → []`,
    keyPoints: [
      'filter devuelve un nuevo array con solo los elementos que cumplen la condición',
      'El callback debe devolver true (incluir) o false (excluir)',
      'El array resultante puede tener menos elementos que el original',
      'Si ningún elemento pasa la condición, devuelve un array vacío []',
      'El array original no se modifica',
      'Se encadena muy bien con map: .filter().map()',
    ],
    exercise: {
      description:
        'Dado un array de estudiantes con nombre y calificación, usa filter() para obtener solo los que aprobaron (calificación >= 60). Luego encadena .map() para obtener solo sus nombres.',
      hint: '.filter(e => e.calificacion >= 60).map(e => e.nombre)',
    },
    quiz: [
      {
        question: '¿Qué devuelve filter() si ningún elemento cumple la condición?',
        options: ['null', 'undefined', 'Un array vacío []', 'Lanza un error'],
        correctAnswer: 'Un array vacío []',
        correctFeedback: '¡Correcto! filter devuelve un array vacío si ningún elemento pasa la condición.',
        incorrectFeedback: 'Incorrecto. filter siempre devuelve un array, vacío si no hay coincidencias.',
      },
      {
        question: '¿Cuántos elementos puede tener el resultado de filter()?',
        options: ['Exactamente los mismos que el original', 'De 0 hasta el mismo número que el original', 'Siempre menos que el original', 'Siempre al menos 1'],
        correctAnswer: 'De 0 hasta el mismo número que el original',
        correctFeedback: '¡Exacto! Puede devolver desde 0 elementos hasta todos los del original.',
        incorrectFeedback: 'Incorrecto. El resultado puede tener entre 0 y el mismo número de elementos que el original.',
      },
      {
        question: '¿Cuál es la diferencia principal entre map() y filter()?',
        options: ['map modifica el original; filter no', 'map transforma cada elemento; filter selecciona elementos', 'filter es más rápido que map', 'No hay diferencia, son equivalentes'],
        correctAnswer: 'map transforma cada elemento; filter selecciona elementos',
        correctFeedback: '¡Correcto! map transforma (mismo número), filter selecciona (puede ser menos).',
        incorrectFeedback: 'Incorrecto. map transforma cada elemento (mismo tamaño), filter selecciona según condición (puede ser menos).',
      },
      {
        question: 'Para obtener los nombres de productos disponibles de un array de objetos, ¿cuál es el orden correcto?',
        options: ['.map(p => p.nombre).filter(p => p.disponible)', '.filter(p => p.disponible).map(p => p.nombre)', '.forEach().filter()', '.reduce().map()'],
        correctAnswer: '.filter(p => p.disponible).map(p => p.nombre)',
        correctFeedback: '¡Correcto! Primero filtras los objetos, luego extraes el campo con map.',
        incorrectFeedback: 'Incorrecto. Debes filtrar primero (para tener los objetos completos) y luego mapear para extraer el nombre.',
      },
    ],
  },

  // ── Lección 71 ────────────────────────────────────────────────────────────
  {
    slug: 'find-javascript',
    title: 'find: buscar un elemento',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 71,
    description:
      'Aprende a usar find() para localizar el primer elemento de un array que cumpla una condición.',
    explanation: `find() busca en el array y devuelve el **primer elemento** que hace que el callback devuelva \`true\`. Si no encuentra ninguno, devuelve \`undefined\`.

**Sintaxis**
\`\`\`js
let elemento = array.find((elemento) => condicion);
\`\`\`

**Diferencia clave con filter:**
- \`filter\` → devuelve **todos** los elementos que cumplen la condición (array).
- \`find\` → devuelve **solo el primero** que cumple (el elemento en sí, no un array).

**Ejemplo básico**
\`\`\`js
let numeros = [3, 7, 12, 5, 20];
let primerMayorDiez = numeros.find(n => n > 10);
console.log(primerMayorDiez); // → 12 (no 20, devuelve el primero)
\`\`\`

**Buscar por ID (caso muy común)**
\`\`\`js
let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "María" },
];
let usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // → { id: 2, nombre: "Carlos" }
console.log(usuario.nombre); // → "Carlos"
\`\`\`

**Cuando no encuentra nada**
\`\`\`js
let noExiste = usuarios.find(u => u.id === 99);
console.log(noExiste); // → undefined

// Verifica antes de usar
if (noExiste) {
  console.log(noExiste.nombre);
} else {
  console.log("No encontrado");
}
\`\`\`

**findIndex: similar pero devuelve el índice**
\`\`\`js
let indice = usuarios.findIndex(u => u.id === 2);
console.log(indice); // → 1 (posición en el array)
\`\`\`

find es la herramienta correcta cuando buscas un elemento específico (como buscar por ID).`,
    codeExample: `// ── busqueda.js ──────────────────────────────────────────────────────────

let productos = [
  { id: "P001", nombre: "Laptop", precio: 1200, disponible: true },
  { id: "P002", nombre: "Teclado", precio: 85, disponible: true },
  { id: "P003", nombre: "Monitor", precio: 350, disponible: false },
  { id: "P004", nombre: "Mouse", precio: 40, disponible: true },
];

// Buscar por ID
let laptop = productos.find(p => p.id === "P001");
console.log(laptop.nombre); // → "Laptop"
console.log(laptop.precio); // → 1200

// Buscar el primer producto no disponible
let agotado = productos.find(p => !p.disponible);
console.log(agotado?.nombre); // → "Monitor"

// Buscar el primer producto bajo $50
let barato = productos.find(p => p.precio < 50);
console.log(barato?.nombre); // → "Mouse"

// ID que no existe → undefined
let fantasma = productos.find(p => p.id === "P999");
console.log(fantasma); // → undefined

// Verificar existencia antes de usar
if (fantasma) {
  console.log(fantasma.nombre);
} else {
  console.log("Producto no encontrado"); // → se imprime esto
}

// findIndex: útil para saber la posición
let indiceMonitor = productos.findIndex(p => p.id === "P003");
console.log("Posición del Monitor:", indiceMonitor); // → 2

// Diferencia find vs filter
let todosDisponibles = productos.filter(p => p.disponible); // array con 3 elementos
let primerDisponible = productos.find(p => p.disponible);   // solo el primero`,
    keyPoints: [
      'find devuelve el primer elemento que cumple la condición, no un array',
      'Si no encuentra ninguno, devuelve undefined',
      'Para buscar por ID u otro identificador único, find es la herramienta ideal',
      'find vs filter: find devuelve un elemento, filter devuelve un array',
      'findIndex devuelve el índice del primer elemento encontrado (-1 si no hay)',
      'Siempre verifica si el resultado es undefined antes de acceder a propiedades',
    ],
    exercise: {
      description:
        'Dado un array de libros con título, autor e ISBN, usa find() para localizar el libro con ISBN "978-0-7432-7356-5". Luego imprime su título y autor. Maneja el caso de que no exista.',
      hint: 'let libro = libros.find(l => l.isbn === "978-0-7432-7356-5"); if (libro) { ... } else { console.log("No encontrado") }',
    },
    quiz: [
      {
        question: '¿Qué devuelve find() cuando encuentra una coincidencia?',
        options: ['Un array con ese elemento', 'El índice del elemento', 'El elemento en sí', 'true'],
        correctAnswer: 'El elemento en sí',
        correctFeedback: '¡Correcto! find devuelve el elemento directamente, no un array.',
        incorrectFeedback: 'Incorrecto. find devuelve el elemento en sí (no un array, no su índice).',
      },
      {
        question: '¿Qué devuelve find() si no encuentra ningún elemento?',
        options: ['-1', 'null', 'false', 'undefined'],
        correctAnswer: 'undefined',
        correctFeedback: '¡Correcto! Si no encuentra nada, find devuelve undefined.',
        incorrectFeedback: 'Incorrecto. find devuelve undefined cuando no encuentra coincidencia.',
      },
      {
        question: 'Si hay tres elementos que cumplen la condición, ¿cuántos devuelve find()?',
        options: ['Los tres, en un array', 'Solo el primero', 'Solo el último', 'Un número aleatorio de ellos'],
        correctAnswer: 'Solo el primero',
        correctFeedback: '¡Exacto! find detiene la búsqueda al encontrar el primer elemento.',
        incorrectFeedback: 'Incorrecto. find siempre devuelve solo el primer elemento que cumple la condición.',
      },
      {
        question: '¿Cuál es el caso de uso más común para find()?',
        options: ['Transformar todos los elementos', 'Buscar un elemento por un identificador único (como ID)', 'Calcular la suma de todos los valores', 'Ordenar el array'],
        correctAnswer: 'Buscar un elemento por un identificador único (como ID)',
        correctFeedback: '¡Correcto! find es perfecta para buscar por ID u otro campo único.',
        incorrectFeedback: 'Incorrecto. El caso más común de find es buscar un elemento específico por un identificador único.',
      },
    ],
  },

  // ── Lección 72 ────────────────────────────────────────────────────────────
  {
    slug: 'some-every-javascript',
    title: 'some y every: verificar condiciones',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 72,
    description:
      'Aprende a usar some() y every() para comprobar si algún o todos los elementos de un array cumplen una condición.',
    explanation: `\`some()\` y \`every()\` evalúan condiciones sobre el array y devuelven un **booleano** (\`true\` o \`false\`).

**some(): ¿existe al menos uno?**
\`\`\`js
let resultado = array.some(elemento => condicion);
// true si AL MENOS UNO cumple la condición
// false si NINGUNO la cumple
\`\`\`

**every(): ¿todos cumplen?**
\`\`\`js
let resultado = array.every(elemento => condicion);
// true si TODOS cumplen la condición
// false si AL MENOS UNO no la cumple
\`\`\`

**Ejemplo básico**
\`\`\`js
let edades = [18, 22, 15, 30, 17];

let hayMenores = edades.some(e => e < 18);
console.log(hayMenores); // → true (15 y 17 son menores)

let todosMayores = edades.every(e => e >= 18);
console.log(todosMayores); // → false (15 y 17 son menores)
\`\`\`

**Rendimiento: se detienen antes**

- \`some()\` para en cuanto encuentra el primer \`true\` (no evalúa el resto).
- \`every()\` para en cuanto encuentra el primer \`false\` (no evalúa el resto).

**Caso con array vacío**
\`\`\`js
[].some(x => x > 0);  // → false (vacío: ninguno cumple)
[].every(x => x > 0); // → true  (vacío: no hay nadie que no cumpla)
\`\`\`

**Uso práctico: validación de formulario**
\`\`\`js
let campos = ["nombre", "email", "contraseña"];
let valoresRellenados = ["Ana", "", "abc123"];
let todosRellenos = valoresRellenados.every(v => v.trim() !== "");
// → false (email está vacío)
\`\`\``,
    codeExample: `// ── validaciones.js ──────────────────────────────────────────────────────

let carrito = [
  { producto: "Laptop", precio: 1200, disponible: true },
  { producto: "Teclado", precio: 85, disponible: true },
  { producto: "Cable HDMI", precio: 15, disponible: true },
  { producto: "Monitor", precio: 350, disponible: false },
];

// ¿Algún producto no disponible?
let hayAgotados = carrito.some(item => !item.disponible);
console.log("¿Hay agotados?", hayAgotados); // → true

// ¿Todos disponibles?
let todosDisponibles = carrito.every(item => item.disponible);
console.log("¿Todos disponibles?", todosDisponibles); // → false

// ¿Alguno supera $500?
let hayCaros = carrito.some(item => item.precio > 500);
console.log("¿Hay caros?", hayCaros); // → true

// ¿Todos cuestan más de $10?
let todosBajoCien = carrito.every(item => item.precio > 10);
console.log("¿Todos > $10?", todosBajoCien); // → true

// Caso práctico: validar pedido antes de enviar
let puedoComprar = carrito.every(item => item.disponible);
if (puedoComprar) {
  console.log("Pedido listo para procesar");
} else {
  let agotados = carrito.filter(item => !item.disponible).map(i => i.producto);
  console.log("Productos agotados:", agotados); // → ["Monitor"]
}

// some con includes — buscar texto
let terminos = ["laptop", "teclado", "monitor"];
let busqueda = "teclado";
let encontrado = terminos.some(t => t.includes(busqueda));
console.log("¿Encontrado?", encontrado); // → true`,
    keyPoints: [
      'some devuelve true si AL MENOS UN elemento cumple la condición',
      'every devuelve true solo si TODOS los elementos cumplen la condición',
      'Ambos devuelven un booleano (true/false), no un array',
      'some se detiene al encontrar el primer true; every al encontrar el primer false',
      'Array vacío: some → false, every → true',
      'Son ideales para validaciones: ¿hay stock? ¿todos los campos están llenos?',
    ],
    exercise: {
      description:
        'Dado un array de calificaciones de un examen, usa some() para verificar si alguna calificación es reprobatoria (< 60), y every() para verificar si todos pasaron. Imprime mensajes apropiados para cada caso.',
      hint: 'some(c => c < 60) para ver si hay reprobados; every(c => c >= 60) para ver si todos aprobaron.',
    },
    quiz: [
      {
        question: '¿Qué devuelve some() si ningún elemento cumple la condición?',
        options: ['undefined', 'null', 'false', '[]'],
        correctAnswer: 'false',
        correctFeedback: '¡Correcto! some devuelve false si ningún elemento cumple la condición.',
        incorrectFeedback: 'Incorrecto. some devuelve false cuando ningún elemento satisface la condición.',
      },
      {
        question: '¿Qué devuelve every() con un array vacío?',
        options: ['false', 'true', 'undefined', 'Lanza un error'],
        correctAnswer: 'true',
        correctFeedback: '¡Correcto! every sobre un array vacío devuelve true (no hay nadie que falle).',
        incorrectFeedback: 'Incorrecto. every sobre un array vacío devuelve true (vacuamente verdadero: no hay elementos que no cumplan).',
      },
      {
        question: '¿Cuándo se detiene some() en su recorrido?',
        options: ['Al procesar todos los elementos', 'Al encontrar el primer elemento que cumple la condición (true)', 'Al encontrar el primer elemento que no cumple (false)', 'Nunca se detiene antes de terminar'],
        correctAnswer: 'Al encontrar el primer elemento que cumple la condición (true)',
        correctFeedback: '¡Correcto! some se detiene al encontrar el primer true — no evalúa el resto.',
        incorrectFeedback: 'Incorrecto. some se detiene en cuanto encuentra el primer elemento que cumple (true).',
      },
      {
        question: '¿Cuál es el tipo de dato que devuelven some() y every()?',
        options: ['Array', 'Number', 'Boolean (true o false)', 'String'],
        correctAnswer: 'Boolean (true o false)',
        correctFeedback: '¡Exacto! Ambos devuelven un valor booleano.',
        incorrectFeedback: 'Incorrecto. Ambos devuelven un booleano: true o false.',
      },
    ],
  },

  // ── Lección 73 ────────────────────────────────────────────────────────────
  {
    slug: 'reduce-javascript',
    title: 'reduce: acumular valores',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 73,
    description:
      'Aprende a usar reduce() para acumular todos los elementos de un array en un único valor: suma, conteo, objeto, etc.',
    explanation: `reduce() es el método más flexible de todos. Recorre el array y acumula un resultado que va construyendo elemento por elemento, hasta devolver un **único valor final**.

**Sintaxis**
\`\`\`js
let resultado = array.reduce((acumulador, elemento) => {
  return nuevoAcumulador;
}, valorInicial);
\`\`\`

- **acumulador**: el valor que se va construyendo (empieza como \`valorInicial\`).
- **elemento**: el elemento actual del array.
- **valorInicial**: el punto de partida del acumulador.

**Ejemplo básico: sumar**
\`\`\`js
let precios = [100, 200, 50, 80];
let total = precios.reduce((acc, precio) => acc + precio, 0);
console.log(total); // → 430
\`\`\`

**Contar elementos que cumplen condición**
\`\`\`js
let edades = [18, 15, 22, 17, 30];
let adultos = edades.reduce((acc, edad) => {
  return edad >= 18 ? acc + 1 : acc;
}, 0);
console.log(adultos); // → 3
\`\`\`

**Acumular en un objeto**
\`\`\`js
let frutas = ["manzana", "pera", "manzana", "uva", "pera", "manzana"];
let conteo = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log(conteo); // → { manzana: 3, pera: 2, uva: 1 }
\`\`\`

**La regla de oro de reduce:**

Siempre especifica el valor inicial (segundo argumento). Sin él, el primer elemento se usa como acumulador y puede causar errores con arrays vacíos o de objetos.`,
    codeExample: `// ── estadisticas.js ──────────────────────────────────────────────────────

let ventas = [
  { producto: "Laptop", categoria: "tech", monto: 1200 },
  { producto: "Silla", categoria: "oficina", monto: 450 },
  { producto: "Teclado", categoria: "tech", monto: 85 },
  { producto: "Lámpara", categoria: "oficina", monto: 35 },
  { producto: "Monitor", categoria: "tech", monto: 380 },
];

// Suma total de ventas
let totalVentas = ventas.reduce((acc, v) => acc + v.monto, 0);
console.log("Total:", totalVentas); // → 2150

// Encontrar el monto máximo
let montoMax = ventas.reduce((max, v) => v.monto > max ? v.monto : max, 0);
console.log("Máximo:", montoMax); // → 1200

// Agrupar montos por categoría
let porCategoria = ventas.reduce((acc, v) => {
  if (!acc[v.categoria]) {
    acc[v.categoria] = 0;
  }
  acc[v.categoria] += v.monto;
  return acc;
}, {});
console.log(porCategoria);
// → { tech: 1665, oficina: 485 }

// Construir un objeto indexado por producto
let indice = ventas.reduce((acc, v) => {
  acc[v.producto] = v.monto;
  return acc;
}, {});
console.log(indice.Laptop);  // → 1200
console.log(indice.Silla);   // → 450

// Contar ventas por categoría
let conteoCategoria = ventas.reduce((acc, v) => {
  acc[v.categoria] = (acc[v.categoria] || 0) + 1;
  return acc;
}, {});
console.log(conteoCategoria); // → { tech: 3, oficina: 2 }`,
    keyPoints: [
      'reduce acumula todos los elementos en un único valor (número, string, objeto, array)',
      'El callback recibe (acumulador, elementoActual) y debe retornar el nuevo acumulador',
      'Siempre especifica el valor inicial (segundo argumento) para evitar errores',
      'El resultado puede ser cualquier tipo: suma, máximo, objeto, array aplanado',
      'Es el método más flexible pero también el más complejo de los métodos de array',
      'Casos comunes: sumar, contar, agrupar, indexar por clave',
    ],
    exercise: {
      description:
        'Dado un array de gastos con { concepto, monto }, usa reduce() para calcular el total gastado y también para construir un objeto que indique cuántos gastos hay por concepto.',
      hint: 'Dos reduces separados: uno empieza con 0 para la suma, otro con {} para contar por concepto.',
    },
    quiz: [
      {
        question: '¿Qué es el "acumulador" en reduce()?',
        options: ['El índice del elemento actual', 'El valor que se va construyendo de iteración en iteración', 'Una copia del array original', 'El elemento actual del array'],
        correctAnswer: 'El valor que se va construyendo de iteración en iteración',
        correctFeedback: '¡Correcto! El acumulador es el valor que se va construyendo hasta el resultado final.',
        incorrectFeedback: 'Incorrecto. El acumulador es el valor que se va acumulando/construyendo en cada iteración.',
      },
      {
        question: '¿Por qué es importante especificar el valor inicial en reduce()?',
        options: ['Para mejorar el rendimiento', 'Para evitar errores con arrays vacíos y definir el tipo del resultado', 'Es solo una convención estética', 'Porque sin él reduce no funciona nunca'],
        correctAnswer: 'Para evitar errores con arrays vacíos y definir el tipo del resultado',
        correctFeedback: '¡Exacto! Sin valor inicial, reduce falla con arrays vacíos y el tipo puede ser incorrecto.',
        incorrectFeedback: 'Incorrecto. El valor inicial evita errores con arrays vacíos y define el tipo del resultado (0, {}, [], etc.).',
      },
      {
        question: '¿Qué devuelve reduce()?',
        options: ['Siempre un número', 'Siempre un array', 'Un único valor (puede ser número, objeto, array, etc.)', 'Un booleano'],
        correctAnswer: 'Un único valor (puede ser número, objeto, array, etc.)',
        correctFeedback: '¡Correcto! reduce puede devolver cualquier tipo según lo que acumules.',
        incorrectFeedback: 'Incorrecto. reduce devuelve un único valor que puede ser de cualquier tipo según la acumulación.',
      },
      {
        question: '¿Cuál es el resultado de [1, 2, 3, 4].reduce((acc, n) => acc + n, 0)?',
        options: ['[1, 2, 3, 4]', '10', '4', '0'],
        correctAnswer: '10',
        correctFeedback: '¡Correcto! 0+1+2+3+4 = 10.',
        incorrectFeedback: 'Incorrecto. Empieza en 0 y suma cada elemento: 0+1=1, 1+2=3, 3+3=6, 6+4=10.',
      },
    ],
  },

  // ── Lección 74 ────────────────────────────────────────────────────────────
  {
    slug: 'encadenar-metodos-arrays',
    title: 'Encadenar métodos de arrays',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 74,
    description:
      'Aprende a combinar filter, map, reduce y otros métodos en cadenas para transformar datos de forma elegante.',
    explanation: `Encadenar métodos significa llamar múltiples métodos uno tras otro en la misma línea. Esto es posible porque métodos como \`filter\` y \`map\` devuelven un nuevo array, sobre el cual puedes llamar otro método inmediatamente.

**Sintaxis básica**
\`\`\`js
let resultado = array
  .filter(...)
  .map(...)
  .reduce(...);
\`\`\`

**Ejemplo: de datos crudos a estadística**
\`\`\`js
let ventas = [
  { producto: "A", monto: 100, valido: true },
  { producto: "B", monto: 200, valido: false },
  { producto: "C", monto: 150, valido: true },
];

let totalValido = ventas
  .filter(v => v.valido)         // solo válidas → [A, C]
  .map(v => v.monto)             // extraer montos → [100, 150]
  .reduce((acc, m) => acc + m, 0); // sumar → 250

console.log(totalValido); // → 250
\`\`\`

**Orden importa: el más eficiente primero**
\`\`\`js
// ✓ Mejor: filtra primero (menos elementos para map)
productos.filter(p => p.disponible).map(p => p.nombre)

// ✗ Peor: mapea todo y luego filtra (más trabajo)
// No funciona si mapeas y luego necesitas propiedades del objeto
\`\`\`

**Reglas para encadenar bien**

1. El orden de los métodos define el resultado — piénsalo paso a paso.
2. \`filter\` y \`map\` devuelven arrays → se pueden seguir encadenando.
3. \`reduce\`, \`find\`, \`some\`, \`every\` devuelven un valor → van al final.
4. Demasiadas cadenas en una línea dificultan la lectura — divide si hay más de 3-4 pasos.

**Legibilidad: una operación por línea**
\`\`\`js
let resultado = productos
  .filter(p => p.disponible)
  .filter(p => p.precio < 200)
  .map(p => p.nombre.toUpperCase())
  .sort();
\`\`\``,
    codeExample: `// ── pipeline.js ──────────────────────────────────────────────────────────

let empleados = [
  { nombre: "Ana", departamento: "tech", salario: 2500, activo: true },
  { nombre: "Carlos", departamento: "ventas", salario: 1800, activo: true },
  { nombre: "María", departamento: "tech", salario: 3200, activo: false },
  { nombre: "Luis", departamento: "tech", salario: 2100, activo: true },
  { nombre: "Rosa", departamento: "ventas", salario: 2800, activo: true },
];

// Pipeline 1: total de salarios del departamento tech activos
let totalTech = empleados
  .filter(e => e.departamento === "tech")
  .filter(e => e.activo)
  .map(e => e.salario)
  .reduce((acc, s) => acc + s, 0);

console.log("Total tech activo:", totalTech); // → 4600 (Ana + Luis)

// Pipeline 2: nombres de empleados activos en mayúsculas, ordenados
let nombresActivos = empleados
  .filter(e => e.activo)
  .map(e => e.nombre.toUpperCase())
  .sort();

console.log(nombresActivos); // → ["ANA", "CARLOS", "LUIS", "ROSA"]

// Pipeline 3: promedio de salario de ventas
let ventasActivos = empleados.filter(e => e.departamento === "ventas" && e.activo);
let promedioVentas = ventasActivos
  .map(e => e.salario)
  .reduce((acc, s, _, arr) => acc + s / arr.length, 0);

console.log("Promedio ventas:", promedioVentas); // → 2300

// Pipeline 4: ¿existe algún tech inactivo?
let hayTechInactivo = empleados
  .filter(e => e.departamento === "tech")
  .some(e => !e.activo);

console.log("¿Tech inactivo?", hayTechInactivo); // → true (María)`,
    keyPoints: [
      'Encadenar métodos funciona porque filter y map devuelven nuevos arrays',
      'El orden de los métodos importa: filter primero reduce el trabajo de map',
      'reduce, find, some y every van al final porque devuelven un valor, no un array',
      'Una operación por línea mejora la legibilidad',
      'Demasiados encadenamientos (> 4) pueden dificultar la depuración',
      'Piensa el pipeline como: cargar datos → filtrar → transformar → acumular',
    ],
    exercise: {
      description:
        'Dado un array de transacciones con { tipo, monto, aprobada }, encadena métodos para obtener la suma total de todas las transacciones de tipo "venta" que estén aprobadas.',
      hint: '.filter(t => t.tipo === "venta" && t.aprobada).map(t => t.monto).reduce((acc, m) => acc + m, 0)',
    },
    quiz: [
      {
        question: '¿Por qué filter() y map() se pueden encadenar entre sí?',
        options: ['Porque son métodos del mismo módulo', 'Porque ambos devuelven un nuevo array', 'Porque comparten el mismo callback', 'Porque JS lo permite de forma especial'],
        correctAnswer: 'Porque ambos devuelven un nuevo array',
        correctFeedback: '¡Correcto! Como devuelven arrays, puedes llamar otro método de array sobre ese resultado.',
        incorrectFeedback: 'Incorrecto. Se pueden encadenar porque filter y map devuelven nuevos arrays sobre los que puedes seguir llamando métodos.',
      },
      {
        question: '¿Cuál de estos métodos debería ir al FINAL de una cadena?',
        options: ['filter()', 'map()', 'reduce()', 'slice()'],
        correctAnswer: 'reduce()',
        correctFeedback: '¡Correcto! reduce devuelve un valor único (no array), por eso va al final.',
        incorrectFeedback: 'Incorrecto. reduce devuelve un valor único (no un array), así que debe ir al final de la cadena.',
      },
      {
        question: '¿Cuál es el orden más eficiente para filter y map?',
        options: ['map primero, luego filter', 'filter primero, luego map', 'No importa el orden', 'Depende del tamaño del array'],
        correctAnswer: 'filter primero, luego map',
        correctFeedback: '¡Correcto! Filtrar primero reduce el número de elementos que map debe procesar.',
        incorrectFeedback: 'Incorrecto. Filtrar primero es más eficiente porque map procesa menos elementos.',
      },
      {
        question: '¿Qué problema puede ocurrir con cadenas muy largas (> 4-5 métodos)?',
        options: ['JS lanza un error por límite de cadena', 'Se vuelve difícil de leer y depurar', 'Los métodos se ejecutan en orden inverso', 'El resultado puede ser incorrecto'],
        correctAnswer: 'Se vuelve difícil de leer y depurar',
        correctFeedback: '¡Correcto! Cadenas muy largas dificultan identificar dónde está un error.',
        incorrectFeedback: 'Incorrecto. JS no limita la longitud, pero cadenas muy largas se vuelven difíciles de leer y depurar.',
      },
    ],
  },

  // ── Lección 75 ────────────────────────────────────────────────────────────
  {
    slug: 'proyecto-analisis-productos',
    title: 'Proyecto: análisis de catálogo de productos',
    module: 'Métodos modernos de arrays',
    moduleNumber: 10,
    order: 75,
    description:
      'Aplica todos los métodos modernos de arrays en un proyecto real que analiza un catálogo de productos con múltiples criterios.',
    explanation: `En este proyecto integrador usarás forEach, map, filter, find, some, every y reduce para analizar un catálogo de productos real. Cada sección del código tendrá un propósito claro y usará el método más apropiado.

**Estrategia del proyecto**

Antes de escribir código, identifica qué quieres lograr y elige el método correcto:

| Objetivo | Método |
|----------|--------|
| Recorrer e imprimir | forEach |
| Extraer un campo | map |
| Seleccionar por condición | filter |
| Buscar uno específico | find |
| ¿Hay alguno que…? | some |
| ¿Todos los que…? | every |
| Calcular total, promedio, agrupar | reduce |
| Varias operaciones en secuencia | encadenamiento |

**Pipeline de análisis**

El flujo típico de análisis de datos:
\`\`\`
datos crudos
  → limpiar/validar (filter)
  → transformar (map)
  → agregar (reduce)
  → verificar (some / every)
\`\`\`

Este proyecto te da el patrón mental que usarás en React, Node, APIs y cualquier contexto donde manejes colecciones de datos.`,
    codeExample: `// ── catalogo.js ──────────────────────────────────────────────────────────

let catalogo = [
  { id: "P01", nombre: "Laptop Pro", categoria: "tech", precio: 1499, stock: 8, calificacion: 4.8 },
  { id: "P02", nombre: "Teclado Mecánico", categoria: "tech", precio: 120, stock: 0, calificacion: 4.5 },
  { id: "P03", nombre: "Silla Ergonómica", categoria: "oficina", precio: 480, stock: 5, calificacion: 4.7 },
  { id: "P04", nombre: "Monitor 4K", categoria: "tech", precio: 650, stock: 3, calificacion: 4.9 },
  { id: "P05", nombre: "Lámpara LED", categoria: "oficina", precio: 45, stock: 20, calificacion: 4.2 },
  { id: "P06", nombre: "Webcam HD", categoria: "tech", precio: 95, stock: 0, calificacion: 3.8 },
  { id: "P07", nombre: "Escritorio Ajustable", categoria: "oficina", precio: 320, stock: 7, calificacion: 4.6 },
];

// ── 1. Inventario disponible (filter) ──────────────────────────────────────
let disponibles = catalogo.filter(p => p.stock > 0);
console.log(\`Disponibles: \${disponibles.length}/\${catalogo.length}\`); // → 5/7

// ── 2. Nombres de productos agotados (filter + map) ────────────────────────
let agotados = catalogo
  .filter(p => p.stock === 0)
  .map(p => p.nombre);
console.log("Agotados:", agotados); // → ["Teclado Mecánico", "Webcam HD"]

// ── 3. Total del inventario disponible (filter + map + reduce) ─────────────
let valorInventario = catalogo
  .filter(p => p.stock > 0)
  .map(p => p.precio * p.stock)
  .reduce((acc, v) => acc + v, 0);
console.log(\`Valor en inventario: $\${valorInventario.toLocaleString()}\`);
// → $30,065

// ── 4. Producto más caro disponible (filter + reduce) ─────────────────────
let masCaro = catalogo
  .filter(p => p.stock > 0)
  .reduce((top, p) => p.precio > top.precio ? p : top);
console.log(\`Más caro disponible: \${masCaro.nombre} ($\${masCaro.precio})\`);
// → Laptop Pro ($1499)

// ── 5. Buscar por ID (find) ────────────────────────────────────────────────
let monitor = catalogo.find(p => p.id === "P04");
console.log(\`\${monitor?.nombre}: \${monitor?.calificacion}⭐\`); // → Monitor 4K: 4.9⭐

// ── 6. ¿Algún producto tech agotado? (filter + some) ─────────────────────
let hayTechAgotado = catalogo
  .filter(p => p.categoria === "tech")
  .some(p => p.stock === 0);
console.log("¿Tech agotado?", hayTechAgotado); // → true

// ── 7. ¿Todos los de oficina tienen buena calificación? (filter + every) ──
let oficinaBuenaCalif = catalogo
  .filter(p => p.categoria === "oficina")
  .every(p => p.calificacion >= 4.0);
console.log("¿Oficina bien calificada?", oficinaBuenaCalif); // → true

// ── 8. Precio promedio por categoría (reduce) ─────────────────────────────
let promedioXCategoria = catalogo.reduce((acc, p) => {
  if (!acc[p.categoria]) acc[p.categoria] = { total: 0, count: 0 };
  acc[p.categoria].total += p.precio;
  acc[p.categoria].count++;
  return acc;
}, {});

Object.entries(promedioXCategoria).forEach(([cat, datos]) => {
  let promedio = (datos.total / datos.count).toFixed(2);
  console.log(\`Promedio \${cat}: $\${promedio}\`);
});
// → Promedio tech: $591.00
// → Promedio oficina: $281.67

// ── 9. Mostrar catálogo disponible ordenado por calificación (forEach) ────
console.log("\\n=== Top productos disponibles ===");
catalogo
  .filter(p => p.stock > 0)
  .sort((a, b) => b.calificacion - a.calificacion)
  .forEach((p, i) => {
    console.log(\`\${i + 1}. \${p.nombre} — \${p.calificacion}⭐ — $\${p.precio}\`);
  });`,
    keyPoints: [
      'Identifica el objetivo antes de elegir el método: ¿transformar, filtrar, buscar, verificar, acumular?',
      'El pipeline filter → map → reduce es el patrón más común en análisis de datos',
      'find busca un elemento único (por ID); filter busca todos los que cumplen',
      'some y every son para decisiones binarias (¿hay alguno? ¿todos?)',
      'reduce es la navaja suiza: puede construir cualquier tipo de resultado',
      'Estos patrones se usan en React, Node, APIs y cualquier proyecto JS moderno',
    ],
    exercise: {
      description:
        'Con el catálogo de productos del ejemplo: (1) calcula el precio promedio de todos los productos disponibles, (2) obtén los nombres de los 3 productos mejor calificados, (3) verifica si todos los productos tech disponibles cuestan más de $50.',
      hint: 'Para el promedio: suma / cantidad. Para top 3: .sort().slice(0, 3).map(). Para verificar: filter + every.',
    },
    quiz: [
      {
        question: 'Para calcular el precio promedio de un array de objetos con campo "precio", ¿cuál es la secuencia correcta?',
        options: ['.map(p => p.precio).find()', '.filter().forEach()', '.map(p => p.precio).reduce((acc, p) => acc + p, 0) / array.length', '.every(p => p.precio)'],
        correctAnswer: '.map(p => p.precio).reduce((acc, p) => acc + p, 0) / array.length',
        correctFeedback: '¡Correcto! Extraes los precios con map y luego los sumas con reduce para dividir entre la longitud.',
        incorrectFeedback: 'Incorrecto. El enfoque correcto es extraer los precios con map, sumarlos con reduce y dividir entre la cantidad.',
      },
      {
        question: '¿Qué método usarías para obtener el producto con el precio más alto en un array?',
        options: ['find()', 'filter()', 'map()', 'reduce()'],
        correctAnswer: 'reduce()',
        correctFeedback: '¡Correcto! reduce puede acumular el máximo comparando elemento por elemento.',
        incorrectFeedback: 'Incorrecto. reduce es ideal para encontrar el máximo: .reduce((max, p) => p.precio > max.precio ? p : max)',
      },
      {
        question: 'En el pipeline: .filter().map().reduce(), ¿cuál es el propósito de cada paso?',
        options: ['Todos hacen lo mismo', 'filter selecciona, map transforma, reduce acumula', 'filter acumula, map filtra, reduce transforma', 'filter transforma, map acumula, reduce selecciona'],
        correctAnswer: 'filter selecciona, map transforma, reduce acumula',
        correctFeedback: '¡Correcto! Ese es el patrón fundamental: seleccionar → transformar → acumular.',
        incorrectFeedback: 'Incorrecto. El orden lógico es: filter selecciona, map transforma, reduce acumula en un valor final.',
      },
      {
        question: '¿Cuál de estos métodos NO devuelve un array y por eso debe usarse al final de una cadena?',
        options: ['map()', 'filter()', 'slice()', 'reduce()'],
        correctAnswer: 'reduce()',
        correctFeedback: '¡Exacto! reduce devuelve un valor único (número, objeto, etc.), no un array.',
        incorrectFeedback: 'Incorrecto. reduce devuelve un valor único, no un array, por eso va al final de la cadena.',
      },
      {
        question: '¿Qué patrón usarías para agrupar productos por categoría en un objeto { tech: [...], oficina: [...] }?',
        options: ['filter() para cada categoría por separado', 'map() con condiciones', 'reduce() con un objeto como acumulador', 'forEach() con push'],
        correctAnswer: 'reduce() con un objeto como acumulador',
        correctFeedback: '¡Correcto! reduce con {} como valor inicial es perfecto para agrupar.',
        incorrectFeedback: 'Incorrecto. reduce con un objeto ({}) como valor inicial es la forma idiomática de agrupar en JavaScript.',
      },
    ],
  },
]

export const jsModule10: Module = {
  number: 10,
  title: 'Métodos modernos de arrays',
  level: 'nivel2',
  lessons: lessonsJsModule10,
}
