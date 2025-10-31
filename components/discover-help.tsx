'use client'

import { useState } from 'react'
import { DollarSign, Calculator, PiggyBank } from 'lucide-react'

export default function DiscoverHelp() {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'values', label: 'Values & Promise' },
  ]

  const cards: Record<
    string,
    { title: string; description: string; highlight: string; icon: any }[]
  > = {
    about: [
      {
        title: 'About Passiflora Properties',
        description:
          'For over two decades, we have redefined land investment by blending luxury, transparency, and sustainability across farm plots, villas, and resort developments.',
        highlight: 'Where trust takes root, and land grows into legacy.',
        icon: DollarSign,
      },
      {
        title: 'Plant Your Legacy',
        description:
          'We help you own a meaningful part of nature that grows in both value and emotion—through legally verified land and long-term stewardship.',
        highlight: 'Own nature. Grow value. Build legacy.',
        icon: Calculator,
      },
      {
        title: 'Beyond Transactions',
        description:
          'Every investor, every family, every dream matters. We build lifelong relationships with end-to-end support and transparent processes.',
        highlight: 'People first. Processes clear. Value compounding.',
        icon: PiggyBank,
      },
    ],
    vision: [
      {
        title: 'Our Vision',
        description:
          'To be India’s most trusted name in premium land development, creating spaces where nature, wellness, and prosperity come together.',
        highlight: 'Inspiring wise investment and meaningful living.',
        icon: DollarSign,
      },
      {
        title: 'Our Mission',
        description:
          'Make land investment transparent, sustainable, and rewarding—delivering legally verified, nature-integrated properties that grow in value and purpose.',
        highlight: 'Verified lands. Sustainable growth. Seamless ownership.',
        icon: Calculator,
      },
      {
        title: 'Our Belief',
        description:
          'Every acre deserves a purpose. Every home deserves peace. Every investor deserves trust. We turn land into long-term pride and prosperity.',
        highlight: 'Land with purpose. Homes with peace. Trust by design.',
        icon: PiggyBank,
      },
    ],
    values: [
      {
        title: 'Trust & Transparency',
        description:
          'We deliver clear titles and open processes—ensuring confidence at every step, from discovery to documentation.',
        highlight: 'Trust built on clarity and consistency.',
        icon: DollarSign,
      },
      {
        title: 'Integrity & Sustainability',
        description:
          'We promise what we can deliver and respect nature’s balance—planning developments that endure and enrich.',
        highlight: 'Honest delivery. Nature-respecting design.',
        icon: Calculator,
      },
      {
        title: 'Growth & Legacy',
        description:
          'With FPO partnerships and resale support, we help your land work for you—creating wealth, purpose, and legacy for generations.',
        highlight: 'Your land, managed for long-term value.',
        icon: PiggyBank,
      },
    ],
  }

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
        Craft Your Legacy with Passiflora
      </h2>

      {/* Tabs */}
      <div className="flex gap-3 md:gap-4 mb-8 md:mb-12 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-black text-white'
                : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {cards[activeTab].map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-6">
                <Icon className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                {card.description}
              </p>
              <div className="text-gray-900 font-semibold text-sm md:text-base">
                {card.highlight}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
