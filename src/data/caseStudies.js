// ═══════════════════════════════════════════════════════════════════════════
// RACHELE BENJAMIN — PORTFOLIO CASE STUDIES
// Comprehensive collection: PowerPoint studies + Resume projects
// ═══════════════════════════════════════════════════════════════════════════

export const caseStudies = [
  // ───────────────────────────────────────────────────────────────────────────
  // FEATURED STUDIES (from PowerPoint deck — detailed artifacts)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'featured-01',
    category: 'Featured Study',
    company: 'Microsoft AI',
    timeline: 'Feb – Jun 2025',
    studies: 'Studies 1–4',
    caseUrl: '/case-study-presentation/case-study-shopping.html',
    title: 'From Jobs to Be Done to Product Decisions: An End-to-End Exploration of Agentic AI Shopping',
    subtitle: 'Four studies spanning trust, opportunity discovery, and concept validation across the shopping journey',
    theme: '🛍️ Agentic Shopping',
    themeColor: 'blue',
    context:
      'From February through mid-2025, I ran a four-study research program examining how users engage with agentic AI throughout the shopping journey. The program moved from trust and consent research (Studies 1 & 2) — following the launch of ChatGPT Operator — through large-scale opportunity analysis mapping 143 shopping activities (Study 3), to concept testing with real users on the New Tab Page (Study 4).',
    methods: [
      'Dscout diary study (n=20)',
      'JTBD framework',
      'Survey (n=1,533 US participants)',
      'UserTesting (n=8 Edge users)',
      '143 documented shopping activities',
      '17 Jobs to Be Done identified',
      'Think-aloud protocol',
    ],
    challenge:
      'The program addressed three compounding questions: Do users understand agentic AI well enough to meaningfully consent to it? Where does AI create the most value across the full shopping journey? And do the concepts designers generate actually resonate with users in practice?',
    insights: [
      {
        finding: 'Users clicked Allow without understanding scope',
        detail:
          'Participants assumed their email, location, and browsing history would be included — but assumed financial information would not. Their mental model of "browse for you" was weak; they did not know what happened after clicking Allow.',
      },
      {
        finding: 'Agentic AI adds value for complex tasks, not simple ones',
        detail:
          'The extra UI felt like overkill when simpler solutions (autofill, bookmarks) were already available. Value only emerged for genuinely multi-step, high-effort tasks.',
      },
      {
        finding: 'Top AI opportunities: Compare, Find, Deals, Track, Timing, Budget',
        detail:
          'Mapping 143 activities to 17 Jobs to Be Done, then surveying 1,533 participants, revealed clear signals. Compare and Find ranked highest on both importance and AI openness.',
      },
      {
        finding: 'Users want AI to compare fully — but only notify them of deals',
        detail:
          'Comparing is tedious and users welcome full automation. For deals, they want to be informed and stay in control. "Doing anything other than notifying me is not wanted."',
      },
      {
        finding: 'Keep the fun in shopping',
        detail:
          'For discovery and browsing, users want ideas and suggestions — not automation. The search itself is enjoyable and AI should enhance, not replace, that experience.',
      },
      {
        finding: 'The same action signals different Jobs to Be Done',
        detail:
          'Users switch from in-store to online for different reasons: finding a better price, seeking variety, controlling impulses, or researching further. Intent-aware AI must infer the job, not just the trigger.',
      },
    ],
    quotes: [
      {
        text: "It is new, but it is not revolutionary. When it has original thoughts... that is revolutionary.",
        author: 'Dylan, Copilot Pro User',
      },
      {
        text: "I enjoy browsing and discovering new things, especially when I am shopping for something fun.",
        author: 'User, 23, Texas',
      },
      {
        text: "Doing anything other than notifying me is not wanted.",
        author: 'Survey participant',
      },
      {
        text: "If it was Nike or Adidas, I might want the best price. But if it is just a normal shoe, I might be looking for variety.",
        author: 'Matt, Edge user',
      },
    ],
    recommendations:
      'Extend consent UI with tooltips clarifying exactly what data is used and what actions are taken. Position agentic AI as a partner for complex decisions, not a replacement for simple ones. Prioritize Compare, Find, Deals, Track, Timing, and Budget — with automation levels matched to user intent and desired control. Build concept experiences for different intents: the same trigger can signal deal-hunting, item discovery, or inspiration.',
    impact:
      'Consent UI changes were made in rapid iteration cycles. Shopping roadmap investments were reprioritized based on the opportunity matrix. Designers developed concepts from top opportunities and an interactive output helped stakeholders align on priorities. The Continue Journey concept advanced to the next stage of product development.',
    deliverables: [
      'Research memo (Studies 1 & 2)',
      'JTBD map (143 activities, 17 jobs)',
      'Survey instrument and analysis (n=1,533)',
      'Interactive stakeholder prioritization output',
      'Concept test findings',
      'Full presentation decks (x3)',
    ],
    tags: ['foundational', 'qualitative', 'quantitative', 'endtoend', 'tactical'],
    visuals: [
      { src: '/slides/image4.png', alt: 'Copilot consent screen asking permission to browse the web', caption: 'Agentic consent UI — one of the central tensions studied in the first-run experience.' },
      { src: '/slides/image1.png', alt: 'Iridescent holographic cover artwork for AI Shopping case study deck', caption: 'Cover — AI Shopping research deck, Apr 2025.' },
      { src: '/slides/image11.png', alt: 'Affinity diagram of shopping jobs-to-be-done in FigJam', caption: 'JTBD map — 143 shopping activities synthesized into 17 Jobs to Be Done.' },
      { src: '/slides/image13.png', alt: 'Opportunity matrix dashboard plotting satisfaction vs. importance', caption: 'Opportunity matrix — importance x satisfaction x AI openness across all shopping jobs.' },
      { src: '/slides/image21.png', alt: 'Deal notification UI surfacing price drops', caption: 'Proactive deals stimulus — testing tolerance for AI-driven price nudges.' },
      { src: '/slides/image10.png', alt: 'Holiday shopping illustration', caption: 'Holiday sprint framing — the highest-stakes moment for AI assistance to earn trust.' },
      { src: '/slides/image3.png', alt: 'Copilot grocery checkout assistant mockup', caption: 'Assisted checkout concept — Copilot surfaces deals and confirms before completing purchase.' },
    ],
  },
  {
    id: 'featured-02',
    category: 'Featured Study',
    company: 'Microsoft AI',
    timeline: '2025',
    caseUrl: '/case-study-presentation/case-study-copilot.html',
    title: 'From Solo to Social AI: Discovery Research for Microsoft Copilot',
    subtitle: 'Mixed-methods discovery into how people already share, co-create, and hack AI with others — and where Copilot can meet them',
    theme: '🤝 Social AI',
    themeColor: 'purple',
    context:
      'A discovery research program for Microsoft Copilot examining how people use AI socially — sharing prompts, co-creating with collaborators, and "hacking" single-user tools to support group work. The research mapped the Solo→Social AI diffusion loop and identified where designed social AI experiences could replace today\'s workarounds.',
    methods: [
      'Mixed-methods discovery',
      'Survey (large-n)',
      'Behavioral analysis',
      'JTBD framework',
      'Diffusion modeling',
    ],
    challenge:
      'AI assistants are designed for solo use, but people increasingly use them with and around other people. Where is social AI already happening, what jobs is it doing, and what should Copilot build to support it?',
    tags: ['foundational', 'qualitative', 'quantitative', 'endtoend'],
  },
  {
    id: 'featured-04',
    category: 'Featured Study',
    company: 'Microsoft AI',
    timeline: 'Aug 2024 – Oct 2025',
    studies: 'Studies 5 & 6',
    title: 'Laying the Foundation for an AI-First Browser for Work',
    subtitle: 'Shaping the AI-first browser for 10M+ enterprise users through JTBD and generative research',
    theme: '🧑‍💻 Browser for Work',
    themeColor: 'amber',
    context:
      'As sole UX Researcher for Enterprise Microsoft Edge (10M+ users), I ran two interconnected research programs to define who commercial browser users are, what they need from an AI-first browser, and where agentic AI creates the most value in professional contexts. Beginning in August 2024, I led generative product research to shape the enterprise AI vision and strategy. By October 2025 — less than a month before Ignite — I completed a focused JTBD study with 16 participants across diverse industries to map the core jobs that define work browsing.',
    methods: [
      'Generative research',
      '1:1 interviews (n=16)',
      '75-min FigJam sessions',
      'JTBD framework',
      'Competitive analysis',
      'Stakeholder workshops',
      'Secondary research',
    ],
    challenge:
      'How do enterprise users want AI integrated into their browsing workflow — and how do we balance innovation with the security, compliance, and trust requirements that govern their environments? With an Ignite deadline approaching, the team needed rapid but rigorous insights spanning diverse industries, roles, and motivations.',
    insights: [
      {
        finding: '10 core Jobs to Be Done define the commercial browser user',
        detail:
          'Research, Create, Collaborate, Learn, Plan/coordinate, Get answers, Interpret, Inform, Influence, and Stay up to date. Top AI opportunities cluster around Research, Create, Collaborate, Get answers, Interpret, and Influence.',
      },
      {
        finding: 'Enterprise trust threshold differs from consumer',
        detail:
          'Enterprise users demand explicit data governance and compliance transparency before adopting AI features. Security and auditability are table stakes, not differentiators.',
      },
      {
        finding: 'User motivations at work are variable — and shape how AI should help',
        detail:
          'Users research for personal growth, influence to make a difference, and inform for stability. Features built around tasks alone miss the deeper motivations driving engagement.',
      },
      {
        finding: 'Human intuition must steer AI social interactions',
        detail:
          'Users worry that AI-managed communication feels impersonal or even rude. Automation should work behind the scenes — not replace the human in the interaction.',
      },
    ],
    quotes: [
      {
        text: "I worry that if an AI managed communication, people would be less likely to respond... or it would be considered rude.",
        author: 'Julia, Product Operations Manager',
      },
      {
        text: "They did not call to talk to AI, they called to talk to a human. So, you know, just be more human.",
        author: 'Aurora, Crisis Worker',
      },
      {
        text: "When someone moves from a place of ignorance to understanding, that is what I do it for.",
        author: 'Elise, Return to Work Specialist',
      },
    ],
    recommendations:
      'Design for explicit data governance and compliance transparency. Give users full control over communication and connection while automation handles background tasks. Build a New Tab Page that connects users to what motivates them at work. Prioritize AI opportunities in Research, Create, and Collaborate.',
    impact:
      'Insights shaped the vision and strategy for the Enterprise Edge AI-first browser, informing the roadmap for 10M+ global users. Browser for Work scenarios were showcased at Ignite 2026. Findings laid the foundation for a Vibe Code Sprint and contribution to the Figma Make gallery wall.',
    deliverables: [
      'Strategic vision report',
      'Competitive analysis',
      'Product roadmap recommendations',
      'Full JTBD presentation deck',
      'Sprint planning',
      'FigJam gallery wall',
      'Figma Make contribution',
    ],
    tags: ['foundational', 'qualitative', 'endtoend', 'tactical'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MICROSOFT AI — Product Portfolio (Aug 2024 - Present)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'msft-03',
    category: 'Featured Study',
    company: 'Microsoft',
    timeline: 'Aug 2024 - Present',
    title: 'Productivity for the People: A 0-1 Feature for Organizing Browser Tabs',
    subtitle: 'From blank-slate research to 1.3M daily active users',
    theme: '📑 Productivity',
    themeColor: '#0078D4',
    context:
      'The Microsoft Edge Productivity team needed to understand how users manage their tab overload before committing to any product direction. With no prior research foundation, I led a full program from discovery through validation — culminating in the Tab Action Menu feature that shipped to production.',
    challenge:
      'How do users actually navigate dozens of open tabs in practice? What are the real efficiency bottlenecks, and what interventions would users genuinely adopt? The team needed answers before roadmapping a full year of work.',
    methods: [
      'Generative research (core needs discovery)',
      'Evaluative studies (concept & prototype testing)',
      'Multi-tab navigation observation',
      'Cross-functional stakeholder alignment',
    ],
    insights: [
      {
        finding: 'Tabs are contexts, not tasks',
        detail:
          'Users do not think in tasks — they think in projects, moods, and mental threads. A tab for a vacation itinerary is not "a task to complete," it is a held context. Closing it feels like losing a thought. Design needed to honor that.',
      },
      {
        finding: 'The action barrier is the moment of friction',
        detail:
          'Users knew what they wanted to do with tabs — group, suspend, move, bookmark. The problem was the right-click menu buried those actions behind too many steps. A streamlined, contextual action surface was the unlock.',
      },
      {
        finding: 'Power users set the bar; casual users need the floor',
        detail:
          'Heavy multi-tab users had workarounds (pinning, window splitting) that revealed what the feature needed to support. Casual users had no vocabulary for what was possible — discoverability and simplicity were equally critical.',
      },
    ],
    quotes: [],
    recommendations:
      'Redesign the tab interaction surface around contextual actions rather than a flat right-click menu. Prioritize the top 3 actions (group, close similar, suspend) with one-tap access. Preserve spatial layout as a core design principle.',
    impact:
      'Research directly shaped product strategy and the year-long roadmap for the Productivity team. The Tab Action Menu feature shipped to production and reached 1.3 million daily active users.',
    deliverables: [
      'Research roadmap (generative through evaluative)',
      'Core user needs analysis',
      'Multi-tab navigation behavior report',
      'Concept test findings',
      'Product strategy recommendations',
    ],
    tags: ['foundational', 'tactical', 'qualitative', 'endtoend'],
  },
  // ───────────────────────────────────────────────────────────────────────────
  // TD BANK — Product Portfolio (Aug 2022 - Jul 2024)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'td-01',
    category: 'TD Bank Product',
    company: 'TD Bank',
    timeline: 'Aug 2022 - Jul 2024',
    title: 'Injecting Empathy into the Estate Settlement Journey',
    subtitle: 'Large-scale research improving the bereavement experience at TD Bank',
    theme: '🏦',
    themeColor: '#00A758',
    context:
      'Worked cross-functionally as Research SME to plan and execute large-scale intervention study improving the estate settlement journey for bereaved customers.',
    challenge:
      'Measure effectiveness of redesigned estate settlement flow balancing emotional relief and operational efficiency.',
    methods: ['Intervention study', 'Cross-functional collaboration', 'Mixed methods'],
    insights: [
      {
        finding: 'Clarity beats speed',
        detail:
          'Customers prioritized understanding what would happen next over completing tasks quickly.',
      },
    ],
    quotes: [],
    recommendations: 'Minimize repetitive data entry, build explicit checkpoints, offer proactive human touchpoints.',
    impact: 'Improved estate settlement journey, produced valuable insights, and demonstrated ROI of research-driven interventions. Research outcomes sparked a partnership with Empathy — a platform dedicated to supporting bereaved customers through the estate settlement process.',
    deliverables: ['Intervention study design', 'Research methodology framework', 'Insights report'],
    tags: ['tactical', 'qualitative', 'endtoend'],
  },
  {
    id: 'td-02',
    category: 'TD Bank Product',
    company: 'TD Bank',
    timeline: 'Aug 2022 - Jul 2024',
    title: 'Stories of Safe Investors: A Segmentation Study',
    subtitle: 'End-to-end research with C-suite during market volatility',
    theme: '💰',
    themeColor: '#00A758',
    context:
      'Led end-to-end research from discovery to co-design with users and top banking executives to develop investment products during volatile market conditions.',
    challenge:
      'Design investment products that resonate during market uncertainty while engaging executives in co-design without compromising user-centered approach.',
    methods: ['1:1 interviews', 'Co-design sessions', 'Stakeholder collaboration'],
    insights: [
      {
        finding: 'Safety vs. opportunity tradeoff is emotional',
        detail:
          'Users felt torn between protecting money (GICs) and not missing market gains (ETFs) — anxiety-driven, not rational.',
      },
    ],
    quotes: [],
    recommendations: 'Frame products as complementary tools, build educational scaffolding, surface product-specific trust signals.',
    impact: 'Developed useful, usable, delightful products that resonated with users and addressed volatile market conditions.',
    deliverables: ['Interview findings', 'Co-design outputs', 'Product design recommendations'],
    tags: ['qualitative', 'endtoend', 'tactical'],
  },
  {
    id: 'td-03',
    category: 'TD Bank Product',
    company: 'TD Bank',
    timeline: 'Aug 2022 - Jul 2024',
    caseUrl: '/case-study-presentation/case-study-open-banking.html',
    title: 'Foundational Research to Guide TD\'s Open Banking Strategy',
    subtitle: 'Multi-phased strategic research preparing TD Bank for Open Banking regulatory transition',
    theme: '🔐',
    themeColor: '#00A758',
    context:
      'Secured funding for and executed multi-phased generative research program preparing bank leaders for Open Banking regulatory transition.',
    challenge:
      'Explore user attitudes toward future product category (Open Banking) most customers do not understand, balancing education with unbiased inquiry.',
    methods: ['Multi-phased generative research', 'Stakeholder engagement', 'Adoption factor analysis'],
    insights: [
      {
        finding: 'Ignorance, not resistance',
        detail:
          'Most participants had never heard of Open Banking. Reactions ranged from cautious interest to skepticism once explained.',
      },
    ],
    quotes: [],
    recommendations: 'Position TD as gatekeeper with curated app marketplace, build granular permission controls, invest in education.',
    impact: 'Secured funding for strategic initiative, prepared leaders for regulatory changes, informed data sharing strategy.',
    deliverables: ['Multi-phased research plan', 'User needs analysis', 'Adoption factors report'],
    tags: ['foundational', 'qualitative', 'endtoend'],
  },
]

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS & FILTERS
// ═══════════════════════════════════════════════════════════════════════════

export const getCategorizedStudies = () => {
  return {
    featured: caseStudies.filter((s) => s.category === 'Featured Study'),
    microsoft: caseStudies.filter((s) => s.category === 'Microsoft Product'),
    tdBank: caseStudies.filter((s) => s.category === 'TD Bank Product'),
  }
}

export const getAllStudies = () => caseStudies

export const getStudyById = (id) => caseStudies.find((s) => s.id === id)
