'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Pregunta {
  id: number
  texto: string
  area: string
  opciones: { texto: string; puntos: number }[]
}

const PREGUNTAS: Pregunta[] = [
  {
    id: 1,
    texto: '¿Sabes exactamente cuánto te queda a ti de cada euro que factura tu negocio?',
    area: 'margen',
    opciones: [
      { texto: 'No lo sé con precisión', puntos: 0 },
      { texto: 'Lo sé aproximadamente', puntos: 1 },
      { texto: 'Lo calculo producto a producto', puntos: 2 },
    ],
  },
  {
    id: 2,
    texto: '¿Cuándo fijaste tus precios por última vez y cómo lo hiciste?',
    area: 'precios',
    opciones: [
      { texto: 'Hace más de 2 años o mirando a la competencia', puntos: 0 },
      { texto: 'El año pasado, con algún ajuste', puntos: 1 },
      { texto: 'Los reviso regularmente desde mis costes reales', puntos: 2 },
    ],
  },
  {
    id: 3,
    texto: '¿Sabes cuánto tienes que facturar cada mes para no perder dinero?',
    area: 'costes',
    opciones: [
      { texto: 'No tengo esa cifra calculada', puntos: 0 },
      { texto: 'Tengo una idea aproximada', puntos: 1 },
      { texto: 'Lo tengo calculado con precisión', puntos: 2 },
    ],
  },
  {
    id: 4,
    texto: 'Cuando tienes un mes con buenas ventas, ¿el dinero en cuenta lo refleja?',
    area: 'gestion',
    opciones: [
      { texto: 'Rara vez — las ventas van bien pero el dinero no aparece', puntos: 0 },
      { texto: 'A veces sí, a veces no, sin entender bien por qué', puntos: 1 },
      { texto: 'Sí, hay correlación clara', puntos: 2 },
    ],
  },
  {
    id: 5,
    texto: '¿Sabes qué productos o servicios son los más rentables de tu negocio?',
    area: 'margen',
    opciones: [
      { texto: 'Vendo de todo sin saber cuál deja más margen', puntos: 0 },
      { texto: 'Tengo una idea pero sin haberlo calculado bien', puntos: 1 },
      { texto: 'Sé con precisión qué me conviene vender más', puntos: 2 },
    ],
  },
  {
    id: 6,
    texto: '¿Has subido precios en los últimos 2 años?',
    area: 'precios',
    opciones: [
      { texto: 'No, tengo miedo de perder clientes', puntos: 0 },
      { texto: 'Subí algo pero poco y sin estrategia', puntos: 1 },
      { texto: 'Sí, con una estrategia y comunicación clara', puntos: 2 },
    ],
  },
  {
    id: 7,
    texto: '¿Tienes controlados tus costes fijos mensuales?',
    area: 'costes',
    opciones: [
      { texto: 'Sé que los tengo pero no los controlo bien', puntos: 0 },
      { texto: 'Los reviso de vez en cuando', puntos: 1 },
      { texto: 'Tengo un registro mensual y los comparo', puntos: 2 },
    ],
  },
  {
    id: 8,
    texto: '¿Sabes qué clientes son realmente rentables para tu negocio?',
    area: 'margen',
    opciones: [
      { texto: 'No lo he analizado nunca', puntos: 0 },
      { texto: 'Me fío de la intuición, sin datos', puntos: 1 },
      { texto: 'Sé exactamente qué clientes me dejan más margen', puntos: 2 },
    ],
  },
  {
    id: 9,
    texto: '¿Cómo describes tu situación al final del mes?',
    area: 'gestion',
    opciones: [
      { texto: 'Trabajo mucho pero al final sobra poco', puntos: 0 },
      { texto: 'Hay meses buenos y malos sin entender por qué', puntos: 1 },
      { texto: 'El resultado es predecible y entiendo los desvíos', puntos: 2 },
    ],
  },
  {
    id: 10,
    texto: '¿Tienes algún indicador o herramienta para tomar decisiones financieras?',
    area: 'gestion',
    opciones: [
      { texto: 'Tomo decisiones mirando el saldo del banco', puntos: 0 },
      { texto: 'Uso alguna hoja de cálculo básica', puntos: 1 },
      { texto: 'Tengo KPIs clave que reviso cada mes', puntos: 2 },
    ],
  },
]

interface Resultado {
  nivel: 'critico' | 'mejorable' | 'controlado'
  titulo: string
  descripcion: string
  areasDebiles: string[]
  acciones: { texto: string; href: string; label: string }[]
}

