import type { Lesson } from '@/types'
import type { Module } from '@/types'

export const lessonsModule4: Lesson[] = [
  {
    slug: 'listas',
    title: 'Listas',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 18,
    description: 'Aprende a usar listas para guardar varios valores dentro de una sola variable.',
    explanation: `Las **listas** son una de las estructuras de datos más usadas en Python. Te permiten guardar **varios valores** dentro de una sola variable, en orden.

Imagínalas como la lista del súper: tienes un papel con varios artículos escritos, uno tras otro. Cada artículo tiene una posición (el primero, el segundo, el tercero…).

**Crear una lista:**
\`\`\`python
frutas = ["manzana", "pera", "naranja", "uva"]
numeros = [10, 20, 30, 40, 50]
lista_vacia = []
mixta = ["Ana", 25, True, 3.14]  # lista mixta (no recomendado, pero posible)
\`\`\`

**Acceder por índice:**
El índice empieza en **0**, no en 1. El primer elemento es el índice 0.
\`\`\`python
frutas = ["manzana", "pera", "naranja", "uva"]
print(frutas[0])   # "manzana" (primera)
print(frutas[1])   # "pera" (segunda)
print(frutas[3])   # "uva" (cuarta)
\`\`\`

**Índices negativos (desde el final):**
\`\`\`python
print(frutas[-1])  # "uva" (última)
print(frutas[-2])  # "naranja" (penúltima)
\`\`\`

**Slicing (obtener una porción):**
Con \`lista[inicio:fin]\` obtienes elementos desde \`inicio\` hasta \`fin - 1\`.
\`\`\`python
print(frutas[1:3])   # ["pera", "naranja"]
print(frutas[:2])    # ["manzana", "pera"] (desde el principio)
print(frutas[2:])    # ["naranja", "uva"] (hasta el final)
\`\`\`

**len() — longitud de la lista:**
\`\`\`python
print(len(frutas))   # 4
\`\`\`

**Errores comunes:**
- **IndexError:** ocurre cuando intentas acceder a un índice que no existe. Si tu lista tiene 4 elementos, el índice máximo válido es 3 (o -4 negativo).
- **Olvidar que el índice empieza en 0:** el primer elemento es \`lista[0]\`, no \`lista[1]\`.`,
    codeExample: `# Crear una lista de frutas
frutas = ["manzana", "pera", "naranja", "uva", "mango"]

# Acceder por índice (empieza en 0)
print(frutas[0])    # manzana
print(frutas[2])    # naranja

# Índices negativos (desde el final)
print(frutas[-1])   # mango (última)
print(frutas[-2])   # uva (penúltima)

# Slicing: obtener una porción
print(frutas[1:4])  # ['pera', 'naranja', 'uva']
print(frutas[:2])   # ['manzana', 'pera']
print(frutas[3:])   # ['uva', 'mango']

# len: cantidad de elementos
print(len(frutas))  # 5

# Lista vacía
carrito = []
print(len(carrito)) # 0

# Modificar un elemento
frutas[0] = "fresa"
print(frutas[0])    # fresa`,
    keyPoints: [
      'Una lista se crea con corchetes [] y puede contener cualquier tipo de valor.',
      'Los índices empiezan en 0: el primer elemento es lista[0].',
      'Los índices negativos cuentan desde el final: lista[-1] es el último elemento.',
      'El slicing lista[inicio:fin] extrae una porción (el índice fin NO se incluye).',
      'len(lista) devuelve la cantidad de elementos de la lista.',
      'Un IndexError ocurre cuando accedes a un índice que no existe en la lista.',
    ],
    exercise: {
      description: 'Crea una lista con tus 5 películas favoritas. Luego imprime: la primera película, la última película y las dos películas del medio (índices 1 y 2, o usa slicing).',
      hint: 'Recuerda que el primer elemento tiene índice 0 y el último tiene índice -1. Para las del medio puedes usar peliculas[1:3] o acceder a peliculas[1] y peliculas[2] por separado.',
    },
    quiz: [
      {
        question: '¿Cómo se crea una lista vacía en Python?',
        options: ['lista = ()', 'lista = {}', 'lista = []', 'lista = list'],
        correctAnswer: 'lista = []',
        correctFeedback: '¡Correcto! Los corchetes [] crean una lista vacía. Los paréntesis () crean una tupla y las llaves {} crean un diccionario o set.',
        incorrectFeedback: 'No es correcto. Las listas se crean con corchetes []. Los paréntesis () son para tuplas y las llaves {} para diccionarios o sets.',
      },
      {
        question: 'Dada la lista colores = ["rojo", "verde", "azul"], ¿qué valor tiene colores[1]?',
        options: ['"rojo"', '"verde"', '"azul"', 'IndexError'],
        correctAnswer: '"verde"',
        correctFeedback: '¡Correcto! Los índices empiezan en 0, por lo tanto colores[0] es "rojo", colores[1] es "verde" y colores[2] es "azul".',
        incorrectFeedback: 'No es correcto. Recuerda que los índices empiezan en 0. Entonces colores[0]="rojo", colores[1]="verde" y colores[2]="azul".',
      },
      {
        question: 'Dada la lista numeros = [10, 20, 30, 40], ¿qué devuelve numeros[-1]?',
        options: ['10', '20', '40', 'IndexError'],
        correctAnswer: '40',
        correctFeedback: '¡Correcto! El índice -1 siempre accede al último elemento de la lista.',
        incorrectFeedback: 'No es correcto. Los índices negativos cuentan desde el final. numeros[-1] es el último elemento: 40.',
      },
      {
        question: 'Dada la lista letras = ["a", "b", "c", "d", "e"], ¿qué devuelve letras[1:4]?',
        options: ['["a", "b", "c", "d"]', '["b", "c", "d"]', '["b", "c", "d", "e"]', '["a", "b", "c"]'],
        correctAnswer: '["b", "c", "d"]',
        correctFeedback: '¡Correcto! El slicing [1:4] incluye desde el índice 1 hasta el 3 (el índice 4 no se incluye). Eso corresponde a "b", "c", "d".',
        incorrectFeedback: 'No es correcto. Con slicing [inicio:fin] se incluye el índice inicio pero NO el fin. Entonces [1:4] va del índice 1 al 3: "b", "c", "d".',
      },
      {
        question: '¿Qué función devuelve la cantidad de elementos de una lista?',
        options: ['count(lista)', 'size(lista)', 'len(lista)', 'length(lista)'],
        correctAnswer: 'len(lista)',
        correctFeedback: '¡Correcto! len() es la función incorporada de Python para conocer la longitud de listas, strings, tuplas y otras colecciones.',
        incorrectFeedback: 'No es correcto. En Python la función es len(lista). No existe size() ni length() como funciones incorporadas.',
      },
      {
        question: 'Tienes lista = [1, 2, 3]. ¿Qué ocurre si ejecutas lista[5]?',
        options: ['Devuelve None', 'Devuelve 0', 'Se produce un IndexError', 'Se produce un ValueError'],
        correctAnswer: 'Se produce un IndexError',
        correctFeedback: '¡Correcto! Al intentar acceder a un índice que no existe en la lista, Python lanza IndexError: list index out of range.',
        incorrectFeedback: 'No es correcto. Cuando accedes a un índice que no existe Python lanza IndexError. La lista solo tiene índices 0, 1 y 2.',
      },
    ],
  },
  {
    slug: 'metodos-listas',
    title: 'Métodos de listas',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 19,
    description: 'Aprende a usar métodos como append(), remove(), pop(), sort() y funciones como len().',
    explanation: `Las listas en Python tienen muchos **métodos incorporados** que te permiten agregar, eliminar, ordenar y buscar elementos fácilmente.

**Agregar elementos:**
\`\`\`python
tareas = ["estudiar", "hacer ejercicio"]
tareas.append("leer")          # agrega al final
tareas.insert(1, "desayunar")  # inserta en la posición 1
\`\`\`

**Eliminar elementos:**
\`\`\`python
tareas.remove("estudiar")  # elimina por valor (la primera ocurrencia)
tareas.pop()               # elimina y devuelve el último elemento
tareas.pop(0)              # elimina y devuelve el elemento en índice 0
\`\`\`

**Ordenar:**
\`\`\`python
numeros = [5, 2, 8, 1, 9]
numeros.sort()             # modifica la lista original (ascendente)
numeros.sort(reverse=True) # modifica la lista original (descendente)
nueva = sorted(numeros)    # devuelve una lista nueva, no modifica la original
\`\`\`

**Revertir el orden:**
\`\`\`python
numeros.reverse()          # invierte la lista original
\`\`\`

**Buscar y contar:**
\`\`\`python
frutas = ["manzana", "pera", "manzana"]
print(frutas.index("pera"))    # 1 (posición de "pera")
print(frutas.count("manzana")) # 2 (cuántas veces aparece)
\`\`\`

**Verificar si un elemento existe:**
\`\`\`python
print("pera" in frutas)    # True
print("uva" in frutas)     # False
\`\`\`

**Errores comunes:**
- **remove() con un valor que no existe:** lanza \`ValueError\`. Verifica con \`in\` antes de llamarlo.
- **Confundir sort() con sorted():** \`sort()\` modifica la lista original y devuelve \`None\`. \`sorted()\` devuelve una lista nueva y deja la original intacta.`,
    codeExample: `# Lista de tareas
tareas = ["comprar leche", "ir al banco"]

# Agregar elementos
tareas.append("llamar al médico")
tareas.insert(0, "despertar temprano")
print(tareas)  # ['despertar temprano', 'comprar leche', 'ir al banco', 'llamar al médico']

# Eliminar tarea completada
completada = tareas.pop(1)  # elimina "comprar leche"
print(f"Tarea completada: {completada}")
print(tareas)

# Verificar si existe antes de eliminar
if "ir al banco" in tareas:
    tareas.remove("ir al banco")

# Lista de calificaciones
notas = [85, 72, 91, 68, 95, 77]
print(f"Notas originales: {notas}")

# Ordenar (modifica la original)
notas.sort()
print(f"Notas ordenadas: {notas}")

# Mayor nota (última después de ordenar)
print(f"Nota más alta: {notas[-1]}")

# sorted() crea una lista nueva
notas_desc = sorted(notas, reverse=True)
print(f"De mayor a menor: {notas_desc}")

# Contar cuántas notas son 85
print(notas.count(85))  # 1`,
    keyPoints: [
      'append(x) agrega un elemento al final de la lista; insert(i, x) lo inserta en una posición específica.',
      'remove(x) elimina la primera ocurrencia de un valor; pop() elimina y devuelve el último (o el del índice indicado).',
      'sort() ordena la lista original (devuelve None); sorted() devuelve una lista nueva y no modifica la original.',
      'index(x) devuelve la posición de un elemento; count(x) cuenta cuántas veces aparece.',
      'Usa el operador in para verificar si un elemento existe antes de usar remove() y evitar un ValueError.',
      'reverse() invierte el orden de la lista original.',
    ],
    exercise: {
      description: 'Crea una lista de compras con al menos 4 ítems. Agrega 3 ítems nuevos con append(), elimina uno con remove(), ordena la lista con sort() y muéstrala por pantalla.',
      hint: 'Recuerda que sort() no devuelve la lista, la modifica directamente. Después de llamar a sort() simplemente haz print(lista).',
    },
    quiz: [
      {
        question: '¿Qué método agrega un elemento al FINAL de una lista?',
        options: ['insert()', 'add()', 'append()', 'push()'],
        correctAnswer: 'append()',
        correctFeedback: '¡Correcto! append(x) es el método estándar para agregar un elemento al final de una lista en Python.',
        incorrectFeedback: 'No es correcto. El método para agregar al final es append(x). insert(i, x) inserta en una posición específica. add() y push() no son métodos de listas en Python.',
      },
      {
        question: '¿Cuál es la diferencia entre sort() y sorted()?',
        options: [
          'Son idénticos, hacen exactamente lo mismo',
          'sort() modifica la lista original; sorted() devuelve una lista nueva',
          'sorted() modifica la lista original; sort() devuelve una lista nueva',
          'sort() ordena de mayor a menor; sorted() de menor a mayor',
        ],
        correctAnswer: 'sort() modifica la lista original; sorted() devuelve una lista nueva',
        correctFeedback: '¡Correcto! sort() es un método que ordena la lista en su lugar y devuelve None. sorted() es una función que devuelve una nueva lista ordenada sin tocar la original.',
        incorrectFeedback: 'No es correcto. sort() modifica la lista original (in-place) y devuelve None. sorted() en cambio devuelve una lista nueva ordenada sin modificar la original.',
      },
      {
        question: 'Tienes lista = [10, 20, 30]. ¿Qué devuelve lista.pop()?',
        options: ['10', '20', '30', 'None'],
        correctAnswer: '30',
        correctFeedback: '¡Correcto! pop() sin argumentos elimina y devuelve el último elemento de la lista, que en este caso es 30.',
        incorrectFeedback: 'No es correcto. pop() sin argumentos opera sobre el último elemento. Devuelve 30 y lo elimina de la lista.',
      },
      {
        question: '¿Qué error ocurre si haces lista.remove("banana") y "banana" no está en la lista?',
        options: ['IndexError', 'KeyError', 'ValueError', 'TypeError'],
        correctAnswer: 'ValueError',
        correctFeedback: '¡Correcto! remove() lanza ValueError cuando el valor que intentas eliminar no existe en la lista. Para evitarlo, verifica primero con "if valor in lista".',
        incorrectFeedback: 'No es correcto. remove() lanza ValueError si el elemento no existe. Siempre verifica con "if elemento in lista" antes de llamar remove().',
      },
      {
        question: '¿Cómo verificas si el número 7 está dentro de la lista numeros = [1, 3, 5, 7, 9]?',
        options: ['numeros.contains(7)', 'numeros.find(7)', '7 in numeros', 'numeros.exists(7)'],
        correctAnswer: '7 in numeros',
        correctFeedback: '¡Correcto! El operador in es la forma pythónica de verificar si un elemento existe en una lista. Devuelve True o False.',
        incorrectFeedback: 'No es correcto. Python usa el operador in: "7 in numeros". Los métodos contains(), find() y exists() no existen en las listas de Python.',
      },
      {
        question: 'Tienes lista = ["a", "b", "c"]. ¿Qué devuelve lista.index("b")?',
        options: ['0', '1', '2', 'True'],
        correctAnswer: '1',
        correctFeedback: '¡Correcto! index() devuelve la posición del elemento en la lista. "b" está en la posición 1 (índice 0 = "a", índice 1 = "b").',
        incorrectFeedback: 'No es correcto. index() devuelve el número de posición del elemento. "a" está en 0, "b" está en 1, "c" está en 2.',
      },
    ],
  },
  {
    slug: 'recorrer-listas',
    title: 'Recorrer listas con bucles',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 20,
    description: 'Aprende a usar bucles for para recorrer listas y trabajar con cada elemento.',
    explanation: `Recorrer una lista significa **visitar cada elemento uno por uno** para hacer algo con él. El bucle \`for\` es la herramienta perfecta para esto.

**Bucle for básico:**
\`\`\`python
frutas = ["manzana", "pera", "naranja"]
for fruta in frutas:
    print(fruta)
\`\`\`

**Procesar cada elemento:**
\`\`\`python
precios = [100, 250, 80, 320]
for precio in precios:
    print(precio * 1.16)  # agregar IVA
\`\`\`

**enumerate() — índice + valor al mismo tiempo:**
\`\`\`python
nombres = ["Ana", "Luis", "María"]
for i, nombre in enumerate(nombres):
    print(f"{i}: {nombre}")
# 0: Ana
# 1: Luis
# 2: María
\`\`\`

**zip() — dos listas en paralelo:**
\`\`\`python
materias = ["Matemáticas", "Historia", "Ciencias"]
notas = [90, 78, 85]
for materia, nota in zip(materias, notas):
    print(f"{materia}: {nota}")
\`\`\`

**List comprehensions — crear listas de forma compacta:**
\`\`\`python
numeros = [1, 2, 3, 4, 5, 6]
pares = [n for n in numeros if n % 2 == 0]   # [2, 4, 6]
dobles = [n * 2 for n in numeros]             # [2, 4, 6, 8, 10, 12]
\`\`\`

**Errores comunes:**
- **Modificar la lista mientras la recorres:** puede causar comportamiento inesperado. Si necesitas eliminar elementos, recorre una copia: \`for item in lista.copy():\`.`,
    codeExample: `# Calcular el promedio de notas
notas = [85, 72, 91, 68, 95, 77]
total = 0
for nota in notas:
    total += nota
promedio = total / len(notas)
print(f"Promedio: {promedio:.1f}")

# Encontrar la nota más alta manualmente
mayor = notas[0]
for nota in notas:
    if nota > mayor:
        mayor = nota
print(f"Nota más alta: {mayor}")

# enumerate: mostrar posición + valor
print("\\nLista de notas:")
for i, nota in enumerate(notas):
    print(f"  Alumno {i + 1}: {nota}")

# Filtrar números pares con for
numeros = [1, 2, 3, 4, 5, 6, 7, 8]
pares = []
for n in numeros:
    if n % 2 == 0:
        pares.append(n)
print(f"Pares: {pares}")

# Lo mismo con list comprehension (más compacto)
pares2 = [n for n in numeros if n % 2 == 0]
print(f"Pares (comprehension): {pares2}")`,
    keyPoints: [
      'El bucle for elemento in lista recorre cada elemento de la lista automáticamente.',
      'enumerate(lista) devuelve pares (índice, valor) para saber la posición de cada elemento.',
      'zip(lista1, lista2) permite recorrer dos listas en paralelo a la vez.',
      'Las list comprehensions permiten crear listas de forma compacta: [expr for x in lista if condición].',
      'Si necesitas eliminar elementos mientras recorres, usa lista.copy() para evitar comportamientos inesperados.',
    ],
    exercise: {
      description: 'Dada la lista precios = [150, 320, 89, 450, 210, 75], calcula e imprime: el total de todos los precios, el precio más alto y el promedio.',
      hint: 'Usa un bucle for para sumar todos los precios en una variable "total". El precio más alto puedes encontrarlo con max(precios) o recorriendo la lista. El promedio es total / len(precios).',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de recorrer cada elemento de una lista llamada "colores"?',
        options: [
          'for i in range(colores):',
          'for color in colores:',
          'foreach color in colores:',
          'while color in colores:',
        ],
        correctAnswer: 'for color in colores:',
        correctFeedback: '¡Correcto! La sintaxis "for elemento in lista:" es la forma estándar de recorrer una lista en Python.',
        incorrectFeedback: 'No es correcto. La sintaxis correcta en Python es "for elemento in lista:". foreach no existe en Python y range() recibe un número, no una lista.',
      },
      {
        question: '¿Qué función usas para obtener el índice Y el valor al recorrer una lista al mismo tiempo?',
        options: ['index()', 'enumerate()', 'zip()', 'range()'],
        correctAnswer: 'enumerate()',
        correctFeedback: '¡Correcto! enumerate(lista) devuelve pares (índice, valor) en cada iteración del bucle.',
        incorrectFeedback: 'No es correcto. enumerate(lista) es la función que proporciona el índice y el valor en cada paso del bucle.',
      },
      {
        question: 'Tienes a = [1, 2, 3] y b = ["uno", "dos", "tres"]. ¿Qué función recorre ambas listas a la vez?',
        options: ['enumerate(a, b)', 'merge(a, b)', 'zip(a, b)', 'join(a, b)'],
        correctAnswer: 'zip(a, b)',
        correctFeedback: '¡Correcto! zip(lista1, lista2) combina dos listas para recorrerlas en paralelo, devolviendo pares de elementos.',
        incorrectFeedback: 'No es correcto. La función zip(lista1, lista2) permite recorrer dos listas en paralelo al mismo tiempo.',
      },
      {
        question: '¿Qué hace esta list comprehension? [x * 2 for x in [1, 2, 3]]',
        options: [
          'Multiplica todos los elementos por 2 y devuelve el total',
          'Crea la lista [2, 4, 6]',
          'Crea la lista [1, 2, 3, 1, 2, 3]',
          'Genera un error de sintaxis',
        ],
        correctAnswer: 'Crea la lista [2, 4, 6]',
        correctFeedback: '¡Correcto! La list comprehension recorre cada x en [1, 2, 3] y crea una nueva lista con x*2 para cada elemento: [2, 4, 6].',
        incorrectFeedback: 'No es correcto. La list comprehension aplica la expresión "x * 2" a cada elemento y devuelve una nueva lista: [2, 4, 6].',
      },
      {
        question: '¿Cuál es la forma segura de eliminar elementos de una lista mientras la recorres con for?',
        options: [
          'Eliminar directamente dentro del bucle sin precaución',
          'Recorrer lista.copy() y eliminar de la lista original',
          'Usar while en lugar de for',
          'Usar del dentro del for',
        ],
        correctAnswer: 'Recorrer lista.copy() y eliminar de la lista original',
        correctFeedback: '¡Correcto! Recorrer una copia (lista.copy()) mientras modificas la original evita el comportamiento inesperado que ocurre al cambiar una lista durante su iteración.',
        incorrectFeedback: 'No es correcto. La forma segura es recorrer lista.copy() para iterar sobre los elementos originales mientras eliminas de la lista real.',
      },
    ],
  },
  {
    slug: 'diccionarios',
    title: 'Diccionarios',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 21,
    description: 'Aprende a usar diccionarios para guardar información usando pares clave-valor.',
    explanation: `Un **diccionario** te permite guardar información organizada en pares **clave → valor**, como una agenda de contactos donde el nombre es la clave y el teléfono es el valor.

Imagínalo como una ficha de estudiante: tienes campos ("nombre", "edad", "carrera") y cada campo tiene un valor.

**Crear un diccionario:**
\`\`\`python
estudiante = {
    "nombre": "Laura",
    "edad": 22,
    "carrera": "Ingeniería"
}
\`\`\`

**Acceder a un valor con []:**
\`\`\`python
print(estudiante["nombre"])  # "Laura"
print(estudiante["edad"])    # 22
\`\`\`

**Acceder con get() — más seguro:**
\`\`\`python
print(estudiante.get("email"))           # None (no lanza error)
print(estudiante.get("email", "Sin email"))  # "Sin email"
\`\`\`

**Verificar si una clave existe:**
\`\`\`python
if "nombre" in estudiante:
    print("Sí tiene nombre")
\`\`\`

**Características importantes:**
- Las **claves deben ser únicas**: si repites una clave, el valor nuevo reemplaza al anterior.
- Las claves suelen ser strings, pero también pueden ser números.
- Los valores pueden ser cualquier cosa: strings, números, listas, otros diccionarios.

**Errores comunes:**
- **KeyError:** ocurre cuando accedes con \`[]\` a una clave que no existe. Usa \`get()\` para evitarlo.
- **Confundir [] con {}:** las listas usan \`[]\`, los diccionarios usan \`{}\`.`,
    codeExample: `# Ficha de estudiante
estudiante = {
    "nombre": "Carlos",
    "edad": 20,
    "carrera": "Sistemas",
    "promedio": 8.7
}

# Acceder con []
print(estudiante["nombre"])   # Carlos
print(estudiante["promedio"]) # 8.7

# Acceder con get() (más seguro)
print(estudiante.get("email"))               # None
print(estudiante.get("email", "No registrado"))  # No registrado

# Verificar si una clave existe
if "carrera" in estudiante:
    print(f"Carrera: {estudiante['carrera']}")

# Las claves son únicas
config = {"color": "rojo", "color": "azul"}
print(config["color"])  # azul (el segundo reemplazó al primero)

# Los valores pueden ser listas
alumno = {
    "nombre": "Ana",
    "notas": [90, 85, 92, 78]
}
print(alumno["notas"])        # [90, 85, 92, 78]
print(alumno["notas"][0])     # 90`,
    keyPoints: [
      'Un diccionario guarda pares clave-valor usando llaves {}.',
      'Accede a un valor con diccionario["clave"]; si la clave no existe lanza KeyError.',
      'Usa diccionario.get("clave") para acceder sin riesgo de error; devuelve None si no existe.',
      'Las claves deben ser únicas: si repites una clave, el valor anterior se sobreescribe.',
      'Usa el operador in para verificar si una clave existe: "clave" in diccionario.',
    ],
    exercise: {
      description: 'Crea un diccionario con los datos de un libro: título, autor, año de publicación y género. Luego imprime cada campo con su etiqueta, por ejemplo: "Título: El Quijote".',
      hint: 'Define el diccionario con llaves {} y al menos 4 claves. Luego accede a cada clave con diccionario["clave"] dentro de un print() o f-string.',
    },
    quiz: [
      {
        question: '¿Cómo se crea un diccionario en Python?',
        options: [
          'diccionario = ["clave": "valor"]',
          'diccionario = ("clave", "valor")',
          'diccionario = {"clave": "valor"}',
          'diccionario = <clave: valor>',
        ],
        correctAnswer: 'diccionario = {"clave": "valor"}',
        correctFeedback: '¡Correcto! Los diccionarios se crean con llaves {} usando la sintaxis clave: valor separados por comas.',
        incorrectFeedback: 'No es correcto. Los diccionarios se crean con llaves {} y la sintaxis clave: valor. Los corchetes [] son para listas.',
      },
      {
        question: 'Tienes persona = {"nombre": "Ana", "edad": 30}. ¿Qué produce persona["telefono"]?',
        options: ['None', '0', 'KeyError', 'IndexError'],
        correctAnswer: 'KeyError',
        correctFeedback: '¡Correcto! Al acceder con [] a una clave que no existe, Python lanza KeyError. Para evitar esto usa persona.get("telefono").',
        incorrectFeedback: 'No es correcto. Al acceder con [] a una clave inexistente Python lanza KeyError. Usa .get() para obtener None en lugar del error.',
      },
      {
        question: '¿Cuál es la diferencia entre diccionario["clave"] y diccionario.get("clave")?',
        options: [
          'No hay diferencia, hacen lo mismo',
          '[] lanza KeyError si la clave no existe; get() devuelve None',
          'get() lanza KeyError; [] devuelve None',
          'Solo get() puede acceder a claves numéricas',
        ],
        correctAnswer: '[] lanza KeyError si la clave no existe; get() devuelve None',
        correctFeedback: '¡Correcto! [] es más directo pero riesgoso. get() es más seguro porque devuelve None (o un valor por defecto que tú definas) si la clave no existe.',
        incorrectFeedback: 'No es correcto. La diferencia clave es que [] lanza KeyError para claves inexistentes, mientras que get() devuelve None sin lanzar error.',
      },
      {
        question: '¿Qué pasa si defines dos veces la misma clave en un diccionario?',
        options: [
          'Python lanza un error',
          'Se guardan ambos valores en una lista',
          'El segundo valor sobreescribe al primero',
          'El primero se mantiene y el segundo se ignora',
        ],
        correctAnswer: 'El segundo valor sobreescribe al primero',
        correctFeedback: '¡Correcto! Las claves de un diccionario son únicas. Si repites una clave, el nuevo valor reemplaza al anterior.',
        incorrectFeedback: 'No es correcto. En un diccionario las claves son únicas. Si defines la misma clave dos veces, el segundo valor sobreescribe al primero.',
      },
      {
        question: '¿Cómo verificas si la clave "email" existe en el diccionario usuario?',
        options: [
          'usuario.has("email")',
          '"email" in usuario',
          'usuario.contains("email")',
          'usuario.find("email") != -1',
        ],
        correctAnswer: '"email" in usuario',
        correctFeedback: '¡Correcto! El operador in funciona con diccionarios para verificar si una clave existe. Devuelve True o False.',
        incorrectFeedback: 'No es correcto. Python usa el operador in: "email" in usuario. Los métodos has(), contains() y find() no existen en diccionarios.',
      },
    ],
  },
  {
    slug: 'trabajar-diccionarios',
    title: 'Trabajar con diccionarios',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 22,
    description: 'Aprende a acceder, agregar, modificar y eliminar datos dentro de un diccionario.',
    explanation: `Una vez que tienes un diccionario, puedes **modificarlo** agregando, cambiando o eliminando datos en cualquier momento.

**Agregar o modificar una clave:**
\`\`\`python
inventario = {"manzanas": 50, "peras": 30}
inventario["naranjas"] = 20       # agrega nueva clave
inventario["manzanas"] = 65       # modifica el valor existente
\`\`\`

**Eliminar una clave:**
\`\`\`python
del inventario["peras"]           # elimina la clave (KeyError si no existe)
precio = inventario.pop("naranjas")  # elimina y devuelve el valor
\`\`\`

**Recorrer un diccionario:**
\`\`\`python
# Solo claves
for clave in inventario:
    print(clave)

# Solo valores
for valor in inventario.values():
    print(valor)

# Claves y valores juntos
for clave, valor in inventario.items():
    print(f"{clave}: {valor}")
\`\`\`

**keys(), values(), items():**
\`\`\`python
print(inventario.keys())    # dict_keys(['manzanas'])
print(inventario.values())  # dict_values([65])
print(inventario.items())   # dict_items([('manzanas', 65)])
\`\`\`

**Diccionarios anidados (nivel básico):**
\`\`\`python
alumnos = {
    "Ana": {"nota": 90, "asistencia": 95},
    "Luis": {"nota": 78, "asistencia": 88}
}
print(alumnos["Ana"]["nota"])  # 90
\`\`\`

**Errores comunes:**
- **for k in dict** itera solo sobre las claves. Para obtener clave y valor necesitas **for k, v in dict.items()**.`,
    codeExample: `# Inventario de tienda
inventario = {
    "arroz": 100,
    "frijoles": 80,
    "aceite": 45
}

# Agregar producto nuevo
inventario["azúcar"] = 60
print(inventario)

# Actualizar precio/cantidad
inventario["arroz"] = 120
print(f"Arroz: {inventario['arroz']}")

# Eliminar producto
del inventario["aceite"]
print(inventario)

# pop devuelve el valor eliminado
cantidad = inventario.pop("frijoles")
print(f"Frijoles eliminados: {cantidad} unidades")

# Recorrer con items()
print("\\nInventario actual:")
for producto, cantidad in inventario.items():
    print(f"  {producto}: {cantidad} unidades")

# Calificaciones por materia
calificaciones = {
    "Matemáticas": 88,
    "Historia": 72,
    "Ciencias": 95,
    "Español": 65
}

total = sum(calificaciones.values())
promedio = total / len(calificaciones)
print(f"\\nPromedio: {promedio:.1f}")

for materia, nota in calificaciones.items():
    estado = "Aprobado" if nota >= 60 else "Reprobado"
    print(f"{materia}: {nota} → {estado}")`,
    keyPoints: [
      'Asigna o modifica valores con diccionario["clave"] = valor; si la clave no existe, la crea.',
      'del diccionario["clave"] elimina la clave; pop("clave") la elimina y devuelve el valor.',
      'keys() devuelve las claves, values() los valores, items() devuelve pares (clave, valor).',
      'Usa "for clave, valor in diccionario.items()" para recorrer claves y valores juntos.',
      'Los diccionarios pueden contener otros diccionarios como valores (diccionarios anidados).',
      'sum(diccionario.values()) suma todos los valores numéricos de un diccionario.',
    ],
    exercise: {
      description: 'Crea un diccionario con calificaciones por materia (al menos 5 materias con notas del 0 al 100). Calcula el promedio e imprime cada materia indicando si el alumno aprobó (nota ≥ 60) o reprobó.',
      hint: 'Usa sum(calificaciones.values()) para sumar todo y divide entre len(calificaciones) para el promedio. Luego recorre con .items() y compara cada nota con 60.',
    },
    quiz: [
      {
        question: '¿Cómo agregas la clave "ciudad" con valor "Bogotá" a un diccionario llamado persona?',
        options: [
          'persona.add("ciudad", "Bogotá")',
          'persona.append("ciudad", "Bogotá")',
          'persona["ciudad"] = "Bogotá"',
          'persona.insert("ciudad", "Bogotá")',
        ],
        correctAnswer: 'persona["ciudad"] = "Bogotá"',
        correctFeedback: '¡Correcto! Para agregar o modificar un valor en un diccionario simplemente usa la sintaxis diccionario["clave"] = valor.',
        incorrectFeedback: 'No es correcto. La forma de agregar o modificar en un diccionario es: diccionario["clave"] = valor. Los métodos add(), append() e insert() no existen en diccionarios.',
      },
      {
        question: '¿Qué método devuelve los pares (clave, valor) de un diccionario para poder recorrerlos?',
        options: ['keys()', 'values()', 'items()', 'pairs()'],
        correctAnswer: 'items()',
        correctFeedback: '¡Correcto! items() devuelve todos los pares clave-valor. Se usa con: for clave, valor in diccionario.items().',
        incorrectFeedback: 'No es correcto. items() es el método que devuelve pares (clave, valor). keys() solo devuelve claves y values() solo devuelve valores.',
      },
      {
        question: 'Tienes datos = {"x": 10, "y": 20, "z": 30}. ¿Qué hace "del datos["y"]"?',
        options: [
          'Cambia el valor de "y" a None',
          'Elimina la clave "y" y su valor del diccionario',
          'Lanza un error porque "y" es una clave válida',
          'Devuelve el valor 20 y lo elimina',
        ],
        correctAnswer: 'Elimina la clave "y" y su valor del diccionario',
        correctFeedback: '¡Correcto! del diccionario["clave"] elimina permanentemente esa clave y su valor. Si necesitas también recuperar el valor, usa pop() en su lugar.',
        incorrectFeedback: 'No es correcto. del diccionario["clave"] elimina la clave y su valor del diccionario. Si quieres recuperar el valor al eliminarlo, usa .pop("clave").',
      },
      {
        question: '¿Cuál es la forma correcta de recorrer un diccionario obteniendo clave y valor?',
        options: [
          'for k in diccionario:',
          'for k, v in diccionario:',
          'for k, v in diccionario.items():',
          'for k, v in diccionario.values():',
        ],
        correctAnswer: 'for k, v in diccionario.items():',
        correctFeedback: '¡Correcto! .items() devuelve pares (clave, valor) que puedes desempaquetar directamente en el for con dos variables.',
        incorrectFeedback: 'No es correcto. Para obtener clave y valor simultáneamente debes usar "for k, v in diccionario.items():".',
      },
      {
        question: '¿Cómo accedes a la nota de "Ana" en: alumnos = {"Ana": {"nota": 90}}?',
        options: [
          'alumnos["Ana", "nota"]',
          'alumnos["Ana"]["nota"]',
          'alumnos.get("Ana", "nota")',
          'alumnos[0]["nota"]',
        ],
        correctAnswer: 'alumnos["Ana"]["nota"]',
        correctFeedback: '¡Correcto! Para acceder a diccionarios anidados encadenas los corchetes: primero accedes a "Ana" y luego a "nota" dentro de ese diccionario.',
        incorrectFeedback: 'No es correcto. En diccionarios anidados encadenas accesos: alumnos["Ana"] te da el diccionario interno y ["nota"] accede al valor dentro de él.',
      },
      {
        question: 'Tienes precios = {"pan": 15, "leche": 22, "huevos": 35}. ¿Cómo calculas la suma de todos los precios?',
        options: [
          'sum(precios)',
          'sum(precios.keys())',
          'sum(precios.values())',
          'total(precios)',
        ],
        correctAnswer: 'sum(precios.values())',
        correctFeedback: '¡Correcto! precios.values() devuelve todos los valores numéricos y sum() los suma. Resultado: 72.',
        incorrectFeedback: 'No es correcto. Necesitas sum(precios.values()) para sumar los valores del diccionario. sum(precios) intentaría sumar las claves (strings), lo que da error.',
      },
    ],
  },
  {
    slug: 'tuplas',
    title: 'Tuplas',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 23,
    description: 'Aprende qué son las tuplas y cuándo usar colecciones de datos que no deberían cambiar.',
    explanation: `Una **tupla** es una colección ordenada e **inmutable** de valores. Inmutable significa que, una vez creada, **no puedes cambiarla**: no puedes agregar, eliminar ni modificar sus elementos.

¿Para qué sirven? Para guardar datos que no deben cambiar: coordenadas GPS, colores RGB, constantes de configuración, o para devolver múltiples valores desde una función.

**Crear una tupla:**
\`\`\`python
coordenada = (19.4326, -99.1332)    # latitud, longitud
color_rojo = (255, 0, 0)            # RGB
punto = 10, 20                      # también válido, sin paréntesis
\`\`\`

**Acceder a elementos (igual que las listas):**
\`\`\`python
print(coordenada[0])   # 19.4326
print(coordenada[-1])  # -99.1332
\`\`\`

**Desempaquetar una tupla:**
\`\`\`python
lat, lon = coordenada
print(f"Latitud: {lat}, Longitud: {lon}")

r, g, b = color_rojo
print(f"Rojo: {r}, Verde: {g}, Azul: {b}")
\`\`\`

**Devolver múltiples valores desde una función:**
\`\`\`python
def min_max(numeros):
    return min(numeros), max(numeros)

minimo, maximo = min_max([5, 2, 8, 1, 9])
print(f"Mín: {minimo}, Máx: {maximo}")
\`\`\`

**Tupla de un solo elemento (necesita coma):**
\`\`\`python
un_elemento = (42,)   # con coma → tupla
no_es_tupla = (42)    # sin coma → solo el número 42
\`\`\`

**Errores comunes:**
- **Intentar modificar una tupla:** lanza \`TypeError: 'tuple' object does not support item assignment\`.
- **Olvidar la coma en una tupla de un elemento:** \`(42)\` es solo \`42\`, no una tupla.`,
    codeExample: `# Coordenadas GPS (no deberían cambiar)
ciudad = (19.4326, -99.1332)
print(f"Latitud: {ciudad[0]}")
print(f"Longitud: {ciudad[1]}")

# Desempaquetar tupla
lat, lon = ciudad
print(f"Posición: {lat}, {lon}")

# Color RGB
color_azul = (0, 128, 255)
r, g, b = color_azul
print(f"Rojo={r}, Verde={g}, Azul={b}")

# Función que devuelve múltiples valores (tupla)
def estadisticas(numeros):
    return min(numeros), max(numeros), sum(numeros) / len(numeros)

datos = [85, 72, 91, 68, 95]
minimo, maximo, promedio = estadisticas(datos)
print(f"Mín: {minimo}, Máx: {maximo}, Prom: {promedio:.1f}")

# Tupla de un elemento (necesita la coma)
solo_uno = (42,)
print(type(solo_uno))    # <class 'tuple'>
print(type((42)))        # <class 'int'>

# Intentar modificar → TypeError
# ciudad[0] = 0  ← esto lanzaría TypeError`,
    keyPoints: [
      'Las tuplas son colecciones ordenadas e inmutables: no se pueden modificar después de crearlas.',
      'Se crean con paréntesis () o simplemente separando valores con comas.',
      'El desempaquetado permite asignar los valores de una tupla a varias variables en una sola línea.',
      'Las funciones pueden devolver múltiples valores usando tuplas: return valor1, valor2.',
      'Una tupla de un solo elemento requiere una coma al final: (42,). Sin la coma no es una tupla.',
    ],
    exercise: {
      description: 'Crea una función llamada min_max que reciba una lista de números y devuelva el mínimo y el máximo como una tupla. Llama a la función con la lista [34, 12, 89, 5, 67] y desempaqueta el resultado en dos variables. Imprime ambos valores.',
      hint: 'La función puede usar min() y max() incorporados: return min(lista), max(lista). Luego llámala con: minimo, maximo = min_max([...]).',
    },
    quiz: [
      {
        question: '¿Cuál es la característica principal que diferencia a una tupla de una lista?',
        options: [
          'Las tuplas pueden guardar más elementos que las listas',
          'Las tuplas son inmutables: no se pueden modificar después de crearlas',
          'Las tuplas solo pueden contener números',
          'Las tuplas no tienen índices',
        ],
        correctAnswer: 'Las tuplas son inmutables: no se pueden modificar después de crearlas',
        correctFeedback: '¡Correcto! La inmutabilidad es la diferencia fundamental. Una vez creada una tupla no puedes agregar, eliminar ni cambiar sus elementos.',
        incorrectFeedback: 'No es correcto. La característica clave de las tuplas es su inmutabilidad: una vez creadas no se pueden modificar.',
      },
      {
        question: '¿Cómo se crea una tupla de un solo elemento con el valor "hola"?',
        options: [
          '("hola")',
          '["hola"]',
          '("hola",)',
          'tuple("hola")',
        ],
        correctAnswer: '("hola",)',
        correctFeedback: '¡Correcto! Para una tupla de un solo elemento es obligatorio añadir la coma al final: ("hola",). Sin la coma, Python lo interpreta como un simple paréntesis alrededor de un string.',
        incorrectFeedback: 'No es correcto. Una tupla de un elemento necesita la coma: ("hola",). Sin coma, ("hola") es simplemente el string "hola" entre paréntesis.',
      },
      {
        question: 'Tienes punto = (10, 20). ¿Qué hace x, y = punto?',
        options: [
          'Crea una nueva tupla llamada x, y',
          'Genera un error de sintaxis',
          'Asigna x = 10 e y = 20 (desempaquetado)',
          'Asigna x = (10, 20) e y = None',
        ],
        correctAnswer: 'Asigna x = 10 e y = 20 (desempaquetado)',
        correctFeedback: '¡Correcto! El desempaquetado de tuplas asigna cada elemento a una variable separada: x toma el valor 10 e y toma el valor 20.',
        incorrectFeedback: 'No es correcto. La sintaxis x, y = tupla es el desempaquetado: asigna el primer elemento a x y el segundo a y.',
      },
      {
        question: '¿Qué error ocurre si intentas cambiar un valor de una tupla: mi_tupla[0] = 99?',
        options: [
          'ValueError',
          'IndexError',
          'TypeError',
          'No genera error, el cambio se aplica',
        ],
        correctAnswer: 'TypeError',
        correctFeedback: '¡Correcto! Python lanza TypeError indicando que el objeto tupla no soporta asignación de ítems, porque las tuplas son inmutables.',
        incorrectFeedback: 'No es correcto. Intentar modificar una tupla lanza TypeError porque las tuplas son inmutables por diseño.',
      },
      {
        question: '¿Para qué se usan comúnmente las tuplas en Python?',
        options: [
          'Para guardar datos que cambian frecuentemente',
          'Para reemplazar completamente a los diccionarios',
          'Para devolver múltiples valores desde una función y guardar datos que no deben cambiar',
          'Solo para almacenar coordenadas geográficas',
        ],
        correctAnswer: 'Para devolver múltiples valores desde una función y guardar datos que no deben cambiar',
        correctFeedback: '¡Correcto! Las tuplas son ideales para devolver múltiples valores desde funciones y para representar datos constantes como coordenadas, colores RGB o configuraciones fijas.',
        incorrectFeedback: 'No es correcto. Las tuplas se usan principalmente para datos inmutables (que no cambian) y para devolver múltiples valores desde una función de forma ordenada.',
      },
    ],
  },
  {
    slug: 'sets',
    title: 'Sets',
    module: 'Estructuras de datos',
    moduleNumber: 4,
    order: 24,
    description: 'Aprende qué son los sets, cómo evitar duplicados y cómo hacer operaciones básicas con conjuntos.',
    explanation: `Un **set** (conjunto) es una colección **sin orden y sin duplicados**. Si agregas el mismo valor dos veces, el set solo lo guarda una vez.

Son muy útiles para:
- **Eliminar duplicados** de una lista rápidamente
- **Verificar pertenencia** (muy eficiente)
- **Operaciones de conjuntos**: unión, intersección, diferencia

**Crear un set:**
\`\`\`python
colores = {"rojo", "azul", "verde"}
numeros = {1, 2, 3, 2, 1}   # {1, 2, 3} (duplicados eliminados)
vacio = set()               # set vacío (¡NO uses {} que crea un dict!)
\`\`\`

**Agregar y eliminar:**
\`\`\`python
colores.add("amarillo")        # agrega un elemento
colores.remove("azul")         # elimina (KeyError si no existe)
colores.discard("rosa")        # elimina sin error si no existe
\`\`\`

**Verificar pertenencia:**
\`\`\`python
print("rojo" in colores)   # True
print("negro" in colores)  # False
\`\`\`

**Eliminar duplicados de una lista:**
\`\`\`python
nombres = ["Ana", "Luis", "Ana", "María", "Luis"]
unicos = set(nombres)        # {"Ana", "Luis", "María"}
lista_limpia = list(unicos)  # vuelve a convertir a lista
\`\`\`

**Operaciones de conjuntos:**
\`\`\`python
grupo_a = {"Ana", "Luis", "María"}
grupo_b = {"Luis", "Pedro", "Ana"}

print(grupo_a | grupo_b)   # Unión: todos los elementos
print(grupo_a & grupo_b)   # Intersección: los que están en ambos
print(grupo_a - grupo_b)   # Diferencia: los de A que no están en B
\`\`\`

**Errores comunes:**
- **{} vacío crea un diccionario, no un set.** Para un set vacío usa \`set()\`.
- **Los sets no tienen índices.** No puedes hacer \`mi_set[0]\`.`,
    codeExample: `# Crear un set
animales = {"perro", "gato", "pájaro"}
print(animales)

# Los duplicados se eliminan automáticamente
frutas = {"manzana", "pera", "manzana", "uva", "pera"}
print(frutas)   # solo aparecen una vez

# Agregar y quitar elementos
animales.add("conejo")
animales.discard("pájaro")   # sin error si no existe
print(animales)

# Verificar pertenencia
print("gato" in animales)    # True
print("tigre" in animales)   # False

# Eliminar duplicados de una lista
visitas = ["Ana", "Luis", "Ana", "María", "Pedro", "Luis", "Ana"]
visitantes_unicos = set(visitas)
print(f"Visitantes únicos: {len(visitantes_unicos)}")

# Convertir a lista ordenada
lista_ordenada = sorted(visitantes_unicos)
print(lista_ordenada)

# Operaciones de conjuntos
matematicas = {"Ana", "Luis", "María", "Carlos"}
ciencias = {"Luis", "Pedro", "Ana", "Sofía"}

union = matematicas | ciencias
interseccion = matematicas & ciencias
solo_matematicas = matematicas - ciencias

print(f"Todos: {union}")
print(f"En ambas clases: {interseccion}")
print(f"Solo en matemáticas: {solo_matematicas}")`,
    keyPoints: [
      'Un set es una colección sin orden y sin duplicados; los valores repetidos se guardan solo una vez.',
      'Se crea con llaves {} o con set(). Para un set vacío usa set(), nunca {} (eso crea un diccionario).',
      'add() agrega un elemento; remove() elimina y lanza error si no existe; discard() elimina sin error.',
      'El operador in verifica pertenencia en un set de forma muy eficiente.',
      'Operaciones: unión (|), intersección (&) y diferencia (-) entre conjuntos.',
    ],
    exercise: {
      description: 'Dada la lista frutas = ["manzana", "pera", "uva", "manzana", "naranja", "pera", "uva", "kiwi"], crea un set con los nombres únicos. Convierte el set a lista, ordénala e imprímela.',
      hint: 'Usa set(frutas) para obtener los elementos únicos. Luego sorted(mi_set) devuelve una lista ordenada. Imprime la cantidad de frutas únicas también.',
    },
    quiz: [
      {
        question: '¿Cuál es la característica principal de un set?',
        options: [
          'Guarda los elementos en orden',
          'Permite duplicados para contar repeticiones',
          'No tiene orden y no permite duplicados',
          'Solo puede guardar números enteros',
        ],
        correctAnswer: 'No tiene orden y no permite duplicados',
        correctFeedback: '¡Correcto! Los sets no tienen un orden fijo y cada valor solo puede aparecer una vez. Son perfectos para eliminar duplicados.',
        incorrectFeedback: 'No es correcto. La característica principal de un set es que no tiene orden definido y no admite elementos duplicados.',
      },
      {
        question: '¿Cómo se crea un SET vacío en Python?',
        options: ['{}', '[]', 'set()', '()'],
        correctAnswer: 'set()',
        correctFeedback: '¡Correcto! {} crea un diccionario vacío, no un set. Para un set vacío siempre usa set().',
        incorrectFeedback: 'No es correcto. {} crea un diccionario vacío. Para crear un set vacío debes usar set().',
      },
      {
        question: '¿Cuál es la diferencia entre remove() y discard() en un set?',
        options: [
          'remove() es más rápido que discard()',
          'remove() lanza KeyError si el elemento no existe; discard() no lanza error',
          'discard() lanza KeyError; remove() no lanza error',
          'No hay diferencia, hacen lo mismo',
        ],
        correctAnswer: 'remove() lanza KeyError si el elemento no existe; discard() no lanza error',
        correctFeedback: '¡Correcto! remove() es estricto y lanza KeyError si el elemento no está. discard() es silencioso: simplemente no hace nada si el elemento no existe.',
        incorrectFeedback: 'No es correcto. remove() lanza KeyError si el elemento no está en el set. discard() hace lo mismo pero sin lanzar error si el elemento no existe.',
      },
      {
        question: 'Tienes a = {1, 2, 3} y b = {2, 3, 4}. ¿Qué resultado da a & b?',
        options: ['{1, 2, 3, 4}', '{2, 3}', '{1, 4}', '{1, 2, 3, 2, 3, 4}'],
        correctAnswer: '{2, 3}',
        correctFeedback: '¡Correcto! El operador & calcula la intersección: los elementos que están en AMBOS sets. Solo 2 y 3 están en los dos conjuntos.',
        incorrectFeedback: 'No es correcto. El operador & es la intersección: elementos presentes en ambos sets. En este caso son 2 y 3.',
      },
      {
        question: '¿Cuál es la forma más rápida de eliminar duplicados de la lista nums = [1, 2, 2, 3, 1, 4]?',
        options: [
          'nums.remove_duplicates()',
          'list(set(nums))',
          'sorted(nums)',
          'nums.unique()',
        ],
        correctAnswer: 'list(set(nums))',
        correctFeedback: '¡Correcto! set(nums) convierte la lista en un set eliminando duplicados, y list() la vuelve a convertir en lista. Es la forma más concisa en Python.',
        incorrectFeedback: 'No es correcto. La forma estándar es list(set(nums)): primero conviertes a set para eliminar duplicados y luego de vuelta a lista.',
      },
      {
        question: '¿Qué pasa si intentas acceder a un elemento de un set por índice: mi_set[0]?',
        options: [
          'Devuelve el primer elemento insertado',
          'Devuelve un elemento aleatorio',
          'Lanza un TypeError porque los sets no tienen índices',
          'Lanza un IndexError',
        ],
        correctAnswer: 'Lanza un TypeError porque los sets no tienen índices',
        correctFeedback: '¡Correcto! Los sets no son colecciones indexadas. Al intentar acceder por índice Python lanza TypeError: \'set\' object is not subscriptable.',
        incorrectFeedback: 'No es correcto. Los sets no tienen índices ni orden definido. Intentar acceder por índice lanza TypeError.',
      },
    ],
  },
]

export const module4: Module = {
  number: 4,
  title: 'Estructuras de datos',
  level: 'básico',
  lessons: lessonsModule4,
}
