import type { Lesson } from '@/types'

export const lessonsModule8: Lesson[] = [
  {
    slug: 'leer-archivos-texto',
    title: 'Leer archivos de texto',
    module: 'Archivos en Python',
    moduleNumber: 8,
    order: 26,
    description: 'Aprende a abrir y leer el contenido de archivos .txt usando Python.',
    explanation: `Python puede leer y escribir archivos del sistema. Esto es fundamental para trabajar con datos reales: configuraciones, registros, reportes, etc.

**Abrir un archivo:**
\`\`\`
archivo = open("nombre.txt", "r")
contenido = archivo.read()
archivo.close()
\`\`\`

**Modos de apertura básicos:**
- \`"r"\` — read (leer). Es el modo por defecto.
- \`"w"\` — write (escribir). Crea o sobreescribe.
- \`"a"\` — append (agregar al final).

**Métodos de lectura:**
- \`.read()\` — lee todo el archivo como un solo string.
- \`.readline()\` — lee una sola línea.
- \`.readlines()\` — lee todas las líneas y devuelve una lista.

**¡Importante siempre cerrar el archivo!**
Si abres un archivo con \`open()\`, debes llamar a \`.close()\` cuando termines. Si el programa falla antes de cerrar, el archivo puede quedar bloqueado o los datos no se guardan.

**La forma recomendada es usar \`with\`:**
\`\`\`
with open("archivo.txt", "r") as f:
    contenido = f.read()
# El archivo se cierra automáticamente aquí
\`\`\`

**Codificación de caracteres:**
Para evitar problemas con acentos y caracteres especiales en español, especifica \`encoding="utf-8"\`:
\`\`\`
with open("archivo.txt", "r", encoding="utf-8") as f:
    contenido = f.read()
\`\`\``,
    codeExample: `# Método 1: open/close manual (no recomendado)
archivo = open("notas.txt", "r", encoding="utf-8")
contenido = archivo.read()
archivo.close()
print(contenido)

# Método 2: with open (recomendado)
with open("notas.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
print(contenido)

# Leer línea por línea (readline)
with open("notas.txt", "r", encoding="utf-8") as f:
    linea = f.readline()    # Primera línea
    while linea:
        print(linea, end="")  # end="" porque readline incluye \\n
        linea = f.readline()

# Leer todas las líneas como lista (readlines)
with open("notas.txt", "r", encoding="utf-8") as f:
    lineas = f.readlines()
    print(f"Total de líneas: {len(lineas)}")
    for i, linea in enumerate(lineas, 1):
        print(f"{i}: {linea.strip()}")

# Iterar directamente sobre el archivo (más eficiente)
with open("notas.txt", "r", encoding="utf-8") as f:
    for linea in f:
        print(linea.strip())

# Leer solo una cantidad de caracteres
with open("notas.txt", "r", encoding="utf-8") as f:
    primeros = f.read(50)   # primeros 50 caracteres
    print(primeros)

# Manejo de FileNotFoundError
try:
    with open("archivo_inexistente.txt", "r") as f:
        contenido = f.read()
except FileNotFoundError:
    print("El archivo no existe")

# Crear un archivo de prueba para los ejemplos
with open("notas.txt", "w", encoding="utf-8") as f:
    f.write("Primera línea\\n")
    f.write("Segunda línea\\n")
    f.write("Tercera línea\\n")
print("Archivo 'notas.txt' creado")`,
    keyPoints: [
      'open(nombre, modo) abre un archivo; siempre debes cerrarlo con .close().',
      'with open(...) as f: cierra el archivo automáticamente al salir del bloque.',
      '.read() lee todo el archivo como string; .readlines() devuelve una lista de líneas.',
      'Especifica encoding="utf-8" para evitar problemas con acentos en español.',
      'Iterar directamente sobre el archivo (for linea in f:) es más eficiente en archivos grandes.',
      'Siempre captura FileNotFoundError cuando el archivo puede no existir.',
    ],
    exercise: {
      description: 'Crea un programa que lea un archivo "palabras.txt" (créalo tú primero con 5 palabras, una por línea) y muestre: el total de palabras, la palabra más larga y la lista de palabras ordenadas alfabéticamente.',
      hint: 'Usa .readlines() para obtener la lista, .strip() para quitar \\n, max(palabras, key=len) para la más larga, y sorted() para ordenar.',
    },
    quiz: [
      {
        question: '¿Qué modo de apertura debes usar para solo LEER un archivo existente?',
        options: ['"w"', '"a"', '"r"', '"rw"'],
        correctAnswer: '"r"',
        correctFeedback: '"r" (read) es el modo para leer. Si el archivo no existe, lanza FileNotFoundError. Es el modo por defecto de open().',
        incorrectFeedback: 'El modo "r" (read) es para leer archivos. "w" sobreescribe, "a" agrega al final. "rw" no es un modo estándar de Python.',
      },
      {
        question: '¿Cuál es la diferencia entre .read() y .readlines()?',
        options: [
          'No hay diferencia',
          '.read() devuelve un string con todo el contenido; .readlines() devuelve una lista con cada línea',
          '.read() lee línea por línea; .readlines() lee todo de una vez',
          '.read() es más lento que .readlines()',
        ],
        correctAnswer: '.read() devuelve un string con todo el contenido; .readlines() devuelve una lista con cada línea',
        correctFeedback: '.read() devuelve un solo string con todo el archivo. .readlines() devuelve una lista donde cada elemento es una línea (incluyendo el \\n al final).',
        incorrectFeedback: '.read() devuelve todo el archivo como un único string. .readlines() devuelve una lista donde cada elemento es una línea del archivo (con el \\n incluido).',
      },
      {
        question: '¿Qué ventaja tiene "with open(...) as f:" sobre open()/close() manual?',
        options: ['Es más rápido', 'Cierra el archivo automáticamente aunque ocurra un error', 'Permite leer archivos más grandes', 'Solo funciona con archivos de texto'],
        correctAnswer: 'Cierra el archivo automáticamente aunque ocurra un error',
        correctFeedback: 'with es un context manager que garantiza que .close() se llame al salir del bloque, incluso si ocurre una excepción. Evita que el archivo quede abierto por error.',
        incorrectFeedback: 'La ventaja de with es que cierra el archivo automáticamente al salir del bloque, incluso si ocurre un error. Con open()/close() manual, si hay un error antes de close(), el archivo queda abierto.',
      },
      {
        question: '¿Por qué es importante usar encoding="utf-8" al abrir archivos en español?',
        options: ['Para hacerlo más rápido', 'Para que Python pueda leer y escribir correctamente caracteres como á, é, ñ, ü', 'Porque es obligatorio en Python 3', 'Solo es necesario en Windows'],
        correctAnswer: 'Para que Python pueda leer y escribir correctamente caracteres como á, é, ñ, ü',
        correctFeedback: 'Sin especificar encoding, Python usa la codificación del sistema operativo, que puede variar. UTF-8 garantiza que los caracteres especiales del español se manejen correctamente en cualquier plataforma.',
        incorrectFeedback: 'La codificación UTF-8 garantiza que los caracteres especiales del español (á, é, ñ, ü, etc.) se lean y escriban correctamente en cualquier sistema operativo.',
      },
      {
        question: '¿Qué ocurre si abres un archivo con modo "r" y el archivo no existe?',
        options: ['Python crea el archivo vacío', 'Python devuelve None', 'Se lanza FileNotFoundError', 'Se lanza ValueError'],
        correctAnswer: 'Se lanza FileNotFoundError',
        correctFeedback: 'El modo "r" asume que el archivo ya existe. Si no existe, Python lanza FileNotFoundError. Debes capturarlo con try/except si el archivo puede no existir.',
        incorrectFeedback: 'Con modo "r", si el archivo no existe se lanza FileNotFoundError. Solo el modo "w" crea el archivo si no existe. Por eso es importante usar try/except.',
      },
      {
        question: '¿Cuál es la forma más eficiente de procesar un archivo de texto muy grande línea por línea?',
        options: ['contenido = f.read() y luego split("\\n")', 'lineas = f.readlines() y luego iterar', 'for linea in f: (iterar directamente sobre el archivo)', 'while f.readline():'],
        correctAnswer: 'for linea in f: (iterar directamente sobre el archivo)',
        correctFeedback: 'Iterar directamente sobre el archivo (for linea in f:) lee una línea a la vez sin cargar todo en memoria. Es la forma más eficiente para archivos grandes.',
        incorrectFeedback: 'La forma más eficiente es "for linea in f:" porque lee y procesa una línea a la vez, sin cargar todo el archivo en memoria. .read() y .readlines() cargan todo el archivo de una vez.',
      },
    ],
  },
  {
    slug: 'escribir-archivos-texto',
    title: 'Escribir archivos de texto',
    module: 'Archivos en Python',
    moduleNumber: 8,
    order: 27,
    description: 'Aprende a crear nuevos archivos y guardar información usando Python.',
    explanation: `Escribir archivos te permite **guardar datos de forma persistente**: resultados de cálculos, configuraciones, reportes, registros de actividad.

**Modos de escritura:**
- \`"w"\` — write: crea el archivo si no existe; si existe, **lo borra y empieza de cero**.
- \`"a"\` — append: crea el archivo si no existe; si existe, **agrega al final sin borrar**.
- \`"x"\` — exclusive create: crea el archivo, pero **falla si ya existe**.

**Métodos de escritura:**
- \`.write(texto)\` — escribe el string tal cual. No agrega \\n automáticamente.
- \`.writelines(lista)\` — escribe cada elemento de la lista. Tampoco agrega \\n.

**Importante:** \`write()\` no agrega saltos de línea automáticamente. Debes agregarlos tú:
\`\`\`
f.write("Línea 1\\n")
f.write("Línea 2\\n")
\`\`\`

**Diferencia entre "w" y "a":**
Este es el error más común al trabajar con archivos. Si usas "w" por error en un archivo con datos importantes, los perderás. Usa "a" cuando quieras agregar al historial.

**Flush:**
Por eficiencia, Python guarda las escrituras en un buffer. Al cerrar el archivo (o al salir del with), el buffer se vacía al disco. Si necesitas guardar inmediatamente, usa \`f.flush()\`.`,
    codeExample: `# Modo "w": crear o sobreescribir
with open("reporte.txt", "w", encoding="utf-8") as f:
    f.write("=== Reporte de ventas ===\\n")
    f.write("Fecha: 2024-05-15\\n")
    f.write("Total: $1,250.00\\n")

# Si ejecutas de nuevo, BORRA el contenido anterior
# (eso es lo que hace el modo "w")

# Modo "a": agregar sin borrar
with open("registro.txt", "a", encoding="utf-8") as f:
    from datetime import datetime
    ahora = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    f.write(f"[{ahora}] Usuario conectado\\n")

# writelines: escribir una lista de líneas
estudiantes = ["Ana García\\n", "Luis Pérez\\n", "María López\\n"]
with open("estudiantes.txt", "w", encoding="utf-8") as f:
    f.writelines(estudiantes)

# Escribir datos estructurados
productos = [
    ("Manzana", 10, 0.50),
    ("Pan", 5, 1.20),
    ("Leche", 3, 0.90),
]
with open("productos.txt", "w", encoding="utf-8") as f:
    f.write("Producto,Cantidad,Precio\\n")   # encabezado
    for nombre, cantidad, precio in productos:
        f.write(f"{nombre},{cantidad},{precio:.2f}\\n")

# Modo "x": falla si el archivo ya existe
try:
    with open("nuevo_archivo.txt", "x", encoding="utf-8") as f:
        f.write("Este archivo es nuevo\\n")
    print("Archivo creado exitosamente")
except FileExistsError:
    print("El archivo ya existe, no se sobrescribió")

# Verificar que se escribió correctamente
with open("productos.txt", "r", encoding="utf-8") as f:
    print(f.read())`,
    keyPoints: [
      '"w" (write) crea o sobreescribe el archivo — cuidado: borra el contenido anterior.',
      '"a" (append) agrega al final del archivo sin borrar lo existente.',
      '"x" falla con FileExistsError si el archivo ya existe (seguro para crear nuevos).',
      '.write() no agrega \\n automáticamente — debes incluirlo en el string.',
      '.writelines() escribe una lista pero tampoco agrega \\n entre elementos.',
      'Usa "a" para logs/registros donde quieres acumular entradas.',
    ],
    exercise: {
      description: 'Crea un programa de "diario" que permita al usuario escribir entradas. Cada vez que corre, agrega la fecha y hora actual más el texto del usuario al archivo "diario.txt". Luego lee y muestra todas las entradas anteriores.',
      hint: 'Usa modo "a" para escribir. Importa datetime para la fecha. Lee con modo "r" para mostrar el historial. Usa .strip() en el input del usuario.',
    },
    quiz: [
      {
        question: '¿Qué pasa con el contenido existente de un archivo cuando lo abres con modo "w"?',
        options: ['Se respeta y el nuevo contenido se agrega al final', 'Se borra completamente y el archivo empieza vacío', 'Se hace una copia de seguridad automática', 'Python lanza un error si el archivo ya tiene contenido'],
        correctAnswer: 'Se borra completamente y el archivo empieza vacío',
        correctFeedback: 'El modo "w" siempre comienza con un archivo vacío. Si el archivo ya existía, su contenido anterior se pierde. Usa "a" si quieres preservar el contenido.',
        incorrectFeedback: 'El modo "w" es destructivo: borra todo el contenido existente y empieza desde cero. Si quieres agregar al final sin borrar, usa el modo "a" (append).',
      },
      {
        question: '¿Cuál es la diferencia entre .write() y .writelines()?',
        options: [
          '.write() agrega \\n automáticamente; .writelines() no',
          '.write() recibe un string; .writelines() recibe una lista de strings',
          '.writelines() es más rápido que .write()',
          '.write() no necesita abrir el archivo primero',
        ],
        correctAnswer: '.write() recibe un string; .writelines() recibe una lista de strings',
        correctFeedback: '.write(texto) escribe un string. .writelines(lista) escribe cada elemento de la lista. Ninguno agrega \\n automáticamente.',
        incorrectFeedback: 'La diferencia está en el tipo de argumento: .write() recibe un string, .writelines() recibe una lista de strings. Ninguno agrega saltos de línea automáticamente.',
      },
      {
        question: '¿Para qué sirve el modo "x" al abrir un archivo?',
        options: ['Para cerrar el archivo', 'Para crear el archivo solo si NO existe; falla si ya existe', 'Para abrir el archivo en modo exclusivo de lectura', 'Para ejecutar el archivo como script'],
        correctAnswer: 'Para crear el archivo solo si NO existe; falla si ya existe',
        correctFeedback: 'El modo "x" (exclusive creation) crea el archivo pero lanza FileExistsError si ya existe. Es útil cuando quieres asegurarte de no sobreescribir datos existentes.',
        incorrectFeedback: 'El modo "x" crea el archivo con seguridad: si el archivo ya existe, lanza FileExistsError en lugar de sobreescribirlo. Es útil para evitar pérdida de datos.',
      },
      {
        question: '¿Qué modo debes usar para agregar registros a un archivo de log sin borrar los anteriores?',
        options: ['"w"', '"r"', '"a"', '"x"'],
        correctAnswer: '"a"',
        correctFeedback: '"a" (append) agrega al final del archivo sin borrar el contenido existente. Es el modo ideal para logs, diarios y registros de actividad.',
        incorrectFeedback: 'Para logs y registros usa el modo "a" (append). Agrega al final del archivo sin borrar nada. "w" borraría todos los registros anteriores.',
      },
      {
        question: '¿Qué debes hacer para escribir "Hola" en una línea y "Mundo" en la siguiente?',
        options: ['f.write("Hola Mundo")', 'f.write("Hola") y f.write("Mundo")', 'f.write("Hola\\nMundo")', 'f.writeline("Hola") y f.writeline("Mundo")'],
        correctAnswer: 'f.write("Hola\\nMundo")',
        correctFeedback: '.write() no agrega saltos de línea automáticamente. Debes incluir \\n en el string: f.write("Hola\\nMundo") o llamarlo dos veces: f.write("Hola\\n") y f.write("Mundo\\n").',
        incorrectFeedback: 'write() no agrega \\n automáticamente. Para líneas separadas debes incluir \\n: f.write("Hola\\nMundo") o f.write("Hola\\n") seguido de f.write("Mundo\\n"). writeline() no existe en Python.',
      },
    ],
  },
  {
    slug: 'with-open',
    title: 'Usar with open()',
    module: 'Archivos en Python',
    moduleNumber: 8,
    order: 28,
    description: 'Aprende por qué with open() es la forma recomendada y más segura de trabajar con archivos en Python.',
    explanation: `Ya viste \`with open()\` en las lecciones anteriores. En esta lección entendemos **por qué** es la forma correcta y qué pasa si no lo usas.

**El problema con open()/close() manual:**
\`\`\`
archivo = open("datos.txt", "r")
contenido = archivo.read()
# Si aquí ocurre un error...
archivo.close()   # ← esto NUNCA se ejecuta
\`\`\`

Si ocurre un error entre \`open()\` y \`close()\`, el archivo queda abierto indefinidamente. Esto puede:
- Bloquear el archivo para otros programas
- Causar pérdida de datos (escrituras en buffer sin vaciar)
- Consumir recursos del sistema

**¿Cómo funciona with internamente?**
\`with\` usa un **context manager**: un objeto con métodos especiales \`__enter__\` y \`__exit__\`. Al salir del bloque \`with\` (ya sea normalmente o por error), Python llama a \`__exit__\`, que cierra el archivo.

**Múltiples archivos en un solo with:**
\`\`\`
with open("entrada.txt", "r") as f_in, open("salida.txt", "w") as f_out:
    for linea in f_in:
        f_out.write(linea.upper())
\`\`\`

**¿Cuándo es obligatorio with?**
Siempre que trabajes con archivos. No hay razón para usar open()/close() manual en Python moderno.`,
    codeExample: `# ❌ Forma peligrosa: si hay error, archivo queda abierto
# archivo = open("datos.txt", "r")
# datos = archivo.read()
# proceso_que_puede_fallar(datos)
# archivo.close()  ← puede no ejecutarse

# ✅ Forma correcta: with garantiza el cierre
with open("datos.txt", "w", encoding="utf-8") as f:
    f.write("Contenido de prueba\\n")
# Aquí el archivo ya está cerrado, incluso si hubo error

# Verificar que está cerrado
with open("datos.txt", "r", encoding="utf-8") as f:
    print(f.closed)    # False (aún dentro del with)
print(f.closed)        # True (fuera del with)

# Múltiples archivos en un solo with
with open("origen.txt", "w", encoding="utf-8") as f:
    for i in range(1, 6):
        f.write(f"Línea {i}\\n")

with open("origen.txt", "r", encoding="utf-8") as entrada, \
     open("mayusculas.txt", "w", encoding="utf-8") as salida:
    for linea in entrada:
        salida.write(linea.upper())

# Verificar el resultado
with open("mayusculas.txt", "r", encoding="utf-8") as f:
    print(f.read())

# with también funciona con errores
try:
    with open("archivo.txt", "r", encoding="utf-8") as f:
        contenido = f.read()
        # Simular un error
        resultado = int("texto_invalido")
except (FileNotFoundError, ValueError) as e:
    print(f"Error capturado: {e}")
# El archivo se cierra correctamente de todas formas

# Truco: leer y escribir al mismo tiempo (modo r+)
with open("datos.txt", "r+", encoding="utf-8") as f:
    contenido = f.read()
    f.seek(0)                    # Volver al inicio
    f.write(contenido.upper())   # Sobreescribir en mayúsculas
    f.truncate()                 # Eliminar lo que sobre`,
    keyPoints: [
      'with open() garantiza que el archivo se cierra aunque ocurra un error.',
      'El archivo.closed es True fuera del with, False dentro.',
      'Puedes abrir múltiples archivos en un solo with separados por coma.',
      'with usa el protocolo de context manager (__enter__ y __exit__).',
      'El archivo se cierra al salir del with, sea normalmente o por excepción.',
      'Combina with con try/except para manejar FileNotFoundError y otros errores.',
    ],
    exercise: {
      description: 'Escribe un programa que copie el contenido de un archivo "original.txt" a "copia.txt" pero invirtiendo el orden de las líneas (la última línea del original es la primera de la copia). Usa with para ambos archivos.',
      hint: 'Lee todas las líneas con .readlines(), usa [::-1] para invertir la lista, y escribe con .writelines() en el segundo archivo.',
    },
    quiz: [
      {
        question: '¿Qué garantiza "with open(...) as f:" que no garantiza open()/close() manual?',
        options: ['Mayor velocidad de lectura', 'Que el archivo se cierra aunque ocurra un error', 'Que el archivo no puede corromperse', 'Que solo un proceso puede leer el archivo'],
        correctAnswer: 'Que el archivo se cierra aunque ocurra un error',
        correctFeedback: 'with usa un context manager que llama a __exit__ al salir del bloque, sin importar si hubo error. Con open()/close() manual, un error puede impedir que close() se ejecute.',
        incorrectFeedback: 'La ventaja de with es que garantiza el cierre del archivo incluso cuando ocurre una excepción. Con open()/close() manual, si hay un error antes de close(), el archivo permanece abierto.',
      },
      {
        question: '¿Qué valor tiene f.closed justo DESPUÉS de salir del bloque with?',
        options: ['False', 'True', 'None', 'Depende de si hubo error'],
        correctAnswer: 'True',
        correctFeedback: 'Al salir del bloque with (por cualquier motivo), Python cierra el archivo automáticamente. f.closed se convierte en True.',
        incorrectFeedback: 'Al salir del bloque with, Python cierra el archivo. La propiedad f.closed pasa a ser True. Dentro del with es False porque el archivo aún está abierto.',
      },
      {
        question: '¿Cómo se abren dos archivos al mismo tiempo en un solo with?',
        options: [
          'with open("a.txt") and open("b.txt") as f1, f2:',
          'with open("a.txt") as f1, open("b.txt") as f2:',
          'with [open("a.txt"), open("b.txt")] as [f1, f2]:',
          'No es posible abrir dos archivos en el mismo with',
        ],
        correctAnswer: 'with open("a.txt") as f1, open("b.txt") as f2:',
        correctFeedback: 'Puedes abrir múltiples archivos en un solo with separando los context managers con coma. Ambos archivos se cerrarán al salir del bloque.',
        incorrectFeedback: 'La sintaxis correcta es separar los context managers con coma: with open("a.txt") as f1, open("b.txt") as f2:. Ambos archivos quedan disponibles y se cierran al salir del bloque.',
      },
      {
        question: '¿Qué protocolo de Python hace que "with" funcione con archivos?',
        options: ['El protocolo iterator (__iter__, __next__)', 'El protocolo context manager (__enter__, __exit__)', 'El protocolo descriptor (__get__, __set__)', 'El protocolo comparable (__eq__, __lt__)'],
        correctAnswer: 'El protocolo context manager (__enter__, __exit__)',
        correctFeedback: 'with funciona con cualquier objeto que implemente __enter__ y __exit__. Los archivos lo implementan: __enter__ devuelve el archivo y __exit__ lo cierra.',
        incorrectFeedback: 'with usa el protocolo context manager: __enter__ (lo que pasa al entrar al with) y __exit__ (lo que pasa al salir, incluyendo cerrar el archivo). Es por eso que with funciona con archivos.',
      },
      {
        question: '¿Qué hace f.seek(0) dentro de un archivo abierto?',
        options: ['Cierra el archivo', 'Mueve el cursor de lectura al inicio del archivo', 'Lee el primer byte del archivo', 'Elimina el contenido del archivo'],
        correctAnswer: 'Mueve el cursor de lectura al inicio del archivo',
        correctFeedback: 'seek(0) posiciona el cursor al byte 0 (el inicio). Es útil cuando quieres leer un archivo que ya leíste, o cuando necesitas leer y escribir en el mismo archivo.',
        incorrectFeedback: 'f.seek(0) mueve el cursor (la posición actual de lectura/escritura) al principio del archivo (byte 0). Es necesario si quieres volver a leer desde el principio después de haber leído.',
      },
    ],
  },
  {
    slug: 'modos-apertura-archivos',
    title: 'Modos de apertura de archivos',
    module: 'Archivos en Python',
    moduleNumber: 8,
    order: 29,
    description: 'Aprende la diferencia entre los modos r, w, a, x, r+ y b, y cuándo usar cada uno.',
    explanation: `Python tiene varios modos para abrir archivos. Elegir el correcto es importante para no perder datos accidentalmente.

**Modos de texto:**
| Modo | Nombre | ¿Crea si no existe? | ¿Borra contenido? | ¿Lee? | ¿Escribe? |
|------|--------|--------------------|--------------------|-------|-----------|
| "r" | read | No (FileNotFoundError) | No | Sí | No |
| "w" | write | Sí | Sí | No | Sí |
| "a" | append | Sí | No | No | Al final |
| "x" | exclusive | No (FileExistsError) | — | No | Sí |
| "r+" | read+write | No | No | Sí | Sí |
| "w+" | write+read | Sí | Sí | Sí | Sí |
| "a+" | append+read | Sí | No | Sí | Al final |

**Modo binario (b):**
Agrega "b" para trabajar con archivos no texto: imágenes, PDFs, ejecutables.
- \`"rb"\` — leer binario
- \`"wb"\` — escribir binario

**¿Cuándo usar cada modo?**
- \`"r"\`: leer un archivo que debe existir.
- \`"w"\`: crear un archivo nuevo o sobreescribir uno existente.
- \`"a"\`: agregar datos a un archivo existente (logs).
- \`"x"\`: crear un archivo asegurándote de no sobreescribir.
- \`"r+"\`: leer y modificar un archivo existente.
- \`"rb"\`/\`"wb"\`: copiar imágenes, procesar archivos binarios.`,
    codeExample: `# Modo "r" — solo lectura
try:
    with open("config.txt", "r", encoding="utf-8") as f:
        print(f.read())
except FileNotFoundError:
    print("Config no encontrada, usando valores por defecto")

# Modo "w" — crear/sobreescribir
with open("config.txt", "w", encoding="utf-8") as f:
    f.write("tema=oscuro\\n")
    f.write("idioma=español\\n")
    f.write("fuente=16\\n")

# Modo "a" — agregar al final (no borra)
import datetime
with open("registro.log", "a", encoding="utf-8") as f:
    timestamp = datetime.datetime.now().isoformat()
    f.write(f"{timestamp} - Aplicación iniciada\\n")

# Modo "x" — crear solo si no existe
try:
    with open("secreto.txt", "x", encoding="utf-8") as f:
        f.write("Datos confidenciales\\n")
    print("Archivo creado")
except FileExistsError:
    print("¡El archivo ya existe! No se sobrescribió.")

# Modo "r+" — leer y escribir sin borrar
with open("config.txt", "r+", encoding="utf-8") as f:
    contenido = f.read()
    print("Antes:", contenido[:30])
    f.seek(0)
    f.write("tema=claro\\n")   # Modifica solo el inicio
    # ¡Cuidado! r+ no trunca, puede mezclar datos

# Modo binario "rb" / "wb" — copiar un archivo
def copiar_archivo(origen, destino):
    with open(origen, "rb") as f_in:
        with open(destino, "wb") as f_out:
            f_out.write(f_in.read())
    print(f"'{origen}' copiado a '{destino}'")

# Modo "a+" — leer y agregar
with open("notas.txt", "a+", encoding="utf-8") as f:
    f.write("Nueva nota\\n")
    f.seek(0)              # Volver al inicio para leer
    todo = f.read()
    print("Contenido completo:")
    print(todo)`,
    keyPoints: [
      '"r" lanza FileNotFoundError si el archivo no existe; nunca crea ni modifica.',
      '"w" siempre borra el contenido anterior — usar con precaución.',
      '"a" es seguro para logs: nunca borra, siempre agrega al final.',
      '"x" es la opción más segura para crear archivos nuevos.',
      'Agrega "b" para archivos binarios: imágenes, PDFs, ejecutables.',
      '"r+" permite leer y escribir pero requiere seek() para posicionar el cursor.',
    ],
    exercise: {
      description: 'Crea un sistema de configuración que: 1) guarde configuraciones en "config.txt" con modo "w", 2) lea la configuración con modo "r", 3) actualice un valor específico con "r+", y 4) agregue un log de cambios a "cambios.log" con modo "a".',
      hint: 'Para actualizar un valor específico con "r+", lee todo el contenido, modifica el string en Python, vuelve al inicio con seek(0), escribe el nuevo contenido y usa truncate() para eliminar lo que sobre.',
    },
    quiz: [
      {
        question: '¿Cuál es el modo más seguro para crear un nuevo archivo sin riesgo de sobreescribir datos?',
        options: ['"w"', '"a"', '"x"', '"r+"'],
        correctAnswer: '"x"',
        correctFeedback: '"x" (exclusive creation) lanza FileExistsError si el archivo ya existe, evitando sobreescrituras accidentales. Es el modo más seguro para crear archivos nuevos.',
        incorrectFeedback: '"x" es el más seguro porque falla si el archivo ya existe. "w" sobreescribiría silenciosamente sin avisar. "a" agrega al final y "r+" requiere que exista.',
      },
      {
        question: '¿Qué modo necesitas para copiar una imagen PNG de un lugar a otro?',
        options: ['"r" y "w"', '"rb" y "wb"', '"r" y "a"', '"rt" y "wt"'],
        correctAnswer: '"rb" y "wb"',
        correctFeedback: 'Los archivos de imagen son binarios. Debes usar "rb" para leer y "wb" para escribir. Sin la "b", Python intentaría interpretar los bytes como texto y corrompería el archivo.',
        incorrectFeedback: 'Las imágenes son archivos binarios. Debes usar "rb" (read binary) para leer y "wb" (write binary) para escribir. Usar "r" sin "b" en archivos binarios puede corromper los datos.',
      },
      {
        question: '¿Qué diferencia hay entre "w" y "w+"?',
        options: [
          '"w+" es más seguro que "w"',
          '"w" solo escribe; "w+" permite leer y escribir (ambos borran el contenido existente)',
          '"w+" no borra el contenido anterior',
          '"w" y "w+" son exactamente iguales',
        ],
        correctAnswer: '"w" solo escribe; "w+" permite leer y escribir (ambos borran el contenido existente)',
        correctFeedback: 'Ambos modos borran el contenido existente. La diferencia es que "w+" también permite leer del archivo después de escribir (con seek() para posicionarse).',
        incorrectFeedback: '"w" permite solo escribir; "w+" permite leer y escribir. Ambos crean el archivo si no existe y borran el contenido si existe. Para leer sin borrar, usa "r+".',
      },
      {
        question: '¿Qué ocurre si abres un archivo existente con modo "a" y luego escribes?',
        options: ['El contenido anterior se borra', 'El nuevo contenido se agrega AL FINAL del archivo', 'El nuevo contenido reemplaza solo la primera línea', 'Se lanza un error porque el archivo ya tiene contenido'],
        correctAnswer: 'El nuevo contenido se agrega AL FINAL del archivo',
        correctFeedback: '"a" (append) posiciona el cursor al final del archivo automáticamente y agrega sin borrar. Es perfecto para registros y logs.',
        incorrectFeedback: 'El modo "a" siempre agrega al final del archivo sin borrar nada. El cursor se posiciona automáticamente al final para que las escrituras no sobreescriban el contenido existente.',
      },
      {
        question: '¿Por qué el modo "r+" requiere usar f.seek(0) antes de escribir al inicio del archivo?',
        options: ['Porque "r+" solo permite escribir al final', 'Porque al leer el archivo el cursor queda al final, y seek(0) lo regresa al inicio', 'Porque seek(0) es necesario para todos los modos de escritura', 'No requiere seek(0), es opcional'],
        correctAnswer: 'Porque al leer el archivo el cursor queda al final, y seek(0) lo regresa al inicio',
        correctFeedback: 'Después de read(), el cursor está al final del archivo. Si quieres escribir desde el principio, necesitas seek(0) para mover el cursor al inicio.',
        incorrectFeedback: 'Cuando lees un archivo con read(), el cursor queda al final. Si luego quieres escribir desde el inicio, debes usar seek(0) para mover el cursor al byte 0. Sin seek(0), escribirías al final del archivo.',
      },
    ],
  },
  {
    slug: 'archivos-csv',
    title: 'Trabajar con archivos CSV',
    module: 'Archivos en Python',
    moduleNumber: 8,
    order: 30,
    description: 'Aprende a leer y escribir archivos CSV para guardar y procesar información en formato de tabla.',
    explanation: `Los archivos **CSV** (Comma-Separated Values) son archivos de texto donde los datos se organizan en filas y columnas separadas por comas. Son el formato más universal para intercambiar datos tabulares.

**¿Por qué usar el módulo csv?**
Aunque podrías leer un CSV manualmente con split(","), el módulo \`csv\` maneja automáticamente:
- Campos que contienen comas dentro de comillas: \`"García, Ana"\`
- Comillas dentro de campos
- Diferentes delimitadores (punto y coma, tabulación)

**Leer CSV:**
\`\`\`
import csv
with open("datos.csv", "r", encoding="utf-8") as f:
    lector = csv.reader(f)
    for fila in lector:
        print(fila)   # lista de strings
\`\`\`

**Leer como diccionario:**
\`csv.DictReader\` usa la primera fila como nombres de columna:
\`\`\`
with open("datos.csv") as f:
    for fila in csv.DictReader(f):
        print(fila["nombre"], fila["edad"])
\`\`\`

**Escribir CSV:**
\`csv.writer\` maneja automáticamente las comillas cuando es necesario:
\`\`\`
with open("salida.csv", "w", newline="") as f:
    escritor = csv.writer(f)
    escritor.writerow(["nombre", "edad"])
    escritor.writerows([["Ana", 25], ["Luis", 30]])
\`\`\`

**Importante:** usa \`newline=""\` al abrir CSVs para escribir en Windows, para evitar líneas en blanco dobles.`,
    codeExample: `import csv

# ── CREAR un CSV ──────────────────────────────────
estudiantes = [
    ["nombre", "nota", "ciudad"],    # encabezado
    ["Ana García", 9.5, "Madrid"],
    ["Luis Pérez", 7.2, "Lima"],
    ["María López", 8.8, "Bogotá"],
    ["Carlos Ruiz", 6.5, "México"],
]

with open("estudiantes.csv", "w", newline="", encoding="utf-8") as f:
    escritor = csv.writer(f)
    escritor.writerows(estudiantes)
print("CSV creado")

# ── LEER un CSV básico ───────────────────────────
print("\\n--- Leyendo CSV ---")
with open("estudiantes.csv", "r", encoding="utf-8") as f:
    lector = csv.reader(f)
    encabezado = next(lector)    # Saltar la primera fila
    print("Columnas:", encabezado)
    for fila in lector:
        nombre, nota, ciudad = fila
        print(f"  {nombre} ({ciudad}): {nota}")

# ── LEER como DictReader (más cómodo) ───────────
print("\\n--- DictReader ---")
with open("estudiantes.csv", "r", encoding="utf-8") as f:
    for fila in csv.DictReader(f):
        nota = float(fila["nota"])
        estado = "Aprobado" if nota >= 7 else "Reprobado"
        print(f"  {fila['nombre']}: {nota:.1f} → {estado}")

# ── FILTRAR y PROCESAR datos CSV ─────────────────
def leer_csv_a_lista(archivo):
    with open(archivo, "r", encoding="utf-8") as f:
        return list(csv.DictReader(f))

datos = leer_csv_a_lista("estudiantes.csv")
notas = [float(e["nota"]) for e in datos]
print(f"\\nPromedio: {sum(notas)/len(notas):.2f}")
print(f"Mejor nota: {max(notas)}")
aprobados = [e for e in datos if float(e["nota"]) >= 7]
print(f"Aprobados: {len(aprobados)}/{len(datos)}")

# ── ESCRIBIR con DictWriter ──────────────────────
campos = ["nombre", "nota", "ciudad", "estado"]
with open("resultado.csv", "w", newline="", encoding="utf-8") as f:
    escritor = csv.DictWriter(f, fieldnames=campos)
    escritor.writeheader()
    for est in datos:
        nota = float(est["nota"])
        escritor.writerow({
            "nombre": est["nombre"],
            "nota": nota,
            "ciudad": est["ciudad"],
            "estado": "Aprobado" if nota >= 7 else "Reprobado"
        })
print("resultado.csv creado con estado")`,
    keyPoints: [
      'El módulo csv maneja comas dentro de campos, comillas y distintos delimitadores.',
      'csv.reader devuelve cada fila como una lista de strings.',
      'csv.DictReader usa la primera fila como claves del diccionario.',
      'csv.writer y csv.DictWriter escriben datos correctamente formateados.',
      'Usa newline="" al abrir CSV para escritura en Windows (evita líneas dobles).',
      'Los valores del CSV siempre se leen como strings — convierte con int() o float() si necesitas números.',
    ],
    exercise: {
      description: 'Crea un programa que lea el archivo "estudiantes.csv" y genere un nuevo archivo "resumen.csv" con: el nombre, la nota, y una columna "calificacion" que diga "Excelente" (>=9), "Bueno" (>=7), o "Regular" (<7). Al final imprime cuántos hay en cada categoría.',
      hint: 'Usa DictReader para leer, crea una función para determinar la calificación, y usa DictWriter para escribir el resumen.',
    },
    quiz: [
      {
        question: '¿Por qué es mejor usar el módulo csv en lugar de split(",") para leer archivos CSV?',
        options: ['csv es más rápido', 'csv maneja correctamente campos que contienen comas dentro de comillas', 'csv convierte automáticamente números', 'csv no requiere abrir el archivo primero'],
        correctAnswer: 'csv maneja correctamente campos que contienen comas dentro de comillas',
        correctFeedback: 'Si un campo contiene una coma, se escribe entre comillas: "García, Ana". split(",") lo rompería en dos partes incorrectas. csv.reader lo maneja correctamente.',
        incorrectFeedback: 'El módulo csv maneja correctamente los casos especiales: campos con comas dentro de comillas, comillas escapadas, etc. split(",") fallaría con "García, Ana" porque lo dividiría en "García" y " Ana".',
      },
      {
        question: '¿Qué diferencia hay entre csv.reader y csv.DictReader?',
        options: [
          'csv.reader es más rápido',
          'csv.reader devuelve listas; csv.DictReader devuelve diccionarios usando la primera fila como claves',
          'csv.DictReader solo funciona si el CSV tiene exactamente 3 columnas',
          'No hay diferencia funcional',
        ],
        correctAnswer: 'csv.reader devuelve listas; csv.DictReader devuelve diccionarios usando la primera fila como claves',
        correctFeedback: 'csv.reader devuelve cada fila como una lista. csv.DictReader usa la primera fila (encabezado) como claves y devuelve diccionarios: fila["nombre"] en lugar de fila[0].',
        incorrectFeedback: 'csv.reader devuelve listas (accedes por índice: fila[0]). csv.DictReader devuelve diccionarios (accedes por nombre: fila["nombre"]). DictReader es más legible cuando el CSV tiene encabezados.',
      },
      {
        question: '¿Por qué se usa newline="" al abrir un archivo CSV para escritura?',
        options: ['Para agregar líneas en blanco entre registros', 'Para evitar que csv.writer agregue líneas en blanco dobles en Windows', 'Para que el CSV sea compatible con Excel', 'No es necesario, es solo convención'],
        correctAnswer: 'Para evitar que csv.writer agregue líneas en blanco dobles en Windows',
        correctFeedback: 'En Windows, sin newline="", Python agrega \\r\\n al final de cada línea Y csv.writer agrega otra \\n, resultando en líneas en blanco entre registros. newline="" previene esto.',
        incorrectFeedback: 'Sin newline="", en Windows aparecerán líneas en blanco entre cada fila del CSV porque Python y csv.writer ambos agregan saltos de línea. newline="" desactiva la conversión de Python y deja que csv.writer maneje los saltos.',
      },
      {
        question: '¿Qué tipo de dato devuelve csv.reader para cada celda del CSV?',
        options: ['El tipo correcto (int, float, etc.)', 'Siempre string', 'El tipo que Python detecte', 'bytes'],
        correctAnswer: 'Siempre string',
        correctFeedback: 'csv.reader devuelve todos los valores como strings. Debes convertir manualmente con int(), float(), etc. cuando necesites operar con números.',
        incorrectFeedback: 'csv.reader siempre devuelve strings, sin importar el contenido. Si el CSV tiene "9.5", recibirás el string "9.5". Debes convertirlo con float("9.5") si necesitas operarlo numéricamente.',
      },
      {
        question: '¿Qué hace next(lector) al iterar sobre un csv.reader?',
        options: ['Lee todos los registros', 'Lee y devuelve la siguiente fila (normalmente el encabezado)', 'Cierra el archivo', 'Mueve el cursor al final'],
        correctAnswer: 'Lee y devuelve la siguiente fila (normalmente el encabezado)',
        correctFeedback: 'next() avanza el iterador una posición y devuelve el elemento. Usarlo al inicio del csv.reader lee y descarta la primera fila (el encabezado) para que el for procese solo los datos.',
        incorrectFeedback: 'next(lector) lee la siguiente fila del CSV. Se usa comúnmente al inicio para leer/saltar el encabezado: encabezado = next(lector). Luego el for procesa solo las filas de datos.',
      },
    ],
  },
  {
    slug: 'archivos-json',
    title: 'Trabajar con archivos JSON',
    module: 'Archivos en Python',
    moduleNumber: 8,
    order: 31,
    description: 'Aprende a leer y escribir datos en formato JSON, el formato más usado en APIs y configuraciones.',
    explanation: `**JSON** (JavaScript Object Notation) es un formato de texto para representar datos estructurados. Es el estándar universal para intercambiar datos entre aplicaciones, APIs y servicios web.

**¿Por qué JSON?**
- Es legible por humanos.
- Es compatible con casi todos los lenguajes de programación.
- Se usa en APIs REST, configuraciones, bases de datos NoSQL.

**Tipos en JSON vs Python:**
| JSON | Python |
|------|--------|
| object {} | dict |
| array [] | list |
| string "" | str |
| number | int / float |
| true/false | True/False |
| null | None |

**El módulo json:**
- \`json.load(archivo)\` — leer JSON desde un archivo.
- \`json.dump(datos, archivo)\` — escribir JSON a un archivo.
- \`json.loads(texto)\` — convertir un string JSON a Python.
- \`json.dumps(datos)\` — convertir Python a string JSON.

**Formato legible:**
Usa \`indent=4\` para que el JSON se guarde con indentación, más fácil de leer.
\`\`\`
json.dump(datos, f, indent=4, ensure_ascii=False)
\`\`\`
\`ensure_ascii=False\` permite guardar caracteres como ñ, á, é correctamente.`,
    codeExample: `import json

# ── ESCRIBIR JSON a un archivo ───────────────────
configuracion = {
    "app": "Python desde Cero",
    "version": "1.0",
    "idioma": "español",
    "opciones": {
        "modo_oscuro": True,
        "fuente_tamaño": 16,
        "notificaciones": False
    },
    "modulos": ["fundamentos", "funciones", "OOP"]
}

with open("config.json", "w", encoding="utf-8") as f:
    json.dump(configuracion, f, indent=4, ensure_ascii=False)
print("config.json creado")

# ── LEER JSON desde un archivo ───────────────────
with open("config.json", "r", encoding="utf-8") as f:
    datos = json.load(f)

print(f"App: {datos['app']}")
print(f"Idioma: {datos['idioma']}")
print(f"Modo oscuro: {datos['opciones']['modo_oscuro']}")
print(f"Módulos: {', '.join(datos['modulos'])}")

# ── json.dumps y json.loads (con strings) ────────
# Convertir Python → string JSON
usuario = {"nombre": "Ana", "edad": 25}
texto_json = json.dumps(usuario, ensure_ascii=False)
print(f"JSON como string: {texto_json}")
print(type(texto_json))   # <class 'str'>

# Convertir string JSON → Python
json_recibido = '{"nombre": "Luis", "activo": true}'
usuario2 = json.loads(json_recibido)
print(usuario2["nombre"])   # Luis
print(type(usuario2))       # <class 'dict'>

# ── Guardar y cargar una lista de objetos ────────
estudiantes = [
    {"nombre": "Ana", "nota": 9.5, "aprobado": True},
    {"nombre": "Luis", "nota": 6.8, "aprobado": False},
    {"nombre": "María", "nota": 8.2, "aprobado": True},
]

with open("estudiantes.json", "w", encoding="utf-8") as f:
    json.dump(estudiantes, f, indent=2, ensure_ascii=False)

with open("estudiantes.json", "r", encoding="utf-8") as f:
    datos_leidos = json.load(f)

aprobados = [e for e in datos_leidos if e["aprobado"]]
print(f"Aprobados: {len(aprobados)}")

# ── Actualizar un JSON ────────────────────────────
with open("config.json", "r", encoding="utf-8") as f:
    config = json.load(f)

config["opciones"]["modo_oscuro"] = False
config["version"] = "1.1"

with open("config.json", "w", encoding="utf-8") as f:
    json.dump(config, f, indent=4, ensure_ascii=False)
print("Config actualizado")`,
    keyPoints: [
      'json.load() lee un archivo JSON y devuelve un dict o list de Python.',
      'json.dump() convierte un dict/list de Python y lo guarda en un archivo.',
      'json.loads() y json.dumps() trabajan con strings en lugar de archivos.',
      'indent=4 hace el JSON legible con indentación de 4 espacios.',
      'ensure_ascii=False permite guardar caracteres como ñ, á, é correctamente.',
      'JSON es ideal para configuraciones, APIs y transferencia de datos entre sistemas.',
    ],
    exercise: {
      description: 'Crea un sistema de "lista de contactos" que use JSON. Implementa funciones para: agregar un contacto (nombre, teléfono, email), listar todos los contactos, y buscar un contacto por nombre. Guarda y carga los contactos desde "contactos.json".',
      hint: 'Carga el archivo al inicio (o inicia con [] si no existe). Agrega el nuevo contacto a la lista. Guarda siempre con json.dump() al modificar. Usa FileNotFoundError para cuando el archivo no existe aún.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre json.load() y json.loads()?',
        options: [
          'load() es más rápido que loads()',
          'load() lee desde un archivo; loads() convierte un string JSON a Python',
          'loads() lee desde un archivo; load() convierte un string',
          'No hay diferencia, son sinónimos',
        ],
        correctAnswer: 'load() lee desde un archivo; loads() convierte un string JSON a Python',
        correctFeedback: 'json.load(archivo) lee y parsea JSON desde un objeto archivo. json.loads(texto) parsea un string que contiene JSON. La "s" en loads significa "string".',
        incorrectFeedback: 'json.load() trabaja con archivos (recibe un objeto de archivo). json.loads() trabaja con strings (la "s" es de "string"). Por ejemplo: datos = json.loads(\'{"a": 1}\').',
      },
      {
        question: '¿Qué tipo de Python corresponde a un objeto {} de JSON?',
        options: ['list', 'tuple', 'set', 'dict'],
        correctAnswer: 'dict',
        correctFeedback: 'Los objetos JSON {} se convierten a diccionarios (dict) de Python. Los arrays JSON [] se convierten a listas (list).',
        incorrectFeedback: 'Los objetos JSON ({}) se mapean a diccionarios de Python (dict). Los arrays JSON ([]) se mapean a listas. true/false JSON se mapean a True/False. null a None.',
      },
      {
        question: '¿Para qué sirve ensure_ascii=False en json.dump()?',
        options: ['Para no validar el JSON antes de guardar', 'Para guardar caracteres no ASCII (como ñ, á, é) en su forma original en lugar de codificarlos como \\uXXXX', 'Para hacer el JSON más rápido', 'Para permitir tipos de datos que JSON no soporta'],
        correctAnswer: 'Para guardar caracteres no ASCII (como ñ, á, é) en su forma original en lugar de codificarlos como \\uXXXX',
        correctFeedback: 'Sin ensure_ascii=False, la ñ se guardaría como \\u00f1 en el JSON. Con ensure_ascii=False se guarda directamente como "ñ", haciendo el archivo más legible.',
        incorrectFeedback: 'Por defecto, json.dump() convierte caracteres no ASCII a secuencias de escape (\\u00f1 para ñ). ensure_ascii=False deshabilita esto y guarda los caracteres directamente como ñ, á, é, etc.',
      },
      {
        question: '¿Qué pasa con el tipo booleano True de Python al convertirlo a JSON con json.dumps()?',
        options: ['Se guarda como "True" (con mayúscula)', 'Se guarda como "true" (en minúscula, que es el formato JSON)', 'Se guarda como 1', 'Lanza un error porque JSON no tiene booleanos'],
        correctAnswer: 'Se guarda como "true" (en minúscula, que es el formato JSON)',
        correctFeedback: 'JSON usa true/false en minúscula. Python usa True/False con mayúscula. json.dumps() hace la conversión automáticamente: True → true, False → false, None → null.',
        incorrectFeedback: 'JSON usa true y false en minúscula, mientras Python usa True y False. json.dumps() convierte automáticamente: Python True → JSON true, Python None → JSON null.',
      },
      {
        question: '¿Cuál es la forma correcta de actualizar un valor en un archivo JSON?',
        options: [
          'Abrir con modo "a" y agregar el nuevo valor',
          'Leer el JSON, modificar el dict en Python, y sobreescribir el archivo con json.dump()',
          'Usar json.update() directamente sobre el archivo',
          'Abrir con modo "r+" y escribir en la posición exacta del valor',
        ],
        correctAnswer: 'Leer el JSON, modificar el dict en Python, y sobreescribir el archivo con json.dump()',
        correctFeedback: 'El flujo correcto es: 1) leer con json.load(), 2) modificar el dict en Python, 3) guardar de nuevo con json.dump(). No existe json.update() ni forma de editar el JSON directamente en disco.',
        incorrectFeedback: 'Para actualizar JSON: 1) lee el archivo con json.load() → obtienes un dict, 2) modifica el dict con Python (dict["clave"] = nuevo_valor), 3) guarda con json.dump() sobreescribiendo el archivo.',
      },
    ],
  },
]
