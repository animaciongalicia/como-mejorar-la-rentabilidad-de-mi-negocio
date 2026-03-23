import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import CalculadoraRentabilidadTaller from '@/components/herramientas/CalculadoraRentabilidadTaller'

export const metadata: Metadata = {
  title: 'Calculadora de Rentabilidad por Trabajo — Taller Mecánico | Foco Rentabilismo',
  description: 'Calcula el margen real que deja cada tipo de intervención en tu taller mecánico. Descubre qué trabajos son rentables, cuáles revisar y cómo mejorar tu mix para ganar más.',
  alternates: { canonical: `${BASE_URL}/herramientas/rentabilidad-taller/` },
}

export default function RentabilidadTallerPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-orange-600 uppercase tracking-widest hover:text-orange-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-orange-700 bg-white border border-orange-200 px-2 py-0.5 rounded">Talleres · Mecánica</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Calculadora de rentabilidad por trabajo
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            No todos los trabajos valen lo mismo. Introduce precio, recambios y horas de cada tipo de intervención
            y descubre qué margen real deja cada uno en tu taller.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            <section>
              <CalculadoraRentabilidadTaller />
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Cómo interpretar los resultados
              </h2>
              <div className="space-y-4">
                {[
                  {
                    tag: '⭐ Excelente — más de 40€/hora de margen',
                    color: 'border-green-200 bg-green-50',
                    tagColor: 'text-green-700',
                    desc: 'Estos trabajos son el motor económico de tu taller. Priorízalos en la agenda cuando estés a plena capacidad y asegúrate de tener stock de los recambios más habituales.',
                  },
                  {
                    tag: '✓ Rentable — entre 25 y 40€/hora',
                    color: 'border-blue-200 bg-blue-50',
                    tagColor: 'text-blue-700',
                    desc: 'Trabajan bien. Pueden mejorar si reduces el tiempo de ejecución con práctica o si ajustas el margen en recambios.',
                  },
                  {
                    tag: '⚠ Revisar — entre 12 y 25€/hora',
                    color: 'border-amber-200 bg-amber-50',
                    tagColor: 'text-amber-700',
                    desc: 'El margen es bajo una vez cubres el coste de mano de obra directa. Revisa si el precio al cliente refleja el trabajo real o si hay margen para ajustarlo.',
                  },
                  {
                    tag: '✗ Bajo margen — menos de 12€/hora',
                    color: 'border-red-200 bg-red-50',
                    tagColor: 'text-red-700',
                    desc: 'Estos trabajos casi no dejan nada después de pagar a tu mecánico. Si el taller está lleno, ocupan un hueco que podría ir a algo tres veces más rentable. Plantéate subir el precio o derivarlos.',
                  },
                ].map((item) => (
                  <div key={item.tag} className={`border rounded-xl p-5 ${item.color}`}>
                    <p className={`font-black text-sm mb-2 ${item.tagColor}`}>{item.tag}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Las tres palancas de rentabilidad en un taller
              </h2>
              <div className="space-y-5">
                {[
                  {
                    n: '01',
                    titulo: 'Tarifa hora',
                    desc: 'La tarifa de mano de obra es la palanca más directa. Muchos talleres llevan años sin subirla mientras los costes no paran de crecer. Revísala al menos una vez al año.',
                  },
                  {
                    n: '02',
                    titulo: 'Eficiencia productiva',
                    desc: 'El porcentaje de horas disponibles que se convierten en horas facturadas. Reducir tiempos muertos, mejorar la organización de la agenda y tener los recambios a mano puede subir este ratio sin gastar un euro.',
                  },
                  {
                    n: '03',
                    titulo: 'Mix de trabajos',
                    desc: 'Qué tipo de trabajos aceptas y en qué proporción. Cuando el taller está lleno, cada hueco que das a un trabajo de bajo margen es un hueco que no va a uno de alto margen.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-orange-200 leading-none">{item.n}</span>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{item.titulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Sigue aprendiendo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/blog/caso-taller-mecanico-menos-coches-mas-dinero/" className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-amber-700 mb-1">El taller que ganaba más con menos coches</p>
                  <p className="text-sm text-gray-500">Cómo un taller subió el margen un 40% cambiando qué trabajos aceptaba.</p>
                  <p className="text-xs font-bold text-amber-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/taller-mecanico-como-ganar-mas-sin-mas-trabajo/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Guía completa</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Cómo ganar más sin meter más coches</p>
                  <p className="text-sm text-gray-500">Tarifa hora, horas productivas, mix de trabajos y presupuestos. Todo el análisis.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/agentes/calculadora-precios/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agente de Precios</p>
                  <p className="text-sm text-gray-500">Calcula tu tarifa hora mínima y prepara una subida de precios con argumento.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Usar agente →</p>
                </Link>
                <Link href="/blog/presupuesto-taller-mecanico-como-no-perder-dinero/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Cómo hacer presupuestos sin perder dinero</p>
                  <p className="text-sm text-gray-500">Los errores más habituales al presupuestar en un taller y cómo evitarlos.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-3">¿Tu tarifa es correcta?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Agente de Precios</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Calcula cuánto deberías cobrar por hora para que el taller sea rentable y cómo comunicar una subida.</p>
                <Link
                  href="/agentes/calculadora-precios/"
                  className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
                >
                  Usar agente gratis →
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
