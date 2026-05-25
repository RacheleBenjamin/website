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

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

export default function CaseStudy() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const filteredStudies =
    filter === 'all'
      ? caseStudies
      : caseStudies.filter((s) => s.tags?.includes(filter))

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
            Research <span className="italic font-light">at Scale</span>
          </h2>
          <p className="mt-6 text-base text-ink/60 max-w-2xl mx-auto leading-relaxed font-light">
            From agentic AI to enterprise browsers to financial services—generative and evaluative research shaping products for millions of users.
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
              className={`text-xs tracking-wider-2 uppercase px-4 py-2 border transition-all duration-300 ${
                filter === f.id
                  ? 'bg-ink text-cream border-ink'
                  : 'bg-transparent text-ink/60 border-ink/20 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {f.label}
              <span className="ml-2 text-[10px] opacity-60">({f.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Tiles — single column with editorial spacing */}
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
              <motion.button
                key={study.id}
                variants={cardVariants}
                onClick={() => setSelected(study)}
                className="w-full bg-cream text-left group cursor-pointer transition-all duration-300 hover:bg-ink hover:text-cream focus:outline-none focus:bg-ink focus:text-cream"
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-8 py-8 sm:py-10 items-baseline">
                  <span className="col-span-2 sm:col-span-1 font-display text-xl sm:text-2xl text-ink/40 group-hover:text-cream/40 group-focus:text-cream/40 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="col-span-10 sm:col-span-7">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[10px] tracking-wider-3 uppercase text-ink/50 group-hover:text-cream/60 group-focus:text-cream/60 transition-colors">
                        {study.theme || study.category}
                        {study.studies && ` · ${study.studies}`}
                      </p>
                      {study.timeline && (
                        <>
                          <span className="text-[10px] text-ink/30 group-hover:text-cream/30">·</span>
                          <span className="text-[10px] text-ink/50 group-hover:text-cream/50">
                            {study.timeline}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/60 group-hover:text-cream/70 group-focus:text-cream/70 transition-colors leading-relaxed font-light max-w-xl">
                      {study.subtitle}
                    </p>
                  </div>
                  <div className="hidden sm:flex col-span-4 items-baseline justify-end gap-3 text-xs tracking-wider-2 uppercase text-ink/50 group-hover:text-cream group-focus:text-cream transition-all duration-300">
                    Read Case
                    <span className="text-base group-hover:translate-x-1 transition-transform duration-300" aria-hidden>→</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-8 pointer-events-none">
              <motion.div
                key="modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-cream w-full max-w-3xl max-h-[92vh] overflow-y-auto pointer-events-auto"
                role="dialog"
                aria-modal="true"
              >
                {/* Modal header */}
                <div className="px-8 sm:px-12 pt-12 pb-8 border-b border-ink/10 sticky top-0 bg-cream/95 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[10px] tracking-wider-3 uppercase text-ink/50 mb-3">
                        {selected.theme} · {selected.studies}
                      </p>
                      <h2 className="font-display text-3xl sm:text-4xl leading-tight tracking-tight">
                        {selected.title}
                      </h2>
                      <p className="mt-3 text-ink/60 text-sm leading-relaxed font-light">
                        {selected.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="shrink-0 w-9 h-9 rounded-full border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center text-sm"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <div className="px-8 sm:px-12 py-12 space-y-10">
                  <Block label="Context" body={selected.context} />
                  <Block label="Research Challenge" body={selected.challenge} />

                  <div>
                    <Label>Methods</Label>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selected.methods.map((m) => (
                        <span
                          key={m}
                          className="text-xs tracking-wider-2 uppercase border border-ink/20 text-ink/70 px-3 py-1.5"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Key Insights</Label>
                    <div className="mt-4 space-y-6">
                      {selected.insights.map((insight, i) => (
                        <div key={i} className="border-l-2 border-ink/30 pl-5">
                          <p className="font-display text-lg leading-snug">{insight.finding}</p>
                          <p className="text-ink/60 text-sm mt-2 leading-relaxed font-light">
                            {insight.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selected.quotes?.length > 0 && (
                    <div>
                      <Label>Participant Voices</Label>
                      <div className="mt-4 space-y-5">
                        {selected.quotes.map((q, i) => (
                          <blockquote key={i} className="border-t border-ink/10 pt-5">
                            <p className="font-display text-xl italic leading-snug text-ink/85">
                              "{q.text}"
                            </p>
                            <footer className="mt-3 text-[10px] tracking-wider-3 uppercase text-ink/50">
                              — {q.author}
                            </footer>
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-ink/10 pt-8">
                    <Block label="Recommendations" body={selected.recommendations} />
                    <Block label="Impact & Outcomes" body={selected.impact} />
                  </div>

                  <div>
                    <Label>Deliverables</Label>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selected.deliverables.map((d) => (
                        <span key={d} className="text-xs text-ink/60 italic">
                          {d}
                        </span>
                      )).reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={`dot-${i}`} className="text-ink/30">·</span>, curr], [])}
                    </div>
                  </div>

                  {selected.visuals?.length > 0 && (
                    <div>
                      <Label>Visual Artifacts</Label>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selected.visuals.map((v, i) => (
                          <figure key={i} className="group overflow-hidden border border-ink/10">
                            <div className="overflow-hidden bg-ink/5">
                              <img
                                src={v.src}
                                alt={v.alt}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <figcaption className="px-3 py-2.5 text-[10px] text-ink/50 leading-relaxed border-t border-ink/10">
                              {v.caption}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

function Label({ children }) {
  return (
    <span className="text-[10px] tracking-wider-3 uppercase text-ink/50 font-medium">
      {children}
    </span>
  )
}

function Block({ label, body }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-3 text-ink/80 text-sm leading-relaxed font-light">{body}</p>
    </div>
  )
}
