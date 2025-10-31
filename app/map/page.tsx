'use client'

import { useEffect, useRef } from 'react'
// (Leaflet removed to avoid build-time module-not-found)

export default function MapPage() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Placeholder: no map init to keep build green without leaflet dependency
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <h1
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}
      >
        Map
      </h1>
      <div
        ref={mapContainerRef}
        id="map"
        style={{
          width: '100%',
          height: '70vh',
          borderRadius: 12,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f3f4f6',
          color: '#374151',
        }}
      >
        Interactive map coming soon.
      </div>
    </div>
  )
}
