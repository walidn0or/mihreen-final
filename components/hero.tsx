"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 block dark:hidden">
          <Image
            src="/images/about-light.png"
            alt="Government building in daylight"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <Image
            src="/images/about-dark.png"
            alt="Government building at night"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/35 to-background/65 dark:from-background/70 dark:via-background/45 dark:to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-transparent to-secondary/0 dark:from-primary/5 dark:to-secondary/5" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(46, 84, 169, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(46, 84, 169, 0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance leading-tight">
            Delivering Trust Across Industries
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-8 text-pretty">
            Mihreen LLC provides integrated solutions in Mines Extraction, Construction, Procurement, Supply, and Services which delivers excellent Performance and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full px-8 text-base font-semibold bg-primary text-primary-foreground border border-primary/80 transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-12px_hsl(var(--primary)/0.65)] focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Link href="/#services" className="inline-flex items-center">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group h-12 rounded-full px-8 text-base font-semibold border border-foreground/25 bg-background/50 text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background/70 hover:text-primary hover:shadow-[0_10px_28px_-14px_hsl(var(--foreground)/0.35)] focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <Link href="/#contact" className="inline-flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
