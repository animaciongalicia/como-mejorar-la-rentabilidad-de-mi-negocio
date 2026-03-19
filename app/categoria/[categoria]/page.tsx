import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllCategorias, getPostsByCategoria } from '@/lib/posts'
import { generateMetadataForCategoria, generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaOrg from '@/components/SchemaOrg'

interface Props {
  params: { categoria: string }
}

export async function generateStaticParams() {
  const categorias = getAllCategorias()
  return categorias.map((categoria) => ({ categoria }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateMetadataForCategoria(params.categoria)
}

const categoryDescriptions: Record<string, string> = {
  rentabilidad: 'Estrategias y tácticas para mejorar la rentabilidad de tu negocio físico. Desde el análisis de márgenes hasta la gestión de precios.',
  costes: 'Cómo reducir costes en tu negocio sin sacrificar calidad ni experiencia del cliente. Métodos prácticos para pymes.',
  ventas: 'Técnicas de ventas adaptadas a negocios físicos. Cómo vender más a los clientes que ya tienes.',
  operaciones: 'Optimización de procesos y operaciones para negocios físicos. Más eficiencia, menos desperdicio de recursos.',
  finanzas: 'Gestión financiera práctica para propietarios de pymes. Sin tecnicismos, con aplicación directa.',
  estrategia: 'Decisiones estratégicas para el negocio: posicionamiento, crecimiento y diferenciación en mercados competitivos.',
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

function getCategoryDescription(slug: string): string {
  return categoryDescriptions[slug] || `Todos los artículos sobre ${slug} en Foco Rentabilismo.`
}

export default function CategoriaPage({ params }: Props) {
  const { categoria } = params
  const posts = getPostsByCategoria(categoria)

  if (posts.length === 0) {
    const allCategorias = getAllCategorias()
    if (!allCategorias.includes(categoria)) {
      notFound()
    }
  }

  const breadcrumbItems = [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Categorías', url: `${BASE_URL}/categoria/` },
    { name: getCategoryLabel(categoria), url: `${BASE_URL}/categoria/${categoria}/` },
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
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Categoría
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
              {getCategoryLabel(categoria)}
            </h1>
            <p className="text-teal-100 text-lg max-w-2xl">
              {getCategoryDescription(categoria)}
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <>
            <p className="text-gray-500 mb-8">
              {posts.length} {posts.length === 1 ? 'artículo' : 'artículos'} en esta categoría
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
              Próximamente nuevos artículos en esta categoría.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
