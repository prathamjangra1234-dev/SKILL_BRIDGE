"use client"

import { useInView } from "@/hooks/use-in-view"
import { MessageSquare, Lightbulb, Rocket, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description: "We start with a detailed consultation to understand your goals, requirements, and vision for the project.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy & Planning",
    description: "Our team develops a comprehensive strategy and project plan tailored to your specific needs.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execution",
    description: "We bring your project to life with our expert team, keeping you updated throughout the process.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Delivery & Support",
    description: "After final approval, we deliver your project and provide ongoing support to ensure success.",
  },
]

export function ProcessSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures that every project is delivered on time, 
            within budget, and exceeds expectations.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`relative transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
                {/* Step number */}
                <div className="text-5xl font-bold gradient-text opacity-20 mb-4">{step.step}</div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
