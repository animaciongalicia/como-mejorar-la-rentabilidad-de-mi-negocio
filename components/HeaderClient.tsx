'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CATEGORY_NAV_ORDER, getCategoryLabel } from '@/lib/categories'
import { SECTORES } from '@/lib/clusters'

// Secciones especiales — barra principal
const SPECIAL_SECTIONS = [
  { label: 'Casos Prácticos', href: '/casos-practicos/' },
  { label: 'Herramientas', href: '/herramientas/' },
  { label: 'Agentes', href: '/agentes/' },
  { label: 'Minicursos', href: '/minicursos/' },
]

export default function HeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pilaresOpen, setPilaresOpen] = useState(false)
  const [explorarOpen, setExplorarOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      {/* ── BARRA PRINCIPAL: Logo + secciones + CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              FOCO<span className="text-teal-600">RENTABILISMO</span>
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {/* Explorar — dropdown mega-menú */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-md transition-colors text-sm font-semibold"
                onMouseEnter={() => setExplorarOpen(true)}
                onMouseLeave={() => setExplorarOpen(false)}
                onClick={() => setExplorarOpen(!explorarOpen)}
              >
                Explorar
                <svg className={`w-3.5 h-3.5 transition-transform ${explorarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {explorarOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white border border-gray-200 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6"
                  onMouseEnter={() => setExplorarOpen(true)}
                  onMouseLeave={() => setExplorarOpen(false)}
                >
                  {/* Pilares */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Pilares</p>
                    <div className="flex flex-col gap-1">
                      {CATEGORY_NAV_ORDER.map((slug) => (
                        <Link
                          key={slug}
                          href={`/pilares/${slug}/`}
                          className="text-sm text-gray-700 hover:text-teal-700 hover:bg-teal-50 px-2 py-1 rounded transition-colors"
                          onClick={() => setExplorarOpen(false)}
                        >
                          {getCategoryLabel(slug)}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Perfiles + Herramientas */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Perfiles de negocio</p>
                      <div className="flex flex-col gap-1">
                        {SECTORES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/sectores/${s.slug}/`}
                            className="text-sm text-gray-700 hover:text-teal-700 hover:bg-teal-50 px-2 py-1 rounded transition-colors"
                            onClick={() => setExplorarOpen(false)}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Separador */}
            <span className="w-px h-4 bg-gray-300 mx-1" />

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

      {/* ── BARRA SECUNDARIA — Pilares + Perfiles, centrada ── */}
      <div className="hidden lg:block border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-0 py-1.5 overflow-x-auto" aria-label="Pilares y perfiles">

            {/* Sección Pilares */}
            <span className="shrink-0 text-xs font-black uppercase tracking-widest text-gray-500 pr-3 border-r border-gray-300 mr-3">
              Pilares
            </span>
            {CATEGORY_NAV_ORDER.map((slug) => (
              <Link
                key={slug}
                href={`/pilares/${slug}/`}
                className="shrink-0 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 px-2.5 py-1.5 rounded transition-colors whitespace-nowrap"
              >
                {getCategoryLabel(slug)}
              </Link>
            ))}

            {/* Separador entre secciones */}
            <span className="shrink-0 w-px h-5 bg-gray-300 mx-4" />

            {/* Sección Perfiles */}
            <span className="shrink-0 text-xs font-black uppercase tracking-widest text-gray-500 pr-3 border-r border-gray-300 mr-3">
              Perfiles
            </span>
            {SECTORES.map((s) => (
              <Link
                key={s.slug}
                href={`/sectores/${s.slug}/`}
                className="shrink-0 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 px-2.5 py-1.5 rounded transition-colors whitespace-nowrap"
              >
                {s.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/blog/"
              className="text-sm font-semibold text-gray-700 hover:text-teal-600 py-2 border-b border-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Todos los artículos
            </Link>

            <p className="text-xs text-gray-400 uppercase tracking-wider pt-3 pb-1 font-black">Secciones</p>
            {SPECIAL_SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-gray-700 hover:text-teal-600 py-1.5 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}

            {/* Pilares colapsables en móvil */}
            <button
              type="button"
              className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider pt-3 pb-1 font-black w-full text-left"
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
                className="text-sm text-gray-600 hover:text-teal-600 py-1.5 pl-2 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {getCategoryLabel(slug)}
              </Link>
            ))}

            {/* Perfiles en móvil */}
            <p className="text-xs text-gray-400 uppercase tracking-wider pt-3 pb-1 font-black">Perfiles de negocio</p>
            {SECTORES.map((s) => (
              <Link
                key={s.slug}
                href={`/sectores/${s.slug}/`}
                className="text-sm text-gray-600 hover:text-teal-600 py-1.5 pl-2 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
