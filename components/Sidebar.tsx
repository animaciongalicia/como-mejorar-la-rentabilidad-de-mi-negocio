import Link from 'next/link'
import { getAllCategorias, getCategoriaCount } from '@/lib/posts'
import { getCategoryLabel } from '@/lib/categories'
import NewsletterForm from '@/components/NewsletterForm'

interface SidebarProps {
  currentCategoria?: string
}

export default function Sidebar({ currentCategoria }: SidebarProps) {
  const categorias = getAllCategorias()
  const counts = getCategoriaCount()

  return (
    <div className="space-y-8 sticky top-24">
      {/* Pilares */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Pilares
        </h3>
        <ul className="space-y-2">
          {categorias.map((cat) => (
            <li key={cat}>
              <Link
                href={`/pilares/${cat}/`}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  currentCategoria === cat
                    ? 'bg-teal-50 text-teal-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
                }`}
              >
                <span>{getCategoryLabel(cat)}</span>
                {counts[cat] && (
                  <span className={`text-xs rounded-full px-2 py-0.5 ${
                    currentCategoria === cat
                      ? 'bg-teal-100 text-teal-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {counts[cat]}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <NewsletterForm variant="sidebar" />

      {/* Herramientas gratuitas */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Herramientas gratuitas
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/herramientas/diagnostico-negocio/"
              className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors group"
            >
              <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-700">
                Diagnóstico de negocio
              </span>
              <span className="text-xs text-gray-500">Detecta fugas de rentabilidad</span>
            </Link>
          </li>
          <li>
            <Link
              href="/herramientas/avatar-cliente/"
              className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors group"
            >
              <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-700">
                Define tu cliente ideal
              </span>
              <span className="text-xs text-gray-500">Vende mejor a quien te compra</span>
            </Link>
          </li>
          <li>
            <Link
              href="/herramientas/analiza-tu-idea/"
              className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors group"
            >
              <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-700">
                Analiza tu idea de negocio
              </span>
              <span className="text-xs text-gray-500">Valida antes de invertir</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Sobre el método */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-3">
          Sobre el método
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          En Foco Rentabilismo aplicamos el Método Foco: un proceso estructurado
          para identificar y capturar oportunidades de mejora de rentabilidad en
          tu negocio.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Sin tecnicismos. Con resultados medibles en 30 días.
        </p>
        <Link
          href="/herramientas/"
          className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200"
        >
          Ver herramientas gratuitas →
        </Link>
      </div>
    </div>
  )
}
