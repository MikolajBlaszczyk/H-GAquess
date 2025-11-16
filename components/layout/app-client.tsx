"use client"

import { useState } from "react"
import Header from "@/components/header"
import HomeView from "@/components/landing-page/home-view"
import ProductSummary from "@/components/product-summary"
import Footer from "@/components/footer"

export default function AppClient() {
  const [showProductSummary, setShowProductSummary] = useState(false)

  return (
    <main className="bg-neutral-950 text-neutral-50">
      <Header onNavigateToProduct={() => setShowProductSummary(true)} />
      
      {showProductSummary ? (
        <ProductSummary onBackHome={() => setShowProductSummary(false)} />
      ) : (
        <HomeView />
      )}
      
      <Footer />
    </main>
  )
}
