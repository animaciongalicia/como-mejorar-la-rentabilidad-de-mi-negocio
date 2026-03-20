// Configuración central de categorías = pilares principales.
// Un post pertenece a UN pilar. Estos 11 son la clasificación primaria.
// Importar desde aquí en todos los componentes — nunca duplicar este map.

export interface CategoryConfig {
  label: string
  description: string
  color: string        // Tailwind bg color class para el badge
  textColor: string    // Tailwind text color class
  hoverColor: string   // Tailwind hover bg class
  accentColor: string  // Color de acento para sección en home (Tailwind border/text)
}

// LOS 11 PILARES — clasificación principal de cada post
export const CATEGORIES: Record<string, CategoryConfig> = {
  'diagnostico-empresarial': {
    label: 'Diagnóstico',
    description: 'Radiografía de tu negocio. Detecta fugas y oportunidades antes de tomar decisiones.',
    color: 'bg-violet-100',
    textColor: 'text-violet-700',
    hoverColor: 'hover:bg-violet-200',
    accentColor: 'border-violet-500',
  },
  'precios-y-margenes': {
    label: 'Precios',
    description: 'Cómo poner precio, defender el margen y dejar de malvender tu trabajo.',
    color: 'bg-orange-100',
    textColor: 'text-orange-700',
    hoverColor: 'hover:bg-orange-200',
    accentColor: 'border-orange-500',
  },
  'productos-servicios': {
    label: 'Producto/Servicio',
    description: 'Lo que vendes importa. Cómo diseñar y diferenciar tu oferta para que no te comparen por precio.',
    color: 'bg-sky-100',
    textColor: 'text-sky-700',
    hoverColor: 'hover:bg-sky-200',
    accentColor: 'border-sky-500',
  },
  ventas: {
    label: 'Ventas',
    description: 'Vender más a los clientes que ya tienes y atraer los que necesitas. Sin descuentos, sin suerte.',
    color: 'bg-green-100',
    textColor: 'text-green-700',
    hoverColor: 'hover:bg-green-200',
    accentColor: 'border-green-500',
  },
  procesos: {
    label: 'Procesos',
    description: 'Operaciones y sistemas para que tu negocio funcione sin depender de ti.',
    color: 'bg-blue-100',
    textColor: 'text-blue-700',
    hoverColor: 'hover:bg-blue-200',
    accentColor: 'border-blue-500',
  },
  personas: {
    label: 'Personas',
    description: 'Tu equipo puede multiplicar o destruir tu rentabilidad. Gestión de personas y empleados.',
    color: 'bg-rose-100',
    textColor: 'text-rose-700',
    hoverColor: 'hover:bg-rose-200',
    accentColor: 'border-rose-500',
  },
  'marketing-rentable': {
    label: 'Publicidad/Marketing',
    description: 'Marketing que genera retorno, no solo visibilidad. Para negocios físicos y locales.',
    color: 'bg-pink-100',
    textColor: 'text-pink-700',
    hoverColor: 'hover:bg-pink-200',
    accentColor: 'border-pink-500',
  },
  emprendimiento: {
    label: 'Emprendimiento',
    description: 'Montar un negocio rentable desde el principio. Sin errores caros, sin perder el tiempo.',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    hoverColor: 'hover:bg-yellow-200',
    accentColor: 'border-yellow-500',
  },
  mentalidad: {
    label: 'Mentalidad',
    description: 'La cabeza del empresario es el primer negocio que hay que rentabilizar.',
    color: 'bg-indigo-100',
    textColor: 'text-indigo-700',
    hoverColor: 'hover:bg-indigo-200',
    accentColor: 'border-indigo-500',
  },
  liderazgo: {
    label: 'Liderazgo',
    description: 'Dirigir con claridad. Tomar decisiones, gestionar el equipo y crecer sin perder el norte.',
    color: 'bg-teal-100',
    textColor: 'text-teal-700',
    hoverColor: 'hover:bg-teal-200',
    accentColor: 'border-teal-500',
  },
  'dinero-personal-empresario': {
    label: 'Dinero Personal',
    description: 'El negocio debe trabajar para ti. Sueldo, fiscalidad y finanzas personales del dueño.',
    color: 'bg-amber-100',
    textColor: 'text-amber-700',
    hoverColor: 'hover:bg-amber-200',
    accentColor: 'border-amber-500',
  },
}

// Etiquetas secundarias — no aparecen en el menú, solo para relacionar posts internamente
// costes | finanzas-empresa | rentabilidad | estrategia | kpis | ticket-medio | margen | ...

// Orden de los 11 pilares en la barra de navegación del header
export const CATEGORY_NAV_ORDER = [
  'diagnostico-empresarial',
  'precios-y-margenes',
  'productos-servicios',
  'ventas',
  'procesos',
  'personas',
  'marketing-rentable',
  'emprendimiento',
  'mentalidad',
  'liderazgo',
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
      accentColor: 'border-gray-400',
    }
  )
}

export function getCategoryLabel(slug: string): string {
  return getCategoryConfig(slug).label
}
