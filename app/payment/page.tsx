import type { Metadata } from "next"
import { PaymentHero } from "@/components/payment/payment-hero"
import { PricingCards } from "@/components/payment/pricing-cards"
import { PaymentForm } from "@/components/payment/payment-form"

export const metadata: Metadata = {
  title: "Payment | SkillBridge Agency",
  description: "Secure payment portal for SkillBridge Agency services. Choose your service and complete your payment safely.",
}

export default function PaymentPage() {
  return (
    <>
      <PaymentHero />
      <PricingCards />
      <PaymentForm />
    </>
  )
}
