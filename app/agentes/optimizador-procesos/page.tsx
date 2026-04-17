import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente Optimizador de Procesos — IA para dejar de ser el cuello de botella | Foco Rentabilismo',
  description: 'Agente de IA especializado en procesos operativos. Mapea cómo funciona tu negocio, detecta dónde se pierde tiempo y dinero y te ayuda a delegar sin que las cosas se rompan.',
  alternates: { canonical: `${BASE_URL}/agentes/optimizador-procesos/` },
}

const CHATGPT_URL = '' // ← añade aquí el link de ChatGPT cuando lo tengas

export default function AgenteProcesosPage() {
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
            Agente Optimizador de Procesos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en operativa de negocios físicos. Mapea cómo funciona tu negocio, detecta dónde se pierde tiempo y dinero, y te ayuda a construir un sistema que funcione sin que tengas que estar en todo.
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
                  El dueño del negocio es el mayor cuello de botella de su propio negocio. Todo pasa por ti. Cada decisión, cada problema, cada cliente que pregunta algo. Y mientras eso ocurra, el negocio no puede crecer — porque su límite eres tú.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  No es un problema de esfuerzo. Es un problema de sistema. La mayoría de negocios físicos no tienen procesos definidos: cada día se improvisa, cada empleado hace las cosas a su manera y cuando algo falla hay que apagar el fuego en vez de haber evitado que se prendiese.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente trabaja contigo para mapear cómo funciona tu negocio realmente, identificar dónde se pierde tiempo y dinero, y construir los procesos mínimos que permiten que las cosas funcionen sin que tengas que supervisar cada paso.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">Qué puede hacer por tu negocio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Mapa de procesos operativos', desc: 'Describe cómo funciona un día normal en tu negocio y el agente lo convierte en un mapa claro: qué tareas hay, quién las hace, en qué orden y dónde están los cuellos de botella.' },
                  { titulo: 'Coste real del tiempo del dueño', desc: 'Calcula cuánto vale tu hora real y qué actividades estás haciendo tú que podrías delegar o automatizar. La mayoría de dueños descubren que están pagando caro por tareas de bajo valor.' },
                  { titulo: 'Identificación de tareas a eliminar', desc: 'Qué se hace en tu negocio por inercia, sin que nadie recuerde por qué. Procesos que duplican trabajo, pasos que no aportan valor, reuniones que no llevan a ningún lado.' },
                  { titulo: 'Checklists operativos', desc: 'Para apertura, cierre, atención al cliente, gestión de pedidos... Procesos simples que cualquier empleado pueda seguir sin necesidad de preguntarte a ti cada vez.' },
                  { titulo: 'Plan de delegación por fases', desc: 'Qué delegar primero, a quién y con qué sistema de control mínimo para que no tengas que estar encima. Delegar sin sistema crea más caos que el que resuelve.' },
                  { titulo: 'Análisis de atención al cliente', desc: 'Dónde se producen las quejas y los errores repetidos. Qué parte del proceso falla siempre y por qué. Y cómo diseñar la recuperación para que un problema no destruya una relación.' },
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
                  'Negocios donde si el dueño no está, las cosas se paran o salen mal',
                  'Negocios con empleados que trabajan cada uno a su manera sin estándar común',
                  'Dueños que sienten que trabajan muchas horas pero no saben bien en qué se les va el tiempo',
                  'Negocios que quieren contratar o delegar pero no saben por dónde empezar',
                  'Cualquier negocio físico que ha crecido de forma orgánica y nunca ha documentado cómo funciona',
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
                  { n: '01', titulo: 'Describe un proceso concreto', desc: 'Empieza por el proceso que más te preocupa o donde más tiempo pierdes. Puede ser la apertura del local, cómo gestionas los pedidos, cómo atiendes las quejas o cómo formas a los empleados nuevos. Cuanto más específico, mejor.' },
                  { n: '02', titulo: 'Indica quién hace qué ahora mismo', desc: 'Qué haces tú personalmente, qué hacen tus empleados y dónde están los puntos donde las cosas se rompen o donde siempre tienes que intervenir. El agente necesita el punto de partida real, no el ideal.' },
                  { n: '03', titulo: 'Pide el mapa, el checklist o el plan', desc: 'El agente puede crear el mapa completo del proceso, redactar el checklist operativo, identificar qué delegas primero o calcular cuánto te cuesta hacerlo tú en vez de que lo haga otra persona.' },
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
                <Link href="/herramientas/test-diagnostico/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Test de diagnóstico de rentabilidad</p>
                  <p className="text-sm text-gray-500">Descubre en qué área está el problema principal de tu negocio antes de entrar en el detalle de procesos.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Hacer test →</p>
                </Link>
                <Link href="/agentes/control-costes/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agente de Control de Costes</p>
                  <p className="text-sm text-gray-500">Cuando los procesos están identificados, este agente calcula el impacto económico real de cada mejora operativa.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/agentes/diagnostico-rentabilidad/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Agente relacionado</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Agente Diagnóstico</p>
                  <p className="text-sm text-gray-500">Si no sabes si el problema es de procesos, precios o costes, empieza por aquí para orientar el análisis.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/minicursos/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Formación</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Minicursos de rentabilidad</p>
                  <p className="text-sm text-gray-500">Formación práctica para entender los números de tu negocio y tomar decisiones con criterio.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver minicursos →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Antes de optimizar</p>
                <p className="text-sm font-black text-gray-900 mb-2">Diagnóstico de rentabilidad</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Asegúrate de que el problema principal está en los procesos antes de rediseñarlos. A veces el cuello de botella es otro.</p>
                <Link href="/herramientas/test-diagnostico/"
                  className="block text-center bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors">
                  Hacer test →
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
