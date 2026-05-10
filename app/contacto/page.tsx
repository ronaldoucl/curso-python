export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">Contacto</h1>
        <p className="text-gray-400">
          ¿Tienes preguntas, sugerencias o encontraste algún error? Escríbenos.
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="¿En qué podemos ayudarte?"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none"
          />
        </div>

        <button
          type="button"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 rounded-xl transition-colors"
        >
          Enviar mensaje
        </button>

        <p className="text-gray-500 text-xs text-center">
          También puedes escribirnos directamente a{' '}
          <span className="text-yellow-400">contacto@ronaldoscript.com</span>
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <span className="text-2xl">{item.emoji}</span>
            <h3 className="text-white font-semibold mt-2 mb-1 text-sm">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
