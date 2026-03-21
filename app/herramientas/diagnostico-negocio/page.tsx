import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Diagnóstico de Negocio Gratuito | Foco Rentabilismo',
  description: 'Herramienta gratuita para diagnosticar la rentabilidad de tu negocio. Detecta fugas de margen, identifica los puntos críticos y obtén un plan de acción personalizado.',
  alternates: { canonical: `${BASE_URL}/herramientas/diagnostico-negocio/` },
}

export default function DiagnosticoNegocioPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera */}
      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-orange-600 uppercase tracking-widest hover:text-orange-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-orange-600 bg-white border border-orange-200 px-2 py-0.5 rounded">Herramienta</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Diagnóstico de Negocio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Detecta en 15 minutos qué está fallando en tu negocio y dónde puedes mejorar la rentabilidad.
            Sin rodeos, sin teoría. Solo lo que importa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div className="space-y-12">

            {/* Para qué sirve */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Para qué sirve
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La mayoría de dueños de negocio saben que algo no funciona. Los números no cuadran,
                el esfuerzo no se ve reflejado en el resultado o simplemente el negocio va tirando
                pero no despega. El problema es que no saben exactamente qué tocar primero.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El diagnóstico de negocio responde a esa pregunta. Analiza las áreas clave
                de tu negocio — precios, costes, ventas, procesos, equipo — y te dice en cuál
                de ellas está el problema principal y qué acción concreta puedes tomar esta semana.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No es un test genérico de 50 preguntas. Es un diagnóstico real con preguntas específicas
                para negocios físicos y pymes. Los resultados son concretos y accionables.
              </p>
            </section>

            {/* Qué detecta */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Qué detecta
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    area: 'Precios y margen',
                    desc: 'Si estás vendiendo por debajo de tu coste real o si tu margen bruto tiene potencial de mejora sin tocar el volumen.',
                  },
                  {
                    area: 'Estructura de costes',
                    desc: 'Qué costes fijos están por encima de lo razonable para tu tipo de negocio y cuáles son revisables de inmediato.',
                  },
                  {
                    area: 'Punto de equilibrio',
                    desc: 'Si el volumen de ventas que tienes ahora mismo es suficiente para que el negocio sea rentable o si hay un problema estructural.',
                  },
                  {
                    area: 'Ventas y ticket medio',
                    desc: 'Si hay oportunidades de vender más a los clientes que ya tienes sin necesidad de captar nuevos.',
                  },
                  {
                    area: 'Procesos y tiempo',
                    desc: 'Si hay tareas que consumen tiempo sin generar valor y que podrían eliminarse o delegarse.',
                  },
                  {
                    area: 'Dependencia del dueño',
                    desc: 'Si el negocio puede funcionar sin ti o si eres el cuello de botella que limita el crecimiento.',
                  },
                ].map((item) => (
                  <div key={item.area} className="border border-orange-100 bg-orange-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.area}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cómo funciona */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Cómo funciona
              </h2>
              <ol className="space-y-6">
                {[
                  {
                    n: '01',
                    titulo: 'Responde las preguntas sobre tu negocio',
                    desc: 'La herramienta te hace preguntas concretas sobre facturación, costes, márgenes y cómo funciona tu negocio. No hace falta que sean datos exactos — una estimación razonable es suficiente para el diagnóstico.',
                  },
                  {
                    n: '02',
                    titulo: 'Recibe el diagnóstico de tus áreas clave',
                    desc: 'En función de tus respuestas, el sistema identifica qué área tiene mayor potencial de mejora en tu caso concreto y cuál es el punto de dolor principal.',
                  },
                  {
                    n: '03',
                    titulo: 'Obtén el plan de acción',
                    desc: 'No solo el diagnóstico — también las 3 acciones concretas que puedes aplicar en los próximos 30 días para mejorar la rentabilidad. Ordenadas por impacto potencial.',
                  },
                ].map((paso) => (
                  <li key={paso.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-orange-200 leading-none">{paso.n}</span>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{paso.titulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Quién debería usarla */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Quién debería usarla
              </h2>
              <div className="space-y-3">
                {[
                  'Dueños de negocios físicos que sienten que el dinero no cuadra aunque las ventas van bien',
                  'Empresarios que llevan tiempo sin revisar sus márgenes y quieren saber por dónde empezar',
                  'Negocios que están creciendo pero no ven el beneficio crecer al mismo ritmo',
                  'Autónomos y pequeños empresarios que trabajan muchas horas pero no consiguen rentabilidad suficiente',
                  'Cualquier negocio que quiera tener una fotografía clara de su situación antes de tomar decisiones importantes',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-orange-500 font-black">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-orange-500 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-black text-white mb-3">
                Haz el diagnóstico ahora — es gratis
              </h2>
              <p className="text-orange-100 mb-6 leading-relaxed max-w-lg mx-auto">
                15 minutos. Sin registro. Sin pagar nada. Solo responde las preguntas
                y recibe el análisis de tu negocio.
              </p>
              <a
                href="https://rentabilismo.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors"
              >
                Ir a rentabilismo.online →
              </a>
              <p className="text-xs text-orange-200 mt-4">Gratis · Sin registro · Resultado inmediato</p>
            </section>

            {/* Otras herramientas */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Otras herramientas gratuitas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/herramientas/avatar-cliente/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-md">
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Define tu cliente ideal</p>
                  <p className="text-sm text-gray-500">Construye el perfil de a quién le vendes para venderle mejor.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver herramienta →</p>
                </Link>
                <Link href="/herramientas/analiza-tu-idea/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-md">
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Analiza tu idea de negocio</p>
                  <p className="text-sm text-gray-500">Valida si tu idea tiene sentido económico antes de invertir.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver herramienta →</p>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center h-64">
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
