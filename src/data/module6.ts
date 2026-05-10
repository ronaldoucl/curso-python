import type { Lesson } from '@/types'

export const lessonsModule6: Lesson[] = [
  {
    slug: 'errores-comunes-python',
    title: 'Errores comunes en Python',
    module: 'Manejo de errores',
    moduleNumber: 6,
    order: 16,
    description: 'Aprende a identificar y leer los errores más frecuentes en Python: SyntaxError, NameError, TypeError, ValueError e IndexError.',
    explanation: `Cuando Python encuentra un problema al ejecutar tu código, **lanza un error** (también llamado excepción) y muestra un mensaje llamado **traceback** que te indica qué salió mal y dónde.

Aprender a leer estos mensajes es una habilidad fundamental: los programadores experimentados dedican mucho tiempo a depurar errores, y saber identificarlos rápidamente ahorra muchísimo tiempo.

**Tipos de errores más comunes:**

**SyntaxError** — Error de sintaxis. El código está mal escrito y Python no puede entenderlo. Es el único error que ocurre antes de que el programa empiece a ejecutarse.
\`\`\`
print("Hola"    # Falta el paréntesis de cierre → SyntaxError
\`\`\`

**NameError** — Usaste una variable o función que no existe o que aún no fue definida.
\`\`\`
print(resultado)  # Si "resultado" no fue definida → NameError
\`\`\`

**TypeError** — Operación entre tipos incompatibles.
\`\`\`
"10" + 5  # No puedes sumar un string y un número → TypeError
\`\`\`

**ValueError** — El tipo es correcto pero el valor no es válido para esa operación.
\`\`\`
int("hola")  # "hola" no representa un número → ValueError
\`\`\`

**IndexError** — Accediste a un índice que no existe en la lista.
\`\`\`
lista = [1, 2, 3]
lista[10]  # El índice 10 no existe → IndexError
\`\`\`

**KeyError** — Accediste a una clave que no existe en el diccionario.
\`\`\`
persona = {"nombre": "Ana"}
persona["edad"]  # La clave "edad" no existe → KeyError
\`\`\`

**Cómo leer un traceback:**
Siempre lee el traceback **de abajo hacia arriba**. La última línea indica el tipo de error y el mensaje. Las líneas superiores te muestran la cadena de llamadas que llevó al error.`,
    codeExample: `# ── SyntaxError ─────────────────────────────────
# print("Hola"   ← falta paréntesis de cierre
# Corrección:
print("Hola")

# ── NameError ────────────────────────────────────
# print(resultado)  ← variable no definida
# Corrección: definirla antes de usarla
resultado = 42
print(resultado)

# ── TypeError ────────────────────────────────────
# "10" + 5  ← tipos incompatibles
# Corrección: convertir antes de operar
print(int("10") + 5)   # 15
print("10" + str(5))   # "105"

# ── ValueError ───────────────────────────────────
# int("hola")  ← valor inválido para int()
# Corrección: asegurarte de que el string sea numérico
numero = "42"
print(int(numero))     # 42 ✓

# ── IndexError ───────────────────────────────────
colores = ["rojo", "verde", "azul"]
# colores[10]  ← índice fuera de rango
# Corrección: verificar la longitud
print(len(colores))    # 3, índices válidos: 0, 1, 2
print(colores[2])      # "azul" ✓

# ── KeyError ─────────────────────────────────────
persona = {"nombre": "Ana", "edad": 25}
# persona["email"]  ← clave inexistente
# Corrección: usar .get() que no lanza error
print(persona.get("email", "Sin email"))  # "Sin email"

# ── Leer el traceback ────────────────────────────
# Traceback (most recent call last):
#   File "programa.py", line 5, in <module>
#     resultado = lista[10]
# IndexError: list index out of range
#
# Lee de abajo hacia arriba:
# 1. IndexError: list index out of range  → tipo y causa
# 2. line 5 → línea donde ocurrió
# 3. lista[10]  → el código exacto que falló`,
    keyPoints: [
      'SyntaxError: el código está mal escrito, ocurre antes de ejecutar.',
      'NameError: usaste una variable o función que no existe.',
      'TypeError: operación entre tipos incompatibles (ej. string + número).',
      'ValueError: tipo correcto pero valor inválido (ej. int("hola")).',
      'IndexError: índice fuera del rango de la lista.',
      'KeyError: clave que no existe en el diccionario; usa .get() para evitarlo.',
      'Lee el traceback de abajo hacia arriba para encontrar el error rápido.',
    ],
    exercise: {
      description: 'El siguiente código tiene 3 errores diferentes. Identifica el tipo de cada error y corrígelos:\n`nombre = input("Tu nombre: ")`\n`print("Hola " + nombre`\n`lista = [1,2,3]`\n`print(lista[5])`\n`numero = int("abc")`',
      hint: 'Error 1: falta un paréntesis. Error 2: usa un índice válido (0, 1 o 2). Error 3: asegúrate de que el string sea un número válido antes de convertirlo.',
    },
    quiz: [
      {
        question: '¿Qué tipo de error se produce al ejecutar este código?\n\nx = 10\nprint(X)',
        options: ['SyntaxError', 'NameError', 'TypeError', 'ValueError'],
        correctAnswer: 'NameError',
        correctFeedback: 'Python distingue mayúsculas y minúsculas. "X" y "x" son variables diferentes. Como "X" no fue definida, Python lanza un NameError.',
        incorrectFeedback: 'El error es NameError. Python es case-sensitive: "x" y "X" son variables completamente distintas. "X" nunca fue definida, por eso Python no la encuentra.',
      },
      {
        question: '¿Qué error produce intentar ejecutar: int("veinte")?',
        options: ['TypeError porque el argumento no es un número', 'ValueError porque el string no representa un número válido', 'SyntaxError porque tiene comillas', 'NameError porque "veinte" no existe'],
        correctAnswer: 'ValueError porque el string no representa un número válido',
        correctFeedback: 'int() acepta strings, pero solo si representan números válidos como "42" o "-5". "veinte" es texto, no un número, así que lanza ValueError.',
        incorrectFeedback: 'El error es ValueError. int() puede recibir un string como argumento (tipo correcto), pero "veinte" no representa un número válido, por eso el valor es incorrecto para esa operación.',
      },
      {
        question: '¿En qué dirección debes leer un traceback de Python para encontrar el error?',
        options: ['De arriba hacia abajo', 'De abajo hacia arriba', 'Solo la línea del medio', 'El orden no importa'],
        correctAnswer: 'De abajo hacia arriba',
        correctFeedback: 'La última línea del traceback indica el tipo de error y el mensaje. Luego hacia arriba encuentras qué línea y función causó el problema.',
        incorrectFeedback: 'Debes leer de abajo hacia arriba. La línea final siempre muestra el tipo de error (ej. IndexError) y la causa. Las líneas superiores muestran el contexto de dónde ocurrió.',
      },
      {
        question: 'Tienes: colores = ["rojo", "azul"]. ¿Qué error produce colores[2]?',
        options: ['ValueError', 'KeyError', 'IndexError', 'TypeError'],
        correctAnswer: 'IndexError',
        correctFeedback: 'La lista tiene 2 elementos (índices 0 y 1). Intentar acceder al índice 2 está fuera del rango, lo que produce IndexError.',
        incorrectFeedback: 'El error es IndexError. La lista solo tiene los índices 0 y 1 (dos elementos). El índice 2 no existe, por eso Python lanza IndexError: list index out of range.',
      },
      {
        question: '¿Cuál de estas opciones evita un KeyError al acceder a un diccionario?',
        options: ['diccionario[clave]', 'diccionario.find(clave)', 'diccionario.get(clave)', 'diccionario.key(clave)'],
        correctAnswer: 'diccionario.get(clave)',
        correctFeedback: '.get() devuelve None si la clave no existe en lugar de lanzar KeyError. También puedes pasar un valor por defecto: .get(clave, "valor_default").',
        incorrectFeedback: 'La forma segura es .get(clave). A diferencia de diccionario[clave], si la clave no existe .get() devuelve None en lugar de lanzar KeyError.',
      },
      {
        question: '¿Qué error ocurre cuando escribes print("Hola" sin el paréntesis de cierre?',
        options: ['NameError', 'RuntimeError', 'SyntaxError', 'IndentationError'],
        correctAnswer: 'SyntaxError',
        correctFeedback: 'SyntaxError ocurre cuando el código tiene un error de escritura que Python no puede interpretar, como paréntesis sin cerrar. Se detecta antes de ejecutar el programa.',
        incorrectFeedback: 'Es un SyntaxError. Cuando el código tiene errores de escritura que Python no puede parsear (como paréntesis sin cerrar), se lanza SyntaxError antes de que el programa empiece a ejecutarse.',
      },
    ],
  },
  {
    slug: 'try-except',
    title: 'Try y Except',
    module: 'Manejo de errores',
    moduleNumber: 6,
    order: 17,
    description: 'Aprende a usar try y except para capturar errores y evitar que tu programa se detenga de forma inesperada.',
    explanation: `Cuando un error ocurre en Python sin ser capturado, el programa **se detiene por completo** y muestra el traceback. Con \`try\` y \`except\` puedes **capturar ese error** y decidir qué hacer en su lugar.

**Estructura básica:**
\`\`\`
try:
    # Código que puede fallar
    resultado = 10 / 0
except ZeroDivisionError:
    # Qué hacer si ocurre ese error específico
    print("No se puede dividir por cero")
\`\`\`

**Capturar múltiples excepciones:**
Puedes tener varios bloques \`except\`, uno por cada tipo de error que quieras manejar. Python los revisa en orden y ejecuta el primero que coincida.

\`\`\`
try:
    valor = int(input("Número: "))
    resultado = 100 / valor
except ValueError:
    print("Eso no es un número válido")
except ZeroDivisionError:
    print("El número no puede ser cero")
\`\`\`

**Obtener información del error:**
Usa \`as e\` para capturar el objeto de error y leer su mensaje.
\`\`\`
except ValueError as e:
    print(f"Error: {e}")
\`\`\`

**Capturar cualquier error:**
\`except Exception\` atrapa casi cualquier error. Úsalo con cuidado, solo cuando no sabes qué error puede ocurrir.

**Regla importante:** Siempre es mejor capturar errores **específicos** primero. El \`except Exception\` general debe ir al final si es que lo usas.`,
    codeExample: `# try/except básico
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: no se puede dividir por cero")

# Múltiples except
def convertir_a_entero(texto):
    try:
        return int(texto)
    except ValueError:
        print(f"'{texto}' no es un número válido")
        return None

print(convertir_a_entero("42"))    # 42
print(convertir_a_entero("hola"))  # None + mensaje

# except con mensaje del error
try:
    lista = [1, 2, 3]
    print(lista[10])
except IndexError as e:
    print(f"Error de índice: {e}")
    # Imprime: Error de índice: list index out of range

# Múltiples errores en un try
def acceder_dato(datos, clave, indice):
    try:
        return datos[clave][indice]
    except KeyError:
        print(f"La clave '{clave}' no existe")
    except IndexError:
        print(f"El índice {indice} está fuera de rango")
    except TypeError:
        print("El tipo de dato no es compatible")
    return None

info = {"notas": [8, 9, 7]}
print(acceder_dato(info, "notas", 1))    # 9
print(acceder_dato(info, "nombre", 0))   # Error clave
print(acceder_dato(info, "notas", 10))   # Error índice

# except Exception (general, usar con precaución)
try:
    resultado = int("abc") * 2
except Exception as e:
    print(f"Ocurrió un error inesperado: {type(e).__name__}: {e}")`,
    keyPoints: [
      'try contiene el código que podría fallar.',
      'except captura el error y evita que el programa se detenga.',
      'Usa excepciones específicas (ValueError, TypeError) antes que las generales.',
      '"except ErrorTipo as e" te da acceso al mensaje del error.',
      'Puedes encadenar varios bloques except para distintos tipos de error.',
      'except Exception atrapa casi todo; úsalo solo si no sabes qué error puede ocurrir.',
    ],
    exercise: {
      description: 'Crea una función llamada dividir_seguro(a, b) que divida a entre b. Si b es cero, debe mostrar un mensaje de error y devolver None. Si a o b no son números, también debe mostrar un mensaje apropiado.',
      hint: 'Captura ZeroDivisionError y TypeError por separado. Recuerda que int/float de un string inválido lanza ValueError.',
    },
    quiz: [
      {
        question: '¿Qué ocurre si el código dentro de try NO lanza ningún error?',
        options: ['El bloque except se ejecuta de todas formas', 'El bloque except se ignora y el programa continúa normalmente', 'Python lanza un warning', 'El programa se detiene'],
        correctAnswer: 'El bloque except se ignora y el programa continúa normalmente',
        correctFeedback: 'Si no ocurre ningún error en el bloque try, Python simplemente salta todos los bloques except y continúa con el resto del programa.',
        incorrectFeedback: 'El bloque except solo se ejecuta cuando ocurre un error. Si el código en try funciona correctamente, except se ignora completamente y el programa continúa.',
      },
      {
        question: '¿Qué imprime este código?\ntry:\n    x = int("abc")\nexcept ValueError:\n    print("Error de valor")\nexcept TypeError:\n    print("Error de tipo")',
        options: ['Error de tipo', 'Error de valor', 'Ambos mensajes', 'Nada, el programa se detiene'],
        correctAnswer: 'Error de valor',
        correctFeedback: 'int("abc") lanza ValueError porque "abc" no representa un número. El primer except que coincide es ValueError, así que se imprime "Error de valor".',
        incorrectFeedback: 'int("abc") lanza un ValueError (valor inválido, no tipo incorrecto). Python ejecuta el primer bloque except que coincide con el tipo de error, que es el de ValueError.',
      },
      {
        question: '¿Para qué sirve escribir "except ValueError as e"?',
        options: ['Para capturar solo errores de tipo', 'Para ignorar el error completamente', 'Para acceder al mensaje y detalles del error', 'Para relanzar el error automáticamente'],
        correctAnswer: 'Para acceder al mensaje y detalles del error',
        correctFeedback: '"as e" crea una variable que contiene el objeto del error. Puedes hacer print(e) para ver el mensaje descriptivo del error.',
        incorrectFeedback: '"as e" te da acceso al objeto del error, permitiéndote leer su mensaje con str(e) o print(e). Es muy útil para mostrar mensajes de error informativos al usuario.',
      },
      {
        question: '¿Cuál es el problema de usar solo "except Exception" para todo?',
        options: ['No funciona en Python moderno', 'Captura errores que quizás no esperabas, dificultando encontrar bugs reales', 'Es más lento que except específico', 'Solo captura un error por ejecución'],
        correctAnswer: 'Captura errores que quizás no esperabas, dificultando encontrar bugs reales',
        correctFeedback: 'Al atrapar todo con except Exception, podrías silenciar errores inesperados que deberían informarte sobre bugs en tu código. Siempre es mejor ser específico.',
        incorrectFeedback: 'El problema es que except Exception captura cualquier error, incluso los que no esperabas, lo que puede ocultar bugs reales en tu código. Es mejor capturar excepciones específicas.',
      },
      {
        question: '¿Qué pasa si ocurre un error en try que no coincide con ningún except?',
        options: ['El error se ignora', 'Python busca en los except y usa el último', 'El error se propaga y puede detener el programa', 'Python usa except Exception automáticamente'],
        correctAnswer: 'El error se propaga y puede detener el programa',
        correctFeedback: 'Si el error no coincide con ningún except, se propaga hacia arriba en el programa. Si nadie lo captura, Python muestra el traceback y detiene el programa.',
        incorrectFeedback: 'Si el error no coincide con ningún bloque except, se propaga hacia afuera del try/except. Si no hay otro manejador, el programa se detiene mostrando el traceback.',
      },
      {
        question: '¿Cuál es la forma correcta de capturar tanto ValueError como TypeError en un solo except?',
        options: ['except ValueError, TypeError:', 'except (ValueError, TypeError):', 'except ValueError or TypeError:', 'except [ValueError, TypeError]:'],
        correctAnswer: 'except (ValueError, TypeError):',
        correctFeedback: 'Puedes capturar múltiples excepciones en un solo except usando una tupla: except (ValueError, TypeError):',
        incorrectFeedback: 'La sintaxis correcta para capturar múltiples excepciones en un solo bloque es: except (ValueError, TypeError): — usando paréntesis con los tipos separados por coma.',
      },
    ],
  },
  {
    slug: 'else-finally',
    title: 'Else y Finally en manejo de errores',
    module: 'Manejo de errores',
    moduleNumber: 6,
    order: 18,
    description: 'Aprende cómo usar else y finally junto con try/except para controlar mejor el flujo cuando ocurre o no un error.',
    explanation: `Además de \`try\` y \`except\`, Python ofrece dos bloques adicionales que permiten un control más preciso del flujo de errores: \`else\` y \`finally\`.

**El bloque else:**
Se ejecuta **solo si NO ocurrió ningún error** en el bloque \`try\`. Es ideal para el código que debe ejecutarse cuando todo salió bien, separándolo del código que podría fallar.

\`\`\`
try:
    valor = int(input("Número: "))
except ValueError:
    print("Eso no es un número")
else:
    print(f"Número válido: {valor}")   # Solo si no hubo error
\`\`\`

**El bloque finally:**
Se ejecuta **siempre**, sin importar si hubo error o no. Es el lugar ideal para código de "limpieza": cerrar archivos, cerrar conexiones, liberar recursos.

\`\`\`
try:
    archivo = open("datos.txt")
    contenido = archivo.read()
except FileNotFoundError:
    print("El archivo no existe")
finally:
    archivo.close()   # Se ejecuta siempre
\`\`\`

**Estructura completa:**
\`\`\`
try:
    # Código que puede fallar
except TipoDeError:
    # Si hay error
else:
    # Solo si NO hay error
finally:
    # Siempre (con o sin error)
\`\`\`

**¿Por qué usar else en lugar de poner el código después del try?**
Si colocas código después del \`try/except\`, se ejecuta siempre. Con \`else\`, ese código solo corre cuando no hubo error, lo cual hace el flujo más claro y seguro.`,
    codeExample: `# Estructura completa: try / except / else / finally
def leer_numero(texto):
    try:
        numero = int(texto)
    except ValueError:
        print(f"Error: '{texto}' no es un número entero válido")
        return None
    else:
        print(f"Conversión exitosa: {numero}")
        return numero
    finally:
        print("--- Intento de conversión terminado ---")

print(leer_numero("42"))
# Conversión exitosa: 42
# --- Intento de conversión terminado ---
# 42

print(leer_numero("hola"))
# Error: 'hola' no es un número entero válido
# --- Intento de conversión terminado ---
# None

# Caso de uso real: manejo de archivos
def leer_archivo(nombre):
    archivo = None
    try:
        archivo = open(nombre, "r")
        contenido = archivo.read()
    except FileNotFoundError:
        print(f"El archivo '{nombre}' no existe")
        return None
    else:
        print(f"Archivo leído: {len(contenido)} caracteres")
        return contenido
    finally:
        if archivo:
            archivo.close()
            print("Archivo cerrado correctamente")

# finally con return: el return en finally tiene prioridad
def ejemplo_prioridad():
    try:
        return "desde try"
    finally:
        return "desde finally"   # Este return prevalece

print(ejemplo_prioridad())  # "desde finally"

# Uso práctico: base de datos (simulado)
def consultar(datos, clave):
    print("Iniciando consulta...")
    try:
        resultado = datos[clave]
    except KeyError:
        print(f"Clave '{clave}' no encontrada")
        resultado = None
    else:
        print(f"Consulta exitosa: {resultado}")
    finally:
        print("Consulta finalizada")
    return resultado`,
    keyPoints: [
      'else se ejecuta solo cuando NO ocurre ningún error en try.',
      'finally se ejecuta SIEMPRE, con o sin error.',
      'finally es ideal para cerrar archivos, conexiones o liberar recursos.',
      'Si finally tiene un return, este prevalece sobre cualquier return anterior.',
      'else ayuda a separar el código de éxito del código de error, mejorando la claridad.',
      'La estructura completa es: try → except → else → finally.',
    ],
    exercise: {
      description: 'Crea una función abrir_y_contar(nombre_archivo) que abra un archivo de texto, cuente sus líneas, y use try/except/else/finally. Si el archivo no existe, muestra un error. Si se abre correctamente, muestra el número de líneas. Al final, siempre muestra "Operación terminada.".',
      hint: 'Usa open() en el try, captura FileNotFoundError en except, cuenta con len(archivo.readlines()) en else, y cierra el archivo en finally.',
    },
    quiz: [
      {
        question: '¿Cuándo se ejecuta el bloque else en un try/except/else?',
        options: ['Siempre, después del try', 'Solo si ocurrió un error', 'Solo si NO ocurrió ningún error', 'Solo si el except no capturó el error'],
        correctAnswer: 'Solo si NO ocurrió ningún error',
        correctFeedback: 'El bloque else se ejecuta únicamente cuando el bloque try completó sin lanzar ninguna excepción. Es el "camino feliz" del manejo de errores.',
        incorrectFeedback: 'else solo se ejecuta cuando el try termina sin errores. Si ocurre alguna excepción (capturada o no), else se omite.',
      },
      {
        question: '¿En qué situación es más útil el bloque finally?',
        options: ['Para ejecutar código alternativo al except', 'Para cerrar archivos o conexiones independientemente de si hubo error', 'Para evitar que se muestren errores al usuario', 'Para repetir el bloque try si falló'],
        correctAnswer: 'Para cerrar archivos o conexiones independientemente de si hubo error',
        correctFeedback: 'finally garantiza que el código de limpieza se ejecute siempre, por ejemplo cerrar un archivo aunque ocurra un error durante su lectura.',
        incorrectFeedback: 'El uso principal de finally es para código de limpieza que debe ejecutarse pase lo que pase: cerrar archivos, desconectar de bases de datos, liberar recursos, etc.',
      },
      {
        question: '¿Qué imprime este código?\ntry:\n    x = 10 / 2\nexcept ZeroDivisionError:\n    print("A")\nelse:\n    print("B")\nfinally:\n    print("C")',
        options: ['A y C', 'Solo B', 'B y C', 'A, B y C'],
        correctAnswer: 'B y C',
        correctFeedback: '10 / 2 = 5 no genera error, así que se omite except, se ejecuta else (imprime "B") y luego siempre se ejecuta finally (imprime "C").',
        incorrectFeedback: '10/2 no genera ningún error, así que except se omite. else se ejecuta (imprime "B") porque no hubo error. Y finally siempre se ejecuta (imprime "C").',
      },
      {
        question: '¿Qué pasa si tanto try como finally tienen un return?',
        options: ['Gana el return de try', 'Gana el return de finally', 'Python lanza un error', 'Se ejecutan ambos'],
        correctAnswer: 'Gana el return de finally',
        correctFeedback: 'El bloque finally siempre se ejecuta antes de que la función retorne, y si tiene su propio return, este reemplaza al return del try.',
        incorrectFeedback: 'El return en finally tiene prioridad. Python ejecuta finally antes de salir de la función, y si finally tiene un return, sobreescribe el return del try.',
      },
      {
        question: '¿Cuál es la diferencia entre poner código en else versus después del bloque try/except?',
        options: ['No hay diferencia, funcionan igual', 'else solo corre si no hubo error; el código después corre siempre', 'else es más rápido de ejecutar', 'El código después no puede ver variables del try'],
        correctAnswer: 'else solo corre si no hubo error; el código después corre siempre',
        correctFeedback: 'Esta es la diferencia clave. El código en else está explícitamente ligado al éxito del try. El código fuera del try/except/else/finally corre en cualquier caso (si el error no relanzo).',
        incorrectFeedback: 'El código en else solo se ejecuta si try no lanzó ninguna excepción. El código colocado después del bloque completo se ejecuta siempre (si el error fue capturado). Son distintos comportamientos.',
      },
    ],
  },
  {
    slug: 'lanzar-errores-raise',
    title: 'Lanzar errores con raise',
    module: 'Manejo de errores',
    moduleNumber: 6,
    order: 19,
    description: 'Aprende a usar raise para crear y lanzar tus propios errores cuando los datos no cumplen las reglas de tu programa.',
    explanation: `Hasta ahora aprendiste a **capturar** errores. Con \`raise\` puedes también **lanzar** errores deliberadamente desde tu propio código.

**¿Para qué sirve raise?**
Cuando escribes funciones que reciben datos, a veces quieres asegurarte de que esos datos sean válidos. Si no lo son, puedes lanzar un error con un mensaje claro en lugar de dejar que el programa falle de forma confusa más adelante.

**Sintaxis básica:**
\`\`\`
raise TipoDeError("Mensaje descriptivo")
\`\`\`

**Tipos de error más usados con raise:**
- \`ValueError\`: el valor no es aceptable.
- \`TypeError\`: el tipo no es el correcto.
- \`RuntimeError\`: error general durante la ejecución.

**raise sin argumentos:**
Dentro de un bloque \`except\`, puedes usar \`raise\` solo (sin argumentos) para **relanzar** el mismo error que fue capturado. Esto es útil cuando quieres hacer algo (como registrar el error) antes de dejarlo propagar.

\`\`\`
try:
    resultado = int("hola")
except ValueError:
    print("Registrando el error...")
    raise   # relanza el ValueError original
\`\`\`

**Buena práctica:** los mensajes de error deben ser claros y describir qué está mal y qué se esperaba. Piensa en el programador que leerá ese mensaje.`,
    codeExample: `# raise básico: validar un valor
def calcular_raiz(numero):
    if numero < 0:
        raise ValueError(f"No se puede calcular la raíz de un número negativo: {numero}")
    return numero ** 0.5

print(calcular_raiz(16))   # 4.0
# calcular_raiz(-4)        # ValueError: No se puede calcular...

# raise con TypeError: validar el tipo
def sumar(a, b):
    if not isinstance(a, (int, float)):
        raise TypeError(f"'a' debe ser un número, recibido: {type(a).__name__}")
    if not isinstance(b, (int, float)):
        raise TypeError(f"'b' debe ser un número, recibido: {type(b).__name__}")
    return a + b

print(sumar(3, 4))         # 7
# sumar("3", 4)            # TypeError: 'a' debe ser un número...

# Capturar y relanzar
def procesar_dato(texto):
    try:
        numero = int(texto)
        return numero * 2
    except ValueError:
        print(f"Log: fallo al convertir '{texto}'")
        raise   # relanza el ValueError original

try:
    procesar_dato("abc")
except ValueError as e:
    print(f"Error capturado en el nivel superior: {e}")

# Validaciones con raise combinadas
def crear_usuario(nombre, edad):
    if not isinstance(nombre, str) or not nombre.strip():
        raise ValueError("El nombre debe ser un string no vacío")
    if not isinstance(edad, int):
        raise TypeError("La edad debe ser un número entero")
    if edad < 0 or edad > 150:
        raise ValueError(f"La edad {edad} no es válida (debe estar entre 0 y 150)")
    return {"nombre": nombre.strip(), "edad": edad}

print(crear_usuario("Ana", 25))
# crear_usuario("", 25)     # ValueError: nombre vacío
# crear_usuario("Ana", -1)  # ValueError: edad inválida`,
    keyPoints: [
      'raise lanza una excepción desde tu propio código de forma intencional.',
      'Se usa para validar que los datos de entrada cumplen las reglas del programa.',
      'El mensaje del error debe ser descriptivo: explicar qué falló y qué se esperaba.',
      'raise sin argumentos dentro de un except relanza el mismo error capturado.',
      'isinstance() es útil para verificar el tipo antes de lanzar TypeError.',
      'Lanzar errores temprano ("fail fast") hace los bugs más fáciles de encontrar.',
    ],
    exercise: {
      description: 'Crea una función calcular_promedio(notas) que reciba una lista de números. Usa raise para validar: 1) que notas sea una lista, 2) que no esté vacía, 3) que todos los elementos sean números entre 0 y 100.',
      hint: 'Usa isinstance(notas, list), len(notas) == 0, y un for para verificar cada nota. Lanza ValueError con mensajes descriptivos en cada caso.',
    },
    quiz: [
      {
        question: '¿Para qué se usa principalmente raise en Python?',
        options: ['Para detener el programa inmediatamente', 'Para lanzar errores intencionalmente cuando los datos no son válidos', 'Para capturar errores de otras funciones', 'Para ignorar un error y continuar'],
        correctAnswer: 'Para lanzar errores intencionalmente cuando los datos no son válidos',
        correctFeedback: 'raise permite que tu código comunique explícitamente cuando algo está mal, en lugar de dejar que el programa falle de manera confusa más adelante.',
        incorrectFeedback: 'raise se usa para lanzar errores de forma intencional, típicamente para validar datos. Es una forma de decirle al código que llama a tu función: "estos datos no son válidos".',
      },
      {
        question: '¿Qué hace raise sin argumentos dentro de un bloque except?',
        options: ['Crea un nuevo error genérico', 'Relanza el error que fue capturado en ese except', 'Termina el bloque except sin error', 'Lanza un RuntimeError'],
        correctAnswer: 'Relanza el error que fue capturado en ese except',
        correctFeedback: 'raise solo (sin argumentos) dentro de un except toma el error que fue capturado y lo relanza, dejando que se propague hacia arriba.',
        incorrectFeedback: 'raise sin argumentos dentro de un except relanza exactamente el mismo error que fue capturado. Es útil cuando quieres registrar o procesar el error antes de dejarlo propagar.',
      },
      {
        question: '¿Cuál sería el tipo de error más apropiado para: "La edad no puede ser negativa"?',
        options: ['TypeError', 'RuntimeError', 'ValueError', 'IndexError'],
        correctAnswer: 'ValueError',
        correctFeedback: 'ValueError es correcto cuando el tipo de dato es el apropiado (un número), pero el valor específico no es válido (negativo cuando no debería serlo).',
        incorrectFeedback: 'ValueError es el tipo correcto aquí. Si el tipo del dato es correcto (es un número) pero el valor no es válido (es negativo), se usa ValueError. TypeError sería para cuando el tipo en sí es incorrecto.',
      },
      {
        question: '¿Qué función de Python verifica si un valor es de un tipo específico?',
        options: ['type_check()', 'checktype()', 'isinstance()', 'is_type()'],
        correctAnswer: 'isinstance()',
        correctFeedback: 'isinstance(valor, Tipo) devuelve True si el valor es del tipo indicado. También acepta tuplas: isinstance(x, (int, float)) para verificar contra múltiples tipos.',
        incorrectFeedback: 'La función correcta es isinstance(). Por ejemplo: isinstance(42, int) devuelve True. También puedes verificar múltiples tipos: isinstance(x, (int, float)).',
      },
      {
        question: '¿Qué imprime este código?\ndef validar(x):\n    if x < 0:\n        raise ValueError("Negativo")\n    return x * 2\ntry:\n    print(validar(-3))\nexcept ValueError as e:\n    print(f"Error: {e}")',
        options: ['-6', 'Error: Negativo', 'ValueError', 'El programa se detiene'],
        correctAnswer: 'Error: Negativo',
        correctFeedback: 'validar(-3) lanza ValueError("Negativo"). El except lo captura y muestra "Error: Negativo" usando el mensaje del error.',
        incorrectFeedback: 'validar(-3) lanza ValueError("Negativo") porque x es negativo. El except captura ese error y print(f"Error: {e}") muestra "Error: Negativo".',
      },
    ],
  },
  {
    slug: 'validacion-datos',
    title: 'Validación de datos',
    module: 'Manejo de errores',
    moduleNumber: 6,
    order: 20,
    description: 'Aprende a validar información ingresada por el usuario para crear programas más seguros y confiables.',
    explanation: `La **validación de datos** consiste en verificar que la información que recibe tu programa cumple con las reglas esperadas antes de usarla.

**¿Por qué es importante?**
- Los usuarios cometen errores al escribir.
- Los datos pueden llegar de fuentes externas con formatos incorrectos.
- Sin validación, un dato incorrecto puede causar fallos difíciles de depurar.

**Patrones comunes de validación:**

**1. Validación de tipo:** verificar que el dato sea del tipo correcto.

**2. Validación de rango:** verificar que el número esté dentro de un rango válido.

**3. Validación de string:** verificar que el texto no esté vacío o tenga un formato.

**4. Validación con try/except:** intentar la conversión y capturar el error si falla.

**5. Bucle hasta que sea válido:** pedir el dato una y otra vez hasta recibir uno correcto.

**Principio de "fail fast":**
Mejor detectar y reportar errores lo antes posible que dejar que un dato malo viaje por todo el programa hasta causar un fallo misterioso lejos de donde se ingresó.

**Funciones de validación reutilizables:**
Una buena práctica es crear funciones dedicadas a validar, separadas de la lógica principal del programa. Esto hace el código más organizado y fácil de probar.`,
    codeExample: `# Patrón 1: Validar tipo con isinstance
def pedir_entero(mensaje):
    while True:
        entrada = input(mensaje)
        try:
            return int(entrada)
        except ValueError:
            print(f"'{entrada}' no es un número entero. Intenta de nuevo.")

# numero = pedir_entero("Ingresa tu edad: ")

# Patrón 2: Validar rango
def validar_nota(nota):
    if not isinstance(nota, (int, float)):
        raise TypeError("La nota debe ser un número")
    if not (0 <= nota <= 100):
        raise ValueError(f"La nota {nota} debe estar entre 0 y 100")
    return nota

# Patrón 3: Validar string no vacío
def validar_nombre(nombre):
    if not isinstance(nombre, str):
        raise TypeError("El nombre debe ser texto")
    nombre = nombre.strip()
    if not nombre:
        raise ValueError("El nombre no puede estar vacío")
    if len(nombre) < 2:
        raise ValueError("El nombre debe tener al menos 2 caracteres")
    return nombre

# Patrón 4: Función genérica de validación con bucle
def pedir_numero_en_rango(mensaje, minimo, maximo):
    while True:
        try:
            valor = float(input(mensaje))
            if minimo <= valor <= maximo:
                return valor
            else:
                print(f"El número debe estar entre {minimo} y {maximo}")
        except ValueError:
            print("Por favor ingresa un número válido")

# Patrón 5: Validar correo electrónico básico
def es_email_valido(email):
    if not isinstance(email, str):
        return False
    partes = email.strip().split("@")
    if len(partes) != 2:
        return False
    usuario, dominio = partes
    return bool(usuario) and "." in dominio

print(es_email_valido("ana@gmail.com"))    # True
print(es_email_valido("no-es-email"))      # False
print(es_email_valido("sin@dominio"))      # False

# Función de registro con validaciones
def registrar_usuario(nombre, edad, email):
    errores = []
    try:
        nombre = validar_nombre(nombre)
    except (ValueError, TypeError) as e:
        errores.append(f"Nombre: {e}")

    if not isinstance(edad, int) or not (0 < edad < 120):
        errores.append("Edad: debe ser un número entero entre 1 y 119")

    if not es_email_valido(email):
        errores.append("Email: formato inválido")

    if errores:
        print("Errores encontrados:")
        for e in errores:
            print(f"  - {e}")
        return None

    return {"nombre": nombre, "edad": edad, "email": email}

print(registrar_usuario("Ana", 25, "ana@mail.com"))
print(registrar_usuario("", -5, "no-email"))`,
    keyPoints: [
      'Valida los datos lo antes posible (principio "fail fast").',
      'Usa try/except para intentar conversiones de tipo de forma segura.',
      'Crea funciones de validación reutilizables separadas de la lógica principal.',
      'El bucle while True + break es el patrón para pedir datos hasta que sean válidos.',
      'Valida tipo, rango y formato según el tipo de dato.',
      'Acumular errores de validación en una lista es mejor que lanzar el primero que se encuentre.',
    ],
    exercise: {
      description: 'Crea una función registrar_producto(nombre, precio, stock) que valide: nombre no vacío (str), precio mayor que 0 (float), stock mayor o igual a 0 (int). Si alguna validación falla, acumula los mensajes de error y al final muéstralos todos juntos o devuelve el producto si todo es correcto.',
      hint: 'Crea una lista errores = []. Verifica cada campo con try/except o isinstance. Al final, if errores: muestra todos, else: return el dict.',
    },
    quiz: [
      {
        question: '¿Cuál es el patrón correcto para pedir un número al usuario repetidamente hasta que ingrese uno válido?',
        options: ['Un if/else', 'Un for con range', 'Un while True con try/except y return cuando es válido', 'Un try/except fuera de cualquier bucle'],
        correctAnswer: 'Un while True con try/except y return cuando es válido',
        correctFeedback: 'while True crea un bucle infinito que solo termina cuando el usuario ingresa un valor válido y se ejecuta return (o break). try/except captura errores de conversión.',
        incorrectFeedback: 'El patrón correcto es while True con try/except dentro. Si la conversión falla, se muestra un error y el bucle continúa. Cuando la entrada es válida, se retorna el valor.',
      },
      {
        question: '¿Qué devuelve input() en Python siempre, sin importar lo que el usuario escriba?',
        options: ['Un número si el usuario escribe dígitos', 'Un booleano', 'Un string', 'El tipo que Python detecte automáticamente'],
        correctAnswer: 'Un string',
        correctFeedback: 'input() siempre devuelve un string. Por eso debes convertir explícitamente con int(), float(), etc. si necesitas otro tipo.',
        incorrectFeedback: 'input() siempre devuelve un string, sin excepción. Aunque el usuario escriba "42", input() devuelve la cadena "42", no el número 42. Por eso es necesario convertir.',
      },
      {
        question: '¿Qué método de string es útil para eliminar espacios al inicio y al final antes de validar?',
        options: ['.remove()', '.clean()', '.strip()', '.trim()'],
        correctAnswer: '.strip()',
        correctFeedback: '.strip() elimina espacios (y otros caracteres en blanco) al inicio y al final del string. Es muy útil para normalizar input del usuario antes de validar.',
        incorrectFeedback: 'El método correcto es .strip(). Elimina espacios y caracteres en blanco al inicio y final del string. Por ejemplo: "  Ana  ".strip() devuelve "Ana".',
      },
      {
        question: '¿Por qué es mejor acumular todos los errores de validación en una lista en lugar de lanzar el primero?',
        options: ['Porque es más rápido', 'Porque el usuario recibe todos los problemas de una vez y puede corregirlos todos', 'Porque Python no permite raise en funciones', 'Porque los errores acumulados son más fáciles de ignorar'],
        correctAnswer: 'Porque el usuario recibe todos los problemas de una vez y puede corregirlos todos',
        correctFeedback: 'Mostrar todos los errores juntos mejora la experiencia del usuario: no tiene que corregir un campo, intentar de nuevo, encontrar otro error, y así sucesivamente.',
        incorrectFeedback: 'Acumular errores es mejor para el usuario porque puede ver todos los problemas de una vez y corregirlos todos juntos, en lugar de descubrirlos uno por uno con cada intento.',
      },
      {
        question: '¿Qué verifica isinstance(valor, (int, float))?',
        options: ['Que valor sea exactamente un int', 'Que valor sea un int o un float', 'Que valor no sea None', 'Que valor pueda convertirse a número'],
        correctAnswer: 'Que valor sea un int o un float',
        correctFeedback: 'isinstance() acepta una tupla de tipos. isinstance(x, (int, float)) devuelve True si x es int o float, lo que es útil para validar números en general.',
        incorrectFeedback: 'isinstance(valor, (int, float)) verifica si valor es de tipo int O de tipo float. Al pasar una tupla como segundo argumento, isinstance devuelve True si el valor coincide con cualquiera de los tipos.',
      },
      {
        question: '¿Qué significa el principio "fail fast" en validación de datos?',
        options: ['Que el programa debe cerrarse rápido cuando hay errores', 'Que los errores deben detectarse y reportarse lo antes posible', 'Que las validaciones deben ser lo más simples posible', 'Que nunca se deben capturar errores con try/except'],
        correctAnswer: 'Que los errores deben detectarse y reportarse lo antes posible',
        correctFeedback: '"Fail fast" significa detectar y reportar problemas lo antes posible, evitando que un dato inválido viaje por todo el programa y cause fallos confusos en lugares inesperados.',
        incorrectFeedback: '"Fail fast" significa detectar errores lo antes posible. Es mejor validar al inicio que dejar que un dato inválido cause un fallo misterioso en una parte lejana del programa.',
      },
    ],
  },
]
