import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal | Foco Rentabilismo',
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-sm text-teal-600 hover:underline mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="text-3xl font-black text-gray-900 mb-8">Aviso Legal</h1>
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p>El titular de este sitio web es:</p>
            <ul>
              <li><strong>Razón social:</strong> Inversiones SHISHO SL</li>
              <li><strong>CIF:</strong> B70319223</li>
              <li><strong>Domicilio social:</strong> Ronda de Montealto, 4 — 15002 A Coruña</li>
              <li><strong>Correo electrónico:</strong> info@rentabilismo.com</li>
              <li><strong>Dominio:</strong> focorentabilismo.com</li>
            </ul>
            <p>El acceso y uso de este sitio web implica la aceptación plena de las condiciones de uso aquí recogidas. Si no está de acuerdo con estas condiciones, debe abandonar el sitio web.</p>

            <h2>Propiedad intelectual</h2>
            <p>Todos los contenidos de este sitio web (textos, imágenes, diseño, código fuente) son propiedad de Foco Rentabilismo o de sus respectivos autores, y están protegidos por la legislación vigente en materia de propiedad intelectual.</p>
            <p>Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa por escrito del titular.</p>

            <h2>Responsabilidad</h2>
            <p>La información publicada en este sitio web tiene carácter divulgativo y educativo. No constituye asesoramiento financiero, legal ni empresarial de ningún tipo. El usuario es responsable de las decisiones que tome en base a la información aquí publicada.</p>
            <p>Foco Rentabilismo no se responsabiliza de los daños o perjuicios que pudieran derivarse del uso de la información contenida en este sitio.</p>

            <h2>Legislación aplicable</h2>
            <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes.</p>

            <h2>Contacto</h2>
            <p>Para cualquier consulta relacionada con este aviso legal, puedes contactarnos en <strong>info@rentabilismo.com</strong>.</p>
        </div>
        <p className="text-xs text-gray-400 mt-12">Última actualización: marzo 2026</p>
      </div>
    </div>
  )
}
