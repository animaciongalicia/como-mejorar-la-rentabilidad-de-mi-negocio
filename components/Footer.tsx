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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">

          <div>
            <Link href="/" className="text-xl font-black text-white tracking-tight">
              FOCO<span className="text-teal-400">RENTABILISMO</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Blog de referencia sobre rentabilidad empresarial para negocios físicos y pymes. Sin humo.
            </p>
          </div>

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

          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">Blog</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Inicio</Link></li>
              <li><Link href="/pilares/" className="hover:text-teal-400 transition-colors">Pilares temáticos</Link></li>
              <li><a href="/feed.xml" className="hover:text-teal-400 transition-colors">RSS Feed</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {currentYear} Foco Rentabilismo. Todos los derechos reservados.</p>
          <p>
            Parte del ecosistema{' '}
            <a href="https://consultoriametodo.es" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 underline underline-offset-2">
              consultoriametodo.es
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
