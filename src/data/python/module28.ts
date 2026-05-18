import type { Lesson } from '@/types'

export const lessonsModule28: Lesson[] = [
  {
    slug: 'herramienta-linea-comandos',
    title: '¿Qué es una herramienta de línea de comandos?',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 150,
    description: 'Aprende qué es una CLI y por qué muchas herramientas profesionales funcionan desde la terminal.',
    explanation: `## ¿Qué es una herramienta de línea de comandos?

Una **CLI** (Command Line Interface) es un programa que se controla escribiendo comandos en la terminal, sin interfaz gráfica. Las CLIs son la columna vertebral del mundo profesional de la programación.

### CLIs famosas que ya usas

| Herramienta | Comando | Para qué sirve |
|-------------|---------|----------------|
| Git | \`git commit -m "mensaje"\` | Control de versiones |
| pip | \`pip install requests\` | Instalar paquetes Python |
| npm | \`npm install react\` | Instalar paquetes Node |
| curl | \`curl https://api.ejemplo.com\` | Hacer peticiones HTTP |
| Python | \`python mi_script.py\` | Ejecutar scripts |

### ¿Por qué las CLIs son tan poderosas?

1. **Scriptables**: puedes encadenar varios comandos
   \`\`\`bash
   python limpiar.py datos.csv && python analizar.py datos_limpios.csv
   \`\`\`

2. **Automatizables**: puedes programarlas con cron o Task Scheduler
   \`\`\`bash
   # Ejecutar cada lunes a las 9am
   0 9 * * 1 python /scripts/reporte_semanal.py
   \`\`\`

3. **Sin GUI**: funcionan en servidores sin pantalla

4. **Compuestas**: la salida de uno es la entrada del siguiente

### Anatomía de un comando CLI

\`\`\`
python herramienta.py --input datos.csv --output reporte.txt --verbose
   │         │              │                  │                │
   │         │         argumento            argumento         flag
   │      nombre           opcional            opcional       (true/false)
   │      del script
intérprete
\`\`\`

### Script interactivo vs herramienta CLI

**Script interactivo** (con input()):
\`\`\`python
nombre = input("¿Cuál es tu nombre? ")
print(f"Hola, {nombre}")
\`\`\`

Uso: \`python saludo.py\` → espera que el usuario escriba

**Herramienta CLI** (con argumentos):
\`\`\`python
import sys
nombre = sys.argv[1]
print(f"Hola, {nombre}")
\`\`\`

Uso: \`python saludo.py Ana\` → directo, no espera input

### ¿Cuándo hacer una CLI?

- Cuando el script lo usarán otras personas
- Cuando necesitas automatizarlo (correr sin intervención humana)
- Cuando tiene opciones configurables
- Cuando quieres integrarlo con otros comandos

### Lo que construirás en este módulo

Al final de este módulo tendrás una herramienta CLI completa que:
\`\`\`bash
python organizar.py --folder ~/Downloads --dry-run --verbose
python organizar.py --folder ~/Documents --output-log registro.txt
python organizar.py --help
\`\`\``,
    codeExample: `# ¿Qué es una CLI? Ejemplos y comparaciones

import sys
import os

# ============================================================
# COMPARACIÓN: Script interactivo vs herramienta CLI
# ============================================================

# --- VERSIÓN INTERACTIVA ---
def saludar_interactivo():
    """Espera que el usuario ingrese datos."""
    nombre = input("¿Cuál es tu nombre? ")
    edad = int(input("¿Cuántos años tienes? "))
    print(f"Hola {nombre}, tienes {edad} años.")

# Uso: python script.py
# El usuario escribe los datos cuando se lo piden

# --- VERSIÓN CLI ---
def saludar_cli(nombre, edad):
    """Recibe datos como argumentos desde la terminal."""
    print(f"Hola {nombre}, tienes {edad} años.")

# Uso: python script.py Ana 28
# No espera nada del usuario, funciona automáticamente

# ============================================================
# ANATOMÍA DE UN COMANDO
# ============================================================

print("=== ANATOMÍA DE UN COMANDO CLI ===\\n")

print("Ejemplo de comando:")
print("  python herramienta.py --input datos.csv --output resultado.txt --verbose")
print()
print("Partes:")
print("  python          → intérprete")
print("  herramienta.py  → nombre del script")
print("  --input         → argumento con nombre")
print("  datos.csv       → valor del argumento --input")
print("  --output        → otro argumento con nombre")
print("  resultado.txt   → valor del argumento --output")
print("  --verbose       → flag (activa/desactiva algo)")
print()

# ============================================================
# ¿POR QUÉ LAS CLIs SON PODEROSAS?
# ============================================================

print("=== VENTAJAS DE LAS CLIs ===\\n")

ventajas = [
    ("Automatizables", "Se pueden ejecutar sin intervención humana"),
    ("Scriptables", "Se encadenan con otros comandos: cmd1 && cmd2"),
    ("Sin GUI", "Funcionan en servidores, Docker, CI/CD"),
    ("Compuestas", "La salida de una puede ser la entrada de otra"),
    ("Parametrizables", "Diferentes opciones según el caso de uso"),
]

for ventaja, descripcion in ventajas:
    print(f"  ✓ {ventaja}: {descripcion}")

print()

# ============================================================
# EJEMPLO: Leer sys.argv para ver cómo funciona
# ============================================================

print("=== sys.argv en este momento ===")
print(f"sys.argv = {sys.argv}")
print(f"sys.argv[0] = {sys.argv[0]} (nombre del script)")
if len(sys.argv) > 1:
    print(f"sys.argv[1:] = {sys.argv[1:]} (argumentos)")
else:
    print("sys.argv[1:] = [] (sin argumentos adicionales)")

print()
print("Para pasar argumentos, ejecuta así:")
print("  python script.py argumento1 argumento2")
print("  python script.py --nombre Ana --edad 28")`,
    keyPoints: [
      'CLI (Command Line Interface) es un programa controlado por texto desde la terminal, sin GUI',
      'Las CLIs son automatizables, scriptables, y funcionan en servidores sin pantalla',
      'Diferencia clave: scripts interactivos usan input(), las CLIs usan argumentos del comando',
      'La anatomía de un comando: intérprete + script + argumentos + flags',
      'CLIs famosas que ya usas: git, pip, npm, curl, python',
    ],
    exercise: {
      description: 'Escribe un script simple que reciba el nombre de una ciudad como argumento (sys.argv[1]) e imprima un mensaje de bienvenida. Luego extiéndelo para que si no se pasa ningún argumento, muestre un mensaje de uso como: "Uso: python bienvenida.py <ciudad>". Prueba invocarlo de ambas formas.',
      hint: 'Usa `if len(sys.argv) < 2: print("Uso: python bienvenida.py <ciudad>"); sys.exit(1)` para validar que el argumento existe antes de usarlo. sys.exit(1) sale del programa con código de error.',
    },
    quiz: [
      {
        question: '¿Qué significa CLI?',
        options: [
          'Coded Language Interface',
          'Command Line Interface',
          'Computer Logic Input',
          'Custom Library Integration',
        ],
        correctAnswer: 'Command Line Interface',
        correctFeedback: '¡Correcto! CLI = Command Line Interface. Es una interfaz basada en texto donde el usuario interactúa escribiendo comandos, sin interfaz gráfica.',
        incorrectFeedback: 'CLI significa Command Line Interface: una interfaz donde el usuario controla el programa escribiendo comandos de texto en la terminal.',
      },
      {
        question: '¿Cuál de estas NO es una herramienta CLI famosa?',
        options: [
          'git',
          'pip',
          'Microsoft Word',
          'curl',
        ],
        correctAnswer: 'Microsoft Word',
        correctFeedback: '¡Correcto! Microsoft Word es una aplicación con interfaz gráfica (GUI), no una CLI. git, pip y curl son herramientas de línea de comandos.',
        incorrectFeedback: 'Microsoft Word es una aplicación gráfica (GUI). git, pip y curl son CLIs: se usan escribiendo comandos en la terminal.',
      },
      {
        question: '¿Cuál es la diferencia principal entre un script interactivo y una herramienta CLI?',
        options: [
          'Las CLIs son más rápidas en ejecución',
          'Los scripts interactivos usan input(), las CLIs reciben argumentos al invocarlos',
          'Las CLIs solo funcionan en Linux',
          'Los scripts interactivos no pueden usar funciones',
        ],
        correctAnswer: 'Los scripts interactivos usan input(), las CLIs reciben argumentos al invocarlos',
        correctFeedback: '¡Correcto! Un script interactivo espera que el usuario escriba datos mientras corre. Una CLI recibe todo lo necesario como argumentos al momento de invocarla.',
        incorrectFeedback: 'La diferencia es cuándo se reciben los datos: interactivo = durante la ejecución con input(), CLI = al invocar el comando como argumentos.',
      },
      {
        question: 'En el comando "python herramienta.py --input datos.csv", ¿qué es "--input"?',
        options: [
          'El nombre del script',
          'Un argumento con nombre (named argument)',
          'El nombre del archivo de salida',
          'El intérprete de Python',
        ],
        correctAnswer: 'Un argumento con nombre (named argument)',
        correctFeedback: '¡Correcto! --input es un argumento con nombre. Su valor es "datos.csv". Los argumentos con nombre empiezan con -- y pueden ser opcionales.',
        incorrectFeedback: '--input es un argumento con nombre. Empieza con -- y va seguido de su valor (datos.csv). Python es el intérprete y herramienta.py es el script.',
      },
      {
        question: '¿Por qué las CLIs son útiles en servidores?',
        options: [
          'Porque los servidores son más rápidos',
          'Porque los servidores frecuentemente no tienen interfaz gráfica',
          'Porque Python solo funciona en servidores',
          'Porque las CLIs usan menos RAM siempre',
        ],
        correctAnswer: 'Porque los servidores frecuentemente no tienen interfaz gráfica',
        correctFeedback: '¡Correcto! Los servidores suelen ser máquinas remotas sin monitor ni interfaz gráfica. Las CLIs son perfectas para este entorno porque solo necesitan texto.',
        incorrectFeedback: 'Los servidores generalmente no tienen GUI (pantalla, mouse, ventanas). Las CLIs funcionan perfecto en ese entorno ya que solo necesitan acceso a la terminal.',
      },
      {
        question: '¿Qué significa encadenar comandos CLI con &&?',
        options: [
          'Ejecutar ambos comandos al mismo tiempo en paralelo',
          'Ejecutar el segundo comando solo si el primero tuvo éxito',
          'Combinar los dos scripts en uno solo',
          'Repetir el mismo comando dos veces',
        ],
        correctAnswer: 'Ejecutar el segundo comando solo si el primero tuvo éxito',
        correctFeedback: '¡Correcto! cmd1 && cmd2 ejecuta cmd2 solo si cmd1 terminó sin errores (código de salida 0). Esto permite pipelines seguros.',
        incorrectFeedback: 'cmd1 && cmd2 ejecuta cmd2 únicamente si cmd1 fue exitoso. Si cmd1 falla, cmd2 no se ejecuta. Esto previene errores en cadena.',
      },
      {
        question: '¿Cuándo es más apropiado crear una herramienta CLI en lugar de un script interactivo?',
        options: [
          'Cuando el script es muy corto',
          'Cuando necesitas automatizarlo o que otros puedan usarlo sin intervención',
          'Solo cuando el script corre en Linux',
          'Cuando el script usa más de 10 módulos',
        ],
        correctAnswer: 'Cuando necesitas automatizarlo o que otros puedan usarlo sin intervención',
        correctFeedback: '¡Correcto! Las CLIs brillan cuando el script debe correr automáticamente (cron, CI/CD) o cuando otros lo usarán y necesitan configurarlo con opciones.',
        incorrectFeedback: 'Las CLIs son ideales para automatización (sin intervención humana) y cuando el script tiene opciones configurables. Los scripts interactivos son más adecuados para uso manual paso a paso.',
      },
    ],
  },
  {
    slug: 'sys-argv',
    title: 'Leer argumentos con sys.argv',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 151,
    description: 'Aprende a recibir argumentos desde la terminal usando sys.argv.',
    explanation: `## Leer argumentos con sys.argv

\`sys.argv\` es la forma más básica de recibir información desde la terminal. Es una lista de strings que contiene el nombre del script y todos los argumentos pasados al invocarlo.

### ¿Qué es sys.argv?

\`\`\`python
import sys

# Si ejecutas: python greet.py Ana 28
print(sys.argv)
# ['greet.py', 'Ana', '28']
#      ↑           ↑      ↑
#  argv[0]     argv[1]  argv[2]
# (el script) (primer  (segundo
#             argumento) argumento)
\`\`\`

**Siempre recuerda:**
- \`sys.argv[0]\` = nombre del script (siempre presente)
- \`sys.argv[1]\` en adelante = argumentos del usuario
- Todos son **strings**, incluso los números

### Leer argumentos posicionales

\`\`\`python
import sys

# Uso: python greet.py Ana 25
if len(sys.argv) < 3:
    print("Uso: python greet.py <nombre> <edad>")
    sys.exit(1)

nombre = sys.argv[1]
edad = int(sys.argv[2])  # convertir a int manualmente

print(f"Hola {nombre}, tienes {edad} años.")
\`\`\`

### Validar argumentos

\`\`\`python
import sys

def validar_argumentos():
    if len(sys.argv) != 3:
        print(f"Error: se esperan 2 argumentos, recibidos: {len(sys.argv) - 1}")
        print("Uso: python script.py <archivo_entrada> <archivo_salida>")
        sys.exit(1)

    archivo_entrada = sys.argv[1]
    if not os.path.exists(archivo_entrada):
        print(f"Error: el archivo '{archivo_entrada}' no existe.")
        sys.exit(1)

    return sys.argv[1], sys.argv[2]
\`\`\`

### Ejemplo completo: saludador

\`\`\`python
# Uso: python greet.py Ana 25
# → "Hola Ana, tienes 25 años."

import sys

def main():
    if len(sys.argv) < 3:
        print("Uso: python greet.py <nombre> <edad>")
        sys.exit(1)

    nombre = sys.argv[1]

    try:
        edad = int(sys.argv[2])
    except ValueError:
        print(f"Error: '{sys.argv[2]}' no es una edad válida.")
        sys.exit(1)

    print(f"Hola {nombre}, tienes {edad} años.")

if __name__ == '__main__':
    main()
\`\`\`

### Limitaciones de sys.argv

sys.argv es simple pero tiene desventajas:

| Característica | sys.argv | argparse |
|----------------|----------|----------|
| \`--flags\` con nombre | ❌ Manual | ✅ Automático |
| Mensaje de ayuda | ❌ Manual | ✅ Automático |
| Conversión de tipos | ❌ Manual | ✅ Automático |
| Validación | ❌ Manual | ✅ Automático |
| Complejidad | Baja | Media |

Para scripts sencillos con 1-2 argumentos, sys.argv es suficiente. Para algo más complejo, usa argparse (siguiente lección).`,
    codeExample: `import sys
import os

# ============================================================
# LEER ARGUMENTOS CON sys.argv
# ============================================================

print("=== sys.argv EXPLICADO ===\\n")

# sys.argv siempre es una lista de strings
print(f"sys.argv actual: {sys.argv}")
print(f"Número de elementos: {len(sys.argv)}")
print(f"Nombre del script: {sys.argv[0]}")
print()

# ============================================================
# EJEMPLO 1: Script con 1 argumento
# Uso: python script.py nombre
# ============================================================

def ejemplo_un_argumento():
    """Muestra cómo leer un argumento posicional."""
    # Verificar que se pasó el argumento
    if len(sys.argv) < 2:
        print("Uso: python script.py <nombre>")
        print("Ejemplo: python script.py Ana")
        sys.exit(1)

    nombre = sys.argv[1]
    print(f"Hola, {nombre}!")

# ============================================================
# EJEMPLO 2: Script con 2 argumentos y conversión de tipo
# Uso: python script.py Ana 25
# ============================================================

def ejemplo_dos_argumentos():
    """Muestra lectura de argumentos con validación y conversión."""
    # Verificar cantidad
    if len(sys.argv) != 3:
        print(f"Error: se esperan exactamente 2 argumentos.")
        print("Uso: python script.py <nombre> <edad>")
        sys.exit(1)

    nombre = sys.argv[1]

    # Convertir con manejo de error
    try:
        edad = int(sys.argv[2])
    except ValueError:
        print(f"Error: '{sys.argv[2]}' no es un número entero válido.")
        sys.exit(1)

    if edad < 0 or edad > 150:
        print(f"Error: la edad {edad} no parece válida.")
        sys.exit(1)

    print(f"Hola {nombre}, tienes {edad} años.")
    if edad >= 18:
        print("Eres mayor de edad.")
    else:
        print(f"Faltan {18 - edad} años para ser mayor de edad.")

# ============================================================
# EJEMPLO 3: Verificar si un archivo existe
# Uso: python script.py archivo.txt
# ============================================================

def verificar_archivo():
    """Ejemplo: verificar que el archivo argumento existe."""
    if len(sys.argv) < 2:
        print("Uso: python script.py <ruta_archivo>")
        sys.exit(1)

    ruta = sys.argv[1]

    if not os.path.exists(ruta):
        print(f"Error: el archivo '{ruta}' no existe.")
        sys.exit(1)

    tamano = os.path.getsize(ruta)
    print(f"Archivo: {ruta}")
    print(f"Tamaño: {tamano} bytes")

# ============================================================
# DEMOSTRACIÓN (simulando argumentos)
# ============================================================

print("--- Simulación con argumentos ---\\n")

# Simular: python script.py Ana 28
argumentos_simulados = ['script.py', 'Ana', '28']
nombre_sim = argumentos_simulados[1]
edad_sim = int(argumentos_simulados[2])

print(f"Argumentos: {argumentos_simulados}")
print(f"nombre = sys.argv[1] = '{nombre_sim}'")
print(f"edad   = int(sys.argv[2]) = {edad_sim}")
print(f"Resultado: Hola {nombre_sim}, tienes {edad_sim} años.")
print()

# Mostrar por qué todos son strings
print("--- Todos los valores son strings ---")
args_ejemplo = ['calculadora.py', '10', '20']
print(f"sys.argv = {args_ejemplo}")
print(f"type(sys.argv[1]) = {type(args_ejemplo[1])}  ← string, no int!")
print(f"type(int(sys.argv[1])) = {type(int(args_ejemplo[1]))}  ← convertido")
print()
print("IMPORTANTE: siempre convierte los argumentos al tipo correcto")
print("usando int(), float(), etc. según corresponda.")`,
    keyPoints: [
      'sys.argv es una lista de strings que contiene el script y todos los argumentos de la terminal',
      'sys.argv[0] siempre es el nombre del script, sys.argv[1:] son los argumentos del usuario',
      'Todos los argumentos son strings; debes convertirlos manualmente con int(), float(), etc.',
      'Siempre valida que llegaron suficientes argumentos con len(sys.argv) antes de acceder a ellos',
      'sys.exit(1) termina el script con código de error cuando hay problemas',
    ],
    exercise: {
      description: 'Crea un script calculadora.py que reciba tres argumentos: dos números y una operación (+, -, *, /). Ejemplos: `python calculadora.py 10 + 5` → "10 + 5 = 15", `python calculadora.py 20 / 4` → "20 / 4 = 5.0". Maneja errores: argumentos faltantes, números inválidos, división por cero, y operación desconocida.',
      hint: 'Usa un diccionario de operaciones: `ops = {"+": lambda a,b: a+b, "-": lambda a,b: a-b, "*": lambda a,b: a*b, "/": lambda a,b: a/b}`. Verifica que la operación existe con `if sys.argv[2] not in ops`. Para división por cero: atrapa ZeroDivisionError.',
    },
    quiz: [
      {
        question: '¿Qué contiene sys.argv[0] siempre?',
        options: [
          'El primer argumento del usuario',
          'El nombre del script que se está ejecutando',
          'El número total de argumentos',
          'El directorio desde donde se ejecuta',
        ],
        correctAnswer: 'El nombre del script que se está ejecutando',
        correctFeedback: '¡Correcto! sys.argv[0] siempre es el nombre del script. Los argumentos del usuario empiezan en sys.argv[1].',
        incorrectFeedback: 'sys.argv[0] es siempre el nombre del script. sys.argv[1] es el primer argumento del usuario, sys.argv[2] el segundo, etc.',
      },
      {
        question: 'Si ejecutas "python script.py Ana 25 programadora", ¿qué es sys.argv[2]?',
        options: [
          '"Ana"',
          '"25"',
          '"programadora"',
          '25 (como entero)',
        ],
        correctAnswer: '"25"',
        correctFeedback: '¡Correcto! sys.argv = ["script.py", "Ana", "25", "programadora"]. sys.argv[2] es "25" como string, no como entero. Necesitas int(sys.argv[2]) para obtener el número.',
        incorrectFeedback: 'sys.argv[0]="script.py", sys.argv[1]="Ana", sys.argv[2]="25", sys.argv[3]="programadora". Además, es string "25", no el entero 25.',
      },
      {
        question: '¿Por qué es necesario usar int(sys.argv[1]) para leer un número?',
        options: [
          'Porque Python no puede leer números de la terminal',
          'Porque todos los elementos de sys.argv son strings, incluso los números',
          'Porque sys.argv solo guarda el primer dígito',
          'Porque int() valida que el argumento exista',
        ],
        correctAnswer: 'Porque todos los elementos de sys.argv son strings, incluso los números',
        correctFeedback: '¡Correcto! sys.argv contiene solo strings. Si el usuario escribe "25", sys.argv recibe "25" (string). Debes convertirlo con int() o float() para hacer operaciones matemáticas.',
        incorrectFeedback: 'sys.argv guarda todo como strings. "25" es el carácter 2 seguido del carácter 5, no el número 25. int() lo convierte al número entero.',
      },
      {
        question: '¿Qué hace sys.exit(1) en un script?',
        options: [
          'Muestra el mensaje "Error 1"',
          'Termina el script con código de salida 1 (indica error)',
          'Salta a la línea 1 del script',
          'Espera 1 segundo antes de continuar',
        ],
        correctAnswer: 'Termina el script con código de salida 1 (indica error)',
        correctFeedback: '¡Correcto! sys.exit(1) termina el programa inmediatamente con código de salida 1, que convencionalmente indica que algo salió mal. sys.exit(0) indica éxito.',
        incorrectFeedback: 'sys.exit(N) termina el script con el código N. Por convención: 0 = éxito, 1 (o cualquier valor distinto de 0) = error. Las CLIs usan esto para encadenarse con &&.',
      },
      {
        question: '¿Cuál es la forma correcta de verificar que el usuario pasó exactamente 2 argumentos?',
        options: [
          'if sys.argv == 2:',
          'if len(sys.argv) == 3:',
          'if len(sys.argv) == 2:',
          'if sys.argv.count() == 2:',
        ],
        correctAnswer: 'if len(sys.argv) == 3:',
        correctFeedback: '¡Correcto! Si el usuario pasa 2 argumentos, sys.argv tiene 3 elementos: el nombre del script + los 2 argumentos. Entonces len(sys.argv) == 3.',
        incorrectFeedback: 'sys.argv siempre incluye el nombre del script. Si el usuario pasa 2 argumentos, sys.argv tiene 3 elementos: [script, arg1, arg2]. Por eso verificas len(sys.argv) == 3.',
      },
      {
        question: '¿Cuándo es suficiente usar sys.argv en lugar de argparse?',
        options: [
          'Nunca, siempre se debe usar argparse',
          'Para scripts simples con 1-2 argumentos posicionales y sin flags',
          'Cuando el script tiene más de 10 argumentos',
          'Solo en Python 2',
        ],
        correctAnswer: 'Para scripts simples con 1-2 argumentos posicionales y sin flags',
        correctFeedback: '¡Correcto! Para algo como "python convertir.py entrada.csv salida.json", sys.argv es perfecto. Para --verbose, --dry-run, --help automático, usa argparse.',
        incorrectFeedback: 'sys.argv es apropiado para scripts simples con pocos argumentos posicionales. Cuando necesitas --flags, tipos automáticos, o --help generado, argparse es mejor.',
      },
      {
        question: '¿Qué pasa si accedes a sys.argv[1] cuando el usuario no pasó argumentos?',
        options: [
          'Python devuelve None automáticamente',
          'Se lanza un IndexError',
          'Python devuelve una cadena vacía',
          'El script se cierra automáticamente',
        ],
        correctAnswer: 'Se lanza un IndexError',
        correctFeedback: '¡Correcto! Si sys.argv solo tiene un elemento (el script) e intentas acceder a sys.argv[1], Python lanza IndexError: list index out of range. Por eso siempre validas con len(sys.argv) primero.',
        incorrectFeedback: 'Si sys.argv = ["script.py"] y accedes a sys.argv[1], Python lanza IndexError porque el índice 1 no existe. Siempre verifica len(sys.argv) antes de acceder.',
      },
    ],
  },
  {
    slug: 'argparse',
    title: 'Usar argparse',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 152,
    description: 'Aprende a crear comandos más profesionales usando argparse.',
    explanation: `## Usar argparse para CLIs profesionales

\`argparse\` es el módulo estándar de Python para crear interfaces de línea de comandos. Genera automáticamente mensajes de ayuda, valida argumentos y convierte tipos.

### Estructura básica

\`\`\`python
import argparse

# 1. Crear el parser
parser = argparse.ArgumentParser(description='Descripción de la herramienta')

# 2. Agregar argumentos
parser.add_argument('nombre')                    # posicional (obligatorio)
parser.add_argument('--edad', type=int)          # opcional con nombre

# 3. Parsear los argumentos
args = parser.parse_args()

# 4. Usar los valores
print(f"Hola {args.nombre}, tienes {args.edad} años")
\`\`\`

### Tipos de argumentos

**Argumento posicional** (sin --):
\`\`\`python
parser.add_argument('archivo')  # obligatorio, sin nombre
\`\`\`

**Argumento opcional** (con --):
\`\`\`python
parser.add_argument('--salida', default='resultado.txt')
\`\`\`

**Con conversión de tipo automática:**
\`\`\`python
parser.add_argument('--cantidad', type=int, default=10)
parser.add_argument('--precio', type=float)
\`\`\`

**Obligatorio:**
\`\`\`python
parser.add_argument('--entrada', required=True, help='Archivo de entrada')
\`\`\`

### El mensaje --help automático

Cuando defines argumentos con argparse, obtienes --help gratis:

\`\`\`
$ python conversor.py --help
usage: conversor.py [-h] --input INPUT [--output OUTPUT] [--delimiter DELIMITER]

Convierte archivos CSV

options:
  -h, --help            show this help message and exit
  --input INPUT         Archivo CSV de entrada (required)
  --output OUTPUT       Archivo de salida (default: resultado.csv)
  --delimiter DELIMITER Separador de columnas (default: ,)
\`\`\`

### Acceder a los valores

\`\`\`python
args = parser.parse_args()

# Los -- se convierten en atributos del objeto args
# --input → args.input
# --output-file → args.output_file (guiones a underscores)

print(args.input)
print(args.output)
print(args.delimiter)
\`\`\`

### Ejemplo completo: conversor CSV

\`\`\`python
import argparse
import csv
import json

def convertir_csv_a_json(entrada, salida, delimiter):
    with open(entrada, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter=delimiter)
        datos = list(reader)

    with open(salida, 'w', encoding='utf-8') as f:
        json.dump(datos, f, indent=2, ensure_ascii=False)

    print(f"Convertidos {len(datos)} registros a {salida}")

def main():
    parser = argparse.ArgumentParser(description='Convierte archivos CSV a JSON')
    parser.add_argument('--input', required=True, help='Archivo CSV de entrada')
    parser.add_argument('--output', default='resultado.json', help='Archivo de salida')
    parser.add_argument('--delimiter', default=',', help='Separador (default: coma)')
    args = parser.parse_args()

    convertir_csv_a_json(args.input, args.output, args.delimiter)

if __name__ == '__main__':
    main()
\`\`\``,
    codeExample: `import argparse

# ============================================================
# ARGPARSE: DE LO BÁSICO A LO COMPLETO
# ============================================================

# --- Ejemplo 1: El más simple posible ---
def ejemplo_basico():
    parser = argparse.ArgumentParser(description='Saludador simple')
    parser.add_argument('nombre', help='Tu nombre')
    args = parser.parse_args()
    print(f"Hola, {args.nombre}!")

# Uso: python script.py Ana
# Resultado: Hola, Ana!

# --- Ejemplo 2: Argumentos opcionales con tipos ---
def ejemplo_tipos():
    parser = argparse.ArgumentParser(description='Calculadora de área')

    parser.add_argument('--ancho', type=float, required=True,
                        help='Ancho del rectángulo en metros')
    parser.add_argument('--alto', type=float, required=True,
                        help='Alto del rectángulo en metros')
    parser.add_argument('--unidad', default='m²',
                        help='Unidad de medida (default: m²)')

    args = parser.parse_args()

    area = args.ancho * args.alto
    print(f"Área: {area:.2f} {args.unidad}")

# Uso: python script.py --ancho 5.5 --alto 3.2
# Resultado: Área: 17.60 m²

# --- Ejemplo 3: Conversor CSV completo ---
def crear_parser_conversor():
    """Crea y devuelve el parser del conversor CSV."""
    parser = argparse.ArgumentParser(
        description='Convierte archivos CSV a JSON',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  python conversor.py --input datos.csv
  python conversor.py --input datos.csv --output resultado.json
  python conversor.py --input datos.csv --delimiter ";"
        """
    )

    # Argumentos requeridos
    parser.add_argument(
        '--input',
        required=True,
        help='Archivo CSV de entrada'
    )

    # Argumentos opcionales con defaults
    parser.add_argument(
        '--output',
        default='resultado.json',
        help='Archivo de salida (default: resultado.json)'
    )

    parser.add_argument(
        '--delimiter',
        default=',',
        help='Separador de columnas (default: coma)'
    )

    parser.add_argument(
        '--encoding',
        default='utf-8',
        help='Codificación del archivo (default: utf-8)'
    )

    return parser

# ============================================================
# DEMOSTRACIÓN: Mostrar cómo funciona argparse sin ejecutarlo
# ============================================================

print("=== ARGPARSE EN ACCIÓN ===\\n")

# Crear el parser del ejemplo
parser = crear_parser_conversor()

# Simular --help (lo que el usuario vería)
print("Lo que el usuario ve con --help:")
print("-" * 50)
try:
    # parse_known_args para no fallar en el demo
    args, resto = parser.parse_known_args([
        '--input', 'ventas.csv',
        '--output', 'ventas.json',
        '--delimiter', ';'
    ])
    print(f"args.input     = {args.input!r}")
    print(f"args.output    = {args.output!r}")
    print(f"args.delimiter = {args.delimiter!r}")
    print(f"args.encoding  = {args.encoding!r}  ← valor por defecto")
except SystemExit:
    pass

print()
print("Acceso a los valores:")
print("  args.input     → nombre del archivo de entrada")
print("  args.output    → nombre del archivo de salida")
print("  args.delimiter → separador de columnas")
print()
print("Nota: --output-file se convierte en args.output_file")
print("      (guiones → guiones bajos en el nombre del atributo)")`,
    keyPoints: [
      'argparse genera automáticamente el mensaje --help basado en los argumentos definidos',
      'add_argument() acepta type=int, type=float para conversión automática de tipos',
      'required=True hace que un argumento opcional sea obligatorio',
      'default= define el valor usado si el argumento no se proporciona',
      'Los -- en nombres de argumentos se convierten en _ al acceder: --output-file → args.output_file',
    ],
    exercise: {
      description: 'Crea una herramienta CLI llamada "buscador.py" usando argparse que busque texto en archivos. Debe aceptar: --carpeta (requerida), --texto (requerido, texto a buscar), --extension (opcional, default .txt), --mayusculas (flag opcional, si está activo hace la búsqueda sensible a mayúsculas). Muestra el nombre del archivo y el número de línea donde aparece el texto.',
      hint: 'Usa Path(carpeta).glob(f"*{extension}") para encontrar archivos. Para la búsqueda sin distinción de mayúsculas usa texto.lower() en texto y en línea. Para búsqueda sensible, compara directamente. El número de línea lo obtienes con enumerate(archivo, start=1).',
    },
    quiz: [
      {
        question: '¿Qué hace parser.add_argument("--cantidad", type=int, default=10)?',
        options: [
          'Crea un argumento obligatorio de tipo entero',
          'Crea un argumento opcional que se convierte a int, con valor por defecto 10',
          'Limita la cantidad a un máximo de 10',
          'Crea 10 argumentos llamados "cantidad"',
        ],
        correctAnswer: 'Crea un argumento opcional que se convierte a int, con valor por defecto 10',
        correctFeedback: '¡Correcto! Los argumentos con -- son opcionales. type=int convierte automáticamente el string a entero. default=10 se usa si el usuario no pasa --cantidad.',
        incorrectFeedback: 'Los argumentos con -- son opcionales (no requeridos). type=int hace la conversión automática de string a int. default=10 es el valor si no se pasa el argumento.',
      },
      {
        question: '¿Cómo se accede al valor de --output-file después de args = parser.parse_args()?',
        options: [
          'args["output-file"]',
          'args.output-file',
          'args.output_file',
          'args.get("output_file")',
        ],
        correctAnswer: 'args.output_file',
        correctFeedback: '¡Correcto! argparse convierte los guiones del nombre del argumento en guiones bajos para el atributo. --output-file → args.output_file.',
        incorrectFeedback: 'argparse convierte automáticamente --output-file en el atributo args.output_file (guiones → guiones bajos). Así cumple con las convenciones de nombres en Python.',
      },
      {
        question: '¿Qué ventaja principal da argparse sobre sys.argv?',
        options: [
          'argparse es mucho más rápido',
          'argparse genera --help automáticamente, convierte tipos y valida argumentos',
          'argparse permite más de 10 argumentos',
          'argparse funciona en Python 2 y 3',
        ],
        correctAnswer: 'argparse genera --help automáticamente, convierte tipos y valida argumentos',
        correctFeedback: '¡Correcto! Con argparse obtienes gratis: generación de --help, conversión de tipos (type=int), validación de required, y mensajes de error claros.',
        incorrectFeedback: 'argparse automatiza lo que con sys.argv tendrías que hacer manualmente: generar --help, convertir tipos, validar argumentos requeridos, y mostrar errores claros.',
      },
      {
        question: '¿Cuál es la diferencia entre un argumento posicional y uno opcional en argparse?',
        options: [
          'Los posicionales van al final, los opcionales al inicio',
          'Los posicionales no tienen -- y son obligatorios; los opcionales tienen -- y son opcionales',
          'Los posicionales son más rápidos',
          'Solo puede haber un argumento posicional',
        ],
        correctAnswer: 'Los posicionales no tienen -- y son obligatorios; los opcionales tienen -- y son opcionales',
        correctFeedback: '¡Correcto! add_argument("archivo") crea un posicional obligatorio. add_argument("--archivo") crea uno opcional que se puede hacer requerido con required=True.',
        incorrectFeedback: 'Posicional: add_argument("nombre") → sin --, obligatorio, va por posición. Opcional: add_argument("--nombre") → con --, es optativo por defecto.',
      },
      {
        question: '¿Para qué sirve el parámetro epilog= en ArgumentParser?',
        options: [
          'Para agregar texto al final del mensaje de ayuda, útil para mostrar ejemplos',
          'Para definir la versión del programa',
          'Para el mensaje que se muestra cuando hay un error',
          'Para documentar el autor del script',
        ],
        correctAnswer: 'Para agregar texto al final del mensaje de ayuda, útil para mostrar ejemplos',
        correctFeedback: '¡Correcto! epilog= es texto que aparece al final de --help. Es perfecto para mostrar ejemplos de uso de la herramienta.',
        incorrectFeedback: 'epilog= agrega texto al final del mensaje --help. Se usa comúnmente para mostrar ejemplos de cómo invocar la herramienta.',
      },
      {
        question: '¿Qué hace args = parser.parse_args()?',
        options: [
          'Imprime los argumentos en pantalla',
          'Lee sys.argv, valida y convierte los argumentos, y devuelve un objeto Namespace',
          'Crea el parser de argumentos',
          'Solo funciona si el usuario pasó argumentos',
        ],
        correctAnswer: 'Lee sys.argv, valida y convierte los argumentos, y devuelve un objeto Namespace',
        correctFeedback: '¡Correcto! parse_args() lee sys.argv automáticamente, verifica que los requeridos estén presentes, convierte tipos, y devuelve un objeto donde cada argumento es un atributo.',
        incorrectFeedback: 'parse_args() hace todo el trabajo: lee sys.argv, valida argumentos requeridos, convierte tipos según type=, y devuelve un Namespace para acceder con args.nombre.',
      },
      {
        question: '¿Qué sucede si el usuario no pasa un argumento required=True?',
        options: [
          'El script continúa con el valor None',
          'argparse muestra un error claro y el mensaje de uso, luego sale',
          'Python lanza un TypeError',
          'El script pide el argumento con input()',
        ],
        correctAnswer: 'argparse muestra un error claro y el mensaje de uso, luego sale',
        correctFeedback: '¡Correcto! argparse muestra automáticamente un mensaje como "error: the following arguments are required: --input" y el resumen de uso, luego termina con sys.exit(2).',
        incorrectFeedback: 'argparse maneja automáticamente los argumentos faltantes: muestra "error: argument --X is required" con el resumen de uso, y sale con código de error 2.',
      },
    ],
  },
  {
    slug: 'comandos-opciones',
    title: 'Crear comandos con opciones',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 153,
    description: 'Aprende a agregar flags, opciones y argumentos requeridos a tus herramientas de terminal.',
    explanation: `## Crear comandos con opciones avanzadas

### Flags: argumentos booleanos

Un **flag** activa o desactiva una función sin necesitar un valor:

\`\`\`python
parser.add_argument('--verbose', action='store_true',
                    help='Mostrar información detallada')
parser.add_argument('--quiet', action='store_false',
                    help='Silenciar mensajes')
parser.add_argument('--dry-run', action='store_true',
                    help='Mostrar qué haría sin ejecutarlo')
\`\`\`

Uso:
\`\`\`bash
python herramienta.py --verbose          # args.verbose = True
python herramienta.py                    # args.verbose = False
python herramienta.py --dry-run          # args.dry_run = True
\`\`\`

### Opciones con valores limitados (choices)

\`\`\`python
parser.add_argument('--formato',
                    choices=['csv', 'json', 'excel'],
                    default='csv',
                    help='Formato de salida')
\`\`\`

Si el usuario pasa un valor no válido, argparse muestra automáticamente los valores permitidos.

### Múltiples valores con nargs

\`\`\`python
# Uno o más archivos
parser.add_argument('archivos', nargs='+', help='Archivos a procesar')

# Exactamente 2 valores
parser.add_argument('--rango', nargs=2, type=int, metavar=('MIN', 'MAX'))

# Cero o más
parser.add_argument('--etiquetas', nargs='*')
\`\`\`

### Subcomandos: una herramienta, múltiples acciones

\`\`\`python
parser = argparse.ArgumentParser(description='Gestor de archivos')
subparsers = parser.add_subparsers(dest='comando')

# Subcomando: organizar
org_parser = subparsers.add_parser('organizar', help='Organiza archivos')
org_parser.add_argument('--carpeta', required=True)
org_parser.add_argument('--dry-run', action='store_true')

# Subcomando: buscar
bus_parser = subparsers.add_parser('buscar', help='Busca archivos')
bus_parser.add_argument('texto', help='Texto a buscar')
bus_parser.add_argument('--carpeta', default='.')
\`\`\`

Uso:
\`\`\`bash
python gestor.py organizar --carpeta ~/Downloads --dry-run
python gestor.py buscar "reporte" --carpeta ~/Documents
python gestor.py --help          # ayuda general
python gestor.py organizar --help  # ayuda del subcomando
\`\`\`

### Despachar subcomandos

\`\`\`python
args = parser.parse_args()

if args.comando == 'organizar':
    organizar_archivos(args.carpeta, args.dry_run)
elif args.comando == 'buscar':
    buscar_en_carpeta(args.texto, args.carpeta)
elif args.comando is None:
    parser.print_help()
\`\`\``,
    codeExample: `import argparse

# ============================================================
# OPCIONES AVANZADAS EN ARGPARSE
# ============================================================

def crear_parser_completo():
    """Crea un parser con todos los tipos de opciones."""

    parser = argparse.ArgumentParser(
        description='Herramienta de gestión de archivos',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
  # Organizar con vista previa
  python herramienta.py organizar --carpeta ./docs --dry-run

  # Buscar en múltiples extensiones
  python herramienta.py buscar reporte --carpeta . --formatos txt md py

  # Limpiar con modo silencioso
  python herramienta.py limpiar --carpeta ./temp --quiet
        """
    )

    subparsers = parser.add_subparsers(dest='comando', help='Comandos disponibles')

    # --- Subcomando: organizar ---
    org = subparsers.add_parser('organizar', help='Organiza archivos por tipo')
    org.add_argument('--carpeta', required=True, help='Carpeta a organizar')
    org.add_argument('--dry-run', action='store_true',
                     help='Solo mostrar qué haría, sin ejecutar')
    org.add_argument('--verbose', action='store_true',
                     help='Mostrar cada archivo procesado')

    # --- Subcomando: buscar ---
    bus = subparsers.add_parser('buscar', help='Busca texto en archivos')
    bus.add_argument('texto', help='Texto a buscar')
    bus.add_argument('--carpeta', default='.', help='Carpeta donde buscar')
    bus.add_argument('--formatos', nargs='+', default=['.txt'],
                     help='Extensiones a buscar (ej: .txt .md .py)')
    bus.add_argument('--mayusculas', action='store_true',
                     help='Búsqueda sensible a mayúsculas')

    # --- Subcomando: convertir ---
    conv = subparsers.add_parser('convertir', help='Convierte archivos')
    conv.add_argument('--input', required=True, help='Archivo de entrada')
    conv.add_argument('--output', help='Archivo de salida')
    conv.add_argument('--formato',
                      choices=['json', 'csv', 'txt'],
                      default='json',
                      help='Formato de salida (default: json)')
    conv.add_argument('--cantidad', type=int, default=100,
                      help='Máximo de registros (default: 100)')

    return parser


# ============================================================
# FUNCIONES QUE MANEJAN CADA SUBCOMANDO
# ============================================================

def cmd_organizar(args):
    modo = "PREVIEW" if args.dry_run else "EJECUTANDO"
    print(f"[{modo}] Organizando: {args.carpeta}")
    if args.verbose:
        print("  Modo verbose activado")
    print("  → Clasificando por extensión...")
    print("  → Creando subcarpetas...")
    if args.dry_run:
        print("\\n  (Ningún archivo fue movido — modo dry-run)")
    else:
        print("\\n  ✓ Archivos organizados")

def cmd_buscar(args):
    sensibilidad = "sensible" if args.mayusculas else "insensible"
    print(f"Buscando '{args.texto}' en {args.carpeta}")
    print(f"  Formatos: {', '.join(args.formatos)}")
    print(f"  Mayúsculas: {sensibilidad}")
    print()
    print("  resultado_ventas.txt:12  → 'reporte de ventas'")
    print("  informe.md:34           → 'ver reporte adjunto'")

def cmd_convertir(args):
    salida = args.output or args.input.replace('.csv', f'.{args.formato}')
    print(f"Convirtiendo: {args.input} → {salida}")
    print(f"  Formato: {args.formato}")
    print(f"  Máximo de registros: {args.cantidad}")

# ============================================================
# DEMOSTRACIÓN
# ============================================================

print("=== HERRAMIENTA CON SUBCOMANDOS - DEMO ===\\n")

parser = crear_parser_completo()

# Simular: python herramienta.py organizar --carpeta ./docs --dry-run
print("Simulando: organizar --carpeta ./docs --dry-run --verbose")
args, _ = parser.parse_known_args(
    ['organizar', '--carpeta', './docs', '--dry-run', '--verbose']
)
cmd_organizar(args)

print()

# Simular: buscar
print("Simulando: buscar reporte --formatos .txt .md --mayusculas")
args, _ = parser.parse_known_args(
    ['buscar', 'reporte', '--carpeta', '.', '--formatos', '.txt', '.md', '--mayusculas']
)
cmd_buscar(args)

print()

# Simular: convertir
print("Simulando: convertir --input datos.csv --formato json --cantidad 50")
args, _ = parser.parse_known_args(
    ['convertir', '--input', 'datos.csv', '--formato', 'json', '--cantidad', '50']
)
cmd_convertir(args)`,
    keyPoints: [
      'action="store_true" crea flags booleanos: presentes = True, ausentes = False',
      'choices=["a","b","c"] limita los valores válidos y argparse valida automáticamente',
      'nargs="+" permite pasar uno o más valores para un mismo argumento',
      'add_subparsers() permite crear subcomandos como git commit, git push',
      'dest="comando" en add_subparsers() guarda el nombre del subcomando en args.comando',
    ],
    exercise: {
      description: 'Crea una herramienta CLI con subcomandos para gestionar una lista de tareas (guardada en JSON). Debe tener: `python tareas.py agregar "Comprar leche" --prioridad alta`, `python tareas.py listar --estado pendiente`, `python tareas.py completar 3`, `python tareas.py borrar 3`. Implementa argparse completo para cada subcomando.',
      hint: 'Usa add_subparsers(dest="comando"). Para agregar: add_argument("descripcion") + add_argument("--prioridad", choices=["alta","media","baja"], default="media"). Para listar: add_argument("--estado", choices=["pendiente","completado","todos"], default="todos").',
    },
    quiz: [
      {
        question: '¿Qué hace action="store_true" en add_argument()?',
        options: [
          'Guarda el string "True" como valor',
          'Hace el argumento obligatorio',
          'Hace que el argumento sea True si está presente, False si no está',
          'Convierte el argumento a booleano automáticamente',
        ],
        correctAnswer: 'Hace que el argumento sea True si está presente, False si no está',
        correctFeedback: '¡Correcto! Con store_true: si escribes --verbose, args.verbose = True. Si no escribes --verbose, args.verbose = False. Es el patrón perfecto para flags.',
        incorrectFeedback: 'store_true crea un flag: presente → True, ausente → False. No necesita valor: python script.py --verbose activa el flag, python script.py lo deja en False.',
      },
      {
        question: '¿Qué pasa si el usuario pasa --formato excel cuando choices=["csv","json","txt"]?',
        options: [
          'Python ignora el valor y usa el default',
          'argparse muestra un error con los valores válidos y sale',
          'El programa continúa con args.formato = "excel"',
          'Se lanza un ValueError en el código',
        ],
        correctAnswer: 'argparse muestra un error con los valores válidos y sale',
        correctFeedback: '¡Correcto! argparse valida automáticamente contra choices. Si el valor no está en la lista, muestra: "error: argument --formato: invalid choice: excel (choose from csv, json, txt)".',
        incorrectFeedback: 'argparse valida choices automáticamente. Si el valor no está en la lista, muestra un error con los valores válidos y termina. No necesitas validar manualmente.',
      },
      {
        question: '¿Qué hace nargs="+" al agregar un argumento?',
        options: [
          'Hace el argumento positivo (mayor que 0)',
          'Permite pasar uno o más valores para ese argumento',
          'Requiere exactamente un valor',
          'Agrega el argumento al final del comando',
        ],
        correctAnswer: 'Permite pasar uno o más valores para ese argumento',
        correctFeedback: '¡Correcto! nargs="+" acepta uno o más valores. El resultado es una lista. nargs="*" acepta cero o más, nargs=2 acepta exactamente 2.',
        incorrectFeedback: 'nargs="+" permite uno o más valores: --archivos a.txt b.txt c.txt → args.archivos = ["a.txt", "b.txt", "c.txt"]. Sin nargs, solo se acepta un valor.',
      },
      {
        question: '¿Cómo se accede al nombre del subcomando elegido si usas add_subparsers(dest="comando")?',
        options: [
          'args.subparser',
          'args.subcommand',
          'args.comando',
          'parser.dest',
        ],
        correctAnswer: 'args.comando',
        correctFeedback: '¡Correcto! dest="comando" define el nombre del atributo en el objeto args. Si el usuario escribe `python app.py organizar`, args.comando == "organizar".',
        incorrectFeedback: 'El parámetro dest en add_subparsers() define cómo se llama el atributo: dest="comando" → args.comando contiene el nombre del subcomando elegido.',
      },
      {
        question: '¿Cuál es la ventaja de usar subcomandos en lugar de flags para distintas acciones?',
        options: [
          'Los subcomandos son más rápidos',
          'Cada subcomando puede tener sus propios argumentos específicos, como git commit vs git push',
          'Los subcomandos no necesitan argparse',
          'Los flags no pueden coexistir con subcomandos',
        ],
        correctAnswer: 'Cada subcomando puede tener sus propios argumentos específicos, como git commit vs git push',
        correctFeedback: '¡Correcto! Los subcomandos permiten que cada acción tenga sus propios argumentos. git commit tiene --message, git push tiene --force. Son más organizados que un montón de flags.',
        incorrectFeedback: 'Los subcomandos permiten agrupar funcionalidades relacionadas con sus propios argumentos. "app organizar --carpeta X" y "app buscar texto --formatos .txt" tienen argumentos completamente distintos.',
      },
      {
        question: '¿Qué hace --dry-run en una CLI típica?',
        options: [
          'Ejecuta el comando más rápido',
          'Muestra qué haría el comando sin realizar cambios reales',
          'Ejecuta el comando sin mostrar output',
          'Limpia los archivos temporales antes de ejecutar',
        ],
        correctAnswer: 'Muestra qué haría el comando sin realizar cambios reales',
        correctFeedback: '¡Correcto! --dry-run es una convención de CLIs: muestra el plan de acción sin ejecutarlo. Permite verificar que el comando haría lo correcto antes de aplicar cambios irreversibles.',
        incorrectFeedback: '--dry-run (ejecución en seco) es una convención: el programa muestra qué haría sin hacer nada real. Muy útil en herramientas que modifican o borran archivos.',
      },
      {
        question: '¿Cuál es el valor de args.verbose cuando el usuario no escribe --verbose?',
        options: [
          'None',
          'True',
          'False',
          'Se lanza un AttributeError',
        ],
        correctAnswer: 'False',
        correctFeedback: '¡Correcto! Con action="store_true", el valor por defecto es False cuando el flag no está presente. El flag solo se activa cuando el usuario lo escribe explícitamente.',
        incorrectFeedback: 'Con action="store_true", el default implícito es False. El flag ausente = False, el flag presente = True. Puedes confirmar esto con default=False explícito.',
      },
    ],
  },
  {
    slug: 'ayuda-cli',
    title: 'Mostrar ayuda al usuario',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 154,
    description: 'Aprende a crear mensajes de ayuda claros para que otros puedan usar tus scripts.',
    explanation: `## Mostrar ayuda al usuario

Una buena documentación integrada en la CLI hace que cualquier persona pueda usar tu herramienta sin leer el código fuente.

### La descripción del parser

\`\`\`python
parser = argparse.ArgumentParser(
    description='Convierte y organiza archivos CSV de ventas.',
    formatter_class=argparse.RawDescriptionHelpFormatter
)
\`\`\`

\`RawDescriptionHelpFormatter\` preserva los saltos de línea en la descripción y el epilog.

### El parámetro help= en cada argumento

\`\`\`python
parser.add_argument(
    '--input',
    required=True,
    metavar='ARCHIVO.csv',   # texto que aparece en el --help
    help='Archivo CSV de entrada con datos de ventas'
)

parser.add_argument(
    '--output',
    default='reporte.json',
    metavar='ARCHIVO',
    help='Archivo de salida (default: %(default)s)'  # inserta el default
)
\`\`\`

### El epilog con ejemplos

\`\`\`python
parser = argparse.ArgumentParser(
    description='Convierte archivos CSV a JSON',
    epilog="""
ejemplos:
  python conversor.py --input ventas.csv
  python conversor.py --input ventas.csv --output resultado.json
  python conversor.py --input datos.csv --delimiter ";" --verbose
    """
)
\`\`\`

### Agregar versión con --version

\`\`\`python
parser.add_argument(
    '--version',
    action='version',
    version='%(prog)s 1.0.0'
)
\`\`\`

Resultado: \`python herramienta.py --version\` → \`herramienta.py 1.0.0\`

### Mostrar uso en caso de error

\`\`\`python
args = parser.parse_args()

# Validación adicional manual
if args.cantidad < 1:
    parser.error("--cantidad debe ser mayor a 0")
    # parser.error() imprime el mensaje y sale con código 2
\`\`\`

### Ejemplo de --help bien diseñado

\`\`\`
$ python organizar.py --help
usage: organizar.py [-h] --folder FOLDER [--dry-run] [--verbose] [--version]

Organiza archivos en subcarpetas según su tipo de extensión.

options:
  -h, --help       show this help message and exit
  --folder FOLDER  Carpeta a organizar (requerida)
  --dry-run        Mostrar qué haría sin mover archivos
  --verbose        Mostrar cada archivo procesado
  --version        mostrar la versión del programa y salir

ejemplos:
  python organizar.py --folder ~/Downloads
  python organizar.py --folder ~/Downloads --dry-run
  python organizar.py --folder ~/Documents --verbose
\`\`\`

### Una CLI que documenta sin leer el código

El objetivo es que alguien que nunca vio tu código pueda usar la herramienta correctamente con solo ejecutar \`--help\`. Incluye:
1. Qué hace el programa (description)
2. Para qué sirve cada argumento (help=)
3. Ejemplos concretos (epilog)
4. Los valores por defecto (%(default)s)`,
    codeExample: `import argparse

# ============================================================
# CLI BIEN DOCUMENTADA: EJEMPLO COMPLETO
# ============================================================

VERSION = '2.1.0'

def crear_parser():
    """Crea un parser argparse completamente documentado."""

    parser = argparse.ArgumentParser(
        prog='organizar',
        description="""
Organiza archivos en subcarpetas según su tipo de extensión.

Clasifica automáticamente: imágenes, documentos, videos, código,
archivos comprimidos y otros. Soporta modo de vista previa (dry-run)
para verificar antes de mover archivos.
        """.strip(),
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
ejemplos de uso:
  # Ver qué haría sin mover nada (recomendado empezar así)
  python organizar.py --folder ~/Downloads --dry-run

  # Organizar con detalles de cada archivo
  python organizar.py --folder ~/Downloads --verbose

  # Organizar y guardar registro
  python organizar.py --folder ~/Desktop --output-log registro.txt

  # Solo mover imágenes y documentos
  python organizar.py --folder ~/Downloads --tipos imagenes documentos
        """
    )

    # --- Versión ---
    parser.add_argument(
        '--version', '-v',
        action='version',
        version=f'%(prog)s {VERSION}'
    )

    # --- Argumento principal ---
    parser.add_argument(
        '--folder',
        required=True,
        metavar='RUTA',
        help='Carpeta a organizar (requerida)'
    )

    # --- Flags de comportamiento ---
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Mostrar qué haría sin mover archivos (recomendado)'
    )

    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Mostrar cada archivo procesado'
    )

    parser.add_argument(
        '--quiet',
        action='store_true',
        help='Silenciar todos los mensajes de progreso'
    )

    # --- Opciones con valores ---
    parser.add_argument(
        '--output-log',
        metavar='ARCHIVO',
        help='Guardar registro de operaciones en archivo (opcional)'
    )

    parser.add_argument(
        '--tipos',
        nargs='+',
        choices=['imagenes', 'documentos', 'videos', 'codigo', 'comprimidos'],
        metavar='TIPO',
        help=(
            'Tipos de archivo a organizar (default: todos). '
            'Opciones: imagenes, documentos, videos, codigo, comprimidos'
        )
    )

    return parser


# ============================================================
# LÓGICA DE LA HERRAMIENTA
# ============================================================

def main():
    parser = crear_parser()
    args = parser.parse_args()

    # Validaciones adicionales
    if args.verbose and args.quiet:
        parser.error("--verbose y --quiet no pueden usarse juntos")

    # Aquí iría la lógica real
    modo = "PREVIEW" if args.dry_run else "ORGANIZAR"
    print(f"[{modo}] {args.folder}")

    if args.verbose:
        print("  Modo verbose: sí")
    if args.tipos:
        print(f"  Tipos: {', '.join(args.tipos)}")
    if args.output_log:
        print(f"  Log: {args.output_log}")

# ============================================================
# DEMOSTRACIÓN DEL HELP
# ============================================================

print("=== DEMOSTRACIÓN DE CLI DOCUMENTADA ===\\n")

parser = crear_parser()

# Simular una invocación exitosa
args, _ = parser.parse_known_args(
    ['--folder', './mis_descargas', '--dry-run', '--verbose']
)

print("Invocación: python organizar.py --folder ./mis_descargas --dry-run --verbose")
print()
print(f"  args.folder    = {args.folder!r}")
print(f"  args.dry_run   = {args.dry_run}")
print(f"  args.verbose   = {args.verbose}")
print(f"  args.quiet     = {args.quiet}")
print(f"  args.output_log = {args.output_log}")
print(f"  args.tipos     = {args.tipos}")
print()
print("Para ver el mensaje de ayuda completo:")
print("  python organizar.py --help")
print()
print("Para ver la versión:")
print("  python organizar.py --version")
print(f"  → organizar {VERSION}")`,
    keyPoints: [
      'Agrega description= para explicar qué hace el programa en el mensaje --help',
      'Usa help= en cada argumento para describir su propósito',
      'El epilog= es ideal para mostrar ejemplos concretos de uso',
      '%(default)s en help= inserta automáticamente el valor por defecto',
      'parser.error("mensaje") muestra un error claro y el resumen de uso, luego termina',
      'action="version" con --version muestra la versión y sale automáticamente',
    ],
    exercise: {
      description: 'Documenta completamente una de tus herramientas anteriores. Debe tener: (1) description= clara en el parser, (2) help= detallado para cada argumento, (3) metavar= descriptivos, (4) epilog= con al menos 3 ejemplos de uso reales, (5) --version que muestre el número de versión, y (6) validación con parser.error() para al menos una combinación inválida de argumentos.',
      hint: 'Para %(default)s: add_argument("--cantidad", default=10, help="Número de items (default: %(default)s)"). Para metavar: add_argument("--input", metavar="ARCHIVO.csv") hace que en el help diga "--input ARCHIVO.csv" en vez de "--input INPUT".',
    },
    quiz: [
      {
        question: '¿Qué hace %(default)s en el texto de help= de un argumento?',
        options: [
          'Muestra el tipo de dato del argumento',
          'Inserta automáticamente el valor default del argumento en el texto de ayuda',
          'Es un placeholder que el usuario debe reemplazar',
          'Hace el argumento opcional',
        ],
        correctAnswer: 'Inserta automáticamente el valor default del argumento en el texto de ayuda',
        correctFeedback: '¡Correcto! help="Número máximo (default: %(default)s)" con default=100 mostrará "Número máximo (default: 100)" en el --help automáticamente.',
        incorrectFeedback: '%(default)s es una interpolación especial de argparse: en el texto de help=, se reemplaza con el valor actual del parámetro default=.',
      },
      {
        question: '¿Para qué sirve RawDescriptionHelpFormatter?',
        options: [
          'Para mostrar el help en colores',
          'Para preservar los saltos de línea y espacios en description= y epilog=',
          'Para generar documentación HTML',
          'Para traducir el help a otros idiomas',
        ],
        correctAnswer: 'Para preservar los saltos de línea y espacios en description= y epilog=',
        correctFeedback: '¡Correcto! Sin RawDescriptionHelpFormatter, argparse reformatea el texto eliminando saltos de línea. Con él, el texto aparece exactamente como lo escribiste.',
        incorrectFeedback: 'RawDescriptionHelpFormatter preserva el formato del texto en description y epilog. Sin él, argparse colapsa todos los espacios y saltos de línea en un párrafo.',
      },
      {
        question: '¿Cómo se agrega soporte para --version que muestre "mi_tool 1.2.3"?',
        options: [
          'parser.add_argument("--version", default="1.2.3")',
          'parser.add_argument("--version", action="version", version="%(prog)s 1.2.3")',
          'parser.version = "1.2.3"',
          'import version; parser.add_version(version.__version__)',
        ],
        correctAnswer: 'parser.add_argument("--version", action="version", version="%(prog)s 1.2.3")',
        correctFeedback: '¡Correcto! action="version" es la acción especial para versión. %(prog)s inserta el nombre del programa. Al ejecutar --version, argparse muestra la versión y sale.',
        incorrectFeedback: 'La forma correcta es: add_argument("--version", action="version", version="%(prog)s 1.2.3"). %(prog)s se reemplaza por el nombre del programa.',
      },
      {
        question: '¿Qué hace parser.error("mensaje de error")?',
        options: [
          'Solo imprime el mensaje sin salir',
          'Lanza una excepción Python',
          'Imprime el mensaje de error con el resumen de uso y termina con código 2',
          'Guarda el error en un archivo de log',
        ],
        correctAnswer: 'Imprime el mensaje de error con el resumen de uso y termina con código 2',
        correctFeedback: '¡Correcto! parser.error() imprime "error: tu mensaje" precedido del resumen de uso, luego termina con sys.exit(2). Es la forma correcta de reportar errores de argparse.',
        incorrectFeedback: 'parser.error() muestra el error en el formato estándar de argparse (con el resumen de uso) y sale con código 2. Es la forma idiomática de señalar errores de argumentos.',
      },
      {
        question: '¿Para qué sirve el parámetro metavar= en add_argument()?',
        options: [
          'Define el nombre del atributo en args',
          'Define el texto que aparece en el --help para representar el valor del argumento',
          'Agrega metadatos al archivo Python',
          'Define el tipo de dato del argumento',
        ],
        correctAnswer: 'Define el texto que aparece en el --help para representar el valor del argumento',
        correctFeedback: '¡Correcto! Sin metavar, "--input INPUT" aparece en el help. Con metavar="ARCHIVO.csv", aparece "--input ARCHIVO.csv", que es más descriptivo para el usuario.',
        incorrectFeedback: 'metavar= cambia el texto de placeholder en el --help. Por defecto argparse usa el nombre en mayúsculas. Con metavar="ARCHIVO.csv" el help es más informativo.',
      },
      {
        question: '¿Qué debería incluir el epilog= de una CLI bien documentada?',
        options: [
          'El código fuente de las funciones principales',
          'La lista completa de todos los argumentos',
          'Ejemplos concretos de cómo invocar la herramienta',
          'Los requisitos del sistema',
        ],
        correctAnswer: 'Ejemplos concretos de cómo invocar la herramienta',
        correctFeedback: '¡Correcto! El epilog es el lugar ideal para mostrar ejemplos reales de uso. Los usuarios entienden mejor una herramienta viendo ejemplos que leyendo la descripción abstracta.',
        incorrectFeedback: 'El epilog se usa convencionalmente para ejemplos de uso. La descripción abstracta está en description=. Los argumentos ya están documentados individualmente.',
      },
      {
        question: '¿Cuál es el objetivo final de una buena documentación integrada en una CLI?',
        options: [
          'Que el código sea más corto',
          'Que cualquier persona pueda usar la herramienta correctamente solo con --help',
          'Que el programa sea más rápido',
          'Que no se necesite Python para ejecutarla',
        ],
        correctAnswer: 'Que cualquier persona pueda usar la herramienta correctamente solo con --help',
        correctFeedback: '¡Correcto! Una CLI bien documentada es autoexplicativa: el --help contiene todo lo necesario para usarla sin leer el código ni buscar documentación externa.',
        incorrectFeedback: 'El objetivo es la autodocumentación: que --help sea suficiente para que cualquier persona use la herramienta correctamente sin leer el código fuente.',
      },
    ],
  },
  {
    slug: 'errores-cli',
    title: 'Manejar errores en una CLI',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 155,
    description: 'Aprende a validar argumentos y mostrar errores útiles cuando el usuario usa mal el comando.',
    explanation: `## Manejar errores en una CLI

Una CLI robusta anticipa los errores más comunes y los reporta de forma clara, no con stack traces de Python.

### Tipos de errores en una CLI

1. **Errores de argumentos** (argparse los maneja): faltantes, tipo incorrecto
2. **Errores de validación** (tú los manejas): archivo no existe, valor fuera de rango
3. **Errores de ejecución** (try/except): archivo corrupto, sin permisos, red caída

### Usar type=Path para archivos

\`\`\`python
from pathlib import Path

parser.add_argument('--input', type=Path, required=True)
parser.add_argument('--output', type=Path)
\`\`\`

argparse convierte automáticamente el string a Path, pero NO valida que exista.

### Validar existencia de archivos después de parsear

\`\`\`python
args = parser.parse_args()

# Validar que el archivo de entrada existe
if not args.input.exists():
    parser.error(f"el archivo '{args.input}' no existe")

# Validar que no sobreescribamos sin --force
if args.output and args.output.exists() and not args.force:
    parser.error(f"'{args.output}' ya existe. Usa --force para sobreescribir")
\`\`\`

### Validar rangos de valores

\`\`\`python
args = parser.parse_args()

if args.cantidad < 1 or args.cantidad > 10000:
    parser.error(f"--cantidad debe estar entre 1 y 10000, recibido: {args.cantidad}")

if args.porcentaje < 0.0 or args.porcentaje > 1.0:
    parser.error(f"--porcentaje debe ser entre 0.0 y 1.0")
\`\`\`

### Validar extensión de archivo

\`\`\`python
EXTENSIONES_VALIDAS = {'.csv', '.tsv', '.txt'}

if args.input.suffix.lower() not in EXTENSIONES_VALIDAS:
    parser.error(
        f"formato no soportado: '{args.input.suffix}'. "
        f"Use: {', '.join(EXTENSIONES_VALIDAS)}"
    )
\`\`\`

### Try/except alrededor de la lógica principal

\`\`\`python
def main():
    args = parser.parse_args()
    validar_argumentos(args, parser)

    try:
        ejecutar(args)
    except PermissionError as e:
        print(f"Error: sin permiso para acceder al archivo: {e}", file=sys.stderr)
        sys.exit(1)
    except FileNotFoundError as e:
        print(f"Error: archivo no encontrado: {e}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("\\nCancelado por el usuario.")
        sys.exit(0)
    except Exception as e:
        print(f"Error inesperado: {e}", file=sys.stderr)
        sys.exit(1)
\`\`\`

### Códigos de salida

Por convención:
- **0**: éxito
- **1**: error general
- **2**: error de uso (argumentos incorrectos, argparse usa este)

\`\`\`python
sys.exit(0)   # éxito
sys.exit(1)   # error en la ejecución
# argparse usa sys.exit(2) para errores de argumentos
\`\`\`

### Errores a stderr, progreso a stdout

\`\`\`python
import sys

# Mensajes de progreso
print("Procesando 100 archivos...")  # stdout

# Mensajes de error
print("Error: no se puede abrir el archivo", file=sys.stderr)  # stderr
\`\`\``,
    codeExample: `import argparse
import sys
from pathlib import Path

# ============================================================
# MANEJO DE ERRORES EN CLI: ESTRATEGIA COMPLETA
# ============================================================

EXTENSIONES_VALIDAS = {'.csv', '.tsv', '.txt'}
VERSION = '1.0.0'

def crear_parser():
    parser = argparse.ArgumentParser(
        description='Procesador de archivos de datos',
        epilog="""
Ejemplos:
  python procesador.py --input datos.csv
  python procesador.py --input datos.csv --output resultado.json --cantidad 50
        """
    )
    parser.add_argument('--version', action='version', version=f'%(prog)s {VERSION}')
    parser.add_argument('--input', type=Path, required=True,
                        help='Archivo de entrada (CSV, TSV o TXT)')
    parser.add_argument('--output', type=Path,
                        help='Archivo de salida (default: mismo nombre .json)')
    parser.add_argument('--cantidad', type=int, default=100,
                        help='Máximo de registros a procesar (default: 100)')
    parser.add_argument('--force', action='store_true',
                        help='Sobreescribir el archivo de salida si existe')
    parser.add_argument('--verbose', action='store_true',
                        help='Mostrar progreso detallado')
    return parser


def validar_argumentos(args, parser):
    """
    Valida argumentos después del parseo.
    Usa parser.error() para mostrar mensajes de error claros.
    """

    # 1. Validar que el archivo de entrada existe
    if not args.input.exists():
        parser.error(f"el archivo de entrada '{args.input}' no existe")

    # 2. Validar que es un archivo (no una carpeta)
    if not args.input.is_file():
        parser.error(f"'{args.input}' es una carpeta, se esperaba un archivo")

    # 3. Validar la extensión
    if args.input.suffix.lower() not in EXTENSIONES_VALIDAS:
        extensiones = ', '.join(sorted(EXTENSIONES_VALIDAS))
        parser.error(
            f"extensión '{args.input.suffix}' no soportada. "
            f"Use uno de: {extensiones}"
        )

    # 4. Validar rango de --cantidad
    if args.cantidad < 1:
        parser.error("--cantidad debe ser mayor o igual a 1")
    if args.cantidad > 1_000_000:
        parser.error("--cantidad no puede superar 1,000,000")

    # 5. Inferir salida si no se especificó
    if args.output is None:
        args.output = args.input.with_suffix('.json')

    # 6. Validar sobreescritura
    if args.output.exists() and not args.force:
        parser.error(
            f"el archivo de salida '{args.output}' ya existe. "
            f"Use --force para sobreescribir"
        )


def procesar(args):
    """Lógica principal con manejo de errores de runtime."""
    if args.verbose:
        print(f"Leyendo: {args.input}")

    try:
        with open(args.input, encoding='utf-8') as f:
            lineas = f.readlines()[:args.cantidad]

        if args.verbose:
            print(f"  {len(lineas)} líneas leídas")
            print(f"Escribiendo: {args.output}")

        with open(args.output, 'w', encoding='utf-8') as f:
            import json
            json.dump({'lineas': lineas, 'total': len(lineas)}, f, indent=2)

        print(f"✓ Procesadas {len(lineas)} líneas → {args.output}")

    except PermissionError:
        print(f"Error: sin permisos para leer '{args.input}'", file=sys.stderr)
        sys.exit(1)
    except UnicodeDecodeError:
        print(f"Error: el archivo tiene una codificación no compatible. "
              f"Intenta con --encoding latin-1", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error inesperado: {e}", file=sys.stderr)
        sys.exit(1)


def main():
    parser = crear_parser()
    args = parser.parse_args()
    validar_argumentos(args, parser)

    try:
        procesar(args)
    except KeyboardInterrupt:
        print("\\nCancelado por el usuario.")
        sys.exit(0)


# ============================================================
# DEMOSTRACIÓN DE VALIDACIONES
# ============================================================

print("=== MANEJO DE ERRORES EN CLI - DEMO ===\\n")

parser = crear_parser()

escenarios = [
    (['--input', 'no_existe.csv'],                    "Archivo que no existe"),
    (['--input', 'datos.exe'],                        "Extensión no válida"),
    (['--input', 'datos.csv', '--cantidad', '-5'],    "Cantidad negativa"),
    (['--input', 'datos.csv', '--cantidad', '50'],    "Invocación correcta"),
]

import os
# Crear archivo temporal para demo
Path('datos.csv').touch()

for argv_sim, descripcion in escenarios:
    print(f"Escenario: {descripcion}")
    print(f"  Comando: python procesador.py {' '.join(argv_sim)}")
    try:
        args, _ = parser.parse_known_args(argv_sim)
        # Simular validación básica
        if '--cantidad' in argv_sim:
            idx = argv_sim.index('--cantidad')
            cant = int(argv_sim[idx + 1])
            if cant < 1:
                print(f"  → Error: --cantidad debe ser mayor o igual a 1")
            else:
                print(f"  → OK: args.cantidad = {cant}")
        elif 'no_existe.csv' in argv_sim:
            print("  → Error: el archivo 'no_existe.csv' no existe")
        elif '.exe' in argv_sim[1]:
            print("  → Error: extensión '.exe' no soportada. Use: .csv, .tsv, .txt")
        else:
            print(f"  → OK: argumentos válidos")
    except Exception as e:
        print(f"  → Error: {e}")
    print()

# Limpiar archivo temporal
Path('datos.csv').unlink(missing_ok=True)`,
    keyPoints: [
      'Separa los errores de argumentos (argparse) de los errores de validación (código manual) y los errores de ejecución (try/except)',
      'Usa parser.error() para validaciones post-parseo: muestra el error con el formato correcto y sale con código 2',
      'Valida siempre: existencia del archivo, extensión, rangos numéricos, y conflictos entre flags',
      'Los mensajes de error van a sys.stderr, los mensajes de progreso a stdout',
      'Por convención: sys.exit(0) = éxito, sys.exit(1) = error, sys.exit(2) = error de uso',
    ],
    exercise: {
      description: 'Crea una CLI robusta para "convertir.py" que convierta archivos CSV a JSON. Implementa todas estas validaciones: (1) el archivo de entrada debe existir y ser .csv, (2) si el archivo de salida existe, pide --force para sobreescribir, (3) --delimiter debe ser un solo carácter, (4) captura PermissionError y UnicodeDecodeError con mensajes amigables, (5) usa sys.stderr para errores y sys.exit(1) en caso de error.',
      hint: 'Para validar el delimiter: `if len(args.delimiter) != 1: parser.error("--delimiter debe ser un solo carácter")`. Para PermissionError: `except PermissionError: print("Error: sin permiso para...", file=sys.stderr); sys.exit(1)`.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre usar parser.error() y print() + sys.exit()?',
        options: [
          'parser.error() es más rápido',
          'parser.error() también muestra el resumen de uso del comando antes del error',
          'sys.exit() solo funciona en Linux',
          'Son exactamente iguales',
        ],
        correctAnswer: 'parser.error() también muestra el resumen de uso del comando antes del error',
        correctFeedback: '¡Correcto! parser.error() muestra "usage: ..." + "error: tu mensaje" y sale con código 2. Es la forma estándar de argparse para errores de argumentos.',
        incorrectFeedback: 'parser.error() imprime el resumen de uso antes del mensaje de error y sale con código 2. Esto sigue el formato estándar de herramientas CLI.',
      },
      {
        question: '¿Dónde deberían ir los mensajes de error en una CLI bien diseñada?',
        options: [
          'A un archivo de log',
          'A sys.stdout (la salida estándar)',
          'A sys.stderr (la salida de errores)',
          'A ambos stdout y stderr',
        ],
        correctAnswer: 'A sys.stderr (la salida de errores)',
        correctFeedback: '¡Correcto! Los errores van a stderr: print("Error", file=sys.stderr). Los mensajes de progreso van a stdout. Esto permite que los usuarios redirijan la salida normal sin mezclarla con errores.',
        incorrectFeedback: 'Los errores van a stderr (print("Error", file=sys.stderr)) y los datos/progreso a stdout. Esto permite redirigir la salida normal a un archivo sin perder los errores.',
      },
      {
        question: '¿Qué código de salida es el convencional para indicar éxito en una CLI?',
        options: [
          'sys.exit(-1)',
          'sys.exit(0)',
          'sys.exit(1)',
          'sys.exit(200)',
        ],
        correctAnswer: 'sys.exit(0)',
        correctFeedback: '¡Correcto! Por convención universal: 0 = éxito, distinto de 0 = error. Esto permite encadenar comandos con && ya que el shell verifica el código de salida.',
        incorrectFeedback: 'La convención es: 0 = éxito, cualquier otro valor = error. Así funcionan todas las herramientas Unix/Windows y permite encadenar con &&.',
      },
      {
        question: '¿Por qué es importante capturar KeyboardInterrupt en una CLI?',
        options: [
          'Para que el programa no sea cerrado con Ctrl+C',
          'Para mostrar un mensaje limpio cuando el usuario presiona Ctrl+C, en lugar de un stack trace',
          'Para guardar el progreso automáticamente',
          'KeyboardInterrupt no ocurre en CLIs',
        ],
        correctAnswer: 'Para mostrar un mensaje limpio cuando el usuario presiona Ctrl+C, en lugar de un stack trace',
        correctFeedback: '¡Correcto! Sin capturar KeyboardInterrupt, Ctrl+C muestra un feo stack trace. Capturándolo puedes mostrar "\\nCancelado por el usuario." y salir limpiamente.',
        incorrectFeedback: 'Sin capturar KeyboardInterrupt, Ctrl+C muestra un stack trace de Python. Capturándolo puedes mostrar un mensaje amigable y hacer limpieza antes de salir.',
      },
      {
        question: '¿Cuál es el orden correcto para manejar errores en una CLI?',
        options: [
          'try/except → parsear → validar',
          'parsear → validar → try/except alrededor de la lógica',
          'validar → parsear → try/except',
          'No importa el orden',
        ],
        correctAnswer: 'parsear → validar → try/except alrededor de la lógica',
        correctFeedback: '¡Correcto! Primero parseas con parse_args(), luego validas (existencia de archivos, rangos), luego ejecutas la lógica dentro de try/except para errores de runtime.',
        incorrectFeedback: 'El orden correcto es: (1) parse_args() para leer argumentos, (2) validar argumentos con parser.error(), (3) ejecutar la lógica envuelta en try/except para errores de runtime.',
      },
      {
        question: '¿Qué hace type=Path en add_argument("--input", type=Path)?',
        options: [
          'Valida que el archivo existe en el sistema',
          'Convierte el string del argumento en un objeto Path de pathlib',
          'Limita el argumento a rutas absolutas',
          'Hace que el argumento acepte solo carpetas',
        ],
        correctAnswer: 'Convierte el string del argumento en un objeto Path de pathlib',
        correctFeedback: '¡Correcto! type=Path le dice a argparse que convierta el string automáticamente. args.input será un objeto Path, no un string. Pero NO valida que el archivo exista — eso lo haces tú.',
        incorrectFeedback: 'type=Path convierte el string a objeto Path automáticamente, pero NO verifica que exista. Para verificar existencia: if not args.input.exists(): parser.error("no existe").',
      },
      {
        question: '¿Cuándo deberías usar try/except Exception en lugar de capturar excepciones específicas?',
        options: [
          'Siempre, es más simple',
          'Solo como último recurso para errores inesperados, después de capturar los específicos',
          'Nunca, siempre usa excepciones específicas',
          'Cuando no sabes qué errores puede lanzar la función',
        ],
        correctAnswer: 'Solo como último recurso para errores inesperados, después de capturar los específicos',
        correctFeedback: '¡Correcto! Captura primero PermissionError, FileNotFoundError, etc. Luego usa except Exception como red de seguridad para lo inesperado. Así puedes dar mensajes específicos para cada caso común.',
        incorrectFeedback: 'Lo mejor es capturar excepciones específicas primero (PermissionError, FileNotFoundError) con mensajes claros. except Exception al final es solo la red de seguridad para lo inesperado.',
      },
    ],
  },
  {
    slug: 'cli-organizar-archivos',
    title: 'Mini proyecto: CLI para organizar archivos',
    module: 'Crear herramientas de línea de comandos',
    moduleNumber: 28,
    order: 156,
    description: 'Crea una herramienta de línea de comandos que organice archivos en carpetas según su tipo.',
    explanation: `## Mini proyecto: CLI para organizar archivos

En esta lección construimos una herramienta CLI completa y de calidad profesional que aplica todo lo aprendido en el módulo.

### Descripción de la herramienta

\`\`\`bash
python organizar.py --folder ~/Downloads --dry-run --verbose
python organizar.py --folder ~/Downloads
python organizar.py --folder ~/Downloads --output-log registro.txt
python organizar.py --help
\`\`\`

### Clasificación de archivos por extensión

\`\`\`python
CATEGORIAS = {
    'imagenes':     {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'},
    'documentos':   {'.pdf', '.doc', '.docx', '.txt', '.odt', '.rtf', '.md'},
    'videos':       {'.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv'},
    'audio':        {'.mp3', '.wav', '.flac', '.aac', '.ogg'},
    'codigo':       {'.py', '.js', '.ts', '.html', '.css', '.java', '.cpp'},
    'comprimidos':  {'.zip', '.tar', '.gz', '.rar', '.7z'},
    'hojas_calculo':{'.xlsx', '.xls', '.csv', '.ods'},
}
\`\`\`

### Función de clasificación

\`\`\`python
def clasificar_archivo(ruta: Path) -> str:
    """Devuelve la categoría de un archivo."""
    extension = ruta.suffix.lower()
    for categoria, extensiones in CATEGORIAS.items():
        if extension in extensiones:
            return categoria
    return 'otros'
\`\`\`

### Función principal de organización

\`\`\`python
def organizar(carpeta: Path, dry_run: bool, verbose: bool) -> dict:
    archivos = [f for f in carpeta.iterdir() if f.is_file()]
    movidos = []
    errores = []

    for archivo in archivos:
        categoria = clasificar_archivo(archivo)
        destino_carpeta = carpeta / categoria
        destino = destino_carpeta / archivo.name

        if verbose:
            print(f"  {archivo.name} → {categoria}/")

        if not dry_run:
            destino_carpeta.mkdir(exist_ok=True)
            archivo.rename(destino)
            movidos.append({'archivo': archivo.name, 'categoria': categoria})

    return {'movidos': movidos, 'errores': errores}
\`\`\`

### Guardar registro en archivo

\`\`\`python
def guardar_log(ruta_log: Path, resultado: dict) -> None:
    import json
    from datetime import datetime

    log = {
        'fecha': datetime.now().isoformat(),
        'total': len(resultado['movidos']),
        'movidos': resultado['movidos'],
        'errores': resultado['errores'],
    }
    with open(ruta_log, 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)
    print(f"\\nRegistro guardado en: {ruta_log}")
\`\`\`

### Estructura del proyecto final

\`\`\`
organizar.py
  ├── CATEGORIAS (dict de extensiones)
  ├── crear_parser() → ArgumentParser
  ├── validar_argumentos(args, parser) → None
  ├── clasificar_archivo(ruta) → str
  ├── organizar(carpeta, dry_run, verbose) → dict
  ├── mostrar_resumen(resultado) → None
  ├── guardar_log(ruta, resultado) → None
  └── main() → None
\`\`\``,
    codeExample: `"""
organizar.py - Organiza archivos en carpetas según su tipo

Clasifica archivos de una carpeta en subcarpetas por categoría:
imágenes, documentos, videos, audio, código, comprimidos y otros.

Uso:
  python organizar.py --folder ~/Downloads --dry-run
  python organizar.py --folder ~/Downloads --verbose
  python organizar.py --folder ~/Desktop --output-log registro.json

Requiere Python 3.8+
"""

import sys
import json
import argparse
from pathlib import Path
from datetime import datetime

# ============================================================
# CONFIGURACIÓN
# ============================================================

VERSION = '1.0.0'

CATEGORIAS = {
    'imagenes':      {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.ico'},
    'documentos':    {'.pdf', '.doc', '.docx', '.txt', '.odt', '.rtf', '.md', '.pptx'},
    'videos':        {'.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv', '.webm'},
    'audio':         {'.mp3', '.wav', '.flac', '.aac', '.ogg', '.m4a'},
    'codigo':        {'.py', '.js', '.ts', '.html', '.css', '.java', '.cpp', '.go', '.rs'},
    'comprimidos':   {'.zip', '.tar', '.gz', '.rar', '.7z', '.bz2'},
    'hojas_calculo': {'.xlsx', '.xls', '.csv', '.ods'},
}

# ============================================================
# ARGUMENTOS CLI
# ============================================================

def crear_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog='organizar',
        description='Organiza archivos en subcarpetas según su tipo de extensión.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
ejemplos:
  # Ver qué haría sin mover nada (recomendado la primera vez)
  python organizar.py --folder ~/Downloads --dry-run

  # Organizar con detalles
  python organizar.py --folder ~/Downloads --verbose

  # Organizar y guardar registro JSON
  python organizar.py --folder ~/Desktop --output-log registro.json

  # Ver ayuda completa
  python organizar.py --help
        """
    )

    parser.add_argument(
        '--version', action='version', version=f'%(prog)s {VERSION}'
    )
    parser.add_argument(
        '--folder', type=Path, required=True,
        metavar='RUTA',
        help='Carpeta a organizar (requerida)'
    )
    parser.add_argument(
        '--dry-run', action='store_true',
        help='Mostrar qué haría sin mover archivos'
    )
    parser.add_argument(
        '--verbose', action='store_true',
        help='Mostrar cada archivo mientras se procesa'
    )
    parser.add_argument(
        '--output-log', type=Path,
        metavar='ARCHIVO',
        help='Guardar registro de operaciones en este archivo JSON'
    )

    return parser


def validar_argumentos(args: argparse.Namespace, parser: argparse.ArgumentParser) -> None:
    """Valida los argumentos después del parseo."""
    if not args.folder.exists():
        parser.error(f"la carpeta '{args.folder}' no existe")
    if not args.folder.is_dir():
        parser.error(f"'{args.folder}' es un archivo, se esperaba una carpeta")

# ============================================================
# LÓGICA DE ORGANIZACIÓN
# ============================================================

def clasificar(ruta: Path) -> str:
    """Devuelve la categoría de un archivo según su extensión."""
    ext = ruta.suffix.lower()
    for categoria, extensiones in CATEGORIAS.items():
        if ext in extensiones:
            return categoria
    return 'otros'

def organizar_carpeta(carpeta: Path, dry_run: bool, verbose: bool) -> dict:
    """
    Organiza los archivos de una carpeta.
    Devuelve un dict con los resultados.
    """
    archivos = sorted([f for f in carpeta.iterdir() if f.is_file()])
    movidos = []
    errores = []

    if not archivos:
        print("No hay archivos para organizar.")
        return {'movidos': [], 'errores': []}

    modo = "PREVIEW" if dry_run else "ORGANIZANDO"
    print(f"\\n[{modo}] {carpeta} ({len(archivos)} archivos)\\n")

    for archivo in archivos:
        categoria = clasificar(archivo)
        destino_dir = carpeta / categoria
        destino = destino_dir / archivo.name

        if verbose or dry_run:
            print(f"  {archivo.name}")
            print(f"  → {categoria}/{archivo.name}\\n")

        if not dry_run:
            try:
                destino_dir.mkdir(exist_ok=True)
                archivo.rename(destino)
                movidos.append({
                    'archivo': archivo.name,
                    'categoria': categoria,
                    'origen': str(archivo),
                    'destino': str(destino),
                })
            except Exception as e:
                errores.append({'archivo': archivo.name, 'error': str(e)})
                print(f"  ✗ Error: {e}", file=sys.stderr)
        else:
            movidos.append({'archivo': archivo.name, 'categoria': categoria})

    return {'movidos': movidos, 'errores': errores}

def mostrar_resumen(resultado: dict, dry_run: bool) -> None:
    """Muestra el resumen de la operación."""
    movidos = resultado['movidos']
    errores = resultado['errores']

    print("=" * 40)
    print("RESUMEN")
    print("=" * 40)

    # Agrupar por categoría
    por_categoria: dict = {}
    for item in movidos:
        cat = item['categoria']
        por_categoria[cat] = por_categoria.get(cat, 0) + 1

    for cat, cantidad in sorted(por_categoria.items()):
        print(f"  {cat:15} {cantidad:4} archivos")

    print(f"\\nTotal: {len(movidos)} archivos", end='')
    if dry_run:
        print(" (modo preview, ninguno fue movido)")
    else:
        print(f" movidos, {len(errores)} errores")

def guardar_log(ruta_log: Path, resultado: dict) -> None:
    """Guarda el registro de operaciones en un archivo JSON."""
    log = {
        'fecha': datetime.now().isoformat(),
        'total_movidos': len(resultado['movidos']),
        'total_errores': len(resultado['errores']),
        'detalle': resultado,
    }
    with open(ruta_log, 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)
    print(f"\\nRegistro guardado: {ruta_log}")

# ============================================================
# PUNTO DE ENTRADA
# ============================================================

def main():
    parser = crear_parser()
    args = parser.parse_args()
    validar_argumentos(args, parser)

    try:
        resultado = organizar_carpeta(args.folder, args.dry_run, args.verbose)
        mostrar_resumen(resultado, args.dry_run)

        if args.output_log:
            guardar_log(args.output_log, resultado)

    except KeyboardInterrupt:
        print("\\nCancelado por el usuario.")
        sys.exit(0)
    except Exception as e:
        print(f"Error inesperado: {e}", file=sys.stderr)
        sys.exit(1)


# ============================================================
# DEMOSTRACIÓN SIN ARCHIVOS REALES
# ============================================================

print("=== ORGANIZADOR DE ARCHIVOS - DEMO ===\\n")

archivos_simulados = [
    'foto_vacaciones.jpg', 'reporte_ventas.xlsx', 'video_reunion.mp4',
    'notas.txt', 'script.py', 'presentacion.pptx', 'musica.mp3',
    'backup.zip', 'desconocido.xyz', 'imagen.png',
]

print("Archivos en ~/Downloads:")
for nombre in archivos_simulados:
    ext = Path(nombre).suffix.lower()
    # Buscar categoría manualmente para la demo
    categoria = 'otros'
    for cat, exts in CATEGORIAS.items():
        if ext in exts:
            categoria = cat
            break
    print(f"  {nombre:<30} → {categoria}/")

print()
print("Carpetas que se crearían:")
categorias_usadas = set()
for nombre in archivos_simulados:
    ext = Path(nombre).suffix.lower()
    for cat, exts in CATEGORIAS.items():
        if ext in exts:
            categorias_usadas.add(cat)
            break
    else:
        categorias_usadas.add('otros')

for cat in sorted(categorias_usadas):
    count = sum(
        1 for n in archivos_simulados
        if any(Path(n).suffix.lower() in exts and cat == c
               for c, exts in CATEGORIAS.items())
        or (cat == 'otros' and not any(
            Path(n).suffix.lower() in exts for exts in CATEGORIAS.values()
        ))
    )
    print(f"  {cat}/")`,
    keyPoints: [
      'Un diccionario de extensiones por categoría es la forma más limpia de clasificar archivos',
      'Implementa siempre dry_run primero para que el usuario pueda verificar antes de ejecutar',
      'Usa mkdir(exist_ok=True) para crear subcarpetas sin errores si ya existen',
      'Separa la lógica en funciones: parsear, validar, clasificar, organizar, resumir, log',
      'Guarda un registro JSON de las operaciones para poder auditar o deshacer cambios',
    ],
    exercise: {
      description: 'Extiende el organizador de archivos con: (1) un subcomando "deshacer" que lea el log JSON y mueva los archivos de vuelta a su lugar original, (2) la opción --excluir para no mover ciertos archivos (ej: --excluir .gitignore README.md), y (3) estadísticas del espacio en disco liberado (suma del tamaño de los archivos movidos usando archivo.stat().st_size).',
      hint: 'Para deshacer: lee el JSON con json.load(), itera "detalle.movidos", y haz Path(item["destino"]).rename(Path(item["origen"])). Para el tamaño: acumula archivo.stat().st_size en bytes y muéstralo en MB con size / (1024*1024).',
    },
    quiz: [
      {
        question: '¿Por qué se usa mkdir(exist_ok=True) al crear las subcarpetas de destino?',
        options: [
          'Para que la carpeta sea de solo lectura',
          'Para evitar un error si la carpeta ya existe de una ejecución anterior',
          'Para crear la carpeta con permisos de administrador',
          'Para crear todas las carpetas padre también',
        ],
        correctAnswer: 'Para evitar un error si la carpeta ya existe de una ejecución anterior',
        correctFeedback: '¡Correcto! Sin exist_ok=True, mkdir() lanza FileExistsError si la carpeta ya existe. Con exist_ok=True, simplemente no hace nada si ya existe. Perfecto para ejecuciones repetidas.',
        incorrectFeedback: 'exist_ok=True hace que mkdir() no lance error si la carpeta ya existe. Es esencial en scripts que pueden ejecutarse múltiples veces sobre la misma carpeta.',
      },
      {
        question: '¿Cuál es la ventaja de guardar el registro de operaciones en JSON?',
        options: [
          'Los archivos JSON son más pequeños',
          'Permite implementar una función "deshacer" que revierta los cambios',
          'Python no puede escribir otros formatos',
          'JSON es requerido por el sistema operativo',
        ],
        correctAnswer: 'Permite implementar una función "deshacer" que revierta los cambios',
        correctFeedback: '¡Correcto! El registro JSON guarda de dónde venía cada archivo y dónde fue. Una función "deshacer" puede leer ese log y devolver cada archivo a su origen.',
        incorrectFeedback: 'El log JSON guarda el historial: origen y destino de cada archivo. Esto permite implementar "deshacer": leer el log y hacer rename() en dirección contraria.',
      },
      {
        question: '¿Cómo se obtiene la extensión en minúsculas de un objeto Path?',
        options: [
          'archivo.extension.lower()',
          'archivo.suffix.lower()',
          'archivo.ext().lower()',
          'str(archivo).split(".")[-1].lower()',
        ],
        correctAnswer: 'archivo.suffix.lower()',
        correctFeedback: '¡Correcto! Path.suffix devuelve la extensión con el punto: ".JPG". Llamar .lower() la normaliza a ".jpg", lo que permite comparar sin distinción de mayúsculas.',
        incorrectFeedback: 'Path.suffix devuelve la extensión (ej: ".JPG"). .lower() la normaliza para comparación insensible a mayúsculas. Así ".JPG", ".Jpg" y ".jpg" se tratan igual.',
      },
      {
        question: '¿Cuál es la función de clasificar() en la arquitectura del organizador?',
        options: [
          'Mueve el archivo a la carpeta correcta',
          'Recibe una ruta de archivo y devuelve su categoría según la extensión',
          'Valida que el archivo no esté corrupto',
          'Crea la carpeta de destino',
        ],
        correctAnswer: 'Recibe una ruta de archivo y devuelve su categoría según la extensión',
        correctFeedback: '¡Correcto! clasificar() tiene una sola responsabilidad: determinar la categoría. No mueve archivos, no crea carpetas. Eso lo hace organizar_carpeta(). Separación de responsabilidades.',
        incorrectFeedback: 'clasificar() solo determina a qué categoría pertenece un archivo. No hace nada más. Esto sigue el principio de responsabilidad única: cada función hace una cosa.',
      },
      {
        question: '¿Qué hace Path("fotos") / "imagenes" / "foto.jpg" en Python?',
        options: [
          'Divide la ruta entre los nombres',
          'Crea un archivo foto.jpg en la carpeta imagenes',
          'Construye la ruta "fotos/imagenes/foto.jpg" como objeto Path',
          'Lanza un error porque / no es una operación de Path',
        ],
        correctAnswer: 'Construye la ruta "fotos/imagenes/foto.jpg" como objeto Path',
        correctFeedback: '¡Correcto! El operador / de pathlib une componentes de ruta. Es equivalente a os.path.join("fotos", "imagenes", "foto.jpg") pero más legible.',
        incorrectFeedback: 'En pathlib, el operador / une componentes de ruta. Path("fotos") / "imagenes" / "foto.jpg" construye el Path "fotos/imagenes/foto.jpg" sin crear nada en el disco.',
      },
      {
        question: '¿Por qué es importante separar el código en funciones en este mini proyecto?',
        options: [
          'Python requiere funciones para scripts de más de 10 líneas',
          'Permite testear cada parte independientemente y reutilizar funciones',
          'Las funciones hacen el script más rápido',
          'Es solo una cuestión estética',
        ],
        correctAnswer: 'Permite testear cada parte independientemente y reutilizar funciones',
        correctFeedback: '¡Correcto! Con funciones separadas puedes testear clasificar() independientemente, o reutilizar guardar_log() en otro proyecto. El código modular es mantenible y extensible.',
        incorrectFeedback: 'Las funciones permiten testear cada parte por separado, reutilizar código, y entender el programa leyendo main(). Un script monolítico de 200 líneas es difícil de mantener.',
      },
      {
        question: '¿Cuál es el propósito del patrón dry_run en el organizador?',
        options: [
          'Ejecutar el script más rápido',
          'Permitir al usuario ver exactamente qué archivos se moverán antes de hacerlo',
          'Probar que Python está instalado correctamente',
          'Desactivar los mensajes de error',
        ],
        correctAnswer: 'Permitir al usuario ver exactamente qué archivos se moverán antes de hacerlo',
        correctFeedback: '¡Correcto! Con --dry-run el usuario puede verificar: "sí, esos 50 archivos deberían ir a esas carpetas". Antes de ejecutar algo irreversible como mover archivos, el preview es crucial.',
        incorrectFeedback: '--dry-run permite ver el plan antes de ejecutarlo. Mover archivos puede ser difícil de revertir manualmente, así que revisar primero con dry-run es una buena práctica de seguridad.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module28: Module = {
  number: 28,
  title: 'Crear herramientas de línea de comandos',
  level: 'practico',
  lessons: lessonsModule28,
}
