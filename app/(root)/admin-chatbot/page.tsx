'use client'

import { Chatbot } from '@/components/Chatbot'

export default function AdminChatbotPage() {
  return (
    <main className="mx-auto max-w-3xl p-4 sm:p-8">
      <h1 className="text-2xl font-semibold mb-4">Passiflora Admin Chatbot</h1>
      <p className="text-sm text-gray-600 mb-6">
        Enter the admin PIN, then answer the questions. We will validate your
        inputs, upload any images if needed, and append a row to the Projects
        sheet.
      </p>
      <Chatbot />
    </main>
  )
}
