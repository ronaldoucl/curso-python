import type { Lesson } from '@/types'

export const lessonsModule30: Lesson[] = [
  {
    slug: 'definir-proyecto-final-practico',
    title: 'Definir el proyecto final',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 163,
    description: 'Aprende a elegir un problema real para automatizar y convertirlo en un proyecto práctico.',
    explanation: `## Definir el proyecto final

¡Llegaste al módulo final del nivel práctico! Ahora es momento de integrar todo lo aprendido en un proyecto real y completo.

### ¿Cómo elegir tu proyecto?

Un buen proyecto final tiene estas características:

1. **Es un problema real** que tú o alguien que conoces tiene
2. **Involucra al menos uno de**: archivos, APIs, web scraping, Excel, correos o CLI
3. **Es alcanzable en 1-3 días** de trabajo
4. **Tiene entrada y salida claras**: sabes qué datos entran y qué resultado esperas

### Ideas de proyectos según interés

| Área | Idea de proyecto |
|------|-----------------|
| Finanzas | Rastreador de gastos con exportación a Excel |
| Trabajo | Generador de reportes semanales automáticos |
| Estudio | Descargador de recursos de una página de cursos |
| Productividad | Organizador de carpetas con log de cambios |
| Datos | Conversor y limpiador de datasets CSV |
| Noticias | Digest diario de titulares por categoría |

### Cómo escribir tu definición de proyecto

Usa esta plantilla:

\`\`\`
Nombre: [Nombre descriptivo del proyecto]
Problema: [¿Qué problema resuelve?]
Entrada: [¿Qué datos recibe? ¿De dónde?]
Procesamiento: [¿Qué transformaciones hace?]
Salida: [¿Qué produce? ¿Dónde lo guarda?]
Tecnologías: [requests, openpyxl, pathlib, smtplib, etc.]
\`\`\`

### Ejemplo de definición bien hecha

\`\`\`
Nombre: Reporte semanal de gastos
Problema: Tengo mis gastos en CSV y debo hacer el reporte manualmente cada semana.
Entrada: CSV con columnas: fecha, categoría, descripción, monto
Procesamiento: Agrupar por categoría, calcular totales, comparar con semana anterior
Salida: Archivo Excel con gráfico de barras + correo HTML enviado automáticamente
Tecnologías: csv, openpyxl, smtplib, email.message
\`\`\`

### ¿Qué hace un proyecto "suficientemente bueno"?

- Funciona sin errores con datos normales
- Maneja al menos 2-3 errores comunes (archivo no encontrado, datos vacíos, etc.)
- Tiene un README con instrucciones de uso
- Está organizado en funciones con nombres claros`,
    codeExample: `# Plantilla de definición de proyecto

proyecto = {
    "nombre": "Organizador de descargas",
    "problema": "Mi carpeta de descargas tiene 500 archivos mezclados",
    "entrada": "Carpeta ~/Downloads del sistema",
    "procesamiento": [
        "Leer todos los archivos",
        "Clasificar por extensión (.pdf, .jpg, .mp4, etc.)",
        "Crear subcarpetas por categoría",
        "Mover archivos a sus carpetas",
    ],
    "salida": "Archivos organizados + log de cambios en organized.log",
    "tecnologias": ["pathlib", "shutil", "logging", "argparse"],
    "tiempo_estimado": "1 día",
}

# Mostrar resumen del proyecto
print("=" * 50)
print(f"PROYECTO: {proyecto['nombre']}")
print("=" * 50)
print(f"Problema a resolver: {proyecto['problema']}")
print(f"Entrada de datos: {proyecto['entrada']}")
print("\\nPasos de procesamiento:")
for i, paso in enumerate(proyecto["procesamiento"], 1):
    print(f"  {i}. {paso}")
print(f"\\nResultado esperado: {proyecto['salida']}")
print(f"Tecnologías: {', '.join(proyecto['tecnologias'])}")
print(f"Tiempo estimado: {proyecto['tiempo_estimado']}")`,
    keyPoints: [
      'El proyecto final debe resolver un problema real y personal',
      'Debe tener entrada, procesamiento y salida claramente definidos',
      'Elige tecnologías que ya aprendiste en el nivel práctico',
      'Escribe la definición antes de escribir código',
      'Empieza simple y agrega funciones después de que lo básico funcione',
    ],
    exercise: {
      description: 'Escribe la definición completa de tu proyecto final usando la plantilla: Nombre, Problema, Entrada, Procesamiento, Salida y Tecnologías. Asegúrate de que sea algo que puedas completar en 1-3 días.',
      hint: 'Piensa en tareas repetitivas que haces cada semana en tu trabajo o estudio. ¿Qué proceso te consume más tiempo? Ese es tu proyecto ideal.',
    },
    quiz: [
      {
        question: '¿Cuál de estas opciones describe mejor un buen proyecto final de Python práctico?',
        options: [
          'Un videojuego 3D con inteligencia artificial avanzada',
          'Un script que lee ventas de CSV, calcula totales y genera un Excel con formato',
          'Una aplicación web con base de datos y autenticación completa',
          'Un compilador de lenguaje de programación propio',
        ],
        correctAnswer: 'Un script que lee ventas de CSV, calcula totales y genera un Excel con formato',
        correctFeedback: '¡Exacto! Un buen proyecto práctico es alcanzable, resuelve un problema real y usa las herramientas que ya aprendiste.',
        incorrectFeedback: 'El proyecto final debe ser alcanzable en 1-3 días y usar herramientas del nivel práctico (archivos, APIs, Excel, correos). Los proyectos demasiado grandes o complejos no son apropiados para este nivel.',
      },
      {
        question: '¿Por qué es importante escribir la definición del proyecto ANTES de escribir código?',
        options: [
          'Porque Python requiere una especificación formal antes de ejecutar',
          'Para tener claro qué construir, evitar rehacer trabajo y estimar el tiempo',
          'Porque es obligatorio para publicar el código en GitHub',
          'No es importante, se puede definir mientras se programa',
        ],
        correctAnswer: 'Para tener claro qué construir, evitar rehacer trabajo y estimar el tiempo',
        correctFeedback: '¡Correcto! Definir antes de codificar evita el problema de "empezar sin saber a dónde llegar" que genera rehacer mucho código.',
        incorrectFeedback: 'Definir el proyecto antes de codificar es crucial para evitar trabajo innecesario. Sin una definición clara, es fácil perder tiempo en funciones que no necesitas o rehacer partes completas del proyecto.',
      },
      {
        question: '¿Cuál es la señal más importante de que un proyecto es "suficientemente bueno" para terminar?',
        options: [
          'Tiene más de 1000 líneas de código',
          'Usa todas las tecnologías aprendidas en el curso',
          'Funciona sin errores con datos normales y maneja los errores comunes',
          'Fue aprobado por un experto en Python',
        ],
        correctAnswer: 'Funciona sin errores con datos normales y maneja los errores comunes',
        correctFeedback: '¡Correcto! Un proyecto "done" funciona correctamente y no explota con entradas inesperadas. El tamaño o cantidad de tecnologías no importa.',
        incorrectFeedback: 'Un buen proyecto no se mide por líneas de código ni por cuántas tecnologías usa. Lo importante es que funcione correctamente y maneje errores básicos. La simplicidad es una virtud.',
      },
      {
        question: '¿Qué debería incluir la "Entrada" en la definición de un proyecto?',
        options: [
          'Solo el nombre del archivo de Python principal',
          'Los datos que el script recibe y de dónde vienen (archivo, API, terminal, etc.)',
          'El número de líneas de código esperadas',
          'La lista de módulos de Python que se van a importar',
        ],
        correctAnswer: 'Los datos que el script recibe y de dónde vienen (archivo, API, terminal, etc.)',
        correctFeedback: '¡Exacto! La "Entrada" describe qué datos recibe el proyecto y su origen: un CSV, una API, argumentos de terminal, etc.',
        incorrectFeedback: 'La "Entrada" en la definición del proyecto describe los datos que recibe el script y de dónde vienen. Por ejemplo: "un archivo CSV con columnas fecha, monto, categoría" o "una URL de API del clima".',
      },
      {
        question: 'Seleccionas hacer un "rastreador de gastos". ¿Cuál de estas tecnologías del nivel práctico sería más adecuada para la salida?',
        options: [
          'BeautifulSoup para hacer scraping de los gastos',
          'sys.argv para mostrar los gastos en terminal',
          'openpyxl para generar un reporte Excel con totales y formato',
          'smtplib únicamente para enviar un correo con los datos crudos',
        ],
        correctAnswer: 'openpyxl para generar un reporte Excel con totales y formato',
        correctFeedback: '¡Correcto! Para un rastreador de gastos, Excel es ideal: permite formato visual, fórmulas, y es fácil de compartir con personas no técnicas.',
        incorrectFeedback: 'Para un rastreador de gastos, openpyxl es la mejor opción de salida porque permite crear un reporte visual y bien formateado. BeautifulSoup es para scraping (no aplica aquí), sys.argv es para recibir argumentos (no mostrar resultados), y smtplib puede complementar pero no reemplaza un reporte Excel.',
      },
      {
        question: '¿Qué significa que un proyecto sea "alcanzable en 1-3 días"?',
        options: [
          'Que debes programar 24 horas seguidas',
          'Que la funcionalidad básica puede completarse en ese tiempo con el conocimiento actual',
          'Que el código debe tener menos de 100 líneas',
          'Que se puede hacer sin entorno virtual',
        ],
        correctAnswer: 'Que la funcionalidad básica puede completarse en ese tiempo con el conocimiento actual',
        correctFeedback: '¡Correcto! "Alcanzable" significa que puedes llegar a una versión funcional con lo que ya sabes, sin necesitar aprender tecnologías completamente nuevas.',
        incorrectFeedback: '"Alcanzable" se refiere a que puedes completar la funcionalidad básica con tu conocimiento actual en un tiempo razonable. No tiene que ver con líneas de código ni horas continuas de trabajo.',
      },
    ],
  },
  {
    slug: 'disenar-solucion',
    title: 'Diseñar la solución',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 164,
    description: 'Aprende a dividir el proyecto en partes pequeñas: entrada, procesamiento, salida y manejo de errores.',
    explanation: `## Diseñar la solución

Antes de escribir una sola línea de Python, diseña cómo va a funcionar tu proyecto. Este paso te ahorrará horas de trabajo.

### El modelo de 4 partes

Todo proyecto práctico tiene estas 4 partes:

\`\`\`
[ENTRADA] → [PROCESAMIENTO] → [SALIDA]
                ↑
           [ERRORES]
\`\`\`

**1. Entrada**: ¿De dónde vienen los datos?
- Archivo CSV, JSON, Excel
- API externa
- Argumentos de terminal
- Input del usuario

**2. Procesamiento**: ¿Qué transformaciones se hacen?
- Calcular totales, promedios
- Filtrar y clasificar
- Combinar datos de varias fuentes
- Formatear y limpiar

**3. Salida**: ¿Qué produce el proyecto?
- Archivo Excel o CSV
- Correo electrónico
- JSON o texto
- Mensaje en terminal

**4. Errores**: ¿Qué puede salir mal?
- Archivo no encontrado
- API no responde
- Datos vacíos o mal formados
- Sin permisos de escritura

### Diseño en pseudocódigo

Antes de Python, escribe el algoritmo en español:

\`\`\`
FUNCIÓN principal():
  1. Leer argumentos de terminal (archivo de entrada, formato de salida)
  2. Verificar que el archivo existe
  3. Leer datos del CSV
  4. Para cada fila:
     - Convertir tipos (str → float para montos)
     - Agrupar por categoría
  5. Calcular totales por categoría
  6. Generar reporte Excel con formato
  7. Guardar en archivo con fecha de hoy
  8. Mostrar resumen en terminal
\`\`\`

### Dividir en funciones

Cada paso del pseudocódigo se convierte en una función:

| Paso | Función |
|------|---------|
| Leer CSV | \`leer_datos(ruta)\` |
| Agrupar | \`agrupar_por_categoria(datos)\` |
| Calcular | \`calcular_totales(grupos)\` |
| Generar Excel | \`crear_reporte_excel(totales, ruta_salida)\` |
| Main | \`main()\` |`,
    codeExample: `# Ejemplo: diseño de un rastreador de gastos

# PASO 1: Definir la estructura de datos
gasto_ejemplo = {
    "fecha": "2024-01-15",
    "categoria": "Alimentación",
    "descripcion": "Supermercado",
    "monto": 450.00,
}

# PASO 2: Diseñar las funciones (firmas primero, implementar después)

def leer_gastos(ruta_csv: str) -> list:
    """Lee el archivo CSV y devuelve lista de gastos."""
    pass  # Implementar después

def agrupar_por_categoria(gastos: list) -> dict:
    """Agrupa gastos por categoría y suma montos."""
    pass  # Implementar después

def calcular_estadisticas(grupos: dict) -> dict:
    """Calcula total, promedio y mayor gasto."""
    pass  # Implementar después

def crear_reporte_excel(estadisticas: dict, ruta_salida: str) -> None:
    """Genera archivo Excel con el reporte formateado."""
    pass  # Implementar después

def main():
    """Punto de entrada del script."""
    # 1. Leer argumentos
    # 2. Verificar archivo existe
    # 3. Leer gastos
    # 4. Agrupar y calcular
    # 5. Generar reporte
    # 6. Mostrar resumen
    pass

# Al diseñar así ANTES de codificar:
# - Sabes exactamente cuántas funciones necesitas
# - Puedes estimar el tiempo de implementación
# - Puedes implementar y probar una función a la vez
# - El código queda organizado desde el inicio

if __name__ == "__main__":
    main()`,
    keyPoints: [
      'Todo proyecto tiene 4 partes: Entrada, Procesamiento, Salida, Errores',
      'Escribe pseudocódigo en español antes de escribir Python',
      'Cada paso del pseudocódigo se convierte en una función',
      'Define las firmas de las funciones antes de implementarlas',
      'El diseño previo reduce el tiempo total de desarrollo',
    ],
    exercise: {
      description: 'Toma la definición de tu proyecto final y escribe: (1) el pseudocódigo paso a paso, (2) la lista de funciones con sus nombres y qué reciben/retornan.',
      hint: 'No escribas Python aún. Escribe en español: "Función X recibe Y y devuelve Z". Si una función hace más de una cosa, divídela en dos.',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito de escribir pseudocódigo antes de programar?',
        options: [
          'Es un requisito del compilador de Python',
          'Permite diseñar la lógica en español antes de preocuparte por la sintaxis',
          'Genera código Python automáticamente',
          'Es obligatorio para proyectos con más de 100 líneas',
        ],
        correctAnswer: 'Permite diseñar la lógica en español antes de preocuparte por la sintaxis',
        correctFeedback: '¡Correcto! El pseudocódigo te permite pensar en el problema sin distracciones de sintaxis. Primero resuelves el "qué hacer", luego el "cómo en Python".',
        incorrectFeedback: 'El pseudocódigo es una herramienta de diseño, no un requisito técnico. Te ayuda a planificar la lógica en lenguaje natural antes de traducirla a Python, separando el problema conceptual de la implementación.',
      },
      {
        question: 'Estás diseñando una función que lee un CSV, calcula promedios, genera un Excel Y envía un correo. ¿Qué deberías hacer?',
        options: [
          'Mantenerla así, es más eficiente tener todo en una función',
          'Dividirla en al menos 3-4 funciones con responsabilidades separadas',
          'Usar una clase en lugar de funciones',
          'Usar un archivo diferente para cada operación',
        ],
        correctAnswer: 'Dividirla en al menos 3-4 funciones con responsabilidades separadas',
        correctFeedback: '¡Exacto! Cada función debe hacer una sola cosa (principio de responsabilidad única). Funciones pequeñas son más fáciles de probar, depurar y reutilizar.',
        incorrectFeedback: 'Una función que hace 4 cosas diferentes viola el principio de responsabilidad única. Debe dividirse en: leer_csv(), calcular_promedios(), generar_excel(), enviar_correo(). Esto hace cada parte más fácil de probar y mantener.',
      },
      {
        question: '¿Cuál es el orden correcto para diseñar un proyecto?',
        options: [
          'Codificar → Probar → Diseñar → Refactorizar',
          'Diseñar funciones → Codificar → Probar → Repetir',
          'Instalar librerías → Codificar → Diseñar → Probar',
          'Probar → Diseñar → Codificar → Instalar librerías',
        ],
        correctAnswer: 'Diseñar funciones → Codificar → Probar → Repetir',
        correctFeedback: '¡Correcto! Diseñar antes de codificar es la práctica profesional estándar. Permite estimar tiempos, identificar problemas temprano y organizar el trabajo.',
        incorrectFeedback: 'El orden profesional es: primero diseñar (qué funciones necesito, qué reciben, qué devuelven), luego codificar, luego probar. Empezar a codificar sin diseño genera código desorganizado y difícil de mantener.',
      },
      {
        question: 'En el modelo de 4 partes, ¿qué corresponde a "Errores"?',
        options: [
          'Los bugs en el código que debes corregir',
          'Situaciones que pueden salir mal en tiempo de ejecución: archivo no encontrado, API caída, datos vacíos',
          'Los mensajes de error de TypeScript',
          'La lista de excepciones de Python que existen',
        ],
        correctAnswer: 'Situaciones que pueden salir mal en tiempo de ejecución: archivo no encontrado, API caída, datos vacíos',
        correctFeedback: '¡Correcto! En el diseño, "Errores" significa identificar qué puede fallar en producción: el archivo no existe, la API no responde, los datos tienen el formato incorrecto, etc.',
        incorrectFeedback: 'En el modelo de diseño, "Errores" no son bugs de código sino situaciones de fallo en tiempo de ejecución. Debes pensar: ¿qué pasa si el archivo no existe? ¿Si la API no responde? ¿Si los datos están vacíos? Estos casos deben manejarse explícitamente.',
      },
      {
        question: '¿Qué ventaja tiene definir la firma de una función (nombre, parámetros, tipo de retorno) antes de implementarla?',
        options: [
          'Python ejecuta más rápido las funciones con firma definida',
          'Puedes implementar y probar cada función de forma independiente desde el inicio',
          'Evita errores de sintaxis en Python',
          'La firma genera la implementación automáticamente',
        ],
        correctAnswer: 'Puedes implementar y probar cada función de forma independiente desde el inicio',
        correctFeedback: '¡Exacto! Con las firmas definidas (y usando pass para el cuerpo), puedes trabajar en cada función de forma aislada, probarla individualmente y combinarlas al final.',
        incorrectFeedback: 'Definir firmas antes de implementar permite trabajar de forma modular: puedes implementar una función a la vez, probarla en aislamiento y combinar todo al final. También facilita el trabajo en equipo.',
      },
      {
        question: '¿Por qué es importante identificar los posibles errores durante la fase de diseño (no de codificación)?',
        options: [
          'Porque Python requiere declarar los errores antes de ejecutar',
          'Para planificar el manejo de errores desde el inicio, no como un extra al final',
          'Porque los errores solo ocurren en la fase de diseño',
          'No es importante, los errores se manejan solo si ocurren',
        ],
        correctAnswer: 'Para planificar el manejo de errores desde el inicio, no como un extra al final',
        correctFeedback: '¡Correcto! Pensar en errores durante el diseño asegura que el manejo de errores sea parte integral del proyecto, no un parche añadido después.',
        incorrectFeedback: 'Identificar posibles errores en el diseño permite planificar el manejo de errores como parte esencial del proyecto. Si lo dejas para el final, el código de manejo de errores queda improvisado y puede ser difícil de integrar correctamente.',
      },
    ],
  },
  {
    slug: 'estructura-proyecto-practico',
    title: 'Preparar la estructura del proyecto',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 165,
    description: 'Crea la estructura de carpetas, archivos, entorno virtual y dependencias necesarias.',
    explanation: `## Preparar la estructura del proyecto

Una buena estructura desde el inicio hace que el proyecto sea más fácil de mantener y compartir.

### Estructura recomendada para proyectos prácticos

\`\`\`
mi_proyecto/
├── venv/                  ← entorno virtual (en .gitignore)
├── src/
│   ├── __init__.py
│   ├── main.py            ← punto de entrada
│   ├── procesador.py      ← lógica de procesamiento
│   └── reportes.py        ← generación de salida
├── data/
│   ├── entrada.csv        ← archivos de entrada de ejemplo
│   └── .gitkeep
├── output/
│   └── .gitkeep           ← resultados se guardan aquí
├── tests/
│   └── test_procesador.py
├── .env                   ← credenciales (en .gitignore)
├── .gitignore
├── config.py              ← constantes y configuración
├── requirements.txt
└── README.md
\`\`\`

### Paso a paso para crear la estructura

\`\`\`bash
# 1. Crear carpeta del proyecto
mkdir mi_proyecto
cd mi_proyecto

# 2. Crear entorno virtual
python -m venv venv

# 3. Activar entorno virtual
# Windows: venv\\Scripts\\activate
# Mac/Linux: source venv/bin/activate

# 4. Crear estructura de carpetas
mkdir src data output tests

# 5. Crear archivos iniciales
# (ver código de ejemplo)

# 6. Instalar dependencias
pip install requests openpyxl python-dotenv

# 7. Guardar dependencias
pip freeze > requirements.txt
\`\`\`

### El archivo .gitignore esencial

\`\`\`
venv/
.env
__pycache__/
*.pyc
output/
*.xlsx
*.csv
\`\`\`

### README.md mínimo

\`\`\`markdown
# Nombre del Proyecto

## ¿Qué hace?
Descripción de una línea.

## Instalación
pip install -r requirements.txt

## Uso
python src/main.py --input data/ventas.csv --output output/

## Ejemplo
python src/main.py --input data/ventas.csv --format excel
\`\`\``,
    codeExample: `import os
from pathlib import Path

# config.py — configuración centralizada del proyecto
BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR / "data"
OUTPUT_DIR = BASE_DIR / "output"
LOG_DIR = BASE_DIR / "logs"

# Asegurarse de que existan las carpetas necesarias
def inicializar_proyecto():
    carpetas = [DATA_DIR, OUTPUT_DIR, LOG_DIR]
    for carpeta in carpetas:
        carpeta.mkdir(exist_ok=True)
        print(f"✓ Carpeta lista: {carpeta}")

# Configuración de la aplicación
APP_NAME = "Mi Proyecto Práctico"
VERSION = "1.0.0"
DEBUG = os.environ.get("DEBUG", "false").lower() == "true"

# Credenciales (cargadas desde variables de entorno)
EMAIL_REMITENTE = os.environ.get("EMAIL_REMITENTE", "")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD", "")
API_KEY = os.environ.get("API_KEY", "")

# Validar configuración mínima
def validar_config():
    errores = []
    if not EMAIL_REMITENTE:
        errores.append("Falta EMAIL_REMITENTE en variables de entorno")
    if not API_KEY:
        errores.append("Falta API_KEY en variables de entorno")
    return errores

if __name__ == "__main__":
    print(f"=== {APP_NAME} v{VERSION} ===")
    inicializar_proyecto()
    errores = validar_config()
    if errores:
        print("\\n⚠️  Configuración incompleta:")
        for e in errores:
            print(f"  - {e}")
    else:
        print("\\n✓ Configuración correcta")`,
    keyPoints: [
      'Crea la estructura de carpetas antes de escribir código',
      'El entorno virtual y .env nunca van en el repositorio git',
      'Centraliza la configuración en config.py',
      'Crea el README.md desde el inicio con las instrucciones básicas',
      'Las carpetas output/ y data/ deben estar en .gitignore',
    ],
    exercise: {
      description: 'Crea la estructura completa del proyecto final usando los comandos vistos. Luego crea un config.py con las constantes básicas del proyecto (rutas, nombre, versión) y un README.md con las instrucciones de instalación y uso.',
      hint: 'Usa `pathlib.Path(__file__).parent` para obtener el directorio del script y construir rutas relativas. Crea las carpetas con `mkdir(exist_ok=True)` para evitar errores si ya existen.',
    },
    quiz: [
      {
        question: '¿Por qué la carpeta `venv/` y el archivo `.env` deben estar en `.gitignore`?',
        options: [
          'Porque git no puede comprimir esos tipos de archivos',
          'Porque venv/ es grande y específico del sistema, y .env contiene credenciales secretas',
          'Porque son generados automáticamente por Python en cada ejecución',
          'Porque git los elimina automáticamente al hacer commit',
        ],
        correctAnswer: 'Porque venv/ es grande y específico del sistema, y .env contiene credenciales secretas',
        correctFeedback: '¡Correcto! venv/ puede pesar cientos de MB y no es portable entre sistemas. .env contiene contraseñas y claves que nunca deben compartirse públicamente.',
        incorrectFeedback: 'venv/ ocupa mucho espacio, contiene binarios específicos del sistema operativo y puede recrearse con requirements.txt. .env tiene contraseñas y API keys que si se suben a GitHub pueden ser robadas por bots que escanean repositorios públicos.',
      },
      {
        question: '¿Cuál es el propósito del archivo `.gitkeep` en carpetas como `output/` y `data/`?',
        options: [
          'Es un archivo de configuración de git',
          'Es un archivo vacío que permite a git rastrear una carpeta vacía',
          'Contiene las reglas de qué archivos guardar en esa carpeta',
          'Es generado automáticamente por Python',
        ],
        correctAnswer: 'Es un archivo vacío que permite a git rastrear una carpeta vacía',
        correctFeedback: '¡Exacto! Git no puede rastrear carpetas vacías. Un archivo .gitkeep (vacío por convención) permite incluir la estructura de carpetas en el repositorio sin incluir su contenido.',
        incorrectFeedback: '.gitkeep es un archivo vacío (puede llamarse de cualquier forma, pero .gitkeep es la convención). Git no rastrea carpetas vacías, solo archivos. Este archivo "truco" permite mantener la estructura de carpetas en el repositorio.',
      },
      {
        question: '¿Dónde deberían guardarse las credenciales (contraseñas, API keys) en un proyecto bien estructurado?',
        options: [
          'En config.py como constantes',
          'En el README.md para que sean fáciles de encontrar',
          'En variables de entorno, leídas con os.environ.get()',
          'En un archivo credentials.py importado desde main.py',
        ],
        correctAnswer: 'En variables de entorno, leídas con os.environ.get()',
        correctFeedback: '¡Correcto! Las credenciales van en variables de entorno (archivo .env local, no en git). Se leen con os.environ.get() para no hardcodearlas en el código.',
        incorrectFeedback: 'Las credenciales NUNCA deben estar en archivos que van a git (config.py, README.md, credentials.py). Deben estar en variables de entorno: en un archivo .env local (que está en .gitignore) y leídas con os.environ.get().',
      },
      {
        question: '¿Por qué es importante crear el README.md desde el inicio del proyecto (no al final)?',
        options: [
          'Python requiere un README.md para ejecutarse',
          'Porque escribirlo al inicio te fuerza a pensar en cómo explicar y usar tu proyecto',
          'GitHub no acepta repositorios sin README.md',
          'El README.md genera la documentación del código automáticamente',
        ],
        correctAnswer: 'Porque escribirlo al inicio te fuerza a pensar en cómo explicar y usar tu proyecto',
        correctFeedback: '¡Correcto! Escribir el README al inicio te hace pensar en la experiencia del usuario: ¿cómo instalan? ¿cómo usan? Esto guía el diseño de la CLI y la experiencia general.',
        incorrectFeedback: 'Aunque no es un requisito técnico, escribir el README al inicio tiene un beneficio de diseño: te obliga a pensar en cómo alguien más (o tú mismo en el futuro) usará el proyecto. Esto mejora las decisiones de diseño de la CLI y la API.',
      },
      {
        question: '¿Cuál es el comando correcto para guardar las dependencias instaladas?',
        options: [
          'pip save requirements.txt',
          'pip list > requirements.txt',
          'pip freeze > requirements.txt',
          'python -m requirements save',
        ],
        correctAnswer: 'pip freeze > requirements.txt',
        correctFeedback: '¡Exacto! pip freeze genera la lista en formato nombre==versión y > redirige la salida al archivo requirements.txt.',
        incorrectFeedback: 'El comando correcto es `pip freeze > requirements.txt`. pip freeze genera el formato correcto (nombre==versión). pip list genera una tabla para humanos que no es compatible con pip install -r.',
      },
    ],
  },
  {
    slug: 'implementar-primera-version',
    title: 'Implementar la primera versión',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 166,
    description: 'Construye una primera versión funcional del proyecto final usando funciones y módulos.',
    explanation: `## Implementar la primera versión

El objetivo de la primera versión es simples: **que funcione**. No tiene que ser perfecta, eficiente ni manejar todos los errores. Solo tiene que hacer lo básico correctamente.

### La estrategia del "happy path"

Empieza implementando el camino feliz: el escenario donde todo sale bien. Sin errores, sin validaciones, sin casos especiales.

\`\`\`python
# Versión 1 — happy path (sin manejo de errores)
def main():
    datos = leer_csv("ventas.csv")          # asumimos que existe
    grupos = agrupar_por_categoria(datos)   # asumimos que hay datos
    totales = calcular_totales(grupos)
    crear_excel(totales, "reporte.xlsx")    # asumimos que podemos escribir
    print("✓ Reporte generado")
\`\`\`

Cuando esto funcione, agregas las validaciones (siguiente lección).

### Implementa una función a la vez

1. **Escribe la función**
2. **Pruébala inmediatamente** con datos de ejemplo
3. **Confirma que funciona** antes de pasar a la siguiente

\`\`\`python
# Probar cada función apenas la escribes
def agrupar_por_categoria(gastos):
    grupos = {}
    for gasto in gastos:
        cat = gasto["categoria"]
        grupos.setdefault(cat, []).append(gasto["monto"])
    return grupos

# PROBAR INMEDIATAMENTE:
datos_prueba = [
    {"categoria": "Comida", "monto": 100},
    {"categoria": "Transporte", "monto": 50},
    {"categoria": "Comida", "monto": 200},
]
resultado = agrupar_por_categoria(datos_prueba)
print(resultado)
# Esperado: {"Comida": [100, 200], "Transporte": [50]}
\`\`\`

### Reglas de la primera versión

- ✅ Puede tener valores hardcodeados temporalmente
- ✅ Puede usar print() para depuración
- ✅ El código puede ser "feo" (se refactoriza después)
- ❌ No dejes funciones vacías (\`pass\`) en la versión 1
- ❌ No pases a la siguiente función sin probar la actual`,
    codeExample: `# Ejemplo: primera versión de un rastreador de gastos
# Filosofía: hazlo funcionar primero, mejorar después

import csv
from collections import defaultdict

# FUNCIÓN 1: Leer datos
def leer_gastos(ruta):
    gastos = []
    with open(ruta, encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for fila in reader:
            gastos.append({
                "fecha": fila["fecha"],
                "categoria": fila["categoria"],
                "descripcion": fila["descripcion"],
                "monto": float(fila["monto"]),
            })
    return gastos

# PROBAR FUNCIÓN 1:
# gastos = leer_gastos("data/gastos.csv")
# print(f"Gastos leídos: {len(gastos)}")
# print(gastos[0])  # ver primer elemento

# FUNCIÓN 2: Agrupar por categoría
def agrupar_por_categoria(gastos):
    grupos = defaultdict(list)
    for gasto in gastos:
        grupos[gasto["categoria"]].append(gasto["monto"])
    return dict(grupos)

# PROBAR FUNCIÓN 2:
gastos_prueba = [
    {"categoria": "Comida", "monto": 250.0, "fecha": "2024-01-01", "descripcion": "Supermercado"},
    {"categoria": "Transporte", "monto": 80.0, "fecha": "2024-01-02", "descripcion": "Metro"},
    {"categoria": "Comida", "monto": 45.0, "fecha": "2024-01-03", "descripcion": "Restaurante"},
]
grupos = agrupar_por_categoria(gastos_prueba)
print("Prueba agrupar_por_categoria:")
for cat, montos in grupos.items():
    print(f"  {cat}: {montos}")

# FUNCIÓN 3: Calcular totales
def calcular_totales(grupos):
    return {
        categoria: {
            "total": sum(montos),
            "promedio": sum(montos) / len(montos),
            "cantidad": len(montos),
        }
        for categoria, montos in grupos.items()
    }

# PROBAR FUNCIÓN 3:
totales = calcular_totales(grupos)
print("\\nPrueba calcular_totales:")
for cat, stats in totales.items():
    print(f"  {cat}: total={stats['total']:.2f}, promedio={stats['promedio']:.2f}")

# Cuando las 3 funciones funcionen individualmente, combínalas:
def main():
    # En la versión final: leer_gastos("data/gastos.csv")
    gastos = gastos_prueba  # temporal para prueba
    grupos = agrupar_por_categoria(gastos)
    totales = calcular_totales(grupos)
    print("\\n=== REPORTE FINAL ===")
    for cat, stats in sorted(totales.items(), key=lambda x: x[1]["total"], reverse=True):
        print(f"{cat}: \${stats['total']:.2f} ({stats['cantidad']} gastos)")

main()`,
    keyPoints: [
      'Implementa el "happy path" primero: el escenario donde todo funciona',
      'Prueba cada función inmediatamente después de escribirla',
      'No pases a la siguiente función hasta que la actual funcione',
      'Los valores hardcodeados temporales son aceptables en la primera versión',
      'El código puede ser "feo" en la primera versión; la limpieza viene después',
    ],
    exercise: {
      description: 'Implementa la primera versión de tu proyecto final. Empieza con las funciones de entrada (leer datos), luego procesamiento, luego salida. Prueba cada función con datos de ejemplo antes de pasar a la siguiente.',
      hint: 'Crea un archivo tests/datos_prueba.py con datos hardcodeados para probar cada función independientemente. Cuando todas funcionen, conéctalas en main().',
    },
    quiz: [
      {
        question: '¿Qué significa implementar el "happy path" de un proyecto?',
        options: [
          'Hacer que el código sea lo más corto posible',
          'Implementar el escenario donde todo funciona correctamente, sin manejo de errores',
          'Usar únicamente librerías estándar de Python',
          'Escribir tests antes de escribir el código',
        ],
        correctAnswer: 'Implementar el escenario donde todo funciona correctamente, sin manejo de errores',
        correctFeedback: '¡Correcto! El happy path es el flujo principal donde los datos son válidos, los archivos existen y todo sale bien. Una vez que esto funciona, se agregan validaciones y manejo de errores.',
        incorrectFeedback: 'El "happy path" es el escenario ideal donde todo funciona perfectamente. Implementarlo primero te da una base funcional rápidamente. Luego puedes agregar el manejo de errores y casos borde en la siguiente etapa.',
      },
      {
        question: '¿Cuál es el beneficio de probar cada función individualmente antes de combinarlas?',
        options: [
          'Python ejecuta más rápido las funciones probadas individualmente',
          'Puedes identificar exactamente cuál función tiene un bug sin buscar en todo el código',
          'Elimina la necesidad de manejar errores más adelante',
          'Genera documentación automática de las funciones',
        ],
        correctAnswer: 'Puedes identificar exactamente cuál función tiene un bug sin buscar en todo el código',
        correctFeedback: '¡Exacto! Cuando pruebas cada función por separado, sabes exactamente dónde está el problema cuando algo falla, en lugar de buscar el bug en 200 líneas de código.',
        incorrectFeedback: 'Probar funciones individualmente (unit testing básico) permite aislar los problemas. Si leer_datos() está probada y funciona, y calcular_totales() falla, el bug está en calcular_totales(), no en leer_datos(). Esto ahorra mucho tiempo de depuración.',
      },
      {
        question: '¿Qué está BIEN hacer en la primera versión de un proyecto?',
        options: [
          'Dejar funciones con solo `pass` para implementarlas después',
          'Ignorar completamente los errores y excepciones',
          'Tener valores hardcodeados temporales para probar el flujo',
          'No probar las funciones hasta que todas estén escritas',
        ],
        correctAnswer: 'Tener valores hardcodeados temporales para probar el flujo',
        correctFeedback: '¡Correcto! En la primera versión, hardcodear rutas o datos temporales es completamente válido. Lo importante es verificar que la lógica funciona antes de hacerla configurable.',
        incorrectFeedback: 'En la primera versión está bien tener valores hardcodeados temporales (rutas, datos de prueba). Lo que NO está bien es dejar funciones vacías (pass) sin implementar, ya que no podrás verificar que el flujo completo funciona.',
      },
      {
        question: 'Llevas 2 horas escribiendo código sin probar nada. ¿Qué problema típico encontrarás?',
        options: [
          'El código será más eficiente',
          'Tendrás múltiples bugs en varias funciones difíciles de localizar',
          'Python lanzará un error de compilación',
          'Las funciones se ejecutarán más lentamente',
        ],
        correctAnswer: 'Tendrás múltiples bugs en varias funciones difíciles de localizar',
        correctFeedback: '¡Exacto! Escribir mucho código sin probar acumula bugs. Cuando finalmente ejecutas y falla, no sabes en qué función está el problema. Probar frecuentemente previene esto.',
        incorrectFeedback: 'Escribir código sin probar es una de las causas más comunes de sesiones de debugging frustrantes. Cuando finalmente ejecutas y encuentras errores, pueden estar en cualquiera de las funciones que escribiste. Prueba frecuentemente para detectar problemas temprano.',
      },
      {
        question: '¿Cuándo es aceptable que el código de la primera versión sea "feo" o poco elegante?',
        options: [
          'Nunca, el código siempre debe ser perfecto desde el inicio',
          'Solo si el proyecto es personal y nadie más lo verá',
          'Siempre que funcione correctamente; la limpieza viene en etapas posteriores',
          'Solo en las funciones de entrada de datos',
        ],
        correctAnswer: 'Siempre que funcione correctamente; la limpieza viene en etapas posteriores',
        correctFeedback: '¡Correcto! La filosofía "make it work, make it right, make it fast" es estándar en desarrollo de software. Primero funciona, luego se limpia y optimiza.',
        incorrectFeedback: 'El código "feo" que funciona es mejor que el código "elegante" que no funciona. La primera versión prioriza la funcionalidad. La refactorización (hacer el código más limpio) viene después, cuando ya tienes algo que funciona y puedes probar que no "rompiste" nada.',
      },
    ],
  },
  {
    slug: 'errores-validaciones-proyecto',
    title: 'Agregar manejo de errores y validaciones',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 167,
    description: 'Mejora el proyecto agregando validaciones, mensajes claros y manejo de errores.',
    explanation: `## Agregar manejo de errores y validaciones

Con el happy path funcionando, es hora de hacerlo robusto. Un script profesional no explota con errores de Python; muestra mensajes claros y falla de forma elegante.

### Los 3 tipos de validaciones más importantes

**1. Validar entradas (antes de procesar)**
\`\`\`python
def validar_archivo(ruta):
    path = Path(ruta)
    if not path.exists():
        raise FileNotFoundError(f"Archivo no encontrado: {ruta}")
    if path.suffix.lower() != ".csv":
        raise ValueError(f"Se esperaba un CSV, no {path.suffix}")
    if path.stat().st_size == 0:
        raise ValueError("El archivo está vacío")
\`\`\`

**2. Manejar errores en operaciones (durante el proceso)**
\`\`\`python
try:
    datos = leer_csv(ruta)
except FileNotFoundError as e:
    print(f"Error: {e}")
    sys.exit(1)
except ValueError as e:
    print(f"Datos inválidos: {e}")
    sys.exit(1)
\`\`\`

**3. Mensajes de error útiles (para el usuario)**
\`\`\`python
# Mal: muestra el traceback completo de Python
# Bien: mensaje claro en español
try:
    monto = float(fila["monto"])
except ValueError:
    print(f"Error: '{fila['monto']}' no es un número válido en la fila {numero_fila}")
    print("Verifica que la columna 'monto' solo contenga números.")
\`\`\`

### Logging en lugar de print

\`\`\`python
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("proyecto.log"),
        logging.StreamHandler(),  # también muestra en terminal
    ]
)

logger = logging.getLogger(__name__)

logger.info("Iniciando procesamiento...")
logger.warning("El archivo está vacío, se usarán valores por defecto")
logger.error("No se pudo conectar a la API")
\`\`\``,
    codeExample: `import sys
import logging
from pathlib import Path

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("proyecto.log", encoding="utf-8"),
        logging.StreamHandler(),
    ]
)
logger = logging.getLogger(__name__)

# ANTES (sin validaciones):
def leer_gastos_v1(ruta):
    import csv
    with open(ruta) as f:
        return list(csv.DictReader(f))

# DESPUÉS (con validaciones):
def leer_gastos_v2(ruta):
    import csv
    path = Path(ruta)

    # Validar entrada
    if not path.exists():
        logger.error(f"Archivo no encontrado: {ruta}")
        raise FileNotFoundError(f"No se encontró el archivo: {ruta}")

    if path.suffix.lower() != ".csv":
        raise ValueError(f"Se esperaba un archivo .csv, recibido: {path.suffix}")

    if path.stat().st_size == 0:
        raise ValueError("El archivo CSV está vacío")

    gastos = []
    errores = 0

    with open(path, encoding="utf-8") as f:
        reader = csv.DictReader(f)

        # Verificar columnas requeridas
        columnas_requeridas = {"fecha", "categoria", "monto"}
        if reader.fieldnames:
            faltantes = columnas_requeridas - set(reader.fieldnames)
            if faltantes:
                raise ValueError(f"Columnas faltantes en el CSV: {faltantes}")

        for num_fila, fila in enumerate(reader, start=2):
            try:
                gastos.append({
                    "fecha": fila["fecha"].strip(),
                    "categoria": fila["categoria"].strip() or "Sin categoría",
                    "monto": float(fila["monto"]),
                })
            except ValueError:
                logger.warning(f"Fila {num_fila}: monto inválido '{fila['monto']}', omitiendo")
                errores += 1

    logger.info(f"Leídos {len(gastos)} gastos ({errores} filas con errores omitidas)")

    if not gastos:
        raise ValueError("No se pudo leer ningún gasto válido del archivo")

    return gastos

# Uso en main() con manejo de errores:
def main():
    ruta = "data/gastos.csv"
    try:
        gastos = leer_gastos_v2(ruta)
        logger.info(f"Procesando {len(gastos)} gastos...")
        # ... resto del procesamiento
    except FileNotFoundError as e:
        print(f"\\n❌ Error: {e}")
        print("Verifica que el archivo existe y la ruta es correcta.")
        sys.exit(1)
    except ValueError as e:
        print(f"\\n❌ Error en los datos: {e}")
        sys.exit(1)`,
    keyPoints: [
      'Valida las entradas al inicio antes de procesar datos',
      'Usa logging en lugar de print para eventos importantes',
      'Los mensajes de error deben ser claros y útiles para el usuario',
      'Separa los errores de validación (ValueError) de los de sistema (FileNotFoundError)',
      'Un script robusto nunca muestra un traceback completo al usuario final',
    ],
    exercise: {
      description: 'Toma la primera versión de tu proyecto y agrégale: (1) validación de la entrada, (2) manejo de errores con mensajes claros, (3) logging con archivo de log. Prueba que funciona correctamente cuando el archivo no existe o tiene datos inválidos.',
      hint: 'Empieza con los errores más probables: archivo no encontrado, datos con formato incorrecto, carpeta de salida sin permisos. Para cada uno, escribe un mensaje de error útil que explique qué hacer para corregirlo.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `logging.info()` y `print()` en un proyecto profesional?',
        options: [
          'No hay diferencia, son equivalentes',
          'logging guarda en archivo, tiene niveles de severidad y puede desactivarse en producción',
          'print() es más rápido que logging para proyectos grandes',
          'logging solo funciona en Linux',
        ],
        correctAnswer: 'logging guarda en archivo, tiene niveles de severidad y puede desactivarse en producción',
        correctFeedback: '¡Correcto! logging ofrece: niveles (DEBUG, INFO, WARNING, ERROR), guardado en archivo, timestamps automáticos y la posibilidad de desactivar mensajes de debug en producción.',
        incorrectFeedback: 'logging es superior a print para scripts profesionales porque: guarda mensajes en archivo para revisión posterior, incluye timestamps, tiene niveles de severidad (INFO, WARNING, ERROR) y puede configurarse para mostrar o no según el entorno.',
      },
      {
        question: '¿En qué orden deben ejecutarse estas operaciones?\n\n```python\n# A: procesar datos\n# B: validar que el archivo existe\n# C: leer el archivo\n# D: generar reporte\n```',
        options: ['A → B → C → D', 'B → C → A → D', 'C → B → A → D', 'B → A → C → D'],
        correctAnswer: 'B → C → A → D',
        correctFeedback: '¡Correcto! Primero validar (B), luego leer (C), luego procesar (A), luego generar salida (D). Fallar rápido en las primeras etapas evita trabajo innecesario.',
        incorrectFeedback: 'El orden correcto es: Validar (B) → Leer (C) → Procesar (A) → Generar salida (D). Validar primero sigue el principio "fail fast": si el archivo no existe, no tiene sentido intentar procesarlo.',
      },
      {
        question: '¿Cuál es un mensaje de error útil para el usuario?',
        options: [
          'Traceback (most recent call last): FileNotFoundError: ventas.csv',
          'Error desconocido en el sistema',
          'Error: No se encontró el archivo "data/ventas.csv". Verifica que existe y está en la carpeta data/',
          'Exception raised',
        ],
        correctAnswer: 'Error: No se encontró el archivo "data/ventas.csv". Verifica que existe y está en la carpeta data/',
        correctFeedback: '¡Exacto! Un buen mensaje de error dice QUÉ falló, DÓNDE falló y QUÉ hacer para corregirlo. El traceback es para el desarrollador, no para el usuario.',
        incorrectFeedback: 'Un mensaje de error útil debe decir: qué salió mal, dónde (qué archivo/dato) y qué hacer para corregirlo. El traceback completo de Python es útil para debugging pero confuso para el usuario final.',
      },
      {
        question: '¿Qué hace `sys.exit(1)` al final de un bloque de manejo de errores?',
        options: [
          'Reinicia el script automáticamente',
          'Termina el programa con código de salida 1, indicando que hubo un error',
          'Ignora el error y continúa la ejecución',
          'Guarda el error en un archivo de log',
        ],
        correctAnswer: 'Termina el programa con código de salida 1, indicando que hubo un error',
        correctFeedback: '¡Correcto! sys.exit(0) indica éxito, sys.exit(1) indica error. Los sistemas operativos y scripts de automatización usan estos códigos para saber si el programa terminó correctamente.',
        incorrectFeedback: 'sys.exit(1) termina el programa con código de salida 1 (error). Los scripts de automatización, cron jobs y CI/CD usan este código para saber si el programa falló. sys.exit(0) indica éxito.',
      },
      {
        question: '¿Por qué es importante validar las columnas del CSV antes de procesarlo?',
        options: [
          'Python no puede leer CSVs sin validación previa',
          'Para dar un mensaje claro si el archivo tiene estructura incorrecta, antes de procesar miles de filas',
          'Porque csv.DictReader lanza un error si no se validan las columnas',
          'Para mejorar la velocidad de lectura del CSV',
        ],
        correctAnswer: 'Para dar un mensaje claro si el archivo tiene estructura incorrecta, antes de procesar miles de filas',
        correctFeedback: '¡Correcto! Validar las columnas al inicio evita procesar 10,000 filas para luego descubrir que una columna se llama "Monto" en lugar de "monto". El error temprano es mucho más útil.',
        incorrectFeedback: 'Validar columnas al inicio del procesamiento (antes del loop principal) permite detectar problemas de estructura del archivo inmediatamente, sin procesar miles de filas para descubrir un error de nombre de columna al final.',
      },
    ],
  },
  {
    slug: 'guardar-resultados-archivos',
    title: 'Guardar resultados en archivos',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 168,
    description: 'Agrega salida en CSV, JSON, Excel o texto según el tipo de proyecto.',
    explanation: `## Guardar resultados en archivos

La salida de tu proyecto define su utilidad. Elige el formato según quién va a usar los resultados.

### ¿Qué formato usar?

| Formato | Cuándo usarlo |
|---------|--------------|
| **Excel** | Cuando el resultado es para humanos no técnicos |
| **CSV** | Cuando los datos se usarán en otro script o sistema |
| **JSON** | Cuando el resultado se enviará a una API o app |
| **Texto/Markdown** | Para reportes legibles o logs |
| **Terminal** | Para scripts de diagnóstico o monitoreo |

### Función unificada de guardado

\`\`\`python
def guardar_resultados(datos, formato, ruta_base):
    """Guarda los resultados en el formato especificado."""
    from datetime import datetime
    fecha = datetime.now().strftime("%Y%m%d_%H%M%S")

    if formato == "excel":
        ruta = f"{ruta_base}_{fecha}.xlsx"
        guardar_excel(datos, ruta)
    elif formato == "csv":
        ruta = f"{ruta_base}_{fecha}.csv"
        guardar_csv(datos, ruta)
    elif formato == "json":
        ruta = f"{ruta_base}_{fecha}.json"
        guardar_json(datos, ruta)
    else:
        ruta = f"{ruta_base}_{fecha}.txt"
        guardar_texto(datos, ruta)

    print(f"✓ Resultados guardados en: {ruta}")
    return ruta
\`\`\`

### Agregar la fecha al nombre del archivo

Siempre agrega la fecha y hora al nombre para no sobrescribir resultados anteriores:

\`\`\`python
from datetime import datetime
fecha = datetime.now().strftime("%Y%m%d")        # 20240115
fecha_hora = datetime.now().strftime("%Y%m%d_%H%M%S")  # 20240115_143022
nombre = f"reporte_{fecha}.xlsx"
\`\`\`

### Crear la carpeta de salida automáticamente

\`\`\`python
from pathlib import Path

output_dir = Path("output")
output_dir.mkdir(exist_ok=True)  # crea si no existe, no falla si ya existe
ruta_archivo = output_dir / f"reporte_{fecha}.xlsx"
\`\`\``,
    codeExample: `import csv
import json
from pathlib import Path
from datetime import datetime

def guardar_csv(datos, ruta):
    """Guarda una lista de dicts en CSV."""
    if not datos:
        raise ValueError("No hay datos para guardar")

    Path(ruta).parent.mkdir(exist_ok=True)
    with open(ruta, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=datos[0].keys())
        writer.writeheader()
        writer.writerows(datos)
    print(f"✓ CSV guardado: {ruta} ({len(datos)} filas)")

def guardar_json(datos, ruta, indent=2):
    """Guarda datos en JSON con formato legible."""
    Path(ruta).parent.mkdir(exist_ok=True)
    with open(ruta, "w", encoding="utf-8") as f:
        json.dump(datos, f, ensure_ascii=False, indent=indent)
    print(f"✓ JSON guardado: {ruta}")

def guardar_texto(resumen, ruta):
    """Guarda un resumen como texto."""
    Path(ruta).parent.mkdir(exist_ok=True)
    with open(ruta, "w", encoding="utf-8") as f:
        f.write(resumen)
    print(f"✓ Texto guardado: {ruta}")

# Función unificada con timestamp en el nombre
def guardar_resultados(datos, formato="csv", carpeta="output", nombre_base="reporte"):
    """Guarda resultados en el formato especificado con timestamp."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    carpeta_path = Path(carpeta)
    carpeta_path.mkdir(exist_ok=True)

    if formato == "csv":
        ruta = carpeta_path / f"{nombre_base}_{timestamp}.csv"
        guardar_csv(datos if isinstance(datos, list) else [datos], str(ruta))
    elif formato == "json":
        ruta = carpeta_path / f"{nombre_base}_{timestamp}.json"
        guardar_json(datos, str(ruta))
    elif formato == "texto":
        ruta = carpeta_path / f"{nombre_base}_{timestamp}.txt"
        texto = json.dumps(datos, ensure_ascii=False, indent=2)
        guardar_texto(texto, str(ruta))
    else:
        raise ValueError(f"Formato no soportado: {formato}")

    return str(ruta)

# Ejemplo de uso:
ventas = [
    {"producto": "Laptop", "cantidad": 5, "total": 25000},
    {"producto": "Mouse", "cantidad": 20, "total": 2000},
]

ruta = guardar_resultados(ventas, formato="csv", nombre_base="ventas")
print(f"Guardado en: {ruta}")`,
    keyPoints: [
      'Elige el formato de salida según quién usará los resultados',
      'Siempre agrega timestamp al nombre para no sobrescribir archivos anteriores',
      'Crea la carpeta de salida automáticamente con mkdir(exist_ok=True)',
      'Usa ensure_ascii=False en JSON para preservar caracteres en español',
      'Una función unificada guardar_resultados() hace el código más limpio',
    ],
    exercise: {
      description: 'Agrega una función guardar_resultados() a tu proyecto final que soporte al menos 2 formatos (por ejemplo, CSV y JSON). Haz que el formato sea configurable desde la línea de comandos con argparse.',
      hint: 'Agrega --formato csv/json/excel como argumento opcional en argparse con un valor por defecto. Llama a la función correspondiente según el formato elegido.',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda agregar timestamp al nombre del archivo de salida?',
        options: [
          'Porque Python requiere timestamps en todos los archivos',
          'Para evitar sobrescribir resultados anteriores y tener historial de ejecuciones',
          'Para cumplir con estándares de seguridad',
          'Para que el archivo se ordene alfabéticamente',
        ],
        correctAnswer: 'Para evitar sobrescribir resultados anteriores y tener historial de ejecuciones',
        correctFeedback: '¡Correcto! Con timestamps como reporte_20240115_143022.xlsx, cada ejecución crea un nuevo archivo. Esto permite comparar resultados de diferentes fechas y no perder datos.',
        incorrectFeedback: 'El timestamp en el nombre previene sobrescribir archivos anteriores. Si el script se ejecuta diariamente, tener reporte_20240115.xlsx, reporte_20240116.xlsx, etc., permite comparar resultados y mantener historial.',
      },
      {
        question: '¿Cuál es el formato más adecuado cuando los resultados serán usados por personas no técnicas (como tu jefe o cliente)?',
        options: ['JSON', 'CSV sin formato', 'Excel con formato y colores', 'Texto plano'],
        correctAnswer: 'Excel con formato y colores',
        correctFeedback: '¡Correcto! Excel es el formato más amigable para usuarios no técnicos: tiene celdas formateadas, colores, es fácil de abrir y no requiere conocimientos técnicos.',
        incorrectFeedback: 'Para usuarios no técnicos, Excel (con formato, colores y estructura visual) es el formato más accesible. JSON y CSV son para uso técnico o procesamiento por otro script.',
      },
      {
        question: '¿Qué hace `Path("output").mkdir(exist_ok=True)`?',
        options: [
          'Crea la carpeta "output" y lanza error si ya existe',
          'Crea la carpeta "output" solo si no existe, sin lanzar error si ya existe',
          'Elimina y recrea la carpeta "output"',
          'Verifica si la carpeta "output" está vacía',
        ],
        correctAnswer: 'Crea la carpeta "output" solo si no existe, sin lanzar error si ya existe',
        correctFeedback: '¡Exacto! `exist_ok=True` es clave: evita el error `FileExistsError` si la carpeta ya fue creada en una ejecución anterior.',
        incorrectFeedback: '`mkdir(exist_ok=True)` crea la carpeta si no existe. Si ya existe, no hace nada (no lanza error). Sin `exist_ok=True`, lanzaría `FileExistsError` en la segunda ejecución del script.',
      },
      {
        question: '¿Por qué se usa `ensure_ascii=False` en `json.dump()`?',
        options: [
          'Para que el JSON ocupe menos espacio en disco',
          'Para preservar caracteres no-ASCII como ñ, á, é, ó en el JSON',
          'Para encriptar el contenido del JSON',
          'Para que json.dump() sea más rápido',
        ],
        correctAnswer: 'Para preservar caracteres no-ASCII como ñ, á, é, ó en el JSON',
        correctFeedback: '¡Correcto! Sin `ensure_ascii=False`, la "ñ" se guardaría como "\\u00f1" y los acentos como secuencias de escape. Con `ensure_ascii=False`, se guardan como "ñ", "á", etc.',
        incorrectFeedback: 'Por defecto, json.dump() convierte caracteres no-ASCII a secuencias de escape Unicode (ñ → \\u00f1). Con ensure_ascii=False, mantiene los caracteres originales, lo que produce JSON más legible para datos en español.',
      },
      {
        question: '¿Cuál es la ventaja de tener una función unificada `guardar_resultados(datos, formato)` en lugar de funciones separadas?',
        options: [
          'Ejecuta más rápido que funciones separadas',
          'Permite cambiar el formato de salida con un solo parámetro, sin cambiar el código que la llama',
          'Genera automáticamente todos los formatos a la vez',
          'Elimina la necesidad de importar csv, json y openpyxl',
        ],
        correctAnswer: 'Permite cambiar el formato de salida con un solo parámetro, sin cambiar el código que la llama',
        correctFeedback: '¡Correcto! Con una función unificada, el código que llama a guardar solo necesita cambiar el parámetro formato. Esto hace que agregar soporte para un nuevo formato sea mucho más fácil.',
        incorrectFeedback: 'Una función unificada mejora la flexibilidad: el código principal solo llama guardar_resultados(datos, "excel") o guardar_resultados(datos, "json"). Cambiar o agregar formatos no requiere cambiar el código principal.',
      },
    ],
  },
  {
    slug: 'herramienta-reutilizable',
    title: 'Convertirlo en una herramienta reutilizable',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 169,
    description: 'Aprende a transformar tu script en una herramienta que puedas volver a usar o compartir.',
    explanation: `## Convertirlo en una herramienta reutilizable

Un script que solo funciona en tu máquina, con datos hardcodeados, no es una herramienta. Una herramienta funciona para cualquiera, con cualquier dato válido, en cualquier máquina donde se instale correctamente.

### Lista de verificación: ¿es una herramienta reutilizable?

- [ ] **Sin rutas hardcodeadas**: todas las rutas son argumentos o configurables
- [ ] **Sin credenciales en el código**: todo está en variables de entorno
- [ ] **argparse para todas las entradas**: no usa \`input()\` en modo CLI
- [ ] **requirements.txt actualizado**: incluye todas las dependencias con versiones
- [ ] **README.md con ejemplos reales de uso**
- [ ] **Funciona en Python 3.9+** (sin características muy nuevas)
- [ ] **Maneja errores con mensajes útiles**
- [ ] **\`if __name__ == "__main__"\`** para poder importar funciones

### Antes vs Después

**Antes (solo funciona para ti):**
\`\`\`python
# main.py — hardcodeado, no reutilizable
ARCHIVO = "C:/Users/mio/Desktop/ventas_enero.csv"
SALIDA = "C:/Users/mio/Documents/reporte.xlsx"
EMAIL_DESTINO = "mi_jefe@empresa.com"
API_KEY = "abc123"  # ← PELIGROSO

datos = leer_csv(ARCHIVO)
crear_reporte(datos, SALIDA)
enviar_correo(SALIDA, EMAIL_DESTINO)
\`\`\`

**Después (herramienta reutilizable):**
\`\`\`bash
python main.py --input data/ventas.csv --output reportes/ --email destino@empresa.com
\`\`\`

### Paso final: documentar el uso

El README.md debe incluir:
1. Descripción de una línea de qué hace
2. Instalación (\`pip install -r requirements.txt\`)
3. Configuración (variables de entorno necesarias)
4. Ejemplos de uso con salida esperada
5. Qué hacer si hay errores comunes`,
    codeExample: `#!/usr/bin/env python3
"""
Generador de reportes de gastos.
Lee un CSV con gastos y genera un reporte Excel o JSON.

Uso:
  python main.py --input gastos.csv --output reportes/ --formato excel
  python main.py --input gastos.csv --formato json --verbose
"""
import argparse
import sys
import logging
from pathlib import Path

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)

def crear_parser():
    parser = argparse.ArgumentParser(
        description="Genera reportes de gastos desde un archivo CSV",
        epilog="""
Ejemplos:
  python main.py --input data/gastos.csv
  python main.py --input data/gastos.csv --formato json --output reportes/
  python main.py --input data/gastos.csv --verbose
        """
    )
    parser.add_argument(
        "--input", "-i",
        required=True,
        help="Ruta al archivo CSV de gastos"
    )
    parser.add_argument(
        "--output", "-o",
        default="output",
        help="Carpeta de salida (default: output/)"
    )
    parser.add_argument(
        "--formato", "-f",
        choices=["excel", "json", "csv", "texto"],
        default="excel",
        help="Formato de salida (default: excel)"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Mostrar información detallada del procesamiento"
    )
    return parser

def main():
    parser = crear_parser()
    args = parser.parse_args()

    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    logger.info(f"Procesando {args.input}...")

    # Simular procesamiento
    logger.debug(f"Formato de salida: {args.formato}")
    logger.debug(f"Carpeta de salida: {args.output}")

    Path(args.output).mkdir(exist_ok=True)
    print(f"✓ Reporte generado en: {args.output}/reporte.{args.formato}")

if __name__ == "__main__":
    main()`,
    keyPoints: [
      'Una herramienta reutilizable no tiene rutas ni credenciales hardcodeadas',
      'Todas las entradas deben ser configurables via argparse o variables de entorno',
      'requirements.txt debe tener versiones exactas para reproducibilidad',
      'El README.md con ejemplos reales es parte esencial de la herramienta',
      'if __name__ == "__main__" permite importar funciones del script desde otros scripts',
    ],
    exercise: {
      description: 'Revisa tu proyecto con la lista de verificación de "herramienta reutilizable". Corrige al menos 3 puntos que no cumple. Luego, pídele a alguien (o imagina a alguien) que no conoce tu proyecto que lo use solo con el README. ¿Puede hacerlo?',
      hint: 'El test de "usabilidad" más simple: elimina todas las rutas hardcodeadas del código y reemplázalas con argumentos de argparse. Si el script funciona igual con argumentos, ya es más reutilizable.',
    },
    quiz: [
      {
        question: '¿Cuál de estas es una señal clara de que un script NO es reutilizable?',
        options: [
          'Usa argparse para recibir argumentos',
          'Tiene rutas como "C:/Users/Juan/Desktop/archivo.csv" hardcodeadas en el código',
          'Tiene un README.md con ejemplos de uso',
          'Usa variables de entorno para credenciales',
        ],
        correctAnswer: 'Tiene rutas como "C:/Users/Juan/Desktop/archivo.csv" hardcodeadas en el código',
        correctFeedback: '¡Correcto! Las rutas absolutas con tu nombre de usuario solo funcionan en tu máquina. Un script reutilizable recibe las rutas como argumentos.',
        incorrectFeedback: 'Las rutas hardcodeadas con tu nombre de usuario o estructura de carpetas específica hacen el script imposible de usar en otra máquina. Todo debe ser configurable: las rutas, las credenciales y las opciones.',
      },
      {
        question: '¿Por qué es importante incluir versiones exactas en requirements.txt (ej: requests==2.28.0)?',
        options: [
          'pip no funciona sin versiones exactas',
          'Para que cualquiera pueda instalar exactamente las mismas versiones y reproducir el comportamiento',
          'Las versiones exactas hacen pip install más rápido',
          'Solo es necesario para proyectos con más de 10 dependencias',
        ],
        correctAnswer: 'Para que cualquiera pueda instalar exactamente las mismas versiones y reproducir el comportamiento',
        correctFeedback: '¡Correcto! "Funciona en mi máquina" suele pasar porque tienes una versión diferente de una librería. Con versiones exactas, todos tienen el mismo entorno.',
        incorrectFeedback: 'Las versiones exactas garantizan reproducibilidad: si tu código funciona con requests==2.28.0, pero alguien instala requests==3.0 (que puede tener cambios de API), el script puede fallar. Las versiones exactas eliminan este problema.',
      },
      {
        question: '¿Para qué sirve el comentario de docstring al inicio del archivo?\n\n```python\n"""\nGenerador de reportes de gastos.\nUso:\n  python main.py --input gastos.csv\n"""\n```',
        options: [
          'Es requerido por Python para ejecutar el script',
          'Documenta el propósito y uso del script para quien lo lea por primera vez',
          'Genera automáticamente la página --help de argparse',
          'Mejora el rendimiento del script',
        ],
        correctAnswer: 'Documenta el propósito y uso del script para quien lo lea por primera vez',
        correctFeedback: '¡Correcto! El docstring al inicio del archivo es lo primero que ve alguien que abre el código. Un buen docstring le dice qué hace, cómo usarlo y da ejemplos.',
        incorrectFeedback: 'El docstring al inicio del archivo sirve como documentación integrada en el código. Es lo primero que leen otros desarrolladores (o tú mismo en 6 meses). Debe explicar qué hace el script y cómo usarlo.',
      },
      {
        question: '¿Cuál es el propósito de `if __name__ == "__main__":` en un script que también quieres usar como módulo?',
        options: [
          'Evita que el script se ejecute más de una vez',
          'Permite importar las funciones del script sin ejecutar la lógica principal',
          'Mejora el rendimiento del script',
          'Es obligatorio para scripts con argparse',
        ],
        correctAnswer: 'Permite importar las funciones del script sin ejecutar la lógica principal',
        correctFeedback: '¡Exacto! Sin esta protección, `from main import leer_gastos` ejecutaría todo el script al importar. Con ella, solo se ejecuta cuando corres `python main.py` directamente.',
        incorrectFeedback: 'if __name__ == "__main__" protege el código de ejecución automática al importar. Si otro script hace `from main import leer_gastos`, solo obtiene la función, no ejecuta argparse ni el flujo principal.',
      },
      {
        question: '¿Qué debe incluir el README.md de una herramienta reutilizable?',
        options: [
          'Solo el nombre y descripción del proyecto',
          'Descripción, instalación, configuración, ejemplos de uso con comandos reales',
          'El código completo del proyecto',
          'La lista de todos los errores conocidos',
        ],
        correctAnswer: 'Descripción, instalación, configuración, ejemplos de uso con comandos reales',
        correctFeedback: '¡Correcto! Un buen README permite a alguien que nunca vio el proyecto instalarlo y usarlo en 5 minutos sin necesidad de leer el código.',
        incorrectFeedback: 'Un README completo incluye: qué hace el proyecto (1-2 líneas), cómo instalarlo (pip install -r requirements.txt), cómo configurarlo (variables de entorno), y ejemplos reales de uso con los comandos exactos para ejecutarlo.',
      },
    ],
  },
  {
    slug: 'presentar-proyecto',
    title: 'Presentar tu proyecto',
    module: 'Proyecto final práctico',
    moduleNumber: 30,
    order: 170,
    description: 'Aprende cómo documentar, explicar y mostrar tu proyecto como parte de tu portafolio.',
    explanation: `## Presentar tu proyecto

¡Felicitaciones por llegar al final del nivel práctico! 🎉

Completar un proyecto es un gran logro. Ahora aprende a presentarlo de forma que otros (y empleadores) puedan apreciar lo que construiste.

### Cómo documentar tu proyecto en GitHub

**Estructura del README.md profesional:**

\`\`\`markdown
# 🛠️ Nombre del Proyecto

> Una línea que describe qué hace exactamente.

## ¿Qué hace?
Explicación clara en 2-3 oraciones.

## Tecnologías usadas
- Python 3.11
- openpyxl (reportes Excel)
- requests (API)
- argparse (CLI)

## Instalación
\`\`\`bash
git clone https://github.com/tuusuario/proyecto.git
cd proyecto
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
\`\`\`

## Configuración
Crea un archivo \`.env\`:
\`\`\`
API_KEY=tu_api_key_aquí
\`\`\`

## Uso
\`\`\`bash
python main.py --input data/ventas.csv --formato excel
\`\`\`

## Ejemplo de salida
[captura de pantalla o descripción del resultado]
\`\`\`

### Cómo explicar tu proyecto en una entrevista

Estructura tu explicación en 3 partes:

1. **El problema**: "Tenía que generar reportes de ventas manualmente cada semana, lo cual tomaba 2 horas."
2. **La solución**: "Construí un script en Python que lee el CSV, calcula totales por categoría y genera un Excel formateado automáticamente."
3. **El resultado**: "Ahora el proceso toma 10 segundos. El script también envía el reporte por correo automáticamente."

### Lo que aprendiste en este nivel

En Python Práctico dominaste:
- ✅ Automatización con pathlib y scripts
- ✅ Web scraping con requests y BeautifulSoup
- ✅ Consumo de APIs REST
- ✅ Envío de correos con smtplib
- ✅ Manejo de Excel con openpyxl
- ✅ Organización de archivos con shutil y pathlib
- ✅ Scripts de productividad
- ✅ Herramientas de línea de comandos con argparse
- ✅ Mini proyectos de automatización completos
- ✅ Un proyecto final completo y reutilizable

### ¿Qué sigue?

**Python para Datos**: pandas, numpy, matplotlib, análisis de datos
**Python Backend**: Flask/FastAPI, bases de datos, APIs propias
**Python Profesional**: testing, CI/CD, packaging, optimización`,
    codeExample: `# Script de verificación final del proyecto
# Ejecuta esto para confirmar que tu proyecto está listo para presentar

import os
import sys
from pathlib import Path

def verificar_proyecto(directorio="."):
    """Verifica que el proyecto cumpla los estándares de presentación."""
    base = Path(directorio)
    puntos = 0
    total = 10
    problemas = []
    logros = []

    # 1. README.md existe
    if (base / "README.md").exists():
        puntos += 1
        logros.append("✓ README.md existe")
    else:
        problemas.append("✗ Falta README.md")

    # 2. requirements.txt existe
    if (base / "requirements.txt").exists():
        puntos += 1
        logros.append("✓ requirements.txt existe")
    else:
        problemas.append("✗ Falta requirements.txt")

    # 3. .gitignore existe
    if (base / ".gitignore").exists():
        puntos += 1
        logros.append("✓ .gitignore existe")
    else:
        problemas.append("✗ Falta .gitignore")

    # 4. No hay .env en el repositorio (debe estar en .gitignore)
    env_file = base / ".env"
    gitignore = base / ".gitignore"
    if gitignore.exists():
        contenido = gitignore.read_text(encoding="utf-8")
        if ".env" in contenido:
            puntos += 1
            logros.append("✓ .env está en .gitignore")
        else:
            problemas.append("✗ .env no está en .gitignore (¡agrega credenciales!)")

    # 5. Existe un main.py o punto de entrada
    entradas = list(base.glob("**/*.py"))
    if any("main" in f.name for f in entradas):
        puntos += 1
        logros.append("✓ Existe main.py")
    else:
        problemas.append("✗ No se encontró main.py")

    # 6. No hay rutas de usuario hardcodeadas (heurística simple)
    py_files = list(base.glob("*.py")) + list((base / "src").glob("*.py") if (base / "src").exists() else [])
    usuario = os.environ.get("USERNAME", os.environ.get("USER", ""))
    rutas_hardcodeadas = False
    for py_file in py_files:
        try:
            contenido = py_file.read_text(encoding="utf-8")
            if usuario and usuario in contenido:
                rutas_hardcodeadas = True
                break
        except Exception:
            pass

    if not rutas_hardcodeadas:
        puntos += 1
        logros.append("✓ Sin rutas de usuario hardcodeadas detectadas")
    else:
        problemas.append(f"✗ Posibles rutas hardcodeadas con usuario '{usuario}'")

    # Resultado
    print("=" * 50)
    print("VERIFICACIÓN DEL PROYECTO FINAL")
    print("=" * 50)
    for logro in logros:
        print(logro)
    for problema in problemas:
        print(problema)
    print(f"\\nPuntuación: {puntos}/{total}")

    if puntos >= 8:
        print("\\n🎉 ¡Excelente! Tu proyecto está listo para presentar.")
    elif puntos >= 5:
        print("\\n⚠️  Buen trabajo, pero aún hay mejoras por hacer.")
    else:
        print("\\n🔧 Necesitas trabajar un poco más antes de presentar.")

    return puntos

if __name__ == "__main__":
    verificar_proyecto(".")`,
    keyPoints: [
      'Un buen README permite usar el proyecto sin leer el código fuente',
      'En entrevistas: explica el problema, la solución y el resultado cuantificado',
      'GitHub es tu portafolio: nombres de repositorio claros, descripciones y temas relevantes',
      'El nivel Práctico te da herramientas reales para automatizar y resolver problemas del mundo real',
      'El siguiente paso: Python para Datos, Backend o Profesional según tu área de interés',
    ],
    exercise: {
      description: 'Ejecuta el script de verificación del proyecto en tu proyecto final. Corrige todos los puntos que no pasen. Luego escribe un párrafo de 3-5 oraciones que explicaría tu proyecto en una entrevista de trabajo: el problema, la solución técnica y el resultado.',
      hint: 'La explicación para la entrevista debe ser comprensible para alguien no técnico. Evita jerga: en lugar de "hice scraping con BeautifulSoup", di "descargo información de sitios web automáticamente para no tener que hacerlo a mano".',
    },
    quiz: [
      {
        question: '¿Cómo se estructura mejor la explicación de un proyecto en una entrevista?',
        options: [
          'Lista todas las tecnologías y librerías utilizadas',
          'Problema que resolvía → Solución técnica → Resultado cuantificado',
          'Muestra el código fuente directamente',
          'Explica la arquitectura del sistema en detalle técnico',
        ],
        correctAnswer: 'Problema que resolvía → Solución técnica → Resultado cuantificado',
        correctFeedback: '¡Correcto! Esta estructura narrativa es la más efectiva: el problema da contexto, la solución muestra tu habilidad técnica, y el resultado cuantificado (2 horas → 10 segundos) demuestra impacto real.',
        incorrectFeedback: 'La mejor explicación sigue la estructura: Problema (contexto y motivación) → Solución técnica (qué construiste) → Resultado (impacto medible). Esta narrativa es comprensible para técnicos y no técnicos por igual.',
      },
      {
        question: '¿Por qué es importante incluir el "tiempo ahorrado" o impacto medible al explicar un proyecto?',
        options: [
          'Python requiere métricas de rendimiento en la documentación',
          'Demuestra que el proyecto resolvió un problema real con valor cuantificable',
          'Los reclutadores solo valoran proyectos con más de 1000 usuarios',
          'Es necesario para que GitHub lo recomiende en búsquedas',
        ],
        correctAnswer: 'Demuestra que el proyecto resolvió un problema real con valor cuantificable',
        correctFeedback: '¡Exacto! "Ahorra 2 horas por semana" o "proceso que tomaba 1 hora ahora toma 30 segundos" son métricas que cualquiera entiende y que demuestran impacto real.',
        incorrectFeedback: 'El impacto medible (tiempo ahorrado, errores reducidos, procesos automatizados) convierte tu proyecto de "ejercicio de código" a "solución de un problema real". Esto es lo que diferencia un portafolio técnico de uno con impacto.',
      },
      {
        question: '¿Qué hace que un repositorio de GitHub destaque en un portafolio?',
        options: [
          'Tener más de 10,000 líneas de código',
          'Nombre descriptivo, README con ejemplos, temas relevantes y commits frecuentes',
          'Usar las tecnologías más nuevas y complejas',
          'Tener muchas estrellas de otros usuarios',
        ],
        correctAnswer: 'Nombre descriptivo, README con ejemplos, temas relevantes y commits frecuentes',
        correctFeedback: '¡Correcto! Un repositorio bien presentado tiene: nombre que describe qué hace, README con ejemplos de uso, topics (Python, automation, etc.) y commits que muestran progreso.',
        incorrectFeedback: 'Un repositorio destacable tiene: nombre descriptivo (no "proyecto1"), README completo con ejemplos, topics/tags relevantes para que aparezca en búsquedas, y un historial de commits que muestra trabajo real. El tamaño del código importa menos que la claridad.',
      },
      {
        question: 'Completaste Python Básico, Intermedio y Práctico. ¿Cuál es el mejor siguiente paso si te interesa análisis de datos?',
        options: [
          'Aprender Java antes de continuar con Python',
          'Python para Datos: pandas, numpy, matplotlib, análisis y visualización',
          'Aprender C++ para optimizar el rendimiento',
          'Repetir Python Básico para reforzar los fundamentos',
        ],
        correctAnswer: 'Python para Datos: pandas, numpy, matplotlib, análisis y visualización',
        correctFeedback: '¡Correcto! Python para Datos es el siguiente nivel natural si te interesa análisis, ciencia de datos o machine learning. Usa las bases que ya tienes y las extiende con herramientas especializadas.',
        incorrectFeedback: 'Con Python Básico, Intermedio y Práctico dominados, el siguiente paso natural para análisis de datos es Python para Datos: pandas para manipulación de datos, numpy para matemáticas, matplotlib/seaborn para visualización.',
      },
      {
        question: '¿Qué demuestra tener un proyecto funcional en tu portafolio de GitHub?',
        options: [
          'Que tienes un certificado oficial de Python',
          'Que puedes identificar problemas reales, diseñar soluciones y construirlas en Python',
          'Que conoces todos los módulos estándar de Python',
          'Que trabajaste en una empresa de tecnología',
        ],
        correctAnswer: 'Que puedes identificar problemas reales, diseñar soluciones y construirlas en Python',
        correctFeedback: '¡Exacto! Un proyecto funcional es evidencia concreta de habilidades: no solo sabes Python sintácticamente, sino que puedes usarlo para resolver problemas reales.',
        incorrectFeedback: 'Un proyecto funcional en tu portafolio demuestra algo más valioso que memorizar sintaxis: que puedes identificar un problema real, diseñar una solución, implementarla, manejar errores y documentarla para que otros la usen.',
      },
      {
        question: '¿Cuál es el mensaje más importante que te llevas del nivel Python Práctico?',
        options: [
          'Python es solo para científicos de datos y desarrolladores backend',
          'Python puede automatizar tareas repetitivas y resolver problemas reales del día a día',
          'Necesitas años de experiencia antes de hacer proyectos útiles',
          'Los proyectos prácticos no cuentan como experiencia real',
        ],
        correctAnswer: 'Python puede automatizar tareas repetitivas y resolver problemas reales del día a día',
        correctFeedback: '¡Correcto! Eso es exactamente lo que aprendiste: Python no es solo teoría o ejercicios académicos. Es una herramienta poderosa para resolver problemas reales que ahorran tiempo y esfuerzo.',
        incorrectFeedback: 'El mensaje central del nivel Práctico es que Python es una herramienta práctica y accesible. Con lo que aprendiste puedes: automatizar tareas, consumir APIs, hacer scraping responsable, enviar correos, crear reportes Excel, y mucho más.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module30: Module = {
  number: 30,
  title: 'Proyecto final práctico',
  level: 'practico',
  lessons: lessonsModule30,
}
