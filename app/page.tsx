import type { Metadata } from 'next'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import NewsletterInline from '@/components/NewsletterInline'
import { getAllPosts, getAllCategorias } from '@/lib/posts'
import { getCategoryConfig, CATEGORY_NAV_ORDER } from '@/lib/categories'
import { BASE_URL, SITE_NAME, formatDate } from '@/lib/seo'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Rentabilidad real para negocios físicos`,
  description: 'Estrategias probadas para mejorar la rentabilidad de tu negocio físico. Sin teoría vacía. Solo lo que funciona.',
  alternates: { canonical: BASE_URL },
}

export default function HomePage() {
  const allPosts = getAllPosts()
  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0]
  const secondaryPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 4)
  const sidebarPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug).slice(4, 9)

  const availableCats = getAllCategorias()
  const orderedCats = CATEGORY_NAV_ORDER.filter((c) => availableCats.includes(c))
  const restCats = availableCats.filter((c) => !CATEGORY_NAV_ORDER.includes(c))
  const displayCats = [...orderedCats, ...restCats]

  return (
    <div className="bg-white">

      {/* ── MASTHEAD ─── */}
      <div className="border-b-4 border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
            Para propietarios de negocios físicos y pymes · Galicia y toda España
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
            Foco Rentabilismo
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Más beneficio. Menos excusas. — Actualizado {formatDate(new Date().toISOString().split('T')[0])}
          </p>
        </div>
      </div>

      {/* ── CUERPO PERIÓDICO ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── COLUMNA IZQUIERDA: Featured + secundarios ─── */}
          <div className="lg:col-span-8">

            {/* Post destacado */}
            {featuredPost && (
              <div className="pb-8 mb-8 border-b-2 border-gray-900">
                <PostCard post={featuredPost} variant="featured" />
              </div>
            )}

            {/* Grid de secundarios — estilo doble columna */}
            {secondaryPosts.length > 0 && (
              <>
                <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                  Últimos artículos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {secondaryPosts.map((post) => (
                    <PostCard key={post.slug} post={post} variant="default" />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/blog/"
                    className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
                  >
                    Ver todos los artículos →
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* ── COLUMNA DERECHA: Sidebar ─── */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Más leídos / recientes sidebar */}
            {sidebarPosts.length > 0 && (
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-4">
                  No te pierdas
                </h2>
                <div>
                  {sidebarPosts.map((post) => (
                    <PostCard key={post.slug} post={post} variant="compact" />
                  ))}
                </div>
              </div>
            )}

            {/* Separador */}
            <div className="border-t-2 border-gray-900 pt-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-4">
                Explora por tema
              </h2>
              <div className="flex flex-wrap gap-2">
                {displayCats.map((slug) => {
                  const cfg = getCategoryConfig(slug)
                  return (
                    <Link
                      key={slug}
                      href={`/categoria/${slug}/`}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${cfg.color} ${cfg.textColor} ${cfg.hoverColor} transition-colors`}
                    >
                      {cfg.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Newsletter inline */}
            <NewsletterInline />

          </aside>
        </div>
      </div>

      {/* ── SECCIÓN PILARES — navega el contenido, no cierra el blog ─── */}
      <div className="border-t-2 border-gray-900 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
            Pilares temáticos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {displayCats.slice(0, 8).map((slug) => {
              const cfg = getCategoryConfig(slug)
              return (
                <Link
                  key={slug}
                  href={`/categoria/${slug}/`}
                  className="group bg-white border border-gray-200 hover:border-gray-400 rounded-lg p-4 transition-all"
                >
                  <span className={`block text-xs font-black uppercase tracking-wide ${cfg.textColor} mb-1`}>
                    {cfg.label}
                  </span>
                  <span className="text-xs text-gray-400 line-clamp-2 group-hover:text-gray-600 transition-colors">
                    {cfg.description}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}
