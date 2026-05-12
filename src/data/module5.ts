import type { Lesson } from '@/types'
import type { Module } from '@/types'

export const lessonsModule5: Lesson[] = [
  {
    slug: 'que-es-una-funcion',
    title: '¿Qué es una función?',
    module: 'Funciones',
    moduleNumber: 5,
    order: 25,
    description: 'Aprende por qué las funciones ayudan a organizar, reutilizar y simplificar tu código.',
    explanation: `Una **función** es un bloque de código con un nombre que puedes ejecutar cuando quieras, tantas veces como necesites.

Piensa en una función como una **receta de cocina**: defines los pasos una sola vez y los sigues cada vez que quieres preparar ese plato. O como el **botón de lavado de tu lavadora**: lo presionas y la máquina realiza todo el proceso (llenar agua, girar, enjuagar, centrifugar) sin que tú tengas que hacer cada paso manualmente.

**¿Por qué usar funciones?**
- **Evitar repetición**: si necesitas hacer lo mismo en varios lugares, lo defines una vez.
- **Organización**: el código queda dividido en bloques con propósito claro.
- **Más fácil de corregir errores**: si algo falla, corriges en un solo lugar y ya está.
- **Legibilidad**: un buen nombre de función explica qué hace ese bloque de código.

**Funciones integradas que ya conoces:**
Python incluye cientos de funciones listas para usar. Ya usaste varias:
\`\`\`python
print("Hola")        # imprime en pantalla
nombre = input("¿Tu nombre? ")  # pide dato al usuario
longitud = len("Python")        # calcula la longitud
tipo = type(42)                 # devuelve el tipo
numero = int("10")              # convierte a entero
\`\`\`

Esas son funciones que alguien ya escribió por ti. Ahora aprenderás a crear las tuyas propias.

**Errores comunes:**
- **Confundir definir con llamar**: \`def saludar():\` define la función, \`saludar()\` la ejecuta.
- Escribir el nombre sin paréntesis al llamar: \`saludar\` (sin paréntesis) no ejecuta nada, solo hace referencia a la función.`,
    codeExample: `# ── Sin funciones: el código se repite ──────────────
print("*" * 30)
print("   Bienvenido al sistema")
print("*" * 30)

# (más adelante en el programa, necesitas hacer lo mismo...)
print("*" * 30)
print("   Bienvenido al sistema")
print("*" * 30)

# Si quieres cambiar algo, debes cambiarlo en TODOS los lugares.

# ── Con funciones: define una vez, usa muchas veces ─
def mostrar_bienvenida():
    print("*" * 30)
    print("   Bienvenido al sistema")
    print("*" * 30)

# Ahora puedes usarla cuantas veces quieras:
mostrar_bienvenida()

# (más adelante en el programa...)
mostrar_bienvenida()

# Si necesitas cambiar el texto, solo cambias la función.
# Las funciones integradas de Python que ya usaste:
print(len("Python"))   # len() cuenta caracteres → 6
print(type(3.14))      # type() identifica el tipo → <class 'float'>
print(int("42"))       # int() convierte a entero → 42`,
    keyPoints: [
      'Una función es un bloque de código reutilizable con nombre que agrupa instrucciones relacionadas.',
      'Las funciones evitan la repetición de código: defines la lógica una vez y la ejecutas cuantas veces necesites.',
      'Python incluye cientos de funciones integradas (print, input, len, type, int) que ya usaste sin saberlo.',
      'Definir una función (con def) y llamarla (nombre()) son dos acciones distintas.',
      'Organizar el código en funciones lo hace más fácil de leer, mantener y corregir.',
    ],
    exercise: {
      description: `Dado el siguiente código, identifica cuáles son funciones integradas de Python que se están usando y escribe sus nombres en una lista de comentarios:\n\nedad = int(input("¿Cuántos años tienes? "))\nnombre = str(input("¿Cómo te llamas? "))\nprint("Hola", nombre)\nprint("Tienes", edad, "años")\nprint("Longitud de tu nombre:", len(nombre))\nprint("Tipo de dato de edad:", type(edad))`,
      hint: 'Busca todas las palabras seguidas de paréntesis: int(), str(), input(), print(), len(), type() son funciones integradas.',
    },
    quiz: [
      {
        question: '¿Qué es una función en Python?',
        options: [
          'Un bloque de código con nombre que se puede reutilizar',
          'Un tipo de dato como int o str',
          'Una variable que guarda números',
          'Un error de sintaxis especial',
        ],
        correctAnswer: 'Un bloque de código con nombre que se puede reutilizar',
        correctFeedback: '¡Correcto! Una función es un bloque de código reutilizable con nombre.',
        incorrectFeedback: 'No es correcto. Una función es un bloque de código con nombre que puedes ejecutar cuando necesites.',
      },
      {
        question: '¿Cuál de estas es una función integrada de Python?',
        options: [
          'len()',
          'suma()',
          'calcular()',
          'mostrar()',
        ],
        correctAnswer: 'len()',
        correctFeedback: '¡Correcto! len() es una función integrada de Python que calcula la longitud.',
        incorrectFeedback: 'No es correcto. len() es la función integrada de Python. Las demás son funciones que tendría que crear el programador.',
      },
      {
        question: '¿Cuál es la principal ventaja de usar funciones?',
        options: [
          'Evitar repetir código y facilitar el mantenimiento',
          'Hacer que el programa sea más lento',
          'Obligar a escribir más líneas de código',
          'Reemplazar las variables',
        ],
        correctAnswer: 'Evitar repetir código y facilitar el mantenimiento',
        correctFeedback: '¡Exacto! Las funciones evitan la repetición y hacen el código más fácil de mantener.',
        incorrectFeedback: 'No es correcto. La principal ventaja es evitar repetir código y facilitar el mantenimiento.',
      },
      {
        question: '¿Qué diferencia hay entre definir una función y llamarla?',
        options: [
          'Definir crea la función, llamar la ejecuta',
          'Son exactamente lo mismo',
          'Llamar crea la función, definir la ejecuta',
          'Definir la elimina, llamar la crea',
        ],
        correctAnswer: 'Definir crea la función, llamar la ejecuta',
        correctFeedback: '¡Correcto! def nombre(): define (crea) la función, y nombre() la llama (ejecuta).',
        incorrectFeedback: 'No es correcto. Definir (con def) crea la función, y escribir su nombre con paréntesis la ejecuta.',
      },
      {
        question: '¿Qué ocurre si escribes el nombre de una función sin paréntesis?',
        options: [
          'Solo hace referencia a la función, no la ejecuta',
          'La función se ejecuta normalmente',
          'Python lanza un SyntaxError',
          'La función se elimina',
        ],
        correctAnswer: 'Solo hace referencia a la función, no la ejecuta',
        correctFeedback: '¡Correcto! Sin paréntesis solo referencias la función sin ejecutarla.',
        incorrectFeedback: 'No es correcto. Sin paréntesis, Python solo hace referencia a la función pero no la ejecuta.',
      },
    ],
  },
  {
    slug: 'crear-funciones',
    title: 'Crear funciones',
    module: 'Funciones',
    moduleNumber: 5,
    order: 26,
    description: 'Aprende a crear tus propias funciones usando def.',
    explanation: `Para crear tu propia función en Python usas la palabra clave **def** (abreviatura de "define").

**Sintaxis básica:**
\`\`\`python
def nombre_de_la_funcion():
    # código indentado aquí
    instruccion_1
    instruccion_2
\`\`\`

**Reglas importantes:**
1. La línea empieza con \`def\`, luego el nombre, luego \`():\`
2. Todo el código de la función va **indentado** (con 4 espacios o 1 tab).
3. La función no se ejecuta sola: debes **llamarla** escribiendo su nombre con paréntesis.

**Ejemplo paso a paso:**
\`\`\`python
def saludar():          # 1. Defines la función
    print("¡Hola!")     # 2. Esto NO se ejecuta todavía

saludar()               # 3. Ahora sí se ejecuta
\`\`\`

**Nombres descriptivos:**
El nombre debe describir qué hace la función. Es una buena práctica usar verbos:
- \`mostrar_menu()\` en lugar de \`m()\`
- \`calcular_total()\` en lugar de \`ct()\`
- \`pedir_nombre()\` en lugar de \`x()\`

**Puedes llamar la función varias veces:**
\`\`\`python
saludar()   # primera vez
saludar()   # segunda vez
saludar()   # tercera vez
\`\`\`
Cada llamada ejecuta el bloque completo de nuevo.

**Errores comunes:**
- **Definir la función pero nunca llamarla**: el código dentro nunca se ejecuta.
- **Llamar antes de definir**: Python lanza \`NameError\` porque aún no conoce esa función.
- **Olvidar la indentación**: Python lanza \`IndentationError\`.
- **Olvidar los dos puntos** al final de \`def nombre():\`: lanza \`SyntaxError\`.`,
    codeExample: `# ── Definir y llamar una función simple ─────────────
def mostrar_bienvenida():
    print("=" * 35)
    print("  Bienvenido al curso de Python")
    print("=" * 35)

def mostrar_separador():
    print("-" * 35)

# Llamar las funciones (esto las ejecuta)
mostrar_bienvenida()
mostrar_separador()
print("Lección 1: Variables")
mostrar_separador()
print("Lección 2: Tipos de datos")
mostrar_separador()

# Puedes llamar la misma función varias veces
print()
mostrar_bienvenida()   # segunda vez que aparece la bienvenida

# ── Error común: llamar antes de definir ────────────
# despedirse()         ← NameError si va antes de def
def despedirse():
    print("¡Hasta pronto!")

despedirse()           # ← correcto: después de la definición`,
    keyPoints: [
      'La palabra clave def indica a Python que vas a definir una función.',
      'La sintaxis es: def nombre(): seguido de un bloque de código indentado.',
      'La función no se ejecuta cuando la defines: solo cuando la llamas con nombre().',
      'Puedes llamar la misma función tantas veces como necesites en tu programa.',
      'Los nombres de funciones deben ser descriptivos, en minúsculas y con guiones bajos.',
    ],
    exercise: {
      description: 'Crea una función llamada mostrar_menu() que imprima el menú de un restaurante con al menos 4 opciones. Luego llama a la función dos veces para mostrar que se reutiliza fácilmente.',
      hint: 'Usa def mostrar_menu(): y dentro escribe varios print() con las opciones del menú. Recuerda llamarla después de definirla.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta para definir una función en Python?',
        options: [
          'def mi_funcion():',
          'function mi_funcion():',
          'define mi_funcion():',
          'fun mi_funcion():',
        ],
        correctAnswer: 'def mi_funcion():',
        correctFeedback: '¡Correcto! En Python se usa def seguido del nombre y dos puntos.',
        incorrectFeedback: 'No es correcto. En Python la palabra clave es def, no function ni define ni fun.',
      },
      {
        question: '¿Qué ocurre si defines una función pero nunca la llamas?',
        options: [
          'El código dentro de la función nunca se ejecuta',
          'La función se ejecuta automáticamente al definirla',
          'Python lanza un error',
          'La función se ejecuta al final del programa',
        ],
        correctAnswer: 'El código dentro de la función nunca se ejecuta',
        correctFeedback: '¡Correcto! Sin llamarla explícitamente, el código dentro jamás se ejecuta.',
        incorrectFeedback: 'No es correcto. Una función solo se ejecuta cuando la llamas explícitamente con nombre().',
      },
      {
        question: '¿Qué error produce llamar a una función antes de definirla?',
        options: [
          'NameError',
          'SyntaxError',
          'TypeError',
          'IndentationError',
        ],
        correctAnswer: 'NameError',
        correctFeedback: '¡Correcto! Python lanza NameError porque aún no conoce esa función.',
        incorrectFeedback: 'No es correcto. Al llamar una función antes de definirla Python lanza NameError.',
      },
      {
        question: '¿Cuántas veces puedes llamar a una función?',
        options: [
          'Las veces que necesites',
          'Solo una vez',
          'Máximo dos veces',
          'Solo dentro de otras funciones',
        ],
        correctAnswer: 'Las veces que necesites',
        correctFeedback: '¡Correcto! Una función puede llamarse tantas veces como necesites.',
        incorrectFeedback: 'No es correcto. Puedes llamar una función las veces que necesites, esa es su gran ventaja.',
      },
      {
        question: '¿Qué es mejor como nombre de función?',
        options: [
          'calcular_promedio()',
          'cp()',
          'x()',
          'funcion1()',
        ],
        correctAnswer: 'calcular_promedio()',
        correctFeedback: '¡Correcto! Un nombre descriptivo como calcular_promedio() deja claro qué hace la función.',
        incorrectFeedback: 'No es correcto. Los nombres deben ser descriptivos. calcular_promedio() es mucho más claro que cp(), x() o funcion1().',
      },
      {
        question: '¿Qué error produce olvidar la indentación dentro de una función?',
        options: [
          'IndentationError',
          'NameError',
          'ValueError',
          'KeyError',
        ],
        correctAnswer: 'IndentationError',
        correctFeedback: '¡Correcto! Python es muy estricto con la indentación y lanza IndentationError si falta.',
        incorrectFeedback: 'No es correcto. Olvidar la indentación produce IndentationError, ya que Python usa el sangrado para definir bloques.',
      },
    ],
  },
  {
    slug: 'parametros',
    title: 'Parámetros',
    module: 'Funciones',
    moduleNumber: 5,
    order: 27,
    description: 'Aprende cómo enviar información a una función usando parámetros.',
    explanation: `Un **parámetro** es una variable especial que declara la función para recibir información desde afuera. Los parámetros hacen que tus funciones sean flexibles y reutilizables con distintos datos.

**Parámetro vs argumento:**
- **Parámetro**: la variable en la *definición* de la función → \`def saludar(nombre):\`
- **Argumento**: el valor concreto que pasas al *llamar* → \`saludar("Ana")\`

\`\`\`python
def saludar(nombre):        # "nombre" es el parámetro
    print(f"¡Hola, {nombre}!")

saludar("Ana")              # "Ana" es el argumento
saludar("Carlos")           # "Carlos" es el argumento
\`\`\`

**Múltiples parámetros:**
\`\`\`python
def describir(nombre, edad):
    print(f"{nombre} tiene {edad} años")

describir("María", 25)
describir("Luis", 30)
\`\`\`

**Parámetros con valor por defecto (opcionales):**
Puedes asignar un valor por defecto a un parámetro. Si al llamar no lo pasas, usa el valor por defecto.
\`\`\`python
def saludar(nombre, saludo="¡Hola"):
    print(f"{saludo}, {nombre}!")

saludar("Ana")              # usa el defecto: ¡Hola, Ana!
saludar("Ana", "¡Buenos días")  # sobreescribe: ¡Buenos días, Ana!
\`\`\`

**Regla importante:** los parámetros con valor por defecto siempre van *al final* de la lista de parámetros.

**Errores comunes:**
- **Número incorrecto de argumentos**: si la función pide 2 y pasas 1, Python lanza \`TypeError: missing required positional argument\`.
- **Confundir el orden**: \`describir(25, "María")\` pone el número donde va el nombre y viceversa.`,
    codeExample: `# ── Parámetro simple ────────────────────────────────
def saludar(nombre):
    print(f"¡Hola, {nombre}! Bienvenido al curso.")

saludar("Ana")
saludar("Carlos")

# ── Múltiples parámetros ─────────────────────────────
def calcular_descuento(precio, porcentaje=10):
    descuento = precio * porcentaje / 100
    precio_final = precio - descuento
    print(f"Precio original: \${precio}")
    print(f"Descuento ({porcentaje}%): \${descuento:.2f}")
    print(f"Precio final: \${precio_final:.2f}")

calcular_descuento(100)          # usa el 10% por defecto
calcular_descuento(100, 25)      # sobreescribe con 25%

# ── Parámetro con valor por defecto ──────────────────
def describir_persona(nombre, edad, ciudad="desconocida"):
    print(f"Nombre: {nombre}")
    print(f"Edad:   {edad} años")
    print(f"Ciudad: {ciudad}")
    print()

describir_persona("Laura", 28, "Madrid")
describir_persona("Pedro", 35)   # ciudad queda como "desconocida"`,
    keyPoints: [
      'Un parámetro es una variable en la definición de la función que recibe datos del exterior.',
      'Un argumento es el valor concreto que pasas al llamar la función.',
      'Una función puede tener cero, uno o varios parámetros separados por comas.',
      'Los parámetros con valor por defecto son opcionales: si no los pasas, usan el valor predefinido.',
      'Los parámetros con valor por defecto siempre van al final de la lista de parámetros.',
      'Pasar el número incorrecto de argumentos produce un TypeError.',
    ],
    exercise: {
      description: 'Crea una función calcular_area(forma, medida1, medida2=None) que:\n- Si forma es "cuadrado", calcule medida1 * medida1\n- Si forma es "rectangulo", calcule medida1 * medida2\n- En ambos casos imprima el resultado con un mensaje claro.\nPrueba con: calcular_area("cuadrado", 5) y calcular_area("rectangulo", 4, 7)',
      hint: 'Usa un if/elif dentro de la función para distinguir las formas. Recuerda que medida2 puede ser None si la forma es cuadrado.',
    },
    quiz: [
      {
        question: '¿Qué es un parámetro?',
        options: [
          'Una variable en la definición de la función que recibe datos',
          'El valor concreto que pasas al llamar la función',
          'Un tipo especial de variable global',
          'El resultado que devuelve una función',
        ],
        correctAnswer: 'Una variable en la definición de la función que recibe datos',
        correctFeedback: '¡Correcto! El parámetro va en la definición y el argumento es el valor que pasas al llamar.',
        incorrectFeedback: 'No es correcto. Un parámetro es la variable en la definición; el valor que pasas al llamar se llama argumento.',
      },
      {
        question: 'En def saludar("Ana"), ¿qué es "Ana"?',
        options: [
          'No es válido, las cadenas no van en def',
          'Un parámetro',
          'Un argumento',
          'Un valor de retorno',
        ],
        correctAnswer: 'No es válido, las cadenas no van en def',
        correctFeedback: '¡Correcto! En def solo van nombres de parámetros, no valores. Los valores van al llamar: saludar("Ana").',
        incorrectFeedback: 'No es correcto. En la línea def los paréntesis contienen nombres de parámetros, no valores directos.',
      },
      {
        question: '¿Qué ocurre si llamas a una función con menos argumentos de los requeridos?',
        options: [
          'Python lanza un TypeError',
          'Python lanza un ValueError',
          'Los parámetros faltantes quedan como None automáticamente',
          'La función se ejecuta ignorando los parámetros faltantes',
        ],
        correctAnswer: 'Python lanza un TypeError',
        correctFeedback: '¡Correcto! Python lanza TypeError indicando que falta un argumento posicional requerido.',
        incorrectFeedback: 'No es correcto. Python lanza TypeError cuando faltan argumentos requeridos.',
      },
      {
        question: 'En def saludar(nombre, saludo="¡Hola"): ¿qué pasa si llamas saludar("María")?',
        options: [
          'La función usa "¡Hola" como saludo por defecto',
          'Python lanza un error porque falta el segundo argumento',
          'saludo queda como None',
          'La función no imprime nada',
        ],
        correctAnswer: 'La función usa "¡Hola" como saludo por defecto',
        correctFeedback: '¡Correcto! El valor por defecto se usa cuando no pasas ese argumento.',
        incorrectFeedback: 'No es correcto. Al tener un valor por defecto, el parámetro es opcional y usa "¡Hola" si no lo pasas.',
      },
      {
        question: '¿Dónde deben colocarse los parámetros con valor por defecto?',
        options: [
          'Al final de la lista de parámetros',
          'Al inicio de la lista de parámetros',
          'En cualquier posición',
          'Solo puede haber un parámetro con valor por defecto',
        ],
        correctAnswer: 'Al final de la lista de parámetros',
        correctFeedback: '¡Correcto! Los parámetros con valor por defecto siempre van al final.',
        incorrectFeedback: 'No es correcto. Los parámetros con valor por defecto deben ir al final; de lo contrario Python lanza un SyntaxError.',
      },
    ],
  },
  {
    slug: 'return',
    title: 'Return',
    module: 'Funciones',
    moduleNumber: 5,
    order: 28,
    description: 'Aprende cómo devolver resultados desde una función usando return.',
    explanation: `La instrucción **return** permite que una función **entregue un resultado** al código que la llamó. Sin return, la función hace su trabajo pero no devuelve nada útil (en realidad devuelve \`None\`).

**Sin return (la función solo actúa):**
\`\`\`python
def sumar(a, b):
    print(a + b)    # solo imprime, no devuelve

resultado = sumar(3, 4)   # imprime 7
print(resultado)           # imprime None
\`\`\`

**Con return (la función devuelve el valor):**
\`\`\`python
def sumar(a, b):
    return a + b    # devuelve el resultado

resultado = sumar(3, 4)   # guarda 7 en resultado
print(resultado)           # imprime 7
\`\`\`

**Puedes guardar el resultado y usarlo:**
\`\`\`python
total = sumar(10, 5)
print(f"El total es: {total}")
print(f"El doble es: {total * 2}")
\`\`\`

**Devolver múltiples valores:**
Python permite devolver varios valores separados por coma (técnicamente como una tupla):
\`\`\`python
def minimo_maximo(lista):
    return min(lista), max(lista)

menor, mayor = minimo_maximo([3, 1, 7, 2, 9])
print(f"Mínimo: {menor}, Máximo: {mayor}")
\`\`\`

**return también termina la función:**
Cuando Python encuentra return, la función termina inmediatamente. Esto es útil para salir antes de tiempo:
\`\`\`python
def dividir(a, b):
    if b == 0:
        return None    # sale inmediatamente
    return a / b
\`\`\`

**print() vs return:**
- \`print()\` dentro de una función muestra el valor en pantalla pero no lo devuelve.
- \`return\` entrega el valor al código que llamó la función para que lo use.

**Errores comunes:**
- Usar \`print()\` cuando necesitas el valor para seguir calculando (el resultado se pierde).
- Olvidar guardar el resultado: \`calcular_promedio(notas)\` sin guardarlo en una variable.`,
    codeExample: `# ── return devuelve el valor ─────────────────────────
def calcular_promedio(notas):
    suma = sum(notas)
    promedio = suma / len(notas)
    return promedio

mis_notas = [8, 7, 9, 6, 10]
prom = calcular_promedio(mis_notas)
print(f"Tu promedio es: {prom:.1f}")

# Usar el resultado directamente en una expresión:
if calcular_promedio(mis_notas) >= 7:
    print("¡Aprobado!")

# ── Devolver True/False ───────────────────────────────
def validar_edad(edad):
    if edad < 0 or edad > 120:
        return False
    return True

if validar_edad(25):
    print("Edad válida")
else:
    print("Edad no válida")

# ── Devolver múltiples valores ────────────────────────
def min_max(lista):
    return min(lista), max(lista)

numeros = [4, 2, 9, 1, 7]
minimo, maximo = min_max(numeros)
print(f"Mínimo: {minimo}")
print(f"Máximo: {maximo}")`,
    keyPoints: [
      'return entrega el resultado de la función al código que la llamó.',
      'Sin return, la función devuelve None aunque imprima algo con print().',
      'Debes guardar el resultado en una variable para poder usarlo después.',
      'Una función puede devolver múltiples valores separados por coma (como una tupla).',
      'return también termina la ejecución de la función inmediatamente.',
      'print() muestra el valor en pantalla pero no lo devuelve; return sí lo devuelve.',
    ],
    exercise: {
      description: 'Crea una función calcular_imc(peso_kg, altura_m) que:\n1. Calcule el IMC = peso_kg / (altura_m ** 2)\n2. Determine la categoría:\n   - Menos de 18.5 → "Bajo peso"\n   - 18.5 a 24.9 → "Normal"\n   - 25 a 29.9 → "Sobrepeso"\n   - 30 o más → "Obesidad"\n3. Devuelva tanto el IMC (redondeado a 2 decimales) como la categoría.\nPrueba con peso=70, altura=1.75',
      hint: 'Usa return imc, categoria para devolver dos valores. Usa round(imc, 2) para redondear. Desempaca el resultado con: imc, categoria = calcular_imc(70, 1.75)',
    },
    quiz: [
      {
        question: '¿Qué devuelve una función que no tiene instrucción return?',
        options: [
          'None',
          '0',
          'Una cadena vacía ""',
          'Lanza un error',
        ],
        correctAnswer: 'None',
        correctFeedback: '¡Correcto! Sin return explícito, Python devuelve None automáticamente.',
        incorrectFeedback: 'No es correcto. Sin return explícito, la función devuelve None.',
      },
      {
        question: '¿Cuál es la diferencia entre print() y return dentro de una función?',
        options: [
          'print() muestra el valor en pantalla; return lo entrega al código que llamó la función',
          'No hay diferencia, hacen lo mismo',
          'return muestra el valor en pantalla; print() lo guarda',
          'print() termina la función; return no',
        ],
        correctAnswer: 'print() muestra el valor en pantalla; return lo entrega al código que llamó la función',
        correctFeedback: '¡Correcto! print() solo muestra, return entrega el valor para que puedas usarlo.',
        incorrectFeedback: 'No es correcto. print() muestra en pantalla y no devuelve el valor; return sí lo devuelve para que puedas usarlo.',
      },
      {
        question: '¿Qué ocurre cuando Python encuentra un return en mitad de una función?',
        options: [
          'La función termina inmediatamente y devuelve el valor',
          'Python ignora el return y continúa ejecutando',
          'Se lanza un error',
          'La función se ejecuta dos veces',
        ],
        correctAnswer: 'La función termina inmediatamente y devuelve el valor',
        correctFeedback: '¡Correcto! return termina la función inmediatamente, incluso si hay más código después.',
        incorrectFeedback: 'No es correcto. return termina la función de inmediato; el código que viene después no se ejecuta.',
      },
      {
        question: '¿Cómo se devuelven múltiples valores con return?',
        options: [
          'return valor1, valor2',
          'return [valor1] [valor2]',
          'return valor1 + valor2',
          'No es posible devolver más de un valor',
        ],
        correctAnswer: 'return valor1, valor2',
        correctFeedback: '¡Correcto! Separando los valores con coma, Python los devuelve como una tupla.',
        incorrectFeedback: 'No es correcto. Con return valor1, valor2 Python devuelve ambos valores como una tupla.',
      },
      {
        question: 'Si una función devuelve un valor con return, ¿qué debes hacer para usarlo?',
        options: [
          'Guardarlo en una variable al llamar la función',
          'Nada, se guarda solo',
          'Llamar la función dos veces',
          'Usar print() antes de return',
        ],
        correctAnswer: 'Guardarlo en una variable al llamar la función',
        correctFeedback: '¡Correcto! Debes hacer resultado = mi_funcion() para capturar el valor devuelto.',
        incorrectFeedback: 'No es correcto. Debes guardar el resultado: variable = mi_funcion(), de lo contrario el valor se pierde.',
      },
    ],
  },
  {
    slug: 'funciones-condicionales-bucles',
    title: 'Funciones con condicionales y bucles',
    module: 'Funciones',
    moduleNumber: 5,
    order: 29,
    description: 'Aprende a crear funciones más útiles combinando funciones, condicionales y bucles.',
    explanation: `Dentro de una función puedes usar **cualquier estructura** que ya conoces: condicionales, bucles, listas, diccionarios. Esto es lo que hace que las funciones sean tan poderosas.

**Condicionales dentro de una función:**
\`\`\`python
def clasificar_nota(nota):
    if nota >= 9:
        return "Excelente"
    elif nota >= 7:
        return "Aprobado"
    elif nota >= 5:
        return "Regular"
    else:
        return "Reprobado"
\`\`\`

**Bucles dentro de una función:**
\`\`\`python
def contar_pares(lista):
    conteo = 0
    for numero in lista:
        if numero % 2 == 0:
            conteo += 1
    return conteo
\`\`\`

**Una función que llama a otra:**
\`\`\`python
def es_par(numero):
    return numero % 2 == 0

def filtrar_pares(lista):
    resultado = []
    for n in lista:
        if es_par(n):        # llama a otra función
            resultado.append(n)
    return resultado
\`\`\`

**Principio de diseño: una función = una tarea**
En lugar de una función gigante que hace todo, divide el problema en funciones pequeñas con propósito claro. Esto se llama "separación de responsabilidades".

**¿Cuándo dividir en varias funciones?**
- Cuando una función hace más de una cosa claramente diferente.
- Cuando un bloque de código se repite.
- Cuando el código dentro es difícil de entender de un vistazo.

**Errores comunes:**
- **Función que hace demasiado**: intenta meter toda la lógica del programa en una sola función. Divide y vencerás.`,
    codeExample: `# ── Condicional dentro de función ───────────────────
def clasificar_nota(nota):
    if nota >= 9:
        return "Excelente"
    elif nota >= 7:
        return "Aprobado"
    elif nota >= 5:
        return "Regular"
    else:
        return "Reprobado"

print(clasificar_nota(9.5))   # Excelente
print(clasificar_nota(7.0))   # Aprobado
print(clasificar_nota(4.0))   # Reprobado

# ── Bucle dentro de función ──────────────────────────
def calcular_total(lista_precios, descuento=0):
    total = 0
    for precio in lista_precios:
        total += precio
    total = total * (1 - descuento / 100)
    return round(total, 2)

productos = [15.99, 8.50, 23.00, 4.75]
print(f"Sin descuento: \${calcular_total(productos)}")
print(f"Con 10% desc.: \${calcular_total(productos, 10)}")

# ── Función que llama a otra ─────────────────────────
def filtrar_mayores(numeros, minimo):
    resultado = []
    for n in numeros:
        if n >= minimo:
            resultado.append(n)
    return resultado

lista = [5, 12, 3, 18, 7, 25, 1]
print(filtrar_mayores(lista, 10))   # [12, 18, 25]`,
    keyPoints: [
      'Dentro de una función puedes usar cualquier estructura: if/elif/else, for, while, listas, etc.',
      'Una función puede llamar a otras funciones, lo que permite construir lógica compleja de forma organizada.',
      'El principio "una función = una tarea" hace el código más fácil de entender y mantener.',
      'Cuando una función se vuelve muy larga o hace varias cosas distintas, es señal de dividirla.',
      'Combinar funciones pequeñas es más poderoso que una función gigante que lo hace todo.',
    ],
    exercise: {
      description: 'Crea una función analizar_lista(numeros) que reciba una lista de números y devuelva un diccionario con las siguientes claves:\n- "total": la suma de todos los números\n- "promedio": el promedio\n- "maximo": el valor más grande\n- "minimo": el valor más pequeño\n- "cantidad_pares": cuántos números son pares\n\nPrueba con: analizar_lista([4, 7, 2, 9, 6, 3, 8])',
      hint: 'Usa un bucle for para calcular el total y contar pares. Usa las funciones integradas max() y min() para el máximo y mínimo. Devuelve un diccionario con todas las claves.',
    },
    quiz: [
      {
        question: '¿Qué tipos de estructuras puedes usar dentro de una función?',
        options: [
          'Cualquier estructura: if, for, while, listas, etc.',
          'Solo instrucciones simples sin estructuras de control',
          'Solo bucles for',
          'Solo condicionales if',
        ],
        correctAnswer: 'Cualquier estructura: if, for, while, listas, etc.',
        correctFeedback: '¡Correcto! Dentro de una función puedes usar cualquier código Python válido.',
        incorrectFeedback: 'No es correcto. Dentro de una función puedes usar cualquier estructura: if, for, while, listas, diccionarios, etc.',
      },
      {
        question: '¿Puede una función llamar a otra función?',
        options: [
          'Sí, una función puede llamar a cualquier función disponible',
          'No, las funciones son independientes y no pueden interactuar',
          'Solo puede llamar a funciones integradas de Python',
          'Solo puede llamarse a sí misma',
        ],
        correctAnswer: 'Sí, una función puede llamar a cualquier función disponible',
        correctFeedback: '¡Correcto! Una función puede llamar a otras funciones, lo que permite organizar mejor el código.',
        incorrectFeedback: 'No es correcto. Una función puede llamar a cualquier función disponible, incluyendo otras funciones creadas por ti.',
      },
      {
        question: '¿Qué significa el principio "una función = una tarea"?',
        options: [
          'Cada función debe tener un propósito claro y específico',
          'Solo puedes tener una función en tu programa',
          'Una función debe tener exactamente una línea de código',
          'Cada función debe usar exactamente un parámetro',
        ],
        correctAnswer: 'Cada función debe tener un propósito claro y específico',
        correctFeedback: '¡Correcto! Una función bien diseñada hace una sola cosa y la hace bien.',
        incorrectFeedback: 'No es correcto. El principio significa que cada función debe tener un propósito claro y específico, no que haya una sola función.',
      },
      {
        question: '¿Cuándo es señal de que deberías dividir una función en varias?',
        options: [
          'Cuando hace varias cosas claramente diferentes o es difícil de entender',
          'Cuando tiene más de 2 líneas de código',
          'Cuando usa un bucle for',
          'Cuando devuelve un valor',
        ],
        correctAnswer: 'Cuando hace varias cosas claramente diferentes o es difícil de entender',
        correctFeedback: '¡Correcto! Una función demasiado grande o que hace varias cosas es señal de que hay que dividirla.',
        incorrectFeedback: 'No es correcto. Debes dividir cuando la función hace demasiadas cosas o es difícil de entender, no por la cantidad de líneas.',
      },
      {
        question: 'Una función filtrar_mayores(numeros, minimo) recorre una lista y devuelve los números mayores o iguales a minimo. ¿Qué estructura necesita internamente?',
        options: [
          'Un bucle for y un condicional if',
          'Solo un condicional if',
          'Solo un bucle while',
          'No necesita estructuras, basta con return',
        ],
        correctAnswer: 'Un bucle for y un condicional if',
        correctFeedback: '¡Correcto! Necesitas el bucle para recorrer la lista y el if para filtrar los elementos.',
        incorrectFeedback: 'No es correcto. Para recorrer la lista y seleccionar elementos necesitas combinar un bucle for con un condicional if.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-basicas',
    title: 'Buenas prácticas básicas',
    module: 'Funciones',
    moduleNumber: 5,
    order: 30,
    description: 'Aprende a escribir funciones pequeñas, claras y fáciles de entender.',
    explanation: `Escribir código que funcione es el primer paso. Escribir código que sea claro, fácil de mantener y de entender es el siguiente nivel. Estas buenas prácticas te convertirán en un mejor programador desde el principio.

**1. Principio de responsabilidad única**
Una función debe hacer una sola cosa y hacerla bien. Si el nombre de tu función tiene "y" (calcular_y_mostrar), es señal de que debería ser dos funciones.

**2. Nombres descriptivos**
Los nombres deben decir qué hace la función o variable:
\`\`\`python
# Mal:
def f(x, y):
    return x * y / 100

# Bien:
def calcular_descuento(precio, porcentaje):
    return precio * porcentaje / 100
\`\`\`

**3. DRY — Don't Repeat Yourself (No te repitas)**
Si ves el mismo bloque de código dos o más veces, crea una función. El código repetido es difícil de mantener: si hay un error, debes corregirlo en todos lados.

**4. Constantes en MAYÚSCULAS**
Los valores que no cambian se escriben en MAYÚSCULAS para distinguirlos de las variables:
\`\`\`python
MAX_INTENTOS = 3
TASA_IVA = 0.16
PI = 3.14159
\`\`\`

**5. Comentarios solo cuando hace falta**
El código bien escrito se explica solo. Los comentarios son para lógica no obvia, no para describir lo evidente:
\`\`\`python
# Malo (el código ya lo dice):
x = x + 1  # suma 1 a x

# Bueno (explica el "por qué"):
intentos += 1  # contamos el intento fallido para el límite de reintentos
\`\`\`

**6. Manejo básico de errores con try/except**
Cuando una operación puede fallar (por ejemplo, convertir input a número), usa try/except para manejarlo con gracia:
\`\`\`python
try:
    numero = int(input("Escribe un número: "))
    print(f"El doble es: {numero * 2}")
except ValueError:
    print("Eso no es un número válido.")
\`\`\`

**7. PEP 8 básico**
- Espacios alrededor de operadores: \`x = a + b\` no \`x=a+b\`
- Líneas en blanco entre funciones.
- Nombres en snake_case: \`calcular_promedio\` no \`calcularPromedio\`.

**Errores comunes:**
- **Funciones gigantes**: si tiene más de 20-30 líneas, probablemente debería dividirse.
- **Nombres crípticos**: \`f()\`, \`x()\`, \`temp2()\` no dicen nada sobre su propósito.`,
    codeExample: `# ── Código malo → código bueno ───────────────────────

# MALO: código repetido, nombres sin sentido
def c(a, b, c2):
    r = a + b + c2
    p = r / 3
    if p >= 7:
        print("ok")
    else:
        print("no ok")

def c2(x, y, z):
    r = x + y + z
    p = r / 3
    if p >= 7:
        print("ok")
    else:
        print("no ok")

# BUENO: funciones pequeñas con nombres descriptivos, sin repetición
NOTA_MINIMA_APROBACION = 7.0

def calcular_promedio(nota1, nota2, nota3):
    return (nota1 + nota2 + nota3) / 3

def esta_aprobado(promedio):
    return promedio >= NOTA_MINIMA_APROBACION

def evaluar_alumno(nombre, nota1, nota2, nota3):
    promedio = calcular_promedio(nota1, nota2, nota3)
    if esta_aprobado(promedio):
        print(f"{nombre}: Aprobado (promedio {promedio:.1f})")
    else:
        print(f"{nombre}: Reprobado (promedio {promedio:.1f})")

evaluar_alumno("Ana", 8, 7, 9)
evaluar_alumno("Luis", 5, 4, 6)

# ── Manejo básico de errores ──────────────────────────
def pedir_numero(mensaje):
    try:
        return float(input(mensaje))
    except ValueError:
        print("Error: ingresa solo números.")
        return None

# valor = pedir_numero("¿Cuánto pesa? ")
# if valor is not None:
#     print(f"Peso registrado: {valor} kg")`,
    keyPoints: [
      'Principio de responsabilidad única: una función debe hacer una sola cosa y hacerla bien.',
      'DRY (Don\'t Repeat Yourself): si repites código en dos o más lugares, crea una función.',
      'Los nombres deben ser descriptivos: calcular_promedio() comunica mucho más que cp() o f().',
      'Las constantes que no cambian se escriben en MAYÚSCULAS (MAX_INTENTOS, TASA_IVA).',
      'Usa try/except para manejar errores previsibles como entradas inválidas del usuario.',
      'Sigue PEP 8: espacios alrededor de operadores, snake_case y líneas en blanco entre funciones.',
    ],
    exercise: {
      description: 'Refactoriza el siguiente código aplicando buenas prácticas:\n\n# Código a mejorar:\ndef x(a, b):\n    print(a * b)\n    print(a * b)\n    print(a * b)\n\ndef y(a, b):\n    print(a + b)\n    print(a + b)\n\nAplica: nombres descriptivos, elimina repetición, usa return en lugar de print interno, y agrega una constante si tiene sentido.',
      hint: 'Piensa qué hacen esas funciones realmente y ponles nombres apropiados. Usa return para devolver el valor y deja que quien llame la función decida si imprimir o no. Elimina las líneas repetidas.',
    },
    quiz: [
      {
        question: '¿Qué significa el principio DRY?',
        options: [
          'Don\'t Repeat Yourself: evita duplicar código creando funciones',
          'Define Reusable Yesterday: define funciones antes de usarlas',
          'Delete Redundant Yield: elimina los return innecesarios',
          'Do Repeat Yourself: repite el código para mayor claridad',
        ],
        correctAnswer: 'Don\'t Repeat Yourself: evita duplicar código creando funciones',
        correctFeedback: '¡Correcto! DRY significa No te repitas: si el mismo código aparece en dos lugares, crea una función.',
        incorrectFeedback: 'No es correcto. DRY significa Don\'t Repeat Yourself (No te repitas): si repites código, crea una función.',
      },
      {
        question: '¿Cómo se escriben las constantes en Python según las buenas prácticas?',
        options: [
          'En MAYÚSCULAS con guiones bajos (MAX_INTENTOS)',
          'En minúsculas igual que las variables',
          'Con prefijo "const_" (const_max_intentos)',
          'Entre paréntesis',
        ],
        correctAnswer: 'En MAYÚSCULAS con guiones bajos (MAX_INTENTOS)',
        correctFeedback: '¡Correcto! Por convención PEP 8, las constantes van en MAYÚSCULAS_CON_GUIONES.',
        incorrectFeedback: 'No es correcto. Las constantes se escriben en MAYÚSCULAS con guiones bajos, por ejemplo MAX_INTENTOS.',
      },
      {
        question: '¿Cuándo deberías agregar un comentario en el código?',
        options: [
          'Cuando la lógica no es obvia y necesita explicación',
          'En cada línea de código para explicar qué hace',
          'Nunca, el código siempre se explica solo',
          'Solo al inicio del archivo',
        ],
        correctAnswer: 'Cuando la lógica no es obvia y necesita explicación',
        correctFeedback: '¡Correcto! Los comentarios son para lógica no obvia, no para describir lo evidente.',
        incorrectFeedback: 'No es correcto. Los comentarios son útiles cuando la lógica no es obvia, pero no se deben poner en cada línea.',
      },
      {
        question: '¿Para qué sirve try/except?',
        options: [
          'Para manejar errores que pueden ocurrir durante la ejecución',
          'Para definir dos versiones de una función',
          'Para intentar llamar a una función dos veces',
          'Para verificar la indentación del código',
        ],
        correctAnswer: 'Para manejar errores que pueden ocurrir durante la ejecución',
        correctFeedback: '¡Correcto! try/except permite que el programa maneje errores de forma controlada sin detenerse.',
        incorrectFeedback: 'No es correcto. try/except sirve para capturar y manejar errores en tiempo de ejecución.',
      },
      {
        question: '¿Cuál es una señal de que deberías dividir una función en varias?',
        options: [
          'El nombre tiene "y" porque hace dos cosas distintas',
          'La función tiene más de 3 parámetros',
          'La función usa un bucle for',
          'La función devuelve un valor booleano',
        ],
        correctAnswer: 'El nombre tiene "y" porque hace dos cosas distintas',
        correctFeedback: '¡Correcto! Si el nombre de la función necesita un "y" (calcular_y_mostrar), es señal de que debería dividirse.',
        incorrectFeedback: 'No es correcto. Si el nombre necesita "y" para describir lo que hace (calcular_y_mostrar), es señal de que debería ser dos funciones.',
      },
      {
        question: '¿Cuál es la convención de nombrado de funciones en Python según PEP 8?',
        options: [
          'snake_case: palabras en minúsculas separadas por guiones bajos',
          'camelCase: primera palabra en minúscula, resto con mayúscula inicial',
          'PascalCase: todas las palabras con mayúscula inicial',
          'SCREAMING_SNAKE: todas en mayúsculas con guiones',
        ],
        correctAnswer: 'snake_case: palabras en minúsculas separadas por guiones bajos',
        correctFeedback: '¡Correcto! PEP 8 establece snake_case para funciones y variables: calcular_promedio, no calcularPromedio.',
        incorrectFeedback: 'No es correcto. PEP 8 establece snake_case para funciones: calcular_promedio en lugar de calcularPromedio o CalcularPromedio.',
      },
    ],
  },
]

export const module5: Module = {
  number: 5,
  title: 'Funciones',
  level: 'básico',
  lessons: lessonsModule5,
}
