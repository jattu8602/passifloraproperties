'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  src: string
  className?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  playbackRate?: number
  showControls?: boolean
  poster?: string
}

export function VideoPlayer({
  src,
  className,
  autoplay = false,
  loop = true,
  muted = true,
  playbackRate = 1,
  showControls = false,
  poster,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying && video.paused) {
      video.play().catch(() => {
        // Handle autoplay restrictions
        setIsPlaying(false)
      })
    } else if (!isPlaying && !video.paused) {
      video.pause()
    }

    if (video.playbackRate !== playbackRate) {
      video.playbackRate = playbackRate
    }
  }, [isPlaying, playbackRate])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(() => setIsPlaying(true))
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      className={cn('relative w-full h-full', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop={loop}
        muted={muted}
        playsInline
        controls={showControls}
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Button
            variant="ghost"
            size="icon"
            className="h-16 w-16 rounded-full bg-white/90 hover:bg-white shadow-lg"
            onClick={togglePlay}
            aria-label="Play video"
          >
            <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
          </Button>
        </div>
      )}
      {isPlaying && isHovered && !showControls && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 shadow-lg pointer-events-auto"
            onClick={togglePlay}
            aria-label="Pause video"
          >
            <Pause className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}
    </div>
  )
}
