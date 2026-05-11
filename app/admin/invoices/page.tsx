'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, Download } from 'lucide-react'

interface Invoice {
  id: string
  invoice_number: string
  amount_due: number
  status: string
  issue_date: string
  pdf_url?: string
}

export default function InvoicesPage() {
  const router = useRouter()
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    fetchInvoices()
  }, [])

  const fetchInvoices = async () => {
    try {
      const response = await fetch('/api/admin/invoices')
      const data = await response.json()
      setInvoices(data)
    } catch (error) {
      console.error('Error fetching invoices:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Invoices Management</h1>
          <Button asChild variant="ghost">
            <Link href="/admin">Back to Dashboard</Link>
          </Button>
        </div>

        {/* Invoices Table */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading invoices...</p>
          </div>
        ) : (
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">Invoice #</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
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
                      <td className="px-6 py-4 text-sm space-x-2">
                        <Link href={`/admin/invoices/${invoice.id}`} className="text-primary hover:underline">
                          View
                        </Link>
                        {invoice.pdf_url && (
                          <a href={invoice.pdf_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            <Download size={16} className="inline mr-1" />
                            Download
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {invoices.length === 0 && (
              <div className="p-12 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No invoices yet</p>
              </div>
            )}

            <div className="p-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Total invoices: {invoices.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
