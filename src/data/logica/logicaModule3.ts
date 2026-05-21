import type { Lesson, Module } from '@/types'

export const lessonsLogicaModule3: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-un-algoritmo',
    title: '¿Qué es un algoritmo?',
    module: 'Algoritmos: instrucciones paso a paso',
    moduleNumber: 3,
    order: 1,
    description:
      'Descubre qué es un algoritmo, por qué es la base de toda la programación y cómo reconocerlos en la vida cotidiana.',
    explanation: `La palabra "algoritmo" suena técnica y compleja, pero el concepto es algo que ya usas todos los días sin saberlo.

**Definición simple**

Un algoritmo es un **conjunto finito de instrucciones ordenadas** que resuelven un problema específico.

Tres palabras clave en esa definición:
- **Finito:** Tiene un número limitado de pasos. No puede ir al infinito.
- **Ordenado:** Los pasos van en una secuencia específica. El orden importa.
- **Resuelve un problema:** Tiene un propósito claro y produce un resultado.

**Algoritmos en la vida cotidiana**

Ya conoces muchos algoritmos sin llamarlos así:

- **Receta de cocina:** Ingredientes (datos de entrada) + pasos en orden (proceso) = plato terminado (resultado).
- **Instrucciones de montaje de un mueble:** Pasos numerados, en orden, que producen un mueble armado.
- **Indicaciones para llegar a un lugar:** Pasos secuenciales que te llevan del punto A al punto B.

Todos son algoritmos.

**¿Por qué son importantes en programación?**

Todo programa de computadora es, en esencia, un algoritmo. Cuando escribes código, estás escribiendo un algoritmo en el lenguaje de la máquina.

La calidad de tu algoritmo determina la calidad de tu programa. Un algoritmo malo produce un programa lento, incorrecto o difícil de mantener. Un buen algoritmo produce un programa eficiente y confiable.

**Propiedades de un buen algoritmo**

1. **Correcto:** Produce el resultado esperado para cualquier entrada válida.
2. **Claro:** Cada paso es comprensible y no tiene ambigüedad.
3. **Finito:** Termina en algún momento (no queda atrapado en un bucle eterno).
4. **Eficiente:** No hace pasos innecesarios.
5. **General:** Funciona para diferentes valores de entrada, no solo para un caso específico.

**El primer gran paso en programación**

Antes de aprender cualquier lenguaje de programación, un buen programador aprende a diseñar algoritmos. El código es solo la forma de expresar ese algoritmo en un lenguaje específico.

Si tu algoritmo es correcto, traducirlo a Python, JavaScript o cualquier otro lenguaje es relativamente sencillo.`,
    codeExample: `// ── Algoritmo: encontrar el número mayor entre dos ───────────────────────

// Descripción del problema:
// Dado dos números, determinar cuál es el mayor.

// ── Algoritmo en lenguaje natural ────────────────────────────────────────
// 1. Recibir el primer número
// 2. Recibir el segundo número
// 3. Comparar ambos números
// 4. Si el primero es mayor, reportar el primero
// 5. Si el segundo es mayor, reportar el segundo
// 6. Si son iguales, reportar que son iguales

// ── El mismo algoritmo en pseudocódigo ───────────────────────────────────
INICIO
  LEER numero_a
  LEER numero_b

  SI numero_a > numero_b ENTONCES
    MOSTRAR numero_a + " es el mayor"
  SI NO, SI numero_b > numero_a ENTONCES
    MOSTRAR numero_b + " es el mayor"
  SI NO
    MOSTRAR "Los dos números son iguales"
  FIN SI
FIN

// Este algoritmo:
// ✓ Es finito (termina siempre)
// ✓ Es correcto (cubre todos los casos)
// ✓ Es claro (cada paso es comprensible)
// ✓ Es eficiente (no hay pasos innecesarios)
// ✓ Es general (funciona con cualquier par de números)`,
    keyPoints: [
      'Un algoritmo es un conjunto finito de instrucciones ordenadas que resuelven un problema específico.',
      'Todo programa de computadora es un algoritmo escrito en un lenguaje de programación.',
      'Un buen algoritmo es correcto, claro, finito, eficiente y general.',
      'Los algoritmos están presentes en la vida cotidiana: recetas, instrucciones de montaje, indicaciones.',
      'La calidad del algoritmo determina la calidad del programa resultante.',
    ],
    exercise: {
      description:
        'Escribe un algoritmo en lenguaje natural (sin pseudocódigo, solo con palabras) para determinar cuánto dinero recibirá cada persona si se reparte una cantidad de dinero en partes iguales entre un grupo de personas. Incluye las propiedades de un buen algoritmo: que sea correcto, claro, finito y general.',
      hint: 'Entradas: el total de dinero y la cantidad de personas. Proceso: dividir. Salida: la cantidad por persona. Caso especial: ¿qué pasa si hay 0 personas? Eso es un caso borde que un buen algoritmo debe manejar.',
    },
    quiz: [
      {
        question: '¿Cuáles son las tres características que debe tener un algoritmo según su definición básica?',
        options: [
          'Rápido, gratuito y en español',
          'Finito, ordenado y que resuelva un problema específico',
          'Escrito en Python, lógico y detallado',
          'Simple, corto y fácil de leer',
        ],
        correctAnswer: 'Finito, ordenado y que resuelva un problema específico',
        correctFeedback:
          'Correcto. Un algoritmo debe ser finito (tener un número limitado de pasos), ordenado (la secuencia importa) y diseñado para resolver un problema específico con un resultado claro.',
        incorrectFeedback:
          'No es correcto. Un algoritmo se define como un conjunto finito (que termina), ordenado (con secuencia específica) de instrucciones que resuelven un problema. No depende del lenguaje, precio ni idioma.',
      },
      {
        question: '¿Cuál de estos ejemplos cotidianos NO es un algoritmo?',
        options: [
          'Una receta de cocina con pasos numerados',
          'Las instrucciones de montaje de un mueble',
          'Un sentimiento de alegría al ver a un amigo',
          'Las indicaciones para llegar a una dirección',
        ],
        correctAnswer: 'Un sentimiento de alegría al ver a un amigo',
        correctFeedback:
          'Correcto. Un sentimiento es una respuesta emocional, no un conjunto de instrucciones ordenadas. No es finito ni sigue pasos lógicos. Los otros ejemplos sí son algoritmos: tienen pasos en orden y producen un resultado específico.',
        incorrectFeedback:
          'No es correcto. Los sentimientos no son algoritmos porque no son conjuntos de instrucciones ordenadas con un resultado predecible. Las recetas, las instrucciones de montaje y las indicaciones geográficas sí son algoritmos.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'caracteristicas-de-un-buen-algoritmo',
    title: 'Características de un buen algoritmo',
    module: 'Algoritmos: instrucciones paso a paso',
    moduleNumber: 3,
    order: 2,
    description:
      'Aprende qué distingue a un buen algoritmo de uno malo, y cómo evaluar tus propias soluciones.',
    explanation: `No todos los algoritmos son iguales. Dos algoritmos pueden resolver el mismo problema, pero uno puede ser significativamente mejor que el otro.

**Las cinco características esenciales**

**1. Correcto**
El algoritmo produce el resultado esperado para cualquier entrada válida. Esto incluye los casos comunes y los casos extremos.

Un algoritmo que funciona para la mayoría de los casos pero falla en algunos no es correcto — es parcialmente correcto, que en programación es casi lo mismo que incorrecto.

**2. Claro y sin ambigüedad**
Cada instrucción tiene una sola interpretación posible. Cualquier persona (o computadora) que siga el algoritmo llegará al mismo resultado.

**3. Finito**
El algoritmo termina después de un número finito de pasos. Un algoritmo que corre para siempre no es útil.

Ejemplo de algoritmo infinito (a evitar):
- "Mientras existan números, sigue sumando" — ¿cuándo termina? Nunca.

Corrección:
- "Sumar los primeros 100 números" — ahora tiene un fin claro.

**4. Eficiente**
Usa la menor cantidad de pasos y recursos necesarios. No hace trabajo extra.

Imagina que buscas una palabra en un diccionario. Podrías empezar desde la letra A y revisar palabra por palabra hasta encontrarla. Eso es correcto pero muy ineficiente. Lo eficiente es abrir el diccionario cerca de la letra que buscas y reducir el área de búsqueda.

**5. General (o reutilizable)**
Funciona para cualquier valor de entrada válido, no solo para un caso específico.

Un algoritmo que solo funciona para calcular el promedio de exactamente 3 números no es general. Uno que funciona para cualquier cantidad de números sí lo es.

**¿Cómo evaluar un algoritmo?**

Hazte estas preguntas:
- ¿Funciona para el caso principal?
- ¿Funciona si los datos son cero o negativos?
- ¿Funciona si hay muchos datos o pocos?
- ¿Termina siempre?
- ¿Hay pasos innecesarios que podría eliminar?`,
    codeExample: `// ── Comparando dos algoritmos para el mismo problema ─────────────────────
// Problema: Encontrar el número mayor en una lista de 3 números

// ── Algoritmo deficiente (no general): ───────────────────────────────────
INICIO
  LEER a, b, c
  SI a == 10 ENTONCES
    MOSTRAR "10 es el mayor"  // Solo funciona si el mayor es 10
  FIN SI
FIN
// ❌ No es general: solo funciona en un caso muy específico

// ── Algoritmo correcto y general: ────────────────────────────────────────
INICIO
  LEER a, b, c
  mayor = a  // Asumimos que a es el mayor al principio

  SI b > mayor ENTONCES
    mayor = b  // Actualizamos si b es mayor
  FIN SI

  SI c > mayor ENTONCES
    mayor = c  // Actualizamos si c es mayor
  FIN SI

  MOSTRAR "El número mayor es: " + mayor
FIN
// ✓ Correcto: funciona para cualquier combinación de 3 números
// ✓ General: no importa si son positivos, negativos o iguales
// ✓ Finito: siempre termina después de los mismos pasos
// ✓ Claro: cada paso tiene un propósito obvio`,
    keyPoints: [
      'Un buen algoritmo es correcto, claro, finito, eficiente y general.',
      'Correcto significa que funciona para todos los casos válidos, incluidos los extremos.',
      'Finito significa que siempre termina — un bucle infinito es un error grave.',
      'Eficiente significa que no hace trabajo innecesario.',
      'General significa que funciona para cualquier valor de entrada válido, no solo para casos específicos.',
    ],
    exercise: {
      description:
        'Evalúa este algoritmo según las 5 características (correcto, claro, finito, eficiente, general): "Para calcular el precio con descuento: LEER precio. SI precio == 50 ENTONCES precio_final = 45. MOSTRAR precio_final." ¿Qué problemas tiene? ¿Cómo lo mejorarías?',
      hint: 'El algoritmo tiene al menos 3 problemas: (1) Solo funciona para un precio específico (50). (2) No define qué hace si el precio es diferente de 50. (3) El descuento es fijo (5) pero no calculado como porcentaje. Intenta reescribirlo de forma general.',
    },
    quiz: [
      {
        question: '¿Por qué es problemático un algoritmo que no es "finito"?',
        options: [
          'Porque usa demasiada memoria',
          'Porque nunca termina y el programa se queda atascado indefinidamente',
          'Porque no puede manejar números grandes',
          'Porque es difícil de leer',
        ],
        correctAnswer: 'Porque nunca termina y el programa se queda atascado indefinidamente',
        correctFeedback:
          'Correcto. Un algoritmo no finito produce un "bucle infinito": el programa sigue corriendo para siempre sin producir un resultado. Esto congela o bloquea el programa.',
        incorrectFeedback:
          'No es correcto. El problema de un algoritmo no finito es que nunca termina. El programa queda en un bucle eterno, sin producir resultado. Esto es uno de los errores más graves en programación.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'algoritmos-en-la-vida-cotidiana',
    title: 'Algoritmos en la vida cotidiana',
    module: 'Algoritmos: instrucciones paso a paso',
    moduleNumber: 3,
    order: 3,
    description:
      'Reconoce algoritmos en situaciones del mundo real y practica diseñarlos a partir de tareas cotidianas.',
    explanation: `Los algoritmos no existen solo en las computadoras. Están por todas partes. Aprender a reconocerlos en la vida cotidiana te ayuda a diseñarlos mejor cuando programas.

**Algoritmos que usas sin saberlo**

**El cajero automático**
Cuando usas un cajero automático, estás interactuando con un algoritmo complejo:
1. Insertar tarjeta.
2. Verificar que la tarjeta es válida.
3. Solicitar PIN.
4. Verificar PIN (hasta 3 intentos).
5. Mostrar menú de opciones.
6. Procesar la operación elegida.
7. Verificar fondos disponibles.
8. Dispensar dinero o mostrar error.
9. Ofrecer continuar o terminar.
10. Devolver tarjeta.

Cada uno de esos pasos puede descomponerse en más pasos.

**Un semáforo**
Un semáforo sigue un algoritmo simple:
1. Mostrar verde por X segundos.
2. Mostrar amarillo por Y segundos.
3. Mostrar rojo por Z segundos.
4. Volver al paso 1.

(Versiones modernas ajustan los tiempos según el tráfico — eso es un algoritmo más complejo.)

**Una búsqueda en internet**
Cuando buscas algo en Google, un algoritmo:
1. Recibe el texto que buscas.
2. Busca en miles de millones de páginas web.
3. Ordena los resultados por relevancia.
4. Muestra los más relevantes primero.

Esto ocurre en fracciones de segundo gracias a algoritmos muy sofisticados.

**La lección clave**

Cuando ves un problema cotidiano, pregúntate: "¿Cómo describiría los pasos para resolver esto de forma que una persona que nunca lo ha hecho pueda seguirlos?" Esa pregunta te entrena para diseñar algoritmos.

El programador no inventa algoritmos desde la nada — los observa, los analiza y los traduce al lenguaje de la máquina.`,
    codeExample: `// ── Algoritmo: Verificar si hay suficiente saldo para una compra ──────────

// Este algoritmo lo "ejecutas" en tu cabeza cuando vas a pagar algo.
// Ahora lo describimos de forma explícita:

INICIO
  // ENTRADA
  LEER saldo_disponible    // ej: 150 pesos
  LEER precio_producto     // ej: 80 pesos

  // PROCESO
  SI precio_producto <= saldo_disponible ENTONCES
    // Puede comprar
    saldo_restante = saldo_disponible - precio_producto
    MOSTRAR "Compra aprobada"
    MOSTRAR "Saldo restante: " + saldo_restante
  SI NO
    // No puede comprar
    diferencia = precio_producto - saldo_disponible
    MOSTRAR "Saldo insuficiente"
    MOSTRAR "Te faltan: " + diferencia + " pesos"
  FIN SI
FIN

// ── Este mismo algoritmo existe en ────────────────────────────────────────
// → Aplicaciones de pago (PayPal, tarjetas de débito)
// → Cajeros automáticos
// → Tiendas en línea al procesar pagos
// La lógica es exactamente la misma. Solo cambia cómo está escrita.`,
    keyPoints: [
      'Los algoritmos están presentes en cajeros automáticos, semáforos, buscadores y miles de sistemas cotidianos.',
      'Observar y analizar procesos cotidianos entrena la habilidad de diseñar algoritmos.',
      'Un programador traduce algoritmos existentes al lenguaje de la máquina.',
      'La misma lógica básica de un algoritmo puede aparecer en muchos contextos diferentes.',
      'Descomponer procesos complejos en pasos simples es la habilidad fundamental del programador.',
    ],
    exercise: {
      description:
        'Elige un proceso que realizas en tu teléfono o computadora (verificar el correo, hacer un pedido en línea, usar una aplicación de mapas). Descompón ese proceso en los pasos que realiza el sistema, pensando en: ¿qué datos recibe?, ¿qué decisiones toma?, ¿qué repite?, ¿qué muestra al usuario? Escribe al menos 10 pasos.',
      hint: 'Piensa en lo que pasa "detrás de pantalla" cuando usas la aplicación. Cada acción del usuario provoca una reacción del sistema. Esas reacciones son parte del algoritmo. Incluye casos como "¿qué pasa si no hay conexión a internet?"',
    },
    quiz: [
      {
        question: '¿Cuál es la mejor descripción de lo que hace un programador con los algoritmos?',
        options: [
          'Los inventa completamente de la nada sin inspiración en el mundo real',
          'Los copia de internet sin modificaciones',
          'Los observa en el mundo real, los analiza y los traduce al lenguaje de una computadora',
          'Los adivina basándose en intuición sin planificación',
        ],
        correctAnswer: 'Los observa en el mundo real, los analiza y los traduce al lenguaje de una computadora',
        correctFeedback:
          'Correcto. Un programador es un traductor de lógica. Observa cómo funciona un proceso en el mundo real, lo analiza, lo estructura como algoritmo y finalmente lo escribe en código.',
        incorrectFeedback:
          'No es correcto. Programar no es inventar desde cero ni copiar sin entender. Es observar, analizar y traducir. La lógica de muchos programas existe en el mundo real; el trabajo del programador es formalizarla y expresarla en código.',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'introduccion-al-pseudocodigo',
    title: 'Introducción al pseudocódigo',
    module: 'Algoritmos: instrucciones paso a paso',
    moduleNumber: 3,
    order: 4,
    description:
      'Aprende qué es el pseudocódigo, por qué es útil y cómo usarlo para planificar algoritmos antes de escribir código real.',
    explanation: `Antes de escribir código en un lenguaje de programación, los programadores profesionales muchas veces usan **pseudocódigo** para planificar su solución.

**¿Qué es el pseudocódigo?**

El pseudocódigo es una forma de describir un algoritmo usando un mezcla de lenguaje natural y estructura de programación. No tiene reglas de sintaxis estrictas y no se ejecuta en ninguna computadora — es solo para que los humanos lo lean y entiendan.

"Pseudo" significa "falso" o "que se parece a". Pseudocódigo = "código falso" = código que no es real pero se parece a él.

**¿Por qué usarlo?**

1. **Te obliga a pensar antes de programar:** Planificar en pseudocódigo evita el error de empezar a escribir código sin entender completamente el problema.

2. **Es independiente del lenguaje:** El mismo pseudocódigo puede traducirse a Python, JavaScript o cualquier otro lenguaje.

3. **Es más fácil de corregir:** Cambiar una línea de pseudocódigo es más rápido que reescribir código real.

4. **Mejora la comunicación:** Puedes compartir tu lógica con otra persona aunque no sepa el mismo lenguaje de programación.

**Convenciones básicas del pseudocódigo**

No hay un estándar oficial, pero estas son las convenciones más comunes:

- \`INICIO / FIN\` — delimitan el algoritmo
- \`LEER\` — obtener datos del usuario o de alguna fuente
- \`MOSTRAR\` — presentar información al usuario
- \`SI ... ENTONCES ... SI NO ... FIN SI\` — condiciones
- \`MIENTRAS ... HACER ... FIN MIENTRAS\` — repetir mientras una condición sea verdadera
- \`PARA ... FIN PARA\` — repetir un número específico de veces
- Comentarios con \`//\` — notas que explican el código

**El pseudocódigo en este curso**

A lo largo de este curso usaremos pseudocódigo para planificar todos nuestros algoritmos. Cuando llegues a aprender Python, JavaScript u otro lenguaje, verás que traducir el pseudocódigo al lenguaje real es relativamente sencillo.`,
    codeExample: `// ── Pseudocódigo: estructura básica ──────────────────────────────────────

// Todo algoritmo empieza con INICIO y termina con FIN
INICIO
  // Los comentarios explican el propósito de cada sección

  // Obtener datos (ENTRADA)
  LEER nombre_estudiante
  LEER nota_1
  LEER nota_2
  LEER nota_3

  // Calcular (PROCESO)
  promedio = (nota_1 + nota_2 + nota_3) / 3

  // Evaluar resultado
  SI promedio >= 6 ENTONCES
    resultado = "Aprobado"
  SI NO
    resultado = "Reprobado"
  FIN SI

  // Mostrar resultado (SALIDA)
  MOSTRAR nombre_estudiante + " → " + resultado
  MOSTRAR "Promedio: " + promedio
FIN

// ── Comparación: pseudocódigo vs. Python real ─────────────────────────────
// El pseudocódigo de arriba en Python se ve así:
//
// nombre = input("Nombre: ")
// nota_1 = float(input("Nota 1: "))
// nota_2 = float(input("Nota 2: "))
// nota_3 = float(input("Nota 3: "))
// promedio = (nota_1 + nota_2 + nota_3) / 3
// if promedio >= 6:
//     print(nombre + " → Aprobado")
// else:
//     print(nombre + " → Reprobado")
//
// ¡La lógica es idéntica! Solo cambia la sintaxis.`,
    keyPoints: [
      'El pseudocódigo es una forma de describir algoritmos con lenguaje natural y estructura de programación.',
      'No se ejecuta en ninguna computadora — es solo para planificar y comunicar lógica.',
      'Usar pseudocódigo primero evita el error de programar sin entender completamente el problema.',
      'El pseudocódigo es independiente del lenguaje: puede traducirse a cualquier lenguaje de programación.',
      'Las palabras clave comunes son: INICIO/FIN, LEER, MOSTRAR, SI/ENTONCES/SI NO, MIENTRAS, PARA.',
    ],
    exercise: {
      description:
        'Escribe el pseudocódigo para este problema: "Una tienda de videos ofrece descuento del 20% si el cliente alquila 3 o más películas. Mostrar el precio original y el precio con descuento." Usa las palabras clave INICIO, FIN, LEER, MOSTRAR, SI/ENTONCES/SI NO/FIN SI.',
      hint: 'Entradas: cantidad de películas alquiladas, precio por película. Proceso: calcular el total, verificar si aplica descuento, calcular precio final. Salida: mostrar precio original y precio con descuento (o solo precio original si no aplica).',
    },
    quiz: [
      {
        question: '¿En qué computadora se ejecuta el pseudocódigo?',
        options: [
          'Solo en computadoras Mac',
          'En cualquier computadora con Python instalado',
          'En ninguna — el pseudocódigo es para humanos, no para computadoras',
          'Solo en servidores especiales',
        ],
        correctAnswer: 'En ninguna — el pseudocódigo es para humanos, no para computadoras',
        correctFeedback:
          'Correcto. El pseudocódigo no es un lenguaje de programación real. No tiene compilador ni intérprete. Es una herramienta de planificación para que los humanos diseñen y comuniquen algoritmos.',
        incorrectFeedback:
          'No es correcto. El pseudocódigo no se ejecuta en ninguna computadora. Es un lenguaje informal de planificación, diseñado para que los humanos expresen algoritmos antes de escribirlos en código real.',
      },
      {
        question: '¿Cuál es la principal ventaja de usar pseudocódigo antes de programar?',
        options: [
          'Hace que el código final sea más rápido',
          'Evita tener que aprender la sintaxis del lenguaje',
          'Obliga a pensar y planificar la solución antes de escribir código, reduciendo errores',
          'Genera el código automáticamente',
        ],
        correctAnswer: 'Obliga a pensar y planificar la solución antes de escribir código, reduciendo errores',
        correctFeedback:
          'Correcto. La mayor ventaja del pseudocódigo es que te hace pensar en la solución antes de comprometerte con la sintaxis de un lenguaje específico. Un plan claro produce código más limpio y con menos errores.',
        incorrectFeedback:
          'No es correcto. El pseudocódigo no hace el código más rápido ni lo genera automáticamente. Su valor está en forzarte a planificar: entender el problema, diseñar la solución y detectar problemas de lógica antes de escribir código real.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'crear-tu-primer-algoritmo',
    title: 'Crea tu primer algoritmo',
    module: 'Algoritmos: instrucciones paso a paso',
    moduleNumber: 3,
    order: 5,
    description:
      'Aplica todo lo aprendido en este módulo diseñando tu primer algoritmo completo en pseudocódigo.',
    explanation: `Ha llegado el momento de crear tu primer algoritmo completo. Usarás todo lo que aprendiste en este módulo: qué es un algoritmo, sus características, cómo se traduce a pseudocódigo.

**El proceso de diseño de un algoritmo**

Sigue siempre estos pasos:

**Paso 1: Lee el problema con atención**
Entiende exactamente qué pide. No empieces hasta que puedas explicarlo con tus propias palabras.

**Paso 2: Identifica entradas y salidas**
¿Qué datos recibes? ¿Qué resultado debes producir?

**Paso 3: Piensa en los casos extremos**
¿Qué pasa si el dato de entrada es cero? ¿Negativo? ¿Muy grande?

**Paso 4: Diseña el algoritmo paso a paso**
Escribe los pasos en lenguaje natural primero, luego refina con pseudocódigo.

**Paso 5: Verifica el algoritmo**
"Ejecuta" mentalmente tu algoritmo con un ejemplo. ¿Produce el resultado correcto?

**Ejemplo guiado: Calcular el promedio de tres notas**

- **Entrada:** tres notas numéricas (entre 0 y 10)
- **Proceso:** sumar las tres notas y dividir entre 3
- **Salida:** el promedio y si el estudiante aprobó (>= 6) o no

**Verificación:**
- Notas: 7, 8, 9 → Promedio = (7+8+9)/3 = 8 → Aprobado ✓
- Notas: 3, 4, 5 → Promedio = (3+4+5)/3 = 4 → Reprobado ✓
- Notas: 6, 6, 6 → Promedio = 6 → Aprobado (cumple el mínimo) ✓

El algoritmo funciona para todos los casos verificados.

**Mini reto del módulo**

Diseña tu propio algoritmo para: calcular el promedio de tres notas de un estudiante y determinar si aprobó o reprobó el curso.`,
    codeExample: `// ── Tu primer algoritmo completo ─────────────────────────────────────────
// Problema: Calcular el promedio de tres notas y determinar si el estudiante aprobó

// ── Paso 1: Entender el problema ─────────────────────────────────────────
// Tengo 3 notas. Necesito el promedio y saber si aprobó (promedio >= 6).

// ── Paso 2: Identificar Entradas y Salidas ────────────────────────────────
// ENTRADAS: nota_1, nota_2, nota_3 (números del 0 al 10)
// SALIDAS: promedio calculado, mensaje de aprobado/reprobado

// ── Paso 3: Diseñar el algoritmo ──────────────────────────────────────────
INICIO
  // ENTRADA: Obtener las tres notas
  LEER nota_1
  LEER nota_2
  LEER nota_3

  // PROCESO: Calcular el promedio
  promedio = (nota_1 + nota_2 + nota_3) / 3

  // PROCESO: Determinar si aprobó
  SI promedio >= 6 ENTONCES
    estado = "APROBADO"
  SI NO
    estado = "REPROBADO"
  FIN SI

  // SALIDA: Mostrar resultados
  MOSTRAR "Promedio: " + promedio
  MOSTRAR "Estado: " + estado
FIN

// ── Paso 4: Verificar con ejemplos ────────────────────────────────────────
// Ejemplo 1: notas 8, 7, 9
//   promedio = (8+7+9)/3 = 8    → APROBADO ✓
//
// Ejemplo 2: notas 4, 5, 3
//   promedio = (4+5+3)/3 = 4    → REPROBADO ✓
//
// Ejemplo 3: notas 6, 6, 6
//   promedio = (6+6+6)/3 = 6    → APROBADO ✓ (6 >= 6)
//
// El algoritmo produce resultados correctos en todos los casos.`,
    keyPoints: [
      'El proceso de diseño de un algoritmo: leer → identificar entradas/salidas → pensar en casos extremos → diseñar → verificar.',
      'Siempre verificar el algoritmo con ejemplos concretos antes de considerarlo completo.',
      'Un algoritmo debe probarse con el caso normal, casos extremos y casos límite.',
      'El pseudocódigo permite diseñar y verificar la lógica antes de comprometerse con un lenguaje específico.',
      'La verificación mental ("ejecutar el algoritmo en papel") es la primera forma de prueba en programación.',
    ],
    exercise: {
      description:
        'Mini reto del módulo: Diseña un algoritmo completo para este problema: "Una persona quiere saber si puede ir al cine. Tiene un presupuesto de $50. Una entrada cuesta $15. Si va con acompañantes, tiene que pagar por todos. ¿Puede ir solo? ¿Puede llevar 1 acompañante? ¿Puede llevar 2?" Escribe el pseudocódigo completo y verifica con ejemplos.',
      hint: 'Entradas: presupuesto disponible (en este caso es fijo: $50), precio por entrada ($15). Proceso: calcular cuántas entradas puede pagar con $50. Salida: cuántas personas pueden ir. Puedes usar una división: personas = presupuesto / precio_entrada.',
    },
    quiz: [
      {
        question: '¿Por qué es importante verificar un algoritmo con ejemplos antes de convertirlo en código?',
        options: [
          'Para que el código sea más corto',
          'Para detectar errores de lógica antes de invertir tiempo escribiendo código que podría estar incorrecto',
          'Porque los lenguajes de programación no pueden detectar errores de lógica',
          'Solo se hace en proyectos muy grandes',
        ],
        correctAnswer: 'Para detectar errores de lógica antes de invertir tiempo escribiendo código que podría estar incorrecto',
        correctFeedback:
          'Correcto. Verificar el algoritmo mentalmente o en papel es mucho más rápido que escribir código y luego descubrir que la lógica estaba mal. Es parte del proceso de diseño, no un paso opcional.',
        incorrectFeedback:
          'No es correcto. La verificación previa sirve para detectar errores de lógica antes de escribir código. Corregir un algoritmo en pseudocódigo es mucho más rápido que reescribir código ya implementado.',
      },
      {
        question: '¿Qué hace el paso de "casos extremos" en el diseño de un algoritmo?',
        options: [
          'Agrega funcionalidades extra que no se pidieron',
          'Hace el algoritmo más complejo de lo necesario',
          'Asegura que el algoritmo funcione también cuando los datos son cero, negativos o inusuales',
          'Solo aplica a algoritmos matemáticos',
        ],
        correctAnswer: 'Asegura que el algoritmo funcione también cuando los datos son cero, negativos o inusuales',
        correctFeedback:
          'Correcto. Los casos extremos (o "casos borde") son situaciones inusuales pero válidas que el algoritmo debe manejar. Un algoritmo robusto funciona para todos los casos, no solo para el caso típico.',
        incorrectFeedback:
          'No es correcto. Los casos extremos no agregan complejidad innecesaria — identifican situaciones válidas pero inusuales que el algoritmo debe manejar correctamente. Un algoritmo que falla en casos extremos es un algoritmo con bugs.',
      },
    ],
  },
]

export const logicaModule3: Module = {
  number: 3,
  title: 'Algoritmos: instrucciones paso a paso',
  level: 'básico',
  lessons: lessonsLogicaModule3,
}
