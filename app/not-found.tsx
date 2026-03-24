import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada | Foco Rentabilismo',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-black text-gray-100 mb-4">404</p>
        <h1 className="text-2xl font-black text-gray-900 mb-3">
          Página no encontrada
        </h1>
        <p className="text-gray-500 mb-8">
          Esta página no existe o ha sido movida. Vuelve al inicio y encuentra lo que buscas.
        </p>
        <Link
          href="/"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
