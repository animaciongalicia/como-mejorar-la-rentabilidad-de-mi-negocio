import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Foco Rentabilismo',
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-sm text-teal-600 hover:underline mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="text-3xl font-black text-gray-900 mb-8">Política de Privacidad</h1>
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p>En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPDGDD), te informamos sobre el tratamiento de tus datos personales en este sitio web.</p>

            <h2>Responsable del tratamiento</h2>
            <p><strong>Foco Rentabilismo</strong> — focorentabilismo.com</p>

            <h2>Datos que recopilamos</h2>
            <p>Este sitio puede recopilar los siguientes tipos de datos:</p>
            <ul>
              <li><strong>Datos de contacto:</strong> nombre y correo electrónico, cuando te suscribes a la newsletter o usas el formulario de contacto</li>
              <li><strong>Datos de navegación:</strong> páginas visitadas, tiempo de permanencia, dispositivo utilizado (a través de cookies analíticas)</li>
            </ul>

            <h2>Finalidad del tratamiento</h2>
            <ul>
              <li>Gestionar suscripciones a la newsletter y enviar comunicaciones sobre contenidos del sitio</li>
              <li>Analizar el uso del sitio web para mejorar los contenidos y la experiencia de usuario</li>
              <li>Gestionar consultas y comunicaciones recibidas a través del formulario de contacto</li>
            </ul>

            <h2>Base legal</h2>
            <p>El tratamiento de tus datos se basa en el consentimiento que prestas al suscribirte o contactarnos.</p>

            <h2>Tus derechos</h2>
            <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad y oposición contactando a través del formulario del sitio web.</p>

            <h2>Conservación de datos</h2>
            <p>Los datos se conservan mientras seas suscriptor activo o mientras exista una relación de comunicación. Puedes darte de baja en cualquier momento.</p>
        </div>
        <p className="text-xs text-gray-400 mt-12">Última actualización: marzo 2026</p>
      </div>
    </div>
  )
}
