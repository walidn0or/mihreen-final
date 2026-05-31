"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading">
      <div id="hero" className="w-full">
        <div className="page-container relative z-10 flex min-h-[calc(100vh-68px)] items-center py-14 md:py-16">
          <div className="w-full max-w-2xl">
            <h1 id="hero-heading" className="hero-title">
              Delivering{" "}
              <span className="blue-word">Trust</span>
            </h1>
            <p className="hero-subtitle">
              Mihreen LLC provides integrated solutions in mining extraction,
              construction, procurement, supply, and related services.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/#services" className="btn-primary px-9 py-3.5 text-[15px]">
                Our Services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/#contact" className="btn-secondary px-9 py-3.5 text-[15px]">
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
