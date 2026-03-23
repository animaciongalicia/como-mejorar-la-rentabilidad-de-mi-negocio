import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente de Precios para Centros de Bienestar — IA para Fisioterapia y Estética | Foco Rentabilismo',
  description: 'Agente de IA especializado en centros de salud y bienestar. Calcula el precio mínimo rentable de cada servicio, detecta qué está destruyendo tu margen y prepara la comunicación de subida a tus clientes.',
  alternates: { canonical: `${BASE_URL}/agentes/agente-bienestar/` },
}

const CHATGPT_URL = 'https://chatgpt.com/g/g-agente-bienestar-focorentabilismo'

export default function AgenteBienestarPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-3 py-1 rounded-full">Salud · Bienestar · Estética</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente de Precios para Centros de Bienestar
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en calcular el precio mínimo rentable de tus servicios, identificar qué está drenando tu margen y ayudarte a comunicar una subida de precios sin perder clientes.
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

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                El problema que resuelve
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  En los centros de salud y bienestar, el precio casi nunca viene de los costes reales. Viene de lo que cobran los centros de la zona. Y los centros de la zona tampoco lo han calculado: lo han copiado de los de al lado.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El resultado es un sector entero con tarifas que llevan años sin moverse mientras los costes —alquiler, nóminas, seguros, material— no paran de subir. La agenda se llena. El margen desaparece.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente hace el cálculo que muchos centros nunca han hecho: cuánto cuesta realmente cada sesión, cuánto deberías cobrar para tener el margen que necesitas, y cómo comunicar la subida sin que tus clientes se vayan.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Qué puede hacer por tu centro
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Precio mínimo por servicio', desc: 'Con tus costes fijos reales, calcula cuánto necesitas cobrar por cada servicio para que sea rentable, no para cubrir costes a secas.' },
                  { titulo: 'Coste por hora de sala', desc: 'La unidad de medida que más centros ignoran. Cuánto te cuesta tener una sala abierta cada hora y cómo se reparte entre tus servicios.' },
                  { titulo: 'Diagnóstico de servicios deficitarios', desc: 'Qué servicios de tu catálogo están por debajo del precio mínimo y en cuánto. Los que necesitan ajuste urgente y los que solo necesitan revisión.' },
                  { titulo: 'Simulación de subida de precios', desc: 'Qué pasa con tu facturación y tu margen si subes un servicio determinado. Cuántos clientes puedes perder y seguir ganando más.' },
                  { titulo: 'Comunicación de la subida', desc: 'El texto exacto que puedes usar para comunicar el cambio de tarifas a tus clientes actuales. Directo, profesional y sin sonar a disculpa.' },
                  { titulo: 'Mix de servicios óptimo', desc: 'Qué servicios priorizar en agenda cuando hay demanda, cuáles reducir y cómo organizar los huecos para maximizar el ingreso por hora de sala.' },
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
                  'Centros de fisioterapia y osteopatía con tarifas sin revisar en más de dos años',
                  'Clínicas de estética que tienen los servicios más largos como los más baratos',
                  'Gimnasios y centros de pilates que no saben si las tarifas de cuota cubren sus costes',
                  'Spas y centros de masajes donde el precio se fijó "mirando a la competencia"',
                  'Cualquier centro de salud o bienestar donde la agenda está llena pero el beneficio no aparece',
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
                Cómo usarlo
              </h2>
              <div className="space-y-4">
                {[
                  { n: '01', titulo: 'Ten tus números a mano', desc: 'Alquiler mensual, nóminas, suministros, seguros y material. También cuántas horas está operativo el centro al mes. Cuanto más precisos sean los datos, más útil será el análisis.' },
                  { n: '02', titulo: 'Comparte tus servicios y tarifas actuales', desc: 'El agente necesita saber qué ofreces, cuánto cobras por cada servicio, cuánto dura y qué material directo consume. Con eso hace el análisis.' },
                  { n: '03', titulo: 'Pide lo que necesites', desc: 'El análisis de rentabilidad, la simulación de subida, el texto para comunicar el cambio a clientes. El agente está especializado en el sector y entiende la casuística específica de los centros de bienestar.' },
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
              <div className="mt-8">
                <a
                  href={CHATGPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-black px-8 py-3.5 rounded-xl text-base transition-colors"
                >
                  Abrir agente en ChatGPT →
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Recursos relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/herramientas/rentabilidad-sesiones/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Calculadora de rentabilidad por sesión</p>
                  <p className="text-sm text-gray-500">Calcula el precio mínimo rentable de cada servicio con tus datos reales.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Usar calculadora →</p>
                </Link>
                <Link href="/blog/caso-centro-bienestar-agenda-llena-margen-vacio/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agenda llena, margen vacío</p>
                  <p className="text-sm text-gray-500">Cómo un centro de bienestar triplicó su beneficio con una revisión de tarifas.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/bienestar-rentable-leccion-1-el-precio-que-no-cubre-tus-costes/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Minicurso gratuito</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Bienestar rentable · 3 lecciones</p>
                  <p className="text-sm text-gray-500">Del diagnóstico del problema a la subida de precios bien ejecutada.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/blog/cuanto-cobrar-sesion-clinica-centro-bienestar/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Cuánto cobrar por sesión en tu clínica</p>
                  <p className="text-sm text-gray-500">El cálculo del precio correcto desde los costes reales.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-3">Calcula primero</p>
                <p className="text-sm font-black text-gray-900 mb-2">Calculadora de sesiones</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Antes de usar el agente, calcula el precio mínimo de cada servicio con la calculadora interactiva.</p>
                <Link
                  href="/herramientas/rentabilidad-sesiones/"
                  className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
                >
                  Ir a la calculadora →
                </Link>
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
