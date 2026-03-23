import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import CalculadoraMargenAlimentacion from '@/components/herramientas/CalculadoraMargenAlimentacion'

export const metadata: Metadata = {
  title: 'Calculadora de Margen Real en Alimentación — Incluye Merma | Foco Rentabilismo',
  description: 'Calcula el margen real de tus productos de alimentación fresca incluyendo la merma. Descubre cuánto pierdes por cada producto y cuánto mejoraría tu margen si reduces el desperdicio.',
  alternates: { canonical: `${BASE_URL}/herramientas/margen-alimentacion/` },
}

export default function MargenAlimentacionPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-emerald-500 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-emerald-600 uppercase tracking-widest hover:text-emerald-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-2 py-0.5 rounded">Alimentación · Fruterías · Carnicerías</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Calculadora de margen real en alimentación
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            El margen de un producto de alimentación fresca no es precio de venta menos precio de compra.
            Incluye la merma y descubre cuánto ganas de verdad con cada producto.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            <section>
              <CalculadoraMargenAlimentacion />
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-emerald-500 inline-block">
                Cómo interpretar los resultados
              </h2>
              <div className="space-y-4">
                {[
                  {
                    tag: '⭐ Margen saludable — más del 30%',
                    color: 'border-green-200 bg-green-50',
                    tagColor: 'text-green-700',
                    desc: 'Este producto contribuye bien al margen del negocio. Mantén el nivel de merma bajo control y prioriza su presencia en el surtido si hay demanda.',
                  },
                  {
                    tag: '✓ Margen aceptable — entre 15 y 30%',
                    color: 'border-blue-200 bg-blue-50',
                    tagColor: 'text-blue-700',
                    desc: 'Margen razonable pero con margen de mejora. Reducir la merma o ajustar ligeramente el precio de venta puede subirlo a zona saludable.',
                  },
                  {
                    tag: '⚠ Margen bajo — entre 0 y 15%',
                    color: 'border-amber-200 bg-amber-50',
                    tagColor: 'text-amber-700',
                    desc: 'Después de pagar el producto, apenas queda para cubrir costes fijos. Prioridad: reducir merma. Si no es posible, revisar el precio de venta o el precio de compra.',
                  },
                  {
                    tag: '✗ Pérdidas reales — por debajo de 0%',
                    color: 'border-red-200 bg-red-50',
                    tagColor: 'text-red-700',
                    desc: 'Cada unidad que vendes de este producto genera pérdidas reales. La merma es demasiado alta para el diferencial entre compra y venta. Reducir merma urgente o eliminar del surtido.',
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
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-emerald-500 inline-block">
                Las tres palancas de margen en alimentación fresca
              </h2>
              <div className="space-y-5">
                {[
                  {
                    n: '01',
                    titulo: 'Control de merma',
                    desc: 'La palanca más potente y más ignorada. Reducir la merma de un 15% a un 7% puede equivaler a una subida de precios del 10% sin que ningún cliente se queje de nada.',
                  },
                  {
                    n: '02',
                    titulo: 'Pedidos ajustados a la demanda real',
                    desc: 'Comprar más de lo que vas a vender en la vida útil del producto es la causa número uno de merma. Un sistema de pedidos basado en datos históricos de venta reduce el desperdicio antes de que ocurra.',
                  },
                  {
                    n: '03',
                    titulo: 'Precio de salida para producto próximo a fecha',
                    desc: 'El producto que no vas a vender al precio normal tiene dos destinos: saldo o basura. Establecer una política de descuento progresivo convierte parte de la merma en ingreso.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-emerald-200 leading-none">{item.n}</span>
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
                <Link href="/blog/caso-fruteria-margen-real-cuando-controlas-la-merma/" className="group block border border-gray-200 hover:border-emerald-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-emerald-700 mb-1">La frutería que ganaba más cuando contaba lo que tiraba</p>
                  <p className="text-sm text-gray-500">Cómo medir la merma real descubrió 1.400€ al mes de beneficio oculto.</p>
                  <p className="text-xs font-bold text-emerald-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/merma-alimentacion-como-controlarla/" className="group block border border-gray-200 hover:border-emerald-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-emerald-700 mb-1">Merma en alimentación: cómo controlarla</p>
                  <p className="text-sm text-gray-500">El coste que no aparece en ninguna factura pero destruye tu margen.</p>
                  <p className="text-xs font-bold text-emerald-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/alimentacion-rentable-leccion-1-el-margen-que-desaparece-sin-que-nadie-lo-vea/" className="group block border border-gray-200 hover:border-emerald-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Minicurso · Lección 1</p>
                  <p className="font-black text-gray-900 group-hover:text-emerald-700 mb-1">El margen que desaparece sin que nadie lo vea</p>
                  <p className="text-sm text-gray-500">Por qué la merma es el mayor destructor de margen en alimentación fresca.</p>
                  <p className="text-xs font-bold text-emerald-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/agentes/agente-alimentacion/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agente de Margen para Alimentación</p>
                  <p className="text-sm text-gray-500">Analiza tu merma, ajusta pedidos y estructura tu política de precios de salida.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Usar agente →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-3">¿Cuánto pierdes en merma?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Agente de Margen — Alimentación</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Analiza tu merma producto a producto y construye un plan para reducirla en 60 días.</p>
                <Link
                  href="/agentes/agente-alimentacion/"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
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
