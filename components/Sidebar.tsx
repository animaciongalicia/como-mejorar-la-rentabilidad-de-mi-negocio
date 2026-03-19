import Link from 'next/link'
import { getAllCategorias, getCategoriaCount } from '@/lib/posts'

interface SidebarProps {
  currentCategoria?: string
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

export default function Sidebar({ currentCategoria }: SidebarProps) {
  const categorias = getAllCategorias()
  const counts = getCategoriaCount()

  return (
    <div className="space-y-8 sticky top-24">
      {/* Categorías */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Categorías
        </h3>
        <ul className="space-y-2">
          {categorias.map((cat) => (
            <li key={cat}>
              <Link
                href={`/categoria/${cat}/`}
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

      {/* Newsletter - TODO: Integrar con ActiveCampaign */}
      {/* TODO: Conectar formulario de newsletter con ActiveCampaign una vez configurada la cuenta */}
      <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-2">
          Newsletter semanal
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Una idea de rentabilidad cada semana. Sin spam. Solo valor.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full px-4 py-2.5 rounded-lg border border-teal-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
            aria-label="Correo electrónico para newsletter"
          />
          <button
            type="button"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200"
          >
            Suscribirme gratis
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Sin spam. Baja cuando quieras.
        </p>
      </div>

      {/* Sobre el método */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-3">
          Sobre el método
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          En Foco Rentabilismo aplicamos el Método Foco: un proceso estructurado
          para identificar y capturar oportunidades de mejora de rentabilidad en
          negocios físicos.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Sin tecnicismos. Con resultados medibles en 30 días.
        </p>
        <a
          href="https://consultoriametodo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200"
        >
          Saber más →
        </a>
      </div>
    </div>
  )
}
