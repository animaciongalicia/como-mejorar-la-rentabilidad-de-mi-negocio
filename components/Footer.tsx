// Server component
import Link from 'next/link'
import { getAllCategorias } from '@/lib/posts'
import { getCategoryLabel, CATEGORY_NAV_ORDER } from '@/lib/categories'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const allCats = getAllCategorias()
  const cats = CATEGORY_NAV_ORDER.filter((c) => allCats.includes(c)).slice(0, 6)

  return (
    <footer className="bg-gray-900 text-gray-400 border-t-4 border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">

          {/* Columna 1: Marca */}
          <div>
            <Link href="/" className="text-xl font-black text-white tracking-tight">
              FOCO<span className="text-teal-400">RENTABILISMO</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Para dueños de negocios físicos que están hartos de trabajar mucho y ganar poco. No hay milagros. Hay método.
            </p>
          </div>

          {/* Columna 2: Temas */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">Temas</h3>
            <ul className="space-y-2 text-sm">
              {cats.map((cat) => (
                <li key={cat}>
                  <Link href={`/pilares/${cat}/`} className="hover:text-teal-400 transition-colors">
                    {getCategoryLabel(cat)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog/" className="hover:text-teal-400 transition-colors">
                  Todos los artículos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Secciones */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">Blog</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Inicio</Link></li>
              <li><Link href="/pilares/" className="hover:text-teal-400 transition-colors">Pilares temáticos</Link></li>
              <li><Link href="/casos-practicos/" className="hover:text-teal-400 transition-colors">Casos prácticos</Link></li>
              <li><Link href="/herramientas/" className="hover:text-teal-400 transition-colors">Herramientas gratuitas</Link></li>
              <li><Link href="/agentes/" className="hover:text-teal-400 transition-colors">Agentes consultores</Link></li>
              <li><a href="/feed.xml" className="hover:text-teal-400 transition-colors">RSS Feed</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aviso-legal/" className="hover:text-teal-400 transition-colors">Aviso legal</Link></li>
              <li><Link href="/politica-privacidad/" className="hover:text-teal-400 transition-colors">Política de privacidad</Link></li>
              <li><Link href="/politica-cookies/" className="hover:text-teal-400 transition-colors">Política de cookies</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 text-xs text-gray-600">
          <p>© {currentYear} Foco Rentabilismo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
