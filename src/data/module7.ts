import type { Lesson } from '@/types'

export const lessonsModule7: Lesson[] = [
  {
    slug: 'input-usuario',
    title: 'Input del usuario',
    module: 'Entrada y salida de datos',
    moduleNumber: 7,
    order: 21,
    description: 'Aprende a usar input() para recibir información del usuario y crear programas interactivos.',
    explanation: `La función \`input()\` permite que tu programa **reciba datos del usuario** mientras se ejecuta. Es la forma más básica de hacer programas interactivos.

**Sintaxis:**
\`\`\`
variable = input("Mensaje para el usuario: ")
\`\`\`

El string dentro de input() es el **prompt**: el mensaje que ve el usuario antes de escribir. Es opcional pero muy recomendable para que el usuario sepa qué debe ingresar.

**input() SIEMPRE devuelve un string:**
Este es el punto más importante y causa de muchos errores en principiantes. No importa si el usuario escribe "42" o "3.14", \`input()\` siempre devuelve texto.

\`\`\`
edad = input("Tu edad: ")
print(type(edad))     # <class 'str'>  ← ¡siempre string!
\`\`\`

Por eso, si necesitas un número, debes convertirlo:
\`\`\`
edad = int(input("Tu edad: "))
\`\`\`

**Limpiar la entrada:**
Es buena práctica usar \`.strip()\` para eliminar espacios involuntarios que el usuario pueda agregar:
\`\`\`
nombre = input("Tu nombre: ").strip()
\`\`\`

**input() en bucles:**
Combinando input() con while puedes crear menús y flujos interactivos donde el usuario controla qué hace el programa.`,
    codeExample: `# Input básico
nombre = input("¿Cómo te llamas? ")
print(f"Hola, {nombre}!")

# input() siempre devuelve string
respuesta = input("¿Cuántos años tienes? ")
print(type(respuesta))          # <class 'str'>
print(respuesta + " años")      # Concatenación de strings ✓
# print(respuesta + 1)          # TypeError ✗

# Convertir a número
edad = int(input("Tu edad: "))
print(f"En 10 años tendrás {edad + 10} años")

# Limpiar espacios con strip
ciudad = input("Tu ciudad: ").strip().title()
print(f"Vives en {ciudad}")

# Menú interactivo básico
def menu_principal():
    print("\n=== Menú ===")
    print("1. Saludar")
    print("2. Suma rápida")
    print("3. Salir")
    opcion = input("Elige una opción: ").strip()
    return opcion

# Entrada con validación básica
def pedir_nombre():
    while True:
        nombre = input("Ingresa tu nombre: ").strip()
        if nombre:
            return nombre
        print("El nombre no puede estar vacío.")

# Capturar múltiples datos en un solo input
# (separados por coma, por ejemplo)
datos = input("Ingresa nombre y edad separados por coma: ")
partes = datos.split(",")
if len(partes) == 2:
    nombre = partes[0].strip()
    try:
        edad = int(partes[1].strip())
        print(f"Nombre: {nombre}, Edad: {edad}")
    except ValueError:
        print("La edad debe ser un número")

# input() para pausar el programa
input("\nPresiona Enter para continuar...")
print("¡Continuando!")`,
    keyPoints: [
      'input() siempre devuelve un string, sin importar lo que el usuario escriba.',
      'El argumento de input() es el mensaje (prompt) que ve el usuario.',
      'Usa .strip() para eliminar espacios al inicio y al final de la entrada.',
      'Convierte con int() o float() si necesitas trabajar con números.',
      'Combina input() con while para crear menús y flujos interactivos.',
      'Siempre valida la entrada antes de usarla en operaciones.',
    ],
    exercise: {
      description: 'Crea un programa que pida al usuario su nombre, edad y ciudad favorita. Luego muestra un mensaje personalizado que combine los tres datos. Valida que el nombre no esté vacío y que la edad sea un número positivo.',
      hint: 'Usa .strip() en el nombre, int() para la edad, y captura ValueError si la edad no es válida. Usa un while para repetir si la entrada es incorrecta.',
    },
    quiz: [
      {
        question: '¿Qué tipo de dato devuelve input() cuando el usuario escribe "25"?',
        options: ['int', 'float', 'str', 'El tipo que Python detecte automáticamente'],
        correctAnswer: 'str',
        correctFeedback: 'input() SIEMPRE devuelve un string. El "25" que escribe el usuario se recibe como la cadena "25", no como el número 25. Debes convertirlo con int() si necesitas operarlo.',
        incorrectFeedback: 'input() siempre devuelve str (string), sin excepción. El usuario puede escribir dígitos, pero input() los devuelve como texto. Necesitas int() o float() para convertirlo a número.',
      },
      {
        question: '¿Qué hace este código?: nombre = input("Nombre: ").strip().upper()',
        options: ['Lee el nombre y lo convierte a mayúsculas eliminando espacios', 'Lee el nombre y elimina letras', 'Causa un error porque no se puede encadenar métodos', 'Lee el nombre y lo cifra'],
        correctAnswer: 'Lee el nombre y lo convierte a mayúsculas eliminando espacios',
        correctFeedback: '.strip() elimina los espacios al inicio y final, y .upper() convierte todo a mayúsculas. Los métodos se pueden encadenar en Python.',
        incorrectFeedback: 'En Python puedes encadenar métodos. Primero input() lee el texto, luego .strip() quita los espacios de los extremos, y finalmente .upper() lo convierte a mayúsculas.',
      },
      {
        question: '¿Qué error produce: edad = int(input("Edad: ")) si el usuario escribe "veinte"?',
        options: ['TypeError', 'InputError', 'ValueError', 'NameError'],
        correctAnswer: 'ValueError',
        correctFeedback: 'int("veinte") lanza ValueError porque "veinte" no puede convertirse a entero. Por eso es importante usar try/except alrededor de int(input(...)).',
        incorrectFeedback: 'El error es ValueError. La función int() recibe un string (tipo correcto) pero "veinte" no representa un número válido (valor incorrecto). Por eso se usa ValueError, no TypeError.',
      },
      {
        question: '¿Para qué sirve el argumento que se pasa a input(), como en input("¿Cuál es tu nombre? ")?',
        options: ['Define el tipo de dato que se acepta', 'Es el mensaje (prompt) que ve el usuario antes de escribir', 'Es el valor por defecto si el usuario no escribe nada', 'Define el número máximo de caracteres'],
        correctAnswer: 'Es el mensaje (prompt) que ve el usuario antes de escribir',
        correctFeedback: 'El string pasado a input() es el prompt: el mensaje que se muestra al usuario para indicarle qué debe ingresar. Es opcional pero muy útil para la experiencia del usuario.',
        incorrectFeedback: 'El argumento de input() es el prompt: el mensaje que se muestra al usuario antes de que ingrese su respuesta. No define tipos ni valores por defecto.',
      },
      {
        question: '¿Cuál es la forma más segura de leer un número entero del usuario?',
        options: ['numero = input()', 'numero = int(input("Número: "))', 'try:\n    numero = int(input("Número: "))\nexcept ValueError:\n    print("Inválido")', 'numero = number(input("Número: "))'],
        correctAnswer: 'try:\n    numero = int(input("Número: "))\nexcept ValueError:\n    print("Inválido")',
        correctFeedback: 'La forma más segura combina int(input()) con try/except para manejar el caso en que el usuario escriba algo que no es un número.',
        incorrectFeedback: 'La forma más segura es usar try/except alrededor de int(input()). Sin eso, si el usuario escribe texto el programa se detiene con ValueError.',
      },
    ],
  },
  {
    slug: 'convertir-tipos-datos',
    title: 'Convertir tipos de datos',
    module: 'Entrada y salida de datos',
    moduleNumber: 7,
    order: 22,
    description: 'Aprende a convertir datos entre distintos tipos usando int(), float(), str() y bool() para trabajar correctamente con la información.',
    explanation: `En Python, cada valor tiene un tipo, y a veces necesitas **convertir** entre tipos para que las operaciones funcionen correctamente.

**Conversiones principales:**

**str → int:** convierte un string numérico a entero.
\`\`\`
int("42")    # → 42
int("3.14")  # ✗ Error: no funciona con decimales
int("-10")   # → -10
\`\`\`

**str → float:** convierte un string a número decimal.
\`\`\`
float("3.14")   # → 3.14
float("42")     # → 42.0  (funciona con enteros también)
\`\`\`

**int/float → str:** convierte números a texto.
\`\`\`
str(42)     # → "42"
str(3.14)   # → "3.14"
\`\`\`

**int ↔ float:**
\`\`\`
int(3.99)   # → 3  (trunca, no redondea)
float(5)    # → 5.0
\`\`\`

**→ bool:** en Python, muchos valores se convierten a False:
- Números: \`0\`, \`0.0\`
- Strings: \`""\` (string vacío)
- Colecciones: \`[]\`, \`{}\`, \`()\`
- \`None\`

Todo lo demás es True. Esto se llama "truthiness".

**Conversiones seguras:**
Siempre usa try/except cuando la conversión puede fallar, especialmente con datos del usuario.`,
    codeExample: `# str → int
print(int("42"))       # 42
print(int("-10"))      # -10
# print(int("3.14"))   # ValueError ← no funciona con decimales
# print(int("hola"))   # ValueError

# str → float
print(float("3.14"))   # 3.14
print(float("42"))     # 42.0
print(float("-0.5"))   # -0.5

# int/float → str
print(str(100))        # "100"
print(str(3.14))       # "3.14"
print("Precio: " + str(99.9))   # "Precio: 99.9"

# int ↔ float
print(int(3.99))       # 3  (trunca hacia abajo, no redondea)
print(int(-3.99))      # -3 (trunca hacia cero)
print(float(5))        # 5.0
print(round(3.99))     # 4  (round() sí redondea)

# bool: valores "falsy" y "truthy"
print(bool(0))         # False
print(bool(0.0))       # False
print(bool(""))        # False
print(bool([]))        # False
print(bool(None))      # False

print(bool(1))         # True
print(bool(-5))        # True
print(bool("hola"))    # True
print(bool([1,2,3]))   # True

# Uso práctico en condiciones
nombre = input("Nombre: ").strip()
if nombre:    # equivale a if bool(nombre): o if nombre != "":
    print(f"Hola, {nombre}")
else:
    print("No ingresaste nombre")

# Conversión segura con try/except
def convertir_a_float(texto):
    try:
        return float(texto.replace(",", "."))  # maneja "3,14"
    except (ValueError, AttributeError):
        return None

print(convertir_a_float("3.14"))   # 3.14
print(convertir_a_float("3,14"))   # 3.14
print(convertir_a_float("abc"))    # None

# int() con otras bases numéricas
print(int("FF", 16))   # 255 (hexadecimal)
print(int("1010", 2))  # 10  (binario)`,
    keyPoints: [
      'int() convierte strings numéricos enteros y floats (truncando decimales).',
      'float() convierte strings numéricos y enteros a decimal.',
      'str() convierte cualquier valor a su representación en texto.',
      'int(3.99) devuelve 3, no 4 — trunca hacia cero, no redondea.',
      'Valores falsy: 0, 0.0, "", [], {}, (), None. Todo lo demás es truthy.',
      'Usa try/except para conversiones que pueden fallar (datos del usuario).',
    ],
    exercise: {
      description: 'Crea una función convertir_temperatura(valor, de, a) que convierta entre Celsius, Fahrenheit y Kelvin. Valida que el valor sea numérico usando try/except, y que los parámetros "de" y "a" sean válidos ("C", "F" o "K").',
      hint: 'Fórmulas: C→F: (C * 9/5) + 32. F→C: (F - 32) * 5/9. C→K: C + 273.15. Usa un diccionario de conversiones o if/elif para las combinaciones.',
    },
    quiz: [
      {
        question: '¿Qué devuelve int(3.99)?',
        options: ['4 (redondea al más cercano)', '3 (trunca hacia cero)', '3.99 (no cambia)', 'ValueError'],
        correctAnswer: '3 (trunca hacia cero)',
        correctFeedback: 'int() trunca los decimales, no redondea. int(3.99) devuelve 3. Si quieres redondear usa round(3.99) que devuelve 4.',
        incorrectFeedback: 'int() siempre trunca (corta) los decimales hacia cero. int(3.99) = 3, no 4. Para redondear correctamente usa round(3.99) = 4.',
      },
      {
        question: '¿Cuál de estos valores es considerado "falsy" en Python?',
        options: ['"False"', '0', '-1', '" "'],
        correctAnswer: '0',
        correctFeedback: 'El número 0 es falsy. Nótese que "False" (con comillas) es un string no vacío, por eso es truthy. " " (espacio) también es truthy porque no está vacío.',
        incorrectFeedback: '0 es falsy. "False" es un string no vacío → truthy. -1 es un número no cero → truthy. " " es un string con contenido (un espacio) → truthy. Solo 0, "", [], {}, () y None son falsy.',
      },
      {
        question: '¿Qué error produce int("3.14")?',
        options: ['TypeError', 'ValueError', 'FloatError', 'Ninguno, devuelve 3'],
        correctAnswer: 'ValueError',
        correctFeedback: 'int() no puede convertir strings con decimales directamente. "3.14" contiene un punto decimal que int() no sabe manejar. Primero usa float("3.14") y luego int() si necesitas.',
        incorrectFeedback: 'int("3.14") lanza ValueError. int() solo acepta strings que representen números enteros, sin punto decimal. Para convertir "3.14" primero usa float("3.14") y luego int() si necesitas la parte entera.',
      },
      {
        question: '¿Qué devuelve bool("False")?',
        options: ['False', 'True', 'None', 'ValueError'],
        correctAnswer: 'True',
        correctFeedback: 'bool() convierte según si el valor es "falsy" o "truthy". "False" es un string no vacío, por lo tanto es truthy → bool("False") = True.',
        incorrectFeedback: 'bool("False") devuelve True, no False. bool() no lee el contenido del string, solo verifica si está vacío o no. "False" es un string no vacío, así que es truthy.',
      },
      {
        question: '¿Cuál es la forma correcta de convertir el string "3,14" (con coma) al float 3.14?',
        options: ['float("3,14")', 'float("3,14".replace(",", "."))', 'int("3,14")', 'decimal("3,14")'],
        correctAnswer: 'float("3,14".replace(",", "."))',
        correctFeedback: 'Primero reemplazas la coma por punto con .replace(",", ".") → "3.14", y luego float() lo convierte correctamente.',
        incorrectFeedback: 'float("3,14") daría ValueError porque float() espera un punto decimal, no una coma. Primero debes reemplazar: float("3,14".replace(",", ".")) → float("3.14") → 3.14.',
      },
      {
        question: '¿Qué convierte str(42)?',
        options: ['El número 42 a su valor ASCII', 'El número 42 al string "42"', 'El número 42 a True', 'Causa un error porque 42 no tiene representación en texto'],
        correctAnswer: 'El número 42 al string "42"',
        correctFeedback: 'str() convierte cualquier valor a su representación en texto. str(42) produce el string "42", lo que permite concatenarlo con otros strings.',
        incorrectFeedback: 'str() convierte el valor a su representación textual. str(42) devuelve el string "42". Esto es muy útil cuando quieres concatenar un número con texto.',
      },
    ],
  },
  {
    slug: 'f-strings',
    title: 'Formateo de texto con f-strings',
    module: 'Entrada y salida de datos',
    moduleNumber: 7,
    order: 23,
    description: 'Aprende a usar f-strings para crear mensajes claros combinando texto, variables y expresiones de forma elegante.',
    explanation: `Los **f-strings** (format strings) son la forma más moderna y recomendada de crear strings con variables en Python. Se introdujeron en Python 3.6.

**Sintaxis básica:**
Coloca una \`f\` antes de las comillas y las variables entre llaves \`{}\`:
\`\`\`
nombre = "Ana"
edad = 25
print(f"Me llamo {nombre} y tengo {edad} años")
\`\`\`

**Expresiones dentro de {}:**
Puedes poner cualquier expresión de Python, no solo variables:
\`\`\`
print(f"El doble de 7 es {7 * 2}")
print(f"Mayúsculas: {nombre.upper()}")
\`\`\`

**Especificadores de formato:**
Controlan cómo se muestra el valor usando la sintaxis \`{valor:formato}\`:

- \`:.2f\` — 2 decimales: \`{3.14159:.2f}\` → "3.14"
- \`:,\` — separador de miles: \`{1000000:,}\` → "1,000,000"
- \`:>10\` — alinear a la derecha en 10 caracteres
- \`:<10\` — alinear a la izquierda
- \`:^10\` — centrar
- \`:0>5\` — rellenar con ceros: \`{42:0>5}\` → "00042"

**Multiline f-strings:**
Puedes combinarlos con strings multilínea.

**Alternativas (más antiguas):**
- \`.format()\`: \`"Hola {}".format(nombre)\`
- \`%\`: \`"Hola %s" % nombre\` (más viejo, evitar)`,
    codeExample: `# F-string básico
nombre = "Carlos"
edad = 28
ciudad = "Lima"
print(f"Me llamo {nombre}, tengo {edad} años y vivo en {ciudad}.")

# Expresiones dentro de {}
precio = 150
descuento = 0.10
print(f"Precio: {precio}")
print(f"Descuento: {precio * descuento:.2f}")
print(f"Total: {precio - precio * descuento:.2f}")

# Llamadas a métodos
texto = "hola mundo"
print(f"Original: {texto}")
print(f"Mayúsculas: {texto.upper()}")
print(f"Título: {texto.title()}")
print(f"Caracteres: {len(texto)}")

# Especificadores de formato
pi = 3.14159265
print(f"Pi con 2 decimales: {pi:.2f}")
print(f"Pi con 4 decimales: {pi:.4f}")
print(f"Pi como entero: {pi:.0f}")

poblacion = 1234567890
print(f"Población: {poblacion:,}")           # 1,234,567,890
print(f"En millones: {poblacion / 1e6:.1f}M")

# Alineación
frutas = ["Manzana", "Pera", "Uva"]
precios = [1.50, 0.75, 2.20]
print(f"{'Fruta':<10} {'Precio':>8}")
print("-" * 20)
for f, p in zip(frutas, precios):
    print(f"{f:<10} \${p:>7.2f}")

# Porcentaje
correcto = 7
total = 10
print(f"Resultado: {correcto}/{total} ({correcto/total:.0%})")

# F-string multilínea
reporte = (
    f"=== Reporte de {nombre} ===\n"
    f"Edad: {edad} años\n"
    f"Ciudad: {ciudad}\n"
    f"Mayor de edad: {'Sí' if edad >= 18 else 'No'}"
)
print(reporte)`,
    keyPoints: [
      'Los f-strings se crean poniendo f antes de las comillas: f"texto {variable}".',
      'Puedes poner cualquier expresión Python dentro de las llaves {}.',
      ':.2f muestra 2 decimales; :, agrega separador de miles.',
      ':>N, :<N, :^N alinean el texto a la derecha, izquierda o centro.',
      ':.0% convierte un decimal a porcentaje (0.75 → "75%").',
      'Los f-strings son más legibles y eficientes que .format() y el operador %.',
    ],
    exercise: {
      description: 'Crea un programa que pida nombre, salario mensual y meses trabajados. Muestra un reporte formateado con: nombre en mayúsculas, salario con 2 decimales y separador de miles, salario anual calculado, y un porcentaje de aumento del 10% con el nuevo salario.',
      hint: 'Usa {salario:,.2f} para el formato de dinero, {salario/1000:.1f}K para miles, y el operador ternario dentro de {} para condiciones simples.',
    },
    quiz: [
      {
        question: '¿Qué imprime f"{3.14159:.2f}"?',
        options: ['3.14159', '3.14', '3.1', '3'],
        correctAnswer: '3.14',
        correctFeedback: ':.2f formatea el número con exactamente 2 decimales. 3.14159 con 2 decimales es 3.14.',
        incorrectFeedback: 'El especificador :.2f indica 2 decimales. Por eso 3.14159 se muestra como "3.14". El "f" indica formato de punto flotante.',
      },
      {
        question: '¿Qué imprime f"{1500000:,}"?',
        options: ['1500000', '1,500,000', '1.500.000', '1500,000'],
        correctAnswer: '1,500,000',
        correctFeedback: 'El especificador :, agrega separadores de miles usando comas. Es muy útil para mostrar números grandes de forma legible.',
        incorrectFeedback: 'El especificador :, en un f-string agrega separadores de miles con coma. 1500000 se convierte en "1,500,000".',
      },
      {
        question: '¿Cuál de estos NO es una forma válida de insertar una variable en un f-string?',
        options: ['f"Hola {nombre}"', 'f"Hola {nombre.upper()}"', 'f"Hola {7 * 2}"', 'f"Hola $nombre"'],
        correctAnswer: 'f"Hola $nombre"',
        correctFeedback: 'En Python los f-strings usan llaves {} para las expresiones, no el signo $. f"Hola $nombre" simplemente imprimiría la cadena literal "$nombre".',
        incorrectFeedback: 'f"Hola $nombre" no es válido en Python. Los f-strings usan llaves {}: f"Hola {nombre}". El signo $ es de otros lenguajes como Bash o PHP.',
      },
      {
        question: '¿Qué hace el especificador :.0% en un f-string?',
        options: ['Muestra el número sin decimales', 'Convierte un decimal a porcentaje sin decimales', 'Multiplica el número por 100', 'Muestra el número con el símbolo % sin cambios'],
        correctAnswer: 'Convierte un decimal a porcentaje sin decimales',
        correctFeedback: ':.0% multiplica por 100 y agrega el símbolo %. Por ejemplo, f"{0.75:.0%}" da "75%". Es ideal para mostrar proporciones como porcentajes.',
        incorrectFeedback: ':.0% convierte automáticamente un decimal (como 0.75) a porcentaje (75%) y agrega el símbolo %. El ".0" indica cero decimales en el porcentaje.',
      },
      {
        question: '¿Qué imprime este código?\nx = 5\nprint(f"El cuadrado de {x} es {x**2}")',
        options: ['El cuadrado de x es x**2', 'El cuadrado de 5 es 5**2', 'El cuadrado de 5 es 25', 'Error de sintaxis'],
        correctAnswer: 'El cuadrado de 5 es 25',
        correctFeedback: 'Las llaves {} en un f-string evalúan cualquier expresión Python. {x} se reemplaza por 5, y {x**2} se evalúa como 5**2 = 25.',
        incorrectFeedback: 'En un f-string, todo lo que está dentro de {} se evalúa como código Python. {x} se convierte en 5 y {x**2} se evalúa como 25. Resultado: "El cuadrado de 5 es 25".',
      },
      {
        question: '¿Cuál es la diferencia entre f"{texto:<10}" y f"{texto:>10}"?',
        options: [
          'No hay diferencia, ambas hacen lo mismo',
          '< alinea a la izquierda en 10 espacios; > alinea a la derecha',
          '< recorta el texto a 10 caracteres; > lo expande',
          '< convierte a minúsculas; > convierte a mayúsculas',
        ],
        correctAnswer: '< alinea a la izquierda en 10 espacios; > alinea a la derecha',
        correctFeedback: ':< alinea a la izquierda rellenando con espacios a la derecha. :> alinea a la derecha rellenando con espacios a la izquierda. Útil para crear tablas.',
        incorrectFeedback: 'En f-strings, < significa alineación a la izquierda y > a la derecha, dentro de un ancho total especificado. Por ejemplo {texto:<10} alinea a izquierda en campo de 10 caracteres.',
      },
    ],
  },
  {
    slug: 'print-avanzado',
    title: 'Mostrar información con print()',
    module: 'Entrada y salida de datos',
    moduleNumber: 7,
    order: 24,
    description: 'Aprende a usar print() de forma más flexible con separadores, finales de línea personalizados y múltiples valores.',
    explanation: `La función \`print()\` que ya conoces tiene varios parámetros opcionales que la hacen mucho más flexible de lo que parece.

**Parámetros de print():**
\`\`\`
print(*objetos, sep=' ', end='\\n', file=sys.stdout, flush=False)
\`\`\`

**sep — separador entre valores:**
Por defecto, \`print()\` separa los valores con un espacio. Con \`sep\` cambias ese separador.
\`\`\`
print("a", "b", "c")           # a b c
print("a", "b", "c", sep="-")  # a-b-c
print("a", "b", "c", sep="")   # abc
\`\`\`

**end — qué se imprime al final:**
Por defecto \`print()\` agrega un salto de línea \`\\n\` al final. Con \`end\` cambias eso.
\`\`\`
print("Hola", end=" ")
print("mundo")    # Hola mundo  (en la misma línea)
\`\`\`

**Imprimir múltiples valores:**
Puedes pasar varios argumentos a print() separados por coma.

**Caracteres especiales en strings:**
- \`\\n\` — salto de línea
- \`\\t\` — tabulación (espaciado)
- \`\\\\\` — barra invertida literal

**Imprimir tablas alineadas:**
Combinando f-strings con print() puedes crear salidas tabulares muy legibles.`,
    codeExample: `# Separador personalizado
print("2024", "05", "15", sep="-")    # 2024-05-15
print("Ana", "García", sep=", ")      # Ana, García
print("a", "b", "c", sep=" | ")       # a | b | c
print("uno", "dos", sep="")           # unodos

# end personalizado
print("Cargando", end="")
print(".", end="")
print(".", end="")
print(". ¡Listo!")    # Cargando... ¡Listo!

for i in range(5):
    print(i, end=" ")   # 0 1 2 3 4
print()                 # salto de línea final

# Caracteres especiales
print("Línea 1\nLínea 2\nLínea 3")
print("Nombre:\tAna")
print("Precio:\t\$25.00")

# Imprimir sin nada (línea en blanco)
print("Sección 1")
print()                 # línea en blanco
print("Sección 2")

# Múltiples valores (sep aplica entre ellos)
nombre = "Luis"
edad = 30
ciudad = "Bogotá"
print(nombre, edad, ciudad)             # Luis 30 Bogotá
print(nombre, edad, ciudad, sep=" | ") # Luis | 30 | Bogotá

# Crear tablas con print
print(f"{'Producto':<15} {'Cantidad':>8} {'Precio':>10}")
print("-" * 35)
productos = [
    ("Manzanas", 10, 0.50),
    ("Pan", 2, 1.25),
    ("Leche", 3, 0.90),
]
total = 0
for nombre, cant, precio in productos:
    subtotal = cant * precio
    total += subtotal
    print(f"{nombre:<15} {cant:>8} \${precio:>9.2f}")
print("-" * 35)
print(f"{'TOTAL':<15} {'':>8} \${total:>9.2f}")

# sep con listas (truco útil)
colores = ["rojo", "verde", "azul"]
print(*colores, sep=", ")    # rojo, verde, azul`,
    keyPoints: [
      'sep cambia el separador entre valores de print() (por defecto es un espacio).',
      'end cambia lo que se imprime al final (por defecto es "\\n", salto de línea).',
      'print() sola (sin argumentos) imprime una línea en blanco.',
      'print(*lista) desempaqueta la lista como argumentos separados.',
      '\\n inserta salto de línea, \\t inserta tabulación dentro de strings.',
      'Combinando f-strings con sep y end puedes crear tablas y salidas formateadas.',
    ],
    exercise: {
      description: 'Crea un programa que imprima el calendario de una semana. Muestra los días de la semana en una sola línea separados por " | ", luego imprime debajo las horas del día (8:00 a 18:00) como una barra de progreso con █ y ░ para indicar horas "trabajadas" (digamos que se trabajan 6 horas al día).',
      hint: 'Usa print(*dias, sep=" | ") para los días. Para la barra, usa "█" * horas_trabajadas + "░" * horas_restantes.',
    },
    quiz: [
      {
        question: '¿Qué imprime: print("a", "b", "c", sep="-")?',
        options: ['a b c', 'a-b-c', 'abc', '-a-b-c-'],
        correctAnswer: 'a-b-c',
        correctFeedback: 'sep="-" coloca el guión ENTRE los valores. print("a", "b", "c", sep="-") imprime "a-b-c".',
        incorrectFeedback: 'sep="-" es el separador que se coloca entre cada par de valores. El resultado es "a-b-c" (guión entre a y b, y entre b y c, pero no al principio ni al final).',
      },
      {
        question: '¿Qué imprime este código?\nprint("Hola", end=" ")\nprint("mundo")',
        options: ['Hola\nmundo (en dos líneas)', 'Hola mundo (en una línea)', 'Hola  mundo (con doble espacio)', 'Error de sintaxis'],
        correctAnswer: 'Hola mundo (en una línea)',
        correctFeedback: 'end=" " reemplaza el salto de línea por un espacio. El segundo print() comienza justo después del espacio, resultando en "Hola mundo" en una sola línea.',
        incorrectFeedback: 'end=" " hace que el primer print no salte de línea, sino que ponga un espacio. El segundo print continúa en la misma línea. Resultado: "Hola mundo" en una sola línea.',
      },
      {
        question: '¿Qué hace print(*colores) si colores = ["rojo", "verde", "azul"]?',
        options: ['Imprime la lista completa: [\'rojo\', \'verde\', \'azul\']', 'Imprime los elementos separados por el sep de print (por defecto espacio)', 'Causa un TypeError', 'Imprime solo el primer elemento'],
        correctAnswer: 'Imprime los elementos separados por el sep de print (por defecto espacio)',
        correctFeedback: 'El operador * desempaqueta la lista como argumentos individuales. print(*["rojo","verde","azul"]) es equivalente a print("rojo","verde","azul"), que imprime: rojo verde azul',
        incorrectFeedback: 'El * desempaqueta la lista. print(*colores) es igual que print("rojo", "verde", "azul"), que imprime los elementos con el separador por defecto (espacio): "rojo verde azul".',
      },
      {
        question: '¿Qué carácter especial representa un salto de línea dentro de un string?',
        options: ['\\t', '\\n', '\\r', '\\s'],
        correctAnswer: '\\n',
        correctFeedback: '\\n es el carácter de nueva línea (newline). \\t es una tabulación. Puedes usarlos directamente en strings: "Línea 1\\nLínea 2".',
        incorrectFeedback: '\\n representa el salto de línea (newline). \\t es tabulación. Por ejemplo: print("Línea 1\\nLínea 2") imprime las dos frases en líneas separadas.',
      },
      {
        question: '¿Cuántas líneas imprime este código?\nprint()\nprint("Hola")\nprint()',
        options: ['1', '2', '3', '0'],
        correctAnswer: '3',
        correctFeedback: 'Cada print() imprime una línea: la primera y tercera imprimen líneas en blanco, la segunda imprime "Hola". Total: 3 líneas.',
        incorrectFeedback: 'print() sin argumentos imprime una línea en blanco. Hay 3 llamadas a print(), cada una produce una línea de salida (dos en blanco y una con "Hola"). Total: 3 líneas.',
      },
    ],
  },
  {
    slug: 'calculadora-interactiva',
    title: 'Mini proyecto: calculadora interactiva',
    module: 'Entrada y salida de datos',
    moduleNumber: 7,
    order: 25,
    description: 'Crea una calculadora básica que reciba datos del usuario, convierta valores y muestre resultados de forma clara. Un proyecto que integra todo lo aprendido en este módulo.',
    explanation: `En esta lección construiremos una **calculadora interactiva** paso a paso. Este proyecto integra todo lo que aprendiste en el módulo: \`input()\`, conversión de tipos, f-strings, print() avanzado y manejo de errores.

**¿Qué va a hacer nuestra calculadora?**
- Pedir dos números al usuario
- Mostrar un menú con las operaciones disponibles
- Realizar la operación seleccionada
- Mostrar el resultado formateado
- Repetir hasta que el usuario decida salir

**Aspectos del diseño:**
1. **Separación de responsabilidades**: cada función hace una sola cosa (obtener input, calcular, mostrar).
2. **Robustez**: manejo de errores para entradas inválidas y división por cero.
3. **Experiencia de usuario**: mensajes claros, menú intuitivo, resultados bien formateados.
4. **Bucle principal**: el programa sigue funcionando hasta que el usuario elige salir.

Este patrón — bucle principal + funciones separadas + manejo de errores — es la base de casi cualquier programa interactivo de consola.`,
    codeExample: `# Calculadora interactiva completa

def pedir_numero(mensaje):
    """Pide un número al usuario hasta que sea válido."""
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("  Por favor ingresa un número válido.")

def mostrar_menu():
    """Muestra el menú de operaciones."""
    print("\n" + "=" * 30)
    print("      CALCULADORA PYTHON")
    print("=" * 30)
    print("  1. Suma        (+)")
    print("  2. Resta       (-)")
    print("  3. Multiplicación (*)")
    print("  4. División    (/)")
    print("  5. Potencia    (**)")
    print("  6. Módulo      (%)")
    print("  0. Salir")
    print("-" * 30)

def calcular(a, b, operacion):
    """Realiza la operación indicada. Devuelve (resultado, descripción)."""
    operaciones = {
        "1": (a + b, f"{a} + {b}"),
        "2": (a - b, f"{a} - {b}"),
        "3": (a * b, f"{a} × {b}"),
        "5": (a ** b, f"{a} ** {b}"),
        "6": (a % b, f"{a} % {b}"),
    }
    if operacion == "4":
        if b == 0:
            return None, "División por cero"
        return a / b, f"{a} / {b}"
    if operacion in operaciones:
        return operaciones[operacion]
    return None, "Operación no válida"

def formatear_resultado(valor):
    """Muestra entero si no tiene decimales, float si los tiene."""
    if isinstance(valor, float) and valor.is_integer():
        return str(int(valor))
    return f"{valor:.6g}"  # hasta 6 cifras significativas

def ejecutar_calculadora():
    historial = []
    print("\n¡Bienvenido a la Calculadora Python!")

    while True:
        mostrar_menu()
        opcion = input("  Selecciona una opción: ").strip()

        if opcion == "0":
            print("\nHistorial de operaciones:")
            for i, entrada in enumerate(historial, 1):
                print(f"  {i}. {entrada}")
            print("\n¡Hasta luego!")
            break

        if opcion not in "123456":
            print("  Opción no válida. Elige entre 0 y 6.")
            continue

        print()
        a = pedir_numero("  Primer número:  ")
        b = pedir_numero("  Segundo número: ")

        resultado, descripcion = calcular(a, b, opcion)

        print("\n  " + "-" * 26)
        if resultado is None:
            print(f"  Error: {descripcion}")
        else:
            res_fmt = formatear_resultado(resultado)
            linea = f"{descripcion} = {res_fmt}"
            print(f"  Resultado: {linea}")
            historial.append(linea)
        print("  " + "-" * 26)

        input("\n  Presiona Enter para continuar...")

# Para ejecutar: descomentar la siguiente línea
# ejecutar_calculadora()

# Vista previa sin input (para probar):
print("Vista previa de la calculadora:")
mostrar_menu()
resultado, desc = calcular(10.0, 3.0, "4")
print(f"Ejemplo: {desc} = {resultado:.4f}")`,
    keyPoints: [
      'Separa la lógica en funciones: pedir datos, calcular, mostrar resultado.',
      'Un bucle while True con break es el patrón para menús interactivos.',
      'Maneja siempre la división por cero en calculadoras.',
      'El historial es simplemente una lista a la que agregas cada resultado.',
      'formatear el resultado mejora la experiencia del usuario.',
      'Este patrón (bucle + menú + funciones) se repite en casi todo programa de consola.',
    ],
    exercise: {
      description: 'Extiende la calculadora para que también calcule el promedio de una lista de números ingresados por el usuario (opción 7). El usuario puede ingresar números separados por comas, y la calculadora muestra la suma, cantidad y promedio.',
      hint: 'Pide un string con input(), usa .split(",") para separar, convierte cada parte con float() usando try/except, y calcula sum(numeros)/len(numeros).',
    },
    quiz: [
      {
        question: '¿Por qué se usa "while True" con "break" en el menú de la calculadora?',
        options: ['Porque True es más rápido que una condición', 'Para crear un bucle que continúa hasta que el usuario elija salir', 'Porque Python requiere while True en todos los menús', 'Para evitar errores de tipo'],
        correctAnswer: 'Para crear un bucle que continúa hasta que el usuario elija salir',
        correctFeedback: 'while True crea un bucle infinito que solo termina cuando se ejecuta break. Es el patrón estándar para menús donde no sabes cuántas veces el usuario va a interactuar.',
        incorrectFeedback: 'while True + break es el patrón para bucles que deben continuar hasta que ocurra algo específico (el usuario elige salir). El break sale del bucle cuando el usuario elige la opción 0.',
      },
      {
        question: '¿Por qué es importante manejar la división por cero en una calculadora?',
        options: ['Porque Python no puede calcular divisiones', 'Porque b==0 lanza ZeroDivisionError y detiene el programa si no se maneja', 'Porque el resultado sería incorrecto', 'No es importante, Python devuelve infinito'],
        correctAnswer: 'Porque b==0 lanza ZeroDivisionError y detiene el programa si no se maneja',
        correctFeedback: 'Si el usuario ingresa 0 como divisor y no manejamos el caso, Python lanza ZeroDivisionError y el programa se detiene abruptamente.',
        incorrectFeedback: 'Dividir entre cero lanza ZeroDivisionError en Python. Sin manejo, el programa se detiene con un error. Por eso debemos verificar if b == 0 antes de dividir.',
      },
      {
        question: '¿Qué ventaja tiene separar el código en funciones como pedir_numero(), calcular() y mostrar_resultado()?',
        options: ['El código es más corto', 'Cada función tiene una responsabilidad clara, es más fácil de leer y modificar', 'Python ejecuta funciones más rápido', 'Las funciones evitan todos los errores automáticamente'],
        correctAnswer: 'Cada función tiene una responsabilidad clara, es más fácil de leer y modificar',
        correctFeedback: 'El principio de responsabilidad única dice que cada función debe hacer una sola cosa. Esto hace el código más organizado, fácil de leer, probar y modificar.',
        incorrectFeedback: 'La ventaja es la organización y mantenibilidad. Cuando cada función tiene una responsabilidad clara, es más fácil entender el código, encontrar bugs y hacer cambios sin romper otras partes.',
      },
      {
        question: '¿Qué pasa en el bucle si el usuario ingresa una opción inválida como "7"?',
        options: ['El programa se cierra', 'Se ejecuta continue y vuelve al inicio del bucle mostrando el menú de nuevo', 'Se lanza un ValueError', 'Python elige la opción más cercana automáticamente'],
        correctAnswer: 'Se ejecuta continue y vuelve al inicio del bucle mostrando el menú de nuevo',
        correctFeedback: 'continue salta el resto del código del bucle y vuelve al inicio, donde se mostrará el menú de nuevo para que el usuario elija otra opción.',
        incorrectFeedback: 'La instrucción continue hace que el bucle salte el resto del código y comience de nuevo desde el principio, mostrando el menú para que el usuario ingrese una opción válida.',
      },
      {
        question: '¿Por qué la función pedir_numero() usa un bucle while True?',
        options: ['Para pedir el número dos veces por seguridad', 'Para repetir la solicitud hasta que el usuario ingrese un número válido', 'Porque input() requiere un bucle para funcionar', 'Para contar cuántos intentos hace el usuario'],
        correctAnswer: 'Para repetir la solicitud hasta que el usuario ingrese un número válido',
        correctFeedback: 'Si el usuario escribe texto en lugar de un número, float() lanza ValueError. El while True captura ese error con except y repite la solicitud hasta recibir un valor válido.',
        incorrectFeedback: 'pedir_numero() usa while True para seguir pidiendo el dato hasta que el usuario ingrese algo válido. Si float() falla con ValueError, el except muestra un mensaje y el bucle pide el número de nuevo.',
      },
    ],
  },
]
