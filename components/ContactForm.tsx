"use client"

import { useState } from "react"

type Props = { projectSlug?: string }

export default function ContactForm({ projectSlug }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setStatus("submitting")
    setError(null)
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, projectSlug }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed to submit')
      setStatus("success")
    } catch (e: any) {
      setError(e.message)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-900">
        Thank you! We have received your enquiry.
      </div>
    )
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Name" className="px-3 py-2 border border-gray-300 rounded-lg" />
        <input name="email" required type="email" placeholder="Email" className="px-3 py-2 border border-gray-300 rounded-lg" />
        <input name="phone" required placeholder="Phone" className="px-3 py-2 border border-gray-300 rounded-lg" />
        <input name="city" placeholder="City" className="px-3 py-2 border border-gray-300 rounded-lg" />
      </div>
      <textarea name="message" required placeholder="Message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
      {/* Honeypot */}
      <input name="company" autoComplete="off" tabIndex={-1} className="hidden" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        disabled={status === "submitting"}
        className="px-5 py-2.5 bg-black text-white rounded-full font-semibold hover:bg-gray-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Send Enquiry"}
      </button>
    </form>
  )
}


