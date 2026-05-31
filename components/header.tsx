"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteLogo, siteLogoHeight, siteLogoWidth, siteName } from "@/lib/site"

const navItems = [
  { label: "Home", href: "/", match: "home" as const },
  { label: "About Us", href: "/#about", match: "hash-about" as const },
  { label: "Services", href: "/#services", match: "hash-services" as const },
  { label: "Careers", href: "/#careers", match: "hash-careers" as const },
] as const

type NavMatch = (typeof navItems)[number]["match"]

function isNavActive(match: NavMatch, pathname: string, hash: string) {
  const h = (hash || "").toLowerCase()
  if (pathname !== "/") return false
  switch (match) {
    case "home":
      return h === "" || h === "#" || h === "#home"
    case "hash-about":
      return h === "#about"
    case "hash-services":
      return h === "#services"
    case "hash-careers":
      return h === "#careers"
    default:
      return false
  }
}

function hashFromHref(href: string): string {
  const i = href.indexOf("#")
  return i >= 0 ? href.slice(i).toLowerCase() : ""
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const sync = () => {
      setHash(
        typeof window !== "undefined" ? window.location.hash.toLowerCase() : "",
      )
    }
    sync()
    window.addEventListener("hashchange", sync)
    window.addEventListener("popstate", sync)
    return () => {
      window.removeEventListener("hashchange", sync)
      window.removeEventListener("popstate", sync)
    }
  }, [pathname])

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setHash(
        typeof window !== "undefined" ? window.location.hash.toLowerCase() : "",
      )
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return (
    <header className="site-header">
      <div className="page-container flex w-full items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={siteLogo}
            alt={siteName}
            width={siteLogoWidth}
            height={siteLogoHeight}
            className="h-9 w-auto md:h-10"
            loading="eager"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                isNavActive(item.match, pathname, hash) ? "nav-active" : undefined
              }
              onClick={() => {
                if (!item.href.includes("#")) setHash("")
                else setHash(hashFromHref(item.href))
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary ml-2">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="p-2 text-[var(--text-heading)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-[var(--border)] bg-[#FFFFFF] transition-[max-height] duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[28rem]" : "max-h-0 border-b-0"
        }`}
      >
        <nav className="page-container flex flex-col gap-2 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                isNavActive(item.match, pathname, hash)
                  ? "nav-active rounded-[var(--radius-sm)] px-3.5 py-2"
                  : "rounded-[var(--radius-sm)] px-3.5 py-2 font-[family-name:var(--font-body)] text-sm text-[var(--text-body)] transition-colors hover:bg-[var(--blue-light)] hover:text-[var(--blue)]"
              }
              onClick={() => {
                setIsMobileMenuOpen(false)
                if (!item.href.includes("#")) setHash("")
                else setHash(hashFromHref(item.href))
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary mt-2 w-fit px-8"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setHash("#contact")
            }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
