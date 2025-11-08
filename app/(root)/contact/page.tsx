import ContactForm from "@/components/ContactForm"

export default function ContactPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const projectSlug = typeof searchParams.project === 'string' ? searchParams.project : undefined
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-700 mt-2">We’d love to help you explore your next land or farmhouse investment.</p>
        <div className="mt-6 border border-gray-200 rounded-xl p-5">
          <ContactForm projectSlug={projectSlug} />
        </div>
      </section>
    </main>
  )
}


