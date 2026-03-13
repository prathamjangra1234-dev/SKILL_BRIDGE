"use client"

import Link from "next/link"
import { Code, Video, Palette, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom, responsive websites built with cutting-edge technology for optimal performance and user experience.",
    color: "from-blue-500 to-cyan-500",
    href: "/services#web-development",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video production including reels, YouTube content, and promotional videos that captivate audiences.",
    color: "from-red-500 to-orange-500",
    href: "/services#video-editing",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visual designs from logos to social media creatives that make your brand stand out.",
    color: "from-purple-500 to-pink-500",
    href: "/services#graphic-design",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost engagement, grow your following, and drive conversions.",
    color: "from-green-500 to-emerald-500",
    href: "/services#social-media",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions tailored to your business needs, 
            helping you achieve your goals with premium quality services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Link */}
              <Link 
                href={service.href}
                className="inline-flex items-center text-primary hover:text-accent transition-colors group/link"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground border-0"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
