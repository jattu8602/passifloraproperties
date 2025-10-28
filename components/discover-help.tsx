"use client"

import { useState } from "react"
import { DollarSign, Calculator, PiggyBank } from "lucide-react"

export default function DiscoverHelp() {
  const [activeTab, setActiveTab] = useState("buying")

  const tabs = [
    { id: "buying", label: "Buying" },
    { id: "renting", label: "Renting" },
    { id: "selling", label: "Selling" },
  ]

  const cards = [
    {
      title: "Find out how much you can afford",
      description: "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
      link: "Try our affordability calculator",
      icon: DollarSign,
    },
    {
      title: "Understand your monthly costs",
      description:
        "Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals.",
      link: "Try our mortgage calculator",
      icon: Calculator,
    },
    {
      title: "Get help with your down payment",
      description:
        "You may be able to buy a home with just 3.5% down. Saving for that can be challenging–down payment assistance programs can help.",
      link: "Find down payment help",
      icon: PiggyBank,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Discover how we can help</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "border-2 border-gray-300 text-gray-700 hover:border-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-6">
                <Icon className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
              <a
                href="#"
                className="text-gray-900 font-bold underline hover:text-amber-700 transition-colors duration-200"
              >
                {card.link}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
