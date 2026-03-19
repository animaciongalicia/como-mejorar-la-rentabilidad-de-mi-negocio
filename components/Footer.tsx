import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
              Foco Rentabilismo
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Blog de referencia sobre rentabilidad empresarial para negocios
              físicos y pymes. Estrategias probadas, sin humo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Navegar
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/categoria/rentabilidad/" className="hover:text-teal-400 transition-colors">
                  Rentabilidad
                </Link>
              </li>
              <li>
                <Link href="/categoria/costes/" className="hover:text-teal-400 transition-colors">
                  Costes
                </Link>
              </li>
              <li>
                <a
                  href="/feed.xml"
                  className="hover:text-teal-400 transition-colors"
                >
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Ecosistema
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://rentabilismo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  rentabilismo.com
                </a>
              </li>
              <li>
                <a
                  href="https://consultoriametodo.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  consultoriametodo.es
                </a>
              </li>
              <li>
                <a
                  href="https://consultoriametodo.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-block mt-2"
                >
                  Consultoría →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {currentYear} Foco Rentabilismo. Todos los derechos reservados.
          </p>
          <p>
            Hecho con foco en la rentabilidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
