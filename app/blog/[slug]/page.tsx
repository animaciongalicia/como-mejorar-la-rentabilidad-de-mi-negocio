import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts'
import { generateMetadataForPost, generateBlogPostingSchema, generateBreadcrumbSchema, BASE_URL, formatDate } from '@/lib/seo'
import SchemaOrg from '@/components/SchemaOrg'
import Breadcrumbs from '@/components/Breadcrumbs'
import Sidebar from '@/components/Sidebar'
import RelatedPosts from '@/components/RelatedPosts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return generateMetadataForPost(post)
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

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  const breadcrumbItems = [
    { name: 'Inicio', url: BASE_URL },
    { name: getCategoryLabel(post.categoria), url: `${BASE_URL}/categoria/${post.categoria}/` },
    { name: post.title, url: `${BASE_URL}/blog/${post.slug}/` },
  ]

  const blogPostingSchema = generateBlogPostingSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      <SchemaOrg schema={blogPostingSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main content */}
          <article className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/categoria/${post.categoria}/`}
                  className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide hover:bg-teal-200 transition-colors"
                >
                  {getCategoryLabel(post.categoria)}
                </Link>
                <span className="text-gray-400 text-sm">
                  {post.readingTime} min de lectura
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
                <span>
                  Por{' '}
                  <span className="font-medium text-gray-700">
                    {post.author || 'Foco Rentabilismo'}
                  </span>
                </span>
                <span>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </header>

            {/* MDX Content */}
            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:marker:text-teal-600">
              <MDXRemote source={post.content} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <span className="text-sm text-gray-500 mr-3">Etiquetas:</span>
                <div className="inline-flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author section */}
            <div className="mt-10 bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  FR
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {post.author || 'Foco Rentabilismo'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Blog de referencia sobre rentabilidad empresarial para
                    negocios físicos y pymes. Estrategias probadas, sin humo.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ¿Quieres aplicar esto en tu negocio?
              </h3>
              <p className="text-gray-600 mb-6">
                Trabaja con nosotros y mejora la rentabilidad de tu negocio en 30 días con un método claro y sin tecnicismos.
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
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <Sidebar currentCategoria={post.categoria} />
          </aside>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </>
  )
}
