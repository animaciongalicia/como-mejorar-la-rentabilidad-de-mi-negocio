import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { SECTORES } from '@/lib/clusters'
import { BASE_URL } from '@/lib/seo'
import PostCard from '@/components/PostCard'
import Sidebar from '@/components/Sidebar'

interface Props {
  params: { sector: string }
}

// Contenido específico por sector: problemas típicos + intro
const SECTOR_CONTENT: Record<string, {
  intro: string
  problemas: string[]
  tips: string[]
}> = {
  hosteleria: {
    intro: 'En hostelería, la diferencia entre sobrevivir y ganar dinero se juega en los márgenes de cada plato y en el control del gasto semanal. El food cost descontrolado, los menús que no se han revisado en años y el personal mal dimensionado son los tres agujeros más comunes.',
    problemas: [
      'Food cost por encima del 35%: compras sin escandallar, merma sin registrar',
      'Carta con platos que pierden dinero sin que el dueño lo sepa',
      'Personal sobredimensionado en horas muertas y escaso en las punta',
      'Bebidas y extras sin margen o sin control de stock',
      'Precio de menú del día que no cubre los costes reales',
    ],
    tips: [
      'Calcula el escandallo de los 5 platos más vendidos antes de revisar el resto',
      'El food cost objetivo en restaurante de menú está entre 28-33%',
      'Revisa el precio del menú del día cada 6 meses mínimo',
    ],
  },
  retail: {
    intro: 'El comercio local compite con Amazon y las grandes superficies. Ganar no está en el precio — está en el servicio, la experiencia y el conocimiento del cliente. El gran error es intentar competir en precio y destruir el margen.',
    problemas: [
      'Margen por producto desconocido: se compra sin saber si se gana',
      'Stock muerto inmovilizado que consume caja sin generar ventas',
      'Descuentos habituales que reducen el margen sin aumentar la fidelidad',
      'Rotación de inventario lenta que dispara los costes de almacén',
      'Ticket medio estancado sin estrategia de upselling',
    ],
    tips: [
      'Identifica el 20% de productos que generan el 80% del margen y dales protagonismo',
      'Liquida el stock muerto aunque sea a precio de coste — el dinero inmovilizado cuesta más',
      'El margen bruto en retail debería estar entre 40-60% según categoría',
    ],
  },
  servicios: {
    intro: 'Los negocios de servicios tienen el mayor potencial de margen — y el mayor riesgo de cobrarlo a ojo. El tiempo es el único recurso que no se recupera. Cobrarlo mal o regalarlo a clientes que consumen más de lo contratado destruye la rentabilidad sin que los números lo muestren claramente.',
    problemas: [
      'Precio hora calculado sin incluir todos los costes (solo se cuenta el tiempo directo)',
      'Clientes que consumen el doble de tiempo del presupuestado sin cobrarlo',
      'Presupuestos a tanto alzado que se convierten en trampas de rentabilidad',
      'Dificultad para subir tarifas aunque los costes hayan subido',
      'Falta de sistema para medir cuánto cuesta cada proyecto real',
    ],
    tips: [
      'Tu precio hora mínimo = (costes fijos mensuales / horas facturables al mes) + margen',
      'Documenta el tiempo real de cada proyecto durante 3 meses — los resultados suelen sorprender',
      'Los servicios bien diferenciados aguantan subidas de precio del 15-25% sin perder clientes',
    ],
  },
  taller: {
    intro: 'En talleres y oficios, la rentabilidad se esconde en los presupuestos. Un presupuesto mal calculado puede convertir un trabajo de una semana en una pérdida. El tiempo y los materiales son los dos frentes críticos.',
    problemas: [
      'Presupuestos que no incluyen el coste real de la mano de obra del dueño',
      'Materiales comprados sin contabilizar merma ni transporte',
      'Trabajos que se alargan más de lo previsto sin cobrar el extra',
      'Precio hora por debajo del mercado para "ser competitivo"',
      'Falta de control de horas por proyecto para saber qué trabajos son rentables',
    ],
    tips: [
      'Registra las horas reales de cada trabajo durante 3 meses: descubrirás cuáles son rentables',
      'El precio hora en taller debería cubrir: materiales + mano de obra + overhead + beneficio',
      'Un 10% extra en el presupuesto por imprevistos suele ser insuficiente — usa el 15-20%',
    ],
  },
  'salud-bienestar': {
    intro: 'Las clínicas y centros de bienestar tienen costes fijos altos (local, equipamiento, seguros) y una estructura de ingresos muy dependiente de la ocupación. La rentabilidad se juega en la tasa de ocupación y en el precio por sesión.',
    problemas: [
      'Precio por sesión heredado del mercado sin calcular la estructura de costes propia',
      'No-shows y cancelaciones sin política de penalización',
      'Equipamiento amortizado que no se imputa al precio del servicio',
      'Alta dependencia de pocos clientes con riesgo de fuga',
      'Horarios con horas vacías que generan costes sin ingresos',
    ],
    tips: [
      'Calcula el coste por hora de sala o equipamiento y súmalo al precio del servicio',
      'Una política de cancelación con 24h de antelación reduce los no-shows un 60-70%',
      'El bono o suscripción mensual mejora la previsibilidad y reduce la rotación',
    ],
  },
  inmobiliario: {
    intro: 'Las agencias inmobiliarias pequeñas compiten en un mercado donde el precio de la comisión es siempre el frente de batalla. Diferenciarse en servicio y comunicar bien el valor es la única vía para no entrar en la guerra de precios.',
    problemas: [
      'Operaciones que consumen muchos recursos sin proporcional retorno en comisión',
      'Clientes que comparan solo por precio de comisión sin valorar el servicio',
      'Sin sistema para medir el coste de captación de cada operación',
      'Dependencia de portales que suben tarifas y reducen el margen',
      'Dificultad para justificar la comisión ante compradores y vendedores',
    ],
    tips: [
      'Calcula el coste real de cada operación (tiempo + portales + marketing) para saber cuáles son rentables',
      'El argumentario de valor de la comisión es la herramienta de venta más infrautilizada en el sector',
      'Especialización en tipología o zona mejora el ratio de cierre y reduce el tiempo por operación',
    ],
  },
  peluqueria: {
    intro: 'Peluquerías y barberías tienen el problema más clásico: precio por servicio heredado del vecino de al lado, con el coste del producto sin imputar y el tiempo del dueño sin valorar. Es el sector donde más dinero se regala sin saberlo.',
    problemas: [
      'Precio por servicio fijado por la competencia, no por el coste real',
      'Coste de producto de cada servicio no imputado al precio',
      'Tiempo entre clientes (limpieza, preparación) sin considerar en la tarifa hora',
      'Servicios combo que cuestan más de lo que se cobra',
      'Dificultad para subir precios por miedo a perder clientes',
    ],
    tips: [
      'El coste del producto en peluquería suele representar un 8-15% del precio del servicio',
      'Sube precios un 10% a los clientes nuevos antes de subírselo a los habituales',
      'Un análisis de rentabilidad por servicio suele revelar que 2-3 servicios generan el 70% del margen',
    ],
  },
  formacion: {
    intro: 'Academias y centros de formación tienen el reto de la estacionalidad y el equilibrio entre grupos rentables y grupos pequeños que no cubren costes. La ocupación por aula y el coste por alumno son los dos KPIs que más importan.',
    problemas: [
      'Grupos pequeños que no cubren el coste del docente + aula',
      'Precio por curso calculado sin incluir material, overhead ni publicidad',
      'Alta estacionalidad que genera ingresos irregulares con costes fijos constantes',
      'Tasa de abandono que reduce los ingresos de suscripciones o mensualidades',
      'Dependencia de pocos cursos estrella con riesgo de obsolescencia',
    ],
    tips: [
      'Define el mínimo de alumnos por grupo para que el curso sea rentable antes de abrirlo',
      'El precio por alumno debe cubrir: docente + aula + material + overhead + margen',
      'Diversificar en formato online o híbrido reduce el riesgo de estacionalidad',
    ],
  },
  limpieza: {
    intro: 'Las empresas de limpieza y mantenimiento son intensivas en mano de obra. El margen lo determina la eficiencia del equipo y la correcta valoración de cada contrato. Un contrato mal presupuestado puede generar pérdidas durante meses.',
    problemas: [
      'Presupuestos de contrato calculados sin considerar todos los costes de personal (SS, formación, rotación)',
      'Ineficiencias en rutas y tiempos que reducen la productividad por hora',
      'Contratos a precio cerrado que absorben variaciones de precio de materiales',
      'Alta rotación de personal que dispara el coste de formación y errores',
      'Dificultad para subir precios en contratos ya firmados aunque suban los costes',
    ],
    tips: [
      'Incluye siempre un 10-12% del coste laboral para cubrir rotación, formación y sustituciones',
      'Mide la productividad por hora y por empleado para detectar ineficiencias',
      'Añade una cláusula de revisión anual de precios en todos los contratos nuevos',
    ],
  },
  alimentacion: {
    intro: 'En alimentación, el margen es ajustado por definición. La clave está en el control de la merma, la gestión del stock y la diferenciación en producto fresco o especialidad. Competir en precio con grandes superficies es perder siempre.',
    problemas: [
      'Merma no registrada que reduce el margen real sin que aparezca en las cuentas',
      'Rotación de stock deficiente con producto caducado o degradado',
      'Márgenes muy ajustados en productos básicos sin compensar con especialidad',
      'Pedidos mal dimensionados que generan exceso o ruptura de stock',
      'Precio final que no refleja el coste real de la merma y manipulación',
    ],
    tips: [
      'Registra la merma diaria por categoría durante un mes — los datos suelen sorprender',
      'Los productos de especialidad (quesos, embutidos, frescos de calidad) tienen margen 2-3x mayor que básicos',
      'Un sistema de pedido basado en histórico de ventas reduce la merma un 20-30%',
    ],
  },
  transporte: {
    intro: 'El transporte y la logística tienen costes muy explícitos (combustible, mantenimiento, seguro) pero también costes ocultos que muchos no calculan: tiempos muertos, kilómetros vacíos y mantenimiento diferido. El coste por kilómetro real es el número fundamental.',
    problemas: [
      'Coste por kilómetro desconocido: se negocia precio de porte sin saber si es rentable',
      'Kilómetros vacíos (de vuelta) que no se imputan al precio del servicio',
      'Mantenimiento diferido que dispara costes cuando aparece la avería',
      'Cargas aceptadas por debajo del coste mínimo por no perder el cliente',
      'Flota sobredimensionada con vehículos subutilizados que generan costes fijos',
    ],
    tips: [
      'Tu coste por km = (combustible + mantenimiento + seguro + amortización + tu tiempo) / km totales al mes',
      'Los kilómetros vacíos de vuelta deben imputarse parcialmente al precio del porte de ida',
      'Revisa las tarifas cada trimestre comparando con la variación del precio del combustible',
    ],
  },
  ocio: {
    intro: 'Los negocios de ocio tienen alta inversión inicial y costes fijos muy elevados. La rentabilidad depende de la ocupación. Un escape room vacío tiene el mismo coste fijo que uno lleno. Gestionar la demanda y el precio según temporada es fundamental.',
    problemas: [
      'Alta inversión inicial que tarda en amortizarse si el precio de entrada es bajo',
      'Costes fijos muy altos frente a ingresos variables por temporada',
      'Precio de entrada fijo que no varía por franja horaria ni temporada',
      'Dependencia de fines de semana con subutilización entre semana',
      'Sin sistema para medir el coste real por experiencia o sesión',
    ],
    tips: [
      'La tarificación dinámica (precio distinto por día/hora) mejora la ocupación media un 15-25%',
      'Calcula el coste fijo por sesión: divide tus costes fijos mensuales entre el número máximo de sesiones al mes',
      'Los bonos y paquetes de grupo mejoran la previsibilidad y el ticket medio',
    ],
  },
}

