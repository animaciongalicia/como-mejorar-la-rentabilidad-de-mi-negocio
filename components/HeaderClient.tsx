'use client'

import Link from 'next/link'
import { useState } from 'react'

interface CategoryItem {
  slug: string
  label: string
}

interface Props {
  categories: CategoryItem[]
}

export default function HeaderClient({ categories }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar: logo + nav principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-black text-gray-900 tracking-tight">
              FOCO<span className="text-teal-600">RENTABILISMO</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/blog/" className="hover:text-gray-900 transition-colors">
              Todos los artículos
            </Link>
            <Link href="/pilares/" className="hover:text-gray-900 transition-colors">
              Pilares
            </Link>
            <Link href="/blog/" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-colors">
              Leer ahora
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Barra de categorías — estilo periódico */}
      <div className="hidden md:block border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto py-1.5">
            {categories.map(({ slug, label }) => (
              <Link
                key={slug}
                href={`/categoria/${slug}/`}
                className="shrink-0 text-xs font-semibold text-gray-600 hover:text-teal-700 hover:bg-teal-50 px-3 py-1 rounded-full transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/blog/" className="text-sm font-semibold text-gray-700 hover:text-teal-600 py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>
              Todos los artículos
            </Link>
            <Link href="/pilares/" className="text-sm font-semibold text-gray-700 hover:text-teal-600 py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>
              Pilares
            </Link>
            <p className="text-xs text-gray-400 uppercase tracking-wider pt-3 pb-1 font-semibold">Categorías</p>
            {categories.map(({ slug, label }) => (
              <Link key={slug} href={`/categoria/${slug}/`} className="text-sm text-gray-600 hover:text-teal-600 py-1.5" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
