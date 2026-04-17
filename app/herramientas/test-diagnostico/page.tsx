import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import TestDiagnosticoRentabilidad from '@/components/herramientas/TestDiagnosticoRentabilidad'

export const metadata: Metadata = {
  title: 'Test de Diagnóstico de Rentabilidad — 10 preguntas para saber dónde estás | Foco Rentabilismo',
  description: 'Responde 10 preguntas sobre tu negocio y descubre exactamente dónde se están escapando el margen y el beneficio. Diagnóstico personalizado con acciones concretas.',
  alternates: { canonical: `${BASE_URL}/herramientas/test-diagnostico/` },
}

export default function TestDiagnosticoPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-orange-600 uppercase tracking-widest hover:text-orange-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-orange-600 bg-white border border-orange-200 px-2 py-0.5 rounded">Test</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuito</span>
            <span className="text-xs font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded">5 minutos</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Test de Diagnóstico de Rentabilidad
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            10 preguntas para identificar exactamente en qué área está fallando la rentabilidad de tu negocio. Sin registrarte. Con recomendaciones concretas al final.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            <TestDiagnosticoRentabilidad />

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-orange-500 pb-2 inline-block mb-6">
                Para qué sirve este test
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  La mayoría de negocios que no ganan lo que deberían tienen el mismo problema: saben que algo no funciona, pero no saben exactamente dónde está el agujero.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ¿Es el precio demasiado bajo? ¿Los costes están fuera de control? ¿Hay productos que destruyen margen sin saberlo? ¿O simplemente no hay visibilidad suficiente para tomar decisiones?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este test evalúa cuatro áreas clave de rentabilidad: margen y productos, fijación de precios, control de costes y gestión financiera. Al terminar, identifica cuál es tu punto más débil y te dice exactamente por dónde empezar.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 border-b-4 border-orange-500 pb-2 inline-block mb-6">
                Qué evalúa
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    area: 'Margen y rentabilidad',
                    desc: 'Si sabes cuánto te deja realmente cada venta, qué productos son los más rentables y si tienes clientes que trabajan contra tu margen.',
                  },
                  {
                    area: 'Fijación de precios',
                    desc: 'Si tus precios cubren los costes reales, cuándo los revisaste por última vez y si tienes miedo a subir o defensa ante la objeción de precio.',
                  },
                  {
                    area: 'Control de costes',
                    desc: 'Si conoces tu punto de equilibrio, tienes los costes fijos controlados y sabes qué gastos podrías reducir sin dañar el negocio.',
                  },
                  {
                    area: 'Gestión financiera',
                    desc: 'Si el dinero en cuenta refleja las ventas, si tomas decisiones con datos o por intuición y si tienes indicadores que te avisan antes de que los problemas se agranden.',
                  },
                ].map((item) => (
                  <div key={item.area} className="border border-orange-100 bg-orange-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.area}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Recursos relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/agentes/diagnostico-rentabilidad/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Agente Diagnóstico de Rentabilidad</p>
                  <p className="text-sm text-gray-500">Análisis profundo con tus números reales. El agente hace las preguntas correctas y detecta exactamente dónde se pierde el dinero.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/agentes/calculadora-precios/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Agente de Precios</p>
                  <p className="text-sm text-gray-500">Si el test detecta problemas en precios, este agente calcula el precio mínimo rentable con tus costes reales.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/agentes/control-costes/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Agente de Control de Costes</p>
                  <p className="text-sm text-gray-500">Audita tus costes fijos y variables para encontrar qué gastos puedes reducir o eliminar.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Ver agente →</p>
                </Link>
                <Link href="/herramientas/analizador-productos/" className="group block border border-gray-200 hover:border-gray-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Herramienta</p>
                  <p className="font-black text-gray-900 group-hover:text-gray-700 mb-1">Analizador de productos 80/20</p>
                  <p className="text-sm text-gray-500">Identifica qué productos generan el 80% de tus ventas y cuáles solo consumen recursos.</p>
                  <p className="text-xs font-bold text-gray-500 mt-3 group-hover:underline">Usar herramienta →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-3">Después del test</p>
                <p className="text-sm font-black text-gray-900 mb-2">Diagnóstico profundo con IA</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">El test identifica el área problema. El Agente Diagnóstico analiza tus números en detalle y te dice exactamente qué hacer.</p>
                <Link
                  href="/agentes/diagnostico-rentabilidad/"
                  className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
                >
                  Ver Agente Diagnóstico →
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
