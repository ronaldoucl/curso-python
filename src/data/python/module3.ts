import type { Lesson } from '@/types'
import type { Module } from '@/types'

export const lessonsModule3: Lesson[] = [
  {
    slug: 'condicionales-if-elif-else',
    title: 'Condicionales: if, elif, else',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 12,
    description: 'Aprende a hacer que tus programas tomen decisiones usando if, elif y else.',
    explanation: `Los condicionales le dan "inteligencia" a tus programas: les permiten **tomar decisiones** según las circunstancias. Sin ellos, tu programa haría siempre lo mismo sin importar los datos.

Piénsalo como un semáforo: **si** la luz es verde, avanza; **si no, si** es amarillo, despacio; **si no**, para.

**La estructura if:**
\`\`\`python
if condicion:
    # Código que se ejecuta si la condición es verdadera
\`\`\`

**La estructura if / else:**
\`\`\`python
if condicion:
    # Se ejecuta si es verdadera
else:
    # Se ejecuta si es falsa
\`\`\`

**La estructura if / elif / else:**
\`\`\`python
if condicion1:
    # Se ejecuta si condicion1 es verdadera
elif condicion2:
    # Se ejecuta si condicion1 fue falsa y condicion2 es verdadera
elif condicion3:
    # Se puede añadir tantos elif como necesites
else:
    # Se ejecuta si ninguna condición anterior fue verdadera
\`\`\`

Python evalúa las condiciones **en orden, de arriba hacia abajo**, y ejecuta el primer bloque cuya condición sea verdadera. Los demás se ignoran.

**Reglas de sintaxis obligatorias:**
- Los dos puntos \`:\` al final de cada \`if\`, \`elif\` y \`else\` son **obligatorios**.
- El código dentro de cada bloque debe estar **indentado** (4 espacios). Python usa la indentación para saber qué pertenece a qué bloque.

**Operadores de comparación:**
- \`==\` igual a
- \`!=\` diferente de
- \`>\` mayor que, \`<\` menor que
- \`>=\` mayor o igual, \`<=\` menor o igual

**Errores comunes:**
- Olvidar los dos puntos \`:\` al final: \`if nota >= 90\` → error; \`if nota >= 90:\` → correcto.
- Indentación incorrecta: mezclar espacios y tabulaciones, o no indentar el bloque.
- Usar \`=\` (asignación) en lugar de \`==\` (comparación): \`if edad = 18\` es un error; \`if edad == 18\` es correcto.
- Poner el \`else\` en la misma línea que el código anterior en lugar de al mismo nivel que el \`if\`.`,
    codeExample: `# Sistema de calificaciones
nota = 85

if nota >= 90:
    calificacion = "Excelente"
elif nota >= 75:
    calificacion = "Bueno"
elif nota >= 60:
    calificacion = "Suficiente"
else:
    calificacion = "Insuficiente"

print(f"Tu nota es: {nota} → {calificacion}")
# Tu nota es: 85 → Bueno

# Verificación de edad
edad = 17

if edad >= 18:
    print("Eres mayor de edad, puedes entrar.")
else:
    print("Eres menor de edad, no puedes entrar.")
# Eres menor de edad, no puedes entrar.

# Menú de restaurante
opcion = 2

if opcion == 1:
    print("Elegiste: Ensalada")
elif opcion == 2:
    print("Elegiste: Pasta")
elif opcion == 3:
    print("Elegiste: Sopa")
else:
    print("Opción no válida")
# Elegiste: Pasta`,
    keyPoints: [
      'if ejecuta un bloque solo si su condición es verdadera.',
      'elif permite probar otra condición si la anterior fue falsa. Puedes tener tantos elif como necesites.',
      'else captura todos los casos que no cumplieron ninguna condición anterior.',
      'Los dos puntos `:` al final de if, elif y else son obligatorios.',
      'La indentación (4 espacios) define qué líneas pertenecen a cada bloque.',
      'Usa `==` para comparar igualdad, nunca `=` (que es para asignar).',
    ],
    exercise: {
      description: 'Crea un programa que clasifique la temperatura. Pide al usuario que ingrese la temperatura en grados Celsius e imprime la categoría: "Helado" si es menor que 0, "Frío" si está entre 0 y 10, "Fresco" si está entre 10 y 20, "Cálido" si está entre 20 y 30, y "Caluroso" si es mayor que 30.',
      hint: 'Usa `temperatura = float(input(...))` para obtener el número. Luego usa if/elif/else con los rangos indicados. Recuerda que elif temperatura < 10 ya asume que temperatura >= 0 porque el if anterior falló.',
    },
    quiz: [
      {
        question: '¿Qué imprime este código?\nnota = 72\nif nota >= 90:\n    print("Excelente")\nelif nota >= 70:\n    print("Bueno")\nelif nota >= 60:\n    print("Suficiente")\nelse:\n    print("Insuficiente")',
        options: ['Excelente', 'Bueno', 'Suficiente', 'Insuficiente'],
        correctAnswer: 'Bueno',
        correctFeedback: '72 no es >= 90 (primer if falla), pero sí es >= 70 (primer elif se cumple), así que se imprime "Bueno" y los demás bloques se ignoran.',
        incorrectFeedback: 'La respuesta es "Bueno". Python evalúa de arriba hacia abajo: 72 >= 90 es falso, 72 >= 70 es verdadero, así que se ejecuta ese elif y los demás se ignoran.',
      },
      {
        question: '¿Cuál de estos errores de sintaxis impediría que el código funcione?',
        options: [
          'if edad >= 18:',
          'if edad >= 18',
          'if edad == 18:',
          'if edad != 18:',
        ],
        correctAnswer: 'if edad >= 18',
        correctFeedback: 'Faltan los dos puntos `:` al final. Python los requiere obligatoriamente en if, elif, else, for, while y def.',
        incorrectFeedback: 'La opción incorrecta es `if edad >= 18` porque le faltan los dos puntos `:` al final. Python siempre requiere `:` para iniciar un bloque de código.',
      },
      {
        question: '¿Cuál es la diferencia entre `=` y `==` en Python?',
        options: [
          '`=` compara dos valores; `==` asigna un valor a una variable',
          '`=` asigna un valor a una variable; `==` compara dos valores',
          'Son exactamente lo mismo',
          '`==` solo funciona con números',
        ],
        correctAnswer: '`=` asigna un valor a una variable; `==` compara dos valores',
        correctFeedback: '`=` es el operador de asignación (x = 5 guarda el valor 5 en x). `==` es el operador de comparación (x == 5 pregunta si x vale 5, devuelve True o False).',
        incorrectFeedback: '`=` sirve para asignar (guardar un valor en una variable), mientras que `==` sirve para comparar (preguntar si dos valores son iguales). Confundirlos es uno de los errores más comunes.',
      },
      {
        question: '¿Cuántos bloques elif puede tener un condicional en Python?',
        options: [
          'Solo uno',
          'Máximo dos',
          'Máximo cinco',
          'Los que necesites',
        ],
        correctAnswer: 'Los que necesites',
        correctFeedback: 'Python no tiene límite de elif. Puedes encadenar tantos como la lógica de tu programa requiera.',
        incorrectFeedback: 'Puedes usar tantos elif como necesites. No hay límite. Eso sí, si tienes muchos elif con el mismo patrón, quizás convenga usar una estructura de datos en su lugar.',
      },
      {
        question: '¿Qué sucede si ninguna condición del if/elif es verdadera y no hay else?',
        options: [
          'Python lanza un error',
          'Se ejecuta el último elif de todas formas',
          'No se ejecuta ningún bloque y el programa continúa',
          'El programa se detiene',
        ],
        correctAnswer: 'No se ejecuta ningún bloque y el programa continúa',
        correctFeedback: 'El else es opcional. Si no hay else y ninguna condición es verdadera, Python simplemente no ejecuta ninguno de los bloques y continúa con el código siguiente.',
        incorrectFeedback: 'El else es completamente opcional. Si ninguna condición es verdadera y no existe else, Python simplemente salta todo el bloque if/elif y continúa ejecutando el resto del programa.',
      },
      {
        question: '¿Por qué es importante la indentación en los bloques if de Python?',
        options: [
          'Es solo por estilo, no afecta el funcionamiento',
          'Python la usa para saber qué líneas pertenecen a cada bloque',
          'Solo importa en el primer nivel de indentación',
          'Python acepta cualquier cantidad de espacios mezclados',
        ],
        correctAnswer: 'Python la usa para saber qué líneas pertenecen a cada bloque',
        correctFeedback: 'A diferencia de otros lenguajes que usan llaves {}, Python usa la indentación para definir bloques de código. Una indentación incorrecta causa errores o comportamientos inesperados.',
        incorrectFeedback: 'En Python la indentación es parte de la sintaxis, no solo estética. Python determina qué líneas pertenecen a cada bloque (if, else, for, etc.) por su nivel de indentación. Incorrecta indentación = error.',
      },
    ],
  },
  {
    slug: 'condiciones-multiples',
    title: 'Condiciones múltiples',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 13,
    description: 'Aprende a combinar varias condiciones usando and, or y not.',
    explanation: `Muchas veces una sola condición no es suficiente. Python te permite **combinar condiciones** con los operadores lógicos \`and\`, \`or\` y \`not\`.

**Operador and (y):**
La condición completa es verdadera **solo si ambas partes son verdaderas**.
\`\`\`python
if tiene_entrada and llego_a_tiempo:
    print("Puede entrar al concierto")
\`\`\`

Tabla de verdad de and:
- True and True → True
- True and False → False
- False and True → False
- False and False → False

**Operador or (o):**
La condición completa es verdadera **si al menos una parte es verdadera**.
\`\`\`python
if es_viernes or es_sabado:
    print("¡Fin de semana!")
\`\`\`

Tabla de verdad de or:
- True or True → True
- True or False → True
- False or True → True
- False or False → False

**Operador not (no):**
**Invierte** el valor de la condición: convierte True en False y viceversa.
\`\`\`python
if not esta_lloviendo:
    print("Podemos salir")
\`\`\`

**Combinando operadores:**
Puedes combinar and, or y not en una misma condición. Usa paréntesis para dejar clara la prioridad:
\`\`\`python
if (edad >= 18 and tiene_carnet) or es_acompanado_por_adulto:
    print("Puede entrar")
\`\`\`

**Errores comunes:**
- Escribir la condición de forma incompleta: \`if edad > 18 and < 65\` es un error. Debes repetir la variable: \`if edad > 18 and edad < 65\`.
- Confundir \`and\` con \`or\`: "solo si tiene cupón y compra más de $50" requiere \`and\`; "si es estudiante o es mayor de 65" requiere \`or\`.
- Olvidar que \`not\` tiene mayor precedencia que \`and\` y \`or\`; usa paréntesis cuando tengas duda.`,
    codeExample: `# Sistema de acceso con and
usuario = "admin"
contrasena = "1234"

usuario_ingresado = "admin"
contrasena_ingresada = "1234"

if usuario_ingresado == usuario and contrasena_ingresada == contrasena:
    print("Acceso concedido")
else:
    print("Usuario o contraseña incorrectos")
# Acceso concedido

# Descuento con múltiples condiciones
tiene_cupon = True
monto_compra = 80

if tiene_cupon and monto_compra >= 50:
    descuento = monto_compra * 0.15
    print(f"Descuento aplicado: \${descuento:.2f}")
else:
    print("Sin descuento")
# Descuento aplicado: $12.00

# Entrada gratis con or
es_estudiante = False
edad = 68

if edad < 12 or edad > 65 or es_estudiante:
    print("Entrada gratuita")
else:
    print(f"Precio normal")
# Entrada gratuita (edad > 65)

# not para invertir
tiene_deuda = False

if not tiene_deuda:
    print("Puede solicitar el crédito")
else:
    print("Debe saldar su deuda primero")
# Puede solicitar el crédito

# Combinación: rango de edad válido
edad = 30
if edad > 18 and edad < 65:
    print("En edad laboralmente activa")
# ¡OJO! incorrecto: if edad > 18 and < 65  ← SyntaxError`,
    keyPoints: [
      '`and` requiere que AMBAS condiciones sean verdaderas para que el resultado sea True.',
      '`or` requiere que AL MENOS UNA condición sea verdadera para que el resultado sea True.',
      '`not` invierte la condición: True se vuelve False y False se vuelve True.',
      'Siempre escribe la variable completa en cada parte: `edad > 18 and edad < 65`, nunca `edad > 18 and < 65`.',
      'Usa paréntesis para clarificar la prioridad cuando combinas and, or y not en la misma línea.',
    ],
    exercise: {
      description: 'Crea un programa que determine si una persona entra gratis al museo. La entrada es gratuita si cumple al menos una de estas condiciones: tiene menos de 12 años, tiene más de 65 años, o tiene carné de estudiante. Pide la edad al usuario y si tiene carné (s/n), y muestra el mensaje correspondiente.',
      hint: 'Convierte la edad con int(input(...)). Para el carné, compara el input con "s". Luego usa or para combinar las tres condiciones: `if edad < 12 or edad > 65 or tiene_carne:`',
    },
    quiz: [
      {
        question: '¿Qué resultado da True and False?',
        options: ['True', 'False', 'None', 'Error'],
        correctAnswer: 'False',
        correctFeedback: 'and requiere que AMBAS partes sean True. Como una de ellas es False, el resultado es False.',
        incorrectFeedback: 'and devuelve True solo si AMBAS partes son True. Como una es False, el resultado es False.',
      },
      {
        question: '¿Qué resultado da False or True?',
        options: ['False', 'True', 'None', 'Error'],
        correctAnswer: 'True',
        correctFeedback: 'or devuelve True si AL MENOS UNA parte es True. Como la segunda es True, el resultado es True.',
        incorrectFeedback: 'or devuelve True si al menos una parte es True. La segunda parte es True, así que el resultado es True.',
      },
      {
        question: '¿Cuál de estas condiciones está escrita correctamente en Python?',
        options: [
          'if edad > 18 and < 65:',
          'if edad > 18 and edad < 65:',
          'if 18 < edad < 65 and:',
          'if edad > 18 & edad < 65:',
        ],
        correctAnswer: 'if edad > 18 and edad < 65:',
        correctFeedback: 'Debes repetir la variable en cada parte de la condición. `edad > 18 and edad < 65` es la forma correcta. Python también acepta `18 < edad < 65` como atajo.',
        incorrectFeedback: 'La forma correcta es `if edad > 18 and edad < 65:`. Debes escribir la variable completa en cada comparación. `edad > 18 and < 65` es un SyntaxError.',
      },
      {
        question: '¿Qué hace el operador `not`?',
        options: [
          'Compara dos valores',
          'Combina dos condiciones',
          'Invierte el valor lógico de una condición',
          'Elimina una variable',
        ],
        correctAnswer: 'Invierte el valor lógico de una condición',
        correctFeedback: '`not True` da False y `not False` da True. Es útil para expresar condiciones negativas de forma clara.',
        incorrectFeedback: '`not` invierte el valor booleano: `not True` es False y `not False` es True. Se usa para negar condiciones.',
      },
      {
        question: 'Un sistema da acceso si el usuario es administrador O si tiene membresía activa Y no está bloqueado. ¿Cuál es la condición correcta?',
        options: [
          'if es_admin and (tiene_membresia and not bloqueado):',
          'if es_admin or (tiene_membresia and not bloqueado):',
          'if es_admin or tiene_membresia or not bloqueado:',
          'if es_admin and tiene_membresia or not bloqueado:',
        ],
        correctAnswer: 'if es_admin or (tiene_membresia and not bloqueado):',
        correctFeedback: 'Los paréntesis agrupan correctamente: (tiene_membresia and not bloqueado) se evalúa como una unidad, y luego se hace or con es_admin.',
        incorrectFeedback: 'La correcta es `if es_admin or (tiene_membresia and not bloqueado):`. Los paréntesis son clave: primero se evalúa la parte derecha como grupo, y luego se aplica el or.',
      },
      {
        question: '¿Qué imprime este código?\nx = 10\nif x > 5 and x < 20:\n    print("Dentro del rango")\nelse:\n    print("Fuera del rango")',
        options: [
          'Fuera del rango',
          'Dentro del rango',
          'Error de sintaxis',
          'No imprime nada',
        ],
        correctAnswer: 'Dentro del rango',
        correctFeedback: '10 > 5 es True y 10 < 20 es True. True and True = True, así que se ejecuta el if y se imprime "Dentro del rango".',
        incorrectFeedback: '10 > 5 es True y 10 < 20 es True. True and True da True, por lo que se ejecuta el bloque if: "Dentro del rango".',
      },
    ],
  },
  {
    slug: 'condicionales-anidados',
    title: 'Condicionales anidados',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 14,
    description: 'Aprende a usar un condicional dentro de otro y cuándo conviene evitar que el código se vuelva difícil de leer.',
    explanation: `Un **condicional anidado** es simplemente un \`if\` dentro de otro \`if\`. Esto permite clasificar por múltiples criterios de forma progresiva.

\`\`\`python
if condicion_exterior:
    if condicion_interior:
        # Se ejecuta si ambas son verdaderas
    else:
        # Exterior verdadera, interior falsa
else:
    # Exterior falsa
\`\`\`

**¿Cuándo es útil?**
Cuando necesitas verificar algo solo después de confirmar otra condición previa. Por ejemplo: primero verificar si es adulto, y solo si es adulto, verificar si tiene membresía.

**El peligro de la "pirámide de la muerte":**
Si anidas demasiados niveles, el código se vuelve muy difícil de leer y mantener:
\`\`\`python
if condicion1:
    if condicion2:
        if condicion3:
            if condicion4:
                # ¡4 niveles de indentación! Muy difícil de seguir
\`\`\`

**Regla de oro:** si puedes reescribir un condicional anidado usando \`and\`, hazlo. El código quedará más limpio y fácil de entender.

**Versión anidada (más difícil de leer):**
\`\`\`python
if es_adulto:
    if tiene_membresia:
        print("Precio especial")
\`\`\`

**Versión simplificada con and (mejor):**
\`\`\`python
if es_adulto and tiene_membresia:
    print("Precio especial")
\`\`\`

**¿Cuándo SÍ conviene anidar?**
Cuando las acciones del caso exterior son diferentes aunque la condición interior falle. Por ejemplo, cuando hay lógica distinta para adultos y menores, y dentro de cada uno hay más ramificaciones.

**Errores comunes:**
- Perder la cuenta de la indentación y meter código en el bloque equivocado.
- Confundir a qué \`if\` pertenece cada \`else\` (el \`else\` pertenece al \`if\` del mismo nivel de indentación).
- Anidar más de 2-3 niveles cuando un \`and\` sería suficiente.`,
    codeExample: `# Clasificar tipo de entrada a un evento
# Versión con condicionales anidados
es_adulto = True
es_miembro = False

if es_adulto:
    if es_miembro:
        print("Adulto miembro: entrada $10")
    else:
        print("Adulto no miembro: entrada $20")
else:
    if es_miembro:
        print("Joven miembro: entrada $5")
    else:
        print("Joven no miembro: entrada $12")
# Adulto no miembro: entrada $20

# La misma lógica con and (cuando los casos son simples)
# Versión simplificada: más limpia para condiciones sin distinción de bloques
if es_adulto and es_miembro:
    print("Adulto miembro: entrada $10")
elif es_adulto and not es_miembro:
    print("Adulto no miembro: entrada $20")
elif not es_adulto and es_miembro:
    print("Joven miembro: entrada $5")
else:
    print("Joven no miembro: entrada $12")

# Ejemplo donde anidar SÍ tiene sentido:
# (la lógica del exterior es diferente para adultos y menores)
edad = 20
tiene_descuento = True

if edad >= 18:
    print("Sección adultos")
    if tiene_descuento:
        precio = 15
    else:
        precio = 25
    print(f"Tu precio: \${precio}")
else:
    print("Sección infantil (entrada siempre gratuita)")

# Evitar la pirámide de la muerte
# MAL: 4 niveles anidados
# if tiene_cuenta:
#     if saldo_positivo:
#         if no_bloqueado:
#             if verificado:
#                 print("Puede operar")

# BIEN: un solo if con and
# if tiene_cuenta and saldo_positivo and no_bloqueado and verificado:
#     print("Puede operar")`,
    keyPoints: [
      'Un condicional anidado es un if dentro de otro if, útil para clasificar por dos criterios a la vez.',
      'El else pertenece siempre al if del mismo nivel de indentación.',
      'Más de 2-3 niveles de anidación dificultan la lectura; se conoce como "pirámide de la muerte".',
      'Si puedes reemplazar un if anidado por `and`, hazlo: el código quedará más claro.',
      'Anidar sí tiene sentido cuando cada rama exterior tiene lógica diferente que no puedes combinar fácilmente.',
    ],
    exercise: {
      description: 'Tienes este código con condicionales anidados:\n```\nif tiene_trabajo:\n    if gana_mas_de_1000:\n        print("Aprobado")\n    else:\n        print("Rechazado")\nelse:\n    print("Rechazado")\n```\nReescríbelo usando `and` en un solo if/else para obtener el mismo resultado.',
      hint: 'Nota que "Aprobado" solo ocurre cuando AMBAS condiciones son verdaderas. "Rechazado" ocurre en todos los demás casos. Eso se expresa perfectamente con `if tiene_trabajo and gana_mas_de_1000:`.',
    },
    quiz: [
      {
        question: '¿A qué `if` pertenece el `else` en este código?\nif a:\n    if b:\n        print("1")\n    else:\n        print("2")\nprint("3")',
        options: [
          'Al if externo (if a)',
          'Al if interno (if b)',
          'A ambos',
          'No está permitido',
        ],
        correctAnswer: 'Al if interno (if b)',
        correctFeedback: 'El else está indentado al mismo nivel que `if b:`, así que pertenece al if interno. Se ejecuta cuando a es True pero b es False.',
        incorrectFeedback: 'El else pertenece al if del mismo nivel de indentación. Como el else está al mismo nivel que `if b:`, le pertenece a ese if interno.',
      },
      {
        question: '¿Cuándo es preferible usar `and` en lugar de anidar if?',
        options: [
          'Nunca, el anidado siempre es mejor',
          'Cuando la condición compuesta simplemente decide entre dos acciones sin lógica extra en cada rama',
          'Solo cuando hay más de 5 condiciones',
          'Solo en bucles, no en condicionales',
        ],
        correctAnswer: 'Cuando la condición compuesta simplemente decide entre dos acciones sin lógica extra en cada rama',
        correctFeedback: 'Si la única diferencia es si ambas condiciones se cumplen o no, `and` es más limpio. El anidado conviene cuando cada rama tiene su propia lógica adicional.',
        incorrectFeedback: 'Usa `and` cuando la condición simplemente decide si hacer algo o no. El anidado conviene cuando cada rama exterior tiene comportamiento distinto que no puedes combinar en una sola línea.',
      },
      {
        question: '¿Cómo se llama el anti-patrón de tener demasiados niveles de condicionales anidados?',
        options: [
          'El bucle infinito',
          'La pirámide de la muerte',
          'El árbol caído',
          'La escalera de Python',
        ],
        correctAnswer: 'La pirámide de la muerte',
        correctFeedback: 'La "pirámide de la muerte" (o pyramid of doom) describe el código que crece hacia la derecha con múltiples niveles de anidación, haciéndose muy difícil de leer.',
        incorrectFeedback: 'Se llama "la pirámide de la muerte". Describe el código con muchos niveles de anidación que va creciendo hacia la derecha, volviéndose difícil de leer y mantener.',
      },
      {
        question: '¿Cuál es el resultado de este código?\nx = 5\nif x > 0:\n    if x > 10:\n        print("Grande")\n    else:\n        print("Pequeño positivo")\nelse:\n    print("Negativo")',
        options: ['Grande', 'Pequeño positivo', 'Negativo', 'No imprime nada'],
        correctAnswer: 'Pequeño positivo',
        correctFeedback: 'x=5 es > 0 (entra al if externo), pero no es > 10 (no entra al if interno), así que se ejecuta el else interno: "Pequeño positivo".',
        incorrectFeedback: '5 > 0 es True (entra al bloque externo). Dentro, 5 > 10 es False, así que se ejecuta el else interno e imprime "Pequeño positivo".',
      },
      {
        question: '¿Cuál de estas versiones es más fácil de leer y mantener?',
        options: [
          'if a:\n    if b:\n        print("OK")',
          'if a and b:\n    print("OK")',
          'Ambas son igual de claras',
          'La primera porque muestra la lógica paso a paso',
        ],
        correctAnswer: 'if a and b:\n    print("OK")',
        correctFeedback: '`if a and b:` es más concisa y directa. La versión anidada añade un nivel extra de indentación sin aportar ningún beneficio cuando la lógica es la misma.',
        incorrectFeedback: '`if a and b:` es más limpia. La versión anidada ocupa más líneas y añade complejidad visual sin ningún beneficio cuando la lógica es idéntica.',
      },
    ],
  },
  {
    slug: 'bucles-for',
    title: 'Bucles for',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 15,
    description: 'Aprende a repetir acciones en Python usando for para recorrer listas, textos y rangos.',
    explanation: `Un **bucle** permite repetir un bloque de código múltiples veces sin escribirlo una y otra vez. El bucle \`for\` en Python repite el bloque **para cada elemento de una colección**.

Analogía: es como hacer la lista del súper. Para cada artículo en tu lista, lo añades al carrito. El "para cada" es exactamente lo que hace \`for\`.

**Sintaxis básica:**
\`\`\`python
for variable in coleccion:
    # código que se repite
\`\`\`

La variable toma el valor de cada elemento en cada iteración.

**range() — generar secuencias de números:**
\`\`\`python
range(5)           # 0, 1, 2, 3, 4  (empieza en 0, no incluye el 5)
range(1, 6)        # 1, 2, 3, 4, 5  (empieza en 1, no incluye el 6)
range(0, 10, 2)    # 0, 2, 4, 6, 8  (de 2 en 2)
range(10, 0, -1)   # 10, 9, 8, ..., 1 (cuenta regresiva)
\`\`\`

**Iterar sobre una lista:**
\`\`\`python
frutas = ["manzana", "pera", "uva"]
for fruta in frutas:
    print(fruta)
\`\`\`

**Iterar sobre un string:**
\`\`\`python
for letra in "Hola":
    print(letra)   # H, o, l, a (una por línea)
\`\`\`

**enumerate() — índice y valor a la vez:**
\`\`\`python
for indice, valor in enumerate(["a", "b", "c"]):
    print(indice, valor)   # 0 a, 1 b, 2 c
\`\`\`

**Errores comunes:**
- Olvidar los dos puntos \`:\` al final del \`for\`.
- Indentación incorrecta dentro del bucle.
- Modificar la lista mientras la estás recorriendo (puede causar comportamientos inesperados; itera sobre una copia si lo necesitas).
- Confundir \`range(5)\` con los números del 1 al 5: range(5) genera 0, 1, 2, 3, 4.`,
    codeExample: `# Tabla de multiplicar del 3
for i in range(1, 11):
    print(f"3 x {i} = {3 * i}")
# 3 x 1 = 3
# 3 x 2 = 6  ... hasta 3 x 10 = 30

# Iterar sobre una lista de nombres
nombres = ["Ana", "Luis", "María", "Carlos"]
for nombre in nombres:
    print(f"Hola, {nombre}!")
# Hola, Ana!  Hola, Luis! ...

# Sumar números del 1 al 100
total = 0
for numero in range(1, 101):
    total += numero
print(f"La suma del 1 al 100 es: {total}")
# La suma del 1 al 100 es: 5050

# enumerate: obtener índice y valor
colores = ["rojo", "verde", "azul"]
for i, color in enumerate(colores):
    print(f"Color {i + 1}: {color}")
# Color 1: rojo
# Color 2: verde
# Color 3: azul

# Iterar sobre un string
palabra = "Python"
for letra in palabra:
    print(letra, end="-")
# P-y-t-h-o-n-

# range con paso
print("Números pares del 2 al 10:")
for par in range(2, 11, 2):
    print(par, end=" ")
# 2 4 6 8 10`,
    keyPoints: [
      'for repite el bloque de código una vez por cada elemento de la colección.',
      'range(n) genera números del 0 al n-1. range(a, b) va de a hasta b-1. range(a, b, paso) salta de en paso.',
      'Puedes recorrer listas, strings, rangos y cualquier otra colección iterable.',
      'enumerate() te da el índice y el valor al mismo tiempo, muy útil para saber la posición de cada elemento.',
      'No modifiques una lista mientras la recorres con for; puede causar errores o saltar elementos.',
      'Los dos puntos `:` y la indentación son obligatorios igual que en los condicionales.',
    ],
    exercise: {
      description: 'Crea un programa que pida al usuario un número del 1 al 10 e imprima la tabla de multiplicar completa de ese número (del 1 al 10). Por ejemplo, si ingresa 7, debe mostrar:\n7 x 1 = 7\n7 x 2 = 14\n...\n7 x 10 = 70',
      hint: 'Usa `numero = int(input(...))` para obtener el número. Luego usa `for i in range(1, 11):` y dentro del bucle imprime `f"{numero} x {i} = {numero * i}"`.',
    },
    quiz: [
      {
        question: '¿Qué números genera range(3, 8)?',
        options: ['3, 4, 5, 6, 7, 8', '3, 4, 5, 6, 7', '4, 5, 6, 7', '3, 5, 7'],
        correctAnswer: '3, 4, 5, 6, 7',
        correctFeedback: 'range(inicio, fin) genera desde inicio hasta fin-1. range(3, 8) genera 3, 4, 5, 6, 7. El 8 no se incluye.',
        incorrectFeedback: 'range(3, 8) genera 3, 4, 5, 6, 7. El número final (8) nunca se incluye. Para incluir el 8, usarías range(3, 9).',
      },
      {
        question: '¿Cuántas veces se ejecuta el cuerpo de este bucle?\nfor i in range(5):\n    print(i)',
        options: ['4 veces', '5 veces', '6 veces', '1 vez'],
        correctAnswer: '5 veces',
        correctFeedback: 'range(5) genera 0, 1, 2, 3, 4 — cinco números. El bucle se ejecuta una vez por cada número, es decir, 5 veces.',
        incorrectFeedback: 'range(5) produce los números 0, 1, 2, 3, 4 — en total 5 valores. El bucle se ejecuta 5 veces, imprimiendo 0, 1, 2, 3 y 4.',
      },
      {
        question: '¿Para qué sirve enumerate() en un bucle for?',
        options: [
          'Para contar solo los elementos pares',
          'Para obtener el índice y el valor de cada elemento al mismo tiempo',
          'Para invertir el orden de la lista',
          'Para filtrar elementos de la lista',
        ],
        correctAnswer: 'Para obtener el índice y el valor de cada elemento al mismo tiempo',
        correctFeedback: 'enumerate(lista) devuelve pares (índice, valor) en cada iteración. Es muy útil cuando necesitas saber la posición del elemento además de su valor.',
        incorrectFeedback: 'enumerate() entrega dos valores en cada vuelta del bucle: el índice (posición) y el valor del elemento. Se usa así: `for i, elemento in enumerate(lista):`',
      },
      {
        question: '¿Qué imprime este código?\nfor letra in "sol":\n    print(letra)',
        options: ['sol', 's o l (en una sola línea)', 's\\no\\nl (cada letra en una línea)', 'Error'],
        correctAnswer: 's\no\nl (cada letra en una línea)',
        correctFeedback: 'Python puede iterar sobre strings caracter por caracter. Cada iteración toma una letra y print() la imprime en su propia línea.',
        incorrectFeedback: 'Al iterar sobre un string con for, Python recorre letra por letra. print(letra) imprime cada una en su propia línea: s, luego o, luego l.',
      },
      {
        question: '¿Cuál es la forma correcta de generar los números 10, 8, 6, 4, 2 con range?',
        options: [
          'range(10, 2)',
          'range(2, 10, -2)',
          'range(10, 1, -2)',
          'range(10, 2, 2)',
        ],
        correctAnswer: 'range(10, 1, -2)',
        correctFeedback: 'range(10, 1, -2) comienza en 10, va hasta 2 (sin incluir 1), en pasos de -2: 10, 8, 6, 4, 2.',
        incorrectFeedback: 'Para contar hacia atrás de 2 en 2 desde 10 hasta 2, se usa range(10, 1, -2). El paso negativo -2 indica que va bajando. El límite inferior (1) no se incluye.',
      },
      {
        question: '¿Qué problema puede ocurrir si modificas una lista mientras la recorres con for?',
        options: [
          'Python lanza siempre un IndexError',
          'El bucle puede saltar elementos o comportarse de forma inesperada',
          'La lista se borra completamente',
          'Nada, Python lo maneja de forma segura',
        ],
        correctAnswer: 'El bucle puede saltar elementos o comportarse de forma inesperada',
        correctFeedback: 'Si agregas o eliminas elementos de la lista mientras el for la recorre, los índices internos pueden desincronizarse y el bucle puede saltar elementos o repetirlos.',
        incorrectFeedback: 'Modificar una lista mientras el for la recorre puede causar comportamientos inesperados: saltar elementos, repetirlos o causar errores. Si necesitas modificarla, itera sobre una copia: `for x in lista[:]:`',
      },
    ],
  },
  {
    slug: 'bucles-while',
    title: 'Bucles while',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 16,
    description: 'Aprende a usar while para repetir código mientras una condición sea verdadera.',
    explanation: `El bucle \`while\` repite un bloque de código **mientras una condición sea verdadera**. A diferencia de \`for\`, no necesitas saber de antemano cuántas veces vas a repetir.

\`\`\`python
while condicion:
    # Código que se repite
\`\`\`

**¿Cuándo usar while en lugar de for?**
- Usa \`for\` cuando sabes cuántas veces repetir o tienes una colección que recorrer.
- Usa \`while\` cuando la repetición depende de una condición que puede cambiar, como pedir datos al usuario hasta que sean válidos, o jugar hasta que el jugador quiera salir.

**Patrón contador:**
\`\`\`python
contador = 0
while contador < 5:
    print(contador)
    contador += 1   # ¡CRÍTICO! sin esto el bucle no termina nunca
\`\`\`

**El peligro del bucle infinito:**
Si la condición nunca se vuelve False, el programa queda atrapado para siempre. Esto ocurre cuando olvidas actualizar la variable que controla la condición.
\`\`\`python
# ¡Bucle infinito! (no hagas esto)
x = 0
while x < 5:
    print(x)
    # ← Falta x += 1 → el bucle nunca termina
\`\`\`
Si te pasa, presiona **Ctrl + C** para detener el programa.

**Patrón while True con break:**
Útil para menús o para pedir datos hasta que el usuario decida salir:
\`\`\`python
while True:
    respuesta = input("¿Continuar? (s/n): ")
    if respuesta == "n":
        break   # Sale del bucle
    print("Continuando...")
\`\`\`

**Errores comunes:**
- Olvidar actualizar la variable de control → bucle infinito.
- Condición que nunca puede ser False desde el inicio.
- Confundir el indentado del código dentro del while con el código fuera de él.`,
    codeExample: `# Juego de adivinar el número
import random

numero_secreto = random.randint(1, 10)
intentos = 0

print("Adivina el número entre 1 y 10")

while True:
    intento = int(input("Tu intento: "))
    intentos += 1

    if intento == numero_secreto:
        print(f"¡Correcto! Lo lograste en {intentos} intentos.")
        break
    elif intento < numero_secreto:
        print("Demasiado bajo, intenta más alto")
    else:
        print("Demasiado alto, intenta más bajo")

# Validar entrada del usuario
# (pide hasta que el usuario ingrese un número positivo)
numero = -1
while numero <= 0:
    try:
        numero = int(input("Ingresa un número positivo: "))
        if numero <= 0:
            print("Debe ser mayor que 0, intenta de nuevo.")
    except ValueError:
        print("Eso no es un número entero, intenta de nuevo.")
        numero = -1

print(f"Número válido recibido: {numero}")

# Patrón contador clásico
cuenta = 1
while cuenta <= 5:
    print(f"Vuelta número {cuenta}")
    cuenta += 1   # ← ¡Sin esto sería un bucle infinito!
print("Bucle terminado")`,
    keyPoints: [
      'while repite el bloque mientras su condición sea True.',
      'Usa while cuando no sabes de antemano cuántas repeticiones necesitas.',
      'Siempre actualiza la variable que controla la condición; si no, creas un bucle infinito.',
      'Si tu programa se queda colgado, presiona Ctrl + C para detenerlo.',
      'El patrón `while True:` con `break` es útil para menús y validación de datos.',
    ],
    exercise: {
      description: 'Crea un programa que pida una contraseña al usuario. La contraseña correcta es "python123". El usuario tiene máximo 3 intentos. Si acierta, muestra "¡Acceso concedido!". Si agota los intentos, muestra "Acceso denegado. Demasiados intentos fallidos."',
      hint: 'Usa una variable `intentos = 0` y un bucle `while intentos < 3:`. Dentro del bucle, incrementa intentos, pide la contraseña y compara. Si es correcta, usa `break`. Al salir del bucle, verifica si la contraseña era correcta o si se agotaron los intentos.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre for y while?',
        options: [
          'for es más rápido que while',
          'while solo funciona con números',
          'for recorre colecciones o rangos conocidos; while repite mientras una condición sea verdadera',
          'No hay diferencia, son intercambiables siempre',
        ],
        correctAnswer: 'for recorre colecciones o rangos conocidos; while repite mientras una condición sea verdadera',
        correctFeedback: 'for es ideal cuando sabes cuántas veces repetir o tienes una colección. while es ideal cuando la repetición depende de una condición que puede cambiar en tiempo de ejecución.',
        incorrectFeedback: 'La diferencia clave: for se usa cuando conoces la colección o el número de repeticiones. while se usa cuando la repetición depende de una condición que puede volverse False en cualquier momento.',
      },
      {
        question: '¿Qué causa un bucle infinito en un while?',
        options: [
          'Usar números muy grandes',
          'No actualizar la variable que controla la condición',
          'Tener más de una condición con and',
          'Usar while True sin ningún código dentro',
        ],
        correctAnswer: 'No actualizar la variable que controla la condición',
        correctFeedback: 'Si la condición nunca cambia a False (por ejemplo, porque olvidas incrementar el contador), el while sigue ejecutándose indefinidamente.',
        incorrectFeedback: 'Un bucle infinito ocurre cuando la condición del while nunca se vuelve False. Esto sucede casi siempre porque olvidaste actualizar la variable que la condición evalúa.',
      },
      {
        question: '¿Cuántas veces se ejecuta este bucle?\nx = 10\nwhile x > 0:\n    x -= 3\n    print(x)',
        options: ['3 veces', '4 veces', '10 veces', 'Infinitas veces'],
        correctAnswer: '4 veces',
        correctFeedback: 'x empieza en 10: 10→7 (1ª), 7→4 (2ª), 4→1 (3ª), 1→-2 (4ª, ahora x=-2 que no es > 0, el bucle termina). Se ejecuta 4 veces.',
        incorrectFeedback: 'Seguimos x: empieza en 10. Vuelta 1: x=7, vuelta 2: x=4, vuelta 3: x=1, vuelta 4: x=-2 (ahora -2 > 0 es False, el while termina). Total: 4 veces.',
      },
      {
        question: '¿Qué hace break dentro de un bucle while?',
        options: [
          'Pausa el bucle temporalmente',
          'Sale completamente del bucle, sin importar la condición',
          'Reinicia el bucle desde el principio',
          'Lanza un error si la condición aún es True',
        ],
        correctAnswer: 'Sale completamente del bucle, sin importar la condición',
        correctFeedback: 'break termina el bucle inmediatamente y el programa continúa con el código que viene después del while. No se verifica la condición: sale directamente.',
        incorrectFeedback: 'break sale del bucle de forma inmediata, independientemente de si la condición sigue siendo True. El programa continúa ejecutando el código después del while.',
      },
      {
        question: '¿Cuál es la forma correcta de detener un programa que entró en bucle infinito?',
        options: [
          'Cerrar y reabrir Python',
          'Esperar a que Python lo detecte y lo detenga solo',
          'Presionar Ctrl + C',
          'Escribir exit() en otra ventana',
        ],
        correctAnswer: 'Presionar Ctrl + C',
        correctFeedback: 'Ctrl + C envía una señal de interrupción (KeyboardInterrupt) al programa, deteniéndolo inmediatamente. Es la forma estándar de detener un programa colgado.',
        incorrectFeedback: 'Ctrl + C es la combinación de teclas para interrumpir un programa en ejecución. Python lo interpreta como KeyboardInterrupt y detiene el programa.',
      },
      {
        question: '¿Qué imprime este código?\ncontador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1',
        options: ['0 1 2 3', '0 1 2', '1 2 3', '0 1 2 3 4'],
        correctAnswer: '0 1 2',
        correctFeedback: 'contador empieza en 0. Imprime 0 (contador se vuelve 1), imprime 1 (contador se vuelve 2), imprime 2 (contador se vuelve 3). 3 < 3 es False, el bucle termina.',
        incorrectFeedback: 'El bucle imprime 0, 1 y 2. Cuando contador llega a 3, la condición 3 < 3 es False y el bucle termina. El 3 nunca se imprime.',
      },
    ],
  },
  {
    slug: 'break-continue-bucles',
    title: 'break, continue y errores comunes en bucles',
    module: 'Control de flujo',
    moduleNumber: 3,
    order: 17,
    description: 'Aprende a controlar mejor tus bucles usando break y continue, y evita errores como bucles infinitos.',
    explanation: `Además de la condición del bucle, Python te da dos herramientas para controlar el flujo dentro de un bucle: \`break\` y \`continue\`.

**break — salir del bucle:**
Termina el bucle inmediatamente y el programa continúa con el código después del bucle.
\`\`\`python
for numero in range(10):
    if numero == 5:
        break    # Sale del bucle cuando llega a 5
    print(numero)
# Imprime: 0 1 2 3 4
\`\`\`

**continue — saltar al siguiente ciclo:**
Salta el resto del código en la iteración actual y pasa directamente a la siguiente.
\`\`\`python
for numero in range(5):
    if numero == 2:
        continue   # Salta el print cuando numero == 2
    print(numero)
# Imprime: 0 1 3 4  (el 2 se saltó)
\`\`\`

**else en bucles (característica especial de Python):**
El bloque \`else\` de un bucle se ejecuta **solo si el bucle terminó normalmente** (sin que se ejecutara un \`break\`). Es muy útil para detectar si se encontró o no un elemento.
\`\`\`python
for fruta in ["manzana", "pera", "uva"]:
    if fruta == "kiwi":
        print("Kiwi encontrado")
        break
else:
    print("No hay kiwi en la lista")  # Se ejecuta porque no hubo break
\`\`\`

**Errores comunes en bucles:**

**1. Rango incorrecto en range():**
\`\`\`python
# Error off-by-one: quería del 1 al 10 pero olvidé el +1
for i in range(1, 10):   # Genera 1..9, no incluye el 10
    print(i)
# Corrección:
for i in range(1, 11):   # Ahora sí incluye el 10
    print(i)
\`\`\`

**2. Modificar una lista mientras se recorre:**
\`\`\`python
# Peligroso: puede saltar elementos
numeros = [1, 2, 3, 4, 5]
for n in numeros:
    if n % 2 == 0:
        numeros.remove(n)   # ← peligroso
# Solución: iterar sobre una copia
for n in numeros[:]:
    if n % 2 == 0:
        numeros.remove(n)
\`\`\`

**3. Off-by-one:** comenzar en 1 cuando debías comenzar en 0, o terminar en n cuando debías terminar en n-1 (o viceversa). Siempre verifica los límites de tu range().`,
    codeExample: `# break: buscar elemento en lista
numeros = [3, 7, 1, 9, 4, 6, 2]
buscado = 9

for i, num in enumerate(numeros):
    if num == buscado:
        print(f"Encontrado {buscado} en la posición {i}")
        break
else:
    print(f"{buscado} no está en la lista")
# Encontrado 9 en la posición 3

# continue: filtrar impares (mostrar solo pares)
print("Números pares del 1 al 10:")
for n in range(1, 11):
    if n % 2 != 0:
        continue   # Salta los impares
    print(n, end=" ")
# 2 4 6 8 10

# else en bucle: verificar si todos son positivos
datos = [5, 3, 8, -1, 2]
for dato in datos:
    if dato < 0:
        print(f"Dato negativo encontrado: {dato}")
        break
else:
    print("Todos los datos son positivos")
# Dato negativo encontrado: -1

# Menú interactivo con while + break
opciones = {"1": "Ver perfil", "2": "Configuración", "3": "Salir"}

while True:
    print("\\n--- MENÚ ---")
    for clave, valor in opciones.items():
        print(f"  {clave}. {valor}")

    eleccion = input("Elige una opción: ")

    if eleccion == "3":
        print("¡Hasta luego!")
        break
    elif eleccion in opciones:
        print(f"Abriendo: {opciones[eleccion]}")
    else:
        print("Opción no válida, intenta de nuevo")`,
    keyPoints: [
      '`break` sale completamente del bucle de forma inmediata, sin verificar la condición.',
      '`continue` salta el resto de la iteración actual y pasa directamente a la siguiente.',
      'El `else` de un bucle se ejecuta solo si el bucle terminó sin un `break`; es útil para búsquedas.',
      'El error off-by-one es muy común: verifica siempre si range() incluye o excluye el límite superior.',
      'No modifiques una lista mientras la recorres con for; usa una copia con `lista[:]` si lo necesitas.',
      'Detecta bucles infinitos con Ctrl+C y busca la variable de control que olvidaste actualizar.',
    ],
    exercise: {
      description: 'Crea un menú interactivo con las opciones: 1-Saludar, 2-Despedirse, 3-Salir. Usa `while True` y `break`. Si el usuario elige 1, imprime "¡Hola!". Si elige 2, imprime "¡Adiós!". Si elige 3, imprime "Saliendo..." y sale del bucle. Si elige otra cosa, imprime "Opción no válida."',
      hint: 'Dentro del while True, pide la opción con input(). Usa if/elif/else para cada caso. El case 3 debe ejecutar `break` para salir del bucle while.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre break y continue?',
        options: [
          'break salta la iteración actual; continue sale del bucle',
          'break sale del bucle; continue salta al siguiente ciclo',
          'Son sinónimos y funcionan igual',
          'break solo funciona en while; continue solo en for',
        ],
        correctAnswer: 'break sale del bucle; continue salta al siguiente ciclo',
        correctFeedback: 'break termina el bucle completamente. continue solo termina la iteración actual y el bucle sigue con la siguiente. Son muy diferentes.',
        incorrectFeedback: 'break sale del bucle por completo. continue salta el resto del código en la iteración actual y pasa a la siguiente vuelta. Funcionan diferente y ambos se pueden usar en for y while.',
      },
      {
        question: '¿Qué imprime este código?\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i)',
        options: ['0 1 2 3 4', '0 1 2 4', '3', '0 1 2'],
        correctAnswer: '0 1 2 4',
        correctFeedback: 'Cuando i == 3, continue salta el print y va a la siguiente iteración. El resto se imprime normalmente: 0, 1, 2, 4.',
        incorrectFeedback: 'continue salta la iteración cuando i == 3, así que el 3 no se imprime. El resultado es 0, 1, 2, 4.',
      },
      {
        question: '¿Cuándo se ejecuta el bloque else de un bucle for?',
        options: [
          'Siempre, al final del bucle',
          'Solo cuando el bucle terminó sin ejecutar break',
          'Solo cuando el bucle lanzó un error',
          'Solo si el bucle no ejecutó ninguna iteración',
        ],
        correctAnswer: 'Solo cuando el bucle terminó sin ejecutar break',
        correctFeedback: 'El else de un bucle se ejecuta cuando el bucle completó todas sus iteraciones normalmente, sin que ningún break lo interrumpiera.',
        incorrectFeedback: 'El else de un bucle for/while solo se ejecuta si el bucle terminó de forma normal (sin break). Si en algún momento se ejecutó break, el else se omite.',
      },
      {
        question: '¿Qué es un error "off-by-one"?',
        options: [
          'Cuando el programa usa el tipo de dato incorrecto',
          'Cuando el rango del bucle se desfasa por uno, incluyendo o excluyendo un valor de más o de menos',
          'Cuando el bucle se ejecuta una sola vez',
          'Cuando se usa break en lugar de continue',
        ],
        correctAnswer: 'Cuando el rango del bucle se desfasa por uno, incluyendo o excluyendo un valor de más o de menos',
        correctFeedback: 'Off-by-one es uno de los errores más comunes: por ejemplo, usar range(1, 10) cuando querías incluir el 10, o empezar en 0 cuando debías empezar en 1.',
        incorrectFeedback: 'Off-by-one ocurre cuando el límite del bucle se pasa o se queda corto por uno. Por ejemplo: range(1, 10) cuando querías llegar al 10 (deberías usar range(1, 11)).',
      },
      {
        question: '¿Qué imprime este código?\nfor n in range(1, 6):\n    if n == 3:\n        break\n    print(n)',
        options: ['1 2 3 4 5', '1 2 3', '1 2', '3 4 5'],
        correctAnswer: '1 2',
        correctFeedback: 'El bucle imprime 1, luego 2. Cuando n llega a 3, break sale del bucle. El 3, 4 y 5 nunca se imprimen.',
        incorrectFeedback: 'break sale del bucle cuando n == 3. El print solo se ejecuta para 1 y 2. Cuando llega a 3, sale inmediatamente sin imprimir el 3.',
      },
      {
        question: '¿Cuál es la forma más segura de eliminar elementos de una lista mientras la recorres?',
        options: [
          'Usar remove() directamente dentro del for',
          'Iterar sobre una copia de la lista con lista[:]',
          'Usar break después de cada remove()',
          'No es posible eliminar elementos en un for',
        ],
        correctAnswer: 'Iterar sobre una copia de la lista con lista[:]',
        correctFeedback: '`for elemento in lista[:]` recorre una copia de la lista, así que puedes modificar la original sin afectar el recorrido.',
        incorrectFeedback: 'La forma segura es iterar sobre una copia: `for elemento in lista[:]`. Al recorrer la copia, puedes modificar la lista original sin causar saltos o comportamientos inesperados.',
      },
    ],
  },
]

export const module3: Module = {
  number: 3,
  title: 'Control de flujo',
  level: 'básico',
  lessons: lessonsModule3,
}
