import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  light?: boolean
}

export default function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  const textClass = light
    ? 'text-teal-200 hover:text-white'
    : 'text-gray-500 hover:text-teal-600'
  const separatorClass = light ? 'text-teal-300' : 'text-gray-400'
  const currentClass = light ? 'text-white' : 'text-gray-700'

  return (
    <nav aria-label="Ruta de navegación">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.url} className="flex items-center gap-1">
              {index > 0 && (
                <span className={separatorClass} aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className={`${currentClass} font-medium line-clamp-1`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className={`${textClass} transition-colors truncate max-w-[150px]`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
