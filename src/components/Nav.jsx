import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { scrollToAnchor } from '../hooks/scrollToAnchor'

const homeLinks = [
  { label: 'Portfolio', href: '#case-study' },
  { label: 'Academic Research', href: '#/research' },
  { label: 'Contact', href: '#contact' },
]

const researchLinks = [
  { label: 'Portfolio', href: '#/' },
  { label: 'Contact', href: '#/#contact' },
]

function SocialIcons() {
  return (
    <div className="flex items-center gap-6 sm:gap-8 text-ink/60">
      <a
        href="https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en"
        target="_blank"
        rel="noreferrer"
        aria-label="Google Scholar"
        className="hover:text-ink transition-colors text-[11px] sm:text-xs tracking-wider-2 uppercase font-medium inline-flex items-center gap-1"
      >
        Scholar<span className="text-[9px] opacity-50">↗</span>
      </a>
      <a
        href="https://www.linkedin.com/in/rachelebenjamin/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="hover:text-ink transition-colors text-[11px] sm:text-xs tracking-wider-2 uppercase font-medium inline-flex items-center gap-1"
      >
        LinkedIn<span className="text-[9px] opacity-50">↗</span>
      </a>
    </div>
  )
}

export default function Nav({ variant = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const links = variant === 'research' ? researchLinks : homeLinks
  const solid = variant === 'research'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled || solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col items-center gap-4">
        {/* Name */}
        <a
          href={variant === 'home' ? '#hero' : '#/'}
          className="font-display text-xl sm:text-2xl tracking-tight text-ink"
        >
          Rachele <span className="text-work">Benjamin</span>
        </a>

        {/* Links + socials row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <ul className="flex items-center gap-6 sm:gap-8">
            {links.map((link) => {
              // `#/#anchor` means "go home, then scroll to #anchor"
              const crossPageAnchor = link.href.startsWith('#/#')
                ? link.href.slice(3)
                : null
              // plain `#anchor` on a sub-page should also bounce home first
              const samePageAnchor =
                !crossPageAnchor && link.href.startsWith('#') && !link.href.startsWith('#/')
                  ? link.href.slice(1)
                  : null
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      const anchor = crossPageAnchor || samePageAnchor
                      if (!anchor) return
                      e.preventDefault()
                      const onHome =
                        !window.location.hash || window.location.hash === '#' ||
                        window.location.hash === '#/'
                      if (!onHome) {
                        window.location.hash = '#/'
                      }
                      scrollToAnchor(anchor)
                    }}
                    className="text-[11px] sm:text-xs tracking-wider-2 uppercase text-ink/70 hover:text-ink transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <SocialIcons />
        </div>
      </div>
    </motion.nav>
  )
}
