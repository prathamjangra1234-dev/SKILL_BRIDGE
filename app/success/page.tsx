'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="text-center max-w-md">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Thank you for your order. We&apos;ve received your payment and will start working on your project right away.
        </p>

        {/* Details */}
        <div className="glass-card rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-semibold mb-3">What Happens Next?</h3>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">1</span>
              <span>Confirmation email will be sent to your inbox</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">2</span>
              <span>Our team will review your project requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">3</span>
              <span>You&apos;ll receive regular updates on your order</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">4</span>
              <span>Project delivery on the agreed timeline</span>
            </li>
          </ol>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 h-11"
          >
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-border hover:bg-secondary/50 h-11"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <p className="text-xs text-muted-foreground mt-8">
          Have questions? Contact us at{' '}
          <Link href="mailto:support@skillbridge.com" className="text-primary hover:underline">
            support@skillbridge.com
          </Link>
        </p>
      </div>
    </div>
  )
}
