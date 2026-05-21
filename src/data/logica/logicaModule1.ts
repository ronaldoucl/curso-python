import type { Lesson, Module } from '@/types'

export const lessonsLogicaModule1: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-la-logica-de-programacion',
    title: '¿Qué es la lógica de programación?',
    module: '¿Qué es la lógica de programación?',
    moduleNumber: 1,
    order: 1,
    description:
      'Descubre qué es la lógica de programación y por qué es la base de todo lo que harás como programador.',
    explanation: `La **lógica de programación** es la habilidad de pensar en pasos claros, ordenados y precisos para resolver un problema.

Antes de escribir código en cualquier lenguaje —Python, JavaScript, TypeScript o cualquier otro— necesitas aprender a **pensar como programador**. Eso es exactamente lo que es la lógica de programación.

**¿Qué significa "pensar como programador"?**

Imagina que necesitas explicarle a alguien que nunca ha visto un teléfono cómo hacer una llamada. No puedes decirle simplemente "llama a tu amigo". Tienes que ser mucho más específico:

1. Toma el teléfono con la mano.
2. Presiona el botón para encender la pantalla.
3. Ingresa tu código de desbloqueo.
4. Busca la aplicación de llamadas.
5. Escribe el número de tu amigo.
6. Presiona el botón verde de llamar.
7. Acerca el teléfono a tu oído y espera.

Eso es pensar con lógica de programación: descomponer una tarea en pasos exactos y ordenados.

**¿Por qué la lógica importa más que la sintaxis?**

Mucha gente empieza a aprender programación memorizando comandos o palabras clave de un lenguaje. Pero eso es como aprender a escribir copiando frases sin entender el idioma.

La lógica es el **pensamiento detrás del código**. La sintaxis es solo cómo ese pensamiento se escribe en un lenguaje específico.

Un programador con buena lógica puede aprender cualquier lenguaje de programación. Un programador que solo memoriza sintaxis se queda atascado cuando el lenguaje cambia.

**Ejemplos cotidianos de lógica**

La lógica de programación está por todos lados:

- Una receta de cocina: pasos en orden, ingredientes precisos, condiciones ("si la masa está pegajosa, agrega más harina").
- Un mapa: instrucciones para llegar de un punto A a un punto B.
- Un cajero automático: toma tu tarjeta, verifica tu PIN, te muestra opciones, procesa tu solicitud.

Todos estos son ejemplos de sistemas que siguen una lógica clara.

**¿Qué aprenderás en este curso?**

En este curso aprenderás a:
- Descomponer problemas en pasos pequeños y manejables.
- Crear algoritmos claros antes de escribir código.
- Entender qué son los datos y cómo se manipulan.
- Usar pseudocódigo para planificar soluciones.
- Pensar con estructura antes de tocar un teclado de programación.

Este conocimiento es tuyo para siempre. Funciona en Python, en JavaScript, en cualquier lenguaje que aprendas después.`,
    codeExample: `// ── Ejemplo de lógica cotidiana → pseudocódigo ───────────────────────────
// Tarea: Preparar una taza de café

INICIO
  Llenar la cafetera con agua
  Agregar café molido al filtro
  Encender la cafetera
  ESPERAR hasta que el café esté listo
  Tomar una taza
  Verter el café en la taza
  SI quieres azúcar:
    Agregar azúcar y revolver
  FIN SI
  Servir y disfrutar
FIN

// ── Observa la estructura ─────────────────────────────────────────────────
// Tiene un INICIO y un FIN
// Los pasos están en orden
// Hay una condición ("SI quieres azúcar")
// Cada instrucción es clara y específica
// Esto es lógica de programación aplicada a la vida real`,
    keyPoints: [
      'La lógica de programación es la habilidad de pensar en pasos claros y ordenados para resolver problemas.',
      'Es más importante que memorizar la sintaxis de un lenguaje específico.',
      'Un programador con buena lógica puede aprender cualquier lenguaje de programación.',
      'La lógica de programación está presente en la vida cotidiana: recetas, mapas, instrucciones.',
      'Aprender lógica primero te da una base sólida para cualquier lenguaje que estudies después.',
    ],
    exercise: {
      description:
        'Elige una tarea cotidiana que haces todos los días (lavarte los dientes, preparar el desayuno, ordenar tu cuarto). Escribe los pasos necesarios para completarla como si se los explicaras a alguien que nunca lo ha hecho. Sé lo más específico posible. ¿Cuántos pasos necesitaste?',
      hint: 'No te preocupes si tu lista tiene 10 o 20 pasos — eso es bueno. Los buenos programadores son muy precisos. Piensa en cada detalle que normalmente das por sentado.',
    },
    quiz: [
      {
        question: '¿Qué es la lógica de programación?',
        options: [
          'Un lenguaje de programación específico',
          'La habilidad de pensar en pasos claros y ordenados para resolver problemas',
          'Una herramienta para diseñar páginas web',
          'El conjunto de reglas gramaticales de Python',
        ],
        correctAnswer: 'La habilidad de pensar en pasos claros y ordenados para resolver problemas',
        correctFeedback:
          'Correcto. La lógica de programación es el pensamiento estructurado detrás del código, independiente de cualquier lenguaje específico.',
        incorrectFeedback:
          'No es correcto. La lógica de programación no es un lenguaje ni una herramienta específica. Es la habilidad de pensar en pasos precisos y ordenados para resolver cualquier tipo de problema.',
      },
      {
        question: '¿Por qué la lógica de programación es más importante que memorizar la sintaxis?',
        options: [
          'Porque la sintaxis no existe en programación',
          'Porque con buena lógica puedes aprender cualquier lenguaje; con solo sintaxis, te quedas atascado',
          'Porque la sintaxis se puede copiar de internet',
          'Porque la lógica es más fácil de memorizar',
        ],
        correctAnswer: 'Porque con buena lógica puedes aprender cualquier lenguaje; con solo sintaxis, te quedas atascado',
        correctFeedback:
          'Correcto. La lógica es el pensamiento universal detrás del código. Si entiendes la lógica, puedes adaptarla a cualquier lenguaje. Si solo memorizas sintaxis, debes empezar de cero con cada lenguaje.',
        incorrectFeedback:
          'No es correcto. La lógica es el pensamiento estructurado que funciona en todos los lenguajes. Un programador con buena lógica puede aprender Python, JavaScript, TypeScript y cualquier otro lenguaje con mayor facilidad.',
      },
      {
        question: '¿Cuál de estos ejemplos cotidianos representa mejor la lógica de programación?',
        options: [
          'Ver una película sin subtítulos',
          'Una receta de cocina con pasos ordenados e ingredientes precisos',
          'Adivinar el ingrediente secreto de un plato',
          'Escuchar música de fondo mientras trabajas',
        ],
        correctAnswer: 'Una receta de cocina con pasos ordenados e ingredientes precisos',
        correctFeedback:
          'Correcto. Una receta tiene exactamente las características de un programa: pasos en orden, instrucciones precisas, condiciones ("si la masa está pegajosa, agrega más harina") y un resultado esperado.',
        incorrectFeedback:
          'No es correcto. La lógica de programación se parece más a seguir una receta: pasos en orden, instrucciones claras y un objetivo específico. Las actividades que dependen de la intuición o el azar no tienen esta estructura.',
      },
      {
        question: '¿Qué aprenderás en este curso de Lógica de Programación?',
        options: [
          'La sintaxis completa de Python y JavaScript',
          'A crear páginas web con HTML y CSS',
          'A descomponer problemas, crear algoritmos y usar pseudocódigo',
          'A configurar servidores y bases de datos',
        ],
        correctAnswer: 'A descomponer problemas, crear algoritmos y usar pseudocódigo',
        correctFeedback:
          'Correcto. Este curso te enseña a pensar como programador: descomponer problemas, crear algoritmos claros y usar pseudocódigo antes de escribir código real en cualquier lenguaje.',
        incorrectFeedback:
          'No es correcto. Este curso no enseña sintaxis de lenguajes específicos ni tecnologías web. Su objetivo es enseñarte a pensar estructuradamente: descomponer problemas, crear algoritmos y planificar con pseudocódigo.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'logica-vs-sintaxis',
    title: 'Lógica vs. sintaxis: la diferencia fundamental',
    module: '¿Qué es la lógica de programación?',
    moduleNumber: 1,
    order: 2,
    description:
      'Entiende la diferencia entre la lógica (el pensamiento) y la sintaxis (las reglas del lenguaje), y por qué esta diferencia importa.',
    explanation: `Cuando alguien aprende a programar, muchas veces confunde dos cosas muy diferentes: **la lógica** y **la sintaxis**. Entender esta diferencia es fundamental.

**¿Qué es la lógica?**

La lógica es el **pensamiento detrás del código**. Es cómo organizas los pasos para resolver un problema. La lógica es universal: funciona igual en Python, en JavaScript, en TypeScript o en cualquier otro lenguaje.

Por ejemplo, la lógica de "calcular si un número es par" es siempre la misma:
- Divide el número entre 2.
- Si el resto es 0, el número es par.
- Si no, es impar.

Esa idea existe en tu cabeza antes de escribir una sola línea de código.

**¿Qué es la sintaxis?**

La sintaxis es la **forma específica de escribir** ese pensamiento en un lenguaje concreto. Cada lenguaje tiene sus propias reglas: cómo se escribe una condición, cómo se define una función, qué palabras clave se usan.

La misma lógica de "número par" en diferentes lenguajes:

\`\`\`
// Pseudocódigo (lógica pura)
SI numero MOD 2 == 0 ENTONCES
  MOSTRAR "Es par"
SI NO
  MOSTRAR "Es impar"

// Python (sintaxis de Python)
if numero % 2 == 0:
    print("Es par")
else:
    print("Es impar")

// JavaScript (sintaxis de JavaScript)
if (numero % 2 === 0) {
  console.log("Es par")
} else {
  console.log("Es impar")
}
\`\`\`

¿Ves? La **lógica es idéntica**. Solo cambia cómo se escribe (la sintaxis).

**¿Por qué importa esta diferencia?**

Si aprendes primero la lógica, cuando cambias de lenguaje solo tienes que aprender nuevas "palabras" — no nuevas ideas. Es como aprender el concepto de "saludar" y luego aprender cómo se dice en español, inglés o francés.

Si memorizas solo la sintaxis sin entender la lógica, cada nuevo lenguaje te parece completamente diferente y tienes que "empezar de cero".

**Un error común de principiantes**

Muchos estudiantes buscan memorizar todos los comandos de Python antes de entender por qué se usan. Después de un tiempo se frustran porque el código "no les sale".

La razón es simple: sin lógica, el código es solo una colección de palabras sin sentido. Con lógica, cada línea tiene un propósito claro.`,
    codeExample: `// ── La misma lógica en diferentes lenguajes ──────────────────────────────
// Tarea: Determinar si un estudiante aprobó (nota >= 6)

// ── Pseudocódigo (lógica universal) ──────────────────────────────────────
INICIO
  LEER nota
  SI nota >= 6 ENTONCES
    MOSTRAR "Aprobado"
  SI NO
    MOSTRAR "Reprobado"
  FIN SI
FIN

// ── Python (la misma lógica, otra sintaxis) ───────────────────────────────
nota = float(input("Ingresa la nota: "))
if nota >= 6:
    print("Aprobado")
else:
    print("Reprobado")

// ── JavaScript (la misma lógica, otra sintaxis) ───────────────────────────
const nota = parseFloat(prompt("Ingresa la nota:"))
if (nota >= 6) {
  console.log("Aprobado")
} else {
  console.log("Reprobado")
}

// La lógica (el pensamiento) no cambia.
// Solo cambia la forma de escribirla (la sintaxis).`,
    keyPoints: [
      'La lógica es el pensamiento detrás del código; la sintaxis es cómo se escribe ese pensamiento.',
      'La lógica es universal: funciona igual en todos los lenguajes de programación.',
      'La sintaxis varía entre lenguajes, pero la lógica subyacente es la misma.',
      'Aprender lógica primero hace que cambiar de lenguaje sea mucho más fácil.',
      'Memorizar sintaxis sin entender la lógica lleva a la frustración y al estancamiento.',
    ],
    exercise: {
      description:
        'Lee este pseudocódigo y explica en tus propias palabras qué hace: "LEER precio. SI precio > 100 ENTONCES aplicar descuento del 10% AL precio. MOSTRAR precio final". No necesitas saber ningún lenguaje de programación para entenderlo. ¿Lo puedes describir con palabras normales?',
      hint: 'El pseudocódigo está diseñado para ser leído como texto normal. Intenta "traducirlo" a una explicación en español de todos los días. Después piensa: ¿cambiaría la idea principal si esto estuviera en Python o en JavaScript?',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre lógica y sintaxis?',
        options: [
          'La lógica es para expertos y la sintaxis es para principiantes',
          'La lógica es el pensamiento universal; la sintaxis es cómo se escribe en un lenguaje específico',
          'La lógica solo funciona en Python; la sintaxis funciona en todos los lenguajes',
          'No hay diferencia, son lo mismo',
        ],
        correctAnswer: 'La lógica es el pensamiento universal; la sintaxis es cómo se escribe en un lenguaje específico',
        correctFeedback:
          'Correcto. La lógica es la idea o el plan — funciona en cualquier lenguaje. La sintaxis son las reglas específicas de cómo escribir esa idea en Python, JavaScript, etc.',
        incorrectFeedback:
          'No es correcto. La lógica es el pensamiento estructurado que existe en tu mente antes de escribir código — es universal. La sintaxis son las reglas específicas de escritura de cada lenguaje.',
      },
      {
        question: 'Si aprendes bien la lógica de programación, ¿qué pasa cuando cambias de lenguaje?',
        options: [
          'Tienes que empezar completamente de cero',
          'Solo necesitas aprender la nueva sintaxis; la lógica ya la tienes',
          'La lógica cambia por completo en cada lenguaje',
          'No puedes usar la lógica de un lenguaje en otro',
        ],
        correctAnswer: 'Solo necesitas aprender la nueva sintaxis; la lógica ya la tienes',
        correctFeedback:
          'Correcto. La lógica es transferible. Si ya sabes cómo resolver un problema paso a paso, solo necesitas aprender cómo escribirlo en el nuevo lenguaje — las ideas son las mismas.',
        incorrectFeedback:
          'No es correcto. La lógica no cambia entre lenguajes. Si aprendes a pensar estructuradamente, al cambiar de lenguaje solo necesitas aprender nuevas "palabras" (sintaxis), no nuevas ideas.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'instrucciones-claras-en-la-vida-cotidiana',
    title: 'Instrucciones claras en la vida cotidiana',
    module: '¿Qué es la lógica de programación?',
    moduleNumber: 1,
    order: 3,
    description:
      'Aprende a reconocer la lógica de programación en situaciones cotidianas y practica escribir instrucciones precisas.',
    explanation: `Antes de escribir una sola línea de código, necesitas entrenar algo que ya usas todos los días: **dar instrucciones claras**.

El problema es que en la vida cotidiana tomamos atajos. Le dices a un amigo "ve al supermercado y trae leche" y él lo entiende. Pero una computadora no puede rellenar los espacios en blanco. Una computadora necesita **instrucciones completas y sin ambigüedad**.

**El experimento del robot**

Imagina que tienes un robot al que debes darle instrucciones para hacer un sándwich. El robot solo hace exactamente lo que le dices, ni más ni menos.

Si le dices "pon mantequilla en el pan", el robot podría:
- Poner toda la barra de mantequilla sin abrir.
- Poner el paquete de mantequilla encima del pan sin untarla.
- No saber de qué pan hablas si hay varios.

Las instrucciones para el robot necesitan ser mucho más precisas:
1. Toma una rebanada de pan del paquete.
2. Abre el envase de mantequilla.
3. Toma el cuchillo.
4. Sumerge el cuchillo en la mantequilla para tomar una pequeña porción.
5. Unta la mantequilla sobre la superficie del pan con movimientos horizontales.

¿Ves la diferencia? **Las computadoras son como ese robot.**

**Características de las instrucciones claras**

Una buena instrucción tiene estas características:

1. **Es específica:** No dice "algo", dice exactamente qué.
2. **Es ordenada:** Viene después del paso anterior y antes del siguiente.
3. **No tiene ambigüedad:** Solo puede interpretarse de una manera.
4. **Tiene un propósito claro:** Sirve para algo dentro del proceso.

**Entrenando la precisión**

Practicar escribir instrucciones claras es el primer entrenamiento de un programador. Con el tiempo, este pensamiento se vuelve natural.

Cuando veas un problema, automáticamente empezarás a pensar: "¿Cuál es el primer paso? ¿Qué necesito saber antes de empezar? ¿Qué pasa si algo falla?"`,
    codeExample: `// ── Instrucciones ambiguas vs. instrucciones claras ──────────────────────

// ❌ Instrucciones ambiguas (como le hablarías a un amigo):
// "Ve al banco, saca algo de dinero y paga el servicio"

// ✓ Instrucciones claras (como se las darías a una computadora):
INICIO
  Ir a la dirección del banco: Calle 5 #123
  Entrar al edificio
  Tomar un número de atención
  Esperar turno
  Cuando sea tu turno, acercarte a la ventanilla
  Decir al cajero: "Quiero retirar 200 pesos"
  Mostrar identificación
  Recibir el dinero
  Ir a la oficina de servicios en Calle 8 #456
  Dar tu número de cuenta al cajero
  Pagar exactamente 150 pesos
  Guardar el comprobante de pago
FIN

// ── Observa lo que cambió ─────────────────────────────────────────────────
// Las instrucciones claras no asumen nada.
// Especifican direcciones, cantidades, acciones concretas.
// Cada paso tiene un propósito definido.
// Este nivel de precisión es lo que necesita una computadora.`,
    keyPoints: [
      'Las computadoras solo hacen exactamente lo que se les indica, sin interpretar ni rellenar espacios en blanco.',
      'Las instrucciones claras son específicas, ordenadas, sin ambigüedad y con propósito definido.',
      'Practicar escribir instrucciones precisas es el primer entrenamiento de un programador.',
      'En la vida cotidiana tomamos atajos que las computadoras no pueden seguir.',
      'Con práctica, el pensamiento preciso se vuelve natural y automático.',
    ],
    exercise: {
      description:
        'Escribe las instrucciones paso a paso para llegar desde donde estás ahora hasta una tienda cercana. Imagina que se las das a alguien que nunca ha estado en tu ciudad. Incluye giros, nombres de calles, señales de referencia. Luego pregúntate: ¿son estas instrucciones tan claras que no hay forma de malinterpretarlas?',
      hint: 'Piensa en: ¿qué pasa si la persona está parada mirando en la dirección equivocada? ¿Qué tan lejos está cada giro? ¿Cómo sabe cuándo llegó? Cada detalle que das por sentado es una instrucción que falta.',
    },
    quiz: [
      {
        question: '¿Por qué las computadoras necesitan instrucciones más precisas que los humanos?',
        options: [
          'Porque las computadoras son más inteligentes y necesitan más información',
          'Porque las computadoras no interpretan ni rellenan espacios en blanco: hacen exactamente lo que se les dice',
          'Porque las computadoras son lentas y necesitan pasos extra',
          'Porque las computadoras no entienden el idioma español',
        ],
        correctAnswer: 'Porque las computadoras no interpretan ni rellenan espacios en blanco: hacen exactamente lo que se les dice',
        correctFeedback:
          'Correcto. Una computadora no tiene sentido común ni contexto. Si una instrucción es ambigua, la ejecutará de una manera que quizás no esperabas. Por eso la precisión es esencial.',
        incorrectFeedback:
          'No es correcto. Las computadoras no son más ni menos inteligentes — simplemente no interpretan. Ejecutan exactamente lo que se les indica, sin asumir nada. Por eso las instrucciones deben ser completamente precisas.',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'del-problema-a-la-solucion',
    title: 'Del problema a la solución: el camino del programador',
    module: '¿Qué es la lógica de programación?',
    moduleNumber: 1,
    order: 4,
    description:
      'Aprende el proceso mental que usan los programadores para transformar un problema en una solución paso a paso.',
    explanation: `Cuando un programador se enfrenta a un problema, no abre el editor de código inmediatamente. Primero **piensa**. El código es el último paso, no el primero.

El camino de un problema a su solución tiene etapas. Aprenderlas te ahorrará horas de frustración.

**Etapa 1: Entender el problema**

Antes de resolver cualquier cosa, debes entender perfectamente qué se está pidiendo. Muchos errores de programación ocurren porque el programador empezó a escribir código sin entender completamente el problema.

Pregúntate:
- ¿Qué datos tengo disponibles?
- ¿Qué resultado necesito producir?
- ¿Hay casos especiales que debo considerar?

**Etapa 2: Descomponer el problema**

Un problema grande parece imposible. Los mismos problemas divididos en partes pequeñas son manejables.

Si el problema es "crear un sistema para calcular el promedio de un grupo de estudiantes", puedes dividirlo en:
1. Pedir las notas de cada estudiante.
2. Sumar todas las notas.
3. Dividir la suma entre el número de estudiantes.
4. Mostrar el promedio.

**Etapa 3: Planificar la solución**

Antes de escribir código, esboza la solución. Muchos programadores usan papel y lápiz o pseudocódigo (lo aprenderás pronto). Este plan es tu mapa antes de construir.

**Etapa 4: Implementar**

Recién aquí escribes código. Con un plan claro, la implementación es mucho más rápida y con menos errores.

**Etapa 5: Verificar**

¿Funciona para el caso principal? ¿Y para los casos extremos? Un buen programador prueba su solución con diferentes escenarios.

**El pensamiento computacional**

Este proceso — entender, descomponer, planificar, implementar, verificar — se llama **pensamiento computacional**. No es solo para programadores: es una habilidad útil para resolver cualquier tipo de problema en la vida.`,
    codeExample: `// ── Ejemplo: del problema al pseudocódigo ────────────────────────────────

// PROBLEMA:
// Calcular el costo total de una compra con descuento.
// Regla: si el total supera $100, aplicar 15% de descuento.

// ── Etapa 1: Entender el problema ────────────────────────────────────────
// Datos que tengo: precio de productos, regla de descuento
// Resultado que necesito: costo total (con o sin descuento)
// Caso especial: ¿qué pasa si compra exactamente $100? (sin descuento)

// ── Etapa 2: Descomponer ─────────────────────────────────────────────────
// Paso 1: Obtener el precio total de los productos
// Paso 2: Verificar si supera $100
// Paso 3: Si supera, calcular y aplicar el 15%
// Paso 4: Mostrar el total final

// ── Etapa 3: Planificar (pseudocódigo) ───────────────────────────────────
INICIO
  LEER total_productos
  SI total_productos > 100 ENTONCES
    descuento = total_productos * 0.15
    total_final = total_productos - descuento
    MOSTRAR "Se aplicó descuento de: " + descuento
  SI NO
    total_final = total_productos
  FIN SI
  MOSTRAR "Total a pagar: " + total_final
FIN

// ── El código vendría después ─────────────────────────────────────────────
// Con este plan claro, escribir Python o JavaScript es mucho más simple.`,
    keyPoints: [
      'El código es el último paso, no el primero. Primero piensa, luego programa.',
      'El proceso: entender → descomponer → planificar → implementar → verificar.',
      'Descomponer un problema grande en partes pequeñas lo hace manejable.',
      'Planificar con pseudocódigo antes de escribir código evita errores y ahorra tiempo.',
      'Este proceso se llama pensamiento computacional y es útil más allá de la programación.',
    ],
    exercise: {
      description:
        'Practica las etapas 1 y 2 con este problema: "Un alumno tiene 3 notas. Necesito saber si aprobó el curso (promedio >= 6) y mostrar un mensaje personalizado con su resultado." Escribe: (1) Los datos que tienes. (2) El resultado que necesitas. (3) Los pasos para resolverlo (sin código, solo con palabras).',
      hint: 'Para la etapa 1: ¿qué información te dan? ¿qué tienes que calcular? ¿qué condición determina si aprobó? Para la etapa 2: ¿puedes dividirlo en 3 o 4 pasos simples? Piensa: obtener → calcular → comparar → mostrar.',
    },
    quiz: [
      {
        question: 'En el proceso de resolver un problema de programación, ¿cuándo se debe escribir el código?',
        options: [
          'Siempre primero, para ver qué funciona y qué no',
          'Al final, después de entender, descomponer y planificar la solución',
          'Al mismo tiempo que se piensa el problema',
          'Solo después de haber probado todas las posibilidades',
        ],
        correctAnswer: 'Al final, después de entender, descomponer y planificar la solución',
        correctFeedback:
          'Correcto. El código es el último paso. Los programadores experimentados pasan más tiempo pensando y planificando que escribiendo código. Esto reduce errores y hace el proceso más eficiente.',
        incorrectFeedback:
          'No es correcto. Escribir código primero sin entender el problema lleva a soluciones incompletas o incorrectas. El proceso correcto es: entender → descomponer → planificar → y solo entonces implementar.',
      },
      {
        question: '¿Qué significa "descomponer" un problema?',
        options: [
          'Eliminar las partes difíciles del problema',
          'Dividir el problema grande en partes pequeñas y manejables',
          'Resolver el problema de mayor a menor importancia',
          'Ignorar los casos extremos y enfocarse en el caso principal',
        ],
        correctAnswer: 'Dividir el problema grande en partes pequeñas y manejables',
        correctFeedback:
          'Correcto. La descomposición convierte un problema abrumador en una serie de pasos pequeños que se pueden resolver uno a la vez. Es una de las habilidades más valiosas de un programador.',
        incorrectFeedback:
          'No es correcto. Descomponer significa dividir, no eliminar. Un problema grande se vuelve manejable cuando lo separas en partes pequeñas que puedes resolver de forma individual y ordenada.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'tu-primera-secuencia-logica',
    title: 'Tu primera secuencia lógica',
    module: '¿Qué es la lógica de programación?',
    moduleNumber: 1,
    order: 5,
    description:
      'Crea tu primera secuencia lógica completa aplicando todo lo aprendido en este módulo.',
    explanation: `Has aprendido qué es la lógica, la diferencia con la sintaxis, cómo dar instrucciones claras y el proceso de resolver problemas. Ahora es momento de crear **tu primera secuencia lógica completa**.

**¿Qué es una secuencia lógica?**

Una secuencia lógica es un conjunto de instrucciones ordenadas que, al seguirse paso a paso, producen un resultado esperado. Es la forma más básica de algoritmo.

Toda secuencia lógica tiene tres partes:

1. **Entrada:** Los datos que necesitas para empezar.
2. **Proceso:** Las operaciones que transforman esos datos.
3. **Salida:** El resultado que produces.

**Ejemplo con el mundo real**

Tarea: Calcular cuánto paga una persona por una llamada telefónica.
- **Entrada:** duración de la llamada (minutos), tarifa por minuto.
- **Proceso:** multiplicar duración × tarifa.
- **Salida:** costo total de la llamada.

Esta estructura — entrada, proceso, salida — es universal. Funciona para cualquier problema que vayas a resolver como programador.

**Las tres preguntas del programador**

Antes de escribir cualquier solución, hazte siempre estas tres preguntas:

1. **¿Qué datos necesito?** (Entrada)
2. **¿Qué tengo que hacer con esos datos?** (Proceso)
3. **¿Qué resultado debo producir?** (Salida)

Cuando puedas responder estas tres preguntas con claridad, ya tienes el 80% del trabajo hecho. El código es solo traducir esas respuestas a un lenguaje que la computadora entienda.

**Mini reto de este módulo**

Para completar este módulo, escribe los pasos para resolver una tarea cotidiana usando la estructura entrada → proceso → salida. Elige algo simple: calcular el cambio en una tienda, saber si tienes suficiente dinero para algo, o determinar qué tan lejos está un destino.

Con esto terminas el Módulo 1. Has dado el primer gran paso para pensar como programador.`,
    codeExample: `// ── Estructura de una secuencia lógica ───────────────────────────────────
// Toda solución tiene: Entrada → Proceso → Salida

// ── Ejemplo 1: Calcular el costo de un taxi ───────────────────────────────
INICIO
  // ENTRADA
  LEER kilometros_recorridos
  LEER tarifa_por_km   // precio por cada kilómetro

  // PROCESO
  costo_total = kilometros_recorridos * tarifa_por_km

  // SALIDA
  MOSTRAR "El costo del viaje es: " + costo_total
FIN

// ── Ejemplo 2: Saber si un número es mayor que otro ───────────────────────
INICIO
  // ENTRADA
  LEER numero_a
  LEER numero_b

  // PROCESO + SALIDA
  SI numero_a > numero_b ENTONCES
    MOSTRAR numero_a + " es el mayor"
  SI NO
    MOSTRAR numero_b + " es mayor o igual"
  FIN SI
FIN

// ── Las tres preguntas que debes hacerte siempre ──────────────────────────
// 1. ¿Qué datos necesito?     → ENTRADA
// 2. ¿Qué hago con esos datos? → PROCESO
// 3. ¿Qué resultado produzco?  → SALIDA`,
    keyPoints: [
      'Una secuencia lógica tiene tres partes: Entrada, Proceso y Salida.',
      'Antes de resolver cualquier problema, identifica qué datos necesitas y qué resultado debes producir.',
      'Las tres preguntas del programador: ¿Qué datos necesito? ¿Qué hago con ellos? ¿Qué resultado produzco?',
      'La estructura Entrada → Proceso → Salida es universal para cualquier problema de programación.',
      'Cuando puedes responder las tres preguntas con claridad, ya tienes el 80% del trabajo hecho.',
    ],
    exercise: {
      description:
        'Mini reto del módulo: Elige UNA de estas situaciones y escribe la secuencia lógica completa con las tres partes (Entrada, Proceso, Salida): (A) Calcular el cambio que devuelve una tienda. (B) Determinar si tienes suficiente dinero para comprar un producto. (C) Calcular cuántos minutos tarda un viaje según la distancia y la velocidad. No uses código, solo palabras y pseudocódigo simple.',
      hint: 'Para (A): ¿qué datos necesitas? (precio del producto y dinero entregado). ¿Cuál es la operación? (resta). ¿Qué muestras? (el cambio). Sigue ese patrón para la opción que elijas.',
    },
    quiz: [
      {
        question: '¿Cuáles son las tres partes de una secuencia lógica?',
        options: [
          'Variables, funciones y bucles',
          'Entrada, proceso y salida',
          'Inicio, desarrollo y final',
          'Datos, código y resultado',
        ],
        correctAnswer: 'Entrada, proceso y salida',
        correctFeedback:
          'Correcto. Toda solución computacional sigue esta estructura: los datos que entran (Entrada), las operaciones que los transforman (Proceso) y el resultado que se produce (Salida).',
        incorrectFeedback:
          'No es correcto. Las tres partes fundamentales de una secuencia lógica son Entrada (los datos que necesitas), Proceso (las operaciones) y Salida (el resultado producido). Esta estructura es válida para cualquier problema.',
      },
      {
        question: 'Para calcular el área de un rectángulo, ¿cuál sería la "Entrada"?',
        options: [
          'El resultado del cálculo (el área)',
          'La operación de multiplicar',
          'Los valores del ancho y el alto del rectángulo',
          'La fórmula Área = base × altura',
        ],
        correctAnswer: 'Los valores del ancho y el alto del rectángulo',
        correctFeedback:
          'Correcto. La Entrada son los datos que necesitas antes de hacer cualquier cálculo. Para calcular el área, necesitas saber el ancho y el alto — esos son los datos de entrada.',
        incorrectFeedback:
          'No es correcto. La Entrada son los datos que necesitas al inicio. Para calcular el área de un rectángulo, los datos de entrada son las medidas: el ancho y el alto. El proceso es multiplicarlos, y la salida es el área calculada.',
      },
      {
        question: '¿Por qué identificar la Entrada y la Salida antes de programar es importante?',
        options: [
          'Solo es necesario en lenguajes de programación avanzados',
          'Porque el código se escribe de atrás hacia adelante',
          'Porque tener claridad sobre qué datos necesitas y qué resultado produces define toda la solución',
          'Solo importa para programas muy grandes',
        ],
        correctAnswer: 'Porque tener claridad sobre qué datos necesitas y qué resultado produces define toda la solución',
        correctFeedback:
          'Correcto. Saber qué datos tienes y qué resultado necesitas produce es el mapa de tu solución. Con esa claridad, el proceso (los pasos intermedios) se vuelve mucho más fácil de diseñar.',
        incorrectFeedback:
          'No es correcto. Identificar la Entrada y la Salida es el primer paso para cualquier programa, independientemente del tamaño. Cuando sabes de dónde vienes y adónde vas, el camino del proceso se vuelve claro.',
      },
    ],
  },
]

export const logicaModule1: Module = {
  number: 1,
  title: '¿Qué es la lógica de programación?',
  level: 'básico',
  lessons: lessonsLogicaModule1,
}
