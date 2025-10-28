'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { X, Apple, Facebook, Mail } from 'lucide-react'
import gsap from 'gsap'

type AuthModalProps = {
  open: boolean
  onClose: () => void
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (!open) return
    if (!backdropRef.current || !panelRef.current) return
    const ctx = gsap.context(() => {
      gsap.set(backdropRef.current, { opacity: 0 })
      gsap.set(panelRef.current, { y: -40, opacity: 0 })
      const tl = gsap.timeline({ paused: true })
      tl.to(
        backdropRef.current,
        { opacity: 1, duration: 0.25, ease: 'power2.out' },
        0
      ).to(
        panelRef.current,
        { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
        0.05
      )
      tl.play(0)
      tlRef.current = tl
    })
    const id = setTimeout(() => emailRef.current?.focus(), 120)
    return () => {
      clearTimeout(id)
      ctx.revert()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
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
      className="fixed inset-0 z-[70]"
      role="dialog"
      aria-modal
      onClick={handleClose}
    >
      <div ref={backdropRef} className="absolute inset-0 bg-black/50" />
      <div
        className="relative h-full w-full flex items-start justify-center pt-16 md:pt-24"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={panelRef}
          className="mx-auto w-[min(520px,90vw)] rounded-2xl bg-white p-6 md:p-8 shadow-xl"
        >
          <div className="relative">
            <h2 className="text-xl md:text-2xl font-extrabold text-center">
              Log in or create account
            </h2>
            <button
              aria-label="Close"
              onClick={handleClose}
              className="absolute -top-1 right-0 h-8 w-8 md:h-9 md:w-9 rounded-full grid place-items-center bg-black text-white hover:bg-gray-900 shadow"
            >
              <X size={18} strokeWidth={3} />
            </button>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">
              Email address <span className="text-gray-400">required</span>
            </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
            <button className="mt-4 w-full bg-black text-white rounded-lg py-3 font-bold hover:bg-gray-900 transition">
              Continue
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3 font-semibold hover:bg-gray-50">
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.5 32.9 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.7 6.1 29.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 18.4-7.3 19.8-16.8.1-.8.2-1.6.2-2.4 0-1.1-.1-2.1-.4-3.3z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.7 16.6 19 14 24 14c3 0 5.7 1.1 7.8 3l5.7-5.7C33.7 6.1 29.1 4 24 4 16.1 4 9.5 8.1 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5 0 9.6-1.9 13.1-5l-6-5c-2.1 1.4-4.7 2-7.1 2-5.1 0-9.5-3.1-11.2-7.4l-6.5 5C9.5 39.8 16.2 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.9-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.7 6.1 29.1 4 24 4c-7.9 0-14.7 4.6-17.7 10.7l6.6 4.8C14.7 16.6 19 14 24 14c3 0 5.7 1.1 7.8 3l5.7-5.7C33.7 6.1 29.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 18.4-7.3 19.8-16.8.1-.8.2-1.6.2-2.4 0-1.1-.1-2.1-.4-3.3z"
                />
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3 font-semibold hover:bg-gray-50">
              <Facebook size={18} />
              Continue with Facebook
            </button>
            <button className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3 font-semibold hover:bg-gray-50">
              <Apple size={18} />
              Continue with Apple
            </button>
          </div>

          <div className="text-center mt-6 space-y-2 text-sm">
            <p className="font-semibold">Are you a real estate agent?</p>
            <p>
              <a href="#" className="underline">
                Log in or create an account
              </a>
            </p>
            <p>
              <a href="#" className="underline">
                Purchase products
              </a>
            </p>
            <p className="text-gray-500 mt-2">
              By creating an account you agree to Realtor.com's
              <br />
              <a href="#" className="underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
