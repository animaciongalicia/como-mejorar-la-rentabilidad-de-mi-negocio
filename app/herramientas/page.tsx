import type { Metadata } from 'next'
import { BASE_URL } from '@/lib/seo'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Herramientas gratuitas',
  description: 'Calculadoras, plantillas y recursos prácticos para mejorar la rentabilidad de tu negocio físico. Directo al grano, sin complicaciones.',
  alternates: { canonical: `${BASE_URL}/herramientas/` },
}

const herramientas = [
  {
    titulo: 'Calculadora de punto de equilibrio',
    descripcion: 'Descubre cuánto tienes que vender cada mes para no perder dinero. Introduce tus costes fijos y variables y obtén el resultado al instante.',
    estado: 'próximamente',
  },
  {
    titulo: 'Analizador de margen por producto',
    descripcion: 'Compara el margen real de cada producto o servicio. Identifica cuáles te están haciendo ganar dinero y cuáles te están drenando.',
    estado: 'próximamente',
  },
  {
    titulo: 'Plantilla de control de costes mensual',
    descripcion: 'Hoja de cálculo lista para usar. Registra tus costes fijos, variables y compara mes a mes sin complicaciones.',
    estado: 'próximamente',
  },
  {
    titulo: 'Test de diagnóstico de rentabilidad',
    descripcion: '10 preguntas para identificar los principales puntos de fuga de tu negocio. Con recomendaciones personalizadas al final.',
    estado: 'próximamente',
  },
]

export default function HerramientasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Herramientas gratuitas</h1>
      <p className="text-gray-500 mb-10">
        Calculadoras, plantillas y recursos prácticos para aplicar lo que has aprendido.
        Sin registro, sin complicaciones.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {herramientas.map((h) => (
          <div
            key={h.titulo}
            className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-bold text-gray-900 text-base leading-snug">{h.titulo}</h2>
              <span className="shrink-0 text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                {h.estado}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{h.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="bg-teal-50 rounded-2xl border border-teal-100 p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
          Avísame cuando estén listas
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Suscríbete al newsletter y serás el primero en acceder a cada herramienta cuando salga.
        </p>
        <NewsletterForm variant="inline" pilar="herramientas" />
      </div>
    </div>
  )
}
