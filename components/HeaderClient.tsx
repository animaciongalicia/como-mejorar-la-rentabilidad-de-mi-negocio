'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CATEGORY_NAV_ORDER, getCategoryLabel } from '@/lib/categories'

// Secciones especiales — aparecen en la barra principal del header
const SPECIAL_SECTIONS = [
  { label: 'Casos Prácticos', href: '/casos-practicos/' },
  { label: 'Herramientas', href: '/herramientas/' },
  { label: 'Agentes', href: '/agentes/' },
  { label: 'Minicursos', href: '/minicursos/' },
  { label: 'Sectores', href: '/sectores/' },
]

export default function HeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pilaresOpen, setPilaresOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      {/* ── BARRA PRINCIPAL: Logo + secciones especiales + CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-lg font-black text-gray-900 tracking-tight">
              FOCO<span className="text-teal-600">RENTABILISMO</span>
            </span>
          </Link>

          {/* Navegación desktop — secciones especiales */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {SPECIAL_SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap"
              >
                {s.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/blog/"
              className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
            >
              Todos los artículos
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
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
      </div>

      {/* ── BARRA DE PILARES — los 11 pilares como nav secundaria ── */}
      <div className="hidden lg:block border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-0.5 overflow-x-auto py-1" aria-label="Pilares temáticos">
            <span className="shrink-0 text-xs font-black uppercase tracking-widest text-gray-400 pr-3 border-r border-gray-200 mr-2">
              Pilares
            </span>
            {CATEGORY_NAV_ORDER.map((slug) => (
              <Link
                key={slug}
                href={`/pilares/${slug}/`}
                className="shrink-0 text-xs font-semibold text-gray-600 hover:text-teal-700 hover:bg-teal-50 px-3 py-1.5 rounded transition-colors whitespace-nowrap"
              >
                {getCategoryLabel(slug)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/blog/"
              className="text-sm font-semibold text-gray-700 hover:text-teal-600 py-2 border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Todos los artículos
            </Link>

            <p className="text-xs text-gray-400 uppercase tracking-wider pt-3 pb-1 font-semibold">Secciones</p>
            {SPECIAL_SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-gray-700 hover:text-teal-600 py-1.5 border-b border-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}

            {/* Pilares colapsables en móvil */}
            <button
              type="button"
              className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider pt-3 pb-1 font-semibold w-full text-left"
              onClick={() => setPilaresOpen(!pilaresOpen)}
            >
              <span>Pilares</span>
              <svg
                className={`w-4 h-4 transition-transform ${pilaresOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {pilaresOpen && CATEGORY_NAV_ORDER.map((slug) => (
              <Link
                key={slug}
                href={`/pilares/${slug}/`}
                className="text-sm text-gray-600 hover:text-teal-600 py-1.5 pl-2 border-b border-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {getCategoryLabel(slug)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
