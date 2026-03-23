import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL, SITE_NAME, generateBreadcrumbSchema } from '@/lib/seo'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaOrg from '@/components/SchemaOrg'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description: 'Artículos sobre rentabilidad empresarial, costes, ventas y gestión. Método directo, sin teoría vacía.',
  alternates: {
    canonical: `${BASE_URL}/blog/`,
  },
}

export default function BlogPage() {
  // Excluir casos-practicos del blog general: tienen su propia sección en /casos-practicos/
  const posts = getAllPosts().filter((p) => p.tipo !== 'caso-practico')

  const breadcrumbItems = [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog/` },
  ]

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} light />
          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Blog</h1>
            <p className="text-teal-100 text-lg max-w-2xl">
              Estrategias probadas para mejorar la rentabilidad de tu negocio
              físico. Sin humo, sin teoría vacía. Solo lo que funciona.
            </p>
          </div>
        </div>
      </section>

      {/* Posts + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div>
            {posts.length > 0 ? (
              <>
                <p className="text-gray-500 mb-8">
                  {posts.length} {posts.length === 1 ? 'artículo publicado' : 'artículos publicados'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">
                  Próximamente nuevos artículos.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Bloque reservado para AdSense */}
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center h-64">
                <p className="text-xs text-gray-400 text-center px-4">
                  Espacio publicitario
                </p>
              </div>
              <Sidebar />
            </div>
          </aside>

        </div>
      </section>
    </>
  )
}
