import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Sparkles, Heart, Scissors, Wind, Home } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Shirt Laundering",
    description: "Crisp, professionally pressed shirts returned same day. Perfect creases, every time.",
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Gentle care for your suits, dresses, and delicates using eco-friendly solvents.",
  },
  {
    icon: Heart,
    title: "Wedding Gowns",
    description: "Preserve your precious memories with our specialized wedding gown cleaning and preservation.",
  },
  {
    icon: Scissors,
    title: "Alterations",
    description: "Expert tailoring services for the perfect fit. Hems, repairs, and custom alterations.",
  },
  {
    icon: Wind,
    title: "Drapery Cleaning",
    description: "Refresh your home with our professional drapery and curtain cleaning service.",
  },
  {
    icon: Home,
    title: "Area Rug Cleaning",
    description: "Deep cleaning for area rugs of all sizes. Gentle on fibers, tough on stains.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">What We Offer</span>
              <div className="w-12 h-1 bg-primary" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From everyday essentials to special occasion pieces, we handle your garments with the utmost care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-info flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="h-7 w-7 text-info-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
