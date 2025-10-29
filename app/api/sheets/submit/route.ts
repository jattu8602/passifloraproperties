import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { row } = await req.json()
    const webappUrl = process.env.APPS_SCRIPT_WEBAPP_URL
    if (!webappUrl) {
      return NextResponse.json(
        { ok: false, error: 'Server not configured' },
        { status: 500 }
      )
    }

    const res = await fetch(webappUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ row }),
    })
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json(
        { ok: false, error: text || `Upstream ${res.status}` },
        { status: 502 }
      )
    }
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || 'Unknown error' },
      { status: 500 }
    )
  }
}
