import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Agentes Consultores IA | Foco Rentabilismo',
  description: 'Agentes de inteligencia artificial diseñados para ayudarte a mejorar la rentabilidad de tu negocio. Prompts, usos y resultados reales.',
  alternates: { canonical: `${BASE_URL}/agentes/` },
}

// Agentes — cada uno tendrá su página propia en /agentes/[slug]/
const AGENTES = [
  {
    slug: 'diagnostico-rentabilidad',
    nombre: 'Agente Diagnóstico',
    subtitulo: 'Radiografía rápida de tu negocio',
    descripcion: 'Analiza los números clave de tu negocio y detecta en qué áreas estás perdiendo dinero sin saberlo.',
    usos: ['Detectar fugas de margen', 'Identificar productos o servicios no rentables', 'Priorizar dónde actuar primero'],
    pilar: 'Diagnóstico',
    estado: 'disponible',
  },
  {
    slug: 'calculadora-precios',
    nombre: 'Agente Precios',
    subtitulo: 'Calcula tu precio mínimo rentable',
    descripcion: 'Te ayuda a calcular el precio real que necesitas cobrar para ganar dinero, sin malvender ni perder clientes.',
    usos: ['Calcular precio mínimo con margen', 'Comparar tu precio con el mercado', 'Argumentar subidas de precio al cliente'],
    pilar: 'Precios',
    estado: 'disponible',
  },
  {
    slug: 'guion-ventas',
    nombre: 'Agente Ventas',
    subtitulo: 'Guiones y argumentarios de venta',
    descripcion: 'Genera argumentarios personalizados para tu negocio. Responde objeciones, cierra más y cobra lo que vale tu trabajo.',
    usos: ['Crear argumentario de ventas', 'Responder objeciones de precio', 'Mejorar el discurso de presentación'],
    pilar: 'Ventas',
    estado: 'disponible',
  },
  {
    slug: 'optimizador-procesos',
    nombre: 'Agente Procesos',
    subtitulo: 'Elimina lo que te hace perder tiempo y dinero',
    descripcion: 'Detecta cuellos de botella en tus operaciones y propone soluciones concretas para trabajar menos horas con más resultado.',
    usos: ['Mapear procesos actuales', 'Identificar tareas a eliminar o automatizar', 'Crear checklist operativos'],
    pilar: 'Procesos',
    estado: 'próximamente',
  },
  {
    slug: 'estrategia-marketing',
    nombre: 'Agente Marketing',
    subtitulo: 'Plan de marketing rentable para tu negocio',
    descripcion: 'Diseña acciones de marketing con retorno medible. Sin gastar en publicidad que no funciona.',
    usos: ['Plan de captación de clientes', 'Estrategia de fidelización', 'Ideas de marketing local de bajo coste'],
    pilar: 'Publicidad/Marketing',
    estado: 'próximamente',
  },
  {
    slug: 'mentor-empresarial',
    nombre: 'Agente Mentor',
    subtitulo: 'Tu consultor empresarial 24/7',
    descripcion: 'Resuelve dudas estratégicas, toma decisiones con más claridad y actúa como si tuvieras un consultor a tu lado.',
    usos: ['Resolver dilemas de negocio', 'Tomar decisiones con más información', 'Pensar estrategia a medio plazo'],
    pilar: 'Diagnóstico',
    estado: 'próximamente',
  },
]

export default function AgentesPage() {
  const disponibles = AGENTES.filter((a) => a.estado === 'disponible')
  const proximos = AGENTES.filter((a) => a.estado !== 'disponible')

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera de sección */}
      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Sección especial</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Agentes Consultores</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Agentes de IA diseñados para tu negocio. No son chatbots genéricos.
            Cada agente tiene un objetivo concreto, prompts específicos y resultados medibles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Disponibles */}
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
          Disponibles ahora
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {disponibles.map((agente) => (
            <Link
              key={agente.slug}
              href={`/agentes/${agente.slug}/`}
              className="group block border border-gray-200 hover:border-violet-400 rounded-xl p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                  {agente.pilar}
                </span>
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                  Disponible
                </span>
              </div>
              <h2 className="text-lg font-black text-gray-900 group-hover:text-violet-700 transition-colors mb-1">
                {agente.nombre}
              </h2>
              <p className="text-sm font-semibold text-gray-500 mb-3">{agente.subtitulo}</p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{agente.descripcion}</p>
              <ul className="space-y-1">
                {agente.usos.map((uso, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-violet-400 mt-0.5">→</span>
                    {uso}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold text-violet-600 mt-5 group-hover:underline">
                Ver agente →
              </p>
            </Link>
          ))}
        </div>

        {/* Próximamente */}
        {proximos.length > 0 && (
          <>
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
              Próximamente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximos.map((agente) => (
                <div
                  key={agente.slug}
                  className="border border-gray-100 rounded-xl p-6 bg-gray-50 opacity-70"
                >
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded mb-3 inline-block">
                    {agente.pilar}
                  </span>
                  <h2 className="text-lg font-black text-gray-600 mb-1">{agente.nombre}</h2>
                  <p className="text-sm font-semibold text-gray-400 mb-3">{agente.subtitulo}</p>
                  <p className="text-sm text-gray-400 line-clamp-2">{agente.descripcion}</p>
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
