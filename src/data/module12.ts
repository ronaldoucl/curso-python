import type { Lesson } from '@/types'

export const lessonsModule12: Lesson[] = [
  {
    slug: 'argumentos-por-defecto',
    title: 'Argumentos por defecto',
    module: 'Funciones avanzadas',
    moduleNumber: 12,
    order: 52,
    description: 'Aprende a definir valores por defecto en los parámetros de una función.',
    explanation: `Los **argumentos por defecto** permiten definir un valor predeterminado para un parámetro. Si el llamador no proporciona ese argumento, se usa el valor por defecto automáticamente.

**Sintaxis:**
\`\`\`python
def funcion(param1, param2=valor_por_defecto):
    ...
\`\`\`

**¿Por qué son útiles?**
- Hacen las funciones más flexibles sin complicar su uso básico
- Documentan el comportamiento esperado directamente en la firma
- Evitan repetir el mismo argumento una y otra vez cuando siempre es el mismo

**Ejemplo:**
\`\`\`python
def saludar(nombre, saludo="Hola"):
    print(f"{saludo}, {nombre}!")

saludar("Ana")           # Hola, Ana!
saludar("Ana", "Buenos días")  # Buenos días, Ana!
\`\`\`

**Regla importante: los parámetros con valor por defecto van al final.** Si los pones antes de los obligatorios, Python lanzará un \`SyntaxError\`:
\`\`\`python
# ❌ INCORRECTO
def funcion(x=10, y):  # SyntaxError
    ...

# ✅ CORRECTO
def funcion(y, x=10):
    ...
\`\`\`

**Error clásico: valor mutable como defecto.**
Nunca uses listas, diccionarios o conjuntos como valores por defecto. El objeto se crea una sola vez al definir la función y persiste entre llamadas:
\`\`\`python
# ❌ PELIGROSO
def agregar(item, lista=[]):
    lista.append(item)
    return lista

agregar(1)  # [1]
agregar(2)  # [1, 2] ← ¡La lista persiste!

# ✅ CORRECTO
def agregar(item, lista=None):
    if lista is None:
        lista = []
    lista.append(item)
    return lista
\`\`\``,
    codeExample: `# Argumentos por defecto simples
def saludar(nombre, saludo="Hola", puntuacion="!"):
    print(f"{saludo}, {nombre}{puntuacion}")

saludar("Ana")                    # Hola, Ana!
saludar("Luis", "Buenos días")    # Buenos días, Luis!
saludar("Marta", "Hey", ".")      # Hey, Marta.

# Caso práctico: función de conexión con puerto por defecto
def conectar(host, puerto=8080, seguro=False):
    protocolo = "https" if seguro else "http"
    print(f"Conectando a {protocolo}://{host}:{puerto}")

conectar("ejemplo.com")                    # http://ejemplo.com:8080
conectar("ejemplo.com", 443, True)         # https://ejemplo.com:443
conectar("ejemplo.com", seguro=True)       # https://ejemplo.com:8080

# ⚠️ Error clásico con listas mutables como defecto
def agregar_incorrecto(item, lista=[]):
    lista.append(item)
    return lista

print(agregar_incorrecto(1))  # [1]
print(agregar_incorrecto(2))  # [1, 2] ← ¡PROBLEMA! la lista persiste

# ✅ Solución correcta: usar None como centinela
def agregar_correcto(item, lista=None):
    if lista is None:
        lista = []
    lista.append(item)
    return lista

print(agregar_correcto(1))  # [1]
print(agregar_correcto(2))  # [2] ← Correcto, lista nueva cada vez`,
    keyPoints: [
      'Los parámetros con valor por defecto deben ir DESPUÉS de los parámetros obligatorios',
      'Si el llamador no pasa el argumento, se usa el valor por defecto',
      'Puedes pasar los argumentos por nombre: `funcion(param=valor)`',
      'NUNCA uses listas, dicts o sets mutables como valor por defecto — usa `None` en su lugar',
      'Los valores por defecto se evalúan UNA SOLA VEZ cuando se define la función, no en cada llamada',
      'Los argumentos por defecto hacen las funciones más flexibles y fáciles de usar',
    ],
    exercise: {
      description: 'Crea una función `crear_perfil(nombre, edad, pais="México", rol="usuario")` que imprima los datos del perfil. Pruébala con: solo nombre y edad, luego con pais diferente, luego con todos los parámetros.',
      hint: 'Recuerda poner los parámetros con valor por defecto al final de la firma.',
    },
    quiz: [
      {
        question: '¿Qué imprime `saludar("Ana")` si `def saludar(nombre, mensaje="Hola"):`?',
        options: ['Error: falta el argumento mensaje', 'Hola Ana', 'Ana Hola', 'None'],
        correctAnswer: 'Hola Ana',
        correctFeedback: 'Correcto. Como no se pasa `mensaje`, se usa el valor por defecto "Hola".',
        incorrectFeedback: 'Cuando no se proporciona un argumento con valor por defecto, Python usa automáticamente el valor definido. En este caso, `mensaje` toma el valor "Hola".',
      },
      {
        question: '¿Cuál de estas definiciones de función es correcta?',
        options: [
          'def f(x=10, y):',
          'def f(y, x=10):',
          'def f(=10, y):',
          'def f(x, y=):',
        ],
        correctAnswer: 'def f(y, x=10):',
        correctFeedback: 'Correcto. Los parámetros con valor por defecto deben ir DESPUÉS de los obligatorios.',
        incorrectFeedback: 'Los parámetros con valor por defecto deben colocarse DESPUÉS de los obligatorios. `def f(x=10, y)` causa un SyntaxError porque `y` (obligatorio) está después de `x` (con defecto).',
      },
      {
        question: '¿Qué problema tiene `def agregar(item, lista=[])`?',
        options: [
          'Es un SyntaxError',
          'La lista se comparte entre todas las llamadas, acumulando elementos',
          'La lista se reinicia en cada llamada correctamente',
          'Solo funciona con strings',
        ],
        correctAnswer: 'La lista se comparte entre todas las llamadas, acumulando elementos',
        correctFeedback: 'Correcto. Los valores por defecto mutables se crean una sola vez. Todas las llamadas que usen el valor por defecto compartirán el mismo objeto lista.',
        incorrectFeedback: 'Los valores por defecto se evalúan UNA VEZ al definir la función. Una lista `[]` como defecto se crea una sola vez y persiste entre llamadas. Cada llamada sin argumento agrega a la MISMA lista.',
      },
      {
        question: '¿Cuál es la solución correcta para evitar el problema de listas mutables como defecto?',
        options: [
          'def f(item, lista=list())',
          'def f(item, lista=None): if lista is None: lista = []',
          'def f(item, lista=[]): lista = lista.copy()',
          'def f(item, lista=[None])',
        ],
        correctAnswer: 'def f(item, lista=None): if lista is None: lista = []',
        correctFeedback: 'Correcto. Usar `None` como centinela y crear una nueva lista dentro de la función es el patrón estándar en Python.',
        incorrectFeedback: 'El patrón correcto es usar `None` como centinela. `list()` tiene el mismo problema que `[]` (se crea una vez). `.copy()` al inicio de la función tampoco resuelve el problema de acumulación.',
      },
      {
        question: '¿Cuántas veces se evalúa el valor por defecto de un parámetro?',
        options: [
          'En cada llamada a la función',
          'Solo una vez, cuando se define la función',
          'Cada vez que el parámetro no se proporciona',
          'Depende del tipo del valor',
        ],
        correctAnswer: 'Solo una vez, cuando se define la función',
        correctFeedback: 'Correcto. Esto es crucial de entender. El valor por defecto se evalúa en el momento en que Python procesa la definición de la función, no cuando se llama.',
        incorrectFeedback: 'Los valores por defecto se evalúan UNA SOLA VEZ cuando Python lee la definición de la función. No se re-evalúan en cada llamada. Por eso los objetos mutables como listas son problemáticos.',
      },
      {
        question: '¿Qué produce este código?\n```python\ndef info(nombre, activo=True, rol="user"):\n    return f"{nombre}|{activo}|{rol}"\n\nprint(info("Ana", rol="admin"))\n```',
        options: [
          'Ana|True|user',
          'Ana|True|admin',
          'Error: argumento posicional faltante',
          'Ana|admin|True',
        ],
        correctAnswer: 'Ana|True|admin',
        correctFeedback: 'Correcto. Puedes pasar argumentos por nombre, saltando los intermedios. `activo` mantiene su valor por defecto `True` y `rol` recibe "admin".',
        incorrectFeedback: 'Puedes pasar argumentos con nombre (`rol="admin"`) sin necesidad de proporcionar los intermedios. `activo` no se pasa, así que usa su valor por defecto `True`.',
      },
      {
        question: '¿Cuál de estos es el mejor uso de los argumentos por defecto?',
        options: [
          'def conectar(host, puerto=[], intentos={})',
          'def conectar(host="localhost", puerto, intentos=3)',
          'def conectar(host, puerto=8080, intentos=3)',
          'def conectar(=None, puerto=8080)',
        ],
        correctAnswer: 'def conectar(host, puerto=8080, intentos=3)',
        correctFeedback: 'Correcto. `host` es obligatorio (no tiene defecto), los demás tienen valores inmutables razonables como defecto.',
        incorrectFeedback: 'La opción correcta es `def conectar(host, puerto=8080, intentos=3)`: parámetro obligatorio primero, luego opcionales con valores inmutables (números). Usar listas o dicts como defecto es peligroso.',
      },
    ],
  },

  {
    slug: 'args-kwargs',
    title: 'Args y kwargs',
    module: 'Funciones avanzadas',
    moduleNumber: 12,
    order: 53,
    description: 'Aprende a usar *args y **kwargs para crear funciones más flexibles.',
    explanation: `\`*args\` y \`**kwargs\` permiten que una función acepte un número variable de argumentos. Son esenciales para escribir funciones flexibles y reutilizables.

**\`*args\` — argumentos posicionales variables:**
El asterisco convierte todos los argumentos posicionales extra en una **tupla**. El nombre \`args\` es convención, pero puedes usar cualquier nombre con \`*\`.

\`\`\`python
def sumar(*numeros):
    return sum(numeros)

sumar(1, 2)        # 3
sumar(1, 2, 3, 4)  # 10
sumar()            # 0 (tupla vacía)
\`\`\`

**\`**kwargs\` — argumentos de palabra clave variables:**
Los dos asteriscos convierten todos los argumentos con nombre extra en un **diccionario**.

\`\`\`python
def mostrar_info(**datos):
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="Ana", edad=25, pais="México")
\`\`\`

**Combinando parámetros — el orden importa:**
\`\`\`
def funcion(obligatorio, *args, **kwargs):
\`\`\`

1. Primero los argumentos normales (obligatorios o con defecto)
2. Luego \`*args\` (posicionales extra)
3. Por último \`**kwargs\` (keyword extra)

**Desempaquetar al llamar:**
También puedes usar \`*\` y \`**\` al LLAMAR a una función para desempaquetar listas/dicts:
\`\`\`python
nums = [1, 2, 3]
print(*nums)       # equivalente a print(1, 2, 3)

config = {"sep": "-", "end": "\\n"}
print("a", "b", **config)  # a-b
\`\`\``,
    codeExample: `# *args: número variable de argumentos posicionales
def sumar(*numeros):
    print(type(numeros))   # <class 'tuple'>
    return sum(numeros)

print(sumar(1, 2))           # 3
print(sumar(1, 2, 3, 4, 5))  # 15
print(sumar())               # 0

# **kwargs: número variable de argumentos por nombre
def crear_etiqueta(**atributos):
    pares = [f'{k}="{v}"' for k, v in atributos.items()]
    return '<div ' + ' '.join(pares) + '>'

print(crear_etiqueta(clase="btn", id="enviar", tipo="submit"))
# <div clase="btn" id="enviar" tipo="submit">

# Combinar: param normal + *args + **kwargs
def registro(nivel, *mensajes, **contexto):
    print(f"[{nivel}]", *mensajes)
    if contexto:
        print("  Contexto:", contexto)

registro("INFO", "Inicio", "del programa")
registro("ERROR", "Fallo de BD", modulo="db", linea=42)

# Desempaquetar al llamar
def sumar3(a, b, c):
    return a + b + c

valores = [1, 2, 3]
print(sumar3(*valores))   # 6

opciones = {"b": 20, "c": 30}
print(sumar3(10, **opciones))  # 60

# Caso práctico: wrapper que añade logging
def con_log(funcion, *args, **kwargs):
    print(f"Llamando a {funcion.__name__}")
    resultado = funcion(*args, **kwargs)
    print(f"Resultado: {resultado}")
    return resultado

con_log(sumar, 1, 2, 3, 4)`,
    keyPoints: [
      '`*args` recoge argumentos posicionales extra en una TUPLA',
      '`**kwargs` recoge argumentos de palabra clave extra en un DICCIONARIO',
      'El orden en la firma debe ser: normales → *args → **kwargs',
      'El nombre `args` y `kwargs` es convención, no obligatorio (lo importante es el `*` y el `**`)',
      'Puedes usar `*lista` al llamar para desempaquetar una lista como argumentos posicionales',
      'Puedes usar `**diccionario` al llamar para desempaquetar un diccionario como kwargs',
    ],
    exercise: {
      description: 'Crea una función `estadisticas(*numeros)` que reciba cualquier cantidad de números y devuelva un diccionario con `minimo`, `maximo`, `suma` y `promedio`. Pruébala con distintas cantidades de argumentos.',
      hint: 'Usa `min()`, `max()`, `sum()` y `len()` sobre la tupla `numeros`.',
    },
    quiz: [
      {
        question: '¿Qué tipo de dato es `args` dentro de una función `def f(*args)`?',
        options: ['Lista', 'Tupla', 'Diccionario', 'Set'],
        correctAnswer: 'Tupla',
        correctFeedback: 'Correcto. `*args` empaqueta los argumentos en una tupla, que es inmutable.',
        incorrectFeedback: '`*args` siempre produce una tupla (no una lista). Es inmutable, pero puedes iterarla igual que una lista.',
      },
      {
        question: '¿Qué tipo de dato es `kwargs` dentro de una función `def f(**kwargs)`?',
        options: ['Lista', 'Tupla', 'Diccionario', 'Set'],
        correctAnswer: 'Diccionario',
        correctFeedback: 'Correcto. `**kwargs` empaqueta los argumentos con nombre en un diccionario.',
        incorrectFeedback: '`**kwargs` siempre produce un diccionario donde las claves son los nombres de los argumentos y los valores son sus valores.',
      },
      {
        question: '¿Cuál es el orden correcto de parámetros en una función?',
        options: [
          'def f(**kwargs, *args, normal)',
          'def f(*args, normal, **kwargs)',
          'def f(normal, *args, **kwargs)',
          'def f(**kwargs, normal, *args)',
        ],
        correctAnswer: 'def f(normal, *args, **kwargs)',
        correctFeedback: 'Correcto. El orden obligatorio es: parámetros normales → *args → **kwargs.',
        incorrectFeedback: 'El orden correcto es: parámetros normales primero, luego `*args`, y al final `**kwargs`. Cualquier otro orden genera un SyntaxError.',
      },
      {
        question: '¿Qué imprime este código?\n```python\ndef f(*args):\n    print(args)\n\nf(1, 2, 3)\n```',
        options: ['1 2 3', '[1, 2, 3]', '(1, 2, 3)', 'Error'],
        correctAnswer: '(1, 2, 3)',
        correctFeedback: 'Correcto. `args` es una tupla, y al imprimirla muestra la representación con paréntesis.',
        incorrectFeedback: '`*args` produce una tupla. Al imprimir una tupla directamente, Python muestra `(1, 2, 3)` con paréntesis.',
      },
      {
        question: '¿Qué hace `print(*["a", "b", "c"])`?',
        options: [
          'Imprime la lista: ["a", "b", "c"]',
          'Imprime: a b c',
          'Error: no se puede desempaquetar en print',
          'Imprime: abc',
        ],
        correctAnswer: 'Imprime: a b c',
        correctFeedback: 'Correcto. El `*` desempaqueta la lista como argumentos separados: equivale a `print("a", "b", "c")`.',
        incorrectFeedback: '`*lista` desempaqueta la lista como argumentos posicionales separados. `print(*["a","b","c"])` equivale a `print("a", "b", "c")` que imprime `a b c`.',
      },
      {
        question: 'Una función recibe `**datos`. ¿Cómo se itera sobre sus claves y valores?',
        options: [
          'for k in datos:',
          'for k, v in datos.items():',
          'for k, v in datos:',
          'datos.forEach()',
        ],
        correctAnswer: 'for k, v in datos.items():',
        correctFeedback: 'Correcto. `kwargs` es un diccionario normal, así que se itera con `.items()` para obtener pares clave-valor.',
        incorrectFeedback: '`**kwargs` produce un diccionario. Para iterar sobre pares clave-valor en Python se usa `.items()`. `for k in datos` solo daría las claves.',
      },
      {
        question: '¿Cuál de estas llamadas es válida para `def conectar(host, **opciones)`?',
        options: [
          'conectar(host="local", puerto=80, ssl=True)',
          'conectar("local", {"puerto": 80})',
          'conectar(puerto=80)',
          'conectar("local", ssl, 80)',
        ],
        correctAnswer: 'conectar(host="local", puerto=80, ssl=True)',
        correctFeedback: 'Correcto. `host` se puede pasar por nombre, y cualquier kwarg adicional va a `opciones`.',
        incorrectFeedback: '`host` es obligatorio (puede pasarse por posición o nombre). Los demás kwargs van a `**opciones`. Pasar un diccionario como segundo argumento posicional NO equivale a `**kwargs`.',
      },
    ],
  },

  {
    slug: 'funciones-como-valores',
    title: 'Funciones como valores',
    module: 'Funciones avanzadas',
    moduleNumber: 12,
    order: 54,
    description: 'Aprende cómo guardar funciones en variables, pasarlas como argumentos y devolverlas desde otras funciones.',
    explanation: `En Python, las funciones son **objetos de primera clase** (first-class objects). Esto significa que puedes tratarlas igual que cualquier otro valor: guardarlas en variables, pasarlas como argumentos, devolverlas desde otras funciones.

**Guardar una función en una variable:**
\`\`\`python
def saludar(nombre):
    return f"Hola, {nombre}"

accion = saludar       # sin paréntesis: no la llamas, la refieres
print(accion("Ana"))   # Hola, Ana
\`\`\`

**Pasar una función como argumento (función de orden superior):**
\`\`\`python
def aplicar(funcion, valor):
    return funcion(valor)

def doble(x):
    return x * 2

aplicar(doble, 5)  # 10
\`\`\`

Esto es el fundamento de \`map()\`, \`filter()\`, \`sorted()\` y muchos patrones en Python.

**Devolver una función desde otra función:**
\`\`\`python
def crear_multiplicador(n):
    def multiplicar(x):
        return x * n
    return multiplicar

por_tres = crear_multiplicador(3)
por_tres(5)   # 15
por_tres(10)  # 30
\`\`\`

Esto se llama **clausura** (closure): la función interna "recuerda" el valor de \`n\` aunque la función externa ya haya terminado.

**¿Por qué importa?** Este patrón es la base de los decoradores, las funciones de callback, y muchas bibliotecas como Flask o Django.`,
    codeExample: `# Funciones como variables
def cuadrado(x):
    return x ** 2

operacion = cuadrado
print(operacion(4))   # 16
print(type(operacion))  # <class 'function'>

# Guardar funciones en una lista
def doble(x):  return x * 2
def triple(x): return x * 3
def mitad(x):  return x / 2

operaciones = [doble, triple, mitad]
for op in operaciones:
    print(op(10))   # 20, 30, 5.0

# Función de orden superior (recibe función como argumento)
def aplicar_a_lista(funcion, lista):
    return [funcion(x) for x in lista]

numeros = [1, 2, 3, 4, 5]
print(aplicar_a_lista(cuadrado, numeros))  # [1, 4, 9, 16, 25]
print(aplicar_a_lista(doble, numeros))     # [2, 4, 6, 8, 10]

# Devolver funciones (closures / clausuras)
def crear_saludo(prefijo):
    def saludar(nombre):
        return f"{prefijo}, {nombre}!"
    return saludar

formal = crear_saludo("Buenos días")
casual = crear_saludo("Hola")

print(formal("Dr. García"))  # Buenos días, Dr. García!
print(casual("Ana"))         # Hola, Ana!

# Caso práctico: sistema de descuentos configurable
def crear_descuento(porcentaje):
    def aplicar(precio):
        return round(precio * (1 - porcentaje / 100), 2)
    return aplicar

descuento_10 = crear_descuento(10)
descuento_20 = crear_descuento(20)

print(descuento_10(100))  # 90.0
print(descuento_20(100))  # 80.0`,
    keyPoints: [
      'Las funciones son objetos en Python: se pueden asignar a variables, pasar como argumentos y devolver',
      'Referir una función sin `()` NO la ejecuta; solo apunta al objeto función',
      'Una función que recibe o devuelve otra función se llama función de orden superior',
      'Una clausura (closure) es una función interna que recuerda el estado de su función externa',
      'Este patrón es la base de los decoradores, callbacks y muchos frameworks',
      'Puedes almacenar funciones en listas o diccionarios para seleccionar comportamiento dinámicamente',
    ],
    exercise: {
      description: 'Crea una función `crear_validador(minimo, maximo)` que devuelva una función que reciba un número y retorne `True` si está dentro del rango `[minimo, maximo]` o `False` si no. Úsala para crear `validar_edad = crear_validador(0, 120)` y pruébala.',
      hint: 'La función interna debe capturar `minimo` y `maximo` de la función externa (clausura).',
    },
    quiz: [
      {
        question: '¿Qué hace `funcion = saludar` (sin paréntesis)?',
        options: [
          'Llama a saludar y guarda el resultado',
          'Crea una copia de la función saludar',
          'Guarda la referencia a la función, sin ejecutarla',
          'Lanza un TypeError',
        ],
        correctAnswer: 'Guarda la referencia a la función, sin ejecutarla',
        correctFeedback: 'Correcto. Sin paréntesis, solo se hace referencia al objeto función. Con paréntesis `saludar()` sí se ejecutaría.',
        incorrectFeedback: 'En Python, un nombre de función sin `()` es una referencia al objeto función. No lo ejecuta. `funcion = saludar` hace que `funcion` y `saludar` apunten al mismo objeto función.',
      },
      {
        question: '¿Qué es una función de orden superior?',
        options: [
          'Una función que tiene más de 3 parámetros',
          'Una función que recibe o devuelve otra función',
          'Una función definida dentro de una clase',
          'Una función con *args y **kwargs',
        ],
        correctAnswer: 'Una función que recibe o devuelve otra función',
        correctFeedback: 'Correcto. `map()`, `filter()` y `sorted()` son ejemplos clásicos de funciones de orden superior en Python.',
        incorrectFeedback: 'Una función de orden superior es aquella que trata funciones como datos: las recibe como parámetros o las devuelve como resultado. `map()`, `filter()` y `sorted(key=...)` son ejemplos.',
      },
      {
        question: '¿Qué imprime este código?\n```python\ndef crear(n):\n    def f(x):\n        return x + n\n    return f\n\nagregar5 = crear(5)\nprint(agregar5(3))\n```',
        options: ['3', '5', '8', 'Error: n no está definida en f'],
        correctAnswer: '8',
        correctFeedback: 'Correcto. `f` recuerda que `n=5` (clausura). Cuando se llama `agregar5(3)`, devuelve `3 + 5 = 8`.',
        incorrectFeedback: 'La función interna `f` forma una clausura: recuerda el valor de `n` del ámbito de `crear`. Cuando `crear(5)` retorna `f`, esa `f` recuerda `n=5`. Luego `agregar5(3)` = `3 + 5` = `8`.',
      },
      {
        question: '¿Cuál de estos patrones almacena funciones en un diccionario para selección dinámica?',
        options: [
          'def seleccionar(op): return op()',
          'operaciones = {"sumar": suma, "restar": resta}',
          'funcion = def suma(): return 1',
          'clase Operacion: def suma(self): ...',
        ],
        correctAnswer: 'operaciones = {"sumar": suma, "restar": resta}',
        correctFeedback: 'Correcto. Guardar funciones en un diccionario permite seleccionar comportamiento dinámicamente con `operaciones[clave](argumentos)`.',
        incorrectFeedback: 'Un diccionario de funciones como `{"sumar": suma, "restar": resta}` permite seleccionar y llamar funciones dinámicamente: `operaciones["sumar"](2, 3)`. Es un patrón muy útil para evitar cadenas de if-elif.',
      },
      {
        question: '¿Qué concepto describe a una función interna que recuerda variables de su función externa?',
        options: ['Herencia', 'Clausura (closure)', 'Decorador', 'Polimorfismo'],
        correctAnswer: 'Clausura (closure)',
        correctFeedback: 'Correcto. Una clausura es una función que "cierra" sobre variables de su entorno exterior y las recuerda incluso cuando la función exterior ya terminó.',
        incorrectFeedback: 'Una clausura (closure) es cuando una función interna captura y recuerda variables de la función que la contiene. Es la base para crear funciones configurables y decoradores.',
      },
      {
        question: '¿Qué tipo devuelve `type(print)`?',
        options: [
          '<class "str">',
          '<class "NoneType">',
          '<class "builtin_function_or_method">',
          '<class "void">',
        ],
        correctAnswer: '<class "builtin_function_or_method">',
        correctFeedback: 'Correcto. `print` es una función integrada de Python. `type()` sobre cualquier función devuelve un tipo de función.',
        incorrectFeedback: '`print` es un objeto función en Python. `type(print)` devuelve `<class "builtin_function_or_method">`, confirmando que las funciones integradas también son objetos.',
      },
    ],
  },

  {
    slug: 'funciones-anidadas',
    title: 'Funciones anidadas',
    module: 'Funciones avanzadas',
    moduleNumber: 12,
    order: 55,
    description: 'Aprende a crear funciones dentro de otras funciones y entiende cuándo puede ser útil.',
    explanation: `Una **función anidada** es una función definida dentro del cuerpo de otra función. Solo existe dentro de su función contenedora y no es accesible desde fuera.

**¿Cuándo usar funciones anidadas?**

1. **Para organizar lógica compleja sin contaminar el espacio de nombres global:**
\`\`\`python
def procesar_pedido(items):
    def calcular_iva(precio):
        return precio * 1.16

    def formatear(item, precio):
        return f"  {item}: \${calcular_iva(precio):.2f}"

    return "\\n".join(formatear(i, p) for i, p in items.items())
\`\`\`

2. **Para crear clausuras** (ya visto en la lección anterior):
\`\`\`python
def crear_contador():
    conteo = [0]  # lista para mutabilidad
    def incrementar():
        conteo[0] += 1
        return conteo[0]
    return incrementar
\`\`\`

3. **Para validaciones privadas** que no tienen sentido fuera de la función:
\`\`\`python
def registrar_usuario(nombre, email):
    def es_email_valido(e):
        return "@" in e and "." in e.split("@")[-1]

    if not es_email_valido(email):
        raise ValueError("Email inválido")
    # ... resto del registro
\`\`\`

**¿Cuándo NO usarlas?**
- Si la función interna es útil en múltiples lugares → defínela a nivel de módulo
- Si la función contenedora es muy larga → considera separar en clases o módulos
- Si complica la lectura sin aportar beneficio claro

Las funciones anidadas son herramientas de organización y encapsulación, no de rendimiento.`,
    codeExample: `# Función anidada para organizar lógica
def analizar_texto(texto):
    def contar_palabras(t):
        return len(t.split())

    def contar_vocales(t):
        return sum(1 for c in t.lower() if c in 'aeiouáéíóú')

    def oracion_mas_larga(t):
        oraciones = t.split('.')
        return max(oraciones, key=len).strip()

    palabras = contar_palabras(texto)
    vocales = contar_vocales(texto)
    larga = oracion_mas_larga(texto)

    return {
        'palabras': palabras,
        'vocales': vocales,
        'oracion_larga': larga
    }

texto = "Python es un lenguaje elegante. Es fácil de aprender."
resultado = analizar_texto(texto)
print(resultado)

# Clausura: función interna recuerda estado
def crear_acumulador(inicio=0):
    total = [inicio]

    def agregar(valor):
        total[0] += valor
        return total[0]

    def reiniciar():
        total[0] = inicio
        return total[0]

    return agregar, reiniciar

agregar, reiniciar = crear_acumulador()
print(agregar(10))   # 10
print(agregar(5))    # 15
print(agregar(3))    # 18
print(reiniciar())   # 0

# Función anidada para validación privada
def crear_cuenta(email, contraseña):
    def validar_email(e):
        return "@" in e and len(e.split("@")) == 2

    def validar_contraseña(c):
        return len(c) >= 8

    if not validar_email(email):
        raise ValueError(f"Email inválido: {email}")
    if not validar_contraseña(contraseña):
        raise ValueError("La contraseña debe tener al menos 8 caracteres")

    return {"email": email, "activo": True}`,
    keyPoints: [
      'Una función anidada solo es visible dentro de la función que la contiene',
      'Son útiles para encapsular lógica auxiliar, validaciones y clausuras',
      'La función interna puede acceder a variables de la función externa (clausura)',
      'Si la función auxiliar se necesita en varios lugares, mejor definirla a nivel de módulo',
      'No las uses solo para "parecer avanzado": úsalas cuando mejoran la organización o encapsulación',
      'Son la base técnica de los decoradores en Python',
    ],
    exercise: {
      description: 'Escribe una función `calcular_factura(productos)` que reciba un diccionario `{nombre: precio}`. Debe tener una función interna `aplicar_descuento(precio)` que aplique 15% de descuento si el precio supera 100. Retorna el total con descuentos aplicados.',
      hint: 'La función interna puede acceder a `productos` de la función externa. Itera con `.items()` y suma los precios con descuento.',
    },
    quiz: [
      {
        question: '¿Desde dónde es accesible una función definida dentro de otra función?',
        options: [
          'Desde cualquier parte del módulo',
          'Solo desde dentro de la función que la contiene',
          'Solo desde clases del mismo módulo',
          'Desde cualquier función del programa',
        ],
        correctAnswer: 'Solo desde dentro de la función que la contiene',
        correctFeedback: 'Correcto. La función interna existe solo en el ámbito de su función contenedora. No es accesible desde fuera.',
        incorrectFeedback: 'Las funciones anidadas tienen scope local: solo existen y son llamables dentro de la función que las contiene. Intentar llamarlas desde fuera causaría un NameError.',
      },
      {
        question: '¿Cuál es una razón válida para usar una función anidada?',
        options: [
          'Para hacerla más rápida automáticamente',
          'Para encapsular lógica auxiliar que solo tiene sentido dentro de la función externa',
          'Porque Python no permite funciones a nivel de módulo',
          'Para compartirla fácilmente entre varios módulos',
        ],
        correctAnswer: 'Para encapsular lógica auxiliar que solo tiene sentido dentro de la función externa',
        correctFeedback: 'Correcto. Si la función auxiliar no tiene utilidad fuera de su contexto, anidarla evita contaminar el espacio de nombres global.',
        incorrectFeedback: 'La principal razón para anidar funciones es la encapsulación: mantener privada la lógica que solo tiene sentido dentro de ese contexto. No mejoran la velocidad automáticamente y no las hace accesibles desde fuera.',
      },
      {
        question: '¿Puede una función interna acceder a variables de la función externa?',
        options: [
          'No, cada función tiene su propio scope aislado',
          'Sí, puede leer y modificar variables de la función que la contiene',
          'Sí, puede leerlas, pero para modificarlas necesita `nonlocal`',
          'Solo si son variables globales',
        ],
        correctAnswer: 'Sí, puede leerlas, pero para modificarlas necesita `nonlocal`',
        correctFeedback: 'Correcto. La función interna puede leer variables de la función externa libremente (clausura), pero para reasignarlas necesita la palabra clave `nonlocal`.',
        incorrectFeedback: 'Las funciones internas pueden leer variables del ámbito exterior libremente. Sin embargo, para **reasignar** (no solo leer) una variable del ámbito exterior, necesitan declarar `nonlocal nombre_variable`.',
      },
      {
        question: '¿Cuándo es mejor NO usar funciones anidadas?',
        options: [
          'Cuando la función auxiliar es reutilizable en varios lugares del módulo',
          'Cuando se trabaja con clausuras',
          'Cuando la función auxiliar solo valida datos',
          'Cuando hay más de dos parámetros',
        ],
        correctAnswer: 'Cuando la función auxiliar es reutilizable en varios lugares del módulo',
        correctFeedback: 'Correcto. Si la función se necesita en múltiples contextos, definirla a nivel de módulo es mejor: más reutilizable, más testeable y más fácil de documentar.',
        incorrectFeedback: 'Si la función auxiliar es útil en varios lugares, anidarla la hace inaccesible fuera de su contenedora. En ese caso, es mejor definirla a nivel de módulo para poder reutilizarla y testearla.',
      },
      {
        question: '¿Qué imprime este código?\n```python\ndef externa():\n    x = 10\n    def interna():\n        return x * 2\n    return interna()\n\nprint(externa())\n```',
        options: ['10', '20', 'Error: x no está definida en interna', 'None'],
        correctAnswer: '20',
        correctFeedback: 'Correcto. `interna` forma una clausura sobre `x`. Puede leer `x=10` de `externa` y devuelve `10 * 2 = 20`.',
        incorrectFeedback: 'La función `interna` puede acceder a `x` porque está en el ámbito de `externa`. Lee `x=10` y devuelve `10 * 2 = 20`. Esto es una clausura.',
      },
      {
        question: '¿Qué concepto técnico permite que una función interna "recuerde" variables de su función externa incluso después de que ésta haya terminado?',
        options: ['Herencia', 'Polimorfismo', 'Clausura (closure)', 'Sobrecarga'],
        correctAnswer: 'Clausura (closure)',
        correctFeedback: 'Correcto. Una clausura captura el estado del entorno en que fue definida, manteniendo acceso a las variables de la función externa.',
        incorrectFeedback: 'Una clausura (closure) es el mecanismo por el que una función interna mantiene una referencia a las variables del ámbito donde fue definida, incluso después de que la función externa haya retornado.',
      },
    ],
  },

  {
    slug: 'docstrings',
    title: 'Documentar funciones con docstrings',
    module: 'Funciones avanzadas',
    moduleNumber: 12,
    order: 56,
    description: 'Aprende a escribir docstrings claros para explicar qué hace una función, qué recibe y qué devuelve.',
    explanation: `Un **docstring** es una cadena de texto que documenta una función (o clase, o módulo). Se coloca inmediatamente después de la línea \`def\`, entre triple comillas \`"""\`.

**¿Por qué documentar?**
- Tu código lo leerán otras personas (y tú mismo en 3 meses)
- Los editores de código y herramientas como \`help()\` muestran el docstring automáticamente
- Las herramientas de documentación automática (como Sphinx) lo usan para generar manuales

**Docstring de una línea:** para funciones simples y obvias.
\`\`\`python
def cuadrado(n):
    """Devuelve el cuadrado de n."""
    return n ** 2
\`\`\`

**Docstring de múltiples líneas (estilo Google — el más usado):**
\`\`\`python
def dividir(a, b):
    """Divide a entre b y devuelve el resultado.

    Args:
        a (float): El dividendo.
        b (float): El divisor. No puede ser cero.

    Returns:
        float: El resultado de la división.

    Raises:
        ZeroDivisionError: Si b es igual a cero.
    """
    if b == 0:
        raise ZeroDivisionError("No se puede dividir entre cero")
    return a / b
\`\`\`

**Acceder al docstring:**
\`\`\`python
print(dividir.__doc__)
help(dividir)
\`\`\`

**Estilos populares:**
- **Google Style** (el ejemplo anterior): sencillo y muy legible
- **NumPy Style**: más detallado, común en ciencia de datos
- **reStructuredText**: formato de Sphinx, más verboso

Para proyectos personales o de equipo pequeño, Google Style es suficiente y recomendado.`,
    codeExample: `# Docstring de una línea (funciones simples)
def es_par(n):
    """Devuelve True si n es par, False si es impar."""
    return n % 2 == 0

# Docstring completo estilo Google
def calcular_promedio(numeros, redondear=2):
    """Calcula el promedio de una lista de números.

    Args:
        numeros (list[float]): Lista de números. No debe estar vacía.
        redondear (int): Decimales para redondear el resultado. Por defecto 2.

    Returns:
        float: El promedio redondeado.

    Raises:
        ValueError: Si la lista está vacía.
        TypeError: Si algún elemento no es numérico.

    Example:
        >>> calcular_promedio([1, 2, 3, 4])
        2.5
        >>> calcular_promedio([10, 20], redondear=0)
        15.0
    """
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    return round(sum(numeros) / len(numeros), redondear)

# Acceder al docstring
print(calcular_promedio.__doc__)
help(calcular_promedio)

# Docstring de módulo/clase también existe
class Cuenta:
    """Representa una cuenta bancaria básica.

    Attributes:
        titular (str): Nombre del dueño de la cuenta.
        saldo (float): Saldo actual en pesos.
    """

    def depositar(self, monto):
        """Aumenta el saldo en \`monto\` pesos.

        Args:
            monto (float): Cantidad a depositar. Debe ser positiva.
        """
        if monto <= 0:
            raise ValueError("El monto debe ser positivo")
        self.saldo += monto`,
    keyPoints: [
      'Los docstrings van inmediatamente después de `def`, entre triple comillas `"""`',
      'Describe QUÉ hace la función (no CÓMO lo hace)',
      'Documenta parámetros (`Args`), valor de retorno (`Returns`) y excepciones (`Raises`)',
      'Puedes acceder al docstring con `funcion.__doc__` o `help(funcion)`',
      'Google Style es el más sencillo y recomendado para la mayoría de proyectos',
      'Un buen docstring evita que necesiten leer el código para entender cómo usar la función',
    ],
    exercise: {
      description: 'Escribe la función `buscar_en_lista(lista, elemento, empezar_en=0)` que busque `elemento` en `lista` a partir del índice `empezar_en` y devuelva su índice o -1 si no se encuentra. Añade un docstring completo estilo Google que documente Args, Returns y un Example.',
      hint: 'Puedes iterar con `enumerate(lista)` y filtrar por índice >= empezar_en.',
    },
    quiz: [
      {
        question: '¿Dónde se coloca el docstring de una función?',
        options: [
          'Antes de la línea `def`',
          'Inmediatamente después de la línea `def`, como primer statement',
          'Al final del cuerpo de la función',
          'En un archivo separado `.doc`',
        ],
        correctAnswer: 'Inmediatamente después de la línea `def`, como primer statement',
        correctFeedback: 'Correcto. El docstring debe ser el primer statement del cuerpo de la función, justo debajo de `def`.',
        incorrectFeedback: 'El docstring debe colocarse como primer statement dentro de la función, justo después de la línea `def`. Si se pone antes o al final, Python no lo reconocerá como docstring oficial.',
      },
      {
        question: '¿Cómo se accede al docstring de una función llamada `mi_funcion`?',
        options: [
          'mi_funcion.docstring',
          'mi_funcion.__doc__',
          'doc(mi_funcion)',
          'mi_funcion.help()',
        ],
        correctAnswer: 'mi_funcion.__doc__',
        correctFeedback: 'Correcto. El atributo `__doc__` almacena el docstring. También puedes usar `help(mi_funcion)` para una versión formateada.',
        incorrectFeedback: 'El docstring se almacena en el atributo especial `__doc__`. Accédelo con `mi_funcion.__doc__` o usa `help(mi_funcion)` para verlo formateado.',
      },
      {
        question: '¿Qué sección del docstring documenta qué devuelve la función?',
        options: ['Args', 'Returns', 'Output', 'Result'],
        correctAnswer: 'Returns',
        correctFeedback: 'Correcto. En el estilo Google, la sección `Returns` describe el valor de retorno y su tipo.',
        incorrectFeedback: 'La sección `Returns` documenta qué devuelve la función. `Args` documenta los parámetros, y `Raises` documenta las excepciones que puede lanzar.',
      },
      {
        question: 'El docstring debe explicar CÓMO está implementada la función internamente. ¿Verdadero o falso?',
        options: ['Verdadero', 'Falso — debe explicar QUÉ hace, no cómo', 'Depende del proyecto', 'Solo si usa algoritmos complejos'],
        correctAnswer: 'Falso — debe explicar QUÉ hace, no cómo',
        correctFeedback: 'Correcto. El docstring documenta la interfaz (contrato): qué recibe, qué devuelve, qué errores lanza. Los comentarios dentro del código explican el cómo.',
        incorrectFeedback: 'El docstring debe documentar la interfaz pública: qué hace la función, qué espera recibir y qué devuelve. El "cómo" se documenta con comentarios dentro del código. El docstring es para quien USA la función, no para quien la implementa.',
      },
      {
        question: '¿Cuál es el estilo de docstring recomendado para la mayoría de proyectos Python?',
        options: ['reStructuredText', 'NumPy Style', 'Google Style', 'JavaDoc Style'],
        correctAnswer: 'Google Style',
        correctFeedback: 'Correcto. Google Style es limpio, legible y ampliamente adoptado en la comunidad Python para proyectos de tamaño pequeño a mediano.',
        incorrectFeedback: 'Google Style es el más popular por su legibilidad. NumPy Style es más detallado y se usa principalmente en ciencia de datos. reStructuredText es más verboso y es el formato nativo de Sphinx.',
      },
      {
        question: '¿Cuál de estos es un buen docstring de una línea?',
        options: [
          '"""Esta función fue creada el 2024 por el equipo."""',
          '"""Devuelve True si el número es primo."""',
          '"""def es_primo(n): verifica si n es primo"""',
          '"""Función es_primo"""',
        ],
        correctAnswer: '"""Devuelve True si el número es primo."""',
        correctFeedback: 'Correcto. Un buen docstring de una línea describe concisamente qué hace la función, comenzando con un verbo y sin referirse al nombre de la función.',
        incorrectFeedback: 'Un docstring efectivo describe concisamente la función con un verbo activo: "Devuelve...", "Calcula...", "Verifica...". No debe incluir fechas de creación, el nombre de la función ni el código mismo.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module12: Module = {
  number: 12,
  title: 'Funciones avanzadas',
  level: 'intermedio',
  lessons: lessonsModule12,
}
