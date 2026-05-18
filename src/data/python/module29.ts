import type { Lesson } from '@/types'

export const lessonsModule29: Lesson[] = [
  {
    slug: 'proyecto-organizador-archivos',
    title: 'Proyecto: organizador de archivos',
    module: 'Mini proyectos de automatización',
    moduleNumber: 29,
    order: 157,
    description: 'Construye un script que clasifique archivos por extensión y los mueva a carpetas específicas.',
    explanation: `## Organizador de archivos: diseño del proyecto

¡Llegó la hora de construir algo real! Un organizador de archivos es uno de los proyectos más prácticos que puedes hacer: lo usarás en tu propia computadora y lo entenderás completamente.

### La idea

Tienes una carpeta llena de archivos mezclados: imágenes, documentos, videos, código... El script los clasifica automáticamente y los mueve a subcarpetas.

### Estructura del proyecto

\`\`\`
organizador/
├── organizador.py    ← script principal
└── README.md
\`\`\`

### Config: el diccionario de extensiones

El corazón del script es un diccionario que mapea extensión → carpeta destino:

\`\`\`python
CATEGORIAS = {
    "Imágenes":    [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp"],
    "Documentos":  [".pdf", ".docx", ".doc", ".txt", ".xlsx", ".pptx", ".odt"],
    "Videos":      [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    "Audio":       [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    "Código":      [".py", ".js", ".ts", ".html", ".css", ".java", ".cpp"],
    "Comprimidos": [".zip", ".rar", ".7z", ".tar", ".gz"],
    "Otros":       []   # categoría por defecto
}
\`\`\`

### Modo dry-run

Antes de mover nada, el modo dry-run te muestra qué pasaría sin hacer cambios reales. Es buena práctica de ingeniería: nunca modifiques archivos sin antes poder previsualizar.

### Flujo principal

1. Recibir la carpeta como argumento (argparse)
2. Listar todos los archivos (no subcarpetas)
3. Para cada archivo, determinar su categoría
4. En dry-run: solo imprimir. En modo real: mover
5. Al final: imprimir un reporte (X movidos, Y omitidos)

### Diseño de funciones

- \`obtener_categoria(extension)\` → str
- \`organizar_carpeta(ruta, dry_run)\` → dict de stats
- \`imprimir_reporte(stats)\`
- \`main()\` con argparse

### ¿Qué pasa con archivos ya clasificados?

Si el archivo ya está dentro de una subcarpeta de destino, lo omitimos. Esto hace el script idempotente (se puede ejecutar varias veces sin dañar nada).

### Cómo extenderlo

- Añadir reglas por nombre (archivos que contengan "factura" → Facturas/)
- Ordenar por fecha de modificación
- Deshacer la última organización (guardar log)
- Organizar en subcarpetas por año/mes`,
    codeExample: `import argparse
import logging
import shutil
from pathlib import Path

# ── Configuración de categorías ───────────────────────────────
CATEGORIAS: dict[str, list[str]] = {
    "Imágenes":    [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp"],
    "Documentos":  [".pdf", ".docx", ".doc", ".txt", ".xlsx", ".pptx", ".odt"],
    "Videos":      [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    "Audio":       [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    "Código":      [".py", ".js", ".ts", ".html", ".css", ".java", ".cpp"],
    "Comprimidos": [".zip", ".rar", ".7z", ".tar", ".gz"],
}
CATEGORIA_DEFAULT = "Otros"

# Índice invertido: extensión → categoría (para búsqueda rápida)
EXT_A_CATEGORIA: dict[str, str] = {}
for cat, extensiones in CATEGORIAS.items():
    for ext in extensiones:
        EXT_A_CATEGORIA[ext.lower()] = cat


def obtener_categoria(archivo: Path) -> str:
    """Devuelve la categoría de un archivo según su extensión."""
    ext = archivo.suffix.lower()
    return EXT_A_CATEGORIA.get(ext, CATEGORIA_DEFAULT)


def organizar_carpeta(ruta: str, dry_run: bool = True) -> dict:
    """
    Organiza los archivos de una carpeta por categoría.

    Args:
        ruta:    ruta de la carpeta a organizar
        dry_run: si True, solo muestra qué haría sin mover nada

    Returns:
        dict con estadísticas: movidos, omitidos, errores
    """
    carpeta = Path(ruta)
    if not carpeta.is_dir():
        raise ValueError(f"No es una carpeta válida: {ruta}")

    # Nombres de subcarpetas destino (para no mover archivos ya clasificados)
    destinos_conocidos = set(CATEGORIAS.keys()) | {CATEGORIA_DEFAULT}

    stats = {"movidos": 0, "omitidos": 0, "errores": 0}

    logging.info("Modo: %s", "DRY-RUN (sin cambios)" if dry_run else "REAL")
    logging.info("Carpeta: %s", carpeta.resolve())
    print("-" * 60)

    for item in sorted(carpeta.iterdir()):
        # Solo archivos (no subcarpetas)
        if not item.is_file():
            continue

        # Omitir archivos en subcarpetas de destino
        if item.parent.name in destinos_conocidos:
            continue

        categoria = obtener_categoria(item)
        destino_dir = carpeta / categoria
        destino_archivo = destino_dir / item.name

        # Manejar nombre duplicado
        if destino_archivo.exists():
            base = item.stem
            sufijo = item.suffix
            contador = 1
            while destino_archivo.exists():
                destino_archivo = destino_dir / f"{base}_{contador}{sufijo}"
                contador += 1

        if dry_run:
            print(f"  [DRY-RUN] {item.name!r:40s} → {categoria}/")
            stats["movidos"] += 1
        else:
            try:
                destino_dir.mkdir(exist_ok=True)
                shutil.move(str(item), str(destino_archivo))
                logging.info("Movido: %s → %s/", item.name, categoria)
                print(f"  OK  {item.name!r:40s} → {categoria}/")
                stats["movidos"] += 1
            except Exception as e:
                logging.error("Error moviendo %s: %s", item.name, e)
                stats["errores"] += 1

    return stats


def imprimir_reporte(stats: dict, dry_run: bool) -> None:
    """Imprime el resumen final."""
    print("-" * 60)
    accion = "Para mover" if dry_run else "Movidos"
    print(f"  {accion}:  {stats['movidos']}")
    print(f"  Omitidos: {stats['omitidos']}")
    print(f"  Errores:  {stats['errores']}")
    if dry_run:
        print("\\n  Ejecuta sin --dry-run para aplicar los cambios.")


def main():
    parser = argparse.ArgumentParser(
        description="Organiza archivos en subcarpetas por tipo."
    )
    parser.add_argument("carpeta", help="Carpeta a organizar")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Mostrar qué se haría sin mover archivos",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Mostrar logs detallados",
    )
    args = parser.parse_args()

    nivel_log = logging.DEBUG if args.verbose else logging.WARNING
    logging.basicConfig(level=nivel_log, format="%(levelname)s: %(message)s")

    try:
        stats = organizar_carpeta(args.carpeta, dry_run=args.dry_run)
        imprimir_reporte(stats, dry_run=args.dry_run)
    except ValueError as e:
        print(f"Error: {e}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
`,
    keyPoints: [
      'El diccionario CATEGORIAS centraliza la configuración: extensión → carpeta. Cambiarlo es trivial.',
      'El índice invertido EXT_A_CATEGORIA permite búsquedas en O(1) en lugar de recorrer todas las categorías.',
      'El modo --dry-run es una práctica profesional: previsualiza cambios destructivos antes de ejecutarlos.',
      'shutil.move() funciona entre distintos discos (a diferencia de Path.rename()).',
      'Manejar nombres duplicados evita sobreescribir archivos accidentalmente.',
      'El reporte final (movidos/omitidos/errores) da confianza de que el script hizo lo correcto.',
    ],
    exercise: {
      description: 'Extiende el organizador para que acepte un argumento --config que lea el diccionario de categorías desde un archivo JSON. Así el usuario puede personalizar las reglas sin tocar el código.',
      hint: 'Usa json.load() para leer la config. Si no se pasa --config, usa el diccionario CATEGORIAS por defecto.',
    },
    quiz: [
      {
        question: '¿Por qué se usa un índice invertido (EXT_A_CATEGORIA) en el organizador en lugar de recorrer el diccionario CATEGORIAS?',
        options: [
          'Por estética del código',
          'Para buscar la categoría de una extensión en O(1) sin recorrer todas las categorías',
          'Porque los diccionarios invertidos son obligatorios en Python',
          'Para poder serializar el diccionario a JSON',
        ],
        correctAnswer: 'Para buscar la categoría de una extensión en O(1) sin recorrer todas las categorías',
        correctFeedback: '¡Correcto! Con el índice invertido, `EXT_A_CATEGORIA[".jpg"]` es una búsqueda directa. Sin él, habría que iterar todas las listas de CATEGORIAS para encontrar ".jpg".',
        incorrectFeedback: 'El índice invertido transforma una búsqueda de O(n) (recorrer todas las categorías y sus listas) en O(1) (acceso directo por clave). Es un patrón de optimización muy común.',
      },
      {
        question: '¿Qué hace el modo --dry-run en el organizador?',
        options: [
          'Elimina los archivos en lugar de moverlos',
          'Muestra qué archivos se moverían sin hacer ningún cambio real',
          'Organiza solo las imágenes',
          'Crea las carpetas destino pero no mueve archivos',
        ],
        correctAnswer: 'Muestra qué archivos se moverían sin hacer ningún cambio real',
        correctFeedback: '¡Correcto! El dry-run es una práctica profesional: te permite previsualizar el resultado antes de ejecutar operaciones destructivas o difíciles de revertir.',
        incorrectFeedback: 'El dry-run muestra el plan sin ejecutarlo: imprime "movería X a Y/" sin tocar ningún archivo. Es indispensable para operaciones de archivos, bases de datos o cualquier acción difícil de deshacer.',
      },
      {
        question: '¿Por qué se usa shutil.move() en lugar de Path.rename() para mover archivos?',
        options: [
          'shutil.move() es más rápido',
          'Path.rename() no existe en Python',
          'shutil.move() funciona entre distintos discos/particiones; Path.rename() falla en ese caso',
          'shutil.move() crea la carpeta destino automáticamente',
        ],
        correctAnswer: 'shutil.move() funciona entre distintos discos/particiones; Path.rename() falla en ese caso',
        correctFeedback: '¡Correcto! Path.rename() usa la syscall rename() del SO, que falla si origen y destino están en dispositivos distintos. shutil.move() hace una copia + borrado cuando es necesario.',
        incorrectFeedback: 'Path.rename() solo funciona dentro del mismo sistema de archivos (mismo disco). Si destino está en otro disco, lanza OSError. shutil.move() maneja ambos casos automáticamente.',
      },
      {
        question: 'El script recibe la carpeta con argparse. ¿Qué ventaja tiene esto sobre hardcodear la ruta?',
        options: [
          'Es más rápido',
          'Permite usar el script en cualquier carpeta sin modificar el código',
          'argparse valida automáticamente que la carpeta existe',
          'Hace el script compatible con Windows',
        ],
        correctAnswer: 'Permite usar el script en cualquier carpeta sin modificar el código',
        correctFeedback: '¡Correcto! Con argparse, el script es reutilizable: `python organizador.py ~/Descargas` o `python organizador.py C:/Usuarios/Ana/Documentos`. Sin argparse habría que editar el código cada vez.',
        incorrectFeedback: 'Hardcodear rutas hace el script usar una sola vez. argparse lo convierte en una herramienta genérica que funciona con cualquier carpeta que le pases como argumento.',
      },
      {
        question: '¿Qué hace el script cuando encuentra un archivo con el mismo nombre ya en la carpeta destino?',
        options: [
          'Lo sobreescribe sin avisar',
          'Lanza un error y detiene el programa',
          'Lo omite completamente',
          'Le añade un número al nombre para evitar colisiones: archivo_1.jpg',
        ],
        correctAnswer: 'Le añade un número al nombre para evitar colisiones: archivo_1.jpg',
        correctFeedback: '¡Correcto! El script incrementa un contador hasta encontrar un nombre libre. Esto evita pérdida de datos silenciosa al sobreescribir.',
        incorrectFeedback: 'Sobreescribir silenciosamente sería una pérdida de datos inaceptable. El patrón correcto es probar nombre_1, nombre_2, ... hasta encontrar uno libre.',
      },
      {
        question: '¿Cómo hace el script para no mover archivos que ya están en subcarpetas organizadas?',
        options: [
          'Borra las subcarpetas antes de empezar',
          'Verifica si el archivo está directamente en la carpeta raíz (item.parent == carpeta)',
          'Comprueba si el nombre de la carpeta padre está en el conjunto de destinos conocidos',
          'Guarda un log de archivos ya movidos',
        ],
        correctAnswer: 'Comprueba si el nombre de la carpeta padre está en el conjunto de destinos conocidos',
        correctFeedback: '¡Correcto! Si `item.parent.name` está en destinos_conocidos (como "Imágenes", "Documentos"...), el archivo ya fue clasificado y se omite. Esto hace el script idempotente.',
        incorrectFeedback: 'El truco es verificar si el archivo ya vive en una de las carpetas de destino. Si `item.parent.name in {"Imágenes", "Documentos", ...}`, el archivo ya fue clasificado en una ejecución anterior.',
      },
      {
        question: 'Si ejecutas `python organizador.py ~/Descargas` sin --dry-run y vuelves a ejecutarlo, ¿qué pasa?',
        options: [
          'Mueve los archivos de nuevo creando carpetas anidadas',
          'Lanza un error porque las carpetas ya existen',
          'No mueve nada, porque los archivos ya están en carpetas de destino',
          'Borra los archivos duplicados',
        ],
        correctAnswer: 'No mueve nada, porque los archivos ya están en carpetas de destino',
        correctFeedback: '¡Correcto! El script es idempotente. En la segunda ejecución, todos los archivos ya están dentro de subcarpetas como "Imágenes/" o "Documentos/", y el script las omite.',
        incorrectFeedback: 'Un script bien diseñado es idempotente: ejecutarlo varias veces produce el mismo resultado que ejecutarlo una vez. El chequeo de destinos_conocidos garantiza esto.',
      },
      {
        question: '¿Qué biblioteca usa el script para el logging en lugar de print()?',
        options: ['sys.stderr', 'loguru', 'el módulo logging de la biblioteca estándar', 'colorama'],
        correctAnswer: 'el módulo logging de la biblioteca estándar',
        correctFeedback: '¡Correcto! El módulo logging permite controlar el nivel de detalle (DEBUG, INFO, WARNING) y escribir a archivos. Es mucho más flexible que print() para scripts de producción.',
        incorrectFeedback: 'El módulo logging (biblioteca estándar) permite: controlar niveles (DEBUG/INFO/WARNING/ERROR), escribir a archivos, formatear mensajes con timestamps. Es el estándar para scripts serios.',
      },
    ],
  },

  {
    slug: 'proyecto-csv-json',
    title: 'Proyecto: conversor CSV a JSON',
    module: 'Mini proyectos de automatización',
    moduleNumber: 29,
    order: 158,
    description: 'Construye una herramienta que lea un archivo CSV y lo convierta a formato JSON.',
    explanation: `## Conversor CSV a JSON: un proyecto completo

Convertir entre CSV y JSON es una tarea frecuentísima: exportaciones de Excel que necesitan ir a una API, datos de una base de datos que debes procesar con JavaScript, etc.

### Características del conversor

- Lee cualquier CSV (con encabezados o sin ellos)
- Detecta delimitador automáticamente (coma, punto y coma, tab)
- Convierte tipos: intenta int, luego float, si no mantiene como string
- Salida a archivo JSON o a stdout
- Soporte de pretty-print con indent=2
- CLI completa con argparse

### CLI del proyecto

\`\`\`bash
# Uso básico
python conversor.py datos.csv

# Con todas las opciones
python conversor.py ventas.csv --output resultado.json --delimiter ";" --pretty

# Sin encabezados (genera col_0, col_1, ...)
python conversor.py datos.csv --no-header

# A stdout (para pipelines)
python conversor.py datos.csv | python -m json.tool
\`\`\`

### Conversión de tipos automática

Una columna CSV es siempre string. El conversor intenta inferir el tipo:

\`\`\`
"42"      → int    42
"3.14"    → float  3.14
"true"    → bool   True
"false"   → bool   False
""        → None
"texto"   → str    "texto"
\`\`\`

### Manejo de encoding

Los archivos CSV de Excel suelen estar en latin-1 o utf-8-sig (con BOM). El conversor prueba utf-8-sig primero (que maneja ambos UTF-8 con y sin BOM), luego latin-1.

### Estructura de funciones

- \`detectar_delimitador(muestra)\` → str
- \`convertir_tipo(valor)\` → any
- \`leer_csv(ruta, delimiter, tiene_encabezado, encoding)\` → list[dict]
- \`guardar_json(datos, ruta, pretty)\`
- \`main()\` con argparse`,
    codeExample: `import argparse
import csv
import json
import sys
from pathlib import Path


# ── Detección de delimitador ──────────────────────────────────
def detectar_delimitador(muestra: str) -> str:
    """Detecta el delimitador más probable en una muestra de texto CSV."""
    candidatos = [",", ";", "\\t", "|"]
    conteos = {d: muestra.count(d) for d in candidatos}
    return max(conteos, key=conteos.get)


# ── Conversión de tipos ───────────────────────────────────────
def convertir_tipo(valor: str):
    """
    Intenta convertir un string al tipo Python más apropiado.
    Orden: None → bool → int → float → str
    """
    if valor == "":
        return None
    if valor.lower() == "true":
        return True
    if valor.lower() == "false":
        return False
    try:
        return int(valor)
    except ValueError:
        pass
    try:
        return float(valor)
    except ValueError:
        pass
    return valor


# ── Lectura del CSV ───────────────────────────────────────────
def leer_csv(
    ruta: str,
    delimiter: str = None,
    tiene_encabezado: bool = True,
    encoding: str = None,
) -> list[dict]:
    """
    Lee un archivo CSV y devuelve una lista de diccionarios.

    Args:
        ruta:             ruta del archivo CSV
        delimiter:        separador de campos (None = autodetectar)
        tiene_encabezado: si False, genera columnas col_0, col_1, ...
        encoding:         encoding del archivo (None = autodetectar)

    Returns:
        Lista de diccionarios con tipos convertidos
    """
    ruta_path = Path(ruta)
    if not ruta_path.exists():
        raise FileNotFoundError(f"Archivo no encontrado: {ruta}")

    # Autodetectar encoding
    encodings_a_probar = [encoding] if encoding else ["utf-8-sig", "latin-1"]

    contenido = None
    for enc in encodings_a_probar:
        try:
            contenido = ruta_path.read_text(encoding=enc)
            encoding_usado = enc
            break
        except UnicodeDecodeError:
            continue

    if contenido is None:
        raise ValueError(f"No se pudo leer {ruta} con los encodings disponibles.")

    # Autodetectar delimitador
    primera_linea = contenido.splitlines()[0] if contenido else ""
    delimitador = delimiter or detectar_delimitador(primera_linea)

    print(f"  Encoding: {encoding_usado}", file=sys.stderr)
    print(f"  Delimitador: {delimitador!r}", file=sys.stderr)

    import io
    f = io.StringIO(contenido)
    lector = csv.reader(f, delimiter=delimitador)
    filas = list(lector)

    if not filas:
        return []

    # Encabezados
    if tiene_encabezado:
        encabezados = filas[0]
        datos_filas = filas[1:]
    else:
        num_cols = len(filas[0])
        encabezados = [f"col_{i}" for i in range(num_cols)]
        datos_filas = filas

    # Construir lista de dicts con conversión de tipos
    resultado = []
    for fila in datos_filas:
        if not any(fila):   # saltar filas completamente vacías
            continue
        # Rellenar si hay menos columnas que encabezados
        fila_padded = fila + [""] * (len(encabezados) - len(fila))
        registro = {
            enc: convertir_tipo(val)
            for enc, val in zip(encabezados, fila_padded)
        }
        resultado.append(registro)

    return resultado


# ── Escritura del JSON ────────────────────────────────────────
def guardar_json(datos: list, ruta: str = None, pretty: bool = False) -> None:
    """
    Guarda los datos en JSON. Si ruta es None, escribe a stdout.
    """
    indent = 2 if pretty else None
    contenido = json.dumps(datos, indent=indent, ensure_ascii=False)

    if ruta:
        Path(ruta).write_text(contenido, encoding="utf-8")
        print(f"  Guardado: {ruta} ({len(datos)} registros)", file=sys.stderr)
    else:
        print(contenido)


# ── CLI ───────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="Convierte un archivo CSV a JSON."
    )
    parser.add_argument("input", help="Archivo CSV de entrada")
    parser.add_argument("--output", "-o", help="Archivo JSON de salida (default: stdout)")
    parser.add_argument("--delimiter", "-d", help="Separador de campos (default: autodetectar)")
    parser.add_argument("--pretty", "-p", action="store_true", help="Formato JSON con indent=2")
    parser.add_argument("--no-header", action="store_true", help="El CSV no tiene fila de encabezados")
    parser.add_argument("--encoding", "-e", help="Encoding del CSV (default: autodetectar)")
    args = parser.parse_args()

    try:
        print(f"Leyendo: {args.input}", file=sys.stderr)
        datos = leer_csv(
            ruta=args.input,
            delimiter=args.delimiter,
            tiene_encabezado=not args.no_header,
            encoding=args.encoding,
        )
        print(f"  Registros leídos: {len(datos)}", file=sys.stderr)
        guardar_json(datos, ruta=args.output, pretty=args.pretty)
    except (FileNotFoundError, ValueError) as e:
        print(f"Error: {e}", file=sys.stderr)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
`,
    keyPoints: [
      'La conversión de tipos (str → int/float/bool/None) hace el JSON verdaderamente útil para APIs.',
      'Detectar el delimitador automáticamente hace la herramienta más robusta y fácil de usar.',
      'Escribir a stdout permite usar el conversor en pipelines de Unix: csv2json datos.csv | jq "."',
      'Probar múltiples encodings (utf-8-sig, latin-1) cubre la mayoría de archivos CSV reales.',
      'El patrón try int → try float → str es robusto para detectar tipos numéricos.',
      'Separar leer_csv() y guardar_json() en funciones distintas permite testear cada parte por separado.',
    ],
    exercise: {
      description: 'Extiende el conversor para que acepte un argumento --schema con un archivo JSON que mapee nombres de columnas a tipos ("edad": "int", "precio": "float"). Las columnas en el schema deben convertirse al tipo indicado, ignorando la detección automática.',
      hint: 'Lee el schema con json.load(). Al construir cada registro, verifica si el campo está en el schema antes de llamar a convertir_tipo().',
    },
    quiz: [
      {
        question: '¿Por qué el script intenta convertir los tipos de las columnas CSV?',
        options: [
          'Para comprimir el archivo JSON',
          'Porque el módulo json solo acepta integers',
          'Porque CSV guarda todo como string, pero JSON soporta tipos nativos (int, float, bool)',
          'Para que el JSON sea compatible con XML',
        ],
        correctAnswer: 'Porque CSV guarda todo como string, pero JSON soporta tipos nativos (int, float, bool)',
        correctFeedback: '¡Correcto! Si dejas "42" como string en el JSON, el código que lo consuma tendrá que convertirlo. Mejor hacerlo en la conversión: `{"edad": 42}` es más útil que `{"edad": "42"}`.',
        incorrectFeedback: 'En CSV no hay tipos: todo es texto. JSON sí tiene tipos nativos (número, booleano, null). Convertir al leer hace el JSON más útil para quien lo consuma.',
      },
      {
        question: '¿Qué hace `bool("false")` en Python? ¿Es correcto usarlo para convertir el string "false"?',
        options: [
          'Devuelve False — es correcto',
          'Devuelve True — NO es correcto porque todo string no vacío es truthy',
          'Lanza ValueError',
          'Devuelve None',
        ],
        correctAnswer: 'Devuelve True — NO es correcto porque todo string no vacío es truthy',
        correctFeedback: '¡Correcto! `bool("false")` devuelve `True` porque "false" es un string no vacío. El único string que da False es "". La forma correcta es `valor.lower() == "true"`.',
        incorrectFeedback: '`bool("false")` → `True` en Python (bug silencioso). El string "false" no está vacío, así que es truthy. La conversión correcta es comparar: `valor.lower() == "true"` → True, `valor.lower() == "false"` → False.',
      },
      {
        question: '¿Para qué sirve escribir la salida a stdout (sys.stdout) en lugar de siempre a un archivo?',
        options: [
          'Para que el script sea más rápido',
          'Para usar el script en pipelines: csv2json datos.csv | otro_comando',
          'Porque los archivos JSON no se pueden abrir en Windows',
          'Es solo un modo de depuración',
        ],
        correctAnswer: 'Para usar el script en pipelines: csv2json datos.csv | otro_comando',
        correctFeedback: '¡Correcto! Escribir a stdout permite componer herramientas en Unix: `python conversor.py datos.csv | jq ".[] | .nombre"` filtra directamente con jq sin archivos intermedios.',
        incorrectFeedback: 'Stdout es la salida estándar. Cuando el script escribe a stdout, puedes redirigirla: `python conversor.py datos.csv > salida.json` o encadenarla con | a otra herramienta. Es el principio de Unix de herramientas pequeñas y componibles.',
      },
      {
        question: '¿Qué encoding es recomendable probar primero para archivos CSV de Excel?',
        options: [
          'ascii',
          'utf-16',
          'utf-8-sig (maneja UTF-8 con y sin BOM)',
          'utf-32',
        ],
        correctAnswer: 'utf-8-sig (maneja UTF-8 con y sin BOM)',
        correctFeedback: '¡Correcto! Excel guarda CSV con BOM (Byte Order Mark). utf-8-sig lo elimina automáticamente. Si el archivo es utf-8 sin BOM, también funciona.',
        incorrectFeedback: 'Excel guarda archivos CSV con BOM (Byte Order Mark) al inicio. utf-8-sig descarta el BOM automáticamente. Si el archivo no tiene BOM, también lo lee correctamente. latin-1 es el plan B para archivos más antiguos.',
      },
      {
        question: '¿Por qué el script escribe los mensajes de progreso a sys.stderr y el JSON a sys.stdout?',
        options: [
          'Por convención, stderr es para colores y stdout para texto',
          'Para que los mensajes informativos no contaminen la salida JSON cuando se usa en pipelines',
          'stderr es más rápido que stdout',
          'No hay razón técnica, es solo estilo',
        ],
        correctAnswer: 'Para que los mensajes informativos no contaminen la salida JSON cuando se usa en pipelines',
        correctFeedback: '¡Correcto! Si el script escribe "Leyendo datos..." a stdout, eso rompe el JSON en el pipeline. stderr y stdout son streams separados; el JSON en stdout permanece limpio.',
        incorrectFeedback: 'En pipelines, stdout se redirige al siguiente proceso. Si "Leyendo: datos.csv" va a stdout, el JSON recibido por jq (o quien sea) estará corrupto. stderr se muestra en la terminal pero no se propaga por pipes.',
      },
      {
        question: 'Si una fila CSV tiene menos columnas que los encabezados, ¿qué hace el script?',
        options: [
          'Lanza un error y detiene el proceso',
          'Omite esa fila completamente',
          'Rellena las columnas faltantes con None (string vacío → None)',
          'Duplica el último valor',
        ],
        correctAnswer: 'Rellena las columnas faltantes con None (string vacío → None)',
        correctFeedback: '¡Correcto! La línea `fila_padded = fila + [""] * (len(encabezados) - len(fila))` añade strings vacíos, que luego convertir_tipo() transforma en None.',
        incorrectFeedback: 'El padding `fila + [""] * diferencia` añade strings vacíos para las columnas faltantes. `convertir_tipo("")` devuelve None. Así el registro tiene todas las claves, con None donde faltaban datos.',
      },
      {
        question: '¿Qué ventaja tiene separar detectar_delimitador(), leer_csv() y guardar_json() en funciones distintas?',
        options: [
          'El código corre más rápido',
          'Permite testear cada función por separado y reutilizarlas en otros proyectos',
          'Es un requisito de argparse',
          'Las funciones largas no funcionan en Python',
        ],
        correctAnswer: 'Permite testear cada función por separado y reutilizarlas en otros proyectos',
        correctFeedback: '¡Correcto! Puedes testear `convertir_tipo("42")` sin necesitar un archivo CSV real. `leer_csv()` puede importarse en otro script. La separación de responsabilidades es clave en buen software.',
        incorrectFeedback: 'Funciones pequeñas con una responsabilidad cada una son más fáciles de testear, entender y reutilizar. Si todo estuviera en main(), no podrías usar leer_csv() en otro proyecto sin copiar todo.',
      },
      {
        question: '¿Qué devuelve el script si el archivo CSV está completamente vacío?',
        options: [
          'Lanza FileNotFoundError',
          'Devuelve una lista vacía []',
          'Devuelve null en el JSON',
          'Cuelga indefinidamente',
        ],
        correctAnswer: 'Devuelve una lista vacía []',
        correctFeedback: '¡Correcto! La guarda `if not filas: return []` maneja este caso. El JSON resultante sería `[]`, lo cual es válido y seguro de procesar.',
        incorrectFeedback: 'Si el CSV no tiene filas (ni siquiera encabezados), `filas = list(lector)` produce `[]`. La guarda `if not filas: return []` devuelve una lista vacía. El JSON resultante es `[]`.',
      },
    ],
  },

  {
    slug: 'proyecto-extractor-enlaces',
    title: 'Proyecto: extractor de enlaces',
    module: 'Mini proyectos de automatización',
    moduleNumber: 29,
    order: 159,
    description: 'Construye un script que obtenga enlaces desde una página web y los guarde en un archivo.',
    explanation: `## Extractor de enlaces: web scraping ético

El web scraping es una habilidad muy demandada. Con este proyecto aprenderás los fundamentos extrayendo enlaces de páginas web de forma responsable.

### Lo que construiremos

Un script que:
1. Hace una petición HTTP a una URL
2. Extrae todos los \`<a href="...">\` de la página
3. Filtra enlaces vacíos, javascript:, #, mailto:
4. Normaliza URLs relativas a absolutas
5. Clasifica cada enlace como interno o externo
6. Guarda el resultado en CSV o JSON

### Ejemplo de uso

\`\`\`bash
python extractor.py https://example.com
python extractor.py https://mi-sitio.com --output enlaces.csv
python extractor.py https://mi-sitio.com --filter interno --output internos.json
\`\`\`

### Librerías necesarias

\`\`\`bash
pip install requests beautifulsoup4
\`\`\`

- **requests**: hacer peticiones HTTP fácilmente
- **BeautifulSoup**: parsear HTML y extraer elementos

### Normalización de URLs

Una página puede tener enlaces relativos:
\`\`\`html
<a href="/contacto">Contacto</a>        # relativo
<a href="https://otro.com">Otro</a>     # absoluto
<a href="../about">About</a>            # relativo
\`\`\`

Usamos \`urllib.parse.urljoin(base, href)\` para convertir todos a absolutos.

### Nota de ética

El web scraping debe hacerse de forma responsable:
- Respeta el archivo \`robots.txt\` del sitio
- Añade delays entre peticiones (no sobrecargues el servidor)
- Identifica tu bot con un User-Agent apropiado
- Nunca extraigas datos privados o de usuarios

### Estructura de salida

\`\`\`
url, texto, tipo, estado_http
https://example.com/sobre, Sobre nosotros, interno, 200
https://github.com, GitHub, externo, 200
\`\`\``,
    codeExample: `import argparse
import csv
import json
import time
from urllib.parse import urljoin, urlparse

# pip install requests beautifulsoup4
try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Instala: pip install requests beautifulsoup4")
    raise SystemExit(1)


# ── Obtener y parsear la página ───────────────────────────────
def obtener_pagina(url: str, timeout: int = 10) -> BeautifulSoup | None:
    """
    Descarga una página web y devuelve el objeto BeautifulSoup.
    Retorna None si hay error de conexión.
    """
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (compatible; ExtractorEnlaces/1.0; "
            "+https://github.com/usuario/extractor)"
        )
    }
    try:
        respuesta = requests.get(url, headers=headers, timeout=timeout)
        respuesta.raise_for_status()
        return BeautifulSoup(respuesta.text, "html.parser")
    except requests.exceptions.ConnectionError:
        print(f"Error: No se pudo conectar a {url}")
        return None
    except requests.exceptions.Timeout:
        print(f"Error: Timeout al conectar a {url}")
        return None
    except requests.exceptions.HTTPError as e:
        print(f"Error HTTP {e.response.status_code}: {url}")
        return None


# ── Extraer y filtrar enlaces ─────────────────────────────────
def extraer_enlaces(soup: BeautifulSoup, url_base: str) -> list[dict]:
    """
    Extrae todos los enlaces <a href> de la página.
    Filtra, normaliza y clasifica cada enlace.
    """
    dominio_base = urlparse(url_base).netloc
    vistos = set()
    enlaces = []

    for etiqueta in soup.find_all("a", href=True):
        href = etiqueta["href"].strip()
        texto = etiqueta.get_text(strip=True) or "(sin texto)"

        # Filtrar enlaces no válidos
        if not href:
            continue
        if href.startswith(("#", "javascript:", "mailto:", "tel:")):
            continue
        if href.startswith("data:"):
            continue

        # Normalizar URL relativa → absoluta
        url_completa = urljoin(url_base, href)

        # Asegurarse de que es http/https
        parsed = urlparse(url_completa)
        if parsed.scheme not in ("http", "https"):
            continue

        # Eliminar duplicados
        if url_completa in vistos:
            continue
        vistos.add(url_completa)

        # Clasificar: interno o externo
        tipo = "interno" if parsed.netloc == dominio_base else "externo"

        enlaces.append({
            "url":   url_completa,
            "texto": texto[:100],  # limitar longitud
            "tipo":  tipo,
        })

    return enlaces


# ── Guardar resultados ────────────────────────────────────────
def guardar_csv(enlaces: list[dict], ruta: str) -> None:
    """Guarda la lista de enlaces en un archivo CSV."""
    if not enlaces:
        print("No hay enlaces que guardar.")
        return
    campos = ["url", "texto", "tipo"]
    with open(ruta, "w", encoding="utf-8", newline="") as f:
        escritor = csv.DictWriter(f, fieldnames=campos)
        escritor.writeheader()
        escritor.writerows(enlaces)
    print(f"CSV guardado: {ruta}")


def guardar_json_enlaces(enlaces: list[dict], ruta: str) -> None:
    """Guarda la lista de enlaces en un archivo JSON."""
    with open(ruta, "w", encoding="utf-8") as f:
        json.dump(enlaces, f, indent=2, ensure_ascii=False)
    print(f"JSON guardado: {ruta}")


# ── CLI ───────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="Extrae enlaces de una página web."
    )
    parser.add_argument("url", help="URL de la página a analizar")
    parser.add_argument("--output", "-o", help="Archivo de salida (.csv o .json)")
    parser.add_argument(
        "--filter",
        choices=["interno", "externo", "todos"],
        default="todos",
        help="Filtrar por tipo de enlace (default: todos)",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=1.0,
        help="Segundos de espera entre peticiones (default: 1.0)",
    )
    args = parser.parse_args()

    print(f"Analizando: {args.url}")

    soup = obtener_pagina(args.url)
    if soup is None:
        raise SystemExit(1)

    enlaces = extraer_enlaces(soup, args.url)

    # Filtrar por tipo si se solicitó
    if args.filter != "todos":
        enlaces = [e for e in enlaces if e["tipo"] == args.filter]

    # Resumen
    internos = sum(1 for e in enlaces if e["tipo"] == "interno")
    externos = sum(1 for e in enlaces if e["tipo"] == "externo")
    print(f"  Total: {len(enlaces)} enlaces ({internos} internos, {externos} externos)")

    # Guardar o imprimir
    if args.output:
        if args.output.endswith(".json"):
            guardar_json_enlaces(enlaces, args.output)
        else:
            guardar_csv(enlaces, args.output)
    else:
        for e in enlaces[:20]:
            print(f"  [{e['tipo']:8s}] {e['url']}")
        if len(enlaces) > 20:
            print(f"  ... y {len(enlaces) - 20} más")

    # Respetar delays éticos
    time.sleep(args.delay)


if __name__ == "__main__":
    main()
`,
    keyPoints: [
      'requests + BeautifulSoup es la combinación estándar para scraping sencillo en Python.',
      'urljoin() convierte automáticamente rutas relativas como "/contacto" en URLs absolutas.',
      'Filtrar javascript:, #, mailto: antes de procesar evita enlaces no válidos en el resultado.',
      'El set `vistos` elimina duplicados en O(1) sin necesitar ordenar ni comparar listas.',
      'Escribir un User-Agent descriptivo es buena práctica ética: identifica tu bot.',
      'Usar time.sleep() entre peticiones es esencial para no sobrecargar el servidor.',
    ],
    exercise: {
      description: 'Extiende el extractor para que también verifique el código de respuesta HTTP de cada enlace (200, 404, 301...) y lo incluya en la salida. Añade una columna `estado_http` al CSV/JSON. Añade --check-links como flag opcional para no hacerlo por defecto (es lento).',
      hint: 'Usa requests.head(url, timeout=5) para verificar cada enlace sin descargar el contenido. Captura ConnectionError para los que no responden.',
    },
    quiz: [
      {
        question: '¿Para qué sirve urllib.parse.urljoin(base, href)?',
        options: [
          'Para unir dos URLs en una sola larga',
          'Para convertir URLs relativas en absolutas usando la URL base como referencia',
          'Para verificar si una URL es válida',
          'Para extraer el dominio de una URL',
        ],
        correctAnswer: 'Para convertir URLs relativas en absolutas usando la URL base como referencia',
        correctFeedback: '¡Correcto! `urljoin("https://example.com/blog/", "/contacto")` devuelve `"https://example.com/contacto"`. Sin esto, los enlaces relativos serían inútiles.',
        incorrectFeedback: '`urljoin(base, href)` resuelve un href relativo contra una URL base. `/contacto` + base `https://example.com` = `https://example.com/contacto`. Es indispensable para hacer scraping correcto.',
      },
      {
        question: '¿Por qué se filtran los enlaces que empiezan con "javascript:"?',
        options: [
          'Python no puede procesar JavaScript',
          'No son URLs reales que se puedan visitar o guardar',
          'Por seguridad, para evitar inyección de código',
          'El módulo requests no los soporta',
        ],
        correctAnswer: 'No son URLs reales que se puedan visitar o guardar',
        correctFeedback: '¡Correcto! `href="javascript:void(0)"` o `href="javascript:abrirModal()"` son acciones de JavaScript, no URLs navegables. No tienen sentido en un extractor de enlaces.',
        incorrectFeedback: 'Los href como `javascript:void(0)` son funciones JavaScript en el atributo href. No son URLs que se puedan visitar, descargar ni guardar de forma útil.',
      },
      {
        question: '¿Por qué se usa un set `vistos` en lugar de una lista para eliminar duplicados?',
        options: [
          'Los sets son más legibles',
          'La búsqueda en set es O(1); en lista es O(n). Para miles de enlaces, es mucho más rápido.',
          'Las listas no pueden contener URLs',
          'Los sets ordenan automáticamente',
        ],
        correctAnswer: 'La búsqueda en set es O(1); en lista es O(n). Para miles de enlaces, es mucho más rápido.',
        correctFeedback: '¡Correcto! `url in vistos` con un set es casi instantáneo. `url in lista` requiere comparar cada elemento. Para 10,000 enlaces, la diferencia es enorme.',
        incorrectFeedback: 'Buscar en un set (`url in vistos`) es O(1) — usa hash. Buscar en una lista es O(n) — compara uno a uno. Para páginas con muchos enlaces, O(1) vs O(n) es una diferencia muy significativa.',
      },
      {
        question: '¿Qué información devuelve urlparse(url).netloc?',
        options: [
          'El protocolo (http, https)',
          'El dominio y puerto: "example.com" o "example.com:8080"',
          'La ruta: "/blog/articulo"',
          'Los parámetros de query: "?id=1"',
        ],
        correctAnswer: 'El dominio y puerto: "example.com" o "example.com:8080"',
        correctFeedback: '¡Correcto! `urlparse("https://example.com/blog").netloc` devuelve `"example.com"`. Comparar el netloc de dos URLs permite saber si son del mismo dominio (interno vs externo).',
        incorrectFeedback: '`urlparse` descompone una URL. `.netloc` es el "network location": dominio + puerto. `.scheme` es el protocolo. `.path` es la ruta. `.query` son los parámetros.',
      },
      {
        question: '¿Por qué se usa requests.get() con un User-Agent personalizado?',
        options: [
          'Para hacer el script más rápido',
          'Porque sin User-Agent requests no funciona',
          'Para identificar el bot de forma ética y transparente',
          'Para evitar el firewall de los sitios web',
        ],
        correctAnswer: 'Para identificar el bot de forma ética y transparente',
        correctFeedback: '¡Correcto! Un User-Agent como "ExtractorEnlaces/1.0; +https://github.com/..." permite a los administradores del sitio identificar quién hace las peticiones y contactarte si hay un problema.',
        incorrectFeedback: 'Un User-Agent descriptivo es una práctica ética: le dice al servidor quién eres y cómo contactarte. Algunos sitios bloquean scrapers sin User-Agent. Identificarse es transparente y profesional.',
      },
      {
        question: '¿Qué hace soup.find_all("a", href=True)?',
        options: [
          'Encuentra todas las etiquetas <a> que tengan el atributo href presente',
          'Encuentra solo la primera etiqueta <a>',
          'Encuentra etiquetas <a> donde href=True literalmente',
          'Encuentra etiquetas <a> y <href>',
        ],
        correctAnswer: 'Encuentra todas las etiquetas <a> que tengan el atributo href presente',
        correctFeedback: '¡Correcto! Pasar `href=True` en find_all() filtra para incluir solo etiquetas que tengan ese atributo. Así se excluyen los `<a>` de ancla sin href.',
        incorrectFeedback: 'En BeautifulSoup, `find_all("a", href=True)` selecciona todas las etiquetas `<a>` que TIENEN el atributo href (sea cual sea su valor). Las etiquetas sin href quedan fuera.',
      },
      {
        question: '¿Por qué se recomienda añadir time.sleep() entre peticiones en un scraper?',
        options: [
          'Para que el programa sea más lento y fácil de depurar',
          'Para no sobrecargar el servidor del sitio web',
          'Porque requests no puede hacer peticiones seguidas',
          'Para evitar errores de timeout',
        ],
        correctAnswer: 'Para no sobrecargar el servidor del sitio web',
        correctFeedback: '¡Correcto! Sin delay, un script puede hacer cientos de peticiones por segundo, lo que puede ser indistinguible de un ataque DoS. Un delay de 1-2 segundos es una práctica ética básica.',
        incorrectFeedback: 'Sin delays, un scraper puede hacer miles de peticiones por segundo, sobrecargando el servidor o activando protecciones anti-bot. Un sleep de 1-2 segundos entre peticiones es respeto básico al servidor que estás visitando.',
      },
      {
        question: '¿Qué hace raise_for_status() del objeto de respuesta de requests?',
        options: [
          'Lanza siempre una excepción para forzar el manejo de errores',
          'Lanza HTTPError si el código de estado es 4xx o 5xx',
          'Verifica que el Content-Type sea HTML',
          'Reintenta la petición si falla',
        ],
        correctAnswer: 'Lanza HTTPError si el código de estado es 4xx o 5xx',
        correctFeedback: '¡Correcto! `respuesta.raise_for_status()` lanza `requests.exceptions.HTTPError` si el servidor devolvió un error (404, 500, etc.). Para 200 OK no hace nada.',
        incorrectFeedback: '`raise_for_status()` convierte respuestas de error HTTP (4xx, 5xx) en excepciones Python. Sin él, requests considera que una respuesta 404 es "exitosa" (la petición llegó). Con él, el código de error se convierte en excepción.',
      },
    ],
  },

  {
    slug: 'proyecto-reporte-automatico',
    title: 'Proyecto: reporte automático',
    module: 'Mini proyectos de automatización',
    moduleNumber: 29,
    order: 160,
    description: 'Construye un script que lea datos, genere un resumen y guarde el resultado en un archivo.',
    explanation: `## Generador de reportes: del CSV al informe

Generar reportes automáticos es una tarea que ahorra horas de trabajo manual. Este proyecto lee datos de ventas y produce informes en texto, HTML o Excel.

### Estructura del pipeline

\`\`\`
datos.csv → cargar → procesar → generar reporte → guardar
\`\`\`

### CSV de entrada (ventas.csv)

\`\`\`
fecha,producto,categoria,cantidad,precio_unitario
2024-01-15,Laptop,Electrónica,3,1500.00
2024-01-15,Mouse,Periféricos,10,25.00
2024-01-16,Teclado,Periféricos,5,80.00
\`\`\`

### Cálculos del reporte

1. **Total de ingresos**: suma de cantidad × precio_unitario
2. **Ingresos por producto**: agrupar y sumar
3. **Top 5 productos**: los de mayor ingreso
4. **Promedio diario**: total / número de días únicos
5. **Mejor día**: el día con más ventas

### Formatos de salida

- **texto (.txt)**: reporte legible, ideal para emails o logs
- **HTML (.html)**: reporte visual con tablas, colores
- **Excel (.xlsx)**: con openpyxl, para stakeholders que quieren hoja de cálculo

### Nombre del archivo con fecha

\`\`\`python
from datetime import datetime
fecha = datetime.now().strftime("%Y%m%d")
nombre = f"reporte_{fecha}.txt"  # reporte_20240115.txt
\`\`\`

### CLI

\`\`\`bash
python reporte.py ventas.csv --format txt
python reporte.py ventas.csv --format html --output reporte.html
python reporte.py ventas.csv --format excel
\`\`\``,
    codeExample: `import argparse
import csv
from collections import defaultdict
from datetime import datetime
from pathlib import Path


# ── Cargar datos ──────────────────────────────────────────────
def cargar_ventas(ruta: str) -> list[dict]:
    """Lee el CSV de ventas y convierte tipos."""
    ventas = []
    with open(ruta, encoding="utf-8", newline="") as f:
        for fila in csv.DictReader(f):
            try:
                ventas.append({
                    "fecha":           fila["fecha"],
                    "producto":        fila["producto"],
                    "categoria":       fila["categoria"],
                    "cantidad":        int(fila["cantidad"]),
                    "precio_unitario": float(fila["precio_unitario"]),
                    "total":           int(fila["cantidad"]) * float(fila["precio_unitario"]),
                })
            except (ValueError, KeyError) as e:
                print(f"  Fila omitida por error: {e}")
    return ventas


# ── Procesar datos ────────────────────────────────────────────
def procesar(ventas: list[dict]) -> dict:
    """Calcula las métricas del reporte."""
    if not ventas:
        return {}

    total_ingresos = sum(v["total"] for v in ventas)

    # Ingresos por producto
    por_producto: dict[str, float] = defaultdict(float)
    for v in ventas:
        por_producto[v["producto"]] += v["total"]

    # Top 5 productos
    top5 = sorted(por_producto.items(), key=lambda x: x[1], reverse=True)[:5]

    # Ingresos por categoría
    por_categoria: dict[str, float] = defaultdict(float)
    for v in ventas:
        por_categoria[v["categoria"]] += v["total"]

    # Ventas por día
    por_dia: dict[str, float] = defaultdict(float)
    for v in ventas:
        por_dia[v["fecha"]] += v["total"]

    mejor_dia = max(por_dia, key=por_dia.get)
    promedio_diario = total_ingresos / len(por_dia)

    return {
        "total_ingresos":   total_ingresos,
        "total_ventas":     len(ventas),
        "por_producto":     dict(por_producto),
        "top5":             top5,
        "por_categoria":    dict(por_categoria),
        "por_dia":          dict(por_dia),
        "mejor_dia":        mejor_dia,
        "promedio_diario":  promedio_diario,
        "dias_unicos":      len(por_dia),
    }


# ── Generar reporte texto ─────────────────────────────────────
def generar_txt(metricas: dict) -> str:
    """Genera el reporte en formato texto plano."""
    hoy = datetime.now().strftime("%d/%m/%Y %H:%M")
    lineas = [
        "=" * 60,
        "           REPORTE DE VENTAS",
        f"           Generado: {hoy}",
        "=" * 60,
        "",
        f"  Total de ingresos:    \${metricas['total_ingresos']:>12,.2f}",
        f"  Total de ventas:      {metricas['total_ventas']:>12,}",
        f"  Días con ventas:      {metricas['dias_unicos']:>12}",
        f"  Promedio diario:      \${metricas['promedio_diario']:>12,.2f}",
        f"  Mejor día:            {metricas['mejor_dia']:>12}",
        "",
        "  TOP 5 PRODUCTOS:",
        "  " + "-" * 40,
    ]
    for i, (prod, monto) in enumerate(metricas["top5"], 1):
        lineas.append(f"  {i}. {prod:<25} \${monto:>10,.2f}")

    lineas += [
        "",
        "  INGRESOS POR CATEGORÍA:",
        "  " + "-" * 40,
    ]
    for cat, monto in sorted(metricas["por_categoria"].items(), key=lambda x: -x[1]):
        lineas.append(f"  {cat:<25} \${monto:>10,.2f}")

    lineas += ["", "=" * 60]
    return "\\n".join(lineas)


# ── Generar reporte HTML ──────────────────────────────────────
def generar_html(metricas: dict) -> str:
    """Genera el reporte como página HTML con tabla."""
    hoy = datetime.now().strftime("%d/%m/%Y %H:%M")
    filas_top5 = "".join(
        f"<tr><td>{i}</td><td>{p}</td><td>\${m:,.2f}</td></tr>"
        for i, (p, m) in enumerate(metricas["top5"], 1)
    )
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Reporte de Ventas</title>
  <style>
    body {{ font-family: Arial, sans-serif; margin: 2em; color: #333; }}
    h1   {{ color: #2c7be5; }}
    .kpi {{ display: flex; gap: 1em; margin: 1em 0; }}
    .kpi-box {{ background: #f0f4ff; border-radius: 8px; padding: 1em; min-width: 150px; }}
    .kpi-valor {{ font-size: 1.5em; font-weight: bold; color: #2c7be5; }}
    table {{ border-collapse: collapse; width: 100%; max-width: 500px; }}
    th, td {{ border: 1px solid #ddd; padding: 0.5em 1em; text-align: left; }}
    th {{ background: #2c7be5; color: white; }}
    tr:nth-child(even) {{ background: #f9f9f9; }}
  </style>
</head>
<body>
  <h1>Reporte de Ventas</h1>
  <p>Generado: {hoy}</p>
  <div class="kpi">
    <div class="kpi-box">
      <div class="kpi-valor">\${metricas['total_ingresos']:,.2f}</div>
      <div>Total ingresos</div>
    </div>
    <div class="kpi-box">
      <div class="kpi-valor">{metricas['total_ventas']}</div>
      <div>Ventas</div>
    </div>
    <div class="kpi-box">
      <div class="kpi-valor">\${metricas['promedio_diario']:,.2f}</div>
      <div>Promedio diario</div>
    </div>
  </div>
  <h2>Top 5 Productos</h2>
  <table>
    <tr><th>#</th><th>Producto</th><th>Ingresos</th></tr>
    {filas_top5}
  </table>
</body>
</html>"""


# ── Guardar reporte ───────────────────────────────────────────
def guardar_reporte(contenido: str, ruta: str) -> None:
    Path(ruta).write_text(contenido, encoding="utf-8")
    print(f"Reporte guardado: {ruta}")


# ── CLI ───────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="Genera reportes de ventas desde CSV.")
    parser.add_argument("input", help="Archivo CSV de ventas")
    parser.add_argument("--format", choices=["txt", "html"], default="txt")
    parser.add_argument("--output", "-o", help="Archivo de salida (default: reporte_FECHA.ext)")
    args = parser.parse_args()

    ventas = cargar_ventas(args.input)
    if not ventas:
        print("No se encontraron datos de ventas.")
        raise SystemExit(1)

    metricas = procesar(ventas)
    fecha = datetime.now().strftime("%Y%m%d")

    if args.format == "txt":
        contenido = generar_txt(metricas)
        ruta_default = f"reporte_{fecha}.txt"
    else:
        contenido = generar_html(metricas)
        ruta_default = f"reporte_{fecha}.html"

    ruta = args.output or ruta_default
    guardar_reporte(contenido, ruta)
    print(f"  Total ingresos: \${metricas['total_ingresos']:,.2f}")
    print(f"  Top producto: {metricas['top5'][0][0] if metricas['top5'] else 'N/A'}")


if __name__ == "__main__":
    main()
`,
    keyPoints: [
      'El pipeline cargar → procesar → generar → guardar separa responsabilidades y facilita el testing.',
      'defaultdict(float) simplifica la acumulación de sumas sin necesitar verificar si la clave existe.',
      'sorted(..., key=lambda x: -x[1]) ordena por valor descendente de forma concisa.',
      'datetime.now().strftime() genera nombres de archivos con fecha para evitar sobreescrituras.',
      'f-strings con formato `:,.2f` producen números bien formateados: $1,500.00.',
      'Generar HTML directamente con f-strings es suficiente para reportes simples sin depender de Jinja2.',
    ],
    exercise: {
      description: 'Añade una función generar_excel(metricas, ventas_raw) que genere un archivo .xlsx con dos hojas: "Resumen" (con las métricas) y "Datos" (con todas las ventas). Usa openpyxl. Añade la opción --format excel al CLI.',
      hint: 'Instala openpyxl con pip. Usa Workbook(), workbook.create_sheet("Nombre"), ws.append(fila). Guarda con workbook.save(ruta).',
    },
    quiz: [
      {
        question: '¿Por qué se usa `defaultdict(float)` en lugar de un `dict` regular para acumular ingresos por producto?',
        options: [
          'defaultdict es más rápido',
          'Con defaultdict no necesitas verificar si la clave existe antes de sumar: por_producto[prod] += total funciona directo',
          'Los dicts regulares no aceptan floats',
          'defaultdict ordena automáticamente',
        ],
        correctAnswer: 'Con defaultdict no necesitas verificar si la clave existe antes de sumar: por_producto[prod] += total funciona directo',
        correctFeedback: '¡Correcto! Con un dict regular necesitarías `por_producto.setdefault(prod, 0.0) += total` o verificar `if prod not in por_producto`. defaultdict inicializa automáticamente con 0.0.',
        incorrectFeedback: 'Con dict regular: `if prod not in d: d[prod] = 0; d[prod] += total`. Con defaultdict(float): `d[prod] += total` directamente, porque la primera vez crea la clave con 0.0 automáticamente.',
      },
      {
        question: '¿Qué produce `datetime.now().strftime("%Y%m%d")`?',
        options: [
          'La hora actual: "14:30:00"',
          'La fecha en formato "2024-01-15"',
          'La fecha sin separadores: "20240115"',
          'Un timestamp Unix numérico',
        ],
        correctAnswer: 'La fecha sin separadores: "20240115"',
        correctFeedback: '¡Correcto! `%Y` = año 4 dígitos, `%m` = mes 2 dígitos, `%d` = día 2 dígitos. Sin separadores entre ellos, produce "20240115".',
        incorrectFeedback: '`strftime("%Y%m%d")` formatea la fecha como: año (4 dígitos) + mes (2 dígitos) + día (2 dígitos), sin separadores. Útil para nombres de archivo: `reporte_20240115.txt`.',
      },
      {
        question: '¿Por qué el formato de número `{valor:,.2f}` es mejor que `str(valor)` para un reporte?',
        options: [
          'Es más rápido',
          'Agrega separador de miles y dos decimales: 1500000 → "1,500,000.00"',
          'Convierte el número a entero',
          'str() no funciona con floats',
        ],
        correctAnswer: 'Agrega separador de miles y dos decimales: 1500000 → "1,500,000.00"',
        correctFeedback: '¡Correcto! `:,` añade separadores de miles, `.2f` fija dos decimales. El resultado es legible para humanos: $1,500,000.00 en lugar de 1500000.0.',
        incorrectFeedback: '`{1500000.5:.2f}` → "1500000.50". `{1500000.5:,.2f}` → "1,500,000.50". El separador de miles hace la diferencia en un reporte financiero.',
      },
      {
        question: '¿Qué ventaja tiene separar las funciones cargar_ventas(), procesar() y generar_txt()?',
        options: [
          'El código corre más rápido',
          'Puedes testear cada parte por separado y reutilizar procesar() para distintos formatos de salida',
          'Python requiere que las funciones estén separadas',
          'Permite usar más memoria',
        ],
        correctAnswer: 'Puedes testear cada parte por separado y reutilizar procesar() para distintos formatos de salida',
        correctFeedback: '¡Correcto! `procesar()` calcula las métricas una sola vez y las pasa a `generar_txt()`, `generar_html()`, o `generar_excel()`. No necesitas recalcular para cada formato.',
        incorrectFeedback: 'Separar cargar, procesar y generar significa que: puedes testear procesar() con datos de prueba sin archivos; puedes generar txt, html y excel con los mismos metricas sin releer el CSV.',
      },
      {
        question: '¿Qué hace `max(por_dia, key=por_dia.get)`?',
        options: [
          'Devuelve el valor máximo del diccionario',
          'Devuelve la CLAVE del diccionario con el valor más alto',
          'Ordena el diccionario',
          'Lanza TypeError si el diccionario está vacío',
        ],
        correctAnswer: 'Devuelve la CLAVE del diccionario con el valor más alto',
        correctFeedback: '¡Correcto! `max(por_dia, key=por_dia.get)` itera sobre las CLAVES y usa el valor asociado para comparar. Devuelve la clave (fecha) del día con mayor ingreso.',
        incorrectFeedback: '`max(por_dia)` devolvería la clave máxima alfabéticamente. `max(por_dia, key=por_dia.get)` usa los VALORES para comparar y devuelve la CLAVE ganadora — en este caso, la fecha del mejor día.',
      },
      {
        question: '¿Por qué el script añade la fecha al nombre del archivo de salida por defecto?',
        options: [
          'Es un requisito del sistema operativo',
          'Para evitar sobreescribir reportes anteriores y mantener historial',
          'Para que el archivo sea más fácil de comprimir',
          'Por estética',
        ],
        correctAnswer: 'Para evitar sobreescribir reportes anteriores y mantener historial',
        correctFeedback: '¡Correcto! `reporte_20240115.txt`, `reporte_20240116.txt`... cada ejecución crea un archivo nuevo. Así tienes historial completo sin sobreescribir el reporte de ayer.',
        incorrectFeedback: 'Si el archivo se llamara siempre `reporte.txt`, cada ejecución sobreescribiría el anterior. Con la fecha en el nombre, cada ejecución genera un archivo único y tienes historial automático.',
      },
      {
        question: 'Si el CSV de ventas tiene una fila con datos incorrectos (precio no numérico), ¿qué hace cargar_ventas()?',
        options: [
          'Detiene todo el programa con un error',
          'Ignora esa fila, imprime un aviso y continúa con las demás',
          'Reemplaza el valor incorrecto con 0',
          'Lanza ValueError sin capturar',
        ],
        correctAnswer: 'Ignora esa fila, imprime un aviso y continúa con las demás',
        correctFeedback: '¡Correcto! El try/except dentro del bucle captura ValueError y KeyError por fila. Una fila corrupta no detiene el procesamiento del resto de datos.',
        incorrectFeedback: 'El try/except está DENTRO del bucle for. Cada fila se intenta convertir independientemente. Si una falla con ValueError o KeyError, se imprime un aviso y el bucle continúa con la siguiente fila.',
      },
    ],
  },

  {
    slug: 'proyecto-generador-contrasenas',
    title: 'Proyecto: generador de contraseñas avanzado',
    module: 'Mini proyectos de automatización',
    moduleNumber: 29,
    order: 161,
    description: 'Construye un generador de contraseñas con opciones configurables desde la terminal.',
    explanation: `## Generador de contraseñas: seguridad desde la terminal

Generar contraseñas seguras parece simple, pero hay varios conceptos de seguridad importantes que aprender. Este proyecto usa el módulo \`secrets\` (no \`random\`) por razones fundamentales.

### Por qué NO usar random

\`\`\`python
import random
# ❌ NUNCA para contraseñas
pass = ''.join(random.choice(chars) for _ in range(16))
# random usa Mersenne Twister — pseudoaleatorio predecible
# Un atacante con suficiente output puede predecir los próximos valores
\`\`\`

### Por qué SÍ usar secrets

\`\`\`python
import secrets
# ✅ Diseñado específicamente para seguridad
pass = ''.join(secrets.choice(chars) for _ in range(16))
# secrets usa la fuente de aleatoriedad del SO (os.urandom())
# Criptográficamente seguro — impredecible
\`\`\`

### Evaluador de fortaleza

Una contraseña de 16 caracteres mixtos es categoría 5 (excelente). La función de evaluación considera:
- Longitud (>= 12 muy bien, >= 16 excelente)
- Presencia de mayúsculas, minúsculas, números, símbolos
- Penalización por longitud corta

### CLI del generador

\`\`\`bash
# Básico: genera 1 contraseña de 16 caracteres
python genpass.py

# Avanzado
python genpass.py --length 20 --count 5 --no-symbols

# Solo números (códigos PIN)
python genpass.py --length 6 --no-upper --no-lower --no-symbols

# Guardar en archivo
python genpass.py --count 10 --save contrasenas.txt
\`\`\`

### Copiar al portapapeles (opcional)

\`\`\`bash
pip install pyperclip
\`\`\`

\`\`\`python
import pyperclip
pyperclip.copy(contrasena)
print("Copiada al portapapeles")
\`\`\``,
    codeExample: `import argparse
import secrets
import string
from pathlib import Path


# ── Caracteres disponibles ────────────────────────────────────
MAYUSCULAS = string.ascii_uppercase      # A-Z
MINUSCULAS = string.ascii_lowercase      # a-z
NUMEROS    = string.digits               # 0-9
SIMBOLOS   = "!@#\$%^&*()-_=+[]{}|;:,.<>?"


# ── Generar una contraseña ────────────────────────────────────
def generar_contrasena(
    longitud: int = 16,
    usar_mayus: bool = True,
    usar_minus: bool = True,
    usar_nums: bool = True,
    usar_simbolos: bool = True,
) -> str:
    """
    Genera una contraseña criptográficamente segura.
    Garantiza al menos un carácter de cada tipo habilitado.
    """
    caracteres = ""
    obligatorios = []

    if usar_mayus:
        caracteres += MAYUSCULAS
        obligatorios.append(secrets.choice(MAYUSCULAS))
    if usar_minus:
        caracteres += MINUSCULAS
        obligatorios.append(secrets.choice(MINUSCULAS))
    if usar_nums:
        caracteres += NUMEROS
        obligatorios.append(secrets.choice(NUMEROS))
    if usar_simbolos:
        caracteres += SIMBOLOS
        obligatorios.append(secrets.choice(SIMBOLOS))

    if not caracteres:
        raise ValueError("Debes habilitar al menos un tipo de carácter.")

    # Rellenar el resto de la longitud
    resto = [secrets.choice(caracteres) for _ in range(longitud - len(obligatorios))]

    # Mezclar para que los obligatorios no estén siempre al inicio
    todos = obligatorios + resto
    secrets.SystemRandom().shuffle(todos)  # shuffle seguro

    return "".join(todos)


# ── Evaluar fortaleza ─────────────────────────────────────────
def evaluar_fortaleza(contrasena: str) -> tuple[int, str]:
    """
    Evalúa la fortaleza de una contraseña. Devuelve (puntuación, descripción).
    Puntuación de 1 (muy débil) a 5 (excelente).
    """
    puntos = 0

    if len(contrasena) >= 8:  puntos += 1
    if len(contrasena) >= 12: puntos += 1
    if len(contrasena) >= 16: puntos += 1

    if any(c in MAYUSCULAS for c in contrasena): puntos += 1
    if any(c in MINUSCULAS for c in contrasena): puntos += 1
    if any(c in NUMEROS    for c in contrasena): puntos += 1
    if any(c in SIMBOLOS   for c in contrasena): puntos += 1

    # Normalizar a rango 1-5
    nivel = min(5, max(1, puntos - 1))

    etiquetas = {
        1: "muy débil",
        2: "débil",
        3: "aceptable",
        4: "fuerte",
        5: "excelente",
    }
    return nivel, etiquetas[nivel]


# ── Mostrar barra de fortaleza ────────────────────────────────
def barra_fortaleza(nivel: int) -> str:
    """Devuelve una representación visual de la fortaleza."""
    lleno = "█" * nivel
    vacio = "░" * (5 - nivel)
    return f"[{lleno}{vacio}] {nivel}/5"


# ── CLI ───────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="Genera contraseñas criptográficamente seguras."
    )
    parser.add_argument("--length",  "-l", type=int, default=16, help="Longitud (default: 16)")
    parser.add_argument("--count",   "-c", type=int, default=1,  help="Cantidad a generar (default: 1)")
    parser.add_argument("--no-upper",   action="store_true", help="Sin mayúsculas")
    parser.add_argument("--no-lower",   action="store_true", help="Sin minúsculas")
    parser.add_argument("--no-numbers", action="store_true", help="Sin números")
    parser.add_argument("--no-symbols", action="store_true", help="Sin símbolos")
    parser.add_argument("--save", "-s", help="Guardar contraseñas en un archivo")
    parser.add_argument("--copy",  action="store_true", help="Copiar la primera al portapapeles")
    args = parser.parse_args()

    if args.length < 4:
        print("Error: la longitud mínima es 4.")
        raise SystemExit(1)

    generadas = []
    for _ in range(args.count):
        try:
            p = generar_contrasena(
                longitud=args.length,
                usar_mayus=not args.no_upper,
                usar_minus=not args.no_lower,
                usar_nums=not args.no_numbers,
                usar_simbolos=not args.no_symbols,
            )
            generadas.append(p)
        except ValueError as e:
            print(f"Error: {e}")
            raise SystemExit(1)

    # Mostrar contraseñas con fortaleza
    for p in generadas:
        nivel, etiqueta = evaluar_fortaleza(p)
        barra = barra_fortaleza(nivel)
        print(f"  {p}  {barra} ({etiqueta})")

    # Guardar en archivo
    if args.save:
        Path(args.save).write_text("\\n".join(generadas), encoding="utf-8")
        print(f"\\nGuardadas en: {args.save}")

    # Copiar al portapapeles
    if args.copy:
        try:
            import pyperclip
            pyperclip.copy(generadas[0])
            print("\\nPrimera contraseña copiada al portapapeles.")
        except ImportError:
            print("\\n(Instala pyperclip para copiar al portapapeles: pip install pyperclip)")


if __name__ == "__main__":
    main()
`,
    keyPoints: [
      'El módulo secrets usa la fuente de aleatoriedad del SO (os.urandom()) — es criptográficamente seguro.',
      'random.choice() es predecible dado suficiente output; NUNCA debe usarse para contraseñas.',
      'Garantizar al menos un carácter de cada tipo habilitado evita contraseñas sin números o sin símbolos.',
      'secrets.SystemRandom().shuffle() mezcla la lista de forma segura (no usar random.shuffle).',
      'El evaluador de fortaleza da retroalimentación útil al usuario sobre la calidad de la contraseña.',
      'string.ascii_uppercase, string.digits etc. evitan errores tipográficos al definir los conjuntos de caracteres.',
    ],
    exercise: {
      description: 'Agrega una función verificar_contrasena(contrasena) que compruebe si una contraseña cumple una política: mínimo 12 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo. Devuelve (bool, lista_de_problemas). Intégrala en el CLI como python genpass.py --check "MiClave123".',
      hint: 'Construye una lista de errores. Si está vacía, cumple la política. Retorna (len(errores) == 0, errores).',
    },
    quiz: [
      {
        question: '¿Por qué el módulo secrets es más seguro que random para contraseñas?',
        options: [
          'secrets genera contraseñas más largas automáticamente',
          'secrets usa la fuente de aleatoriedad del SO (os.urandom()), que es criptográficamente segura e impredecible',
          'random no puede generar caracteres especiales',
          'secrets es más rápido',
        ],
        correctAnswer: 'secrets usa la fuente de aleatoriedad del SO (os.urandom()), que es criptográficamente segura e impredecible',
        correctFeedback: '¡Correcto! random usa Mersenne Twister, un algoritmo determinístico. Con suficiente output, un atacante puede predecir los próximos valores. os.urandom() usa entropía del hardware del sistema.',
        incorrectFeedback: 'random es pseudoaleatorio: dado el mismo seed produce la misma secuencia. Un atacante con datos puede predecir futuros valores. secrets usa os.urandom() del SO, que recolecta entropía real del hardware.',
      },
      {
        question: '¿Qué problema tiene este código: `bool("false")` para convertir el string "false" a booleano?',
        options: [
          'Ninguno, funciona correctamente',
          'Devuelve True porque "false" es un string no vacío (truthy)',
          'Lanza TypeError',
          'Devuelve None',
        ],
        correctAnswer: 'Devuelve True porque "false" es un string no vacío (truthy)',
        correctFeedback: '¡Correcto! En Python, cualquier string no vacío es truthy. `bool("false")` → True. `bool("0")` → True. El único string que da False es `bool("")` → False.',
        incorrectFeedback: '`bool(x)` en Python devuelve False solo para valores "falsy": 0, "", [], {}, None. El string "false" no está vacío, por lo tanto `bool("false")` es True. ¡Un bug silencioso muy peligroso!',
      },
      {
        question: '¿Por qué el script incluye caracteres "obligatorios" (uno de cada tipo) al generar la contraseña?',
        options: [
          'Para cumplir con la longitud mínima',
          'Para garantizar que la contraseña tenga al menos un carácter de cada tipo habilitado',
          'Porque secrets.choice() lo requiere',
          'Para mejorar la fortaleza artificialmente',
        ],
        correctAnswer: 'Para garantizar que la contraseña tenga al menos un carácter de cada tipo habilitado',
        correctFeedback: '¡Correcto! Sin obligatorios, hay probabilidad de que una contraseña aleatoria no tenga ningún número o ningún símbolo. Con obligatorios, se garantiza la presencia de cada tipo.',
        incorrectFeedback: 'Estadísticamente, una contraseña completamente aleatoria podría no contener ningún símbolo, o ningún número. Los obligatorios garantizan diversidad de tipos, que es parte de una buena política de contraseñas.',
      },
      {
        question: '¿Para qué se llama a shuffle() después de crear los caracteres obligatorios?',
        options: [
          'Para ordenar alfabéticamente',
          'Para que los caracteres obligatorios no aparezcan siempre en posiciones predecibles al inicio',
          'Para eliminar duplicados',
          'shuffle() mejora la entropía de secrets',
        ],
        correctAnswer: 'Para que los caracteres obligatorios no aparezcan siempre en posiciones predecibles al inicio',
        correctFeedback: '¡Correcto! Sin shuffle, la contraseña siempre comenzaría con una mayúscula, luego una minúscula, número, símbolo... lo que es un patrón predecible. Shuffle los mezcla aleatoriamente.',
        incorrectFeedback: 'Si simplemente concatenamos `obligatorios + resto`, la contraseña siempre tendría el mismo patrón al inicio: A, a, 0, !... Shuffle mezcla todos los caracteres para que el patrón no sea predecible.',
      },
      {
        question: '¿Qué contiene string.ascii_uppercase de Python?',
        options: [
          '"ABCDEFGHIJKLMNOPQRSTUVWXYZ"',
          '"abcdefghijklmnopqrstuvwxyz"',
          '"0123456789"',
          '"!@#$%^&*()"',
        ],
        correctAnswer: '"ABCDEFGHIJKLMNOPQRSTUVWXYZ"',
        correctFeedback: '¡Correcto! El módulo string provee constantes útiles: `ascii_uppercase` (A-Z), `ascii_lowercase` (a-z), `digits` (0-9), `punctuation` (símbolos).',
        incorrectFeedback: '`string.ascii_uppercase` = "ABCDEFGHIJKLMNOPQRSTUVWXYZ". `string.ascii_lowercase` = "abcdefghijklmnopqrstuvwxyz". `string.digits` = "0123456789". Son constantes del módulo `string`.',
      },
      {
        question: 'Si el usuario ejecuta `python genpass.py --no-upper --no-lower --no-numbers --no-symbols`, ¿qué hace el script?',
        options: [
          'Genera una contraseña vacía',
          'Genera contraseñas de espacios',
          'Lanza un ValueError: "Debes habilitar al menos un tipo de carácter"',
          'Usa solo espacios y puntos',
        ],
        correctAnswer: 'Lanza un ValueError: "Debes habilitar al menos un tipo de carácter"',
        correctFeedback: '¡Correcto! La guarda `if not caracteres: raise ValueError(...)` protege contra esta situación. No tiene sentido generar una contraseña sin ningún tipo de carácter.',
        incorrectFeedback: 'La función generar_contrasena() verifica que al menos un tipo de carácter esté habilitado. Si `caracteres` está vacío, lanza ValueError. El main() lo captura y termina con SystemExit(1).',
      },
      {
        question: '¿Qué evalúa principalmente la función evaluar_fortaleza()?',
        options: [
          'Si la contraseña está en un diccionario de contraseñas comunes',
          'La longitud y la diversidad de tipos de caracteres usados',
          'El tiempo que tarda en generarse',
          'Si la contraseña tiene palabras en español',
        ],
        correctAnswer: 'La longitud y la diversidad de tipos de caracteres usados',
        correctFeedback: '¡Correcto! La fortaleza combina longitud (8, 12, 16+ caracteres) y variedad (mayúsculas, minúsculas, números, símbolos). Una contraseña larga con todos los tipos es la más fuerte.',
        incorrectFeedback: 'La fortaleza de una contraseña depende principalmente de: longitud (más larga = más combinaciones posibles) y diversidad de caracteres (más tipos = más difícil de adivinar por fuerza bruta).',
      },
    ],
  },

  {
    slug: 'proyecto-monitor-sitio',
    title: 'Proyecto: monitor simple de sitio web',
    module: 'Mini proyectos de automatización',
    moduleNumber: 29,
    order: 162,
    description: 'Construye un script que revise si una página responde correctamente y guarde el resultado.',
    explanation: `## Monitor de sitios web: tu propio sistema de alertas

Los equipos de DevOps usan herramientas de monitoreo para saber si sus servicios están funcionando. ¡Tú vas a construir una versión funcional desde cero!

### Qué monitorea el script

Para cada URL verificamos:
1. **HTTP 200**: el servidor responde correctamente
2. **Tiempo de respuesta**: cuántos milisegundos tardó
3. **Contenido esperado**: ¿está el texto "Login" en la página? (verifica que el contenido sea correcto, no solo que el servidor responda)

### CSV de URLs (urls.txt)

\`\`\`
url,texto_esperado
https://httpbin.org/status/200,httpbin
https://example.com,Example Domain
https://httpbin.org/status/404,
\`\`\`

### Formato del log (CSV)

\`\`\`
timestamp,url,estado_http,tiempo_ms,contenido_ok,ok
2024-01-15T14:30:00,https://example.com,200,342,True,True
2024-01-15T14:30:01,https://example.com,404,120,False,False
\`\`\`

### Monitoreo continuo

El script puede ejecutarse en bucle:

\`\`\`python
while True:
    verificar_todas(urls)
    time.sleep(intervalo)
\`\`\`

Esto lo convierte en un daemon real: lo dejas corriendo y guarda el historial de disponibilidad.

### Cómo ejecutarlo en background

\`\`\`bash
# Linux/Mac: en segundo plano
nohup python monitor.py --urls urls.txt --interval 60 &

# Windows: en una ventana aparte
start python monitor.py --urls urls.txt --interval 60
\`\`\`

### Extensiones posibles

- Enviar email de alerta cuando un sitio falla (smtplib)
- Calcular uptime (% de chequeos exitosos)
- Dashboard HTML generado automáticamente
- Notificaciones por Telegram o Slack (API)`,
    codeExample: `import argparse
import csv
import time
from datetime import datetime
from pathlib import Path

try:
    import requests
except ImportError:
    print("Instala: pip install requests")
    raise SystemExit(1)


# ── Verificar una URL ─────────────────────────────────────────
def verificar_url(url: str, texto_esperado: str = "", timeout: int = 10) -> dict:
    """
    Verifica si una URL responde correctamente.

    Returns:
        dict con: url, timestamp, estado_http, tiempo_ms, contenido_ok, ok
    """
    timestamp = datetime.now().isoformat(timespec="seconds")
    inicio = time.time()

    try:
        respuesta = requests.get(url, timeout=timeout, allow_redirects=True)
        tiempo_ms = int((time.time() - inicio) * 1000)
        estado_http = respuesta.status_code
        contenido_ok = (
            texto_esperado.lower() in respuesta.text.lower()
            if texto_esperado
            else True
        )
        ok = (estado_http == 200) and contenido_ok

    except requests.exceptions.ConnectionError:
        tiempo_ms = int((time.time() - inicio) * 1000)
        estado_http = 0
        contenido_ok = False
        ok = False

    except requests.exceptions.Timeout:
        tiempo_ms = timeout * 1000
        estado_http = 0
        contenido_ok = False
        ok = False

    except Exception as e:
        tiempo_ms = int((time.time() - inicio) * 1000)
        estado_http = -1
        contenido_ok = False
        ok = False

    return {
        "timestamp":     timestamp,
        "url":           url,
        "estado_http":   estado_http,
        "tiempo_ms":     tiempo_ms,
        "contenido_ok":  contenido_ok,
        "ok":            ok,
    }


# ── Guardar resultado en CSV ──────────────────────────────────
CAMPOS_LOG = ["timestamp", "url", "estado_http", "tiempo_ms", "contenido_ok", "ok"]


def registrar_resultado(resultado: dict, archivo_log: str) -> None:
    """Añade una fila al CSV de log (crea el archivo si no existe)."""
    ruta = Path(archivo_log)
    existe = ruta.exists()

    with open(ruta, "a", encoding="utf-8", newline="") as f:
        escritor = csv.DictWriter(f, fieldnames=CAMPOS_LOG)
        if not existe:
            escritor.writeheader()
        escritor.writerow(resultado)


# ── Cargar lista de URLs ──────────────────────────────────────
def cargar_urls(ruta: str) -> list[dict]:
    """
    Carga URLs desde un CSV con columnas: url, texto_esperado (opcional).
    También acepta archivos de texto plano (una URL por línea).
    """
    ruta_path = Path(ruta)
    if not ruta_path.exists():
        raise FileNotFoundError(f"No encontrado: {ruta}")

    contenido = ruta_path.read_text(encoding="utf-8").strip()
    lineas = contenido.splitlines()

    # Detectar si es CSV (tiene encabezados) o texto plano
    if "," in lineas[0] and "url" in lineas[0].lower():
        urls = []
        import io
        lector = csv.DictReader(io.StringIO(contenido))
        for fila in lector:
            urls.append({
                "url":             fila.get("url", "").strip(),
                "texto_esperado":  fila.get("texto_esperado", "").strip(),
            })
        return urls
    else:
        return [{"url": l.strip(), "texto_esperado": ""} for l in lineas if l.strip()]


# ── Ciclo de monitoreo ────────────────────────────────────────
def monitorear(urls: list[dict], archivo_log: str, intervalo: int, una_vez: bool) -> None:
    """
    Verifica todas las URLs y registra resultados.
    Si una_vez=False, repite cada \`intervalo\` segundos.
    """
    print(f"Monitoreando {len(urls)} URL(s). Log: {archivo_log}")
    if not una_vez:
        print(f"Intervalo: {intervalo}s. Ctrl+C para detener.\\n")

    while True:
        ahora = datetime.now().strftime("%H:%M:%S")
        print(f"[{ahora}] Verificando...")

        for entrada in urls:
            resultado = verificar_url(
                url=entrada["url"],
                texto_esperado=entrada.get("texto_esperado", ""),
            )
            registrar_resultado(resultado, archivo_log)

            estado_emoji = "OK " if resultado["ok"] else "ERR"
            print(
                f"  [{estado_emoji}] {resultado['url'][:50]:<50} "
                f"{resultado['estado_http']:>3}  "
                f"{resultado['tiempo_ms']:>5}ms"
            )

        if una_vez:
            break

        try:
            time.sleep(intervalo)
        except KeyboardInterrupt:
            print("\\nMonitoreo detenido.")
            break


# ── CLI ───────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="Monitor de disponibilidad de sitios web.")
    parser.add_argument("--urls", "-u", required=True, help="Archivo con URLs a monitorear")
    parser.add_argument("--log", "-l", default="monitor_log.csv", help="Archivo CSV de log")
    parser.add_argument("--interval", "-i", type=int, default=60, help="Segundos entre chequeos")
    parser.add_argument("--once", action="store_true", help="Verificar una sola vez y salir")
    args = parser.parse_args()

    try:
        urls = cargar_urls(args.urls)
        monitorear(
            urls=urls,
            archivo_log=args.log,
            intervalo=args.interval,
            una_vez=args.once,
        )
    except FileNotFoundError as e:
        print(f"Error: {e}")
        raise SystemExit(1)
    except KeyboardInterrupt:
        print("\\nDetenido por el usuario.")


if __name__ == "__main__":
    main()
`,
    keyPoints: [
      'time.time() antes y después de la petición permite medir el tiempo de respuesta en milisegundos.',
      'Verificar el contenido esperado (texto en la página) detecta errores que un 200 OK no detecta.',
      'Abrir el CSV en modo "a" (append) con writeheader solo si el archivo no existe permite acumular el historial.',
      'El bucle while True con time.sleep() convierte el script en un daemon de monitoreo continuo.',
      'Manejar ConnectionError y Timeout por separado da mensajes de error más informativos.',
      'Soportar tanto CSV como texto plano en el archivo de URLs hace la herramienta más flexible.',
    ],
    exercise: {
      description: 'Añade una función generar_resumen(archivo_log) que lea el CSV de log y calcule para cada URL: total de chequeos, chequeos exitosos, porcentaje de uptime y tiempo de respuesta promedio. Imprime el resumen como una tabla.',
      hint: 'Lee el log con csv.DictReader. Agrupa por URL con defaultdict(list). Calcula uptime como exitosos/total * 100.',
    },
    quiz: [
      {
        question: '¿Por qué el monitor verifica el contenido de la página además del código HTTP 200?',
        options: [
          'Para hacer el script más lento y darle tiempo al servidor',
          'Porque el código 200 no garantiza que el contenido sea correcto (puede haber error en la app)',
          'El código HTTP 200 no significa que el servidor esté activo',
          'Para evitar falsos positivos de DNS',
        ],
        correctAnswer: 'Porque el código 200 no garantiza que el contenido sea correcto (puede haber error en la app)',
        correctFeedback: '¡Correcto! Un servidor puede devolver 200 OK pero mostrar un mensaje de error de la aplicación, una página de mantenimiento, o contenido vacío. Verificar el texto esperado confirma que la app funciona correctamente.',
        incorrectFeedback: 'Un servidor web puede devolver 200 OK aunque la aplicación interna tenga un error. Por ejemplo, Django puede devolver 200 con una página de error 500 personalizada. Verificar el contenido es más confiable.',
      },
      {
        question: '¿Cómo mide el script el tiempo de respuesta en milisegundos?',
        options: [
          'Usando datetime.now() antes y después',
          'Con time.time() antes de la petición y después, multiplicando la diferencia por 1000',
          'requests devuelve el tiempo automáticamente',
          'Con time.perf_counter() del módulo time',
        ],
        correctAnswer: 'Con time.time() antes de la petición y después, multiplicando la diferencia por 1000',
        correctFeedback: '¡Correcto! `time.time()` devuelve segundos con decimales. `(time.time() - inicio) * 1000` convierte a milisegundos. Es el patrón estándar para medir duraciones.',
        incorrectFeedback: '`inicio = time.time()` captura el timestamp antes. Después de la petición: `tiempo_ms = int((time.time() - inicio) * 1000)`. La diferencia es la duración en segundos; × 1000 la pasa a ms.',
      },
      {
        question: '¿Por qué el script abre el CSV de log en modo "a" (append) en lugar de "w"?',
        options: [
          '"w" es más lento',
          'Para no borrar el historial previo: cada ejecución añade nuevas filas al log acumulado',
          'Modo "a" es más seguro contra corrupciones',
          'El módulo csv no soporta modo "w"',
        ],
        correctAnswer: 'Para no borrar el historial previo: cada ejecución añade nuevas filas al log acumulado',
        correctFeedback: '¡Correcto! Un monitor de uptime necesita historial. Si abrieras en "w", cada chequeo borraría todos los registros anteriores. Con "a", el log crece y puedes calcular uptime histórico.',
        incorrectFeedback: 'Modo "w" sobreescribe el archivo en cada apertura, perdiendo todos los registros anteriores. Modo "a" añade al final. Para un log de monitoreo, el historial es el punto de tener el log.',
      },
      {
        question: '¿Cómo detecta el script si ya existe el encabezado en el CSV de log?',
        options: [
          'Lee las primeras 100 líneas buscando la cabecera',
          'Verifica si el archivo existe antes de escribir el encabezado',
          'Siempre escribe el encabezado (DictWriter lo deduplica)',
          'Usa un try/except al escribir el encabezado',
        ],
        correctAnswer: 'Verifica si el archivo existe antes de escribir el encabezado',
        correctFeedback: '¡Correcto! `existe = ruta.exists()` antes de abrir el archivo. Si no existe, se escribe el encabezado. Si ya existe, se salta el encabezado y se añaden solo las filas de datos.',
        incorrectFeedback: 'El patrón es: `existe = ruta.exists()` antes de `open(..., "a")`. Si el archivo no existía, `existe=False` → escribir encabezado. Si ya existía, `existe=True` → solo añadir filas. Elegante y correcto.',
      },
      {
        question: '¿Qué código de estado HTTP devuelve el script cuando hay un ConnectionError (servidor no alcanzable)?',
        options: [
          '404',
          '500',
          '0 (cero, para indicar que no hubo respuesta HTTP)',
          '-1',
        ],
        correctAnswer: '0 (cero, para indicar que no hubo respuesta HTTP)',
        correctFeedback: '¡Correcto! Cuando no hay respuesta (timeout, DNS no resuelve, conexión rechazada), no hay código HTTP real. El script usa 0 para indicar "no hubo respuesta" en el log.',
        incorrectFeedback: 'Un ConnectionError significa que ni siquiera hubo respuesta del servidor (no está disponible). No hay código HTTP. El script usa 0 como centinela para distinguirlo de errores HTTP reales (404, 500).',
      },
      {
        question: '¿Qué hace el argumento --once en el monitor?',
        options: [
          'Verifica solo la primera URL de la lista',
          'Ejecuta el monitoreo una sola vez y termina, sin el bucle continuo',
          'Limita a una petición por URL',
          'Ejecuta el monitor una vez por hora',
        ],
        correctAnswer: 'Ejecuta el monitoreo una sola vez y termina, sin el bucle continuo',
        correctFeedback: '¡Correcto! --once es útil para verificación rápida o para ejecutar el script desde un cron job (que ya maneja la periodicidad externamente).',
        incorrectFeedback: 'Sin --once, el script corre indefinidamente (while True + sleep). Con --once, verifica todas las URLs una vez y termina. Útil para cron jobs o para un chequeo rápido.',
      },
      {
        question: '¿Por qué se captura KeyboardInterrupt (Ctrl+C) en el bucle de monitoreo?',
        options: [
          'Para reiniciar el monitoreo automáticamente',
          'Para terminar el programa de forma limpia con un mensaje, en lugar de mostrar un traceback feo',
          'Ctrl+C normalmente no detiene los bucles while',
          'Para guardar el log antes de salir',
        ],
        correctAnswer: 'Para terminar el programa de forma limpia con un mensaje, en lugar de mostrar un traceback feo',
        correctFeedback: '¡Correcto! Sin el try/except, Ctrl+C muestra un traceback intimidante con "KeyboardInterrupt". Capturándolo, el programa imprime un mensaje amigable y sale correctamente.',
        incorrectFeedback: 'Sin capturar KeyboardInterrupt, Ctrl+C muestra un traceback. Capturándolo: `print("Monitoreo detenido.")` + `break` termina el programa limpiamente. Mejor experiencia de usuario.',
      },
      {
        question: '¿Qué ventaja tiene soportar tanto CSV como texto plano para el archivo de URLs?',
        options: [
          'El CSV es más rápido de leer',
          'Facilita el uso: el texto plano es más simple; el CSV permite añadir texto_esperado por URL',
          'El texto plano soporta más URLs',
          'Son formatos idénticos',
        ],
        correctAnswer: 'Facilita el uso: el texto plano es más simple; el CSV permite añadir texto_esperado por URL',
        correctFeedback: '¡Correcto! Para un uso rápido, una lista de URLs en texto plano es suficiente. Para monitoreo avanzado con verificación de contenido, el CSV permite especificar el texto esperado por cada URL.',
        incorrectFeedback: 'El texto plano (una URL por línea) es simple de crear. El CSV permite añadir metadatos como el texto esperado por URL. Soportar ambos hace la herramienta más flexible sin complicar su uso básico.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module29: Module = {
  number: 29,
  title: 'Mini proyectos de automatización',
  level: 'practico',
  lessons: lessonsModule29,
}
