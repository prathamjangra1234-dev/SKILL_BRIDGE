'use client'

import { useEffect } from 'react'

/**
 * Performance monitoring component
 * Tracks Core Web Vitals and custom performance metrics
 */
export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      try {
        // Import dynamically to reduce bundle size
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log)
          getFID(console.log)
          getFCP(console.log)
          getLCP(console.log)
          getTTFB(console.log)
        })
      } catch (e) {
        // Vitals not available
      }
    }

    // Monitor memory usage
    if (performance.memory) {
      const checkMemory = () => {
        const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = performance.memory
        const usage = (usedJSHeapSize / jsHeapSizeLimit) * 100
        
        if (usage > 90) {
          console.warn('[Performance] Memory usage is high:', usage.toFixed(2) + '%')
        }
      }
      
      const memoryInterval = setInterval(checkMemory, 5000)
      return () => clearInterval(memoryInterval)
    }

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
      navigator.deviceMemory && navigator.deviceMemory >= 4 ||
      navigator.hardwareConcurrency && navigator.hardwareConcurrency >= 4

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
