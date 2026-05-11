'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, Download } from 'lucide-react'

interface Order {
  id: string
  status: string
  total: number
  created_at: string
  service_packages?: {
    name: string
  }
}

interface Invoice {
  id: string
  invoice_number: string
  amount_due: number
  status: string
  issue_date: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const user = localStorage.getItem('userId')
    if (!user) {
      router.push('/auth/login')
      return
    }
    setUserId(user)
    fetchData(user)
  }, [])

  const fetchData = async (uid: string) => {
    try {
      const [ordersRes, invoicesRes] = await Promise.all([
        fetch(`/api/orders?userId=${uid}`),
        fetch(`/api/invoices?userId=${uid}`),
      ])

      const ordersData = await ordersRes.json()
      const invoicesData = await invoicesRes.json()

      setOrders(ordersData)
      setInvoices(invoicesData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('userId')
    router.push('/')
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <header className="glass-nav fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="font-bold text-xl">My Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your data...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Orders Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">My Orders</h2>
              {orders.length > 0 ? (
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-border bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-medium">Order ID</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Service</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id} className="border-b border-border hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-sm font-mono">{order.id.slice(0, 8)}</td>
                            <td className="px-6 py-4 text-sm">{order.service_packages?.name || 'N/A'}</td>
                            <td className="px-6 py-4 text-sm font-semibold">${order.total}</td>
                            <td className="px-6 py-4 text-sm">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                                order.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                                'bg-gray-500/10 text-gray-500'
                              }`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                              {new Date(order.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground mb-4">No orders yet</p>
                  <Button asChild className="bg-gradient-to-r from-primary to-accent">
                    <Link href="/catalog">Browse Services</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Invoices Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">My Invoices</h2>
              {invoices.length > 0 ? (
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-border bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-medium">Invoice #</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                          <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoices.map((invoice) => (
                          <tr key={invoice.id} className="border-b border-border hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-sm font-mono">{invoice.invoice_number}</td>
                            <td className="px-6 py-4 text-sm font-semibold">${invoice.amount_due}</td>
                            <td className="px-6 py-4 text-sm">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                invoice.status === 'paid' ? 'bg-green-500/10 text-green-500' :
                                'bg-yellow-500/10 text-yellow-500'
                              }`}>
                                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                              {new Date(invoice.issue_date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <Link href={`/invoices/${invoice.id}`} className="text-primary hover:underline">
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground">No invoices yet</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
