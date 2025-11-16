import HeroSection from "@/components/landing-page/hero-section"
import ProductShowcase from "@/components/landing-page/product-showcase"
import QualityFeatures from "@/components/landing-page/quality-features"
import CTABanner from "@/components/cta-banner"

export default function HomeView() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <QualityFeatures />
      <CTABanner />
    </>
  )
}
