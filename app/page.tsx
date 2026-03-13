import { Hero } from "@/components/home/hero"
import { ServicesSection } from "@/components/home/services-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
