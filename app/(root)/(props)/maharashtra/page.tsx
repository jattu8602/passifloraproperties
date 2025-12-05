'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { maharashtraProjects } from './maharashtra-projects.data'
import { PropertyCard } from '@/components/property-card'

export default function MaharashtraPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
            className="hover:bg-accent cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl md:text-2xl font-semibold">Maharashtra</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Projects List */}
      <main className="container mx-auto px-4 py-8 md:py-10 lg:py-12 space-y-12 md:space-y-14 lg:space-y-16">
        {maharashtraProjects.map((project, index) => (
          <PropertyCard
            key={project.id}
            title={project.title}
            shortSummary={project.shortSummary}
            highlights={project.highlights}
            imageUrl={project.imageUrl}
            link={project.link}
            index={index}
          />
        ))}
      </main>
    </div>
  )
}
