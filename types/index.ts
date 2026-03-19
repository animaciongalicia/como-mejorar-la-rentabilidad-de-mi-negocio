export interface PostFrontmatter {
  title: string
  description: string
  date: string
  categoria: string
  cluster?: string
  tags?: string[]
  author?: string
  featured?: boolean
  slug: string
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: number
}
