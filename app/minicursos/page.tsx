import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Minicursos de Rentabilidad para Negocios | Foco Rentabilismo',
  description: 'Formación práctica y directa para mejorar la rentabilidad de tu negocio físico. Sin relleno, solo lo que funciona.',
  alternates: { canonical: `${BASE_URL}/minicursos/` },
}

const MINICURSOS = [
  {
    slug: 'escandallo-basico',
    titulo: 'Escandallo básico para tu negocio',
    descripcion: 'Aprende a calcular el coste real de cada producto o servicio que vendes. En 5 lecciones, sabrás si estás ganando o perdiendo dinero en cada venta.',
    lecciones: 5,
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
    slug: 'subir-precios-sin-perder-clientes',
    titulo: 'Cómo subir precios sin perder clientes',
    descripcion: 'El método paso a paso para comunicar una subida de precios y que tus mejores clientes lo entiendan y se queden.',
    lecciones: 6,
    pilar: 'Precios',
    nivel: 'Intermedio',
    estado: 'próximamente',
  },
  {
    slug: 'primer-empleado',
    titulo: 'Contratar tu primer empleado sin arruinarte',
    descripcion: 'Cuándo tiene sentido contratar, cómo calcular si te lo puedes permitir y cómo hacerlo bien desde el primer día.',
    lecciones: 5,
    pilar: 'Personas',
    nivel: 'Intermedio',
    estado: 'próximamente',
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
          <p className="text-lg text-gray-600 max-w-2xl">
            Formación directa, sin relleno. Cada minicurso resuelve un problema concreto
            de tu negocio en menos de una hora. Sin jerga, sin teoría innecesaria.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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
                    <span className="text-xs text-gray-400">{curso.lecciones} lecciones</span>
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
                    <span className="text-xs text-gray-400">{curso.lecciones} lecciones</span>
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
    </div>
  )
}
