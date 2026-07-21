export interface CaseStudy {
  slug: string;
  idx: string;
  year: string;
  live: string;
  apps?: { ios?: string; android?: string };
  name: string;
  nameHtml: string;
  industry: string;
  services: string;
  timeline: string;
  role: string;
  kicker: string;
  intro: string;
  challenge: { h: string; p: string; stat: string; label: string };
  solution: { h: string; p: string; stat: string; label: string };
  outcome: { h: string; p: string; stat: string; label: string };
  ai: {
    head: string;
    intro: string;
    cards: { h: string; p: string }[];
  };
  stats: { num: string; label: string; p: string }[];
  quote: { q: string; author: string; role: string; avatar: string };
  images: { hero: string; wide: string; left: string; right: string };
  thumb: string;
}

export const CASES: Record<string, CaseStudy> = {
  "buna-mahber": {
    slug: "buna-mahber",
    idx: "01",
    year: "2026",
    live: "https://bunamahber.com",
    name: "Buna Mahber",
    nameHtml: "Buna <em>Mahber</em>",
    industry: "Culture & Community",
    services: "Brand Implementation, Platform Design, Community Marketing, Front-End Development",
    timeline: "1.5 months",
    role: "Solo \u2014 Strategy, Brand, Design, Development",
    kicker: "A viral TikTok moment turned into Ethiopia\u2019s first organized digital coffee community.",
    intro:
      "Buna Mahber started as a humorous TikTok trend celebrating Ethiopian coffee culture and went viral almost immediately. Behind the momentum there was nothing \u2014 no brand, no digital home, no system for organizing the thousands of people who wanted to be part of it. We saw the opportunity independently, built the entire platform before being approached, then reached out to the movement\u2019s initiator who recognized what it could become and began an <em>ongoing collaboration.</em>",
    challenge: {
      h: "A fast-growing movement with <em>no digital home.</em>",
      p: "A community movement with no brand identity, no digital infrastructure, and no organized way to convert public attention into membership, engagement, or structured community activity. Without a platform, the momentum had nowhere to go.",
      stat: "0",
      label: "Digital presence before we stepped in",
    },
    solution: {
      h: "A complete brand and platform <em>built from scratch.</em>",
      p: "Built the complete brand implementation and digital platform independently \u2014 membership system, community election experience, voting platform, candidate pages, sponsor integration, and full front-end development. The brand strategy treated Buna Mahber not as a TikTok joke but as a serious cultural institution deserving a credible, organized digital identity.",
      stat: "1.5",
      label: "Months from concept to launch",
    },
    outcome: {
      h: "150,000 visits. 44,000 votes. <em>A real community.</em>",
      p: "The movement gained its first credible digital brand presence and a scalable infrastructure for future growth. Direct business inquiry received from another organization after seeing the platform. Recognition from major Ethiopian content creators.",
      stat: "150K+",
      label: "Website visits during campaign",
    },
    ai: {
      head: "Ethiopian coffee culture as <em>strategic foundation.</em>",
      intro: "Ethiopian coffee is not just a product \u2014 it is a ceremony, a social ritual, and a source of national pride. The brand strategy for Buna Mahber had to honor that cultural weight while keeping the humor and lightness that made the movement go viral in the first place.",
      cards: [
        { h: "Cultural tone over generic design", p: "The brand strategy balanced reverence for Ethiopian coffee culture with the playful energy that made Buna Mahber go viral \u2014 serious enough to be credible, light enough to stay authentic." },
        { h: "Community conversion strategy", p: "Every brand and marketing decision was made to convert casual TikTok followers into committed community members with a reason to register, vote, and return." },
        { h: "Election as marketing moment", p: "The community election was positioned as a cultural event, not just a feature. The voting experience drove the 44,000+ votes that became the platform\u2019s biggest marketing proof point." },
        { h: "Sponsor integration as trust signal", p: "Integrating sponsor visibility into the platform gave the movement commercial credibility and opened pathways for sustained community funding." },
      ],
    },
    stats: [
      { num: "150<em>K+</em>", label: "Website visits", p: "Organic traffic driven entirely through community engagement and content creator recognition during the campaign period." },
      { num: "44<em>K+</em>", label: "Community votes", p: "Votes submitted through the election platform \u2014 the clearest proof of genuine community engagement and platform trust." },
      { num: "1.5", label: "Months to launch", p: "From blank canvas to live platform \u2014 designed, built, and deployed in six weeks with continuous iteration after launch." },
      { num: "0\u2192\u221e", label: "Digital presence", p: "From zero digital infrastructure to a fully operational community platform with membership, elections, sponsors, and ongoing feature development." },
    ],
    quote: {
      q: "What Amos built for Buna Mahber wasn\u2019t just a website \u2014 it was the foundation that turned a viral moment into a <em>real community.</em> The platform handled thousands of members, tens of thousands of votes, and gave us a digital home we didn\u2019t know we needed until we saw it. The quality and speed of execution was unlike anything I expected.",
      author: "\u127b\u1209",
      role: "Buna Mahber \u00b7 \u1261\u1293 \u130e\u130a\u12ce\u127d \u121b\u200b\u1215\u1260\u122d",
      avatar: "",
    },
    images: {
      hero: "/case/1.svg",
      wide: "/case/1.svg",
      left: "/case/1.svg",
      right: "/case/1.svg",
    },
    thumb: "/case/1.svg",
  },

  "korafit": {
    slug: "korafit",
    idx: "02",
    year: "2026",
    live: "https://korasports.app",
    name: "KoraFit",
    nameHtml: "Kora<em>Fit</em>",
    industry: "Health & Fitness Technology",
    services: "Brand Strategy, Brand Identity, Positioning, Launch Marketing",
    timeline: "Ongoing",
    role: "Brand Strategy Lead & Identity Designer",
    kicker: "A complete brand rebuild for Ethiopia\u2019s first AI-powered fitness app.",
    intro:
      "KoraFit \u2014 formerly FlexET \u2014 is an AI-powered fitness application built for the Ethiopian market. The product was technically strong but the brand was working against it. The name didn\u2019t communicate the product\u2019s intelligence or ambition, the visual identity was inconsistent, and there was no clear positioning strategy for entering a market where fitness technology is still a new concept. The entire brand needed to be <em>rebuilt from the ground up</em> before any marketing could work.",
    challenge: {
      h: "A capable product with a brand <em>that undersold it.</em>",
      p: "The original name FlexET was generic and forgettable. There was no positioning strategy, no clear audience definition, and no visual identity system strong enough to build a marketing campaign around. Every marketing effort was being undermined by the brand before it even reached the audience.",
      stat: "0",
      label: "Coherent brand assets before the rebuild",
    },
    solution: {
      h: "Full brand strategy from <em>positioning to identity.</em>",
      p: "Starting with a complete rename from FlexET to KoraFit. Built the brand positioning around AI-powered fitness for the Ethiopian market, defined the target audience and their specific motivations, established a brand voice that felt motivating and modern. Delivered a complete visual identity system and a full launch marketing toolkit including social media strategy, content calendar, influencer outreach framework, and Meta ad creative direction.",
      stat: "1",
      label: "Unified brand system delivered",
    },
    outcome: {
      h: "A market-ready brand built <em>to launch.</em>",
      p: "A market-ready brand system built for launch. Clear AI-powered fitness positioning that differentiates KoraFit from generic workout apps. Complete launch marketing toolkit ready for immediate execution. A brand identity strong enough to anchor a full paid and organic marketing campaign.",
      stat: "100%",
      label: "Brand rebuilt from scratch",
    },
    ai: {
      head: "Ethiopian fitness culture as <em>brand foundation.</em>",
      intro: "Ethiopia\u2019s fitness culture is growing rapidly but digital fitness products are still building trust with local audiences. The brand strategy had to account for two realities simultaneously \u2014 users who are fitness-motivated and tech-comfortable, and users who are fitness-curious but skeptical of app-based coaching.",
      cards: [
        { h: "Name rooted in local identity", p: "Kora references the traditional Ethiopian running culture \u2014 grounding the brand in local identity while signaling global ambition. The rename alone shifted how the product was perceived before anyone opened the app." },
        { h: "Positioning for two audiences at once", p: "KoraFit\u2019s positioning was built to speak to both fitness-motivated tech users and fitness-curious skeptics without diluting the message for either \u2014 a balance most fitness brands get wrong." },
        { h: "Launch toolkit before launch", p: "Built the complete marketing toolkit before the app launched so the team could execute immediately \u2014 content calendar, influencer outreach scripts, Meta ad creative, and social media strategy all ready on day one." },
        { h: "Brand as marketing infrastructure", p: "Every brand decision was made with marketing execution in mind. The color system, typography, and visual language were chosen specifically because they perform well in social media ad creatives and content formats." },
      ],
    },
    stats: [
      { num: "1", label: "Complete brand system", p: "Full visual identity, brand strategy, voice guidelines, and marketing toolkit delivered as one integrated system." },
      { num: "FlexET<em>\u2192</em>KoraFit", label: "Brand rename", p: "A strategic rename that repositioned the product from a generic fitness app name to a culturally rooted, market-ready identity." },
      { num: "4<em>+</em>", label: "Marketing assets delivered", p: "Social media strategy, content calendar, influencer outreach framework, and Meta ad creative direction \u2014 ready for immediate execution." },
      { num: "0", label: "Templates used", p: "Every brand element was designed specifically for the Ethiopian fitness market \u2014 no recycled templates, no borrowed frameworks." },
    ],
    quote: {
      q: "A client note for KoraFit is on the way \u2014 <em>references are available on request.</em>",
      author: "Reference on request",
      role: "KoraFit \u00b7 AI Fitness App",
      avatar: "",
    },
    images: {
      hero: "/case/2.png",
      wide: "/case/2.png",
      left: "/case/2.png",
      right: "/case/2.png",
    },
    thumb: "/case/2.png",
  },

  "habbaridoc": {
    slug: "habbaridoc",
    idx: "03",
    year: "2025",
    live: "https://habaridoc.com/",
    name: "HabariDOC",
    nameHtml: "Habari<em>DOC</em>",
    industry: "Healthcare Technology",
    services: "Brand Strategy, Brand Identity, Positioning, Marketing Direction",
    timeline: "4 weeks",
    role: "Lead Brand Strategist & Identity Designer",
    kicker: "A trust-first brand for Ethiopian digital healthcare.",
    intro:
      "HabariDOC is a digital platform simplifying medical appointment booking and doctor-patient consultation in Ethiopia. Healthcare is the highest-trust category in any market. In Ethiopia, where digital healthcare adoption is at an early stage, the brand had to overcome an additional layer of skepticism \u2014 convincing users that booking a doctor online is <em>safe, legitimate, and worth trying.</em>",
    challenge: {
      h: "Trust is the product. <em>The brand had to earn it.</em>",
      p: "Healthcare platforms require an unusually high standard of brand trust. A weak or unconvincing brand in this space doesn\u2019t just lose customers, it loses their confidence in digital healthcare entirely. Generic or templated branding would immediately undermine that effort.",
      stat: "1st",
      label: "Time most users would book a doctor digitally",
    },
    solution: {
      h: "A brand built entirely around <em>trust as strategy.</em>",
      p: "Built a complete brand strategy and identity system centered entirely around trust as the core brand value. Every visual and verbal brand decision \u2014 color psychology, typography selection, tone of voice, messaging hierarchy \u2014 was made to signal safety, professionalism, and Ethiopian authenticity simultaneously.",
      stat: "4",
      label: "Weeks from brief to complete brand system",
    },
    outcome: {
      h: "A brand that earns trust <em>before a word is read.</em>",
      p: "A complete trust-first brand system ready for market launch. Clear positioning targeting first-time digital healthcare users in Ethiopia. Brand identity and voice guidelines that give the product team a consistent marketing foundation to build every campaign on.",
      stat: "100%",
      label: "Brand built from scratch in 4 weeks",
    },
    ai: {
      head: "Ethiopian healthcare trust dynamics as <em>design brief.</em>",
      intro: "Digital healthcare trust in Ethiopia is built differently than in more digitally mature markets. Credentials matter. Community proof matters. Institutional signals matter. Every brand and marketing decision for HabariDOC was shaped by these specific trust dynamics.",
      cards: [
        { h: "Credentials as visual hierarchy", p: "Doctor qualifications, experience, and credentials were positioned as the primary visual element in the brand system \u2014 because Ethiopian users need to see proof before they trust a digital healthcare recommendation." },
        { h: "Color psychology for healthcare trust", p: "Every color in the HabariDOC brand system was chosen based on its trust signal in the Ethiopian context \u2014 not imported from international healthcare branding playbooks built for other markets." },
        { h: "Institutional signal design", p: "The brand was designed to feel endorsed by the healthcare system, not operating outside it. Visual language, typography, and tone all signal professional legitimacy rather than startup disruption." },
        { h: "First-time user messaging", p: "Every piece of brand copy was written specifically for users who have never booked a medical appointment online before \u2014 reducing hesitation and building confidence at every touchpoint." },
      ],
    },
    stats: [
      { num: "4", label: "Weeks to complete brand", p: "Full brand strategy, visual identity, voice guidelines, and marketing direction delivered in four weeks from initial brief." },
      { num: "1", label: "Core brand value", p: "Trust. Every visual, verbal, and strategic brand decision was filtered through a single question: does this earn trust from a first-time digital healthcare user?" },
      { num: "100<em>%</em>", label: "Built for Ethiopian market", p: "No international healthcare branding templates. Every decision shaped by the specific trust dynamics of the Ethiopian digital healthcare context." },
      { num: "0", label: "Revisions on final direction", p: "The brand strategy and identity landed cleanly on first presentation \u2014 because the research and positioning work was done before any design began." },
    ],
    quote: {
      q: "A client note for HabariDOC is on the way \u2014 <em>references are available on request.</em>",
      author: "Reference on request",
      role: "HabariDOC \u00b7 Healthcare Platform",
      avatar: "",
    },
    images: {
      hero: "/case/3.svg",
      wide: "/case/3.svg",
      left: "/case/3.svg",
      right: "/case/3.svg",
    },
    thumb: "/case/3.svg",
  },
};

export const CASE_ORDER = ["buna-mahber", "korafit", "habbaridoc"];
