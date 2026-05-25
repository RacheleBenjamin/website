import { useEffect, useState } from 'react'

// Top-level page routes use the `#/name` form. In-page anchors use `#name`.
const PAGES = ['research']

function parse() {
  const hash = window.location.hash || ''
  if (hash.startsWith('#/')) {
    const rest = hash.slice(2)
    if (rest.startsWith('#')) return ''
    return rest.split(/[#?]/)[0] || ''
  }
  return ''
}

export function useHashRoute() {
  const [route, setRoute] = useState(parse)

  useEffect(() => {
    const onChange = () => {
      const next = parse()
      setRoute((prev) => {
        const prevPage = PAGES.includes(prev) ? prev : 'home'
        const nextPage = PAGES.includes(next) ? next : 'home'
        // Only scroll to top on a true page switch, and only if the new
        // hash has no in-page anchor target (those are handled by callers).
        const hasAnchor = window.location.hash.includes('#', 1)
        if (prevPage !== nextPage && !hasAnchor) {
          window.scrollTo({ top: 0 })
        }
        return next
      })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
