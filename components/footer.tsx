"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-[#16233f] dark:bg-[#0f1729] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Mihreen LLC"
                width={160}
                height={60}
                className={`h-12 w-auto ${mounted && resolvedTheme === "dark" ? "" : "brightness-0 invert"}`}
              />
            </Link>
            <p className="text-slate-300 max-w-sm leading-7">
              Mihreen LLC - Delivering Trust
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                  className="text-slate-300 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white tracking-tight">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="tel:+15706921014"
                  className="hover:text-secondary transition-colors"
                >
                  +1 (570) 692 1014
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mihreenllc.us"
                  className="hover:text-secondary transition-colors"
                >
                  info@mihreenllc.us
                </a>
              </li>
              <li>
                <span>145 century Dr Alexandria VA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Mihreen LLC. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Mihreen LLC - Delivering Trust
          </p>
        </div>
      </div>
    </footer>
  )
}
