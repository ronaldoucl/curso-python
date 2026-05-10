import type { Lesson } from '@/types'

export const lessonsModule9: Lesson[] = [
  {
    slug: 'que-es-poo',
    title: '¿Qué es la programación orientada a objetos?',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 32,
    description: 'Comprende el paradigma POO, sus pilares fundamentales y por qué es útil en proyectos reales.',
    explanation: `## ¿Qué es la POO?

La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el código alrededor de **objetos**, que combinan datos (atributos) y comportamiento (métodos).

En lugar de pensar en pasos secuenciales, pensamos en **entidades del mundo real** y cómo interactúan.

## Los 4 pilares de la POO

| Pilar | ¿Qué significa? |
|-------|----------------|
| **Encapsulamiento** | Ocultar los detalles internos y exponer solo lo necesario |
| **Herencia** | Una clase puede heredar atributos y métodos de otra |
| **Polimorfismo** | Diferentes clases pueden responder al mismo mensaje de formas distintas |
| **Abstracción** | Modelar solo los aspectos relevantes de una entidad |

## POO vs programación procedural

\`\`\`python
# Procedural: datos y funciones separados
nombre = "Ana"
edad = 25
saldo = 1000.0

def depositar(saldo, cantidad):
    return saldo + cantidad

def retirar(saldo, cantidad):
    if cantidad > saldo:
        return saldo
    return saldo - cantidad

# POO: datos y funciones juntos en un objeto
class CuentaBancaria:
    def __init__(self, nombre, saldo):
        self.nombre = nombre
        self.saldo = saldo

    def depositar(self, cantidad):
        self.saldo += cantidad

    def retirar(self, cantidad):
        if cantidad > self.saldo:
            print("Fondos insuficientes")
            return
        self.saldo -= cantidad
\`\`\`

## ¿Por qué usar POO?

- **Organización**: el código se agrupa por conceptos, no por operaciones
- **Reutilización**: defines una clase una vez y creas muchos objetos
- **Mantenimiento**: los cambios en una clase no afectan al resto
- **Escalabilidad**: es más fácil añadir nuevas funcionalidades

## Objetos en el mundo real

Todo puede ser modelado como un objeto:

- Un **usuario** tiene nombre, email, contraseña → puede iniciar sesión, cerrar sesión
- Un **producto** tiene nombre, precio, stock → puede venderse, reponerse
- Un **coche** tiene marca, modelo, velocidad → puede acelerar, frenar

Python es un lenguaje orientado a objetos por naturaleza: todo en Python es un objeto (listas, strings, números, funciones).`,
    codeExample: `# Ejemplo: modelar un Estudiante con POO

class Estudiante:
    # La clase define la estructura
    def __init__(self, nombre, edad, carrera):
        self.nombre = nombre      # atributo
        self.edad = edad          # atributo
        self.carrera = carrera    # atributo
        self.notas = []           # atributo (empieza vacío)

    def agregar_nota(self, nota):
        """Método para añadir una nota"""
        self.notas.append(nota)

    def promedio(self):
        """Método que calcula el promedio"""
        if not self.notas:
            return 0
        return sum(self.notas) / len(self.notas)

    def presentarse(self):
        """Método que devuelve una presentación"""
        return f"Hola, soy {self.nombre}, estudio {self.carrera}"


# Crear objetos (instancias) de la clase
ana = Estudiante("Ana", 22, "Ingeniería")
luis = Estudiante("Luis", 20, "Diseño")

# Usar los métodos
ana.agregar_nota(9.5)
ana.agregar_nota(8.0)
ana.agregar_nota(9.0)

print(ana.presentarse())
print(f"Promedio de {ana.nombre}: {ana.promedio():.2f}")

luis.agregar_nota(7.5)
print(f"Promedio de {luis.nombre}: {luis.promedio():.2f}")

# Cada objeto es independiente
print(ana.notas)   # [9.5, 8.0, 9.0]
print(luis.notas)  # [7.5]`,
    keyPoints: [
      'La POO organiza el código alrededor de objetos que combinan datos y comportamiento.',
      'Los 4 pilares son: encapsulamiento, herencia, polimorfismo y abstracción.',
      'Una clase es el molde; un objeto es la instancia creada a partir del molde.',
      'Python es orientado a objetos por naturaleza: todo es un objeto.',
      'La POO mejora la organización, reutilización y mantenimiento del código.',
    ],
    exercise: {
      description: 'Crea una clase `Libro` con atributos `titulo`, `autor` y `paginas`. Añade un método `resumen()` que devuelva un string con la información del libro. Crea dos instancias y llama a `resumen()` en cada una.',
      hint: 'Define la clase con `__init__` recibiendo los tres atributos como parámetros. El método `resumen()` puede devolver un f-string con `self.titulo`, `self.autor` y `self.paginas`.',
    },
    quiz: [
      {
        question: '¿Qué es un objeto en POO?',
        options: [
          'Una función que devuelve datos',
          'Una instancia de una clase que combina datos y comportamiento',
          'Una variable de tipo diccionario',
          'Un módulo importado en Python',
        ],
        correctAnswer: 'Una instancia de una clase que combina datos y comportamiento',
        correctFeedback: 'Exacto. Un objeto es una instancia concreta de una clase, con sus propios datos (atributos) y funciones (métodos).',
        incorrectFeedback: 'Un objeto es una instancia de una clase. Combina atributos (datos) y métodos (comportamiento) en una sola entidad.',
      },
      {
        question: '¿Cuál de estos NO es un pilar de la POO?',
        options: ['Encapsulamiento', 'Herencia', 'Recursividad', 'Polimorfismo'],
        correctAnswer: 'Recursividad',
        correctFeedback: 'Correcto. La recursividad es una técnica de programación, no un pilar de la POO. Los pilares son: encapsulamiento, herencia, polimorfismo y abstracción.',
        incorrectFeedback: 'La recursividad es una técnica de programación, no un pilar de la POO. Los cuatro pilares son: encapsulamiento, herencia, polimorfismo y abstracción.',
      },
      {
        question: '¿Cuál es la diferencia entre una clase y un objeto?',
        options: [
          'Son lo mismo, solo cambia el nombre',
          'La clase es el molde y el objeto es la instancia creada a partir de ese molde',
          'El objeto define la estructura y la clase es la instancia',
          'Las clases solo existen en Java, no en Python',
        ],
        correctAnswer: 'La clase es el molde y el objeto es la instancia creada a partir de ese molde',
        correctFeedback: '¡Exactamente! La clase es como el plano de un edificio; el objeto es el edificio construido a partir de ese plano.',
        incorrectFeedback: 'La clase actúa como molde o plantilla. Cuando escribes `obj = MiClase()`, creas un objeto (instancia) a partir de ese molde.',
      },
      {
        question: 'En Python, ¿qué afirmación sobre los objetos es correcta?',
        options: [
          'Solo las clases que defines tú son objetos',
          'Los números y strings no son objetos en Python',
          'Todo en Python es un objeto, incluyendo números, strings y funciones',
          'Los objetos solo existen durante la ejecución de un método',
        ],
        correctAnswer: 'Todo en Python es un objeto, incluyendo números, strings y funciones',
        correctFeedback: 'Correcto. Python es puramente orientado a objetos. Incluso `42` es una instancia de la clase `int`.',
        incorrectFeedback: 'En Python todo es un objeto. Un string como "hola" es una instancia de `str`, el número 42 es una instancia de `int`, etc.',
      },
      {
        question: '¿Qué ventaja principal ofrece la POO frente a la programación procedural?',
        options: [
          'Los programas siempre ejecutan más rápido',
          'Se pueden usar más tipos de datos',
          'El código se organiza por conceptos, facilitando el mantenimiento y la reutilización',
          'Se elimina la necesidad de usar funciones',
        ],
        correctAnswer: 'El código se organiza por conceptos, facilitando el mantenimiento y la reutilización',
        correctFeedback: 'Exacto. La POO agrupa datos y comportamiento relacionados, lo que hace el código más organizado, reutilizable y fácil de mantener.',
        incorrectFeedback: 'La POO no garantiza mayor velocidad ni elimina las funciones. Su ventaja principal es la organización del código por conceptos, mejorando reutilización y mantenimiento.',
      },
    ],
  },
  {
    slug: 'clases-objetos',
    title: 'Clases y objetos en Python',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 33,
    description: 'Aprende a definir clases, crear objetos y entender la sintaxis básica de POO en Python.',
    explanation: `## Definir una clase

La palabra clave \`class\` define una clase en Python. Por convención, los nombres de clase usan **PascalCase** (primera letra de cada palabra en mayúscula).

\`\`\`python
class NombreClase:
    # cuerpo de la clase
    pass
\`\`\`

## Crear objetos (instancias)

Para crear un objeto, llamas a la clase como si fuera una función:

\`\`\`python
class Perro:
    pass

mi_perro = Perro()       # instancia 1
otro_perro = Perro()     # instancia 2

print(type(mi_perro))    # <class '__main__.Perro'>
\`\`\`

## Atributos de instancia

Los atributos son variables que pertenecen a un objeto específico:

\`\`\`python
class Perro:
    def __init__(self, nombre, raza):
        self.nombre = nombre
        self.raza = raza

rex = Perro("Rex", "Labrador")
fido = Perro("Fido", "Poodle")

print(rex.nombre)   # Rex
print(fido.raza)    # Poodle
\`\`\`

## Atributos de clase

Los atributos de clase son compartidos por todas las instancias:

\`\`\`python
class Perro:
    especie = "Canis lupus familiaris"  # atributo de clase

    def __init__(self, nombre):
        self.nombre = nombre            # atributo de instancia

rex = Perro("Rex")
fido = Perro("Fido")

print(rex.especie)    # Canis lupus familiaris
print(fido.especie)   # Canis lupus familiaris
print(Perro.especie)  # Canis lupus familiaris (acceso directo a la clase)
\`\`\`

## Métodos

Los métodos son funciones definidas dentro de una clase. Siempre reciben \`self\` como primer parámetro:

\`\`\`python
class Perro:
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        return f"{self.nombre} dice: ¡Guau!"

    def saludar(self, otro_nombre):
        return f"{self.nombre} saluda a {otro_nombre}"

rex = Perro("Rex")
print(rex.ladrar())           # Rex dice: ¡Guau!
print(rex.saludar("Fido"))    # Rex saluda a Fido
\`\`\`

## Ver los atributos de un objeto

\`\`\`python
print(vars(rex))        # {'nombre': 'Rex'}
print(dir(rex))         # lista todos los atributos y métodos
print(hasattr(rex, 'nombre'))  # True
\`\`\``,
    codeExample: `class Vehiculo:
    # Atributo de clase
    tipo_energia = "combustible"

    def __init__(self, marca, modelo, año, velocidad_max):
        # Atributos de instancia
        self.marca = marca
        self.modelo = modelo
        self.año = año
        self.velocidad_max = velocidad_max
        self.velocidad_actual = 0  # empieza en 0

    def acelerar(self, cantidad):
        nueva_vel = self.velocidad_actual + cantidad
        if nueva_vel <= self.velocidad_max:
            self.velocidad_actual = nueva_vel
        else:
            self.velocidad_actual = self.velocidad_max
        return f"{self.marca} va a {self.velocidad_actual} km/h"

    def frenar(self, cantidad):
        self.velocidad_actual = max(0, self.velocidad_actual - cantidad)
        return f"{self.marca} va a {self.velocidad_actual} km/h"

    def info(self):
        return f"{self.año} {self.marca} {self.modelo} (máx: {self.velocidad_max} km/h)"


# Crear instancias
auto1 = Vehiculo("Toyota", "Corolla", 2022, 180)
auto2 = Vehiculo("BMW", "M3", 2023, 290)

print(auto1.info())
print(auto2.info())

# Usar métodos
print(auto1.acelerar(60))
print(auto1.acelerar(80))
print(auto1.acelerar(60))  # no supera 180
print(auto1.frenar(30))

# Atributo de clase accesible desde instancias
print(auto1.tipo_energia)   # combustible
print(Vehiculo.tipo_energia) # combustible

# Verificar atributos
print(vars(auto1))`,
    keyPoints: [
      'La palabra clave `class` define una clase; los nombres usan PascalCase por convención.',
      'Creas un objeto llamando a la clase como función: `obj = MiClase()`.',
      'Los atributos de instancia son únicos por objeto; los de clase son compartidos.',
      'Los métodos son funciones de la clase que siempre reciben `self` como primer parámetro.',
      '`vars(obj)` muestra el diccionario de atributos de un objeto.',
    ],
    exercise: {
      description: 'Define una clase `Rectangulo` con atributos `base` y `altura`. Añade métodos `area()` y `perimetro()`. Crea dos rectángulos distintos e imprime su área y perímetro.',
      hint: 'El área es `base * altura` y el perímetro es `2 * (base + altura)`. Ambos métodos deben devolver el resultado calculado con `self.base` y `self.altura`.',
    },
    quiz: [
      {
        question: '¿Qué convención de nombres se usa para las clases en Python?',
        options: ['snake_case (mi_clase)', 'camelCase (miClase)', 'PascalCase (MiClase)', 'MAYUSCULAS (MICLASE)'],
        correctAnswer: 'PascalCase (MiClase)',
        correctFeedback: 'Correcto. PEP 8 especifica PascalCase para nombres de clases: primera letra de cada palabra en mayúscula.',
        incorrectFeedback: 'La convención PEP 8 para clases es PascalCase (también llamado CapWords): `MiClase`, `CuentaBancaria`, `Vehiculo`.',
      },
      {
        question: '¿Cuál es la diferencia entre un atributo de clase y uno de instancia?',
        options: [
          'No hay diferencia, son lo mismo',
          'El de clase es compartido por todos los objetos; el de instancia es único por objeto',
          'El de instancia es compartido; el de clase es único por objeto',
          'Los atributos de clase no se pueden leer desde una instancia',
        ],
        correctAnswer: 'El de clase es compartido por todos los objetos; el de instancia es único por objeto',
        correctFeedback: 'Exacto. Un atributo de clase (fuera de `__init__`) es el mismo para todas las instancias. Un atributo de instancia (en `self.x = ...`) es independiente por objeto.',
        incorrectFeedback: 'El atributo de clase se define fuera de `__init__` y es compartido. El atributo de instancia se define con `self.x = ...` dentro de `__init__` y es único para cada objeto.',
      },
      {
        question: '¿Cómo se crea un objeto de la clase `Coche`?',
        options: ['`Coche.crear()`', '`new Coche()`', '`Coche()`', '`objeto(Coche)`'],
        correctAnswer: '`Coche()`',
        correctFeedback: 'Correcto. En Python se instancia una clase llamándola como función: `mi_coche = Coche()`. No se usa `new` como en Java o C++.',
        incorrectFeedback: 'En Python no existe la palabra `new`. Para crear un objeto simplemente llamas a la clase: `mi_coche = Coche()`.',
      },
      {
        question: '¿Qué devuelve `vars(obj)` en Python?',
        options: [
          'La lista de métodos del objeto',
          'El tipo de la clase del objeto',
          'Un diccionario con los atributos de instancia del objeto',
          'El código fuente de la clase',
        ],
        correctAnswer: 'Un diccionario con los atributos de instancia del objeto',
        correctFeedback: '¡Bien! `vars(obj)` devuelve `obj.__dict__`, el diccionario que contiene los atributos de instancia y sus valores.',
        incorrectFeedback: '`vars(obj)` devuelve el diccionario interno del objeto (`obj.__dict__`), que contiene los atributos de instancia y sus valores actuales.',
      },
      {
        question: 'Si `auto1 = Vehiculo("Toyota", ...)` y `Vehiculo.tipo_energia = "eléctrico"`, ¿qué imprime `auto1.tipo_energia`?',
        options: [
          '"combustible" (el valor original)',
          '"eléctrico" (el valor actualizado)',
          'Un error porque ya se creó la instancia',
          'None',
        ],
        correctAnswer: '"eléctrico" (el valor actualizado)',
        correctFeedback: 'Correcto. Los atributos de clase son compartidos. Al cambiar `Vehiculo.tipo_energia`, todas las instancias que no hayan sobreescrito ese atributo verán el nuevo valor.',
        incorrectFeedback: 'Los atributos de clase son compartidos. Cambiar `Vehiculo.tipo_energia` afecta a todas las instancias que no tengan un atributo de instancia con el mismo nombre.',
      },
      {
        question: '¿Por qué los métodos de una clase reciben `self` como primer parámetro?',
        options: [
          'Es una palabra reservada de Python obligatoria por el intérprete',
          'Para que el método pueda acceder a los atributos y métodos del objeto concreto',
          'Para indicar que el método es privado',
          'Por compatibilidad con Python 2',
        ],
        correctAnswer: 'Para que el método pueda acceder a los atributos y métodos del objeto concreto',
        correctFeedback: 'Exacto. `self` es la referencia al objeto que llama al método. Sin él, dentro del método no sabrías a qué objeto te refieres cuando dices `self.nombre`.',
        incorrectFeedback: '`self` es la referencia al objeto concreto que llama al método. Permite acceder a `self.atributo` o llamar a `self.otro_metodo()` dentro de la clase.',
      },
    ],
  },
  {
    slug: 'atributos-metodos',
    title: 'Atributos y métodos',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 34,
    description: 'Profundiza en los tipos de atributos y métodos: de instancia, de clase y estáticos.',
    explanation: `## Tipos de métodos en Python

Python tiene tres tipos principales de métodos dentro de una clase:

### 1. Métodos de instancia (los más comunes)

Reciben \`self\` y operan sobre el objeto concreto:

\`\`\`python
class Contador:
    def __init__(self):
        self.valor = 0

    def incrementar(self):    # método de instancia
        self.valor += 1

    def obtener(self):        # método de instancia
        return self.valor

c = Contador()
c.incrementar()
print(c.obtener())  # 1
\`\`\`

### 2. Métodos de clase (@classmethod)

Reciben \`cls\` (la clase, no el objeto) como primer argumento. Se usan con \`@classmethod\`:

\`\`\`python
class Persona:
    poblacion = 0

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.poblacion += 1

    @classmethod
    def obtener_poblacion(cls):
        return cls.poblacion

    @classmethod
    def crear_anonimo(cls):
        return cls("Anónimo")   # factory method

p1 = Persona("Ana")
p2 = Persona("Luis")
print(Persona.obtener_poblacion())  # 2
anonimo = Persona.crear_anonimo()
print(anonimo.nombre)               # Anónimo
\`\`\`

### 3. Métodos estáticos (@staticmethod)

No reciben \`self\` ni \`cls\`. Son funciones relacionadas con la clase pero que no necesitan acceder a ella:

\`\`\`python
class Matematica:
    @staticmethod
    def es_par(n):
        return n % 2 == 0

    @staticmethod
    def factorial(n):
        if n <= 1:
            return 1
        return n * Matematica.factorial(n - 1)

print(Matematica.es_par(4))      # True
print(Matematica.factorial(5))   # 120
\`\`\`

## El método especial __str__

Permite definir cómo se representa un objeto como string:

\`\`\`python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def __str__(self):
        return f"Producto({self.nombre}, \${self.precio:.2f})"

p = Producto("Laptop", 999.99)
print(p)          # Producto(Laptop, $999.99)
print(str(p))     # Producto(Laptop, $999.99)
\`\`\`

## Atributos "privados" (convención)

Python no tiene privacidad real, pero usa convenciones:

\`\`\`python
class CuentaBancaria:
    def __init__(self, saldo):
        self._saldo = saldo      # "protegido" (convención: no tocar desde fuera)
        self.__pin = "1234"      # "privado" (name mangling: _CuentaBancaria__pin)

    def get_saldo(self):
        return self._saldo
\`\`\``,
    codeExample: `class Temperatura:
    """Clase para manejar temperaturas con conversiones."""

    unidad_por_defecto = "Celsius"  # atributo de clase

    def __init__(self, valor, unidad="C"):
        self._valor = valor
        self._unidad = unidad.upper()

    # Métodos de instancia
    def a_celsius(self):
        if self._unidad == "C":
            return self._valor
        elif self._unidad == "F":
            return (self._valor - 32) * 5 / 9
        elif self._unidad == "K":
            return self._valor - 273.15

    def a_fahrenheit(self):
        return self.a_celsius() * 9 / 5 + 32

    def a_kelvin(self):
        return self.a_celsius() + 273.15

    def __str__(self):
        return f"{self._valor}°{self._unidad}"

    # Método de clase: constructor alternativo
    @classmethod
    def desde_fahrenheit(cls, valor):
        return cls(valor, "F")

    @classmethod
    def desde_kelvin(cls, valor):
        return cls(valor, "K")

    # Método estático: validación sin acceso al objeto
    @staticmethod
    def es_valida(valor, unidad):
        if unidad.upper() == "K" and valor < 0:
            return False, "Kelvin no puede ser negativo"
        if unidad.upper() == "C" and valor < -273.15:
            return False, "Celsius no puede ser menor a -273.15"
        return True, "Válida"


# Usar la clase
t1 = Temperatura(100, "C")
t2 = Temperatura.desde_fahrenheit(212)
t3 = Temperatura.desde_kelvin(373.15)

print(t1)                              # 100°C
print(f"{t1} = {t1.a_fahrenheit():.1f}°F = {t1.a_kelvin():.2f}K")
print(f"{t2} = {t2.a_celsius():.1f}°C")
print(f"{t3} = {t3.a_celsius():.2f}°C")

# Método estático
valida, msg = Temperatura.es_valida(-300, "K")
print(f"¿-300K válida? {valida} — {msg}")`,
    keyPoints: [
      'Métodos de instancia: reciben `self`, acceden a los datos del objeto.',
      'Métodos de clase (`@classmethod`): reciben `cls`, útiles para constructores alternativos.',
      'Métodos estáticos (`@staticmethod`): no reciben `self` ni `cls`, son funciones utilitarias.',
      '`__str__` define cómo se imprime un objeto con `print()`.',
      'El prefijo `_` es convención para "protegido"; `__` activa name mangling (privacidad parcial).',
    ],
    exercise: {
      description: 'Crea una clase `Circulo` con un atributo `radio`. Añade métodos de instancia `area()` y `circunferencia()`, un método estático `es_valido(radio)` que verifique que el radio sea positivo, y `__str__` que devuelva `"Círculo de radio X"`. Usa `math.pi`.',
      hint: 'Importa `math` al inicio. El área es `math.pi * radio**2` y la circunferencia es `2 * math.pi * radio`. El método estático solo necesita comprobar `radio > 0`.',
    },
    quiz: [
      {
        question: '¿Qué diferencia a un método de clase de uno de instancia?',
        options: [
          'El método de clase usa `self` y el de instancia usa `cls`',
          'El método de clase recibe `cls` (la clase) y no necesita un objeto creado; el de instancia recibe `self` (el objeto)',
          'El método de clase es más rápido que el de instancia',
          'No hay diferencia funcional',
        ],
        correctAnswer: 'El método de clase recibe `cls` (la clase) y no necesita un objeto creado; el de instancia recibe `self` (el objeto)',
        correctFeedback: 'Correcto. Los métodos de clase operan sobre la clase en sí (útiles como constructores alternativos), mientras que los de instancia operan sobre el objeto concreto.',
        incorrectFeedback: 'Los métodos de clase usan `@classmethod` y reciben `cls` (la clase). Los de instancia reciben `self` (el objeto concreto). Son para casos de uso distintos.',
      },
      {
        question: '¿Para qué sirve el método `__str__`?',
        options: [
          'Para convertir atributos a string internamente',
          'Para definir cómo se representa el objeto cuando se usa con `print()` o `str()`',
          'Para comparar dos objetos entre sí',
          'Para inicializar el objeto con valores de tipo string',
        ],
        correctAnswer: 'Para definir cómo se representa el objeto cuando se usa con `print()` o `str()`',
        correctFeedback: '¡Exacto! Sin `__str__`, `print(obj)` muestra algo como `<__main__.MiClase object at 0x...>`. Con `__str__` puedes devolver una representación legible.',
        incorrectFeedback: '`__str__` es un método especial (dunder) que Python llama automáticamente al hacer `print(obj)` o `str(obj)`, permitiéndote controlar la representación textual.',
      },
      {
        question: '¿Cuándo es apropiado usar un método estático?',
        options: [
          'Cuando necesitas modificar atributos de instancia',
          'Cuando la función está relacionada con la clase pero no necesita acceder a `self` ni a `cls`',
          'Cuando quieres que el método sea heredado',
          'Cuando el método debe ser llamado antes de crear un objeto',
        ],
        correctAnswer: 'Cuando la función está relacionada con la clase pero no necesita acceder a `self` ni a `cls`',
        correctFeedback: 'Exacto. Los métodos estáticos son funciones utilitarias agrupadas en la clase por coherencia semántica, pero que no dependen del estado del objeto ni de la clase.',
        incorrectFeedback: 'Un método estático (`@staticmethod`) es apropiado cuando la lógica pertenece conceptualmente a la clase, pero no necesita acceder ni al objeto (`self`) ni a la clase (`cls`).',
      },
      {
        question: '¿Qué hace el prefijo doble guion bajo `__` en un atributo como `self.__pin`?',
        options: [
          'Lo hace completamente inaccesible desde cualquier parte',
          'Activa "name mangling": el atributo se renombra internamente como `_NombreClase__pin`',
          'Lo convierte en un atributo de clase compartido',
          'Indica que es una constante que no debe cambiarse',
        ],
        correctAnswer: 'Activa "name mangling": el atributo se renombra internamente como `_NombreClase__pin`',
        correctFeedback: 'Correcto. Python no tiene privacidad real. `__pin` se convierte en `_CuentaBancaria__pin` internamente, dificultando el acceso accidental desde fuera.',
        incorrectFeedback: 'El doble guion bajo activa "name mangling": Python renombra el atributo a `_NombreClase__atributo`. No es totalmente privado, pero dificulta el acceso accidental.',
      },
      {
        question: '¿Cómo se llama a un método de clase `crear_anonimo` de la clase `Persona`?',
        options: [
          '`self.crear_anonimo()`',
          '`Persona.crear_anonimo()` o `instancia.crear_anonimo()`',
          'Solo `Persona.crear_anonimo()`, nunca desde una instancia',
          'Usando `@classmethod crear_anonimo()`',
        ],
        correctAnswer: '`Persona.crear_anonimo()` o `instancia.crear_anonimo()`',
        correctFeedback: '¡Correcto! Los métodos de clase pueden llamarse desde la clase directamente o desde una instancia. Generalmente se llaman desde la clase por claridad.',
        incorrectFeedback: 'Los métodos de clase pueden invocarse tanto desde la clase (`Persona.crear_anonimo()`) como desde una instancia. En ambos casos `cls` recibe la clase `Persona`.',
      },
    ],
  },
  {
    slug: 'constructor-init',
    title: 'El constructor __init__',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 35,
    description: 'Domina el método __init__, los parámetros por defecto y los patrones de inicialización de objetos.',
    explanation: `## ¿Qué es __init__?

\`__init__\` es el **constructor** de una clase en Python. Se llama automáticamente cada vez que creas un objeto nuevo. Su propósito es inicializar los atributos del objeto.

\`\`\`python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

# Al crear el objeto, Python llama __init__ automáticamente
p = Persona("Ana", 25)
# equivalente a: p.__init__("Ana", 25)  ← Python lo hace por ti
\`\`\`

## Parámetros con valores por defecto

\`__init__\` puede tener parámetros opcionales con valores por defecto:

\`\`\`python
class Configuracion:
    def __init__(self, tema="oscuro", idioma="es", volumen=80):
        self.tema = tema
        self.idioma = idioma
        self.volumen = volumen

c1 = Configuracion()                      # usa todos los defaults
c2 = Configuracion("claro")               # cambia solo el tema
c3 = Configuracion("claro", "en", 50)     # cambia todo
c4 = Configuracion(volumen=30)            # solo cambia volumen

print(c1.tema)    # oscuro
print(c2.tema)    # claro
print(c4.volumen) # 30
\`\`\`

## Inicializar atributos derivados

Puedes calcular atributos a partir de otros en \`__init__\`:

\`\`\`python
class Rectangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
        self.area = base * altura          # atributo derivado
        self.perimetro = 2 * (base + altura)  # atributo derivado

r = Rectangulo(5, 3)
print(r.area)       # 15
print(r.perimetro)  # 16
\`\`\`

## Validación en __init__

Es buena práctica validar los datos en el constructor:

\`\`\`python
class Edad:
    def __init__(self, valor):
        if not isinstance(valor, int):
            raise TypeError("La edad debe ser un entero")
        if valor < 0 or valor > 150:
            raise ValueError(f"Edad inválida: {valor}")
        self.valor = valor

e = Edad(25)    # OK
e = Edad(-5)    # ValueError: Edad inválida: -5
e = Edad("25")  # TypeError: La edad debe ser un entero
\`\`\`

## Múltiples constructores con @classmethod

Dado que Python no soporta sobrecarga de constructores, usamos \`@classmethod\` para múltiples formas de crear un objeto:

\`\`\`python
class Fecha:
    def __init__(self, dia, mes, año):
        self.dia = dia
        self.mes = mes
        self.año = año

    @classmethod
    def desde_string(cls, fecha_str):  # "2024-12-25"
        año, mes, dia = map(int, fecha_str.split("-"))
        return cls(dia, mes, año)

    @classmethod
    def hoy(cls):
        from datetime import date
        hoy = date.today()
        return cls(hoy.day, hoy.month, hoy.year)

f1 = Fecha(25, 12, 2024)
f2 = Fecha.desde_string("2024-12-25")
f3 = Fecha.hoy()
\`\`\``,
    codeExample: `class Producto:
    """Clase Producto con constructor completo y validación."""

    IVA = 0.16  # atributo de clase: impuesto

    def __init__(self, nombre, precio, categoria="general", stock=0):
        # Validaciones
        if not nombre.strip():
            raise ValueError("El nombre no puede estar vacío")
        if precio < 0:
            raise ValueError(f"El precio no puede ser negativo: {precio}")
        if stock < 0:
            raise ValueError(f"El stock no puede ser negativo: {stock}")

        # Atributos de instancia
        self.nombre = nombre.strip().title()
        self.precio = precio
        self.categoria = categoria.lower()
        self.stock = stock

        # Atributos derivados
        self.precio_con_iva = round(precio * (1 + Producto.IVA), 2)

    @classmethod
    def desde_dict(cls, datos):
        """Constructor alternativo desde un diccionario."""
        return cls(
            nombre=datos["nombre"],
            precio=datos["precio"],
            categoria=datos.get("categoria", "general"),
            stock=datos.get("stock", 0),
        )

    def aplicar_descuento(self, porcentaje):
        if not 0 < porcentaje < 100:
            raise ValueError("El descuento debe estar entre 0 y 100")
        self.precio = round(self.precio * (1 - porcentaje / 100), 2)
        self.precio_con_iva = round(self.precio * (1 + Producto.IVA), 2)

    def __str__(self):
        return f"{self.nombre} | \${self.precio:.2f} (+IVA: \${self.precio_con_iva:.2f}) | Stock: {self.stock}"


# Crear productos
p1 = Producto("laptop gaming", 1200.00, "electrónica", 5)
p2 = Producto("camiseta", 29.99, stock=100)

datos = {"nombre": "auriculares", "precio": 89.99, "stock": 20}
p3 = Producto.desde_dict(datos)

print(p1)
print(p2)
print(p3)

p1.aplicar_descuento(10)
print(f"Laptop con 10% descuento: {p1}")

# Validación en acción
try:
    mal = Producto("", -50)
except ValueError as e:
    print(f"Error: {e}")`,
    keyPoints: [
      '`__init__` se llama automáticamente al crear un objeto y se usa para inicializar atributos.',
      'Los parámetros de `__init__` pueden tener valores por defecto para hacerlos opcionales.',
      'Puedes calcular atributos derivados y validar datos dentro de `__init__`.',
      'Usa `raise ValueError/TypeError` en el constructor para rechazar datos inválidos.',
      '`@classmethod` permite crear constructores alternativos para distintos formatos de entrada.',
    ],
    exercise: {
      description: 'Crea una clase `CuentaBancaria` con constructor que reciba `titular` y `saldo_inicial` (default 0). Valida que el saldo inicial no sea negativo. Añade métodos `depositar(cantidad)`, `retirar(cantidad)` (valida fondos suficientes) y `__str__` que muestre titular y saldo.',
      hint: 'En `retirar`, si `cantidad > self.saldo` lanza un `ValueError`. En el constructor, si `saldo_inicial < 0` lanza un `ValueError`. El saldo se actualiza con `+=` y `-=`.',
    },
    quiz: [
      {
        question: '¿Cuándo se ejecuta el método `__init__`?',
        options: [
          'Solo cuando lo llamas explícitamente con `obj.__init__()`',
          'Automáticamente cada vez que se crea una nueva instancia de la clase',
          'Solo una vez cuando se define la clase',
          'Cada vez que accedes a un atributo del objeto',
        ],
        correctAnswer: 'Automáticamente cada vez que se crea una nueva instancia de la clase',
        correctFeedback: 'Correcto. Python llama a `__init__` automáticamente justo después de crear el objeto. Es el lugar estándar para inicializar los atributos.',
        incorrectFeedback: '`__init__` se ejecuta automáticamente cada vez que haces `MiClase(argumentos)`. No necesitas llamarlo manualmente.',
      },
      {
        question: '¿Qué ocurre si `__init__` lanza una excepción?',
        options: [
          'El objeto se crea parcialmente con los atributos asignados hasta ese punto',
          'El objeto no se crea y la excepción se propaga al código que intentó crear el objeto',
          'Python ignora la excepción y continúa',
          'El constructor se ejecuta de nuevo automáticamente',
        ],
        correctAnswer: 'El objeto no se crea y la excepción se propaga al código que intentó crear el objeto',
        correctFeedback: 'Exacto. Si `__init__` lanza una excepción, la construcción del objeto falla y ninguna referencia al objeto incompleto queda accesible.',
        incorrectFeedback: 'Si `__init__` lanza una excepción, el objeto no se crea exitosamente. La excepción se propaga al código que intentó hacer `obj = MiClase()`.',
      },
      {
        question: 'Tienes `def __init__(self, x, y=10)`. ¿Cuál llamada es inválida?',
        options: ['`MiClase(5)`', '`MiClase(5, 20)`', '`MiClase(y=20)`', '`MiClase(x=5)`'],
        correctAnswer: '`MiClase(y=20)`',
        correctFeedback: 'Correcto. `x` es obligatorio (no tiene valor por defecto). Llamar solo con `y=20` sin proporcionar `x` produce un TypeError.',
        incorrectFeedback: '`x` es obligatorio porque no tiene valor por defecto. `MiClase(y=20)` falla porque falta `x`. Las otras tres llamadas son válidas.',
      },
      {
        question: '¿Por qué se usan `@classmethod` como constructores alternativos?',
        options: [
          'Porque Python no permite más de un `__init__`',
          'Para mejorar el rendimiento del constructor principal',
          'Para heredar el constructor de la clase padre',
          'Porque es obligatorio tener al menos dos constructores',
        ],
        correctAnswer: 'Porque Python no permite más de un `__init__`',
        correctFeedback: 'Exacto. Python no soporta sobrecarga de métodos. Si necesitas crear objetos desde distintos formatos (string, dict, fecha), usas `@classmethod` como "constructores alternativos".',
        incorrectFeedback: 'A diferencia de Java o C++, Python no permite definir múltiples `__init__` con distintos parámetros. Los `@classmethod` son el patrón estándar para constructores alternativos.',
      },
      {
        question: '¿Cuál es la ventaja de validar datos en `__init__`?',
        options: [
          'Hace que el objeto sea más rápido de crear',
          'Garantiza que el objeto siempre esté en un estado válido desde el momento de su creación',
          'Permite crear el objeto sin parámetros',
          'Es necesario para que `__str__` funcione',
        ],
        correctAnswer: 'Garantiza que el objeto siempre esté en un estado válido desde el momento de su creación',
        correctFeedback: '¡Bien! Validar en el constructor aplica el principio "fail fast": si los datos son inválidos, mejor saberlo de inmediato que descubrirlo después en una operación inesperada.',
        incorrectFeedback: 'La validación en `__init__` implementa "fail fast": si el objeto nace con datos inválidos, se lanza la excepción de inmediato, evitando estados inconsistentes más difíciles de depurar.',
      },
    ],
  },
  {
    slug: 'self-python',
    title: 'Entendiendo self',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 36,
    description: 'Comprende en profundidad qué es self, por qué existe y cómo Python lo pasa automáticamente.',
    explanation: `## ¿Qué es self?

\`self\` es una referencia al **objeto actual**. Cuando llamas a un método, Python pasa automáticamente el objeto como primer argumento.

\`\`\`python
class Perro:
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print(f"{self.nombre} dice: ¡Guau!")

rex = Perro("Rex")
rex.ladrar()
# Python traduce esto a:
# Perro.ladrar(rex)   ← pasa rex como self
\`\`\`

## ¿Por qué se llama self?

\`self\` no es una palabra reservada de Python, es solo una **convención**. Podrías llamarlo \`este\`, \`yo\` o \`x\`, pero **nunca debes** hacerlo: toda la comunidad Python usa \`self\`.

\`\`\`python
class Ejemplo:
    def metodo(yo):          # funciona pero es mala práctica
        return yo.valor

class Ejemplo2:
    def metodo(self):        # correcto
        return self.valor
\`\`\`

## ¿Cómo pasa Python self?

Cuando haces \`obj.metodo(arg)\`, Python lo convierte internamente en \`Clase.metodo(obj, arg)\`:

\`\`\`python
class Suma:
    def __init__(self, base):
        self.base = base

    def sumar(self, n):
        return self.base + n

s = Suma(10)

# Estas dos llamadas son equivalentes:
print(s.sumar(5))        # llamada normal → 15
print(Suma.sumar(s, 5))  # llamada "manual" → 15
\`\`\`

## self en métodos encadenados

Puedes devolver \`self\` para encadenar métodos (patrón fluent interface):

\`\`\`python
class Constructor:
    def __init__(self):
        self.partes = []

    def agregar(self, parte):
        self.partes.append(parte)
        return self   # devuelve self para encadenar

    def construir(self):
        return " + ".join(self.partes)

resultado = Constructor().agregar("A").agregar("B").agregar("C").construir()
print(resultado)  # A + B + C
\`\`\`

## self no existe fuera de los métodos

\`self\` solo tiene sentido dentro de los métodos de instancia. En el cuerpo de la clase (fuera de métodos) no existe:

\`\`\`python
class MiClase:
    valor_clase = 42        # aquí no hay self

    def mi_metodo(self):
        print(self.valor_clase)  # aquí sí existe self
\`\`\`

## ¿Por qué Python requiere self explícito?

A diferencia de Java o C++ (donde \`this\` es implícito), Python requiere \`self\` explícito por **legibilidad**: siempre sabes cuándo estás accediendo a atributos del objeto vs. variables locales.`,
    codeExample: `class Pila:
    """Implementación de una pila (stack) usando POO."""

    def __init__(self):
        self._datos = []      # lista interna (privada por convención)
        self._max_size = None

    def con_limite(self, max_size):
        """Configura un límite y devuelve self para encadenamiento."""
        self._max_size = max_size
        return self  # permite encadenamiento

    def apilar(self, valor):
        """Agrega un elemento al tope."""
        if self._max_size and len(self._datos) >= self._max_size:
            raise OverflowError(f"La pila está llena (máx: {self._max_size})")
        self._datos.append(valor)
        return self  # encadenamiento

    def desapilar(self):
        """Quita y devuelve el elemento del tope."""
        if self.esta_vacia():
            raise IndexError("La pila está vacía")
        return self._datos.pop()

    def tope(self):
        """Devuelve el elemento del tope sin quitarlo."""
        if self.esta_vacia():
            return None
        return self._datos[-1]

    def esta_vacia(self):
        return len(self._datos) == 0

    def tamaño(self):
        return len(self._datos)

    def limpiar(self):
        self._datos.clear()
        return self

    def __str__(self):
        if self.esta_vacia():
            return "Pila vacía"
        items = " | ".join(str(x) for x in reversed(self._datos))
        return f"[tope → {items}]"


# Demostración de self y encadenamiento
p = Pila().con_limite(5)

# Encadenamiento de métodos (cada uno devuelve self)
p.apilar(1).apilar(2).apilar(3)
print(p)          # [tope → 3 | 2 | 1]
print(f"Tamaño: {p.tamaño()}")
print(f"Tope: {p.tope()}")

print(f"Desapilado: {p.desapilar()}")
print(p)

# Demostrar que self es el objeto concreto
p2 = Pila()
p2.apilar("x").apilar("y")
print(f"p: {p}")     # objetos independientes
print(f"p2: {p2}")`,
    keyPoints: [
      '`self` es una referencia al objeto actual; Python lo pasa automáticamente como primer argumento.',
      '`obj.metodo(arg)` es equivalente a `Clase.metodo(obj, arg)`: Python inserta `self` por ti.',
      '`self` es solo una convención de nombre, no una palabra reservada, pero siempre debe usarse.',
      'Devolver `self` en métodos permite encadenar llamadas: `obj.a().b().c()`.',
      '`self` solo existe dentro de los métodos de instancia, no en el cuerpo de la clase.',
    ],
    exercise: {
      description: 'Crea una clase `Cadena` que envuelva un string. Añade métodos `mayusculas()`, `minusculas()`, `invertir()` y `reemplazar(viejo, nuevo)` que modifiquen el string interno y devuelvan `self` para permitir encadenamiento. Prueba: `Cadena("Hola Mundo").invertir().mayusculas().reemplazar("O", "0")` y muestra el resultado.',
      hint: 'Guarda el string en `self.texto`. Cada método debe actualizar `self.texto` y luego `return self`. Define `__str__` para poder imprimir el objeto directamente.',
    },
    quiz: [
      {
        question: '¿Qué es `self` en Python?',
        options: [
          'Una palabra reservada que Python entiende de forma especial',
          'Una convención de nombre para el primer parámetro de métodos de instancia, que referencia al objeto actual',
          'Una variable global que contiene la clase actual',
          'El nombre del archivo donde se define la clase',
        ],
        correctAnswer: 'Una convención de nombre para el primer parámetro de métodos de instancia, que referencia al objeto actual',
        correctFeedback: 'Exacto. `self` no es una palabra reservada; podrías usar otro nombre, pero la convención universal en Python es `self`.',
        incorrectFeedback: '`self` no es una palabra reservada de Python. Es simplemente la convención para el primer parámetro de los métodos de instancia, que referencia al objeto concreto.',
      },
      {
        question: 'Si tienes `obj = MiClase()` y llamas `obj.metodo(5)`, ¿qué recibe el parámetro `self` dentro del método?',
        options: [
          'El número 5',
          'La clase `MiClase`',
          'El objeto `obj`',
          'El valor `None`',
        ],
        correctAnswer: 'El objeto `obj`',
        correctFeedback: 'Correcto. Python pasa automáticamente `obj` como `self`. Dentro del método, `self` y `obj` apuntan al mismo objeto en memoria.',
        incorrectFeedback: 'Python convierte `obj.metodo(5)` en `MiClase.metodo(obj, 5)`. Así, `self` recibe `obj` (el objeto) y el parámetro siguiente recibe `5`.',
      },
      {
        question: '¿Para qué se devuelve `self` en un método?',
        options: [
          'Para destruir el objeto al terminar el método',
          'Para permitir el encadenamiento de métodos: `obj.a().b().c()`',
          'Para copiar el objeto en otro',
          'Es obligatorio devolverlo en todos los métodos',
        ],
        correctAnswer: 'Para permitir el encadenamiento de métodos: `obj.a().b().c()`',
        correctFeedback: '¡Bien! Cuando un método devuelve `self`, el resultado de la llamada es el mismo objeto, lo que permite encadenar otra llamada de método directamente.',
        incorrectFeedback: 'Devolver `self` es opcional y se usa para el patrón "fluent interface" o "method chaining": permite hacer `obj.metodo1().metodo2().metodo3()` en una sola línea.',
      },
      {
        question: '¿Qué imprime este código?\n```python\nclass A:\n    def m(self):\n        return self\na = A()\nprint(a.m() is a)\n```',
        options: ['`False`', '`True`', '`None`', 'Un error'],
        correctAnswer: '`True`',
        correctFeedback: 'Correcto. `a.m()` devuelve `self`, que es el mismo objeto `a`. Entonces `a.m() is a` compara la identidad del objeto y es `True`.',
        incorrectFeedback: 'El método `m` devuelve `self`, que es el objeto `a`. El operador `is` comprueba identidad de objeto, y como `a.m()` devuelve `a`, el resultado es `True`.',
      },
      {
        question: 'Dentro de una clase, ¿se puede usar `self` fuera de un método de instancia?',
        options: [
          'Sí, en cualquier parte del cuerpo de la clase',
          'No, `self` solo existe dentro de los métodos de instancia',
          'Sí, pero solo en los atributos de clase',
          'Sí, en los `@classmethod` también',
        ],
        correctAnswer: 'No, `self` solo existe dentro de los métodos de instancia',
        correctFeedback: 'Correcto. En el cuerpo de la clase (fuera de métodos) no hay objeto concreto todavía. `self` solo aparece como parámetro de los métodos de instancia.',
        incorrectFeedback: '`self` solo existe como parámetro dentro de los métodos de instancia. En los métodos de clase se usa `cls`. En el cuerpo de la clase (nivel de definición) no hay `self`.',
      },
    ],
  },
  {
    slug: 'encapsulamiento-basico',
    title: 'Encapsulamiento',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 37,
    description: 'Aprende a proteger el estado interno de tus objetos con getters, setters y propiedades en Python.',
    explanation: `## ¿Qué es el encapsulamiento?

El encapsulamiento significa **ocultar los detalles internos** de un objeto y exponer solo una interfaz controlada. Esto protege la integridad de los datos.

## Convenciones de acceso en Python

Python usa convenciones de nombre (no palabras clave):

| Prefijo | Convención | Significado |
|---------|-----------|-------------|
| \`nombre\` | Sin prefijo | Público: accesible desde cualquier lugar |
| \`_nombre\` | Un guion bajo | Protegido: "por favor, no accedas directamente" |
| \`__nombre\` | Doble guion bajo | Privado (name mangling): acceso difícil desde fuera |

\`\`\`python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre        # público
        self._email = None          # protegido
        self.__contraseña = "1234"  # privado (name mangling)
\`\`\`

## Getters y setters básicos

\`\`\`python
class Temperatura:
    def __init__(self, celsius):
        self._celsius = celsius

    def get_celsius(self):
        return self._celsius

    def set_celsius(self, valor):
        if valor < -273.15:
            raise ValueError("Por debajo del cero absoluto")
        self._celsius = valor

t = Temperatura(25)
t.set_celsius(100)
print(t.get_celsius())   # 100
\`\`\`

## Properties: la forma Pythónica

Las **properties** permiten usar getters/setters con sintaxis de atributo:

\`\`\`python
class Temperatura:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):               # getter
        return self._celsius

    @celsius.setter
    def celsius(self, valor):        # setter
        if valor < -273.15:
            raise ValueError("Por debajo del cero absoluto")
        self._celsius = valor

    @property
    def fahrenheit(self):            # propiedad de solo lectura
        return self._celsius * 9/5 + 32

t = Temperatura(25)
print(t.celsius)      # 25  (llama al getter)
t.celsius = 100       # llama al setter
print(t.fahrenheit)   # 212.0
# t.fahrenheit = 50   # AttributeError: no hay setter
\`\`\`

## ¿Por qué usar properties?

1. **Validación**: puedes validar el valor antes de asignarlo
2. **Calculadas**: una propiedad puede calcular su valor al vuelo
3. **Compatibilidad**: cambia de atributo a property sin romper la API

\`\`\`python
class Circulo:
    def __init__(self, radio):
        self.radio = radio   # usa el setter automáticamente

    @property
    def radio(self):
        return self._radio

    @radio.setter
    def radio(self, valor):
        if valor < 0:
            raise ValueError("El radio no puede ser negativo")
        self._radio = valor

    @property
    def area(self):
        import math
        return math.pi * self._radio ** 2
\`\`\``,
    codeExample: `class CuentaBancaria:
    """Cuenta bancaria con encapsulamiento completo."""

    INTERES_ANUAL = 0.035  # 3.5% anual (atributo de clase)

    def __init__(self, titular, saldo_inicial=0):
        self._titular = titular
        self._historial = []
        self.saldo = saldo_inicial  # usa el setter con validación

    @property
    def titular(self):
        return self._titular

    @property
    def saldo(self):
        return self._saldo

    @saldo.setter
    def saldo(self, valor):
        if not isinstance(valor, (int, float)):
            raise TypeError("El saldo debe ser numérico")
        if valor < 0:
            raise ValueError("El saldo no puede ser negativo")
        self._saldo = round(float(valor), 2)

    @property
    def historial(self):
        return list(self._historial)  # copia para proteger el original

    def depositar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("El depósito debe ser positivo")
        self._saldo += round(cantidad, 2)
        self._historial.append(f"+ \${cantidad:.2f} → saldo: \${self._saldo:.2f}")

    def retirar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("El retiro debe ser positivo")
        if cantidad > self._saldo:
            raise ValueError(f"Fondos insuficientes. Saldo: \${self._saldo:.2f}")
        self._saldo -= round(cantidad, 2)
        self._historial.append(f"- \${cantidad:.2f} → saldo: \${self._saldo:.2f}")

    def aplicar_interes(self):
        interes = round(self._saldo * self.INTERES_ANUAL, 2)
        self._saldo += interes
        self._historial.append(f"Interés: +\${interes:.2f} → saldo: \${self._saldo:.2f}")

    def __str__(self):
        return f"Cuenta de {self._titular}: \${self._saldo:.2f}"


# Uso de la cuenta
cuenta = CuentaBancaria("Ana García", 1000)
cuenta.depositar(500)
cuenta.retirar(200)
cuenta.aplicar_interes()

print(cuenta)
print("\nHistorial:")
for movimiento in cuenta.historial:
    print(f"  {movimiento}")

# El historial externo es una copia: no afecta al interno
h = cuenta.historial
h.append("MOVIMIENTO FALSO")
print(f"\nHistorial interno intacto: {len(cuenta.historial)} movimientos")

# Validación automática
try:
    cuenta.saldo = -500
except ValueError as e:
    print(f"\nError: {e}")`,
    keyPoints: [
      'El encapsulamiento protege el estado interno exponiendo solo lo necesario.',
      'Python usa convenciones: `_attr` para protegido, `__attr` para privado (name mangling).',
      'Las `@property` permiten getters/setters con sintaxis de atributo normal.',
      'El setter en una property puede validar antes de asignar el valor.',
      'Una property sin setter es de solo lectura: intentar asignarla lanza `AttributeError`.',
    ],
    exercise: {
      description: 'Crea una clase `Estudiante` con una property `nota` que solo acepte valores entre 0 y 10 (lanza `ValueError` si no). Añade una property de solo lectura `aprobado` que devuelva `True` si la nota es >= 6, y `__str__` que muestre nombre y estado (Aprobado/Reprobado).',
      hint: 'Define `nota` como property con getter y setter. En el setter valida el rango. La property `aprobado` no necesita setter; solo devuelve `self._nota >= 6`.',
    },
    quiz: [
      {
        question: '¿Qué significa el prefijo `_` en `self._saldo`?',
        options: [
          'El atributo es completamente privado e inaccesible',
          'Es una convención que indica "protegido": no deberías acceder directamente desde fuera',
          'El atributo es constante y no puede cambiar',
          'Python le aplica cifrado automático al valor',
        ],
        correctAnswer: 'Es una convención que indica "protegido": no deberías acceder directamente desde fuera',
        correctFeedback: 'Correcto. Un solo guion bajo es solo una convención social en Python. Técnicamente puedes acceder a `obj._saldo`, pero la convención dice que no deberías.',
        incorrectFeedback: 'Python no impide acceder a `_saldo`. Es solo una señal para otros programadores: "este atributo es interno, no lo toques directamente desde fuera de la clase".',
      },
      {
        question: '¿Qué ventaja tiene `@property` sobre un método getter normal como `get_saldo()`?',
        options: [
          'La property es más rápida en tiempo de ejecución',
          'Permite acceder con sintaxis de atributo (`obj.saldo`) manteniendo validación/lógica interna',
          'La property no necesita `self`',
          'No hay diferencia práctica',
        ],
        correctAnswer: 'Permite acceder con sintaxis de atributo (`obj.saldo`) manteniendo validación/lógica interna',
        correctFeedback: '¡Exacto! Con `@property` puedes escribir `obj.saldo` en lugar de `obj.get_saldo()`, haciendo el código más legible, sin perder la capacidad de validar.',
        incorrectFeedback: 'La ventaja principal de `@property` es la sintaxis: el código que usa el objeto puede escribir `obj.saldo` (no `obj.get_saldo()`), mientras que internamente se ejecuta la lógica del getter.',
      },
      {
        question: '¿Qué ocurre si intentas asignar a una property que no tiene setter?',
        options: [
          'Python ignora silenciosamente la asignación',
          'Se lanza un `AttributeError`',
          'Se crea un atributo de instancia normal con ese nombre',
          'Se lanza un `TypeError`',
        ],
        correctAnswer: 'Se lanza un `AttributeError`',
        correctFeedback: 'Correcto. Una property sin setter es de solo lectura. Intentar `obj.prop = valor` lanza `AttributeError: can\'t set attribute`.',
        incorrectFeedback: 'Si una property no define `@nombre.setter`, es de solo lectura. Intentar asignarle un valor lanza `AttributeError`.',
      },
      {
        question: '¿Cuál es el propósito principal del encapsulamiento?',
        options: [
          'Hacer que el código se ejecute más rápido',
          'Ocultar detalles internos y controlar el acceso para proteger la integridad del objeto',
          'Evitar que la clase sea heredada',
          'Reducir el número de atributos necesarios',
        ],
        correctAnswer: 'Ocultar detalles internos y controlar el acceso para proteger la integridad del objeto',
        correctFeedback: 'Exacto. El encapsulamiento garantiza que el objeto siempre esté en un estado válido, porque el acceso a sus datos internos pasa por métodos que pueden validar.',
        incorrectFeedback: 'El encapsulamiento protege la integridad: en lugar de exponer los datos directamente, los expones a través de métodos o properties que pueden validar y controlar los cambios.',
      },
      {
        question: 'Si `self.__contraseña = "1234"` en la clase `Usuario`, ¿cómo accedes a ella desde fuera?',
        options: [
          '`usuario.__contraseña`',
          '`usuario._contraseña`',
          '`usuario._Usuario__contraseña`',
          'No se puede acceder de ninguna forma',
        ],
        correctAnswer: '`usuario._Usuario__contraseña`',
        correctFeedback: 'Correcto. Python aplica "name mangling": `__contraseña` se convierte internamente en `_Usuario__contraseña`. Técnicamente accesible, pero claramente no recomendado.',
        incorrectFeedback: 'Python aplica "name mangling" al doble guion bajo: `__attr` en la clase `Foo` se convierte en `_Foo__attr`. Así que `usuario._Usuario__contraseña` funciona, aunque es una muy mala práctica.',
      },
    ],
  },
  {
    slug: 'herencia-basica',
    title: 'Herencia',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 38,
    description: 'Aprende a crear jerarquías de clases con herencia, super() y sobreescritura de métodos.',
    explanation: `## ¿Qué es la herencia?

La **herencia** permite crear una clase nueva (**hija** o **subclase**) que hereda atributos y métodos de una clase existente (**padre** o **superclase**).

\`\`\`python
class Animal:            # clase padre
    def __init__(self, nombre):
        self.nombre = nombre

    def respirar(self):
        return f"{self.nombre} respira"

class Perro(Animal):     # clase hija: hereda de Animal
    def ladrar(self):
        return f"{self.nombre} dice ¡Guau!"

rex = Perro("Rex")
print(rex.respirar())   # Rex respira   ← método heredado
print(rex.ladrar())     # Rex dice ¡Guau! ← método propio
print(isinstance(rex, Perro))   # True
print(isinstance(rex, Animal))  # True (también es un Animal)
\`\`\`

## super(): llamar al padre

\`super()\` llama al método de la clase padre. Se usa especialmente en \`__init__\`:

\`\`\`python
class Animal:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

class Perro(Animal):
    def __init__(self, nombre, edad, raza):
        super().__init__(nombre, edad)  # inicializa lo del padre
        self.raza = raza                # añade lo nuevo

rex = Perro("Rex", 3, "Labrador")
print(rex.nombre, rex.edad, rex.raza)  # Rex 3 Labrador
\`\`\`

## Sobreescritura de métodos (overriding)

Una subclase puede redefinir métodos de la clase padre:

\`\`\`python
class Animal:
    def hablar(self):
        return "..."

class Perro(Animal):
    def hablar(self):        # sobreescribe el método
        return "¡Guau!"

class Gato(Animal):
    def hablar(self):        # sobreescribe el método
        return "¡Miau!"

class Pez(Animal):
    pass                     # hereda hablar() sin cambios

animales = [Perro("Rex"), Gato("Whiskers"), Pez("Nemo")]
for a in animales:
    print(f"{a.nombre}: {a.hablar()}")
# Rex: ¡Guau!
# Whiskers: ¡Miau!
# Nemo: ...
\`\`\`

## Herencia múltiple

Python permite heredar de varias clases:

\`\`\`python
class Volador:
    def volar(self):
        return "Volando"

class Nadador:
    def nadar(self):
        return "Nadando"

class Pato(Volador, Nadador):
    pass

pato = Pato()
print(pato.volar())  # Volando
print(pato.nadar())  # Nadando
\`\`\`

## issubclass e isinstance

\`\`\`python
print(issubclass(Perro, Animal))    # True
print(issubclass(Animal, Perro))    # False
print(isinstance(rex, Animal))      # True (rex es Animal y Perro)
\`\`\``,
    codeExample: `class Empleado:
    """Clase base para todos los empleados."""

    def __init__(self, nombre, id_empleado, salario_base):
        self.nombre = nombre
        self.id_empleado = id_empleado
        self._salario_base = salario_base

    @property
    def salario_base(self):
        return self._salario_base

    def calcular_salario(self):
        return self._salario_base

    def descripcion(self):
        return f"Empleado {self.id_empleado}: {self.nombre}"

    def __str__(self):
        return f"{self.descripcion()} | Salario: \${self.calcular_salario():,.2f}"


class Desarrollador(Empleado):
    """Empleado con bono por lenguajes que domina."""

    BONO_POR_LENGUAJE = 200

    def __init__(self, nombre, id_empleado, salario_base, lenguajes):
        super().__init__(nombre, id_empleado, salario_base)
        self.lenguajes = lenguajes

    def calcular_salario(self):
        bono = len(self.lenguajes) * self.BONO_POR_LENGUAJE
        return self._salario_base + bono

    def descripcion(self):
        base = super().descripcion()
        return f"{base} (Dev: {', '.join(self.lenguajes)})"


class Gerente(Empleado):
    """Empleado con bono por equipo que maneja."""

    def __init__(self, nombre, id_empleado, salario_base, equipo):
        super().__init__(nombre, id_empleado, salario_base)
        self.equipo = equipo  # lista de Empleado

    def calcular_salario(self):
        bono_gestion = len(self.equipo) * 500
        return self._salario_base + bono_gestion

    def agregar_miembro(self, empleado):
        self.equipo.append(empleado)

    def descripcion(self):
        return f"Gerente {self.id_empleado}: {self.nombre} (equipo: {len(self.equipo)})"


# Crear empleados
dev1 = Desarrollador("Ana", "D001", 3000, ["Python", "JavaScript", "SQL"])
dev2 = Desarrollador("Luis", "D002", 2800, ["Python", "Go"])
gerente = Gerente("María", "G001", 4000, [dev1, dev2])

empleados = [dev1, dev2, gerente]

print("=== Nómina ===")
for emp in empleados:
    print(emp)

print(f"\nTotal nómina: \${sum(e.calcular_salario() for e in empleados):,.2f}")

print(f"\n¿dev1 es Empleado? {isinstance(dev1, Empleado)}")
print(f"¿gerente es Desarrollador? {isinstance(gerente, Desarrollador)}")
print(f"¿Desarrollador hereda de Empleado? {issubclass(Desarrollador, Empleado)}")`,
    keyPoints: [
      'La herencia permite crear subclases que reutilizan y extienden la clase padre.',
      '`super().__init__(...)` llama al constructor del padre para inicializar sus atributos.',
      'El overriding sobreescribe un método del padre en la subclase.',
      '`isinstance(obj, Clase)` devuelve `True` si el objeto es de esa clase o una subclase.',
      '`issubclass(SubClase, Clase)` verifica relaciones de herencia entre clases.',
    ],
    exercise: {
      description: 'Crea una clase base `Figura` con un método `area()` que devuelva 0. Crea subclases `Cuadrado(lado)` y `TrianguloRectangulo(base, altura)` que sobreescriban `area()`. Crea una lista con instancias de ambas figuras e imprime el área de cada una.',
      hint: 'El área del cuadrado es `lado**2`. El área del triángulo rectángulo es `base * altura / 2`. Al hacer `for f in figuras: print(f.area())`, Python llama al método correcto de cada subclase.',
    },
    quiz: [
      {
        question: '¿Para qué sirve `super().__init__(...)` en una subclase?',
        options: [
          'Para crear una copia del objeto padre',
          'Para llamar al constructor de la clase padre y así inicializar sus atributos',
          'Para sobreescribir el `__init__` del padre completamente',
          'Para verificar si el padre tiene un `__init__`',
        ],
        correctAnswer: 'Para llamar al constructor de la clase padre y así inicializar sus atributos',
        correctFeedback: 'Exacto. `super().__init__(...)` delega la inicialización de los atributos heredados al padre. Sin esta llamada, esos atributos no se inicializarían.',
        incorrectFeedback: '`super().__init__(...)` invoca el constructor de la clase padre. Es necesario cuando la subclase necesita añadir atributos propios SIN perder la inicialización que hace el padre.',
      },
      {
        question: '¿Qué es el "overriding" (sobreescritura)?',
        options: [
          'Añadir un método con un nombre nuevo en la subclase',
          'Redefinir en la subclase un método que ya existe en la clase padre',
          'Llamar a un método del padre desde la subclase',
          'Eliminar un método heredado',
        ],
        correctAnswer: 'Redefinir en la subclase un método que ya existe en la clase padre',
        correctFeedback: 'Correcto. El overriding permite que la subclase tenga su propia implementación de un método heredado, adaptada a su comportamiento específico.',
        incorrectFeedback: 'El overriding consiste en definir en la subclase un método con el mismo nombre que uno del padre. Python usa la versión de la subclase cuando el método se llama en un objeto de ese tipo.',
      },
      {
        question: 'Si `Perro` hereda de `Animal`, ¿qué devuelve `isinstance(perro, Animal)`?',
        options: ['`False`, porque `perro` es un `Perro`, no un `Animal`', '`True`, porque `Perro` es una subclase de `Animal`', 'Un error porque se pasan dos clases', '`None`'],
        correctAnswer: '`True`, porque `Perro` es una subclase de `Animal`',
        correctFeedback: 'Correcto. `isinstance` devuelve `True` si el objeto es de la clase dada o de cualquier subclase. Un `Perro` es también un `Animal`.',
        incorrectFeedback: '`isinstance(obj, Clase)` devuelve `True` si el objeto es instancia de la clase OR de cualquier subclase. Como `Perro` hereda de `Animal`, un perro también es un animal.',
      },
      {
        question: '¿Qué sucede si una subclase NO define `__init__`?',
        options: [
          'Se produce un error al crear instancias de la subclase',
          'La subclase hereda automáticamente el `__init__` de la clase padre',
          'Python crea un `__init__` vacío que no hace nada',
          'La subclase no puede tener atributos',
        ],
        correctAnswer: 'La subclase hereda automáticamente el `__init__` de la clase padre',
        correctFeedback: 'Correcto. Si no defines `__init__` en la subclase, Python busca en la clase padre (y sigue subiendo en la jerarquía) hasta encontrar uno.',
        incorrectFeedback: 'La herencia aplica a todos los métodos, incluido `__init__`. Si la subclase no define uno propio, usa el del padre automáticamente.',
      },
      {
        question: '¿Qué verifica `issubclass(Gato, Animal)`?',
        options: [
          'Si existe un objeto de tipo `Gato` que sea `Animal`',
          'Si la clase `Gato` hereda directa o indirectamente de la clase `Animal`',
          'Si `Gato` y `Animal` tienen los mismos métodos',
          'Si `Animal` hereda de `Gato`',
        ],
        correctAnswer: 'Si la clase `Gato` hereda directa o indirectamente de la clase `Animal`',
        correctFeedback: '¡Bien! `issubclass` comprueba la relación entre clases (no entre objetos). Devuelve `True` si `Gato` es subclase de `Animal` en cualquier nivel de la jerarquía.',
        incorrectFeedback: '`issubclass(A, B)` verifica si la clase `A` hereda (directa o indirectamente) de la clase `B`. Opera sobre clases, no sobre instancias.',
      },
    ],
  },
  {
    slug: 'sistema-estudiantes',
    title: 'Proyecto: Sistema de estudiantes',
    module: 'Programación orientada a objetos',
    moduleNumber: 9,
    order: 39,
    description: 'Integra todos los conceptos de POO en un sistema completo de gestión de estudiantes con clases, herencia y encapsulamiento.',
    explanation: `## Proyecto integrador de POO

En esta lección construiremos un sistema de gestión académica que integra todos los conceptos vistos:

- **Clases y objetos**: Persona, Estudiante, Profesor, Curso
- **Encapsulamiento**: properties para validar notas y datos
- **Herencia**: Estudiante y Profesor heredan de Persona
- **Métodos especiales**: \`__str__\`, \`__repr__\`
- **Métodos de clase**: constructores alternativos
- **Composición**: un Curso contiene Estudiantes y un Profesor

## Diagrama de clases

\`\`\`
Persona
  ├── Estudiante  (hereda)
  └── Profesor    (hereda)

Curso
  ├── tiene un Profesor (composición)
  └── tiene varios Estudiantes (composición)
\`\`\`

## Diferencia entre herencia y composición

- **Herencia**: "es un" → Estudiante ES UNA Persona
- **Composición**: "tiene un" → Curso TIENE UN Profesor

Ambas son herramientas complementarias. La composición evita jerarquías de herencia excesivamente profundas.

## El método __repr__

Mientras \`__str__\` es para el usuario final, \`__repr__\` es para desarrolladores:

\`\`\`python
class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"       # legible

    def __repr__(self):
        return f"Punto({self.x!r}, {self.y!r})"  # reproducible
\`\`\`

## Diseño con composición

\`\`\`python
class Motor:
    def __init__(self, cilindros):
        self.cilindros = cilindros

    def encender(self):
        return f"Motor de {self.cilindros} cilindros encendido"

class Coche:
    def __init__(self, marca, cilindros):
        self.marca = marca
        self.motor = Motor(cilindros)  # composición

    def arrancar(self):
        return f"{self.marca}: {self.motor.encender()}"
\`\`\``,
    codeExample: `import math
from datetime import date


class Persona:
    def __init__(self, nombre, apellido, fecha_nacimiento):
        self.nombre = nombre
        self.apellido = apellido
        self._fecha_nacimiento = fecha_nacimiento  # "YYYY-MM-DD"

    @property
    def nombre_completo(self):
        return f"{self.nombre} {self.apellido}"

    @property
    def edad(self):
        hoy = date.today()
        nac = date.fromisoformat(self._fecha_nacimiento)
        años = hoy.year - nac.year
        if (hoy.month, hoy.day) < (nac.month, nac.day):
            años -= 1
        return años

    def __repr__(self):
        return f"{self.__class__.__name__}('{self.nombre}', '{self.apellido}')"


class Estudiante(Persona):
    def __init__(self, nombre, apellido, fecha_nacimiento, matricula):
        super().__init__(nombre, apellido, fecha_nacimiento)
        self.matricula = matricula
        self._notas = {}  # {materia: [notas]}

    def agregar_nota(self, materia, nota):
        if not 0 <= nota <= 10:
            raise ValueError(f"Nota inválida: {nota}. Debe estar entre 0 y 10")
        if materia not in self._notas:
            self._notas[materia] = []
        self._notas[materia].append(nota)

    def promedio(self, materia=None):
        if materia:
            notas = self._notas.get(materia, [])
            return sum(notas) / len(notas) if notas else None
        todas = [n for ns in self._notas.values() for n in ns]
        return round(sum(todas) / len(todas), 2) if todas else None

    @property
    def aprobado(self):
        prom = self.promedio()
        return prom is not None and prom >= 6.0

    def reporte(self):
        lines = [f"Estudiante: {self.nombre_completo} ({self.matricula})"]
        for materia, notas in self._notas.items():
            prom = sum(notas) / len(notas)
            estado = "✓" if prom >= 6 else "✗"
            lines.append(f"  {estado} {materia}: {prom:.1f} ({notas})")
        prom_gen = self.promedio()
        lines.append(f"  Promedio general: {prom_gen:.2f} — {'APROBADO' if self.aprobado else 'REPROBADO'}")
        return "\n".join(lines)

    def __str__(self):
        return f"Estudiante: {self.nombre_completo} | Promedio: {self.promedio() or 'N/A'}"


class Profesor(Persona):
    def __init__(self, nombre, apellido, fecha_nacimiento, especialidad):
        super().__init__(nombre, apellido, fecha_nacimiento)
        self.especialidad = especialidad

    def __str__(self):
        return f"Prof. {self.nombre_completo} ({self.especialidad})"


class Curso:
    def __init__(self, nombre, profesor):
        self.nombre = nombre
        self.profesor = profesor
        self._estudiantes = []

    def inscribir(self, estudiante):
        if any(e.matricula == estudiante.matricula for e in self._estudiantes):
            raise ValueError(f"{estudiante.nombre_completo} ya está inscrito")
        self._estudiantes.append(estudiante)

    def promedio_curso(self):
        promedios = [e.promedio() for e in self._estudiantes if e.promedio() is not None]
        return round(sum(promedios) / len(promedios), 2) if promedios else None

    def estadisticas(self):
        aprobados = sum(1 for e in self._estudiantes if e.aprobado)
        total = len(self._estudiantes)
        return {
            "total": total,
            "aprobados": aprobados,
            "reprobados": total - aprobados,
            "promedio_curso": self.promedio_curso(),
        }

    def __str__(self):
        stats = self.estadisticas()
        return (f"Curso: {self.nombre} | Prof: {self.profesor.nombre_completo} "
                f"| Estudiantes: {stats['total']} | Aprobados: {stats['aprobados']}")


# ===================== Uso del sistema =====================

prof = Profesor("Carlos", "Mendoza", "1980-03-15", "Matemáticas")

e1 = Estudiante("Ana", "García", "2002-07-10", "2024001")
e2 = Estudiante("Luis", "Pérez", "2003-01-22", "2024002")
e3 = Estudiante("Sofía", "Ramos", "2002-11-05", "2024003")

curso = Curso("Álgebra Lineal", prof)
for e in [e1, e2, e3]:
    curso.inscribir(e)

# Registrar notas
for nota in [8.5, 7.0, 9.0]: e1.agregar_nota("Álgebra Lineal", nota)
for nota in [5.0, 4.5, 6.0]: e2.agregar_nota("Álgebra Lineal", nota)
for nota in [9.5, 8.0, 9.0]: e3.agregar_nota("Álgebra Lineal", nota)

print(curso)
print()
for estudiante in [e1, e2, e3]:
    print(estudiante.reporte())
    print()

stats = curso.estadisticas()
print(f"Estadísticas del curso:")
print(f"  Promedio: {stats['promedio_curso']}")
print(f"  Aprobados: {stats['aprobados']}/{stats['total']}")`,
    keyPoints: [
      'La composición ("tiene un") complementa la herencia ("es un") para diseños más flexibles.',
      '`__repr__` es para desarrolladores y debe mostrar cómo reproducir el objeto.',
      'Las properties con validación garantizan la integridad de los datos en todo momento.',
      'En un sistema real, las clases se diseñan para tener una sola responsabilidad.',
      'La herencia permite reutilizar lógica común (Persona) sin repetir código en cada subclase.',
    ],
    exercise: {
      description: 'Extiende el sistema: crea una clase `Biblioteca` con una lista de libros (usa la clase `Libro` de lecciones anteriores o créala de nuevo). Añade métodos `agregar_libro(libro)`, `buscar_por_autor(autor)` que devuelva lista de libros, y `listar()` que imprima todos. Crea 3 libros, agrégalos y busca por un autor.',
      hint: '`buscar_por_autor` puede usar una list comprehension: `[l for l in self._libros if l.autor.lower() == autor.lower()]`. `listar()` itera sobre `self._libros` e imprime cada uno (necesitarás `__str__` en `Libro`).',
    },
    quiz: [
      {
        question: '¿Qué es la composición en POO?',
        options: [
          'Una clase que hereda de varias clases a la vez',
          'Una relación "tiene un": un objeto contiene o referencia a otro objeto',
          'La combinación de métodos de instancia y estáticos',
          'Unir dos clases en una sola clase más grande',
        ],
        correctAnswer: 'Una relación "tiene un": un objeto contiene o referencia a otro objeto',
        correctFeedback: 'Exacto. La composición modela relaciones "tiene un". Un `Curso` tiene un `Profesor` y tiene `Estudiantes`. Es diferente a la herencia, que modela "es un".',
        incorrectFeedback: 'La composición es cuando un objeto contiene o usa otro objeto. "Un Coche tiene un Motor" es composición. "Un Perro es un Animal" es herencia.',
      },
      {
        question: '¿Cuándo deberías preferir composición sobre herencia?',
        options: [
          'Siempre: la composición es superior a la herencia',
          'Cuando la relación es "tiene un" en lugar de "es un"',
          'Cuando necesitas reutilizar el constructor de otra clase',
          'Nunca: la herencia siempre es más eficiente',
        ],
        correctAnswer: 'Cuando la relación es "tiene un" en lugar de "es un"',
        correctFeedback: 'Correcto. La regla práctica: si puedes decir "A es un B", usa herencia. Si dices "A tiene un B", usa composición. Ambas son herramientas válidas para situaciones distintas.',
        incorrectFeedback: 'El criterio es la relación semántica: herencia para "es un" (Estudiante es una Persona), composición para "tiene un" (Curso tiene un Profesor).',
      },
      {
        question: '¿Cuál es la diferencia entre `__str__` y `__repr__`?',
        options: [
          'Son idénticos, solo cambia el nombre',
          '`__str__` es para el usuario final (legible); `__repr__` es para desarrolladores (reproducible)',
          '`__repr__` se usa con `print()`; `__str__` se usa en el intérprete',
          '`__str__` es heredado automáticamente; `__repr__` no',
        ],
        correctAnswer: '`__str__` es para el usuario final (legible); `__repr__` es para desarrolladores (reproducible)',
        correctFeedback: '¡Exacto! `__str__` produce output amigable para el usuario. `__repr__` produce una representación "oficial" que idealmente permite recrear el objeto.',
        incorrectFeedback: 'La distinción: `__str__` → output legible para el usuario final (lo que ve `print()`). `__repr__` → representación técnica para desarrolladores, visible en el REPL y útil para depurar.',
      },
      {
        question: '¿Qué principio de diseño dicta que cada clase debe tener una sola razón para cambiar?',
        options: [
          'Principio de herencia única',
          'Principio de responsabilidad única (Single Responsibility Principle)',
          'Principio de composición sobre herencia',
          'Principio de encapsulamiento total',
        ],
        correctAnswer: 'Principio de responsabilidad única (Single Responsibility Principle)',
        correctFeedback: 'Correcto. El SRP (parte de los principios SOLID) dice que una clase debe tener solo una razón para cambiar, es decir, una sola responsabilidad.',
        incorrectFeedback: 'El Principio de Responsabilidad Única (SRP, primer principio SOLID) establece que una clase debe hacer una sola cosa. Hace el código más modular y fácil de mantener.',
      },
      {
        question: 'En el ejemplo del sistema, `Estudiante` hereda de `Persona` y tiene notas. ¿Qué tipo de relación es "Curso tiene Estudiantes"?',
        options: ['Herencia', 'Composición', 'Polimorfismo', 'Encapsulamiento'],
        correctAnswer: 'Composición',
        correctFeedback: 'Correcto. Un Curso no "es un" Estudiante; lo "tiene". Cuando un objeto contiene referencias a otros objetos, es composición.',
        incorrectFeedback: 'Curso tiene (contiene) una lista de Estudiantes → composición. Si Curso heredara de Estudiante diríamos que es herencia, pero eso no tendría sentido semánticamente.',
      },
    ],
  },
]
