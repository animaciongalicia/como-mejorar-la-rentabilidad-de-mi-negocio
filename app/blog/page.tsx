import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL, SITE_NAME, generateBreadcrumbSchema } from '@/lib/seo'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description: 'Todos los artículos sobre rentabilidad empresarial, costes, ventas y gestión para negocios físicos y pymes.',
  alternates: {
    canonical: `${BASE_URL}/blog/`,
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

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

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <>
            <p className="text-gray-500 mb-8">
              {posts.length} {posts.length === 1 ? 'artículo publicado' : 'artículos publicados'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>
    </>
  )
}
