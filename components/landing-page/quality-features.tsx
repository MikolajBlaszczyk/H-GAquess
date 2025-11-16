export default function QualityFeatures() {
  const features = [
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
     {
      icon: "fa-solid fa-droplet",
      title: "Elegant Fountain Nozzles",
      description: "Soft cascading water enhances the spa ambience with tranquil, calming sound.",
    },
    {
      icon: "fa-solid fa-shield-virus",
      title: "Ozone Water Purification",
      description: "Built-in ozonator naturally sanitizes the water, removing odors and impurities for a cleaner, healthier soak.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-50 mb-4">Key features</h2>
          <p className="text-neutral-400 text-lg">Every detail engineered for your wellness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">
              <div className="text-4xl"><i className={feature.icon}></i></div>
              <h3 className="text-lg font-light text-neutral-50">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
