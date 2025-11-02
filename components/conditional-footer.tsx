'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  const [shouldShowFooter, setShouldShowFooter] = useState(true)

  useEffect(() => {
    // Check if we're on the not-found page by looking for specific content
    // The not-found page has a specific structure we can detect
    const checkForNotFound = () => {
      const notFoundHeading = document.querySelector('#not-found-heading')
      const notFoundText = document.querySelector('p.text-yellow-400')

      // If we find the not-found page elements, hide the footer
      if (
        notFoundHeading ||
        (notFoundText && notFoundText.textContent?.includes('404'))
      ) {
        setShouldShowFooter(false)
      } else {
        setShouldShowFooter(true)
      }
    }

    // Check after a short delay to ensure DOM is ready
    const timeout = setTimeout(checkForNotFound, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [pathname]) // Re-check when pathname changes

  if (!shouldShowFooter) {
    return null
  }

  return <Footer />
}
