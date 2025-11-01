import Header from '@/components/header'
import Hero from '@/components/hero'
import StickySearch from '@/components/sticky-search'
import Gallery from '@/components/Gallery'
import DiscoverHelp from '@/components/discover-help'
import RecommendedNeighborhoods from '@/components/recommended-neighborhoods'
import AboutSection from '@/components/AboutSection'
import UniqueHomes from '@/components/unique-homes'
import Footer from '@/components/footer'
import BrowseProperties from '@/components/BrowseProperties'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <StickySearch />
      <Hero />

      {/* <Gallery /> */}
      <BrowseProperties />
      {/* <DiscoverHelp /> */}
      <RecommendedNeighborhoods />
      <AboutSection />

      <UniqueHomes />
      <Footer />
    </main>
  )
}
