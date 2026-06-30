/**
 * v-magnetic — desktop-only magnetic hover effect.
 *
 * Translates the element toward the cursor by up to ~20% of the offset
 * between the cursor and the element's center. Resets with a smooth
 * cubic-bezier transition on mouseleave. No-op on touch devices.
 *
 * Usage: <button v-magnetic>...</button>
 *
 * Performance: uses requestAnimationFrame to batch mousemove handling
 * and only writes transform (no layout-triggering properties).
 */

const isTouch = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none), (pointer: coarse)').matches

const STRENGTH = 0.2
const RESET_DURATION = 600

export const magnetic = {
  mounted(el) {
    if (isTouch()) return

    el.style.transition = `transform ${RESET_DURATION}ms cubic-bezier(0.32, 0.72, 0, 1)`
    el.style.willChange = 'transform'

    let raf = null

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * STRENGTH
      const dy = (e.clientY - cy) * STRENGTH

      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transition = 'transform 100ms cubic-bezier(0.32, 0.72, 0, 1)'
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
      })
    }

    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transition = `transform ${RESET_DURATION}ms cubic-bezier(0.32, 0.72, 0, 1)`
        el.style.transform = 'translate3d(0, 0, 0)'
      })
    }

    el._magnetic = { onMove, onLeave, raf }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  },

  unmounted(el) {
    if (!el._magnetic) return
    if (el._magnetic.raf) cancelAnimationFrame(el._magnetic.raf)
    el.removeEventListener('mousemove', el._magnetic.onMove)
    el.removeEventListener('mouseleave', el._magnetic.onLeave)
    delete el._magnetic
    el.style.willChange = ''
  },
}
