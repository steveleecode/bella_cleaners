import { Clock, ArrowRight, Check } from "lucide-react"

export function SameDayService() {
  return (
    <section id="same-day" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-info rounded-lg p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-highlight" />
              <h3 className="text-info-foreground font-bold text-2xl mb-6">Same Day Service</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <p className="text-sm font-bold text-info uppercase tracking-wide mb-1">Drop Off</p>
                  <p className="text-4xl font-bold text-primary">10 AM</p>
                </div>
                <ArrowRight className="h-8 w-8 text-highlight rotate-90 sm:rotate-0" />
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <p className="text-sm font-bold text-info uppercase tracking-wide mb-1">Pick Up</p>
                  <p className="text-4xl font-bold text-accent">4 PM</p>
                </div>
              </div>
              <p className="text-info-foreground/80 mt-6 text-sm">Monday through Friday</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Fast Turnaround</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Same-day service for your busy life
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand your time is valuable. Our same-day service ensures you never have to wait for freshly
              cleaned clothes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Morning drop-off</h3>
                  <p className="text-muted-foreground">Bring your items in by 10am and let us work our magic.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Afternoon pickup</h3>
                  <p className="text-muted-foreground">Your clothes will be ready, fresh and pressed, by 4pm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
