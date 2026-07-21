export const phases = [
  {
    step: "01",
    title: "Discovery",
    desc: "We understand your brand, market, audience, and goals before touching any design or strategy.",
    week: "Week 01",
    deliverables: ["Brief", "Audit", "Market Analysis"],
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We build the positioning, messaging framework, and creative direction everything else is built on.",
    week: "Week 02",
    deliverables: ["Positioning", "Messaging", "Creative Direction"],
  },
  {
    step: "03",
    title: "Execution",
    desc: "We design, build, and launch with precision and attention to every detail.",
    week: "Week 03\u201304",
    deliverables: ["Design", "Build", "Campaign Setup"],
  },
  {
    step: "04",
    title: "Handoff",
    desc: "We deliver everything you need and make sure you know how to use it.",
    week: "Week 04",
    deliverables: ["Files", "Guidelines", "Assets"],
  },
  {
    step: "05",
    title: "Ongoing Growth",
    desc: "The brand is built. Now let's grow it. Ongoing marketing available.",
    week: "Monthly",
    deliverables: ["Monthly Ads", "Social Management",  "Retargeting"], //"Reporting",
    optional: true,
  },
] as const;
