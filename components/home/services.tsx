"use client"

import { Code2, Video, Palette, Megaphone, Clock, Zap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and applications built with cutting-edge technology",
    pricing: "$500 - $3000+",
    features: ["Responsive Design", "Performance Optimized", "SEO Ready"],
    color: "from-blue-500 to-cyan-500",
    delay: 0,
  },
  {
    id: 2,
    icon: Video,
    title: "Video Editing",
    description: "Professional video production and editing services",
    pricing: "Project Based",
    features: ["4K Support", "Color Grading", "Motion Graphics"],
    color: "from-red-500 to-orange-500",
    delay: 100,
  },
  {
    id: 3,
    icon: Palette,
    title: "Graphic Design",
    description: "Premium design solutions for all your branding needs",
    pricing: "Custom Packages",
    features: ["Brand Identity", "UI/UX Design", "Print Materials"],
    color: "from-purple-500 to-pink-500",
    delay: 200,
  },
  {
    id: 4,
    icon: Megaphone,
    title: "Social Media",
    description: "Strategic social media marketing and content creation",
    pricing: "Monthly Plans",
    features: ["Content Strategy", "Community Management", "Analytics"],
    color: "from-green-500 to-emerald-500",
    delay: 300,
  },
  {
    id: 5,
    icon: Clock,
    title: "Hourly Consulting",
    description: "Expert consultation for your digital projects",
    pricing: "Hourly Rate",
    features: ["Strategy Sessions", "Code Review", "Team Training"],
    color: "from-yellow-500 to-orange-500",
    delay: 400,
  },
  {
    id: 6,
    icon: Zap,
    title: "Enterprise Solutions",
    description: "Custom enterprise-level solutions and consulting",
    pricing: "Quote Based",
    features: ["Custom Development", "Scalability", "24/7 Support"],
    color: "from-indigo-500 to-blue-500",
    delay: 500,
  },
]

export function Services() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Premium background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl animate-float opacity-40" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-l from-accent/20 to-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} opacity-40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="gradient-text">Premium Services</span>
            <br />
            For Modern Business
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Comprehensive digital solutions tailored to elevate your brand and drive results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`group transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isInView ? `${service.delay + 150}ms` : "0ms",
                }}
              >
                <div className="glass-premium rounded-2xl p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon with glow */}
                  <div className="relative z-20 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-125 transition-transform duration-500 group-hover:shadow-2xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="bg-secondary/50 rounded-lg p-3 mb-6 border border-primary/20">
                      <p className="text-primary font-semibold text-center">{service.pricing}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          style={{
                            animationDelay: `${idx * 50}ms`,
                          }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn more button */}
                    <button className="w-full px-4 py-3 glass-button rounded-lg font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      Learn More →
                    </button>
                  </div>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
