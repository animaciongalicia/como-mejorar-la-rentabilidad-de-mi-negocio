// Server component — fetches categories, passes them to the client nav
import { getAllCategorias } from '@/lib/posts'
import { CATEGORY_NAV_ORDER, getCategoryLabel } from '@/lib/categories'
import HeaderClient from './HeaderClient'

function getNavCategories(available: string[]): string[] {
  const ordered = CATEGORY_NAV_ORDER.filter((c) => available.includes(c))
  const rest = available.filter((c) => !CATEGORY_NAV_ORDER.includes(c))
  return [...ordered, ...rest]
}

export default function Header() {
  const availableCats = getAllCategorias()
  const navCats = getNavCategories(availableCats)
  const catItems = navCats.map((slug) => ({ slug, label: getCategoryLabel(slug) }))
  return <HeaderClient categories={catItems} />
}
