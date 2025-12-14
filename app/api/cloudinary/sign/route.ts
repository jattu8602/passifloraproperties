import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const { folder } = await req.json()
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET
    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { ok: false, error: 'Cloudinary not configured' },
        { status: 500 }
      )
    }
    

    const timestamp = Math.floor(Date.now() / 1000)
    const paramsToSign = { timestamp, folder } as Record<string, any>
    const sorted = Object.keys(paramsToSign)
      .filter((k) => paramsToSign[k] !== undefined && paramsToSign[k] !== '')
      .sort()
      .map((k) => `${k}=${paramsToSign[k]}`)
      .join('&')
    const signature = crypto
      .createHash('sha1')
      .update(sorted + apiSecret)
      .digest('hex')

    return NextResponse.json({
      ok: true,
      cloudName,
      apiKey,
      timestamp,
      signature,
      folder: folder || undefined,
    })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || 'Unknown error' },
      { status: 500 }
    )
  }
}