const AREA_LABELS: Record<string, string> = {
  margen: 'Margen y rentabilidad por producto',
  precios: 'Fijación de precios',
  costes: 'Control de costes',
  gestion: 'Gestión financiera',
}

function calcularResultado(respuestas: Record<number, number>): Resultado {
  const total = Object.values(respuestas).reduce((s, v) => s + v, 0)

  const porArea: Record<string, { suma: number; max: number }> = {
    margen: { suma: 0, max: 0 },
    precios: { suma: 0, max: 0 },
    costes: { suma: 0, max: 0 },
    gestion: { suma: 0, max: 0 },
  }
  PREGUNTAS.forEach((p) => {
    const puntos = respuestas[p.id] ?? 0
    porArea[p.area].suma += puntos
    porArea[p.area].max += 2
  })

  const areasDebiles = Object.entries(porArea)
    .filter(([, v]) => v.suma / v.max < 0.4)
    .map(([k]) => k)

  if (total <= 7) {
    return {
      nivel: 'critico',
      titulo: 'Diagnóstico urgente — hay fugas importantes',
      descripcion:
        'Tu negocio tiene varios frentes abiertos que están drenando rentabilidad sin que lo veas claramente. No es un problema de ventas: es un problema de estructura. La buena noticia es que hay margen de mejora grande con cambios concretos.',
      areasDebiles,
      acciones: [
        { texto: 'Analiza con el Agente Diagnóstico', href: '/agentes/diagnostico-rentabilidad/', label: 'Usar agente →' },
        { texto: 'Revisa tus costes con el Agente Costes', href: '/agentes/control-costes/', label: 'Usar agente →' },
        { texto: 'Calcula tu punto de equilibrio', href: '/blog/calculadora-punto-equilibrio-negocio/', label: 'Ver calculadora →' },
      ],
    }
  }

  if (total <= 13) {
    return {
      nivel: 'mejorable',
      titulo: 'En camino — hay áreas concretas que mejorar',
      descripcion:
        'Tienes las bases pero hay áreas específicas sin controlar que están limitando tu beneficio. Identificarlas y actuar sobre ellas puede tener un impacto significativo en pocos meses sin necesitar más ventas.',
      areasDebiles,
      acciones: [
        { texto: 'Revisa tus precios con el Agente Precios', href: '/agentes/calculadora-precios/', label: 'Usar agente →' },
        { texto: 'Analiza qué productos son más rentables', href: '/herramientas/analizador-productos/', label: 'Usar herramienta →' },
        { texto: 'Diagnostica fugas de margen', href: '/agentes/diagnostico-rentabilidad/', label: 'Usar agente →' },
      ],
    }
  }

  return {
    nivel: 'controlado',
    titulo: 'Buen control — los ajustes finos marcan la diferencia',
    descripcion:
      'Tu negocio está bien controlado. Tienes visibilidad sobre lo que pasa y por qué. Los ajustes de aquí son más finos pero en negocios con buen control, pequeñas mejoras de margen se traducen directamente en más beneficio.',
    areasDebiles,
    acciones: [
      { texto: 'Optimiza el mix de productos', href: '/herramientas/analizador-productos/', label: 'Usar herramienta →' },
      { texto: 'Mejora el argumentario de ventas', href: '/agentes/guion-ventas/', label: 'Usar agente →' },
      { texto: 'Analiza rentabilidad por cliente', href: '/herramientas/rentabilidad-clientes/', label: 'Usar herramienta →' },
    ],
  }
}

const NIVEL_STYLES = {
  critico: { bg: 'bg-red-50', border: 'border-red-300', titulo: 'text-red-800', badge: 'bg-red-100 text-red-700 border-red-200' },
  mejorable: { bg: 'bg-amber-50', border: 'border-amber-300', titulo: 'text-amber-800', badge: 'bg-amber-100 text-amber-700 border-amber-200' },
  controlado: { bg: 'bg-green-50', border: 'border-green-300', titulo: 'text-green-800', badge: 'bg-green-100 text-green-700 border-green-200' },
}

