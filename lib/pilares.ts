import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pilaresDirectory = path.join(process.cwd(), 'content/pilares')

export interface PilarContent {
  title: string
  description: string
  lastUpdated?: string
  content: string
}

export function getPilarContent(pilarSlug: string): PilarContent | null {
  const fullPath = path.join(pilaresDirectory, `${pilarSlug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title || '',
    description: data.description || '',
    lastUpdated: data.lastUpdated,
    content,
  }
}
