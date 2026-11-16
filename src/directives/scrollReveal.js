const revealClasses = {
  up: ['opacity-0', 'translate-y-8'],
  'image-left': ['opacity-0', '-translate-x-8'],
  'image-right': ['opacity-0', 'translate-x-8'],
}

const visibleClasses = ['opacity-100', 'translate-x-0', 'translate-y-0']
const revealModes = new WeakMap()
let revealObserver

function getRevealObserver() {
  if (revealObserver || typeof IntersectionObserver === 'undefined') return revealObserver

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      const element = entry.target
      const mode = revealModes.get(element)
      const hidden = revealClasses[mode] || revealClasses.up
      element.classList.remove(...hidden)
      element.classList.add(...visibleClasses)

      revealObserver.unobserve(element)
      revealModes.delete(element)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

  return revealObserver
}

export default {
  mounted(element, binding) {
    if (typeof window === 'undefined') return

    const mode = binding.arg || binding.value || 'up'
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')

    if (reducedMotion?.matches) return

    const observer = getRevealObserver()
    if (!observer) return

    const hidden = revealClasses[mode] || revealClasses.up
    element.classList.add(...hidden, 'transition-all', 'duration-700', 'ease-out', 'will-change-transform')

    revealModes.set(element, mode)
    observer.observe(element)
  },

  unmounted(element) {
    revealObserver?.unobserve(element)
    revealModes.delete(element)
  },

  getSSRProps() {
    return {}
  },
}
