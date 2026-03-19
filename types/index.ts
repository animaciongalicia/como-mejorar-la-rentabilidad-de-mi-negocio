export interface PostFrontmatter {
  title: string
  description: string
  date: string
  updatedAt?: string   // Fecha de última actualización — usar en dateModified del schema
  image?: string       // Ruta a imagen OG por post (ej: /images/posts/mi-post.jpg)
  categoria: string
  cluster?: string
  pilar?: string
  tags?: string[]
  author?: string
  featured?: boolean
  slug: string
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: number
}
