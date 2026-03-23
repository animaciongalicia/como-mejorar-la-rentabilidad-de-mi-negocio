import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import AnalizadorProductos8020 from '@/components/herramientas/AnalizadorProductos8020'

export const metadata: Metadata = {
  title: 'Analizador de Productos 80/20 — Herramienta Gratuita | Foco Rentabilismo',
  description: 'Descubre qué productos o categorías generan el 80% de tus ventas e ingresos. Herramienta gratuita para comercios, tiendas y cualquier negocio con catálogo de productos.',
  alternates: { canonical: `${BASE_URL}/herramientas/analizador-productos/` },
}

export default function AnalizadorProductosPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-blue-500 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded">Comercio · Retail</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Analizador de Productos 80/20
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            El 20% de tus productos genera el 80% de tus ventas. Descubre exactamente cuáles son,
            cuáles merecen más espacio y cuáles están ocupando hueco sin devolver nada.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            <section>
              <AnalizadorProductos8020 />
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-blue-500 inline-block">
                Cómo interpretar los resultados
              </h2>
              <div className="space-y-5">
                {[
                  {
                    tag: '⭐ Productos estrella',
                    color: 'border-green-200 bg-green-50',
                    tagColor: 'text-green-700',
                    desc: 'Son los que sostienen tu negocio. Dales el mejor espacio en tienda, asegúrate de que siempre hay stock y nunca los sacrifiques en un descuento innecesario. Son tu activo más valioso.',
                    accion: 'Acción: máxima visibilidad, stock garantizado, no tocar precio a la baja.',
                  },
                  {
                    tag: '⚡ Productos complemento',
                    color: 'border-amber-200 bg-amber-50',
                    tagColor: 'text-amber-700',
                    desc: 'Contribuyen al negocio pero no son el núcleo. Pueden ser productos de impulso, complementos naturales de los estrella o referencias de nicho. Evalúa si su margen justifica el espacio que ocupan.',
                    accion: 'Acción: evaluar margen. Si es bueno, mantener. Si es bajo, reducir o eliminar.',
                  },
                  {
                    tag: '✗ Productos a revisar',
                    color: 'border-red-200 bg-red-50',
                    tagColor: 'text-red-700',
                    desc: 'Generan el 5% de las ventas o menos. Ocupan espacio, inmovilización de stock y atención del equipo. La pregunta no es si se venden, sino si lo que generan justifica lo que cuestan en tiempo, espacio y capital.',
                    accion: 'Acción: liquidar, eliminar o reemplazar por algo con más potencial.',
                  },
                ].map((item) => (
                  <div key={item.tag} className={`border rounded-xl p-5 ${item.color}`}>
                    <p className={`font-black text-sm mb-2 ${item.tagColor}`}>{item.tag}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.desc}</p>
                    <p className="text-xs font-bold text-gray-600">{item.accion}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-blue-500 inline-block">
                El stock muerto: el problema que nadie quiere mirar
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hay un coste en tu negocio que no aparece en la cuenta de resultados pero existe: el dinero inmovilizado en producto que no se vende.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ese stock tiene coste de almacenamiento, coste de oportunidad (ese dinero podría estar en producto que sí rota) y, en muchos casos, riesgo de obsolescencia.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 mb-2">La regla del stock muerto</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si un producto lleva más de 90 días sin venderse, considera liquidarlo aunque sea a precio de coste o por debajo.
                  El dinero recuperado, reinvertido en producto con rotación real, genera más valor que ese stock parado.
                  <strong className="text-gray-800"> Vender a coste no es perder. Es recuperar capital para que trabaje.</strong>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Sigue aprendiendo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/agentes/analista-competencia/" className="group block border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-blue-700 mb-1">Analista de Competencia</p>
                  <p className="text-sm text-gray-500">Entiende dónde está tu ventaja real frente a la competencia y cómo comunicarla.</p>
                  <p className="text-xs font-bold text-blue-600 mt-3 group-hover:underline">Usar agente →</p>
                </Link>
                <Link href="/minicursos/productos-estrella/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Minicurso</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Cómo identificar tus productos estrella</p>
                  <p className="text-sm text-gray-500">Del análisis a la acción: cómo reorganizar tu catálogo para ganar más margen.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/blog/caso-libreria-supervivencia-sin-competir-en-precio/" className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-amber-700 mb-1">La librería que dejó de competir en precio</p>
                  <p className="text-sm text-gray-500">Cómo un comercio local sobrevivió diferenciándose en vez de bajando precios.</p>
                  <p className="text-xs font-bold text-amber-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/tienda-fisica-vs-amazon-como-ganar-sin-bajar-precios/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Tu tienda no puede ganar a Amazon en precio</p>
                  <p className="text-sm text-gray-500">La única estrategia que funciona para el comercio local frente a las grandes superficies.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-3">¿Quieres saber más?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Analista de Competencia</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Identifica tu diferenciación real y cómo posicionarte frente a quien tiene más escala.</p>
                <Link
                  href="/agentes/analista-competencia/"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
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
