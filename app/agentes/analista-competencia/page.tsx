import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente Analista de Competencia — Encuentra tu ventaja real | Foco Rentabilismo',
  description: 'Agente de IA que analiza tu competencia y te ayuda a encontrar tu ventaja diferencial real. Para comercios, tiendas y negocios de servicios que quieren dejar de competir en precio.',
  alternates: { canonical: `${BASE_URL}/agentes/analista-competencia/` },
}

const CHATGPT_URL = 'https://chatgpt.com/g/g-688be838bae88191af036229689f9188-r1-analista-de-competencia'

export default function AgenteAnalistaCompetenciaPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-blue-700 bg-white border border-blue-200 px-3 py-1 rounded-full">Comercio · Servicios · Retail</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Analista de Competencia
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA que analiza tu competencia, identifica tu ventaja diferencial real y te dice cómo comunicarla para dejar de competir en precio.
          </p>
          <div className="mt-6">
            <a
              href={CHATGPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-black px-8 py-3.5 rounded-xl text-base transition-colors"
            >
              Abrir agente en ChatGPT →
            </a>
            <p className="text-xs text-gray-400 mt-2">Gratis · Requiere cuenta ChatGPT</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>
          <div className="space-y-16">

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                El problema que resuelve
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cuando un cliente elige a tu competencia por precio, la reacción instintiva es bajar el tuyo. El problema es que ese camino no tiene fondo.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La mayoría de negocios locales tienen ventajas reales frente a las grandes cadenas y plataformas online. El problema es que no saben articularlas con claridad, no las comunican bien o directamente no las han identificado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este agente hace el análisis de competencia contigo: quiénes son, qué ofrecen, dónde flaquean y dónde puedes ganarles sin necesidad de bajar precios. El resultado es un posicionamiento concreto y accionable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Qué consigues con él
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Mapa de competidores reales', desc: 'Identifica quiénes compiten contigo de verdad: directos, indirectos y sustitutos que el cliente considera.' },
                  { titulo: 'Sus puntos débiles', desc: 'Qué no pueden ofrecer las grandes cadenas o plataformas que tú sí puedes. Ahí está tu oportunidad.' },
                  { titulo: 'Tu ventaja diferencial', desc: 'Formulada de forma concreta y comunicable, no como una lista de adjetivos vacíos.' },
                  { titulo: 'Argumentario anti-precio', desc: 'Cómo responder cuando un cliente dice que en otro sitio lo tiene más barato. Sin ponerte a la defensiva.' },
                  { titulo: 'Estrategia de posicionamiento', desc: 'En qué segmento de cliente enfocarte y qué mensaje usar para que el precio deje de ser el criterio de decisión.' },
                  { titulo: 'Acciones concretas esta semana', desc: 'No un informe. Tres cosas específicas que puedes hacer en los próximos días para diferenciarte mejor.' },
                ].map((item) => (
                  <div key={item.titulo} className="border border-violet-100 bg-violet-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Para qué tipos de negocio es más útil
              </h2>
              <div className="space-y-3">
                {[
                  'Comercios locales que compiten con grandes superficies o plataformas online',
                  'Tiendas especializadas que pierden clientes por precio frente a generalistas',
                  'Negocios de servicios que se ven obligados a bajar tarifas para competir',
                  'Cualquier negocio que quiera saber exactamente en qué es mejor que su competencia y cómo decirlo',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-violet-500 font-black">→</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Cómo sacarle el máximo partido
              </h2>
              <ol className="space-y-5">
                {[
                  { n: '01', titulo: 'Describe tu negocio con detalle', desc: 'Tipo de negocio, qué vendes, a quién, en qué zona, ticket medio aproximado. Cuanto más contexto le des, más útil es el análisis.' },
                  { n: '02', titulo: 'Nombra a tus competidores principales', desc: 'Tanto los locales como las alternativas online o grandes cadenas. Si no sabes exactamente quiénes son, el agente te ayuda a identificarlos.' },
                  { n: '03', titulo: 'Dile qué te preocupa más', desc: '¿Es el precio? ¿La captación de nuevos clientes? ¿La retención? El análisis se enfoca donde más lo necesitas.' },
                  { n: '04', titulo: 'Pídele el argumentario', desc: 'Una vez tenga el análisis, pídele que formule el argumento específico que usarías con un cliente que te dice que en otro sitio lo tiene más barato.' },
                ].map((paso) => (
                  <li key={paso.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-violet-200 leading-none">{paso.n}</span>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{paso.titulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-violet-600 rounded-2xl p-8 text-center">
              <p className="text-violet-200 text-sm font-bold uppercase tracking-widest mb-3">Agente disponible ahora</p>
              <h2 className="text-2xl font-black text-white mb-3">Encuentra tu ventaja diferencial hoy</h2>
              <p className="text-violet-200 mb-6 max-w-md mx-auto leading-relaxed">
                Gratis. En ChatGPT. Describe tu negocio y tu competencia, y en minutos tendrás claro por qué tu cliente debería elegirte a ti.
              </p>
              <a
                href={CHATGPT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-violet-700 font-black px-8 py-3.5 rounded-xl text-base hover:bg-violet-50 transition-colors"
              >
                Abrir en ChatGPT →
              </a>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Complementa con estas herramientas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/herramientas/analizador-productos/" className="group block border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-blue-700 mb-1">Analizador de productos 80/20</p>
                  <p className="text-sm text-gray-500">Identifica tus productos estrella y elimina los que no aportan.</p>
                  <p className="text-xs font-bold text-blue-600 mt-3 group-hover:underline">Usar herramienta →</p>
                </Link>
                <Link href="/minicursos/productos-estrella/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Minicurso</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Cómo identificar tus productos estrella</p>
                  <p className="text-sm text-gray-500">Reorganiza tu catálogo para que trabaje a tu favor.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/blog/caso-libreria-supervivencia-sin-competir-en-precio/" className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-amber-700 mb-1">La librería que dejó de competir en precio</p>
                  <p className="text-sm text-gray-500">Cómo un comercio sobrevivió diferenciándose, no bajando precios.</p>
                  <p className="text-xs font-bold text-amber-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/tienda-fisica-vs-amazon-como-ganar-sin-bajar-precios/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Tu tienda no puede ganar a Amazon en precio</p>
                  <p className="text-sm text-gray-500">La estrategia que funciona para el comercio local.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Otros agentes</p>
                <ul className="space-y-2">
                  {[
                    { slug: 'diagnostico-rentabilidad', nombre: 'Agente Diagnóstico' },
                    { slug: 'calculadora-precios', nombre: 'Agente Precios' },
                    { slug: 'escandallos-hosteleria', nombre: 'Agente Escandallos' },
                    { slug: 'guion-ventas', nombre: 'Agente Ventas' },
                  ].map((a) => (
                    <li key={a.slug}>
                      <Link href={`/agentes/${a.slug}/`} className="text-sm font-semibold text-gray-700 hover:text-violet-700 transition-colors block px-2 py-1 rounded hover:bg-violet-100">
                        {a.nombre} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center h-48">
                <p className="text-xs text-gray-400 text-center px-4">Espacio publicitario</p>
              </div>
              <Sidebar />
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
