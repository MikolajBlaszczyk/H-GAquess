"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen bg-gradient-to-br  from-neutral-900 via-neutral-950 to-neutral-950 overflow-hidden pt-24">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(./aquessLanding3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center min-h-[600px] md:min-h-screen text-center">
        <div className="mb-8 animate-fade-in">
          <span className="text-sm tracking-widest text-neutral-400 uppercase">Pure Relaxation</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-neutral-50 mb-8 text-balance max-w-4xl">
          Immerse yourself in ultimate luxury
        </h2>

        <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl text-balance">
          Experience the perfect fusion of innovative hydrotherapy technology and timeless design craftsmanship
        </p>

        <button className="px-8 py-3 border-2 border-neutral-400 text-neutral-50 text-sm font-light tracking-wide hover:bg-neutral-900 hover:border-neutral-300 transition-all duration-300">
          Discover the Collection
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.animate-fade-in) {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
