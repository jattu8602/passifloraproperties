'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  PROJECT_SLOTS,
  Slot,
  SlotKey,
  STATUS_ENUM,
  TYPE_ENUM,
} from '@/lib/chat/slots'
import { applyAnswer, computeNext } from '@/lib/chat/engine'

type Message = { role: 'assistant' | 'user'; text: string; slotKey?: SlotKey }

type ProjectRow = Record<string, any>

const WELCOME =
  "Hi! I'll help you add a new project. Let's start with the title. You can also paste image or brochure links when I ask for them."

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: WELCOME },
  ])
  const [input, setInput] = useState('')
  const [row, setRow] = useState<ProjectRow>({
    ctaBrochure: true,
    ctaBookVisit: true,
    ctaRegister: false,
    isFeatured: false,
  })
  const [currentSlot, setCurrentSlot] = useState<Slot | undefined>(undefined)
  const [submitting, setSubmitting] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const viewRef = useRef<HTMLDivElement>(null)

  // pick the next slot to ask
  useEffect(() => {
    const { done, nextSlot } = computeNext(row)
    if (done) {
      setCurrentSlot(undefined)
      if (!confirmed) {
        const summary = buildSummary(row)
        pushAssistant(
          `Here is what I'll write to the Projects sheet.\n\n${summary}\n\nType "confirm" to submit or "edit <field>" to change one.`
        )
      }
      return
    }
    if (!currentSlot || currentSlot.key !== nextSlot?.key) {
      setCurrentSlot(nextSlot)
      askFor(nextSlot!)
    }
  }, [row])

  useEffect(() => {
    viewRef.current?.scrollTo({
      top: viewRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  function pushAssistant(text: string, slotKey?: SlotKey) {
    setMessages((m) => [...m, { role: 'assistant', text, slotKey }])
  }
  function pushUser(text: string) {
    setMessages((m) => [...m, { role: 'user', text }])
  }

  function askFor(slot: Slot) {
    const base = `${slot.label}${slot.hint ? ` (${slot.hint})` : ''}`
    let extra = ''
    if (slot.kind === 'enum:type') extra = `\nOptions: ${TYPE_ENUM.join(', ')}`
    if (slot.kind === 'enum:status')
      extra = `\nOptions: ${STATUS_ENUM.join(', ')}`
    pushAssistant(`${base}.${extra}`, slot.key)
  }

  function onQuick(value: string) {
    if (!currentSlot) return
    pushUser(value)
    const updated = applyAnswer(row, currentSlot, value)
    setRow(updated)
    setInput('')
  }

  function onEditCommand(field: string) {
    const slot = PROJECT_SLOTS.find((s) => s.key === field)
    if (!slot) {
      pushAssistant(`I couldn't find a field named "${field}".`)
      return
    }
    setCurrentSlot(slot)
    pushAssistant(`Okay, update ${slot.label}.`, slot.key)
  }

  async function onSend() {
    const text = input.trim()
    if (!text) return
    setInput('')
    pushUser(text)

    // handle confirm / edit commands
    if (!currentSlot) {
      if (/^confirm$/i.test(text)) {
        await doSubmit()
        return
      }
      const editMatch = text.match(/^edit\s+(\w[\w-]*)$/i)
      if (editMatch) {
        onEditCommand(editMatch[1]!)
        return
      }
      pushAssistant(
        'Please type "confirm" to submit or "edit <field>" to modify a field.'
      )
      return
    }

    const updated = applyAnswer(row, currentSlot, text)
    setRow(updated)
  }

  async function doSubmit() {
    try {
      setSubmitting(true)
      const normalized = normalizeForSheet(row)
      const res = await fetch('/api/sheets/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ row: normalized }),
      })
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`)
      const data = await res.json()
      if (!data?.ok) throw new Error('Sheet append failed')
      setConfirmed(true)
      pushAssistant(
        'Submitted successfully. You can start another entry by typing a new title.'
      )
      // reset for next entry
      setRow({
        ctaBrochure: true,
        ctaBookVisit: true,
        ctaRegister: false,
        isFeatured: false,
      })
      setMessages([{ role: 'assistant', text: WELCOME }])
      setConfirmed(false)
    } catch (e: any) {
      pushAssistant(e?.message || 'Something went wrong while submitting.')
    } finally {
      setSubmitting(false)
    }
  }

  const quickReplies = useMemo(() => {
    if (!currentSlot) return [] as string[]
    return currentSlot.quickReplies || []
  }, [currentSlot])

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={viewRef}
        className="h-[420px] w-full overflow-y-auto rounded border p-3"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${
              m.role === 'assistant' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`max-w-[80%] rounded px-3 py-2 text-sm ${
                m.role === 'assistant'
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-black text-white'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {quickReplies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {quickReplies.map((q) => (
              <button
                key={q}
                className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
                onClick={() => onQuick(q)}
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          className="flex-1 rounded border p-2 text-sm"
          placeholder={
            currentSlot ? `Your answer…` : 'Type confirm or edit <field>'
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSend()
          }}
        />
        <button
          className="rounded bg-black px-3 py-2 text-sm text-white"
          onClick={onSend}
          disabled={submitting}
        >
          Send
        </button>
      </div>
    </div>
  )
}

function buildSummary(row: ProjectRow) {
  const keys: SlotKey[] = PROJECT_SLOTS.map((s) => s.key)
  const obj: Record<string, any> = {}
  keys.forEach((k) => (obj[k] = row[k] ?? ''))
  return '```json\n' + JSON.stringify(obj, null, 2) + '\n```'
}

function normalizeForSheet(row: ProjectRow) {
  const out: Record<string, any> = {}
  for (const s of PROJECT_SLOTS) {
    let v = row[s.key]
    if (
      s.kind === 'number' ||
      s.kind === 'lat' ||
      s.kind === 'lng' ||
      s.key === 'sortOrder'
    ) {
      if (v === '' || v === undefined || v === null) v = ''
      else v = Number(v)
    }
    out[s.key] = v ?? ''
  }
  return out
}
