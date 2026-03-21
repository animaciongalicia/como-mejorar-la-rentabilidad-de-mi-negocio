import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Analiza tu Idea de Negocio — Herramienta Gratuita | Foco Rentabilismo',
  description: 'Valida si tu idea de negocio tiene sentido económico antes de invertir tiempo y dinero. Herramienta gratuita para analizar viabilidad, márgenes y riesgos.',
  alternates: { canonical: `${BASE_URL}/herramientas/analiza-tu-idea/` },
}

export default function AnalizaTuIdeaPage() {
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
            Analiza tu Idea de Negocio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Antes de invertir tiempo, dinero y energía: valida si tu idea tiene sentido económico.
            Sin ilusiones, sin teoría. Solo los números que importan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div className="space-y-12">

            {/* El problema */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                El problema que evita
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La mayoría de negocios que cierran en los primeros dos años no fracasan por falta de trabajo
                o de ganas. Fracasan porque la idea tenía un problema económico de base que nadie detectó
                antes de empezar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El margen era demasiado bajo para los costes del sector. El punto de equilibrio requería
                un volumen de ventas imposible de alcanzar al principio. El cliente objetivo no tenía
                capacidad de pago suficiente. O simplemente había demasiada competencia con precios
                que hacían la idea inviable sin diferenciación clara.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Todos esos problemas se pueden detectar antes de poner un euro. Eso es lo que hace
                esta herramienta.
              </p>
            </section>

            {/* Qué analiza */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Qué analiza
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    titulo: 'Viabilidad económica básica',
                    desc: 'Si el precio al que puedes vender cubre los costes reales del negocio y deja un margen suficiente para que sea sostenible.',
                  },
                  {
                    titulo: 'Punto de equilibrio estimado',
                    desc: 'Cuánto necesitarías vender cada mes para que el negocio no pierda dinero. Si ese número es alcanzable con el mercado que tienes.',
                  },
                  {
                    titulo: 'Margen bruto estimado',
                    desc: 'Qué porcentaje de cada euro vendido quedaría después de los costes directos. Y si ese margen es suficiente para el tipo de negocio.',
                  },
                  {
                    titulo: 'Riesgos principales',
                    desc: 'Los tres o cuatro factores que más podrían hacer fracasar la idea. No para desanimarte, sino para planificarlos de antemano.',
                  },
                  {
                    titulo: 'Diferenciación necesaria',
                    desc: 'Si la idea necesita diferenciación para ser viable o si puede competir directamente. Y qué tipo de diferenciación tendría más sentido.',
                  },
                  {
                    titulo: 'Siguiente paso recomendado',
                    desc: 'Qué debería hacer primero para validar la idea en el mundo real antes de comprometer más recursos. El mínimo viable para probar.',
                  },
                ].map((item) => (
                  <div key={item.titulo} className="border border-orange-100 bg-orange-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
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
                    titulo: 'Describes la idea con detalle',
                    desc: 'Qué vas a vender, a quién, a qué precio aproximado y cuál es la estructura de costes que imaginas. No hace falta que sea exacto — con una estimación razonable es suficiente.',
                  },
                  {
                    n: '02',
                    titulo: 'La herramienta calcula los números clave',
                    desc: 'Margen bruto estimado, punto de equilibrio mensual, ratio de rentabilidad esperado y comparativa con referencias del sector si aplica.',
                  },
                  {
                    n: '03',
                    titulo: 'Recibes el análisis de viabilidad',
                    desc: 'Un informe claro que te dice si la idea tiene sentido económico, cuáles son los puntos críticos y qué condiciones deben darse para que funcione.',
                  },
                  {
                    n: '04',
                    titulo: 'Plan de validación paso a paso',
                    desc: 'Las acciones concretas para probar la idea con el mínimo coste posible antes de comprometer inversión significativa.',
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

            {/* Para quién */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Para quién es
              </h2>
              <div className="space-y-3">
                {[
                  'Emprendedores que tienen una idea y quieren saber si tiene sentido económico antes de lanzarse',
                  'Dueños de negocios existentes que quieren añadir una nueva línea de negocio o servicio',
                  'Personas que están pensando en dejar su trabajo por cuenta ajena para montar algo propio',
                  'Inversores o socios que quieren evaluar si una idea tiene fundamento económico real',
                  'Negocios que quieren pivotar o cambiar de modelo y necesitan validar la nueva dirección',
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
                Analiza tu idea ahora — gratis
              </h2>
              <p className="text-orange-100 mb-6 leading-relaxed max-w-lg mx-auto">
                20 minutos. Sin registro. Sin coste. Terminas con un análisis de viabilidad
                real y un plan de validación concreto.
              </p>
              <a
                href="https://idea-rentabilismo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors"
              >
                Ir a idea-rentabilismo.com →
              </a>
              <p className="text-xs text-orange-200 mt-4">Gratis · Sin registro · Resultado inmediato</p>
            </section>

            {/* Otras herramientas */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Otras herramientas gratuitas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/herramientas/diagnostico-negocio/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-md">
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Diagnóstico de negocio</p>
                  <p className="text-sm text-gray-500">Detecta qué está fallando y por dónde empezar a mejorar.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver herramienta →</p>
                </Link>
                <Link href="/herramientas/avatar-cliente/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-md">
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Define tu cliente ideal</p>
                  <p className="text-sm text-gray-500">Construye el perfil de a quién le vendes para venderle mejor.</p>
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