export default function TestDiagnosticoRentabilidad() {
  const [paso, setPaso] = useState<'test' | 'resultado'>('test')
  const [actual, setActual] = useState(0)
  const [respuestas, setRespuestas] = useState<Record<number, number>>({})
  const [seleccionada, setSeleccionada] = useState<number | null>(null)

  const pregunta = PREGUNTAS[actual]
  const total = PREGUNTAS.length
  const progreso = Math.round((actual / total) * 100)
  const respondidas = Object.keys(respuestas).length

  function elegir(puntos: number) {
    setSeleccionada(puntos)
  }

  function siguiente() {
    if (seleccionada === null) return
    const nuevas = { ...respuestas, [pregunta.id]: seleccionada }
    setRespuestas(nuevas)
    setSeleccionada(null)
    if (actual + 1 < total) {
      setActual(actual + 1)
    } else {
      setPaso('resultado')
    }
  }

  function reiniciar() {
    setPaso('test')
    setActual(0)
    setRespuestas({})
    setSeleccionada(null)
  }

  if (paso === 'resultado') {
    const resultado = calcularResultado(respuestas)
    const puntuacion = Object.values(respuestas).reduce((s, v) => s + v, 0)
    const estilos = NIVEL_STYLES[resultado.nivel]

    return (
      <div className="my-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="bg-orange-600 px-6 py-4">
          <h3 className="text-lg font-black text-white">Resultado del diagnóstico</h3>
          <p className="text-sm text-orange-100 mt-1">Puntuación: {puntuacion} de 20 puntos</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Puntuación visual */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-2xl font-black text-gray-900">{puntuacion}</span>
            </div>
            <div>
              <div className="w-full bg-gray-100 rounded-full h-3 mb-2" style={{ maxWidth: 300 }}>
                <div
                  className={`h-3 rounded-full ${resultado.nivel === 'critico' ? 'bg-red-500' : resultado.nivel === 'mejorable' ? 'bg-amber-400' : 'bg-green-500'}`}
                  style={{ width: `${(puntuacion / 20) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-400">0 — 7 urgente · 8 — 13 mejorable · 14 — 20 controlado</p>
            </div>
          </div>

          {/* Diagnóstico principal */}
          <div className={`rounded-xl border p-5 ${estilos.bg} ${estilos.border}`}>
            <p className={`font-black text-lg mb-2 ${estilos.titulo}`}>{resultado.titulo}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{resultado.descripcion}</p>
          </div>

          {/* Áreas débiles */}
          {resultado.areasDebiles.length > 0 && (
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                Áreas prioritarias
              </p>
              <div className="flex flex-wrap gap-2">
                {resultado.areasDebiles.map((area) => (
                  <span key={area} className={`text-xs font-bold px-3 py-1 rounded-full border ${estilos.badge}`}>
                    {AREA_LABELS[area]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Acciones */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
              Próximos pasos recomendados
            </p>
            <div className="space-y-2">
              {resultado.acciones.map((accion, i) => (
                <Link
                  key={i}
                  href={accion.href}
                  className="flex items-center justify-between bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-lg px-4 py-3 transition-all group"
                >
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-800">
                    {accion.texto}
                  </span>
                  <span className="text-xs font-bold text-orange-600 whitespace-nowrap ml-3">
                    {accion.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={reiniciar}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Repetir el test
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="bg-orange-600 px-6 py-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-black text-white">Test de diagnóstico de rentabilidad</h3>
          <span className="text-sm font-bold text-orange-200">{actual + 1} / {total}</span>
        </div>
        <div className="w-full bg-orange-800 rounded-full h-1.5 mt-2">
          <div
            className="bg-white rounded-full h-1.5 transition-all duration-300"
            style={{ width: `${progreso}%` }}
          />
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">
          Pregunta {actual + 1} de {total}
        </p>
        <p className="text-xl font-black text-gray-900 leading-tight mb-6">
          {pregunta.texto}
        </p>

        <div className="space-y-3 mb-6">
          {pregunta.opciones.map((opcion, i) => (
            <button
              key={i}
              onClick={() => elegir(opcion.puntos)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm leading-snug font-medium ${
                seleccionada === opcion.puntos
                  ? 'border-orange-500 bg-orange-50 text-orange-900'
                  : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50 text-gray-700'
              }`}
            >
              <span className="font-black text-gray-400 mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {opcion.texto}
            </button>
          ))}
        </div>

        <button
          onClick={siguiente}
          disabled={seleccionada === null}
          className={`w-full py-3.5 rounded-xl font-black text-base transition-all ${
            seleccionada !== null
              ? 'bg-orange-600 hover:bg-orange-700 text-white'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {actual + 1 < total ? 'Siguiente pregunta →' : 'Ver resultado →'}
        </button>

        {respondidas > 0 && (
          <p className="text-xs text-gray-400 text-center mt-3">
            {respondidas} de {total} preguntas respondidas
          </p>
        )}
      </div>
    </div>
  )
}
