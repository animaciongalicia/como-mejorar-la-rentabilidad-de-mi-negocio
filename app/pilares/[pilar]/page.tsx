import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PILLARS, CLUSTER_LABELS } from '@/lib/clusters'
import { getAllPosts } from '@/lib/posts'
import { generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaOrg from '@/components/SchemaOrg'

interface Props {
  params: { pilar: string }
}

export async function generateStaticParams() {
  return PILLARS.map((pillar) => ({ pilar: pillar.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pillar = PILLARS.find((p) => p.slug === params.pilar)
  if (!pillar) return {}

  return {
    title: `${pillar.name} | Foco Rentabilismo`,
    description: pillar.description,
    alternates: {
      canonical: `${BASE_URL}/pilares/${pillar.slug}/`,
    },
    openGraph: {
      title: `${pillar.name} | Foco Rentabilismo`,
      description: pillar.description,
      url: `${BASE_URL}/pilares/${pillar.slug}/`,
    },
  }
}

export default function PilarPage({ params }: Props) {
  const pillar = PILLARS.find((p) => p.slug === params.pilar)

  if (!pillar) {
    notFound()
  }

  const allPosts = getAllPosts()
  const pilarPosts = allPosts.filter(
    (post) => post.pilar === pillar.id || pillar.clusters.includes(post.cluster || '')
  )

  const breadcrumbItems = [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Pilares', url: `${BASE_URL}/pilares/` },
    { name: pillar.name, url: `${BASE_URL}/pilares/${pillar.slug}/` },
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
              Pilar temático
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
              {pillar.name}
            </h1>
            <p className="text-teal-100 text-lg max-w-2xl">
              {pillar.description}
            </p>
          </div>
        </div>
      </section>

      {/* Clusters overview */}
      <section className="bg-teal-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-teal-700 font-medium mr-2">Clusters:</span>
            {pillar.clusters.map((cluster) => (
              <span
                key={cluster}
                className="bg-white border border-teal-200 text-teal-700 text-sm px-3 py-1 rounded-full"
              >
                {CLUSTER_LABELS[cluster] || cluster}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {pilarPosts.length > 0 ? (
          <>
            <p className="text-gray-500 mb-8">
              {pilarPosts.length} {pilarPosts.length === 1 ? 'artículo' : 'artículos'} en este pilar
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pilarPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              Próximamente nuevos artículos en este pilar.
            </p>
          </div>
        )}
      </section>

      {/* Other pillars navigation */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Explorar otros pilares</h2>
          <div className="flex flex-wrap gap-2">
            {PILLARS.filter((p) => p.id !== pillar.id).map((p) => (
              <Link
                key={p.id}
                href={`/pilares/${p.slug}/`}
                className="bg-white border border-gray-200 text-gray-700 hover:border-teal-300 hover:text-teal-600 text-sm px-4 py-2 rounded-lg transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            ¿Quieres aplicar esto en tu negocio?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Trabajamos con dueños de negocios físicos para mejorar su rentabilidad con un método claro, sin tecnicismos y con resultados en 30 días.
          </p>
          <a
            href="https://consultoriametodo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Conoce Consultoría Método →
          </a>
        </div>
      </section>
    </>
  )
}
