import type { Lesson } from '@/types'

export const lessonsModule24: Lesson[] = [
  {
    slug: 'envio-correos-python',
    title: 'Introducción al envío de correos',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 122,
    description: 'Aprende cómo Python puede enviar correos electrónicos y en qué casos puede ser útil.',
    explanation: `## Introducción al envío de correos con Python

Enviar correos electrónicos automáticamente desde Python es una habilidad muy práctica. Automatiza tareas repetitivas y conecta tus scripts con el mundo real.

### ¿Para qué sirve enviar correos desde Python?

| Caso de uso | Ejemplo |
|-------------|---------|
| Reportes automáticos | Enviar el reporte de ventas cada lunes por la mañana |
| Alertas y notificaciones | "El servidor está caído" o "El stock bajó de 10 unidades" |
| Confirmaciones | Email de confirmación cuando alguien llena un formulario |
| Resúmenes periódicos | Resumen semanal de actividad de tu base de datos |
| Backups por correo | Enviar un CSV de respaldo adjunto cada noche |

### smtplib: la librería estándar

Python incluye \`smtplib\` en su librería estándar — no necesitas instalar nada extra para lo básico.

**SMTP** (Simple Mail Transfer Protocol) es el protocolo que usan todos los servidores de correo para enviar mensajes.

\`\`\`python
import smtplib  # Ya viene con Python
\`\`\`

### Servidores SMTP comunes

| Proveedor | Servidor SMTP | Puerto |
|-----------|--------------|--------|
| Gmail | smtp.gmail.com | 465 (SSL) / 587 (TLS) |
| Outlook/Hotmail | smtp-mail.outlook.com | 587 |
| Yahoo | smtp.mail.yahoo.com | 465 |
| SMTP propio | tu.servidor.com | Varía |

### ⚠️ SEGURIDAD — MUY IMPORTANTE

**Nunca guardes contraseñas directamente en el código.**

\`\`\`python
# ❌ PELIGROSO — nunca hagas esto:
password = "mi_contraseña_real"

# ✅ CORRECTO — usa variables de entorno:
import os
password = os.environ.get("EMAIL_PASSWORD")
\`\`\`

Si subes tu contraseña a GitHub, cualquier persona puede ver tu correo y acceder a tu cuenta.

### App Passwords en Gmail

Gmail no permite usar tu contraseña normal en scripts. En cambio, debes crear una **App Password** (contraseña de aplicación):

1. Activa la verificación en dos pasos en tu cuenta Google
2. Ve a: Cuenta Google → Seguridad → Contraseñas de aplicaciones
3. Crea una contraseña para "Correo" y "Otro dispositivo"
4. Recibirás una contraseña de 16 caracteres — úsala en tu script

### El flujo de envío de un correo

\`\`\`
Tu script Python
      ↓ Se conecta a smtp.gmail.com:465
Servidor SMTP de Gmail
      ↓ Autentica con tu email + App Password
      ↓ Envía el mensaje al destinatario
Servidor del destinatario
      ↓
Bandeja de entrada del destinatario
\`\`\`

### TLS vs SSL

- **SSL** (puerto 465): conexión segura desde el principio (SMTP_SSL)
- **TLS/STARTTLS** (puerto 587): comienza insegura y luego se encripta (SMTP + starttls())

Ambas son seguras. Gmail recomienda SSL en el puerto 465 para scripts.`,
    codeExample: `import smtplib
import os

# smtplib ya viene con Python — no necesitas instalarlo

# ============================================================
# Estructura básica de un script de envío de correo
# (Sin enviar realmente — solo demostración de conceptos)
# ============================================================

# 1. Configuración (siempre desde variables de entorno)
EMAIL_ORIGEN = os.environ.get("EMAIL_ORIGEN", "mi_correo@gmail.com")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")  # App Password de Gmail

# Verificar que las credenciales están disponibles
if not EMAIL_PASSWORD:
    print("⚠️  EMAIL_PASSWORD no configurada")
    print("   Configura la variable de entorno o el archivo .env")
else:
    print(f"✓ Credenciales configuradas para: {EMAIL_ORIGEN}")

# 2. Casos de uso típicos para automatización
casos_de_uso = [
    {
        "nombre": "Reporte semanal",
        "descripcion": "Enviar resumen de ventas cada lunes 8am",
        "destinatario": "gerente@empresa.com",
        "frecuencia": "Semanal (automatizado con cron/scheduler)",
    },
    {
        "nombre": "Alerta de stock",
        "descripcion": "Notificar cuando un producto baja de 5 unidades",
        "destinatario": "almacen@empresa.com",
        "frecuencia": "Inmediato (cuando se detecta la condición)",
    },
    {
        "nombre": "Backup nocturno",
        "descripcion": "Enviar CSV con datos del día adjunto",
        "destinatario": "backup@empresa.com",
        "frecuencia": "Diario (cada noche a las 23:00)",
    },
]

print("\\n=== Casos de uso de envío automático de correos ===")
for caso in casos_de_uso:
    print(f"\\n📧 {caso['nombre']}")
    print(f"   Descripción: {caso['descripcion']}")
    print(f"   Para: {caso['destinatario']}")
    print(f"   Frecuencia: {caso['frecuencia']}")

# 3. Configuraciones SMTP comunes
servidores_smtp = {
    "Gmail": {"servidor": "smtp.gmail.com", "puerto": 465, "tipo": "SSL"},
    "Outlook": {"servidor": "smtp-mail.outlook.com", "puerto": 587, "tipo": "TLS"},
    "Yahoo": {"servidor": "smtp.mail.yahoo.com", "puerto": 465, "tipo": "SSL"},
}

print("\\n=== Servidores SMTP disponibles ===")
for proveedor, config in servidores_smtp.items():
    print(f"{proveedor}: {config['servidor']}:{config['puerto']} ({config['tipo']})")`,
    keyPoints: [
      'smtplib viene incluida con Python — no necesitas instalar nada extra',
      'SMTP es el protocolo estándar para envío de correos electrónicos',
      'Nunca guardes contraseñas en el código — usa siempre variables de entorno',
      'Gmail requiere App Password (contraseña de aplicación) para scripts — no acepta la contraseña normal',
      'SSL (puerto 465) y TLS/STARTTLS (puerto 587) son las dos formas seguras de conectarse',
      'Los casos de uso más comunes son: reportes automáticos, alertas, confirmaciones y backups',
    ],
    exercise: {
      description: 'Sin enviar un correo real todavía, crea un script Python que: (1) lea EMAIL_ORIGEN y EMAIL_PASSWORD desde variables de entorno usando os.environ.get(), (2) verifique que ambas variables están configuradas y muestre un mensaje de error si faltan, (3) muestre la configuración SMTP correcta para el proveedor detectado (si el email termina en @gmail.com, muestra smtp.gmail.com:465; si termina en @outlook.com, muestra smtp-mail.outlook.com:587). No envíes un correo real aún.',
      hint: 'Usa os.environ.get("EMAIL_ORIGEN", "") y comprueba con if not EMAIL_PASSWORD. Para detectar el proveedor, puedes usar email.endswith("@gmail.com"). Crea un diccionario con la configuración de cada proveedor.',
    },
    quiz: [
      {
        question: '¿Qué es SMTP?',
        options: [
          'Un lenguaje de programación para correos',
          'El protocolo estándar para enviar correos electrónicos',
          'Una librería de Python para correos',
          'Un servidor de correo de Google',
        ],
        correctAnswer: 'El protocolo estándar para enviar correos electrónicos',
        correctFeedback: '¡Correcto! SMTP (Simple Mail Transfer Protocol) es el protocolo de comunicación que usan todos los servidores de correo para enviar mensajes.',
        incorrectFeedback: 'SMTP es el protocolo de comunicación estándar para el envío de correos. smtplib es la librería Python que implementa este protocolo.',
      },
      {
        question: '¿Por qué Gmail no permite usar tu contraseña normal en un script Python?',
        options: [
          'Porque Python no soporta contraseñas con caracteres especiales',
          'Por seguridad: Gmail requiere App Password para acceso desde aplicaciones',
          'Porque SMTP no usa contraseñas',
          'Porque Gmail bloquea todos los scripts automáticos',
        ],
        correctAnswer: 'Por seguridad: Gmail requiere App Password para acceso desde aplicaciones',
        correctFeedback: '¡Correcto! Gmail usa App Passwords para permitir que aplicaciones accedan sin exponer tu contraseña principal. Debes tener activada la verificación en dos pasos.',
        incorrectFeedback: 'Gmail requiere una App Password por seguridad. Es una contraseña de 16 caracteres específica para aplicaciones. Se crea en: Cuenta Google → Seguridad → Contraseñas de aplicaciones.',
      },
      {
        question: '¿Cuál es la forma segura de manejar la contraseña del correo en Python?',
        options: [
          'password = "mi_contraseña" directamente en el script',
          'Guardarla en un archivo .txt en el mismo directorio',
          'password = os.environ.get("EMAIL_PASSWORD") desde variables de entorno',
          'Pedirla siempre con input() al ejecutar el script',
        ],
        correctAnswer: 'password = os.environ.get("EMAIL_PASSWORD") desde variables de entorno',
        correctFeedback: '¡Correcto! Las credenciales deben leerse desde variables de entorno. Nunca deben estar en el código fuente ni en archivos que se suban a git.',
        incorrectFeedback: 'La forma segura es usar variables de entorno: `os.environ.get("EMAIL_PASSWORD")`. La contraseña se configura en el entorno del sistema, nunca en el código.',
      },
      {
        question: '¿En qué puerto y con qué protocolo de seguridad se conecta Gmail usando SSL?',
        options: ['Puerto 25 sin cifrado', 'Puerto 587 con TLS', 'Puerto 465 con SSL', 'Puerto 80 con HTTPS'],
        correctAnswer: 'Puerto 465 con SSL',
        correctFeedback: '¡Correcto! Gmail usa smtp.gmail.com en el puerto 465 con SSL (conexión segura desde el principio). También acepta el puerto 587 con STARTTLS.',
        incorrectFeedback: 'Gmail usa el puerto 465 con SSL (SMTP_SSL) o el puerto 587 con STARTTLS. El puerto 25 es el SMTP sin cifrar, que los proveedores modernos no usan.',
      },
      {
        question: '¿Cuál de estos es un caso de uso válido para envío automático de correos desde Python?',
        options: [
          'Enviar spam comercial masivo',
          'Leer correos recibidos en tu bandeja',
          'Enviar alertas automáticas cuando el stock de un producto baja de cierto nivel',
          'Crear nuevas cuentas de correo',
        ],
        correctAnswer: 'Enviar alertas automáticas cuando el stock de un producto baja de cierto nivel',
        correctFeedback: '¡Correcto! Las alertas automáticas son uno de los casos de uso más valiosos. Tu script monitorea una condición y envía el correo solo cuando es necesario.',
        incorrectFeedback: 'Casos de uso legítimos incluyen alertas, reportes, confirmaciones y backups. El spam es ilegal y viola los términos de servicio de los proveedores.',
      },
      {
        question: '¿Qué diferencia hay entre SSL (puerto 465) y STARTTLS (puerto 587)?',
        options: [
          'No hay diferencia, ambos son inseguros',
          'SSL cifra desde el inicio; STARTTLS comienza sin cifrar y luego negocia cifrado',
          'SSL es más lento que STARTTLS',
          'STARTTLS solo funciona con Gmail',
        ],
        correctAnswer: 'SSL cifra desde el inicio; STARTTLS comienza sin cifrar y luego negocia cifrado',
        correctFeedback: '¡Correcto! Con SSL (puerto 465) la conexión es segura desde el primer byte. Con STARTTLS (puerto 587) la conexión inicial no está cifrada, pero luego se negocia el cifrado.',
        incorrectFeedback: 'SSL establece la conexión segura desde el principio (puerto 465). STARTTLS comienza como conexión no cifrada y luego "actualiza" a cifrado (puerto 587). Ambas son seguras al final.',
      },
    ],
  },
  {
    slug: 'smtplib',
    title: 'Enviar correos con smtplib',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 123,
    description: 'Aprende a enviar un correo simple usando smtplib y un servidor SMTP.',
    explanation: `## Enviar correos con smtplib

\`smtplib\` es la librería estándar de Python para comunicarse con servidores SMTP. Con ella puedes enviar correos sin instalar nada adicional.

### Estructura básica con SMTP_SSL

\`\`\`python
import smtplib
from email.message import EmailMessage
import os

def enviar_correo(destinatario, asunto, cuerpo):
    email_origen = os.environ.get("EMAIL_ORIGEN")
    password = os.environ.get("EMAIL_PASSWORD")

    msg = EmailMessage()
    msg["Subject"] = asunto
    msg["From"] = email_origen
    msg["To"] = destinatario
    msg.set_content(cuerpo)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(email_origen, password)
        smtp.send_message(msg)

    print("✓ Correo enviado correctamente")
\`\`\`

### Usando STARTTLS (puerto 587)

\`\`\`python
with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
    smtp.ehlo()          # Identificarse con el servidor
    smtp.starttls()      # Activar cifrado
    smtp.login(email, password)
    smtp.send_message(msg)
\`\`\`

### El bloque \`with\`

Usar \`with smtplib.SMTP_SSL(...) as smtp:\` garantiza que la conexión se cierra automáticamente al terminar, incluso si ocurre un error. Equivale a:

\`\`\`python
smtp = smtplib.SMTP_SSL("smtp.gmail.com", 465)
try:
    smtp.login(email, password)
    smtp.send_message(msg)
finally:
    smtp.quit()  # Siempre se cierra
\`\`\`

### Errores comunes

\`\`\`python
import smtplib

try:
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(email, password)
        smtp.send_message(msg)
except smtplib.SMTPAuthenticationError:
    print("Error de autenticación — verifica email y App Password")
except smtplib.SMTPConnectError:
    print("No se pudo conectar al servidor — verifica tu internet")
except smtplib.SMTPRecipientsRefused:
    print("El destinatario fue rechazado — verifica el email")
except smtplib.SMTPException as e:
    print(f"Error de SMTP: {e}")
\`\`\`

### Enviar a múltiples destinatarios

\`\`\`python
destinatarios = ["ana@ejemplo.com", "luis@ejemplo.com", "maria@empresa.com"]
msg["To"] = ", ".join(destinatarios)

with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(email, password)
    smtp.send_message(msg)
\`\`\`

### Comparación TLS vs SSL

\`\`\`python
# SSL (puerto 465) — recomendado para Gmail
with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(email, password)

# TLS/STARTTLS (puerto 587) — alternativa
with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
    smtp.starttls()
    smtp.login(email, password)
\`\`\``,
    codeExample: `import smtplib
import os
from email.message import EmailMessage

# ============================================================
# Ejemplo completo de envío de correo con smtplib
# Para ejecutar REALMENTE, configura las variables de entorno:
#   EMAIL_ORIGEN=tu_correo@gmail.com
#   EMAIL_PASSWORD=tu_app_password_de_16_chars
# ============================================================

def enviar_correo_simple(destinatario: str, asunto: str, cuerpo: str) -> bool:
    """
    Envía un correo de texto plano usando Gmail y SSL.
    Retorna True si fue exitoso, False si hubo error.
    """
    email_origen = os.environ.get("EMAIL_ORIGEN")
    password = os.environ.get("EMAIL_PASSWORD")

    # Validar credenciales
    if not email_origen or not password:
        print("❌ Configura EMAIL_ORIGEN y EMAIL_PASSWORD en las variables de entorno")
        return False

    # Crear el mensaje
    msg = EmailMessage()
    msg["Subject"] = asunto
    msg["From"] = email_origen
    msg["To"] = destinatario
    msg.set_content(cuerpo)

    try:
        # Conectar y enviar con SSL
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(email_origen, password)
            smtp.send_message(msg)

        print(f"✓ Correo enviado a {destinatario}")
        return True

    except smtplib.SMTPAuthenticationError:
        print("❌ Error de autenticación. Verifica:")
        print("   1. El email de origen es correcto")
        print("   2. Usas una App Password (no tu contraseña normal)")
        print("   3. La verificación en dos pasos está activada")
        return False

    except smtplib.SMTPConnectError:
        print("❌ No se pudo conectar a Gmail. Verifica tu conexión a internet.")
        return False

    except smtplib.SMTPRecipientsRefused:
        print(f"❌ Email de destino inválido: {destinatario}")
        return False

    except smtplib.SMTPException as e:
        print(f"❌ Error de SMTP: {e}")
        return False


# --- Demo (sin enviar realmente si no hay credenciales) ---
def demo_sin_credenciales():
    """Muestra la estructura del mensaje sin enviarlo."""
    msg = EmailMessage()
    msg["Subject"] = "Reporte automático — Semana 20"
    msg["From"] = "mi_sistema@gmail.com"
    msg["To"] = "gerente@empresa.com"
    msg.set_content(
        "Hola,\\n\\n"
        "Adjunto el reporte semanal.\\n\\n"
        "Ventas totales: $12,500\\n"
        "Pedidos procesados: 87\\n"
        "Clientes nuevos: 12\\n\\n"
        "Saludos,\\nSistema Automático"
    )

    print("=== Vista previa del mensaje ===")
    print(f"De: {msg['From']}")
    print(f"Para: {msg['To']}")
    print(f"Asunto: {msg['Subject']}")
    print(f"Cuerpo:\\n{msg.get_content()}")


demo_sin_credenciales()

# Para enviar realmente:
# exito = enviar_correo_simple(
#     destinatario="destino@ejemplo.com",
#     asunto="Prueba desde Python",
#     cuerpo="Este correo fue enviado automáticamente con Python y smtplib."
# )`,
    keyPoints: [
      'smtplib.SMTP_SSL("smtp.gmail.com", 465) crea una conexión SSL segura al servidor',
      'smtp.login(email, password) autentifica con el servidor usando las credenciales',
      'smtp.send_message(msg) envía el objeto EmailMessage correctamente formateado',
      'Usa el bloque with para garantizar que la conexión se cierra aunque haya errores',
      'SMTPAuthenticationError suele significar App Password incorrecta o no configurada',
      'Gmail requiere activar verificación en dos pasos para crear App Passwords',
    ],
    exercise: {
      description: 'Escribe la función completa enviar_notificacion_stock(producto, cantidad_actual, cantidad_minima, email_destino) que construya y envíe un correo de alerta cuando cantidad_actual < cantidad_minima. El asunto debe incluir el nombre del producto. El cuerpo debe explicar claramente la situación. Incluye manejo de errores completo con SMTPAuthenticationError y SMTPException.',
      hint: 'Construye el asunto como f"⚠️ Alerta de stock: {producto}". Para el cuerpo, usa un f-string multilinea con los detalles. Asegúrate de cargar EMAIL_ORIGEN y EMAIL_PASSWORD desde os.environ.get() y verificar que no sean None antes de intentar conectarte.',
    },
    quiz: [
      {
        question: '¿Cuál es la función de smtp.login(email, password)?',
        options: [
          'Crea una nueva cuenta de correo',
          'Autentifica tu programa con el servidor SMTP para que pueda enviar correos',
          'Descarga los correos del servidor',
          'Verifica que el destinatario existe',
        ],
        correctAnswer: 'Autentifica tu programa con el servidor SMTP para que pueda enviar correos',
        correctFeedback: '¡Correcto! smtp.login() le dice al servidor SMTP quién eres. Sin autenticación, el servidor no te permitirá enviar correos.',
        incorrectFeedback: 'smtp.login() autentifica tu aplicación con el servidor SMTP. Es como iniciar sesión: le pruebas al servidor que tienes permiso para usar esa cuenta.',
      },
      {
        question: '¿Por qué se recomienda usar `with smtplib.SMTP_SSL(...) as smtp:` en vez de crear la conexión manualmente?',
        options: [
          'Porque es más rápido',
          'Porque el bloque with garantiza que la conexión se cierra automáticamente',
          'Porque SMTP_SSL solo funciona con with',
          'Porque ahorra memoria del sistema',
        ],
        correctAnswer: 'Porque el bloque with garantiza que la conexión se cierra automáticamente',
        correctFeedback: '¡Correcto! El bloque with llama a smtp.quit() automáticamente al terminar, incluso si ocurre una excepción. Evita conexiones colgadas.',
        incorrectFeedback: 'El bloque with garantiza que la conexión SMTP se cierre correctamente al terminar, incluso si hay un error. Es el patrón de context manager de Python.',
      },
      {
        question: '¿Qué excepción lanza smtplib cuando la contraseña es incorrecta?',
        options: [
          'smtplib.SMTPConnectError',
          'smtplib.SMTPAuthenticationError',
          'smtplib.SMTPRecipientsRefused',
          'ValueError',
        ],
        correctAnswer: 'smtplib.SMTPAuthenticationError',
        correctFeedback: '¡Correcto! SMTPAuthenticationError ocurre cuando el email o la contraseña (App Password) son incorrectos, o cuando no está activada la verificación en dos pasos.',
        incorrectFeedback: 'SMTPAuthenticationError ocurre cuando las credenciales son incorrectas. SMTPConnectError es por problemas de red. SMTPRecipientsRefused es cuando el email destino es inválido.',
      },
      {
        question: '¿Qué método se usa para establecer el contenido de texto plano en EmailMessage?',
        options: [
          'msg.body = "texto"',
          'msg.set_content("texto")',
          'msg["Content"] = "texto"',
          'msg.add_text("texto")',
        ],
        correctAnswer: 'msg.set_content("texto")',
        correctFeedback: '¡Correcto! msg.set_content("texto") establece el cuerpo del correo como texto plano. Para HTML, se usa msg.set_content(html, subtype="html") o add_alternative().',
        incorrectFeedback: 'msg.set_content("texto") es el método para establecer el cuerpo del mensaje en EmailMessage. También puedes usar add_alternative() para agregar versión HTML.',
      },
      {
        question: '¿Cómo se envía un correo a múltiples destinatarios con EmailMessage?',
        options: [
          'Llamar smtp.send_message() varias veces',
          'msg["To"] = "email1@ej.com, email2@ej.com" con comas',
          'msg["To"] = ["email1@ej.com", "email2@ej.com"] como lista',
          'Solo es posible enviar a un destinatario a la vez',
        ],
        correctAnswer: 'msg["To"] = "email1@ej.com, email2@ej.com" con comas',
        correctFeedback: '¡Correcto! Puedes usar una cadena con emails separados por comas: msg["To"] = ", ".join(lista_emails). EmailMessage lo maneja correctamente.',
        incorrectFeedback: 'Con EmailMessage puedes poner múltiples emails separados por comas en el campo "To": msg["To"] = "a@ej.com, b@ej.com". También se puede usar ", ".join(lista).',
      },
      {
        question: '¿Cuál es la diferencia entre smtplib.SMTP_SSL y smtplib.SMTP con starttls()?',
        options: [
          'No hay diferencia funcional',
          'SMTP_SSL usa SSL desde el inicio (puerto 465); SMTP + starttls() empieza sin cifrar y luego activa TLS (puerto 587)',
          'SMTP_SSL es más lento',
          'starttls() solo funciona en Windows',
        ],
        correctAnswer: 'SMTP_SSL usa SSL desde el inicio (puerto 465); SMTP + starttls() empieza sin cifrar y luego activa TLS (puerto 587)',
        correctFeedback: '¡Correcto! SMTP_SSL (puerto 465) es seguro desde la primera conexión. SMTP + starttls() (puerto 587) comienza sin cifrar y luego negocia el cifrado TLS.',
        incorrectFeedback: 'SMTP_SSL (465) = SSL desde el inicio. SMTP + starttls() (587) = primero sin cifrar, luego con cifrado TLS. Ambas son seguras al final del proceso.',
      },
    ],
  },
  {
    slug: 'email-message',
    title: 'Crear mensajes con email.message',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 124,
    description: 'Aprende a crear correos mejor estructurados con asunto, remitente, destinatario y cuerpo del mensaje.',
    explanation: `## Crear mensajes con email.message

La clase \`EmailMessage\` (parte del módulo estándar \`email\`) es la forma moderna y recomendada de construir mensajes de correo en Python 3.

### Crear un EmailMessage básico

\`\`\`python
from email.message import EmailMessage

msg = EmailMessage()
msg["Subject"] = "Asunto del correo"
msg["From"] = "remitente@ejemplo.com"
msg["To"] = "destinatario@ejemplo.com"
msg.set_content("Contenido del correo en texto plano.")
\`\`\`

### Campos del mensaje

| Campo | Descripción |
|-------|-------------|
| \`Subject\` | Asunto del correo |
| \`From\` | Remitente (nombre y/o email) |
| \`To\` | Destinatario(s) |
| \`Cc\` | Con copia |
| \`Bcc\` | Con copia oculta |
| \`Reply-To\` | Email de respuesta diferente |
| \`Date\` | Fecha (se agrega automáticamente) |

### Remitente con nombre visible

\`\`\`python
msg["From"] = "Mi Sistema <mi_correo@gmail.com>"
# El destinatario verá: "Mi Sistema" como remitente
\`\`\`

### Texto plano y HTML

\`\`\`python
from email.message import EmailMessage

msg = EmailMessage()
msg["Subject"] = "Reporte de ventas"
msg["From"] = "sistema@empresa.com"
msg["To"] = "gerente@empresa.com"

# Primero estableces el texto plano
msg.set_content("Las ventas del mes fueron $10,000.")

# Luego agregas la versión HTML como alternativa
msg.add_alternative("""
<html>
  <body>
    <h2>Reporte de ventas</h2>
    <p>Las ventas del mes fueron <strong>$10,000</strong>.</p>
  </body>
</html>
""", subtype="html")
\`\`\`

El cliente de correo mostrará el HTML si puede, y el texto plano como fallback.

### EmailMessage vs MIMEText (el método antiguo)

\`\`\`python
# Método antiguo (Python 2 / código legacy):
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

msg = MIMEMultipart("alternative")
msg["Subject"] = "Asunto"
parte_texto = MIMEText("Texto plano", "plain")
parte_html = MIMEText("<b>HTML</b>", "html")
msg.attach(parte_texto)
msg.attach(parte_html)

# Método moderno (Python 3.6+) — RECOMENDADO:
from email.message import EmailMessage

msg = EmailMessage()
msg["Subject"] = "Asunto"
msg.set_content("Texto plano")
msg.add_alternative("<b>HTML</b>", subtype="html")
\`\`\`

### Enviar con smtplib

\`\`\`python
import smtplib
import os

with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(os.environ.get("EMAIL"), os.environ.get("PASSWORD"))
    smtp.send_message(msg)  # send_message acepta EmailMessage directamente
\`\`\``,
    codeExample: `from email.message import EmailMessage
import smtplib
import os
from datetime import datetime

# --- Ejemplo 1: correo básico bien formateado ---
def crear_correo_basico():
    msg = EmailMessage()
    msg["Subject"] = "Bienvenido al curso de Python"
    msg["From"] = "Curso Python <noreply@cursopython.com>"
    msg["To"] = "estudiante@ejemplo.com"
    msg["Cc"] = "soporte@cursopython.com"  # Con copia

    msg.set_content(
        "Hola,\\n\\n"
        "¡Bienvenido al Curso de Python desde Cero!\\n\\n"
        "Tu cuenta ha sido creada exitosamente.\\n"
        "Puedes comenzar en: https://cursopython.com\\n\\n"
        "Saludos,\\n"
        "El equipo de Curso Python"
    )
    return msg

# --- Ejemplo 2: correo con texto plano y HTML ---
def crear_correo_con_html(nombre_usuario: str, total_ventas: float):
    msg = EmailMessage()
    msg["Subject"] = f"Reporte de ventas — {datetime.now().strftime('%B %Y')}"
    msg["From"] = "Sistema de Reportes <reportes@empresa.com>"
    msg["To"] = "gerente@empresa.com"

    # Texto plano (fallback para clientes que no soportan HTML)
    texto_plano = (
        f"Reporte de Ventas\\n"
        f"{'='*30}\\n"
        f"Usuario: {nombre_usuario}\\n"
        f"Total: \${total_ventas:,.2f}\\n"
        f"Fecha: {datetime.now().strftime('%d/%m/%Y')}\\n"
    )
    msg.set_content(texto_plano)

    # HTML (versión rica)
    html_content = f"""
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #2c3e50;">Reporte de Ventas</h2>
        <table border="1" cellpadding="8" style="border-collapse: collapse;">
          <tr style="background-color: #3498db; color: white;">
            <th>Campo</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td>Usuario</td>
            <td><strong>{nombre_usuario}</strong></td>
          </tr>
          <tr>
            <td>Total de ventas</td>
            <td style="color: green;"><strong>\${total_ventas:,.2f}</strong></td>
          </tr>
          <tr>
            <td>Fecha</td>
            <td>{datetime.now().strftime('%d de %B, %Y')}</td>
          </tr>
        </table>
        <p style="color: #7f8c8d; font-size: 12px;">
          Este es un correo automático. No responder a este mensaje.
        </p>
      </body>
    </html>
    """
    msg.add_alternative(html_content, subtype="html")
    return msg


# --- Demo ---
print("=== Correo básico ===")
correo1 = crear_correo_basico()
print(f"De: {correo1['From']}")
print(f"Para: {correo1['To']}")
print(f"Con copia: {correo1['Cc']}")
print(f"Asunto: {correo1['Subject']}")
print(f"Partes del mensaje: {len(correo1.get_payload())}")

print("\\n=== Correo con HTML ===")
correo2 = crear_correo_con_html("Ana García", 15750.50)
print(f"Asunto: {correo2['Subject']}")
# El mensaje tiene dos partes: texto plano + HTML
payload = correo2.get_payload()
print(f"Tiene {len(payload)} versiones (texto plano + HTML)")`,
    keyPoints: [
      'EmailMessage es la clase moderna y recomendada de Python 3 para construir correos',
      'Los campos From, To, Subject se configuran como un diccionario: msg["Subject"] = "..."',
      'set_content() establece el cuerpo de texto plano del correo',
      'add_alternative(html, subtype="html") agrega la versión HTML como alternativa al texto plano',
      'Los clientes de correo muestran HTML si pueden, y texto plano como fallback',
      'EmailMessage reemplaza el enfoque antiguo con MIMEText y MIMEMultipart',
    ],
    exercise: {
      description: 'Crea una función crear_correo_bienvenida(nombre, email, plan) que devuelva un EmailMessage con: asunto personalizado con el nombre, texto plano como fallback y HTML con una tabla mostrando el nombre, email y plan del usuario. El HTML debe tener un color de encabezado y estilos básicos inline. No lo envíes aún, solo crea el objeto EmailMessage y muestra sus propiedades.',
      hint: 'Usa f-strings para personalizar el asunto y el contenido HTML. Para la tabla HTML: <table><tr><th>Campo</th><th>Valor</th></tr>. Recuerda usar set_content() para el texto plano primero, y luego add_alternative(html, subtype="html") para el HTML.',
    },
    quiz: [
      {
        question: '¿Cuál es la forma moderna de crear un correo en Python 3?',
        options: [
          'from email.mime.multipart import MIMEMultipart',
          'from email.message import EmailMessage',
          'import smtplib; smtplib.Message()',
          'from mail import Message',
        ],
        correctAnswer: 'from email.message import EmailMessage',
        correctFeedback: '¡Correcto! EmailMessage es la clase moderna de Python 3. MIMEText/MIMEMultipart son el enfoque antiguo que aún funciona pero es más verboso.',
        incorrectFeedback: 'EmailMessage (from email.message import EmailMessage) es la clase recomendada en Python 3. MIMEText y MIMEMultipart son APIs más antiguas que siguen funcionando pero son más complejas.',
      },
      {
        question: '¿Cómo se agrega el cuerpo HTML a un EmailMessage que ya tiene texto plano?',
        options: [
          'msg["Html"] = html_content',
          'msg.set_html(html_content)',
          'msg.add_alternative(html_content, subtype="html")',
          'msg.attach(html_content)',
        ],
        correctAnswer: 'msg.add_alternative(html_content, subtype="html")',
        correctFeedback: '¡Correcto! add_alternative() agrega el HTML como alternativa al texto plano. El cliente de correo elige cuál mostrar (normalmente el HTML si puede).',
        incorrectFeedback: 'msg.add_alternative(html_content, subtype="html") agrega el HTML como alternativa. El texto plano se establece primero con set_content(), luego el HTML con add_alternative().',
      },
      {
        question: '¿Para qué sirve incluir texto plano cuando también envías HTML?',
        options: [
          'No sirve para nada, solo el HTML importa',
          'Es obligatorio por ley',
          'Como fallback para clientes que no soportan HTML (como terminales o clientes de texto)',
          'Para reducir el tamaño del correo',
        ],
        correctAnswer: 'Como fallback para clientes que no soportan HTML (como terminales o clientes de texto)',
        correctFeedback: '¡Correcto! No todos los clientes de correo muestran HTML. Los filtros anti-spam, lectores de pantalla y clientes minimalistas usan el texto plano.',
        incorrectFeedback: 'El texto plano es el fallback: si el cliente no soporta HTML, muestra el texto plano. También es útil para anti-spam y accesibilidad.',
      },
      {
        question: '¿Cómo se muestra un nombre visible en el remitente en vez de solo el email?',
        options: [
          'msg["FromName"] = "Mi Sistema"',
          'msg["From"] = "Mi Sistema <correo@ej.com>"',
          'msg.set_sender("Mi Sistema", "correo@ej.com")',
          'No es posible cambiar el nombre visible',
        ],
        correctAnswer: 'msg["From"] = "Mi Sistema <correo@ej.com>"',
        correctFeedback: '¡Correcto! El formato estándar es: "Nombre Visible <email@dominio.com>". El destinatario verá "Nombre Visible" como remitente.',
        incorrectFeedback: 'El formato para nombre visible es: msg["From"] = "Nombre Visible <email@dominio.com>". Los clientes de correo muestran el nombre en vez del email.',
      },
      {
        question: '¿Qué campo se usa para enviar con copia oculta (que el destinatario no vea)?',
        options: [
          'msg["HiddenCc"] = "..."',
          'msg["Bcc"] = "..."',
          'msg["Secret"] = "..."',
          'msg["Cc"] = "..." con la palabra oculto',
        ],
        correctAnswer: 'msg["Bcc"] = "..."',
        correctFeedback: '¡Correcto! Bcc (Blind Carbon Copy) envía una copia al destinatario sin que los otros destinatarios lo vean. Cc (Carbon Copy) es visible para todos.',
        incorrectFeedback: 'Bcc (Blind Carbon Copy) es copia oculta — los otros destinatarios no la ven. Cc (Carbon Copy) es copia visible para todos.',
      },
      {
        question: '¿Qué método de smtplib acepta directamente un objeto EmailMessage?',
        options: [
          'smtp.send(msg)',
          'smtp.send_message(msg)',
          'smtp.sendmail(msg)',
          'smtp.emit(msg)',
        ],
        correctAnswer: 'smtp.send_message(msg)',
        correctFeedback: '¡Correcto! smtp.send_message(msg) acepta directamente un objeto EmailMessage (o MIMEBase). Es el método moderno y recomendado.',
        incorrectFeedback: 'smtp.send_message(msg) acepta objetos EmailMessage directamente. El método antiguo smtp.sendmail() requiere pasar el email como string, lo cual es más complejo.',
      },
    ],
  },
  {
    slug: 'correos-html',
    title: 'Enviar correos HTML',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 125,
    description: 'Aprende a enviar correos con formato HTML para crear mensajes más visuales.',
    explanation: `## Enviar correos HTML

Los correos HTML permiten crear mensajes visualmente atractivos con colores, tablas, botones y formato. Son ideales para reportes, boletines y notificaciones profesionales.

### Crear un correo HTML completo

\`\`\`python
from email.message import EmailMessage

msg = EmailMessage()
msg["Subject"] = "Reporte semanal"
msg["From"] = "sistema@empresa.com"
msg["To"] = "gerente@empresa.com"

# Texto plano (fallback)
msg.set_content("Reporte semanal. Ventas: $5,000. Ver HTML para detalles.")

# Versión HTML
html = """
<html>
<body>
  <h1 style="color: #2c3e50;">Reporte Semanal</h1>
  <p>Aquí están los resultados de esta semana:</p>
  <table>
    <tr><th>Producto</th><th>Ventas</th></tr>
    <tr><td>Producto A</td><td>$2,000</td></tr>
    <tr><td>Producto B</td><td>$3,000</td></tr>
  </table>
</body>
</html>
"""
msg.add_alternative(html, subtype="html")
\`\`\`

### Buenas prácticas para HTML en correos

A diferencia de las páginas web, los correos HTML tienen restricciones:

1. **Usa estilos inline** — la mayoría de clientes ignoran \`<style>\`
2. **Evita JavaScript** — los clientes lo bloquean
3. **Tablas para diseño** — los clientes no soportan CSS grid/flexbox bien
4. **Prueba en múltiples clientes** — Gmail, Outlook y Apple Mail tienen diferencias

### Tabla HTML típica para reportes

\`\`\`html
<table border="1" cellpadding="10" cellspacing="0"
       style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="background-color: #3498db; color: white;">
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background-color: #f9f9f9;">Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </tbody>
</table>
\`\`\`

### Generar HTML dinámicamente con Python

\`\`\`python
def generar_tabla_html(datos: list[dict], columnas: list[str]) -> str:
    filas_html = ""
    for i, fila in enumerate(datos):
        color_fila = "#f9f9f9" if i % 2 == 0 else "#ffffff"
        celdas = "".join(
            f"<td style='padding:8px; background:{color_fila};'>{fila.get(col, '')}</td>"
            for col in columnas
        )
        filas_html += f"<tr>{celdas}</tr>"

    encabezados = "".join(
        f"<th style='padding:10px; background:#2c3e50; color:white;'>{col}</th>"
        for col in columnas
    )

    return f"""
    <table style='border-collapse:collapse; width:100%;'>
        <thead><tr>{encabezados}</tr></thead>
        <tbody>{filas_html}</tbody>
    </table>
    """
\`\`\`

### Ejemplo de reporte de ventas completo

\`\`\`python
ventas = [
    {"producto": "Libro Python", "cantidad": 15, "total": 375.00},
    {"producto": "Teclado", "cantidad": 8, "total": 712.00},
]
tabla = generar_tabla_html(ventas, ["producto", "cantidad", "total"])
\`\`\``,
    codeExample: `from email.message import EmailMessage
import smtplib
import os

def generar_tabla_html(filas: list, columnas: list) -> str:
    """Genera una tabla HTML a partir de una lista de diccionarios."""
    encabezados = "".join(
        f"<th style='padding:10px 15px; background-color:#2c3e50; "
        f"color:white; text-align:left;'>{col.replace('_', ' ').title()}</th>"
        for col in columnas
    )

    filas_html = ""
    for i, fila in enumerate(filas):
        bg = "#f8f9fa" if i % 2 == 0 else "#ffffff"
        celdas = "".join(
            f"<td style='padding:10px 15px; border-bottom:1px solid #dee2e6; "
            f"background-color:{bg};'>{fila.get(col, '-')}</td>"
            for col in columnas
        )
        filas_html += f"<tr>{celdas}</tr>"

    return f"""
    <table style='border-collapse:collapse; width:100%; font-family:Arial,sans-serif;'>
        <thead><tr>{encabezados}</tr></thead>
        <tbody>{filas_html}</tbody>
    </table>
    """


def crear_reporte_html(titulo: str, datos: list, columnas: list, resumen: dict) -> EmailMessage:
    """Crea un correo HTML con tabla de datos y resumen."""
    msg = EmailMessage()
    msg["Subject"] = f"📊 {titulo}"
    msg["From"] = "Reportes Automáticos <reportes@empresa.com>"
    msg["To"] = "gerente@empresa.com"

    # Texto plano como fallback
    lineas_texto = [f"{titulo}", "=" * 40]
    for fila in datos:
        linea = " | ".join(str(fila.get(col, "")) for col in columnas)
        lineas_texto.append(linea)
    lineas_texto.append(f"\\nResumen: {resumen}")
    msg.set_content("\\n".join(lineas_texto))

    # HTML completo
    tabla = generar_tabla_html(datos, columnas)
    items_resumen = "".join(
        f"<li><strong>{k}:</strong> {v}</li>"
        for k, v in resumen.items()
    )

    html = f"""
    <html>
    <body style='font-family: Arial, sans-serif; padding: 20px; color: #333;'>
        <div style='max-width: 700px; margin: 0 auto;'>
            <h1 style='color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;'>
                {titulo}
            </h1>
            {tabla}
            <div style='background-color:#eaf4fb; padding:15px; border-radius:5px; margin-top:20px;'>
                <h3 style='color:#2980b9; margin-top:0;'>Resumen</h3>
                <ul>{items_resumen}</ul>
            </div>
            <p style='color:#95a5a6; font-size:12px; margin-top:20px;'>
                Este correo fue generado automáticamente. No responder.
            </p>
        </div>
    </body>
    </html>
    """
    msg.add_alternative(html, subtype="html")
    return msg


# --- Demo ---
datos_ventas = [
    {"producto": "Libro Python", "cantidad": 15, "precio_unit": "$25.00", "total": "$375.00"},
    {"producto": "Teclado mecánico", "cantidad": 8, "precio_unit": "$89.00", "total": "$712.00"},
    {"producto": "Monitor 24'", "cantidad": 3, "precio_unit": "$350.00", "total": "$1,050.00"},
]
columnas = ["producto", "cantidad", "precio_unit", "total"]
resumen = {
    "Total de ventas": "$2,137.00",
    "Productos vendidos": 26,
    "Fecha del reporte": "11/05/2026",
}

correo = crear_reporte_html("Reporte de Ventas — Mayo 2026", datos_ventas, columnas, resumen)
print(f"Correo creado: {correo['Subject']}")
print(f"De: {correo['From']}")
print(f"Para: {correo['To']}")
print(f"\\nPartes del mensaje: {len(correo.get_payload())} (texto plano + HTML)")
print("\\nVista previa del texto plano:")
print(correo.get_body(preferencelist=("plain",)).get_content())`,
    keyPoints: [
      'Los correos HTML se crean con set_content() para texto plano y add_alternative(html, subtype="html") para HTML',
      'En HTML de correos usa siempre estilos inline — los clientes de correo ignoran las hojas de estilo externas',
      'Genera HTML dinámicamente con f-strings para crear tablas y reportes personalizados',
      'Las filas de colores alternos (zebra striping) mejoran la legibilidad de las tablas',
      'Incluye siempre una versión de texto plano como fallback para clientes sin soporte HTML',
    ],
    exercise: {
      description: 'Crea una función generar_reporte_inventario(productos) que reciba una lista de diccionarios con campos (nombre, stock_actual, stock_minimo, estado) y devuelva un objeto EmailMessage con HTML. La tabla debe colorear en rojo las filas donde stock_actual < stock_minimo. Incluye un resumen al final con el total de productos y cuántos están en nivel crítico.',
      hint: 'Para el color condicional, compara fila["stock_actual"] < fila["stock_minimo"] y asigna background-color:#ffcccc (rojo claro) a esas filas. Para contar los críticos: len([p for p in productos if p["stock_actual"] < p["stock_minimo"]]).',
    },
    quiz: [
      {
        question: '¿Por qué se deben usar estilos inline (style="...") en HTML de correos en vez de una hoja de estilo?',
        options: [
          'Porque inline es más rápido de procesar',
          'Porque la mayoría de clientes de correo no soportan hojas de estilo externas ni la etiqueta <style>',
          'Porque Python no puede incluir archivos CSS',
          'Por estándar de la industria de correos',
        ],
        correctAnswer: 'Porque la mayoría de clientes de correo no soportan hojas de estilo externas ni la etiqueta <style>',
        correctFeedback: '¡Correcto! Gmail, Outlook y otros clientes de correo tienen soporte limitado de CSS. Los estilos inline garantizan que el diseño se vea igual en todos los clientes.',
        incorrectFeedback: 'Los clientes de correo (especialmente Outlook) tienen soporte muy limitado de CSS. Los estilos inline son la única forma confiable de dar formato en correos HTML.',
      },
      {
        question: '¿Qué técnica de Python se usa típicamente para generar filas de una tabla HTML con datos dinámicos?',
        options: [
          'Abrir un archivo HTML y editarlo',
          'Usar f-strings dentro de bucles for para construir el HTML',
          'Importar una librería de plantillas obligatoria',
          'Copiar y pegar el HTML manualmente',
        ],
        correctAnswer: 'Usar f-strings dentro de bucles for para construir el HTML',
        correctFeedback: '¡Correcto! Los f-strings y los bucles for son la forma más directa de generar HTML dinámico. Para proyectos más grandes se usa Jinja2, pero f-strings son perfectos para esto.',
        incorrectFeedback: 'Los f-strings con bucles for son la forma más directa de generar HTML dinámico en Python. Para proyectos complejos se usa Jinja2, pero f-strings son suficientes para correos.',
      },
      {
        question: '¿Qué es el "zebra striping" en tablas HTML?',
        options: [
          'Un patrón visual para ocultar datos sensibles',
          'Filas de colores alternos para mejorar la legibilidad',
          'Una técnica para ordenar filas automáticamente',
          'Agregar bordes a cada celda',
        ],
        correctAnswer: 'Filas de colores alternos para mejorar la legibilidad',
        correctFeedback: '¡Correcto! El zebra striping alterna colores en las filas (blanco/gris) para que sea más fácil seguir cada fila horizontalmente en tablas con muchos datos.',
        incorrectFeedback: 'El zebra striping es alternar colores en filas (generalmente blanco y gris claro) para mejorar la legibilidad. Se logra con `i % 2 == 0` para filas pares e impares.',
      },
      {
        question: '¿Cuál es el orden correcto para crear un correo con texto plano y HTML?',
        options: [
          'add_alternative(html) → set_content(texto)',
          'set_content(texto) → add_alternative(html, subtype="html")',
          'El orden no importa',
          'Solo se puede usar uno de los dos',
        ],
        correctAnswer: 'set_content(texto) → add_alternative(html, subtype="html")',
        correctFeedback: '¡Correcto! Primero estableces el texto plano con set_content(), luego agregas el HTML con add_alternative(). El orden importa para que el mensaje se estructure correctamente.',
        incorrectFeedback: 'El orden correcto es: primero set_content(texto_plano), luego add_alternative(html, subtype="html"). Si lo haces al revés, la estructura del mensaje puede ser incorrecta.',
      },
      {
        question: '¿Por qué no se debe usar JavaScript en HTML de correos?',
        options: [
          'Porque Python no puede generar JavaScript',
          'Porque JavaScript hace los correos más pesados',
          'Porque los clientes de correo bloquean JavaScript por seguridad',
          'Porque solo funciona en navegadores web',
        ],
        correctAnswer: 'Porque los clientes de correo bloquean JavaScript por seguridad',
        correctFeedback: '¡Correcto! Los clientes de correo (Gmail, Outlook, etc.) bloquean JavaScript por razones de seguridad — podría usarse para ataques. El HTML de correos debe ser estático.',
        incorrectFeedback: 'Los clientes de correo bloquean JavaScript por seguridad, ya que podría usarse para ejecutar código malicioso. El HTML en correos debe ser completamente estático.',
      },
    ],
  },
  {
    slug: 'adjuntar-archivos-correo',
    title: 'Adjuntar archivos a un correo',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 126,
    description: 'Aprende a enviar archivos adjuntos desde Python.',
    explanation: `## Adjuntar archivos a un correo

Enviar archivos adjuntos (reportes CSV, PDFs, imágenes) es una necesidad común en automatización. Con \`EmailMessage\` es sencillo.

### Adjuntar un archivo

\`\`\`python
from email.message import EmailMessage
import mimetypes

msg = EmailMessage()
msg["Subject"] = "Reporte adjunto"
msg["From"] = "sistema@empresa.com"
msg["To"] = "gerente@empresa.com"
msg.set_content("Adjunto el reporte de ventas en CSV.")

# Adjuntar un archivo CSV
with open("reporte_ventas.csv", "rb") as f:
    datos_archivo = f.read()

msg.add_attachment(
    datos_archivo,
    maintype="text",
    subtype="csv",
    filename="reporte_ventas.csv"
)
\`\`\`

### Detectar el tipo MIME automáticamente

\`\`\`python
import mimetypes

def adjuntar_archivo(msg: EmailMessage, ruta_archivo: str):
    """Adjunta un archivo detectando su tipo MIME automáticamente."""
    tipo_mime, _ = mimetypes.guess_type(ruta_archivo)

    if tipo_mime is None:
        tipo_mime = "application/octet-stream"

    maintype, subtype = tipo_mime.split("/", 1)

    with open(ruta_archivo, "rb") as f:
        msg.add_attachment(
            f.read(),
            maintype=maintype,
            subtype=subtype,
            filename=ruta_archivo.split("/")[-1]  # Solo el nombre del archivo
        )
\`\`\`

### Tipos MIME comunes

| Tipo de archivo | maintype | subtype |
|-----------------|----------|---------|
| CSV | text | csv |
| PDF | application | pdf |
| Excel (.xlsx) | application | vnd.openxmlformats-officedocument.spreadsheetml.sheet |
| Imagen PNG | image | png |
| Imagen JPG | image | jpeg |
| ZIP | application | zip |
| Texto plano | text | plain |

### Adjuntar múltiples archivos

\`\`\`python
archivos = ["reporte.csv", "graficos.pdf", "resumen.txt"]

for ruta in archivos:
    adjuntar_archivo(msg, ruta)
\`\`\`

### Errores comunes

\`\`\`python
import os

def adjuntar_seguro(msg, ruta):
    # Verificar que el archivo existe
    if not os.path.exists(ruta):
        raise FileNotFoundError(f"No se encontró el archivo: {ruta}")

    # Verificar que no es un directorio
    if os.path.isdir(ruta):
        raise ValueError(f"La ruta es un directorio, no un archivo: {ruta}")

    # Verificar tamaño (algunos servidores limitan a 25MB)
    tamanio_mb = os.path.getsize(ruta) / (1024 * 1024)
    if tamanio_mb > 25:
        raise ValueError(f"Archivo demasiado grande: {tamanio_mb:.1f}MB (máx 25MB)")

    adjuntar_archivo(msg, ruta)
\`\`\``,
    codeExample: `from email.message import EmailMessage
import mimetypes
import os
import csv
import io

# ============================================================
# Ejemplo: crear CSV en memoria y adjuntarlo sin guardar en disco
# ============================================================

def crear_csv_en_memoria(datos: list, columnas: list) -> bytes:
    """Crea un CSV en memoria y lo devuelve como bytes."""
    salida = io.StringIO()
    escritor = csv.DictWriter(salida, fieldnames=columnas)
    escritor.writeheader()
    escritor.writerows(datos)
    return salida.getvalue().encode("utf-8")


def adjuntar_archivo(msg: EmailMessage, ruta_archivo: str) -> None:
    """Adjunta un archivo a un EmailMessage detectando el tipo MIME."""
    if not os.path.exists(ruta_archivo):
        raise FileNotFoundError(f"Archivo no encontrado: {ruta_archivo}")

    tipo_mime, _ = mimetypes.guess_type(ruta_archivo)
    if tipo_mime is None:
        tipo_mime = "application/octet-stream"

    maintype, subtype = tipo_mime.split("/", 1)
    nombre_archivo = os.path.basename(ruta_archivo)

    with open(ruta_archivo, "rb") as f:
        msg.add_attachment(
            f.read(),
            maintype=maintype,
            subtype=subtype,
            filename=nombre_archivo,
        )
    print(f"✓ Adjuntado: {nombre_archivo} ({tipo_mime})")


def crear_correo_con_reporte(datos_ventas: list) -> EmailMessage:
    """Crea un correo con el reporte adjunto como CSV."""
    msg = EmailMessage()
    msg["Subject"] = "Reporte de ventas — adjunto CSV"
    msg["From"] = "reportes@empresa.com"
    msg["To"] = "gerente@empresa.com"
    msg.set_content(
        "Hola,\\n\\n"
        "Adjunto el reporte de ventas en formato CSV.\\n"
        f"Total de registros: {len(datos_ventas)}\\n\\n"
        "Saludos,\\nSistema de reportes"
    )

    # Crear CSV en memoria (no guarda en disco)
    columnas = ["producto", "cantidad", "precio_unit", "total"]
    csv_bytes = crear_csv_en_memoria(datos_ventas, columnas)

    msg.add_attachment(
        csv_bytes,
        maintype="text",
        subtype="csv",
        filename="reporte_ventas.csv",
    )
    return msg


# --- Demo ---
datos = [
    {"producto": "Libro Python", "cantidad": 15, "precio_unit": 25.00, "total": 375.00},
    {"producto": "Teclado", "cantidad": 8, "precio_unit": 89.00, "total": 712.00},
    {"producto": "Mouse", "cantidad": 12, "precio_unit": 35.00, "total": 420.00},
]

correo = crear_correo_con_reporte(datos)
print(f"Correo listo: {correo['Subject']}")

# Verificar que el adjunto está en el mensaje
partes = correo.get_payload()
print(f"Partes del mensaje: {len(partes)}")
for i, parte in enumerate(partes):
    content_type = parte.get_content_type()
    filename = parte.get_filename()
    print(f"  Parte {i+1}: {content_type}" + (f" — {filename}" if filename else ""))

# Verificar tipos MIME comunes
print("\\n=== Tipos MIME detectados ===")
tipos_prueba = ["reporte.csv", "imagen.png", "documento.pdf", "datos.xlsx"]
for archivo in tipos_prueba:
    tipo, _ = mimetypes.guess_type(archivo)
    print(f"  {archivo}: {tipo or 'application/octet-stream'}")`,
    keyPoints: [
      'msg.add_attachment(bytes, maintype=..., subtype=..., filename=...) adjunta un archivo al correo',
      'Los archivos deben abrirse en modo binario "rb" para obtener los bytes necesarios',
      'mimetypes.guess_type(ruta) detecta automáticamente el tipo MIME de un archivo',
      'Puedes crear archivos en memoria (io.StringIO, io.BytesIO) sin necesidad de guardarlos en disco',
      'Verifica siempre que el archivo existe y no supera el límite de tamaño del servidor (generalmente 25MB)',
      'Para múltiples adjuntos, llama add_attachment() varias veces en el mismo mensaje',
    ],
    exercise: {
      description: 'Escribe una función enviar_backup_datos(datos, email_destino) que: (1) cree un CSV en memoria con los datos (una lista de diccionarios), (2) cree un EmailMessage con un asunto que incluya la fecha actual (datetime.now().strftime("%d/%m/%Y")), (3) adjunte el CSV, (4) también adjunte un archivo de texto plano con un resumen que muestre cuántos registros hay. Imprime las propiedades del mensaje pero no lo envíes realmente.',
      hint: 'Para crear texto en bytes: "Resumen: N registros".encode("utf-8"). Para el CSV en memoria usa io.StringIO() y csv.DictWriter. El maintype para texto es "text" y el subtype es "plain" para texto o "csv" para CSV.',
    },
    quiz: [
      {
        question: '¿En qué modo se debe abrir un archivo para obtener los bytes necesarios para add_attachment()?',
        options: ['Modo texto: open(ruta, "r")', 'Modo binario: open(ruta, "rb")', 'Modo append: open(ruta, "a")', 'Modo escritura: open(ruta, "w")'],
        correctAnswer: 'Modo binario: open(ruta, "rb")',
        correctFeedback: '¡Correcto! add_attachment() espera bytes, no strings. El modo "rb" (read binary) lee el archivo como bytes, que es lo que necesitas para adjuntar cualquier tipo de archivo.',
        incorrectFeedback: 'add_attachment() requiere bytes. El modo "rb" (read binary) lee el archivo como bytes. El modo "r" devuelve texto (string), que no sirve para adjuntos.',
      },
      {
        question: '¿Para qué sirve mimetypes.guess_type(ruta_archivo)?',
        options: [
          'Para verificar si el archivo existe',
          'Para detectar automáticamente el tipo MIME basándose en la extensión del archivo',
          'Para comprimir el archivo antes de adjuntarlo',
          'Para leer el contenido del archivo',
        ],
        correctAnswer: 'Para detectar automáticamente el tipo MIME basándose en la extensión del archivo',
        correctFeedback: '¡Correcto! mimetypes.guess_type("reporte.csv") devuelve ("text/csv", None). La extensión del archivo determina el tipo MIME, evitando que lo especifiques manualmente.',
        incorrectFeedback: 'mimetypes.guess_type() deduce el tipo MIME de un archivo por su extensión. Por ejemplo, .csv → "text/csv", .pdf → "application/pdf". Devuelve (tipo_mime, encoding).',
      },
      {
        question: '¿Cuál es la ventaja de crear el CSV en memoria con io.StringIO() en vez de guardarlo en disco?',
        options: [
          'Es más rápido',
          'Evita crear archivos temporales y mantiene el directorio limpio',
          'Los correos no pueden tener archivos del disco',
          'io.StringIO permite archivos más grandes',
        ],
        correctAnswer: 'Evita crear archivos temporales y mantiene el directorio limpio',
        correctFeedback: '¡Correcto! Crear datos en memoria evita crear, usar y borrar archivos temporales. El código es más limpio y no hay riesgo de dejar archivos huérfanos.',
        incorrectFeedback: 'Crear datos en memoria con io.StringIO() evita escribir archivos temporales al disco. El código es más limpio, no necesita permisos de escritura y no deja archivos residuales.',
      },
      {
        question: '¿Qué tipo MIME se usa para un archivo Excel (.xlsx)?',
        options: [
          'application/excel',
          'text/spreadsheet',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/msexcel',
        ],
        correctAnswer: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        correctFeedback: '¡Correcto! Es largo pero es el tipo MIME estándar para archivos Excel (.xlsx). mimetypes.guess_type() lo detecta automáticamente.',
        incorrectFeedback: 'El tipo MIME oficial para Excel .xlsx es application/vnd.openxmlformats-officedocument.spreadsheetml.sheet. Es largo, por eso mimetypes.guess_type() es tan útil.',
      },
      {
        question: '¿Qué limitación de tamaño suelen tener los archivos adjuntos en correos?',
        options: ['1 MB', '10 MB', '25 MB (aproximadamente)', '100 MB'],
        correctAnswer: '25 MB (aproximadamente)',
        correctFeedback: '¡Correcto! Gmail y otros proveedores limitan adjuntos a 25MB. Si el archivo es mayor, debes subirlo a Drive/Dropbox y compartir el enlace en el correo.',
        incorrectFeedback: 'La mayoría de proveedores limita adjuntos a ~25MB. Para archivos grandes, la alternativa es subirlos a almacenamiento en la nube y enviar el enlace.',
      },
      {
        question: '¿Cómo adjuntas múltiples archivos a un mismo correo?',
        options: [
          'Creando un correo por cada archivo',
          'Usando un campo especial "Attachments" en el mensaje',
          'Llamando add_attachment() varias veces en el mismo objeto EmailMessage',
          'Combinando todos los archivos en uno antes de adjuntar',
        ],
        correctAnswer: 'Llamando add_attachment() varias veces en el mismo objeto EmailMessage',
        correctFeedback: '¡Correcto! Puedes llamar add_attachment() tantas veces como necesites en el mismo objeto EmailMessage. Cada llamada agrega un adjunto más al correo.',
        incorrectFeedback: 'Para múltiples adjuntos, llamas add_attachment() varias veces: una por archivo. Cada llamada agrega un adjunto al mismo mensaje.',
      },
    ],
  },
  {
    slug: 'seguridad-credenciales',
    title: 'Seguridad al manejar credenciales',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 127,
    description: 'Aprende a proteger contraseñas y claves usando variables de entorno y buenas prácticas.',
    explanation: `## Seguridad al manejar credenciales

Esta es la lección más importante del módulo. Las credenciales expuestas son una de las vulnerabilidades más comunes y costosas.

### ¿Por qué es crítico?

Cuando subes código a GitHub con contraseñas:

1. **Bots actúan en minutos** — existen bots que escanean GitHub en tiempo real
2. **El historial guarda todo** — borrar el archivo no basta, la contraseña sigue en el historial de git
3. **Consecuencias reales**: cargos económicos, datos comprometidos, cuenta bloqueada
4. **Los casos son reales** — es un problema que ocurre a diario con desarrolladores de todos los niveles

### ❌ LO QUE NUNCA DEBES HACER

\`\`\`python
# ❌ Credencial directa en el código
EMAIL_PASSWORD = "mi_contraseña_real_123"

# ❌ Credencial en un comentario
# Password: mi_contraseña

# ❌ Credencial como variable "segura" (sigue estando en el código)
SECRET = "abc123xyz"
\`\`\`

### ✅ LA FORMA CORRECTA

\`\`\`python
import os
from dotenv import load_dotenv

load_dotenv()  # Carga el archivo .env

EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")
if not EMAIL_PASSWORD:
    raise ValueError("Configura EMAIL_PASSWORD en las variables de entorno")
\`\`\`

### Archivo .env

\`\`\`
# .env — NUNCA subir a git
EMAIL_ORIGEN=mi_correo@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
DATABASE_URL=postgresql://usuario:contraseña@host:5432/db
API_KEY=sk-abc123xyz456
\`\`\`

### .gitignore obligatorio

\`\`\`
# .gitignore
.env
.env.local
.env.production
*.env
__pycache__/
venv/
\`\`\`

### Si accidentalmente subiste una credencial

1. **Inmediatamente**: revoca/cambia la contraseña en el servicio (Gmail, API, etc.)
2. **Elimina el secreto del código** y haz un nuevo commit
3. **Limpia el historial** (opcional, complejo):
   \`\`\`bash
   git filter-branch --force --index-filter \\
   'git rm --cached --ignore-unmatch archivo_con_secreto.py' \\
   --prune-empty --tag-name-filter cat -- --all
   \`\`\`
4. **Revisa los logs** del servicio para detectar accesos no autorizados

### App Passwords vs contraseña normal

Gmail no permite usar tu contraseña normal en scripts. Las **App Passwords** son más seguras porque:

- Son específicas para una aplicación
- No dan acceso completo a tu cuenta
- Pueden revocarse individualmente sin cambiar tu contraseña principal

### 2FA — Verificación en dos pasos

Activa siempre la verificación en dos pasos en cuentas que usas para automatización:
- Protege tu cuenta aunque alguien obtenga la contraseña
- Es requisito para crear App Passwords en Gmail
- Disponible en Gmail, GitHub, AWS, etc.

### python-dotenv en producción

\`\`\`python
from dotenv import load_dotenv, find_dotenv

# Carga el .env más cercano en la jerarquía de directorios
load_dotenv(find_dotenv())
\`\`\``,
    codeExample: `import os
from pathlib import Path

# ============================================================
# Lección de seguridad: manejo correcto de credenciales
# ============================================================

# --- 1. Verificar configuración de variables de entorno ---
def verificar_configuracion() -> dict:
    """Verifica que todas las variables requeridas estén configuradas."""
    variables_requeridas = {
        "EMAIL_ORIGEN": "Correo de origen para el envío",
        "EMAIL_PASSWORD": "App Password de Gmail (16 caracteres)",
        "EMAIL_DESTINO": "Correo de destino por defecto",
    }

    variables_opcionales = {
        "SMTP_HOST": ("smtp.gmail.com", "Servidor SMTP"),
        "SMTP_PORT": ("465", "Puerto SMTP"),
    }

    print("=== Verificación de configuración ===\\n")

    estado = {"ok": True, "faltantes": [], "presentes": []}

    for var, descripcion in variables_requeridas.items():
        valor = os.environ.get(var)
        if valor:
            # Mostrar solo parcialmente por seguridad
            if "PASSWORD" in var or "KEY" in var or "SECRET" in var:
                visible = "*" * (len(valor) - 4) + valor[-4:] if len(valor) > 4 else "****"
            else:
                visible = valor
            print(f"✓ {var}: {visible}")
            estado["presentes"].append(var)
        else:
            print(f"✗ {var}: NO CONFIGURADA — {descripcion}")
            estado["faltantes"].append(var)
            estado["ok"] = False

    print()
    for var, (defecto, descripcion) in variables_opcionales.items():
        valor = os.environ.get(var, defecto)
        print(f"○ {var}: {valor} (por defecto: {defecto})")

    return estado


# --- 2. Verificar que .env y .gitignore existen ---
def verificar_archivos_seguridad(directorio: str = ".") -> None:
    """Verifica la presencia de archivos de seguridad."""
    ruta = Path(directorio)
    print("\\n=== Archivos de seguridad ===\\n")

    archivo_env = ruta / ".env"
    archivo_gitignore = ruta / ".gitignore"

    if archivo_env.exists():
        print("✓ .env encontrado")
        tamanio = archivo_env.stat().st_size
        print(f"  Tamaño: {tamanio} bytes")
    else:
        print("⚠️  .env no encontrado")
        print("  Crea un archivo .env con tus credenciales locales")

    if archivo_gitignore.exists():
        print("\\n✓ .gitignore encontrado")
        contenido = archivo_gitignore.read_text(encoding="utf-8")
        if ".env" in contenido:
            print("  ✓ .env está en .gitignore ← Correcto")
        else:
            print("  ❌ .env NO está en .gitignore ← PELIGROSO")
            print("     Agrega '.env' a tu .gitignore inmediatamente")
    else:
        print("\\n❌ .gitignore no encontrado")
        print("  Crea un .gitignore con al menos: .env")


# --- 3. Mostrar qué debe contener .gitignore ---
def mostrar_gitignore_recomendado() -> None:
    """Muestra el contenido recomendado para .gitignore."""
    print("\\n=== Contenido recomendado para .gitignore ===\\n")
    contenido = """# Credenciales y secretos — NUNCA subir a git
.env
.env.local
.env.production
.env.*.local
*.env

# Entorno virtual de Python
venv/
env/
.venv/
__pycache__/
*.pyc

# Archivos del sistema
.DS_Store
Thumbs.db

# IDEs
.vscode/settings.json
.idea/
"""
    print(contenido)


# --- Demo ---
estado = verificar_configuracion()
verificar_archivos_seguridad()
mostrar_gitignore_recomendado()

if estado["faltantes"]:
    print(f"\\n⚠️  Faltan {len(estado['faltantes'])} variables: {', '.join(estado['faltantes'])}")
    print("   Configúralas en tu archivo .env o en las variables de entorno del sistema")
else:
    print("\\n✓ Configuración completa")`,
    keyPoints: [
      'NUNCA escribas contraseñas, API keys o tokens directamente en el código Python',
      'El historial de git guarda todo — un commit con credencial es permanente aunque lo borres después',
      'Usa siempre os.environ.get() con python-dotenv para leer credenciales desde variables de entorno',
      'El archivo .env guarda credenciales locales y DEBE estar en .gitignore',
      'Si expones una credencial accidentalmente, revócala INMEDIATAMENTE en el servicio correspondiente',
      'Activa siempre la verificación en dos pasos (2FA) en cuentas usadas para automatización',
    ],
    exercise: {
      description: 'Crea un script de verificación de seguridad que: (1) compruebe si existe .gitignore en el directorio actual y si .env está listado en él, (2) verifique que EMAIL_PASSWORD no está hardcodeada en ningún archivo .py del directorio actual (busca el string "PASSWORD" en archivos .py usando os.walk), (3) compruebe si existe el archivo .env, (4) muestre un reporte con el estado de cada verificación. Usa colores de texto si tu terminal los soporta.',
      hint: 'Para buscar en archivos .py: usa os.walk(directorio) para recorrer archivos, abre cada .py y busca patrones peligrosos como PASSWORD = " o password = ". Para los colores usa códigos ANSI: "\\033[92m" (verde), "\\033[91m" (rojo), "\\033[0m" (reset).',
    },
    quiz: [
      {
        question: '¿Qué pasa si haces git commit de un archivo con una contraseña y luego borras el archivo en otro commit?',
        options: [
          'La contraseña desaparece del repositorio',
          'La contraseña sigue visible en el historial de git y puede ser encontrada',
          'Git borra automáticamente el historial de archivos eliminados',
          'Solo el dueño del repositorio puede ver el historial',
        ],
        correctAnswer: 'La contraseña sigue visible en el historial de git y puede ser encontrada',
        correctFeedback: '¡Correcto! git log guarda todos los commits. Alguien puede hacer git checkout al commit anterior y ver la contraseña. Borrar el archivo en un commit posterior no es suficiente.',
        incorrectFeedback: 'El historial de git es permanente. Si committeaste una contraseña, está visible en todos los commits anteriores aunque la borres después. Por eso debes revocar inmediatamente.',
      },
      {
        question: '¿Qué debe hacer inmediatamente si accidentalmente subes una contraseña a GitHub?',
        options: [
          'Borrar el commit y ya está',
          'Revocar/cambiar la contraseña en el servicio correspondiente de forma inmediata',
          'Hacer el repositorio privado',
          'Eliminar el repositorio completo',
        ],
        correctAnswer: 'Revocar/cambiar la contraseña en el servicio correspondiente de forma inmediata',
        correctFeedback: '¡Correcto! Lo primero y más urgente es revocar la credencial comprometida. Los bots actúan en minutos. Luego puedes limpiar el historial, pero la revocación es prioritaria.',
        incorrectFeedback: 'Lo primero es revocar la credencial en el servicio (cambiar contraseña en Gmail, revocar token en GitHub, etc.). Los bots escanean GitHub constantemente y actúan en minutos.',
      },
      {
        question: '¿Por qué las App Passwords de Gmail son más seguras que usar tu contraseña normal?',
        options: [
          'Porque son más largas y difíciles de recordar',
          'Son específicas por aplicación y pueden revocarse individualmente sin afectar tu contraseña principal',
          'Porque Gmail las encripta automáticamente',
          'No son más seguras, son equivalentes',
        ],
        correctAnswer: 'Son específicas por aplicación y pueden revocarse individualmente sin afectar tu contraseña principal',
        correctFeedback: '¡Correcto! Una App Password solo da acceso a esa aplicación específica. Si se compromete, la revocas sin cambiar tu contraseña principal ni afectar otras aplicaciones.',
        incorrectFeedback: 'Las App Passwords son específicas por aplicación. Si una se compromete, puedes revocarla sin cambiar tu contraseña principal ni afectar otras aplicaciones o dispositivos.',
      },
      {
        question: '¿Qué debe obligatoriamente estar en el .gitignore de un proyecto Python con credenciales?',
        options: [
          'Solo requirements.txt',
          'El archivo .env que contiene las credenciales locales',
          'Todos los archivos .py',
          'El directorio src/',
        ],
        correctAnswer: 'El archivo .env que contiene las credenciales locales',
        correctFeedback: '¡Correcto! El .env guarda credenciales locales y NUNCA debe subirse a git. Agrega ".env" al .gitignore ANTES de crear el archivo .env.',
        incorrectFeedback: 'El .env contiene credenciales y debe estar en .gitignore obligatoriamente. Best practice: agrega .env al .gitignore antes de crear el archivo.',
      },
      {
        question: '¿Qué hace load_dotenv() de la librería python-dotenv?',
        options: [
          'Crea automáticamente un archivo .env',
          'Carga las variables del archivo .env al entorno del sistema para que os.environ las pueda leer',
          'Sube el archivo .env a un servidor seguro',
          'Encripta el archivo .env',
        ],
        correctAnswer: 'Carga las variables del archivo .env al entorno del sistema para que os.environ las pueda leer',
        correctFeedback: '¡Correcto! load_dotenv() lee el archivo .env y carga sus variables al entorno del proceso. Después de llamarla, os.environ.get("MI_VARIABLE") funciona normalmente.',
        incorrectFeedback: 'load_dotenv() lee el archivo .env y agrega sus variables al entorno del proceso Python. Luego os.environ.get("VARIABLE") las puede leer como si fueran variables normales del sistema.',
      },
      {
        question: '¿Por qué se recomienda activar la verificación en dos pasos (2FA)?',
        options: [
          'Solo por requisito de Gmail para App Passwords',
          'Protege la cuenta aunque alguien obtenga la contraseña, y es requisito para App Passwords',
          'Hace el acceso más rápido',
          'No hay razón práctica, es opcional',
        ],
        correctAnswer: 'Protege la cuenta aunque alguien obtenga la contraseña, y es requisito para App Passwords',
        correctFeedback: '¡Correcto! 2FA agrega una segunda capa: aunque alguien obtenga tu contraseña, aún necesitan el segundo factor. Y Gmail lo requiere para crear App Passwords.',
        incorrectFeedback: 'El 2FA protege tu cuenta incluso si la contraseña es comprometida. También es requisito de Gmail para poder crear App Passwords para tus scripts.',
      },
    ],
  },
  {
    slug: 'envio-automatico-reportes',
    title: 'Mini proyecto: envío automático de reportes',
    module: 'Envío de correos con Python',
    moduleNumber: 24,
    order: 128,
    description: 'Crea un script que genere un reporte simple y lo envíe automáticamente por correo.',
    explanation: `## Mini proyecto: envío automático de reportes

Este proyecto integra todo lo aprendido: leer datos, generar un reporte HTML con tabla, adjuntar un CSV y enviar todo por correo de forma segura.

### Lo que construiremos

Un script \`enviar_reporte.py\` que:

1. Lee datos de ventas (de una lista o CSV)
2. Genera un reporte HTML con tabla y resumen
3. Crea el CSV del reporte en memoria
4. Envía el correo con el HTML como cuerpo y el CSV adjunto
5. Usa credenciales desde variables de entorno

### Estructura del proyecto

\`\`\`
reporte_automatico/
├── .env                  ← credenciales (en .gitignore)
├── .gitignore
├── enviar_reporte.py     ← script principal
├── requirements.txt      ← (python-dotenv)
└── datos_ventas.csv      ← datos de ejemplo (opcional)
\`\`\`

### Separación de responsabilidades

\`\`\`python
def cargar_datos() -> list:
    """Lee los datos de ventas."""
    ...

def calcular_resumen(datos: list) -> dict:
    """Calcula totales y estadísticas."""
    ...

def generar_html(datos: list, resumen: dict) -> str:
    """Genera el cuerpo HTML del correo."""
    ...

def generar_csv(datos: list) -> bytes:
    """Genera el CSV en memoria."""
    ...

def construir_correo(datos, resumen, html, csv_bytes) -> EmailMessage:
    """Arma el correo con cuerpo y adjunto."""
    ...

def enviar_correo(msg: EmailMessage) -> bool:
    """Envía el correo y devuelve True si fue exitoso."""
    ...

def main():
    """Orquesta todo el proceso."""
    datos = cargar_datos()
    resumen = calcular_resumen(datos)
    html = generar_html(datos, resumen)
    csv_bytes = generar_csv(datos)
    msg = construir_correo(datos, resumen, html, csv_bytes)
    exito = enviar_correo(msg)
    print("✓ Reporte enviado" if exito else "✗ Error al enviar")
\`\`\`

### Programar la ejecución automática

Para que el script se ejecute automáticamente:

**Linux/Mac (cron):**
\`\`\`bash
# Ejecutar cada lunes a las 8am
0 8 * * 1 /usr/bin/python3 /ruta/reporte/enviar_reporte.py
\`\`\`

**Windows (Task Scheduler):**
Usar el Programador de tareas de Windows para ejecutar:
\`python ruta\\enviar_reporte.py\`

**Python (schedule library):**
\`\`\`python
import schedule
import time

schedule.every().monday.at("08:00").do(main)

while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\``,
    codeExample: `"""
Mini proyecto: Envío automático de reportes de ventas
=====================================================
Dependencias: pip install python-dotenv
Variables de entorno requeridas: EMAIL_ORIGEN, EMAIL_PASSWORD, EMAIL_DESTINO
"""
import os
import csv
import io
import smtplib
from email.message import EmailMessage
from datetime import datetime

# En un proyecto real, añade: from dotenv import load_dotenv; load_dotenv()


# ===== 1. DATOS =====

def cargar_datos() -> list:
    """Carga datos de ventas. En producción leería un CSV o base de datos."""
    return [
        {"vendedor": "Ana García", "producto": "Libro Python", "cantidad": 15, "precio": 25.00},
        {"vendedor": "Luis Pérez", "producto": "Teclado Mecánico", "cantidad": 8, "precio": 89.00},
        {"vendedor": "María López", "producto": "Monitor 24'", "cantidad": 3, "precio": 350.00},
        {"vendedor": "Carlos Ruiz", "producto": "Mouse Inalámbrico", "cantidad": 22, "precio": 35.00},
        {"vendedor": "Ana García", "producto": "Webcam HD", "cantidad": 10, "precio": 65.00},
    ]


# ===== 2. PROCESAMIENTO =====

def calcular_resumen(datos: list) -> dict:
    """Calcula estadísticas del reporte."""
    totales = [fila["cantidad"] * fila["precio"] for fila in datos]
    total_general = sum(totales)
    mejor = max(datos, key=lambda x: x["cantidad"] * x["precio"])

    return {
        "Total de registros": len(datos),
        "Total de ventas": f"\${total_general:,.2f}",
        "Venta más alta": f"{mejor['producto']} (\${mejor['cantidad'] * mejor['precio']:,.2f})",
        "Fecha del reporte": datetime.now().strftime("%d/%m/%Y %H:%M"),
    }


# ===== 3. GENERACIÓN DE CONTENIDO =====

def generar_csv(datos: list) -> bytes:
    """Genera CSV en memoria como bytes."""
    salida = io.StringIO()
    columnas = ["vendedor", "producto", "cantidad", "precio", "total"]
    escritor = csv.DictWriter(salida, fieldnames=columnas)
    escritor.writeheader()

    for fila in datos:
        fila_con_total = {**fila, "total": fila["cantidad"] * fila["precio"]}
        escritor.writerow(fila_con_total)

    return salida.getvalue().encode("utf-8")


def generar_html(datos: list, resumen: dict) -> str:
    """Genera el cuerpo HTML del reporte."""
    filas_tabla = ""
    for i, fila in enumerate(datos):
        total = fila["cantidad"] * fila["precio"]
        bg = "#f8f9fa" if i % 2 == 0 else "#ffffff"
        filas_tabla += f"""
        <tr>
            <td style='padding:10px;background:{bg};'>{fila['vendedor']}</td>
            <td style='padding:10px;background:{bg};'>{fila['producto']}</td>
            <td style='padding:10px;background:{bg};text-align:center;'>{fila['cantidad']}</td>
            <td style='padding:10px;background:{bg};text-align:right;'>\${fila['precio']:.2f}</td>
            <td style='padding:10px;background:{bg};text-align:right;font-weight:bold;'>\${total:,.2f}</td>
        </tr>"""

    items_resumen = "".join(
        f"<tr><td style='padding:6px;color:#555;'>{k}</td>"
        f"<td style='padding:6px;font-weight:bold;'>{v}</td></tr>"
        for k, v in resumen.items()
    )

    return f"""
    <html><body style='font-family:Arial,sans-serif;padding:20px;color:#333;'>
    <div style='max-width:700px;margin:0 auto;'>
        <h1 style='color:#2c3e50;border-bottom:3px solid #3498db;padding-bottom:10px;'>
            Reporte de Ventas
        </h1>
        <table style='border-collapse:collapse;width:100%;margin-bottom:20px;'>
            <thead><tr style='background-color:#2c3e50;color:white;'>
                <th style='padding:12px;text-align:left;'>Vendedor</th>
                <th style='padding:12px;text-align:left;'>Producto</th>
                <th style='padding:12px;text-align:center;'>Cant.</th>
                <th style='padding:12px;text-align:right;'>Precio</th>
                <th style='padding:12px;text-align:right;'>Total</th>
            </tr></thead>
            <tbody>{filas_tabla}</tbody>
        </table>
        <div style='background:#eaf4fb;padding:15px;border-radius:5px;'>
            <h3 style='color:#2980b9;margin-top:0;'>Resumen</h3>
            <table>{items_resumen}</table>
        </div>
        <p style='color:#95a5a6;font-size:12px;margin-top:20px;'>
            Correo generado automáticamente — No responder
        </p>
    </div></body></html>"""


# ===== 4. ENVÍO =====

def construir_correo(datos, resumen, html, csv_bytes) -> EmailMessage:
    """Construye el objeto EmailMessage completo."""
    email_origen = os.environ.get("EMAIL_ORIGEN", "reporte@empresa.com")
    email_destino = os.environ.get("EMAIL_DESTINO", "gerente@empresa.com")
    fecha = datetime.now().strftime("%d/%m/%Y")

    msg = EmailMessage()
    msg["Subject"] = f"📊 Reporte de Ventas — {fecha}"
    msg["From"] = f"Sistema de Reportes <{email_origen}>"
    msg["To"] = email_destino

    msg.set_content(f"Reporte de ventas del {fecha}. Ver HTML o adjunto CSV.")
    msg.add_alternative(html, subtype="html")
    msg.add_attachment(csv_bytes, maintype="text", subtype="csv",
                       filename=f"ventas_{datetime.now().strftime('%Y%m%d')}.csv")
    return msg


def enviar_correo(msg: EmailMessage) -> bool:
    """Envía el correo. Retorna True si fue exitoso."""
    email_origen = os.environ.get("EMAIL_ORIGEN")
    password = os.environ.get("EMAIL_PASSWORD")

    if not email_origen or not password:
        print("⚠️  Credenciales no configuradas (modo demo — no se envía)")
        return False

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(email_origen, password)
            smtp.send_message(msg)
        return True
    except smtplib.SMTPAuthenticationError:
        print("❌ Error de autenticación")
        return False
    except smtplib.SMTPException as e:
        print(f"❌ Error SMTP: {e}")
        return False


# ===== 5. MAIN =====

def main():
    print("=== Sistema de Reportes Automáticos ===\\n")
    datos = cargar_datos()
    print(f"✓ {len(datos)} registros cargados")

    resumen = calcular_resumen(datos)
    print(f"✓ Resumen calculado: {resumen['Total de ventas']}")

    html = generar_html(datos, resumen)
    csv_bytes = generar_csv(datos)
    print(f"✓ HTML generado ({len(html)} chars)")
    print(f"✓ CSV generado ({len(csv_bytes)} bytes)")

    msg = construir_correo(datos, resumen, html, csv_bytes)
    print(f"✓ Correo construido: {msg['Subject']}")
    print(f"  Para: {msg['To']}")

    exito = enviar_correo(msg)
    print("\\n✓ Reporte enviado exitosamente" if exito else "\\n⚠️  Modo demo — configura credenciales para enviar")


if __name__ == "__main__":
    main()`,
    keyPoints: [
      'El mini proyecto separa responsabilidades en funciones: cargar_datos, calcular_resumen, generar_html, generar_csv, construir_correo, enviar_correo, main',
      'main() orquesta todas las funciones — es el punto de entrada que coordina el flujo',
      'Los datos pueden venir de listas, CSV o bases de datos — la función cargar_datos() abstrae la fuente',
      'El CSV se genera en memoria con io.StringIO() sin crear archivos temporales en disco',
      'Las credenciales se leen desde variables de entorno — el código es seguro para subir a git',
      'Para automatizar la ejecución usa cron (Linux/Mac), Task Scheduler (Windows) o la librería schedule',
    ],
    exercise: {
      description: 'Extiende el mini proyecto para que también lea datos desde un archivo CSV real. Crea una función cargar_desde_csv(ruta_archivo) que use el módulo csv para leer los datos. Si el archivo no existe, usa los datos de ejemplo hardcodeados. Agrega también una función calcular_top3_vendedores(datos) que devuelva los 3 vendedores con mayor volumen de ventas total (suma de cantidad × precio por vendedor) y muéstrala en el reporte HTML.',
      hint: 'Para leer CSV usa csv.DictReader con open(ruta, newline="", encoding="utf-8"). Para el top 3 de vendedores, agrupa con un diccionario: totales_por_vendedor = {}; for fila in datos: totales_por_vendedor[fila["vendedor"]] = totales_por_vendedor.get(fila["vendedor"], 0) + fila["cantidad"] * fila["precio"]. Luego ordena con sorted().',
    },
    quiz: [
      {
        question: '¿Por qué es buena práctica tener una función main() que orqueste el flujo?',
        options: [
          'Python lo requiere obligatoriamente',
          'Separa el flujo principal de los detalles de implementación, haciendo el código más legible y mantenible',
          'Es más rápido que escribir el código directamente',
          'Solo funciona con if __name__ == "__main__"',
        ],
        correctAnswer: 'Separa el flujo principal de los detalles de implementación, haciendo el código más legible y mantenible',
        correctFeedback: '¡Correcto! main() muestra el "qué" del programa: cargar datos, calcular resumen, generar HTML, enviar. Los detalles de "cómo" están en funciones separadas.',
        incorrectFeedback: 'main() separa el flujo principal de los detalles. Al leer main(), se entiende qué hace el programa. Los detalles de implementación están en funciones especializadas.',
      },
      {
        question: '¿Por qué se usa io.StringIO() en vez de escribir el CSV a un archivo en disco?',
        options: [
          'io.StringIO es más rápido para archivos grandes',
          'Evita crear archivos temporales — el CSV se genera en memoria y se adjunta directamente',
          'El módulo csv no puede escribir a archivos en disco',
          'Es el único formato que acepta add_attachment()',
        ],
        correctAnswer: 'Evita crear archivos temporales — el CSV se genera en memoria y se adjunta directamente',
        correctFeedback: '¡Correcto! io.StringIO actúa como un archivo en memoria. Evitas crear, usar y borrar un archivo temporal del disco. El código es más limpio y portable.',
        incorrectFeedback: 'io.StringIO actúa como un archivo en memoria. Puedes usarlo con csv.DictWriter igual que un archivo real, pero sin tocar el disco. Más limpio y sin archivos temporales.',
      },
      {
        question: '¿Cómo se ejecuta automáticamente un script Python en Linux/Mac cada lunes a las 8am?',
        options: [
          'schedule.every().monday.at("08:00")',
          'Agregar la ruta del script a crontab: 0 8 * * 1 python3 script.py',
          'Ejecutar el script con python3 --schedule "lunes 8am"',
          'No es posible sin un servidor dedicado',
        ],
        correctAnswer: 'Agregar la ruta del script a crontab: 0 8 * * 1 python3 script.py',
        correctFeedback: '¡Correcto! El formato cron es: minuto hora día mes día_semana. El número 1 para el día de la semana es lunes. crontab -e permite editar el archivo de tareas programadas.',
        incorrectFeedback: 'En Linux/Mac se usa cron: `0 8 * * 1 python3 /ruta/script.py` ejecuta el script cada lunes a las 8:00. También está la librería schedule de Python para programar dentro del propio script.',
      },
      {
        question: '¿Qué hace la función calcular_resumen() en el proyecto?',
        options: [
          'Genera el HTML del reporte',
          'Envía el correo con los datos',
          'Calcula estadísticas y totales a partir de los datos crudos',
          'Lee los datos desde el CSV',
        ],
        correctAnswer: 'Calcula estadísticas y totales a partir de los datos crudos',
        correctFeedback: '¡Correcto! calcular_resumen() transforma los datos crudos en estadísticas útiles: total de ventas, producto más vendido, etc. Separar esta lógica facilita las pruebas.',
        incorrectFeedback: 'calcular_resumen() toma los datos crudos y calcula métricas útiles: totales, promedios, el mejor vendedor, etc. Separar esto del HTML facilita cambiar la presentación sin tocar la lógica.',
      },
      {
        question: '¿Cuál de los siguientes NO es un método para automatizar la ejecución de un script Python?',
        options: [
          'cron en Linux/Mac',
          'Task Scheduler en Windows',
          'La librería schedule de Python',
          'python --auto-run flag',
        ],
        correctAnswer: 'python --auto-run flag',
        correctFeedback: '¡Correcto! No existe el flag --auto-run en Python. Las opciones reales son: cron (Linux/Mac), Task Scheduler (Windows) y la librería schedule para programación dentro de Python.',
        incorrectFeedback: 'python --auto-run no existe. Las opciones reales son: cron en Linux/Mac, Task Scheduler en Windows, o la librería `schedule` de Python (pip install schedule).',
      },
      {
        question: '¿Qué ventaja tiene leer las credenciales con os.environ.get() dentro de la función enviar_correo() en vez de al inicio del script?',
        options: [
          'Es más rápido',
          'Las credenciales se leen justo cuando se necesitan, y si no están configuradas el error es más claro',
          'No hay diferencia',
          'Permite que el script funcione sin credenciales en todo momento',
        ],
        correctAnswer: 'Las credenciales se leen justo cuando se necesitan, y si no están configuradas el error es más claro',
        correctFeedback: '¡Correcto! Leerlas en la función que las necesita hace el código más modular. Puedes ejecutar cargar_datos() y generar_html() sin credenciales, y solo necesitarlas al enviar.',
        incorrectFeedback: 'Leer las credenciales dentro de la función que las usa hace el código más modular. Puedes generar y verificar el reporte sin necesidad de credenciales configuradas.',
      },
    ],
  },
]

import type { Module } from '@/types'

export const module24: Module = {
  number: 24,
  title: 'Envío de correos con Python',
  level: 'practico',
  lessons: lessonsModule24,
}
