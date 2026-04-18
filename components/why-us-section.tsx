"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Award, CheckCircle2, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Proven multi-sector expertise",
    description:
      "Proven experience across mining, construction, procurement, logistics, and essential services.",
  },
  {
    icon: CheckCircle2,
    title: "Commitment to quality and safety",
    description:
      "Unwavering commitment to quality, safety, and environmental responsibility in every project.",
  },
  {
    icon: Clock,
    title: "Reliable and timely execution",
    description:
      "Timely and dependable project delivery with consistent performance.",
  },
  {
    icon: Users,
    title: "Client-focused solutions",
    description:
      "Customized approaches tailored to the unique needs of each client.",
  },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/40 dark:bg-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-4 block">
            Why Choose Us
          </span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">Why Choose Us</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-8">
            Partner with Mihreen LLC for reliable and professional solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-6 border border-border hover:border-transparent transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="section-subtitle text-lg text-foreground group-hover:text-white mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-7 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
