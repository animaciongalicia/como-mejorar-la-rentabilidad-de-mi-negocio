// Mapa del ecosistema de webs — focorentabilismo.com / rentabilismo.com / consultoriametodo.es
// Usado para generar CTAs editoriales naturales entre sitios.
// NO es una red artificial: cada enlace tiene motivo editorial real.

interface EcosystemProduct {
  name: string
  url: string             // URL relativa al sitio
  pilares: string[]       // 'all' = relevante para todos los pilares
  description: string
}

interface EcosystemSite {
  url: string
  description: string
  products?: EcosystemProduct[]
  services?: EcosystemProduct[]
}

export const ECOSYSTEM: Record<string, EcosystemSite> = {
  focorentabilismo: {
    url: 'https://focorentabilismo.com',
    description: 'Blog de referencia sobre rentabilidad empresarial para pymes',
  },
  rentabilismo: {
    url: 'https://rentabilismo.com',
    description: 'El método y los productos para mejorar la rentabilidad de tu negocio',
    products: [
      {
        name: 'Curso Rentabilismo',
        url: '/curso',
        pilares: ['diagnostico', 'costes', 'precios-margenes', 'ventas', 'finanzas'],
        description: 'El método completo para transformar la rentabilidad de tu negocio',
      },
      {
        name: 'Consultoría Guiada',
        url: '/consultoria',
        pilares: ['all'],
        description: 'Acompañamiento personalizado para aplicar el método a tu negocio',
      },
      {
        name: 'Herramientas Premium',
        url: '/herramientas',
        pilares: ['procesos', 'finanzas', 'costes', 'precios-margenes'],
        description: 'Calculadoras y plantillas para optimizar tu negocio',
      },
    ],
  },
  consultoriametodo: {
    url: 'https://consultoriametodo.es',
    description: 'Consultoría real y servicios profesionales en Galicia',
    services: [
      {
        name: 'Diagnóstico Express',
        url: '/diagnostico',
        pilares: ['diagnostico', 'rentabilidad-real'],
        description: 'Análisis rápido de los puntos de fuga de tu negocio',
      },
      {
        name: 'Acompañamiento Mensual',
        url: '/acompanamiento',
        pilares: ['all'],
        description: 'Trabajo directo contigo cada mes para mejorar resultados',
      },
      {
        name: 'Formación In-Company',
        url: '/formacion',
        pilares: ['procesos', 'ventas', 'equipo'],
        description: 'Formación práctica para tu equipo en rentabilidad y procesos',
      },
    ],
  },
}

// Devuelve los enlaces del ecosistema relevantes para un pilar concreto.
// Uso: mostrar CTAs editoriales al final de artículos por pilar.
export function getEcosystemLinksForPilar(pilar: string) {
  const result: Array<{ site: string; siteUrl: string; items: EcosystemProduct[] }> = []

  for (const [site, data] of Object.entries(ECOSYSTEM)) {
    if (site === 'focorentabilismo') continue
    const allItems = [...(data.products || []), ...(data.services || [])]
    const relevant = allItems.filter(
      (item) => item.pilares.includes('all') || item.pilares.includes(pilar)
    )
    if (relevant.length > 0) {
      result.push({ site, siteUrl: data.url, items: relevant })
    }
  }

  return result
}
