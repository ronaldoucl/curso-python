import type { Lesson, Module } from '@/types'

export const lessonsLogicaModule2: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'las-computadoras-siguen-instrucciones',
    title: 'Las computadoras siguen instrucciones, no adivinan',
    module: 'Cómo piensa una computadora',
    moduleNumber: 2,
    order: 1,
    description:
      'Entiende la diferencia fundamental entre cómo piensa una persona y cómo funciona una computadora.',
    explanation: `Una computadora es increíblemente poderosa. Puede hacer millones de operaciones por segundo, recordar cantidades enormes de información y nunca se cansa. Pero tiene una limitación fundamental: **no puede adivinar**. No piensa. No interpreta. No asume.

Una computadora solo hace exactamente lo que le dices que haga, ni más ni menos.

**La diferencia con los humanos**

Cuando le pides a un amigo "trae algo para beber", él interpreta el contexto: sabe que probablemente quieres agua, jugo o refresco. Entiende que "algo" es razonable en cantidad. Sabe que no debe traerte un balde de agua.

Si le dices lo mismo a una computadora (con una instrucción mal definida), podría hacer cualquier cosa que técnicamente cumpla con "traer algo para beber". No tiene sentido común.

**¿Por qué es esto útil?**

Aunque parezca una limitación, en realidad es una fortaleza. La predictibilidad de las computadoras es lo que las hace tan confiables. Si le das las instrucciones correctas, la computadora las ejecutará perfectamente millones de veces sin cometer errores ni tener mal humor.

Un programador exitoso abraza esta característica: en vez de frustrarse porque la computadora "no entiende", aprende a ser cada vez más preciso en sus instrucciones.

**Una computadora es como un chef con amnesia**

Imagina un chef excelente, pero que pierde la memoria completamente al empezar cada turno. No recuerda cómo se hacen los platos, no sabe qué herramientas hay en la cocina, no puede improvisar. Solo puede seguir una receta escrita, paso a paso, exactamente como está escrita.

Si la receta dice "cortar 3 tomates", corta exactamente 3. Si la receta no dice "lavar los tomates antes", no los lavará. Este chef sigue instrucciones perfectamente, pero depende completamente de lo bien que estén escritas esas instrucciones.

Eso es una computadora.

**Errores comunes de principiantes**

- Pensar que la computadora "sabe lo que quieres decir".
- Asumir que si algo es "obvio para un humano", también lo es para la máquina.
- Frustración cuando el programa no hace lo que "debería hacer" según la intuición humana.

La buena noticia: con práctica, aprenderás a escribir instrucciones tan claras que la computadora siempre hará exactamente lo que quieres.`,
    codeExample: `// ── Las computadoras no asumen nada ─────────────────────────────────────

// Instrucción ambigua para un humano:
// "Si hay errores, avísame"
// Un humano sabe qué son "errores" y cómo "avisar"

// Instrucción precisa para una computadora:
INICIO
  SI el_resultado es menor que 0 ENTONCES
    MOSTRAR en pantalla: "Error: el resultado no puede ser negativo"
    DETENER el programa
  FIN SI
FIN

// ── Otro ejemplo: suma de dos números ────────────────────────────────────

// ❌ Instrucción incompleta:
// "Suma los números y muestra el resultado"
// La computadora pregunta: ¿Cuáles números? ¿Dónde los obtengo?
// ¿Cómo los muestro? ¿Dónde?

// ✓ Instrucción completa:
INICIO
  LEER primer_numero desde el teclado
  LEER segundo_numero desde el teclado
  resultado = primer_numero + segundo_numero
  MOSTRAR "La suma es: " + resultado en la pantalla
FIN

// La computadora no adivina. Pero si le das instrucciones claras,
// nunca comete errores y puede hacerlo millones de veces.`,
    keyPoints: [
      'Una computadora solo hace exactamente lo que se le indica, sin interpretar ni asumir.',
      'La predictibilidad de las computadoras es su mayor fortaleza: instrucciones correctas = resultados correctos siempre.',
      'No existe el "sentido común" en una computadora.',
      'La frustración con computadoras generalmente viene de instrucciones imprecisas, no de fallas de la máquina.',
      'Aprender a ser preciso en tus instrucciones es aprender a programar.',
    ],
    exercise: {
      description:
        'Escribe las instrucciones para que una "computadora" sin sentido común pueda hacer lo siguiente: buscar un número de teléfono en una lista de contactos. Recuerda: la computadora no sabe qué es una lista, qué es un contacto, ni cómo buscar. Tienes que explicarle todo desde cero.',
      hint: 'Piensa: ¿cómo le dices a alguien que "busque" algo en una lista si nunca ha visto una lista? Tienes que describir qué es comparar, qué hacer cuando encuentra una coincidencia, y qué hacer si no la encuentra.',
    },
    quiz: [
      {
        question: '¿Por qué una computadora puede ejecutar instrucciones millones de veces sin errores?',
        options: [
          'Porque es más inteligente que los humanos',
          'Porque tiene sentido común y sabe interpretar situaciones',
          'Porque es completamente predecible: ejecuta exactamente las instrucciones dadas, siempre de la misma forma',
          'Porque puede adivinar lo que el programador quería decir',
        ],
        correctAnswer: 'Porque es completamente predecible: ejecuta exactamente las instrucciones dadas, siempre de la misma forma',
        correctFeedback:
          'Correcto. La predictibilidad es la fortaleza de una computadora. Si las instrucciones son correctas, las ejecutará perfectamente millones de veces. No tiene mal humor, no se cansa, no interpreta diferente en distintos días.',
        incorrectFeedback:
          'No es correcto. Las computadoras no son inteligentes ni tienen sentido común. Su ventaja es la predictibilidad: ejecutan instrucciones exactamente como están escritas, cada vez, sin variación.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'entradas-procesos-salidas',
    title: 'Entradas, procesos y salidas',
    module: 'Cómo piensa una computadora',
    moduleNumber: 2,
    order: 2,
    description:
      'Comprende el modelo fundamental de cómo una computadora recibe información, la procesa y produce resultados.',
    explanation: `Todo programa de computadora, sin importar cuán complejo sea, puede describirse con tres componentes: **Entrada, Proceso y Salida**.

Este modelo es tan fundamental que tiene hasta su propio acrónimo: **EPE** (o en inglés, IPO: Input, Process, Output).

**Entrada (Input)**

Es la información que el programa recibe para trabajar. Las entradas pueden venir de:
- El teclado (el usuario escribe algo)
- Un archivo (el programa lee datos guardados)
- Una base de datos
- Sensores (temperatura, GPS, cámara)
- Otro programa

Ejemplos:
- En una calculadora: los números que escribes son la entrada.
- En un sistema de clima: los datos de temperatura del sensor son la entrada.
- En un buscador web: el texto que escribes en el buscador es la entrada.

**Proceso**

Es lo que el programa hace con los datos de entrada. El proceso transforma, calcula, compara o combina los datos.

Ejemplos:
- La calculadora suma, resta, multiplica o divide los números recibidos.
- El sistema de clima compara la temperatura con umbrales para determinar si hace frío o calor.
- El buscador web busca coincidencias del texto en su base de datos.

**Salida (Output)**

Es el resultado que el programa produce y entrega al usuario o a otro sistema. Las salidas pueden ser:
- Texto en pantalla
- Un archivo guardado
- Una acción (abrir una aplicación, enviar un correo)
- Un valor devuelto a otro programa

Ejemplos:
- La calculadora muestra el resultado de la operación.
- El sistema de clima muestra "18°C — Frío".
- El buscador web muestra la lista de resultados.

**¿Por qué es tan importante este modelo?**

Cuando entiendes un problema en términos de Entrada-Proceso-Salida, ya tienes la estructura de tu solución. Puedes identificar exactamente qué información necesitas, qué tienes que hacer con ella y qué debes producir.

Con práctica, pensar en EPE se vuelve automático. Ante cualquier problema, tu primera pregunta será: "¿cuál es la entrada? ¿cuál es la salida?"`,
    codeExample: `// ── El modelo Entrada → Proceso → Salida ─────────────────────────────────

// ── Ejemplo 1: Calculadora de propina ────────────────────────────────────
// ENTRADA: precio de la cuenta, porcentaje de propina deseado
// PROCESO: calcular el monto de la propina y el total
// SALIDA:  mostrar la propina y el total a pagar

INICIO
  LEER precio_cuenta       // ENTRADA
  LEER porcentaje_propina  // ENTRADA

  propina = precio_cuenta * (porcentaje_propina / 100)  // PROCESO
  total = precio_cuenta + propina                       // PROCESO

  MOSTRAR "Propina: " + propina    // SALIDA
  MOSTRAR "Total: " + total        // SALIDA
FIN

// ── Ejemplo 2: ¿Hace calor o frío? ───────────────────────────────────────
// ENTRADA: temperatura actual en grados Celsius
// PROCESO: comparar con umbrales de temperatura
// SALIDA:  mensaje sobre la condición del clima

INICIO
  LEER temperatura  // ENTRADA

  SI temperatura > 30 ENTONCES     // PROCESO
    MOSTRAR "Hace mucho calor"     // SALIDA
  SI NO, SI temperatura > 20 ENTONCES
    MOSTRAR "Temperatura agradable"
  SI NO, SI temperatura > 10 ENTONCES
    MOSTRAR "Hace fresco"
  SI NO
    MOSTRAR "Hace frío"
  FIN SI
FIN`,
    keyPoints: [
      'Todo programa tiene tres componentes: Entrada (datos que recibe), Proceso (lo que hace con ellos) y Salida (resultado que produce).',
      'Las entradas pueden venir del teclado, archivos, bases de datos, sensores u otros programas.',
      'El proceso transforma, calcula, compara o combina los datos de entrada.',
      'La salida puede ser texto en pantalla, archivos guardados, acciones o valores devueltos.',
      'Pensar en Entrada-Proceso-Salida es el primer paso para diseñar cualquier solución.',
    ],
    exercise: {
      description:
        'Para cada uno de estos programas, identifica la Entrada, el Proceso y la Salida: (A) Un programa que convierte temperaturas de Celsius a Fahrenheit. (B) Un programa que verifica si una persona es mayor de edad. (C) Un programa que calcula el precio final de un producto con impuesto del 16%. Escribe solo con palabras, sin código.',
      hint: 'Para (A): la entrada es la temperatura en Celsius. El proceso es aplicar la fórmula (F = C × 9/5 + 32). La salida es la temperatura en Fahrenheit. Sigue el mismo patrón para (B) y (C).',
    },
    quiz: [
      {
        question: 'En una aplicación de música, ¿cuál sería un ejemplo de "Entrada"?',
        options: [
          'La canción que suena por los altavoces',
          'El nombre de la canción que el usuario busca',
          'El volumen actual del sonido',
          'La lista de canciones reproducidas recientemente',
        ],
        correctAnswer: 'El nombre de la canción que el usuario busca',
        correctFeedback:
          'Correcto. La Entrada es la información que el usuario proporciona al programa para que lo procese. Cuando escribes el nombre de una canción para buscarla, eso es la Entrada.',
        incorrectFeedback:
          'No es correcto. La Entrada es la información que el programa recibe para trabajar. En este caso, es el nombre de la canción que el usuario escribe para buscarla. La canción que suena y la lista son resultados (Salidas) o estado interno.',
      },
      {
        question: '¿Cuál es el "Proceso" en un programa que calcula el IMC (Índice de Masa Corporal)?',
        options: [
          'El peso y la altura del usuario',
          'El número resultante del IMC',
          'La fórmula IMC = peso / (altura × altura)',
          'El mensaje "Peso normal" o "Sobrepeso"',
        ],
        correctAnswer: 'La fórmula IMC = peso / (altura × altura)',
        correctFeedback:
          'Correcto. El Proceso es la operación que transforma los datos de entrada en la salida. La fórmula del IMC es el proceso que convierte peso y altura (entradas) en el valor del IMC (salida).',
        incorrectFeedback:
          'No es correcto. El peso y la altura son la Entrada. El número del IMC y el mensaje son la Salida. El Proceso es la operación que conecta ambas: la fórmula de cálculo del IMC.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'la-importancia-de-ser-especifico',
    title: 'La importancia de ser específico',
    module: 'Cómo piensa una computadora',
    moduleNumber: 2,
    order: 3,
    description:
      'Aprende por qué la especificidad es la habilidad más importante al programar y cómo desarrollarla.',
    explanation: `En programación, la ambigüedad es el enemigo número uno. Una instrucción que puede interpretarse de dos maneras diferentes producirá resultados impredecibles, o simplemente no funcionará.

**¿Qué significa ser específico?**

Ser específico en programación significa que cada instrucción tiene **una sola interpretación posible**. No hay lugar para "más o menos", "algo parecido a" o "más o menos así".

**Ejemplos de instrucciones ambiguas vs. específicas**

❌ Ambiguo: "Agrega los números grandes"
¿Qué es "grande"? ¿Los mayores de 10? ¿Los mayores de 100? ¿Los que tienen más de 2 dígitos?

✓ Específico: "Suma todos los números que sean mayores que 50"

---

❌ Ambiguo: "Si el usuario no ingresa nada, haz algo"
¿Qué es "algo"? ¿Mostrar un error? ¿Usar un valor por defecto? ¿Cerrar el programa?

✓ Específico: "Si el usuario no ingresa ningún valor, mostrar el mensaje 'Por favor ingresa un número' y pedir el dato nuevamente"

---

❌ Ambiguo: "Ordena la lista"
¿De menor a mayor? ¿De mayor a menor? ¿Alfabéticamente?

✓ Específico: "Ordenar la lista de mayor a menor según el valor numérico"

**La precisión como hábito**

La buena noticia es que ser específico es un hábito que se desarrolla con práctica. Al principio, tendrás que esforzarte conscientemente para identificar ambigüedades. Con el tiempo, tu cerebro empezará a detectarlas automáticamente.

Una técnica útil: **leer tu instrucción como si fueras una máquina sin contexto**. ¿Podrías seguirla exactamente? ¿Hay alguna parte que "supone" algo que no se dijo explícitamente?

**Preguntas para detectar ambigüedad**

- ¿Qué pasa si el dato de entrada es cero?
- ¿Qué pasa si el dato de entrada es negativo?
- ¿Qué pasa si hay múltiples valores iguales?
- ¿Qué pasa si no hay datos?
- ¿Qué pasa si el usuario ingresa texto donde se esperaba un número?

Estas preguntas — los "casos borde" o "casos extremos" — son exactamente lo que distingue a un programador principiante de uno experimentado.`,
    codeExample: `// ── Especificidad en las instrucciones ───────────────────────────────────

// ❌ Instrucción ambigua:
INICIO
  Obtener nota del estudiante
  Si la nota es buena, el estudiante aprobó
FIN

// ✓ Instrucción específica:
INICIO
  LEER nota_del_estudiante  // un número entre 0 y 10

  SI nota_del_estudiante >= 6 Y nota_del_estudiante <= 10 ENTONCES
    MOSTRAR "Aprobado con nota: " + nota_del_estudiante
  SI NO, SI nota_del_estudiante >= 0 Y nota_del_estudiante < 6 ENTONCES
    MOSTRAR "Reprobado con nota: " + nota_del_estudiante
  SI NO
    MOSTRAR "Error: la nota debe ser un número entre 0 y 10"
  FIN SI
FIN

// Observa lo que agregamos siendo más específicos:
// 1. Definimos qué significa "buena" (>= 6)
// 2. Definimos el rango válido (0 a 10)
// 3. Manejamos el caso de datos inválidos
// 4. Los mensajes incluyen la nota para más contexto`,
    keyPoints: [
      'La ambigüedad es el enemigo número uno de la programación.',
      'Una instrucción específica tiene una sola interpretación posible.',
      'Leer tus instrucciones "como una máquina" ayuda a detectar ambigüedades.',
      'Los "casos borde" (cero, negativo, vacío) deben manejarse explícitamente.',
      'La especificidad es un hábito que se desarrolla con la práctica.',
    ],
    exercise: {
      description:
        'Identifica las ambigüedades en estas instrucciones y reescríbelas de forma más específica: (1) "Si el precio es alto, aplicar descuento." (2) "Verificar que el usuario existe antes de continuar." (3) "Si hay pocos productos en inventario, enviar alerta." Para cada una, define exactamente qué significa "alto", "existe" y "pocos".',
      hint: 'Para (1): define un valor concreto para "alto" (ej. mayor a $100). Para (2): explica cómo "verificar" que existe (buscar en una lista, comparar con una base de datos). Para (3): decide cuántas unidades es "pocos" (ej. menos de 5 unidades).',
    },
    quiz: [
      {
        question: '¿Por qué la ambigüedad es problemática en programación?',
        options: [
          'Porque los lenguajes de programación no la permiten',
          'Porque hace el código más largo y difícil de leer',
          'Porque una instrucción ambigua puede ejecutarse de formas inesperadas o producir resultados incorrectos',
          'Porque solo funciona en lenguajes avanzados',
        ],
        correctAnswer: 'Porque una instrucción ambigua puede ejecutarse de formas inesperadas o producir resultados incorrectos',
        correctFeedback:
          'Correcto. Cuando una instrucción puede interpretarse de múltiples maneras, la computadora la ejecutará de una forma que quizás no esperabas. La ambigüedad lleva a bugs difíciles de rastrear.',
        incorrectFeedback:
          'No es correcto. La ambigüedad en programación es problemática porque produce resultados impredecibles. Una instrucción con múltiples interpretaciones puede ejecutarse de formas inesperadas, creando errores difíciles de detectar.',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'que-puede-y-no-puede-hacer-una-computadora',
    title: '¿Qué puede y qué no puede hacer una computadora?',
    module: 'Cómo piensa una computadora',
    moduleNumber: 2,
    order: 4,
    description:
      'Conoce las capacidades reales de una computadora para diseñar mejores soluciones como programador.',
    explanation: `Para programar bien, necesitas entender las capacidades reales de una computadora. Ni más, ni menos. Sobrestimar lo que puede hacer lleva a instrucciones vagas. Subestimarlo lleva a no aprovechar su potencial.

**Lo que una computadora puede hacer MUY bien:**

1. **Calcular rápido:** Puede hacer millones de operaciones matemáticas por segundo, sin cansarse y sin errores.

2. **Almacenar y recuperar información:** Puede guardar cantidades enormes de datos y encontrar cualquier dato en milisegundos.

3. **Repetir sin cansarse:** Puede ejecutar el mismo proceso millones de veces exactamente igual. Los humanos nos aburrimos, distraemos o cometemos errores al repetir. Las computadoras no.

4. **Comparar y tomar decisiones simples:** Puede comparar dos valores (¿es mayor? ¿son iguales?) y actuar según el resultado. Esto es la base de toda la lógica de programación.

5. **Seguir instrucciones con precisión:** Si le das instrucciones exactas, las seguirá perfectamente.

**Lo que una computadora NO puede hacer:**

1. **Entender el contexto:** No sabe qué es "razonable" o "apropiado" en una situación.

2. **Improvisar o crear:** No puede inventar soluciones nuevas por su cuenta. Solo aplica lo que se le programó.

3. **Adivinar intenciones:** Si las instrucciones están mal, no puede deducir lo que querías.

4. **Tener juicio moral:** No puede evaluar si algo es "bueno" o "malo" por sí misma.

5. **Aprender sin que le enseñen explícitamente:** (Nota: la inteligencia artificial aprende, pero bajo patrones matemáticos muy específicos programados por humanos.)

**La implicación para el programador**

Conocer estos límites te ayuda a diseñar mejores soluciones. Para las cosas que la computadora hace bien, aprovéchalas al máximo. Para las cosas que no puede hacer, diseña instrucciones tan claras que no necesite improvisar.`,
    codeExample: `// ── Lo que una computadora hace bien ─────────────────────────────────────

// 1. Calcular rápido (esto sucede en milisegundos):
INICIO
  suma = 0
  REPETIR 1,000,000 veces:
    suma = suma + 1
  MOSTRAR suma  // → 1000000 (calculado instantáneamente)
FIN

// 2. Comparar y decidir (la base de toda lógica):
INICIO
  SI temperatura > 37.5 ENTONCES
    MOSTRAR "Fiebre detectada"
  SI NO
    MOSTRAR "Temperatura normal"
  FIN SI
FIN

// 3. Repetir sin errores (imposible para humanos):
INICIO
  PARA cada estudiante en la lista:
    calcular_promedio(estudiante)
    si_promedio >= 6: marcar como aprobado
    si no: marcar como reprobado
  FIN PARA
  // ¡Funciona igual para 5 estudiantes que para 50,000!
FIN

// ── Lo que necesita instrucciones claras ──────────────────────────────────
// La computadora no puede decidir qué hacer si no se lo dices:

// ❌ Esto NO funciona (ambiguo):
// "Si hay un error, manéjalo apropiadamente"

// ✓ Esto SÍ funciona (específico):
// "Si el número ingresado es negativo, mostrar mensaje de error y pedir el dato de nuevo"`,
    keyPoints: [
      'Las computadoras calculan muy rápido, almacenan grandes cantidades de datos y repiten tareas sin errores.',
      'Las computadoras no tienen sentido común, no improvisan ni entienden contexto.',
      'La fortaleza de una computadora está en su precisión y velocidad para seguir instrucciones.',
      'La debilidad de una computadora es su total dependencia de instrucciones bien escritas.',
      'Conocer estas características ayuda a diseñar mejores soluciones.',
    ],
    exercise: {
      description:
        'Para cada tarea, decide si es mejor que la haga una computadora o un humano, y explica por qué: (A) Revisar 10,000 facturas para detectar errores matemáticos. (B) Decidir si un cliente merece una excepción especial en la política de devoluciones. (C) Enviar el mismo correo de bienvenida a 5,000 nuevos usuarios. (D) Consolar a un cliente que tuvo una mala experiencia.',
      hint: 'Piensa: ¿la tarea requiere calcular/repetir con precisión, o requiere empatía/contexto/juicio? Las primeras son ideales para computadoras. Las segundas requieren intervención humana.',
    },
    quiz: [
      {
        question: '¿Cuál de estas tareas es más adecuada para una computadora?',
        options: [
          'Decidir si perdonar una deuda a un cliente con problemas financieros',
          'Sumar 50,000 registros de ventas para calcular el ingreso total del mes',
          'Evaluar si un candidato tiene la personalidad adecuada para un puesto',
          'Crear una obra de arte original que transmita emociones',
        ],
        correctAnswer: 'Sumar 50,000 registros de ventas para calcular el ingreso total del mes',
        correctFeedback:
          'Correcto. Sumar 50,000 registros es exactamente lo que una computadora hace mejor: cálculo preciso y repetición masiva sin errores ni cansancio. Hacerlo manualmente tomaría días y estaría lleno de errores.',
        incorrectFeedback:
          'No es correcto. Las decisiones que requieren empatía, contexto cultural, creatividad o juicio moral no son adecuadas para computadoras. La tarea ideal para una computadora es el cálculo masivo y preciso.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'traducir-acciones-humanas-a-instrucciones',
    title: 'Traducir acciones humanas a instrucciones de computadora',
    module: 'Cómo piensa una computadora',
    moduleNumber: 2,
    order: 5,
    description:
      'Practica el proceso de convertir tareas cotidianas en instrucciones precisas que una computadora pueda seguir.',
    explanation: `Ya sabes cómo piensa una computadora. Ahora viene la habilidad central de todo programador: **traducir** lo que un humano hace naturalmente en instrucciones que una computadora pueda ejecutar.

Esta traducción es un arte que se desarrolla con práctica. Aquí aprenderás el proceso.

**El proceso de traducción**

1. **Observa la tarea humana:** ¿Qué hace exactamente una persona cuando realiza esta tarea?

2. **Identifica cada micro-acción:** Las personas hacemos muchas cosas automáticamente. Hay que volverlas explícitas.

3. **Define las condiciones:** ¿Hay decisiones que se toman? ¿Cuándo se hace A y cuándo se hace B?

4. **Define las repeticiones:** ¿Hay pasos que se repiten?

5. **Escribe en forma de instrucciones:** Cada paso como una instrucción clara.

**Ejemplo completo: ordenar una lista de nombres**

Cuando un humano ordena una lista alfabéticamente, lo hace "de forma natural". Pero ¿qué está haciendo exactamente?

- Toma el primer nombre.
- Lo compara con el siguiente.
- Si están en orden, avanza.
- Si no están en orden, los intercambia.
- Repite el proceso hasta que no haya más intercambios.

Eso es un algoritmo de ordenamiento — uno de los más básicos en programación (burbuja). Lo que un humano hace "intuitivamente", una computadora lo hace paso a paso siguiendo estas instrucciones.

**Mini reto de este módulo**

Elige una acción que hagas todos los días (preparar café, calcular cuánto dinero te sobra, verificar si tienes mensajes nuevos). Tradúcela a instrucciones de computadora con: qué datos necesitas (entradas), qué pasos realizas (proceso) y qué resultado produces (salida).

Este es el primer gran ejercicio de programación: antes de escribir código, describir exactamente lo que debe hacer el programa.`,
    codeExample: `// ── Ejemplo: Verificar si hay mensajes nuevos ────────────────────────────
// Tarea humana: "Reviso si tengo mensajes sin leer en mi teléfono"

// ¿Qué hace exactamente un humano?
// 1. Toma el teléfono
// 2. Mira si hay alguna notificación
// 3. Si hay, la cuenta o las lee
// 4. Si no hay, sigue haciendo lo que estaba

// Traducción a instrucciones de computadora:
INICIO
  // ENTRADA
  LEER cantidad_mensajes_sin_leer

  // PROCESO + SALIDA
  SI cantidad_mensajes_sin_leer > 0 ENTONCES
    MOSTRAR "Tienes " + cantidad_mensajes_sin_leer + " mensajes sin leer"
    MOSTRAR "¿Deseas leerlos ahora? (sí/no)"
    LEER respuesta_usuario

    SI respuesta_usuario == "sí" ENTONCES
      MOSTRAR los_mensajes_sin_leer
      marcar_mensajes_como_leidos()
    FIN SI

  SI NO
    MOSTRAR "No tienes mensajes nuevos"
  FIN SI
FIN

// ── Observa lo que hicimos ────────────────────────────────────────────────
// Tomamos una acción de 2 segundos para un humano
// y la convertimos en ~10 instrucciones precisas.
// Esto es exactamente lo que hace un programador.`,
    keyPoints: [
      'Traducir acciones humanas a instrucciones de computadora es la habilidad central de la programación.',
      'Las personas realizan muchas micro-acciones automáticamente que deben hacerse explícitas para una computadora.',
      'El proceso: observar → identificar micro-acciones → definir condiciones → definir repeticiones → escribir instrucciones.',
      'Una tarea de 2 segundos para un humano puede requerir docenas de instrucciones para una computadora.',
      'Con práctica, esta traducción se vuelve natural y rápida.',
    ],
    exercise: {
      description:
        'Mini reto del módulo: Traduce esta tarea cotidiana a instrucciones de computadora: "Un cajero en una tienda calcula el cambio que debe darle al cliente." Identifica las entradas (¿qué datos necesita?), el proceso (¿qué calcula?) y la salida (¿qué hace con el resultado?). Escribe al menos 8 instrucciones específicas.',
      hint: 'Entradas: precio del producto, dinero que entrega el cliente. Proceso: verificar que el dinero es suficiente, calcular la diferencia. Salida: mostrar el cambio. Casos especiales: ¿qué pasa si el dinero no es suficiente? ¿qué pasa si es exacto?',
    },
    quiz: [
      {
        question: '¿Por qué una tarea que un humano hace en segundos puede requerir muchas instrucciones para una computadora?',
        options: [
          'Porque las computadoras son lentas comparadas con los humanos',
          'Porque los humanos realizamos muchas micro-acciones automáticas que no son obvias hasta que se analizan',
          'Porque los lenguajes de programación son ineficientes',
          'Porque las computadoras necesitan repetir cada instrucción múltiples veces',
        ],
        correctAnswer: 'Porque los humanos realizamos muchas micro-acciones automáticas que no son obvias hasta que se analizan',
        correctFeedback:
          'Correcto. Los humanos automatizamos docenas de micro-decisiones y acciones sin pensarlos conscientemente. Para una computadora, cada una de esas micro-acciones debe ser una instrucción explícita.',
        incorrectFeedback:
          'No es correcto. Las computadoras son mucho más rápidas que los humanos. La razón de las instrucciones detalladas es que los humanos automatizamos muchas micro-acciones inconscientemente. Al programar, debemos hacer cada una de esas acciones explícita.',
      },
      {
        question: '¿Cuál es el primer paso para traducir una tarea humana a instrucciones de computadora?',
        options: [
          'Abrir el editor de código y empezar a escribir',
          'Elegir el lenguaje de programación adecuado',
          'Observar exactamente qué hace una persona al realizar esa tarea',
          'Buscar en internet cómo hacerlo',
        ],
        correctAnswer: 'Observar exactamente qué hace una persona al realizar esa tarea',
        correctFeedback:
          'Correcto. Antes de escribir una sola línea de código, debes entender perfectamente la tarea. Observar y analizar lo que hace un humano es el punto de partida para diseñar las instrucciones.',
        incorrectFeedback:
          'No es correcto. El primer paso es analizar y entender la tarea humana. Abrir el editor de código o elegir el lenguaje son pasos posteriores. Sin entender primero qué debe hacer el programa, el código será incompleto o incorrecto.',
      },
    ],
  },
]

export const logicaModule2: Module = {
  number: 2,
  title: 'Cómo piensa una computadora',
  level: 'básico',
  lessons: lessonsLogicaModule2,
}
