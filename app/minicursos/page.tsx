import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Minicursos de Rentabilidad para Negocios | Foco Rentabilismo',
  description: 'Formación práctica y directa para mejorar la rentabilidad de tu negocio físico. Sin relleno, solo lo que funciona.',
  alternates: { canonical: `${BASE_URL}/minicursos/` },
}

const MINICURSOS = [
  {
    slug: 'escandallo-basico',
    titulo: 'Escandallo básico para tu negocio',
    descripcion: 'Aprende a calcular el coste real de cada producto o servicio que vendes. Sabrás exactamente si estás ganando o perdiendo dinero en cada venta.',
    lecciones: 1,
    pilar: 'Precios',
    nivel: 'Básico',
    estado: 'disponible',
  },
  {
    slug: 'punto-equilibrio',
    titulo: 'Calcula tu punto de equilibrio',
    descripcion: 'El número mínimo que debes facturar para no perder dinero. Más fácil de lo que parece y más importante de lo que crees.',
    lecciones: 4,
    pilar: 'Diagnóstico',
    nivel: 'Básico',
    estado: 'disponible',
  },
  {
    slug: 'escandallo-hosteleria',
    titulo: 'Escandallo para hostelería y restaurantes',
    descripcion: 'Guía completa para bares, restaurantes y cafeterías. Calcula el food cost, el coste real de cada plato y fija precios de carta que te dejen ganar dinero de verdad.',
    lecciones: 1,
    pilar: 'Precios',
    nivel: 'Básico',
    estado: 'disponible',
  },
  {
    slug: 'calcula-tu-margen-bruto',
    titulo: 'Calcula tu margen bruto real',
    descripcion: 'Descubre qué porcentaje de cada venta es realmente tuyo. Sin margen real no hay negocio: esto es lo primero que debes medir.',
    lecciones: 1,
    pilar: 'Precios',
    nivel: 'Básico',
    estado: 'disponible',
  },
  {
    slug: 'presupuesto-mensual-basico',
    titulo: 'El presupuesto mensual básico',
    descripcion: 'Cómo hacer un presupuesto de negocio en una hoja. Cuánto debes ingresar, cuánto puedes gastar y cuánto te queda a ti.',
    lecciones: 1,
    pilar: 'Gestión',
    nivel: 'Básico',
    estado: 'próximamente',
  },
  {
    slug: 'detecta-tus-productos-mas-rentables',
    titulo: 'Detecta qué productos te dejan dinero',
    descripcion: 'No todos los productos que vendes son iguales. Aprende a identificar los que te hacen ganar y los que te drenan sin que te des cuenta.',
    lecciones: 1,
    pilar: 'Productos',
    nivel: 'Básico',
    estado: 'próximamente',
  },
  {
    slug: 'fija-precio-a-un-servicio-nuevo',
    titulo: 'Fija el precio de un servicio nuevo',
    descripcion: 'Cómo poner precio a algo que no has vendido antes: sin inventarte el número, sin tirarlo por lo bajo ni por miedo ni por intuición.',
    lecciones: 1,
    pilar: 'Precios',
    nivel: 'Básico',
    estado: 'disponible',
  },
]

const NIVEL_COLORS: Record<string, string> = {
  'Básico': 'text-green-700 bg-green-50',
  'Intermedio': 'text-orange-700 bg-orange-50',
  'Avanzado': 'text-red-700 bg-red-50',
}

export default function MinicursosPage() {
  const disponibles = MINICURSOS.filter((m) => m.estado === 'disponible')
  const proximos = MINICURSOS.filter((m) => m.estado !== 'disponible')

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera de sección */}
      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">Sección especial</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Minicursos</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Formación directa, sin relleno. Cada minicurso resuelve un problema concreto
            de tu negocio en menos de una hora. Sin jerga, sin teoría innecesaria.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="prose max-w-none prose-gray prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900">
          <p>
            Un artículo te explica el concepto. Un minicurso te lleva a aplicarlo paso a paso en tu propio negocio.
          </p>
          <p>
            Cada minicurso está construido alrededor de un problema concreto que tienen los dueños de negocio físico: calcular el coste real de lo que venden, saber cuánto tienen que facturar para no perder dinero, entender qué productos les dejan margen y cuáles se lo comen. Sin rodeos, sin padding, sin ejemplos de multinacionales que no tienen nada que ver contigo.
          </p>
          <p>
            Los minicursos son gratuitos. Puedes hacerlos a tu ritmo. Y al terminar cada uno tienes un número, una decisión o un sistema que antes no tenías.
          </p>
          <p>
            <strong>Si estás empezando</strong>, el punto de equilibrio y el escandallo básico son los dos primeros que deberías hacer. Son la base de todo lo demás.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div>
            {disponibles.length > 0 && (
              <>
                <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
                  Disponibles ahora
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {disponibles.map((curso) => (
                    <Link
                      key={curso.slug}
                      href={`/minicursos/${curso.slug}/`}
                      className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-6 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                          {curso.pilar}
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${NIVEL_COLORS[curso.nivel] || 'text-gray-600 bg-gray-50'}`}>
                          {curso.nivel}
                        </span>
                      </div>
                      <h2 className="text-lg font-black text-gray-900 group-hover:text-orange-700 transition-colors mb-2 leading-snug">
                        {curso.titulo}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-2">{curso.descripcion}</p>
                      <p className="text-xs font-bold text-orange-600 mt-5 group-hover:underline">
                        Empezar minicurso →
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {proximos.length > 0 && (
              <>
                <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
                  Próximamente
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {proximos.map((curso) => (
                    <div
                      key={curso.slug}
                      className="border border-gray-100 rounded-xl p-6 bg-gray-50 opacity-70"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                          {curso.pilar}
                        </span>
                      </div>
                      <h2 className="text-lg font-black text-gray-600 mb-2 leading-snug">{curso.titulo}</h2>
                      <p className="text-sm text-gray-400 line-clamp-2">{curso.descripcion}</p>
                      <p className="text-xs text-gray-400 mt-5 font-medium">Próximamente</p>
                    </div>
                  ))}
                </div>
              </>
            )}
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
