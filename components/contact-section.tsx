"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoSubject = encodeURIComponent("Website Inquiry")
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    const mailtoUrl = `mailto:info@mihreenllc.us?subject=${mailtoSubject}&body=${mailtoBody}`

    window.location.href = mailtoUrl

    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setFormData(INITIAL_FORM_STATE)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/40 dark:from-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-[0.18em] mb-4 block">Contact Us</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-8">
            We are ready to support your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-lg"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      type="text"
                      placeholder="Your name"
                      required
                      className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    placeholder="Type your message"
                    rows={5}
                    required
                    className="rounded-xl border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                  Contact Details
                </h3>
                <p className="text-muted-foreground leading-7">
                  Contact us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (570) 692 1014",
                    href: "tel:+15706921014",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@mihreenllc.us",
                    href: "mailto:info@mihreenllc.us",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "145 century Dr Alexandria VA",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block text-foreground font-medium hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white mt-8">
                <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
                <p className="text-white/80 text-sm mb-4">
                  Contact us today to discuss your project needs.
                </p>
                <a
                  href="mailto:info@mihreenllc.us"
                  className="inline-flex items-center text-sm font-semibold group"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
