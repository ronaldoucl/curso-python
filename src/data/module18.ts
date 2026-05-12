import type { Lesson } from '@/types'

export const lessonsModule18: Lesson[] = [
  {
    slug: 'repaso-csv-json',
    title: 'Repaso de CSV y JSON',
    module: 'Trabajar con archivos CSV y JSON',
    moduleNumber: 18,
    order: 84,
    description: 'Repasa qué son los archivos CSV y JSON y en qué situaciones se usa cada uno.',
    explanation: `**CSV** (Comma-Separated Values) y **JSON** (JavaScript Object Notation) son los dos formatos de intercambio de datos más comunes. Entender cuándo usar cada uno es esencial.

**CSV — hojas de cálculo en texto plano:**
\`\`\`
nombre,edad,ciudad
Ana,25,México
Luis,30,Bogotá
\`\`\`
- Filas y columnas (tabla)
- Ideal para datos tabulares: reportes, exportaciones de Excel, bases de datos
- Simple pero sin soporte nativo para anidamiento o tipos de datos
- Delimitador puede ser coma, punto y coma, tab, etc.

**JSON — objetos y listas de datos:**
\`\`\`json
{
  "nombre": "Ana",
  "edad": 25,
  "hobbies": ["lectura", "Python"],
  "direccion": {
    "ciudad": "México",
    "pais": "MX"
  }
}
\`\`\`
- Datos anidados y jerárquicos
- Soporta tipos: string, número, booleano, null, array, objeto
- Ideal para APIs, configuraciones, datos con estructura variable
- No es ideal para miles de filas de datos homogéneos

**¿Cuándo usar cada uno?**

| Situación | Formato |
|-----------|---------|
| Exportar tabla de datos | CSV |
| Respuesta de API | JSON |
| Configuración de la app | JSON |
| Reporte de ventas mensual | CSV |
| Datos con estructura anidada | JSON |
| Compatibilidad con Excel | CSV |`,
    codeExample: `# Ejemplo de datos en CSV (texto)
csv_texto = """nombre,edad,ciudad,salario
Ana,25,México,45000
Luis,30,Bogotá,38000
Marta,28,Madrid,52000"""

# El mismo dato en JSON (texto)
json_texto = """[
  {"nombre": "Ana",   "edad": 25, "ciudad": "México", "salario": 45000},
  {"nombre": "Luis",  "edad": 30, "ciudad": "Bogotá",  "salario": 38000},
  {"nombre": "Marta", "edad": 28, "ciudad": "Madrid",  "salario": 52000}
]"""

# Ejemplo de JSON anidado (imposible en CSV plano)
json_anidado = """
{
  "empresa": "TechCorp",
  "empleados": [
    {
      "nombre": "Ana",
      "departamento": {
        "nombre": "IT",
        "presupuesto": 500000
      },
      "habilidades": ["Python", "SQL", "Docker"]
    }
  ]
}
"""

# Comparación de ventajas
print("CSV:")
print("  ✓ Simple, legible en cualquier hoja de cálculo")
print("  ✓ Compacto para datos tabulares masivos")
print("  ✗ No soporta anidamiento")
print("  ✗ Todos los valores son strings por defecto")
print()
print("JSON:")
print("  ✓ Soporta tipos nativos (int, bool, null, lista, dict)")
print("  ✓ Permite datos anidados")
print("  ✓ Estándar para APIs web")
print("  ✗ Más verboso que CSV para datos tabulares")`,
    keyPoints: [
      'CSV: datos tabulares simples. JSON: datos anidados o con tipos complejos',
      'CSV es ideal para exportar/importar con Excel y herramientas de análisis de datos',
      'JSON es el estándar de facto para APIs REST y archivos de configuración',
      'En CSV todos los valores son texto por defecto; en JSON hay tipos nativos (int, bool, null)',
      'Para datos masivos y homogéneos (millones de filas), CSV es más eficiente en espacio',
      'Python tiene módulos estándar para ambos: `csv` y `json`',
    ],
    exercise: {
      description: 'Tienes datos de usuarios: nombre (string), edad (int), activo (bool), y una lista de hobbies. Decide si guardarlos en CSV o JSON y justifica tu elección. Luego escribe cómo se vería esa estructura en el formato elegido.',
      hint: 'La lista de hobbies y el campo booleano son indicadores de qué formato elegir.',
    },
    quiz: [
      {
        question: '¿Cuál de estos datos es mejor representar en JSON que en CSV?',
        options: [
          'Una lista de 10,000 ventas con fecha, producto y monto',
          'Un objeto con datos anidados: usuario con dirección que tiene ciudad, calle y colonia',
          'Un reporte mensual de empleados con nombre, puesto y salario',
          'Los resultados de un examen con nombre y calificación',
        ],
        correctAnswer: 'Un objeto con datos anidados: usuario con dirección que tiene ciudad, calle y colonia',
        correctFeedback: 'Correcto. Los datos anidados son la fortaleza de JSON. En CSV no puedes representar fácilmente una estructura como `usuario.dirección.ciudad`.',
        incorrectFeedback: 'JSON brilla con datos anidados o jerárquicos. Las ventas, reportes y calificaciones son datos tabulares planos → CSV. El usuario con dirección anidada no cabe limpiamente en CSV.',
      },
      {
        question: '¿Por qué CSV es preferible para exportar datos a Excel?',
        options: [
          'Excel solo puede leer CSV',
          'CSV es el formato nativo de Excel y cualquier hoja de cálculo puede abrirlo directamente',
          'JSON no puede abrirse en ningún programa',
          'CSV almacena fórmulas de Excel',
        ],
        correctAnswer: 'CSV es el formato nativo de Excel y cualquier hoja de cálculo puede abrirlo directamente',
        correctFeedback: 'Correcto. CSV es el formato universal para hojas de cálculo. Excel, Google Sheets, LibreOffice Calc, todos lo leen sin conversión.',
        incorrectFeedback: 'CSV es entendido directamente por todas las herramientas de hojas de cálculo (Excel, Google Sheets, etc.) sin necesidad de plugins o conversión. JSON no.',
      },
      {
        question: '¿Qué tipo de dato NO soporta CSV de forma nativa?',
        options: [
          'Strings',
          'Números enteros',
          'Listas anidadas y objetos',
          'Nombres de columnas',
        ],
        correctAnswer: 'Listas anidadas y objetos',
        correctFeedback: 'Correcto. En CSV todo es una celda de texto. No hay forma de representar nativamente `["rojo", "azul"]` o `{"calle": "Reforma"}` en una celda CSV.',
        incorrectFeedback: 'CSV es un formato plano: filas y columnas de texto. No puede representar listas o diccionarios anidados. Todos los valores son tratados como strings.',
      },
      {
        question: '¿Cuál es el módulo estándar de Python para trabajar con archivos JSON?',
        options: ['jsonlib', 'json', 'data', 'serialize'],
        correctAnswer: 'json',
        correctFeedback: 'Correcto. El módulo `json` es parte de la biblioteca estándar. No necesitas instalarlo.',
        incorrectFeedback: 'El módulo `json` viene incluido en Python. Lo importas con `import json` y provee `json.loads()`, `json.dumps()`, `json.load()`, `json.dump()`.',
      },
      {
        question: '¿Cuál es el módulo estándar de Python para trabajar con archivos CSV?',
        options: ['csvlib', 'comma', 'csv', 'table'],
        correctAnswer: 'csv',
        correctFeedback: 'Correcto. El módulo `csv` de la biblioteca estándar maneja correctamente los casos especiales como comas dentro de campos y campos con comillas.',
        incorrectFeedback: 'El módulo `csv` es parte de la biblioteca estándar de Python. Maneja casos especiales que hacer `texto.split(",")` no maneja bien: comas dentro de campos, campos entre comillas, etc.',
      },
      {
        question: '¿Qué ventaja tiene JSON sobre CSV para respuestas de API?',
        options: [
          'JSON es más rápido de transmitir',
          'JSON soporta tipos de datos nativos (int, bool, null, listas, objetos)',
          'CSV no puede transmitirse por internet',
          'JSON es más seguro',
        ],
        correctAnswer: 'JSON soporta tipos de datos nativos (int, bool, null, listas, objetos)',
        correctFeedback: 'Correcto. Una API que devuelve `{"activo": true, "puntos": 42}` en JSON no requiere conversión de tipos. En CSV, `activo` sería el string "true" y necesitarías convertirlo.',
        incorrectFeedback: 'En JSON, `{"activo": true, "puntos": 42}` tiene `activo` como booleano real y `puntos` como entero real. En CSV serían el string "true" y el string "42" — habría que convertirlos manualmente.',
      },
    ],
  },

  {
    slug: 'leer-csv',
    title: 'Leer archivos CSV con csv',
    module: 'Trabajar con archivos CSV y JSON',
    moduleNumber: 18,
    order: 85,
    description: 'Aprende a leer archivos CSV usando el módulo csv de Python.',
    explanation: `El módulo \`csv\` maneja correctamente los casos especiales del formato: comas dentro de campos, campos entre comillas, caracteres de escape.

**¿Por qué no usar \`split(",")\`?**
\`\`\`
# Este CSV tiene una coma DENTRO de un campo:
"García, Ana",25,México
# split(",") lo rompería en 3 partes incorrectas
\`\`\`

**Leer con \`csv.reader\`:**
\`\`\`python
import csv

with open("datos.csv", encoding="utf-8") as f:
    lector = csv.reader(f)
    for fila in lector:
        print(fila)   # lista de strings por fila
\`\`\`

**Leer con \`csv.DictReader\` (recomendado):**
Convierte cada fila en un diccionario usando la primera fila como nombres de campos:
\`\`\`python
with open("datos.csv", encoding="utf-8") as f:
    lector = csv.DictReader(f)
    for fila in lector:
        print(fila["nombre"], fila["edad"])
\`\`\`

**Parámetros importantes:**
- \`delimiter\`: separador (por defecto \`,\`; puede ser \`;\`, \`\\t\`, etc.)
- \`encoding="utf-8"\`: siempre especifica el encoding
- \`newline=""\`: recomendado al abrir CSVs con el módulo csv

**Convertir tipos:**
CSV carga todo como string. Convierte explícitamente:
\`\`\`python
edad = int(fila["edad"])
precio = float(fila["precio"])
\`\`\``,
    codeExample: `import csv
import io

# Simular un archivo CSV en memoria (para el ejemplo)
contenido_csv = """nombre,edad,ciudad,salario
Ana García,25,México,45000
Luis López,30,Bogotá,38000
"Marta, M.",28,Madrid,52000
"""

# ── csv.reader: acceso por índice ─────────────────────────────
archivo = io.StringIO(contenido_csv)
lector = csv.reader(archivo)

encabezados = next(lector)   # primera fila = encabezados
print("Columnas:", encabezados)

for fila in lector:
    print(f"  Nombre: {fila[0]}, Edad: {fila[1]}")

# ── csv.DictReader: acceso por nombre de columna ──────────────
archivo2 = io.StringIO(contenido_csv)
lector_dict = csv.DictReader(archivo2)

empleados = []
for fila in lector_dict:
    empleados.append({
        "nombre": fila["nombre"],
        "edad": int(fila["edad"]),          # convertir a int
        "ciudad": fila["ciudad"],
        "salario": float(fila["salario"])   # convertir a float
    })

print("\\nEmpleados cargados:")
for emp in empleados:
    print(f"  {emp['nombre']} ({emp['edad']} años) — \${emp['salario']:,.0f}")

# ── Con archivo real ──────────────────────────────────────────
def leer_csv(ruta, delimiter=","):
    """Lee un CSV y devuelve lista de dicts con tipos convertidos básicamente."""
    try:
        with open(ruta, encoding="utf-8", newline="") as f:
            return list(csv.DictReader(f, delimiter=delimiter))
    except FileNotFoundError:
        print(f"No se encontró: {ruta}")
        return []

# ── CSV con punto y coma (común en Excel europeo) ────────────
csv_europeo = "nombre;precio;cantidad\\nLaptop;1500;3\\nMouse;25;10"
archivo3 = io.StringIO(csv_europeo)
lector3 = csv.DictReader(archivo3, delimiter=";")
for producto in lector3:
    print(f"  {producto['nombre']}: \${producto['precio']} × {producto['cantidad']}")`,
    keyPoints: [
      'Usa siempre el módulo `csv` en lugar de `split(",")` — maneja correctamente los casos especiales',
      '`csv.DictReader` convierte cada fila a un diccionario usando la primera fila como encabezados',
      'Especifica siempre `encoding="utf-8"` al abrir archivos para evitar problemas con acentos',
      'CSV carga todo como strings — convierte explícitamente: `int()`, `float()`',
      'El parámetro `delimiter` permite leer CSVs con otros separadores (`;`, `\\t`)',
      'En Windows, agrega `newline=""` al abrir con `open()` para evitar líneas dobles',
    ],
    exercise: {
      description: 'Escribe una función `cargar_productos(ruta)` que lea un CSV con columnas `nombre,precio,stock` y devuelva una lista de diccionarios con `precio` como `float` y `stock` como `int`. Si el archivo no existe, devuelve `[]`.',
      hint: 'Usa `csv.DictReader` y convierte los tipos al construir el diccionario de cada fila.',
    },
    quiz: [
      {
        question: '¿Por qué es mejor usar el módulo `csv` que hacer `texto.split(",")`?',
        options: [
          'El módulo csv es más rápido',
          'El módulo csv maneja correctamente comas dentro de campos y otros casos especiales',
          'split() no funciona con strings',
          'El módulo csv también puede leer JSON',
        ],
        correctAnswer: 'El módulo csv maneja correctamente comas dentro de campos y otros casos especiales',
        correctFeedback: 'Correcto. Un campo como `"García, Ana"` contiene una coma. `split(",")` lo rompería incorrectamente. El módulo csv entiende las reglas del formato.',
        incorrectFeedback: 'El formato CSV tiene reglas especiales: campos entre comillas que pueden contener comas, caracteres de escape, líneas de fin de línea dentro de campos. El módulo `csv` maneja todo esto. `split(",")` no.',
      },
      {
        question: '¿Qué ventaja tiene `csv.DictReader` sobre `csv.reader`?',
        options: [
          'DictReader es más rápido',
          'DictReader convierte cada fila en un diccionario usando los encabezados como claves',
          'DictReader convierte los tipos automáticamente',
          'DictReader puede leer archivos más grandes',
        ],
        correctAnswer: 'DictReader convierte cada fila en un diccionario usando los encabezados como claves',
        correctFeedback: 'Correcto. Con `DictReader` accedes a `fila["nombre"]` en lugar de `fila[0]`. Hace el código más legible y menos frágil ante cambios de orden de columnas.',
        incorrectFeedback: '`csv.DictReader` usa la primera fila como nombres de columnas y convierte cada fila a un dict. Acceder por nombre (`fila["nombre"]`) es más legible y robusto que por índice (`fila[0]`).',
      },
      {
        question: '¿Qué tipo de datos devuelven las columnas de un CSV leído con el módulo csv?',
        options: ['El tipo apropiado (int, float, bool)', 'Siempre strings', 'Depende del encabezado', 'Bytes'],
        correctAnswer: 'Siempre strings',
        correctFeedback: 'Correcto. CSV no tiene información de tipos. Todo se lee como string. Debes convertir explícitamente: `int(fila["edad"])`, `float(fila["precio"])`.',
        incorrectFeedback: 'CSV es un formato de texto sin información de tipos. Todo valor se lee como string. Debes convertir manualmente: `int()`, `float()`, `bool()`, etc.',
      },
      {
        question: '¿Para qué sirve el parámetro `delimiter` en `csv.reader`?',
        options: [
          'Para especificar el encoding del archivo',
          'Para indicar qué carácter separa los campos (por defecto es la coma)',
          'Para skipear la primera línea',
          'Para limitar el número de filas',
        ],
        correctAnswer: 'Para indicar qué carácter separa los campos (por defecto es la coma)',
        correctFeedback: 'Correcto. Si tu CSV usa punto y coma (común en Europa), usa `delimiter=";"`. Para TSV (tab-separated), usa `delimiter="\\t"`.',
        incorrectFeedback: '`delimiter` define el separador de campos. Los CSVs europeos frecuentemente usan `;` porque la coma es el separador decimal. Los archivos TSV usan `\\t` (tab).',
      },
      {
        question: '¿Por qué se recomienda usar `newline=""` al abrir un CSV con `open()`?',
        options: [
          'Para que el archivo se lea más rápido',
          'Para evitar que Python procese los saltos de línea antes de que el módulo csv los maneje',
          'Para ignorar las líneas vacías',
          'Es opcional, no hay diferencia',
        ],
        correctAnswer: 'Para evitar que Python procese los saltos de línea antes de que el módulo csv los maneje',
        correctFeedback: 'Correcto. En Windows, `open()` sin `newline=""` convierte `\\r\\n` a `\\n`, y luego el módulo csv puede producir filas vacías extra. `newline=""` deja que el módulo csv maneje los finales de línea.',
        incorrectFeedback: 'La documentación oficial de Python recomienda `newline=""` al abrir archivos CSV. Esto evita que `open()` realice su propia conversión de finales de línea, que puede interferir con el módulo `csv`.',
      },
      {
        question: '¿Cómo lees la primera fila de un `csv.reader` como encabezados sin procesar como datos?',
        options: [
          'csv.reader(f, has_header=True)',
          'encabezados = next(lector)',
          'lector.skip_header()',
          'csv.reader(f, skip_first=True)',
        ],
        correctAnswer: 'encabezados = next(lector)',
        correctFeedback: 'Correcto. `next(lector)` extrae la primera fila del iterador. Después, el bucle `for fila in lector` solo itera sobre las filas de datos.',
        incorrectFeedback: '`next(lector)` avanza el iterador una posición, consumiendo la primera fila (encabezados). Las siguientes iteraciones con `for fila in lector` saltarán directamente a los datos.',
      },
    ],
  },

  {
    slug: 'escribir-csv',
    title: 'Escribir archivos CSV',
    module: 'Trabajar con archivos CSV y JSON',
    moduleNumber: 18,
    order: 86,
    description: 'Aprende a guardar datos en archivos CSV desde Python.',
    explanation: `Para escribir archivos CSV, el módulo \`csv\` ofrece \`csv.writer\` y \`csv.DictWriter\`.

**\`csv.writer\` — escribe por filas (listas):**
\`\`\`python
import csv

datos = [["Ana", 25, "México"], ["Luis", 30, "Bogotá"]]

with open("salida.csv", "w", encoding="utf-8", newline="") as f:
    escritor = csv.writer(f)
    escritor.writerow(["nombre", "edad", "ciudad"])   # encabezado
    escritor.writerows(datos)                          # todos los datos
\`\`\`

**\`csv.DictWriter\` — escribe diccionarios:**
\`\`\`python
campos = ["nombre", "edad", "ciudad"]
filas = [
    {"nombre": "Ana", "edad": 25, "ciudad": "México"},
    {"nombre": "Luis", "edad": 30, "ciudad": "Bogotá"},
]

with open("salida.csv", "w", encoding="utf-8", newline="") as f:
    escritor = csv.DictWriter(f, fieldnames=campos)
    escritor.writeheader()     # escribe la fila de encabezados
    escritor.writerows(filas)  # escribe todos los dicts
\`\`\`

**Consideraciones importantes:**
- Abre en modo \`"w"\` para sobreescribir, \`"a"\` para agregar
- Usa \`newline=""\` para evitar líneas vacías extra en Windows
- Los caracteres especiales (comas en campos, comillas) se manejan automáticamente
- Para archivos que Excel abrirá, considera agregar el BOM: \`encoding="utf-8-sig"\``,
    codeExample: `import csv
import io

# ── csv.writer: desde listas ──────────────────────────────────
empleados = [
    ["Ana García",    25, "México", 45000.50],
    ["Luis López",    30, "Bogotá", 38000.00],
    ["Marta, M.",     28, "Madrid", 52000.75],   # nombre con coma
]

output = io.StringIO()
escritor = csv.writer(output)
escritor.writerow(["nombre", "edad", "ciudad", "salario"])
escritor.writerows(empleados)

print("CSV generado:")
print(output.getvalue())

# ── csv.DictWriter: desde diccionarios ───────────────────────
productos = [
    {"codigo": "P001", "nombre": "Laptop", "precio": 1500.00, "stock": 10},
    {"codigo": "P002", "nombre": "Mouse",  "precio": 25.00,   "stock": 50},
    {"codigo": "P003", "nombre": "Monitor","precio": 400.00,  "stock": 8},
]

output2 = io.StringIO()
campos = ["codigo", "nombre", "precio", "stock"]
escritor2 = csv.DictWriter(output2, fieldnames=campos)
escritor2.writeheader()
escritor2.writerows(productos)

print("Productos CSV:")
print(output2.getvalue())

# ── Función genérica para guardar CSV ────────────────────────
def guardar_csv(ruta, datos, campos, delimiter=","):
    """
    Guarda una lista de dicts en un archivo CSV.

    Args:
        ruta: ruta del archivo de salida
        datos: lista de diccionarios
        campos: lista de nombres de columnas (en orden)
        delimiter: separador de campos
    """
    with open(ruta, "w", encoding="utf-8", newline="") as f:
        escritor = csv.DictWriter(f, fieldnames=campos, delimiter=delimiter)
        escritor.writeheader()
        escritor.writerows(datos)
    print(f"Guardado: {ruta} ({len(datos)} filas)")

# Uso:
# guardar_csv("empleados.csv", empleados_dicts, ["nombre", "edad", "salario"])`,
    keyPoints: [
      '`csv.writer.writerow(lista)` escribe una fila desde una lista',
      '`csv.writer.writerows(lista_de_listas)` escribe múltiples filas eficientemente',
      '`csv.DictWriter` es más legible cuando tus datos son diccionarios',
      '`escritor.writeheader()` escribe automáticamente la fila de encabezados en DictWriter',
      'Usa `encoding="utf-8-sig"` para que Excel abra el archivo correctamente con acentos',
      'Modo `"w"` sobreescribe; modo `"a"` agrega filas al final del archivo existente',
    ],
    exercise: {
      description: 'Escribe una función `exportar_reporte(ventas, ruta)` que reciba una lista de dicts con campos `producto`, `cantidad`, `precio_unitario` y guarde el CSV con una columna adicional `total` (cantidad × precio_unitario) calculada al escribir.',
      hint: 'Crea los campos = ["producto", "cantidad", "precio_unitario", "total"]. Al iterar las ventas, añade `"total"` al dict antes de escribirlo.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `writerow()` y `writerows()`?',
        options: [
          'writerow escribe en formato dict; writerows en formato lista',
          'writerow escribe UNA fila; writerows escribe MÚLTIPLES filas de una vez',
          'writerows es solo para DictWriter; writerow para csv.writer',
          'No hay diferencia',
        ],
        correctAnswer: 'writerow escribe UNA fila; writerows escribe MÚLTIPLES filas de una vez',
        correctFeedback: 'Correcto. `writerow(["a", "b"])` escribe una fila. `writerows([["a", "b"], ["c", "d"]])` escribe múltiples filas eficientemente.',
        incorrectFeedback: '`writerow()` escribe una sola fila. `writerows()` recibe un iterable de filas y las escribe todas. Ambos métodos existen tanto en `csv.writer` como en `csv.DictWriter`.',
      },
      {
        question: '¿Para qué sirve `escritor.writeheader()` en `csv.DictWriter`?',
        options: [
          'Valida que los campos sean correctos',
          'Escribe la primera fila del CSV con los nombres de los campos',
          'Configura el encoding del archivo',
          'Abre el archivo para escritura',
        ],
        correctAnswer: 'Escribe la primera fila del CSV con los nombres de los campos',
        correctFeedback: 'Correcto. `writeheader()` usa los `fieldnames` del DictWriter para escribir la primera fila de encabezados.',
        incorrectFeedback: '`writeheader()` escribe automáticamente la fila de encabezados usando los `fieldnames` que pasaste al crear el `DictWriter`. Es un atajo para no tener que escribir los encabezados manualmente.',
      },
      {
        question: '¿Por qué usar `encoding="utf-8-sig"` en lugar de `"utf-8"` para archivos que abrirá Excel?',
        options: [
          'utf-8-sig es más rápido',
          'utf-8-sig agrega un BOM al inicio que Excel necesita para reconocer los acentos correctamente',
          'utf-8 no soporta caracteres del español',
          'Son idénticos, no hay diferencia',
        ],
        correctAnswer: 'utf-8-sig agrega un BOM al inicio que Excel necesita para reconocer los acentos correctamente',
        correctFeedback: 'Correcto. El BOM (Byte Order Mark) en utf-8-sig le dice a Excel que el archivo está en UTF-8, evitando que muestre los acentos como caracteres extraños.',
        incorrectFeedback: 'Excel a veces no detecta correctamente que un CSV está en UTF-8 y muestra los acentos corruptos. `utf-8-sig` agrega un BOM (Byte Order Mark) al inicio del archivo que Excel reconoce como señal de UTF-8.',
      },
      {
        question: '¿Qué modo de apertura de archivo usas para AGREGAR filas sin borrar el contenido existente?',
        options: [
          '"w" (write)',
          '"r" (read)',
          '"a" (append)',
          '"x" (exclusive)',
        ],
        correctAnswer: '"a" (append)',
        correctFeedback: 'Correcto. `"a"` (append) abre el archivo al final: las escrituras se añaden sin borrar el contenido previo.',
        incorrectFeedback: 'Modo `"w"` sobreescribe el archivo desde cero. Modo `"a"` (append) abre el archivo y posiciona el cursor al final, permitiendo agregar nuevas filas sin afectar el contenido existente.',
      },
      {
        question: 'Si tu dict tiene más campos que los `fieldnames` del DictWriter, ¿qué ocurre por defecto?',
        options: [
          'Los campos extra se agregan automáticamente',
          'Se lanza un ValueError',
          'Los campos extra son ignorados silenciosamente',
          'Depende de la versión de Python',
        ],
        correctAnswer: 'Se lanza un ValueError',
        correctFeedback: 'Correcto. Por defecto, `DictWriter` lanza `ValueError` si un dict tiene claves no listadas en `fieldnames`. Puedes cambiar esto con `extrasaction="ignore"`.',
        incorrectFeedback: 'Por defecto (`extrasaction="raise"`), `DictWriter` lanza `ValueError` si el dict tiene campos no declarados en `fieldnames`. Para ignorarlos silenciosamente, usa `csv.DictWriter(f, fieldnames=..., extrasaction="ignore")`.',
      },
    ],
  },

  {
    slug: 'leer-json',
    title: 'Leer archivos JSON',
    module: 'Trabajar con archivos CSV y JSON',
    moduleNumber: 18,
    order: 87,
    description: 'Aprende a cargar datos desde archivos JSON usando el módulo json.',
    explanation: `El módulo \`json\` convierte entre strings JSON y objetos Python. La conversión de tipos es automática.

**Dos funciones principales para leer:**

| Función | Entrada | Uso |
|---------|---------|-----|
| \`json.loads(cadena)\` | String JSON | Parsear texto ya en memoria |
| \`json.load(archivo)\` | Objeto archivo | Leer directamente desde un archivo |

**Tipos JSON → Python:**

| JSON | Python |
|------|--------|
| string | str |
| number | int o float |
| true/false | True/False |
| null | None |
| array | list |
| object | dict |

**Ejemplo:**
\`\`\`python
import json

# Desde string
texto = '{"nombre": "Ana", "edad": 25, "activo": true}'
datos = json.loads(texto)
print(datos["nombre"])  # "Ana"
print(datos["activo"])  # True (Python bool)

# Desde archivo
with open("config.json", encoding="utf-8") as f:
    config = json.load(f)
\`\`\`

**Manejo de errores:**
Si el JSON está malformado, lanza \`json.JSONDecodeError\`:
\`\`\`python
try:
    datos = json.loads('{"nombre": }')  # JSON inválido
except json.JSONDecodeError as e:
    print(f"JSON malformado: {e}")
\`\`\``,
    codeExample: `import json

# ── json.loads(): string → Python ────────────────────────────
texto_json = """
{
    "empresa": "TechCorp",
    "fundacion": 2010,
    "activa": true,
    "empleados": [
        {"nombre": "Ana",  "rol": "Dev",     "salario": 45000},
        {"nombre": "Luis", "rol": "QA",      "salario": 38000},
        {"nombre": "Marta","rol": "Manager", "salario": 60000}
    ],
    "config": {
        "max_empleados": 100,
        "idioma": "es"
    }
}
"""

empresa = json.loads(texto_json)

print(f"Empresa: {empresa['empresa']}")
print(f"Fundada en: {empresa['fundacion']}")
print(f"Activa: {empresa['activa']}")   # True (bool de Python)
print(f"Empleados: {len(empresa['empleados'])}")

# Acceder a datos anidados
for emp in empresa["empleados"]:
    print(f"  {emp['nombre']} ({emp['rol']}): \${emp['salario']:,}")

# Acceder a configuración
print(f"Max empleados: {empresa['config']['max_empleados']}")

# ── json.load(): leer desde archivo ──────────────────────────
def cargar_json(ruta, default=None):
    """Carga un archivo JSON con manejo de errores."""
    try:
        with open(ruta, encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Archivo no encontrado: {ruta}")
        return default
    except json.JSONDecodeError as e:
        print(f"JSON malformado en {ruta}: {e}")
        return default

# ── Conversión de tipos ───────────────────────────────────────
datos_tipos = json.loads("""
{
    "entero": 42,
    "decimal": 3.14,
    "texto": "hola",
    "verdadero": true,
    "falso": false,
    "nulo": null,
    "lista": [1, 2, 3],
    "objeto": {"clave": "valor"}
}
""")

for clave, valor in datos_tipos.items():
    print(f"  {clave}: {valor!r} ({type(valor).__name__})")`,
    keyPoints: [
      '`json.loads(texto)` convierte un string JSON a objetos Python',
      '`json.load(archivo)` lee directamente desde un archivo JSON abierto',
      'La conversión de tipos es automática: true→True, null→None, arrays→list, objects→dict',
      'Siempre usa `encoding="utf-8"` al abrir archivos JSON',
      '`json.JSONDecodeError` se lanza si el JSON está malformado — manéjalo con try/except',
      'Accede a datos anidados con la notación estándar de Python: `datos["clave"]["subclave"]`',
    ],
    exercise: {
      description: 'Escribe una función `cargar_configuracion(ruta)` que cargue un archivo JSON de configuración. Si el archivo no existe, devuelve una configuración por defecto: `{"debug": False, "puerto": 8080, "host": "localhost"}`. Si el JSON está malformado, lanza el error.',
      hint: 'Captura `FileNotFoundError` para el caso de archivo no encontrado y devuelve el default. Deja que `json.JSONDecodeError` se propague.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `json.loads()` y `json.load()`?',
        options: [
          'loads lee archivos; load lee strings',
          'loads lee strings; load lee archivos directamente',
          'Son idénticos',
          'loads devuelve list; load devuelve dict',
        ],
        correctAnswer: 'loads lee strings; load lee archivos directamente',
        correctFeedback: 'Correcto. `loads` (load string) parsea un string. `load` (load file) lee desde un objeto archivo. La "s" al final indica "string".',
        incorrectFeedback: '`json.loads()` convierte un STRING JSON a Python. `json.load()` lee desde un ARCHIVO (objeto con método `.read()`). La "s" en `loads` viene de "string".',
      },
      {
        question: '¿A qué tipo de Python se convierte `true` de JSON?',
        options: ['"true"', '1', 'True', 'bool("true")'],
        correctAnswer: 'True',
        correctFeedback: 'Correcto. `true` de JSON se convierte a `True` de Python (bool). `false` → `False`, `null` → `None`.',
        incorrectFeedback: 'El módulo `json` convierte los tipos automáticamente: `true` → `True`, `false` → `False`, `null` → `None`. Son booleanos reales de Python, no strings.',
      },
      {
        question: '¿Qué excepción lanza `json.loads()` si el string no es JSON válido?',
        options: ['ValueError', 'json.JSONDecodeError', 'SyntaxError', 'ParseError'],
        correctAnswer: 'json.JSONDecodeError',
        correctFeedback: 'Correcto. `json.JSONDecodeError` (que es subclase de `ValueError`) se lanza cuando el JSON está malformado.',
        incorrectFeedback: '`json.JSONDecodeError` es la excepción específica para JSON malformado. Es subclase de `ValueError`, así que `except ValueError` también la captura, pero `except json.JSONDecodeError` es más específico y expresivo.',
      },
      {
        question: '¿Cómo accedes al valor `"Madrid"` en `{"usuario": {"ciudad": "Madrid"}}`?',
        options: [
          'datos.usuario.ciudad',
          'datos["usuario"]["ciudad"]',
          'datos.get("usuario.ciudad")',
          'datos["usuario.ciudad"]',
        ],
        correctAnswer: 'datos["usuario"]["ciudad"]',
        correctFeedback: 'Correcto. `json.loads()` devuelve dicts de Python. Accedes con la notación estándar de corchetes: `datos["usuario"]["ciudad"]`.',
        incorrectFeedback: 'El JSON se convierte a dicts de Python. La notación de punto (`datos.usuario`) no funciona con dicts. Usa corchetes: `datos["usuario"]["ciudad"]`.',
      },
      {
        question: '¿Por qué es importante manejar `json.JSONDecodeError` al leer archivos JSON?',
        options: [
          'Para mejorar el rendimiento',
          'Porque el archivo puede estar corrupto o con formato incorrecto',
          'Porque json.load() a veces devuelve None',
          'Solo es necesario en Python 2',
        ],
        correctAnswer: 'Porque el archivo puede estar corrupto o con formato incorrecto',
        correctFeedback: 'Correcto. Los archivos JSON pueden estar corruptos, truncados, o tener errores de formato (coma extra, comilla sin cerrar). Sin manejo de errores, el programa crashea.',
        incorrectFeedback: 'Los archivos JSON pueden estar malformados por muchas razones: edición manual incorrecta, transmisión truncada, encoding equivocado. Sin `try/except json.JSONDecodeError`, un archivo corrupto hace crashear el programa.',
      },
    ],
  },

  {
    slug: 'escribir-json',
    title: 'Escribir archivos JSON',
    module: 'Trabajar con archivos CSV y JSON',
    moduleNumber: 18,
    order: 88,
    description: 'Aprende a guardar diccionarios y listas en archivos JSON.',
    explanation: `Para convertir objetos Python a JSON, usamos \`json.dumps()\` (a string) y \`json.dump()\` (a archivo).

**Conversión Python → JSON:**

| Python | JSON |
|--------|------|
| dict | object {} |
| list, tuple | array [] |
| str | string |
| int, float | number |
| True, False | true, false |
| None | null |

**\`json.dumps()\` — Python → string:**
\`\`\`python
datos = {"nombre": "Ana", "edad": 25, "activo": True}
texto = json.dumps(datos)
# '{"nombre": "Ana", "edad": 25, "activo": true}'

# Con formato legible
texto_bonito = json.dumps(datos, indent=2, ensure_ascii=False)
\`\`\`

**\`json.dump()\` — Python → archivo:**
\`\`\`python
with open("datos.json", "w", encoding="utf-8") as f:
    json.dump(datos, f, indent=2, ensure_ascii=False)
\`\`\`

**Parámetros importantes:**
- \`indent=2\`: formato con sangría (más legible, más grande)
- \`ensure_ascii=False\`: permite caracteres como á, é, ñ (sin escape)
- \`sort_keys=True\`: ordena las claves alfabéticamente
- \`default=str\`: serializa tipos no soportados (datetime, etc.) como string`,
    codeExample: `import json
from datetime import datetime

# ── Básico ────────────────────────────────────────────────────
datos = {
    "empresa": "TechCorp",
    "activa": True,
    "empleados": 42,
    "config": None,
    "tags": ["Python", "Django", "REST"]
}

# Sin formato (compacto)
compacto = json.dumps(datos)
print("Compacto:")
print(compacto)

# Con formato (legible)
bonito = json.dumps(datos, indent=2, ensure_ascii=False, sort_keys=True)
print("\\nFormateado:")
print(bonito)

# ── ensure_ascii ──────────────────────────────────────────────
texto_es = {"mensaje": "Héroe, corazón, Ñoño"}

# Sin ensure_ascii=False: los acentos se escapan
print(json.dumps(texto_es))
# {"mensaje": "H\\u00e9roe, coraz\\u00f3n, \\u00d1o\\u00f1o"}

# Con ensure_ascii=False: los acentos quedan legibles
print(json.dumps(texto_es, ensure_ascii=False))
# {"mensaje": "Héroe, corazón, Ñoño"}

# ── Serializar tipos no estándar ──────────────────────────────
def serializar_default(obj):
    """Convierte tipos no soportados por json."""
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Tipo no serializable: {type(obj)}")

registro = {
    "evento": "login",
    "usuario": "ana",
    "timestamp": datetime.now()
}

texto_json = json.dumps(registro, default=serializar_default, indent=2)
print("\\nRegistro con datetime:")
print(texto_json)

# ── Guardar en archivo ────────────────────────────────────────
def guardar_json(ruta, datos, indent=2):
    """Guarda datos en un archivo JSON."""
    with open(ruta, "w", encoding="utf-8") as f:
        json.dump(datos, f, indent=indent, ensure_ascii=False)
    print(f"Guardado en {ruta}")`,
    keyPoints: [
      '`json.dumps()` convierte Python a string JSON; `json.dump()` escribe directamente a archivo',
      '`indent=2` formatea el JSON con sangría (más legible en archivos)',
      '`ensure_ascii=False` permite guardar caracteres como á, é, ñ sin escaparlos',
      '`sort_keys=True` ordena las claves del diccionario alfabéticamente',
      'Los tipos no soportados (datetime, Decimal, objetos propios) requieren el parámetro `default`',
      'Siempre usa `encoding="utf-8"` al escribir archivos JSON',
    ],
    exercise: {
      description: 'Escribe una función `guardar_reporte(nombre_archivo, datos)` que guarde una lista de dicts en JSON con: indent=2, ensure_ascii=False, y añada metadata como `{"generado_en": "...", "total_registros": N, "datos": [...]}`. Usa `datetime.now().isoformat()` para la fecha.',
      hint: 'Construye un nuevo dict con los campos de metadata antes de llamar a `json.dump()`.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `json.dumps()` y `json.dump()`?',
        options: [
          'dumps escribe a archivo; dump devuelve un string',
          'dumps devuelve un string; dump escribe a un objeto archivo',
          'Son idénticos',
          'dumps es para dicts; dump es para listas',
        ],
        correctAnswer: 'dumps devuelve un string; dump escribe a un objeto archivo',
        correctFeedback: 'Correcto. La "s" en `dumps` = "string". `json.dumps(datos)` → string. `json.dump(datos, archivo)` → escribe al archivo.',
        incorrectFeedback: '`json.dumps()` convierte a STRING ("s" = string). `json.dump()` escribe directamente a un ARCHIVO (objeto abierto). El patrón "función" / "función + s" se repite en `load`/`loads`.',
      },
      {
        question: '¿Qué produce `json.dumps({"activo": True, "valor": None})`?',
        options: [
          '{"activo": True, "valor": None}',
          '{"activo": true, "valor": null}',
          '"{\\"activo\\": true, \\"valor\\": null}"',
          'Error: True y None no son serializables',
        ],
        correctAnswer: '{"activo": true, "valor": null}',
        correctFeedback: 'Correcto. Python `True` → JSON `true`, Python `None` → JSON `null`. Las claves también pierden las comillas extras.',
        incorrectFeedback: '`json.dumps()` convierte tipos Python a sus equivalentes JSON: `True` → `true`, `False` → `false`, `None` → `null`. El JSON resultante es un string válido.',
      },
      {
        question: '¿Para qué sirve `ensure_ascii=False` en `json.dumps()`?',
        options: [
          'Para no validar el JSON generado',
          'Para que los caracteres como á, é, ñ se escriban directamente sin escape \\uXXXX',
          'Para mejorar el rendimiento',
          'Para soportar múltiples encodings',
        ],
        correctAnswer: 'Para que los caracteres como á, é, ñ se escriban directamente sin escape \\uXXXX',
        correctFeedback: 'Correcto. Sin este parámetro, "año" se serializa como "a\\u00f1o". Con `ensure_ascii=False`, se escribe "año" directamente.',
        incorrectFeedback: 'Por defecto, `json.dumps` escapa todos los caracteres no-ASCII con `\\uXXXX`. Con `ensure_ascii=False`, los caracteres UTF-8 se escriben directamente: "á" en lugar de "\\u00e1".',
      },
      {
        question: '¿Qué pasa si intentas hacer `json.dumps(datetime.now())`?',
        options: [
          'Lo convierte a string automáticamente',
          'Lanza TypeError: Object of type datetime is not JSON serializable',
          'Lo convierte a timestamp (número)',
          'Devuelve None',
        ],
        correctAnswer: 'Lanza TypeError: Object of type datetime is not JSON serializable',
        correctFeedback: 'Correcto. `datetime` no es un tipo nativo de JSON. Debes convertirlo manualmente (`.isoformat()`) o usar el parámetro `default` con una función que maneje la conversión.',
        incorrectFeedback: 'JSON no tiene un tipo para fechas. `datetime` no es serializable directamente. Soluciones: `json.dumps(dato, default=str)` o `json.dumps({"fecha": dt.isoformat()})`.',
      },
      {
        question: '¿Qué hace el parámetro `indent=2` en `json.dumps()`?',
        options: [
          'Limita la profundidad de anidamiento a 2 niveles',
          'Añade 2 espacios de sangría por nivel para hacer el JSON legible',
          'Comprime el JSON a 2 líneas',
          'Agrega 2 caracteres de padding',
        ],
        correctAnswer: 'Añade 2 espacios de sangría por nivel para hacer el JSON legible',
        correctFeedback: 'Correcto. `indent=2` formatea el JSON con saltos de línea y 2 espacios por nivel de anidamiento. Sin `indent`, el JSON es una sola línea compacta.',
        incorrectFeedback: '`indent=2` hace que el JSON se formatee con saltos de línea y 2 espacios de indentación por nivel. Es más legible para archivos de configuración. Para APIs y transmisión de datos, suele omitirse para menor tamaño.',
      },
    ],
  },

  {
    slug: 'convertir-csv-json',
    title: 'Convertir datos entre CSV y JSON',
    module: 'Trabajar con archivos CSV y JSON',
    moduleNumber: 18,
    order: 89,
    description: 'Aprende a transformar datos de CSV a JSON y de JSON a CSV en un mini ejercicio práctico.',
    explanation: `Una tarea muy común en proyectos reales es convertir datos entre formatos. Puedes recibir un CSV de una exportación de Excel y necesitar convertirlo a JSON para una API, o viceversa.

**CSV a JSON:**
1. Leer el CSV con \`csv.DictReader\` (cada fila es un dict)
2. Convertir tipos si es necesario
3. Guardar con \`json.dump()\`

**JSON a CSV:**
1. Cargar el JSON con \`json.load()\`
2. Determinar los campos (columnas)
3. Escribir con \`csv.DictWriter\`

**Consideraciones al convertir:**

| Desafío | Solución |
|---------|----------|
| CSV solo tiene strings | Convertir tipos al leer CSV |
| JSON tiene anidamiento | Aplanar el objeto antes de escribir CSV |
| JSON tiene arrays | Serializar como string o crear múltiples filas |
| Campos inconsistentes | Usar \`extrasaction="ignore"\` en DictWriter |

**Aplanar un objeto JSON:**
\`\`\`python
# Antes de CSV:
{"nombre": "Ana", "direccion": {"ciudad": "MX"}}

# Después de aplanar:
{"nombre": "Ana", "ciudad": "MX"}
\`\`\``,
    codeExample: `import csv
import json
import io

# ── CSV → JSON ────────────────────────────────────────────────
csv_datos = """id,nombre,precio,stock,activo
1,Laptop,1500.00,10,true
2,Mouse,25.50,50,true
3,Teclado,80.00,0,false
"""

def csv_a_json(csv_texto, tipos=None):
    """
    Convierte texto CSV a lista de dicts con conversión de tipos.
    tipos: dict con {nombre_campo: funcion_conversion}
    """
    tipos = tipos or {}
    archivo = io.StringIO(csv_texto)
    lector = csv.DictReader(archivo)

    resultado = []
    for fila in lector:
        registro = {}
        for campo, valor in fila.items():
            if campo in tipos:
                registro[campo] = tipos[campo](valor)
            else:
                registro[campo] = valor
        resultado.append(registro)
    return resultado

productos = csv_a_json(csv_datos, tipos={
    "id": int,
    "precio": float,
    "stock": int,
    "activo": lambda v: v.lower() == "true"
})

print("CSV → JSON:")
print(json.dumps(productos, indent=2, ensure_ascii=False))

# ── JSON → CSV ────────────────────────────────────────────────
json_datos = json.dumps([
    {"id": 1, "nombre": "Ana",   "dept": "IT",     "salario": 45000},
    {"id": 2, "nombre": "Luis",  "dept": "Ventas",  "salario": 38000},
    {"id": 3, "nombre": "Marta", "dept": "IT",     "salario": 60000},
])

def json_a_csv(json_texto):
    """Convierte JSON (lista de dicts) a string CSV."""
    datos = json.loads(json_texto)
    if not datos:
        return ""
    campos = list(datos[0].keys())
    salida = io.StringIO()
    escritor = csv.DictWriter(salida, fieldnames=campos)
    escritor.writeheader()
    escritor.writerows(datos)
    return salida.getvalue()

csv_resultado = json_a_csv(json_datos)
print("\\nJSON → CSV:")
print(csv_resultado)

# ── Aplanar JSON anidado antes de CSV ─────────────────────────
def aplanar(objeto, prefijo=""):
    """Aplana un dict anidado para poder escribirlo en CSV."""
    resultado = {}
    for clave, valor in objeto.items():
        clave_completa = f"{prefijo}{clave}" if prefijo else clave
        if isinstance(valor, dict):
            resultado.update(aplanar(valor, f"{clave_completa}_"))
        elif isinstance(valor, list):
            resultado[clave_completa] = json.dumps(valor)  # lista → string JSON
        else:
            resultado[clave_completa] = valor
    return resultado

anidado = {"nombre": "Ana", "direccion": {"ciudad": "MX", "cp": "06600"}}
print("Aplanado:", aplanar(anidado))`,
    keyPoints: [
      'CSV → JSON: lee con DictReader, convierte tipos, guarda con json.dump',
      'JSON → CSV: carga con json.load, obtén los campos del primer elemento, escribe con DictWriter',
      'Los tipos en CSV son todos strings — convierte explícitamente al pasar a JSON',
      'El JSON anidado necesita aplanarse antes de poder representarse en CSV',
      'Las listas en JSON pueden convertirse a strings JSON para guardarlas en una celda CSV',
      'Siempre valida que los datos tengan la estructura esperada antes de convertir',
    ],
    exercise: {
      description: 'Escribe una función `convertir_archivo(ruta_entrada, ruta_salida)` que detecte automáticamente si la entrada es CSV o JSON (por extensión de archivo) y la convierta al otro formato.',
      hint: 'Usa `ruta_entrada.endswith(".csv")` o `ruta_entrada.endswith(".json")` para detectar el formato.',
    },
    quiz: [
      {
        question: '¿Cuál es el orden correcto para convertir CSV a JSON?',
        options: [
          'json.load → csv.DictReader → guardar',
          'csv.DictReader → convertir tipos → json.dump',
          'csv.reader → json.loads → guardar',
          'Leer línea por línea → json.dumps cada una',
        ],
        correctAnswer: 'csv.DictReader → convertir tipos → json.dump',
        correctFeedback: 'Correcto. Lees con DictReader (cada fila es un dict), conviertes tipos (str → int, float, bool), y guardas el resultado con json.dump.',
        incorrectFeedback: 'El proceso es: 1) leer CSV con `csv.DictReader` (filas como dicts), 2) convertir tipos (strings → int, float, bool), 3) guardar la lista de dicts con `json.dump`.',
      },
      {
        question: '¿Qué desafío principal presenta el JSON anidado al convertir a CSV?',
        options: [
          'El JSON es demasiado grande para CSV',
          'El anidamiento no se puede representar en la estructura plana de filas y columnas de CSV',
          'CSV no soporta más de 100 columnas',
          'No hay desafío, la conversión es directa',
        ],
        correctAnswer: 'El anidamiento no se puede representar en la estructura plana de filas y columnas de CSV',
        correctFeedback: 'Correcto. CSV es bidimensional (filas × columnas). `{"direccion": {"ciudad": "MX"}}` no cabe en una sola celda sin aplanar o serializar.',
        incorrectFeedback: 'CSV es una estructura plana (filas y columnas). El anidamiento de JSON no tiene representación directa. Debes "aplanar" los objetos anidados (por ejemplo, `ciudad` en lugar de `direccion.ciudad`) o serializar como string JSON.',
      },
      {
        question: '¿Cómo conviertes el string "true" de CSV al booleano Python `True`?',
        options: [
          'bool("true")',
          'str("true") == True',
          'valor.lower() == "true"',
          'json.loads("true")',
        ],
        correctAnswer: 'valor.lower() == "true"',
        correctFeedback: 'Correcto. `bool("true")` devuelve `True` en Python (¡cualquier string no vacío es truthy!), lo que es un bug. `valor.lower() == "true"` o `json.loads(valor)` son correctos.',
        incorrectFeedback: '¡Cuidado! `bool("true")` devuelve `True` (porque es un string no vacío), PERO `bool("false")` también devuelve `True` (bug silencioso). La forma correcta es `valor.lower() == "true"` o `json.loads(valor.lower())`.',
      },
      {
        question: 'Al convertir JSON a CSV, ¿cómo obtienes los nombres de las columnas?',
        options: [
          'Las columnas se generan automáticamente',
          'Usando las claves del primer elemento de la lista',
          'Pidiéndolas al usuario',
          'JSON siempre las incluye en la primera fila',
        ],
        correctAnswer: 'Usando las claves del primer elemento de la lista',
        correctFeedback: 'Correcto. `campos = list(datos[0].keys())` obtiene los nombres de los campos del primer diccionario.',
        incorrectFeedback: 'Para un JSON que es una lista de dicts, los campos (columnas del CSV) son las claves de los dicts. Se obtienen con `list(datos[0].keys())`. Si los dicts tienen diferentes claves, necesitarías unirlas.',
      },
      {
        question: '¿Qué hace `json.dumps(lista)` cuando la lista tiene un array como campo?',
        options: [
          'Error: las listas no son serializables',
          'Convierte la lista a su representación JSON: "[1, 2, 3]" como string',
          'Crea una columna separada por cada elemento',
          'Lo ignora silenciosamente',
        ],
        correctAnswer: 'Convierte la lista a su representación JSON: "[1, 2, 3]" como string',
        correctFeedback: 'Correcto. Si usas `json.dumps(lista_interna)` para poner el array en una celda CSV, se guarda como el string "[1, 2, 3]", lo que permite recuperarlo después con `json.loads(celda)`.',
        incorrectFeedback: '`json.dumps([1,2,3])` devuelve el string `"[1, 2, 3]"`. Al guardarlo en una celda CSV, puedes recuperarlo con `json.loads(valor)`. Es un truco práctico para almacenar arrays en CSVs.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module18: Module = {
  number: 18,
  title: 'Trabajar con archivos CSV y JSON',
  level: 'intermedio',
  lessons: lessonsModule18,
}
