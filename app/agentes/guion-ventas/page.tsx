import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente de Ventas — IA para crear argumentarios y cerrar más sin bajar el precio | Foco Rentabilismo',
  description: 'Agente de IA especializado en ventas para negocios físicos. Genera argumentarios personalizados, responde objeciones de precio y te ayuda a cerrar más sin hacer descuentos.',
  alternates: { canonical: `${BASE_URL}/agentes/guion-ventas/` },
}

const CHATGPT_URL = '' // ← añade aquí el link de ChatGPT cuando lo tengas

export default function AgenteVentasPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-violet-700 bg-white border border-violet-200 px-3 py-1 rounded-full">Tiendas · Servicios · Comercios locales</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente de Ventas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en argumentarios y cierre de ventas para negocios físicos. Genera guiones personalizados para tu negocio, responde objeciones de precio y cierra más sin hacer descuentos.
          </p>
          <div className="mt-6">
            {CHATGPT_URL ? (
              <a href={CHATGPT_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-black px-8 py-3.5 rounded-xl text-base transition-colors">
                Abrir agente en ChatGPT →
              </a>
            ) : (
              <span className="inline-block bg-gray-200 text-gray-500 font-black px-8 py-3.5 rounded-xl text-base cursor-not-allowed">
                Disponible próximamente en ChatGPT
              </span>
            )}
            <p className="text-xs text-gray-400 mt-2">Gratis · Requiere cuenta ChatGPT · Sin datos de tarjeta</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>
          <div className="space-y-16">

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">El problema que resuelve</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  La mayoría de negocios físicos vende bien cuando el cliente ya quiere comprar. El problema es cuando duda, cuando compara, cuando dice &ldquo;es caro&rdquo; o cuando simplemente no vuelve.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sin un argumentario claro, la respuesta habitual al &ldquo;es que en otro sitio lo vi más barato&rdquo; es bajar el precio o dejar ir al cliente. Los dos caminos destruyen margen. El primero directamente, el segundo porque deja de entrar dinero que podría haber entrado.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente construye el argumentario que necesitas para tu negocio concreto: cómo presentar lo que vendes, cómo responder las objeciones más frecuentes y cómo cerrar la venta sin necesidad de hacer descuentos que no puedes permitirte.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Qué puede hacer por tu negocio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Argumentario de ventas personalizado', desc: 'Un guion adaptado a tu negocio, tus productos y tus clientes. No frases genéricas de manual de ventas, sino lo que tiene sentido decir en tu tienda, taller o negocio.' },
                  { titulo: 'Respuestas a las objeciones más frecuentes', desc: 'Las 5 o 6 objeciones que escuchas una y otra vez: "es caro", "me lo pienso", "lo vi más barato"... Con respuestas concretas que no suenan a vendedor agresivo.' },
                  { titulo: 'Técnicas de cierre sin descuento', desc: 'Cómo cerrar la venta cuando el cliente duda, sin recurrir al descuento como primer movimiento. Alternativas que mantienen el precio y la dignidad del negocio.' },
                  { titulo: 'Estrategia de upselling y cross-selling', desc: 'Cómo subir el ticket medio proponiendo productos o servicios adicionales en el momento correcto, sin que parezca que estás intentando vender más a toda costa.' },
                  { titulo: 'Discurso de presentación del negocio', desc: 'Cómo explicar en 30 segundos qué haces, por qué eres diferente y por qué el cliente debería comprarte a ti y no a la competencia. Para que la primera impresión cuente.' },
                  { titulo: 'Plan de seguimiento de clientes', desc: 'Qué hacer con el cliente que se fue sin comprar, cómo reactivar a los que llevan tiempo sin volver y cómo construir una relación que genera repetición sin ser pesado.' },
                ].map((item) => (
                  <div key={item.titulo} className="border border-violet-100 bg-violet-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Para qué tipos de negocio es más útil</h2>
              <div className="space-y-3">
                {[
                  'Tiendas de ropa, calzado, decoración o cualquier retail donde la competencia online presiona los precios',
                  'Talleres mecánicos, fontaneros, electricistas o servicios donde el cliente siempre pregunta "¿y no puede ser más barato?"',
                  'Centros de estética, peluquerías o servicios de bienestar donde cuesta comunicar el valor frente a la competencia',
                  'Ópticas, clínicas dentales u otros servicios de salud donde el cliente compara presupuestos',
                  'Cualquier negocio donde la tasa de conversión de presupuestos a ventas cerradas es baja',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-violet-500 font-black">→</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Cómo usarlo</h2>
              <div className="space-y-4">
                {[
                  { n: '01', titulo: 'Describe tu negocio y lo que vendes', desc: 'Qué tipo de negocio tienes, cuál es tu producto o servicio principal, a qué precio lo vendes y qué tipo de cliente te compra habitualmente. Cuanto más concreto, más útil será el argumentario.' },
                  { n: '02', titulo: 'Cuéntale las objeciones que más escuchas', desc: 'Las frases que te dicen los clientes cuando no compran o cuando regatean. Con esa información el agente construye respuestas específicas para tu situación, no frases genéricas.' },
                  { n: '03', titulo: 'Pide lo que necesitas', desc: 'Puedes pedirle el argumentario completo, respuestas solo para objeciones de precio, técnicas de cierre para un producto concreto o el discurso de presentación de tu negocio. El agente se adapta.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-violet-200 leading-none">{item.n}</span>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{item.titulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">Recursos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/blog/como-subir-ticket-medio/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Cómo subir el ticket medio</p>
                  <p className="text-sm text-gray-500">Más ingreso por cliente sin necesitar más clientes. Las técnicas que funcionan en negocios físicos.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/como-fidelizar-clientes-negocio-local/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Cómo fidelizar clientes en tu negocio local</p>
                  <p className="text-sm text-gray-500">El cliente que repite vale más que diez clientes nuevos. Cómo construir esa repetición.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/como-diferenciarse-de-la-competencia-negocio/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Cómo diferenciarse de la competencia</p>
                  <p className="text-sm text-gray-500">Cómo dejar de competir en precio encontrando lo que solo tú puedes ofrecer.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/agentes/analista-competencia/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Agente Competencia</p>
                  <p className="text-sm text-gray-500">Antes de construir el argumentario, analiza tu ventaja diferencial real frente a la competencia.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Primero esto</p>
                <p className="text-sm font-black text-gray-900 mb-2">Analiza tu ventaja diferencial</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Un buen argumentario empieza por saber en qué eres mejor que la competencia. El Agente Competencia te ayuda a descubrirlo.</p>
                <Link href="/agentes/analista-competencia/"
                  className="block text-center bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors">
                  Ver Agente Competencia →
                </Link>
              </div>
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
