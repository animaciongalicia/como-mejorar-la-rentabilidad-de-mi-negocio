import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d9488', // teal-600
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}
        >
          FR
        </span>
      </div>
    ),
    { ...size }
  )
}
