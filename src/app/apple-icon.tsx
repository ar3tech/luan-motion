import { ImageResponse } from 'next/og'
import { archivoBold, INK, PAPER } from '@/lib/og-font'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: INK,
          color: PAPER,
          fontFamily: 'Archivo',
          fontSize: 92,
          letterSpacing: -5,
        }}
      >
        LB
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Archivo', data: await archivoBold, style: 'normal', weight: 700 }],
    }
  )
}
