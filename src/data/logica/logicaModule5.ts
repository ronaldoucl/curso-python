import type { Lesson, Module } from '@/types'

export const lessonsLogicaModule5: Lesson[] = [
  // ── Lección 1 ────────────────────────────────────────────────────────────
  {
    slug: 'que-es-el-pseudocodigo',
    title: '¿Qué es el pseudocódigo y para qué sirve?',
    module: 'Resolución de problemas con pseudocódigo',
    moduleNumber: 5,
    order: 1,
    description:
      'Aprende por qué el pseudocódigo es la herramienta más valiosa para planificar soluciones antes de programar.',
    explanation: `En el Módulo 3 conociste el pseudocódigo como una herramienta para describir algoritmos. En este módulo final del Nivel 1, vas a **dominar el pseudocódigo** como técnica de resolución de problemas.

**¿Por qué dedicar un módulo completo al pseudocódigo?**

Porque el pseudocódigo es el **puente entre el pensamiento humano y el código real**. Un programador que sabe usar pseudocódigo:

1. Resuelve problemas más rápido porque planifica antes de programar.
2. Comete menos errores porque detecta fallas en la lógica antes de escribir código.
3. Puede comunicar su solución a cualquier persona, sin importar el lenguaje que conozcan.
4. Aprende nuevos lenguajes más fácilmente porque la lógica ya la tiene clara.

**¿Qué hace un programador con pseudocódigo?**

Antes de abrir su editor de código, el programador:

1. **Lee el problema** cuidadosamente.
2. **Escribe el pseudocódigo** de su solución en papel o en un archivo de texto.
3. **Revisa** el pseudocódigo buscando errores de lógica.
4. **Prueba mentalmente** el pseudocódigo con ejemplos concretos.
5. Solo entonces **traduce** el pseudocódigo a código real en el lenguaje elegido.

Este proceso puede parecer lento al principio, pero con práctica se vuelve rápido y evita horas de depuración de errores.

**Las palabras clave del pseudocódigo**

Recordemos las palabras clave que usamos en este curso:

| Palabra clave | Propósito |
|---|---|
| \`INICIO / FIN\` | Delimitan el algoritmo |
| \`LEER\` | Recibir un dato de entrada |
| \`MOSTRAR\` | Mostrar un resultado al usuario |
| \`SI ... ENTONCES ... SI NO ... FIN SI\` | Tomar una decisión |
| \`MIENTRAS ... HACER ... FIN MIENTRAS\` | Repetir mientras una condición sea verdadera |
| \`PARA ... HASTA ... FIN PARA\` | Repetir un número determinado de veces |
| \`variable = valor\` | Asignar un valor a una variable |
| \`// comentario\` | Explicar el propósito de un paso |`,
    codeExample: `// ── El pseudocódigo como herramienta de planificación ────────────────────

// PROBLEMA:
// Calcular cuánto paga un empleado por impuesto sobre su salario.
// Regla:
//   - Salario hasta $3,000: 10% de impuesto
//   - Salario entre $3,001 y $7,000: 20% de impuesto
//   - Salario mayor a $7,000: 30% de impuesto

// ── Paso 1: Entender el problema ─────────────────────────────────────────
// Tengo: el salario del empleado
// Necesito: calcular el impuesto según la escala
// Resultado: mostrar el salario, el impuesto y el salario neto

// ── Paso 2: Pseudocódigo ──────────────────────────────────────────────────
INICIO
  LEER salario_bruto

  SI salario_bruto <= 3000 ENTONCES
    porcentaje_impuesto = 0.10
  SI NO, SI salario_bruto <= 7000 ENTONCES
    porcentaje_impuesto = 0.20
  SI NO
    porcentaje_impuesto = 0.30
  FIN SI

  impuesto = salario_bruto * porcentaje_impuesto
  salario_neto = salario_bruto - impuesto

  MOSTRAR "Salario bruto: $" + salario_bruto
  MOSTRAR "Impuesto (" + (porcentaje_impuesto * 100) + "%): $" + impuesto
  MOSTRAR "Salario neto: $" + salario_neto
FIN

// ── Paso 3: Verificar con ejemplos ───────────────────────────────────────
// Salario $2,500 → 10% → impuesto = $250 → neto = $2,250  ✓
// Salario $5,000 → 20% → impuesto = $1,000 → neto = $4,000  ✓
// Salario $10,000 → 30% → impuesto = $3,000 → neto = $7,000  ✓`,
    keyPoints: [
      'El pseudocódigo es el puente entre el pensamiento humano y el código real.',
      'Planificar con pseudocódigo primero reduce errores y acelera el proceso de programación.',
      'El proceso: leer problema → escribir pseudocódigo → revisar → probar mentalmente → traducir a código.',
      'Las palabras clave del pseudocódigo son: INICIO/FIN, LEER, MOSTRAR, SI/ENTONCES, MIENTRAS, PARA.',
      'Un programador que domina el pseudocódigo aprende nuevos lenguajes más fácilmente.',
    ],
    exercise: {
      description:
        'Escribe el pseudocódigo para este problema: "Un estacionamiento cobra $5 por las primeras 2 horas y $2 por cada hora adicional. Si el vehículo estuvo más de 8 horas, el cobro máximo es $25. Calcular cuánto paga un vehículo." Incluye la verificación con al menos 3 ejemplos: 1 hora, 3 horas y 10 horas.',
      hint: 'Identifica los tres casos: (1) hasta 2 horas: tarifa fija de $5. (2) más de 2 horas sin superar el límite: $5 + (horas-2) * $2. (3) más de 8 horas: tope de $25. Verifica: 1h=$5, 3h=$7, 10h=$25.',
    },
    quiz: [
      {
        question: '¿Cuál es el beneficio más importante de usar pseudocódigo antes de programar?',
        options: [
          'Hacer que el código final sea más largo',
          'Detectar errores de lógica antes de escribir código real, ahorrando tiempo de depuración',
          'Cumplir con un requisito formal de la empresa',
          'Demostrar que sabes programar bien',
        ],
        correctAnswer: 'Detectar errores de lógica antes de escribir código real, ahorrando tiempo de depuración',
        correctFeedback:
          'Correcto. El mayor beneficio es la prevención de errores. Es mucho más rápido corregir un error en pseudocódigo que encontrarlo y corregirlo en código real ya implementado.',
        incorrectFeedback:
          'No es correcto. El pseudocódigo no hace el código más largo ni es un requisito formal. Su valor real es permitirte detectar y corregir errores de lógica antes de comprometerte con la sintaxis de un lenguaje.',
      },
    ],
  },

  // ── Lección 2 ────────────────────────────────────────────────────────────
  {
    slug: 'estructura-basica-de-un-programa',
    title: 'Estructura básica de un programa',
    module: 'Resolución de problemas con pseudocódigo',
    moduleNumber: 5,
    order: 2,
    description:
      'Aprende la estructura universal que siguen todos los programas: inicio, lectura, proceso, salida y fin.',
    explanation: `Todo programa, desde el más simple hasta el más complejo, sigue una estructura básica. Aprenderla te dará un punto de partida claro para cualquier problema que enfrentes.

**La estructura universal de un programa**

\`\`\`
INICIO
  // 1. Declarar variables (si es necesario)
  // 2. Obtener datos de entrada (LEER)
  // 3. Procesar los datos (cálculos, decisiones)
  // 4. Mostrar resultados (MOSTRAR)
FIN
\`\`\`

Esta estructura funciona para la mayoría de los programas simples. Los programas complejos expanden cada parte, pero la estructura base es siempre esta.

**Las cuatro partes en detalle**

**1. Declarar variables**
Antes de usar una variable, es buena práctica "declararla" — darle un nombre y un valor inicial si es necesario. No siempre es obligatorio en pseudocódigo, pero ayuda a la claridad.

**2. Obtener datos de entrada**
Aquí el programa recibe la información que necesita para trabajar. Puede ser del usuario, de un archivo, etc.

**3. Procesar los datos**
Esta es la parte "inteligente" del programa. Aquí van los cálculos, las condiciones (SI), las repeticiones (MIENTRAS, PARA). Es el corazón del algoritmo.

**4. Mostrar resultados**
El programa comunica su resultado al usuario. Puede ser un mensaje, un número, una tabla, etc.

**Estructuras de control dentro del proceso**

Dentro de la parte de proceso, usarás tres tipos de estructuras:

1. **Secuencia:** Instrucciones que se ejecutan una tras otra, en orden.
2. **Selección (SI/SI NO):** El programa toma decisiones basadas en condiciones.
3. **Iteración (MIENTRAS/PARA):** El programa repite un bloque de instrucciones.

Todas las complejidades de la programación son combinaciones de estas tres estructuras básicas.`,
    codeExample: `// ── La estructura universal de un programa ───────────────────────────────

INICIO
  // ── PARTE 1: Declarar variables (opcional en pseudocódigo) ───────────
  nombre = ""
  total = 0
  descuento = 0

  // ── PARTE 2: Entrada - Obtener datos ─────────────────────────────────
  MOSTRAR "Ingresa tu nombre:"
  LEER nombre

  MOSTRAR "Ingresa el precio del producto:"
  LEER precio

  MOSTRAR "Ingresa la cantidad:"
  LEER cantidad

  // ── PARTE 3: Proceso - Calcular ───────────────────────────────────────
  subtotal = precio * cantidad

  // Decisión: ¿aplica descuento?
  SI subtotal > 200 ENTONCES
    descuento = subtotal * 0.10  // 10% de descuento
  FIN SI

  total = subtotal - descuento
  impuesto = total * 0.08
  total_final = total + impuesto

  // ── PARTE 4: Salida - Mostrar resultados ─────────────────────────────
  MOSTRAR "=== RESUMEN DE COMPRA ==="
  MOSTRAR "Cliente: " + nombre
  MOSTRAR "Subtotal: $" + subtotal
  MOSTRAR "Descuento: $" + descuento
  MOSTRAR "Impuesto: $" + impuesto
  MOSTRAR "TOTAL: $" + total_final
FIN

// Esta estructura de 4 partes aplica a cualquier programa,
// desde una calculadora hasta un sistema de ventas completo.`,
    keyPoints: [
      'La estructura universal de un programa: inicio → declarar variables → entrada → proceso → salida → fin.',
      'Las tres estructuras de control básicas son: secuencia, selección (SI) e iteración (MIENTRAS/PARA).',
      'Toda la complejidad de la programación son combinaciones de estas tres estructuras.',
      'Seguir la estructura básica da un punto de partida claro para cualquier problema.',
      'Esta estructura aplica igualmente a programas simples y complejos.',
    ],
    exercise: {
      description:
        'Escribe el pseudocódigo completo con la estructura de 4 partes para este problema: "Un banco calcula el interés ganado por un depósito de ahorro. La tasa de interés es 3% anual. El cliente indica cuánto deposita y por cuántos años. El banco muestra el interés ganado y el total acumulado al final del período."',
      hint: 'Entrada: monto_deposito, años. Proceso: interés_total = monto_deposito * 0.03 * años (interés simple). Salida: interés ganado y monto total (deposito + interés). Verifica: $1000 por 5 años = $150 de interés = $1150 total.',
    },
    quiz: [
      {
        question: '¿Cuáles son las tres estructuras de control básicas de la programación?',
        options: [
          'Variables, funciones y clases',
          'Entrada, proceso y salida',
          'Secuencia, selección e iteración',
          'Suma, comparación y asignación',
        ],
        correctAnswer: 'Secuencia, selección e iteración',
        correctFeedback:
          'Correcto. Toda la lógica de programación se construye con tres estructuras: secuencia (pasos en orden), selección (decisiones con SI) e iteración (repetición con MIENTRAS o PARA).',
        incorrectFeedback:
          'No es correcto. Las tres estructuras de control son: secuencia (instrucciones en orden), selección (SI/SI NO para tomar decisiones) e iteración (MIENTRAS/PARA para repetir). Variables, funciones y E/P son conceptos distintos.',
      },
    ],
  },

  // ── Lección 3 ────────────────────────────────────────────────────────────
  {
    slug: 'leer-datos-y-mostrar-resultados',
    title: 'Leer datos y mostrar resultados',
    module: 'Resolución de problemas con pseudocódigo',
    moduleNumber: 5,
    order: 3,
    description:
      'Aprende a diseñar la interacción entre el programa y el usuario: cómo pedir datos y cómo presentar resultados.',
    explanation: `Un programa que no interactúa con el usuario ni con el mundo exterior no tiene mucha utilidad. La comunicación entre el programa y el usuario ocurre a través de dos operaciones fundamentales: **LEER** (entrada) y **MOSTRAR** (salida).

**LEER: obtener datos del usuario**

La instrucción LEER pausa el programa y espera que el usuario proporcione un valor. Ese valor se almacena en una variable.

Buenas prácticas al usar LEER:
1. Siempre informa al usuario qué dato necesitas antes de pedirlo.
2. Sé específico sobre el formato esperado.
3. Valida el dato si es posible (¿es del tipo correcto? ¿está en el rango válido?).

**MOSTRAR: comunicar resultados al usuario**

La instrucción MOSTRAR presenta información al usuario. Puede ser:
- Un resultado calculado
- Un mensaje de estado ("Operación exitosa")
- Un error ("El valor ingresado no es válido")
- Un menú de opciones

Buenas prácticas al usar MOSTRAR:
1. Los mensajes deben ser claros y descriptivos.
2. Incluye unidades cuando sea relevante ($, °C, km/h).
3. Formatea los números de forma legible.
4. Usa mensajes de error claros que orienten al usuario.

**Validación de entradas**

Un buen programa no asume que el usuario ingresará datos válidos. Siempre debe validar:
- ¿Es el tipo correcto? (número, texto)
- ¿Está en el rango correcto? (nota entre 0 y 10, edad positiva)
- ¿No está vacío?

La validación es una de las partes más importantes de cualquier programa real.`,
    codeExample: `// ── Interacción completa con el usuario ─────────────────────────────────

INICIO
  // ── Buena práctica: avisar qué se espera antes de LEER ───────────────
  MOSTRAR "=== CALCULADORA DE CALIFICACIÓN ==="
  MOSTRAR "Ingresa el nombre del estudiante:"
  LEER nombre

  MOSTRAR "Ingresa la nota del primer parcial (0-10):"
  LEER nota_parcial_1

  MOSTRAR "Ingresa la nota del segundo parcial (0-10):"
  LEER nota_parcial_2

  MOSTRAR "Ingresa la nota del examen final (0-10):"
  LEER nota_final

  // ── Validación básica ─────────────────────────────────────────────────
  SI nota_parcial_1 < 0 O nota_parcial_1 > 10 ENTONCES
    MOSTRAR "Error: La nota del primer parcial debe estar entre 0 y 10"
    DETENER
  FIN SI
  // (similar para las otras notas en un programa completo)

  // ── Cálculo ───────────────────────────────────────────────────────────
  // Los parciales valen 30% cada uno; el final vale 40%
  promedio = (nota_parcial_1 * 0.30) + (nota_parcial_2 * 0.30) + (nota_final * 0.40)

  SI promedio >= 6 ENTONCES
    estado = "APROBADO"
  SI NO
    estado = "REPROBADO"
  FIN SI

  // ── Salida bien formateada ────────────────────────────────────────────
  MOSTRAR ""
  MOSTRAR "=== RESULTADO ==="
  MOSTRAR "Estudiante: " + nombre
  MOSTRAR "Parcial 1:  " + nota_parcial_1 + " (30%)"
  MOSTRAR "Parcial 2:  " + nota_parcial_2 + " (30%)"
  MOSTRAR "Final:      " + nota_final + " (40%)"
  MOSTRAR "Promedio:   " + promedio
  MOSTRAR "Estado:     " + estado
FIN`,
    keyPoints: [
      'LEER y MOSTRAR son las dos instrucciones de interacción con el usuario.',
      'Siempre informa al usuario qué dato necesitas antes de pedirlo con LEER.',
      'Los mensajes de MOSTRAR deben ser claros, descriptivos e incluir unidades cuando aplica.',
      'La validación de entradas es una buena práctica esencial: no asumir que el usuario ingresará datos válidos.',
      'Los mensajes de error deben orientar al usuario sobre qué hacer para corregir el problema.',
    ],
    exercise: {
      description:
        'Diseña el pseudocódigo para la interacción de este programa con el usuario: "Una aplicación de conversión de divisas. El usuario ingresa una cantidad en pesos y elige a qué moneda convertir (dólares o euros). La aplicación muestra el resultado con el tipo de cambio usado." Enfócate en cómo presentar las opciones al usuario y cómo mostrar el resultado.',
      hint: 'Para las opciones: MOSTRAR "1. Dólares (tipo de cambio: $17.50)" / "2. Euros (tipo de cambio: $19.20)". LEER opcion. Luego un SI para calcular según la opción elegida. En la salida, muestra la moneda, la cantidad, el tipo de cambio y el resultado.',
    },
    quiz: [
      {
        question: '¿Por qué es importante validar los datos de entrada antes de procesarlos?',
        options: [
          'Para hacer el programa más lento deliberadamente',
          'Para evitar errores o resultados incorrectos cuando el usuario ingresa datos inválidos',
          'Porque es un requisito legal en todos los países',
          'Solo es necesario en programas muy grandes',
        ],
        correctAnswer: 'Para evitar errores o resultados incorrectos cuando el usuario ingresa datos inválidos',
        correctFeedback:
          'Correcto. Si el usuario ingresa una nota de -5 o un texto donde se esperaba un número, el programa producirá resultados incorrectos o se "romperá". La validación previene estos problemas.',
        incorrectFeedback:
          'No es correcto. La validación es esencial para cualquier programa que recibe datos externos. Sin ella, datos inválidos pueden producir cálculos incorrectos, errores del sistema o resultados sin sentido.',
      },
    ],
  },

  // ── Lección 4 ────────────────────────────────────────────────────────────
  {
    slug: 'primer-pseudocodigo-completo',
    title: 'Tu primer pseudocódigo completo',
    module: 'Resolución de problemas con pseudocódigo',
    moduleNumber: 5,
    order: 4,
    description:
      'Construye paso a paso un pseudocódigo completo aplicando todo lo aprendido en el Nivel 1.',
    explanation: `Es momento de construir un pseudocódigo completo y bien estructurado, aplicando todo lo que has aprendido en este Nivel 1.

**El problema a resolver**

Construiremos juntos el pseudocódigo para un sistema de registro de estudiantes que:
1. Pide el nombre del estudiante y sus tres notas.
2. Calcula el promedio.
3. Determina si aprobó o reprobó (promedio >= 6).
4. Calcula cuántos puntos le faltaron para aprobar (si reprobó) o cuántos puntos de margen tiene (si aprobó).
5. Muestra un mensaje personalizado y motivador.

**Construyendo el pseudocódigo paso a paso**

Seguiremos el proceso completo que aprendiste:

**Paso 1 — Entender el problema:**
- Datos de entrada: nombre, tres notas
- Cálculos: promedio, diferencia con el mínimo
- Salida: resultado personalizado

**Paso 2 — Identificar casos:**
- Caso 1: El estudiante aprobó
- Caso 2: El estudiante reprobó

**Paso 3 — Diseñar el pseudocódigo**

**Paso 4 — Verificar con ejemplos:**
- Estudiante con notas 7, 8, 9 → promedio 8 → aprobado
- Estudiante con notas 3, 4, 5 → promedio 4 → reprobado, le faltan 2 puntos

Este proceso — entender → identificar casos → diseñar → verificar — es exactamente lo que hace un programador profesional antes de escribir código real.`,
    codeExample: `// ── Pseudocódigo completo: Sistema de calificación ───────────────────────

INICIO
  // ── SECCIÓN 1: Presentación ───────────────────────────────────────────
  MOSTRAR "╔══════════════════════════════════╗"
  MOSTRAR "║   SISTEMA DE CALIFICACIÓN        ║"
  MOSTRAR "╚══════════════════════════════════╝"

  // ── SECCIÓN 2: Entrada de datos ───────────────────────────────────────
  MOSTRAR "Nombre del estudiante:"
  LEER nombre

  MOSTRAR "Nota del módulo 1 (0-10):"
  LEER nota_1

  MOSTRAR "Nota del módulo 2 (0-10):"
  LEER nota_2

  MOSTRAR "Nota del módulo 3 (0-10):"
  LEER nota_3

  // ── SECCIÓN 3: Validación ─────────────────────────────────────────────
  SI nota_1 < 0 O nota_1 > 10 O nota_2 < 0 O nota_2 > 10 O nota_3 < 0 O nota_3 > 10 ENTONCES
    MOSTRAR "Error: Las notas deben ser valores entre 0 y 10"
    DETENER el programa
  FIN SI

  // ── SECCIÓN 4: Proceso ────────────────────────────────────────────────
  promedio = (nota_1 + nota_2 + nota_3) / 3
  nota_minima = 6

  SI promedio >= nota_minima ENTONCES
    aprobado = verdadero
    diferencia = promedio - nota_minima
    mensaje_extra = "Tienes " + diferencia + " punto(s) sobre el mínimo."
  SI NO
    aprobado = falso
    diferencia = nota_minima - promedio
    mensaje_extra = "Te faltan " + diferencia + " punto(s) para aprobar."
  FIN SI

  // ── SECCIÓN 5: Salida ─────────────────────────────────────────────────
  MOSTRAR ""
  MOSTRAR "── RESULTADO PARA: " + nombre + " ──"
  MOSTRAR "Nota 1: " + nota_1
  MOSTRAR "Nota 2: " + nota_2
  MOSTRAR "Nota 3: " + nota_3
  MOSTRAR "Promedio: " + promedio

  SI aprobado ENTONCES
    MOSTRAR "Estado: ✓ APROBADO"
    MOSTRAR "¡Excelente trabajo! " + mensaje_extra
  SI NO
    MOSTRAR "Estado: ✗ REPROBADO"
    MOSTRAR "¡No te rindas! " + mensaje_extra
    MOSTRAR "Sigue estudiando. ¡Puedes lograrlo!"
  FIN SI
FIN

// ── Verificación con ejemplos ─────────────────────────────────────────────
// Ejemplo 1: nombre="Ana", notas=7,8,9
//   promedio = (7+8+9)/3 = 8 → APROBADO, diferencia = 2  ✓
//
// Ejemplo 2: nombre="Carlos", notas=3,4,5
//   promedio = (3+4+5)/3 = 4 → REPROBADO, diferencia = 2  ✓
//
// Ejemplo 3: nombre="María", notas=6,6,6
//   promedio = 6 → APROBADO (6 >= 6), diferencia = 0  ✓`,
    keyPoints: [
      'Un pseudocódigo completo tiene secciones claras: presentación, entrada, validación, proceso y salida.',
      'Los comentarios dentro del pseudocódigo ayudan a organizar y comunicar la lógica.',
      'Siempre verificar el pseudocódigo con al menos 3 ejemplos: caso normal, caso límite y caso de error.',
      'Un buen pseudocódigo es tan claro que cualquier persona puede entenderlo sin saber programar.',
      'Este proceso de diseño es el mismo que usa un programador profesional antes de escribir código real.',
    ],
    exercise: {
      description:
        'Modifica el pseudocódigo del sistema de calificación para que también: (1) Acepte una cuarta nota (nota_4) y calcule el promedio de las cuatro. (2) Clasifique el resultado en tres niveles: Excelente (>= 9), Bueno (>= 7 y < 9), Aprobado (>= 6 y < 7). (3) Muestre el nivel obtenido en la salida.',
      hint: 'Para el promedio de 4 notas: suma las 4 y divide entre 4. Para la clasificación, necesitas condiciones anidadas: primero verificar >= 9, luego >= 7, luego >= 6. Verifica con: notas 9,10,8,9 → promedio 9 → Excelente.',
    },
    quiz: [
      {
        question: '¿Por qué es buena práctica incluir validación en el pseudocódigo?',
        options: [
          'Para hacer el pseudocódigo más largo e impresionante',
          'Para que el programa maneje correctamente datos inválidos sin producir resultados incorrectos',
          'Solo es necesaria cuando el programa es muy complejo',
          'Para cumplir con las reglas del pseudocódigo estándar',
        ],
        correctAnswer: 'Para que el programa maneje correctamente datos inválidos sin producir resultados incorrectos',
        correctFeedback:
          'Correcto. La validación es parte integral del diseño de cualquier programa. Si no validas, datos inválidos producirán resultados incorrectos o romperán el programa. Mejor detectarlo desde el pseudocódigo.',
        incorrectFeedback:
          'No es correcto. La validación no es para impresionar ni es solo para programas grandes. Es una práctica esencial que previene que datos incorrectos causen resultados erróneos o fallen el programa.',
      },
    ],
  },

  // ── Lección 5 ────────────────────────────────────────────────────────────
  {
    slug: 'reto-final-nivel-1',
    title: 'Reto final del Nivel 1',
    module: 'Resolución de problemas con pseudocódigo',
    moduleNumber: 5,
    order: 5,
    description:
      'Completa el reto final del Nivel 1: diseña un pseudocódigo completo que integre todo lo aprendido.',
    explanation: `¡Has llegado al final del Nivel 1! En este módulo final, aplicarás TODO lo que has aprendido:

- ✓ **Módulo 1:** Lógica de programación y pensamiento estructurado
- ✓ **Módulo 2:** Cómo piensa una computadora (entradas, procesos, salidas)
- ✓ **Módulo 3:** Algoritmos y pseudocódigo
- ✓ **Módulo 4:** Tipos de datos, operaciones y comparaciones
- ✓ **Módulo 5:** Resolución de problemas con pseudocódigo

**El reto final del Nivel 1**

Diseña el pseudocódigo completo para este sistema:

*"Un profesor quiere un sistema que le ayude a calcular la calificación final de un estudiante. El sistema debe:*
1. *Pedir el nombre del estudiante y tres notas.*
2. *Calcular el promedio de las tres notas.*
3. *Mostrar si el estudiante aprobó (promedio >= 6) o reprobó.*
4. *Si aprobó, mostrar un mensaje de felicitación personalizado con su promedio.*
5. *Si reprobó, mostrar cuántos puntos le faltaron para aprobar y un mensaje de ánimo."*

**Lo que has logrado en el Nivel 1**

Completar este nivel significa que ya tienes la base más importante de la programación: **sabes pensar como programador**.

No necesitas saber Python ni JavaScript para entender qué hace un programa. Puedes diseñar soluciones, identificar problemas de lógica y describir algoritmos claramente.

**¿Qué sigue? Nivel 2: Variables, condiciones y decisiones**

En el próximo nivel aprenderás a:
- Usar variables de forma más sofisticada
- Crear condiciones complejas
- Tomar decisiones en múltiples niveles
- Usar repeticiones (bucles) para procesar múltiples datos

Todo lo que aprendas en el Nivel 2 construirá directamente sobre la base que estableciste aquí. ¡Sigue adelante!`,
    codeExample: `// ── RETO FINAL DEL NIVEL 1 ───────────────────────────────────────────────
// Sistema de calificación con pseudocódigo completo

INICIO
  // ── PRESENTACIÓN ─────────────────────────────────────────────────────
  MOSTRAR "╔══════════════════════════════════════╗"
  MOSTRAR "║   SISTEMA DE CALIFICACIÓN - NIVEL 1  ║"
  MOSTRAR "╚══════════════════════════════════════╝"
  MOSTRAR ""

  // ── ENTRADA ───────────────────────────────────────────────────────────
  MOSTRAR "Nombre del estudiante:"
  LEER nombre_estudiante

  MOSTRAR "Nota 1:"
  LEER nota_1

  MOSTRAR "Nota 2:"
  LEER nota_2

  MOSTRAR "Nota 3:"
  LEER nota_3

  // ── PROCESO ───────────────────────────────────────────────────────────
  promedio = (nota_1 + nota_2 + nota_3) / 3
  nota_aprobacion = 6

  // ── SALIDA ────────────────────────────────────────────────────────────
  MOSTRAR ""
  MOSTRAR "Estudiante: " + nombre_estudiante
  MOSTRAR "Notas: " + nota_1 + ", " + nota_2 + ", " + nota_3
  MOSTRAR "Promedio: " + promedio
  MOSTRAR "──────────────────────────────"

  SI promedio >= nota_aprobacion ENTONCES
    MOSTRAR "Estado: ✓ APROBADO"
    MOSTRAR ""
    MOSTRAR "¡Felicidades, " + nombre_estudiante + "!"
    MOSTRAR "Obtuviste un promedio de " + promedio + "."
    MOSTRAR "¡Sigue así!"
  SI NO
    puntos_faltantes = nota_aprobacion - promedio
    MOSTRAR "Estado: ✗ REPROBADO"
    MOSTRAR ""
    MOSTRAR nombre_estudiante + ", te faltaron " + puntos_faltantes + " punto(s)."
    MOSTRAR "No te rindas. Cada intento te hace más fuerte."
    MOSTRAR "¡Sigue estudiando y lo lograrás!"
  FIN SI

FIN

// ── VERIFICACIÓN CON EJEMPLOS ─────────────────────────────────────────────
//
// EJEMPLO 1 — Aprobado:
// nombre = "Valentina", notas = 7, 8, 9
// promedio = (7+8+9)/3 = 8.0 → APROBADO ✓
//
// EJEMPLO 2 — Reprobado:
// nombre = "Rodrigo", notas = 3, 5, 4
// promedio = (3+5+4)/3 = 4.0 → REPROBADO, faltan 2.0 puntos ✓
//
// EJEMPLO 3 — Límite exacto:
// nombre = "Lucía", notas = 6, 6, 6
// promedio = (6+6+6)/3 = 6.0 → APROBADO (6 >= 6) ✓
//
// ──────────────────────────────────────────────────────────────────────────
// ¡Felicidades por completar el Nivel 1!
// Ahora sabes:
// ✓ Qué es la lógica de programación
// ✓ Cómo piensa una computadora
// ✓ Qué son los algoritmos y cómo diseñarlos
// ✓ Qué son los tipos de datos y las operaciones básicas
// ✓ Cómo usar pseudocódigo para planificar soluciones
// ──────────────────────────────────────────────────────────────────────────
// SIGUIENTE PASO: Nivel 2 → Variables, condiciones y decisiones`,
    keyPoints: [
      'Completar el Nivel 1 significa tener la base más importante de la programación: pensar estructuradamente.',
      'El pseudocódigo del reto final integra todos los conceptos del Nivel 1.',
      'Siempre verificar un algoritmo con al menos 3 casos: normal, extremo y límite.',
      'La habilidad de diseñar algoritmos en pseudocódigo se aplica a cualquier lenguaje de programación.',
      'El Nivel 2 construirá sobre esta base: variables avanzadas, condiciones complejas y repeticiones.',
    ],
    exercise: {
      description:
        'RETO FINAL: Escribe desde cero el pseudocódigo completo de este sistema sin ver el ejemplo de esta lección. Luego compara tu solución con el ejemplo y responde: ¿qué partes escribiste diferente? ¿son ambas soluciones válidas? ¿cuál es más clara? Este ejercicio de reflexión es tan valioso como el pseudocódigo mismo.',
      hint: 'No hay una sola solución correcta. Si tu pseudocódigo produce los resultados correctos y es claro de leer, es válido. Enfócate en: (1) ¿Están todas las partes? Entrada, validación, proceso, salida. (2) ¿Verificaste con los 3 ejemplos? (3) ¿Son claros tus mensajes al usuario?',
    },
    quiz: [
      {
        question: 'Al terminar el Nivel 1, ¿qué habilidad fundamental has desarrollado?',
        options: [
          'Conoces la sintaxis completa de Python',
          'Sabes crear páginas web con HTML',
          'Sabes pensar estructuradamente y diseñar algoritmos en pseudocódigo',
          'Puedes programar cualquier aplicación móvil',
        ],
        correctAnswer: 'Sabes pensar estructuradamente y diseñar algoritmos en pseudocódigo',
        correctFeedback:
          'Correcto. El Nivel 1 te enseñó la habilidad más valiosa de un programador: el pensamiento estructurado. Con esta base, aprender cualquier lenguaje de programación será mucho más fácil.',
        incorrectFeedback:
          'No es correcto. El Nivel 1 se enfocó en los fundamentos del pensamiento lógico, no en la sintaxis de un lenguaje específico. La habilidad principal que desarrollaste es diseñar algoritmos y resolver problemas de forma estructurada.',
      },
      {
        question: '¿Qué aprenderás en el Nivel 2 de este curso?',
        options: [
          'Diseño gráfico y colores para aplicaciones',
          'Variables avanzadas, condiciones complejas y repeticiones (bucles)',
          'Configuración de servidores y bases de datos',
          'Lenguajes de programación como Python y JavaScript',
        ],
        correctAnswer: 'Variables avanzadas, condiciones complejas y repeticiones (bucles)',
        correctFeedback:
          'Correcto. El Nivel 2 (Variables, condiciones y decisiones) construye directamente sobre el Nivel 1, expandiendo tu capacidad para diseñar algoritmos más complejos con variables, condiciones anidadas y bucles.',
        incorrectFeedback:
          'No es correcto. El Nivel 2 continúa con la lógica de programación, profundizando en variables, condiciones complejas y repeticiones. Los lenguajes de programación específicos y el diseño gráfico son temas de otros cursos.',
      },
    ],
  },
]

export const logicaModule5: Module = {
  number: 5,
  title: 'Resolución de problemas con pseudocódigo',
  level: 'básico',
  lessons: lessonsLogicaModule5,
}
