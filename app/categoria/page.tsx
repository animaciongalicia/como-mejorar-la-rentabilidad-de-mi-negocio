import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllCategorias, getCategoriaCount } from '@/lib/posts'
import { getCategoryConfig, CATEGORY_NAV_ORDER } from '@/lib/categories'
import { BASE_URL, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
  title: `Categorías | ${SITE_NAME}`,
  description: 'Navega por todos los temas del blog: diagnóstico empresarial, costes, precios, ventas, procesos y más.',
  alternates: { canonical: `${BASE_URL}/categoria/` },
}

export default function CategoriasPage() {
  const allCats = getAllCategorias()
  const counts = getCategoriaCount()

  // Orden editorial primero, resto después
  const ordered = CATEGORY_NAV_ORDER.filter((c) => allCats.includes(c))
  const rest = allCats.filter((c) => !CATEGORY_NAV_ORDER.includes(c))
  const categories = [...ordered, ...rest]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Categorías</h1>
      <p className="text-gray-500 mb-10">Elige un tema y sumérgete en los artículos.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((slug) => {
          const cfg = getCategoryConfig(slug)
          const count = counts[slug] || 0
          return (
            <Link
              key={slug}
              href={`/categoria/${slug}/`}
              className="group flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-sm bg-white transition-all"
            >
              <span className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-lg text-lg font-bold ${cfg.color} ${cfg.textColor}`}>
                {cfg.label.charAt(0)}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {cfg.label}
                </p>
                <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{cfg.description}</p>
                <p className="text-xs text-gray-400 mt-2">{count} {count === 1 ? 'artículo' : 'artículos'}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
