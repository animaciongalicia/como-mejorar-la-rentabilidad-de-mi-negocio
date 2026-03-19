import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllCategorias, getPostsByCategoria } from '@/lib/posts'
import { generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'
import { getCategoryConfig } from '@/lib/categories'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaOrg from '@/components/SchemaOrg'
import { SITE_NAME } from '@/lib/seo'

interface Props {
  params: { categoria: string }
}

export async function generateStaticParams() {
  const categorias = getAllCategorias()
  return categorias.map((categoria) => ({ categoria }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cfg = getCategoryConfig(params.categoria)
  const url = `${BASE_URL}/categoria/${params.categoria}/`
  return {
    title: `${cfg.label} | ${SITE_NAME}`,
    description: cfg.description,
    openGraph: { title: cfg.label, description: cfg.description, url, siteName: SITE_NAME, type: 'website' },
    alternates: { canonical: url },
  }
}

export default function CategoriaPage({ params }: Props) {
  const { categoria } = params
  const allCategorias = getAllCategorias()

  if (!allCategorias.includes(categoria)) {
    notFound()
  }

  const posts = getPostsByCategoria(categoria)
  const cfg = getCategoryConfig(categoria)

  const breadcrumbItems = [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Categorías', url: `${BASE_URL}/categoria/` },
    { name: cfg.label, url: `${BASE_URL}/categoria/${categoria}/` },
  ]

  return (
    <>
      <SchemaOrg schema={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Cabecera categoría */}
      <div className="border-b-2 border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-4 flex items-center gap-3">
            <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${cfg.color} ${cfg.textColor}`}>
              {cfg.label}
            </span>
            <span className="text-gray-400 text-sm">{posts.length} {posts.length === 1 ? 'artículo' : 'artículos'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">{cfg.label}</h1>
          <p className="text-gray-500 mt-1 max-w-2xl">{cfg.description}</p>
        </div>
      </div>

      {/* Grid posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-16">Próximamente nuevos artículos en esta categoría.</p>
        )}
      </div>
    </>
  )
}
