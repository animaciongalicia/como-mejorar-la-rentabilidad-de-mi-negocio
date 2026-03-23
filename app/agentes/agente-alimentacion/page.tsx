import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Agente de Margen para Negocios de Alimentación — IA para Fruterías y Alimentación Fresca | Foco Rentabilismo',
  description: 'Agente de IA especializado en negocios de alimentación fresca. Analiza tu merma producto a producto, calcula el margen real de tu surtido y construye un plan para reducir el desperdicio y mejorar el margen.',
  alternates: { canonical: `${BASE_URL}/agentes/agente-alimentacion/` },
}

const CHATGPT_URL = 'https://chatgpt.com/g/g-agente-alimentacion-focorentabilismo'

export default function AgenteAlimentacionPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/agentes/" className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors">
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-3 py-1 rounded-full">Alimentación · Fruterías · Carnicerías</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Disponible ahora</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente de Margen para Alimentación
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            IA especializada en negocios de alimentación fresca. Analiza tu merma, calcula el margen real de cada producto y te ayuda a construir un plan para recuperar el margen que se está perdiendo.
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
                  En los negocios de alimentación fresca, el mayor destructor de margen no está en los precios ni en la competencia. Está en lo que se tira cada semana sin que nadie lo haya contado.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El margen teórico —precio de venta menos precio de compra— puede parecer razonable. El margen real, una vez que incluyes la merma, puede ser la mitad o menos. Y la mayoría de negocios de alimentación nunca ha calculado esa diferencia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este agente hace el análisis que resuelve ese problema: cuánto pierdes en merma por producto, qué margen real obtiene cada parte de tu surtido, y cuáles son las tres acciones concretas que más impacto tienen en tu negocio específico.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
                Qué puede hacer por tu negocio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { titulo: 'Margen real por producto', desc: 'Calcula el margen real de cada producto de tu surtido incluyendo la merma estimada. Descubre cuáles son rentables y cuáles generan pérdidas.' },
                  { titulo: 'Diagnóstico de merma por categoría', desc: 'Qué categorías concentran más merma en tu tipo de negocio y cuáles tienen más impacto en el margen total.' },
                  { titulo: 'Sistema de pedidos ajustado', desc: 'Cómo estructurar los pedidos por producto y día de la semana para minimizar el stock que supera la vida útil.' },
                  { titulo: 'Política de rotación FIFO', desc: 'Cómo implementar la rotación correcta del producto para que el más antiguo siempre llegue primero al cliente.' },
                  { titulo: 'Precios de salida progresivos', desc: 'Qué niveles de descuento aplicar y cuándo para maximizar el ingreso del producto próximo a fecha, sin dañar la imagen del negocio.' },
                  { titulo: 'Plan de mejora en 60 días', desc: 'Las tres acciones más impactantes para tu negocio específico, en el orden correcto, con objetivos concretos de reducción de merma.' },
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
                  'Fruterías y verdulerías que tienen margen teórico razonable pero beneficio real escaso',
                  'Carnicerías y pescaderías donde la merma por corte y deterioro es alta',
                  'Charcuterías y queserías con producto de rotación lenta y vida útil corta',
                  'Supermercados pequeños y tiendas de alimentación con sección de frescos',
                  'Cualquier negocio de alimentación donde la diferencia entre margen teórico y margen real es difícil de explicar',
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
                  { n: '01', titulo: 'Ten claros tus datos básicos', desc: 'Qué productos vendes, a qué precio compras y a qué precio vendes los principales. Si tienes algún dato de merma (aunque sea aproximado), mejor. Si no, el agente te ayuda a estimarla.' },
                  { n: '02', titulo: 'Describe tu situación', desc: 'Qué tipo de negocio tienes, qué productos son los más importantes en volumen y cuál es tu sensación sobre dónde se va el margen. No necesitas tener todos los números perfectos.' },
                  { n: '03', titulo: 'Pide el análisis o el plan', desc: 'El agente puede hacer el análisis de margen real de tus productos principales, ayudarte a estimar la merma si no la tienes medida o construir contigo el plan de mejora para los próximos 60 días.' },
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
                <Link href="/herramientas/margen-alimentacion/" className="group block border border-gray-200 hover:border-emerald-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-emerald-700 mb-1">Calculadora de margen real</p>
                  <p className="text-sm text-gray-500">Calcula el margen de cada producto incluyendo la merma estimada.</p>
                  <p className="text-xs font-bold text-emerald-600 mt-3 group-hover:underline">Usar calculadora →</p>
                </Link>
                <Link href="/blog/caso-fruteria-margen-real-cuando-controlas-la-merma/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">La frutería que contó lo que tiraba</p>
                  <p className="text-sm text-gray-500">Cómo medir la merma descubrió 1.400€ al mes de beneficio sin buscar más clientes.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/alimentacion-rentable-leccion-1-el-margen-que-desaparece-sin-que-nadie-lo-vea/" className="group block border border-gray-200 hover:border-emerald-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Minicurso gratuito</p>
                  <p className="font-black text-gray-900 group-hover:text-emerald-700 mb-1">Alimentación rentable · 3 lecciones</p>
                  <p className="text-sm text-gray-500">Cómo medir, calcular y reducir la merma en alimentación fresca.</p>
                  <p className="text-xs font-bold text-emerald-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/blog/merma-alimentacion-como-controlarla/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Merma en alimentación: cómo controlarla</p>
                  <p className="text-sm text-gray-500">El coste que no aparece en ninguna factura pero destruye tu margen.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-3">Empieza con los números</p>
                <p className="text-sm font-black text-gray-900 mb-2">Calculadora de margen real</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Antes de usar el agente, calcula el margen real de tus productos principales con la merma incluida.</p>
                <Link
                  href="/herramientas/margen-alimentacion/"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
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
