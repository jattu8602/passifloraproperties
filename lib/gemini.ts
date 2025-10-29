import { GoogleGenerativeAI } from '@google/generative-ai'

export function getGeminiClient() {
  const apiKey =
    process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('Missing GEMINI_API_KEY')
  return new GoogleGenerativeAI(apiKey)
}

export async function suggestSlug(title: string): Promise<string> {
  try {
    const client = getGeminiClient()
    const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const prompt = `Generate a URL-safe kebab-case slug for the project title. Only return the slug.\nTitle: ${title}`
    const res = await model.generateContent(prompt)
    const text = res.response.text().trim()
    return (
      text ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    )
  } catch {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
}
