import { motion } from 'framer-motion'

export default function Featured() {
  const chartUrl = `${import.meta.env.BASE_URL}featured/group-share-chart.html`

  return (
    <section id="featured" className="pt-8 sm:pt-12 pb-24 sm:pb-32 px-6 border-t border-ink/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="font-display text-xl sm:text-2xl leading-snug tracking-tight max-w-3xl">
            Programmed a skill that produces interactable charts to connect stakeholders to more information. Sample: Large-scale survey to uncover AI opportunities in digital groups.
          </h2>
          <p className="mt-3 text-sm text-ink/60 max-w-2xl leading-relaxed">
            Hover the labels for exact survey phrasing, hover or click the chart for significance tests. Interact with the legend to sort &amp; filter data.
          </p>
        </motion.div>

        {/* Embedded chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border border-ink/10 bg-cream shadow-sm overflow-hidden"
        >
          <iframe
            src={chartUrl}
            title="Comfort sharing AI conversations by group — interactive chart"
            className="w-full block"
            style={{ height: '1100px', border: 0 }}
            loading="lazy"
          />
        </motion.div>

        {/* Open-in-new-tab affordance */}
        <div className="mt-6 flex justify-end">
          <a
            href={chartUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-wider-2 uppercase text-ink/60 hover:text-ink transition-colors font-medium"
          >
            Open chart in a new tab
            <span className="text-[9px] opacity-60">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
