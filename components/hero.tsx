import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-info text-info-foreground rounded-sm">
              <span className="text-sm font-bold uppercase tracking-wide">Same Day Service</span>
              <span className="text-highlight font-bold">IN BY 10 AM • OUT BY 4 PM</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
              Expert care for your finest garments
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Sammamish&apos;s trusted dry cleaning destination since 2003. Drop off by 10am, pick up by 4pm. Experience
              the difference of personalized, quality care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                View Our Services
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-info text-info hover:bg-info hover:text-info-foreground bg-transparent"
              >
                Get Directions
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border-4 border-primary/20">
              <img
                src="/images/bella_cleaners_storefront.png"
                alt="Bella Cleaners storefront in Sammamish, WA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20">
              <p className="text-4xl font-serif text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Years serving Sammamish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
