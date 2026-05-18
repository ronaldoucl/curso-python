import type { Lesson } from '@/types'

export const lessonsModule22: Lesson[] = [
  {
    slug: 'web-scraping',
    title: '¿Qué es web scraping?',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 108,
    description: 'Aprende qué es web scraping, cuándo puede ser útil y qué consideraciones éticas y legales debes tener en cuenta.',
    explanation: `## ¿Qué es web scraping?

Web scraping es la técnica de extraer datos de páginas web de forma automatizada. En lugar de copiar y pegar manualmente, un script visita la página y extrae la información que necesitas.

### Casos de uso reales

- **Monitoreo de precios**: comparar el precio de un producto en distintas tiendas.
- **Agregación de noticias**: recolectar titulares de varios medios automáticamente.
- **Investigación académica**: recolectar datos públicos para análisis.
- **Seguimiento de disponibilidad**: saber cuándo hay stock de un producto.
- **Análisis de mercado**: recolectar información pública de competidores.

### ⚠️ Ética y aspectos legales — IMPORTANTE

> **Antes de hacer scraping, siempre:**
> 1. Revisa los **Términos de Uso** del sitio web
> 2. Respeta el archivo **robots.txt**
> 3. Evita hacer demasiadas solicitudes seguidas (podrías saturar el servidor)
> 4. No extraigas datos personales sin consentimiento
> 5. Prefiere la **API oficial** del sitio si existe

### ¿Qué es robots.txt?

Es un archivo que los sitios web publican en \`https://ejemplo.com/robots.txt\` para indicar qué partes pueden ser visitadas por bots automatizados y cuáles no.

\`\`\`
# robots.txt de ejemplo
User-agent: *
Disallow: /privado/
Disallow: /admin/
Allow: /blog/
\`\`\`

\`Disallow\` significa "no entres aquí". Respetar robots.txt es una norma de buena conducta en internet.

### Lo que NO debes hacer

- Saltarte medidas de protección (captchas, login) para acceder a datos privados
- Scraping masivo que sature el servidor
- Revender datos scrapeados sin permiso
- Extraer datos personales o privados
- Ignorar explícitamente el robots.txt

### Áreas grises legales

La legalidad del scraping varía por país y sitio. En general, datos públicos con fines de investigación son más aceptados. Datos privados, datos personales o scraping con fines comerciales pueden tener implicaciones legales. **Ante la duda, consulta los términos del sitio o usa la API oficial.**`,
    codeExample: `import urllib.request
import urllib.parse

# ============================================
# Cómo verificar robots.txt antes de scrapear
# ============================================

def leer_robots_txt(dominio):
    """
    Descarga y muestra el contenido de robots.txt de un sitio.
    Esta es la primera verificación que debes hacer antes de scrapear.
    """
    url = f"https://{dominio}/robots.txt"
    try:
        with urllib.request.urlopen(url, timeout=5) as respuesta:
            contenido = respuesta.read().decode("utf-8")
            print(f"robots.txt de {dominio}:")
            print("-" * 40)
            print(contenido[:1000])  # Primeras 1000 chars
            return contenido
    except Exception as e:
        print(f"No se pudo leer robots.txt: {e}")
        return ""


def esta_permitido(robots_txt, ruta, agente="*"):
    """
    Verificación simplificada de si una ruta está permitida según robots.txt.
    En producción usa la biblioteca 'urllib.robotparser'.
    """
    from urllib.robotparser import RobotFileParser
    parser = RobotFileParser()
    parser.parse(robots_txt.splitlines())
    return parser.can_fetch(agente, ruta)


# Ejemplo de verificación manual
robots = """
User-agent: *
Disallow: /privado/
Disallow: /admin/
Allow: /blog/
Allow: /noticias/
"""

rutas_a_verificar = ["/blog/articulo-1", "/privado/datos", "/noticias/", "/admin/panel"]

print("Verificación de robots.txt:")
print("-" * 40)
for ruta in rutas_a_verificar:
    permitido = esta_permitido(robots, ruta)
    estado = "✓ PERMITIDO" if permitido else "✗ BLOQUEADO"
    print(f"  {ruta:<25} {estado}")

print()
print("Recuerda:")
print("  - Siempre lee robots.txt antes de scrapear")
print("  - Usa la API oficial si está disponible")
print("  - No extraigas datos personales")
print("  - Añade delays entre solicitudes")`,
    keyPoints: [
      'Web scraping extrae datos de páginas web de forma automática con Python',
      'Siempre verifica robots.txt en https://sitio.com/robots.txt antes de scrapear',
      'Revisa los Términos de Uso del sitio: algunos prohíben explícitamente el scraping',
      'Prefiere usar la API oficial del sitio cuando exista; es más estable y legal',
      'No extraigas datos personales ni satures el servidor con demasiadas solicitudes',
      'La legalidad varía: datos públicos para investigación suelen ser aceptados; datos privados no',
    ],
    exercise: {
      description: 'Escribe un script que: 1) Defina una lista de 3 sitios web, 2) Para cada uno, intente leer su robots.txt usando urllib.request, 3) Muestre las primeras 5 líneas del robots.txt de cada sitio (o un mensaje si no se pudo acceder), 4) Incluye un comentario explicando por qué esto es importante antes de scrapear.',
      hint: 'Usa urllib.request.urlopen(f"https://{sitio}/robots.txt", timeout=5). Envuelve en try/except para manejar sitios que no respondan. Para las primeras 5 líneas: contenido.splitlines()[:5].',
    },
    quiz: [
      {
        question: '¿Qué es web scraping?',
        options: [
          'Diseñar páginas web con Python',
          'Extraer datos de páginas web de forma automatizada',
          'Crear APIs web con Flask',
          'Medir la velocidad de carga de sitios web',
        ],
        correctAnswer: 'Extraer datos de páginas web de forma automatizada',
        correctFeedback: '¡Correcto! Web scraping es usar código para visitar páginas web y extraer su contenido automáticamente, en lugar de copiarlo manualmente.',
        incorrectFeedback: 'Web scraping consiste en extraer datos de páginas web usando código. Un script visita la URL, descarga el HTML y extrae la información específica que necesitas.',
      },
      {
        question: '¿Qué es el archivo robots.txt y para qué sirve?',
        options: [
          'Un archivo con contraseñas para bots',
          'Un archivo que indica qué partes del sitio pueden visitar los bots automatizados',
          'El código fuente del robot de búsqueda de Google',
          'Un archivo de configuración para servidores web',
        ],
        correctAnswer: 'Un archivo que indica qué partes del sitio pueden visitar los bots automatizados',
        correctFeedback: '¡Exacto! robots.txt es una convención web donde el sitio indica a los bots qué pueden y no pueden visitar. Está en https://sitio.com/robots.txt.',
        incorrectFeedback: 'robots.txt es un archivo en la raíz del sitio que dice a los bots automatizados qué rutas pueden visitar (Allow) y cuáles no (Disallow).',
      },
      {
        question: '¿Cuál de estas acciones es una buena práctica de scraping ético?',
        options: [
          'Hacer miles de solicitudes por segundo para obtener datos más rápido',
          'Ignorar robots.txt si los datos son públicos',
          'Añadir delays entre solicitudes y respetar robots.txt',
          'Acceder con múltiples cuentas falsas para evitar bloqueos',
        ],
        correctAnswer: 'Añadir delays entre solicitudes y respetar robots.txt',
        correctFeedback: '¡Correcto! Los delays evitan saturar el servidor y los bloqueos. Respetar robots.txt es la norma básica de convivencia con los sitios web.',
        incorrectFeedback: 'El scraping ético incluye: respetar robots.txt, añadir delays, no saturar el servidor, no extraer datos privados y preferir APIs oficiales.',
      },
      {
        question: '¿En qué caso se recomienda NO usar scraping?',
        options: [
          'Cuando quieres monitorear precios de productos públicos',
          'Cuando el sitio tiene una API oficial disponible',
          'Cuando quieres agregar noticias públicas',
          'Cuando necesitas datos de investigación académica',
        ],
        correctAnswer: 'Cuando el sitio tiene una API oficial disponible',
        correctFeedback: '¡Correcto! Si el sitio ofrece una API, úsala. Las APIs son más estables (no cambian cuando rediseñan la web), más legales y generalmente no tienen restricciones de scraping.',
        incorrectFeedback: 'Cuando existe una API oficial, es siempre la opción preferida: es más estable, legal y eficiente que el scraping. El scraping es el último recurso.',
      },
      {
        question: '¿Dónde se encuentra el archivo robots.txt de un sitio web?',
        options: [
          'En el código HTML de la página principal',
          'En https://sitio.com/robots.txt',
          'En la carpeta "admin" del servidor',
          'Es un archivo oculto que no se puede ver directamente',
        ],
        correctAnswer: 'En https://sitio.com/robots.txt',
        correctFeedback: '¡Exacto! robots.txt siempre está en la raíz del dominio: https://sitio.com/robots.txt. Por ejemplo: https://python.org/robots.txt',
        incorrectFeedback: 'robots.txt siempre está en la raíz del dominio, en la ruta /robots.txt. Por ejemplo, para ver el de Wikipedia: https://es.wikipedia.org/robots.txt',
      },
      {
        question: '¿Por qué scraping de datos personales es problemático éticamente y legalmente?',
        options: [
          'Porque los datos personales pesan demasiado',
          'Porque viola la privacidad de personas y puede infringir leyes como GDPR',
          'Porque Python no puede manejar datos personales',
          'Solo es problemático si el sitio lo prohíbe explícitamente',
        ],
        correctAnswer: 'Porque viola la privacidad de personas y puede infringir leyes como GDPR',
        correctFeedback: '¡Correcto! Los datos personales están protegidos por leyes de privacidad (GDPR en Europa, LFPDPPP en México, etc.). Extraerlos sin consentimiento puede tener consecuencias legales graves.',
        incorrectFeedback: 'Extraer datos personales sin consentimiento viola leyes de privacidad internacionales (GDPR, CCPA, etc.) y los derechos de las personas. No importa si los datos son técnicamente públicos.',
      },
      {
        question: '¿Qué significa `Disallow: /privado/` en un robots.txt?',
        options: [
          'La carpeta /privado/ tiene acceso libre para bots',
          'Los bots no deben acceder a URLs que empiecen con /privado/',
          'Solo bots autorizados pueden ver /privado/',
          'La carpeta /privado/ no existe en el servidor',
        ],
        correctAnswer: 'Los bots no deben acceder a URLs que empiecen con /privado/',
        correctFeedback: '¡Correcto! `Disallow` es una restricción. Los bots respetuosos no visitan las URLs que coincidan con ese patrón. Aunque técnicamente accesibles, no está permitido.',
        incorrectFeedback: '`Disallow` significa que los bots no deben acceder a esa ruta. Es una instrucción de "no entres aquí". Respetar esto es parte del scraping ético.',
      },
      {
        question: '¿Cuál es el riesgo principal de hacer demasiadas solicitudes por segundo al scrapear?',
        options: [
          'Que Python tarde más en ejecutar el script',
          'Que el servidor del sitio se sature y te bloqueen la IP',
          'Que los datos extraídos sean incorrectos',
          'Que el script consuma más RAM',
        ],
        correctAnswer: 'Que el servidor del sitio se sature y te bloqueen la IP',
        correctFeedback: '¡Exacto! Los servidores detectan patrones de solicitudes masivas y bloquean la IP. Además, saturar un servidor sin permiso puede ser considerado un ataque DoS.',
        incorrectFeedback: 'Demasiadas solicitudes pueden saturar el servidor (causando problemas a otros usuarios) y resultar en el bloqueo de tu IP. Por eso se añaden delays con time.sleep().',
      },
    ],
  },
  {
    slug: 'requests-html',
    title: 'Obtener HTML con requests',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 109,
    description: 'Aprende a hacer solicitudes HTTP simples para obtener el contenido HTML de una página web.',
    explanation: `## Obtener HTML con requests

La biblioteca \`requests\` es la forma más popular en Python para hacer solicitudes HTTP. Con ella puedes descargar el HTML de cualquier página web pública.

### Instalación

\`\`\`bash
pip install requests
\`\`\`

### Hacer tu primera solicitud

\`\`\`python
import requests

respuesta = requests.get("https://books.toscrape.com")
print(respuesta.status_code)  # 200 = éxito
print(respuesta.text[:500])   # Primeros 500 caracteres del HTML
\`\`\`

### Códigos de estado HTTP

| Código | Significado |
|--------|-------------|
| 200 | OK - éxito |
| 404 | No encontrado |
| 403 | Prohibido (sin acceso) |
| 429 | Demasiadas solicitudes |
| 500 | Error del servidor |

### Headers: el User-Agent

Algunos sitios bloquean solicitudes sin User-Agent (identificador del cliente). Puedes añadirlo:

\`\`\`python
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
respuesta = requests.get(url, headers=headers)
\`\`\`

### Manejar errores comunes

\`\`\`python
import requests

try:
    respuesta = requests.get(url, timeout=10)
    respuesta.raise_for_status()  # Lanza excepción si código >= 400
    html = respuesta.text
except requests.exceptions.Timeout:
    print("El servidor tardó demasiado en responder")
except requests.exceptions.ConnectionError:
    print("No se pudo conectar al servidor")
except requests.exceptions.HTTPError as e:
    print(f"Error HTTP: {e}")
\`\`\`

### Guardar HTML a un archivo

\`\`\`python
with open("pagina.html", "w", encoding="utf-8") as f:
    f.write(respuesta.text)
print("HTML guardado.")
\`\`\``,
    codeExample: `import requests
import time
from pathlib import Path

# ============================================
# Función robusta para descargar HTML
# ============================================

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

def descargar_html(url, timeout=10, reintentos=3):
    """
    Descarga el HTML de una URL con manejo de errores y reintentos.

    Args:
        url: la URL a descargar
        timeout: segundos antes de abandona la solicitud
        reintentos: número de intentos ante fallos temporales

    Returns:
        El HTML como string, o None si falló.
    """
    for intento in range(1, reintentos + 1):
        try:
            print(f"Descargando: {url} (intento {intento}/{reintentos})")
            respuesta = requests.get(url, headers=HEADERS, timeout=timeout)
            respuesta.raise_for_status()

            print(f"  Status: {respuesta.status_code}")
            print(f"  Content-Type: {respuesta.headers.get('Content-Type', 'desconocido')}")
            print(f"  Tamaño: {len(respuesta.text)} caracteres")

            return respuesta.text

        except requests.exceptions.Timeout:
            print(f"  Timeout en intento {intento}")
            if intento < reintentos:
                time.sleep(2)

        except requests.exceptions.ConnectionError:
            print(f"  Error de conexión")
            return None

        except requests.exceptions.HTTPError as e:
            codigo = e.response.status_code
            print(f"  Error HTTP {codigo}")
            if codigo == 404:
                print("  La página no existe")
                return None
            elif codigo == 403:
                print("  Acceso prohibido")
                return None
            elif codigo == 429:
                print("  Demasiadas solicitudes — esperando...")
                time.sleep(30)
            else:
                return None

    return None


def guardar_html(html, nombre_archivo):
    """Guarda HTML a un archivo."""
    ruta = Path(nombre_archivo)
    ruta.write_text(html, encoding="utf-8")
    print(f"HTML guardado en: {nombre_archivo}")


def inspeccionar_respuesta(url):
    """Muestra información detallada de la respuesta HTTP."""
    try:
        respuesta = requests.get(url, headers=HEADERS, timeout=10)
        print(f"URL: {url}")
        print(f"Status code: {respuesta.status_code}")
        print(f"Headers relevantes:")
        for clave in ["Content-Type", "Server", "X-Frame-Options"]:
            valor = respuesta.headers.get(clave, "N/A")
            print(f"  {clave}: {valor}")
        print(f"Tamaño del HTML: {len(respuesta.text):,} caracteres")
        print(f"Primeros 200 caracteres:")
        print(respuesta.text[:200])
    except Exception as e:
        print(f"Error: {e}")


# Ejemplo de uso con un sitio diseñado para practicar scraping:
url_prueba = "https://books.toscrape.com"
html = descargar_html(url_prueba)

if html:
    guardar_html(html, "books_toscrape.html")
    print("\\n¡Descarga exitosa!")
else:
    print("\\nNo se pudo descargar la página.")`,
    keyPoints: [
      'requests.get(url) descarga el HTML de una página web',
      'response.status_code indica si la solicitud fue exitosa (200 = OK, 404 = no encontrado)',
      'response.raise_for_status() lanza una excepción automáticamente si el código es >= 400',
      'Añadir un User-Agent en los headers evita bloqueos básicos por parte del sitio',
      'Siempre especifica timeout para no quedarte esperando indefinidamente',
      'Usa try/except para manejar Timeout, ConnectionError y HTTPError por separado',
    ],
    exercise: {
      description: 'Escribe una función `verificar_sitios(lista_urls)` que reciba una lista de URLs, haga una solicitud GET a cada una con timeout=5, y devuelva un reporte con: URL, código de estado, si fue exitosa (200) o no, y el tamaño del HTML. Pruébala con al menos 3 URLs reales. Usa try/except para manejar errores.',
      hint: 'Itera sobre la lista de URLs y para cada una usa requests.get(url, timeout=5). Guarda el resultado en una lista de dicts: {"url": url, "status": resp.status_code, "ok": resp.ok, "tamanio": len(resp.text)}. Si hay excepción, registra el error.',
    },
    quiz: [
      {
        question: '¿Cómo se hace una solicitud GET básica con requests?',
        options: [
          'requests.fetch(url)',
          'requests.get(url)',
          'requests.download(url)',
          'requests.html(url)',
        ],
        correctAnswer: 'requests.get(url)',
        correctFeedback: '¡Correcto! `requests.get(url)` es la función principal para obtener el contenido de una URL. Devuelve un objeto Response con status_code, text, headers y más.',
        incorrectFeedback: 'La función correcta es `requests.get(url)`. También existen `requests.post()`, `requests.put()`, etc. para otros métodos HTTP.',
      },
      {
        question: '¿Qué significa el status code 403?',
        options: [
          'La página no fue encontrada',
          'El acceso está prohibido',
          'El servidor tuvo un error interno',
          'La solicitud fue exitosa',
        ],
        correctAnswer: 'El acceso está prohibido',
        correctFeedback: '¡Correcto! 403 Forbidden significa que el servidor entendió la solicitud pero se niega a autorizarla. Común cuando un sitio bloquea bots o requiere autenticación.',
        incorrectFeedback: '403 = Forbidden (Prohibido). 404 = Not Found (no encontrado). 200 = OK. 500 = Error del servidor. Memorizar estos códigos básicos es muy útil en scraping.',
      },
      {
        question: '¿Para qué sirve `response.raise_for_status()`?',
        options: [
          'Para mostrar el status code en pantalla',
          'Para lanzar automáticamente una excepción si el status code indica error (>= 400)',
          'Para reintentar la solicitud si falla',
          'Para convertir la respuesta a JSON',
        ],
        correctAnswer: 'Para lanzar automáticamente una excepción si el status code indica error (>= 400)',
        correctFeedback: '¡Exacto! `raise_for_status()` lanza una `HTTPError` si el código es 4xx o 5xx. Esto simplifica el manejo de errores: no tienes que verificar manualmente el código.',
        incorrectFeedback: '`raise_for_status()` es un atajo: si el código de respuesta indica error (4xx, 5xx), lanza automáticamente una excepción. Sin esto, requests no falla aunque reciba un 404.',
      },
      {
        question: '¿Por qué es importante el parámetro `timeout` en requests.get()?',
        options: [
          'Para limitar cuánto HTML descarga',
          'Para que el script no se quede esperando indefinidamente si el servidor no responde',
          'Para mejorar la velocidad de descarga',
          'Para establecer la caducidad del HTML descargado',
        ],
        correctAnswer: 'Para que el script no se quede esperando indefinidamente si el servidor no responde',
        correctFeedback: '¡Correcto! Sin timeout, si el servidor no responde, tu script puede quedarse colgado para siempre. Con `timeout=10`, si en 10 segundos no responde, lanza un Timeout.',
        incorrectFeedback: 'Sin timeout, un servidor lento o caído puede bloquear tu script indefinidamente. `timeout=10` indica que si no hay respuesta en 10 segundos, lanza una excepción Timeout.',
      },
      {
        question: '¿Para qué se usa el header User-Agent en scraping?',
        options: [
          'Para identificar el tipo de datos que esperas recibir',
          'Para que el servidor piense que la solicitud viene de un navegador, no de un bot',
          'Para cifrar la comunicación con el servidor',
          'Para indicar el idioma preferido del contenido',
        ],
        correctAnswer: 'Para que el servidor piense que la solicitud viene de un navegador, no de un bot',
        correctFeedback: '¡Exacto! El User-Agent identifica al cliente. Muchos sitios bloquean solicitudes con el User-Agent por defecto de requests. Usar uno de navegador evita bloqueos básicos.',
        incorrectFeedback: 'User-Agent es la "firma" del cliente HTTP. Sin él, requests envía "python-requests/2.x" que muchos servidores bloquean. Un User-Agent de navegador pasa más desapercibido.',
      },
      {
        question: 'Si `requests.get()` lanza `requests.exceptions.ConnectionError`, ¿qué significa?',
        options: [
          'El servidor respondió con error 500',
          'No se pudo establecer conexión con el servidor (red caída, DNS incorrecto, etc.)',
          'La respuesta tardó demasiado',
          'El HTML de la respuesta está vacío',
        ],
        correctAnswer: 'No se pudo establecer conexión con el servidor (red caída, DNS incorrecto, etc.)',
        correctFeedback: '¡Correcto! ConnectionError ocurre antes de recibir respuesta: sin internet, URL con typo, dominio inexistente, etc. Es diferente a Timeout (conectó pero tardó) o HTTPError (respuesta con error).',
        incorrectFeedback: 'ConnectionError = no se pudo conectar (URL incorrecta, sin internet, servidor inaccesible). Timeout = conectó pero tardó demasiado. HTTPError = conectó y respondió con error (4xx/5xx).',
      },
    ],
  },
  {
    slug: 'beautifulsoup',
    title: 'Leer HTML con BeautifulSoup',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 110,
    description: 'Aprende a extraer información de páginas web usando BeautifulSoup.',
    explanation: `## BeautifulSoup: navegar el HTML como si fuera un árbol

Después de descargar el HTML con \`requests\`, necesitas extraer la información específica. BeautifulSoup convierte el HTML en un árbol de objetos que puedes navegar fácilmente.

### Instalación

\`\`\`bash
pip install beautifulsoup4 lxml
\`\`\`

### Crear un objeto BeautifulSoup

\`\`\`python
from bs4 import BeautifulSoup

html = "<h1>Hola</h1><p>Bienvenido al curso</p>"
soup = BeautifulSoup(html, "html.parser")

# Con lxml (más rápido):
soup = BeautifulSoup(html, "lxml")
\`\`\`

### Los métodos principales

#### find() — Encuentra el PRIMER elemento

\`\`\`python
titulo = soup.find("h1")
print(titulo.text)  # "Hola"

# Con atributos:
div = soup.find("div", class_="producto")
enlace = soup.find("a", href=True)
\`\`\`

#### find_all() — Encuentra TODOS los elementos

\`\`\`python
parrafos = soup.find_all("p")
for p in parrafos:
    print(p.text)

# Con límite:
primeros_tres = soup.find_all("li", limit=3)
\`\`\`

#### select() — Selectores CSS

\`\`\`python
# Por clase
items = soup.select(".producto")

# Por id
cabecera = soup.select("#header")

# Anidado: div dentro de section
precios = soup.select("section div.precio")

# Primer elemento con CSS:
primero = soup.select_one("h1")
\`\`\`

### Extraer texto y atributos

\`\`\`python
elemento = soup.find("a")

# Texto
texto = elemento.text          # Texto con espacios extra
texto = elemento.get_text()    # Igual pero acepta separador
texto = elemento.get_text(strip=True)  # Sin espacios extra

# Atributos
href = elemento["href"]        # Lanza KeyError si no existe
href = elemento.get("href")    # Devuelve None si no existe
\`\`\``,
    codeExample: `from bs4 import BeautifulSoup

# HTML de ejemplo para practicar
html_ejemplo = """
<html>
<head><title>Tienda de libros</title></head>
<body>
  <h1>Catálogo de libros</h1>
  <div class="catalogo">
    <article class="libro" data-isbn="978-001">
      <h2 class="titulo">Python para todos</h2>
      <p class="autor">Ana García</p>
      <span class="precio">29.99</span>
      <a href="/libros/python-para-todos" class="detalle">Ver más</a>
      <span class="stock disponible">En stock</span>
    </article>
    <article class="libro" data-isbn="978-002">
      <h2 class="titulo">Automatización con Python</h2>
      <p class="autor">Luis Pérez</p>
      <span class="precio">34.50</span>
      <a href="/libros/automatizacion" class="detalle">Ver más</a>
      <span class="stock agotado">Agotado</span>
    </article>
    <article class="libro" data-isbn="978-003">
      <h2 class="titulo">Data Science con Python</h2>
      <p class="autor">María López</p>
      <span class="precio">42.00</span>
      <a href="/libros/data-science" class="detalle">Ver más</a>
      <span class="stock disponible">En stock</span>
    </article>
  </div>
  <footer>
    <a href="/contacto">Contacto</a>
    <a href="/acerca">Acerca de</a>
  </footer>
</body>
</html>
"""

# Crear el objeto BeautifulSoup
soup = BeautifulSoup(html_ejemplo, "html.parser")


# ============================================
# 1. Métodos básicos de búsqueda
# ============================================

# find() - primer elemento
print("=== find() ===")
titulo_pagina = soup.find("title")
print(f"Título: {titulo_pagina.text}")

primer_libro = soup.find("article", class_="libro")
print(f"Primer libro: {primer_libro.find('h2').text}")


# find_all() - todos los elementos
print("\\n=== find_all() ===")
todos_los_libros = soup.find_all("article", class_="libro")
print(f"Total de libros: {len(todos_los_libros)}")

for libro in todos_los_libros:
    titulo = libro.find("h2", class_="titulo").get_text(strip=True)
    autor = libro.find("p", class_="autor").get_text(strip=True)
    precio = libro.find("span", class_="precio").get_text(strip=True)
    enlace = libro.find("a").get("href")
    print(f"  '{titulo}' por {autor} — \${precio} — {enlace}")


# select() - selectores CSS
print("\\n=== select() CSS ===")

# Todos los títulos de libros
titulos = soup.select("article.libro h2.titulo")
print("Títulos:", [t.get_text(strip=True) for t in titulos])

# Solo los libros disponibles
disponibles = soup.select("span.stock.disponible")
print(f"Disponibles: {len(disponibles)}")

# Todos los enlaces del footer
footer_links = soup.select("footer a")
print("Links del footer:", [a.get("href") for a in footer_links])


# ============================================
# 2. Acceso a atributos
# ============================================
print("\\n=== Atributos ===")

libros = soup.find_all("article", class_="libro")
for libro in libros:
    isbn = libro.get("data-isbn")  # Atributo personalizado
    titulo = libro.find("h2").text.strip()
    print(f"  ISBN {isbn}: {titulo}")`,
    keyPoints: [
      'BeautifulSoup convierte HTML en un árbol navegable de objetos Python',
      'find() devuelve el primer elemento que coincide; find_all() devuelve una lista de todos',
      'select() usa sintaxis CSS: .clase, #id, elemento .clase son selectores válidos',
      '.text o .get_text(strip=True) extrae el contenido de texto del elemento',
      '.get("href") es más seguro que ["href"] porque devuelve None en vez de KeyError',
      'lxml es el parser más rápido; html.parser es más portable (viene con Python)',
    ],
    exercise: {
      description: 'Dado el HTML de ejemplo del código, escribe una función `extraer_catalogo(html)` que devuelva una lista de diccionarios, uno por libro, con las claves: "titulo", "autor", "precio" (como float), "enlace" y "disponible" (True o False según la clase "disponible" o "agotado"). Prueba la función e imprime los resultados.',
      hint: 'Usa soup.find_all("article", class_="libro") para obtener todos los libros. Para cada uno, usa find() con los selectores de clase. Para el precio usa float(libro.find("span", class_="precio").text). Para disponible verifica si "disponible" está en el atributo class del span.stock.',
    },
    quiz: [
      {
        question: '¿Qué hace `soup.find("h1")`?',
        options: [
          'Devuelve todos los elementos h1 del HTML',
          'Devuelve el primer elemento h1 encontrado en el HTML',
          'Cuenta cuántos h1 hay en el HTML',
          'Elimina todos los h1 del HTML',
        ],
        correctAnswer: 'Devuelve el primer elemento h1 encontrado en el HTML',
        correctFeedback: '¡Correcto! `find()` devuelve el PRIMER elemento que coincide, o None si no hay ninguno. Para obtener todos, usa `find_all()` que devuelve una lista.',
        incorrectFeedback: '`find()` devuelve solo el PRIMER elemento que coincide. Para todos los elementos usa `find_all()`, que devuelve una lista (puede estar vacía si no hay coincidencias).',
      },
      {
        question: '¿Cuál es la diferencia entre `.text` y `.get_text(strip=True)`?',
        options: [
          'No hay diferencia, son exactamente iguales',
          'get_text(strip=True) elimina espacios y saltos de línea extra del texto',
          '.text es más rápido que get_text()',
          'get_text() convierte el texto a mayúsculas',
        ],
        correctAnswer: 'get_text(strip=True) elimina espacios y saltos de línea extra del texto',
        correctFeedback: '¡Correcto! `.text` puede incluir espacios y saltos de línea del HTML. `.get_text(strip=True)` limpia esos espacios extra. En scraping, casi siempre querrás usar strip=True.',
        incorrectFeedback: '`.text` puede incluir espacios y \\n del HTML. `.get_text(strip=True)` elimina esos espacios extras. Para datos limpios, siempre usa strip=True.',
      },
      {
        question: '¿Qué selector CSS usarías para encontrar todos los elementos `<a>` dentro de un `<div class="menu">`?',
        options: [
          'soup.find_all("a.menu")',
          'soup.select("div.menu a")',
          'soup.find("div", "a")',
          'soup.select(".a > div.menu")',
        ],
        correctAnswer: 'soup.select("div.menu a")',
        correctFeedback: '¡Correcto! `soup.select("div.menu a")` usa la sintaxis CSS: todos los `<a>` que sean descendientes de un elemento `<div>` con clase "menu".',
        incorrectFeedback: '`soup.select("div.menu a")` es el selector CSS correcto: elemento padre con clase, espacio, elemento hijo. Es equivalente a "todos los <a> dentro de div.menu".',
      },
      {
        question: '¿Por qué es mejor usar `.get("href")` en lugar de `["href"]` para obtener un atributo?',
        options: [
          'get() es más rápido que la notación de corchetes',
          'get() devuelve None si el atributo no existe, mientras que [] lanza KeyError',
          'La notación [] no funciona en BeautifulSoup',
          'get() convierte automáticamente la URL a absoluta',
        ],
        correctAnswer: 'get() devuelve None si el atributo no existe, mientras que [] lanza KeyError',
        correctFeedback: '¡Exacto! En scraping, no todos los elementos tienen todos los atributos. `.get("href")` es defensivo: devuelve None si no hay href. `["href"]` lanzaría un KeyError.',
        incorrectFeedback: '`.get("href")` es más seguro en scraping porque algunos elementos pueden no tener el atributo esperado. `["href"]` lanzaría KeyError y detendría el script.',
      },
      {
        question: '¿Para qué sirve el parámetro `class_` (con guión bajo) en `soup.find("div", class_="precio")`?',
        options: [
          'Es un error de sintaxis; debería ser class sin guión bajo',
          'El guión bajo evita conflicto con la palabra reservada class de Python',
          'class_ busca en el atributo id, no en class',
          'Es solo una convención de estilo, funciona igual que class',
        ],
        correctAnswer: 'El guión bajo evita conflicto con la palabra reservada class de Python',
        correctFeedback: '¡Correcto! `class` es una palabra reservada en Python (para definir clases). BeautifulSoup usa `class_` (con guión bajo) como parámetro para evitar ese conflicto.',
        incorrectFeedback: '`class` es palabra reservada en Python. BeautifulSoup usa `class_` (con guión bajo al final) para el atributo HTML class. Sin el guión bajo, Python lanzaría un SyntaxError.',
      },
      {
        question: '¿Cuál es la ventaja de usar `lxml` como parser en vez de `html.parser`?',
        options: [
          'lxml viene incluido con Python sin instalar nada extra',
          'lxml es más rápido y más tolerante a HTML mal formado',
          'lxml puede parsear JSON además de HTML',
          'lxml es el único parser que soporta selectores CSS',
        ],
        correctAnswer: 'lxml es más rápido y más tolerante a HTML mal formado',
        correctFeedback: '¡Correcto! lxml usa una librería C por debajo, siendo considerablemente más rápido. También maneja mejor el HTML "roto" o mal formado, común en sitios reales.',
        incorrectFeedback: 'lxml es más rápido (escrito en C) y más robusto con HTML mal formado. La contra: requiere instalación por separado. html.parser viene con Python pero es más lento.',
      },
    ],
  },
  {
    slug: 'extraer-titulos-enlaces-textos',
    title: 'Extraer títulos, enlaces y textos',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 111,
    description: 'Aprende a obtener datos específicos como títulos, enlaces, párrafos y textos desde una página web.',
    explanation: `## Extraer datos específicos de una página

Ahora que sabes usar BeautifulSoup, vamos a practicar extrayendo los tipos de datos más comunes: títulos, enlaces y textos.

### Extraer todos los títulos (h1, h2, h3...)

\`\`\`python
from bs4 import BeautifulSoup

# Todos los h1 y h2:
for nivel in ["h1", "h2", "h3"]:
    titulos = soup.find_all(nivel)
    for t in titulos:
        print(f"{nivel.upper()}: {t.get_text(strip=True)}")
\`\`\`

### Extraer todos los enlaces

\`\`\`python
enlaces = soup.find_all("a", href=True)  # Solo los que tienen href

for enlace in enlaces:
    url = enlace.get("href")
    texto = enlace.get_text(strip=True)
    print(f"{texto} -> {url}")
\`\`\`

### Filtrar y limpiar con list comprehensions

\`\`\`python
# Solo enlaces externos (empiezan con http)
externos = [
    a.get("href")
    for a in soup.find_all("a", href=True)
    if a.get("href", "").startswith("http")
]

# Solo títulos no vacíos
titulos = [
    h.get_text(strip=True)
    for h in soup.find_all(["h1", "h2", "h3"])
    if h.get_text(strip=True)
]
\`\`\`

### Extraer datos de divs por clase

\`\`\`python
# Extraer tarjetas de producto
productos = soup.find_all("div", class_="producto")

datos = []
for prod in productos:
    nombre = prod.find("h3").get_text(strip=True)
    precio_tag = prod.find("span", class_="precio")
    precio = float(precio_tag.text.replace(",", ".")) if precio_tag else None
    datos.append({"nombre": nombre, "precio": precio})
\`\`\`

### Hacer URLs absolutas

Los links relativos como \`/pagina\` no son URLs completas. Completa con la base:

\`\`\`python
from urllib.parse import urljoin

base = "https://ejemplo.com"
href = "/libros/python"
url_completa = urljoin(base, href)
# Resultado: "https://ejemplo.com/libros/python"
\`\`\``,
    codeExample: `from bs4 import BeautifulSoup
from urllib.parse import urljoin

# HTML de ejemplo
html = """
<html>
<body>
  <h1>Blog de Python</h1>
  <nav>
    <a href="/">Inicio</a>
    <a href="/articulos">Artículos</a>
    <a href="https://python.org">Python oficial</a>
  </nav>

  <section id="articulos">
    <article class="post">
      <h2><a href="/articulos/listas-python">Listas en Python</a></h2>
      <p class="resumen">Las listas son la estructura de datos más usada en Python. Aprende a crearlas y manipularlas.</p>
      <span class="fecha">2025-01-10</span>
      <span class="categoria">Básico</span>
    </article>

    <article class="post">
      <h2><a href="/articulos/diccionarios">Diccionarios en Python</a></h2>
      <p class="resumen">Los diccionarios almacenan pares clave-valor. Son ideales para datos estructurados.</p>
      <span class="fecha">2025-01-17</span>
      <span class="categoria">Básico</span>
    </article>

    <article class="post">
      <h2><a href="/articulos/web-scraping">Web scraping con Python</a></h2>
      <p class="resumen">Aprende a extraer datos de páginas web usando requests y BeautifulSoup.</p>
      <span class="fecha">2025-01-24</span>
      <span class="categoria">Avanzado</span>
    </article>
  </section>

  <aside>
    <h3>Artículos relacionados</h3>
    <ul>
      <li><a href="/articulos/funciones">Funciones en Python</a></li>
      <li><a href="/articulos/clases">Clases y objetos</a></li>
    </ul>
  </aside>
</body>
</html>
"""

BASE_URL = "https://blog-python-ejemplo.com"
soup = BeautifulSoup(html, "html.parser")


# ============================================
# 1. Extraer todos los títulos
# ============================================
print("=== TÍTULOS ===")
titulos = soup.find_all(["h1", "h2", "h3"])
for t in titulos:
    nivel = t.name.upper()
    texto = t.get_text(strip=True)
    print(f"  [{nivel}] {texto}")


# ============================================
# 2. Extraer todos los enlaces con URL absoluta
# ============================================
print("\\n=== ENLACES ===")
todos_los_enlaces = soup.find_all("a", href=True)

for a in todos_los_enlaces:
    texto = a.get_text(strip=True)
    href = a.get("href")
    url_completa = urljoin(BASE_URL, href)
    tipo = "externo" if href.startswith("http") else "interno"
    print(f"  [{tipo}] {texto} -> {url_completa}")


# ============================================
# 3. Extraer artículos con sus datos
# ============================================
print("\\n=== ARTÍCULOS ===")
articulos = soup.find_all("article", class_="post")

datos_articulos = []
for art in articulos:
    titulo_tag = art.find("h2")
    enlace_tag = titulo_tag.find("a") if titulo_tag else None

    datos = {
        "titulo": titulo_tag.get_text(strip=True) if titulo_tag else None,
        "url": urljoin(BASE_URL, enlace_tag.get("href")) if enlace_tag else None,
        "resumen": art.find("p", class_="resumen").get_text(strip=True),
        "fecha": art.find("span", class_="fecha").get_text(strip=True),
        "categoria": art.find("span", class_="categoria").get_text(strip=True),
    }
    datos_articulos.append(datos)
    print(f"  Título: {datos['titulo']}")
    print(f"  URL: {datos['url']}")
    print(f"  Resumen: {datos['resumen'][:60]}...")
    print(f"  Fecha: {datos['fecha']} | Categoría: {datos['categoria']}")
    print()


# ============================================
# 4. Filtrar con list comprehensions
# ============================================
print("=== FILTROS CON LIST COMPREHENSIONS ===")

# Solo títulos h2 (artículos)
titulos_articulos = [
    h2.get_text(strip=True)
    for h2 in soup.find_all("h2")
]
print(f"Títulos de artículos: {titulos_articulos}")

# Solo artículos de categoría Básico
basicos = [
    a["titulo"]
    for a in datos_articulos
    if a["categoria"] == "Básico"
]
print(f"Artículos básicos: {basicos}")`,
    keyPoints: [
      'find_all(["h1", "h2", "h3"]) acepta una lista de etiquetas para buscar varios tipos a la vez',
      'find_all("a", href=True) filtra solo los enlaces que tienen el atributo href',
      'urljoin(base, href) convierte URLs relativas en absolutas de forma segura',
      'Los list comprehensions son la forma más Pythónica de extraer y filtrar datos de scraping',
      'Siempre verifica que el elemento existe antes de acceder a sus propiedades para evitar errores',
    ],
    exercise: {
      description: 'Usando el HTML del código de ejemplo, escribe funciones que extraigan: 1) todos los enlaces internos (que empiecen con "/"), 2) todos los artículos de la categoría "Avanzado", 3) un diccionario con la fecha como clave y el título como valor para cada artículo. Usa list comprehensions donde sea posible.',
      hint: 'Para enlaces internos filtra con `if href.startswith("/")` en el list comprehension. Para artículos avanzados, primero extrae todos con find_all("article") y luego filtra por el texto de span.categoria. Para el diccionario usa {art["fecha"]: art["titulo"] for art in datos}.',
    },
    quiz: [
      {
        question: '¿Cómo extraes solo los enlaces que tienen el atributo `href` usando find_all?',
        options: [
          'soup.find_all("a")',
          'soup.find_all("a", href=True)',
          'soup.find_all("a", has_href=True)',
          'soup.find_all("a").filter(href)',
        ],
        correctAnswer: 'soup.find_all("a", href=True)',
        correctFeedback: '¡Correcto! Pasar `href=True` a find_all filtra solo los elementos `<a>` que tienen el atributo href. Evita procesar anclas vacías como `<a name="seccion">`.',
        incorrectFeedback: '`soup.find_all("a", href=True)` filtra elementos que tienen el atributo href presente. Sin este filtro, obtendrías también anclas sin href que pueden causar errores.',
      },
      {
        question: '¿Qué hace `urljoin("https://ejemplo.com", "/pagina/articulo")`?',
        options: [
          'Abre el enlace en el navegador',
          'Devuelve "https://ejemplo.com/pagina/articulo"',
          'Verifica si la URL existe',
          'Devuelve solo "/pagina/articulo" sin cambios',
        ],
        correctAnswer: 'Devuelve "https://ejemplo.com/pagina/articulo"',
        correctFeedback: '¡Exacto! `urljoin` combina una URL base con una URL relativa para crear la URL absoluta completa. Muy útil en scraping donde los enlaces son relativos.',
        incorrectFeedback: '`urljoin(base, relativa)` construye la URL absoluta: `urljoin("https://ejemplo.com", "/pagina")` → `"https://ejemplo.com/pagina"`. Maneja correctamente distintos casos de URLs relativas.',
      },
      {
        question: '¿Cómo buscarías todos los elementos h1, h2 y h3 con una sola llamada a find_all?',
        options: [
          'soup.find_all("h1,h2,h3")',
          'soup.find_all(["h1", "h2", "h3"])',
          'soup.find_all("h1") + soup.find_all("h2") + soup.find_all("h3")',
          'soup.select_all("h1 h2 h3")',
        ],
        correctAnswer: 'soup.find_all(["h1", "h2", "h3"])',
        correctFeedback: '¡Correcto! find_all acepta una lista de etiquetas y devuelve todos los elementos que coincidan con cualquiera de ellas. Es la forma más limpia de buscar múltiples tipos.',
        incorrectFeedback: '`soup.find_all(["h1", "h2", "h3"])` acepta una lista de etiquetas. También puedes usar CSS: `soup.select("h1, h2, h3")`. Evita sumar tres find_all separados.',
      },
      {
        question: 'En el list comprehension `[a.get("href") for a in soup.find_all("a") if a.get("href", "").startswith("/")]`, ¿qué hace la condición?',
        options: [
          'Filtra enlaces que empiecen con "/" (enlaces internos relativos)',
          'Filtra enlaces que sean externos (que empiecen con http)',
          'Filtra solo el primer enlace de la página',
          'Elimina los enlaces duplicados',
        ],
        correctAnswer: 'Filtra enlaces que empiecen con "/" (enlaces internos relativos)',
        correctFeedback: '¡Correcto! Las rutas que empiezan con "/" son relativas al dominio del sitio, o sea, enlaces internos. El `a.get("href", "")` evita errores si href es None.',
        incorrectFeedback: 'La condición `startswith("/")` filtra URLs que empiezan con barra diagonal, que son rutas relativas al dominio (enlaces internos). Los externos empezarían con "http".',
      },
      {
        question: '¿Qué devuelve `soup.find("div", class_="precio")` si no hay ningún div con esa clase?',
        options: [
          'Una lista vacía []',
          'None',
          'Una excepción KeyError',
          'Una cadena vacía ""',
        ],
        correctAnswer: 'None',
        correctFeedback: '¡Correcto! `find()` devuelve None si no encuentra el elemento. Por eso siempre debes verificar antes de acceder: `if precio_tag: precio = precio_tag.text`.',
        incorrectFeedback: '`find()` devuelve None cuando no hay coincidencias. Por eso en scraping siempre verifica: `tag = soup.find(...)` y luego `if tag: valor = tag.text`. Evita AttributeError.',
      },
      {
        question: '¿Cuál es la forma más Pythónica de extraer los textos de todos los párrafos de una página?',
        options: [
          'for p in soup.find_all("p"): lista.append(p.text)',
          '[p.get_text(strip=True) for p in soup.find_all("p")]',
          'soup.select("p").text',
          'soup.find_all("p").get_text()',
        ],
        correctAnswer: '[p.get_text(strip=True) for p in soup.find_all("p")]',
        correctFeedback: '¡Exacto! Un list comprehension con get_text(strip=True) es la forma más concisa y Pythónica. El strip=True limpia espacios extra del HTML.',
        incorrectFeedback: 'El list comprehension `[p.get_text(strip=True) for p in soup.find_all("p")]` es la forma Pythónica: una línea, clara e idiomática. El bucle for también funciona pero es más verboso.',
      },
    ],
  },
  {
    slug: 'guardar-scraping-csv-json',
    title: 'Guardar resultados en CSV o JSON',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 112,
    description: 'Aprende a guardar los datos extraídos mediante web scraping en archivos CSV o JSON.',
    explanation: `## Guardar los datos scrapeados

Extraer datos es solo la mitad del trabajo. Necesitas guardarlos en un formato útil: CSV para abrir en Excel, JSON para usar con otras APIs o programas.

### Construir la lista de datos

Primero organiza los datos como una lista de diccionarios:

\`\`\`python
productos = []

for card in soup.find_all("article", class_="producto"):
    productos.append({
        "nombre": card.find("h2").get_text(strip=True),
        "precio": card.find("span", class_="precio").get_text(strip=True),
        "url": card.find("a").get("href"),
    })
\`\`\`

### Guardar en CSV con csv.DictWriter

\`\`\`python
import csv

with open("productos.csv", "w", newline="", encoding="utf-8") as f:
    campos = ["nombre", "precio", "url"]
    writer = csv.DictWriter(f, fieldnames=campos)
    writer.writeheader()
    writer.writerows(productos)

print(f"Guardados {len(productos)} productos en productos.csv")
\`\`\`

**Nota:** El parámetro \`newline=""\` es importante en Windows para evitar líneas vacías entre filas.

### Guardar en JSON con json.dump

\`\`\`python
import json

with open("productos.json", "w", encoding="utf-8") as f:
    json.dump(productos, f, ensure_ascii=False, indent=2)

print("Datos guardados en productos.json")
\`\`\`

**Parámetros importantes:**
- \`ensure_ascii=False\`: guarda tildes y ñ directamente (no como \\\\u00f1)
- \`indent=2\`: formatea el JSON con sangría para que sea legible

### ¿CSV o JSON?

| Criterio | CSV | JSON |
|---------|-----|------|
| Abrir en Excel | ✓ | ✗ |
| Datos anidados | ✗ | ✓ |
| Consumir desde API | ✗ | ✓ |
| Fácil de leer | ✓ | ✓ |
| Compatibilidad | Muy alta | Alta |

### Añadir timestamp al nombre del archivo

\`\`\`python
from datetime import datetime

timestamp = datetime.now().strftime("%Y%m%d_%H%M")
nombre_csv = f"productos_{timestamp}.csv"  # productos_20250115_0830.csv
\`\`\``,
    codeExample: `import csv
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from pathlib import Path

# ============================================
# Pipeline completo: scraping → guardado
# ============================================

# Para este ejemplo usamos HTML local para no depender de internet
html_ejemplo = """
<html><body>
  <div class="catalogo">
    <article class="libro">
      <h2 class="titulo">Python Crash Course</h2>
      <p class="autor">Eric Matthes</p>
      <span class="precio">35.99</span>
      <span class="rating" data-stars="5">★★★★★</span>
      <a href="/libros/python-crash-course">Ver detalles</a>
    </article>
    <article class="libro">
      <h2 class="titulo">Automate the Boring Stuff</h2>
      <p class="autor">Al Sweigart</p>
      <span class="precio">29.50</span>
      <span class="rating" data-stars="5">★★★★★</span>
      <a href="/libros/automate">Ver detalles</a>
    </article>
    <article class="libro">
      <h2 class="titulo">Fluent Python</h2>
      <p class="autor">Luciano Ramalho</p>
      <span class="precio">55.00</span>
      <span class="rating" data-stars="4">★★★★☆</span>
      <a href="/libros/fluent-python">Ver detalles</a>
    </article>
    <article class="libro">
      <h2 class="titulo">Learning Python</h2>
      <p class="autor">Mark Lutz</p>
      <span class="precio">48.75</span>
      <span class="rating" data-stars="3">★★★☆☆</span>
      <a href="/libros/learning-python">Ver detalles</a>
    </article>
  </div>
</body></html>
"""

BASE_URL = "https://libreria-python.com"


def extraer_libros(html, base_url):
    """Extrae todos los libros del HTML como lista de dicts."""
    from urllib.parse import urljoin
    soup = BeautifulSoup(html, "html.parser")
    libros = []

    for art in soup.find_all("article", class_="libro"):
        titulo_tag = art.find("h2", class_="titulo")
        precio_tag = art.find("span", class_="precio")
        rating_tag = art.find("span", class_="rating")
        enlace_tag = art.find("a")

        libro = {
            "titulo": titulo_tag.get_text(strip=True) if titulo_tag else None,
            "autor": art.find("p", class_="autor").get_text(strip=True),
            "precio": float(precio_tag.text.strip()) if precio_tag else None,
            "estrellas": int(rating_tag.get("data-stars", 0)) if rating_tag else None,
            "url": urljoin(base_url, enlace_tag.get("href")) if enlace_tag else None,
            "scrapeado_en": datetime.now().strftime("%Y-%m-%d %H:%M"),
        }
        libros.append(libro)

    return libros


def guardar_csv(datos, nombre_base="libros"):
    """Guarda una lista de diccionarios en CSV."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M")
    nombre = f"{nombre_base}_{timestamp}.csv"
    Path("resultados").mkdir(exist_ok=True)
    ruta = Path("resultados") / nombre

    if not datos:
        print("No hay datos para guardar.")
        return

    with open(ruta, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=datos[0].keys())
        writer.writeheader()
        writer.writerows(datos)

    print(f"CSV guardado: {ruta} ({len(datos)} registros)")
    return ruta


def guardar_json(datos, nombre_base="libros"):
    """Guarda una lista de diccionarios en JSON."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M")
    nombre = f"{nombre_base}_{timestamp}.json"
    Path("resultados").mkdir(exist_ok=True)
    ruta = Path("resultados") / nombre

    with open(ruta, "w", encoding="utf-8") as f:
        json.dump(datos, f, ensure_ascii=False, indent=2)

    print(f"JSON guardado: {ruta} ({len(datos)} registros)")
    return ruta


# ============================================
# Ejecutar el pipeline completo
# ============================================
print("Extrayendo libros...")
libros = extraer_libros(html_ejemplo, BASE_URL)
print(f"Encontrados: {len(libros)} libros")
print()

# Mostrar resumen
for libro in libros:
    print(f"  {libro['titulo']} — \${libro['precio']:.2f} — {libro['estrellas']}★")

print()
guardar_csv(libros)
guardar_json(libros)

# Estadísticas
precios = [l["precio"] for l in libros if l["precio"]]
print(f"\\nPrecio promedio: \${sum(precios)/len(precios):.2f}")
print(f"Precio más bajo: \${min(precios):.2f}")
print(f"Precio más alto: \${max(precios):.2f}")`,
    keyPoints: [
      'Organiza los datos scrapeados como lista de diccionarios antes de guardarlos',
      'csv.DictWriter escribe dicts como filas CSV; siempre incluye writeheader()',
      'En Windows, usa newline="" al abrir el archivo CSV para evitar líneas dobles',
      'json.dump con ensure_ascii=False guarda tildes y ñ directamente legibles',
      'json.dump con indent=2 formatea el JSON para que sea fácil de leer y depurar',
      'Añade timestamp al nombre del archivo para no sobreescribir datos anteriores',
    ],
    exercise: {
      description: 'Escribe un script completo que: 1) Defina una lista de 5 libros como dicts con campos: titulo, autor, precio (float), disponible (bool), 2) Guarde esa lista en "libros.csv" con csv.DictWriter, 3) Guarde la misma lista en "libros.json" con json.dump y ensure_ascii=False, 4) Lea el JSON guardado y muestre los libros disponibles (disponible=True) con su precio.',
      hint: 'Para el CSV recuerda fieldnames=list(datos[0].keys()) y newline="" al abrir. Para el JSON usa ensure_ascii=False e indent=2. Para leer el JSON de vuelta usa json.load(f). Para filtrar disponibles usa [l for l in libros if l["disponible"]].',
    },
    quiz: [
      {
        question: '¿Por qué se usa `newline=""` al abrir un archivo CSV en modo escritura en Windows?',
        options: [
          'Para que el archivo ocupe menos espacio',
          'Para evitar que csv.DictWriter inserte líneas en blanco entre cada fila',
          'Para que los caracteres especiales se guarden correctamente',
          'Para que el archivo se abra más rápido',
        ],
        correctAnswer: 'Para evitar que csv.DictWriter inserte líneas en blanco entre cada fila',
        correctFeedback: '¡Correcto! En Windows, si no usas `newline=""`, el módulo csv agrega un salto de línea extra y el archivo queda con líneas vacías entre cada fila de datos.',
        incorrectFeedback: 'En Windows sin `newline=""`, el csv writer agrega \\r\\n y Python también agrega \\n, resultando en una línea vacía entre cada fila. La solución es `newline=""` al abrir el archivo.',
      },
      {
        question: '¿Qué hace `json.dump(datos, f, ensure_ascii=False)`?',
        options: [
          'Guarda solo los datos que son ASCII puro',
          'Guarda tildes, ñ y caracteres Unicode tal como son, sin escaparlos',
          'Comprime el JSON para que ocupe menos espacio',
          'Verifica que el JSON sea válido antes de guardar',
        ],
        correctAnswer: 'Guarda tildes, ñ y caracteres Unicode tal como son, sin escaparlos',
        correctFeedback: '¡Correcto! Sin `ensure_ascii=False`, Python escapa los caracteres Unicode: "ñ" se guardaría como "\\u00f1". Con esta opción, el JSON es más legible para humanos.',
        incorrectFeedback: 'Sin `ensure_ascii=False`, json.dump guarda caracteres no-ASCII como escapes Unicode ("\\u00f1" en vez de "ñ"). Con False, el texto se guarda tal como es: más legible.',
      },
      {
        question: '¿Para qué sirve `writer.writeheader()` en csv.DictWriter?',
        options: [
          'Para agregar una línea de título artístico al CSV',
          'Para escribir la primera fila con los nombres de las columnas',
          'Para validar que los datos tienen las columnas correctas',
          'Para cerrar el archivo después de escribir',
        ],
        correctAnswer: 'Para escribir la primera fila con los nombres de las columnas',
        correctFeedback: '¡Exacto! `writeheader()` escribe la fila de cabecera con los nombres de los campos (definidos en fieldnames). Sin ella, el CSV no tendrá nombres de columnas.',
        incorrectFeedback: '`writeheader()` escribe la primera fila con los nombres de columnas del CSV. Es la línea que Excel usa como encabezado. Sin ella, el CSV empieza directo con datos.',
      },
      {
        question: '¿Qué parámetro de json.dump hace que el JSON sea legible con sangría?',
        options: ['format=True', 'indent=2', 'pretty=True', 'readable=True'],
        correctAnswer: 'indent=2',
        correctFeedback: '¡Correcto! `indent=2` agrega 2 espacios de sangría por cada nivel del JSON. Sin indent, todo el JSON queda en una sola línea difícil de leer.',
        incorrectFeedback: '`indent=2` es el parámetro para formato legible. Sin él, json.dump escribe todo en una línea. El número indica la cantidad de espacios de sangría por nivel.',
      },
      {
        question: '¿Cuándo es preferible usar JSON en vez de CSV para guardar datos scrapeados?',
        options: [
          'Siempre, JSON es superior en todos los casos',
          'Cuando los datos tienen estructura anidada (listas dentro de dicts, dicts dentro de dicts)',
          'Cuando quieres abrir los datos en Excel directamente',
          'Cuando los datos no tienen caracteres especiales',
        ],
        correctAnswer: 'Cuando los datos tienen estructura anidada (listas dentro de dicts, dicts dentro de dicts)',
        correctFeedback: '¡Exacto! CSV solo soporta estructura plana (tabla). JSON puede representar listas dentro de diccionarios, objetos anidados y estructuras complejas.',
        incorrectFeedback: 'JSON es mejor para datos anidados (listas de imágenes, categorías, etc.). CSV es mejor para datos tabulares planos que quieres abrir en Excel o importar en bases de datos.',
      },
      {
        question: 'Analiza: `timestamp = datetime.now().strftime("%Y%m%d_%H%M")`. ¿Cómo quedaría el nombre "datos_20250115_0830.csv"?',
        options: [
          'Con la fecha en formato europeo: 15-01-2025',
          'Con año, mes, día, hora y minuto: 20250115_0830',
          'Solo con la hora actual: 0830',
          'Con el timestamp Unix en segundos',
        ],
        correctAnswer: 'Con año, mes, día, hora y minuto: 20250115_0830',
        correctFeedback: '¡Correcto! `%Y%m%d_%H%M` produce: año 4 dígitos + mes 2 dígitos + día 2 dígitos + _ + hora 2 dígitos + minuto 2 dígitos. Ideal para ordenar archivos cronológicamente.',
        incorrectFeedback: '`%Y%m%d_%H%M` produce una cadena como "20250115_0830": año+mes+día_hora+minuto. Este formato es útil porque al ordenar alfabéticamente, también queda en orden cronológico.',
      },
    ],
  },
  {
    slug: 'errores-web-scraping',
    title: 'Errores comunes en web scraping',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 113,
    description: 'Aprende a manejar errores comunes como páginas bloqueadas, cambios de estructura HTML, timeouts y datos faltantes.',
    explanation: `## Errores comunes en web scraping y cómo manejarlos

El scraping rara vez funciona perfectamente desde el primer intento. Estos son los problemas más frecuentes y cómo resolverlos.

### 1. Elemento no encontrado (None)

\`\`\`python
# PELIGROSO: si no existe, lanza AttributeError
precio = soup.find("span", class_="precio").text

# SEGURO: verifica antes de acceder
precio_tag = soup.find("span", class_="precio")
precio = precio_tag.text if precio_tag else "N/A"
\`\`\`

### 2. Errores de conexión y HTTP

\`\`\`python
try:
    respuesta = requests.get(url, timeout=10)
    respuesta.raise_for_status()
except requests.exceptions.Timeout:
    print("Timeout: el servidor tardó demasiado")
except requests.exceptions.ConnectionError:
    print("Error de red")
except requests.exceptions.HTTPError as e:
    if e.response.status_code == 403:
        print("Acceso prohibido")
    elif e.response.status_code == 429:
        print("Demasiadas solicitudes — espera antes de reintentar")
\`\`\`

### 3. Código 403 (bloqueado por bot detection)

Soluciones graduales:
1. Añadir User-Agent de navegador
2. Agregar delays entre solicitudes
3. Rotar User-Agents
4. Si el sitio tiene API oficial, úsala

### 4. HTML cambia de estructura

Los sitios rediseñan sus páginas. Tu script que funcionaba hoy puede fallar mañana.

\`\`\`python
# Defensivo: múltiples selectores alternativos
def extraer_precio(card):
    # Intenta varias formas de encontrar el precio
    for selector in [".price", ".precio", "[data-price]", "span.amount"]:
        tag = card.select_one(selector)
        if tag:
            return tag.get_text(strip=True)
    return None  # No encontrado
\`\`\`

### 5. Código de programación defensiva

\`\`\`python
def extraer_item_seguro(card):
    """Extrae datos con manejo defensivo de errores."""
    return {
        "titulo": (card.find("h2") or card.find("h3") or {}).get_text(strip=True) if card.find("h2") or card.find("h3") else None,
        "precio": safe_float(card.find(".precio")),
        "enlace": card.find("a", href=True).get("href") if card.find("a", href=True) else None,
    }

def safe_float(tag):
    """Convierte el texto de un tag a float de forma segura."""
    if tag is None:
        return None
    try:
        return float(tag.get_text(strip=True).replace(",", ".").replace("$", ""))
    except ValueError:
        return None
\`\`\`

### 6. Añadir delays para evitar bloqueos

\`\`\`python
import time
import random

for url in lista_de_urls:
    html = descargar(url)
    # Pausa aleatoria entre 1 y 3 segundos
    time.sleep(random.uniform(1, 3))
\`\`\``,
    codeExample: `import requests
import time
import random
from bs4 import BeautifulSoup

# ============================================
# Manejo defensivo de errores en scraping
# ============================================

def safe_text(elemento, strip=True):
    """Obtiene el texto de un elemento de forma segura."""
    if elemento is None:
        return None
    texto = elemento.get_text(strip=strip) if strip else elemento.text
    return texto if texto else None


def safe_attr(elemento, atributo, default=None):
    """Obtiene un atributo de un elemento de forma segura."""
    if elemento is None:
        return default
    return elemento.get(atributo, default)


def safe_float(texto):
    """Convierte texto a float eliminando símbolos de moneda."""
    if not texto:
        return None
    try:
        limpio = texto.replace("$", "").replace(",", ".").strip()
        return float(limpio)
    except (ValueError, AttributeError):
        return None


def descargar_con_reintentos(url, max_reintentos=3, delay_base=2):
    """
    Descarga HTML con reintentos automáticos y delay exponencial.
    """
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
        )
    }

    for intento in range(1, max_reintentos + 1):
        try:
            resp = requests.get(url, headers=headers, timeout=10)
            resp.raise_for_status()
            return resp.text

        except requests.exceptions.Timeout:
            print(f"  Timeout (intento {intento}/{max_reintentos})")

        except requests.exceptions.ConnectionError as e:
            print(f"  Error de conexión: {e}")
            return None  # No reintentar en errores de red

        except requests.exceptions.HTTPError as e:
            codigo = e.response.status_code
            if codigo == 404:
                print(f"  Página no encontrada: {url}")
                return None
            elif codigo == 403:
                print(f"  Acceso prohibido (403). Considera usar la API oficial.")
                return None
            elif codigo == 429:
                espera = delay_base * (2 ** intento)
                print(f"  Límite de solicitudes (429). Esperando {espera}s...")
                time.sleep(espera)
            else:
                print(f"  Error HTTP {codigo}")
                return None

        if intento < max_reintentos:
            espera = delay_base * intento + random.uniform(0, 1)
            print(f"  Reintentando en {espera:.1f}s...")
            time.sleep(espera)

    print(f"  Fallaron todos los reintentos para: {url}")
    return None


def extraer_productos_seguro(html):
    """
    Extrae productos con manejo defensivo de cada campo.
    """
    if not html:
        return []

    soup = BeautifulSoup(html, "html.parser")
    productos = []
    errores = 0

    contenedores = soup.find_all("article") or soup.find_all("div", class_="producto")

    for i, card in enumerate(contenedores):
        try:
            # Intenta múltiples selectores para el título
            titulo_tag = card.find("h2") or card.find("h3") or card.find("h1")
            titulo = safe_text(titulo_tag)

            # Precio: múltiples formas posibles
            precio_tag = (
                card.select_one(".precio") or
                card.select_one(".price") or
                card.find("span", class_=lambda c: c and "precio" in c.lower())
            )
            precio = safe_float(safe_text(precio_tag))

            # Enlace
            enlace_tag = card.find("a", href=True)
            enlace = safe_attr(enlace_tag, "href")

            if titulo:  # Solo agrega si tiene al menos título
                productos.append({
                    "titulo": titulo,
                    "precio": precio,
                    "enlace": enlace,
                })
            else:
                print(f"  Item {i+1}: sin título, omitido")

        except Exception as e:
            errores += 1
            print(f"  Error en item {i+1}: {e}")

    print(f"Extraídos: {len(productos)} productos, {errores} errores")
    return productos


# ============================================
# Scraping de múltiples páginas con delay
# ============================================
def scrapear_lista(urls, delay_min=1, delay_max=3):
    """Scrapea múltiples URLs con delays para ser respetuoso."""
    todos_los_datos = []

    for i, url in enumerate(urls, 1):
        print(f"[{i}/{len(urls)}] {url}")
        html = descargar_con_reintentos(url)

        if html:
            datos = extraer_productos_seguro(html)
            todos_los_datos.extend(datos)

        # Delay aleatorio entre solicitudes
        if i < len(urls):
            espera = random.uniform(delay_min, delay_max)
            print(f"  Esperando {espera:.1f}s...")
            time.sleep(espera)

    return todos_los_datos


# Ejemplo de uso:
print("Script de scraping defensivo listo.")
print("Para usar: datos = scrapear_lista(['https://sitio.com/pag1', ...])")`,
    keyPoints: [
      'Siempre verifica que find() no devolvió None antes de acceder a .text o atributos',
      'Los errores más comunes son: None (elemento no encontrado), Timeout, 403/429, y cambios de HTML',
      'Usa try/except alrededor de cada bloque de extracción para no detener el scraping ante un error',
      'El delay aleatorio (time.sleep con random.uniform) hace el scraping más natural y evita bloqueos',
      'El backoff exponencial en reintentos (esperar más en cada intento) es la práctica estándar',
      'Funciones helper como safe_text() y safe_float() centralizan la lógica defensiva',
    ],
    exercise: {
      description: 'Escribe una función `extraer_datos_seguro(html)` que extraiga libros de un HTML con artículos. La función debe: manejar con try/except cada libro individualmente, usar safe_text() para obtener título y autor, verificar que cada campo existe antes de usarlo, devolver solo los libros que tengan al menos título, y al final imprimir cuántos libros se extrajeron y cuántos fallaron.',
      hint: 'Itera sobre soup.find_all("article") con enumerate para el número. Pon un try/except dentro del bucle (así si falla un item, el bucle sigue). Usa una variable errores = 0 que incrementas en el except. Solo haz productos.append(item) si item["titulo"] is not None.',
    },
    quiz: [
      {
        question: '¿Qué error ocurre si haces `soup.find("h2").text` cuando no hay ningún h2 en el HTML?',
        options: [
          'ValueError',
          'AttributeError: \'NoneType\' object has no attribute \'text\'',
          'KeyError',
          'TypeError: text is not callable',
        ],
        correctAnswer: 'AttributeError: \'NoneType\' object has no attribute \'text\'',
        correctFeedback: '¡Correcto! `find()` devuelve None si no hay coincidencias. Al intentar acceder a `.text` de None, Python lanza AttributeError. La solución: guardar en variable y verificar.',
        incorrectFeedback: 'Cuando find() no encuentra nada devuelve None. Luego None.text lanza AttributeError. Solución: `tag = soup.find("h2"); texto = tag.text if tag else None`.',
      },
      {
        question: '¿Cuál es la diferencia entre un error 403 y un error 429?',
        options: [
          '403 es timeout, 429 es no encontrado',
          '403 es acceso prohibido (siempre), 429 es demasiadas solicitudes (temporal)',
          '403 es error del servidor, 429 es error del cliente',
          'No hay diferencia práctica entre los dos',
        ],
        correctAnswer: '403 es acceso prohibido (siempre), 429 es demasiadas solicitudes (temporal)',
        correctFeedback: '¡Exacto! 403 = el servidor se niega permanentemente (cambia User-Agent o usa API). 429 = hiciste demasiadas solicitudes; espera un rato y reintenta.',
        incorrectFeedback: '403 (Forbidden) = el sitio te bloquea permanentemente en esa URL. 429 (Too Many Requests) = hiciste demasiadas solicitudes; el sitio dice "espera antes de continuar".',
      },
      {
        question: '¿Por qué se recomienda usar `random.uniform(1, 3)` en vez de `time.sleep(2)` fijo entre solicitudes?',
        options: [
          'random es más rápido que sleep fijo',
          'Un delay aleatorio parece más natural y es más difícil de detectar como bot',
          'time.sleep no funciona bien en Windows',
          'El delay aleatorio ocupa menos memoria',
        ],
        correctAnswer: 'Un delay aleatorio parece más natural y es más difícil de detectar como bot',
        correctFeedback: '¡Correcto! Un humano navegando tarda tiempos distintos entre páginas. Un intervalo exacto y fijo es una señal clara de bot. El delay aleatorio es más difícil de detectar.',
        incorrectFeedback: 'Un delay exactamente constante (siempre 2 segundos) es una señal de bot. Los humanos varían: a veces 1 segundo, a veces 4. El delay aleatorio imita ese comportamiento.',
      },
      {
        question: '¿Qué es el "backoff exponencial" en reintentos de scraping?',
        options: [
          'Reducir el delay a la mitad en cada reintento',
          'Aumentar el tiempo de espera exponencialmente en cada reintento fallido',
          'Reintentar exactamente 3 veces sin esperar',
          'Usar threads para hacer múltiples solicitudes en paralelo',
        ],
        correctAnswer: 'Aumentar el tiempo de espera exponencialmente en cada reintento fallido',
        correctFeedback: '¡Correcto! Backoff exponencial: intento 1 espera 2s, intento 2 espera 4s, intento 3 espera 8s. Así evitas sobrecargar un servidor que está teniendo problemas.',
        incorrectFeedback: 'Backoff exponencial aumenta el delay entre reintentos: si falla, esperas más cada vez (2s, 4s, 8s...). Esto reduce la carga sobre el servidor y aumenta la probabilidad de éxito.',
      },
      {
        question: '¿Cuál de estas es la práctica defensiva correcta para extraer un precio de texto como "$29.99"?',
        options: [
          'float(tag.text)',
          'float(tag.text.replace("$", "").strip())',
          'int(tag.text)',
          'tag.text.split("$")[1]',
        ],
        correctAnswer: 'float(tag.text.replace("$", "").strip())',
        correctFeedback: '¡Correcto! Primero elimina el símbolo de moneda con replace, luego quita espacios con strip, y finalmente convierte a float. Todo en un try/except por si el texto no es numérico.',
        incorrectFeedback: 'Para convertir "$29.99" a float: primero elimina "$" con replace(), luego quita espacios con strip(), y convierte con float(). Envuelve en try/except por si el formato cambia.',
      },
      {
        question: '¿Por qué es útil poner el try/except DENTRO del bucle al procesar múltiples elementos?',
        options: [
          'Para que el bucle sea más rápido',
          'Para que un error en un elemento no detenga el procesamiento de los demás',
          'Porque Python requiere try/except dentro de bucles for',
          'Para evitar que el script use demasiada memoria',
        ],
        correctAnswer: 'Para que un error en un elemento no detenga el procesamiento de los demás',
        correctFeedback: '¡Exacto! Si un producto tiene HTML inesperado, el try/except captura el error solo para ese producto y el bucle continúa con los demás. Sin él, un error detiene todo el scraping.',
        incorrectFeedback: 'Con try/except dentro del bucle: si el elemento 5 tiene un error, solo ese falla. El bucle procesa los elementos 6, 7, 8... Con try/except afuera del bucle, el primer error detiene todo.',
      },
    ],
  },
  {
    slug: 'buenas-practicas-scraping',
    title: 'Buenas prácticas y límites del scraping',
    module: 'Web scraping básico',
    moduleNumber: 22,
    order: 114,
    description: 'Aprende a hacer scraping de manera responsable, respetando robots.txt, términos de uso, límites de solicitudes y privacidad.',
    explanation: `## Buenas prácticas y límites del scraping

El scraping responsable es una habilidad que combina conocimientos técnicos con respeto por los sitios web y las personas. Aquí tienes la guía completa.

### Checklist del scraping ético ✓

Antes de empezar cualquier proyecto de scraping, verifica:

- [ ] ¿El sitio tiene **API oficial**? Si es así, úsala.
- [ ] ¿Los **Términos de Uso** permiten scraping?
- [ ] ¿Qué dice el **robots.txt**?
- [ ] ¿Los datos son **públicos** o requieren login?
- [ ] ¿Incluyen **datos personales** de usuarios?
- [ ] ¿Tu scraping puede **dañar el servicio**?

### Cómo leer robots.txt programáticamente

\`\`\`python
from urllib.robotparser import RobotFileParser
import urllib.request

def puede_scrapear(url_sitio, ruta, agente="*"):
    """Verifica si una ruta está permitida según robots.txt."""
    rp = RobotFileParser()
    rp.set_url(f"{url_sitio}/robots.txt")
    try:
        rp.read()
        return rp.can_fetch(agente, f"{url_sitio}{ruta}")
    except Exception:
        return True  # Si no se puede leer, asume permitido

puede_scrapear("https://python.org", "/docs/")  # True o False
\`\`\`

### Reglas de delays (tiempos de espera)

\`\`\`python
import time
import random

# Mínimo recomendado entre solicitudes
DELAY_MIN = 1   # segundos
DELAY_MAX = 3   # segundos

for url in urls:
    html = descargar(url)
    time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))
\`\`\`

### Cache: evita descargar dos veces lo mismo

\`\`\`python
import json
from pathlib import Path

CACHE_DIR = Path(".scraping_cache")
CACHE_DIR.mkdir(exist_ok=True)

def descargar_con_cache(url):
    """Usa cache para no hacer la misma solicitud dos veces."""
    nombre = url.replace("https://", "").replace("/", "_")
    cache = CACHE_DIR / f"{nombre}.html"

    if cache.exists():
        print(f"  [CACHE] {url}")
        return cache.read_text(encoding="utf-8")

    html = descargar(url)
    if html:
        cache.write_text(html, encoding="utf-8")
    return html
\`\`\`

### Preferir APIs oficiales

Si el sitio ofrece API, úsala:

\`\`\`python
# MEJOR: usar la API oficial (si existe)
import requests
respuesta = requests.get(
    "https://api.ejemplo.com/v1/productos",
    headers={"Authorization": "Bearer TU_TOKEN"}
)
datos = respuesta.json()

# PEOR: scrapear cuando hay API disponible
# (más frágil, menos ético, puede violar TOS)
\`\`\`

### Lo que NUNCA debes scrapear

- Datos personales (nombre, email, teléfono, dirección)
- Contenido detrás de un login sin permiso
- Datos protegidos por derechos de autor para redistribuir
- Sistemas que requieren eludir medidas de seguridad`,
    codeExample: `import time
import random
import json
import requests
from pathlib import Path
from urllib.robotparser import RobotFileParser

# ============================================
# Sistema de scraping responsable y completo
# ============================================

class ScraperResponsable:
    """
    Un scraper que sigue las buenas prácticas:
    - Verifica robots.txt
    - Añade delays entre solicitudes
    - Usa caché para evitar solicitudes repetidas
    - Registra lo que hace
    """

    def __init__(self, base_url, delay_min=1.0, delay_max=3.0, user_agent=None):
        self.base_url = base_url.rstrip("/")
        self.delay_min = delay_min
        self.delay_max = delay_max
        self.cache_dir = Path(".scraping_cache")
        self.cache_dir.mkdir(exist_ok=True)
        self.solicitudes_hechas = 0
        self.errores = 0

        self.headers = {
            "User-Agent": user_agent or (
                "Mozilla/5.0 (compatible; MiBot/1.0; +https://mi-sitio.com/bot)"
            )
        }

        # Cargar robots.txt
        self._robots = RobotFileParser()
        self._robots.set_url(f"{self.base_url}/robots.txt")
        try:
            self._robots.read()
            print(f"robots.txt cargado de {self.base_url}")
        except Exception:
            print(f"No se pudo leer robots.txt (asumiendo todo permitido)")
            self._robots = None

    def esta_permitido(self, ruta):
        """Verifica si la ruta está permitida según robots.txt."""
        if self._robots is None:
            return True
        url_completa = f"{self.base_url}{ruta}"
        return self._robots.can_fetch(self.headers["User-Agent"], url_completa)

    def _ruta_cache(self, url):
        """Genera el path de cache para una URL."""
        nombre_seguro = url.replace("://", "_").replace("/", "_").replace("?", "_")[:100]
        return self.cache_dir / f"{nombre_seguro}.html"

    def descargar(self, ruta, usar_cache=True):
        """
        Descarga una página verificando robots.txt y usando caché.

        Args:
            ruta: ruta relativa (ej: "/productos")
            usar_cache: si True, usa caché local antes de descargar

        Returns:
            El HTML como string o None si falla.
        """
        url = f"{self.base_url}{ruta}"

        # 1. Verificar robots.txt
        if not self.esta_permitido(ruta):
            print(f"  ✗ robots.txt prohíbe: {ruta}")
            return None

        # 2. Verificar caché
        cache_path = self._ruta_cache(url)
        if usar_cache and cache_path.exists():
            print(f"  [CACHE] {ruta}")
            return cache_path.read_text(encoding="utf-8")

        # 3. Hacer la solicitud
        try:
            print(f"  [GET] {url}")
            resp = requests.get(url, headers=self.headers, timeout=10)
            resp.raise_for_status()
            self.solicitudes_hechas += 1

            # Guardar en caché
            cache_path.write_text(resp.text, encoding="utf-8")

            # Delay respetuoso
            espera = random.uniform(self.delay_min, self.delay_max)
            print(f"  Esperando {espera:.1f}s...")
            time.sleep(espera)

            return resp.text

        except requests.exceptions.HTTPError as e:
            print(f"  Error HTTP {e.response.status_code}: {ruta}")
            self.errores += 1
            return None
        except Exception as e:
            print(f"  Error: {e}")
            self.errores += 1
            return None

    def resumen(self):
        """Muestra estadísticas del proceso de scraping."""
        print("\\n" + "=" * 40)
        print("RESUMEN DEL SCRAPING")
        print(f"  Solicitudes realizadas: {self.solicitudes_hechas}")
        print(f"  Errores: {self.errores}")
        archivos_cache = len(list(self.cache_dir.iterdir()))
        print(f"  Archivos en caché: {archivos_cache}")
        print("=" * 40)


# Checklist de verificación antes de scrapear
def checklist_scraping(sitio):
    """Imprime un checklist interactivo antes de hacer scraping."""
    print(f"\\nChecklist de scraping ético para: {sitio}")
    print("=" * 50)
    preguntas = [
        "¿Verificaste los Términos de Uso del sitio?",
        "¿Leíste el robots.txt?",
        "¿El sitio tiene API oficial que debas usar primero?",
        "¿Los datos son públicos (no requieren login)?",
        "¿Evitarás extraer datos personales?",
        "¿Añadirás delays entre solicitudes?",
    ]
    for i, pregunta in enumerate(preguntas, 1):
        print(f"  {i}. [ ] {pregunta}")
    print()
    print("Completa este checklist ANTES de ejecutar el scraper.")


checklist_scraping("https://ejemplo.com")`,
    keyPoints: [
      'Siempre verifica robots.txt y Términos de Uso antes de scrapear cualquier sitio',
      'Usa la API oficial del sitio si existe; es más confiable y legalmente segura',
      'Añade delays aleatorios (time.sleep con random.uniform) entre solicitudes',
      'Implementa caché local para evitar descargar la misma página múltiples veces',
      'Nunca scrapees datos personales, contenido detrás de login o información privada',
      'Un User-Agent que identifique tu bot (con tu contacto) es más transparente y ético',
    ],
    exercise: {
      description: 'Implementa una función `verificar_antes_de_scrapear(url_sitio)` que: 1) Descargue y muestre las primeras 10 líneas del robots.txt, 2) Use RobotFileParser para verificar si "/" y "/api/" están permitidos para tu User-Agent, 3) Imprima un resumen indicando si está permitido o no scrapear cada ruta. Maneja errores si el robots.txt no existe.',
      hint: 'Usa from urllib.robotparser import RobotFileParser. Llama rp.set_url(url+"/robots.txt") y rp.read(). Para cada ruta usa rp.can_fetch("*", url+ruta). Envuelve en try/except por si el robots.txt no existe (algunos sitios no tienen uno).',
    },
    quiz: [
      {
        question: '¿Cuál debe ser el PRIMER paso antes de escribir cualquier código de scraping?',
        options: [
          'Instalar beautifulsoup4 y requests',
          'Verificar el robots.txt y los Términos de Uso del sitio',
          'Hacer una solicitud de prueba para ver si el sitio responde',
          'Crear la estructura de carpetas del proyecto',
        ],
        correctAnswer: 'Verificar el robots.txt y los Términos de Uso del sitio',
        correctFeedback: '¡Correcto! Antes de cualquier código, verifica que tienes permiso. Leer robots.txt y los Términos de Uso protege tanto al sitio como a ti legalmente.',
        incorrectFeedback: 'Lo primero siempre es la verificación ética y legal: robots.txt y Términos de Uso. Escribir código antes de esto podría llevarte a violar reglas o leyes sin saberlo.',
      },
      {
        question: '¿Por qué usar un User-Agent que identifique tu bot es una práctica más ética?',
        options: [
          'Porque los servidores son más rápidos con User-Agents identificados',
          'Porque es transparente: el sitio sabe quién hace las solicitudes y puede contactarte',
          'Porque Python solo funciona con User-Agents personalizados',
          'Para evitar que el sitio te bloquee automáticamente',
        ],
        correctAnswer: 'Porque es transparente: el sitio sabe quién hace las solicitudes y puede contactarte',
        correctFeedback: '¡Exacto! Un User-Agent como "MiBot/1.0 (+https://mi-sitio.com/bot)" permite al webmaster entender el tráfico y contactarte si tienes algún problema.',
        incorrectFeedback: 'Usar un User-Agent identificado (con tu información de contacto) es más transparente. El webmaster sabe qué bot está accediendo y puede comunicarse contigo si hay problemas.',
      },
      {
        question: '¿Qué ventaja ofrece el caché en un proyecto de scraping?',
        options: [
          'Hace que el scraping sea más rápido porque procesa el HTML en paralelo',
          'Evita hacer solicitudes repetidas al mismo servidor, ahorrando recursos y reduciendo el riesgo de bloqueo',
          'Permite scrapear sitios que bloquean bots automáticamente',
          'Guarda las contraseñas de sitios protegidos',
        ],
        correctAnswer: 'Evita hacer solicitudes repetidas al mismo servidor, ahorrando recursos y reduciendo el riesgo de bloqueo',
        correctFeedback: '¡Correcto! El caché guarda el HTML descargado localmente. Si el script falla y lo reinicias, no re-descarga páginas ya procesadas. Menos solicitudes = más respetuoso.',
        incorrectFeedback: 'El caché guarda HTML localmente. Si ya descargaste una página, no necesitas volver a pedirla. Esto reduce el tráfico al servidor y acelera el desarrollo.',
      },
      {
        question: '¿Cuál de estos datos NUNCA deberías scrapear, incluso si son técnicamente accesibles?',
        options: [
          'Precios de productos en una tienda online',
          'Titulares de noticias en un periódico digital',
          'Nombres y correos personales de usuarios en un foro público',
          'Horarios de trenes en el sitio oficial de transporte',
        ],
        correctAnswer: 'Nombres y correos personales de usuarios en un foro público',
        correctFeedback: '¡Correcto! Los datos personales están protegidos por leyes de privacidad (GDPR, etc.) independientemente de que sean "públicos". Scrapearlos sin consentimiento puede tener consecuencias legales.',
        incorrectFeedback: 'Los datos personales (nombres, emails, teléfonos) nunca deben scrapearse, aunque sean técnicamente visibles. Las leyes de privacidad (GDPR, etc.) protegen a las personas incluso cuando sus datos son públicos.',
      },
      {
        question: '¿Qué hace `RobotFileParser.can_fetch("*", url)` devuelve `False`?',
        options: [
          'Que la URL no existe en el servidor',
          'Que el robots.txt prohíbe esa URL para todos los bots',
          'Que la URL requiere autenticación',
          'Que el servidor está caído',
        ],
        correctAnswer: 'Que el robots.txt prohíbe esa URL para todos los bots',
        correctFeedback: '¡Exacto! `can_fetch("*", url)` verifica si el agente "*" (todos los bots) puede visitar esa URL según las reglas del robots.txt. False = hay un Disallow que lo cubre.',
        incorrectFeedback: '`can_fetch("*", url)` devuelve False si el robots.txt tiene un Disallow que aplica a esa URL para el agente "*". True significa que no hay restricción.',
      },
      {
        question: '¿Por qué deberías preferir la API oficial de un sitio en vez de hacer scraping?',
        options: [
          'Las APIs siempre son gratuitas, el scraping no',
          'Las APIs son más estables, están diseñadas para uso programático y su uso está explícitamente permitido',
          'El scraping requiere más código que usar una API',
          'Las APIs solo funcionan con JSON, el scraping es más flexible',
        ],
        correctAnswer: 'Las APIs son más estables, están diseñadas para uso programático y su uso está explícitamente permitido',
        correctFeedback: '¡Correcto! Una API no cambia cuando rediseñan la web, ofrece datos estructurados, tiene términos de uso claros y está hecha exactamente para lo que quieres hacer.',
        incorrectFeedback: 'Las APIs son más estables (no se rompen con rediseños), legalmente claras (tienes permiso explícito) y más eficientes. El scraping es el último recurso cuando no hay API.',
      },
      {
        question: '¿Cuánto delay mínimo se recomienda entre solicitudes para un scraping respetuoso?',
        options: [
          'No hace falta ningún delay si la conexión es rápida',
          'Al menos 1 segundo, idealmente aleatorio entre 1 y 3 segundos',
          'Exactamente 0.1 segundos para no perder tiempo',
          'Solo si el sitio te pide que esperes (error 429)',
        ],
        correctAnswer: 'Al menos 1 segundo, idealmente aleatorio entre 1 y 3 segundos',
        correctFeedback: '¡Correcto! Un mínimo de 1 segundo entre solicitudes es la norma básica de cortesía. Hacerlo aleatorio (entre 1 y 3 segundos) es aún mejor porque parece más humano.',
        incorrectFeedback: 'El delay mínimo recomendado es 1 segundo, pero idealmente aleatorio entre 1 y 3 segundos. Sin delay, tu bot puede saturar el servidor y causar problemas a otros usuarios.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module22: Module = {
  number: 22,
  title: 'Web scraping básico',
  level: 'practico',
  lessons: lessonsModule22,
}
