import type { Metadata } from 'next'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import NewsletterInline from '@/components/NewsletterInline'
import { getAllPosts } from '@/lib/posts'
import { CATEGORY_NAV_ORDER, getCategoryConfig } from '@/lib/categories'
import { PILLARS, SECTORES } from '@/lib/clusters'
import { BASE_URL, SITE_NAME, formatDate } from '@/lib/seo'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Rentabilidad real para negocios físicos`,
  description: 'Estrategias probadas para mejorar la rentabilidad de tu negocio físico. Sin teoría vacía. Solo lo que funciona.',
  alternates: { canonical: BASE_URL },
}

// ── Componente helper: título de sección ──────────────────────────────────
function SectionHeader({
  title,
  href,
  accentClass = 'border-gray-900',
}: {
  title: string
  href?: string
  accentClass?: string
}) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className={`text-xl font-black text-gray-900 border-b-4 ${accentClass} pb-1 inline-block`}>
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="text-xs font-bold text-gray-400 hover:text-gray-700 uppercase tracking-wider transition-colors shrink-0 ml-4"
        >
          Ver todo →
        </Link>
      )}
    </div>
  )
}

// ── Componente helper: wrapper de sección con fondo alternado ─────────────
function Section({
  children,
  bg = 'bg-white',
  className = '',
}: {
  children: React.ReactNode
  bg?: string
  className?: string
}) {
  return (
    <section className={`${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </section>
  )
}

