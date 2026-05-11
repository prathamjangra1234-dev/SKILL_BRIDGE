'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface Service {
  id: string
  name: string
  description: string
  category: string
  base_price: number
  currency: string
  features: string[]
  image_url: string
}

interface Package {
  id: string
  service_id: string
  name: string
  description: string
  price: number
  currency: string
  features: string[]
  delivery_days: number
}

export default function CatalogPage() {
  const [services, setServices] = useState<Service[]>([])
  const [packages, setPackages] = useState<Package[]>([])
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      const data = await response.json()
      setServices(data)
      if (data.length > 0) {
        setSelectedService(data[0].id)
        fetchPackages(data[0].id)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPackages = async (serviceId: string) => {
    try {
      const response = await fetch(`/api/services?id=${serviceId}`)
      const service = await response.json()
      // Get packages from service_packages table
      const pkgResponse = await fetch(`/api/packages?serviceId=${serviceId}`)
      const pkgData = await pkgResponse.json()
      setPackages(pkgData || [])
    } catch (error) {
      console.error('Error fetching packages:', error)
    }
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    fetchPackages(serviceId)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading services...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium digital services tailored to elevate your business
          </p>
        </div>
      </section>

      {/* Services and Packages */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedService === service.id
                        ? 'glass-button bg-primary/20 border-primary/50'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      From ${service.base_price}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="lg:col-span-3">
            {selectedService && (
              <>
                {packages.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <div key={pkg.id} className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                          <p className="text-sm text-muted-foreground">{pkg.description}</p>
                        </div>

                        <div className="mb-6">
                          <div className="text-3xl font-bold gradient-text">
                            ${pkg.price}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Delivery: {pkg.delivery_days} days
                          </div>
                        </div>

                        <div className="mb-6 space-y-3">
                          {pkg.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0"
                        >
                          <Link href={`/checkout?packageId=${pkg.id}`}>
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No packages available for this service</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 mt-20">
        <div className="glass-lg rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Custom Package?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t see exactly what you need? Contact us for custom enterprise solutions tailored to your specific requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0"
          >
            <Link href="/contact">
              Request Custom Package
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
