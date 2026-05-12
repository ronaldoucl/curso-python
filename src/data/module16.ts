import type { Lesson } from '@/types'

export const lessonsModule16: Lesson[] = [
  {
    slug: 'datetime-python',
    title: 'Introducción a datetime',
    module: 'Fechas y tiempo con datetime',
    moduleNumber: 16,
    order: 73,
    description: 'Aprende a representar fechas y horas usando el módulo datetime.',
    explanation: `El módulo \`datetime\` de la biblioteca estándar de Python permite trabajar con fechas, horas y duraciones.

**Principales clases del módulo:**

| Clase | Qué representa |
|-------|---------------|
| \`date\` | Solo fecha (año, mes, día) |
| \`time\` | Solo hora (hora, minuto, segundo, microsegundo) |
| \`datetime\` | Fecha + hora juntas |
| \`timedelta\` | Duración / diferencia entre fechas |

**Importar:**
\`\`\`python
from datetime import date, time, datetime, timedelta
\`\`\`

**Crear fechas:**
\`\`\`python
hoy = date.today()                    # fecha actual
ahora = datetime.now()                # fecha y hora actual
nacimiento = date(1990, 5, 15)        # año, mes, día
reunion = datetime(2024, 12, 25, 9, 30)  # año, mes, día, hora, min
\`\`\`

**Acceder a componentes:**
\`\`\`python
ahora = datetime.now()
print(ahora.year)    # 2024
print(ahora.month)   # 12
print(ahora.day)     # 25
print(ahora.hour)    # 9
print(ahora.minute)  # 30
print(ahora.weekday())  # 0=lunes, 6=domingo
\`\`\`

**Fechas son inmutables:** no puedes cambiar un campo directamente. Para crear una fecha modificada, usa \`.replace()\`:
\`\`\`python
fecha = date(2024, 1, 15)
nueva = fecha.replace(month=6)   # 2024-06-15
\`\`\``,
    codeExample: `from datetime import date, time, datetime, timedelta

# ── Fecha actual ──────────────────────────────────────────────
hoy = date.today()
ahora = datetime.now()
print(f"Hoy: {hoy}")         # 2024-05-11
print(f"Ahora: {ahora}")     # 2024-05-11 14:30:00.123456

# ── Crear fechas específicas ──────────────────────────────────
independencia_mx = date(1810, 9, 16)
primer_vuelo = datetime(1903, 12, 17, 10, 35)

print(f"Independencia MX: {independencia_mx}")
print(f"Primer vuelo: {primer_vuelo}")

# ── Acceder a componentes ─────────────────────────────────────
fecha = datetime(2024, 11, 5, 8, 30, 15)
print(f"Año:     {fecha.year}")       # 2024
print(f"Mes:     {fecha.month}")      # 11
print(f"Día:     {fecha.day}")        # 5
print(f"Hora:    {fecha.hour}")       # 8
print(f"Minuto:  {fecha.minute}")     # 30
print(f"Segundo: {fecha.second}")     # 15

# Día de la semana (0=lunes, 6=domingo)
dias = ["lunes", "martes", "miércoles", "jueves",
        "viernes", "sábado", "domingo"]
print(f"Día de semana: {dias[fecha.weekday()]}")  # martes

# ── replace() para crear variante ────────────────────────────
inicio_año = hoy.replace(month=1, day=1)
fin_año    = hoy.replace(month=12, day=31)
print(f"Inicio año: {inicio_año}")
print(f"Fin año:    {fin_año}")

# ── Comparar fechas ───────────────────────────────────────────
f1 = date(2020, 1, 1)
f2 = date(2024, 1, 1)
print(f1 < f2)    # True
print(f1 == f2)   # False`,
    keyPoints: [
      'Importa desde el módulo estándar: `from datetime import date, datetime, timedelta`',
      '`date.today()` devuelve la fecha actual; `datetime.now()` devuelve fecha + hora',
      'Los componentes se acceden como atributos: `.year`, `.month`, `.day`, `.hour`, `.minute`',
      '`.weekday()` devuelve 0=lunes hasta 6=domingo',
      'Los objetos `date` y `datetime` son inmutables — usa `.replace()` para crear versiones modificadas',
      'Las fechas se comparan directamente con `<`, `>`, `==`',
    ],
    exercise: {
      description: 'Crea una función `info_fecha(año, mes, dia)` que devuelva un diccionario con: el día de la semana en español, si es fin de semana (True/False), y el número del día en el año (1-365/366). Usa los atributos del objeto `date`.',
      hint: 'El número de día en el año es `fecha.timetuple().tm_yday`.',
    },
    quiz: [
      {
        question: '¿Cómo obtienes la fecha de hoy en Python?',
        options: ['datetime.today()', 'date.now()', 'date.today()', 'datetime.date()'],
        correctAnswer: 'date.today()',
        correctFeedback: 'Correcto. `date.today()` devuelve solo la fecha (sin hora). `datetime.now()` devuelve fecha + hora.',
        incorrectFeedback: '`date.today()` devuelve solo la fecha actual (año, mes, día). `datetime.now()` devuelve fecha y hora. No existe `date.now()` ni `datetime.today()` como método estático.',
      },
      {
        question: '¿Qué devuelve `date(2024, 6, 15).weekday()`?',
        options: ['6 (domingo)', '5 (sábado)', '4 (viernes)', '0 (lunes)'],
        correctAnswer: '5 (sábado)',
        correctFeedback: 'Correcto. El 15 de junio de 2024 es sábado. `weekday()` devuelve 0=lunes…6=domingo.',
        incorrectFeedback: '`weekday()` devuelve un número del 0 (lunes) al 6 (domingo). El 15 de junio de 2024 cae en sábado = 5.',
      },
      {
        question: '¿Cuál de estas clases del módulo `datetime` representa solo la hora sin fecha?',
        options: ['datetime', 'date', 'time', 'timedelta'],
        correctAnswer: 'time',
        correctFeedback: 'Correcto. La clase `time` almacena solo hora, minutos, segundos y microsegundos. Sin fecha.',
        incorrectFeedback: 'La clase `time` representa solo la hora (hora, minuto, segundo, microsegundo). `date` es solo fecha, `datetime` combina ambos, y `timedelta` es una duración.',
      },
      {
        question: '¿Cómo se crea una versión de `hoy` con el mes cambiado a enero?',
        options: ['hoy.month = 1', 'hoy.replace(month=1)', 'date.replace(hoy, month=1)', 'hoy.set_month(1)'],
        correctAnswer: 'hoy.replace(month=1)',
        correctFeedback: 'Correcto. `.replace()` crea un nuevo objeto `date` con los campos especificados cambiados. Los objetos date son inmutables.',
        incorrectFeedback: 'Los objetos `date` son inmutables, no puedes asignar directamente a sus atributos. Usa `.replace(campo=valor)` que devuelve un nuevo objeto con el campo modificado.',
      },
      {
        question: '¿Qué pasa si comparas `date(2024, 1, 1) < date(2023, 12, 31)`?',
        options: ['TypeError: no se pueden comparar fechas', 'True', 'False', 'None'],
        correctAnswer: 'False',
        correctFeedback: 'Correcto. El 1 de enero de 2024 es posterior al 31 de diciembre de 2023, así que la comparación `<` es False.',
        incorrectFeedback: 'Las fechas se comparan cronológicamente. `date(2024, 1, 1)` es el 1 de enero de 2024, que es POSTERIOR al 31 de diciembre de 2023. Por tanto `2024-01-01 < 2023-12-31` es False.',
      },
      {
        question: '¿Cuántos argumentos requiere `datetime(año, mes, día, hora, minuto)`?',
        options: ['Solo año, mes y día son obligatorios', 'Todos son obligatorios', 'Solo el año es obligatorio', 'Solo año y mes son obligatorios'],
        correctAnswer: 'Solo año, mes y día son obligatorios',
        correctFeedback: 'Correcto. `datetime` requiere año, mes y día mínimo. Hora, minuto, segundo y microsegundo son opcionales (default 0).',
        incorrectFeedback: '`datetime` solo requiere año, mes y día. `datetime(2024, 6, 15)` es válido y asume hora=0, minuto=0, segundo=0. Los componentes de tiempo son opcionales.',
      },
    ],
  },

  {
    slug: 'crear-formatear-fechas',
    title: 'Crear y formatear fechas',
    module: 'Fechas y tiempo con datetime',
    moduleNumber: 16,
    order: 74,
    description: 'Aprende a crear fechas y mostrarlas en formatos personalizados usando strftime.',
    explanation: `Para mostrar fechas en un formato legible o específico (como "15 de junio de 2024" o "15/06/24"), usamos \`strftime()\` (string format time).

**Sintaxis:**
\`\`\`python
fecha.strftime(formato)
\`\`\`

**Códigos de formato más comunes:**

| Código | Significado | Ejemplo |
|--------|-------------|---------|
| \`%Y\` | Año con 4 dígitos | 2024 |
| \`%y\` | Año con 2 dígitos | 24 |
| \`%m\` | Mes con 2 dígitos | 06 |
| \`%B\` | Nombre del mes (inglés) | June |
| \`%d\` | Día con 2 dígitos | 15 |
| \`%H\` | Hora (24h) | 14 |
| \`%I\` | Hora (12h) | 02 |
| \`%M\` | Minutos | 30 |
| \`%S\` | Segundos | 05 |
| \`%p\` | AM/PM | PM |
| \`%A\` | Nombre del día (inglés) | Saturday |
| \`%a\` | Día abreviado | Sat |

**Ejemplos:**
\`\`\`python
from datetime import datetime

ahora = datetime(2024, 6, 15, 14, 30, 5)

print(ahora.strftime("%d/%m/%Y"))         # 15/06/2024
print(ahora.strftime("%Y-%m-%d"))         # 2024-06-15 (ISO 8601)
print(ahora.strftime("%d de %B de %Y"))   # 15 de June de 2024
print(ahora.strftime("%I:%M %p"))         # 02:30 PM
\`\`\`

**Nota:** \`%B\` y \`%A\` dan el nombre en el idioma del sistema. En sistemas configurados en inglés, saldrá en inglés. Para español, puedes configurar el locale o construir la cadena manualmente.`,
    codeExample: `from datetime import datetime, date

ahora = datetime(2024, 6, 15, 14, 30, 5)

# Formatos más comunes
print(ahora.strftime("%d/%m/%Y"))           # 15/06/2024
print(ahora.strftime("%Y-%m-%d"))           # 2024-06-15  (ISO 8601)
print(ahora.strftime("%d/%m/%Y %H:%M"))     # 15/06/2024 14:30
print(ahora.strftime("%I:%M %p"))           # 02:30 PM

# Formato con nombre de día y mes en español (manual)
MESES = {
    1: "enero", 2: "febrero", 3: "marzo", 4: "abril",
    5: "mayo", 6: "junio", 7: "julio", 8: "agosto",
    9: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre"
}
DIAS = ["lunes", "martes", "miércoles", "jueves",
        "viernes", "sábado", "domingo"]

def fecha_en_espanol(fecha):
    return (
        f"{DIAS[fecha.weekday()]}, "
        f"{fecha.day} de {MESES[fecha.month]} de {fecha.year}"
    )

print(fecha_en_espanol(ahora))  # sábado, 15 de junio de 2024

# Formatos especiales
print(ahora.strftime("Semana %W del año %Y"))  # Semana 24 del año 2024
print(ahora.strftime("Día %j del año"))         # Día 167 del año

# ISO format (estándar para guardar en BD)
print(ahora.isoformat())  # 2024-06-15T14:30:05

# Comparar formato manual vs strftime
hoy = date.today()
# Para sistemas en inglés:
print(hoy.strftime("%B %d, %Y"))    # June 15, 2024
# Formato manual en español:
print(f"{hoy.day} de {MESES[hoy.month]} de {hoy.year}")`,
    keyPoints: [
      '`strftime(formato)` convierte una fecha a string usando códigos de formato',
      '`%Y` = año 4 dígitos, `%m` = mes 2 dígitos, `%d` = día 2 dígitos',
      '`%H:%M:%S` para hora 24h; `%I:%M %p` para hora 12h con AM/PM',
      '`%B` y `%A` dan el nombre del mes/día en el idioma del sistema (puede ser inglés)',
      '`.isoformat()` es el formato estándar para guardar fechas en bases de datos (2024-06-15T14:30:05)',
      'Para nombres en español, construye un diccionario de meses/días o configura el locale',
    ],
    exercise: {
      description: 'Escribe una función `formato_recibo(fecha_hora)` que reciba un datetime y lo formatee como: `"Fecha: sábado 15/06/2024 ─ Hora: 2:30 PM"`. Usa strftime para el formato de fecha numérico y hora, y el diccionario de días para el nombre en español.',
      hint: 'Combina el nombre del día (dict) con `strftime("%d/%m/%Y")` para la fecha y `strftime("%I:%M %p")` para la hora.',
    },
    quiz: [
      {
        question: '¿Qué produce `datetime(2024, 3, 5, 9, 7, 2).strftime("%d/%m/%Y %H:%M")`?',
        options: ['5/3/2024 9:7', '05/03/2024 09:07', '2024/03/05 09:07', '05-03-2024 09:07'],
        correctAnswer: '05/03/2024 09:07',
        correctFeedback: 'Correcto. `%d` y `%m` y `%H` usan cero a la izquierda para valores de un dígito: 05, 03, 09.',
        incorrectFeedback: '`%d`, `%m`, `%H`, `%M` siempre producen dos dígitos con cero a la izquierda cuando el valor es menor a 10. El resultado es "05/03/2024 09:07".',
      },
      {
        question: '¿Qué código de formato produce el año con 4 dígitos?',
        options: ['%y', '%Y', '%year', '%YYYY'],
        correctAnswer: '%Y',
        correctFeedback: 'Correcto. `%Y` = año completo (2024). `%y` = año abreviado (24).',
        incorrectFeedback: '`%Y` (mayúscula) da el año completo: 2024. `%y` (minúscula) da los últimos dos dígitos: 24. Solo hay códigos de una letra.',
      },
      {
        question: '¿Cuál es el formato ISO 8601 estándar para guardar fechas en bases de datos?',
        options: ['DD/MM/YYYY', 'YYYY-MM-DD', 'MM-DD-YYYY', 'YYYY/MM/DD HH:MM'],
        correctAnswer: 'YYYY-MM-DD',
        correctFeedback: 'Correcto. ISO 8601 usa YYYY-MM-DD (y para datetime: YYYY-MM-DDTHH:MM:SS). Es el estándar internacional.',
        incorrectFeedback: 'ISO 8601 usa el formato YYYY-MM-DD (año primero, luego mes, luego día). En Python: `fecha.strftime("%Y-%m-%d")` o `fecha.isoformat()`. Es el estándar para bases de datos.',
      },
      {
        question: '¿Qué hace `.isoformat()` en un objeto datetime?',
        options: [
          'Convierte a número (timestamp)',
          'Devuelve la fecha como string en formato ISO 8601',
          'Valida si la fecha es correcta',
          'Convierte al timezone UTC',
        ],
        correctAnswer: 'Devuelve la fecha como string en formato ISO 8601',
        correctFeedback: 'Correcto. `datetime(2024, 6, 15, 14, 30).isoformat()` devuelve `"2024-06-15T14:30:00"`.',
        incorrectFeedback: '`.isoformat()` devuelve la fecha como string en formato ISO 8601: `"2024-06-15T14:30:00"`. Es equivalente a `strftime("%Y-%m-%dT%H:%M:%S")`.',
      },
      {
        question: '¿Por qué `%B` puede dar el nombre del mes en inglés en algunos sistemas?',
        options: [
          'Porque %B solo funciona con inglés',
          'Porque depende del locale (configuración de idioma) del sistema operativo',
          'Porque Python no soporta español',
          'Porque es un bug de Python',
        ],
        correctAnswer: 'Porque depende del locale (configuración de idioma) del sistema operativo',
        correctFeedback: 'Correcto. `%B` y `%A` usan el locale del sistema. En sistemas con locale inglés (como muchos servidores), salen en inglés. Para español, configura el locale o usa un diccionario.',
        incorrectFeedback: '`%B` y `%A` usan el locale del sistema operativo. En servidores Linux con locale `en_US`, salen en inglés. Para garantizar español, usa un diccionario propio de meses y días.',
      },
      {
        question: '¿Qué produce `date(2024, 1, 9).strftime("%y-%m-%d")`?',
        options: ['2024-01-09', '24-01-09', '24-1-9', '09-01-24'],
        correctAnswer: '24-01-09',
        correctFeedback: 'Correcto. `%y` (minúscula) da los últimos 2 dígitos del año: 24.',
        incorrectFeedback: '`%y` (minúscula) da el año con solo 2 dígitos: 24. `%m` da el mes con 2 dígitos: 01. `%d` da el día con 2 dígitos: 09. Resultado: "24-01-09".',
      },
    ],
  },

  {
    slug: 'convertir-texto-fecha',
    title: 'Convertir texto a fecha',
    module: 'Fechas y tiempo con datetime',
    moduleNumber: 16,
    order: 75,
    description: 'Aprende a convertir strings en fechas usando strptime.',
    explanation: `Mientras \`strftime\` convierte fecha → string, \`strptime\` hace lo contrario: convierte string → datetime.

**Sintaxis:**
\`\`\`python
datetime.strptime(cadena, formato)
\`\`\`

El \`formato\` debe coincidir exactamente con la estructura del string.

**Ejemplos:**
\`\`\`python
from datetime import datetime

# String en formato día/mes/año
fecha = datetime.strptime("15/06/2024", "%d/%m/%Y")
print(fecha)   # 2024-06-15 00:00:00

# Con hora
dt = datetime.strptime("15/06/2024 14:30", "%d/%m/%Y %H:%M")
print(dt.year)   # 2024
print(dt.hour)   # 14
\`\`\`

**Error común:** si el formato no coincide, lanza \`ValueError\`:
\`\`\`python
# ❌ El formato no coincide
datetime.strptime("2024-06-15", "%d/%m/%Y")
# ValueError: time data '2024-06-15' does not match format '%d/%m/%Y'
\`\`\`

**¿Cuándo usarlo?**
- Cuando lees fechas de archivos de texto (CSV, logs)
- Cuando el usuario ingresa una fecha como texto
- Cuando recibes fechas de una API externa en formato string

**Convertir solo a date (sin hora):**
\`\`\`python
from datetime import datetime

fecha_str = "15/06/2024"
fecha = datetime.strptime(fecha_str, "%d/%m/%Y").date()
print(type(fecha))   # <class 'datetime.date'>
\`\`\``,
    codeExample: `from datetime import datetime

# strptime: string → datetime
casos = [
    ("15/06/2024",              "%d/%m/%Y"),
    ("2024-06-15",              "%Y-%m-%d"),
    ("15/06/2024 14:30",        "%d/%m/%Y %H:%M"),
    ("Jun 15, 2024",            "%b %d, %Y"),
    ("Saturday, June 15, 2024", "%A, %B %d, %Y"),
]

for texto, formato in casos:
    try:
        fecha = datetime.strptime(texto, formato)
        print(f"'{texto}' → {fecha.date()}")
    except ValueError as e:
        print(f"Error: {e}")

# Solo fecha (sin hora)
fecha_str = "2024-11-05"
solo_fecha = datetime.strptime(fecha_str, "%Y-%m-%d").date()
print(f"Tipo: {type(solo_fecha)}")   # <class 'datetime.date'>

# Función de utilidad: convertir con manejo de errores
def parsear_fecha(texto, formato="%d/%m/%Y"):
    """Convierte un string a date. Devuelve None si el formato no coincide."""
    try:
        return datetime.strptime(texto, formato).date()
    except ValueError:
        print(f"No se pudo parsear '{texto}' con formato '{formato}'")
        return None

print(parsear_fecha("15/06/2024"))        # 2024-06-15
print(parsear_fecha("2024-06-15"))        # None + mensaje de error
print(parsear_fecha("2024-06-15", "%Y-%m-%d"))  # 2024-06-15

# Comparar fechas parseadas
nacimiento = parsear_fecha("01/01/1990")
hoy = datetime.now().date()
if nacimiento:
    edad = (hoy - nacimiento).days // 365
    print(f"Edad aproximada: {edad} años")`,
    keyPoints: [
      '`datetime.strptime(texto, formato)` convierte string a datetime',
      'El formato en `strptime` debe coincidir EXACTAMENTE con el string — si no, lanza `ValueError`',
      'Para obtener solo `date` (sin hora), encadena `.date()` al resultado',
      'Usa siempre try/except al parsear fechas de entradas externas (usuario, archivos, APIs)',
      '`strptime` es lo opuesto de `strftime`: uno convierte a string, el otro desde string',
      'Los mismos códigos de formato (`%d`, `%m`, `%Y`, etc.) aplican a ambos',
    ],
    exercise: {
      description: 'Escribe una función `normalizar_fecha(texto)` que acepte fechas en cualquiera de estos formatos: "DD/MM/YYYY", "YYYY-MM-DD", o "DD-MM-YYYY". Devuelva siempre un objeto `date`. Si ningún formato funciona, devuelve `None`.',
      hint: 'Intenta con cada formato en orden dentro de bloques try/except `ValueError`. Devuelve el resultado del primero que funcione.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `strftime` y `strptime`?',
        options: [
          'Son idénticos, hacen lo mismo',
          '`strftime`: fecha → string; `strptime`: string → datetime',
          '`strftime`: string → fecha; `strptime`: fecha → string',
          '`strftime` es para fechas; `strptime` es para horas',
        ],
        correctAnswer: '`strftime`: fecha → string; `strptime`: string → datetime',
        correctFeedback: 'Correcto. "f" de format → formatea (fecha a string). "p" de parse → parsea (string a fecha).',
        incorrectFeedback: '`strftime` (format time) convierte una fecha a string. `strptime` (parse time) convierte un string a datetime. Recuerda: "f" = format, "p" = parse.',
      },
      {
        question: '¿Qué excepción lanza `strptime` si el formato no coincide?',
        options: ['TypeError', 'ValueError', 'DateFormatError', 'AttributeError'],
        correctAnswer: 'ValueError',
        correctFeedback: 'Correcto. Si el string no coincide con el formato, `strptime` lanza `ValueError`.',
        incorrectFeedback: '`strptime` lanza `ValueError` cuando el string no coincide con el formato especificado. Siempre envuelve `strptime` en try/except ValueError cuando procesas fechas de entradas externas.',
      },
      {
        question: '¿Qué produce `datetime.strptime("2024-06-15", "%Y-%m-%d").year`?',
        options: ['Error', '"2024"', '2024', '15'],
        correctAnswer: '2024',
        correctFeedback: 'Correcto. `strptime` crea un objeto datetime, y `.year` devuelve el año como entero.',
        incorrectFeedback: '`strptime` devuelve un objeto `datetime`. Acceder a `.year` devuelve el año como entero: `2024`.',
      },
      {
        question: '¿Cómo conviertes el resultado de `strptime` a solo la parte de fecha (sin hora)?',
        options: [
          'strptime(texto, fmt).date()',
          'strptime(texto, fmt).only_date()',
          'date(strptime(texto, fmt))',
          'strptime(texto, fmt, date_only=True)',
        ],
        correctAnswer: 'strptime(texto, fmt).date()',
        correctFeedback: 'Correcto. `strptime` siempre devuelve un `datetime`. Para obtener solo la fecha, encadena `.date()`.',
        incorrectFeedback: '`strptime` siempre devuelve un `datetime` (con componentes de hora en 0). Para obtener solo un `date`, encadena el método `.date()` al resultado.',
      },
      {
        question: '¿Cuál es la llamada correcta para parsear "15/06/2024"?',
        options: [
          'datetime.strptime("15/06/2024", "%Y/%m/%d")',
          'datetime.strptime("15/06/2024", "%d/%m/%Y")',
          'datetime.strftime("15/06/2024", "%d/%m/%Y")',
          'date.parse("15/06/2024")',
        ],
        correctAnswer: 'datetime.strptime("15/06/2024", "%d/%m/%Y")',
        correctFeedback: 'Correcto. El formato `%d/%m/%Y` coincide con día/mes/año de 4 dígitos.',
        incorrectFeedback: 'Para "15/06/2024" (día/mes/año), el formato correcto es `"%d/%m/%Y"`. El formato `"%Y/%m/%d"` esperaría año/mes/día.',
      },
      {
        question: '¿Por qué es importante usar try/except al parsear fechas de entrada del usuario?',
        options: [
          'Porque strptime es lento y puede timeout',
          'Porque el usuario puede ingresar el formato incorrecto, causando ValueError',
          'Porque datetime no puede manejar fechas antes de 1970',
          'Porque las fechas se almacenan en UTC',
        ],
        correctAnswer: 'Porque el usuario puede ingresar el formato incorrecto, causando ValueError',
        correctFeedback: 'Correcto. El input del usuario es impredecible. Si el formato no coincide, `strptime` lanza `ValueError`. Sin manejo de errores, el programa crashea.',
        incorrectFeedback: 'El usuario puede ingresar "15-06-2024" cuando esperas "15/06/2024". `strptime` no hace conversión inteligente — lanza `ValueError` si no coincide exactamente. Siempre valida con try/except.',
      },
    ],
  },

  {
    slug: 'operaciones-fechas',
    title: 'Operaciones con fechas',
    module: 'Fechas y tiempo con datetime',
    moduleNumber: 16,
    order: 76,
    description: 'Aprende a sumar, restar y comparar fechas usando timedelta.',
    explanation: `La clase \`timedelta\` representa una **duración**: la diferencia entre dos fechas o un intervalo de tiempo.

**Crear un timedelta:**
\`\`\`python
from datetime import timedelta

un_dia    = timedelta(days=1)
una_semana = timedelta(weeks=1)
un_mes    = timedelta(days=30)   # aproximado
dos_horas = timedelta(hours=2, minutes=30)
\`\`\`

**Sumar y restar fechas:**
\`\`\`python
from datetime import date, timedelta

hoy = date.today()
manana     = hoy + timedelta(days=1)
ayer       = hoy - timedelta(days=1)
en_30_dias = hoy + timedelta(days=30)
hace_1_mes = hoy - timedelta(weeks=4)
\`\`\`

**Calcular la diferencia entre dos fechas:**
\`\`\`python
fecha1 = date(2024, 1, 1)
fecha2 = date(2024, 12, 31)

diferencia = fecha2 - fecha1   # devuelve un timedelta
print(diferencia.days)         # 365 — accedes con .days
\`\`\`

**Atributos de timedelta:**
- \`.days\`: el número de días completos
- \`.seconds\`: los segundos restantes (0 ≤ s < 86400)
- \`.total_seconds()\`: la duración total en segundos

**Comparar fechas:**
\`\`\`python
f1 = date(2024, 1, 1)
f2 = date(2024, 6, 15)

print(f1 < f2)    # True
print(f2 > f1)    # True
print(f1 == f2)   # False
\`\`\``,
    codeExample: `from datetime import date, datetime, timedelta

hoy = date.today()

# ── Sumar y restar días ───────────────────────────────────────
manana       = hoy + timedelta(days=1)
ayer         = hoy - timedelta(days=1)
en_una_semana = hoy + timedelta(weeks=1)
hace_30_dias  = hoy - timedelta(days=30)

print(f"Ayer:          {ayer}")
print(f"Hoy:           {hoy}")
print(f"Mañana:        {manana}")
print(f"En una semana: {en_una_semana}")

# ── Diferencia entre fechas ───────────────────────────────────
nacimiento = date(1990, 7, 20)
diferencia = hoy - nacimiento

print(f"\nDías vividos: {diferencia.days:,}")
años_aprox = diferencia.days // 365
print(f"Años aproximados: {años_aprox}")

# ── timedelta con horas ───────────────────────────────────────
ahora = datetime.now()
en_2_horas_30  = ahora + timedelta(hours=2, minutes=30)
hace_una_semana = ahora - timedelta(weeks=1)

print(f"\nAhora:      {ahora.strftime('%Y-%m-%d %H:%M')}")
print(f"+2h30min:   {en_2_horas_30.strftime('%Y-%m-%d %H:%M')}")
print(f"-1 semana:  {hace_una_semana.strftime('%Y-%m-%d %H:%M')}")

# ── total_seconds() ───────────────────────────────────────────
duracion = timedelta(hours=1, minutes=30, seconds=45)
print(f"\nDuración en segundos: {duracion.total_seconds()}")  # 5445.0

# ── Verificar si una fecha ya pasó ───────────────────────────
vencimiento = date(2024, 12, 31)
if hoy > vencimiento:
    print("La suscripción ha vencido")
else:
    dias_restantes = (vencimiento - hoy).days
    print(f"Suscripción activa — quedan {dias_restantes} días")`,
    keyPoints: [
      '`timedelta` representa una duración; sus parámetros son `days`, `weeks`, `hours`, `minutes`, `seconds`',
      'Sumar/restar: `fecha + timedelta(days=7)` devuelve una nueva fecha',
      'Restar dos fechas: `fecha2 - fecha1` devuelve un `timedelta`',
      '`.days` accede a los días del timedelta; `.total_seconds()` devuelve la duración total en segundos',
      'Las fechas se comparan directamente con `<`, `>`, `==`, `!=`',
      'Para calcular edad exacta, usa la diferencia en días dividida entre 365.25',
    ],
    exercise: {
      description: 'Escribe una función `dias_hasta(fecha_str)` que reciba una fecha en formato "DD/MM/YYYY" y devuelva cuántos días faltan para esa fecha desde hoy. Si la fecha ya pasó, devuelve un número negativo. Usa timedelta.',
      hint: 'Parsea la fecha con strptime, obtén solo la parte date, y resta `hoy - fecha_objetivo`.',
    },
    quiz: [
      {
        question: '¿Qué tipo devuelve la operación `date(2024, 12, 31) - date(2024, 1, 1)`?',
        options: ['int', 'float', 'timedelta', 'date'],
        correctAnswer: 'timedelta',
        correctFeedback: 'Correcto. La diferencia entre dos fechas produce un `timedelta`. Para obtener el número de días, accede a `.days`.',
        incorrectFeedback: 'Restar dos objetos `date` produce un `timedelta`, no un número. Para obtener los días, accede a la propiedad `.days` del timedelta resultante.',
      },
      {
        question: '¿Cómo obtienes el número de días de un timedelta llamado `diff`?',
        options: ['diff.total_days()', 'diff.days', 'int(diff)', 'diff.count()'],
        correctAnswer: 'diff.days',
        correctFeedback: 'Correcto. `.days` es el atributo que da los días completos del timedelta.',
        incorrectFeedback: 'El atributo `.days` de un `timedelta` devuelve el número de días completos. Para duraciones mayores a un día con componente de horas, `.total_seconds()` da la duración completa.',
      },
      {
        question: '¿Qué produce `date(2024, 6, 15) + timedelta(weeks=2)`?',
        options: ['2024-06-29', '2024-06-22', '2024-07-01', 'Error'],
        correctAnswer: '2024-06-29',
        correctFeedback: 'Correcto. 2 semanas = 14 días. 15 de junio + 14 días = 29 de junio.',
        incorrectFeedback: '`timedelta(weeks=2)` equivale a `timedelta(days=14)`. El 15 de junio más 14 días es el 29 de junio de 2024.',
      },
      {
        question: '¿Qué hace `timedelta.total_seconds()`?',
        options: [
          'Devuelve solo los segundos (sin los días)',
          'Devuelve la duración total convertida completamente a segundos',
          'Convierte el timedelta a un string de segundos',
          'Devuelve el número de segundos por día',
        ],
        correctAnswer: 'Devuelve la duración total convertida completamente a segundos',
        correctFeedback: 'Correcto. `timedelta(hours=2).total_seconds()` = 7200.0. Convierte días, horas, minutos y segundos a un único valor en segundos.',
        incorrectFeedback: '`.total_seconds()` convierte toda la duración a segundos. `timedelta(days=1, hours=2).total_seconds()` = 86400 + 7200 = 93600.0. Es útil para calcular diferencias en unidades uniformes.',
      },
      {
        question: '¿Cuántos días representa `timedelta(weeks=1, days=2)`?',
        options: ['7', '9', '2', '12'],
        correctAnswer: '9',
        correctFeedback: 'Correcto. 1 semana = 7 días + 2 días adicionales = 9 días.',
        incorrectFeedback: '`timedelta(weeks=1, days=2)` = 7 días (una semana) + 2 días = 9 días en total.',
      },
      {
        question: 'Para saber si hoy es anterior a una fecha de vencimiento, ¿qué comparación usas?',
        options: [
          'timedelta(hoy, vencimiento) < 0',
          'hoy.before(vencimiento)',
          'hoy < vencimiento',
          'date.compare(hoy, vencimiento)',
        ],
        correctAnswer: 'hoy < vencimiento',
        correctFeedback: 'Correcto. Los objetos `date` soportan comparación directa. `hoy < vencimiento` es True si hoy es anterior a la fecha de vencimiento.',
        incorrectFeedback: 'Las fechas se comparan directamente con operadores estándar: `<`, `>`, `==`, `!=`, `<=`, `>=`. `hoy < vencimiento` es True si hoy está antes de la fecha de vencimiento.',
      },
    ],
  },

  {
    slug: 'calculadora-dias',
    title: 'Mini proyecto: calculadora de días',
    module: 'Fechas y tiempo con datetime',
    moduleNumber: 16,
    order: 77,
    description: 'Crea un programa que calcule cuántos días faltan para una fecha importante.',
    explanation: `En este mini proyecto aplicarás todo lo aprendido sobre el módulo \`datetime\`: parsear fechas, operar con \`timedelta\`, comparar y formatear.

**Objetivos del proyecto:**
1. Pedir al usuario una fecha importante (cumpleaños, evento, etc.)
2. Calcular cuántos días faltan (o han pasado)
3. Mostrar la información de forma amigable
4. Manejar errores de formato de entrada

**Conceptos que practicarás:**
- \`strptime\` para leer la fecha del usuario
- \`timedelta\` para calcular diferencias
- \`strftime\` para mostrar la fecha formateada
- \`try/except ValueError\` para el manejo de errores

**Estructura del programa:**
\`\`\`python
def calcular_dias_restantes(fecha_str):
    # 1. Parsear la fecha de entrada
    # 2. Calcular diferencia con hoy
    # 3. Retornar días (positivo = futuro, negativo = pasado)

def mostrar_resultado(nombre_evento, dias):
    # Mostrar mensaje amigable según si es futuro o pasado

def ejecutar():
    # Solicitar datos, llamar funciones, mostrar resultado
\`\`\``,
    codeExample: `from datetime import datetime, date

# ── Diccionarios para formato en español ─────────────────────
MESES = {
    1: "enero", 2: "febrero", 3: "marzo", 4: "abril",
    5: "mayo", 6: "junio", 7: "julio", 8: "agosto",
    9: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre"
}

def parsear_fecha(texto):
    """Parsea texto en formato DD/MM/YYYY a un objeto date."""
    formatos = ["%d/%m/%Y", "%d-%m-%Y", "%Y-%m-%d"]
    for fmt in formatos:
        try:
            return datetime.strptime(texto, fmt).date()
        except ValueError:
            continue
    raise ValueError(f"Formato de fecha no reconocido: '{texto}'")

def calcular_info_evento(fecha_evento, nombre_evento):
    """Devuelve información sobre un evento futuro o pasado."""
    hoy = date.today()
    diferencia = fecha_evento - hoy
    dias = diferencia.days

    fecha_formato = (
        f"{fecha_evento.day} de {MESES[fecha_evento.month]} "
        f"de {fecha_evento.year}"
    )

    if dias > 0:
        return {
            "evento": nombre_evento,
            "fecha": fecha_formato,
            "estado": "futuro",
            "dias": dias,
            "mensaje": f"¡Faltan {dias} días para {nombre_evento}!"
        }
    elif dias == 0:
        return {
            "evento": nombre_evento,
            "fecha": fecha_formato,
            "estado": "hoy",
            "dias": 0,
            "mensaje": f"¡Hoy es {nombre_evento}! 🎉"
        }
    else:
        return {
            "evento": nombre_evento,
            "fecha": fecha_formato,
            "estado": "pasado",
            "dias": abs(dias),
            "mensaje": f"{nombre_evento} fue hace {abs(dias)} días."
        }

# ── Prueba con varios eventos ─────────────────────────────────
eventos = [
    ("Año Nuevo 2025", "01/01/2025"),
    ("Navidad 2025",   "25/12/2025"),
    ("Independencia",  "16/09/2025"),
]

print("=" * 50)
print("      CALCULADORA DE FECHAS IMPORTANTES")
print("=" * 50)

for nombre, fecha_str in eventos:
    try:
        fecha = parsear_fecha(fecha_str)
        info = calcular_info_evento(fecha, nombre)
        print(f"\\n📅 {info['evento']}")
        print(f"   Fecha: {info['fecha']}")
        print(f"   {info['mensaje']}")
    except ValueError as e:
        print(f"Error con '{nombre}': {e}")

# ── Función bonus: próximo cumpleaños ─────────────────────────
def proximo_cumpleanos(mes, dia):
    """Calcula cuántos días faltan para el próximo cumpleaños."""
    hoy = date.today()
    este_año = hoy.replace(month=mes, day=dia)
    if este_año < hoy:
        este_año = este_año.replace(year=hoy.year + 1)
    return (este_año - hoy).days

dias = proximo_cumpleanos(12, 25)
print(f"\\n🎂 Tu próximo cumpleaños (25 dic): en {dias} días")`,
    keyPoints: [
      'Combina strptime (parsear), timedelta (calcular) y strftime (formatear) en un flujo real',
      'Intenta múltiples formatos con un bucle para mayor flexibilidad de entrada',
      'El resultado de `fecha - hoy` puede ser negativo (evento pasado) o positivo (evento futuro)',
      'Usa `abs()` para mostrar el número de días sin signo',
      'Separa la lógica en funciones pequeñas: parsear, calcular, mostrar',
      'Los diccionarios de meses en español son una solución pragmática para la localización',
    ],
    exercise: {
      description: 'Extiende el programa de calculadora de días añadiendo una función `dias_hasta_navidad()` que calcule cuántos días faltan para el 25 de diciembre del año actual (o del siguiente si ya pasó). Muestra también si falta más o menos de un mes.',
      hint: 'Usa `hoy.replace(month=12, day=25)` para crear la fecha de Navidad. Compara con hoy para ver si ya pasó.',
    },
    quiz: [
      {
        question: '¿Qué ocurre si restas una fecha futura menos hoy: `fecha_futura - hoy`?',
        options: ['Error', 'Un timedelta con `.days` negativo', 'Un timedelta con `.days` positivo', 'El resultado es cero siempre'],
        correctAnswer: 'Un timedelta con `.days` positivo',
        correctFeedback: 'Correcto. Si la fecha futura es posterior a hoy, la diferencia es positiva.',
        incorrectFeedback: '`fecha_futura - hoy` da un `timedelta` con `.days` positivo (ya que la fecha futura es mayor). `hoy - fecha_futura` daría `.days` negativo.',
      },
      {
        question: '¿Cómo verificas si un evento ya pasó usando timedelta?',
        options: [
          'timedelta.past(fecha)',
          'fecha < date.today() (la fecha es anterior a hoy)',
          'fecha.passed() == True',
          '(fecha - date.today()).days == -1',
        ],
        correctAnswer: 'fecha < date.today() (la fecha es anterior a hoy)',
        correctFeedback: 'Correcto. Comparar directamente `fecha < date.today()` es la forma más clara de verificar si un evento ya ocurrió.',
        incorrectFeedback: 'La forma más directa es `fecha < date.today()`. Si es True, el evento es pasado. También puedes verificar si `(fecha - date.today()).days < 0`, que también indica evento pasado.',
      },
      {
        question: '¿Cuál es la mejor estrategia si el usuario puede ingresar fechas en múltiples formatos?',
        options: [
          'Pedir siempre el mismo formato estricto',
          'Intentar parsear con cada formato en un bucle, usando try/except',
          'Usar solo strptime con el formato más común',
          'Convertir manualmente con split()',
        ],
        correctAnswer: 'Intentar parsear con cada formato en un bucle, usando try/except',
        correctFeedback: 'Correcto. Probar múltiples formatos en orden con try/except es flexible y robusto.',
        incorrectFeedback: 'Iterar sobre una lista de formatos y usar try/except para cada uno permite aceptar múltiples formatos de entrada sin pedirle al usuario que lo intente de nuevo.',
      },
      {
        question: '¿Por qué `abs()` es útil al mostrar días de diferencia?',
        options: [
          'Para convertir timedelta a entero',
          'Para mostrar el número de días sin importar si el evento fue pasado o futuro',
          'Para redondear los días',
          'Para calcular el valor absoluto de la fecha',
        ],
        correctAnswer: 'Para mostrar el número de días sin importar si el evento fue pasado o futuro',
        correctFeedback: 'Correcto. Si el evento pasó hace 5 días, `diferencia.days` es -5. `abs(-5)` = 5, que es más legible para el usuario.',
        incorrectFeedback: 'Cuando un evento ya pasó, `diferencia.days` es negativo. `abs(diferencia.days)` convierte el negativo a positivo para que el mensaje diga "hace X días" sin mostrar el signo negativo.',
      },
      {
        question: '¿Cómo obtienes la fecha del próximo año si la fecha de este año ya pasó?',
        options: [
          'fecha.year += 1',
          'fecha.replace(year=fecha.year + 1)',
          'fecha + timedelta(years=1)',
          'fecha.next_year()',
        ],
        correctAnswer: 'fecha.replace(year=fecha.year + 1)',
        correctFeedback: 'Correcto. `.replace()` crea una copia con el año modificado. Los objetos date son inmutables.',
        incorrectFeedback: '`fecha.replace(year=fecha.year + 1)` crea un nuevo objeto `date` con el año incrementado. No existe `timedelta(years=1)` porque los años tienen diferente número de días (años bisiestos). `.replace()` es la forma correcta.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module16: Module = {
  number: 16,
  title: 'Fechas y tiempo con datetime',
  level: 'intermedio',
  lessons: lessonsModule16,
}
