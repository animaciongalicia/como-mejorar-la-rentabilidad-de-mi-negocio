import type { Metadata } from 'next'
import Link from 'next/link'
import { PILLARS } from '@/lib/clusters'
import { BASE_URL } from '@/lib/seo'
import { generateBreadcrumbSchema } from '@/lib/seo'
import SchemaOrg from '@/components/SchemaOrg'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Pilares temáticos | Foco Rentabilismo',
  description: 'Explora los 13 pilares temáticos sobre rentabilidad empresarial: diagnóstico, precios, costes, ventas, procesos y mucho más.',
  alternates: {
    canonical: `${BASE_URL}/pilares/`,
  },
  openGraph: {
    title: 'Pilares temáticos | Foco Rentabilismo',
    description: 'Explora los 13 pilares temáticos sobre rentabilidad empresarial: diagnóstico, precios, costes, ventas, procesos y mucho más.',
    url: `${BASE_URL}/pilares/`,
  },
}

const pillarIcons: Record<string, string> = {
  'diagnostico': '🔍',
  'precios-margenes': '💰',
  'costes': '📉',
  'ventas': '📈',
  'procesos': '⚙️',
  'personas': '👥',
  'marketing-rentable': '📣',
  'herramientas': '🛠️',
  'sectorial': '🏪',
  'emprendimiento': '🚀',
  'capacidad-empresarial': '🧠',
  'dinero-personal': '💼',
  'fases-negocio': '📊',
}

export default function PilaresPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Pilares', url: `${BASE_URL}/pilares/` },
  ]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbItems} light />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Los 13 pilares de la rentabilidad
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              No hay un único camino para hacer tu negocio rentable. Hay 13 áreas clave que debes dominar. Aquí las tienes todas, organizadas para que sepas exactamente por dónde empezar.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              href={`/pilares/${pillar.slug}/`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">
                  {pillarIcons[pillar.id] || '📌'}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                    {pillar.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {pillar.clusters.slice(0, 3).map((cluster) => (
                      <span
                        key={cluster}
                        className="bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded-full"
                      >
                        {cluster}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 bg-orange-50 border border-orange-200 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Si tu negocio lleva tiempo sin crecer o sientes que trabajas demasiado para lo que ganas, un diagnóstico profesional puede cambiar el rumbo en semanas.
          </p>
          <a
            href="https://consultoriametodo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Conoce Consultoría Método →
          </a>
        </div>
      </section>
    </>
  )
}
