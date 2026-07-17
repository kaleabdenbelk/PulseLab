export interface Project {
  id: string;
  name: string;
  image: string;
  pill: string;
  year: string;
  description: string;
  deliverables: string;
  outcome: string;
  ariaLabel: string;
}

export const projects: Project[] = [
  {
    id: "buna-mahber",
    name: "Buna Mahber",
    image: "/work/buna-mahber-thumb.webp",
    pill: "Brand Implementation \u00b7 Community Marketing \u00b7 Growth",
    year: "2024",
    description: "Ethiopia\u2019s first organized digital coffee community platform \u2014 built from a viral TikTok trend.",
    deliverables: "Brand implementation, platform design, membership system, election experience, community growth.",
    outcome: "150,000+ website visits and 44,000+ community votes in six weeks.",
    ariaLabel: "Open Buna Mahber case study",
  },
  {
    id: "korafit",
    name: "KoraFit",
    image: "/work/korafit-thumb.webp",
    pill: "Brand Strategy \u00b7 Brand Identity \u00b7 Positioning",
    year: "2024",
    description: "A complete brand rebuild that repositioned an Ethiopian fitness app from a generic name to a market-ready AI-powered identity.",
    deliverables: "Brand strategy, full rename, visual identity, brand guidelines, launch marketing toolkit.",
    outcome: "A market-ready brand system built for Ethiopia\u2019s first AI-powered fitness app.",
    ariaLabel: "Open KoraFit case study",
  },
  {
    id: "habbaridoc",
    name: "HabariDOC",
    image: "/work/habbaridoc-thumb.webp",
    pill: "Brand Strategy \u00b7 Brand Identity \u00b7 Marketing Direction",
    year: "2024",
    description: "A healthcare platform given a trust-first brand identity built for Ethiopian users booking a medical appointment digitally for the first time.",
    deliverables: "Brand strategy, brand identity, positioning, marketing direction, brand guidelines.",
    outcome: "A complete trust-first brand system ready for market launch.",
    ariaLabel: "Open HabariDOC case study",
  },
];
