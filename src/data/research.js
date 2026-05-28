export const academicProfile = {
  url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
  affiliation: 'University of British Columbia, Department of Psychology',
  email: 'Verified at psych.ubc.ca',
  interests: [
    'Social Psychology',
    'Political Psychology',
    'Happiness',
    'Uncertainty',
    'Existential Uncertainty',
  ],
}

export const researchThemes = [
  {
    title: 'Defining the Uncanny',
    description:
      'Constructing a scale to measure uncanny feelings.',
    color: 'purple',
  },
  {
    title: 'Meaning Maintenance & Uncertainty',
    description:
      'How people respond when their sense of meaning is threatened.',
    color: 'indigo',
  },
  {
    title: 'Terror Management Theory',
    description:
      'An analysis of the Terror Management Theory literature, evaluating evidential value and addressing publication bias.',
    color: 'rose',
  },
  {
    title: 'Democracy & Political Attitudes',
    description:
      "Examining who supports democratic principles, and how that support shifts depending on which party holds power.",
    color: 'amber',
  },
]

// Verified from Google Scholar (J8PNDCwAAAAJ) — sorted by recency
export const publications = [
  {
    title: 'Managing the terror of publication bias: A systematic review of the mortality salience hypothesis',
    authors: 'Chen, L., Benjamin, R., Guo, Y., Lai, A., & Heine, S. J.',
    venue: 'Journal of Personality and Social Psychology',
    year: 2025,
    citations: 12,
    theme: 'tmt',
    summary:
      "A systematic review evaluating the empirical foundation of the mortality salience hypothesis — extending earlier p-curve work into a comprehensive audit of TMT's most-cited prediction.",
    url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
    tags: ['Meta-science', 'TMT', 'Systematic review'],
  },
  {
    title: 'An ecology of meaning: An integrative framework for understanding human motivations',
    authors: 'Heine, S. J., Folk, D. P., Guan, K. W., Benjamin, R., Bahng, J. M., & Proulx, T.',
    venue: 'Advances in Motivation Science',
    year: 2024,
    citations: 5,
    theme: 'meaning',
    summary:
      'A theoretical chapter integrating diverse motivational drivers under a unified ecological model of meaning, contextualizing how people seek and maintain coherent worldviews.',
    url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
    tags: ['Theory', 'Motivation', 'Meaning Maintenance'],
  },
  {
    title: 'From Freud to android: Constructing a scale of uncanny feelings',
    authors: 'Benjamin, R., & Heine, S. J.',
    venue: 'Journal of Personality Assessment',
    year: 2023,
    citations: 16,
    theme: 'uncanny',
    summary:
      'Developed and validated a psychometric scale measuring uncanny feelings across multiple studies, with applications to real-world contexts including the COVID-19 pandemic and human-AI interaction.',
    url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
    tags: ['Scale development', 'Uncanny Valley', 'Psychometrics'],
  },
  {
    title: "Who would mourn democracy? Liberals might, but it depends on who's in charge",
    authors: 'Benjamin, R., Laurin, K., & Chiang, M.',
    venue: 'Journal of Personality and Social Psychology',
    year: 2022,
    citations: 14,
    theme: 'democracy',
    summary:
      'Despite widespread support for democratic principles, democratic norms have eroded globally. This work shows whose grief over democratic backsliding depends on which party holds power.',
    url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
    tags: ['Political psychology', 'Democracy', 'Identity'],
  },
  {
    title: "Democracy's (occasional) supporters",
    authors: 'Benjamin, R.',
    venue: 'Doctoral Dissertation, University of British Columbia',
    year: 2022,
    theme: 'democracy',
    summary:
      'Doctoral dissertation examining the conditional nature of public support for democratic norms across political identity and contextual factors.',
    url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
    tags: ['Dissertation', 'Democracy', 'Political identity'],
  },
  {
    title: 'Searching for answers in an uncertain world: Meaning threats lead to increased working memory capacity',
    authors: 'Randles, D., Benjamin, R., Martens, J. P., & Heine, S. J.',
    venue: 'PLOS ONE',
    year: 2018,
    citations: 25,
    theme: 'meaning',
    summary:
      'Tested the Meaning Maintenance Model prediction that uncertainty drives a search for meaning — finding meaning threats increase working memory capacity, using Bayesian regression analyses across multiple studies.',
    url: 'https://scholar.google.com/citations?user=J8PNDCwAAAAJ&hl=en',
    tags: ['Meaning Maintenance', 'Working memory', 'Bayesian methods'],
  },
]


export const press = [
  {
    title: "Why Liberals (Sometimes) Mourn Democracy's Decline",
    outlet: 'Character & Context — SPSP',
    year: 2022,
    url: 'https://spsp.org/news/character-and-context-blog/benjamin-laurin-democracy-decline-liberal-concern',
    description: 'On research showing that concern over democratic backsliding is conditional — liberals mourn it most, but only when the other party holds power.',
  },
  {
    title: 'Rachele Benjamin on Measuring Uncanny Experiences',
    outlet: 'ISSEP Spotlights',
    year: 2021,
    url: 'https://www.issep.org/spotlights/benjamin',
    description: '2020 Innovation in Existential Psychology Research Award winner discusses constructing a psychometric scale of uncanny feelings and its applications.',
  },
  {
    title: 'Uncertainty, Spooky Robots, and the Uncanny Valley',
    outlet: 'Brain Buzz Podcast — Episode 12',
    year: 2018,
    url: 'https://brainbuzzpod.com/episodes/2018/6/28/uncertainty-spooky-robots-and-the-uncanny-valley-with-rachele-benjamin',
    description: 'What is the uncanny valley and why do humanlike robots feel so unsettling? A conversation on uncertainty, meaning, and what makes things spooky.',
  },
]

// Aggregate citation count for display in hero
export const totalCitations = publications.reduce(
  (sum, p) => sum + (p.citations || 0),
  0,
)
