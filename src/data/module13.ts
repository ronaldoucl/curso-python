import type { Lesson } from '@/types'

export const lessonsModule13: Lesson[] = [
  {
    slug: 'funciones-lambda',
    title: 'Funciones lambda',
    module: 'Lambda, map, filter y sorted',
    moduleNumber: 13,
    order: 57,
    description: 'Aprende qué son las funciones lambda y cuándo usarlas para operaciones simples.',
    explanation: `Una **función lambda** es una función anónima (sin nombre) definida en una sola línea. Se usan cuando necesitas una función pequeña de forma puntual, especialmente como argumento de otra función.

**Sintaxis:**
\`\`\`
lambda parametros: expresion
\`\`\`

**Comparación con una función normal:**
\`\`\`python
# Función normal
def cuadrado(x):
    return x ** 2

# Equivalente con lambda
cuadrado = lambda x: x ** 2

# Ambas se usan igual
cuadrado(4)  # 16
\`\`\`

**Características importantes:**
- Solo pueden contener **una expresión** (no múltiples líneas)
- La expresión se evalúa y devuelve automáticamente (no necesita \`return\`)
- Pueden tener cualquier cantidad de parámetros
- Son anónimas por naturaleza; si necesitas reutilizarla, mejor usa \`def\`

**¿Cuándo usar lambda?**

✅ Como argumento rápido en \`sorted()\`, \`map()\`, \`filter()\`:
\`\`\`python
nombres = ["Carlos", "Ana", "Beatriz"]
sorted(nombres, key=lambda n: len(n))
# ['Ana', 'Carlos', 'Beatriz']
\`\`\`

❌ Para lógica compleja o que necesitas reutilizar → usa \`def\`:
\`\`\`python
# Mal: lambda con lógica compleja
procesar = lambda x: x ** 2 if x > 0 else abs(x) * 3 + 1

# Mejor:
def procesar(x):
    if x > 0:
        return x ** 2
    return abs(x) * 3 + 1
\`\`\``,
    codeExample: `# Lambda básica con un parámetro
cuadrado = lambda x: x ** 2
print(cuadrado(5))   # 25
print(cuadrado(10))  # 100

# Lambda con múltiples parámetros
sumar = lambda a, b: a + b
print(sumar(3, 4))   # 7

multiplicar = lambda a, b, c: a * b * c
print(multiplicar(2, 3, 4))  # 24

# Lambda como argumento de sorted()
nombres = ["Carlos", "Ana", "Beatriz", "David"]
por_longitud = sorted(nombres, key=lambda n: len(n))
print(por_longitud)  # ['Ana', 'Carlos', 'David', 'Beatriz']

# Lambda para ordenar por último carácter
por_ultima_letra = sorted(nombres, key=lambda n: n[-1])
print(por_ultima_letra)

# Lambda en diccionarios (selector dinámico)
operaciones = {
    'sumar':    lambda a, b: a + b,
    'restar':   lambda a, b: a - b,
    'producto': lambda a, b: a * b,
}

op = 'sumar'
print(operaciones[op](10, 5))   # 15

op = 'producto'
print(operaciones[op](4, 3))    # 12

# Lambda inmediata (IIFE — poco común pero válida)
resultado = (lambda x, y: x ** y)(2, 8)
print(resultado)  # 256`,
    keyPoints: [
      'Sintaxis: `lambda parametros: expresion` — sin `return` explícito',
      'Solo pueden contener UNA expresión; no admiten múltiples líneas ni sentencias',
      'Son anónimas: si necesitas reutilizarlas, usa `def` con nombre',
      'Úsalas principalmente como argumento en `sorted()`, `map()`, `filter()`',
      'No abuses: si la lógica es compleja, un `def` es más legible',
      'Pueden tener cero, uno o varios parámetros separados por coma',
    ],
    exercise: {
      description: 'Tienes `productos = [{"nombre": "laptop", "precio": 1500}, {"nombre": "mouse", "precio": 25}, {"nombre": "monitor", "precio": 400}]`. Usa `sorted()` con una lambda para ordenar los productos por precio de menor a mayor.',
      hint: 'La `key` de `sorted()` debe ser `lambda p: p["precio"]`.',
    },
    quiz: [
      {
        question: '¿Cuál es la sintaxis correcta de una lambda que eleva x al cubo?',
        options: [
          'lambda x: return x ** 3',
          'lambda x: x ** 3',
          'def lambda(x): x ** 3',
          'lambda(x) => x ** 3',
        ],
        correctAnswer: 'lambda x: x ** 3',
        correctFeedback: 'Correcto. En una lambda no se usa `return`; la expresión se devuelve automáticamente.',
        incorrectFeedback: 'La sintaxis es `lambda parametros: expresion`. No lleva `return` ni `def`. La expresión después de `:` se devuelve automáticamente.',
      },
      {
        question: '¿Qué produce `(lambda a, b: a + b)(3, 7)`?',
        options: ['Error de sintaxis', '3', '7', '10'],
        correctAnswer: '10',
        correctFeedback: 'Correcto. La lambda se define y se llama inmediatamente con `a=3` y `b=7`. Devuelve `3 + 7 = 10`.',
        incorrectFeedback: 'Se crea una lambda con dos parámetros y se invoca inmediatamente con `3` y `7`. `3 + 7 = 10`.',
      },
      {
        question: '¿Cuántas expresiones puede contener una función lambda?',
        options: ['Ilimitadas', 'Máximo 3', 'Solo una', 'Depende de la versión de Python'],
        correctAnswer: 'Solo una',
        correctFeedback: 'Correcto. Las lambdas están limitadas a una sola expresión. Para múltiples sentencias, debes usar `def`.',
        incorrectFeedback: 'Las funciones lambda solo pueden contener UNA expresión. Si necesitas múltiples líneas, condiciones complejas o bucles, usa una función `def` normal.',
      },
      {
        question: '¿Cuándo es preferible usar `def` en lugar de `lambda`?',
        options: [
          'Cuando la función tiene más de un parámetro',
          'Cuando la lógica es compleja o necesitas reutilizar la función con un nombre claro',
          'Siempre: `def` es siempre mejor que lambda',
          'Cuando la función devuelve un número',
        ],
        correctAnswer: 'Cuando la lógica es compleja o necesitas reutilizar la función con un nombre claro',
        correctFeedback: 'Correcto. Las lambdas son para uso puntual y operaciones simples. Para lógica compleja o funciones reutilizables, `def` es más legible y mantenible.',
        incorrectFeedback: 'Usa `def` cuando la función será reutilizada (necesita un nombre descriptivo) o cuando la lógica es suficientemente compleja que no cabe legiblemente en una línea.',
      },
      {
        question: '¿Qué hace `sorted(["z", "a", "m"], key=lambda c: c)`?',
        options: [
          'Devuelve ["z", "a", "m"] sin cambios',
          'Devuelve ["a", "m", "z"]',
          'Lanza un TypeError',
          'Devuelve ["z", "m", "a"]',
        ],
        correctAnswer: 'Devuelve ["a", "m", "z"]',
        correctFeedback: 'Correcto. La lambda `lambda c: c` es la identidad: ordena por el propio valor, lo que equivale a ordenar alfabéticamente.',
        incorrectFeedback: 'La lambda `lambda c: c` devuelve el propio elemento, así que `sorted` ordena por el valor de cada carácter. Alfabéticamente: "a" < "m" < "z".',
      },
      {
        question: '¿Qué imprime este código?\n```python\nops = [lambda x: x+1, lambda x: x*2, lambda x: x**2]\nresultado = [f(3) for f in ops]\nprint(resultado)\n```',
        options: ['[4, 6, 9]', '[3, 3, 3]', '[1, 2, 2]', 'Error'],
        correctAnswer: '[4, 6, 9]',
        correctFeedback: 'Correcto. Aplica cada lambda a 3: 3+1=4, 3*2=6, 3**2=9.',
        incorrectFeedback: 'Se aplica cada función de la lista al valor 3: `3+1=4`, `3*2=6`, `3**2=9`. Las lambdas se pueden almacenar en listas y llamar como cualquier función.',
      },
    ],
  },

  {
    slug: 'usar-map',
    title: 'Usar map()',
    module: 'Lambda, map, filter y sorted',
    moduleNumber: 13,
    order: 58,
    description: 'Aprende a transformar elementos de una colección usando map().',
    explanation: `\`map(funcion, iterable)\` aplica una función a cada elemento de un iterable y devuelve un **objeto map** (perezoso). Para obtener una lista, lo conviertes con \`list()\`.

**Sintaxis:**
\`\`\`python
map(funcion, iterable)
\`\`\`

**Ejemplo básico:**
\`\`\`python
numeros = [1, 2, 3, 4, 5]
dobles = list(map(lambda x: x * 2, numeros))
# [2, 4, 6, 8, 10]
\`\`\`

**¿Por qué devuelve un objeto map y no una lista directamente?**
Porque \`map\` es **perezoso** (lazy): no calcula los valores hasta que los necesitas. Esto ahorra memoria cuando trabajas con colecciones muy grandes o cuando solo necesitas iterar una vez.

**map() con función nombrada:**
\`\`\`python
def al_cuadrado(x):
    return x ** 2

cuadrados = list(map(al_cuadrado, [1, 2, 3, 4]))
# [1, 4, 9, 16]
\`\`\`

**map() con múltiples iterables:**
\`\`\`python
a = [1, 2, 3]
b = [10, 20, 30]
sumas = list(map(lambda x, y: x + y, a, b))
# [11, 22, 33]
\`\`\`

**map() vs comprensión de lista:**
En Python moderno, las comprensiones de lista son preferidas sobre \`map()\` por ser más legibles:
\`\`\`python
# map (menos legible para principiantes)
list(map(lambda x: x * 2, numeros))

# comprensión (más clara)
[x * 2 for x in numeros]
\`\`\`

\`map()\` sigue siendo útil cuando la función ya existe y tiene nombre, evitando la necesidad de lambda.`,
    codeExample: `# map() básico con lambda
numeros = [1, 2, 3, 4, 5]
dobles = list(map(lambda x: x * 2, numeros))
print(dobles)   # [2, 4, 6, 8, 10]

# map() con función nombrada (más limpio)
def celsius_a_fahrenheit(c):
    return c * 9/5 + 32

temperaturas_c = [0, 20, 37, 100]
temperaturas_f = list(map(celsius_a_fahrenheit, temperaturas_c))
print(temperaturas_f)  # [32.0, 68.0, 98.6, 212.0]

# map() sobre strings
palabras = ['  hola  ', '  mundo  ', '  python  ']
limpias = list(map(str.strip, palabras))
print(limpias)  # ['hola', 'mundo', 'python']

# str.upper es una función, también funciona con map
nombres = ['ana', 'luis', 'marta']
mayusculas = list(map(str.upper, nombres))
print(mayusculas)  # ['ANA', 'LUIS', 'MARTA']

# map() con múltiples iterables
precios = [100, 250, 80]
descuentos = [0.1, 0.2, 0.05]
precios_finales = list(map(lambda p, d: round(p * (1 - d), 2), precios, descuentos))
print(precios_finales)  # [90.0, 200.0, 76.0]

# Comparación: map vs comprensión
nums = range(1, 6)
# Con map + lambda
con_map = list(map(lambda x: x ** 2, nums))

# Con comprensión (más idiomático en Python moderno)
con_comp = [x ** 2 for x in range(1, 6)]

print(con_map)   # [1, 4, 9, 16, 25]
print(con_comp)  # [1, 4, 9, 16, 25]`,
    keyPoints: [
      '`map(funcion, iterable)` aplica una función a cada elemento del iterable',
      'Devuelve un objeto map perezoso (lazy); convierte con `list()` para obtener todos los valores',
      'Acepta múltiples iterables: `map(f, a, b)` aplica `f(a[i], b[i])`',
      'Con funciones nombradas como `str.strip` o `str.upper` es más legible que con lambda',
      'Las comprensiones de lista son preferidas sobre `map` + lambda en Python moderno',
      '`map` sigue siendo útil cuando ya tienes una función nombrada que quieres aplicar',
    ],
    exercise: {
      description: 'Tienes `precios_str = ["$100", "$250", "$80", "$320"]`. Usa `map()` para convertir cada precio a un número entero (removiendo el símbolo "$"). Resultado esperado: `[100, 250, 80, 320]`.',
      hint: 'Puedes crear una función `def limpiar(s): return int(s[1:])` y pasarla a `map()`.',
    },
    quiz: [
      {
        question: '¿Qué tipo de objeto devuelve `map(funcion, lista)` directamente?',
        options: ['list', 'tuple', 'map object (lazy)', 'generator'],
        correctAnswer: 'map object (lazy)',
        correctFeedback: 'Correcto. `map()` devuelve un objeto perezoso. Necesitas `list(map(...))` para obtener una lista.',
        incorrectFeedback: '`map()` devuelve un objeto map perezoso (lazy iterator). Calcula los valores solo cuando los necesitas. Para obtener todos los valores como lista, envuélvelo en `list()`.',
      },
      {
        question: '¿Qué produce `list(map(lambda x: x**2, [1, 2, 3]))`?',
        options: ['[1, 2, 3]', '[1, 4, 9]', '[2, 4, 6]', 'Error'],
        correctAnswer: '[1, 4, 9]',
        correctFeedback: 'Correcto. La lambda eleva al cuadrado: 1²=1, 2²=4, 3²=9.',
        incorrectFeedback: 'La lambda `lambda x: x**2` eleva cada elemento al cuadrado. Aplicada a [1,2,3]: 1²=1, 2²=4, 3²=9.',
      },
      {
        question: '¿Cuál de estas opciones es equivalente a `list(map(lambda x: x.upper(), palabras))`?',
        options: [
          'list(map(str.upper, palabras))',
          'list(map(upper, palabras))',
          'palabras.map(str.upper)',
          'apply(str.upper, palabras)',
        ],
        correctAnswer: 'list(map(str.upper, palabras))',
        correctFeedback: 'Correcto. `str.upper` es el método upper sin instancia; `map` lo aplica como función a cada elemento.',
        incorrectFeedback: '`str.upper` es una referencia al método `upper` de la clase `str`. Cuando se pasa a `map`, funciona igual que `lambda x: x.upper()` pero es más limpio.',
      },
      {
        question: '¿Cómo se usa `map()` con dos listas a la vez?',
        options: [
          'map(f, a, b) donde f recibe dos argumentos',
          'map(f, a) + map(f, b)',
          'map(f, zip(a, b))',
          'No es posible',
        ],
        correctAnswer: 'map(f, a, b) donde f recibe dos argumentos',
        correctFeedback: 'Correcto. `map(f, a, b)` aplica `f(a[i], b[i])` para cada par de elementos. La función debe aceptar dos parámetros.',
        incorrectFeedback: '`map()` puede recibir múltiples iterables. Con `map(f, a, b)`, en cada iteración llama a `f(a[i], b[i])`. La función debe tener tantos parámetros como iterables.',
      },
      {
        question: '¿Cuándo es preferible usar comprensión de lista en lugar de `map()`?',
        options: [
          'Nunca, map siempre es más eficiente',
          'Cuando se necesita una lambda para la transformación',
          'Solo con listas de números',
          'Siempre que se trabaje con strings',
        ],
        correctAnswer: 'Cuando se necesita una lambda para la transformación',
        correctFeedback: 'Correcto. `[x * 2 for x in nums]` es más legible que `list(map(lambda x: x * 2, nums))`. Pero `map(str.upper, lista)` es igual de claro y no necesita lambda.',
        incorrectFeedback: 'En Python moderno, se prefieren las comprensiones cuando se necesita una lambda ad-hoc. `map()` es más limpio cuando ya existe una función nombrada: `map(str.strip, textos)` vs `[t.strip() for t in textos]`.',
      },
      {
        question: '¿Qué imprime este código?\n```python\na = [1, 2, 3]\nb = [10, 20, 30]\nresultado = list(map(lambda x, y: x + y, a, b))\nprint(resultado)\n```',
        options: ['[1, 2, 3, 10, 20, 30]', '[11, 22, 33]', '[10, 20, 30]', 'Error'],
        correctAnswer: '[11, 22, 33]',
        correctFeedback: 'Correcto. `map` toma un elemento de cada lista: 1+10=11, 2+20=22, 3+30=33.',
        incorrectFeedback: '`map(lambda x, y: x + y, a, b)` empareja los elementos: (1,10), (2,20), (3,30). La lambda los suma: 11, 22, 33.',
      },
    ],
  },

  {
    slug: 'usar-filter',
    title: 'Usar filter()',
    module: 'Lambda, map, filter y sorted',
    moduleNumber: 13,
    order: 59,
    description: 'Aprende a filtrar elementos de una colección usando filter().',
    explanation: `\`filter(funcion, iterable)\` filtra elementos de un iterable: solo mantiene aquellos para los que la función devuelve \`True\`. Como \`map()\`, devuelve un objeto perezoso.

**Sintaxis:**
\`\`\`python
filter(funcion, iterable)
\`\`\`

La función debe devolver un valor booleano (o que se evalúe como verdadero/falso).

**Ejemplo:**
\`\`\`python
numeros = [1, 2, 3, 4, 5, 6, 7, 8]
pares = list(filter(lambda x: x % 2 == 0, numeros))
# [2, 4, 6, 8]
\`\`\`

**filter() con None como función:**
Si pasas \`None\` como función, filter elimina los valores falsy (False, 0, "", None, [], etc.):
\`\`\`python
datos = [1, 0, "hola", "", None, True, False, []]
filtrados = list(filter(None, datos))
# [1, "hola", True]
\`\`\`

**filter() vs comprensión con condición:**
\`\`\`python
numeros = range(1, 10)

# filter (menos legible con lambda)
pares = list(filter(lambda x: x % 2 == 0, numeros))

# comprensión (más clara)
pares = [x for x in numeros if x % 2 == 0]
\`\`\`

**Cuándo usar filter():**
- Cuando ya tienes una función de validación definida: \`filter(es_valido, datos)\`
- Para eliminar valores falsy con \`filter(None, datos)\`
- En combinación con \`map()\` en pipelines de transformación`,
    codeExample: `# filter() básico con lambda
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)   # [2, 4, 6, 8, 10]

# filter() con función nombrada
def es_positivo(n):
    return n > 0

valores = [-3, 5, -1, 8, 0, -2, 4]
positivos = list(filter(es_positivo, valores))
print(positivos)   # [5, 8, 4]

# filter() para limpiar strings vacíos
lineas = ["hola", "", "mundo", "  ", "python", ""]
no_vacias = list(filter(lambda s: s.strip(), lineas))
print(no_vacias)   # ['hola', 'mundo', 'python']

# filter(None, ...) elimina todos los valores falsy
datos = [1, 0, "hola", "", None, True, False, [], [1, 2]]
verdaderos = list(filter(None, datos))
print(verdaderos)  # [1, 'hola', True, [1, 2]]

# Combinar filter y map: filtrar y luego transformar
precios = [50, 120, 30, 200, 15, 80]
# Solo los precios > 60, convertidos con 10% de descuento
caros_con_descuento = list(map(
    lambda p: round(p * 0.9, 2),
    filter(lambda p: p > 60, precios)
))
print(caros_con_descuento)  # [108.0, 180.0, 72.0]

# Equivalente más legible con comprensión:
resultado = [round(p * 0.9, 2) for p in precios if p > 60]
print(resultado)   # [108.0, 180.0, 72.0]`,
    keyPoints: [
      '`filter(funcion, iterable)` mantiene solo los elementos para los que la función devuelve `True`',
      'Devuelve un objeto perezoso; usa `list()` para materializarlo',
      '`filter(None, iterable)` elimina todos los valores falsy: `0`, `""`, `None`, `[]`, `False`',
      'Es más limpio con funciones nombradas: `filter(es_valido, datos)`',
      'Para filtrado simple, las comprensiones con `if` suelen ser más legibles',
      'Combina bien con `map()` para pipelines de datos: filtrar primero, luego transformar',
    ],
    exercise: {
      description: 'Tienes `usuarios = [{"nombre": "Ana", "activo": True}, {"nombre": "Luis", "activo": False}, {"nombre": "Marta", "activo": True}]`. Usa `filter()` para obtener solo los usuarios activos, luego usa `map()` para extraer solo sus nombres.',
      hint: 'Encadena `filter` (con `lambda u: u["activo"]`) y luego `map` (con `lambda u: u["nombre"]`).',
    },
    quiz: [
      {
        question: '¿Qué produce `list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))`?',
        options: ['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', '[True, True]'],
        correctAnswer: '[4, 5]',
        correctFeedback: 'Correcto. Solo los elementos mayores a 3 pasan el filtro: 4 y 5.',
        incorrectFeedback: 'El filtro `x > 3` es True para 4 y 5. Los elementos 1, 2 y 3 son descartados.',
      },
      {
        question: '¿Qué hace `filter(None, [0, 1, "", "hola", None, True])`?',
        options: [
          'Filtra solo los None',
          'Elimina los valores falsy (0, "", None) y mantiene los truthy',
          'Devuelve todos los elementos sin cambios',
          'Lanza un TypeError',
        ],
        correctAnswer: 'Elimina los valores falsy (0, "", None) y mantiene los truthy',
        correctFeedback: 'Correcto. `filter(None, ...)` usa la función identidad: mantiene los elementos que son truthy y elimina los falsy.',
        incorrectFeedback: 'Cuando se pasa `None` como función, `filter` usa el valor de verdad de cada elemento. Elimina 0, "" y None (falsy) y mantiene 1, "hola" y True (truthy).',
      },
      {
        question: '¿Cuál es equivalente a `list(filter(lambda x: x % 2 == 0, nums))`?',
        options: [
          '[x for x in nums if x % 2 == 0]',
          '[x if x % 2 == 0 for x in nums]',
          '[x % 2 == 0 for x in nums]',
          'list(map(lambda x: x % 2 == 0, nums))',
        ],
        correctAnswer: '[x for x in nums if x % 2 == 0]',
        correctFeedback: 'Correcto. La comprensión con `if` al final es el equivalente más legible de `filter` + lambda.',
        incorrectFeedback: 'La comprensión `[x for x in nums if x % 2 == 0]` filtra los pares igual que `filter(lambda x: x % 2 == 0, nums)`. La tercera opción crearía una lista de booleanos, no de números.',
      },
      {
        question: '¿Cuándo tiene más sentido usar `filter()` con una función nombrada en lugar de una lambda?',
        options: [
          'Nunca, lambda siempre es más claro',
          'Cuando la función de validación ya existe y es reutilizable',
          'Solo con números',
          'Cuando el iterable tiene más de 100 elementos',
        ],
        correctAnswer: 'Cuando la función de validación ya existe y es reutilizable',
        correctFeedback: 'Correcto. `filter(es_email_valido, correos)` es más legible que `filter(lambda e: "@" in e and "." in e, correos)`.',
        incorrectFeedback: 'Usar una función nombrada (`filter(es_valido, datos)`) es más legible cuando la lógica de validación ya está encapsulada. Para validaciones simples de un solo uso, la comprensión suele ser más clara.',
      },
      {
        question: '¿Qué imprime este código?\n```python\nnombres = ["Ana", "Bo", "Carlos", "Al"]\nlargos = list(filter(lambda n: len(n) > 3, nombres))\nprint(largos)\n```',
        options: ['["Ana", "Bo", "Al"]', '["Carlos"]', '["Ana", "Carlos"]', 'Error'],
        correctAnswer: '["Carlos"]',
        correctFeedback: 'Correcto. "Ana"=3, "Bo"=2, "Carlos"=6, "Al"=2. Solo "Carlos" supera los 3 caracteres.',
        incorrectFeedback: '`len(n) > 3` significa ESTRICTAMENTE más de 3. "Ana" tiene exactamente 3 (no pasa), "Bo" tiene 2, "Al" tiene 2. Solo "Carlos" con 6 caracteres supera el límite.',
      },
      {
        question: '¿Qué devuelve `filter(lambda x: x, [])` convertido a lista?',
        options: ['None', '[]', 'Error', '[False]'],
        correctAnswer: '[]',
        correctFeedback: 'Correcto. Si el iterable está vacío, `filter` devuelve un iterador vacío que se convierte en `[]`.',
        incorrectFeedback: 'Si el iterable de entrada está vacío, no hay nada que filtrar. El resultado es un iterador vacío que `list()` convierte en `[]`.',
      },
    ],
  },

  {
    slug: 'usar-sorted',
    title: 'Usar sorted()',
    module: 'Lambda, map, filter y sorted',
    moduleNumber: 13,
    order: 60,
    description: 'Aprende a ordenar listas, diccionarios y objetos usando sorted() y key.',
    explanation: `\`sorted(iterable, key=None, reverse=False)\` devuelve una **nueva lista** ordenada. A diferencia de \`.sort()\` (que modifica en lugar), \`sorted()\` no altera el original.

**Parámetros:**
- \`iterable\`: lo que quieres ordenar
- \`key\`: función que extrae el valor de comparación de cada elemento
- \`reverse=True\`: ordena de mayor a menor

**Ordenar listas simples:**
\`\`\`python
sorted([3, 1, 4, 1, 5, 9])   # [1, 1, 3, 4, 5, 9]
sorted("python")              # ['h', 'n', 'o', 'p', 't', 'y']
\`\`\`

**El parámetro key:**
Es el corazón de \`sorted()\`. Acepta una función que se aplica a cada elemento para decidir su posición:
\`\`\`python
# Ordenar strings por longitud
palabras = ["banana", "fig", "apple", "cherry"]
sorted(palabras, key=len)
# ['fig', 'apple', 'banana', 'cherry']

# Ordenar por múltiple criterio con tuplas
datos = [("Ana", 30), ("Luis", 25), ("Marta", 30)]
sorted(datos, key=lambda x: (x[1], x[0]))
# [("Luis", 25), ("Ana", 30), ("Marta", 30)] — por edad, luego nombre
\`\`\`

**Ordenar diccionarios:**
\`\`\`python
precios = {"manzana": 2, "banana": 1, "cereza": 3}

# Ordenar por valor
sorted(precios.items(), key=lambda x: x[1])
# [("banana", 1), ("manzana", 2), ("cereza", 3)]
\`\`\`

**sorted() vs .sort():**
- \`sorted(lista)\` → devuelve una lista nueva, el original no cambia
- \`lista.sort()\` → modifica la lista en lugar, devuelve None`,
    codeExample: `# sorted() básico
numeros = [3, 1, 4, 1, 5, 9, 2, 6]
asc = sorted(numeros)
desc = sorted(numeros, reverse=True)
print(asc)   # [1, 1, 2, 3, 4, 5, 6, 9]
print(desc)  # [9, 6, 5, 4, 3, 2, 1, 1]
print(numeros)  # [3, 1, 4, 1, 5, 9, 2, 6] ← no cambió

# key=len para ordenar por longitud
frutas = ["banana", "kiwi", "manzana", "uva", "pera"]
por_longitud = sorted(frutas, key=len)
print(por_longitud)  # ['kiwi', 'uva', 'pera', 'banana', 'manzana']

# key con lambda
personas = [
    {"nombre": "Carlos", "edad": 35},
    {"nombre": "Ana", "edad": 28},
    {"nombre": "Luis", "edad": 28},
    {"nombre": "Marta", "edad": 22},
]
# Por edad ascendente
por_edad = sorted(personas, key=lambda p: p["edad"])
for p in por_edad:
    print(f"{p['nombre']}: {p['edad']}")

# Ordenar por múltiple criterio: edad asc, luego nombre asc
por_edad_nombre = sorted(personas, key=lambda p: (p["edad"], p["nombre"]))
for p in por_edad_nombre:
    print(f"{p['nombre']}: {p['edad']}")

# Ordenar diccionario por valor
stock = {"manzana": 50, "banana": 20, "cereza": 100, "uva": 35}
ordenado = sorted(stock.items(), key=lambda x: x[1])
print(ordenado)  # [('banana', 20), ('uva', 35), ('manzana', 50), ('cereza', 100)]

# Diferencia entre sorted() y .sort()
lista_orig = [3, 1, 2]
lista_nueva = sorted(lista_orig)   # nueva lista
lista_orig.sort()                   # modifica en lugar (devuelve None)`,
    keyPoints: [
      '`sorted()` devuelve una NUEVA lista; el original no cambia. `.sort()` modifica en lugar.',
      'El parámetro `key` acepta una función que extrae el criterio de comparación',
      '`reverse=True` invierte el orden',
      'Para ordenar por múltiples criterios, la key puede devolver una tupla',
      'Puedes pasar funciones nombradas como `len`, `str.lower` como key sin lambda',
      'Funciona con cualquier iterable, no solo listas',
    ],
    exercise: {
      description: 'Tienes `empleados = [{"nombre": "Luis", "salario": 35000, "dept": "IT"}, {"nombre": "Ana", "salario": 42000, "dept": "Ventas"}, {"nombre": "Pedro", "salario": 35000, "dept": "IT"}, {"nombre": "Marta", "salario": 28000, "dept": "IT"}]`. Ordénalos por salario descendente, y si empatan, por nombre alfabético.',
      hint: 'La key puede devolver una tupla: `lambda e: (-e["salario"], e["nombre"])`. El negativo invierte el orden numérico.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `sorted(lista)` y `lista.sort()`?',
        options: [
          'No hay diferencia, son idénticos',
          '`sorted()` devuelve una nueva lista; `.sort()` modifica la original y devuelve None',
          '`sorted()` solo funciona con números; `.sort()` con cualquier tipo',
          '`.sort()` devuelve una nueva lista; `sorted()` modifica la original',
        ],
        correctAnswer: '`sorted()` devuelve una nueva lista; `.sort()` modifica la original y devuelve None',
        correctFeedback: 'Correcto. Esta diferencia es crucial: `sorted()` es seguro (no altera el original), `.sort()` modifica en lugar.',
        incorrectFeedback: '`sorted()` siempre devuelve una nueva lista y deja el original intacto. `.sort()` modifica la lista en lugar y devuelve `None`, lo que causa bugs si intentas hacer `lista = lista.sort()`.',
      },
      {
        question: '¿Qué produce `sorted(["banana", "fig", "apple"], key=len)`?',
        options: [
          '["apple", "banana", "fig"]',
          '["fig", "apple", "banana"]',
          '["banana", "fig", "apple"]',
          'Error',
        ],
        correctAnswer: '["fig", "apple", "banana"]',
        correctFeedback: 'Correcto. `len("fig")=3`, `len("apple")=5`, `len("banana")=6`. De menor a mayor longitud.',
        incorrectFeedback: '`key=len` ordena por longitud de cada string. "fig"=3, "apple"=5, "banana"=6. Orden: ["fig", "apple", "banana"].',
      },
      {
        question: '¿Qué imprime `sorted([1, 2, 3], reverse=True)`?',
        options: ['[1, 2, 3]', '[3, 2, 1]', '[3, 1, 2]', 'Error'],
        correctAnswer: '[3, 2, 1]',
        correctFeedback: 'Correcto. `reverse=True` invierte el orden, dando de mayor a menor.',
        incorrectFeedback: '`reverse=True` hace que la lista se ordene de mayor a menor. [1, 2, 3] ordenado de forma descendente es [3, 2, 1].',
      },
      {
        question: 'Quieres ordenar una lista de dicts por el campo "precio". ¿Cuál es la forma correcta?',
        options: [
          'sorted(lista, precio)',
          'sorted(lista, key="precio")',
          'sorted(lista, key=lambda x: x["precio"])',
          'lista.sort(key=precio)',
        ],
        correctAnswer: 'sorted(lista, key=lambda x: x["precio"])',
        correctFeedback: 'Correcto. La `key` debe ser una función que extraiga el valor de comparación de cada elemento.',
        incorrectFeedback: 'La `key` debe ser una función (no un string). `lambda x: x["precio"]` recibe cada dict y devuelve el valor del campo "precio" para comparar.',
      },
      {
        question: '¿Cómo ordenas una lista de tuplas `(nombre, edad)` primero por edad y luego por nombre?',
        options: [
          'sorted(lista, key=lambda x: x[0], x[1])',
          'sorted(lista, key=lambda x: (x[1], x[0]))',
          'sorted(lista, key=lambda x: x[1] and x[0])',
          'sorted(lista, key1=lambda x: x[1], key2=lambda x: x[0])',
        ],
        correctAnswer: 'sorted(lista, key=lambda x: (x[1], x[0]))',
        correctFeedback: 'Correcto. Devolver una tupla como key ordena primero por el primer elemento de la tupla, luego por el segundo cuando hay empate.',
        incorrectFeedback: 'Para ordenar por múltiples criterios, la key devuelve una tupla. Python compara tuplas elemento a elemento: primero por `x[1]` (edad), y en caso de empate por `x[0]` (nombre).',
      },
      {
        question: '¿Qué bug tiene este código?\n```python\ndef ordenar(lista):\n    return lista.sort()\n\nresultado = ordenar([3, 1, 2])\nprint(resultado)\n```',
        options: [
          'No hay bug, imprime [1, 2, 3]',
          '`lista.sort()` devuelve None, así que `resultado` es None',
          'TypeError: sort() no existe en listas',
          'Imprime [3, 1, 2] porque sort no funciona',
        ],
        correctAnswer: '`lista.sort()` devuelve None, así que `resultado` es None',
        correctFeedback: 'Correcto. Este es un error muy común. `.sort()` modifica la lista en lugar y devuelve `None`. Para retornar una lista ordenada, usa `return sorted(lista)`.',
        incorrectFeedback: '`.sort()` modifica la lista en lugar y devuelve `None`. La función retorna `None` y `resultado` es `None`. El bug se arregla con `return sorted(lista)` que SÍ devuelve la lista nueva ordenada.',
      },
    ],
  },

  {
    slug: 'lambda-map-filter-sorted',
    title: 'Lambda con sorted, map y filter',
    module: 'Lambda, map, filter y sorted',
    moduleNumber: 13,
    order: 61,
    description: 'Aprende a combinar lambda con sorted(), map() y filter() para resolver problemas prácticos.',
    explanation: `Las lambdas brillan cuando se combinan con \`sorted()\`, \`map()\` y \`filter()\`. Juntos forman un mini-sistema de procesamiento de datos que es muy expresivo.

**Pipeline de datos:**
Puedes encadenar \`filter\` + \`map\` + \`sorted\` para procesar colecciones en pasos:

\`\`\`python
datos = [
    {"nombre": "Ana", "puntaje": 85, "activo": True},
    {"nombre": "Luis", "puntaje": 42, "activo": False},
    {"nombre": "Marta", "puntaje": 91, "activo": True},
    {"nombre": "Carlos", "puntaje": 67, "activo": True},
]

# 1. Filtrar activos
# 2. Extraer nombre y puntaje
# 3. Ordenar por puntaje descendente
resultado = sorted(
    map(
        lambda d: (d["nombre"], d["puntaje"]),
        filter(lambda d: d["activo"], datos)
    ),
    key=lambda x: x[1],
    reverse=True
)
# [("Marta", 91), ("Ana", 85), ("Carlos", 67)]
\`\`\`

**Casos de uso reales:**

1. **Ranking de productos:** ordenar por precio/rating
2. **Limpieza de datos:** filtrar vacíos, transformar tipos
3. **Procesamiento de texto:** filtrar palabras cortas, capitalizar

**Cuándo encadenar vs. pasos separados:**
\`\`\`python
# Encadenado (conciso pero puede ser difícil de leer)
resultado = sorted(map(f, filter(g, datos)), key=h)

# Pasos separados (más legible)
activos = filter(g, datos)
transformados = map(f, activos)
resultado = sorted(transformados, key=h)
\`\`\`

Para producción, los pasos separados con nombres descriptivos suelen ser preferibles.`,
    codeExample: `empleados = [
    {"nombre": "Ana",    "salario": 45000, "dept": "IT",      "activo": True},
    {"nombre": "Luis",   "salario": 32000, "dept": "Ventas",  "activo": False},
    {"nombre": "Marta",  "salario": 58000, "dept": "IT",      "activo": True},
    {"nombre": "Pedro",  "salario": 41000, "dept": "Ventas",  "activo": True},
    {"nombre": "Sofía",  "salario": 62000, "dept": "IT",      "activo": True},
]

# Paso 1: solo activos de IT
activos_it = filter(
    lambda e: e["activo"] and e["dept"] == "IT",
    empleados
)

# Paso 2: extraer nombre y salario
pares = map(
    lambda e: (e["nombre"], e["salario"]),
    activos_it
)

# Paso 3: ordenar por salario descendente
ranking = sorted(pares, key=lambda x: x[1], reverse=True)

print("Ranking IT:")
for pos, (nombre, salario) in enumerate(ranking, 1):
    print(f"  {pos}. {nombre}: \${salario:,}")

# Otro ejemplo: procesar lista de strings
textos = ["  Hola  ", "", "  Python  ", " ", "mundo", None]
limpios = sorted(
    map(
        str.upper,
        filter(lambda t: t and t.strip(), textos)
    )
)
print(limpios)  # ['HOLA', 'MUNDO', 'PYTHON']

# Con comprensión equivalente (más legible):
limpios2 = sorted(
    t.strip().upper()
    for t in textos
    if t and t.strip()
)
print(limpios2)  # ['HOLA', 'MUNDO', 'PYTHON']`,
    keyPoints: [
      'filter + map + sorted forman un pipeline de procesamiento de datos expresivo',
      'El orden típico: primero filter (reducir datos), luego map (transformar), luego sorted (ordenar)',
      'Para legibilidad, asigna cada paso a una variable con nombre descriptivo',
      'Las comprensiones de lista son una alternativa más legible para pipelines simples',
      'Evita encadenar más de 2-3 operaciones sin asignar pasos intermedios',
      '`reverse=True` en sorted() invierte el orden para rankings descendentes',
    ],
    exercise: {
      description: 'Tienes `ventas = [{"producto": "Laptop", "cantidad": 3, "precio": 1200}, {"producto": "Mouse", "cantidad": 0, "precio": 25}, {"producto": "Monitor", "cantidad": 2, "precio": 400}, {"producto": "Teclado", "cantidad": 5, "precio": 80}]`. Filtra los que tengan cantidad > 0, calcula el total por producto (cantidad × precio) y muéstralos ordenados por total descendente.',
      hint: 'Usa `filter` para cantidad > 0, `map` para calcular el total como tupla `(producto, total)`, y `sorted` con `reverse=True`.',
    },
    quiz: [
      {
        question: '¿Cuál es el orden recomendado en un pipeline de datos?',
        options: [
          'sorted → map → filter',
          'map → filter → sorted',
          'filter → map → sorted',
          'No importa el orden',
        ],
        correctAnswer: 'filter → map → sorted',
        correctFeedback: 'Correcto. Primero reduces los datos (filter), luego los transformas (map), luego los ordenas (sorted). Es más eficiente trabajar con menos datos en los pasos siguientes.',
        incorrectFeedback: 'Lo más eficiente es filtrar primero para reducir el conjunto de datos, luego transformar los elementos restantes, y finalmente ordenar el resultado final.',
      },
      {
        question: '¿Qué hace `sorted(map(str.upper, filter(None, palabras)))`?',
        options: [
          'Filtra palabras vacías, convierte a mayúsculas y ordena alfabéticamente',
          'Ordena primero, luego filtra, luego pone en mayúsculas',
          'Solo ordena las palabras',
          'Error: no se puede encadenar estas funciones',
        ],
        correctAnswer: 'Filtra palabras vacías, convierte a mayúsculas y ordena alfabéticamente',
        correctFeedback: 'Correcto. Python evalúa de adentro hacia afuera: primero `filter(None, palabras)` quita falsy, luego `map(str.upper, ...)` capitaliza, luego `sorted(...)` ordena.',
        incorrectFeedback: 'Las funciones se evalúan de adentro hacia afuera: `filter(None, palabras)` elimina strings vacíos/None, `map(str.upper, ...)` convierte a mayúsculas, `sorted(...)` ordena alfabéticamente.',
      },
      {
        question: '¿Por qué es mejor asignar pasos intermedios a variables con nombre?',
        options: [
          'Python es más rápido cuando se asignan variables',
          'Para poder depurar cada paso y que el código sea más legible',
          'Es obligatorio para que filter y map funcionen',
          'Para evitar que Python reinicie la memoria',
        ],
        correctAnswer: 'Para poder depurar cada paso y que el código sea más legible',
        correctFeedback: 'Correcto. Nombres descriptivos en cada paso hacen el código auto-documentado y facilitan la depuración si algo falla en un paso específico.',
        incorrectFeedback: 'Los nombres descriptivos mejoran la legibilidad y facilitan la depuración. Si algo falla, puedes imprimir cada variable intermedia para ver qué ocurrió en ese paso.',
      },
      {
        question: '¿Cuál de estos es el equivalente más legible de `list(map(lambda x: x*2, filter(lambda x: x > 0, nums)))`?',
        options: [
          '[x*2 for x in nums if x > 0]',
          '[x for x in nums if x > 0 * 2]',
          '[x > 0 and x * 2 for x in nums]',
          'list(filter(lambda x: x*2, map(lambda x: x > 0, nums)))',
        ],
        correctAnswer: '[x*2 for x in nums if x > 0]',
        correctFeedback: 'Correcto. La comprensión con filtro y transformación es más legible que encadenar filter + map + lambda.',
        incorrectFeedback: 'La comprensión `[x*2 for x in nums if x > 0]` filtra los positivos (if x > 0) y los dobla (x*2), exactamente igual que filter + map pero más legible.',
      },
      {
        question: '¿Qué imprime este código?\n```python\nnums = [5, 2, 8, 1, 9, 3]\nresultado = sorted(filter(lambda x: x > 4, nums), reverse=True)\nprint(list(resultado))\n```',
        options: ['[9, 8, 5]', '[5, 8, 9]', '[2, 1, 3]', '[9, 8, 5, 2, 1, 3]'],
        correctAnswer: '[9, 8, 5]',
        correctFeedback: 'Correcto. Filter mantiene [5, 8, 9] (>4). Sorted con reverse=True los ordena descendente: [9, 8, 5].',
        incorrectFeedback: 'Primero `filter` mantiene solo los mayores que 4: 5, 8, 9. Luego `sorted(..., reverse=True)` los ordena descendente: [9, 8, 5].',
      },
    ],
  },

  {
    slug: 'alternativas-legibles',
    title: 'Alternativas más legibles',
    module: 'Lambda, map, filter y sorted',
    moduleNumber: 13,
    order: 62,
    description: 'Aprende cuándo es mejor usar bucles o comprehensions en lugar de lambda, map o filter.',
    explanation: `Python valora la legibilidad sobre la concisión. La guía de estilo oficial (PEP 8) y el creador de Python, Guido van Rossum, han declarado que prefieren las comprensiones de lista sobre \`map()\` y \`filter()\` con lambdas en la mayoría de casos.

**¿Por qué?**
\`\`\`python
# Esto es difícil de leer para alguien que empieza:
list(map(lambda x: x ** 2, filter(lambda x: x > 0, nums)))

# Esto es inmediatamente comprensible:
[x ** 2 for x in nums if x > 0]
\`\`\`

**Tabla de decisión:**

| Operación | Preferible |
|-----------|-----------|
| Transformar todos los elementos | Comprensión de lista |
| Filtrar elementos | Comprensión con \`if\` |
| Ambos (filtrar y transformar) | Comprensión de lista |
| Función ya existente + iterable | \`map(funcion_existente, iterable)\` |
| Validación simple | \`filter(funcion_existente, iterable)\` |
| Efectos secundarios | Bucle \`for\` |
| Lógica compleja de varios pasos | Bucle \`for\` con función auxiliar |

**Cuándo map() y filter() sí valen la pena:**
\`\`\`python
# Con funciones ya definidas (sin lambda): muy limpio
list(map(str.strip, lineas))
list(filter(os.path.exists, rutas))
\`\`\`

**La regla Pythónica:**
Si necesitas escribir \`lambda\` para que \`map()\` o \`filter()\` funcionen, casi siempre una comprensión es más legible. Si ya tienes una función nombrada, \`map()\` o \`filter()\` pueden ser igual de claros.`,
    codeExample: `# ── TRANSFORMAR ─────────────────────────────────────────────
nums = [1, 2, 3, 4, 5]

# ❌ Con map + lambda
cuadrados_map = list(map(lambda x: x ** 2, nums))

# ✅ Con comprensión (más clara)
cuadrados_comp = [x ** 2 for x in nums]

# ── FILTRAR ──────────────────────────────────────────────────
datos = [-3, 5, -1, 8, 0, 4]

# ❌ Con filter + lambda
positivos_filter = list(filter(lambda x: x > 0, datos))

# ✅ Con comprensión
positivos_comp = [x for x in datos if x > 0]

# ── FILTRAR Y TRANSFORMAR ────────────────────────────────────
# ❌ Encadenado con map + filter + lambdas (difícil de leer)
resultado_func = list(map(lambda x: x ** 2,
                          filter(lambda x: x > 0, datos)))

# ✅ Comprensión (una sola línea clara)
resultado_comp = [x ** 2 for x in datos if x > 0]

print(resultado_comp)   # [25, 64, 16]

# ── CUÁNDO map() GANA ────────────────────────────────────────
lineas = ["  hola  ", "  python  ", "  mundo  "]

# Con función existente, map es muy limpio:
limpias_map = list(map(str.strip, lineas))  # ✅ Claro

# La comprensión equivalente también funciona:
limpias_comp = [l.strip() for l in lineas]  # ✅ También claro

# ── EFECTOS SECUNDARIOS: siempre usa bucle ───────────────────
registros = ["OK", "ERROR", "OK", "WARNING"]

# ❌ Antipatrón: comprensión con efectos secundarios
# [print(r) for r in registros]

# ✅ Bucle explícito
for registro in registros:
    if registro != "OK":
        print(f"Alerta: {registro}")`,
    keyPoints: [
      'Las comprensiones de lista son preferidas sobre `map`/`filter` + lambda por ser más legibles',
      '`map(funcion_existente, iterable)` es limpio y válido cuando no necesitas lambda',
      'Para efectos secundarios (print, escribir en BD, etc.), siempre usa bucles `for`',
      'Para lógica compleja en múltiples pasos, usa bucles y funciones auxiliares con nombres descriptivos',
      'La legibilidad es más importante que la concisión — escribe código para quien lo leerá, no para impresionar',
      'La guía de estilo PEP 8 recomienda comprensiones sobre map+filter en Python moderno',
    ],
    exercise: {
      description: 'Refactoriza este código para que sea más legible: `resultado = list(map(lambda u: u["nombre"].upper(), filter(lambda u: u["activo"] and u["edad"] >= 18, usuarios)))`. Usa una comprensión de lista.',
      hint: 'La comprensión combina la condición del filter y la transformación del map en una sola expresión.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma preferida en Python moderno para transformar todos los elementos de una lista?',
        options: [
          'map() con lambda',
          'Comprensión de lista',
          'filter() con función de identidad',
          'sorted() con key',
        ],
        correctAnswer: 'Comprensión de lista',
        correctFeedback: 'Correcto. PEP 8 y la comunidad Python prefieren comprensiones de lista sobre map+lambda por ser más legibles.',
        incorrectFeedback: 'La guía de estilo oficial de Python (PEP 8) y la mayoría de desarrolladores experimentados prefieren las comprensiones de lista por su legibilidad y expresividad.',
      },
      {
        question: '¿Cuándo sigue siendo útil `map()` sin lambda?',
        options: [
          'Nunca, las comprensiones siempre son mejores',
          'Cuando se usa con una función ya definida como `str.strip` o `int`',
          'Solo cuando el iterable tiene más de 1000 elementos',
          'Solo en Python 2',
        ],
        correctAnswer: 'Cuando se usa con una función ya definida como `str.strip` o `int`',
        correctFeedback: 'Correcto. `list(map(str.strip, lineas))` es tan claro como la comprensión y evita la redundancia de `lambda s: s.strip()`.',
        incorrectFeedback: '`map()` con funciones existentes es perfectamente idiomático: `map(int, cadenas)`, `map(str.strip, textos)`. Evita lambda cuando la función ya tiene nombre.',
      },
      {
        question: '¿Por qué NUNCA debes usar `[print(x) for x in lista]`?',
        options: [
          'Porque print() no funciona dentro de comprensiones',
          'Porque crea una lista inútil de None y oculta el efecto secundario',
          'Porque es más lento que un bucle',
          'Porque print() requiere paréntesis especiales',
        ],
        correctAnswer: 'Porque crea una lista inútil de None y el efecto secundario queda oculto',
        correctFeedback: 'Correcto. `print()` devuelve `None`, así que la comprensión crea `[None, None, ...]`. El efecto real (imprimir) queda "escondido" donde no se espera.',
        incorrectFeedback: 'Las comprensiones son para **crear colecciones**. `print()` devuelve `None`, así que produces `[None, None, ...]` inútilmente. Los efectos secundarios van en bucles `for`, donde son visibles y esperados.',
      },
      {
        question: '¿Cuál de estas opciones es la más legible para filtrar activos y obtener sus nombres?',
        options: [
          'list(map(lambda u: u["nombre"], filter(lambda u: u["activo"], usuarios)))',
          '[u["nombre"] for u in usuarios if u["activo"]]',
          'filter(map(lambda u: u["nombre"], usuarios), lambda u: u["activo"])',
          'sorted(usuarios, key=lambda u: u["activo"])[-1]["nombre"]',
        ],
        correctAnswer: '[u["nombre"] for u in usuarios if u["activo"]]',
        correctFeedback: 'Correcto. La comprensión expresa claramente la intención: "dame el nombre de cada usuario que esté activo".',
        incorrectFeedback: 'La comprensión `[u["nombre"] for u in usuarios if u["activo"]]` es inmediatamente legible. Se puede leer como: "dame el nombre de cada usuario que esté activo".',
      },
      {
        question: '¿Qué recomienda usar la guía de estilo PEP 8 en lugar de `map()` + `lambda`?',
        options: [
          'Bucles for siempre',
          'Comprensiones de lista',
          'Funciones de orden superior',
          'Clases con __iter__',
        ],
        correctAnswer: 'Comprensiones de lista',
        correctFeedback: 'Correcto. La PEP 8 explícitamente prefiere comprensiones de lista sobre las construcciones funcionales con lambda cuando el resultado es el mismo.',
        incorrectFeedback: 'La PEP 8 (guía de estilo oficial de Python) recomienda usar comprensiones de lista en lugar de `map()` + `lambda`, ya que son más legibles para la mayoría de programadores Python.',
      },
      {
        question: '¿Cuándo debe usarse un bucle `for` en lugar de comprensión o map/filter?',
        options: [
          'Siempre, es más explícito',
          'Cuando la operación tiene efectos secundarios o la lógica es muy compleja',
          'Solo cuando se trabaja con diccionarios',
          'Cuando hay más de 5 elementos',
        ],
        correctAnswer: 'Cuando la operación tiene efectos secundarios o la lógica es muy compleja',
        correctFeedback: 'Correcto. Los bucles for son ideales para efectos secundarios (escribir en BD, imprimir logs) y para lógica compleja que requiere múltiples pasos o variables auxiliares.',
        incorrectFeedback: 'Los bucles `for` son la herramienta correcta cuando hay efectos secundarios (logging, escritura en BD, modificar estado) o cuando la lógica es suficientemente compleja que una comprensión sería difícil de leer.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module13: Module = {
  number: 13,
  title: 'Lambda, map, filter y sorted',
  level: 'intermedio',
  lessons: lessonsModule13,
}
