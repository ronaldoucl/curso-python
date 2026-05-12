import type { Lesson } from '@/types'

export const lessonsModule20: Lesson[] = [
  {
    slug: 'estructura-proyecto-python',
    title: 'Estructura de un proyecto Python',
    module: 'Organización de proyectos Python',
    moduleNumber: 20,
    order: 96,
    description: 'Aprende a organizar los archivos y carpetas de un proyecto Python de forma profesional.',
    explanation: `## Estructura de un proyecto Python

La forma en que organizas tu proyecto impacta directamente en su mantenibilidad. Un proyecto bien estructurado es más fácil de entender, depurar y extender.

### Estructura mínima recomendada

\`\`\`
mi_proyecto/
├── venv/                  <- entorno virtual (en .gitignore)
├── src/                   <- código fuente principal
│   ├── __init__.py
│   ├── main.py
│   └── modulos/
│       ├── __init__.py
│       └── utilidades.py
├── tests/                 <- pruebas unitarias
│   ├── __init__.py
│   └── test_utilidades.py
├── .gitignore
├── requirements.txt
└── README.md
\`\`\`

### ¿Por qué esta estructura?

- **src/**: separa el código fuente de los archivos de configuración
- **tests/**: las pruebas separadas del código de producción
- **requirements.txt**: reproducir el entorno fácilmente
- **README.md**: documentación básica del proyecto

### Para proyectos simples

Si el proyecto es pequeño, puedes simplificar:

\`\`\`
mi_proyecto/
├── venv/
├── main.py
├── helpers.py
└── requirements.txt
\`\`\`

### Regla general

Organiza el código según su **propósito**, no según su tipo. No hagas una carpeta para todos los archivos \`.py\` — haz carpetas por funcionalidad.`,
    codeExample: `import os

# Simular la creación de una estructura de proyecto
def crear_estructura_proyecto(nombre_proyecto):
    """Muestra qué archivos y carpetas crear para un proyecto."""
    estructura = {
        f"{nombre_proyecto}/": [
            "venv/                  <- entorno virtual",
            "src/",
            "  __init__.py",
            "  main.py",
            "  modulos/",
            "    __init__.py",
            "    utilidades.py",
            "tests/",
            "  __init__.py",
            "  test_utilidades.py",
            ".gitignore",
            "requirements.txt",
            "README.md",
        ]
    }

    print(f"Estructura recomendada para: {nombre_proyecto}")
    print("=" * 40)
    print(f"{nombre_proyecto}/")
    for elemento in estructura[f"{nombre_proyecto}/"]:
        print(f"├── {elemento}")
    print()

crear_estructura_proyecto("mi_calculadora")

# Ver el directorio actual del proyecto
import os

def explorar_proyecto(directorio='.', nivel=0, max_nivel=3):
    if nivel > max_nivel:
        return

    elementos = sorted(os.listdir(directorio))
    for elemento in elementos:
        if elemento.startswith('.') or elemento == 'venv' or elemento == '__pycache__':
            continue
        ruta = os.path.join(directorio, elemento)
        sangria = "  " * nivel
        if os.path.isdir(ruta):
            print(f"{sangria}📁 {elemento}/")
            explorar_proyecto(ruta, nivel + 1, max_nivel)
        else:
            print(f"{sangria}📄 {elemento}")

print("Estructura actual del proyecto:")
explorar_proyecto()`,
    keyPoints: [
      'Organiza el código por funcionalidad, no por tipo de archivo',
      'Separa el código fuente (src/) de las pruebas (tests/)',
      'Siempre incluye requirements.txt y README.md',
      'La carpeta venv/ va en .gitignore',
      'Los archivos __init__.py convierten carpetas en paquetes Python',
    ],
    exercise: {
      description: 'Crea la estructura de carpetas para un proyecto llamado "gestor_tareas" que tenga: un módulo para tareas, uno para usuarios, una carpeta de pruebas y todos los archivos de configuración necesarios.',
      hint: 'Usa `os.makedirs()` para crear directorios y `open().close()` para crear archivos vacíos. No olvides los archivos `__init__.py` en cada carpeta de Python.',
    },
    quiz: [
      {
        question: '¿Para qué sirve el archivo `__init__.py` en una carpeta de Python?',
        options: [
          'Para inicializar variables globales',
          'Para convertir la carpeta en un paquete importable de Python',
          'Para configurar el entorno virtual',
          'Para ejecutar el proyecto',
        ],
        correctAnswer: 'Para convertir la carpeta en un paquete importable de Python',
        correctFeedback: '¡Correcto! `__init__.py` convierte un directorio en un paquete Python, permitiendo importar módulos desde esa carpeta.',
        incorrectFeedback: '`__init__.py` convierte una carpeta en un paquete Python. Sin él, Python no reconoce la carpeta como un paquete y no puedes importar módulos desde ella.',
      },
      {
        question: '¿Cuál es la mejor forma de organizar un proyecto Python grande?',
        options: [
          'Poner todos los archivos .py en una sola carpeta',
          'Organizar por funcionalidad: módulos separados según su propósito',
          'Un archivo Python por clase',
          'Organizar por fecha de creación',
        ],
        correctAnswer: 'Organizar por funcionalidad: módulos separados según su propósito',
        correctFeedback: '¡Correcto! Organizar por funcionalidad hace el código más intuitivo. Ejemplo: modulos/usuarios.py, modulos/tareas.py, modulos/reportes.py',
        incorrectFeedback: 'La mejor práctica es organizar por funcionalidad o dominio del negocio. Así es más fácil encontrar y entender el código relacionado.',
      },
      {
        question: '¿Cuál de estos archivos NO debería estar en el repositorio git?',
        options: ['requirements.txt', 'README.md', 'venv/', 'src/main.py'],
        correctAnswer: 'venv/',
        correctFeedback: '¡Exacto! La carpeta `venv/` va en `.gitignore`. Los demás archivos (requirements.txt, README.md, código fuente) sí deben estar en el repositorio.',
        incorrectFeedback: 'La carpeta `venv/` NO debe estar en git. Se agrega al `.gitignore`. El código fuente, README.md y requirements.txt sí van en el repositorio.',
      },
      {
        question: '¿Dónde deberían ir las pruebas unitarias en un proyecto bien organizado?',
        options: [
          'Dentro de la misma carpeta que el código que prueban',
          'En una carpeta separada llamada "tests/"',
          'En el archivo main.py',
          'No es necesario tener pruebas',
        ],
        correctAnswer: 'En una carpeta separada llamada "tests/"',
        correctFeedback: '¡Correcto! Las pruebas van en una carpeta separada `tests/`, paralela al código fuente. Esto facilita ejecutarlas y mantenerlas independientemente.',
        incorrectFeedback: 'Las pruebas van en una carpeta separada `tests/`. Esto permite ejecutarlas de forma independiente y no mezcla el código de producción con el de pruebas.',
      },
      {
        question: '¿Qué contiene típicamente un archivo README.md en un proyecto Python?',
        options: [
          'El código fuente del proyecto',
          'Descripción del proyecto, cómo instalarlo y cómo usarlo',
          'Las credenciales de la base de datos',
          'La configuración del entorno virtual',
        ],
        correctAnswer: 'Descripción del proyecto, cómo instalarlo y cómo usarlo',
        correctFeedback: '¡Correcto! El README es la "puerta de entrada" del proyecto: explica qué hace, cómo instalarlo, cómo ejecutarlo y cualquier información relevante.',
        incorrectFeedback: 'El README.md contiene documentación del proyecto: descripción, instrucciones de instalación, uso y cualquier información relevante para quien lo encuentre.',
      },
    ],
  },
  {
    slug: 'separar-codigo-modulos',
    title: 'Separar el código en módulos',
    module: 'Organización de proyectos Python',
    moduleNumber: 20,
    order: 97,
    description: 'Aprende a dividir tu código en múltiples archivos usando el sistema de módulos de Python.',
    explanation: `## Separar el código en módulos

A medida que un proyecto crece, tener todo en un solo archivo se vuelve inmanejable. Los **módulos** permiten dividir el código en partes lógicas.

### ¿Qué es un módulo?

Un módulo en Python es simplemente un archivo \`.py\`. Cuando importas un módulo, Python ejecuta ese archivo y hace sus funciones, clases y variables disponibles.

### Ejemplo: de un archivo a múltiples módulos

**Antes (todo en main.py):**

\`\`\`python
# main.py — ¡Demasiado código en un archivo!
def calcular_suma(a, b): return a + b
def calcular_resta(a, b): return a - b
def mostrar_menu(): print("=== Calculadora ===")
def guardar_historial(operacion): ...
def cargar_historial(): ...
\`\`\`

**Después (separado en módulos):**

\`\`\`
calculadora/
├── main.py
├── operaciones.py    <- funciones matemáticas
├── menu.py           <- interfaz de usuario
└── historial.py      <- guardar/cargar datos
\`\`\`

### Importar desde módulos propios

\`\`\`python
# En main.py:
from operaciones import calcular_suma, calcular_resta
from menu import mostrar_menu
from historial import guardar_historial
\`\`\`

### Importar desde subcarpetas (paquetes)

\`\`\`python
# Si tienes src/modulos/operaciones.py:
from src.modulos.operaciones import calcular_suma
\`\`\`

### Principios de separación

- **Un módulo = una responsabilidad**
- Nombres descriptivos: \`usuarios.py\`, no \`u.py\`
- Si un módulo tiene más de ~300 líneas, considera dividirlo
- Evita dependencias circulares (A importa B que importa A)`,
    codeExample: `# Ejemplo: proyecto de gestión de contactos dividido en módulos

# ===== contactos.py =====
# (Este sería el contenido de src/contactos.py)

class Contacto:
    def __init__(self, nombre, email, telefono=''):
        self.nombre = nombre
        self.email = email
        self.telefono = telefono

    def __repr__(self):
        return f"Contacto('{self.nombre}', '{self.email}')"

    def to_dict(self):
        return {
            'nombre': self.nombre,
            'email': self.email,
            'telefono': self.telefono
        }

# ===== validaciones.py =====
# (Esto iría en src/validaciones.py)

import re

def validar_email(email):
    patron = r'^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(patron, email))

def validar_telefono(telefono):
    patron = r'^[+]?[\\d\\s()-]{7,15}$'
    return bool(re.match(patron, telefono))

# ===== almacenamiento.py =====
# (Esto iría en src/almacenamiento.py)
import json

def guardar_contactos(contactos, archivo='contactos.json'):
    datos = [c.to_dict() for c in contactos]
    with open(archivo, 'w', encoding='utf-8') as f:
        json.dump(datos, f, ensure_ascii=False, indent=2)
    print(f"✓ {len(datos)} contactos guardados en {archivo}")

# ===== main.py =====
# Aquí importaríamos de los módulos anteriores:
# from contactos import Contacto
# from validaciones import validar_email
# from almacenamiento import guardar_contactos

# Demo sin importar archivos externos:
contacto1 = Contacto("Ana García", "ana@ejemplo.com", "555-1234")
contacto2 = Contacto("Luis Pérez", "luis@ejemplo.com")

print("Contactos creados:")
print(f"  {contacto1}")
print(f"  {contacto2}")

email_valido = validar_email("ana@ejemplo.com")
print(f"\\n¿Email válido? {email_valido}")`,
    keyPoints: [
      'Un módulo Python es simplemente un archivo .py',
      'Divide el código según su responsabilidad o dominio',
      'Usa importaciones específicas: from modulo import funcion',
      'Los archivos __init__.py hacen que una carpeta sea un paquete',
      'Evita dependencias circulares entre módulos',
    ],
    exercise: {
      description: 'Crea un mini-proyecto "agenda" con tres archivos: `contacto.py` (clase Contacto), `validaciones.py` (función validar_email con regex) y `main.py` (que importa de los otros dos y crea algunos contactos). Prueba que las importaciones funcionan correctamente.',
      hint: 'En main.py usa `from contacto import Contacto` y `from validaciones import validar_email`. Asegúrate de que todos los archivos estén en la misma carpeta.',
    },
    quiz: [
      {
        question: '¿Qué es un módulo en Python?',
        options: [
          'Una función especial de Python',
          'Un archivo .py que contiene código Python',
          'Una librería externa instalada con pip',
          'Una clase especial de Python',
        ],
        correctAnswer: 'Un archivo .py que contiene código Python',
        correctFeedback: '¡Correcto! Un módulo es simplemente un archivo .py. Puedes importarlo en otros archivos para reutilizar su código.',
        incorrectFeedback: 'Un módulo en Python es simplemente un archivo `.py`. Cuando lo importas, Python ejecuta ese archivo y hace disponibles sus funciones, clases y variables.',
      },
      {
        question: '¿Cuál es la forma correcta de importar una función específica desde un módulo propio?',
        options: [
          'import operaciones.calcular_suma',
          'from operaciones import calcular_suma',
          'include operaciones.calcular_suma',
          'require("operaciones").calcular_suma',
        ],
        correctAnswer: 'from operaciones import calcular_suma',
        correctFeedback: '¡Exacto! La sintaxis `from módulo import función` importa solo lo que necesitas, que es más eficiente y legible.',
        incorrectFeedback: 'La sintaxis correcta es `from operaciones import calcular_suma`. Esto importa específicamente la función, no todo el módulo.',
      },
      {
        question: 'Tienes la siguiente estructura:\n```\nproyecto/\n├── src/\n│   ├── __init__.py\n│   └── utils.py\n└── main.py\n```\n¿Cómo importas la función `formatear` de utils.py en main.py?',
        options: [
          'from utils import formatear',
          'from src.utils import formatear',
          'import src/utils.formatear',
          'require(src.utils).formatear',
        ],
        correctAnswer: 'from src.utils import formatear',
        correctFeedback: '¡Correcto! Como `utils.py` está dentro de la carpeta `src/`, usas la notación de puntos: `from src.utils import formatear`.',
        incorrectFeedback: 'Como `utils.py` está dentro de la carpeta `src/`, necesitas la ruta con puntos: `from src.utils import formatear`. La carpeta `src/` necesita tener `__init__.py` para ser un paquete.',
      },
      {
        question: '¿Qué señal indica que es hora de dividir un módulo en varios?',
        options: [
          'Cuando tiene más de 10 funciones',
          'Cuando tiene más de ~300 líneas o mezcla responsabilidades distintas',
          'Cuando tiene clases',
          'Nunca, un módulo debe ser completo',
        ],
        correctAnswer: 'Cuando tiene más de ~300 líneas o mezcla responsabilidades distintas',
        correctFeedback: '¡Correcto! Un módulo muy largo o que mezcla responsabilidades (validación + base de datos + UI) es señal de dividirlo.',
        incorrectFeedback: 'Divide un módulo cuando se vuelve muy largo (~300+ líneas) o cuando mezcla responsabilidades diferentes. Cada módulo debe tener una sola razón para cambiar.',
      },
      {
        question: '¿Qué es una dependencia circular en módulos?',
        options: [
          'Cuando un módulo importa librerías externas',
          'Cuando A importa B y B importa A',
          'Cuando un módulo tiene demasiadas funciones',
          'Cuando importas el mismo módulo dos veces',
        ],
        correctAnswer: 'Cuando A importa B y B importa A',
        correctFeedback: '¡Correcto! Las dependencias circulares (A importa B, B importa A) causan errores porque Python no puede resolver el orden de carga.',
        incorrectFeedback: 'Una dependencia circular ocurre cuando el módulo A importa al módulo B, y B a su vez importa a A. Python no puede resolver esto y lanza un ImportError.',
      },
    ],
  },
  {
    slug: 'archivo-main',
    title: 'El archivo main.py',
    module: 'Organización de proyectos Python',
    moduleNumber: 20,
    order: 98,
    description: 'Aprende el rol del archivo main.py y cómo estructurar el punto de entrada de tu proyecto.',
    explanation: `## El archivo main.py

El archivo \`main.py\` es el **punto de entrada** de un proyecto Python. Es el archivo que se ejecuta para iniciar el programa.

### ¿Qué hace main.py?

- Importa los módulos necesarios
- Configura el programa (lee configuración, conecta bases de datos, etc.)
- Llama a las funciones principales
- Contiene el flujo principal del programa

### ¿Qué NO debería tener main.py?

- Lógica de negocio compleja
- Funciones de utilidad
- Definiciones de clases (salvo que sean muy simples)

**Regla**: si alguien lee main.py, debe entender QUÉ hace el programa, no CÓMO lo hace.

### Estructura típica de main.py

\`\`\`python
#!/usr/bin/env python3
"""Punto de entrada del proyecto Agenda de Contactos."""

from modulos.agenda import Agenda
from modulos.interfaz import mostrar_menu, obtener_opcion
from configuracion import ARCHIVO_DATOS

def main():
    agenda = Agenda(ARCHIVO_DATOS)
    agenda.cargar()

    while True:
        mostrar_menu()
        opcion = obtener_opcion()
        if opcion == 'salir':
            break
        agenda.procesar(opcion)

    agenda.guardar()
    print("¡Hasta pronto!")

if __name__ == '__main__':
    main()
\`\`\`

### ¿Por qué usar \`if __name__ == '__main__'\`?

Esto permite que el archivo sea tanto ejecutado directamente como importado desde otro módulo sin ejecutar el código automáticamente. Lo veremos en detalle en la siguiente lección.`,
    codeExample: `# Ejemplo de main.py bien estructurado para una calculadora

# ===== operaciones.py (módulo separado) =====
def sumar(a, b): return a + b
def restar(a, b): return a - b
def multiplicar(a, b): return a * b
def dividir(a, b):
    if b == 0:
        raise ValueError("No se puede dividir entre cero")
    return a / b

# ===== interfaz.py (módulo separado) =====
def mostrar_menu():
    print("\\n=== CALCULADORA ===")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")

def pedir_numeros():
    a = float(input("Primer número: "))
    b = float(input("Segundo número: "))
    return a, b

# ===== main.py (punto de entrada) =====
# En el main.py real importaríamos los módulos:
# from operaciones import sumar, restar, multiplicar, dividir
# from interfaz import mostrar_menu, pedir_numeros

def main():
    """Función principal de la calculadora."""
    operaciones = {
        '1': ('Suma', sumar),
        '2': ('Resta', restar),
        '3': ('Multiplicación', multiplicar),
        '4': ('División', dividir),
    }

    print("=== Iniciando calculadora ===")

    opcion = '1'  # Simular selección del usuario
    if opcion in operaciones:
        nombre, funcion = operaciones[opcion]
        try:
            # a, b = pedir_numeros()  <- en el programa real
            a, b = 10, 5  # valores de ejemplo
            resultado = funcion(a, b)
            print(f"{nombre}: {a} op {b} = {resultado}")
        except ValueError as e:
            print(f"Error: {e}")

if __name__ == '__main__':
    main()`,
    keyPoints: [
      'main.py es el punto de entrada del proyecto',
      'Debe mostrar el QUÉ del programa, no el CÓMO',
      'Importa módulos y coordina el flujo principal',
      'La lógica de negocio va en módulos separados',
      'Siempre usa if __name__ == "__main__" para proteger la ejecución',
    ],
    exercise: {
      description: 'Crea un main.py para un proyecto "convertidor de temperaturas" que importe funciones de un módulo `conversiones.py` (celsius_a_fahrenheit, celsius_a_kelvin) y las use para mostrar conversiones de 0°C, 100°C y 37°C.',
      hint: 'En conversiones.py define las funciones de conversión. En main.py importa con `from conversiones import ...` y llama a las funciones mostrando los resultados.',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito principal del archivo main.py?',
        options: [
          'Contener toda la lógica del programa',
          'Ser el punto de entrada que coordina los módulos del proyecto',
          'Definir todas las clases del proyecto',
          'Instalar las dependencias del proyecto',
        ],
        correctAnswer: 'Ser el punto de entrada que coordina los módulos del proyecto',
        correctFeedback: '¡Correcto! main.py orquesta el programa: importa módulos, inicializa recursos y ejecuta el flujo principal.',
        incorrectFeedback: 'main.py es el punto de entrada que coordina los módulos. No debe contener toda la lógica — esa va en módulos separados. main.py muestra el "qué", los módulos el "cómo".',
      },
      {
        question: '¿Qué NO debería contener el archivo main.py?',
        options: [
          'Importaciones de módulos',
          'La función main()',
          'Toda la lógica de negocio compleja del programa',
          'La condición `if __name__ == "__main__"`',
        ],
        correctAnswer: 'Toda la lógica de negocio compleja del programa',
        correctFeedback: '¡Correcto! La lógica compleja va en módulos separados. main.py solo coordina el flujo general.',
        incorrectFeedback: 'main.py no debe tener lógica de negocio compleja. Esa va en módulos separados. main.py importa esos módulos y los coordina.',
      },
      {
        question: '¿Cuál es la estructura correcta para el punto de entrada de un programa Python?',
        options: [
          'Escribir el código directamente sin función main',
          'Definir una función main() y llamarla con `if __name__ == "__main__"`',
          'Usar la función start() como en Java',
          'El archivo debe llamarse index.py',
        ],
        correctAnswer: 'Definir una función main() y llamarla con `if __name__ == "__main__"`',
        correctFeedback: '¡Exacto! Esta es la convención estándar en Python para el punto de entrada.',
        incorrectFeedback: 'La convención estándar en Python es definir `def main():` con la lógica principal y llamarla con `if __name__ == "__main__": main()`.',
      },
      {
        question: 'Un colega lee tu main.py y en 2 minutos entiende qué hace el programa pero no cómo. ¿Esto es bueno o malo?',
        options: [
          'Malo, main.py debe explicar todos los detalles',
          'Malo, el código debe ser auto-documentado',
          'Bueno, main.py debe mostrar el "qué" y los módulos el "cómo"',
          'Neutro, no importa cómo esté organizado',
        ],
        correctAnswer: 'Bueno, main.py debe mostrar el "qué" y los módulos el "cómo"',
        correctFeedback: '¡Exacto! Este es el objetivo. main.py muestra la visión general del programa, los módulos contienen los detalles de implementación.',
        incorrectFeedback: 'Esto es excelente. El objetivo de main.py es mostrar el "qué" del programa — el flujo general — mientras que los módulos contienen el "cómo" — los detalles de implementación.',
      },
      {
        question: '¿Qué debería hacer main.py si el programa trabaja con archivos o bases de datos?',
        options: [
          'Implementar todo el manejo de archivos directamente',
          'Inicializar las conexiones/configuraciones y delegar la lógica a módulos especializados',
          'No manejar ningún archivo',
          'Copiar el código de manejo de archivos desde Stack Overflow',
        ],
        correctAnswer: 'Inicializar las conexiones/configuraciones y delegar la lógica a módulos especializados',
        correctFeedback: '¡Correcto! main.py inicia los recursos necesarios y los pasa a módulos especializados que saben cómo usarlos.',
        incorrectFeedback: 'main.py inicializa los recursos (abre conexión, lee config) y delega el trabajo a módulos especializados. Ejemplo: `db = conectar(); gestor = GestorDatos(db); gestor.procesar()`.',
      },
    ],
  },
  {
    slug: 'name-main-python',
    title: 'if __name__ == "__main__"',
    module: 'Organización de proyectos Python',
    moduleNumber: 20,
    order: 99,
    description: 'Entiende cómo y por qué usar el bloque if __name__ == "__main__" en tus proyectos.',
    explanation: `## ¿Qué es \`if __name__ == "__main__"\`?

Esta es una de las construcciones más importantes de Python. Permite que un archivo funcione tanto como **script ejecutable** como **módulo importable**.

### La variable \`__name__\`

Python asigna automáticamente la variable \`__name__\` a cada archivo:

- Si el archivo se **ejecuta directamente**: \`__name__ == "__main__"\`
- Si el archivo se **importa**: \`__name__ == "nombre_del_archivo"\`

### Ejemplo práctico

\`\`\`python
# operaciones.py
def sumar(a, b):
    return a + b

print(f"Mi nombre es: {__name__}")

if __name__ == "__main__":
    # Solo se ejecuta si corres: python operaciones.py
    resultado = sumar(5, 3)
    print(f"5 + 3 = {resultado}")
\`\`\`

**Al ejecutar directamente** (\`python operaciones.py\`):
\`\`\`
Mi nombre es: __main__
5 + 3 = 8
\`\`\`

**Al importar desde otro archivo** (\`from operaciones import sumar\`):
\`\`\`
Mi nombre es: operaciones
\`\`\`
(El bloque if no se ejecuta)

### ¿Por qué es importante?

Sin este patrón, al importar un módulo se ejecutaría todo su código. Con él, puedes:

1. Tener código de prueba en el propio módulo
2. Hacer que el módulo sea ejecutable por sí solo
3. Proteger código que no debe ejecutarse al importar`,
    codeExample: `# Demostración de __name__

# Ver el __name__ del archivo actual
print(f"__name__ en este contexto: {__name__}")
# Al ejecutar directamente: __main__
# Al importar: nombre del módulo

# Simular el comportamiento de importación
def demostrar_name():
    # Este código siempre se ejecuta (al importar y al ejecutar)
    pass

# Función de utilidad (disponible al importar)
def calcular_promedio(numeros):
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    return sum(numeros) / len(numeros)

def calcular_mediana(numeros):
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    ordenados = sorted(numeros)
    n = len(ordenados)
    if n % 2 == 0:
        return (ordenados[n//2 - 1] + ordenados[n//2]) / 2
    return ordenados[n//2]

# Solo se ejecuta al correr este archivo directamente
if __name__ == "__main__":
    print("=== Ejecutando estadísticas.py directamente ===")

    datos = [10, 25, 8, 42, 15, 33, 7]
    print(f"Datos: {datos}")
    print(f"Promedio: {calcular_promedio(datos):.2f}")
    print(f"Mediana: {calcular_mediana(datos)}")

    # Pruebas rápidas
    print("\\n--- Pruebas ---")
    assert calcular_promedio([1, 2, 3]) == 2.0, "Error en promedio"
    assert calcular_mediana([1, 2, 3]) == 2, "Error en mediana"
    print("✓ Todas las pruebas pasaron")

# Si este archivo fuera importado con:
# from estadisticas import calcular_promedio
# Solo estarían disponibles las funciones, no se ejecutaría el bloque if`,
    keyPoints: [
      '__name__ es "__main__" solo cuando el archivo se ejecuta directamente',
      'Al importar un módulo, __name__ es el nombre del módulo',
      'El bloque if __name__ == "__main__" protege código de ejecución automática',
      'Permite que un archivo sea tanto script como módulo importable',
      'Es una convención estándar de Python para el punto de entrada',
    ],
    exercise: {
      description: 'Crea un archivo `matematicas.py` con funciones de suma, resta y multiplicación. Al final, agrega un bloque `if __name__ == "__main__"` que pruebe todas las funciones. Luego importa solo la función `suma` desde otro archivo y verifica que el bloque de pruebas NO se ejecuta.',
      hint: 'Crea dos archivos: matematicas.py y test_import.py. En test_import.py escribe `from matematicas import suma` y verifica que solo veas la salida de test_import.py.',
    },
    quiz: [
      {
        question: '¿Cuál es el valor de `__name__` cuando ejecutas `python mi_script.py` directamente?',
        options: ['"mi_script"', '"__main__"', '"python"', 'None'],
        correctAnswer: '"__main__"',
        correctFeedback: '¡Correcto! Cuando ejecutas un archivo directamente, Python establece `__name__ = "__main__"` para ese archivo.',
        incorrectFeedback: 'Cuando ejecutas un archivo directamente, `__name__` es `"__main__"`. Solo cuando el archivo se importa desde otro, `__name__` toma el nombre del archivo.',
      },
      {
        question: '¿Qué valor tiene `__name__` en el archivo `utils.py` cuando haces `import utils` desde otro archivo?',
        options: ['"__main__"', '"utils"', '"import"', 'None'],
        correctAnswer: '"utils"',
        correctFeedback: '¡Exacto! Al importar un módulo, `__name__` toma el nombre del módulo (sin la extensión .py).',
        incorrectFeedback: 'Al importar un módulo con `import utils`, la variable `__name__` dentro de utils.py será `"utils"` — el nombre del módulo, no `"__main__"`.',
      },
      {
        question: '¿Qué pasa con el código dentro del bloque `if __name__ == "__main__":` cuando importas el módulo?',
        options: [
          'Se ejecuta normalmente',
          'No se ejecuta',
          'Da un error',
          'Se ejecuta solo la primera vez',
        ],
        correctAnswer: 'No se ejecuta',
        correctFeedback: '¡Correcto! Al importar, `__name__` es el nombre del módulo (no "__main__"), por lo que la condición es falsa y el bloque no se ejecuta.',
        incorrectFeedback: 'Al importar, `__name__ != "__main__"`, así que la condición es `False` y el código dentro del bloque no se ejecuta. Solo se ejecuta al correr el archivo directamente.',
      },
      {
        question: '¿Cuál es el uso correcto de `if __name__ == "__main__"` en un módulo de utilidades?',
        options: [
          'No se debe usar en módulos de utilidades',
          'Para poner pruebas rápidas de las funciones del módulo',
          'Para importar las dependencias',
          'Para definir las funciones principales',
        ],
        correctAnswer: 'Para poner pruebas rápidas de las funciones del módulo',
        correctFeedback: '¡Correcto! Es muy útil agregar pruebas o ejemplos de uso dentro del bloque, así puedes ejecutar el módulo directamente para verificar que funciona.',
        incorrectFeedback: 'Un uso muy práctico es poner pruebas rápidas o ejemplos de uso. Al importar el módulo no se ejecutan, pero al correr el archivo directamente sirven para verificar el código.',
      },
      {
        question: '¿Qué problema evita usar `if __name__ == "__main__"`?',
        options: [
          'Evita errores de sintaxis',
          'Evita que el código de ejecución se ejecute al importar el módulo',
          'Evita problemas de rendimiento',
          'Evita conflictos con variables globales',
        ],
        correctAnswer: 'Evita que el código de ejecución se ejecute al importar el módulo',
        correctFeedback: '¡Exacto! Sin esta protección, al importar el módulo se ejecutaría todo su código de nivel superior, lo cual casi siempre es indeseable.',
        incorrectFeedback: 'Sin `if __name__ == "__main__"`, todo el código de nivel superior se ejecutaría al importar el módulo. Esto causa efectos secundarios no deseados (prints, conexiones, etc.).',
      },
    ],
  },
  {
    slug: 'configuracion-constantes',
    title: 'Configuración y constantes del proyecto',
    module: 'Organización de proyectos Python',
    moduleNumber: 20,
    order: 100,
    description: 'Organiza la configuración y constantes de tu proyecto de forma centralizada y mantenible.',
    explanation: `## Configuración y constantes del proyecto

En cualquier proyecto real hay valores que se repiten: URLs, rutas de archivos, claves de API, límites, etc. La mejor práctica es **centralizarlos** en un lugar.

### Por qué centralizar la configuración

Imagina que tienes la URL de tu API en 20 archivos distintos. Cuando cambie (y cambiará), tendrás que editar 20 archivos. Si está en un solo lugar, cambias uno.

### Archivo de configuración: config.py

\`\`\`python
# config.py

# Configuración de la base de datos
DB_HOST = 'localhost'
DB_PORT = 5432
DB_NAME = 'mi_proyecto'

# Rutas
DATA_DIR = 'datos/'
LOG_DIR = 'logs/'
BACKUP_DIR = 'backups/'

# Límites del sistema
MAX_INTENTOS = 3
TIMEOUT_SEGUNDOS = 30
TAMANIO_PAGINA = 50

# URLs
API_URL = 'https://api.ejemplo.com/v1'
\`\`\`

### Variables de entorno para datos sensibles

Las contraseñas, claves de API y datos sensibles **nunca** deben estar en el código. Usa variables de entorno:

\`\`\`python
import os

# .env (no subir a git)
# DB_PASSWORD=mi_contrasena_secreta
# API_KEY=abc123xyz

DB_PASSWORD = os.environ.get('DB_PASSWORD')
API_KEY = os.environ.get('API_KEY')

if not API_KEY:
    raise ValueError("Falta la variable de entorno API_KEY")
\`\`\`

### Usando python-dotenv

La librería \`python-dotenv\` carga automáticamente un archivo \`.env\`:

\`\`\`python
from dotenv import load_dotenv
import os

load_dotenv()  # Carga variables del archivo .env

DB_PASSWORD = os.environ.get('DB_PASSWORD')
\`\`\``,
    codeExample: `import os

# ===== config.py =====
# Centraliza toda la configuración del proyecto

# Rutas del proyecto
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'datos')
LOG_DIR = os.path.join(BASE_DIR, 'logs')

# Configuración de la aplicación
APP_NAME = "Mi Aplicación"
VERSION = "1.0.0"
DEBUG = os.environ.get('DEBUG', 'False').lower() == 'true'

# Límites
MAX_REGISTROS = 1000
TIMEOUT = 30
INTENTOS_MAX = 3

# Mensajes de error centralizados
ERRORES = {
    'no_encontrado': "El recurso no fue encontrado",
    'sin_permiso': "No tienes permiso para esta acción",
    'error_servidor': "Error interno del servidor",
}

# Verificar y crear directorios necesarios
def inicializar_directorios():
    for directorio in [DATA_DIR, LOG_DIR]:
        os.makedirs(directorio, exist_ok=True)
        print(f"✓ Directorio listo: {directorio}")

# ===== uso_config.py (otro módulo) =====
# from config import APP_NAME, VERSION, MAX_REGISTROS, ERRORES

# Usando la configuración:
print(f"=== {APP_NAME} v{VERSION} ===")
print(f"Modo debug: {DEBUG}")
print(f"Máximo de registros: {MAX_REGISTROS}")

# Acceso a errores centralizados
codigo_error = 'no_encontrado'
mensaje = ERRORES.get(codigo_error, "Error desconocido")
print(f"\\nError '{codigo_error}': {mensaje}")

# Variables de entorno para datos sensibles
api_key = os.environ.get('API_KEY', None)
if api_key:
    print(f"\\nAPI Key cargada: {'*' * (len(api_key) - 4)}{api_key[-4:]}")
else:
    print("\\n⚠️  API_KEY no configurada (usar variable de entorno)")`,
    keyPoints: [
      'Centraliza constantes y configuración en un archivo config.py',
      'Nunca pongas contraseñas o claves de API directamente en el código',
      'Usa variables de entorno para datos sensibles',
      'El archivo .env guarda variables de entorno locales (no subir a git)',
      'python-dotenv facilita cargar archivos .env automáticamente',
    ],
    exercise: {
      description: 'Crea un archivo `config.py` para un proyecto de librería virtual con: rutas de archivos (catálogo, préstamos), límites (max libros por usuario=3, días préstamo=14), mensajes de error centralizados y una función `validar_config()` que verifique que todo está configurado correctamente.',
      hint: 'Usa `os.path.join()` para las rutas. Los mensajes de error pueden ser un diccionario. La función de validación puede verificar que los valores numéricos sean positivos.',
    },
    quiz: [
      {
        question: '¿Por qué es una buena práctica centralizar las constantes en un archivo config.py?',
        options: [
          'Para que el código sea más lento',
          'Para cambiar un valor en un lugar y que aplique en todo el proyecto',
          'Porque Python lo requiere obligatoriamente',
          'Para que el código ocupe menos espacio',
        ],
        correctAnswer: 'Para cambiar un valor en un lugar y que aplique en todo el proyecto',
        correctFeedback: '¡Correcto! Si el valor aparece en 20 lugares y necesita cambiar, solo modificas config.py y aplica en todo el proyecto.',
        incorrectFeedback: 'La razón principal es mantenibilidad. Un valor centralizado en config.py se cambia una vez y aplica en todo el proyecto. Distribuido en 20 archivos, debes cambiar 20 lugares.',
      },
      {
        question: '¿Cómo deberías almacenar una contraseña de base de datos en un proyecto Python?',
        options: [
          'Como string directamente en config.py',
          'Como variable de entorno, leída con os.environ.get()',
          'En un comentario en el código',
          'Como constante en mayúsculas: PASSWORD = "mi_pass"',
        ],
        correctAnswer: 'Como variable de entorno, leída con os.environ.get()',
        correctFeedback: '¡Correcto! Las contraseñas y claves sensibles van en variables de entorno, nunca en el código fuente que se sube a git.',
        incorrectFeedback: 'Las contraseñas van en variables de entorno (`os.environ.get()`), no en el código. Si subes el código a GitHub con una contraseña, cualquiera puede verla.',
      },
      {
        question: '¿Qué es el archivo .env?',
        options: [
          'El archivo de configuración de Python',
          'Un archivo de texto con variables de entorno para desarrollo local',
          'El entorno virtual del proyecto',
          'El archivo de dependencias del proyecto',
        ],
        correctAnswer: 'Un archivo de texto con variables de entorno para desarrollo local',
        correctFeedback: '¡Exacto! El archivo `.env` contiene variables de entorno para desarrollo local (contraseñas, claves). Se carga con python-dotenv y NO va en git.',
        incorrectFeedback: 'El archivo `.env` es un archivo de texto con pares `CLAVE=valor` para configurar el entorno de desarrollo local. Se usa con la librería `python-dotenv` y nunca debe subirse a git.',
      },
      {
        question: '¿Qué hace `os.environ.get("API_KEY", "valor_por_defecto")`?',
        options: [
          'Establece la variable de entorno API_KEY',
          'Lee la variable API_KEY del entorno; si no existe, devuelve "valor_por_defecto"',
          'Genera un error si API_KEY no existe',
          'Lee el archivo .env',
        ],
        correctAnswer: 'Lee la variable API_KEY del entorno; si no existe, devuelve "valor_por_defecto"',
        correctFeedback: '¡Correcto! El segundo argumento de `get()` es el valor por defecto si la variable no está definida en el entorno.',
        incorrectFeedback: '`os.environ.get("API_KEY", "valor_por_defecto")` lee la variable `API_KEY` del entorno del sistema. Si no existe, devuelve `"valor_por_defecto"` en lugar de lanzar un error.',
      },
      {
        question: '¿Cuál de estos valores SÍ debería estar en config.py como constante?',
        options: [
          'La contraseña de la base de datos',
          'El token de acceso de la API',
          'El número máximo de intentos de login (MAX_INTENTOS = 3)',
          'La clave privada del servidor',
        ],
        correctAnswer: 'El número máximo de intentos de login (MAX_INTENTOS = 3)',
        correctFeedback: '¡Correcto! Los límites y configuraciones no sensibles como `MAX_INTENTOS = 3` son buenos candidatos para config.py. Los secretos van en variables de entorno.',
        incorrectFeedback: 'Los valores no sensibles como límites, timeouts, nombres de directorios y mensajes de error van bien en config.py. Los secretos (contraseñas, tokens, claves) siempre en variables de entorno.',
      },
    ],
  },
  {
    slug: 'proyecto-final-intermedio',
    title: 'Proyecto final: Gestor de tareas',
    module: 'Organización de proyectos Python',
    moduleNumber: 20,
    order: 101,
    description: 'Integra todo lo aprendido en el nivel intermedio construyendo un gestor de tareas completo y bien organizado.',
    explanation: `## Proyecto final: Gestor de tareas

Este proyecto integra los conceptos de Python Intermedio en una aplicación real y bien organizada.

### ¿Qué construiremos?

Un **gestor de tareas en consola** que:
- Permite agregar, ver, completar y eliminar tareas
- Guarda y carga tareas en JSON
- Valida los datos con expresiones regulares
- Usa fechas para registrar cuándo se creó cada tarea
- Está organizado en módulos separados
- Usa comprehensions para filtrar y transformar datos

### Estructura del proyecto

\`\`\`
gestor_tareas/
├── venv/
├── src/
│   ├── __init__.py
│   ├── tarea.py          <- clase Tarea
│   ├── gestor.py         <- lógica principal
│   ├── almacenamiento.py <- leer/escribir JSON
│   ├── validaciones.py   <- regex y validaciones
│   └── reportes.py       <- estadísticas con comprehensions
├── config.py
├── main.py
└── requirements.txt
\`\`\`

### Conceptos intermedios aplicados

| Concepto | Dónde se usa |
|----------|-------------|
| Comprehensions | Filtrar tareas pendientes, completadas |
| Lambda/sorted | Ordenar tareas por fecha o prioridad |
| Manejo de errores | Al leer/escribir archivos JSON |
| datetime | Fechas de creación y vencimiento |
| Regex | Validar formato de fechas |
| CSV/JSON | Persistencia de datos |
| Módulos | Separación por responsabilidad |
| Entornos virtuales | Dependencias aisladas |

### ¡Lo lograste!

Completar este proyecto significa que dominas Python Intermedio. Eres capaz de:
- Escribir código organizado y mantenible
- Manejar errores de forma profesional
- Trabajar con archivos y datos estructurados
- Organizar proyectos reales con módulos y entornos virtuales`,
    codeExample: `from datetime import datetime, date
import json
import re
from typing import Optional

# ===== tarea.py =====

class Tarea:
    def __init__(self, titulo: str, descripcion: str = '',
                 prioridad: str = 'media', fecha_vencimiento: Optional[str] = None):
        self.id = None  # Se asigna al guardar
        self.titulo = titulo
        self.descripcion = descripcion
        self.prioridad = prioridad
        self.completada = False
        self.fecha_creacion = datetime.now().isoformat()
        self.fecha_vencimiento = fecha_vencimiento

    def completar(self):
        self.completada = True

    def to_dict(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'descripcion': self.descripcion,
            'prioridad': self.prioridad,
            'completada': self.completada,
            'fecha_creacion': self.fecha_creacion,
            'fecha_vencimiento': self.fecha_vencimiento,
        }

    @classmethod
    def from_dict(cls, datos: dict) -> 'Tarea':
        tarea = cls(
            titulo=datos['titulo'],
            descripcion=datos.get('descripcion', ''),
            prioridad=datos.get('prioridad', 'media'),
            fecha_vencimiento=datos.get('fecha_vencimiento'),
        )
        tarea.id = datos.get('id')
        tarea.completada = datos.get('completada', False)
        tarea.fecha_creacion = datos.get('fecha_creacion', '')
        return tarea

    def __repr__(self):
        estado = '✓' if self.completada else '○'
        return f"[{estado}] {self.titulo} ({self.prioridad})"


# ===== reportes.py (usa comprehensions) =====

def obtener_estadisticas(tareas: list) -> dict:
    total = len(tareas)
    completadas = [t for t in tareas if t.completada]
    pendientes = [t for t in tareas if not t.completada]

    por_prioridad = {
        prioridad: len([t for t in tareas if t.prioridad == prioridad])
        for prioridad in ['alta', 'media', 'baja']
    }

    titulos_pendientes = [t.titulo for t in pendientes]

    return {
        'total': total,
        'completadas': len(completadas),
        'pendientes': len(pendientes),
        'porcentaje': (len(completadas) / total * 100) if total > 0 else 0,
        'por_prioridad': por_prioridad,
        'titulos_pendientes': titulos_pendientes,
    }


# ===== Demo del proyecto =====

tareas = [
    Tarea("Estudiar Python", "Terminar módulo 20", "alta"),
    Tarea("Hacer ejercicio", prioridad="media"),
    Tarea("Leer libro", prioridad="baja"),
    Tarea("Proyecto trabajo", "Entregar el viernes", "alta"),
]

# Completar algunas tareas
tareas[0].completar()
tareas[1].completar()

# Ordenar por prioridad (usando lambda)
orden_prioridad = {'alta': 0, 'media': 1, 'baja': 2}
tareas_ordenadas = sorted(tareas, key=lambda t: orden_prioridad[t.prioridad])

print("=== GESTOR DE TAREAS ===")
print("\\nTodas las tareas (ordenadas por prioridad):")
for tarea in tareas_ordenadas:
    print(f"  {tarea}")

stats = obtener_estadisticas(tareas)
print(f"\\n=== Estadísticas ===")
print(f"Total: {stats['total']}")
print(f"Completadas: {stats['completadas']} ({stats['porcentaje']:.0f}%)")
print(f"Pendientes: {stats['pendientes']}")
print(f"\\nPor prioridad: {stats['por_prioridad']}")
print(f"\\nPendientes: {', '.join(stats['titulos_pendientes'])}"),`,
    keyPoints: [
      'Un proyecto real integra múltiples conceptos de Python Intermedio',
      'La organización en módulos hace el código mantenible y extensible',
      'Comprehensions simplifican el filtrado y transformación de datos',
      'El manejo de errores y la validación hacen el código robusto',
      'Completar este módulo te da las bases para construir proyectos Python reales',
    ],
    exercise: {
      description: 'Extiende el gestor de tareas con: (1) una función que filtre tareas vencidas usando datetime, (2) una función que exporte las tareas completadas a un archivo CSV, y (3) una función que valide con regex que el título no contenga caracteres especiales.',
      hint: 'Para las fechas vencidas, compara la fecha_vencimiento (strptime) con date.today(). Para CSV, usa el módulo csv. Para el regex, usa r"^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$".',
    },
    quiz: [
      {
        question: '¿Cuál de los siguientes conceptos de Python Intermedio se usa para filtrar tareas completadas de una lista?',
        options: [
          'Expresiones regulares',
          'List comprehensions',
          'Entornos virtuales',
          'El módulo datetime',
        ],
        correctAnswer: 'List comprehensions',
        correctFeedback: '¡Correcto! `[t for t in tareas if t.completada]` es una list comprehension que filtra solo las tareas completadas.',
        incorrectFeedback: 'Las list comprehensions son perfectas para esto: `[t for t in tareas if t.completada]` filtra las tareas completadas de forma elegante y eficiente.',
      },
      {
        question: '¿Cómo ordenarías una lista de tareas por prioridad usando lambda?',
        options: [
          'tareas.sort(prioridad)',
          'sorted(tareas, key=lambda t: t.prioridad)',
          'tareas.order_by("prioridad")',
          'filter(lambda t: t.prioridad, tareas)',
        ],
        correctAnswer: 'sorted(tareas, key=lambda t: t.prioridad)',
        correctFeedback: '¡Correcto! `sorted()` con `key=lambda t: t.prioridad` ordena las tareas según el atributo prioridad usando una función lambda.',
        incorrectFeedback: 'Se usa `sorted(tareas, key=lambda t: t.prioridad)`. La lambda define qué atributo usar para comparar. Si quieres orden personalizado, puedes usar un diccionario de mapeo.',
      },
      {
        question: '¿Qué módulo usarías para registrar cuándo se creó cada tarea?',
        options: ['time', 'datetime', 'calendar', 'schedule'],
        correctAnswer: 'datetime',
        correctFeedback: '¡Exacto! `from datetime import datetime; datetime.now().isoformat()` genera un timestamp con fecha y hora precisas.',
        incorrectFeedback: 'El módulo `datetime` es el indicado. `datetime.now()` devuelve la fecha y hora actual, y `.isoformat()` la convierte a string en formato estándar.',
      },
      {
        question: '¿Por qué es importante el método `to_dict()` en la clase Tarea?',
        options: [
          'Para mostrar la tarea en pantalla',
          'Para convertir la tarea a un formato serializable y guardarlo en JSON',
          'Para comparar dos tareas',
          'Para calcular estadísticas',
        ],
        correctAnswer: 'Para convertir la tarea a un formato serializable y guardarlo en JSON',
        correctFeedback: '¡Correcto! `json.dump()` no puede serializar objetos Python directamente. `to_dict()` convierte el objeto a un diccionario que sí puede guardarse en JSON.',
        incorrectFeedback: '`to_dict()` convierte el objeto a un diccionario de Python, que `json.dump()` puede serializar. Sin esto, no podrías guardar las tareas en un archivo JSON.',
      },
      {
        question: '¿Qué patrón de diseño aplica el método `from_dict()` como método de clase?',
        options: [
          'Singleton — una sola instancia',
          'Factory method — crea instancias desde datos externos',
          'Observer — notifica cambios',
          'Iterator — recorre una colección',
        ],
        correctAnswer: 'Factory method — crea instancias desde datos externos',
        correctFeedback: '¡Correcto! `from_dict()` como `@classmethod` es un factory method: crea instancias de Tarea a partir de diccionarios (por ejemplo, leídos de un archivo JSON).',
        incorrectFeedback: '`from_dict()` como `@classmethod` es un factory method. Permite crear objetos desde datos externos (diccionarios de JSON, CSV, etc.) sin necesidad de conocer los detalles de construcción.',
      },
      {
        question: '¿Qué ventaja tiene organizar el proyecto en módulos separados (tarea.py, gestor.py, reportes.py)?',
        options: [
          'El código es más lento pero más organizado',
          'Cada módulo tiene una responsabilidad clara, facilitando el mantenimiento y pruebas',
          'Python requiere que cada clase esté en su propio archivo',
          'Permite que el proyecto funcione sin entorno virtual',
        ],
        correctAnswer: 'Cada módulo tiene una responsabilidad clara, facilitando el mantenimiento y pruebas',
        correctFeedback: '¡Exacto! Separar por responsabilidad (principio de responsabilidad única) hace que sea más fácil entender, modificar y probar cada parte del sistema.',
        incorrectFeedback: 'La separación en módulos aplica el principio de responsabilidad única: cada módulo hace una cosa y la hace bien. Esto facilita el mantenimiento, las pruebas y el trabajo en equipo.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module20: Module = {
  number: 20,
  title: 'Organización de proyectos Python',
  level: 'intermedio',
  lessons: lessonsModule20,
}
