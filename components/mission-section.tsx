"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Target, Eye } from "lucide-react"

export function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/40 dark:bg-muted/20 relative"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission */}
          <div
            className={`group relative bg-card rounded-3xl p-8 lg:p-12 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-primary" />
            </div>

            <h3 className="section-title text-2xl lg:text-3xl text-foreground mb-4">
              Mission
            </h3>

            <p className="text-muted-foreground leading-8 text-base md:text-lg mb-4">
              Mihreen LLC is committed to deliver trust through ethical business practices, professional expertise, and consistent, dependable performance across multiple industries.
            </p>
            <p className="text-muted-foreground leading-8">
              We partner with government agencies and commercial organizations by providing high-quality services in construction and rehabilitation, mineral extraction, procurement and supply of IT and power equipment, warehouse and logistics management, human resources and payroll administration, janitorial services, and transportation solutions.
            </p>
            <p className="text-muted-foreground leading-8 mt-4">
              Our mission is to perform every contract in strict compliance with applicable regulations, emphasizing efficiency, safety, sustainability, and measurable value for our clients.
            </p>

            {/* Decorative Corner */}
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Vision */}
          <div
            className={`group relative bg-card rounded-3xl p-8 lg:p-12 border border-border hover:border-secondary/30 transition-all duration-500 hover:shadow-xl ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-secondary" />
            </div>

            <h3 className="section-title text-2xl lg:text-3xl text-foreground mb-4">
              Vision
            </h3>

            <p className="text-muted-foreground leading-8 text-base md:text-lg mb-4">
              Mihreen LLC seeks to be a trusted and reliable multi-service provider, recognized for excellence in contract execution, technical expertise, and operational support delivering integrated solutions that enhance contract performance and operational efficiency on a global scale.
            </p>

            {/* Decorative Corner */}
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-secondary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
