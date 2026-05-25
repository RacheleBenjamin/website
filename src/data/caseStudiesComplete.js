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
    timeline: 'Feb 2025',
    studies: 'Studies 1 & 2',
    title: 'Consent & First Run Experience',
    subtitle: 'How do users understand agentic AI before they agree to use it?',
    theme: '🤖 Agentic AI',
    themeColor: 'purple',
    context:
      'February 2025 — Following the launch of ChatGPT Operator, Microsoft explored how to introduce users to a web-browsing agent. The team needed to understand whether users grasped what they were agreeing to, and whether the first-run experience delivered clear value.',
    methods: ['Dscout diary study', '20 participants', 'Copilot Pro users', 'Minimum Target users'],
    challenge:
      'Users were encountering agentic AI for the first time. The team needed to determine whether the consent flow was meaningful, and whether the agent\'s first-run experience communicated its value effectively for both high-fluency and low-fluency AI users.',
    insights: [
      {
        finding: 'Users clicked \'Allow\' without understanding scope',
        detail:
          'Participants assumed their email, location, and browsing history would be included — but assumed financial information would not be. Their mental model of "browse for you" was weak; they didn\'t know what happened after clicking \'Allow\'.',
      },
      {
        finding: 'Agentic AI added complexity without clear value for simple tasks',
        detail:
          'The small window and extra buttons felt like overkill when simpler solutions (autofill, bookmarks) were already available. Value only emerged for genuinely complex, multi-step tasks.',
      },
    ],
    quotes: [
      {
        text: "It's new, but it's not revolutionary. When it has original thoughts… that's revolutionary.",
        author: 'Dylan, Copilot Pro User',
      },
      {
        text: "It's more of a partner than an assistant to me. I wouldn't use it this way.",
        author: 'Brian, Copilot Pro User',
      },
    ],
    recommendations:
      'Extended consent UI with tooltips clarifying exactly what data is used and what actions are taken. Agentic AI positioned as a partner for navigating complex decisions, not a replacement for simple ones.',
    impact:
      'Designers made rapid iterative changes to the consent flow. Long-term foundational research workstreams were initiated based on findings.',
    deliverables: ['Research memo', 'Full presentation deck to design & product partners'],
  },
  {
    id: 'featured-02',
    category: 'Featured Study',
    company: 'Microsoft AI',
    timeline: 'Apr 2025',
    studies: 'Study 3',
    title: 'Shopping Opportunities for Agentic AI',
    subtitle: 'Where does AI create the most value across the shopping journey?',
    theme: '🛍️ Shopping',
    themeColor: 'blue',
    context:
      'April 2025 — With the holiday season months away, the Shopping workstream needed data-driven direction on where to invest in AI features. I mapped the entire shopping landscape before running a large-scale survey.',
    methods: ['JTBD framework', 'Survey (n=1,533 US participants)', '143 documented shopping activities', '17 Jobs to Be Done identified'],
    challenge:
      'With unlimited possibilities, the team needed to identify which moments in the shopping journey represented the strongest opportunities for AI — balancing user importance, satisfaction gaps, frequency, and openness to AI assistance.',
    insights: [
      {
        finding: 'Top AI opportunities: Compare, Find, Deals, Track, Timing, Budget',
        detail:
          'Mapping 143 activities to 17 Jobs to Be Done, then surveying 1,533 participants, revealed clear signals. Compare and Find ranked highest on both importance and AI openness.',
      },
      {
        finding: 'Users want AI to compare products fully — but only notify them of deals',
        detail:
          'Comparing is tedious and users welcome full automation. But for deals, they want to be informed and stay in control. "Doing anything other than notifying me is not wanted."',
      },
      {
        finding: 'Keep the fun in shopping',
        detail:
          'For discovery and browsing, users want ideas and suggestions — not automation. The search itself is enjoyable and AI should enhance, not replace, that experience.',
      },
    ],
    quotes: [
      {
        text: "I enjoy browsing and discovering new things, especially when I'm shopping for something fun.",
        author: 'User, 23, Texas',
      },
      {
        text: "Searching for the best deal is almost like being on a treasure hunt.",
        author: 'User, 40, Illinois',
      },
      {
        text: "Doing anything other than notifying me is not wanted.",
        author: 'Survey participant',
      },
    ],
    recommendations:
      'Seize AI opportunities in Compare, Find, Deals, Track, Timing, and Budget — with varying levels of automation matched to user intent and desired control.',
    impact:
      'Designers developed concepts to explore top opportunities. An interactive output helped stakeholders prioritize investments across the Shopping roadmap.',
    deliverables: ['Full presentation deck', 'Interactive stakeholder prioritization output'],
  },
  {
    id: 'featured-03',
    category: 'Featured Study',
    company: 'Microsoft AI',
    timeline: 'After Study 3',
    studies: 'Study 4',
    title: 'Continue Journey Concept Testing',
    subtitle: 'What helps users pick up where they left off after shopping in person?',
    theme: '🛍️ Shopping',
    themeColor: 'emerald',
    context:
      'Following Study 3, designers generated 13 concepts. I helped the team prioritize and test 2 — including "Continue Journey," which uses an existing New Tab Page pattern to help users re-enter the shopping flow after in-store browsing.',
    methods: ['UserTesting', '8 Edge users', 'In-person + online shopping scenario', 'Think-aloud protocol'],
    challenge:
      'The team assumed users frequently move from in-store to online to find a better deal. Study 4 tested this assumption and explored whether an AI-powered card on the New Tab Page could meaningfully support that transition.',
    insights: [
      {
        finding: 'The same action signals different Jobs to Be Done',
        detail:
          'Users switch from in-store to online for different reasons: finding a better price, seeking variety, controlling impulses, or researching further. The surface behavior looks identical; the intent varies widely.',
      },
      {
        finding: 'Context shapes what kind of help users need',
        detail:
          '"If it was Nike or Adidas, I might want the best price. But if it\'s a normal shoe, I might be looking for variety." Intent-aware AI would need to infer the job, not just the action.',
      },
    ],
    quotes: [
      {
        text: "If it was Nike or Adidas, I might want the best price. But if it's just a normal shoes, I might be looking for variety.",
        author: 'Matt, Edge user',
      },
      {
        text: "I think it would also be nice to see the customer reviews right alongside the deal.",
        author: 'Andrea, Edge user',
      },
    ],
    recommendations:
      'Build for different intents — the same action can signal deal-hunting, item discovery, or inspiration-seeking. AI experiences should be tailored to the underlying job, not just the trigger.',
    impact:
      'The high-level concept advanced to the next stage in the product development cycle.',
    deliverables: ['Full presentation deck'],
  },
  {
    id: 'featured-04',
    category: 'Featured Study',
    company: 'Microsoft AI',
    timeline: 'Oct 2025',
    studies: 'Study 5',
    title: 'Browser for Work: JTBD & Agentic AI',
    subtitle: 'Who are commercial browser users, and where are the greatest AI opportunities?',
    theme: '🧑‍💻 Browser for Work',
    themeColor: 'amber',
    context:
      'October 2025 — Less than a month before the Ignite conference, the Browser for Work team needed to define who their users are, what they\'re trying to do, and where agentic AI creates the most value in professional contexts.',
    methods: ['Secondary research', '1:1 interviews', '16 participants', '75-min FigJam sessions', 'JTBD framework'],
    challenge:
      'Browser for Work is positioned as an AI-first browser for enterprise users. With an Ignite deadline approaching, the team needed rapid but rigorous insights about commercial browser users spanning diverse industries, roles, and motivations.',
    insights: [
      {
        finding: '10 core Jobs to Be Done define the commercial browser user',
        detail:
          'Research, Create, Collaborate, Learn, Plan/coordinate, Get answers, Interpret, Inform, Influence, and Stay up to date. Top AI opportunities cluster around Research, Create, Collaborate, Get answers, Interpret, and Influence.',
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
        text: "I worry that if an AI managed communication, people would be less likely to respond… or it would be considered rude.",
        author: 'Julia, Product Operations Manager',
      },
      {
        text: "They didn't call to talk to AI, they called to talk to a human. So, you know, just be more human.",
        author: 'Aurora, Crisis Worker',
      },
      {
        text: "When someone moves from a place of ignorance to understanding, that's what I do it for.",
        author: 'Elise, Return to Work Specialist',
      },
    ],
    recommendations:
      'Give users full control over communication and connection, while automation handles background tasks. Design a New Tab Page that helps users stay connected to what motivates them at work.',
    impact:
      'Scenarios showcased at Ignite 2026. Findings laid the foundation for ideation, concept creation, and a Vibe Code Sprint. Contribution to Figma Make gallery wall.',
    deliverables: ['Full presentation deck', 'Sprint planning', 'FigJam gallery wall', 'Figma Make contribution'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MICROSOFT AI — Product Portfolio (Aug 2024 - Present)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'msft-01',
    category: 'Microsoft Product',
    company: 'Microsoft',
    timeline: 'Aug 2024 - Present',
    title: 'Enterprise Edge AI Strategy',
    subtitle: 'Shaping the AI-first browser for 10M+ enterprise users',
    theme: '🌐',
    themeColor: '#0078D4',
    context:
      'As sole UX Researcher for Enterprise Microsoft Edge (10+ million users), I led generative product research to inform vision and strategy for launching an AI-first browser in enterprise markets.',
    challenge:
      'How do enterprise users want AI integrated into their browsing workflow? Balance innovation with security, compliance, and trust requirements.',
    methods: ['Generative research', 'Product strategy', 'Stakeholder workshops'],
    insights: [
      {
        finding: 'Enterprise trust threshold differs from consumer',
        detail:
          'Enterprise users demand explicit data governance and compliance transparency before adopting AI features.',
      },
    ],
    quotes: [],
    recommendations: 'Transparent data governance UI, assistive AI layers, cross-device context persistence.',
    impact: 'Insights shaped vision and strategy for Enterprise Edge AI-first browser launch, informing roadmap for 10M+ global users.',
    deliverables: ['Strategic vision report', 'Competitive analysis', 'Product roadmap recommendations'],
  },
  {
    id: 'msft-02',
    category: 'Microsoft Product',
    company: 'Microsoft',
    timeline: 'Aug 2024 - Present',
    title: 'Gen AI Shopping Automation',
    subtitle: 'Large-scale opportunity analysis for AI-powered shopping',
    theme: '🛍️',
    themeColor: '#0078D4',
    context:
      'Led large-scale Opportunity Analysis to identify where Gen AI could enhance and automate online shopping tasks for Microsoft's Shopping product team.',
    challenge:
      'What shopping tasks are users willing to delegate to AI? Where do they welcome automation vs. demand manual control?',
    methods: ['Opportunity analysis', 'Gen AI use case exploration', 'JTBD framework'],
    insights: [
      {
        finding: 'Trust threshold for agentic shopping',
        detail:
          'Users comfortable delegating "fetch" tasks but hesitate when AI takes action without approval.',
      },
    ],
    quotes: [],
    recommendations: 'Design AI as advisors not agents, pilot automated replenishment, invest in transparency UI.',
    impact: 'Uncovered key areas for Gen AI enhancement, driving ideation and concept development for Shopping team.',
    deliverables: ['Opportunity Analysis report', 'JTBD map', 'Opportunity matrix dashboard'],
  },
  {
    id: 'msft-03',
    category: 'Microsoft Product',
    company: 'Microsoft',
    timeline: 'Aug 2024 - Present',
    title: 'Productivity Tab Management',
    subtitle: 'Research roadmap for efficiency & multi-tab navigation',
    theme: '📑',
    themeColor: '#0078D4',
    context:
      'Collaborated cross-functionally with Productivity team to lead comprehensive research roadmap from generative to evaluative phases for tab management tool.',
    challenge:
      'How do users navigate dozens of open tabs? What are core efficiency and productivity needs?',
    methods: ['Generative studies', 'Evaluative studies', 'Mixed-methods research'],
    insights: [
      {
        finding: 'Tabs as context, not tasks',
        detail:
          'Users use tabs to hold contexts (work project, vacation planning). Closing a tab feels like losing that mental thread.',
      },
    ],
    quotes: [],
    recommendations: 'Design around contexts not tasks, introduce tab parking, preserve spatial layout.',
    impact: 'Insights shaped product strategy and informed year-long roadmap for Productivity team.',
    deliverables: ['Research roadmap', 'Core needs analysis', 'Navigation behavior insights'],
  },
  {
    id: 'msft-04',
    category: 'Microsoft Product',
    company: 'Microsoft',
    timeline: 'Aug 2024 - Present',
    title: 'Copilot Rapid Concept De-risking',
    subtitle: 'Fast evaluative research in competitive AI landscape',
    theme: '🚀',
    themeColor: '#0078D4',
    context:
      'Led rapid evaluative research to de-risk high-priority AI browser concepts in fast-moving, highly competitive landscape.',
    challenge:
      'How do we quickly validate AI concepts while maintaining rigor to empower stakeholder decision-making?',
    methods: ['Rapid evaluative research', 'Concept testing', 'Risk assessment'],
    insights: [
      {
        finding: 'Speed requires smart scoping',
        detail:
          'Rapid research succeeds when focused on specific decision points rather than comprehensive exploration.',
      },
    ],
    quotes: [],
    recommendations: 'Maintain rapid research playbook, build competitive intelligence, align stakeholders upfront.',
    impact: 'De-risked high-priority concepts, enabled fast decision-making in competitive AI landscape.',
    deliverables: ['Rapid insights reports', 'Risk assessments', 'Stakeholder recommendations'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TD BANK — Product Portfolio (Aug 2022 - Jul 2024)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'td-01',
    category: 'TD Bank Product',
    company: 'TD Bank',
    timeline: 'Aug 2022 - Jul 2024',
    title: 'Estate Settlement Intervention Study',
    subtitle: 'Large-scale research improving bereavement journey',
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
    impact: 'Improved estate settlement journey, produced valuable insights, demonstrated ROI of research-driven interventions.',
    deliverables: ['Intervention study design', 'Research methodology framework', 'Insights report'],
  },
  {
    id: 'td-02',
    category: 'TD Bank Product',
    company: 'TD Bank',
    timeline: 'Aug 2022 - Jul 2024',
    title: 'Safe Investing Vehicles (GICs & ETFs)',
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
  },
  {
    id: 'td-03',
    category: 'TD Bank Product',
    company: 'TD Bank',
    timeline: 'Aug 2022 - Jul 2024',
    title: 'Open Banking Research Program',
    subtitle: 'Multi-phased strategic research for regulatory transition',
    theme: '🔐',
    themeColor: '#00A758',
    context:
      'Secured funding for and executed multi-phased generative research program preparing bank leaders for Open Banking regulatory transition.',
    challenge:
      'Explore user attitudes toward future product category (Open Banking) most customers don't understand, balancing education with unbiased inquiry.',
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
