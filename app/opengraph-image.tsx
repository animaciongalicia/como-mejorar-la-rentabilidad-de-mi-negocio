import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Foco Rentabilismo – Mejora la rentabilidad de tu negocio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#99f6e4',
            marginBottom: 20,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          focorentabilismo.com
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            maxWidth: 800,
          }}
        >
          Mejora la rentabilidad de tu negocio
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#ccfbf1',
            marginTop: 24,
            maxWidth: 700,
          }}
        >
          Estrategias reales para dueños de negocios físicos y pymes.
        </div>
      </div>
    ),
    size,
  )
}
