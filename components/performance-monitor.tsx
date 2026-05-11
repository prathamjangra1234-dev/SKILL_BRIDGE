'use client'

import { useEffect } from 'react'

/**
 * Performance monitoring component
 * Tracks device capabilities for animation optimization
 */
export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('[Performance] Long task detected:', {
                name: entry.name,
                duration: entry.duration,
              })
            }
          }
        })
        
        observer.observe({ entryTypes: ['longtask'] })
        return () => observer.disconnect()
      } catch (e) {
        // Long tasks API not supported
      }
    }
  }, [])

  // Non-rendering component - only for monitoring
  return null
}

/**
 * Script to optimize animations based on device capabilities
 */
export function OptimizeAnimations() {
  useEffect(() => {
    // Detect if device has high performance
    const isHighPerformance =
      ((navigator as any).deviceMemory && (navigator as any).deviceMemory >= 4) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency >= 4)

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    }

    if (!isHighPerformance) {
      document.documentElement.classList.add('low-performance')
      // Disable heavy animations on low-end devices
      const style = document.createElement('style')
      style.textContent = `
        .animate-float-rotate { animation: none !important; }
        .animate-pulse-glow { animation: none !important; }
        .animate-gradient { animation: none !important; }
      `
      document.head.appendChild(style)
    }
  }, [])

  return null
}
