import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Casos Prácticos de Negocios Reales | Foco Rentabilismo',
  description: 'Negocios reales, problemas reales, soluciones reales. Casos prácticos de empresarios que mejoraron su rentabilidad.',
  alternates: { canonical: `${BASE_URL}/casos-practicos/` },
}

// Titulares de casos — se irán publicando como posts con tipo: caso-practico
const CASOS_PLACEHOLDER = [
  {
    titulo: 'Bar de barrio que perdía dinero: cómo pasó de 2.000€ a 6.000€ de beneficio mensual',
    sector: 'Hostelería',
    resultado: '+4.000€/mes',
    descripcion: 'Subieron precios un 12%, eliminaron 3 platos del menú y redujeron merma. Resultado en 60 días.',
  },
  {
    titulo: 'Clínica dental que no sabía cuánto ganaba realmente: diagnóstico y restructuración',
    sector: 'Salud',
    resultado: 'Margen +18%',
    descripcion: 'El dueño cobraba lo mismo desde 2019. Un escandallo básico lo cambió todo.',
  },
  {
    titulo: 'Peluquería con lista de espera que no ganaba dinero: el problema era el precio',
    sector: 'Servicios',
    resultado: 'Tarifa +35%',
    descripcion: 'Demanda no es igual a rentabilidad. Cómo detectarlo y corregirlo sin perder clientes.',
  },
  {
    titulo: 'Taller mecánico familiar: de trabajar 70 horas/semana a 45 con más beneficio',
    sector: 'Taller',
    resultado: '-25h semana',
    descripcion: 'Procesos, tarifas y un empleado bien formado. Sin inversión en tecnología.',
  },
  {
    titulo: 'Tienda de ropa local contra Zara: la estrategia que funcionó',
    sector: 'Retail',
    resultado: 'Ticket +42%',
    descripcion: 'No se puede ganar en precio. Sí en experiencia, servicio y comunidad local.',
  },
  {
    titulo: 'Agencia inmobiliaria pequeña: cómo diferenciarse sin bajar comisiones',
    sector: 'Inmobiliario',
    resultado: 'Clientes x2',
    descripcion: 'La propuesta de valor que nadie comunicaba. Un cambio de mensaje, no de producto.',
  },
]

export default function CasosPracticosPage() {
  const posts = getAllPosts().filter((p) => p.tipo === 'caso-practico')

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera de sección */}
      <div className="border-b-2 border-amber-500 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Sección especial</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Casos Prácticos</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Negocios reales, problemas reales, soluciones reales. Sin teoría.
            Lo que hicieron, por qué lo hicieron y qué resultado tuvieron.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div>
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-6 transition-all hover:shadow-md"
                  >
                    <span className="inline-block text-xs font-black uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded mb-3">
                      {post.sector || 'Caso práctico'}
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CASOS_PLACEHOLDER.map((caso, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl p-6 bg-gray-50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                        {caso.sector}
                      </span>
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                        {caso.resultado}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-gray-800 mb-2 leading-snug">
                      {caso.titulo}
                    </h2>
                    <p className="text-sm text-gray-500">{caso.descripcion}</p>
                    <p className="text-xs text-gray-400 mt-4 font-medium">Próximamente →</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center h-64">
                <p className="text-xs text-gray-400 text-center px-4">Espacio publicitario</p>
              </div>
              <Sidebar />
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
