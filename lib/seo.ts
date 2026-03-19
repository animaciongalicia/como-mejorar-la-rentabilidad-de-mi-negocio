import type { Metadata } from 'next'
import type { Post } from '@/types'

export const BASE_URL = 'https://focorentabilismo.com'

export const SITE_NAME = 'Foco Rentabilismo'
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
    sameAs: ['https://rentabilismo.com', 'https://consultoriametodo.com'],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBlogPostingSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'Foco Rentabilismo',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Foco Rentabilismo',
      url: BASE_URL,
    },
    url: `${BASE_URL}/blog/${post.slug}/`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}/`,
    },
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

export function generateMetadataForPost(post: Post): Metadata {
  const url = `${BASE_URL}/blog/${post.slug}/`

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
      authors: [post.author || 'Foco Rentabilismo'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
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
