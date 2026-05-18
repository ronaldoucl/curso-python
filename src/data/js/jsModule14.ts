import type { Lesson, Module } from '@/types'

export const lessonsJsModule14: Lesson[] = [
  {
    slug: 'leer-valores-inputs',
    title: 'Leer valores de inputs',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 99,
    description: 'Aprende a obtener valores desde inputs, textareas, selects y checkboxes.',
    explanation: `Trabajar con formularios en JavaScript comienza por saber cómo leer lo que el usuario escribe o selecciona. Cada tipo de campo expone su valor de una forma ligeramente distinta.

**input y textarea**

Los campos de texto y las áreas de texto comparten la propiedad \`value\`:

\`\`\`js
const nombre = document.getElementById('nombre').value
const mensaje = document.getElementById('mensaje').value
\`\`\`

Siempre usa \`trim()\` para eliminar espacios en blanco al principio y al final antes de procesar el valor:

\`\`\`js
const nombre = document.getElementById('nombre').value.trim()
\`\`\`

**select**

Un menú desplegable también usa \`value\`, que devuelve el \`value\` de la opción seleccionada:

\`\`\`js
const pais = document.getElementById('pais').value
// Devuelve "mx", "ar", "co", etc.
\`\`\`

**checkbox**

Los checkboxes no usan \`value\` para saber si están marcados. Usa la propiedad \`checked\`, que es un booleano:

\`\`\`js
const aceptaTerminos = document.getElementById('terminos').checked
// true o false
\`\`\`

**radio buttons**

Para radios agrupados, debes buscar cuál está seleccionado con \`querySelectorAll\` y un bucle, o filtrar con \`Array.from\`:

\`\`\`js
const radios = document.querySelectorAll('input[name="genero"]')
let generoSeleccionado = ''
radios.forEach(radio => {
  if (radio.checked) {
    generoSeleccionado = radio.value
  }
})
\`\`\`

**Leer varios campos a la vez**

En un formulario de registro típico puedes reunir todos los valores así:

\`\`\`js
function leerFormulario() {
  return {
    nombre: document.getElementById('nombre').value.trim(),
    email: document.getElementById('email').value.trim(),
    pais: document.getElementById('pais').value,
    newsletter: document.getElementById('newsletter').checked,
  }
}
\`\`\`

El uso de \`trim()\` en campos de texto es un hábito fundamental: evita que un espacio accidental haga fallar las validaciones posteriores.`,
    codeExample: `// Formulario de registro: leer todos los campos

const form = document.getElementById('formRegistro')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  // Texto e email
  const nombre = document.getElementById('nombre').value.trim()
  const email  = document.getElementById('email').value.trim()

  // Select
  const pais = document.getElementById('pais').value

  // Checkbox
  const aceptaTerminos = document.getElementById('terminos').checked

  // Radio buttons
  const radios = document.querySelectorAll('input[name="rol"]')
  let rol = ''
  radios.forEach(r => { if (r.checked) rol = r.value })

  console.log({ nombre, email, pais, aceptaTerminos, rol })
})`,
    keyPoints: [
      'Los campos de texto y textarea exponen su contenido en la propiedad value.',
      'Usa siempre .trim() para eliminar espacios al inicio y al final.',
      'Los checkboxes usan .checked (booleano), no .value.',
      'Para radio buttons agrupa por name y busca cuál tiene .checked === true.',
      'Los selects devuelven el atributo value de la opción actualmente seleccionada.',
    ],
    exercise: {
      description: 'Crea un formulario HTML con un input de nombre, un select de país (al menos 3 opciones) y un checkbox de "Acepto términos". Al hacer submit, muestra en consola un objeto con los tres valores. Usa trim() en el nombre.',
      hint: 'Usa e.preventDefault() para evitar que la página se recargue, luego lee cada campo con .value o .checked según corresponda.',
    },
    quiz: [
      {
        question: '¿Qué propiedad se usa para obtener el texto que escribió el usuario en un <input type="text">?',
        options: ['.text', '.content', '.value', '.innerHTML'],
        correctAnswer: '.value',
        correctFeedback: 'Correcto. La propiedad value contiene el texto actual del input.',
        incorrectFeedback: 'La propiedad correcta es .value. .innerHTML y .text no aplican a inputs; .content no existe en este contexto.',
      },
      {
        question: '¿Para qué sirve llamar a .trim() sobre el valor de un input?',
        options: [
          'Para convertir el texto a mayúsculas',
          'Para eliminar espacios en blanco al inicio y al final',
          'Para eliminar todos los espacios del texto',
          'Para limitar el número de caracteres',
        ],
        correctAnswer: 'Para eliminar espacios en blanco al inicio y al final',
        correctFeedback: 'Correcto. trim() elimina solo los espacios del inicio y del final, sin tocar los del interior.',
        incorrectFeedback: 'trim() elimina únicamente los espacios al inicio y al final. No elimina espacios internos ni convierte a mayúsculas.',
      },
      {
        question: '¿Qué propiedad indica si un checkbox está marcado?',
        options: ['.value', '.selected', '.checked', '.active'],
        correctAnswer: '.checked',
        correctFeedback: 'Correcto. .checked es un booleano: true si está marcado, false si no.',
        incorrectFeedback: 'Los checkboxes usan .checked (booleano). .value en un checkbox devuelve el atributo value del HTML, no si está marcado.',
      },
      {
        question: '¿Cuál es la forma correcta de saber qué radio button está seleccionado cuando todos tienen name="color"?',
        options: [
          'document.getElementById("color").value',
          'document.querySelector(\'input[name="color"]\').value',
          'Iterar con querySelectorAll(\'input[name="color"]\') y buscar .checked === true',
          'document.querySelector(\'input[name="color"]:selected\').value',
        ],
        correctAnswer: 'Iterar con querySelectorAll(\'input[name="color"]\') y buscar .checked === true',
        correctFeedback: 'Correcto. querySelectorAll devuelve todos los radios del grupo y debes buscar cuál tiene checked en true.',
        incorrectFeedback: ':selected no existe en CSS para radios. querySelector sin :checked solo devuelve el primero. La forma correcta es iterar y verificar .checked.',
      },
      {
        question: '¿Qué devuelve select.value cuando hay una opción seleccionada?',
        options: [
          'El texto visible de la opción',
          'El atributo value de la opción seleccionada',
          'El índice numérico de la opción',
          'Un objeto con value y text',
        ],
        correctAnswer: 'El atributo value de la opción seleccionada',
        correctFeedback: 'Correcto. select.value devuelve el atributo value del <option> actualmente elegido.',
        incorrectFeedback: 'select.value devuelve el atributo value del <option> elegido, no el texto visible. Para el texto usa select.options[select.selectedIndex].text.',
      },
      {
        question: 'Un usuario escribe "  Juan  " en un input. ¿Qué devuelve input.value.trim()?',
        options: ['"  Juan  "', '"Juan"', '"juan"', 'Error'],
        correctAnswer: '"Juan"',
        correctFeedback: 'Correcto. trim() elimina los cuatro espacios (dos al inicio, dos al final) y deja "Juan".',
        incorrectFeedback: 'trim() elimina los espacios del borde: "  Juan  " se convierte en "Juan". No modifica el interior ni cambia mayúsculas.',
      },
    ],
  },

  {
    slug: 'validar-campos-vacios',
    title: 'Validar campos vacíos',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 100,
    description: 'Aprende a verificar que el usuario complete los campos requeridos.',
    explanation: `Antes de procesar cualquier formulario debes asegurarte de que los campos obligatorios tienen contenido. La validación de campos vacíos es la más básica y la más frecuente.

**La comprobación fundamental**

Después de leer el valor y aplicar \`trim()\`, compara con una cadena vacía:

\`\`\`js
const nombre = document.getElementById('nombre').value.trim()
if (nombre === '') {
  console.log('El nombre es obligatorio')
}
\`\`\`

Usar \`=== ''\` es más explícito que \`!nombre\`, aunque ambos funcionan para cadenas vacías. Con \`=== ''\` evitas falsos positivos si el valor fuera el número \`0\`.

**Validar múltiples campos**

Lo más práctico es acumular los errores y solo bloquear el envío si hay al menos uno:

\`\`\`js
function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim()
  const email  = document.getElementById('email').value.trim()
  const mensaje = document.getElementById('mensaje').value.trim()

  let hayErrores = false

  if (nombre === '') {
    mostrarError('nombre', 'El nombre es obligatorio')
    hayErrores = true
  }
  if (email === '') {
    mostrarError('email', 'El email es obligatorio')
    hayErrores = true
  }
  if (mensaje === '') {
    mostrarError('mensaje', 'El mensaje es obligatorio')
    hayErrores = true
  }

  return !hayErrores
}
\`\`\`

**No enviar si hay errores**

En el handler del submit, llama a la función de validación y, si devuelve false, detén el proceso:

\`\`\`js
form.addEventListener('submit', function(e) {
  e.preventDefault()
  if (!validarFormulario()) return
  // Aquí sí procesas o envías
})
\`\`\`

**Mostrar un mensaje de error simple**

Para empezar, puedes insertar el mensaje en un elemento que ya existe en el HTML junto a cada campo:

\`\`\`js
function mostrarError(campo, mensaje) {
  const errorEl = document.getElementById('error-' + campo)
  if (errorEl) errorEl.textContent = mensaje
}

function limpiarError(campo) {
  const errorEl = document.getElementById('error-' + campo)
  if (errorEl) errorEl.textContent = ''
}
\`\`\`

Siempre limpia los errores anteriores antes de validar de nuevo para que no se acumulen mensajes del intento previo.`,
    codeExample: `// Formulario de contacto con validación de vacíos

const form = document.getElementById('formContacto')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  limpiarErrores()

  if (validarFormulario()) {
    console.log('Formulario válido, procesando...')
  }
})

function validarFormulario() {
  const nombre  = document.getElementById('nombre').value.trim()
  const email   = document.getElementById('email').value.trim()
  const mensaje = document.getElementById('mensaje').value.trim()
  let valido = true

  if (nombre === '') {
    mostrarError('nombre', 'Por favor ingresa tu nombre.')
    valido = false
  }
  if (email === '') {
    mostrarError('email', 'Por favor ingresa tu email.')
    valido = false
  }
  if (mensaje === '') {
    mostrarError('mensaje', 'El mensaje no puede estar vacío.')
    valido = false
  }

  return valido
}

function mostrarError(campo, texto) {
  const el = document.getElementById('error-' + campo)
  if (el) el.textContent = texto
}

function limpiarErrores() {
  ['nombre', 'email', 'mensaje'].forEach(c => mostrarError(c, ''))
}`,
    keyPoints: [
      'Usa .trim() antes de comparar con "" para no confundir espacios con contenido real.',
      'Acumula los errores con una bandera (let valido = true) en lugar de retornar al primer error.',
      'Limpia los mensajes de error anteriores al inicio de cada validación.',
      'No envíes el formulario si hay errores: retorna false desde la función de validación.',
      'Coloca elementos de error junto a cada campo en el HTML para mostrar mensajes sin alert().',
    ],
    exercise: {
      description: 'Crea un formulario con tres campos: nombre, email y contraseña. Al hacer submit valida que ninguno esté vacío. Si alguno lo está, muestra un mensaje de error debajo de ese campo (no uses alert). Si todos son válidos, muestra "Formulario enviado" en un párrafo.',
      hint: 'Prepara un <span> o <p> vacío debajo de cada input con un id como "error-nombre". Rellena su textContent con el mensaje de error cuando el campo esté vacío.',
    },
    quiz: [
      {
        question: '¿Por qué se usa .trim() antes de comparar con "" en la validación?',
        options: [
          'Para convertir el valor a número',
          'Para evitar que espacios en blanco cuenten como contenido válido',
          'Para hacer la comparación más rápida',
          'Porque trim() es obligatorio en formularios',
        ],
        correctAnswer: 'Para evitar que espacios en blanco cuenten como contenido válido',
        correctFeedback: 'Correcto. Sin trim(), "   " (solo espacios) no sería igual a "" y pasaría la validación erróneamente.',
        incorrectFeedback: 'trim() elimina espacios del borde. Sin él, un campo con solo espacios parecería tener contenido y la validación lo dejaría pasar.',
      },
      {
        question: 'En la validación de múltiples campos, ¿qué ventaja tiene usar una bandera "valido = false" en lugar de retornar inmediatamente al primer error?',
        options: [
          'Es más rápido en ejecución',
          'Permite mostrar todos los errores a la vez, no solo el primero',
          'Evita usar funciones',
          'No hay diferencia',
        ],
        correctAnswer: 'Permite mostrar todos los errores a la vez, no solo el primero',
        correctFeedback: 'Correcto. Si retornas al primer error, el usuario solo ve un problema a la vez. Con la bandera, todos los errores aparecen juntos.',
        incorrectFeedback: 'Retornar al primer error obliga al usuario a corregir y reenviar varias veces. Con una bandera se muestran todos los errores en un solo intento.',
      },
      {
        question: '¿Por qué es importante limpiar los mensajes de error al inicio de cada validación?',
        options: [
          'Para liberar memoria',
          'Para que no queden mensajes de intentos anteriores que ya fueron corregidos',
          'Porque los navegadores lo requieren',
          'Para mejorar el SEO',
        ],
        correctAnswer: 'Para que no queden mensajes de intentos anteriores que ya fueron corregidos',
        correctFeedback: 'Correcto. Si el usuario corrigió un campo pero no limpias el error anterior, seguirá mostrándose aunque ya no sea un problema.',
        incorrectFeedback: 'Sin limpiar primero, mensajes de errores ya corregidos permanecerán visibles, confundiendo al usuario sobre qué sigue mal.',
      },
      {
        question: '¿Cuál es la diferencia práctica entre if (!nombre) y if (nombre === "") para validar un input de texto?',
        options: [
          'Son completamente equivalentes siempre',
          '!nombre también considera falso el valor "0", mientras que === "" solo detecta cadena vacía',
          '=== "" es más lento',
          '!nombre lanza un error si nombre es undefined',
        ],
        correctAnswer: '!nombre también considera falso el valor "0", mientras que === "" solo detecta cadena vacía',
        correctFeedback: 'Correcto. !nombre es truthy para "", "0", 0, null, undefined, false. Con === "" solo capturas la cadena vacía.',
        incorrectFeedback: '!nombre es falsy para "", "0", 0, null y false. Si un input válido pudiera tener valor "0", !nombre daría un falso positivo. === "" es más preciso.',
      },
      {
        question: '¿Qué debe hacer el manejador de submit cuando la función de validación devuelve false?',
        options: [
          'Enviar el formulario de todas formas',
          'Lanzar un error con throw',
          'Detener la ejecución sin procesar ni enviar',
          'Recargar la página',
        ],
        correctAnswer: 'Detener la ejecución sin procesar ni enviar',
        correctFeedback: 'Correcto. Si la validación falla, debes detenerte: if (!validar()) return. El usuario ya ve los mensajes de error.',
        incorrectFeedback: 'Si la validación devuelve false, la única acción correcta es detenerse. Enviar datos inválidos al servidor es un error de diseño.',
      },
      {
        question: '¿Por qué se recomienda mostrar mensajes de error en el DOM en lugar de usar alert()?',
        options: [
          'alert() está deshabilitado en formularios',
          'alert() bloquea la página y no está cerca del campo con error, lo que es peor UX',
          'alert() no funciona en móviles',
          'No hay diferencia de experiencia de usuario',
        ],
        correctAnswer: 'alert() bloquea la página y no está cerca del campo con error, lo que es peor UX',
        correctFeedback: 'Correcto. alert() interrumpe todo, no indica qué campo falló y obliga al usuario a hacer clic en Aceptar antes de poder corregir.',
        incorrectFeedback: 'alert() tiene peor UX: bloquea la página, no señala el campo con error y no permite copiar o leer cómodamente el mensaje mientras se corrige.',
      },
    ],
  },

  {
    slug: 'validar-email-basico',
    title: 'Validar email con expresión regular',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 101,
    description: 'Aprende a validar un email de forma simple y mostrar mensajes útiles al usuario.',
    explanation: `Verificar que un correo tiene formato válido antes de enviarlo al servidor evita errores obvios y mejora la experiencia del usuario. En el navegador usamos una expresión regular básica.

**La expresión regular**

\`\`\`js
const regexEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
\`\`\`

Este patrón comprueba que:
- No haya espacios ni \`@\` antes del \`@\` central.
- Exista exactamente un \`@\`.
- Después del \`@\` haya al menos un punto, sin espacios.

**Cómo usarla**

El método \`test()\` devuelve \`true\` si la cadena coincide con el patrón:

\`\`\`js
function esEmailValido(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  return regex.test(email)
}

esEmailValido('usuario@ejemplo.com')  // true
esEmailValido('sinArroba.com')        // false
esEmailValido('sin@punto')            // false
esEmailValido('con espacios@a.com')   // false
\`\`\`

**Integración en la validación del formulario**

\`\`\`js
const email = document.getElementById('email').value.trim()

if (email === '') {
  mostrarError('email', 'El email es obligatorio.')
} else if (!esEmailValido(email)) {
  mostrarError('email', 'Ingresa un email válido, por ejemplo: usuario@correo.com')
}
\`\`\`

Separa la validación de "vacío" de la validación de "formato" para dar mensajes más precisos.

**Advertencia importante**

Esta validación básica ayuda al usuario a detectar errores de escritura en el momento, pero **no garantiza que el email exista ni que le pertenezca**. La validación definitiva siempre ocurre en el servidor (verificando que el dominio exista, enviando un correo de confirmación, etc.). Nunca confíes únicamente en la validación del lado del cliente para decisiones de seguridad.`,
    codeExample: `// Validación de email en formulario de registro

function esEmailValido(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  return regex.test(email)
}

document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault()
  limpiarErrores()

  const email = document.getElementById('email').value.trim()
  let valido = true

  if (email === '') {
    mostrarError('email', 'El email es obligatorio.')
    valido = false
  } else if (!esEmailValido(email)) {
    mostrarError('email', 'Formato inválido. Ejemplo correcto: juan@correo.com')
    valido = false
  }

  if (valido) {
    console.log('Email válido:', email)
    // Continúa con el resto de la validación...
  }
})

function mostrarError(campo, texto) {
  const el = document.getElementById('error-' + campo)
  if (el) el.textContent = texto
}

function limpiarErrores() {
  document.querySelectorAll('.error-msg').forEach(el => {
    el.textContent = ''
  })
}`,
    keyPoints: [
      'La regex /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ detecta errores comunes de formato de email.',
      'Usa regex.test(valor) que devuelve true o false.',
      'Valida "vacío" y "formato" por separado para mensajes más claros.',
      'Esta validación mejora la UX pero no reemplaza la validación en el servidor.',
      'Da ejemplos en el mensaje de error para que el usuario entienda el formato esperado.',
    ],
    exercise: {
      description: 'Crea un input de email con un botón "Verificar". Al hacer clic, si está vacío muestra "Campo obligatorio", si tiene formato inválido muestra "Email inválido, ejemplo: tu@correo.com", y si es válido muestra "Email correcto" en verde. No uses alert().',
      hint: 'Usa regex.test(email) donde regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/. Cambia el color del mensaje con el estilo de CSS o con classList.',
    },
    quiz: [
      {
        question: '¿Qué método de las expresiones regulares en JavaScript devuelve true o false según si el texto coincide?',
        options: ['.match()', '.test()', '.exec()', '.find()'],
        correctAnswer: '.test()',
        correctFeedback: 'Correcto. regex.test(cadena) devuelve true si hay coincidencia, false si no.',
        incorrectFeedback: 'El método correcto es .test(). .match() devuelve el resultado o null (se llama sobre la cadena). .exec() también devuelve resultado o null. .find() no existe en regex.',
      },
      {
        question: '¿Qué detecta la regex /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/?',
        options: [
          'Que el email exista y funcione',
          'Que el email tenga un formato básico con @ y un punto después',
          'Que el dominio sea .com o .org',
          'Que el email tenga menos de 50 caracteres',
        ],
        correctAnswer: 'Que el email tenga un formato básico con @ y un punto después',
        correctFeedback: 'Correcto. Solo verifica estructura básica: algo@algo.algo, sin espacios. No comprueba existencia ni dominio.',
        incorrectFeedback: 'Esta regex solo verifica la estructura mínima (@ con algo a ambos lados y un punto). No comprueba si el email existe, ni el dominio específico.',
      },
      {
        question: '¿Por qué se valida por separado "campo vacío" y "formato incorrecto"?',
        options: [
          'Por rendimiento',
          'Para dar mensajes de error más precisos al usuario',
          'Porque la regex no detecta campos vacíos',
          'Por un requisito del navegador',
        ],
        correctAnswer: 'Para dar mensajes de error más precisos al usuario',
        correctFeedback: 'Correcto. "El campo es obligatorio" y "El formato es incorrecto" son problemas distintos que merecen mensajes distintos.',
        incorrectFeedback: 'La separación mejora la claridad del mensaje de error. El usuario necesita saber si olvidó el campo o si escribió mal el formato.',
      },
      {
        question: '¿Cuál de estos emails pasaría la validación de la regex básica /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/?',
        options: [
          '"usuariocorreo.com"',
          '"usuario@"',
          '"usuario@correo.com"',
          '"usuario correo@correo.com"',
        ],
        correctAnswer: '"usuario@correo.com"',
        correctFeedback: 'Correcto. usuario@correo.com tiene algo antes del @, el @ en el centro, y algo.algo después.',
        incorrectFeedback: '"usuariocorreo.com" no tiene @. "usuario@" no tiene dominio. "usuario correo@correo.com" tiene un espacio antes del @. Solo "usuario@correo.com" es válido.',
      },
      {
        question: '¿Qué significa que la validación de email en el navegador NO reemplaza la validación en el servidor?',
        options: [
          'Que JavaScript no puede validar emails',
          'Que el usuario puede desactivar JavaScript y saltarse la validación del navegador',
          'Que el servidor es más lento',
          'Que los navegadores modernos no soportan regex',
        ],
        correctAnswer: 'Que el usuario puede desactivar JavaScript y saltarse la validación del navegador',
        correctFeedback: 'Correcto. Además, la regex no verifica existencia real del email. La validación en el cliente es solo UX; la del servidor es la real.',
        incorrectFeedback: 'La validación del navegador puede ser evitada desactivando JS o enviando peticiones directas al servidor. El servidor siempre debe validar independientemente.',
      },
      {
        question: '¿Qué mensaje de error es más útil para el usuario cuando el email tiene formato incorrecto?',
        options: [
          '"Error"',
          '"Email inválido"',
          '"Formato incorrecto. Ejemplo: usuario@correo.com"',
          '"Por favor completa el campo"',
        ],
        correctAnswer: '"Formato incorrecto. Ejemplo: usuario@correo.com"',
        correctFeedback: 'Correcto. Un ejemplo concreto muestra exactamente qué formato se espera, reduciendo la confusión del usuario.',
        incorrectFeedback: 'Los mensajes vagos como "Error" o "Email inválido" no dicen al usuario cómo corregir el problema. Un ejemplo del formato correcto es mucho más útil.',
      },
    ],
  },

  {
    slug: 'validar-numeros-rangos',
    title: 'Validar números y rangos',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 102,
    description: 'Aprende a validar edades, cantidades, precios y otros valores numéricos.',
    explanation: `Los formularios frecuentemente piden números: edades, precios, cantidades en un carrito. Validar que el valor sea realmente un número y que esté en el rango esperado es esencial.

**Convertir el valor a número**

Los inputs siempre devuelven texto. Debes convertir explícitamente:

\`\`\`js
const edad = Number(document.getElementById('edad').value)
\`\`\`

\`Number()\` convierte la cadena a número. Si la cadena no es un número válido, devuelve \`NaN\`.

**Detectar NaN**

La función \`isNaN()\` devuelve \`true\` si el valor no es un número:

\`\`\`js
isNaN(Number('hola'))  // true
isNaN(Number('25'))    // false
isNaN(Number(''))      // false — ojo: Number("") es 0
\`\`\`

Por eso debes validar vacío antes de convertir a número.

**parseInt vs parseFloat**

- \`parseInt(valor)\` convierte a entero, descartando decimales.
- \`parseFloat(valor)\` mantiene los decimales.
- \`Number(valor)\` es equivalente a \`parseFloat\` pero más estricto (no acepta "25px").

Usa \`parseInt\` para edades o cantidades enteras, \`parseFloat\` para precios.

**Validar rango (mínimo y máximo)**

\`\`\`js
function validarEdad(valor) {
  const edad = Number(valor)
  if (isNaN(edad)) return 'Ingresa un número válido.'
  if (edad < 0 || edad > 120) return 'La edad debe estar entre 0 y 120.'
  return null // Sin error
}
\`\`\`

**Ejemplo completo: cantidad en carrito**

\`\`\`js
function validarCantidad(valor) {
  if (valor.trim() === '') return 'La cantidad es obligatoria.'
  const cantidad = Number(valor)
  if (isNaN(cantidad)) return 'Ingresa un número.'
  if (!Number.isInteger(cantidad)) return 'La cantidad debe ser un número entero.'
  if (cantidad < 1) return 'La cantidad mínima es 1.'
  if (cantidad > 99) return 'La cantidad máxima es 99.'
  return null
}
\`\`\`

Devolver \`null\` cuando no hay error es un patrón limpio: si la función devuelve algo, hay error; si devuelve \`null\`, todo está bien.`,
    codeExample: `// Formulario de perfil con edad y precio

function validarCampoNumerico(valor, opciones) {
  const { esEntero = false, min, max, nombreCampo } = opciones

  if (valor.trim() === '') return nombreCampo + ' es obligatorio.'

  const num = Number(valor)
  if (isNaN(num)) return 'Ingresa un número válido.'
  if (esEntero && !Number.isInteger(num)) return 'Debe ser un número entero.'
  if (min !== undefined && num < min) return \`El mínimo es \${min}.\`
  if (max !== undefined && num > max) return \`El máximo es \${max}.\`

  return null
}

document.getElementById('formPerfil').addEventListener('submit', function(e) {
  e.preventDefault()

  const edadVal    = document.getElementById('edad').value
  const precioVal  = document.getElementById('precio').value

  const errorEdad  = validarCampoNumerico(edadVal,   { esEntero: true, min: 1, max: 120, nombreCampo: 'La edad' })
  const errorPrecio = validarCampoNumerico(precioVal, { min: 0.01, max: 9999, nombreCampo: 'El precio' })

  if (errorEdad)   mostrarError('edad',   errorEdad)
  if (errorPrecio) mostrarError('precio', errorPrecio)

  if (!errorEdad && !errorPrecio) {
    console.log('Datos válidos:', { edad: Number(edadVal), precio: Number(precioVal) })
  }
})

function mostrarError(campo, texto) {
  const el = document.getElementById('error-' + campo)
  if (el) el.textContent = texto
}`,
    keyPoints: [
      'Los inputs siempre devuelven texto; usa Number(), parseInt() o parseFloat() para convertir.',
      'isNaN() detecta si el valor no es un número válido.',
      'Valida que el campo no esté vacío antes de convertir a número (Number("") es 0, no NaN).',
      'parseInt descarta decimales; parseFloat los mantiene; Number() es más estricto que ambos.',
      'Devuelve null cuando no hay error para separar el error del valor.',
      'Comprueba rango (min/max) después de confirmar que es un número válido.',
    ],
    exercise: {
      description: 'Crea un formulario con un input de "edad" (entero entre 1 y 120) y un input de "precio" (decimal entre 0.01 y 9999). Al enviar, valida ambos campos y muestra mensajes de error específicos junto a cada uno. Si ambos son válidos, muestra "Datos guardados" en la página.',
      hint: 'Usa Number(valor) para convertir e isNaN() para detectar entradas no numéricas. Comprueba vacío con trim() === "" antes de convertir.',
    },
    quiz: [
      {
        question: '¿Qué devuelve Number("hola")?',
        options: ['0', 'null', 'NaN', 'undefined'],
        correctAnswer: 'NaN',
        correctFeedback: 'Correcto. Cuando la cadena no representa un número, Number() devuelve NaN (Not a Number).',
        incorrectFeedback: 'Number("hola") devuelve NaN. Solo devuelve 0 si la cadena es "" o "0". null y undefined no son el resultado de Number().',
      },
      {
        question: '¿Qué devuelve Number("")?',
        options: ['NaN', 'null', '0', 'undefined'],
        correctAnswer: '0',
        correctFeedback: 'Correcto. Number("") es 0, no NaN. Por eso debes validar vacío antes de convertir.',
        incorrectFeedback: 'Number("") devuelve 0, no NaN. Esto es un error común: si validas isNaN(Number("")) obtendrás false, pareciendo un número válido.',
      },
      {
        question: '¿Cuál es la diferencia principal entre parseInt("3.7") y parseFloat("3.7")?',
        options: [
          'No hay diferencia',
          'parseInt devuelve 3 (entero), parseFloat devuelve 3.7 (decimal)',
          'parseFloat devuelve 4 (redondea), parseInt devuelve 3',
          'parseInt lanza un error con decimales',
        ],
        correctAnswer: 'parseInt devuelve 3 (entero), parseFloat devuelve 3.7 (decimal)',
        correctFeedback: 'Correcto. parseInt trunca la parte decimal. parseFloat mantiene todos los decimales.',
        incorrectFeedback: 'parseInt("3.7") devuelve 3 (corta en el punto). parseFloat("3.7") devuelve 3.7. Ninguno redondea al entero más cercano.',
      },
      {
        question: '¿Por qué debes validar que el campo no está vacío antes de usar isNaN(Number(valor))?',
        options: [
          'Porque isNaN lanza un error con cadenas vacías',
          'Porque Number("") es 0, que pasaría la prueba isNaN como número válido',
          'Porque trim() falla con números',
          'No es necesario, isNaN detecta campos vacíos automáticamente',
        ],
        correctAnswer: 'Porque Number("") es 0, que pasaría la prueba isNaN como número válido',
        correctFeedback: 'Correcto. isNaN(Number("")) es false (0 es un número), así que un campo vacío parecería válido sin la comprobación previa.',
        incorrectFeedback: 'Number("") es 0 y isNaN(0) es false. Sin validar vacío primero, un campo vacío pasaría como número 0, lo que probablemente no es correcto.',
      },
      {
        question: '¿Qué método comprueba si un número es entero (sin decimales)?',
        options: ['isInteger(num)', 'Number.isInteger(num)', 'parseInt(num) === num', 'num % 1 === 0'],
        correctAnswer: 'Number.isInteger(num)',
        correctFeedback: 'Correcto. Number.isInteger() es la forma estándar y explícita. num % 1 === 0 también funciona pero es menos legible.',
        incorrectFeedback: 'La forma estándar es Number.isInteger(num). isInteger() solo no existe. num % 1 === 0 también funciona pero Number.isInteger es más claro.',
      },
      {
        question: 'En la validación de rango, ¿en qué orden deben hacerse las comprobaciones?',
        options: [
          'Rango → NaN → vacío',
          'NaN → vacío → rango',
          'Vacío → NaN → rango',
          'El orden no importa',
        ],
        correctAnswer: 'Vacío → NaN → rango',
        correctFeedback: 'Correcto. Primero verifica que haya algo, luego que sea un número, luego que esté en el rango válido.',
        incorrectFeedback: 'El orden importa: si verificas NaN sobre un campo vacío, Number("") es 0 y pasa. Si verificas rango antes de NaN, la comparación puede comportarse inesperadamente con NaN.',
      },
    ],
  },

  {
    slug: 'mostrar-errores-usuario',
    title: 'Mostrar errores al usuario',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 103,
    description: 'Aprende a mostrar mensajes de error claros sin interrumpir la experiencia del usuario.',
    explanation: `Un buen sistema de errores en formularios guía al usuario para corregir sus datos sin frustración. La clave está en mostrar los errores cerca del problema y nunca usar \`alert()\`.

**Preparar el HTML**

Agrega un elemento de error junto a cada campo. Puede estar vacío al inicio:

\`\`\`html
<div class="campo">
  <label for="email">Email</label>
  <input type="email" id="email" />
  <span class="error-msg" id="error-email" aria-live="polite"></span>
</div>
\`\`\`

El atributo \`aria-live="polite"\` hace que los lectores de pantalla anuncien el mensaje cuando aparece, mejorando la accesibilidad básica.

**Mostrar y ocultar errores con classList**

\`\`\`js
function mostrarError(campoId, mensaje) {
  const campo = document.getElementById(campoId)
  const errorEl = document.getElementById('error-' + campoId)

  campo.classList.add('campo-error')       // borde rojo
  errorEl.textContent = mensaje
  errorEl.classList.add('visible')
}

function limpiarError(campoId) {
  const campo = document.getElementById(campoId)
  const errorEl = document.getElementById('error-' + campoId)

  campo.classList.remove('campo-error')
  errorEl.textContent = ''
  errorEl.classList.remove('visible')
}
\`\`\`

**Estilos CSS mínimos**

\`\`\`css
.error-msg { color: #c0392b; font-size: 0.85rem; display: none; }
.error-msg.visible { display: block; }
.campo-error { border-color: #c0392b; outline-color: #c0392b; }
.campo-ok { border-color: #27ae60; }
\`\`\`

**Marcar campos correctos**

Cuando un campo es válido, puedes también marcarlo en verde para dar retroalimentación positiva:

\`\`\`js
function marcarOk(campoId) {
  const campo = document.getElementById(campoId)
  campo.classList.remove('campo-error')
  campo.classList.add('campo-ok')
}
\`\`\`

**Accesibilidad básica con aria-live**

\`aria-live="polite"\` en el contenedor del mensaje de error le indica a los lectores de pantalla que anuncien el cambio de texto cuando ocurre, sin interrumpir lo que estén leyendo en ese momento. Es una mejora mínima de gran impacto para usuarios con discapacidad visual.`,
    codeExample: `// Sistema de errores reutilizable para formularios

function mostrarError(campoId, mensaje) {
  const input   = document.getElementById(campoId)
  const errorEl = document.getElementById('error-' + campoId)
  if (!input || !errorEl) return

  input.classList.remove('campo-ok')
  input.classList.add('campo-error')
  errorEl.textContent = mensaje
  errorEl.style.display = 'block'
}

function limpiarError(campoId) {
  const input   = document.getElementById(campoId)
  const errorEl = document.getElementById('error-' + campoId)
  if (!input || !errorEl) return

  input.classList.remove('campo-error')
  input.classList.add('campo-ok')
  errorEl.textContent = ''
  errorEl.style.display = 'none'
}

function limpiarTodosLosErrores(campos) {
  campos.forEach(id => limpiarError(id))
}

// Uso en el formulario de registro
document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault()
  const campos = ['nombre', 'email', 'password']
  limpiarTodosLosErrores(campos)

  const nombre = document.getElementById('nombre').value.trim()
  if (nombre === '') {
    mostrarError('nombre', 'El nombre no puede estar vacío.')
  } else {
    limpiarError('nombre')
  }

  // ... resto de validaciones
})`,
    keyPoints: [
      'Nunca uses alert() para mostrar errores de formulario.',
      'Coloca el mensaje de error justo debajo del campo afectado para máxima claridad.',
      'Usa classList.add/remove para aplicar estilos de error (borde rojo) y éxito (borde verde).',
      'Limpia todos los errores al inicio de cada validación antes de agregar los nuevos.',
      'aria-live="polite" en el elemento de error mejora la accesibilidad para lectores de pantalla.',
      'Puedes marcar campos válidos en verde para dar retroalimentación positiva.',
    ],
    exercise: {
      description: 'Crea un formulario con nombre y email. Implementa funciones mostrarError(campoId, msg) y limpiarError(campoId) que cambien el borde del input a rojo/verde y muestren/oculten el mensaje. Agrega aria-live="polite" a los spans de error.',
      hint: 'Usa classList.add("campo-error") para el borde rojo y classList.remove("campo-error") para quitarlo. El span de error debería estar inicialmente oculto con display:none y mostrarse con display:block al agregar la clase.',
    },
    quiz: [
      {
        question: '¿Para qué sirve el atributo aria-live="polite" en un elemento de error?',
        options: [
          'Para que el error desaparezca automáticamente',
          'Para que los lectores de pantalla anuncien el mensaje cuando cambia',
          'Para hacer el texto más grande',
          'Para centrar el mensaje en la pantalla',
        ],
        correctAnswer: 'Para que los lectores de pantalla anuncien el mensaje cuando cambia',
        correctFeedback: 'Correcto. aria-live="polite" avisa a los lectores de pantalla que lean el contenido actualizado, sin interrumpir lo que ya estén leyendo.',
        incorrectFeedback: 'aria-live es un atributo de accesibilidad. Hace que el software lector de pantalla anuncie los cambios en ese elemento, mejorando la experiencia de usuarios con discapacidad visual.',
      },
      {
        question: '¿Por qué es mejor mostrar errores en el DOM que usar alert()?',
        options: [
          'alert() está deprecated en HTML5',
          'alert() bloquea la interacción, no indica el campo exacto y tiene peor UX',
          'El DOM es más rápido',
          'alert() no funciona en Safari',
        ],
        correctAnswer: 'alert() bloquea la interacción, no indica el campo exacto y tiene peor UX',
        correctFeedback: 'Correcto. alert() detiene toda la página, no señala qué campo está mal y obliga al usuario a hacer clic antes de poder corregir.',
        incorrectFeedback: 'alert() no está deprecated, pero tiene mala UX: bloquea la página, no muestra dónde está el error y el usuario debe cerrarla antes de poder corregir.',
      },
      {
        question: '¿Cuándo se deben limpiar los mensajes de error previos?',
        options: [
          'Solo cuando el formulario es válido',
          'Al inicio de cada nueva validación, antes de mostrar los nuevos errores',
          'Nunca, para que el usuario vea el historial',
          'Solo cuando el usuario hace clic en un botón de limpiar',
        ],
        correctAnswer: 'Al inicio de cada nueva validación, antes de mostrar los nuevos errores',
        correctFeedback: 'Correcto. Limpiar primero evita que errores ya corregidos sigan mostrándose en el siguiente intento de envío.',
        incorrectFeedback: 'Si no limpias al inicio, errores de campos ya corregidos seguirán visibles. El usuario verá mensajes que ya no aplican, causando confusión.',
      },
      {
        question: '¿Qué propiedad CSS es práctica para mostrar/ocultar el span de error?',
        options: ['visibility', 'opacity', 'display', 'position'],
        correctAnswer: 'display',
        correctFeedback: 'Correcto. display:none oculta completamente el elemento (sin espacio), display:block lo muestra. Es el método más usado para ocultar mensajes de error.',
        incorrectFeedback: 'display:none/block es la opción preferida: el elemento no ocupa espacio cuando está oculto. visibility:hidden lo oculta pero reserva espacio; opacity:0 también reserva espacio.',
      },
      {
        question: '¿Cuál es el beneficio de marcar en verde los campos válidos?',
        options: [
          'Es obligatorio para accesibilidad',
          'Da retroalimentación positiva y ayuda al usuario a saber qué ya completó correctamente',
          'Mejora el rendimiento',
          'Evita recargas de página',
        ],
        correctAnswer: 'Da retroalimentación positiva y ayuda al usuario a saber qué ya completó correctamente',
        correctFeedback: 'Correcto. El color verde indica progreso y reduce la ansiedad del usuario al rellenar formularios largos.',
        incorrectFeedback: 'El marcado verde es opcional pero mejora la UX: el usuario sabe de un vistazo qué campos ya están bien y cuáles falta corregir.',
      },
      {
        question: '¿Dónde debe aparecer el mensaje de error en relación al campo?',
        options: [
          'En la parte superior de la página',
          'En un panel lateral fijo',
          'Inmediatamente debajo del campo afectado',
          'En el título del navegador',
        ],
        correctAnswer: 'Inmediatamente debajo del campo afectado',
        correctFeedback: 'Correcto. El mensaje debe estar cerca del campo para que el usuario entienda inmediatamente qué debe corregir.',
        incorrectFeedback: 'Los mensajes de error deben estar junto al campo afectado. Mensajes en la cima o en paneles separados requieren que el usuario busque a qué campo corresponde.',
      },
    ],
  },

  {
    slug: 'mostrar-mensajes-exito',
    title: 'Mostrar mensajes de éxito',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 104,
    description: 'Aprende a confirmar acciones correctamente cuando el usuario completa un formulario válido.',
    explanation: `Cuando un formulario se envía correctamente, el usuario necesita una confirmación clara. Un mensaje de éxito bien implementado mejora la confianza y evita que el usuario reenvíe el formulario por dudas.

**Mostrar un banner de éxito**

El enfoque más común es tener un elemento oculto en el HTML que se muestra al completar el envío:

\`\`\`js
function mostrarExito(mensaje) {
  const banner = document.getElementById('mensajeExito')
  banner.textContent = mensaje
  banner.style.display = 'block'
}
\`\`\`

**Limpiar el formulario después del envío**

Una vez confirmado el éxito, reinicia el formulario para que no queden datos del envío anterior:

\`\`\`js
document.getElementById('miFormulario').reset()
\`\`\`

\`form.reset()\` limpia todos los campos a su valor inicial, incluidos checkboxes y selects.

**Deshabilitar el botón temporalmente**

Para evitar que el usuario haga clic varias veces mientras se procesa:

\`\`\`js
const boton = document.getElementById('btnEnviar')
boton.disabled = true
boton.textContent = 'Enviando...'

// Simular procesamiento asíncrono
setTimeout(() => {
  boton.disabled = false
  boton.textContent = 'Enviar'
  mostrarExito('¡Mensaje enviado correctamente!')
  document.getElementById('formContacto').reset()
}, 1500)
\`\`\`

**Auto-ocultar el mensaje después de unos segundos**

Para no saturar la pantalla con mensajes permanentes, oculta el banner automáticamente:

\`\`\`js
function mostrarExitoConTimer(mensaje, segundos = 4) {
  const banner = document.getElementById('mensajeExito')
  banner.textContent = mensaje
  banner.style.display = 'block'

  setTimeout(() => {
    banner.style.display = 'none'
  }, segundos * 1000)
}
\`\`\`

**Estilo del banner**

\`\`\`css
.banner-exito {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 12px 16px;
  border-radius: 4px;
  display: none;
}
\`\`\``,
    codeExample: `// Formulario de contacto con éxito y limpieza

const form    = document.getElementById('formContacto')
const btnEnviar = document.getElementById('btnEnviar')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const nombre  = document.getElementById('nombre').value.trim()
  const email   = document.getElementById('email').value.trim()
  const mensaje = document.getElementById('mensaje').value.trim()

  if (nombre === '' || email === '' || mensaje === '') {
    mostrarError('Por favor completa todos los campos.')
    return
  }

  // Deshabilitar botón para evitar doble envío
  btnEnviar.disabled = true
  btnEnviar.textContent = 'Enviando...'

  // Simular envío asíncrono (en producción sería un fetch)
  setTimeout(() => {
    form.reset()
    btnEnviar.disabled = false
    btnEnviar.textContent = 'Enviar mensaje'
    mostrarBannerExito('¡Tu mensaje fue enviado! Te responderemos pronto.')
  }, 1500)
})

function mostrarBannerExito(mensaje) {
  const banner = document.getElementById('bannerExito')
  banner.textContent = mensaje
  banner.style.display = 'block'

  setTimeout(() => {
    banner.style.display = 'none'
  }, 4000)
}

function mostrarError(mensaje) {
  const errorGeneral = document.getElementById('errorGeneral')
  errorGeneral.textContent = mensaje
}`,
    keyPoints: [
      'Muestra un banner de éxito visible y con buen contraste, nunca uses alert().',
      'Usa form.reset() para limpiar todos los campos después de un envío exitoso.',
      'Deshabilita el botón de envío mientras se procesa para evitar envíos duplicados.',
      'Auto-oculta el mensaje de éxito con setTimeout para no saturar la pantalla.',
      'Restaura el botón a su estado original (texto y disabled = false) después del proceso.',
    ],
    exercise: {
      description: 'Crea un formulario de suscripción con un input de email. Al enviar con email válido: deshabilita el botón y cambia su texto a "Suscribiendo...", espera 2 segundos con setTimeout, luego limpia el formulario, restaura el botón y muestra un banner verde de éxito que desaparezca automáticamente a los 3 segundos.',
      hint: 'Usa btn.disabled = true antes del setTimeout y btn.disabled = false dentro del callback. Para el banner, guarda el elemento en una variable, ponlo visible y luego usa otro setTimeout para ocultarlo.',
    },
    quiz: [
      {
        question: '¿Qué hace form.reset()?',
        options: [
          'Elimina el formulario del DOM',
          'Recarga la página',
          'Limpia todos los campos del formulario a sus valores iniciales',
          'Solo limpia los inputs de texto',
        ],
        correctAnswer: 'Limpia todos los campos del formulario a sus valores iniciales',
        correctFeedback: 'Correcto. reset() limpia inputs, textareas, selects y checkboxes, devolviéndolos a su estado inicial.',
        incorrectFeedback: 'form.reset() limpia todos los campos (texto, select, checkbox, radio) sin eliminar el formulario ni recargar la página.',
      },
      {
        question: '¿Por qué se deshabilita el botón de envío mientras se procesa?',
        options: [
          'Para hacer la página más rápida',
          'Para evitar que el usuario envíe el formulario múltiples veces',
          'Porque el servidor lo requiere',
          'Para mejorar el SEO',
        ],
        correctAnswer: 'Para evitar que el usuario envíe el formulario múltiples veces',
        correctFeedback: 'Correcto. Sin deshabilitar, el usuario puede hacer clic varias veces y enviar datos duplicados.',
        incorrectFeedback: 'Deshabilitar el botón previene envíos duplicados. Si el usuario hace varios clics sin esta protección, el mismo formulario se procesaría varias veces.',
      },
      {
        question: '¿Cuándo debe restaurarse el botón de envío a su estado original?',
        options: [
          'Nunca, debe quedar deshabilitado',
          'Inmediatamente al hacer clic',
          'Después de que el proceso termine (éxito o error)',
          'Solo si hay un error',
        ],
        correctAnswer: 'Después de que el proceso termine (éxito o error)',
        correctFeedback: 'Correcto. El botón debe volver a su estado normal una vez que el proceso concluya, tanto en caso de éxito como de error.',
        incorrectFeedback: 'Si el botón queda deshabilitado permanentemente, el usuario no podrá hacer otra acción. Debe restaurarse al concluir el proceso, ya sea con éxito o error.',
      },
      {
        question: '¿Para qué sirve auto-ocultar el mensaje de éxito con setTimeout?',
        options: [
          'Para ahorrar memoria',
          'Para que el usuario no pueda leer el mensaje',
          'Para que la interfaz no quede con mensajes permanentes que ya no son relevantes',
          'Por un requisito de accesibilidad',
        ],
        correctAnswer: 'Para que la interfaz no quede con mensajes permanentes que ya no son relevantes',
        correctFeedback: 'Correcto. Un banner que desaparece solo mantiene la interfaz limpia sin que el usuario tenga que cerrarlo manualmente.',
        incorrectFeedback: 'Auto-ocultar mejora la limpieza visual. Mensajes de éxito permanentes saturan la interfaz; desaparecen solos después de que el usuario los ha leído.',
      },
      {
        question: '¿Cuál es un tiempo razonable para auto-ocultar un mensaje de éxito?',
        options: [
          '100 milisegundos',
          '3-5 segundos',
          '30 segundos',
          'No debe ocultarse nunca',
        ],
        correctAnswer: '3-5 segundos',
        correctFeedback: 'Correcto. 3-5 segundos da tiempo suficiente para leer el mensaje sin que sea tan largo que estorbe.',
        incorrectFeedback: '100ms es demasiado rápido para leer. 30s es excesivo. 3-5 segundos es el estándar de la industria: suficiente para leer, no tan largo que estorbe.',
      },
      {
        question: '¿Por qué se debe mostrar el mensaje de éxito DESPUÉS de llamar a form.reset()?',
        options: [
          'No importa el orden',
          'Para que el usuario vea el formulario vacío junto al mensaje de confirmación, confirmando que se procesó',
          'Porque reset() borra los mensajes también',
          'Por rendimiento',
        ],
        correctAnswer: 'Para que el usuario vea el formulario vacío junto al mensaje de confirmación, confirmando que se procesó',
        correctFeedback: 'Correcto. Ver el formulario vacío más el mensaje verde refuerza que el envío fue exitoso y que los datos ya no están pendientes.',
        incorrectFeedback: 'El orden importa para la experiencia: mostrar primero el éxito y luego limpiar puede ser confuso. Limpiar primero y luego mostrar el mensaje da señales coherentes al usuario.',
      },
    ],
  },

  {
    slug: 'botones-loading-states',
    title: 'Deshabilitar botones y estados de carga',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 105,
    description: 'Aprende a mejorar la experiencia del usuario deshabilitando botones y mostrando estados de carga.',
    explanation: `Cuando el usuario hace clic en "Enviar" y hay una operación en curso (llamada a servidor, carga de archivo), debe recibir retroalimentación visual inmediata. Sin ella, puede pensar que no pasó nada y volver a hacer clic.

**Deshabilitar el botón**

\`\`\`js
const btn = document.getElementById('btnEnviar')
btn.disabled = true
\`\`\`

Cuando \`disabled\` es \`true\`, el botón no responde a clics y el CSS automáticamente lo atenúa. Restaura con:

\`\`\`js
btn.disabled = false
\`\`\`

**Cambiar el texto del botón**

Informar al usuario de lo que está ocurriendo reduce la incertidumbre:

\`\`\`js
btn.textContent = 'Enviando...'

// Al terminar:
btn.textContent = 'Enviar'
\`\`\`

**Spinner con clase CSS**

Puedes agregar un spinner visual con una clase que activa una animación CSS:

\`\`\`js
btn.classList.add('cargando')
// Al terminar:
btn.classList.remove('cargando')
\`\`\`

\`\`\`css
.cargando::after {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-left: 8px;
  vertical-align: middle;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
\`\`\`

**Prevenir doble submit con una bandera**

Una bandera extra es más robusta que depender solo de \`disabled\`:

\`\`\`js
let enviando = false

form.addEventListener('submit', function(e) {
  e.preventDefault()
  if (enviando) return          // Ya hay un envío en curso
  enviando = true

  activarCarga()

  setTimeout(() => {            // Simula llamada al servidor
    enviando = false
    desactivarCarga()
    mostrarExito()
  }, 2000)
})
\`\`\`

**Funciones helper reutilizables**

\`\`\`js
function activarCarga(btn) {
  btn.disabled = true
  btn.dataset.textoOriginal = btn.textContent
  btn.textContent = 'Cargando...'
  btn.classList.add('cargando')
}

function desactivarCarga(btn) {
  btn.disabled = false
  btn.textContent = btn.dataset.textoOriginal
  btn.classList.remove('cargando')
}
\`\`\``,
    codeExample: `// Estado de carga completo en formulario de carrito

let enviando = false
const form    = document.getElementById('formCarrito')
const btn     = document.getElementById('btnComprar')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  if (enviando) return

  const cantidad = document.getElementById('cantidad').value.trim()
  if (cantidad === '' || isNaN(Number(cantidad))) {
    mostrarError('cantidad', 'Ingresa una cantidad válida.')
    return
  }

  iniciarCarga()

  // Simula llamada a API de pago (en producción: fetch/axios)
  setTimeout(() => {
    detenerCarga()
    form.reset()
    mostrarExito('¡Compra realizada! Te llegará un correo de confirmación.')
  }, 2000)
})

function iniciarCarga() {
  enviando = true
  btn.disabled = true
  btn.textContent = 'Procesando pago...'
  btn.classList.add('btn-cargando')
}

function detenerCarga() {
  enviando = false
  btn.disabled = false
  btn.textContent = 'Comprar ahora'
  btn.classList.remove('btn-cargando')
}

function mostrarError(campo, msg) {
  const el = document.getElementById('error-' + campo)
  if (el) el.textContent = msg
}

function mostrarExito(msg) {
  const banner = document.getElementById('bannerExito')
  banner.textContent = msg
  banner.style.display = 'block'
  setTimeout(() => { banner.style.display = 'none' }, 4000)
}`,
    keyPoints: [
      'btn.disabled = true evita clics adicionales y aplica estilos atenuados automáticamente.',
      'Cambia el texto del botón para informar qué está ocurriendo (Enviando..., Procesando...).',
      'Una bandera booleana (enviando = true/false) previene doble submit de forma más robusta.',
      'Siempre restaura el botón a su estado original al terminar, incluso si hay un error.',
      'Un spinner CSS con ::after y @keyframes da retroalimentación visual sin librerías externas.',
    ],
    exercise: {
      description: 'Crea un formulario de "Agregar al carrito" con un input de cantidad y un botón. Al enviar: valida que la cantidad sea un número entre 1 y 10, luego muestra estado de carga en el botón (texto + disabled) durante 1.5 segundos, y después muestra un mensaje de éxito y limpia el formulario. Usa una bandera para evitar doble envío.',
      hint: 'Declara let enviando = false fuera del event listener. Al inicio del submit, comprueba if (enviando) return. Activa la bandera antes del setTimeout y desactívala dentro del callback.',
    },
    quiz: [
      {
        question: '¿Qué efecto tiene btn.disabled = true en el botón?',
        options: [
          'Lo oculta completamente',
          'Evita que el botón responda a clics y lo atenúa visualmente',
          'Cambia su color a rojo',
          'Lo elimina del DOM',
        ],
        correctAnswer: 'Evita que el botón responda a clics y lo atenúa visualmente',
        correctFeedback: 'Correcto. disabled impide la interacción y el navegador aplica automáticamente estilos de atenuación.',
        incorrectFeedback: 'disabled = true desactiva el botón (no responde a clics) y el navegador lo atenúa. No lo oculta ni lo elimina del DOM.',
      },
      {
        question: '¿Para qué sirve la bandera booleana "enviando" además de btn.disabled?',
        options: [
          'No tiene utilidad adicional',
          'Protege contra doble envío si por algún motivo disabled no funciona o el botón se reactiva antes de tiempo',
          'Es obligatorio por las especificaciones HTML',
          'Mejora el rendimiento del formulario',
        ],
        correctAnswer: 'Protege contra doble envío si por algún motivo disabled no funciona o el botón se reactiva antes de tiempo',
        correctFeedback: 'Correcto. La bandera es una capa extra de protección. Si el botón se habilita inesperadamente, la bandera aún bloquea el segundo envío.',
        incorrectFeedback: 'La bandera es una capa de seguridad adicional. En casos edge (JS asíncrono complejo, habilitación prematura), disabled solo puede no ser suficiente.',
      },
      {
        question: '¿Por qué se cambia el texto del botón a "Enviando..." o "Cargando..."?',
        options: [
          'Por obligación técnica',
          'Para informar al usuario que hay una operación en curso y evitar confusión',
          'Para mejorar el SEO',
          'Porque el navegador lo borra durante la carga',
        ],
        correctAnswer: 'Para informar al usuario que hay una operación en curso y evitar confusión',
        correctFeedback: 'Correcto. Sin el cambio de texto, el usuario podría pensar que el clic no funcionó y seguir intentando.',
        incorrectFeedback: 'Cambiar el texto da retroalimentación inmediata. Sin ello, el usuario no sabe si el clic fue registrado y puede intentar de nuevo, causando envíos duplicados.',
      },
      {
        question: '¿Qué propiedad CSS crea la animación de rotación del spinner?',
        options: ['transition', 'animation con @keyframes', 'transform:rotate() directamente', 'scroll-behavior'],
        correctAnswer: 'animation con @keyframes',
        correctFeedback: 'Correcto. animation en combinación con @keyframes permite definir y repetir transformaciones como la rotación continua del spinner.',
        incorrectFeedback: 'Un spinner usa animation con @keyframes para definir la rotación y repetirla infinitamente. transition solo anima entre dos estados, no crea loops.',
      },
      {
        question: '¿Cuándo EXACTAMENTE se debe restaurar el botón a su estado original?',
        options: [
          'Solo cuando hay éxito',
          'Solo cuando hay error',
          'Al terminar el proceso, ya sea éxito o error',
          'Nunca, el usuario debe recargar la página',
        ],
        correctAnswer: 'Al terminar el proceso, ya sea éxito o error',
        correctFeedback: 'Correcto. En ambos casos el usuario necesita poder interactuar de nuevo: corregir y reenviar en caso de error, o realizar otra acción en caso de éxito.',
        incorrectFeedback: 'Si solo restauras en éxito, el usuario no podrá reintentar tras un error. Si solo en error, no podrá hacer otra acción tras el éxito. Siempre restaura al terminar.',
      },
      {
        question: '¿Qué pasa si olvidamos restaurar btn.disabled = false después de un error del servidor?',
        options: [
          'El botón se restaura automáticamente',
          'El usuario queda bloqueado sin poder reintentar',
          'El formulario se envía igualmente',
          'La página se recarga',
        ],
        correctAnswer: 'El usuario queda bloqueado sin poder reintentar',
        correctFeedback: 'Correcto. El botón queda deshabilitado permanentemente hasta que el usuario recarga la página, lo que es una pésima experiencia.',
        incorrectFeedback: 'Si no restauras el botón, el usuario no puede reintentar sin recargar la página. Siempre maneja tanto el camino de éxito como el de error.',
      },
    ],
  },

  {
    slug: 'validacion-tiempo-real',
    title: 'Validación en tiempo real',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 106,
    description: 'Aprende a validar mientras el usuario escribe usando eventos input y change.',
    explanation: `La validación en tiempo real da retroalimentación inmediata, pero aplicada sin cuidado puede resultar agresiva. El truco es elegir el evento correcto y el momento adecuado.

**Evento input vs evento change**

- \`input\`: se dispara con cada tecla que el usuario pulsa. Ideal para conteos de caracteres o comprobaciones suaves.
- \`change\`: se dispara cuando el campo pierde el foco (\`blur\`) y el valor cambió. Menos invasivo: valida cuando el usuario termina con ese campo.

\`\`\`js
const emailInput = document.getElementById('email')

// Valida mientras escribe (cada tecla)
emailInput.addEventListener('input', function() {
  validarEmail(this.value)
})

// Valida al salir del campo
emailInput.addEventListener('change', function() {
  validarEmail(this.value)
})
\`\`\`

**¿Cuándo usar cada uno?**

| Situación | Evento recomendado |
|---|---|
| Contador de caracteres | \`input\` |
| Validar formato al terminar de escribir | \`change\` o \`blur\` |
| Búsqueda en tiempo real | \`input\` + debounce |
| Confirmar contraseña | \`input\` |

**Debounce simple**

Un debounce retrasa la ejecución hasta que el usuario deja de escribir por un tiempo. Evita validar en cada letra:

\`\`\`js
let temporizador = null

document.getElementById('usuario').addEventListener('input', function() {
  clearTimeout(temporizador)
  temporizador = setTimeout(() => {
    validarNombreUsuario(this.value)
  }, 500) // Espera 500ms después de la última tecla
})
\`\`\`

**No ser agresivo**

No muestres errores mientras el usuario está escribiendo activamente. Una buena estrategia es:
1. Mostrar el error al perder el foco (\`blur\`).
2. Una vez que hay un error, actualizar en tiempo real con \`input\` para dar retroalimentación inmediata al corregir.

\`\`\`js
let yaInteractuó = false

input.addEventListener('blur', () => { yaInteractuó = true; validar() })
input.addEventListener('input', () => { if (yaInteractuó) validar() })
\`\`\``,
    codeExample: `// Validación en tiempo real con debounce para nombre de usuario

const inputUsuario = document.getElementById('usuario')
const inputPassword = document.getElementById('password')
const inputConfirm  = document.getElementById('confirmPassword')
let timerUsuario = null
let interactuoConPassword = false

// Nombre de usuario: debounce de 400ms
inputUsuario.addEventListener('input', function() {
  clearTimeout(timerUsuario)
  timerUsuario = setTimeout(() => {
    const val = this.value.trim()
    if (val === '') {
      mostrarError('usuario', 'El nombre de usuario es obligatorio.')
    } else if (val.length < 3) {
      mostrarError('usuario', 'Mínimo 3 caracteres.')
    } else {
      limpiarError('usuario')
    }
  }, 400)
})

// Contraseña: validar al perder foco, actualizar al corregir
inputPassword.addEventListener('blur', () => {
  interactuoConPassword = true
  validarPassword()
})
inputPassword.addEventListener('input', () => {
  if (interactuoConPassword) validarPassword()
})

function validarPassword() {
  const val = inputPassword.value
  if (val.length < 8) {
    mostrarError('password', 'La contraseña debe tener al menos 8 caracteres.')
  } else {
    limpiarError('password')
  }
}

// Confirmar contraseña: siempre en tiempo real
inputConfirm.addEventListener('input', function() {
  if (this.value !== inputPassword.value) {
    mostrarError('confirmPassword', 'Las contraseñas no coinciden.')
  } else {
    limpiarError('confirmPassword')
  }
})

function mostrarError(campo, msg) {
  const el = document.getElementById('error-' + campo)
  if (el) el.textContent = msg
}
function limpiarError(campo) {
  const el = document.getElementById('error-' + campo)
  if (el) el.textContent = ''
}`,
    keyPoints: [
      'El evento input se dispara en cada tecla; change/blur solo cuando el usuario abandona el campo.',
      'Usa blur para la primera validación; luego input para actualizar mientras el usuario corrige.',
      'Un debounce con setTimeout/clearTimeout evita validar en cada letra para operaciones costosas.',
      'No muestres errores agresivos mientras el usuario escribe por primera vez en un campo.',
      'La confirmación de contraseña es uno de los pocos casos donde input en tiempo real siempre es buena idea.',
    ],
    exercise: {
      description: 'Crea un input de "nombre de usuario". Implementa validación que: no muestre error mientras el usuario escribe por primera vez (usa blur para el primer disparo), pero una vez que interactuó, valide en tiempo real (input) que tenga entre 3 y 20 caracteres y solo letras/números. Agrega también un debounce de 300ms sobre el evento input.',
      hint: 'Usa una bandera let yaInteractuó = false. Ponla en true en el evento blur. En el evento input, solo valida si yaInteractuó es true. Para el debounce, usa clearTimeout antes del setTimeout.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre el evento "input" y el evento "change" en un campo de texto?',
        options: [
          'No hay diferencia',
          'input se dispara en cada tecla; change se dispara cuando el campo pierde el foco y el valor cambió',
          'change se dispara en cada tecla; input cuando pierde el foco',
          'input solo funciona en textareas',
        ],
        correctAnswer: 'input se dispara en cada tecla; change se dispara cuando el campo pierde el foco y el valor cambió',
        correctFeedback: 'Correcto. input es inmediato (cada carácter), change espera a que el usuario termine de editar el campo.',
        incorrectFeedback: 'input se activa con cada cambio inmediato (cada tecla). change se activa al perder el foco si el valor cambió, no en cada letra.',
      },
      {
        question: '¿Para qué sirve el patrón debounce en la validación en tiempo real?',
        options: [
          'Para acelerar la validación',
          'Para esperar a que el usuario deje de escribir antes de ejecutar la validación',
          'Para deshabilitar el campo mientras se valida',
          'Para validar al mismo tiempo en cliente y servidor',
        ],
        correctAnswer: 'Para esperar a que el usuario deje de escribir antes de ejecutar la validación',
        correctFeedback: 'Correcto. El debounce cancela y reinicia el temporizador con cada tecla. Solo ejecuta cuando el usuario se detiene.',
        incorrectFeedback: 'Debounce retrasa la ejecución: con cada tecla cancela el temporizador anterior y lo reinicia. La función solo corre cuando el usuario deja de escribir por el tiempo definido.',
      },
      {
        question: '¿Por qué NO se recomienda mostrar errores en el evento input desde la primera interacción con el campo?',
        options: [
          'Porque input es más lento que change',
          'Porque interrumpe al usuario mientras escribe, antes de que haya terminado',
          'Porque los navegadores bloquean input en inputs requeridos',
          'No hay razón, siempre se debe usar input',
        ],
        correctAnswer: 'Porque interrumpe al usuario mientras escribe, antes de que haya terminado',
        correctFeedback: 'Correcto. Ver un error mientras escribes "juan@" es frustrante. Mejor esperar a que termine con el campo (blur) para la primera validación.',
        incorrectFeedback: 'Mostrar errores inmediatamente mientras el usuario aún escribe es agresivo. Puede recibir un error de formato cuando solo ha escrito la mitad del email.',
      },
      {
        question: '¿Cómo implementas un debounce simple en JavaScript?',
        options: [
          'Usando Promise.debounce()',
          'Con clearTimeout antes de setTimeout en cada evento',
          'Con requestAnimationFrame',
          'Con setInterval en lugar de setTimeout',
        ],
        correctAnswer: 'Con clearTimeout antes de setTimeout en cada evento',
        correctFeedback: 'Correcto. Cada vez que llega un evento, cancelas el temporizador anterior y creas uno nuevo. Solo el último se ejecuta.',
        incorrectFeedback: 'El debounce manual usa let timer; clearTimeout(timer); timer = setTimeout(fn, ms). Cada evento cancela el anterior y reinicia el reloj.',
      },
      {
        question: '¿En qué caso es buena idea usar el evento input en tiempo real desde el principio (sin esperar blur)?',
        options: [
          'Para validar el formato de email',
          'Para el campo de confirmación de contraseña',
          'Para validar si el username está disponible en el servidor',
          'Para todos los campos siempre',
        ],
        correctAnswer: 'Para el campo de confirmación de contraseña',
        correctFeedback: 'Correcto. La confirmación de contraseña se beneficia de retroalimentación inmediata: el usuario ve si coincide mientras escribe.',
        incorrectFeedback: 'La confirmación de contraseña es un buen caso para input desde el inicio: el usuario ya sabe lo que debe escribir y la retroalimentación inmediata es útil.',
      },
      {
        question: '¿Cuál es la estrategia "no agresiva" recomendada para validación en tiempo real?',
        options: [
          'Validar con input siempre desde el principio',
          'Solo validar al hacer submit',
          'Primera validación en blur; luego actualizar en tiempo real con input si ya hubo interacción',
          'Validar cada 10 segundos con setInterval',
        ],
        correctAnswer: 'Primera validación en blur; luego actualizar en tiempo real con input si ya hubo interacción',
        correctFeedback: 'Correcto. Esta estrategia no interrumpe al usuario mientras escribe por primera vez, pero sí le da retroalimentación inmediata al corregir.',
        incorrectFeedback: 'La estrategia correcta: esperar a blur para el primer error, luego usar input para actualizar mientras corrige. Así la validación ayuda sin molestar.',
      },
    ],
  },

  {
    slug: 'buenas-practicas-formularios',
    title: 'Buenas prácticas en formularios',
    module: 'Formularios y validaciones',
    moduleNumber: 14,
    order: 107,
    description: 'Aprende buenas prácticas para crear formularios claros, accesibles y fáciles de usar.',
    explanation: `Un formulario bien diseñado no solo funciona técnicamente, sino que guía al usuario con claridad, es accesible para todos y no genera frustración innecesaria.

**Labels siempre**

Cada campo debe tener un \`<label>\` asociado. El atributo \`for\` debe coincidir con el \`id\` del input:

\`\`\`html
<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre" />
\`\`\`

El label hace que al hacer clic en él el campo se enfoque. También es esencial para lectores de pantalla.

**El placeholder no reemplaza al label**

El \`placeholder\` desaparece cuando el usuario empieza a escribir. Si es el único indicador del campo, el usuario no sabe qué escribir si se equivoca y borra el texto. Úsalo como sugerencia de formato, no como etiqueta:

\`\`\`html
<!-- Mal -->
<input type="email" placeholder="Email" />

<!-- Bien -->
<label for="email">Email</label>
<input type="email" id="email" placeholder="ejemplo@correo.com" />
\`\`\`

**Mensajes de error descriptivos**

Dile al usuario exactamente qué está mal y cómo corregirlo:

\`\`\`
Mal:  "Error en el campo"
Bien: "El email debe tener el formato usuario@dominio.com"

Mal:  "Contraseña inválida"
Bien: "La contraseña debe tener al menos 8 caracteres e incluir un número"
\`\`\`

**Accesibilidad básica con aria**

\`\`\`html
<!-- aria-required indica campo obligatorio -->
<input type="text" id="nombre" aria-required="true" />

<!-- aria-describedby conecta el input con su mensaje de error -->
<input type="email" id="email" aria-describedby="error-email" />
<span id="error-email" role="alert"></span>
\`\`\`

\`role="alert"\` hace que el lector de pantalla anuncie el error inmediatamente cuando aparece.

**Validación que ayuda, no castiga**

- No bloquees el botón de envío si el formulario no está completo aún (el usuario puede no haber llegado).
- Muestra errores solo después de que el usuario interactuó con el campo.
- Indica claramente los campos obligatorios con un asterisco (*) y una leyenda.
- Nunca uses \`alert()\` para errores ni para confirmaciones en formularios.

**Nunca solo alert()**

\`alert()\` tiene múltiples problemas: bloquea la página, no puede ser estilizado, no señala el campo afectado, y en algunos navegadores empresariales está deshabilitado.`,
    codeExample: `// Formulario accesible con buenas prácticas

/* HTML de referencia:
<form id="formRegistro" novalidate>
  <div class="campo">
    <label for="nombre">
      Nombre completo <span aria-hidden="true">*</span>
    </label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      autocomplete="name"
      aria-required="true"
      aria-describedby="error-nombre"
      placeholder="Juan García"
    />
    <span id="error-nombre" class="error-msg" role="alert"></span>
  </div>

  <div class="campo">
    <label for="email">
      Email <span aria-hidden="true">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      aria-required="true"
      aria-describedby="error-email"
      placeholder="usuario@correo.com"
    />
    <span id="error-email" class="error-msg" role="alert"></span>
  </div>

  <p class="leyenda-obligatorio">
    Los campos marcados con * son obligatorios.
  </p>

  <button type="submit">Crear cuenta</button>
</form>
*/

// JS: validación con buenas prácticas
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault()
  limpiarTodosLosErrores()

  const nombre = document.getElementById('nombre').value.trim()
  const email  = document.getElementById('email').value.trim()
  let valido = true

  if (nombre === '') {
    setError('nombre', 'El nombre completo es obligatorio.')
    valido = false
  }

  if (email === '') {
    setError('email', 'El email es obligatorio.')
    valido = false
  } else if (!regexEmail.test(email)) {
    setError('email', 'Escribe un email válido, por ejemplo: usuario@correo.com')
    valido = false
  }

  if (valido) {
    console.log('Formulario válido:', { nombre, email })
  }
})

function setError(campo, msg) {
  const input = document.getElementById(campo)
  const error = document.getElementById('error-' + campo)
  if (input)  input.setAttribute('aria-invalid', 'true')
  if (error)  error.textContent = msg
}

function limpiarTodosLosErrores() {
  document.querySelectorAll('[aria-invalid]').forEach(el => {
    el.removeAttribute('aria-invalid')
  })
  document.querySelectorAll('.error-msg').forEach(el => {
    el.textContent = ''
  })
}`,
    keyPoints: [
      'Cada campo debe tener un <label> con el atributo for apuntando al id del input.',
      'El placeholder es una sugerencia de formato, nunca un reemplazo del label.',
      'Los mensajes de error deben decir exactamente qué está mal y cómo corregirlo.',
      'Usa aria-required, aria-describedby y role="alert" para mejorar la accesibilidad.',
      'Muestra los errores solo tras interacción del usuario, no desde el inicio.',
      'Nunca uses alert() para errores de formulario.',
    ],
    exercise: {
      description: 'Crea un formulario de registro con campos de nombre, email y contraseña. Aplica todas las buenas prácticas: label con for, placeholder como sugerencia, mensajes de error descriptivos con id (no alert), aria-required en los inputs, aria-describedby conectando input con span de error, y role="alert" en los spans de error. El JS debe validar vacío y formato de email.',
      hint: 'Asegúrate de que cada <label for="X"> coincida con el <input id="X"> correspondiente. Agrega aria-describedby="error-X" al input y conecta el id del span de error. Usa role="alert" en el span para que lectores de pantalla lo anuncien.',
    },
    quiz: [
      {
        question: '¿Por qué el placeholder no debe usarse como reemplazo del label?',
        options: [
          'Porque es una etiqueta HTML deprecated',
          'Porque desaparece cuando el usuario empieza a escribir, dejando al usuario sin referencia',
          'Porque no funciona en Firefox',
          'No hay razón, puede reemplazar al label perfectamente',
        ],
        correctAnswer: 'Porque desaparece cuando el usuario empieza a escribir, dejando al usuario sin referencia',
        correctFeedback: 'Correcto. Una vez que el usuario escribe, el placeholder desaparece. Si borra el texto para corregir, ya no sabe qué se espera en ese campo.',
        incorrectFeedback: 'El placeholder desaparece al escribir. Si el usuario borra el texto para corregir, pierde la referencia de qué campo es. El label siempre está visible.',
      },
      {
        question: '¿Para qué sirve el atributo for en un label?',
        options: [
          'Para indicar que el label es obligatorio',
          'Para aplicar estilos CSS',
          'Para asociar el label con el input cuyo id coincide, permitiendo clic en el label',
          'Para establecer el orden de tabulación',
        ],
        correctAnswer: 'Para asociar el label con el input cuyo id coincide, permitiendo clic en el label',
        correctFeedback: 'Correcto. Con for="nombreId", al hacer clic en el label el foco va al input correspondiente. También es esencial para lectores de pantalla.',
        incorrectFeedback: 'for="X" en el label vincula el label al input con id="X". Esto permite hacer clic en el label para enfocar el input, y es crucial para accesibilidad.',
      },
      {
        question: '¿Cuál de estos mensajes de error es más útil?',
        options: [
          '"Error"',
          '"Campo inválido"',
          '"La contraseña debe tener mínimo 8 caracteres e incluir al menos un número"',
          '"Por favor corrige este campo"',
        ],
        correctAnswer: '"La contraseña debe tener mínimo 8 caracteres e incluir al menos un número"',
        correctFeedback: 'Correcto. Este mensaje dice exactamente qué está mal y qué debe hacer el usuario para corregirlo.',
        incorrectFeedback: 'Los mensajes vagos como "Error" o "Campo inválido" no dicen al usuario qué hacer. El mensaje debe explicar el requisito específico que no se cumple.',
      },
      {
        question: '¿Qué hace el atributo aria-describedby en un input?',
        options: [
          'Añade una descripción visual debajo del campo',
          'Conecta el input con el elemento que lo describe (como el span de error), para lectores de pantalla',
          'Valida automáticamente el campo',
          'Cambia el tipo del input',
        ],
        correctAnswer: 'Conecta el input con el elemento que lo describe (como el span de error), para lectores de pantalla',
        correctFeedback: 'Correcto. aria-describedby="error-email" hace que el lector de pantalla lea el contenido del span de error cuando el usuario está en ese input.',
        incorrectFeedback: 'aria-describedby="id" conecta semánticamente el input con el elemento cuyo id se indica. Los lectores de pantalla leen ese elemento al enfocar el input.',
      },
      {
        question: '¿Cuál es el problema principal de usar alert() para mostrar errores de formulario?',
        options: [
          'alert() es más lento que el DOM',
          'alert() bloquea toda la página, no indica qué campo tiene el error y tiene muy mala UX',
          'alert() no funciona en HTTPS',
          'alert() solo muestra un error a la vez',
        ],
        correctAnswer: 'alert() bloquea toda la página, no indica qué campo tiene el error y tiene muy mala UX',
        correctFeedback: 'Correcto. alert() detiene toda interacción, el usuario debe cerrarlo antes de poder corregir, y no señala visualmente qué campo tiene el problema.',
        incorrectFeedback: 'alert() tiene múltiples problemas de UX: bloquea la página, no indica el campo afectado, no puede ser estilizado y en algunos entornos empresariales está deshabilitado.',
      },
      {
        question: '¿Cuándo se debe mostrar el primer mensaje de error de un campo?',
        options: [
          'Inmediatamente al cargar la página',
          'Mientras el usuario escribe cada carácter desde el principio',
          'Después de que el usuario interactuó con el campo (blur o submit)',
          'Solo cuando el usuario hace clic en el botón de enviar tres veces',
        ],
        correctAnswer: 'Después de que el usuario interactuó con el campo (blur o submit)',
        correctFeedback: 'Correcto. Mostrar errores antes de que el usuario termine de escribir o abandone el campo es agresivo y genera frustración.',
        incorrectFeedback: 'Mostrar errores antes de que el usuario haya terminado con el campo es agresivo. Espera a que pierda el foco (blur) o intente enviar el formulario.',
      },
      {
        question: '¿Para qué se usa role="alert" en el span de mensaje de error?',
        options: [
          'Para aplicar estilos de alerta con CSS',
          'Para que el contenido sea anunciado inmediatamente por lectores de pantalla cuando aparece',
          'Para que el navegador valide automáticamente el campo',
          'Para conectar el span con el formulario',
        ],
        correctAnswer: 'Para que el contenido sea anunciado inmediatamente por lectores de pantalla cuando aparece',
        correctFeedback: 'Correcto. role="alert" crea una región "live" que los lectores de pantalla anuncian de inmediato cuando su contenido cambia, sin que el usuario navegue hasta ahí.',
        incorrectFeedback: 'role="alert" es una región ARIA de anuncio inmediato. Cuando el textContent del span cambia, el lector de pantalla lo anuncia automáticamente al usuario.',
      },
    ],
  },
]

export const jsModule14: Module = {
  number: 14,
  title: 'Formularios y validaciones',
  level: 'nivel3',
  lessons: lessonsJsModule14,
}
