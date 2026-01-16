import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Get In Touch</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Visit us today</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stop by our convenient Sammamish location. We&apos;re here to help with all your cleaning needs, from
              quick shirt service to specialty items.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-info flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-info-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    723 228th Ave NE
                    <br />
                    Sammamish, WA 98074
                  </p>
                  <br />
                  <p className="text-muted-foreground">
                    Located in Inglewood Plaza
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-info flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-info-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a href="tel:+14258685557" className="text-muted-foreground hover:text-primary transition-colors">
                    (425) 868-5557
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-info flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-info-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Fri: 6:30am - 7pm
                    <br />
                    Saturday: 6:30am - 5pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-secondary border-2 border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-foreground mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
