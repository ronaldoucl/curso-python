import type { Lesson, Module } from '@/types'

export const lessons: Lesson[] = [
  // ─── MÓDULO 1 ───────────────────────────────────────────────────
  {
    slug: 'que-es-python',
    title: '¿Qué es Python?',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 1,
    description: 'Descubre qué es Python, para qué se usa y por qué es el lenguaje ideal para aprender a programar.',
    explanation: `Python es un lenguaje de programación de propósito general creado por Guido van Rossum en 1991. Su diseño prioriza la legibilidad del código, lo que lo hace perfecto para quienes están aprendiendo a programar por primera vez.

**¿Para qué se usa Python?**
- Desarrollo web (Django, FastAPI, Flask)
- Ciencia de datos e inteligencia artificial (NumPy, Pandas, TensorFlow)
- Automatización de tareas repetitivas
- Scripts del sistema operativo
- Desarrollo de juegos (Pygame)
- Seguridad informática

**¿Por qué aprender Python?**
Python tiene una sintaxis muy limpia y cercana al lenguaje humano. Puedes hacer muchísimo con pocas líneas de código. Además, es uno de los lenguajes más demandados en el mercado laboral.

**Python es interpretado**, lo que significa que el código se ejecuta línea por línea, sin necesidad de compilarlo antes. Esto hace que aprender y experimentar sea muy rápido.`,
    codeExample: `# Este es un comentario en Python
# Los comentarios empiezan con el símbolo #

# Python puede hacer cálculos simples
print(2 + 3)       # Resultado: 5
print(10 * 4)      # Resultado: 40
print(100 / 5)     # Resultado: 20.0

# Python puede mostrar texto
print("Hola, mundo!")
print("Python es increíble")

# Python puede trabajar con variables
nombre = "RonaldoScript"
print("Bienvenido a", nombre)`,
    keyPoints: [
      'Python fue creado en 1991 por Guido van Rossum.',
      'Es un lenguaje interpretado: se ejecuta línea por línea.',
      'Su sintaxis es simple y fácil de leer.',
      'Se usa en web, datos, IA, automatización y más.',
      'Los comentarios se escriben con el símbolo #.',
    ],
    exercise: {
      description: 'Escribe un programa que muestre tu nombre y tu lenguaje favorito usando print().',
      hint: 'Usa print("Tu nombre") y print("Mi lenguaje favorito es Python").',
    },
    quiz: [
      {
        question: '¿En qué año fue creado Python?',
        options: ['1985', '1991', '2000', '2010'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Python fue creado por Guido van Rossum en 1991.',
        feedbackIncorrect: 'No es correcto. Python fue creado en 1991 por Guido van Rossum.',
      },
      {
        question: '¿Cuál de estos NO es un uso común de Python?',
        options: ['Ciencia de datos', 'Automatización', 'Diseño de hardware físico', 'Desarrollo web'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Python no se usa para diseñar hardware físico.',
        feedbackIncorrect: 'Python sí se usa para eso. El diseño de hardware físico es lo que Python no puede hacer directamente.',
      },
      {
        question: '¿Cómo se escribe un comentario en Python?',
        options: ['// comentario', '/* comentario */', '# comentario', '<!-- comentario -->'],
        correctIndex: 2,
        feedbackCorrect: '¡Exacto! En Python los comentarios se escriben con #.',
        feedbackIncorrect: 'En Python los comentarios se escriben con el símbolo #, no con los otros formatos.',
      },
    ],
  },

  {
    slug: 'donde-escribir-python',
    title: '¿Dónde puedo escribir código Python?',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 2,
    description: 'Conoce las diferentes opciones para escribir y ejecutar código Python: desde el navegador hasta tu computadora.',
    explanation: `Antes de programar necesitas un lugar donde escribir y ejecutar tu código. Tienes varias opciones, desde las más simples hasta las más profesionales.

**Opción 1 — En el navegador (sin instalar nada)**
- **Replit** (replit.com): Editor online gratuito, perfecto para empezar.
- **Google Colab** (colab.research.google.com): Ideal para ciencia de datos.
- **Python Tutor** (pythontutor.com): Muestra cómo se ejecuta el código paso a paso.

**Opción 2 — En tu computadora**
- Instala Python desde python.org.
- Usa un editor de código como **VS Code** (gratuito y muy popular).
- También puedes usar **PyCharm** (tiene versión gratuita).

**Opción 3 — La terminal interactiva (REPL)**
- Abre la terminal de tu sistema y escribe \`python3\`.
- Puedes escribir código línea por línea y ver el resultado inmediatamente.

**Recomendación para principiantes:**
Empieza con Replit en el navegador. No necesitas instalar nada y puedes practicar desde cualquier dispositivo.`,
    codeExample: `# Prueba este código en cualquier entorno de Python

# Verificar la versión de Python
import sys
print("Versión de Python:", sys.version)

# Un programa sencillo de bienvenida
nombre = input("¿Cómo te llamas? ")
print("¡Hola,", nombre + "! Bienvenido a Python.")

# Operaciones básicas
a = 10
b = 3
print("Suma:", a + b)
print("Resta:", a - b)
print("Multiplicación:", a * b)
print("División:", a / b)`,
    keyPoints: [
      'Puedes programar en Python sin instalar nada usando Replit o Google Colab.',
      'VS Code es el editor más popular para programadores.',
      'La terminal interactiva (REPL) permite ejecutar código al instante.',
      'Para empezar, Replit.com es la opción más sencilla.',
    ],
    exercise: {
      description: 'Abre Replit.com, crea un proyecto Python y ejecuta print("¡Hola desde Replit!").',
      hint: 'Regístrate gratis en replit.com, crea un "Repl" con Python y escribe el código en el editor.',
    },
    quiz: [
      {
        question: '¿Cuál de estas opciones permite programar en Python SIN instalar nada?',
        options: ['VS Code', 'PyCharm', 'Replit', 'Notepad'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Replit funciona completamente en el navegador.',
        feedbackIncorrect: 'Replit es la opción correcta ya que funciona en el navegador sin necesidad de instalar nada.',
      },
      {
        question: '¿Desde dónde puedes descargar Python oficialmente?',
        options: ['github.com', 'python.org', 'google.com', 'replit.com'],
        correctIndex: 1,
        feedbackCorrect: '¡Exacto! Python se descarga oficialmente desde python.org.',
        feedbackIncorrect: 'Python se descarga desde su sitio oficial: python.org.',
      },
      {
        question: '¿Qué significa REPL en programación?',
        options: [
          'Read, Execute, Print, Loop',
          'Run, Edit, Preview, Launch',
          'Read, Eval, Print, Loop',
          'Repeat, Execute, Print, Load',
        ],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! REPL significa Read, Eval, Print, Loop (Leer, Evaluar, Imprimir, Repetir).',
        feedbackIncorrect: 'REPL significa Read, Eval, Print, Loop: lee el código, lo evalúa, imprime el resultado y repite.',
      },
    ],
  },

  {
    slug: 'hola-mundo',
    title: 'Tu primer programa: Hola Mundo',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 3,
    description: 'Escribe tu primer programa en Python y aprende cómo funciona la función print().',
    explanation: `El programa "Hola Mundo" es la primera tradición en programación. Consiste en hacer que el computador muestre el mensaje "Hola, Mundo!" en pantalla.

**La función print()**
En Python usamos \`print()\` para mostrar información en pantalla. Dentro de los paréntesis escribimos lo que queremos mostrar.

- Para mostrar texto, lo ponemos entre comillas: \`print("Hola")\`
- Para mostrar números, los escribimos directamente: \`print(42)\`
- Podemos mostrar varias cosas separadas por comas: \`print("Hola", "mundo")\`

**¿Qué son las comillas?**
Las comillas le dicen a Python que lo que está adentro es texto (llamado "cadena de caracteres" o *string*). Puedes usar comillas simples \`'hola'\` o dobles \`"hola"\` — ambas funcionan igual.

**Errores comunes:**
- Olvidar cerrar el paréntesis: \`print("Hola"\`  ← Error
- Olvidar las comillas: \`print(Hola)\`  ← Error (Python lo interpretaría como una variable)`,
    codeExample: `# Tu primer programa en Python
print("¡Hola, Mundo!")

# Puedes imprimir diferentes tipos de información
print("Mi nombre es Python")
print(2026)
print(3.14)

# Imprimir varias cosas a la vez
print("Tengo", 25, "años")

# Usar comillas simples también funciona
print('Python es genial')

# Imprimir una línea vacía
print()

# Imprimir con salto de línea personalizado
print("Línea 1")
print("Línea 2")

# El parámetro end cambia el final de print
print("Hola ", end="")
print("mundo")  # Imprime: Hola mundo (en la misma línea)`,
    keyPoints: [
      'print() muestra información en pantalla.',
      'El texto debe ir entre comillas simples o dobles.',
      'Puedes imprimir varias cosas separándolas con comas.',
      'print() sin argumentos imprime una línea vacía.',
      'end="" evita el salto de línea automático.',
    ],
    exercise: {
      description: 'Escribe un programa que imprima tu nombre, tu edad y tu ciudad favorita, cada uno en una línea diferente.',
      hint: 'Usa tres llamadas a print(), una para cada dato.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de imprimir "Hola" en Python?',
        options: ['echo "Hola"', 'print("Hola")', 'console.log("Hola")', 'printf("Hola")'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! En Python se usa print() para mostrar texto.',
        feedbackIncorrect: 'En Python se usa print(). echo es de bash, console.log es de JavaScript, printf es de C.',
      },
      {
        question: '¿Cuál de estos códigos mostrará un error?',
        options: ['print("Hola")', "print('Hola')", 'print(Hola)', 'print(42)'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! print(Hola) sin comillas dará un error porque Python buscaría una variable llamada Hola.',
        feedbackIncorrect: 'print(Hola) sin comillas da un error porque Python intenta buscar una variable llamada Hola.',
      },
      {
        question: '¿Qué imprime este código? print("Hola", "Mundo")',
        options: ['"Hola", "Mundo"', 'HolaMundo', 'Hola Mundo', 'Error'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! print() con varios argumentos los separa automáticamente con un espacio.',
        feedbackIncorrect: 'Cuando print() recibe varios argumentos separados por comas, los imprime con un espacio entre ellos.',
      },
    ],
  },

  // ─── MÓDULO 2 ───────────────────────────────────────────────────
  {
    slug: 'variables',
    title: 'Variables',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 4,
    description: 'Aprende qué son las variables y cómo usarlas para guardar y reutilizar información en tus programas.',
    explanation: `Una variable es como una caja con nombre donde guardas información. Puedes poner algo adentro, y luego usar ese nombre para acceder a lo que guardaste.

**¿Cómo crear una variable?**
En Python es muy sencillo: escribes el nombre, el signo \`=\` y el valor que quieres guardar.

\`\`\`
nombre = "María"
edad = 25
altura = 1.65
\`\`\`

**Reglas para nombrar variables:**
- El nombre puede tener letras, números y guiones bajos (\`_\`).
- No puede empezar con un número: \`2nombre\` ← incorrecto.
- No puede tener espacios: \`mi nombre\` ← incorrecto, usa \`mi_nombre\`.
- Python distingue entre mayúsculas y minúsculas: \`nombre\` y \`Nombre\` son variables distintas.
- Evita palabras reservadas como \`if\`, \`for\`, \`print\`, etc.

**Buenas prácticas:**
- Usa nombres descriptivos: \`edad_usuario\` es mejor que \`x\`.
- Usa snake_case (palabras separadas por guión bajo): \`precio_total\`.

**Reasignar variables:**
Puedes cambiar el valor de una variable en cualquier momento simplemente asignándole un nuevo valor.`,
    codeExample: `# Crear variables
nombre = "Ana"
edad = 28
ciudad = "Madrid"
esta_aprendiendo = True

# Usar variables en print
print("Nombre:", nombre)
print("Edad:", edad)
print("Ciudad:", ciudad)

# Reasignar variables
edad = 29
print("Edad actualizada:", edad)

# Combinar variables con texto (f-strings)
print(f"Hola, me llamo {nombre} y tengo {edad} años.")
print(f"Vivo en {ciudad}.")

# Operaciones con variables numéricas
precio = 100
descuento = 20
precio_final = precio - descuento
print(f"Precio final: \${precio_final}")

# Múltiple asignación
x = y = z = 0
print(x, y, z)  # 0 0 0

# Intercambiar valores
a = 1
b = 2
a, b = b, a
print(a, b)  # 2 1`,
    keyPoints: [
      'Una variable guarda un valor bajo un nombre.',
      'Se crea con: nombre = valor.',
      'Los nombres son case-sensitive (mayúsculas importan).',
      'snake_case es la convención para nombrar en Python.',
      'Puedes cambiar el valor de una variable en cualquier momento.',
      'Los f-strings (f"texto {variable}") facilitan insertar variables en texto.',
    ],
    exercise: {
      description: 'Crea variables para tu nombre, edad y película favorita. Luego imprime una frase que las use todas.',
      hint: 'Usa un f-string: print(f"Me llamo {nombre}, tengo {edad} años y mi película favorita es {pelicula}.")',
    },
    quiz: [
      {
        question: '¿Cuál de estos nombres de variable es válido en Python?',
        options: ['2nombre', 'mi nombre', 'nombre_usuario', 'for'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! nombre_usuario sigue todas las reglas: letras, sin espacios y no empieza con número.',
        feedbackIncorrect: 'nombre_usuario es el único válido: no empieza con número, no tiene espacios y no es una palabra reservada.',
      },
      {
        question: '¿Qué hace el operador = en Python?',
        options: ['Compara dos valores', 'Asigna un valor a una variable', 'Suma dos números', 'Define una función'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! El = en Python es el operador de asignación, no de comparación.',
        feedbackIncorrect: 'El = en Python asigna un valor a una variable. Para comparar se usa == (doble igual).',
      },
      {
        question: '¿Cuál es el resultado de este código?\nx = 5\nx = x + 3\nprint(x)',
        options: ['5', '3', '8', 'Error'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! x empieza en 5, luego se le suma 3 y queda 8.',
        feedbackIncorrect: 'x comienza en 5. Luego x = x + 3 significa x = 5 + 3 = 8. Se imprime 8.',
      },
    ],
  },

  {
    slug: 'tipos-de-datos',
    title: 'Tipos de datos',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 5,
    description: 'Conoce los tipos de datos básicos en Python: números, texto, booleanos y cómo trabajar con ellos.',
    explanation: `En Python, cada valor tiene un tipo. El tipo de dato determina qué operaciones puedes hacer con ese valor.

**Tipos básicos:**

**int (entero)** — Números sin decimales.
\`\`\`python
edad = 25
temperatura = -10
\`\`\`

**float (decimal)** — Números con punto decimal.
\`\`\`python
precio = 19.99
pi = 3.14159
\`\`\`

**str (string / cadena)** — Texto entre comillas.
\`\`\`python
nombre = "Python"
saludo = 'Hola mundo'
\`\`\`

**bool (booleano)** — Solo dos valores posibles: \`True\` o \`False\`.
\`\`\`python
esta_activo = True
es_mayor = False
\`\`\`

**NoneType** — Representa la ausencia de valor.
\`\`\`python
resultado = None
\`\`\`

**¿Cómo saber el tipo de una variable?**
Usa la función \`type()\`:
\`\`\`python
print(type(42))     # <class 'int'>
print(type(3.14))   # <class 'float'>
\`\`\`

**Conversión de tipos:**
Puedes convertir entre tipos usando \`int()\`, \`float()\`, \`str()\`:
\`\`\`python
numero = int("42")    # Convierte string a entero
texto = str(100)      # Convierte entero a string
\`\`\``,
    codeExample: `# Tipos de datos en Python

# int - números enteros
edad = 30
año = 2024
temperatura = -5
print(type(edad))     # <class 'int'>

# float - números decimales
precio = 9.99
pi = 3.14159
print(type(precio))   # <class 'float'>

# str - texto (strings)
nombre = "María"
mensaje = 'Bienvenido'
multilinea = """Este es
un texto de
varias líneas"""
print(type(nombre))   # <class 'str'>

# bool - verdadero o falso
activo = True
tiene_cuenta = False
print(type(activo))   # <class 'bool'>

# None - sin valor
resultado = None
print(type(resultado))  # <class 'NoneType'>

# Conversión de tipos
numero_texto = "42"
numero = int(numero_texto)    # "42" → 42
print(numero + 8)             # 50

decimal = float("3.14")       # "3.14" → 3.14
print(decimal * 2)            # 6.28

texto = str(100)              # 100 → "100"
print("El número es: " + texto)`,
    keyPoints: [
      'int: números enteros (1, -5, 1000).',
      'float: números decimales (3.14, -0.5).',
      'str: texto entre comillas ("hola", \'mundo\').',
      'bool: solo True o False (con mayúscula).',
      'type() revela el tipo de cualquier valor.',
      'int(), float(), str() convierten entre tipos.',
    ],
    exercise: {
      description: 'Crea una variable de cada tipo (int, float, str, bool) e imprime su valor y su tipo usando type().',
      hint: 'Usa print(type(tu_variable)) para ver el tipo de cada una.',
    },
    quiz: [
      {
        question: '¿Cuál es el tipo de dato de: precio = 19.99?',
        options: ['int', 'float', 'str', 'bool'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Los números con decimales son de tipo float.',
        feedbackIncorrect: '19.99 tiene decimales, por lo que es de tipo float, no int.',
      },
      {
        question: '¿Qué devuelve type("Hola")?',
        options: ["<class 'int'>", "<class 'bool'>", "<class 'str'>", "<class 'text'>"],
        correctIndex: 2,
        feedbackCorrect: "¡Correcto! El texto es de tipo str (string) en Python.",
        feedbackIncorrect: "El texto en Python es de tipo str (string). type('Hola') devuelve <class 'str'>.",
      },
      {
        question: '¿Cuál de estas conversiones es correcta para transformar el string "5" en el número 5?',
        options: ['number("5")', 'convert("5")', 'int("5")', 'parse("5")'],
        correctIndex: 2,
        feedbackCorrect: '¡Exacto! int() convierte un string a número entero.',
        feedbackIncorrect: 'La función correcta es int(). En Python: int("5") devuelve el número 5.',
      },
    ],
  },

  {
    slug: 'operadores',
    title: 'Operadores',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 6,
    description: 'Aprende a usar los operadores aritméticos, de comparación y lógicos en Python.',
    explanation: `Los operadores son símbolos que le dicen a Python qué operación realizar con los valores.

**Operadores aritméticos:**
| Operador | Operación | Ejemplo | Resultado |
|----------|-----------|---------|-----------|
| + | Suma | 5 + 3 | 8 |
| - | Resta | 10 - 4 | 6 |
| * | Multiplicación | 3 * 4 | 12 |
| / | División | 10 / 3 | 3.333... |
| // | División entera | 10 // 3 | 3 |
| % | Módulo (resto) | 10 % 3 | 1 |
| ** | Potencia | 2 ** 8 | 256 |

**Operadores de comparación:**
Siempre devuelven True o False.
| Operador | Significado |
|----------|-------------|
| == | igual a |
| != | diferente de |
| > | mayor que |
| < | menor que |
| >= | mayor o igual |
| <= | menor o igual |

**Operadores lógicos:**
| Operador | Significado |
|----------|-------------|
| and | verdadero si ambos son True |
| or | verdadero si al menos uno es True |
| not | invierte el valor booleano |`,
    codeExample: `# Operadores aritméticos
print(10 + 3)   # 13
print(10 - 3)   # 7
print(10 * 3)   # 30
print(10 / 3)   # 3.3333...
print(10 // 3)  # 3  (división entera)
print(10 % 3)   # 1  (resto de la división)
print(2 ** 10)  # 1024 (2 elevado a 10)

# Operadores de comparación
edad = 18
print(edad >= 18)   # True
print(edad == 21)   # False
print(edad != 21)   # True

# Verificar si un número es par
numero = 14
print(numero % 2 == 0)  # True (es par)

# Operadores lógicos
tiene_cuenta = True
es_mayor = True
print(tiene_cuenta and es_mayor)  # True
print(tiene_cuenta or False)      # True
print(not tiene_cuenta)           # False

# Ejemplo práctico: calcular descuento
precio = 200
descuento = 0.15
ahorro = precio * descuento
precio_final = precio - ahorro
print(f"Precio original: \${precio}")
print(f"Ahorro: \${ahorro}")
print(f"Precio final: \${precio_final}")`,
    keyPoints: [
      '// hace división entera (sin decimales).',
      '% devuelve el resto de la división (útil para saber si un número es par).',
      '** es el operador de potencia.',
      'Los operadores de comparación siempre devuelven True o False.',
      'and, or, not son los operadores lógicos.',
    ],
    exercise: {
      description: 'Calcula el área y perímetro de un rectángulo con base=8 y altura=5. Luego verifica si el área es mayor que 30.',
      hint: 'área = base * altura, perímetro = 2 * (base + altura), luego usa > para comparar.',
    },
    quiz: [
      {
        question: '¿Cuál es el resultado de 17 % 5?',
        options: ['3', '2', '3.4', '0'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! 17 dividido entre 5 es 3 con resto 2. El operador % devuelve el resto.',
        feedbackIncorrect: '17 % 5 = 2. El operador % devuelve el resto de la división: 17 = 5×3 + 2.',
      },
      {
        question: '¿Cuál de estos operadores verifica si dos valores son IGUALES?',
        options: ['=', '!=', '==', '>='],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! == compara si dos valores son iguales. = solo asigna valores.',
        feedbackIncorrect: '== (doble igual) compara igualdad. El = simple es solo para asignar valores a variables.',
      },
      {
        question: '¿Qué imprime: print(True and False)?',
        options: ['True', 'False', 'Error', 'None'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! and solo es True cuando AMBOS lados son True. True and False = False.',
        feedbackIncorrect: 'and requiere que ambos lados sean True. True and False = False.',
      },
    ],
  },

  // ─── MÓDULO 3 ───────────────────────────────────────────────────
  {
    slug: 'condicionales',
    title: 'Condicionales: if, elif, else',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 7,
    description: 'Aprende a tomar decisiones en tus programas usando las sentencias if, elif y else.',
    explanation: `Los condicionales permiten que tu programa tome decisiones: ejecutar cierto código solo si se cumple una condición.

**Estructura básica:**
\`\`\`python
if condición:
    # código si la condición es True
elif otra_condición:
    # código si la otra condición es True
else:
    # código si ninguna condición fue True
\`\`\`

**Puntos importantes:**
- Los dos puntos \`:\` al final de \`if\`, \`elif\` y \`else\` son obligatorios.
- El código dentro del bloque debe estar indentado (4 espacios).
- Python usa la indentación para saber qué código pertenece a cada bloque.
- Puedes tener cero \`elif\` y el \`else\` también es opcional.

**¿Qué es la indentación?**
Es el espacio al inicio de una línea. En Python es parte de la sintaxis — no es opcional como en otros lenguajes. Usa 4 espacios (o Tab) de forma consistente.

**Operadores útiles en condiciones:**
- \`in\`: verifica si un valor está dentro de una colección.
- \`not in\`: lo contrario.
- \`is\`: verifica identidad de objetos.`,
    codeExample: `# Condicional básico
edad = 20

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# Múltiples condiciones con elif
nota = 75

if nota >= 90:
    print("Calificación: Excelente")
elif nota >= 75:
    print("Calificación: Bueno")
elif nota >= 60:
    print("Calificación: Suficiente")
else:
    print("Calificación: Insuficiente")

# Condiciones combinadas
usuario = "admin"
contraseña = "1234"

if usuario == "admin" and contraseña == "1234":
    print("Acceso concedido ✓")
else:
    print("Usuario o contraseña incorrectos ✗")

# Verificar si está en una lista
frutas = ["manzana", "pera", "uva"]
fruta_buscada = "pera"

if fruta_buscada in frutas:
    print(f"{fruta_buscada} está en la lista")
else:
    print(f"{fruta_buscada} NO está en la lista")

# Condicional en una línea (ternario)
temperatura = 30
estado = "caluroso" if temperatura > 25 else "fresco"
print(f"El clima está {estado}")`,
    keyPoints: [
      'if ejecuta código solo si la condición es True.',
      'elif permite verificar condiciones adicionales.',
      'else captura todos los casos no cubiertos.',
      'La indentación (4 espacios) es obligatoria en Python.',
      'Puedes combinar condiciones con and, or, not.',
      'in verifica si un elemento está dentro de una colección.',
    ],
    exercise: {
      description: 'Crea un programa que determine si un número es positivo, negativo o cero, y si además es par o impar.',
      hint: 'Usa if/elif/else para positivo/negativo/cero, y luego otro if para verificar si numero % 2 == 0.',
    },
    quiz: [
      {
        question: '¿Qué pasa si una condición if es False y no hay else?',
        options: ['Se genera un error', 'Se ejecuta el código de todas formas', 'El bloque if se omite y el programa continúa', 'El programa se detiene'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Si la condición es False y no hay else, Python simplemente ignora ese bloque y sigue.',
        feedbackIncorrect: 'Si la condición es False y no hay else, Python simplemente omite ese bloque y continúa con el resto del programa.',
      },
      {
        question: '¿Qué elemento de la sintaxis de Python es OBLIGATORIO después de if?',
        options: ['Paréntesis ()', 'Llaves {}', 'Dos puntos :', 'Punto y coma ;'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Los dos puntos : son obligatorios después de if, elif y else.',
        feedbackIncorrect: 'En Python los dos puntos : son obligatorios al final de if, elif y else.',
      },
      {
        question: '¿Cuántos elif puede tener una sentencia if?',
        options: ['Solo uno', 'Máximo dos', 'Máximo cinco', 'Todos los que necesites'],
        correctIndex: 3,
        feedbackCorrect: '¡Exacto! Puedes encadenar tantos elif como necesites.',
        feedbackIncorrect: 'Puedes usar tantos elif como necesites. No hay límite.',
      },
    ],
  },

  {
    slug: 'bucle-for',
    title: 'Bucles for',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 8,
    description: 'Aprende a repetir acciones en Python usando el bucle for para iterar sobre listas, rangos y más.',
    explanation: `Un bucle for te permite repetir un bloque de código para cada elemento de una colección.

**Sintaxis básica:**
\`\`\`python
for variable in colección:
    # código a repetir
\`\`\`

**range() — generar secuencias de números:**
\`range(n)\` genera números del 0 al n-1.
\`range(inicio, fin)\` genera desde inicio hasta fin-1.
\`range(inicio, fin, paso)\` con un incremento específico.

**Ejemplos de iteración:**
- Iterar sobre una lista
- Iterar sobre un string (letra por letra)
- Iterar sobre un diccionario
- Iterar sobre un rango de números

**Palabras clave especiales en bucles:**
- \`break\`: termina el bucle inmediatamente.
- \`continue\`: salta a la siguiente iteración.
- \`else\`: se ejecuta cuando el bucle termina normalmente (sin break).`,
    codeExample: `# Iterar sobre una lista
frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)

# Iterar con range
for i in range(5):
    print(i)    # 0, 1, 2, 3, 4

# range con inicio y fin
for i in range(1, 6):
    print(i)    # 1, 2, 3, 4, 5

# range con paso
for i in range(0, 11, 2):
    print(i)    # 0, 2, 4, 6, 8, 10

# Iterar sobre un string
palabra = "Python"
for letra in palabra:
    print(letra)

# Sumar números del 1 al 100
total = 0
for i in range(1, 101):
    total += i
print(f"Suma del 1 al 100: {total}")  # 5050

# break: salir del bucle
for i in range(10):
    if i == 5:
        break
    print(i)   # 0, 1, 2, 3, 4

# continue: saltar una iteración
for i in range(10):
    if i % 2 == 0:
        continue    # saltar los pares
    print(i)    # 1, 3, 5, 7, 9

# enumerate: obtener índice y valor
nombres = ["Ana", "Luis", "Mía"]
for indice, nombre in enumerate(nombres):
    print(f"{indice + 1}. {nombre}")`,
    keyPoints: [
      'for itera sobre cualquier colección (lista, string, rango).',
      'range() genera secuencias de números.',
      'break termina el bucle; continue salta una iteración.',
      'enumerate() da acceso al índice y al valor.',
      'total += i es igual que total = total + i.',
    ],
    exercise: {
      description: 'Escribe un programa que imprima la tabla de multiplicar del 7 (del 7×1 al 7×10).',
      hint: 'Usa for i in range(1, 11): y dentro print(f"7 x {i} = {7 * i}")',
    },
    quiz: [
      {
        question: '¿Qué números genera range(2, 8)?',
        options: ['2, 3, 4, 5, 6, 7, 8', '2, 3, 4, 5, 6, 7', '3, 4, 5, 6, 7', '2, 4, 6, 8'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! range(2, 8) genera desde 2 hasta 7 (el 8 no se incluye).',
        feedbackIncorrect: 'range(inicio, fin) genera desde inicio hasta fin-1. range(2, 8) = 2, 3, 4, 5, 6, 7.',
      },
      {
        question: '¿Qué hace la palabra clave break dentro de un bucle?',
        options: ['Pausa el bucle 1 segundo', 'Termina el bucle inmediatamente', 'Salta a la siguiente iteración', 'Reinicia el bucle desde el principio'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! break termina el bucle en ese momento.',
        feedbackIncorrect: 'break termina el bucle inmediatamente. Para saltar una iteración se usa continue.',
      },
      {
        question: '¿Cuántas veces se ejecuta el print en este código?\nfor i in range(3):\n    print(i)',
        options: ['2 veces', '3 veces', '4 veces', '0 veces'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! range(3) genera 0, 1, 2 — tres números, tres iteraciones.',
        feedbackIncorrect: 'range(3) genera los números 0, 1, 2 — son 3 números, así que print se ejecuta 3 veces.',
      },
    ],
  },

  {
    slug: 'bucle-while',
    title: 'Bucles while',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 9,
    description: 'Aprende a usar el bucle while para repetir código mientras se cumpla una condición.',
    explanation: `El bucle while repite un bloque de código mientras una condición sea True.

**Sintaxis:**
\`\`\`python
while condición:
    # código a repetir
\`\`\`

**Diferencia entre for y while:**
- \`for\`: úsalo cuando sabes cuántas veces quieres repetir.
- \`while\`: úsalo cuando no sabes cuántas veces necesitas repetir.

**¡Cuidado con los bucles infinitos!**
Si la condición siempre es True, el bucle nunca termina. Asegúrate de que algo dentro del bucle cambie la condición para que eventualmente sea False.

**Patrón común: contador**
\`\`\`python
contador = 0
while contador < 5:
    print(contador)
    contador += 1  # ← Esto hace que el bucle termine
\`\`\`

**Patrón común: validar entrada del usuario**
El while es ideal para pedir datos al usuario hasta que ingrese algo válido.`,
    codeExample: `# Bucle while básico
contador = 1
while contador <= 5:
    print(f"Iteración {contador}")
    contador += 1

# Contar hacia atrás
numero = 10
while numero > 0:
    print(numero)
    numero -= 2
print("¡Despegue!")

# Adivina el número
secreto = 7
intento = 0
while intento != secreto:
    intento = int(input("Adivina el número (1-10): "))
    if intento < secreto:
        print("Muy bajo")
    elif intento > secreto:
        print("Muy alto")
print("¡Correcto!")

# while con break
intentos = 0
while True:
    intentos += 1
    print(f"Intento {intentos}")
    if intentos >= 3:
        break
print("Salimos del bucle")

# Suma de números ingresados por el usuario
total = 0
while True:
    valor = input("Ingresa un número (o 'listo' para terminar): ")
    if valor == "listo":
        break
    total += int(valor)
print(f"Total: {total}")`,
    keyPoints: [
      'while repite mientras la condición sea True.',
      'Asegúrate de cambiar la condición dentro del bucle para evitar bucles infinitos.',
      'break sirve para salir de un while True.',
      'while es ideal cuando el número de repeticiones no se conoce de antemano.',
      'while True crea un bucle infinito controlado con break.',
    ],
    exercise: {
      description: 'Escribe un programa que sume todos los números del 1 al 50 usando un bucle while.',
      hint: 'Usa una variable contador que empiece en 1 y una variable total=0. Suma contador a total en cada iteración y aumenta el contador.',
    },
    quiz: [
      {
        question: '¿Cuándo deberías usar while en lugar de for?',
        options: [
          'Cuando sabes exactamente cuántas veces repetir',
          'Cuando no sabes cuántas veces necesitas repetir',
          'Cuando quieres iterar sobre una lista',
          'Cuando quieres usar range()',
        ],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! while es ideal cuando el número de repeticiones depende de una condición que puede cambiar.',
        feedbackIncorrect: 'while se usa cuando no sabes cuántas veces repetir. Para casos donde sabes la cantidad exacta, for es mejor.',
      },
      {
        question: '¿Qué problema causa un bucle infinito?',
        options: [
          'El programa se vuelve más lento',
          'El programa nunca termina',
          'Se genera un error de sintaxis',
          'Python lo detecta y lo corrige automáticamente',
        ],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Un bucle infinito hace que el programa nunca termine a menos que lo interrumpas manualmente.',
        feedbackIncorrect: 'Un bucle infinito hace que el programa se quede ejecutando para siempre. Debes usar Ctrl+C para interrumpirlo.',
      },
      {
        question: '¿Qué imprime este código?\nx = 0\nwhile x < 3:\n    print(x)\n    x += 1',
        options: ['0 1 2 3', '0 1 2', '1 2 3', '0 1'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! x empieza en 0. El bucle imprime 0, 1, 2 y cuando x llega a 3 la condición es False.',
        feedbackIncorrect: 'x empieza en 0. Se imprime cuando x < 3, así que se imprime 0, 1, 2. Cuando x=3 la condición es False y el bucle para.',
      },
    ],
  },

  // ─── MÓDULO 4 ───────────────────────────────────────────────────
  {
    slug: 'listas',
    title: 'Listas',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 10,
    description: 'Aprende a usar listas para almacenar colecciones de datos y manipularlas con métodos de Python.',
    explanation: `Una lista es una colección ordenada y modificable de elementos. Puede contener cualquier tipo de dato.

**Crear una lista:**
\`\`\`python
numeros = [1, 2, 3, 4, 5]
nombres = ["Ana", "Luis", "María"]
mixta = [1, "hola", True, 3.14]
vacia = []
\`\`\`

**Acceder a elementos (índices):**
Los índices empiezan en 0. Los negativos cuentan desde el final.
\`\`\`python
lista[0]   # primer elemento
lista[-1]  # último elemento
\`\`\`

**Métodos principales:**
| Método | Descripción |
|--------|-------------|
| append(x) | Agrega x al final |
| insert(i, x) | Inserta x en posición i |
| remove(x) | Elimina el primer x |
| pop() | Elimina y devuelve el último |
| sort() | Ordena la lista |
| reverse() | Invierte la lista |
| len(lista) | Número de elementos |
| index(x) | Índice de x |
| count(x) | Cuántas veces aparece x |`,
    codeExample: `# Crear listas
frutas = ["manzana", "banana", "cereza", "durazno"]
numeros = [5, 2, 8, 1, 9, 3]

# Acceder por índice
print(frutas[0])     # manzana
print(frutas[-1])    # durazno
print(frutas[1:3])   # ['banana', 'cereza'] (slicing)

# Modificar
frutas[1] = "mango"
print(frutas)

# Agregar elementos
frutas.append("kiwi")
frutas.insert(0, "fresa")
print(frutas)

# Eliminar elementos
frutas.remove("cereza")
ultimo = frutas.pop()
print(f"Eliminado: {ultimo}")

# Información
print(len(frutas))      # cantidad de elementos
print("mango" in frutas)  # True/False

# Ordenar
numeros.sort()
print(numeros)           # [1, 2, 3, 5, 8, 9]
numeros.sort(reverse=True)
print(numeros)           # [9, 8, 5, 3, 2, 1]

# Iterar
for fruta in frutas:
    print(f"- {fruta}")

# List comprehension (crear lista nueva)
cuadrados = [x**2 for x in range(1, 6)]
print(cuadrados)  # [1, 4, 9, 16, 25]`,
    keyPoints: [
      'Las listas son ordenadas y modificables.',
      'Los índices empiezan en 0; los negativos desde el final.',
      'append() agrega al final; insert() en una posición específica.',
      'remove() elimina por valor; pop() elimina por posición.',
      'sort() ordena en su lugar; sorted() devuelve una lista nueva.',
      'Las list comprehensions crean listas de forma concisa.',
    ],
    exercise: {
      description: 'Crea una lista con 5 números. Luego calcula su suma, su promedio y encuentra el número mayor.',
      hint: 'Usa sum(), len() y max() para hacerlo más fácil, o calcula manualmente con un for.',
    },
    quiz: [
      {
        question: '¿Cuál es el índice del primer elemento de una lista en Python?',
        options: ['1', '-1', '0', 'El índice que le asignes'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Los índices en Python empiezan en 0.',
        feedbackIncorrect: 'En Python los índices empiezan en 0. lista[0] es el primer elemento.',
      },
      {
        question: '¿Qué método agrega un elemento al FINAL de una lista?',
        options: ['insert()', 'add()', 'append()', 'push()'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! append() agrega un elemento al final de la lista.',
        feedbackIncorrect: 'append() es el método para agregar al final. insert() agrega en una posición específica.',
      },
      {
        question: '¿Cuál es el resultado de [1, 2, 3][1:3]?',
        options: ['[1, 2, 3]', '[2, 3]', '[1, 2]', '[2]'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! El slice [1:3] toma desde el índice 1 hasta el 2 (el 3 no se incluye).',
        feedbackIncorrect: '[1:3] es un slice que toma desde el índice 1 hasta el índice 2. Resultado: [2, 3].',
      },
    ],
  },

  {
    slug: 'diccionarios',
    title: 'Diccionarios',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 11,
    description: 'Aprende a usar diccionarios para almacenar datos con pares clave-valor en Python.',
    explanation: `Un diccionario almacena pares de clave-valor. En lugar de índices numéricos, accedes a los valores por su clave.

**Crear un diccionario:**
\`\`\`python
persona = {
    "nombre": "Ana",
    "edad": 28,
    "ciudad": "Madrid"
}
\`\`\`

**Acceder a valores:**
\`\`\`python
persona["nombre"]        # "Ana"
persona.get("edad")      # 28 (más seguro, no da error si no existe)
persona.get("email", "Sin email")  # valor por defecto
\`\`\`

**Métodos importantes:**
| Método | Descripción |
|--------|-------------|
| keys() | Devuelve todas las claves |
| values() | Devuelve todos los valores |
| items() | Devuelve pares (clave, valor) |
| get(k, default) | Obtiene valor con default |
| update({...}) | Actualiza con otro dict |
| pop(k) | Elimina y devuelve valor |
| "k" in dict | Verifica si clave existe |`,
    codeExample: `# Crear diccionario
estudiante = {
    "nombre": "Carlos",
    "edad": 22,
    "carrera": "Informática",
    "notas": [8.5, 9.0, 7.5]
}

# Acceder a valores
print(estudiante["nombre"])           # Carlos
print(estudiante.get("edad"))         # 22
print(estudiante.get("email", "N/A")) # N/A

# Modificar valores
estudiante["edad"] = 23
estudiante["email"] = "carlos@email.com"

# Eliminar
eliminado = estudiante.pop("carrera")
print(f"Carrera eliminada: {eliminado}")

# Iterar
for clave, valor in estudiante.items():
    print(f"{clave}: {valor}")

# Verificar existencia
if "nombre" in estudiante:
    print("Tiene nombre")

# Diccionario de diccionarios
inventario = {
    "manzana": {"precio": 0.5, "stock": 100},
    "banana": {"precio": 0.3, "stock": 50},
}
print(inventario["manzana"]["precio"])  # 0.5

# Dict comprehension
cuadrados = {x: x**2 for x in range(1, 6)}
print(cuadrados)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`,
    keyPoints: [
      'Los diccionarios almacenan pares clave-valor.',
      'Las claves deben ser únicas e inmutables (str, int, tuple).',
      'get() es más seguro que [] porque no lanza error si la clave no existe.',
      'items() devuelve pares (clave, valor) para iterar.',
      'Los diccionarios mantienen el orden de inserción (Python 3.7+).',
    ],
    exercise: {
      description: 'Crea un diccionario con los datos de una película (título, año, director, género). Luego imprime cada dato con su etiqueta.',
      hint: 'Usa un for con .items() para imprimir todos los campos de forma elegante.',
    },
    quiz: [
      {
        question: '¿Cómo accedes al valor de la clave "nombre" en un diccionario llamado "persona"?',
        options: ['persona(nombre)', 'persona.nombre', 'persona["nombre"]', 'persona->nombre'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Los diccionarios se acceden con corchetes y la clave entre comillas.',
        feedbackIncorrect: 'La forma correcta es persona["nombre"] usando corchetes con la clave.',
      },
      {
        question: '¿Cuál es la ventaja de usar get() en lugar de [] para acceder a un diccionario?',
        options: [
          'get() es más rápido',
          'get() no lanza error si la clave no existe, devuelve None o el valor por defecto',
          'get() crea la clave si no existe',
          'No hay diferencia',
        ],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! get() devuelve None (o el valor por defecto) si la clave no existe, en vez de lanzar un KeyError.',
        feedbackIncorrect: 'get() es más seguro porque no lanza KeyError si la clave no existe — devuelve None o el valor por defecto.',
      },
      {
        question: '¿Qué devuelve diccionario.keys()?',
        options: ['Una lista de valores', 'Una lista de claves', 'Una lista de tuplas (clave, valor)', 'El número de elementos'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! keys() devuelve todas las claves del diccionario.',
        feedbackIncorrect: 'keys() devuelve las claves, values() los valores, e items() los pares (clave, valor).',
      },
    ],
  },

  {
    slug: 'tuplas-y-sets',
    title: 'Tuplas y Sets',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 12,
    description: 'Aprende sobre tuplas (datos inmutables) y sets (colecciones sin duplicados) en Python.',
    explanation: `Además de listas y diccionarios, Python tiene otras dos estructuras de datos muy útiles.

**Tuplas — colecciones inmutables:**
Las tuplas son como listas pero no se pueden modificar. Se crean con paréntesis.
\`\`\`python
coordenadas = (40.4, -3.7)
colores = ("rojo", "verde", "azul")
\`\`\`

¿Cuándo usar tuplas?
- Para datos que no deben cambiar (coordenadas, colores RGB, configuraciones).
- Son más rápidas que las listas.
- Pueden usarse como claves de diccionario.

**Sets — colecciones sin duplicados:**
Los sets son colecciones desordenadas y sin elementos repetidos.
\`\`\`python
numeros = {1, 2, 3, 3, 2}  # {1, 2, 3}
\`\`\`

Operaciones de conjuntos:
- Unión: \`A | B\`
- Intersección: \`A & B\`
- Diferencia: \`A - B\`
- Diferencia simétrica: \`A ^ B\`

¿Cuándo usar sets?
- Para eliminar duplicados de una lista.
- Para verificar pertenencia de forma muy rápida.
- Para operaciones matemáticas de conjuntos.`,
    codeExample: `# ── TUPLAS ──────────────────────────────────────
coordenadas = (40.4, -3.7)
print(coordenadas[0])    # 40.4
print(len(coordenadas))  # 2

# No se pueden modificar
# coordenadas[0] = 50    # ← TypeError!

# Desempaquetar tupla
x, y = coordenadas
print(f"Latitud: {x}, Longitud: {y}")

# Tupla de un solo elemento necesita coma
un_elemento = (42,)
print(type(un_elemento))  # <class 'tuple'>

# Retornar múltiples valores desde una función
def min_max(lista):
    return min(lista), max(lista)

minimo, maximo = min_max([3, 1, 8, 2, 5])
print(f"Mín: {minimo}, Máx: {maximo}")

# ── SETS ────────────────────────────────────────
numeros = {1, 2, 3, 4, 5}
duplicados = {1, 1, 2, 2, 3}
print(duplicados)  # {1, 2, 3} (sin duplicados)

# Agregar y eliminar
numeros.add(6)
numeros.discard(1)
print(numeros)

# Verificar pertenencia (muy rápido)
print(3 in numeros)  # True

# Operaciones de conjuntos
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A | B)    # Unión: {1, 2, 3, 4, 5, 6}
print(A & B)    # Intersección: {3, 4}
print(A - B)    # Diferencia: {1, 2}

# Eliminar duplicados de una lista
lista_con_duplicados = [1, 2, 2, 3, 3, 3, 4]
sin_duplicados = list(set(lista_con_duplicados))
print(sin_duplicados)`,
    keyPoints: [
      'Las tuplas son inmutables — no se pueden modificar tras su creación.',
      'Los sets son colecciones sin elementos repetidos.',
      'Los sets son ideales para eliminar duplicados de una lista.',
      'Los sets no tienen orden; no puedes acceder por índice.',
      'Para una tupla de un elemento: (valor,) — la coma es obligatoria.',
    ],
    exercise: {
      description: 'Crea una lista con números repetidos, conviértela a set para eliminar duplicados y muestra cuántos números únicos hay.',
      hint: 'lista = [1,2,2,3,3,4]. Usa set(lista) y len() para contar los únicos.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal diferencia entre una lista y una tupla?',
        options: [
          'Las tuplas pueden contener más elementos',
          'Las tuplas son inmutables (no se pueden modificar)',
          'Las listas no pueden contener strings',
          'Las tuplas se crean con corchetes []',
        ],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Las tuplas son inmutables — no puedes cambiar, agregar ni eliminar elementos.',
        feedbackIncorrect: 'La diferencia clave es que las tuplas son inmutables. No puedes modificarlas después de crearlas.',
      },
      {
        question: '¿Qué devuelve {1, 2, 2, 3, 3, 3}?',
        options: ['{1, 2, 2, 3, 3, 3}', '{1, 2, 3}', '[1, 2, 3]', 'Error'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Los sets eliminan automáticamente los duplicados.',
        feedbackIncorrect: 'Los sets no admiten duplicados. {1, 2, 2, 3, 3, 3} se convierte automáticamente en {1, 2, 3}.',
      },
      {
        question: '¿Qué operación representa A & B en sets?',
        options: ['Unión (todos los elementos de A y B)', 'Intersección (elementos comunes)', 'Diferencia (elementos solo en A)', 'Concatenación'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! & es la intersección: devuelve los elementos que están en AMBOS sets.',
        feedbackIncorrect: '& es la intersección de sets. Devuelve solo los elementos que están en ambos sets al mismo tiempo.',
      },
    ],
  },

  // ─── MÓDULO 5 ───────────────────────────────────────────────────
  {
    slug: 'crear-funciones',
    title: 'Crear funciones',
    module: 'Funciones',
    moduleNumber: 5,
    order: 13,
    description: 'Aprende a crear tus propias funciones para organizar y reutilizar tu código en Python.',
    explanation: `Una función es un bloque de código reutilizable que realiza una tarea específica. Defines la función una vez y la llamas cuantas veces necesites.

**¿Por qué usar funciones?**
- **Reutilización**: escribes el código una vez y lo usas muchas veces.
- **Organización**: el código es más fácil de leer y mantener.
- **Abstracción**: ocultas los detalles internos y expones solo lo necesario.

**Definir una función:**
\`\`\`python
def nombre_función(parámetros):
    # código de la función
    return resultado  # opcional
\`\`\`

**Palabras clave:**
- \`def\`: indica que estás definiendo una función.
- \`return\`: devuelve un valor al código que llamó la función (opcional).
- Si no hay \`return\`, la función devuelve \`None\` implícitamente.

**Funciones sin parámetros:**
\`\`\`python
def saludar():
    print("¡Hola!")
\`\`\`

**Funciones con parámetros:**
\`\`\`python
def saludar(nombre):
    print(f"¡Hola, {nombre}!")
\`\`\``,
    codeExample: `# Función simple sin parámetros
def mostrar_bienvenida():
    print("=" * 30)
    print("  Bienvenido a Python desde Cero")
    print("=" * 30)

mostrar_bienvenida()  # Llamar la función

# Función con parámetros
def saludar(nombre, idioma="español"):
    if idioma == "español":
        print(f"¡Hola, {nombre}!")
    else:
        print(f"Hello, {nombre}!")

saludar("María")           # ¡Hola, María!
saludar("John", "inglés")  # Hello, John!

# Función que devuelve un valor
def calcular_area(base, altura):
    area = base * altura
    return area

resultado = calcular_area(5, 3)
print(f"Área: {resultado}")

# Función que devuelve múltiples valores
def estadisticas(numeros):
    return min(numeros), max(numeros), sum(numeros) / len(numeros)

minimo, maximo, promedio = estadisticas([5, 2, 8, 1, 9])
print(f"Mín: {minimo}, Máx: {maximo}, Promedio: {promedio:.2f}")

# Funciones que llaman a otras funciones
def es_par(numero):
    return numero % 2 == 0

def filtrar_pares(lista):
    return [n for n in lista if es_par(n)]

pares = filtrar_pares([1, 2, 3, 4, 5, 6, 7, 8])
print(pares)  # [2, 4, 6, 8]`,
    keyPoints: [
      'def define una función; return devuelve un valor.',
      'Los parámetros con valor por defecto hacen los argumentos opcionales.',
      'Si no hay return, la función devuelve None.',
      'Puedes devolver múltiples valores separándolos con comas.',
      'Las funciones pueden llamar a otras funciones.',
    ],
    exercise: {
      description: 'Crea una función llamada calcular_imc(peso, altura) que calcule el Índice de Masa Corporal (peso / altura²) y devuelva la categoría (bajo peso, normal, sobrepeso u obesidad).',
      hint: 'IMC = peso / (altura ** 2). Normal: 18.5-24.9. Usa if/elif/else para la categoría.',
    },
    quiz: [
      {
        question: '¿Qué palabra clave se usa para definir una función en Python?',
        options: ['function', 'func', 'def', 'define'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! En Python las funciones se definen con la palabra clave def.',
        feedbackIncorrect: 'En Python se usa def (abreviatura de "define") para crear funciones.',
      },
      {
        question: '¿Qué devuelve una función sin la sentencia return?',
        options: ['0', 'False', 'None', 'Error'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Una función sin return devuelve None implícitamente.',
        feedbackIncorrect: 'Si una función no tiene return (o tiene return sin valor), devuelve None automáticamente.',
      },
      {
        question: '¿Cuál es el propósito principal de usar funciones?',
        options: [
          'Hacer el código más largo',
          'Reutilizar código y organizar el programa',
          'Evitar el uso de variables',
          'Hacer el programa más lento',
        ],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Las funciones permiten reutilizar código y organizar el programa en partes más manejables.',
        feedbackIncorrect: 'El propósito principal de las funciones es la reutilización y organización del código.',
      },
    ],
  },

  {
    slug: 'parametros-y-retorno',
    title: 'Parámetros y retorno',
    module: 'Funciones',
    moduleNumber: 5,
    order: 14,
    description: 'Profundiza en los diferentes tipos de parámetros y cómo devolver valores desde funciones en Python.',
    explanation: `Python ofrece formas muy flexibles de definir parámetros en funciones.

**Tipos de parámetros:**

**1. Posicionales** — el orden importa.
\`\`\`python
def restar(a, b):
    return a - b
restar(10, 3)  # 7
\`\`\`

**2. Keyword (con nombre)** — el orden no importa.
\`\`\`python
restar(b=3, a=10)  # 7
\`\`\`

**3. Con valor por defecto** — opcionales.
\`\`\`python
def saludar(nombre, saludo="Hola"):
    print(f"{saludo}, {nombre}!")
\`\`\`

**4. *args** — número variable de argumentos posicionales.
\`\`\`python
def sumar(*numeros):
    return sum(numeros)
sumar(1, 2, 3, 4)  # 10
\`\`\`

**5. **kwargs** — número variable de argumentos con nombre.
\`\`\`python
def mostrar(**datos):
    for k, v in datos.items():
        print(f"{k}: {v}")
\`\`\``,
    codeExample: `# Parámetros posicionales
def potencia(base, exponente):
    return base ** exponente

print(potencia(2, 10))   # 1024

# Parámetros keyword
print(potencia(exponente=3, base=5))  # 125

# Parámetros con valor por defecto
def crear_usuario(nombre, rol="estudiante", activo=True):
    return {"nombre": nombre, "rol": rol, "activo": activo}

u1 = crear_usuario("Ana")
u2 = crear_usuario("Admin", rol="administrador")
print(u1)
print(u2)

# *args — múltiples argumentos posicionales
def sumar_todo(*numeros):
    return sum(numeros)

print(sumar_todo(1, 2, 3))        # 6
print(sumar_todo(1, 2, 3, 4, 5))  # 15

# **kwargs — múltiples argumentos con nombre
def mostrar_perfil(**datos):
    for campo, valor in datos.items():
        print(f"  {campo}: {valor}")

mostrar_perfil(nombre="Luis", edad=25, ciudad="Lima")

# Combinar tipos
def registrar(nombre, *hobbies, rol="usuario", **extra):
    print(f"Nombre: {nombre}")
    print(f"Hobbies: {', '.join(hobbies)}")
    print(f"Rol: {rol}")
    for k, v in extra.items():
        print(f"{k}: {v}")

registrar("Ana", "lectura", "música", rol="admin", ciudad="Madrid")`,
    keyPoints: [
      'Los parámetros por defecto hacen los argumentos opcionales.',
      '*args captura múltiples argumentos posicionales como tupla.',
      '**kwargs captura múltiples argumentos con nombre como diccionario.',
      'Puedes llamar funciones usando nombres de parámetros (keyword args).',
      'El orden correcto: posicionales, *args, keyword, **kwargs.',
    ],
    exercise: {
      description: 'Crea una función que reciba un nombre y cualquier cantidad de calificaciones (*calificaciones). Debe devolver el promedio y si el alumno aprobó (promedio >= 60).',
      hint: 'Usa *calificaciones para recibir múltiples notas. Calcula sum(calificaciones)/len(calificaciones).',
    },
    quiz: [
      {
        question: '¿Qué hace *args en la definición de una función?',
        options: [
          'Define un argumento obligatorio llamado args',
          'Permite recibir cualquier número de argumentos posicionales',
          'Hace todos los argumentos opcionales',
          'Define argumentos con nombre',
        ],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! *args permite que la función reciba cualquier número de argumentos posicionales.',
        feedbackIncorrect: '*args permite recibir cualquier número de argumentos posicionales como una tupla.',
      },
      {
        question: '¿En qué tipo de objeto se convierten los **kwargs dentro de la función?',
        options: ['Lista', 'Tupla', 'Set', 'Diccionario'],
        correctIndex: 3,
        feedbackCorrect: '¡Correcto! **kwargs se convierte en un diccionario de pares clave-valor.',
        feedbackIncorrect: '**kwargs agrupa los argumentos con nombre en un diccionario dentro de la función.',
      },
      {
        question: '¿Cuál es el resultado de esta llamada?\ndef greet(name, msg="Hola"): print(msg, name)\ngreet("Ana", msg="¡Buenos días,")',
        options: ['Hola Ana', '¡Buenos días, Ana', 'Ana Hola', 'Error'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! Al pasar msg="¡Buenos días," se sobreescribe el valor por defecto.',
        feedbackIncorrect: 'Al pasar msg="¡Buenos días," se usa ese valor en lugar del valor por defecto "Hola". Resultado: ¡Buenos días, Ana.',
      },
    ],
  },

  {
    slug: 'buenas-practicas',
    title: 'Buenas prácticas básicas',
    module: 'Funciones',
    moduleNumber: 5,
    order: 15,
    description: 'Aprende las buenas prácticas fundamentales para escribir código Python limpio, legible y fácil de mantener.',
    explanation: `Escribir código que funcione es solo el primer paso. Un buen programador también escribe código que sea fácil de leer, mantener y extender.

**PEP 8 — Guía de estilo de Python:**
PEP 8 es el estándar oficial de estilo para código Python.

**Nombres descriptivos:**
\`\`\`python
# Malo
def f(x, y):
    return x * y

# Bueno
def calcular_area(base, altura):
    return base * altura
\`\`\`

**Funciones pequeñas y específicas:**
Una función debe hacer una sola cosa y hacerla bien.

**Comentarios solo cuando sea necesario:**
El código debe ser lo suficientemente claro para no necesitar muchos comentarios. Cuando sí los necesites, explica el POR QUÉ, no el QUÉ.

**Evitar la repetición (principio DRY):**
DRY = Don't Repeat Yourself (No te repitas). Si repites código, créa una función.

**Constantes en mayúsculas:**
\`\`\`python
MAX_INTENTOS = 3
TASA_IVA = 0.16
\`\`\`

**Manejo de errores con try/except:**
\`\`\`python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")
\`\`\``,
    codeExample: `# ── NOMBRES DESCRIPTIVOS ────────────────────────
# Malo
def c(l):
    return sum(l) / len(l)

# Bueno
def calcular_promedio(calificaciones):
    return sum(calificaciones) / len(calificaciones)

# ── CONSTANTES EN MAYÚSCULAS ────────────────────
MAX_INTENTOS = 3
NOTA_APROBACION = 60
PI = 3.14159

# ── FUNCIONES CON UNA SOLA RESPONSABILIDAD ──────
def obtener_calificacion(nota):
    if nota >= 90:
        return "Excelente"
    elif nota >= 75:
        return "Bueno"
    elif nota >= NOTA_APROBACION:
        return "Suficiente"
    return "Insuficiente"

def mostrar_resultado(nombre, nota):
    calificacion = obtener_calificacion(nota)
    print(f"{nombre}: {nota}/100 — {calificacion}")

mostrar_resultado("Ana", 85)

# ── MANEJO DE ERRORES ───────────────────────────
def dividir(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Error: No se puede dividir por cero")
        return None

print(dividir(10, 2))   # 5.0
print(dividir(10, 0))   # Error: mensaje + None

# ── EVITAR REPETICIÓN (DRY) ─────────────────────
# Malo: código repetido
# print("=" * 30)
# print("  Reporte")
# print("=" * 30)
# print("=" * 30)
# print("  Otro reporte")
# print("=" * 30)

# Bueno: función reutilizable
def imprimir_titulo(texto, ancho=30):
    print("=" * ancho)
    print(f"  {texto}".center(ancho))
    print("=" * ancho)

imprimir_titulo("Reporte")
imprimir_titulo("Otro reporte")
imprimir_titulo("Resumen", ancho=40)`,
    keyPoints: [
      'Usa nombres descriptivos para variables y funciones.',
      'Una función debe hacer una sola cosa (principio de responsabilidad única).',
      'DRY: no repitas código — créa funciones.',
      'Las constantes se escriben en MAYÚSCULAS.',
      'Usa try/except para manejar errores esperados.',
      'PEP 8 es la guía de estilo oficial de Python.',
    ],
    exercise: {
      description: 'Refactoriza este código usando buenas prácticas: crea una función calcular_precio_final(precio, descuento_porcentaje) y otra mostrar_precio(nombre, precio_original, descuento).',
      hint: 'Separa la lógica de cálculo de la presentación. Usa constantes para valores fijos como IVA.',
    },
    quiz: [
      {
        question: '¿Qué significa el principio DRY en programación?',
        options: [
          'Debug, Run, Yield',
          "Don't Repeat Yourself (No te repitas)",
          'Define, Return, Yield',
          'Dynamic, Readable, Yielding',
        ],
        correctIndex: 1,
        feedbackCorrect: "¡Correcto! DRY significa Don't Repeat Yourself: evita duplicar código creando funciones reutilizables.",
        feedbackIncorrect: "DRY = Don't Repeat Yourself. El principio dice que debes evitar repetir código creando funciones reutilizables.",
      },
      {
        question: '¿Cómo se deben escribir las constantes en Python por convención?',
        options: ['camelCase', 'snake_case', 'MAYÚSCULAS_CON_GUIONES', 'PascalCase'],
        correctIndex: 2,
        feedbackCorrect: '¡Correcto! Las constantes se escriben en MAYÚSCULAS_CON_GUIONES_BAJOS por convención.',
        feedbackIncorrect: 'Las constantes se escriben en MAYÚSCULAS_CON_GUIONES_BAJOS, por ejemplo: MAX_INTENTOS = 3.',
      },
      {
        question: '¿Qué bloque de código se usa para manejar errores en Python?',
        options: ['if/else', 'try/except', 'while/break', 'for/continue'],
        correctIndex: 1,
        feedbackCorrect: '¡Correcto! try/except captura y maneja excepciones (errores) en Python.',
        feedbackIncorrect: 'try/except es el mecanismo para manejar errores en Python.',
      },
    ],
  },
]

export const modules: Module[] = [
  {
    number: 1,
    title: 'Introducción a Python',
    lessons: lessons.filter((l) => l.moduleNumber === 1),
  },
  {
    number: 2,
    title: 'Fundamentos',
    lessons: lessons.filter((l) => l.moduleNumber === 2),
  },
  {
    number: 3,
    title: 'Control de flujo',
    lessons: lessons.filter((l) => l.moduleNumber === 3),
  },
  {
    number: 4,
    title: 'Estructuras de datos',
    lessons: lessons.filter((l) => l.moduleNumber === 4),
  },
  {
    number: 5,
    title: 'Funciones',
    lessons: lessons.filter((l) => l.moduleNumber === 5),
  },
]

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug)
}

export function getPrevNextLessons(slug: string): {
  prev: Lesson | null
  next: Lesson | null
} {
  const index = lessons.findIndex((l) => l.slug === slug)
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  }
}

export const totalLessons = lessons.length
