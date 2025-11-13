'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function RajgadPopup() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if popup was already dismissed in this session
    const dismissed = sessionStorage.getItem('rajgad-popup-dismissed')
    if (!dismissed) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setOpen(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      sessionStorage.setItem('rajgad-popup-dismissed', 'true')
    }
  }

  const handleGoToPage = () => {
    setOpen(false)
    sessionStorage.setItem('rajgad-popup-dismissed', 'true')
    router.push('/rajgad')
  }

  const handleWhatsApp = () => {
    // Using the phone number from the image: +91 9823147882
    window.open('https://wa.me/919823147882', '_blank')
  }

  const handleClose = () => {
    setOpen(false)
    sessionStorage.setItem('rajgad-popup-dismissed', 'true')
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md p-0 overflow-hidden"
        showCloseButton={false}
      >
        <div className="relative">
          {/* Custom Close Button */}
          <DialogClose
            onClick={handleClose}
            className="absolute top-1 right-1 sm:top-0 sm:right-0 z-10 bg-white rounded-full p-0.5 sm:p-1 shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:cursor-pointer"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 font-bold stroke-[4]" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Banner Image - Clickable to close */}
          <div
            className="relative w-full h-auto cursor-pointer"
            onClick={handleClose}
          >
            <Image
              src="/bhor/popup.jpeg"
              alt="Rajgad Farm Plots - 4000 SQ.FT at the Foothills of Rajgad Fort"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Buttons Container */}
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 p-2 sm:p-3 md:p-4 bg-white">
            <Button
              onClick={handleGoToPage}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            >
              Go to Page
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
