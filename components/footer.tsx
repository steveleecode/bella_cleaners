export function Footer() {
  return (
    <footer className="bg-secondary border-t-4 border-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            {/* Branded logo matching header */}
            <a href="#" className="flex flex-col items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-accent" />
                <div className="w-1 h-1 rounded-full bg-highlight" />
                <span className="font-[var(--font-script)] text-2xl text-accent">Bella</span>
                <div className="w-1 h-1 rounded-full bg-highlight" />
                <div className="w-6 h-px bg-accent" />
              </div>
              <span className="font-bold text-primary text-lg tracking-wider -mt-1">CLEANERS</span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Sammamish&apos;s premier dry cleaning service. Quality care for your garments, delivered with a personal
              touch since 2003.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Shirt Laundering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Alterations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Wedding Gowns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Area Rugs & Drapery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>723 228th Ave NE</li>
              <li>Sammamish, WA 98074</li>
              <li>
                <a href="tel:+14258685557" className="hover:text-primary transition-colors">
                  (425) 868-5557
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bella Cleaners. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
