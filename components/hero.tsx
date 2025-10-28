'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('buy')
  const [location, setLocation] = useState('Maharashtra, India')

  const tabs = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'sell', label: 'Sell' },
    { id: 'preapproval', label: 'Pre-approval' },
    { id: 'justsold', label: 'Just sold' },
    { id: 'homevalue', label: 'Home value' },
  ]

  return (
    <section
      className="relative h-80 md:h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url(/placeholder.svg?height=500&width=1200&query=luxury-eco-resort-landscape-with-green-nature-and-modern-architecture)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance leading-tight">
            The #1 site real estate professionals trust
            <span className="text-amber-400">*</span>
          </h1>
        </div>

        {/* Search Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 border-b border-white/30 pb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-bold text-xs md:text-sm transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white border-b-2 border-white pb-2'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full p-2 flex items-center gap-2 shadow-lg max-w-2xl mx-auto">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, address, or ZIP"
            className="flex-1 px-3 md:px-4 py-2 md:py-3 outline-none text-gray-800 placeholder-gray-500 text-sm md:text-base"
          />
          <button className="bg-black text-white p-2 md:p-3 rounded-full hover:bg-gray-800 transition">
            <Search size={20} />
          </button>
        </div>

        {/* Helper text */}
        <div className="text-center mt-3 md:mt-4">
          <p className="text-white/80 text-xs md:text-sm flex items-center justify-center gap-2">
            <Search size={16} />
            Search it how you'd say it. Try it
          </p>
        </div>
      </div>

      {/* Invisible sentinel for mobile sticky search trigger */}
      <div
        id="hero-sentinel"
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
      />
    </section>
  )
}
