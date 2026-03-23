import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import CalculadoraMargenCarta from '@/components/herramientas/CalculadoraMargenCarta'

export const metadata: Metadata = {
  title: 'Calculadora de Food Cost por Plato — Herramienta Gratuita | Foco Rentabilismo',
  description: 'Calcula el food cost de cada plato de tu carta y descubre cuáles te hacen ganar y cuáles te están costando dinero. Herramienta gratuita para bares y restaurantes.',
  alternates: { canonical: `${BASE_URL}/herramientas/margen-carta/` },
}

export default function MargenCartaPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera */}
      <div className="border-b-2 border-teal-500 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-teal-600 uppercase tracking-widest hover:text-teal-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-2 py-0.5 rounded">Hostelería</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Calculadora de Food Cost por Plato
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Introduce los platos de tu carta con su precio y coste de ingredientes.
            En segundos sabrás qué platos tienen margen real y cuáles te están drenando.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            {/* La calculadora */}
            <section>
              <CalculadoraMargenCarta />
            </section>

            {/* Cómo interpretar los resultados */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-teal-500 inline-block">
                Cómo interpretar los resultados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    rango: '≤ 30%',
                    titulo: 'Food cost correcto',
                    desc: 'El plato tiene margen suficiente para cubrir mano de obra, gastos generales y dejar beneficio. Mantenlo.',
                    color: 'border-green-200 bg-green-50',
                    textColor: 'text-green-800',
                  },
                  {
                    rango: '31–38%',
                    titulo: 'Zona de ajuste',
                    desc: 'El margen es ajustado. Puede ser viable si el plato rota mucho, pero hay que vigilarlo. Revisa si el precio puede subir o el coste puede bajar.',
                    color: 'border-amber-200 bg-amber-50',
                    textColor: 'text-amber-800',
                  },
                  {
                    rango: '> 38%',
                    titulo: 'Problema real',
                    desc: 'La mayoría de lo que cobras se va en ingredientes. Antes de cubrir mano de obra o alquiler ya has gastado más del 38%. Hay que actuar.',
                    color: 'border-red-200 bg-red-50',
                    textColor: 'text-red-800',
                  },
                ].map((item) => (
                  <div key={item.rango} className={`border rounded-xl p-5 ${item.color}`}>
                    <p className={`text-xl font-black mb-1 ${item.textColor}`}>{item.rango}</p>
                    <p className="font-black text-gray-900 mb-2 text-sm">{item.titulo}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm font-black text-gray-700 mb-2">Importante: el food cost no es el único coste</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Esta calculadora mide solo la materia prima. Tu precio de venta también tiene que cubrir la mano de obra
                  (cocinero, camareros), los gastos generales (alquiler, luz, gestoría) y dejarte margen de beneficio.
                  Un food cost del 30% no garantiza rentabilidad si el resto de costes son muy altos.
                  Para el análisis completo, usa el{' '}
                  <Link href="/agentes/escandallos-hosteleria/" className="font-bold text-teal-600 hover:underline">
                    Agente de Escandallos
                  </Link>.
                </p>
              </div>
            </section>

            {/* Qué hacer con los platos problemáticos */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-teal-500 inline-block">
                Qué hacer cuando un plato sale en rojo
              </h2>
              <div className="space-y-4">
                {[
                  {
                    opcion: 'Subir el precio',
                    desc: 'La opción más directa. Antes de hacerlo, comprueba si el plato tiene demanda elástica: si los clientes lo piden porque es barato o porque les gusta de verdad.',
                    tag: 'Más impacto',
                  },
                  {
                    opcion: 'Reformular el plato',
                    desc: 'Cambiar algún ingrediente caro por uno equivalente de menor coste, reducir ligeramente el gramaje o cambiar la presentación sin cambiar la esencia del plato.',
                    tag: 'Sin tocar precio',
                  },
                  {
                    opcion: 'Retirar el plato de la carta',
                    desc: 'Si tiene food cost muy alto, poca rotación y no aporta diferenciación, puede que lo más rentable sea eliminarlo. Menos es más cuando lo que queda tiene margen.',
                    tag: 'Decisión difícil',
                  },
                  {
                    opcion: 'Reposicionarlo en la carta',
                    desc: 'Los platos que aparecen en posiciones "frías" de la carta se venden menos. Un plato rentable bien posicionado vende más sin tocar precio ni coste.',
                    tag: 'Sin coste adicional',
                  },
                ].map((item) => (
                  <div key={item.opcion} className="flex gap-4 border border-gray-100 rounded-xl p-5">
                    <div className="shrink-0 mt-1">
                      <span className="text-xs font-black bg-teal-100 text-teal-700 px-2 py-0.5 rounded">{item.tag}</span>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{item.opcion}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recursos relacionados */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Sigue aprendiendo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/agentes/escandallos-hosteleria/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Asistente de Escandallos</p>
                  <p className="text-sm text-gray-500">Analiza tu carta completa con IA y obtén un escandallo detallado plato a plato.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Usar agente →</p>
                </Link>
                <Link href="/minicursos/carta-rentable/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Minicurso</p>
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Cómo diseñar una carta rentable</p>
                  <p className="text-sm text-gray-500">De la calculadora a la acción: cómo rediseñar tu carta para que trabaje a tu favor.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Empezar minicurso →</p>
                </Link>
                <Link href="/blog/escandallo-hosteleria-restaurantes/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Escandallo en hostelería: guía completa</p>
                  <p className="text-sm text-gray-500">Cómo calcular el coste real de cada plato y poner precios de carta rentables.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer artículo →</p>
                </Link>
                <Link href="/blog/caso-restaurante-rediseno-carta/" className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-amber-700 mb-1">Restaurante que rediseñó su carta</p>
                  <p className="text-sm text-gray-500">Cómo un restaurante subió el margen bruto 9 puntos sin subir precios generales.</p>
                  <p className="text-xs font-bold text-amber-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-3">¿Quieres ir más lejos?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Agente de Escandallos</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Análisis completo de tu carta con IA. Escandallo plato a plato, food cost y recomendaciones de precio.</p>
                <Link
                  href="/agentes/escandallos-hosteleria/"
                  className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
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
