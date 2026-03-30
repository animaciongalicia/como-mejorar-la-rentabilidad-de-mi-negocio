import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostFrontmatter } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

// Module-level cache — avoids re-reading all MDX files on every call.
// At 2000+ posts this is critical: each getAllPosts() reads N files from disk.
// Safe for both build-time (single process) and production (posts don't change between requests).
let _postsCache: Post[] | null = null

function invalidateCache() {
  _postsCache = null
}

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getAllPosts(): Post[] {
  if (_postsCache) return _postsCache

  const files = getPostFiles()

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    const frontmatter = data as Omit<PostFrontmatter, 'slug'>

    return {
      ...frontmatter,
      slug,
      content,
      readingTime: Math.ceil(stats.minutes),
    } as Post
  })

  const today = new Date()
  today.setHours(23, 59, 59, 999)

  _postsCache = posts
    .filter((post) => new Date(post.date) <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return _postsCache
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  const frontmatter = data as Omit<PostFrontmatter, 'slug'>

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: Math.ceil(stats.minutes),
  } as Post
}

export function getPostsByCategoria(categoria: string): Post[] {
  return getAllPosts().filter(
    (post) => post.categoria.toLowerCase() === categoria.toLowerCase()
  )
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  // Use cached getAllPosts() — no extra disk reads
  const allPosts = getAllPosts()

  const related = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0
      if (post.categoria === currentPost.categoria) score += 2
      if (currentPost.cluster && post.cluster === currentPost.cluster) score += 3
      if (currentPost.pilar && post.pilar === currentPost.pilar) score += 2
      if (currentPost.tags && post.tags) {
        const sharedTags = currentPost.tags.filter((tag) => post.tags?.includes(tag))
        score += sharedTags.length
      }
      return { post, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)

  // If not enough related posts, fill with recent posts from same category
  if (related.length < limit) {
    const sameCategory = allPosts
      .filter(
        (post) =>
          post.slug !== currentPost.slug &&
          post.categoria === currentPost.categoria &&
          !related.find((r) => r.slug === post.slug)
      )
      .slice(0, limit - related.length)

    related.push(...sameCategory)
  }

  return related.slice(0, limit)
}

const VALID_PILARES = new Set([
  'diagnostico-empresarial','precios-y-margenes','productos-servicios','ventas',
  'procesos','personas','marketing-rentable','emprendimiento','mentalidad',
  'liderazgo','dinero-personal-empresario',
])

export function getAllCategorias(): string[] {
  const posts = getAllPosts()
  const seen: Record<string, boolean> = {}
  const categorias: string[] = []
  for (const post of posts) {
    const cat = post.categoria
    if (cat && VALID_PILARES.has(cat) && !seen[cat]) {
      seen[cat] = true
      categorias.push(cat)
    }
  }
  return categorias.sort()
}

export function getCategoriaCount(): Record<string, number> {
  const posts = getAllPosts()
  return posts.reduce(
    (acc, post) => {
      acc[post.categoria] = (acc[post.categoria] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )
}

export function getPostsByPilar(pilar: string): Post[] {
  return getAllPosts().filter(
    (post) => post.pilar && post.pilar.toLowerCase() === pilar.toLowerCase()
  )
}

export function getAllPilares(): string[] {
  const posts = getAllPosts()
  const seen: Record<string, boolean> = {}
  const pilares: string[] = []
  for (const post of posts) {
    if (post.pilar && !seen[post.pilar]) {
      seen[post.pilar] = true
      pilares.push(post.pilar)
    }
  }
  return pilares.sort()
}
