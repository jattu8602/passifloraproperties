import Header from "@/components/header"
import Hero from "@/components/hero"
import StickySearch from "@/components/sticky-search"
import Gallery from "@/components/Gallery"
// import Gallery from "@/components/Gallery"
import DiscoverHelp from "@/components/discover-help"
import RecommendedNeighborhoods from "@/components/recommended-neighborhoods"
import UniqueHomes from "@/components/unique-homes"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <StickySearch />
      <Hero />
      {/* <BrowseProperties /> */}
      <Gallery />
      <DiscoverHelp />
      <RecommendedNeighborhoods />
      <UniqueHomes />
      <Footer />
    </main>
  )
}
