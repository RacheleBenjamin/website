import { motion } from 'framer-motion'
import { visuals, visualsIntro } from '../data/slides'
import { scrollToAnchor } from '../hooks/scrollToAnchor'

const ease = [0.22, 1, 0.36, 1]

export default function Visuals() {
  return (
    <main className="bg-cream text-ink min-h-screen">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
        {/* Background plate */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/slides/image1.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/70 to-cream" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-[11px] sm:text-xs tracking-wider-3 uppercase text-ink/60 font-medium"
          >
            {visualsIntro.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="mt-6 font-display font-light text-[12vw] sm:text-[8vw] lg:text-[7rem] leading-[0.95] tracking-tight"
          >
            Artifacts <span className="italic font-extralight">from the field</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
            className="mt-10 max-w-2xl text-base sm:text-lg text-ink/70 leading-relaxed"
          >
            {visualsIntro.subtitle} Each piece below is pulled directly from the
            decks, dashboards, and FigJam boards used to ship the work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.32 }}
            className="mt-16 flex items-center gap-6 text-[11px] tracking-wider-2 uppercase text-ink/50"
          >
            <span>{visuals.length} pieces</span>
            <span className="w-8 h-px bg-ink/20" />
            <span>2024 — 2025</span>
            <span className="w-8 h-px bg-ink/20" />
            <span>Microsoft AI</span>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────── GALLERY ───────────────────────── */}
      <section className="border-t border-ink/10">
        {visuals.slice(1).map((v, i) => (
          <VisualRow key={v.id} visual={v} index={i} />
        ))}
      </section>

      {/* ───────────────────────── FOOTER STRIP ───────────────────────── */}
      <section className="border-t border-ink/10 py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
          <div>
            <p className="text-[11px] tracking-wider-3 uppercase text-ink/60 font-medium">
              Continue
            </p>
            <h2 className="mt-4 font-display font-light text-4xl sm:text-6xl leading-[1.05]">
              See the <span className="italic">case study</span> behind the visuals.
            </h2>
          </div>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = '#/'
              scrollToAnchor('case-study')
            }}
            className="group inline-flex items-center gap-3 text-[11px] tracking-wider-2 uppercase font-medium border-b border-ink pb-1"
          >
            <span>Read the case study</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}

/* ────────────────────────────────────────────────────────────────── */

function VisualRow({ visual, index }) {
  const flip = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease }}
      className="border-b border-ink/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Caption side */}
        <div
          className={`lg:col-span-4 ${
            flip ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'
          }`}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-2xl text-ink/40">{visual.number}</span>
            <span className="text-[10px] tracking-wider-3 uppercase text-ink/50 font-medium">
              {visual.kind}
            </span>
          </div>

          <h3 className="mt-6 font-display font-light text-4xl sm:text-5xl leading-[1.05]">
            {visual.title}
          </h3>

          <p className="mt-6 text-ink/70 leading-relaxed text-[15px] sm:text-base">
            {visual.caption}
          </p>
        </div>

        {/* Image side */}
        <div
          className={`lg:col-span-8 ${
            flip ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <figure className="group relative overflow-hidden bg-ink/[0.03] border border-ink/10">
            <img
              src={visual.src}
              alt={visual.alt}
              loading="lazy"
              className={`w-full h-auto block transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02] ${
                visual.aspect === 'tall' ? 'object-contain max-h-[80vh] mx-auto' : ''
              }`}
            />
          </figure>
        </div>
      </div>
    </motion.article>
  )
}
