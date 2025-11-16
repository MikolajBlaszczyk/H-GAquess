import Header from "@/components/header"
import HeroSection from "@/components/landing-page/hero-section"
import ProductShowcase from "@/components/landing-page/product-showcase"
import QualityFeatures from "@/components/landing-page/quality-features"
import CTABanner from "@/components/cta-banner"
import ProductSummary from "@/components/product-summary"
import Footer from "@/components/footer"
import AppClient from "@/components/layout/app-client"

export const metadata = {
  title: "Aquess - Luxury Hot Tubs & Spa",
  description:
    "Discover the pinnacle of relaxation with Aquess luxury hot tubs. Premium craftsmanship meets innovative spa technology.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function Home() {
  return <AppClient />
}
