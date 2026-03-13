import type { Metadata } from "next"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"

export const metadata: Metadata = {
  title: "Our Team | SkillBridge Agency",
  description: "Meet the talented team behind SkillBridge Agency. Our experts in web development, video editing, graphic design, and marketing are ready to help grow your brand.",
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
    </>
  )
}
