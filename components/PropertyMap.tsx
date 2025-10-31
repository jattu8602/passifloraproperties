import { Button } from '@/components/ui/button'
import { Car } from 'lucide-react'

const PropertyMap = () => {
  return (
    <div className="space-y-2 md:space-y-3">
      <div className="relative bg-muted rounded-lg overflow-hidden h-64 md:h-80 lg:h-96">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full shadow-lg animate-pulse"></div>
          </div>
          <div className="absolute bottom-2 right-2 bg-background/90 px-2 py-1 rounded text-xs shadow-sm">
            Map data ©2025 Google
          </div>
          <div className="absolute top-2 right-2 bg-background/90 px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium shadow-sm">
            Street View
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        className="w-full justify-start text-sm md:text-base h-10 md:h-11"
      >
        <Car className="h-4 w-4 md:h-5 md:w-5 mr-2" />
        Add a commute
      </Button>
    </div>
  )
}

export default PropertyMap
