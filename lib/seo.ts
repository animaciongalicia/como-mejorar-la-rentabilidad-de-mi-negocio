import type { Metadata } from 'next'
import type { Post } from '@/types'

export const BASE_URL = 'https://focorentabilismo.com'

export const SITE_NAME = 'Foco Rentabilismo'

// Hub de agentes en ChatGPT — cambia solo este valor si el término de búsqueda cambia
export const CHATGPT_AGENTES_URL = 'https://chatgpt.com/gpts/discovery?q=focorentabilismo'
export const SITE_DESCRIPTION =
  'Blog de referencia sobre rentabilidad empresarial para negocios físicos y pymes. Estrategias probadas para mejorar tu negocio.'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Foco Rentabilismo',
    url: BASE_URL,
    description:
      'Blog de referencia sobre rentabilidad empresarial para negocios físicos y pymes',
    sameAs: ['https://rentabilismo.com', 'https://consultoriametodo.es'],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'es',
    // SearchAction eliminado: no existe página de búsqueda real.
    // Añadir cuando se implemente búsqueda funcional.
  }
}

export function generateBlogPostingSchema(post: Post) {
  const postUrl = `${BASE_URL}/blog/${post.slug}/`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,  // usa updatedAt si existe
    inLanguage: 'es',
    author: {
      '@type': 'Organization',
      name: post.author || 'Foco Rentabilismo',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Foco Rentabilismo',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    ...(post.image && {
      image: {
        '@type': 'ImageObject',
        url: post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`,
      },
    }),
    keywords: post.tags?.join(', '),
    articleSection: post.categoria,
    timeRequired: `PT${post.readingTime}M`,
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

const DEFAULT_OG_IMAGE = `/og-default.jpg` // Crear imagen 1200×630 en /public/og-default.jpg

export function generateMetadataForPost(post: Post): Metadata {
  const url = `${BASE_URL}/blog/${post.slug}/`
  const ogImage = post.image
    ? (post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`)
    : `${BASE_URL}${DEFAULT_OG_IMAGE}`

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author || 'Foco Rentabilismo' }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      locale: 'es_ES',
      authors: [post.author || 'Foco Rentabilismo'],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: {
        'es': url,
        'es-419': url,
        'x-default': url,
      },
    },
  }
}

export function generateMetadataForCategoria(categoria: string): Metadata {
  const title = `Artículos sobre ${capitalize(categoria)}`
  const description = `Todos los artículos de ${SITE_NAME} sobre ${categoria}. Estrategias y consejos prácticos para mejorar la rentabilidad de tu negocio.`
  const url = `${BASE_URL}/categoria/${categoria}/`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
