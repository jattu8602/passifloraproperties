'use client'

import { useState, useCallback } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

type MapFrameProps = React.ComponentProps<'iframe'> & {
  className?: string
}

export function MapFrame({ className, onLoad, title, ...props }: MapFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = useCallback<NonNullable<typeof onLoad>>(
    (event) => {
      setIsLoaded(true)
      if (typeof onLoad === 'function') onLoad(event)
    },
    [onLoad]
  )

  return (
    <div className={cn('relative w-full h-full', className)}>
      {!isLoaded && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] overflow-hidden"
          style={{ pointerEvents: 'none' }}
        >
          <Skeleton className="h-full w-full" />
        </div>
      )}
      <iframe
        title={title}
        onLoad={handleLoad}
        {...props}
        className={cn('absolute inset-0 h-full w-full', props.className)}
      />
    </div>
  )
}