export default function HomePage() {
  const allPosts = getAllPosts()

  // Hero
  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0]
  const heroSecondary = allPosts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 2)
  const sidebarPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug).slice(2, 7)

  // Secciones especiales
  const casosPosts = allPosts.filter((p) => p.tipo === 'caso-practico').slice(0, 5)
  const ultimosArticulos = allPosts.filter((p) => !p.tipo || p.tipo === 'articulo').slice(0, 6)

  // Conteo de posts por pilar para el stats bar
  const postsPorPilar = CATEGORY_NAV_ORDER.map((slug) => ({
    slug,
    label: getCategoryConfig(slug).label,
    count: allPosts.filter((p) => p.categoria === slug).length,
  }))

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════════════ */}
      <div className="border-b border-gray-300 py-10 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-5">
            Ayudando a personas a mejorar sus empresas y negocios
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            <span className="text-gray-900">Foco </span><span className="text-teal-600">Rentabilismo</span>
          </h1>
          <p className="text-gray-500 mt-5 text-sm font-medium tracking-widest uppercase">
            No hay milagros, hay Método
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          HERO: Featured + secundarios + sidebar "más leídos"
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Columna izquierda: secundarios apilados */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            {heroSecondary.map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>

          {/* Centro: post destacado */}
          <div className="lg:col-span-6 order-1 lg:order-2 border-x border-gray-100 lg:px-8">
            {featuredPost && (
              <PostCard post={featuredPost} variant="featured" />
            )}
            {!featuredPost && (
              <div className="text-center py-20 text-gray-300">
                <p className="text-lg font-bold">El primer artículo llegará pronto.</p>
              </div>
            )}
          </div>

          {/* Derecha: más leídos */}
          <aside className="lg:col-span-3 order-3">
            <div className="border-t-2 border-gray-900 pt-4">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Más leídos</p>
              <div className="space-y-0 divide-y divide-gray-100">
                {sidebarPosts.map((post, i) => (
                  <div key={post.slug} className="py-3 flex gap-3 items-start">
                    <span className="text-2xl font-black text-gray-100 leading-none w-6 shrink-0">{i + 1}</span>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="text-sm font-semibold text-gray-700 hover:text-teal-600 leading-snug transition-colors line-clamp-3"
                    >
                      {post.title}
                    </Link>
                  </div>
                ))}
                {sidebarPosts.length === 0 && (
                  <p className="text-sm text-gray-300 py-4">Los artículos más leídos aparecerán aquí.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          LOS 11 PILARES
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-gray-50">
        <SectionHeader title="Los 11 Pilares" href="/pilares/" accentClass="border-gray-900" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          {CATEGORY_NAV_ORDER.map((slug) => {
            const cfg = getCategoryConfig(slug)
            return (
              <Link
                key={slug}
                href={`/pilares/${slug}/`}
                className={`group block rounded-lg p-4 border border-transparent hover:border-gray-300 bg-white hover:shadow-sm transition-all`}
              >
                <span className={`block text-xs font-black uppercase tracking-wide ${cfg.textColor} mb-1`}>
                  {cfg.label}
                </span>
                <span className="text-xs text-gray-400 line-clamp-2 group-hover:text-gray-600 transition-colors leading-relaxed">
                  {cfg.description}
                </span>
              </Link>
            )
          })}
          <Link
            href="/pilares/"
            className="group block rounded-lg p-4 border border-dashed border-gray-300 hover:border-gray-500 bg-white hover:shadow-sm transition-all flex flex-col justify-center items-center text-center"
          >
            <span className="text-xs font-black uppercase tracking-wide text-gray-400 group-hover:text-gray-700">
              Ver todos →
            </span>
          </Link>
        </div>
        {/* Stats bar por pilar */}
        <div className="flex flex-wrap gap-2 mt-2">
          {postsPorPilar.filter((p) => p.count > 0).sort((a, b) => b.count - a.count).map(({ slug, label, count }) => (
            <Link
              key={slug}
              href={`/pilares/${slug}/`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-gray-400 text-xs text-gray-500 hover:text-gray-800 transition-all"
            >
              <span className="font-semibold">{label}</span>
              <span className="bg-gray-100 text-gray-500 rounded-full px-1.5 py-0.5 text-xs font-bold">{count}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          CASOS PRÁCTICOS
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-white">
        <SectionHeader title="Casos Prácticos" href="/casos-practicos/" accentClass="border-amber-500" />
        {casosPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Caso destacado */}
            <div className="lg:col-span-7">
              <PostCard post={casosPosts[0]} variant="featured" />
            </div>
            {/* Lista de casos */}
            <div className="lg:col-span-5 divide-y divide-gray-100">
              {casosPosts.slice(1).map((post) => (
                <PostCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400">Los casos prácticos aparecerán aquí en cuanto se publiquen.</p>
        )}
      </Section>

      {/* ══════════════════════════════════════════════════
          HERRAMIENTAS GRATUITAS
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-gray-50">
        <SectionHeader title="Herramientas Gratuitas" href="/herramientas/" accentClass="border-blue-500" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {[
            { href: '/herramientas/diagnostico-negocio/', label: 'Diagnóstico', icon: '🔍', titulo: 'Diagnóstico de rentabilidad', descripcion: 'Detecta en qué áreas estás perdiendo dinero sin saberlo. Análisis completo guiado en 10 minutos.', color: 'border-teal-200 hover:border-teal-400', badge: 'bg-teal-50 text-teal-700' },
            { href: '/herramientas/avatar-cliente/', label: 'Cliente ideal', icon: '🎯', titulo: 'Define tu cliente ideal', descripcion: 'Construye el perfil exacto de quien te compra para vender más y mejor, sin bajar precios.', color: 'border-orange-200 hover:border-orange-400', badge: 'bg-orange-50 text-orange-700' },
            { href: '/herramientas/analiza-tu-idea/', label: 'Valida tu idea', icon: '💡', titulo: 'Analiza tu idea de negocio', descripcion: 'Valida si tu idea tiene mercado y viabilidad antes de invertir tiempo ni dinero en ella.', color: 'border-violet-200 hover:border-violet-400', badge: 'bg-violet-50 text-violet-700' },
          ].map((t) => (
            <Link key={t.href} href={t.href} className={`group block bg-white border rounded-2xl p-6 transition-all hover:shadow-md ${t.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{t.icon}</span>
                <span className={`text-xs font-black uppercase tracking-wide px-2 py-0.5 rounded ${t.badge}`}>{t.label}</span>
              </div>
              <h3 className="text-base font-black text-gray-900 mb-2 leading-snug group-hover:text-teal-700 transition-colors">{t.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t.descripcion}</p>
              <p className="text-xs font-bold text-gray-400 mt-4 group-hover:text-teal-600">Acceder gratis →</p>
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-5">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Artículos y recursos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {allPosts.filter((p) => p.categoria === 'diagnostico-empresarial' || p.categoria === 'precios-y-margenes').slice(0, 4).map((post) => (
              <PostCard key={post.slug} post={post} variant="default" />
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          AGENTES CONSULTORES
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-white">
        <SectionHeader title="Agentes Consultores IA" href="/agentes/" accentClass="border-violet-500" />
        <p className="text-sm text-gray-500 mb-6 max-w-2xl">
          Herramientas de consultoría guiada con IA. Pega el prompt en ChatGPT o Claude y obtén un análisis personalizado para tu negocio en minutos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { nombre: 'Diagnóstico de rentabilidad', subtitulo: 'Radiografía rápida de tu negocio', descripcion: 'Detecta en qué áreas estás perdiendo dinero sin saberlo.', slug: 'diagnostico-rentabilidad', disponible: true },
            { nombre: 'Calculadora de precios', subtitulo: 'Calcula tu precio mínimo rentable', descripcion: 'El precio real que necesitas cobrar para cubrir costes y ganar dinero.', slug: 'calculadora-precios', disponible: true },
            { nombre: 'Guión de ventas', subtitulo: 'Argumentarios personalizados', descripcion: 'Guiones adaptados a tu negocio para cerrar más ventas sin bajar precios.', slug: 'guion-ventas', disponible: true },
            { nombre: 'Control de costes', subtitulo: 'Detecta y reduce gastos ocultos', descripcion: 'Analiza tu estructura de costes e identifica dónde puedes mejorar el margen.', slug: 'control-costes', disponible: true },
          ].map((agente) => (
            <Link
              key={agente.slug}
              href={`/agentes/${agente.slug}/`}
              className="group block rounded-xl p-5 border border-gray-200 hover:border-violet-400 bg-white hover:shadow-md transition-all"
            >
              <span className="text-xs font-bold px-2 py-0.5 rounded text-green-700 bg-green-50 mb-3 inline-block">
                Disponible
              </span>
              <h3 className="text-base font-black text-gray-900 group-hover:text-violet-700 mb-1 transition-colors leading-snug">
                {agente.nombre}
              </h3>
              <p className="text-xs font-semibold text-gray-400 mb-2">{agente.subtitulo}</p>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{agente.descripcion}</p>
              <p className="text-xs font-bold text-violet-600 mt-4 group-hover:underline">Usar agente →</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          MINICURSOS
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-orange-50">
        <SectionHeader title="Minicursos" href="/minicursos/" accentClass="border-orange-500" />
        <p className="text-sm text-gray-500 mb-6">Formación directa, sin relleno. Cada minicurso resuelve un problema concreto en menos de una hora.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { slug: 'escandallo-basico', titulo: 'Escandallo básico para tu negocio', descripcion: 'Calcula el coste real de cada producto o servicio. Descubre si estás ganando o perdiendo en cada venta.', pilar: 'Precios', nivel: 'Básico' },
            { slug: 'punto-equilibrio', titulo: 'Calcula tu punto de equilibrio', descripcion: 'El número mínimo que debes facturar para no perder dinero. Más fácil de lo que parece.', pilar: 'Diagnóstico', nivel: 'Básico' },
            { slug: 'escandallo-hosteleria', titulo: 'Escandallo para hostelería', descripcion: 'Guía completa para bares y restaurantes: food cost, coste por plato y precios de carta rentables.', pilar: 'Precios', nivel: 'Básico' },
          ].map((curso) => (
            <Link
              key={curso.slug}
              href={`/minicursos/${curso.slug}/`}
              className="group block bg-white border border-orange-200 hover:border-orange-400 rounded-xl p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">{curso.pilar}</span>
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">{curso.nivel}</span>
              </div>
              <h3 className="text-base font-black text-gray-900 group-hover:text-orange-700 mb-2 leading-snug transition-colors">{curso.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{curso.descripcion}</p>
              <p className="text-xs font-bold text-orange-600 mt-4 group-hover:underline">Empezar minicurso →</p>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/minicursos/" className="text-sm font-bold text-orange-600 hover:text-orange-800 transition-colors">
            Ver todos los minicursos →
          </Link>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          ÚLTIMOS ARTÍCULOS
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-gray-50">
        <SectionHeader title="Últimos artículos" href="/blog/" accentClass="border-emerald-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultimosArticulos.map((post) => (
            <PostCard key={post.slug} post={post} variant="default" />
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          SECTORES
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-white">
        <SectionHeader title="Por Sector" href="/sectores/" accentClass="border-teal-500" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {SECTORES.map((sector) => (
            <Link
              key={sector.id}
              href={`/sectores/${sector.slug}/`}
              className="group block bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-xl p-4 text-center transition-all"
            >
              <p className="text-sm font-black text-gray-700 group-hover:text-teal-700 transition-colors leading-snug">
                {sector.name}
              </p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{sector.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════
          NEWSLETTER CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">Newsletter semanal</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Una idea cada semana para ganar más con tu negocio
            </h2>
            <p className="text-gray-400 mb-8">
              Sin spam. Sin relleno. Solo estrategia práctica para negocios físicos.
            </p>
            <NewsletterInline />
          </div>
        </div>
      </section>

    </div>
  )
}

