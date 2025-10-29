'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

type PWAInstallState =
  | 'not-installed'
  | 'installed'
  | 'prompt-available'
  | 'not-supported'

export function usePWAInstall() {
  const [installState, setInstallState] =
    useState<PWAInstallState>('not-installed')
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // Check if app is already installed
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setInstallState('installed')
        return true
      }
      return false
    }

    // Check if PWA is supported
    const checkPWASupport = () => {
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        setInstallState('not-supported')
        return false
      }
      return true
    }

    // Handle beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      const event = e as BeforeInstallPromptEvent
      setDeferredPrompt(event)
      setInstallState('prompt-available')
    }

    // Handle app installed event
    const handleAppInstalled = () => {
      setInstallState('installed')
      setDeferredPrompt(null)
    }

    // Initialize
    if (!checkPWASupport()) return
    if (checkIfInstalled()) return

    // Listen for install prompt
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    // Check periodically if app was installed (fallback)
    const checkInterval = setInterval(() => {
      if (checkIfInstalled()) {
        clearInterval(checkInterval)
      }
    }, 1000)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
      window.removeEventListener('appinstalled', handleAppInstalled)
      clearInterval(checkInterval)
    }
  }, [])

  const install = async () => {
    if (!deferredPrompt) return false

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        setInstallState('installed')
        setDeferredPrompt(null)
        return true
      }
    } catch (error) {
      console.error('Error installing PWA:', error)
    }

    return false
  }

  return {
    installState,
    canInstall: installState === 'prompt-available',
    isInstalled: installState === 'installed',
    isSupported: installState !== 'not-supported',
    install,
  }
}
