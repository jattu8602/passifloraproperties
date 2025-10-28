"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"

export default function StickySearch() {
  const [isVisible, setIsVisible] = useState(false)
  const [location, setLocation] = useState("Maharashtra, India")

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky search when scrolled past 300px (hero section height)
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0 shadow-md" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-full p-2 flex items-center gap-2 shadow-lg max-w-2xl w-full border border-gray-300">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, address, or ZIP"
              className="flex-1 px-4 py-2 outline-none text-gray-800 placeholder-gray-500 text-sm"
            />
            <button className="text-gray-400 hover:text-gray-600 transition p-2">
              <X size={18} />
            </button>
            <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
