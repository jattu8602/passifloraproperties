import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Home, Calendar, DollarSign, Warehouse, Hammer } from 'lucide-react'

const PropertyDetails = () => {
  const features = [
    'Hardwood floors',
    'Single story',
    'Dishwasher',
    'Basement',
    'Central air',
    'Forced air',
  ]

  const stats = [
    { icon: Home, label: 'Property type', value: 'Single family' },
    { icon: Calendar, label: 'On Realtor.com', value: '1 day' },
    { icon: DollarSign, label: 'Price per sqft', value: '$244' },
    { icon: Warehouse, label: 'Garage', value: '1 Car' },
    { icon: Hammer, label: 'Year built', value: '1956' },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-600 rounded-full"></div>
        <span className="text-xs md:text-sm font-medium">House for sale</span>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          $329,000
        </h1>
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-base md:text-lg">
          <span>
            <strong>3</strong> bed
          </span>
          <span>
            <strong>2</strong> bath
          </span>
          <span>
            <strong>1,349</strong> sqft
          </span>
          <span className="hidden sm:inline">
            <strong>8,712</strong> sqft lot
          </span>
        </div>
      </div>

      <a
        href="#"
        className="text-xs md:text-sm underline hover:no-underline block"
      >
        7614 Chicago Ave S, Richfield, MN 55423
      </a>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base font-medium">
            Est $2,139/mo
          </span>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <Button variant="outline" className="rounded-full text-sm md:text-base">
          Get pre-approved
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {features.map((feature) => (
          <Badge
            key={feature}
            variant="secondary"
            className="rounded-sm bg-muted text-foreground font-normal text-xs md:text-sm"
          >
            {feature}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-4 md:py-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex gap-2 md:gap-3">
            <stat.icon className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-foreground/80" />
            <div>
              <div className="font-bold text-sm md:text-base">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-sm md:text-base h-10 md:h-11">
          Contact agent
        </Button>
        <Button
          variant="outline"
          className="rounded-full text-sm md:text-base h-10 md:h-11"
        >
          Compare my home
        </Button>
      </div>

      <div className="text-xs text-muted-foreground space-y-1 pt-2">
        <p>
          Realtor.com checked: A few minutes ago | Listing last updated: Oct 29,
          2025 at 3:44 AM (GMT+5:30)
        </p>
        <p>Source: NorthstarMLS, MLS #6801733</p>
      </div>
    </div>
  )
}

export default PropertyDetails
