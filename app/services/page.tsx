import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { FAQSection } from "@/components/services/faq-section"

export const metadata: Metadata = {
  title: "Services | SkillBridge Agency",
  description: "Explore our comprehensive digital services including website development, video editing, graphic design, and social media marketing.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <FAQSection />
    </>
  )
}
