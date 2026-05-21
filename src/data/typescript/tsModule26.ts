import type { Lesson, Module } from '@/types'

export const lessonsTsModule26: Lesson[] = [
  {
    slug: 'typescript-en-react',
    title: 'TypeScript en React',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 205,
    description:
      'Aprende por qué TypeScript es tan útil en proyectos React y cómo ayuda a crear componentes más seguros y mantenibles.',
    explanation: `## TypeScript en React

React y TypeScript son una combinación muy popular. Juntos hacen que tus componentes sean más seguros, más fáciles de entender y más fáciles de mantener.

### ¿Por qué TypeScript en React?

Sin TypeScript, es fácil pasar la prop incorrecta a un componente y no enterarte hasta que la app falla en el navegador.

Con TypeScript, el error aparece mientras escribes el código, antes de que la app llegue al navegador.

### Un ejemplo simple

\`\`\`tsx
// Sin TypeScript — no hay garantías
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>
}

// Lo puedes llamar con datos incorrectos y no sabes hasta runtime
<Saludo /> // undefined silencioso
<Saludo nombre={42} /> // número donde se espera texto
\`\`\`

\`\`\`tsx
// Con TypeScript — las props son verificadas
interface SaludoProps {
  nombre: string
}

function Saludo({ nombre }: SaludoProps) {
  return <h1>Hola, {nombre}</h1>
}

<Saludo /> // Error: falta la prop 'nombre'
<Saludo nombre={42} /> // Error: 42 no es string
\`\`\`

### ¿Qué aporta TypeScript a React?

| Beneficio | Descripción |
|---|---|
| Props seguras | Sabes exactamente qué datos acepta cada componente |
| Autocompletado | El editor sugiere las props disponibles |
| Errores en edición | Los errores aparecen antes de guardar |
| Refactoring seguro | Cambiar un tipo actualiza todos los usos |
| Documentación viva | Los tipos explican el componente |

### ¿Cómo empieza un proyecto React + TypeScript?

\`\`\`bash
# Con Vite (recomendado para aprender)
npm create vite@latest mi-app -- --template react-ts

# O con Next.js
npx create-next-app@latest mi-app --typescript
\`\`\`

Los archivos de componentes usan extensión \`.tsx\` en lugar de \`.jsx\`.

### Lo que verás en este módulo

En este módulo aprenderás a:
- Tipar props de componentes
- Crear componentes funcionales tipados
- Tipar eventos como clicks y cambios de inputs
- Tipar estados con useState
- Manejar arrays de objetos en listas
- Trabajar con formularios tipados
- Usar props opcionales y valores por defecto
- Evitar errores comunes`,
    codeExample: `// App.tsx — componente React con TypeScript básico

interface CursoCardProps {
  titulo: string
  lecciones: number
  gratis: boolean
}

function CursoCard({ titulo, lecciones, gratis }: CursoCardProps) {
  return (
    <div className="curso-card">
      <h2>{titulo}</h2>
      <p>{lecciones} lecciones</p>
      {gratis && <span>Gratis</span>}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <CursoCard titulo="TypeScript desde Cero" lecciones={251} gratis={true} />
      <CursoCard titulo="React Avanzado" lecciones={40} gratis={false} />

      {/* Error de TypeScript — falta la prop 'titulo' */}
      {/* <CursoCard lecciones={10} gratis={true} /> */}

      {/* Error de TypeScript — lecciones debe ser number */}
      {/* <CursoCard titulo="Python" lecciones="muchas" gratis={true} /> */}
    </div>
  )
}`,
    keyPoints: [
      'TypeScript hace las props de React seguras y verificadas en tiempo de edición',
      'Los archivos de componentes React con TypeScript usan extensión .tsx',
      'Definir una interfaz para las props es la forma más clara de tipar un componente',
      'TypeScript detecta errores de props antes de ejecutar la aplicación',
      'La combinación React + TypeScript es estándar en proyectos profesionales modernos',
    ],
    exercise: {
      description:
        'Crea un componente llamado `ProductoCard` que acepte las props: `nombre` (string), `precio` (number) y `disponible` (boolean). El componente debe mostrar el nombre, el precio formateado con 2 decimales, y el texto "Disponible" o "Agotado" según la prop. Define la interfaz de props correctamente.',
      hint: 'Crea una interfaz ProductoCardProps y úsala en los parámetros del componente. Para formatear el precio usa precio.toFixed(2).',
    },
    quiz: [
      {
        question: '¿Cuál es la extensión correcta para componentes React con TypeScript?',
        options: ['.ts', '.tsx', '.jsx', '.rtsx'],
        correctAnswer: '.tsx',
        correctFeedback: '¡Correcto! Los componentes React con TypeScript usan .tsx para permitir JSX dentro de código TypeScript.',
        incorrectFeedback: 'Los archivos de componentes React con TypeScript usan la extensión .tsx, no .ts (que es solo TypeScript sin JSX).',
      },
      {
        question: '¿Cuál es la forma recomendada de tipar las props de un componente funcional?',
        options: [
          'Usar any para las props',
          'Definir una interfaz y usarla en los parámetros',
          'Poner los tipos directamente sin interfaz',
          'No tipar las props — React las infiere',
        ],
        correctAnswer: 'Definir una interfaz y usarla en los parámetros',
        correctFeedback: '¡Correcto! Definir una interfaz con el nombre de las props es la forma más clara y reutilizable.',
        incorrectFeedback: 'La práctica recomendada es definir una interfaz (por ejemplo, interface BotoProps) y usarla en los parámetros del componente.',
      },
      {
        question: 'Si un componente acepta una prop "edad: number" y la llamas con edad="25", ¿qué ocurre en TypeScript?',
        options: [
          'Funciona porque React convierte el tipo automáticamente',
          'Solo avisa en producción',
          'TypeScript muestra un error en tiempo de edición',
          'Nada — TypeScript no verifica JSX',
        ],
        correctAnswer: 'TypeScript muestra un error en tiempo de edición',
        correctFeedback: '¡Correcto! TypeScript detecta el tipo incorrecto mientras escribes el código, antes de ejecutar la app.',
        incorrectFeedback: 'TypeScript verifica los tipos de las props mientras escribes. Pasar "25" (string) donde se espera 25 (number) es un error inmediato.',
      },
      {
        question: '¿Qué ventaja principal trae TypeScript para el desarrollo React?',
        options: [
          'Hace que la app sea más rápida en el navegador',
          'Detecta errores de props en tiempo de edición, antes de ejecutar',
          'Elimina la necesidad de escribir CSS',
          'Permite usar React sin node_modules',
        ],
        correctAnswer: 'Detecta errores de props en tiempo de edición, antes de ejecutar',
        correctFeedback: '¡Exacto! La ventaja clave es que los errores aparecen mientras escribes, no cuando el usuario usa la app.',
        incorrectFeedback: 'La ventaja principal es detectar errores de tipos en tiempo de edición, evitando bugs que solo aparecerían en runtime.',
      },
      {
        question: '¿Qué comando crea un proyecto React con TypeScript usando Vite?',
        options: [
          'npm create react-app mi-app --typescript',
          'npm create vite@latest mi-app -- --template react-ts',
          'npx react --typescript mi-app',
          'npm init react-typescript mi-app',
        ],
        correctAnswer: 'npm create vite@latest mi-app -- --template react-ts',
        correctFeedback: '¡Correcto! Vite con el template react-ts crea un proyecto React + TypeScript listo para usar.',
        incorrectFeedback: 'El comando correcto para crear un proyecto React + TypeScript con Vite es: npm create vite@latest mi-app -- --template react-ts',
      },
    ],
  },
  {
    slug: 'props-tipadas-react',
    title: 'Props tipadas',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 206,
    description:
      'Aprende a definir tipos para las props de un componente React.',
    explanation: `## Props tipadas en React

Las **props** son los datos que un componente padre pasa a un componente hijo. Tiparlas correctamente hace que tus componentes sean más seguros y fáciles de usar.

### La forma más común: interface

\`\`\`tsx
interface UsuarioCardProps {
  nombre: string
  email: string
  edad: number
  activo: boolean
}

function UsuarioCard({ nombre, email, edad, activo }: UsuarioCardProps) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{email}</p>
      <p>Edad: {edad}</p>
      <span>{activo ? 'Activo' : 'Inactivo'}</span>
    </div>
  )
}
\`\`\`

### También puedes usar type

\`\`\`tsx
type BotoProps = {
  texto: string
  onClick: () => void
  variante: 'primario' | 'secundario'
}

function Boton({ texto, onClick, variante }: BotoProps) {
  return (
    <button onClick={onClick} className={variante}>
      {texto}
    </button>
  )
}
\`\`\`

### Props opcionales con ?

\`\`\`tsx
interface TarjetaProps {
  titulo: string
  descripcion?: string  // Opcional — puede no estar
  imagen?: string       // Opcional — puede no estar
}

function Tarjeta({ titulo, descripcion, imagen }: TarjetaProps) {
  return (
    <div>
      {imagen && <img src={imagen} alt={titulo} />}
      <h3>{titulo}</h3>
      {descripcion && <p>{descripcion}</p>}
    </div>
  )
}
\`\`\`

### Props que aceptan children

\`\`\`tsx
interface ContenedorProps {
  children: React.ReactNode
  className?: string
}

function Contenedor({ children, className }: ContenedorProps) {
  return <div className={className}>{children}</div>
}
\`\`\`

### Props con funciones como callbacks

\`\`\`tsx
interface ListaProps {
  items: string[]
  onSeleccionar: (item: string) => void
}

function Lista({ items, onSeleccionar }: ListaProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onSeleccionar(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}
\`\`\``,
    codeExample: `// CourseCard.tsx — ejemplo real de props tipadas

interface CursoProps {
  slug: string
  titulo: string
  descripcion: string
  lecciones: number
  icono: string
  nivel: 'principiante' | 'intermedio' | 'avanzado'
  gratis?: boolean          // Opcional
  onVerCurso: (slug: string) => void  // Callback
}

function CursoCard({
  slug,
  titulo,
  descripcion,
  lecciones,
  icono,
  nivel,
  gratis = true,            // Valor por defecto
  onVerCurso,
}: CursoProps) {
  return (
    <div className="curso-card">
      <span>{icono}</span>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <div>
        <span>{lecciones} lecciones</span>
        <span>{nivel}</span>
        {gratis && <span>Gratis</span>}
      </div>
      <button onClick={() => onVerCurso(slug)}>
        Ver curso
      </button>
    </div>
  )
}

// Uso correcto — TypeScript verifica cada prop
<CursoCard
  slug="typescript"
  titulo="TypeScript desde Cero"
  descripcion="Aprende TypeScript paso a paso"
  lecciones={251}
  icono="🔷"
  nivel="principiante"
  onVerCurso={(slug) => console.log(slug)}
/>`,
    keyPoints: [
      'Las props se tipan con una interfaz o type definidos antes del componente',
      'Las props opcionales usan ? y pueden ser undefined si no se pasan',
      'Los callbacks se tipan como funciones: (arg: Tipo) => RetornoTipo',
      'children se tipa como React.ReactNode para aceptar cualquier contenido JSX',
      'Tanto interface como type funcionan para props — elige el que prefieras ser consistente',
    ],
    exercise: {
      description:
        'Crea un componente `LeccionCard` con las props: `titulo` (string), `numero` (number), `completada` (boolean), `duracion` (string, opcional), y `onClick` (función que no retorna nada). El componente muestra el número, el título, la duración si existe, y un checkmark si está completada.',
      hint: 'La función onClick se tipa como () => void. La prop opcional duracion usa ? y debes mostrarla condicionalmente con {duracion && <span>{duracion}</span>}.',
    },
    quiz: [
      {
        question: '¿Cómo se marca una prop como opcional en TypeScript?',
        options: ['Con ! al final del nombre', 'Con ? al final del nombre', 'Con optional: true', 'Con || undefined'],
        correctAnswer: 'Con ? al final del nombre',
        correctFeedback: '¡Correcto! El signo ? hace que una prop sea opcional, lo que significa que puede ser undefined.',
        incorrectFeedback: 'Las props opcionales se marcan con ? después del nombre: descripcion?: string',
      },
      {
        question: '¿Cuál es el tipo correcto para tipar una prop "onClick" que no recibe argumentos y no retorna nada?',
        options: ['onClick: void', 'onClick: null', 'onClick: () => void', 'onClick: Function'],
        correctAnswer: 'onClick: () => void',
        correctFeedback: '¡Correcto! () => void es el tipo para funciones sin parámetros que no retornan ningún valor.',
        incorrectFeedback: 'Una función sin parámetros que no retorna nada se tipa como () => void.',
      },
      {
        question: '¿Qué tipo se usa para aceptar cualquier contenido JSX en children?',
        options: ['React.Children', 'JSX.Element', 'React.ReactNode', 'React.Component'],
        correctAnswer: 'React.ReactNode',
        correctFeedback: '¡Correcto! React.ReactNode acepta texto, elementos JSX, arrays, null y undefined — es el tipo más flexible para children.',
        incorrectFeedback: 'React.ReactNode es el tipo más completo para children: acepta texto, JSX, arrays, null, etc.',
      },
      {
        question: '¿Qué diferencia hay entre usar "interface" y "type" para props?',
        options: [
          'Interface es más rápida en compilación',
          'Type permite props opcionales, interface no',
          'Son funcionalmente equivalentes para tipar props — elige uno y sé consistente',
          'Interface solo funciona en archivos .tsx',
        ],
        correctAnswer: 'Son funcionalmente equivalentes para tipar props — elige uno y sé consistente',
        correctFeedback: '¡Correcto! Ambos funcionan para tipar props. Lo más importante es ser consistente en el proyecto.',
        incorrectFeedback: 'Tanto interface como type funcionan igualmente bien para tipar props en React. La elección es de preferencia.',
      },
      {
        question: 'Si una prop es "nivel: \'principiante\' | \'avanzado\'", ¿qué pasa si le pasas nivel="experto"?',
        options: [
          'TypeScript lo acepta porque es un string',
          'React lo convierte automáticamente al valor más cercano',
          'TypeScript muestra un error porque "experto" no está en el union type',
          'Solo falla en producción',
        ],
        correctAnswer: 'TypeScript muestra un error porque "experto" no está en el union type',
        correctFeedback: '¡Exacto! Los union types de literales solo aceptan exactamente los valores definidos.',
        incorrectFeedback: 'Un union type literal como "principiante" | "avanzado" solo acepta esos valores exactos. "experto" causaría un error de tipo.',
      },
    ],
  },
  {
    slug: 'componentes-funcionales-tipados',
    title: 'Componentes funcionales tipados',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 207,
    description:
      'Aprende a crear componentes funcionales con props tipadas de forma clara y moderna.',
    explanation: `## Componentes funcionales tipados

La forma más moderna y recomendada de escribir componentes en React es como funciones con tipos explícitos en los parámetros.

### La forma más simple y recomendada

\`\`\`tsx
interface Props {
  mensaje: string
}

function Alerta({ mensaje }: Props) {
  return <div className="alerta">{mensaje}</div>
}
\`\`\`

Esto es equivalente a:

\`\`\`tsx
function Alerta(props: Props) {
  return <div className="alerta">{props.mensaje}</div>
}
\`\`\`

### ¿Qué es React.FC y por qué evitarlo?

Antes era muy común usar \`React.FC\`:

\`\`\`tsx
// Forma antigua — NO recomendada
const Alerta: React.FC<Props> = ({ mensaje }) => {
  return <div>{mensaje}</div>
}
\`\`\`

El problema de \`React.FC\`:
- Antes incluía \`children\` automáticamente, ahora ya no (cambió en React 18)
- Agrega complejidad innecesaria
- La forma sin \`React.FC\` es más directa y legible

### La forma moderna recomendada

\`\`\`tsx
// ✅ Forma recomendada — sin React.FC
interface Props {
  titulo: string
  cantidad: number
}

function Contador({ titulo, cantidad }: Props) {
  return (
    <div>
      <h2>{titulo}</h2>
      <span>{cantidad}</span>
    </div>
  )
}

export default Contador
\`\`\`

### Componente con retorno explícito

Si quieres ser muy explícito, puedes anotar el retorno:

\`\`\`tsx
function Boton({ texto }: { texto: string }): JSX.Element {
  return <button>{texto}</button>
}
\`\`\`

Pero no es necesario — TypeScript lo infiere correctamente.

### Componentes que pueden retornar null

\`\`\`tsx
interface BannerProps {
  mostrar: boolean
  mensaje: string
}

function Banner({ mostrar, mensaje }: BannerProps): JSX.Element | null {
  if (!mostrar) return null
  return <div className="banner">{mensaje}</div>
}
\`\`\``,
    codeExample: `// Componentes funcionales tipados — ejemplos prácticos

// ─── Componente simple ────────────────────────────────────────
interface NivelBadgeProps {
  nivel: 'principiante' | 'intermedio' | 'avanzado'
}

function NivelBadge({ nivel }: NivelBadgeProps) {
  const colores = {
    principiante: 'bg-green-100 text-green-800',
    intermedio: 'bg-yellow-100 text-yellow-800',
    avanzado: 'bg-red-100 text-red-800',
  }

  return (
    <span className={\`badge \${colores[nivel]}\`}>
      {nivel}
    </span>
  )
}

// ─── Componente con children ──────────────────────────────────
interface SeccionProps {
  titulo: string
  children: React.ReactNode
}

function Seccion({ titulo, children }: SeccionProps) {
  return (
    <section>
      <h2>{titulo}</h2>
      <div>{children}</div>
    </section>
  )
}

// ─── Uso ──────────────────────────────────────────────────────
function App() {
  return (
    <Seccion titulo="Cursos disponibles">
      <NivelBadge nivel="principiante" />
      <NivelBadge nivel="intermedio" />
      {/* Error: nivel="experto" no existe en el union type */}
    </Seccion>
  )
}`,
    keyPoints: [
      'La forma recomendada es desestructurar props con su tipo en los parámetros de la función',
      'React.FC no se recomienda hoy — es más verboso y tiene comportamientos cambiantes',
      'TypeScript infiere el tipo de retorno JSX.Element automáticamente',
      'Los componentes que pueden retornar null se anotan como JSX.Element | null',
      'Exportar el componente como función nombrada es más claro que arrow functions anónimas',
    ],
    exercise: {
      description:
        'Crea dos componentes: `EstadoBadge` que recibe `estado: "activo" | "inactivo" | "pendiente"` y muestra el texto con color diferente; y `PerfilUsuario` que recibe `nombre`, `email`, y usa `EstadoBadge` internamente. No uses React.FC.',
      hint: 'Define las interfaces antes de cada componente. Para los colores usa un objeto de mapeo como { activo: "green", inactivo: "gray", pendiente: "yellow" }.',
    },
    quiz: [
      {
        question: '¿Por qué NO se recomienda usar React.FC hoy en día?',
        options: [
          'Porque es más lento en runtime',
          'Porque no existe en React 18',
          'Porque agrega complejidad innecesaria y su comportamiento cambió en React 18',
          'Porque no soporta TypeScript',
        ],
        correctAnswer: 'Porque agrega complejidad innecesaria y su comportamiento cambió en React 18',
        correctFeedback: '¡Correcto! React.FC era popular antes pero su comportamiento con children cambió y la forma directa es más clara.',
        incorrectFeedback: 'React.FC existe pero no se recomienda porque cambió en React 18 y la forma directa (sin FC) es más simple y clara.',
      },
      {
        question: '¿Cuál es la forma más moderna de tipar props en un componente funcional?',
        options: [
          'const Comp: React.FC<Props> = (props) => ...',
          'function Comp(props: any) ...',
          'function Comp({ prop1, prop2 }: Props) ...',
          'class Comp extends React.Component<Props>',
        ],
        correctAnswer: 'function Comp({ prop1, prop2 }: Props) ...',
        correctFeedback: '¡Exacto! Desestructurar las props con el tipo es la forma más directa, clara y moderna.',
        incorrectFeedback: 'La forma moderna es desestructurar directamente en los parámetros con el tipo: function Comp({ prop }: Props)',
      },
      {
        question: '¿Necesitas anotar explícitamente el tipo de retorno JSX.Element en cada componente?',
        options: [
          'Sí, siempre es obligatorio',
          'No, TypeScript lo infiere correctamente',
          'Solo si el componente tiene más de 10 líneas',
          'Solo en componentes con hooks',
        ],
        correctAnswer: 'No, TypeScript lo infiere correctamente',
        correctFeedback: '¡Correcto! TypeScript infiere el tipo de retorno. Solo necesitas anotarlo si quieres ser muy explícito o si el componente puede retornar null.',
        incorrectFeedback: 'TypeScript infiere JSX.Element automáticamente. No es necesario anotarlo manualmente en cada componente.',
      },
      {
        question: '¿Cómo se anota un componente que puede retornar null?',
        options: [
          'function Comp(): null',
          'function Comp(): JSX.Element | null',
          'function Comp(): nullable',
          'function Comp(): React.Maybe',
        ],
        correctAnswer: 'function Comp(): JSX.Element | null',
        correctFeedback: '¡Correcto! El union type JSX.Element | null indica que el componente puede renderizar algo o nada.',
        incorrectFeedback: 'Para componentes que pueden retornar null se usa el union type: JSX.Element | null',
      },
      {
        question: 'Si tienes "nivel: \'a\' | \'b\'" y un objeto de mapeo { a: "rojo", b: "azul" }, ¿TypeScript sabe que nivel[nivel] es seguro?',
        options: [
          'No, siempre es un error',
          'Sí, porque el union type garantiza que nivel es siempre una clave válida del objeto',
          'Solo si usas as string',
          'Solo con noImplicitAny desactivado',
        ],
        correctAnswer: 'Sí, porque el union type garantiza que nivel es siempre una clave válida del objeto',
        correctFeedback: '¡Correcto! Si el tipo de nivel coincide con las claves del objeto, TypeScript sabe que el acceso es seguro.',
        incorrectFeedback: 'Cuando el union type de una variable coincide exactamente con las claves de un objeto, TypeScript acepta el acceso como seguro.',
      },
    ],
  },
  {
    slug: 'eventos-react-typescript',
    title: 'Eventos en React con TypeScript',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 208,
    description:
      'Aprende a tipar eventos como clicks, cambios en inputs y envío de formularios dentro de React.',
    explanation: `## Eventos en React con TypeScript

Los eventos de React tienen tipos específicos según el elemento HTML que los genera. TypeScript te ayuda a usarlos correctamente.

### El tipo más común: React.MouseEvent

\`\`\`tsx
function Boton() {
  function handleClick(evento: React.MouseEvent<HTMLButtonElement>) {
    console.log('Botón clickeado')
    console.log(evento.currentTarget.textContent)
  }

  return <button onClick={handleClick}>Click aquí</button>
}
\`\`\`

### Eventos de input: React.ChangeEvent

\`\`\`tsx
function InputTexto() {
  function handleChange(evento: React.ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.value)  // El valor del input
  }

  return <input type="text" onChange={handleChange} />
}
\`\`\`

### Formularios: React.FormEvent

\`\`\`tsx
function Formulario() {
  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('Formulario enviado')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  )
}
\`\`\`

### Tabla de eventos comunes

| Evento | Tipo en TypeScript | Elemento |
|---|---|---|
| onClick | React.MouseEvent\<HTMLButtonElement\> | button |
| onChange | React.ChangeEvent\<HTMLInputElement\> | input |
| onChange | React.ChangeEvent\<HTMLSelectElement\> | select |
| onSubmit | React.FormEvent\<HTMLFormElement\> | form |
| onKeyDown | React.KeyboardEvent\<HTMLInputElement\> | input |
| onFocus | React.FocusEvent\<HTMLInputElement\> | input |

### Truco: dejar que TypeScript infiera el tipo

Si pones el manejador inline, TypeScript infiere el tipo automáticamente:

\`\`\`tsx
// TypeScript infiere el tipo del evento automáticamente aquí
<input onChange={(e) => console.log(e.target.value)} />
\`\`\`

Pero si lo defines fuera del JSX, debes anotarlo manualmente.`,
    codeExample: `// App.tsx — manejo de eventos tipados

import { useState } from 'react'

function BuscadorCursos() {
  const [busqueda, setBusqueda] = useState('')
  const [enviado, setEnviado] = useState(false)

  // ─── Evento de input ────────────────────────────────────────
  function handleBusqueda(e: React.ChangeEvent<HTMLInputElement>) {
    setBusqueda(e.target.value)
  }

  // ─── Evento de formulario ───────────────────────────────────
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
    console.log('Buscando:', busqueda)
  }

  // ─── Evento de botón ────────────────────────────────────────
  function handleLimpiar(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setBusqueda('')
    setEnviado(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={busqueda}
        onChange={handleBusqueda}
        placeholder="Buscar curso..."
      />
      <button type="submit">Buscar</button>
      <button onClick={handleLimpiar}>Limpiar</button>
      {enviado && <p>Buscaste: {busqueda}</p>}
    </form>
  )
}`,
    keyPoints: [
      'Cada tipo de evento tiene un tipo específico en React según el elemento HTML',
      'React.ChangeEvent<HTMLInputElement> es el más común para inputs de texto',
      'React.FormEvent<HTMLFormElement> se usa para el envío de formularios',
      'Si pones el handler inline en JSX, TypeScript infiere el tipo automáticamente',
      'Si defines el handler fuera del JSX, debes anotar el tipo del evento manualmente',
    ],
    exercise: {
      description:
        'Crea un componente `FormularioContacto` con un input para nombre, un textarea para mensaje, y un botón de enviar. Tipa correctamente el evento onChange del input (HTMLInputElement), el onChange del textarea (HTMLTextAreaElement) y el onSubmit del formulario. Muestra un resumen al enviar.',
      hint: 'El textarea usa React.ChangeEvent<HTMLTextAreaElement>, no HTMLInputElement. El form usa React.FormEvent<HTMLFormElement> y necesita e.preventDefault().',
    },
    quiz: [
      {
        question: '¿Qué tipo de evento se usa para el onChange de un input de texto?',
        options: [
          'React.InputEvent<HTMLInputElement>',
          'React.ChangeEvent<HTMLInputElement>',
          'React.Event<HTMLInputElement>',
          'HTMLInputEvent',
        ],
        correctAnswer: 'React.ChangeEvent<HTMLInputElement>',
        correctFeedback: '¡Correcto! React.ChangeEvent<HTMLInputElement> es el tipo correcto para onChange en un input.',
        incorrectFeedback: 'El tipo correcto es React.ChangeEvent<HTMLInputElement>. El genérico indica el elemento HTML concreto.',
      },
      {
        question: '¿Cómo obtienes el valor actual de un input en su manejador onChange?',
        options: ['e.value', 'e.target.value', 'e.currentTarget.text', 'e.input.value'],
        correctAnswer: 'e.target.value',
        correctFeedback: '¡Exacto! e.target.value accede al valor actual del elemento que disparó el evento.',
        incorrectFeedback: 'El valor de un input se obtiene con e.target.value dentro del manejador onChange.',
      },
      {
        question: '¿Qué tipo usa el evento onSubmit de un formulario?',
        options: [
          'React.ClickEvent<HTMLFormElement>',
          'React.SubmitEvent<HTMLFormElement>',
          'React.FormEvent<HTMLFormElement>',
          'React.MouseEvent<HTMLFormElement>',
        ],
        correctAnswer: 'React.FormEvent<HTMLFormElement>',
        correctFeedback: '¡Correcto! React.FormEvent<HTMLFormElement> es el tipo para el onSubmit de formularios.',
        incorrectFeedback: 'El evento de envío de formulario usa React.FormEvent<HTMLFormElement>.',
      },
      {
        question: 'Si pones el handler directamente en JSX como onChange={(e) => ...}, ¿necesitas anotar el tipo de e?',
        options: [
          'Sí, siempre debes anotar el tipo',
          'No, TypeScript lo infiere automáticamente del elemento',
          'Solo si el handler tiene más de 3 líneas',
          'Solo en archivos .ts, no en .tsx',
        ],
        correctAnswer: 'No, TypeScript lo infiere automáticamente del elemento',
        correctFeedback: '¡Correcto! Cuando el handler está inline, TypeScript conoce el elemento y puede inferir el tipo del evento.',
        incorrectFeedback: 'Cuando el handler está directamente en el JSX, TypeScript infiere el tipo del evento según el elemento HTML.',
      },
      {
        question: '¿Qué método debes llamar en handleSubmit para evitar que la página se recargue?',
        options: ['e.stopPropagation()', 'e.preventDefault()', 'e.stopDefault()', 'e.cancelReload()'],
        correctAnswer: 'e.preventDefault()',
        correctFeedback: '¡Correcto! e.preventDefault() cancela el comportamiento por defecto del formulario (recargar la página).',
        incorrectFeedback: 'Para evitar la recarga de página al enviar un formulario debes llamar a e.preventDefault().',
      },
    ],
  },
  {
    slug: 'usestate-typescript',
    title: 'useState con TypeScript',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 209,
    description:
      'Aprende a tipar estados simples, arrays, objetos y estados que pueden ser null.',
    explanation: `## useState con TypeScript

React infiere el tipo del estado a partir del valor inicial en la mayoría de los casos. Pero hay situaciones donde necesitas ser explícito.

### Cuando TypeScript infiere solo

\`\`\`tsx
// TypeScript infiere el tipo automáticamente
const [nombre, setNombre] = useState('Ana')       // string
const [edad, setEdad] = useState(25)              // number
const [activo, setActivo] = useState(true)        // boolean
\`\`\`

### Cuando necesitas ser explícito: arrays vacíos

\`\`\`tsx
// ❌ Sin tipo explícito — TypeScript infiere never[]
const [items, setItems] = useState([])

// ✅ Con tipo explícito
const [items, setItems] = useState<string[]>([])
const [cursos, setCursos] = useState<Curso[]>([])
\`\`\`

### Cuando necesitas ser explícito: estados con null

\`\`\`tsx
interface Usuario {
  id: number
  nombre: string
  email: string
}

// ❌ Sin tipo — TypeScript infiere null, no puede cambiar después
const [usuario, setUsuario] = useState(null)

// ✅ Con tipo — puede ser Usuario o null
const [usuario, setUsuario] = useState<Usuario | null>(null)
\`\`\`

### Estados con objetos

\`\`\`tsx
interface Formulario {
  nombre: string
  email: string
  mensaje: string
}

const [form, setForm] = useState<Formulario>({
  nombre: '',
  email: '',
  mensaje: '',
})

// Actualizar una sola propiedad
function handleChange(campo: keyof Formulario, valor: string) {
  setForm((prev) => ({ ...prev, [campo]: valor }))
}
\`\`\`

### Estado con uniones

\`\`\`tsx
type EstadoCarga = 'inactivo' | 'cargando' | 'exitoso' | 'error'

const [estado, setEstado] = useState<EstadoCarga>('inactivo')

// Solo puedes asignar valores del union type
setEstado('cargando')  // ✅
setEstado('fallido')   // ❌ Error
\`\`\``,
    codeExample: `// BuscadorUsuarios.tsx — useState con diferentes tipos

import { useState } from 'react'

interface Usuario {
  id: number
  nombre: string
  email: string
}

type EstadoCarga = 'inactivo' | 'cargando' | 'exitoso' | 'error'

function BuscadorUsuarios() {
  // Estado simple — TypeScript infiere string
  const [busqueda, setBusqueda] = useState('')

  // Array de objetos — necesita tipo explícito
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  // Objeto o null — necesita tipo explícito
  const [seleccionado, setSeleccionado] = useState<Usuario | null>(null)

  // Union type para estado de carga
  const [estado, setEstado] = useState<EstadoCarga>('inactivo')

  async function buscar() {
    setEstado('cargando')
    try {
      // Simulación de llamada a API
      const datos: Usuario[] = [
        { id: 1, nombre: 'Ana García', email: 'ana@email.com' },
        { id: 2, nombre: 'Carlos López', email: 'carlos@email.com' },
      ]
      setUsuarios(datos)
      setEstado('exitoso')
    } catch {
      setEstado('error')
    }
  }

  return (
    <div>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar usuario..."
      />
      <button onClick={buscar}>Buscar</button>
      {estado === 'cargando' && <p>Cargando...</p>}
      {estado === 'error' && <p>Error al cargar</p>}
      {usuarios.map((u) => (
        <div key={u.id} onClick={() => setSeleccionado(u)}>
          {u.nombre}
        </div>
      ))}
      {seleccionado && <p>Seleccionado: {seleccionado.nombre}</p>}
    </div>
  )
}`,
    keyPoints: [
      'TypeScript infiere el tipo de useState del valor inicial en casos simples',
      'Los arrays vacíos necesitan tipo explícito: useState<string[]>([])',
      'Los estados que empiezan en null y luego son un objeto necesitan: useState<Tipo | null>(null)',
      'Los union types de literales son útiles para estados de carga o navegación',
      'Puedes usar el genérico de useState para cualquier tipo complejo',
    ],
    exercise: {
      description:
        'Crea un componente `ListaCompras` con: un estado para la lista de items (array de objetos con nombre: string y cantidad: number), un estado para el item siendo editado (el objeto o null), y un estado para el input de búsqueda (string). Implementa agregar items a la lista.',
      hint: 'La lista de items necesita useState<{nombre: string; cantidad: number}[]>([]). El item editado necesita useState<{nombre: string; cantidad: number} | null>(null).',
    },
    quiz: [
      {
        question: '¿Por qué necesitas useState<string[]>([]) en lugar de useState([])?',
        options: [
          'Por convención del equipo',
          'Porque useState([]) infiere never[] y no puedes añadir strings después',
          'Porque los arrays no funcionan sin tipo genérico',
          'No hay diferencia — ambas formas son iguales',
        ],
        correctAnswer: 'Porque useState([]) infiere never[] y no puedes añadir strings después',
        correctFeedback: '¡Correcto! Un array vacío sin tipo se infiere como never[], lo que hace que no puedas añadir elementos.',
        incorrectFeedback: 'useState([]) infiere never[], que es un array que nunca puede tener elementos. Por eso necesitas el genérico explícito.',
      },
      {
        question: 'Para un estado que empieza como null pero luego será un objeto Usuario, ¿qué tipo usas?',
        options: [
          'useState<Usuario>(null)',
          'useState<Usuario | null>(null)',
          'useState<null>(null)',
          'useState<any>(null)',
        ],
        correctAnswer: 'useState<Usuario | null>(null)',
        correctFeedback: '¡Exacto! El union type Usuario | null indica que el estado puede ser el objeto o null.',
        incorrectFeedback: 'Para un estado que puede ser un objeto o null se usa el union type: useState<Usuario | null>(null)',
      },
      {
        question: '¿Para qué sirve usar un union type literal como "inactivo" | "cargando" | "exitoso" en el estado?',
        options: [
          'Para que el estado sea más rápido',
          'Para limitar los valores posibles y evitar errores al asignar valores inválidos',
          'Es solo decorativo — no tiene efecto real',
          'Para que React renderice más veces',
        ],
        correctAnswer: 'Para limitar los valores posibles y evitar errores al asignar valores inválidos',
        correctFeedback: '¡Correcto! TypeScript muestra error si intentas asignar un valor que no está en el union type.',
        incorrectFeedback: 'Los union types literales en estado limitan qué valores son válidos — TypeScript error si asignas algo fuera del union.',
      },
      {
        question: '¿Necesitas anotar el tipo en useState(\'Ana\') siendo \'Ana\' un string literal?',
        options: [
          'Sí, siempre debes anotar',
          'No, TypeScript infiere string automáticamente',
          'Sí, porque los strings siempre son ambiguos',
          'Depende de si strict está activado',
        ],
        correctAnswer: 'No, TypeScript infiere string automáticamente',
        correctFeedback: '¡Correcto! TypeScript infiere el tipo del valor inicial. useState("Ana") es automáticamente string.',
        incorrectFeedback: 'Cuando el valor inicial es un literal como una cadena o número, TypeScript infiere el tipo correctamente.',
      },
      {
        question: '¿Cómo tipas el estado de un objeto con varias propiedades cuando el valor inicial ya lo define?',
        options: [
          'useState<object>({ nombre: "", edad: 0 })',
          'TypeScript no puede tipar objetos en useState',
          'useState({ nombre: "", edad: 0 }) — TypeScript infiere el tipo del valor inicial',
          'useState<any>({ nombre: "", edad: 0 })',
        ],
        correctAnswer: 'useState({ nombre: "", edad: 0 }) — TypeScript infiere el tipo del valor inicial',
        correctFeedback: '¡Correcto! Cuando el valor inicial tiene todas las propiedades bien definidas, TypeScript infiere el tipo completo automáticamente.',
        incorrectFeedback: 'Si el valor inicial define completamente el objeto, TypeScript infiere el tipo. Solo necesitas el genérico explícito cuando el valor inicial no revela la forma completa.',
      },
    ],
  },
  {
    slug: 'arrays-objetos-react-typescript',
    title: 'Tipar arrays de objetos en React',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 210,
    description:
      'Aprende a renderizar listas de objetos tipadas en componentes React.',
    explanation: `## Tipar arrays de objetos en React

Renderizar listas de objetos es muy común en React. TypeScript te ayuda a asegurarte de que cada objeto tiene la forma correcta antes de renderizarlo.

### Definir el tipo del objeto

\`\`\`tsx
interface Producto {
  id: number
  nombre: string
  precio: number
  disponible: boolean
  categoria: string
}
\`\`\`

### Tipar el array de props

\`\`\`tsx
interface ListaProductosProps {
  productos: Producto[]
}

function ListaProductos({ productos }: ListaProductosProps) {
  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          {producto.nombre} — \${producto.precio}
        </li>
      ))}
    </ul>
  )
}
\`\`\`

### Componente de item separado

\`\`\`tsx
interface ProductoItemProps {
  producto: Producto
  onSeleccionar: (id: number) => void
}

function ProductoItem({ producto, onSeleccionar }: ProductoItemProps) {
  return (
    <div onClick={() => onSeleccionar(producto.id)}>
      <h3>{producto.nombre}</h3>
      <p>\${producto.precio}</p>
      {!producto.disponible && <span>Agotado</span>}
    </div>
  )
}
\`\`\`

### Filtrar y transformar con tipos

\`\`\`tsx
function ProductosDisponibles({ productos }: ListaProductosProps) {
  // TypeScript sabe que cada elemento es Producto
  const disponibles = productos.filter((p) => p.disponible)
  const ordenados = disponibles.sort((a, b) => a.precio - b.precio)

  return (
    <div>
      {ordenados.map((p) => (
        <ProductoItem
          key={p.id}
          producto={p}
          onSeleccionar={(id) => console.log('Seleccionado:', id)}
        />
      ))}
    </div>
  )
}
\`\`\`

### La importancia del key

El prop \`key\` no tiene tipo especial — React lo maneja internamente. Usa siempre un identificador único, preferiblemente el ID del objeto.`,
    codeExample: `// CourseList.tsx — lista de cursos tipada

interface Curso {
  slug: string
  titulo: string
  descripcion: string
  lecciones: number
  nivel: 'principiante' | 'intermedio' | 'avanzado'
  icono: string
}

interface CursoItemProps {
  curso: Curso
  onVerCurso: (slug: string) => void
}

// Componente de un solo elemento
function CursoItem({ curso, onVerCurso }: CursoItemProps) {
  return (
    <div className="curso-item">
      <span>{curso.icono}</span>
      <h3>{curso.titulo}</h3>
      <p>{curso.descripcion}</p>
      <span>{curso.lecciones} lecciones · {curso.nivel}</span>
      <button onClick={() => onVerCurso(curso.slug)}>
        Ver curso
      </button>
    </div>
  )
}

interface ListaCursosProps {
  cursos: Curso[]
  filtroNivel?: Curso['nivel']  // Reutilizar el tipo del campo
}

// Componente de lista
function ListaCursos({ cursos, filtroNivel }: ListaCursosProps) {
  const cursosFiltrados = filtroNivel
    ? cursos.filter((c) => c.nivel === filtroNivel)
    : cursos

  if (cursosFiltrados.length === 0) {
    return <p>No hay cursos disponibles.</p>
  }

  return (
    <div className="lista-cursos">
      {cursosFiltrados.map((curso) => (
        <CursoItem
          key={curso.slug}
          curso={curso}
          onVerCurso={(slug) => console.log('Ir a:', slug)}
        />
      ))}
    </div>
  )
}`,
    keyPoints: [
      'Define la interfaz del objeto individual primero, luego úsala en el array',
      'Separa el componente de lista del componente de item individual para mayor claridad',
      'Puedes usar Curso["nivel"] para reutilizar el tipo de un campo específico',
      'filter, map y sort mantienen el tipo del array — TypeScript los entiende',
      'Usa siempre un identificador único como key — preferiblemente el ID del objeto',
    ],
    exercise: {
      description:
        'Crea una interfaz `Leccion` con id, titulo, duracion (string), completada (boolean) y modulo (string). Crea un componente `LeccionItem` y un componente `ListaLecciones` que recibe lecciones como prop. Implementa un filtro que solo muestre lecciones no completadas cuando se pasa la prop `soloIncompletas?: boolean`.',
      hint: 'El filtro sería: const filtradas = soloIncompletas ? lecciones.filter(l => !l.completada) : lecciones',
    },
    quiz: [
      {
        question: '¿Cómo tipas una prop que acepta un array de objetos Producto?',
        options: [
          'productos: Array',
          'productos: object[]',
          'productos: Producto[]',
          'productos: List<Producto>',
        ],
        correctAnswer: 'productos: Producto[]',
        correctFeedback: '¡Correcto! Producto[] es el tipo para un array de elementos del tipo Producto.',
        incorrectFeedback: 'Para un array de objetos Producto se usa Producto[]. Esto garantiza que cada elemento tiene la forma correcta.',
      },
      {
        question: '¿Qué pasa con el tipo cuando haces productos.filter((p) => p.disponible)?',
        options: [
          'El resultado es unknown[]',
          'El resultado pierde el tipo y se vuelve any[]',
          'El resultado sigue siendo Producto[]',
          'TypeScript no puede inferir el tipo del resultado',
        ],
        correctAnswer: 'El resultado sigue siendo Producto[]',
        correctFeedback: '¡Correcto! filter en un array tipado mantiene el tipo de los elementos en el resultado.',
        incorrectFeedback: 'filter en Producto[] devuelve Producto[]. TypeScript mantiene el tipo a través de operaciones de array.',
      },
      {
        question: '¿Qué hace Curso["nivel"] como tipo?',
        options: [
          'Accede al valor de nivel en tiempo de ejecución',
          'Crea un nuevo tipo igual al tipo del campo nivel en la interfaz Curso',
          'Es un error de sintaxis',
          'Solo funciona con type, no con interface',
        ],
        correctAnswer: 'Crea un nuevo tipo igual al tipo del campo nivel en la interfaz Curso',
        correctFeedback: '¡Correcto! Esta sintaxis de indexed access type reutiliza el tipo de un campo de la interfaz.',
        incorrectFeedback: 'Curso["nivel"] es un indexed access type que extrae el tipo del campo "nivel" de la interfaz Curso.',
      },
      {
        question: '¿Por qué es importante el prop key en la renderización de listas?',
        options: [
          'Para que TypeScript pueda tipar la lista',
          'Para que React pueda identificar qué elementos cambiaron y actualizar eficientemente el DOM',
          'Es solo decorativo, no tiene efecto real',
          'Para ordenar la lista automáticamente',
        ],
        correctAnswer: 'Para que React pueda identificar qué elementos cambiaron y actualizar eficientemente el DOM',
        correctFeedback: '¡Correcto! key ayuda a React a identificar elementos únicos en la lista para actualizaciones eficientes.',
        incorrectFeedback: 'key es un identificador que React usa internamente para saber qué elementos cambiaron, agregar, o eliminar eficientemente.',
      },
      {
        question: '¿Qué tipo devuelve productos.sort((a, b) => a.precio - b.precio)?',
        options: [
          'unknown[]',
          'any[]',
          'Producto[]',
          'Array<never>',
        ],
        correctAnswer: 'Producto[]',
        correctFeedback: '¡Correcto! sort, como filter y map, preserva el tipo del array original.',
        incorrectFeedback: 'sort en un Producto[] devuelve Producto[]. TypeScript mantiene el tipo a través de sort, filter y map.',
      },
    ],
  },
  {
    slug: 'formularios-react-typescript',
    title: 'Formularios simples con React y TypeScript',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 211,
    description:
      'Aprende a manejar formularios básicos en React usando TypeScript para inputs, estados y validaciones.',
    explanation: `## Formularios simples con React y TypeScript

Los formularios son uno de los casos más comunes en aplicaciones React. TypeScript ayuda a mantener los datos del formulario bien tipados.

### Estado del formulario tipado

\`\`\`tsx
interface DatosRegistro {
  nombre: string
  email: string
  password: string
}

const estadoInicial: DatosRegistro = {
  nombre: '',
  email: '',
  password: '',
}

const [form, setForm] = useState<DatosRegistro>(estadoInicial)
\`\`\`

### Manejador genérico para todos los inputs

\`\`\`tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target
  setForm((prev) => ({ ...prev, [name]: value }))
}
\`\`\`

Esto funciona cuando el atributo \`name\` del input coincide con la clave del objeto.

### Validación con tipos

\`\`\`tsx
interface Errores {
  nombre?: string
  email?: string
  password?: string
}

const [errores, setErrores] = useState<Errores>({})

function validar(datos: DatosRegistro): Errores {
  const nuevosErrores: Errores = {}
  if (!datos.nombre) nuevosErrores.nombre = 'El nombre es requerido'
  if (!datos.email.includes('@')) nuevosErrores.email = 'Email inválido'
  if (datos.password.length < 6) nuevosErrores.password = 'Mínimo 6 caracteres'
  return nuevosErrores
}
\`\`\`

### Submit tipado

\`\`\`tsx
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const nuevosErrores = validar(form)
  if (Object.keys(nuevosErrores).length > 0) {
    setErrores(nuevosErrores)
    return
  }
  // Enviar datos...
  console.log('Datos válidos:', form)
}
\`\`\``,
    codeExample: `// FormularioRegistro.tsx — formulario completo y tipado

import { useState } from 'react'

interface DatosFormulario {
  nombre: string
  email: string
  nivel: 'principiante' | 'intermedio' | 'avanzado'
}

interface ErroresFormulario {
  nombre?: string
  email?: string
}

const valorInicial: DatosFormulario = {
  nombre: '',
  email: '',
  nivel: 'principiante',
}

function FormularioRegistro() {
  const [form, setForm] = useState<DatosFormulario>(valorInicial)
  const [errores, setErrores] = useState<ErroresFormulario>({})
  const [enviado, setEnviado] = useState(false)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setForm((prev) => ({
      ...prev,
      nivel: e.target.value as DatosFormulario['nivel'],
    }))
  }

  function validar(): ErroresFormulario {
    const errs: ErroresFormulario = {}
    if (!form.nombre.trim()) errs.nombre = 'El nombre es requerido'
    if (!form.email.includes('@')) errs.email = 'Email inválido'
    return errs
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validar()
    if (Object.keys(errs).length > 0) {
      setErrores(errs)
      return
    }
    setEnviado(true)
    console.log('Registro:', form)
  }

  if (enviado) {
    return <p>¡Bienvenido, {form.nombre}!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleInputChange}
          placeholder="Tu nombre"
        />
        {errores.nombre && <span>{errores.nombre}</span>}
      </div>
      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Tu email"
        />
        {errores.email && <span>{errores.email}</span>}
      </div>
      <select value={form.nivel} onChange={handleSelectChange}>
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>
      <button type="submit">Registrarse</button>
    </form>
  )
}`,
    keyPoints: [
      'Define una interfaz para el estado del formulario con todos los campos tipados',
      'Un manejador genérico con { name, value } de e.target puede manejar múltiples inputs',
      'Los errores de validación también deben tener una interfaz con propiedades opcionales',
      'El select usa React.ChangeEvent<HTMLSelectElement>, no HTMLInputElement',
      'Usa as para convertir e.target.value al union type del select cuando sea necesario',
    ],
    exercise: {
      description:
        'Crea un formulario de contacto con: nombre (string), email (string), asunto (string), mensaje (string, textarea). Implementa validación para que nombre y email sean requeridos y email tenga @. Muestra errores bajo cada campo y un mensaje de éxito al enviar correctamente.',
      hint: 'El textarea usa React.ChangeEvent<HTMLTextAreaElement>. Los errores son una interfaz con propiedades opcionales string?.',
    },
    quiz: [
      {
        question: 'Para un select con opciones tipadas como "a" | "b" | "c", ¿cómo conviertes e.target.value al tipo correcto?',
        options: [
          'No es necesario — e.target.value ya es el tipo correcto',
          'Usando e.target.value as "a" | "b" | "c" o el tipo definido',
          'Usando parseInt(e.target.value)',
          'TypeScript nunca permite esto',
        ],
        correctAnswer: 'Usando e.target.value as "a" | "b" | "c" o el tipo definido',
        correctFeedback: '¡Correcto! e.target.value es siempre string, así que necesitas as para convertirlo al union type.',
        incorrectFeedback: 'e.target.value siempre es string. Para asignarlo a un union type necesitas usar "as" para la conversión.',
      },
      {
        question: '¿Por qué los campos de errores de validación son opcionales (nombre?: string)?',
        options: [
          'Porque los errores pueden ser null',
          'Porque cuando no hay error, ese campo no existe en el objeto de errores',
          'Por convención — no tiene efecto real',
          'Porque TypeScript lo requiere para interfaces de errores',
        ],
        correctAnswer: 'Porque cuando no hay error, ese campo no existe en el objeto de errores',
        correctFeedback: '¡Exacto! Las propiedades opcionales en la interfaz de errores permiten tener un objeto vacío cuando no hay errores.',
        incorrectFeedback: 'Si un campo no tiene error, no debería estar en el objeto de errores. Por eso los campos son opcionales con ?.',
      },
      {
        question: '¿Cuál es la diferencia entre React.ChangeEvent<HTMLInputElement> y React.ChangeEvent<HTMLTextAreaElement>?',
        options: [
          'No hay diferencia — son el mismo tipo',
          'El genérico indica qué elemento HTML disparó el evento, afectando qué propiedades están disponibles',
          'HTMLTextAreaElement no tiene value',
          'Solo HTMLInputElement tiene el atributo name',
        ],
        correctAnswer: 'El genérico indica qué elemento HTML disparó el evento, afectando qué propiedades están disponibles',
        correctFeedback: '¡Correcto! El tipo genérico define el elemento HTML concreto, que puede tener propiedades diferentes.',
        incorrectFeedback: 'El genérico en React.ChangeEvent<T> indica el elemento HTML que disparó el evento. Input y textarea tienen propiedades similares pero son tipos diferentes.',
      },
      {
        question: '¿Qué ventaja tiene un handler genérico que usa e.target.name y e.target.value para múltiples inputs?',
        options: [
          'Evita escribir una función handleChange separada para cada campo del formulario',
          'Es más rápido que handlers individuales en tiempo de ejecución',
          'TypeScript lo requiere obligatoriamente para formularios',
          'Solo funciona con inputs de texto plano',
        ],
        correctAnswer: 'Evita escribir una función handleChange separada para cada campo del formulario',
        correctFeedback: '¡Correcto! Con un handler genérico, una sola función actualiza cualquier campo usando e.target.name como clave.',
        incorrectFeedback: 'Un handler genérico usa e.target.name para saber qué campo actualizar — así evitas duplicar código para cada input.',
      },
      {
        question: '¿Cuál es el tipo correcto del evento onSubmit de un formulario HTML?',
        options: [
          'React.MouseEvent<HTMLFormElement>',
          'React.FormEvent<HTMLFormElement>',
          'React.ChangeEvent<HTMLFormElement>',
          'React.SubmitEvent',
        ],
        correctAnswer: 'React.FormEvent<HTMLFormElement>',
        correctFeedback: '¡Correcto! El evento submit de un form es React.FormEvent<HTMLFormElement>. Dentro llamas e.preventDefault().',
        incorrectFeedback: 'El evento onSubmit usa React.FormEvent<HTMLFormElement>. MouseEvent es para clics, no para envíos de formulario.',
      },
    ],
  },
  {
    slug: 'props-opcionales-defaults-react',
    title: 'Props opcionales y valores por defecto',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 212,
    description:
      'Aprende a usar props opcionales y valores por defecto sin perder seguridad de tipos.',
    explanation: `## Props opcionales y valores por defecto

En React, es muy común tener componentes con algunas props obligatorias y otras opcionales con valores por defecto.

### Props opcionales con ?

\`\`\`tsx
interface BotoProps {
  texto: string         // Obligatoria
  variante?: string     // Opcional — undefined si no se pasa
  deshabilitado?: boolean  // Opcional — undefined si no se pasa
}
\`\`\`

### Valores por defecto en desestructuración

\`\`\`tsx
function Boton({
  texto,
  variante = 'primario',        // Default si no se pasa
  deshabilitado = false,        // Default si no se pasa
}: BotoProps) {
  return (
    <button disabled={deshabilitado} className={variante}>
      {texto}
    </button>
  )
}

// Uso sin las opcionales — usan los defaults
<Boton texto="Guardar" />

// Uso sobreescribiendo los defaults
<Boton texto="Eliminar" variante="peligro" deshabilitado={true} />
\`\`\`

### Diferencia: undefined vs sin prop

Con props opcionales, si no las pasas, son \`undefined\` en el componente. Los valores por defecto en desestructuración reemplazan el \`undefined\`.

### Valores por defecto con tipos complejos

\`\`\`tsx
interface TablaProps {
  datos: Fila[]
  columnas?: string[]      // Array opcional
  paginacion?: boolean
  filaPorPagina?: number
}

function Tabla({
  datos,
  columnas = ['nombre', 'email', 'rol'],  // Default array
  paginacion = false,
  filaPorPagina = 10,
}: TablaProps) {
  // ...
}
\`\`\`

### Cuando una prop puede ser null o undefined

\`\`\`tsx
interface ErrorMensajeProps {
  mensaje: string | null  // Explícitamente puede ser null
}

function ErrorMensaje({ mensaje }: ErrorMensajeProps) {
  if (mensaje === null) return null
  return <p className="error">{mensaje}</p>
}
\`\`\``,
    codeExample: `// AvatarUsuario.tsx — props opcionales y defaults

interface AvatarProps {
  nombre: string                      // Obligatoria
  email: string                       // Obligatoria
  foto?: string                       // Opcional
  tamanio?: 'sm' | 'md' | 'lg'       // Opcional con union type
  mostrarEmail?: boolean              // Opcional boolean
  onClickPerfil?: () => void          // Callback opcional
}

function AvatarUsuario({
  nombre,
  email,
  foto,
  tamanio = 'md',                     // Default value
  mostrarEmail = false,               // Default value
  onClickPerfil,                      // undefined si no se pasa
}: AvatarProps) {
  const tamanios = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
  }

  const iniciales = nombre
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className="avatar-container"
      onClick={onClickPerfil}  // undefined es seguro en onClick
    >
      {foto ? (
        <img src={foto} alt={nombre} className={tamanios[tamanio]} />
      ) : (
        <div className={tamanios[tamanio]}>{iniciales}</div>
      )}
      <div>
        <p>{nombre}</p>
        {mostrarEmail && <p>{email}</p>}
      </div>
    </div>
  )
}

// Uso mínimo — solo props obligatorias
<AvatarUsuario nombre="Ana García" email="ana@email.com" />

// Uso completo — sobreescribiendo defaults
<AvatarUsuario
  nombre="Carlos López"
  email="carlos@email.com"
  tamanio="lg"
  mostrarEmail={true}
  onClickPerfil={() => console.log('Ver perfil')}
/>`,
    keyPoints: [
      'Las props opcionales (?) son undefined si no se pasan al componente',
      'Los valores por defecto en la desestructuración reemplazan undefined con un valor concreto',
      'Los callbacks opcionales (onX?: () => void) son seguros en JSX — React ignora handlers undefined',
      'Combinar props opcionales con defaults hace los componentes más flexibles y fáciles de usar',
      'Evita poner objetos literales como defaults en la desestructuración — causan renders innecesarios',
    ],
    exercise: {
      description:
        'Crea un componente `Alerta` con: tipo obligatorio ("exito" | "error" | "advertencia"), mensaje obligatorio (string), titulo opcional (string), cerrable opcional con default true, y onCerrar callback opcional. Implementa el botón de cerrar que solo aparece si cerrable es true.',
      hint: 'cerrable = true como default en desestructuración. El botón de cerrar solo aparece si {cerrable && <button onClick={onCerrar}>X</button>}.',
    },
    quiz: [
      {
        question: '¿Qué valor tiene una prop opcional que no se pasó al componente?',
        options: ['null', '""', 'undefined', '0'],
        correctAnswer: 'undefined',
        correctFeedback: '¡Correcto! Las props opcionales que no se pasan son undefined en el componente.',
        incorrectFeedback: 'Cuando una prop opcional no se pasa, su valor es undefined dentro del componente.',
      },
      {
        question: 'Si tienes "variante = "primario"" en la desestructuración, ¿cuándo se usa ese valor?',
        options: [
          'Siempre, ignorando la prop pasada',
          'Solo cuando la prop se pasa explícitamente como undefined',
          'Cuando la prop no se pasa o se pasa como undefined',
          'Nunca — los defaults son solo documentación',
        ],
        correctAnswer: 'Cuando la prop no se pasa o se pasa como undefined',
        correctFeedback: '¡Correcto! El valor por defecto se usa cuando la prop es undefined (no se pasó o se pasó undefined explícitamente).',
        incorrectFeedback: 'El valor por defecto en desestructuración se activa cuando la prop es undefined, sea porque no se pasó o porque se pasó undefined.',
      },
      {
        question: '¿Es seguro poner un callback opcional (onClick?: () => void) directamente en onClick de un elemento JSX?',
        options: [
          'No, causa error si es undefined',
          'Sí, React y TypeScript aceptan undefined en handlers JSX',
          'Solo si usas ?. antes del handler',
          'Solo en producción',
        ],
        correctAnswer: 'Sí, React y TypeScript aceptan undefined en handlers JSX',
        correctFeedback: '¡Exacto! React ignora los handlers undefined en JSX — no necesitas condición adicional.',
        incorrectFeedback: 'React acepta undefined en atributos de evento como onClick. Si el handler es undefined, simplemente no hace nada.',
      },
      {
        question: '¿Cuándo usarías "mensaje: string | null" en lugar de "mensaje?: string"?',
        options: [
          'Son equivalentes — elige el que prefieras',
          'Cuando quieres pasar null explícitamente para indicar ausencia con significado, distinto de "prop no pasada"',
          'Solo para strings — para otros tipos son iguales',
          'string | null solo se usa en estado, no en props',
        ],
        correctAnswer: 'Cuando quieres pasar null explícitamente para indicar ausencia con significado, distinto de "prop no pasada"',
        correctFeedback: '¡Correcto! null se pasa explícitamente para indicar un estado concreto, mientras que undefined simplemente significa que no se pasó la prop.',
        incorrectFeedback: 'null y undefined tienen semántica diferente: null = valor explícito de "vacío con intención", undefined = prop no pasada. Esto hace más clara la API del componente.',
      },
      {
        question: '¿Por qué es mala práctica usar un objeto literal como valor por defecto en la desestructuración de props?',
        options: [
          'Porque TypeScript no lo permite sintácticamente',
          'Porque cada render crea un nuevo objeto con diferente referencia, causando re-renders innecesarios en hijos memoizados',
          'Porque los objetos no pueden ser props en React',
          'No hay ningún problema — es perfectamente válido y recomendado',
        ],
        correctAnswer: 'Porque cada render crea un nuevo objeto con diferente referencia, causando re-renders innecesarios en hijos memoizados',
        correctFeedback: '¡Correcto! Un objeto literal default en desestructuración genera una nueva referencia en cada render, rompiendo la igualdad referencial.',
        incorrectFeedback: 'Un objeto literal default se crea en cada render con nueva referencia. Esto rompe React.memo y useMemo en componentes hijos que dependen de esa prop.',
      },
    ],
  },
  {
    slug: 'errores-typescript-react',
    title: 'Errores comunes usando TypeScript con React',
    module: 'TypeScript con React',
    moduleNumber: 26,
    order: 213,
    description:
      'Aprende a evitar errores comunes como tipar mal eventos, abusar de React.FC, usar any en props o manejar null incorrectamente.',
    explanation: `## Errores comunes usando TypeScript con React

Cuando empiezas a combinar TypeScript con React, algunos errores aparecen con frecuencia. Aprenderlos te ahorra mucho tiempo.

### Error 1: Usar el tipo de evento incorrecto

\`\`\`tsx
// ❌ Tipo de evento incorrecto para un input
function handleChange(e: React.MouseEvent<HTMLInputElement>) {
  console.log(e.target.value)  // Error: value no existe en MouseEvent
}

// ✅ Tipo correcto para onChange de input
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value)  // ✅
}
\`\`\`

### Error 2: No manejar el null antes de usarlo

\`\`\`tsx
// ❌ Sin verificar null
const [usuario, setUsuario] = useState<Usuario | null>(null)
return <p>{usuario.nombre}</p>  // Error: usuario puede ser null

// ✅ Verificar antes de usar
return usuario ? <p>{usuario.nombre}</p> : <p>Cargando...</p>
\`\`\`

### Error 3: Usar any en props

\`\`\`tsx
// ❌ Props con any — pierdes toda la seguridad
interface Props {
  datos: any
}

// ✅ Tipo específico
interface Props {
  datos: Producto[]
}
\`\`\`

### Error 4: Tipar arrays vacíos sin genérico

\`\`\`tsx
// ❌ TypeScript infiere never[]
const [items, setItems] = useState([])
setItems(['uno'])  // Error: Argument of type 'string[]' is not assignable to 'never[]'

// ✅ Con genérico explícito
const [items, setItems] = useState<string[]>([])
\`\`\`

### Error 5: Confundir JSX.Element y React.ReactNode

\`\`\`tsx
// JSX.Element — solo un elemento JSX
// React.ReactNode — texto, JSX, arrays, null, undefined

// ❌ JSX.Element en children — limita lo que puedes pasar
interface Props { children: JSX.Element }

// ✅ React.ReactNode — más flexible para children
interface Props { children: React.ReactNode }
\`\`\`

### Error 6: Mutatar el estado directamente

\`\`\`tsx
// ❌ Mutar el array del estado
const [lista, setLista] = useState<string[]>([])
lista.push('nuevo')  // No dispara re-render

// ✅ Crear un nuevo array
setLista([...lista, 'nuevo'])
\`\`\``,
    codeExample: `// errores-comunes.tsx — antes y después

import { useState } from 'react'

interface Producto {
  id: number
  nombre: string
  precio: number
}

function EjemploErrores() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [seleccionado, setSeleccionado] = useState<Producto | null>(null)
  const [busqueda, setBusqueda] = useState('')

  // ─── Error 1 resuelto: tipo de evento correcto ────────────────
  function handleBusqueda(e: React.ChangeEvent<HTMLInputElement>) {
    setBusqueda(e.target.value)  // ✅
  }

  // ─── Error 2 resuelto: verificar null ─────────────────────────
  function mostrarDetalles() {
    if (!seleccionado) return null  // Guardamos antes de usar
    return (
      <div>
        <h2>{seleccionado.nombre}</h2>
        <p>{seleccionado.precio}</p>
      </div>
    )
  }

  // ─── Error 4 resuelto: no mutar el estado ─────────────────────
  function agregarProducto(nuevo: Producto) {
    setProductos((prev) => [...prev, nuevo])  // ✅ nuevo array
  }

  return (
    <div>
      <input
        value={busqueda}
        onChange={handleBusqueda}
        placeholder="Buscar..."
      />
      {mostrarDetalles()}
      {productos.map((p) => (
        <div key={p.id} onClick={() => setSeleccionado(p)}>
          {p.nombre}
        </div>
      ))}
    </div>
  )
}`,
    keyPoints: [
      'Usa el tipo de evento correcto según el elemento HTML — input usa ChangeEvent, no MouseEvent',
      'Siempre verifica el null antes de acceder a propiedades de un estado nullable',
      'Evita any en props — define tipos específicos aunque sean más verbosos',
      'Los arrays vacíos en useState necesitan genérico: useState<string[]>([])',
      'Usa React.ReactNode (no JSX.Element) para la prop children de componentes contenedor',
    ],
    exercise: {
      description:
        'Dado este código con errores, identifica y corrige todos: `const [datos, setDatos] = useState([]); function cambio(e: React.MouseEvent<HTMLInputElement>) { setDatos([...datos, e.target.value]) }`. Hay errores de tipo de evento, tipo del array, y posiblemente de acceso a propiedades.',
      hint: 'El evento onChange de input es ChangeEvent<HTMLInputElement>, no MouseEvent. El array vacío necesita useState<string[]>([]). e.target.value está disponible en ChangeEvent.',
    },
    quiz: [
      {
        question: '¿Qué error produce este código con strict: true? `const [u, setU] = useState<Usuario | null>(null); return <p>{u.nombre}</p>`',
        options: [
          'No hay error — TypeScript acepta esto',
          'Error: Object is of type null — debes verificar que u no sea null antes',
          'Error: u es de tipo unknown',
          'Error: useState no acepta null como valor inicial',
        ],
        correctAnswer: 'Error: Object is of type null — debes verificar que u no sea null antes',
        correctFeedback: '¡Correcto! Con strictNullChecks, TypeScript te obliga a verificar null antes de acceder a propiedades.',
        incorrectFeedback: 'Con strict activado, TypeScript detecta que u puede ser null y no permite acceder a .nombre sin verificar primero.',
      },
      {
        question: '¿Qué tipo de evento corresponde al onChange de un input de texto?',
        options: [
          'React.MouseEvent<HTMLInputElement>',
          'React.KeyboardEvent<HTMLInputElement>',
          'React.ChangeEvent<HTMLInputElement>',
          'React.InputEvent<HTMLInputElement>',
        ],
        correctAnswer: 'React.ChangeEvent<HTMLInputElement>',
        correctFeedback: '¡Correcto! ChangeEvent es el tipo para eventos de cambio de valor en inputs.',
        incorrectFeedback: 'El evento onChange de un input usa React.ChangeEvent<HTMLInputElement>, no MouseEvent.',
      },
      {
        question: '¿Cuál es la forma correcta de añadir un elemento a un array en el estado de React?',
        options: [
          'lista.push(nuevo)',
          'setLista([...lista, nuevo])',
          'lista = [...lista, nuevo]',
          'setLista(lista.push(nuevo))',
        ],
        correctAnswer: 'setLista([...lista, nuevo])',
        correctFeedback: '¡Exacto! Se crea un nuevo array con spread y el nuevo elemento, nunca se muta el array existente.',
        incorrectFeedback: 'El estado de React nunca debe mutarse directamente. Usa setLista([...lista, nuevo]) para crear un nuevo array.',
      },
      {
        question: '¿Por qué React.ReactNode es mejor que JSX.Element para la prop children?',
        options: [
          'No hay diferencia — son idénticos',
          'React.ReactNode acepta texto, JSX, arrays, null y undefined — JSX.Element solo acepta un elemento JSX',
          'JSX.Element es más rápido',
          'ReactNode solo funciona en componentes de clase',
        ],
        correctAnswer: 'React.ReactNode acepta texto, JSX, arrays, null y undefined — JSX.Element solo acepta un elemento JSX',
        correctFeedback: '¡Correcto! React.ReactNode es más flexible y es el tipo apropiado para children en componentes contenedor.',
        incorrectFeedback: 'JSX.Element solo acepta un elemento JSX. React.ReactNode acepta texto, JSX, arrays, null — mucho más flexible para children.',
      },
      {
        question: '¿Qué infiere TypeScript para `const [items, setItems] = useState([])`?',
        options: [
          'string[]',
          'any[]',
          'never[]',
          'unknown[]',
        ],
        correctAnswer: 'never[]',
        correctFeedback: '¡Correcto! Un array vacío sin genérico se infiere como never[], haciendo imposible añadir elementos con setItems.',
        incorrectFeedback: 'TypeScript infiere never[] para useState([]). Para poder añadir elementos debes escribir useState<string[]>([]) o el tipo que necesites.',
      },
    ],
  },
]

export const tsModule26: Module = {
  number: 26,
  title: 'TypeScript con React',
  level: 'nivel6',
  lessons: lessonsTsModule26,
}
