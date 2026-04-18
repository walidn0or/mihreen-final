import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  )
}
