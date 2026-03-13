import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { teamMembers, getTeamMember } from "@/lib/team-data"
import { MemberProfile } from "@/components/team/member-profile"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const member = getTeamMember(id)

  if (!member) {
    return {
      title: "Team Member Not Found | SkillBridge Agency",
    }
  }

  return {
    title: `${member.name} - ${member.role} | SkillBridge Agency`,
    description: member.bio,
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { id } = await params
  const member = getTeamMember(id)

  if (!member) {
    notFound()
  }

  return <MemberProfile member={member} />
}
