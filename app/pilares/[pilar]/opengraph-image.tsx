import { ImageResponse } from 'next/og'
import { PILLARS } from '@/lib/clusters'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Acento de color por pilar
const PILAR_ACCENT: Record<string, string> = {
  'diagnostico-empresarial': '#f59e0b',
  'precios-y-margenes':      '#10b981',
  'productos-servicios':     '#6366f1',
  'ventas':                  '#ef4444',
  'procesos':                '#3b82f6',
  'personas':                '#8b5cf6',
  'marketing-rentable':      '#f97316',
  'emprendimiento':          '#14b8a6',
  'mentalidad':              '#ec4899',
  'liderazgo':               '#06b6d4',
  'dinero-personal-empresario': '#84cc16',
  'costes':                  '#e11d48',
}

export default function Image({ params }: { params: { pilar: string } }) {
  const pillar = PILLARS.find((p) => p.slug === params.pilar)
  const name = pillar?.name ?? 'Pilares'
  const description = pillar?.description ?? 'Rentabilidad con método.'
  const accent = PILAR_ACCENT[params.pilar] ?? '#0d9488'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1117 0%, #1a2332 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '64px 72px',
        }}
      >
        {/* Top: dominio + etiqueta pilar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#94a3b8',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            focorentabilismo.com
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: accent,
              background: `${accent}22`,
              border: `1px solid ${accent}44`,
              borderRadius: 6,
              padding: '4px 12px',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Pilar
          </div>
        </div>

        {/* Centro: título + descripción */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Barra de acento */}
          <div
            style={{
              width: 64,
              height: 6,
              background: accent,
              borderRadius: 3,
            }}
          />
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.0,
              maxWidth: 900,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#94a3b8',
              maxWidth: 780,
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom: tagline */}
        <div
          style={{
            fontSize: 18,
            color: '#475569',
            fontWeight: 500,
          }}
        >
          Rentabilidad con método · Para empresarios que quieren más negocio y más vida
        </div>
      </div>
    ),
    size,
  )
}
