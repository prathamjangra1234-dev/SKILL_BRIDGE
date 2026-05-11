'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

interface PackageData {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  delivery_days: number
}

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const packageId = searchParams.get('packageId')

  const [pkg, setPkg] = useState<PackageData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    if (packageId) {
      fetchPackage(packageId)
    }
  }, [packageId])

  const fetchPackage = async (id: string) => {
    try {
      const response = await fetch(`/api/packages?packageId=${id}`)
      const data = await response.json()
      setPkg(data)
    } catch (error) {
      console.error('Error fetching package:', error)
      setError('Failed to load package details')
    }
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!pkg || !email || !fullName) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageId: pkg.id,
          packageName: pkg.name,
          price: pkg.price,
          quantity: 1,
          email,
          fullName,
        }),
      })

      const { sessionId, error: checkoutError } = await response.json()

      if (checkoutError) throw new Error(checkoutError)

      // Redirect to Stripe Checkout using the session ID
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`
    } catch (error: any) {
      setError(error.message || 'Failed to process payment')
    } finally {
      setLoading(false)
    }
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading package details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

              <div className="space-y-4 pb-4 border-b border-border">
                <div>
                  <h4 className="font-medium">{pkg.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Delivery Time</div>
                  <div className="font-medium">{pkg.delivery_days} days</div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">Includes:</h5>
                  <ul className="space-y-1">
                    {pkg.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                    {pkg.features.length > 3 && (
                      <li className="text-sm text-muted-foreground">+ {pkg.features.length - 3} more</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${pkg.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="gradient-text text-lg">${pkg.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Checkout</h2>

              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="glass-input h-11"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-input h-11"
                      required
                    />
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    You will be redirected to Stripe to complete your payment securely.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 h-12 font-semibold text-lg"
                >
                  {loading ? 'Processing...' : `Pay $${pkg.price}`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By clicking the button above, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>

            {/* Security Info */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                { title: 'Secure', desc: 'SSL Encrypted' },
                { title: 'Fast', desc: '3-10 seconds' },
                { title: 'Safe', desc: 'PCI Compliant' },
              ].map((item, index) => (
                <div key={index} className="text-center text-sm">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-muted-foreground text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
