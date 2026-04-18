"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-24 bg-background overflow-hidden flex items-center"
    >
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/[0.06] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 w-full">
        <div
          className={`w-full rounded-2xl md:rounded-3xl border border-border/80 bg-card/95 shadow-xl shadow-primary/5 p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-[0.18em] mb-4 block text-center">
            About Mihreen LLC
          </span>

          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] text-foreground mb-6 text-center text-balance">
            Company Overview
          </h2>

          <div className="max-w-none space-y-5 text-muted-foreground text-[15px] md:text-lg leading-7 md:leading-8 text-pretty">
            <p>
              Mihreen LLC is a trusted multi-service provider that delivers high-quality solutions across diverse industries. With a strong focus on professionalism, technical expertise, and operational efficiency, we support government and commercial clients in achieving successful project execution and outcomes.
            </p>
            <p>
              Mihreen LLC is a dynamic and reliable company specializing in multi-sector services including mining extraction, construction, procurement, logistics, and support services. We are committed to delivering excellence through professional expertise and dependable performance.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-muted/35 p-4 sm:p-5 md:p-6">
            <h3 className="section-subtitle text-xl text-foreground mb-4 text-center md:text-left">Our Core Services</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-sm md:text-[15px] text-foreground/90 leading-6 md:leading-7">
              <li className="rounded-xl bg-background/80 border border-border/70 px-3.5 py-3">Mining Extraction - Efficient and responsible resource development</li>
              <li className="rounded-xl bg-background/80 border border-border/70 px-3.5 py-3">Construction &amp; Rehabilitation - Durable construction solutions</li>
              <li className="rounded-xl bg-background/80 border border-border/70 px-3.5 py-3">Procurement &amp; Supply - Reliable procurement and supply</li>
              <li className="rounded-xl bg-background/80 border border-border/70 px-3.5 py-3">Logistics &amp; Transportation - Safe and timely delivery services</li>
            </ul>
          </div>

          <div className="mt-7 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/15 px-4 sm:px-6 py-4 sm:py-5 text-center">
            <p className="text-foreground/90 leading-7 text-sm md:text-base">
              Partner with Mihreen LLC for reliable and professional solutions. Contact us today to discuss your project needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
