import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Agentes Consultores IA Gratuitos | Foco Rentabilismo',
  description: 'Rentabilismo pone a tu disposición agentes consultores de IA especializados para mejorar la rentabilidad de tu negocio. Gratis. En ChatGPT. Sin configurar nada.',
  alternates: { canonical: `${BASE_URL}/agentes/` },
}

// ─── AGENTES ───────────────────────────────────────────────────────────────
const AGENTES = [
  {
    slug: 'diagnostico-rentabilidad',
    nombre: 'Agente Diagnóstico',
    subtitulo: 'Radiografía rápida de tu negocio',
    descripcion: 'Analiza los números clave de tu negocio y detecta en qué áreas estás perdiendo dinero sin saberlo.',
    usos: ['Detectar fugas de margen', 'Identificar productos o servicios no rentables', 'Priorizar dónde actuar primero'],
    pilar: 'Diagnóstico',
    estado: 'disponible' as const,
    chatgptUrl: '',
  },
  {
    slug: 'calculadora-precios',
    nombre: 'Agente Precios',
    subtitulo: 'Calcula tu precio mínimo rentable',
    descripcion: 'Te ayuda a calcular el precio real que necesitas cobrar para ganar dinero, sin malvender ni perder clientes.',
    usos: ['Calcular precio mínimo con margen', 'Comparar tu precio con el mercado', 'Argumentar subidas de precio al cliente'],
    pilar: 'Precios',
    estado: 'disponible' as const,
    chatgptUrl: '',
  },
  {
    slug: 'guion-ventas',
    nombre: 'Agente Ventas',
    subtitulo: 'Guiones y argumentarios de venta',
    descripcion: 'Genera argumentarios personalizados para tu negocio. Responde objeciones, cierra más y cobra lo que vale tu trabajo.',
    usos: ['Crear argumentario de ventas', 'Responder objeciones de precio', 'Mejorar el discurso de presentación'],
    pilar: 'Ventas',
    estado: 'disponible' as const,
    chatgptUrl: '',
  },
  {
    slug: 'control-costes',
    nombre: 'Agente Costes',
    subtitulo: 'Encuentra dónde se escapa el dinero',
    descripcion: 'Revisa tu estructura de costes fijos y variables para identificar qué gastos puedes reducir o eliminar sin dañar el negocio.',
    usos: ['Auditar gastos mensuales', 'Detectar costes ocultos o prescindibles', 'Calcular punto de equilibrio real'],
    pilar: 'Costes',
    estado: 'disponible' as const,
    chatgptUrl: '',
  },
  {
    slug: 'optimizador-procesos',
    nombre: 'Agente Procesos',
    subtitulo: 'Elimina lo que te hace perder tiempo y dinero',
    descripcion: 'Detecta cuellos de botella en tus operaciones y propone soluciones concretas para trabajar menos horas con más resultado.',
    usos: ['Mapear procesos actuales', 'Identificar tareas a eliminar o automatizar', 'Crear checklist operativos'],
    pilar: 'Procesos',
    estado: 'proximo' as const,
    chatgptUrl: '',
  },
  {
    slug: 'estrategia-marketing',
    nombre: 'Agente Marketing',
    subtitulo: 'Plan de marketing rentable para tu negocio',
    descripcion: 'Diseña acciones de marketing con retorno medible. Sin gastar en publicidad que no funciona.',
    usos: ['Plan de captación de clientes', 'Estrategia de fidelización', 'Ideas de marketing local de bajo coste'],
    pilar: 'Marketing',
    estado: 'proximo' as const,
    chatgptUrl: '',
  },
  {
    slug: 'fidelizacion-clientes',
    nombre: 'Agente Fidelización',
    subtitulo: 'Haz que tus clientes vuelvan y gasten más',
    descripcion: 'Diseña estrategias concretas para retener clientes, aumentar la frecuencia de compra y subir el ticket medio.',
    usos: ['Plan de fidelización paso a paso', 'Ideas para aumentar ticket medio', 'Sistemas de repetición de compra'],
    pilar: 'Ventas',
    estado: 'proximo' as const,
    chatgptUrl: '',
  },
  {
    slug: 'mentor-empresarial',
    nombre: 'Agente Mentor',
    subtitulo: 'Tu consultor empresarial 24/7',
    descripcion: 'Resuelve dudas estratégicas, toma decisiones con más claridad y actúa como si tuvieras un consultor a tu lado.',
    usos: ['Resolver dilemas de negocio', 'Tomar decisiones con más información', 'Pensar estrategia a medio plazo'],
    pilar: 'Diagnóstico',
    estado: 'proximo' as const,
    chatgptUrl: '',
  },
]

