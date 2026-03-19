import Link from 'next/link'
import type { Post } from '@/types'
import { formatDate } from '@/lib/seo'
import { getCategoryConfig } from '@/lib/categories'

interface PostCardProps {
  post: Post
  variant?: 'default' | 'compact' | 'featured'
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  const cat = getCategoryConfig(post.categoria)

  if (variant === 'compact') {
    return (
      <article className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
        <div className="flex-1 min-w-0">
          <Link
            href={`/categoria/${post.categoria}/`}
            className={`text-xs font-semibold uppercase tracking-wide ${cat.textColor}`}
          >
            {cat.label}
          </Link>
          <h3 className="text-sm font-bold text-gray-900 leading-snug mt-0.5">
            <Link href={`/blog/${post.slug}/`} className="hover:text-teal-600 transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-xs text-gray-400 mt-1">{post.readingTime} min · {formatDate(post.date)}</p>
        </div>
      </article>
    )
  }

  if (variant === 'featured') {
    return (
      <article className="group">
        <Link
          href={`/categoria/${post.categoria}/`}
          className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded ${cat.color} ${cat.textColor} mb-3`}
        >
          {cat.label}
        </Link>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-3 group-hover:text-teal-700 transition-colors">
          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4 text-base">{post.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTime} min de lectura</span>
        </div>
        <Link
          href={`/blog/${post.slug}/`}
          className="inline-flex items-center gap-1 mt-4 text-teal-600 hover:text-teal-800 font-bold text-sm transition-colors"
        >
          Leer artículo <span aria-hidden="true">→</span>
        </Link>
      </article>
    )
  }

  // default card
  return (
    <article className="bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all duration-200 overflow-hidden flex flex-col h-full">
      <div className="p-5 flex flex-col flex-1">
        {/* Category + time */}
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={`/categoria/${post.categoria}/`}
            className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded ${cat.color} ${cat.textColor} ${cat.hoverColor} transition-colors`}
          >
            {cat.label}
          </Link>
          <span className="text-gray-400 text-xs">{post.readingTime} min</span>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug flex-1">
          <Link href={`/blog/${post.slug}/`} className="hover:text-teal-600 transition-colors">
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <time className="text-gray-400 text-xs" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <Link
            href={`/blog/${post.slug}/`}
            className="text-teal-600 hover:text-teal-800 text-xs font-bold transition-colors"
          >
            Leer →
          </Link>
        </div>
      </div>
    </article>
  )
}
