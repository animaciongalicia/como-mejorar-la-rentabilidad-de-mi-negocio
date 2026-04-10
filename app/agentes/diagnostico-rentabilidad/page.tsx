import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente Diagnóstico de Rentabilidad — IA para detectar fugas en tu negocio | Foco Rentabilismo',
  description: 'Agente de IA especializado en diagnóstico de rentabilidad. Analiza tus números, detecta dónde se pierde el dinero y te dice exactamente dónde actuar primero.',
  alternates: { canonical: `${BASE_URL}/agentes/diagnostico-rentabilidad/` },
}

const CHATGPT_URL = '' // ← añade aquí el link de ChatGPT cuando lo tengas

export default function AgenteDiagnosticoPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-violet-700 bg-white border border-violet-200 px-3 py-1 rounded-full">Cualquier negocio físico</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente Diagnóstico de Rentabilidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en detectar por qué tu negocio factura bien pero a final de mes sobra poco. Analiza tus números clave y te dice exactamente dónde se escapa el dinero.
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
                  La mayoría de dueños de negocio saben cuánto facturan. Muy pocos saben realmente cuánto ganan. Y casi ninguno sabe con exactitud dónde se está yendo la diferencia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sin un diagnóstico claro, las decisiones se toman a ojo: subir precios, meter más clientes, reducir personal... sin saber si eso resolverá el problema real o simplemente moverá el dinero de un agujero a otro.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente hace el diagnóstico que la mayoría de negocios nunca se para a hacer: analiza tu estructura de ingresos y costes, detecta qué áreas destruyen margen sin que se note, y te dice cuál es el primer paso concreto para mejorar la rentabilidad.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Qué puede hacer por tu negocio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Radiografía de márgenes reales', desc: 'Calcula el margen bruto y neto real, no el teórico. Descubre la diferencia entre lo que crees que ganas y lo que realmente entra.' },
                  { titulo: 'Mapa de fugas de rentabilidad', desc: 'Identifica qué productos, servicios o clientes están destruyendo margen. A veces el problema no es ganar más sino dejar de perder.' },
                  { titulo: 'Análisis de estructura de costes', desc: 'Separa fijos de variables, detecta qué gastos han crecido sin control y cuáles podrías reducir sin dañar el negocio.' },
                  { titulo: 'Punto de equilibrio real', desc: 'Cuánto tienes que facturar para no perder dinero, y a qué distancia estás de esa cifra ahora mismo.' },
                  { titulo: 'Priorización de acciones', desc: 'No una lista de 20 mejoras posibles. Las tres que más impacto tienen en tu negocio concreto, en el orden correcto.' },
                  { titulo: 'Comparativa sectorial', desc: 'Dónde están tus ratios clave respecto a lo habitual en negocios similares. Para saber si el problema es tuyo o del sector.' },
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
                  'Negocios que facturan bien pero a final de mes no sobra lo esperado',
                  'Dueños que sienten que trabajan mucho pero el beneficio no refleja el esfuerzo',
                  'Negocios que han crecido en ventas pero no en beneficio',
                  'Tiendas, talleres, restaurantes o servicios con varios productos o líneas de negocio',
                  'Cualquier pyme o autónomo que nunca ha hecho un diagnóstico financiero serio',
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
                  { n: '01', titulo: 'Prepara tus cifras básicas', desc: 'Facturación mensual aproximada, principales gastos fijos (alquiler, sueldos, suministros) y si puedes, el margen de tus productos o servicios más importantes. No hace falta contabilidad perfecta.' },
                  { n: '02', titulo: 'Describe el síntoma que más te preocupa', desc: 'El agente funciona mejor cuando le dices el problema concreto: "a fin de mes no llego", "las ventas suben pero el beneficio no", "no sé qué productos me dan más margen". Cuanto más específico, mejor diagnóstico.' },
                  { n: '03', titulo: 'Pide el diagnóstico o la acción concreta', desc: 'Puedes pedirle diagnóstico completo, análisis de un área concreta o directamente las tres acciones con más impacto. El agente se adapta a lo que necesitas resolver ahora.' },
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
                <Link href="/herramientas/diagnostico-negocio/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Diagnóstico de rentabilidad</p>
                  <p className="text-sm text-gray-500">Detecta en 10 minutos las principales fugas de rentabilidad.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Hacer diagnóstico →</p>
                </Link>
                <Link href="/blog/diagnostico-rentabilidad-negocio/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Cómo hacer un diagnóstico de rentabilidad</p>
                  <p className="text-sm text-gray-500">El proceso completo paso a paso.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/costes-ocultos-negocio/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Costes ocultos que destrozan el margen</p>
                  <p className="text-sm text-gray-500">Los gastos que no aparecen en la cuenta de resultados pero destruyen la rentabilidad.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/punto-de-equilibrio-negocio/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">El punto de equilibrio que debes conocer</p>
                  <p className="text-sm text-gray-500">Cuánto tienes que facturar para no perder dinero.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Empieza aquí</p>
                <p className="text-sm font-black text-gray-900 mb-2">Herramienta de diagnóstico rápido</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Responde 10 preguntas y detecta las áreas críticas de tu negocio.</p>
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
