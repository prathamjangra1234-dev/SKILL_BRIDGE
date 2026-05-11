/**
 * Performance Optimization Configuration
 * Contains best practices for rendering, caching, and animations
 */

export const PERFORMANCE_CONFIG = {
  // Animation timings (reduced for better performance)
  ANIMATION_DURATION: {
    FAST: '0.3s',
    MEDIUM: '0.5s',
    SLOW: '0.7s',
    VERY_SLOW: '1s',
  },

  // Intersection Observer options for lazy loading
  INTERSECTION_OPTIONS: {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '50px',
  },

  // Debounce delays
  DEBOUNCE_DELAYS: {
    TYPING: 300,
    SCROLL: 100,
    RESIZE: 100,
    SEARCH: 400,
  },

  // Image optimization
  IMAGE_FORMATS: ['webp', 'jpg', 'png'],
  IMAGE_SIZES: [320, 640, 1024, 1280, 1920],

  // React memo comparison
  DEEP_COMPARE_THRESHOLD: 5,

  // Caching strategies
  CACHE_DURATION: {
    SHORT: 300, // 5 minutes
    MEDIUM: 3600, // 1 hour
    LONG: 86400, // 24 hours
  },
}

/**
 * CSS performance best practices
 */
export const CSS_BEST_PRACTICES = {
  // Use will-change sparingly
  WILL_CHANGE_PROPERTIES: ['transform', 'opacity', 'filter'],

  // Prefer these properties for animations (GPU accelerated)
  GPU_ACCELERATED: ['transform', 'opacity'],

  // Avoid animating these properties (causes reflow/repaint)
  AVOID_ANIMATING: [
    'width',
    'height',
    'left',
    'right',
    'top',
    'bottom',
    'margin',
    'padding',
    'border-width',
  ],

  // Optimal blur values for glass effects
  BLUR_VALUES: {
    LIGHT: '8px',
    MEDIUM: '12px',
    HEAVY: '16px',
  },

  // Reduced motion support
  REDUCED_MOTION: {
    animationDuration: '0.01ms',
    animationIterationCount: '1',
    transitionDuration: '0.01ms',
  },
}

/**
 * Performance metrics monitoring
 */
export const PERFORMANCE_METRICS = {
  // Core Web Vitals thresholds
  LCP: 2500, // Largest Contentful Paint
  FID: 100, // First Input Delay
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint

  // Custom metrics
  ANIMATION_FPS: 60,
  MAX_BUNDLE_SIZE: 250000, // 250KB
  MAX_IMAGE_SIZE: 100000, // 100KB
}

/**
 * Browser feature detection
 */
export const BROWSER_SUPPORT = {
  INTERSECTION_OBSERVER: typeof IntersectionObserver !== 'undefined',
  REQUESTANIMATIONFRAME: typeof requestAnimationFrame !== 'undefined',
  WEBP: typeof document !== 'undefined' &&
    document.createElement('canvas').toDataURL('image/webp').indexOf('image/webp') === 5,
  BACKDROP_FILTER: CSS.supports('backdrop-filter', 'blur(10px)'),
}

/**
 * Get appropriate animation properties based on browser support
 */
export function getOptimizedAnimationProps(
  supportsGPU: boolean = true
) {
  if (!supportsGPU) {
    return {
      transform: 'none',
      willChange: 'auto',
      backfaceVisibility: 'hidden',
    }
  }

  return {
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
    WebkitFontSmoothing: 'antialiased',
  }
}

/**
 * Optimize event listeners with passive option
 */
export const PASSIVE_EVENT_OPTIONS = {
  passive: true,
  capture: false,
}

/**
 * Memory leak prevention patterns
 */
export const MEMORY_PATTERNS = {
  CLEANUP_TIMEOUT: 100,
  OBSERVER_TIMEOUT: 500,
  EVENT_LISTENER_CLEANUP: 1000,
}
