import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Microsoft AI (MAI)',
    role: 'UX Researcher',
    period: 'Present',
    highlights: [
      'Led 35+ studies across Edge (Consumer & Enterprise), Shopping, Copilot, GroupMe, Character, Read Aloud, Bing, and more',
      'Established agentic AI research foundations for Shopping and Browser for Work',
      'Findings showcased at Microsoft Ignite 2026; contributed to Figma Make and Vibe Code Sprint',
      'Designed large-scale survey research with 1,500+ participants',
    ],
  },
  {
    company: 'TD Bank',
    role: 'Senior Design Researcher',
    period: 'Aug 2022 – Jul 2024',
    highlights: [
      'Secured funding for and led multi-phased generative research program on Open Banking ahead of regulatory transition',
      'Led large-scale estate settlement intervention study as Research SME across data analytics, data science, and product teams',
      'Ran end-to-end research from discovery to co-design with users and C-suite executives for investment products (GICs & ETFs)',
      'Estate settlement research outcomes sparked a partnership with Empathy, a platform supporting bereaved customers through the settlement process',
    ],
  },
]

const education = [
  {
    degree: 'PhD, Social Psychology',
    institution: 'University of British Columbia',
    highlights: [
      'Dissertation: defining and explaining "uncanny" feelings',
      'Research on attitudes towards democracy',
    ],
  },
]

const skills = [
  'Mixed methods', 'Jobs to Be Done', 'Diary studies', 'Survey design',
  'Usability testing', 'Moderated interviews', 'FigJam facilitation',
  'Concept testing', 'Stakeholder presentations', 'Bayesian analysis', 'Figma',
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 border-t border-ink/10 overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-wider-3 uppercase text-ink/50 font-medium">Background</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            Experience &<br />
            <span className="italic font-light">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Heading>Work</Heading>
            {experiences.map((exp, i) => (
              <div key={i} className="mt-8 group">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3 mb-4 transition-colors group-hover:border-ink/30">
                  <h4 className="font-display text-xl transition-colors group-hover:text-ink">{exp.role}</h4>
                  <span className="text-[10px] tracking-wider-2 uppercase text-ink/50 shrink-0 font-medium">{exp.period}</span>
                </div>
                <p className="font-display italic text-ink/70 mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-ink/70 leading-relaxed font-light transition-colors group-hover:text-ink/80">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Heading>Education</Heading>
            {education.map((edu, i) => (
              <div key={i} className="mt-8 group">
                <div className="border-b border-ink/15 pb-3 mb-4 transition-colors group-hover:border-ink/30">
                  <h4 className="font-display text-xl transition-colors group-hover:text-ink">{edu.degree}</h4>
                </div>
                <p className="font-display italic text-ink/70 mb-4">{edu.institution}</p>
                <ul className="space-y-3">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-ink/70 leading-relaxed font-light transition-colors group-hover:text-ink/80">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Heading>Methods</Heading>
            <ul className="mt-8 space-y-2.5">
              {skills.map((s) => (
                <li key={s} className="text-sm text-ink/70 font-light hover:text-ink transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Heading({ children }) {
  return (
    <h3 className="text-[10px] tracking-wider-3 uppercase text-ink/50 font-medium">{children}</h3>
  )
}
