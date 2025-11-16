"use client"

import { useState, useEffect } from "react"

interface HeaderProps {
  onNavigateToProduct: () => void
}

export default function Header({ onNavigateToProduct }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCollectionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)
    onNavigateToProduct()
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1
            className={`text-2xl font-light tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-neutral-950" : "text-neutral-50"
            }`}
          >
            AQUESS
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a
            href="#"
            onClick={handleCollectionClick}
            className={`text-sm transition-colors duration-300 cursor-pointer ${
              isScrolled
                ? "text-neutral-600 hover:text-neutral-950"
                : "text-neutral-100 hover:text-neutral-50"
            }`}
          >
            Collection
          </a>
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={handleCollectionClick}
            className={`hidden md:block text-sm transition-colors duration-300 cursor-pointer ${
              isScrolled
                ? "text-neutral-600 hover:text-neutral-950"
                : "text-neutral-100 hover:text-neutral-50"
            }`}
          >
            Catalogue
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-neutral-600" : "text-neutral-300"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`absolute top-full left-0 right-0 border-b transition-colors duration-300 md:hidden ${
              isScrolled
                ? "bg-neutral-50 border-neutral-200"
                : "bg-neutral-900/95 border-neutral-800"
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#"
                onClick={handleCollectionClick}
                className={`block text-sm transition-colors duration-300 cursor-pointer ${
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-950"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                Collection
              </a>
              <a
                href="#"
                onClick={handleCollectionClick}
                className={`block text-sm transition-colors duration-300 cursor-pointer ${
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-950"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                Catalogue
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
