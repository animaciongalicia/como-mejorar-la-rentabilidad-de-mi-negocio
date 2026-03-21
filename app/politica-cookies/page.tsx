import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies | Foco Rentabilismo',
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-sm text-teal-600 hover:underline mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="text-3xl font-black text-gray-900 mb-8">Política de Cookies</h1>
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p>Este sitio web utiliza cookies para mejorar la experiencia de navegación y analizar el uso del sitio.</p>

            <h2>¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y analizar cómo usas el sitio.</p>

            <h2>Tipos de cookies que usamos</h2>

            <h3>Cookies técnicas (necesarias)</h3>
            <p>Imprescindibles para el funcionamiento del sitio. Sin ellas, algunas funciones no estarían disponibles. No requieren consentimiento.</p>

            <h3>Cookies analíticas</h3>
            <p>Nos permiten conocer cómo navegan los usuarios por el sitio: páginas más visitadas, tiempo de permanencia, origen del tráfico. Usamos estas cookies para mejorar el contenido. Requieren tu consentimiento.</p>

            <h3>Cookies de publicidad</h3>
            <p>En el futuro, este sitio puede mostrar anuncios de terceros (Google AdSense). Estas cookies son gestionadas por terceros y requieren tu consentimiento. Actualizaremos esta política cuando se implementen.</p>

            <h2>Cómo gestionar las cookies</h2>
            <p>Puedes configurar tu navegador para rechazar todas o algunas cookies. Ten en cuenta que desactivar cookies puede afectar a la funcionalidad del sitio.</p>
            <p>Instrucciones para los principales navegadores:</p>
            <ul>
              <li><strong>Chrome:</strong> Ajustes → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
            </ul>

            <h2>Actualizaciones de esta política</h2>
            <p>Esta política puede actualizarse cuando se implementen nuevas funcionalidades en el sitio. Te recomendamos revisarla periódicamente.</p>
        </div>
        <p className="text-xs text-gray-400 mt-12">Última actualización: marzo 2026</p>
      </div>
    </div>
  )
}
