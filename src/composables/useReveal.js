import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Shared IntersectionObserver — observes elements with `.motion-reveal` or
 * `.motion-reveal-stagger` classes, adds `is-revealed` on intersection.
 * Once-only (unobserves after firing). Honors prefers-reduced-motion via CSS.
 */

let sharedObserver = null
const observed = new WeakSet()

function getObserver() {
  if (sharedObserver) return sharedObserver

  // If user prefers reduced motion, reveal everything immediately
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    return {
      observe: (el) => el.classList.add('is-revealed'),
      unobserve: () => {},
      disconnect: () => {},
    }
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          sharedObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '-40px 0px -40px 0px',
    },
  )

  return sharedObserver
}

function scan(root = document.body) {
  if (!root) return
  const obs = getObserver()

  const targets = root.querySelectorAll(
    '.motion-reveal:not(.is-revealed), .motion-reveal-stagger:not(.is-revealed)',
  )
  targets.forEach((el) => {
    if (observed.has(el)) return
    observed.add(el)
    obs.observe(el)
  })
}

/**
 * Call once per view (typically in App.vue's setup).
 * Re-scans the document after every route change so newly-mounted views
 * animate in. Uses requestAnimationFrame so the DOM has settled first.
 */
export function useReveal() {
  const route = useRoute()
  let raf = null

  const scheduleScan = () => {
    if (raf) cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => scan())
    })
  }

  onMounted(() => {
    scheduleScan()
  })

  watch(
    () => route.fullPath,
    () => scheduleScan(),
  )
}
