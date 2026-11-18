import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// ImageResponse only reads ttf/otf/woff, so the share image and icons load
// a static Archivo Bold from /assets instead of the next/font copy.
export const archivoBold = readFile(join(process.cwd(), 'assets/Archivo-Bold.ttf'))

export const PAPER = '#F4F2EE'
export const INK = '#101010'
