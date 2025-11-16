'use client'

import React from 'react'

// --- Data Definitions ---
interface Specification {
  feature: string
  value: string
}

interface FeatureCard {
  icon: string
  title: string
  description: string
}

const technicalSpecs: Specification[] = [
  { feature: 'Seating Capacity', value: '5 Persons' },
  { feature: 'Dimensions', value: '200 x 200 x 82 cm' },
  { feature: 'Shell Material', value: 'Premium Aristech Acrylic (USA)' },
  { feature: 'Number of Hydro-Massage Jets', value: '28' },
  { feature: 'Control System', value: 'Balboa TP600 / BP200G1' },
  { feature: 'Power Supply', value: '230 V (Plug & Play ready)' },
  { feature: 'Insulation', value: 'High-Density Thermal Insulation' },
]

const keyFeatures: FeatureCard[] = [
  {
    icon: "fa-solid fa-gem",
    title: "Premium Aristech Acrylic Shell",
    description: "High-quality Aristech USA acrylic offers long-lasting durability, effortless cleaning, and a sleek, modern look.",
  },
  {
    icon: "fa-solid fa-water",
    title: "15 Precision Hydrotherapy Jets",
    description: "A combination of directional and rotating jets delivers deep muscle relief and a soothing full-body massage.",
  },
  {
    icon: "fa-solid fa-fan",
    title: "3 HP LX Whirlpool Pump",
    description: "Powerful yet quiet motor ensures an invigorating hydromassage experience with energy-efficient performance.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Ambient LED Mood Lighting",
    description: "Customizable multicolor LEDs create an atmospheric glow perfect for evening relaxation.",
  },
]

const healthBenefits: string[] = [
  'Deep Muscle Relaxation and Tension Relief',
  'Significant Stress and Anxiety Reduction',
  'Improved Blood Circulation and Detoxification',
  'Natural Skin Smoothing and Cellulite Reduction',
]

const additionalEquipment: string[] = [
  'Integrated Bluetooth Audio Speakers',
  'Aromatherapy Infusion System',
  'Multi-Color Perimeter LED Lighting',
]

// --- Component ---
interface ProductSummaryProps {
  onBackHome: () => void
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ onBackHome }) => {
  const navigate = () => {
    window.location.href = "https://homegarden.com.pl/search/product/index?phrase=aquess";
  }

  return (
    <div className="product-summary-page bg-neutral-950 text-neutral-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={onBackHome}
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors duration-300 text-sm font-light"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* 1. Header and Brief Description */}
      <section className="py-20 md:py-32 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-50 mb-6 text-balance">
              Aquess Zenya 3201 – Oasis of Tranquility for 5 People
            </h1>

            {/* Image Placeholder */}
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg overflow-hidden mb-8 border border-neutral-800 flex items-center justify-center">
              <img
                src="/aquessLanding.jpg"
                alt="Aquess Zenya 3201 hot tub"
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            {/* Marketing Description */}
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed text-balance">
              The Zenya 3201 is the epitome of home luxury. Designed for five, it offers unparalleled relaxation and wellness
              benefits. Its versatile design allows for easy indoor or outdoor installation and simple 230 V connection,
              transforming any space into your private haven.
            </p>
          </header>
        </div>
      </section>

      {/* 2. Technical Specification */}
      <section className="py-20 md:py-32 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-50 mb-12 text-center">Detailed Technical Specification</h2>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900">
            <table className="w-full">
              <thead className="bg-neutral-800 border-b border-neutral-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-light text-neutral-50 uppercase tracking-widest">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-neutral-50 uppercase tracking-widest">Value</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-neutral-300 font-light">{spec.feature}</td>
                    <td className="px-6 py-4 text-sm text-neutral-50 font-light">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Key Features (Systems) */}
      <section className="py-20 md:py-32 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-50 mb-12 text-center">Innovative Wellness System</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-8 hover:border-neutral-600 hover:bg-neutral-800/70 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className={feature.icon}></i></div>

                {/* Title */}
                <h3 className="text-lg font-light text-neutral-50 mb-4">{feature.title}</h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Added Value (Health and Relaxation) */}
      <section className="py-20 md:py-32 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-50 mb-12 text-center">Health Benefits and Luxury</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Health Benefits */}
            <div>
              <h4 className="text-2xl font-light text-neutral-50 mb-8">Therapeutic Advantages</h4>
              <ul className="space-y-4">
                {healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-neutral-400 flex-shrink-0 mt-1">✓</span>
                    <span className="text-neutral-300 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Equipment */}
            <div>
              <h4 className="text-2xl font-light text-neutral-50 mb-8">Integrated Luxury Amenities</h4>
              <ul className="space-y-4">
                {additionalEquipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-neutral-400 flex-shrink-0 mt-1">★</span>
                    <span className="text-neutral-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action and Service */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-light text-neutral-50 mb-6 text-balance">
            Ready to Transform Your Lifestyle?
          </h3>

          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            Discover the perfect blend of luxury, innovation, and wellness. Our specialists are ready to guide you through
            customization options and find the ideal Aquess model for your space.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => {navigate()}} className="px-8 py-3 bg-neutral-50 text-neutral-950 font-light tracking-wide hover:bg-neutral-200 transition-colors duration-300">
              Order Now
            </button>
            <button className="px-8 py-3 border-2 border-neutral-500 text-neutral-50 font-light tracking-wide hover:bg-neutral-900 hover:border-neutral-400 transition-all duration-300">
              Additional Options (Steps, Wi-Fi, etc.)
            </button>
          </div>

          {/* Service Information */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-left">
            <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
              <span className="text-neutral-50 font-light">Service and Support:</span> Comprehensive installation assistance,
              full warranty coverage, and readily available spare parts ensure peace of mind and long-term satisfaction.
            </p>
            <p className="text-neutral-400 text-sm">
              <span className="text-neutral-300">Optional Upgrades:</span> Steps
              <span className="text-neutral-300 ml-1">[Placeholder: $299]</span> | Wi-Fi Module
              <span className="text-neutral-300 ml-1">[Placeholder: $499]</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductSummary
