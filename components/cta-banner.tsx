export default function CTABanner() {
  return (
    <section className="py-20 md:py-32 bg-neutral-950 border-y border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-neutral-50 mb-6 text-balance">
          Ready to Transform Your Relaxation Experience?
        </h2>

        <p className="text-neutral-400 mb-10 text-lg">
          Connect with our specialists to explore customization options and find the perfect Aquess model for your space
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-neutral-50 text-neutral-950 font-light tracking-wide hover:bg-neutral-200 transition-colors">
            Download Catalog
          </button>
          <button className="px-8 py-3 border-2 border-neutral-500 text-neutral-50 font-light tracking-wide hover:bg-neutral-900 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
