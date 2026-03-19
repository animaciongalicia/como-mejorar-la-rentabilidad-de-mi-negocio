// Configuración central de categorías.
// Importar desde aquí en todos los componentes — nunca duplicar este map.

export interface CategoryConfig {
  label: string
  description: string
  color: string        // Tailwind bg color class para el badge
  textColor: string    // Tailwind text color class
  hoverColor: string   // Tailwind hover bg class
  emoji: string        // Emoji representativo (para uso interno, nunca en producción sin permiso)
}

export const CATEGORIES: Record<string, CategoryConfig> = {
  'diagnostico-empresarial': {
    label: 'Diagnóstico',
    description: 'Cómo saber exactamente qué le falla a tu negocio antes de tomar decisiones.',
    color: 'bg-violet-100',
    textColor: 'text-violet-700',
    hoverColor: 'hover:bg-violet-200',
    emoji: '🔍',
  },
  'precios-y-margenes': {
    label: 'Precios y Márgenes',
    description: 'Cómo poner precio, defender el margen y dejar de malvender tu trabajo.',
    color: 'bg-orange-100',
    textColor: 'text-orange-700',
    hoverColor: 'hover:bg-orange-200',
    emoji: '💰',
  },
  costes: {
    label: 'Costes',
    description: 'Reducir costes sin perder calidad. Métodos prácticos para pymes.',
    color: 'bg-red-100',
    textColor: 'text-red-700',
    hoverColor: 'hover:bg-red-200',
    emoji: '📉',
  },
  ventas: {
    label: 'Ventas',
    description: 'Vender más a los clientes que ya tienes y atraer los que necesitas.',
    color: 'bg-green-100',
    textColor: 'text-green-700',
    hoverColor: 'hover:bg-green-200',
    emoji: '📈',
  },
  rentabilidad: {
    label: 'Rentabilidad',
    description: 'Estrategias para mejorar el beneficio real de tu negocio físico.',
    color: 'bg-teal-100',
    textColor: 'text-teal-700',
    hoverColor: 'hover:bg-teal-200',
    emoji: '🎯',
  },
  procesos: {
    label: 'Procesos',
    description: 'Operaciones y sistemas para que tu negocio funcione sin depender de ti.',
    color: 'bg-blue-100',
    textColor: 'text-blue-700',
    hoverColor: 'hover:bg-blue-200',
    emoji: '⚙️',
  },
  'marketing-rentable': {
    label: 'Marketing',
    description: 'Marketing barato y efectivo para negocios físicos y locales.',
    color: 'bg-pink-100',
    textColor: 'text-pink-700',
    hoverColor: 'hover:bg-pink-200',
    emoji: '📣',
  },
  'dinero-personal-empresario': {
    label: 'Dinero del Dueño',
    description: 'El sueldo, la fiscalidad y la financiación personal del propietario.',
    color: 'bg-amber-100',
    textColor: 'text-amber-700',
    hoverColor: 'hover:bg-amber-200',
    emoji: '🧾',
  },
  finanzas: {
    label: 'Finanzas',
    description: 'Gestión financiera práctica para propietarios de pymes. Sin tecnicismos.',
    color: 'bg-cyan-100',
    textColor: 'text-cyan-700',
    hoverColor: 'hover:bg-cyan-200',
    emoji: '📊',
  },
  operaciones: {
    label: 'Operaciones',
    description: 'Más eficiencia y menos desperdicio de recursos en tu negocio.',
    color: 'bg-slate-100',
    textColor: 'text-slate-700',
    hoverColor: 'hover:bg-slate-200',
    emoji: '🔧',
  },
  estrategia: {
    label: 'Estrategia',
    description: 'Decisiones estratégicas de posicionamiento y crecimiento.',
    color: 'bg-indigo-100',
    textColor: 'text-indigo-700',
    hoverColor: 'hover:bg-indigo-200',
    emoji: '♟️',
  },
}

// Orden de categorías en el menú de navegación (las más frecuentes primero)
export const CATEGORY_NAV_ORDER = [
  'diagnostico-empresarial',
  'precios-y-margenes',
  'costes',
  'ventas',
  'rentabilidad',
  'procesos',
  'marketing-rentable',
  'dinero-personal-empresario',
]

export function getCategoryConfig(slug: string): CategoryConfig {
  return (
    CATEGORIES[slug] || {
      label: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
      description: `Artículos sobre ${slug} en Foco Rentabilismo.`,
      color: 'bg-gray-100',
      textColor: 'text-gray-700',
      hoverColor: 'hover:bg-gray-200',
      emoji: '📌',
    }
  )
}

export function getCategoryLabel(slug: string): string {
  return getCategoryConfig(slug).label
}
