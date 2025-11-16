export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Aquess Zenya 4",
      description: "Advanced hydrotherapy",
      image: "/modern-luxury-hot-tub-design.jpg",
    },
    {
      id: 2,
      name: "Aquess Zenya 3",
      description: "Compact elegance",
      image: "/sleek-spa-tub-water.jpg",
    },
    {
      id: 3,
      name: "Aquess Zenya 6",
      description: "Supreme 6-seat luxury configuration",
      image: "/premium-spa-jets-bubbles.jpg",
    },
  ]

  return (
    <section id="models" className="py-20 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-50 mb-4">Featured Collections</h2>
          <p className="text-neutral-400 text-lg">Discover our curated selection of premium hot tubs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 md:h-96 overflow-hidden bg-neutral-800">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-light text-neutral-50 mb-3">{product.name}</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{product.description}</p>

                <button className="text-sm text-neutral-300 hover:text-neutral-50 transition-colors flex items-center gap-2 group/btn">
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
