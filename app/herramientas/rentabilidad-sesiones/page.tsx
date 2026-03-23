import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import CalculadoraRentabilidadSesiones from '@/components/herramientas/CalculadoraRentabilidadSesiones'

export const metadata: Metadata = {
  title: 'Calculadora de Rentabilidad por Sesión — Centros de Salud y Bienestar | Foco Rentabilismo',
  description: 'Calcula el precio mínimo rentable de cada servicio en tu centro de fisioterapia, estética o bienestar. Descubre qué servicios están por debajo del mínimo y cuánto necesitas subir.',
  alternates: { canonical: `${BASE_URL}/herramientas/rentabilidad-sesiones/` },
}

export default function RentabilidadSesionesPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-teal-500 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-teal-600 uppercase tracking-widest hover:text-teal-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-2 py-0.5 rounded">Salud · Bienestar · Estética</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Calculadora de rentabilidad por sesión
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Introduce tus costes fijos y tus servicios. Descubre qué precios mínimos necesitas
            para que cada sesión sea rentable, y cuánto dinero estás dejando sobre la mesa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            <section>
              <CalculadoraRentabilidadSesiones />
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-teal-500 inline-block">
                Cómo interpretar los resultados
              </h2>
              <div className="space-y-4">
                {[
                  {
                    tag: '✓ Precio correcto',
                    color: 'border-green-200 bg-green-50',
                    tagColor: 'text-green-700',
                    desc: 'Tu precio actual supera el mínimo con el margen objetivo. Este servicio contribuye al beneficio del centro. Mantenlo y priorízalo en la agenda.',
                  },
                  {
                    tag: '⚠ Revisar precio',
                    color: 'border-amber-200 bg-amber-50',
                    tagColor: 'text-amber-700',
                    desc: 'El precio está por debajo del mínimo rentable, pero la brecha es pequeña (menos de 15€). Una subida moderada bien comunicada lo resuelve sin riesgo de perder clientes.',
                  },
                  {
                    tag: '✗ Precio insuficiente',
                    color: 'border-red-200 bg-red-50',
                    tagColor: 'text-red-700',
                    desc: 'Cada sesión de este servicio genera pérdidas o no cubre costes. Es urgente. Considera una subida escalonada o revisar si tiene sentido mantener el servicio en esta modalidad.',
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
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-teal-500 inline-block">
                Las tres palancas de rentabilidad en un centro de bienestar
              </h2>
              <div className="space-y-5">
                {[
                  {
                    n: '01',
                    titulo: 'Precio por servicio',
                    desc: 'La palanca más directa y más ignorada. Muchos centros llevan años sin actualizar sus tarifas mientras los costes suben. Una revisión anual desde los costes reales es obligatoria.',
                  },
                  {
                    n: '02',
                    titulo: 'Mix de servicios',
                    desc: 'Cuando la agenda está llena, cada hueco que ocupa un servicio de bajo margen es un hueco que no va a uno de alto margen. Priorizar en agenda los servicios más rentables por hora mejora el resultado sin trabajar más.',
                  },
                  {
                    n: '03',
                    titulo: 'Ocupación de sala',
                    desc: 'Los costes fijos se pagan haya o no clientes. Reducir los huecos sin cubrir (cancelaciones de última hora, franjas vacías) mejora directamente el margen de cada servicio que sí se presta.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-teal-200 leading-none">{item.n}</span>
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
                <Link href="/blog/caso-centro-bienestar-agenda-llena-margen-vacio/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">El centro con la agenda llena y el margen vacío</p>
                  <p className="text-sm text-gray-500">Cómo un centro de bienestar triplicó su beneficio cambiando precios y mix de servicios.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/cuanto-cobrar-sesion-clinica-centro-bienestar/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-500 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Cuánto cobrar por sesión en tu clínica</p>
                  <p className="text-sm text-gray-500">El cálculo del precio correcto desde tus costes reales, no desde la competencia.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/bienestar-rentable-leccion-1-el-precio-que-no-cubre-tus-costes/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Minicurso · Lección 1</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">El precio que no cubre tus costes</p>
                  <p className="text-sm text-gray-500">Por qué el precio de mercado no es tu precio correcto y cómo detectarlo.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Empezar →</p>
                </Link>
                <Link href="/agentes/agente-bienestar/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agente de Precios para Bienestar</p>
                  <p className="text-sm text-gray-500">Calcula tus precios mínimos y prepara la comunicación de la subida a tus clientes.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Usar agente →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-3">¿Precio o comunicación?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Agente de Precios — Bienestar</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Calcula cuánto deberías cobrar por cada servicio y cómo comunicar la subida sin perder clientes.</p>
                <Link
                  href="/agentes/agente-bienestar/"
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
