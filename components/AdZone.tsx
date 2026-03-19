// AdZone - Ad-ready placeholder zones for focorentabilismo.com
// Future integration points:
//   - Google AdSense: replace placeholder with <ins class="adsbygoogle" ...>
//   - Affiliate banners: replace placeholder with partner banner HTML/component
//   - Direct ads: replace placeholder with negotiated banner code
//
// Control visibility with NEXT_PUBLIC_ADS_ENABLED=true env var

interface AdZoneProps {
  position: 'header' | 'sidebar' | 'content' | 'footer'
  size?: string
}

const POSITION_STYLES: Record<AdZoneProps['position'], string> = {
  header: 'w-full h-24 max-w-4xl mx-auto',
  sidebar: 'w-full h-60',
  content: 'w-full h-28 max-w-2xl mx-auto my-6',
  footer: 'w-full h-24 max-w-4xl mx-auto',
}

export default function AdZone({ position, size }: AdZoneProps) {
  // Respect NEXT_PUBLIC_ADS_ENABLED env var
  if (process.env.NEXT_PUBLIC_ADS_ENABLED !== 'true') {
    return null
  }

  return (
    <div
      className={`${POSITION_STYLES[position]} flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg text-gray-400 text-xs ${size || ''}`}
      data-ad-zone={position}
      aria-hidden="true"
    >
      {/* TODO: Replace this div with AdSense tag or affiliate banner */}
      <span>Ad zone: {position}</span>
    </div>
  )
}
