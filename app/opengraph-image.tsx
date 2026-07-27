import { ImageResponse } from 'next/og'

export const alt = 'Pape DIAWARA - Performance Analytics & Data Platforms'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#101412',
          color: '#edf3ef',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            color: '#5ac095',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 5,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: 56, height: 3, background: '#5ac095' }} />
          Portfolio
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -4 }}>
            Pape DIAWARA
          </div>
          <div style={{ color: '#5ac095', fontSize: 36, fontWeight: 600 }}>
            Software Engineer
          </div>
          <div style={{ color: '#a7b2aa', fontSize: 30 }}>
            Performance Analytics & Data Platforms
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#a7b2aa',
            fontSize: 22,
          }}
        >
          <span>Paris, France</span>
          <span>pidiawara.com</span>
        </div>
      </div>
    ),
    size
  )
}
