'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ChevronRight, Info } from 'lucide-react'
import { useState } from 'react'

const ScheduleTourSidebar = () => {
  const [selectedDate, setSelectedDate] = useState(0)

  // Get current date and next two days
  const today = new Date()
  const dates = Array.from({ length: 3 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
    }
  })

  return (
    <div className="lg:sticky lg:top-20 space-y-4 md:space-y-6">
      <div className="border rounded-lg p-4 md:p-6 bg-background shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Schedule tour</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-3 text-sm md:text-base">
              What is your preferred tour date?
            </h3>
            <div className="relative">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin -mx-1 px-1">
                {dates.map((date, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(idx)}
                    className={`flex-shrink-0 w-[80px] md:w-[90px] py-2.5 md:py-3 px-2 text-center rounded-lg border transition-all ${
                      selectedDate === idx
                        ? 'bg-secondary text-secondary-foreground border-secondary shadow-sm'
                        : 'bg-background hover:bg-accent border-border'
                    }`}
                  >
                    <div className="text-xs">{date.day}</div>
                    <div className="text-sm font-medium mt-1">{date.date}</div>
                  </button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg flex-shrink-0 h-[60px] md:h-[65px] w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm block mb-2 font-medium">
              Email<span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              defaultValue="chaurasiyanitesh68@gmail.co"
              className="rounded-lg h-10 md:h-11"
            />
          </div>

          <div>
            <label className="text-sm block mb-2 font-medium">
              Phone<span className="text-destructive">*</span>
            </label>
            <Input
              type="tel"
              className="rounded-lg h-10 md:h-11"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <Select>
              <SelectTrigger className="rounded-lg h-10 md:h-11">
                <SelectValue placeholder="Are you buying or selling?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buying">Buying</SelectItem>
                <SelectItem value="selling">Selling</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="military" className="mt-0.5" />
            <label
              htmlFor="military"
              className="text-sm flex items-center gap-1 leading-tight cursor-pointer"
            >
              I've served in the U.S. military
              <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            </label>
          </div>

          <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 md:h-12 font-medium shadow-sm">
            Request tour
          </Button>
        </div>
      </div>

      <div className="border rounded-lg p-4 md:p-6 bg-background shadow-sm">
        <h3 className="font-bold mb-4 text-base md:text-lg">
          More about this property
        </h3>
        <Button
          variant="outline"
          className="w-full rounded-full h-10 md:h-11 font-medium"
        >
          Email agent
        </Button>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          By proceeding, you consent to receive calls and texts at the number
          you provided, including marketing by autodialer and prerecorded and
          artificial voice, and email, from realtor.com and{' '}
          <a href="#" className="underline hover:no-underline">
            others
          </a>{' '}
          about your inquiry and other home-related matters, but not as a
          condition of any purchase.{' '}
          <a href="#" className="underline hover:no-underline">
            More...
          </a>
        </p>
      </div>
    </div>
  )
}

export default ScheduleTourSidebar
