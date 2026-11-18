import { ImageResponse } from 'next/og'
import { archivoBold, INK, PAPER } from '@/lib/og-font'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default async function Icon() {
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
          fontSize: 34,
          letterSpacing: -2,
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
