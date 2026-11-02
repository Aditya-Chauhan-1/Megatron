const roleLayout = {
  left: {
    role: 'left',
    rotation: -12,
    translateZ: -80,
    zIndex: 10,
    parallax: 0.35,
  },
  center: {
    role: 'center',
    rotation: 0,
    translateZ: 140,
    zIndex: 30,
    parallax: 0.65,
  },
  right: {
    role: 'right',
    rotation: 12,
    translateZ: -80,
    zIndex: 10,
    parallax: 0.35,
  },
}

export const slideCards = [
  {
    id: 'ai-edge-eloquent',
    title: 'AI Edge Eloquent',
    description:
      'An AI writing tool that transforms raw, unpolished speech into well crafted, easy to understand text.',
    visual: 'chat',
    link: 'https://labs.google/',
    width: 380,
    height: 520,
    float: { y: 16, x: 10, rot: 2.5, duration: 3.4 },
  },
  {
    id: 'dreambeans',
    title: 'dreambeans',
    description:
      'Dreambeans provides personalized collections of stories each day covering the things that matter most to you.',
    visual: 'image',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    badge: 'EXPERIMENT',
    link: 'https://labs.google/',
    width: 380,
    height: 520,
    float: { y: 12, x: 8, rot: 1.2, duration: 3.8 },
  },
  {
    id: 'literature-insights',
    title: 'Literature Insights',
    description:
      'Literature tool to find papers, structure data tables, and create artifacts like reports, slide decks, and more.',
    visual: 'tags',
    link: 'https://labs.google/',
    width: 380,
    height: 520,
    float: { y: 18, x: 12, rot: 2.5, duration: 4.1 },
  },
  {
    id: 'hypothesis-generation',
    title: 'Hypothesis Generation',
    description:
      'Multi-agent research tool simulating the scientific method to identify knowledge gaps and generate novel hypotheses.',
    visual: 'image',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    link: 'https://labs.google/',
    width: 380,
    height: 520,
    float: { y: 14, x: 9, rot: 2, duration: 3.6 },
  },
  {
    id: 'stitch',
    title: 'Stitch',
    description:
      'An AI design canvas that transforms natural language into high-fidelity UI you can iterate and collaborate on.',
    visual: 'image',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    link: 'https://stitch.withgoogle.com/',
    width: 380,
    height: 520,
    float: { y: 15, x: 11, rot: 2.2, duration: 3.5 },
  },
  {
    id: 'pomelli',
    title: 'Pomelli',
    description:
      'An AI-powered marketing tool designed to build scalable, on-brand content to help you connect with your audience faster.',
    visual: 'image',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    link: 'https://labs.google/',
    width: 380,
    height: 520,
    float: { y: 13, x: 10, rot: 1.8, duration: 4 },
  },
]

export function getVisibleCards(activeIndex) {
  const n = slideCards.length
  const roles = ['left', 'center', 'right']

  return roles.map((roleKey, i) => {
    const card = slideCards[(activeIndex + i - 1 + n) % n]
    return {
      ...card,
      ...roleLayout[roleKey],
    }
  })
}

/** @deprecated use slideCards */
export const compositionCards = slideCards