export async function generateStaticParams() {
  return SECTORES.map((s) => ({ sector: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = SECTORES.find((s) => s.slug === params.sector)
  if (!sector) return {}
  return {
    title: `${sector.name} — Estrategias de rentabilidad | Foco Rentabilismo`,
    description: `Problemas típicos y estrategias de rentabilidad para ${sector.name.toLowerCase()}. Casos reales, soluciones concretas.`,
    alternates: { canonical: `${BASE_URL}/sectores/${sector.slug}/` },
  }
}

export default function SectorPage({ params }: Props) {
  const sector = SECTORES.find((s) => s.slug === params.sector)
  if (!sector) notFound()

  const content = SECTOR_CONTENT[params.sector]
  const posts = getAllPosts().filter((p) => p.sector === sector.id)

  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera */}
      <div className="border-b-2 border-teal-500 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/sectores/"
            className="text-xs font-bold text-teal-600 uppercase tracking-widest hover:text-teal-800 transition-colors"
          >
            ← Todos los sectores
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-3">{sector.name}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{sector.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div>
            {content && (
              <>
                {/* Intro */}
                <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 mb-10">
                  <p className="text-gray-800 leading-relaxed">{content.intro}</p>
                </div>

                {/* Problemas típicos */}
                <div className="mb-10">
                  <h2 className="text-xl font-black text-gray-900 mb-5">
                    Problemas más comunes en {sector.name.toLowerCase()}
                  </h2>
                  <ul className="space-y-3">
                    {content.problemas.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 text-xs font-black flex items-center justify-center">!</span>
                        <span className="text-gray-700 text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips clave */}
                <div className="mb-12 bg-orange-50 border border-orange-100 rounded-2xl p-6">
                  <h2 className="text-base font-black text-gray-900 mb-4 uppercase tracking-wide">
                    Claves para mejorar la rentabilidad
                  </h2>
                  <ul className="space-y-3">
                    {content.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 shrink-0 text-orange-500 font-black text-sm">→</span>
                        <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Posts del sector */}
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-8">
              {posts.length > 0
                ? `${posts.length} artículo${posts.length !== 1 ? 's' : ''} sobre ${sector.name.toLowerCase()}`
                : `Artículos sobre ${sector.name.toLowerCase()}`}
            </h2>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <p className="text-gray-400 mb-2">Próximamente artículos específicos para {sector.name.toLowerCase()}.</p>
                <Link
                  href="/blog/"
                  className="text-sm text-teal-600 hover:underline font-semibold"
                >
                  Ver todos los artículos →
                </Link>
              </div>
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
