"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mapInstance: any | null = null;

    async function init() {
      const L = await import("leaflet");

      if (!mapContainerRef.current) return;

      // Initialize map centered on requested coordinates
      const center: [number, number] = [22.365142, 79.90028];
      mapInstance = L.map(mapContainerRef.current).setView(center, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance);

      // Create a simple house "logo" as a divIcon (emoji for now)
      const houseIcon = L.divIcon({
        html: "🏠",
        className: "house-marker",
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28],
      });

      L.marker(center, { icon: houseIcon })
        .addTo(mapInstance)
        .bindPopup("Passiflora Property Location")
        .openPopup();
    }

    init();

    return () => {
      if (mapInstance) {
        try {
          mapInstance.remove();
        } catch (_) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Map
      </h1>
      <div
        ref={mapContainerRef}
        id="map"
        style={{ width: "100%", height: "70vh", borderRadius: 12, overflow: "hidden" }}
      />

      <style>{`
        /* Size tweak for the house marker */
        .house-marker {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.25);
        }
      `}</style>
    </div>
  );
}


