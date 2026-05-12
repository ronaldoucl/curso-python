import type { Lesson } from '@/types'

export const lessonsModule14: Lesson[] = [
  {
    slug: 'scope-local-global',
    title: 'Scope local y global',
    module: 'Scope y namespaces',
    moduleNumber: 14,
    order: 63,
    description: 'Aprende la diferencia entre variables locales y globales en Python.',
    explanation: `El **scope** (ámbito) determina desde dónde es visible una variable. Python usa la regla **LEGB** para buscar un nombre: Local → Enclosing → Global → Built-in.

**Scope local:**
Una variable definida dentro de una función solo existe dentro de ella. Desaparece cuando la función termina.
\`\`\`python
def saludar():
    mensaje = "Hola"   # Variable local
    print(mensaje)     # ✓ accesible aquí

saludar()
print(mensaje)  # ❌ NameError: 'mensaje' no definida
\`\`\`

**Scope global:**
Una variable definida fuera de cualquier función está en el scope global del módulo.
\`\`\`python
contador = 0   # Variable global

def mostrar():
    print(contador)  # ✓ puede leerla

mostrar()  # 0
\`\`\`

**Leer vs. modificar:**
Desde una función puedes **leer** variables globales sin problemas. Pero si intentas **modificar** (reasignar) una variable global sin declarar \`global\`, Python la trata como una nueva variable local:
\`\`\`python
x = 10

def cambiar():
    x = 20  # ← Crea una variable LOCAL llamada x, no modifica la global

cambiar()
print(x)  # 10 ← la global no cambió
\`\`\`

**La regla LEGB:**
1. **L**ocal: el scope de la función actual
2. **E**nclosing: scopes de funciones externas (en funciones anidadas)
3. **G**lobal: el módulo
4. **B**uilt-in: nombres predefinidos de Python (print, len, range…)`,
    codeExample: `# ── Scope local ─────────────────────────────────────────────
def calcular():
    resultado = 42    # local a calcular()
    return resultado

print(calcular())     # 42
# print(resultado)    # NameError: no existe fuera de la función

# ── Scope global (lectura) ───────────────────────────────────
TASA_IVA = 0.16   # global (convención: MAYÚSCULAS para constantes)

def calcular_precio_final(precio):
    return precio + precio * TASA_IVA   # lee TASA_IVA del scope global

print(calcular_precio_final(100))  # 116.0

# ── Reasignación: crea variable local, no modifica global ─────
total = 0

def agregar(valor):
    total = valor   # ← crea una variable local "total"
    return total    # devuelve la local

agregar(50)
print(total)   # 0 ← la global no cambió

# ── Regla LEGB en acción ─────────────────────────────────────
x = "global"

def externa():
    x = "enclosing"   # scope enclosing para interna()

    def interna():
        x = "local"   # scope local de interna
        print(x)      # "local" (L tiene prioridad)

    interna()
    print(x)   # "enclosing"

externa()
print(x)       # "global"

# ── Built-in scope ───────────────────────────────────────────
# print, len, range son nombres del scope Built-in
# Cuidado con "tapar" nombres built-in:
# list = []   ← ¡MALO! Ahora 'list' ya no es la función built-in`,
    keyPoints: [
      'Las variables locales existen solo dentro de la función donde se definen',
      'Las variables globales son visibles en todo el módulo, pero deben usarse con cuidado',
      'Puedes LEER variables globales desde una función sin problemas',
      'Si REASIGNAS una variable dentro de una función, Python crea una LOCAL — no modifica la global',
      'Regla LEGB: Python busca en Local → Enclosing → Global → Built-in',
      'Evita "tapar" nombres built-in (list, dict, print) con tus propias variables',
    ],
    exercise: {
      description: 'Predice la salida de este código antes de ejecutarlo:\n```python\nx = 1\ndef f():\n    x = 2\n    def g():\n        print(x)\n    g()\nf()\nprint(x)\n```\nExplica por qué `g()` imprime lo que imprime.',
      hint: 'La función `g` no tiene una `x` local. Sube al scope enclosing (`f`) donde encuentra `x = 2`.',
    },
    quiz: [
      {
        question: '¿Desde dónde es accesible una variable definida dentro de una función?',
        options: [
          'Desde todo el módulo',
          'Solo desde dentro de esa función',
          'Desde cualquier función del mismo archivo',
          'Desde cualquier archivo del proyecto',
        ],
        correctAnswer: 'Solo desde dentro de esa función',
        correctFeedback: 'Correcto. Una variable local tiene scope limitado a la función donde se define. Fuera de ella lanzaría NameError.',
        incorrectFeedback: 'Las variables locales solo existen dentro de la función donde se definen. Intentar acceder a ellas desde fuera de esa función produce un NameError.',
      },
      {
        question: '¿Qué imprime este código?\n```python\nn = 10\ndef f():\n    n = 20\nf()\nprint(n)\n```',
        options: ['20', '10', 'None', 'NameError'],
        correctAnswer: '10',
        correctFeedback: 'Correcto. `n = 20` dentro de `f` crea una variable local. La global `n = 10` no se modifica.',
        incorrectFeedback: 'Dentro de `f`, la asignación `n = 20` crea una variable LOCAL llamada `n`. La variable global `n = 10` permanece sin cambios. `print(n)` muestra la global: `10`.',
      },
      {
        question: '¿En qué orden busca Python un nombre según la regla LEGB?',
        options: [
          'Global → Local → Enclosing → Built-in',
          'Built-in → Global → Enclosing → Local',
          'Local → Enclosing → Global → Built-in',
          'Local → Global → Enclosing → Built-in',
        ],
        correctAnswer: 'Local → Enclosing → Global → Built-in',
        correctFeedback: 'Correcto. Python busca de lo más cercano (Local) a lo más lejano (Built-in).',
        incorrectFeedback: 'La regla LEGB define el orden: Local (scope actual) → Enclosing (funciones externas) → Global (módulo) → Built-in (Python predefinido). Siempre de lo más cercano a lo más lejano.',
      },
      {
        question: '¿Cuál de estos nombres pertenece al scope Built-in de Python?',
        options: ['mi_variable', 'CONSTANTE', 'print', 'resultado'],
        correctAnswer: 'print',
        correctFeedback: 'Correcto. `print`, `len`, `range`, `int`, `str`, etc. son nombres del scope Built-in: vienen con Python.',
        incorrectFeedback: '`print` (junto con `len`, `range`, `int`, `str`, `list`, etc.) pertenece al scope Built-in. Son nombres predefinidos que Python provee sin importar nada.',
      },
      {
        question: 'Una función puede leer una variable global sin problemas. ¿Verdadero o falso?',
        options: ['Verdadero', 'Falso, siempre necesita `global`', 'Solo si la global es un número', 'Solo si la función está en el mismo archivo'],
        correctAnswer: 'Verdadero',
        correctFeedback: 'Correcto. Leer una variable global es siempre posible. Solo se necesita la palabra clave `global` cuando se quiere REASIGNAR la variable global desde dentro de la función.',
        incorrectFeedback: 'Verdadero. Puedes leer variables globales libremente desde cualquier función. La palabra clave `global` solo es necesaria cuando quieres REASIGNAR (cambiar el valor de) la variable global desde dentro de la función.',
      },
      {
        question: '¿Qué pasa si defines una variable llamada `list` dentro de una función?',
        options: [
          'Python da un error automáticamente',
          'Dentro de esa función, `list` ya no se refiere a la función built-in',
          'No pasa nada, Python lo maneja automáticamente',
          'Se crea una segunda variable separada',
        ],
        correctAnswer: 'Dentro de esa función, `list` ya no se refiere a la función built-in',
        correctFeedback: 'Correcto. La variable local "tapa" el nombre built-in. Si luego intentas `list([1,2,3])` en esa función, obtendrás un error porque `list` ya es tu variable, no la función.',
        incorrectFeedback: 'Al crear una variable local con un nombre built-in como `list`, ese nombre queda "tapado" dentro de la función. `list` ya no apunta a la función incorporada sino a tu variable. Esto es un error sutil y difícil de detectar.',
      },
    ],
  },

  {
    slug: 'global-python',
    title: 'La palabra clave global',
    module: 'Scope y namespaces',
    moduleNumber: 14,
    order: 64,
    description: 'Aprende cómo funciona `global` y por qué debe usarse con cuidado.',
    explanation: `La palabra clave \`global\` permite que una función **modifique** (reasigne) una variable del scope global, no solo leerla.

**Uso:**
\`\`\`python
contador = 0

def incrementar():
    global contador       # ← declara que usará la global
    contador += 1         # ahora sí modifica la global

incrementar()
incrementar()
print(contador)  # 2
\`\`\`

Sin \`global\`, \`contador += 1\` fallaría con \`UnboundLocalError\` porque Python lo interpretaría como una variable local no inicializada.

**¿Por qué usar con cuidado?**
El estado global hace que las funciones sean difíciles de entender y testear. Si una función puede modificar cualquier variable global, debes seguir todo el flujo del programa para entender por qué cambió.

**Alternativas recomendadas:**

1. **Pasar el valor como argumento y devolver el nuevo valor:**
\`\`\`python
def incrementar(contador):
    return contador + 1

contador = 0
contador = incrementar(contador)
\`\`\`

2. **Usar una clase para encapsular estado:**
\`\`\`python
class Contador:
    def __init__(self):
        self.valor = 0
    def incrementar(self):
        self.valor += 1
\`\`\`

**Cuándo global es aceptable:**
- Constantes de configuración (aunque por convención no necesitan \`global\` si solo se leen)
- Scripts muy simples y cortos donde el estado compartido es obvio

En proyectos reales, las funciones puras (sin efectos secundarios) son la norma.`,
    codeExample: `# Problema sin global
intentos = 0

def registrar_intento():
    # intentos += 1  ← UnboundLocalError sin 'global'
    pass

# Solución con global
def registrar_intento_v2():
    global intentos
    intentos += 1

registrar_intento_v2()
registrar_intento_v2()
print(intentos)  # 2

# Problema con global: hace el código difícil de entender
datos_cache = {}

def cargar(clave):
    global datos_cache
    if clave not in datos_cache:
        datos_cache[clave] = f"valor_{clave}"   # simulamos carga
    return datos_cache[clave]

# ✅ Alternativa 1: pasar y devolver el valor (función pura)
def incrementar(valor):
    return valor + 1

n = 0
n = incrementar(n)
n = incrementar(n)
print(n)  # 2

# ✅ Alternativa 2: encapsular en clase
class Sesion:
    def __init__(self):
        self.intentos = 0
        self.activa = True

    def registrar_intento(self):
        self.intentos += 1

    def cerrar(self):
        self.activa = False

sesion = Sesion()
sesion.registrar_intento()
sesion.registrar_intento()
print(sesion.intentos)  # 2`,
    keyPoints: [
      '`global variable` dentro de una función permite reasignar esa variable del scope global',
      'Sin `global`, la asignación crea una variable local (no modifica la global)',
      'El estado global hace el código más difícil de entender, testear y depurar',
      'Alternativa preferida: pasar el valor como argumento y devolver el nuevo valor (función pura)',
      'Para estado compartido complejo, usa clases para encapsularlo',
      'Solo necesitas `global` para REASIGNAR; para leer no es necesario',
    ],
    exercise: {
      description: 'Reescribe esta función para que NO use `global`. La función debe recibir el estado actual y devolver el nuevo estado:\n```python\nregistros = []\ndef agregar_registro(mensaje):\n    global registros\n    registros.append(mensaje)\n    return len(registros)\n```',
      hint: 'La versión sin global recibe `registros` como parámetro y devuelve la lista modificada y el conteo.',
    },
    quiz: [
      {
        question: '¿Qué lanza Python si intentas `x += 1` dentro de una función donde `x` es global, sin declarar `global x`?',
        options: ['SyntaxError', 'UnboundLocalError', 'TypeError', 'AttributeError'],
        correctAnswer: 'UnboundLocalError',
        correctFeedback: 'Correcto. Python ve `x += 1` como `x = x + 1`, interpreta que `x` será local, pero como no fue asignada antes en la función, lanza UnboundLocalError al intentar leer su valor.',
        incorrectFeedback: '`x += 1` es equivalente a `x = x + 1`. Python nota la asignación y trata `x` como local. Pero al ejecutar el lado derecho (`x + 1`), la variable local aún no existe → UnboundLocalError.',
      },
      {
        question: '¿Para qué sirve declarar `global x` dentro de una función?',
        options: [
          'Para crear una nueva variable global llamada x',
          'Para poder modificar (reasignar) la variable global x desde la función',
          'Para leer la variable global x',
          'Para eliminar la variable global x',
        ],
        correctAnswer: 'Para poder modificar (reasignar) la variable global x desde la función',
        correctFeedback: 'Correcto. `global x` le dice a Python que cuando vea `x` dentro de la función, se refiere a la variable global, no a una local nueva.',
        incorrectFeedback: 'No necesitas `global` para LEER una variable global. Solo lo necesitas para MODIFICAR (reasignar) la variable global desde dentro de una función.',
      },
      {
        question: '¿Cuál es el problema principal de las variables globales mutables?',
        options: [
          'Son más lentas que las locales',
          'Hacen el código difícil de entender, testear y depurar porque cualquier función puede cambiarlas',
          'Python las borra automáticamente después de usarlas',
          'No se pueden usar con números enteros',
        ],
        correctAnswer: 'Hacen el código difícil de entender, testear y depurar porque cualquier función puede cambiarlas',
        correctFeedback: 'Correcto. El estado global compartido crea dependencias invisibles entre funciones, lo que hace muy difícil razonar sobre el estado del programa.',
        incorrectFeedback: 'El problema del estado global es que crea acoplamiento invisible: cualquier función puede modificar la variable, y para entender por qué tiene cierto valor necesitas rastrear todas las funciones que la modifican.',
      },
      {
        question: '¿Cuál es la alternativa más recomendada para evitar `global`?',
        options: [
          'Usar variables de entorno del sistema operativo',
          'Pasar el valor como argumento y devolver el nuevo valor (función pura)',
          'Usar `global` pero con nombres descriptivos',
          'Definir las variables dentro del bucle principal',
        ],
        correctAnswer: 'Pasar el valor como argumento y devolver el nuevo valor (función pura)',
        correctFeedback: 'Correcto. Las funciones puras son predecibles, testeables y sin efectos secundarios: reciben todo lo que necesitan como argumentos y devuelven el resultado.',
        incorrectFeedback: 'La mejor práctica es escribir funciones puras: reciben el estado como argumento y devuelven el nuevo estado. Esto las hace testeables, predecibles y sin dependencias ocultas.',
      },
      {
        question: '¿Qué imprime este código?\n```python\nx = 5\ndef f():\n    global x\n    x = x * 2\nf()\nprint(x)\n```',
        options: ['5', '10', '25', 'UnboundLocalError'],
        correctAnswer: '10',
        correctFeedback: 'Correcto. `global x` permite modificar la global. `x = 5 * 2 = 10`. La global ahora vale 10.',
        incorrectFeedback: 'Con `global x`, la función puede modificar la variable global. `x = x * 2` = `5 * 2 = 10`. Después de `f()`, la variable global `x` vale `10`.',
      },
      {
        question: '¿Cuándo es aceptable usar `global` en la práctica?',
        options: [
          'Nunca, siempre es un error',
          'En scripts muy simples o para constantes de configuración que raramente cambian',
          'Siempre que la variable sea un número',
          'Solo en proyectos de más de 1000 líneas',
        ],
        correctAnswer: 'En scripts muy simples o para constantes de configuración que raramente cambian',
        correctFeedback: 'Correcto. En scripts pequeños o para constantes de módulo, global puede ser razonable. En proyectos medianos y grandes, es preferible encapsular el estado en clases o pasarlo como argumento.',
        incorrectFeedback: '`global` no es intrínsecamente malo, pero su uso debe ser cuidadoso. En scripts simples o para variables de configuración estables, puede ser aceptable. En proyectos complejos, crea problemas de mantenimiento.',
      },
    ],
  },

  {
    slug: 'nonlocal-python',
    title: 'La palabra clave nonlocal',
    module: 'Scope y namespaces',
    moduleNumber: 14,
    order: 65,
    description: 'Aprende cómo modificar variables de una función externa usando nonlocal.',
    explanation: `\`nonlocal\` es similar a \`global\`, pero en lugar de apuntar al scope global, apunta al **scope enclosing** más cercano (la función que contiene a la función actual).

Se usa exclusivamente en **funciones anidadas** cuando necesitas modificar una variable de la función externa.

**Ejemplo:**
\`\`\`python
def crear_contador():
    cuenta = 0              # variable del scope enclosing

    def incrementar():
        nonlocal cuenta     # apunta a 'cuenta' de crear_contador
        cuenta += 1
        return cuenta

    return incrementar

contador = crear_contador()
print(contador())  # 1
print(contador())  # 2
print(contador())  # 3
\`\`\`

**¿Por qué no simplemente usar una lista?**
Una solución común sin \`nonlocal\` es usar una lista mutable (porque modificar su contenido no es reasignación):
\`\`\`python
def crear_contador():
    cuenta = [0]          # lista mutable como "envoltorio"

    def incrementar():
        cuenta[0] += 1    # modifica el contenido, no reasigna
        return cuenta[0]

    return incrementar
\`\`\`

Ambas funciona, pero \`nonlocal\` es más explícita y clara.

**Diferencia entre global y nonlocal:**
- \`global\` → va al scope del módulo (nivel más alto)
- \`nonlocal\` → va al scope enclosing más cercano (función exterior inmediata)

**¿Cuándo usar nonlocal?**
Principalmente al implementar clausuras con estado: contadores, acumuladores, generadores de IDs, etc.`,
    codeExample: `# Clausura con nonlocal: contador
def crear_contador(inicio=0, paso=1):
    valor = inicio

    def avanzar():
        nonlocal valor
        valor += paso
        return valor

    def retroceder():
        nonlocal valor
        valor -= paso
        return valor

    def resetear():
        nonlocal valor
        valor = inicio
        return valor

    return avanzar, retroceder, resetear

avanzar, retroceder, resetear = crear_contador(inicio=10, paso=5)
print(avanzar())    # 15
print(avanzar())    # 20
print(retroceder()) # 15
print(resetear())   # 10
print(avanzar())    # 15

# Clausura para generar IDs únicos
def crear_generador_id(prefijo="ID"):
    siguiente = [1]   # alternativa sin nonlocal (lista mutable)

    def siguiente_id():
        id_actual = f"{prefijo}-{siguiente[0]:04d}"
        siguiente[0] += 1
        return id_actual

    return siguiente_id

generar = crear_generador_id("USR")
print(generar())  # USR-0001
print(generar())  # USR-0002
print(generar())  # USR-0003

# Diferencia global vs nonlocal
x = "global"

def externa():
    x = "enclosing"

    def interna():
        nonlocal x
        x = "modificado por interna"   # cambia x de externa, no la global

    interna()
    print(x)   # "modificado por interna"

externa()
print(x)       # "global" ← la global no cambió`,
    keyPoints: [
      '`nonlocal` permite modificar variables del scope enclosing (función externa), no del global',
      'Solo se puede usar en funciones anidadas — fuera de ellas, daría SyntaxError',
      '`global` apunta al módulo; `nonlocal` apunta a la función exterior inmediata',
      'Alternativa sin nonlocal: usar una lista mutable como "envoltorio" (menos clara)',
      'Útil para implementar clausuras con estado: contadores, acumuladores, generadores de IDs',
      'Como `global`, úsalo solo cuando realmente necesitas modificar el estado externo',
    ],
    exercise: {
      description: 'Implementa `crear_limite(maximo)` que devuelva una función `agregar(valor)`. Cada llamada a `agregar` debe sumar `valor` a un acumulador interno. Si la suma supera `maximo`, debe imprimir "¡Límite alcanzado!" y no agregar. Devuelve el acumulador actual.',
      hint: 'Usa `nonlocal` para modificar el acumulador interno desde la función `agregar`.',
    },
    quiz: [
      {
        question: '¿Para qué se usa `nonlocal`?',
        options: [
          'Para acceder a variables globales desde una función',
          'Para modificar variables del scope de la función externa (enclosing)',
          'Para importar variables de otro módulo',
          'Para crear variables locales inmutables',
        ],
        correctAnswer: 'Para modificar variables del scope de la función externa (enclosing)',
        correctFeedback: 'Correcto. `nonlocal` permite a una función interna modificar (reasignar) variables de la función que la contiene.',
        incorrectFeedback: '`nonlocal` no afecta al scope global. Solo permite modificar variables del scope enclosing — la función que contiene directamente a la función actual.',
      },
      {
        question: '¿Qué diferencia a `nonlocal` de `global`?',
        options: [
          '`nonlocal` apunta al scope del módulo; `global` al scope de la función exterior',
          '`global` apunta al scope del módulo; `nonlocal` al scope enclosing (función exterior)',
          'Son idénticos, hacen lo mismo',
          '`nonlocal` solo funciona con números; `global` con cualquier tipo',
        ],
        correctAnswer: '`global` apunta al scope del módulo; `nonlocal` al scope enclosing (función exterior)',
        correctFeedback: 'Correcto. `global` va al nivel del módulo (el más alto). `nonlocal` va a la función exterior inmediata.',
        incorrectFeedback: 'La diferencia es el scope objetivo: `global` va al nivel del módulo (el scope más externo). `nonlocal` va al scope enclosing más cercano, que es la función que contiene a la función actual.',
      },
      {
        question: '¿Dónde es válido usar `nonlocal`?',
        options: [
          'En cualquier función del módulo',
          'Solo en funciones anidadas (funciones definidas dentro de otras funciones)',
          'Solo en métodos de clase',
          'En cualquier parte del archivo',
        ],
        correctAnswer: 'Solo en funciones anidadas (funciones definidas dentro de otras funciones)',
        correctFeedback: 'Correcto. `nonlocal` solo tiene sentido en una función interna. Usarlo en una función de nivel de módulo daría SyntaxError.',
        incorrectFeedback: '`nonlocal` solo es válido dentro de funciones anidadas. Si lo usas en una función de nivel de módulo (sin función exterior), Python lanzará un SyntaxError.',
      },
      {
        question: '¿Qué imprime este código?\n```python\ndef f():\n    n = 0\n    def g():\n        nonlocal n\n        n += 10\n    g()\n    g()\n    print(n)\nf()\n```',
        options: ['0', '10', '20', 'UnboundLocalError'],
        correctAnswer: '20',
        correctFeedback: 'Correcto. `nonlocal n` permite a `g` modificar `n` de `f`. Dos llamadas suman 10+10=20.',
        incorrectFeedback: '`nonlocal n` hace que `g` modifique la `n` de `f`. Primera llamada: `n = 0 + 10 = 10`. Segunda: `n = 10 + 10 = 20`. Al final `f` imprime `20`.',
      },
      {
        question: '¿Cuál es la alternativa más común a `nonlocal` para mantener estado en clausuras?',
        options: [
          'Usar una variable global',
          'Usar una lista mutable como envoltorio [valor]',
          'Usar `return` con múltiples valores',
          'Usar archivos de texto para guardar el estado',
        ],
        correctAnswer: 'Usar una lista mutable como envoltorio [valor]',
        correctFeedback: 'Correcto. `cuenta = [0]` y `cuenta[0] += 1` modifica el contenido de la lista (no la reasigna), por lo que no necesita `nonlocal`.',
        incorrectFeedback: 'Una técnica común antes de `nonlocal` era usar `[valor]` como envoltorio. `cuenta[0] += 1` modifica el objeto lista en lugar de reasignar la variable, así que funciona sin `nonlocal`. Hoy, `nonlocal` es más claro.',
      },
    ],
  },

  {
    slug: 'namespaces-python',
    title: 'Namespaces en Python',
    module: 'Scope y namespaces',
    moduleNumber: 14,
    order: 66,
    description: 'Aprende qué son los namespaces y cómo Python organiza los nombres de variables, funciones y objetos.',
    explanation: `Un **namespace** es una colección de nombres (variables, funciones, clases) y los objetos a los que apuntan. Piénsalo como un diccionario donde las claves son los nombres y los valores son los objetos.

**Tipos de namespaces en Python:**

1. **Built-in**: creado al iniciar Python; contiene \`print\`, \`len\`, \`range\`, excepciones, etc.
2. **Global (de módulo)**: creado al importar o ejecutar un módulo; contiene las definiciones del módulo.
3. **Local (de función)**: creado al llamar una función; destruido cuando la función retorna.
4. **Enclosing**: scope de funciones externas en funciones anidadas.

**Los namespaces como diccionarios:**
\`\`\`python
x = 10
def f(): pass

# El namespace global es accesible con:
print(globals())   # {'x': 10, 'f': <function>, '__name__': '__main__', ...}

# El namespace local dentro de una función:
def mostrar_locals():
    a = 1
    b = 2
    print(locals())   # {'a': 1, 'b': 2}
\`\`\`

**¿Por qué importa entender namespaces?**
- Cuando importas un módulo, accedes a su namespace: \`math.sqrt\` → namespace de \`math\`
- Los atributos de un objeto también son su propio namespace: \`persona.nombre\`
- Los errores \`NameError\` ocurren cuando Python no encuentra un nombre en ningún namespace de la cadena LEGB

**Colisiones de nombres:**
Si tienes un nombre local igual a uno global, el local tiene prioridad (lo "tapa"):
\`\`\`python
len = 5           # tapa el built-in len
print(len("hola"))  # TypeError: 'int' object is not callable
del len           # restaura el built-in
\`\`\``,
    codeExample: `# Ver el namespace global
x = 42
nombre = "Python"

def saludar():
    pass

print("Variables en namespace global:")
for clave, valor in globals().items():
    if not clave.startswith('__'):
        print(f"  {clave}: {valor!r}")

# Namespace local de una función
def demo_locals():
    a = 10
    b = 20
    c = a + b
    print("\\nNamespace local de demo_locals:")
    print(locals())   # {'a': 10, 'b': 20, 'c': 30}

demo_locals()

# Acceder a namespace de módulo importado
import math
print("\\nAtributos de math (muestra):")
print([n for n in dir(math) if not n.startswith('_')][:5])
# El namespace de 'math' contiene 'sqrt', 'pi', 'cos', etc.

# Namespaces y objetos
class Persona:
    especie = "humano"   # namespace de clase

    def __init__(self, nombre):
        self.nombre = nombre   # namespace de instancia

ana = Persona("Ana")
print("\\nNamespace de instancia:", ana.__dict__)
print("Namespace de clase:", Persona.__dict__.keys())

# Peligro: tapar nombres built-in
# len = 5
# len("hola")  # TypeError!
# del len       # restaura built-in

# Verificar si un nombre existe en el scope actual
variable_existe = 'x' in dir()
print("\\n¿x existe en el scope?", variable_existe)`,
    keyPoints: [
      'Un namespace es un mapeo de nombres a objetos (funciona como un diccionario)',
      'Python tiene 4 niveles: Built-in, Global, Enclosing y Local (LEGB)',
      '`globals()` devuelve el namespace global como dict; `locals()` el namespace local',
      'Los atributos de módulos y objetos también son namespaces',
      'El namespace local se crea al llamar una función y se destruye cuando retorna',
      'Evita tapar (shadowing) nombres built-in o globales con variables locales del mismo nombre',
    ],
    exercise: {
      description: 'Escribe una función `inspeccionar(funcion, *args)` que llame a `funcion(*args)` y luego imprima cuántas variables locales creó. Usa `locals()` dentro de la función a inspeccionar, o mejor: llama a la función y observa su comportamiento con la instrucción en la función misma.',
      hint: 'Crea una función de prueba que tenga varias variables locales y dentro llame a `len(locals())` para contarlas.',
    },
    quiz: [
      {
        question: '¿Qué es un namespace en Python?',
        options: [
          'Un archivo de configuración de nombres de variables',
          'Un mapeo de nombres a objetos, similar a un diccionario',
          'Un tipo especial de lista',
          'Una carpeta de módulos',
        ],
        correctAnswer: 'Un mapeo de nombres a objetos, similar a un diccionario',
        correctFeedback: 'Correcto. Un namespace es esencialmente un diccionario donde las claves son nombres (strings) y los valores son los objetos a los que apuntan.',
        incorrectFeedback: 'Un namespace es un diccionario de nombres→objetos. De hecho, `globals()` y `locals()` devuelven el namespace como un dict real que puedes inspeccionar.',
      },
      {
        question: '¿Qué devuelve `globals()` dentro de un módulo?',
        options: [
          'El namespace local de la función actual',
          'El namespace global del módulo actual como diccionario',
          'Los nombres built-in de Python',
          'Las variables de todos los módulos importados',
        ],
        correctAnswer: 'El namespace global del módulo actual como diccionario',
        correctFeedback: 'Correcto. `globals()` devuelve el namespace global del módulo como un diccionario editable.',
        incorrectFeedback: '`globals()` devuelve el namespace global del módulo actual: todas las variables, funciones y clases definidas a nivel de módulo, más algunas variables especiales como `__name__`.',
      },
      {
        question: '¿Cuándo se destruye el namespace local de una función?',
        options: [
          'Cuando el programa termina',
          'Cuando la función retorna (termina su ejecución)',
          'Cuando la variable se asigna por primera vez',
          'Nunca, persiste entre llamadas',
        ],
        correctAnswer: 'Cuando la función retorna (termina su ejecución)',
        correctFeedback: 'Correcto. El namespace local es temporal: se crea cuando se llama a la función y se destruye cuando retorna.',
        incorrectFeedback: 'El namespace local de una función existe solo durante su ejecución. Se crea al llamar la función y se destruye cuando retorna. Por eso las variables locales no persisten entre llamadas.',
      },
      {
        question: '¿Cómo se accede al namespace (atributos) de un módulo llamado `math`?',
        options: [
          'math["pi"]',
          'math.pi',
          'global.math.pi',
          'namespace(math).pi',
        ],
        correctAnswer: 'math.pi',
        correctFeedback: 'Correcto. La sintaxis de punto accede al namespace del módulo: `math.pi`, `math.sqrt`, etc.',
        incorrectFeedback: 'La notación de punto (`math.pi`) accede al namespace del módulo `math`. También puedes verlo con `math.__dict__["pi"]` o `vars(math)["pi"]`, pero la notación de punto es la estándar.',
      },
      {
        question: '¿Qué pasa si defines `list = [1, 2, 3]` en el scope global?',
        options: [
          'Error inmediato',
          'La variable global `list` tapa la función built-in `list` en ese módulo',
          'Python los separa automáticamente',
          'Solo afecta a funciones que usen `global list`',
        ],
        correctAnswer: 'La variable global `list` tapa la función built-in `list` en ese módulo',
        correctFeedback: 'Correcto. El namespace global tiene prioridad sobre el built-in. Después de `list = [1,2,3]`, `list(range(3))` fallaría porque `list` ya no es la función.',
        incorrectFeedback: 'El namespace global tiene prioridad sobre el built-in (LEGB: G antes de B). Si defines `list = algo` en el scope global, la función built-in `list` ya no es accesible por ese nombre en ese módulo.',
      },
    ],
  },

  {
    slug: 'errores-scope',
    title: 'Errores comunes con scope',
    module: 'Scope y namespaces',
    moduleNumber: 14,
    order: 67,
    description: 'Aprende a identificar errores relacionados con variables fuera de alcance y cómo solucionarlos.',
    explanation: `Los errores de scope son muy frecuentes en Python, incluso entre programadores con experiencia. Conocerlos te ayudará a resolverlos rápidamente.

**Error 1: UnboundLocalError**
\`\`\`python
x = 10
def f():
    print(x)   # UnboundLocalError!
    x = 20

f()
\`\`\`
Python ve que hay una asignación \`x = 20\` en \`f\`, así que trata \`x\` como local en toda la función. Cuando el \`print(x)\` se ejecuta, la local aún no fue asignada.

**Solución:** leer antes de asignar, o usar \`global\`/\`nonlocal\` si realmente necesitas modificar.

**Error 2: Usar variable de bucle fuera del bucle**
\`\`\`python
for i in range(5):
    pass
print(i)   # Funciona en Python, imprime 4 — pero es mala práctica
\`\`\`
En Python (a diferencia de muchos lenguajes), las variables de bucle persisten. Pero no dependas de esto: es poco claro.

**Error 3: Tapar una función built-in**
\`\`\`python
list = [1, 2, 3]   # ← Ahora 'list' ya no es la función
lista = list(range(5))   # TypeError: 'list' object is not callable
\`\`\`

**Error 4: Modificar un objeto mutable vs reasignar**
\`\`\`python
lista = [1, 2, 3]

def agregar(x):
    lista.append(x)   # ✓ Modifica el objeto (sin necesitar global)
    # lista = []       # ✗ Esto requeriría global (es reasignación)

agregar(4)
print(lista)   # [1, 2, 3, 4]
\`\`\`

Modificar el contenido de un objeto mutable (append, update) no es reasignación, así que no necesita \`global\`.`,
    codeExample: `# ── Error 1: UnboundLocalError ──────────────────────────────
total = 100

def descuento():
    # print(total)   # ← UnboundLocalError porque hay asignación abajo
    total = total * 0.9   # Python cree que total es LOCAL
    return total

# Solución A: no reasignar (usar variable nueva)
def descuento_v2():
    nuevo_total = total * 0.9   # 'total' solo se lee, ok
    return nuevo_total

print(descuento_v2())   # 90.0

# Solución B: pasar como argumento (mejor práctica)
def descuento_v3(precio):
    return precio * 0.9

print(descuento_v3(total))   # 90.0

# ── Error 2: Tapar built-in ──────────────────────────────────
# NO hagas esto:
# list = [1, 2, 3]  ← tapa la función built-in list
# len = 0           ← tapa la función built-in len
# input = "dato"    ← tapa la función built-in input

# Usa nombres descriptivos:
numeros_pares = [2, 4, 6]   # ✓
longitud_maxima = 10         # ✓

# ── Error 3: Variable de bucle fuera del bucle ───────────────
# En Python, la variable del for persiste (pero no dependas de ello)
for idx in range(5):
    ultimo = idx

print(ultimo)   # 4 ← funciona, pero es poco claro
# Mejor: asigna explícitamente lo que necesitas
lista_nums = list(range(5))
ultimo_valor = lista_nums[-1]
print(ultimo_valor)   # 4

# ── Modificar objeto mutable vs reasignar ────────────────────
historial = []

def registrar(evento):
    historial.append(evento)   # ✓ Modifica el objeto — no necesita global

def limpiar():
    global historial
    historial = []             # ✗ Reasignación — necesita global

registrar("login")
registrar("compra")
print(historial)   # ['login', 'compra']`,
    keyPoints: [
      '`UnboundLocalError` ocurre cuando Python ve una asignación local pero la variable se usa antes de asignarse',
      'La solución habitual es pasar el valor como argumento o no reasignar la variable global',
      'Nunca uses nombres built-in (list, len, print, input) como nombres de variables',
      'Las variables de bucle `for` persisten después del bucle en Python — no dependas de esto',
      'Modificar el contenido de un objeto mutable (append, update) NO es reasignación — no necesita `global`',
      'Reasignar una variable (nueva = valor) SÍ necesita `global` si es global',
    ],
    exercise: {
      description: 'El siguiente código tiene un error. Identifícalo y corrígelo sin usar `global`:\n```python\npuntos = 0\ndef ganar_puntos(cantidad):\n    print(f"Puntos actuales: {puntos}")\n    puntos = puntos + cantidad\n    return puntos\n```',
      hint: 'El problema es que `puntos = puntos + cantidad` hace que Python trate `puntos` como local, pero se intenta leer antes de asignar. Solución: pasa `puntos` como argumento.',
    },
    quiz: [
      {
        question: '¿Por qué ocurre `UnboundLocalError` en este código?\n```python\nx = 5\ndef f():\n    print(x)\n    x = 10\nf()\n```',
        options: [
          'Porque `x` no está definida globalmente',
          'Porque Python ve la asignación `x = 10` y trata `x` como local, pero se usa antes de asignarse',
          'Porque no se puede imprimir antes de asignar en ningún caso',
          'Porque el nombre `x` está reservado',
        ],
        correctAnswer: 'Porque Python ve la asignación `x = 10` y trata `x` como local, pero se usa antes de asignarse',
        correctFeedback: 'Correcto. Python analiza toda la función antes de ejecutarla. Ve `x = 10` y decide que `x` es local. Cuando ejecuta `print(x)`, la local `x` aún no fue asignada.',
        incorrectFeedback: 'Python analiza la función completa antes de ejecutarla. Encuentra `x = 10`, lo que hace que `x` sea tratada como variable local en toda la función. Cuando `print(x)` se ejecuta, la variable local aún no tiene valor → UnboundLocalError.',
      },
      {
        question: '¿Cuál de estas opciones soluciona el UnboundLocalError sin usar `global`?',
        options: [
          'def f():\n    global x\n    print(x)\n    x = 10',
          'def f(x):\n    print(x)\n    x = x + 10\n    return x',
          'def f():\n    print(x)\n    del x',
          'def f():\n    x = x or 0\n    print(x)',
        ],
        correctAnswer: 'def f(x):\n    print(x)\n    x = x + 10\n    return x',
        correctFeedback: 'Correcto. Pasar `x` como argumento elimina la dependencia del scope global y hace la función predecible y testeable.',
        incorrectFeedback: 'La mejor solución es pasar `x` como parámetro. La función recibe todo lo que necesita, no depende del estado externo, y es más fácil de testear.',
      },
      {
        question: '¿Qué produce `list = [1, 2, 3]; print(list(range(3)))`?',
        options: [
          '[0, 1, 2]',
          'TypeError: "list" object is not callable',
          '[1, 2, 3, 0, 1, 2]',
          'SyntaxError',
        ],
        correctAnswer: 'TypeError: "list" object is not callable',
        correctFeedback: 'Correcto. Al asignar `list = [1, 2, 3]`, la función built-in `list` queda tapada. Luego `list(range(3))` intenta llamar a la lista, no a la función.',
        incorrectFeedback: 'Después de `list = [1, 2, 3]`, el nombre `list` en ese scope apunta a una lista (objeto), no a la función built-in. Intentar llamarla como función produce TypeError.',
      },
      {
        question: '¿Necesita `global` esta función?\n```python\ncache = {}\ndef guardar(clave, valor):\n    cache[clave] = valor\n```',
        options: [
          'Sí, siempre que se use una variable global',
          'No, porque `cache[clave] = valor` modifica el contenido del dict, no reasigna `cache`',
          'Solo si `cache` se declara como global primero',
          'Sí, pero solo en Python 3',
        ],
        correctAnswer: 'No, porque `cache[clave] = valor` modifica el contenido del dict, no reasigna `cache`',
        correctFeedback: 'Correcto. Modificar el contenido de un objeto mutable (dict, lista) no es reasignación. Solo necesitarías `global cache` si hicieras `cache = {}` dentro de la función.',
        incorrectFeedback: 'La distinción clave: `cache[clave] = valor` modifica el CONTENIDO del diccionario (operación in-place), no reasigna la variable `cache`. Python no crea una variable local. Solo necesitas `global` cuando reasignas: `cache = nuevo_dict`.',
      },
      {
        question: '¿Qué nombre de variable es un error común de scope difícil de detectar?',
        options: [
          'mi_lista_de_numeros',
          'input',
          'resultado_final',
          'precio_con_iva',
        ],
        correctAnswer: 'input',
        correctFeedback: 'Correcto. Usar `input` como nombre de variable tapa la función built-in `input()`. El error no es inmediato — aparece cuando intentas usar `input()` más adelante.',
        incorrectFeedback: '`input` es una función built-in. Si la usas como nombre de variable, tapas el built-in. El bug no es inmediato: solo falla cuando intentas usar `input()` más adelante, y el mensaje de error puede confundir.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module14: Module = {
  number: 14,
  title: 'Scope y namespaces',
  level: 'intermedio',
  lessons: lessonsModule14,
}
