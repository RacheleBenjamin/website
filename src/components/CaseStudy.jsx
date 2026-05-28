import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function CaseStudy() {
  const [filter, setFilter] = useState('all')

  const filteredStudies = (filter === 'all'
    ? caseStudies
    : caseStudies.filter((s) => s.tags?.includes(filter))
  ).sort((a, b) => (b.caseUrl ? 1 : 0) - (a.caseUrl ? 1 : 0))

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'foundational', label: 'Foundational & Generative' },
    { id: 'tactical', label: 'Tactical & Strategic' },
    { id: 'endtoend', label: 'End-to-End' },
    { id: 'quantitative', label: 'Quantitative' },
    { id: 'qualitative', label: 'Qualitative' },
  ].map((f) => ({
    ...f,
    count: f.id === 'all' ? caseStudies.length : caseStudies.filter((s) => s.tags?.includes(f.id)).length,
  }))

  return (
    <section id="case-study" className="py-24 sm:py-32 px-6 border-t border-ink/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-wider-3 uppercase text-ink/50">Portfolio</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Case <span className="text-work">Studies</span>
          </h2>
          <p className="mt-6 text-base text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Generative and evaluative research shaping products for millions of users.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-xs tracking-wider-2 uppercase px-4 py-2 border bg-transparent transition-colors duration-200 focus:outline-none ${
                filter === f.id
                  ? 'text-ink border-ink font-semibold'
                  : 'text-ink/60 border-ink/20 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {f.label}
              <span className="ml-2 text-[10px] opacity-60">({f.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="space-y-px bg-ink/10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredStudies.map((study, idx) => (
              <motion.div key={study.id} variants={cardVariants}>
                {study.caseUrl ? (
                  /* ── Has a published case study → link card ── */
                  <a
                    href={study.caseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-cream text-left group block transition-all duration-300 hover:bg-ink hover:text-cream focus:outline-none focus:bg-ink focus:text-cream"
                  >
                    <div className="grid grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-8 py-8 sm:py-10 items-baseline">
                      <span className="col-span-2 sm:col-span-1 font-display text-xl sm:text-2xl text-ink/40 group-hover:text-cream/40 transition-colors">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="col-span-10 sm:col-span-7">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-[10px] tracking-wider-3 uppercase text-ink/50 group-hover:text-cream/60 transition-colors">
                            {study.theme || study.category}
                            {study.studies && ` · ${study.studies}`}
                          </p>
                          {study.timeline && (
                            <>
                              <span className="text-[10px] text-ink/30 group-hover:text-cream/30">·</span>
                              <span className="text-[10px] text-ink/50 group-hover:text-cream/50">{study.timeline}</span>
                            </>
                          )}
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                          {study.title}
                        </h3>
                        <p className="mt-3 text-sm text-ink/60 group-hover:text-cream/70 transition-colors leading-relaxed max-w-xl">
                          {study.subtitle}
                        </p>
                      </div>
                      <div className="hidden sm:flex col-span-4 items-baseline justify-end gap-3 text-xs tracking-wider-2 uppercase text-ink/50 group-hover:text-cream transition-all duration-300">
                        Open Case Study
                        <span className="text-base group-hover:translate-x-1 transition-transform duration-300" aria-hidden>→</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  /* ── No case study → static row with email button ── */
                  <div className="bg-cream w-full">
                    <div className="grid grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-8 py-8 sm:py-10 items-baseline">
                      <span className="col-span-2 sm:col-span-1 font-display text-xl sm:text-2xl text-ink/40">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="col-span-10 sm:col-span-7">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-[10px] tracking-wider-3 uppercase text-ink/50">
                            {study.theme || study.category}
                            {study.studies && ` · ${study.studies}`}
                          </p>
                          {study.timeline && (
                            <>
                              <span className="text-[10px] text-ink/30">·</span>
                              <span className="text-[10px] text-ink/50">{study.timeline}</span>
                            </>
                          )}
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                          {study.title}
                        </h3>
                        <p className="mt-3 text-sm text-ink/60 leading-relaxed max-w-xl">
                          {study.subtitle}
                        </p>
                      </div>
                      <div className="hidden sm:flex col-span-4 items-baseline justify-end">
                        <a
                          href={`mailto:9rachelebenjamin@gmail.com?subject=${encodeURIComponent('Interest in ' + study.title)}`}
                          className="inline-flex items-center gap-2 border border-ink/30 text-ink/70 px-5 py-2.5 text-xs tracking-wider-2 uppercase font-medium hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300"
                        >
                          Email me for the case study
                        </a>
                      </div>
                    </div>
                    {/* Mobile email button */}
                    <div className="sm:hidden px-4 pb-8">
                      <a
                        href={`mailto:9rachelebenjamin@gmail.com?subject=${encodeURIComponent('Interest in ' + study.title)}`}
                        className="inline-flex items-center gap-2 border border-ink/30 text-ink/70 px-5 py-2.5 text-xs tracking-wider-2 uppercase font-medium hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300"
                      >
                        Email me for the case study
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
