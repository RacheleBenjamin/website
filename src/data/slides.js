// Curated visual artifacts from the Microsoft AI shopping case study.
// Source: Case Study.pptx — assets extracted to /public/slides/

export const visualsIntro = {
  eyebrow: 'Visual Archive',
  title: 'Artifacts from the field',
  subtitle:
    'A selection of diagrams, dashboards, and product mocks from the AI shopping research program at Microsoft.',
}

export const visuals = [
  {
    id: 'cover',
    number: '01',
    src: '/slides/image1.png',
    alt: 'Iridescent holographic cover artwork',
    title: 'Cover',
    caption: 'Opening image — AI Shopping case study deck.',
    kind: 'Visual identity',
    aspect: 'wide',
  },
  {
    id: 'jtbd',
    number: '02',
    src: '/slides/image11.png',
    alt: 'Affinity diagram of shopping jobs-to-be-done in FigJam',
    title: 'Jobs-to-be-done map',
    caption:
      'Synthesis of 30+ shopping jobs across discovery, evaluation, checkout, and post-purchase — clustered to identify the highest-leverage AI opportunities.',
    kind: 'Synthesis · FigJam',
    aspect: 'tall',
  },
  {
    id: 'matrix',
    number: '03',
    src: '/slides/image13.png',
    alt: 'Interactive opportunity matrix dashboard plotting satisfaction vs. importance',
    title: 'Opportunity matrix',
    caption:
      'Interactive dashboard plotting satisfaction × importance for every shopping job. Built to let stakeholders explore why users want — or hesitate to give — automation to AI.',
    kind: 'Quant artifact · Dashboard',
    aspect: 'wide',
  },
  {
    id: 'consent',
    number: '04',
    src: '/slides/image4.png',
    alt: 'Copilot consent screen asking permission to browse the web',
    title: 'Agentic consent',
    caption:
      'Concept exploring how Copilot asks for trust before acting on a user\'s behalf — one of the central tensions in agentic shopping.',
    kind: 'Product concept',
    aspect: 'wide',
  },
  {
    id: 'checkout',
    number: '05',
    src: '/slides/image3.png',
    alt: 'Copilot grocery checkout assistant mockup',
    title: 'Assisted checkout',
    caption:
      'Mockup studied in usability sessions: Copilot summarizes a grocery cart, surfaces deals, and confirms before completing purchase.',
    kind: 'Usability stimulus',
    aspect: 'wide',
  },
  {
    id: 'deals',
    number: '06',
    src: '/slides/image21.png',
    alt: 'Deal notification UI surfacing price drops',
    title: 'Proactive deals',
    caption:
      'Notification pattern probed with participants — testing tolerance for proactive AI nudges around price and availability.',
    kind: 'Concept stimulus',
    aspect: 'wide',
  },
  {
    id: 'holiday',
    number: '07',
    src: '/slides/image10.png',
    alt: 'Holiday shopping illustration',
    title: 'Seasonal context',
    caption:
      'Editorial illustration framing the holiday-shopping research sprint — the highest-stakes moment for AI assistance to earn trust.',
    kind: 'Editorial',
    aspect: 'wide',
  },
]
