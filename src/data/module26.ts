import type { Lesson } from '@/types'

export const lessonsModule26: Lesson[] = [
  {
    slug: 'listar-archivos-carpeta',
    title: 'Listar archivos en una carpeta',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 136,
    description: 'Aprende a recorrer carpetas y listar archivos usando Python.',
    explanation: `## Listar archivos en una carpeta con Python

Python ofrece herramientas poderosas para explorar el sistema de archivos. La más moderna y recomendada es \`pathlib\`.

### La librería pathlib

\`pathlib\` está incluida en Python (no necesitas instalarla). Trabaja con rutas como objetos en lugar de strings:

\`\`\`python
from pathlib import Path

# Crear un objeto Path
carpeta = Path("mis_documentos")
carpeta_absoluta = Path("C:/Users/usuario/Documentos")

# Carpeta actual
aqui = Path(".")
\`\`\`

### iterdir(): listar todo el contenido

\`\`\`python
from pathlib import Path

carpeta = Path("mi_carpeta")

for elemento in carpeta.iterdir():
    if elemento.is_file():
        print(f"Archivo: {elemento.name}")
    elif elemento.is_dir():
        print(f"Carpeta: {elemento.name}/")
\`\`\`

### glob(): filtrar por patrón

\`\`\`python
# Solo archivos CSV
for archivo in carpeta.glob("*.csv"):
    print(archivo.name)

# Solo archivos que empiecen con "reporte"
for archivo in carpeta.glob("reporte*"):
    print(archivo.name)

# Múltiples extensiones
for archivo in carpeta.glob("*.xlsx"):
    print(archivo)
\`\`\`

### rglob(): búsqueda recursiva (en subcarpetas)

\`\`\`python
# Buscar TODOS los CSV en la carpeta y sus subcarpetas
for archivo in carpeta.rglob("*.csv"):
    print(archivo)  # Incluye la ruta completa

# Equivalente a glob("**/*.csv")
for archivo in carpeta.glob("**/*.csv"):
    print(archivo)
\`\`\`

### Filtrar por extensión con .suffix

\`\`\`python
for archivo in carpeta.iterdir():
    if archivo.is_file() and archivo.suffix == ".pdf":
        print(f"PDF encontrado: {archivo.name}")
\`\`\`

### Información de cada archivo

\`\`\`python
archivo = Path("reporte.xlsx")

print(f"Nombre completo: {archivo.name}")       # reporte.xlsx
print(f"Solo nombre: {archivo.stem}")            # reporte
print(f"Extensión: {archivo.suffix}")            # .xlsx
print(f"Ruta padre: {archivo.parent}")           # La carpeta que lo contiene

# Tamaño del archivo
tamanio = archivo.stat().st_size                 # Bytes
tamanio_kb = tamanio / 1024                      # KB
print(f"Tamaño: {tamanio_kb:.1f} KB")

# Fecha de modificación
import datetime
mod_time = archivo.stat().st_mtime
fecha_mod = datetime.datetime.fromtimestamp(mod_time)
print(f"Modificado: {fecha_mod.strftime('%d/%m/%Y %H:%M')}")
\`\`\`

### os.listdir() vs pathlib

| Característica | os.listdir() | pathlib |
|----------------|-------------|---------|
| Devuelve | Lista de strings | Iterador de Path |
| Filtrar extensión | Manual con split | .suffix |
| Información de archivo | os.stat() aparte | .stat() integrado |
| Legibilidad | Menos clara | Más clara |
| Recomendación | Código legacy | Código moderno |

### Listar archivos ordenados

\`\`\`python
# Ordenar por nombre (alfabético)
archivos = sorted(carpeta.glob("*.xlsx"))

# Ordenar por fecha de modificación (más reciente primero)
archivos = sorted(carpeta.glob("*.xlsx"), key=lambda f: f.stat().st_mtime, reverse=True)

# Ordenar por tamaño
archivos = sorted(carpeta.glob("*"), key=lambda f: f.stat().st_size)
\`\`\`
`,
    codeExample: `from pathlib import Path
import datetime

# Usar la carpeta actual como ejemplo
carpeta = Path(".")

print("=" * 50)
print("EXPLORADOR DE ARCHIVOS CON PATHLIB")
print("=" * 50)

# 1. Listar todo el contenido
print("\\nContenido de la carpeta actual:")
for elemento in carpeta.iterdir():
    tipo = "Carpeta" if elemento.is_dir() else "Archivo"
    print(f"  [{tipo}] {elemento.name}")

print()

# 2. Filtrar solo archivos Python
print("Archivos Python (.py):")
archivos_py = list(carpeta.glob("*.py"))
if archivos_py:
    for archivo in sorted(archivos_py):
        tamanio = archivo.stat().st_size
        print(f"  {archivo.name} ({tamanio} bytes)")
else:
    print("  (ninguno encontrado)")

print()

# 3. Demostrar propiedades de Path
archivo_demo = Path("demo.xlsx")

# Crear un archivo de demo para el ejemplo
archivo_demo.write_text("demo")

print(f"Propiedades de un archivo:")
print(f"  .name   -> {archivo_demo.name}")
print(f"  .stem   -> {archivo_demo.stem}")
print(f"  .suffix -> {archivo_demo.suffix}")
print(f"  .parent -> {archivo_demo.parent.resolve()}")
print(f"  .exists() -> {archivo_demo.exists()}")

info = archivo_demo.stat()
print(f"  .stat().st_size -> {info.st_size} bytes")

fecha = datetime.datetime.fromtimestamp(info.st_mtime)
print(f"  Modificado: {fecha.strftime('%d/%m/%Y %H:%M')}")

# 4. Búsqueda recursiva (rglob)
print()
print("Todos los .py en subcarpetas (rglob):")
count = 0
for archivo in carpeta.rglob("*.py"):
    print(f"  {archivo}")
    count += 1
    if count >= 5:
        print("  ... (y más)")
        break

# 5. Ordenar por tamaño
print()
print("Archivos ordenados por tamaño (los primeros):")
todos = [f for f in carpeta.iterdir() if f.is_file()]
for f in sorted(todos, key=lambda x: x.stat().st_size, reverse=True)[:3]:
    kb = f.stat().st_size / 1024
    print(f"  {f.name}: {kb:.1f} KB")

# Limpiar archivo demo
archivo_demo.unlink()
`,
    keyPoints: [
      'pathlib.Path es la forma moderna y recomendada de trabajar con rutas en Python',
      'iterdir() lista el contenido de una carpeta; glob() filtra por patrón; rglob() es recursivo',
      '.name devuelve el nombre completo, .stem sin extensión, .suffix la extensión',
      '.stat().st_size devuelve el tamaño en bytes; .stat().st_mtime la fecha de modificación',
      'sorted() con key=lambda permite ordenar archivos por nombre, fecha o tamaño',
      'os.listdir() existe como alternativa pero pathlib es más expresivo y moderno',
    ],
    exercise: {
      description: 'Escribe un script que liste todos los archivos de la carpeta Documentos de tu sistema (o cualquier carpeta que tengas) y muestre: nombre del archivo, extensión, tamaño en KB y fecha de modificación. Luego muestra un resumen: cuántos archivos hay por tipo (agrupados por extensión).',
      hint: 'Usa Path.home() / "Documents" para acceder a la carpeta Documentos. Agrupa por extensión con un diccionario: contador = {}; contador[archivo.suffix] = contador.get(archivo.suffix, 0) + 1. Para convertir bytes a KB divide entre 1024.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre glob() y rglob() en pathlib?',
        options: [
          'glob() es más rápido que rglob()',
          'rglob() busca en la carpeta actual y todas sus subcarpetas, glob() solo en la carpeta actual',
          'glob() acepta comodines, rglob() no',
          'rglob() solo funciona con archivos, no con carpetas',
        ],
        correctAnswer: 'rglob() busca en la carpeta actual y todas sus subcarpetas, glob() solo en la carpeta actual',
        correctFeedback: '¡Correcto! rglob("*.csv") es equivalente a glob("**/*.csv"). Busca recursivamente en toda la jerarquía de carpetas.',
        incorrectFeedback: 'La diferencia clave es la recursividad. glob("*.csv") solo busca en la carpeta actual. rglob("*.csv") busca en la carpeta actual y en todas sus subcarpetas.',
      },
      {
        question: '¿Qué propiedad de Path devuelve solo el nombre del archivo sin la extensión?',
        options: ['.name', '.filename', '.stem', '.base'],
        correctAnswer: '.stem',
        correctFeedback: '¡Correcto! Para "reporte_ventas.xlsx": .name = "reporte_ventas.xlsx", .stem = "reporte_ventas", .suffix = ".xlsx".',
        incorrectFeedback: '.stem devuelve el nombre sin extensión. .name devuelve el nombre completo incluyendo extensión. .suffix devuelve solo la extensión.',
      },
      {
        question: '¿Cómo se filtra para obtener solo archivos PDF de una carpeta?',
        options: [
          'carpeta.filter(type="pdf")',
          'carpeta.glob("*.pdf") o verificar archivo.suffix == ".pdf"',
          'carpeta.list(extension=".pdf")',
          'Path.find_pdf(carpeta)',
        ],
        correctAnswer: 'carpeta.glob("*.pdf") o verificar archivo.suffix == ".pdf"',
        correctFeedback: '¡Correcto! Ambas formas funcionan: glob("*.pdf") filtra directamente, o iterar con iterdir() y verificar el .suffix de cada archivo.',
        incorrectFeedback: 'Para filtrar PDFs se usa glob("*.pdf") que aplica el patrón directamente, o se itera con iterdir() y se verifica if archivo.suffix == ".pdf".',
      },
      {
        question: '¿Cómo se obtiene el tamaño de un archivo en bytes con pathlib?',
        options: [
          'archivo.size',
          'archivo.stat().st_size',
          'len(archivo)',
          'archivo.get_size()',
        ],
        correctAnswer: 'archivo.stat().st_size',
        correctFeedback: '¡Correcto! stat() devuelve un objeto con metadatos del archivo. st_size es el tamaño en bytes. Para KB: archivo.stat().st_size / 1024.',
        incorrectFeedback: 'stat() devuelve los metadatos del archivo (tamaño, fechas, permisos). st_size dentro de stat() contiene el tamaño en bytes.',
      },
      {
        question: '¿Cómo se ordena una lista de archivos del más reciente al más antiguo?',
        options: [
          'sorted(archivos, key=lambda f: f.stat().st_mtime, reverse=True)',
          'archivos.sort(by="date")',
          'sorted(archivos, date=True)',
          'archivos.order_by_date(newest_first=True)',
        ],
        correctAnswer: 'sorted(archivos, key=lambda f: f.stat().st_mtime, reverse=True)',
        correctFeedback: '¡Correcto! st_mtime es el timestamp de modificación. Con reverse=True, el archivo más reciente (mayor timestamp) aparece primero.',
        incorrectFeedback: 'sorted() con key=lambda f: f.stat().st_mtime ordena por fecha de modificación. reverse=True invierte el orden para mostrar el más reciente primero.',
      },
      {
        question: '¿Cuál es la principal ventaja de pathlib sobre os.listdir()?',
        options: [
          'pathlib es más rápido en carpetas grandes',
          'pathlib devuelve objetos Path con métodos útiles en lugar de strings simples',
          'os.listdir() no funciona en Windows',
          'pathlib puede acceder a servidores remotos',
        ],
        correctAnswer: 'pathlib devuelve objetos Path con métodos útiles en lugar de strings simples',
        correctFeedback: '¡Correcto! Con pathlib obtienes objetos que tienen .suffix, .stem, .stat(), .exists(), etc. Con os.listdir() solo tienes strings y necesitas funciones adicionales de os.path.',
        incorrectFeedback: 'pathlib devuelve objetos Path con propiedades y métodos integrados (.suffix, .stat(), .exists()). os.listdir() devuelve strings simples que requieren funciones adicionales de os.path.',
      },
      {
        question: 'Para acceder a la carpeta Documentos del usuario actual de forma portable entre sistemas operativos, ¿qué código usarías?',
        options: [
          'Path("C:/Users/usuario/Documents")',
          'Path.home() / "Documents"',
          'Path.documents()',
          'os.getenv("DOCUMENTS")',
        ],
        correctAnswer: 'Path.home() / "Documents"',
        correctFeedback: '¡Correcto! Path.home() devuelve la carpeta del usuario en cualquier sistema operativo. El operador / construye la ruta de forma portable.',
        incorrectFeedback: 'Path.home() devuelve la carpeta del usuario (C:/Users/usuario en Windows, /home/usuario en Linux). El operador / de pathlib construye rutas de forma independiente del sistema operativo.',
      },
    ],
  },
  {
    slug: 'renombrar-archivos',
    title: 'Renombrar archivos automáticamente',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 137,
    description: 'Aprende a renombrar archivos en masa siguiendo reglas específicas.',
    explanation: `## Renombrar archivos automáticamente con Python

Renombrar decenas o cientos de archivos manualmente es tedioso y propenso a errores. Python lo hace en segundos.

### Path.rename(): renombrar un archivo

\`\`\`python
from pathlib import Path

# Renombrar un archivo
original = Path("informe_viejo.txt")
original.rename("informe_nuevo.txt")
\`\`\`

**Diferencia entre rename() y replace():**
- \`rename()\`: falla si el destino ya existe
- \`replace()\`: sobreescribe el destino si ya existe

\`\`\`python
# rename() falla si "nuevo_nombre.txt" ya existe
Path("viejo.txt").rename("nuevo_nombre.txt")

# replace() sobreescribe si "nuevo_nombre.txt" ya existe
Path("viejo.txt").replace("nuevo_nombre.txt")
\`\`\`

### Escenarios comunes de renombrado masivo

**1. Agregar un prefijo a todos los archivos**

\`\`\`python
carpeta = Path("reportes")
for archivo in carpeta.glob("*.xlsx"):
    nuevo_nombre = carpeta / f"2026_{archivo.name}"
    archivo.rename(nuevo_nombre)
\`\`\`

**2. Agregar la fecha de hoy al nombre**

\`\`\`python
from datetime import date

hoy = date.today().strftime("%Y%m%d")
for archivo in carpeta.glob("*.pdf"):
    nuevo = archivo.parent / f"{archivo.stem}_{hoy}{archivo.suffix}"
    archivo.rename(nuevo)
\`\`\`

**3. Numerar archivos secuencialmente**

\`\`\`python
archivos = sorted(carpeta.glob("*.jpg"))
for i, archivo in enumerate(archivos, start=1):
    nuevo = archivo.parent / f"{i:03d}_{archivo.name}"
    # i:03d -> formatea como 001, 002, 003...
    archivo.rename(nuevo)
\`\`\`

**4. Cambiar extensión**

\`\`\`python
for archivo in carpeta.glob("*.txt"):
    nuevo = archivo.with_suffix(".md")
    archivo.rename(nuevo)
\`\`\`

### Modo simulación (dry-run): preview antes de ejecutar

Siempre es buena práctica ver qué cambios se harán antes de ejecutarlos:

\`\`\`python
def renombrar_masivo(carpeta, patron, prefijo, dry_run=True):
    """Renombra archivos. Si dry_run=True, solo muestra los cambios."""
    archivos = list(Path(carpeta).glob(patron))

    if not archivos:
        print("No se encontraron archivos.")
        return

    print(f"{'SIMULACIÓN' if dry_run else 'EJECUTANDO'}: {len(archivos)} archivos")

    for archivo in archivos:
        nuevo = archivo.parent / f"{prefijo}_{archivo.name}"
        print(f"  {archivo.name} -> {nuevo.name}")
        if not dry_run:
            archivo.rename(nuevo)

    if dry_run:
        print("\\nEjecuta con dry_run=False para aplicar los cambios.")

# Primero simular
renombrar_masivo("documentos", "*.pdf", "2026", dry_run=True)

# Luego ejecutar cuando estés seguro
# renombrar_masivo("documentos", "*.pdf", "2026", dry_run=False)
\`\`\`

### Verificar que el archivo existe antes de renombrar

\`\`\`python
def renombrar_seguro(ruta_original, nuevo_nombre):
    """Renombra con verificaciones de seguridad."""
    original = Path(ruta_original)

    if not original.exists():
        print(f"Error: {original.name} no existe.")
        return False

    nuevo = original.parent / nuevo_nombre

    if nuevo.exists():
        print(f"Advertencia: {nuevo_nombre} ya existe. Usando rename() no se puede sobreescribir.")
        return False

    original.rename(nuevo)
    print(f"Renombrado: {original.name} -> {nuevo.name}")
    return True
\`\`\`

### ADVERTENCIA: prueba siempre con archivos de ejemplo

\`\`\`python
# BUENA PRÁCTICA: Crea una carpeta "prueba" con copies de tus archivos
# y ejecuta el script ahí primero.
#
# NUNCA ejecutes un script de renombrado masivo
# directamente sobre archivos importantes sin haberlo probado antes.
\`\`\`
`,
    codeExample: `from pathlib import Path
from datetime import date
import os

# Crear una carpeta de prueba con archivos de ejemplo
carpeta_prueba = Path("prueba_renombrado")
carpeta_prueba.mkdir(exist_ok=True)

# Crear archivos de ejemplo
nombres_ejemplo = [
    "reporte_ventas.xlsx",
    "reporte_gastos.xlsx",
    "presupuesto.xlsx",
    "foto_001.jpg",
    "foto_002.jpg",
    "documento.pdf",
]
for nombre in nombres_ejemplo:
    (carpeta_prueba / nombre).write_text("contenido de prueba")

print("Archivos creados para la prueba:")
for f in sorted(carpeta_prueba.iterdir()):
    print(f"  {f.name}")
print()

# ====================================
# FUNCIÓN DE RENOMBRADO CON DRY-RUN
# ====================================

def renombrar_con_prefijo(carpeta, patron, prefijo, dry_run=True):
    """Agrega un prefijo a todos los archivos que coincidan con el patrón."""
    archivos = sorted(Path(carpeta).glob(patron))

    if not archivos:
        print(f"No se encontraron archivos con patrón '{patron}'")
        return

    modo = "SIMULACIÓN" if dry_run else "EJECUTANDO"
    print(f"[{modo}] Agregar prefijo '{prefijo}_' a {len(archivos)} archivos:")

    for archivo in archivos:
        nuevo = archivo.parent / f"{prefijo}_{archivo.name}"
        print(f"  {archivo.name:30s} -> {nuevo.name}")
        if not dry_run:
            if not nuevo.exists():
                archivo.rename(nuevo)
            else:
                print(f"    OMITIDO: {nuevo.name} ya existe")

    if dry_run:
        print("  → Ejecuta con dry_run=False para aplicar.")

def numerar_archivos(carpeta, patron, dry_run=True):
    """Agrega numeración secuencial 001_, 002_, ... a los archivos."""
    archivos = sorted(Path(carpeta).glob(patron))

    if not archivos:
        return

    modo = "SIMULACIÓN" if dry_run else "EJECUTANDO"
    print(f"[{modo}] Numerar {len(archivos)} archivos:")

    for i, archivo in enumerate(archivos, start=1):
        nuevo = archivo.parent / f"{i:03d}_{archivo.name}"
        print(f"  {archivo.name:30s} -> {nuevo.name}")
        if not dry_run:
            if not nuevo.exists():
                archivo.rename(nuevo)

# --- DEMOSTRACIÓN ---
print("=== ESCENARIO 1: Agregar prefijo de año ===")
renombrar_con_prefijo(carpeta_prueba, "*.xlsx", "2026", dry_run=True)
print()

print("=== ESCENARIO 2: Numerar fotos secuencialmente ===")
numerar_archivos(carpeta_prueba, "foto_*.jpg", dry_run=True)
print()

# Ejecutar el escenario 1 de verdad
print("=== APLICANDO cambios del Escenario 1 ===")
renombrar_con_prefijo(carpeta_prueba, "*.xlsx", "2026", dry_run=False)
print()

print("Estado final de la carpeta:")
for f in sorted(carpeta_prueba.iterdir()):
    print(f"  {f.name}")

# Limpieza
import shutil
shutil.rmtree(carpeta_prueba)
print()
print("(Carpeta de prueba eliminada)")
`,
    keyPoints: [
      'Path.rename() renombra un archivo; falla si el destino ya existe',
      'Path.replace() renombra sobreescribiendo el destino si ya existe',
      'El modo dry_run=True permite previsualizar los cambios antes de ejecutarlos',
      'i:03d formatea números con ceros iniciales: 001, 002, 003',
      'archivo.with_suffix(".nuevo") cambia la extensión manteniendo el nombre',
      'Siempre prueba con archivos de ejemplo antes de ejecutar en datos reales',
    ],
    exercise: {
      description: 'Crea un script con modo dry-run que renombre todos los archivos de una carpeta de prueba: 1) Convirtiendo el nombre a minúsculas, 2) Reemplazando espacios con guiones bajos, 3) Agregando la fecha de hoy al final del nombre (antes de la extensión). Ejemplo: "Mi Reporte Enero.xlsx" → "mi_reporte_enero_20260115.xlsx".',
      hint: 'Para limpiar el nombre: nuevo_stem = archivo.stem.lower().replace(" ", "_"). Para agregar la fecha: nuevo_nombre = f"{nuevo_stem}_{hoy}{archivo.suffix}". Recuerda envolver todo en una función con parámetro dry_run=True.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre rename() y replace() en pathlib?',
        options: [
          'rename() mueve el archivo, replace() solo cambia el nombre',
          'rename() falla si el destino ya existe; replace() sobreescribe el destino',
          'replace() es más rápido que rename()',
          'rename() funciona en todos los sistemas operativos, replace() solo en Linux',
        ],
        correctAnswer: 'rename() falla si el destino ya existe; replace() sobreescribe el destino',
        correctFeedback: '¡Correcto! rename() es más seguro porque no sobreescribe. replace() es conveniente cuando quieres actualizar un archivo, pero puede borrar datos si no tienes cuidado.',
        incorrectFeedback: 'La diferencia clave es el comportamiento ante conflictos. rename() lanza error si el destino existe. replace() sobreescribe silenciosamente. Úsalos según si quieres seguridad o conveniencia.',
      },
      {
        question: '¿Qué produce f"{i:03d}" cuando i = 7?',
        options: ['"7"', '"07"', '"007"', '"703"'],
        correctAnswer: '"007"',
        correctFeedback: '¡Correcto! :03d formatea el número como entero con un mínimo de 3 dígitos, rellenando con ceros a la izquierda. 7 → "007", 15 → "015", 100 → "100".',
        incorrectFeedback: ':03d indica formato entero (d) con mínimo 3 caracteres (3), rellenando con ceros (0). Para i=7: "007". Para i=15: "015". Para i=100: "100".',
      },
      {
        question: '¿Para qué sirve el modo dry_run en un script de renombrado?',
        options: [
          'Para ejecutar el script sin conexión a internet',
          'Para previsualizar los cambios sin aplicarlos realmente',
          'Para renombrar archivos de forma más rápida',
          'Para deshacer los cambios realizados',
        ],
        correctAnswer: 'Para previsualizar los cambios sin aplicarlos realmente',
        correctFeedback: '¡Correcto! El modo dry-run muestra exactamente qué cambiaría sin modificar nada. Es una práctica de seguridad esencial en scripts de automatización destructiva.',
        incorrectFeedback: 'dry_run simula la ejecución sin hacer cambios reales. Permite revisar "esto es lo que haría" antes de confirmar. Es una práctica de seguridad muy valiosa.',
      },
      {
        question: '¿Cómo se cambia la extensión de un archivo de .txt a .md con pathlib?',
        options: [
          'archivo.rename(archivo.name.replace(".txt", ".md"))',
          'archivo.rename(archivo.with_suffix(".md"))',
          'archivo.change_extension(".md")',
          'archivo.suffix = ".md"',
        ],
        correctAnswer: 'archivo.rename(archivo.with_suffix(".md"))',
        correctFeedback: '¡Correcto! with_suffix() crea una nueva ruta con la extensión cambiada, manteniendo el nombre y la ubicación del archivo.',
        incorrectFeedback: 'with_suffix(".md") crea un nuevo objeto Path con la extensión cambiada. Luego rename() aplica el cambio. Es más limpio que manipular el string directamente.',
      },
      {
        question: '¿Cuál es la buena práctica más importante antes de ejecutar un renombrado masivo?',
        options: [
          'Hacer una copia de seguridad o probar con una carpeta de ejemplo primero',
          'Ejecutar el script como administrador',
          'Verificar que Python esté actualizado',
          'Cerrar todos los programas antes de ejecutar',
        ],
        correctAnswer: 'Hacer una copia de seguridad o probar con una carpeta de ejemplo primero',
        correctFeedback: '¡Correcto! Siempre prueba con archivos de ejemplo o haz un dry-run. Los errores en renombrado masivo pueden ser difíciles de revertir.',
        incorrectFeedback: 'La práctica más importante es probar primero con archivos de ejemplo o usar dry_run=True. Los errores en renombrado masivo pueden ser complicados de revertir sin una copia de seguridad.',
      },
      {
        question: 'Para agregar la fecha de hoy al nombre de un archivo "reporte.xlsx", ¿cuál es el código correcto?',
        options: [
          'archivo.rename(f"reporte_{date.today()}.xlsx")',
          'nuevo = archivo.parent / f"{archivo.stem}_{date.today().strftime(\'%Y%m%d\')}{archivo.suffix}"; archivo.rename(nuevo)',
          'archivo.add_date()',
          'archivo.rename(archivo.name + date.today())',
        ],
        correctAnswer: 'nuevo = archivo.parent / f"{archivo.stem}_{date.today().strftime(\'%Y%m%d\')}{archivo.suffix}"; archivo.rename(nuevo)',
        correctFeedback: '¡Correcto! Se construye el nuevo nombre usando .stem (sin extensión), se agrega la fecha formateada, y se vuelve a poner la extensión con .suffix.',
        incorrectFeedback: 'La forma correcta usa .stem para el nombre sin extensión, strftime para formatear la fecha, y .suffix para conservar la extensión. El resultado sería "reporte_20260115.xlsx".',
      },
      {
        question: '¿Qué verifica `if not nuevo.exists()` antes de renombrar?',
        options: [
          'Que el archivo original existe',
          'Que no existe ya un archivo con el nombre de destino, evitando sobreescribir',
          'Que la carpeta de destino existe',
          'Que el usuario tiene permisos para renombrar',
        ],
        correctAnswer: 'Que no existe ya un archivo con el nombre de destino, evitando sobreescribir',
        correctFeedback: '¡Correcto! Verificar que el destino no existe antes de renombrar evita sobreescribir accidentalmente archivos. Es una verificación de seguridad importante.',
        incorrectFeedback: 'nuevo.exists() verifica si el archivo de destino ya existe. La negación (!not) permite evitar sobreescribir archivos existentes, lo cual podría causar pérdida de datos.',
      },
    ],
  },
  {
    slug: 'mover-copiar-archivos',
    title: 'Mover y copiar archivos',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 138,
    description: 'Aprende a organizar archivos moviéndolos o copiándolos a diferentes carpetas.',
    explanation: `## Mover y copiar archivos con Python

Para mover y copiar archivos se usa la librería \`shutil\` (shell utilities), que viene incluida en Python.

### Importar shutil

\`\`\`python
import shutil
from pathlib import Path
\`\`\`

### shutil.copy(): copiar un archivo

\`\`\`python
# Copiar un archivo (no preserva metadatos)
shutil.copy("origen.txt", "destino.txt")

# Copiar a una carpeta (el archivo mantiene su nombre)
shutil.copy("reporte.xlsx", "backups/")
\`\`\`

### shutil.copy2(): copiar preservando metadatos

\`\`\`python
# copy2() preserva fechas de creación/modificación y permisos
shutil.copy2("reporte.xlsx", "backups/reporte.xlsx")
\`\`\`

**Diferencia entre copy() y copy2():**
- \`copy()\`: copia el contenido y permisos básicos
- \`copy2()\`: copia todo, incluyendo fechas de creación y modificación

### shutil.move(): mover un archivo

\`\`\`python
# Mover un archivo a otra ubicación
shutil.move("reporte.xlsx", "archivados/reporte.xlsx")

# Mover y renombrar al mismo tiempo
shutil.move("reporte_viejo.xlsx", "archivados/reporte_nuevo.xlsx")

# Mover a una carpeta (el archivo mantiene su nombre)
shutil.move("reporte.xlsx", "archivados/")
\`\`\`

### Mover archivos a carpetas organizadas

\`\`\`python
from pathlib import Path
import shutil
from datetime import date

carpeta_origen = Path("descargas")
carpeta_destino = Path("documentos_organizados")

for archivo in carpeta_origen.glob("*.pdf"):
    # Crear subcarpeta por mes si no existe
    mes = date.today().strftime("%Y-%m")
    subcarpeta = carpeta_destino / mes
    subcarpeta.mkdir(parents=True, exist_ok=True)

    shutil.move(str(archivo), str(subcarpeta / archivo.name))
    print(f"Movido: {archivo.name} -> {subcarpeta.name}/")
\`\`\`

### Copiar carpetas completas con shutil.copytree()

\`\`\`python
# Copiar una carpeta completa con todo su contenido
shutil.copytree("proyecto_v1", "proyecto_v2")

# Con ignore para excluir ciertos archivos
shutil.copytree(
    "mi_proyecto",
    "mi_proyecto_backup",
    ignore=shutil.ignore_patterns("*.pyc", "__pycache__", ".git")
)
\`\`\`

### Manejar errores frecuentes

\`\`\`python
import shutil
from pathlib import Path

def mover_seguro(origen, destino):
    """Mueve un archivo con manejo de errores."""
    origen = Path(origen)
    destino = Path(destino)

    # Verificar que el origen existe
    if not origen.exists():
        print(f"Error: {origen.name} no existe.")
        return False

    # Crear carpeta destino si no existe
    if destino.is_dir():
        destino.mkdir(parents=True, exist_ok=True)

    # Verificar si ya existe en el destino
    archivo_destino = destino / origen.name if destino.is_dir() else destino
    if archivo_destino.exists():
        print(f"Advertencia: {archivo_destino.name} ya existe en el destino.")
        return False

    shutil.move(str(origen), str(destino))
    print(f"Movido: {origen.name} -> {destino}")
    return True
\`\`\`

### pathlib.Path.rename() para mover dentro del mismo disco

\`\`\`python
# rename() también puede mover archivos si se especifica la ruta completa
# (solo funciona dentro del mismo dispositivo/disco)
Path("descargas/reporte.xlsx").rename("documentos/reporte.xlsx")

# Para mover entre discos diferentes, usa shutil.move()
\`\`\`
`,
    codeExample: `import shutil
from pathlib import Path

# Crear estructura de carpetas de prueba
base = Path("prueba_mover_copiar")
origen = base / "origen"
destino_copias = base / "copias"
destino_movidos = base / "movidos"

for carpeta in [origen, destino_copias, destino_movidos]:
    carpeta.mkdir(parents=True, exist_ok=True)

# Crear archivos de ejemplo
archivos_ejemplo = [
    ("reporte_enero.xlsx", "datos de enero"),
    ("reporte_febrero.xlsx", "datos de febrero"),
    ("presupuesto.pdf", "presupuesto"),
    ("foto.jpg", "imagen"),
    ("notas.txt", "notas importantes"),
]
for nombre, contenido in archivos_ejemplo:
    (origen / nombre).write_text(contenido)

print("Archivos en origen:")
for f in sorted(origen.iterdir()):
    print(f"  {f.name}")
print()

# ====================================
# 1. COPIAR archivos Excel
# ====================================
print("--- Copiando archivos Excel ---")
for archivo in origen.glob("*.xlsx"):
    destino_archivo = destino_copias / archivo.name
    shutil.copy2(str(archivo), str(destino_archivo))
    print(f"  Copiado: {archivo.name}")

print()

# ====================================
# 2. MOVER archivos PDF y JPG
# ====================================
print("--- Moviendo PDFs y JPGs ---")
for patron in ["*.pdf", "*.jpg"]:
    for archivo in origen.glob(patron):
        destino_archivo = destino_movidos / archivo.name
        shutil.move(str(archivo), str(destino_archivo))
        print(f"  Movido: {archivo.name}")

print()

# ====================================
# 3. Estado después de las operaciones
# ====================================
print("Estado final:")
print(f"  origen/       : {[f.name for f in sorted(origen.iterdir())]}")
print(f"  copias/       : {[f.name for f in sorted(destino_copias.iterdir())]}")
print(f"  movidos/      : {[f.name for f in sorted(destino_movidos.iterdir())]}")
print()

# ====================================
# 4. Copiar toda la carpeta
# ====================================
print("--- Copiando carpeta completa ---")
backup = base / "backup_completo"
if backup.exists():
    shutil.rmtree(backup)  # Eliminar si existe para poder copiar
shutil.copytree(str(origen), str(backup))
print(f"  Carpeta copiada a: {backup}")
print(f"  Archivos en backup: {[f.name for f in sorted(backup.iterdir())]}")

# Limpieza
shutil.rmtree(base)
print()
print("(Archivos de prueba eliminados)")
`,
    keyPoints: [
      'shutil.copy() copia un archivo; shutil.copy2() copia preservando metadatos (fechas, permisos)',
      'shutil.move() mueve un archivo, puede moverlo y renombrarlo simultáneamente',
      'shutil.copytree() copia una carpeta completa con todo su contenido',
      'Siempre crear la carpeta destino antes de mover: mkdir(parents=True, exist_ok=True)',
      'Verificar si el archivo ya existe en destino antes de mover para evitar sobreescribir',
      'Path.rename() también puede mover archivos pero solo dentro del mismo disco',
    ],
    exercise: {
      description: 'Crea un script que organice archivos de una carpeta de prueba: mueve los archivos .xlsx a una subcarpeta "Excel", los .pdf a "PDFs", y copia (no mueve) los .txt a una subcarpeta "Respaldos_Texto". Antes de mover/copiar, verifica que la carpeta destino existe y créala si no.',
      hint: 'Usa mkdir(parents=True, exist_ok=True) para crear las carpetas destino sin errores. Para copiar usa shutil.copy2(), para mover usa shutil.move(). Recuerda convertir los Path a str() para estas funciones o usa Path directamente (funciona en Python 3.6+).',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre shutil.copy() y shutil.copy2()?',
        options: [
          'copy() es más rápido que copy2()',
          'copy2() preserva las fechas de creación y modificación del archivo original',
          'copy() funciona con carpetas, copy2() solo con archivos',
          'copy2() requiere permisos de administrador',
        ],
        correctAnswer: 'copy2() preserva las fechas de creación y modificación del archivo original',
        correctFeedback: '¡Correcto! copy2() es como copiar en el explorador de archivos con "preservar timestamps". Útil para backups donde la fecha de modificación importa.',
        incorrectFeedback: 'copy2() preserva los metadatos del archivo, incluyendo fechas de creación y modificación. copy() solo copia el contenido y permisos básicos.',
      },
      {
        question: '¿Qué librería de Python se usa para mover y copiar archivos?',
        options: ['pathlib', 'os', 'shutil', 'fileops'],
        correctAnswer: 'shutil',
        correctFeedback: '¡Correcto! shutil (shell utilities) es la librería estándar de Python para operaciones de alto nivel con archivos: copiar, mover, eliminar carpetas.',
        incorrectFeedback: 'shutil es la librería correcta para mover y copiar archivos. pathlib y os también tienen capacidades de archivos pero shutil es la especializada para estas operaciones.',
      },
      {
        question: '¿Cómo se copia una carpeta completa con todo su contenido?',
        options: [
          'shutil.copy("carpeta_origen", "carpeta_destino")',
          'shutil.copytree("carpeta_origen", "carpeta_destino")',
          'Path("carpeta_origen").copy_to("carpeta_destino")',
          'shutil.move("carpeta_origen", "carpeta_destino")',
        ],
        correctAnswer: 'shutil.copytree("carpeta_origen", "carpeta_destino")',
        correctFeedback: '¡Correcto! copytree() copia recursivamente una carpeta con todo su contenido (archivos y subcarpetas).',
        incorrectFeedback: 'shutil.copytree() es la función específica para copiar carpetas completas. copy() solo funciona con archivos individuales.',
      },
      {
        question: '¿Cuál es el parámetro correcto para crear una carpeta destino si no existe, sin error si ya existe?',
        options: [
          'carpeta.mkdir(force=True)',
          'carpeta.mkdir(parents=True, exist_ok=True)',
          'carpeta.create(ignore_existing=True)',
          'os.makedirs(carpeta, safe=True)',
        ],
        correctAnswer: 'carpeta.mkdir(parents=True, exist_ok=True)',
        correctFeedback: '¡Correcto! parents=True crea también las carpetas padre necesarias. exist_ok=True evita el error si la carpeta ya existe.',
        incorrectFeedback: 'mkdir(parents=True, exist_ok=True) es la combinación correcta. parents=True crea carpetas intermedias, exist_ok=True no lanza error si ya existe.',
      },
      {
        question: '¿En qué caso shutil.move() es preferible a Path.rename()?',
        options: [
          'Siempre es preferible usar shutil.move()',
          'Cuando se mueve entre diferentes discos o dispositivos',
          'Cuando el archivo es mayor de 1 GB',
          'Cuando se quiere conservar el nombre del archivo',
        ],
        correctAnswer: 'Cuando se mueve entre diferentes discos o dispositivos',
        correctFeedback: '¡Correcto! Path.rename() solo funciona dentro del mismo disco. shutil.move() puede mover entre discos diferentes, haciendo una copia y eliminando el original.',
        incorrectFeedback: 'Path.rename() falla al mover entre discos distintos (C: a D:, por ejemplo). shutil.move() maneja este caso correctamente, copiando el archivo al destino y eliminando el original.',
      },
      {
        question: '¿Qué hace shutil.ignore_patterns("*.pyc", "__pycache__") en copytree()?',
        options: [
          'Elimina esos archivos del destino después de copiar',
          'Excluye esos archivos y carpetas de la copia',
          'Solo copia los archivos que coincidan con esos patrones',
          'Renombra esos archivos durante la copia',
        ],
        correctAnswer: 'Excluye esos archivos y carpetas de la copia',
        correctFeedback: '¡Correcto! ignore_patterns() crea una función de filtro que excluye los archivos que coincidan con los patrones dados. Útil para no copiar archivos compilados o temporales.',
        incorrectFeedback: 'ignore_patterns() especifica qué NO copiar. Los archivos .pyc y carpetas __pycache__ son archivos temporales de Python que generalmente no se quieren en las copias.',
      },
      {
        question: 'Al usar shutil.move(), ¿qué pasa si el archivo de destino ya existe?',
        options: [
          'Lanza un error y no mueve el archivo',
          'Pregunta al usuario qué hacer',
          'Sobreescribe el archivo de destino sin advertencia',
          'Crea una copia con nombre alternativo',
        ],
        correctAnswer: 'Sobreescribe el archivo de destino sin advertencia',
        correctFeedback: '¡Correcto! shutil.move() sobreescribe silenciosamente. Por eso es importante verificar si el destino existe antes de mover cuando los datos son importantes.',
        incorrectFeedback: 'shutil.move() sobreescribe el destino sin preguntar. Esta es una razón importante para verificar la existencia del destino con archivo_destino.exists() antes de mover.',
      },
    ],
  },
  {
    slug: 'clasificar-archivos',
    title: 'Clasificar archivos por tipo',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 139,
    description: 'Aprende a crear un script que organice archivos según su extensión.',
    explanation: `## Clasificar archivos por tipo con Python

Organizar archivos por extensión es una de las tareas de automatización más útiles. ¿Tu carpeta de Descargas está llena de archivos mezclados? Python puede organizarlos en segundos.

### Diseño del clasificador

La estrategia es simple:
1. Definir un diccionario que mapea extensiones a nombres de carpeta
2. Iterar sobre todos los archivos de la carpeta
3. Para cada archivo, identificar a qué carpeta corresponde
4. Crear la carpeta destino si no existe
5. Mover el archivo

### Diccionario de clasificación

\`\`\`python
CATEGORIAS = {
    # Documentos
    ".pdf": "PDFs",
    ".docx": "Documentos",
    ".doc": "Documentos",
    ".txt": "Texto",
    ".xlsx": "Excel",
    ".xls": "Excel",
    ".pptx": "Presentaciones",
    # Imágenes
    ".jpg": "Imágenes",
    ".jpeg": "Imágenes",
    ".png": "Imágenes",
    ".gif": "Imágenes",
    ".svg": "Imágenes",
    # Audio y video
    ".mp3": "Música",
    ".wav": "Música",
    ".mp4": "Videos",
    ".avi": "Videos",
    # Código
    ".py": "Código",
    ".js": "Código",
    ".html": "Código",
    ".css": "Código",
    # Comprimidos
    ".zip": "Comprimidos",
    ".rar": "Comprimidos",
    ".7z": "Comprimidos",
}
CATEGORIA_OTROS = "Otros"
\`\`\`

### El clasificador completo

\`\`\`python
import shutil
from pathlib import Path

def clasificar_carpeta(carpeta, categorias, dry_run=True):
    """
    Clasifica los archivos de una carpeta por tipo.
    dry_run=True: solo muestra qué haría, no hace cambios.
    """
    carpeta = Path(carpeta)
    movidos = 0
    sin_clasificar = []

    for archivo in carpeta.iterdir():
        if archivo.is_dir():
            continue  # Saltar subcarpetas

        extension = archivo.suffix.lower()
        categoria = categorias.get(extension, "Otros")
        destino = carpeta / categoria

        print(f"  {archivo.name} -> {categoria}/")

        if not dry_run:
            destino.mkdir(exist_ok=True)
            if not (destino / archivo.name).exists():
                shutil.move(str(archivo), str(destino / archivo.name))
                movidos += 1
            else:
                print(f"    OMITIDO: ya existe en {categoria}/")

        if categoria == "Otros":
            sin_clasificar.append(archivo.name)

    return movidos, sin_clasificar
\`\`\`

### Cómo manejar extensiones desconocidas

\`\`\`python
# Opción 1: Mover a carpeta "Otros"
categoria = categorias.get(extension, "Otros")

# Opción 2: Ignorar archivos sin categoría
if extension not in categorias:
    print(f"Sin categoría: {archivo.name} (extensión: {extension})")
    continue

# Opción 3: Mover a carpeta por extensión (sin nombre amigable)
categoria = categorias.get(extension) or f"Tipo_{extension[1:].upper()}"
\`\`\`

### Cómo evitar mover archivos ya organizados

Si la carpeta ya tiene subcarpetas de categorías, hay que evitar mover archivos que ya están dentro de esas subcarpetas:

\`\`\`python
for archivo in carpeta.iterdir():
    if archivo.is_dir():
        continue  # Saltar las subcarpetas de categorías

    # Solo procesar archivos en la raíz de la carpeta
    if archivo.parent == carpeta:
        # Este archivo está en la raíz, clasificar
        procesar(archivo)
\`\`\`
`,
    codeExample: `import shutil
from pathlib import Path

# Diccionario de clasificación
CATEGORIAS = {
    ".pdf": "PDFs",
    ".docx": "Documentos",
    ".doc": "Documentos",
    ".txt": "Texto",
    ".xlsx": "Excel",
    ".xls": "Excel",
    ".jpg": "Imágenes",
    ".jpeg": "Imágenes",
    ".png": "Imágenes",
    ".mp3": "Música",
    ".mp4": "Videos",
    ".py": "Código",
    ".zip": "Comprimidos",
}

def clasificar_carpeta(carpeta_path, dry_run=True):
    """
    Organiza los archivos de una carpeta según su extensión.
    """
    carpeta = Path(carpeta_path)
    modo = "SIMULACIÓN" if dry_run else "EJECUTANDO"
    print(f"[{modo}] Clasificando archivos en: {carpeta}")
    print("-" * 50)

    resumen = {}
    archivos_procesados = 0

    for archivo in sorted(carpeta.iterdir()):
        # Saltar carpetas (incluyendo las de categorías ya creadas)
        if archivo.is_dir():
            continue

        extension = archivo.suffix.lower()
        categoria = CATEGORIAS.get(extension, "Otros")
        destino_carpeta = carpeta / categoria

        print(f"  {archivo.name:35s} -> {categoria}/")

        # Contabilizar para el resumen
        resumen[categoria] = resumen.get(categoria, 0) + 1
        archivos_procesados += 1

        if not dry_run:
            # Crear la carpeta de destino si no existe
            destino_carpeta.mkdir(exist_ok=True)

            # Mover el archivo si no existe ya en destino
            destino_archivo = destino_carpeta / archivo.name
            if not destino_archivo.exists():
                shutil.move(str(archivo), str(destino_archivo))
            else:
                print(f"    OMITIDO: {archivo.name} ya existe en {categoria}/")

    print()
    print(f"Total de archivos: {archivos_procesados}")
    print("Resumen por categoría:")
    for cat, cantidad in sorted(resumen.items()):
        print(f"  {cat:20s}: {cantidad} archivo(s)")

    if dry_run:
        print()
        print("→ Ejecuta con dry_run=False para aplicar los cambios.")

    return resumen

# =====================================
# DEMO: crear una carpeta de prueba
# =====================================

demo_carpeta = Path("demo_clasificador")
demo_carpeta.mkdir(exist_ok=True)

archivos_prueba = [
    ("informe_anual.pdf", "pdf content"),
    ("presupuesto.xlsx", "excel content"),
    ("notas.txt", "texto"),
    ("foto_vacaciones.jpg", "imagen"),
    ("cancion.mp3", "audio"),
    ("video_reunion.mp4", "video"),
    ("script.py", "python code"),
    ("datos.csv", "csv content"),  # extensión no en el diccionario -> Otros
    ("archivo_raro.xyz", "desconocido"),
    ("reporte_ventas.xlsx", "excel content"),
    ("foto2.jpeg", "imagen2"),
]

for nombre, contenido in archivos_prueba:
    (demo_carpeta / nombre).write_text(contenido)

print("Archivos iniciales en la carpeta:")
for f in sorted(demo_carpeta.iterdir()):
    print(f"  {f.name}")
print()

# Primero: simulación
print("=== PASO 1: SIMULACIÓN (sin cambios) ===")
clasificar_carpeta(demo_carpeta, dry_run=True)
print()

# Luego: ejecución real
print("=== PASO 2: CLASIFICANDO DE VERDAD ===")
clasificar_carpeta(demo_carpeta, dry_run=False)
print()

# Ver resultado
print("Estructura después de clasificar:")
for elemento in sorted(demo_carpeta.iterdir()):
    if elemento.is_dir():
        print(f"  {elemento.name}/")
        for f in sorted(elemento.iterdir()):
            print(f"    {f.name}")

# Limpiar
shutil.rmtree(demo_carpeta)
print()
print("(Carpeta de demo eliminada)")
`,
    keyPoints: [
      'Un diccionario que mapea extensiones a nombres de carpeta es el corazón del clasificador',
      'extension.suffix.lower() normaliza la extensión para evitar problemas con mayúsculas',
      'dict.get(extension, "Otros") devuelve "Otros" si la extensión no está en el diccionario',
      'Saltarse subcarpetas con is_dir() evita procesar archivos ya clasificados',
      'mkdir(exist_ok=True) crea la carpeta destino sin error si ya existe',
      'Siempre ejecutar primero con dry_run=True para revisar los cambios antes de aplicarlos',
    ],
    exercise: {
      description: 'Mejora el clasificador para que organice archivos por año de modificación además de por tipo. El resultado debe ser una estructura como: Excel/2025/, Excel/2026/, PDFs/2025/, etc. Usa archivo.stat().st_mtime y datetime.fromtimestamp() para obtener el año.',
      hint: 'Calcula el año con: año = datetime.fromtimestamp(archivo.stat().st_mtime).year. Construye la carpeta destino con: destino = carpeta / categoria / str(año). Luego destino.mkdir(parents=True, exist_ok=True).',
    },
    quiz: [
      {
        question: '¿Por qué se usa extension.lower() al buscar en el diccionario de categorías?',
        options: [
          'Para evitar errores de codificación con caracteres especiales',
          'Para normalizar extensiones como .JPG, .Jpg, .jpg a la misma clave .jpg',
          'Porque los diccionarios de Python solo aceptan claves en minúsculas',
          'Para mejorar el rendimiento de búsqueda',
        ],
        correctAnswer: 'Para normalizar extensiones como .JPG, .Jpg, .jpg a la misma clave .jpg',
        correctFeedback: '¡Correcto! Los sistemas de archivos a veces tienen extensiones en mayúsculas (.JPG) o mixtas (.Jpg). lower() asegura que todas se traten igual.',
        incorrectFeedback: 'lower() normaliza la extensión. Sin él, .jpg y .JPG se tratarían como extensiones diferentes. Con lower(), ".JPG".lower() = ".jpg" y se clasifica correctamente.',
      },
      {
        question: '¿Para qué sirve el valor por defecto en categorias.get(extension, "Otros")?',
        options: [
          'Para asignar la extensión como nombre de carpeta si no está en el diccionario',
          'Para devolver "Otros" cuando la extensión no está registrada en el diccionario',
          'Para crear automáticamente una nueva entrada en el diccionario',
          'Para ignorar el archivo si no tiene extensión registrada',
        ],
        correctAnswer: 'Para devolver "Otros" cuando la extensión no está registrada en el diccionario',
        correctFeedback: '¡Correcto! dict.get(clave, valor_por_defecto) devuelve el valor_por_defecto si la clave no existe. Así los archivos con extensiones desconocidas van a "Otros".',
        incorrectFeedback: 'dict.get(key, default) devuelve el default cuando la clave no existe. En este caso, extensiones no registradas van a la categoría "Otros" en lugar de causar un KeyError.',
      },
      {
        question: '¿Por qué el bucle principal salta elementos con `if archivo.is_dir(): continue`?',
        options: [
          'Porque las carpetas no tienen extensión',
          'Para no procesar las subcarpetas de categorías que ya se crearon',
          'Porque shutil.move() no puede mover carpetas',
          'Por razones de rendimiento',
        ],
        correctAnswer: 'Para no procesar las subcarpetas de categorías que ya se crearon',
        correctFeedback: '¡Correcto! Cuando el clasificador crea las carpetas "PDFs/", "Excel/", etc., esas carpetas aparecerían en iterdir(). Saltarlas evita intentar "clasificar" las propias carpetas de destino.',
        incorrectFeedback: 'Al ejecutarse, el clasificador crea subcarpetas (Excel/, PDFs/, etc.) dentro de la carpeta. is_dir() con continue evita que el script intente "clasificar" esas mismas subcarpetas que creó.',
      },
      {
        question: '¿Qué pasa si un archivo de la misma categoría ya fue movido en una ejecución anterior?',
        options: [
          'Python lanza un FileExistsError automáticamente',
          'Se verifica con `if not destino_archivo.exists()` y se omite si ya existe',
          'shutil.move() lo sobreescribe sin aviso',
          'El archivo se renombra con un número al final',
        ],
        correctAnswer: 'Se verifica con `if not destino_archivo.exists()` y se omite si ya existe',
        correctFeedback: '¡Correcto! La verificación `if not destino_archivo.exists()` evita sobreescribir archivos ya movidos y muestra un mensaje "OMITIDO".',
        incorrectFeedback: 'La verificación explícita `if not (destino / archivo.name).exists()` protege contra sobreescribir. Si el archivo ya fue movido antes, se omite con un mensaje informativo.',
      },
      {
        question: 'Un archivo "foto.PNG" (en mayúsculas), ¿en qué categoría quedaría con el diccionario del ejemplo?',
        options: [
          'En "Otros" porque .PNG no está en el diccionario',
          'En "Imágenes" porque suffix.lower() convierte ".PNG" a ".png"',
          'Lanzaría un error porque la extensión tiene mayúsculas',
          'No se procesaría porque el clasificador ignora extensiones en mayúsculas',
        ],
        correctAnswer: 'En "Imágenes" porque suffix.lower() convierte ".PNG" a ".png"',
        correctFeedback: '¡Correcto! archivo.suffix devuelve ".PNG" pero .lower() lo convierte a ".png", que sí está en el diccionario como categoría "Imágenes".',
        incorrectFeedback: 'Gracias a extension.lower(), ".PNG" se convierte en ".png" antes de buscar en el diccionario. Por eso la foto va a "Imágenes" sin importar si la extensión está en mayúsculas.',
      },
      {
        question: '¿Cuál es la mejor práctica al desarrollar un clasificador de archivos?',
        options: [
          'Ejecutarlo directamente en la carpeta de producción para ahorrar tiempo',
          'Primero ejecutar con dry_run=True para revisar los cambios, luego con dry_run=False',
          'Crear el script y ejecutarlo sin revisión en archivos de prueba',
          'Usar siempre shutil.copy() en lugar de move() para no perder archivos',
        ],
        correctAnswer: 'Primero ejecutar con dry_run=True para revisar los cambios, luego con dry_run=False',
        correctFeedback: '¡Correcto! El modo dry_run es esencial para verificar que el clasificador funciona como esperas antes de mover archivos reales. Siempre simulación primero.',
        incorrectFeedback: 'Siempre simula primero con dry_run=True. Esto te permite ver exactamente qué va a pasar sin riesgo. Solo ejecuta con dry_run=False cuando estés seguro del resultado.',
      },
      {
        question: '¿Cómo se determina a qué categoría pertenece un archivo con extensión ".csv" si no está en el diccionario?',
        options: [
          'El script lanza un KeyError',
          'CATEGORIAS.get(".csv", "Otros") devuelve "Otros"',
          'El archivo se ignora automáticamente',
          'Se crea una categoría ".csv" automáticamente',
        ],
        correctAnswer: 'CATEGORIAS.get(".csv", "Otros") devuelve "Otros"',
        correctFeedback: '¡Correcto! El segundo argumento de .get() es el valor por defecto cuando la clave no existe. ".csv" no está en CATEGORIAS, así que devuelve "Otros".',
        incorrectFeedback: 'dict.get(key, default) nunca lanza KeyError. Cuando ".csv" no está en el diccionario, devuelve el valor por defecto "Otros". El archivo termina en la carpeta "Otros/".',
      },
    ],
  },
  {
    slug: 'buscar-archivos',
    title: 'Buscar archivos específicos',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 140,
    description: 'Aprende a buscar archivos por nombre, extensión o patrón.',
    explanation: `## Buscar archivos específicos con Python

pathlib hace que buscar archivos sea intuitivo y potente. Puedes combinar patrones, tamaño, fechas y más.

### Búsqueda con glob() y rglob()

\`\`\`python
from pathlib import Path

carpeta = Path("mis_documentos")

# Por extensión
for f in carpeta.glob("*.pdf"):
    print(f.name)

# Recursivo (en subcarpetas también)
for f in carpeta.rglob("*.csv"):
    print(f)

# Por patrón de nombre
for f in carpeta.glob("reporte_*.xlsx"):
    print(f.name)

# Todos los archivos Excel en subcarpetas
for f in carpeta.glob("**/*.xlsx"):
    print(f.relative_to(carpeta))
\`\`\`

### Patrones de búsqueda más usados

| Patrón | Qué busca |
|--------|-----------|
| \`*.pdf\` | Todos los archivos PDF |
| \`report_*\` | Archivos que empiezan con "report_" |
| \`*_2026.*\` | Archivos que contienen "_2026" |
| \`**/*.csv\` | Todos los CSV en cualquier subcarpeta |
| \`datos_??.xlsx\` | datos_01.xlsx, datos_AB.xlsx, etc. |

### Buscar por nombre que contiene una palabra

\`\`\`python
def buscar_por_nombre(carpeta, palabra):
    """Busca archivos cuyo nombre contiene la palabra."""
    resultados = []
    for archivo in Path(carpeta).rglob("*"):
        if archivo.is_file() and palabra.lower() in archivo.name.lower():
            resultados.append(archivo)
    return resultados

encontrados = buscar_por_nombre("documentos", "factura")
for f in encontrados:
    print(f)
\`\`\`

### Buscar por tamaño

\`\`\`python
def buscar_por_tamano(carpeta, min_mb=None, max_mb=None):
    """Busca archivos por tamaño en MB."""
    resultados = []
    for archivo in Path(carpeta).rglob("*"):
        if not archivo.is_file():
            continue
        tamanio_mb = archivo.stat().st_size / (1024 * 1024)
        if min_mb and tamanio_mb < min_mb:
            continue
        if max_mb and tamanio_mb > max_mb:
            continue
        resultados.append((archivo, tamanio_mb))
    return sorted(resultados, key=lambda x: x[1], reverse=True)

# Archivos mayores de 5 MB
grandes = buscar_por_tamano("mis_archivos", min_mb=5)
for archivo, mb in grandes:
    print(f"{archivo.name}: {mb:.1f} MB")
\`\`\`

### Buscar por fecha de modificación

\`\`\`python
import datetime

def buscar_por_fecha(carpeta, dias_atras=7):
    """Busca archivos modificados en los últimos N días."""
    ahora = datetime.datetime.now()
    limite = ahora - datetime.timedelta(days=dias_atras)

    for archivo in Path(carpeta).rglob("*"):
        if not archivo.is_file():
            continue
        modificado = datetime.datetime.fromtimestamp(archivo.stat().st_mtime)
        if modificado >= limite:
            print(f"{archivo.name} - modificado: {modificado.strftime('%d/%m/%Y %H:%M')}")

# Archivos modificados en los últimos 3 días
buscar_por_fecha("documentos", dias_atras=3)
\`\`\`

### Función de búsqueda combinada

\`\`\`python
def buscar_archivos(carpeta, extension=None, nombre_contiene=None, min_mb=None, dias_recientes=None):
    """Búsqueda con múltiples criterios combinados."""
    patron = f"**/*.{extension}" if extension else "**/*"
    resultados = []

    for archivo in Path(carpeta).glob(patron):
        if not archivo.is_file():
            continue

        if nombre_contiene and nombre_contiene.lower() not in archivo.name.lower():
            continue

        if min_mb:
            tamanio_mb = archivo.stat().st_size / (1024 * 1024)
            if tamanio_mb < min_mb:
                continue

        if dias_recientes:
            dias = (datetime.datetime.now() -
                    datetime.datetime.fromtimestamp(archivo.stat().st_mtime)).days
            if dias > dias_recientes:
                continue

        resultados.append(archivo)

    return resultados
\`\`\`
`,
    codeExample: `from pathlib import Path
import datetime
import shutil

# Crear estructura de prueba
base = Path("busqueda_demo")
base.mkdir(exist_ok=True)

subcarpetas = ["proyectos/alpha", "proyectos/beta", "reportes/2025", "reportes/2026"]
for sub in subcarpetas:
    (base / sub).mkdir(parents=True, exist_ok=True)

archivos = [
    ("reporte_ventas_enero.xlsx", "proyectos/alpha"),
    ("reporte_ventas_febrero.xlsx", "proyectos/alpha"),
    ("factura_001.pdf", "proyectos/beta"),
    ("factura_002.pdf", "proyectos/beta"),
    ("resumen_2025.xlsx", "reportes/2025"),
    ("datos_clientes.csv", "reportes/2025"),
    ("reporte_anual_2026.pdf", "reportes/2026"),
    ("presupuesto_2026.xlsx", "reportes/2026"),
    ("foto.jpg", ""),
    ("notas.txt", ""),
]

for nombre, sub in archivos:
    ruta = base / sub / nombre if sub else base / nombre
    contenido = "x" * (500 if nombre.endswith(".xlsx") else 100)
    ruta.write_text(contenido)

print("Estructura creada.")
print()

# ====================================
# 1. BÚSQUEDA POR EXTENSIÓN
# ====================================
print("=== PDF encontrados (rglob) ===")
for f in sorted(base.rglob("*.pdf")):
    print(f"  {f.relative_to(base)}")

print()

# ====================================
# 2. BÚSQUEDA POR PATRÓN DE NOMBRE
# ====================================
print("=== Archivos que empiezan con 'reporte_' ===")
for f in sorted(base.rglob("reporte_*")):
    if f.is_file():
        print(f"  {f.relative_to(base)}")

print()

# ====================================
# 3. BÚSQUEDA POR NOMBRE CON PALABRA
# ====================================
def buscar_por_palabra(carpeta, palabra):
    return [
        f for f in Path(carpeta).rglob("*")
        if f.is_file() and palabra.lower() in f.name.lower()
    ]

print("=== Archivos que contienen 'factura' ===")
for f in buscar_por_palabra(base, "factura"):
    print(f"  {f.relative_to(base)}")

print()

# ====================================
# 4. BÚSQUEDA POR TAMAÑO
# ====================================
print("=== Archivos más grandes (por tamaño) ===")
archivos_con_tamano = [
    (f, f.stat().st_size)
    for f in base.rglob("*")
    if f.is_file()
]
for f, tam in sorted(archivos_con_tamano, key=lambda x: x[1], reverse=True)[:4]:
    print(f"  {f.name:35s} {tam} bytes")

print()

# ====================================
# 5. BÚSQUEDA COMBINADA
# ====================================
def buscar(carpeta, extension=None, contiene=None):
    patron = f"**/*.{extension}" if extension else "**/*"
    return [
        f for f in Path(carpeta).glob(patron)
        if f.is_file()
        and (contiene is None or contiene.lower() in f.name.lower())
    ]

print("=== Excel con '2026' en el nombre ===")
for f in buscar(base, extension="xlsx", contiene="2026"):
    print(f"  {f.relative_to(base)}")

# Limpieza
shutil.rmtree(base)
print()
print("(Archivos de demo eliminados)")
`,
    keyPoints: [
      'glob() busca en la carpeta actual; rglob() busca recursivamente en subcarpetas',
      'Los patrones soportan comodines: * (cualquier cadena), ? (un carácter)',
      '**/*.xlsx busca todos los archivos Excel en cualquier nivel de subcarpeta',
      'Para buscar por nombre, itera con rglob("*") y filtra con `palabra in archivo.name.lower()`',
      'stat().st_size da el tamaño en bytes; dividir entre 1024*1024 lo convierte a MB',
      'Para búsquedas complejas, combina múltiples criterios en una función reutilizable',
    ],
    exercise: {
      description: 'Crea una función buscar_duplicados(carpeta) que encuentre archivos con el mismo nombre pero en carpetas diferentes. Devuelve un diccionario donde las claves son los nombres de archivo y los valores son listas de rutas donde se encontraron. Solo incluye en el resultado los nombres que aparecen en más de una ubicación.',
      hint: 'Usa un diccionario para agrupar: por_nombre = {}. Para cada archivo encontrado con rglob("*"), agrega su ruta: por_nombre.setdefault(archivo.name, []).append(archivo). Al final, filtra el diccionario para quedarte solo con los que tienen len(rutas) > 1.',
    },
    quiz: [
      {
        question: '¿Qué patrón usarías para encontrar todos los archivos Excel en cualquier subcarpeta?',
        options: [
          'carpeta.glob("*.xlsx")',
          'carpeta.glob("**/*.xlsx") o carpeta.rglob("*.xlsx")',
          'carpeta.find("*.xlsx")',
          'carpeta.search(recursive=True, ext=".xlsx")',
        ],
        correctAnswer: 'carpeta.glob("**/*.xlsx") o carpeta.rglob("*.xlsx")',
        correctFeedback: '¡Correcto! Ambas formas son equivalentes para búsqueda recursiva. rglob("*.xlsx") es la forma abreviada de glob("**/*.xlsx").',
        incorrectFeedback: '**/*.xlsx es el patrón recursivo en glob(). rglob("*.xlsx") es la forma abreviada. Ambas buscan en la carpeta actual y en todas sus subcarpetas.',
      },
      {
        question: '¿Qué comodín en los patrones de glob coincide con exactamente un carácter?',
        options: ['*', '?', '#', '+'],
        correctAnswer: '?',
        correctFeedback: '¡Correcto! ? coincide con exactamente un carácter. datos_??.xlsx coincidiría con datos_01.xlsx, datos_AB.xlsx, pero no con datos_1.xlsx.',
        incorrectFeedback: '? es el comodín de un solo carácter en glob. * coincide con cualquier cantidad de caracteres (incluyendo cero). Ejemplo: datos_??.xlsx → datos_01.xlsx.',
      },
      {
        question: 'Para buscar archivos cuyo nombre contiene "factura" (ignorando mayúsculas), ¿qué condición se usa?',
        options: [
          '"factura" == archivo.name',
          '"factura" in archivo.name',
          '"factura".lower() in archivo.name.lower()',
          'archivo.name.contains("factura")',
        ],
        correctAnswer: '"factura".lower() in archivo.name.lower()',
        correctFeedback: '¡Correcto! Al convertir ambos a lower(), se detectan "Factura", "FACTURA", "factura" de la misma forma. El operador `in` verifica si la palabra está contenida en el nombre.',
        incorrectFeedback: '"factura".lower() in archivo.name.lower() convierte todo a minúsculas antes de comparar, así detecta variantes de mayúsculas/minúsculas. El operador `in` busca subcadena en string.',
      },
      {
        question: '¿Cómo se convierte el tamaño de bytes a megabytes?',
        options: [
          'tamanio_mb = bytes / 1000',
          'tamanio_mb = bytes / 1024',
          'tamanio_mb = bytes / (1024 * 1024)',
          'tamanio_mb = bytes / 1000000',
        ],
        correctAnswer: 'tamanio_mb = bytes / (1024 * 1024)',
        correctFeedback: '¡Correcto! 1 KB = 1024 bytes, 1 MB = 1024 KB = 1024 × 1024 bytes. Por tanto: MB = bytes / 1048576.',
        incorrectFeedback: '1 MB = 1024 × 1024 bytes = 1,048,576 bytes. Para convertir: tamanio_mb = archivo.stat().st_size / (1024 * 1024). Dividir entre 1000000 sería MB en sistema decimal (SI).',
      },
      {
        question: '¿Qué devuelve archivo.relative_to(carpeta_base)?',
        options: [
          'El nombre del archivo sin extensión',
          'La ruta relativa del archivo respecto a la carpeta base',
          'La ruta absoluta del archivo',
          'El tamaño relativo comparado con otros archivos',
        ],
        correctAnswer: 'La ruta relativa del archivo respecto a la carpeta base',
        correctFeedback: '¡Correcto! Si el archivo está en base/proyectos/alpha/reporte.xlsx, entonces archivo.relative_to(base) devuelve proyectos/alpha/reporte.xlsx.',
        incorrectFeedback: 'relative_to() devuelve la ruta relativa eliminando el prefijo de la carpeta base. Es útil para mostrar rutas más legibles en lugar de rutas absolutas completas.',
      },
      {
        question: 'Para buscar archivos modificados en los últimos 7 días, ¿qué cálculo se hace?',
        options: [
          'archivo.stat().st_mtime > 7',
          'datetime.now() - timedelta(days=7) <= datetime.fromtimestamp(archivo.stat().st_mtime)',
          'archivo.age() < 7',
          'archivo.stat().st_mtime - time.time() < 604800',
        ],
        correctAnswer: 'datetime.now() - timedelta(days=7) <= datetime.fromtimestamp(archivo.stat().st_mtime)',
        correctFeedback: '¡Correcto! Se calcula la fecha límite (hace 7 días) y se compara con la fecha de modificación del archivo convertida a datetime.',
        incorrectFeedback: 'Se usa timedelta(days=7) para obtener la fecha de hace 7 días, y fromtimestamp() para convertir st_mtime a datetime comparable. Si la modificación es posterior al límite, el archivo es reciente.',
      },
      {
        question: '¿Cuál es la ventaja de encapsular la búsqueda en una función con múltiples parámetros opcionales?',
        options: [
          'Las funciones con muchos parámetros son más rápidas',
          'Permite combinar criterios de búsqueda de forma flexible sin duplicar código',
          'Python requiere que las búsquedas estén en funciones',
          'Los parámetros opcionales mejoran automáticamente el rendimiento',
        ],
        correctAnswer: 'Permite combinar criterios de búsqueda de forma flexible sin duplicar código',
        correctFeedback: '¡Correcto! Una función buscar(extension=None, contiene=None, min_mb=None) permite buscar solo por extensión, solo por nombre, por ambos, o por todos los criterios a la vez.',
        incorrectFeedback: 'Los parámetros opcionales (con valor None por defecto) permiten activar o desactivar criterios. Así una sola función maneja búsquedas simples y complejas sin código duplicado.',
      },
    ],
  },
  {
    slug: 'eliminar-archivos-cuidado',
    title: 'Eliminar archivos con cuidado',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 141,
    description: 'Aprende a eliminar archivos de forma segura y evitar errores peligrosos.',
    explanation: `## Eliminar archivos con cuidado

> **ADVERTENCIA IMPORTANTE**: Antes de eliminar archivos automáticamente con Python, prueba siempre con una carpeta de ejemplo o usa un modo de simulación (dry_run). Python elimina archivos **permanentemente** — no van a la Papelera de reciclaje.

### Métodos de eliminación en Python

**Para archivos individuales:**
\`\`\`python
from pathlib import Path

archivo = Path("archivo_a_eliminar.txt")
archivo.unlink()  # Elimina el archivo
\`\`\`

**Para carpetas vacías:**
\`\`\`python
carpeta = Path("carpeta_vacia")
carpeta.rmdir()  # Solo funciona si la carpeta está vacía
\`\`\`

**Para carpetas con contenido (¡PELIGROSO!):**
\`\`\`python
import shutil

# PELIGRO: elimina la carpeta y TODO su contenido sin confirmación
shutil.rmtree("carpeta_con_archivos")
\`\`\`

### Patrón dry-run para eliminación

\`\`\`python
def eliminar_archivos(carpeta, patron, dry_run=True):
    """Elimina archivos con opción de simulación."""
    archivos = list(Path(carpeta).glob(patron))

    modo = "SIMULACIÓN" if dry_run else "ELIMINANDO"
    print(f"[{modo}] {len(archivos)} archivos encontrados:")

    for archivo in archivos:
        tamanio_kb = archivo.stat().st_size / 1024
        print(f"  {'(borrar)' if not dry_run else '(simular)'} {archivo.name} ({tamanio_kb:.1f} KB)")
        if not dry_run:
            archivo.unlink()

    if dry_run:
        print("\\nEjecuta con dry_run=False para eliminar realmente.")
\`\`\`

### Estrategia más segura: mover a una carpeta "Papelera"

En lugar de eliminar directamente, mueve los archivos a una carpeta temporal:

\`\`\`python
import shutil
from pathlib import Path
from datetime import datetime

def mover_a_papelera(archivo, carpeta_papelera="papelera_python"):
    """Mueve el archivo a una papelera en lugar de eliminar."""
    papelera = Path(carpeta_papelera)
    papelera.mkdir(exist_ok=True)

    destino = papelera / f"{datetime.now().strftime('%Y%m%d_%H%M%S')}_{archivo.name}"
    shutil.move(str(archivo), str(destino))
    print(f"Movido a papelera: {archivo.name} -> {destino.name}")
\`\`\`

Ventaja: puedes recuperar los archivos si cometiste un error.

### Confirmación antes de eliminar en lote

\`\`\`python
def eliminar_con_confirmacion(archivos):
    """Pide confirmación antes de eliminar múltiples archivos."""
    print(f"Se eliminarán {len(archivos)} archivos:")
    for f in archivos:
        print(f"  - {f.name}")

    respuesta = input("\\n¿Confirmas la eliminación? (escribe 'sí' para continuar): ")
    if respuesta.strip().lower() in ("sí", "si", "s", "yes", "y"):
        for archivo in archivos:
            archivo.unlink()
            print(f"Eliminado: {archivo.name}")
        print("Eliminación completada.")
    else:
        print("Eliminación cancelada.")
\`\`\`

### ¡PELIGRO! Lo que hace shutil.rmtree()

\`\`\`python
# ESTE CÓDIGO ES MUY PELIGROSO:
# Elimina TODO el contenido de la carpeta sin posibilidad de recuperación
shutil.rmtree("/ruta/carpeta")

# Úsalo SOLO cuando:
# 1. Hayas verificado que la ruta es correcta
# 2. Sepas exactamente qué contiene
# 3. Tengas respaldo de lo que importa
# 4. Hayas hecho un dry_run primero
\`\`\`

### Buenas prácticas de seguridad

\`\`\`python
# 1. Verificar que el archivo existe antes de eliminar
if archivo.exists():
    archivo.unlink()

# 2. Verificar que es un archivo (no una carpeta)
if archivo.is_file():
    archivo.unlink()

# 3. Limitar el alcance de la búsqueda
# MAL: busca en todo el sistema
Path("/").rglob("*.tmp")

# BIEN: limitar a una carpeta específica
Path("mi_carpeta/temporales").glob("*.tmp")
\`\`\`
`,
    codeExample: `import shutil
from pathlib import Path
from datetime import datetime

# Crear archivos de prueba para demostrar eliminación segura
demo = Path("demo_eliminacion")
demo.mkdir(exist_ok=True)
papelera = demo / "papelera"
papelera.mkdir(exist_ok=True)

# Crear archivos de ejemplo
for i in range(5):
    (demo / f"temporal_{i}.tmp").write_text(f"archivo temporal {i}")
    (demo / f"reporte_{i}.pdf").write_text(f"reporte {i}")
(demo / "importante.xlsx").write_text("datos importantes")

print("Archivos iniciales:")
for f in sorted(demo.iterdir()):
    if f.is_file():
        print(f"  {f.name}")
print()

# ====================================
# 1. FUNCIÓN CON DRY-RUN
# ====================================
def eliminar_patron(carpeta, patron, dry_run=True):
    archivos = sorted(Path(carpeta).glob(patron))
    modo = "SIMULACIÓN" if dry_run else "ELIMINANDO"
    print(f"[{modo}] Patrón '{patron}': {len(archivos)} archivos")
    for archivo in archivos:
        kb = archivo.stat().st_size
        print(f"  {'→' if dry_run else 'X'} {archivo.name} ({kb} bytes)")
        if not dry_run and archivo.is_file():
            archivo.unlink()
    if dry_run:
        print("  Usa dry_run=False para eliminar de verdad.")
    return len(archivos)

print("=== Simulación: eliminar archivos .tmp ===")
eliminar_patron(demo, "*.tmp", dry_run=True)
print()

# ====================================
# 2. MOVER A PAPELERA (más seguro)
# ====================================
def mover_a_papelera(archivo_path, dir_papelera):
    """Mueve a papelera en lugar de eliminar directamente."""
    archivo = Path(archivo_path)
    papelera = Path(dir_papelera)
    papelera.mkdir(exist_ok=True)

    timestamp = datetime.now().strftime("%H%M%S")
    nuevo_nombre = f"{timestamp}_{archivo.name}"
    destino = papelera / nuevo_nombre
    shutil.move(str(archivo), str(destino))
    return destino

print("=== Mover archivos .tmp a papelera (seguro) ===")
for tmp in sorted(demo.glob("*.tmp")):
    destino = mover_a_papelera(tmp, papelera)
    print(f"  En papelera: {tmp.name} -> {destino.name}")

print()

# ====================================
# 3. ESTADO FINAL
# ====================================
print("Estado después de 'eliminar' temporales:")
print("  En demo/:")
for f in sorted(demo.iterdir()):
    if f.is_file():
        print(f"    {f.name}")
print("  En demo/papelera/:")
for f in sorted(papelera.iterdir()):
    if f.is_file():
        print(f"    {f.name}")

print()
print("¡Los archivos en la papelera se pueden recuperar si fue un error!")
print()
print("=== Ahora sí: eliminar los .tmp de la papelera definitivamente ===")
for tmp in papelera.glob("*.tmp"):
    tmp.unlink()
    print(f"  Eliminado: {tmp.name}")

# Limpieza final del demo
shutil.rmtree(demo)
print()
print("(Demo eliminado con shutil.rmtree)")
`,
    keyPoints: [
      'Python elimina archivos permanentemente: NO van a la Papelera de reciclaje del sistema',
      'Path.unlink() elimina archivos individuales; Path.rmdir() elimina carpetas vacías',
      'shutil.rmtree() elimina carpetas con todo su contenido — usar con extremo cuidado',
      'El patrón dry_run=True permite ver qué se eliminaría sin hacer cambios reales',
      'Mover a una carpeta "papelera" es más seguro que eliminar directamente',
      'Siempre verificar que el archivo existe y es un archivo antes de eliminar',
    ],
    exercise: {
      description: 'Crea un script que limpie archivos temporales de una carpeta: busca archivos con extensiones .tmp, .log y .bak. Primero muéstralos con dry_run=True. Luego implementa la opción de: 1) Moverlos a una carpeta "papelera" con timestamp en el nombre, 2) Solo si la papelera tiene más de 10 archivos, pedir confirmación antes de eliminar los de la papelera definitivamente.',
      hint: 'Para contar los archivos en la papelera: len(list(papelera.iterdir())). Para pedir confirmación en scripts sin input interactivo, simula la lógica con un flag. Para el timestamp usa datetime.now().strftime("%Y%m%d_%H%M%S").',
    },
    quiz: [
      {
        question: '¿Qué hace Path.unlink() con un archivo?',
        options: [
          'Lo mueve a la Papelera de reciclaje del sistema',
          'Lo elimina permanentemente del sistema de archivos',
          'Desvincula el archivo de su carpeta sin eliminarlo',
          'Crea una copia de seguridad y luego lo elimina',
        ],
        correctAnswer: 'Lo elimina permanentemente del sistema de archivos',
        correctFeedback: '¡Correcto! unlink() elimina el archivo permanentemente. No hay Papelera de reciclaje en Python. El archivo desaparece inmediatamente.',
        incorrectFeedback: 'unlink() elimina el archivo de forma permanente, NO lo envía a la Papelera de reciclaje del sistema. Una vez ejecutado, no hay forma de recuperar el archivo con métodos normales.',
      },
      {
        question: '¿Cuál es la diferencia entre Path.rmdir() y shutil.rmtree()?',
        options: [
          'rmdir() es más rápido que rmtree()',
          'rmdir() solo funciona con carpetas vacías; rmtree() elimina carpetas con contenido',
          'rmtree() pide confirmación, rmdir() no',
          'rmdir() mueve a papelera, rmtree() elimina permanentemente',
        ],
        correctAnswer: 'rmdir() solo funciona con carpetas vacías; rmtree() elimina carpetas con contenido',
        correctFeedback: '¡Correcto! rmdir() falla si la carpeta tiene archivos. rmtree() elimina todo el contenido de forma recursiva — por eso es muy peligroso si se usa con la ruta incorrecta.',
        incorrectFeedback: 'rmdir() requiere que la carpeta esté completamente vacía antes de eliminarla. rmtree() elimina la carpeta y TODO su contenido recursivamente, sin importar lo que haya dentro.',
      },
      {
        question: '¿Por qué es más seguro mover archivos a una "papelera" que eliminarlos directamente?',
        options: [
          'Porque mover es más rápido que eliminar',
          'Porque permite recuperar los archivos si se cometió un error',
          'Porque Python no puede eliminar archivos directamente',
          'Porque la papelera los comprime automáticamente',
        ],
        correctAnswer: 'Porque permite recuperar los archivos si se cometió un error',
        correctFeedback: '¡Correcto! Si mueves a una carpeta "papelera" primero, puedes recuperar los archivos si descubres que eliminaste algo que no debías. Es una red de seguridad.',
        incorrectFeedback: 'La papelera es una red de seguridad. Si eliminas directamente y te equivocas, no hay recuperación. Si mueves a una carpeta temporal, puedes revertir el proceso fácilmente.',
      },
      {
        question: '¿Cuál de estas prácticas NO es segura al eliminar archivos con Python?',
        options: [
          'Usar dry_run=True para previsualizar antes de eliminar',
          'Verificar `if archivo.is_file()` antes de llamar unlink()',
          'Usar Path("/").rglob("*.tmp") para limpiar temporales de todo el sistema',
          'Pedir confirmación antes de eliminar en lote',
        ],
        correctAnswer: 'Usar Path("/").rglob("*.tmp") para limpiar temporales de todo el sistema',
        correctFeedback: '¡Correcto! Buscar desde la raíz del sistema es extremadamente peligroso. Siempre limita la búsqueda a carpetas específicas y conocidas.',
        incorrectFeedback: 'Buscar desde la raíz "/" con rglob es muy peligroso porque puede encontrar archivos .tmp del sistema operativo que son críticos. Siempre limita el alcance a carpetas específicas.',
      },
      {
        question: 'Después de ejecutar `shutil.rmtree("mi_proyecto")`, ¿qué ocurre?',
        options: [
          'La carpeta y todo su contenido se mueven a la Papelera del sistema',
          'La carpeta se elimina permanentemente con todo su contenido',
          'Solo se elimina la carpeta si está vacía',
          'Se crea un archivo .zip como respaldo antes de eliminar',
        ],
        correctAnswer: 'La carpeta se elimina permanentemente con todo su contenido',
        correctFeedback: '¡Correcto! rmtree() es irreversible. Elimina la carpeta y absolutamente todo su contenido de forma permanente. No hay Papelera de reciclaje.',
        incorrectFeedback: 'rmtree() elimina todo permanentemente y de forma inmediata. No hay Papelera, no hay respaldo automático. Por eso debe usarse con extremo cuidado y solo después de verificar la ruta.',
      },
      {
        question: '¿Qué debería hacer un script de limpieza responsable antes de eliminar archivos?',
        options: [
          'Eliminar directamente para ser más eficiente',
          'Ejecutar primero en modo dry_run, mostrar lo que se eliminará y pedir confirmación',
          'Eliminar solo si el archivo tiene más de 30 días',
          'Comprimir los archivos antes de eliminarlos',
        ],
        correctAnswer: 'Ejecutar primero en modo dry_run, mostrar lo que se eliminará y pedir confirmación',
        correctFeedback: '¡Correcto! Un script responsable primero simula (dry_run), muestra la lista de archivos afectados, y pide confirmación del usuario antes de proceder.',
        incorrectFeedback: 'Un script de limpieza responsable: 1) Simula con dry_run, 2) Muestra exactamente qué eliminaría, 3) Pide confirmación explícita. Nunca elimina sin que el usuario sepa qué va a pasar.',
      },
      {
        question: '¿Cuál es la consecuencia de ejecutar `archivo.unlink()` en Python?',
        options: [
          'El archivo va a la Papelera de reciclaje',
          'El archivo se oculta pero no se elimina',
          'El archivo se elimina permanentemente sin posibilidad de recuperación normal',
          'El archivo se marca como eliminado pero persiste hasta el reinicio',
        ],
        correctAnswer: 'El archivo se elimina permanentemente sin posibilidad de recuperación normal',
        correctFeedback: '¡Correcto! A diferencia de eliminar desde el Explorador de Windows, Python elimina directamente del sistema de archivos. No hay Papelera, no hay deshacer.',
        incorrectFeedback: 'unlink() elimina el archivo permanentemente. No pasa por la Papelera del sistema operativo. Una vez ejecutado, solo herramientas especializadas de recuperación de datos podrían recuperarlo (sin garantía).',
      },
    ],
  },
  {
    slug: 'organizador-descargas',
    title: 'Mini proyecto: organizador automático de descargas',
    module: 'Automatización de archivos y carpetas',
    moduleNumber: 26,
    order: 142,
    description: 'Crea un script que organice la carpeta de descargas clasificando documentos, imágenes, videos y otros archivos.',
    explanation: `## Mini proyecto: Organizador automático de descargas

En este proyecto final integrarás todo lo aprendido: listar archivos, clasificarlos por extensión, moverlos y registrar lo que se hizo.

### Objetivo

Crear un script que:
- Lee una carpeta de descargas
- Clasifica archivos por extensión en categorías
- Crea subcarpetas automáticamente
- Mueve los archivos a sus carpetas
- Registra (log) qué se movió y cuándo
- Tiene modo dry-run para previsualizar
- Evita mover archivos ya en subcarpetas
- Ofrece opción de organización por fecha

### Estructura del proyecto

\`\`\`
Descargas/
├── Imágenes/
│   ├── foto_vacaciones.jpg
│   └── captura.png
├── Documentos/
│   ├── contrato.pdf
│   └── reporte.docx
├── Videos/
│   └── tutorial.mp4
├── Música/
│   └── cancion.mp3
├── Código/
│   └── script.py
└── Otros/
    └── archivo_raro.xyz
\`\`\`

### Estructura con organización por fecha

\`\`\`
Descargas/
├── Imágenes/
│   ├── 2025-12/
│   │   └── foto_navidad.jpg
│   └── 2026-01/
│       └── captura_pantalla.png
\`\`\`

### El script principal

\`\`\`python
import shutil
import logging
from pathlib import Path
from datetime import datetime

# Configurar logging
logging.basicConfig(
    filename="organizador.log",
    level=logging.INFO,
    format="%(asctime)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)

CATEGORIAS = {
    ".jpg": "Imágenes", ".jpeg": "Imágenes", ".png": "Imágenes",
    ".gif": "Imágenes", ".svg": "Imágenes", ".webp": "Imágenes",
    ".pdf": "Documentos", ".docx": "Documentos", ".doc": "Documentos",
    ".xlsx": "Documentos", ".txt": "Documentos", ".pptx": "Documentos",
    ".mp4": "Videos", ".avi": "Videos", ".mov": "Videos", ".mkv": "Videos",
    ".mp3": "Música", ".wav": "Música", ".flac": "Música",
    ".py": "Código", ".js": "Código", ".html": "Código", ".css": "Código",
    ".zip": "Comprimidos", ".rar": "Comprimidos", ".7z": "Comprimidos",
}

def organizar(carpeta, dry_run=True, por_fecha=False):
    carpeta = Path(carpeta)
    subcarpetas_conocidas = set(CATEGORIAS.values()) | {"Otros"}
    movidos = []

    for archivo in sorted(carpeta.iterdir()):
        if archivo.is_dir():
            continue

        # Evitar archivos del propio organizador
        if archivo.name in ("organizador.log",):
            continue

        extension = archivo.suffix.lower()
        categoria = CATEGORIAS.get(extension, "Otros")

        if por_fecha:
            mes = datetime.fromtimestamp(archivo.stat().st_mtime).strftime("%Y-%m")
            destino_dir = carpeta / categoria / mes
        else:
            destino_dir = carpeta / categoria

        destino_archivo = destino_dir / archivo.name

        accion = f"{archivo.name} -> {destino_dir.relative_to(carpeta)}/"
        print(f"  {'[DRY]' if dry_run else '[MOV]'} {accion}")

        if not dry_run:
            destino_dir.mkdir(parents=True, exist_ok=True)
            if not destino_archivo.exists():
                shutil.move(str(archivo), str(destino_archivo))
                logging.info(f"Movido: {accion}")
                movidos.append(archivo.name)
            else:
                logging.warning(f"Omitido (ya existe): {archivo.name}")

    return movidos

def main():
    carpeta = Path(".")  # Cambiar a Path.home() / "Downloads" para producción
    print("=== ORGANIZADOR DE DESCARGAS ===")
    print(f"Carpeta: {carpeta.resolve()}")
    print()

    print("[PASO 1] Simulación:")
    organizar(carpeta, dry_run=True, por_fecha=False)
    print()

    # En producción, descomenta la siguiente línea:
    # print("[PASO 2] Ejecutando...")
    # organizar(carpeta, dry_run=False, por_fecha=False)

if __name__ == "__main__":
    main()
\`\`\`
`,
    codeExample: `import shutil
import logging
from pathlib import Path
from datetime import datetime

# Configuración de categorías
CATEGORIAS = {
    ".jpg": "Imágenes", ".jpeg": "Imágenes", ".png": "Imágenes", ".gif": "Imágenes",
    ".pdf": "Documentos", ".docx": "Documentos", ".doc": "Documentos",
    ".xlsx": "Documentos", ".txt": "Documentos",
    ".mp4": "Videos", ".avi": "Videos", ".mov": "Videos",
    ".mp3": "Música", ".wav": "Música",
    ".py": "Código", ".js": "Código", ".html": "Código",
    ".zip": "Comprimidos", ".rar": "Comprimidos",
}

def configurar_log(carpeta):
    log_file = Path(carpeta) / "organizador.log"
    logging.basicConfig(
        filename=str(log_file),
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M",
        force=True,
    )

def organizar_carpeta(carpeta, dry_run=True, por_fecha=False):
    """
    Organiza archivos de una carpeta por categoría y opcionalmente por fecha.

    Args:
        carpeta: Ruta de la carpeta a organizar
        dry_run: Si True, solo muestra los cambios sin aplicarlos
        por_fecha: Si True, crea subcarpetas por mes (YYYY-MM)
    """
    carpeta = Path(carpeta)
    configurar_log(carpeta)

    archivos_raiz = [f for f in carpeta.iterdir() if f.is_file()
                     and f.name != "organizador.log"]

    if not archivos_raiz:
        print("No hay archivos para organizar en la raíz de la carpeta.")
        return []

    modo = "SIMULACIÓN" if dry_run else "ORGANIZANDO"
    print(f"[{modo}] {len(archivos_raiz)} archivos en {carpeta.name}/")
    print("-" * 55)

    resumen = {}
    movidos = []

    for archivo in sorted(archivos_raiz):
        extension = archivo.suffix.lower()
        categoria = CATEGORIAS.get(extension, "Otros")

        if por_fecha:
            ts = archivo.stat().st_mtime
            mes = datetime.fromtimestamp(ts).strftime("%Y-%m")
            destino_dir = carpeta / categoria / mes
        else:
            destino_dir = carpeta / categoria

        destino_archivo = destino_dir / archivo.name
        ruta_relativa = destino_dir.relative_to(carpeta)
        print(f"  {archivo.name:35s} -> {ruta_relativa}/")

        resumen[categoria] = resumen.get(categoria, 0) + 1

        if not dry_run:
            destino_dir.mkdir(parents=True, exist_ok=True)
            if not destino_archivo.exists():
                shutil.move(str(archivo), str(destino_archivo))
                logging.info(f"Movido: {archivo.name} -> {ruta_relativa}/")
                movidos.append(archivo.name)
            else:
                logging.warning(f"Omitido (ya existe): {archivo.name}")
                print(f"    ⚠ OMITIDO: ya existe en {categoria}/")

    print()
    print("Resumen por categoría:")
    for cat, n in sorted(resumen.items()):
        print(f"  {cat:20s}: {n} archivo(s)")

    if dry_run:
        print()
        print("→ Ejecuta con dry_run=False para aplicar los cambios.")
    else:
        print(f"\\nArchivos movidos: {len(movidos)}")
        print("Log guardado en: organizador.log")

    return movidos

# ============================
# DEMO COMPLETO
# ============================

def main():
    # Crear carpeta de prueba
    demo = Path("demo_organizador")
    demo.mkdir(exist_ok=True)

    archivos_prueba = [
        "reporte_enero.pdf", "foto_familia.jpg", "cancion.mp3",
        "script_python.py", "video_tutorial.mp4", "presupuesto.xlsx",
        "captura.png", "musica2.wav", "datos.docx", "archivo.xyz",
        "comprimido.zip", "otro_script.js",
    ]
    for nombre in archivos_prueba:
        (demo / nombre).write_text(f"contenido de {nombre}")

    print("=== ORGANIZADOR AUTOMÁTICO DE DESCARGAS ===")
    print(f"Carpeta: {demo.resolve()}")
    print()

    # Paso 1: Simulación
    print("PASO 1: Vista previa (sin cambios)")
    organizar_carpeta(demo, dry_run=True, por_fecha=False)
    print()

    # Paso 2: Ejecución real
    print("PASO 2: Organizando archivos...")
    organizar_carpeta(demo, dry_run=False, por_fecha=False)
    print()

    # Resultado
    print("Estructura resultante:")
    for elemento in sorted(demo.iterdir()):
        if elemento.is_dir():
            archivos_en_cat = list(elemento.iterdir())
            print(f"  {elemento.name}/ ({len(archivos_en_cat)} archivo(s))")
            for f in sorted(archivos_en_cat):
                print(f"    {f.name}")

    # Limpieza
    shutil.rmtree(demo)
    print()
    print("(Demo eliminado)")

main()
`,
    keyPoints: [
      'El organizador combina: listar archivos, clasificar por extensión, crear carpetas y mover',
      'Usar logging en lugar de solo print permite tener un historial permanente de lo que se hizo',
      'Verificar que el archivo no es una carpeta (is_file()) evita procesar subcarpetas',
      'La opción por_fecha agrega un nivel extra de organización por mes de modificación',
      'Excluir el archivo de log del procesamiento evita que el script se mueva a sí mismo',
      'La función main() con if __name__ == "__main__": es la estructura correcta para scripts',
    ],
    exercise: {
      description: 'Extiende el organizador para que: 1) Genere un reporte en Excel al finalizar (usando openpyxl) con columnas: nombre_archivo, categoría, fecha_movido. 2) Si ya existe una carpeta de la misma categoría con archivos, verifique si hay duplicados por nombre y en ese caso agregue un sufijo numérico (_1, _2, etc.) en lugar de omitir el archivo.',
      hint: 'Para el reporte Excel: crea un workbook con openpyxl, agrega los movidos como filas, guarda como "reporte_organizacion.xlsx". Para duplicados: si destino.exists(), busca el primer número disponible con un while: nuevo = destino.with_stem(f"{destino.stem}_{n}") while nuevo.exists(): n += 1.',
    },
    quiz: [
      {
        question: '¿Por qué se usa el módulo logging en lugar de solo print() en el organizador?',
        options: [
          'logging es más rápido que print()',
          'logging guarda un historial permanente con timestamps, útil para auditoría',
          'print() no funciona en scripts que se ejecutan automáticamente',
          'logging permite mostrar colores en la terminal',
        ],
        correctAnswer: 'logging guarda un historial permanente con timestamps, útil para auditoría',
        correctFeedback: '¡Correcto! logging escribe a un archivo con fecha y hora de cada acción. Esto permite revisar qué archivos se movieron y cuándo, mucho después de ejecutar el script.',
        incorrectFeedback: 'logging escribe a un archivo .log con timestamps automáticos. Así puedes revisar semanas después qué archivos se organizaron y cuándo, a diferencia de print() que desaparece al cerrar la terminal.',
      },
      {
        question: '¿Por qué el script excluye el archivo "organizador.log" de la clasificación?',
        options: [
          'Porque .log no es una extensión válida para Python',
          'Para evitar que el propio archivo de registro se mueva a otra carpeta',
          'Porque los archivos .log son archivos del sistema',
          'Para mejorar el rendimiento del script',
        ],
        correctAnswer: 'Para evitar que el propio archivo de registro se mueva a otra carpeta',
        correctFeedback: '¡Correcto! Si no se excluye, el script intentaría mover organizador.log a la carpeta "Otros/" u otra categoría. Hay que proteger los archivos que el propio script genera.',
        incorrectFeedback: 'El archivo de log está en la misma carpeta que los archivos a organizar. Sin la exclusión explícita, el organizador intentaría clasificarlo y moverlo, lo que podría causar problemas.',
      },
      {
        question: '¿Qué hace la verificación `if not destino_archivo.exists()` antes de mover?',
        options: [
          'Verifica que la carpeta destino existe',
          'Evita sobreescribir un archivo que ya fue movido en una ejecución anterior',
          'Verifica que el archivo origen todavía existe',
          'Comprueba que hay espacio suficiente en disco',
        ],
        correctAnswer: 'Evita sobreescribir un archivo que ya fue movido en una ejecución anterior',
        correctFeedback: '¡Correcto! Si el organizador se ejecuta dos veces, en la segunda ejecución los archivos ya estarán en sus carpetas. La verificación evita sobreescribir archivos que ya están en su lugar.',
        incorrectFeedback: 'La verificación protege contra sobreescribir. En la segunda ejecución, los archivos ya estarían en sus carpetas destino. Sin esta verificación, shutil.move() los sobreescribiría silenciosamente.',
      },
      {
        question: '¿Qué ventaja tiene la opción por_fecha=True en el organizador?',
        options: [
          'Hace el script más rápido',
          'Crea subcarpetas por mes dentro de cada categoría para una organización más granular',
          'Ordena los archivos por fecha dentro de cada categoría',
          'Solo procesa archivos creados en el mes actual',
        ],
        correctAnswer: 'Crea subcarpetas por mes dentro de cada categoría para una organización más granular',
        correctFeedback: '¡Correcto! Con por_fecha=True, la estructura queda como Imágenes/2026-01/, Imágenes/2026-02/, etc. Útil cuando hay muchos archivos de varios meses.',
        incorrectFeedback: 'por_fecha=True crea una subcarpeta por mes dentro de cada categoría. Imágenes/2026-01/ contendría fotos de enero 2026, Imágenes/2026-02/ las de febrero, etc.',
      },
      {
        question: '¿Cuál es el propósito de `if __name__ == "__main__": main()`?',
        options: [
          'Es un requisito de Python para definir la función principal',
          'Permite que el script se ejecute directamente pero también importarse como módulo',
          'Protege el script de ejecución accidental',
          'Hace que main() se ejecute solo una vez',
        ],
        correctAnswer: 'Permite que el script se ejecute directamente pero también importarse como módulo',
        correctFeedback: '¡Correcto! Si ejecutas el script directamente, __name__ == "__main__" es True y main() se ejecuta. Si alguien importa el módulo, __name__ es el nombre del módulo y main() no se ejecuta automáticamente.',
        incorrectFeedback: 'Este patrón es una buena práctica en Python. Permite usar el archivo como módulo importable (sin ejecutar main()) y también como script ejecutable directamente.',
      },
      {
        question: 'Para registrar en el log que un archivo fue movido, ¿qué función de logging se usa?',
        options: [
          'logging.print("Movido: ...")',
          'logging.info("Movido: ...")',
          'logging.write("Movido: ...")',
          'logging.save("Movido: ...")',
        ],
        correctAnswer: 'logging.info("Movido: ...")',
        correctFeedback: '¡Correcto! logging.info() registra mensajes informativos. También existen logging.warning() para advertencias y logging.error() para errores.',
        incorrectFeedback: 'logging.info() registra mensajes de nivel informativo. El módulo logging tiene diferentes niveles: DEBUG, INFO, WARNING, ERROR, CRITICAL. Para acciones normales se usa INFO.',
      },
      {
        question: '¿Qué hace mkdir(parents=True, exist_ok=True) en el organizador?',
        options: [
          'Crea la carpeta y todas las carpetas padre necesarias, sin error si ya existe',
          'Crea la carpeta solo si los archivos padre ya existen',
          'Crea la carpeta y mueve los archivos padre dentro',
          'Crea la carpeta con permisos de solo lectura',
        ],
        correctAnswer: 'Crea la carpeta y todas las carpetas padre necesarias, sin error si ya existe',
        correctFeedback: '¡Correcto! parents=True crea carpetas intermedias como Imágenes/2026-01/ aunque 2026-01/ no exista. exist_ok=True no lanza error si la carpeta ya existe.',
        incorrectFeedback: 'parents=True permite crear estructuras anidadas como Imágenes/2026-01/ de una sola llamada. exist_ok=True evita el error FileExistsError si la carpeta ya fue creada antes.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module26: Module = {
  number: 26,
  title: 'Automatización de archivos y carpetas',
  level: 'practico',
  lessons: lessonsModule26,
}
