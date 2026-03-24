import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { PILLARS, SECTORES } from '@/lib/clusters'
import { BASE_URL } from '@/lib/seo'

const HERRAMIENTAS_SLUGS = [
  'diagnostico-negocio',
  'avatar-cliente',
  'analiza-tu-idea',
  'margen-carta',
  'analizador-productos',
  'rentabilidad-clientes',
  'rentabilidad-taller',
  'rentabilidad-sesiones',
  'margen-alimentacion',
]

const AGENTES_SLUGS = [
  'diagnostico-rentabilidad',
  'calculadora-precios',
  'guion-ventas',
  'control-costes',
  'analista-competencia',
  'escandallos-hosteleria',
  'agente-bienestar',
  'agente-alimentacion',
]

const MINICURSOS_SLUGS = [
  'escandallo-basico',
  'punto-equilibrio',
  'escandallo-hosteleria',
  'carta-rentable',
  'rentabilidad-taller',
  'estructurar-servicios',
  'productos-estrella',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const pilarEntries: MetadataRoute.Sitemap = PILLARS.map((pillar) => ({
    url: `${BASE_URL}/pilares/${pillar.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const sectorEntries: MetadataRoute.Sitemap = SECTORES.map((sector) => ({
    url: `${BASE_URL}/sectores/${sector.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const herramientasEntries: MetadataRoute.Sitemap = HERRAMIENTAS_SLUGS.map((slug) => ({
    url: `${BASE_URL}/herramientas/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const agentesEntries: MetadataRoute.Sitemap = AGENTES_SLUGS.map((slug) => ({
    url: `${BASE_URL}/agentes/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const minicursosEntries: MetadataRoute.Sitemap = MINICURSOS_SLUGS.map((slug) => ({
    url: `${BASE_URL}/minicursos/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pilares/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/herramientas/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agentes/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/minicursos/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sectores/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/casos-practicos/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/aviso-legal/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-privacidad/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-cookies/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    ...pilarEntries,
    ...herramientasEntries,
    ...agentesEntries,
    ...minicursosEntries,
    ...sectorEntries,
    ...postEntries,
  ]
}
