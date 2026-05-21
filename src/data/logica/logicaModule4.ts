import type { Lesson, Module } from '@/types'

export const lessonsLogicaModule4: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'que-son-los-datos',
    title: '¿Qué son los datos?',
    module: 'Datos, valores y operaciones básicas',
    moduleNumber: 4,
    order: 1,
    description:
      'Comprende qué son los datos en programación y por qué son la materia prima de todo programa.',
    explanation: `En programación, los **datos** son la materia prima de todo programa. Sin datos, no hay nada que procesar, calcular ni mostrar.

**¿Qué es un dato?**

Un dato es cualquier pieza de información que un programa puede recibir, almacenar, procesar o producir.

Ejemplos de datos:
- El número 42
- El texto "Hola, mundo"
- La verdad/falsedad de "¿Está lloviendo?"
- La temperatura actual: 18.5°C
- El nombre de un usuario: "María"
- La fecha de hoy: 2025-01-15

Todo lo que una computadora puede manejar es, en esencia, un dato.

**Datos vs. información**

A veces se usa "datos" e "información" como sinónimos, pero hay una diferencia técnica:
- **Dato:** El valor crudo, por sí solo. Por ejemplo: "25".
- **Información:** El dato con contexto. Por ejemplo: "La temperatura es 25°C".

En programación, los datos son los valores que el programa manipula. La información es lo que le presentamos al usuario con contexto.

**¿De dónde vienen los datos?**

En programación, los datos pueden venir de varias fuentes:

1. **Del usuario:** Lo que escribe en el teclado, lo que hace clic, lo que selecciona.
2. **De un archivo:** Datos guardados en el disco duro.
3. **De una base de datos:** Registros almacenados en un sistema de bases de datos.
4. **De otra parte del programa:** Resultados calculados que se pasan a otra función.
5. **De sensores:** Temperatura, GPS, cámara, micrófono.
6. **De internet:** APIs que proporcionan datos en tiempo real.

**¿Por qué importa entender los datos?**

Antes de escribir cualquier programa, un buen programador piensa:
- ¿Qué datos necesito?
- ¿De qué tipo son esos datos? (¿números? ¿texto? ¿verdadero/falso?)
- ¿De dónde vienen?
- ¿Qué resultado debo producir con ellos?

Estas preguntas definen la estructura completa del programa.`,
    codeExample: `// ── Los datos en un programa ─────────────────────────────────────────────

// Ejemplo: Un sistema de registro de temperatura

INICIO
  // Datos que el programa recibe (ENTRADA):
  LEER temperatura_actual    // ej: 36.8 (número decimal)
  LEER nombre_paciente       // ej: "Ana García" (texto)
  LEER tiene_sintomas        // ej: verdadero/falso

  // Datos que el programa calcula (PROCESO):
  SI temperatura_actual > 37.5 ENTONCES
    tiene_fiebre = verdadero
  SI NO
    tiene_fiebre = falso
  FIN SI

  // Datos que el programa produce (SALIDA):
  MOSTRAR "Paciente: " + nombre_paciente
  MOSTRAR "Temperatura: " + temperatura_actual + "°C"
  MOSTRAR "Fiebre: " + tiene_fiebre
  MOSTRAR "Síntomas: " + tiene_sintomas
FIN

// Observa los diferentes tipos de datos usados:
// temperatura_actual → número decimal (36.8)
// nombre_paciente    → texto ("Ana García")
// tiene_sintomas     → verdadero/falso
// tiene_fiebre       → verdadero/falso (calculado)`,
    keyPoints: [
      'Los datos son la materia prima de todo programa: valores que se reciben, almacenan, procesan y producen.',
      'Los datos pueden venir del usuario, archivos, bases de datos, sensores o internet.',
      'Antes de programar, identifica qué datos necesitas, de qué tipo son y de dónde vienen.',
      'La diferencia entre dato e información: el dato es el valor crudo; la información es el dato con contexto.',
      'Todo lo que una computadora puede manejar es, en esencia, un dato.',
    ],
    exercise: {
      description:
        'Para una aplicación de delivery de comida, identifica 5 ejemplos de datos que necesitaría. Para cada uno, describe: (a) el nombre del dato, (b) un ejemplo de su valor, (c) de dónde vendría ese dato (usuario, base de datos, etc.).',
      hint: 'Piensa en: el usuario que hace el pedido, los productos que pide, la dirección de entrega, el precio, el tiempo estimado. Cada uno de esos es un dato con su propio tipo y fuente.',
    },
    quiz: [
      {
        question: '¿Cuál de estas opciones es un ejemplo de "dato" en programación?',
        options: [
          'El color del teclado del usuario',
          'El número 42 almacenado en una variable',
          'El fabricante de la computadora',
          'El precio del software',
        ],
        correctAnswer: 'El número 42 almacenado en una variable',
        correctFeedback:
          'Correcto. Un dato es cualquier valor que un programa puede manejar: números, texto, verdadero/falso. "El número 42 almacenado en una variable" es el ejemplo más preciso de un dato en programación.',
        incorrectFeedback:
          'No es correcto. Un dato en programación es un valor que el programa puede recibir, almacenar, procesar o producir. El número 42 en una variable es un dato. Las características físicas de la computadora no son datos del programa.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'tipos-de-datos-simples',
    title: 'Tipos de datos simples',
    module: 'Datos, valores y operaciones básicas',
    moduleNumber: 4,
    order: 2,
    description:
      'Conoce los tipos de datos fundamentales: números enteros, decimales, texto y booleanos.',
    explanation: `No todos los datos son iguales. Los datos tienen **tipos**, y el tipo de un dato determina qué operaciones puedes hacer con él y cómo se almacena en la computadora.

**Los cuatro tipos de datos fundamentales**

**1. Números enteros (Integer)**

Son números sin parte decimal: 0, 1, 2, 100, -5, -1000.

Se usan para contar cosas que no se pueden dividir:
- Número de estudiantes: 30 (no puedes tener 30.5 estudiantes)
- Posición en una lista: ítem número 3
- Edad: 25 años

**2. Números decimales (Float o Real)**

Son números con parte decimal: 3.14, 18.5, -2.7, 0.001.

Se usan cuando la precisión decimal importa:
- Precio: $15.99
- Temperatura: 36.8°C
- Distancia en kilómetros: 2.5 km

**3. Texto (String)**

Es cualquier secuencia de caracteres: letras, números, símbolos. Se escribe entre comillas.

"Hola", "María García", "contraseña123", "2025-01-15"

Aunque "123" parece un número, si está entre comillas es texto. No puedes sumarle 1 como si fuera un número.

**4. Verdadero/Falso (Boolean)**

Solo puede tener dos valores: verdadero o falso (true/false en inglés).

Se usa para representar condiciones:
- ¿Está el usuario conectado? Verdadero / Falso
- ¿Es mayor de edad? Verdadero / Falso
- ¿Tiene descuento aplicado? Verdadero / Falso

**¿Por qué importan los tipos?**

Los tipos definen qué puedes hacer con un dato:
- A dos números puedes sumarlos: 5 + 3 = 8
- A dos textos puedes concatenarlos: "Hola" + " mundo" = "Hola mundo"
- Un booleano no se puede "sumar" con un número de forma significativa

Mezclar tipos incorrectamente produce errores o resultados inesperados. Esto es exactamente uno de los errores que TypeScript (lenguaje que aprenderás más adelante) ayuda a prevenir.`,
    codeExample: `// ── Los cuatro tipos de datos básicos ────────────────────────────────────

// 1. ENTERO (números sin decimal)
edad = 25
cantidad_productos = 100
temperatura_en_grados_completos = -3

// 2. DECIMAL (números con punto decimal)
precio = 15.99
temperatura = 36.8
porcentaje_descuento = 0.15  // 15% como decimal

// 3. TEXTO (caracteres entre comillas)
nombre = "María García"
email = "maria@ejemplo.com"
codigo_postal = "28001"  // ← Es texto, no número (no se suma)
mensaje = "El resultado es: "

// 4. BOOLEANO (solo verdadero o falso)
esta_conectado = verdadero
tiene_descuento = falso
es_mayor_de_edad = verdadero

// ── Los tipos determinan qué puedes hacer ────────────────────────────────
// ✓ Correcto: sumar números
total = precio + 5.0   // → 20.99

// ✓ Correcto: unir textos
saludo = "Hola, " + nombre  // → "Hola, María García"

// ✓ Correcto: usar booleanos en condiciones
SI esta_conectado ENTONCES
  MOSTRAR "Bienvenido, " + nombre
FIN SI

// ❌ No tiene sentido: sumar texto y número
// resultado = "precio" + 15.99   ← Error o resultado inesperado`,
    keyPoints: [
      'Los cuatro tipos de datos fundamentales son: entero, decimal (float), texto (string) y booleano.',
      'Enteros: números sin decimal (contar cosas). Decimales: números con parte fraccionaria.',
      'Texto: cualquier secuencia de caracteres entre comillas — incluyendo "123" como texto.',
      'Booleano: solo dos valores posibles (verdadero/falso), usado para condiciones.',
      'El tipo de un dato determina qué operaciones puedes realizar con él.',
    ],
    exercise: {
      description:
        'Clasifica cada uno de estos valores en uno de los cuatro tipos (entero, decimal, texto, booleano): (1) 42 (2) "42" (3) 3.14 (4) "María" (5) verdadero (6) -100 (7) "false" (8) 0.001 (9) "Hola mundo" (10) 0. Explica por qué algunos valores parecen iguales pero son de diferente tipo.',
      hint: 'Recuerda: si tiene comillas, es texto, aunque parezca un número. El 0 es un entero, no un booleano (aunque en algunos contextos se use como falso). "false" entre comillas es texto, no booleano.',
    },
    quiz: [
      {
        question: '¿Qué tipo de dato es "2025" (con comillas)?',
        options: ['Entero', 'Decimal', 'Texto (string)', 'Booleano'],
        correctAnswer: 'Texto (string)',
        correctFeedback:
          'Correcto. Las comillas indican que es texto (string), no un número. Aunque "2025" se parece a un número, al estar entre comillas es tratado como una secuencia de caracteres. No puedes sumarle 1 y obtener 2026.',
        incorrectFeedback:
          'No es correcto. Las comillas hacen que sea texto (string). El valor 2025 sin comillas sería un entero. "2025" con comillas es una cadena de texto que contiene los caracteres 2, 0, 2 y 5.',
      },
      {
        question: '¿En qué situación usarías un tipo booleano?',
        options: [
          'Para guardar la edad de un usuario',
          'Para guardar el nombre de un producto',
          'Para indicar si un usuario tiene o no tiene sesión activa',
          'Para guardar el precio de un artículo con decimales',
        ],
        correctAnswer: 'Para indicar si un usuario tiene o no tiene sesión activa',
        correctFeedback:
          'Correcto. Un booleano es perfecto para representar condiciones que solo pueden ser verdaderas o falsas: ¿tiene sesión activa? ¿está pagado? ¿es mayor de edad? Esas preguntas tienen solo dos respuestas posibles.',
        incorrectFeedback:
          'No es correcto. Los booleanos representan condiciones binarias: sí/no, verdadero/falso. La edad usa entero, el nombre usa texto y el precio usa decimal. Solo "¿tiene sesión activa?" tiene exactamente dos estados posibles.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'operaciones-aritmeticas',
    title: 'Operaciones aritméticas',
    module: 'Datos, valores y operaciones básicas',
    moduleNumber: 4,
    order: 3,
    description:
      'Aprende las operaciones matemáticas básicas en programación: suma, resta, multiplicación, división y módulo.',
    explanation: `Las operaciones aritméticas son los cálculos matemáticos más básicos que puedes hacer con números. Son la base de casi cualquier programa que trabaje con datos numéricos.

**Las cinco operaciones básicas**

**1. Suma (+)**
Añade dos valores.
- 5 + 3 = 8
- precio_base + impuesto = precio_final

**2. Resta (-)**
Sustrae un valor de otro.
- 10 - 4 = 6
- saldo_disponible - precio = saldo_restante

**3. Multiplicación (*)**
En programación se usa el símbolo \`*\`, no \`×\`.
- 5 * 4 = 20
- precio_unitario * cantidad = subtotal

**4. División (/)**
Divide un valor entre otro. En programación, el resultado puede ser decimal.
- 10 / 3 = 3.333...
- precio_total / numero_personas = precio_por_persona

**5. Módulo (%)**
Devuelve el **resto** de una división entera. Este operador puede ser nuevo para ti.
- 10 % 3 = 1 (porque 10 = 3×3 + **1**)
- 15 % 5 = 0 (porque 15 = 5×3 + **0**, sin resto)
- 7 % 2 = 1 (porque 7 = 2×3 + **1**)

El módulo es muy útil para:
- Saber si un número es par: si \`numero % 2 == 0\`, es par.
- Calcular días en un ciclo: qué día de la semana es después de N días.
- Dividir en grupos iguales y saber cuántos sobran.

**Orden de operaciones**

Al igual que en matemáticas, las operaciones siguen un orden:
1. Primero lo que está entre paréntesis: \`(2 + 3) * 4 = 20\`
2. Luego multiplicación y división: \`2 + 3 * 4 = 14\` (no 20)
3. Finalmente suma y resta.

Cuando tengas dudas, usa paréntesis para aclarar la intención.`,
    codeExample: `// ── Las cinco operaciones aritméticas ────────────────────────────────────

INICIO
  // Variables de ejemplo
  precio = 100
  descuento = 15
  cantidad = 3

  // 1. SUMA
  total_sin_descuento = precio * cantidad       // 300
  impuesto = total_sin_descuento * 0.16        // 48

  // 2. RESTA
  monto_descuento = total_sin_descuento * (descuento / 100)  // 45
  precio_con_descuento = total_sin_descuento - monto_descuento  // 255

  // 3. MULTIPLICACIÓN
  subtotal = precio * cantidad                 // 300

  // 4. DIVISIÓN
  precio_por_persona = subtotal / 2            // 150 (dividido entre 2)

  // 5. MÓDULO (resto de la división)
  resto_cajas = cantidad % 2                   // 3 % 2 = 1 (sobra 1)

  MOSTRAR "Subtotal: " + subtotal
  MOSTRAR "Con descuento: " + precio_con_descuento
  MOSTRAR "Por persona: " + precio_por_persona
  MOSTRAR "Sobrante: " + resto_cajas
FIN

// ── Uso práctico del módulo: detectar número par ──────────────────────────
INICIO
  LEER numero
  SI numero % 2 == 0 ENTONCES
    MOSTRAR numero + " es par"
  SI NO
    MOSTRAR numero + " es impar"
  FIN SI
FIN`,
    keyPoints: [
      'Las cinco operaciones básicas en programación son: suma (+), resta (-), multiplicación (*), división (/) y módulo (%).',
      'La multiplicación usa * y la división usa / (no × ni ÷).',
      'El módulo (%) devuelve el resto de una división entera: 10 % 3 = 1.',
      'El módulo es muy útil para saber si un número es par, dividir en grupos y ciclos.',
      'El orden de operaciones en programación sigue las mismas reglas que en matemáticas.',
    ],
    exercise: {
      description:
        'Calcula estos resultados a mano y luego escribe el pseudocódigo para verificarlos: (1) 25 + 17 * 2 (2) (25 + 17) * 2 (3) 100 / 4 + 5 (4) 17 % 5 (5) 20 % 4 (6) 23 % 3. Para los ejercicios 4-6, también indica si el número inicial (17, 20, 23) es divisible entre el divisor.',
      hint: 'Para el orden de operaciones: primero los paréntesis, luego * y /, finalmente + y -. Para el módulo: 17 ÷ 5 = 3 con resto 2, entonces 17 % 5 = 2. Si el módulo es 0, el número es divisible.',
    },
    quiz: [
      {
        question: '¿Qué resultado produce la operación 15 % 4?',
        options: ['3', '3.75', '4', '3.0'],
        correctAnswer: '3',
        incorrectFeedback:
          'No es correcto. El operador % (módulo) devuelve el resto de la división entera. 15 ÷ 4 = 3 con resto 3 (porque 4×3=12, y 15-12=3). Por lo tanto, 15 % 4 = 3.',
        correctFeedback:
          'Correcto. El módulo es el resto de la división entera. 15 ÷ 4 = 3 (parte entera) con resto 3, porque 4 × 3 = 12 y 15 - 12 = 3. Entonces 15 % 4 = 3.',
      },
      {
        question: '¿Cómo se sabe si un número N es par usando el operador módulo?',
        options: [
          'Si N % 2 es igual a 1',
          'Si N % 2 es igual a 0',
          'Si N / 2 es un número entero',
          'Si N - 2 es positivo',
        ],
        correctAnswer: 'Si N % 2 es igual a 0',
        correctFeedback:
          'Correcto. Un número par es divisible entre 2 sin resto. Si N % 2 == 0, el resto es 0, lo que significa que N se divide exactamente entre 2, por lo tanto es par.',
        incorrectFeedback:
          'No es correcto. El módulo (%) da el resto de la división. Un número par tiene resto 0 al dividirse entre 2 (N % 2 == 0). Un número impar tiene resto 1 (N % 2 == 1).',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'comparaciones-y-operaciones-logicas',
    title: 'Comparaciones y operaciones lógicas',
    module: 'Datos, valores y operaciones básicas',
    moduleNumber: 4,
    order: 4,
    description:
      'Aprende a comparar valores y a combinar condiciones usando operadores lógicos: AND, OR y NOT.',
    explanation: `Las operaciones de comparación y los operadores lógicos son los que permiten a un programa **tomar decisiones**. Son la base de toda la lógica condicional.

**Operadores de comparación**

Comparan dos valores y producen un booleano (verdadero o falso):

| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| == | ¿Son iguales? | 5 == 5 | verdadero |
| != | ¿Son diferentes? | 5 != 3 | verdadero |
| > | ¿Es mayor? | 7 > 3 | verdadero |
| < | ¿Es menor? | 2 < 1 | falso |
| >= | ¿Es mayor o igual? | 6 >= 6 | verdadero |
| <= | ¿Es menor o igual? | 4 <= 5 | verdadero |

**Operadores lógicos**

Combinan dos o más comparaciones:

**AND (Y):** Verdadero solo si ambas condiciones son verdaderas.
- "Tiene más de 18 años Y tiene licencia de conducir"
- Si alguna de las dos es falsa, el resultado es falso.

**OR (O):** Verdadero si al menos una condición es verdadera.
- "Paga en efectivo O paga con tarjeta"
- Solo es falso si ambas son falsas.

**NOT (NO):** Invierte el valor de una condición.
- "NO está bloqueado" = si estaba bloqueado → ahora es falso

**Ejemplos prácticos**

En programación, estos operadores se usan constantemente en condiciones:

- \`SI edad >= 18 Y tiene_dni ENTONCES → puede votar\`
- \`SI es_admin O es_moderador ENTONCES → puede editar\`
- \`SI NO esta_suspendido ENTONCES → puede acceder\`
- \`SI nota >= 4 Y nota <= 10 ENTONCES → es una nota válida\`

**La tabla de verdad básica**

| A | B | A AND B | A OR B |
|---|---|---|---|
| V | V | V | V |
| V | F | F | V |
| F | V | F | V |
| F | F | F | F |`,
    codeExample: `// ── Operadores de comparación ────────────────────────────────────────────
INICIO
  LEER edad
  LEER tiene_dni

  // Comparaciones simples
  SI edad > 18 ENTONCES
    MOSTRAR "Es mayor de edad"
  FIN SI

  SI edad == 18 ENTONCES
    MOSTRAR "Tiene exactamente 18 años"
  FIN SI

  // ── Operadores lógicos ────────────────────────────────────────────────
  // AND: ambas condiciones deben ser verdaderas
  SI edad >= 18 Y tiene_dni ENTONCES
    MOSTRAR "Puede votar"
  SI NO
    MOSTRAR "No puede votar"
  FIN SI

  // OR: al menos una condición debe ser verdadera
  SI edad < 5 O edad > 65 ENTONCES
    MOSTRAR "Entrada gratuita"
  FIN SI

  // NOT: invierte la condición
  SI NO tiene_dni ENTONCES
    MOSTRAR "Debe presentar documento de identidad"
  FIN SI

  // Combinación de condiciones
  SI edad >= 16 Y edad < 18 Y tiene_dni ENTONCES
    MOSTRAR "Puede votar con autorización de padres"
  FIN SI
FIN`,
    keyPoints: [
      'Los operadores de comparación (==, !=, >, <, >=, <=) comparan valores y producen verdadero o falso.',
      'AND (Y): verdadero solo si AMBAS condiciones son verdaderas.',
      'OR (O): verdadero si AL MENOS UNA condición es verdadera.',
      'NOT (NO): invierte el valor booleano de una condición.',
      'Las comparaciones y operadores lógicos son la base de toda la toma de decisiones en programación.',
    ],
    exercise: {
      description:
        'Determina si cada expresión es verdadera o falsa (dado que: edad = 20, saldo = 150, tiene_cuenta = verdadero): (1) edad >= 18 (2) saldo > 200 (3) edad >= 18 Y tiene_cuenta (4) saldo > 200 O tiene_cuenta (5) NO tiene_cuenta (6) edad >= 18 Y saldo > 200 (7) edad < 25 Y saldo >= 100 Y tiene_cuenta.',
      hint: 'Evalúa cada parte por separado, luego combina: (3) ambas partes deben ser verdaderas con AND. (4) basta con que una sea verdadera con OR. (5) invierte el booleano con NOT. (7) las tres deben ser verdaderas.',
    },
    quiz: [
      {
        question: '¿Qué valor produce la expresión: 10 > 5 AND 3 < 1?',
        options: ['Verdadero', 'Falso', 'Error', '10'],
        correctAnswer: 'Falso',
        correctFeedback:
          'Correcto. Con AND, ambas condiciones deben ser verdaderas. "10 > 5" es verdadero, pero "3 < 1" es falso. Verdadero AND Falso = Falso.',
        incorrectFeedback:
          'No es correcto. Con AND, AMBAS condiciones deben ser verdaderas. "10 > 5" es verdadero, pero "3 < 1" es falso (3 no es menor que 1). Verdadero AND Falso = Falso.',
      },
      {
        question: '¿Qué valor produce la expresión: 2 > 5 OR 10 == 10?',
        options: ['Verdadero', 'Falso', 'Error', 'Ninguno'],
        correctAnswer: 'Verdadero',
        correctFeedback:
          'Correcto. Con OR, basta con que UNA condición sea verdadera. "2 > 5" es falso, pero "10 == 10" es verdadero. Falso OR Verdadero = Verdadero.',
        incorrectFeedback:
          'No es correcto. Con OR, basta con que al menos UNA condición sea verdadera. "2 > 5" es falso, pero "10 == 10" es verdadero. Falso OR Verdadero = Verdadero.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'datos-en-pseudocodigo',
    title: 'Representar datos en pseudocódigo',
    module: 'Datos, valores y operaciones básicas',
    moduleNumber: 4,
    order: 5,
    description:
      'Aprende a usar variables y a representar datos correctamente en pseudocódigo para estructurar tus algoritmos.',
    explanation: `Hasta ahora has visto los tipos de datos y las operaciones. Ahora aprenderás a **almacenar datos en variables** dentro de tu pseudocódigo para construir algoritmos más completos.

**¿Qué es una variable?**

Una variable es como una **caja con etiqueta** donde guardas un valor. La etiqueta es el nombre de la variable, y el contenido es el valor almacenado.

- \`precio = 150\` → Una caja llamada "precio" que contiene el número 150.
- \`nombre = "Carlos"\` → Una caja llamada "nombre" que contiene el texto "Carlos".

Lo que hace especial a una variable es que su valor puede cambiar durante la ejecución del programa. Por eso se llaman "variables" — son valores que pueden variar.

**Reglas para nombrar variables**

Los buenos nombres de variables hacen el código más legible:
- Usa nombres descriptivos: \`precio_producto\` es mejor que \`p\` o \`x\`.
- Usa guión bajo para separar palabras: \`nombre_usuario\`, \`total_final\`.
- Evita tildes y caracteres especiales (aunque en pseudocódigo pueden usarse para mayor claridad).

**Asignación de variables**

En pseudocódigo, el símbolo \`=\` significa "asignar" o "guardar en":
- \`edad = 25\` → Guardar el valor 25 en la variable edad.
- \`total = precio * cantidad\` → Calcular el resultado y guardarlo en total.

**Las variables en pseudocódigo completo**

Vamos a escribir un pseudocódigo completo para calcular el precio final de un producto con descuento. Este ejemplo integra todo lo que aprendiste en este módulo: tipos de datos, operaciones aritméticas, comparaciones y variables.`,
    codeExample: `// ── Variables en pseudocódigo ─────────────────────────────────────────────

// Asignación de variables con diferentes tipos:
nombre_cliente = "Sofía López"      // texto
precio_producto = 250.00            // decimal
cantidad_comprada = 3               // entero
tiene_membresia = verdadero         // booleano

// ── Algoritmo completo: Calcular precio final con descuento ───────────────
INICIO
  // ENTRADA
  LEER nombre_cliente
  LEER precio_producto
  LEER cantidad_comprada
  LEER tiene_membresia

  // PROCESO: calcular subtotal
  subtotal = precio_producto * cantidad_comprada

  // PROCESO: aplicar descuento si aplica
  SI tiene_membresia ENTONCES
    descuento = subtotal * 0.10   // 10% de descuento por membresía
  SI NO, SI subtotal > 500 ENTONCES
    descuento = subtotal * 0.05   // 5% por compra mayor a $500
  SI NO
    descuento = 0                 // Sin descuento
  FIN SI

  // PROCESO: calcular total final con impuesto
  precio_con_descuento = subtotal - descuento
  impuesto = precio_con_descuento * 0.16
  total_final = precio_con_descuento + impuesto

  // SALIDA
  MOSTRAR "Cliente: " + nombre_cliente
  MOSTRAR "Subtotal: $" + subtotal
  MOSTRAR "Descuento: $" + descuento
  MOSTRAR "Impuesto (16%): $" + impuesto
  MOSTRAR "TOTAL A PAGAR: $" + total_final
FIN

// Verificación con ejemplo:
// nombre = "Sofía", precio = 250, cantidad = 3, membresia = verdadero
// subtotal = 250 * 3 = 750
// descuento = 750 * 0.10 = 75 (tiene membresía)
// precio_con_descuento = 750 - 75 = 675
// impuesto = 675 * 0.16 = 108
// total_final = 675 + 108 = 783 ✓`,
    keyPoints: [
      'Una variable es una "caja con etiqueta" que almacena un valor que puede cambiar.',
      'Los nombres de variables deben ser descriptivos y usar guión bajo para separar palabras.',
      'El símbolo = en pseudocódigo significa "asignar" o "guardar" un valor en una variable.',
      'Las variables pueden cambiar de valor durante la ejecución del algoritmo.',
      'Combinar variables, tipos de datos, operaciones y comparaciones es la base de cualquier algoritmo.',
    ],
    exercise: {
      description:
        'Mini reto del módulo: Escribe el pseudocódigo completo para este problema: "Una tienda vende un producto a $80. Si el cliente compra 5 o más unidades, el precio por unidad baja a $65. Calcula el precio total según la cantidad comprada y muestra si el cliente se beneficia del precio especial." Usa variables con nombres descriptivos.',
      hint: 'Entradas: cantidad_comprada. Variables calculadas: precio_unitario (cambia según la condición), total. Condición: SI cantidad_comprada >= 5 → precio especial. Verifica con dos ejemplos: 3 unidades y 6 unidades.',
    },
    quiz: [
      {
        question: '¿Por qué se llaman "variables" en programación?',
        options: [
          'Porque son difíciles de entender',
          'Porque solo existen temporalmente y desaparecen cuando el programa termina',
          'Porque su valor puede cambiar durante la ejecución del programa',
          'Porque varían según el lenguaje de programación que se use',
        ],
        correctAnswer: 'Porque su valor puede cambiar durante la ejecución del programa',
        correctFeedback:
          'Correcto. Una variable se llama así porque su valor puede variar a lo largo del programa. A diferencia de una constante (que nunca cambia), una variable puede recibir diferentes valores en distintos momentos.',
        incorrectFeedback:
          'No es correcto. Las variables se llaman así porque su valor puede cambiar durante la ejecución. Puedes asignar un valor inicial y luego modificarlo según las necesidades del algoritmo.',
      },
    ],
  },
]

export const logicaModule4: Module = {
  number: 4,
  title: 'Datos, valores y operaciones básicas',
  level: 'básico',
  lessons: lessonsLogicaModule4,
}
