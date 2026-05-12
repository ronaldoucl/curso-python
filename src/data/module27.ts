import type { Lesson } from '@/types'

export const lessonsModule27: Lesson[] = [
  {
    slug: 'scripts-productividad',
    title: '¿Qué es un script de productividad?',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 143,
    description: 'Aprende cómo crear scripts pequeños que resuelven tareas reales del día a día.',
    explanation: `## ¿Qué es un script de productividad?

Un script de productividad es un programa pequeño que **automatiza una tarea repetitiva** que normalmente harías a mano. No tiene que ser complicado — de hecho, los mejores scripts son simples y hacen una sola cosa bien.

### La mentalidad correcta

Hazte esta pregunta cada semana:

> *"¿Qué hago manualmente todas las semanas que podría hacer Python por mí?"*

Ejemplos comunes:
- Renombrar 50 archivos con un patrón específico
- Convertir formatos de archivo (CSV a Excel, JSON a CSV)
- Limpiar datos con errores de formato
- Generar resúmenes de texto o reportes
- Enviar correos o notificaciones automáticas

### Antes y después de un script

**Sin script (manual):**
1. Abrir cada archivo uno por uno
2. Copiar el contenido
3. Pegar en otro formato
4. Guardar con nuevo nombre
5. Repetir 40 veces... 😩

**Con script (automatizado):**
\`\`\`python
import os
import csv
import json

def convertir_csv_a_json(carpeta):
    for archivo in os.listdir(carpeta):
        if archivo.endswith('.csv'):
            convertir(os.path.join(carpeta, archivo))
    print("¡Listo! Todos los archivos convertidos.")

convertir_csv_a_json('./datos')
\`\`\`

Resultado: 40 archivos convertidos en segundos. ✅

### Tipos de scripts de productividad

| Tipo | Ejemplo |
|------|---------|
| **Conversión de formatos** | CSV → JSON, Word → PDF |
| **Limpieza de datos** | Eliminar duplicados, corregir mayúsculas |
| **Organización de archivos** | Mover fotos por fecha, renombrar en lote |
| **Generación de reportes** | Resumir ventas, generar estadísticas |
| **Automatización de decisiones** | Si archivo > 10MB, moverlo a archivos grandes |

### Características de un buen script de productividad

1. **Enfocado**: hace una sola cosa, y la hace bien
2. **Pequeño**: menos de 100 líneas normalmente
3. **Fácil de modificar**: otro programador puede ajustarlo rápido
4. **Seguro**: no borra datos sin confirmación
5. **Claro en su salida**: imprime lo que está haciendo

### ¿Cuándo vale la pena escribir un script?

Una regla práctica: si la tarea toma más de **10 minutos manualmente** y la haces **más de una vez**, vale la pena automatizarla.

Si la haces cada semana y toma 30 minutos, en un año perdiste **26 horas**. Un script que tardas 2 horas en escribir se amortiza en menos de un mes.`,
    codeExample: `# Ejemplo: antes y después de automatizar

# ❌ Forma manual (conceptual):
# 1. Abrir carpeta
# 2. Seleccionar archivo
# 3. Copiar contenido
# 4. Pegar en otra app
# 5. Repetir 50 veces

# ✅ Con Python:
import os

def procesar_archivos_txt(carpeta, extension='.txt'):
    """Script simple de productividad: procesa todos los archivos de texto."""
    archivos_procesados = 0
    errores = 0

    for nombre_archivo in os.listdir(carpeta):
        if nombre_archivo.endswith(extension):
            ruta_completa = os.path.join(carpeta, nombre_archivo)
            try:
                with open(ruta_completa, 'r', encoding='utf-8') as f:
                    contenido = f.read()

                # Aquí va tu lógica: limpiar, convertir, resumir...
                contenido_procesado = contenido.strip().lower()

                ruta_salida = ruta_completa.replace('.txt', '_procesado.txt')
                with open(ruta_salida, 'w', encoding='utf-8') as f:
                    f.write(contenido_procesado)

                archivos_procesados += 1
                print(f"  ✓ Procesado: {nombre_archivo}")

            except Exception as e:
                errores += 1
                print(f"  ✗ Error con {nombre_archivo}: {e}")

    print(f"\\nResumen: {archivos_procesados} procesados, {errores} errores.")

# Uso:
# procesar_archivos_txt('./mis_documentos')

# Demostración con datos de ejemplo:
print("Simulando procesamiento de archivos...")
archivos_ejemplo = ['reporte_enero.txt', 'reporte_febrero.txt', 'notas.txt']
for archivo in archivos_ejemplo:
    print(f"  ✓ Procesado: {archivo}")
print("\\n¡Script completado! 3 archivos procesados, 0 errores.")`,
    keyPoints: [
      'Un script de productividad automatiza tareas repetitivas que normalmente harías a mano',
      'La pregunta clave: "¿Qué hago manualmente cada semana que Python podría hacer?"',
      'Un buen script es enfocado, pequeño, fácil de modificar y seguro',
      'Si una tarea toma más de 10 minutos y la repites, vale la pena automatizarla',
      'Los scripts de productividad más comunes: convertir formatos, limpiar datos, organizar archivos',
    ],
    exercise: {
      description: 'Piensa en tres tareas repetitivas que haces en tu computadora (no tienen que ser de programación). Para cada una, escribe: (1) cuánto tiempo toma manualmente, (2) con qué frecuencia la haces, y (3) cómo describirías lo que debería hacer el script en una oración. Luego elige la más sencilla e intenta escribir el esqueleto del script (funciones sin implementar, con comentarios describiendo qué harían).',
      hint: 'Ejemplos de tareas cotidianas: organizar descargas por tipo de archivo, renombrar fotos con la fecha, crear carpetas con la fecha de hoy. Empieza con `def mi_tarea():` y dentro pon comentarios como `# 1. Leer archivos de la carpeta`, `# 2. Filtrar por extensión`, etc.',
    },
    quiz: [
      {
        question: '¿Cuál es la característica más importante de un buen script de productividad?',
        options: [
          'Debe ser lo más largo posible para cubrir todos los casos',
          'Hace una sola cosa, y la hace bien',
          'Debe tener una interfaz gráfica',
          'Debe usar las librerías más avanzadas disponibles',
        ],
        correctAnswer: 'Hace una sola cosa, y la hace bien',
        correctFeedback: '¡Correcto! Los mejores scripts de productividad son enfocados: hacen una cosa específica muy bien. Esto los hace fáciles de entender, mantener y modificar.',
        incorrectFeedback: 'Un buen script de productividad es pequeño y enfocado: hace una sola cosa bien. Los scripts grandes y complicados son difíciles de mantener y modificar.',
      },
      {
        question: '¿Cuándo vale más la pena escribir un script de productividad?',
        options: [
          'Para tareas que solo harás una vez en tu vida',
          'Para tareas que toman mucho tiempo manualmente y las repites frecuentemente',
          'Solo para tareas que toman más de 8 horas manuales',
          'Solo si eres programador profesional',
        ],
        correctAnswer: 'Para tareas que toman mucho tiempo manualmente y las repites frecuentemente',
        correctFeedback: '¡Exacto! La regla práctica es: si la tarea toma más de 10 minutos y la haces más de una vez, vale la pena automatizarla.',
        incorrectFeedback: 'Vale la pena automatizar cuando la tarea es repetitiva y toma tiempo. Si la haces una sola vez, quizás no vale la pena el esfuerzo de escribir el script.',
      },
      {
        question: '¿Cuál de estos es un ejemplo típico de script de productividad?',
        options: [
          'Un videojuego completo en Python',
          'Una inteligencia artificial que aprende sola',
          'Un script que renombra 200 fotos añadiendo la fecha automáticamente',
          'Un sistema operativo escrito en Python',
        ],
        correctAnswer: 'Un script que renombra 200 fotos añadiendo la fecha automáticamente',
        correctFeedback: '¡Correcto! Renombrar archivos en lote es un caso de uso perfecto para scripts de productividad: tarea repetitiva, mecánica, y que tomaría mucho tiempo hacerla a mano.',
        incorrectFeedback: 'Los scripts de productividad son pequeños programas para tareas cotidianas. Renombrar 200 fotos es ideal: sería lento a mano, pero rápido con Python.',
      },
      {
        question: 'Si una tarea manual toma 30 minutos semanales, ¿en cuánto tiempo se amortiza un script que tardaste 2 horas en escribir?',
        options: [
          'Nunca, no vale la pena',
          'En aproximadamente 4 semanas',
          'En más de un año',
          'Solo si lo usan otras personas',
        ],
        correctAnswer: 'En aproximadamente 4 semanas',
        correctFeedback: '¡Correcto! 2 horas ÷ 0.5 horas/semana = 4 semanas. Después de eso, cada semana ahorras 30 minutos. En un año ahorras más de 24 horas.',
        incorrectFeedback: '2 horas de trabajo ÷ 30 minutos ahorrados por semana = 4 semanas para amortizarlo. Después de eso, cada semana es tiempo ganado.',
      },
      {
        question: '¿Cuál de estas opciones describe mejor la "mentalidad" para crear scripts de productividad?',
        options: [
          '"¿Puedo aprender algo nuevo con este proyecto?"',
          '"¿Qué hago manualmente cada semana que Python podría hacer por mí?"',
          '"¿Puedo usar la librería más moderna para esto?"',
          '"¿Cómo hago que este script sea el más rápido posible?"',
        ],
        correctAnswer: '"¿Qué hago manualmente cada semana que Python podría hacer por mí?"',
        correctFeedback: '¡Exacto! Esa pregunta te orienta hacia tareas reales y repetitivas que genuinamente se pueden automatizar. Es la mentalidad correcta para encontrar oportunidades de automatización.',
        incorrectFeedback: 'La mentalidad clave es buscar tareas repetitivas reales: "¿Qué hago manualmente cada semana que Python podría hacer?" Eso te lleva a automatizaciones útiles.',
      },
      {
        question: '¿Cuál es una característica de seguridad importante en un script de productividad?',
        options: [
          'Siempre ejecutarse como administrador',
          'No mostrar mensajes al usuario para no distraerlo',
          'No borrar datos sin pedir confirmación al usuario',
          'Guardar contraseñas en el código',
        ],
        correctAnswer: 'No borrar datos sin pedir confirmación al usuario',
        correctFeedback: '¡Correcto! Un script seguro siempre pide confirmación antes de realizar acciones destructivas como borrar o sobreescribir archivos. Esto previene errores costosos.',
        incorrectFeedback: 'La seguridad en scripts de productividad significa no realizar acciones destructivas sin confirmación. Siempre pide "¿Estás seguro?" antes de borrar o sobreescribir.',
      },
      {
        question: '¿Qué tipo de salida debería tener un buen script de productividad?',
        options: [
          'Ninguna salida, solo hacer el trabajo en silencio',
          'Solo mostrar errores cuando ocurren',
          'Imprimir qué está haciendo y un resumen al final',
          'Abrir una ventana gráfica con animaciones',
        ],
        correctAnswer: 'Imprimir qué está haciendo y un resumen al final',
        correctFeedback: '¡Correcto! Un buen script es transparente: informa al usuario qué está procesando y da un resumen al final. Esto genera confianza y permite detectar problemas.',
        incorrectFeedback: 'Un buen script comunica lo que hace: imprime el progreso y un resumen. Trabajar en silencio hace difícil saber si algo salió mal.',
      },
    ],
  },
  {
    slug: 'conversor-unidades',
    title: 'Crear un conversor de unidades',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 144,
    description: 'Crea un script para convertir unidades como kilómetros a millas, Celsius a Fahrenheit o minutos a horas.',
    explanation: `## Crear un conversor de unidades

Un conversor de unidades es un proyecto perfecto para practicar: usa diccionarios, funciones, y entrada del usuario, todo en un script útil del mundo real.

### Estrategia: diccionario de factores de conversión

En lugar de escribir una función por cada conversión, usamos un diccionario con los factores:

\`\`\`python
CONVERSIONES = {
    'km_a_millas': 0.621371,
    'millas_a_km': 1.60934,
    'kg_a_libras': 2.20462,
    'libras_a_kg': 0.453592,
}

def convertir(valor, tipo):
    factor = CONVERSIONES.get(tipo)
    if factor:
        return valor * factor
    raise ValueError(f"Conversión '{tipo}' no reconocida")
\`\`\`

### Conversiones disponibles

**Distancia:**
- Kilómetros ↔ Millas: 1 km = 0.621371 millas
- Metros ↔ Pies: 1 metro = 3.28084 pies

**Temperatura** (requiere fórmulas, no solo multiplicación):
- Celsius → Fahrenheit: \`F = C × 9/5 + 32\`
- Fahrenheit → Celsius: \`C = (F - 32) × 5/9\`
- Celsius → Kelvin: \`K = C + 273.15\`

**Peso:**
- Kilogramos ↔ Libras: 1 kg = 2.20462 libras

### Patrón: función por tipo de conversión

Para conversiones con fórmulas (como temperatura), usamos funciones separadas:

\`\`\`python
def celsius_a_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_a_celsius(f):
    return (f - 32) * 5/9

def celsius_a_kelvin(c):
    return c + 273.15
\`\`\`

### Menú interactivo con input()

\`\`\`python
def mostrar_menu():
    print("\\n=== CONVERSOR DE UNIDADES ===")
    print("1. Kilómetros a Millas")
    print("2. Millas a Kilómetros")
    print("3. Celsius a Fahrenheit")
    print("4. Kilogramos a Libras")
    print("0. Salir")

def obtener_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Por favor ingresa un número válido.")
\`\`\`

### Manejo de errores para entradas inválidas

Siempre valida la entrada del usuario:

\`\`\`python
opcion = input("Elige una opción: ").strip()
if not opcion.isdigit():
    print("Por favor ingresa un número.")
elif int(opcion) not in opciones_validas:
    print("Opción no disponible.")
\`\`\`

### Extender el conversor fácilmente

Gracias al diseño con diccionario, agregar una conversión nueva es trivial:

\`\`\`python
# Agregar litros a galones:
CONVERSIONES['litros_a_galones'] = 0.264172
# ¡Eso es todo!
\`\`\``,
    codeExample: `# Conversor de unidades interactivo

# --- Factores de conversión (fácil de extender) ---
CONVERSIONES_SIMPLES = {
    'km_millas': 0.621371,
    'millas_km': 1.60934,
    'kg_libras': 2.20462,
    'libras_kg': 0.453592,
    'metros_pies': 3.28084,
    'pies_metros': 0.3048,
}

# --- Conversiones de temperatura (usan fórmulas) ---
def celsius_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_celsius(f):
    return (f - 32) * 5/9

def celsius_kelvin(c):
    return c + 273.15

def kelvin_celsius(k):
    return k - 273.15

# --- Función principal de conversión ---
def convertir(valor, tipo):
    if tipo in CONVERSIONES_SIMPLES:
        return valor * CONVERSIONES_SIMPLES[tipo]

    conversiones_temp = {
        'celsius_fahrenheit': celsius_fahrenheit,
        'fahrenheit_celsius': fahrenheit_celsius,
        'celsius_kelvin': celsius_kelvin,
        'kelvin_celsius': kelvin_celsius,
    }
    if tipo in conversiones_temp:
        return conversiones_temp[tipo](valor)

    raise ValueError(f"Tipo de conversión '{tipo}' no reconocido")

# --- Función para leer números con validación ---
def leer_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("  ⚠ Por favor ingresa un número válido (ej: 25.5)")

# --- Demo sin input() interactivo ---
print("=== CONVERSOR DE UNIDADES - DEMO ===")
print()

ejemplos = [
    (100, 'km_millas', 'km', 'millas'),
    (5, 'millas_km', 'millas', 'km'),
    (25, 'celsius_fahrenheit', '°C', '°F'),
    (98.6, 'fahrenheit_celsius', '°F', '°C'),
    (70, 'kg_libras', 'kg', 'libras'),
    (1.80, 'metros_pies', 'metros', 'pies'),
]

for valor, tipo, unidad_entrada, unidad_salida in ejemplos:
    resultado = convertir(valor, tipo)
    print(f"  {valor} {unidad_entrada} = {resultado:.2f} {unidad_salida}")

print()
print("Para uso interactivo, agrega el menú con input().")`,
    keyPoints: [
      'Usa un diccionario de factores de conversión para conversiones simples (multiplicación)',
      'Las conversiones de temperatura necesitan funciones propias por sus fórmulas especiales',
      'Usa float(input()) dentro de un try/except para manejar entradas inválidas',
      'Un menú numérico con while True permite navegación repetida',
      'El diseño con diccionario hace fácil agregar nuevas conversiones sin modificar lógica central',
    ],
    exercise: {
      description: 'Extiende el conversor de unidades agregando al menos dos categorías nuevas: (1) conversión de tiempo (minutos a horas, horas a días, días a semanas) y (2) conversión de velocidad (km/h a m/s, m/s a km/h). Agrega estas opciones al menú interactivo y asegúrate de que el usuario pueda elegirlas.',
      hint: 'Para tiempo: 1 hora = 60 minutos, 1 día = 24 horas, 1 semana = 7 días. Para velocidad: km/h × (1000/3600) = m/s, que simplificado es × 0.2778. Agrega las claves nuevas al diccionario CONVERSIONES_SIMPLES.',
    },
    quiz: [
      {
        question: '¿Por qué las conversiones de temperatura se manejan con funciones separadas en lugar del diccionario de factores?',
        options: [
          'Porque las temperaturas son más importantes',
          'Porque sus fórmulas no son simples multiplicaciones, incluyen suma/resta',
          'Porque Python no puede multiplicar temperaturas',
          'Por razones de seguridad',
        ],
        correctAnswer: 'Porque sus fórmulas no son simples multiplicaciones, incluyen suma/resta',
        correctFeedback: '¡Correcto! Celsius a Fahrenheit es F = C × 9/5 + 32. No es solo multiplicar por un factor constante, así que necesita su propia función.',
        incorrectFeedback: 'Las temperaturas tienen fórmulas como F = C × 9/5 + 32 que incluyen suma. El diccionario solo funciona para conversiones de multiplicación simple.',
      },
      {
        question: '¿Cuál es la fórmula correcta para convertir Celsius a Fahrenheit?',
        options: [
          'F = C + 32',
          'F = C × 1.8',
          'F = C × 9/5 + 32',
          'F = (C + 32) × 5/9',
        ],
        correctAnswer: 'F = C × 9/5 + 32',
        correctFeedback: '¡Correcto! La fórmula es F = C × 9/5 + 32. Por ejemplo: 0°C = 32°F, 100°C = 212°F.',
        incorrectFeedback: 'La fórmula correcta es F = C × 9/5 + 32. Recuerda que el agua hierve a 100°C = 212°F para verificar.',
      },
      {
        question: '¿Qué hace este código?\n\ndef leer_numero(mensaje):\n    while True:\n        try:\n            return float(input(mensaje))\n        except ValueError:\n            print("Ingresa un número válido.")',
        options: [
          'Lee un número y falla si no es válido',
          'Lee un número y sigue pidiendo hasta que el usuario ingrese uno válido',
          'Convierte texto a número sin validación',
          'Solo acepta números enteros',
        ],
        correctAnswer: 'Lee un número y sigue pidiendo hasta que el usuario ingrese uno válido',
        correctFeedback: '¡Correcto! El bucle while True combinado con try/except hace que la función siga pidiendo input hasta que el usuario ingrese algo que pueda convertirse a float.',
        incorrectFeedback: 'El while True + try/except crea un bucle que solo termina cuando float(input()) tiene éxito. Si el usuario escribe texto, el except lo atrapa y vuelve a pedir.',
      },
      {
        question: '¿Cuántos kilos equivalen a 1 libra aproximadamente?',
        options: [
          '2.20 kg',
          '0.45 kg',
          '1.60 kg',
          '0.62 kg',
        ],
        correctAnswer: '0.45 kg',
        correctFeedback: '¡Correcto! 1 libra ≈ 0.453592 kg. Al revés: 1 kg ≈ 2.20462 libras.',
        incorrectFeedback: '1 libra ≈ 0.453592 kg. El factor 2.20462 va en la dirección contraria: 1 kg = 2.20462 libras.',
      },
      {
        question: '¿Cuál es la ventaja de usar un diccionario de factores de conversión en lugar de múltiples if/elif?',
        options: [
          'Los diccionarios son siempre más rápidos que if/elif',
          'Agregar una conversión nueva solo requiere agregar una clave al diccionario',
          'Los diccionarios ocupan menos memoria',
          'Solo los diccionarios pueden guardar números decimales',
        ],
        correctAnswer: 'Agregar una conversión nueva solo requiere agregar una clave al diccionario',
        correctFeedback: '¡Exacto! Con diccionario, agregar "litros a galones" es una línea: CONVERSIONES["litros_galones"] = 0.264172. Con if/elif tendrías que agregar un bloque nuevo.',
        incorrectFeedback: 'La ventaja principal es la extensibilidad: agregar conversiones nuevas es trivial con un diccionario, solo añades una clave-valor sin tocar la lógica central.',
      },
      {
        question: '¿Qué sucede cuando llamas a dict.get("clave_inexistente") en Python?',
        options: [
          'Lanza un KeyError',
          'Devuelve None por defecto',
          'Devuelve 0',
          'Devuelve una cadena vacía',
        ],
        correctAnswer: 'Devuelve None por defecto',
        correctFeedback: '¡Correcto! dict.get("clave") devuelve None si la clave no existe, a diferencia de dict["clave"] que lanza KeyError. Puedes dar un valor por defecto: dict.get("clave", 0).',
        incorrectFeedback: 'dict.get("clave") devuelve None si la clave no existe (no lanza error). Esto lo hace seguro para verificar si una conversión existe antes de usarla.',
      },
      {
        question: '¿Cuántas millas equivalen aproximadamente a 10 kilómetros?',
        options: [
          '16.09 millas',
          '10.00 millas',
          '6.21 millas',
          '3.28 millas',
        ],
        correctAnswer: '6.21 millas',
        correctFeedback: '¡Correcto! 1 km = 0.621371 millas, entonces 10 km = 6.21371 millas. El factor 3.28 corresponde a metros a pies.',
        incorrectFeedback: '10 km × 0.621371 millas/km ≈ 6.21 millas. El factor 1.60934 va al revés: es de millas a kilómetros.',
      },
    ],
  },
  {
    slug: 'generador-contrasenas',
    title: 'Crear un generador de contraseñas',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 145,
    description: 'Crea un generador de contraseñas configurable usando módulos estándar de Python.',
    explanation: `## Crear un generador de contraseñas seguro

### ¿Por qué usar \`secrets\` y no \`random\`?

Python tiene dos módulos para generar valores aleatorios:

| | \`random\` | \`secrets\` |
|---|---|---|
| **Uso** | Simulaciones, juegos | Criptografía, contraseñas |
| **Predecible** | Sí (dado el mismo seed) | No |
| **Velocidad** | Más rápido | Ligeramente más lento |
| **Seguridad** | ❌ No usar para contraseñas | ✅ Diseñado para esto |

El módulo \`random\` es pseudoaleatorio: un atacante con suficiente información puede predecir los valores. \`secrets\` usa la fuente de entropía del sistema operativo, que es criptográficamente segura.

### El módulo \`string\`

\`\`\`python
import string

string.ascii_lowercase  # 'abcdefghijklmnopqrstuvwxyz'
string.ascii_uppercase  # 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
string.digits           # '0123456789'
string.punctuation      # '!"#\$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~'
\`\`\`

### Generación básica de contraseña

\`\`\`python
import secrets
import string

def generar_contrasena(longitud=12):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(caracteres) for _ in range(longitud))
\`\`\`

### Asegurar al menos un carácter de cada tipo

Un problema común: una contraseña generada aleatoriamente podría no tener letras mayúsculas, aunque las hayamos incluido en el pool. La solución:

\`\`\`python
import secrets
import string

def generar_contrasena_robusta(longitud=16, mayusculas=True, numeros=True, simbolos=True):
    pool = string.ascii_lowercase  # siempre incluimos minúsculas
    obligatorios = [secrets.choice(string.ascii_lowercase)]

    if mayusculas:
        pool += string.ascii_uppercase
        obligatorios.append(secrets.choice(string.ascii_uppercase))
    if numeros:
        pool += string.digits
        obligatorios.append(secrets.choice(string.digits))
    if simbolos:
        pool += string.punctuation
        obligatorios.append(secrets.choice(string.punctuation))

    # Completar hasta la longitud deseada
    restantes = longitud - len(obligatorios)
    contrasena = obligatorios + [secrets.choice(pool) for _ in range(restantes)]

    # Mezclar para que los obligatorios no estén siempre al inicio
    secrets.SystemRandom().shuffle(contrasena)
    return ''.join(contrasena)
\`\`\`

### Generar múltiples contraseñas

\`\`\`python
def generar_multiples(cantidad=5, longitud=16):
    return [generar_contrasena_robusta(longitud) for _ in range(cantidad)]
\`\`\`

### ¿Por qué \`secrets.choice()\` > \`random.choice()\`?

\`secrets.choice()\` usa \`os.urandom()\` internamente, que obtiene bytes aleatorios del sistema operativo. En Linux usa \`/dev/urandom\`, en Windows usa \`CryptGenRandom\`. Estos generadores son imprevisibles incluso para atacantes con acceso al código fuente.

\`random.choice()\` usa el algoritmo Mersenne Twister. Aunque es excelente para simulaciones, sus valores pueden predecirse si un atacante observa suficientes salidas.`,
    codeExample: `import secrets
import string

# ============================================================
# GENERADOR DE CONTRASEÑAS SEGURO
# Usa secrets (no random) para seguridad criptográfica
# ============================================================

def generar_contrasena(
    longitud=16,
    usar_mayusculas=True,
    usar_numeros=True,
    usar_simbolos=True
):
    """
    Genera una contraseña segura usando el módulo secrets.

    Args:
        longitud: Número de caracteres (mínimo 8 recomendado)
        usar_mayusculas: Incluir letras mayúsculas
        usar_numeros: Incluir dígitos 0-9
        usar_simbolos: Incluir símbolos especiales

    Returns:
        String con la contraseña generada
    """
    if longitud < 4:
        raise ValueError("La longitud mínima es 4 caracteres")

    # Construir el pool de caracteres y la lista de obligatorios
    pool = string.ascii_lowercase
    obligatorios = [secrets.choice(string.ascii_lowercase)]

    if usar_mayusculas:
        pool += string.ascii_uppercase
        obligatorios.append(secrets.choice(string.ascii_uppercase))

    if usar_numeros:
        pool += string.digits
        obligatorios.append(secrets.choice(string.digits))

    if usar_simbolos:
        # Excluir caracteres que confunden visualmente: l, O, 0, I
        simbolos_seguros = '!@#\$%^&*()-_=+[]{}?'
        pool += simbolos_seguros
        obligatorios.append(secrets.choice(simbolos_seguros))

    # Completar con caracteres aleatorios del pool completo
    restantes = longitud - len(obligatorios)
    contrasena = obligatorios + [secrets.choice(pool) for _ in range(restantes)]

    # Mezclar con shuffle criptográfico para que los obligatorios
    # no aparezcan siempre en las primeras posiciones
    rng = secrets.SystemRandom()
    rng.shuffle(contrasena)

    return ''.join(contrasena)


def evaluar_fortaleza(contrasena):
    """Evalúa qué tan fuerte es una contraseña."""
    puntos = 0
    if len(contrasena) >= 12: puntos += 1
    if len(contrasena) >= 16: puntos += 1
    if any(c.islower() for c in contrasena): puntos += 1
    if any(c.isupper() for c in contrasena): puntos += 1
    if any(c.isdigit() for c in contrasena): puntos += 1
    if any(not c.isalnum() for c in contrasena): puntos += 1

    if puntos <= 2: return "Débil"
    if puntos <= 4: return "Moderada"
    return "Fuerte"


# --- Demostración ---
print("=== GENERADOR DE CONTRASEÑAS ===\\n")

# Generar contraseñas con distintas configuraciones
configs = [
    (12, True, True, False, "Solo letras y números"),
    (16, True, True, True,  "Completa (recomendada)"),
    (20, True, True, True,  "Extra larga"),
    (8,  False, True, False, "Solo minúsculas y números"),
]

for longitud, may, num, sim, descripcion in configs:
    pwd = generar_contrasena(longitud, may, num, sim)
    fortaleza = evaluar_fortaleza(pwd)
    print(f"[{descripcion}]")
    print(f"  Contraseña: {pwd}")
    print(f"  Fortaleza:  {fortaleza}\\n")

# Generar lote de contraseñas
print("--- Lote de 5 contraseñas para elegir ---")
for i in range(5):
    pwd = generar_contrasena(16)
    print(f"  {i+1}. {pwd}")`,
    keyPoints: [
      'Usa el módulo secrets en lugar de random para generar contraseñas: es criptográficamente seguro',
      'El módulo string proporciona conjuntos de caracteres listos: ascii_lowercase, ascii_uppercase, digits, punctuation',
      'Garantiza al menos un carácter de cada tipo elegido antes de rellenar aleatoriamente',
      'Usa secrets.SystemRandom().shuffle() para mezclar los caracteres obligatorios',
      'La longitud mínima recomendada para contraseñas seguras es 12-16 caracteres',
    ],
    exercise: {
      description: 'Mejora el generador de contraseñas agregando: (1) una opción para excluir caracteres visualmente confusos (l, 1, O, 0, I), (2) una función que genere una "passphrase" de 4-6 palabras aleatorias separadas por guiones (más fácil de recordar pero igual de segura), y (3) la capacidad de copiar la contraseña al portapapeles usando el módulo pyperclip.',
      hint: 'Para la passphrase, necesitas una lista de palabras. Puedes usar una pequeña lista hardcoded de 50-100 palabras comunes en español. Para el portapapeles: `import pyperclip; pyperclip.copy(mi_contrasena)`. Para excluir caracteres: filtra el string con una comprensión de lista.',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda usar secrets.choice() en lugar de random.choice() para generar contraseñas?',
        options: [
          'Porque secrets es más rápido que random',
          'Porque random.choice() no acepta strings',
          'Porque secrets usa entropía del sistema operativo y es criptográficamente seguro',
          'Porque secrets genera contraseñas más largas automáticamente',
        ],
        correctAnswer: 'Porque secrets usa entropía del sistema operativo y es criptográficamente seguro',
        correctFeedback: '¡Correcto! secrets usa /dev/urandom en Linux o CryptGenRandom en Windows. Los valores son impredecibles incluso para atacantes. random usa Mersenne Twister que puede predecirse.',
        incorrectFeedback: 'secrets es más seguro porque usa la fuente de entropía del sistema operativo, que produce valores impredecibles. random.choice() es pseudoaleatorio y puede predecirse con suficiente información.',
      },
      {
        question: '¿Qué contiene string.punctuation en Python?',
        options: [
          'Solo los signos de puntuación: . , ; :',
          'Todos los símbolos especiales del teclado: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
          'Solo los caracteres @, #, $ y %',
          'Los mismos caracteres que string.digits',
        ],
        correctAnswer: 'Todos los símbolos especiales del teclado: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
        correctFeedback: '¡Correcto! string.punctuation incluye todos los símbolos de puntuación ASCII imprimibles, no solo los puntos y comas.',
        incorrectFeedback: 'string.punctuation incluye todos los símbolos especiales ASCII imprimibles: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~. Es más amplio que solo la puntuación gramatical.',
      },
      {
        question: '¿Por qué es importante mezclar la contraseña después de agregar los caracteres "obligatorios"?',
        options: [
          'Para que sea más larga',
          'Para que los caracteres obligatorios no aparezcan siempre en las primeras posiciones',
          'Porque secrets.choice() requiere que los datos estén ordenados',
          'Para eliminar caracteres duplicados',
        ],
        correctAnswer: 'Para que los caracteres obligatorios no aparezcan siempre en las primeras posiciones',
        correctFeedback: '¡Exacto! Sin mezclar, la contraseña siempre empezaría con una minúscula, luego una mayúscula, luego un número... lo que reduce la entropía efectiva.',
        incorrectFeedback: 'Si no mezclamos, los caracteres obligatorios siempre están al inicio (ej: siempre empieza con minúscula, luego mayúscula, número...). Mezclar distribuye aleatoriamente todos los caracteres.',
      },
      {
        question: '¿Cuál es la longitud mínima recomendada para una contraseña segura?',
        options: [
          '4 caracteres',
          '6 caracteres',
          '8 caracteres',
          '12-16 caracteres',
        ],
        correctAnswer: '12-16 caracteres',
        correctFeedback: '¡Correcto! Las mejores prácticas actuales recomiendan 12-16 caracteres mínimo. Las contraseñas cortas son vulnerables a ataques de fuerza bruta incluso con caracteres especiales.',
        incorrectFeedback: 'Los estándares actuales de seguridad recomiendan 12-16 caracteres como mínimo. Las contraseñas cortas, aunque incluyan símbolos, pueden romperse por fuerza bruta.',
      },
      {
        question: '¿Cuál de estas líneas de código es más segura para generar un carácter aleatorio?',
        options: [
          'random.choice(caracteres)',
          'secrets.choice(caracteres)',
          'chr(random.randint(65, 90))',
          'caracteres[hash(time.time()) % len(caracteres)]',
        ],
        correctAnswer: 'secrets.choice(caracteres)',
        correctFeedback: '¡Correcto! secrets.choice() usa la fuente de aleatoriedad criptográfica del sistema operativo, diseñada específicamente para aplicaciones de seguridad.',
        incorrectFeedback: 'secrets.choice() es la opción correcta. Usa la entropía del sistema operativo. Las otras opciones son pseudoaleatorias o directamente predecibles.',
      },
      {
        question: '¿Qué hace string.ascii_letters en Python?',
        options: [
          'Solo letras minúsculas',
          'Solo letras mayúsculas',
          'Letras minúsculas y mayúsculas combinadas',
          'Letras y números combinados',
        ],
        correctAnswer: 'Letras minúsculas y mayúsculas combinadas',
        correctFeedback: '¡Correcto! string.ascii_letters = string.ascii_lowercase + string.ascii_uppercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".',
        incorrectFeedback: 'string.ascii_letters combina ascii_lowercase y ascii_uppercase: todas las letras del alfabeto en minúsculas y mayúsculas.',
      },
      {
        question: '¿Qué método de secrets permite mezclar una lista de forma criptográficamente segura?',
        options: [
          'secrets.mix(lista)',
          'secrets.shuffle(lista)',
          'secrets.SystemRandom().shuffle(lista)',
          'secrets.random.shuffle(lista)',
        ],
        correctAnswer: 'secrets.SystemRandom().shuffle(lista)',
        correctFeedback: '¡Correcto! secrets.SystemRandom() crea un generador de números aleatorios criptográficamente seguro, y su método shuffle() mezcla la lista in-place de forma segura.',
        incorrectFeedback: 'La forma correcta es secrets.SystemRandom().shuffle(lista). Esto usa el generador seguro del módulo secrets para la operación de mezcla.',
      },
    ],
  },
  {
    slug: 'recordatorio-simple',
    title: 'Crear un recordatorio simple',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 146,
    description: 'Crea un programa que muestre recordatorios o mensajes programados de forma simple.',
    explanation: `## Crear un sistema de recordatorios simple

### Estructura de datos: JSON para persistencia

Los recordatorios necesitan guardarse entre ejecuciones del script. JSON es perfecto para esto:

\`\`\`python
# recordatorios.json
[
  {
    "id": 1,
    "fecha": "2024-03-15",
    "hora": "09:00",
    "mensaje": "Reunión con el equipo",
    "completado": false
  },
  {
    "id": 2,
    "fecha": "2024-03-15",
    "hora": "15:30",
    "mensaje": "Llamar al médico",
    "completado": true
  }
]
\`\`\`

### Leer y guardar recordatorios

\`\`\`python
import json
import os

ARCHIVO = 'recordatorios.json'

def cargar_recordatorios():
    if not os.path.exists(ARCHIVO):
        return []
    with open(ARCHIVO, 'r', encoding='utf-8') as f:
        return json.load(f)

def guardar_recordatorios(recordatorios):
    with open(ARCHIVO, 'w', encoding='utf-8') as f:
        json.dump(recordatorios, f, indent=2, ensure_ascii=False)
\`\`\`

### Comparar fechas con datetime

\`\`\`python
from datetime import datetime

def esta_vencido(recordatorio):
    """¿Ya pasó la fecha y hora del recordatorio?"""
    fecha_hora_str = f"{recordatorio['fecha']} {recordatorio['hora']}"
    fecha_hora = datetime.strptime(fecha_hora_str, "%Y-%m-%d %H:%M")
    return datetime.now() >= fecha_hora

def es_de_hoy(recordatorio):
    """¿El recordatorio es para hoy?"""
    hoy = datetime.now().strftime("%Y-%m-%d")
    return recordatorio['fecha'] == hoy
\`\`\`

### Operaciones CRUD del sistema

**Agregar recordatorio:**
\`\`\`python
def agregar_recordatorio(fecha, hora, mensaje):
    recordatorios = cargar_recordatorios()
    nuevo_id = max((r['id'] for r in recordatorios), default=0) + 1
    recordatorios.append({
        'id': nuevo_id,
        'fecha': fecha,
        'hora': hora,
        'mensaje': mensaje,
        'completado': False
    })
    guardar_recordatorios(recordatorios)
    print(f"✓ Recordatorio #{nuevo_id} guardado.")
\`\`\`

**Listar recordatorios:**
\`\`\`python
def listar_recordatorios(solo_hoy=False):
    recordatorios = cargar_recordatorios()
    if solo_hoy:
        recordatorios = [r for r in recordatorios if es_de_hoy(r)]
    for r in sorted(recordatorios, key=lambda x: (x['fecha'], x['hora'])):
        estado = "✓" if r['completado'] else "○"
        print(f"[{estado}] #{r['id']} {r['fecha']} {r['hora']} - {r['mensaje']}")
\`\`\`

### Notificaciones de escritorio con plyer

Para mostrar notificaciones nativas del sistema operativo:

\`\`\`python
# pip install plyer
from plyer import notification

notification.notify(
    title='Recordatorio',
    message='Reunión con el equipo',
    timeout=10  # segundos que aparece
)
\`\`\`

Esta es una dependencia externa opcional. Para el script básico, imprimir en terminal es suficiente.`,
    codeExample: `import json
import os
from datetime import datetime

# Archivo donde se guardan los recordatorios
ARCHIVO_RECORDATORIOS = 'recordatorios.json'

# ============================================================
# FUNCIONES DE PERSISTENCIA
# ============================================================

def cargar_recordatorios():
    """Lee los recordatorios del archivo JSON."""
    if not os.path.exists(ARCHIVO_RECORDATORIOS):
        return []
    with open(ARCHIVO_RECORDATORIOS, 'r', encoding='utf-8') as f:
        return json.load(f)

def guardar_recordatorios(recordatorios):
    """Guarda los recordatorios en el archivo JSON."""
    with open(ARCHIVO_RECORDATORIOS, 'w', encoding='utf-8') as f:
        json.dump(recordatorios, f, indent=2, ensure_ascii=False)

# ============================================================
# OPERACIONES CRUD
# ============================================================

def agregar(fecha, hora, mensaje):
    """Agrega un nuevo recordatorio."""
    recordatorios = cargar_recordatorios()
    nuevo_id = max((r['id'] for r in recordatorios), default=0) + 1
    recordatorios.append({
        'id': nuevo_id,
        'fecha': fecha,       # formato: "YYYY-MM-DD"
        'hora': hora,         # formato: "HH:MM"
        'mensaje': mensaje,
        'completado': False
    })
    guardar_recordatorios(recordatorios)
    return nuevo_id

def listar(solo_pendientes=False):
    """Lista todos los recordatorios."""
    recordatorios = cargar_recordatorios()
    if solo_pendientes:
        recordatorios = [r for r in recordatorios if not r['completado']]
    return sorted(recordatorios, key=lambda x: (x['fecha'], x['hora']))

def marcar_completado(id_recordatorio):
    """Marca un recordatorio como completado."""
    recordatorios = cargar_recordatorios()
    for r in recordatorios:
        if r['id'] == id_recordatorio:
            r['completado'] = True
            guardar_recordatorios(recordatorios)
            return True
    return False

def eliminar(id_recordatorio):
    """Elimina un recordatorio."""
    recordatorios = cargar_recordatorios()
    nuevos = [r for r in recordatorios if r['id'] != id_recordatorio]
    if len(nuevos) < len(recordatorios):
        guardar_recordatorios(nuevos)
        return True
    return False

def revisar_hoy():
    """Muestra los recordatorios de hoy."""
    hoy = datetime.now().strftime("%Y-%m-%d")
    ahora = datetime.now()
    recordatorios = cargar_recordatorios()
    hoy_lista = [r for r in recordatorios if r['fecha'] == hoy]

    if not hoy_lista:
        print("No tienes recordatorios para hoy.")
        return

    print(f"=== Recordatorios para hoy ({hoy}) ===")
    for r in sorted(hoy_lista, key=lambda x: x['hora']):
        fecha_hora = datetime.strptime(f"{r['fecha']} {r['hora']}", "%Y-%m-%d %H:%M")
        vencido = ahora >= fecha_hora
        estado = "✓" if r['completado'] else ("⚠ VENCIDO" if vencido else "○ pendiente")
        print(f"  [{estado}] {r['hora']} - {r['mensaje']}")

# ============================================================
# DEMOSTRACIÓN
# ============================================================
print("=== SISTEMA DE RECORDATORIOS - DEMO ===\\n")

# Simulación sin escribir archivo real
recordatorios_demo = [
    {'id': 1, 'fecha': '2024-03-15', 'hora': '09:00', 'mensaje': 'Reunión de equipo', 'completado': True},
    {'id': 2, 'fecha': '2024-03-15', 'hora': '14:00', 'mensaje': 'Llamar al médico', 'completado': False},
    {'id': 3, 'fecha': '2024-03-16', 'hora': '10:30', 'mensaje': 'Entregar informe', 'completado': False},
]

print("Recordatorios guardados:")
for r in recordatorios_demo:
    estado = "✓" if r['completado'] else "○"
    print(f"  [{estado}] #{r['id']} {r['fecha']} {r['hora']} - {r['mensaje']}")

print("\\nFunciones disponibles:")
print("  agregar(fecha, hora, mensaje) - Crear recordatorio")
print("  listar(solo_pendientes=True)  - Ver recordatorios")
print("  marcar_completado(id)         - Marcar como hecho")
print("  eliminar(id)                  - Borrar recordatorio")
print("  revisar_hoy()                 - Ver los de hoy")`,
    keyPoints: [
      'Usa JSON para persistir los recordatorios entre ejecuciones del script',
      'El módulo datetime permite comparar fechas y detectar recordatorios vencidos',
      'datetime.strptime() convierte strings a objetos datetime para comparación',
      'Las operaciones CRUD (crear, leer, actualizar, borrar) se implementan como funciones simples',
      'Para notificaciones de escritorio, la librería plyer es una opción sencilla (pip install plyer)',
    ],
    exercise: {
      description: 'Extiende el sistema de recordatorios con: (1) la posibilidad de agregar recordatorios recurrentes (diario, semanal), (2) una función que muestre los recordatorios de los próximos 7 días ordenados por fecha y hora, y (3) una función que exporte los recordatorios pendientes a un archivo de texto legible.',
      hint: 'Para recurrentes, agrega un campo "recurrencia": "diaria" | "semanal" | null al JSON. Para los próximos 7 días usa timedelta: `from datetime import timedelta; limite = datetime.now() + timedelta(days=7)`. Para exportar a texto, usa un archivo .txt con formato legible.',
    },
    quiz: [
      {
        question: '¿Por qué se usa JSON para guardar los recordatorios en lugar de un archivo de texto plano?',
        options: [
          'Porque JSON es más rápido que texto plano',
          'Porque JSON permite guardar estructuras de datos organizadas y leerlas fácilmente',
          'Porque Python no puede leer archivos de texto',
          'Por razones de seguridad',
        ],
        correctAnswer: 'Porque JSON permite guardar estructuras de datos organizadas y leerlas fácilmente',
        correctFeedback: '¡Correcto! JSON preserva la estructura de datos (diccionarios, listas, tipos de datos) y Python puede leer/escribir JSON directamente con el módulo json.',
        incorrectFeedback: 'JSON es ideal porque preserva la estructura de datos. Con texto plano tendrías que parsear manualmente cada línea. json.load() y json.dump() hacen todo el trabajo.',
      },
      {
        question: '¿Qué hace datetime.strptime("2024-03-15 14:00", "%Y-%m-%d %H:%M")?',
        options: [
          'Formatea un objeto datetime como string',
          'Convierte un string en un objeto datetime',
          'Calcula la diferencia entre dos fechas',
          'Devuelve la fecha y hora actual',
        ],
        correctAnswer: 'Convierte un string en un objeto datetime',
        correctFeedback: '¡Correcto! strptime (parse time) convierte un string a datetime. El opuesto es strftime (format time) que convierte datetime a string.',
        incorrectFeedback: 'strptime = "string parse time": convierte string → datetime. strftime = "string format time": convierte datetime → string. Son opuestos.',
      },
      {
        question: '¿Qué hace este código?\n\nnuevo_id = max((r["id"] for r in recordatorios), default=0) + 1',
        options: [
          'Encuentra el ID más grande entre todos los recordatorios y le suma 1',
          'Genera un ID aleatorio',
          'Cuenta cuántos recordatorios hay',
          'Borra el recordatorio con el ID más grande',
        ],
        correctAnswer: 'Encuentra el ID más grande entre todos los recordatorios y le suma 1',
        correctFeedback: '¡Correcto! Usa max() con una expresión generadora para encontrar el ID máximo actual. default=0 maneja el caso de lista vacía. Sumar 1 garantiza un ID único.',
        incorrectFeedback: 'max((r["id"] for r in recordatorios), default=0) encuentra el ID máximo. Sumar 1 garantiza que el nuevo ID sea único. default=0 previene error si la lista está vacía.',
      },
      {
        question: '¿Cómo se obtiene la fecha de hoy como string en formato "YYYY-MM-DD"?',
        options: [
          'datetime.today()',
          'datetime.now().strftime("%Y-%m-%d")',
          'date.now().format("YYYY-MM-DD")',
          'str(datetime.now())',
        ],
        correctAnswer: 'datetime.now().strftime("%Y-%m-%d")',
        correctFeedback: '¡Correcto! datetime.now() obtiene el momento actual, y strftime("%Y-%m-%d") lo formatea como "2024-03-15". Los códigos: %Y=año 4 dígitos, %m=mes 2 dígitos, %d=día 2 dígitos.',
        incorrectFeedback: 'La forma correcta es datetime.now().strftime("%Y-%m-%d"). strftime formatea el datetime como string. %Y=año, %m=mes, %d=día.',
      },
      {
        question: '¿Qué hace json.dump(datos, archivo, indent=2, ensure_ascii=False)?',
        options: [
          'Lee datos JSON del archivo',
          'Escribe datos en formato JSON con indentación de 2 espacios y soporte para caracteres no-ASCII',
          'Valida que los datos sean JSON válido',
          'Convierte JSON a CSV',
        ],
        correctAnswer: 'Escribe datos en formato JSON con indentación de 2 espacios y soporte para caracteres no-ASCII',
        correctFeedback: '¡Correcto! indent=2 hace el JSON legible para humanos. ensure_ascii=False permite guardar caracteres especiales como ñ, á, é sin escaparlos como \\u00f1.',
        incorrectFeedback: 'json.dump() escribe datos como JSON. indent=2 agrega formato legible, ensure_ascii=False permite caracteres como ñ, á, é directamente en el archivo.',
      },
      {
        question: '¿Cuál es la diferencia entre json.load() y json.loads()?',
        options: [
          'Son idénticos, solo cambia el nombre',
          'json.load() lee desde un archivo, json.loads() parsea un string',
          'json.loads() es más rápido',
          'json.load() solo funciona con listas, json.loads() con diccionarios',
        ],
        correctAnswer: 'json.load() lee desde un archivo, json.loads() parsea un string',
        correctFeedback: '¡Correcto! json.load(archivo) lee JSON de un archivo abierto. json.loads(string) parsea un string que contiene JSON. La "s" en loads = "string".',
        incorrectFeedback: 'La diferencia es la fuente: json.load() lee de un archivo (file object), json.loads() parsea un string de Python. La "s" al final significa "string".',
      },
      {
        question: '¿Para qué sirve la librería plyer en el contexto de recordatorios?',
        options: [
          'Para guardar datos en la nube',
          'Para mostrar notificaciones de escritorio nativas del sistema operativo',
          'Para enviar correos electrónicos automáticamente',
          'Para reproducir sonidos de alarma',
        ],
        correctAnswer: 'Para mostrar notificaciones de escritorio nativas del sistema operativo',
        correctFeedback: '¡Correcto! plyer.notification.notify() muestra notificaciones de sistema operativo (como las de WhatsApp o correo) directamente desde Python.',
        incorrectFeedback: 'plyer permite mostrar notificaciones nativas del sistema operativo desde Python. Es similar a las notificaciones que ves de aplicaciones normales, pero generadas por tu script.',
      },
    ],
  },
  {
    slug: 'renombrador-archivos',
    title: 'Crear un renombrador de archivos',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 147,
    description: 'Crea un script para renombrar archivos automáticamente con prefijos, fechas o números.',
    explanation: `## Crear un renombrador de archivos en lote

### El módulo pathlib: la forma moderna

\`\`\`python
from pathlib import Path

carpeta = Path('./fotos')

# Listar todos los archivos
for archivo in carpeta.iterdir():
    if archivo.is_file():
        print(archivo.name)        # "foto1.jpg"
        print(archivo.stem)        # "foto1"  (sin extensión)
        print(archivo.suffix)      # ".jpg"
        print(archivo.parent)      # Path('./fotos')
\`\`\`

### Renombrar con Path.rename()

\`\`\`python
archivo = Path('./fotos/foto1.jpg')
nuevo_nombre = Path('./fotos/2024_foto1.jpg')
archivo.rename(nuevo_nombre)
\`\`\`

### Opciones de renombrado

**1. Agregar prefijo:**
\`\`\`python
def agregar_prefijo(archivo, prefijo):
    nuevo = archivo.parent / f"{prefijo}{archivo.name}"
    archivo.rename(nuevo)
\`\`\`

**2. Numeración secuencial:**
\`\`\`python
def numerar_archivos(carpeta, extension=None):
    archivos = sorted(carpeta.iterdir())
    for i, archivo in enumerate(archivos, start=1):
        if archivo.is_file():
            nuevo = archivo.parent / f"{i:03d}_{archivo.name}"
            archivo.rename(nuevo)
\`\`\`

**3. Agregar fecha actual:**
\`\`\`python
from datetime import datetime

def agregar_fecha(archivo):
    fecha = datetime.now().strftime("%Y-%m-%d")
    nuevo = archivo.parent / f"{fecha}_{archivo.name}"
    archivo.rename(nuevo)
\`\`\`

**4. Convertir espacios a guiones bajos:**
\`\`\`python
def normalizar_nombre(archivo):
    nombre_limpio = archivo.name.replace(' ', '_').lower()
    nuevo = archivo.parent / nombre_limpio
    archivo.rename(nuevo)
\`\`\`

### Modo preview (dry run)

**Siempre implementa un modo de vista previa** para que el usuario pueda verificar antes de ejecutar:

\`\`\`python
def renombrar_en_lote(carpeta, transformacion, dry_run=True):
    archivos = [f for f in Path(carpeta).iterdir() if f.is_file()]

    print(f"{'PREVIEW' if dry_run else 'EJECUTANDO'}: {len(archivos)} archivos")
    print("-" * 50)

    for archivo in sorted(archivos):
        nuevo_nombre = transformacion(archivo)
        print(f"  {archivo.name}")
        print(f"  → {nuevo_nombre.name}")

        if not dry_run:
            archivo.rename(nuevo_nombre)

    if dry_run:
        print("\\n[Modo preview] Para aplicar los cambios, ejecuta con dry_run=False")
\`\`\`

### Confirmación del usuario

\`\`\`python
respuesta = input("¿Aplicar cambios? (s/n): ").lower()
if respuesta == 's':
    renombrar_en_lote(carpeta, transformacion, dry_run=False)
else:
    print("Cancelado.")
\`\`\``,
    codeExample: `from pathlib import Path
from datetime import datetime

# ============================================================
# RENOMBRADOR DE ARCHIVOS EN LOTE
# Siempre ejecuta preview antes de cambiar nada
# ============================================================

def preview_y_renombrar(carpeta, funcion_nuevo_nombre, dry_run=True):
    """
    Muestra preview de renombrado y opcionalmente lo aplica.

    Args:
        carpeta: ruta a la carpeta con archivos
        funcion_nuevo_nombre: función que recibe Path y devuelve Path nuevo
        dry_run: True = solo mostrar, False = aplicar cambios
    """
    carpeta_path = Path(carpeta)
    archivos = sorted([f for f in carpeta_path.iterdir() if f.is_file()])

    if not archivos:
        print("No hay archivos en la carpeta.")
        return

    modo = "PREVIEW (sin cambios)" if dry_run else "APLICANDO CAMBIOS"
    print(f"\\n=== {modo} ===")
    print(f"Carpeta: {carpeta}")
    print(f"Archivos: {len(archivos)}\\n")

    cambios = []
    for archivo in archivos:
        nuevo = funcion_nuevo_nombre(archivo)
        tiene_cambio = archivo.name != nuevo.name
        if tiene_cambio:
            print(f"  {archivo.name}")
            print(f"  → {nuevo.name}\\n")
            cambios.append((archivo, nuevo))
        else:
            print(f"  {archivo.name} (sin cambio)\\n")

    print(f"Total con cambios: {len(cambios)}/{len(archivos)}")

    if not dry_run and cambios:
        for original, nuevo in cambios:
            original.rename(nuevo)
        print("\\n✓ Renombrado completado.")

# ============================================================
# TRANSFORMACIONES DISPONIBLES
# ============================================================

def con_prefijo(prefijo):
    """Devuelve una función que agrega un prefijo al nombre."""
    def transformar(archivo):
        return archivo.parent / f"{prefijo}{archivo.name}"
    return transformar

def con_numero_secuencial(archivos_ordenados):
    """Renombra con número secuencial 001_, 002_, etc."""
    mapa = {
        archivo: archivo.parent / f"{i:03d}_{archivo.name}"
        for i, archivo in enumerate(archivos_ordenados, start=1)
    }
    def transformar(archivo):
        return mapa.get(archivo, archivo)
    return transformar

def con_fecha_actual():
    """Agrega la fecha de hoy como prefijo."""
    fecha = datetime.now().strftime("%Y-%m-%d")
    def transformar(archivo):
        return archivo.parent / f"{fecha}_{archivo.name}"
    return transformar

def normalizar():
    """Convierte espacios a guiones bajos y pasa a minúsculas."""
    def transformar(archivo):
        nombre_limpio = archivo.stem.replace(' ', '_').lower()
        return archivo.parent / f"{nombre_limpio}{archivo.suffix.lower()}"
    return transformar

# ============================================================
# DEMOSTRACIÓN (sin archivos reales)
# ============================================================

# Simulamos archivos de ejemplo
archivos_ejemplo = [
    "Foto Vacaciones 2023.JPG",
    "documento importante.pdf",
    "Script Python.py",
    "reporte ventas.xlsx",
]

print("=== RENOMBRADOR DE ARCHIVOS - DEMO ===")
print("\\nArchivos originales:")
for nombre in archivos_ejemplo:
    print(f"  {nombre}")

print("\\n--- Opción 1: Agregar prefijo '2024_' ---")
for nombre in archivos_ejemplo:
    print(f"  {nombre} → 2024_{nombre}")

print("\\n--- Opción 2: Normalizar (minúsculas + guiones bajos) ---")
for nombre in archivos_ejemplo:
    # Simular la transformación
    sin_espacios = nombre.replace(' ', '_').lower()
    print(f"  {nombre} → {sin_espacios}")

print("\\n--- Opción 3: Numeración secuencial ---")
for i, nombre in enumerate(archivos_ejemplo, start=1):
    print(f"  {nombre} → {i:03d}_{nombre}")

print("\\nEn uso real: preview_y_renombrar('./carpeta', con_prefijo('2024_'))")
print("Para aplicar: preview_y_renombrar('./carpeta', con_prefijo('2024_'), dry_run=False)")`,
    keyPoints: [
      'Usa pathlib.Path para trabajar con rutas y nombres de archivos de forma limpia',
      'Implementa siempre un modo dry_run (preview) para que el usuario vea qué cambiará antes de ejecutar',
      'Path.stem devuelve el nombre sin extensión, Path.suffix devuelve la extensión',
      'Path.rename() mueve/renombra el archivo a la nueva ruta',
      'Pide confirmación explícita del usuario antes de aplicar cambios irreversibles',
    ],
    exercise: {
      description: 'Mejora el renombrador agregando: (1) una opción para agregar la fecha de modificación del archivo (no la fecha actual) usando archivo.stat().st_mtime, (2) la capacidad de filtrar por extensión para renombrar solo ciertos tipos (ej: solo .jpg), y (3) una función de "deshacer" que revierta el último renombrado (guarda el historial de cambios en un archivo JSON).',
      hint: 'Para la fecha de modificación: `from datetime import datetime; datetime.fromtimestamp(archivo.stat().st_mtime).strftime("%Y-%m-%d")`. Para filtrar: `[f for f in carpeta.iterdir() if f.suffix.lower() == ".jpg"]`. Para el historial: guarda una lista de {"original": str, "nuevo": str} en un JSON.',
    },
    quiz: [
      {
        question: '¿Qué devuelve Path("carpeta/archivo.txt").stem?',
        options: [
          '"carpeta/archivo.txt"',
          '"archivo.txt"',
          '"archivo"',
          '".txt"',
        ],
        correctAnswer: '"archivo"',
        correctFeedback: '¡Correcto! .stem devuelve el nombre del archivo sin la extensión. .name devuelve "archivo.txt" y .suffix devuelve ".txt".',
        incorrectFeedback: 'Path.stem devuelve el nombre del archivo sin la extensión: "archivo". .name incluye la extensión ("archivo.txt"), .suffix es solo la extensión (".txt").',
      },
      {
        question: '¿Cómo se renombra un archivo usando pathlib?',
        options: [
          'os.rename(archivo, nuevo_nombre)',
          'archivo.rename(nuevo_path)',
          'Path.rename(archivo, nuevo_nombre)',
          'archivo.move(nuevo_path)',
        ],
        correctAnswer: 'archivo.rename(nuevo_path)',
        correctFeedback: '¡Correcto! En pathlib, el método rename() se llama sobre el objeto Path del archivo original, pasando la nueva ruta como argumento.',
        incorrectFeedback: 'Con pathlib se usa: archivo.rename(nueva_ruta), donde archivo es un objeto Path. También existe os.rename() pero pathlib es la forma moderna.',
      },
      {
        question: '¿Por qué es importante implementar un modo dry_run en un renombrador de archivos?',
        options: [
          'Para que el script sea más rápido',
          'Para que el usuario pueda verificar qué cambios se harán antes de aplicarlos',
          'Porque Python requiere dry_run para archivos',
          'Para ahorrar memoria',
        ],
        correctAnswer: 'Para que el usuario pueda verificar qué cambios se harán antes de aplicarlos',
        correctFeedback: '¡Correcto! El renombrado es irreversible (sin deshacer). El modo preview permite al usuario revisar y confirmar antes de aplicar cambios que podrían ser difíciles de revertir.',
        incorrectFeedback: 'El dry_run muestra qué cambiaría sin modificar nada. Esto es crucial porque renombrar archivos puede ser difícil de deshacer si algo sale mal.',
      },
      {
        question: '¿Qué hace f"{i:03d}" cuando i es 5?',
        options: [
          'Devuelve "5"',
          'Devuelve "005"',
          'Devuelve "5.00"',
          'Lanza un error',
        ],
        correctAnswer: 'Devuelve "005"',
        correctFeedback: '¡Correcto! :03d significa "formato entero, mínimo 3 caracteres, rellena con ceros". Así 1→"001", 5→"005", 100→"100".',
        incorrectFeedback: ':03d en f-strings significa: entero (d), ancho mínimo 3, relleno con ceros. Entonces 5 → "005", 42 → "042", 100 → "100".',
      },
      {
        question: '¿Cómo se obtiene solo los archivos (no carpetas) en una carpeta con pathlib?',
        options: [
          'carpeta.iterdir()',
          '[f for f in carpeta.iterdir() if f.is_file()]',
          'carpeta.files()',
          'os.listdir(carpeta)',
        ],
        correctAnswer: '[f for f in carpeta.iterdir() if f.is_file()]',
        correctFeedback: '¡Correcto! carpeta.iterdir() devuelve todo (archivos y carpetas). Necesitas filtrar con if f.is_file() para obtener solo archivos.',
        incorrectFeedback: 'carpeta.iterdir() devuelve archivos y subcarpetas. Para filtrar solo archivos: [f for f in carpeta.iterdir() if f.is_file()].',
      },
      {
        question: '¿Qué hace str.replace(" ", "_") en el contexto de normalizar nombres de archivo?',
        options: [
          'Elimina todos los espacios del string',
          'Reemplaza cada espacio por un guión bajo',
          'Convierte el string a minúsculas',
          'Elimina caracteres especiales',
        ],
        correctAnswer: 'Reemplaza cada espacio por un guión bajo',
        correctFeedback: '¡Correcto! "Mi Foto Vacaciones.jpg".replace(" ", "_") → "Mi_Foto_Vacaciones.jpg". Los espacios en nombres de archivo dan problemas en la terminal.',
        incorrectFeedback: 'str.replace(" ", "_") reemplaza cada espacio por _. "Mi Foto.jpg" → "Mi_Foto.jpg". Para también pasar a minúsculas, encadena .lower(): "mi_foto.jpg".',
      },
      {
        question: '¿Cuál es la forma correcta de construir una nueva ruta en la misma carpeta con pathlib?',
        options: [
          'str(carpeta) + "/" + nuevo_nombre',
          'archivo.parent / f"prefijo_{archivo.name}"',
          'Path.join(carpeta, nuevo_nombre)',
          'carpeta.add(nuevo_nombre)',
        ],
        correctAnswer: 'archivo.parent / f"prefijo_{archivo.name}"',
        correctFeedback: '¡Correcto! En pathlib, el operador / une rutas. archivo.parent es la carpeta contenedora. Así construyes la nueva ruta en la misma carpeta con un nombre diferente.',
        incorrectFeedback: 'En pathlib se usa el operador /: archivo.parent / "nuevo_nombre". Es equivalente a os.path.join() pero más elegante. archivo.parent da la carpeta que contiene el archivo.',
      },
    ],
  },
  {
    slug: 'limpiador-texto',
    title: 'Crear un limpiador de texto',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 148,
    description: 'Crea un script que limpie texto eliminando espacios extra, caracteres innecesarios o formatos incorrectos.',
    explanation: `## Crear un limpiador de texto

La limpieza de texto es una tarea muy común cuando trabajas con datos exportados de Excel, bases de datos, formularios web, o documentos de Word.

### El módulo re (expresiones regulares)

Para limpieza de texto, las expresiones regulares son muy útiles:

\`\`\`python
import re

# Eliminar espacios múltiples
texto = "Hola   mundo   cómo  estás"
limpio = re.sub(r'\\s+', ' ', texto).strip()
# → "Hola mundo cómo estás"

# Eliminar caracteres especiales (dejar solo letras, números, espacios)
texto = "Precio: \$1,500.00 (oferta!)"
limpio = re.sub(r'[^a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\\s]', '', texto)
# → "Precio 150000 oferta"

# Eliminar etiquetas HTML
html = "<p>Hola <b>mundo</b></p>"
limpio = re.sub(r'<[^>]+>', '', html)
# → "Hola mundo"
\`\`\`

### Normalizar saltos de línea

Distintos sistemas usan distintos saltos de línea:
- Windows: \`\\r\\n\`
- Linux/Mac: \`\\n\`
- Mac antiguo: \`\\r\`

\`\`\`python
def normalizar_saltos(texto):
    return texto.replace('\\r\\n', '\\n').replace('\\r', '\\n')
\`\`\`

### Eliminar acentos (opcional)

\`\`\`python
import unicodedata

def quitar_acentos(texto):
    # NFD descompone caracteres acentuados en letra + acento
    normalizado = unicodedata.normalize('NFD', texto)
    # Filtra los caracteres de "categoría de marca" (los acentos)
    return ''.join(c for c in normalizado if unicodedata.category(c) != 'Mn')

quitar_acentos("Ñoño")  # → "Nono"
\`\`\`

### Leer, limpiar y escribir archivo

\`\`\`python
def limpiar_archivo(ruta_entrada, ruta_salida, funciones_limpieza):
    with open(ruta_entrada, 'r', encoding='utf-8') as f:
        texto = f.read()

    for funcion in funciones_limpieza:
        texto = funcion(texto)

    with open(ruta_salida, 'w', encoding='utf-8') as f:
        f.write(texto)

    print(f"Archivo limpiado guardado en: {ruta_salida}")
\`\`\`

### Caso de uso real: limpiar datos exportados

Cuando exportas datos de una base de datos o Excel, es común encontrar:
- Espacios al inicio/final de cada campo
- Comillas extras en campos de texto
- Caracteres de control invisibles
- Mayúsculas/minúsculas inconsistentes
- Duplicados en listas`,
    codeExample: `import re
import unicodedata

# ============================================================
# LIBRERÍA DE FUNCIONES DE LIMPIEZA DE TEXTO
# ============================================================

def eliminar_espacios_extra(texto):
    """Convierte múltiples espacios en uno solo y elimina los extremos."""
    return re.sub(r'[ \\t]+', ' ', texto).strip()

def normalizar_saltos_de_linea(texto):
    """Unifica saltos de línea a formato Unix (\\n)."""
    return texto.replace('\\r\\n', '\\n').replace('\\r', '\\n')

def eliminar_etiquetas_html(texto):
    """Elimina todas las etiquetas HTML."""
    return re.sub(r'<[^>]+>', '', texto)

def eliminar_caracteres_especiales(texto, mantener=' '):
    """
    Elimina caracteres especiales, manteniendo letras, números y
    los caracteres indicados en 'mantener'.
    """
    patron = r'[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ' + re.escape(mantener) + r']'
    return re.sub(patron, '', texto)

def quitar_acentos(texto):
    """Convierte caracteres acentuados en su equivalente sin acento."""
    normalizado = unicodedata.normalize('NFD', texto)
    return ''.join(c for c in normalizado
                   if unicodedata.category(c) != 'Mn')

def a_minusculas(texto):
    """Convierte todo el texto a minúsculas."""
    return texto.lower()

def capitalizar_oraciones(texto):
    """Primera letra de cada oración en mayúscula."""
    return '. '.join(oracion.strip().capitalize()
                     for oracion in texto.split('.') if oracion.strip())

def eliminar_lineas_duplicadas(texto):
    """Elimina líneas duplicadas manteniendo el orden."""
    vistas = set()
    lineas_unicas = []
    for linea in texto.split('\\n'):
        linea_limpia = linea.strip()
        if linea_limpia and linea_limpia not in vistas:
            vistas.add(linea_limpia)
            lineas_unicas.append(linea)
    return '\\n'.join(lineas_unicas)

def limpiar_texto(texto, opciones=None):
    """
    Aplica múltiples limpiezas de forma configurable.

    opciones: dict con las limpiezas a aplicar (todas True por defecto)
    """
    if opciones is None:
        opciones = {}

    if opciones.get('normalizar_saltos', True):
        texto = normalizar_saltos_de_linea(texto)
    if opciones.get('eliminar_html', True):
        texto = eliminar_etiquetas_html(texto)
    if opciones.get('espacios_extra', True):
        # Aplicar por línea para no colapsar párrafos
        lineas = texto.split('\\n')
        texto = '\\n'.join(eliminar_espacios_extra(l) for l in lineas)
    if opciones.get('minusculas', False):
        texto = a_minusculas(texto)
    if opciones.get('sin_acentos', False):
        texto = quitar_acentos(texto)
    if opciones.get('sin_duplicados', False):
        texto = eliminar_lineas_duplicadas(texto)

    return texto

# ============================================================
# DEMOSTRACIÓN
# ============================================================

textos_sucios = [
    "  Hola    mundo   cómo   estás  ",
    "<p>Este es un <b>texto</b> con <em>HTML</em></p>",
    "Línea uno\\r\\nLínea dos\\r\\nLínea tres",
    "línea repetida\\nlínea repetida\\nlínea única\\nlínea repetida",
]

print("=== LIMPIADOR DE TEXTO - DEMO ===\\n")

limpiador_basico = {
    'normalizar_saltos': True,
    'eliminar_html': True,
    'espacios_extra': True,
}

for texto in textos_sucios:
    resultado = limpiar_texto(texto, limpiador_basico)
    print(f"Antes:  {repr(texto[:60])}")
    print(f"Después: {repr(resultado[:60])}")
    print()

# Caso de uso: limpiar lista de nombres
nombres_sucios = [
    "  juan  pérez  ",
    "MARÍA GARCÍA",
    "  carlos  LÓPEZ  ",
    "ana martínez",
    "MARÍA GARCÍA",  # duplicado
]

print("--- Limpieza de lista de nombres ---")
nombres_limpios = list(dict.fromkeys(
    ' '.join(n.split()).title()
    for n in nombres_sucios
))
for nombre in nombres_limpios:
    print(f"  {nombre}")`,
    keyPoints: [
      're.sub(patrón, reemplazo, texto) es la herramienta principal para limpieza con patrones',
      're.sub(r"\\\\s+", " ", texto) colapsa múltiples espacios en uno solo',
      're.sub(r"<[^>]+>", "", html) elimina etiquetas HTML',
      'unicodedata.normalize("NFD", texto) permite trabajar con caracteres acentuados',
      'Diseña funciones de limpieza independientes y combínalas según la necesidad',
    ],
    exercise: {
      description: 'Crea una función limpiar_csv() que lea un archivo CSV con datos sucios (nombres con espacios extra, emails con mayúsculas inconsistentes, teléfonos con formatos varios como "555-123-4567", "(555) 123 4567", "+1-555-123-4567") y produzca un CSV limpio con: nombres capitalizados, emails en minúsculas, y teléfonos en formato estándar "555-123-4567".',
      hint: 'Para teléfonos, primero elimina todos los caracteres no numéricos con re.sub(r"[^0-9]", "", tel), luego da formato a los últimos 10 dígitos: f"{digitos[-10:-7]}-{digitos[-7:-4]}-{digitos[-4:]}".',
    },
    quiz: [
      {
        question: '¿Qué hace re.sub(r"\\s+", " ", texto)?',
        options: [
          'Elimina todos los espacios del texto',
          'Reemplaza uno o más caracteres de espacio en blanco por un solo espacio',
          'Agrega un espacio entre cada palabra',
          'Solo elimina los tabuladores',
        ],
        correctAnswer: 'Reemplaza uno o más caracteres de espacio en blanco por un solo espacio',
        correctFeedback: '¡Correcto! \\s+ coincide con uno o más caracteres de espacio en blanco (espacio, tab, etc.) y re.sub los reemplaza por un solo espacio " ".',
        incorrectFeedback: '\\s en regex es "cualquier espacio en blanco" y + significa "uno o más". re.sub reemplaza cada grupo de espacios por un solo espacio.',
      },
      {
        question: '¿Qué hace re.sub(r"<[^>]+>", "", html)?',
        options: [
          'Elimina los ángulos < y > pero mantiene el contenido',
          'Elimina todas las etiquetas HTML completas',
          'Solo elimina etiquetas de cierre como </p>',
          'Agrega etiquetas HTML al texto',
        ],
        correctAnswer: 'Elimina todas las etiquetas HTML completas',
        correctFeedback: '¡Correcto! El patrón <[^>]+> coincide con < seguido de uno o más caracteres que no son > seguido de >. Esto captura etiquetas como <p>, <b>, </div>, etc.',
        incorrectFeedback: '<[^>]+> es el patrón regex para etiquetas HTML: < luego cualquier cosa que no sea > luego >. re.sub las reemplaza por "" (string vacío).',
      },
      {
        question: '¿Para qué sirve unicodedata.normalize("NFD", texto)?',
        options: [
          'Convierte el texto a mayúsculas',
          'Elimina todos los caracteres no ASCII',
          'Descompone caracteres acentuados en letra base + acento (como caracteres separados)',
          'Codifica el texto en UTF-8',
        ],
        correctAnswer: 'Descompone caracteres acentuados en letra base + acento (como caracteres separados)',
        correctFeedback: '¡Correcto! NFD (Decomposition Normalization) convierte "á" en "a" + el carácter de acento. Luego podemos filtrar los acentos por categoría unicode "Mn".',
        incorrectFeedback: 'NFD descompone "á" → "a" + acento-separado. Luego filtramos los caracteres de categoría "Mn" (Mark, Nonspacing) que son los acentos, dejando solo las letras base.',
      },
      {
        question: '¿Qué diferencia hay entre \\r\\n y \\n como saltos de línea?',
        options: [
          'Son idénticos en todos los sistemas',
          '\\r\\n es el salto de línea de Windows, \\n es el de Linux/Mac',
          '\\n es el salto de línea de Windows, \\r\\n es el de Linux',
          '\\r\\n solo se usa en archivos binarios',
        ],
        correctAnswer: '\\r\\n es el salto de línea de Windows, \\n es el de Linux/Mac',
        correctFeedback: '¡Correcto! Windows usa CRLF (\\r\\n), Linux y Mac moderno usan LF (\\n). Al limpiar texto de distintas fuentes, es importante normalizar a un formato estándar.',
        incorrectFeedback: 'Windows usa \\r\\n (CRLF: Carriage Return + Line Feed), Linux y Mac usan \\n (LF). Al abrir archivos de Windows en Linux puedes ver caracteres extraños si no normalizas.',
      },
      {
        question: '¿Qué hace dict.fromkeys(iterable) en Python?',
        options: [
          'Crea un diccionario con claves del iterable y valores None',
          'Elimina claves duplicadas de un diccionario existente',
          'Convierte un diccionario en lista',
          'Ordena un diccionario por sus claves',
        ],
        correctAnswer: 'Crea un diccionario con claves del iterable y valores None',
        correctFeedback: '¡Correcto! dict.fromkeys(iterable) crea un dict con los elementos del iterable como claves. Como los dicts no permiten claves duplicadas, es un truco para eliminar duplicados manteniendo orden.',
        incorrectFeedback: 'dict.fromkeys(lista) crea un diccionario con los elementos de la lista como claves. Como los dicts no tienen claves repetidas, es útil para deduplicar manteniendo el orden de primera aparición.',
      },
      {
        question: '¿Cuál es la ventaja de diseñar funciones de limpieza independientes y componibles?',
        options: [
          'Son más rápidas',
          'Permiten aplicar solo las limpiezas necesarias según cada caso',
          'Requieren menos código',
          'Son más fáciles de debuggear individualmente, pero no en combinación',
        ],
        correctAnswer: 'Permiten aplicar solo las limpiezas necesarias según cada caso',
        correctFeedback: '¡Correcto! No siempre necesitas todas las limpiezas. Con funciones separadas, puedes aplicar solo quitar_acentos() para un caso, y para otro quitar_acentos() + eliminar_html().',
        incorrectFeedback: 'Las funciones independientes son más flexibles: aplicas solo las que necesitas. También son más fáciles de testear individualmente y reutilizar en otros proyectos.',
      },
      {
        question: '¿Qué hace el método str.strip()?',
        options: [
          'Elimina todos los espacios del string',
          'Elimina espacios y caracteres de espacio en blanco del inicio y final',
          'Divide el string por espacios',
          'Convierte espacios en guiones bajos',
        ],
        correctAnswer: 'Elimina espacios y caracteres de espacio en blanco del inicio y final',
        correctFeedback: '¡Correcto! strip() elimina espacios, tabs, saltos de línea del inicio y final del string. lstrip() solo del inicio, rstrip() solo del final.',
        incorrectFeedback: 'str.strip() elimina caracteres de espacio en blanco (espacios, tabs, \\n) solo de los extremos del string, no del medio. Para el medio usa re.sub(r"\\s+", " ", texto).',
      },
    ],
  },
  {
    slug: 'buenas-practicas-scripts',
    title: 'Buenas prácticas para scripts pequeños',
    module: 'Crear scripts de productividad',
    moduleNumber: 27,
    order: 149,
    description: 'Aprende cómo hacer que tus scripts sean reutilizables, claros y fáciles de modificar.',
    explanation: `## Buenas prácticas para scripts pequeños

### 1. Pon la configuración al inicio como constantes

❌ Mal: configuración enterrada en funciones
\`\`\`python
def procesar():
    archivos = os.listdir('/home/usuario/documentos/reportes/2024')
    for archivo in archivos:
        if archivo.endswith('.csv'):
            # ... lógica
\`\`\`

✅ Bien: configuración arriba, clara y fácil de cambiar
\`\`\`python
# === CONFIGURACIÓN ===
CARPETA_ENTRADA = '/home/usuario/documentos/reportes/2024'
EXTENSION = '.csv'
CARPETA_SALIDA = '/home/usuario/documentos/procesados'
MAX_ARCHIVOS = 100

def procesar():
    archivos = os.listdir(CARPETA_ENTRADA)
    for archivo in archivos:
        if archivo.endswith(EXTENSION):
            # ... lógica
\`\`\`

### 2. Usa funciones con nombres claros

\`\`\`python
# ❌ Difícil de entender
def p(d, n):
    return [x for x in d if x[n] > 0]

# ✅ Auto-documentado
def filtrar_registros_positivos(datos, campo):
    return [registro for registro in datos if registro[campo] > 0]
\`\`\`

### 3. Usa if \_\_name\_\_ == "\_\_main\_\_"

\`\`\`python
def main():
    print("Ejecutando el script...")
    procesar_datos()

if __name__ == "__main__":
    main()
\`\`\`

Esto permite que el archivo sea importado por otros scripts sin ejecutarse automáticamente.

### 4. Agrega comentario de uso al inicio

\`\`\`python
"""
renombrador.py - Renombra archivos en lote

Uso:
    python renombrador.py ./fotos --prefijo 2024_ --dry-run
    python renombrador.py ./fotos --prefijo 2024_

Requiere Python 3.8+
"""
\`\`\`

### 5. Usa argparse para scripts CLI

\`\`\`python
import argparse

parser = argparse.ArgumentParser(description='Renombra archivos en lote')
parser.add_argument('carpeta', help='Carpeta con los archivos')
parser.add_argument('--prefijo', default='', help='Prefijo a agregar')
parser.add_argument('--dry-run', action='store_true', help='Solo mostrar cambios')
args = parser.parse_args()
\`\`\`

### 6. Evita variables globales (usa parámetros)

\`\`\`python
# ❌
resultado = []
def procesar(archivo):
    resultado.append(leer(archivo))  # modifica global

# ✅
def procesar(archivo):
    return leer(archivo)  # devuelve valor

resultados = [procesar(f) for f in archivos]
\`\`\`

### Comparación: script mal estructurado vs bien estructurado

**Mal estructurado:**
\`\`\`python
import os
datos = []
for f in os.listdir('/home/user/data'):
    if f.endswith('.txt'):
        with open('/home/user/data/' + f) as archivo:
            datos.append(archivo.read().lower().replace('  ', ' '))
for d in datos:
    print(d[:100])
\`\`\`

**Bien estructurado:**
\`\`\`python
import os

CARPETA = '/home/user/data'
EXTENSION = '.txt'

def leer_archivo(ruta):
    with open(ruta, encoding='utf-8') as f:
        return f.read()

def limpiar_texto(texto):
    return texto.lower().replace('  ', ' ').strip()

def mostrar_preview(texto, max_chars=100):
    print(texto[:max_chars])

def main():
    archivos = [f for f in os.listdir(CARPETA) if f.endswith(EXTENSION)]
    for nombre in archivos:
        texto = leer_archivo(os.path.join(CARPETA, nombre))
        limpio = limpiar_texto(texto)
        mostrar_preview(limpio)

if __name__ == '__main__':
    main()
\`\`\``,
    codeExample: `"""
ejemplo_bien_estructurado.py - Procesador de archivos de texto

Descripción:
    Lee archivos .txt de una carpeta, los limpia y genera un resumen.

Uso:
    python script.py                    # usa valores por defecto
    python script.py --carpeta ./datos  # especifica carpeta
    python script.py --verbose          # muestra detalles

Requiere: Python 3.8+
"""

import os
import re
import argparse
from pathlib import Path

# ============================================================
# CONFIGURACIÓN (modifica aquí, no dentro de las funciones)
# ============================================================
CARPETA_DEFECTO = './textos'
EXTENSION = '.txt'
MAX_PREVIEW_CHARS = 200

# ============================================================
# FUNCIONES DE LÓGICA (una responsabilidad cada una)
# ============================================================

def obtener_archivos(carpeta: str, extension: str) -> list[Path]:
    """Devuelve lista de archivos con la extensión dada."""
    return sorted(Path(carpeta).glob(f'*{extension}'))

def leer_archivo(ruta: Path) -> str:
    """Lee y devuelve el contenido de un archivo."""
    with open(ruta, encoding='utf-8') as f:
        return f.read()

def limpiar_texto(texto: str) -> str:
    """Elimina espacios extra y normaliza el texto."""
    texto = re.sub(r'[ \\t]+', ' ', texto)
    texto = texto.strip()
    return texto

def generar_resumen(texto: str, max_chars: int = MAX_PREVIEW_CHARS) -> dict:
    """Genera estadísticas básicas del texto."""
    return {
        'caracteres': len(texto),
        'palabras': len(texto.split()),
        'lineas': len(texto.split('\\n')),
        'preview': texto[:max_chars] + ('...' if len(texto) > max_chars else ''),
    }

def procesar_archivo(ruta: Path, verbose: bool = False) -> dict | None:
    """Procesa un archivo y devuelve su resumen."""
    try:
        contenido = leer_archivo(ruta)
        limpio = limpiar_texto(contenido)
        resumen = generar_resumen(limpio)
        resumen['archivo'] = ruta.name

        if verbose:
            print(f"  ✓ {ruta.name}: {resumen['palabras']} palabras")

        return resumen
    except Exception as e:
        print(f"  ✗ Error en {ruta.name}: {e}")
        return None

def mostrar_reporte(resumenes: list[dict]) -> None:
    """Muestra el reporte final."""
    print("\\n" + "=" * 50)
    print("REPORTE FINAL")
    print("=" * 50)

    validos = [r for r in resumenes if r is not None]
    total_palabras = sum(r['palabras'] for r in validos)

    for r in validos:
        print(f"\\n📄 {r['archivo']}")
        print(f"   Palabras: {r['palabras']} | Líneas: {r['lineas']}")
        print(f"   Preview: {r['preview'][:80]}...")

    print(f"\\nTotal: {len(validos)} archivos, {total_palabras} palabras")

# ============================================================
# PUNTO DE ENTRADA PRINCIPAL
# ============================================================

def parsear_argumentos():
    parser = argparse.ArgumentParser(
        description='Procesador de archivos de texto'
    )
    parser.add_argument(
        '--carpeta',
        default=CARPETA_DEFECTO,
        help=f'Carpeta con archivos (default: {CARPETA_DEFECTO})'
    )
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Mostrar progreso detallado'
    )
    return parser.parse_args()

def main():
    args = parsear_argumentos()

    print(f"Procesando archivos en: {args.carpeta}")
    archivos = obtener_archivos(args.carpeta, EXTENSION)

    if not archivos:
        print(f"No se encontraron archivos {EXTENSION} en {args.carpeta}")
        return

    print(f"Encontrados: {len(archivos)} archivos")
    resumenes = [procesar_archivo(a, args.verbose) for a in archivos]
    mostrar_reporte(resumenes)

if __name__ == '__main__':
    main()

# --- Demo sin archivos reales ---
print("=== DEMO: Script bien estructurado ===\\n")
print("Estructura del script:")
print("  1. Docstring con descripción y uso")
print("  2. Constantes de configuración al inicio")
print("  3. Funciones con una sola responsabilidad")
print("  4. Type hints en las funciones")
print("  5. Manejo de errores con try/except")
print("  6. if __name__ == '__main__' para el punto de entrada")
print("  7. argparse para argumentos de línea de comandos")`,
    keyPoints: [
      'Pon todas las constantes de configuración al inicio del script, nunca enterradas en funciones',
      'Usa if __name__ == "__main__": para que el script pueda ser importado sin ejecutarse',
      'Cada función debe tener una sola responsabilidad y un nombre descriptivo',
      'Agrega un docstring al inicio del script con la descripción y ejemplos de uso',
      'Evita variables globales mutables: pasa datos como parámetros y devuélvelos con return',
      'Usa argparse para scripts que se invocan desde la terminal con opciones',
    ],
    exercise: {
      description: 'Toma uno de los scripts que escribiste en lecciones anteriores (conversor, generador, renombrador) y refactorízalo aplicando todas las buenas prácticas: (1) agrega docstring con uso al inicio, (2) mueve toda la configuración a constantes, (3) separa en funciones con una responsabilidad, (4) agrega if __name__ == "__main__", (5) usa argparse para al menos una opción configurable.',
      hint: 'Empieza por identificar los "números mágicos" y strings hardcodeados en el código (rutas, límites, extensiones) y muévelos a constantes arriba. Luego identifica bloques de código que hacen más de una cosa y sepáralos en funciones.',
    },
    quiz: [
      {
        question: '¿Por qué es importante poner la configuración como constantes al inicio del script?',
        options: [
          'Porque Python requiere que las constantes estén al inicio',
          'Para que sea fácil encontrar y modificar la configuración sin leer todo el código',
          'Para que el script sea más rápido',
          'Porque las funciones no pueden acceder a variables definidas fuera',
        ],
        correctAnswer: 'Para que sea fácil encontrar y modificar la configuración sin leer todo el código',
        correctFeedback: '¡Correcto! Cuando alguien quiere cambiar la carpeta de entrada o la extensión, busca al inicio del archivo. No tiene que leer 200 líneas para encontrar una ruta hardcodeada.',
        incorrectFeedback: 'Las constantes al inicio hacen el script mantenible: cualquier persona (o tú mismo en 6 meses) puede cambiar la configuración sin leer todo el código.',
      },
      {
        question: '¿Qué permite if __name__ == "__main__"?',
        options: [
          'Ejecutar el script como administrador',
          'Que el archivo pueda ser importado por otros scripts sin ejecutar el código principal',
          'Verificar que el script tiene el nombre correcto',
          'Hacer el script más rápido',
        ],
        correctAnswer: 'Que el archivo pueda ser importado por otros scripts sin ejecutar el código principal',
        correctFeedback: '¡Correcto! Cuando haces `import mi_script`, el código bajo if __name__ == "__main__" NO se ejecuta. Solo se ejecuta cuando corres el script directamente.',
        incorrectFeedback: '__name__ == "__main__" es True solo cuando ejecutas el archivo directamente. Si lo importas, __name__ es el nombre del módulo. Esto permite importar funciones sin ejecutar todo el script.',
      },
      {
        question: '¿Cuál es el problema con las variables globales mutables en scripts?',
        options: [
          'Python no permite variables globales',
          'Son difíciles de rastrear: cualquier función puede modificarlas, lo que crea bugs difíciles de encontrar',
          'Son más lentas que las variables locales',
          'Solo pueden contener strings',
        ],
        correctAnswer: 'Son difíciles de rastrear: cualquier función puede modificarlas, lo que crea bugs difíciles de encontrar',
        correctFeedback: '¡Correcto! Si varias funciones modifican la misma variable global, es difícil saber cuál introdujo un bug. Las funciones con parámetros y return son predecibles y testeables.',
        incorrectFeedback: 'Las variables globales mutables son problemáticas porque cualquier función puede cambiarlas inesperadamente. Prefiere pasar datos como parámetros y recibir resultados con return.',
      },
      {
        question: '¿Cuál de estos es un ejemplo de función con responsabilidad única?',
        options: [
          'def procesar(): leer_archivo() + limpiar() + guardar() + enviar_email()',
          'def limpiar_texto(texto): return texto.strip().lower()',
          'def hacer_todo(): conectar_db() + leer() + procesar() + guardar()',
          'def main(): todos los pasos del programa',
        ],
        correctAnswer: 'def limpiar_texto(texto): return texto.strip().lower()',
        correctFeedback: '¡Correcto! limpiar_texto() hace exactamente una cosa: limpiar texto. Puede ser testeada, reutilizada y modificada independientemente de las otras partes del programa.',
        incorrectFeedback: 'La responsabilidad única significa que una función hace solo una cosa. limpiar_texto() es el ejemplo correcto: solo limpia texto, no hace conexiones de BD ni envía emails.',
      },
      {
        question: '¿Para qué sirve el docstring al inicio de un script (entre las primeras comillas triple)?',
        options: [
          'Es un comentario que Python ignora completamente',
          'Documenta el propósito, uso y requisitos del script para quien lo lea',
          'Es requerido por Python para ejecutar el script',
          'Solo sirve para el comando --help',
        ],
        correctAnswer: 'Documenta el propósito, uso y requisitos del script para quien lo lea',
        correctFeedback: '¡Correcto! El docstring del módulo explica qué hace el script, cómo se usa, y qué requiere. Es lo primero que alguien lee para entender si el script es lo que necesita.',
        incorrectFeedback: 'El docstring del módulo es la documentación del script: describe su propósito, ejemplos de uso, y requisitos. Python lo guarda en __doc__ pero su valor principal es para lectores humanos.',
      },
      {
        question: '¿Cuándo deberías agregar argparse a un script?',
        options: [
          'Siempre, en todos los scripts sin excepción',
          'Cuando el script se invoca desde la terminal y tiene opciones configurables',
          'Solo cuando el script tiene más de 500 líneas',
          'Solo si el script corre en Linux',
        ],
        correctAnswer: 'Cuando el script se invoca desde la terminal y tiene opciones configurables',
        correctFeedback: '¡Correcto! argparse brilla cuando tu script tiene opciones como --carpeta, --verbose, --dry-run. Para scripts muy simples que siempre hacen lo mismo, puede ser innecesario.',
        incorrectFeedback: 'argparse es útil para scripts que se usan desde la terminal con diferentes opciones. Si el script siempre hace lo mismo o solo se modifica editando el código, quizás no vale la pena.',
      },
      {
        question: '¿Qué ventaja tienen los type hints (como def f(texto: str) -> list[str]) en scripts?',
        options: [
          'Hacen el código más rápido',
          'Son obligatorios en Python 3',
          'Documentan qué tipo de datos espera y devuelve la función',
          'Validan automáticamente los tipos en tiempo de ejecución',
        ],
        correctAnswer: 'Documentan qué tipo de datos espera y devuelve la función',
        correctFeedback: '¡Correcto! Los type hints son documentación: indican qué debe pasarse y qué se recibirá. Los editores los usan para autocompletar y detectar errores, pero Python no los valida en runtime.',
        incorrectFeedback: 'Los type hints documentan los tipos esperados. Python no los valida automáticamente en runtime (para eso están las librerías como pydantic). Su valor principal es legibilidad y herramientas de edición.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module27: Module = {
  number: 27,
  title: 'Crear scripts de productividad',
  level: 'practico',
  lessons: lessonsModule27,
}
