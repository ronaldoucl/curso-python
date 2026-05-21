import type { Lesson, Module } from '@/types'

export const lessonsTsModule21: Lesson[] = [
  {
    slug: 'typescript-y-dom',
    title: 'TypeScript y el DOM',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 161,
    description:
      'Aprende cómo TypeScript trabaja con elementos HTML y por qué necesitas tipar correctamente los elementos del DOM.',
    explanation: `## TypeScript y el DOM

Cuando usas TypeScript en el navegador, interactúas con el **DOM** (Document Object Model) — la representación en memoria de los elementos HTML de tu página.

TypeScript tiene definiciones de tipos para todo lo que existe en el navegador: elementos HTML, eventos, estilos, el objeto \`window\`, y mucho más. Estas definiciones vienen incluidas con TypeScript en el archivo \`lib.dom.d.ts\`.

### ¿Por qué TypeScript ayuda con el DOM?

En JavaScript puro puedes hacer esto sin problema:

\`\`\`javascript
const btn = document.getElementById('mi-boton')
btn.click() // ¿Está btn definido? ¿Tiene el método click?
\`\`\`

JavaScript no sabe si \`btn\` existe o es \`null\`. TypeScript sí lo sabe, y te avisa antes de que el programa falle.

### El problema de null

\`document.getElementById\` puede devolver \`null\` si no encuentra el elemento. TypeScript lo expresa así:

\`\`\`typescript
// TypeScript sabe que el tipo es HTMLElement | null
const btn = document.getElementById('mi-boton')

btn.click() // ❌ Error: btn puede ser null
\`\`\`

Esto es una señal importante: TypeScript te está protegiendo de un error real que ocurriría en tiempo de ejecución si el elemento no existe.

### La solución: verificar antes de usar

\`\`\`typescript
const btn = document.getElementById('mi-boton')

if (btn !== null) {
  btn.click() // ✅ TypeScript sabe que btn es HTMLElement aquí
}
\`\`\`

### Una analogía

Imagina que el DOM es una tienda y tú pides productos por nombre. A veces el producto existe y te lo dan. A veces no existe y te dan una nota que dice "no encontrado". TypeScript te obliga a revisar si tienes el producto real o la nota de "no encontrado" antes de usarlo.

### ¿Por qué tipar correctamente los elementos?

No todos los elementos HTML son iguales:
- Un \`<input>\` tiene una propiedad \`value\`
- Un \`<button>\` tiene propiedades como \`disabled\`
- Un \`<form>\` tiene métodos como \`submit()\` y \`reset()\`

Si TypeScript no sabe qué tipo de elemento es, solo te da acceso a las propiedades que todos los elementos comparten — y eso es bastante poco.`,
    codeExample: `// dom.ts

// TypeScript sabe que getElementById puede devolver null
const titulo = document.getElementById('titulo')
// tipo: HTMLElement | null

// Si usas sin verificar, TypeScript da error
// titulo.textContent = 'Hola' // ❌ Error: titulo puede ser null

// Forma correcta: verificar antes
if (titulo !== null) {
  titulo.textContent = 'Hola desde TypeScript' // ✅
}

// También puedes usar el operador ?. (optional chaining)
titulo?.setAttribute('class', 'activo') // Solo ejecuta si titulo no es null

// querySelector también puede devolver null
const parrafo = document.querySelector('p')
// tipo: HTMLParagraphElement | null

if (parrafo) {
  parrafo.textContent = 'Párrafo encontrado'
  parrafo.style.color = 'blue'
}

// querySelectorAll devuelve una NodeList (nunca null)
const items = document.querySelectorAll('li')
// tipo: NodeListOf<Element>

items.forEach((item) => {
  item.textContent = 'Item actualizado'
})

// Trabajar con el body (siempre existe)
document.body.style.backgroundColor = '#1a1a2e'
document.title = 'Mi app con TypeScript'

// Crear elementos — devuelve el tipo correcto
const div = document.createElement('div')
// tipo: HTMLDivElement — TypeScript sabe que es un div
div.className = 'contenedor'
div.textContent = 'Elemento creado'
document.body.appendChild(div)`,
    keyPoints: [
      'TypeScript incluye tipos para todo el DOM en lib.dom.d.ts',
      'document.getElementById devuelve HTMLElement | null — debes verificar antes de usar',
      'querySelector puede devolver null; querySelectorAll devuelve NodeList (nunca null)',
      'Verificar si el elemento existe con if o ?. evita errores en tiempo de ejecución',
      'document.createElement infiere el tipo exacto según el nombre del tag',
    ],
    exercise: {
      description:
        'Crea un archivo dom.ts que: (1) obtenga un elemento con id "contador", (2) verifique que existe antes de usarlo, (3) cambie su textContent a "0", (4) cree un botón con createElement, le ponga el texto "Incrementar", y lo añada al body. Asegúrate de que TypeScript no muestre errores.',
      hint: 'Usa if (elemento !== null) o if (elemento) para verificar. document.createElement("button") devuelve HTMLButtonElement con todas sus propiedades disponibles.',
    },
    quiz: [
      {
        question: '¿Qué tipo devuelve `document.getElementById("btn")`?',
        options: [
          'HTMLElement',
          'HTMLElement | null',
          'HTMLButtonElement',
          'Element | undefined',
        ],
        correctAnswer: 'HTMLElement | null',
        correctFeedback:
          '¡Correcto! getElementById devuelve HTMLElement | null porque el elemento puede no existir en el DOM.',
        incorrectFeedback:
          'getElementById devuelve HTMLElement | null, no solo HTMLElement. TypeScript te obliga a considerar el caso en que el elemento no existe. Debes verificar antes de usarlo.',
      },
      {
        question: '¿Por qué TypeScript da error si haces `document.getElementById("btn").click()` directamente?',
        options: [
          'Porque click() no existe en HTMLElement',
          'Porque getElementById puede devolver null y no puedes llamar métodos en null',
          'Porque los botones no tienen método click en TypeScript',
          'Porque debes usar querySelector en su lugar',
        ],
        correctAnswer: 'Porque getElementById puede devolver null y no puedes llamar métodos en null',
        correctFeedback:
          '¡Exacto! TypeScript sabe que getElementById puede devolver null. Llamar .click() en null causaría un TypeError en tiempo de ejecución. TypeScript te lo advierte antes.',
        incorrectFeedback:
          'El problema es null. getElementById devuelve HTMLElement | null. Si el elemento no existe, obtienes null, y llamar .click() en null lanza un TypeError. TypeScript te protege detectando esto antes de correr el código.',
      },
      {
        question: '¿Qué diferencia hay entre `document.getElementById` y `document.querySelectorAll` en cuanto a null?',
        options: [
          'Ambos pueden devolver null',
          'getElementById puede devolver null; querySelectorAll nunca devuelve null (devuelve NodeList vacía si no hay coincidencias)',
          'querySelectorAll puede devolver null; getElementById nunca',
          'Ninguno puede devolver null',
        ],
        correctAnswer: 'getElementById puede devolver null; querySelectorAll nunca devuelve null (devuelve NodeList vacía si no hay coincidencias)',
        correctFeedback:
          '¡Perfecto! querySelectorAll siempre devuelve una NodeList, aunque esté vacía. getElementById devuelve null si el elemento no existe.',
        incorrectFeedback:
          'querySelectorAll nunca devuelve null — si no hay coincidencias, devuelve una NodeList vacía. getElementById sí puede devolver null cuando el elemento no existe.',
      },
      {
        question: '¿Qué tipo devuelve `document.createElement("input")`?',
        options: [
          'HTMLElement',
          'Element',
          'HTMLInputElement',
          'HTMLFormElement',
        ],
        correctAnswer: 'HTMLInputElement',
        correctFeedback:
          '¡Correcto! TypeScript infiere el tipo exacto según el nombre del tag. "input" → HTMLInputElement, "div" → HTMLDivElement, "button" → HTMLButtonElement.',
        incorrectFeedback:
          'document.createElement infiere el tipo específico según el tag. "input" devuelve HTMLInputElement, no el genérico HTMLElement. Esto te da acceso a propiedades como .value y .type.',
      },
      {
        question: '¿Cuál es la forma más segura de usar un elemento que puede ser null?',
        options: [
          'Ignorar el error de TypeScript con @ts-ignore',
          'Usar `as HTMLElement` para forzar el tipo',
          'Verificar con `if (elemento !== null)` antes de usar',
          'Usar `any` como tipo',
        ],
        correctAnswer: 'Verificar con `if (elemento !== null)` antes de usar',
        correctFeedback:
          '¡Exacto! Verificar con if es la forma más segura porque garantiza que el elemento realmente existe antes de usarlo. TypeScript estrecha el tipo dentro del if.',
        incorrectFeedback:
          'La forma más segura es verificar con if. Las type assertions con `as` o ignorar con @ts-ignore pueden ocultar errores reales. La verificación garantiza que el elemento existe en tiempo de ejecución.',
      },
    ],
  },
  {
    slug: 'seleccionar-elementos-tipos',
    title: 'Seleccionar elementos con tipos',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 162,
    description:
      'Aprende a seleccionar elementos usando querySelector y manejar correctamente valores posiblemente null.',
    explanation: `## Seleccionar elementos con tipos

TypeScript ofrece varias formas de seleccionar elementos del DOM, y cada una tiene su propio tipo de retorno.

### document.getElementById

\`\`\`typescript
const el = document.getElementById('mi-id')
// tipo: HTMLElement | null
\`\`\`

Solo busca por id. Devuelve el tipo genérico \`HTMLElement\`.

### document.querySelector

\`\`\`typescript
const el = document.querySelector('.clase')
// tipo: Element | null

const input = document.querySelector('input')
// tipo: HTMLInputElement | null  ← TypeScript infiere el tipo por el tag
\`\`\`

Cuando usas un selector de tag puro (sin clase ni id), TypeScript puede inferir el tipo específico.

### Pasar el tipo con genérico

Puedes decirle a TypeScript qué tipo esperas con el parámetro genérico de querySelector:

\`\`\`typescript
const input = document.querySelector<HTMLInputElement>('#nombre')
// tipo: HTMLInputElement | null
// Ahora tienes acceso a .value, .type, .placeholder, etc.
\`\`\`

### document.querySelectorAll

\`\`\`typescript
const botones = document.querySelectorAll<HTMLButtonElement>('.boton')
// tipo: NodeListOf<HTMLButtonElement>
// Nunca es null — puede estar vacía
\`\`\`

### Patrones para manejar null

**Patrón 1: Verificación simple**
\`\`\`typescript
const el = document.getElementById('app')
if (el) {
  el.textContent = 'App iniciada'
}
\`\`\`

**Patrón 2: Early return**
\`\`\`typescript
function inicializar() {
  const contenedor = document.getElementById('contenedor')
  if (!contenedor) return  // Salir temprano si no existe
  // A partir de aquí, TypeScript sabe que contenedor es HTMLElement
  contenedor.textContent = 'Listo'
}
\`\`\`

**Patrón 3: Optional chaining**
\`\`\`typescript
const texto = document.getElementById('titulo')?.textContent
// tipo: string | undefined (no lanza error si titulo es null)
\`\`\``,
    codeExample: `// dom.ts

// getElementById — tipo genérico
const app = document.getElementById('app')
// HTMLElement | null

if (app) {
  app.textContent = 'Aplicación iniciada'
  app.className = 'activo'
}

// querySelector con inferencia de tipo por tag
const form = document.querySelector('form')
// HTMLFormElement | null ← TypeScript infiere el tipo

if (form) {
  form.reset() // reset() es un método de HTMLFormElement ✅
}

// querySelector con clase — devuelve Element | null (más genérico)
const tarjeta = document.querySelector('.tarjeta')
// Element | null — acceso limitado a propiedades

// querySelector con genérico — especificamos el tipo
const inputNombre = document.querySelector<HTMLInputElement>('#nombre')
// HTMLInputElement | null — acceso a .value, .placeholder, etc.

if (inputNombre) {
  console.log(inputNombre.value)      // ✅ value existe en HTMLInputElement
  console.log(inputNombre.placeholder) // ✅
  inputNombre.focus()                  // ✅
}

// querySelectorAll con genérico
const items = document.querySelectorAll<HTMLLIElement>('ul li')
// NodeListOf<HTMLLIElement> — nunca null

items.forEach((item, i) => {
  item.textContent = \`Elemento \${i + 1}\`
  item.dataset.index = String(i)
})

// Patrón early return
function configurarBoton(id: string, texto: string): void {
  const btn = document.getElementById(id)
  if (!btn) {
    console.warn(\`No se encontró el botón con id: \${id}\`)
    return
  }
  // TypeScript sabe que btn es HTMLElement aquí
  btn.textContent = texto
  btn.removeAttribute('disabled')
}

// Optional chaining — no lanza error si el elemento no existe
const valorInput = document.querySelector<HTMLInputElement>('#buscar')?.value
// string | undefined`,
    keyPoints: [
      'getElementById devuelve HTMLElement | null; querySelector con tag infiere el tipo específico',
      'querySelector<T>() permite especificar el tipo esperado cuando no se puede inferir',
      'querySelectorAll nunca devuelve null — devuelve NodeList vacía si no hay coincidencias',
      'El patrón early return con if (!el) return limpia el flujo cuando el elemento es requerido',
      'Optional chaining (?.) permite acceder a propiedades sin lanzar error si el elemento es null',
    ],
    exercise: {
      description:
        'Escribe una función `obtenerValoresFormulario()` que: (1) seleccione un input con id "nombre" usando querySelector<HTMLInputElement>, (2) seleccione un input con id "email" usando querySelector<HTMLInputElement>, (3) si alguno es null, retorne null, (4) si ambos existen, retorne `{ nombre: string, email: string }` con sus valores. Usa early return para manejar el caso null.',
      hint: 'Después de verificar que ambos inputs no son null, TypeScript sabe su tipo exacto y puedes acceder a .value. El tipo de retorno de la función sería `{ nombre: string; email: string } | null`.',
    },
    quiz: [
      {
        question: '¿Qué tipo devuelve `document.querySelector(".mi-clase")`?',
        options: [
          'HTMLElement | null',
          'Element | null',
          'HTMLDivElement | null',
          'NodeList',
        ],
        correctAnswer: 'Element | null',
        correctFeedback:
          '¡Correcto! Cuando usas un selector de clase o atributo, TypeScript no puede inferir el tipo específico y devuelve Element | null.',
        incorrectFeedback:
          'Con selectores de clase (.clase), id (#id), o atributos ([attr]), TypeScript devuelve Element | null — el tipo más genérico. Solo con selectores de tag puro (como "input" o "form") infiere el tipo específico.',
      },
      {
        question: '¿Cómo especificas que el resultado de querySelector es un HTMLInputElement?',
        options: [
          'document.querySelector("input").as(HTMLInputElement)',
          'document.querySelector<HTMLInputElement>("#mi-input")',
          'document.querySelector("#mi-input") as HTMLInputElement',
          'HTMLInputElement.querySelector("#mi-input")',
        ],
        correctAnswer: 'document.querySelector<HTMLInputElement>("#mi-input")',
        correctFeedback:
          '¡Exacto! El parámetro genérico <HTMLInputElement> le dice a TypeScript qué tipo esperas. El resultado sigue siendo HTMLInputElement | null.',
        incorrectFeedback:
          'La forma correcta es usar el parámetro genérico: document.querySelector<HTMLInputElement>("#mi-input"). Esto le dice a TypeScript el tipo esperado sin eliminar el null.',
      },
      {
        question: 'Si `querySelectorAll(".item")` no encuentra ningún elemento, ¿qué devuelve?',
        options: [
          'null',
          'undefined',
          'Una NodeList vacía (length = 0)',
          'Un array vacío []',
        ],
        correctAnswer: 'Una NodeList vacía (length = 0)',
        correctFeedback:
          '¡Perfecto! querySelectorAll nunca devuelve null. Si no hay coincidencias, devuelve una NodeList vacía. Por eso no necesitas verificar null.',
        incorrectFeedback:
          'querySelectorAll siempre devuelve una NodeList — nunca null. Si no hay coincidencias, la NodeList tiene length 0. No necesitas verificar null como con getElementById o querySelector.',
      },
      {
        question: '¿Cuál es la ventaja del patrón early return con `if (!elemento) return`?',
        options: [
          'Hace el código más corto',
          'Evita anidar el código en múltiples if y garantiza que el elemento existe en el resto de la función',
          'TypeScript requiere siempre este patrón',
          'Evita que el elemento sea null',
        ],
        correctAnswer: 'Evita anidar el código en múltiples if y garantiza que el elemento existe en el resto de la función',
        correctFeedback:
          '¡Exacto! Early return reduce el anidamiento. Después del if (!elemento) return, TypeScript sabe que elemento no es null, así que el resto del código es más limpio.',
        incorrectFeedback:
          'Early return reduce el anidamiento y aclara el flujo. Después de la verificación y el return, TypeScript estrecha el tipo: sabe que el elemento no puede ser null en el resto de la función.',
      },
      {
        question: '¿Qué hace `document.querySelector<HTMLInputElement>("#buscar")?.value`?',
        options: [
          'Lanza un error si el input no existe',
          'Devuelve string | undefined — si el input existe devuelve su valor, si no devuelve undefined',
          'Devuelve siempre string vacío',
          'Es equivalente a usar as HTMLInputElement',
        ],
        correctAnswer: 'Devuelve string | undefined — si el input existe devuelve su valor, si no devuelve undefined',
        correctFeedback:
          '¡Perfecto! El ?. (optional chaining) solo accede a .value si el input no es null. Si es null, devuelve undefined sin lanzar error. El tipo resultante es string | undefined.',
        incorrectFeedback:
          'El operador ?. (optional chaining) evalúa la expresión de la izquierda y, si es null o undefined, devuelve undefined sin lanzar error. Por eso el tipo es string | undefined.',
      },
    ],
  },
  {
    slug: 'html-element-tipos-especificos',
    title: 'HTMLElement y tipos específicos',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 163,
    description:
      'Aprende la diferencia entre HTMLElement, HTMLInputElement, HTMLButtonElement, HTMLFormElement y otros tipos específicos.',
    explanation: `## HTMLElement y tipos específicos

El DOM de TypeScript tiene una jerarquía de tipos. No todos los elementos HTML son iguales y TypeScript lo refleja con tipos específicos.

### La jerarquía básica

\`\`\`
EventTarget
  └── Node
        └── Element
              └── HTMLElement
                    ├── HTMLInputElement
                    ├── HTMLButtonElement
                    ├── HTMLFormElement
                    ├── HTMLAnchorElement
                    ├── HTMLImageElement
                    ├── HTMLSelectElement
                    ├── HTMLTextAreaElement
                    ├── HTMLDivElement
                    ├── HTMLSpanElement
                    └── ... (muchos más)
\`\`\`

### ¿Por qué importa el tipo específico?

**Con HTMLElement** (genérico) solo tienes acceso a propiedades comunes:

\`\`\`typescript
const el: HTMLElement = document.getElementById('nombre')!
el.textContent    // ✅ disponible en todos los elementos
el.style          // ✅ disponible en todos
el.value          // ❌ Error: value no existe en HTMLElement
el.checked        // ❌ Error
\`\`\`

**Con HTMLInputElement** tienes acceso a propiedades específicas:

\`\`\`typescript
const input: HTMLInputElement = document.querySelector('input')!
input.value       // ✅ el valor del input
input.type        // ✅ "text", "checkbox", "number", etc.
input.checked     // ✅ para checkboxes
input.placeholder // ✅
input.disabled    // ✅
input.focus()     // ✅
\`\`\`

### Tipos específicos más usados

| Tipo | Tag HTML | Propiedades clave |
|------|----------|-------------------|
| HTMLInputElement | \`<input>\` | value, type, checked, placeholder |
| HTMLButtonElement | \`<button>\` | disabled, type, form |
| HTMLFormElement | \`<form>\` | submit(), reset(), elements |
| HTMLSelectElement | \`<select>\` | value, selectedIndex, options |
| HTMLTextAreaElement | \`<textarea>\` | value, rows, cols |
| HTMLAnchorElement | \`<a>\` | href, target, download |
| HTMLImageElement | \`<img>\` | src, alt, width, height |
| HTMLDivElement | \`<div>\` | (propiedades genéricas de HTMLElement) |`,
    codeExample: `// dom.ts

// HTMLInputElement — acceso a value, type, checked
const inputTexto = document.querySelector<HTMLInputElement>('input[type="text"]')
if (inputTexto) {
  console.log(inputTexto.value)        // string
  console.log(inputTexto.placeholder)  // string
  inputTexto.disabled = true           // boolean
}

const checkbox = document.querySelector<HTMLInputElement>('input[type="checkbox"]')
if (checkbox) {
  console.log(checkbox.checked)  // boolean ✅
  checkbox.checked = true
}

// HTMLButtonElement — acceso a disabled, type
const boton = document.querySelector<HTMLButtonElement>('button')
if (boton) {
  boton.disabled = true      // ✅
  boton.textContent = 'Cargando...'
  console.log(boton.type)    // "button" | "submit" | "reset"
}

// HTMLFormElement — submit(), reset(), elements
const formulario = document.querySelector<HTMLFormElement>('form')
if (formulario) {
  formulario.reset()          // ✅ método específico de form
  const elementos = formulario.elements  // HTMLFormControlsCollection
  console.log(elementos.length)
}

// HTMLSelectElement — value y selectedIndex
const selector = document.querySelector<HTMLSelectElement>('select')
if (selector) {
  console.log(selector.value)          // el valor seleccionado
  console.log(selector.selectedIndex)  // índice de la opción seleccionada
}

// HTMLAnchorElement — href y target
const enlace = document.querySelector<HTMLAnchorElement>('a.externo')
if (enlace) {
  enlace.href = 'https://typescript-lang.org'
  enlace.target = '_blank'
  enlace.rel = 'noopener noreferrer'
}

// HTMLImageElement — src, alt, width
const imagen = document.querySelector<HTMLImageElement>('img.avatar')
if (imagen) {
  imagen.src = '/avatar-default.png'
  imagen.alt = 'Foto de perfil'
  console.log(imagen.naturalWidth)  // ancho real de la imagen
}`,
    keyPoints: [
      'HTMLElement es el tipo genérico; los tipos específicos (HTMLInputElement, etc.) dan acceso a propiedades únicas',
      'Solo HTMLInputElement tiene .value, .checked, .placeholder; HTMLElement no los tiene',
      'Usa querySelector<HTMLInputElement>() para obtener el tipo específico desde el inicio',
      'HTMLFormElement tiene métodos como reset() y submit() que HTMLElement no tiene',
      'document.createElement("input") infiere HTMLInputElement automáticamente',
    ],
    exercise: {
      description:
        'Crea una función `leerFormulario()` que seleccione: (1) un HTMLInputElement con id "nombre" y lea su value, (2) un HTMLInputElement de tipo checkbox con id "terminos" y lea su checked, (3) un HTMLSelectElement con id "pais" y lea su value. Retorna `{ nombre: string, aceptoTerminos: boolean, pais: string } | null`. Si algún elemento no existe, retorna null.',
      hint: 'Usa querySelector<HTMLInputElement>("#nombre"), querySelector<HTMLInputElement>("#terminos"), y querySelector<HTMLSelectElement>("#pais"). Verifica que cada uno no es null antes de leer sus propiedades.',
    },
    quiz: [
      {
        question: '¿Por qué `const el: HTMLElement = ...; el.value` da error en TypeScript?',
        options: [
          'Porque value es una propiedad privada',
          'Porque HTMLElement no tiene la propiedad value — solo HTMLInputElement, HTMLSelectElement, etc. la tienen',
          'Porque el elemento no está en el DOM',
          'Porque TypeScript no permite acceder a propiedades de HTMLElement',
        ],
        correctAnswer: 'Porque HTMLElement no tiene la propiedad value — solo HTMLInputElement, HTMLSelectElement, etc. la tienen',
        correctFeedback:
          '¡Correcto! value no es una propiedad de todos los elementos HTML. Solo ciertos tipos como HTMLInputElement la tienen. Con el tipo genérico HTMLElement, TypeScript no puede garantizar que exista.',
        incorrectFeedback:
          'HTMLElement es el tipo base común a todos los elementos. La propiedad value solo existe en tipos específicos como HTMLInputElement o HTMLSelectElement. Al usar el tipo genérico, pierdes acceso a esas propiedades específicas.',
      },
      {
        question: '¿Cuál es el tipo de retorno de `document.createElement("button")`?',
        options: [
          'HTMLElement',
          'Element',
          'HTMLButtonElement',
          'HTMLInputElement',
        ],
        correctAnswer: 'HTMLButtonElement',
        correctFeedback:
          '¡Perfecto! TypeScript infiere el tipo específico según el nombre del tag. "button" → HTMLButtonElement, con acceso a .disabled, .type, etc.',
        incorrectFeedback:
          'createElement infiere el tipo específico según el tag. "button" → HTMLButtonElement, "input" → HTMLInputElement, "form" → HTMLFormElement. No devuelve el genérico HTMLElement.',
      },
      {
        question: '¿Qué propiedades específicas tiene HTMLInputElement que no tiene HTMLElement?',
        options: [
          'textContent, style, className',
          'value, type, checked, placeholder, disabled',
          'submit(), reset(), elements',
          'href, target, download',
        ],
        correctAnswer: 'value, type, checked, placeholder, disabled',
        correctFeedback:
          '¡Exacto! value, type, checked, placeholder son propiedades exclusivas de HTMLInputElement. HTMLElement tiene textContent, style, className.',
        incorrectFeedback:
          'Las propiedades value, type, checked, placeholder son específicas de HTMLInputElement. textContent y style son de HTMLElement. submit() y reset() son de HTMLFormElement. href es de HTMLAnchorElement.',
      },
      {
        question: '¿Qué métodos específicos tiene HTMLFormElement?',
        options: [
          'click(), focus(), blur()',
          'reset() y submit()',
          'value y checked',
          'src y alt',
        ],
        correctAnswer: 'reset() y submit()',
        correctFeedback:
          '¡Correcto! HTMLFormElement tiene reset() para limpiar el formulario y submit() para enviarlo programáticamente. Son métodos específicos del elemento form.',
        incorrectFeedback:
          'HTMLFormElement tiene métodos específicos como reset() (limpia el formulario) y submit() (lo envía). click() y focus() son de HTMLElement. value y checked son de HTMLInputElement.',
      },
      {
        question: '¿Cuál es el tipo más específico que conviene usar para seleccionar un input con `querySelector`?',
        options: [
          'Element',
          'HTMLElement',
          'HTMLInputElement',
          'Node',
        ],
        correctAnswer: 'HTMLInputElement',
        correctFeedback:
          '¡Perfecto! Usar querySelector<HTMLInputElement>() te da acceso a todas las propiedades del input (value, type, checked, etc.). Los tipos más genéricos limitan lo que puedes hacer.',
        incorrectFeedback:
          'Siempre conviene usar el tipo más específico posible. HTMLInputElement da acceso a value, type, checked, placeholder. Con Element o HTMLElement pierdes esas propiedades.',
      },
    ],
  },
  {
    slug: 'type-assertions-dom',
    title: 'Type assertions en el DOM',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 164,
    description:
      'Aprende a usar type assertions cuando sabes qué tipo de elemento estás seleccionando, y cuándo hacerlo con cuidado.',
    explanation: `## Type assertions en el DOM

Una **type assertion** le dice a TypeScript: "confía en mí, sé que este valor es de este tipo". Se escribe con \`as\`.

\`\`\`typescript
const input = document.getElementById('nombre') as HTMLInputElement
// TypeScript ya no dice que puede ser null — asume que es HTMLInputElement
\`\`\`

### ¿Cuándo tiene sentido una type assertion?

Cuando **sabes con certeza** que el elemento existe y tiene el tipo correcto:

\`\`\`typescript
// Sabes que en tu HTML hay un <input id="nombre">
const input = document.getElementById('nombre') as HTMLInputElement
input.value = 'Ana'  // ✅ TypeScript confía en ti
\`\`\`

### El peligro de las type assertions

Si el elemento no existe en el DOM y usas \`as\`, TypeScript no te protege:

\`\`\`typescript
const btn = document.getElementById('boton-inexistente') as HTMLButtonElement
btn.click()  // TypeScript no da error... pero en el navegador lanzará TypeError
\`\`\`

**La type assertion no hace que el elemento exista.** Solo le dice a TypeScript que asuma el tipo. Si te equivocas, el error ocurre en tiempo de ejecución.

### El operador ! (non-null assertion)

Hay otro operador para eliminar el \`null\` de un tipo sin cambiar el tipo base:

\`\`\`typescript
const titulo = document.getElementById('titulo')!
// tipo: HTMLElement (sin null)
// ! dice: "confío en que este valor no es null"

// Combinar ! con as
const input = document.getElementById('nombre')! as HTMLInputElement
// o más limpio:
const input = document.getElementById('nombre') as HTMLInputElement
// (as ya elimina el null implícitamente)
\`\`\`

### Regla práctica

- Usa type assertions cuando el elemento **siempre existe** en tu HTML (por ejemplo, elementos del layout principal)
- **No** uses type assertions para evitar pensar en el null — usa verificaciones reales
- Si el elemento puede no existir, verifica con \`if\` en lugar de \`as\``,
    codeExample: `// dom.ts

// ✅ Uso apropiado: el elemento siempre existe en el HTML
const app = document.getElementById('app') as HTMLDivElement
app.className = 'iniciado'

// ✅ Uso apropiado: formulario principal siempre presente
const form = document.querySelector('form') as HTMLFormElement
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // procesar formulario
})

// ✅ Uso apropiado: input dentro de un form que ya verificamos existe
const inputNombre = document.querySelector<HTMLInputElement>('#nombre')
// Aquí preferimos el parámetro genérico — mantiene el null y es más explícito

// ❌ Uso problemático: tipo incorrecto
// const btn = document.getElementById('mi-form') as HTMLButtonElement
// btn.disabled = true  // Puede fallar si el elemento es un form, no un button

// El operador ! para eliminar null cuando estás seguro
const titulo = document.getElementById('titulo')!
// tipo: HTMLElement — ya no tiene | null

// Combinación: ! y el tipo correcto
const inputBusqueda = document.querySelector<HTMLInputElement>('#busqueda')!
// tipo: HTMLInputElement — sin null
inputBusqueda.focus()
inputBusqueda.value = ''

// Patrón recomendado: verificar + usar el tipo genérico
function activarBoton(id: string): void {
  const el = document.getElementById(id)
  if (!el) {
    console.error(\`Elemento #\${id} no encontrado\`)
    return
  }
  // El check es mejor que as — si el elemento no existe, no falla silenciosamente
  el.removeAttribute('disabled')
  el.setAttribute('aria-disabled', 'false')
}

// Cuándo preferir as vs if
// Usa if cuando: el elemento puede no existir
// Usa as cuando: SABES que siempre existe (layout principal, template fijo)
const navBar = document.querySelector('nav') as HTMLElement  // siempre existe
const modal = document.getElementById('modal-dinamico')       // puede no existir
if (modal) {
  modal.style.display = 'flex'
}`,
    keyPoints: [
      'as HTMLInputElement le dice a TypeScript que confíe en tu tipo, pero no valida en tiempo de ejecución',
      'El operador ! elimina null del tipo (non-null assertion) cuando estás seguro el valor existe',
      'Si el elemento puede no existir, usa verificación con if en lugar de type assertion',
      'Un type assertion incorrecto falla silenciosamente en TypeScript pero lanza error en el navegador',
      'Prefiere querySelector<T>() al genérico sobre as porque mantiene el null de forma explícita',
    ],
    exercise: {
      description:
        'Crea una función `inicializarApp()` que use type assertions apropiadas para: (1) el elemento principal con id "app" (siempre existe — usa as HTMLDivElement), (2) la barra de navegación con tag nav (siempre existe — usa as HTMLElement), y (3) un modal dinámico con id "modal" (puede no existir — usa verificación con if). La función debe aplicar clases y estilos a cada elemento.',
      hint: 'Para elementos que siempre existen en el layout, as es razonable. Para elementos opcionales, el if es más seguro. Documenta en comentarios por qué usas as en cada caso.',
    },
    quiz: [
      {
        question: '¿Qué hace `document.getElementById("btn") as HTMLButtonElement`?',
        options: [
          'Crea un HTMLButtonElement si no existe',
          'Le dice a TypeScript que trate el resultado como HTMLButtonElement, sin verificar en tiempo de ejecución',
          'Verifica que el elemento es un button antes de continuar',
          'Lanza un error si el elemento no es un button',
        ],
        correctAnswer: 'Le dice a TypeScript que trate el resultado como HTMLButtonElement, sin verificar en tiempo de ejecución',
        correctFeedback:
          '¡Correcto! La type assertion solo afecta al sistema de tipos de TypeScript. En tiempo de ejecución, no hay verificación. Si el elemento no existe o es del tipo incorrecto, el error ocurre cuando intentas usar el elemento.',
        incorrectFeedback:
          'Una type assertion con as solo cambia cómo TypeScript ve el tipo — no ejecuta ninguna verificación. Si el elemento es null o del tipo incorrecto, TypeScript no lo detectará. El error aparecerá en tiempo de ejecución.',
      },
      {
        question: '¿Qué hace el operador `!` en `document.getElementById("titulo")!`?',
        options: [
          'Niega el resultado del getElementById',
          'Elimina null del tipo resultante, asegurando a TypeScript que el valor no es null',
          'Convierte el elemento a HTMLInputElement',
          'Hace el elemento readonly',
        ],
        correctAnswer: 'Elimina null del tipo resultante, asegurando a TypeScript que el valor no es null',
        correctFeedback:
          '¡Exacto! El operador ! (non-null assertion) le dice a TypeScript que confíes en que el valor no es null. El tipo pasa de HTMLElement | null a HTMLElement.',
        incorrectFeedback:
          'El ! al final es el operador de aserción non-null. Le dice a TypeScript: "garantizo que esto no es null". El tipo cambia de T | null a T. Si te equivocas, el error ocurre en tiempo de ejecución.',
      },
      {
        question: '¿Cuándo es apropiado usar una type assertion con `as`?',
        options: [
          'Siempre que TypeScript dé un error',
          'Cuando sabes con certeza que el elemento existe y tiene el tipo correcto, como en elementos del layout principal',
          'Para evitar escribir if statements',
          'Nunca — siempre es mejor verificar con if',
        ],
        correctAnswer: 'Cuando sabes con certeza que el elemento existe y tiene el tipo correcto, como en elementos del layout principal',
        correctFeedback:
          '¡Perfecto! as es apropiado cuando tienes conocimiento garantizado del DOM — por ejemplo, el elemento "app" que siempre está en el HTML. Usarlo para evitar escribir if statements es un mal uso.',
        incorrectFeedback:
          'as es apropiado cuando puedes garantizar que el elemento siempre existe con el tipo correcto. Para elementos opcionales o dinámicos, la verificación con if es más segura y comunica mejor la intención.',
      },
      {
        question: '¿Qué ocurre en el navegador si haces `document.getElementById("no-existe") as HTMLButtonElement` y luego intentas usar el elemento?',
        options: [
          'TypeScript lanza un error de compilación',
          'El navegador crea el elemento automáticamente',
          'Ocurre un TypeError en tiempo de ejecución porque el elemento es null',
          'El código simplemente no hace nada',
        ],
        correctAnswer: 'Ocurre un TypeError en tiempo de ejecución porque el elemento es null',
        correctFeedback:
          '¡Correcto! TypeScript no da error porque la type assertion suprime la advertencia. Pero en el navegador, intentar acceder a propiedades de null lanza TypeError.',
        incorrectFeedback:
          'La type assertion silencia a TypeScript, pero no cambia la realidad. Si el elemento no existe, getElementById devuelve null. Intentar usar null como HTMLButtonElement en el navegador lanza un TypeError.',
      },
      {
        question: '¿Cuál es la diferencia entre `querySelector<HTMLInputElement>("#x")` y `document.getElementById("x") as HTMLInputElement`?',
        options: [
          'Son exactamente equivalentes',
          'El parámetro genérico mantiene null en el tipo (HTMLInputElement | null); as elimina el null',
          'as es solo para TypeScript antiguo',
          'El parámetro genérico convierte el elemento automáticamente',
        ],
        correctAnswer: 'El parámetro genérico mantiene null en el tipo (HTMLInputElement | null); as elimina el null',
        correctFeedback:
          '¡Exacto! querySelector<HTMLInputElement>() devuelve HTMLInputElement | null — te obliga a manejar el null. La type assertion con as elimina el null del tipo, lo cual es más riesgoso.',
        incorrectFeedback:
          'El parámetro genérico <T> en querySelector le dice el tipo pero mantiene el null: HTMLInputElement | null. La type assertion as HTMLInputElement elimina el null, lo que puede ser peligroso si el elemento puede no existir.',
      },
    ],
  },
  {
    slug: 'eventos-tipados',
    title: 'Eventos tipados',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 165,
    description:
      'Aprende a tipar eventos del navegador como click, input, submit y change.',
    explanation: `## Eventos tipados

Cuando añades un listener de eventos en TypeScript, el parámetro del evento tiene un tipo específico. TypeScript conoce la jerarquía de tipos de eventos del navegador.

### El parámetro del evento

\`\`\`typescript
document.addEventListener('click', (event) => {
  // event tiene tipo MouseEvent — TypeScript lo infiere del primer argumento
  console.log(event.clientX, event.clientY)  // ✅ propiedades de MouseEvent
})
\`\`\`

### Tipos de eventos más comunes

| Nombre del evento | Tipo de TypeScript | Propiedades clave |
|-------------------|--------------------|-------------------|
| click, dblclick   | MouseEvent | clientX, clientY, button, target |
| keydown, keyup, keypress | KeyboardEvent | key, code, ctrlKey, shiftKey |
| input, change     | InputEvent (input) o Event (change) | target |
| submit            | SubmitEvent | submitter |
| focus, blur       | FocusEvent | relatedTarget |
| wheel             | WheelEvent | deltaX, deltaY |

### Acceder al target

El tipo del \`event.target\` suele ser \`EventTarget | null\` — muy genérico. Para obtener el elemento real, debes hacer un narrowing o una type assertion:

\`\`\`typescript
document.addEventListener('click', (e) => {
  // e.target es EventTarget | null
  if (e.target instanceof HTMLButtonElement) {
    // Dentro del if, e.target es HTMLButtonElement
    e.target.disabled = true
  }
})
\`\`\`

### addEventListener con tipo explícito

\`\`\`typescript
const btn = document.querySelector<HTMLButtonElement>('button')!

btn.addEventListener('click', (e: MouseEvent) => {
  console.log(e.button)   // qué botón del mouse se presionó
  console.log(e.ctrlKey)  // si se mantuvo Ctrl
})
\`\`\``,
    codeExample: `// events.ts

// Click — MouseEvent
const boton = document.querySelector<HTMLButtonElement>('#enviar')
boton?.addEventListener('click', (e: MouseEvent) => {
  e.preventDefault()
  console.log('Clic en:', e.clientX, e.clientY)
  console.log('Ctrl presionado:', e.ctrlKey)
  // e.target es EventTarget | null — para usarlo necesitas narrowing
})

// Keydown — KeyboardEvent
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    console.log('Cerrar modal')
  }
  if (e.key === 'Enter' && e.ctrlKey) {
    console.log('Enviar formulario con Ctrl+Enter')
  }
  console.log('Código de tecla:', e.code)  // "KeyA", "ArrowUp", etc.
})

// Input — leer el valor mientras el usuario escribe
const campoBusqueda = document.querySelector<HTMLInputElement>('#busqueda')
campoBusqueda?.addEventListener('input', (e: Event) => {
  // e.target es EventTarget | null
  // Para obtener el valor, hacemos narrowing con instanceof
  const input = e.target
  if (input instanceof HTMLInputElement) {
    console.log('Buscando:', input.value)
    // input.value está disponible ✅
  }
})

// Change — cuando el valor cambia y el elemento pierde el foco
const selector = document.querySelector<HTMLSelectElement>('#pais')
selector?.addEventListener('change', (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    console.log('País seleccionado:', e.target.value)
  }
})

// Submit — envío de formulario
const formulario = document.querySelector<HTMLFormElement>('#registro')
formulario?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()  // previene la recarga de la página

  const nombre = document.querySelector<HTMLInputElement>('#nombre')?.value ?? ''
  const email = document.querySelector<HTMLInputElement>('#email')?.value ?? ''

  console.log('Enviando:', { nombre, email })
})

// Uso de currentTarget vs target
// currentTarget: el elemento al que se le añadió el listener
// target: el elemento que realmente fue clickeado (puede ser un hijo)
const lista = document.querySelector<HTMLUListElement>('ul')
lista?.addEventListener('click', (e: MouseEvent) => {
  if (e.target instanceof HTMLLIElement) {
    console.log('Item clickeado:', e.target.textContent)
  }
  // e.currentTarget aquí sería el <ul>
})`,
    keyPoints: [
      'TypeScript infiere el tipo del evento según el primer argumento de addEventListener',
      'MouseEvent tiene clientX, clientY, button, ctrlKey, etc.',
      'KeyboardEvent tiene key, code, ctrlKey, shiftKey, altKey',
      'e.target es EventTarget | null — usa instanceof para narrowing antes de acceder a propiedades',
      'e.currentTarget es el elemento al que se añadió el listener; e.target es el elemento clickeado',
    ],
    exercise: {
      description:
        'Crea una función `configurarFormularioBusqueda()` que: (1) seleccione un input con id "busqueda" y un button con id "limpiar", (2) al evento input del campo, imprima el valor en consola si no está vacío, (3) al evento keydown del campo, si la tecla es Escape limpie el valor del input, (4) al evento click del botón limpiar, ponga el valor del input en vacío y haga focus en el input. Usa instanceof para acceder al valor del target en los eventos.',
      hint: 'El evento input tiene tipo Event; el keydown tiene KeyboardEvent; el click tiene MouseEvent. Para acceder a .value del target, usa `if (e.target instanceof HTMLInputElement)`.',
    },
    quiz: [
      {
        question: '¿Qué tipo tiene el parámetro de evento en `element.addEventListener("keydown", (e) => {})`?',
        options: [
          'Event',
          'KeyboardEvent',
          'InputEvent',
          'MouseEvent',
        ],
        correctAnswer: 'KeyboardEvent',
        correctFeedback:
          '¡Correcto! TypeScript infiere el tipo del evento según el nombre del evento. "keydown" → KeyboardEvent, "click" → MouseEvent, "submit" → SubmitEvent.',
        incorrectFeedback:
          'TypeScript infiere el tipo del evento automáticamente según el nombre. "keydown" y "keyup" → KeyboardEvent, "click" y "dblclick" → MouseEvent, "submit" → SubmitEvent.',
      },
      {
        question: '¿Por qué `e.target.value` da error en TypeScript dentro de un listener de "input"?',
        options: [
          'Porque los inputs no tienen la propiedad value',
          'Porque e.target es EventTarget | null, y EventTarget no tiene la propiedad value',
          'Porque debes usar e.currentTarget en su lugar',
          'Porque el evento input no da acceso al valor',
        ],
        correctAnswer: 'Porque e.target es EventTarget | null, y EventTarget no tiene la propiedad value',
        correctFeedback:
          '¡Exacto! e.target es EventTarget | null — el tipo base de todos los elementos. EventTarget no tiene value. Debes hacer narrowing con `if (e.target instanceof HTMLInputElement)` para acceder a value.',
        incorrectFeedback:
          'e.target es siempre EventTarget | null en TypeScript. EventTarget es el tipo base de todos los elementos y no tiene propiedades como value. Necesitas narrowing con instanceof para obtener el tipo específico.',
      },
      {
        question: '¿Qué propiedad del KeyboardEvent te dice qué tecla se presionó?',
        options: [
          'keyCode (deprecated)',
          'key',
          'character',
          'button',
        ],
        correctAnswer: 'key',
        correctFeedback:
          '¡Correcto! La propiedad key es la forma moderna de obtener la tecla presionada ("a", "Enter", "Escape", "ArrowUp", etc.). keyCode es deprecated.',
        incorrectFeedback:
          'La propiedad key es la forma moderna de leer la tecla presionada. code da el código físico de la tecla ("KeyA", "Space"). keyCode es deprecated. button es de MouseEvent (qué botón del mouse).',
      },
      {
        question: '¿Cuál es la diferencia entre `e.target` y `e.currentTarget`?',
        options: [
          'Son lo mismo — ambos apuntan al mismo elemento',
          'target es el elemento que originó el evento; currentTarget es el elemento al que se añadió el listener',
          'currentTarget siempre es null',
          'target es solo para clicks; currentTarget para teclado',
        ],
        correctAnswer: 'target es el elemento que originó el evento; currentTarget es el elemento al que se añadió el listener',
        correctFeedback:
          '¡Perfecto! Si tienes un listener en un <ul> y el usuario hace click en un <li>, target es el <li> y currentTarget es el <ul>. Esto es la delegación de eventos.',
        incorrectFeedback:
          'target es el elemento que el usuario clickeó (puede ser un elemento hijo). currentTarget es el elemento al que se le añadió el addEventListener. Son diferentes en la delegación de eventos.',
      },
      {
        question: '¿Cómo prevenir el comportamiento por defecto de un formulario al enviarlo?',
        options: [
          'e.stopPropagation()',
          'e.preventDefault()',
          'return false',
          'e.cancel = true',
        ],
        correctAnswer: 'e.preventDefault()',
        correctFeedback:
          '¡Exacto! e.preventDefault() previene el comportamiento por defecto del navegador. Para un submit de formulario, evita que la página se recargue.',
        incorrectFeedback:
          'e.preventDefault() previene el comportamiento por defecto del evento. En un submit, evita la recarga de la página. e.stopPropagation() para la propagación del evento, que es diferente.',
      },
    ],
  },
  {
    slug: 'formularios-tipados',
    title: 'Formularios tipados',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 166,
    description:
      'Aprende a manejar formularios con TypeScript, obteniendo valores de inputs de forma segura.',
    explanation: `## Formularios tipados

Los formularios son uno de los usos más comunes del DOM. TypeScript ayuda a leer y validar los valores de manera segura.

### Leer valores de un formulario

La forma más directa es seleccionar cada campo y leer su valor:

\`\`\`typescript
const nombre = document.querySelector<HTMLInputElement>('#nombre')?.value ?? ''
const email = document.querySelector<HTMLInputElement>('#email')?.value ?? ''
\`\`\`

### Usando el objeto FormData

\`FormData\` es una API del navegador que lee todos los campos de un formulario por nombre:

\`\`\`typescript
const form = document.querySelector<HTMLFormElement>('form')!

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(form)

  const nombre = data.get('nombre')   // string | File | null
  const email = data.get('email')     // necesitas verificar el tipo
})
\`\`\`

FormData.get() devuelve \`string | File | null\` — necesitas verificar antes de usar.

### Definir la forma esperada del formulario

Una buena práctica es definir el tipo de los datos que esperas del formulario:

\`\`\`typescript
interface FormularioRegistro {
  nombre: string
  email: string
  password: string
}

function leerFormulario(): FormularioRegistro | null {
  const nombre = document.querySelector<HTMLInputElement>('#nombre')
  const email = document.querySelector<HTMLInputElement>('#email')
  const password = document.querySelector<HTMLInputElement>('#password')

  if (!nombre || !email || !password) return null

  return {
    nombre: nombre.value.trim(),
    email: email.value.trim(),
    password: password.value,
  }
}
\`\`\`

### Limpiar el formulario

\`\`\`typescript
const form = document.querySelector<HTMLFormElement>('form')
form?.reset()  // limpia todos los campos
\`\`\``,
    codeExample: `// forms.ts

interface DatosRegistro {
  nombre: string
  email: string
  password: string
  rol: string
}

// Función que lee el formulario y retorna los datos tipados
function leerFormularioRegistro(): DatosRegistro | null {
  const nombre = document.querySelector<HTMLInputElement>('#reg-nombre')
  const email = document.querySelector<HTMLInputElement>('#reg-email')
  const password = document.querySelector<HTMLInputElement>('#reg-password')
  const rol = document.querySelector<HTMLSelectElement>('#reg-rol')

  // Si algún campo no existe, no podemos continuar
  if (!nombre || !email || !password || !rol) {
    console.error('Faltan elementos del formulario en el DOM')
    return null
  }

  return {
    nombre: nombre.value.trim(),
    email: email.value.trim(),
    password: password.value,
    rol: rol.value,
  }
}

// Configurar el listener del formulario
const formRegistro = document.querySelector<HTMLFormElement>('#form-registro')

formRegistro?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()

  const datos = leerFormularioRegistro()
  if (!datos) {
    console.error('No se pudieron leer los datos del formulario')
    return
  }

  // Aquí datos es DatosRegistro — TypeScript conoce todos sus campos
  console.log('Nombre:', datos.nombre)
  console.log('Email:', datos.email)
  console.log('Rol:', datos.rol)

  // Enviar a la API, etc.
  // fetch('/api/registro', { method: 'POST', body: JSON.stringify(datos) })

  // Limpiar el formulario después de enviar
  formRegistro.reset()
})

// Usar FormData para leer múltiples campos a la vez
const formContacto = document.querySelector<HTMLFormElement>('#form-contacto')

formContacto?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()

  const fd = new FormData(formContacto)

  const mensaje = fd.get('mensaje')
  const asunto = fd.get('asunto')

  // FormData.get devuelve string | File | null
  if (typeof mensaje === 'string' && typeof asunto === 'string') {
    console.log('Mensaje:', mensaje)
    console.log('Asunto:', asunto)
  }
})

// Leer un checkbox
const checkTerminos = document.querySelector<HTMLInputElement>('#terminos')
const aceptado = checkTerminos?.checked ?? false
console.log('Términos aceptados:', aceptado)`,
    keyPoints: [
      'Define una interfaz para los datos del formulario para que TypeScript conozca su forma',
      'Lee cada input individualmente con querySelector<HTMLInputElement> para obtener .value tipado',
      'FormData.get() devuelve string | File | null — verifica con typeof antes de usar como string',
      'Usa .trim() para eliminar espacios al leer valores de inputs de texto',
      'form.reset() limpia todos los campos del formulario',
    ],
    exercise: {
      description:
        'Crea una interfaz `DatosProducto { nombre: string, precio: number, categoria: string, disponible: boolean }`. Luego crea una función `leerFormularioProducto(): DatosProducto | null` que lea: un input#nombre (string), un input#precio (number — usa parseFloat(input.value)), un select#categoria (string), y un input#disponible de tipo checkbox (boolean — usa .checked). Retorna null si algún elemento no existe o si el precio no es un número válido (isNaN).',
      hint: 'Para convertir el valor del input precio a número: `const precio = parseFloat(inputPrecio.value)`. Para verificar si es válido: `if (isNaN(precio)) return null`. El checkbox usa .checked (boolean), no .value.',
    },
    quiz: [
      {
        question: '¿Por qué es buena práctica definir `interface DatosFormulario { ... }` antes de leer un formulario?',
        options: [
          'TypeScript lo requiere obligatoriamente',
          'Documenta qué forma tienen los datos del formulario y TypeScript verifica que el objeto de retorno cumple esa forma',
          'Hace el código más largo',
          'Los formularios no pueden tener tipos en TypeScript',
        ],
        correctAnswer: 'Documenta qué forma tienen los datos del formulario y TypeScript verifica que el objeto de retorno cumple esa forma',
        correctFeedback:
          '¡Correcto! La interfaz documenta qué datos espera el formulario y TypeScript verifica que el objeto que retornas tenga todos los campos con los tipos correctos.',
        incorrectFeedback:
          'La interfaz sirve como documentación y verificación. TypeScript comprueba que el objeto que retornas tiene los campos y tipos correctos. Sin la interfaz, podrías olvidar campos o poner tipos incorrectos sin que TypeScript te avise.',
      },
      {
        question: '¿Qué tipo devuelve `formData.get("nombre")` de un objeto FormData?',
        options: [
          'string',
          'string | null',
          'string | File | null',
          'HTMLInputElement',
        ],
        correctAnswer: 'string | File | null',
        correctFeedback:
          '¡Exacto! FormData.get() devuelve string | File | null. El campo puede ser texto (string), un archivo (File en inputs de tipo file), o null si no existe el campo.',
        incorrectFeedback:
          'FormData.get() puede devolver string, File (si el campo es un input de archivo), o null si el campo no existe. Por eso necesitas verificar el tipo con typeof antes de usarlo como string.',
      },
      {
        question: '¿Cómo lees el valor de un checkbox en TypeScript?',
        options: [
          'input.value (devuelve "true" o "false")',
          'input.checked (devuelve boolean)',
          'input.selected',
          'input.on',
        ],
        correctAnswer: 'input.checked (devuelve boolean)',
        correctFeedback:
          '¡Correcto! Los checkboxes usan .checked (boolean), no .value. El .value de un checkbox es el string que se envía si está marcado (por defecto "on"), no el estado de marcado.',
        incorrectFeedback:
          'Los checkboxes tienen .checked (boolean: true si está marcado, false si no). El .value de un checkbox es un string que se envía en el formulario cuando está marcado (por defecto "on"), no el estado verdadero/falso.',
      },
      {
        question: '¿Qué hace `input.value.trim()`?',
        options: [
          'Elimina todos los caracteres del valor',
          'Elimina espacios al inicio y al final del string',
          'Convierte el string a minúsculas',
          'Verifica si el campo está vacío',
        ],
        correctAnswer: 'Elimina espacios al inicio y al final del string',
        correctFeedback:
          '¡Exacto! .trim() es importante para formularios: elimina espacios que el usuario puede haber escrito accidentalmente al principio o al final. "  Ana  " → "Ana".',
        incorrectFeedback:
          '.trim() elimina espacios en blanco al inicio y al final del string. Es esencial en formularios porque los usuarios suelen añadir espacios accidentalmente. "  Ana  ".trim() = "Ana".',
      },
      {
        question: '¿Por qué retornar `null` desde `leerFormulario()` cuando algún elemento no existe es mejor que usar type assertions?',
        options: [
          'No hay diferencia — ambas opciones son igualmente seguras',
          'Retornar null obliga al código que llama a manejar el caso de error; as oculta el problema silenciosamente',
          'TypeScript requiere retornar null',
          'Las type assertions no funcionan en funciones',
        ],
        correctAnswer: 'Retornar null obliga al código que llama a manejar el caso de error; as oculta el problema silenciosamente',
        correctFeedback:
          '¡Perfecto! Retornar null hace explícito que puede fallar. El código que llama a la función debe manejar el null. Con as, el error ocurre más tarde y es más difícil de diagnosticar.',
        incorrectFeedback:
          'Retornar null comunica explícitamente que la función puede fallar. El llamador debe manejar esa posibilidad. Las type assertions ocultan el problema a TypeScript pero no lo resuelven — el error aparece en tiempo de ejecución.',
      },
    ],
  },
  {
    slug: 'validaciones-formularios-typescript',
    title: 'Validaciones en formularios con TypeScript',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 167,
    description:
      'Aprende a validar campos de formulario usando tipos, narrowing y mensajes claros.',
    explanation: `## Validaciones en formularios con TypeScript

Validar formularios significa verificar que los datos ingresados son correctos antes de enviarlos. TypeScript ayuda a estructurar estas validaciones de forma ordenada y segura.

### Qué validar

- **Campos vacíos**: el usuario no llenó un campo requerido
- **Formato incorrecto**: el email no tiene @ o el precio no es un número
- **Rango inválido**: el precio es negativo o el nombre es demasiado corto
- **Confirmación**: la contraseña y su confirmación no coinciden

### Definir errores con un tipo

\`\`\`typescript
interface ErroresFormulario {
  nombre?: string
  email?: string
  password?: string
}

function validar(datos: { nombre: string; email: string; password: string }): ErroresFormulario {
  const errores: ErroresFormulario = {}

  if (datos.nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres'
  }

  if (!datos.email.includes('@')) {
    errores.email = 'El email debe incluir @'
  }

  if (datos.password.length < 6) {
    errores.password = 'La contraseña debe tener al menos 6 caracteres'
  }

  return errores
}
\`\`\`

### Mostrar errores en el DOM

\`\`\`typescript
function mostrarError(campoId: string, mensaje: string): void {
  const errorEl = document.getElementById(\`error-\${campoId}\`)
  if (errorEl) {
    errorEl.textContent = mensaje
    errorEl.style.display = 'block'
  }
}

function limpiarError(campoId: string): void {
  const errorEl = document.getElementById(\`error-\${campoId}\`)
  if (errorEl) {
    errorEl.textContent = ''
    errorEl.style.display = 'none'
  }
}
\`\`\``,
    codeExample: `// validation.ts

interface DatosLogin {
  email: string
  password: string
}

interface ErroresLogin {
  email?: string
  password?: string
  general?: string
}

// Función de validación pura — no toca el DOM
function validarLogin(datos: DatosLogin): ErroresLogin {
  const errores: ErroresLogin = {}

  if (!datos.email.trim()) {
    errores.email = 'El email es requerido'
  } else if (!datos.email.includes('@') || !datos.email.includes('.')) {
    errores.email = 'Ingresa un email válido (ejemplo@dominio.com)'
  }

  if (!datos.password) {
    errores.password = 'La contraseña es requerida'
  } else if (datos.password.length < 6) {
    errores.password = 'La contraseña debe tener al menos 6 caracteres'
  }

  return errores
}

// Helpers para mostrar/limpiar errores en el DOM
function mostrarError(id: string, mensaje: string): void {
  const el = document.getElementById(\`error-\${id}\`)
  if (el) {
    el.textContent = mensaje
    el.className = 'campo-error visible'
  }
  // Marcar el input como inválido
  const input = document.querySelector<HTMLInputElement>(\`#\${id}\`)
  input?.setAttribute('aria-invalid', 'true')
}

function limpiarError(id: string): void {
  const el = document.getElementById(\`error-\${id}\`)
  if (el) {
    el.textContent = ''
    el.className = 'campo-error'
  }
  const input = document.querySelector<HTMLInputElement>(\`#\${id}\`)
  input?.removeAttribute('aria-invalid')
}

function limpiarTodosLosErrores(): void {
  ;['email', 'password', 'general'].forEach(limpiarError)
}

// Configurar el formulario
const formLogin = document.querySelector<HTMLFormElement>('#form-login')

formLogin?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()
  limpiarTodosLosErrores()

  const emailInput = document.querySelector<HTMLInputElement>('#email')
  const passwordInput = document.querySelector<HTMLInputElement>('#password')

  if (!emailInput || !passwordInput) return

  const datos: DatosLogin = {
    email: emailInput.value.trim(),
    password: passwordInput.value,
  }

  const errores = validarLogin(datos)

  // ¿Hay errores?
  const hayErrores = Object.keys(errores).length > 0

  if (hayErrores) {
    if (errores.email) mostrarError('email', errores.email)
    if (errores.password) mostrarError('password', errores.password)
    return
  }

  // Sin errores — proceder con el envío
  console.log('Login válido:', datos.email)
})`,
    keyPoints: [
      'Separa la lógica de validación (función pura) de la presentación de errores (DOM)',
      'Define una interfaz de errores con campos opcionales para representar qué campos fallaron',
      'Limpia los errores anteriores antes de re-validar para evitar mensajes obsoletos',
      'Muestra mensajes de error claros y específicos — no solo "campo inválido"',
      'Usar aria-invalid ayuda a la accesibilidad del formulario',
    ],
    exercise: {
      description:
        'Crea las interfaces `DatosRegistro { nombre: string, email: string, password: string, confirmPassword: string }` y `ErroresRegistro { nombre?: string, email?: string, password?: string, confirmPassword?: string }`. Implementa `validarRegistro(datos: DatosRegistro): ErroresRegistro` que valide: nombre mínimo 2 caracteres, email con @, password mínimo 8 caracteres, y que password === confirmPassword. Si hay errores, el formulario no debe enviarse.',
      hint: 'Para la comparación de passwords usa `if (datos.password !== datos.confirmPassword) errores.confirmPassword = "Las contraseñas no coinciden"`. Recuerda que ErroresRegistro tiene todos los campos opcionales (?) porque no necesariamente todos fallarán.',
    },
    quiz: [
      {
        question: '¿Por qué separar la función de validación del código que manipula el DOM?',
        options: [
          'TypeScript lo requiere',
          'Hace la validación testeable de forma independiente y el código más mantenible',
          'El DOM no puede usarse dentro de funciones',
          'Las funciones de validación deben estar en archivos separados',
        ],
        correctAnswer: 'Hace la validación testeable de forma independiente y el código más mantenible',
        correctFeedback:
          '¡Correcto! Una función de validación pura (sin efectos secundarios en el DOM) puede testearse fácilmente y reutilizarse. El código de DOM puede cambiar sin afectar la lógica de validación.',
        incorrectFeedback:
          'Separar la validación del DOM sigue el principio de responsabilidad única. La función de validación es pura y testeable. El código de DOM se encarga de presentar los resultados. Ambos pueden cambiar de forma independiente.',
      },
      {
        question: '¿Por qué usar `interface ErroresFormulario { nombre?: string; email?: string }` con campos opcionales?',
        options: [
          'Para que TypeScript no valide los campos',
          'Porque los errores son opcionales — solo aparecen cuando falla esa validación específica',
          'Porque todos los campos de una interfaz deben ser opcionales',
          'Para poder usar any en los valores',
        ],
        correctAnswer: 'Porque los errores son opcionales — solo aparecen cuando falla esa validación específica',
        correctFeedback:
          '¡Exacto! Si el email es válido, el campo email no aparece en el objeto de errores. Los campos opcionales representan "este campo puede tener un error o no".',
        incorrectFeedback:
          'Los campos opcionales (?) significan que ese campo de error puede o no estar presente. Si el nombre es válido, no hay error de nombre. Solo los campos con problemas tienen entradas en el objeto de errores.',
      },
      {
        question: '¿Qué problema puede ocurrir si no limpias los errores anteriores antes de re-validar?',
        options: [
          'TypeScript lanza un error de compilación',
          'El usuario ve errores obsoletos — mensajes de errores que ya corrigió siguen visibles',
          'La validación falla siempre',
          'Los campos se resetean',
        ],
        correctAnswer: 'El usuario ve errores obsoletos — mensajes de errores que ya corrigió siguen visibles',
        correctFeedback:
          '¡Perfecto! Si no limpias los errores, el usuario puede corregir un campo y el mensaje de error viejo sigue apareciendo. Siempre limpia antes de re-validar.',
        incorrectFeedback:
          'Si no limpias los errores anteriores antes de validar de nuevo, los mensajes de error de campos ya corregidos permanecen visibles. El usuario no puede distinguir cuáles son los errores actuales.',
      },
      {
        question: '¿Cuál de estos mensajes de error es más útil para el usuario?',
        options: [
          '"Error en el campo"',
          '"Inválido"',
          '"El email debe incluir @ y un dominio válido (ejemplo: ana@mail.com)"',
          '"Campo 2 incorrecto"',
        ],
        correctAnswer: '"El email debe incluir @ y un dominio válido (ejemplo: ana@mail.com)"',
        correctFeedback:
          '¡Exacto! Un mensaje específico le dice al usuario exactamente qué está mal y qué debe corregir. Los mensajes vagos como "Error" o "Inválido" frustran al usuario.',
        incorrectFeedback:
          'Los mensajes de error deben ser específicos y orientadores. "El email debe incluir @ y un dominio válido" le dice exactamente al usuario qué debe corregir. Mensajes como "Error" o "Inválido" no ayudan.',
      },
      {
        question: '¿Cómo verificas en TypeScript si un objeto `errores: ErroresFormulario` tiene algún error?',
        options: [
          'errores.length > 0',
          'Object.keys(errores).length > 0',
          'errores !== null',
          'errores.hasErrors()',
        ],
        correctAnswer: 'Object.keys(errores).length > 0',
        correctFeedback:
          '¡Correcto! Object.keys() devuelve un array con las claves del objeto. Si la longitud es mayor que 0, hay al menos un error.',
        incorrectFeedback:
          'Para verificar si hay errores en un objeto, usa Object.keys(errores).length > 0. Esto cuenta cuántas propiedades tiene el objeto de errores. Un objeto vacío {} tiene length 0.',
      },
    ],
  },
  {
    slug: 'renderizar-elementos-dinamicos-typescript',
    title: 'Renderizar elementos dinámicos',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 168,
    description:
      'Aprende a crear y renderizar elementos HTML de forma segura usando TypeScript.',
    explanation: `## Renderizar elementos dinámicos

A veces necesitas crear elementos HTML dinámicamente — por ejemplo, una lista de productos, tarjetas de usuario, o notificaciones.

### Crear elementos con createElement

\`\`\`typescript
const div = document.createElement('div')     // HTMLDivElement
const li = document.createElement('li')       // HTMLLIElement
const button = document.createElement('button') // HTMLButtonElement

div.className = 'tarjeta'
div.textContent = 'Contenido'
\`\`\`

### Construir una tarjeta desde datos tipados

\`\`\`typescript
interface Producto {
  id: number
  nombre: string
  precio: number
  activo: boolean
}

function crearTarjetaProducto(producto: Producto): HTMLDivElement {
  const tarjeta = document.createElement('div')
  tarjeta.className = 'tarjeta'
  tarjeta.dataset.id = String(producto.id)

  const nombre = document.createElement('h3')
  nombre.textContent = producto.nombre

  const precio = document.createElement('p')
  precio.textContent = \`$\${producto.precio}\`

  tarjeta.appendChild(nombre)
  tarjeta.appendChild(precio)

  return tarjeta
}
\`\`\`

### innerHTML vs createElement

**innerHTML** es conveniente pero puede ser peligroso:
\`\`\`typescript
// ⚠️ Peligroso si texto viene del usuario — XSS
contenedor.innerHTML = \`<h3>\${nombreDeUsuario}</h3>\`

// ✅ Seguro — textContent nunca interpreta HTML
const h3 = document.createElement('h3')
h3.textContent = nombreDeUsuario  // No puede inyectar HTML
\`\`\`

Usa \`textContent\` para datos que vienen del usuario; usa \`innerHTML\` solo con HTML estático que controlas tú.`,
    codeExample: `// render.ts

interface Tarea {
  id: number
  titulo: string
  completada: boolean
  prioridad: 'alta' | 'media' | 'baja'
}

// Crear una tarjeta de tarea de forma segura
function crearTarjetaTarea(tarea: Tarea): HTMLLIElement {
  const item = document.createElement('li')
  item.className = \`tarea \${tarea.completada ? 'completada' : ''} prioridad-\${tarea.prioridad}\`
  item.dataset.id = String(tarea.id)

  // Checkbox de completada
  const check = document.createElement('input')
  check.type = 'checkbox'
  check.checked = tarea.completada
  check.id = \`tarea-\${tarea.id}\`

  // Etiqueta del título — textContent es seguro contra XSS
  const label = document.createElement('label')
  label.htmlFor = \`tarea-\${tarea.id}\`
  label.textContent = tarea.titulo  // Seguro ✅

  // Badge de prioridad
  const badge = document.createElement('span')
  badge.className = 'badge'
  badge.textContent = tarea.prioridad

  // Botón eliminar
  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = 'Eliminar'
  btnEliminar.className = 'btn-eliminar'
  btnEliminar.setAttribute('aria-label', \`Eliminar tarea: \${tarea.titulo}\`)

  // Ensamblar
  item.append(check, label, badge, btnEliminar)
  return item
}

// Renderizar lista completa
function renderizarTareas(tareas: Tarea[], contenedorId: string): void {
  const contenedor = document.getElementById(contenedorId)
  if (!contenedor) {
    console.warn(\`Contenedor #\${contenedorId} no encontrado\`)
    return
  }

  // Limpiar contenido anterior
  contenedor.textContent = ''

  if (tareas.length === 0) {
    const mensaje = document.createElement('p')
    mensaje.className = 'sin-tareas'
    mensaje.textContent = 'No hay tareas por mostrar'
    contenedor.appendChild(mensaje)
    return
  }

  const lista = document.createElement('ul')
  lista.className = 'lista-tareas'

  tareas.forEach((tarea) => {
    const item = crearTarjetaTarea(tarea)
    lista.appendChild(item)
  })

  contenedor.appendChild(lista)
}

// Uso
const tareas: Tarea[] = [
  { id: 1, titulo: 'Aprender TypeScript con DOM', completada: false, prioridad: 'alta' },
  { id: 2, titulo: 'Practicar formularios tipados', completada: true, prioridad: 'media' },
  { id: 3, titulo: 'Revisar utility types', completada: false, prioridad: 'baja' },
]

renderizarTareas(tareas, 'lista-principal')`,
    keyPoints: [
      'createElement devuelve el tipo específico del tag (HTMLDivElement, HTMLButtonElement, etc.)',
      'Usa textContent para texto que viene de datos del usuario — nunca innerHTML con datos externos',
      'innerHTML puede ser peligroso con datos del usuario (XSS); úsalo solo con HTML estático',
      'Limpia el contenedor con contenedor.textContent = "" antes de re-renderizar',
      'dataset permite guardar datos en atributos HTML de forma tipada',
    ],
    exercise: {
      description:
        'Crea una función `renderizarProductos(productos: { id: number, nombre: string, precio: number, imagen: string | null }[], contenedorId: string): void` que cree una tarjeta HTML para cada producto con: un div.tarjeta-producto, una imagen (si imagen es null usa "/placeholder.jpg"), el nombre como h3 usando textContent (no innerHTML), el precio formateado como "$X.XX", y un botón "Agregar al carrito" con dataset.productId = producto.id. Si no hay productos, muestra un mensaje "Sin productos disponibles".',
      hint: 'Para la imagen null: `img.src = producto.imagen ?? "/placeholder.jpg"`. Para el precio: `precio.textContent = \`$\${producto.precio.toFixed(2)}\``. Recuerda usar textContent para el nombre, no innerHTML.',
    },
    quiz: [
      {
        question: '¿Por qué es más seguro usar `element.textContent = datos` que `element.innerHTML = datos`?',
        options: [
          'textContent es más rápido que innerHTML',
          'textContent trata el valor como texto plano y no interpreta HTML, previniendo inyección de HTML/XSS',
          'innerHTML no funciona en TypeScript',
          'No hay diferencia de seguridad entre los dos',
        ],
        correctAnswer: 'textContent trata el valor como texto plano y no interpreta HTML, previniendo inyección de HTML/XSS',
        correctFeedback:
          '¡Correcto! Si un atacante ingresa "<script>alerta("hackeado")</script>" como nombre de usuario, textContent lo muestra como texto literal. innerHTML lo ejecutaría como HTML.',
        incorrectFeedback:
          'textContent siempre trata el valor como texto — nunca como HTML. innerHTML interpreta el string como HTML. Si los datos vienen del usuario, innerHTML puede ejecutar código malicioso (XSS).',
      },
      {
        question: '¿Qué tipo devuelve `document.createElement("li")`?',
        options: [
          'HTMLElement',
          'HTMLListElement',
          'HTMLLIElement',
          'Element',
        ],
        correctAnswer: 'HTMLLIElement',
        correctFeedback:
          '¡Exacto! TypeScript infiere HTMLLIElement para "li". Cada tag tiene su tipo específico: "div" → HTMLDivElement, "button" → HTMLButtonElement, etc.',
        incorrectFeedback:
          'createElement infiere el tipo específico del elemento. "li" → HTMLLIElement, "div" → HTMLDivElement, "form" → HTMLFormElement. No el tipo genérico HTMLElement.',
      },
      {
        question: '¿Cuál es la forma correcta de limpiar un contenedor antes de re-renderizar?',
        options: [
          'contenedor.clear()',
          'contenedor.textContent = ""',
          'contenedor.innerHTML = null',
          'delete contenedor.children',
        ],
        correctAnswer: 'contenedor.textContent = ""',
        correctFeedback:
          '¡Perfecto! Asignar textContent a cadena vacía elimina todo el contenido del elemento de forma limpia. También funciona innerHTML = "" pero textContent es más semántico para este propósito.',
        incorrectFeedback:
          'La forma más limpia de vaciar un elemento es `contenedor.textContent = ""`. Esto elimina todos los nodos hijo. También puedes usar innerHTML = "" pero textContent transmite mejor la intención.',
      },
      {
        question: '¿Para qué sirve `element.dataset.id = "123"` al crear un elemento dinámico?',
        options: [
          'Para cambiar el id del elemento',
          'Para guardar datos en un atributo HTML (data-id) que se puede leer después en los eventos',
          'Para hacer el elemento seleccionable por id',
          'Para TypeScript, dataset no existe',
        ],
        correctAnswer: 'Para guardar datos en un atributo HTML (data-id) que se puede leer después en los eventos',
        correctFeedback:
          '¡Correcto! dataset guarda datos en atributos HTML data-*. Cuando el usuario hace click en el elemento, puedes leer dataset.id para saber a qué elemento corresponde.',
        incorrectFeedback:
          'dataset permite guardar datos personalizados en atributos HTML data-*. `element.dataset.id = "123"` crea el atributo data-id="123". En los event listeners puedes leer `(e.target as HTMLElement).dataset.id` para identificar el elemento.',
      },
      {
        question: '¿Por qué usar `element.append(hijo1, hijo2, hijo3)` en lugar de múltiples `appendChild`?',
        options: [
          'append no existe en TypeScript',
          'append acepta múltiples nodos o strings en una sola llamada, lo que reduce el código',
          'appendChild es más lento que append',
          'Son exactamente equivalentes en todos los casos',
        ],
        correctAnswer: 'append acepta múltiples nodos o strings en una sola llamada, lo que reduce el código',
        correctFeedback:
          '¡Exacto! append es más flexible: acepta múltiples argumentos y también strings (que convierte en nodos de texto). appendChild solo acepta un nodo a la vez.',
        incorrectFeedback:
          'append es una API más moderna que acepta múltiples nodos a la vez y también strings. `element.append(h3, p, btn)` es equivalente a tres llamadas a appendChild pero más conciso.',
      },
    ],
  },
  {
    slug: 'errores-typescript-dom',
    title: 'Errores comunes con TypeScript y DOM',
    module: 'TypeScript con DOM',
    moduleNumber: 21,
    order: 169,
    description:
      'Aprende a evitar errores como ignorar null, usar type assertions innecesarias o confundir tipos de elementos HTML.',
    explanation: `## Errores comunes con TypeScript y DOM

Estos son los errores más frecuentes que cometen los desarrolladores cuando empiezan a usar TypeScript con el DOM.

### Error 1: Ignorar null con type assertions innecesarias

\`\`\`typescript
// ❌ Problemático — si el elemento no existe, falla en tiempo de ejecución
const btn = document.getElementById('btn') as HTMLButtonElement
btn.click()  // TypeError si btn es null

// ✅ Correcto — verificar antes
const btn = document.getElementById('btn')
if (btn instanceof HTMLButtonElement) {
  btn.click()
}
\`\`\`

### Error 2: Confundir el tipo del evento target

\`\`\`typescript
// ❌ Error — e.target no tiene .value
document.addEventListener('input', (e) => {
  console.log(e.target.value)  // Error: target es EventTarget, no HTMLInputElement
})

// ✅ Correcto
document.addEventListener('input', (e) => {
  if (e.target instanceof HTMLInputElement) {
    console.log(e.target.value)  // ✅
  }
})
\`\`\`

### Error 3: Usar el tipo incorrecto para un elemento

\`\`\`typescript
// ❌ Incorrecto — value no existe en HTMLElement
const el = document.getElementById('email') as HTMLElement
el.value  // Error en TypeScript

// ✅ Correcto — usar el tipo específico
const el = document.querySelector<HTMLInputElement>('#email')
if (el) console.log(el.value)
\`\`\`

### Error 4: innerHTML con datos del usuario

\`\`\`typescript
// ❌ Peligroso — XSS si nombreUsuario contiene HTML malicioso
div.innerHTML = \`<h2>\${nombreUsuario}</h2>\`

// ✅ Seguro
const h2 = document.createElement('h2')
h2.textContent = nombreUsuario
div.appendChild(h2)
\`\`\`

### Error 5: Olvidar que querySelectorAll no devuelve un array

\`\`\`typescript
// ❌ NodeList no tiene .map nativo en todos los contextos
const items = document.querySelectorAll('li')
items.map(item => item.textContent)  // Puede fallar según el entorno

// ✅ Convertir a array primero
const items = Array.from(document.querySelectorAll('li'))
items.map(item => item.textContent)  // ✅ Array tiene .map
\`\`\``,
    codeExample: `// dom-errors.ts — errores comunes y sus correcciones

// ❌ Error 1: Ignorar null
/*
const titulo = document.getElementById('titulo') as HTMLHeadingElement
titulo.textContent = 'Hola'  // ¿Y si titulo es null?
*/

// ✅ Corrección: verificar antes o early return
function actualizarTitulo(texto: string): void {
  const titulo = document.getElementById('titulo')
  if (!titulo) {
    console.warn('No se encontró el elemento #titulo')
    return
  }
  titulo.textContent = texto
}

// ❌ Error 2: Acceder a .value sin narrowing
/*
document.querySelector('#buscar')?.addEventListener('input', (e) => {
  console.log(e.target.value)  // Error: target es EventTarget
})
*/

// ✅ Corrección: instanceof para narrowing
document.querySelector('#buscar')?.addEventListener('input', (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    console.log('Buscando:', e.target.value)  // ✅
  }
})

// ❌ Error 3: Tipo genérico cuando necesitas uno específico
/*
const form = document.getElementById('mi-form') as HTMLElement
form.reset()  // Error: reset() no existe en HTMLElement
*/

// ✅ Corrección: tipo específico correcto
const form = document.querySelector<HTMLFormElement>('#mi-form')
form?.reset()  // ✅ reset() existe en HTMLFormElement

// ❌ Error 4: innerHTML con datos externos
/*
const nombre = usuarioIngresado  // Podría ser "<script>alert('xss')</script>"
div.innerHTML = \`<p>Bienvenido, \${nombre}</p>\`  // Peligroso!
*/

// ✅ Corrección: textContent para datos externos
function mostrarBienvenida(nombre: string): void {
  const bienvenida = document.getElementById('bienvenida')
  if (!bienvenida) return

  const p = document.createElement('p')
  p.textContent = \`Bienvenido, \${nombre}\`  // Seguro ✅
  bienvenida.appendChild(p)
}

// ❌ Error 5: .map en NodeList
/*
const botones = document.querySelectorAll('button')
const textos = botones.map(b => b.textContent)  // Error en algunos entornos
*/

// ✅ Corrección: convertir a array
const botones = Array.from(document.querySelectorAll<HTMLButtonElement>('button'))
const textos = botones.map((b) => b.textContent ?? '')  // ✅ Array tiene .map

// ❌ Error 6: Acceder a propiedades antes de que el DOM esté listo
/*
const btn = document.getElementById('btn')  // Si el script está en <head>, el DOM no está listo
*/

// ✅ Corrección: esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn')
  btn?.addEventListener('click', () => console.log('click'))
})`,
    keyPoints: [
      'Verifica null antes de usar elementos — no uses as para silenciar el error sin verificar',
      'e.target es EventTarget | null — usa instanceof para acceder a propiedades específicas',
      'Usa el tipo específico correcto: querySelector<HTMLInputElement> para inputs, etc.',
      'Nunca uses innerHTML con datos del usuario — siempre textContent para datos externos',
      'NodeList no es un array; usa Array.from() si necesitas métodos como .map o .filter',
    ],
    exercise: {
      description:
        'Revisa este código con errores y corrígelos: `const btn = document.getElementById("enviar") as HTMLButtonElement; btn.disabled = true; document.addEventListener("keyup", (e) => { console.log(e.target.value) }); const items = document.querySelectorAll("li"); const textos = items.map(i => i.textContent);`. Identifica y corrige los 3 errores.',
      hint: 'Error 1: btn puede ser null y type assertion no es suficiente — verifica con if. Error 2: e.target necesita narrowing con instanceof HTMLInputElement para acceder a .value. Error 3: NodeList no tiene .map — usa Array.from(items).map(...).',
    },
    quiz: [
      {
        question: '¿Por qué `document.querySelectorAll("li").map(...)` puede fallar?',
        options: [
          'querySelectorAll no encuentra elementos li',
          'NodeList no tiene el método .map en todos los entornos como lo tiene Array',
          'TypeScript no permite usar .map en el DOM',
          '.map solo funciona con getElementsByTagName',
        ],
        correctAnswer: 'NodeList no tiene el método .map en todos los entornos como lo tiene Array',
        correctFeedback:
          '¡Correcto! NodeList no es un array real. Aunque en navegadores modernos tiene forEach, no tiene .map, .filter, .reduce. Usa Array.from() primero para convertirlo.',
        incorrectFeedback:
          'NodeList se parece a un array pero no lo es. No tiene métodos como .map, .filter, .reduce. Usa Array.from(document.querySelectorAll("li")).map(...) para convertirlo a un array real primero.',
      },
      {
        question: '¿Qué tipo tiene `e.target` dentro de un addEventListener?',
        options: [
          'HTMLElement',
          'Element',
          'EventTarget | null',
          'HTMLInputElement',
        ],
        correctAnswer: 'EventTarget | null',
        correctFeedback:
          '¡Exacto! event.target siempre es EventTarget | null en TypeScript, sin importar el tipo de evento. Debes usar instanceof para acceder a propiedades específicas del elemento.',
        incorrectFeedback:
          'event.target siempre tiene tipo EventTarget | null — el tipo base de todos los elementos del DOM. Para acceder a propiedades específicas como .value, debes hacer narrowing con instanceof HTMLInputElement.',
      },
      {
        question: '¿Qué error puede ocurrir si usas `div.innerHTML = \`<h1>${userInput}</h1>\`` con datos del usuario?',
        options: [
          'TypeError porque innerHTML no acepta template strings',
          'XSS (Cross-Site Scripting) si userInput contiene etiquetas HTML o scripts maliciosos',
          'El div desaparece del DOM',
          'TypeScript lanza un error de compilación',
        ],
        correctAnswer: 'XSS (Cross-Site Scripting) si userInput contiene etiquetas HTML o scripts maliciosos',
        correctFeedback:
          '¡Perfecto! Si userInput contiene `<script>alert("hackeado")</script>`, innerHTML lo ejecutará como código. Siempre usa textContent para datos del usuario.',
        incorrectFeedback:
          'innerHTML interpreta el string como HTML. Si un usuario malicioso ingresa "<script>...</script>", ese script se ejecuta. Esto se llama XSS. Usa textContent para datos del usuario — lo trata como texto, no como HTML.',
      },
      {
        question: '¿Cuál es el error en `const btn = document.getElementById("btn") as HTMLButtonElement; btn.disabled = true;`?',
        options: [
          'disabled no existe en HTMLButtonElement',
          'Si btn no existe en el DOM, btn será null y as no lo verifica — acceder a .disabled lanzará TypeError',
          'getElementById no funciona con buttons',
          'Necesitas usar querySelector en su lugar',
        ],
        correctAnswer: 'Si btn no existe en el DOM, btn será null y as no lo verifica — acceder a .disabled lanzará TypeError',
        correctFeedback:
          '¡Correcto! La type assertion as HTMLButtonElement dice a TypeScript que confíe en el tipo, pero si el elemento es null en tiempo de ejecución, acceder a .disabled lanza un TypeError.',
        incorrectFeedback:
          'as HTMLButtonElement suprime la advertencia de TypeScript sobre null. Pero si el elemento realmente no existe, getElementById devuelve null y acceder a .disabled en null lanza TypeError. Debes verificar con if antes.',
      },
      {
        question: '¿Cuándo es apropiado usar `DOMContentLoaded` para inicializar código del DOM?',
        options: [
          'Nunca — el DOM siempre está disponible',
          'Cuando el script está en el <head> o antes de los elementos HTML — el DOM puede no estar listo',
          'Solo en aplicaciones TypeScript avanzadas',
          'Siempre, sin excepción',
        ],
        correctAnswer: 'Cuando el script está en el <head> o antes de los elementos HTML — el DOM puede no estar listo',
        correctFeedback:
          '¡Exacto! Si tu script está antes de los elementos en el HTML, el DOM no está completamente cargado cuando el script ejecuta. DOMContentLoaded garantiza que el HTML está listo.',
        incorrectFeedback:
          'Si tu script está en el <head> o antes de los elementos que selecciona, los elementos no existen aún cuando el script se ejecuta. Usa DOMContentLoaded o coloca el script justo antes del </body>.',
      },
    ],
  },
]

export const tsModule21: Module = {
  number: 21,
  title: 'TypeScript con DOM',
  level: 'nivel5',
  lessons: lessonsTsModule21,
}