export default function AgentesPage() {
  const disponibles = AGENTES.filter((a) => a.estado === 'disponible')
  const proximos = AGENTES.filter((a) => a.estado !== 'disponible')

  return (
    <div className="bg-white min-h-screen">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Gratis · Sin registro · En ChatGPT</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
            Agentes Consultores para tu negocio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Inteligencia artificial especializada en negocios físicos. Lista para usar, sin configurar nada.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ─── INTRO ─────────────────────────────────────────────────────── */}
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-12">
          <p className="text-gray-800 text-base leading-relaxed mb-2">
            <strong>Esto no son chatbots genéricos.</strong> Cada agente tiene un objetivo
            concreto y conoce de primera mano los problemas de los negocios físicos: márgenes
            ajustados, clientes que regatean, procesos que se comen el tiempo. Te hace las
            preguntas correctas y te guía paso a paso hacia una respuesta útil.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Son completamente gratuitos. Los abres directamente en ChatGPT — sin pagar nada,
            sin registrarte en ningún sitio, sin instalar nada.
          </p>
        </div>

        {/* ─── CÓMO FUNCIONA ──────────────────────────────────────────────── */}
        <div className="mb-10">
          <h2 className="text-xl font-black text-gray-900 mb-6">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                titulo: 'Elige el agente',
                texto: 'Cada agente está especializado en un área concreta: precios, ventas, diagnóstico, costes... Elige el que mejor se adapte a lo que necesitas ahora mismo.',
              },
              {
                num: '2',
                titulo: 'Ábrelo en ChatGPT',
                texto: 'Pulsa el botón "Usar en ChatGPT". Se abre directamente con toda la configuración ya hecha. No tienes que copiar ningún prompt ni configurar nada.',
              },
              {
                num: '3',
                titulo: 'Cuéntale tu caso',
                texto: 'El agente te hará preguntas sobre tu negocio y te dará respuestas concretas. No respuestas genéricas — análisis adaptados a tu situación real.',
              },
            ].map((paso) => (
              <div key={paso.num} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-violet-600 text-white font-black text-base flex items-center justify-center">
                  {paso.num}
                </div>
                <div>
                  <p className="font-black text-gray-900 mb-1">{paso.titulo}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{paso.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CÓMO DARLE LAS INSTRUCCIONES ──────────────────────────────── */}
        <div className="mb-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-black text-gray-900 mb-1">Cómo hablarle para sacarle el máximo</h2>
          <p className="text-sm text-gray-500 mb-5">Cuanto más contexto le des, mejor respuesta obtendrás. Usa esta estructura:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Tu rol</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Dile quién eres</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Qué tipo de negocio tienes, cuántos años llevas, si trabajas solo o con empleados, y cuál es tu situación actual.
              </p>
              <p className="text-xs text-gray-400 italic">
                "Tengo una peluquería con 2 empleadas, llevo 6 años y facturamos unos 8.000€ al mes..."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Tu problema</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Explica qué necesitas resolver</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Sé específico. No "quiero ganar más dinero" sino qué problema concreto tienes ahora mismo y qué ya has intentado.
              </p>
              <p className="text-xs text-gray-400 italic">
                "No entiendo por qué a fin de mes casi no queda dinero aunque las ventas van bien..."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">Cómo quieres los resultados</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Dile qué esperas obtener</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Si quieres una lista de acciones, un análisis, un guion, una tabla... El agente se adapta al formato que más te ayude.
              </p>
              <p className="text-xs text-gray-400 italic">
                "Dame 3 acciones concretas que pueda aplicar esta semana, ordenadas por impacto."
              </p>
            </div>
          </div>
        </div>

        {/* ─── AGENTES DISPONIBLES ────────────────────────────────────────── */}
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
          Disponibles ahora
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {disponibles.map((agente) => (
            <div
              key={agente.slug}
              className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                    {agente.pilar}
                  </span>
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    Disponible
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-0.5">{agente.nombre}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-2">{agente.subtitulo}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{agente.descripcion}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                {agente.chatgptUrl ? (
                  <a
                    href={agente.chatgptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm text-center whitespace-nowrap"
                  >
                    Usar en ChatGPT →
                  </a>
                ) : (
                  <span className="bg-gray-100 text-gray-400 font-semibold px-5 py-2.5 rounded-lg text-sm text-center whitespace-nowrap cursor-not-allowed">
                    Link próximamente
                  </span>
                )}
                <Link
                  href={`/agentes/${agente.slug}/`}
                  className="text-xs text-violet-600 hover:underline text-center"
                >
                  Ver prompt y guía →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─── PRÓXIMAMENTE ──────────────────────────────────────────────── */}
        {proximos.length > 0 && (
          <>
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
              En desarrollo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {proximos.map((agente) => (
                <div
                  key={agente.slug}
                  className="border border-gray-100 rounded-xl p-5 bg-gray-50 opacity-70"
                >
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded mb-2 inline-block">
                    {agente.pilar}
                  </span>
                  <h3 className="text-base font-black text-gray-600 mb-0.5">{agente.nombre}</h3>
                  <p className="text-sm font-semibold text-gray-400 mb-2">{agente.subtitulo}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{agente.descripcion}</p>
                  <p className="text-xs text-gray-400 mt-4 font-medium">Próximamente</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ─── POR QUÉ SON GRATUITOS ─────────────────────────────────────── */}
        <div className="border border-violet-200 bg-violet-50 rounded-2xl p-8">
          <h2 className="text-xl font-black text-gray-900 mb-3">¿Por qué son gratuitos?</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Porque en Rentabilismo creemos que la mayoría de negocios pequeños tienen los
            problemas resueltos — solo les falta saber dónde mirar y cómo actuar. Los agentes
            son nuestra forma de democratizar el acceso a un consultor de rentabilidad.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Necesitas una cuenta de ChatGPT (gratuita) para usarlos. Nada más.
          </p>
        </div>

      </div>
    </div>
  )
}
