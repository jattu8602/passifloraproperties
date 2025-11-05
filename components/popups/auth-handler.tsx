'use client'

import { useEffect, useState, useRef } from 'react'
import { useSession } from 'next-auth/react'
import SuccessModal from './success-modal'

const SUCCESS_MODAL_SHOWN_KEY = 'auth_success_shown'

export default function AuthHandler() {
  const { data: session, status } = useSession()
  const [showSuccess, setShowSuccess] = useState(false)
  const initialStatusRef = useRef<string | null>(null)
  const hasShownRef = useRef(false)

  // Track initial session status on mount
  useEffect(() => {
    if (initialStatusRef.current === null) {
      initialStatusRef.current = status
    }
  }, [status])

  useEffect(() => {
    // Only show success modal if:
    // 1. User just authenticated (status changed from loading/unauthenticated → authenticated)
    // 2. Haven't shown it in this browser session yet
    // 3. Haven't already shown it in this component instance
    if (
      status === 'authenticated' &&
      session &&
      initialStatusRef.current !== 'authenticated' &&
      !hasShownRef.current
    ) {
      // Check sessionStorage to prevent showing on page refresh
      const alreadyShown = sessionStorage.getItem(SUCCESS_MODAL_SHOWN_KEY)

      if (!alreadyShown) {
        setShowSuccess(true)
        hasShownRef.current = true
        sessionStorage.setItem(SUCCESS_MODAL_SHOWN_KEY, 'true')
      }
    }
  }, [session, status])

  const handleCloseSuccess = () => {
    setShowSuccess(false)
  }

  return (
    <SuccessModal
      open={showSuccess}
      onClose={handleCloseSuccess}
      userName={session?.user?.name || undefined}
    />
  )
}
