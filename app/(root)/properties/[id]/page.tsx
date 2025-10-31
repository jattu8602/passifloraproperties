import PropertyHeader from '@/components/PropertyHeader'
import PropertyGallery from '@/components/PropertyGallery'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyMap from '@/components/PropertyMap'
import CollapsibleSection from '@/components/CollapsibleSection'
import ScheduleTourSidebar from '@/components/ScheduleTourSidebar'
import PropertyForm from '@/components/PropertyForm'
import {
  DoorOpen,
  FileText,
  Calculator,
  Landmark,
  Award,
  History,
  MapPin,
  Leaf,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader />

      <main className="container mx-auto px-3 md:px-6 py-4 md:py-8">
        <div className="flex gap-6 md:gap-8 flex-col lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <PropertyGallery />
            <PropertyDetails />
            <PropertyMap />

            {/* Collapsible Sections */}
            <div className="divide-y">
              <CollapsibleSection
                title="Open houses"
                icon={<DoorOpen className="h-6 w-6" />}
              >
                <p className="text-muted-foreground">
                  There are no upcoming open houses.
                </p>
                <p className="mt-4 font-medium">Tour when it works for you.</p>
                <Button variant="secondary" className="mt-2 rounded-full">
                  Schedule tour
                </Button>
              </CollapsibleSection>

              <CollapsibleSection
                title="Property details"
                icon={<FileText className="h-6 w-6" />}
              />

              <CollapsibleSection
                title="Monthly payment"
                icon={<Calculator className="h-6 w-6" />}
              />

              <CollapsibleSection
                title="Connect with a lender"
                icon={<Landmark className="h-6 w-6" />}
              />

              <CollapsibleSection
                title="Veterans & military benefits"
                icon={<Award className="h-6 w-6" />}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span>Sponsored by</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-blue-900 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                    <span className="font-medium">Veterans United</span>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                title="Property history"
                icon={<History className="h-6 w-6" />}
              />

              <CollapsibleSection
                title="Neighborhood & schools"
                icon={<MapPin className="h-6 w-6" />}
              />

              <CollapsibleSection
                title="Environmental risk"
                icon={<Leaf className="h-6 w-6" />}
              />

              <CollapsibleSection
                title="Home value"
                icon={<TrendingUp className="h-6 w-6" />}
              />
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:w-96 xl:w-[400px]">
            <ScheduleTourSidebar />
          </aside>
        </div>
      </main>

      <PropertyForm />
    </div>
  )
}

export default Index
