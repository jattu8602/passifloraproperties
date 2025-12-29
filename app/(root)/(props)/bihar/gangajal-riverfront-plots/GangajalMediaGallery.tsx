'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GANGAJAL_IMAGES, GANGAJAL_VIDEOS } from './gangajal-media.data'
import { Play, Image as ImageIcon, Video, X, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function GangajalMediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<{
    url: string
    type: 'image' | 'video'
    title: string
  } | null>(null)

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              Project <span className="text-primary italic">Visual Journey</span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Experience the evolution of Gangajal Riverfront through high-fidelity renders, site progress videos, and cinematic landscapes.
            </p>
          </div>
          <div className="hidden lg:block">
             <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Filter className="h-4 w-4" />
                <span>Filter Media Type</span>
             </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-start md:justify-start mb-8 md:mb-10 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <TabsList className="bg-muted/50 p-1 rounded-xl h-auto flex flex-nowrap min-w-max">
              <TabsTrigger value="all" className="rounded-lg px-4 md:px-6 py-2 md:py-2.5 data-[state=active]:bg-background shadow-sm text-xs md:text-sm">All Assets</TabsTrigger>
              <TabsTrigger value="renders" className="rounded-lg px-4 md:px-6 py-2 md:py-2.5 data-[state=active]:bg-background shadow-sm text-xs md:text-sm">3D Renders</TabsTrigger>
              <TabsTrigger value="videos" className="rounded-lg px-4 md:px-6 py-2 md:py-2.5 data-[state=active]:bg-background shadow-sm text-xs md:text-sm text-nowrap">Cinematic Videos</TabsTrigger>
              <TabsTrigger value="landscapes" className="rounded-lg px-4 md:px-6 py-2 md:py-2.5 data-[state=active]:bg-background shadow-sm text-xs md:text-sm">Landscapes</TabsTrigger>
              <TabsTrigger value="inspection" className="rounded-lg px-4 md:px-6 py-2 md:py-2.5 data-[state=active]:bg-background shadow-sm text-xs md:text-sm text-nowrap">Site Progress</TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="all" className="mt-0 outline-none">
              <MediaGrid
                items={[
                  ...GANGAJAL_VIDEOS.map((v) => ({ ...v, type: 'video' as const })),
                  ...GANGAJAL_IMAGES.map((i) => ({ ...i, type: 'image' as const })),
                ]}
                onSelect={setSelectedMedia}
              />
            </TabsContent>
            {/* ... other TabsContent remain the same ... */}

            <TabsContent value="renders" className="mt-0 outline-none">
              <MediaGrid
                items={GANGAJAL_IMAGES.filter(i => i.category === '3D Render').map((i) => ({ ...i, type: 'image' as const }))}
                onSelect={setSelectedMedia}
              />
            </TabsContent>

            <TabsContent value="videos" className="mt-0 outline-none">
              <MediaGrid
                items={GANGAJAL_VIDEOS.map((v) => ({ ...v, type: 'video' as const }))}
                onSelect={setSelectedMedia}
              />
            </TabsContent>

            <TabsContent value="landscapes" className="mt-0 outline-none">
              <MediaGrid
                items={GANGAJAL_IMAGES.filter(i => i.category === 'Scenic').map((i) => ({ ...i, type: 'image' as const }))}
                onSelect={setSelectedMedia}
              />
            </TabsContent>

            <TabsContent value="inspection" className="mt-0 outline-none">
              <MediaGrid
                items={[
                    ...GANGAJAL_VIDEOS.filter(v => v.category === 'Development' || v.category === 'Audit').map(v => ({...v, type: 'video' as const})),
                    ...GANGAJAL_IMAGES.filter(i => i.category === 'Inspection' || i.category === 'Environment').map(i => ({...i, type: 'image' as const}))
                ]}
                onSelect={setSelectedMedia}
              />
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedMedia(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full h-12 w-12"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="h-8 w-8" />
            </Button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative max-w-6xl w-full aspect-video flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  className="w-full h-full rounded-2xl shadow-2xl border border-white/10"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              )}
              <div className="text-center w-full">
                <p className="text-white text-2xl font-semibold tracking-tight uppercase tracking-[0.2em] opacity-80 mb-2">{selectedMedia.title}</p>
                 <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function MediaGrid({
  items,
  onSelect,
}: {
  items: Array<{
    url: string
    type: 'image' | 'video'
    title: string
    category: string
  }>
  onSelect: (item: { url: string; type: 'image' | 'video'; title: string }) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
          viewport={{ once: true }}
          className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
          onClick={() => onSelect(item)}
        >
          {item.type === 'video' ? (
            <div className="relative w-full h-full">
              <video
                src={item.url}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                muted
                onMouseOver={(e: React.MouseEvent<HTMLVideoElement>) => e.currentTarget.play()}
                onMouseOut={(e: React.MouseEvent<HTMLVideoElement>) => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  <Play className="h-7 w-7 fill-current ml-1" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60 opacity-60 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <div className="flex items-center justify-between text-white">
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
                  {item.category}
                </p>
                <p className="font-semibold text-lg leading-tight line-clamp-1">{item.title}</p>
              </div>
              <div className="ml-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                {item.type === 'video' ? (
                    <Video className="h-5 w-5" />
                ) : (
                    <ImageIcon className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
