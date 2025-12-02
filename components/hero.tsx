'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { getAllProjects } from '@/lib/projects'
import SearchResults from '@/components/search-results'

export default function Hero() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('home')
  const [location, setLocation] = useState('')

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'maharashtra', label: 'Maharashtra' },
    { id: 'bihar', label: 'Bihar' },
    { id: 'jharkhand', label: 'Jharkhand' },
  ]

  return (
    <section className="relative h-120 md:h-[500px] flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero_Video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance leading-tight">
            The #1 Choice for Sustainable Land Investments in India
            {/* <span className="text-amber-400">*</span> */}
          </h1>
        </div>

        {/* Search Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 border-b border-white/30 pb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                if (tab.id === 'home') {
                  router.push('/')
                } else if (tab.id === 'maharashtra') {
                  router.push('/maharashtra')
                } else if (tab.id === 'bihar') {
                  router.push('/bihar')
                } else if (tab.id === 'jharkhand') {
                  router.push('/jharkhand')
                }
              }}
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
        <div
          id="hero-search-bar"
          className="bg-white rounded-full p-2 flex items-center gap-2 shadow-lg max-w-2xl mx-auto relative"
        >
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search projects or cities..."
            className="flex-1 px-3 md:px-4 py-2 md:py-3 outline-none text-gray-800 placeholder-gray-500 text-sm md:text-base"
          />
          {location.length > 0 && (
            <button
              onClick={() => setLocation('')}
              className="text-gray-400 hover:text-gray-600 transition p-2"
            >
              <X size={18} />
            </button>
          )}
          <button className="bg-black text-white p-2 md:p-3 rounded-full hover:bg-gray-800 transition">
            <Search size={20} />
          </button>

          {/* Search Results Dropdown */}
          {location.length > 0 && (
            <SearchResults
              results={getAllProjects().filter(p =>
                p.title.toLowerCase().includes(location.toLowerCase()) ||
                p.city.toLowerCase().includes(location.toLowerCase()) ||
                p.state.toLowerCase().includes(location.toLowerCase())
              )}
              onSelect={() => setLocation('')}
            />
          )}
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
