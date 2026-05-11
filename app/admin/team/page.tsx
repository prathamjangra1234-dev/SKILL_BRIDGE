'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2 } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  phone: string
  avatar_url: string
  is_active: boolean
}

export default function TeamManagementPage() {
  const router = useRouter()
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [newMember, setNewMember] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    fetchTeamMembers()
  }, [])

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('/api/admin/team')
      const data = await response.json()
      setMembers(data)
    } catch (error) {
      console.error('Error fetching team members:', error)
    } finally {
      setLoading(false)
    }
  }

  const removeMember = async (memberId: string) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      try {
        await fetch(`/api/admin/team/${memberId}`, { method: 'DELETE' })
        setMembers(members.filter(m => m.id !== memberId))
      } catch (error) {
        console.error('Error removing member:', error)
      }
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Team Management</h1>
          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
            >
              <Link href="/admin">Back to Dashboard</Link>
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent">
              <Plus size={18} className="mr-2" />
              Add Member
            </Button>
          </div>
        </div>

        {/* Team Members Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading team members...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div key={member.id} className="glass-card rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${member.is_active ? 'bg-green-500' : 'bg-gray-500'}`} />
                </div>

                {member.phone && (
                  <p className="text-sm text-muted-foreground mb-3">{member.phone}</p>
                )}

                {member.bio && (
                  <p className="text-sm mb-4 line-clamp-2">{member.bio}</p>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Edit2 size={16} className="mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeMember(member.id)}
                    className="text-destructive border-destructive/50 hover:bg-destructive/10"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {members.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No team members yet</p>
            <Button className="bg-gradient-to-r from-primary to-accent">
              <Plus size={18} className="mr-2" />
              Add First Member
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
