'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, Menu, X } from 'lucide-react'

interface Order {
  id: string
  user_id: string
  status: string
  total: number
  created_at: string
}

interface AdminStats {
  totalOrders: number
  totalRevenue: number
  totalCustomers: number
  pendingOrders: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
  const [stats, setStats] = useState<AdminStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    pendingOrders: 0,
  })
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // Check if user is authenticated and has admin role
      // This is a basic implementation - in production, you'd verify admin status
      const token = localStorage.getItem('adminToken')
      if (!token) {
        router.push('/admin/login')
        return
      }
      setIsAuthenticated(true)
      fetchData()
    } catch (error) {
      router.push('/admin/login')
    }
  }

  const fetchData = async () => {
    try {
      // Fetch orders
      const ordersResponse = await fetch('/api/admin/orders')
      const ordersData = await ordersResponse.json()
      setOrders(ordersData)

      // Calculate stats
      const totalRevenue = ordersData.reduce((sum: number, order: Order) => sum + (order.total || 0), 0)
      const pendingOrders = ordersData.filter((order: Order) => order.status === 'pending').length

      setStats({
        totalOrders: ordersData.length,
        totalRevenue,
        totalCustomers: new Set(ordersData.map((o: Order) => o.user_id)).size,
        pendingOrders,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-nav">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/admin" className="font-bold text-xl">
            Admin Dashboard
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/orders" className="text-muted-foreground hover:text-foreground transition-colors">
              Orders
            </Link>
            <Link href="/admin/invoices" className="text-muted-foreground hover:text-foreground transition-colors">
              Invoices
            </Link>
            <Link href="/admin/team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Link href="/admin/services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border glass-card rounded-b-2xl mx-4 mb-4 p-4 space-y-3">
            <Link href="/admin" className="block px-4 py-2 hover:bg-white/5 rounded-lg">Dashboard</Link>
            <Link href="/admin/orders" className="block px-4 py-2 hover:bg-white/5 rounded-lg">Orders</Link>
            <Link href="/admin/invoices" className="block px-4 py-2 hover:bg-white/5 rounded-lg">Invoices</Link>
            <Link href="/admin/team" className="block px-4 py-2 hover:bg-white/5 rounded-lg">Team</Link>
            <Link href="/admin/services" className="block px-4 py-2 hover:bg-white/5 rounded-lg">Services</Link>
            <Button onClick={handleLogout} className="w-full" variant="outline">Logout</Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Total Orders', value: stats.totalOrders, icon: '📦' },
            { title: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: '💰' },
            { title: 'Customers', value: stats.totalCustomers, icon: '👥' },
            { title: 'Pending Orders', value: stats.pendingOrders, icon: '⏳' },
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 10).map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono">{order.id.slice(0, 8)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                        order.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-gray-500/10 text-gray-500'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold">${order.total}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Link href={`/admin/orders/${order.id}`} className="text-primary hover:underline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">No orders yet</p>
            </div>
          )}

          <div className="p-6 border-t border-border flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Showing {Math.min(10, orders.length)} of {orders.length} orders</p>
            <Button asChild variant="ghost">
              <Link href="/admin/orders">View All Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
