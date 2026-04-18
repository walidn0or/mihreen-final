"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const reasons = [
  "Professional development opportunities",
  "Dynamic work environment",
  "Competitive benefits",
]

export function CareersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="careers" ref={sectionRef} className="py-24 md:py-32 bg-muted/40 dark:bg-muted/20">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">Careers</span>
          <h2 className="section-title text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Careers at Mihreen LLC
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Join a team committed to excellence, professionalism, and growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Why Work With Us</h3>
          <ul className="space-y-3 mb-8">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3 text-foreground/85">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-primary/10 border border-primary/20 p-5">
            <p className="text-sm text-muted-foreground mb-1">Apply Now</p>
            <a href="mailto:hr@mihreenllc.us" className="text-primary font-semibold hover:underline">
              hr@mihreenllc.us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
