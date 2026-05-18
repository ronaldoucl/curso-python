import type { Lesson, Module } from '@/types'

export const lessonsJsModule30: Lesson[] = [
  {
    slug: 'proyecto-final-definir',
    title: 'Definir el proyecto final',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 232,
    description: 'Elige y define una aplicación final que combine DOM, eventos, funciones, arrays, objetos, localStorage, APIs y buenas prácticas.',
    explanation: `El proyecto final consolida todo lo aprendido en el curso. La clave es elegir algo concreto, manejable y que uses varias de las técnicas vistas.

**¿Qué proyecto elegir?**
Elige uno que te motive y que cumpla estos criterios:
- Tiene al menos 3 funcionalidades distintas
- Usa el DOM para mostrar datos
- Necesita guardar datos (localStorage)
- Puede conectarse a una API pública (opcional pero recomendado)
- Puede terminarse en 1-2 semanas de trabajo

**Ideas de proyectos adecuados:**

| Proyecto | DOM | Storage | API |
|----------|-----|---------|-----|
| Task App | ✓ | ✓ | Opcional |
| Buscador de películas | ✓ | ✓ Favoritos | ✓ (TMDB) |
| App de clima | ✓ | ✓ Ciudades | ✓ (Open Meteo) |
| Rastreador de gastos | ✓ | ✓ | ✗ |
| Quiz de trivia | ✓ | ✓ Puntuación | ✓ (Open Trivia) |
| Notas con etiquetas | ✓ | ✓ | ✗ |

**Cómo definir tu proyecto:**
1. **Nombre:** App de seguimiento de gastos
2. **Descripción breve:** App para registrar, categorizar y visualizar gastos personales
3. **Usuario objetivo:** Persona que quiere controlar sus finanzas
4. **Funcionalidades principales:** agregar gasto, ver lista, ver totales por categoría
5. **Tecnologías:** HTML, CSS, JavaScript vanilla, Vite, localStorage

**Proyectos a evitar:**
- Demasiado grandes (redes sociales, e-commerce completo)
- Que requieran API con clave de pago
- Que necesiten backend o base de datos`,
    codeExample: `// Definición formal del proyecto:

/*
  PROYECTO: Expense Tracker (Rastreador de Gastos)

  DESCRIPCIÓN:
  App web para registrar gastos personales, categorizarlos y
  ver resúmenes por categoría o por mes.

  FUNCIONALIDADES:
  1. Agregar un gasto (monto, descripción, categoría, fecha)
  2. Ver lista de gastos del mes actual
  3. Eliminar un gasto
  4. Ver total gastado por categoría
  5. Persistencia con localStorage (sin registrarse)

  TECNOLOGÍAS:
  - HTML/CSS vanilla
  - JavaScript (Vite)
  - localStorage para persistencia

  ESTRUCTURA DE DATOS:
  const gasto = {
    id: Date.now(),
    monto: 150.50,
    descripcion: 'Supermercado',
    categoria: 'alimentación',
    fecha: '2026-05-17'
  }

  CONSIDERACIONES:
  - No se conecta a APIs externas (datos completamente locales)
  - El usuario no necesita cuenta ni registro
  - Los datos se mantienen al recargar la página
  - Interfaz simple y usable en desktop
*/`,
    keyPoints: [
      'El proyecto final debe ser manejable: 3-5 funcionalidades bien hechas',
      'Debe combinar DOM, eventos, arrays, objetos y localStorage',
      'Elige un proyecto que te motive: lo harás mejor',
      'Evita proyectos que requieran API keys de pago o backend',
      'Define por escrito: nombre, descripción, funcionalidades y tecnologías',
      'La estructura de datos es la base del proyecto: defínela antes de programar',
    ],
    exercise: {
      description: 'Elige tu proyecto final y escribe una definición formal como la del ejemplo: nombre, descripción, 4-5 funcionalidades concretas, tecnologías y estructura de datos principal. Guárdalo como comentario en un archivo README.md en la raíz del proyecto.',
      hint: 'La estructura de datos es clave. Antes de escribir código, decide cómo vas a representar los datos: ¿qué campos tiene cada gasto/tarea/nota? ¿Cómo los vas a almacenar en un array?',
    },
    quiz: [
      {
        question: '¿Cuántas funcionalidades principales debería tener el proyecto final?',
        options: [
          'Solo 1, para que sea manejable',
          'Entre 3 y 5 funcionalidades bien implementadas',
          'Mínimo 15 funcionalidades para que sea completo',
          'Tantas como sea posible',
        ],
        correctAnswer: 'Entre 3 y 5 funcionalidades bien implementadas',
        correctFeedback: 'Correcto. 3-5 funcionalidades bien hechas son mejor que 15 a medias. El objetivo es consolidar habilidades, no hacer el proyecto más grande posible.',
        incorrectFeedback: 'Un proyecto con pocas funcionalidades bien hechas es mejor que uno con muchas a medias. 3-5 funcionalidades te permiten aplicar todo lo aprendido sin que el proyecto se vuelva inmanejable.',
      },
      {
        question: '¿Por qué se recomienda evitar APIs que requieren claves de pago?',
        options: [
          'Porque las APIs de pago son siempre inseguras',
          'Porque exponer claves de pago en el frontend comprometería la seguridad y generaría costos',
          'Porque JavaScript no puede hacer peticiones a APIs de pago',
          'Porque las APIs gratuitas son siempre de mejor calidad',
        ],
        correctAnswer: 'Porque exponer claves de pago en el frontend comprometería la seguridad y generaría costos',
        correctFeedback: 'Correcto. Las API keys de servicios de pago en el frontend son visibles para cualquier usuario. Alguien podría usarlas y generar costos en tu cuenta. Usa siempre APIs públicas gratuitas para proyectos frontend.',
        incorrectFeedback: 'JavaScript puede hacer peticiones a cualquier API. El problema es la seguridad: poner una clave de pago en el frontend la expone a todos los usuarios, quienes podrían usarla generando costos inesperados.',
      },
      {
        question: '¿Por qué es importante definir la estructura de datos antes de programar?',
        options: [
          'Porque es obligatorio para que Vite funcione',
          'Porque la estructura de datos es la base de toda la lógica y el almacenamiento',
          'Porque los navegadores requieren conocer los datos de antemano',
          'Porque npm instala los paquetes según la estructura de datos',
        ],
        correctAnswer: 'Porque la estructura de datos es la base de toda la lógica y el almacenamiento',
        correctFeedback: 'Correcto. Si no defines bien cómo se verá un gasto/tarea/nota, tendrás que reescribir múltiples funciones después. La estructura de datos guía toda la implementación.',
        incorrectFeedback: 'La estructura de datos es fundamental porque todo el código la usa: guardar en localStorage, mostrar en el DOM, filtrar, calcular totales. Cambiarla después requiere modificar todo el código.',
      },
    ],
  },
  {
    slug: 'proyecto-final-funcionalidades',
    title: 'Diseñar funcionalidades principales',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 233,
    description: 'Aprende a dividir el proyecto en funcionalidades pequeñas antes de empezar a programar.',
    explanation: `Dividir el proyecto en funcionalidades pequeñas antes de programar te permite avanzar de forma ordenada y medir el progreso.

**Técnica: descomposición de funcionalidades**
1. Lista todas las funcionalidades que quieres
2. Ordénalas por prioridad (¿cuáles son esenciales?)
3. Divídelas en tareas técnicas concretas
4. Empieza por las más simples que desbloquean a las otras

**Ejemplo: Expense Tracker**

**Funcionalidad 1: Agregar gasto**
- [ ] Crear formulario HTML (monto, descripción, categoría, fecha)
- [ ] Validar campos antes de guardar
- [ ] Crear función crearGasto(datos)
- [ ] Agregar al array de gastos
- [ ] Guardar en localStorage
- [ ] Actualizar la lista en pantalla

**Funcionalidad 2: Ver lista de gastos**
- [ ] Crear función renderizarGastos(gastos, contenedor)
- [ ] Mostrar monto, descripción, categoría y fecha
- [ ] Botón de eliminar en cada gasto
- [ ] Estado vacío cuando no hay gastos

**Prioridades:**
- **P0 (obligatorio):** agregar, ver, eliminar
- **P1 (importante):** filtrar por categoría, totales
- **P2 (extra):** gráficos, exportar, búsqueda

Empieza siempre por P0. Si el tiempo es limitado, P1 y P2 son mejoras.`,
    codeExample: `// Diseño de funcionalidades: lista de tareas técnicas

/*
  EXPENSE TRACKER - Funcionalidades y tareas

  == FUNCIONALIDAD 1: Agregar gasto ==
  Archivo: src/components/form.js
  - crearGasto({ monto, descripcion, categoria, fecha }) → objeto gasto
  - validarGasto(datos) → { valido: bool, errores: string[] }
  - manejarEnvioFormulario(evento)

  == FUNCIONALIDAD 2: Ver gastos ==
  Archivo: src/components/lista.js
  - renderizarGastos(gastos, contenedor)
  - renderizarItemGasto(gasto) → elemento DOM
  - mostrarEstadoVacio(contenedor)

  == FUNCIONALIDAD 3: Eliminar gasto ==
  Integrada en: src/components/lista.js
  - eliminarGasto(gastos, id) → nuevos gastos
  - manejarEliminar(id)

  == FUNCIONALIDAD 4: Totales por categoría ==
  Archivo: src/utils/calculos.js
  - calcularTotalPorCategoria(gastos) → { categoria: total }
  - calcularTotalGeneral(gastos) → número

  == FUNCIONALIDAD 5: Persistencia ==
  Archivo: src/utils/storage.js
  - guardarGastos(gastos)
  - cargarGastos() → gastos[]

  == PUNTO DE ENTRADA ==
  Archivo: src/main.js
  - Inicializar app
  - Conectar formulario → lista → storage
*/`,
    keyPoints: [
      'Divide cada funcionalidad en tareas técnicas concretas antes de programar',
      'Ordena por prioridad: P0 (obligatorio), P1 (importante), P2 (extra)',
      'Empieza siempre por las funcionalidades P0 más simples',
      'Asigna cada grupo de funciones a un archivo según su responsabilidad',
      'Las tareas concretas son verificables: sabes cuándo están hechas',
      'El diseño de funcionalidades te permite estimar el tiempo del proyecto',
    ],
    exercise: {
      description: 'Para tu proyecto definido en la lección anterior, crea una lista de funcionalidades dividida en P0, P1 y P2. Para cada funcionalidad P0, lista las tareas técnicas concretas (funciones a crear, archivos donde irán, elementos DOM necesarios).',
      hint: 'Sé específico en las tareas: no "hacer el formulario" sino "crear función validarFormulario(datos) que devuelve {valido, errores}" y "crear función manejarEnvio(evento)".',
    },
    quiz: [
      {
        question: '¿Cuál es la ventaja de dividir el proyecto en tareas técnicas concretas antes de programar?',
        options: [
          'Hace que el código se ejecute más rápido',
          'Permite avanzar ordenadamente y saber exactamente cuándo está terminado',
          'Reduce el número de líneas de código necesarias',
          'Hace innecesario usar Git',
        ],
        correctAnswer: 'Permite avanzar ordenadamente y saber exactamente cuándo está terminado',
        correctFeedback: 'Correcto. Con tareas concretas puedes marcarlas como hechas, medir el progreso y saber exactamente qué queda por hacer.',
        incorrectFeedback: 'Las tareas concretas no afectan el rendimiento del código, pero sí organizan el trabajo. Puedes marcar cada tarea como completada, saber qué falta y evitar divagar entre funcionalidades.',
      },
      {
        question: '¿Qué significa P0 en la priorización de funcionalidades?',
        options: [
          'La funcionalidad más difícil técnicamente',
          'Las funcionalidades obligatorias sin las cuales el proyecto no tiene sentido',
          'Las funcionalidades que pueden esperar a una versión futura',
          'La primera funcionalidad que se implementó',
        ],
        correctAnswer: 'Las funcionalidades obligatorias sin las cuales el proyecto no tiene sentido',
        correctFeedback: 'Correcto. P0 son las funcionalidades core: sin ellas, el proyecto no cumple su propósito básico. Para un task app, P0 es agregar y ver tareas.',
        incorrectFeedback: 'P0 no indica dificultad ni orden de implementación. Son las funcionalidades que definen el producto: sin ellas, no tiene sentido. Para un tracker de gastos, P0 es agregar y ver gastos.',
      },
    ],
  },
  {
    slug: 'proyecto-final-estructura',
    title: 'Crear estructura del proyecto',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 234,
    description: 'Crea la estructura inicial del proyecto con carpetas, archivos, Vite y módulos.',
    explanation: `La estructura de carpetas es la arquitectura visible del proyecto. Una buena estructura facilita encontrar y modificar el código.

**Estructura recomendada para el proyecto final:**
\`\`\`
mi-proyecto/
├── index.html              ← HTML principal
├── package.json            ← configuración npm
├── vite.config.js          ← configuración Vite (opcional)
├── public/
│   └── favicon.ico
└── src/
    ├── main.js             ← punto de entrada JavaScript
    ├── style.css           ← estilos globales
    ├── utils/
    │   ├── storage.js      ← localStorage
    │   └── helpers.js      ← funciones auxiliares generales
    ├── components/
    │   ├── form.js         ← lógica del formulario
    │   ├── list.js         ← renderizado de lista
    │   └── summary.js      ← totales/resumen
    └── data/
        └── categories.js   ← datos estáticos (categorías, etc.)
\`\`\`

**Pasos para crear la estructura:**
\`\`\`
1. npm create vite@latest mi-proyecto -- --template vanilla
2. cd mi-proyecto
3. npm install
4. mkdir src/utils src/components src/data
5. Crear los archivos principales vacíos
6. npm run dev para verificar que todo arranca
\`\`\`

**Principios de la estructura:**
- Cada carpeta tiene un propósito claro
- Los archivos dentro de una carpeta tienen responsabilidades similares
- main.js importa de components/ y utils/
- Los components/ importan de utils/`,
    codeExample: `// index.html: estructura base del proyecto
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Expense Tracker</title>
</head>
<body>
  <header>
    <h1>Mis Gastos</h1>
  </header>
  <main>
    <section id="form-section">
      <!-- Formulario aquí -->
    </section>
    <section id="summary-section">
      <!-- Resumen aquí -->
    </section>
    <section id="list-section">
      <!-- Lista de gastos aquí -->
    </section>
  </main>
  <script type="module" src="/src/main.js"></script>
</body>
</html>

// src/main.js: punto de entrada
import { inicializarFormulario } from './components/form.js'
import { renderizarLista } from './components/list.js'
import { cargarGastos } from './utils/storage.js'
import './style.css'

function iniciarApp() {
  const gastos = cargarGastos()
  inicializarFormulario()
  renderizarLista(gastos)
}

iniciarApp()

// src/utils/storage.js: placeholder inicial
export function cargarGastos() {
  return []
}

export function guardarGastos(gastos) {
  // TODO: implementar
}`,
    keyPoints: [
      'Crea la estructura de carpetas antes de escribir la lógica',
      'utils/ para funciones reutilizables, components/ para UI, data/ para datos estáticos',
      'main.js es el orquestador que conecta todos los módulos',
      'Empieza con archivos placeholder vacíos y luego llena con lógica real',
      'Verifica que npm run dev arranca correctamente antes de agregar lógica',
      'La estructura definida desde el inicio evita el caos de todo en un archivo',
    ],
    exercise: {
      description: 'Crea la estructura de tu proyecto: crea el proyecto con Vite, crea las carpetas src/utils, src/components, src/data. Crea los archivos vacíos según las funcionalidades que definiste. Verifica que npm run dev funciona sin errores.',
      hint: 'Puedes crear carpetas con mkdir src/utils en la terminal (o desde el explorador de archivos). Crea archivos .js vacíos con export function placeholder() {} para que los imports funcionen desde el inicio.',
    },
    quiz: [
      {
        question: '¿Cuál es el propósito de la carpeta utils/ en la estructura del proyecto?',
        options: [
          'Guardar las imágenes del proyecto',
          'Contener funciones reutilizables sin acoplamiento a la UI',
          'Almacenar la configuración de Vite',
          'Guardar los archivos de testing',
        ],
        correctAnswer: 'Contener funciones reutilizables sin acoplamiento a la UI',
        correctFeedback: 'Correcto. utils/ contiene funciones genéricas: storage, fechas, cálculos. No dependen del DOM y pueden usarse desde cualquier parte del proyecto.',
        incorrectFeedback: 'utils/ es para funciones reutilizables sin acoplamiento a la interfaz: storage.js, helpers de fechas, cálculos matemáticos. No modifican el DOM directamente.',
      },
      {
        question: '¿Por qué conviene crear archivos placeholder vacíos al inicio?',
        options: [
          'Para que los tests pasen aunque no estén implementados',
          'Para que los imports funcionen desde el principio sin errores',
          'Porque Vite requiere que todos los archivos existan antes de arrancar',
          'Para que Git registre los archivos',
        ],
        correctAnswer: 'Para que los imports funcionen desde el principio sin errores',
        correctFeedback: 'Correcto. Si main.js importa de components/form.js pero ese archivo no existe, obtienes un error de import. Los placeholders vacíos permiten que el proyecto cargue mientras vas implementando.',
        incorrectFeedback: 'Los placeholders permiten que los imports funcionen desde el inicio. Sin ellos, el servidor de Vite mostraría errores de "cannot find module" para cada archivo que aún no existe.',
      },
    ],
  },
  {
    slug: 'proyecto-final-interfaz-base',
    title: 'Crear la interfaz base',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 235,
    description: 'Crea la estructura HTML y estilos iniciales para que la app sea clara y usable.',
    explanation: `La interfaz base es el HTML y CSS que define la apariencia de la aplicación antes de agregar la lógica JavaScript.

**Principios de la interfaz base:**
1. **HTML semántico:** usa las etiquetas correctas (form, section, article, button)
2. **IDs para JavaScript, clases para CSS:** los elementos que necesita JS tienen id, los estilos usan class
3. **Estructura clara:** el usuario entiende la jerarquía de información
4. **Mobile-friendly básico:** con viewport meta y flexbox/grid simples

**Partes típicas de la interfaz:**
- **Header:** nombre de la app, posiblemente estadísticas
- **Formulario:** para agregar nuevos items
- **Lista:** donde se muestran los datos
- **Estado vacío:** mensaje cuando no hay datos
- **Resumen:** totales, estadísticas

**CSS básico recomendado:**
\`\`\`css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, sans-serif;
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
}
\`\`\`

**¿Debo hacer diseño perfecto desde el inicio?**
No. La interfaz base solo necesita ser **funcional y clara**. El diseño se puede mejorar después de que la lógica funcione.`,
    codeExample: `<!-- index.html: interfaz base del Expense Tracker -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Expense Tracker</title>
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body>
  <div class="app">
    <header class="app-header">
      <h1>Mis Gastos</h1>
      <p class="app-subtitle">Controla tus finanzas personales</p>
    </header>

    <!-- Formulario de agregar gasto -->
    <section class="form-section">
      <h2>Agregar Gasto</h2>
      <form id="gasto-form" class="gasto-form">
        <div class="form-group">
          <label for="monto">Monto ($)</label>
          <input type="number" id="monto" min="0.01" step="0.01" required placeholder="0.00" />
        </div>
        <div class="form-group">
          <label for="descripcion">Descripción</label>
          <input type="text" id="descripcion" required placeholder="Ej: Supermercado" maxlength="100" />
        </div>
        <div class="form-group">
          <label for="categoria">Categoría</label>
          <select id="categoria" required>
            <option value="">Seleccionar...</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="salud">Salud</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <button type="submit" class="btn-primary">Agregar Gasto</button>
      </form>
    </section>

    <!-- Resumen de gastos -->
    <section class="summary-section">
      <div class="total-card">
        <span class="total-label">Total del mes</span>
        <span id="total-mes" class="total-amount">$0.00</span>
      </div>
    </section>

    <!-- Lista de gastos -->
    <section class="list-section">
      <h2>Gastos recientes</h2>
      <div id="gastos-lista">
        <!-- Los gastos se insertan aquí con JavaScript -->
      </div>
      <div id="estado-vacio" class="estado-vacio hidden">
        <p>No hay gastos registrados todavía.</p>
        <p>Agrega tu primer gasto usando el formulario.</p>
      </div>
    </section>
  </div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>`,
    keyPoints: [
      'HTML semántico: form, section, article, button según el propósito',
      'IDs para elementos que necesita JavaScript, clases para estilos CSS',
      'El estado vacío es parte de la interfaz base (no dejarlo para después)',
      'La interfaz base no necesita ser perfecta, solo funcional y clara',
      'El viewport meta es necesario para que el diseño funcione en móviles',
      'Establece un CSS base con box-sizing y máximo de ancho',
    ],
    exercise: {
      description: 'Crea el HTML base de tu proyecto con: 1) header con el nombre de la app, 2) formulario para agregar datos, 3) sección de lista con un div para el estado vacío, 4) CSS básico para que sea usable. Abre con npm run dev y verifica que se ve correctamente.',
      hint: 'Empieza con el HTML y verifica que se ve bien. El CSS puede ser mínimo: box-sizing border-box, max-width para centrar, fonts del sistema. Lo importante es que la estructura sea clara.',
    },
    quiz: [
      {
        question: '¿Por qué usar IDs para elementos que necesita JavaScript y clases para estilos?',
        options: [
          'Porque IDs son más rápidos que clases',
          'Para separar responsabilidades: IDs como ganchos para JS, clases para estilos reutilizables',
          'Porque las clases no funcionan con querySelector',
          'No hay ninguna diferencia entre usar IDs o clases',
        ],
        correctAnswer: 'Para separar responsabilidades: IDs como ganchos para JS, clases para estilos reutilizables',
        correctFeedback: 'Correcto. Es una convención útil: document.getElementById("gasto-form") para JS. Las clases se pueden reutilizar en múltiples elementos y son más flexibles para CSS.',
        incorrectFeedback: 'Es una separación de responsabilidades: IDs identifican elementos únicos para JavaScript, las clases son reutilizables para estilos CSS. querySelector también puede usar clases, pero IDs indican elemento único.',
      },
      {
        question: '¿Por qué es importante incluir el estado vacío en la interfaz base?',
        options: [
          'Porque es obligatorio para que el formulario funcione',
          'Para que la app se vea bien cuando no hay datos, en lugar de verse incompleta',
          'Porque JavaScript requiere al menos un elemento oculto',
          'Para mejorar el SEO del proyecto',
        ],
        correctAnswer: 'Para que la app se vea bien cuando no hay datos, en lugar de verse incompleta',
        correctFeedback: 'Correcto. La primera vez que alguien abre la app no hay datos. Un mensaje claro como "No hay gastos registrados" es mucho mejor que una sección vacía sin explicación.',
        incorrectFeedback: 'El estado vacío mejora la experiencia del usuario: cuando no hay datos, muestra un mensaje claro en lugar de una sección en blanco sin explicación. Es parte del diseño desde el inicio.',
      },
    ],
  },
  {
    slug: 'proyecto-final-datos-estado',
    title: 'Organizar datos y estado',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 236,
    description: 'Aprende a organizar los datos principales de la aplicación y manejar el estado básico.',
    explanation: `El **estado** de una aplicación es el conjunto de datos que cambian con el tiempo y que determinan qué muestra la UI.

**¿Qué es el estado en el contexto del proyecto?**
Para un Expense Tracker, el estado principal es:
- La lista de gastos (array de objetos)
- Posiblemente filtros activos (categoría seleccionada)

**Dónde guardar el estado:**
En proyectos vanilla pequeños, el estado se maneja con variables en módulos:
\`\`\`javascript
// src/state.js - estado centralizado
let gastos = []

export function obtenerGastos() { return [...gastos] }
export function establecerGastos(nuevos) { gastos = nuevos }
\`\`\`

**Flujo de datos básico:**
\`\`\`
Acción del usuario (click, form submit)
        ↓
Modificar el estado (array de gastos)
        ↓
Guardar en localStorage
        ↓
Re-renderizar la UI con el nuevo estado
\`\`\`

**Estructura de datos del gasto:**
\`\`\`javascript
{
  id: 1715954000000,    // timestamp como ID único
  monto: 150.50,        // número con decimales
  descripcion: 'Super', // string
  categoria: 'alim',    // string (de lista fija)
  fecha: '2026-05-17'  // string ISO (YYYY-MM-DD)
}
\`\`\`

**Regla de oro:** la UI es un reflejo del estado. Cuando el estado cambia, la UI debe actualizarse para reflejarlo.`,
    codeExample: `// src/utils/storage.js
const CLAVE = 'expense-tracker:gastos'

export function cargarGastos() {
  try {
    const datos = localStorage.getItem(CLAVE)
    return datos ? JSON.parse(datos) : []
  } catch {
    return []
  }
}

export function guardarGastos(gastos) {
  localStorage.setItem(CLAVE, JSON.stringify(gastos))
}

// src/state.js - estado de la aplicación
import { cargarGastos, guardarGastos } from './utils/storage.js'

let gastos = cargarGastos()

export function obtenerGastos() {
  return [...gastos] // copia para no mutar externamente
}

export function agregarGasto(nuevoGasto) {
  gastos = [...gastos, nuevoGasto]
  guardarGastos(gastos)
}

export function eliminarGasto(id) {
  gastos = gastos.filter(g => g.id !== id)
  guardarGastos(gastos)
}

// src/utils/gastos.js - funciones puras de datos
export function crearGasto({ monto, descripcion, categoria, fecha }) {
  return {
    id: Date.now(),
    monto: parseFloat(monto),
    descripcion: descripcion.trim(),
    categoria,
    fecha: fecha || new Date().toISOString().split('T')[0],
  }
}

export function calcularTotal(gastos) {
  return gastos.reduce((sum, g) => sum + g.monto, 0)
}

export function agruparPorCategoria(gastos) {
  return gastos.reduce((grupos, g) => ({
    ...grupos,
    [g.categoria]: (grupos[g.categoria] || 0) + g.monto,
  }), {})
}`,
    keyPoints: [
      'El estado son los datos que cambian y determinan qué muestra la UI',
      'Centralizar el estado en un módulo hace el código más predecible',
      'El flujo es: acción → modificar estado → guardar → re-renderizar',
      'Las funciones de estado devuelven copias, no referencias directas',
      'Las funciones puras de datos (crearGasto, calcularTotal) son fáciles de testear',
      'El ID único puede generarse con Date.now() en proyectos pequeños',
    ],
    exercise: {
      description: 'Crea el archivo src/state.js con las funciones para obtener, agregar y eliminar datos. Crea src/utils/storage.js con cargar y guardar. Crea src/utils/datos.js con las funciones puras (crear, calcular, agrupar). Prueba las funciones en la consola del navegador.',
      hint: 'Puedes probar desde la consola importando manualmente o temporalmente en main.js: import { crearGasto } from "./utils/datos.js"; console.log(crearGasto({monto: 100, descripcion: "test", categoria: "alim", fecha: "2026-05-17"})).',
    },
    quiz: [
      {
        question: '¿Por qué la función obtenerGastos() devuelve [...gastos] en lugar de gastos directamente?',
        options: [
          'Porque JavaScript requiere que los arrays se devuelvan con el operador spread',
          'Para evitar que código externo mute el array de estado directamente',
          'Porque localStorage no acepta arrays directos',
          'Para hacer una copia más rápida',
        ],
        correctAnswer: 'Para evitar que código externo mute el array de estado directamente',
        correctFeedback: 'Correcto. [...gastos] crea una copia superficial del array. Si alguien modifica la copia, no afecta el array de estado interno. Es una protección simple pero efectiva.',
        incorrectFeedback: 'Si devuelves gastos directamente, el código que lo recibe podría hacer gastos.push() y modificar el estado sin pasar por las funciones de estado. La copia [...gastos] previene esa mutación accidental.',
      },
      {
        question: '¿Cuál es el flujo correcto cuando el usuario agrega un nuevo gasto?',
        options: [
          'Actualizar el DOM → guardar en localStorage → actualizar el estado',
          'Guardar en localStorage → actualizar el estado → actualizar el DOM',
          'Modificar el estado → guardar en localStorage → re-renderizar el DOM',
          'Re-renderizar el DOM → modificar el estado → guardar en localStorage',
        ],
        correctAnswer: 'Modificar el estado → guardar en localStorage → re-renderizar el DOM',
        correctFeedback: 'Correcto. El flujo es: primero modificas el estado (el array de gastos), luego lo persistes en localStorage, y finalmente actualizas el DOM para reflejar el nuevo estado.',
        incorrectFeedback: 'El flujo correcto es: 1) modificar el estado (agregarGasto()), 2) guardar en localStorage para persistencia, 3) re-renderizar el DOM. El DOM siempre es un reflejo del estado, nunca al revés.',
      },
    ],
  },
  {
    slug: 'proyecto-final-renderizar-dom',
    title: 'Renderizar contenido en el DOM',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 237,
    description: 'Aprende a mostrar dinámicamente datos en la interfaz usando funciones de renderizado.',
    explanation: `**Renderizar** significa convertir datos (array de objetos JavaScript) en elementos HTML visibles en la pantalla.

**Patrón de renderizado:**
1. Obtén los datos
2. Limpia el contenedor
3. Para cada dato, crea un elemento DOM
4. Usa textContent (no innerHTML) para texto de usuario
5. Añade los elementos al contenedor

**Renderizado completo vs incremental:**
- **Completo:** limpia el contenedor y re-dibuja todo. Más simple de implementar.
- **Incremental:** solo actualiza lo que cambió. Más eficiente pero más complejo.

Para proyectos pequeños, el renderizado completo es la opción correcta.

**Estados de la lista:**
Una lista siempre puede estar en tres estados:
1. **Cargando:** se está obteniendo la información
2. **Vacía:** no hay datos para mostrar
3. **Con datos:** hay elementos que mostrar

**Renderizado de resúmenes:**
Para mostrar totales o estadísticas, crea funciones separadas que calculan los valores y actualizan los elementos correspondientes.

**Cuándo re-renderizar:**
Cada vez que el estado cambia: agregar, eliminar o modificar un elemento.`,
    codeExample: `// src/components/list.js
import { eliminarGasto } from '../state.js'

export function renderizarGastos(gastos) {
  const lista = document.querySelector('#gastos-lista')
  const estadoVacio = document.querySelector('#estado-vacio')

  lista.innerHTML = ''

  if (gastos.length === 0) {
    estadoVacio.classList.remove('hidden')
    return
  }

  estadoVacio.classList.add('hidden')

  gastos.forEach(gasto => {
    const elemento = crearElementoGasto(gasto)
    lista.appendChild(elemento)
  })
}

function crearElementoGasto(gasto) {
  const article = document.createElement('article')
  article.className = 'gasto-item'
  article.dataset.id = gasto.id

  const info = document.createElement('div')
  info.className = 'gasto-info'

  const descripcion = document.createElement('strong')
  descripcion.textContent = gasto.descripcion  // ✓ textContent, no innerHTML

  const detalles = document.createElement('span')
  detalles.className = 'gasto-detalles'
  detalles.textContent = \`\${gasto.categoria} · \${gasto.fecha}\`

  const monto = document.createElement('span')
  monto.className = 'gasto-monto'
  monto.textContent = \`$\${gasto.monto.toFixed(2)}\`

  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = '✕'
  btnEliminar.className = 'btn-eliminar'
  btnEliminar.setAttribute('aria-label', 'Eliminar gasto')
  btnEliminar.addEventListener('click', () => manejarEliminar(gasto.id))

  info.appendChild(descripcion)
  info.appendChild(detalles)
  article.appendChild(info)
  article.appendChild(monto)
  article.appendChild(btnEliminar)

  return article
}

function manejarEliminar(id) {
  eliminarGasto(id)
  renderizarGastos(obtenerGastos())
}`,
    keyPoints: [
      'El renderizado completo limpia el contenedor y dibuja todo de nuevo',
      'Usa textContent para texto de usuario o API, nunca innerHTML',
      'Crea funciones separadas para crear cada tipo de elemento DOM',
      'Maneja siempre los tres estados: cargando, vacío, con datos',
      'Re-renderiza después de cada cambio de estado',
      'Los botones de acción (eliminar) se crean con JavaScript, no en el HTML base',
    ],
    exercise: {
      description: 'Implementa renderizarLista(datos, contenedor) para tu proyecto. La función debe: 1) limpiar el contenedor, 2) mostrar el estado vacío si no hay datos, 3) crear elementos DOM para cada item con textContent. Prueba pasando un array de prueba desde la consola.',
      hint: 'Crea primero una función pequeña crearElemento(item) que devuelve un elemento DOM para un solo item. Luego renderizarLista llama a crearElemento para cada item del array.',
    },
    quiz: [
      {
        question: '¿Por qué siempre se usa textContent en lugar de innerHTML para mostrar datos del usuario?',
        options: [
          'Porque textContent es más rápido que innerHTML',
          'Para prevenir ataques XSS: innerHTML ejecuta HTML, textContent lo trata como texto plano',
          'Porque innerHTML no funciona en Chrome',
          'Porque textContent soporta emojis y caracteres especiales',
        ],
        correctAnswer: 'Para prevenir ataques XSS: innerHTML ejecuta HTML, textContent lo trata como texto plano',
        correctFeedback: 'Correcto. Si un usuario escribe <script>alert("hack")</script> como descripción y usas innerHTML, ese código se ejecuta. Con textContent se muestra como texto literal.',
        incorrectFeedback: 'innerHTML interpreta el contenido como HTML y ejecuta cualquier script. Un usuario malicioso podría escribir <img onerror="código"> y ejecutar código en tu app. textContent lo muestra como texto literal, sin ejecutar.',
      },
      {
        question: '¿Cuándo se debe re-renderizar la lista?',
        options: [
          'Solo cuando el usuario recarga la página',
          'Cada vez que el estado cambia (agregar, eliminar, modificar)',
          'Una sola vez al iniciar la app',
          'Cada 5 segundos automáticamente',
        ],
        correctAnswer: 'Cada vez que el estado cambia (agregar, eliminar, modificar)',
        correctFeedback: 'Correcto. La UI debe reflejar el estado actual siempre. Cada vez que el estado cambia, la UI debe actualizarse para mostrar el nuevo estado.',
        incorrectFeedback: 'El principio es: la UI refleja el estado. Cuando el estado cambia (se agrega o elimina un gasto), la UI debe actualizarse. No tiene sentido re-renderizar a intervalos fijos o solo al recargar.',
      },
    ],
  },
  {
    slug: 'proyecto-final-eventos',
    title: 'Agregar eventos e interacción',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 238,
    description: 'Conecta botones, formularios y acciones del usuario con la lógica de la aplicación.',
    explanation: `Los eventos conectan la interfaz del usuario con la lógica de la aplicación. Sin eventos, la app es estática.

**Tipos de eventos más comunes en proyectos:**

| Evento | Elemento | Uso |
|--------|----------|-----|
| submit | form | Capturar envío de formulario |
| click | button | Acciones de botón |
| input | input/textarea | Detectar cambios al escribir |
| change | select | Cambio de selección |
| keydown | document | Atajos de teclado |

**Patrón para formularios:**
\`\`\`javascript
form.addEventListener('submit', (evento) => {
  evento.preventDefault() // evitar recarga de página
  const datos = obtenerDatosFormulario()
  if (!validarDatos(datos)) return
  procesarDatos(datos)
  limpiarFormulario()
})
\`\`\`

**Event delegation para listas dinámicas:**
Si los botones de eliminar se crean dinámicamente, es más eficiente poner un solo listener en el contenedor:
\`\`\`javascript
lista.addEventListener('click', (evento) => {
  const btnEliminar = evento.target.closest('.btn-eliminar')
  if (btnEliminar) {
    const id = btnEliminar.dataset.id
    eliminar(id)
  }
})
\`\`\`

**¿Por qué event delegation?**
En lugar de agregar un listener a cada botón (que se crea y destruye al re-renderizar), un solo listener en el contenedor padre captura todos los clicks.`,
    codeExample: `// src/components/form.js
import { crearGasto } from '../utils/gastos.js'
import { agregarGasto, obtenerGastos } from '../state.js'
import { renderizarGastos } from './list.js'
import { renderizarResumen } from './summary.js'

export function inicializarFormulario() {
  const form = document.querySelector('#gasto-form')
  form.addEventListener('submit', manejarEnvio)
}

function manejarEnvio(evento) {
  evento.preventDefault()

  const monto = parseFloat(document.querySelector('#monto').value)
  const descripcion = document.querySelector('#descripcion').value.trim()
  const categoria = document.querySelector('#categoria').value
  const fecha = new Date().toISOString().split('T')[0]

  if (!descripcion || !categoria || isNaN(monto) || monto <= 0) {
    mostrarError('Por favor completa todos los campos correctamente.')
    return
  }

  const nuevoGasto = crearGasto({ monto, descripcion, categoria, fecha })
  agregarGasto(nuevoGasto)

  const gastos = obtenerGastos()
  renderizarGastos(gastos)
  renderizarResumen(gastos)

  evento.target.reset()
  document.querySelector('#monto').focus()
}

function mostrarError(mensaje) {
  const errorEl = document.querySelector('#form-error')
  if (errorEl) {
    errorEl.textContent = mensaje
    errorEl.hidden = false
    setTimeout(() => { errorEl.hidden = true }, 3000)
  }
}`,
    keyPoints: [
      'Siempre llama evento.preventDefault() en formularios para evitar recarga',
      'El patrón es: validar → procesar → actualizar estado → re-renderizar',
      'Event delegation: un listener en el contenedor en vez de uno por cada hijo',
      'Usa data-attributes (data-id) para pasar información de los elementos DOM',
      'Resetea el formulario y devuelve el foco después de guardar',
      'Los mensajes de error deben ser claros y desaparecer después de un tiempo',
    ],
    exercise: {
      description: 'Implementa el manejo del formulario de tu proyecto: agrega el listener de submit, valida los campos, crea el objeto de datos, actualiza el estado, re-renderiza y limpia el formulario. Prueba que funciona completando y enviando el formulario.',
      hint: 'Empieza con un console.log(datos) en el handler para verificar que los datos del formulario son correctos antes de conectar con el estado y el renderizado.',
    },
    quiz: [
      {
        question: '¿Por qué es importante llamar evento.preventDefault() al manejar el submit de un formulario?',
        options: [
          'Para que el formulario se envíe más rápido',
          'Para evitar que la página se recargue, lo que borraría el estado JavaScript',
          'Para habilitar la validación del formulario',
          'Para que los campos del formulario queden vacíos',
        ],
        correctAnswer: 'Para evitar que la página se recargue, lo que borraría el estado JavaScript',
        correctFeedback: 'Correcto. Sin preventDefault(), el formulario haría una petición HTTP y recargaría la página, perdiendo todo el estado de la aplicación en memoria.',
        incorrectFeedback: 'preventDefault() cancela el comportamiento por defecto del submit: la recarga de página. Sin él, el navegador haría una petición HTTP y recargaría, perdiendo todo el estado JavaScript.',
      },
      {
        question: '¿Qué es event delegation y por qué es útil para listas dinámicas?',
        options: [
          'Delegar el manejo de eventos al servidor',
          'Poner un solo listener en el contenedor padre para manejar eventos de sus hijos',
          'Crear eventos personalizados para cada elemento de la lista',
          'Usar Web Workers para manejar eventos en segundo plano',
        ],
        correctAnswer: 'Poner un solo listener en el contenedor padre para manejar eventos de sus hijos',
        correctFeedback: 'Correcto. Con event delegation, un listener en el contenedor captura clicks de todos sus hijos, incluyendo los que se crean dinámicamente. Es más eficiente que un listener por elemento.',
        incorrectFeedback: 'Event delegation pone un listener en el elemento padre (ej: la lista) y escucha eventos de todos sus hijos (ej: botones de eliminar). Funciona con elementos creados dinámicamente, a diferencia de los listeners individuales.',
      },
    ],
  },
  {
    slug: 'proyecto-final-localstorage',
    title: 'Guardar datos en localStorage',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 239,
    description: 'Agrega persistencia de datos para que la información no se pierda al recargar la página.',
    explanation: `La **persistencia** significa que los datos sobreviven al recargar la página o cerrar el navegador.

**¿Por qué localStorage?**
- No requiere servidor ni cuenta de usuario
- Los datos persisten indefinidamente (hasta que el usuario los borra)
- Simple de implementar con JSON.stringify/JSON.parse
- Ideal para proyectos personales y demos

**Patrón de persistencia completo:**

**Al iniciar la app:**
\`\`\`javascript
const gastos = cargarDesdeStorage()
renderizarGastos(gastos)
\`\`\`

**Al modificar datos:**
\`\`\`javascript
agregarGasto(nuevoGasto)        // modifica array en memoria
guardarEnStorage(gastos)        // persiste en localStorage
renderizarGastos(gastos)        // actualiza UI
\`\`\`

**Consideraciones:**
- localStorage tiene un límite de ~5-10MB
- Los datos en localStorage son texto plano, visibles para el usuario
- No guardes información sensible (contraseñas, tokens) en localStorage
- Usa siempre try/catch al leer por si los datos están corruptos

**Formato de las claves:**
Usa un prefijo para evitar colisiones con otras apps:
\`\`\`javascript
const CLAVE = 'expense-tracker:gastos'  // ✓
const CLAVE = 'gastos'                  // ✗ puede colisionar
\`\`\``,
    codeExample: `// src/utils/storage.js - implementación completa
const PREFIJO = 'expense-tracker'

export function guardar(clave, datos) {
  try {
    localStorage.setItem(\`\${PREFIJO}:\${clave}\`, JSON.stringify(datos))
  } catch (error) {
    console.error('Error al guardar en localStorage:', error)
  }
}

export function cargar(clave, valorPorDefecto = null) {
  try {
    const datos = localStorage.getItem(\`\${PREFIJO}:\${clave}\`)
    return datos !== null ? JSON.parse(datos) : valorPorDefecto
  } catch (error) {
    console.error('Error al cargar de localStorage:', error)
    return valorPorDefecto
  }
}

export function eliminar(clave) {
  localStorage.removeItem(\`\${PREFIJO}:\${clave}\`)
}

// Claves tipadas:
export const CLAVES = {
  GASTOS: 'gastos',
  FILTRO: 'filtro-activo',
}

// Uso en state.js:
import { guardar, cargar, CLAVES } from './utils/storage.js'

let gastos = cargar(CLAVES.GASTOS, [])

export function agregarGasto(nuevo) {
  gastos = [...gastos, nuevo]
  guardar(CLAVES.GASTOS, gastos)
}

// Verificar en la consola del navegador:
// localStorage.getItem('expense-tracker:gastos')`,
    keyPoints: [
      'localStorage persiste datos entre recargas sin necesidad de servidor',
      'Siempre usa JSON.stringify para guardar y JSON.parse para leer',
      'Usa try/catch al leer de localStorage para manejar datos corruptos',
      'Usa prefijos en las claves para evitar colisiones con otras apps',
      'No guardes información sensible en localStorage (es texto plano visible)',
      'Carga desde localStorage al iniciar la app y guarda después de cada cambio',
    ],
    exercise: {
      description: 'Implementa la persistencia completa de tu proyecto: 1) crea storage.js con guardar(clave, datos) y cargar(clave, defecto), 2) al iniciar la app carga los datos de localStorage, 3) después de cada cambio guarda en localStorage. Verifica recargando la página y que los datos persisten.',
      hint: 'Para verificar que funciona: agrega algunos datos → recarga la página → los datos deben seguir ahí. También puedes ver el localStorage en DevTools → Application → Local Storage.',
    },
    quiz: [
      {
        question: '¿Por qué se recomienda usar prefijos en las claves de localStorage?',
        options: [
          'Porque localStorage requiere prefijos para funcionar',
          'Para evitar que otras aplicaciones en el mismo dominio lean o sobreescriban tus datos',
          'Para mejorar el rendimiento de la lectura',
          'Porque los navegadores eliminan claves sin prefijo automáticamente',
        ],
        correctAnswer: 'Para evitar que otras aplicaciones en el mismo dominio lean o sobreescriban tus datos',
        correctFeedback: 'Correcto. Todas las apps en el mismo dominio comparten localStorage. Un prefijo como "expense-tracker:gastos" evita conflictos con otras claves genéricas como "gastos".',
        incorrectFeedback: 'localStorage es compartido entre todas las páginas del mismo dominio. Si tienes una clave genérica como "gastos", otra app en el mismo dominio podría tener la misma clave y sobrescribirla.',
      },
      {
        question: '¿Qué tipo de información NO debes guardar en localStorage?',
        options: [
          'Listas de tareas o gastos del usuario',
          'Contraseñas, tokens de sesión o información sensible',
          'Preferencias de la interfaz (tema oscuro, idioma)',
          'El último filtro que usó el usuario',
        ],
        correctAnswer: 'Contraseñas, tokens de sesión o información sensible',
        correctFeedback: 'Correcto. localStorage es texto plano visible en las DevTools del navegador. Contraseñas y tokens de sesión ahí son accesibles para cualquier script malicioso (XSS).',
        incorrectFeedback: 'localStorage es texto plano accesible en DevTools. Contraseñas y tokens de sesión jamás deben almacenarse allí. Las preferencias de UI, listas de items y estado de filtros son usos completamente válidos.',
      },
    ],
  },
  {
    slug: 'proyecto-final-api',
    title: 'Consumir una API externa',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 240,
    description: 'Integra una API externa para agregar datos reales o funcionalidades dinámicas al proyecto.',
    explanation: `Agregar una API externa añade datos en tiempo real y hace el proyecto más interesante. Elige siempre APIs públicas que no requieran clave secreta.

**APIs gratuitas sin clave recomendadas:**

| API | Datos | URL base |
|-----|-------|----------|
| Open Meteo | Clima | api.open-meteo.com |
| REST Countries | Países | restcountries.com/v3.1 |
| JSONPlaceholder | Datos de prueba | jsonplaceholder.typicode.com |
| Open Trivia DB | Preguntas | opentdb.com/api.php |
| PokeAPI | Pokémon | pokeapi.co/api/v2 |

**Cómo integrar la API en el proyecto:**

1. Crear un módulo dedicado: \`src/api/clima.js\`
2. Exportar funciones asíncronas
3. Manejar loading, error y éxito
4. Mostrar los datos en el DOM

**¿Qué pasa si la API falla?**
La app debe seguir funcionando sin la API. Los datos de la API son complementarios, no esenciales para las funciones básicas.

**Seguridad:**
- Nunca expongas API keys en el frontend
- Verifica response.ok antes de leer response.json()
- Muestra errores amigables al usuario, no los detalles técnicos`,
    codeExample: `// src/api/exchange.js - API de tipos de cambio gratuita
// Frankfurter API: api.frankfurter.app (sin clave)

export async function obtenerTipoCambio(monedaOrigen, monedaDestino) {
  const url = \`https://api.frankfurter.app/latest?from=\${monedaOrigen}&to=\${monedaDestino}\`

  const res = await fetch(url)
  if (!res.ok) throw new Error(\`Error \${res.status} al obtener tipo de cambio\`)

  const datos = await res.json()
  return datos.rates[monedaDestino]
}

// src/components/currencyWidget.js
import { obtenerTipoCambio } from '../api/exchange.js'

export async function inicializarWidgetCambio() {
  const contenedor = document.querySelector('#widget-cambio')
  if (!contenedor) return

  contenedor.textContent = 'Cargando tipo de cambio...'

  try {
    const tipo = await obtenerTipoCambio('USD', 'EUR')
    contenedor.textContent = \`1 USD = \${tipo.toFixed(4)} EUR\`
  } catch (error) {
    console.error('Widget de cambio:', error)
    contenedor.textContent = 'No se pudo cargar el tipo de cambio'
  }
}

// Alternativa para proyectos de gastos:
// Mostrar tasa de cambio para convertir gastos a otra moneda (informativo)

// IMPORTANTE: La app funciona aunque el widget falle
// Los gastos se guardan y muestran sin depender de la API`,
    keyPoints: [
      'Usa APIs públicas gratuitas sin clave para el proyecto frontend',
      'Crea un módulo dedicado en src/api/ para cada API que uses',
      'Maneja siempre los tres estados: cargando, error, éxito',
      'La app debe funcionar aunque la API falle (funcionalidad opcional)',
      'Verifica response.ok antes de llamar response.json()',
      'Muestra errores amigables al usuario, no mensajes técnicos',
    ],
    exercise: {
      description: 'Integra una API pública en tu proyecto. Por ejemplo: si es un tracker de gastos, muestra el tipo de cambio USD/EUR usando api.frankfurter.app. Implementa el widget con estado de carga y manejo de error. Verifica que la app funciona aunque el widget falle.',
      hint: 'Empieza probando la API en la consola del navegador: fetch("https://api.frankfurter.app/latest?from=USD&to=EUR").then(r=>r.json()).then(console.log). Luego crea la función async en el módulo de API.',
    },
    quiz: [
      {
        question: '¿Por qué la funcionalidad de API debe ser opcional y la app funcionar sin ella?',
        options: [
          'Porque las APIs siempre están caídas',
          'Porque las funciones básicas no deben depender de servicios externos que pueden fallar',
          'Porque JavaScript no puede hacer peticiones a APIs',
          'Porque las APIs gratis son poco confiables',
        ],
        correctAnswer: 'Porque las funciones básicas no deben depender de servicios externos que pueden fallar',
        correctFeedback: 'Correcto. Las APIs pueden tener downtime, rate limits o simplemente no estar disponibles. Las funciones core de la app (agregar, ver, eliminar) deben funcionar siempre.',
        incorrectFeedback: 'Las APIs externas pueden fallar por razones fuera de tu control: downtime, rate limits, cambios en la API. Las funciones principales de tu app no deben depender de ellas para funcionar.',
      },
    ],
  },
  {
    slug: 'proyecto-final-errores-loading',
    title: 'Manejar errores y estados de carga',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 241,
    description: 'Agrega loading states, mensajes de error, estados vacíos y validaciones para mejorar la experiencia.',
    explanation: `Una app de calidad no solo funciona cuando todo va bien. Maneja explícitamente los casos problemáticos.

**Los cuatro estados de una operación:**

1. **Idle:** esperando que el usuario haga algo
2. **Loading:** operación en progreso
3. **Success:** operación exitosa, mostrar resultado
4. **Error:** algo salió mal, mostrar mensaje claro

**Validaciones del formulario:**
- Validar antes de enviar (client-side)
- Mensajes claros que dicen exactamente qué está mal
- No solo "error en el formulario", sino "El monto debe ser mayor que cero"

**Mensajes de error útiles:**
\`\`\`
❌ "Error al cargar"
✅ "No se pudo cargar los datos. Intenta de nuevo más tarde."

❌ "Formulario inválido"
✅ "El monto debe ser un número mayor que cero."

❌ "Error 404"
✅ "No encontramos la ciudad que buscas. Verifica el nombre e intenta de nuevo."
\`\`\`

**Estados vacíos con llamada a la acción:**
No solo "No hay datos", sino una guía de qué hacer:
\`\`\`
"No has registrado ningún gasto todavía.
 Usa el formulario de arriba para agregar tu primer gasto."
\`\`\``,
    codeExample: `// Estado de carga para operación asíncrona
export async function cargarConEstado(contenedor, cargarFn) {
  contenedor.innerHTML = '<p class="loading">Cargando...</p>'

  try {
    const datos = await cargarFn()
    return datos
  } catch (error) {
    contenedor.innerHTML = \`
      <div class="error-estado">
        <p>No se pudieron cargar los datos.</p>
        <button id="btn-reintentar">Reintentar</button>
      </div>
    \`
    document.querySelector('#btn-reintentar')
      ?.addEventListener('click', () => cargarConEstado(contenedor, cargarFn))
    return null
  }
}

// Validación de formulario con mensajes claros
export function validarGasto({ monto, descripcion, categoria }) {
  const errores = []

  if (!monto || isNaN(monto) || parseFloat(monto) <= 0) {
    errores.push('El monto debe ser un número mayor que cero.')
  }
  if (!descripcion || !descripcion.trim()) {
    errores.push('La descripción no puede estar vacía.')
  }
  if (descripcion.trim().length > 100) {
    errores.push('La descripción no puede superar 100 caracteres.')
  }
  if (!categoria) {
    errores.push('Debes seleccionar una categoría.')
  }

  return { valida: errores.length === 0, errores }
}

// Mostrar errores de validación en el formulario
export function mostrarErroresFormulario(errores) {
  const lista = document.querySelector('#form-errors')
  if (!lista) return

  lista.innerHTML = ''
  lista.hidden = errores.length === 0

  errores.forEach(error => {
    const li = document.createElement('li')
    li.textContent = error  // textContent, no innerHTML
    lista.appendChild(li)
  })
}`,
    keyPoints: [
      'Toda operación tiene cuatro estados: idle, loading, success, error',
      'Los mensajes de error deben ser claros y orientados a la acción del usuario',
      'Valida en el cliente antes de enviar y muestra errores específicos',
      'Los estados vacíos deben guiar al usuario sobre qué hacer',
      'Incluye un botón de "Reintentar" en estados de error de carga',
      'Oculta los detalles técnicos del error al usuario (muéstralos en la consola)',
    ],
    exercise: {
      description: 'Agrega validación al formulario de tu proyecto con mensajes de error específicos para cada campo. Agrega un estado de loading cuando llamas a la API (si tienes una). Mejora el estado vacío con una llamada a la acción clara.',
      hint: 'Para el estado de loading, puedes deshabilitar el botón de submit con button.disabled = true y cambiar su texto a "Guardando..." mientras se procesa.',
    },
    quiz: [
      {
        question: '¿Cuál es la diferencia entre un mensaje de error útil y uno inútil?',
        options: [
          'La longitud del mensaje',
          'El útil explica qué salió mal y qué puede hacer el usuario para solucionarlo',
          'El color del mensaje en la interfaz',
          'Si el mensaje está en mayúsculas o minúsculas',
        ],
        correctAnswer: 'El útil explica qué salió mal y qué puede hacer el usuario para solucionarlo',
        correctFeedback: 'Correcto. "Error al guardar" dice qué pasó pero no qué hacer. "No se pudo guardar. Verifica tu conexión a internet e intenta de nuevo." ayuda al usuario a resolver el problema.',
        incorrectFeedback: 'Un mensaje útil tiene dos partes: qué salió mal (descriptivo) y qué puede hacer el usuario (orientado a la acción). "Error 500" es inútil para el usuario. "No pudimos procesar tu solicitud. Intenta de nuevo." es útil.',
      },
    ],
  },
  {
    slug: 'proyecto-final-refactor',
    title: 'Refactorizar y limpiar el código',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 242,
    description: 'Mejora la organización del código, elimina repetición y separa responsabilidades en módulos.',
    explanation: `**Refactorizar** significa mejorar la estructura interna del código sin cambiar su comportamiento externo. El proyecto funciona igual antes y después.

**¿Cuándo refactorizar?**
Cuando el proyecto funciona, antes de agregar más funcionalidades. Refactorizar código con errores es más difícil.

**Checklist de refactoring:**

**Código repetido:**
- [ ] ¿Hay bloques de código iguales o muy similares? Extraer a función.

**Archivos muy largos:**
- [ ] ¿Algún archivo tiene más de 200 líneas? Dividir en módulos.

**Funciones con múltiples responsabilidades:**
- [ ] ¿Hay funciones que hacen DOM + lógica + storage? Separar.

**Nombres:**
- [ ] ¿Todos los nombres son descriptivos? ¿Hay variables como x, d, tmp?

**Limpieza general:**
- [ ] ¿Hay console.log de debugging? Eliminar.
- [ ] ¿Hay imports no usados? Eliminar.
- [ ] ¿Hay código comentado? Eliminar (Git lo recuerda).

**Proceso seguro de refactoring:**
1. Verifica que el proyecto funciona ANTES de refactorizar
2. Haz un commit con el estado actual
3. Refactoriza en pasos pequeños
4. Verifica que sigue funcionando después de cada cambio
5. Haz commit con la refactorización`,
    codeExample: `// Antes del refactoring: todo mezclado en main.js
document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault()
  const texto = document.querySelector('#texto').value
  if (!texto.trim()) return
  const gastos = JSON.parse(localStorage.getItem('gastos') || '[]')
  gastos.push({ texto, fecha: new Date().toISOString() })
  localStorage.setItem('gastos', JSON.stringify(gastos))
  const lista = document.querySelector('#lista')
  lista.innerHTML = ''
  gastos.forEach(g => {
    const li = document.createElement('li')
    li.textContent = g.texto
    lista.appendChild(li)
  })
  e.target.reset()
})

// Después del refactoring: responsabilidades separadas

// src/utils/storage.js
export function cargar(clave, defecto) { /* ... */ }
export function guardar(clave, datos) { /* ... */ }

// src/utils/gastos.js
export function crearGasto(texto) { /* ... */ }

// src/components/list.js
export function renderizarLista(gastos) { /* ... */ }

// src/state.js
export function agregarYPersistir(gasto) { /* ... */ }

// src/main.js → solo coordina
import { inicializarFormulario } from './components/form.js'
import { renderizarLista } from './components/list.js'
import { cargar } from './utils/storage.js'

const gastos = cargar('gastos', [])
renderizarLista(gastos)
inicializarFormulario()`,
    keyPoints: [
      'Refactorizar mejora la estructura sin cambiar el comportamiento',
      'Refactoriza cuando el proyecto funciona, no cuando tiene bugs',
      'Haz un commit antes de refactorizar para poder volver atrás si es necesario',
      'Refactoriza en pasos pequeños y verifica que todo sigue funcionando',
      'Separa las responsabilidades en módulos: cada archivo tiene un propósito claro',
      'Aplica la checklist de código limpio al finalizar',
    ],
    exercise: {
      description: 'Aplica la checklist de refactoring a tu proyecto: elimina código repetido, separa funciones con múltiples responsabilidades, elimina console.log de debugging y verifica que todos los nombres son descriptivos. Haz un commit antes y otro después del refactoring.',
      hint: 'Usa la búsqueda del editor (Ctrl+Shift+F) para encontrar console.log en todo el proyecto. Para los nombres malos, busca variables de un solo carácter (excepto i en bucles for).',
    },
    quiz: [
      {
        question: '¿Cuál es la definición de refactorizar?',
        options: [
          'Agregar nuevas funcionalidades al proyecto',
          'Mejorar la estructura interna del código sin cambiar su comportamiento externo',
          'Corregir bugs en el código existente',
          'Reescribir el proyecto desde cero en otro lenguaje',
        ],
        correctAnswer: 'Mejorar la estructura interna del código sin cambiar su comportamiento externo',
        correctFeedback: 'Correcto. Refactorizar no cambia lo que hace el código, solo cómo está organizado internamente. El usuario no nota ningún cambio.',
        incorrectFeedback: 'Refactorizar no agrega funcionalidades ni corrige bugs (técnicamente). Reorganiza el código para que sea más claro, mantenible y limpio, sin cambiar el comportamiento observable.',
      },
      {
        question: '¿Por qué es importante hacer un commit antes de refactorizar?',
        options: [
          'Porque Git requiere commits regulares',
          'Para poder volver al estado anterior si el refactoring introduce problemas',
          'Para que otros desarrolladores vean el progreso',
          'Para activar las verificaciones automáticas de código',
        ],
        correctAnswer: 'Para poder volver al estado anterior si el refactoring introduce problemas',
        correctFeedback: 'Correcto. Un commit antes del refactoring es un punto de restauración. Si algo sale mal durante la reorganización, puedes volver al estado funcional anterior.',
        incorrectFeedback: 'El commit antes del refactoring es una red de seguridad. Si durante la reorganización introduces bugs sin querer, puedes hacer git checkout para volver al estado que funcionaba.',
      },
    ],
  },
  {
    slug: 'proyecto-final-portafolio',
    title: 'Presentar el proyecto como portafolio',
    module: 'Proyecto final: App JavaScript completa',
    moduleNumber: 30,
    order: 243,
    description: 'Aprende a documentar, explicar y presentar tu proyecto final como parte de tu portafolio profesional.',
    explanation: `Un proyecto bien documentado y presentado es parte de tu portafolio profesional. Muestra no solo que puedes programar, sino que entiendes el proceso de desarrollo.

**Documentación mínima: README.md**
Todo proyecto debe tener un README.md en la raíz con:
1. **Nombre y descripción** breve
2. **Demo o captura de pantalla**
3. **Funcionalidades** principales
4. **Tecnologías usadas**
5. **Cómo correrlo localmente** (pasos exactos)
6. **Decisiones de diseño** (opcional pero valorado)

**Publicar en GitHub:**
\`\`\`
git init
git add .
git commit -m "feat: expense tracker completo"
git remote add origin https://github.com/usuario/expense-tracker
git push -u origin main
\`\`\`

**Publicar la app en internet:**
Opciones gratuitas para proyectos Vite:
- **Netlify:** arrastra la carpeta dist/ o conecta GitHub
- **Vercel:** conecta el repositorio, detecta Vite automáticamente
- **GitHub Pages:** con GitHub Actions para el build

**Cómo explicar el proyecto en entrevistas:**
1. Qué problema resuelve y para quién
2. Las decisiones técnicas más importantes
3. Qué aprendiste construyéndolo
4. Qué mejorarías si tuvieras más tiempo`,
    codeExample: `# Expense Tracker

App web para registrar y visualizar gastos personales.
Sin cuenta, sin servidor: tus datos se guardan en el navegador.

## Demo
[Ver demo en vivo](https://mi-expense-tracker.netlify.app)

## Funcionalidades
- Registrar gastos con monto, descripción y categoría
- Ver total de gastos del mes
- Eliminar gastos
- Los datos persisten al recargar (localStorage)

## Tecnologías
- JavaScript vanilla (ES2022)
- Vite para el servidor de desarrollo y build
- localStorage para persistencia

## Cómo correrlo localmente

\`\`\`bash
git clone https://github.com/tu-usuario/expense-tracker
cd expense-tracker
npm install
npm run dev
\`\`\`

Abre http://localhost:5173 en tu navegador.

## Decisiones de diseño

**Sin framework:** El proyecto es suficientemente pequeño para
JavaScript vanilla. Usar React aquí sería sobreingeniería.

**localStorage:** Para el objetivo del proyecto (personal, demo)
no se necesita backend. localStorage es suficiente y simple.

**Seguridad:** Los datos del usuario se muestran con textContent
para prevenir XSS. No se usan APIs que requieran claves secretas.`,
    keyPoints: [
      'El README.md es la presentación de tu proyecto en GitHub',
      'Incluye: descripción, funcionalidades, tecnologías y cómo correrlo',
      'Publica la app en Netlify o Vercel para tener un enlace de demo',
      'En entrevistas explica qué problema resuelve y las decisiones técnicas',
      'Un proyecto en GitHub con README y demo vivo es mucho más impactante',
      'Las decisiones de diseño documentadas muestran madurez técnica',
    ],
    exercise: {
      description: 'Escribe el README.md de tu proyecto con: nombre, descripción, funcionalidades, tecnologías y pasos para correrlo localmente. Sube el proyecto a GitHub. Si puedes, publícalo en Netlify o Vercel y agrega el enlace al README.',
      hint: 'Para publicar en Netlify de forma simple: 1) ejecuta npm run build, 2) ve a netlify.com, 3) arrastra la carpeta dist/ al área de deploy. Netlify genera un URL en segundos.',
    },
    quiz: [
      {
        question: '¿Qué información es esencial en el README.md de un proyecto de portafolio?',
        options: [
          'Solo el código de la aplicación',
          'Descripción, funcionalidades, tecnologías y cómo correrlo localmente',
          'La lista completa de commits de Git',
          'El precio que cobraría por el proyecto',
        ],
        correctAnswer: 'Descripción, funcionalidades, tecnologías y cómo correrlo localmente',
        correctFeedback: 'Correcto. El README debe permitir a cualquier persona entender qué hace el proyecto y cómo ejecutarlo. Descripción, funcionalidades, tecnologías y pasos de instalación son los elementos mínimos.',
        incorrectFeedback: 'El README debe comunicar rápidamente qué hace el proyecto y cómo usar. Lo esencial: descripción breve, funcionalidades principales, tecnologías usadas y pasos exactos para correrlo localmente.',
      },
      {
        question: '¿Cuál es la forma más sencilla de publicar un proyecto Vite en internet gratis?',
        options: [
          'Subir el código a un servidor propio',
          'Ejecutar npm run build y arrastrar la carpeta dist/ a Netlify',
          'Convertir el proyecto a PHP antes de publicarlo',
          'Solo se puede publicar si tienes cuenta de pago',
        ],
        correctAnswer: 'Ejecutar npm run build y arrastrar la carpeta dist/ a Netlify',
        correctFeedback: 'Correcto. Netlify permite publicar arrastrando la carpeta dist/ directamente. También puedes conectar el repositorio de GitHub para deploys automáticos.',
        incorrectFeedback: 'Netlify y Vercel ofrecen hosting gratuito para proyectos frontend. La forma más rápida: npm run build genera dist/, luego arrastras esa carpeta al dashboard de Netlify y tienes una URL pública en segundos.',
      },
      {
        question: '¿Cómo deberías explicar tu proyecto en una entrevista técnica?',
        options: [
          'Listar todas las líneas de código que escribiste',
          'Explicar qué problema resuelve, las decisiones técnicas y qué aprendiste',
          'Solo mostrar el demo sin explicar el código',
          'Decir que es un proyecto de práctica sin importancia',
        ],
        correctAnswer: 'Explicar qué problema resuelve, las decisiones técnicas y qué aprendiste',
        correctFeedback: 'Correcto. Los entrevistadores valoran que puedas articular el propósito del proyecto, las decisiones que tomaste y el aprendizaje. Muestra madurez técnica y comunicación.',
        incorrectFeedback: 'En entrevistas, explica el proyecto como si lo presentaras a alguien no técnico primero (qué hace y para quién), luego las decisiones técnicas (por qué Vite, por qué localStorage) y finalmente qué aprendiste.',
      },
    ],
  },
]

export const jsModule30: Module = {
  number: 30,
  title: 'Proyecto final: App JavaScript completa',
  level: 'nivel6',
  lessons: lessonsJsModule30,
}
