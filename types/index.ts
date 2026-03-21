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
  tipo?: 'articulo' | 'caso-practico' | 'herramienta' | 'minicurso' // Tipo de contenido — determina en qué sección especial aparece
  sector?: string      // Sector del negocio — para la sección /sectores (hosteleria, retail, servicios, taller...)
  author?: string
  featured?: boolean
  slug: string
  minicurso?: string          // ID del minicurso al que pertenece esta lección
  minicurso_leccion?: number  // Número de lección dentro del minicurso
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: number
}
