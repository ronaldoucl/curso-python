import type { Lesson, Module } from '@/types'

export const lessonsJsModule28: Lesson[] = [
  {
    slug: 'leer-errores-consola-js',
    title: 'Leer errores en consola',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 215,
    description: 'Aprende a leer errores de JavaScript en la consola del navegador y encontrar dónde ocurrió el problema.',
    explanation: `La **consola del navegador** es tu primera herramienta para encontrar y entender errores. Saber leer sus mensajes te ahorra horas de frustración.

**¿Cómo abrir la consola?**
- Chrome/Edge: F12 → pestaña Console
- Firefox: F12 → pestaña Console
- Mac: Cmd + Option + J

**Tipos de errores más comunes:**

**1. ReferenceError:** Usas una variable que no existe
\`\`\`
ReferenceError: usuario is not defined
\`\`\`

**2. TypeError:** Intentas hacer algo con el tipo incorrecto
\`\`\`
TypeError: Cannot read properties of null (reading 'textContent')
\`\`\`

**3. SyntaxError:** Error de escritura en el código
\`\`\`
SyntaxError: Unexpected token '}'
\`\`\`

**Anatomía de un mensaje de error:**
\`\`\`
TypeError: Cannot read properties of null (reading 'textContent')
    at renderizar (app.js:24:15)
    at main.js:8:1
\`\`\`
- \`TypeError\`: tipo de error
- \`Cannot read...\`: descripción del problema
- \`app.js:24:15\`: archivo, línea 24, columna 15
- El stack trace muestra el camino hasta el error

**El link en la consola es clickeable:** Haz clic en \`app.js:24\` y el navegador te lleva exactamente al problema.`,
    codeExample: `// Error común 1: TypeError por elemento null
// Mensaje: TypeError: Cannot read properties of null (reading 'textContent')
const titulo = document.querySelector('#titulo-no-existe')
titulo.textContent = 'Hola' // ← Error: titulo es null

// Solución: verificar antes de usar
const titulo2 = document.querySelector('#titulo')
if (titulo2) {
  titulo2.textContent = 'Hola'
} else {
  console.warn('Elemento #titulo no encontrado en el DOM')
}

// Error común 2: ReferenceError por variable no declarada
function mostrar() {
  console.log(mensaje) // ← ReferenceError: mensaje is not defined
}
// Solución: declarar la variable
const mensaje = 'Hola'
function mostrar2() {
  console.log(mensaje) // ✓ funciona
}

// Cómo leer el stack trace:
// TypeError: Cannot set properties of null
//   at actualizarUI (ui.js:15:10)  ← segunda función llamada
//   at manejarClick (main.js:8:3) ← primera función llamada
//   at HTMLButtonElement.onclick   ← origen: click de botón
// → El error ocurrió en ui.js, línea 15`,
    keyPoints: [
      'F12 abre las DevTools del navegador con la consola',
      'ReferenceError: variable no declarada o fuera de alcance',
      'TypeError: operación inválida para el tipo de dato (como null.textContent)',
      'SyntaxError: error de escritura en el código',
      'El stack trace muestra el archivo y línea exacta del error',
      'Los links en la consola son clickeables y llevan al código con el problema',
    ],
    exercise: {
      description: 'Abre la consola del navegador con F12 y ejecuta estos tres fragmentos de código en la pestaña Console para provocar cada tipo de error: 1) noExiste.textContent, 2) let x = {, 3) console.log(variableNoDeclarada). Lee el mensaje de cada error e identifica el tipo.',
      hint: 'Puedes escribir código directamente en la consola del navegador como si fuera una terminal. Presiona Enter para ejecutar y ver el error.',
    },
    quiz: [
      {
        question: '¿Qué tipo de error produce este código? const el = document.querySelector("#no-existe"); el.textContent = "hola"',
        options: [
          'SyntaxError',
          'TypeError',
          'ReferenceError',
          'NetworkError',
        ],
        correctAnswer: 'TypeError',
        correctFeedback: 'Correcto. querySelector devuelve null si el elemento no existe. Intentar acceder a .textContent de null produce un TypeError porque null no tiene propiedades.',
        incorrectFeedback: 'document.querySelector devuelve null si no encuentra el elemento. Luego null.textContent lanza un TypeError: Cannot read properties of null. Es un error de tipo, no de sintaxis.',
      },
      {
        question: '¿Qué significa la parte "app.js:24:15" en un mensaje de error de la consola?',
        options: [
          'El error ocurrió en la versión 24.15 de la app',
          'El error está en app.js, línea 24, columna 15',
          'app.js tiene 24 funciones y 15 variables',
          'El error ocurrió a las 24:15 horas',
        ],
        correctAnswer: 'El error está en app.js, línea 24, columna 15',
        correctFeedback: 'Correcto. El formato archivo:línea:columna indica exactamente dónde ocurrió el error. Haz clic en ese link y el navegador te lleva al código exacto.',
        incorrectFeedback: 'La notación archivo:línea:columna es estándar. app.js:24:15 significa que el error está en el archivo app.js, en la línea 24, en la columna 15. Es un link clickeable.',
      },
      {
        question: '¿Qué tipo de error produce este código? let x = {',
        options: [
          'TypeError',
          'ReferenceError',
          'SyntaxError',
          'RangeError',
        ],
        correctAnswer: 'SyntaxError',
        correctFeedback: 'Correcto. Una llave { sin cerrar produce un SyntaxError porque la sintaxis del código es inválida. JavaScript no puede siquiera parsear el código.',
        incorrectFeedback: 'Una llave abierta sin cerrar es un error de escritura: SyntaxError. JavaScript no puede ni intentar ejecutar el código porque la sintaxis es inválida.',
      },
      {
        question: '¿Cómo abres la consola del navegador en Chrome?',
        options: [
          'Menú → Consola',
          'F12 y luego la pestaña Console',
          'Ctrl + N',
          'Alt + C',
        ],
        correctAnswer: 'F12 y luego la pestaña Console',
        correctFeedback: 'Correcto. F12 abre las DevTools y desde allí vas a la pestaña Console. También puedes usar Ctrl+Shift+J en Chrome para ir directamente a la consola.',
        incorrectFeedback: 'F12 abre las DevTools (herramientas de desarrollo) del navegador. Desde allí seleccionas la pestaña Console. En Mac usa Cmd+Option+J para ir directamente.',
      },
      {
        question: '¿Cuál es la primera acción cuando ves un error en la consola?',
        options: [
          'Cerrar la consola y refrescar la página',
          'Leer el mensaje de error y hacer clic en el link del archivo para ver el código exacto',
          'Reinstalar el navegador',
          'Borrar los cookies del navegador',
        ],
        correctAnswer: 'Leer el mensaje de error y hacer clic en el link del archivo para ver el código exacto',
        correctFeedback: 'Correcto. El mensaje de error describe el problema y el link te lleva al código exacto. Leer el error antes de intentar soluciones aleatorias ahorra mucho tiempo.',
        incorrectFeedback: 'Refrescar o reinstalar no soluciona errores de código. Lo correcto es leer el mensaje de error (dice qué salió mal) y hacer clic en el link del archivo para ver exactamente qué línea causó el problema.',
      },
    ],
  },
  {
    slug: 'console-log-inteligente',
    title: 'Usar console.log inteligentemente',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 216,
    description: 'Aprende a usar console.log como herramienta de depuración sin llenar tu código de mensajes innecesarios.',
    explanation: `**console.log** es la herramienta de debugging más usada en JavaScript. Pero usarla mal puede hacer tu código difícil de leer.

**Métodos útiles de la consola:**

| Método | Uso |
|--------|-----|
| \`console.log()\` | Información general |
| \`console.warn()\` | Advertencias (fondo amarillo) |
| \`console.error()\` | Errores (fondo rojo) |
| \`console.table()\` | Arrays y objetos en tabla |
| \`console.group()\` | Agrupa mensajes relacionados |
| \`console.time()\` | Mide tiempo de ejecución |

**Tips para usar console.log efectivamente:**

**1. Agrega etiquetas a tus logs:**
\`\`\`javascript
console.log('tareas:', tareas)       // ✅
console.log(tareas)                   // ❌ ¿qué es esto?
\`\`\`

**2. Usa desestructuración para múltiples valores:**
\`\`\`javascript
console.log({ usuario, tareas, estado })
\`\`\`

**3. Usa console.table para arrays de objetos:**
\`\`\`javascript
console.table(tareas)
\`\`\`

**¿Cuándo borrar los console.log?**
Antes de hacer commit o publicar el código. Los console.log de debugging exponen información interna y hacen el código menos limpio.

**Alternativa: usa el debugger en lugar de console.log para debugging complejo** (próxima lección).`,
    codeExample: `// ❌ Console.log sin etiquetas (confuso)
console.log(datos)
console.log(resultado)
console.log(x)

// ✅ Console.log con etiquetas claras
console.log('datos del usuario:', datos)
console.log('resultado del cálculo:', resultado)
console.log('estado actual:', { usuario, tareas, cargando })

// ✅ console.table para arrays de objetos
const tareas = [
  { id: 1, texto: 'Comprar leche', completada: true },
  { id: 2, texto: 'Estudiar JS', completada: false },
]
console.table(tareas)
// Muestra una tabla clara en la consola

// ✅ console.warn y console.error
function validarEdad(edad) {
  if (edad < 0) {
    console.error('Edad inválida:', edad)
    return false
  }
  if (edad > 120) {
    console.warn('Edad inusualmente alta:', edad)
  }
  return true
}

// ✅ console.time para medir rendimiento
console.time('filtrar tareas')
const completadas = tareas.filter(t => t.completada)
console.timeEnd('filtrar tareas')
// filtrar tareas: 0.12ms

// ✅ Debugging temporal → eliminar antes de commit
// TODO: borrar este log
console.log('DEBUG - respuesta API:', respuesta)`,
    keyPoints: [
      'Siempre etiqueta tus console.log para saber qué estás viendo',
      'console.table() es excelente para ver arrays de objetos',
      'console.warn() para advertencias, console.error() para errores',
      'console.time() y console.timeEnd() miden el rendimiento',
      'Elimina los console.log de debugging antes de hacer commit',
      'Para debugging complejo, los breakpoints son más poderosos',
    ],
    exercise: {
      description: 'En tu proyecto, reemplaza todos los console.log(valor) sin etiqueta por console.log("nombre descriptivo:", valor). Agrega un console.table() para mostrar un array de objetos. Practica usando console.warn() para una condición inusual.',
      hint: 'Busca en tu código todos los console.log y verifica que cada uno tiene una etiqueta descriptiva. Un console.log sin etiqueta hace difícil saber qué dato estás viendo.',
    },
    quiz: [
      {
        question: '¿Cuál de estos console.log es más útil para debugging?',
        options: [
          'console.log(usuario)',
          'console.log("usuario:", usuario)',
          'console.log("---")',
          'console.log()',
        ],
        correctAnswer: 'console.log("usuario:", usuario)',
        correctFeedback: 'Correcto. Agregar una etiqueta descriptiva hace inmediatamente claro qué dato estás viendo, especialmente cuando tienes múltiples logs en la consola.',
        incorrectFeedback: 'console.log(usuario) sin etiqueta muestra el valor pero no sabes a qué corresponde si hay varios logs. Siempre agrega una etiqueta: console.log("usuario:", usuario).',
      },
      {
        question: '¿Cuándo deberías usar console.warn() en lugar de console.log()?',
        options: [
          'Cuando quieres que el texto sea más grande',
          'Cuando algo funciona pero en condiciones inusuales o potencialmente problemáticas',
          'Cuando necesitas múltiples líneas',
          'Cuando el valor es un número',
        ],
        correctAnswer: 'Cuando algo funciona pero en condiciones inusuales o potencialmente problemáticas',
        correctFeedback: 'Correcto. console.warn() es para advertencias: el código funciona, pero algo merece atención. Se muestra en amarillo, diferenciándose de los logs normales.',
        incorrectFeedback: 'console.warn() no cambia el tamaño del texto. Se usa para advertencias: situaciones que funcionan pero son inusuales o potencialmente problemáticas (como una edad de 150 años).',
      },
      {
        question: '¿Para qué es especialmente útil console.table()?',
        options: [
          'Para crear tablas HTML automáticamente',
          'Para mostrar arrays de objetos de forma organizada en la consola',
          'Para hacer operaciones matemáticas',
          'Para conectarse a una base de datos',
        ],
        correctAnswer: 'Para mostrar arrays de objetos de forma organizada en la consola',
        correctFeedback: 'Correcto. console.table() muestra arrays de objetos como una tabla con columnas, haciendo mucho más fácil comparar los datos de cada elemento.',
        incorrectFeedback: 'console.table() no crea HTML ni hace operaciones matemáticas. Su función es mostrar arrays de objetos en formato de tabla en la consola del navegador, facilitando la lectura.',
      },
      {
        question: '¿Qué debes hacer con los console.log de debugging antes de publicar tu código?',
        options: [
          'Dejarlos para que otros puedan debuguear',
          'Eliminarlos o comentarlos',
          'Convertirlos en console.error',
          'Moverlos a un archivo aparte',
        ],
        correctAnswer: 'Eliminarlos o comentarlos',
        correctFeedback: 'Correcto. Los console.log de debugging en producción exponen información interna de tu aplicación y hacen el código menos limpio. Elimínalos antes de publicar.',
        incorrectFeedback: 'Los console.log de debugging deben eliminarse antes de publicar. Exponen información interna (estado, datos de usuarios, respuestas de API) en la consola del navegador de cualquier visitante.',
      },
      {
        question: '¿Cuál es la forma más eficiente de mostrar varios valores relacionados en console.log?',
        options: [
          'Múltiples console.log separados',
          'console.log({ valor1, valor2, valor3 }) usando un objeto',
          'console.log(valor1 + valor2 + valor3)',
          'Solo puedes mostrar un valor por console.log',
        ],
        correctAnswer: 'console.log({ valor1, valor2, valor3 }) usando un objeto',
        correctFeedback: 'Correcto. Usar un objeto literal en console.log muestra los valores con sus nombres automáticamente: { valor1: 42, valor2: "hola", valor3: true }. Muy legible.',
        incorrectFeedback: 'La forma más limpia de mostrar múltiples valores relacionados es console.log({ valor1, valor2, valor3 }). JavaScript usa los nombres de las variables como claves, mostrando todo en un objeto legible.',
      },
    ],
  },
  {
    slug: 'breakpoints-basicos',
    title: 'Breakpoints básicos',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 217,
    description: 'Aprende a pausar la ejecución del código usando breakpoints en las DevTools del navegador.',
    explanation: `Un **breakpoint** es una marca que le dices al navegador: "pausa aquí cuando llegues a esta línea". Es como poner una señal de STOP en el código.

**¿Por qué usar breakpoints en vez de console.log?**
- Puedes ver el estado de TODAS las variables en ese momento
- No necesitas saber qué variable verificar de antemano
- Puedes ejecutar el código línea por línea
- No ensucias el código con logs temporales

**Cómo poner un breakpoint:**
1. Abre DevTools (F12)
2. Ve a la pestaña "Sources"
3. Abre tu archivo JavaScript
4. Haz clic en el número de línea donde quieres pausar

**O con la palabra clave \`debugger\` en el código:**
\`\`\`javascript
function calcular(a, b) {
  debugger // ← pausa aquí cuando corra en DevTools abiertas
  return a + b
}
\`\`\`

**Controles durante la pausa:**

| Botón | Acción |
|-------|--------|
| ▶ Resume (F8) | Continúa hasta el siguiente breakpoint |
| ↷ Step over (F10) | Ejecuta la línea actual y pasa a la siguiente |
| ↓ Step into (F11) | Entra a la función de la línea actual |
| ↑ Step out (Shift+F11) | Sale de la función actual |

**Panel de variables:**
Mientras está pausado, el panel "Scope" muestra todas las variables locales y globales con sus valores actuales.`,
    codeExample: `// Usando debugger para pausar el código:
function procesarTareas(tareas) {
  debugger // ← el navegador pausa aquí (solo si DevTools está abierto)

  const activas = tareas.filter(t => !t.completada)
  const completadas = tareas.filter(t => t.completada)

  return { activas, completadas }
}

// Cómo usarlo:
// 1. Abre las DevTools (F12)
// 2. Llama a la función (ej. desde un botón o en la consola)
// 3. El código pausa en la línea debugger
// 4. En el panel Scope ves: tareas = [...]
// 5. Presiona F10 para ir a la siguiente línea
// 6. Ves: activas = [...] (ya filtradas)
// 7. Sigue con F10 o F8 para continuar

// Alternativa: breakpoint visual en Sources
// 1. DevTools → Sources → tu archivo
// 2. Clic en el número de línea → aparece un punto azul
// 3. Ejecuta el código y pausa automáticamente allí

// ⚠️ Recuerda: elimina debugger antes de publicar
// Un debugger en producción pausa el código de los usuarios`,
    keyPoints: [
      'Un breakpoint pausa la ejecución del código en una línea específica',
      'Se pueden poner en el panel Sources haciendo clic en el número de línea',
      'La palabra debugger en el código funciona igual que un breakpoint visual',
      'F10 avanza línea por línea (step over)',
      'El panel Scope muestra todas las variables y sus valores mientras está pausado',
      'Elimina los debugger del código antes de publicar',
    ],
    exercise: {
      description: 'En tu proyecto, agrega debugger al inicio de una función que uses en un botón. Abre las DevTools, haz clic en el botón y verifica que el código pausa. Examina el panel Scope para ver las variables. Usa F10 para avanzar línea por línea.',
      hint: 'Las DevTools deben estar abiertas ANTES de hacer clic en el botón. Si cierras las DevTools después de agregar debugger, el código no pausa.',
    },
    quiz: [
      {
        question: '¿Qué hace un breakpoint en el código?',
        options: [
          'Detiene el servidor de desarrollo permanentemente',
          'Pausa la ejecución del código en esa línea para inspeccionar el estado',
          'Crea un error intencional en el código',
          'Mide el tiempo que tarda en ejecutarse esa línea',
        ],
        correctAnswer: 'Pausa la ejecución del código en esa línea para inspeccionar el estado',
        correctFeedback: 'Correcto. Un breakpoint pausa el código en ese punto, permitiéndote ver el valor de todas las variables en ese momento exacto.',
        incorrectFeedback: 'Un breakpoint no detiene el servidor ni crea errores. Pausa la ejecución temporalmente en esa línea para que puedas inspeccionar el estado de la aplicación.',
      },
      {
        question: '¿Qué muestra el panel "Scope" de las DevTools mientras el código está pausado?',
        options: [
          'El historial de navegación del usuario',
          'Todas las variables locales y globales con sus valores actuales',
          'La lista de archivos del proyecto',
          'Los errores de red del servidor',
        ],
        correctAnswer: 'Todas las variables locales y globales con sus valores actuales',
        correctFeedback: 'Correcto. El panel Scope muestra el estado completo de las variables en el momento de la pausa: variables locales de la función, variables de ámbito superior y globales.',
        incorrectFeedback: 'El panel Scope muestra todas las variables accesibles en ese punto: locales de la función actual, del ámbito exterior y globales. Es la ventaja principal sobre console.log.',
      },
      {
        question: '¿Qué hace la tecla F10 mientras el código está pausado en un breakpoint?',
        options: [
          'Reinicia el servidor de desarrollo',
          'Avanza a la siguiente línea sin entrar en funciones (step over)',
          'Sale de todas las funciones inmediatamente',
          'Abre la pestaña Network',
        ],
        correctAnswer: 'Avanza a la siguiente línea sin entrar en funciones (step over)',
        correctFeedback: 'Correcto. F10 (Step over) ejecuta la línea actual y pasa a la siguiente. Si en esa línea se llama a una función, la ejecuta completa sin entrar paso a paso en ella.',
        incorrectFeedback: 'F10 es Step Over: avanza a la siguiente línea. Si la línea llama a una función, la ejecuta completa sin entrar en ella. F11 (Step into) sí entra en la función.',
      },
      {
        question: '¿Qué debes hacer con los debugger antes de publicar el proyecto?',
        options: [
          'Convertirlos en console.log',
          'Eliminarlos del código',
          'Moverlos al final del archivo',
          'Nada, no afectan el código en producción',
        ],
        correctAnswer: 'Eliminarlos del código',
        correctFeedback: 'Correcto. Un debugger en producción pausa el código para todos los usuarios que tengan las DevTools abiertas. Elimínalos siempre antes de publicar.',
        incorrectFeedback: 'Un debugger en producción pausa la ejecución del código en el navegador de los usuarios. Debes eliminarlos del código antes de publicar o el comportamiento será inesperado.',
      },
      {
        question: '¿Cuál es la ventaja principal de los breakpoints sobre console.log para debugging?',
        options: [
          'Los breakpoints son más fáciles de escribir',
          'Puedes ver el valor de TODAS las variables sin saber de antemano cuáles verificar',
          'Los breakpoints no requieren abrir DevTools',
          'Los breakpoints funcionan también en el servidor',
        ],
        correctAnswer: 'Puedes ver el valor de TODAS las variables sin saber de antemano cuáles verificar',
        correctFeedback: 'Correcto. Con console.log necesitas saber qué variable quieres ver. Con breakpoints ves el estado completo de todas las variables en ese momento exacto.',
        incorrectFeedback: 'La ventaja clave es el acceso completo al estado. Con console.log decides qué mostrar antes de ejecutar. Con breakpoints puedes explorar todas las variables del momento sin planificarlo.',
      },
    ],
  },
  {
    slug: 'inspeccionar-variables-debugger',
    title: 'Inspeccionar variables paso a paso',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 218,
    description: 'Aprende a observar cómo cambian las variables mientras el programa se ejecuta.',
    explanation: `Inspeccionar variables paso a paso es una habilidad fundamental del debugging profesional. Permite ver exactamente cómo fluyen los datos por tu código.

**Técnicas principales:**

**1. Watch expressions:**
En el panel Sources → Watch, puedes agregar expresiones que se actualizan en tiempo real mientras pausas:
- \`tareas.length\`
- \`usuario?.nombre\`
- \`typeof resultado\`

**2. Evaluar en la consola mientras está pausado:**
Cuando el código está pausado en un breakpoint, puedes escribir en la consola y accede a todas las variables del scope actual:
\`\`\`
> tareas.filter(t => !t.completada)
> usuario.nombre.toUpperCase()
\`\`\`

**3. Conditional breakpoints:**
Breakpoints que solo pausan cuando se cumple una condición:
- Clic derecho en el número de línea → "Add conditional breakpoint"
- Condición: \`tareas.length > 5\`

Útil cuando un error solo ocurre en casos específicos.

**4. Logpoints:**
Breakpoints que escriben en la consola sin pausar el código:
- Clic derecho → "Add logpoint"
- Expresión: \`"Tareas cargadas:", tareas.length\`

Como console.log pero sin modificar el código.

**Flujo de debugging efectivo:**
1. Reproduce el error
2. Pon un breakpoint cerca del problema
3. Ejecuta paso a paso
4. Observa dónde el valor no es el esperado
5. Esa línea o la anterior es donde está el bug`,
    codeExample: `// Ejemplo: función con un bug sutil
function calcularDescuento(precio, porcentaje) {
  const descuento = precio * porcentaje  // Bug: falta dividir entre 100
  const precioFinal = precio - descuento
  return precioFinal
}

// calcularDescuento(100, 10) devuelve -900 (¡incorrecto!)
// Debería devolver 90

// Proceso de debugging:
// 1. Pon debugger en la primera línea de la función
function calcularDescuentoFixed(precio, porcentaje) {
  debugger
  const descuento = precio * porcentaje  // ← pausar aquí
  // → En scope: precio=100, porcentaje=10
  // → Calculamos: descuento = 100 * 10 = 1000 (¡mal!)
  // → El bug está aquí: falta / 100

  const descuentoCorrecto = precio * (porcentaje / 100)
  // → descuentoCorrecto = 100 * (10/100) = 100 * 0.1 = 10 ✓

  const precioFinal = precio - descuentoCorrecto
  return precioFinal
}

// En la consola mientras está pausado, puedes evaluar:
// > precio * (porcentaje / 100)  → 10  ✓
// > precio - (precio * (porcentaje / 100))  → 90  ✓`,
    keyPoints: [
      'Watch expressions permiten monitorear valores específicos en tiempo real',
      'La consola accede a las variables del scope actual mientras el código está pausado',
      'Conditional breakpoints solo pausan cuando se cumple una condición específica',
      'Logpoints escriben en consola sin pausar ni modificar el código',
      'Ejecutar paso a paso revela exactamente en qué línea un valor se vuelve incorrecto',
      'Si un valor es incorrecto, el bug está en esa línea o en las anteriores',
    ],
    exercise: {
      description: 'Crea una función con un bug intencional (por ejemplo, una suma que multiplica). Usa breakpoints y el panel Scope para ejecutar paso a paso e identificar exactamente en qué línea el valor se vuelve incorrecto. Corrígelo.',
      hint: 'Mientras el código está pausado, intenta evaluar variantes de la expresión en la consola para encontrar la versión correcta antes de modificar el código.',
    },
    quiz: [
      {
        question: '¿Qué son las Watch expressions en las DevTools?',
        options: [
          'Expresiones que se ejecutan automáticamente cuando hay un error',
          'Valores o expresiones que puedes monitorear en tiempo real durante el debugging',
          'Registros de todos los console.log del proyecto',
          'Reglas de validación para los formularios',
        ],
        correctAnswer: 'Valores o expresiones que puedes monitorear en tiempo real durante el debugging',
        correctFeedback: 'Correcto. Las Watch expressions te permiten agregar expresiones (como tareas.length o usuario?.nombre) que se actualizan automáticamente con cada paso del debugger.',
        incorrectFeedback: 'Las Watch expressions son expresiones que agregas manualmente en el panel Watch y se actualizan automáticamente mientras avanzas paso a paso con el debugger.',
      },
      {
        question: '¿Para qué sirven los Conditional breakpoints?',
        options: [
          'Para pausar solo cuando el código tiene un error de sintaxis',
          'Para pausar solo cuando se cumple una condición específica que defines',
          'Para pausar solo en el primer bucle de ejecución',
          'Para pausar en todos los archivos del proyecto simultáneamente',
        ],
        correctAnswer: 'Para pausar solo cuando se cumple una condición específica que defines',
        correctFeedback: 'Correcto. Un conditional breakpoint pausa solo cuando la condición es verdadera: útil cuando un error ocurre solo con ciertos valores, como cuando tareas.length > 100.',
        incorrectFeedback: 'Un conditional breakpoint evalúa una expresión en cada ejecución de esa línea y solo pausa cuando es verdadera. Ideal para bugs que solo ocurren con valores específicos.',
      },
      {
        question: '¿Qué es un Logpoint en las DevTools?',
        options: [
          'Un archivo de registro de errores',
          'Un breakpoint que escribe en la consola sin pausar el código',
          'Un tipo especial de variable de debugging',
          'Un plugin para grabar sesiones de debugging',
        ],
        correctAnswer: 'Un breakpoint que escribe en la consola sin pausar el código',
        correctFeedback: 'Correcto. Los logpoints son como console.log pero sin modificar el código. Escriben un mensaje en la consola cada vez que pasan por esa línea, sin detener la ejecución.',
        incorrectFeedback: 'Un logpoint funciona como console.log pero sin editar el código. Puedes definirlo en DevTools y escribe en la consola sin pausar. Desaparece cuando cierras DevTools.',
      },
      {
        question: '¿Qué puedes hacer en la consola de DevTools mientras el código está pausado en un breakpoint?',
        options: [
          'Solo ver los errores, no ejecutar código',
          'Evaluar expresiones usando las variables del scope actual',
          'Editar los archivos HTML del proyecto',
          'Reiniciar el servidor de desarrollo',
        ],
        correctAnswer: 'Evaluar expresiones usando las variables del scope actual',
        correctFeedback: 'Correcto. Con el código pausado, la consola tiene acceso al scope actual. Puedes evaluar expresiones como tareas.filter(t => !t.completada) o calcular variantes para encontrar el bug.',
        incorrectFeedback: 'La consola durante un breakpoint es poderosa: accede a todas las variables del scope actual. Puedes evaluar expresiones, probar correcciones hipotéticas y explorar los datos sin modificar el código.',
      },
    ],
  },
  {
    slug: 'nombrar-variables-funciones',
    title: 'Nombrar variables y funciones correctamente',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 219,
    description: 'Aprende a elegir nombres claros para que tu código sea más fácil de leer y mantener.',
    explanation: `Los **nombres** de variables y funciones son la documentación más importante de tu código. Un buen nombre hace el código autoexplicativo.

**Reglas generales:**
- Usa nombres que describan **qué es** o **qué hace**, no cómo está implementado
- Evita abreviaciones crípticas: \`usr\` → \`usuario\`, \`cnt\` → \`contador\`
- Los nombres en inglés o español son válidos; elige uno y sé consistente
- Usa camelCase para variables y funciones: \`nombreCompleto\`, \`obtenerTareas\`

**Variables:**
\`\`\`javascript
// ❌ Mal
let x = []
let d = new Date()
let u = await fetch('/api/user')

// ✅ Bien
let tareas = []
let fechaCreacion = new Date()
let respuestaUsuario = await fetch('/api/user')
\`\`\`

**Booleanos:** empieza con is, has, can, should
\`\`\`javascript
let isLoading = true
let hasError = false
let canEdit = user.rol === 'admin'
\`\`\`

**Funciones:** empieza con un verbo
\`\`\`javascript
// ❌ Mal
function datos() {}
function tarea() {}

// ✅ Bien
function obtenerDatos() {}
function agregarTarea() {}
function validarFormulario() {}
\`\`\`

**Constantes globales:** SCREAMING_SNAKE_CASE
\`\`\`javascript
const MAX_TAREAS = 100
const API_URL = 'https://api.ejemplo.com'
\`\`\``,
    codeExample: `// ❌ Código con nombres malos:
function p(arr, v) {
  const r = arr.filter(x => x.v === v)
  const t = r.length
  return { r, t }
}

const d = p(items, true)
el.innerHTML = d.t

// ✅ El mismo código con nombres claros:
function filtrarPorEstado(tareas, completada) {
  const tareasFiltradas = tareas.filter(t => t.completada === completada)
  const totalFiltradas = tareasFiltradas.length
  return { tareasFiltradas, totalFiltradas }
}

const { tareasFiltradas, totalFiltradas } = filtrarPorEstado(tareas, true)
contadorElement.textContent = totalFiltradas

// Nombres de booleanos descriptivos:
const isLoading = true
const hasUnreadMessages = mensajes.some(m => !m.leido)
const canDeleteTask = usuario.rol === 'admin'
const isEmpty = tareas.length === 0

// Constantes globales:
const MAX_CARACTERES = 200
const DEBOUNCE_DELAY = 300
const CLAVE_LOCAL = 'app:tareas'`,
    keyPoints: [
      'Los nombres deben describir qué es o qué hace la variable/función',
      'Usa camelCase para variables y funciones: nombreCompleto, obtenerTareas',
      'Los booleanos deben empezar con is, has, can, should',
      'Las funciones deben empezar con un verbo que describe la acción',
      'Las constantes globales se escriben en SCREAMING_SNAKE_CASE',
      'Evita abreviaciones crípticas que nadie más (ni tú en 3 meses) entendería',
    ],
    exercise: {
      description: 'Revisa tu código y encuentra 5 variables o funciones con nombres malos (x, d, p, data, temp, etc.). Renómbralas con nombres descriptivos. Verifica que el código sigue funcionando después de cada cambio.',
      hint: 'Usa la búsqueda del editor (Ctrl+H) para renombrar una variable en todos los archivos a la vez. Renombra de a una por vez para facilitar la verificación.',
    },
    quiz: [
      {
        question: '¿Cuál es el mejor nombre para una variable que almacena si el usuario tiene sesión iniciada?',
        options: [
          'sesion',
          'isLoggedIn',
          'userSessionStatus',
          'log',
        ],
        correctAnswer: 'isLoggedIn',
        correctFeedback: 'Correcto. isLoggedIn sigue la convención is+Adjetivo para booleanos. Es claro, conciso y se lee como texto natural: "if (isLoggedIn)".',
        incorrectFeedback: 'Para booleanos la convención es empezar con is, has, can, should. isLoggedIn es claro y directo. "sesion" no indica que es booleano, "userSessionStatus" es demasiado largo.',
      },
      {
        question: '¿Cuál es el mejor nombre para una función que filtra tareas completadas?',
        options: [
          'tareas()',
          'completadas()',
          'filtrar()',
          'filtrarTareasCompletadas()',
        ],
        correctAnswer: 'filtrarTareasCompletadas()',
        correctFeedback: 'Correcto. Las funciones deben empezar con un verbo que describa la acción. filtrarTareasCompletadas dice exactamente qué hace: filtrar tareas que están completadas.',
        incorrectFeedback: 'Las funciones deben empezar con un verbo de acción. filtrarTareasCompletadas describe exactamente qué hace. "tareas()" y "completadas()" son sustantivos, no describen la acción.',
      },
      {
        question: '¿Cuál es la convención de nombres para constantes globales en JavaScript?',
        options: [
          'camelCase: maxTareas',
          'PascalCase: MaxTareas',
          'SCREAMING_SNAKE_CASE: MAX_TAREAS',
          'lowercase: max_tareas',
        ],
        correctAnswer: 'SCREAMING_SNAKE_CASE: MAX_TAREAS',
        correctFeedback: 'Correcto. Las constantes globales (configuración, límites, valores fijos) se escriben en SCREAMING_SNAKE_CASE para distinguirlas de variables ordinarias.',
        incorrectFeedback: 'La convención para constantes globales es SCREAMING_SNAKE_CASE (todas mayúsculas con guiones bajos): MAX_TAREAS, API_URL, DEBOUNCE_DELAY. Esto las distingue visualmente de variables normales.',
      },
      {
        question: '¿Por qué se recomienda evitar abreviaciones como "usr", "cnt" o "d"?',
        options: [
          'Porque JavaScript no las permite',
          'Porque hacen el código críptico y difícil de entender para otros (y para ti mismo después)',
          'Porque ocupan más memoria',
          'Porque los linters siempre las marcan como error',
        ],
        correctAnswer: 'Porque hacen el código críptico y difícil de entender para otros (y para ti mismo después)',
        correctFeedback: 'Correcto. Las abreviaciones crípticas reducen la legibilidad. En 3 meses no recordarás qué significaba "cnt" o "d". "usuario" y "contador" se leen sin esfuerzo.',
        incorrectFeedback: 'JavaScript permite cualquier nombre válido. El problema es humano: las abreviaciones crípticas son difíciles de leer y entender, especialmente para otros desarrolladores o para ti mismo en el futuro.',
      },
    ],
  },
  {
    slug: 'evitar-codigo-repetido',
    title: 'Evitar código repetido',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 220,
    description: 'Aprende a identificar repetición en tu código y extraer lógica en funciones reutilizables.',
    explanation: `El principio **DRY (Don't Repeat Yourself)** dice que la misma lógica no debe estar duplicada en múltiples lugares.

**¿Por qué el código repetido es problemático?**
Si un bloque de código aparece 5 veces y necesitas corregir un bug, debes corregirlo en 5 lugares. Si te olvidas de uno, tienes un bug inconsistente.

**Señales de que debes extraer una función:**
- El mismo bloque de código aparece más de dos veces
- Solo cambian algunos valores entre las copias
- Cuando algo cambia, tienes que buscar y cambiar en varios lugares

**Ejemplo antes y después:**

**Antes (repetido):**
\`\`\`javascript
// Al agregar tarea
lista.innerHTML = ''
tareas.forEach(t => {
  const li = document.createElement('li')
  li.textContent = t.texto
  lista.appendChild(li)
})

// Al eliminar tarea
lista.innerHTML = ''
tareas.forEach(t => {
  const li = document.createElement('li')
  li.textContent = t.texto
  lista.appendChild(li)
})
\`\`\`

**Después (extraído):**
\`\`\`javascript
function renderizarLista(tareas, contenedor) {
  contenedor.innerHTML = ''
  tareas.forEach(t => {
    const li = document.createElement('li')
    li.textContent = t.texto
    contenedor.appendChild(li)
  })
}

// Usar la función en ambos casos:
renderizarLista(tareas, lista)
\`\`\`

**Cuándo NO extraer:**
Si algo aparece dos veces pero en contextos muy diferentes, puede estar bien dejarlo. No toda repetición superficial indica código repetido en esencia.`,
    codeExample: `// ❌ Código repetido: guardar en localStorage
function agregarTarea(texto) {
  tareas.push({ texto, completada: false })
  localStorage.setItem('tareas', JSON.stringify(tareas))
  actualizarContador()
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id)
  localStorage.setItem('tareas', JSON.stringify(tareas))
  actualizarContador()
}

function completarTarea(id) {
  tareas = tareas.map(t => t.id === id ? {...t, completada: true} : t)
  localStorage.setItem('tareas', JSON.stringify(tareas))
  actualizarContador()
}

// ✅ Extraer la lógica repetida:
function guardarYActualizar(nuevasTareas) {
  tareas = nuevasTareas
  localStorage.setItem('tareas', JSON.stringify(tareas))
  actualizarContador()
}

function agregarTarea2(texto) {
  guardarYActualizar([...tareas, { texto, completada: false }])
}

function eliminarTarea2(id) {
  guardarYActualizar(tareas.filter(t => t.id !== id))
}

function completarTarea2(id) {
  guardarYActualizar(tareas.map(t => t.id === id ? {...t, completada: true} : t))
}

// Ahora si cambia la clave de localStorage, solo cambias un lugar.`,
    keyPoints: [
      'DRY: la misma lógica no debe duplicarse en múltiples lugares',
      'El código repetido hace que los bugs sean difíciles de corregir consistentemente',
      'Si algo aparece más de dos veces con ligeras variaciones, extráelo a una función',
      'Extrae pasando los valores que cambian como parámetros',
      'No extraigas código que parece similar pero tiene responsabilidades fundamentalmente distintas',
      'Los cambios en una sola función se propagan automáticamente a todos sus usos',
    ],
    exercise: {
      description: 'Busca en tu proyecto un bloque de código que se repite (aunque sea con pequeñas variaciones). Extráelo a una función con parámetros para los valores que cambian. Reemplaza todas las copias con llamadas a esa función.',
      hint: 'El código repetido más común en proyectos con localStorage es la lógica de guardar y renderizar. Si haces esto después de cada operación, es un candidato claro para extraer.',
    },
    quiz: [
      {
        question: '¿Qué significa el principio DRY?',
        options: [
          'Delete Repeated Yaml',
          'Don\'t Repeat Yourself (no repitas la misma lógica)',
          'Define Reusable Yardsticks',
          'Dynamic Runtime Yielding',
        ],
        correctAnswer: 'Don\'t Repeat Yourself (no repitas la misma lógica)',
        correctFeedback: 'Correcto. DRY (Don\'t Repeat Yourself) es un principio de programación que dice que la misma lógica no debería duplicarse en el código.',
        incorrectFeedback: 'DRY significa Don\'t Repeat Yourself. Es un principio que dice que la misma lógica, algoritmo o conocimiento no debe estar duplicado en el código.',
      },
      {
        question: '¿Cuál es el principal problema del código repetido?',
        options: [
          'Ocupa más espacio en el disco',
          'Si necesitas cambiar algo, debes encontrarlo y cambiarlo en cada copia',
          'El navegador tarda más en ejecutarlo',
          'El linter siempre lo marca como error',
        ],
        correctAnswer: 'Si necesitas cambiar algo, debes encontrarlo y cambiarlo en cada copia',
        correctFeedback: 'Correcto. El código repetido crea problemas de mantenimiento. Si el mismo bloque aparece 5 veces y cambias 4, tienes un bug inconsistente difícil de detectar.',
        incorrectFeedback: 'El problema del código repetido es el mantenimiento: un bug debe corregirse en cada copia. Si te olvidas de una, tienes comportamiento inconsistente. No tiene que ver con el rendimiento.',
      },
      {
        question: '¿Cuándo deberías extraer código repetido a una función?',
        options: [
          'Solo cuando aparece más de diez veces',
          'Cuando aparece más de dos veces con la misma lógica esencial',
          'Nunca, las funciones complicann el código',
          'Solo en proyectos con más de 1000 líneas',
        ],
        correctAnswer: 'Cuando aparece más de dos veces con la misma lógica esencial',
        correctFeedback: 'Correcto. La regla práctica es: si el mismo bloque de lógica aparece más de dos veces, considerar extraerlo. No se aplica a código que se parece superficialmente pero es esencialmente distinto.',
        incorrectFeedback: 'La regla práctica es: si el mismo bloque aparece más de dos veces, considera extraerlo. No hay un número mínimo de líneas ni de repeticiones exactas.',
      },
      {
        question: '¿Cómo se manejan los valores que cambian entre copias al extraer código repetido?',
        options: [
          'Se eliminan del código extraído',
          'Se convierten en parámetros de la nueva función',
          'Se guardan en variables globales',
          'Se duplican en el archivo de configuración',
        ],
        correctAnswer: 'Se convierten en parámetros de la nueva función',
        correctFeedback: 'Correcto. Los valores que cambian entre las distintas copias se convierten en parámetros de la función extraída, haciéndola reutilizable en cada contexto.',
        incorrectFeedback: 'Cuando extraes código repetido, los valores que difieren entre copias se convierten en parámetros. Por ejemplo: function guardar(datos, clave) en lugar de codificar la clave dentro.',
      },
    ],
  },
  {
    slug: 'funciones-pequenas-js',
    title: 'Escribir funciones pequeñas',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 221,
    description: 'Aprende por qué las funciones pequeñas son más fáciles de entender, probar y reutilizar.',
    explanation: `Una función debería **hacer una sola cosa y hacerla bien**. Las funciones grandes que hacen muchas cosas son difíciles de entender, testear y reutilizar.

**¿Cómo saber si una función es demasiado grande?**
- Tiene más de 20-30 líneas
- Tiene un nombre difícil porque hace múltiples cosas: \`validarYGuardarYActualizarUI()\`
- Tiene múltiples niveles de anidación (if dentro de if dentro de for)
- Es difícil de testear porque depende de muchas cosas externas

**Principio de responsabilidad única:**
Una función = una responsabilidad.

**Ejemplo de función grande dividida:**

**Antes:**
\`\`\`javascript
function manejarFormulario(evento) {
  evento.preventDefault()
  const texto = documento.querySelector('#input').value.trim()
  if (!texto) { /* validación */ }
  if (texto.length > 200) { /* validación */ }
  const tarea = { texto, completada: false, fecha: new Date() }
  tareas.push(tarea)
  localStorage.setItem('tareas', JSON.stringify(tareas))
  lista.innerHTML = ''
  tareas.forEach(t => { /* renderizar */ })
}
\`\`\`

**Después:**
\`\`\`javascript
function manejarFormulario(evento) {
  evento.preventDefault()
  const texto = obtenerTextoFormulario()
  if (!esTextoValido(texto)) return
  const tarea = crearTarea(texto)
  agregarTarea(tarea)
  renderizarTareas(tareas)
}
\`\`\`

Cada subfunción es pequeña, tiene un nombre claro y puede testearse independientemente.`,
    codeExample: `// ❌ Función grande con múltiples responsabilidades:
function procesarPedido(carrito, usuario) {
  // validar usuario
  if (!usuario.nombre || !usuario.email) return false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)) return false

  // calcular total
  let total = 0
  carrito.forEach(item => {
    total += item.precio * item.cantidad
    if (item.cantidad > 10) total -= item.precio * 0.1
  })

  // guardar pedido
  const pedido = { usuario, carrito, total, fecha: new Date() }
  localStorage.setItem('pedidos', JSON.stringify(
    [...JSON.parse(localStorage.getItem('pedidos') || '[]'), pedido]
  ))

  // actualizar UI
  document.querySelector('#total').textContent = '$' + total
  document.querySelector('#confirmacion').hidden = false

  return true
}

// ✅ Dividida en funciones pequeñas con responsabilidad única:
function esUsuarioValido(usuario) {
  if (!usuario.nombre || !usuario.email) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)
}

function calcularTotal(carrito) {
  return carrito.reduce((total, item) => {
    const subtotal = item.precio * item.cantidad
    const descuento = item.cantidad > 10 ? subtotal * 0.1 : 0
    return total + subtotal - descuento
  }, 0)
}

function guardarPedido(pedido) {
  const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]')
  localStorage.setItem('pedidos', JSON.stringify([...pedidos, pedido]))
}

function mostrarConfirmacion(total) {
  document.querySelector('#total').textContent = '$' + total
  document.querySelector('#confirmacion').hidden = false
}

function procesarPedido(carrito, usuario) {
  if (!esUsuarioValido(usuario)) return false
  const total = calcularTotal(carrito)
  guardarPedido({ usuario, carrito, total, fecha: new Date() })
  mostrarConfirmacion(total)
  return true
}`,
    keyPoints: [
      'Una función debe tener una sola responsabilidad clara',
      'Funciones de más de 20-30 líneas son candidatas a dividirse',
      'Una función con un nombre difícil suele estar haciendo demasiado',
      'Las funciones pequeñas son más fáciles de testear aisladamente',
      'Las funciones pequeñas son más fáciles de reutilizar en otros contextos',
      'Divide funciones grandes en subfunciones con nombres descriptivos',
    ],
    exercise: {
      description: 'Busca en tu proyecto la función más larga. Identifica cuántas responsabilidades distintas tiene y divídela en funciones más pequeñas. Cada subfunción debe tener un nombre que describa exactamente qué hace.',
      hint: 'Busca dentro de la función los comentarios que pusiste (como // validar, // guardar, // actualizar UI). Esos comentarios indican secciones que podrían ser funciones separadas.',
    },
    quiz: [
      {
        question: '¿Cuál es la señal más clara de que una función necesita dividirse?',
        options: [
          'Tiene más de 5 parámetros',
          'No tiene comentarios',
          'Tiene un nombre difícil porque hace múltiples cosas distintas',
          'Usa más de una variable local',
        ],
        correctAnswer: 'Tiene un nombre difícil porque hace múltiples cosas distintas',
        correctFeedback: 'Correcto. Si necesitas un nombre como validarYGuardarYActualizarUI(), esa función está haciendo demasiado. Un buen nombre describe una sola responsabilidad.',
        incorrectFeedback: 'El signo más claro es el nombre: si la función hace tantas cosas que necesitas conectar varios verbos para describirla, está haciendo demasiado. Divide para que cada función tenga un nombre simple.',
      },
      {
        question: '¿Por qué las funciones pequeñas son más fáciles de testear?',
        options: [
          'Porque los tests se escriben más rápido para funciones cortas',
          'Porque tienen entradas y salidas claras sin dependencias externas complejas',
          'Porque el framework de testing solo permite funciones pequeñas',
          'Porque el navegador las ejecuta más rápido',
        ],
        correctAnswer: 'Porque tienen entradas y salidas claras sin dependencias externas complejas',
        correctFeedback: 'Correcto. Una función como calcularTotal(carrito) tiene entradas claras (el carrito) y salida predecible (el total). Es sencillo testear: si le doy X, espero Y.',
        incorrectFeedback: 'Las funciones pequeñas son más fáciles de testear porque tienen responsabilidades únicas: entradas claras y salidas predecibles. Una función grande que modifica el DOM, guarda en localStorage y llama a una API es casi imposible de testear de forma aislada.',
      },
      {
        question: '¿Qué indica que debes dividir una función al buscar en su código?',
        options: [
          'Que usa let en lugar de const',
          'Que tiene comentarios que separan secciones como // validar, // guardar, // actualizar UI',
          'Que usa arrow functions',
          'Que tiene más de un return',
        ],
        correctAnswer: 'Que tiene comentarios que separan secciones como // validar, // guardar, // actualizar UI',
        correctFeedback: 'Correcto. Los comentarios dentro de una función que describen "secciones" (validar, calcular, guardar, actualizar) indican que esas secciones podrían ser funciones separadas.',
        incorrectFeedback: 'Los comentarios que marcan secciones dentro de una función (// validar, // calcular, // guardar) son una señal de que esas secciones merecen ser funciones independientes.',
      },
    ],
  },
  {
    slug: 'comentarios-utiles-js',
    title: 'Comentarios útiles vs comentarios innecesarios',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 222,
    description: 'Aprende cuándo un comentario ayuda y cuándo solo repite lo que el código ya dice.',
    explanation: `Un buen comentario explica **por qué**, no el **qué**. El código ya dice qué hace; un comentario añade el contexto que el código no puede dar.

**¿Cuándo SÍ comentar?**

1. **Decisiones no obvias** (por qué elegiste esta implementación)
2. **Workarounds** para bugs conocidos de librerías
3. **Restricciones del negocio** que el código solo no explica
4. **Algoritmos complejos** con referencias

**¿Cuándo NO comentar?**

1. Cuando el código ya se explica solo con buenos nombres
2. Para describir qué hace cada línea (eso debe hacerlo el nombre)
3. Código comentado que ya no se usa (bórralo, Git lo recuerda)

**Ejemplos:**

**❌ Comentarios que repiten el código:**
\`\`\`javascript
// Incrementar el contador
contador++

// Filtrar tareas completadas
const completadas = tareas.filter(t => t.completada)
\`\`\`

**✅ Comentarios que explican el por qué:**
\`\`\`javascript
// API no soporta paginación, limitamos a 50 para evitar timeout
const MAX_RESULTADOS = 50

// setTimeout de 0 cede el control al navegador antes de renderizar
// para que el spinner aparezca antes del procesamiento pesado
setTimeout(() => procesarDatos(datos), 0)
\`\`\``,
    codeExample: `// ❌ Comentarios innecesarios (el código ya lo dice):

// Función que suma dos números
function sumar(a, b) {
  // Retorna la suma de a y b
  return a + b // suma
}

// Crear array de tareas vacío
const tareas = []

// Si el usuario no está autenticado
if (!usuario) {
  // Redirigir al login
  redirigir('/login')
}

// ✅ Comentarios útiles (explican el POR QUÉ):

// La API de clima tiene rate limit de 60 req/min.
// Cacheamos la respuesta por 10 minutos para evitar bloqueos.
const CACHE_CLIMA_MS = 10 * 60 * 1000

// El precio se guarda en centavos para evitar errores de punto flotante
// (0.1 + 0.2 !== 0.3 en JavaScript)
function precioCentavos(precio) {
  return Math.round(precio * 100)
}

// Workaround: Safari no soporta <dialog> nativo antes de v15.4
// Usamos un div con role="dialog" como fallback
function crearModal() {
  const esSafariViejo = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  return esSafariViejo ? crearModalFallback() : crearDialogNativo()
}`,
    keyPoints: [
      'Los comentarios deben explicar el POR QUÉ, no el QUÉ',
      'Si el código necesita un comentario para explicar qué hace, el nombre es malo',
      'Comenta decisiones no obvias, workarounds y restricciones del negocio',
      'Elimina el código comentado (// old code): Git lo recuerda por ti',
      'Un comentario desactualizado es peor que ningún comentario',
      'Los mejores comentarios son los que no necesitas escribir porque el código es claro',
    ],
    exercise: {
      description: 'Revisa tu proyecto y elimina todos los comentarios que solo repiten lo que el código ya dice. Luego agrega un comentario útil en algún lugar donde explicaste el "por qué" en una decisión no obvia.',
      hint: 'Si el comentario dice lo mismo que el nombre de la función o variable, elimínalo. Si dice algo que el código no puede expresar por sí solo (una restricción, un workaround), mantenlo.',
    },
    quiz: [
      {
        question: '¿Qué tipo de información añade un comentario útil?',
        options: [
          'Qué hace cada línea de código',
          'El nombre del desarrollador que escribió esa parte',
          'El contexto o razón detrás de una decisión no obvia',
          'La fecha en que se escribió el código',
        ],
        correctAnswer: 'El contexto o razón detrás de una decisión no obvia',
        correctFeedback: 'Correcto. Los buenos comentarios explican el por qué: por qué se tomó esa decisión, qué restricción existe, qué bug se está evitando. El código ya dice el qué.',
        incorrectFeedback: 'Un comentario útil explica el POR QUÉ: una restricción de negocio, un workaround para un bug, una decisión de diseño no evidente. El código ya explica el QUÉ.',
      },
      {
        question: '¿Cuál de estos comentarios es innecesario?',
        options: [
          '// API tiene rate limit de 100 req/min, esperamos 1s entre llamadas',
          '// Workaround: Safari antiguo no soporta <dialog> nativo',
          '// Incrementar el contador',
          '// El precio en centavos evita errores de punto flotante en JS',
        ],
        correctAnswer: '// Incrementar el contador',
        correctFeedback: 'Correcto. "Incrementar el contador" repite lo que el código ya dice. Los otros comentarios explican restricciones y decisiones que el código solo no puede expresar.',
        incorrectFeedback: 'Los comentarios sobre rate limits, workarounds de Safari y errores de punto flotante explican el POR QUÉ y son útiles. "// Incrementar el contador" solo repite lo que el código ya dice.',
      },
      {
        question: '¿Qué debes hacer con el código comentado que ya no se usa?',
        options: [
          'Moverlo al final del archivo',
          'Borrarlo, Git recuerda el historial de cambios',
          'Convertirlo en comentario de documentación',
          'Guardarlo en un archivo separado llamado old-code.js',
        ],
        correctAnswer: 'Borrarlo, Git recuerda el historial de cambios',
        correctFeedback: 'Correcto. El código comentado ensucia el archivo y confunde. Si usas Git, el historial de commits guarda todas las versiones anteriores. Puedes recuperar código antiguo cuando necesites.',
        incorrectFeedback: 'El código comentado que ya no se usa debe borrarse. Git guarda el historial completo y puedes recuperar cualquier versión anterior con git log y git show. No necesitas guardarlo en el código.',
      },
      {
        question: '¿Por qué un comentario desactualizado es peor que ningún comentario?',
        options: [
          'Porque aumenta el tamaño del archivo innecesariamente',
          'Porque miente sobre lo que hace el código y puede llevar a errores',
          'Porque los linters los marcan como warnings',
          'Porque JavaScript no ejecuta el código después de los comentarios',
        ],
        correctAnswer: 'Porque miente sobre lo que hace el código y puede llevar a errores',
        correctFeedback: 'Correcto. Un comentario que describe cómo funcionaba el código antes, pero el código ya cambió, es engañoso. Confía en el código actual, no en el comentario viejo.',
        incorrectFeedback: 'Un comentario desactualizado dice cosas que ya no son ciertas. El código cambió pero el comentario no. Eso crea confusión y puede llevar a que alguien tome decisiones basadas en información incorrecta.',
      },
    ],
  },
  {
    slug: 'checklist-codigo-limpio-js',
    title: 'Checklist de código limpio',
    module: 'Debugging y buenas prácticas',
    moduleNumber: 28,
    order: 223,
    description: 'Aprende a revisar tu código con una checklist simple antes de considerarlo terminado.',
    explanation: `Antes de considerar el código terminado, revisarlo con una checklist evita dejar deuda técnica y problemas para el futuro.

**Checklist de código limpio:**

**Nombres:**
- [ ] Las variables tienen nombres descriptivos (no x, d, tmp)
- [ ] Las funciones empiezan con un verbo
- [ ] Los booleanos empiezan con is, has, can, should

**Funciones:**
- [ ] Cada función tiene una sola responsabilidad
- [ ] Ninguna función tiene más de 20-30 líneas
- [ ] Los parámetros son claros (no más de 3-4)

**Código repetido:**
- [ ] No hay bloques de código duplicados
- [ ] La lógica repetida está extraída en funciones reutilizables

**Comentarios:**
- [ ] No hay comentarios que repiten el código
- [ ] No hay código comentado (// old stuff)
- [ ] Los comentarios explican el por qué, no el qué

**Limpieza:**
- [ ] No hay console.log de debugging
- [ ] No hay debugger en el código
- [ ] No hay variables declaradas y nunca usadas
- [ ] No hay imports que no se usan

**Seguridad básica:**
- [ ] No se usa innerHTML con datos del usuario (usar textContent)
- [ ] Las API keys no están en el código frontend
- [ ] El .env está en .gitignore`,
    codeExample: `// Ejemplo de código que necesita limpieza:
import { format } from 'date-fns'
import { getData } from './api.js' // ← import no usado

let x = []          // nombre malo
let d = new Date()  // nombre malo
// const oldFunction = ... // código comentado

function f(arr) {   // nombre malo, sin verbo
  console.log(arr)  // debug log olvidado
  debugger          // debugger olvidado

  // Filtrar elementos completados
  const completados = arr.filter(item => item.completada)

  // Mapear a textos
  const textos = completados.map(item => item.texto)

  const div = document.querySelector('#lista')
  div.innerHTML = textos.join('<br>') // ❌ XSS si textos vienen del usuario

  return completados
}

// ✅ Después de aplicar la checklist:
let tareas = []
let fechaInicio = new Date()

function obtenerTareasCompletadas(tareas) {
  const completadas = tareas.filter(t => t.completada)
  renderizarTextos(completadas.map(t => t.texto))
  return completadas
}

function renderizarTextos(textos, contenedor = document.querySelector('#lista')) {
  contenedor.innerHTML = ''
  textos.forEach(texto => {
    const p = document.createElement('p')
    p.textContent = texto // ← seguro contra XSS
    contenedor.appendChild(p)
  })
}`,
    keyPoints: [
      'Revisar con una checklist antes de considerar el código terminado',
      'Nombres descriptivos: variables, funciones y booleanos con convenciones claras',
      'Sin código duplicado: extraer lógica repetida en funciones',
      'Sin console.log de debugging ni debugger en el código',
      'Sin imports no usados ni variables declaradas y nunca usadas',
      'Seguridad básica: textContent en lugar de innerHTML para datos externos',
    ],
    exercise: {
      description: 'Aplica la checklist completa a un archivo de tu proyecto. Marca cada punto como cumplido o pendiente. Para cada punto pendiente, haz el cambio correspondiente. Al final, el código debería pasar todos los puntos.',
      hint: 'Empieza por los puntos más fáciles (eliminar console.log, cambiar nombres) y avanza a los más complejos (dividir funciones, eliminar duplicados). Guarda y verifica que todo sigue funcionando después de cada cambio.',
    },
    quiz: [
      {
        question: '¿Por qué es importante usar textContent en lugar de innerHTML al mostrar datos del usuario o de una API?',
        options: [
          'Porque textContent es más rápido que innerHTML',
          'Porque innerHTML puede ejecutar código malicioso (XSS) si los datos contienen HTML',
          'Porque innerHTML solo funciona en Chrome',
          'Porque textContent soporta más tipos de datos',
        ],
        correctAnswer: 'Porque innerHTML puede ejecutar código malicioso (XSS) si los datos contienen HTML',
        correctFeedback: 'Correcto. Si usas innerHTML con datos de un usuario o API, y esos datos contienen <script>código</script>, el código se ejecutará. textContent trata todo como texto plano, evitando XSS.',
        incorrectFeedback: 'innerHTML interpreta el texto como HTML y puede ejecutar scripts maliciosos (XSS - Cross Site Scripting). textContent trata el contenido como texto plano, sin ejecutar ningún HTML.',
      },
      {
        question: '¿Cuál es el problema de tener imports no usados en tu código?',
        options: [
          'Causa errores de ejecución inmediatos',
          'Ensucian el código, confunden a lectores y a veces afectan el tamaño del bundle',
          'Hacen que npm install falle',
          'Son el único tipo de error que JavaScript no puede manejar',
        ],
        correctAnswer: 'Ensucian el código, confunden a lectores y a veces afectan el tamaño del bundle',
        correctFeedback: 'Correcto. Los imports no usados indican código incompleto o descuidado. Algunos bundlers los eliminan (tree shaking), pero otros no. Siempre limpiar.',
        incorrectFeedback: 'Los imports no usados no causan errores de ejecución inmediatos, pero ensucian el código. Indican que algo fue importado y olvidado. Los bundlers modernos hacen tree shaking, pero no siempre eliminan todo.',
      },
      {
        question: '¿Cuántos parámetros se recomienda como máximo para una función?',
        options: [
          'Uno',
          'Máximo 3 o 4',
          'Máximo 10',
          'No hay límite recomendado',
        ],
        correctAnswer: 'Máximo 3 o 4',
        correctFeedback: 'Correcto. Las funciones con muchos parámetros son difíciles de llamar y recordar. Si necesitas más de 3-4, considera agruparlos en un objeto.',
        incorrectFeedback: 'Se recomienda máximo 3-4 parámetros. Si una función necesita más, considera pasar un objeto con propiedades: function crear({ nombre, edad, email }) en lugar de function crear(nombre, edad, email, ...)',
      },
      {
        question: '¿Por qué las API keys no deben estar en el código frontend JavaScript?',
        options: [
          'Porque JavaScript no puede manejar strings largos',
          'Porque el código frontend se descarga al navegador y cualquier usuario puede verlas',
          'Porque npm no permite guardar claves',
          'Porque las API keys deben estar en el HTML',
        ],
        correctAnswer: 'Porque el código frontend se descarga al navegador y cualquier usuario puede verlas',
        correctFeedback: 'Correcto. El código JavaScript del frontend es público. Cualquier usuario puede abrirlo en DevTools y ver todas las claves. Las claves secretas deben estar en el backend.',
        incorrectFeedback: 'El código JavaScript del frontend es visible para todos los usuarios en DevTools. Una API key ahí es pública. Las claves secretas deben estar en el servidor backend, nunca en el frontend.',
      },
      {
        question: '¿Cuándo deberías aplicar la checklist de código limpio?',
        options: [
          'Solo al inicio del proyecto',
          'Antes de considerar una funcionalidad terminada o hacer un commit',
          'Solo cuando hay errores de rendimiento',
          'Solo cuando lo pide el cliente',
        ],
        correctAnswer: 'Antes de considerar una funcionalidad terminada o hacer un commit',
        correctFeedback: 'Correcto. Revisar con la checklist antes de hacer commit convierte la limpieza en un hábito y evita acumular deuda técnica que luego es más difícil de limpiar.',
        incorrectFeedback: 'La checklist es más útil como rutina antes de hacer commit. Hacerlo en cada commit pequeño es mucho menos costoso que limpiar deuda técnica acumulada durante semanas.',
      },
    ],
  },
]

export const jsModule28: Module = {
  number: 28,
  title: 'Debugging y buenas prácticas',
  level: 'nivel6',
  lessons: lessonsJsModule28,
}
