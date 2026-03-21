import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente Costes — Encuentra dónde se escapa el dinero | Foco Rentabilismo',
  description:
    'Audita tu estructura de costes fijos y variables con IA. Detecta gastos ocultos, elimina lo prescindible y calcula tu punto de equilibrio real en 15 minutos.',
  alternates: { canonical: `${BASE_URL}/agentes/control-costes/` },
}

export default function AgenteCostesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/agentes/"
            className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors"
          >
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-violet-600 bg-white border border-violet-200 px-3 py-1 rounded-full">
              Costes
            </span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              Disponible ahora
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente Costes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Audita tu estructura de costes y encuentra dónde se escapa el dinero.
            Sin contabilidad, sin Excel complicado.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div className="space-y-16">

            {/* 1. El problema */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                El problema que resuelve
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tienes clientes. Tienes ventas. Pero a fin de mes el dinero en la cuenta no cuadra con
                  lo que has facturado. El problema rara vez es que vendas poco — casi siempre es que
                  los costes se comen el margen sin que te des cuenta.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  La mayoría de dueños de negocios conocen sus costes fijos grandes: el alquiler, los
                  sueldos. Pero hay una docena de gastos pequeños y medianos que se cuelan cada mes
                  sin que nadie los revise. Suscripciones que ya no se usan. Proveedores que se subieron
                  el precio hace dos años. Servicios duplicados. Costes que se podrían renegociar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>El Agente Costes hace la auditoría que nunca tienes tiempo de hacer.</strong>
                  Repasa tu estructura de gastos, identifica lo que sobra o lo que se puede reducir,
                  y calcula cuánto cambia tu punto de equilibrio si actúas sobre esos puntos.
                </p>
              </div>
            </section>

            {/* 2. Qué consigues */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Qué consigues con él
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    titulo: 'Mapa de costes fijos y variables',
                    desc: 'Una visión estructurada de todos tus gastos, separados por tipo y por impacto en el resultado. Sin Excel, sin contabilidad.',
                  },
                  {
                    titulo: 'Gastos candidatos a eliminar',
                    desc: 'Una lista de los gastos que no generan valor directo o que podrías negociar, renegociar o eliminar sin dañar el negocio.',
                  },
                  {
                    titulo: 'Tu punto de equilibrio real',
                    desc: 'Cuánto tienes que facturar cada mes para no perder dinero, con tus costes actuales. El número que deberías saber de memoria.',
                  },
                  {
                    titulo: 'Impacto de cada reducción',
                    desc: 'Si reduces X gasto en Y euros, cuánto baja tu punto de equilibrio y cuánto mejora tu margen neto. Los números antes de decidir.',
                  },
                  {
                    titulo: 'Costes ocultos que no estás contando',
                    desc: 'Los gastos que olvidamos imputar: amortizaciones, tiempo propio, pequeños gastos recurrentes que suman más de lo que parece.',
                  },
                  {
                    titulo: 'Plan de acción priorizado',
                    desc: 'Qué tocar primero, qué dejar para después y qué nunca tocar si no quieres dañar lo que funciona. Con criterios claros.',
                  },
                ].map((item) => (
                  <div key={item.titulo} className="border border-violet-100 bg-violet-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Cómo funciona */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Cómo funciona
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                El Agente Costes convierte a ChatGPT en un auditor de costes especializado en
                negocios físicos. Te hace las preguntas correctas para mapear tu estructura de
                gastos y te devuelve un análisis con los puntos de acción más rentables.
              </p>
              <ol className="space-y-6">
                {[
                  {
                    n: '01',
                    titulo: 'Le das tu lista de gastos mensuales',
                    desc: 'No hace falta que sea perfecta. Con los extractos bancarios de los últimos dos o tres meses tienes suficiente. Dile los gastos principales uno a uno o en bloque.',
                  },
                  {
                    n: '02',
                    titulo: 'Los clasifica y detecta los candidatos a revisar',
                    desc: 'Separa costes fijos de variables, identifica cuáles llevan mucho tiempo sin revisarse y te marca los que tienen más potencial de reducción.',
                  },
                  {
                    n: '03',
                    titulo: 'Calcula tu punto de equilibrio actual',
                    desc: 'Con los costes fijos reales y tu margen bruto habitual, calcula cuánto necesitas facturar cada mes para no perder dinero.',
                  },
                  {
                    n: '04',
                    titulo: 'Te propone escenarios de mejora con impacto concreto',
                    desc: 'Si reduces el gasto A en un 20%, si eliminas el gasto B, si renegocias el C. El impacto en euros y en punto de equilibrio de cada decisión.',
                  },
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

            {/* 4. Cómo sacarle el máximo */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Cómo sacarle el máximo partido
              </h2>
              <div className="space-y-4">
                {[
                  {
                    titulo: 'Entra con los extractos bancarios a mano',
                    texto: 'Cuanto más real sea la lista de gastos que le das, más preciso será el análisis. No hace falta que sea exhaustiva al céntimo, pero sí que refleje tu situación real del último mes.',
                  },
                  {
                    titulo: 'Incluye gastos que pagas en efectivo o en negro',
                    texto: 'El análisis solo sirve si es completo. Los gastos que no pasan por el banco también cuentan. Díselos aunque no tengas factura: el agente no es Hacienda.',
                  },
                  {
                    titulo: 'No olvides los gastos anuales o trimestrales',
                    texto: 'Seguros, declaraciones, licencias, renovaciones anuales. Pártelos entre 12 y súmalos a los costes fijos mensuales. Si no los incluyes, tu punto de equilibrio saldrá más bajo de lo real.',
                  },
                  {
                    titulo: 'Pídele que priorice por impacto, no solo por tamaño',
                    texto: 'Reducir 50€ en un gasto que no afecta a nada puede ser mejor que tocar 200€ en algo que sí genera valor. Pídele que diferencie entre gastos productivos e improductivos.',
                  },
                  {
                    titulo: 'Úsalo cada trimestre, no solo una vez',
                    texto: 'Los costes crecen solos si no los revisas. Hacer esta auditoría cada 3 meses lleva menos de una hora y puede suponer cientos de euros de ahorro detectado a tiempo.',
                  },
                ].map((tip) => (
                  <div key={tip.titulo} className="border-l-4 border-violet-400 pl-5">
                    <p className="font-bold text-gray-900 mb-1">{tip.titulo}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Cómo corregirlo */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Cómo corregirlo cuando se desvía
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A veces el agente da recomendaciones demasiado genéricas o propone recortes que
                no son viables para tu negocio. Estas frases te ayudan a reconducirlo:
              </p>
              <div className="space-y-3">
                {[
                  {
                    problema: 'La recomendación es demasiado genérica',
                    solucion: '"Eso ya lo sé. Dame algo específico que pueda hacer con este gasto concreto en mi tipo de negocio." → te fuerza a ser más preciso.',
                  },
                  {
                    problema: 'Propone recortar algo que no puedes eliminar',
                    solucion: '"Ese gasto es imprescindible por X razón. Deja de considerarlo y reanaliza con lo que queda." → ajusta el análisis a tu realidad.',
                  },
                  {
                    problema: 'Quieres saber el impacto de un recorte concreto',
                    solucion: '"Si reduzco ese gasto de 400€ a 250€/mes, ¿cuánto baja mi punto de equilibrio y cuánto mejora el margen?" → cálculo directo.',
                  },
                  {
                    problema: 'No sabes si un gasto es rentable',
                    solucion: '"¿Cómo sé si este gasto me está generando valor o es improductivo? Ayúdame a evaluarlo." → te da criterios para decidir.',
                  },
                ].map((item) => (
                  <div key={item.problema} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.problema}</p>
                    <p className="text-sm text-gray-700 italic">{item.solucion}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. El prompt */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                El prompt — cópialo y úsalo
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Copia este prompt en ChatGPT o Claude y responde a las preguntas que te haga.
                En 20 minutos tendrás un mapa de tus costes, los candidatos a recortar y
                el impacto en tu punto de equilibrio.
              </p>
              <div className="bg-gray-900 rounded-2xl p-6 relative">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Prompt — Agente Costes</p>
                <pre className="text-sm text-gray-100 leading-relaxed whitespace-pre-wrap font-mono">
{`Actúa como un auditor de costes especializado en negocios físicos y pymes españolas. Tu objetivo es ayudar al dueño a entender su estructura de costes, detectar gastos prescindibles o mejorables y calcular el impacto en su rentabilidad.

Primero hazme estas preguntas:
1. Qué tipo de negocio tiene y cuántos años lleva funcionando
2. Cuáles son sus costes fijos mensuales principales (alquiler, nóminas fijas, seguros, suscripciones, gestoría, etc.)
3. Cuáles son sus costes variables más importantes (materias primas, mercancía, comisiones)
4. Si hay costes anuales o trimestrales relevantes (seguros anuales, licencias, etc.)
5. Cuál es su facturación mensual media
6. Cuál cree que es su margen bruto aproximado

Con esa información hazme:
— Clasificación de todos los costes en fijos esenciales, fijos revisables y variables
— Lista de los 3-5 gastos con más potencial de reducción o eliminación, con argumentos
— Cálculo del punto de equilibrio actual (cuánto necesita facturar para no perder dinero)
— Simulación del nuevo punto de equilibrio si actúa sobre los gastos identificados
— Estimación del ahorro mensual potencial si aplica las recomendaciones

Termina con un plan de acción priorizado: qué revisar esta semana, qué el próximo mes y qué no tocar.

Sé directo y concreto. Números, no teoría.`}
                </pre>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Funciona con ChatGPT 4o, Claude 3.5 Sonnet y versiones superiores.
              </p>
            </section>

            {/* CTA final */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-8">
                ¿Por dónde empezar?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-gray-200 rounded-2xl p-7">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Opción A</p>
                  <h3 className="text-lg font-black text-gray-900 mb-3">Configúralo tú mismo</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    Copia el prompt de arriba y pégalo en ChatGPT o Claude. Ten a mano los extractos
                    bancarios de los últimos dos meses. Responde las preguntas y en 20 minutos
                    tendrás tu auditoría de costes hecha.
                  </p>
                  <p className="text-sm font-bold text-gray-500">↑ El prompt está justo arriba. Es tuyo.</p>
                </div>
                <div className="border-2 border-violet-400 bg-violet-50 rounded-2xl p-7">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-3">Opción B</p>
                  <h3 className="text-lg font-black text-gray-900 mb-3">Ver todos los agentes</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    Tenemos más agentes disponibles: diagnóstico completo, precios, ventas.
                    Cada uno está afinado para un problema concreto de rentabilidad.
                  </p>
                  <Link
                    href="/agentes/"
                    className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Ver todos los agentes →
                  </Link>
                </div>
              </div>
            </section>

          </div>{/* fin columna principal */}

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center h-64">
                <p className="text-xs text-gray-400 text-center px-4">Espacio publicitario</p>
              </div>

              {/* Otros agentes */}
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5">
                <h3 className="text-sm font-black uppercase tracking-wide text-violet-700 mb-4">
                  Otros agentes
                </h3>
                <ul className="space-y-2">
                  {[
                    { slug: 'diagnostico-rentabilidad', nombre: 'Agente Diagnóstico' },
                    { slug: 'calculadora-precios', nombre: 'Agente Precios' },
                    { slug: 'guion-ventas', nombre: 'Agente Ventas' },
                  ].map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/agentes/${a.slug}/`}
                        className="text-sm font-semibold text-gray-700 hover:text-violet-700 transition-colors block px-2 py-1 rounded hover:bg-violet-100"
                      >
                        {a.nombre} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Sidebar />
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
