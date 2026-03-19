import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostFrontmatter } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getAllPosts(): Post[] {
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

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
  const allPosts = getAllPosts()

  const related = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0
      if (post.categoria === currentPost.categoria) score += 2
      if (currentPost.cluster && post.cluster === currentPost.cluster) score += 3
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

export function getAllCategorias(): string[] {
  const posts = getAllPosts()
  const categorias = [...new Set(posts.map((post) => post.categoria))]
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
