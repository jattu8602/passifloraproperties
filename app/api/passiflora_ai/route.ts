// app/api/passiflora_ai/route.ts

import passifloraSystemPrompt from '@/prompts/passiflora_system_prompts'

const apiKey = process.env.GEMINI_API_KEY

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      throw new Error('Missing GEMINI_API_KEY environment variable')
    }
    const { userMessage } = await req.json()

    const chatHistory = [
      {
        role: 'user',
        parts: [{ text: `${passifloraSystemPrompt}\nUser: ${userMessage}` }],
      },
    ]

    const payload = { contents: chatHistory }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Gemini API error response:', errorData)
      throw new Error(
        `Gemini API error: ${response.status} - ${
          errorData.error?.message || 'Unknown error'
        }`
      )
    }

    const result = await response.json()

    let text =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I couldn’t generate a response.'

    return Response.json({ text })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Error in /api/passiflora_ai:', message)
    return new Response(
      JSON.stringify({
        error: message || 'An unknown error occurred.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
