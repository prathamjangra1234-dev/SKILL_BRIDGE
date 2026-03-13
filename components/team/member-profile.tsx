"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, Instagram, Twitter, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import type { TeamMember } from "@/lib/team-data"

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
}

const gradients = {
  pratham: "from-blue-500 to-cyan-500",
  nishant: "from-red-500 to-orange-500",
  harshit: "from-green-500 to-emerald-500",
  ansh: "from-purple-500 to-pink-500",
}

interface MemberProfileProps {
  member: TeamMember
}

export function MemberProfile({ member }: MemberProfileProps) {
  const { ref, isInView } = useInView()
  const gradient = gradients[member.id as keyof typeof gradients] || "from-primary to-accent"

  return (
    <section className="relative pt-32 pb-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Back button */}
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Team</span>
        </Link>

        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Hero section */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className={`w-40 h-40 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center text-6xl font-bold text-white flex-shrink-0`}>
                {member.avatar}
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{member.name}</h1>
                <p className={`text-xl font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                  {member.bio}
                </p>

                {/* Phone number */}
                <a 
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-6"
                >
                  <Phone size={18} className="text-primary" />
                  <span className="font-medium">{member.phone}</span>
                </a>

                {/* Social icons */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons]
                    if (!Icon) return null
                    return (
                      <a
                        key={platform}
                        href={url}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                        aria-label={platform}
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Skills section */}
          <div className={`glass-card rounded-3xl p-8 md:p-12 mb-8 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-2xl font-bold text-foreground mb-8">Skills & Expertise</h2>
            <div className="space-y-6">
              {member.skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isInView ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio section */}
          <div className={`glass-card rounded-3xl p-8 md:p-12 mb-8 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-2xl font-bold text-foreground mb-8">Portfolio Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {member.projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-secondary/50 rounded-2xl p-6 hover:bg-secondary transition-colors duration-300"
                >
                  {/* Project icon placeholder */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-40 flex items-center justify-center mb-4 transition-opacity`}>
                    <span className="text-2xl">{index + 1}</span>
                  </div>
                  <span className="text-xs text-primary uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className={`glass-card rounded-3xl p-8 md:p-12 text-center transition-all duration-700 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Work with {member.name}</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating? Get in touch to discuss your project.
            </p>
            <Button
              asChild
              size="lg"
              className={`bg-gradient-to-r ${gradient} hover:opacity-90 transition-opacity text-white border-0`}
            >
              <Link href="/contact">
                <Mail className="mr-2" size={18} />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
