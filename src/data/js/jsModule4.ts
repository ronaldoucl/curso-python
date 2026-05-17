import type { Lesson, Module } from '@/types'

export const lessonsJsModule4: Lesson[] = [
  // ── Lección 21 ────────────────────────────────────────────────────────────
  {
    slug: 'arrays-javascript',
    title: 'Arrays',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 21,
    description:
      'Aprende a guardar múltiples valores en una sola variable usando arrays.',
    explanation: `Un **array** es una lista ordenada de valores guardados en una sola variable. En lugar de crear una variable por cada valor, puedes guardar todos en un array.

Imagina un array como una fila de casillas numeradas, donde cada casilla tiene un valor y un número de posición llamado **índice**.

**Crear un array**

\`\`\`js
const frutas = ["manzana", "pera", "uva", "naranja"];
\`\`\`

- Los valores van entre corchetes \`[]\` separados por comas.
- Pueden ser de cualquier tipo (strings, numbers, booleanos, objetos, e incluso otros arrays).
- Los índices empiezan en **0**, no en 1.

**Acceder a elementos**

\`\`\`js
console.log(frutas[0]); // → "manzana" (primer elemento)
console.log(frutas[2]); // → "uva"
console.log(frutas[frutas.length - 1]); // → "naranja" (último elemento)
\`\`\`

**Modificar elementos**

\`\`\`js
frutas[1] = "melón"; // cambia "pera" por "melón"
\`\`\`

**length — número de elementos**

\`\`\`js
console.log(frutas.length); // → 4
\`\`\`

**Arrays con tipos mixtos**

JavaScript permite arrays con elementos de distintos tipos, aunque en la práctica es mejor mantener un tipo consistente:

\`\`\`js
const mixto = ["hola", 42, true, null, [1, 2]];
\`\`\`

**¿Por qué usar arrays?**

Sin arrays, si quisieras guardar los nombres de 100 estudiantes, necesitarías 100 variables. Con un array, solo necesitas una.`,
    codeExample: `// ── Crear y acceder a arrays ─────────────────────────────────────────────

const calificaciones = [85, 92, 78, 95, 88];

console.log("Primera:", calificaciones[0]);   // → 85
console.log("Última:", calificaciones[calificaciones.length - 1]); // → 88
console.log("Total de notas:", calificaciones.length); // → 5

// ── Modificar elementos ───────────────────────────────────────────────────

const carrito = ["Laptop", "Mouse", "Teclado"];
console.log("Antes:", carrito);

carrito[1] = "Monitor"; // reemplaza Mouse
console.log("Después:", carrito); // → ["Laptop", "Monitor", "Teclado"]

// ── Arrays de distintos tipos de datos ───────────────────────────────────

const datosEstudiante = ["Ana García", 20, 9.2, true];
// nombre, edad, promedio, activa

console.log("Nombre:", datosEstudiante[0]);
console.log("Promedio:", datosEstudiante[2]);

// ── Array vacío y agregar elementos ──────────────────────────────────────

const tareas = [];
console.log("Tareas iniciales:", tareas.length); // → 0

tareas[0] = "Estudiar JavaScript";
tareas[1] = "Hacer ejercicio";
tareas[2] = "Leer un libro";

console.log("Tareas:", tareas);
console.log("Total:", tareas.length); // → 3`,
    keyPoints: [
      'Un array guarda múltiples valores en una sola variable, entre corchetes [].',
      'Los índices de los arrays empiezan en 0, no en 1.',
      'array[0] accede al primer elemento, array[array.length - 1] al último.',
      '.length devuelve la cantidad de elementos del array.',
      'Puedes modificar un elemento asignando un nuevo valor: array[i] = nuevoValor.',
      'Los arrays pueden contener cualquier tipo de dato, incluyendo otros arrays.',
    ],
    exercise: {
      description:
        'Crea un array con los nombres de 5 películas favoritas. Luego: 1) Muestra la primera y última película. 2) Muestra cuántas películas hay. 3) Cambia la segunda película por otra. 4) Accede a una posición que no existe (como índice 10) y observa qué devuelve.',
      hint: 'Para el último elemento: peliculas[peliculas.length - 1]. Un índice inexistente devuelve undefined, no un error.',
    },
    quiz: [
      {
        question: '¿Cuál es el índice del primer elemento de un array en JavaScript?',
        options: ['1', '0', '-1', 'length'],
        correctAnswer: '0',
        correctFeedback:
          'Correcto. En JavaScript (y en la mayoría de lenguajes de programación), los arrays empiezan en el índice 0.',
        incorrectFeedback:
          'No es correcto. Los arrays en JavaScript empiezan en el índice 0. El primer elemento es array[0], el segundo es array[1], etc.',
      },
      {
        question: '¿Qué devuelve array[array.length]?',
        options: ['El último elemento', 'El primer elemento', 'undefined', 'Error'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. Si el array tiene 5 elementos (índices 0-4), array.length es 5. array[5] no existe, por lo que devuelve undefined.',
        incorrectFeedback:
          'No es correcto. array.length es el número total de elementos. El último índice válido es length - 1. array[length] devuelve undefined porque ese índice no existe.',
      },
      {
        question: '¿Qué hace esta instrucción?\n\nconst frutas = ["manzana", "pera"];\nfrutas[0] = "uva";',
        options: [
          'Agrega "uva" al final del array',
          'Reemplaza "manzana" con "uva"',
          'Crea un nuevo array con "uva"',
          'Error: const no permite modificar',
        ],
        correctAnswer: 'Reemplaza "manzana" con "uva"',
        correctFeedback:
          'Correcto. frutas[0] = "uva" reemplaza el elemento en la posición 0 ("manzana") con "uva".',
        incorrectFeedback:
          'No es correcto. frutas[0] = "uva" accede a la posición 0 y reemplaza su valor. const permite modificar los elementos del array, solo prohíbe reasignar la variable a otro array.',
      },
    ],
  },

  // ── Lección 22 ────────────────────────────────────────────────────────────
  {
    slug: 'metodos-basicos-arrays',
    title: 'Métodos básicos de arrays',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 22,
    description:
      'Aprende métodos como push(), pop(), shift(), unshift(), includes() e indexOf().',
    explanation: `Los arrays tienen **métodos** incorporados que permiten agregar, eliminar y buscar elementos de forma sencilla.

**Agregar elementos**

- \`push(valor)\` — agrega al **final** del array. Devuelve el nuevo length.
- \`unshift(valor)\` — agrega al **inicio** del array. Devuelve el nuevo length.

\`\`\`js
const lista = ["b", "c"];
lista.push("d");      // → ["b", "c", "d"]
lista.unshift("a");   // → ["a", "b", "c", "d"]
\`\`\`

**Eliminar elementos**

- \`pop()\` — elimina el **último** elemento y lo devuelve.
- \`shift()\` — elimina el **primer** elemento y lo devuelve.

\`\`\`js
const cola = ["primero", "segundo", "tercero"];
const eliminado = cola.shift(); // → "primero"
console.log(cola); // → ["segundo", "tercero"]
\`\`\`

**Buscar elementos**

- \`includes(valor)\` — devuelve true si el valor existe en el array.
- \`indexOf(valor)\` — devuelve el índice de la primera aparición, o -1 si no existe.

\`\`\`js
const colores = ["rojo", "verde", "azul"];
console.log(colores.includes("verde")); // → true
console.log(colores.indexOf("azul"));   // → 2
console.log(colores.indexOf("rosa"));   // → -1
\`\`\`

**splice(inicio, cantidad) — eliminar desde una posición**

\`\`\`js
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // elimina 2 elementos empezando en índice 1
console.log(arr); // → [1, 4, 5]
\`\`\`

**Regla mnemotécnica:**
- **push/pop** trabajan al **final** (como una pila de platos: agregas y quitas por arriba).
- **unshift/shift** trabajan al **inicio**.`,
    codeExample: `// ── push y pop ───────────────────────────────────────────────────────────

const historial = [];

historial.push("Inicio de sesión");
historial.push("Ver productos");
historial.push("Agregar al carrito");
console.log(historial);
// → ["Inicio de sesión", "Ver productos", "Agregar al carrito"]

const ultimaAccion = historial.pop();
console.log("Última acción eliminada:", ultimaAccion);
// → "Agregar al carrito"
console.log("Historial actual:", historial);
// → ["Inicio de sesión", "Ver productos"]

// ── unshift y shift ───────────────────────────────────────────────────────

const cola = ["Cliente 2", "Cliente 3"];
cola.unshift("Cliente 1"); // agrega al inicio (llegó primero)
console.log("Cola:", cola); // → ["Cliente 1", "Cliente 2", "Cliente 3"]

const atendido = cola.shift(); // primer cliente sale de la cola
console.log("Atendido:", atendido); // → "Cliente 1"
console.log("Cola restante:", cola); // → ["Cliente 2", "Cliente 3"]

// ── includes e indexOf ────────────────────────────────────────────────────

const tecnologias = ["JavaScript", "Python", "React", "Node.js"];

console.log(tecnologias.includes("React"));       // → true
console.log(tecnologias.includes("Angular"));     // → false
console.log(tecnologias.indexOf("Python"));       // → 1
console.log(tecnologias.indexOf("TypeScript"));   // → -1 (no existe)

// Comprobar si existe antes de agregar
const nueva = "Vue.js";
if (!tecnologias.includes(nueva)) {
  tecnologias.push(nueva);
  console.log("Tecnología agregada:", nueva);
}`,
    keyPoints: [
      'push() agrega al final; pop() elimina del final.',
      'unshift() agrega al inicio; shift() elimina del inicio.',
      'includes() devuelve true/false; indexOf() devuelve el índice o -1.',
      'splice(inicio, cantidad) elimina elementos desde una posición específica.',
      'pop() y shift() devuelven el elemento eliminado, útil para procesarlo antes de descartarlo.',
      'Verifica con includes() antes de agregar para evitar duplicados.',
    ],
    exercise: {
      description:
        'Simula una lista de tareas pendientes: 1) Crea un array vacío. 2) Agrega 5 tareas con push(). 3) Elimina la última tarea con pop() y muéstrala. 4) Agrega una tarea urgente al inicio con unshift(). 5) Verifica si "Llamar al médico" está en la lista con includes(). 6) Encuentra el índice de una tarea específica con indexOf().',
      hint: 'Las tareas pueden ser cualquier string. Asegúrate de mostrar el array después de cada operación para ver los cambios.',
    },
    quiz: [
      {
        question: '¿Cuál método elimina el último elemento de un array y lo devuelve?',
        options: ['shift()', 'unshift()', 'pop()', 'push()'],
        correctAnswer: 'pop()',
        correctFeedback:
          'Correcto. pop() elimina el último elemento del array y devuelve el elemento eliminado.',
        incorrectFeedback:
          'No es correcto. pop() elimina el ÚLTIMO elemento. shift() elimina el PRIMERO. push() y unshift() agregan elementos.',
      },
      {
        question: '¿Qué devuelve indexOf() si el elemento NO existe en el array?',
        options: ['0', 'null', 'undefined', '-1'],
        correctAnswer: '-1',
        correctFeedback:
          'Correcto. indexOf() devuelve -1 cuando el elemento no se encuentra en el array. Por eso se comprueba: if (arr.indexOf(val) !== -1) { ... }',
        incorrectFeedback:
          'No es correcto. Cuando el elemento no existe, indexOf() devuelve -1, no 0 ni null. Esto permite distinguir "no encontrado" de "encontrado en la posición 0".',
      },
      {
        question: '¿Qué hace unshift("nuevo") en el array ["b", "c"]?',
        options: [
          'Agrega "nuevo" al final: ["b", "c", "nuevo"]',
          'Agrega "nuevo" al inicio: ["nuevo", "b", "c"]',
          'Reemplaza "b" con "nuevo": ["nuevo", "c"]',
          'Error: unshift no existe',
        ],
        correctAnswer: 'Agrega "nuevo" al inicio: ["nuevo", "b", "c"]',
        correctFeedback:
          'Correcto. unshift() agrega elementos al inicio del array, desplazando los existentes hacia la derecha.',
        incorrectFeedback:
          'No es correcto. unshift() agrega al INICIO. push() agrega al FINAL. Con unshift("nuevo") el resultado es ["nuevo", "b", "c"].',
      },
    ],
  },

  // ── Lección 23 ────────────────────────────────────────────────────────────
  {
    slug: 'recorrer-arrays',
    title: 'Recorrer arrays',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 23,
    description:
      'Aprende a recorrer arrays usando for, for...of y forEach().',
    explanation: `Recorrer (iterar) un array significa acceder a cada uno de sus elementos uno por uno. Hay varias formas de hacerlo en JavaScript.

**1. Bucle for clásico**

Ya lo conoces. Te da acceso al índice, lo que es útil cuando necesitas la posición:
\`\`\`js
for (let i = 0; i < array.length; i++) {
  console.log(i, array[i]);
}
\`\`\`

**2. for...of — la forma más simple**

Cuando solo necesitas el valor (no el índice), \`for...of\` es más limpio:
\`\`\`js
for (const elemento of array) {
  console.log(elemento);
}
\`\`\`

**3. forEach() — método del array**

\`forEach()\` ejecuta una función para cada elemento. Es popular en código moderno:
\`\`\`js
array.forEach(function(elemento) {
  console.log(elemento);
});

// Con arrow function (más compacto):
array.forEach(elemento => console.log(elemento));
\`\`\`

También puedes acceder al índice:
\`\`\`js
array.forEach((elemento, indice) => {
  console.log(indice, elemento);
});
\`\`\`

**¿Cuál usar?**

| Situación | Método recomendado |
|-----------|-------------------|
| Necesitas el índice | for clásico |
| Solo necesitas el valor | for...of |
| Código funcional moderno | forEach() |
| Necesitas break o continue | for clásico o for...of |

**Nota importante:** \`forEach()\` no puede usar \`break\` ni \`continue\`. Si necesitas salir anticipadamente, usa \`for\` o \`for...of\`.`,
    codeExample: `// ── for clásico: necesitas el índice ─────────────────────────────────────

const productos = ["Laptop", "Mouse", "Teclado", "Monitor"];

for (let i = 0; i < productos.length; i++) {
  console.log(\`\${i + 1}. \${productos[i]}\`);
}
// → 1. Laptop  2. Mouse  3. Teclado  4. Monitor

// ── for...of: solo necesitas el valor ────────────────────────────────────

const precios = [299, 25, 89, 450];
let total = 0;

for (const precio of precios) {
  total += precio;
}
console.log("Total:", total); // → 863

// ── forEach: estilo funcional moderno ────────────────────────────────────

const estudiantes = ["Ana", "Luis", "Sofía", "Carlos"];

estudiantes.forEach((nombre, indice) => {
  console.log(\`Estudiante \${indice + 1}: \${nombre}\`);
});

// ── Comparación práctica ─────────────────────────────────────────────────

const calificaciones = [70, 85, 60, 92, 55, 88];

// ¿Cuántos aprobaron (>= 60)?
let aprobados = 0;
for (const nota of calificaciones) {
  if (nota >= 60) aprobados++;
}
console.log("Aprobados:", aprobados, "de", calificaciones.length);

// Mostrar solo los reprobados con su posición
calificaciones.forEach((nota, i) => {
  if (nota < 60) {
    console.log(\`Posición \${i}: nota \${nota} — reprobado\`);
  }
});`,
    keyPoints: [
      'El for clásico es útil cuando necesitas el índice durante la iteración.',
      'for...of es la forma más limpia cuando solo necesitas el valor de cada elemento.',
      'forEach() ejecuta una función por cada elemento y puede recibir el elemento y su índice.',
      'forEach() no admite break ni continue — usa for o for...of si necesitas esas funciones.',
      'Las tres formas son válidas; elige según las necesidades de cada situación.',
      'for...of y forEach son más modernos y expresivos que el for clásico para arrays.',
    ],
    exercise: {
      description:
        'Dado el array de precios [120, 45, 200, 30, 85, 160, 75]: 1) Con for clásico: muestra cada precio con su posición (1-based). 2) Con for...of: calcula el precio total y el promedio. 3) Con forEach: muestra solo los precios que superan $100 con el mensaje "Precio premium: $X". 4) ¿Cuántos productos son de bajo costo (menos de $50)?',
      hint: 'Para el promedio: total / array.length. Para contar: usa let contador = 0 y dentro del bucle, si cumple la condición, contador++.',
    },
    quiz: [
      {
        question: '¿Cuál de estas formas de iterar permite usar break para detener el bucle antes?',
        options: ['Solo forEach()', 'Solo for...of', 'for clásico y for...of', 'Ninguna permite break'],
        correctAnswer: 'for clásico y for...of',
        correctFeedback:
          'Correcto. Tanto for clásico como for...of permiten usar break y continue. forEach() no admite break.',
        incorrectFeedback:
          'No es correcto. forEach() no permite break. Los bucles for clásico y for...of sí permiten break y continue.',
      },
      {
        question: '¿Qué proporciona forEach() además del elemento, cuando se usa con dos parámetros?',
        options: ['El tipo del elemento', 'El índice del elemento', 'El array completo', 'Nada más'],
        correctAnswer: 'El índice del elemento',
        correctFeedback:
          'Correcto. forEach((elemento, indice) => ...) te da acceso tanto al valor como a la posición del elemento en el array.',
        incorrectFeedback:
          'No es correcto. forEach puede recibir dos parámetros: el elemento y su índice. array.forEach((valor, indice) => ...).',
      },
    ],
  },

  // ── Lección 24 ────────────────────────────────────────────────────────────
  {
    slug: 'objetos-javascript',
    title: 'Objetos',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 24,
    description:
      'Aprende a representar información con pares clave-valor usando objetos.',
    explanation: `Un **objeto** en JavaScript es una colección de **pares clave-valor**. Es como un formulario donde cada campo tiene un nombre (clave) y un contenido (valor).

Imagina una ficha de contacto: tiene nombre, teléfono, email y ciudad. Un objeto representa exactamente eso — un conjunto de propiedades relacionadas que describen una cosa.

**Crear un objeto**

\`\`\`js
const persona = {
  nombre: "Elena",
  edad: 28,
  ciudad: "Madrid",
  activa: true,
};
\`\`\`

Las llaves \`{}\` contienen las propiedades. Cada propiedad tiene:
- Una **clave** (también llamada "propiedad"): puede ser un string o símbolo.
- Un **valor**: puede ser cualquier tipo de dato.

**Acceder a propiedades**

Hay dos formas:

1. **Notación de punto:** \`objeto.propiedad\` (la más común)
2. **Notación de corchetes:** \`objeto["propiedad"]\` (cuando la clave tiene espacios o es dinámica)

\`\`\`js
console.log(persona.nombre);       // → "Elena"
console.log(persona["ciudad"]);    // → "Madrid"
\`\`\`

**Valores de cualquier tipo**

Los valores pueden ser strings, números, booleanos, arrays, funciones, u otros objetos:

\`\`\`js
const producto = {
  nombre: "Laptop",
  precio: 999,
  disponible: true,
  etiquetas: ["electrónica", "computación"],
  especificaciones: {
    ram: "16GB",
    almacenamiento: "512GB SSD",
  },
};

console.log(producto.especificaciones.ram); // → "16GB"
console.log(producto.etiquetas[0]);         // → "electrónica"
\`\`\`

**Objetos vs Arrays**

| Característica | Array | Objeto |
|---------------|-------|--------|
| Acceso | Por índice numérico | Por nombre de propiedad |
| Orden | Ordenado | No garantizado (en práctica sí) |
| Uso típico | Lista de items similares | Una entidad con propiedades |`,
    codeExample: `// ── Objeto básico ────────────────────────────────────────────────────────

const usuario = {
  nombre: "Carlos Mendoza",
  edad: 34,
  email: "carlos@email.com",
  activo: true,
  rol: "administrador",
};

// Acceder con punto
console.log(usuario.nombre);   // → "Carlos Mendoza"
console.log(usuario.email);    // → "carlos@email.com"

// Acceder con corchetes
const propiedad = "rol";
console.log(usuario[propiedad]); // → "administrador"

// ── Objeto con tipos mixtos ───────────────────────────────────────────────

const producto = {
  id: 101,
  nombre: "Auriculares Inalámbricos",
  precio: 79.99,
  stock: 50,
  disponible: true,
  categorias: ["electrónica", "audio"],
  dimensiones: {
    peso: "280g",
    color: "Negro",
  },
};

console.log(\`Producto: \${producto.nombre}\`);
console.log(\`Precio: $\${producto.precio}\`);
console.log(\`Categoría principal: \${producto.categorias[0]}\`);
console.log(\`Peso: \${producto.dimensiones.peso}\`);

// ── Mostrar todas las propiedades ─────────────────────────────────────────

const curso = {
  titulo: "JavaScript desde Cero",
  nivel: "Principiante",
  lecciones: 36,
  precio: 0,
  idioma: "Español",
};

console.log("Información del curso:");
console.log("Título:", curso.titulo);
console.log("Nivel:", curso.nivel);
console.log(\`\${curso.lecciones} lecciones · \${curso.idioma} · \${curso.precio === 0 ? "Gratis" : "$" + curso.precio}\`);`,
    keyPoints: [
      'Un objeto agrupa propiedades relacionadas usando pares clave:valor entre llaves {}.',
      'Se accede a propiedades con punto (objeto.propiedad) o corchetes (objeto["propiedad"]).',
      'Los valores pueden ser cualquier tipo: strings, números, booleanos, arrays, otros objetos.',
      'La notación de punto es más común; los corchetes son necesarios para claves dinámicas.',
      'Los objetos representan "entidades" con propiedades (un usuario, un producto, un curso).',
      'Los arrays son para listas de cosas similares; los objetos para describir una sola cosa.',
    ],
    exercise: {
      description:
        'Crea un objeto que represente tu perfil de estudiante con al menos 7 propiedades: nombre, apellido, edad, ciudad, carrera, semestre, promedio, y un array de materias favoritas. Luego: 1) Muestra una presentación completa usando template literals. 2) Accede a la primera materia favorita. 3) Muestra si el promedio es mayor a 8.',
      hint: 'Para el array anidado: perfil.materiasFavoritas[0]. Para la condición: perfil.promedio > 8 devuelve true o false.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre un array y un objeto?',
        options: [
          'Los arrays son más rápidos que los objetos',
          'Los arrays usan índices numéricos; los objetos usan nombres de propiedades',
          'Los objetos pueden guardar más datos que los arrays',
          'Los arrays solo guardan números; los objetos guardan cualquier tipo',
        ],
        correctAnswer: 'Los arrays usan índices numéricos; los objetos usan nombres de propiedades',
        correctFeedback:
          'Correcto. Los arrays se acceden por posición numérica (array[0]); los objetos por nombre de propiedad (objeto.nombre).',
        incorrectFeedback:
          'No es correcto. La diferencia clave es cómo accedes a los datos: arrays por índice numérico, objetos por nombre de propiedad.',
      },
      {
        question: '¿Cuándo es útil la notación de corchetes (objeto["propiedad"]) en lugar del punto?',
        options: [
          'Siempre; los corchetes son más rápidos',
          'Cuando la clave está en una variable o tiene espacios',
          'Solo con arrays',
          'Cuando el valor es un número',
        ],
        correctAnswer: 'Cuando la clave está en una variable o tiene espacios',
        correctFeedback:
          'Correcto. objeto[variable] usa el valor de la variable como nombre de propiedad. También es necesario cuando la clave contiene caracteres especiales o espacios.',
        incorrectFeedback:
          'No es correcto. Los corchetes son necesarios cuando la propiedad está en una variable (objeto[miVariable]) o cuando el nombre de la clave tiene espacios o caracteres especiales.',
      },
    ],
  },

  // ── Lección 25 ────────────────────────────────────────────────────────────
  {
    slug: 'propiedades-objetos',
    title: 'Acceder y modificar propiedades',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 25,
    description:
      'Aprende a leer, agregar, modificar y eliminar propiedades de un objeto.',
    explanation: `Los objetos en JavaScript son **mutables**: puedes leer, agregar, modificar y eliminar sus propiedades incluso después de crearlos (esto también aplica a objetos declarados con \`const\` — \`const\` solo prohíbe reasignar la variable, no cambiar el contenido del objeto).

**Leer propiedades**

\`\`\`js
console.log(usuario.nombre);
\`\`\`

**Agregar propiedades**

\`\`\`js
const persona = { nombre: "Ana" };
persona.edad = 25;           // agrega nueva propiedad
persona.ciudad = "Lima";
\`\`\`

**Modificar propiedades**

\`\`\`js
persona.nombre = "Ana María"; // modifica el valor existente
\`\`\`

**Eliminar propiedades**

\`\`\`js
delete persona.ciudad; // elimina la propiedad
console.log(persona.ciudad); // → undefined
\`\`\`

**Verificar si una propiedad existe**

\`\`\`js
console.log("edad" in persona);           // → true
console.log(persona.hasOwnProperty("edad")); // → true
console.log(persona.telefono !== undefined); // → false
\`\`\`

**Recorrer las propiedades con for...in**

\`\`\`js
for (const clave in persona) {
  console.log(clave, ":", persona[clave]);
}
\`\`\`

**Object.keys(), Object.values(), Object.entries()**

- \`Object.keys(obj)\` → array con los nombres de las propiedades.
- \`Object.values(obj)\` → array con los valores.
- \`Object.entries(obj)\` → array de pares [clave, valor].`,
    codeExample: `// ── Objeto inicial ───────────────────────────────────────────────────────

const perfil = {
  nombre: "Valentina",
  correo: "vale@email.com",
  plan: "básico",
};

// ── Agregar propiedades ───────────────────────────────────────────────────

perfil.edad = 27;
perfil.ciudad = "Medellín";
console.log(perfil);

// ── Modificar propiedades ─────────────────────────────────────────────────

perfil.plan = "premium";            // actualiza el plan
perfil.correo = "vale2025@email.com"; // correo actualizado
console.log("Plan actualizado:", perfil.plan);

// ── Eliminar propiedad ────────────────────────────────────────────────────

delete perfil.ciudad;
console.log("¿Ciudad existe?", "ciudad" in perfil); // → false

// ── Object.keys, values, entries ─────────────────────────────────────────

const producto = {
  nombre: "Teclado",
  precio: 55,
  stock: 20,
  disponible: true,
};

console.log("Propiedades:", Object.keys(producto));
// → ["nombre", "precio", "stock", "disponible"]

console.log("Valores:", Object.values(producto));
// → ["Teclado", 55, 20, true]

Object.entries(producto).forEach(([clave, valor]) => {
  console.log(\`\${clave}: \${valor}\`);
});

// ── for...in ─────────────────────────────────────────────────────────────

const config = { tema: "oscuro", idioma: "es", notificaciones: true };

for (const clave in config) {
  console.log(\`\${clave} → \${config[clave]}\`);
}`,
    keyPoints: [
      'Puedes agregar propiedades a un objeto existente: objeto.nuevaPropiedad = valor.',
      'Modificar una propiedad: objeto.propiedad = nuevoValor.',
      'Eliminar una propiedad: delete objeto.propiedad.',
      'const en un objeto no impide modificar sus propiedades, solo prohíbe reasignar la variable.',
      'Verifica si una propiedad existe con "clave" in objeto o objeto.hasOwnProperty("clave").',
      'Object.keys(), Object.values() y Object.entries() convierten las propiedades en arrays.',
    ],
    exercise: {
      description:
        'Crea un objeto "tarea" con: titulo, descripcion, prioridad ("baja"), completada (false), fechaCreacion. Luego: 1) Agrega la propiedad "etiquetas" con un array de strings. 2) Cambia la prioridad a "alta". 3) Cambia completada a true. 4) Elimina fechaCreacion. 5) Muestra todas las propiedades restantes con for...in. 6) Muestra cuántas propiedades tiene con Object.keys().length.',
      hint: 'Object.keys(tarea).length te da el número de propiedades. Para for...in: usa tarea[clave] para acceder al valor de cada propiedad.',
    },
    quiz: [
      {
        question: '¿Cómo se agrega una propiedad nueva a un objeto existente en JavaScript?',
        options: [
          'objeto.add("nuevaProp", valor)',
          'objeto.push(nuevaProp: valor)',
          'objeto.nuevaProp = valor',
          'No es posible después de crear el objeto',
        ],
        correctAnswer: 'objeto.nuevaProp = valor',
        correctFeedback:
          'Correcto. En JavaScript puedes agregar propiedades en cualquier momento asignando un valor a una nueva clave: objeto.nuevaProp = valor.',
        incorrectFeedback:
          'No es correcto. Para agregar una propiedad nueva, simplemente asigna un valor a esa clave: objeto.nuevaProp = valor. Si no existía, se crea automáticamente.',
      },
      {
        question: '¿Qué devuelve Object.keys({ a: 1, b: 2, c: 3 })?',
        options: ['[1, 2, 3]', '["a", "b", "c"]', '[["a",1], ["b",2], ["c",3]]', 'undefined'],
        correctAnswer: '["a", "b", "c"]',
        correctFeedback:
          'Correcto. Object.keys() devuelve un array con los nombres de las propiedades (las claves), no los valores.',
        incorrectFeedback:
          'No es correcto. Object.keys() devuelve las CLAVES (nombres de propiedades): ["a", "b", "c"]. Para los valores usa Object.values().',
      },
    ],
  },

  // ── Lección 26 ────────────────────────────────────────────────────────────
  {
    slug: 'arrays-de-objetos',
    title: 'Arrays de objetos',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 26,
    description:
      'Aprende a trabajar con listas de objetos, una estructura muy común en aplicaciones reales.',
    explanation: `Una de las estructuras de datos más comunes en aplicaciones reales es el **array de objetos**: una lista donde cada elemento es un objeto con las mismas propiedades.

Piensa en la lista de usuarios de una app, los productos de una tienda, o los estudiantes de un curso. Cada elemento tiene las mismas "columnas" (propiedades) pero valores distintos.

**Ejemplo:**
\`\`\`js
const productos = [
  { id: 1, nombre: "Laptop", precio: 999, disponible: true },
  { id: 2, nombre: "Mouse", precio: 25, disponible: true },
  { id: 3, nombre: "Teclado", precio: 55, disponible: false },
];
\`\`\`

**Acceder a un elemento y sus propiedades:**
\`\`\`js
console.log(productos[0].nombre); // → "Laptop"
console.log(productos[1].precio); // → 25
\`\`\`

**Recorrer y procesar:**
\`\`\`js
for (const producto of productos) {
  console.log(\`\${producto.nombre}: $\${producto.precio}\`);
}
\`\`\`

**Buscar un objeto específico:**
\`\`\`js
// Encontrar el primer producto con precio < 50
let barato = null;
for (const p of productos) {
  if (p.precio < 50) {
    barato = p;
    break;
  }
}
\`\`\`

**Filtrar manualmente:**
\`\`\`js
const disponibles = [];
for (const p of productos) {
  if (p.disponible) disponibles.push(p);
}
\`\`\`

Esta estructura es la base de cómo se trabaja con datos en JavaScript. En el módulo siguiente aprenderás métodos como \`filter()\`, \`map()\` y \`find()\` que hacen esto de forma más elegante.`,
    codeExample: `// ── Array de objetos: lista de estudiantes ────────────────────────────────

const estudiantes = [
  { id: 1, nombre: "Ana Gómez",    promedio: 9.2, activa: true  },
  { id: 2, nombre: "Carlos Ruiz",  promedio: 7.8, activa: true  },
  { id: 3, nombre: "Sofía Leal",   promedio: 8.5, activa: false },
  { id: 4, nombre: "Pedro Mora",   promedio: 6.1, activa: true  },
  { id: 5, nombre: "Lucía Vega",   promedio: 9.7, activa: true  },
];

// Mostrar todos
console.log("=== Lista de estudiantes ===");
for (const est of estudiantes) {
  const estado = est.activa ? "✓" : "✗";
  console.log(\`\${estado} \${est.nombre} — Promedio: \${est.promedio}\`);
}

// Calcular promedio general
let sumaPromedios = 0;
for (const est of estudiantes) {
  sumaPromedios += est.promedio;
}
const promedioGeneral = (sumaPromedios / estudiantes.length).toFixed(2);
console.log("Promedio general:", promedioGeneral);

// Encontrar al mejor estudiante
let mejor = estudiantes[0];
for (const est of estudiantes) {
  if (est.promedio > mejor.promedio) {
    mejor = est;
  }
}
console.log("Mejor estudiante:", mejor.nombre, "—", mejor.promedio);

// Filtrar: solo activos
const activos = [];
for (const est of estudiantes) {
  if (est.activa) activos.push(est);
}
console.log("Estudiantes activos:", activos.length);`,
    keyPoints: [
      'Un array de objetos es una lista donde cada elemento es un objeto con las mismas propiedades.',
      'Se accede a propiedades de un elemento con: array[i].propiedad o en bucle: elemento.propiedad.',
      'Es la estructura más común en aplicaciones reales: usuarios, productos, pedidos, etc.',
      'Puedes recorrer con for...of o forEach para procesar cada objeto.',
      'Para buscar un elemento específico usa un bucle con break cuando lo encuentres.',
      'Filtrar manualmente con push() a un nuevo array es el fundamento de filter() que aprenderás después.',
    ],
    exercise: {
      description:
        'Crea un array de 5 productos con: id, nombre, precio, categoria ("tecnología" o "hogar"), y enStock (boolean). Luego: 1) Muestra todos los productos con su precio. 2) Calcula el precio total de todos los productos. 3) Encuentra el producto más barato. 4) Crea un nuevo array solo con los productos que están en stock.',
      hint: 'Para el más barato: empieza con let masBarato = productos[0] y compara en el bucle. Para el array filtrado: crea let enStock = [] y usa push() dentro de un if.',
    },
    quiz: [
      {
        question: '¿Cómo se accede al precio del segundo producto en este array?\n\nconst items = [{nombre: "A", precio: 10}, {nombre: "B", precio: 20}]',
        options: ['items.precio[1]', 'items[1][precio]', 'items[1].precio', 'items.1.precio'],
        correctAnswer: 'items[1].precio',
        correctFeedback:
          'Correcto. items[1] accede al segundo objeto del array (índice 1), y .precio accede a su propiedad precio.',
        incorrectFeedback:
          'No es correcto. Para acceder al segundo objeto: items[1] (índice 1). Luego, al precio: .precio. La sintaxis correcta es items[1].precio.',
      },
      {
        question: '¿Para qué sirve un array de objetos?',
        options: [
          'Solo para guardar números organizados',
          'Para representar listas de entidades con múltiples propiedades',
          'Es equivalente a usar un objeto con arrays',
          'Solo funciona con métodos avanzados como map y filter',
        ],
        correctAnswer: 'Para representar listas de entidades con múltiples propiedades',
        correctFeedback:
          'Correcto. Un array de objetos permite tener una lista donde cada elemento es una entidad compleja con varias propiedades (usuarios, productos, tareas, etc.).',
        incorrectFeedback:
          'No es correcto. Los arrays de objetos son ideales para representar listas de entidades complejas, como una lista de usuarios, productos o pedidos.',
      },
    ],
  },

  // ── Lección 27 ────────────────────────────────────────────────────────────
  {
    slug: 'array-map',
    title: 'Métodos modernos de arrays: map',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 27,
    description: 'Aprende a transformar arrays usando map().',
    explanation: `\`map()\` es uno de los métodos más útiles y usados en JavaScript moderno. Crea un **nuevo array** aplicando una transformación a cada elemento del original, sin modificar el original.

**Sintaxis:**
\`\`\`js
const nuevoArray = array.map(function(elemento) {
  return transformacion(elemento);
});

// Con arrow function:
const nuevoArray = array.map(elemento => transformacion(elemento));
\`\`\`

**Regla clave:** \`map()\` siempre devuelve un array **del mismo tamaño** que el original. Si el array tiene 5 elementos, el resultado tendrá 5 elementos.

**Ejemplos:**

\`\`\`js
// Doblar cada número
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // → [2, 4, 6, 8, 10]

// Convertir a mayúsculas
const nombres = ["ana", "luis", "sofía"];
const mayusculas = nombres.map(n => n.toUpperCase());
// → ["ANA", "LUIS", "SOFÍA"]

// Extraer una propiedad de cada objeto
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
];
const nombresUsuarios = usuarios.map(u => u.nombre);
// → ["Ana", "Luis"]
\`\`\`

**map() vs forEach()**

- \`forEach()\`: ejecuta una función por cada elemento pero **no devuelve nada** (devuelve undefined).
- \`map()\`: ejecuta una función por cada elemento y **devuelve un nuevo array**.

Usa \`map()\` cuando quieras transformar datos y usar el resultado.
Usa \`forEach()\` cuando solo quieras ejecutar algo (como console.log) sin necesitar el resultado.`,
    codeExample: `// ── map básico: transformar números ─────────────────────────────────────

const precios = [100, 250, 80, 320, 150];

// Aplicar 10% de descuento a todos
const preciosConDescuento = precios.map(precio => precio * 0.9);
console.log("Original:", precios);
console.log("Con descuento:", preciosConDescuento);
// → [90, 225, 72, 288, 135]

// ── map con strings ───────────────────────────────────────────────────────

const ciudades = ["bogotá", "lima", "santiago", "buenos aires"];
const ciudadesFormateadas = ciudades.map(ciudad =>
  ciudad.charAt(0).toUpperCase() + ciudad.slice(1)
);
console.log(ciudadesFormateadas);
// → ["Bogotá", "Lima", "Santiago", "Buenos aires"]

// ── map con array de objetos ──────────────────────────────────────────────

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 },
];

// Agregar propiedad "precioConIVA" a cada objeto
const productosConIVA = productos.map(p => ({
  ...p,                           // copia todas las propiedades
  precioConIVA: p.precio * 1.16,  // agrega la nueva
}));

console.log(productosConIVA);
// → [{ nombre: "Laptop", precio: 800, precioConIVA: 928 }, ...]

// Extraer solo los nombres
const nombres = productos.map(p => p.nombre);
console.log(nombres); // → ["Laptop", "Mouse", "Teclado"]`,
    keyPoints: [
      'map() transforma cada elemento de un array y devuelve un nuevo array del mismo tamaño.',
      'No modifica el array original — siempre crea uno nuevo.',
      'La función que recibe debe tener un return con el valor transformado.',
      'Es ideal para transformar listas: aplicar descuentos, formatear strings, extraer propiedades.',
      'forEach() ejecuta código por cada elemento sin devolver nada; map() devuelve el array transformado.',
      'map() con objetos y el spread (...obj) permite crear nuevos objetos con propiedades adicionales.',
    ],
    exercise: {
      description:
        'Dado el array de calificaciones [85, 70, 92, 60, 78, 95, 55]: 1) Usa map() para convertir cada nota al formato "X/100". 2) Usa map() para determinar si cada nota aprueba (>= 60): devuelve un array de booleanos. 3) Dado el array de productos [{nombre:"Libro", precio:15}, {nombre:"Cuaderno", precio:5}], usa map() para agregar el precio en pesos (multiplica por 3.5 si el precio base es en dólares).',
      hint: 'Para el formato "X/100": precio => precio + "/100" o usando template literals. Para el array de booleanos: nota => nota >= 60.',
    },
    quiz: [
      {
        question: '¿Qué devuelve map() cuando lo usas en un array?',
        options: [
          'El mismo array modificado',
          'Un nuevo array con los resultados transformados',
          'undefined',
          'El número de elementos procesados',
        ],
        correctAnswer: 'Un nuevo array con los resultados transformados',
        correctFeedback:
          'Correcto. map() siempre devuelve un NUEVO array del mismo tamaño, con cada elemento transformado por la función que le pasas.',
        incorrectFeedback:
          'No es correcto. map() crea y devuelve un nuevo array con los elementos transformados. El array original no se modifica.',
      },
      {
        question: '¿Qué muestra este código?\n\nconst nums = [1, 2, 3];\nconst dobles = nums.map(n => n * 2);\nconsole.log(dobles)',
        options: ['[1, 2, 3]', '[2, 4, 6]', 'undefined', '[1, 4, 9]'],
        correctAnswer: '[2, 4, 6]',
        correctFeedback:
          'Correcto. map(n => n * 2) aplica la multiplicación por 2 a cada elemento: 1*2=2, 2*2=4, 3*2=6. Resultado: [2, 4, 6].',
        incorrectFeedback:
          'No es correcto. map(n => n * 2) multiplica cada elemento por 2: [1*2, 2*2, 3*2] = [2, 4, 6].',
      },
    ],
  },

  // ── Lección 28 ────────────────────────────────────────────────────────────
  {
    slug: 'array-filter',
    title: 'Métodos modernos de arrays: filter',
    module: 'Arrays y objetos',
    moduleNumber: 4,
    order: 28,
    description: 'Aprende a filtrar elementos de un array usando filter().',
    explanation: `\`filter()\` crea un **nuevo array** con solo los elementos que cumplen una condición. Es el equivalente de "filtrar" una lista para quedarte solo con lo que necesitas.

**Sintaxis:**
\`\`\`js
const resultado = array.filter(elemento => condicion);
\`\`\`

La función que recibe \`filter()\` debe devolver \`true\` (mantener el elemento) o \`false\` (descartarlo).

**Ejemplos:**
\`\`\`js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(n => n % 2 === 0);
// → [2, 4, 6, 8, 10]

const mayoresDe5 = numeros.filter(n => n > 5);
// → [6, 7, 8, 9, 10]
\`\`\`

**filter() con objetos:**
\`\`\`js
const productos = [
  { nombre: "Laptop", precio: 999, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: false },
  { nombre: "Teclado", precio: 55, disponible: true },
];

const disponibles = productos.filter(p => p.disponible);
// → [{ nombre: "Laptop", ... }, { nombre: "Teclado", ... }]

const economicos = productos.filter(p => p.precio < 100);
// → [{ nombre: "Mouse", ... }, { nombre: "Teclado", ... }]
\`\`\`

**filter() no modifica el original** — siempre devuelve un array nuevo.

**Diferencia importante:**
- \`filter()\` puede devolver un array **más pequeño** (o vacío si ninguno cumple).
- \`map()\` siempre devuelve un array del **mismo tamaño**.

**Combinando map() y filter():**
\`\`\`js
// Primero filtrar, luego transformar
const preciosBaratos = productos
  .filter(p => p.precio < 100)
  .map(p => p.precio);
// → [25, 55]
\`\`\``,
    codeExample: `// ── filter básico ────────────────────────────────────────────────────────

const calificaciones = [88, 54, 72, 91, 40, 78, 65, 33, 85];

const aprobados = calificaciones.filter(nota => nota >= 60);
console.log("Aprobados:", aprobados);
// → [88, 72, 91, 78, 65, 85]

const reprobados = calificaciones.filter(nota => nota < 60);
console.log("Reprobados:", reprobados);
// → [54, 40, 33]

console.log(\`\${aprobados.length} de \${calificaciones.length} aprobaron\`);

// ── filter con objetos ────────────────────────────────────────────────────

const empleados = [
  { nombre: "Laura", departamento: "Ventas", salario: 2800 },
  { nombre: "Marco", departamento: "Tecnología", salario: 4200 },
  { nombre: "Elena", departamento: "Ventas", salario: 3100 },
  { nombre: "David", departamento: "Tecnología", salario: 3800 },
  { nombre: "Sara", departamento: "RRHH", salario: 2500 },
];

// Solo el departamento de Tecnología
const tecnologia = empleados.filter(e => e.departamento === "Tecnología");
console.log("Empleados en Tecnología:", tecnologia.length);

// Empleados con salario mayor a 3000
const bienPagados = empleados.filter(e => e.salario > 3000);
bienPagados.forEach(e => console.log(\`\${e.nombre}: $\${e.salario}\`));

// ── Encadenar filter y map ────────────────────────────────────────────────

const nombresVentas = empleados
  .filter(e => e.departamento === "Ventas")
  .map(e => e.nombre);

console.log("Equipo de Ventas:", nombresVentas);
// → ["Laura", "Elena"]`,
    keyPoints: [
      'filter() devuelve un nuevo array con solo los elementos cuya función devuelve true.',
      'No modifica el array original.',
      'Puede devolver un array más pequeño o incluso vacío [] si ningún elemento cumple.',
      'La función de filter() actúa como un "test": true = conservar, false = descartar.',
      'map() transforma todos los elementos; filter() selecciona cuáles conservar.',
      'Se pueden encadenar: array.filter(...).map(...) para filtrar y luego transformar.',
    ],
    exercise: {
      description:
        'Dado el array de tareas: [{titulo:"Estudiar JS", completada:true, prioridad:"alta"}, {titulo:"Hacer ejercicio", completada:false, prioridad:"media"}, {titulo:"Leer", completada:true, prioridad:"baja"}, {titulo:"Programar", completada:false, prioridad:"alta"}, {titulo:"Dormir bien", completada:false, prioridad:"alta"}]: 1) Filtra solo las tareas completadas. 2) Filtra solo las de prioridad "alta". 3) Filtra las que NO están completadas Y son de prioridad "alta". 4) Muestra cuántas tareas hay en cada grupo.',
      hint: 'Para combinar condiciones usa &&: tarea => !tarea.completada && tarea.prioridad === "alta". Recuerda usar .length después del filter para contar.',
    },
    quiz: [
      {
        question: '¿Qué produce [1,2,3,4,5].filter(n => n > 3)?',
        options: ['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', 'true'],
        correctAnswer: '[4, 5]',
        correctFeedback:
          'Correcto. filter(n => n > 3) conserva solo los elementos mayores a 3: 4 y 5.',
        incorrectFeedback:
          'No es correcto. filter() conserva los elementos cuya función devuelve true. n > 3 es true para 4 y 5. Resultado: [4, 5].',
      },
      {
        question: '¿Cuál es la diferencia entre map() y filter()?',
        options: [
          'map() es más lento; filter() es más rápido',
          'map() transforma todos los elementos; filter() selecciona cuáles conservar',
          'map() elimina elementos; filter() los agrega',
          'Son exactamente lo mismo',
        ],
        correctAnswer: 'map() transforma todos los elementos; filter() selecciona cuáles conservar',
        correctFeedback:
          'Correcto. map() aplica una transformación a TODOS los elementos. filter() decide qué elementos CONSERVAR según una condición.',
        incorrectFeedback:
          'No es correcto. map() transforma cada elemento y el array resultante tiene el mismo tamaño. filter() selecciona elementos y el array resultante puede ser más pequeño.',
      },
    ],
  },
]

export const jsModule4: Module = {
  number: 4,
  title: 'Arrays y objetos',
  level: 'básico',
  lessons: lessonsJsModule4,
}
