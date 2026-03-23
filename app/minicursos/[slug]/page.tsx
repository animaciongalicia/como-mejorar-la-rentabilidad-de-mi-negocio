import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import { Callout, Paso, Stat } from '@/components/MdxComponents'

interface Props {
  params: { slug: string }
}

const MINICURSOS_META: Record<string, { titulo: string; descripcion: string; pilar: string; nivel: string }> = {
  'escandallo-basico': {
    titulo: 'Escandallo básico para tu negocio',
    descripcion: 'Aprende a calcular el coste real de cada producto o servicio que vendes. En 5 lecciones, sabrás si estás ganando o perdiendo dinero en cada venta.',
    pilar: 'Precios',
    nivel: 'Básico',
  },
  'punto-equilibrio': {
    titulo: 'Calcula tu punto de equilibrio',
    descripcion: 'El número mínimo que debes facturar para no perder dinero. Más fácil de lo que parece y más importante de lo que crees.',
    pilar: 'Diagnóstico',
    nivel: 'Básico',
  },
  'escandallo-hosteleria': {
    titulo: 'Escandallo para hostelería y restaurantes',
    descripcion: 'Guía completa para bares, restaurantes y cafeterías. Calcula el food cost, el coste real de cada plato y fija precios de carta que te dejen ganar dinero de verdad.',
    pilar: 'Precios',
    nivel: 'Básico',
  },
  'carta-rentable': {
    titulo: 'Cómo diseñar una carta rentable',
    descripcion: 'Del escandallo al rediseño completo. En 3 lecciones aprenderás a analizar tu carta, identificar qué platos destruyen tu margen y cómo reorganizarla para ganar más sin trabajar más.',
    pilar: 'Precios',
    nivel: 'Básico',
  },
}

const NIVEL_COLORS: Record<string, string> = {
  'Básico': 'text-green-700 bg-green-50',
  'Intermedio': 'text-orange-700 bg-orange-50',
  'Avanzado': 'text-red-700 bg-red-50',
}

export async function generateStaticParams() {
  return Object.keys(MINICURSOS_META).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = MINICURSOS_META[params.slug]
  if (!meta) return {}
  return {
    title: `${meta.titulo} | Minicursos | Foco Rentabilismo`,
    description: meta.descripcion,
    alternates: { canonical: `${BASE_URL}/minicursos/${params.slug}/` },
  }
}

export default function MinicursoDetailPage({ params }: Props) {
  const meta = MINICURSOS_META[params.slug]
  if (!meta) notFound()

  // Get all lessons for this minicurso, sorted by lesson number
  const allPosts = getAllPosts()
  const lecciones = allPosts
    .filter((p) => p.minicurso === params.slug && p.tipo === 'minicurso')
    .sort((a, b) => (a.minicurso_leccion ?? 0) - (b.minicurso_leccion ?? 0))

  // Load full content of lesson 1
  const primeraLeccion = lecciones.length > 0 ? getPostBySlug(lecciones[0].slug) : null

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera */}
      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/minicursos/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:underline mb-4"
          >
            ← Todos los minicursos
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-orange-600 bg-white border border-orange-200 px-2 py-0.5 rounded">
              {meta.pilar}
            </span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${NIVEL_COLORS[meta.nivel] || 'text-gray-600 bg-gray-100'}`}>
              {meta.nivel}
            </span>
            {lecciones.length > 0 && (
              <span className="text-xs text-gray-500">
                {lecciones.length} {lecciones.length === 1 ? 'lección' : 'lecciones'}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{meta.titulo}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{meta.descripcion}</p>
        </div>
      </div>

      {/* Contenido principal + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div>

            {/* Índice de lecciones */}
            {lecciones.length > 1 && (
              <div className="mb-10 bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <h2 className="text-sm font-black uppercase tracking-widest text-orange-700 mb-4">
                  Lecciones del minicurso
                </h2>
                <ol className="space-y-2">
                  {lecciones.map((l, i) => (
                    <li key={l.slug}>
                      <Link
                        href={`/blog/${l.slug}/`}
                        className={`flex items-start gap-3 px-3 py-2 rounded-lg transition-colors ${i === 0 ? 'bg-white font-semibold text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}
                      >
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-black mt-0.5">
                          {l.minicurso_leccion}
                        </span>
                        <span className="text-sm leading-snug">{l.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Contenido lección 1 */}
            {primeraLeccion ? (
              <article className="prose prose-gray prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-strong:text-gray-900
                prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline
                prose-hr:border-gray-200
                prose-ul:text-gray-700 prose-ol:text-gray-700
                prose-li:marker:text-orange-400">
                <MDXRemote
                  source={primeraLeccion.content}
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                  components={{ Callout, Paso, Stat }}
                />
              </article>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">Contenido próximamente.</p>
              </div>
            )}

            {/* Navegación entre lecciones */}
            {lecciones.length > 1 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href={`/blog/${lecciones[1].slug}/`}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Siguiente lección: {lecciones[1].title.replace(/^[^·]+·\s*/, '')} →
                </Link>
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
      </div>
    </div>
  )
}
