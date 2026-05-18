import type { Lesson } from '@/types'

export const lessonsModule19: Lesson[] = [
  {
    slug: 'entorno-virtual',
    title: '¿Qué es un entorno virtual?',
    module: 'Entornos virtuales',
    moduleNumber: 19,
    order: 90,
    description: 'Comprende por qué los entornos virtuales son fundamentales para aislar proyectos Python.',
    explanation: `## ¿Qué es un entorno virtual?

Un **entorno virtual** es una copia aislada de Python con sus propias librerías instaladas. Cada proyecto tiene su propio "mundo" independiente.

### El problema sin entornos virtuales

Imagina que tienes dos proyectos:
- **Proyecto A** necesita \`requests==2.20\`
- **Proyecto B** necesita \`requests==2.28\`

Si instalas ambas versiones en el sistema global, una sobreescribirá a la otra. ¡Conflicto!

### La solución: entornos virtuales

Con entornos virtuales, cada proyecto tiene su propio directorio con:
- Su propia versión de Python
- Sus propias librerías instaladas
- Sin interferir con otros proyectos

### Analogía

Piensa en un entorno virtual como una **caja de herramientas separada** para cada obra de construcción. No mezclas las herramientas del proyecto A con las del proyecto B.

### Herramientas disponibles

| Herramienta | Descripción |
|-------------|-------------|
| \`venv\` | Módulo estándar de Python (recomendado) |
| \`virtualenv\` | Alternativa más antigua, más funciones |
| \`conda\` | Para proyectos de ciencia de datos |
| \`poetry\` | Gestión moderna de dependencias |

Para la mayoría de proyectos, \`venv\` (incluido en Python) es suficiente y es lo que aprenderemos.`,
    codeExample: `# Sin entorno virtual (instalación global)
# pip install requests==2.20   <- instala globalmente
# pip install requests==2.28   <- sobreescribe la anterior

# El problema:
import requests
print(requests.__version__)  # ¿2.20 o 2.28? Depende de cuál se instaló última

# Con entorno virtual, cada proyecto tiene sus propias versiones:
# proyecto_a/venv/lib/python3.x/site-packages/requests  <- 2.20
# proyecto_b/venv/lib/python3.x/site-packages/requests  <- 2.28

# Para verificar si estás en un entorno virtual:
import sys
print(sys.prefix)        # directorio del entorno virtual activo
print(sys.base_prefix)   # directorio del Python base del sistema

en_entorno_virtual = sys.prefix != sys.base_prefix
print(f"¿En entorno virtual? {en_entorno_virtual}")`,
    keyPoints: [
      'Un entorno virtual aísla las dependencias de cada proyecto',
      'Evita conflictos entre versiones de librerías',
      'venv es el módulo estándar incluido en Python 3.3+',
      'Cada entorno tiene su propia copia de pip y site-packages',
      'Es buena práctica crear un entorno virtual por cada proyecto',
    ],
    exercise: {
      description: 'Explica con tus propias palabras: ¿qué problema resuelven los entornos virtuales y por qué son importantes en proyectos reales?',
      hint: 'Piensa en un equipo de trabajo donde varios desarrolladores trabajan en proyectos distintos con versiones diferentes de la misma librería.',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito principal de un entorno virtual en Python?',
        options: [
          'Hacer que Python sea más rápido',
          'Aislar las dependencias de cada proyecto evitando conflictos',
          'Encriptar el código fuente',
          'Compilar Python a código máquina',
        ],
        correctAnswer: 'Aislar las dependencias de cada proyecto evitando conflictos',
        correctFeedback: '¡Correcto! Los entornos virtuales crean un espacio aislado con sus propias librerías para cada proyecto.',
        incorrectFeedback: 'El propósito es el aislamiento de dependencias. Cada proyecto tiene su propio entorno con las versiones exactas que necesita.',
      },
      {
        question: '¿Qué módulo de Python (incluido en la librería estándar) se usa para crear entornos virtuales?',
        options: ['virtualenv', 'conda', 'venv', 'pip'],
        correctAnswer: 'venv',
        correctFeedback: '¡Exacto! `venv` está incluido en Python desde la versión 3.3 y es la herramienta estándar recomendada.',
        incorrectFeedback: '`venv` es el módulo estándar incluido en Python 3.3+. `pip` instala paquetes, `virtualenv` es una alternativa externa, y `conda` es para data science.',
      },
      {
        question: '¿Cuál es el resultado del siguiente código si estás dentro de un entorno virtual?\n\n```python\nimport sys\nprint(sys.prefix == sys.base_prefix)\n```',
        options: ['True', 'False', 'None', 'Error'],
        correctAnswer: 'False',
        correctFeedback: '¡Correcto! Dentro de un entorno virtual, `sys.prefix` apunta al entorno virtual y `sys.base_prefix` al Python del sistema, por lo que son distintos.',
        incorrectFeedback: 'Dentro de un entorno virtual, `sys.prefix` y `sys.base_prefix` son diferentes: uno apunta al entorno virtual y el otro al Python global. Son distintos, así que el resultado es `False`.',
      },
      {
        question: 'Tienes dos proyectos: uno necesita Django 3.2 y otro Django 4.2. ¿Cuál es la mejor solución?',
        options: [
          'Instalar ambas versiones globalmente',
          'Usar solo una versión para ambos proyectos',
          'Crear un entorno virtual separado para cada proyecto',
          'Desinstalar Django al cambiar de proyecto',
        ],
        correctAnswer: 'Crear un entorno virtual separado para cada proyecto',
        correctFeedback: '¡Exacto! Cada proyecto tiene su entorno virtual con la versión de Django que necesita, sin interferirse.',
        incorrectFeedback: 'La solución correcta es un entorno virtual por proyecto. Así cada uno tiene exactamente las versiones que necesita sin conflictos.',
      },
      {
        question: '¿Qué NO forma parte de un entorno virtual?',
        options: [
          'Una copia de Python',
          'Las librerías instaladas con pip',
          'El código fuente de tu proyecto',
          'Scripts de activación',
        ],
        correctAnswer: 'El código fuente de tu proyecto',
        correctFeedback: '¡Correcto! El entorno virtual contiene Python, pip y las librerías, pero NO el código fuente de tu proyecto. El código va en tu carpeta de proyecto.',
        incorrectFeedback: 'El entorno virtual contiene Python, pip, las librerías y scripts de activación. El código fuente de tu proyecto es tuyo y va separado del entorno virtual.',
      },
      {
        question: '¿Cuál es la diferencia entre `venv` y `virtualenv`?',
        options: [
          '`venv` está incluido en Python, `virtualenv` es una librería externa',
          '`virtualenv` está incluido en Python, `venv` es externo',
          'Son exactamente lo mismo',
          '`venv` solo funciona en Windows',
        ],
        correctAnswer: '`venv` está incluido en Python, `virtualenv` es una librería externa',
        correctFeedback: '¡Correcto! `venv` es el módulo estándar desde Python 3.3. `virtualenv` es una librería externa más antigua con algunas funciones adicionales.',
        incorrectFeedback: '`venv` es el módulo estándar incluido en Python 3.3+, mientras que `virtualenv` es una herramienta externa más antigua que hay que instalar por separado.',
      },
    ],
  },
  {
    slug: 'crear-venv',
    title: 'Crear un entorno virtual',
    module: 'Entornos virtuales',
    moduleNumber: 19,
    order: 91,
    description: 'Aprende a crear entornos virtuales con el módulo venv paso a paso.',
    explanation: `## Crear un entorno virtual con venv

### Comando básico

\`\`\`bash
python -m venv nombre_del_entorno
\`\`\`

La convención más común es llamarlo \`venv\` o \`.venv\`:

\`\`\`bash
python -m venv venv
\`\`\`

### ¿Qué se crea?

Al ejecutar el comando, se crea una carpeta con esta estructura:

\`\`\`
mi_proyecto/
├── venv/
│   ├── bin/          (Linux/Mac) o Scripts/ (Windows)
│   │   ├── python
│   │   ├── pip
│   │   └── activate
│   ├── include/
│   └── lib/
│       └── python3.x/
│           └── site-packages/
└── mi_codigo.py
\`\`\`

### Opciones útiles

\`\`\`bash
# Especificar versión de Python
python3.10 -m venv venv

# Sin copiar librerías del sistema (más limpio)
python -m venv --clear venv

# Con acceso a librerías del sistema (no recomendado)
python -m venv --system-site-packages venv
\`\`\`

### Buenas prácticas

- Crea el entorno virtual **dentro** de la carpeta del proyecto
- Agrega el nombre del entorno al \`.gitignore\` (nunca subas el entorno al repositorio)
- Usa \`.venv\` (con punto) para que sea una carpeta oculta en Linux/Mac`,
    codeExample: `# Crear un entorno virtual (ejecutar en terminal, no en Python)

# Paso 1: Ir a la carpeta del proyecto
# cd mi_proyecto

# Paso 2: Crear el entorno virtual
# python -m venv venv

# En Windows con versión específica:
# py -3.10 -m venv venv

# En Mac/Linux con versión específica:
# python3.10 -m venv venv

# ¿Qué hay en el entorno recién creado?
import os

# Simular la estructura creada (solo informativo)
estructura = """
mi_proyecto/
├── venv/
│   ├── Scripts/         <- Windows
│   │   ├── python.exe
│   │   ├── pip.exe
│   │   └── activate.bat
│   ├── Lib/
│   │   └── site-packages/  <- Aquí van tus librerías
│   └── pyvenv.cfg       <- Configuración del entorno
└── tu_codigo.py
"""
print(estructura)

# Contenido típico de pyvenv.cfg
cfg_contenido = """
home = C:/Python311
include-system-site-packages = false
version = 3.11.0
"""
print("Configuración del entorno:")
print(cfg_contenido)`,
    keyPoints: [
      'El comando es: python -m venv nombre_entorno',
      'La convención es nombrar el entorno "venv" o ".venv"',
      'Se crea una carpeta con Python, pip y las librerías instaladas',
      'Nunca subas el entorno virtual al repositorio (agrega al .gitignore)',
      'Cada entorno es independiente del Python global del sistema',
    ],
    exercise: {
      description: 'Crea un proyecto llamado "mi_calculadora". Dentro, crea un entorno virtual llamado "venv". Luego lista los archivos que se crearon dentro de la carpeta "venv/Scripts" (Windows) o "venv/bin" (Mac/Linux).',
      hint: 'Usa el comando `python -m venv venv` dentro de la carpeta del proyecto. Luego usa `dir venv/Scripts` en Windows o `ls venv/bin` en Mac/Linux.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando correcto para crear un entorno virtual llamado "venv"?',
        options: [
          'pip install venv',
          'python -m venv venv',
          'virtualenv create venv',
          'python create-env venv',
        ],
        correctAnswer: 'python -m venv venv',
        correctFeedback: '¡Correcto! `python -m venv venv` ejecuta el módulo `venv` de Python para crear un entorno virtual en la carpeta "venv".',
        incorrectFeedback: 'El comando correcto es `python -m venv venv`. El flag `-m` indica que se ejecuta como módulo, y el segundo `venv` es el nombre de la carpeta a crear.',
      },
      {
        question: '¿Dónde se instalan las librerías dentro de un entorno virtual?',
        options: [
          'En C:/Python/Lib/',
          'En el directorio raíz del proyecto',
          'En venv/Lib/site-packages/ (Windows) o venv/lib/python3.x/site-packages/ (Linux)',
          'En el archivo requirements.txt',
        ],
        correctAnswer: 'En venv/Lib/site-packages/ (Windows) o venv/lib/python3.x/site-packages/ (Linux)',
        correctFeedback: '¡Exacto! Las librerías se instalan en la carpeta `site-packages` dentro del entorno virtual, completamente aisladas del sistema.',
        incorrectFeedback: 'Las librerías van en la carpeta `site-packages` dentro del entorno virtual (venv/Lib/site-packages en Windows). Esto las mantiene aisladas de las librerías del sistema.',
      },
      {
        question: '¿Por qué NO debes subir el entorno virtual al repositorio de git?',
        options: [
          'Porque git no soporta carpetas',
          'Porque ocupa mucho espacio y contiene binarios específicos del sistema operativo',
          'Porque es un archivo secreto',
          'Porque git lo borra automáticamente',
        ],
        correctAnswer: 'Porque ocupa mucho espacio y contiene binarios específicos del sistema operativo',
        correctFeedback: '¡Correcto! El entorno virtual puede pesar varios MB o GB, contiene binarios del sistema y puede recrearse fácilmente con requirements.txt.',
        incorrectFeedback: 'El entorno virtual no debe ir en git porque: ocupa mucho espacio, contiene binarios del sistema operativo (no son portables) y puede recrearse fácilmente con `pip install -r requirements.txt`.',
      },
      {
        question: '¿Qué archivo dentro del entorno virtual contiene su configuración (versión de Python, etc.)?',
        options: ['setup.py', 'pyvenv.cfg', 'requirements.txt', 'config.ini'],
        correctAnswer: 'pyvenv.cfg',
        correctFeedback: '¡Correcto! `pyvenv.cfg` es el archivo de configuración del entorno virtual que indica qué versión de Python usa y otras opciones.',
        incorrectFeedback: '`pyvenv.cfg` es el archivo de configuración dentro del entorno virtual. Contiene la versión de Python y otras configuraciones del entorno.',
      },
      {
        question: '¿Cuál es la diferencia entre crear el entorno con `--system-site-packages` versus sin esa opción?',
        options: [
          'Con `--system-site-packages` el entorno tiene acceso a las librerías instaladas globalmente',
          'Sin `--system-site-packages` el entorno es más rápido',
          'Con `--system-site-packages` el entorno es más pequeño',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'Con `--system-site-packages` el entorno tiene acceso a las librerías instaladas globalmente',
        correctFeedback: '¡Correcto! Por defecto, el entorno está completamente aislado. Con `--system-site-packages` puede "ver" las librerías del sistema, aunque generalmente no es recomendable.',
        incorrectFeedback: 'La opción `--system-site-packages` permite que el entorno virtual acceda a las librerías instaladas globalmente en el sistema. Sin esa opción, el entorno está completamente aislado (recomendado).',
      },
    ],
  },
  {
    slug: 'activar-desactivar-venv',
    title: 'Activar y desactivar el entorno virtual',
    module: 'Entornos virtuales',
    moduleNumber: 19,
    order: 92,
    description: 'Aprende a activar y desactivar entornos virtuales en diferentes sistemas operativos.',
    explanation: `## Activar y desactivar el entorno virtual

Crear el entorno no es suficiente. Debes **activarlo** para usarlo. Al activarlo, el terminal usa el Python y pip del entorno virtual en lugar del global.

### Activar en Windows

\`\`\`bash
# PowerShell
venv\\Scripts\\Activate.ps1

# CMD (símbolo del sistema)
venv\\Scripts\\activate.bat
\`\`\`

### Activar en Mac/Linux

\`\`\`bash
source venv/bin/activate
\`\`\`

### ¿Cómo saber si está activo?

El nombre del entorno aparece entre paréntesis al inicio del prompt:

\`\`\`bash
# Antes de activar:
C:\\mi_proyecto>

# Después de activar:
(venv) C:\\mi_proyecto>
\`\`\`

### Verificar qué Python se está usando

\`\`\`bash
# Windows
where python

# Mac/Linux
which python
\`\`\`

Debería mostrar la ruta dentro del entorno virtual.

### Desactivar

\`\`\`bash
deactivate
\`\`\`

### Flujo de trabajo típico

1. Abrir terminal
2. Ir a la carpeta del proyecto
3. **Activar** el entorno virtual
4. Trabajar en el proyecto
5. **Desactivar** al terminar (o simplemente cerrar el terminal)`,
    codeExample: `# Verificar el entorno activo desde Python

import sys
import os

# Ver qué Python está usando
print("Python ejecutable:", sys.executable)
# Si está activo: C:\\mi_proyecto\\venv\\Scripts\\python.exe
# Si no está activo: C:\\Python311\\python.exe

# Verificar si estamos en un entorno virtual
en_venv = sys.prefix != sys.base_prefix
print(f"¿Entorno virtual activo? {en_venv}")

# Ver la variable de entorno que establece la activación
entorno_virtual = os.environ.get('VIRTUAL_ENV')
if entorno_virtual:
    print(f"Entorno virtual: {entorno_virtual}")
else:
    print("No hay entorno virtual activo")

# Ver las rutas de búsqueda de módulos
print("\\nRutas de búsqueda de módulos:")
for ruta in sys.path:
    print(f"  {ruta}")

# COMANDOS DE TERMINAL (no Python):
print("""
=== Comandos de terminal ===

Windows (PowerShell):
  venv\\\\Scripts\\\\Activate.ps1

Windows (CMD):
  venv\\\\Scripts\\\\activate.bat

Mac/Linux:
  source venv/bin/activate

Desactivar (todos):
  deactivate
""")`,
    keyPoints: [
      'Debes activar el entorno virtual antes de usarlo',
      'En Windows: venv\\Scripts\\Activate.ps1 (PowerShell) o activate.bat (CMD)',
      'En Mac/Linux: source venv/bin/activate',
      'El prompt muestra (venv) cuando está activo',
      'El comando "deactivate" desactiva el entorno',
      'La variable VIRTUAL_ENV indica el entorno activo',
    ],
    exercise: {
      description: 'Activa tu entorno virtual y luego ejecuta `python -c "import sys; print(sys.executable)"` para confirmar que Python apunta al entorno virtual. Luego desactívalo y ejecuta el mismo comando para comparar.',
      hint: 'En Windows usa `venv\\Scripts\\Activate.ps1` en PowerShell. Compara la ruta que muestra antes y después de activar.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando para activar un entorno virtual en Mac/Linux?',
        options: [
          'venv/activate',
          'source venv/bin/activate',
          'python activate venv',
          'start venv',
        ],
        correctAnswer: 'source venv/bin/activate',
        correctFeedback: '¡Correcto! En Mac/Linux se usa `source venv/bin/activate`. El comando `source` ejecuta el script en el contexto del shell actual.',
        incorrectFeedback: 'En Mac/Linux el comando es `source venv/bin/activate`. El prefijo `source` es necesario para que la activación afecte al shell actual (no a un subproceso).',
      },
      {
        question: '¿Cómo sabes visualmente que el entorno virtual está activo en la terminal?',
        options: [
          'La terminal cambia de color',
          'El nombre del entorno aparece entre paréntesis al inicio del prompt',
          'Python se ejecuta automáticamente',
          'Aparece un mensaje "Environment activated"',
        ],
        correctAnswer: 'El nombre del entorno aparece entre paréntesis al inicio del prompt',
        correctFeedback: '¡Exacto! Verás algo como `(venv) C:\\mi_proyecto>` o `(venv) usuario@pc:~/mi_proyecto$`',
        incorrectFeedback: 'La señal visual es que el nombre del entorno aparece entre paréntesis en el prompt. Por ejemplo: `(venv) C:\\proyecto>`',
      },
      {
        question: '¿Cuál es el comando para desactivar un entorno virtual?',
        options: [
          'exit',
          'deactivate',
          'stop venv',
          'venv --off',
        ],
        correctAnswer: 'deactivate',
        correctFeedback: '¡Correcto! El comando `deactivate` desactiva el entorno virtual y vuelve al Python global del sistema.',
        incorrectFeedback: 'El comando es simplemente `deactivate`. Funciona igual en Windows, Mac y Linux.',
      },
      {
        question: '¿Qué indica el siguiente resultado de `sys.executable`?\n\n`C:\\mi_proyecto\\venv\\Scripts\\python.exe`',
        options: [
          'Python global del sistema está activo',
          'El entorno virtual está activo y se está usando su Python',
          'Hay un error en la configuración',
          'Python no está instalado',
        ],
        correctAnswer: 'El entorno virtual está activo y se está usando su Python',
        correctFeedback: '¡Exacto! La ruta contiene `venv\\Scripts\\python.exe`, lo que significa que Python se está ejecutando desde el entorno virtual del proyecto.',
        incorrectFeedback: 'Cuando `sys.executable` muestra una ruta dentro de la carpeta `venv` del proyecto, significa que el entorno virtual está activo y Python se ejecuta desde allí.',
      },
      {
        question: '¿Qué pasa si instalas una librería con `pip install` sin activar el entorno virtual?',
        options: [
          'La librería se instala en el entorno virtual del proyecto',
          'La librería se instala en el Python global del sistema',
          'Da error y no se instala',
          'Se instala en ambos lugares',
        ],
        correctAnswer: 'La librería se instala en el Python global del sistema',
        correctFeedback: '¡Correcto! Sin activar el entorno, pip instala en el Python global. Por eso es crucial activar el entorno virtual antes de instalar dependencias.',
        incorrectFeedback: 'Si el entorno no está activo, `pip` usa el Python global del sistema. La librería se instala globalmente, no en el entorno virtual del proyecto. Por eso debes activar primero.',
      },
      {
        question: '¿Qué archivo en Windows (PowerShell) se usa para activar el entorno virtual?',
        options: [
          'venv/bin/activate',
          'venv\\Scripts\\activate.bat',
          'venv\\Scripts\\Activate.ps1',
          'venv\\activate.exe',
        ],
        correctAnswer: 'venv\\Scripts\\Activate.ps1',
        correctFeedback: '¡Correcto! En PowerShell se usa el archivo `.ps1`. Para CMD se usa `activate.bat`. En Mac/Linux se usa `bin/activate`.',
        incorrectFeedback: 'En PowerShell (Windows) se usa `venv\\Scripts\\Activate.ps1`. Para CMD (Windows) es `venv\\Scripts\\activate.bat`. En Mac/Linux es `source venv/bin/activate`.',
      },
    ],
  },
  {
    slug: 'instalar-dependencias',
    title: 'Instalar dependencias con pip',
    module: 'Entornos virtuales',
    moduleNumber: 19,
    order: 93,
    description: 'Gestiona las dependencias de tu proyecto usando pip dentro del entorno virtual.',
    explanation: `## Instalar dependencias con pip

Con el entorno virtual activo, \`pip\` instala en ese entorno aislado.

### Comandos esenciales de pip

\`\`\`bash
# Instalar una librería
pip install requests

# Instalar una versión específica
pip install requests==2.28.0

# Instalar una versión mínima
pip install requests>=2.25

# Actualizar una librería
pip install --upgrade requests

# Desinstalar
pip uninstall requests

# Ver qué hay instalado
pip list

# Ver información de una librería
pip show requests
\`\`\`

### Instalar múltiples librerías

\`\`\`bash
pip install requests flask pandas
\`\`\`

### Verificar la instalación

\`\`\`bash
pip list
\`\`\`

Muestra todas las librerías instaladas en el entorno activo con sus versiones.

### pip freeze vs pip list

- \`pip list\`: formato legible para humanos
- \`pip freeze\`: formato para guardar en archivo (nombre==versión)

\`\`\`bash
pip freeze
# requests==2.28.0
# certifi==2022.12.7
# ...
\`\`\`

### Actualizar pip

\`\`\`bash
python -m pip install --upgrade pip
\`\`\``,
    codeExample: `# Verificar instalación desde Python

# Después de: pip install requests

import requests

print(f"Requests versión: {requests.__version__}")
print(f"URL de la librería: {requests.__file__}")
# La ruta debería estar dentro del venv

# Ejemplo de uso de requests (HTTP)
respuesta = requests.get('https://httpbin.org/json')
print(f"Estado HTTP: {respuesta.status_code}")
datos = respuesta.json()
print(f"Datos recibidos: {datos}")

# ---
# Listar librerías instaladas desde Python (equivale a pip list)
import pkg_resources

print("\\nLibrerías instaladas:")
for paquete in sorted(pkg_resources.working_set, key=lambda p: p.project_name.lower()):
    print(f"  {paquete.project_name} == {paquete.version}")

# ---
# Ver información de una librería específica
import importlib.metadata

try:
    version = importlib.metadata.version('requests')
    print(f"\\nRequests: {version}")
except importlib.metadata.PackageNotFoundError:
    print("requests no está instalado")`,
    keyPoints: [
      'pip install instala librerías en el entorno activo',
      'Siempre activa el entorno virtual antes de usar pip',
      'pip list muestra todas las librerías instaladas',
      'pip freeze muestra las versiones en formato para requirements.txt',
      'Puedes instalar versiones específicas con: librería==versión',
    ],
    exercise: {
      description: 'Activa tu entorno virtual e instala la librería "colorama". Luego verifica la instalación con `pip list` y crea un script Python que importe colorama e imprima texto en color.',
      hint: 'Usa `pip install colorama`. Luego en Python: `from colorama import Fore, Style; print(Fore.GREEN + "Hola" + Style.RESET_ALL)`',
    },
    quiz: [
      {
        question: '¿Cuál es el comando para instalar una versión específica de una librería?',
        options: [
          'pip install requests -v 2.28',
          'pip install requests==2.28.0',
          'pip install requests@2.28.0',
          'pip install requests[2.28.0]',
        ],
        correctAnswer: 'pip install requests==2.28.0',
        correctFeedback: '¡Correcto! Se usa `==` para especificar la versión exacta: `pip install requests==2.28.0`',
        incorrectFeedback: 'Para instalar una versión específica se usa `==`: `pip install requests==2.28.0`. También puedes usar `>=2.25` para versión mínima o `<3.0` para versión máxima.',
      },
      {
        question: '¿Cuál es la diferencia entre `pip list` y `pip freeze`?',
        options: [
          'Son exactamente iguales',
          '`pip list` es legible para humanos; `pip freeze` muestra formato nombre==versión ideal para requirements.txt',
          '`pip freeze` es más lento',
          '`pip list` muestra solo las librerías del sistema',
        ],
        correctAnswer: '`pip list` es legible para humanos; `pip freeze` muestra formato nombre==versión ideal para requirements.txt',
        correctFeedback: '¡Exacto! `pip freeze` genera salida en el formato exacto para guardar en requirements.txt y reproducir el entorno.',
        incorrectFeedback: '`pip list` muestra un formato de tabla amigable. `pip freeze` genera `librería==versión` — el formato perfecto para guardar en requirements.txt.',
      },
      {
        question: '¿Qué comando actualiza una librería ya instalada a la última versión?',
        options: [
          'pip update requests',
          'pip install --upgrade requests',
          'pip refresh requests',
          'pip install --latest requests',
        ],
        correctAnswer: 'pip install --upgrade requests',
        correctFeedback: '¡Correcto! El flag `--upgrade` (o `-U`) le indica a pip que actualice la librería a la versión más reciente.',
        incorrectFeedback: 'El comando correcto es `pip install --upgrade requests` (también funciona con `-U`). No existe `pip update` como comando.',
      },
      {
        question: '¿Qué ocurre si ejecutas `pip install flask` sin activar el entorno virtual?',
        options: [
          'Flask se instala en el entorno virtual del proyecto actual',
          'Flask se instala globalmente en el Python del sistema',
          'Da error "environment not active"',
          'Flask se instala en todos los entornos virtuales',
        ],
        correctAnswer: 'Flask se instala globalmente en el Python del sistema',
        correctFeedback: '¡Correcto! Sin el entorno activo, pip usa el Python global. Esta es una fuente común de errores — siempre activa el entorno primero.',
        incorrectFeedback: 'Sin el entorno activo, pip usa el Python global del sistema. Flask se instalaría globalmente, no en tu entorno virtual. Siempre activa el entorno antes de instalar.',
      },
      {
        question: '¿Cuál es el comando para ver información detallada sobre una librería instalada?',
        options: [
          'pip info requests',
          'pip show requests',
          'pip detail requests',
          'pip inspect requests',
        ],
        correctAnswer: 'pip show requests',
        correctFeedback: '¡Correcto! `pip show requests` muestra información como versión, autor, dependencias y ubicación de la librería.',
        incorrectFeedback: 'El comando es `pip show nombre_librería`. Muestra versión, autor, licencia, dependencias y la ruta de instalación.',
      },
    ],
  },
  {
    slug: 'requirements-txt',
    title: 'El archivo requirements.txt',
    module: 'Entornos virtuales',
    moduleNumber: 19,
    order: 94,
    description: 'Aprende a guardar y reproducir las dependencias de un proyecto con requirements.txt.',
    explanation: `## El archivo requirements.txt

El archivo \`requirements.txt\` lista todas las dependencias del proyecto. Es como el "recibo" de lo que necesita tu proyecto.

### Crear requirements.txt

\`\`\`bash
pip freeze > requirements.txt
\`\`\`

El contenido sería algo así:

\`\`\`
certifi==2022.12.7
charset-normalizer==3.0.1
requests==2.28.2
urllib3==1.26.14
\`\`\`

### Instalar desde requirements.txt

Cuando alguien clona tu proyecto, puede instalar todas las dependencias con un comando:

\`\`\`bash
pip install -r requirements.txt
\`\`\`

### Flujo completo de trabajo en equipo

\`\`\`bash
# Desarrollador A (tú):
python -m venv venv
venv\\Scripts\\activate    # o source venv/bin/activate
pip install requests flask
pip freeze > requirements.txt
git add requirements.txt
git commit -m "Añadir dependencias"

# Desarrollador B (compañero):
git clone tu_repositorio
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt   # instala exactamente lo mismo
\`\`\`

### requirements.txt con versiones flexibles

Puedes ser más o menos estricto con las versiones:

\`\`\`
requests==2.28.2     # versión exacta
requests>=2.25       # mínimo 2.25
requests~=2.28       # compatible con 2.28 (2.28.x)
requests             # cualquier versión
\`\`\`

### Múltiples archivos de requirements

\`\`\`
requirements.txt          <- dependencias de producción
requirements-dev.txt      <- dependencias de desarrollo (pytest, black, etc.)
\`\`\``,
    codeExample: `import subprocess
import sys

# Ver el contenido típico de un requirements.txt
requirements_ejemplo = """
# requirements.txt
requests==2.28.2
flask==2.2.3
python-dotenv==0.21.0
"""
print("Ejemplo de requirements.txt:")
print(requirements_ejemplo)

# Leer un requirements.txt desde Python
def leer_requirements(archivo='requirements.txt'):
    try:
        with open(archivo, 'r') as f:
            lineas = f.readlines()

        dependencias = []
        for linea in lineas:
            linea = linea.strip()
            if linea and not linea.startswith('#'):
                dependencias.append(linea)

        return dependencias
    except FileNotFoundError:
        return []

deps = leer_requirements()
if deps:
    print("Dependencias del proyecto:")
    for dep in deps:
        print(f"  - {dep}")
else:
    print("(No se encontró requirements.txt en este directorio)")

# Verificar qué está instalado vs lo que necesita el proyecto
import importlib.metadata

def verificar_dependencias(archivo='requirements.txt'):
    requeridas = leer_requirements(archivo)

    for req in requeridas:
        nombre = req.split('==')[0].split('>=')[0].split('~=')[0]
        try:
            version = importlib.metadata.version(nombre)
            print(f"  ✓ {nombre} ({version})")
        except importlib.metadata.PackageNotFoundError:
            print(f"  ✗ {nombre} NO instalado")`,
    keyPoints: [
      'pip freeze > requirements.txt guarda todas las dependencias',
      'pip install -r requirements.txt instala desde el archivo',
      'requirements.txt debe incluirse en el control de versiones (git)',
      'El entorno virtual no debe incluirse en git, pero requirements.txt sí',
      'Permite reproducir exactamente el mismo entorno en otro equipo',
    ],
    exercise: {
      description: 'En tu entorno virtual, instala las librerías "requests" y "colorama". Luego genera el requirements.txt con `pip freeze > requirements.txt`. Crea un segundo entorno virtual vacío e instala las dependencias desde el requirements.txt. Verifica que ambos entornos tienen las mismas librerías.',
      hint: 'Recuerda activar cada entorno antes de instalar. Usa `pip list` para comparar las librerías de ambos entornos.',
    },
    quiz: [
      {
        question: '¿Cuál es el comando para generar el archivo requirements.txt con todas las dependencias actuales?',
        options: [
          'pip save requirements.txt',
          'pip freeze > requirements.txt',
          'pip export requirements.txt',
          'pip list > requirements.txt',
        ],
        correctAnswer: 'pip freeze > requirements.txt',
        correctFeedback: '¡Correcto! `pip freeze` genera la lista en formato nombre==versión y el `>` redirige la salida al archivo requirements.txt.',
        incorrectFeedback: 'El comando es `pip freeze > requirements.txt`. `pip freeze` genera la lista y `>` redirige la salida al archivo. `pip list` también genera una lista pero en formato diferente.',
      },
      {
        question: '¿Cuál es el comando para instalar todas las dependencias desde requirements.txt?',
        options: [
          'pip install requirements.txt',
          'pip load -r requirements.txt',
          'pip install -r requirements.txt',
          'pip restore requirements.txt',
        ],
        correctAnswer: 'pip install -r requirements.txt',
        correctFeedback: '¡Correcto! El flag `-r` le indica a pip que lea las dependencias desde un archivo.',
        incorrectFeedback: 'El comando es `pip install -r requirements.txt`. El flag `-r` (requirements) le dice a pip que lea la lista del archivo.',
      },
      {
        question: '¿Cuál de estos archivos debes incluir en git?',
        options: [
          'La carpeta venv/ completa',
          'Solo requirements.txt',
          'Ni venv/ ni requirements.txt',
          'Ambos: venv/ y requirements.txt',
        ],
        correctAnswer: 'Solo requirements.txt',
        correctFeedback: '¡Exacto! `requirements.txt` va en git para que otros puedan reproducir el entorno. La carpeta `venv/` va en `.gitignore` porque es pesada y específica del sistema.',
        incorrectFeedback: 'Solo `requirements.txt` va en git. La carpeta `venv/` se agrega al `.gitignore` porque: pesa mucho, contiene binarios del sistema y puede recrearse fácilmente con `pip install -r requirements.txt`.',
      },
      {
        question: '¿Qué significa `requests~=2.28` en un requirements.txt?',
        options: [
          'Exactamente la versión 2.28',
          'Compatible con 2.28 (cualquier 2.28.x pero no 2.29)',
          'Mayor que 2.28',
          'Cualquier versión de requests',
        ],
        correctAnswer: 'Compatible con 2.28 (cualquier 2.28.x pero no 2.29)',
        correctFeedback: '¡Correcto! El operador `~=` (compatible release) significa "compatible con", que permite parches (2.28.1, 2.28.2) pero no versiones menores (2.29).',
        incorrectFeedback: 'El operador `~=` es "compatible release". `~=2.28` permite 2.28.0, 2.28.1, 2.28.2, etc., pero no 2.29 o superior. Para versión exacta usa `==`.',
      },
      {
        question: 'Un compañero clona tu repositorio y ejecuta `pip install -r requirements.txt` sin activar el entorno virtual. ¿Qué pasará?',
        options: [
          'Las dependencias se instalarán en el entorno virtual del proyecto',
          'Las dependencias se instalarán en el Python global de su sistema',
          'Dará error porque no existe entorno virtual',
          'Las dependencias no se instalarán',
        ],
        correctAnswer: 'Las dependencias se instalarán en el Python global de su sistema',
        correctFeedback: '¡Correcto! Sin activar el entorno, pip usa el Python global. Tu compañero debe primero crear y activar el entorno virtual, luego ejecutar el comando.',
        incorrectFeedback: 'Sin activar el entorno, pip instala en el Python global del sistema. El proceso correcto es: crear venv → activarlo → ejecutar `pip install -r requirements.txt`.',
      },
    ],
  },
  {
    slug: 'errores-entornos-virtuales',
    title: 'Errores comunes con entornos virtuales',
    module: 'Entornos virtuales',
    moduleNumber: 19,
    order: 95,
    description: 'Identifica y resuelve los errores más frecuentes al trabajar con entornos virtuales.',
    explanation: `## Errores comunes con entornos virtuales

### Error 1: "ModuleNotFoundError" aunque instalaste la librería

**Causa**: Instalaste la librería sin el entorno activo (fue al Python global).

**Solución**:
\`\`\`bash
# Activar el entorno
source venv/bin/activate  # Mac/Linux
venv\\Scripts\\Activate.ps1  # Windows

# Instalar de nuevo con el entorno activo
pip install requests
\`\`\`

### Error 2: Scripts PowerShell deshabilitados (Windows)

\`\`\`
venv\\Scripts\\Activate.ps1 cannot be loaded because running scripts is disabled
\`\`\`

**Solución**:
\`\`\`powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
\`\`\`

O usar CMD en su lugar:
\`\`\`cmd
venv\\Scripts\\activate.bat
\`\`\`

### Error 3: "pip: command not found" (Mac/Linux)

**Causa**: pip no está instalado o el entorno no está activo.

**Solución**:
\`\`\`bash
python -m pip install requests
\`\`\`

### Error 4: Python del entorno no corresponde

Si creas el entorno con Python 3.8 pero necesitas 3.11:

\`\`\`bash
# Eliminar el entorno
rm -rf venv

# Recrear con la versión correcta
python3.11 -m venv venv
\`\`\`

### Error 5: El entorno funciona en mi equipo pero no en producción

**Causa**: requirements.txt incompleto o con versiones distintas.

**Solución**:
- Siempre generar requirements.txt con \`pip freeze > requirements.txt\`
- Incluirlo en el repositorio
- Probar en un entorno limpio antes de desplegar

### Buenas prácticas generales

1. **Siempre activa** el entorno antes de trabajar
2. **Actualiza requirements.txt** cuando agregues una dependencia
3. **Agrega venv/** al \`.gitignore\`
4. **No modifiques** el entorno virtual manualmente`,
    codeExample: `import sys
import os

# Diagnóstico del entorno virtual

def diagnosticar_entorno():
    print("=" * 50)
    print("DIAGNÓSTICO DEL ENTORNO VIRTUAL")
    print("=" * 50)

    # 1. ¿Está activo un entorno virtual?
    en_venv = sys.prefix != sys.base_prefix
    print(f"\\n✓ Entorno virtual activo: {en_venv}")

    if not en_venv:
        print("  ⚠️  ADVERTENCIA: No hay entorno virtual activo")
        print("  Activa con: source venv/bin/activate (Mac/Linux)")
        print("             venv\\\\Scripts\\\\Activate.ps1 (Windows)")
        return

    # 2. Ruta del entorno
    print(f"\\n✓ Ruta del entorno: {sys.prefix}")

    # 3. Versión de Python
    print(f"✓ Versión de Python: {sys.version}")

    # 4. Ejecutable de Python
    print(f"✓ Python ejecutable: {sys.executable}")

    # 5. Variable VIRTUAL_ENV
    venv_path = os.environ.get('VIRTUAL_ENV', 'No definida')
    print(f"✓ VIRTUAL_ENV: {venv_path}")

    # 6. Verificar pip
    try:
        import pip
        print(f"✓ pip versión: {pip.__version__}")
    except ImportError:
        print("✗ pip no encontrado")

    print("\\n" + "=" * 50)
    print("Todo parece correcto. ¡Listo para trabajar!")
    print("=" * 50)

diagnosticar_entorno()`,
    keyPoints: [
      'ModuleNotFoundError suele significar que el entorno no estaba activo al instalar',
      'En Windows PowerShell puede necesitar habilitar la ejecución de scripts',
      'Usa "python -m pip" en lugar de solo "pip" si hay problemas',
      'Si el entorno tiene la versión de Python incorrecta, elimínalo y recréalo',
      'Mantén requirements.txt actualizado y en el repositorio',
    ],
    exercise: {
      description: 'Escribe un script Python que compruebe si hay un entorno virtual activo y, si lo hay, liste todas las librerías instaladas con sus versiones. Si no hay entorno activo, debe mostrar un mensaje de advertencia con las instrucciones para activarlo.',
      hint: 'Usa `sys.prefix != sys.base_prefix` para verificar el entorno. Para listar librerías puedes usar `importlib.metadata` o el módulo `pkg_resources`.',
    },
    quiz: [
      {
        question: '¿Cuál es la causa más común de "ModuleNotFoundError" cuando estás seguro de haber instalado la librería?',
        options: [
          'La librería tiene un bug',
          'Instalaste la librería sin el entorno virtual activo',
          'Python está desactualizado',
          'El nombre del módulo está mal escrito',
        ],
        correctAnswer: 'Instalaste la librería sin el entorno virtual activo',
        correctFeedback: '¡Correcto! La causa más frecuente es instalar sin el entorno activo. La librería va al Python global, pero el script busca en el entorno virtual.',
        incorrectFeedback: 'La causa más común es haber instalado sin el entorno activo. La librería se instaló en el Python global, no en el entorno virtual. Activa el entorno y vuelve a instalar.',
      },
      {
        question: 'En Windows PowerShell aparece: "Activate.ps1 cannot be loaded because running scripts is disabled". ¿Cuál es la solución?',
        options: [
          'Reinstalar Python',
          'Usar `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`',
          'Eliminar el entorno virtual',
          'Instalar virtualenv en lugar de venv',
        ],
        correctAnswer: 'Usar `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`',
        correctFeedback: '¡Correcto! Windows PowerShell por defecto bloquea la ejecución de scripts. Este comando permite ejecutar scripts firmados del usuario actual.',
        incorrectFeedback: 'El error es de política de ejecución de PowerShell. La solución es `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`. También puedes usar CMD con `activate.bat`.',
      },
      {
        question: '¿Cómo puedes verificar desde Python si estás en un entorno virtual?',
        options: [
          'print(venv.is_active())',
          'import sys; print(sys.prefix != sys.base_prefix)',
          'os.environ["IN_VENV"]',
          'virtualenv.check()',
        ],
        correctAnswer: 'import sys; print(sys.prefix != sys.base_prefix)',
        correctFeedback: '¡Exacto! En un entorno virtual, `sys.prefix` apunta al entorno y `sys.base_prefix` al Python del sistema. Si son distintos, hay un entorno activo.',
        incorrectFeedback: 'La forma correcta es comparar `sys.prefix` con `sys.base_prefix`. En un entorno virtual son diferentes (uno apunta al venv, el otro al Python global).',
      },
      {
        question: '¿Qué deberías incluir en el archivo .gitignore para entornos virtuales?',
        options: [
          'requirements.txt',
          'venv/ y .venv/',
          'src/',
          'setup.py',
        ],
        correctAnswer: 'venv/ y .venv/',
        correctFeedback: '¡Correcto! Las carpetas del entorno virtual no deben ir en git. Se agregan al .gitignore con: `venv/` y `.venv/`.',
        incorrectFeedback: 'Las carpetas del entorno virtual (`venv/`, `.venv/`) van en el `.gitignore`. Pero `requirements.txt` sí debe estar en git para que otros puedan recrear el entorno.',
      },
      {
        question: 'Creaste un entorno virtual con Python 3.8 pero ahora necesitas Python 3.11. ¿Qué debes hacer?',
        options: [
          'Actualizar Python dentro del entorno virtual',
          'Eliminar la carpeta venv y crear un nuevo entorno con Python 3.11',
          'Instalar Python 3.11 dentro de la carpeta venv',
          'No es posible cambiar la versión de Python',
        ],
        correctAnswer: 'Eliminar la carpeta venv y crear un nuevo entorno con Python 3.11',
        correctFeedback: '¡Correcto! No se puede cambiar la versión de Python de un entorno existente. Debes eliminar la carpeta y crear un nuevo entorno con la versión correcta.',
        incorrectFeedback: 'La versión de Python de un entorno virtual no puede actualizarse. Debes eliminar la carpeta `venv/` y recrearla especificando la versión: `python3.11 -m venv venv`.',
      },
      {
        question: '¿Cuál es el flujo correcto para agregar una nueva dependencia al proyecto?',
        options: [
          'Editar requirements.txt manualmente y luego instalar',
          'Activar el entorno → pip install → pip freeze > requirements.txt',
          'pip install → activar el entorno → actualizar requirements.txt',
          'Solo instalar con pip, requirements.txt se actualiza solo',
        ],
        correctAnswer: 'Activar el entorno → pip install → pip freeze > requirements.txt',
        correctFeedback: '¡Correcto! Primero activas el entorno, luego instalas la dependencia y finalmente actualizas requirements.txt con pip freeze.',
        incorrectFeedback: 'El flujo correcto es: 1) Activar el entorno, 2) `pip install nueva_librería`, 3) `pip freeze > requirements.txt`. Requirements.txt no se actualiza automáticamente.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module19: Module = {
  number: 19,
  title: 'Entornos virtuales',
  level: 'intermedio',
  lessons: lessonsModule19,
}
