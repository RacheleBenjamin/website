import { useState } from 'react'
import { motion } from 'framer-motion'

const FORMSPREE_FORM_ID = 'xrevgeza'
const EMAIL_FALLBACK = '9rachelebenjamin@gmail.com'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const inputBase =
    'w-full bg-transparent border border-cream/25 rounded-2xl px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/60 focus:ring-1 focus:ring-cream/20 transition-colors'

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: real users leave this empty
    if (data.get('company')) return

    if (!FORMSPREE_FORM_ID) {
      // Graceful fallback while the endpoint isn't configured yet
      const name = data.get('name') || ''
      const email = data.get('email') || ''
      const subject = data.get('subject') || 'Portfolio inquiry'
      const message = data.get('message') || ''
      const body = `From: ${name} <${email}>\n\n${message}`
      window.location.href = `mailto:${EMAIL_FALLBACK}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMsg(json?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 border-t border-ink/10 bg-ink text-cream">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-5xl sm:text-7xl leading-[1.05] tracking-tight">
            Let's work<br />
            <span className="text-work">together.</span>
          </h2>
          <p className="mt-8 text-cream/60 max-w-lg mx-auto leading-relaxed">
            Interested in my research or want to collaborate? Send a note and I'll get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 text-center"
            noValidate
          >
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className={`${inputBase} text-center`}
            />
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Your email"
              className={`${inputBase} text-center`}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              className={`${inputBase} sm:col-span-2 text-center`}
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className={`${inputBase} sm:col-span-2 resize-y min-h-[140px] text-center`}
            />
            {/* Honeypot field — hidden from humans, catches bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-2">
              <div className="text-xs text-cream/50 min-h-[1rem] mx-auto text-center" aria-live="polite">
                {status === 'success' && (
                  <span className="text-work">Thanks — your message is on its way.</span>
                )}
                {status === 'error' && <span className="text-red-300">{errorMsg}</span>}
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mx-auto inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full text-xs tracking-wider-2 uppercase font-medium hover:bg-cream hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-wider-2 uppercase text-cream/60 text-center">
            <a
              href="https://www.linkedin.com/in/rachelebenjamin/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream transition-colors"
            >
              Google Scholar
            </a>
            <a
              href={`mailto:${EMAIL_FALLBACK}`}
              className="hover:text-cream transition-colors"
            >
              {EMAIL_FALLBACK}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-cream/10 flex flex-col items-center gap-4 text-[10px] tracking-wider-2 uppercase text-cream/40 text-center"
        >
          <span>© {new Date().getFullYear()} Rachele Benjamin</span>
          <a href="#hero" className="hover:text-cream transition-colors">Back to top</a>
        </motion.div>
      </div>
    </section>
  )
}
