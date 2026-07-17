// ── Hero ──
export const HERO = {
  titleLeft: "Branding",
  subtitleLeft: "We make brands that work in the market.",
  titleRight: "Marketing",
  subtitleRight: "And marketing that works for the brand.",
} as const;

// ── Eyebrows (section headers) ──
export const EYEBROWS = {
  works: { num: "01", label: "Selected projects" },
  services: { num: "02", label: "Services", end: "Brand · Launch · Performance · Social" },
  process: { num: "03", label: "Process", end: "4 weeks · 4 phases" },
  why: { num: "04", label: "Why Pulse Digital", end: "Six reasons" },
  testimonials: { num: "05", label: "Testimonials", end: "From recent projects" },
  contact: { num: "06", label: "Contact", end: "We reply within 24h" },
  faq: { num: "07", label: "FAQ", end: "We\u2019ve got answers" },
} as const;

// ── Process ──
export const PROCESS_END = "Every project is built with your market in mind \u2014 not adapted from somewhere else.";

// ── Benefits Stats ──
export const BENEFITS_STATS = [
  { value: "150K+", label: "Website visits driven" },
  { value: "44K+", label: "Community votes on one platform" },
  { value: "4", label: "Focused services" },
  { value: "24h", label: "Reply guarantee" },
] as const;

// ── FAQ CTA ──
export const FAQ_CTA = {
  prompt: "Have a different question?",
  promptSuffix: "Ask us directly.",
  button: "Start a conversation",
} as const;

// ── Contact ──
export const CONTACT = {
  heading: "Let\u2019s build\n<em>something</em>\ntogether.",
  form: {
    nameLabel: "Your name",
    namePlaceholder: "Abebe Kebede",
    emailLabel: "Email",
    emailPlaceholder: "abebe@company.com",
    companyLabel: "Company or project name",
    companyPlaceholder: "Your startup",
    budgetLabel: "Project budget",
    budgetPlaceholder: "30,000 birr",
    serviceLabel: "Service interested in",
    servicePlaceholder: "Brand Identity, Performance Marketing\u2026",
    timelineLabel: "How soon do you want to start?",
    timelinePlaceholder: "Immediately / In a few weeks / Just exploring",
    messageLabel: "Tell us about your project",
    messagePlaceholder: "The shorter the better. We\u2019ll ask the rest on a call.",
    submitText: "Send brief",
    submitArrow: "\u2192",
    sendingText: "Sending\u2026",
    successText: "Sent \u2014 talk soon \u2713",
    successStatus: "Thanks \u2014 your brief is on its way. We reply within 24h.",
    errorStatus: "Something went wrong. Please email admin@pulsedigital.et.",
    subject: "New project brief \u2014 Pulse Digital website",
    honeypotLabel: "Leave this empty:",
  },
} as const;

// ── Case Study Overlay ──
export const CASE_STUDY = {
  backButton: "Back",
  metaLabels: {
    industry: "Industry",
    services: "Services",
    year: "Year",
    timeline: "Timeline",
    role: "Role",
  },
  storeLabels: {
    downloadOn: "Download on the",
    appStore: "App Store",
    getItOn: "Get it on",
    googlePlay: "Google Play",
  },
  viewSite: "View site",
  sectionTitles: {
    challengeSolutionOutcome: "Challenge \u00b7 Solution \u00b7 Outcome",
    aiProcess: "Ethiopian Market Insight",
    relatedWork: "Related work",
  },
  pressEscHint: "Press Esc to close",
  brandFooter: "Pulse Digital \u00b7 ",
} as const;

// ── Projects ──
export const PROJECTS = {
  viewProject: "View project",
  deliverables: "Deliverables",
  outcome: "Outcome",
} as const;

// ── Footer ──
export const FOOTER = {
  status: "Open for projects \u00b7 2026",
  headline: "Good work starts\nwith a clear brief",
  headlinePeriod: ".",
  subtext: "Tell us what you\u2019re building, launching, or trying to grow. We\u2019ll help shape the right direction from day one.",
  cta: "Start a project",
  email: "admin@pulsedigital.et",
  navLinks: [
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Benefits", href: "#why" },
    { label: "Testimonials", href: "#words" },
    { label: "Contact", href: "#contact" },
    { label: "FAQs", href: "#faq" },
  ],
  copyright: "\u00a9 2026 \u00b7 All Rights Reserved by",
  studioName: "Pulse Digital",
  location: "Addis Ababa, Ethiopia",
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
} as const;

// ── Curtain ──
export const CURTAIN = {
  studioName: "Pulse Digital",
  loading: "Loading",
  location: "Addis Ababa \u00b7 Ethiopia",
} as const;

// ── Mobile Menu ──
export const MOBILE_MENU = {
  openLabel: "Menu",
  closeLabel: "Close",
  status: "Open for projects \u00b7 2026",
  email: "admin@pulsedigital.et",
} as const;
