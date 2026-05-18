import type { Lesson } from '@/types'

export const lessonsModule15: Lesson[] = [
  {
    slug: 'multiples-excepciones',
    title: 'Capturar múltiples excepciones',
    module: 'Manejo avanzado de errores',
    moduleNumber: 15,
    order: 68,
    description: 'Aprende a manejar diferentes tipos de errores con múltiples bloques except.',
    explanation: `Ya conoces el bloque básico \`try/except\`. Ahora aprenderás a manejar distintos tipos de error de forma específica usando múltiples bloques \`except\`.

**Sintaxis:**
\`\`\`python
try:
    # código que puede fallar
except TipoError1:
    # solo si ocurre TipoError1
except TipoError2:
    # solo si ocurre TipoError2
except (TipoError3, TipoError4):
    # si ocurre cualquiera de los dos
except Exception as e:
    # cualquier otra excepción
\`\`\`

**Capturar múltiples tipos en un except:**
\`\`\`python
try:
    resultado = int(input("Número: ")) / int(input("Divisor: "))
except ValueError:
    print("Debes ingresar números válidos")
except ZeroDivisionError:
    print("No puedes dividir entre cero")
\`\`\`

**¿Por qué separar los except?**
Cada tipo de error requiere una respuesta diferente. Mezclarlo con un solo \`except Exception\` oculta la causa real y dificulta el debugging.

**Capturar el objeto excepción con \`as\`:**
\`\`\`python
except ValueError as e:
    print(f"Error de valor: {e}")
\`\`\`

**Orden de los except:**
Los bloques se evalúan en orden. Si una excepción es subclase de otra, el except más general debe ir después:
\`\`\`python
except Exception:   # demasiado general — pon al final
except ValueError:  # más específico — pon primero
\`\`\``,
    codeExample: `# Múltiples excepciones con respuesta diferente
def dividir_entrada():
    try:
        numerador = int(input("Numerador: "))
        denominador = int(input("Denominador: "))
        resultado = numerador / denominador
        print(f"Resultado: {resultado}")
    except ValueError:
        print("Error: debes ingresar números enteros.")
    except ZeroDivisionError:
        print("Error: no puedes dividir entre cero.")

# Capturar el objeto excepción
def acceder_elemento(lista, indice):
    try:
        elemento = lista[indice]
        valor = int(elemento)
        return valor
    except IndexError as e:
        print(f"Índice fuera de rango: {e}")
        return None
    except (TypeError, ValueError) as e:
        print(f"El elemento no es un número válido: {e}")
        return None

resultado = acceder_elemento(["10", "abc", "30"], 1)
print(resultado)  # None, imprime el error de ValueError

resultado = acceder_elemento(["10", "20", "30"], 10)
print(resultado)  # None, imprime el error de IndexError

resultado = acceder_elemento(["10", "20", "30"], 2)
print(resultado)  # 30

# Orden correcto: específico antes que general
def leer_config(ruta):
    try:
        with open(ruta) as f:
            datos = f.read()
            return datos
    except FileNotFoundError:
        print(f"Archivo no encontrado: {ruta}")
    except PermissionError:
        print(f"Sin permisos para leer: {ruta}")
    except OSError as e:
        print(f"Error del sistema: {e}")   # captura otros errores de IO
    # Exception genérico solo si no lo manejó ninguno anterior`,
    keyPoints: [
      'Puedes tener múltiples bloques `except` para manejar distintos tipos de error',
      'Los bloques se evalúan en orden — pon los más específicos primero',
      '`except (TypeError, ValueError)` captura cualquiera de los dos tipos en un solo bloque',
      '`except TipoError as e` guarda el objeto excepción para inspeccionarlo',
      'Nunca uses `except Exception` como único bloque — oculta errores inesperados',
      'Cada tipo de error merece una respuesta apropiada: mensajes diferentes, logs diferentes',
    ],
    exercise: {
      description: 'Escribe una función `convertir_a_numero(texto)` que intente convertir `texto` a entero, luego a float si falla. Si ninguno funciona, imprime un mensaje claro y devuelve `None`. Usa múltiples bloques `except` para manejar cada caso.',
      hint: 'Prueba primero `int(texto)`, si lanza `ValueError` prueba `float(texto)`, y si también falla, maneja ese segundo `ValueError`.',
    },
    quiz: [
      {
        question: '¿Qué bloque `except` se ejecuta cuando una función lanza un `TypeError`?\n```python\ntry:\n    f()\nexcept ValueError:\n    print("A")\nexcept TypeError:\n    print("B")\nexcept Exception:\n    print("C")\n```',
        options: ['A', 'B', 'C', 'Ninguno, el error se propaga'],
        correctAnswer: 'B',
        correctFeedback: 'Correcto. Python busca en orden el primer `except` que coincida. `TypeError` coincide con el segundo bloque.',
        incorrectFeedback: 'Python evalúa los bloques `except` en orden. El primero que coincide con el tipo de excepción se ejecuta. `TypeError` coincide con `except TypeError`, así que se imprime "B".',
      },
      {
        question: '¿Qué hace `except (ValueError, TypeError) as e`?',
        options: [
          'Crea dos bloques except separados',
          'Captura si ocurre ValueError O TypeError, guardando el error en `e`',
          'Solo captura ValueError, ignora TypeError',
          'Error de sintaxis',
        ],
        correctAnswer: 'Captura si ocurre ValueError O TypeError, guardando el error en `e`',
        correctFeedback: 'Correcto. Una tupla de tipos en except captura cualquiera de ellos. `as e` guarda el objeto excepción.',
        incorrectFeedback: 'Pasar una tupla de tipos a `except` captura cualquiera de ellos. `as e` guarda el objeto excepción para inspeccionarlo. Es equivalente a dos bloques except con el mismo cuerpo.',
      },
      {
        question: '¿Por qué es mala práctica tener solo `except Exception` sin bloques más específicos?',
        options: [
          'Porque Exception no existe en Python',
          'Porque captura todos los errores incluyendo los que no anticipaste, ocultando bugs',
          'Porque es más lento',
          'Porque no puedes usar `as e` con él',
        ],
        correctAnswer: 'Porque captura todos los errores incluyendo los que no anticipaste, ocultando bugs',
        correctFeedback: 'Correcto. `except Exception` atrapa todo, incluso errores inesperados como `AttributeError` o `RecursionError`, haciendo muy difícil encontrar bugs.',
        incorrectFeedback: '`except Exception` sin más captura cualquier error, incluso aquellos que son bugs en tu código (AttributeError, NameError, etc.). Esto oculta problemas y hace el código muy difícil de depurar.',
      },
      {
        question: '¿Cuál es el orden correcto para los bloques except?',
        options: [
          'Más generales primero, más específicos al final',
          'Más específicos primero, más generales al final',
          'El orden no importa',
          'Alfabético por nombre de excepción',
        ],
        correctAnswer: 'Más específicos primero, más generales al final',
        correctFeedback: 'Correcto. Si el más general va primero, captura todo antes de que el específico tenga oportunidad. Python lanzaría una advertencia en este caso.',
        incorrectFeedback: 'Si `except Exception` va primero, captura todo y los bloques específicos nunca se ejecutan. Los específicos siempre van primero: `except FileNotFoundError` antes de `except OSError` (que es su clase padre).',
      },
      {
        question: '¿Cómo se obtiene el mensaje de error dentro de un bloque `except`?',
        options: [
          'print(error.message)',
          'except TipoError as e: print(e)',
          'except TipoError(mensaje): print(mensaje)',
          'error.get_message()',
        ],
        correctAnswer: 'except TipoError as e: print(e)',
        correctFeedback: 'Correcto. `as e` asigna el objeto excepción a `e`. Al hacer `print(e)`, muestra el mensaje de la excepción.',
        incorrectFeedback: '`except TipoError as e` asigna el objeto excepción a la variable `e`. Luego `print(e)` o `str(e)` muestra el mensaje de error. `print(e)` funciona porque `__str__` de la excepción devuelve el mensaje.',
      },
      {
        question: '¿Qué imprime este código?\n```python\ntry:\n    x = int("abc")\nexcept ValueError:\n    print("ValueError")\nexcept Exception:\n    print("Exception")\n```',
        options: ['ValueError', 'Exception', 'ValueError\nException', 'Error no manejado'],
        correctAnswer: 'ValueError',
        correctFeedback: 'Correcto. `int("abc")` lanza `ValueError`. El primer `except ValueError` coincide y se ejecuta. El bloque `Exception` no se alcanza.',
        incorrectFeedback: 'Solo se ejecuta UN bloque `except`. `int("abc")` lanza `ValueError`. El primer bloque `except ValueError` coincide → imprime "ValueError" y termina el try/except.',
      },
      {
        question: '¿Para qué sirve `except TipoError as e` en lugar de solo `except TipoError`?',
        options: [
          'Para que el error sea silenciado completamente',
          'Para guardar el objeto excepción y poder inspeccionar su mensaje o tipo',
          'Para que el except sea más rápido',
          'Para poder re-lanzar el error con `raise`',
        ],
        correctAnswer: 'Para guardar el objeto excepción y poder inspeccionar su mensaje o tipo',
        correctFeedback: 'Correcto. El objeto excepción `e` contiene el mensaje (`str(e)`), el tipo (`type(e)`) y otros atributos útiles para debugging o logging.',
        incorrectFeedback: '`as e` guarda la instancia de la excepción. Con ella puedes: ver el mensaje (`str(e)`), verificar el tipo (`type(e).__name__`), acceder a atributos específicos, o re-lanzarla con `raise e`.',
      },
    ],
  },

  {
    slug: 'excepciones-especificas-genericas',
    title: 'Excepciones específicas vs genéricas',
    module: 'Manejo avanzado de errores',
    moduleNumber: 15,
    order: 69,
    description: 'Aprende por qué es mejor capturar errores específicos en lugar de usar except demasiado generales.',
    explanation: `La jerarquía de excepciones en Python tiene \`BaseException\` en la cima, luego \`Exception\`, y debajo todas las excepciones concretas que ya conoces.

**Árbol simplificado:**
\`\`\`
BaseException
├── SystemExit          ← sys.exit()
├── KeyboardInterrupt   ← Ctrl+C
└── Exception
    ├── ValueError
    ├── TypeError
    ├── IndexError
    ├── KeyError
    ├── FileNotFoundError
    ├── ZeroDivisionError
    ├── AttributeError
    └── ... (muchas más)
\`\`\`

**¿Por qué evitar \`except Exception\` genérico?**

Imagina un bug en tu código que lanza un \`AttributeError\`. Si usas \`except Exception\`, lo capturas silenciosamente, el usuario no ve el error, tu programa sigue funcionando "mal" y tardas horas en encontrar el bug.

\`\`\`python
# ❌ Demasiado general — atrapa cualquier error
try:
    procesar(datos)
except Exception:
    print("Algo salió mal")   # ← ¿Qué? ¿Por qué? No sabes.

# ✅ Específico — sabes exactamente qué manejar
try:
    procesar(datos)
except ValueError as e:
    print(f"Datos inválidos: {e}")
except KeyError as e:
    print(f"Clave faltante: {e}")
\`\`\`

**Cuándo SÍ usar except amplio (con cuidado):**
- Al nivel más alto del programa para registrar errores inesperados antes de terminar
- En APIs y servidores web: para no exponer trazas internas al usuario
- Siempre con logging del error real:
\`\`\`python
import logging

try:
    ejecutar_tarea()
except Exception as e:
    logging.exception("Error inesperado")  # registra la traza completa
    raise   # re-lanza para no silenciarlo
\`\`\``,
    codeExample: `# Jerarquía: FileNotFoundError es subclase de OSError
# Prueba: ¿a cuál lo captura?
try:
    open("no_existe.txt")
except FileNotFoundError:
    print("Archivo no encontrado (específico)")
except OSError:
    print("Error de sistema (general)")
# Imprime: "Archivo no encontrado (específico)"

# ❌ Antipatrón: except Exception oculta bugs
def cargar_datos(ruta):
    try:
        with open(ruta) as f:
            datos = json.loads(f.read())
            return datos["resultados"]   # ← si el JSON no tiene "resultados", KeyError
    except Exception:
        return []   # ← silencia el KeyError como si fuera FileNotFoundError. ¡Peligroso!

# ✅ Específico: cada error con su respuesta
import json

def cargar_datos_bien(ruta):
    try:
        with open(ruta) as f:
            contenido = f.read()
    except FileNotFoundError:
        print(f"No se encontró el archivo: {ruta}")
        return None

    try:
        datos = json.loads(contenido)
    except json.JSONDecodeError as e:
        print(f"JSON malformado en {ruta}: {e}")
        return None

    if "resultados" not in datos:
        print("El JSON no tiene el campo 'resultados'")
        return None

    return datos["resultados"]

# Uso aceptable de except amplio: al nivel más alto con logging
import logging

def main():
    try:
        cargar_datos_bien("config.json")
    except Exception as e:
        logging.exception("Error crítico no anticipado")
        raise   # siempre re-lanza errores inesperados`,
    keyPoints: [
      'Las excepciones están organizadas en jerarquía: FileNotFoundError es subclase de OSError',
      '`except Exception` genérico oculta bugs al silenciar errores inesperados',
      'Captura solo los errores que realmente puedes manejar significativamente',
      'Si usas `except Exception` en el nivel más alto, siempre loguea el error y considera re-lanzarlo',
      'Los errores inesperados son señal de bugs — déjalos propagarse para detectarlos',
      'Nunca uses `except BaseException` o `except:` sin tipo — también capturaría `KeyboardInterrupt` y `SystemExit`',
    ],
    exercise: {
      description: 'Tienes una función `procesar_csv(ruta)` que abre un archivo, lo lee como CSV y devuelve la primera fila. Escribe la función manejando específicamente: `FileNotFoundError`, `csv.Error` (del módulo csv), e `IndexError` (si el archivo está vacío). Evita un `except Exception` genérico.',
      hint: 'Importa `csv`. `csv.reader()` puede lanzar `csv.Error`. Acceder a `filas[0]` lanza `IndexError` si no hay filas.',
    },
    quiz: [
      {
        question: '`FileNotFoundError` es subclase de `OSError`. Si tienes `except OSError` antes de `except FileNotFoundError`, ¿qué pasa?',
        options: [
          '`except FileNotFoundError` nunca se ejecuta — OSError lo captura primero',
          '`except FileNotFoundError` tiene prioridad por ser más específico',
          'Ambos se ejecutan',
          'Python lanza un error de sintaxis',
        ],
        correctAnswer: '`except FileNotFoundError` nunca se ejecuta — OSError lo captura primero',
        correctFeedback: 'Correcto. El except más general absorbe la excepción antes de que el específico tenga oportunidad. Siempre pon los más específicos primero.',
        incorrectFeedback: 'Python evalúa los `except` en orden y ejecuta el primero que coincide. `OSError` es padre de `FileNotFoundError`, así que lo captura. El bloque `FileNotFoundError` después de `OSError` nunca se alcanza.',
      },
      {
        question: '¿Por qué es peligroso silenciar una excepción con `except Exception: pass`?',
        options: [
          'Porque es más lento',
          'Porque oculta bugs: el programa sigue ejecutándose en un estado potencialmente incorrecto',
          'Porque `pass` no está permitido en except',
          'Solo es peligroso en Python 2',
        ],
        correctAnswer: 'Porque oculta bugs: el programa sigue ejecutándose en un estado potencialmente incorrecto',
        correctFeedback: 'Correcto. Si un bug lanza una excepción y la silencias, el programa continúa con datos incorrectos, produciendo resultados erróneos sin indicar qué salió mal.',
        incorrectFeedback: 'Silenciar excepciones es muy peligroso porque el programa puede quedar en un estado inconsistente. Los errores inesperados son señales de bugs — ignorarlos los hace más difíciles de encontrar y corregir.',
      },
      {
        question: '¿Cuál de estos `except` es el más apropiado para convertir texto a número?',
        options: [
          'except Exception',
          'except BaseException',
          'except ValueError',
          'except TypeError',
        ],
        correctAnswer: 'except ValueError',
        correctFeedback: 'Correcto. `int("abc")` lanza `ValueError`. Capturar específicamente `ValueError` muestra que sabes exactamente qué error puede ocurrir.',
        incorrectFeedback: '`int("abc")` lanza `ValueError` porque el valor es inválido para la conversión. Capturar `ValueError` específicamente comunica al lector exactamente qué falla puede ocurrir.',
      },
      {
        question: '¿Cuándo es aceptable usar `except Exception` como catch-all?',
        options: [
          'Nunca, siempre debe ser específico',
          'Al nivel más alto del programa para logging, siempre con re-lanzamiento o registro',
          'Cuando no sabes qué errores pueden ocurrir',
          'Solo en pruebas unitarias',
        ],
        correctAnswer: 'Al nivel más alto del programa para logging, siempre con re-lanzamiento o registro',
        correctFeedback: 'Correcto. En el punto de entrada del programa (como `if __name__ == "__main__"`) es razonable capturar todo para loguear el error antes de terminar.',
        incorrectFeedback: '`except Exception` es aceptable solo en el nivel más alto del programa para garantizar que todos los errores sean registrados antes de que el programa termine. Siempre debe ir acompañado de logging del traceback.',
      },
      {
        question: '¿Por qué no debes usar `except:` (sin tipo de excepción)?',
        options: [
          'Es un SyntaxError en Python 3',
          'Captura también KeyboardInterrupt y SystemExit, impidiendo que el usuario pueda detener el programa',
          'Solo funciona con excepciones de Python 2',
          'Es equivalente a `except Exception` — no hay diferencia',
        ],
        correctAnswer: 'Captura también KeyboardInterrupt y SystemExit, impidiendo que el usuario pueda detener el programa',
        correctFeedback: 'Correcto. `except:` sin tipo captura `BaseException`, incluyendo `KeyboardInterrupt` (Ctrl+C) y `SystemExit` (sys.exit()). Esto puede hacer que el programa sea imposible de detener.',
        incorrectFeedback: '`except:` es equivalente a `except BaseException`, que también captura `KeyboardInterrupt` (Ctrl+C) y `SystemExit`. Si usas esto, el usuario no podrá detener tu programa con Ctrl+C. Usa al menos `except Exception`.',
      },
    ],
  },

  {
    slug: 'excepciones-personalizadas',
    title: 'Crear excepciones personalizadas',
    module: 'Manejo avanzado de errores',
    moduleNumber: 15,
    order: 70,
    description: 'Aprende a crear tus propias clases de error para representar problemas específicos en tus programas.',
    explanation: `Las excepciones personalizadas (custom exceptions) te permiten representar errores que son específicos de tu dominio de negocio, haciendo el código más expresivo y fácil de manejar.

**Cómo crear una excepción personalizada:**
\`\`\`python
class MiError(Exception):
    pass
\`\`\`

Así de simple. Heredar de \`Exception\` es todo lo que se necesita para el caso básico.

**Añadir información útil:**
\`\`\`python
class SaldoInsuficienteError(Exception):
    def __init__(self, saldo, monto_requerido):
        self.saldo = saldo
        self.monto_requerido = monto_requerido
        mensaje = f"Saldo insuficiente: tienes \${saldo}, necesitas \${monto_requerido}"
        super().__init__(mensaje)
\`\`\`

**Jerarquía de excepciones propias:**
Para proyectos más grandes, crea una clase base propia y derivaciones específicas:
\`\`\`python
class ErrorDeAplicacion(Exception):
    """Clase base para todos los errores de esta app."""
    pass

class ErrorDeValidacion(ErrorDeAplicacion):
    pass

class ErrorDeAutenticacion(ErrorDeAplicacion):
    pass
\`\`\`

Esto permite capturar todos los errores de la app con \`except ErrorDeAplicacion\` o solo uno específico.

**Lanzar tu excepción:**
\`\`\`python
raise SaldoInsuficienteError(saldo=50, monto_requerido=100)
\`\`\`

**¿Por qué no usar Exception o ValueError directamente?**
Las excepciones personalizadas comunican la intención: \`except SaldoInsuficienteError\` es más expresivo que \`except Exception\`, y puedes capturarlas sin riesgo de silenciar errores no relacionados.`,
    codeExample: `# Excepción personalizada básica
class EmailInvalidoError(Exception):
    pass

def validar_email(email):
    if "@" not in email:
        raise EmailInvalidoError(f"'{email}' no es un email válido: falta el @")
    if "." not in email.split("@")[-1]:
        raise EmailInvalidoError(f"'{email}' no tiene dominio válido")
    return True

try:
    validar_email("usuario-sin-arroba.com")
except EmailInvalidoError as e:
    print(f"Error: {e}")

# Excepción con atributos adicionales
class SaldoInsuficienteError(Exception):
    def __init__(self, saldo_actual, monto_requerido):
        self.saldo_actual = saldo_actual
        self.monto_requerido = monto_requerido
        self.diferencia = monto_requerido - saldo_actual
        super().__init__(
            f"Saldo insuficiente: disponible \${saldo_actual}, "
            f"requerido \${monto_requerido}"
        )

class CuentaBancaria:
    def __init__(self, saldo_inicial):
        self.saldo = saldo_inicial

    def retirar(self, monto):
        if monto > self.saldo:
            raise SaldoInsuficienteError(self.saldo, monto)
        self.saldo -= monto
        return self.saldo

cuenta = CuentaBancaria(100)
try:
    cuenta.retirar(150)
except SaldoInsuficienteError as e:
    print(e)
    print(f"Faltan: \${e.diferencia}")

# Jerarquía de excepciones propias
class ErrorApp(Exception):
    """Base para todos los errores de la aplicación."""
    pass

class ErrorValidacion(ErrorApp):
    pass

class ErrorAutenticacion(ErrorApp):
    pass

def login(usuario, contraseña):
    if not usuario:
        raise ErrorValidacion("El usuario no puede estar vacío")
    if contraseña != "1234":
        raise ErrorAutenticacion("Contraseña incorrecta")

try:
    login("", "1234")
except ErrorValidacion as e:
    print(f"Validación fallida: {e}")
except ErrorAutenticacion as e:
    print(f"Acceso denegado: {e}")
except ErrorApp as e:
    print(f"Error de la app: {e}")`,
    keyPoints: [
      'Hereda de `Exception` (o de una subclase) para crear una excepción personalizada',
      'Añade un `__init__` personalizado para incluir información útil como atributos',
      'Llama a `super().__init__(mensaje)` para que el mensaje sea visible al imprimir la excepción',
      'Crea una jerarquía: una clase base para tu app, y subclases para errores específicos',
      'Las excepciones personalizadas hacen el código más expresivo y fácil de manejar',
      'Nombra las excepciones con sufijo `Error`: `SaldoInsuficienteError`, `EmailInvalidoError`',
    ],
    exercise: {
      description: 'Crea una excepción `EdadInvalidaError` que reciba la edad ingresada y el rango permitido (min, max). El mensaje debe decir algo como "Edad 150 fuera del rango permitido [0, 120]". Luego escribe una función `validar_edad(edad)` que la lance si la edad está fuera de [0, 120].',
      hint: 'El `__init__` recibe `edad, minimo, maximo`. Guárdalos como atributos y llama a `super().__init__(mensaje_formateado)`.',
    },
    quiz: [
      {
        question: '¿De qué clase debe heredar una excepción personalizada?',
        options: ['object', 'Exception', 'Error', 'BaseException'],
        correctAnswer: 'Exception',
        correctFeedback: 'Correcto. Heredar de `Exception` es la convención estándar para excepciones personalizadas del usuario.',
        incorrectFeedback: 'La convención es heredar de `Exception` (no de `BaseException`, que también incluiría `KeyboardInterrupt` y `SystemExit`). `Error` no existe como clase base en Python.',
      },
      {
        question: '¿Para qué llamas `super().__init__(mensaje)` en el `__init__` de tu excepción?',
        options: [
          'Para poder usar la excepción con `raise`',
          'Para que el mensaje sea visible cuando se imprime la excepción',
          'Es obligatorio por Python, aunque no sirva para nada',
          'Para poder capturarla con `except`',
        ],
        correctAnswer: 'Para que el mensaje sea visible cuando se imprime la excepción',
        correctFeedback: 'Correcto. `super().__init__(mensaje)` llama al constructor de `Exception` que almacena el mensaje. Así `str(e)` y `print(e)` muestran el texto correcto.',
        incorrectFeedback: 'Llamar a `super().__init__(mensaje)` inicializa la clase padre `Exception` con el mensaje. Esto hace que `str(excepcion)` y `print(excepcion)` muestren el texto que proporcionas.',
      },
      {
        question: '¿Cuál es la ventaja de crear una jerarquía de excepciones propias?',
        options: [
          'El programa es más rápido',
          'Puedes capturar todos los errores de tu app con `except ErrorApp` o solo tipos específicos',
          'Python las documenta automáticamente',
          'Puedes usar múltiples `raise` en la misma función',
        ],
        correctAnswer: 'Puedes capturar todos los errores de tu app con `except ErrorApp` o solo tipos específicos',
        correctFeedback: 'Correcto. Una clase base permite capturar "cualquier error de la app" sin capturar errores de Python no relacionados.',
        incorrectFeedback: 'Una jerarquía como `ErrorApp → ErrorValidacion, ErrorAutenticacion` permite capturar con `except ErrorApp` (cualquier error de tu app) o con `except ErrorValidacion` (solo errores de validación). Es muy flexible.',
      },
      {
        question: '¿Cómo accederías al atributo `monto_requerido` de `SaldoInsuficienteError` dentro de un `except`?',
        options: [
          'except SaldoInsuficienteError.monto_requerido',
          'except SaldoInsuficienteError as e: e.monto_requerido',
          'SaldoInsuficienteError.get("monto_requerido")',
          'No es posible acceder a atributos de excepciones',
        ],
        correctAnswer: 'except SaldoInsuficienteError as e: e.monto_requerido',
        correctFeedback: 'Correcto. Con `as e` capturas el objeto excepción y puedes acceder a cualquier atributo que hayas definido en su `__init__`.',
        incorrectFeedback: '`except SaldoInsuficienteError as e` guarda la instancia de la excepción. Si definiste `self.monto_requerido` en `__init__`, puedes acceder a él con `e.monto_requerido`.',
      },
      {
        question: '¿Cuál es la convención de nomenclatura para excepciones personalizadas?',
        options: [
          'Empezar con "mi_": mi_error, mi_excepcion',
          'Terminar con "Error" o "Exception": SaldoInsuficienteError',
          'Todo en mayúsculas: SALDO_INSUFICIENTE',
          'Terminar con "_err": saldo_insuficiente_err',
        ],
        correctAnswer: 'Terminar con "Error" o "Exception": SaldoInsuficienteError',
        correctFeedback: 'Correcto. PEP 8 recomienda usar PascalCase (UpperCamelCase) con sufijo "Error" o "Exception": `ValueError`, `TypeError`, `EmailInvalidoError`.',
        incorrectFeedback: 'La convención PEP 8 para excepciones es usar PascalCase terminando en "Error" o "Exception": `SaldoInsuficienteError`, `AutenticacionError`. Esto sigue el patrón de las excepciones integradas de Python.',
      },
      {
        question: '¿Por qué una excepción personalizada es más útil que usar `ValueError` directamente para representar "saldo insuficiente"?',
        options: [
          'Porque es más rápida',
          'Porque puedes capturar `SaldoInsuficienteError` sin riesgo de capturar otros ValueError no relacionados',
          'Porque ValueError no tiene mensaje',
          'Porque Python prohíbe usar ValueError en proyectos grandes',
        ],
        correctAnswer: 'Porque puedes capturar `SaldoInsuficienteError` sin riesgo de capturar otros ValueError no relacionados',
        correctFeedback: 'Correcto. `except SaldoInsuficienteError` captura solo ese error específico, siendo más preciso y expresivo que `except ValueError` que capturaría cualquier error de valor.',
        incorrectFeedback: 'Una excepción personalizada es más precisa. Con `except ValueError` capturarías también errores de parsing, conversión, etc. Con `except SaldoInsuficienteError` solo capturas exactamente el caso que quieres manejar.',
      },
    ],
  },

  {
    slug: 'propagar-errores',
    title: 'Propagar errores correctamente',
    module: 'Manejo avanzado de errores',
    moduleNumber: 15,
    order: 71,
    description: 'Aprende cuándo manejar un error y cuándo dejar que otra parte del programa lo maneje.',
    explanation: `No todos los errores deben manejarse en el lugar donde ocurren. A veces lo correcto es **propagar** (dejar subir) el error para que una capa superior lo maneje.

**Re-lanzar un error con \`raise\`:**
\`\`\`python
try:
    conectar_bd()
except ConnectionError as e:
    logging.error("Fallo al conectar: %s", e)
    raise   # re-lanza el mismo error, sin perder el traceback original
\`\`\`

**Transformar un error (encadenamiento):**
Puedes capturar un error de bajo nivel y lanzar uno más descriptivo con \`raise from\`:
\`\`\`python
try:
    with open(ruta) as f:
        return json.loads(f.read())
except json.JSONDecodeError as e:
    raise ConfiguracionInvalidaError(f"Archivo de config malformado: {ruta}") from e
\`\`\`

El \`from e\` preserva la excepción original como causa (\`__cause__\`), lo que ayuda en el debugging.

**¿Cuándo manejar vs propagar?**

| Situación | Acción recomendada |
|-----------|-------------------|
| Puedes recuperarte del error | Maneja el error, continúa |
| No puedes hacer nada útil | Propaga (deja subir) |
| Quieres añadir contexto | Captura + re-lanza con \`from\` |
| Quieres loguear Y propagar | Captura, loguea, \`raise\` |
| El error revela un bug | Propaga (que crashe y lo encuentres) |

**Principio:** maneja los errores en la capa que tiene suficiente contexto para decidir qué hacer con ellos.`,
    codeExample: `import json
import logging

# ── Re-lanzar sin modificar (para loguear y propagar) ────────
def cargar_datos(ruta):
    try:
        with open(ruta) as f:
            return json.load(f)
    except Exception as e:
        logging.error("Error al cargar %s: %s", ruta, e)
        raise   # propaga la excepción original intacta

# ── Transformar error con from ────────────────────────────────
class ConfigError(Exception):
    pass

def leer_config(ruta):
    try:
        with open(ruta) as f:
            return json.load(f)
    except FileNotFoundError as e:
        raise ConfigError(f"No se encontró el archivo de config: {ruta}") from e
    except json.JSONDecodeError as e:
        raise ConfigError(f"Config malformada en {ruta}: {e}") from e

# La capa que llama solo necesita manejar ConfigError
try:
    config = leer_config("app.json")
except ConfigError as e:
    print(f"Error de configuración: {e}")
    print(f"Causa original: {e.__cause__}")

# ── Cuándo NO capturar ───────────────────────────────────────
def dividir(a, b):
    # No captures ZeroDivisionError aquí si no puedes hacer nada útil
    # Deja que el llamador lo maneje (él sabe si b puede ser 0)
    return a / b

# ── Capturar y re-lanzar en cascada ──────────────────────────
def procesar_pedido(pedido_id):
    try:
        datos = cargar_datos(f"pedidos/{pedido_id}.json")
        # ... procesar
    except FileNotFoundError:
        raise ValueError(f"Pedido {pedido_id} no existe") from None
        # 'from None' elimina la cadena de causa (cuando no añade información útil)`,
    keyPoints: [
      '`raise` (sin argumentos) dentro de un except re-lanza la excepción original sin alterar el traceback',
      '`raise NuevaExcepcion() from original` encadena excepciones, preservando la causa original',
      '`from None` elimina la cadena de causa cuando la excepción original no aporta información al usuario',
      'Maneja el error donde tienes suficiente contexto para recuperarte o dar una respuesta útil',
      'Propaga los errores que no puedes manejar — no los silencies',
      'Siempre loguea antes de propagar si el error debe registrarse',
    ],
    exercise: {
      description: 'Escribe una función `obtener_usuario(id_usuario, base_datos)` que busque al usuario en el dict `base_datos`. Si no existe lanza `UsuarioNoEncontradoError` (que debes definir) con `from KeyError`. La función debe ser usable aunque el llamador no sepa nada de dicts.',
      hint: 'Captura `KeyError` de `base_datos[id_usuario]` y re-lánzala como `UsuarioNoEncontradoError(f"Usuario {id_usuario} no existe") from e`.',
    },
    quiz: [
      {
        question: '¿Qué hace `raise` (sin argumentos) dentro de un bloque `except`?',
        options: [
          'Lanza una nueva excepción genérica',
          'Re-lanza la excepción actual sin perder el traceback original',
          'Silencia la excepción',
          'Reinicia el bloque try',
        ],
        correctAnswer: 'Re-lanza la excepción actual sin perder el traceback original',
        correctFeedback: 'Correcto. `raise` sin argumentos es la forma correcta de propagar la excepción después de loguearla o procesarla parcialmente.',
        incorrectFeedback: 'Un `raise` desnudo dentro de un `except` re-lanza exactamente la misma excepción con su traceback original intacto. Es útil para loguear y propagar.',
      },
      {
        question: '¿Qué hace `raise NuevoError() from original`?',
        options: [
          'Lanza solo `NuevoError`, eliminando `original`',
          'Lanza `NuevoError` pero preserva `original` como su causa (`__cause__`)',
          'Lanza ambos errores secuencialmente',
          'Error de sintaxis',
        ],
        correctAnswer: 'Lanza `NuevoError` pero preserva `original` como su causa (`__cause__`)',
        correctFeedback: 'Correcto. `from original` encadena la excepción: en el traceback aparece "El error anterior fue la causa directa de este error".',
        incorrectFeedback: '`raise NuevoError() from original` crea una cadena de excepciones. `NuevoError.__cause__` apuntará a `original`. El traceback mostrará ambas, lo que facilita el debugging.',
      },
      {
        question: '¿Cuándo es correcto NO capturar una excepción?',
        options: [
          'Nunca, siempre hay que capturar',
          'Cuando no tienes suficiente contexto para recuperarte o añadir información útil',
          'Solo cuando el error es un SyntaxError',
          'Cuando el programa tiene más de 100 líneas',
        ],
        correctAnswer: 'Cuando no tienes suficiente contexto para recuperarte o añadir información útil',
        correctFeedback: 'Correcto. Si no puedes hacer nada útil con el error, déjalo subir. La capa superior puede tener más contexto para manejarlo.',
        incorrectFeedback: 'Si en el punto actual no puedes recuperarte del error ni añadir información útil, la mejor opción es no capturarlo. Deja que suba hasta la capa que sí pueda manejarlo apropiadamente.',
      },
      {
        question: '¿Qué hace `raise NuevoError() from None`?',
        options: [
          'Lanza NuevoError y conserva la excepción original como causa',
          'Lanza NuevoError pero suprime la cadena de excepciones (no muestra la causa original)',
          'Error de sintaxis: no se puede usar None',
          'Silencia todos los errores',
        ],
        correctAnswer: 'Lanza NuevoError pero suprime la cadena de excepciones (no muestra la causa original)',
        correctFeedback: 'Correcto. `from None` es útil cuando la excepción original contendría información técnica confusa para el usuario final.',
        incorrectFeedback: '`from None` establece `__suppress_context__ = True` en la nueva excepción, suprimiendo la visualización de la excepción original. Útil cuando quieres lanzar un error "limpio" sin contexto técnico confuso.',
      },
      {
        question: '¿Qué es lo correcto cuando capturas un error para loguearlo?',
        options: [
          'Capturarlo, loguearlo y silenciarlo (`pass` al final)',
          'Capturarlo, loguearlo y re-lanzarlo con `raise`',
          'Solo loguear, nunca capturar',
          'Capturarlo sin loguearlo para no hacer el programa más lento',
        ],
        correctAnswer: 'Capturarlo, loguearlo y re-lanzarlo con `raise`',
        correctFeedback: 'Correcto. Si el error es inesperado y no puedes recuperarte, captura para loguear (registrar el traceback completo) y luego re-lanza para que el error se propague normalmente.',
        incorrectFeedback: 'Lo correcto es: 1) capturar para poder loguearlo, 2) loguearlo con `logging.exception()` (que incluye el traceback), 3) re-lanzarlo con `raise` para que la cadena normal de manejo continúe.',
      },
    ],
  },

  {
    slug: 'buenas-practicas-errores',
    title: 'Buenas prácticas al manejar errores',
    module: 'Manejo avanzado de errores',
    moduleNumber: 15,
    order: 72,
    description: 'Aprende prácticas recomendadas para escribir código más seguro, claro y fácil de depurar.',
    explanation: `Manejar errores correctamente es tanto arte como ciencia. Estas prácticas separan el código robusto del código frágil.

**1. Falla rápido (Fail Fast)**
Si los datos de entrada son incorrectos, detecta el error lo antes posible:
\`\`\`python
def procesar(datos):
    if datos is None:
        raise ValueError("datos no puede ser None")
    if not isinstance(datos, list):
        raise TypeError(f"Se esperaba list, se recibió {type(datos).__name__}")
    # ...procesar
\`\`\`

**2. El bloque \`finally\` siempre se ejecuta**
Úsalo para limpiar recursos independientemente de si hubo error:
\`\`\`python
archivo = None
try:
    archivo = open("datos.txt")
    procesar(archivo)
except Exception as e:
    logging.error(e)
finally:
    if archivo:
        archivo.close()   # siempre se ejecuta
\`\`\`

**3. Usa context managers (\`with\`) cuando sea posible**
Son más seguros que el try/finally manual:
\`\`\`python
with open("datos.txt") as f:   # cierra automáticamente incluso si hay error
    procesar(f)
\`\`\`

**4. Mensajes de error útiles**
\`\`\`python
# ❌ Inútil
raise ValueError("Error")

# ✅ Útil
raise ValueError(f"El email '{email}' no es válido: falta el símbolo @")
\`\`\`

**5. Loguea con contexto**
\`\`\`python
import logging
logging.basicConfig(level=logging.ERROR)

try:
    resultado = procesar(datos)
except Exception as e:
    logging.exception("Error procesando datos: %s", datos)
    raise
\`\`\`

\`logging.exception()\` incluye automáticamente el traceback completo.`,
    codeExample: `import logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s: %(message)s'
)

# ── 1. Fail Fast: validar al inicio ──────────────────────────
def calcular_imc(peso_kg, altura_m):
    if not isinstance(peso_kg, (int, float)):
        raise TypeError(f"peso_kg debe ser número, recibido: {type(peso_kg).__name__}")
    if not isinstance(altura_m, (int, float)):
        raise TypeError(f"altura_m debe ser número, recibido: {type(altura_m).__name__}")
    if peso_kg <= 0:
        raise ValueError(f"peso_kg debe ser positivo, recibido: {peso_kg}")
    if altura_m <= 0 or altura_m > 3:
        raise ValueError(f"altura_m fuera de rango realista: {altura_m}")

    return peso_kg / (altura_m ** 2)

# ── 2. Usar with (context manager) ───────────────────────────
def procesar_archivo(ruta):
    try:
        with open(ruta, encoding='utf-8') as f:   # se cierra automáticamente
            return f.read()
    except FileNotFoundError:
        logging.warning("Archivo no encontrado: %s", ruta)
        return None

# ── 3. Mensajes de error descriptivos ────────────────────────
def buscar_usuario(usuarios, email):
    if not email:
        raise ValueError("El email no puede estar vacío")
    usuario = next((u for u in usuarios if u['email'] == email), None)
    if usuario is None:
        raise KeyError(f"No existe ningún usuario con email '{email}'")
    return usuario

# ── 4. Logging con contexto ───────────────────────────────────
def ejecutar_con_log(funcion, *args, **kwargs):
    try:
        return funcion(*args, **kwargs)
    except Exception as e:
        logging.exception(
            "Error en %s con args=%s kwargs=%s",
            funcion.__name__, args, kwargs
        )
        raise   # siempre re-lanza errores inesperados

# ── 5. else en try: solo si no hubo error ────────────────────
def leer_numero():
    try:
        numero = int(input("Número: "))
    except ValueError:
        print("Debes ingresar un número entero")
    else:
        print(f"El doble es: {numero * 2}")   # solo si no hubo error`,
    keyPoints: [
      'Fail Fast: valida inputs al inicio, antes de hacer operaciones costosas',
      '`finally` se ejecuta siempre — úsalo para liberar recursos (archivos, conexiones, locks)',
      'Usa `with` (context managers) en lugar de try/finally manual para recursos',
      'Los mensajes de error deben incluir el valor recibido y qué se esperaba',
      '`logging.exception()` registra el traceback completo automáticamente',
      'El bloque `else` en try/except se ejecuta solo si NO ocurrió ninguna excepción',
    ],
    exercise: {
      description: 'Escribe una función `conectar_y_procesar(host, puerto, datos)` que: 1) valide que `datos` sea una lista no vacía (fail fast), 2) simule una conexión que puede fallar con `ConnectionError`, 3) use `finally` para imprimir "Cerrando conexión" siempre, 4) use mensajes de error descriptivos.',
      hint: 'Valida al inicio con if, luego el try/except para ConnectionError, con finally para el cierre.',
    },
    quiz: [
      {
        question: '¿Qué garantiza el bloque `finally`?',
        options: [
          'Que el código dentro se ejecuta solo si no hay errores',
          'Que el código dentro se ejecuta SIEMPRE, haya o no excepción',
          'Que la excepción es silenciada',
          'Que el programa termina limpiamente',
        ],
        correctAnswer: 'Que el código dentro se ejecuta SIEMPRE, haya o no excepción',
        correctFeedback: 'Correcto. `finally` se ejecuta incluso si hay una excepción no capturada, incluso si hay un `return` en el try, y también si todo sale bien.',
        incorrectFeedback: '`finally` se ejecuta SIEMPRE: si el try termina normalmente, si ocurre una excepción (capturada o no), e incluso si hay un `return` dentro del try. Es ideal para liberar recursos.',
      },
      {
        question: '¿Por qué usar `with open(ruta) as f` es mejor que abrir y cerrar manualmente?',
        options: [
          'Porque es más rápido',
          'Porque garantiza que el archivo se cierre incluso si ocurre una excepción',
          'Porque solo funciona con archivos',
          'Porque no necesita bloques try/except',
        ],
        correctAnswer: 'Porque garantiza que el archivo se cierre incluso si ocurre una excepción',
        correctFeedback: 'Correcto. El context manager (`with`) llama automáticamente a `f.close()` al salir del bloque, incluso si hay una excepción. Equivale a try/finally pero más elegante.',
        incorrectFeedback: 'El `with` statement usa el protocolo de context manager (`__enter__`/`__exit__`). `__exit__` se llama siempre al salir del bloque, incluso con excepciones. Para archivos, esto garantiza que siempre se cierren.',
      },
      {
        question: '¿Cuándo se ejecuta el bloque `else` en un try/except/else?',
        options: [
          'Siempre, igual que finally',
          'Solo cuando NO ocurre ninguna excepción en el try',
          'Solo cuando SÍ ocurre una excepción',
          'Después del finally',
        ],
        correctAnswer: 'Solo cuando NO ocurre ninguna excepción en el try',
        correctFeedback: 'Correcto. El `else` del try/except es el equivalente al "camino feliz": se ejecuta si el try terminó sin excepciones.',
        incorrectFeedback: 'El `else` en try/except/else se ejecuta solo cuando el bloque `try` completa exitosamente sin lanzar ninguna excepción. Si hay excepción, el `else` se salta.',
      },
      {
        question: '¿Qué ventaja tiene `logging.exception()` sobre `logging.error()`?',
        options: [
          'Es más rápido',
          'Incluye automáticamente el traceback completo en el log',
          'No necesita estar dentro de un bloque except',
          'Envía un email de alerta automáticamente',
        ],
        correctAnswer: 'Incluye automáticamente el traceback completo en el log',
        correctFeedback: 'Correcto. `logging.exception()` llama internamente a `traceback.format_exc()` y añade el traceback al mensaje de log, lo que es invaluable para debugging.',
        incorrectFeedback: '`logging.exception()` hace lo mismo que `logging.error()` pero además incluye el traceback completo de la excepción actual. Solo funciona dentro de un bloque `except`.',
      },
      {
        question: '¿Cuál de estos mensajes de error es más útil?',
        options: [
          'raise ValueError("Error de valor")',
          'raise ValueError("Valor inválido")',
          'raise ValueError(f"El campo \'edad\' debe ser un entero positivo, se recibió: {valor!r}")',
          'raise ValueError("Error: revisar documentación")',
        ],
        correctAnswer: 'raise ValueError(f"El campo \'edad\' debe ser un entero positivo, se recibió: {valor!r}")',
        correctFeedback: 'Correcto. El mejor mensaje incluye: qué campo falló, qué se esperaba, y qué se recibió. Esto permite corregir el problema sin necesidad de depurar.',
        incorrectFeedback: 'El mensaje más útil especifica: el nombre del campo que falló, el valor esperado, y el valor recibido. Con esa información, el programador puede corregir el problema de inmediato sin necesidad de depurar.',
      },
      {
        question: '¿Qué significa "Fail Fast" en el contexto del manejo de errores?',
        options: [
          'Hacer que el programa falle lo más rápido posible para ahorrar tiempo',
          'Validar entradas al inicio de la función, antes de ejecutar operaciones costosas',
          'Usar excepciones en lugar de valores de retorno',
          'Lanzar errores solo al final del proceso',
        ],
        correctAnswer: 'Validar entradas al inicio de la función, antes de ejecutar operaciones costosas',
        correctFeedback: 'Correcto. "Fail Fast" significa detectar errores lo antes posible. Si los datos son inválidos, es mejor lanzar el error antes de hacer cálculos costosos, escribir en BD o enviar emails.',
        incorrectFeedback: '"Fail Fast" es un principio de diseño: detecta los errores lo más pronto posible. Valida los parámetros al inicio de la función, antes de cualquier operación costosa. Así el traceback indica exactamente dónde está el problema.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module15: Module = {
  number: 15,
  title: 'Manejo avanzado de errores',
  level: 'intermedio',
  lessons: lessonsModule15,
}
