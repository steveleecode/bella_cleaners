import { Star, Leaf, Users, Award } from "lucide-react"

const reasons = [
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on every garment.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Our gentle, environmentally-conscious cleaning methods protect both your clothes and the planet.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Proudly serving the Sammamish community with personalized care for over 20 years.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Our skilled professionals handle everything from everyday items to delicate specialty pieces.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-info text-info-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-highlight" />
              <span className="text-sm font-bold uppercase tracking-widest text-highlight">Why Us</span>
              <div className="w-12 h-1 bg-highlight" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Why Sammamish trusts Bella Cleaners</h2>
          <p className="text-info-foreground/80 max-w-2xl mx-auto text-lg">
            Experience the difference that true craftsmanship and genuine care can make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-lg bg-info-foreground/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-8 w-8 text-highlight" />
              </div>
              <h3 className="font-serif text-xl mb-3">{reason.title}</h3>
              <p className="text-info-foreground/80 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
