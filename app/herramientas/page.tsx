import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Herramientas gratuitas | Foco Rentabilismo',
  description: 'Calculadoras, plantillas y recursos prácticos para mejorar la rentabilidad de tu negocio físico. Directo al grano, sin complicaciones.',
  alternates: { canonical: `${BASE_URL}/herramientas/` },
}

const herramientas = [
  {
    slug: 'calculadora-punto-equilibrio',
    titulo: 'Calculadora de punto de equilibrio',
    subtitulo: '¿Cuánto necesitas vender para no perder dinero?',
    descripcion: 'Introduce tus costes fijos y tu margen bruto y descubre exactamente cuánto debes facturar cada mes para cubrir gastos.',
    estado: 'disponible',
    href: '/blog/calculadora-punto-equilibrio-negocio/',
  },
  {
    slug: 'analizador-margen',
    titulo: 'Analizador de margen por producto',
    subtitulo: 'Identifica qué productos te hacen ganar y cuáles te drenan',
    descripcion: 'Compara el margen real de cada producto o servicio. Detecta cuáles son rentables y cuáles te están costando dinero.',
    estado: 'próximamente',
    href: null,
  },
  {
    slug: 'control-costes',
    titulo: 'Plantilla de control de costes mensual',
    subtitulo: 'Registra y compara tus costes mes a mes',
    descripcion: 'Hoja de cálculo lista para usar. Costes fijos, variables y comparativa mensual sin complicaciones.',
    estado: 'próximamente',
    href: null,
  },
  {
    slug: 'test-diagnostico',
    titulo: 'Test de diagnóstico de rentabilidad',
    subtitulo: 'Detecta los puntos de fuga de tu negocio',
    descripcion: '10 preguntas para identificar los principales problemas de rentabilidad de tu negocio. Con recomendaciones al final.',
    estado: 'próximamente',
    href: null,
  },
]

export default function HerramientasPage() {
  const disponibles = herramientas.filter((h) => h.estado === 'disponible')
  const proximas = herramientas.filter((h) => h.estado !== 'disponible')

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera de sección */}
      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Recursos gratuitos</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Herramientas</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Calculadoras, plantillas y recursos prácticos para aplicar lo que aprendes.
            Sin registro, sin complicaciones.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Disponibles */}
        {disponibles.length > 0 && (
          <>
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
              Disponibles ahora
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {disponibles.map((h) => (
                <Link
                  key={h.slug}
                  href={h.href!}
                  className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-6 transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      Herramienta
                    </span>
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                      Disponible
                    </span>
                  </div>
                  <h2 className="text-lg font-black text-gray-900 group-hover:text-orange-700 transition-colors mb-1">
                    {h.titulo}
                  </h2>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{h.subtitulo}</p>
                  <p className="text-sm text-gray-600 line-clamp-3">{h.descripcion}</p>
                  <p className="text-xs font-bold text-orange-600 mt-5 group-hover:underline">
                    Usar herramienta →
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Próximamente */}
        {proximas.length > 0 && (
          <>
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
              Próximamente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {proximas.map((h) => (
                <div
                  key={h.slug}
                  className="border border-gray-100 rounded-xl p-6 bg-gray-50 opacity-70"
                >
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded mb-3 inline-block">
                    Herramienta
                  </span>
                  <h2 className="text-lg font-black text-gray-600 mb-1">{h.titulo}</h2>
                  <p className="text-sm font-semibold text-gray-400 mb-3">{h.subtitulo}</p>
                  <p className="text-sm text-gray-400 line-clamp-3">{h.descripcion}</p>
                  <p className="text-xs text-gray-400 mt-5 font-medium">Próximamente</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Newsletter CTA */}
        <div className="bg-orange-50 rounded-2xl border border-orange-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Avísame cuando estén listas
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Suscríbete al newsletter y serás el primero en acceder a cada herramienta cuando salga.
          </p>
          <NewsletterForm variant="inline" pilar="herramientas" />
        </div>
      </div>
    </div>
  )
}
