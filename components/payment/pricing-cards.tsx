"use client"

import { Check, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small projects and startups",
    price: "15,000",
    period: "per project",
    features: [
      "Single page website",
      "Responsive design",
      "Basic SEO setup",
      "2 revision rounds",
      "1 week delivery",
      "Email support",
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "35,000",
    period: "per project",
    features: [
      "Multi-page website (up to 5)",
      "Custom animations",
      "Advanced SEO optimization",
      "3 revision rounds",
      "2 weeks delivery",
      "Priority support",
      "Content management system",
      "Performance optimization",
    ],
    popular: true,
    gradient: "from-primary to-accent",
  },
  {
    name: "Enterprise",
    description: "For large scale projects",
    price: "75,000",
    period: "per project",
    features: [
      "Unlimited pages",
      "E-commerce functionality",
      "Custom integrations",
      "Unlimited revisions",
      "Dedicated project manager",
      "24/7 support",
      "Monthly maintenance",
      "Analytics dashboard",
      "Training sessions",
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-500",
  },
]

export function PricingCards() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-balance">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Select the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative glass-card rounded-3xl p-8 transition-all duration-700",
                plan.popular && "ring-2 ring-primary scale-105 z-10",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                    <Star size={14} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">₹</span>
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#payment-form"
                className={cn(
                  "block w-full py-3 rounded-xl text-center font-medium transition-all duration-300",
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
