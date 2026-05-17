import type { Lesson, Module } from '@/types'

export const lessonsJsModule7: Lesson[] = [
  // ── Lección 44 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-un-objeto',
    title: '¿Qué es un objeto?',
    module: 'Objetos',
    moduleNumber: 7,
    order: 44,
    description:
      'Aprende qué es un objeto en JavaScript y cómo representa información usando propiedades y valores.',
    explanation: `Un **objeto** en JavaScript es una colección de propiedades, donde cada propiedad tiene un **nombre (clave)** y un **valor**. Los objetos sirven para agrupar información relacionada en una sola variable.

**La analogía perfecta**

Piensa en una ficha de estudiante. Esa ficha tiene: nombre, edad, matrícula, promedio, si está activo. Todos esos datos son del mismo estudiante — tiene sentido agruparlos.

Sin objeto:
\`\`\`js
let nombreEstudiante = "Ana";
let edadEstudiante = 20;
let promedioEstudiante = 8.5;
\`\`\`

Con objeto:
\`\`\`js
let estudiante = {
  nombre: "Ana",
  edad: 20,
  promedio: 8.5,
};
\`\`\`

**Sintaxis básica**

\`\`\`js
let objeto = {
  clave1: valor1,
  clave2: valor2,
};
\`\`\`

- Se usa \`{}\` (llaves)
- Cada par es \`clave: valor\`
- Las propiedades se separan con comas
- La clave es siempre un string (pero no requiere comillas si es un nombre simple)

**Los valores pueden ser de cualquier tipo:**
\`\`\`js
let usuario = {
  nombre: "Carlos",       // string
  edad: 25,               // número
  activo: true,           // booleano
  puntaje: null,          // null
  notas: [85, 90, 78],   // array
  direccion: {            // objeto anidado
    ciudad: "Madrid",
    pais: "España",
  },
};
\`\`\`

**¿Por qué son fundamentales los objetos?**

Casi todo en JavaScript es un objeto o se parece a uno. Los arrays, las funciones, las fechas — todos son tipos especiales de objetos. Y en aplicaciones reales, los datos de usuarios, productos, pedidos, etc., vienen representados como objetos.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Objeto simple: un producto de tienda
let producto = {
  nombre: "Laptop",
  marca: "TechBrand",
  precio: 1200,
  disponible: true,
  categorias: ["tecnología", "computadoras"],
};

console.log(producto);
// → { nombre: "Laptop", marca: "TechBrand", precio: 1200, disponible: true, ... }

// Objeto de usuario
let usuario = {
  id: 1,
  nombre: "Ana García",
  email: "ana@ejemplo.com",
  activo: true,
  puntaje: 0,
};

console.log(usuario);

// Objeto con datos de un pedido
let pedido = {
  numero: "PED-001",
  cliente: "Carlos López",
  total: 1500,
  pagado: false,
  items: ["Laptop", "Mouse", "Teclado"],
  fecha: "2024-01-15",
};

console.log(pedido);
console.log("Cliente:", pedido.cliente);
console.log("Total:", pedido.total);`,
    keyPoints: [
      'Un objeto es una colección de propiedades con clave y valor.',
      'Se crea con llaves {} y cada propiedad usa el formato clave: valor.',
      'Los valores pueden ser strings, números, booleanos, arrays, u otros objetos.',
      'Los objetos agrupan datos relacionados en una sola variable.',
      'Las claves (propiedades) son strings, pero generalmente se escriben sin comillas.',
      'Los objetos son la estructura de datos más usada en aplicaciones reales.',
    ],
    exercise: {
      description:
        'Crea un objeto llamado miPerfil con al menos 6 propiedades: nombre, apellido, edad, ciudad, lenguajeFavorito, aprendiendo (array con 2 tecnologías), y graduado (booleano). Muestra el objeto completo con console.log y luego muestra solo la propiedad lenguajeFavorito.',
      hint: 'Recuerda separar cada propiedad con coma. El valor de aprendiendo debe ser un array: ["JavaScript", "CSS"].',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para crear un objeto con nombre y edad?',
        options: [
          'let p = (nombre: "Ana", edad: 20)',
          'let p = [nombre: "Ana", edad: 20]',
          'let p = {nombre: "Ana", edad: 20}',
          'let p = <nombre: "Ana", edad: 20>',
        ],
        correctAnswer: 'let p = {nombre: "Ana", edad: 20}',
        correctFeedback:
          'Correcto. Los objetos usan llaves {} con pares clave: valor separados por comas.',
        incorrectFeedback:
          'Incorrecto. Los objetos se crean con llaves {} y pares clave: valor. Los paréntesis son para funciones, los corchetes para arrays.',
      },
      {
        question: '¿Qué representa la "clave" en un objeto de JavaScript?',
        options: [
          'El índice numérico del elemento',
          'El nombre de la propiedad del objeto',
          'El tipo de dato del valor',
          'La función que accede al valor',
        ],
        correctAnswer: 'El nombre de la propiedad del objeto',
        correctFeedback:
          'Correcto. En { nombre: "Ana" }, "nombre" es la clave (propiedad) y "Ana" es el valor.',
        incorrectFeedback:
          'Incorrecto. En un objeto, la "clave" es el nombre de la propiedad (como nombre, edad, precio). Es diferente a un índice numérico que usan los arrays.',
      },
      {
        question: '¿Cuál de estas afirmaciones sobre objetos es correcta?',
        options: [
          'Los objetos solo pueden guardar strings',
          'Un objeto puede tener como valor a otro objeto',
          'Los objetos deben tener exactamente 3 propiedades',
          'No se pueden mezclar tipos de valores en un objeto',
        ],
        correctAnswer: 'Un objeto puede tener como valor a otro objeto',
        correctFeedback:
          'Correcto. Los objetos pueden contener cualquier tipo de valor, incluyendo otros objetos (objetos anidados).',
        incorrectFeedback:
          'Incorrecto. Los objetos son muy flexibles: pueden tener cualquier número de propiedades y sus valores pueden ser strings, números, booleanos, arrays, e incluso otros objetos.',
      },
      {
        question: '¿Por qué es mejor usar un objeto que 5 variables separadas para describir un usuario?',
        options: [
          'Porque JavaScript no permite más de 5 variables',
          'Porque el objeto agrupa toda la información relacionada en una sola variable',
          'Porque los objetos son más rápidos que las variables',
          'No hay diferencia, es solo preferencia de estilo',
        ],
        correctAnswer: 'Porque el objeto agrupa toda la información relacionada en una sola variable',
        correctFeedback:
          'Correcto. Agrupar datos relacionados en un objeto hace el código más organizado, legible y fácil de pasar a funciones.',
        incorrectFeedback:
          'Incorrecto. La ventaja principal de los objetos es la organización: en lugar de tener nombreUsuario, edadUsuario, emailUsuario por separado, todo vive en un solo lugar bien estructurado.',
      },
    ],
  },

  // ── Lección 45 ────────────────────────────────────────────────────────────
  {
    slug: 'crear-objetos',
    title: 'Crear objetos',
    module: 'Objetos',
    moduleNumber: 7,
    order: 45,
    description:
      'Aprende a crear objetos con diferentes tipos de propiedades.',
    explanation: `Crear objetos en JavaScript es muy flexible. Puedes hacerlo de varias formas y con cualquier combinación de tipos de datos.

**Objeto literal (la forma más común)**
\`\`\`js
let producto = {
  nombre: "Laptop",
  precio: 1200,
  disponible: true,
};
\`\`\`

**Objeto vacío (para llenarlo después)**
\`\`\`js
let nuevoPedido = {};
\`\`\`

**Claves con caracteres especiales**

Si la clave tiene espacios o caracteres especiales, debes ponerla entre comillas:
\`\`\`js
let config = {
  "color-fondo": "#1a1a1a",
  "tamaño-fuente": 16,
  idioma: "es",
};
\`\`\`

**Claves dinámicas (computed)**

Si la clave viene de una variable:
\`\`\`js
let clave = "precio";
let obj = { [clave]: 99 }; // { precio: 99 }
\`\`\`

**Objetos complejos: combinando tipos**
\`\`\`js
let estudiante = {
  nombre: "Ana",
  edad: 20,
  aprobado: true,
  materias: ["Matemáticas", "Inglés"],
  contacto: {
    email: "ana@mail.com",
    telefono: "555-1234",
  },
};
\`\`\`

**Buenas prácticas:**
- Usa nombres de propiedades descriptivos en camelCase: \`nombreCompleto\`, \`precioFinal\`.
- Agrupa información relacionada; si el objeto crece demasiado, divídelo.
- Termina la última propiedad con coma (trailing comma) — hace el diff de git más limpio.`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// Objeto básico
let producto = {
  nombre: "Monitor 4K",
  marca: "ViewSonic",
  precio: 450,
  disponible: true,
};

// Objeto con múltiples tipos de valores
let estudiante = {
  nombre: "Carlos Ruiz",
  matricula: "MX-2024-001",
  edad: 19,
  promedio: 8.7,
  activo: true,
  materias: ["Álgebra", "Inglés", "Historia"],
  contacto: {
    email: "carlos@escuela.mx",
    telefono: "555-9876",
  },
};

console.log(estudiante);
console.log("Nombre:", estudiante.nombre);
console.log("Email:", estudiante.contacto.email);

// Objeto vacío que se llenará después
let carrito = {};
console.log("Carrito vacío:", carrito);

// Múltiples objetos con la misma estructura (plantilla mental)
let producto1 = { nombre: "Teclado", precio: 80, stock: 15 };
let producto2 = { nombre: "Mouse", precio: 25, stock: 40 };
let producto3 = { nombre: "Webcam", precio: 60, stock: 8 };

console.log(producto1);
console.log(producto2);
console.log(producto3);`,
    keyPoints: [
      'La forma más común de crear objetos es la sintaxis literal con llaves {}.',
      'Los objetos pueden contener propiedades de cualquier tipo de dato.',
      'Las propiedades con espacios o caracteres especiales requieren comillas.',
      'Un objeto vacío {} es válido y útil para llenarlo dinámicamente.',
      'Los objetos anidados permiten organizar información más compleja.',
      'Usa camelCase para los nombres de propiedades: precioFinal, nombreCompleto.',
    ],
    exercise: {
      description:
        'Crea un objeto que represente tu videojuego o película favorita. Debe incluir: titulo, genero, anioLanzamiento, disponibleEnLinea (booleano), plataformas (array con al menos 2 opciones), y director (objeto con nombre y nacionalidad). Muestra todo el objeto y también el nombre del director usando notación de punto.',
      hint: 'Para el director: director: { nombre: "...", nacionalidad: "..." }. Para acceder: pelicula.director.nombre.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma más común y recomendada de crear objetos en JavaScript?',
        options: [
          'new Object()',
          'Object.create()',
          'Sintaxis literal con llaves {}',
          'function crearObjeto()',
        ],
        correctAnswer: 'Sintaxis literal con llaves {}',
        correctFeedback:
          'Correcto. La sintaxis literal let obj = { clave: valor } es la más legible, concisa y usada en código moderno.',
        incorrectFeedback:
          'Incorrecto. Aunque new Object() y Object.create() son válidos, la forma más común y recomendada es la sintaxis literal: let obj = { clave: valor }.',
      },
      {
        question: '¿Cuándo necesitas comillas alrededor de la clave de un objeto?',
        options: [
          'Siempre, es obligatorio',
          'Nunca, las comillas no se usan en objetos',
          'Cuando la clave contiene espacios o caracteres especiales',
          'Solo cuando el valor es un string',
        ],
        correctAnswer: 'Cuando la clave contiene espacios o caracteres especiales',
        correctFeedback:
          'Correcto. Claves como "color-fondo" o "mi propiedad" requieren comillas porque contienen guion o espacio.',
        incorrectFeedback:
          'Incorrecto. Las comillas son opcionales para claves simples (nombre, precio), pero obligatorias cuando la clave tiene espacios, guiones u otros caracteres especiales.',
      },
      {
        question: '¿Cuál es la convención para nombrar propiedades en objetos JavaScript?',
        options: [
          'snake_case: nombre_completo',
          'PascalCase: NombreCompleto',
          'camelCase: nombreCompleto',
          'UPPER_CASE: NOMBRE_COMPLETO',
        ],
        correctAnswer: 'camelCase: nombreCompleto',
        correctFeedback:
          'Correcto. En JavaScript, la convención para propiedades de objetos es camelCase: la primera palabra en minúscula y las siguientes con mayúscula inicial.',
        incorrectFeedback:
          'Incorrecto. La convención estándar en JavaScript para propiedades de objetos es camelCase: nombreCompleto, precioFinal, fechaCreacion.',
      },
    ],
  },

  // ── Lección 46 ────────────────────────────────────────────────────────────
  {
    slug: 'acceder-propiedades-objetos',
    title: 'Acceder a propiedades',
    module: 'Objetos',
    moduleNumber: 7,
    order: 46,
    description:
      'Aprende a leer propiedades usando punto y corchetes.',
    explanation: `Hay dos formas de acceder a las propiedades de un objeto: **notación de punto** y **notación de corchetes**.

**Notación de punto (la más usada)**
\`\`\`js
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre); // → "Ana"
console.log(usuario.edad);   // → 25
\`\`\`

**Notación de corchetes (con string)**

Útil cuando la clave tiene caracteres especiales o viene de una variable:
\`\`\`js
console.log(usuario["nombre"]); // → "Ana"
\`\`\`

**¿Cuándo usar corchetes?**

1. Clave con caracteres especiales:
\`\`\`js
let config = { "color-fondo": "#1a1a1a" };
console.log(config["color-fondo"]); // → "#1a1a1a"
// config.color-fondo daría error (lo interpreta como resta)
\`\`\`

2. Clave dinámica (viene de una variable):
\`\`\`js
let propiedad = "nombre";
console.log(usuario[propiedad]); // → "Ana"
\`\`\`

**Acceder a propiedades anidadas**
\`\`\`js
let pedido = {
  cliente: { nombre: "Carlos", ciudad: "Madrid" },
};
console.log(pedido.cliente.nombre);  // → "Carlos"
console.log(pedido.cliente.ciudad);  // → "Madrid"
\`\`\`

**Propiedad que no existe**
\`\`\`js
console.log(usuario.telefono); // → undefined (no error)
\`\`\`

Igual que con los arrays, acceder a una propiedad inexistente devuelve \`undefined\`. Para evitar errores al encadenar, puedes usar el **operador de encadenamiento opcional**:
\`\`\`js
console.log(usuario?.telefono?.extension); // → undefined (sin error)
\`\`\``,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

let producto = {
  nombre: "Auriculares Pro",
  marca: "SoundMax",
  precio: 150,
  disponible: true,
  especificaciones: {
    color: "negro",
    peso: "250g",
    conectividad: "Bluetooth",
  },
};

// Notación de punto
console.log(producto.nombre);    // → "Auriculares Pro"
console.log(producto.precio);    // → 150
console.log(producto.disponible); // → true

// Notación de corchetes
console.log(producto["marca"]);  // → "SoundMax"

// Objeto anidado con punto encadenado
console.log(producto.especificaciones.color);           // → "negro"
console.log(producto.especificaciones.conectividad);    // → "Bluetooth"

// Propiedad dinámica con corchetes
let campoAMostrar = "precio";
console.log(producto[campoAMostrar]); // → 150

// Propiedad que no existe
console.log(producto.descuento);     // → undefined (sin error)

// Encadenamiento opcional (?.)
console.log(producto.garantia?.meses); // → undefined (sin error, aunque garantia no existe)`,
    keyPoints: [
      'La notación de punto (objeto.propiedad) es la más usada y legible.',
      'La notación de corchetes (objeto["propiedad"]) permite claves dinámicas o con caracteres especiales.',
      'Para objetos anidados se encadenan los puntos: objeto.nivel1.nivel2.',
      'Acceder a una propiedad inexistente devuelve undefined, no un error.',
      'El operador ?. (optional chaining) evita errores en propiedades anidadas que podrían no existir.',
    ],
    exercise: {
      description:
        'Crea un objeto libro con: titulo, autor (objeto con nombre y apellido), anio, paginas, disponible (booleano), y temas (array con 3 strings). Luego: 1) muestra el titulo con notación de punto, 2) muestra el apellido del autor con notación de punto encadenada, 3) muestra el primer tema del array, 4) usa notación de corchetes para mostrar el anio, 5) intenta acceder a libro.editorial y muestra qué devuelve.',
      hint: 'Para autor: libro.autor.apellido. Para el primer tema: libro.temas[0]. Para corchetes: libro["anio"].',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre objeto.clave y objeto["clave"]?',
        options: [
          'No hay diferencia, son completamente equivalentes en todos los casos',
          'La notación de punto es más común; los corchetes permiten claves dinámicas o especiales',
          'La notación de punto es más rápida',
          'Los corchetes solo funcionan con números',
        ],
        correctAnswer: 'La notación de punto es más común; los corchetes permiten claves dinámicas o especiales',
        correctFeedback:
          'Correcto. Ambas acceden a la misma propiedad, pero los corchetes son necesarios cuando la clave viene de una variable o tiene caracteres especiales.',
        incorrectFeedback:
          'Incorrecto. La diferencia práctica es que los corchetes permiten: 1) claves con caracteres especiales ("color-fondo"), 2) claves dinámicas que vienen de una variable.',
      },
      {
        question: 'Dado: let u = { nombre: "Luis", contacto: { email: "luis@mail.com" } }\n¿Cómo accedes al email?',
        options: [
          'u.email',
          'u.contacto[email]',
          'u.contacto.email',
          'u["contacto"]["email"]',
        ],
        correctAnswer: 'u.contacto.email',
        correctFeedback:
          'Correcto. Para propiedades anidadas se encadenan los puntos: u.contacto.email.',
        incorrectFeedback:
          'Incorrecto. Para acceder a una propiedad dentro de un objeto anidado, se encadenan los puntos: u.contacto.email. También funciona u["contacto"]["email"], pero es menos legible.',
      },
      {
        question: '¿Qué devuelve acceder a una propiedad que no existe en un objeto?',
        options: ['null', 'Error de JavaScript', 'undefined', '0'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. Igual que con los arrays, JavaScript devuelve undefined al acceder a una propiedad inexistente, sin lanzar un error.',
        incorrectFeedback:
          'Incorrecto. JavaScript devuelve undefined cuando accedes a una propiedad que no existe en el objeto. No lanza un error, lo que puede hacer que los bugs sean difíciles de encontrar.',
      },
      {
        question: '¿Cuándo necesitas usar la notación de corchetes en lugar de punto?',
        options: [
          'Siempre, es obligatorio usar corchetes',
          'Cuando la clave tiene guiones o viene de una variable',
          'Solo con arrays, no con objetos',
          'Cuando el valor es un número',
        ],
        correctAnswer: 'Cuando la clave tiene guiones o viene de una variable',
        correctFeedback:
          'Correcto. Los corchetes son necesarios para claves con caracteres especiales ("color-fondo") o cuando la clave es dinámica (viene de una variable).',
        incorrectFeedback:
          'Incorrecto. Los corchetes son necesarios en dos casos: 1) la clave tiene caracteres especiales como guiones (config["color-fondo"]), o 2) la clave viene de una variable (obj[variableClave]).',
      },
    ],
  },

  // ── Lección 47 ────────────────────────────────────────────────────────────
  {
    slug: 'agregar-modificar-eliminar-propiedades',
    title: 'Agregar, modificar y eliminar propiedades',
    module: 'Objetos',
    moduleNumber: 7,
    order: 47,
    description:
      'Aprende a cambiar la información dentro de un objeto de forma práctica.',
    explanation: `Los objetos en JavaScript son dinámicos: puedes agregar nuevas propiedades, modificar las existentes y eliminar las que ya no necesitas.

**Modificar una propiedad existente**
\`\`\`js
let producto = { nombre: "Mouse", precio: 25 };
producto.precio = 30; // modifica el precio
console.log(producto.precio); // → 30
\`\`\`

**Agregar una nueva propiedad**

Simplemente asignas a una clave que no existe:
\`\`\`js
producto.stock = 100;       // agrega la propiedad stock
producto.disponible = true; // agrega disponible
console.log(producto);
// → { nombre: "Mouse", precio: 30, stock: 100, disponible: true }
\`\`\`

**Eliminar una propiedad con delete**
\`\`\`js
delete producto.stock;
console.log(producto.stock); // → undefined
\`\`\`

**Verificar si una propiedad existe**
\`\`\`js
console.log("precio" in producto);    // → true
console.log("garantia" in producto);  // → false
\`\`\`

**Actualización condicional**
\`\`\`js
// Si la propiedad no existe, inicializarla
if (!("visitas" in producto)) {
  producto.visitas = 0;
}
producto.visitas++;
\`\`\`

**Importante: los objetos son mutables**

Cuando modificas un objeto, el cambio es real y permanente. Si pasas un objeto a una función y la función lo modifica, el objeto original también cambia.`,
    codeExample: `// ── app.js ───────────────────────────────────────────────────────────────

let usuario = {
  nombre: "Ana García",
  email: "ana@mail.com",
  activo: true,
  puntos: 0,
};

console.log("Estado inicial:", usuario);

// Modificar propiedad existente
usuario.email = "ana.garcia@mail.com";
usuario.puntos = 50;
console.log("Después de modificar:", usuario);

// Agregar nuevas propiedades
usuario.ciudad = "Barcelona";
usuario.nivel = "básico";
console.log("Después de agregar:", usuario);

// Verificar si existe una propiedad
console.log("¿Tiene email?", "email" in usuario);      // → true
console.log("¿Tiene teléfono?", "telefono" in usuario); // → false

// Incrementar un valor numérico
usuario.puntos += 100;
console.log("Puntos actuales:", usuario.puntos); // → 150

// Eliminar una propiedad
delete usuario.nivel;
console.log("Después de delete nivel:", usuario);
console.log("¿Tiene nivel?", "nivel" in usuario); // → false

// Patrón: inicializar si no existe
if (!("visitas" in usuario)) {
  usuario.visitas = 0;
}
usuario.visitas++;
console.log("Visitas:", usuario.visitas); // → 1`,
    keyPoints: [
      'Se modifica una propiedad asignando un nuevo valor: objeto.clave = nuevoValor.',
      'Se agrega una propiedad nueva exactamente igual: objeto.nuevaClave = valor.',
      'El operador delete elimina una propiedad del objeto.',
      'El operador in verifica si una propiedad existe: "clave" in objeto.',
      'Los objetos son mutables: los cambios son permanentes en el objeto original.',
      'Si pasas un objeto a una función, la función puede modificar el objeto original.',
    ],
    exercise: {
      description:
        'Crea un objeto tarea con: titulo, completada (false), prioridad ("media"). Luego: 1) modifica prioridad a "alta", 2) agrega la propiedad fechaVencimiento con una fecha como string, 3) agrega la propiedad notas como un array vacío, 4) verifica si existe "completada" con in, 5) cambia completada a true, 6) elimina fechaVencimiento con delete, 7) muestra el objeto final.',
      hint: 'Para notas vacías: tarea.notas = []. Para verificar: console.log("completada" in tarea).',
    },
    quiz: [
      {
        question: '¿Cómo se agrega una nueva propiedad a un objeto existente?',
        options: [
          'objeto.add("clave", valor)',
          'objeto.push({clave: valor})',
          'objeto.clave = valor',
          'objeto.insert("clave", valor)',
        ],
        correctAnswer: 'objeto.clave = valor',
        correctFeedback:
          'Correcto. Para agregar una propiedad, simplemente asignas a una clave que no existe: si no existe, se crea automáticamente.',
        incorrectFeedback:
          'Incorrecto. En JavaScript no hay método add() ni insert() para objetos. Para agregar una propiedad, simplemente asignas: objeto.nuevaClave = valor.',
      },
      {
        question: '¿Qué hace el operador delete en un objeto?',
        options: [
          'Elimina todo el objeto',
          'Elimina una propiedad específica del objeto',
          'Establece la propiedad en null',
          'Lanza un error si la propiedad no existe',
        ],
        correctAnswer: 'Elimina una propiedad específica del objeto',
        correctFeedback:
          'Correcto. delete objeto.propiedad elimina esa propiedad del objeto. Luego objeto.propiedad devuelve undefined.',
        incorrectFeedback:
          'Incorrecto. delete no elimina el objeto completo ni establece null. Elimina una propiedad específica. Después de delete objeto.precio, acceder a objeto.precio devolverá undefined.',
      },
      {
        question: '¿Cuál es la forma correcta de verificar si un objeto tiene una propiedad?',
        options: [
          'objeto.clave !== undefined',
          '"clave" in objeto',
          'objeto.has("clave")',
          'objeto.contains("clave")',
        ],
        correctAnswer: '"clave" in objeto',
        correctFeedback:
          'Correcto. El operador in verifica si la propiedad existe en el objeto: "email" in usuario devuelve true o false.',
        incorrectFeedback:
          'Incorrecto. La forma más precisa es usar el operador in: "clave" in objeto. Verificar !== undefined puede dar falso positivo si la propiedad existe pero su valor es undefined.',
      },
      {
        question: 'Dado: let p = { nombre: "Ana", edad: 20 };\np.ciudad = "Lima";\nconsole.log(Object.keys(p).length);\n¿Qué imprime?',
        options: ['2', '3', '1', 'Error'],
        correctAnswer: '3',
        correctFeedback:
          'Correcto. El objeto inicialmente tiene 2 propiedades (nombre, edad) y después de agregar ciudad tiene 3. Object.keys() devuelve un array con las claves, y su length es 3.',
        incorrectFeedback:
          'Incorrecto. El objeto empieza con 2 propiedades (nombre, edad). Luego se agrega ciudad, quedando con 3 propiedades en total. Object.keys(p).length es 3.',
      },
    ],
  },

  // ── Lección 48 ────────────────────────────────────────────────────────────
  {
    slug: 'objetos-anidados',
    title: 'Objetos anidados',
    module: 'Objetos',
    moduleNumber: 7,
    order: 48,
    description:
      'Aprende a trabajar con objetos dentro de otros objetos.',
    explanation: `Un **objeto anidado** es cuando el valor de una propiedad es, a su vez, otro objeto. Esta estructura es muy común en datos reales.

**Ejemplo básico**
\`\`\`js
let usuario = {
  nombre: "Ana",
  direccion: {
    calle: "Avenida Principal 123",
    ciudad: "Madrid",
    codigoPostal: "28001",
  },
};
\`\`\`

**Acceder a propiedades anidadas**
\`\`\`js
console.log(usuario.direccion.ciudad);       // → "Madrid"
console.log(usuario.direccion.codigoPostal); // → "28001"
\`\`\`

**Modificar propiedades anidadas**
\`\`\`js
usuario.direccion.ciudad = "Barcelona";
console.log(usuario.direccion.ciudad); // → "Barcelona"
\`\`\`

**Agregar sub-propiedades**
\`\`\`js
usuario.direccion.pais = "España";
\`\`\`

**Múltiples niveles de anidación**

Se puede anidar tan profundo como se necesite, pero más de 2-3 niveles empieza a ser difícil de leer:
\`\`\`js
let empresa = {
  nombre: "TechCorp",
  sede: {
    pais: {
      nombre: "España",
      continente: "Europa",
    },
  },
};
console.log(empresa.sede.pais.nombre); // → "España"
\`\`\`

**Cuidado con el encadenamiento**

Si un nivel intermedio no existe, obtienes un error:
\`\`\`js
console.log(usuario.redes.twitter); // Error si "redes" no existe
// Solución: optional chaining
console.log(usuario.redes?.twitter); // → undefined (sin error)
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

let pedido = {
  id: "ORD-2024-001",
  estado: "pendiente",
  cliente: {
    nombre: "Carlos López",
    email: "carlos@mail.com",
    direccionEnvio: {
      calle: "Calle Falsa 123",
      ciudad: "Ciudad de México",
      pais: "México",
    },
  },
  pago: {
    metodo: "tarjeta",
    aprobado: true,
    monto: 1450,
  },
};

// Acceder a datos del cliente
console.log(pedido.cliente.nombre);                // → "Carlos López"
console.log(pedido.cliente.email);                 // → "carlos@mail.com"

// Acceder a dirección de envío (3 niveles)
console.log(pedido.cliente.direccionEnvio.ciudad); // → "Ciudad de México"
console.log(pedido.cliente.direccionEnvio.pais);   // → "México"

// Acceder a datos de pago
console.log(pedido.pago.metodo);    // → "tarjeta"
console.log(pedido.pago.monto);     // → 1450

// Modificar un estado anidado
pedido.estado = "enviado";
pedido.pago.aprobado = true;
console.log("Estado:", pedido.estado);         // → "enviado"

// Usar optional chaining para propiedades que podrían no existir
console.log(pedido.envio?.rastreo);            // → undefined (sin error)
console.log(pedido.cliente.telefono?.celular); // → undefined (sin error)`,
    keyPoints: [
      'Un objeto anidado tiene otro objeto como valor de una de sus propiedades.',
      'Para acceder se encadenan los puntos: objeto.nivel1.nivel2.',
      'Se puede modificar cualquier nivel de anidación con la misma sintaxis.',
      'El operador ?. (optional chaining) previene errores cuando un nivel intermedio puede no existir.',
      'Más de 2-3 niveles de anidación empieza a ser difícil de leer y mantener.',
    ],
    exercise: {
      description:
        'Crea un objeto restaurante con: nombre, calificacion, horario (objeto con apertura y cierre como strings), y menu (objeto con desayuno, almuerzo y cena, cada uno siendo un array con 2 opciones). Luego: 1) muestra el horario de apertura, 2) modifica la calificacion, 3) muestra el primer plato del almuerzo, 4) agrega una nueva propiedad dentro de horario: domingoCerrado: true.',
      hint: 'Para el primer plato del almuerzo: restaurante.menu.almuerzo[0]. Para agregar: restaurante.horario.domingoCerrado = true.',
    },
    quiz: [
      {
        question: 'Dado: let e = { info: { ciudad: "Lima", pais: "Perú" } }\n¿Cómo accedes a "Perú"?',
        options: [
          'e.pais',
          'e[info][pais]',
          'e.info.pais',
          'e.info["Perú"]',
        ],
        correctAnswer: 'e.info.pais',
        correctFeedback:
          'Correcto. Para acceder a propiedades anidadas se encadenan los puntos: e.info.pais.',
        incorrectFeedback:
          'Incorrecto. Para acceder a propiedades anidadas debes encadenar los puntos siguiendo la estructura: primero el objeto exterior (e), luego el interior (info), luego la propiedad (pais): e.info.pais.',
      },
      {
        question: '¿Qué problema evita el operador optional chaining (?.) en objetos anidados?',
        options: [
          'Evita que se borren propiedades del objeto',
          'Evita errores cuando un nivel intermedio no existe',
          'Crea automáticamente propiedades que no existen',
          'Convierte objetos anidados a arrays',
        ],
        correctAnswer: 'Evita errores cuando un nivel intermedio no existe',
        correctFeedback:
          'Correcto. obj.nivel1?.nivel2 devuelve undefined en lugar de lanzar un TypeError si nivel1 no existe.',
        incorrectFeedback:
          'Incorrecto. El optional chaining (?.) previene TypeError cuando intentas acceder a una propiedad de algo que podría ser undefined o null. Devuelve undefined en lugar de lanzar un error.',
      },
      {
        question: 'Dado: let a = { b: { c: 42 } }\n¿Qué devuelve a.b.d.e?',
        options: [
          '42',
          'undefined',
          'TypeError: Cannot read property "e" of undefined',
          'null',
        ],
        correctAnswer: 'TypeError: Cannot read property "e" of undefined',
        correctFeedback:
          'Correcto. a.b.d es undefined, y luego intentar acceder a .e en undefined lanza un TypeError. Usa a.b.d?.e para evitarlo.',
        incorrectFeedback:
          'Incorrecto. a.b es {c: 42}, a.b.d es undefined (no existe), y acceder a .e en undefined lanza un TypeError. Para evitarlo: a.b.d?.e devuelve undefined sin error.',
      },
    ],
  },

  // ── Lección 49 ────────────────────────────────────────────────────────────
  {
    slug: 'arrays-de-objetos-2',
    title: 'Arrays de objetos',
    module: 'Objetos',
    moduleNumber: 7,
    order: 49,
    description:
      'Aprende a manejar listas de objetos, una estructura muy común en aplicaciones reales.',
    explanation: `Un **array de objetos** es exactamente lo que suena: un array donde cada elemento es un objeto. Esta es quizás la estructura de datos más común en el desarrollo web real.

**Ejemplo típico**
\`\`\`js
let productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 80 },
];
\`\`\`

**Acceder a elementos**
\`\`\`js
console.log(productos[0]);          // → { id: 1, nombre: "Laptop", precio: 1200 }
console.log(productos[0].nombre);   // → "Laptop"
console.log(productos[1].precio);   // → 25
\`\`\`

**Recorrer un array de objetos**
\`\`\`js
for (let producto of productos) {
  console.log(producto.nombre, ":", producto.precio);
}
\`\`\`

**Buscar un objeto específico**
\`\`\`js
// Con for...of y condición
for (let p of productos) {
  if (p.id === 2) {
    console.log("Encontrado:", p.nombre);
  }
}
\`\`\`

**Modificar un objeto dentro del array**
\`\`\`js
productos[0].precio = 1100; // descuento en Laptop
\`\`\`

**Agregar objetos al array**
\`\`\`js
productos.push({ id: 4, nombre: "Monitor", precio: 350 });
\`\`\`

**Calcular totales**
\`\`\`js
let total = 0;
for (let p of productos) {
  total += p.precio;
}
console.log("Total:", total); // → suma de todos los precios
\`\`\`

Esta combinación (array + objetos) aparece constantemente: listas de usuarios, pedidos, mensajes, notas, publicaciones, productos. Dominarlo es esencial.`,
    codeExample: `// ── main.js ──────────────────────────────────────────────────────────────

let estudiantes = [
  { id: 1, nombre: "Ana",    promedio: 9.2, aprobado: true },
  { id: 2, nombre: "Carlos", promedio: 5.8, aprobado: false },
  { id: 3, nombre: "María",  promedio: 8.5, aprobado: true },
  { id: 4, nombre: "Luis",   promedio: 4.1, aprobado: false },
  { id: 5, nombre: "Sofía",  promedio: 9.7, aprobado: true },
];

// Mostrar todos los estudiantes
for (let e of estudiantes) {
  let estado = e.aprobado ? "✓ Aprobado" : "✗ Reprobado";
  console.log(\`\${e.nombre}: \${e.promedio} — \${estado}\`);
}

// Contar aprobados y reprobados
let aprobados = 0;
let reprobados = 0;
for (let e of estudiantes) {
  if (e.aprobado) {
    aprobados++;
  } else {
    reprobados++;
  }
}
console.log("Aprobados:", aprobados);   // → 3
console.log("Reprobados:", reprobados); // → 2

// Calcular el promedio general del grupo
let sumaPromedios = 0;
for (let e of estudiantes) {
  sumaPromedios += e.promedio;
}
let promedioGrupo = sumaPromedios / estudiantes.length;
console.log("Promedio del grupo:", promedioGrupo.toFixed(2));

// Buscar un estudiante por nombre
let busqueda = "María";
for (let e of estudiantes) {
  if (e.nombre === busqueda) {
    console.log("Encontrado:", e);
    break;
  }
}`,
    keyPoints: [
      'Un array de objetos es la estructura de datos más común en aplicaciones reales.',
      'Se accede con array[indice].propiedad: estudiantes[0].nombre.',
      'for...of es ideal para recorrer arrays de objetos.',
      'Puedes calcular totales, contar elementos o buscar con bucles.',
      'Puedes modificar objetos dentro del array: array[i].propiedad = nuevoValor.',
      'push() agrega nuevos objetos al array igual que con otros tipos de datos.',
    ],
    exercise: {
      description:
        'Crea un array de 4 objetos producto, cada uno con: nombre, precio, y categoria ("ropa", "tecnología" o "hogar"). Luego: 1) muestra todos los productos con for...of, 2) calcula el precio total de todos los productos, 3) cuenta cuántos productos son de categoría "tecnología", 4) modifica el precio del primer producto (descuento del 10%), 5) agrega un quinto producto con push().',
      hint: 'Para el descuento: productos[0].precio = productos[0].precio * 0.9. Para contar: usa un contador y un if dentro del for...of.',
    },
    quiz: [
      {
        question: 'Dado:\nlet items = [{a: 1}, {a: 2}, {a: 3}];\nconsole.log(items[1].a);\n¿Qué imprime?',
        options: ['1', '2', '3', 'undefined'],
        correctAnswer: '2',
        correctFeedback:
          'Correcto. items[1] es el segundo objeto {a: 2}, y .a devuelve 2.',
        incorrectFeedback:
          'Incorrecto. items[1] accede al segundo elemento (índice 1), que es {a: 2}. Luego .a accede a la propiedad a, que vale 2.',
      },
      {
        question: '¿Cuál es la forma más limpia de recorrer un array de objetos?',
        options: [
          'for (let i = 0; i < arr.length; i++) { arr[i].propiedad }',
          'for (let obj of arr) { obj.propiedad }',
          'arr.iterate((obj) => obj.propiedad)',
          'arr.loop(obj => obj.propiedad)',
        ],
        correctAnswer: 'for (let obj of arr) { obj.propiedad }',
        correctFeedback:
          'Correcto. for...of es la forma más limpia y legible para recorrer arrays de objetos cuando no necesitas el índice.',
        incorrectFeedback:
          'Incorrecto. El for clásico funciona pero es más verboso. .iterate() y .loop() no existen. La forma más limpia es for (let obj of arr).',
      },
      {
        question: '¿Cómo se modifica la propiedad "precio" del tercer objeto en un array llamado "productos"?',
        options: [
          'productos.precio[2] = 100',
          'productos[2].precio = 100',
          'productos[3].precio = 100',
          'productos.update(2, {precio: 100})',
        ],
        correctAnswer: 'productos[2].precio = 100',
        correctFeedback:
          'Correcto. El tercer elemento está en el índice 2 (base cero). Se accede con productos[2] y luego se modifica .precio.',
        incorrectFeedback:
          'Incorrecto. El tercer elemento tiene índice 2 (los índices empiezan en 0). La sintaxis correcta es: primero el índice del array (productos[2]) y luego la propiedad (.precio = 100).',
      },
      {
        question: '¿Por qué los arrays de objetos son tan comunes en aplicaciones reales?',
        options: [
          'Porque JavaScript no tiene otro tipo de estructura',
          'Porque representan colecciones de entidades del mundo real como usuarios o productos',
          'Porque son más rápidos que los objetos simples',
          'Por razones históricas, no tienen ventaja real',
        ],
        correctAnswer: 'Porque representan colecciones de entidades del mundo real como usuarios o productos',
        correctFeedback:
          'Correcto. Las APIs, bases de datos y la mayoría de los sistemas entregan datos como listas de objetos porque representa naturalmente colecciones de entidades.',
        incorrectFeedback:
          'Incorrecto. Los arrays de objetos son tan comunes porque representan de forma natural las listas del mundo real: una lista de usuarios, una lista de productos, una lista de pedidos.',
      },
    ],
  },

  // ── Lección 50 ────────────────────────────────────────────────────────────
  {
    slug: 'metodos-en-objetos',
    title: 'Métodos dentro de objetos',
    module: 'Objetos',
    moduleNumber: 7,
    order: 50,
    description:
      'Aprende cómo una propiedad puede guardar una función y convertirse en un método.',
    explanation: `Un **método** es una función guardada dentro de un objeto como propiedad. Los métodos permiten que los objetos no solo guarden datos, sino también tengan comportamiento.

**Crear un método**
\`\`\`js
let calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  },
};

console.log(calculadora.sumar(5, 3));  // → 8
console.log(calculadora.restar(10, 4)); // → 6
\`\`\`

**Sintaxis moderna (method shorthand)**
\`\`\`js
let calculadora = {
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
};
\`\`\`

**Acceder a otras propiedades con this**

\`this\` se refiere al objeto actual:
\`\`\`js
let usuario = {
  nombre: "Ana",
  puntos: 150,
  saludar() {
    return "Hola, soy " + this.nombre;
  },
  tieneSuficientesPuntos(minimo) {
    return this.puntos >= minimo;
  },
};

console.log(usuario.saludar());                  // → "Hola, soy Ana"
console.log(usuario.tieneSuficientesPuntos(100)); // → true
\`\`\`

**Métodos que modifican el objeto**
\`\`\`js
let carrito = {
  items: [],
  total: 0,
  agregar(producto, precio) {
    this.items.push(producto);
    this.total += precio;
  },
};

carrito.agregar("Laptop", 1200);
carrito.agregar("Mouse", 25);
console.log(carrito.items); // → ["Laptop", "Mouse"]
console.log(carrito.total); // → 1225
\`\`\`

**Nota sobre this y arrow functions:** las arrow functions no tienen su propio \`this\`. Para métodos que usan \`this\`, usa funciones normales (function keyword o method shorthand).`,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

let producto = {
  nombre: "Laptop Pro",
  precioBase: 1200,
  descuento: 0.10, // 10%

  // Métodos del objeto
  calcularPrecioFinal() {
    return this.precioBase * (1 - this.descuento);
  },

  aplicarDescuento(porcentaje) {
    this.descuento = porcentaje;
    return this; // permite encadenamiento
  },

  mostrarInfo() {
    let precioFinal = this.calcularPrecioFinal();
    return \`\${this.nombre}: $\${precioFinal.toFixed(2)} (descuento: \${this.descuento * 100}%)\`;
  },
};

console.log(producto.calcularPrecioFinal()); // → 1080
console.log(producto.mostrarInfo());
// → "Laptop Pro: $1080.00 (descuento: 10%)"

// Modificar y volver a calcular
producto.aplicarDescuento(0.20);
console.log(producto.mostrarInfo());
// → "Laptop Pro: $960.00 (descuento: 20%)"

// Objeto con métodos y estado
let contador = {
  valor: 0,
  incrementar() { this.valor++; },
  decrementar() { this.valor--; },
  reiniciar()   { this.valor = 0; },
  obtenerValor() { return this.valor; },
};

contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.obtenerValor()); // → 3
contador.decrementar();
console.log(contador.obtenerValor()); // → 2`,
    keyPoints: [
      'Un método es una función guardada como propiedad de un objeto.',
      'Se llama con objeto.metodo() — igual que cualquier otra función, pero con punto.',
      'this dentro de un método hace referencia al objeto actual.',
      'Los métodos pueden leer y modificar otras propiedades del mismo objeto vía this.',
      'La sintaxis moderna de método omite "function": metodo() { }.',
      'Las arrow functions no tienen su propio this; usa funciones normales en métodos.',
    ],
    exercise: {
      description:
        'Crea un objeto bancaCuenta con: titular (string), saldo (número), y tres métodos: depositar(monto) que sume al saldo, retirar(monto) que reste solo si hay saldo suficiente (muestra un mensaje si no hay), y mostrarSaldo() que muestre el titular y saldo actual. Prueba los tres métodos con casos reales incluyendo un retiro que falle.',
      hint: 'En retirar: if (monto > this.saldo) { console.log("Saldo insuficiente") } else { this.saldo -= monto }.',
    },
    quiz: [
      {
        question: '¿Qué es un método en un objeto de JavaScript?',
        options: [
          'Un tipo especial de variable que solo acepta números',
          'Una función guardada como propiedad del objeto',
          'Un operador para comparar objetos',
          'Una forma de crear copias de objetos',
        ],
        correctAnswer: 'Una función guardada como propiedad del objeto',
        correctFeedback:
          'Correcto. Cuando el valor de una propiedad es una función, esa propiedad se llama método.',
        incorrectFeedback:
          'Incorrecto. Un método es simplemente una función guardada dentro de un objeto como el valor de una de sus propiedades.',
      },
      {
        question: '¿Qué representa this dentro de un método?',
        options: [
          'El argumento que se le pasa al método',
          'El objeto actual donde está definido el método',
          'El módulo de JavaScript que ejecuta el código',
          'El valor global de la aplicación',
        ],
        correctAnswer: 'El objeto actual donde está definido el método',
        correctFeedback:
          'Correcto. this dentro de un método apunta al objeto que contiene ese método, permitiendo acceder a sus otras propiedades.',
        incorrectFeedback:
          'Incorrecto. this dentro de un método se refiere al propio objeto. Así el método puede acceder a las otras propiedades del mismo objeto usando this.propiedad.',
      },
      {
        question: '¿Cuál es la sintaxis moderna para definir un método en un objeto?',
        options: [
          '{ metodo: function() {} }',
          '{ metodo = () => {} }',
          '{ metodo() {} }',
          '{ function metodo() {} }',
        ],
        correctAnswer: '{ metodo() {} }',
        correctFeedback:
          'Correcto. La sintaxis moderna (method shorthand) omite la palabra function: { metodo() { } }.',
        incorrectFeedback:
          'Incorrecto. La sintaxis moderna de método es { metodo() { } }, sin la palabra function. { metodo: function() {} } también es válido pero más antiguo.',
      },
      {
        question: 'Dado:\nlet obj = { x: 10, doble() { return this.x * 2; } };\nconsole.log(obj.doble());\n¿Qué imprime?',
        options: ['10', '20', 'undefined', 'Error'],
        correctAnswer: '20',
        correctFeedback:
          'Correcto. doble() devuelve this.x * 2. Como this es obj y obj.x es 10, el resultado es 20.',
        incorrectFeedback:
          'Incorrecto. doble() devuelve this.x * 2. this es el objeto obj, y obj.x vale 10. Entonces 10 * 2 = 20.',
      },
    ],
  },

  // ── Lección 51 ────────────────────────────────────────────────────────────
  {
    slug: 'errores-comunes-objetos',
    title: 'Errores comunes con objetos',
    module: 'Objetos',
    moduleNumber: 7,
    order: 51,
    description:
      'Aprende a evitar errores comunes al acceder a propiedades inexistentes, modificar datos o confundir objetos con arrays.',
    explanation: `Los objetos son poderosos pero tienen trampas clásicas. Conocerlas te ahorrará tiempo y bugs difíciles de encontrar.

**Error 1: Acceder a propiedad de undefined**
\`\`\`js
let usuario = { nombre: "Ana" };
console.log(usuario.direccion.ciudad); // → TypeError!
// "direccion" es undefined, no puedes acceder a .ciudad de undefined

// Solución: optional chaining
console.log(usuario.direccion?.ciudad); // → undefined (sin error)
\`\`\`

**Error 2: Copiar un objeto por referencia**
\`\`\`js
let original = { nombre: "Ana", edad: 20 };
let copia = original; // NO es una copia, es la misma referencia
copia.nombre = "Carlos";
console.log(original.nombre); // → "Carlos" ❌ (también cambió)

// Solución: spread operator
let copiaCopia = { ...original };
copiaCopia.nombre = "Luis";
console.log(original.nombre); // → "Carlos" ✓ (intacto)
\`\`\`

**Error 3: Confundir null y undefined**
\`\`\`js
let obj = { valor: null };
console.log(obj.valor);     // → null (existe pero vale null)
console.log(obj.noExiste);  // → undefined (no existe)
\`\`\`

**Error 4: Olvidar comas entre propiedades**
\`\`\`js
// INCORRECTO (falta coma):
let p = {
  nombre: "Ana"  // ← falta coma aquí
  edad: 20       // SyntaxError
};

// CORRECTO:
let p = { nombre: "Ana", edad: 20 };
\`\`\`

**Error 5: Confundir arrays y objetos**
\`\`\`js
let lista = ["a", "b"];  // array: índices numéricos
let mapa  = {a: 1, b: 2}; // objeto: claves string

// Array.isArray() para verificar
console.log(Array.isArray(lista)); // → true
console.log(Array.isArray(mapa));  // → false
\`\`\`

**Error 6: Usar this en arrow function dentro de objeto**
\`\`\`js
let obj = {
  valor: 42,
  obtener: () => this.valor, // ERROR: arrow function no tiene su propio this
};
console.log(obj.obtener()); // → undefined
// Solución: function normal o method shorthand
\`\`\``,
    codeExample: `// ── script.js ────────────────────────────────────────────────────────────

// ── Error 1: propiedad de undefined ──────────────────────────────────────
let pedido = { id: 1, estado: "pendiente" };

// MAL:
// console.log(pedido.cliente.nombre); // TypeError!

// BIEN: optional chaining
console.log(pedido.cliente?.nombre);    // → undefined (sin error)
console.log(pedido.cliente?.email);     // → undefined (sin error)

// ── Error 2: copiar por referencia ────────────────────────────────────────
let productoA = { nombre: "Laptop", precio: 1200 };
let productoB = productoA; // ¡referencia, no copia!
productoB.precio = 999;
console.log("Precio A:", productoA.precio); // → 999 ❌ (cambió!)

// CORRECTO: copiar con spread
let productoC = { nombre: "Laptop", precio: 1200 };
let productoD = { ...productoC };
productoD.precio = 999;
console.log("Precio C:", productoC.precio); // → 1200 ✓ (intacto)

// ── Error 3: verificar tipo antes de usar ────────────────────────────────
let datos = [1, 2, 3];

if (Array.isArray(datos)) {
  console.log("Es un array, puedo usar push()");
  datos.push(4);
} else {
  console.log("Es un objeto");
}

// ── Error 4: null vs undefined ───────────────────────────────────────────
let config = { tema: null, idioma: undefined };
console.log(config.tema);      // → null (existe con valor null)
console.log(config.idioma);    // → undefined (existe pero no tiene valor)
console.log(config.noExiste);  // → undefined (no existe en el objeto)

// ── Buena práctica: verificar antes de usar ───────────────────────────────
let usuario = { nombre: "Ana" };
if (usuario.direccion) {
  console.log(usuario.direccion.ciudad);
} else {
  console.log("El usuario no tiene dirección registrada");
}`,
    keyPoints: [
      'Acceder a una propiedad de undefined lanza TypeError. Usa ?. para evitarlo.',
      'Asignar un objeto a otra variable NO crea una copia, crea una referencia.',
      'Para copiar un objeto usa el spread operator: let copia = { ...original }.',
      'null y undefined son distintos: null es "existe pero sin valor", undefined es "no existe".',
      'Usa Array.isArray() para verificar si algo es array o es un objeto.',
      'Las arrow functions no tienen su propio this — no las uses como métodos con this.',
    ],
    exercise: {
      description:
        'Escribe código que demuestre tres errores y sus soluciones: 1) Crea un objeto sin propiedad "telefono" e intenta acceder a telefono.numero de forma segura con optional chaining. 2) Crea un objeto, asígnalo a otra variable, modifica la segunda y verifica que el original también cambia. Luego hazlo correctamente con spread y verifica que el original NO cambia. 3) Verifica con Array.isArray si ["a","b"] y {a: 1} son arrays.',
      hint: 'Para el 1: obj.telefono?.numero. Para el 2: let b = {...a}. Para el 3: console.log(Array.isArray(["a","b"])) y console.log(Array.isArray({a:1})).',
    },
    quiz: [
      {
        question: 'Dado: let a = {x: 1}; let b = a; b.x = 99;\n¿Cuál es el valor de a.x?',
        options: ['1', '99', 'undefined', 'Error'],
        correctAnswer: '99',
        correctFeedback:
          'Correcto. let b = a no crea una copia: b y a apuntan al mismo objeto en memoria. Modificar b también modifica a.',
        incorrectFeedback:
          'Incorrecto. let b = a no copia el objeto, crea una referencia al mismo objeto. Cuando cambias b.x, también cambias a.x porque son el mismo objeto. El resultado es 99.',
      },
      {
        question: '¿Cuál es la forma correcta de copiar un objeto sin copiar la referencia?',
        options: [
          'let copia = objeto',
          'let copia = objeto.copy()',
          'let copia = { ...objeto }',
          'let copia = Object.reference(objeto)',
        ],
        correctAnswer: 'let copia = { ...objeto }',
        correctFeedback:
          'Correcto. El spread operator { ...objeto } crea una copia superficial del objeto. Los cambios en la copia no afectan al original.',
        incorrectFeedback:
          'Incorrecto. let copia = objeto crea una referencia, no una copia. .copy() no existe. La forma correcta es el spread operator: let copia = { ...objeto }.',
      },
      {
        question: '¿Qué imprime obj.a?.b cuando "a" no existe en obj?',
        options: ['TypeError', 'null', 'undefined', '"b"'],
        correctAnswer: 'undefined',
        correctFeedback:
          'Correcto. El optional chaining (?.) devuelve undefined en lugar de lanzar un TypeError cuando el nivel intermedio no existe.',
        incorrectFeedback:
          'Incorrecto. El operador ?. previene el TypeError. Si obj.a no existe, obj.a?.b devuelve undefined en lugar de lanzar un error.',
      },
      {
        question: '¿Qué devuelve Array.isArray({a: 1, b: 2})?',
        options: ['true', 'false', 'Error', 'undefined'],
        correctAnswer: 'false',
        correctFeedback:
          'Correcto. {a: 1, b: 2} es un objeto, no un array. Array.isArray() devuelve false para objetos.',
        incorrectFeedback:
          'Incorrecto. {a: 1, b: 2} es un objeto literal, no un array. Array.isArray() devuelve false para objetos y true solo para arrays.',
      },
      {
        question: '¿Cuál es la diferencia entre null y undefined en una propiedad de objeto?',
        options: [
          'Son exactamente lo mismo',
          'null significa que la propiedad existe con valor vacío; undefined puede significar que no existe',
          'undefined es un error, null no',
          'null es para números, undefined es para strings',
        ],
        correctAnswer: 'null significa que la propiedad existe con valor vacío; undefined puede significar que no existe',
        correctFeedback:
          'Correcto. null se asigna intencionalmente ("existe pero sin valor"). undefined aparece cuando la propiedad no fue asignada o no existe.',
        incorrectFeedback:
          'Incorrecto. null es un valor asignado explícitamente ("existe pero está vacío"). undefined significa que la propiedad no tiene valor asignado o simplemente no existe en el objeto.',
      },
    ],
  },
]

export const jsModule7: Module = {
  number: 7,
  title: 'Objetos',
  level: 'nivel2',
  lessons: lessonsJsModule7,
}
