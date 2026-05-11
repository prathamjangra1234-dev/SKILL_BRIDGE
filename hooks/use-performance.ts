import { useEffect, useRef, useState } from 'react'

/**
 * Optimized InView hook using Intersection Observer API
 * Triggers animations only when elements are visible
 */
export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Unobserve after triggered to prevent re-triggering
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

/**
 * Debounced scroll hook for performance
 */
export function useScrollThrottle(callback: () => void, delay = 100) {
  const lastExecuted = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now()
      if (now - lastExecuted.current >= delay) {
        callback()
        lastExecuted.current = now
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [callback, delay])
}

/**
 * Optimized animation frame hook
 */
export function useAnimationFrame(callback: (deltaTime: number) => void, isActive = true) {
  const frameId = useRef<number>()
  const lastTime = useRef(Date.now())

  useEffect(() => {
    if (!isActive) return

    const animate = () => {
      const now = Date.now()
      const deltaTime = now - lastTime.current
      lastTime.current = now

      callback(deltaTime)
      frameId.current = requestAnimationFrame(animate)
    }

    frameId.current = requestAnimationFrame(animate)

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current)
      }
    }
  }, [callback, isActive])
}

/**
 * Hook to detect reduced motion preference
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Lazy load images with fade-in effect
 */
export function useLazyImage(src: string, placeholder?: string) {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
    }
    img.onerror = () => {
      setImageSrc(placeholder)
    }
    img.src = src
  }, [src, placeholder])

  return { imageSrc, isLoaded }
}

/**
 * Debounced value hook for form inputs
 */
export function useDebouncedValue<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * Optimize component rendering with memo and proper dependencies
 */
export function useMemoCompare<T>(value: T, compare: (prev: T, next: T) => boolean) {
  const ref = useRef(value)
  const [, forceUpdate] = useState()

  useEffect(() => {
    if (!compare(ref.current, value)) {
      ref.current = value
      forceUpdate({})
    }
  }, [value, compare])

  return ref.current
}
