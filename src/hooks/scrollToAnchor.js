// Smooth-scroll to an element id, retrying briefly until it mounts
// (used when navigating across hash routes where the target page must render first).
export function scrollToAnchor(id, { tries = 30, interval = 25 } = {}) {
  let attempts = 0
  const tick = () => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    if (++attempts < tries) setTimeout(tick, interval)
  }
  tick()
}
