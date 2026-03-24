import { getAllPosts } from '@/lib/posts'
import { BASE_URL, SITE_NAME } from '@/lib/seo'

export const dynamic = 'force-static'

const RSS_DESCRIPTION = 'Blog sobre rentabilidad y gestión de negocios'

export async function GET() {
  const posts = getAllPosts().slice(0, 20)

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}/`
      const pubDate = new Date(post.date).toUTCString()
      const categories = post.tags
        ? post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('')
        : ''
      const description =
        post.description ||
        post.content.replace(/[#*`[\]<>]/g, '').trim().slice(0, 160)

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>hola@focorentabilismo.com (${escapeXml(post.author || 'Foco Rentabilismo')})</author>
      ${categories}
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${BASE_URL}</link>
    <description>${escapeXml(RSS_DESCRIPTION)}</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>hola@focorentabilismo.com (Foco Rentabilismo)</managingEditor>
    <webMaster>hola@focorentabilismo.com (Foco Rentabilismo)</webMaster>
    <ttl>60</ttl>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
