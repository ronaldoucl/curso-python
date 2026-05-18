import type { Lesson } from '@/types'

export const lessonsModule25: Lesson[] = [
  {
    slug: 'python-excel',
    title: '¿Por qué usar Python con Excel?',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 129,
    description: 'Aprende cómo Python puede ayudarte a leer, modificar y automatizar archivos Excel.',
    explanation: `## ¿Por qué usar Python con Excel?

Excel es una herramienta increíblemente popular, pero tiene límites. Cuando los archivos crecen, las tareas se repiten o los datos vienen de múltiples fuentes, Python se convierte en tu mejor aliado.

### Casos de uso reales donde Python + Excel brilla

**1. Procesamiento en lote de múltiples archivos**

Imagina que recibes 100 reportes Excel semanales de diferentes sucursales. Con Excel, abrirías cada uno manualmente. Con Python:

\`\`\`python
from pathlib import Path
import openpyxl

carpeta = Path("reportes/")
for archivo in carpeta.glob("*.xlsx"):
    wb = openpyxl.load_workbook(archivo)
    # Procesar cada archivo automáticamente
    print(f"Procesando: {archivo.name}")
\`\`\`

**2. Generación automática de reportes semanales**

En lugar de construir el mismo reporte manualmente cada lunes, Python lo genera en segundos con datos actualizados.

**3. Limpieza de datos desordenados**

Los archivos Excel con datos inconsistentes (fechas mal formateadas, espacios extra, celdas vacías) se limpian automáticamente con Python.

**4. Combinar múltiples archivos en uno**

Unir datos de 20 hojas de cálculo en un solo reporte consolidado: tarea de horas para un humano, tarea de segundos para Python.

### Trabajo manual vs. Python automatizado

| Tarea | Manual | Con Python |
|-------|--------|------------|
| Procesar 100 archivos | 4-8 horas | 2-5 minutos |
| Generar reporte semanal | 1 hora | Inmediato |
| Limpiar 10,000 filas | Horas | Segundos |
| Combinar 20 archivos | 2 horas | 30 segundos |

### La librería principal: openpyxl

\`openpyxl\` es la librería más usada para trabajar con archivos Excel (.xlsx) en Python:

\`\`\`python
pip install openpyxl
\`\`\`

**¿Por qué openpyxl?**
- Soporta archivos .xlsx (formato moderno de Excel)
- Permite leer, escribir y modificar archivos
- Soporte para estilos, fórmulas y gráficos
- Activamente mantenida y bien documentada

### Alternativas a openpyxl

| Librería | Uso principal | Formato |
|----------|--------------|---------|
| \`openpyxl\` | Lectura y escritura completa | .xlsx |
| \`xlrd\` | Solo lectura (archivos antiguos) | .xls |
| \`xlwt\` | Solo escritura (archivos antiguos) | .xls |
| \`pandas\` | Análisis de datos con Excel | .xlsx, .xls |
| \`xlsxwriter\` | Escritura con formato avanzado | .xlsx |

### ¿Qué operaciones son posibles?

Con \`openpyxl\` puedes:
- Leer y escribir valores en celdas individuales
- Recorrer filas y columnas completas
- Crear y eliminar hojas de cálculo
- Aplicar estilos: fuentes, colores, bordes
- Insertar fórmulas de Excel
- Ajustar anchos de columnas y alturas de filas
- Agregar imágenes y gráficos
- Proteger hojas con contraseña
`,
    codeExample: `# Comparación: qué se puede hacer con openpyxl
import openpyxl

# 1. Crear un workbook (archivo Excel) desde cero
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Ventas"

# 2. Escribir datos
ws["A1"] = "Producto"
ws["B1"] = "Cantidad"
ws["C1"] = "Precio"

datos = [
    ("Laptop", 5, 15000),
    ("Mouse", 20, 350),
    ("Teclado", 15, 800),
]

for fila in datos:
    ws.append(fila)

# 3. Guardar el archivo
wb.save("ejemplo.xlsx")
print("Archivo creado: ejemplo.xlsx")

# 4. Abrir y leer el archivo
wb2 = openpyxl.load_workbook("ejemplo.xlsx")
ws2 = wb2.active

print(f"Hojas disponibles: {wb2.sheetnames}")
print(f"Dimensiones: {ws2.dimensions}")

for fila in ws2.iter_rows(min_row=1, values_only=True):
    print(fila)
`,
    keyPoints: [
      'Python automatiza tareas repetitivas de Excel que tomarían horas de trabajo manual',
      'openpyxl es la librería estándar para leer y escribir archivos .xlsx en Python',
      'Se puede procesar cientos de archivos en lote con un solo script',
      'xlrd y xlwt son alternativas para archivos .xls (formato antiguo de Excel)',
      'Las operaciones posibles incluyen: lectura, escritura, estilos, fórmulas y gráficos',
      'pandas es otra opción popular cuando se necesita análisis de datos más avanzado',
    ],
    exercise: {
      description: 'Instala openpyxl con pip y crea un script que genere un archivo Excel llamado "mi_primer_excel.xlsx" con los siguientes datos en las primeras 3 columnas: Nombre, Edad, Ciudad. Agrega al menos 5 filas de datos inventados. Luego vuelve a abrir el archivo y muestra por pantalla cuántas filas tiene.',
      hint: 'Usa `openpyxl.Workbook()` para crear, `ws.append([...])` para agregar filas, `wb.save("nombre.xlsx")` para guardar. Para contar filas al leer: `ws.max_row` te da el número de la última fila con datos.',
    },
    quiz: [
      {
        question: '¿Cuál es la principal ventaja de usar Python para procesar archivos Excel en lugar de hacerlo manualmente?',
        options: [
          'Python puede abrir archivos más grandes que Excel',
          'Python automatiza tareas repetitivas, procesando cientos de archivos en segundos',
          'Python es más barato que Excel',
          'Excel no puede leer archivos .xlsx',
        ],
        correctAnswer: 'Python automatiza tareas repetitivas, procesando cientos de archivos en segundos',
        correctFeedback: '¡Correcto! La automatización es el superpoder de Python con Excel. Tareas que tomarían horas de trabajo manual se completan en segundos con un script.',
        incorrectFeedback: 'La ventaja principal es la automatización. Python puede procesar 100 archivos Excel con el mismo tiempo que tomaría abrir el primero manualmente.',
      },
      {
        question: '¿Cuál es la librería más recomendada para leer y escribir archivos .xlsx con Python?',
        options: ['xlrd', 'xlwt', 'openpyxl', 'csvlib'],
        correctAnswer: 'openpyxl',
        correctFeedback: '¡Correcto! openpyxl es la librería estándar y más completa para trabajar con archivos .xlsx. Soporta lectura, escritura, estilos y más.',
        incorrectFeedback: 'openpyxl es la librería correcta para archivos .xlsx. xlrd es solo para lectura, xlwt es solo para escritura, y csvlib no existe como librería estándar de Excel.',
      },
      {
        question: '¿Cómo se instala openpyxl?',
        options: [
          'import openpyxl',
          'pip install openpyxl',
          'python install openpyxl',
          'apt-get install openpyxl',
        ],
        correctAnswer: 'pip install openpyxl',
        correctFeedback: '¡Correcto! pip es el gestor de paquetes de Python. Se ejecuta en la terminal, no en el código Python.',
        incorrectFeedback: 'Para instalar librerías de Python se usa pip en la terminal: `pip install openpyxl`. El comando `import` solo sirve para usar una librería ya instalada.',
      },
      {
        question: '¿Qué librería usarías si necesitas trabajar con archivos .xls del formato antiguo de Excel (no .xlsx)?',
        options: ['openpyxl', 'xlrd', 'pathlib', 'json'],
        correctAnswer: 'xlrd',
        correctFeedback: '¡Correcto! xlrd está diseñada para leer archivos .xls (el formato antiguo de Excel). Para archivos .xlsx modernos se usa openpyxl.',
        incorrectFeedback: 'Para archivos .xls (formato antiguo) se usa xlrd para lectura o xlwt para escritura. openpyxl trabaja con el formato moderno .xlsx.',
      },
      {
        question: 'Una empresa necesita consolidar 50 reportes Excel mensuales en un solo archivo. ¿Cuál es el enfoque correcto con Python?',
        options: [
          'Abrir cada archivo manualmente y copiar los datos',
          'Usar un script con openpyxl que recorra todos los archivos automáticamente',
          'Convertir todos los archivos a CSV primero',
          'Solo es posible hacerlo con pandas',
        ],
        correctAnswer: 'Usar un script con openpyxl que recorra todos los archivos automáticamente',
        correctFeedback: '¡Correcto! Un script con openpyxl puede recorrer todos los archivos en un bucle y consolidar los datos automáticamente. Eso es exactamente para lo que Python brilla.',
        incorrectFeedback: 'El enfoque correcto es un script que recorra todos los archivos automáticamente con openpyxl. No necesitas convertirlos a CSV ni hacerlo manualmente.',
      },
      {
        question: '¿Cuál de estas operaciones NO es posible con openpyxl?',
        options: [
          'Aplicar estilos de fuente y color a las celdas',
          'Insertar fórmulas de Excel',
          'Ejecutar macros VBA de Excel',
          'Ajustar el ancho de columnas',
        ],
        correctAnswer: 'Ejecutar macros VBA de Excel',
        correctFeedback: '¡Correcto! openpyxl no puede ejecutar macros VBA. Para eso necesitarías win32com o xlwings. Sin embargo, openpyxl puede hacer casi todo lo demás.',
        incorrectFeedback: 'openpyxl no puede ejecutar macros VBA de Excel. Para ejecutar macros necesitarías librerías como win32com o xlwings que interactúan directamente con Excel.',
      },
      {
        question: 'Observa este código: `for archivo in carpeta.glob("*.xlsx"):`. ¿Qué hace?',
        options: [
          'Busca archivos Excel en internet',
          'Crea archivos Excel con ese nombre',
          'Itera sobre todos los archivos .xlsx en la carpeta',
          'Elimina archivos Excel de la carpeta',
        ],
        correctAnswer: 'Itera sobre todos los archivos .xlsx en la carpeta',
        correctFeedback: '¡Correcto! `glob("*.xlsx")` encuentra todos los archivos con extensión .xlsx en la carpeta y el bucle `for` itera sobre cada uno.',
        incorrectFeedback: '`glob("*.xlsx")` busca todos los archivos que terminen en .xlsx dentro de la carpeta. El bucle `for` permite procesar cada archivo uno por uno.',
      },
    ],
  },
  {
    slug: 'leer-excel-openpyxl',
    title: 'Leer archivos Excel con openpyxl',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 130,
    description: 'Aprende a abrir y leer hojas de cálculo usando openpyxl.',
    explanation: `## Leer archivos Excel con openpyxl

Antes de modificar o analizar un archivo Excel, necesitas saber cómo abrirlo y acceder a sus datos correctamente.

### Abrir un archivo Excel

\`\`\`python
import openpyxl

# Abrir un archivo existente
wb = openpyxl.load_workbook("ventas.xlsx")
\`\`\`

El resultado es un objeto \`Workbook\` que representa el archivo completo.

### Ver las hojas disponibles

\`\`\`python
# Ver nombres de todas las hojas
print(wb.sheetnames)  # ['Enero', 'Febrero', 'Marzo']

# Acceder a la hoja activa (la que estaba seleccionada al guardar)
ws = wb.active

# Acceder a una hoja por nombre
ws = wb["Enero"]
\`\`\`

### Acceder a celdas individuales

\`\`\`python
# Por notación de Excel (columna + fila)
celda = ws["A1"]
print(celda.value)  # El valor de la celda

# Por número de fila y columna
celda = ws.cell(row=1, column=1)
print(celda.value)
\`\`\`

Ambas formas son equivalentes: \`ws["A1"]\` y \`ws.cell(row=1, column=1)\`.

### Leer un rango de celdas

\`\`\`python
# Leer un rango específico
for fila in ws["A1:C5"]:
    for celda in fila:
        print(celda.value, end="  ")
    print()
\`\`\`

### Información de la hoja

\`\`\`python
print(f"Última fila con datos: {ws.max_row}")
print(f"Última columna con datos: {ws.max_column}")
print(f"Dimensiones: {ws.dimensions}")  # Ej: "A1:D100"
\`\`\`

### Leer todas las filas con iter_rows()

\`\`\`python
# Iterar sobre todas las filas
for fila in ws.iter_rows(min_row=1, max_row=ws.max_row, values_only=True):
    print(fila)  # Cada fila es una tupla de valores
\`\`\`

El parámetro \`values_only=True\` devuelve directamente los valores en lugar de objetos celda.

### Ejemplo práctico: leer datos de productos

Supongamos que el archivo tiene esta estructura:

| Producto | Precio | Cantidad |
|----------|--------|----------|
| Laptop | 15000 | 5 |
| Mouse | 350 | 20 |

\`\`\`python
import openpyxl

wb = openpyxl.load_workbook("productos.xlsx")
ws = wb.active

# Leer encabezados
encabezados = [celda.value for celda in ws[1]]
print(f"Columnas: {encabezados}")

# Leer datos (saltando la primera fila de encabezados)
productos = []
for fila in ws.iter_rows(min_row=2, values_only=True):
    if fila[0] is not None:  # Verificar que no sea fila vacía
        producto = dict(zip(encabezados, fila))
        productos.append(producto)

for p in productos:
    print(p)
\`\`\`
`,
    codeExample: `import openpyxl

# Primero creamos un archivo de ejemplo para leer
wb_crear = openpyxl.Workbook()
ws_crear = wb_crear.active
ws_crear.title = "Productos"

# Agregar encabezados y datos
ws_crear.append(["Producto", "Precio", "Cantidad", "Total"])
productos_data = [
    ["Laptop", 15000, 5, 75000],
    ["Mouse", 350, 20, 7000],
    ["Teclado", 800, 15, 12000],
    ["Monitor", 8000, 3, 24000],
    ["Auriculares", 1200, 10, 12000],
]
for fila in productos_data:
    ws_crear.append(fila)

wb_crear.save("productos.xlsx")
print("Archivo de ejemplo creado.")
print()

# =============================
# AHORA LEEMOS EL ARCHIVO
# =============================

wb = openpyxl.load_workbook("productos.xlsx")

# Ver hojas disponibles
print(f"Hojas en el archivo: {wb.sheetnames}")

ws = wb.active
print(f"Hoja activa: {ws.title}")
print(f"Filas con datos: {ws.max_row}")
print(f"Columnas con datos: {ws.max_column}")
print()

# Leer celda individual
print(f"Celda A1: {ws['A1'].value}")
print(f"Celda B2 (row=2, col=2): {ws.cell(row=2, column=2).value}")
print()

# Leer todos los datos con iter_rows
print("Todos los datos:")
print("-" * 45)
for fila in ws.iter_rows(min_row=1, values_only=True):
    print(fila)

print()

# Construir lista de diccionarios
encabezados = [c.value for c in ws[1]]
registros = []
for fila in ws.iter_rows(min_row=2, values_only=True):
    if fila[0] is not None:
        registros.append(dict(zip(encabezados, fila)))

print("Datos como lista de diccionarios:")
for r in registros:
    print(f"  {r['Producto']}: \${r['Precio']:,} x {r['Cantidad']} = \${r['Total']:,}")
`,
    keyPoints: [
      'load_workbook() abre un archivo Excel existente y devuelve un objeto Workbook',
      'wb.sheetnames lista todas las hojas; wb.active accede a la hoja activa',
      'Las celdas se acceden por notación Excel (ws["A1"]) o por coordenadas (ws.cell(row=1, column=1))',
      'iter_rows() con values_only=True devuelve tuplas de valores directamente',
      'max_row y max_column indican el rango de datos en la hoja',
      'zip(encabezados, fila) permite convertir cada fila en un diccionario',
    ],
    exercise: {
      description: 'Crea un archivo Excel con datos de 5 estudiantes (nombre, materia, calificación). Luego escribe un script que lo lea y muestre: el nombre del estudiante con la calificación más alta y el promedio de todas las calificaciones.',
      hint: 'Usa iter_rows(min_row=2, values_only=True) para saltar el encabezado. Guarda las calificaciones en una lista y usa max() y sum()/len() para calcular el máximo y promedio.',
    },
    quiz: [
      {
        question: '¿Qué función de openpyxl se usa para abrir un archivo Excel existente?',
        options: [
          'openpyxl.open_workbook()',
          'openpyxl.load_workbook()',
          'openpyxl.read_workbook()',
          'openpyxl.Workbook()',
        ],
        correctAnswer: 'openpyxl.load_workbook()',
        correctFeedback: '¡Correcto! load_workbook() carga un archivo existente. openpyxl.Workbook() crea uno nuevo desde cero.',
        incorrectFeedback: 'La función correcta es load_workbook(). Workbook() crea un archivo nuevo; open_workbook() y read_workbook() no existen en openpyxl.',
      },
      {
        question: '¿Cuál es la diferencia entre ws["A1"] y ws.cell(row=1, column=1)?',
        options: [
          'ws["A1"] lee el valor, ws.cell() devuelve el objeto celda',
          'Son equivalentes, ambas formas acceden a la misma celda',
          'ws.cell() solo funciona con números, ws["A1"] solo con letras',
          'ws["A1"] es más rápida que ws.cell()',
        ],
        correctAnswer: 'Son equivalentes, ambas formas acceden a la misma celda',
        correctFeedback: '¡Correcto! Ambas formas acceden exactamente a la misma celda. ws["A1"] usa notación de Excel, ws.cell(row=1, column=1) usa coordenadas numéricas.',
        incorrectFeedback: 'Son equivalentes. Ambas acceden al mismo objeto celda. La diferencia es solo sintáctica: ws["A1"] usa notación de Excel y ws.cell() usa números de fila y columna.',
      },
      {
        question: '¿Qué hace el parámetro values_only=True en iter_rows()?',
        options: [
          'Solo lee filas que tienen valores, ignorando las vacías',
          'Devuelve directamente los valores en lugar de objetos celda',
          'Convierte todos los valores a texto',
          'Lee solo la primera columna de cada fila',
        ],
        correctAnswer: 'Devuelve directamente los valores en lugar de objetos celda',
        correctFeedback: '¡Correcto! Con values_only=True, cada fila devuelve una tupla de valores (números, texto, etc.) en lugar de objetos Cell que tendrías que acceder con .value.',
        incorrectFeedback: 'values_only=True hace que iter_rows() devuelva los valores directamente como tuplas, en lugar de objetos Cell. Sin este parámetro necesitarías usar celda.value para cada celda.',
      },
      {
        question: '¿Cómo se obtiene el nombre de todas las hojas de un workbook?',
        options: [
          'wb.sheets',
          'wb.get_sheets()',
          'wb.sheetnames',
          'wb.sheet_list',
        ],
        correctAnswer: 'wb.sheetnames',
        correctFeedback: '¡Correcto! wb.sheetnames devuelve una lista con los nombres de todas las hojas del archivo.',
        incorrectFeedback: 'La propiedad correcta es wb.sheetnames. Devuelve una lista como ["Enero", "Febrero", "Marzo"].',
      },
      {
        question: 'Si quieres leer datos empezando desde la fila 2 (para saltar el encabezado), ¿cómo lo haces?',
        options: [
          'ws.iter_rows(skip_header=True)',
          'ws.iter_rows(min_row=2, values_only=True)',
          'ws.iter_rows(start=2)',
          'ws.iter_rows()[1:]',
        ],
        correctAnswer: 'ws.iter_rows(min_row=2, values_only=True)',
        correctFeedback: '¡Correcto! min_row=2 indica que se empiece desde la fila 2, saltando así la fila 1 de encabezados.',
        incorrectFeedback: 'Para saltar el encabezado se usa min_row=2 en iter_rows(). No existe skip_header ni start como parámetros en openpyxl.',
      },
      {
        question: '¿Qué propiedad de la hoja indica cuántas filas tienen datos?',
        options: ['ws.row_count', 'ws.total_rows', 'ws.max_row', 'ws.last_row'],
        correctAnswer: 'ws.max_row',
        correctFeedback: '¡Correcto! ws.max_row devuelve el número de la última fila que contiene datos. ws.max_column hace lo mismo para columnas.',
        incorrectFeedback: 'La propiedad correcta es ws.max_row. También existe ws.max_column para columnas. Las otras opciones no existen en openpyxl.',
      },
      {
        question: 'Dado el código: `registros = [dict(zip(encabezados, fila)) for fila in ws.iter_rows(min_row=2, values_only=True)]`. ¿Qué produce?',
        options: [
          'Una lista de tuplas con los datos',
          'Una lista de diccionarios donde las claves son los encabezados',
          'Un diccionario con las filas como claves',
          'Una lista con solo los valores de la primera columna',
        ],
        correctAnswer: 'Una lista de diccionarios donde las claves son los encabezados',
        correctFeedback: '¡Correcto! zip(encabezados, fila) empareja cada encabezado con su valor correspondiente, y dict() los convierte en un diccionario. El resultado es una lista de dicts.',
        incorrectFeedback: 'zip(encabezados, fila) empareja los encabezados con los valores de cada fila, y dict() los convierte en un diccionario. El resultado es una lista de diccionarios.',
      },
    ],
  },
  {
    slug: 'escribir-excel',
    title: 'Escribir datos en Excel',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 131,
    description: 'Aprende a crear o modificar archivos Excel escribiendo valores en celdas.',
    explanation: `## Escribir datos en Excel con openpyxl

Crear archivos Excel desde Python es igual de sencillo que leerlos. Aquí aprenderás a generar archivos completos desde cero.

### Crear un nuevo workbook

\`\`\`python
import openpyxl

# Crear un workbook vacío
wb = openpyxl.Workbook()

# La hoja activa se crea automáticamente
ws = wb.active
ws.title = "Ventas"  # Cambiar el nombre de la hoja
\`\`\`

### Agregar y acceder a hojas

\`\`\`python
# Crear una segunda hoja
ws2 = wb.create_sheet("Gastos")

# Crear hoja al principio (posición 0)
ws3 = wb.create_sheet("Resumen", 0)
\`\`\`

### Escribir en celdas

\`\`\`python
# Por notación de Excel
ws["A1"] = "Producto"
ws["B1"] = "Precio"

# Por coordenadas numéricas
ws.cell(row=1, column=1, value="Producto")
ws.cell(row=1, column=2, value="Precio")
\`\`\`

### Guardar el archivo

\`\`\`python
# IMPORTANTE: usar extensión .xlsx
wb.save("mi_archivo.xlsx")
\`\`\`

Error común: guardar sin extensión o con .xls en lugar de .xlsx.

### El método append(): agregar filas eficientemente

\`\`\`python
# Agregar una fila al final
ws.append(["Laptop", 15000, 5])
ws.append(["Mouse", 350, 20])

# Agregar desde una lista de listas
datos = [
    ["Laptop", 15000, 5],
    ["Mouse", 350, 20],
    ["Teclado", 800, 15],
]
for fila in datos:
    ws.append(fila)
\`\`\`

\`append()\` siempre agrega la fila después de la última fila con datos. Es mucho más eficiente que calcular la posición manualmente.

### Crear una hoja completa desde una lista de diccionarios

\`\`\`python
import openpyxl

productos = [
    {"nombre": "Laptop", "precio": 15000, "stock": 5},
    {"nombre": "Mouse", "precio": 350, "stock": 20},
    {"nombre": "Teclado", "precio": 800, "stock": 15},
]

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Inventario"

# Escribir encabezados (keys del primer diccionario)
encabezados = list(productos[0].keys())
ws.append(encabezados)

# Escribir datos
for producto in productos:
    ws.append(list(producto.values()))

wb.save("inventario.xlsx")
print("Inventario guardado correctamente.")
\`\`\`

### Error frecuente: extensión del archivo

\`\`\`python
# MAL: no guarda correctamente
wb.save("mi_archivo")
wb.save("mi_archivo.xls")

# BIEN: siempre usar .xlsx
wb.save("mi_archivo.xlsx")
\`\`\`
`,
    codeExample: `import openpyxl

# 1. Crear workbook y hoja
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Registro de Ventas"

# 2. Escribir encabezados
encabezados = ["Fecha", "Producto", "Cantidad", "Precio Unitario", "Total"]
ws.append(encabezados)

# 3. Lista de datos (simulando registros de ventas)
ventas = [
    {"fecha": "2026-01-15", "producto": "Laptop", "cantidad": 2, "precio": 15000},
    {"fecha": "2026-01-16", "producto": "Mouse", "cantidad": 10, "precio": 350},
    {"fecha": "2026-01-17", "producto": "Teclado", "cantidad": 5, "precio": 800},
    {"fecha": "2026-01-18", "producto": "Monitor", "cantidad": 1, "precio": 8000},
    {"fecha": "2026-01-19", "producto": "Auriculares", "cantidad": 3, "precio": 1200},
]

# 4. Escribir cada venta usando append
for venta in ventas:
    total = venta["cantidad"] * venta["precio"]
    ws.append([
        venta["fecha"],
        venta["producto"],
        venta["cantidad"],
        venta["precio"],
        total,
    ])

# 5. Agregar fila de totales
total_general = sum(v["cantidad"] * v["precio"] for v in ventas)
ws.append(["", "TOTAL", "", "", total_general])

# 6. Guardar con .xlsx
wb.save("registro_ventas.xlsx")
print("Archivo guardado: registro_ventas.xlsx")

# Verificar leyendo el archivo guardado
wb2 = openpyxl.load_workbook("registro_ventas.xlsx")
ws2 = wb2.active
print(f"Filas guardadas: {ws2.max_row}")
print(f"Columnas: {ws2.max_column}")
print()
print("Contenido:")
for fila in ws2.iter_rows(values_only=True):
    print(fila)
`,
    keyPoints: [
      'openpyxl.Workbook() crea un nuevo archivo Excel vacío con una hoja activa',
      'Las celdas se escriben con ws["A1"] = valor o ws.cell(row=1, column=1, value=valor)',
      'append() es el método más eficiente para agregar filas al final de los datos',
      'create_sheet() agrega nuevas hojas al workbook',
      'wb.save() guarda el archivo; siempre usar extensión .xlsx',
      'Para crear una tabla desde una lista de dicts: los keys son encabezados, los values son filas',
    ],
    exercise: {
      description: 'Crea un script que genere un archivo Excel llamado "calificaciones.xlsx" con los resultados de 6 estudiantes en 3 materias (Matemáticas, Español, Ciencias). Incluye una fila de encabezados y al final una fila que muestre el promedio de cada materia.',
      hint: 'Usa append() para agregar cada fila. Para el promedio, puedes calcular la suma de cada columna dividida entre 6. Recuerda que ws.append(["", "Promedio", prom1, prom2, prom3]) agrega la fila de totales.',
    },
    quiz: [
      {
        question: '¿Qué función de openpyxl crea un nuevo archivo Excel vacío?',
        options: [
          'openpyxl.load_workbook()',
          'openpyxl.new_workbook()',
          'openpyxl.Workbook()',
          'openpyxl.create_workbook()',
        ],
        correctAnswer: 'openpyxl.Workbook()',
        correctFeedback: '¡Correcto! Workbook() crea un nuevo archivo. load_workbook() abre uno existente.',
        incorrectFeedback: 'Workbook() (con mayúscula) crea un nuevo archivo. load_workbook() es para abrir archivos ya existentes. Las otras opciones no existen.',
      },
      {
        question: '¿Cuál es el error más común al guardar un archivo con openpyxl?',
        options: [
          'Usar wb.save() en lugar de wb.write()',
          'Guardar el archivo sin extensión o con extensión .xls',
          'No cerrar el workbook antes de guardar',
          'Guardar en la carpeta incorrecta',
        ],
        correctAnswer: 'Guardar el archivo sin extensión o con extensión .xls',
        correctFeedback: '¡Correcto! openpyxl trabaja con el formato .xlsx. Guardar con .xls o sin extensión puede generar archivos corruptos o incompatibles.',
        incorrectFeedback: 'El error más común es usar la extensión incorrecta. openpyxl solo genera archivos .xlsx. Siempre usa: wb.save("archivo.xlsx").',
      },
      {
        question: '¿Qué ventaja tiene usar append() sobre escribir celda por celda?',
        options: [
          'append() solo funciona con listas, no con tuplas',
          'append() agrega automáticamente al final y es más eficiente',
          'append() no requiere que el workbook esté abierto',
          'append() valida los datos antes de agregarlos',
        ],
        correctAnswer: 'append() agrega automáticamente al final y es más eficiente',
        correctFeedback: '¡Correcto! append() siempre agrega en la siguiente fila disponible, sin necesidad de calcular la posición. Es mucho más cómodo para agregar múltiples filas.',
        incorrectFeedback: 'append() agrega automáticamente después de la última fila con datos. No necesitas saber en qué fila estás. Es más eficiente y menos propenso a errores.',
      },
      {
        question: '¿Cómo se crea una segunda hoja llamada "Gastos" en un workbook?',
        options: [
          'wb.add_sheet("Gastos")',
          'wb.new_sheet("Gastos")',
          'wb.create_sheet("Gastos")',
          'wb.sheets.append("Gastos")',
        ],
        correctAnswer: 'wb.create_sheet("Gastos")',
        correctFeedback: '¡Correcto! create_sheet() crea una nueva hoja. Puedes pasarle el nombre y opcionalmente la posición donde insertarla.',
        incorrectFeedback: 'La forma correcta es wb.create_sheet("Gastos"). add_sheet() y new_sheet() no existen en openpyxl.',
      },
      {
        question: 'Tienes una lista de diccionarios de productos. ¿Cuál es la forma correcta de escribir los encabezados?',
        options: [
          'ws.append(productos[0])',
          'ws.append(list(productos[0].keys()))',
          'ws.headers = list(productos[0].keys())',
          'ws.write_headers(productos)',
        ],
        correctAnswer: 'ws.append(list(productos[0].keys()))',
        correctFeedback: '¡Correcto! Los keys del primer diccionario son los nombres de las columnas. list() los convierte en lista para que append() los agregue como fila.',
        incorrectFeedback: 'Para escribir los encabezados, se extraen las claves del diccionario con .keys() y se pasan a append() como lista. ws.append(list(productos[0].keys())).',
      },
      {
        question: '¿Qué produce ws.cell(row=3, column=2, value="Hola")?',
        options: [
          'Lee el valor de la celda B3',
          'Escribe "Hola" en la celda B3',
          'Elimina el contenido de la celda B3',
          'Mueve el cursor a la celda B3',
        ],
        correctAnswer: 'Escribe "Hola" en la celda B3',
        correctFeedback: '¡Correcto! row=3, column=2 corresponde a la celda B3 (columna B = columna 2). El parámetro value asigna el valor a esa celda.',
        incorrectFeedback: 'ws.cell(row=3, column=2, value="Hola") escribe "Hola" en la celda B3 (fila 3, columna 2 = columna B). Para leer usarías .value sin el parámetro value.',
      },
      {
        question: '¿Cuál es la extensión de archivo que openpyxl puede guardar?',
        options: ['.xls', '.xlsx', '.csv', 'Todas las anteriores'],
        correctAnswer: '.xlsx',
        correctFeedback: '¡Correcto! openpyxl solo trabaja con el formato .xlsx (Excel moderno). Para .xls se usa xlwt, y .csv no es un formato de Excel.',
        incorrectFeedback: 'openpyxl solo puede guardar archivos .xlsx. No puede crear archivos .xls ni .csv. Esos formatos requieren otras librerías.',
      },
    ],
  },
  {
    slug: 'recorrer-filas-columnas',
    title: 'Recorrer filas y columnas',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 132,
    description: 'Aprende a recorrer datos de una hoja de cálculo para analizarlos o transformarlos.',
    explanation: `## Recorrer filas y columnas en Excel

La verdadera potencia de openpyxl aparece cuando puedes recorrer y procesar datos de forma programática.

### iter_rows(): recorrer por filas

\`\`\`python
# Recorrer todas las filas
for fila in ws.iter_rows():
    for celda in fila:
        print(celda.value)

# Con parámetros específicos
for fila in ws.iter_rows(min_row=2, max_row=10, min_col=1, max_col=3, values_only=True):
    print(fila)  # tupla: (valor_col1, valor_col2, valor_col3)
\`\`\`

### iter_cols(): recorrer por columnas

\`\`\`python
# Recorrer por columnas
for columna in ws.iter_cols(min_col=1, max_col=3, values_only=True):
    print(f"Columna: {columna}")
\`\`\`

### Convertir filas de Excel a lista de diccionarios

Este patrón es muy útil para trabajar con datos estructurados:

\`\`\`python
# Leer encabezados de la primera fila
encabezados = [c.value for c in ws[1]]

# Convertir cada fila en diccionario
registros = []
for fila in ws.iter_rows(min_row=2, values_only=True):
    if any(v is not None for v in fila):  # Saltar filas completamente vacías
        registro = dict(zip(encabezados, fila))
        registros.append(registro)
\`\`\`

### Saltar la fila de encabezado

\`\`\`python
# Opción 1: min_row=2
for fila in ws.iter_rows(min_row=2, values_only=True):
    procesar(fila)

# Opción 2: next() para saltar el primer elemento
filas = ws.iter_rows(values_only=True)
next(filas)  # Saltar encabezados
for fila in filas:
    procesar(fila)
\`\`\`

### Cálculos sobre columnas

\`\`\`python
# Calcular promedio de la columna "Precio" (columna B = índice 1)
precios = []
for fila in ws.iter_rows(min_row=2, values_only=True):
    if fila[1] is not None:
        precios.append(fila[1])

promedio = sum(precios) / len(precios)
print(f"Precio promedio: \${promedio:,.2f}")
print(f"Precio máximo: \${max(precios):,}")
print(f"Precio mínimo: \${min(precios):,}")
\`\`\`

### Filtrar filas por condición

\`\`\`python
# Encontrar filas donde el precio es mayor a 1000
productos_caros = []
for fila in ws.iter_rows(min_row=2, values_only=True):
    nombre, precio, cantidad = fila[0], fila[1], fila[2]
    if precio is not None and precio > 1000:
        productos_caros.append({"nombre": nombre, "precio": precio})

print(f"Productos con precio > 1000: {len(productos_caros)}")
for p in productos_caros:
    print(f"  {p['nombre']}: \${p['precio']:,}")
\`\`\`
`,
    codeExample: `import openpyxl

# Crear archivo de ejemplo con datos de empleados
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Empleados"

ws.append(["Nombre", "Departamento", "Salario", "Años en empresa"])
empleados_data = [
    ["Ana García", "Ventas", 18000, 3],
    ["Carlos López", "IT", 25000, 5],
    ["María Rodríguez", "RRHH", 16000, 2],
    ["Luis Martínez", "IT", 28000, 7],
    ["Sofia Torres", "Ventas", 19500, 4],
    ["Roberto Díaz", "Contabilidad", 22000, 6],
    ["Elena Vargas", "IT", 30000, 8],
]
for e in empleados_data:
    ws.append(e)

wb.save("empleados.xlsx")

# =====================================
# ANALIZAR LOS DATOS CON ITER_ROWS
# =====================================

wb = openpyxl.load_workbook("empleados.xlsx")
ws = wb.active

# Leer encabezados
encabezados = [c.value for c in ws[1]]
print(f"Columnas: {encabezados}")
print()

# Construir lista de registros
registros = []
for fila in ws.iter_rows(min_row=2, values_only=True):
    if fila[0] is not None:
        registros.append(dict(zip(encabezados, fila)))

# Calcular estadísticas de salarios
salarios = [r["Salario"] for r in registros]
print(f"Total de empleados: {len(registros)}")
print(f"Salario promedio: \${sum(salarios)/len(salarios):,.2f}")
print(f"Salario máximo: \${max(salarios):,}")
print(f"Salario mínimo: \${min(salarios):,}")
print()

# Filtrar por departamento
departamento_filtro = "IT"
it_team = [r for r in registros if r["Departamento"] == departamento_filtro]
print(f"Empleados de {departamento_filtro}:")
for e in it_team:
    print(f"  {e['Nombre']}: \${e['Salario']:,}")

print()

# Recorrer por columnas con iter_cols
print("Valores de la columna Salario (usando iter_cols):")
for columna in ws.iter_cols(min_col=3, max_col=3, min_row=2, values_only=True):
    for valor in columna:
        if valor is not None:
            print(f"  \${valor:,}")
`,
    keyPoints: [
      'iter_rows() y iter_cols() son los métodos principales para recorrer datos de una hoja',
      'values_only=True devuelve valores directamente sin necesidad de llamar .value',
      'min_row, max_row, min_col, max_col permiten limitar el rango de iteración',
      'El patrón dict(zip(encabezados, fila)) convierte cada fila en un diccionario útil',
      'Verificar fila[x] is not None evita errores con celdas vacías',
      'Con los datos en una lista de dicts se pueden usar funciones como max(), min(), sum() fácilmente',
    ],
    exercise: {
      description: 'Crea un archivo Excel con ventas de 8 productos (nombre, cantidad vendida, precio unitario). Escribe un script que lea el archivo y calcule: el producto más vendido por cantidad, el total de ingresos, y muestre solo los productos que generaron más de $5,000 en ingresos.',
      hint: 'Calcula el ingreso de cada producto multiplicando cantidad * precio. Usa max() con key= para encontrar el más vendido: max(registros, key=lambda r: r["cantidad"]). Filtra con una lista por comprensión.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre iter_rows() e iter_cols()?',
        options: [
          'iter_rows() es más rápido que iter_cols()',
          'iter_rows() agrupa datos por fila, iter_cols() agrupa por columna',
          'iter_cols() solo funciona con números',
          'No hay diferencia, hacen lo mismo',
        ],
        correctAnswer: 'iter_rows() agrupa datos por fila, iter_cols() agrupa por columna',
        correctFeedback: '¡Correcto! iter_rows() devuelve grupos de celdas por fila (una tupla por fila). iter_cols() devuelve grupos por columna (una tupla por columna).',
        incorrectFeedback: 'iter_rows() itera de forma que cada elemento del bucle es una fila. iter_cols() itera de forma que cada elemento es una columna completa.',
      },
      {
        question: '¿Para qué sirve el parámetro min_row=2 en iter_rows()?',
        options: [
          'Limita la iteración a un máximo de 2 filas',
          'Comienza la iteración desde la fila 2, saltando la fila 1',
          'Solo lee filas con más de 2 columnas',
          'Invierte el orden de iteración',
        ],
        correctAnswer: 'Comienza la iteración desde la fila 2, saltando la fila 1',
        correctFeedback: '¡Correcto! min_row=2 hace que la iteración empiece desde la fila 2. Se usa típicamente para saltar la fila de encabezados.',
        incorrectFeedback: 'min_row=2 indica la fila mínima desde donde comenzar. Al poner min_row=2, se salta la fila 1 (que generalmente contiene los encabezados).',
      },
      {
        question: '¿Por qué es importante verificar `if fila[0] is not None` al iterar?',
        options: [
          'Para evitar procesar filas completamente vacías al final de los datos',
          'Porque openpyxl no puede leer celdas vacías',
          'Para convertir None en cero automáticamente',
          'Por requerimiento de Python 3',
        ],
        correctAnswer: 'Para evitar procesar filas completamente vacías al final de los datos',
        correctFeedback: '¡Correcto! Excel a veces incluye filas vacías al final. Verificar que la primera celda no sea None evita procesar datos vacíos.',
        incorrectFeedback: 'openpyxl puede leer celdas vacías, pero devuelve None. Verificar None evita procesar filas vacías que pueden aparecer al final del rango de datos.',
      },
      {
        question: 'Para calcular el promedio de la columna C (índice 2 en tupla), ¿qué código es correcto?',
        options: [
          'sum(ws.col(2)) / ws.max_row',
          'valores = [f[2] for f in ws.iter_rows(min_row=2, values_only=True) if f[2]]; promedio = sum(valores)/len(valores)',
          'ws.average(column=2)',
          'openpyxl.avg(ws, col=2)',
        ],
        correctAnswer: 'valores = [f[2] for f in ws.iter_rows(min_row=2, values_only=True) if f[2]]; promedio = sum(valores)/len(valores)',
        correctFeedback: '¡Correcto! Se extraen los valores de la columna 3 (índice 2) en una lista y luego se calculan las estadísticas con funciones de Python.',
        incorrectFeedback: 'No existe ws.average() en openpyxl. La forma correcta es extraer los valores en una lista con list comprehension y luego usar sum()/len() de Python.',
      },
      {
        question: '¿Qué produce `dict(zip(["Nombre", "Edad"], ("Ana", 25)))`?',
        options: [
          '["Nombre", "Ana", "Edad", 25]',
          '{"Nombre": "Ana", "Edad": 25}',
          '(("Nombre", "Ana"), ("Edad", 25))',
          'Error: zip no funciona con tuplas',
        ],
        correctAnswer: '{"Nombre": "Ana", "Edad": 25}',
        correctFeedback: '¡Correcto! zip() empareja los elementos de ambos iterables, y dict() los convierte en pares clave-valor. Resultado: {"Nombre": "Ana", "Edad": 25}.',
        incorrectFeedback: 'zip() empareja los elementos posicionalmente: ("Nombre","Ana") y ("Edad",25). dict() convierte esos pares en un diccionario: {"Nombre":"Ana","Edad":25}.',
      },
      {
        question: 'Tienes registros con campo "ventas". ¿Cómo encuentras el registro con más ventas?',
        options: [
          'registros.max("ventas")',
          'max(registros, key=lambda r: r["ventas"])',
          'sorted(registros)[-1]',
          'registros.sort(key="ventas")[-1]',
        ],
        correctAnswer: 'max(registros, key=lambda r: r["ventas"])',
        correctFeedback: '¡Correcto! max() con key= permite comparar diccionarios por el valor de un campo específico. Devuelve el diccionario completo del registro con más ventas.',
        incorrectFeedback: 'max() con key=lambda acepta una función que extrae el valor a comparar. max(registros, key=lambda r: r["ventas"]) devuelve el dict completo del máximo.',
      },
      {
        question: 'Al usar iter_cols(), ¿qué representa cada elemento del bucle for?',
        options: [
          'Una celda individual',
          'Una fila de datos',
          'Una columna completa (tupla de celdas)',
          'Un nombre de columna',
        ],
        correctAnswer: 'Una columna completa (tupla de celdas)',
        correctFeedback: '¡Correcto! Con iter_cols(), cada iteración del bucle devuelve una tupla que contiene todas las celdas de una columna.',
        incorrectFeedback: 'iter_cols() devuelve columnas completas. Cada iteración es una tupla con todas las celdas de esa columna. Para acceder a los valores individuales, necesitas iterar dentro de cada columna.',
      },
    ],
  },
  {
    slug: 'formatos-excel',
    title: 'Aplicar formatos básicos',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 133,
    description: 'Aprende a aplicar estilos simples como negrita, tamaños, anchos de columna y formatos de número.',
    explanation: `## Aplicar formatos básicos en Excel con openpyxl

Un archivo Excel bien formateado es más fácil de leer y más profesional. openpyxl te permite aplicar estilos directamente desde Python.

### Importar las clases de estilos

\`\`\`python
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter
\`\`\`

### Aplicar fuente (Font)

\`\`\`python
from openpyxl.styles import Font

# Negrita y tamaño 14
ws["A1"].font = Font(bold=True, size=14)

# Negrita, cursiva, color rojo
ws["A1"].font = Font(bold=True, italic=True, color="FF0000")

# Fuente personalizada
ws["A1"].font = Font(name="Arial", size=12, bold=True, color="FFFFFF")
\`\`\`

Los colores se especifican en formato hexadecimal RGB sin el símbolo \`#\`.

### Color de fondo (PatternFill)

\`\`\`python
from openpyxl.styles import PatternFill

# Fondo azul oscuro
ws["A1"].fill = PatternFill(
    start_color="1F4E79",
    end_color="1F4E79",
    fill_type="solid"
)
\`\`\`

### Alineación (Alignment)

\`\`\`python
from openpyxl.styles import Alignment

# Centrar horizontalmente
ws["A1"].alignment = Alignment(horizontal="center")

# Centrar vertical y horizontalmente
ws["A1"].alignment = Alignment(horizontal="center", vertical="center")

# Ajuste de texto automático
ws["A1"].alignment = Alignment(wrap_text=True)
\`\`\`

### Ancho de columnas

\`\`\`python
# Ancho manual
ws.column_dimensions["A"].width = 20
ws.column_dimensions["B"].width = 15

# Auto-calcular ancho según contenido
from openpyxl.utils import get_column_letter

for col in ws.columns:
    max_length = 0
    col_letter = get_column_letter(col[0].column)
    for celda in col:
        if celda.value:
            max_length = max(max_length, len(str(celda.value)))
    ws.column_dimensions[col_letter].width = max_length + 2
\`\`\`

### Formato de números

\`\`\`python
# Formato de moneda
ws["C2"].number_format = "#,##0.00"

# Porcentaje
ws["D2"].number_format = "0.00%"

# Fecha
ws["E2"].number_format = "DD/MM/YYYY"
\`\`\`

### Congelar paneles (Freeze Panes)

\`\`\`python
# Congelar la primera fila (los encabezados siempre visibles)
ws.freeze_panes = "A2"

# Congelar primera columna y primera fila
ws.freeze_panes = "B2"
\`\`\`

### Dar estilo a una fila de encabezados completa

\`\`\`python
from openpyxl.styles import Font, PatternFill, Alignment

# Estilo profesional para encabezados
encabezado_font = Font(bold=True, color="FFFFFF", size=11)
encabezado_fill = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
encabezado_alineacion = Alignment(horizontal="center")

for celda in ws[1]:  # Primera fila
    celda.font = encabezado_font
    celda.fill = encabezado_fill
    celda.alignment = encabezado_alineacion
\`\`\`
`,
    codeExample: `import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter

# Crear workbook con datos de muestra
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Reporte Formateado"

# Título del reporte
ws["A1"] = "REPORTE DE INVENTARIO"
ws["A1"].font = Font(name="Arial", bold=True, size=14, color="1F4E79")
ws["A1"].alignment = Alignment(horizontal="center")
ws.merge_cells("A1:E1")  # Combinar celdas para el título

ws.append([])  # Fila vacía de separación

# Encabezados con estilo
encabezados = ["Producto", "Categoría", "Precio", "Stock", "Valor Total"]
ws.append(encabezados)

fila_encabezado = ws[3]
for celda in fila_encabezado:
    celda.font = Font(bold=True, color="FFFFFF", size=11)
    celda.fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")
    celda.alignment = Alignment(horizontal="center")

# Datos de productos
datos = [
    ["Laptop Pro", "Electrónica", 18500, 12, 222000],
    ["Mouse Inalámbrico", "Accesorios", 450, 50, 22500],
    ["Teclado Mecánico", "Accesorios", 1200, 30, 36000],
    ["Monitor 27\"", "Electrónica", 9500, 8, 76000],
    ["Auriculares BT", "Audio", 1800, 20, 36000],
]

for i, fila in enumerate(datos, start=4):
    ws.append(fila)
    # Formato de moneda para columnas de precio
    ws.cell(row=i, column=3).number_format = "#,##0.00"
    ws.cell(row=i, column=5).number_format = "#,##0.00"
    # Alternar color de filas
    if i % 2 == 0:
        for col in range(1, 6):
            ws.cell(row=i, column=col).fill = PatternFill(
                start_color="DEEAF1", end_color="DEEAF1", fill_type="solid"
            )

# Fila de totales
fila_total = ws.max_row + 1
ws.cell(row=fila_total, column=1, value="TOTAL")
ws.cell(row=fila_total, column=5, value=sum(d[4] for d in datos))
ws.cell(row=fila_total, column=1).font = Font(bold=True)
ws.cell(row=fila_total, column=5).font = Font(bold=True)
ws.cell(row=fila_total, column=5).number_format = "#,##0.00"

# Auto-ajustar anchos de columna
for col in ws.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for celda in col:
        if celda.value:
            max_len = max(max_len, len(str(celda.value)))
    ws.column_dimensions[col_letter].width = min(max_len + 3, 30)

# Congelar encabezados
ws.freeze_panes = "A4"

wb.save("reporte_formateado.xlsx")
print("Reporte con formato guardado: reporte_formateado.xlsx")
`,
    keyPoints: [
      'Font controla la fuente: bold, size, color, italic, name de la tipografía',
      'PatternFill aplica color de fondo con fill_type="solid" y el color en hex sin #',
      'Alignment centra el contenido: horizontal="center", vertical="center"',
      'column_dimensions["A"].width establece el ancho de una columna',
      'number_format aplica formato de número: "#,##0.00" para moneda, "0.00%" para porcentaje',
      'freeze_panes congela filas/columnas para que siempre sean visibles al desplazarse',
    ],
    exercise: {
      description: 'Crea un archivo Excel con datos de 5 empleados (nombre, departamento, salario). Aplica: encabezados con fondo azul y texto blanco en negrita, formato de moneda (#,##0.00) para la columna de salario, congelar la primera fila, y auto-ajustar el ancho de todas las columnas.',
      hint: 'Itera sobre ws[1] para aplicar el estilo a todos los encabezados a la vez. Para el ancho automático, recorre ws.columns y usa get_column_letter(col[0].column) para obtener la letra de cada columna.',
    },
    quiz: [
      {
        question: '¿Cómo se importan las clases de estilos en openpyxl?',
        options: [
          'import openpyxl.styles',
          'from openpyxl import Font, Fill',
          'from openpyxl.styles import Font, PatternFill, Alignment',
          'from openpyxl import styles.Font',
        ],
        correctAnswer: 'from openpyxl.styles import Font, PatternFill, Alignment',
        correctFeedback: '¡Correcto! Las clases de estilos están en el módulo openpyxl.styles y se importan con from ... import.',
        incorrectFeedback: 'La forma correcta es: from openpyxl.styles import Font, PatternFill, Alignment. El módulo de estilos es openpyxl.styles.',
      },
      {
        question: '¿En qué formato se especifican los colores en openpyxl?',
        options: [
          'Nombre del color en inglés: "blue"',
          'RGB separado por comas: "0,0,255"',
          'Hexadecimal sin el símbolo #: "0000FF"',
          'Hexadecimal con el símbolo #: "#0000FF"',
        ],
        correctAnswer: 'Hexadecimal sin el símbolo #: "0000FF"',
        correctFeedback: '¡Correcto! openpyxl usa colores en formato hexadecimal RGB sin el símbolo #. Por ejemplo: "FF0000" para rojo, "0000FF" para azul.',
        incorrectFeedback: 'openpyxl usa formato hexadecimal sin el # inicial. El color rojo sería "FF0000" (no "#FF0000"). No acepta nombres de colores ni valores RGB separados por comas.',
      },
      {
        question: '¿Qué hace ws.freeze_panes = "A2"?',
        options: [
          'Bloquea la celda A2 para que no se pueda editar',
          'Congela la primera fila para que permanezca visible al desplazarse',
          'Combina todas las celdas de la columna A',
          'Protege el archivo con contraseña',
        ],
        correctAnswer: 'Congela la primera fila para que permanezca visible al desplazarse',
        correctFeedback: '¡Correcto! freeze_panes congela todo lo que está encima y a la izquierda de la celda indicada. "A2" congela la fila 1, manteniéndola visible al hacer scroll.',
        incorrectFeedback: 'freeze_panes congela filas/columnas. "A2" significa: congela todo antes de la fila 2, es decir, la fila 1 siempre será visible sin importar el scroll.',
      },
      {
        question: '¿Cuál es el formato correcto para mostrar números como moneda con dos decimales?',
        options: [
          '"$#,##0.00"',
          '"#,##0.00"',
          '"moneda"',
          '"0.2f"',
        ],
        correctAnswer: '"#,##0.00"',
        correctFeedback: '¡Correcto! "#,##0.00" es el formato de Excel para números con separador de miles y dos decimales. El símbolo de moneda se agrega por separado si se necesita.',
        incorrectFeedback: 'El formato correcto en Excel es "#,##0.00". Incluye separador de miles (,) y dos decimales (.00). No uses "0.2f" que es sintaxis de f-strings de Python, no de Excel.',
      },
      {
        question: '¿Cómo se aplica negrita y tamaño 14 a la celda A1?',
        options: [
          'ws["A1"].style = "bold, size=14"',
          'ws["A1"].font = Font(bold=True, size=14)',
          'ws["A1"].set_font(bold=True, size=14)',
          'Font(ws["A1"], bold=True, size=14)',
        ],
        correctAnswer: 'ws["A1"].font = Font(bold=True, size=14)',
        correctFeedback: '¡Correcto! Se asigna un objeto Font a la propiedad .font de la celda. Font() acepta parámetros como bold, size, color, italic, etc.',
        incorrectFeedback: 'La forma correcta es asignar un objeto Font a la propiedad .font de la celda: ws["A1"].font = Font(bold=True, size=14).',
      },
      {
        question: '¿Cuál es la función de get_column_letter() de openpyxl.utils?',
        options: [
          'Convierte una letra de columna a número (A → 1)',
          'Convierte un número de columna a letra (1 → A)',
          'Obtiene el nombre de la columna activa',
          'Formatea el texto de una celda en mayúsculas',
        ],
        correctAnswer: 'Convierte un número de columna a letra (1 → A)',
        correctFeedback: '¡Correcto! get_column_letter(1) devuelve "A", get_column_letter(2) devuelve "B", etc. Es útil cuando se trabaja con números de columna y se necesita la notación de Excel.',
        incorrectFeedback: 'get_column_letter() convierte número a letra: get_column_letter(1) = "A". La función inversa es column_index_from_string() que convierte "A" a 1.',
      },
      {
        question: '¿Para qué sirve PatternFill con fill_type="solid"?',
        options: [
          'Para agregar un patrón de rayas a la celda',
          'Para aplicar un color de fondo sólido a la celda',
          'Para proteger la celda con una contraseña',
          'Para agregar un borde alrededor de la celda',
        ],
        correctAnswer: 'Para aplicar un color de fondo sólido a la celda',
        correctFeedback: '¡Correcto! PatternFill con fill_type="solid" aplica un color de fondo uniforme. Es la forma más común de colorear celdas en openpyxl.',
        incorrectFeedback: 'PatternFill con fill_type="solid" aplica un color de relleno sólido. Para bordes se usa Border(). fill_type puede ser "solid", "darkGrid", "lightGrid", entre otros.',
      },
    ],
  },
  {
    slug: 'reportes-excel',
    title: 'Crear reportes en Excel',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 134,
    description: 'Aprende a generar reportes simples en Excel a partir de datos procesados con Python.',
    explanation: `## Crear reportes en Excel con Python

Combinar lectura, escritura y formato te permite generar reportes profesionales automáticamente.

### Estructura de un reporte típico

Un buen reporte en Excel tiene:
1. **Título**: nombre del reporte, fecha de generación
2. **Encabezados**: nombres de columnas con estilo destacado
3. **Datos**: filas de información
4. **Resumen**: totales o promedios al final

### Agregar un título al reporte

\`\`\`python
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment

wb = openpyxl.Workbook()
ws = wb.active

# Título en la primera fila
ws["A1"] = "REPORTE DE VENTAS - ENERO 2026"
ws["A1"].font = Font(bold=True, size=16, color="1F4E79")
ws["A1"].alignment = Alignment(horizontal="center")

# Combinar celdas del título (span de 5 columnas)
ws.merge_cells("A1:E1")

# Fila vacía de separación
ws.append([])
\`\`\`

### Tabla de datos con encabezados estilizados

\`\`\`python
# Encabezados
columnas = ["Producto", "Categoría", "Precio", "Cantidad", "Total"]
ws.append(columnas)

# Estilo para encabezados
for celda in ws[3]:  # Fila 3 porque el título ocupa la 1 y hay vacía en la 2
    celda.font = Font(bold=True, color="FFFFFF")
    celda.fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")
    celda.alignment = Alignment(horizontal="center")
\`\`\`

### Fila de totales al final

\`\`\`python
# Calcular totales
total_ventas = sum(d["total"] for d in datos)
total_unidades = sum(d["cantidad"] for d in datos)

# Agregar fila de resumen
fila_total = ws.max_row + 1
ws.cell(row=fila_total, column=1, value="TOTAL GENERAL")
ws.cell(row=fila_total, column=4, value=total_unidades)
ws.cell(row=fila_total, column=5, value=total_ventas)

# Estilo para la fila de totales
for col in range(1, 6):
    celda = ws.cell(row=fila_total, column=col)
    celda.font = Font(bold=True, color="FFFFFF")
    celda.fill = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
\`\`\`

### Auto-ajustar columnas

\`\`\`python
from openpyxl.utils import get_column_letter

def auto_ajustar_columnas(ws):
    """Ajusta el ancho de cada columna según su contenido."""
    for col in ws.columns:
        max_len = 0
        col_letter = get_column_letter(col[0].column)
        for celda in col:
            if celda.value:
                max_len = max(max_len, len(str(celda.value)))
        ws.column_dimensions[col_letter].width = min(max_len + 3, 40)
\`\`\`

### Generar un reporte desde una lista de diccionarios

\`\`\`python
def generar_reporte(datos, titulo, nombre_archivo):
    """Genera un reporte Excel profesional."""
    wb = openpyxl.Workbook()
    ws = wb.active

    # Título
    ws["A1"] = titulo
    ws["A1"].font = Font(bold=True, size=14, color="1F4E79")
    ws.merge_cells(f"A1:{get_column_letter(len(datos[0]))}1")
    ws["A1"].alignment = Alignment(horizontal="center")
    ws.append([])

    # Encabezados
    encabezados = list(datos[0].keys())
    ws.append(encabezados)
    for celda in ws[ws.max_row]:
        celda.font = Font(bold=True, color="FFFFFF")
        celda.fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")

    # Datos
    for fila in datos:
        ws.append(list(fila.values()))

    # Totales
    ws.append([])
    ws.freeze_panes = "A3"
    auto_ajustar_columnas(ws)
    wb.save(nombre_archivo)
    return nombre_archivo
\`\`\`
`,
    codeExample: `import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter
from datetime import date

def auto_ajustar(ws):
    for col in ws.columns:
        max_len = 0
        letra = get_column_letter(col[0].column)
        for celda in col:
            if celda.value:
                max_len = max(max_len, len(str(celda.value)))
        ws.column_dimensions[letra].width = min(max_len + 3, 35)

# Datos del reporte
ventas_mensuales = [
    {"Vendedor": "Ana García", "Región": "Norte", "Ventas": 45000, "Meta": 40000},
    {"Vendedor": "Carlos López", "Región": "Sur", "Ventas": 32000, "Meta": 35000},
    {"Vendedor": "María Torres", "Región": "Centro", "Ventas": 58000, "Meta": 50000},
    {"Vendedor": "Luis Pérez", "Región": "Este", "Ventas": 41000, "Meta": 40000},
    {"Vendedor": "Sofia Ruiz", "Región": "Oeste", "Ventas": 37000, "Meta": 38000},
]

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Reporte Ventas"

# === TÍTULO ===
titulo = f"REPORTE DE VENTAS - {date.today().strftime('%B %Y').upper()}"
ws["A1"] = titulo
ws["A1"].font = Font(bold=True, size=14, color="FFFFFF")
ws["A1"].fill = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
ws["A1"].alignment = Alignment(horizontal="center", vertical="center")
ws.row_dimensions[1].height = 30
ws.merge_cells("A1:E1")

ws.append([])  # Separador

# === ENCABEZADOS ===
encabezados = list(ventas_mensuales[0].keys()) + ["% Cumplimiento"]
ws.append(encabezados)
for celda in ws[3]:
    celda.font = Font(bold=True, color="FFFFFF", size=11)
    celda.fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")
    celda.alignment = Alignment(horizontal="center")

# === DATOS ===
for i, venta in enumerate(ventas_mensuales):
    cumplimiento = venta["Ventas"] / venta["Meta"]
    fila = list(venta.values()) + [cumplimiento]
    ws.append(fila)

    fila_num = ws.max_row
    ws.cell(row=fila_num, column=3).number_format = "#,##0"
    ws.cell(row=fila_num, column=4).number_format = "#,##0"
    ws.cell(row=fila_num, column=5).number_format = "0.0%"

    color = "E2EFDA" if cumplimiento >= 1 else "FCE4D6"
    for col in range(1, 6):
        ws.cell(row=fila_num, column=col).fill = PatternFill(
            start_color=color, end_color=color, fill_type="solid"
        )

# === TOTALES ===
ws.append([])
total_row = ws.max_row + 1
ws.cell(row=total_row, column=1, value="TOTAL GENERAL")
ws.cell(row=total_row, column=3, value=sum(v["Ventas"] for v in ventas_mensuales))
ws.cell(row=total_row, column=4, value=sum(v["Meta"] for v in ventas_mensuales))
for col in range(1, 5):
    c = ws.cell(row=total_row, column=col)
    c.font = Font(bold=True)
    c.fill = PatternFill(start_color="BDD7EE", end_color="BDD7EE", fill_type="solid")
ws.cell(row=total_row, column=3).number_format = "#,##0"
ws.cell(row=total_row, column=4).number_format = "#,##0"

ws.freeze_panes = "A4"
auto_ajustar(ws)

nombre = f"reporte_ventas_{date.today().strftime('%Y%m%d')}.xlsx"
wb.save(nombre)
print(f"Reporte generado: {nombre}")
`,
    keyPoints: [
      'Un reporte profesional tiene título, encabezados estilizados, datos y fila de totales',
      'merge_cells() combina celdas para crear títulos que abarcan varias columnas',
      'Los colores condicionales (verde/rojo) comunican el estado de los datos visualmente',
      'Encapsular la lógica en funciones (como auto_ajustar) hace el código reutilizable',
      'freeze_panes en la fila de encabezados facilita la navegación en reportes largos',
      'Agregar la fecha al nombre del archivo permite versionar los reportes automáticamente',
    ],
    exercise: {
      description: 'Crea una función llamada generar_reporte_inventario(productos, nombre_archivo) que reciba una lista de dicts con campos: nombre, categoria, precio, stock. La función debe generar un Excel con: título centrado, encabezados azules, datos formateados (precio con #,##0.00), una fila final con el valor total del inventario (precio * stock), y columnas auto-ajustadas.',
      hint: 'Para el valor total del inventario en cada fila, agrega un campo calculado: valor = precio * stock. Para la fila de resumen, suma todos esos valores. Usa merge_cells("A1:E1") para el título.',
    },
    quiz: [
      {
        question: '¿Qué hace merge_cells("A1:E1") en una hoja de Excel?',
        options: [
          'Copia el contenido de A1 a todas las celdas hasta E1',
          'Combina las celdas A1 hasta E1 en una sola celda',
          'Aplica el mismo formato de A1 a las celdas B1 a E1',
          'Bloquea la edición de las celdas A1 a E1',
        ],
        correctAnswer: 'Combina las celdas A1 hasta E1 en una sola celda',
        correctFeedback: '¡Correcto! merge_cells() combina un rango de celdas en una sola. El contenido de A1 se expande visualmente sobre todas las celdas combinadas.',
        incorrectFeedback: 'merge_cells() combina el rango indicado en una sola celda. Se usa para crear títulos que abarcan múltiples columnas. El valor debe estar en la celda superior izquierda del rango.',
      },
      {
        question: '¿Cuál es la ventaja de encapsular la lógica de auto-ajuste en una función?',
        options: [
          'Python ejecuta las funciones más rápido que el código inline',
          'Permite reutilizar el mismo código en múltiples reportes sin repetirlo',
          'Las funciones tienen acceso a más métodos de openpyxl',
          'Solo funciona si está en una función',
        ],
        correctAnswer: 'Permite reutilizar el mismo código en múltiples reportes sin repetirlo',
        correctFeedback: '¡Correcto! Encapsular en funciones aplica el principio DRY (Don\'t Repeat Yourself). La función auto_ajustar(ws) puede usarse en cualquier hoja sin duplicar código.',
        incorrectFeedback: 'El beneficio principal es la reutilización. Una función auto_ajustar(ws) puede aplicarse a cualquier hoja en cualquier reporte, evitando duplicar código.',
      },
      {
        question: '¿Cómo se incluye la fecha actual en el nombre de un archivo generado?',
        options: [
          'nombre = f"reporte_{today()}.xlsx"',
          'from datetime import date; nombre = f"reporte_{date.today().strftime(\'%Y%m%d\')}.xlsx"',
          'nombre = "reporte_" + datetime.now() + ".xlsx"',
          'nombre = f"reporte_{time.date()}.xlsx"',
        ],
        correctAnswer: 'from datetime import date; nombre = f"reporte_{date.today().strftime(\'%Y%m%d\')}.xlsx"',
        correctFeedback: '¡Correcto! date.today() obtiene la fecha actual y strftime(\'%Y%m%d\') la formatea como "20260115". Esto permite versionar los reportes automáticamente.',
        incorrectFeedback: 'Se usa datetime.date.today().strftime("%Y%m%d") para obtener la fecha como texto. Concatenar directamente un objeto date a una cadena genera un TypeError.',
      },
      {
        question: 'Para hacer un reporte más legible, ¿qué técnica permite distinguir visualmente el cumplimiento de metas?',
        options: [
          'Agregar comentarios en las celdas',
          'Aplicar color de fondo verde si se cumplió la meta y rojo si no',
          'Poner los valores en orden descendente',
          'Usar una fuente más grande en las filas importantes',
        ],
        correctAnswer: 'Aplicar color de fondo verde si se cumplió la meta y rojo si no',
        correctFeedback: '¡Correcto! El formato condicional visual (verde/rojo) comunica el estado de los datos a primera vista. Es una práctica común en reportes de negocio.',
        incorrectFeedback: 'El formato condicional con colores (verde = cumplió, rojo = no cumplió) es la técnica estándar. Se implementa con PatternFill usando diferentes colores según una condición.',
      },
      {
        question: '¿Cuál es el propósito de ws.row_dimensions[1].height = 30?',
        options: [
          'Establece el ancho de la columna 1',
          'Limita la primera fila a 30 caracteres',
          'Ajusta la altura de la primera fila a 30 puntos',
          'Congela las primeras 30 filas',
        ],
        correctAnswer: 'Ajusta la altura de la primera fila a 30 puntos',
        correctFeedback: '¡Correcto! row_dimensions permite ajustar la altura de filas específicas. Es útil para hacer las filas de título más altas y visibles.',
        incorrectFeedback: 'row_dimensions[n].height ajusta la altura de la fila n en puntos. Es la contraparte de column_dimensions[letra].width para columnas.',
      },
      {
        question: '¿Por qué se agrega la fecha al nombre del archivo del reporte?',
        options: [
          'Es un requisito de openpyxl para guardar archivos',
          'Para versionar los reportes y distinguirlos de otros generados en días distintos',
          'Excel no abre archivos sin fecha en el nombre',
          'Para que el sistema operativo los ordene automáticamente',
        ],
        correctAnswer: 'Para versionar los reportes y distinguirlos de otros generados en días distintos',
        correctFeedback: '¡Correcto! Incluir la fecha en el nombre (reporte_20260115.xlsx) permite tener un historial de reportes sin sobreescribir los anteriores.',
        incorrectFeedback: 'La fecha en el nombre es una buena práctica para versionar. Permite tener "reporte_20260115.xlsx", "reporte_20260122.xlsx", etc., sin perder reportes anteriores.',
      },
    ],
  },
  {
    slug: 'reporte-ventas-excel',
    title: 'Mini proyecto: reporte de ventas',
    module: 'Manejo de archivos Excel',
    moduleNumber: 25,
    order: 135,
    description: 'Crea un reporte de ventas en Excel con totales, formato y datos organizados.',
    explanation: `## Mini proyecto: Reporte de ventas en Excel

En este proyecto integrarás todo lo aprendido: crear un workbook, escribir datos, aplicar estilos y generar un reporte profesional de ventas.

### Objetivo

Dado un conjunto de datos de ventas (productos, cantidades, precios), generar un archivo Excel con:
- Título del reporte con fecha
- Encabezados estilizados y en negrita con fondo de color
- Datos de ventas con formato de número
- Fila de totales al final
- Columnas auto-ajustadas
- Nombre de archivo con la fecha de hoy

### Datos de entrada

\`\`\`python
ventas = [
    {"producto": "Laptop Pro 15", "cantidad": 3, "precio": 22500},
    {"producto": "Mouse Inalámbrico", "cantidad": 15, "precio": 450},
    {"producto": "Teclado Mecánico", "cantidad": 8, "precio": 1200},
    {"producto": "Monitor 4K", "cantidad": 2, "precio": 12000},
    {"producto": "Webcam HD", "cantidad": 10, "precio": 800},
    {"producto": "Hub USB-C", "cantidad": 12, "precio": 650},
]
\`\`\`

### Estructura esperada del archivo

| Fila | Contenido |
|------|-----------|
| 1 | REPORTE DE VENTAS - DD/MM/YYYY (título centrado) |
| 2 | (vacía) |
| 3 | Producto | Cantidad | Precio Unit. | Total | (encabezados) |
| 4-9 | Datos de cada producto |
| 10 | (vacía) |
| 11 | TOTAL | - | - | suma total |

### Pasos del proyecto

1. Crear el workbook y la hoja
2. Agregar el título con la fecha actual
3. Dejar una fila vacía
4. Agregar encabezados con estilo
5. Iterar sobre los datos y escribir cada fila
6. Calcular el total de cada venta (cantidad × precio)
7. Agregar fila de totales
8. Aplicar formatos de número
9. Auto-ajustar columnas
10. Congelar encabezados
11. Guardar con fecha en el nombre

### Buenas prácticas para proyectos Excel

\`\`\`python
# 1. Usar constantes para colores
COLOR_TITULO = "1F4E79"
COLOR_HEADER = "2E75B6"
COLOR_TOTAL = "BDD7EE"
COLOR_IMPAR = "DEEAF1"

# 2. Función reutilizable para estilos
def estilo_encabezado(celda, color_fondo=COLOR_HEADER):
    celda.font = Font(bold=True, color="FFFFFF")
    celda.fill = PatternFill(start_color=color_fondo, end_color=color_fondo, fill_type="solid")
    celda.alignment = Alignment(horizontal="center")

# 3. Separar la generación de datos del formato visual
\`\`\`
`,
    codeExample: `import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter
from datetime import date

# =====================
# DATOS DE VENTAS
# =====================
ventas = [
    {"producto": "Laptop Pro 15", "cantidad": 3, "precio": 22500},
    {"producto": "Mouse Inalámbrico", "cantidad": 15, "precio": 450},
    {"producto": "Teclado Mecánico", "cantidad": 8, "precio": 1200},
    {"producto": "Monitor 4K", "cantidad": 2, "precio": 12000},
    {"producto": "Webcam HD", "cantidad": 10, "precio": 800},
    {"producto": "Hub USB-C", "cantidad": 12, "precio": 650},
]

# =====================
# CONSTANTES DE ESTILO
# =====================
COLOR_TITULO = "1F4E79"
COLOR_HEADER = "2E75B6"
COLOR_TOTAL = "1F4E79"
COLOR_FILA_PAR = "DEEAF1"

def aplicar_encabezado(celda, color=COLOR_HEADER):
    celda.font = Font(bold=True, color="FFFFFF", size=11)
    celda.fill = PatternFill(start_color=color, end_color=color, fill_type="solid")
    celda.alignment = Alignment(horizontal="center", vertical="center")

def auto_ajustar(ws):
    for col in ws.columns:
        max_len = 0
        letra = get_column_letter(col[0].column)
        for celda in col:
            if celda.value:
                max_len = max(max_len, len(str(celda.value)))
        ws.column_dimensions[letra].width = min(max_len + 4, 35)

# =====================
# CREAR EL REPORTE
# =====================
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Ventas"

hoy = date.today()

# --- TÍTULO ---
ws["A1"] = f"REPORTE DE VENTAS - {hoy.strftime('%d/%m/%Y')}"
ws["A1"].font = Font(bold=True, size=14, color="FFFFFF")
ws["A1"].fill = PatternFill(start_color=COLOR_TITULO, end_color=COLOR_TITULO, fill_type="solid")
ws["A1"].alignment = Alignment(horizontal="center", vertical="center")
ws.row_dimensions[1].height = 32
ws.merge_cells("A1:D1")

ws.append([])  # Fila 2 vacía

# --- ENCABEZADOS ---
ws.append(["Producto", "Cantidad", "Precio Unitario", "Total"])
for celda in ws[3]:
    aplicar_encabezado(celda)
ws.row_dimensions[3].height = 22

# --- DATOS ---
total_general = 0
for i, venta in enumerate(ventas):
    total_linea = venta["cantidad"] * venta["precio"]
    total_general += total_linea
    ws.append([venta["producto"], venta["cantidad"], venta["precio"], total_linea])

    fila_num = ws.max_row
    ws.cell(row=fila_num, column=3).number_format = "#,##0.00"
    ws.cell(row=fila_num, column=4).number_format = "#,##0.00"

    if i % 2 == 0:
        for col in range(1, 5):
            ws.cell(row=fila_num, column=col).fill = PatternFill(
                start_color=COLOR_FILA_PAR, end_color=COLOR_FILA_PAR, fill_type="solid"
            )

ws.append([])  # Separador antes de totales

# --- FILA DE TOTALES ---
total_row = ws.max_row + 1
ws.cell(row=total_row, column=1, value="TOTAL GENERAL")
ws.cell(row=total_row, column=4, value=total_general)
ws.cell(row=total_row, column=4).number_format = "#,##0.00"

for col in range(1, 5):
    c = ws.cell(row=total_row, column=col)
    aplicar_encabezado(c, COLOR_TOTAL)

# --- AJUSTES FINALES ---
ws.freeze_panes = "A4"
auto_ajustar(ws)

# Nombre con fecha
nombre_archivo = f"reporte_ventas_{hoy.strftime('%Y%m%d')}.xlsx"
wb.save(nombre_archivo)

print(f"Reporte generado exitosamente: {nombre_archivo}")
print(f"Productos incluidos: {len(ventas)}")
print(f"Total de ventas: \${total_general:,.2f}")
`,
    keyPoints: [
      'Definir constantes de color al inicio hace el código más legible y fácil de mantener',
      'Crear funciones auxiliares (aplicar_encabezado, auto_ajustar) evita duplicar código',
      'El total de cada línea se calcula durante la escritura: cantidad × precio',
      'Alternar colores en filas pares/impares mejora la legibilidad del reporte',
      'El nombre del archivo incluye la fecha en formato YYYYMMDD para versionar automáticamente',
      'freeze_panes en la fila de datos facilita la navegación en reportes con muchas filas',
    ],
    exercise: {
      description: 'Extiende el reporte de ventas para incluir: una columna adicional "Descuento" (10% si el total de línea supera $5,000, 0% si no), recalcular el "Total Final" aplicando el descuento, y agregar al final del reporte una celda que muestre el ahorro total por descuentos. Guarda el archivo como "reporte_con_descuentos.xlsx".',
      hint: 'Para el descuento: descuento = 0.10 if total_linea > 5000 else 0.0. El total final sería total_linea * (1 - descuento). Suma todos los descuentos en una variable y agrégala al final. Formatea el descuento con "0%" para mostrarlo como porcentaje.',
    },
    quiz: [
      {
        question: '¿Por qué es buena práctica definir colores como constantes al inicio del script?',
        options: [
          'Python requiere que los colores estén definidos antes de importar openpyxl',
          'Facilita cambiar el esquema de colores en un solo lugar sin editar todo el código',
          'Las constantes se ejecutan más rápido que los strings literales',
          'openpyxl solo acepta variables, no strings directos como colores',
        ],
        correctAnswer: 'Facilita cambiar el esquema de colores en un solo lugar sin editar todo el código',
        correctFeedback: '¡Correcto! Si el color está en una constante COLOR_HEADER = "2E75B6", cambiar el color del encabezado requiere modificar solo esa línea, no buscar el string en todo el código.',
        incorrectFeedback: 'Las constantes aplican el principio DRY. Si el color está en COLOR_HEADER, un cambio de color solo requiere modificar esa constante, en lugar de buscar y reemplazar en todo el código.',
      },
      {
        question: '¿Cómo se calcula el total de cada línea de venta?',
        options: [
          'total_linea = venta["cantidad"] + venta["precio"]',
          'total_linea = venta["precio"] / venta["cantidad"]',
          'total_linea = venta["cantidad"] * venta["precio"]',
          'total_linea = max(venta["cantidad"], venta["precio"])',
        ],
        correctAnswer: 'total_linea = venta["cantidad"] * venta["precio"]',
        correctFeedback: '¡Correcto! El total de una línea de venta es siempre cantidad × precio. Por ejemplo: 3 laptops × $22,500 = $67,500.',
        incorrectFeedback: 'El total de una línea se calcula multiplicando: cantidad × precio. Suma daría el valor incorrecto, división tampoco tiene sentido en este contexto.',
      },
      {
        question: 'En el proyecto, ¿qué formato se usa para el nombre del archivo?',
        options: [
          '"reporte.xlsx"',
          '"reporte_ventas.xlsx"',
          'f"reporte_ventas_{hoy.strftime(\'%Y%m%d\')}.xlsx"',
          'f"reporte_{hoy}.xlsx"',
        ],
        correctAnswer: 'f"reporte_ventas_{hoy.strftime(\'%Y%m%d\')}.xlsx"',
        correctFeedback: '¡Correcto! Se usa strftime(\'%Y%m%d\') para dar formato a la fecha. El resultado sería algo como "reporte_ventas_20260115.xlsx".',
        incorrectFeedback: 'Se usa f"reporte_ventas_{hoy.strftime(\'%Y%m%d\')}.xlsx". strftime(\'%Y%m%d\') formatea la fecha como "20260115". Concatenar el objeto date directamente daría formato diferente.',
      },
      {
        question: '¿Qué técnica de formato visual se usa para distinguir filas pares de impares?',
        options: [
          'Cambiar el tamaño de la fuente en filas pares',
          'Aplicar PatternFill con diferente color según el índice sea par o impar',
          'Agregar un borde extra en las filas impares',
          'Usar negrita en filas pares',
        ],
        correctAnswer: 'Aplicar PatternFill con diferente color según el índice sea par o impar',
        correctFeedback: '¡Correcto! Se verifica `if i % 2 == 0` para aplicar un color de fondo suave (DEEAF1) en filas alternas, creando el efecto de "cebra" que mejora la lectura.',
        incorrectFeedback: 'Se usa PatternFill con la condición `i % 2 == 0` para alternar colores. Las filas pares reciben un color de fondo suave, creando el patrón "cebra" común en tablas.',
      },
      {
        question: '¿Cuál es el propósito de la fila vacía entre los datos y la fila de totales?',
        options: [
          'Es un requisito de openpyxl para agregar totales',
          'Separar visualmente los datos del resumen para facilitar la lectura',
          'Evitar que Excel sume automáticamente las columnas',
          'Reservar espacio para agregar más datos después',
        ],
        correctAnswer: 'Separar visualmente los datos del resumen para facilitar la lectura',
        correctFeedback: '¡Correcto! La fila vacía crea una separación visual que indica claramente dónde terminan los datos y dónde empieza el resumen/totales.',
        incorrectFeedback: 'La fila vacía es solo por estética y claridad visual. Separa los datos del resumen, haciendo el reporte más fácil de leer. No es un requisito técnico.',
      },
      {
        question: '¿Por qué se usa freeze_panes = "A4" en este reporte?',
        options: [
          'Porque el reporte tiene 4 columnas',
          'Para que los encabezados de la fila 3 permanezcan visibles al hacer scroll',
          'Para proteger las primeras 4 filas de edición',
          'Para centrar los datos a partir de la fila 4',
        ],
        correctAnswer: 'Para que los encabezados de la fila 3 permanezcan visibles al hacer scroll',
        correctFeedback: '¡Correcto! "A4" congela todo lo que está encima de la fila 4 (filas 1, 2 y 3). Los encabezados en fila 3 siempre serán visibles aunque se desplace hacia abajo.',
        incorrectFeedback: 'freeze_panes = "A4" congela las filas 1, 2 y 3 (todo lo que está encima de la fila 4). Así los encabezados en la fila 3 siempre son visibles al desplazarse verticalmente.',
      },
      {
        question: 'Si total_general = 123456.78, ¿qué muestra print(f"Total: ${total_general:,.2f}")?',
        options: [
          'Total: 123456.78',
          'Total: $123,456.78',
          'Total: 123.456,78',
          'Total: $123456',
        ],
        correctAnswer: 'Total: $123,456.78',
        correctFeedback: '¡Correcto! El formato :,.2f agrega separadores de miles (,) y dos decimales (.78). Combinado con el $ antes, muestra el valor como moneda.',
        incorrectFeedback: 'El formato :,.2f en f-strings de Python agrega separadores de miles y dos decimales. Con el $ literal antes, el resultado es "$123,456.78".',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module25: Module = {
  number: 25,
  title: 'Manejo de archivos Excel',
  level: 'practico',
  lessons: lessonsModule25,
}
