import type { Lesson } from '@/types'

export const lessonsModule21: Lesson[] = [
  {
    slug: 'automatizacion-python',
    title: '¿Qué es automatizar con Python?',
    module: 'Automatización de tareas',
    moduleNumber: 21,
    order: 102,
    description: 'Aprende qué significa automatizar tareas con Python y cómo identificar procesos repetitivos que pueden convertirse en scripts.',
    explanation: `## ¿Qué es automatizar con Python?

Automatizar significa hacer que la computadora realice tareas repetitivas por ti, sin intervención manual. Python es uno de los lenguajes más usados para automatización porque es sencillo de leer y tiene bibliotecas para casi cualquier tarea.

### Ejemplos del mundo real

- **Renombrar 500 archivos** según un patrón: en vez de hacerlo uno por uno, un script lo hace en segundos.
- **Enviar un reporte semanal por correo**: el script se ejecuta solo cada lunes.
- **Descargar datos de una web cada día**: sin abrir el navegador manualmente.
- **Organizar fotos por fecha** en carpetas automáticamente.
- **Convertir decenas de archivos** de un formato a otro.

### El mentalidad de la automatización

> Si haces algo más de dos veces, considera automatizarlo.

La automatización no es solo para grandes empresas. Un estudiante puede automatizar la descarga de materiales, un fotógrafo puede organizar sus fotos, un analista puede generar reportes con un clic.

### Identificar tareas candidatas

Pregúntate:
1. ¿Hago esto repetidamente con los mismos pasos?
2. ¿Sigue siempre el mismo patrón?
3. ¿Es aburrido y propenso a errores humanos?

Si respondiste "sí" a las tres, es un buen candidato para automatizar.

### Tu primer script de automatización

\`\`\`python
import os

# Crear múltiples carpetas de una vez
meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
         "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

for mes in meses:
    os.makedirs(f"reportes/{mes}", exist_ok=True)
    print(f"Carpeta creada: reportes/{mes}")

print("¡Listo! 12 carpetas creadas en segundos.")
\`\`\`

Sin Python: 12 clics manuales para crear carpetas.
Con Python: 3 segundos y 0 errores.`,
    codeExample: `import os
import pathlib

# Ejemplo 1: Crear estructura de carpetas para un año completo
def crear_estructura_anual(anio):
    """Crea carpetas mensuales para organizar archivos por año."""
    meses = [
        "01_enero", "02_febrero", "03_marzo", "04_abril",
        "05_mayo", "06_junio", "07_julio", "08_agosto",
        "09_septiembre", "10_octubre", "11_noviembre", "12_diciembre"
    ]

    creadas = 0
    for mes in meses:
        ruta = f"archivos/{anio}/{mes}"
        os.makedirs(ruta, exist_ok=True)
        creadas += 1

    print(f"Se crearon {creadas} carpetas para el año {anio}.")

crear_estructura_anual(2025)

# Ejemplo 2: Renombrar archivos en lote con prefijo
def agregar_prefijo(carpeta, prefijo):
    """Agrega un prefijo a todos los archivos en una carpeta."""
    p = pathlib.Path(carpeta)
    archivos = list(p.iterdir())
    renombrados = 0

    for archivo in archivos:
        if archivo.is_file() and not archivo.name.startswith(prefijo):
            nuevo_nombre = archivo.parent / f"{prefijo}_{archivo.name}"
            archivo.rename(nuevo_nombre)
            renombrados += 1

    print(f"Renombrados: {renombrados} archivos")

# agregar_prefijo("documentos", "2025")

# Ejemplo 3: Identificar tareas repetitivas
tareas_candidatas = [
    {"tarea": "Renombrar archivos por fecha", "frecuencia": "Diario", "automatizable": True},
    {"tarea": "Generar reporte de ventas", "frecuencia": "Semanal", "automatizable": True},
    {"tarea": "Tomar decisiones creativas", "frecuencia": "Cuando sea", "automatizable": False},
    {"tarea": "Organizar fotos por mes", "frecuencia": "Mensual", "automatizable": True},
]

print("Análisis de tareas:")
for t in tareas_candidatas:
    estado = "✓ AUTOMATIZAR" if t["automatizable"] else "✗ Requiere humano"
    print(f"  {t['tarea']} ({t['frecuencia']}): {estado}")`,
    keyPoints: [
      'Automatizar significa hacer que Python realice tareas repetitivas en tu lugar',
      'Si haces algo más de dos veces de la misma forma, considera automatizarlo',
      'Python tiene módulos como os y pathlib ideales para automatización de archivos',
      'Las tareas candidatas son: repetitivas, predecibles y propensas a error humano',
      'Un script bien escrito puede hacer en segundos lo que tomaría horas manualmente',
    ],
    exercise: {
      description: 'Escribe un script que cree automáticamente una estructura de carpetas para organizar un proyecto de fotografía: una carpeta principal por año (2024 y 2025) y dentro de cada una, subcarpetas por mes (01_enero, 02_febrero, etc.). Al final, muestra cuántas carpetas se crearon en total.',
      hint: 'Usa os.makedirs() con exist_ok=True para crear carpetas sin errores. Puedes usar un bucle anidado: uno para los años y otro para los meses. Cuenta con una variable creadas += 1 dentro del bucle interior.',
    },
    quiz: [
      {
        question: '¿Cuál es la mejor definición de "automatización" en el contexto de Python?',
        options: [
          'Crear programas con inteligencia artificial',
          'Hacer que Python realice tareas repetitivas sin intervención manual',
          'Ejecutar Python en la nube',
          'Usar Python para diseñar interfaces gráficas',
        ],
        correctAnswer: 'Hacer que Python realice tareas repetitivas sin intervención manual',
        correctFeedback: '¡Correcto! Automatizar es delegar a Python las tareas repetitivas para que las ejecute de forma consistente, rápida y sin errores humanos.',
        incorrectFeedback: 'Automatización en Python se refiere a delegar tareas repetitivas al script. No requiere IA ni interfaces gráficas — simplemente instrucciones que la computadora sigue sola.',
      },
      {
        question: '¿Cuándo tiene más sentido automatizar una tarea?',
        options: [
          'Cuando la tarea es creativa y requiere juicio humano',
          'Cuando se hace una sola vez y no se repetirá',
          'Cuando la tarea es repetitiva, sigue un patrón claro y es propensa a errores',
          'Solo cuando se trabaja con grandes empresas',
        ],
        correctAnswer: 'Cuando la tarea es repetitiva, sigue un patrón claro y es propensa a errores',
        correctFeedback: '¡Exacto! Las mejores candidatas para automatizar son tareas predecibles, repetitivas y donde el error humano es común.',
        incorrectFeedback: 'La automatización brilla con tareas repetitivas y predecibles. Si una tarea requiere creatividad o juicio, el humano sigue siendo necesario.',
      },
      {
        question: '¿Qué módulo de Python se usa comúnmente para crear carpetas y trabajar con el sistema de archivos?',
        options: ['math', 'os', 'random', 'string'],
        correctAnswer: 'os',
        correctFeedback: '¡Correcto! El módulo `os` permite crear directorios (os.makedirs), listar archivos (os.listdir), y muchas otras operaciones con el sistema de archivos.',
        incorrectFeedback: 'El módulo `os` es el indicado para interactuar con el sistema operativo: crear carpetas, listar archivos, obtener rutas, etc. Es uno de los más usados en automatización.',
      },
      {
        question: '¿Qué hace `os.makedirs("carpeta/subcarpeta", exist_ok=True)` si la carpeta ya existe?',
        options: [
          'Lanza un error porque ya existe',
          'Borra la carpeta y la vuelve a crear',
          'No hace nada y continúa sin error',
          'Crea una segunda carpeta con nombre diferente',
        ],
        correctAnswer: 'No hace nada y continúa sin error',
        correctFeedback: '¡Correcto! El parámetro `exist_ok=True` indica que si la carpeta ya existe, no lances error. Útil para scripts que se ejecutan múltiples veces.',
        incorrectFeedback: 'Con `exist_ok=True`, si la carpeta ya existe Python simplemente la ignora y sigue. Sin ese parámetro, lanzaría un FileExistsError.',
      },
      {
        question: '¿Cuál de estos ejemplos es una tarea ideal para automatizar con Python?',
        options: [
          'Decidir el diseño visual de una aplicación',
          'Renombrar 300 fotos según la fecha en que fueron tomadas',
          'Escribir el contenido creativo de un blog',
          'Negociar contratos con clientes',
        ],
        correctAnswer: 'Renombrar 300 fotos según la fecha en que fueron tomadas',
        correctFeedback: '¡Perfecto! Renombrar archivos según un patrón es exactamente el tipo de tarea repetitiva y predecible que Python maneja en segundos.',
        incorrectFeedback: 'Renombrar archivos es la tarea ideal: es repetitiva, sigue un patrón claro y Python puede hacerla en segundos. Las otras opciones requieren criterio humano.',
      },
      {
        question: 'Analiza este código: `for i in range(5): os.makedirs(f"proyecto_{i}", exist_ok=True)`. ¿Qué carpetas crea?',
        options: [
          'proyecto_1, proyecto_2, proyecto_3, proyecto_4, proyecto_5',
          'proyecto_0, proyecto_1, proyecto_2, proyecto_3, proyecto_4',
          'proyecto_0 hasta proyecto_5 (6 carpetas)',
          'Solo una carpeta llamada "proyecto_i"',
        ],
        correctAnswer: 'proyecto_0, proyecto_1, proyecto_2, proyecto_3, proyecto_4',
        correctFeedback: '¡Correcto! `range(5)` genera los números 0, 1, 2, 3, 4. Se crean 5 carpetas con índices del 0 al 4.',
        incorrectFeedback: '`range(5)` produce 0, 1, 2, 3, 4 — empieza en 0 y excluye el 5. Se crean 5 carpetas: proyecto_0 hasta proyecto_4.',
      },
      {
        question: '¿Cuál es la "regla" práctica mencionada sobre cuándo automatizar?',
        options: [
          'Si la tarea tarda más de un minuto, automatízala',
          'Si haces algo más de dos veces, considera automatizarlo',
          'Solo automatiza si tienes más de 1000 archivos',
          'Automatiza únicamente tareas de trabajo, no personales',
        ],
        correctAnswer: 'Si haces algo más de dos veces, considera automatizarlo',
        correctFeedback: '¡Exacto! Esta es una buena regla práctica: si repites algo manualmente más de dos veces de la misma forma, probablemente vale la pena escribir un script.',
        incorrectFeedback: 'La regla es: si haces algo más de dos veces de la misma manera, considera automatizarlo. No depende del tiempo ni del número de archivos.',
      },
    ],
  },
  {
    slug: 'automatizar-tareas-repetitivas',
    title: 'Automatizar tareas repetitivas',
    module: 'Automatización de tareas',
    moduleNumber: 21,
    order: 103,
    description: 'Aprende a detectar tareas repetitivas y crear pequeños scripts para ahorrar tiempo.',
    explanation: `## Automatizar tareas repetitivas

La diferencia entre un programador y un no programador no es saber más, sino saber cuándo dejar que la computadora trabaje por ti.

### El antes y el después

| Tarea | Sin Python | Con Python |
|-------|-----------|------------|
| Renombrar 200 archivos | 2 horas | 5 segundos |
| Generar 50 reportes | 3 horas | 30 segundos |
| Procesar una lista de correos | 1 hora | 10 segundos |

### Ejemplo 1: Renombrar archivos en lote

Tienes 100 fotos llamadas \`IMG_001.jpg\`, \`IMG_002.jpg\`... y quieres renombrarlas a \`vacaciones_001.jpg\`, \`vacaciones_002.jpg\`...

\`\`\`python
import os

carpeta = "fotos_vacaciones"
for nombre in os.listdir(carpeta):
    if nombre.endswith(".jpg"):
        nuevo = nombre.replace("IMG_", "vacaciones_")
        os.rename(
            os.path.join(carpeta, nombre),
            os.path.join(carpeta, nuevo)
        )
print("Fotos renombradas.")
\`\`\`

### Ejemplo 2: Procesar una lista y generar salidas

Tienes una lista de estudiantes y quieres generar un archivo de texto para cada uno con su información:

\`\`\`python
estudiantes = [
    {"nombre": "Ana García", "nota": 9.2},
    {"nombre": "Luis Pérez", "nota": 7.8},
    {"nombre": "María López", "nota": 8.5},
]

os.makedirs("certificados", exist_ok=True)

for est in estudiantes:
    archivo = f"certificados/{est['nombre'].replace(' ', '_')}.txt"
    with open(archivo, "w", encoding="utf-8") as f:
        f.write(f"Certificado para: {est['nombre']}\\n")
        f.write(f"Nota final: {est['nota']}\\n")
        f.write("Felicidades por completar el curso.\\n")

print(f"Generados {len(estudiantes)} certificados.")
\`\`\`

### Clave: el patrón de automatización

Casi toda automatización sigue este patrón:
1. **Obtener** la lista de ítems (archivos, nombres, datos)
2. **Iterar** sobre cada ítem con un bucle
3. **Procesar** cada ítem de la misma forma
4. **Guardar o mostrar** el resultado`,
    codeExample: `import os
import pathlib

# ============================================
# Script 1: Renombrar archivos en lote
# ============================================
def renombrar_archivos(carpeta, patron_viejo, patron_nuevo, extension=None):
    """
    Renombra todos los archivos en una carpeta reemplazando un patrón.

    Args:
        carpeta: ruta de la carpeta con archivos
        patron_viejo: texto a reemplazar en el nombre
        patron_nuevo: texto de reemplazo
        extension: si se especifica, solo renombra archivos con esa extensión
    """
    p = pathlib.Path(carpeta)
    if not p.exists():
        print(f"La carpeta '{carpeta}' no existe.")
        return

    renombrados = 0
    for archivo in p.iterdir():
        if not archivo.is_file():
            continue
        if extension and archivo.suffix.lower() != extension.lower():
            continue
        if patron_viejo in archivo.name:
            nuevo_nombre = archivo.name.replace(patron_viejo, patron_nuevo)
            archivo.rename(archivo.parent / nuevo_nombre)
            renombrados += 1
            print(f"  {archivo.name} -> {nuevo_nombre}")

    print(f"Total renombrados: {renombrados}")

# Uso:
# renombrar_archivos("fotos", "IMG_", "vacaciones_", ".jpg")


# ============================================
# Script 2: Generar reportes desde una lista
# ============================================
def generar_reportes(ventas_por_vendedor, carpeta_salida="reportes"):
    """
    Genera un archivo de texto por vendedor con su resumen.
    """
    os.makedirs(carpeta_salida, exist_ok=True)

    for vendedor, ventas in ventas_por_vendedor.items():
        total = sum(ventas)
        promedio = total / len(ventas) if ventas else 0
        maximo = max(ventas) if ventas else 0

        nombre_archivo = f"{carpeta_salida}/{vendedor.replace(' ', '_')}_reporte.txt"
        with open(nombre_archivo, "w", encoding="utf-8") as f:
            f.write(f"REPORTE DE VENTAS\\n")
            f.write(f"Vendedor: {vendedor}\\n")
            f.write(f"{'=' * 30}\\n")
            f.write(f"Total de ventas: \${total:,.2f}\\n")
            f.write(f"Venta promedio:  \${promedio:,.2f}\\n")
            f.write(f"Mejor venta:     \${maximo:,.2f}\\n")

        print(f"Reporte generado: {nombre_archivo}")

# Ejemplo de uso:
datos_ventas = {
    "Ana García": [1500, 2300, 1800, 2100],
    "Luis Pérez": [980, 1200, 1100, 1350],
    "María López": [2200, 2800, 2500, 3000],
}

generar_reportes(datos_ventas)
print("\\n¡Reportes generados para todos los vendedores!")`,
    keyPoints: [
      'El patrón de automatización es: obtener lista → iterar → procesar → guardar resultado',
      'os.listdir() y pathlib.Path.iterdir() permiten recorrer los archivos de una carpeta',
      'os.rename() cambia el nombre o mueve un archivo',
      'Los bucles for son la herramienta central de la automatización por lotes',
      'Una función bien diseñada puede reutilizarse para distintas carpetas o datos',
      'Siempre verifica que la carpeta existe antes de operar sobre ella',
    ],
    exercise: {
      description: 'Escribe un script que lea una lista de productos (con nombre y precio) y genere un archivo de texto individual para cada producto con su información formateada. La lista debe tener al menos 4 productos. Guarda los archivos en una carpeta llamada "fichas_producto".',
      hint: 'Define la lista de productos como una lista de diccionarios: [{"nombre": "Laptop", "precio": 999.99}, ...]. Usa os.makedirs() para crear la carpeta y un bucle for para iterar. El nombre del archivo puede ser el nombre del producto con espacios reemplazados por guiones bajos.',
    },
    quiz: [
      {
        question: '¿Cuál es el patrón general que sigue casi toda automatización por lotes?',
        options: [
          'Abrir → Editar → Cerrar → Guardar',
          'Obtener lista → Iterar → Procesar → Guardar resultado',
          'Importar → Exportar → Validar → Reportar',
          'Conectar → Descargar → Filtrar → Mostrar',
        ],
        correctAnswer: 'Obtener lista → Iterar → Procesar → Guardar resultado',
        correctFeedback: '¡Correcto! Este patrón de cuatro pasos es la base de prácticamente toda automatización: obtener los ítems, recorrerlos con un bucle, procesarlos y guardar los resultados.',
        incorrectFeedback: 'El patrón universal es: Obtener lista → Iterar con un bucle → Procesar cada ítem → Guardar o mostrar el resultado. Este esquema aplica a renombrar archivos, generar reportes, enviar correos y más.',
      },
      {
        question: '¿Qué función de Python se usa para cambiar el nombre de un archivo?',
        options: ['os.rename()', 'os.move()', 'file.rename()', 'shutil.copy()'],
        correctAnswer: 'os.rename()',
        correctFeedback: '¡Exacto! `os.rename(ruta_original, ruta_nueva)` cambia el nombre o mueve un archivo. También funciona con pathlib: `archivo.rename(nuevo_nombre)`.',
        incorrectFeedback: '`os.rename(original, nuevo)` es la función correcta para renombrar. `shutil.copy()` copia pero no renombra. `file.rename()` no existe como función estándar de Python.',
      },
      {
        question: 'Tienes el código: `for nombre in os.listdir("documentos"): print(nombre)`. ¿Qué imprime?',
        options: [
          'Solo las carpetas dentro de "documentos"',
          'El contenido de cada archivo en "documentos"',
          'Los nombres de todos los archivos y carpetas en "documentos"',
          'Solo los archivos .txt',
        ],
        correctAnswer: 'Los nombres de todos los archivos y carpetas en "documentos"',
        correctFeedback: '¡Correcto! `os.listdir()` devuelve una lista con los nombres (solo nombres, no rutas completas) de todos los elementos en esa carpeta: archivos y subcarpetas.',
        incorrectFeedback: '`os.listdir()` devuelve los nombres de TODOS los elementos en la carpeta (archivos y subcarpetas). Para filtrar solo archivos, usa `os.path.isfile()` o pathlib.',
      },
      {
        question: '¿Para qué sirve el parámetro `encoding="utf-8"` al abrir un archivo?',
        options: [
          'Para que el archivo se abra más rápido',
          'Para manejar correctamente caracteres especiales como tildes y ñ',
          'Para comprimir el contenido del archivo',
          'Para que solo se pueda leer, no escribir',
        ],
        correctAnswer: 'Para manejar correctamente caracteres especiales como tildes y ñ',
        correctFeedback: '¡Correcto! UTF-8 es la codificación que soporta tildes, ñ, emojis y casi todos los caracteres del mundo. Sin ella, los textos en español pueden verse mal.',
        incorrectFeedback: '`encoding="utf-8"` asegura que los caracteres especiales del español (tildes, ñ) se guarden correctamente. En Windows es especialmente importante especificarlo.',
      },
      {
        question: '¿Qué ventaja tiene usar una función para la lógica de automatización en lugar de código directo?',
        options: [
          'Las funciones siempre son más rápidas que el código directo',
          'Se puede reutilizar la misma lógica con distintos datos o carpetas',
          'Las funciones no necesitan importar módulos',
          'El código dentro de funciones no puede tener errores',
        ],
        correctAnswer: 'Se puede reutilizar la misma lógica con distintos datos o carpetas',
        correctFeedback: '¡Exacto! Una función como `generar_reportes(datos)` puede llamarse con distintos datos sin duplicar código. Esto hace el script flexible y fácil de mantener.',
        incorrectFeedback: 'La principal ventaja de encapsular en funciones es la reutilización: puedes llamar la misma función con distintos parámetros. El código es más limpio y fácil de adaptar.',
      },
      {
        question: 'En el código `archivo.rename(archivo.parent / nuevo_nombre)`, ¿qué hace el operador `/`?',
        options: [
          'Divide la ruta entre dos partes',
          'Construye una ruta combinando la carpeta padre con el nuevo nombre',
          'Crea una carpeta nueva',
          'Es un error de sintaxis en Python',
        ],
        correctAnswer: 'Construye una ruta combinando la carpeta padre con el nuevo nombre',
        correctFeedback: '¡Correcto! En pathlib, el operador `/` es el operador de construcción de rutas. `archivo.parent / "nuevo.txt"` crea una ruta completa combinando el directorio padre con el nombre.',
        incorrectFeedback: 'En pathlib, el operador `/` une partes de rutas. Es equivalente a `os.path.join()` pero más legible. `archivo.parent / nuevo_nombre` crea la ruta completa al nuevo archivo.',
      },
    ],
  },
  {
    slug: 'pathlib-rutas-carpetas',
    title: 'Trabajar con rutas y carpetas usando pathlib',
    module: 'Automatización de tareas',
    moduleNumber: 21,
    order: 104,
    description: 'Aprende a manejar rutas de archivos y carpetas de forma moderna usando pathlib.',
    explanation: `## pathlib: La forma moderna de manejar rutas

Hasta hace poco, Python usaba \`os.path\` para trabajar con rutas de archivos. Era funcional pero verboso. Desde Python 3.4, \`pathlib\` ofrece una forma más clara y orientada a objetos.

### Comparación: os.path vs pathlib

\`\`\`python
import os
# Forma antigua
ruta = os.path.join("documentos", "proyectos", "datos.csv")
nombre = os.path.basename(ruta)
extension = os.path.splitext(nombre)[1]
existe = os.path.exists(ruta)

from pathlib import Path
# Forma moderna con pathlib
ruta = Path("documentos") / "proyectos" / "datos.csv"
nombre = ruta.name       # "datos.csv"
extension = ruta.suffix  # ".csv"
existe = ruta.exists()   # True o False
\`\`\`

### Crear y verificar rutas

\`\`\`python
from pathlib import Path

# Crear un objeto Path
p = Path("mi_proyecto/datos")

# Verificar existencia
if not p.exists():
    p.mkdir(parents=True)  # Crea la carpeta y todas las necesarias

# Información del path
archivo = Path("resultados/reporte_2025.csv")
print(archivo.name)    # reporte_2025.csv
print(archivo.stem)    # reporte_2025  (sin extensión)
print(archivo.suffix)  # .csv
print(archivo.parent)  # resultados/
\`\`\`

### Listar y filtrar archivos

\`\`\`python
from pathlib import Path

carpeta = Path("documentos")

# Todos los archivos CSV
archivos_csv = list(carpeta.glob("*.csv"))

# En todas las subcarpetas (recursivo)
todos_los_csv = list(carpeta.rglob("*.csv"))

# Solo los archivos (no carpetas)
archivos = [f for f in carpeta.iterdir() if f.is_file()]
\`\`\`

### Leer y escribir con pathlib

\`\`\`python
# Leer un archivo de texto
contenido = Path("notas.txt").read_text(encoding="utf-8")

# Escribir un archivo de texto
Path("salida.txt").write_text("Hola desde pathlib", encoding="utf-8")
\`\`\``,
    codeExample: `from pathlib import Path
import os

# ============================================
# Explorar propiedades de un path
# ============================================
def explorar_path(ruta_str):
    """Muestra todas las propiedades de un path."""
    p = Path(ruta_str)
    print(f"Path: {p}")
    print(f"  .name    = {p.name}")
    print(f"  .stem    = {p.stem}")
    print(f"  .suffix  = {p.suffix}")
    print(f"  .parent  = {p.parent}")
    print(f"  .exists  = {p.exists()}")
    print(f"  .is_file = {p.is_file()}")
    print(f"  .is_dir  = {p.is_dir()}")

explorar_path("documentos/proyectos/reporte_2025.csv")


# ============================================
# Encontrar todos los archivos de un tipo
# ============================================
def encontrar_archivos(carpeta, extension):
    """
    Busca todos los archivos con cierta extensión en una carpeta
    y sus subcarpetas.
    """
    p = Path(carpeta)
    if not p.exists():
        print(f"La carpeta '{carpeta}' no existe.")
        return []

    # rglob busca de forma recursiva en subcarpetas
    archivos = sorted(p.rglob(f"*{extension}"))

    print(f"Archivos {extension} en '{carpeta}':")
    for archivo in archivos:
        tamanio = archivo.stat().st_size
        print(f"  {archivo.relative_to(p)} ({tamanio} bytes)")

    return archivos

# Ejemplo: encontrar todos los CSV en la carpeta actual
# encontrar_archivos(".", ".csv")


# ============================================
# Crear estructura de carpetas
# ============================================
def crear_estructura(base, estructura):
    """
    Crea una estructura de directorios definida como diccionario.

    Args:
        base: carpeta raíz
        estructura: lista de subcarpetas a crear
    """
    base_path = Path(base)
    creadas = []

    for subcarpeta in estructura:
        ruta = base_path / subcarpeta
        ruta.mkdir(parents=True, exist_ok=True)
        creadas.append(ruta)

    print(f"Estructura creada en '{base}':")
    for c in creadas:
        print(f"  {c}")

    return creadas

estructura_proyecto = [
    "src",
    "src/modulos",
    "tests",
    "datos/entrada",
    "datos/salida",
    "reportes",
]

crear_estructura("mi_proyecto_demo", estructura_proyecto)


# ============================================
# Mover archivos de un tipo a una subcarpeta
# ============================================
def organizar_por_extension(carpeta_origen):
    """Mueve cada archivo a una subcarpeta según su extensión."""
    p = Path(carpeta_origen)
    movidos = 0

    for archivo in p.iterdir():
        if archivo.is_file():
            # Ej: .pdf -> subcarpeta "pdf"
            ext = archivo.suffix.lstrip(".").lower() or "sin_extension"
            destino = p / ext
            destino.mkdir(exist_ok=True)
            archivo.rename(destino / archivo.name)
            movidos += 1

    print(f"Organizados {movidos} archivos por extensión.")`,
    keyPoints: [
      'pathlib.Path es la forma moderna y recomendada de manejar rutas en Python 3',
      'El operador / construye rutas de forma legible: Path("carpeta") / "archivo.txt"',
      '.name, .stem, .suffix y .parent son propiedades clave de un Path',
      '.glob() y .rglob() permiten buscar archivos con patrones como "*.csv"',
      '.mkdir(parents=True, exist_ok=True) crea la carpeta y todas las necesarias sin errores',
      'pathlib combina verificación de existencia, lectura y escritura en una sola API',
    ],
    exercise: {
      description: 'Escribe un script usando pathlib que: 1) Reciba el path de una carpeta, 2) Liste todos los archivos .txt que contenga (buscando también en subcarpetas con rglob), 3) Para cada archivo, muestre su nombre, tamaño en bytes y la carpeta donde está. Si no hay archivos .txt, muestre un mensaje adecuado.',
      hint: 'Usa Path(carpeta).rglob("*.txt") para buscar recursivamente. Para el tamaño usa archivo.stat().st_size. Para la carpeta padre usa archivo.parent. Recuerda verificar que la carpeta exista con p.exists() antes de operar.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma correcta de unir rutas con pathlib?',
        options: [
          'Path("carpeta") + "archivo.txt"',
          'Path("carpeta") / "archivo.txt"',
          'Path("carpeta", "archivo.txt")',
          'os.path.join(Path("carpeta"), "archivo.txt")',
        ],
        correctAnswer: 'Path("carpeta") / "archivo.txt"',
        correctFeedback: '¡Correcto! En pathlib, el operador `/` se usa para construir rutas. Es más legible que `os.path.join()` y funciona igual en Windows, Mac y Linux.',
        incorrectFeedback: 'Con pathlib, el operador `/` une rutas: `Path("carpeta") / "subcarpeta" / "archivo.txt"`. Es equivalente a `os.path.join()` pero mucho más legible.',
      },
      {
        question: 'Dado `p = Path("datos/reporte_2025.csv")`, ¿qué devuelve `p.stem`?',
        options: ['"datos/reporte_2025.csv"', '"reporte_2025.csv"', '"reporte_2025"', '".csv"'],
        correctAnswer: '"reporte_2025"',
        correctFeedback: '¡Exacto! `.stem` devuelve el nombre del archivo sin la extensión. `.name` devolvería "reporte_2025.csv" y `.suffix` devolvería ".csv".',
        incorrectFeedback: '`.stem` es el nombre sin extensión. `.name` sería "reporte_2025.csv" (con extensión), `.suffix` sería ".csv" (solo la extensión).',
      },
      {
        question: '¿Qué método busca archivos en todas las subcarpetas de forma recursiva?',
        options: ['p.glob()', 'p.rglob()', 'p.search()', 'p.find()'],
        correctAnswer: 'p.rglob()',
        correctFeedback: '¡Correcto! `.rglob("*.csv")` busca recursivamente en todas las subcarpetas. `.glob("*.csv")` solo busca en el directorio actual sin entrar a subcarpetas.',
        incorrectFeedback: '`.rglob()` busca recursivamente (la "r" es de recursive). `.glob()` solo busca en la carpeta actual. `.search()` y `.find()` no son métodos de pathlib.',
      },
      {
        question: '¿Qué hace `Path("mi_carpeta").mkdir(parents=True, exist_ok=True)`?',
        options: [
          'Crea la carpeta solo si el directorio padre ya existe',
          'Crea la carpeta y todos los directorios padres necesarios, sin error si ya existe',
          'Crea la carpeta y borra su contenido si ya existe',
          'Lista el contenido de la carpeta',
        ],
        correctAnswer: 'Crea la carpeta y todos los directorios padres necesarios, sin error si ya existe',
        correctFeedback: '¡Perfecto! `parents=True` crea toda la estructura de carpetas necesaria. `exist_ok=True` evita el error si la carpeta ya existe. Juntos hacen la creación segura.',
        incorrectFeedback: '`parents=True` crea los directorios padres si no existen. `exist_ok=True` permite que no falle si la carpeta ya existe. Es la combinación más útil para automatización.',
      },
      {
        question: '¿Cuál es la ventaja de pathlib sobre os.path para trabajar con rutas?',
        options: [
          'pathlib es más rápido en ejecución que os.path',
          'pathlib tiene una API orientada a objetos más legible y consistente',
          'pathlib funciona en Python 2, os.path no',
          'pathlib puede conectarse a internet, os.path no',
        ],
        correctAnswer: 'pathlib tiene una API orientada a objetos más legible y consistente',
        correctFeedback: '¡Correcto! Con pathlib, las operaciones de archivo son métodos del objeto Path. El código es más legible: `p.exists()` en vez de `os.path.exists(str(p))`.',
        incorrectFeedback: 'La principal ventaja de pathlib es su API orientada a objetos: más legible y menos verbosa que os.path. pathlib existe desde Python 3.4, no en Python 2.',
      },
      {
        question: 'Para leer el contenido completo de un archivo de texto con pathlib, ¿qué método usas?',
        options: [
          'Path("archivo.txt").open()',
          'Path("archivo.txt").read_text(encoding="utf-8")',
          'Path("archivo.txt").load()',
          'Path("archivo.txt").get_content()',
        ],
        correctAnswer: 'Path("archivo.txt").read_text(encoding="utf-8")',
        correctFeedback: '¡Correcto! `.read_text()` devuelve el contenido del archivo como string. También existe `.read_bytes()` para contenido binario. Siempre especifica el encoding.',
        incorrectFeedback: '`.read_text(encoding="utf-8")` es el método de pathlib para leer texto. `.open()` existe pero devuelve un file object, no el contenido directamente.',
      },
    ],
  },
  {
    slug: 'automatizar-reportes',
    title: 'Automatizar reportes simples',
    module: 'Automatización de tareas',
    moduleNumber: 21,
    order: 105,
    description: 'Aprende a generar reportes básicos a partir de datos almacenados en listas, diccionarios, CSV o JSON.',
    explanation: `## Automatizar la generación de reportes

Generar un reporte manualmente en Word o Excel puede tomar horas. Con Python, puedes leer tus datos y generar el reporte en segundos, todas las veces que quieras.

### El flujo de un reporte automatizado

\`\`\`
Datos (CSV, JSON, lista) → Python → Reporte (.txt, .md, .html)
\`\`\`

### Leer datos desde CSV

\`\`\`python
import csv

ventas = []
with open("ventas.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for fila in reader:
        ventas.append({
            "producto": fila["producto"],
            "cantidad": int(fila["cantidad"]),
            "precio": float(fila["precio"]),
        })
\`\`\`

### Leer datos desde JSON

\`\`\`python
import json

with open("datos.json", encoding="utf-8") as f:
    datos = json.load(f)
\`\`\`

### Generar un reporte de texto

\`\`\`python
def calcular_totales(ventas):
    total = sum(v["cantidad"] * v["precio"] for v in ventas)
    promedio = total / len(ventas)
    return total, promedio

total, promedio = calcular_totales(ventas)

reporte = f"""REPORTE DE VENTAS
==================
Fecha: 2025-01-15
Total vendido: \${total:,.2f}
Promedio por transacción: \${promedio:,.2f}
Número de transacciones: {len(ventas)}
"""

with open("reporte_ventas.txt", "w", encoding="utf-8") as f:
    f.write(reporte)

print("Reporte generado.")
\`\`\`

### Plantillas de reporte

Puedes usar una función de plantilla para generar reportes consistentes:

\`\`\`python
def generar_reporte(titulo, datos, archivo_salida):
    lineas = [titulo, "=" * len(titulo), ""]
    for clave, valor in datos.items():
        lineas.append(f"  {clave}: {valor}")
    lineas.append("")

    with open(archivo_salida, "w", encoding="utf-8") as f:
        f.write("\\n".join(lineas))
    print(f"Reporte guardado en {archivo_salida}")
\`\`\``,
    codeExample: `import csv
import json
import os
from datetime import date

# ============================================
# Generar reporte de ventas desde una lista
# ============================================

# Datos de ejemplo (normalmente vendrían de CSV o JSON)
ventas = [
    {"producto": "Laptop",     "cantidad": 3,  "precio": 1200.00},
    {"producto": "Mouse",      "cantidad": 15, "precio": 25.50},
    {"producto": "Teclado",    "cantidad": 8,  "precio": 45.00},
    {"producto": "Monitor",    "cantidad": 5,  "precio": 320.00},
    {"producto": "Auriculares","cantidad": 12, "precio": 89.90},
]

def calcular_estadisticas(ventas):
    """Calcula estadísticas básicas de las ventas."""
    totales_por_producto = []

    for v in ventas:
        total_item = v["cantidad"] * v["precio"]
        totales_por_producto.append({
            "producto": v["producto"],
            "cantidad": v["cantidad"],
            "precio_unit": v["precio"],
            "total": total_item,
        })

    gran_total = sum(item["total"] for item in totales_por_producto)
    mejor_producto = max(totales_por_producto, key=lambda x: x["total"])

    return totales_por_producto, gran_total, mejor_producto

def generar_reporte_ventas(ventas, archivo_salida="reporte_ventas.txt"):
    """Genera un reporte completo de ventas en formato texto."""
    items, gran_total, mejor = calcular_estadisticas(ventas)
    hoy = date.today().strftime("%d/%m/%Y")

    lineas = [
        "=" * 50,
        "       REPORTE DE VENTAS",
        f"       Fecha: {hoy}",
        "=" * 50,
        "",
        f"{'PRODUCTO':<15} {'CANT':>5} {'PRECIO':>10} {'TOTAL':>12}",
        "-" * 50,
    ]

    for item in items:
        linea = (
            f"{item['producto']:<15} "
            f"{item['cantidad']:>5} "
            f"\${item['precio_unit']:>9.2f} "
            f"\${item['total']:>11.2f}"
        )
        lineas.append(linea)

    lineas += [
        "-" * 50,
        f"{'TOTAL GENERAL':>32} \${gran_total:>11.2f}",
        "",
        f"Mejor producto: {mejor['producto']} (\${mejor['total']:,.2f})",
        f"Número de productos: {len(ventas)}",
        "=" * 50,
    ]

    contenido = "\\n".join(lineas)
    print(contenido)

    with open(archivo_salida, "w", encoding="utf-8") as f:
        f.write(contenido)

    print(f"\\nReporte guardado en: {archivo_salida}")

generar_reporte_ventas(ventas)`,
    keyPoints: [
      'El flujo de un reporte automatizado es: leer datos → calcular → formatear → guardar',
      'csv.DictReader lee CSV como lista de diccionarios, muy conveniente para reportes',
      'json.load() lee archivos JSON directamente como diccionarios o listas de Python',
      'Las f-strings con formato :.2f, :>, :< permiten alinear columnas en reportes de texto',
      'Una función de reporte reutilizable acepta datos y nombre de archivo como parámetros',
    ],
    exercise: {
      description: 'Tienes una lista de estudiantes con nombre, nota y curso. Escribe un script que genere un reporte en formato texto que incluya: todos los estudiantes con sus notas, el promedio de la clase, el estudiante con nota más alta y cuántos aprobaron (nota >= 6). Guarda el reporte en "reporte_estudiantes.txt".',
      hint: 'Define la lista de estudiantes como dicts: [{"nombre": "Ana", "nota": 8.5, "curso": "Python"},...]. Para el promedio usa sum()/len(). Para el mejor usa max() con key=lambda. Para los aprobados usa un list comprehension con condición.',
    },
    quiz: [
      {
        question: '¿Qué módulo de Python se usa para leer archivos CSV?',
        options: ['json', 'csv', 'file', 'excel'],
        correctAnswer: 'csv',
        correctFeedback: '¡Correcto! El módulo `csv` de Python incluye `csv.DictReader` (lee filas como diccionarios) y `csv.DictWriter` (escribe desde diccionarios). Es parte de la biblioteca estándar.',
        incorrectFeedback: 'El módulo `csv` es el estándar para leer y escribir archivos CSV. `csv.DictReader` es especialmente útil porque lee cada fila como un diccionario.',
      },
      {
        question: '¿Cuál es la diferencia entre `csv.reader` y `csv.DictReader`?',
        options: [
          'DictReader es más lento que reader',
          'reader devuelve filas como listas, DictReader como diccionarios con cabeceras como claves',
          'DictReader solo funciona con archivos JSON',
          'reader puede escribir, DictReader solo lee',
        ],
        correctAnswer: 'reader devuelve filas como listas, DictReader como diccionarios con cabeceras como claves',
        correctFeedback: '¡Exacto! Con DictReader accedes a los datos por nombre de columna: fila["nombre"]. Con reader accedes por índice: fila[0]. DictReader es más legible.',
        incorrectFeedback: 'La diferencia clave: `reader` da listas (accedes con índice), `DictReader` da diccionarios (accedes con nombre de columna). DictReader suele ser preferible.',
      },
      {
        question: 'Para escribir un número con 2 decimales y alineado a la derecha en 10 caracteres, ¿qué formato usas en una f-string?',
        options: ['f"{numero:2f}"', 'f"{numero:>10.2f}"', 'f"{numero:.2}"', 'f"{numero:right(10)}"'],
        correctAnswer: 'f"{numero:>10.2f}"',
        correctFeedback: '¡Correcto! En f-strings: `>` alinea a la derecha, `10` es el ancho total y `.2f` son 2 decimales como flotante. Muy útil para tablas en texto plano.',
        incorrectFeedback: 'La sintaxis de formato es `{valor:>ancho.decimalesf}`. El `>` alinea a la derecha, el número es el ancho total y `.2f` especifica 2 decimales.',
      },
      {
        question: '¿Cómo se lee un archivo JSON en Python?',
        options: [
          'json.read("archivo.json")',
          'open("archivo.json").json()',
          'json.load(archivo) donde archivo es el file object',
          'json.parse("archivo.json")',
        ],
        correctAnswer: 'json.load(archivo) donde archivo es el file object',
        correctFeedback: '¡Correcto! `json.load(f)` lee desde un file object abierto. `json.loads(string)` lee desde un string JSON. Son las dos funciones de lectura en el módulo json.',
        incorrectFeedback: 'La forma correcta es: `with open("archivo.json") as f: datos = json.load(f)`. `json.load()` recibe el file object, no el nombre del archivo.',
      },
      {
        question: '¿Qué hace `max(lista, key=lambda x: x["nota"])`?',
        options: [
          'Ordena la lista por la clave "nota"',
          'Devuelve el elemento con el valor más alto en la clave "nota"',
          'Suma todos los valores de "nota"',
          'Filtra los elementos con nota mayor a 0',
        ],
        correctAnswer: 'Devuelve el elemento con el valor más alto en la clave "nota"',
        correctFeedback: '¡Correcto! `max()` con `key=` devuelve el elemento completo (no solo el valor) que tiene el máximo según la función key. Útil para encontrar el mejor vendedor, estudiante, etc.',
        incorrectFeedback: '`max(lista, key=lambda x: x["nota"])` devuelve el diccionario completo del elemento con la nota más alta. El `key=` indica cómo comparar los elementos.',
      },
      {
        question: '¿Por qué es importante `encoding="utf-8"` al escribir reportes en español?',
        options: [
          'Para que el archivo ocupe menos espacio',
          'Para que tildes, ñ y caracteres especiales se guarden correctamente',
          'Para que el archivo se abra automáticamente',
          'Para que Python procese el texto más rápido',
        ],
        correctAnswer: 'Para que tildes, ñ y caracteres especiales se guarden correctamente',
        correctFeedback: '¡Exacto! Sin `encoding="utf-8"`, en Windows los archivos pueden guardarse con otra codificación y las tildes y la ñ aparecerán como caracteres extraños.',
        incorrectFeedback: 'UTF-8 es necesario para manejar correctamente el español. Sin especificarlo (especialmente en Windows), las tildes y la ñ se corrompen al guardar o leer.',
      },
    ],
  },
  {
    slug: 'programar-tareas-automaticas',
    title: 'Programar tareas automáticas',
    module: 'Automatización de tareas',
    moduleNumber: 21,
    order: 106,
    description: 'Aprende conceptos básicos para ejecutar scripts en horarios específicos usando herramientas del sistema operativo.',
    explanation: `## Programar tareas automáticas

Python por sí solo no puede "despertar" a las 3am y ejecutar un script. Para eso se usan herramientas externas del sistema operativo o bibliotecas especializadas.

### Opción 1: Cron (Linux y Mac)

Cron es el planificador de tareas de sistemas Unix. Se configura con el comando \`crontab -e\`.

\`\`\`
# Formato: minuto hora dia_mes mes dia_semana comando
# Ejecutar mi_script.py todos los días a las 8am:
0 8 * * * /usr/bin/python3 /home/usuario/mi_script.py

# Cada hora:
0 * * * * /usr/bin/python3 /ruta/al/script.py

# Cada lunes a las 9am:
0 9 * * 1 /usr/bin/python3 /ruta/script_semanal.py
\`\`\`

**Importante:** Usa rutas absolutas en cron, no relativas.

### Opción 2: Task Scheduler (Windows)

En Windows, el Task Scheduler (Programador de tareas) hace lo mismo:
1. Busca "Programador de tareas" en el menú inicio
2. Crea una tarea nueva
3. Indica cuándo ejecutarla (hora, frecuencia)
4. El programa a ejecutar: \`python.exe\`
5. Los argumentos: \`C:\\ruta\\a\\tu\\script.py\`

### Opción 3: Biblioteca schedule (puro Python)

Si prefieres una solución dentro de Python sin configurar el sistema operativo:

\`\`\`python
import schedule
import time

def tarea_diaria():
    print("Ejecutando tarea diaria...")
    # Tu código aquí

def tarea_semanal():
    print("Ejecutando tarea semanal...")

# Programar las tareas
schedule.every().day.at("08:00").do(tarea_diaria)
schedule.every().monday.at("09:00").do(tarea_semanal)
schedule.every(30).minutes.do(tarea_diaria)

# Bucle infinito que revisa las tareas pendientes
print("Scheduler iniciado. Presiona Ctrl+C para detener.")
while True:
    schedule.run_pending()
    time.sleep(60)  # Revisar cada minuto
\`\`\`

**Nota:** Con \`schedule\`, el script debe estar corriendo continuamente. Se usa con servidores o con cron como respaldo.

### Resumen de opciones

| Herramienta | Sistema | Sin código extra | Necesita script corriendo |
|------------|---------|-----------------|--------------------------|
| cron | Linux/Mac | ✓ | ✗ |
| Task Scheduler | Windows | ✓ | ✗ |
| schedule | Todos | ✗ (pip install) | ✓ |`,
    codeExample: `import schedule
import time
import os
from datetime import datetime
from pathlib import Path

# ============================================
# Ejemplo con la biblioteca schedule
# ============================================

def generar_reporte_diario():
    """Genera un reporte simple de actividad."""
    ahora = datetime.now()
    nombre = f"reporte_{ahora.strftime('%Y%m%d_%H%M')}.txt"
    Path("reportes_automaticos").mkdir(exist_ok=True)

    with open(f"reportes_automaticos/{nombre}", "w", encoding="utf-8") as f:
        f.write(f"Reporte automático\\n")
        f.write(f"Generado: {ahora.strftime('%d/%m/%Y %H:%M')}\\n")
        f.write(f"Sistema: {os.name}\\n")
        f.write("Estado: OK\\n")

    print(f"[{ahora.strftime('%H:%M')}] Reporte generado: {nombre}")


def limpiar_archivos_viejos():
    """Elimina reportes con más de 7 días."""
    from datetime import timedelta
    carpeta = Path("reportes_automaticos")
    if not carpeta.exists():
        return

    limite = datetime.now() - timedelta(days=7)
    eliminados = 0

    for archivo in carpeta.iterdir():
        if archivo.is_file():
            modificado = datetime.fromtimestamp(archivo.stat().st_mtime)
            if modificado < limite:
                archivo.unlink()
                eliminados += 1

    if eliminados:
        print(f"Limpieza: {eliminados} reportes eliminados")


def mostrar_estado():
    """Muestra la hora actual (útil para saber si el scheduler corre)."""
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Scheduler activo")


# ============================================
# Configurar el horario de tareas
# ============================================
# schedule.every().day.at("08:00").do(generar_reporte_diario)
# schedule.every().sunday.at("23:00").do(limpiar_archivos_viejos)
# schedule.every(1).hours.do(mostrar_estado)

# Para demostración: ejecutar cada 5 segundos
schedule.every(5).seconds.do(mostrar_estado)
schedule.every(10).seconds.do(generar_reporte_diario)

print("Scheduler iniciado (demostración - 30 segundos)")
print("En producción usarías: schedule.every().day.at('08:00').do(mi_funcion)")
print("-" * 50)

# Ejecutar por 30 segundos como demo
inicio = time.time()
while time.time() - inicio < 30:
    schedule.run_pending()
    time.sleep(1)

print("-" * 50)
print("Demo completada.")`,
    keyPoints: [
      'Python no puede despertar por sí solo; necesita cron (Linux/Mac) o Task Scheduler (Windows)',
      'Cron usa el formato: minuto hora dia mes dia_semana comando',
      'La biblioteca `schedule` ofrece programación de tareas en puro Python',
      'Con `schedule` el script debe estar corriendo continuamente (bucle while True)',
      'Siempre usa rutas absolutas en scripts automatizados para evitar problemas de directorio',
    ],
    exercise: {
      description: 'Instala la biblioteca schedule (`pip install schedule`) y escribe un script que simule un sistema de monitoreo: cada 3 segundos imprime la hora actual, cada 6 segundos genera un archivo de log con la fecha y hora, y se detiene después de 18 segundos. Al final muestra cuántos archivos de log se crearon.',
      hint: 'Usa schedule.every(3).seconds.do(funcion) para la impresión y schedule.every(6).seconds.do(funcion) para el log. Usa time.time() para controlar cuándo detener el bucle. Para los archivos de log, usa datetime.now().strftime() para el nombre del archivo.',
    },
    quiz: [
      {
        question: '¿Por qué Python por sí solo no puede ejecutar un script a las 3am automáticamente?',
        options: [
          'Python no tiene acceso al reloj del sistema',
          'Python necesita una herramienta externa (cron, Task Scheduler) que lo inicie',
          'Python no puede ejecutarse en la noche',
          'El script debe estar abierto en el editor para ejecutarse',
        ],
        correctAnswer: 'Python necesita una herramienta externa (cron, Task Scheduler) que lo inicie',
        correctFeedback: '¡Correcto! Python ejecuta código cuando se llama. Para ejecutarlo automáticamente en horarios específicos, necesitas una herramienta del sistema operativo que lo llame.',
        incorrectFeedback: 'Python necesita que algo lo invoque. cron (Linux/Mac) y Task Scheduler (Windows) son las herramientas del sistema operativo que inician scripts según un horario.',
      },
      {
        question: '¿Cuál es la herramienta de programación de tareas nativa en Linux y Mac?',
        options: ['Task Scheduler', 'cron', 'schedule', 'autorun'],
        correctAnswer: 'cron',
        correctFeedback: '¡Correcto! cron es el planificador de tareas de Unix/Linux/Mac. Se configura con `crontab -e` y permite ejecutar comandos en horarios específicos.',
        incorrectFeedback: 'cron es el planificador nativo de Unix, Linux y Mac. Task Scheduler es la versión de Windows. `schedule` es una biblioteca Python, no del sistema operativo.',
      },
      {
        question: '¿Qué significa la expresión cron `0 8 * * 1`?',
        options: [
          'Cada 8 horas, el primer día del mes',
          'A las 8:00 AM, todos los lunes',
          'A las 0:08, todos los días',
          'El día 8 de cada mes a medianoche',
        ],
        correctAnswer: 'A las 8:00 AM, todos los lunes',
        correctFeedback: '¡Exacto! El formato cron es: minuto hora dia_mes mes dia_semana. `0 8 * * 1` = minuto 0, hora 8, cualquier día del mes, cualquier mes, lunes (1).',
        incorrectFeedback: 'Formato cron: minuto hora dia_mes mes dia_semana. `0 8 * * 1` = minuto 0, hora 8 = 8:00 AM. Los `*` son "cualquier valor". El `1` es lunes.',
      },
      {
        question: '¿Cuál es el rol de `schedule.run_pending()` dentro del bucle while?',
        options: [
          'Detiene el programa hasta que sea la hora de ejecutar una tarea',
          'Verifica si hay tareas pendientes de ejecutar y las ejecuta',
          'Agrega nuevas tareas al scheduler',
          'Guarda el estado del scheduler en disco',
        ],
        correctAnswer: 'Verifica si hay tareas pendientes de ejecutar y las ejecuta',
        correctFeedback: '¡Correcto! `run_pending()` revisa todas las tareas programadas y ejecuta las que ya deberían haber corrido. El `time.sleep()` en el bucle evita usar el 100% de CPU.',
        incorrectFeedback: '`run_pending()` es el motor del scheduler: revisa qué tareas debían ejecutarse y las ejecuta. Sin este llamado en el bucle, ninguna tarea se ejecutaría.',
      },
      {
        question: '¿Cuál es la principal limitación de la biblioteca `schedule` comparada con cron?',
        options: [
          'schedule no puede ejecutar funciones Python, solo comandos del sistema',
          'schedule requiere que el script esté corriendo continuamente',
          'schedule solo funciona en Windows',
          'schedule es más lento que cron',
        ],
        correctAnswer: 'schedule requiere que el script esté corriendo continuamente',
        correctFeedback: '¡Correcto! Con `schedule`, si el script se detiene, las tareas dejan de ejecutarse. Cron y Task Scheduler sí pueden iniciar Python desde cero cuando llega la hora.',
        incorrectFeedback: 'La limitación de `schedule` es que necesita el script corriendo con su bucle while. Si se apaga la computadora o el script falla, las tareas no se ejecutan.',
      },
      {
        question: '¿Por qué es importante usar rutas absolutas en scripts automatizados?',
        options: [
          'Las rutas absolutas son más cortas que las relativas',
          'Porque el directorio de trabajo puede ser diferente cuando cron o Task Scheduler ejecutan el script',
          'Python no puede usar rutas relativas',
          'Las rutas absolutas son más rápidas de acceder',
        ],
        correctAnswer: 'Porque el directorio de trabajo puede ser diferente cuando cron o Task Scheduler ejecutan el script',
        correctFeedback: '¡Exacto! Cuando cron ejecuta un script, el directorio de trabajo puede ser el home del usuario, no el directorio del script. Con rutas absolutas, siempre encuentras el archivo correcto.',
        incorrectFeedback: 'Cuando un planificador ejecuta tu script, el directorio de trabajo actual puede ser distinto al del script. Las rutas absolutas garantizan que el script encuentre sus archivos.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-automatizacion',
    title: 'Buenas prácticas en automatización',
    module: 'Automatización de tareas',
    moduleNumber: 21,
    order: 107,
    description: 'Aprende cómo escribir scripts seguros, claros y fáciles de mantener para automatizar tareas reales.',
    explanation: `## Buenas prácticas en automatización

Un script de automatización mal escrito puede borrar archivos importantes, fallar silenciosamente o ser imposible de depurar. Estas prácticas te protegen a ti y a tus datos.

### 1. Usar logging en vez de print

\`\`\`python
import logging

# Configurar al inicio del script
logging.basicConfig(
    filename="mi_script.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

# En lugar de print():
logging.info("Iniciando proceso de renombrado")
logging.warning("Archivo no encontrado: datos.csv")
logging.error("Error al abrir el archivo")
\`\`\`

### 2. Modo dry-run (simulación)

Antes de borrar o modificar archivos, prueba primero en modo simulación:

\`\`\`python
def limpiar_archivos(carpeta, dry_run=True):
    for archivo in Path(carpeta).iterdir():
        if archivo.suffix == ".tmp":
            if dry_run:
                print(f"[DRY RUN] Borraría: {archivo}")
            else:
                archivo.unlink()
                logging.info(f"Eliminado: {archivo}")

# Primero sin modificar nada:
limpiar_archivos("datos", dry_run=True)

# Cuando estés seguro:
# limpiar_archivos("datos", dry_run=False)
\`\`\`

### 3. Manejo de errores

\`\`\`python
try:
    with open("datos.csv", encoding="utf-8") as f:
        datos = f.read()
except FileNotFoundError:
    logging.error("El archivo datos.csv no existe")
    raise SystemExit(1)
except PermissionError:
    logging.error("Sin permisos para leer datos.csv")
    raise SystemExit(1)
\`\`\`

### 4. Probar con muestras pequeñas

\`\`\`python
archivos = list(Path("fotos").glob("*.jpg"))

# Prueba primero con los primeros 5
MODO_PRUEBA = True
if MODO_PRUEBA:
    archivos = archivos[:5]

for archivo in archivos:
    procesar(archivo)
\`\`\`

### 5. Evitar rutas hardcodeadas

\`\`\`python
# MAL: ruta específica de una máquina
carpeta = "C:\\\\Users\\\\juan\\\\documentos\\\\fotos"

# BIEN: configuración al inicio del script
import os
CARPETA_FOTOS = os.environ.get("CARPETA_FOTOS", "fotos")
\`\`\``,
    codeExample: `import logging
import os
import shutil
from pathlib import Path
from datetime import datetime

# ============================================
# Script de automatización bien estructurado
# ============================================

# --- Configuración ---
CARPETA_ENTRADA = os.environ.get("CARPETA_ENTRADA", "archivos_entrada")
CARPETA_SALIDA = os.environ.get("CARPETA_SALIDA", "archivos_procesados")
DRY_RUN = os.environ.get("DRY_RUN", "true").lower() == "true"
LOG_ARCHIVO = "proceso_archivos.log"

# --- Logging ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_ARCHIVO, encoding="utf-8"),
        logging.StreamHandler(),  # También muestra en consola
    ],
)

logger = logging.getLogger(__name__)


def validar_entorno():
    """Verifica que las carpetas necesarias existan."""
    entrada = Path(CARPETA_ENTRADA)
    if not entrada.exists():
        logger.error(f"Carpeta de entrada no encontrada: {CARPETA_ENTRADA}")
        raise SystemExit(1)

    salida = Path(CARPETA_SALIDA)
    if not DRY_RUN:
        salida.mkdir(parents=True, exist_ok=True)
        logger.info(f"Carpeta de salida lista: {CARPETA_SALIDA}")


def procesar_archivo(archivo: Path) -> bool:
    """
    Procesa un archivo: lo copia a la carpeta de salida con timestamp.

    Returns:
        True si el procesamiento fue exitoso, False si hubo error.
    """
    try:
        timestamp = datetime.now().strftime("%Y%m%d")
        nuevo_nombre = f"{timestamp}_{archivo.name}"
        destino = Path(CARPETA_SALIDA) / nuevo_nombre

        if DRY_RUN:
            logger.info(f"[DRY RUN] Copiaría: {archivo.name} -> {nuevo_nombre}")
            return True

        shutil.copy2(archivo, destino)
        logger.info(f"Procesado: {archivo.name} -> {nuevo_nombre}")
        return True

    except PermissionError:
        logger.error(f"Sin permisos para procesar: {archivo.name}")
        return False
    except Exception as e:
        logger.error(f"Error inesperado con {archivo.name}: {e}")
        return False


def ejecutar(extension=".txt", max_archivos=None):
    """
    Función principal: procesa todos los archivos de la extensión dada.

    Args:
        extension: extensión de archivos a procesar
        max_archivos: límite para pruebas (None = todos)
    """
    logger.info(f"{'=' * 40}")
    logger.info(f"Inicio del proceso")
    logger.info(f"Modo: {'DRY RUN (simulación)' if DRY_RUN else 'REAL'}")
    logger.info(f"Carpeta: {CARPETA_ENTRADA}")
    logger.info(f"{'=' * 40}")

    validar_entorno()

    archivos = sorted(Path(CARPETA_ENTRADA).glob(f"*{extension}"))

    if not archivos:
        logger.warning(f"No se encontraron archivos {extension}")
        return

    if max_archivos:
        logger.info(f"Modo prueba: procesando solo los primeros {max_archivos}")
        archivos = archivos[:max_archivos]

    exitosos = 0
    fallidos = 0

    for archivo in archivos:
        if procesar_archivo(archivo):
            exitosos += 1
        else:
            fallidos += 1

    logger.info(f"Proceso completado: {exitosos} OK, {fallidos} errores")


# Ejecutar en modo prueba con los primeros 3 archivos
ejecutar(extension=".txt", max_archivos=3)`,
    keyPoints: [
      'Usa logging en vez de print para registrar lo que hace tu script y poder revisarlo después',
      'El modo dry-run simula cambios sin hacerlos; siempre prueba antes de modificar datos reales',
      'Maneja los errores con try/except y registra qué falló para poder depurar',
      'Prueba primero con muestras pequeñas (5-10 ítems) antes de procesar miles',
      'Evita rutas hardcodeadas; usa variables de entorno o argumentos de línea de comandos',
      'Un script bien estructurado tiene: configuración, validación, función principal, resumen final',
    ],
    exercise: {
      description: 'Mejora un script de automatización básico (que simplemente copia archivos de una carpeta a otra) añadiéndole: logging a un archivo "copia.log", modo dry_run=True por defecto que muestra qué haría sin hacerlo, manejo de errores con try/except, y al final un resumen de cuántos archivos se copiaron y cuántos fallaron.',
      hint: 'Configura logging con logging.basicConfig() al inicio. Usa una variable DRY_RUN = True. Dentro del bucle, pon el shutil.copy() dentro de try/except. Usa contadores exitosos = 0 y fallidos = 0. Al final: logging.info(f"Resultado: {exitosos} OK, {fallidos} errores").',
    },
    quiz: [
      {
        question: '¿Por qué es mejor usar `logging` en vez de `print` en scripts de automatización?',
        options: [
          'logging es más rápido que print',
          'logging guarda los mensajes en un archivo con fecha y hora, útil para depurar después',
          'print no funciona en scripts automatizados',
          'logging consume menos memoria',
        ],
        correctAnswer: 'logging guarda los mensajes en un archivo con fecha y hora, útil para depurar después',
        correctFeedback: '¡Correcto! Los mensajes de logging se guardan en un archivo con timestamp. Si un script falla a las 3am, puedes revisar el log en la mañana para saber qué pasó.',
        incorrectFeedback: 'Logging es mejor porque guarda los mensajes con fecha y hora en un archivo persistente. Puedes revisar qué hizo el script aunque hayas cerrado la terminal.',
      },
      {
        question: '¿Qué es el "modo dry-run" en automatización?',
        options: [
          'Ejecutar el script sin instalar dependencias',
          'Simular las operaciones sin hacer cambios reales, para verificar qué se haría',
          'Ejecutar el script en modo debug',
          'Procesar archivos sin crear logs',
        ],
        correctAnswer: 'Simular las operaciones sin hacer cambios reales, para verificar qué se haría',
        correctFeedback: '¡Exacto! El dry-run muestra qué haría el script (qué archivos borraría, movería, etc.) sin realmente hacerlo. Es una red de seguridad esencial antes de ejecutar cambios masivos.',
        incorrectFeedback: 'Dry-run es un modo de simulación: el script muestra qué haría sin hacer nada. "Borraría 45 archivos" en vez de borrarlos. Permite verificar antes de comprometerse.',
      },
      {
        question: '¿Cuál es la forma más segura de especificar la carpeta de trabajo en un script de automatización?',
        options: [
          'Poner la ruta directamente en el código: carpeta = "C:\\\\Users\\\\juan\\\\fotos"',
          'Usar variables de entorno: os.environ.get("CARPETA", "fotos")',
          'Pedir la ruta al usuario cada vez que corra',
          'Usar siempre el directorio actual (.)',
        ],
        correctAnswer: 'Usar variables de entorno: os.environ.get("CARPETA", "fotos")',
        correctFeedback: '¡Correcto! Las variables de entorno permiten configurar el script sin modificar el código. `os.environ.get("CARPETA", "fotos")` usa la variable si existe, o "fotos" por defecto.',
        incorrectFeedback: 'Las rutas hardcodeadas son un problema: el script solo funciona en tu máquina. Las variables de entorno permiten configurar el script para distintos entornos sin tocar el código.',
      },
      {
        question: '¿Por qué deberías probar un script con muestras pequeñas antes de procesarlo todo?',
        options: [
          'Para que el script sea más rápido',
          'Para verificar que funciona correctamente antes de aplicarlo a cientos o miles de archivos',
          'Porque Python no puede procesar más de 10 archivos a la vez',
          'Para ahorrar memoria del sistema',
        ],
        correctAnswer: 'Para verificar que funciona correctamente antes de aplicarlo a cientos o miles de archivos',
        correctFeedback: '¡Exacto! Si hay un bug que borra o corrompe archivos, es mejor descubrirlo con 5 archivos de prueba que con 5000 archivos reales. La muestra pequeña es una red de seguridad.',
        incorrectFeedback: 'Probar con una muestra pequeña evita desastres: si el script tiene un error que borra archivos incorrectos, mejor descubrirlo con 5 archivos que con todos tus datos.',
      },
      {
        question: 'Al configurar logging, ¿cuál es el nivel adecuado para mensajes de flujo normal (el script está funcionando bien)?',
        options: ['logging.DEBUG', 'logging.INFO', 'logging.WARNING', 'logging.ERROR'],
        correctAnswer: 'logging.INFO',
        correctFeedback: '¡Correcto! INFO es para operaciones normales. DEBUG para detalles de depuración, WARNING para situaciones inesperadas pero no críticas, ERROR para fallos.',
        incorrectFeedback: 'Los niveles son: DEBUG (detalles), INFO (operación normal), WARNING (algo raro pero no crítico), ERROR (algo falló). INFO es el nivel adecuado para registrar progreso normal.',
      },
      {
        question: 'Analiza: `logging.basicConfig(handlers=[logging.FileHandler("app.log"), logging.StreamHandler()])`. ¿Qué hace?',
        options: [
          'Envía los logs al archivo app.log y los muestra en la consola al mismo tiempo',
          'Crea dos archivos de log diferentes',
          'Solo guarda en archivo cuando hay errores, muestra en consola cuando no',
          'Es código inválido; basicConfig solo acepta un handler',
        ],
        correctAnswer: 'Envía los logs al archivo app.log y los muestra en la consola al mismo tiempo',
        correctFeedback: '¡Correcto! Al pasar dos handlers, los mensajes de log van a ambos destinos: el archivo app.log y la consola (stdout). Muy útil para depurar mientras el script corre.',
        incorrectFeedback: 'Múltiples handlers envían los logs a varios destinos simultáneamente. FileHandler guarda en archivo, StreamHandler muestra en consola. Ambos reciben todos los mensajes.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module21: Module = {
  number: 21,
  title: 'Automatización de tareas',
  level: 'practico',
  lessons: lessonsModule21,
}
