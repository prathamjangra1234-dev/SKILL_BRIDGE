"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
  },
  {
    icon: Award,
    value: 4,
    suffix: "",
    label: "Team Members",
    description: "Expert professionals",
  },
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "In the digital industry",
  },
]

function AnimatedCounter({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000 // 2 seconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, isInView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon size={28} className="text-primary" />
              </div>

              {/* Counter */}
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
