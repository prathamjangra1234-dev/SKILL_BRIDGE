"use client"

import { Check, Star, ArrowRight } from "lucide-react"
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
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background animate-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-rotate opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 glass-premium px-4 py-3 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground font-medium">Premium Pricing Plans</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance animate-fade-up" style={{ animationDelay: "100ms" }}>
            Choose Your Perfect <span className="animate-text-shimmer">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Transparent pricing with zero hidden fees. Select the premium plan that perfectly aligns with your project needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative glass-premium rounded-3xl p-10 transition-all duration-700 group overflow-hidden",
                plan.popular && "ring-2 ring-primary md:scale-105 md:z-10 md:-my-4",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              {/* Premium badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 animate-bounce-in">
                  <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground text-sm font-bold shadow-2xl hover-glow">
                    <Star size={16} fill="currentColor" />
                    <span>MOST POPULAR</span>
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                {/* Header with animation */}
                <div className="text-center mb-10 animate-fade-up">
                  <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 group-hover:text-foreground transition-colors">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-2xl text-muted-foreground">₹</span>
                    <span className={`text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent group-hover:animate-text-shimmer`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.period}</p>
                </div>

                {/* Features with staggered animation */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li 
                      key={feature} 
                      className="flex items-start gap-3 animate-fade-up group/item"
                      style={{ animationDelay: `${50 + fIdx * 30}ms` }}
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform`}>
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm group-hover/item:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#payment-form"
                  className={cn(
                    "block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 group/btn hover:scale-110 hover:shadow-2xl animate-fade-up",
                    plan.popular
                      ? "bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground hover:glow-primary"
                      : "glass-card text-foreground hover:glass-premium border-2 border-primary/30 hover:border-primary/60"
                  )}
                  style={{ animationDelay: "300ms" }}
                >
                  <span className="inline-flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
