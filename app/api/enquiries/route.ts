import { NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  city: z.string().optional(),
  message: z.string().min(5),
  projectSlug: z.string().optional(),
  // honeypot field (must be empty)
  company: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.parse(body)

    if (parsed.company) {
      // bot detected
      return NextResponse.json({ ok: true })
    }

    const { name, email, phone, city, message, projectSlug } = parsed
    await prisma.enquiry.create({
      data: { name, email, phone, city, message, projectSlug },
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 400 })
  }
}


