import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'
import AnalizadorRentabilidadClientes from '@/components/herramientas/AnalizadorRentabilidadClientes'

export const metadata: Metadata = {
  title: 'Analizador de Rentabilidad por Cliente — Herramienta Gratuita | Foco Rentabilismo',
  description: 'Calcula cuánto ganas realmente por hora con cada cliente. Descubre cuáles son rentables, cuáles están por debajo de tu tarifa mínima y cuáles te cuestan dinero.',
  alternates: { canonical: `${BASE_URL}/herramientas/rentabilidad-clientes/` },
}

export default function RentabilidadClientesPage() {
  return (
    <div className="bg-white min-h-screen">

      <div className="border-b-2 border-indigo-500 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:text-indigo-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-indigo-700 bg-white border border-indigo-200 px-2 py-0.5 rounded">Autónomos · Servicios</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Analizador de rentabilidad por cliente
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Lo que un cliente te factura no es lo que ganas con él.
            Introduce lo que cobras y las horas reales que le dedicas, y descubre cuánto ganas por hora con cada uno.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          <div className="space-y-12">

            <section>
              <AnalizadorRentabilidadClientes />
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
                Cómo interpretar los resultados
              </h2>
              <div className="space-y-4">
                {[
                  {
                    tag: '⭐ Excelente — más de 80€/hora real',
                    color: 'border-green-200 bg-green-50',
                    tagColor: 'text-green-700',
                    desc: 'Estos clientes son el núcleo de tu negocio. Trátales bien, mantén la relación y, si puedes, busca más clientes como ellos.',
                  },
                  {
                    tag: '✓ Bueno — entre 50 y 80€/hora real',
                    color: 'border-blue-200 bg-blue-50',
                    tagColor: 'text-blue-700',
                    desc: 'Rentables y estables. Hay margen de mejora si consigues optimizar el tiempo que les dedicas o renegociar el alcance cuando corresponda.',
                  },
                  {
                    tag: '⚠ Revisar — entre 30 y 50€/hora real',
                    color: 'border-amber-200 bg-amber-50',
                    tagColor: 'text-amber-700',
                    desc: 'Están por debajo de lo que deberías cobrar. Evalúa si puedes reducir el tiempo que les dedicas (limitando alcance) o si es momento de una conversación sobre tarifas.',
                  },
                  {
                    tag: '✗ Problemático — menos de 30€/hora real',
                    color: 'border-red-200 bg-red-50',
                    tagColor: 'text-red-700',
                    desc: 'Una vez descontados tus costes fijos, estos clientes pueden estar generándote pérdidas reales. No es viable mantenerlos sin un cambio significativo en precio o alcance.',
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
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
                Por qué las horas reales son la clave
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El error más habitual al analizar clientes es contar solo las horas que &ldquo;trabajas&rdquo; para ellos, ignorando el tiempo de gestión, comunicación y correcciones.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  'Tiempo de reuniones (presenciales o por videollamada)',
                  'Responder mensajes, correos y llamadas',
                  'Correcciones y revisiones no previstas',
                  'Gestión administrativa del proyecto',
                  'Tiempo de briefing y documentación',
                  'Comunicación fuera de horario acordado',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                    <span className="text-indigo-400 font-black mt-0.5 text-xs">→</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Durante una semana, registra todo el tiempo que dedicas a cada cliente sin excepción.
                Es el único momento incómodo del proceso, pero el resultado cambia completamente la imagen que tienes de tu cartera.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
                Qué hacer con un cliente problemático
              </h2>
              <ol className="space-y-5">
                {[
                  {
                    n: '01',
                    titulo: 'Primero: revisa si el problema está en el alcance',
                    desc: 'Antes de tocar el precio, analiza si el cliente consume más horas de las acordadas. Si es así, la conversación es sobre delimitar mejor el servicio, no necesariamente sobre subir la tarifa.',
                  },
                  {
                    n: '02',
                    titulo: 'Propón un ajuste de tarifa con contexto',
                    desc: 'No digas "he subido mis precios". Explica que has revisado el trabajo que hacéis juntos y que necesitas ajustar la tarifa para mantener la calidad del servicio. Es honesto y mucho más fácil de aceptar.',
                  },
                  {
                    n: '03',
                    titulo: 'Ofrece una alternativa de menor alcance',
                    desc: 'Si el cliente no puede asumir la subida, ofrece un servicio reducido al precio actual. Tú mantienes el margen, él mantiene acceso al servicio. Todos ganan.',
                  },
                  {
                    n: '04',
                    titulo: 'Si no hay solución, considera no renovar',
                    desc: 'Hay clientes que no tienen solución rentable. Seguir con ellos tiene coste de oportunidad: el tiempo que les dedicas no está disponible para clientes mejores.',
                  },
                ].map((paso) => (
                  <li key={paso.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-indigo-200 leading-none">{paso.n}</span>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{paso.titulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Sigue aprendiendo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/agentes/calculadora-precios/" className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2">Agente IA</p>
                  <p className="font-black text-gray-900 group-hover:text-violet-700 mb-1">Agente de Precios</p>
                  <p className="text-sm text-gray-500">Calcula cuánto cobrar, estructura tu oferta y prepara la conversación de subida de tarifas.</p>
                  <p className="text-xs font-bold text-violet-600 mt-3 group-hover:underline">Usar agente →</p>
                </Link>
                <Link href="/blog/estructurar-oferta-servicios-ganar-mas-sin-mas-horas/" className="group block border border-gray-200 hover:border-indigo-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Minicurso</p>
                  <p className="font-black text-gray-900 group-hover:text-indigo-700 mb-1">Estructurar tu oferta de servicios</p>
                  <p className="text-sm text-gray-500">Precio por hora, por proyecto o retención: cuándo usar cada modelo y cómo no dejar dinero en la mesa.</p>
                  <p className="text-xs font-bold text-indigo-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
                <Link href="/blog/caso-consultora-clientes-que-costaban-dinero/" className="group block border border-gray-200 hover:border-amber-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Caso práctico</p>
                  <p className="font-black text-gray-900 group-hover:text-amber-700 mb-1">La consultora que facturaba 5.000€ y no llegaba a fin de mes</p>
                  <p className="text-sm text-gray-500">El análisis que reveló que la mitad de sus clientes le costaban dinero.</p>
                  <p className="text-xs font-bold text-amber-600 mt-3 group-hover:underline">Ver caso →</p>
                </Link>
                <Link href="/blog/precio-hora-servicios-como-calcularlo/" className="group block border border-gray-200 hover:border-teal-400 rounded-xl p-5 transition-all hover:shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-600 mb-2">Artículo</p>
                  <p className="font-black text-gray-900 group-hover:text-teal-700 mb-1">Cómo calcular tu precio hora en servicios</p>
                  <p className="text-sm text-gray-500">La fórmula paso a paso para saber cuánto necesitas cobrar para que tu negocio sea viable.</p>
                  <p className="text-xs font-bold text-teal-600 mt-3 group-hover:underline">Leer →</p>
                </Link>
              </div>
            </section>

          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-3">¿Necesitas subir tarifas?</p>
                <p className="text-sm font-black text-gray-900 mb-2">Agente de Precios</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Calcula cuánto cobrar, estructura tu propuesta y prepara cómo decírselo al cliente.</p>
                <Link
                  href="/agentes/calculadora-precios/"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
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
