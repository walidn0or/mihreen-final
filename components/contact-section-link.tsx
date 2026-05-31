"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { DialogClose } from "@/components/ui/dialog"

type ContactSectionLinkProps = {
  className?: string
  children: React.ReactNode
}

export function ContactSectionLink({
  className,
  children,
}: ContactSectionLinkProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname !== "/") {
      router.push("/#contact")
      return
    }

    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", "#contact")
    }, 150)
  }

  return (
    <DialogClose asChild>
      <Link href="/#contact" className={className} onClick={handleClick}>
        {children}
      </Link>
    </DialogClose>
  )
}
