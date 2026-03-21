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
  const herramientasPosts = allPosts.filter((p) => p.tipo === 'herramienta').slice(0, 5)
  const minicursosPosts = allPosts.filter((p) => p.tipo === 'minicurso').slice(0, 3)
  const ultimosArticulos = allPosts.filter((p) => !p.tipo || p.tipo === 'articulo').slice(0, 6)

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════════════ */}
      <div className="border-b-4 border-gray-900 py-10 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-5">
            Para propietarios de negocios físicos y pymes en toda España
          </p>
          <div className="border-t-2 border-b-2 border-gray-400 py-5 my-1">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-none">
              Foco Rentabilismo
            </h1>
          </div>
          <p className="text-gray-500 mt-5 text-sm font-medium tracking-widest uppercase">
            Más beneficio. Menos excusas.
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
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
          {/* Card extra: Ver todos los pilares */}
          <Link
            href="/pilares/"
            className="group block rounded-lg p-4 border border-dashed border-gray-300 hover:border-gray-500 bg-white hover:shadow-sm transition-all flex flex-col justify-center items-center text-center"
          >
            <span className="text-xs font-black uppercase tracking-wide text-gray-400 group-hover:text-gray-700">
              Ver todos →
            </span>
          </Link>
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
          <PlaceholderCasos />
        )}
      </Section>

      {/* ══════════════════════════════════════════════════
          HERRAMIENTAS
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-gray-50">
        <SectionHeader title="Herramientas" href="/herramientas/" accentClass="border-blue-500" />
        {herramientasPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <PostCard post={herramientasPosts[0]} variant="featured" />
            </div>
            <div className="lg:col-span-5 divide-y divide-gray-100">
              {herramientasPosts.slice(1).map((post) => (
                <PostCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
          </div>
        ) : (
          <PlaceholderHerramientas />
        )}
      </Section>

      {/* ══════════════════════════════════════════════════
          AGENTES CONSULTORES
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-white">
        <SectionHeader title="Agentes Consultores" href="/agentes/" accentClass="border-violet-500" />
        <PlaceholderAgentes />
      </Section>

      {/* ══════════════════════════════════════════════════
          ÚLTIMOS ARTÍCULOS + MINICURSOS
      ══════════════════════════════════════════════════ */}
      <Section bg="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Últimos artículos — 2/3 del ancho */}
          <div className="lg:col-span-2">
            <SectionHeader title="Últimos artículos" href="/blog/" accentClass="border-emerald-500" />
            {ultimosArticulos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ultimosArticulos.map((post) => (
                  <PostCard key={post.slug} post={post} variant="default" />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">Los artículos aparecerán aquí en cuanto se publiquen.</p>
            )}
          </div>

          {/* Minicursos — 1/3 del ancho */}
          <div className="lg:col-span-1">
            <SectionHeader title="Minicursos" href="/minicursos/" accentClass="border-orange-500" />
            {minicursosPosts.length > 0 ? (
              <div className="space-y-4">
                {minicursosPosts.map((post) => (
                  <PostCard key={post.slug} post={post} variant="compact" />
                ))}
              </div>
            ) : (
              <PlaceholderMinicursos />
            )}
          </div>
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

// ── Placeholders para secciones sin contenido aún ────────────────────────

function PlaceholderCasos() {
  const items = [
    { sector: 'Hostelería', titulo: 'Bar de barrio que perdía dinero: de -2.000€ a +6.000€ al mes', resultado: '+4.000€/mes' },
    { sector: 'Salud', titulo: 'Clínica dental que no sabía cuánto ganaba realmente', resultado: 'Margen +18%' },
    { sector: 'Servicios', titulo: 'Peluquería con lista de espera que no ganaba dinero', resultado: 'Tarifa +35%' },
    { sector: 'Taller', titulo: 'Taller mecánico familiar: de 70h/semana a 45h con más beneficio', resultado: '-25h semana' },
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-gray-50 rounded-xl p-8 border border-gray-100">
        <span className="text-xs font-black uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Hostelería</span>
        <h3 className="text-2xl font-black text-gray-700 mt-3 mb-2 leading-tight">
          Bar de barrio que perdía dinero: de -2.000€ a +6.000€ al mes
        </h3>
        <p className="text-gray-400 text-sm">Subieron precios un 12%, eliminaron 3 platos del menú y redujeron merma. Resultado en 60 días.</p>
        <p className="text-xs text-gray-300 mt-6 font-medium">Próximamente →</p>
      </div>
      <div className="lg:col-span-5 divide-y divide-gray-100">
        {items.slice(1).map((item, i) => (
          <div key={i} className="py-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{item.sector}</span>
              <span className="text-xs font-bold text-green-700">{item.resultado}</span>
            </div>
            <p className="text-sm font-semibold text-gray-500 leading-snug">{item.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlaceholderHerramientas() {
  const items = [
    { titulo: 'Calculadora de punto de equilibrio', descripcion: 'Sabe en 2 minutos cuánto debes vender para no perder dinero.' },
    { titulo: 'Escandallo de costes por producto', descripcion: 'Calcula el coste real de cada cosa que vendes.' },
    { titulo: 'Plantilla de presupuesto anual', descripcion: 'Un presupuesto sencillo que cualquier dueño puede hacer.' },
    { titulo: 'Calculadora de margen bruto', descripcion: 'El margen real que deja cada producto o servicio.' },
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-gray-50 rounded-xl p-8 border border-gray-100">
        <span className="text-xs font-black uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Herramienta gratuita</span>
        <h3 className="text-2xl font-black text-gray-700 mt-3 mb-2 leading-tight">
          Calculadora de punto de equilibrio
        </h3>
        <p className="text-gray-400 text-sm">Introduce tus costes fijos y tu margen y descubre exactamente cuánto debes facturar cada mes para no perder dinero.</p>
        <p className="text-xs text-gray-300 mt-6 font-medium">Próximamente →</p>
      </div>
      <div className="lg:col-span-5 divide-y divide-gray-100">
        {items.slice(1).map((item, i) => (
          <div key={i} className="py-4">
            <p className="text-sm font-semibold text-gray-600 leading-snug mb-1">{item.titulo}</p>
            <p className="text-xs text-gray-400">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlaceholderAgentes() {
  const agentes = [
    { nombre: 'Agente Diagnóstico', subtitulo: 'Radiografía rápida de tu negocio', descripcion: 'Detecta en qué áreas estás perdiendo dinero sin saberlo.', slug: 'diagnostico-rentabilidad', disponible: true },
    { nombre: 'Agente Precios', subtitulo: 'Calcula tu precio mínimo rentable', descripcion: 'El precio real que necesitas cobrar para ganar dinero.', slug: 'calculadora-precios', disponible: true },
    { nombre: 'Agente Ventas', subtitulo: 'Guiones y argumentarios de venta', descripcion: 'Argumentos personalizados para tu negocio. Cierra más.', slug: 'guion-ventas', disponible: true },
    { nombre: 'Agente Procesos', subtitulo: 'Elimina lo que te hace perder tiempo', descripcion: 'Detecta cuellos de botella y trabaja menos horas con más resultado.', slug: 'optimizador-procesos', disponible: false },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {agentes.map((agente) => (
        <Link
          key={agente.slug}
          href={agente.disponible ? `/agentes/${agente.slug}/` : '/agentes/'}
          className={`group block rounded-xl p-5 border transition-all ${
            agente.disponible
              ? 'border-gray-200 hover:border-violet-400 bg-white hover:shadow-md'
              : 'border-gray-100 bg-gray-50 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${
              agente.disponible ? 'text-green-700 bg-green-50' : 'text-gray-400 bg-gray-100'
            }`}>
              {agente.disponible ? 'Disponible' : 'Próximamente'}
            </span>
          </div>
          <h3 className={`text-base font-black mb-1 transition-colors ${
            agente.disponible ? 'text-gray-900 group-hover:text-violet-700' : 'text-gray-500'
          }`}>
            {agente.nombre}
          </h3>
          <p className="text-xs font-semibold text-gray-400 mb-2">{agente.subtitulo}</p>
          <p className="text-xs text-gray-500 line-clamp-2">{agente.descripcion}</p>
          {agente.disponible && (
            <p className="text-xs font-bold text-violet-600 mt-4 group-hover:underline">Usar agente →</p>
          )}
        </Link>
      ))}
    </div>
  )
}

function PlaceholderMinicursos() {
  const cursos = [
    { titulo: 'Escandallo básico para tu negocio', lecciones: 5, pilar: 'Precios' },
    { titulo: 'Calcula tu punto de equilibrio', lecciones: 4, pilar: 'Diagnóstico' },
    { titulo: 'Subir precios sin perder clientes', lecciones: 6, pilar: 'Precios' },
  ]
  return (
    <div className="space-y-3">
      {cursos.map((curso, i) => (
        <Link
          key={i}
          href="/minicursos/"
          className="group block border border-gray-200 hover:border-orange-400 rounded-lg p-4 transition-all hover:shadow-sm"
        >
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded mb-2 inline-block">
            {curso.pilar} · {curso.lecciones} lecciones
          </span>
          <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-700 transition-colors leading-snug">
            {curso.titulo}
          </p>
          <p className="text-xs text-gray-400 mt-1">Próximamente →</p>
        </Link>
      ))}
    </div>
  )
}
