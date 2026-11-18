import { ImageResponse } from 'next/og'
import { site } from '@/data/site'
import { archivoBold, INK, PAPER } from '@/lib/og-font'

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: PAPER,
          color: INK,
          fontFamily: 'Archivo',
        }}
      >
        <div style={{ fontSize: 158, letterSpacing: -6, lineHeight: 1, textTransform: 'uppercase' }}>
          {site.name}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 22,
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: '#5A5853',
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 44,
            fontSize: 18,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#8E8B84',
          }}
        >
          motion.wilbetech.com.br
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Archivo', data: await archivoBold, style: 'normal', weight: 700 }],
    }
  )
}
