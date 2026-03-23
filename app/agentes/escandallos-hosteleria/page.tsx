import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente Escandallos para Hostelería — IA para Restaurantes | Foco Rentabilismo',
  description: 'Agente de IA especializado en escandallos para bares, restaurantes y cafeterías. Calcula el coste real de tus platos, detecta qué está drenando tu margen y optimiza tu carta.',
  alternates: { canonical: `${BASE_URL}/agentes/escandallos-hosteleria/` },
}

const CHATGPT_URL = 'https://chatgpt.com/g/g-68f20f01efb081918fa661604da76721-asistente-de-escandallos-restaurante'

export default function AgenteEscandalllosPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-3 py-1 rounded-full">Hostelería</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Asistente de Escandallos para Restaurantes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en calcular el coste real de tus platos, detectar qué está destruyendo tu margen y ayudarte a tomar decisiones sobre tu carta.
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
            <p className="text-xs text-gray-400 mt-2">Gratis · Requiere cuenta ChatGPT · Sin datos de tarjeta</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>
          <div className="space-y-16">

            {/* El problema */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                El problema que resuelve
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  La mayoría de bares y restaurantes no saben con exactitud cuánto les cuesta
                  cada plato. Calculan el food cost a ojo, aplican un margen &ldquo;que parece razonable&rdquo;
                  y esperan que los números cuadren al final del mes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El resultado es siempre el mismo: una carta llena de platos con márgenes muy
                  distintos, algunos que generan dinero de verdad y otros que lo drenan, sin que
                  nadie sepa cuáles son cuáles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente existe para resolver ese problema de forma rápida y concreta.
                  Le describes un plato —ingredientes, cantidades, precio de venta—
                  y te da el escandallo completo: food cost por ingrediente, food cost total,
                  evaluación del precio y recomendaciones específicas.
                </p>
              </div>
            </section>

            {/* Qué hace */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Qué puede hacer por tu negocio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Escandallo completo plato a plato', desc: 'Coste real de cada ingrediente, cantidad, merma estimada y food cost total del plato.' },
                  { titulo: 'Evaluación de tu precio de venta', desc: 'Si el precio que tienes puesto cubre costes y deja margen real, o si estás perdiendo en cada servicio.' },
                  { titulo: 'Análisis de toda la carta', desc: 'Compara el margen de varios platos a la vez e identifica cuáles potenciar y cuáles revisar o retirar.' },
                  { titulo: 'Simulación de cambios', desc: '¿Qué pasa si cambio un ingrediente? ¿Si subo el precio 1,50€? ¿Si reduzco el gramaje un 10%? El agente calcula el impacto.' },
                  { titulo: 'Revisión del menú del día', desc: 'Coste real del menú completo (primero, segundo, postre y bebida) y precio mínimo para que sea rentable.' },
                  { titulo: 'Recomendaciones accionables', desc: 'No solo números. El agente te dice exactamente qué cambiar primero y por qué, en lenguaje directo.' },
                ].map((item) => (
                  <div key={item.titulo} className="border border-violet-100 bg-violet-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cómo usarlo */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Cómo sacarle partido desde el primer uso
              </h2>
              <ol className="space-y-6">
                {[
                  {
                    n: '01',
                    titulo: 'Empieza por tus 5 platos más vendidos',
                    desc: 'No intentes escandallar toda la carta de golpe. Empieza por los 5 platos que más vendes. Son los que más impacto tienen en tu margen, para bien o para mal.',
                  },
                  {
                    n: '02',
                    titulo: 'Dale ingredientes con cantidades',
                    desc: 'Cuanto más específico seas, mejor resultado. "Lomo de atún 180g, tomate 100g, aceite 15ml..." es mucho mejor que "filete de atún con tomate".',
                  },
                  {
                    n: '03',
                    titulo: 'Dile el precio al que lo vendes',
                    desc: 'El agente necesita saber tu precio de venta para calcular el food cost real y decirte si es rentable o no.',
                  },
                  {
                    n: '04',
                    titulo: 'Pídele que compare varios platos',
                    desc: 'Una vez has escandallado varios platos, pídele que los compare y te diga cuáles tienen mejor y peor margen. Eso es tu plan de acción.',
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

            {/* CTA principal */}
            <section className="bg-violet-600 rounded-2xl p-8 text-center">
              <p className="text-violet-200 text-sm font-bold uppercase tracking-widest mb-3">Agente disponible ahora</p>
              <h2 className="text-2xl font-black text-white mb-3">
                Empieza a escandallar tu carta hoy
              </h2>
              <p className="text-violet-200 mb-6 max-w-md mx-auto leading-relaxed">
                Gratis. En ChatGPT. Sin configurar nada. Solo abre el agente, descríbele un plato y empieza a ver los números reales de tu carta.
              </p>
              <a
                href={CHATGPT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-violet-700 font-black px-8 py-3.5 rounded-xl text-base hover:bg-violet-50 transition-colors"
              >
                Abrir en ChatGPT →
              </a>
              <p className="text-xs text-violet-300 mt-3">Requiere cuenta gratuita de ChatGPT</p>
            </section>

            {/* Recursos relacionados */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Complementa con estas herramientas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/herramientas/margen-carta/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Calculadora de Food Cost</p>
                  <p className="text-sm text-gray-500">Calcula rápido el food cost de toda tu carta de un vistazo.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Usar calculadora →</p>
                </Link>
                <Link href="/minicursos/carta-rentable/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Minicurso</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Cómo diseñar una carta rentable</p>
                  <p className="text-sm text-gray-500">Del escandallo al rediseño completo de carta en 3 lecciones.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/blog/caso-restaurante-rediseno-carta/" className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-amber-700 mb-1">Restaurante que rediseñó su carta</p>
                  <p className="text-sm text-gray-500">+9 puntos de margen bruto. Cómo lo hicieron y qué cambió.</p>
                  <p className="text-xs font-bold text-amber-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/food-cost-bar-restaurante-como-controlarlo/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">El food cost que destroza tu bar</p>
                  <p className="text-sm text-gray-500">Qué es, cómo calcularlo y qué número deberías tener.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Otros agentes</p>
                <ul className="space-y-2">
                  {[
                    { slug: 'diagnostico-rentabilidad', nombre: 'Agente Diagnóstico' },
                    { slug: 'calculadora-precios', nombre: 'Agente Precios' },
                    { slug: 'control-costes', nombre: 'Agente Costes' },
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
