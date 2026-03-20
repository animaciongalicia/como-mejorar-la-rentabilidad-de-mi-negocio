import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { SECTORES } from '@/lib/clusters'
import { BASE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Por Sector — Estrategias Específicas para tu Negocio | Foco Rentabilismo',
  description: 'Estrategias de rentabilidad específicas para hostelería, comercio, servicios, talleres y más. Lo que funciona en tu sector.',
  alternates: { canonical: `${BASE_URL}/sectores/` },
}

export default function SectoresPage() {
  const posts = getAllPosts()

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera de sección */}
      <div className="border-b-2 border-teal-500 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Sección especial</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Por Sector</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            No todos los negocios son iguales. Aquí encontrarás estrategias
            y casos prácticos específicos para tu tipo de negocio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORES.map((sector) => {
            const sectorPosts = posts.filter((p) => p.sector === sector.id)
            return (
              <Link
                key={sector.id}
                href={`/sectores/${sector.slug}/`}
                className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-6 transition-all hover:shadow-md"
              >
                <h2 className="text-xl font-black text-gray-900 group-hover:text-teal-700 transition-colors mb-2">
                  {sector.name}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{sector.description}</p>
                <p className="text-xs text-gray-400 font-semibold">
                  {sectorPosts.length > 0
                    ? `${sectorPosts.length} artículo${sectorPosts.length !== 1 ? 's' : ''}`
                    : 'Próximamente'}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
