"use client"

import { useState } from "react"
import { CreditCard, Lock, Shield, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useInView } from "@/hooks/use-in-view"

const services = [
  { value: "starter", label: "Starter Package - ₹15,000", price: 15000 },
  { value: "professional", label: "Professional Package - ₹35,000", price: 35000 },
  { value: "enterprise", label: "Enterprise Package - ₹75,000", price: 75000 },
  { value: "video-basic", label: "Video Editing (Basic) - ₹3,000", price: 3000 },
  { value: "video-premium", label: "Video Editing (Premium) - ₹8,000", price: 8000 },
  { value: "design-logo", label: "Logo Design - ₹2,000", price: 2000 },
  { value: "design-brand", label: "Brand Identity - ₹10,000", price: 10000 },
  { value: "social-monthly", label: "Social Media (Monthly) - ₹10,000", price: 10000 },
  { value: "custom", label: "Custom Project - Contact for Quote", price: 0 },
]

export function PaymentForm() {
  const { ref, isInView } = useInView()
  const [selectedService, setSelectedService] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const selectedPrice = services.find(s => s.value === selectedService)?.price || 0

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
    alert("This is a demo. In production, this would connect to a real payment gateway like Stripe or Razorpay.")
  }

  return (
    <section id="payment-form" className="py-16 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Complete Your Order</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-balance">
              Secure <span className="gradient-text">Checkout</span>
            </h2>
          </div>

          <div className={`grid lg:grid-cols-5 gap-8 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Payment form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Service</Label>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full h-12 px-4 rounded-xl bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Choose a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project requirements..."
                      rows={4}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  {/* Personal info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-secondary/50 border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="bg-secondary/50 border-border focus:border-primary h-12"
                    />
                  </div>

                  {/* Card details */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard size={20} className="text-primary" />
                      <span className="font-medium text-foreground">Payment Details</span>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card">Card Number</Label>
                        <Input
                          id="card"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="bg-secondary/50 border-border focus:border-primary h-12"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            className="bg-secondary/50 border-border focus:border-primary h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            className="bg-secondary/50 border-border focus:border-primary h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isProcessing || !selectedService}
                    className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-primary-foreground border-0 text-lg"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2" size={20} />
                        Pay {selectedPrice > 0 ? `₹${selectedPrice.toLocaleString()}` : "Now"}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-6">Order Summary</h3>

                {selectedService ? (
                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Service</span>
                      <span className="text-foreground font-medium text-right">
                        {services.find(s => s.value === selectedService)?.label.split(" - ")[0]}
                      </span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">₹{selectedPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="text-muted-foreground">Tax (18% GST)</span>
                      <span className="text-foreground">₹{Math.round(selectedPrice * 0.18).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold gradient-text">
                        ₹{Math.round(selectedPrice * 1.18).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">Select a service to see the order summary.</p>
                )}

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={16} className="text-green-500" />
                    <span className="text-sm text-muted-foreground">Secure Payment</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "256-bit SSL encryption",
                      "Secure payment processing",
                      "Money-back guarantee",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment methods */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Accepted Payment Methods</p>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded bg-secondary text-xs text-muted-foreground">Visa</div>
                    <div className="px-3 py-1 rounded bg-secondary text-xs text-muted-foreground">Mastercard</div>
                    <div className="px-3 py-1 rounded bg-secondary text-xs text-muted-foreground">UPI</div>
                    <div className="px-3 py-1 rounded bg-secondary text-xs text-muted-foreground">Net Banking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
