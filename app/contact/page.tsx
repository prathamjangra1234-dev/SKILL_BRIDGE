import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us | SkillBridge Agency",
  description: "Get in touch with SkillBridge Agency. Contact us for website development, video editing, graphic design, and social media marketing services.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
    </>
  )
}
