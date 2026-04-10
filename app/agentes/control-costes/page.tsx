import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente de Control de Costes — IA para encontrar dónde se escapa el dinero | Foco Rentabilismo',
  description: 'Agente de IA especializado en auditoría de costes. Revisa tu estructura de gastos, detecta lo prescindible y calcula tu punto de equilibrio real.',
  alternates: { canonical: `${BASE_URL}/agentes/control-costes/` },
}

const CHATGPT_URL = '' // ← añade aquí el link de ChatGPT cuando lo tengas

export default function AgenteCostesPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-violet-700 bg-white border border-violet-200 px-3 py-1 rounded-full">Pymes · Autónomos · Negocios físicos</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente de Control de Costes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en auditoría de gastos. Analiza tu estructura de costes fijos y variables, detecta qué gastos puedes reducir o eliminar y te calcula el impacto real en tu beneficio.
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
                  Los costes de un negocio no suben de golpe. Se acumulan despacio, gasto a gasto, contrato a contrato, hasta que un día miras el extracto bancario y no reconoces la mitad de los cargos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El problema no es gastar, es no saber qué estás gastando realmente. Suscripciones que nadie usa, proveedores con condiciones que ya no son las mejores, gastos que parecen pequeños pero en conjunto destruyen el margen. Y encima, sin saber cuál es tu punto de equilibrio real, no puedes saber si lo que entra es suficiente para cubrir todo lo que sale.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente hace la auditoría que la mayoría de negocios posterga: revisa tu estructura de costes fijos y variables, detecta qué es prescindible o negociable y te dice cuánto mejoraría tu beneficio con cada cambio concreto.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Qué puede hacer por tu negocio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Auditoría de costes fijos', desc: 'Revisa uno a uno tus gastos fijos mensuales: alquiler, seguros, suministros, suscripciones, asesoría... Detecta cuáles están por encima del precio de mercado o ya no tienen sentido.' },
                  { titulo: 'Análisis de costes variables', desc: 'Qué porcentaje de tus ingresos se va en costes variables y cómo se comporta ese porcentaje cuando suben o bajan las ventas. Dónde está la palanca de mejora.' },
                  { titulo: 'Detección de gastos prescindibles', desc: 'Qué puedes eliminar sin que el negocio lo note. Lo que parece pequeño sumado al año puede ser la diferencia entre un negocio que ahoga y uno que respira.' },
                  { titulo: 'Cálculo del punto de equilibrio', desc: 'Cuánto tienes que facturar cada mes para cubrir todos tus costes. Y qué pasa si un mes no llegas: cuánto tardarías en recuperarte y con qué margen de seguridad operas.' },
                  { titulo: 'Simulación de reducción de costes', desc: 'Si reduces tal gasto un 20%, si renegociar ese contrato ahorra X euros al mes... cuánto impacto tiene cada decisión en el beneficio final.' },
                  { titulo: 'Plan de optimización por prioridad', desc: 'Las acciones concretas ordenadas por impacto. No una lista de 15 ideas, sino las tres cosas que más mejorarían tu rentabilidad si las haces esta semana.' },
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
                  'Negocios con estructura de costes fijos alta que tienen meses donde no se llega al punto de equilibrio',
                  'Dueños que sienten que los gastos han crecido pero no saben exactamente cuáles ni por qué',
                  'Negocios que llevan años con los mismos proveedores y contratos sin haberlos revisado',
                  'Autónomos y pequeñas empresas que mezclan gastos personales y del negocio sin separación clara',
                  'Cualquier negocio que quiere mejorar beneficio sin necesariamente vender más',
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
                  { n: '01', titulo: 'Lista tus gastos principales', desc: 'Alquiler, sueldos, suministros, seguros, suscripciones, materiales, coste de producto... No hace falta que sea exacto al céntimo. El agente trabaja con aproximaciones y te ayuda a refinar.' },
                  { n: '02', titulo: 'Describe la situación', desc: 'Cuánto facturas al mes, si hay meses mejores y peores, y cuál es el síntoma que más te preocupa: ¿no llegas a fin de mes? ¿no entiendes a dónde va el dinero? ¿los costes han subido sin que sepas por qué?' },
                  { n: '03', titulo: 'Pide la auditoría o el plan concreto', desc: 'El agente puede hacer una revisión completa, analizar una categoría de costes específica o decirte directamente qué cambiaría para que tu beneficio mensual mejore en X euros.' },
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
                <Link href="/blog/costes-ocultos-negocio/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Costes ocultos que destrozan el margen</p>
                  <p className="text-sm text-gray-500">Los gastos que no aparecen en ninguna factura pero que destrozan la rentabilidad.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/reducir-costes-sin-perder-calidad/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Reducir costes sin perder calidad</p>
                  <p className="text-sm text-gray-500">Dónde cortar y dónde no tocar nunca si quieres que el negocio siga funcionando bien.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/calculadora-punto-equilibrio-negocio/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Calculadora de punto de equilibrio</p>
                  <p className="text-sm text-gray-500">Calcula cuánto tienes que facturar cada mes para no perder dinero.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Calcular →</p>
                </Link>
                <Link href="/agentes/diagnostico-rentabilidad/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Agente Diagnóstico</p>
                  <p className="text-sm text-gray-500">Si necesitas una visión completa de la rentabilidad antes de entrar en el detalle de costes.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Antes de la auditoría</p>
                <p className="text-sm font-black text-gray-900 mb-2">Diagnóstico de rentabilidad</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Detecta primero en qué área está el problema principal antes de analizar los costes en detalle.</p>
                <Link href="/herramientas/diagnostico-negocio/"
                  className="block text-center bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors">
                  Hacer diagnóstico →
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
