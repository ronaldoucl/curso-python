import type { Lesson } from '@/types'
import type { Module } from '@/types'

export const lessonsModule2: Lesson[] = [
  {
    slug: 'variables',
    title: 'Variables',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 6,
    description: 'Aprende qué son las variables y cómo usarlas para guardar y reutilizar información en tus programas.',
    explanation: `Una **variable** es como una caja con nombre: puedes guardar un valor dentro de ella y luego usar ese nombre para acceder al valor cuando lo necesites.

**Analogía del teléfono:** Cuando guardas un contacto en tu celular, no memorizas el número —guardas el nombre "Mamá" y el número queda guardado detrás. En programación, la variable es el nombre ("Mamá") y el valor es el número. Cada vez que quieras llamar, usas el nombre, no el número.

**Cómo crear una variable en Python:**
\`\`\`python
nombre = "Ana"
edad = 25
\`\`\`

El símbolo \`=\` es el **operador de asignación**. Le dice a Python: "guarda este valor en esta variable".

**Las variables pueden cambiar (reasignación):**
\`\`\`python
puntaje = 0
puntaje = 10    # ahora puntaje vale 10
puntaje = 50    # ahora puntaje vale 50
\`\`\`

Python es **dinámico**: una variable puede guardar cualquier tipo de valor y puede cambiar de tipo en cualquier momento.

**Usar variables en print() y f-strings:**
\`\`\`python
nombre = "Carlos"
print(nombre)              # Carlos
print("Hola", nombre)      # Hola Carlos
print(f"Hola, {nombre}!")  # Hola, Carlos!
\`\`\`

Los f-strings (cadenas que empiezan con \`f"\`) permiten insertar variables directamente dentro del texto usando llaves \`{}\`.

**Errores comunes:**
- **NameError:** usar una variable antes de asignarle un valor.
  \`\`\`python
  print(ciudad)  # NameError: name 'ciudad' is not defined
  ciudad = "Lima"
  \`\`\`
- **Confundir = con ==:** \`=\` asigna un valor; \`==\` compara dos valores. Son completamente distintos.`,
    codeExample: `# Crear variables de distintos tipos
nombre = "María"
edad = 22
altura = 1.65
es_estudiante = True

# Mostrar con print()
print(nombre)          # María
print(edad)            # 22
print(altura)          # 1.65
print(es_estudiante)   # True

# Usar varias variables en un print
print("Nombre:", nombre, "| Edad:", edad)

# f-strings: la forma más cómoda de combinar texto y variables
print(f"Hola, me llamo {nombre} y tengo {edad} años.")
print(f"Mido {altura} metros y soy estudiante: {es_estudiante}")

# Reasignación: la variable cambia de valor
puntaje = 0
print(f"Puntaje inicial: {puntaje}")

puntaje = 100
print(f"Puntaje actualizado: {puntaje}")

# Python es dinámico: puedes cambiar el tipo
dato = 42
print(f"dato es: {dato}")   # 42

dato = "ahora soy texto"
print(f"dato es: {dato}")   # ahora soy texto

# Calcular con variables
precio = 80
descuento = 20
precio_final = precio - descuento
print(f"Precio final: {precio_final}")   # 60`,
    keyPoints: [
      'Una variable es un nombre que guarda un valor, como una caja etiquetada.',
      'Se crea con el operador de asignación: nombre = valor.',
      'Las variables pueden cambiar de valor (reasignación) en cualquier momento.',
      'Python es dinámico: una variable puede guardar cualquier tipo de dato.',
      'Los f-strings (f"texto {variable}") son la forma más clara de mostrar variables.',
      'Usar una variable antes de asignarla produce NameError.',
    ],
    exercise: {
      description: 'Crea tres variables: una para tu nombre, otra para tu edad y otra para tu ciudad favorita. Luego muéstralas con tres print() usando f-strings. Por ejemplo: "Me llamo Ana, tengo 25 años y mi ciudad favorita es Barcelona."',
      hint: 'Crea nombre = "...", edad = ..., ciudad = "..." y luego usa print(f"Me llamo {nombre}, tengo {edad} años y mi ciudad favorita es {ciudad}.")',
    },
    quiz: [
      {
        question: '¿Para qué sirve una variable en Python?',
        options: [
          'Para guardar un valor y acceder a él por su nombre',
          'Para mostrar texto en la pantalla',
          'Para escribir comentarios en el código',
          'Para ejecutar operaciones matemáticas',
        ],
        correctAnswer: 'Para guardar un valor y acceder a él por su nombre',
        correctFeedback: '¡Correcto! Una variable es como una caja con etiqueta: guarda un valor y te permite usarlo después mediante su nombre.',
        incorrectFeedback: 'Una variable sirve para guardar un valor y acceder a él por su nombre. Es como una caja etiquetada donde puedes almacenar información para usarla más tarde.',
      },
      {
        question: '¿Qué símbolo se usa en Python para asignar un valor a una variable?',
        options: ['==', ':=', '=', '<-'],
        correctAnswer: '=',
        correctFeedback: '¡Exacto! El símbolo = es el operador de asignación. Por ejemplo: nombre = "Ana" guarda el texto "Ana" en la variable nombre.',
        incorrectFeedback: 'El operador de asignación es =. Por ejemplo: edad = 25. No confundas con == que se usa para comparar dos valores.',
      },
      {
        question: '¿Qué error produce este código?\nprint(ciudad)\nciudad = "Lima"',
        options: ['SyntaxError', 'TypeError', 'NameError', 'ValueError'],
        correctAnswer: 'NameError',
        correctFeedback: '¡Correcto! Python produce NameError porque intentas usar "ciudad" antes de haberla definido. Las variables deben asignarse antes de usarse.',
        incorrectFeedback: 'El error es NameError. Estás usando la variable "ciudad" en la línea 1, pero recién la defines en la línea 2. Python no puede encontrar una variable que todavía no existe.',
      },
      {
        question: '¿Qué imprime este código?\nx = 5\nx = 20\nprint(x)',
        options: ['5', '20', '5 y 20', 'Error'],
        correctAnswer: '20',
        correctFeedback: '¡Correcto! La variable x primero vale 5, luego se reasigna a 20. Cuando se imprime, muestra el último valor asignado: 20.',
        incorrectFeedback: 'Se imprime 20. La segunda línea reasigna x a 20, sobreescribiendo el valor anterior de 5. Python siempre usa el último valor asignado.',
      },
      {
        question: '¿Cuál es la forma correcta de usar un f-string para mostrar una variable?',
        options: [
          'print("Hola {nombre}")',
          'print(f"Hola {nombre}")',
          'print(f"Hola nombre")',
          'print("Hola" + {nombre})',
        ],
        correctAnswer: 'print(f"Hola {nombre}")',
        correctFeedback: '¡Correcto! Los f-strings se escriben con una f antes de las comillas. Las variables van dentro de llaves {}. El resultado reemplaza {nombre} por el valor de la variable.',
        incorrectFeedback: 'La forma correcta es print(f"Hola {nombre}"). La f antes de las comillas activa el f-string. Las llaves {} indican dónde insertar el valor de la variable.',
      },
    ],
  },
  {
    slug: 'nombres-variables',
    title: 'Nombres de variables y buenas prácticas',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 7,
    description: 'Aprende cómo nombrar variables correctamente y evita errores comunes al escribir código.',
    explanation: `Elegir buenos nombres para las variables es una de las habilidades más importantes en programación. Un nombre claro hace que el código sea fácil de leer y mantener.

**Reglas obligatorias (si las rompes, Python lanza error):**
1. Solo letras, números y guion bajo \`_\`.
2. No puede empezar con un número.
3. No puede contener espacios.
4. No puede ser una palabra reservada de Python (como \`if\`, \`for\`, \`while\`).

\`\`\`python
# Válidos
nombre = "Ana"
edad_usuario = 25
_auxiliar = 0
dato2 = "hola"

# Inválidos (causan SyntaxError o son sobreescritos)
# 2dato = 5        # empieza con número
# mi variable = 3  # tiene espacio
# if = 10          # palabra reservada
\`\`\`

**Convenciones recomendadas (no causan error, pero son malas prácticas):**

- Usa **snake_case**: palabras separadas por guion bajo → \`precio_con_descuento\`
- Usa nombres **descriptivos**: que digan claramente qué guardan.
- Evita abreviaciones crípticas: \`sc\` es peor que \`saldo_cuenta\`.
- Evita nombres de una sola letra (excepto en índices de bucles como \`i\`).

**Palabras reservadas de Python** (no puedes usarlas como nombres):
\`False, None, True, and, as, assert, async, await, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield\`

**Sobre tildes y caracteres especiales:**
Técnicamente Python 3 permite tildes en nombres (\`año = 2024\`), pero es una mala práctica porque puede causar problemas en algunos editores, terminales o al compartir código con otros.

**Errores comunes:**
- Nombres sin sentido: \`x\`, \`temp\`, \`dato\` (¿qué guardan exactamente?).
- Nombres demasiado largos: \`el_precio_total_del_producto_con_iva_incluido\` (mejor: \`precio_con_iva\`).
- Usar mayúsculas mezcladas sin criterio: \`NombreUsuario\` (eso es CamelCase, se reserva para clases).`,
    codeExample: `# ── Reglas obligatorias ─────────────────────────────────────
# Válidos
nombre_usuario = "Ana"
edad = 25
_temporal = 0
producto2 = "libro"

# Inválidos (descomentar causa SyntaxError):
# 2nombre = "error"    # empieza con número
# mi nombre = "error"  # espacio no permitido
# for = 5              # palabra reservada

# ── snake_case: convención estándar en Python ────────────────
precio_con_descuento = 89.99
nombre_completo = "Carlos López"
es_mayor_de_edad = True
numero_de_intentos = 3

# ── Nombres descriptivos vs crípticos ───────────────────────
# Malo: ¿qué significa esto?
x = 100
t = 0.15
r = x * t

# Bueno: se entiende a simple vista
precio_base = 100
tasa_iva = 0.15
monto_iva = precio_base * tasa_iva

print(f"IVA a pagar: {monto_iva}")   # IVA a pagar: 15.0

# ── Palabras reservadas: no usar como variables ───────────────
# Estas palabras son especiales en Python:
# if, else, for, while, def, class, return, import, True, False, None...

# ── Tildes: evitar aunque técnicamente funcionen ─────────────
# Funciona pero no recomendado:
# año = 2024
# número = 42

# Preferible:
anio = 2024
numero = 42
print(f"Año: {anio}, Número: {numero}")`,
    keyPoints: [
      'Los nombres solo pueden tener letras, números y _ (sin espacios ni caracteres especiales).',
      'No pueden empezar con número ni ser palabras reservadas de Python.',
      'La convención en Python es snake_case: palabras_separadas_por_guion_bajo.',
      'Los nombres deben ser descriptivos: precio_con_iva es mejor que p o x.',
      'Evita tildes en nombres de variables aunque técnicamente funcionen en Python 3.',
    ],
    exercise: {
      description: 'Renombra estas 5 variables con nombres descriptivos y en snake_case: `a = "Juan Pérez"`, `b = 30`, `c = 1500.50`, `d = True`, `e = "juan@email.com"`. Pista: son datos de una persona registrada en un sistema.',
      hint: 'Piensa qué representa cada valor. Por ejemplo, "Juan Pérez" podría ser nombre_completo, 30 podría ser edad_usuario, 1500.50 podría ser saldo_cuenta, etc.',
    },
    quiz: [
      {
        question: '¿Cuál de estos nombres de variable es válido en Python?',
        options: ['2nombre', 'mi nombre', 'nombre_usuario', 'for'],
        correctAnswer: 'nombre_usuario',
        correctFeedback: '¡Correcto! nombre_usuario sigue todas las reglas: usa letras y guion bajo, no empieza con número, no tiene espacios y no es una palabra reservada.',
        incorrectFeedback: 'El único válido es nombre_usuario. 2nombre empieza con número, mi nombre tiene un espacio, y for es una palabra reservada de Python.',
      },
      {
        question: '¿Qué convención de nombres usa Python para variables?',
        options: ['camelCase (miVariable)', 'PascalCase (MiVariable)', 'snake_case (mi_variable)', 'UPPER_CASE (MI_VARIABLE)'],
        correctAnswer: 'snake_case (mi_variable)',
        correctFeedback: '¡Correcto! Python usa snake_case para variables: palabras en minúsculas separadas por guion bajo. PascalCase se reserva para clases y UPPER_CASE para constantes.',
        incorrectFeedback: 'La convención de Python para variables es snake_case: palabras en minúsculas separadas por guion bajo. Por ejemplo: precio_con_descuento, nombre_usuario.',
      },
      {
        question: '¿Cuál de estas opciones es un nombre de variable más descriptivo?',
        options: ['x', 'temp', 'n', 'precio_con_iva'],
        correctAnswer: 'precio_con_iva',
        correctFeedback: '¡Exacto! precio_con_iva describe claramente qué guarda la variable. Los otros nombres (x, temp, n) no dicen nada sobre el dato que almacenan.',
        incorrectFeedback: 'precio_con_iva es el más descriptivo. Al leer el nombre sabes exactamente qué guarda. x, temp y n son ambiguos: cualquiera que lea el código (incluyendo tú en el futuro) tendrá que adivinar qué contienen.',
      },
      {
        question: '¿Qué pasa si intentas usar "if" como nombre de variable?',
        options: ['Python lo permite pero muestra un warning', 'Funciona igual que cualquier otra variable', 'Python lanza un SyntaxError', 'Python lo convierte automáticamente a _if'],
        correctAnswer: 'Python lanza un SyntaxError',
        correctFeedback: '¡Correcto! "if" es una palabra reservada de Python. Intentar usarla como nombre de variable produce SyntaxError porque Python ya la usa con otro propósito.',
        incorrectFeedback: 'Python lanza SyntaxError. Las palabras reservadas como if, for, while, def tienen significados especiales en el lenguaje y no pueden usarse como nombres de variables.',
      },
      {
        question: '¿Por qué se recomienda evitar tildes en nombres de variables?',
        options: [
          'Porque Python 3 no las soporta en absoluto',
          'Porque pueden causar problemas en editores, terminales o al compartir código',
          'Porque hacen el código más lento',
          'Porque Python las convierte a mayúsculas automáticamente',
        ],
        correctAnswer: 'Porque pueden causar problemas en editores, terminales o al compartir código',
        correctFeedback: '¡Correcto! Aunque Python 3 técnicamente las permite, las tildes pueden causar problemas de codificación en algunos entornos, terminales o cuando el código se comparte con personas que usan otras configuraciones.',
        incorrectFeedback: 'Se recomienda evitar tildes porque aunque Python 3 las permite, pueden causar problemas de codificación en ciertos editores, terminales o sistemas operativos, y al compartir código con otras personas.',
      },
    ],
  },
  {
    slug: 'tipos-de-datos',
    title: 'Tipos de datos',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 8,
    description: 'Conoce los tipos de datos básicos en Python: texto, números, booleanos y valores especiales.',
    explanation: `En la vida real, "hola" y 42 son cosas completamente distintas. En Python también: cada valor tiene un **tipo de dato** que define qué operaciones puedes hacer con él.

**Tipos de datos básicos:**

**str (string / cadena de texto)**
Texto entre comillas simples o dobles.
\`\`\`python
nombre = "Ana"
mensaje = 'Hola, mundo'
\`\`\`

**int (entero)**
Números sin decimales (positivos, negativos o cero).
\`\`\`python
edad = 25
temperatura = -3
puntos = 0
\`\`\`

**float (flotante / decimal)**
Números con punto decimal.
\`\`\`python
precio = 19.99
pi = 3.14159
\`\`\`

**bool (booleano)**
Solo dos valores posibles: \`True\` o \`False\` (con mayúscula inicial, siempre).
\`\`\`python
es_activo = True
tiene_descuento = False
\`\`\`

**None**
Representa la ausencia de valor. Es como decir "esta caja está vacía".
\`\`\`python
resultado = None   # todavía no tiene valor
\`\`\`

**La función type():**
Para saber el tipo de cualquier valor usa \`type()\`:
\`\`\`python
print(type(42))        # <class 'int'>
print(type("hola"))    # <class 'str'>
print(type(3.14))      # <class 'float'>
print(type(True))      # <class 'bool'>
print(type(None))      # <class 'NoneType'>
\`\`\`

**Errores comunes:**
- **"True" vs True:** \`"True"\` es un string (texto), \`True\` es un booleano. Son muy distintos.
- **"42" vs 42:** \`"42"\` es un string, \`42\` es un entero. No puedes hacer matemáticas con el string.
  \`\`\`python
  print("5" + "3")   # "53"  (concatena texto)
  print(5 + 3)       # 8     (suma números)
  \`\`\``,
    codeExample: `# ── str: texto ──────────────────────────────────────
nombre = "Lucía"
ciudad = 'Madrid'
mensaje = "Hola, ¿cómo estás?"

print(type(nombre))    # <class 'str'>
print(nombre)          # Lucía

# ── int: número entero ───────────────────────────────
edad = 28
año = 2024
temperatura = -5

print(type(edad))      # <class 'int'>
print(edad + 2)        # 30

# ── float: número decimal ────────────────────────────
precio = 9.99
pi = 3.14159
porcentaje = 0.75

print(type(precio))    # <class 'float'>
print(precio * 2)      # 19.98

# ── bool: verdadero o falso ──────────────────────────
es_premium = True
esta_cerrado = False

print(type(es_premium))   # <class 'bool'>
print(es_premium)          # True

# ── None: sin valor ──────────────────────────────────
respuesta = None
print(type(respuesta))    # <class 'NoneType'>
print(respuesta)           # None

# ── "42" (str) vs 42 (int): muy distintos ────────────
numero_texto = "42"
numero_real = 42

print(type(numero_texto))   # <class 'str'>
print(type(numero_real))    # <class 'int'>

print("5" + "3")   # "53"  → concatena como texto
print(5 + 3)       # 8     → suma matemática

# ── "True" (str) vs True (bool): cuidado ────────────
print(type("True"))   # <class 'str'>   → es texto
print(type(True))     # <class 'bool'>  → es booleano`,
    keyPoints: [
      'str es texto entre comillas: "hola" o \'hola\'.',
      'int son números enteros sin decimales: 42, -5, 0.',
      'float son números con punto decimal: 3.14, -0.5.',
      'bool solo tiene dos valores: True o False (con mayúscula).',
      'None representa la ausencia de valor.',
      'La función type() te dice el tipo de cualquier valor.',
    ],
    exercise: {
      description: 'Crea una variable de cada tipo de dato (str, int, float, bool y None) y usa print() para mostrar el valor y su tipo con type(). Por ejemplo: print("Valor:", nombre, "| Tipo:", type(nombre))',
      hint: 'Crea: nombre = "...", edad = ..., precio = ..., activo = True/False, resultado = None. Luego muestra cada una con su type().',
    },
    quiz: [
      {
        question: '¿Qué tipo de dato es el valor True en Python?',
        options: ['str', 'int', 'bool', 'NoneType'],
        correctAnswer: 'bool',
        correctFeedback: '¡Correcto! True (con mayúscula) es de tipo bool (booleano). Los booleanos solo tienen dos valores posibles: True y False.',
        incorrectFeedback: 'True es de tipo bool (booleano). Recuerda que "True" con comillas sería un str (texto), pero True sin comillas es un valor booleano.',
      },
      {
        question: '¿Qué imprime este código?\nprint("5" + "3")',
        options: ['8', '53', '"53"', 'TypeError'],
        correctAnswer: '53',
        correctFeedback: '¡Correcto! Cuando usas + con dos strings, Python los concatena (une). "5" + "3" produce "53", no suma los números.',
        incorrectFeedback: 'Se imprime 53. El operador + entre dos strings los concatena (une el texto). "5" y "3" son texto, no números, así que el resultado es el string "53", no la suma matemática 8.',
      },
      {
        question: '¿Qué función de Python te dice el tipo de un valor?',
        options: ['typeof()', 'gettype()', 'type()', 'datatype()'],
        correctAnswer: 'type()',
        correctFeedback: '¡Correcto! type() es la función integrada de Python para conocer el tipo de cualquier valor. Por ejemplo: type(42) devuelve <class "int">.',
        incorrectFeedback: 'La función correcta es type(). Por ejemplo, type("hola") devuelve <class "str"> y type(3.14) devuelve <class "float">.',
      },
      {
        question: '¿Cuál de estas variables es de tipo float?',
        options: ['edad = 25', 'precio = 9.99', 'nombre = "Ana"', 'activo = True'],
        correctAnswer: 'precio = 9.99',
        correctFeedback: '¡Correcto! 9.99 tiene punto decimal, por eso es float. 25 es int, "Ana" es str y True es bool.',
        incorrectFeedback: 'precio = 9.99 es float porque tiene punto decimal. 25 es int (entero), "Ana" es str (texto) y True es bool (booleano).',
      },
      {
        question: '¿Qué representa el valor None en Python?',
        options: ['El número cero', 'El texto vacío ""', 'La ausencia de valor', 'El valor False'],
        correctAnswer: 'La ausencia de valor',
        correctFeedback: '¡Correcto! None representa que una variable no tiene ningún valor asignado, como una caja vacía. Es diferente de 0, "" o False.',
        incorrectFeedback: 'None representa la ausencia de valor: "esta variable todavía no tiene contenido". Es distinto de 0 (un número), "" (un texto vacío) o False (un booleano).',
      },
      {
        question: '¿Cuál es la diferencia entre el int 42 y el str "42"?',
        options: [
          'No hay ninguna diferencia',
          '42 puede usarse en matemáticas; "42" es texto y no puede sumarse directamente',
          '"42" es más grande que 42',
          '42 se muestra entre comillas y "42" no',
        ],
        correctAnswer: '42 puede usarse en matemáticas; "42" es texto y no puede sumarse directamente',
        correctFeedback: '¡Exacto! 42 es un número entero con el que puedes hacer operaciones matemáticas. "42" es un string (texto) y aunque visualmente parece un número, Python lo trata como texto.',
        incorrectFeedback: 'La diferencia clave es que 42 (int) puede usarse en operaciones matemáticas, mientras que "42" (str) es texto. Si intentas sumar "42" + 8 obtendrás un TypeError.',
      },
    ],
  },
  {
    slug: 'convertir-tipos-datos',
    title: 'Convertir tipos de datos',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 9,
    description: 'Aprende a convertir datos usando str(), int(), float() y bool() para trabajar correctamente con la información.',
    explanation: `Muchas veces necesitas convertir un valor de un tipo a otro. En Python esto se llama **conversión de tipo** (o casting).

**¿Por qué es necesario convertir?**
La razón más común es \`input()\`: esta función **siempre devuelve un string**, sin importar lo que el usuario escriba. Si el usuario escribe "42", Python lo recibe como el texto "42", no como el número 42.

\`\`\`python
edad = input("¿Cuántos años tienes? ")
print(type(edad))   # <class 'str'>  ← siempre string!
\`\`\`

**Funciones de conversión:**

**int()** — convierte a número entero
\`\`\`python
int("42")     # 42
int(3.9)      # 3  (trunca, no redondea)
int(True)     # 1
int(False)    # 0
\`\`\`

**float()** — convierte a número decimal
\`\`\`python
float("3.14")  # 3.14
float("10")    # 10.0
float(5)       # 5.0
\`\`\`

**str()** — convierte a texto
\`\`\`python
str(42)        # "42"
str(3.14)      # "3.14"
str(True)      # "True"
\`\`\`

**bool()** — convierte a booleano
Valores que se convierten en \`False\`: \`0\`, \`0.0\`, \`""\` (string vacío), \`None\`, \`[]\`, \`{}\`.
Todo lo demás se convierte en \`True\`.

**¿Qué pasa cuando la conversión falla?**
Si intentas convertir algo que no tiene sentido, Python lanza un **ValueError**:
\`\`\`python
int("hola")    # ValueError: invalid literal for int() with base 10: 'hola'
float("abc")   # ValueError
\`\`\`

**Errores comunes:**
- No convertir el resultado de \`input()\` antes de hacer matemáticas.
  \`\`\`python
  numero = input("Número: ")
  resultado = numero + 10   # TypeError! "5" + 10 no funciona
  resultado = int(numero) + 10   # Correcto: 15
  \`\`\``,
    codeExample: `# ── input() siempre devuelve str ─────────────────────
# edad_texto = input("¿Cuántos años tienes? ")
# Si el usuario escribe 20, edad_texto = "20" (string)

# Simulamos la entrada para el ejemplo:
edad_texto = "20"
print(type(edad_texto))    # <class 'str'>

# Convertir para poder operar
edad = int(edad_texto)
print(type(edad))          # <class 'int'>
print(edad + 5)            # 25

# ── int() ────────────────────────────────────────────
print(int("42"))      # 42
print(int(3.9))       # 3   ← trunca (no redondea)
print(int(True))      # 1
print(int(False))     # 0

# ── float() ──────────────────────────────────────────
print(float("3.14"))  # 3.14
print(float("10"))    # 10.0
print(float(5))       # 5.0

# ── str() ────────────────────────────────────────────
print(str(42))        # "42"
print(str(3.14))      # "3.14"
print(str(True))      # "True"

# ── bool() ───────────────────────────────────────────
print(bool(0))        # False
print(bool(1))        # True
print(bool(""))       # False  ← string vacío
print(bool("hola"))   # True
print(bool(None))     # False

# ── Error clásico con input() ────────────────────────
# Sin conversión → TypeError:
# numero = input("Número: ")
# print(numero + 10)  ← ERROR: str + int

# Con conversión → correcto:
numero_texto = "8"
numero = int(numero_texto)
print(numero + 10)    # 18

# ── ValueError si el string no es convertible ─────────
# int("hola")   # ValueError
# float("abc")  # ValueError`,
    keyPoints: [
      'input() siempre devuelve un string; debes convertirlo si necesitas operar con él.',
      'int() convierte a entero (trunca los decimales, no redondea).',
      'float() convierte a número decimal.',
      'str() convierte cualquier valor a texto.',
      'bool() devuelve False para 0, "", None y colecciones vacías; True para el resto.',
    ],
    exercise: {
      description: 'Escribe un programa que pida dos números al usuario con input() y muestre su suma. Recuerda convertir las entradas a int() antes de sumar. Muestra el resultado con un f-string: "La suma de X y Y es Z."',
      hint: 'Usa num1 = int(input("Primer número: ")) y num2 = int(input("Segundo número: ")). Luego suma = num1 + num2 y muestra el resultado.',
    },
    quiz: [
      {
        question: '¿Qué tipo de dato devuelve siempre la función input()?',
        options: ['int', 'float', 'str', 'El tipo que detecte automáticamente'],
        correctAnswer: 'str',
        correctFeedback: '¡Correcto! input() siempre devuelve un string, sin excepción. Aunque el usuario escriba "42", Python lo recibe como el texto "42", no como el número 42.',
        incorrectFeedback: 'input() siempre devuelve str (string). Aunque el usuario escriba números, el resultado es texto. Por eso es necesario convertir con int() o float() antes de hacer operaciones matemáticas.',
      },
      {
        question: '¿Qué imprime int(3.9)?',
        options: ['4', '3', '3.9', 'Error'],
        correctAnswer: '3',
        correctFeedback: '¡Correcto! int() trunca el número decimal, es decir, elimina la parte decimal sin redondear. 3.9 se convierte en 3, no en 4.',
        incorrectFeedback: 'int() trunca (no redondea): elimina la parte decimal directamente. int(3.9) da 3, no 4. Si quisieras redondear, usarías round(3.9).',
      },
      {
        question: '¿Qué error produce este código?\nnumero = input("Número: ")\nresultado = numero + 10',
        options: ['ValueError', 'NameError', 'TypeError', 'SyntaxError'],
        correctAnswer: 'TypeError',
        correctFeedback: '¡Correcto! input() devuelve un string. Intentar sumar un string y un entero con + produce TypeError. La solución es convertir: int(numero) + 10.',
        incorrectFeedback: 'El error es TypeError. input() devuelve un string y no puedes sumar un string con un entero directamente. Necesitas convertir primero: int(numero) + 10.',
      },
      {
        question: '¿Cuál de estos valores se convierte en False al usar bool()?',
        options: ['bool("False")', 'bool(1)', 'bool(0)', 'bool("hola")'],
        correctAnswer: 'bool(0)',
        correctFeedback: '¡Correcto! bool(0) es False. El número 0 es considerado "falsy" en Python. Nota importante: bool("False") es True porque "False" es un string no vacío.',
        incorrectFeedback: 'bool(0) devuelve False. El 0 es "falsy". Cuidado: bool("False") devuelve True porque "False" es un string no vacío. Solo el string vacío "" es falsy.',
      },
      {
        question: '¿Qué error produce int("hola")?',
        options: ['TypeError', 'ValueError', 'NameError', 'SyntaxError'],
        correctAnswer: 'ValueError',
        correctFeedback: '¡Correcto! int() puede recibir un string como argumento (tipo correcto), pero "hola" no representa un número válido (valor incorrecto), por eso lanza ValueError.',
        incorrectFeedback: 'Produce ValueError. El tipo del argumento es correcto (es un string), pero el valor "hola" no puede convertirse a un número entero. Compara con TypeError donde el tipo en sí sería incorrecto.',
      },
    ],
  },
  {
    slug: 'operadores-aritmeticos',
    title: 'Operadores aritméticos',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 10,
    description: 'Aprende a usar suma, resta, multiplicación, división, módulo, división entera y potencia en Python.',
    explanation: `Python puede usarse como una calculadora muy potente. Los **operadores aritméticos** te permiten realizar cálculos matemáticos con números.

**Los 7 operadores aritméticos de Python:**

| Operador | Nombre | Ejemplo | Resultado |
|----------|--------|---------|-----------|
| \`+\` | Suma | \`5 + 3\` | \`8\` |
| \`-\` | Resta | \`10 - 4\` | \`6\` |
| \`*\` | Multiplicación | \`3 * 7\` | \`21\` |
| \`/\` | División | \`10 / 4\` | \`2.5\` |
| \`//\` | División entera | \`10 // 4\` | \`2\` |
| \`%\` | Módulo (resto) | \`10 % 3\` | \`1\` |
| \`**\` | Potencia | \`2 ** 8\` | \`256\` |

**Detalles importantes:**
- \`/\` **siempre devuelve float**, aunque el resultado sea exacto: \`10 / 2\` → \`5.0\`
- \`//\` hace la división entera (descarta los decimales): \`10 // 3\` → \`3\`
- \`%\` devuelve el **resto** de la división: \`10 % 3\` → \`1\` (porque 10 = 3×3 + 1)
- \`**\` es la potencia: \`2 ** 3\` → \`8\` (2 elevado a 3)

**Casos de uso reales:**
- \`%\` para saber si un número es par: si \`numero % 2 == 0\`, es par.
- \`**\` para calcular áreas y potencias.
- \`//\` para dividir sin decimales (ej. cuántas cajas enteras necesitas).

**Orden de operaciones (PEMDAS):**
Python sigue el orden matemático estándar:
1. Paréntesis \`()\`
2. Potencia \`**\`
3. Multiplicación \`*\`, División \`/\`, División entera \`//\`, Módulo \`%\`
4. Suma \`+\`, Resta \`-\`

**Operadores de asignación compuesta:**
Una forma abreviada de actualizar variables:
\`\`\`python
x = 10
x += 5   # equivale a x = x + 5  → x es 15
x -= 3   # equivale a x = x - 3  → x es 12
x *= 2   # equivale a x = x * 2  → x es 24
x /= 4   # equivale a x = x / 4  → x es 6.0
\`\`\`

**Errores comunes:**
- Confundir \`/\` (siempre float) con \`//\` (entero).
- Olvidar paréntesis en expresiones complejas: \`2 + 3 * 4\` es 14, no 20.`,
    codeExample: `# ── Los 7 operadores aritméticos ────────────────────
print(5 + 3)    # 8   (suma)
print(10 - 4)   # 6   (resta)
print(3 * 7)    # 21  (multiplicación)
print(10 / 4)   # 2.5 (división — siempre float)
print(10 // 4)  # 2   (división entera)
print(10 % 3)   # 1   (módulo/resto)
print(2 ** 8)   # 256 (potencia)

# ── / siempre devuelve float ─────────────────────────
print(10 / 2)   # 5.0  (no 5)
print(type(10 / 2))   # <class 'float'>

# ── Uso práctico del módulo % ────────────────────────
numero = 17
if numero % 2 == 0:
    print(f"{numero} es par")
else:
    print(f"{numero} es impar")   # 17 es impar

# ── Calcular precio con descuento ────────────────────
precio_original = 200
descuento_porcentaje = 25
descuento = precio_original * descuento_porcentaje / 100
precio_final = precio_original - descuento
print(f"Precio final: {precio_final}")   # 150.0

# ── Orden de operaciones (PEMDAS) ────────────────────
print(2 + 3 * 4)      # 14 (multiplicación primero)
print((2 + 3) * 4)    # 20 (paréntesis primero)

# ── Operadores de asignación compuesta ───────────────
puntaje = 0
puntaje += 10   # ganó 10 puntos
puntaje += 5    # ganó 5 más
puntaje -= 3    # perdió 3
print(f"Puntaje: {puntaje}")   # 12

# ── División entera: cuántas cajas completas necesitas
productos = 47
por_caja = 10
cajas_completas = productos // por_caja
sobrantes = productos % por_caja
print(f"Cajas completas: {cajas_completas}, sobrantes: {sobrantes}")
# Cajas completas: 4, sobrantes: 7`,
    keyPoints: [
      'Python tiene 7 operadores: +, -, *, /, //, % y **.',
      'La división / siempre devuelve float aunque el resultado sea exacto (10/2 = 5.0).',
      '// es la división entera: descarta los decimales.',
      '% devuelve el resto de la división; se usa para saber si un número es par.',
      '** es la potencia: 2 ** 10 = 1024.',
      'Los operadores += -= *= /= son atajos para actualizar variables.',
    ],
    exercise: {
      description: 'Calcula el área y el perímetro de un círculo con radio r = 5. Usa pi = 3.14159. Área = pi × r² (usa **) y perímetro = 2 × pi × r. Muestra los resultados con f-strings.',
      hint: 'area = pi * r ** 2 y perimetro = 2 * pi * r. Recuerda que ** tiene mayor precedencia que *, así que pi * r ** 2 ya funciona correctamente.',
    },
    quiz: [
      {
        question: '¿Qué imprime print(10 / 2)?',
        options: ['5', '5.0', '2', 'Error'],
        correctAnswer: '5.0',
        correctFeedback: '¡Correcto! El operador / siempre devuelve float en Python 3, aunque el resultado sea exacto. 10 / 2 = 5.0, no 5.',
        incorrectFeedback: 'Se imprime 5.0. En Python 3, el operador / siempre devuelve float. Para obtener un entero usa //: 10 // 2 = 5 (int).',
      },
      {
        question: '¿Qué resultado produce 17 % 5?',
        options: ['3', '2', '3.4', '5'],
        correctAnswer: '2',
        correctFeedback: '¡Correcto! El operador % devuelve el resto de la división entera. 17 = 5×3 + 2, por lo tanto 17 % 5 = 2.',
        incorrectFeedback: 'El resultado es 2. El operador % devuelve el resto: 17 ÷ 5 = 3 con resto 2 (porque 5×3=15 y 17-15=2).',
      },
      {
        question: '¿Cómo verificas si un número es par usando el módulo?',
        options: ['numero % 2 == 1', 'numero / 2 == 0', 'numero % 2 == 0', 'numero // 2 == 0'],
        correctAnswer: 'numero % 2 == 0',
        correctFeedback: '¡Correcto! Un número es par si al dividirlo entre 2 no hay resto. numero % 2 == 0 verifica exactamente eso.',
        incorrectFeedback: 'La forma correcta es numero % 2 == 0. Si el resto de dividir entre 2 es 0, el número es par. Por ejemplo: 8 % 2 = 0 (par), 7 % 2 = 1 (impar).',
      },
      {
        question: '¿Qué imprime print(2 + 3 * 4)?',
        options: ['20', '14', '24', 'Error'],
        correctAnswer: '14',
        correctFeedback: '¡Correcto! Python sigue el orden de operaciones: primero la multiplicación (3*4=12), luego la suma (2+12=14).',
        incorrectFeedback: 'El resultado es 14. Python sigue el orden estándar: primero * y luego +. Así: 3*4=12, luego 2+12=14. Si quisieras 20, necesitarías paréntesis: (2+3)*4.',
      },
      {
        question: '¿Qué hace el operador += en este código?\npuntaje = 10\npuntaje += 5',
        options: [
          'Crea una nueva variable puntaje con valor 5',
          'Compara puntaje con 5',
          'Suma 5 al valor actual de puntaje (puntaje = puntaje + 5)',
          'Multiplica puntaje por 5',
        ],
        correctAnswer: 'Suma 5 al valor actual de puntaje (puntaje = puntaje + 5)',
        correctFeedback: '¡Correcto! += es un atajo para puntaje = puntaje + 5. Después de la operación, puntaje vale 15.',
        incorrectFeedback: '+= suma el valor de la derecha al valor actual de la variable. puntaje += 5 es exactamente lo mismo que puntaje = puntaje + 5. El resultado es 15.',
      },
      {
        question: '¿Cuántas cajas completas de 6 productos puedes llenar con 20 productos?',
        options: ['4', '3', '2', '3.33'],
        correctAnswer: '3',
        correctFeedback: '¡Correcto! 20 // 6 = 3 (división entera). Puedes llenar 3 cajas completas y sobran 2 productos (20 % 6 = 2).',
        incorrectFeedback: 'La respuesta es 3. Usando división entera: 20 // 6 = 3. Puedes llenar 3 cajas completas (3×6=18 productos) y sobran 2 (20 % 6 = 2).',
      },
    ],
  },
  {
    slug: 'operadores-comparacion-logicos',
    title: 'Operadores de comparación y lógicos',
    module: 'Fundamentos',
    moduleNumber: 2,
    order: 11,
    description: 'Aprende a comparar valores y combinar condiciones usando ==, !=, >, <, >=, <=, and, or y not.',
    explanation: `Los operadores de comparación y lógicos son la base de toda la toma de decisiones en programación. Con ellos puedes hacer que tu programa reaccione diferente según las condiciones.

**Operadores de comparación:**
Siempre devuelven \`True\` o \`False\`.

| Operador | Significado | Ejemplo | Resultado |
|----------|-------------|---------|-----------|
| \`==\` | igual a | \`5 == 5\` | \`True\` |
| \`!=\` | distinto de | \`5 != 3\` | \`True\` |
| \`>\` | mayor que | \`10 > 7\` | \`True\` |
| \`<\` | menor que | \`3 < 1\` | \`False\` |
| \`>=\` | mayor o igual | \`5 >= 5\` | \`True\` |
| \`<=\` | menor o igual | \`4 <= 3\` | \`False\` |

**Operadores lógicos:**
Combinan condiciones y también devuelven \`True\` o \`False\`.

- \`and\`: True si **ambas** condiciones son True
- \`or\`: True si **al menos una** condición es True
- \`not\`: invierte el resultado

\`\`\`python
edad = 20
tiene_id = True

puede_votar = edad >= 18 and tiene_id
print(puede_votar)   # True
\`\`\`

**Tabla de verdad simplificada:**
| A | B | A and B | A or B |
|---|---|---------|--------|
| True | True | True | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |

**not invierte el valor:**
\`\`\`python
print(not True)    # False
print(not False)   # True
\`\`\`

**Comparar strings:**
También puedes comparar texto. Python compara letra por letra en orden alfabético.
\`\`\`python
print("hola" == "hola")   # True
print("Ana" == "ana")     # False  (mayúsculas importan)
\`\`\`

**Errores comunes:**
- **Usar = en vez de == en comparaciones.** Es el error más frecuente.
  \`\`\`python
  if x = 5:    # SyntaxError: usa == para comparar
  if x == 5:   # Correcto
  \`\`\`
- **Comparar string con número:** \`"5" == 5\` es \`False\` aunque parezcan iguales.`,
    codeExample: `# ── Operadores de comparación ───────────────────────
edad = 20
print(edad == 20)   # True
print(edad != 18)   # True
print(edad > 18)    # True
print(edad < 18)    # False
print(edad >= 20)   # True
print(edad <= 19)   # False

# Comparar strings (case-sensitive)
nombre = "Ana"
print(nombre == "Ana")    # True
print(nombre == "ana")    # False  ← mayúsculas importan
print(nombre != "Pedro")  # True

# ── Operadores lógicos ───────────────────────────────
edad = 20
tiene_id = True

# and: ambas deben ser True
puede_votar = edad >= 18 and tiene_id
print(f"¿Puede votar? {puede_votar}")   # True

tiene_id = False
puede_votar = edad >= 18 and tiene_id
print(f"¿Puede votar? {puede_votar}")   # False (le falta ID)

# or: al menos una debe ser True
es_fin_de_semana = False
es_feriado = True
puede_descansar = es_fin_de_semana or es_feriado
print(f"¿Puede descansar? {puede_descansar}")   # True

# not: invierte el valor
esta_cerrado = False
print(f"¿Está abierto? {not esta_cerrado}")   # True

# ── Combinaciones prácticas ──────────────────────────
temperatura = 22

# Temperatura agradable: entre 18 y 28 grados
es_agradable = temperatura >= 18 and temperatura <= 28
print(f"Temperatura agradable: {es_agradable}")   # True

# Verificar acceso: usuario premium o tiene invitación
es_premium = False
tiene_invitacion = True
puede_acceder = es_premium or tiene_invitacion
print(f"¿Puede acceder? {puede_acceder}")   # True

# Descuento: mayor de 60 años o estudiante
edad_usuario = 65
es_estudiante = False
tiene_descuento = edad_usuario >= 60 or es_estudiante
print(f"¿Tiene descuento? {tiene_descuento}")   # True`,
    keyPoints: [
      'Los operadores de comparación (==, !=, >, <, >=, <=) siempre devuelven True o False.',
      'No confundas = (asignación) con == (comparación). Usar = en una condición da SyntaxError.',
      'and devuelve True solo si AMBAS condiciones son True.',
      'or devuelve True si AL MENOS UNA condición es True.',
      'not invierte el resultado: not True es False y not False es True.',
    ],
    exercise: {
      description: 'Crea variables edad = 19 y tiene_identificacion = True. Luego crea una variable puede_votar que use and para verificar que la persona tiene al menos 18 años Y tiene identificación. Muestra el resultado con un f-string explicativo.',
      hint: 'puede_votar = edad >= 18 and tiene_identificacion. Luego usa print(f"¿Puede votar? {puede_votar}") para mostrar el resultado.',
    },
    quiz: [
      {
        question: '¿Qué devuelven siempre los operadores de comparación?',
        options: ['Un número', 'Un string', 'True o False', 'None'],
        correctAnswer: 'True o False',
        correctFeedback: '¡Correcto! Los operadores de comparación (==, !=, >, <, >=, <=) siempre devuelven un valor booleano: True o False.',
        incorrectFeedback: 'Los operadores de comparación siempre devuelven un valor booleano: True o False. Por ejemplo, 5 > 3 devuelve True y 2 == 7 devuelve False.',
      },
      {
        question: '¿Qué imprime este código?\nprint(True and False)',
        options: ['True', 'False', 'None', 'Error'],
        correctAnswer: 'False',
        correctFeedback: '¡Correcto! and devuelve True solo si AMBAS condiciones son True. Como una de ellas es False, el resultado es False.',
        incorrectFeedback: 'Se imprime False. El operador and requiere que AMBAS condiciones sean True para devolver True. True and False = False porque una de ellas es False.',
      },
      {
        question: '¿Qué imprime print("Ana" == "ana")?',
        options: ['True', 'False', 'Error', 'None'],
        correctAnswer: 'False',
        correctFeedback: '¡Correcto! Python distingue mayúsculas de minúsculas. "Ana" y "ana" son strings diferentes, así que la comparación devuelve False.',
        incorrectFeedback: 'Se imprime False. Python es case-sensitive: "Ana" y "ana" son cadenas distintas. La A mayúscula no es igual a la a minúscula.',
      },
      {
        question: '¿Cuál es el error en este código?\nif x = 10:\n    print("diez")',
        options: [
          'x no fue definida antes',
          'Falta los dos puntos después del paréntesis',
          'Se usó = en vez de == para comparar',
          'print debe ir en la misma línea',
        ],
        correctAnswer: 'Se usó = en vez de == para comparar',
        correctFeedback: '¡Correcto! En una condición if debes usar == para comparar. El = es el operador de asignación y produce SyntaxError dentro de un if.',
        incorrectFeedback: 'El error es usar = en lugar de ==. El = asigna valores y no puede usarse dentro de un if para comparar. La forma correcta es: if x == 10:',
      },
      {
        question: '¿Qué imprime print(not False)?',
        options: ['False', 'True', 'None', 'not False'],
        correctAnswer: 'True',
        correctFeedback: '¡Correcto! not invierte el booleano. not False es True, y not True es False.',
        incorrectFeedback: 'Se imprime True. El operador not invierte el valor booleano: not False = True, not True = False.',
      },
      {
        question: 'Tienes: edad = 17, tiene_id = True. ¿Qué devuelve (edad >= 18 and tiene_id)?',
        options: ['True', 'False', 'None', 'Error'],
        correctAnswer: 'False',
        correctFeedback: '¡Correcto! and requiere que AMBAS condiciones sean True. edad >= 18 es False (17 < 18), así que el resultado es False aunque tiene_id sea True.',
        incorrectFeedback: 'El resultado es False. and requiere que ambas condiciones sean True. edad >= 18 es False porque 17 < 18, y False and True = False.',
      },
    ],
  },
]

export const module2: Module = {
  number: 2,
  title: 'Fundamentos',
  level: 'básico',
  lessons: lessonsModule2,
}
