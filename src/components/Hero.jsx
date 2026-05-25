import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream to-cream/80" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full text-center relative z-10"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block text-xs tracking-wider-3 uppercase text-ink/50 mb-8 font-medium"
        >
          UX Researcher · PhD, Social Psychology
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-display text-[14vw] sm:text-[10vw] lg:text-[9rem] leading-[0.9] tracking-tight text-ink"
        >
          Rachele
          <br />
          <span className="italic font-light text-ink/75">Benjamin</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-12 text-base sm:text-lg text-ink/60 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Mixed methods researcher shaping AI products at Microsoft — from agentic shopping to enterprise browsers. 
          Turning generative insights and evaluative studies into product decisions that matter for millions of users.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-wrap items-center justify-center gap-10 sm:gap-16 text-center"
        >
          <Stat number="35+" label="Studies" sublabel="Microsoft AI" />
          <Stat number="6" label="Publications" sublabel="Peer-reviewed" />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#case-study"
            className="group inline-flex items-center gap-2.5 bg-ink text-cream px-8 py-4 text-xs tracking-wider-2 uppercase font-medium hover:bg-ink/90 transition-all duration-300 hover:gap-3.5"
          >
            View Portfolio
            <span className="transition-transform duration-300" aria-hidden>→</span>
          </a>
          <a
            href="#/research"
            className="group inline-flex items-center gap-2.5 border border-ink/20 text-ink px-8 py-4 text-xs tracking-wider-2 uppercase font-medium hover:border-ink hover:bg-ink hover:text-cream transition-all duration-300"
          >
            Academic Research
          </a>
          <a
            href="/RB-Resume.pdf"
            download
            className="group inline-flex items-center gap-2.5 border border-ink/20 text-ink px-8 py-4 text-xs tracking-wider-2 uppercase font-medium hover:border-ink hover:bg-ink hover:text-cream transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <span className="text-[10px] tracking-wider-3 uppercase text-ink/40 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-ink/40 via-ink/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}

function Stat({ number, label, sublabel }) {
  return (
    <div className="group cursor-default">
      <div className="font-display text-4xl sm:text-5xl text-ink tracking-tight transition-transform duration-300 group-hover:scale-105">
        {number}
      </div>
      <div className="mt-1.5 text-[10px] tracking-wider-3 uppercase text-ink/50 font-medium">
        {label}
      </div>
      <div className="text-[9px] text-ink/40 italic">{sublabel}</div>
    </div>
  )
}
