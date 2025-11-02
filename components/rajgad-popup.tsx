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

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-2xl p-0 overflow-hidden"
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative">
          {/* Custom Close Button */}
          <DialogClose
            onClick={handleOpenChange.bind(null, false)}
            className="absolute top-0 right-0 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:cursor-pointer"
          >
            <X className="w-4 h-4 font-bold stroke-[4]" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Banner Image */}
          <div className="relative w-full h-auto">
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
          <div className="flex flex-row gap-2 sm:gap-3 p-3 sm:p-6 bg-white">
            <Button
              onClick={handleGoToPage}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-6 text-sm sm:text-lg"
            >
              Go to Page
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 sm:py-6 text-sm sm:text-lg"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
