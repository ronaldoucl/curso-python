import type { Lesson } from '@/types'

export const lessonsModule10: Lesson[] = [
  {
    slug: 'que-son-modulos',
    title: '¿Qué son los módulos?',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 40,
    description: 'Entiende qué es un módulo en Python, por qué existen y cómo Python los busca y carga.',
    explanation: `## ¿Qué es un módulo?

Un **módulo** es simplemente un archivo \`.py\` que contiene código Python (funciones, clases, variables, constantes) que puedes reutilizar en otros archivos.

\`\`\`
mi_proyecto/
  main.py         ← tu programa principal
  matematicas.py  ← módulo con funciones matemáticas
  utilidades.py   ← módulo con utilidades generales
\`\`\`

## ¿Por qué usar módulos?

1. **Organización**: divide el código en piezas lógicas
2. **Reutilización**: usa el mismo código en múltiples proyectos
3. **Mantenimiento**: cambia un módulo sin tocar los demás
4. **Colaboración**: diferentes personas pueden trabajar en distintos módulos

## Los tres tipos de módulos en Python

| Tipo | Descripción | Ejemplos |
|------|-------------|---------|
| **Estándar** | Vienen incluidos con Python | \`math\`, \`os\`, \`datetime\`, \`random\` |
| **Terceros** | Instalados con pip | \`requests\`, \`pandas\`, \`flask\` |
| **Propios** | Los que tú creas | \`mi_modulo.py\` |

## ¿Cómo busca Python los módulos?

Cuando escribes \`import algo\`, Python busca en este orden:

1. El directorio actual del script
2. La variable de entorno \`PYTHONPATH\`
3. Los directorios de la instalación de Python

Puedes ver las rutas de búsqueda:

\`\`\`python
import sys
print(sys.path)  # lista de directorios donde Python busca módulos
\`\`\`

## El archivo __init__.py

Cuando una carpeta contiene un \`__init__.py\`, Python la trata como un **paquete** (un módulo que es una carpeta):

\`\`\`
mi_paquete/
  __init__.py       ← convierte la carpeta en paquete
  modulo_a.py
  modulo_b.py
\`\`\`

## El atributo __name__

Cada módulo tiene un atributo especial \`__name__\`:

\`\`\`python
# archivo: saludos.py
def saludar(nombre):
    return f"Hola, {nombre}!"

print(__name__)
# → Si se ejecuta directamente: "__main__"
# → Si se importa: "saludos"
\`\`\`

El patrón \`if __name__ == "__main__":\` permite tener código que solo se ejecuta al correr el archivo directamente, no al importarlo:

\`\`\`python
def mi_funcion():
    return 42

if __name__ == "__main__":
    print(mi_funcion())  # solo se ejecuta si corres este archivo
\`\`\``,
    codeExample: `# Demostración de conceptos de módulos

import sys
import os

# Ver dónde busca Python los módulos
print("=== Rutas de búsqueda de módulos ===")
for i, ruta in enumerate(sys.path[:4], 1):
    print(f"  {i}. {ruta}")
print("  ...")

# Información sobre módulos importados
print("\n=== Módulos ya cargados ===")
modulos_sistema = [m for m in sys.modules if not m.startswith('_')]
print(f"Módulos cargados: {len(sys.modules)}")
print(f"Algunos: {modulos_sistema[:5]}")

# El módulo os: un ejemplo de módulo estándar
print("\n=== Usando el módulo os ===")
print(f"Directorio actual: {os.getcwd()}")
print(f"Separador de rutas: '{os.sep}'")
print(f"Variable HOME: {os.environ.get('HOME', 'No disponible')}")

# sys también es un módulo útil
print("\n=== Información del sistema (sys) ===")
print(f"Versión de Python: {sys.version.split()[0]}")
print(f"Plataforma: {sys.platform}")
print(f"Ejecutable: {sys.executable}")

# Simular el patrón __name__ == "__main__"
def procesar_datos(datos):
    return [x * 2 for x in datos]

def main():
    resultado = procesar_datos([1, 2, 3, 4, 5])
    print(f"\n=== Función main() ===")
    print(f"Resultado: {resultado}")
    print(f"__name__ actual: {__name__}")

# En un archivo real esto sería:
# if __name__ == "__main__":
#     main()
# Por ahora lo llamamos directamente:
main()`,
    keyPoints: [
      'Un módulo es un archivo `.py` con código reutilizable (funciones, clases, variables).',
      'Existen tres tipos: estándar (incluidos con Python), terceros (pip) y propios (los que creas).',
      'Python busca módulos en el directorio actual, luego en `PYTHONPATH` y después en su instalación.',
      '`__name__` es `"__main__"` si el archivo se ejecuta directamente, o el nombre del módulo si se importa.',
      'El patrón `if __name__ == "__main__":` protege código que no debe ejecutarse al importar.',
    ],
    exercise: {
      description: 'Crea un script que imprima: (1) los primeros 5 elementos de `sys.path`, (2) la versión de Python con `sys.version`, (3) el directorio de trabajo actual con `os.getcwd()`. Añade el patrón `if __name__ == "__main__":` para el código principal.',
      hint: 'Importa `sys` y `os` al inicio. Para `sys.path[:5]` usa un for loop o slicing. `sys.version` es un string; puedes usar `.split()[0]` para obtener solo el número de versión.',
    },
    quiz: [
      {
        question: '¿Qué es un módulo en Python?',
        options: [
          'Una clase especial que contiene otras clases',
          'Un archivo .py que contiene código (funciones, clases, variables) reutilizable',
          'Un archivo de configuración de Python',
          'Una carpeta con archivos de datos',
        ],
        correctAnswer: 'Un archivo .py que contiene código (funciones, clases, variables) reutilizable',
        correctFeedback: 'Correcto. Un módulo es simplemente un archivo Python (.py). Cuando lo importas en otro script, puedes usar todo lo que define.',
        incorrectFeedback: 'Un módulo es un archivo .py normal. La magia está en que al importarlo (`import nombre`) puedes acceder a las funciones, clases y variables que define.',
      },
      {
        question: '¿Cuándo tiene `__name__` el valor `"__main__"`?',
        options: [
          'Siempre que se define una función `main()`',
          'Solo cuando el archivo se ejecuta directamente (no al importarlo)',
          'Cuando el archivo está en el directorio raíz',
          'Cuando no hay errores de sintaxis en el archivo',
        ],
        correctAnswer: 'Solo cuando el archivo se ejecuta directamente (no al importarlo)',
        correctFeedback: 'Exacto. Si haces `python mi_script.py`, `__name__` vale `"__main__"`. Si otro archivo hace `import mi_script`, `__name__` vale `"mi_script"`.',
        incorrectFeedback: 'Python asigna `__name__ = "__main__"` solo al archivo que se ejecuta directamente. Al importarlo desde otro archivo, `__name__` toma el nombre del módulo.',
      },
      {
        question: '¿Por qué se usa el patrón `if __name__ == "__main__":`?',
        options: [
          'Para que el código sea más rápido',
          'Para evitar que cierto código se ejecute cuando el archivo es importado por otro módulo',
          'Para definir la función de entrada obligatoria de Python',
          'Para verificar que el archivo tiene la extensión .py',
        ],
        correctAnswer: 'Para evitar que cierto código se ejecute cuando el archivo es importado por otro módulo',
        correctFeedback: '¡Bien! Si tienes `print("Hola")` fuera de este patrón, se ejecutará cada vez que alguien importe tu módulo. Con el patrón, solo se ejecuta al correr el archivo directamente.',
        incorrectFeedback: 'Sin este patrón, cualquier código de nivel superior en tu módulo se ejecutaría al importarlo. El patrón permite tener pruebas o código de demostración que no molesta cuando otros importan tu módulo.',
      },
      {
        question: '¿Qué hace `sys.path`?',
        options: [
          'Muestra la ruta del ejecutable de Python',
          'Lista los directorios donde Python busca módulos al hacer `import`',
          'Contiene la ruta del archivo actual',
          'Define las variables de entorno del sistema',
        ],
        correctAnswer: 'Lista los directorios donde Python busca módulos al hacer `import`',
        correctFeedback: 'Correcto. `sys.path` es una lista de directorios. Cuando haces `import algo`, Python recorre esta lista buscando un archivo `algo.py` o un paquete `algo/`.',
        incorrectFeedback: '`sys.path` es la lista de directorios de búsqueda de módulos. Python los recorre en orden al hacer `import`; el primero que coincida gana.',
      },
      {
        question: '¿Qué convierte una carpeta en un paquete de Python?',
        options: [
          'Que la carpeta se llame igual que el módulo principal',
          'La presencia de un archivo `__init__.py` dentro de la carpeta',
          'Que la carpeta esté en el directorio de Python',
          'Registrarla manualmente con `sys.packages`',
        ],
        correctAnswer: 'La presencia de un archivo `__init__.py` dentro de la carpeta',
        correctFeedback: 'Exacto. Un `__init__.py` (puede estar vacío) le dice a Python "esta carpeta es un paquete". Desde Python 3.3 los "namespace packages" pueden funcionar sin él, pero `__init__.py` sigue siendo la forma estándar.',
        incorrectFeedback: 'La forma tradicional (y más clara) de convertir una carpeta en un paquete Python es añadirle un archivo `__init__.py`. Puede estar vacío o contener código de inicialización del paquete.',
      },
    ],
  },
  {
    slug: 'importar-modulos',
    title: 'Importar módulos',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 41,
    description: 'Domina las distintas formas de importar módulos y nombres específicos en Python.',
    explanation: `## Formas de importar

### 1. import módulo

La forma más simple. Importas el módulo y accedes a su contenido con el punto:

\`\`\`python
import math

print(math.pi)          # 3.141592653589793
print(math.sqrt(16))    # 4.0
print(math.floor(3.7))  # 3
\`\`\`

### 2. import módulo as alias

Útil cuando el nombre del módulo es largo o hay conflictos:

\`\`\`python
import datetime as dt
import collections as col

hoy = dt.date.today()
contador = col.Counter([1, 1, 2, 3, 1])
print(contador)  # Counter({1: 3, 2: 1, 3: 1})
\`\`\`

### 3. from módulo import nombre

Importa solo lo que necesitas, sin el prefijo del módulo:

\`\`\`python
from math import pi, sqrt, floor

print(pi)        # 3.141592653589793
print(sqrt(25))  # 5.0
print(floor(4.9)) # 4
\`\`\`

### 4. from módulo import nombre as alias

Importa con alias para evitar conflictos de nombres:

\`\`\`python
from datetime import datetime as DateTime
from os.path import join as path_join

ahora = DateTime.now()
ruta = path_join("carpeta", "archivo.txt")
\`\`\`

### 5. from módulo import * (¡usar con cuidado!)

Importa todo el contenido público del módulo. **No recomendado** en producción porque puede sobreescribir nombres:

\`\`\`python
from math import *   # importa todo: pi, sqrt, sin, cos, etc.
print(pi)            # funciona, pero...
# ¿de dónde viene pi? No es obvio sin ver el import
\`\`\`

## Importar submódulos

\`\`\`python
# os.path es un submódulo de os
import os.path
print(os.path.exists("/tmp"))

# O con from
from os import path
print(path.join("carpeta", "archivo.txt"))

from os.path import exists, join, dirname
\`\`\`

## Buenas prácticas de importación (PEP 8)

\`\`\`python
# Orden recomendado:
# 1. Módulos de la librería estándar
import os
import sys
from datetime import datetime

# 2. Módulos de terceros (instalados con pip)
# import requests
# import pandas as pd

# 3. Módulos propios
# import mi_modulo
# from mi_paquete import mi_funcion

# Reglas:
# - Un import por línea (no: import os, sys)
# - Imports al inicio del archivo
# - Evitar 'from modulo import *'
\`\`\``,
    codeExample: `# Demostración de las formas de importar

# 1. import básico
import math
import random

print("=== import math ===")
print(f"pi = {math.pi:.4f}")
print(f"sqrt(2) = {math.sqrt(2):.4f}")
print(f"ceil(3.2) = {math.ceil(3.2)}")
print(f"log10(1000) = {math.log10(1000):.0f}")

# 2. import con alias
import datetime as dt

print("\n=== import datetime as dt ===")
hoy = dt.date.today()
ahora = dt.datetime.now()
print(f"Hoy: {hoy}")
print(f"Ahora: {ahora.strftime('%H:%M:%S')}")

# 3. from ... import
from math import pi, e, factorial, gcd

print("\n=== from math import ... ===")
print(f"pi = {pi:.6f}")
print(f"e = {e:.6f}")
print(f"10! = {factorial(10)}")
print(f"gcd(48, 18) = {gcd(48, 18)}")

# 4. from ... import ... as alias
from datetime import datetime as DateTime
from random import choice as elegir, shuffle as mezclar

print("\n=== import con alias ===")
print(f"DateTime.now(): {DateTime.now().strftime('%Y-%m-%d')}")

frutas = ["manzana", "pera", "naranja", "uva"]
print(f"Lista original: {frutas}")
mezclar(frutas)
print(f"Lista mezclada: {frutas}")
print(f"Fruta aleatoria: {elegir(frutas)}")

# 5. Importar submódulos
from os import path
from os.path import join, dirname, basename, splitext

print("\n=== os.path ===")
ruta = "/home/usuario/documentos/archivo.txt"
print(f"Ruta: {ruta}")
print(f"dirname: {dirname(ruta)}")
print(f"basename: {basename(ruta)}")
nombre, extension = splitext(basename(ruta))
print(f"Nombre: {nombre}, Extensión: {extension}")`,
    keyPoints: [
      '`import modulo` importa el módulo completo; accedes con `modulo.nombre`.',
      '`from modulo import nombre` importa solo lo necesario, sin prefijo.',
      '`import modulo as alias` y `from modulo import nombre as alias` crean alias para nombres largos.',
      'Evita `from modulo import *` en producción: puede sobreescribir nombres sin que lo notes.',
      'PEP 8: un import por línea, primero estándar, luego terceros, luego propios.',
    ],
    exercise: {
      description: 'Importa `statistics` y usa `mean`, `median`, `stdev` sobre la lista `[10, 20, 15, 30, 25, 18, 22]`. Importa `random` y usa `randint` para generar 5 números entre 1 y 100, luego calcula su media. Muestra todos los resultados.',
      hint: 'Usa `from statistics import mean, median, stdev`. Para los números aleatorios: `[random.randint(1, 100) for _ in range(5)]`. La función `mean()` acepta una lista directamente.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre `import math` y `from math import sqrt`?',
        options: [
          'No hay diferencia, son equivalentes',
          '`import math` carga todo el módulo y requiere `math.sqrt()`; `from math import sqrt` permite usar `sqrt()` directamente',
          '`from math import sqrt` es más lento porque carga más código',
          '`import math` no funciona en Python 3',
        ],
        correctAnswer: '`import math` carga todo el módulo y requiere `math.sqrt()`; `from math import sqrt` permite usar `sqrt()` directamente',
        correctFeedback: 'Correcto. Con `import math` accedes con el prefijo `math.sqrt()`. Con `from math import sqrt` puedes llamar a `sqrt()` directamente, sin prefijo.',
        incorrectFeedback: 'La diferencia es de acceso: `import math` requiere el prefijo `math.sqrt()`. `from math import sqrt` trae `sqrt` directamente al espacio de nombres local.',
      },
      {
        question: '¿Por qué se desaconseja `from modulo import *`?',
        options: [
          'Es más lento que otras formas de importar',
          'Solo funciona con módulos de la librería estándar',
          'Puede sobreescribir silenciosamente variables locales con el mismo nombre',
          'Python lo deprecó en la versión 3.8',
        ],
        correctAnswer: 'Puede sobreescribir silenciosamente variables locales con el mismo nombre',
        correctFeedback: 'Exacto. Si dos módulos definen una función `open`, la segunda importación `*` sobreescribirá la primera sin advertencia. Dificulta saber de dónde viene cada nombre.',
        incorrectFeedback: 'El problema de `import *` es que importa nombres que no conoces de antemano, y alguno puede colisionar con una variable o función que ya tenías en tu espacio de nombres.',
      },
      {
        question: '¿Cuál es el orden recomendado por PEP 8 para los imports?',
        options: [
          'Módulos propios → terceros → estándar',
          'Estándar → terceros → módulos propios',
          'Terceros → estándar → módulos propios',
          'Orden alfabético sin importar el tipo',
        ],
        correctAnswer: 'Estándar → terceros → módulos propios',
        correctFeedback: 'Correcto. PEP 8 recomienda: primero la librería estándar (os, sys, math...), luego terceros (requests, pandas...) y finalmente los módulos del proyecto.',
        incorrectFeedback: 'PEP 8 establece: 1) librería estándar, 2) librerías de terceros (pip), 3) módulos propios del proyecto. Cada grupo separado por una línea en blanco.',
      },
      {
        question: '¿Qué hace `import datetime as dt`?',
        options: [
          'Importa solo la clase `dt` del módulo `datetime`',
          'Importa el módulo `datetime` y crea el alias `dt` para referenciarlo',
          'Renombra el módulo `datetime` a `dt` permanentemente',
          'Importa `datetime` dos veces bajo dos nombres distintos',
        ],
        correctAnswer: 'Importa el módulo `datetime` y crea el alias `dt` para referenciarlo',
        correctFeedback: 'Exacto. El alias `dt` es local a tu archivo. Otros archivos que importen `datetime` no son afectados. Se usa para abreviar nombres largos como `numpy as np`, `pandas as pd`.',
        incorrectFeedback: '`import modulo as alias` importa el módulo completo pero lo vincula al nombre corto `alias` en tu archivo. Útil para módulos con nombres largos o para evitar conflictos.',
      },
      {
        question: 'Para acceder a `os.path.join()`, ¿cuál forma es más precisa?',
        options: [
          '`import os` y luego `os.path.join()`',
          '`from os.path import join` y luego `join()`',
          'Ambas son correctas y equivalentes en resultado',
          'Solo `import os.path` funciona para subm módulos',
        ],
        correctAnswer: 'Ambas son correctas y equivalentes en resultado',
        correctFeedback: 'Correcto. El resultado final es el mismo. La elección depende del contexto: `from os.path import join` es más cómodo si usas `join` mucho; `import os` es mejor si usas muchas funciones de `os`.',
        incorrectFeedback: 'Las tres formas (`import os`, `import os.path`, `from os.path import join`) permiten usar `os.path.join()` o `join()`. La elección es de estilo según cuántas funciones de `os` uses.',
      },
    ],
  },
  {
    slug: 'librerias-estandar',
    title: 'Librerías estándar de Python',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 42,
    description: 'Explora las librerías estándar más útiles: math, random, datetime, os, json, collections y más.',
    explanation: `## La librería estándar de Python

Python incluye más de 200 módulos en su **librería estándar** — código listo para usar sin instalar nada. Es tan rica que existe el dicho: "batteries included" (baterías incluidas).

## Módulos imprescindibles

### math — matemáticas
\`\`\`python
import math
math.pi          # 3.14159...
math.e           # 2.71828...
math.sqrt(16)    # 4.0
math.floor(3.7)  # 3
math.ceil(3.2)   # 4
math.factorial(5) # 120
math.log(100, 10) # 2.0
math.sin(math.pi/2) # 1.0
\`\`\`

### random — números aleatorios
\`\`\`python
import random
random.random()          # float entre 0.0 y 1.0
random.randint(1, 10)    # entero entre 1 y 10 (inclusivo)
random.choice([1,2,3])   # elige un elemento aleatorio
random.sample([1,2,3,4,5], 3)  # 3 elementos sin repetición
random.shuffle(lista)    # mezcla la lista en su lugar
random.seed(42)          # hace los resultados reproducibles
\`\`\`

### datetime — fechas y horas
\`\`\`python
from datetime import datetime, date, timedelta

hoy = date.today()               # 2024-01-15
ahora = datetime.now()           # 2024-01-15 14:30:00
ayer = hoy - timedelta(days=1)   # 2024-01-14

# Formatear
ahora.strftime("%d/%m/%Y %H:%M") # "15/01/2024 14:30"

# Parsear
dt = datetime.strptime("2024-01-15", "%Y-%m-%d")
\`\`\`

### os — sistema operativo
\`\`\`python
import os
os.getcwd()              # directorio actual
os.listdir(".")          # listar archivos
os.path.exists("ruta")   # ¿existe el archivo?
os.path.join("dir", "file.txt")  # unir rutas de forma segura
os.environ.get("PATH")   # variables de entorno
os.makedirs("dir/subdir", exist_ok=True)  # crear directorios
\`\`\`

### collections — contenedores avanzados
\`\`\`python
from collections import Counter, defaultdict, deque, namedtuple

# Counter: contar elementos
c = Counter("mississippi")
c.most_common(2)  # [('s', 4), ('i', 4)]

# defaultdict: dict con valor por defecto
d = defaultdict(list)
d["clave"].append(1)  # no lanza KeyError

# namedtuple: tupla con nombres de campo
Punto = namedtuple("Punto", ["x", "y"])
p = Punto(3, 4)
print(p.x, p.y)   # 3 4
\`\`\`

### string — manipulación de strings
\`\`\`python
import string
string.ascii_letters   # abcdefghijklmnopqrstuvwxyzABC...
string.digits          # 0123456789
string.punctuation     # !"#$%&'()*+,...
\`\`\``,
    codeExample: `from datetime import datetime, date, timedelta
from collections import Counter, defaultdict, namedtuple
import random
import math
import string

# === math ===
print("=== math ===")
angulos = [0, 30, 45, 60, 90]
for grados in angulos:
    rad = math.radians(grados)
    print(f"sin({grados}°) = {math.sin(rad):.3f}")

# === random ===
print("\n=== random ===")
random.seed(42)
print(f"random(): {random.random():.4f}")
print(f"randint(1,100): {random.randint(1, 100)}")
mazo = list(range(1, 14))
random.shuffle(mazo)
mano = mazo[:5]
print(f"Mano de cartas: {mano}")

# === datetime ===
print("\n=== datetime ===")
hoy = date.today()
nacimiento = date(1995, 6, 15)
edad_dias = (hoy - nacimiento).days
print(f"Hoy: {hoy.strftime('%d de %B de %Y')}")
print(f"Días desde 1995-06-15: {edad_dias:,}")

proxima_semana = hoy + timedelta(weeks=1)
print(f"Próxima semana: {proxima_semana}")

# === collections.Counter ===
print("\n=== Counter ===")
texto = "programacion en python es divertida y python es genial"
palabras = texto.split()
conteo = Counter(palabras)
print(f"Palabras más comunes: {conteo.most_common(3)}")

# === collections.defaultdict ===
print("\n=== defaultdict ===")
estudiantes_por_modulo = defaultdict(list)
datos = [("Módulo 1", "Ana"), ("Módulo 1", "Luis"), ("Módulo 2", "Ana"), ("Módulo 2", "Sofía")]
for modulo, nombre in datos:
    estudiantes_por_modulo[modulo].append(nombre)

for modulo, nombres in estudiantes_por_modulo.items():
    print(f"  {modulo}: {nombres}")

# === namedtuple ===
print("\n=== namedtuple ===")
Punto3D = namedtuple("Punto3D", ["x", "y", "z"])
origen = Punto3D(0, 0, 0)
punto = Punto3D(3, 4, 0)
distancia = math.sqrt((punto.x - origen.x)**2 + (punto.y - origen.y)**2)
print(f"Distancia {origen} → {punto}: {distancia:.2f}")

# === string para generar contraseña ===
print("\n=== string (contraseña) ===")
caracteres = string.ascii_letters + string.digits + string.punctuation
contrasena = ''.join(random.choices(caracteres, k=12))
print(f"Contraseña aleatoria: {contrasena}")`,
    keyPoints: [
      'Python incluye más de 200 módulos en su librería estándar, listos para usar sin instalación.',
      '`math` tiene constantes (pi, e) y funciones matemáticas (sqrt, sin, cos, log, factorial).',
      '`random` genera números aleatorios, elige elementos y mezcla listas.',
      '`datetime` maneja fechas, horas, diferencias de tiempo y formateo.',
      '`collections` ofrece `Counter`, `defaultdict`, `deque` y `namedtuple` para casos avanzados.',
    ],
    exercise: {
      description: 'Crea un programa que: (1) genere 10 números aleatorios entre 1 y 50 usando `random`, (2) calcule media y desviación estándar usando `statistics`, (3) muestre cuántos son pares y cuántos impares usando `Counter({\'par\': n, \'impar\': m})`, (4) muestre la fecha y hora actual formateada.',
      hint: 'Usa `random.randint` en una list comprehension. Importa `mean, stdev` de `statistics`. Para par/impar: `Counter("par" if n % 2 == 0 else "impar" for n in numeros)`. Para la fecha: `datetime.now().strftime("%d/%m/%Y %H:%M")`.',
    },
    quiz: [
      {
        question: '¿Qué significa que Python tenga "batteries included"?',
        options: [
          'Python requiere instalar una librería adicional para funciones matemáticas',
          'Python incluye una amplia librería estándar lista para usar sin instalar nada adicional',
          'Python es más lento porque carga todos los módulos al inicio',
          'Todas las funciones de Python están en un único módulo',
        ],
        correctAnswer: 'Python incluye una amplia librería estándar lista para usar sin instalar nada adicional',
        correctFeedback: 'Exacto. "Batteries included" significa que Python viene con herramientas para casi cualquier tarea (archivos, red, fechas, JSON, compresión) sin necesidad de instalar nada extra.',
        incorrectFeedback: '"Batteries included" es el lema que describe la rica librería estándar de Python. Cubre un rango enorme de tareas sin necesidad de pip.',
      },
      {
        question: '¿Qué devuelve `random.choice(["a", "b", "c"])`?',
        options: [
          'Siempre "a" (el primero)',
          'Una lista con los tres elementos en orden aleatorio',
          'Un elemento aleatorio de la lista',
          'El índice aleatorio de un elemento',
        ],
        correctAnswer: 'Un elemento aleatorio de la lista',
        correctFeedback: 'Correcto. `random.choice(secuencia)` devuelve un único elemento elegido al azar de la secuencia.',
        incorrectFeedback: '`random.choice` devuelve un elemento (no un índice ni una lista). Para elegir varios sin repetición usarías `random.sample`; para mezclar la lista, `random.shuffle`.',
      },
      {
        question: '¿Para qué sirve `timedelta` del módulo `datetime`?',
        options: [
          'Para formatear fechas como strings',
          'Para representar una duración o diferencia de tiempo',
          'Para obtener la fecha actual del sistema',
          'Para convertir entre zonas horarias',
        ],
        correctAnswer: 'Para representar una duración o diferencia de tiempo',
        correctFeedback: '¡Bien! `timedelta` representa una duración: días, segundos, microsegundos. Puedes sumar o restar timedeltas a fechas: `date.today() + timedelta(days=7)`.',
        incorrectFeedback: '`timedelta` representa una diferencia de tiempo (duración). Permite hacer aritmética con fechas: "¿qué fecha es dentro de 30 días?" o "¿cuántos días entre dos fechas?".',
      },
      {
        question: '¿Qué hace `Counter("mississippi")`?',
        options: [
          'Devuelve la longitud del string',
          'Cuenta cuántas veces aparece cada carácter y devuelve un diccionario especial',
          'Verifica si "mississippi" es un palíndromo',
          'Ordena los caracteres alfabéticamente',
        ],
        correctAnswer: 'Cuenta cuántas veces aparece cada carácter y devuelve un diccionario especial',
        correctFeedback: 'Correcto. `Counter` es un diccionario especializado en contar. `Counter("mississippi")` devuelve algo como `Counter({\'s\': 4, \'i\': 4, \'p\': 2, \'m\': 1})`.',
        incorrectFeedback: '`Counter` cuenta la frecuencia de cada elemento. Con un string, cuenta caracteres. Con una lista, cuenta elementos. El resultado soporta `.most_common(n)` para los más frecuentes.',
      },
      {
        question: '¿Cuál es la diferencia entre `random.sample` y `random.choices`?',
        options: [
          'No hay diferencia, son equivalentes',
          '`sample` elige sin repetición; `choices` puede elegir el mismo elemento más de una vez',
          '`choices` solo funciona con listas de strings',
          '`sample` devuelve un solo elemento; `choices` devuelve una lista',
        ],
        correctAnswer: '`sample` elige sin repetición; `choices` puede elegir el mismo elemento más de una vez',
        correctFeedback: 'Exacto. `random.sample(pop, k)` elige k elementos únicos (sin repetición). `random.choices(pop, k=k)` puede repetir elementos, como sacar cartas con reemplazo.',
        incorrectFeedback: 'La diferencia clave: `sample` es sin reemplazo (sin repetición, como una rifa). `choices` es con reemplazo (puede repetir, como tirar un dado varias veces).',
      },
    ],
  },
  {
    slug: 'crear-modulos',
    title: 'Crear tus propios módulos',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 43,
    description: 'Aprende a crear, organizar y exportar tus propios módulos y paquetes en Python.',
    explanation: `## Crear un módulo propio

Crear un módulo es tan simple como crear un archivo \`.py\`. Por ejemplo, \`matematicas.py\`:

\`\`\`python
# matematicas.py
PI = 3.14159265

def area_circulo(radio):
    return PI * radio ** 2

def perimetro_circulo(radio):
    return 2 * PI * radio

def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
\`\`\`

Luego en otro archivo:

\`\`\`python
# main.py
import matematicas

print(matematicas.PI)
print(matematicas.area_circulo(5))
print(matematicas.es_primo(17))
\`\`\`

## Controlar qué se exporta con __all__

\`__all__\` es una lista de nombres que se exportan con \`from modulo import *\`:

\`\`\`python
# matematicas.py
__all__ = ["area_circulo", "perimetro_circulo", "es_primo"]
# PI no está en __all__: no se exporta con import *

PI = 3.14159265
_precision = 6  # privado por convención
\`\`\`

## Crear un paquete

Un paquete es una carpeta con un \`__init__.py\`:

\`\`\`
mi_proyecto/
  main.py
  geometria/
    __init__.py         ← hace que geometria sea un paquete
    circulos.py
    rectangulos.py
    triangulos.py
\`\`\`

\`\`\`python
# geometria/__init__.py
from .circulos import area_circulo, perimetro_circulo
from .rectangulos import area_rectangulo
# Ahora: from geometria import area_circulo  ← funciona directamente
\`\`\`

## Importaciones relativas

Dentro de un paquete, puedes usar importaciones relativas con \`.\`:

\`\`\`python
# geometria/triangulos.py
from .circulos import PI   # importa PI del mismo paquete
from ..utilidades import log  # sube un nivel (.. = carpeta padre)
\`\`\`

## Documentar tu módulo

Un buen módulo tiene docstrings:

\`\`\`python
"""
Módulo matematicas
==================
Funciones matemáticas de geometría básica.

Uso:
    import matematicas
    print(matematicas.area_circulo(5))
"""

def area_circulo(radio):
    """
    Calcula el área de un círculo.

    Args:
        radio (float): El radio del círculo.

    Returns:
        float: El área calculada.
    """
    return PI * radio ** 2
\`\`\`

Accedes al docstring con:
\`\`\`python
import matematicas
help(matematicas)
print(matematicas.area_circulo.__doc__)
\`\`\``,
    codeExample: `# Simulación de un módulo propio: todo en un archivo para el ejemplo

# ============================================================
# Contenido de: validaciones.py (módulo que "importaríamos")
# ============================================================

__all__ = ["validar_email", "validar_telefono", "validar_contrasena"]

import re

def validar_email(email):
    """Valida que un email tenga formato correcto."""
    patron = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(patron, email))

def validar_telefono(telefono):
    """Valida un teléfono de 10 dígitos (solo números)."""
    digitos = re.sub(r'[\s\-\(\)]', '', telefono)
    return digitos.isdigit() and len(digitos) == 10

def validar_contrasena(contrasena):
    """
    Valida que la contraseña cumpla los requisitos.

    Requisitos:
        - Mínimo 8 caracteres
        - Al menos una mayúscula
        - Al menos un dígito
        - Al menos un carácter especial

    Returns:
        tuple: (es_valida: bool, errores: list)
    """
    errores = []
    if len(contrasena) < 8:
        errores.append("Debe tener al menos 8 caracteres")
    if not re.search(r'[A-Z]', contrasena):
        errores.append("Debe contener al menos una mayúscula")
    if not re.search(r'\d', contrasena):
        errores.append("Debe contener al menos un número")
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', contrasena):
        errores.append("Debe contener al menos un carácter especial")
    return len(errores) == 0, errores

def _limpiar_string(s):
    """Función interna (no en __all__)."""
    return s.strip().lower()


# ============================================================
# Contenido de: main.py (usa el módulo)
# ============================================================

# En un proyecto real sería: import validaciones
# Aquí usamos las funciones directamente

print("=== Módulo de Validaciones ===")
print(f"Funciones públicas: {__all__}\n")

# Probar emails
emails = ["usuario@email.com", "malo@", "otro.mail@dominio.org", "sindominio@.com"]
print("Validación de emails:")
for email in emails:
    estado = "✓" if validar_email(email) else "✗"
    print(f"  {estado} {email}")

# Probar teléfonos
telefonos = ["5512345678", "55 1234 5678", "551234", "(55)12345678"]
print("\nValidación de teléfonos:")
for tel in telefonos:
    estado = "✓" if validar_telefono(tel) else "✗"
    print(f"  {estado} {tel}")

# Probar contraseñas
print("\nValidación de contraseñas:")
contrasenas = ["abc", "password", "Password1", "S3gura!Contrasena"]
for pwd in contrasenas:
    es_valida, errores = validar_contrasena(pwd)
    estado = "✓ Válida" if es_valida else f"✗ {errores[0]}"
    print(f"  '{pwd}': {estado}")`,
    keyPoints: [
      'Un módulo propio es simplemente un archivo `.py` con funciones, clases y variables.',
      '`__all__` define qué nombres se exportan con `from modulo import *`.',
      'Un paquete es una carpeta con `__init__.py`; el `__init__.py` puede re-exportar para simplificar imports.',
      'Las importaciones relativas (`.`, `..`) funcionan dentro de paquetes.',
      'Los docstrings documentan módulos y funciones; `help(modulo)` los muestra.',
    ],
    exercise: {
      description: 'Crea las funciones de un módulo `conversor.py` en un solo archivo: `celsius_a_fahrenheit(c)`, `fahrenheit_a_celsius(f)`, `km_a_millas(km)`, `millas_a_km(m)`. Añade `__all__` con las 4 funciones y docstrings a cada una. Prueba las 4 funciones con valores de ejemplo.',
      hint: '°F = °C × 9/5 + 32. 1 km = 0.621371 millas. Define `__all__ = ["celsius_a_fahrenheit", ...]` antes de las funciones. Cada función debe tener una línea de docstring: `"""Convierte Celsius a Fahrenheit."""`',
    },
    quiz: [
      {
        question: '¿Qué hace `__all__` en un módulo?',
        options: [
          'Lista todos los atributos del módulo, incluyendo los privados',
          'Define los nombres que se exportan cuando alguien hace `from modulo import *`',
          'Impide que el módulo sea importado por otros archivos',
          'Establece el orden en que se definen las funciones',
        ],
        correctAnswer: 'Define los nombres que se exportan cuando alguien hace `from modulo import *`',
        correctFeedback: 'Correcto. `__all__` es una lista de strings. Si no está definido, `from modulo import *` exporta todo lo que no empiece por guion bajo.',
        incorrectFeedback: '`__all__` controla qué se incluye al hacer `from modulo import *`. Los nombres fuera de `__all__` siguen siendo accesibles directamente (`modulo.nombre`), pero no se exportan con `*`.',
      },
      {
        question: '¿Qué es una importación relativa como `from .utils import helper`?',
        options: [
          'Importa `helper` desde la raíz del proyecto',
          'Importa `helper` del módulo `utils` que está en el mismo paquete (misma carpeta)',
          'Importa una versión anterior del módulo `utils`',
          'Es una forma de importar con alias',
        ],
        correctAnswer: 'Importa `helper` del módulo `utils` que está en el mismo paquete (misma carpeta)',
        correctFeedback: '¡Exacto! El punto `.` significa "este paquete" (la misma carpeta). `..` sería el paquete padre. Las importaciones relativas solo funcionan dentro de paquetes.',
        incorrectFeedback: 'En importaciones relativas, `.` es el paquete actual (misma carpeta) y `..` es el paquete padre. `from .utils import helper` busca `utils.py` en la misma carpeta.',
      },
      {
        question: 'Si tienes una función `_limpiar(s)` en tu módulo, ¿qué indica el guion bajo inicial?',
        options: [
          'Que la función es más lenta que las normales',
          'Que es una función privada o interna del módulo, por convención no se usa desde fuera',
          'Que la función acepta cualquier tipo de argumento',
          'Que la función fue deprecada',
        ],
        correctAnswer: 'Que es una función privada o interna del módulo, por convención no se usa desde fuera',
        correctFeedback: 'Correcto. El guion bajo es una convención: "esta función es un detalle de implementación, no parte de la API pública del módulo". También queda excluida de `import *`.',
        incorrectFeedback: 'El guion bajo inicial es solo una convención. Indica que es un detalle interno. Python no impide llamarla desde fuera, pero es una señal para otros desarrolladores de que no deberían hacerlo.',
      },
      {
        question: '¿Para qué sirve el archivo `__init__.py` en una carpeta de paquete?',
        options: [
          'Para instalar automáticamente las dependencias del paquete',
          'Para ejecutar el paquete como script con `python -m paquete`',
          'Para marcar la carpeta como paquete Python y opcionalmente re-exportar nombres',
          'Para documentar qué versión de Python se requiere',
        ],
        correctAnswer: 'Para marcar la carpeta como paquete Python y opcionalmente re-exportar nombres',
        correctFeedback: 'Exacto. `__init__.py` convierte la carpeta en paquete importable. Puede estar vacío o contener imports para simplificar el acceso: `from .modulo import ClasePrincipal`.',
        incorrectFeedback: '`__init__.py` le dice a Python que la carpeta es un paquete. Además, su contenido se ejecuta al importar el paquete, por lo que es ideal para re-exportar los nombres más importantes.',
      },
      {
        question: '¿Cómo accedes al docstring de una función `mi_func` en el módulo `mi_mod`?',
        options: [
          '`mi_mod.mi_func.docstring`',
          '`mi_mod.mi_func.__doc__`',
          '`help.get(mi_mod.mi_func)`',
          '`print(mi_mod.mi_func.doc())`',
        ],
        correctAnswer: '`mi_mod.mi_func.__doc__`',
        correctFeedback: 'Correcto. El docstring se almacena en el atributo especial `__doc__`. También puedes usar `help(mi_mod.mi_func)` para verlo formateado.',
        incorrectFeedback: 'Los docstrings se almacenan en el atributo `__doc__` de la función, clase o módulo. `mi_func.__doc__` devuelve el string; `help(mi_func)` lo formatea y muestra.',
      },
    ],
  },
  {
    slug: 'instalar-paquetes-pip',
    title: 'Instalar paquetes con pip',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 44,
    description: 'Aprende a usar pip para instalar, actualizar y gestionar paquetes de terceros de PyPI.',
    explanation: `## ¿Qué es pip?

**pip** es el gestor de paquetes oficial de Python. Permite instalar paquetes desde **PyPI** (Python Package Index), el repositorio central con más de 400,000 paquetes.

## Comandos esenciales de pip

\`\`\`bash
# Instalar un paquete
pip install requests

# Instalar una versión específica
pip install requests==2.28.0

# Instalar una versión mínima
pip install requests>=2.0.0

# Actualizar un paquete
pip install --upgrade requests

# Desinstalar
pip uninstall requests

# Ver paquetes instalados
pip list

# Ver información de un paquete
pip show requests

# Buscar paquetes (deprecado en versiones nuevas, usa pypi.org)
pip search requests
\`\`\`

## requirements.txt

El estándar para compartir dependencias de un proyecto:

\`\`\`
# requirements.txt
requests==2.28.2
flask>=2.3.0
python-dotenv==1.0.0
\`\`\`

\`\`\`bash
# Instalar todas las dependencias del archivo
pip install -r requirements.txt

# Guardar las dependencias actuales en un archivo
pip freeze > requirements.txt
\`\`\`

## Paquetes populares por categoría

| Categoría | Paquete | Uso |
|-----------|---------|-----|
| HTTP | \`requests\` | Hacer peticiones web |
| Web | \`flask\`, \`fastapi\` | Crear APIs y web apps |
| Datos | \`pandas\` | Análisis de datos |
| Ciencia | \`numpy\` | Cálculo numérico |
| ML | \`scikit-learn\` | Machine learning |
| Visualización | \`matplotlib\` | Gráficas |
| BD | \`sqlalchemy\` | ORM para bases de datos |
| Tests | \`pytest\` | Testing |
| Variables | \`python-dotenv\` | Cargar .env |

## pip en Python 3

En algunos sistemas:

\`\`\`bash
pip3 install requests    # específicamente Python 3
python -m pip install requests  # forma más segura
python3 -m pip install requests
\`\`\`

## Ver dónde se instalan los paquetes

\`\`\`bash
pip show requests
# Muestra: Location: /usr/local/lib/python3.11/site-packages
\`\`\`

## Seguridad: instalar solo paquetes de confianza

- Usa siempre **PyPI** (pypi.org)
- Verifica el nombre exacto del paquete (cuidado con typosquatting)
- Revisa la popularidad y actividad del paquete
- Prefiere paquetes con muchos downloads y mantenimiento activo`,
    codeExample: `# Este ejemplo muestra cómo usar paquetes de terceros UNA VEZ instalados.
# En un proyecto real primero ejecutarías: pip install requests
# Para este ejemplo, usamos solo la librería estándar para simular.

import urllib.request
import urllib.parse
import json

# Simulamos lo que haría 'requests' (pip install requests)
# Con requests sería simplemente:
#   import requests
#   r = requests.get("https://api.example.com/data")
#   datos = r.json()

def get_simple(url):
    """Versión simplificada de requests.get() usando solo stdlib."""
    try:
        with urllib.request.urlopen(url, timeout=5) as resp:
            return {
                "status_code": resp.status,
                "text": resp.read().decode("utf-8"),
                "headers": dict(resp.headers),
            }
    except Exception as e:
        return {"error": str(e)}


# Demostrar gestión de dependencias con requirements.txt
REQUIREMENTS_EJEMPLO = """
# requirements.txt de un proyecto típico
requests==2.31.0
python-dotenv==1.0.0
pytest>=7.0.0
"""

print("=== Ejemplo de requirements.txt ===")
print(REQUIREMENTS_EJEMPLO)

# Parsear un requirements.txt básico
def parsear_requirements(texto):
    """Parsea un requirements.txt y devuelve lista de (paquete, versión)."""
    paquetes = []
    for linea in texto.strip().split('\n'):
        linea = linea.strip()
        if linea and not linea.startswith('#'):
            for sep in ['==', '>=', '<=', '>', '<']:
                if sep in linea:
                    nombre, version = linea.split(sep, 1)
                    paquetes.append({
                        "nombre": nombre.strip(),
                        "operador": sep,
                        "version": version.strip()
                    })
                    break
            else:
                paquetes.append({"nombre": linea, "operador": None, "version": None})
    return paquetes

paquetes = parsear_requirements(REQUIREMENTS_EJEMPLO)
print("Paquetes requeridos:")
for p in paquetes:
    if p["operador"]:
        print(f"  📦 {p['nombre']} {p['operador']} {p['version']}")
    else:
        print(f"  📦 {p['nombre']} (cualquier versión)")

# Mostrar comandos pip útiles
print("\n=== Comandos pip esenciales ===")
comandos = [
    ("Instalar", "pip install requests"),
    ("Instalar versión", "pip install requests==2.31.0"),
    ("Actualizar", "pip install --upgrade requests"),
    ("Desinstalar", "pip uninstall requests"),
    ("Listar", "pip list"),
    ("Info de paquete", "pip show requests"),
    ("Instalar desde archivo", "pip install -r requirements.txt"),
    ("Exportar dependencias", "pip freeze > requirements.txt"),
]
for accion, comando in comandos:
    print(f"  {accion:20s}: $ {comando}")`,
    keyPoints: [
      '`pip install paquete` instala desde PyPI; `pip install -r requirements.txt` instala las dependencias del proyecto.',
      '`pip freeze > requirements.txt` guarda las versiones exactas de todos los paquetes instalados.',
      '`pip list` muestra los paquetes instalados; `pip show paquete` da información detallada.',
      'Especifica versiones (`==`, `>=`) en `requirements.txt` para reproducibilidad.',
      'Verifica siempre el nombre exacto del paquete en pypi.org antes de instalar.',
    ],
    exercise: {
      description: 'Crea un archivo `requirements.txt` ficticio con al menos 4 paquetes con diferentes operadores de versión (==, >=, ~=). Luego escribe un script Python que lea el archivo, parsee cada línea y muestre un reporte con el nombre y versión requerida de cada paquete (ignorando líneas en blanco y comentarios).',
      hint: 'Lee el archivo con `open("requirements.txt")` y `readlines()`. Para cada línea, usa `.strip()` y comprueba si empieza con `#` o está vacía para ignorarla. Luego busca los operadores de versión para separar nombre de versión.',
    },
    quiz: [
      {
        question: '¿Qué hace `pip freeze > requirements.txt`?',
        options: [
          'Instala todos los paquetes listados en requirements.txt',
          'Guarda la lista de paquetes instalados con sus versiones exactas en requirements.txt',
          'Actualiza todos los paquetes a su versión más reciente',
          'Congela (impide actualizar) los paquetes instalados',
        ],
        correctAnswer: 'Guarda la lista de paquetes instalados con sus versiones exactas en requirements.txt',
        correctFeedback: 'Exacto. `pip freeze` lista todos los paquetes instalados en formato `paquete==version`. El `>` redirige esa salida al archivo requirements.txt.',
        incorrectFeedback: '`pip freeze` muestra todos los paquetes instalados con sus versiones exactas. El `>` redirige al archivo. El resultado es un `requirements.txt` que permite reproducir el entorno en otra máquina.',
      },
      {
        question: '¿Qué significa `requests>=2.0.0` en requirements.txt?',
        options: [
          'Instalar exactamente la versión 2.0.0',
          'Instalar cualquier versión de requests que sea 2.0.0 o superior',
          'Instalar la última versión de requests hasta la 2.0.0',
          'Instalar requests solo si la versión 2.0.0 está disponible',
        ],
        correctAnswer: 'Instalar cualquier versión de requests que sea 2.0.0 o superior',
        correctFeedback: 'Correcto. `>=` significa "igual o mayor". `==` es versión exacta. `~=` es compatible con (permite actualizaciones menores). `!=` excluye una versión.',
        incorrectFeedback: '`>=2.0.0` instala la versión más reciente que sea 2.0.0 o superior. Para una versión exacta usa `==2.0.0`. Para un rango: `>=2.0.0,<3.0.0`.',
      },
      {
        question: '¿Cuál es la forma más segura de instalar pip en tu Python?',
        options: [
          '`sudo pip install paquete`',
          '`python -m pip install paquete`',
          '`pip3 install paquete` siempre funciona igual',
          'Descargar el paquete manualmente de GitHub',
        ],
        correctAnswer: '`python -m pip install paquete`',
        correctFeedback: '¡Bien! `python -m pip` garantiza que pip usa el mismo Python que `python`. Evita confusiones cuando tienes múltiples versiones de Python instaladas.',
        incorrectFeedback: '`python -m pip install` es la forma más explícita: usa exactamente el pip asociado al Python que estás usando. Evita confusiones con múltiples instalaciones de Python.',
      },
      {
        question: '¿Qué riesgo existe al instalar paquetes con pip?',
        options: [
          'Ninguno, todos los paquetes en PyPI son seguros',
          'Pueden existir paquetes maliciosos con nombres similares a paquetes populares (typosquatting)',
          'pip solo puede instalar paquetes de pago',
          'Instalar paquetes puede borrar archivos del sistema',
        ],
        correctAnswer: 'Pueden existir paquetes maliciosos con nombres similares a paquetes populares (typosquatting)',
        correctFeedback: 'Correcto. El typosquatting es un riesgo real: `requsets` (con typo) podría ser un paquete malicioso. Siempre verifica el nombre exacto en pypi.org.',
        incorrectFeedback: 'El typosquatting (nombres similares a paquetes populares) es un riesgo de seguridad real en PyPI. Siempre verifica el nombre exacto del paquete, su popularidad y su mantenimiento en pypi.org.',
      },
      {
        question: '¿Para qué sirve `pip show requests`?',
        options: [
          'Para mostrar el código fuente del paquete requests',
          'Para ver información del paquete: versión, ubicación, dependencias',
          'Para mostrar la documentación completa del paquete',
          'Para listar todas las funciones disponibles en requests',
        ],
        correctAnswer: 'Para ver información del paquete: versión, ubicación, dependencias',
        correctFeedback: 'Exacto. `pip show` muestra nombre, versión, autor, licencia, ubicación de instalación y dependencias del paquete.',
        incorrectFeedback: '`pip show paquete` muestra metadatos: versión instalada, dónde está instalado, quién lo hizo, su licencia y de qué otros paquetes depende.',
      },
    ],
  },
  {
    slug: 'entornos-virtuales',
    title: 'Entornos virtuales',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 45,
    description: 'Aprende a crear y usar entornos virtuales para aislar las dependencias de cada proyecto.',
    explanation: `## ¿Por qué necesitas entornos virtuales?

Sin entornos virtuales, todos tus proyectos comparten los mismos paquetes instalados globalmente. Esto causa problemas:

- **Proyecto A** necesita \`requests==2.28.0\`
- **Proyecto B** necesita \`requests==2.20.0\`
- Si instalas uno, puede romper el otro

Un **entorno virtual** crea una instalación aislada de Python para cada proyecto.

## venv: el módulo estándar

\`\`\`bash
# Crear un entorno virtual en la carpeta "venv"
python -m venv venv

# Activar el entorno (Windows PowerShell)
venv\\Scripts\\Activate.ps1

# Activar el entorno (Windows CMD)
venv\\Scripts\\activate.bat

# Activar el entorno (Mac/Linux)
source venv/bin/activate

# Verificar que está activo (verás el nombre entre paréntesis)
# (venv) $ python --version

# Desactivar
deactivate
\`\`\`

## Flujo de trabajo completo

\`\`\`bash
# 1. Crear el entorno para tu proyecto
python -m venv venv

# 2. Activar
source venv/bin/activate    # Mac/Linux
venv\\Scripts\\activate     # Windows

# 3. Instalar dependencias
pip install requests flask

# 4. Guardar dependencias
pip freeze > requirements.txt

# 5. Trabajar en tu proyecto...

# 6. Cuando termines
deactivate
\`\`\`

## .gitignore y entornos virtuales

La carpeta \`venv/\` **nunca** se sube a git. En cambio, se comparte \`requirements.txt\`:

\`\`\`
# .gitignore
venv/
.venv/
__pycache__/
*.pyc
.env
\`\`\`

Otro desarrollador puede recrear el entorno:

\`\`\`bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
\`\`\`

## Estructura recomendada de un proyecto

\`\`\`
mi_proyecto/
  venv/               ← no se sube a git
  src/
    main.py
    utils.py
  tests/
    test_main.py
  requirements.txt    ← sí se sube a git
  .gitignore
  README.md
\`\`\`

## Alternativas a venv

| Herramienta | Ventajas |
|-------------|---------|
| \`venv\` | Incluido en Python, simple |
| \`virtualenv\` | Más rápido, compatible con Python 2 |
| \`conda\` | Popular en ciencia de datos, gestiona no-Python también |
| \`poetry\` | Gestión completa de dependencias y publicación |
| \`uv\` | Ultra rápido, nuevo y moderno |`,
    codeExample: `# Este script muestra cómo verificar si estás en un entorno virtual
# y gestiona información del entorno Python actual

import sys
import os
import subprocess

def esta_en_venv():
    """Detecta si se está ejecutando dentro de un entorno virtual."""
    # sys.prefix es distinto de sys.base_prefix en un venv
    return sys.prefix != sys.base_prefix

def info_entorno():
    """Recopila información del entorno Python actual."""
    return {
        "python_version": sys.version.split()[0],
        "executable": sys.executable,
        "prefix": sys.prefix,
        "en_venv": esta_en_venv(),
        "plataforma": sys.platform,
    }

def simular_workflow():
    """Simula el flujo de trabajo con entornos virtuales."""
    pasos = [
        ("Crear entorno", "python -m venv venv"),
        ("Activar (Linux/Mac)", "source venv/bin/activate"),
        ("Activar (Windows)", r"venv\\Scripts\\activate"),
        ("Instalar paquetes", "pip install requests flask"),
        ("Guardar deps", "pip freeze > requirements.txt"),
        ("Desactivar", "deactivate"),
    ]

    print("=== Flujo de trabajo con entornos virtuales ===\n")
    for i, (descripcion, comando) in enumerate(pasos, 1):
        print(f"  Paso {i}: {descripcion}")
        print(f"    $ {comando}\n")

# Mostrar información del entorno actual
info = info_entorno()
print("=== Información del entorno Python actual ===")
print(f"  Versión Python: {info['python_version']}")
print(f"  Ejecutable: {info['executable']}")
print(f"  Directorio prefix: {info['prefix']}")
print(f"  ¿En entorno virtual?: {'Sí ✓' if info['en_venv'] else 'No ✗'}")
print(f"  Plataforma: {info['plataforma']}")

if not info['en_venv']:
    print("\n  ⚠️  Recomendación: crea un entorno virtual para tu proyecto")
    print("      $ python -m venv venv")

print()
simular_workflow()

# Simular contenido de .gitignore recomendado
gitignore_contenido = """# Entorno virtual
venv/
.venv/
env/

# Python cache
__pycache__/
*.py[cod]
*.pyo

# Variables de entorno
.env
.env.local

# IDEs
.vscode/
.idea/
*.swp
"""

print("=== Contenido recomendado de .gitignore ===")
print(gitignore_contenido)`,
    keyPoints: [
      'Los entornos virtuales aíslan las dependencias de cada proyecto, evitando conflictos.',
      '`python -m venv venv` crea el entorno; `source venv/bin/activate` (o `venv\\Scripts\\activate` en Windows) lo activa.',
      'Nunca subas la carpeta `venv/` a git; sí sube `requirements.txt`.',
      'El flujo estándar: crear venv → activar → instalar deps → `pip freeze > requirements.txt` → desactivar.',
      'Puedes detectar si estás en un venv comparando `sys.prefix` con `sys.base_prefix`.',
    ],
    exercise: {
      description: 'Escribe un script que: (1) detecte si se está ejecutando dentro de un entorno virtual, (2) muestre la ruta del ejecutable Python con `sys.executable`, (3) cuente cuántos paquetes están instalados usando `importlib.metadata.packages_distributions()` o simplemente lista `sys.path`. Añade un mensaje de recomendación si no hay venv activo.',
      hint: 'Compara `sys.prefix != sys.base_prefix` para detectar el venv. `sys.executable` es la ruta del Python actual. Para contar paquetes puedes usar `importlib.metadata.packages_distributions()` si está disponible, o simplemente mostrar `len(sys.path)`.',
    },
    quiz: [
      {
        question: '¿Cuál es el problema que resuelven los entornos virtuales?',
        options: [
          'Que Python sea más rápido al ejecutar scripts',
          'Los conflictos de versiones cuando diferentes proyectos necesitan versiones distintas del mismo paquete',
          'Que el código funcione en diferentes sistemas operativos',
          'La falta de módulos en la librería estándar',
        ],
        correctAnswer: 'Los conflictos de versiones cuando diferentes proyectos necesitan versiones distintas del mismo paquete',
        correctFeedback: 'Exacto. Si el proyecto A necesita Django 3.2 y el proyecto B necesita Django 4.2, sin entornos virtuales no puedes tener ambos instalados a la vez.',
        incorrectFeedback: 'Los entornos virtuales resuelven el problema de "dependencias globales compartidas". Cada proyecto tiene su propia instalación de Python con sus propios paquetes y versiones.',
      },
      {
        question: '¿Qué comando crea un entorno virtual en la carpeta "env"?',
        options: [
          '`pip create env`',
          '`python -m venv env`',
          '`virtualenv create env`',
          '`python --venv env`',
        ],
        correctAnswer: '`python -m venv env`',
        correctFeedback: 'Correcto. `python -m venv nombre_carpeta` crea el entorno virtual. El nombre convencional es `venv` o `.venv`, pero puede ser cualquiera.',
        incorrectFeedback: 'El módulo `venv` viene incluido en Python 3. Se usa con `python -m venv nombre_carpeta`. Eso crea la estructura de archivos del entorno virtual en esa carpeta.',
      },
      {
        question: '¿Por qué no se sube la carpeta `venv/` a git?',
        options: [
          'Porque git no puede manejar archivos binarios',
          'Porque es demasiado grande, tiene rutas absolutas y puede recrearse desde requirements.txt',
          'Porque contiene contraseñas en texto plano',
          'Porque git lo ignora automáticamente',
        ],
        correctAnswer: 'Porque es demasiado grande, tiene rutas absolutas y puede recrearse desde requirements.txt',
        correctFeedback: '¡Bien! La carpeta venv/ puede pesar cientos de MB, contiene rutas absolutas de tu máquina (que no funcionan en otras) y es fácilmente recreable con `pip install -r requirements.txt`.',
        incorrectFeedback: 'Tres razones: (1) es grande, (2) tiene rutas absolutas de TU máquina que no funcionan en otros, (3) es redundante porque `requirements.txt` permite recrearla. En cambio, sí se comparte `requirements.txt`.',
      },
      {
        question: '¿Cómo saber si el entorno virtual está activo?',
        options: [
          'Con `pip status`',
          'Aparece el nombre del entorno entre paréntesis en el prompt, y `sys.prefix != sys.base_prefix`',
          'Ejecutando `python --check-venv`',
          'Solo se puede saber mirando la carpeta venv/',
        ],
        correctAnswer: 'Aparece el nombre del entorno entre paréntesis en el prompt, y `sys.prefix != sys.base_prefix`',
        correctFeedback: 'Correcto. El indicador visual es `(venv)` al inicio del prompt. En código Python puedes verificar `sys.prefix != sys.base_prefix`.',
        incorrectFeedback: 'Hay dos indicadores: en la terminal, el nombre del venv aparece entre paréntesis `(venv)`. En código Python: `sys.prefix != sys.base_prefix` devuelve `True` si hay un venv activo.',
      },
      {
        question: 'Un compañero quiere ejecutar tu proyecto. ¿Qué debe hacer después de clonar el repositorio?',
        options: [
          'Copiar tu carpeta venv/ directamente',
          'Instalar todos los paquetes que recuerde que usaste',
          'Crear su propio venv y ejecutar `pip install -r requirements.txt`',
          'Modificar su instalación global de Python',
        ],
        correctAnswer: 'Crear su propio venv y ejecutar `pip install -r requirements.txt`',
        correctFeedback: 'Exacto. El flujo estándar: clonar repo → `python -m venv venv` → activar venv → `pip install -r requirements.txt`. Así tiene exactamente las mismas versiones que tú.',
        incorrectFeedback: 'El `requirements.txt` existe para esto. Tu compañero: (1) crea su venv, (2) lo activa, (3) ejecuta `pip install -r requirements.txt`. Esto instala las mismas versiones que usaste tú.',
      },
    ],
  },
  {
    slug: 'generador-contrasenas',
    title: 'Proyecto: Generador de contraseñas',
    module: 'Módulos y librerías',
    moduleNumber: 10,
    order: 46,
    description: 'Proyecto final del curso: construye un generador de contraseñas seguro usando módulos estándar de Python.',
    explanation: `## Proyecto final: Generador de contraseñas

En esta lección construimos un **generador de contraseñas seguro** que integra los conceptos del módulo 10:

- **Módulos estándar**: \`random\`, \`string\`, \`secrets\`, \`re\`, \`argparse\`
- **Organización en módulos**: separación de responsabilidades
- **Validación**: verificar fortaleza de contraseñas
- **Interfaz de usuario**: menú interactivo

## El módulo secrets vs random

Para contraseñas, usa \`secrets\` en lugar de \`random\`:

\`\`\`python
import secrets
import random

# random: pseudoaleatorio (predecible si conoces la semilla)
random.choice("abc")  # ← NO usar para contraseñas

# secrets: criptográficamente seguro
secrets.choice("abc")  # ← usar para contraseñas
secrets.token_hex(16)  # "a3f8b2c1d4e5..."  (32 chars hex)
secrets.token_urlsafe(16)  # base64 URL-safe
\`\`\`

## El módulo argparse

Para programas de línea de comandos:

\`\`\`python
import argparse

parser = argparse.ArgumentParser(description='Generador de contraseñas')
parser.add_argument('--longitud', type=int, default=16, help='Longitud de la contraseña')
parser.add_argument('--mayusculas', action='store_true', help='Incluir mayúsculas')
parser.add_argument('--numeros', action='store_true', help='Incluir números')

args = parser.parse_args()
print(args.longitud)    # 16 (default)
print(args.mayusculas)  # True si se pasó --mayusculas
\`\`\`

## Evaluación de fortaleza

Una contraseña se evalúa por:

1. **Longitud**: mínimo 8, ideal 12+
2. **Variedad**: mayúsculas + minúsculas + números + símbolos
3. **Imprevisibilidad**: no ser una palabra conocida o patrón obvio

\`\`\`python
import re

def evaluar_fortaleza(contrasena):
    puntos = 0
    if len(contrasena) >= 8: puntos += 1
    if len(contrasena) >= 12: puntos += 1
    if re.search(r'[A-Z]', contrasena): puntos += 1
    if re.search(r'[a-z]', contrasena): puntos += 1
    if re.search(r'\\d', contrasena): puntos += 1
    if re.search(r'[!@#$%^&*]', contrasena): puntos += 1
    niveles = {0: "Muy débil", 1: "Débil", 2: "Regular",
               3: "Buena", 4: "Fuerte", 5: "Muy fuerte", 6: "Excelente"}
    return niveles.get(puntos, "Excelente"), puntos
\`\`\``,
    codeExample: `import secrets
import string
import re
from collections import Counter


# ============================================================
# Módulo: generador.py
# ============================================================

CONJUNTOS = {
    "minusculas": string.ascii_lowercase,
    "mayusculas": string.ascii_uppercase,
    "numeros": string.digits,
    "simbolos": "!@#$%^&*()_+-=[]{}|;:,.<>?",
}

def generar_contrasena(
    longitud=16,
    usar_minusculas=True,
    usar_mayusculas=True,
    usar_numeros=True,
    usar_simbolos=True,
    excluir_ambiguos=False,
):
    """Genera una contraseña criptográficamente segura."""
    if longitud < 4:
        raise ValueError("La longitud mínima es 4")

    # Construir conjunto de caracteres
    caracteres = ""
    obligatorios = []

    if usar_minusculas:
        pool = CONJUNTOS["minusculas"]
        caracteres += pool
        obligatorios.append(secrets.choice(pool))

    if usar_mayusculas:
        pool = CONJUNTOS["mayusculas"]
        caracteres += pool
        obligatorios.append(secrets.choice(pool))

    if usar_numeros:
        pool = CONJUNTOS["numeros"]
        caracteres += pool
        obligatorios.append(secrets.choice(pool))

    if usar_simbolos:
        pool = CONJUNTOS["simbolos"]
        caracteres += pool
        obligatorios.append(secrets.choice(pool))

    if not caracteres:
        raise ValueError("Debes seleccionar al menos un tipo de carácter")

    # Eliminar caracteres ambiguos: 0/O, 1/I/l
    if excluir_ambiguos:
        ambiguos = "0O1Il"
        caracteres = ''.join(c for c in caracteres if c not in ambiguos)

    # Generar el resto de caracteres
    resto = longitud - len(obligatorios)
    contrasena = obligatorios + [secrets.choice(caracteres) for _ in range(resto)]

    # Mezclar para que los obligatorios no sean siempre los primeros
    secrets.SystemRandom().shuffle(contrasena)
    return ''.join(contrasena)


def evaluar_fortaleza(contrasena):
    """Evalúa la fortaleza de una contraseña (0-6 puntos)."""
    puntos = 0
    detalles = []

    if len(contrasena) >= 8:
        puntos += 1
        detalles.append("✓ Al menos 8 caracteres")
    else:
        detalles.append("✗ Menos de 8 caracteres")

    if len(contrasena) >= 12:
        puntos += 1
        detalles.append("✓ Al menos 12 caracteres")

    if re.search(r'[A-Z]', contrasena):
        puntos += 1
        detalles.append("✓ Tiene mayúsculas")
    else:
        detalles.append("✗ Sin mayúsculas")

    if re.search(r'[a-z]', contrasena):
        puntos += 1
        detalles.append("✓ Tiene minúsculas")
    else:
        detalles.append("✗ Sin minúsculas")

    if re.search(r'\d', contrasena):
        puntos += 1
        detalles.append("✓ Tiene números")
    else:
        detalles.append("✗ Sin números")

    if re.search(r'[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]', contrasena):
        puntos += 1
        detalles.append("✓ Tiene símbolos")
    else:
        detalles.append("✗ Sin símbolos")

    niveles = {
        0: ("Muy débil", "🔴"),
        1: ("Débil", "🟠"),
        2: ("Regular", "🟡"),
        3: ("Buena", "🟢"),
        4: ("Fuerte", "💚"),
        5: ("Muy fuerte", "🔵"),
        6: ("Excelente", "⭐"),
    }
    nivel, emoji = niveles[puntos]
    return nivel, emoji, puntos, detalles


def analizar_entropia(contrasena):
    """Calcula la entropía aproximada en bits."""
    import math
    charset_size = 0
    if re.search(r'[a-z]', contrasena): charset_size += 26
    if re.search(r'[A-Z]', contrasena): charset_size += 26
    if re.search(r'\d', contrasena): charset_size += 10
    if re.search(r'[^a-zA-Z0-9]', contrasena): charset_size += 32
    if charset_size == 0:
        return 0
    return round(len(contrasena) * math.log2(charset_size), 1)


# ============================================================
# main.py: programa principal
# ============================================================

def mostrar_resultado(contrasena, titulo=""):
    nivel, emoji, puntos, detalles = evaluar_fortaleza(contrasena)
    entropia = analizar_entropia(contrasena)
    if titulo:
        print(f"\n{'='*50}")
        print(f"  {titulo}")
    print(f"{'='*50}")
    print(f"  Contraseña: {contrasena}")
    print(f"  Longitud  : {len(contrasena)} caracteres")
    print(f"  Fortaleza : {emoji} {nivel} ({puntos}/6 puntos)")
    print(f"  Entropía  : ~{entropia} bits")
    print("  Detalles  :")
    for d in detalles:
        print(f"    {d}")


print("╔══════════════════════════════════════════╗")
print("║    🔐 GENERADOR DE CONTRASEÑAS SEGURAS   ║")
print("╚══════════════════════════════════════════╝")

# Contraseña estándar
pwd1 = generar_contrasena(longitud=16)
mostrar_resultado(pwd1, "Contraseña estándar (16 chars)")

# Contraseña larga
pwd2 = generar_contrasena(longitud=24, excluir_ambiguos=True)
mostrar_resultado(pwd2, "Contraseña larga (24 chars, sin ambiguos)")

# Solo letras y números (para sistemas sin símbolos)
pwd3 = generar_contrasena(longitud=20, usar_simbolos=False)
mostrar_resultado(pwd3, "Sin símbolos (20 chars)")

# Contraseña débil de ejemplo
mostrar_resultado("password123", "Contraseña débil (ejemplo)")

# Generar varias y mostrar
print(f"\n{'='*50}")
print("  5 contraseñas de 12 caracteres:")
for i in range(5):
    p = generar_contrasena(longitud=12)
    nivel, emoji, _, _ = evaluar_fortaleza(p)
    print(f"  {i+1}. {p}  {emoji}")`,
    keyPoints: [
      'Usa `secrets` en lugar de `random` para generar contraseñas: es criptográficamente seguro.',
      '`secrets.choice(chars)` elige un carácter aleatorio criptográficamente seguro.',
      'Una buena contraseña combina mayúsculas, minúsculas, números y símbolos con longitud >= 12.',
      'La entropía en bits mide qué tan difícil es adivinar la contraseña por fuerza bruta.',
      '`secrets.SystemRandom().shuffle(lista)` mezcla criptográficamente, a diferencia de `random.shuffle`.',
    ],
    exercise: {
      description: 'Extiende el generador: añade una función `generar_passphrase(num_palabras=4)` que genere una frase de contraseña (passphrase) usando una lista de al menos 20 palabras comunes en español, separadas por `-`. Por ejemplo: "mesa-cielo-perro-libro". Las palabras se eligen aleatoriamente con `secrets.choice`. Evalúa su fortaleza.',
      hint: 'Define una lista `PALABRAS = ["casa", "cielo", "perro", ...]` con 20+ palabras. La passphrase es `"-".join(secrets.choice(PALABRAS) for _ in range(num_palabras))`. Para la fortaleza, una passphrase de 4 palabras es generalmente más segura que muchos símbolos cortos.',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda `secrets` en lugar de `random` para generar contraseñas?',
        options: [
          'Porque `secrets` es más rápido que `random`',
          'Porque `secrets` usa una fuente de aleatoriedad criptográficamente segura del sistema operativo',
          'Porque `random` no puede elegir caracteres especiales',
          'No hay diferencia para este caso de uso',
        ],
        correctAnswer: 'Porque `secrets` usa una fuente de aleatoriedad criptográficamente segura del sistema operativo',
        correctFeedback: 'Exacto. `random` usa un generador pseudoaleatorio (Mersenne Twister) que puede predecirse si se conoce la semilla. `secrets` usa fuentes del SO como `/dev/urandom`, que son impredecibles.',
        incorrectFeedback: '`random` es pseudoaleatorio y predecible si se conoce el estado interno. `secrets` usa la fuente de entropía del sistema operativo, que es impredecible incluso para un atacante con acceso al sistema.',
      },
      {
        question: '¿Qué es la entropía en el contexto de contraseñas?',
        options: [
          'El número de caracteres de la contraseña',
          'Una medida (en bits) de qué tan difícil es adivinar la contraseña por fuerza bruta',
          'El tiempo que tarda el sistema en verificar la contraseña',
          'El número de tipos de caracteres usados',
        ],
        correctAnswer: 'Una medida (en bits) de qué tan difícil es adivinar la contraseña por fuerza bruta',
        correctFeedback: 'Correcto. Una contraseña de alta entropía tiene muchas combinaciones posibles. Se calcula como `longitud × log₂(tamaño_del_alfabeto)`. Más bits = más segura.',
        incorrectFeedback: 'La entropía de una contraseña mide cuántas combinaciones posibles existen. Una contraseña de 16 caracteres del alfabeto completo tiene ~100 bits de entropía, lo que la hace prácticamente imposible de adivinar.',
      },
      {
        question: '¿Qué hace `secrets.SystemRandom().shuffle(lista)`?',
        options: [
          'Lo mismo que `random.shuffle(lista)` pero más lento',
          'Mezcla la lista usando la fuente de aleatoriedad criptográfica del sistema',
          'Devuelve una copia mezclada sin modificar la original',
          'Elimina elementos duplicados y luego mezcla',
        ],
        correctAnswer: 'Mezcla la lista usando la fuente de aleatoriedad criptográfica del sistema',
        correctFeedback: '¡Bien! `secrets.SystemRandom()` crea un generador de números aleatorios criptográficamente seguro. Su método `shuffle` mezcla de forma impredecible, a diferencia de `random.shuffle`.',
        incorrectFeedback: '`secrets.SystemRandom()` proporciona las mismas operaciones que `random` pero con aleatoriedad criptográfica. Úsalo cuando la impredecibilidad es crítica (contraseñas, tokens).',
      },
      {
        question: 'Una contraseña de 8 caracteres con solo minúsculas, ¿qué nivel de fortaleza tiene?',
        options: [
          'Excelente, porque tiene la longitud mínima recomendada',
          'Débil: cumple el mínimo de longitud pero carece de variedad de tipos de caracteres',
          'Regular: la longitud es suficiente para la mayoría de aplicaciones',
          'Fuerte: 8 caracteres de cualquier tipo es estándar de la industria',
        ],
        correctAnswer: 'Débil: cumple el mínimo de longitud pero carece de variedad de tipos de caracteres',
        correctFeedback: 'Correcto. Solo letras minúsculas dan un alfabeto de 26 caracteres. 8 caracteres de este alfabeto tienen ~37 bits de entropía, mucho menos que los 80+ bits recomendados hoy.',
        incorrectFeedback: 'Una contraseña solo con minúsculas y 8 caracteres tiene solo 26⁸ ≈ 208 mil millones de combinaciones, que un ataque por fuerza bruta moderno puede agotar en minutos. Necesita mayúsculas, números y símbolos.',
      },
      {
        question: '¿Qué técnica se usa en el generador para garantizar que cada tipo de carácter aparezca al menos una vez?',
        options: [
          'Se verifica la contraseña generada y se regenera si no cumple',
          'Se añade un carácter obligatorio de cada tipo y luego se mezcla todo',
          'Se distribuye la longitud uniformemente entre los tipos',
          'Se usa un algoritmo especial de secrets que garantiza variedad',
        ],
        correctAnswer: 'Se añade un carácter obligatorio de cada tipo y luego se mezcla todo',
        correctFeedback: '¡Exacto! Se elige al menos un carácter de cada tipo requerido (obligatorios), se completa con caracteres aleatorios del pool combinado, y finalmente se mezcla para que los obligatorios no estén siempre al inicio.',
        incorrectFeedback: 'El patrón "obligatorio + aleatorio + mezcla" garantiza: (1) al menos un carácter de cada tipo, (2) el resto aleatorio del pool completo, (3) posición aleatoria (la mezcla evita que los obligatorios sean predecibles).',
      },
    ],
  },
]
