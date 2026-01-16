"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="hidden sm:block w-8 h-px bg-accent" />
              <div className="hidden sm:block w-1 h-1 rounded-full bg-highlight" />
              <span className="font-[var(--font-script)] text-2xl md:text-3xl text-accent">Bella</span>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-highlight" />
              <div className="hidden sm:block w-8 h-px bg-accent" />
            </div>
            <span className="font-bold text-primary text-lg md:text-xl tracking-wider -mt-1">CLEANERS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#same-day"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Same-Day Service
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+14258685557" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              (425) 868-5557
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Visit Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#same-day"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Same-Day Service
              </a>
              <a
                href="#why-us"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="tel:+14258685557" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (425) 868-5557
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
