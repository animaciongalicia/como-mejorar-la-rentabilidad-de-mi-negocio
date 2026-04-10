import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente de Precios — IA para calcular tu precio mínimo rentable | Foco Rentabilismo',
  description: 'Agente de IA especializado en fijación de precios. Calcula el precio mínimo que necesitas cobrar para ganar dinero, defiende tu tarifa y deja de malvender tu trabajo.',
  alternates: { canonical: `${BASE_URL}/agentes/calculadora-precios/` },
}

const CHATGPT_URL = '' // ← añade aquí el link de ChatGPT cuando lo tengas

export default function AgentePreciosPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-violet-700 bg-white border border-violet-200 px-3 py-1 rounded-full">Tiendas · Servicios · Hostelería</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente de Precios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en fijación de precios rentables. Calcula el precio mínimo que necesitas cobrar para ganar dinero de verdad, sin malvender y sin perder clientes por el camino.
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
                  La mayoría de negocios fijan sus precios mirando a la competencia o por intuición. Ninguno de los dos métodos garantiza rentabilidad. Solo garantiza que sigues en el mercado hasta que los números te alcancen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El precio correcto no es el más barato del mercado. Tampoco el más caro. Es el que cubre todos tus costes reales, incluye el margen que necesitas para que el negocio valga la pena y resiste la comparación con la competencia sin necesidad de justificarse con descuentos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente hace el cálculo que la mayoría de dueños evita por no saber cómo hacerlo: cuánto debes cobrar como mínimo, qué pasa si subes un 10% y cómo argumentar ese precio ante un cliente que dice que es caro.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Qué puede hacer por tu negocio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Precio mínimo rentable', desc: 'Calcula el precio por debajo del cual estás perdiendo dinero, incluyendo todos los costes directos e indirectos que muchos no tienen en cuenta.' },
                  { titulo: 'Análisis de margen por producto o servicio', desc: 'Qué margen real está dejando cada cosa que vendes. Cuáles son rentables, cuáles apenas cubren costes y cuáles hay que subir o eliminar.' },
                  { titulo: 'Simulación de escenarios de precio', desc: 'Qué pasa si subes un 10%, un 15% o un 20%. Cuántos clientes puedes perder sin que tu beneficio se resienta. El número muchas veces sorprende.' },
                  { titulo: 'Argumentario de precio', desc: 'Cómo defender tu precio ante el típico "es que la competencia cobra menos". Con argumentos concretos basados en valor, no en descuentos.' },
                  { titulo: 'Estrategia de subida de precios', desc: 'Si necesitas subir precios, cómo hacerlo sin perder clientes: timing, comunicación, excepciones y cómo proteger los clientes más valiosos.' },
                  { titulo: 'Detección de servicios mal tarifados', desc: 'En negocios con varios servicios o productos, identifica cuáles están por debajo del precio justo y están arrastrando la rentabilidad del conjunto.' },
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
                  'Autónomos y servicios profesionales que cobran por hora o por proyecto sin saber si el precio cubre sus costes reales',
                  'Tiendas que compiten en precio con grandes superficies o comercio online y necesitan encontrar su precio sostenible',
                  'Negocios de hostelería donde el precio lleva años sin revisarse y los costes han subido',
                  'Centros de estética, fisioterapia o salud que no saben si sus tarifas cubren el coste real de cada servicio',
                  'Cualquier negocio que ha detectado que su margen es bajo pero no sabe si el problema está en los precios o en los costes',
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
                  { n: '01', titulo: 'Ten claros tus costes principales', desc: 'Cuánto pagas de alquiler, sueldos, suministros, materiales o coste de producto. Y cuántas horas trabajas o cuántas unidades vendes al mes. Con eso es suficiente para empezar.' },
                  { n: '02', titulo: 'Cuéntale qué vendes y a qué cobras ahora', desc: 'Describe tus productos o servicios principales, el precio actual y si tienes la sensación de que es demasiado bajo, demasiado alto o simplemente no lo sabes. El agente parte de ahí.' },
                  { n: '03', titulo: 'Pide el cálculo o la estrategia', desc: 'Puedes pedirle el precio mínimo rentable, un análisis de qué pasaría si subes precios, cómo argumentar la subida ante tus clientes o cómo estructurar una tarifa nueva. Cada análisis tiene su propio enfoque.' },
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
                <Link href="/blog/cuanto-cobrar-por-mi-producto/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Cuánto cobrar por tu producto o servicio</p>
                  <p className="text-sm text-gray-500">El método para fijar precios sin malvender ni espantar clientes.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/como-aumentar-el-margen-bruto/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Cómo aumentar el margen bruto</p>
                  <p className="text-sm text-gray-500">Precio y estructura de costes: las dos palancas para mejorar el margen.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/calculo-margen-contribucion/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Cálculo del margen de contribución</p>
                  <p className="text-sm text-gray-500">Qué es, cómo se calcula y por qué es más útil que el margen bruto para tomar decisiones.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/agentes/escandallos-hosteleria/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Agente Escandallos (hostelería)</p>
                  <p className="text-sm text-gray-500">Si tienes un bar o restaurante, este agente calcula el precio correcto plato a plato.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Calcula tu precio ahora</p>
                <p className="text-sm font-black text-gray-900 mb-2">Calculadora de punto de equilibrio</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Calcula cuánto tienes que vender para cubrir todos tus costes antes de fijar el precio.</p>
                <Link href="/herramientas/diagnostico-negocio/"
                  className="block text-center bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors">
                  Ir a la calculadora →
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
