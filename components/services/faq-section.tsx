"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How long does a typical website project take?",
    answer: "A typical website project takes 2-4 weeks depending on complexity. Simple landing pages can be completed in 1 week, while more complex e-commerce or custom web applications may take 4-8 weeks.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on project requirements. We provide transparent quotes after understanding your needs during our initial consultation. Payment plans are available for larger projects.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! All our services include multiple revision rounds. Website projects typically include 3 revision rounds, while design projects include 2-3 rounds to ensure you're completely satisfied.",
  },
  {
    question: "Can you help with ongoing maintenance?",
    answer: "Absolutely! We offer monthly maintenance packages that include updates, security monitoring, backups, and technical support to keep your digital assets running smoothly.",
  },
  {
    question: "What platforms do you work with?",
    answer: "We're proficient in various platforms including React, Next.js, WordPress, Shopify, and more. For video editing, we use industry-standard tools like Adobe Premiere Pro and After Effects.",
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out through our contact form or WhatsApp. We'll schedule a free consultation call to discuss your project requirements and provide a detailed proposal.",
  },
]

export function FAQSection() {
  const { ref, isInView } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-primary flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-48" : "max-h-0"
                )}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
