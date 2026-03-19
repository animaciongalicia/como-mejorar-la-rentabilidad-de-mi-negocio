import Link from 'next/link'
import type { Post } from '@/types'
import { formatDate } from '@/lib/seo'

interface PostCardProps {
  post: Post
}

const categoryLabels: Record<string, string> = {
  rentabilidad: 'Rentabilidad',
  costes: 'Costes',
  ventas: 'Ventas',
  operaciones: 'Operaciones',
  finanzas: 'Finanzas',
  estrategia: 'Estrategia',
}

function getCategoryLabel(slug: string): string {
  return categoryLabels[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <div className="flex items-center gap-3 mb-3">
          <Link
            href={`/categoria/${post.categoria}/`}
            className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide hover:bg-teal-200 transition-colors"
          >
            {getCategoryLabel(post.categoria)}
          </Link>
          <span className="text-gray-400 text-xs">
            {post.readingTime} min
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          <Link
            href={`/blog/${post.slug}/`}
            className="hover:text-teal-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {post.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <time className="text-gray-400 text-xs" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <Link
            href={`/blog/${post.slug}/`}
            className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors inline-flex items-center gap-1"
          >
            Leer artículo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
