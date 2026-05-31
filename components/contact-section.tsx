"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"
import Link from "next/link"

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoSubject = encodeURIComponent("Website Inquiry")
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )
    const mailtoUrl = `mailto:info@mihreenllc.us?subject=${mailtoSubject}&body=${mailtoBody}`

    window.location.href = mailtoUrl

    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setFormData(INITIAL_FORM_STATE)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--bg-off)]"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-[var(--blue-light)] to-transparent" />

      <div className="page-container relative z-10">
        <div
          className={`section-intro-block mb-16 transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="label-tag">Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mb-0">
            We are ready to support your business needs.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div
            className={`transition-all duration-1000 delay-100 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[#FFFFFF] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] lg:p-10"
            >
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[var(--text-heading)]"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(event) =>
                        handleChange("name", event.target.value)
                      }
                      type="text"
                      placeholder="Your name"
                      required
                      className="h-12 rounded-[var(--radius-md)] border-[var(--border)] focus-visible:border-[var(--blue)] focus-visible:ring-[var(--blue)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--text-heading)]"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) =>
                        handleChange("email", event.target.value)
                      }
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12 rounded-[var(--radius-md)] border-[var(--border)] focus-visible:border-[var(--blue)] focus-visible:ring-[var(--blue)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--text-heading)]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(event) =>
                      handleChange("message", event.target.value)
                    }
                    placeholder="Type your message"
                    rows={6}
                    required
                    className="min-h-[132px] resize-none rounded-[var(--radius-md)] border-[var(--border)] focus-visible:border-[var(--blue)] focus-visible:ring-[var(--blue)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary h-12 w-full justify-center rounded-[var(--radius-md)] px-6 text-[15px] disabled:pointer-events-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="size-5 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="size-4" aria-hidden />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="card-title text-[18px]">Contact Details</h3>
                <p className="mb-0 text-[16px] text-[var(--text-body)]">
                  Contact us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (570) 692 1014",
                    href: "tel:+15706921014",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@mihreenllc.us",
                    href: "mailto:info@mihreenllc.us",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "145 century Dr Alexandria VA",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--blue-light)] text-[var(--blue)] transition-colors hover:bg-[var(--blue)] hover:text-white">
                      <item.icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <span className="text-sm text-[var(--text-muted)]">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block font-medium text-[var(--text-heading)] text-sm hover:text-[var(--green)]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[var(--text-heading)] whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[#FFFFFF] p-7">
                <h4 className="card-title text-[17px]">Ready to Get Started?</h4>
                <p className="mb-6 text-[15px] text-[var(--text-body)]">
                  Contact us today to discuss your project needs.
                </p>
                <Link
                  href="mailto:info@mihreenllc.us"
                  className="inline-flex items-center text-sm font-semibold text-[var(--green)] transition-[gap] duration-200 hover:gap-2"
                >
                  Contact Us Today
                  <ArrowRight className="ml-1 size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
