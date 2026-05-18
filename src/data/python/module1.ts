import type { Lesson } from '@/types'
import type { Module } from '@/types'

export const lessonsModule1: Lesson[] = [
  {
    slug: 'que-es-python',
    title: '¿Qué es Python?',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 1,
    description: 'Descubre qué es Python, para qué se usa y por qué es uno de los mejores lenguajes para empezar a programar.',
    explanation: `Python es un **lenguaje de programación**. Así como el español o el inglés son idiomas que usamos para comunicarnos con otras personas, Python es un idioma que usamos para darle instrucciones a una computadora.

Fue creado en **1991 por Guido van Rossum**, un programador holandés que quería un lenguaje fácil de leer y escribir. El nombre "Python" no viene de la serpiente, sino del programa de comedia británico *Monty Python's Flying Circus*, que era fanático del autor.

**¿Para qué se usa Python?**

Python es uno de los lenguajes más versátiles del mundo. Se usa en:

- **Desarrollo web:** empresas como Instagram y Pinterest fueron construidas con Python.
- **Ciencia de datos e inteligencia artificial:** Netflix, Spotify y empresas de investigación usan Python para analizar millones de datos.
- **Automatización:** puedes escribir programas que hagan tareas repetitivas por ti (renombrar archivos, enviar correos, llenar formularios).
- **Videojuegos:** algunos juegos simples y herramientas de desarrollo se crean con Python.
- **Educación:** es el lenguaje más enseñado en universidades y bootcamps del mundo.

**¿Por qué aprender Python?**

1. **Sintaxis simple:** el código Python se parece mucho al inglés cotidiano. No necesitas escribir muchos símbolos raros para hacer cosas básicas.
2. **Muy demandado:** según Stack Overflow, Python es uno de los lenguajes más populares y buscados por empresas año tras año.
3. **Comunidad gigante:** hay millones de programadores Python en todo el mundo. Si tienes una duda, ya alguien la respondió en internet.
4. **Gratuito y de código abierto:** no cuesta nada instalarlo ni usarlo.

**¿Cómo funciona Python?**

Python es un lenguaje **interpretado**. Imagina que tienes un libro en japonés y un intérprete que lo va traduciendo oración por oración para que puedas entenderlo al instante. Python funciona igual: el intérprete de Python lee tu código línea por línea y lo ejecuta de inmediato, sin necesidad de traducirlo todo primero a otro formato.

Esto lo diferencia de lenguajes como C o Java, donde primero tienes que "compilar" (traducir) todo el código antes de poder ejecutarlo.

**Errores comunes:**

- **"Necesito ser bueno en matemáticas para programar"** — Falso. La mayoría del tiempo usarás sumas, restas y comparaciones simples. Las matemáticas avanzadas solo aparecen en áreas específicas como ciencia de datos.
- **"Python es solo para expertos"** — Todo lo contrario. Python fue diseñado específicamente para que sea fácil de aprender desde cero. Muchas universidades lo usan como primer lenguaje de programación.
- **"Tengo que memorizar todo"** — No. Hasta los programadores con años de experiencia consultan la documentación constantemente. Lo importante es entender los conceptos, no memorizar sintaxis.`,
    codeExample: `# Este es un comentario. Python lo ignora al ejecutar el código.
# Los comentarios sirven para explicar qué hace el código.

# La función print() muestra texto en la pantalla
print("¡Hola, mundo!")

# También puedes imprimir números
print(42)
print(3.14)

# Y puedes imprimir texto y números juntos
print("Python fue creado en el año", 1991)

# Python puede hacer cálculos matemáticos
print(10 + 5)    # Suma → 15
print(100 - 37)  # Resta → 63
print(6 * 7)     # Multiplicación → 42
print(15 / 3)    # División → 5.0

# ¡Así de simple es empezar con Python!`,
    keyPoints: [
      'Python es un lenguaje de programación creado en 1991 por Guido van Rossum.',
      'Se usa en desarrollo web, inteligencia artificial, automatización, análisis de datos y más.',
      'Su sintaxis es simple y cercana al inglés cotidiano, ideal para principiantes.',
      'Es un lenguaje interpretado: ejecuta el código línea por línea de inmediato.',
      'No necesitas ser experto en matemáticas ni tener experiencia previa para aprender Python.',
      'Es gratuito, de código abierto y tiene una de las comunidades más grandes del mundo.',
    ],
    exercise: {
      description: 'Investiga en internet: ¿para qué usan Python tres empresas famosas? Por ejemplo, busca "¿cómo usa Python Netflix?" o "Python en Google". Escribe en tus propias palabras qué hace cada empresa con Python.',
      hint: 'Empresas interesantes para investigar: Google, Instagram, NASA, Spotify, YouTube, Dropbox o Netflix. Busca en español o inglés: "cómo usa [empresa] Python".',
    },
    quiz: [
      {
        question: '¿Quién creó Python y en qué año?',
        options: [
          'Bill Gates en 1985',
          'Guido van Rossum en 1991',
          'Linus Torvalds en 2000',
          'Mark Zuckerberg en 2004',
        ],
        correctAnswer: 'Guido van Rossum en 1991',
        correctFeedback: '¡Correcto! Guido van Rossum creó Python en 1991 buscando un lenguaje fácil de leer y escribir.',
        incorrectFeedback: 'No es correcto. Python fue creado por Guido van Rossum en 1991, un programador holandés que quería un lenguaje simple y elegante.',
      },
      {
        question: '¿Cuál de estas opciones NO es un uso común de Python?',
        options: [
          'Inteligencia artificial y ciencia de datos',
          'Diseño de chips de hardware',
          'Automatización de tareas repetitivas',
          'Desarrollo de sitios web',
        ],
        correctAnswer: 'Diseño de chips de hardware',
        correctFeedback: '¡Correcto! El diseño de chips de hardware se hace con lenguajes especializados como VHDL o Verilog, no con Python.',
        incorrectFeedback: 'No es correcto. El diseño de chips de hardware usa lenguajes especializados, no Python. Python sí se usa ampliamente en IA, automatización y desarrollo web.',
      },
      {
        question: '¿Qué significa que Python sea un lenguaje "interpretado"?',
        options: [
          'Que solo puede usarse con un intérprete de idiomas',
          'Que el código se traduce y ejecuta línea por línea de inmediato',
          'Que primero debes compilar todo el código antes de ejecutarlo',
          'Que solo funciona en inglés',
        ],
        correctAnswer: 'Que el código se traduce y ejecuta línea por línea de inmediato',
        correctFeedback: '¡Correcto! En Python no necesitas compilar todo el código primero. El intérprete lo lee y ejecuta línea por línea al instante.',
        incorrectFeedback: 'No es correcto. Un lenguaje interpretado ejecuta el código línea por línea de inmediato, sin necesidad de compilar todo primero.',
      },
      {
        question: '¿Qué hace esta línea de código Python?\n\nprint("¡Hola, mundo!")',
        options: [
          'Guarda el texto "¡Hola, mundo!" en un archivo',
          'Muestra el texto "¡Hola, mundo!" en la pantalla',
          'Borra el texto "¡Hola, mundo!" de la memoria',
          'Envía el texto "¡Hola, mundo!" por correo',
        ],
        correctAnswer: 'Muestra el texto "¡Hola, mundo!" en la pantalla',
        correctFeedback: '¡Correcto! La función print() muestra texto (u otros valores) en la pantalla.',
        incorrectFeedback: 'No es correcto. La función print() muestra el texto en la pantalla. Es una de las funciones más básicas y usadas en Python.',
      },
      {
        question: '¿Cuál de estas afirmaciones sobre Python es FALSA?',
        options: [
          'Python es gratuito y de código abierto',
          'Necesitas ser experto en matemáticas avanzadas para usar Python',
          'Python tiene una comunidad de millones de programadores',
          'Python se puede usar para inteligencia artificial',
        ],
        correctAnswer: 'Necesitas ser experto en matemáticas avanzadas para usar Python',
        correctFeedback: '¡Correcto! Esa afirmación es falsa. No necesitas matemáticas avanzadas para programar en Python. La mayoría de las tareas solo requieren operaciones básicas.',
        incorrectFeedback: 'No es correcto. La afirmación falsa es que necesitas ser experto en matemáticas. Python está diseñado para ser accesible a todo el mundo, con o sin conocimientos matemáticos avanzados.',
      },
    ],
  },
  {
    slug: 'que-es-programar',
    title: '¿Qué es programar?',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 2,
    description: 'Aprende de forma simple qué significa programar y cómo una computadora sigue instrucciones paso a paso.',
    explanation: `**Programar** significa darle instrucciones paso a paso a una computadora para que realice una tarea.

Suena complicado, pero ya haces esto en tu vida diaria sin darte cuenta. Cuando sigues una receta de cocina, estás programando: tienes una lista de pasos en orden, y si los sigues correctamente, obtienes el resultado esperado.

**La analogía de la receta de cocina**

Imagina que quieres hornear un pastel. La receta te dice:
1. Precalentar el horno a 180°C
2. Mezclar harina, azúcar y huevos
3. Verter la mezcla en el molde
4. Hornear por 35 minutos
5. Sacar del horno y dejar enfriar

Si omites un paso o los haces en el orden equivocado (por ejemplo, hornear antes de mezclar los ingredientes), el resultado no será el esperado. Los programas funcionan exactamente igual.

**La computadora es literal**

La diferencia clave entre dar instrucciones a una persona y a una computadora es que la computadora hace **exactamente** lo que le dices, ni más ni menos. Una persona puede intuir lo que quisiste decir aunque te expreses mal. La computadora no.

Si le dices a una persona "pásame el vaso", ella entiende aunque haya varios vasos. Si le dices lo mismo a una computadora sin especificar cuál vaso, te dará un error.

**¿Por qué importa el orden?**

En programación, el orden de las instrucciones es fundamental. Python ejecuta el código de **arriba hacia abajo**, línea por línea. Si intentas usar una variable antes de crearla, obtendrás un error.

**Tipos de errores en programación**

Hay dos grandes categorías de errores:

- **Error de sintaxis:** Es como un error gramatical. El código está mal escrito y Python no puede entenderlo.
  \`\`\`python
  pint("Hola")  # "pint" no es una función válida → Error
  \`\`\`

- **Error lógico:** El código se ejecuta sin problemas, pero el resultado no es el que esperabas. Es el más difícil de detectar porque Python no te avisa.
  \`\`\`python
  # Quieres calcular el promedio de 3 y 5, pero te equivocas:
  promedio = 3 + 5 / 2   # Resultado: 5.5 (incorrecto)
  # Lo correcto sería:
  promedio = (3 + 5) / 2  # Resultado: 4.0 (correcto)
  \`\`\`

**Errores comunes:**

- **"Saltarse pasos"** — A veces los principiantes intentan hacer demasiado en una sola línea. Es mejor ir paso a paso.
- **"La computadora va a adivinar lo que quiero decir"** — No. Debes ser preciso. Un espacio de más, una letra mal escrita, o un símbolo incorrecto puede causar un error.
- **"Si el código corre, está bien"** — No necesariamente. Un programa puede ejecutarse sin errores pero dar resultados equivocados (error lógico).`,
    codeExample: `# Programa: calcular el área de un cuarto rectangular
# Seguimos los pasos EN ORDEN, igual que una receta

# Paso 1: definir las medidas del cuarto
largo = 5    # metros
ancho = 3    # metros

# Paso 2: calcular el área (largo × ancho)
area = largo * ancho

# Paso 3: mostrar el resultado
print("El área del cuarto es:")
print(area)
print("metros cuadrados")

# ──────────────────────────────────────────────────
# Nota: el ORDEN importa. Si intentáramos usar
# "area" antes de calcularla, Python daría un error.
#
# Por ejemplo, esto causaría un NameError:
# print(area)       ← area no existe aún
# area = largo * ancho
# ──────────────────────────────────────────────────

# Otro ejemplo: calcular el perímetro también
perimetro = 2 * (largo + ancho)
print("El perímetro del cuarto es:")
print(perimetro)
print("metros")`,
    keyPoints: [
      'Programar es dar instrucciones paso a paso a una computadora para que realice una tarea.',
      'La computadora es literal: ejecuta exactamente lo que le dices, sin interpretar intenciones.',
      'El orden de las instrucciones es fundamental: Python las ejecuta de arriba hacia abajo.',
      'Un error de sintaxis ocurre cuando el código está mal escrito y Python no puede entenderlo.',
      'Un error lógico ocurre cuando el código corre pero da un resultado incorrecto.',
    ],
    exercise: {
      description: 'Sin escribir código, escribe en español (como si fuera una receta) los pasos necesarios para calcular el promedio de tres notas escolares. Sé específico: ¿qué datos necesitas? ¿qué operaciones haces? ¿qué muestras al final?',
      hint: 'Piensa en los pasos: primero necesitas las tres notas, luego sumarlas, luego dividir entre 3 (porque son 3 notas), y finalmente mostrar el resultado. ¿Puedes escribir esos pasos con más detalle?',
    },
    quiz: [
      {
        question: '¿Qué significa "programar"?',
        options: [
          'Diseñar interfaces gráficas para aplicaciones',
          'Dar instrucciones paso a paso a una computadora para que realice una tarea',
          'Conectar componentes de hardware en una computadora',
          'Instalar programas en un sistema operativo',
        ],
        correctAnswer: 'Dar instrucciones paso a paso a una computadora para que realice una tarea',
        correctFeedback: '¡Correcto! Programar es exactamente eso: darle a la computadora una serie de instrucciones ordenadas para resolver un problema.',
        incorrectFeedback: 'No es correcto. Programar significa darle instrucciones paso a paso a una computadora para que realice una tarea, como seguir una receta de cocina.',
      },
      {
        question: '¿Qué hace Python cuando ejecuta un programa?',
        options: [
          'Ejecuta las instrucciones en orden aleatorio',
          'Ejecuta primero las líneas más cortas',
          'Ejecuta las instrucciones de arriba hacia abajo, línea por línea',
          'Ejecuta primero las líneas sin comentarios',
        ],
        correctAnswer: 'Ejecuta las instrucciones de arriba hacia abajo, línea por línea',
        correctFeedback: '¡Correcto! Python siempre lee y ejecuta el código de arriba hacia abajo, una línea a la vez.',
        incorrectFeedback: 'No es correcto. Python ejecuta el código de arriba hacia abajo, línea por línea, en el orden exacto en que está escrito.',
      },
      {
        question: '¿Cuál es la diferencia entre un error de sintaxis y un error lógico?',
        options: [
          'No hay diferencia, son lo mismo',
          'El error de sintaxis ocurre en el hardware; el lógico en el software',
          'El error de sintaxis impide que el código corra; el lógico permite que corra pero da resultados incorrectos',
          'El error lógico impide que el código corra; el de sintaxis da resultados incorrectos',
        ],
        correctAnswer: 'El error de sintaxis impide que el código corra; el lógico permite que corra pero da resultados incorrectos',
        correctFeedback: '¡Correcto! Un error de sintaxis es como un error gramatical que Python no puede ignorar. Un error lógico pasa desapercibido para Python pero produce resultados equivocados.',
        incorrectFeedback: 'No es correcto. El error de sintaxis impide que el programa se ejecute. El error lógico permite que el programa corra, pero el resultado no es el esperado.',
      },
      {
        question: '¿Qué resultado produce este código?\n\nlargo = 4\nancho = 6\narea = largo * ancho\nprint(area)',
        options: [
          '10',
          '46',
          '24',
          'Error, porque no se puede multiplicar variables',
        ],
        correctAnswer: '24',
        correctFeedback: '¡Correcto! 4 × 6 = 24. El código asigna los valores, calcula el producto y lo muestra con print().',
        incorrectFeedback: 'No es correcto. El código multiplica largo (4) por ancho (6), lo que da 24. Luego print() muestra ese resultado.',
      },
      {
        question: '¿Por qué se dice que la computadora es "literal"?',
        options: [
          'Porque solo entiende texto, no números',
          'Porque ejecuta exactamente lo que le indicas, sin interpretar intenciones',
          'Porque traduce el código a otro idioma antes de ejecutarlo',
          'Porque muestra los resultados exactamente como los escribiste',
        ],
        correctAnswer: 'Porque ejecuta exactamente lo que le indicas, sin interpretar intenciones',
        correctFeedback: '¡Correcto! A diferencia de una persona, la computadora no puede adivinar qué quisiste decir. Hace exactamente lo que le pides, ni más ni menos.',
        incorrectFeedback: 'No es correcto. La computadora es "literal" porque ejecuta exactamente las instrucciones que le das, sin poder adivinar tu intención si te equivocas.',
      },
    ],
  },
  {
    slug: 'donde-escribir-python',
    title: '¿Dónde puedo escribir código Python?',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 3,
    description: 'Conoce diferentes formas de escribir y ejecutar código Python, desde el navegador hasta tu computadora.',
    explanation: `Una de las primeras preguntas que surge al aprender Python es: **¿dónde escribo el código?**

La buena noticia es que tienes varias opciones, desde herramientas que funcionan directo en tu navegador (sin instalar nada) hasta entornos de desarrollo completos en tu computadora.

---

**Opción 1: Replit.com (recomendado para empezar)**

Replit es una plataforma web donde puedes escribir y ejecutar código Python directamente desde tu navegador, sin instalar nada.

✅ **Ventajas:**
- No necesitas instalar nada
- Funciona en cualquier computadora o tablet
- Puedes guardar tus proyectos en la nube
- Tiene una interfaz amigable para principiantes

❌ **Desventajas:**
- Necesitas conexión a internet
- La versión gratuita tiene algunas limitaciones de velocidad

**Cómo empezar:** entra a replit.com, crea una cuenta gratuita, crea un nuevo "Repl" de tipo Python y comienza a escribir código.

---

**Opción 2: Google Colab**

Google Colab es un entorno de Python que funciona en el navegador y está orientado a ciencia de datos y aprendizaje automático. Usa el formato de "notebooks" (cuadernos), donde mezclas texto y código.

✅ **Ventajas:**
- Gratuito y sin instalación
- Se integra con Google Drive para guardar tu trabajo
- Muy popular en ciencia de datos e inteligencia artificial

❌ **Desventajas:**
- El formato de notebook puede ser confuso para principiantes absolutos
- Necesitas una cuenta de Google
- Las sesiones se desconectan si no las usas por un rato

**Cómo empezar:** entra a colab.research.google.com con tu cuenta de Google.

---

**Opción 3: VS Code + Python instalado**

VS Code (Visual Studio Code) es el editor de código más popular del mundo. Es gratuito y puedes instalar la extensión de Python para tener una experiencia de desarrollo completa.

✅ **Ventajas:**
- Muy potente y personalizable
- Funciona sin internet
- Es lo que usan la mayoría de los programadores profesionales

❌ **Desventajas:**
- Requiere instalar Python y VS Code en tu computadora
- Puede ser abrumador para principiantes por la cantidad de opciones

**Cómo empezar:** descarga Python desde python.org, instala VS Code desde code.visualstudio.com, y agrega la extensión "Python" de Microsoft.

---

**¿Cómo verificar que Python está instalado?**

Si eliges la opción 3, puedes verificar que Python está instalado abriendo la terminal y escribiendo:

\`\`\`
python --version
\`\`\`

O en algunos sistemas:

\`\`\`
python3 --version
\`\`\`

Si ves algo como \`Python 3.11.0\`, ¡está instalado correctamente!

---

**Errores comunes:**

- **"Escribí el código pero no pasa nada"** — Verifica que presionaste el botón "Run" o "Ejecutar", o que usaste el comando correcto para ejecutar el archivo.
- **"No sé si estoy en el lugar correcto"** — En Replit, asegúrate de estar en un proyecto de tipo Python (no JavaScript ni otro lenguaje).
- **"Escribí el código y lo cerré sin guardar"** — En Replit y Google Colab el guardado es automático, pero en VS Code debes guardar manualmente con Ctrl+S (Windows) o Cmd+S (Mac).`,
    codeExample: `# ── Verificar la versión de Python ──────────────────
# (Esto se ejecuta en la terminal, no en el editor)
# python --version
# Resultado esperado: Python 3.x.x

# ── Programa de bienvenida ───────────────────────────
# Escribe este código en Replit, Google Colab o VS Code

print("¡Bienvenido a Python!")
print("Este es tu primer programa.")
print("")  # Imprime una línea vacía (como un salto de línea)
print("Hoy empiezas tu camino como programador.")

# Puedes personalizar el mensaje con tu nombre:
nombre = "RonaldoScript"
print("Hola,", nombre)
print("¡Vamos a aprender Python juntos!")`,
    keyPoints: [
      'Puedes escribir Python en el navegador (Replit, Google Colab) sin instalar nada.',
      'Replit.com es la opción más recomendada para principiantes por su simplicidad.',
      'VS Code con Python instalado es la opción preferida por programadores profesionales.',
      'Para verificar si Python está instalado usa el comando python --version en la terminal.',
    ],
    exercise: {
      description: 'Entra a replit.com, crea una cuenta gratuita si aún no tienes una, crea un nuevo proyecto de tipo Python y ejecuta este código: print("¡Hola, Python!"). Verifica que aparezca el mensaje en la pantalla.',
      hint: 'En Replit: haz clic en "+ Create Repl", elige "Python" como lenguaje, escribe el código en el panel de la izquierda y presiona el botón verde "Run" en la parte superior.',
    },
    quiz: [
      {
        question: '¿Cuál de estas opciones permite escribir Python SIN instalar nada en tu computadora?',
        options: [
          'VS Code con la extensión de Python',
          'PyCharm Professional',
          'Replit.com',
          'IDLE (el editor que viene con Python)',
        ],
        correctAnswer: 'Replit.com',
        correctFeedback: '¡Correcto! Replit.com funciona directo en el navegador, sin necesidad de instalar ningún programa.',
        incorrectFeedback: 'No es correcto. Replit.com es una plataforma web que no requiere instalar nada; solo necesitas un navegador y conexión a internet.',
      },
      {
        question: '¿Qué comando usas en la terminal para verificar si Python está instalado?',
        options: [
          'python --check',
          'python --version',
          'install python',
          'run python',
        ],
        correctAnswer: 'python --version',
        correctFeedback: '¡Correcto! El comando python --version (o python3 --version en algunos sistemas) muestra la versión de Python instalada.',
        incorrectFeedback: 'No es correcto. El comando correcto es python --version, que muestra la versión de Python instalada, como "Python 3.11.0".',
      },
      {
        question: '¿Cuál es una DESVENTAJA de usar Replit.com?',
        options: [
          'No es gratuito',
          'Solo funciona con Python 2',
          'Necesitas conexión a internet para usarlo',
          'No puedes compartir tu código con otros',
        ],
        correctAnswer: 'Necesitas conexión a internet para usarlo',
        correctFeedback: '¡Correcto! Como Replit funciona en la nube, necesitas internet. Si no tienes conexión, no podrás usarlo.',
        incorrectFeedback: 'No es correcto. La principal desventaja de Replit es que requiere conexión a internet para funcionar, ya que todo se ejecuta en la nube.',
      },
      {
        question: '¿Para qué tipo de trabajo es especialmente popular Google Colab?',
        options: [
          'Desarrollo de videojuegos',
          'Diseño de páginas web',
          'Ciencia de datos e inteligencia artificial',
          'Programación de sistemas operativos',
        ],
        correctAnswer: 'Ciencia de datos e inteligencia artificial',
        correctFeedback: '¡Correcto! Google Colab es muy popular en el mundo de la ciencia de datos y la IA porque permite trabajar con grandes cantidades de datos y tiene integración con herramientas especializadas.',
        incorrectFeedback: 'No es correcto. Google Colab es especialmente popular para ciencia de datos e inteligencia artificial, gracias a su formato de notebook y su integración con librerías de análisis de datos.',
      },
      {
        question: 'Un estudiante escribe código en VS Code, lo ejecuta, pero nada ocurre. ¿Cuál es la causa más probable?',
        options: [
          'Python no soporta VS Code',
          'No guardó el archivo antes de ejecutarlo (Ctrl+S)',
          'VS Code solo funciona con JavaScript',
          'El código tenía demasiadas líneas',
        ],
        correctAnswer: 'No guardó el archivo antes de ejecutarlo (Ctrl+S)',
        correctFeedback: '¡Correcto! En VS Code el guardado no es automático. Si no guardas el archivo con Ctrl+S antes de ejecutarlo, estarás ejecutando la versión anterior del código.',
        incorrectFeedback: 'No es correcto. El error más común en VS Code es olvidar guardar el archivo. Debes presionar Ctrl+S (Windows) o Cmd+S (Mac) antes de ejecutar el código.',
      },
    ],
  },
  {
    slug: 'hola-mundo-python',
    title: 'Tu primer programa: Hola Mundo',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 4,
    description: 'Escribe tu primer programa en Python y aprende cómo funciona la función print().',
    explanation: `En el mundo de la programación existe una tradición: el primer programa que escribe cualquier persona que aprende un lenguaje nuevo siempre imprime el mensaje **"¡Hola, Mundo!"** en la pantalla.

Esta tradición existe desde los años 70 y sirve para dos cosas: verificar que el entorno de programación funciona correctamente, y celebrar que acabas de dar tu primer paso como programador.

---

**La función print()**

\`print()\` es la función más básica y usada de Python. Su trabajo es simple: **mostrar información en la pantalla**.

\`\`\`python
print("¡Hola, Mundo!")
\`\`\`

Analicemos esta línea:
- \`print\` es el nombre de la función
- \`()\` son los paréntesis que indican que estamos llamando a la función
- \`"¡Hola, Mundo!"\` es el texto que queremos mostrar, entre comillas

---

**Comillas simples vs comillas dobles**

En Python puedes usar comillas simples (\`'\`) o dobles (\`"\`) para texto. Ambas son válidas:

\`\`\`python
print('Hola con comillas simples')
print("Hola con comillas dobles")
\`\`\`

El único requisito es que uses el mismo tipo al abrir y cerrar.

---

**Múltiples argumentos en print()**

Puedes pasarle varios valores a \`print()\` separados por comas. Python los imprimirá todos en la misma línea, separados por un espacio:

\`\`\`python
print("Mi nombre es", "Ana", "y tengo", 25, "años")
# Resultado: Mi nombre es Ana y tengo 25 años
\`\`\`

---

**Los parámetros sep y end**

\`print()\` tiene dos parámetros opcionales muy útiles:

- **\`sep\`** define qué carácter poner entre los valores (por defecto es un espacio)
- **\`end\`** define qué carácter poner al final (por defecto es un salto de línea)

\`\`\`python
print("uno", "dos", "tres", sep="-")
# Resultado: uno-dos-tres

print("Hola", end=" ")
print("Mundo")
# Resultado: Hola Mundo (en la misma línea)
\`\`\`

---

**Cadenas de texto vs números**

En Python, los textos van entre comillas y los números no:

\`\`\`python
print("42")   # Imprime el texto "42"
print(42)     # Imprime el número 42
\`\`\`

Aunque parecen iguales visualmente, son tipos de datos diferentes. Más adelante aprenderás por qué esto importa.

---

**Errores comunes:**

- **Olvidar las comillas:** \`print(Hola)\` → Python busca una variable llamada Hola y si no existe, da un \`NameError\`.
- **Olvidar los paréntesis:** \`print "Hola"\` → En Python 3 esto es un \`SyntaxError\`. Los paréntesis son obligatorios.
- **Mezclar tipos de comillas:** \`print("Hola')\` → \`SyntaxError\`. Abriste con doble y cerraste con simple.
- **Escribir PRINT en mayúsculas:** \`PRINT("Hola")\` → Python distingue entre mayúsculas y minúsculas. La función se llama \`print\`, no \`PRINT\`.`,
    codeExample: `# ── El clásico "Hola Mundo" ─────────────────────────
print("¡Hola, Mundo!")

# ── Comillas simples y dobles ────────────────────────
print('Esto usa comillas simples')
print("Esto usa comillas dobles")

# ── Imprimir números ─────────────────────────────────
print(42)
print(3.14)

# ── Múltiples valores en una sola línea ──────────────
print("Nombre:", "Carlos")
print("Edad:", 28, "años")
print("Ciudad:", "Lima")

# ── Parámetro sep: cambiar el separador ──────────────
print("uno", "dos", "tres", sep="-")
# Resultado: uno-dos-tres

print("2024", "01", "15", sep="/")
# Resultado: 2024/01/15

# ── Parámetro end: cambiar el final de línea ─────────
print("Hola,", end=" ")
print("¿cómo estás?")
# Resultado: Hola, ¿cómo estás? (en la misma línea)

# ── Línea vacía ──────────────────────────────────────
print("")  # Imprime una línea en blanco

# ── Diferencia entre texto y número ──────────────────
print("100")  # Texto (string)
print(100)    # Número (integer)`,
    keyPoints: [
      'print() es la función más básica de Python: muestra información en la pantalla.',
      'El texto dentro de print() debe ir entre comillas simples o dobles, pero no mezcladas.',
      'Puedes pasar múltiples valores a print() separados por comas.',
      'El parámetro sep cambia el separador entre valores (por defecto es un espacio).',
      'El parámetro end cambia qué se imprime al final (por defecto es un salto de línea).',
    ],
    exercise: {
      description: 'Escribe un programa en Python que imprima tu nombre, tu edad y tu ciudad, cada uno en una línea separada. Por ejemplo:\nNombre: María\nEdad: 22\nCiudad: Bogotá',
      hint: 'Usa tres líneas de print(), una para cada dato. Recuerda poner el texto entre comillas. Puedes usar el formato print("Nombre:", "María") o print("Nombre: María").',
    },
    quiz: [
      {
        question: '¿Cuál es el resultado de este código?\n\nprint("Hola", "Mundo")',
        options: [
          'HolaMundo',
          'Hola Mundo',
          '"Hola" "Mundo"',
          'Error de sintaxis',
        ],
        correctAnswer: 'Hola Mundo',
        correctFeedback: '¡Correcto! Cuando pasas varios valores a print() separados por comas, los muestra con un espacio entre ellos por defecto.',
        incorrectFeedback: 'No es correcto. print() con múltiples argumentos los muestra separados por un espacio. El resultado es "Hola Mundo".',
      },
      {
        question: '¿Cuál de estos códigos causaría un error en Python 3?',
        options: [
          'print("¡Hola!")',
          "print('¡Hola!')",
          'print "¡Hola!"',
          'print("¡Hola!", "Mundo")',
        ],
        correctAnswer: 'print "¡Hola!"',
        correctFeedback: '¡Correcto! En Python 3, print es una función y requiere paréntesis obligatoriamente. Sin paréntesis obtendrías un SyntaxError.',
        incorrectFeedback: 'No es correcto. En Python 3 los paréntesis son obligatorios. La línea print "¡Hola!" (sin paréntesis) causaría un SyntaxError.',
      },
      {
        question: '¿Qué imprime este código?\n\nprint("A", "B", "C", sep="-")',
        options: [
          'A B C',
          'A-B-C',
          '"A"-"B"-"C"',
          'ABC',
        ],
        correctAnswer: 'A-B-C',
        correctFeedback: '¡Correcto! El parámetro sep="-" indica que Python debe poner un guion entre cada valor.',
        incorrectFeedback: 'No es correcto. El parámetro sep cambia el separador entre los valores. Con sep="-", el resultado es A-B-C.',
      },
      {
        question: '¿Cuál es la diferencia entre print("5") y print(5)?',
        options: [
          'No hay diferencia, ambos imprimen lo mismo y son del mismo tipo',
          'print("5") imprime texto; print(5) imprime un número. Visualmente parecen iguales pero son tipos diferentes',
          'print("5") da un error porque los números no van entre comillas',
          'print(5) da un error porque los números no se pueden imprimir',
        ],
        correctAnswer: 'print("5") imprime texto; print(5) imprime un número. Visualmente parecen iguales pero son tipos diferentes',
        correctFeedback: '¡Correcto! "5" es una cadena de texto (string) y 5 es un número entero (integer). Aunque en pantalla parecen iguales, Python los trata de formas diferentes.',
        incorrectFeedback: 'No es correcto. "5" entre comillas es texto (string), mientras que 5 sin comillas es un número (integer). Visualmente parecen iguales pero Python los trata de forma diferente.',
      },
      {
        question: '¿Qué imprime este código?\n\nprint("Línea 1", end=" ")\nprint("Línea 2")',
        options: [
          'Línea 1\nLínea 2',
          'Línea 1 Línea 2',
          'Línea 1Línea 2',
          'Error, no se pueden encadenar dos print()',
        ],
        correctAnswer: 'Línea 1 Línea 2',
        correctFeedback: '¡Correcto! El parámetro end=" " reemplaza el salto de línea por un espacio, así el segundo print() continúa en la misma línea.',
        incorrectFeedback: 'No es correcto. end=" " hace que en lugar de un salto de línea haya un espacio al final del primer print(). El segundo print() continúa en la misma línea, resultando en "Línea 1 Línea 2".',
      },
      {
        question: '¿Qué error produce este código?\n\nPRINT("Hola")',
        options: [
          'No hay error, Python acepta mayúsculas y minúsculas',
          'NameError, porque Python distingue mayúsculas de minúsculas y la función se llama print, no PRINT',
          'ValueError, porque el texto está entre comillas dobles',
          'TypeError, porque print solo acepta números',
        ],
        correctAnswer: 'NameError, porque Python distingue mayúsculas de minúsculas y la función se llama print, no PRINT',
        correctFeedback: '¡Correcto! Python es sensible a mayúsculas y minúsculas (case-sensitive). PRINT no es lo mismo que print, y como PRINT no existe, obtienes un NameError.',
        incorrectFeedback: 'No es correcto. Python diferencia entre mayúsculas y minúsculas. La función correcta es print (minúsculas). PRINT no existe, por lo que Python lanza un NameError.',
      },
    ],
  },
  {
    slug: 'leer-programa-simple',
    title: 'Cómo leer un programa simple',
    module: 'Introducción a Python',
    moduleNumber: 1,
    order: 5,
    description: 'Aprende a leer código línea por línea para entender qué hace un programa sin sentirte perdido.',
    explanation: `Saber **leer código** es tan importante como saber escribirlo. Cuando ves un programa por primera vez puede parecer intimidante, pero con una estrategia simple puedes entender cualquier código básico.

---

**Regla número uno: el código se lee de arriba hacia abajo**

Python ejecuta las instrucciones en el mismo orden en que las lees en un libro: de arriba hacia abajo, de izquierda a derecha. Cada línea es una instrucción.

---

**¿Qué es una instrucción?**

Una instrucción es una orden completa que Python puede ejecutar. En Python, cada línea suele ser una instrucción:

\`\`\`python
nombre = "Lucía"     # instrucción 1: crear la variable nombre
print(nombre)        # instrucción 2: mostrar el valor de nombre
\`\`\`

---

**Los comentarios: notas para los humanos**

El símbolo \`#\` marca el inicio de un comentario. Python ignora todo lo que está después de \`#\` en esa línea. Los comentarios son para nosotros, no para la computadora:

\`\`\`python
# Esto es un comentario: Python no lo ejecuta
print("Esto sí se ejecuta")  # Comentario al final de una línea
\`\`\`

Los comentarios son esenciales para explicar qué hace el código y por qué.

---

**La indentación (adelanto importante)**

En Python, los espacios al inicio de una línea tienen significado. Esto se llama **indentación** y lo aprenderás en detalle más adelante cuando veas condicionales y bucles. Por ahora, solo debes saber que:

- El código principal va sin sangría (alineado a la izquierda)
- Las secciones dentro de estructuras como \`if\` o \`for\` van con 4 espacios de sangría

\`\`\`python
# Sin indentación: código normal
print("Hola")

# Con indentación: dentro de una estructura (lo verás después)
# if True:
#     print("Esto va con 4 espacios")
\`\`\`

---

**Identificar los elementos clave de un programa simple**

Al leer código, busca estos elementos:

1. **Variables:** palabras seguidas de \`=\` que guardan un valor. Ejemplo: \`edad = 20\`
2. **Funciones:** palabras seguidas de \`()\`. Ejemplo: \`print()\`, \`input()\`
3. **Valores:** textos entre comillas o números solos. Ejemplo: \`"Hola"\`, \`42\`
4. **Comentarios:** líneas que empiezan con \`#\`

---

**Estrategia para leer código**

1. **Lee el código en voz alta**, línea por línea
2. **Predice** qué imprimirá o qué hará cada línea antes de ejecutarlo
3. **Ejecuta el código** y compara con tu predicción
4. Si te equivocaste, pregúntate: ¿por qué el resultado fue diferente a lo que esperaba?

Esta técnica de predecir antes de ejecutar es una de las formas más efectivas de aprender a programar.

---

**Errores comunes:**

- **"No entiendo nada"** — Lee línea por línea. Si hay 10 líneas, entiende la primera antes de pasar a la segunda.
- **"Hay una palabra que no conozco"** — Ignora por ahora lo que no conoces y trata de entender el contexto general. Con el tiempo, todo tiene sentido.
- **"Me salteo los comentarios"** — ¡No lo hagas! Los comentarios son pistas que el programador dejó para ayudarte a entender el código.`,
    codeExample: `# ── Programa: información personal y cálculo simple ──
# Este programa muestra datos de una persona
# y calcula su año de nacimiento aproximado.

# Paso 1: definir los datos de la persona
nombre = "Sofía"         # Variable de tipo texto
edad = 22                # Variable de tipo número entero
ciudad = "Medellín"      # Variable de tipo texto

# Paso 2: mostrar la información
print("=== Información Personal ===")
print("Nombre:", nombre)
print("Edad:", edad, "años")
print("Ciudad:", ciudad)

# Paso 3: calcular el año de nacimiento aproximado
anio_actual = 2024
anio_nacimiento = anio_actual - edad

# Paso 4: mostrar el resultado del cálculo
print("")  # Línea en blanco para separar secciones
print("=== Cálculo ===")
print("Año de nacimiento aproximado:", anio_nacimiento)

# Paso 5: mensaje final
print("")
print("¡Gracias por usar este programa!")`,
    keyPoints: [
      'El código se ejecuta de arriba hacia abajo, línea por línea.',
      'Los comentarios (líneas que empiezan con #) son notas para los humanos; Python los ignora.',
      'Las variables guardan valores y se identifican por el signo = (asignación).',
      'Las funciones como print() se identifican porque van seguidas de paréntesis.',
      'La estrategia de predecir qué imprimirá el código antes de ejecutarlo acelera el aprendizaje.',
    ],
    exercise: {
      description: 'Lee el codeExample de esta lección línea por línea. Antes de ejecutarlo, escribe en papel (o en un documento de texto) qué crees que imprimirá cada línea con print(). Luego ejecútalo y compara tus predicciones con el resultado real. ¿Acertaste en todas?',
      hint: 'Hay 7 llamadas a print() en el ejemplo. Identifícalas todas y predice el resultado de cada una. Presta atención a las variables: ¿qué valor tiene nombre? ¿Qué valor tiene anio_nacimiento?',
    },
    quiz: [
      {
        question: '¿Qué hace Python con las líneas que empiezan con #?',
        options: [
          'Las ejecuta primero, antes que el resto del código',
          'Las ignora completamente; son comentarios para los humanos',
          'Las muestra en pantalla como texto especial',
          'Causa un error si hay demasiados comentarios',
        ],
        correctAnswer: 'Las ignora completamente; son comentarios para los humanos',
        correctFeedback: '¡Correcto! Los comentarios (líneas con #) son ignorados por Python. Sirven para explicar el código a las personas que lo lean.',
        incorrectFeedback: 'No es correcto. Python ignora completamente las líneas que empiezan con #. Son comentarios: notas para los programadores, no instrucciones para Python.',
      },
      {
        question: '¿En qué orden ejecuta Python las instrucciones de un programa?',
        options: [
          'En orden aleatorio',
          'Primero las más cortas, luego las más largas',
          'De abajo hacia arriba',
          'De arriba hacia abajo, línea por línea',
        ],
        correctAnswer: 'De arriba hacia abajo, línea por línea',
        correctFeedback: '¡Correcto! Python siempre ejecuta el código de arriba hacia abajo, en el orden exacto en que está escrito.',
        incorrectFeedback: 'No es correcto. Python ejecuta el código de arriba hacia abajo, línea por línea, en el mismo orden en que está escrito.',
      },
      {
        question: '¿Qué imprime este programa?\n\nx = 10\ny = 3\nresultado = x - y\nprint(resultado)',
        options: [
          '10 - 3',
          'resultado',
          '7',
          'x - y',
        ],
        correctAnswer: '7',
        correctFeedback: '¡Correcto! x vale 10, y vale 3, y resultado = 10 - 3 = 7. print(resultado) muestra el valor de la variable, no su nombre.',
        incorrectFeedback: 'No es correcto. La variable resultado almacena el valor de x - y, que es 10 - 3 = 7. print(resultado) muestra el valor almacenado (7), no el nombre de la variable.',
      },
      {
        question: '¿Cuál de estos elementos es una variable en el siguiente código?\n\nprint("Hola")\nedad = 18\nprint(edad)',
        options: [
          'print',
          '"Hola"',
          'edad',
          '18',
        ],
        correctAnswer: 'edad',
        correctFeedback: '¡Correcto! edad es una variable: una palabra que guarda un valor (18 en este caso). Se identifica porque aparece a la izquierda del signo =.',
        incorrectFeedback: 'No es correcto. La variable es edad. Las variables se identifican porque están a la izquierda del signo = y guardan un valor. print es una función, "Hola" es texto y 18 es un número.',
      },
      {
        question: '¿Cuál es la mejor estrategia para aprender a leer código nuevo?',
        options: [
          'Ejecutar todo el código de golpe y ver qué pasa',
          'Memorizar cada palabra clave antes de leer el código',
          'Leer línea por línea, predecir el resultado de cada una y luego ejecutar para comparar',
          'Copiar el código sin leerlo y modificarlo hasta que funcione',
        ],
        correctAnswer: 'Leer línea por línea, predecir el resultado de cada una y luego ejecutar para comparar',
        correctFeedback: '¡Correcto! Predecir antes de ejecutar activa el pensamiento crítico y te ayuda a entender cada línea en profundidad.',
        incorrectFeedback: 'No es correcto. La estrategia más efectiva es leer línea por línea, predecir qué hará cada una, y luego ejecutar el código para comparar. Esta técnica desarrolla el pensamiento lógico mucho más rápido.',
      },
    ],
  },
]

export const module1: Module = {
  number: 1,
  title: 'Introducción a Python',
  level: 'básico',
  lessons: lessonsModule1,
}
