import type { Lesson } from '@/types'

export const lessonsModule23: Lesson[] = [
  {
    slug: 'que-es-api',
    title: '¿Qué es una API?',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 115,
    description: 'Aprende qué es una API, para qué sirve y cómo permite que diferentes aplicaciones se comuniquen.',
    explanation: `## ¿Qué es una API?

Una **API** (Application Programming Interface, o Interfaz de Programación de Aplicaciones) es un conjunto de reglas que permite que dos programas se comuniquen entre sí.

### La analogía del restaurante

Imagina que estás en un restaurante:

- Tú (el cliente) eres la **aplicación**
- El menú es la **documentación de la API** — lista lo que puedes pedir
- El mesero es la **API** — lleva tu pedido a la cocina y trae la respuesta
- La cocina es el **servidor** — procesa tu pedido

Tú no necesitas saber cómo funciona la cocina. Solo pides del menú y recibes el resultado.

### REST APIs

La mayoría de las APIs modernas son **REST APIs**. Usan el protocolo HTTP, igual que cuando navegas por internet. Sus características principales son:

- Usan **URLs** para identificar recursos (llamadas *endpoints*)
- Usan **métodos HTTP**: GET (obtener), POST (crear), PUT (actualizar), DELETE (eliminar)
- Devuelven datos en formato **JSON**

### JSON: el idioma común

Las APIs REST responden con **JSON** (JavaScript Object Notation), que es texto estructurado como un diccionario Python:

\`\`\`json
{
  "ciudad": "Buenos Aires",
  "temperatura": 22.5,
  "condicion": "soleado",
  "humedad": 65
}
\`\`\`

### Ejemplos de APIs reales

| API | Para qué sirve |
|-----|----------------|
| Open-Meteo | Datos del clima (gratuita, sin clave) |
| GitHub API | Repositorios, usuarios, commits |
| Spotify API | Canciones, artistas, playlists |
| CurrencyAPI | Tipos de cambio de monedas |
| JSONPlaceholder | API de prueba para practicar |

### Cómo se ve una petición y respuesta

**Petición (tú preguntás):**
\`\`\`
GET https://api.open-meteo.com/v1/forecast?latitude=-34.6&longitude=-58.4&current_weather=true
\`\`\`

**Respuesta (la API te responde):**
\`\`\`json
{
  "latitude": -34.6,
  "longitude": -58.4,
  "current_weather": {
    "temperature": 22.3,
    "windspeed": 15.2,
    "weathercode": 1
  }
}
\`\`\`

### Flujo completo

\`\`\`
Tu programa Python
       ↓  petición HTTP (GET /clima?ciudad=Madrid)
    API Server
       ↓  respuesta JSON
Tu programa Python
       ↓  procesa los datos
    Resultado para el usuario
\`\`\`

### ¿Por qué usar APIs?

- **Reutilizar servicios existentes**: no necesitas construir todo desde cero
- **Datos en tiempo real**: clima, noticias, precios actualizados
- **Integración**: conectar tu app con servicios como Gmail, Stripe, Maps
- **Especialización**: usa servicios que hacen una cosa muy bien`,
    codeExample: `# Las APIs nos permiten acceder a datos externos desde Python
# Este ejemplo muestra conceptualmente cómo funciona

# Imagina que tienes una API de clima. La "llamada" se ve así:
# GET https://api.ejemplo.com/clima?ciudad=Lima

# La respuesta que llegaría como JSON sería algo así:
respuesta_json = {
    "ciudad": "Lima",
    "pais": "PE",
    "temperatura": {
        "actual": 20.5,
        "sensacion": 19.0,
        "min": 17.0,
        "max": 23.0
    },
    "condicion": "parcialmente nublado",
    "humedad": 78,
    "viento": {
        "velocidad": 12,
        "direccion": "SO"
    }
}

# Así accederíamos a los datos:
ciudad = respuesta_json["ciudad"]
temp = respuesta_json["temperatura"]["actual"]
condicion = respuesta_json["condicion"]

print(f"Ciudad: {ciudad}")
print(f"Temperatura: {temp}°C")
print(f"Condición: {condicion}")

# Ejemplo con JSONPlaceholder (API gratuita para practicar)
# La URL https://jsonplaceholder.typicode.com/posts/1
# devuelve algo como:
post_ejemplo = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident",
    "body": "quia et suscipit\\nsuscipit recusandae..."
}

print("\\n--- Ejemplo de post de API ---")
print(f"ID: {post_ejemplo['id']}")
print(f"Título: {post_ejemplo['title']}")

# En la próxima lección veremos cómo hacer estas peticiones reales
# usando la librería 'requests'
print("\\nEn la siguiente lección usaremos requests para hacer peticiones reales.")`,
    keyPoints: [
      'Una API es una interfaz que permite que dos programas se comuniquen entre sí',
      'Las REST APIs usan URLs (endpoints), métodos HTTP (GET, POST) y devuelven JSON',
      'JSON es el formato de datos más común en las APIs: texto estructurado como diccionarios',
      'Existen miles de APIs gratuitas: clima, monedas, redes sociales, etc.',
      'Tu programa hace una petición (request) y la API responde (response) con datos',
    ],
    exercise: {
      description: 'Investiga y describe tres APIs públicas gratuitas. Para cada una indica: nombre, URL base, para qué sirve y un ejemplo de endpoint. Luego crea un diccionario Python que simule la respuesta JSON de una de ellas y extrae al menos tres datos de ese diccionario.',
      hint: 'Busca "free public APIs" o "APIs without key". Algunos ejemplos: open-meteo.com, jsonplaceholder.typicode.com, restcountries.com. Una vez que tengas el ejemplo de JSON, accede a los campos como en un diccionario normal.',
    },
    quiz: [
      {
        question: '¿Qué significa API?',
        options: [
          'Advanced Python Interface',
          'Application Programming Interface',
          'Automated Program Integration',
          'Application Protocol Internet',
        ],
        correctAnswer: 'Application Programming Interface',
        correctFeedback: '¡Correcto! API significa Application Programming Interface — Interfaz de Programación de Aplicaciones. Es el conjunto de reglas que permite que dos programas se comuniquen.',
        incorrectFeedback: 'API significa Application Programming Interface (Interfaz de Programación de Aplicaciones). Define cómo dos programas pueden comunicarse entre sí de forma estándar.',
      },
      {
        question: '¿Cuál es el formato de datos más común que devuelven las REST APIs?',
        options: ['XML', 'CSV', 'JSON', 'HTML'],
        correctAnswer: 'JSON',
        correctFeedback: '¡Correcto! JSON (JavaScript Object Notation) es el formato estándar de las APIs modernas. Es fácil de leer para humanos y se mapea directamente a diccionarios Python.',
        incorrectFeedback: 'Las REST APIs modernas devuelven JSON (JavaScript Object Notation). XML fue popular antes, pero JSON es el estándar actual por ser más ligero y fácil de trabajar.',
      },
      {
        question: 'En la analogía del restaurante, ¿qué representa la API?',
        options: [
          'El cliente que hace el pedido',
          'La cocina que prepara la comida',
          'El mesero que lleva el pedido y trae la respuesta',
          'El menú con los platos disponibles',
        ],
        correctAnswer: 'El mesero que lleva el pedido y trae la respuesta',
        correctFeedback: '¡Exacto! La API es como el mesero: recibe tu pedido (request), lo lleva al servidor (cocina) y te trae la respuesta (response). Tú no necesitas saber cómo funciona la cocina.',
        incorrectFeedback: 'En la analogía, la API es el mesero: lleva tu petición al servidor y te devuelve la respuesta. El menú sería la documentación de la API, y la cocina sería el servidor.',
      },
      {
        question: '¿Qué es un endpoint en el contexto de una API?',
        options: [
          'El final del programa',
          'Una URL específica que representa un recurso o acción de la API',
          'El formato de respuesta de la API',
          'La clave secreta para acceder a la API',
        ],
        correctAnswer: 'Una URL específica que representa un recurso o acción de la API',
        correctFeedback: '¡Correcto! Un endpoint es una URL específica de la API. Por ejemplo: `/users`, `/weather`, `/products/123` son diferentes endpoints que dan acceso a diferentes recursos.',
        incorrectFeedback: 'Un endpoint es una URL específica de la API que representa un recurso o acción. Por ejemplo: `https://api.ejemplo.com/clima` es un endpoint para obtener datos del clima.',
      },
      {
        question: '¿Cuál de estos es un caso de uso válido para consumir una API desde Python?',
        options: [
          'Crear una ventana gráfica en tu computadora',
          'Obtener el precio actual del dólar desde un servicio web',
          'Leer un archivo de texto local',
          'Ordenar una lista de números',
        ],
        correctAnswer: 'Obtener el precio actual del dólar desde un servicio web',
        correctFeedback: '¡Correcto! Las APIs son perfectas para acceder a datos en tiempo real de servicios externos, como tipos de cambio, clima, noticias, etc.',
        incorrectFeedback: 'El caso de uso típico de APIs es acceder a datos externos en tiempo real. Obtener el precio del dólar, el clima actual o datos de redes sociales son usos perfectos para APIs.',
      },
      {
        question: '¿Qué método HTTP se usa generalmente para OBTENER datos de una API (sin modificarlos)?',
        options: ['POST', 'PUT', 'DELETE', 'GET'],
        correctAnswer: 'GET',
        correctFeedback: '¡Exacto! GET es el método para obtener/leer datos sin modificarlos. POST crea, PUT actualiza y DELETE elimina. En este módulo usaremos principalmente GET.',
        incorrectFeedback: 'El método GET es para obtener/leer datos. POST es para crear, PUT para actualizar y DELETE para eliminar. La mayoría de las consultas de datos usan GET.',
      },
      {
        question: 'Si una API devuelve este JSON: {"temp": 25, "ciudad": "Lima"}, ¿cómo accedes a la temperatura en Python?',
        options: [
          'respuesta.temp',
          'respuesta["temp"]',
          'respuesta.get_temp()',
          'respuesta[0]',
        ],
        correctAnswer: 'respuesta["temp"]',
        correctFeedback: '¡Correcto! El JSON se convierte en un diccionario Python, y accedes a sus valores con `respuesta["temp"]` o `respuesta.get("temp")`.',
        incorrectFeedback: 'Después de parsear el JSON, tendrás un diccionario Python. La forma correcta de acceder a un valor es `respuesta["temp"]`, igual que con cualquier diccionario.',
      },
    ],
  },
  {
    slug: 'requests-get',
    title: 'Hacer solicitudes GET con requests',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 116,
    description: 'Aprende a consumir datos desde una API usando requests.get().',
    explanation: `## Hacer solicitudes GET con requests

La librería \`requests\` es la forma más popular y sencilla de hacer peticiones HTTP en Python. No viene instalada por defecto, pero es la primera que aprende cualquier desarrollador Python.

### Instalación

\`\`\`
pip install requests
\`\`\`

### Tu primera petición GET

\`\`\`python
import requests

# Hacer una petición GET a una API pública (sin autenticación)
respuesta = requests.get("https://jsonplaceholder.typicode.com/posts/1")

# Ver el código de estado
print(respuesta.status_code)  # 200 = éxito

# Obtener los datos como diccionario Python
datos = respuesta.json()
print(datos)
\`\`\`

### El objeto Response

Cuando haces \`requests.get()\`, obtienes un objeto \`Response\` con mucha información:

| Atributo/Método | Qué contiene |
|-----------------|--------------|
| \`response.status_code\` | Código HTTP (200, 404, etc.) |
| \`response.json()\` | Datos como diccionario Python |
| \`response.text\` | Respuesta como texto plano |
| \`response.content\` | Respuesta como bytes (binario) |
| \`response.headers\` | Cabeceras HTTP de la respuesta |
| \`response.url\` | URL final de la petición |

### raise_for_status()

Este método lanza una excepción automáticamente si el servidor devolvió un error (4xx o 5xx):

\`\`\`python
respuesta = requests.get("https://api.ejemplo.com/datos")
respuesta.raise_for_status()  # Lanza error si status >= 400
datos = respuesta.json()
\`\`\`

### Ejemplo real: Open-Meteo (clima sin API key)

\`\`\`python
import requests

url = "https://api.open-meteo.com/v1/forecast"
params = {
    "latitude": -12.05,    # Lima, Perú
    "longitude": -77.05,
    "current_weather": True,
}

respuesta = requests.get(url, params=params)
respuesta.raise_for_status()

datos = respuesta.json()
clima = datos["current_weather"]

print(f"Temperatura: {clima['temperature']}°C")
print(f"Viento: {clima['windspeed']} km/h")
\`\`\`

### Verificar el status code manualmente

\`\`\`python
if respuesta.status_code == 200:
    datos = respuesta.json()
    print("Datos obtenidos:", datos)
elif respuesta.status_code == 404:
    print("No encontrado")
else:
    print(f"Error: {respuesta.status_code}")
\`\`\``,
    codeExample: `import requests

# API pública sin autenticación: JSONPlaceholder
# Perfecta para practicar

# --- Ejemplo 1: obtener un post ---
print("=== Ejemplo 1: Obtener un post ===")
url = "https://jsonplaceholder.typicode.com/posts/1"
respuesta = requests.get(url)

print(f"URL: {respuesta.url}")
print(f"Status code: {respuesta.status_code}")
print(f"¿Exitoso? {respuesta.status_code == 200}")

datos = respuesta.json()
print(f"\\nTítulo: {datos['title']}")
print(f"ID usuario: {datos['userId']}")

# --- Ejemplo 2: lista de usuarios ---
print("\\n=== Ejemplo 2: Lista de usuarios ===")
respuesta_usuarios = requests.get("https://jsonplaceholder.typicode.com/users")
respuesta_usuarios.raise_for_status()  # Lanza error si hay problema

usuarios = respuesta_usuarios.json()  # Es una lista
print(f"Total de usuarios: {len(usuarios)}")

for usuario in usuarios[:3]:  # Solo los primeros 3
    print(f"  - {usuario['name']} ({usuario['email']})")

# --- Ejemplo 3: ver los headers de respuesta ---
print("\\n=== Ejemplo 3: Headers de respuesta ===")
print(f"Tipo de contenido: {respuesta.headers.get('Content-Type')}")
print(f"Servidor: {respuesta.headers.get('Server', 'No especificado')}")

# --- Ejemplo 4: raise_for_status con URL inexistente ---
print("\\n=== Ejemplo 4: Manejo de error ===")
try:
    resp_error = requests.get("https://jsonplaceholder.typicode.com/posts/99999")
    # JSONPlaceholder devuelve {} para IDs inexistentes, pero en APIs reales:
    resp_error.raise_for_status()
    resultado = resp_error.json()
    if resultado:
        print(f"Datos: {resultado}")
    else:
        print("La API devolvió una respuesta vacía")
except requests.exceptions.HTTPError as e:
    print(f"Error HTTP: {e}")`,
    keyPoints: [
      'requests es la librería estándar para hacer peticiones HTTP en Python (pip install requests)',
      'requests.get(url) devuelve un objeto Response con status_code, json(), text, headers',
      'response.json() convierte la respuesta JSON en un diccionario o lista Python',
      'response.raise_for_status() lanza una excepción si el status code indica error (>=400)',
      'Verifica siempre el status_code antes de procesar los datos',
      'Open-Meteo y JSONPlaceholder son APIs gratuitas sin clave para practicar',
    ],
    exercise: {
      description: 'Usa requests para obtener información del usuario con ID 3 desde JSONPlaceholder (https://jsonplaceholder.typicode.com/users/3). Imprime: nombre, email, nombre de la ciudad donde vive (está en address.city) y el nombre de la empresa (está en company.name). Luego obtén todos los posts de ese usuario (https://jsonplaceholder.typicode.com/posts?userId=3) y muestra cuántos posts tiene.',
      hint: 'Para el usuario individual usa requests.get("https://jsonplaceholder.typicode.com/users/3"). Para acceder a datos anidados: datos["address"]["city"]. Para contar los posts del usuario, recuerda que la respuesta será una lista.',
    },
    quiz: [
      {
        question: '¿Cómo se instala la librería requests?',
        options: [
          'import requests',
          'pip install requests',
          'apt-get install requests',
          'python download requests',
        ],
        correctAnswer: 'pip install requests',
        correctFeedback: '¡Correcto! requests no viene instalada con Python. Se instala con `pip install requests` desde la terminal.',
        incorrectFeedback: 'requests se instala con `pip install requests` en la terminal. `import requests` es cómo la usas en tu código una vez instalada.',
      },
      {
        question: '¿Qué devuelve requests.get(url)?',
        options: [
          'Un diccionario con los datos JSON',
          'Un string con el texto de la respuesta',
          'Un objeto Response con status_code, json(), headers, etc.',
          'Un número con el código de estado HTTP',
        ],
        correctAnswer: 'Un objeto Response con status_code, json(), headers, etc.',
        correctFeedback: '¡Correcto! requests.get() devuelve un objeto Response que contiene toda la información de la respuesta: código de estado, datos, cabeceras, URL, etc.',
        incorrectFeedback: 'requests.get() devuelve un objeto Response completo. Para obtener el JSON debes llamar a response.json(). Para el status code: response.status_code.',
      },
      {
        question: '¿Cuál es la forma correcta de obtener los datos JSON de una respuesta?',
        options: [
          'respuesta.data',
          'respuesta.json()',
          'json.loads(respuesta)',
          'respuesta.content',
        ],
        correctAnswer: 'respuesta.json()',
        correctFeedback: '¡Exacto! El método .json() del objeto Response convierte automáticamente el JSON de la respuesta a un diccionario o lista Python.',
        incorrectFeedback: 'La forma correcta es `respuesta.json()`. Este método parsea automáticamente el JSON y lo devuelve como diccionario o lista Python.',
      },
      {
        question: '¿Qué hace respuesta.raise_for_status()?',
        options: [
          'Imprime el status code en pantalla',
          'Lanza una excepción si el status code es >= 400 (error)',
          'Reintenta la petición si hay un error',
          'Devuelve True si la petición fue exitosa',
        ],
        correctAnswer: 'Lanza una excepción si el status code es >= 400 (error)',
        correctFeedback: '¡Correcto! raise_for_status() es un método conveniente que lanza HTTPError automáticamente si el servidor devolvió un error (4xx o 5xx). Si fue exitoso, no hace nada.',
        incorrectFeedback: 'raise_for_status() lanza una excepción HTTPError si el código de respuesta indica error (>= 400). Es la forma más práctica de verificar errores HTTP.',
      },
      {
        question: '¿Qué código de estado HTTP indica que la petición fue exitosa?',
        options: ['100', '200', '404', '500'],
        correctAnswer: '200',
        correctFeedback: '¡Correcto! 200 OK es el código estándar de éxito. Significa que la petición fue procesada correctamente y la respuesta contiene los datos solicitados.',
        incorrectFeedback: '200 OK es el código de éxito estándar. 404 = no encontrado, 500 = error del servidor, 400 = petición incorrecta.',
      },
      {
        question: '¿Cuál de estas APIs es completamente gratuita y no requiere API key?',
        options: [
          'Spotify API',
          'Google Maps API',
          'JSONPlaceholder',
          'Twitter API',
        ],
        correctAnswer: 'JSONPlaceholder',
        correctFeedback: '¡Correcto! JSONPlaceholder (jsonplaceholder.typicode.com) es una API falsa gratuita sin clave, perfecta para practicar requests. Open-Meteo también es gratuita sin clave.',
        incorrectFeedback: 'JSONPlaceholder es una API de prueba completamente gratuita sin necesidad de registro. Open-Meteo para clima también es gratuita sin clave.',
      },
      {
        question: '¿Cómo verificarías que una petición fue exitosa antes de procesar los datos?',
        options: [
          'if respuesta == True:',
          'if respuesta.status_code == 200: o usando raise_for_status()',
          'if respuesta.ok == "yes":',
          'if respuesta.json() != None:',
        ],
        correctAnswer: 'if respuesta.status_code == 200: o usando raise_for_status()',
        correctFeedback: '¡Correcto! Puedes verificar manualmente con `if respuesta.status_code == 200` o usar `respuesta.raise_for_status()` que lanza excepción si hay error.',
        incorrectFeedback: 'Las dos formas correctas son: `if respuesta.status_code == 200:` para verificar manualmente, o `respuesta.raise_for_status()` para lanzar una excepción automáticamente ante errores.',
      },
    ],
  },
  {
    slug: 'leer-json-api',
    title: 'Leer respuestas JSON',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 117,
    description: 'Aprende a interpretar respuestas JSON y acceder a datos dentro de diccionarios y listas.',
    explanation: `## Leer respuestas JSON

Cuando una API responde, los datos vienen en JSON. Python convierte ese JSON en **diccionarios** y **listas** que ya sabes manejar.

### response.json() convierte JSON → Python

\`\`\`python
respuesta = requests.get("https://api.ejemplo.com/datos")
datos = respuesta.json()

# Si la API devuelve un objeto JSON {...}: datos es un diccionario
# Si la API devuelve un array JSON [...]: datos es una lista
\`\`\`

### Navegar datos anidados

Las APIs suelen devolver estructuras anidadas:

\`\`\`json
{
  "usuario": {
    "nombre": "Ana",
    "contacto": {
      "email": "ana@ejemplo.com",
      "telefono": "555-1234"
    }
  },
  "pedidos": [
    {"id": 1, "producto": "Libro Python", "precio": 25.90},
    {"id": 2, "producto": "Teclado", "precio": 89.00}
  ]
}
\`\`\`

\`\`\`python
datos = respuesta.json()

# Acceder a datos anidados
nombre = datos["usuario"]["nombre"]
email = datos["usuario"]["contacto"]["email"]

# Acceder a una lista
primer_pedido = datos["pedidos"][0]
producto = datos["pedidos"][0]["producto"]

# Iterar sobre la lista
for pedido in datos["pedidos"]:
    print(f"Pedido {pedido['id']}: {pedido['producto']} - \${pedido['precio']}")
\`\`\`

### Acceso seguro con .get()

Si una clave puede no existir, usa \`.get()\` para evitar KeyError:

\`\`\`python
# Sin .get() → puede dar KeyError si "descripcion" no existe
nombre = datos["descripcion"]  # ❌ KeyError si no existe

# Con .get() → devuelve None (o el valor por defecto) si no existe
descripcion = datos.get("descripcion")              # → None
descripcion = datos.get("descripcion", "Sin desc.") # → "Sin desc."
\`\`\`

### Visualizar JSON con json.dumps()

Para explorar una respuesta JSON de forma legible:

\`\`\`python
import json

datos = respuesta.json()
print(json.dumps(datos, indent=2, ensure_ascii=False))
\`\`\`

### Errores comunes

\`\`\`python
# ❌ Error: TypeError — json() devolvió una lista, no diccionario
datos = respuesta.json()
nombre = datos["nombre"]  # Si datos es una lista, esto falla

# ✅ Correcto: verificar si es lista o diccionario
if isinstance(datos, list):
    print(f"Hay {len(datos)} elementos")
    for item in datos:
        print(item["nombre"])
elif isinstance(datos, dict):
    print(datos["nombre"])
\`\`\``,
    codeExample: `import requests
import json

# Obtener datos de una API con estructura anidada
url = "https://jsonplaceholder.typicode.com/users/1"
respuesta = requests.get(url)
respuesta.raise_for_status()

usuario = respuesta.json()

# --- Visualizar el JSON completo ---
print("=== JSON completo ===")
print(json.dumps(usuario, indent=2))

# --- Acceder a datos simples ---
print("\\n=== Datos simples ===")
print(f"Nombre: {usuario['name']}")
print(f"Email: {usuario['email']}")
print(f"Usuario: {usuario['username']}")

# --- Acceder a datos anidados ---
print("\\n=== Datos anidados ===")
ciudad = usuario["address"]["city"]
calle = usuario["address"]["street"]
empresa = usuario["company"]["name"]

print(f"Ciudad: {ciudad}")
print(f"Calle: {calle}")
print(f"Empresa: {empresa}")

# --- Acceso seguro con .get() ---
print("\\n=== Acceso seguro con .get() ===")
website = usuario.get("website", "No tiene website")
descripcion = usuario.get("descripcion", "Sin descripción")  # clave que no existe

print(f"Website: {website}")
print(f"Descripción: {descripcion}")  # devuelve "Sin descripción"

# --- Iterar sobre lista de objetos ---
print("\\n=== Lista de posts del usuario ===")
posts_url = "https://jsonplaceholder.typicode.com/posts?userId=1"
resp_posts = requests.get(posts_url)
posts = resp_posts.json()  # Es una lista

print(f"Total de posts: {len(posts)}")
print("Primeros 3 posts:")
for post in posts[:3]:
    titulo = post.get("title", "Sin título")
    print(f"  [{post['id']}] {titulo[:50]}...")`,
    keyPoints: [
      'response.json() convierte el JSON en diccionario o lista Python automáticamente',
      'Accede a datos anidados encadenando corchetes: datos["nivel1"]["nivel2"]',
      'Usa .get("clave", valor_por_defecto) para acceso seguro sin riesgo de KeyError',
      'json.dumps(datos, indent=2) permite visualizar JSON de forma legible para exploración',
      'Verifica si la respuesta es lista o diccionario con isinstance() antes de procesar',
      'Cuando la API devuelve una lista, puedes iterar sobre ella directamente con for',
    ],
    exercise: {
      description: 'Obtén los datos del post con ID 5 de JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/5). Imprime el título y el cuerpo del post. Luego obtén todos los comentarios de ese post (https://jsonplaceholder.typicode.com/comments?postId=5), imprime cuántos hay y el email de cada comentarista. Usa .get() con valor por defecto para acceder al email.',
      hint: 'La URL de comentarios acepta el parámetro postId. La respuesta será una lista de comentarios. Cada comentario tiene: postId, id, name, email, body. Usa json.dumps(datos, indent=2) para explorar la estructura antes de acceder a los campos.',
    },
    quiz: [
      {
        question: '¿Qué tipo de dato Python devuelve response.json() cuando la API responde con un objeto JSON {}?',
        options: ['Una cadena de texto (string)', 'Un diccionario (dict)', 'Una lista (list)', 'Un número entero (int)'],
        correctAnswer: 'Un diccionario (dict)',
        correctFeedback: '¡Correcto! Un objeto JSON {} se convierte en un diccionario Python dict. Un array JSON [] se convierte en una lista Python list.',
        incorrectFeedback: 'Un objeto JSON {} se convierte en un diccionario Python. Un array JSON [] se convierte en una lista. response.json() hace esa conversión automáticamente.',
      },
      {
        question: 'Si datos = {"user": {"city": "Lima"}}, ¿cómo accedes a "Lima"?',
        options: [
          'datos["city"]',
          'datos["user.city"]',
          'datos["user"]["city"]',
          'datos.user.city',
        ],
        correctAnswer: 'datos["user"]["city"]',
        correctFeedback: '¡Correcto! Para acceder a datos anidados, encadenas los corchetes: primero accedes al diccionario externo con ["user"], que devuelve otro diccionario, y luego accedes a ["city"].',
        incorrectFeedback: 'Para datos anidados se encadenan los corchetes: `datos["user"]["city"]`. Primero `datos["user"]` devuelve el diccionario interno, y luego `["city"]` obtiene el valor.',
      },
      {
        question: '¿Cuál es la diferencia entre datos["clave"] y datos.get("clave")?',
        options: [
          'No hay diferencia, ambos hacen lo mismo',
          'datos["clave"] lanza KeyError si no existe; datos.get("clave") devuelve None',
          'datos.get() es más lento',
          'datos["clave"] solo funciona con listas',
        ],
        correctAnswer: 'datos["clave"] lanza KeyError si no existe; datos.get("clave") devuelve None',
        correctFeedback: '¡Correcto! datos["clave"] lanza KeyError si la clave no está, mientras que datos.get("clave") devuelve None (o el valor por defecto que especifiques) sin lanzar error.',
        incorrectFeedback: 'La diferencia clave: `datos["clave"]` lanza KeyError si la clave no existe, lo que puede romper tu programa. `datos.get("clave")` devuelve None sin lanzar error. Usa .get() con datos de APIs.',
      },
      {
        question: '¿Para qué sirve json.dumps(datos, indent=2)?',
        options: [
          'Para hacer la petición a la API',
          'Para convertir una cadena JSON en diccionario Python',
          'Para visualizar un diccionario Python como JSON formateado y legible',
          'Para guardar datos en una base de datos',
        ],
        correctAnswer: 'Para visualizar un diccionario Python como JSON formateado y legible',
        correctFeedback: '¡Correcto! json.dumps() convierte un diccionario Python en una cadena JSON. Con indent=2 lo formatea con sangría, haciéndolo muy legible para explorar estructuras de datos.',
        incorrectFeedback: 'json.dumps(datos, indent=2) convierte un diccionario Python a una cadena JSON formateada con sangría. Es muy útil para explorar la estructura de las respuestas de APIs.',
      },
      {
        question: 'Si response.json() devuelve una lista, ¿cómo accedes al primer elemento?',
        options: [
          'datos.first()',
          'datos["0"]',
          'datos[0]',
          'datos.get(0)',
        ],
        correctAnswer: 'datos[0]',
        correctFeedback: '¡Exacto! Las listas Python se acceden con índices numéricos: datos[0] es el primero, datos[1] el segundo, datos[-1] el último.',
        incorrectFeedback: 'Las listas Python usan índices numéricos. `datos[0]` es el primer elemento, `datos[-1]` el último. Las listas no tienen método .first() ni se acceden con claves de texto.',
      },
      {
        question: 'Tienes: respuesta = [{"id": 1, "name": "Ana"}, {"id": 2, "name": "Luis"}]. ¿Cómo imprimes el nombre de cada elemento?',
        options: [
          'print(respuesta["name"])',
          'for item in respuesta: print(item["name"])',
          'print(respuesta[0]["name"])',
          'for name in respuesta.name: print(name)',
        ],
        correctAnswer: 'for item in respuesta: print(item["name"])',
        correctFeedback: '¡Correcto! Con un bucle for iteras sobre la lista. Cada item es un diccionario, y accedes a su clave "name" con item["name"].',
        incorrectFeedback: 'La forma correcta es iterar con for: `for item in respuesta: print(item["name"])`. Cada iteración da acceso a un diccionario del que extraes la clave que necesitas.',
      },
    ],
  },
  {
    slug: 'parametros-api',
    title: 'Parámetros en una API',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 118,
    description: 'Aprende a enviar parámetros en una solicitud para filtrar o personalizar los datos que recibes.',
    explanation: `## Parámetros en una API

Los **parámetros de consulta** (query parameters) son la forma de personalizar lo que le pides a una API. Se agregan a la URL después del símbolo \`?\`.

### ¿Qué son los parámetros?

Una URL con parámetros se ve así:

\`\`\`
https://api.ejemplo.com/productos?categoria=libros&precio_max=50&limite=10
                                  ^               ^              ^
                                  parámetro 1     parámetro 2   parámetro 3
\`\`\`

Los parámetros le dicen a la API qué datos quieres. En vez de obtener TODOS los productos, filtras solo libros baratos.

### Cómo enviar parámetros con requests

\`\`\`python
import requests

# Forma 1: directamente en la URL (manual)
url = "https://api.ejemplo.com/datos?limite=10&pagina=2"
respuesta = requests.get(url)

# Forma 2 (recomendada): usando el parámetro params={}
respuesta = requests.get(
    "https://api.ejemplo.com/datos",
    params={"limite": 10, "pagina": 2}
)
# requests construye automáticamente: ?limite=10&pagina=2
\`\`\`

### Ventajas de usar params={}

- requests se encarga del encoding (espacios, caracteres especiales)
- Más legible y mantenible
- Puedes construir el diccionario dinámicamente

### Ejemplo: Open-Meteo con parámetros

\`\`\`python
import requests

url = "https://api.open-meteo.com/v1/forecast"

params = {
    "latitude": -33.45,           # Santiago de Chile
    "longitude": -70.67,
    "current_weather": True,
    "hourly": "temperature_2m",
    "forecast_days": 3,
    "temperature_unit": "celsius",
    "wind_speed_unit": "kmh",
}

respuesta = requests.get(url, params=params)
print(respuesta.url)  # Ver la URL completa con parámetros
datos = respuesta.json()
\`\`\`

### Construir parámetros dinámicamente

\`\`\`python
def buscar_productos(categoria=None, precio_max=None, limite=20):
    params = {"limite": limite}  # parámetro siempre presente

    if categoria:
        params["categoria"] = categoria
    if precio_max:
        params["precio_max"] = precio_max

    respuesta = requests.get("https://api.tienda.com/productos", params=params)
    return respuesta.json()

# Usar la función:
libros = buscar_productos(categoria="libros", precio_max=50)
todo = buscar_productos(limite=100)
\`\`\`

### Ver la URL construida

\`\`\`python
respuesta = requests.get(url, params=params)
print(respuesta.url)
# https://api.open-meteo.com/v1/forecast?latitude=-33.45&longitude=-70.67&...
\`\`\``,
    codeExample: `import requests

# === Ejemplo 1: parámetros simples con JSONPlaceholder ===
print("=== Posts filtrados por usuario ===")

# Sin parámetros: devuelve TODOS los posts (100)
# Con parámetro userId: devuelve solo los de ese usuario
respuesta = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params={"userId": 2}
)

posts = respuesta.json()
print(f"Posts del usuario 2: {len(posts)}")
print(f"URL usada: {respuesta.url}")

for post in posts[:2]:
    print(f"  - [{post['id']}] {post['title'][:40]}...")

# === Ejemplo 2: múltiples parámetros ===
print("\\n=== Clima con Open-Meteo ===")

url_clima = "https://api.open-meteo.com/v1/forecast"

# Parámetros para obtener el clima actual de Ciudad de México
params_clima = {
    "latitude": 19.43,
    "longitude": -99.13,
    "current_weather": True,
    "temperature_unit": "celsius",
    "wind_speed_unit": "kmh",
}

resp_clima = requests.get(url_clima, params=params_clima)
resp_clima.raise_for_status()

clima = resp_clima.json()
print(f"URL completa: {resp_clima.url[:80]}...")
print(f"Temperatura actual: {clima['current_weather']['temperature']}°C")
print(f"Viento: {clima['current_weather']['windspeed']} km/h")

# === Ejemplo 3: construir parámetros dinámicamente ===
print("\\n=== Parámetros dinámicos ===")

def obtener_posts_filtrados(user_id=None, limite=None):
    """Obtiene posts con filtros opcionales."""
    params = {}
    if user_id is not None:
        params["userId"] = user_id

    url = "https://jsonplaceholder.typicode.com/posts"
    resp = requests.get(url, params=params)
    posts = resp.json()

    if limite:
        posts = posts[:limite]

    return posts

# Llamar con diferentes parámetros
posts_usuario_3 = obtener_posts_filtrados(user_id=3, limite=3)
print(f"Posts filtrados (usuario 3, máx 3): {len(posts_usuario_3)}")`,
    keyPoints: [
      'Los parámetros de consulta filtran o personalizan los datos que pides a la API',
      'Usa params={} en requests.get() en vez de construir la URL manualmente',
      'requests construye automáticamente la URL con los parámetros correctamente encodificados',
      'response.url muestra la URL completa incluyendo todos los parámetros enviados',
      'Construye los parámetros dinámicamente según las necesidades del usuario o del programa',
    ],
    exercise: {
      description: 'Crea una función llamada buscar_clima(latitud, longitud, dias=1) que use la API de Open-Meteo para obtener el pronóstico del tiempo. La función debe devolver un diccionario con: temperatura_actual, viento_actual y código_clima. Prueba la función con las coordenadas de al menos dos ciudades distintas (busca las coordenadas de tu ciudad en Google).',
      hint: 'La URL base es "https://api.open-meteo.com/v1/forecast". Los parámetros necesarios son: latitude, longitude, current_weather=True. Accede a los datos en datos["current_weather"]["temperature"]. Puedes agregar también "forecast_days" como parámetro.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma recomendada de enviar parámetros con requests?',
        options: [
          'Concatenarlos manualmente a la URL como string',
          'Usar el argumento params={} en requests.get()',
          'Enviarlos en el cuerpo del mensaje GET',
          'Crear una nueva sesión para cada parámetro',
        ],
        correctAnswer: 'Usar el argumento params={} en requests.get()',
        correctFeedback: '¡Correcto! requests.get(url, params={"clave": "valor"}) es la forma recomendada. requests se encarga automáticamente del encoding y la construcción de la URL.',
        incorrectFeedback: 'La forma recomendada es usar params={} en requests.get(). Así requests construye la URL correctamente y maneja automáticamente el encoding de caracteres especiales.',
      },
      {
        question: '¿Cómo se ven los parámetros en la URL final?',
        options: [
          'https://api.ejemplo.com/datos#limite=10',
          'https://api.ejemplo.com/datos/limite/10',
          'https://api.ejemplo.com/datos?limite=10',
          'https://api.ejemplo.com/datos&limite=10',
        ],
        correctAnswer: 'https://api.ejemplo.com/datos?limite=10',
        correctFeedback: '¡Exacto! Los parámetros de consulta van después del símbolo ?. Si hay varios, se separan con &: ?limite=10&pagina=2',
        incorrectFeedback: 'Los parámetros van después de ? en la URL: `https://api.ejemplo.com/datos?limite=10`. Si hay varios parámetros, se separan con &: `?limite=10&pagina=2`.',
      },
      {
        question: '¿Para qué sirve imprimir respuesta.url después de hacer una petición?',
        options: [
          'Para ver el código de la respuesta',
          'Para ver la URL completa con todos los parámetros que se enviaron',
          'Para rehacer la petición',
          'Para obtener los datos JSON',
        ],
        correctAnswer: 'Para ver la URL completa con todos los parámetros que se enviaron',
        correctFeedback: '¡Correcto! respuesta.url muestra la URL final con todos los parámetros incluidos. Es muy útil para depurar y verificar que los parámetros se enviaron correctamente.',
        incorrectFeedback: 'respuesta.url muestra la URL completa con todos los parámetros. Es una herramienta de depuración muy útil para verificar que los parámetros se construyeron correctamente.',
      },
      {
        question: '¿Qué ventaja tiene construir el diccionario de parámetros dinámicamente?',
        options: [
          'La petición se hace más rápido',
          'Puedes incluir o excluir parámetros según las condiciones del programa',
          'Los parámetros se encriptan automáticamente',
          'No hay ventaja, es lo mismo que escribirlos fijos',
        ],
        correctAnswer: 'Puedes incluir o excluir parámetros según las condiciones del programa',
        correctFeedback: '¡Correcto! Si el usuario no especifica un filtro, no incluyes ese parámetro. Esto hace tu función flexible: funciona con o sin cada parámetro opcional.',
        incorrectFeedback: 'Construir parámetros dinámicamente te permite crear funciones flexibles: si el usuario no especifica un filtro, simplemente no lo incluyes en el diccionario.',
      },
      {
        question: 'Si llamas requests.get(url, params={"ciudad": "Buenos Aires", "unidad": "celsius"}), ¿cómo quedaría la URL?',
        options: [
          'url?ciudad=Buenos Aires&unidad=celsius',
          'url?ciudad=Buenos+Aires&unidad=celsius',
          'url#ciudad=Buenos Aires#unidad=celsius',
          'url/Buenos Aires/celsius',
        ],
        correctAnswer: 'url?ciudad=Buenos+Aires&unidad=celsius',
        correctFeedback: '¡Correcto! requests encodifica automáticamente los espacios como + (o %20). Esto es lo que hace tan útil usar params={} en vez de construir la URL manualmente.',
        incorrectFeedback: 'requests encodifica automáticamente los caracteres especiales: el espacio se convierte en + (o %20). La URL sería: url?ciudad=Buenos+Aires&unidad=celsius.',
      },
    ],
  },
  {
    slug: 'errores-api',
    title: 'Manejar errores de una API',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 119,
    description: 'Aprende a manejar códigos de estado, errores de conexión y respuestas inesperadas.',
    explanation: `## Manejar errores de una API

Cuando trabajas con APIs, las cosas pueden salir mal: la internet falla, el servidor está caído, la URL es incorrecta, el token expiró. Tu código debe manejar estos casos graciosamente.

### Códigos de estado HTTP

Los códigos de estado indican qué pasó con tu petición:

| Código | Nombre | Significado |
|--------|--------|-------------|
| 200 | OK | Éxito ✓ |
| 201 | Created | Recurso creado ✓ |
| 400 | Bad Request | Tu petición tiene errores |
| 401 | Unauthorized | Necesitas autenticación |
| 403 | Forbidden | No tienes permiso |
| 404 | Not Found | El recurso no existe |
| 429 | Too Many Requests | Superaste el límite de peticiones |
| 500 | Internal Server Error | Error del servidor |
| 503 | Service Unavailable | Servidor no disponible |

### Errores de conexión

Además de errores HTTP, pueden ocurrir errores de red:

\`\`\`python
import requests

try:
    respuesta = requests.get(url, timeout=10)
    respuesta.raise_for_status()
    datos = respuesta.json()
except requests.exceptions.ConnectionError:
    print("Error: No hay conexión a internet o el servidor no responde")
except requests.exceptions.Timeout:
    print("Error: La petición tardó demasiado")
except requests.exceptions.HTTPError as e:
    print(f"Error HTTP {e.response.status_code}: {e}")
except requests.exceptions.RequestException as e:
    print(f"Error inesperado: {e}")
\`\`\`

### El parámetro timeout

Siempre usa timeout para evitar que tu programa se quede esperando indefinidamente:

\`\`\`python
# Sin timeout: puede esperar para siempre si el servidor no responde
respuesta = requests.get(url)

# Con timeout: espera máximo 10 segundos
respuesta = requests.get(url, timeout=10)

# Timeout separado: (segundos de conexión, segundos de lectura)
respuesta = requests.get(url, timeout=(5, 30))
\`\`\`

### Manejar el código de estado específico

\`\`\`python
respuesta = requests.get(url)

if respuesta.status_code == 200:
    return respuesta.json()
elif respuesta.status_code == 404:
    raise ValueError("Recurso no encontrado")
elif respuesta.status_code == 429:
    print("Límite de peticiones alcanzado. Espera un momento.")
elif respuesta.status_code >= 500:
    raise Exception("Error del servidor, intenta más tarde")
\`\`\`

### Concepto de reintentos

Cuando hay errores temporales (503, timeout), puede tener sentido reintentar:

\`\`\`python
import time

def peticion_con_reintentos(url, max_intentos=3):
    for intento in range(1, max_intentos + 1):
        try:
            resp = requests.get(url, timeout=10)
            resp.raise_for_status()
            return resp.json()
        except (requests.exceptions.Timeout, requests.exceptions.ConnectionError):
            if intento < max_intentos:
                print(f"Intento {intento} fallido. Reintentando...")
                time.sleep(2 ** intento)  # espera exponencial: 2, 4, 8 seg
            else:
                raise
\`\`\``,
    codeExample: `import requests
import time

def llamar_api(url, params=None, timeout=10):
    """Hace una petición GET con manejo completo de errores."""
    try:
        respuesta = requests.get(url, params=params, timeout=timeout)

        # Verificar código de estado específico
        if respuesta.status_code == 404:
            print(f"❌ No encontrado: {url}")
            return None
        elif respuesta.status_code == 429:
            print("⚠️  Límite de peticiones alcanzado. Espera antes de reintentar.")
            return None
        elif respuesta.status_code == 401:
            print("🔒 Error de autenticación: verifica tu API key")
            return None
        elif respuesta.status_code == 403:
            print("🚫 Sin permiso para acceder a este recurso")
            return None

        # Para cualquier otro error 4xx o 5xx
        respuesta.raise_for_status()

        return respuesta.json()

    except requests.exceptions.ConnectionError:
        print("❌ Error de conexión: verifica tu internet")
        return None
    except requests.exceptions.Timeout:
        print(f"⏱️  Timeout: el servidor tardó más de {timeout} segundos")
        return None
    except requests.exceptions.HTTPError as e:
        print(f"❌ Error HTTP: {e}")
        return None
    except requests.exceptions.JSONDecodeError:
        print("❌ La respuesta no es JSON válido")
        return None

# --- Pruebas ---
print("=== Prueba 1: URL válida ===")
datos = llamar_api("https://jsonplaceholder.typicode.com/posts/1")
if datos:
    print(f"✓ Título: {datos['title'][:40]}")

print("\\n=== Prueba 2: URL inexistente (simula 404) ===")
# JSONPlaceholder devuelve {} para IDs muy altos
datos_404 = llamar_api("https://jsonplaceholder.typicode.com/posts/0")
print(f"Resultado: {datos_404}")

print("\\n=== Prueba 3: Con timeout muy corto (puede fallar) ===")
datos_timeout = llamar_api(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=0.001  # 1ms — probablemente hace timeout
)
if not datos_timeout:
    print("El timeout funcionó correctamente")`,
    keyPoints: [
      'Los códigos HTTP 2xx son éxito, 4xx son errores del cliente, 5xx son errores del servidor',
      'Usa siempre timeout= en requests.get() para evitar esperas indefinidas',
      'raise_for_status() es conveniente pero maneja errores específicos cuando necesitas respuestas distintas',
      'requests.exceptions.ConnectionError cubre fallos de red; Timeout cubre respuestas lentas',
      'Para errores temporales (timeout, 503) considera implementar reintentos con espera',
      'El código 429 significa que superaste el límite de peticiones — respeta los rate limits',
    ],
    exercise: {
      description: 'Crea una función robusta llamada obtener_usuario(user_id) que consulte https://jsonplaceholder.typicode.com/users/{user_id}. La función debe: usar timeout=5, manejar ConnectionError, Timeout y HTTPError por separado con mensajes distintos, devolver el diccionario de datos si hay éxito y None si hay error. Pruébala con IDs válidos (1-10) e inválidos (0, 999).',
      hint: 'Usa un bloque try/except con múltiples except: primero ConnectionError, luego Timeout, luego HTTPError. Para construir la URL con el ID usa un f-string: f"https://jsonplaceholder.typicode.com/users/{user_id}".',
    },
    quiz: [
      {
        question: '¿Qué significa el código HTTP 401?',
        options: ['El recurso no fue encontrado', 'Necesitas autenticación para acceder', 'Error interno del servidor', 'Petición incorrecta'],
        correctAnswer: 'Necesitas autenticación para acceder',
        correctFeedback: '¡Correcto! 401 Unauthorized significa que la petición requiere autenticación. Normalmente tienes que enviar un token o API key válido.',
        incorrectFeedback: '401 es Unauthorized — necesitas autenticación. 404 = No encontrado, 500 = Error del servidor, 400 = Petición incorrecta.',
      },
      {
        question: '¿Para qué sirve el parámetro timeout en requests.get()?',
        options: [
          'Para pausar el programa entre peticiones',
          'Para limitar el tiempo de espera de la petición y evitar bloqueos',
          'Para especificar cuántas veces reintentar',
          'Para configurar el tiempo de expiración del token',
        ],
        correctAnswer: 'Para limitar el tiempo de espera de la petición y evitar bloqueos',
        correctFeedback: '¡Correcto! Sin timeout, tu programa puede quedarse bloqueado esperando indefinidamente. Con timeout=10, lanza Timeout si el servidor no responde en 10 segundos.',
        incorrectFeedback: 'El timeout limita cuánto tiempo espera requests una respuesta. Sin él, si el servidor no responde, tu programa se queda bloqueado para siempre.',
      },
      {
        question: '¿Qué excepción lanza requests cuando no hay conexión a internet?',
        options: [
          'requests.exceptions.HTTPError',
          'requests.exceptions.Timeout',
          'requests.exceptions.ConnectionError',
          'requests.exceptions.NetworkError',
        ],
        correctAnswer: 'requests.exceptions.ConnectionError',
        correctFeedback: '¡Correcto! ConnectionError ocurre cuando no hay red, el servidor no existe, o la conexión es rechazada. Es diferente a Timeout (el servidor responde pero muy lento).',
        incorrectFeedback: 'requests.exceptions.ConnectionError ocurre cuando no hay internet o el servidor no puede alcanzarse. Timeout ocurre cuando el servidor no responde a tiempo.',
      },
      {
        question: '¿Qué significa el código 429?',
        options: [
          'El servidor está en mantenimiento',
          'Tu cuenta fue bloqueada permanentemente',
          'Superaste el límite de peticiones (rate limit)',
          'El recurso fue eliminado',
        ],
        correctAnswer: 'Superaste el límite de peticiones (rate limit)',
        correctFeedback: '¡Exacto! 429 Too Many Requests significa que hiciste demasiadas peticiones en poco tiempo. Debes esperar antes de reintentar y respetar los límites de la API.',
        incorrectFeedback: '429 Too Many Requests ocurre cuando superas el rate limit de la API (ej: máximo 100 peticiones por hora). Debes esperar y reintentar más tarde.',
      },
      {
        question: '¿Cuál es el orden correcto de las excepciones en un try/except para peticiones HTTP?',
        options: [
          'HTTPError → ConnectionError → Timeout → RequestException',
          'RequestException → ConnectionError → Timeout → HTTPError',
          'ConnectionError → Timeout → HTTPError → RequestException',
          'Cualquier orden funciona igual',
        ],
        correctAnswer: 'ConnectionError → Timeout → HTTPError → RequestException',
        correctFeedback: '¡Correcto! De más específico a más general. RequestException es la clase base de todas, así que va al final para capturar cualquier error restante.',
        incorrectFeedback: 'Se captura de más específico a más general. RequestException es la base de todas las excepciones de requests, así que va al final como "captura todo".',
      },
      {
        question: '¿Cuándo tiene sentido implementar reintentos automáticos?',
        options: [
          'Siempre, para todos los tipos de error',
          'Nunca, el usuario debe reintentar manualmente',
          'Solo para errores temporales como timeout o 503, no para 404 o 401',
          'Solo para errores 500',
        ],
        correctAnswer: 'Solo para errores temporales como timeout o 503, no para 404 o 401',
        correctFeedback: '¡Correcto! Tiene sentido reintentar errores temporales (red inestable, servidor sobrecargado). Pero un 404 o 401 no se va a solucionar solo con reintentar.',
        incorrectFeedback: 'Los reintentos solo tienen sentido para errores temporales: timeout, ConnectionError, 503. Un 404 (no encontrado) o 401 (sin autorización) no se resuelven reintentando.',
      },
    ],
  },
  {
    slug: 'headers-api-keys',
    title: 'Usar headers y API keys',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 120,
    description: 'Aprende qué son los headers, cómo enviar una API key y por qué nunca debes compartir claves secretas en tu código público.',
    explanation: `## Usar headers y API keys

Muchas APIs requieren autenticación para saber quién hace las peticiones y para controlar el acceso. La forma más común es una **API key**.

### ⚠️ SEGURIDAD — LEE ESTO PRIMERO

**NUNCA pongas API keys reales directamente en tu código.**

Si subes tu código a GitHub con una API key visible:
- Bots escanean GitHub automáticamente buscando claves
- Tu clave puede ser robada en minutos
- Puedes recibir cargos económicos si la API tiene costos
- El servicio puede suspender tu cuenta

**La solución: variables de entorno.**

### Variables de entorno para API keys

\`\`\`bash
# En tu terminal o archivo .env:
export OPENWEATHER_API_KEY="tu_clave_aqui"
\`\`\`

\`\`\`python
import os

# Leer la clave desde el entorno, nunca escribirla directamente
api_key = os.environ.get("OPENWEATHER_API_KEY")

if not api_key:
    raise ValueError("Configura la variable de entorno OPENWEATHER_API_KEY")
\`\`\`

### Archivo .env con python-dotenv

\`\`\`
# archivo .env (NO subir a git)
OPENWEATHER_API_KEY=abc123xyz456
DATABASE_URL=postgresql://user:pass@host/db
\`\`\`

\`\`\`python
from dotenv import load_dotenv
import os

load_dotenv()  # Carga automáticamente el archivo .env

api_key = os.environ.get("OPENWEATHER_API_KEY")
\`\`\`

### Qué debe contener .gitignore

\`\`\`
# .gitignore
.env
.env.local
*.env
\`\`\`

### Cómo enviar una API key

**Como parámetro en la URL:**
\`\`\`python
params = {
    "q": "Lima",
    "appid": api_key,  # API key como parámetro
}
respuesta = requests.get(url, params=params)
\`\`\`

**Como header de Authorization:**
\`\`\`python
headers = {
    "Authorization": f"Bearer {api_key}",
}
respuesta = requests.get(url, headers=headers)
\`\`\`

**Como header personalizado:**
\`\`\`python
headers = {
    "X-API-Key": api_key,
    "Accept": "application/json",
}
respuesta = requests.get(url, headers=headers)
\`\`\`

### ¿Qué son los headers HTTP?

Los headers son metadatos de la petición o respuesta. No son los datos en sí, sino información sobre la petición:

- \`Authorization\`: credenciales de autenticación
- \`Content-Type\`: tipo de datos que estás enviando
- \`Accept\`: tipo de datos que esperas recibir
- \`User-Agent\`: quién hace la petición (tu programa)`,
    codeExample: `import os
import requests

# ============================================================
# ⚠️  SEGURIDAD: nunca hagas esto en código que subirás a git:
# api_key = "abc123xyz456real"  # ← PELIGROSO
# ============================================================

# ✅ CORRECTO: leer desde variable de entorno
api_key = os.environ.get("MI_API_KEY")

# Para este ejemplo educativo, si no está configurada:
if not api_key:
    api_key = "DEMO_KEY_NO_REAL"  # Solo para demostración
    print("⚠️  Usando clave de demo. Configura MI_API_KEY en tu entorno.")

# --- Ejemplo 1: API key como parámetro ---
print("=== API key como parámetro ===")
params_con_key = {
    "userId": 1,
    # En APIs reales: "api_key": api_key
    # Para este demo usamos JSONPlaceholder que no requiere key
}
resp = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params=params_con_key
)
print(f"Status: {resp.status_code}")
print(f"Posts obtenidos: {len(resp.json())}")

# --- Ejemplo 2: API key como header de Authorization ---
print("\\n=== API key como header ===")
headers_auth = {
    "Authorization": f"Bearer {api_key}",
    "Accept": "application/json",
    "User-Agent": "MiAppPython/1.0",
}

# Aquí usamos JSONPlaceholder que ignora los headers
resp_con_header = requests.get(
    "https://jsonplaceholder.typicode.com/users/1",
    headers=headers_auth
)
usuario = resp_con_header.json()
print(f"Usuario obtenido: {usuario['name']}")
print(f"Headers enviados: {list(headers_auth.keys())}")

# --- Ejemplo 3: verificar variable de entorno ---
print("\\n=== Verificación de variables de entorno ===")
variables_necesarias = ["MI_API_KEY", "DATABASE_URL", "SECRET_TOKEN"]
for var in variables_necesarias:
    valor = os.environ.get(var)
    if valor:
        # Mostrar solo los últimos 4 caracteres por seguridad
        oculto = "*" * (len(valor) - 4) + valor[-4:] if len(valor) > 4 else "****"
        print(f"✓ {var}: {oculto}")
    else:
        print(f"✗ {var}: NO CONFIGURADA")`,
    keyPoints: [
      'NUNCA pongas API keys reales directamente en el código — usa variables de entorno',
      'os.environ.get("NOMBRE_VAR") lee variables de entorno sin exponer claves en el código',
      'El archivo .env guarda claves localmente — debe estar en .gitignore para no subirlo a git',
      'Las API keys se envían como parámetro en la URL, como header Authorization o como header personalizado',
      'Los headers son metadatos de la petición: Authorization, Content-Type, Accept, User-Agent',
      'Si accidentalmente subes una clave a git, revócala inmediatamente en el servicio correspondiente',
    ],
    exercise: {
      description: 'Crea un archivo .env con una variable ficticia MY_TEST_KEY=clave123prueba. Luego escribe un script Python que: (1) use python-dotenv para cargar el .env, (2) lea MY_TEST_KEY con os.environ.get(), (3) muestre la clave parcialmente oculta (solo los últimos 4 caracteres visibles), (4) construya un diccionario de headers con Authorization: Bearer {clave} y muestre qué headers se enviarían. Asegúrate de agregar .env a tu .gitignore.',
      hint: 'Instala python-dotenv con pip install python-dotenv. Usa from dotenv import load_dotenv y luego load_dotenv() antes de os.environ.get(). Para ocultar la clave: "*" * (len(clave)-4) + clave[-4:].',
    },
    quiz: [
      {
        question: '¿Por qué es peligroso poner una API key directamente en el código Python?',
        options: [
          'Porque hace el código más lento',
          'Porque bots escanean repositorios públicos y pueden robarla en minutos',
          'Porque Python no puede leer strings con esos caracteres',
          'Porque las API keys no funcionan en el código Python',
        ],
        correctAnswer: 'Porque bots escanean repositorios públicos y pueden robarla en minutos',
        correctFeedback: '¡Correcto! Existen bots automatizados que escanean GitHub constantemente buscando API keys. Si subes tu código con una clave, puede ser comprometida en minutos.',
        incorrectFeedback: 'Los bots automatizados escanean repositorios públicos de GitHub buscando API keys. Una clave expuesta puede ser usada para hacer cargos, acceder a datos o colapsar tu cuenta.',
      },
      {
        question: '¿Cuál es la forma correcta de manejar una API key en Python?',
        options: [
          'api_key = "abc123" — directamente en el código',
          'api_key = os.environ.get("MI_API_KEY") — desde variable de entorno',
          'api_key = input("Ingresa tu API key: ") — preguntar siempre',
          'Guardarla en un comentario del código',
        ],
        correctAnswer: 'api_key = os.environ.get("MI_API_KEY") — desde variable de entorno',
        correctFeedback: '¡Correcto! os.environ.get() lee la variable del entorno del sistema. La clave nunca aparece en el código fuente ni en el historial de git.',
        incorrectFeedback: 'La forma segura es usar variables de entorno: `api_key = os.environ.get("MI_API_KEY")`. La clave se configura en el entorno, no en el código.',
      },
      {
        question: '¿Qué debes hacer si accidentalmente subes una API key a GitHub?',
        options: [
          'Nada, nadie revisa esos repositorios',
          'Eliminar el commit y ya está solucionado',
          'Revocar/regenerar la clave inmediatamente en el servicio y limpiar el historial de git',
          'Hacer el repositorio privado',
        ],
        correctAnswer: 'Revocar/regenerar la clave inmediatamente en el servicio y limpiar el historial de git',
        correctFeedback: '¡Correcto! Lo primero es revocar la clave comprometida. El historial de git guarda todos los commits, así que la clave puede estar visible aunque la borres después.',
        incorrectFeedback: 'Revocar la clave inmediatamente en el servicio es prioritario. Eliminar el commit no es suficiente porque el historial de git puede seguir mostrando la clave.',
      },
      {
        question: '¿Cómo se envía una API key usando el patrón Bearer token en el header?',
        options: [
          'headers = {"API-KEY": api_key}',
          'headers = {"Authorization": f"Bearer {api_key}"}',
          'params = {"bearer": api_key}',
          'headers = {"Token": api_key}',
        ],
        correctAnswer: 'headers = {"Authorization": f"Bearer {api_key}"}',
        correctFeedback: '¡Correcto! El patrón Bearer token usa el header Authorization con el valor "Bearer " seguido del token. Es el estándar OAuth 2.0 más usado.',
        incorrectFeedback: 'El patrón Bearer estándar usa: `headers = {"Authorization": f"Bearer {api_key}"}`. Muchas APIs REST y OAuth 2.0 usan este formato.',
      },
      {
        question: '¿Para qué sirve el archivo .env?',
        options: [
          'Para configurar el entorno virtual de Python',
          'Para guardar variables de entorno localmente sin incluirlas en el código',
          'Para documentar las variables del proyecto',
          'Para instalar dependencias automáticamente',
        ],
        correctAnswer: 'Para guardar variables de entorno localmente sin incluirlas en el código',
        correctFeedback: '¡Exacto! El .env es un archivo de texto con pares CLAVE=valor. Se carga con python-dotenv y NUNCA se sube a git (va en .gitignore).',
        incorrectFeedback: 'El .env guarda variables de entorno locales (API keys, contraseñas) que no deben estar en el código. Se carga con python-dotenv y se excluye con .gitignore.',
      },
      {
        question: '¿Qué hace os.environ.get("API_KEY") si la variable no existe en el entorno?',
        options: [
          'Lanza un KeyError',
          'Devuelve None',
          'Devuelve una cadena vacía',
          'Busca en el archivo .env automáticamente',
        ],
        correctAnswer: 'Devuelve None',
        correctFeedback: '¡Correcto! .get() devuelve None si la variable no existe (sin lanzar error). Puedes dar un valor por defecto: os.environ.get("API_KEY", "valor_por_defecto").',
        incorrectFeedback: 'os.environ.get() devuelve None si la variable no está configurada. Puedes usar un valor por defecto: os.environ.get("API_KEY", "default"). Para lanzar error usa os.environ["API_KEY"].',
      },
    ],
  },
  {
    slug: 'app-clima-api',
    title: 'Mini proyecto: app del clima por API',
    module: 'Consumo de APIs',
    moduleNumber: 23,
    order: 121,
    description: 'Crea un pequeño programa que consulte una API del clima y muestre resultados útiles al usuario.',
    explanation: `## Mini proyecto: app del clima por API

En este proyecto integras todo lo aprendido sobre APIs: peticiones GET, parámetros, manejo de errores, lectura de JSON y (opcionalmente) API keys.

Usaremos **Open-Meteo** — es completamente gratuita y no requiere registro ni API key.

### La API de Open-Meteo

**URL base:** \`https://api.open-meteo.com/v1/forecast\`

**Parámetros principales:**

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| \`latitude\` | Latitud de la ubicación | -12.05 |
| \`longitude\` | Longitud de la ubicación | -77.05 |
| \`current_weather\` | Clima actual | true |
| \`hourly\` | Datos por hora | temperature_2m |
| \`daily\` | Datos diarios | temperature_2m_max |
| \`temperature_unit\` | Unidad de temperatura | celsius |
| \`forecast_days\` | Días de pronóstico | 7 |

### Estructura de la respuesta

\`\`\`json
{
  "latitude": -12.05,
  "longitude": -77.05,
  "current_weather": {
    "temperature": 20.3,
    "windspeed": 15.2,
    "weathercode": 1,
    "time": "2024-01-15T14:00"
  }
}
\`\`\`

### Códigos de clima (weathercode)

\`\`\`python
CLIMA_DESCRIPCION = {
    0: "Despejado",
    1: "Principalmente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    61: "Lluvia leve",
    63: "Lluvia moderada",
    80: "Chubascos",
    95: "Tormenta eléctrica",
}
\`\`\`

### Estructura del proyecto

El programa tendrá funciones separadas:

1. \`obtener_clima(lat, lon)\` — hace la petición a la API
2. \`interpretar_codigo_clima(codigo)\` — convierte número a descripción
3. \`mostrar_clima(datos)\` — formatea y muestra los resultados
4. \`main()\` — coordina todo el programa`,
    codeExample: `import requests

# ============================================================
# Mini proyecto: App del Clima usando Open-Meteo API
# Gratuita, sin API key necesaria
# ============================================================

CLIMA_DESCRIPCION = {
    0: "Cielo despejado ☀️",
    1: "Principalmente despejado 🌤️",
    2: "Parcialmente nublado ⛅",
    3: "Nublado ☁️",
    45: "Neblina 🌫️",
    48: "Neblina con escarcha",
    51: "Llovizna leve",
    61: "Lluvia leve 🌧️",
    63: "Lluvia moderada 🌧️",
    65: "Lluvia intensa",
    80: "Chubascos 🌦️",
    95: "Tormenta eléctrica ⛈️",
}

CIUDADES = {
    "lima": (-12.05, -77.05),
    "bogota": (4.71, -74.07),
    "santiago": (-33.45, -70.67),
    "madrid": (40.42, -3.70),
    "ciudad de mexico": (19.43, -99.13),
}


def obtener_clima(latitud: float, longitud: float) -> dict | None:
    """Consulta el clima actual de una ubicación."""
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": latitud,
        "longitude": longitud,
        "current_weather": True,
        "temperature_unit": "celsius",
        "wind_speed_unit": "kmh",
        "forecast_days": 1,
    }

    try:
        respuesta = requests.get(url, params=params, timeout=10)
        respuesta.raise_for_status()
        return respuesta.json()
    except requests.exceptions.ConnectionError:
        print("❌ Sin conexión a internet")
        return None
    except requests.exceptions.Timeout:
        print("❌ La API tardó demasiado en responder")
        return None
    except requests.exceptions.HTTPError as e:
        print(f"❌ Error de la API: {e}")
        return None


def interpretar_codigo_clima(codigo: int) -> str:
    """Convierte un código de clima en descripción legible."""
    return CLIMA_DESCRIPCION.get(codigo, f"Código desconocido ({codigo})")


def mostrar_clima(ciudad: str, datos: dict) -> None:
    """Muestra los datos del clima de forma amigable."""
    clima = datos.get("current_weather", {})
    temp = clima.get("temperature", "N/A")
    viento = clima.get("windspeed", "N/A")
    codigo = clima.get("weathercode", -1)
    descripcion = interpretar_codigo_clima(codigo)

    print(f"\\n{'='*40}")
    print(f"  Clima en {ciudad.title()}")
    print(f"{'='*40}")
    print(f"  Condición:    {descripcion}")
    print(f"  Temperatura:  {temp}°C")
    print(f"  Viento:       {viento} km/h")
    print(f"{'='*40}")


def main():
    """Función principal de la app del clima."""
    print("🌍 App del Clima — Open-Meteo API")
    print("Ciudades disponibles:", ", ".join(CIUDADES.keys()))
    print()

    # En un programa real: ciudad_input = input("¿Qué ciudad? ").lower()
    # Para el demo, probamos varias ciudades:
    ciudades_prueba = ["lima", "madrid", "bogota"]

    for nombre in ciudades_prueba:
        if nombre in CIUDADES:
            lat, lon = CIUDADES[nombre]
            datos = obtener_clima(lat, lon)
            if datos:
                mostrar_clima(nombre, datos)
        else:
            print(f"Ciudad '{nombre}' no encontrada")


if __name__ == "__main__":
    main()`,
    keyPoints: [
      'Open-Meteo es una API de clima gratuita sin registro ni API key requerida',
      'El proyecto estructura el código en funciones: obtener datos, interpretar, mostrar y main',
      'El manejo de errores en la capa de red devuelve None en lugar de dejar crashear el programa',
      'Los códigos de clima (weathercode) se traducen a texto con un diccionario de mapeo',
      'Separar la lógica en funciones hace el código reutilizable y fácil de probar',
    ],
    exercise: {
      description: 'Extiende la app del clima para que también muestre el pronóstico de los próximos 3 días. Agrega el parámetro "daily": "temperature_2m_max,temperature_2m_min,weathercode" y "forecast_days": 3 en la petición. Muestra para cada día: la fecha, temperatura máxima, mínima y descripción del clima. La respuesta incluirá un campo "daily" con listas de valores.',
      hint: 'El campo "daily" en la respuesta tiene sub-claves: "time" (lista de fechas), "temperature_2m_max" (lista), "temperature_2m_min" (lista), "weathercode" (lista). Usa zip() para combinarlas: zip(fechas, temps_max, temps_min, codigos).',
    },
    quiz: [
      {
        question: '¿Por qué Open-Meteo es ideal para aprender a consumir APIs?',
        options: [
          'Porque es la más rápida del mercado',
          'Porque es gratuita, no requiere registro ni API key',
          'Porque solo funciona con Python',
          'Porque devuelve datos en CSV en vez de JSON',
        ],
        correctAnswer: 'Porque es gratuita, no requiere registro ni API key',
        correctFeedback: '¡Correcto! Open-Meteo es perfecta para aprender porque puedes empezar a usarla inmediatamente sin crear cuentas ni gestionar claves secretas.',
        incorrectFeedback: 'Open-Meteo es ideal para aprender por su simplicidad: gratuita, sin registro y sin API key. Puedes hacer tu primera petición sin ninguna configuración previa.',
      },
      {
        question: '¿Para qué sirve el diccionario CLIMA_DESCRIPCION en el proyecto?',
        options: [
          'Para guardar las coordenadas de las ciudades',
          'Para traducir el código numérico de clima a una descripción legible',
          'Para almacenar el historial de consultas',
          'Para configurar los parámetros de la API',
        ],
        correctAnswer: 'Para traducir el código numérico de clima a una descripción legible',
        correctFeedback: '¡Correcto! La API devuelve un número (weathercode: 61) y el diccionario lo traduce a texto legible ("Lluvia leve"). Es un patrón de mapeo muy común.',
        incorrectFeedback: 'CLIMA_DESCRIPCION mapea códigos numéricos (0, 1, 61, 95) a descripciones legibles. La API devuelve números; el diccionario los convierte en texto comprensible para el usuario.',
      },
      {
        question: '¿Por qué la función obtener_clima() devuelve None en vez de lanzar la excepción directamente?',
        options: [
          'Porque Python no permite lanzar excepciones en funciones',
          'Para que el programa no se detenga y la función main() pueda manejar el error',
          'Porque None es más rápido que lanzar una excepción',
          'No hay diferencia entre las dos opciones',
        ],
        correctAnswer: 'Para que el programa no se detenga y la función main() pueda manejar el error',
        correctFeedback: '¡Correcto! Devolver None permite que el llamador (main()) decida qué hacer. El programa puede continuar con la siguiente ciudad en vez de detenerse completamente.',
        incorrectFeedback: 'Devolver None en vez de relanzar la excepción da al código llamador la posibilidad de manejar el error graciosamente. El programa puede continuar en vez de detenerse.',
      },
      {
        question: '¿Qué hace zip(fechas, temps_max, temps_min) cuando se usa en un bucle for?',
        options: [
          'Comprime las listas en un archivo ZIP',
          'Combina elementos de las listas en tuplas: (fecha, max, min) para cada posición',
          'Concatena todas las listas en una sola',
          'Ordena las listas por temperatura',
        ],
        correctAnswer: 'Combina elementos de las listas en tuplas: (fecha, max, min) para cada posición',
        correctFeedback: '¡Correcto! zip() combina múltiples listas elemento a elemento. for fecha, tmax, tmin in zip(fechas, temps_max, temps_min) da acceso a los tres valores de cada día.',
        incorrectFeedback: 'zip() combina múltiples listas en tuplas por posición. `for fecha, tmax, tmin in zip(fechas, temps_max, temps_min)` da acceso a los tres valores correspondientes de cada día.',
      },
      {
        question: '¿Cuál es el beneficio de tener una función mostrar_clima() separada de obtener_clima()?',
        options: [
          'No hay beneficio, es mejor tenerlo todo junto',
          'Separación de responsabilidades: una obtiene datos, otra los presenta',
          'Es obligatorio por las reglas de Python',
          'Hace el código más lento pero más organizado',
        ],
        correctAnswer: 'Separación de responsabilidades: una obtiene datos, otra los presenta',
        correctFeedback: '¡Correcto! Separar responsabilidades hace el código más mantenible. Puedes cambiar cómo se muestran los datos sin tocar la lógica de la API, y viceversa.',
        incorrectFeedback: 'La separación de responsabilidades hace el código más mantenible. Puedes cambiar la fuente de datos (otra API) sin tocar la presentación, y cambiar el formato sin tocar la API.',
      },
      {
        question: '¿Qué parámetro de Open-Meteo se usa para pedir datos del pronóstico diario?',
        options: [
          'current_weather: True',
          'daily: "temperature_2m_max,temperature_2m_min"',
          'forecast: "daily"',
          'days: "max,min"',
        ],
        correctAnswer: 'daily: "temperature_2m_max,temperature_2m_min"',
        correctFeedback: '¡Correcto! El parámetro "daily" acepta una lista de variables separadas por coma. La respuesta incluirá un campo "daily" con listas de valores para cada día.',
        incorrectFeedback: 'El parámetro correcto es "daily" con los nombres de variables que quieres. Por ejemplo: daily: "temperature_2m_max,temperature_2m_min,weathercode".',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module23: Module = {
  number: 23,
  title: 'Consumo de APIs',
  level: 'practico',
  lessons: lessonsModule23,
}
