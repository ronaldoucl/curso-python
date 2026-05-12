import type { Lesson } from '@/types'

export const lessonsModule11: Lesson[] = [
  {
    slug: 'comprension-listas',
    title: '¿Qué es una comprensión de lista?',
    module: 'Comprensión de listas y diccionarios',
    moduleNumber: 11,
    order: 47,
    description: 'Aprende a crear listas de forma más corta y elegante usando list comprehensions.',
    explanation: `Una **comprensión de lista** (list comprehension) es una forma compacta de crear listas en Python. En lugar de escribir un bucle \`for\` completo, puedes expresar la misma lógica en una sola línea.

**Sintaxis básica:**
\`\`\`
[expresion for elemento in iterable]
\`\`\`

Esto es equivalente a:
\`\`\`python
resultado = []
for elemento in iterable:
    resultado.append(expresion)
\`\`\`

**¿Por qué usarlas?**
- Código más corto y expresivo
- Generalmente más rápidas que el bucle equivalente (Python las optimiza internamente)
- Muy idiomáticas: cuando alguien lee Python de nivel intermedio, espera verlas

**Un ejemplo sencillo:** quieres una lista con los cuadrados del 1 al 5.

Sin comprensión:
\`\`\`python
cuadrados = []
for n in range(1, 6):
    cuadrados.append(n ** 2)
\`\`\`

Con comprensión:
\`\`\`python
cuadrados = [n ** 2 for n in range(1, 6)]
\`\`\`

Ambas producen \`[1, 4, 9, 16, 25]\`, pero la segunda es más directa.

**¿Qué puede ir en la expresión?**
La "expresión" puede ser cualquier cálculo, llamada a función, o transformación que quieras aplicar a cada elemento:
\`\`\`python
nombres = ['ana', 'luis', 'marta']
mayusculas = [n.upper() for n in nombres]
# ['ANA', 'LUIS', 'MARTA']
\`\`\`

**Importante:** el resultado siempre es una lista nueva. La lista original no se modifica.`,
    codeExample: `# Forma tradicional con bucle
cuadrados_bucle = []
for n in range(1, 6):
    cuadrados_bucle.append(n ** 2)
print(cuadrados_bucle)  # [1, 4, 9, 16, 25]

# Comprensión de lista equivalente
cuadrados = [n ** 2 for n in range(1, 6)]
print(cuadrados)        # [1, 4, 9, 16, 25]

# Transformar strings
frutas = ['manzana', 'banana', 'cereza']
mayusculas = [f.upper() for f in frutas]
print(mayusculas)       # ['MANZANA', 'BANANA', 'CEREZA']

longitudes = [len(f) for f in frutas]
print(longitudes)       # [7, 6, 6]

# Aplicar una función propia
def doble(x):
    return x * 2

numeros = [1, 2, 3, 4, 5]
doubles = [doble(n) for n in numeros]
print(doubles)          # [2, 4, 6, 8, 10]

# Sobre un rango con paso
pares = [n for n in range(0, 20, 2)]
print(pares)            # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Comprensión sobre una cadena (itera carácter a carácter)
vocales_palabra = [c for c in 'Python' if c in 'aeiouAEIOU']
print(vocales_palabra)  # ['o']`,
    keyPoints: [
      'Sintaxis: [expresion for elemento in iterable]',
      'Siempre devuelve una lista nueva; no modifica el iterable original',
      'La expresión puede ser cualquier cálculo o llamada a función',
      'Son más rápidas que el bucle equivalente para operaciones simples',
      'Puedes iterar sobre cualquier iterable: listas, rangos, strings, tuplas, etc.',
      'Si la lógica es compleja, un bucle for explícito puede ser más claro',
    ],
    exercise: {
      description: 'Dado \`temperaturas_celsius = [0, 20, 37, 100]\`, crea una lista \`fahrenheit\` que convierta cada temperatura usando la fórmula \`F = C * 9/5 + 32\`, usando una comprensión de lista.',
      hint: 'La expresión dentro de la comprensión debe ser \`c * 9/5 + 32\` y el iterable es \`temperaturas_celsius\`.',
    },
    quiz: [
      {
        question: '¿Cuál es el resultado de `[x * 2 for x in [1, 2, 3]]`?',
        options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'Error de sintaxis'],
        correctAnswer: '[2, 4, 6]',
        correctFeedback: 'Correcto. La expresión `x * 2` se aplica a cada elemento: 1×2=2, 2×2=4, 3×2=6.',
        incorrectFeedback: 'La comprensión aplica `x * 2` a cada elemento de la lista [1, 2, 3], produciendo [2, 4, 6].',
      },
      {
        question: '¿Qué produce `[len(p) for p in ["hola", "mundo", "py"]]`?',
        options: ['["hola", "mundo", "py"]', '[4, 5, 2]', '[4, 4, 4]', 'Error'],
        correctAnswer: '[4, 5, 2]',
        correctFeedback: 'Correcto. `len("hola")` es 4, `len("mundo")` es 5, `len("py")` es 2.',
        incorrectFeedback: '`len()` devuelve la cantidad de caracteres de cada string. "hola" tiene 4, "mundo" tiene 5 y "py" tiene 2.',
      },
      {
        question: '¿Cuál es la forma correcta de escribir una comprensión de lista?',
        options: [
          '{x ** 2 for x in range(5)}',
          '[x ** 2 for x in range(5)]',
          '(x ** 2 for x in range(5))',
          'list(x ** 2 for x in range(5))',
        ],
        correctAnswer: '[x ** 2 for x in range(5)]',
        correctFeedback: 'Correcto. Las comprensiones de lista usan corchetes `[]`. Las llaves `{}` crean sets o diccionarios. Los paréntesis crean generadores.',
        incorrectFeedback: 'Las comprensiones de **lista** usan corchetes `[]`. Con `{}` obtendrías un set o diccionario. Con `()` obtendrías un generador, no una lista.',
      },
      {
        question: '¿Qué imprime el siguiente código?\n```python\nresultado = [n for n in range(5)]\nprint(resultado)\n```',
        options: ['[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4]', '[0, 1, 2, 3, 4, 5]', 'Error'],
        correctAnswer: '[0, 1, 2, 3, 4]',
        correctFeedback: 'Correcto. `range(5)` genera 0, 1, 2, 3, 4 (no incluye el 5).',
        incorrectFeedback: '`range(5)` produce los valores 0, 1, 2, 3, 4. El 5 no se incluye. Recuerda: range(n) va de 0 hasta n-1.',
      },
      {
        question: 'Una comprensión de lista modifica la lista original que usa como fuente. ¿Verdadero o falso?',
        options: ['Verdadero', 'Falso', 'Depende del tipo de datos', 'Solo si usas append'],
        correctAnswer: 'Falso',
        correctFeedback: 'Correcto. Una comprensión siempre crea y devuelve una lista **nueva**. La fuente original nunca se modifica.',
        incorrectFeedback: 'Falso. Las comprensiones de lista siempre producen una lista nueva. El iterable original permanece sin cambios.',
      },
      {
        question: '¿Cuál de estas opciones es equivalente a `[x.strip() for x in lineas]` usando un bucle?',
        options: [
          'resultado = []\nfor x in lineas:\n    resultado = x.strip()',
          'resultado = []\nfor x in lineas:\n    resultado.append(x.strip())',
          'resultado = lineas.strip()',
          'resultado = strip(lineas)',
        ],
        correctAnswer: 'resultado = []\nfor x in lineas:\n    resultado.append(x.strip())',
        correctFeedback: 'Correcto. La comprensión es azúcar sintáctica para crear una lista vacía y hacer append en cada iteración.',
        incorrectFeedback: 'La comprensión equivale a crear una lista vacía y hacer `append(x.strip())` en cada iteración. La opción `resultado = x.strip()` sobrescribe en cada vuelta en lugar de acumular.',
      },
      {
        question: '¿Qué pasa si escribes `[print(x) for x in range(3)]`?',
        options: [
          'Imprime 0, 1, 2 y retorna [0, 1, 2]',
          'Imprime 0, 1, 2 y retorna [None, None, None]',
          'No imprime nada porque print() es una función',
          'Lanza un TypeError',
        ],
        correctAnswer: 'Imprime 0, 1, 2 y retorna [None, None, None]',
        correctFeedback: 'Correcto. `print()` tiene el efecto secundario de imprimir, pero devuelve `None`. Así que la lista resultante contiene tres `None`.',
        incorrectFeedback: '`print()` sí imprime (efecto secundario), pero devuelve `None`. La lista de comprensión recoge el valor de retorno de la expresión, que en este caso es `None` para cada elemento.',
      },
    ],
  },

  {
    slug: 'comprension-listas-condiciones',
    title: 'Comprensión de listas con condiciones',
    module: 'Comprensión de listas y diccionarios',
    moduleNumber: 11,
    order: 48,
    description: 'Aprende a filtrar elementos dentro de una list comprehension usando condiciones.',
    explanation: `Puedes añadir una condición al final de una comprensión de lista para **filtrar** qué elementos se incluyen en el resultado. Solo entrarán los elementos que cumplan la condición.

**Sintaxis con filtro:**
\`\`\`
[expresion for elemento in iterable if condicion]
\`\`\`

El \`if\` al final actúa como un filtro: el elemento solo se procesa si la condición es verdadera.

**Ejemplo:** obtener solo los números pares de una lista:
\`\`\`python
numeros = [1, 2, 3, 4, 5, 6, 7, 8]
pares = [n for n in numeros if n % 2 == 0]
# [2, 4, 6, 8]
\`\`\`

**Diferencia entre filtrar y transformar:**
- Filtrar: decides qué elementos incluir → la condición va al final (\`if\`)
- Transformar: cambias cada elemento → la lógica va en la expresión
- Puedes hacer ambas cosas a la vez:

\`\`\`python
# Cuadrados solo de los pares
cuadrados_pares = [n ** 2 for n in range(1, 10) if n % 2 == 0]
# [4, 16, 36, 64]
\`\`\`

**Operador ternario (if-else en la expresión):**
También puedes usar una expresión condicional dentro de la comprensión para transformar, no filtrar:
\`\`\`python
[expresion_si_verdad if condicion else expresion_si_falso for elemento in iterable]
\`\`\`

\`\`\`python
# Reemplaza negativos por 0
numeros = [-3, 5, -1, 8, -2, 4]
limpios = [n if n > 0 else 0 for n in numeros]
# [0, 5, 0, 8, 0, 4]
\`\`\`

**Nota importante:** el \`if\` al final filtra; el operador ternario (dentro de la expresión) transforma sin filtrar. Son dos usos diferentes del \`if\`.`,
    codeExample: `numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filtrar: solo pares
pares = [n for n in numeros if n % 2 == 0]
print(pares)   # [2, 4, 6, 8, 10]

# Filtrar: solo mayores a 5
mayores = [n for n in numeros if n > 5]
print(mayores) # [6, 7, 8, 9, 10]

# Filtrar y transformar al mismo tiempo
cuadrados_impares = [n ** 2 for n in numeros if n % 2 != 0]
print(cuadrados_impares)  # [1, 9, 25, 49, 81]

# Filtrar strings por longitud
palabras = ['sol', 'estrella', 'luna', 'cometa', 'mars']
largas = [p for p in palabras if len(p) > 4]
print(largas)  # ['estrella', 'cometa']

# Filtrar elementos que cumplan varias condiciones
multiplos = [n for n in range(1, 50) if n % 3 == 0 and n % 5 == 0]
print(multiplos)  # [15, 30, 45]

# Operador ternario: transformar sin eliminar elementos
valores = [-2, 5, -8, 3, 0, -1]
positivos = [v if v > 0 else 0 for v in valores]
print(positivos)  # [0, 5, 0, 3, 0, 0]

# Clasificar como "par" o "impar"
etiquetas = ['par' if n % 2 == 0 else 'impar' for n in range(1, 6)]
print(etiquetas)  # ['impar', 'par', 'impar', 'par', 'impar']`,
    keyPoints: [
      'El `if` al final de la comprensión filtra: solo incluye los elementos que cumplen la condición',
      'Puedes filtrar Y transformar al mismo tiempo: `[expr for x in it if cond]`',
      'El operador ternario (`valor_si_true if cond else valor_si_false`) transforma sin eliminar elementos',
      'Puedes combinar múltiples condiciones con `and` y `or`',
      'El filtro con `if` va DESPUÉS del `for`; el ternario va ANTES del `for`',
      'Una comprensión con filtro nunca modifica la lista original',
    ],
    exercise: {
      description: 'Dada `palabras = ["Python", "es", "genial", "y", "poderoso"]`, crea una lista con las palabras que tengan más de 3 letras, convertidas a mayúsculas.',
      hint: 'Combina filtro (`if len(p) > 3`) y transformación (`p.upper()`) en la misma comprensión.',
    },
    quiz: [
      {
        question: '¿Qué produce `[x for x in range(10) if x % 2 == 0]`?',
        options: ['[1, 3, 5, 7, 9]', '[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'],
        correctAnswer: '[0, 2, 4, 6, 8]',
        correctFeedback: 'Correcto. `range(10)` va de 0 a 9. El filtro `x % 2 == 0` deja solo los pares: 0, 2, 4, 6, 8.',
        incorrectFeedback: '`range(10)` genera 0..9. El filtro `x % 2 == 0` selecciona los pares: 0, 2, 4, 6, 8. El 10 no se incluye porque `range(10)` no lo alcanza.',
      },
      {
        question: '¿Cuál es la diferencia entre `[x if x > 0 else 0 for x in lista]` y `[x for x in lista if x > 0]`?',
        options: [
          'Son idénticas, producen el mismo resultado',
          'La primera reemplaza negativos por 0; la segunda los elimina',
          'La segunda reemplaza negativos por 0; la primera los elimina',
          'Ambas eliminan los negativos',
        ],
        correctAnswer: 'La primera reemplaza negativos por 0; la segunda los elimina',
        correctFeedback: 'Correcto. El ternario dentro de la expresión transforma (sin quitar elementos). El `if` al final filtra (elimina los que no cumplen).',
        incorrectFeedback: 'El operador ternario `x if x > 0 else 0` mantiene todos los elementos pero transforma los negativos a 0. El `if` al final como filtro directamente excluye los negativos de la lista resultante.',
      },
      {
        question: '¿Qué produce `["par" if x % 2 == 0 else "impar" for x in [1, 2, 3]]`?',
        options: [
          '["impar", "par", "impar"]',
          '["par", "impar", "par"]',
          '[1, 2, 3]',
          'Error de sintaxis',
        ],
        correctAnswer: '["impar", "par", "impar"]',
        correctFeedback: 'Correcto. 1 es impar, 2 es par, 3 es impar.',
        incorrectFeedback: '1 % 2 = 1 (impar), 2 % 2 = 0 (par), 3 % 2 = 1 (impar). Resultado: ["impar", "par", "impar"].',
      },
      {
        question: '¿Cuántos elementos tiene `[n for n in range(1, 10) if n % 3 == 0]`?',
        options: ['2', '3', '4', '9'],
        correctAnswer: '3',
        correctFeedback: 'Correcto. Los múltiplos de 3 entre 1 y 9 son: 3, 6, 9. Tres elementos.',
        incorrectFeedback: 'De 1 a 9, los múltiplos de 3 son: 3, 6 y 9. Eso da exactamente 3 elementos.',
      },
      {
        question: '¿Cuál es la forma correcta de filtrar y transformar en una sola comprensión?',
        options: [
          '[x ** 2 if x > 0 for x in lista]',
          '[x ** 2 for x in lista if x > 0]',
          '[if x > 0: x ** 2 for x in lista]',
          '[x for x in lista if x > 0 ** 2]',
        ],
        correctAnswer: '[x ** 2 for x in lista if x > 0]',
        correctFeedback: 'Correcto. La estructura es: expresión → for → (if opcional). El `if` al final es el filtro.',
        incorrectFeedback: 'La sintaxis correcta es `[expresion for elemento in iterable if condicion]`. El filtro va después del `for`, no dentro de la expresión.',
      },
      {
        question: '¿Qué imprime este código?\n```python\ndatos = ["Ana", "", "Luis", "", "Marta"]\nvalidos = [d for d in datos if d]\nprint(validos)\n```',
        options: [
          '["Ana", "", "Luis", "", "Marta"]',
          '["Ana", "Luis", "Marta"]',
          '["", ""]',
          'Error',
        ],
        correctAnswer: '["Ana", "Luis", "Marta"]',
        correctFeedback: 'Correcto. En Python, un string vacío `""` es falsy. El filtro `if d` excluye los strings vacíos.',
        incorrectFeedback: 'En Python, `""` (string vacío) se evalúa como `False`. Por eso `if d` filtra los strings vacíos y solo quedan los que tienen contenido.',
      },
      {
        question: 'Quieres solo los emails que contengan "@". ¿Cuál comprensión es correcta?',
        options: [
          '[e for e in emails if "@" not in e]',
          '[e for e in emails if "@" in e]',
          '[e.find("@") for e in emails]',
          '["@" for e in emails]',
        ],
        correctAnswer: '[e for e in emails if "@" in e]',
        correctFeedback: 'Correcto. `"@" in e` es `True` cuando el string contiene el símbolo @. El `in` en Python sirve para verificar si un substring está dentro de un string.',
        incorrectFeedback: 'Para verificar que un string contiene "@" se usa `"@" in e`. La opción `"@" not in e` haría exactamente lo contrario: devolvería los que NO tienen @.',
      },
    ],
  },

  {
    slug: 'comprension-diccionarios',
    title: 'Comprensión de diccionarios',
    module: 'Comprensión de listas y diccionarios',
    moduleNumber: 11,
    order: 49,
    description: 'Aprende a crear diccionarios de forma compacta usando dictionary comprehensions.',
    explanation: `Así como puedes crear listas con una comprensión, Python también permite crear diccionarios en una sola línea usando una **comprensión de diccionario** (dict comprehension).

**Sintaxis:**
\`\`\`
{clave: valor for elemento in iterable}
\`\`\`

La diferencia principal con las listas es que defines **dos cosas** por cada elemento: la clave y el valor, separadas por dos puntos.

**Ejemplo básico:** crear un diccionario donde cada número es clave y su cuadrado es valor:
\`\`\`python
cuadrados = {n: n ** 2 for n in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
\`\`\`

**Transformar un diccionario existente:** puedes iterar sobre los pares clave-valor con \`.items()\`:
\`\`\`python
precios = {'manzana': 2.0, 'banana': 1.5, 'cereza': 3.0}

# Subir todos los precios un 10%
nuevos_precios = {k: round(v * 1.1, 2) for k, v in precios.items()}
# {'manzana': 2.2, 'banana': 1.65, 'cereza': 3.3}
\`\`\`

**Con filtro:** igual que en las listas, puedes añadir un \`if\` al final:
\`\`\`python
# Solo los precios mayores a 2
caros = {k: v for k, v in precios.items() if v > 2}
# {'manzana': 2.0, 'cereza': 3.0}
\`\`\`

**Invertir claves y valores:** una operación muy común:
\`\`\`python
original = {'a': 1, 'b': 2, 'c': 3}
invertido = {v: k for k, v in original.items()}
# {1: 'a', 2: 'b', 3: 'c'}
\`\`\`

**Importante:** si hay claves duplicadas en el resultado, Python usa el último valor (como en cualquier diccionario).`,
    codeExample: `# Cuadrados del 1 al 5
cuadrados = {n: n ** 2 for n in range(1, 6)}
print(cuadrados)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Longitud de cada palabra como valor
palabras = ['python', 'código', 'lista', 'dict']
longitudes = {p: len(p) for p in palabras}
print(longitudes)  # {'python': 6, 'código': 6, 'lista': 5, 'dict': 4}

# Transformar un diccionario existente
precios = {'manzana': 2.0, 'banana': 1.5, 'cereza': 3.5}

# Subir precios 20%
actualizados = {k: round(v * 1.2, 2) for k, v in precios.items()}
print(actualizados)  # {'manzana': 2.4, 'banana': 1.8, 'cereza': 4.2}

# Filtrar: solo productos que cuesten más de 2
caros = {k: v for k, v in precios.items() if v > 2}
print(caros)  # {'manzana': 2.0, 'cereza': 3.5}

# Invertir claves y valores
codigo_pais = {'MX': 'México', 'AR': 'Argentina', 'ES': 'España'}
pais_codigo = {v: k for k, v in codigo_pais.items()}
print(pais_codigo)  # {'México': 'MX', 'Argentina': 'AR', 'España': 'ES'}

# Combinar dos listas en un diccionario (zip)
nombres = ['Ana', 'Luis', 'Marta']
edades = [25, 30, 22]
personas = {n: e for n, e in zip(nombres, edades)}
print(personas)  # {'Ana': 25, 'Luis': 30, 'Marta': 22}`,
    keyPoints: [
      'Sintaxis: `{clave: valor for elemento in iterable}`',
      'Usa `.items()` para iterar sobre pares clave-valor de un diccionario existente',
      'Puedes añadir un `if` al final para filtrar entradas',
      'Invertir claves y valores: `{v: k for k, v in dicc.items()}`',
      '`zip()` permite combinar dos listas en un diccionario con comprensión',
      'Si se repiten claves, el último valor sobrescribe al anterior',
    ],
    exercise: {
      description: 'Tienes `notas = {"Ana": 85, "Luis": 42, "Marta": 91, "Pedro": 58}`. Crea un diccionario `aprobados` que contenga solo los estudiantes con nota mayor o igual a 60, pero con sus notas convertidas a porcentaje (divididas entre 100).',
      hint: 'Usa `.items()` para iterar, el filtro `if v >= 60` y la expresión `round(v / 100, 2)` para el valor.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta de una comprensión de diccionario?',
        options: [
          '[k: v for k, v in items]',
          '{k: v for k, v in items}',
          '{k, v for k, v in items}',
          '(k: v for k, v in items)',
        ],
        correctAnswer: '{k: v for k, v in items}',
        correctFeedback: 'Correcto. Las comprensiones de diccionario usan llaves `{}` y la expresión `clave: valor`.',
        incorrectFeedback: 'Las comprensiones de diccionario usan llaves `{}` con el formato `clave: valor`. Los corchetes `[]` son para listas, los paréntesis `()` para generadores o tuplas.',
      },
      {
        question: '¿Qué produce `{x: x**2 for x in range(4)}`?',
        options: [
          '{1: 1, 2: 4, 3: 9, 4: 16}',
          '{0: 0, 1: 1, 2: 4, 3: 9}',
          '[0, 1, 4, 9]',
          'Error',
        ],
        correctAnswer: '{0: 0, 1: 1, 2: 4, 3: 9}',
        correctFeedback: 'Correcto. `range(4)` genera 0, 1, 2, 3. Cada uno se convierte en clave con su cuadrado como valor.',
        incorrectFeedback: '`range(4)` genera 0, 1, 2, 3 (no incluye el 4). Así se producen las claves 0, 1, 2 y 3 con valores 0, 1, 4 y 9.',
      },
      {
        question: '¿Cómo se itera correctamente sobre los pares clave-valor de un diccionario en una comprensión?',
        options: [
          'for k in diccionario',
          'for k, v in diccionario.items()',
          'for k, v in diccionario',
          'for k: v in diccionario',
        ],
        correctAnswer: 'for k, v in diccionario.items()',
        correctFeedback: 'Correcto. `.items()` devuelve pares (clave, valor) que puedes desempaquetar con `k, v`.',
        incorrectFeedback: 'Para obtener clave y valor simultáneamente debes usar `.items()`, que devuelve pares `(clave, valor)`. Sin `.items()`, solo obtienes las claves.',
      },
      {
        question: '¿Qué hace esta comprensión?\n```python\n{v: k for k, v in {"a": 1, "b": 2}.items()}\n```',
        options: [
          'Copia el diccionario',
          'Crea {1: "a", 2: "b"} (invierte claves y valores)',
          'Crea {"a": "b"}',
          'Lanza un error porque los valores no son strings',
        ],
        correctAnswer: 'Crea {1: "a", 2: "b"} (invierte claves y valores)',
        correctFeedback: 'Correcto. Al poner `v: k` en lugar de `k: v`, las claves y valores se intercambian.',
        incorrectFeedback: 'Al escribir `v: k` (en lugar de `k: v`), las claves y valores se intercambian. El diccionario original tiene "a"→1, "b"→2; el resultado tiene 1→"a", 2→"b".',
      },
      {
        question: 'Tienes `{k: v for k, v in datos.items() if v > 0}`. ¿Qué hace el `if v > 0`?',
        options: [
          'Transforma los valores negativos a 0',
          'Filtra el diccionario: solo incluye entradas con valor positivo',
          'Lanza un error si v es 0',
          'Convierte todos los valores a positivos',
        ],
        correctAnswer: 'Filtra el diccionario: solo incluye entradas con valor positivo',
        correctFeedback: 'Correcto. El `if` al final actúa como filtro: solo las entradas donde `v > 0` se incluyen en el nuevo diccionario.',
        incorrectFeedback: 'El `if` al final de una comprensión siempre actúa como filtro. Las entradas con `v <= 0` simplemente no se agregan al diccionario resultante.',
      },
      {
        question: '¿Qué resultado tiene `{n: "par" if n % 2 == 0 else "impar" for n in range(1, 4)}`?',
        options: [
          '{1: "impar", 2: "par", 3: "impar"}',
          '{1: "par", 2: "impar", 3: "par"}',
          '{2: "par"}',
          'Error de sintaxis',
        ],
        correctAnswer: '{1: "impar", 2: "par", 3: "impar"}',
        correctFeedback: 'Correcto. 1 es impar, 2 es par, 3 es impar. El ternario produce el valor apropiado para cada clave.',
        incorrectFeedback: '`range(1, 4)` genera 1, 2, 3. El ternario clasifica cada número: 1→"impar", 2→"par", 3→"impar".',
      },
    ],
  },

  {
    slug: 'comprensiones-anidadas',
    title: 'Comprensiones anidadas',
    module: 'Comprensión de listas y diccionarios',
    moduleNumber: 11,
    order: 50,
    description: 'Aprende a usar comprensiones dentro de otras comprensiones y cuándo evitar que el código se vuelva difícil de leer.',
    explanation: `Una **comprensión anidada** ocurre cuando pones una comprensión dentro de otra. Esto es útil para trabajar con estructuras de datos bidimensionales, como listas de listas (matrices).

**Caso más común: aplanar una lista de listas:**
\`\`\`python
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
plana = [n for fila in matriz for n in fila]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

**Cómo leerlo:** de izquierda a derecha, los \`for\` se ejecutan como bucles anidados en el mismo orden. El equivalente con bucles sería:
\`\`\`python
plana = []
for fila in matriz:
    for n in fila:
        plana.append(n)
\`\`\`

**Comprensión que genera listas de listas (matriz):**
\`\`\`python
tabla = [[i * j for j in range(1, 4)] for i in range(1, 4)]
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
\`\`\`

Aquí la comprensión exterior genera filas, y la interior genera los valores de cada fila.

**⚠️ El límite de legibilidad:**
Las comprensiones anidadas se vuelven difíciles de leer muy rápido. Una regla práctica: si tienes más de **dos** \`for\` o la lógica es compleja, es mejor escribir bucles explícitos.

\`\`\`python
# Esto es difícil de leer:
[x for sub in [a for a in datos if a] for x in sub if x > 0]

# Mejor: bucles explícitos con nombres descriptivos
resultado = []
for sub in datos:
    if sub:
        for x in sub:
            if x > 0:
                resultado.append(x)
\`\`\`

El código debe ser fácil de entender para quien lo lee, incluido tu yo del futuro.`,
    codeExample: `# ── Aplanar una lista de listas ─────────────────────────────
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
plana = [n for fila in matriz for n in fila]
print(plana)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Equivalente con bucles (para comparar)
plana_bucle = []
for fila in matriz:
    for n in fila:
        plana_bucle.append(n)
print(plana_bucle)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# ── Generar una matriz de multiplicación ────────────────────
tabla = [[i * j for j in range(1, 4)] for i in range(1, 4)]
for fila in tabla:
    print(fila)
# [1, 2, 3]
# [2, 4, 6]
# [3, 6, 9]

# ── Aplanar con filtro ───────────────────────────────────────
numeros = [[1, -2, 3], [-4, 5, 6], [7, -8, 9]]
positivos = [n for fila in numeros for n in fila if n > 0]
print(positivos)  # [1, 3, 5, 6, 7, 9]

# ── Combinar dos listas (producto cartesiano) ───────────────
letras = ['A', 'B']
numeros2 = [1, 2, 3]
pares = [(l, n) for l in letras for n in numeros2]
print(pares)
# [('A', 1), ('A', 2), ('A', 3), ('B', 1), ('B', 2), ('B', 3)]

# ── Cuándo NO usar comprensión anidada ──────────────────────
# Mejor usar bucles si la lógica es compleja:
datos = [[3, -1, 2], [], [5, 0, -4], [1]]
resultado = []
for grupo in datos:
    for valor in grupo:
        if valor > 0:
            resultado.append(valor * 2)
print(resultado)  # [6, 4, 10, 2]`,
    keyPoints: [
      'Sintaxis: `[expr for fila in matriz for elem in fila]` — los `for` van de izquierda a derecha como bucles anidados',
      'Útil para aplanar listas de listas y crear matrices',
      'La comprensión exterior genera la estructura externa; la interior genera los elementos internos',
      'Más de dos `for` o lógica compleja → mejor usar bucles explícitos',
      'Prioriza la legibilidad: código que otros (y tú en el futuro) puedan entender fácilmente',
      'Puedes combinar `for` anidados con filtros `if` al final',
    ],
    exercise: {
      description: 'Dada `equipos = [["Ana", "Luis"], ["Marta", "Pedro"], ["Sofía"]]`, crea una lista plana `jugadores` con todos los nombres de todos los equipos, pero solo si el nombre tiene más de 4 letras.',
      hint: 'Necesitas dos `for` (uno para equipos, otro para nombres) y un `if` para filtrar por longitud.',
    },
    quiz: [
      {
        question: '¿Qué produce `[n for fila in [[1,2],[3,4]] for n in fila]`?',
        options: ['[[1,2],[3,4]]', '[1, 2, 3, 4]', '[1, 3]', 'Error de sintaxis'],
        correctAnswer: '[1, 2, 3, 4]',
        correctFeedback: 'Correcto. La comprensión anidada "aplana" la lista de listas: primero itera sobre filas, luego sobre cada elemento de cada fila.',
        incorrectFeedback: 'Esta comprensión aplana la lista de listas. El primer `for` itera sobre `[[1,2],[3,4]]` obteniendo las filas `[1,2]` y `[3,4]`. El segundo `for` extrae cada elemento de cada fila.',
      },
      {
        question: '¿Cuál es el orden correcto de los `for` en una comprensión anidada para aplanar `[[a,b],[c,d]]`?',
        options: [
          '[x for x in fila for fila in lista]',
          '[x for fila in lista for x in fila]',
          '[fila for x in lista for fila in x]',
          '[x, fila for fila in lista for x in fila]',
        ],
        correctAnswer: '[x for fila in lista for x in fila]',
        correctFeedback: 'Correcto. El orden es igual que los bucles anidados: primero el bucle exterior (`for fila in lista`), luego el interior (`for x in fila`).',
        incorrectFeedback: 'Los `for` en una comprensión siguen el mismo orden que los bucles: primero el exterior. `for fila in lista` itera sobre las sub-listas, luego `for x in fila` itera sobre sus elementos.',
      },
      {
        question: '¿Qué genera `[[j for j in range(3)] for i in range(2)]`?',
        options: [
          '[0, 1, 2, 0, 1, 2]',
          '[[0, 1, 2], [0, 1, 2]]',
          '[[0, 0], [1, 1], [2, 2]]',
          'Error',
        ],
        correctAnswer: '[[0, 1, 2], [0, 1, 2]]',
        correctFeedback: 'Correcto. La comprensión exterior genera 2 filas (i=0,1). Cada fila es la comprensión interior `[0, 1, 2]`.',
        incorrectFeedback: 'La comprensión exterior (`for i in range(2)`) genera 2 elementos. Cada elemento es la comprensión interior `[j for j in range(3)]` = `[0, 1, 2]`. Resultado: `[[0,1,2], [0,1,2]]`.',
      },
      {
        question: '¿Cuándo es mejor usar bucles explícitos en lugar de comprensiones anidadas?',
        options: [
          'Nunca, las comprensiones siempre son más eficientes',
          'Cuando la lógica es compleja o hay más de dos niveles de anidamiento',
          'Solo cuando trabajas con matrices',
          'Cuando el resultado debe ser un diccionario',
        ],
        correctAnswer: 'Cuando la lógica es compleja o hay más de dos niveles de anidamiento',
        correctFeedback: 'Correcto. La legibilidad es prioritaria. Las comprensiones muy anidadas son difíciles de leer y mantener.',
        incorrectFeedback: 'Las comprensiones deben facilitar la lectura del código. Cuando se anidan demasiado o la lógica es compleja, los bucles explícitos son más claros y fáciles de depurar.',
      },
      {
        question: '¿Cuál es el equivalente en bucles de `[x for sub in datos for x in sub]`?',
        options: [
          'resultado = []\nfor x in datos:\n    resultado.append(sub)\n    for sub in x:\n        pass',
          'resultado = []\nfor sub in datos:\n    for x in sub:\n        resultado.append(x)',
          'resultado = []\nfor sub in datos:\n    resultado.append(sub)',
          'resultado = datos.flatten()',
        ],
        correctAnswer: 'resultado = []\nfor sub in datos:\n    for x in sub:\n        resultado.append(x)',
        correctFeedback: 'Correcto. Los `for` en la comprensión corresponden exactamente a los bucles anidados en el mismo orden.',
        incorrectFeedback: 'Los `for` en una comprensión anidada se traducen directamente a bucles en el mismo orden: primero `for sub in datos`, luego `for x in sub`, con `append(x)` al final.',
      },
      {
        question: '¿Qué imprime este código?\n```python\nm = [[1, 2], [3, 4]]\nresultado = [m[i][j] for i in range(2) for j in range(2)]\nprint(resultado)\n```',
        options: ['[[1, 2], [3, 4]]', '[1, 2, 3, 4]', '[1, 3, 2, 4]', 'Error de índice'],
        correctAnswer: '[1, 2, 3, 4]',
        correctFeedback: 'Correcto. Itera i=0,j=0→m[0][0]=1; i=0,j=1→m[0][1]=2; i=1,j=0→m[1][0]=3; i=1,j=1→m[1][1]=4.',
        incorrectFeedback: 'La comprensión recorre i=0,1 y para cada i recorre j=0,1. Accede a m[0][0]=1, m[0][1]=2, m[1][0]=3, m[1][1]=4. Resultado: [1, 2, 3, 4].',
      },
    ],
  },

  {
    slug: 'cuando-usar-comprehensions',
    title: 'Cuándo usar y cuándo evitar comprehensions',
    module: 'Comprensión de listas y diccionarios',
    moduleNumber: 11,
    order: 51,
    description: 'Aprende buenas prácticas para usar comprensiones sin sacrificar la claridad del código.',
    explanation: `Las comprensiones son una herramienta poderosa, pero como toda herramienta, hay momentos en que usarlas es la mejor opción y momentos en que es mejor no hacerlo.

**Cuándo SÍ usar comprensiones:**

✅ Transformaciones simples de una sola operación:
\`\`\`python
dobles = [x * 2 for x in numeros]
\`\`\`

✅ Filtrado directo:
\`\`\`python
mayores = [x for x in numeros if x > 10]
\`\`\`

✅ Crear diccionarios desde dos listas:
\`\`\`python
precios = {p: v for p, v in zip(productos, valores)}
\`\`\`

**Cuándo NO usar comprensiones:**

❌ Lógica compleja dentro de la expresión (mejor una función auxiliar o un bucle):
\`\`\`python
# Difícil de leer:
resultado = [calcular(x) if x > 0 and x % 2 == 0 else transformar(x) for x in datos if validar(x)]

# Más claro con un bucle:
resultado = []
for x in datos:
    if validar(x):
        if x > 0 and x % 2 == 0:
            resultado.append(calcular(x))
        else:
            resultado.append(transformar(x))
\`\`\`

❌ Efectos secundarios (no uses comprensiones solo para ejecutar código):
\`\`\`python
# MAL: usar comprensión solo por el efecto secundario
[print(x) for x in lista]  # ← antipatrón

# BIEN: usar un bucle cuando solo quieres el efecto
for x in lista:
    print(x)
\`\`\`

❌ Más de dos niveles de anidamiento (ya lo vimos, pero vale repetirlo):

**Regla de oro:** una comprensión debería caber en una línea de menos de ~80 caracteres y ser entendible a primera vista. Si dudas, usa un bucle.`,
    codeExample: `# ══ BUENOS USOS ══════════════════════════════════════════════

# ✅ Transformación simple
nombres = ["ana", "luis", "marta"]
capitalizados = [n.capitalize() for n in nombres]
print(capitalizados)  # ['Ana', 'Luis', 'Marta']

# ✅ Filtrado claro
edades = [12, 25, 18, 30, 15, 22]
adultos = [e for e in edades if e >= 18]
print(adultos)  # [25, 18, 30, 22]

# ✅ Comprensión de diccionario legible
frutas = ['manzana', 'banana', 'pera']
stock = {f: 0 for f in frutas}
print(stock)  # {'manzana': 0, 'banana': 0, 'pera': 0}


# ══ MALOS USOS Y ALTERNATIVAS ════════════════════════════════

# ❌ Comprensión con efectos secundarios
# [print(x) for x in range(5)]  ← No hagas esto

# ✅ Usa un bucle cuando quieres efectos secundarios
for x in range(5):
    print(x)

# ❌ Comprensión demasiado compleja (difícil de leer)
# r = [x**2 if x%2==0 else x**3 for x in range(10) if x > 2 and x != 7]

# ✅ Alternativa más legible con función auxiliar
def transformar(x):
    return x ** 2 if x % 2 == 0 else x ** 3

resultado = [transformar(x) for x in range(3, 10) if x != 7]
print(resultado)

# ✅ O directamente con bucle para máxima claridad
resultado2 = []
for x in range(3, 10):
    if x != 7:
        resultado2.append(transformar(x))`,
    keyPoints: [
      'Usa comprensiones para transformaciones y filtrados simples y directos',
      'Evítalas cuando la lógica es compleja: prefiere bucles o funciones auxiliares',
      'Nunca uses comprensiones solo por efectos secundarios (print, append a lista externa, etc.)',
      'La regla de oro: si no se entiende a primera vista, usa un bucle',
      'Las comprensiones deben caber en ~80 caracteres sin sacrificar claridad',
      'Un bucle explícito siempre es correcto; una comprensión es una mejora opcional cuando aumenta la claridad',
    ],
    exercise: {
      description: 'Tienes este código: `resultado = [procesar(item) for item in base_de_datos if item["activo"] and item["categoria"] in categorias_permitidas and item["precio"] < precio_maximo]`. Refactorízalo para que sea más legible usando un bucle y una función auxiliar.',
      hint: 'Extrae la condición a una función `es_valido(item)` y usa un bucle for normal con append.',
    },
    quiz: [
      {
        question: '¿Cuál de estos es un antipatrón (mal uso) de las comprensiones?',
        options: [
          '[x * 2 for x in numeros]',
          '[x for x in numeros if x > 0]',
          '[print(x) for x in numeros]',
          '{k: v for k, v in datos.items()}',
        ],
        correctAnswer: '[print(x) for x in numeros]',
        correctFeedback: 'Correcto. Usar una comprensión solo para el efecto secundario de `print` es un antipatrón. Las comprensiones deben usarse cuando necesitas el resultado como colección.',
        incorrectFeedback: 'Usar `print()` dentro de una comprensión es un antipatrón. `print()` devuelve `None`, así que la lista resultante sería `[None, None, ...]`. Para efectos secundarios usa un bucle `for` normal.',
      },
      {
        question: '¿Cuándo es MEJOR usar un bucle `for` en lugar de una comprensión?',
        options: [
          'Siempre, los bucles son más claros',
          'Nunca, las comprensiones son siempre superiores',
          'Cuando la lógica es compleja o hay múltiples efectos secundarios',
          'Solo cuando el resultado es un diccionario',
        ],
        correctAnswer: 'Cuando la lógica es compleja o hay múltiples efectos secundarios',
        correctFeedback: 'Correcto. Los bucles son más claros cuando hay lógica compleja, múltiples condiciones o efectos secundarios.',
        incorrectFeedback: 'Los bucles son preferibles cuando la lógica es compleja, cuando hay efectos secundarios (prints, actualizaciones de estado) o cuando el código resultante sería difícil de entender a primera vista.',
      },
      {
        question: '¿Qué problema tiene `[lista_global.append(x) for x in datos]`?',
        options: [
          'Es un error de sintaxis',
          'Crea una lista de None y el efecto secundario es confuso — mejor usar un bucle',
          'No funciona con listas globales',
          'Ninguno, es código perfectamente válido y recomendado',
        ],
        correctAnswer: 'Crea una lista de None y el efecto secundario es confuso — mejor usar un bucle',
        correctFeedback: 'Correcto. `.append()` devuelve `None`. La comprensión crea una lista `[None, None, ...]` que nadie usa, y el efecto secundario real (modificar `lista_global`) queda oculto.',
        incorrectFeedback: '`.append()` devuelve `None`, así que la comprensión crea una lista inútil de `None`. El efecto real (modificar `lista_global`) está oculto en un lugar donde no se espera. Es confuso y debe reemplazarse por un bucle `for`.',
      },
      {
        question: 'Una comprensión de lista es obligatoriamente más rápida que un bucle `for` equivalente. ¿Verdadero o falso?',
        options: [
          'Verdadero, siempre',
          'Falso, a veces los bucles pueden ser más rápidos',
          'Depende del sistema operativo',
          'Solo es más rápida si tiene menos de 100 elementos',
        ],
        correctAnswer: 'Falso, a veces los bucles pueden ser más rápidos',
        correctFeedback: 'Correcto. Aunque las comprensiones suelen ser más rápidas para transformaciones simples, para lógica compleja con llamadas a funciones caras, la diferencia puede ser mínima o incluso invertida.',
        incorrectFeedback: 'Las comprensiones son generalmente más rápidas para casos simples, pero no siempre. Para lógica compleja o con funciones costosas, la diferencia de rendimiento es mínima. La legibilidad debe tener prioridad sobre la optimización prematura.',
      },
      {
        question: '¿Cuál de estos ejemplos es el mejor uso de una comprensión?',
        options: [
          '[conectar_bd(x) and procesar(x) or guardar(x) for x in filas if validar_esquema(x) and verificar_permisos(x)]',
          '[x.strip() for x in lineas]',
          '[x for x in range(10000000)]',
          '[[] for _ in range(10)]',
        ],
        correctAnswer: '[x.strip() for x in lineas]',
        correctFeedback: 'Correcto. Es simple, claro y legible: aplica `.strip()` a cada línea. Eso es exactamente para lo que están diseñadas las comprensiones.',
        incorrectFeedback: 'La opción más clara y apropiada es `[x.strip() for x in lineas]`: una transformación simple y directa. La primera opción tiene demasiada lógica compleja. La tercera genera una lista enorme en memoria (mejor usar un generador). La cuarta es válida pero oscura.',
      },
      {
        question: '¿Cuál es la "regla de oro" para decidir si usar comprensión o bucle?',
        options: [
          'Si tiene más de 5 elementos, usa comprensión',
          'Si no se entiende a primera vista, usa un bucle',
          'Siempre usa comprensión para ser más pythónico',
          'Usa bucle si el resultado es una lista, comprensión si es un diccionario',
        ],
        correctAnswer: 'Si no se entiende a primera vista, usa un bucle',
        correctFeedback: 'Correcto. La claridad es lo más importante. Si la comprensión requiere esfuerzo para entenderse, un bucle explícito es la mejor elección.',
        incorrectFeedback: 'La regla más importante es la legibilidad. Si una comprensión requiere que el lector se detenga a descifrarla, un bucle explícito es mejor. El código se escribe una vez pero se lee muchas veces.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module11: Module = {
  number: 11,
  title: 'Comprensión de listas y diccionarios',
  level: 'intermedio',
  lessons: lessonsModule11,
}
