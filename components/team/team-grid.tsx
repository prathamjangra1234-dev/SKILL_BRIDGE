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
  "from-blue-500 to-cyan-500",
  "from-red-500 to-orange-500",
  "from-green-500 to-emerald-500",
  "from-purple-500 to-pink-500",
]

export function TeamGrid() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-500 h-full">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    {/* Avatar */}
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-3xl font-bold text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {member.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      
                      {/* Social icons */}
                      <div className="flex items-center gap-3">
                        {Object.entries(member.social).map(([platform, url]) => {
                          const Icon = socialIcons[platform as keyof typeof socialIcons]
                          if (!Icon) return null
                          return (
                            <a
                              key={platform}
                              href={url}
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-200"
                              aria-label={platform}
                            >
                              <Icon size={14} />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Skills preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Top Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-border hover:bg-secondary/50 group/btn"
                  >
                    <Link href={`/team/${member.id}`}>
                      View Profile
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
