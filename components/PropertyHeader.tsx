import { ChevronLeft, Search, Heart, Share2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PropertyHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="px-3 md:px-6 py-3 flex items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-9 w-9 md:h-10 md:w-10"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <div className="flex items-center gap-2 px-3 md:px-4 py-2 border rounded-full bg-background flex-1 max-w-[200px] md:max-w-xs">
          <span className="text-xs md:text-sm font-medium truncate">
            Richfield, MN
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 md:h-6 md:w-6 rounded-full p-0 flex-shrink-0"
          >
            <X className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-foreground text-background ml-auto flex-shrink-0"
          >
            <Search className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>

        <nav className="hidden lg:flex items-center gap-2 text-sm flex-1 overflow-x-auto">
          <a href="#" className="hover:underline whitespace-nowrap">
            Homes for sale
          </a>
          <span className="text-muted-foreground">›</span>
          <a href="#" className="hover:underline whitespace-nowrap">
            Minnesota
          </a>
          <span className="text-muted-foreground">›</span>
          <a href="#" className="hover:underline whitespace-nowrap">
            Hennepin county
          </a>
          <span className="text-muted-foreground">›</span>
          <a href="#" className="hover:underline font-medium whitespace-nowrap">
            Richfield
          </a>
          <span className="text-muted-foreground">›</span>
          <span className="font-medium whitespace-nowrap">
            7614 Chicago Ave S
          </span>
        </nav>

        <div className="flex items-center gap-1 md:gap-2 ml-auto">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-9 w-9 md:h-10 md:w-10"
          >
            <Heart className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-9 w-9 md:h-10 md:w-10"
          >
            <Share2 className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-9 w-9 md:h-10 md:w-10 hidden sm:flex"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>

      <div className="px-3 md:px-6 pb-3 text-xs text-muted-foreground">
        <div>Listed by Haile Ido</div>
        <div>Brokered by RES Realty</div>
      </div>
    </header>
  )
}

export default PropertyHeader
