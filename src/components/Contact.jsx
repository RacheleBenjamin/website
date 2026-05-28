import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 border-t border-ink/10 bg-ink text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-wider-3 uppercase text-cream/50">Say Hello</span>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[1.05] tracking-tight">
            Let's work<br />
            <span className="text-work">together.</span>
          </h2>
          <p className="mt-8 text-cream/60 max-w-lg mx-auto leading-relaxed">
            Interested in my research or want to collaborate? I'd love to hear from you.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full text-xs tracking-wider-2 uppercase font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full text-xs tracking-wider-2 uppercase font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full text-xs tracking-wider-2 uppercase font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Scholar
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-wider-2 uppercase text-cream/40"
        >
          <span>© {new Date().getFullYear()} Rachele Benjamin</span>
          <a href="#hero" className="hover:text-cream transition-colors">↑ Back to top</a>
        </motion.div>
      </div>
    </section>
  )
}
