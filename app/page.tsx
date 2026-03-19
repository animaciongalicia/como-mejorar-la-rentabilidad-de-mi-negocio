import type { Metadata } from 'next'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { getAllPosts, getAllCategorias } from '@/lib/posts'
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Más beneficio. Menos excusas.`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: BASE_URL,
  },
}

const categoryLabels: Record<string, string> = {
  rentabilidad: 'Rentabilidad',
  costes: 'Costes',
  ventas: 'Ventas',
  operaciones: 'Operaciones',
  finanzas: 'Finanzas',
  estrategia: 'Estrategia',
}

function getCategoryLabel(slug: string): string {
  return categoryLabels[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)
}

export default function HomePage() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 6)
  const categorias = getAllCategorias()
  const featuredPost = allPosts.find((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal-200 font-medium text-sm uppercase tracking-widest mb-4">
              Para propietarios de negocios físicos y pymes
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Más beneficio.
              <br />
              <span className="text-orange-400">Menos excusas.</span>
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Estrategias probadas para mejorar la rentabilidad de tu negocio
              físico. Sin humo, sin teoría vacía. Solo lo que funciona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-center"
              >
                Ver todos los artículos
              </Link>
              <a
                href="https://consultoriametodo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-center border border-white/20"
              >
                Trabajar con nosotros →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Destacado
              </span>
              <span className="text-gray-500 text-sm">Lectura recomendada</span>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="max-w-2xl">
                <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {getCategoryLabel(featuredPost.categoria)}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.description}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}/`}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Leer artículo
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Artículos recientes
          </h2>
          <Link
            href="/blog/"
            className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Ver todos →
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            Próximamente nuevos artículos.
          </p>
        )}
      </section>

      {/* Categories */}
      {categorias.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Explora por categoría
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categorias.map((cat) => (
                <Link
                  key={cat}
                  href={`/categoria/${cat}/`}
                  className="bg-white hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-xl p-5 text-center transition-all duration-200 group"
                >
                  <span className="block font-semibold text-gray-800 group-hover:text-teal-700">
                    {getCategoryLabel(cat)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para mejorar la rentabilidad de tu negocio?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Trabajamos con propietarios de negocios físicos para identificar y
            capturar oportunidades de mejora en 30 días.
          </p>
          <a
            href="https://consultoriametodo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
          >
            Conoce Consultoría Método →
          </a>
        </div>
      </section>
    </>
  )
}
