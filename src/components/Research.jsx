import { useState } from 'react'
import { motion } from 'framer-motion'
import { academicProfile, researchThemes, publications, totalCitations, press } from '../data/research'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Research() {
  const [activeTheme, setActiveTheme] = useState('all')

  const themeFilters = [
    { id: 'all', label: 'All' },
    { id: 'uncanny', label: 'Defining the Uncanny' },
    { id: 'meaning', label: 'Meaning Maintenance' },
    { id: 'tmt', label: 'Terror Management' },
    { id: 'democracy', label: 'Democracy' },
  ]

  const visiblePubs = activeTheme === 'all'
    ? publications
    : publications.filter(p => p.theme === activeTheme)
  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <a
            href="#/"
            className="flex items-center gap-2 text-[10px] tracking-wider-3 uppercase text-ink/50 hover:text-ink transition-colors mb-10"
          >
            <span aria-hidden>←</span> Back to portfolio
          </a>

          <span className="text-xs tracking-wider-3 uppercase text-ink/50">Academic Research</span>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.98] tracking-tight">
            Social<br />
            <span className="text-work">Psychology</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg text-ink/60 max-w-xl mx-auto leading-relaxed">
            My doctoral research at the University of British Columbia explores how people make meaning under uncertainty — from the uncanny valley to political attitudes.
          </p>

          <div className="mt-12">
            <a
              href={academicProfile.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-xs tracking-wider-2 uppercase font-medium hover:bg-ink/85 transition-colors"
            >
              Google Scholar
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>↗</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Themes */}
      <section className="py-24 px-6 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-wider-3 uppercase text-ink/50">Themes</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
              Four lines of <span className="text-work">inquiry</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {researchThemes.map((theme, i) => (
              <motion.div
                key={theme.title}
                variants={itemVariants}
                className="bg-cream p-10 sm:p-12"
              >
                <span className="font-display text-2xl text-ink/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl tracking-tight leading-tight">
                  {theme.title}
                </h3>
                <p className="mt-4 text-sm text-ink/60 leading-relaxed">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 px-6 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-wider-3 uppercase text-ink/50">Publications</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
              Selected <span className="text-work">work</span>
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {themeFilters.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveTheme(f.id)}
                className={`px-4 py-2 text-[10px] tracking-wider-2 uppercase transition-colors border bg-transparent focus:outline-none ${
                  activeTheme === f.id
                    ? 'text-ink border-ink font-semibold'
                    : 'text-ink/60 border-ink/20 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {f.label}
                {f.id !== 'all' && (
                  <span className="ml-1.5 text-ink/30">
                    ({publications.filter(p => p.theme === f.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTheme}
            className="space-y-px bg-ink/10 border-y border-ink/10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visiblePubs.map((pub) => (
              <motion.a
                key={pub.title}
                variants={itemVariants}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-cream group hover:bg-ink hover:text-cream transition-colors px-4 sm:px-8 py-8"
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  <span className="col-span-2 sm:col-span-1 text-xs tracking-wider-2 text-ink/40 group-hover:text-cream/40 transition-colors">
                    {pub.year}
                  </span>
                  <div className="col-span-10 sm:col-span-8">
                    <h3 className="font-display text-xl sm:text-2xl leading-snug tracking-tight">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink/60 group-hover:text-cream/70 transition-colors italic">
                      {pub.authors}
                    </p>
                    <p className="mt-2 text-[10px] tracking-wider-2 uppercase text-ink/50 group-hover:text-cream/60 transition-colors">
                      {pub.venue}
                    </p>
                  </div>
                  <div className="hidden sm:flex col-span-3 flex-col items-end justify-start gap-2 text-[10px] tracking-wider-2 uppercase text-ink/50 group-hover:text-cream/70 transition-colors">
                    {pub.citations != null && (
                      <span className="font-display normal-case tracking-tight text-lg text-ink group-hover:text-cream transition-colors">
                        {pub.citations} <span className="text-xs tracking-wider-2 uppercase text-ink/50 group-hover:text-cream/60">cites</span>
                      </span>
                    )}
                    <span className="text-base group-hover:translate-x-1 transition-transform" aria-hidden>↗</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 px-6 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-wider-3 uppercase text-ink/50">Press</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">
              In the <span className="text-work">media</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-px bg-ink/10 border-y border-ink/10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {press.map((item) => (
              <motion.a
                key={item.url}
                variants={itemVariants}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-cream group hover:bg-ink hover:text-cream transition-colors px-4 sm:px-8 py-8"
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  <span className="col-span-2 sm:col-span-1 text-xs tracking-wider-2 text-ink/40 group-hover:text-cream/40 transition-colors">
                    {item.year}
                  </span>
                  <div className="col-span-10 sm:col-span-10">
                    <h3 className="font-display text-xl sm:text-2xl leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[10px] tracking-wider-2 uppercase text-ink/50 group-hover:text-cream/60 transition-colors">
                      {item.outlet}
                    </p>
                    <p className="mt-3 text-sm text-ink/60 group-hover:text-cream/70 transition-colors leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex col-span-1 items-start justify-end">
                    <span className="text-base text-ink/50 group-hover:text-cream/70 group-hover:translate-x-1 transition-all" aria-hidden>↗</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-ink/10 bg-ink text-cream">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-wider-2 uppercase text-cream/50">
          <span>© {new Date().getFullYear()} Rachele Benjamin</span>
          <a href="#/" className="hover:text-cream transition-colors">← Back to portfolio</a>
        </div>
      </footer>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <span className="block font-display text-3xl sm:text-4xl tracking-tight">{value}</span>
      <span className="block text-[10px] tracking-wider-2 uppercase text-ink/50 mt-1">{label}</span>
    </div>
  )
}
