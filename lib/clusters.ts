export const PILLARS = [
  {
    id: 'diagnostico',
    name: 'Diagnóstico empresarial',
    slug: 'diagnostico-empresarial',
    description: 'Aprende a radiografiar tu negocio para detectar fugas de dinero y oportunidades ocultas.',
    clusters: ['analisis-financiero', 'kpis', 'punto-muerto', 'rentabilidad-real']
  },
  {
    id: 'precios-margenes',
    name: 'Precios y márgenes',
    slug: 'precios-y-margenes',
    description: 'Domina el arte de fijar precios que vendan y que ganen dinero.',
    clusters: ['calculo-precios', 'margen-bruto', 'margen-contribucion', 'psicologia-precios']
  },
  {
    id: 'costes',
    name: 'Costes',
    slug: 'costes',
    description: 'Controla tus costes sin destruir tu negocio ni tu equipo.',
    clusters: ['costes-fijos', 'costes-variables', 'reduccion-costes', 'costes-ocultos']
  },
  {
    id: 'ventas',
    name: 'Ventas',
    slug: 'ventas',
    description: 'Vende más y mejor sin depender de descuentos ni de suerte.',
    clusters: ['ticket-medio', 'conversion', 'fidelizacion', 'upselling']
  },
  {
    id: 'procesos',
    name: 'Procesos',
    slug: 'procesos',
    description: 'Los procesos correctos son la diferencia entre un negocio que te libera y uno que te esclaviza.',
    clusters: ['automatizacion', 'estandarizacion', 'productividad', 'operaciones']
  },
  {
    id: 'personas',
    name: 'Personas',
    slug: 'personas',
    description: 'Tu equipo puede multiplicar o destruir tu rentabilidad. Aquí aprendes a gestionarlo.',
    clusters: ['liderazgo', 'productividad-equipo', 'motivacion', 'contratacion']
  },
  {
    id: 'marketing-rentable',
    name: 'Marketing rentable',
    slug: 'marketing-rentable',
    description: 'Marketing que genera retorno, no solo visibilidad.',
    clusters: ['roi-marketing', 'captacion-clientes', 'fidelizacion', 'marketing-local']
  },
  {
    id: 'herramientas',
    name: 'Herramientas',
    slug: 'herramientas',
    description: 'Las herramientas que usan los negocios rentables para gestionar mejor con menos.',
    clusters: ['excel-negocio', 'software-gestion', 'dashboards', 'kpis-practicos']
  },
  {
    id: 'sectorial',
    name: 'Sectorial',
    slug: 'sectorial',
    description: 'Estrategias específicas para tu tipo de negocio.',
    clusters: ['hosteleria', 'retail', 'servicios', 'taller']
  },
  {
    id: 'emprendimiento',
    name: 'Emprendimiento',
    slug: 'emprendimiento',
    description: 'Montar un negocio rentable desde el principio, no a base de errores caros.',
    clusters: ['validacion', 'modelo-negocio', 'primeros-pasos', 'errores-comunes']
  },
  {
    id: 'capacidad-empresarial',
    name: 'Capacidad empresarial',
    slug: 'capacidad-empresarial',
    description: 'Las habilidades mentales y estratégicas que separan a los negocios que crecen de los que sobreviven.',
    clusters: ['mentalidad', 'toma-decisiones', 'vision', 'resiliencia']
  },
  {
    id: 'dinero-personal',
    name: 'Dinero personal del empresario',
    slug: 'dinero-personal-empresario',
    description: 'El negocio debe trabajar para ti. Aprende a gestionar tu dinero personal como dueño.',
    clusters: ['sueldo-empresario', 'finanzas-personales', 'separar-cuentas', 'riqueza']
  },
  {
    id: 'fases-negocio',
    name: 'Fases del negocio',
    slug: 'fases-del-negocio',
    description: 'Cada fase de un negocio tiene sus propios retos. Aquí los resolvemos uno a uno.',
    clusters: ['arranque', 'estabilizacion', 'crecimiento', 'consolidacion']
  }
]

export const CLUSTER_LABELS: Record<string, string> = {
  'analisis-financiero': 'Análisis financiero',
  'kpis': 'KPIs empresariales',
  'punto-muerto': 'Punto de equilibrio',
  'rentabilidad-real': 'Rentabilidad real',
  'calculo-precios': 'Cálculo de precios',
  'margen-bruto': 'Margen bruto',
  'margen-contribucion': 'Margen de contribución',
  'psicologia-precios': 'Psicología de precios',
  'costes-fijos': 'Costes fijos',
  'costes-variables': 'Costes variables',
  'reduccion-costes': 'Reducción de costes',
  'costes-ocultos': 'Costes ocultos',
  'ticket-medio': 'Ticket medio',
  'conversion': 'Conversión',
  'fidelizacion': 'Fidelización',
  'upselling': 'Upselling y cross-selling',
  'automatizacion': 'Automatización',
  'estandarizacion': 'Estandarización',
  'productividad': 'Productividad',
  'operaciones': 'Operaciones',
  'liderazgo': 'Liderazgo',
  'productividad-equipo': 'Productividad del equipo',
  'motivacion': 'Motivación',
  'contratacion': 'Contratación',
  'roi-marketing': 'ROI del marketing',
  'captacion-clientes': 'Captación de clientes',
  'marketing-local': 'Marketing local',
  'excel-negocio': 'Excel para el negocio',
  'software-gestion': 'Software de gestión',
  'dashboards': 'Dashboards',
  'kpis-practicos': 'KPIs prácticos',
  'hosteleria': 'Hostelería',
  'retail': 'Retail y comercio',
  'servicios': 'Negocios de servicios',
  'taller': 'Talleres y artesanía',
  'validacion': 'Validación de negocio',
  'modelo-negocio': 'Modelo de negocio',
  'primeros-pasos': 'Primeros pasos',
  'errores-comunes': 'Errores comunes',
  'mentalidad': 'Mentalidad empresarial',
  'toma-decisiones': 'Toma de decisiones',
  'vision': 'Visión estratégica',
  'resiliencia': 'Resiliencia empresarial',
  'sueldo-empresario': 'Sueldo del empresario',
  'finanzas-personales': 'Finanzas personales',
  'separar-cuentas': 'Separar cuentas',
  'riqueza': 'Construcción de riqueza',
  'arranque': 'Arranque del negocio',
  'estabilizacion': 'Estabilización',
  'crecimiento': 'Crecimiento',
  'consolidacion': 'Consolidación',
  'margenes': 'Márgenes'
}
