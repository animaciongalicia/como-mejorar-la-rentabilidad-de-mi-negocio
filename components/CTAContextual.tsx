import NewsletterForm from './NewsletterForm'

interface CTAContextualProps {
  type: 'consulting' | 'course' | 'newsletter' | 'tool'
  pilar: string
}

export default function CTAContextual({ type, pilar }: CTAContextualProps) {
  if (type === 'consulting') {
    return (
      <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0" aria-hidden="true">🎯</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¿Necesitas ayuda con tu rentabilidad?
            </h3>
            <p className="text-gray-600 mb-4">
              Trabajamos contigo directamente para identificar los puntos de fuga y crear un plan claro para mejorar los resultados de tu negocio en 30 días.
            </p>
            <a
              href="/herramientas"
              data-cta-type="consulting"
              data-pilar={pilar}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Ver herramientas gratuitas →
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'course') {
    return (
      <div className="my-10 bg-purple-50 border border-purple-200 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0" aria-hidden="true">🚀</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Aprende el método completo
            </h3>
            <p className="text-gray-600 mb-4">
              El sistema paso a paso para mejorar la rentabilidad de tu negocio físico. Sin teoría vacía. Con plantillas, casos reales y acompañamiento.
            </p>
            <a
              href="/minicursos"
              data-cta-type="course"
              data-pilar={pilar}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Ver minicursos gratuitos →
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'tool') {
    return (
      <div className="my-10 bg-green-50 border border-green-200 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0" aria-hidden="true">🛠️</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Herramientas gratuitas para tu negocio
            </h3>
            <p className="text-gray-600 mb-4">
              Calculadoras, plantillas y recursos prácticos para aplicar lo que has aprendido. Directos, sin complicaciones.
            </p>
            <a
              href="/herramientas"
              data-cta-type="tool"
              data-pilar={pilar}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Ver herramientas gratuitas → focorentabilismo.com/herramientas
            </a>
          </div>
        </div>
      </div>
    )
  }

  // type === 'newsletter'
  return (
    <div className="my-10" data-cta-type="newsletter" data-pilar={pilar}>
      <NewsletterForm variant="inline" pilar={pilar} />
    </div>
  )
}
