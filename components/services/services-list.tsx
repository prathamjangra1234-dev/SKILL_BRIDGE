"use client"

import Link from "next/link"
import { Code, Video, Palette, Share2, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Website Development",
    description: "We create stunning, high-performance websites that captivate visitors and convert them into customers. Our custom solutions are built with cutting-edge technology.",
    color: "from-blue-500 to-cyan-500",
    startingPrice: "₹15,000",
    features: [
      "Custom website design",
      "Responsive mobile-first approach",
      "Fast loading performance",
      "SEO optimized structure",
      "Content Management System",
      "Security & SSL setup",
    ],
  },
  {
    id: "video-editing",
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing services that bring your vision to life. From social media reels to full-length promotional videos, we create content that engages and converts.",
    color: "from-red-500 to-orange-500",
    startingPrice: "₹3,000",
    features: [
      "Instagram & TikTok Reels",
      "YouTube video editing",
      "Promotional videos",
      "Motion graphics",
      "Color grading",
      "Sound design & mixing",
    ],
  },
  {
    id: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual solutions that make your brand stand out. From logos to marketing materials, we design with purpose and precision to leave lasting impressions.",
    color: "from-purple-500 to-pink-500",
    startingPrice: "₹2,000",
    features: [
      "Logo design",
      "Brand identity",
      "Posters & flyers",
      "Social media creatives",
      "Business cards",
      "Presentation design",
    ],
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media management that grows your presence and drives engagement. We craft campaigns that connect with your audience and deliver measurable results.",
    color: "from-green-500 to-emerald-500",
    startingPrice: "₹10,000",
    features: [
      "Instagram growth strategy",
      "Content planning & creation",
      "Ad campaign management",
      "Influencer collaborations",
      "Analytics & reporting",
      "Community management",
    ],
  },
]

export function ServicesList() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={service.id}
              className={`scroll-mt-24 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                  {/* Left content */}
                  <div>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <span className="text-3xl font-bold gradient-text">{service.startingPrice}</span>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className={`bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity text-white border-0`}
                    >
                      <Link href="/contact">
                        Start Project
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </div>

                  {/* Right content - Features */}
                  <div className="lg:pl-8 lg:border-l lg:border-border">
                    <h3 className="text-lg font-semibold mb-6 text-foreground">What&apos;s Included</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
