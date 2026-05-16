import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | RonaldoScript',
  description: '¿Tienes preguntas o sugerencias? Escríbenos.',
}

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-primary mb-2">// contacto</p>
        <h1 className="text-3xl font-bold text-gray-50 mb-2">Contacto</h1>
        <p className="text-gray-400 text-sm">
          ¿Tienes preguntas, sugerencias o encontraste algún error? Escríbenos.
        </p>
      </div>

      {/* Formulario */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 space-y-5 mb-8">
        <div>
          <label htmlFor="nombre" className="block text-xs font-mono text-gray-400 mb-2">
            nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-2">
            correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-xs font-mono text-gray-400 mb-2">
            mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="¿En qué podemos ayudarte?"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors text-sm resize-none"
          />
        </div>

        <button
          type="button"
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm"
        >
          Enviar mensaje →
        </button>

        <p className="text-gray-600 font-mono text-xs text-center">
          // también puedes escribirnos a{' '}
          <span className="text-primary">contacto@ronaldoscript.com</span>
        </p>
      </div>

      {/* Tipos de contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            emoji: '🐛',
            title: 'Reportar un error',
            desc: 'Si encontraste un error en el contenido o en el código, cuéntanos.',
          },
          {
            emoji: '💡',
            title: 'Sugerir contenido',
            desc: '¿Hay un tema que quieres que agreguemos? Nos encanta saber qué necesitas.',
          },
        ].map((item) => (
          <div key={item.title} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <span className="text-2xl">{item.emoji}</span>
            <h3 className="text-gray-100 font-semibold text-sm mt-2 mb-1">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
