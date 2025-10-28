'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'
import Image from 'next/image'

type SuccessModalProps = {
  open: boolean
  onClose: () => void
  userName?: string
}

export default function SuccessModal({
  open,
  onClose,
  userName,
}: SuccessModalProps) {
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (!open) return
    if (!backdropRef.current || !panelRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(backdropRef.current, { opacity: 0 })
      gsap.set(panelRef.current, { y: -40, opacity: 0, scale: 0.95 })

      const tl = gsap.timeline({ paused: true })
      tl.to(
        backdropRef.current,
        { opacity: 1, duration: 0.25, ease: 'power2.out' },
        0
      ).to(
        panelRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
        },
        0.1
      )
      tl.play(0)
      tlRef.current = tl
    })

    return () => ctx.revert()
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Auto-close after 3 seconds
  useEffect(() => {
    if (!open) return

    const timer = setTimeout(() => {
      handleClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [open])

  const handleClose = () => {
    if (tlRef.current && backdropRef.current && panelRef.current) {
      tlRef.current.reverse()
      tlRef.current.eventCallback('onReverseComplete', () => onClose())
    } else {
      onClose()
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80]"
      role="dialog"
      aria-modal
      onClick={handleClose}
    >
      <div ref={backdropRef} className="absolute inset-0 bg-black/60" />
      <div
        className="relative h-full w-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={panelRef}
          className="mx-auto w-[min(480px,90vw)] rounded-2xl bg-white p-8 shadow-2xl text-center"
        >
          <button
            aria-label="Close"
            onClick={handleClose}
            className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-black text-white grid place-items-center shadow-md hover:bg-gray-800 transition-colors duration-200"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          <div className="mb-6">
            <Image
              src="/success.svg"
              alt="Success"
              width={200}
              height={160}
              className="mx-auto"
              priority
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome{userName ? `, ${userName}` : ''}!
          </h2>

          <p className="text-gray-600 mb-6">
            You now have access to more from Passiflora Properties!
          </p>

          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              Do you have a home to sell? If so, check out our{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Seller's Marketplace
              </a>
              .
            </p>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="w-full bg-black text-white rounded-lg py-3 font-bold hover:bg-gray-900 transition-colors duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
