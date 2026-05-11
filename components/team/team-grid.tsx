"use client"

import Link from "next/link"
import { ArrowRight, Instagram, Twitter, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { teamMembers } from "@/lib/team-data"

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
}

const gradients = [
  "from-amber-400 via-orange-400 to-red-500",
  "from-blue-400 via-cyan-400 to-teal-500",
  "from-emerald-400 via-green-400 to-lime-500",
  "from-purple-400 via-pink-400 to-rose-500",
]

export function TeamGrid() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float-rotate opacity-50" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Meet Our Team</span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="gradient-text">Expert Team</span>
            <br />
            Of Digital Creators
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isInView ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="glass-premium rounded-3xl p-10 group hover:scale-[1.03] transition-all duration-500 h-full relative overflow-hidden">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: `linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, transparent 50%, rgba(96, 165, 250, 0.2) 100%)`,
                  pointerEvents: 'none'
                }} />

                <div className="relative z-20">
                  <div className="flex items-start gap-8 mb-8">
                    {/* Avatar with premium styling */}
                    <div
                      className={`relative flex-shrink-0 group/avatar transition-all duration-500 ${
                        isInView ? "animate-bounce-in" : ""
                      }`}
                      style={{
                        animationDelay: `${index * 100 + 200}ms`,
                      }}
                    >
                      <div
                        className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-4xl font-bold text-white group-hover/avatar:scale-125 group-hover/avatar:rotate-12 transition-all duration-500 shadow-2xl`}
                      >
                        {member.avatar}
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="flex-1 min-w-0 pt-2">
                      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg mb-4 animate-text-shimmer">
                        {member.role}
                      </p>

                      {/* Social icons with animation */}
                      <div className="flex items-center gap-3">
                        {Object.entries(member.social).map(([platform, url], idx) => {
                          const Icon = socialIcons[platform as keyof typeof socialIcons]
                          if (!Icon) return null
                          return (
                            <a
                              key={platform}
                              href={url}
                              className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:glow-primary"
                              aria-label={platform}
                              style={{
                                transitionDelay: `${idx * 50}ms`,
                              }}
                            >
                              <Icon size={16} />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Skills preview with staggered animation */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4">Top Skills</h4>
                    <div className="flex flex-wrap gap-3">
                      {member.skills.slice(0, 3).map((skill, idx) => (
                        <div
                          key={skill.name}
                          className="px-4 py-2 rounded-full text-xs font-medium glass-card hover:glass-premium transition-all duration-300 hover:scale-110 cursor-default"
                          style={{
                            transitionDelay: `${idx * 75}ms`,
                          }}
                        >
                          <span className="gradient-text-gold">{skill.name}</span>
                          <span className="text-muted-foreground ml-2">{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button with enhanced styling */}
                  <Button
                    asChild
                    className="w-full px-6 py-3 glass-button rounded-xl font-semibold text-sm group/btn hover:scale-105 transition-all duration-300"
                  >
                    <Link href={`/team/${member.id}`}>
                      <span>View Full Profile</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300"
                      />
                    </Link>
                  </Button>
                </div>

                {/* Premium bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
