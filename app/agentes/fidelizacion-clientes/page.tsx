import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente de Fidelización de Clientes — IA para que los clientes vuelvan y gasten más | Foco Rentabilismo',
  description: 'Agente de IA especializado en retención de clientes. Diseña tu plan de fidelización, reactiva clientes inactivos y mejora el ticket medio sin necesidad de captar nuevos clientes.',
  alternates: { canonical: `${BASE_URL}/agentes/fidelizacion-clientes/` },
}

const CHATGPT_URL = '' // ← añade aquí el link de ChatGPT cuando lo tengas

export default function AgenteFidelizacionPage() {
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
            Agente de Fidelización de Clientes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en retención y repetición de compra. Diseña tu plan de fidelización, reactiva clientes que dejaron de venir y mejora el ticket medio sin tener que captar nuevos clientes constantemente.
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
                  La mayoría de negocios físicos ponen toda la energía en conseguir clientes nuevos y casi ninguna en que los que ya tienen vuelvan. Es el error más caro que comete un negocio local: captar cuesta entre cinco y siete veces más que retener.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tienes clientes que vinieron una vez y no han vuelto. Clientes que compran pero podrían comprar más. Clientes fieles que no saben que tienes otros productos o servicios que les encantarían. Todo ese potencial existe ya en tu base de clientes — y no lo estás aprovechando.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente trabaja con la realidad de los negocios físicos: sin CRM sofisticado, sin grandes presupuestos de marketing, sin tecnología que requiera un especialista. Sistemas simples que funcionan en una peluquería, un taller, una tienda de barrio o una clínica.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Qué puede hacer por tu negocio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Plan de fidelización a medida', desc: 'Un sistema de retención diseñado para tu tipo de negocio, tu margen y tus clientes. Sin puntos inútiles ni apps que nadie descarga. Lo que funciona de verdad en negocios físicos.' },
                  { titulo: 'Seguimiento post-compra', desc: 'Qué hacer después de cada venta para que el cliente recuerde que existes y tenga un motivo concreto para volver. Mensajes, momentos y frecuencia según el tipo de negocio.' },
                  { titulo: 'Reactivación de clientes inactivos', desc: 'Cómo identificar a los que llevan tiempo sin venir y qué decirles para que vuelvan. Un cliente recuperado no es lo mismo que un cliente nuevo: ya te conoce, ya confía en ti.' },
                  { titulo: 'Estrategias para mejorar el ticket medio', desc: 'Cómo vender más a cada cliente sin que parezca presión. Complementos naturales, servicios adicionales, momentos oportunos para proponer más sin incomodar.' },
                  { titulo: 'Programas de repetición sin complejidad', desc: 'Sistemas de bono, suscripción o tarjeta de visitas que funcionan en negocios pequeños sin software especial. La clave está en el diseño, no en la tecnología.' },
                  { titulo: 'Análisis de clientes más rentables', desc: 'Quiénes son los clientes que más aportan a tu negocio, qué tienen en común y cómo atraer más perfiles como ellos. No todos los clientes valen lo mismo.' },
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
                  'Peluquerías, centros de estética y salud donde la repetición de visitas es la base del negocio',
                  'Talleres mecánicos y servicios donde el cliente vuelve por mantenimiento periódico',
                  'Tiendas locales que compiten con el ecommerce y necesitan que la experiencia justifique volver',
                  'Restaurantes y negocios de hostelería donde el cliente habitual representa más del 60% de la facturación',
                  'Cualquier negocio que siente que capta clientes pero no los retiene como debería',
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
                  { n: '01', titulo: 'Describe tu base de clientes actual', desc: 'Cuántos clientes tienes aproximadamente, con qué frecuencia vienen, cuántos llevan tiempo sin aparecer y si tienes algún sistema de contacto con ellos (aunque sea básico). No hace falta que tengas datos exactos.' },
                  { n: '02', titulo: 'Dile cuál es el síntoma que más te preocupa', desc: '¿Los clientes vienen una vez y no vuelven? ¿Tienes clientes fieles pero su ticket es siempre bajo? ¿Sabes que hay clientes inactivos pero no sabes cómo reactivarlos sin parecer pesado? Cada síntoma tiene una solución diferente.' },
                  { n: '03', titulo: 'Pide el plan o la acción concreta', desc: 'El agente puede diseñar un plan completo de fidelización, crear el guion para reactivar clientes inactivos, proponer un sistema de bono o suscripción para tu tipo de negocio, o calcular cuánto mejoraría tu facturación si mejoraras la tasa de repetición un 10%.' },
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
                <Link href="/agentes/guion-ventas/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agente de Ventas</p>
                  <p className="text-sm text-gray-500">Cuando ya tienes el cliente delante, este agente te ayuda a vender más en cada interacción sin presionar.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/herramientas/test-diagnostico/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Test de diagnóstico de rentabilidad</p>
                  <p className="text-sm text-gray-500">Evalúa si la fidelización es realmente el área más urgente de tu negocio o hay otro problema más prioritario.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Hacer test →</p>
                </Link>
                <Link href="/agentes/diagnostico-rentabilidad/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Agente Diagnóstico</p>
                  <p className="text-sm text-gray-500">Si no tienes claro cuál es el problema principal, el diagnóstico te orienta antes de empezar a trabajar la fidelización.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/minicursos/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Formación</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Minicursos de rentabilidad</p>
                  <p className="text-sm text-gray-500">Entiende primero los números de tu negocio para saber qué impacto tiene realmente mejorar la retención.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver minicursos →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">¿Es este tu problema?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Test de diagnóstico</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Antes de trabajar la fidelización, confirma que la retención es el área donde más puedes mejorar tu rentabilidad.</p>
                <Link href="/herramientas/test-diagnostico/"
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
