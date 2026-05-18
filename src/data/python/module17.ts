import type { Lesson } from '@/types'

export const lessonsModule17: Lesson[] = [
  {
    slug: 'expresiones-regulares',
    title: '¿Qué son las expresiones regulares?',
    module: 'Expresiones regulares',
    moduleNumber: 17,
    order: 78,
    description: 'Aprende qué son las regex y para qué sirven al buscar patrones en texto.',
    explanation: `Las **expresiones regulares** (regex o regexp) son un lenguaje para describir patrones de texto. Con ellas puedes buscar, validar y manipular cadenas de caracteres de forma muy poderosa.

**¿Para qué sirven?**
- Validar emails, teléfonos, códigos postales
- Extraer información de texto (fechas, URLs, nombres)
- Reemplazar texto que cumple un patrón
- Buscar en archivos de log

**El módulo \`re\` de Python:**
\`\`\`python
import re
\`\`\`

**Patrones básicos:**

| Patrón | Coincide con |
|--------|-------------|
| \`abc\` | La cadena literal "abc" |
| \`.\` | Cualquier carácter (excepto salto de línea) |
| \`\\d\` | Un dígito (0-9) |
| \`\\w\` | Letra, número o guión bajo |
| \`\\s\` | Espacio en blanco (espacio, tab, salto) |
| \`\\D\` | No-dígito |
| \`\\W\` | No-word-character |
| \`^\` | Inicio de cadena |
| \`$\` | Fin de cadena |
| \`+\` | Uno o más del elemento anterior |
| \`*\` | Cero o más del elemento anterior |
| \`?\` | Cero o uno (opcional) |
| \`{3}\` | Exactamente 3 repeticiones |
| \`{2,5}\` | Entre 2 y 5 repeticiones |
| \`[abc]\` | Cualquiera de a, b o c |
| \`[a-z]\` | Cualquier letra minúscula |
| \`(abc)\` | Grupo de captura |

**Raw strings para patrones:**
Usa siempre \`r"patron"\` para evitar conflictos con \`\\\`:
\`\`\`python
patron = r"\\d{3}-\\d{4}"   # ← correcto
patron =  "\\\\d{3}-\\\\d{4}"  # ← correcto pero feo
\`\`\``,
    codeExample: `import re

# Patrones básicos demostrados
texto = "Mi teléfono es 555-1234 y mi código postal es 06600"

# \\d = dígito
patron_digitos = r"\\d+"
coincidencias = re.findall(patron_digitos, texto)
print("Números encontrados:", coincidencias)  # ['555', '1234', '06600']

# \\w = carácter de palabra
palabras = re.findall(r"\\w+", "Hola, mundo! Python es genial.")
print("Palabras:", palabras[:5])  # ['Hola', 'mundo', 'Python', 'es', 'genial']

# . = cualquier carácter
patron_3 = r"...-\\d{4}"   # 3 chars, guión, 4 dígitos
if re.search(patron_3, texto):
    print("Encontrado patrón telefónico")

# Anclas: ^ y $
correos = ["usuario@ejemplo.com", "no-es-email", "otro@test.org"]
for c in correos:
    if re.match(r"^\\w+@\\w+\\.\\w+$", c):
        print(f"  ✓ {c}")
    else:
        print(f"  ✗ {c}")

# Cuantificadores: +, *, ?, {n,m}
texto2 = "Color, colour, coloor"
# colou?r: la 'u' es opcional
for m in re.finditer(r"colou?r", texto2):
    print(f"Encontrado: '{m.group()}' en posición {m.start()}")

# Clases de caracteres
vocales = re.findall(r"[aeiou]", "python es genial")
print("Vocales:", vocales)`,
    keyPoints: [
      'Las expresiones regulares son un lenguaje para describir patrones de texto',
      'El módulo `re` de Python proporciona todas las funciones para trabajar con regex',
      'Usa siempre raw strings `r"patrón"` para evitar problemas con el carácter backslash',
      '`\\d` = dígito, `\\w` = carácter de palabra, `\\s` = espacio en blanco',
      '`+` = uno o más, `*` = cero o más, `?` = cero o uno, `{n,m}` = entre n y m',
      '`^` ancla al inicio, `$` ancla al final de la cadena',
    ],
    exercise: {
      description: 'Escribe un patrón regex que encuentre todos los precios en el texto "El libro cuesta $25.99 y la pluma $3.50 y el cuaderno $12". Los precios tienen el formato `$número.decimales`. Usa `re.findall()`.',
      hint: 'El patrón debe empezar con `\\$` (el $ literal necesita escaparse), seguido de `\\d+`, luego `\\.`, luego `\\d{2}`.',
    },
    quiz: [
      {
        question: '¿Para qué se usan las expresiones regulares?',
        options: [
          'Para definir funciones matemáticas',
          'Para describir y buscar patrones en texto',
          'Para crear listas y diccionarios',
          'Para manejar excepciones',
        ],
        correctAnswer: 'Para describir y buscar patrones en texto',
        correctFeedback: 'Correcto. Las regex permiten buscar, validar y transformar texto basándose en patrones estructurales.',
        incorrectFeedback: 'Las expresiones regulares sirven para trabajar con texto de forma avanzada: buscar patrones, validar formatos (emails, teléfonos), extraer información y reemplazar texto.',
      },
      {
        question: '¿Por qué se usan raw strings (`r"..."`) para los patrones regex en Python?',
        options: [
          'Para que el patrón sea más rápido',
          'Para evitar que Python interprete las secuencias de escape como \\n, \\t, etc.',
          'Porque re.search() solo acepta raw strings',
          'Para poder usar caracteres Unicode',
        ],
        correctAnswer: 'Para evitar que Python interprete las secuencias de escape como \\n, \\t, etc.',
        correctFeedback: 'Correcto. En `r"\\d+"`, el `\\d` llega al motor regex como `\\d`. Sin la r, Python convertiría `\\d` en algo diferente antes de pasarlo al motor regex.',
        incorrectFeedback: 'Sin el prefijo `r`, Python interpreta `\\d` como la secuencia de escape `\\d` (no válida y se convierte en `d`). Con `r"\\d+"`, el backslash llega tal cual al motor de regex.',
      },
      {
        question: '¿Qué coincide con el patrón `\\d+`?',
        options: ['Exactamente un dígito', 'Uno o más dígitos consecutivos', 'Cero o más dígitos', 'Solo el carácter "d"'],
        correctAnswer: 'Uno o más dígitos consecutivos',
        correctFeedback: 'Correcto. `\\d` = un dígito, `+` = uno o más. Juntos: uno o más dígitos.',
        incorrectFeedback: '`\\d` coincide con cualquier dígito del 0 al 9. El cuantificador `+` significa "uno o más". Así, `\\d+` coincide con secuencias de uno o más dígitos: "5", "123", "007".',
      },
      {
        question: '¿Qué hace el patrón `^hola` en una regex?',
        options: [
          'Busca "hola" en cualquier posición',
          'Busca "hola" solo al inicio de la cadena',
          'Niega la coincidencia con "hola"',
          'Busca "hola" al final de la cadena',
        ],
        correctAnswer: 'Busca "hola" solo al inicio de la cadena',
        correctFeedback: 'Correcto. `^` es un ancla de inicio. El patrón solo coincide si "hola" está al principio del string.',
        incorrectFeedback: '`^` es un ancla de inicio. `^hola` solo coincide si la cadena EMPIEZA con "hola". `$` es la ancla de fin. Dentro de una clase `[^abc]`, el `^` sí significa negación.',
      },
      {
        question: '¿Cuántas veces puede repetirse el elemento antes de `?`?',
        options: ['Ninguna', 'Una o más', 'Cero o una', 'Exactamente dos'],
        correctAnswer: 'Cero o una',
        correctFeedback: 'Correcto. `?` hace el elemento opcional: puede aparecer cero veces (ausente) o una vez.',
        incorrectFeedback: '`?` significa "opcional": el elemento puede aparecer cero veces (ausente) o exactamente una vez. `colou?r` coincide con "color" (sin u) y "colour" (con u).',
      },
      {
        question: '¿Qué coincide con el patrón `[a-zA-Z0-9]`?',
        options: [
          'Solo letras minúsculas',
          'Cualquier letra (mayúscula o minúscula) o dígito',
          'Solo dígitos del 0 al 9',
          'Cualquier carácter excepto espacios',
        ],
        correctAnswer: 'Cualquier letra (mayúscula o minúscula) o dígito',
        correctFeedback: 'Correcto. La clase `[a-zA-Z0-9]` incluye rangos: a-z (minúsculas), A-Z (mayúsculas) y 0-9 (dígitos).',
        incorrectFeedback: 'Las clases `[...]` permiten rangos. `[a-z]` = minúsculas, `[A-Z]` = mayúsculas, `[0-9]` = dígitos. Juntos `[a-zA-Z0-9]` coincide con cualquier letra o número.',
      },
    ],
  },

  {
    slug: 're-search',
    title: 'Buscar patrones con re.search()',
    module: 'Expresiones regulares',
    moduleNumber: 17,
    order: 79,
    description: 'Aprende a buscar coincidencias dentro de un texto usando el módulo re.',
    explanation: `El módulo \`re\` ofrece varias funciones principales. Las más importantes son:

**\`re.search(patron, texto)\`**: busca la primera coincidencia en cualquier posición. Devuelve un objeto \`Match\` o \`None\`.

**\`re.match(patron, texto)\`**: busca solo al inicio del texto. Devuelve \`Match\` o \`None\`.

**\`re.fullmatch(patron, texto)\`**: el patrón debe coincidir con el texto COMPLETO.

**El objeto Match:**
\`\`\`python
match = re.search(r"\\d+", "código 42 aquí")
if match:
    print(match.group())   # "42" — texto encontrado
    print(match.start())   # 7  — posición de inicio
    print(match.end())     # 9  — posición de fin
    print(match.span())    # (7, 9)
\`\`\`

**Grupos de captura:**
Los paréntesis \`()\` crean grupos que puedes extraer:
\`\`\`python
patron = r"(\\w+)@(\\w+)\\.(\w+)"
match = re.search(patron, "usuario@ejemplo.com")
if match:
    print(match.group(0))  # "usuario@ejemplo.com" — coincidencia completa
    print(match.group(1))  # "usuario"
    print(match.group(2))  # "ejemplo"
    print(match.group(3))  # "com"
\`\`\`

**Diferencia search vs match:**
\`\`\`python
texto = "  hola mundo"
re.match(r"hola", texto)     # None — no está al inicio
re.search(r"hola", texto)    # Match — lo encuentra en la posición 2
\`\`\``,
    codeExample: `import re

# re.search(): busca en cualquier posición
texto = "El pedido #A-1234 llegará el 15/06/2024"

# Buscar el número de pedido
match = re.search(r"#([A-Z]-\\d+)", texto)
if match:
    print(f"Número de pedido: {match.group(1)}")  # A-1234

# Buscar la fecha
match_fecha = re.search(r"(\\d{2})/(\\d{2})/(\\d{4})", texto)
if match_fecha:
    dia, mes, año = match_fecha.groups()
    print(f"Fecha: {dia}/{mes}/{año}")   # 15/06/2024
    print(f"Posición: {match_fecha.span()}")

# re.match() vs re.search()
cadena1 = "Python es genial"
cadena2 = "Aprender Python es genial"

print(re.match(r"Python", cadena1))   # Match (está al inicio)
print(re.match(r"Python", cadena2))   # None (no está al inicio)
print(re.search(r"Python", cadena2))  # Match (lo encuentra en pos 9)

# re.fullmatch()
emails = ["usuario@dominio.com", "no.es.email", "otro@test.org", "falta@"]
patron_email = r"[\\w.-]+@[\\w-]+\\.[a-z]{2,}"
for email in emails:
    valido = re.fullmatch(patron_email, email) is not None
    estado = "✓" if valido else "✗"
    print(f"  {estado} {email}")

# Flags útiles
texto_multi = "Hola\\nMundo\\nPython"
# re.IGNORECASE: no distingue mayúsculas/minúsculas
if re.search(r"python", texto_multi, re.IGNORECASE):
    print("Encontrado Python (sin importar mayúsculas)")

# re.MULTILINE: ^ y $ aplican a cada línea
lineas = re.findall(r"^\\w+", texto_multi, re.MULTILINE)
print("Inicio de cada línea:", lineas)   # ['Hola', 'Mundo', 'Python']`,
    keyPoints: [
      '`re.search()` busca en cualquier posición; devuelve Match o None',
      '`re.match()` busca solo al INICIO del string',
      '`re.fullmatch()` requiere que el patrón coincida con el string COMPLETO',
      'El objeto Match tiene `.group()`, `.start()`, `.end()`, `.span()`, `.groups()`',
      'Los paréntesis `()` crean grupos de captura accesibles con `.group(1)`, `.group(2)`, etc.',
      'Los flags como `re.IGNORECASE` y `re.MULTILINE` modifican el comportamiento del motor',
    ],
    exercise: {
      description: 'Escribe una función `extraer_telefono(texto)` que busque un teléfono con formato `+52-55-1234-5678` o `55-1234-5678` en el texto y devuelva solo los dígitos como string (sin guiones ni +). Devuelve `None` si no encuentra ninguno.',
      hint: 'Usa `re.search()` con un patrón que maneje el `+52-` como opcional con `(?:\\+52-)?`. Extrae los grupos de dígitos.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `re.search()` cuando no encuentra el patrón?',
        options: ['False', '""', 'None', '0'],
        correctAnswer: 'None',
        correctFeedback: 'Correcto. Si no hay coincidencia, `re.search()` devuelve `None`. Por eso siempre debes verificar con `if match:`.',
        incorrectFeedback: 'Cuando no hay coincidencia, `re.search()` devuelve `None`. Nunca devuelve False o cadena vacía. Siempre verifica el resultado con `if match is not None:` o simplemente `if match:`.',
      },
      {
        question: '¿Qué diferencia hay entre `re.match()` y `re.search()`?',
        options: [
          'match es más rápido que search',
          'match busca solo al inicio; search busca en cualquier posición',
          'search busca solo al final; match en cualquier posición',
          'Son idénticos',
        ],
        correctAnswer: 'match busca solo al inicio; search busca en cualquier posición',
        correctFeedback: 'Correcto. `re.match("hola", " hola")` devuelve None porque "hola" no está al inicio. `re.search("hola", " hola")` lo encuentra.',
        incorrectFeedback: '`re.match()` requiere que el patrón coincida desde el INICIO del string. `re.search()` busca en cualquier posición. Para la mayoría de casos, `search()` es más flexible.',
      },
      {
        question: '¿Qué devuelve `match.group(0)` en un objeto Match?',
        options: [
          'El primer grupo de captura',
          'La coincidencia completa (todo el texto encontrado)',
          'El texto antes de la coincidencia',
          'El índice de inicio de la coincidencia',
        ],
        correctAnswer: 'La coincidencia completa (todo el texto encontrado)',
        correctFeedback: 'Correcto. `group(0)` es equivalente a `group()` y devuelve toda la coincidencia. `group(1)` devuelve el primer grupo de captura (primer par de paréntesis).',
        incorrectFeedback: '`match.group(0)` o `match.group()` devuelve el texto completo que coincidió con el patrón. `group(1)`, `group(2)`, etc. devuelven los grupos de captura individuales.',
      },
      {
        question: '¿Qué es un grupo de captura en regex?',
        options: [
          'Un `[]` que define un rango de caracteres',
          'Un `()` que agrupa parte del patrón y permite extraer esa parte',
          'Un `{}` que define cuántas repeticiones',
          'Un `?` que hace una parte opcional',
        ],
        correctAnswer: 'Un `()` que agrupa parte del patrón y permite extraer esa parte',
        correctFeedback: 'Correcto. Los paréntesis `()` crean grupos. Puedes acceder a lo que coincidió con cada grupo usando `.group(1)`, `.group(2)`, etc.',
        incorrectFeedback: 'Los paréntesis `()` en regex crean grupos de captura. No solo agrupan el patrón lógicamente, sino que también "capturan" el texto coincidente para que puedas extraerlo con `.group(n)` o `.groups()`.',
      },
      {
        question: '¿Para qué sirve el flag `re.IGNORECASE`?',
        options: [
          'Para ignorar los espacios en blanco',
          'Para que las letras mayúsculas y minúsculas sean tratadas como iguales',
          'Para ignorar los comentarios en el patrón',
          'Para buscar en todas las líneas del texto',
        ],
        correctAnswer: 'Para que las letras mayúsculas y minúsculas sean tratadas como iguales',
        correctFeedback: 'Correcto. Con `re.IGNORECASE`, el patrón `"python"` también coincide con "Python", "PYTHON", "PyThOn", etc.',
        incorrectFeedback: '`re.IGNORECASE` hace que la búsqueda no distinga entre mayúsculas y minúsculas. Con este flag, `r"python"` coincide con "python", "Python", "PYTHON", etc.',
      },
      {
        question: '¿Cuándo usarías `re.fullmatch()` en lugar de `re.search()`?',
        options: [
          'Cuando quieres buscar en cualquier parte del texto',
          'Cuando quieres validar que el texto COMPLETO coincide con el patrón (validación de formularios)',
          'Cuando el texto es muy largo',
          'Cuando hay múltiples líneas',
        ],
        correctAnswer: 'Cuando quieres validar que el texto COMPLETO coincide con el patrón (validación de formularios)',
        correctFeedback: 'Correcto. Para validar un email o teléfono, quieres que todo el input sea el patrón. `fullmatch` garantiza que no hay caracteres adicionales antes o después.',
        incorrectFeedback: '`re.fullmatch()` requiere que el patrón cubra el string completo, de principio a fin. Es ideal para validación: comprobar que todo un email, teléfono o código postal tiene el formato correcto.',
      },
    ],
  },

  {
    slug: 're-findall',
    title: 'Encontrar múltiples coincidencias con re.findall()',
    module: 'Expresiones regulares',
    moduleNumber: 17,
    order: 80,
    description: 'Aprende a extraer todas las coincidencias de un patrón dentro de un texto.',
    explanation: `\`re.findall(patron, texto)\` encuentra **todas** las coincidencias del patrón en el texto y las devuelve como una lista de strings.

**Sintaxis:**
\`\`\`python
coincidencias = re.findall(patron, texto)
\`\`\`

**Sin grupos → lista de strings:**
\`\`\`python
texto = "Precios: $25.50, $100.00, $3.99"
precios = re.findall(r"\\$\\d+\\.\\d{2}", texto)
# ['$25.50', '$100.00', '$3.99']
\`\`\`

**Con grupos → lista de tuplas:**
Si el patrón tiene grupos \`()\`, devuelve una lista de tuplas con los grupos:
\`\`\`python
patron = r"(\\w+)@(\\w+)\\.com"
texto = "ana@gmail.com y luis@yahoo.com"
coincidencias = re.findall(patron, texto)
# [('ana', 'gmail'), ('luis', 'yahoo')]
\`\`\`

**\`re.finditer()\` vs \`re.findall()\`:**
- \`findall()\` → lista de strings (o tuplas con grupos)
- \`finditer()\` → iterador de objetos Match (más información: posición, grupos nombrados)

\`finditer()\` es preferible cuando necesitas saber la posición de cada coincidencia.

**\`re.split()\`:**
También puedes dividir un texto usando un patrón como separador:
\`\`\`python
re.split(r"[,;|]\\s*", "a,b;c|d")
# ['a', 'b', 'c', 'd']
\`\`\``,
    codeExample: `import re

# findall básico (sin grupos)
texto = "Teléfonos: 55-1234-5678, 33-9876-5432, 81-1111-2222"
telefonos = re.findall(r"\\d{2}-\\d{4}-\\d{4}", texto)
print("Teléfonos:", telefonos)
# ['55-1234-5678', '33-9876-5432', '81-1111-2222']

# findall con grupos → lista de tuplas
emails_texto = "Contactos: ana@gmail.com, luis@yahoo.com.mx, marta@empresa.org"
patron = r"([\\w.]+)@([\\w.]+)\\.([a-z]{2,})"
resultados = re.findall(patron, emails_texto)
print("\\nEmails encontrados:")
for usuario, dominio, tld in resultados:
    print(f"  Usuario: {usuario}, Dominio: {dominio}, TLD: .{tld}")

# Encontrar todas las palabras en mayúscula
texto2 = "La empresa ACME y el banco BBVA son socios de IBM"
siglas = re.findall(r"\\b[A-Z]{2,}\\b", texto2)
print("\\nSiglas:", siglas)   # ['ACME', 'BBVA', 'IBM']

# finditer: más información (posición)
patron_num = r"\\d+"
for match in re.finditer(patron_num, "código: 42, ref: 100"):
    print(f"Número '{match.group()}' en posición [{match.start()}:{match.end()}]")

# re.split(): dividir por patrón
csv_raro = "Ana;Luis, Marta | Pedro"
partes = re.split(r"[;,|]\\s*", csv_raro)
print("\\nPartes:", partes)   # ['Ana', 'Luis', 'Marta ', 'Pedro']

# Extraer hashtags de texto
tweet = "Aprendiendo #Python y #regex hoy! #programacion"
hashtags = re.findall(r"#(\\w+)", tweet)
print("Hashtags:", hashtags)   # ['Python', 'regex', 'programacion']`,
    keyPoints: [
      '`re.findall()` devuelve una lista con todas las coincidencias',
      'Sin grupos: lista de strings. Con grupos `()`: lista de tuplas',
      '`re.finditer()` devuelve un iterador de objetos Match (útil cuando necesitas posiciones)',
      '`re.split(patron, texto)` divide el texto usando el patrón como separador',
      'Si no hay coincidencias, `findall()` devuelve una lista vacía `[]`',
      'Para extraer partes específicas de cada coincidencia, usa grupos de captura',
    ],
    exercise: {
      description: 'Dado el texto `"Ventas: enero=$1500, febrero=$2300, marzo=$890"`, usa `re.findall()` con grupos para extraer pares `(mes, monto)`. El resultado debe ser `[("enero", "1500"), ("febrero", "2300"), ("marzo", "890")]`.',
      hint: 'El patrón debe tener dos grupos: uno para el mes `([a-z]+)` y otro para el monto `\\$(\\d+)`.',
    },
    quiz: [
      {
        question: '¿Qué devuelve `re.findall(r"\\d+", "a1b22c333")` ?',
        options: ['["1", "22", "333"]', '"1", "22", "333"', '["1"]', 'None'],
        correctAnswer: '["1", "22", "333"]',
        correctFeedback: 'Correcto. `findall` devuelve una lista con todas las coincidencias: cada secuencia de dígitos.',
        incorrectFeedback: '`re.findall()` devuelve una lista con todas las coincidencias. `\\d+` coincide con secuencias de dígitos: "1", "22", "333".',
      },
      {
        question: '¿Qué devuelve `re.findall(r"(\\w+)@(\\w+)", "a@b c@d")`?',
        options: [
          '["a@b", "c@d"]',
          '[("a", "b"), ("c", "d")]',
          '["a", "c"]',
          '[["a", "b"], ["c", "d"]]',
        ],
        correctAnswer: '[("a", "b"), ("c", "d")]',
        correctFeedback: 'Correcto. Cuando el patrón tiene grupos, `findall` devuelve una lista de tuplas con los grupos capturados.',
        incorrectFeedback: 'Cuando el patrón tiene grupos de captura `()`, `findall()` devuelve una lista de tuplas. Cada tupla contiene los valores de cada grupo para una coincidencia.',
      },
      {
        question: '¿Cuándo es preferible `re.finditer()` sobre `re.findall()`?',
        options: [
          'Siempre, finditer es más moderno',
          'Cuando necesitas la posición (start, end) de cada coincidencia',
          'Cuando el texto tiene más de 100 caracteres',
          'findall es siempre mejor',
        ],
        correctAnswer: 'Cuando necesitas la posición (start, end) de cada coincidencia',
        correctFeedback: 'Correcto. `finditer` devuelve objetos Match que tienen `.start()`, `.end()`, `.span()`, `.groups()`. `findall` solo devuelve los textos encontrados.',
        incorrectFeedback: '`finditer()` devuelve objetos Match completos con información de posición. Usa `finditer` cuando necesitas saber dónde se encontró cada coincidencia. Usa `findall` cuando solo necesitas los textos.',
      },
      {
        question: '¿Qué produce `re.split(r"[,;]", "a,b;c,d")`?',
        options: ['["a", "b;c", "d"]', '["a", "b", "c", "d"]', '"a,b;c,d"', 'Error'],
        correctAnswer: '["a", "b", "c", "d"]',
        correctFeedback: 'Correcto. La clase `[,;]` coincide con coma o punto y coma. `split` divide en cada coincidencia.',
        incorrectFeedback: '`re.split(r"[,;]", texto)` divide el texto en cada coma o punto y coma. El resultado es `["a", "b", "c", "d"]`.',
      },
      {
        question: '¿Qué devuelve `re.findall(r"#", "sin hashtags")` si no hay coincidencias?',
        options: ['None', 'False', '[]', 'Error'],
        correctAnswer: '[]',
        correctFeedback: 'Correcto. Si no hay coincidencias, `findall` devuelve una lista vacía, nunca `None`.',
        incorrectFeedback: 'Cuando no hay ninguna coincidencia, `re.findall()` devuelve una lista vacía `[]`. Nunca devuelve `None`. Puedes verificar con `if coincidencias:` o `if len(coincidencias) > 0:`.',
      },
      {
        question: '¿Qué extrae el patrón `r"#(\\w+)"` del texto `"Me gusta #Python y #código"`?',
        options: [
          '["#Python", "#código"]',
          '["Python", "código"]',
          '[("#", "Python"), ("#", "código")]',
          'None',
        ],
        correctAnswer: '["Python", "código"]',
        correctFeedback: 'Correcto. El `#` está fuera del grupo, así que no se captura. Solo se captura lo que está dentro de `()`: "Python" y "código".',
        incorrectFeedback: 'El `#` está FUERA del grupo de captura `()`. Con `findall`, cuando hay grupos, devuelve lo que está dentro de los paréntesis. Solo captura "Python" y "código", no el "#".',
      },
    ],
  },

  {
    slug: 'validar-emails-telefonos',
    title: 'Validar emails y teléfonos',
    module: 'Expresiones regulares',
    moduleNumber: 17,
    order: 81,
    description: 'Aprende a usar expresiones regulares para validar formatos simples como emails y números de teléfono.',
    explanation: `La validación de formato es uno de los usos más comunes de las expresiones regulares. Vamos a construir patrones para emails y teléfonos paso a paso.

**Validar emails — el patrón básico:**
Un email tiene la forma \`usuario@dominio.tld\`.

\`\`\`python
patron_email = r"^[\\w.+-]+@[\\w-]+\\.[a-z]{2,}$"
\`\`\`

Desglose:
- \`^[\\w.+-]+\` → uno o más: letras/nums/\_/.+/-
- \`@\` → literal
- \`[\\w-]+\` → dominio: letras, nums, guiones
- \`\\.\` → punto literal (escapado)
- \`[a-z]{2,}$\` → TLD de al menos 2 letras

**Importante:** Un patrón de email "perfecto" es extremadamente complejo. Para producción, lo mejor es enviar un email de verificación.

**Validar teléfonos mexicanos:**
\`\`\`python
# Acepta: 55-1234-5678, (55)12345678, +5255 1234 5678
patron_tel = r"(?:\\+52)?[\\s-]?(?:\\(\\d{2}\\)|\\d{2})[\\s-]?\\d{4}[\\s-]?\\d{4}"
\`\`\`

**Estrategia de validación:**
1. Define el patrón apropiado para el contexto
2. Usa \`re.fullmatch()\` para que todo el input sea el patrón
3. Limpia el input primero (\`.strip()\`, quitar espacios extra)
4. Da mensajes de error claros cuando falla`,
    codeExample: `import re

# ── Validación de email ───────────────────────────────────────
def es_email_valido(email):
    """Valida formato de email con regex básico."""
    patron = r"^[\\w.+-]+@[\\w-]+\\.[a-z]{2,}(\\.[a-z]{2,})?$"
    return bool(re.fullmatch(patron, email.strip().lower()))

emails_prueba = [
    "usuario@ejemplo.com",
    "user.name+tag@empresa.com.mx",
    "invalido@",
    "@sinusuario.com",
    "sin.arroba.com",
    "user@.com",
    "correo@dominio.co.uk",
]

print("Validación de emails:")
for email in emails_prueba:
    estado = "✓" if es_email_valido(email) else "✗"
    print(f"  {estado} {email}")

# ── Validación de teléfonos mexicanos ────────────────────────
def es_telefono_valido(tel):
    """Acepta: 5512345678, 55-1234-5678, (55)1234-5678, +52 55 1234 5678"""
    tel_limpio = tel.strip()
    patron = r"(?:\\+52)?[\\s.-]?(?:\\(\\d{2}\\)|\\d{2})[\\s.-]?\\d{4}[\\s.-]?\\d{4}"
    return bool(re.fullmatch(patron, tel_limpio))

telefonos_prueba = [
    "5512345678",
    "55-1234-5678",
    "(55)1234-5678",
    "+52 55 1234 5678",
    "123",
    "55 12345",
]

print("\\nValidación de teléfonos:")
for tel in telefonos_prueba:
    estado = "✓" if es_telefono_valido(tel) else "✗"
    print(f"  {estado} '{tel}'")

# ── Normalizar teléfono (extraer solo dígitos) ────────────────
def normalizar_telefono(tel):
    """Extrae solo los dígitos. Si empieza con 52 (México), quita el código."""
    solo_digitos = re.sub(r"\\D", "", tel)   # quitar no-dígitos
    if solo_digitos.startswith("52") and len(solo_digitos) == 12:
        solo_digitos = solo_digitos[2:]      # quitar código de país
    return solo_digitos if len(solo_digitos) == 10 else None

print("\\nNormalización:")
for tel in ["+52 55 1234 5678", "(55)1234-5678", "123"]:
    print(f"  '{tel}' → {normalizar_telefono(tel)}")`,
    keyPoints: [
      'Usa `re.fullmatch()` para validar que el string COMPLETO coincida con el patrón',
      'Limpia el input antes de validar: `.strip()`, convertir a lowercase',
      'Un patrón de email 100% correcto es imposible en práctica — usa uno razonable',
      'Para teléfonos, a veces es más fácil normalizar primero (solo dígitos) y luego validar',
      'Los grupos no-capturadores `(?:...)` agrupan sin capturar para `findall`',
      'Siempre da mensajes de error claros al usuario cuando la validación falla',
    ],
    exercise: {
      description: 'Escribe una función `validar_codigo_postal(cp)` que valide códigos postales mexicanos (5 dígitos). Devuelve `True` si es válido, `False` si no. Maneja también casos con espacios alrededor.',
      hint: 'El patrón es simplemente `r"\\d{5}"` con `re.fullmatch()`. Usa `.strip()` primero.',
    },
    quiz: [
      {
        question: '¿Por qué `re.fullmatch()` es preferible a `re.search()` para validación?',
        options: [
          'fullmatch es más rápido',
          'fullmatch requiere que el patrón cubra todo el string, evitando que haya caracteres extra',
          'search no puede validar emails',
          'Son idénticos para validación',
        ],
        correctAnswer: 'fullmatch requiere que el patrón cubra todo el string, evitando que haya caracteres extra',
        correctFeedback: 'Correcto. `re.search(r"\\d+", "abc123def")` encontraría "123" y parecería válido, aunque el string completo no es solo dígitos.',
        incorrectFeedback: '`re.search()` encuentra el patrón en cualquier parte del string. Para validar, quieres que TODO el input sea el patrón. `re.fullmatch()` es equivalente a `re.match(r"^patrón$", texto)`.',
      },
      {
        question: '¿Qué hace `re.sub(r"\\D", "", "+52 55 1234-5678")`?',
        options: [
          'Reemplaza los dígitos por ""',
          'Elimina todos los no-dígitos, dejando solo los números',
          'Error: \\D no es válido',
          'Devuelve None',
        ],
        correctAnswer: 'Elimina todos los no-dígitos, dejando solo los números',
        correctFeedback: 'Correcto. `\\D` coincide con cualquier no-dígito. `re.sub()` los reemplaza por "" (string vacío), dejando solo los dígitos.',
        incorrectFeedback: '`\\D` es la clase de no-dígitos (opuesto de `\\d`). `re.sub(r"\\D", "", texto)` reemplaza cada no-dígito por vacío, dejando solo los números: "525512345678".',
      },
      {
        question: '¿Cuál es el patrón más apropiado para validar que algo tiene exactamente 5 dígitos?',
        options: [
          'r"\\d*"',
          'r"\\d{5}"',
          'r"\\d+"',
          'r"[0-9][0-9][0-9][0-9][0-9]"',
        ],
        correctAnswer: 'r"\\d{5}"',
        correctFeedback: 'Correcto. `\\d{5}` coincide con exactamente 5 dígitos. Con `re.fullmatch()`, garantiza que el string completo sea exactamente 5 dígitos.',
        incorrectFeedback: '`\\d{5}` coincide con exactamente 5 dígitos. `\\d*` acepta cero o más (incluyendo 0 dígitos). `\\d+` acepta uno o más (incluyendo 100 dígitos). `r"[0-9]{5}"` funciona igual que `r"\\d{5}"` pero más verboso.',
      },
      {
        question: '¿Por qué se recomienda limpiar el input antes de validar con regex?',
        options: [
          'Porque regex no puede manejar espacios',
          'Para que espacios al inicio/final no hagan fallar la validación de un input válido',
          'Porque Python no permite espacios en regex',
          'Por razones de rendimiento',
        ],
        correctAnswer: 'Para que espacios al inicio/final no hagan fallar la validación de un input válido',
        correctFeedback: 'Correcto. Un usuario puede escribir " usuario@email.com " con espacios accidentales. `.strip()` antes de validar mejora la experiencia sin comprometer la validación.',
        incorrectFeedback: 'Los usuarios suelen agregar espacios accidentalmente al copiar/pegar o escribir. Hacer `.strip()` antes de validar mejora la experiencia: "usuario@email.com " debería considerarse válido.',
      },
      {
        question: '¿Qué hace `(?:...)` en un patrón regex?',
        options: [
          'Crea un grupo de captura normal',
          'Crea un grupo no capturador: agrupa sin guardar para `findall`',
          'Es un comentario dentro del patrón',
          'Hace el grupo opcional',
        ],
        correctAnswer: 'Crea un grupo no capturador: agrupa sin guardar para `findall`',
        correctFeedback: 'Correcto. `(?:...)` agrupa el patrón (para aplicar cuantificadores) sin crear un grupo de captura. Con `findall`, los grupos no-capturadores no aparecen en el resultado.',
        incorrectFeedback: '`(?:...)` es un grupo no capturador. Agrupa el patrón para aplicar cuantificadores (`(?:abc)+` = "abc" una o más veces) pero no "captura" el texto. `findall` no lo incluye en las tuplas de resultado.',
      },
    ],
  },

  {
    slug: 're-sub',
    title: 'Reemplazar texto con re.sub()',
    module: 'Expresiones regulares',
    moduleNumber: 17,
    order: 82,
    description: 'Aprende a reemplazar partes de un texto usando patrones.',
    explanation: `\`re.sub(patron, reemplazo, texto)\` reemplaza todas las coincidencias del patrón con el texto de reemplazo.

**Sintaxis:**
\`\`\`python
re.sub(patron, reemplazo, texto, count=0, flags=0)
\`\`\`

- \`count=0\`: reemplaza todas (0 = ilimitado)
- \`count=1\`: reemplaza solo la primera

**Ejemplos básicos:**
\`\`\`python
import re

# Quitar espacios extra
texto = "Hola   mundo   Python"
limpio = re.sub(r"\\s+", " ", texto)
# "Hola mundo Python"

# Censurar palabras
re.sub(r"\\b(malo|feo|horrible)\\b", "***", "Qué malo y horrible día")
# "Qué *** y *** día"
\`\`\`

**Reemplazo con grupos de captura:**
Puedes referenciar grupos del patrón con \`\\1\`, \`\\2\`, etc.:
\`\`\`python
# Cambiar formato de fecha: DD/MM/YYYY → YYYY-MM-DD
re.sub(r"(\\d{2})/(\\d{2})/(\\d{4})", r"\\3-\\2-\\1", "15/06/2024")
# "2024-06-15"
\`\`\`

**Reemplazo con función:**
Puedes pasar una función en lugar de un string. Recibe el objeto Match:
\`\`\`python
def doble(match):
    numero = int(match.group())
    return str(numero * 2)

re.sub(r"\\d+", doble, "precio: $25 descuento: $5")
# "precio: $50 descuento: $10"
\`\`\``,
    codeExample: `import re

# ── Reemplazos básicos ────────────────────────────────────────
# Quitar espacios múltiples
texto_desordenado = "Hola     mundo,   cómo     estás?"
ordenado = re.sub(r"\\s+", " ", texto_desordenado).strip()
print(ordenado)   # "Hola mundo, cómo estás?"

# Quitar caracteres especiales (solo letras y números)
entrada_sucia = "Usuario_2024!@#$%"
limpia = re.sub(r"[^\\w]", "", entrada_sucia)
print(limpia)   # "Usuario_2024"

# ── Reemplazo con referencias a grupos ───────────────────────
# Formato DD/MM/YYYY → YYYY-MM-DD (para base de datos)
fechas = "Evento: 15/06/2024, Registro: 01/01/2024"
formato_bd = re.sub(r"(\\d{2})/(\\d{2})/(\\d{4})", r"\\3-\\2-\\1", fechas)
print(formato_bd)   # "Evento: 2024-06-15, Registro: 2024-01-01"

# ── Reemplazo con función ─────────────────────────────────────
def aplicar_descuento_10pct(match):
    precio = float(match.group(1))
    nuevo = round(precio * 0.9, 2)
    return f"\${nuevo}"

texto_precios = "Laptop $1500, Mouse $25, Monitor $400"
con_descuento = re.sub(r"\\$(\\d+(?:\\.\\d{2})?)", aplicar_descuento_10pct, texto_precios)
print(con_descuento)   # "Laptop $1350.0, Mouse $22.5, Monitor $360.0"

# ── count: limitar reemplazos ─────────────────────────────────
repetido = "hola hola hola hola"
solo_primero = re.sub(r"hola", "adiós", repetido, count=1)
print(solo_primero)   # "adiós hola hola hola"

# ── re.subn: también devuelve cuántos reemplazos hizo ─────────
nuevo_texto, n = re.subn(r"\\d+", "X", "a1 b22 c333")
print(f"Resultado: '{nuevo_texto}', reemplazos: {n}")
# "a X b X c X", 3`,
    keyPoints: [
      '`re.sub(patron, reemplazo, texto)` reemplaza todas las coincidencias por defecto',
      'Con `count=n` limitas el número de reemplazos',
      'Referencia grupos en el reemplazo con `\\1`, `\\2`, etc. (usando raw string)',
      'El reemplazo puede ser una función que recibe el objeto Match y devuelve el string nuevo',
      '`re.subn()` es igual que `sub` pero además devuelve cuántos reemplazos realizó',
      '`[^\\w]` coincide con cualquier carácter que NO sea de palabra — útil para limpiar datos',
    ],
    exercise: {
      description: 'Escribe una función `ocultar_tarjeta(texto)` que encuentre números de tarjeta de crédito (16 dígitos seguidos o con guiones: XXXX-XXXX-XXXX-XXXX) y los reemplace por `****-****-****-XXXX` (mostrando solo los últimos 4). Usa `re.sub()` con una función.',
      hint: 'El patrón debe capturar los últimos 4 dígitos en un grupo. La función de reemplazo retorna `f"****-****-****-{match.group(1)}"`.',
    },
    quiz: [
      {
        question: '¿Qué hace `re.sub(r"\\s+", " ", texto)`?',
        options: [
          'Elimina todos los espacios',
          'Reemplaza secuencias de espacios/tabs/saltos por un único espacio',
          'Agrega espacios entre palabras',
          'Error: \\s no es válido en sub',
        ],
        correctAnswer: 'Reemplaza secuencias de espacios/tabs/saltos por un único espacio',
        correctFeedback: 'Correcto. `\\s+` coincide con uno o más espacios en blanco. Reemplazarlos por " " normaliza los espacios múltiples.',
        incorrectFeedback: '`\\s` coincide con cualquier espacio en blanco (espacio, tab, salto de línea). `\\s+` coincide con UNO O MÁS. Reemplazar por `" "` convierte cualquier secuencia de blancos en un único espacio.',
      },
      {
        question: 'En `re.sub(r"(\\d+)/(\\d+)", r"\\2-\\1", "25/06")`, ¿qué produce?',
        options: ['25-06', '06-25', '25/06', 'Error'],
        correctAnswer: '06-25',
        correctFeedback: 'Correcto. `\\1` = primer grupo = "25", `\\2` = segundo grupo = "06". El reemplazo `\\2-\\1` invierte el orden: "06-25".',
        incorrectFeedback: 'Los grupos: `\\1` = "25" (primer paréntesis), `\\2` = "06" (segundo). El reemplazo `r"\\2-\\1"` pone el segundo primero: "06-25".',
      },
      {
        question: '¿Qué tipo de argumento puede recibir `re.sub()` como segundo parámetro (reemplazo)?',
        options: [
          'Solo strings',
          'Solo funciones',
          'Un string o una función que recibe un Match y devuelve un string',
          'Solo regex patterns',
        ],
        correctAnswer: 'Un string o una función que recibe un Match y devuelve un string',
        correctFeedback: 'Correcto. El reemplazo puede ser un string fijo (con `\\1`, `\\2` para grupos) o una función que recibe el objeto Match y retorna el string de reemplazo.',
        incorrectFeedback: '`re.sub()` acepta como reemplazo: 1) un string (posiblemente con `\\1`, `\\2` para grupos), o 2) una función callable que recibe el objeto Match y devuelve el string de reemplazo.',
      },
      {
        question: '¿Qué hace el parámetro `count=1` en `re.sub()`?',
        options: [
          'Busca el patrón exactamente 1 vez',
          'Reemplaza solo la primera coincidencia',
          'Limita el texto a 1 carácter',
          'Error: count no es un parámetro de sub',
        ],
        correctAnswer: 'Reemplaza solo la primera coincidencia',
        correctFeedback: 'Correcto. Por defecto `count=0` reemplaza todas. Con `count=1` solo reemplaza la primera coincidencia encontrada.',
        incorrectFeedback: '`count` controla cuántos reemplazos se realizan. `count=0` (default) = todos. `count=1` = solo el primero. `count=2` = los primeros dos.',
      },
      {
        question: '¿Qué produce `re.subn(r"\\d", "X", "a1b2c3")`?',
        options: ['("aXbXcX", 3)', '"aXbXcX"', '("aXbXcX", "123")', 'Error'],
        correctAnswer: '("aXbXcX", 3)',
        correctFeedback: 'Correcto. `re.subn()` devuelve una tupla: (texto_modificado, número_de_reemplazos). Reemplazó 3 dígitos.',
        incorrectFeedback: '`re.subn()` funciona igual que `re.sub()` pero devuelve una tupla `(nuevo_texto, conteo)`. Reemplazó los 3 dígitos (1, 2, 3) por "X", dando `("aXbXcX", 3)`.',
      },
    ],
  },

  {
    slug: 'buenas-practicas-regex',
    title: 'Buenas prácticas con regex',
    module: 'Expresiones regulares',
    moduleNumber: 17,
    order: 83,
    description: 'Aprende cuándo usar regex, cuándo evitarla y cómo mantener tus patrones entendibles.',
    explanation: `Las expresiones regulares son poderosas pero pueden convertirse en un problema de mantenimiento si no se usan bien.

**1. Compila el patrón si lo usas múltiples veces:**
\`\`\`python
# Sin compilar (menos eficiente si se llama muchas veces)
for texto in textos:
    re.search(r"\\d{4}-\\d{2}-\\d{2}", texto)

# Compilado (el patrón se compila una sola vez)
patron = re.compile(r"\\d{4}-\\d{2}-\\d{2}")
for texto in textos:
    patron.search(texto)
\`\`\`

**2. Comenta los patrones complejos:**
\`\`\`python
patron = re.compile(r"""
    \\b              # límite de palabra
    [A-Z]{2,3}      # código de 2-3 letras mayúsculas
    \\d{4}           # 4 dígitos
    \\b              # límite de palabra
""", re.VERBOSE)
\`\`\`

**3. Cuándo NO usar regex:**
\`\`\`python
# ❌ Innecesariamente complejo
if re.search(r"hola", texto):

# ✅ Mucho más simple
if "hola" in texto:

# ❌ Para parsear HTML/XML
re.findall(r"<h1>(.*?)</h1>", html)

# ✅ Usa BeautifulSoup para HTML
from bs4 import BeautifulSoup
\`\`\`

**4. Prueba tus patrones:**
Usa herramientas como [regex101.com](https://regex101.com) para probar y entender tus patrones antes de usarlos en código.

**5. Documenta qué acepta y qué no acepta tu patrón.**`,
    codeExample: `import re

# ── re.compile() para patrones reutilizables ─────────────────
PATRON_FECHA = re.compile(r"(\\d{4})-(\\d{2})-(\\d{2})")
PATRON_EMAIL = re.compile(r"[\\w.+-]+@[\\w-]+\\.[a-z]{2,}", re.IGNORECASE)

textos = [
    "Fecha: 2024-06-15, email: user@example.com",
    "Registro: 2023-01-01, contacto: otro@dominio.org",
]

for texto in textos:
    fecha = PATRON_FECHA.search(texto)
    email = PATRON_EMAIL.search(texto)
    if fecha:
        print(f"Fecha: {fecha.group()}")
    if email:
        print(f"Email: {email.group()}")

# ── re.VERBOSE: comentar el patrón ───────────────────────────
PATRON_RFC_MX = re.compile(r"""
    ^               # Inicio
    [A-Z]{4}        # 4 letras (nombre)
    \\d{6}           # 6 dígitos (fecha nacimiento)
    [A-Z0-9]{3}     # 3 caracteres homoclave
    $               # Fin
""", re.VERBOSE)

rfcs = ["ABCD123456AB1", "ABCD123456A12", "corto", "ABCD123456XY3"]
for rfc in rfcs:
    print(f"RFC '{rfc}': {'✓' if PATRON_RFC_MX.match(rfc) else '✗'}")

# ── Cuándo NO usar regex ──────────────────────────────────────
texto = "Python es genial"

# ❌ Innecesario
if re.search(r"Python", texto):
    print("Encontrado (con regex — innecesario)")

# ✅ Simple y claro
if "Python" in texto:
    print("Encontrado (sin regex)")

# ❌ Para parsear datos estructurados
# Usa json.loads() para JSON, csv.reader() para CSV, etc.

# ── Prueba incremental de un patrón ──────────────────────────
def probar_patron(patron, casos):
    comp = re.compile(patron)
    for texto, esperado in casos:
        resultado = bool(comp.fullmatch(texto))
        marca = "✓" if resultado == esperado else "✗ FALLO"
        print(f"  {marca} '{texto}' → {'válido' if resultado else 'inválido'}")

print("\\nPruebas de código postal:")
probar_patron(r"\\d{5}", [
    ("06600", True),
    ("1234", False),
    ("123456", False),
    ("0000a", False),
])`,
    keyPoints: [
      '`re.compile()` compila el patrón una vez para reutilizarlo eficientemente',
      '`re.VERBOSE` permite añadir espacios y comentarios al patrón para documentarlo',
      'No uses regex para operaciones simples de strings: `in`, `startswith()`, `split()` son más claros',
      'Nunca uses regex para parsear HTML/XML — usa bibliotecas especializadas como BeautifulSoup',
      'Prueba siempre tus patrones con casos válidos E inválidos',
      'Documenta qué formatos acepta y rechaza tu patrón con comentarios o docstrings',
    ],
    exercise: {
      description: 'Crea una función `validar_contrasena(password)` que verifique que la contraseña: tenga al menos 8 caracteres, contenga al menos una mayúscula, una minúscula y un dígito. Usa `re.search()` con lookaheads o múltiples verificaciones separadas.',
      hint: 'La forma más legible es hacer tres verificaciones separadas: `re.search(r"[A-Z]", pwd)`, `re.search(r"[a-z]", pwd)`, `re.search(r"\\d", pwd)`, y `len(pwd) >= 8`.',
    },
    quiz: [
      {
        question: '¿Cuál es la ventaja de usar `re.compile()` cuando usas el mismo patrón muchas veces?',
        options: [
          'El patrón se hace más corto',
          'El patrón se compila una sola vez y el motor lo reutiliza sin recompilar',
          'Permite usar patrones más largos',
          'No hay diferencia, es solo estilo',
        ],
        correctAnswer: 'El patrón se compila una sola vez y el motor lo reutiliza sin recompilar',
        correctFeedback: 'Correcto. Sin compilar, Python recompila el patrón en cada llamada. Con `re.compile()`, la compilación ocurre una vez y el objeto compilado se reutiliza eficientemente.',
        incorrectFeedback: '`re.compile()` convierte el patrón de string a un objeto interno optimizado. Si llamas `re.search(patron, texto)` 1000 veces, compila 1000 veces. Con `compiled.search(texto)` solo compila una.',
      },
      {
        question: '¿Para qué sirve el flag `re.VERBOSE` (también llamado `re.X`)?',
        options: [
          'Hace que el patrón acepte más tipos de caracteres',
          'Permite añadir espacios y comentarios dentro del patrón para documentarlo',
          'Activa el modo de búsqueda exhaustiva',
          'Muestra información de debug al buscar',
        ],
        correctAnswer: 'Permite añadir espacios y comentarios dentro del patrón para documentarlo',
        correctFeedback: 'Correcto. Con `re.VERBOSE`, los espacios en el patrón son ignorados (a menos que estén escapados) y el `#` inicia comentarios. Permite escribir patrones con explicaciones.',
        incorrectFeedback: '`re.VERBOSE` ignora los espacios en blanco y los comentarios (`# ...`) dentro del patrón. Esto permite escribir patrones largos y complejos con formato legible y documentación integrada.',
      },
      {
        question: '¿Cuándo es incorrecto usar regex para buscar "hola" en un string?',
        options: [
          'Nunca, regex siempre es correcto',
          'Cuando `"hola" in texto` es más simple, claro y suficiente',
          'Solo cuando el string es muy largo',
          'Cuando "hola" tiene letras acentuadas',
        ],
        correctAnswer: 'Cuando `"hola" in texto` es más simple, claro y suficiente',
        correctFeedback: 'Correcto. Para buscar un substring literal simple, el operador `in` de Python es más rápido, más legible y no requiere importar `re`.',
        incorrectFeedback: 'Si solo necesitas verificar si un substring está en un string, usa `"hola" in texto`. Es más rápido y mucho más legible. La regex es para cuando el criterio de búsqueda es un patrón, no un literal simple.',
      },
      {
        question: '¿Por qué no se debe usar regex para parsear HTML?',
        options: [
          'Porque Python no puede procesar HTML',
          'Porque HTML es un lenguaje recursivo y anidado que regex no puede manejar correctamente',
          'Porque re no tiene las funciones necesarias',
          'Porque es lento',
        ],
        correctAnswer: 'Porque HTML es un lenguaje recursivo y anidado que regex no puede manejar correctamente',
        correctFeedback: 'Correcto. HTML puede estar anidado arbitrariamente y tiene casos especiales infinitos. Las regex son para patrones regulares; los parsers como BeautifulSoup entienden la gramática completa del HTML.',
        incorrectFeedback: 'HTML tiene anidamiento arbitrario y casos especiales (comentarios, CDATA, atributos con comillas, etc.) que no se pueden manejar con regex. Usa `BeautifulSoup` o `lxml` para parsear HTML/XML.',
      },
      {
        question: '¿Cuál de estas es la mejor forma de probar que un patrón regex funciona correctamente?',
        options: [
          'Probar solo con un caso que debería funcionar',
          'Probar con casos válidos E inválidos para verificar que acepta lo correcto y rechaza lo incorrecto',
          'Ver si el patrón tiene el número de caracteres correcto',
          'Ejecutar el programa una vez en producción',
        ],
        correctAnswer: 'Probar con casos válidos E inválidos para verificar que acepta lo correcto y rechaza lo incorrecto',
        correctFeedback: 'Correcto. Un buen patrón debe aceptar todos los casos válidos Y rechazar los inválidos. Probar solo los casos que "deberían funcionar" es insuficiente.',
        incorrectFeedback: 'Un patrón de validación debe pasar dos tipos de pruebas: 1) acepta todos los formatos válidos que debería aceptar, 2) rechaza todos los formatos inválidos. Muchos bugs vienen de patrones que son demasiado permisivos.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module17: Module = {
  number: 17,
  title: 'Expresiones regulares',
  level: 'intermedio',
  lessons: lessonsModule17,
}
