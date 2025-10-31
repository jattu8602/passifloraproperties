'use client'

import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, ReactNode } from 'react'

interface CollapsibleSectionProps {
  title: string
  icon?: ReactNode
  children?: ReactNode
  defaultOpen?: boolean
}

const CollapsibleSection = ({
  title,
  icon,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t py-6">
      <Button
        variant="ghost"
        className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </Button>
      {isOpen && children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default CollapsibleSection
