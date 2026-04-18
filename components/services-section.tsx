"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Mountain, Building2, ShoppingBag, Warehouse, Truck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const services = [
  {
    icon: Mountain,
    title: "Mining Extraction",
    description:
      "Mihreen LLC delivers comprehensive mining extraction solutions designed to maximize resource recovery while ensuring safety, efficiency, and environmental responsibility. Our expertise spans from early-stage site assessment to full-scale production.",
    details: [
      "Exploration Support & Resource Identification: Geological mapping and sampling, mineralized zone identification, consultant coordination, and preliminary feasibility support.",
      "Mine Development: Site clearing and preparation, access road construction, infrastructure setup, and mine planning/layout support.",
      "Extraction Operations: Surface mining support, underground support where applicable, drilling/blasting coordination, and controlled hauling/material handling.",
      "Ore Handling & Processing Support: Ore collection and transportation, stockpile management, and crushing/screening support.",
      "Safety & Environmental Management: Strict safety protocols, workforce training, environmental impact mitigation, waste management, and rehabilitation support.",
      "Equipment & Resources: Excavators and loaders, drilling equipment, haulage trucks, and experienced on-site operational teams.",
      "Sustainability Commitment: Controlled resource extraction, environmental monitoring practices, and land rehabilitation support.",
    ],
  },
  {
    icon: Building2,
    title: "Construction & Rehabilitation",
    description: "We deliver high-quality construction and rehabilitation services tailored to client requirements.",
    details: [
      "Civil and buildings construction",
      "Rehabilitation and upgrades",
      "Quality and safety management",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Procurement & Supply",
    description:
      "We provide end-to-end procurement services for IT systems/networks, power equipment, and office/project supplies.",
    details: [
      "IT hardware and equipment",
      "Power tools and equipment",
      "Office and project requirements/equipment",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehouse Management",
    description:
      "We offer efficient storage and inventory management solutions to support safe storages and smooth operations.",
    details: [
      "Inventory tracking and control",
      "Storage and distribution",
      "Stock auditing and reporting",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "We provide reliable transportation for consignments and materials with a focus on safety, compliance, and timely delivery.",
    details: [
      "Logistics coordination",
      "Trucks provision and management",
      "Safety and compliance monitoring",
    ],
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-3 block">
            Our Services
          </span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance">
            Professional Multi-Sector Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Mihreen LLC offers a wide range of professional services designed to support resource extraction, infrastructure development, and operational efficiency. Explore our specialized service areas below.
          </p>
        </div>

        {/* Distinct Services Cards */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={cn(
                  "w-full sm:col-span-1 lg:col-span-2",
                  index === 3 && "lg:col-start-2",
                  index === 4 && "lg:col-start-4"
                )}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-6 md:p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/25 h-full w-full text-center cursor-pointer",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      )}
                      style={{ transitionDelay: `${index * 90}ms` }}
                    >
                      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-secondary/15" />
                      <div className="relative flex flex-col items-center text-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-muted text-primary border border-primary/15 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/30">
                          <Icon className="w-5 h-5" strokeWidth={2.2} />
                        </div>
                        <div className="flex-1">
                          <h3 className="section-subtitle text-lg md:text-xl text-foreground mb-2.5 transition-colors duration-300 group-hover:text-primary">
                            {service.title}
                          </h3>
                          <p className="text-sm md:text-[15px] leading-7 text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="relative mt-5 flex items-center justify-center gap-2 pt-4 border-t border-border/70">
                        <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary/80">View details</span>
                        <ArrowRight className="w-4.5 h-4.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="flex h-[min(85vh,800px)] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden rounded-2xl border-border/80 p-0 shadow-lg sm:max-w-2xl">
                    <div className="h-1 w-full shrink-0 bg-gradient-to-r from-primary via-secondary to-primary" />
                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                      <div className="p-6 pb-8 pr-12 pt-6 md:p-8 md:pb-10 md:pr-14 md:pt-8">
                        <DialogHeader className="text-left">
                          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <DialogTitle className="section-subtitle text-2xl">{service.title}</DialogTitle>
                          <DialogDescription className="mt-2 text-[15px] leading-7 md:text-base">
                            {service.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-6 rounded-xl border border-border/70 bg-muted/50 p-5">
                          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                            Capabilities
                          </h4>
                          <ul className="space-y-3">
                            {service.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-3 text-sm leading-6 text-foreground/85 md:text-[15px]"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
