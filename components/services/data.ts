export const services = [
  {
    id: "01",
    title: "Brand Identity & <em>Strategy</em>",
    desc: "Your brand is the first thing your market judges you by. We make sure that judgment works in your favor.",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Voice", "Guidelines"],
    image: "/services/01.png",
  },
  {
    id: "02",
    title: "Launch <em>Strategy</em>",
    desc: "Most products don\u2019t fail because they\u2019re bad. They fail because they entered the market wrong.",
    tags: ["Go-to-Market", "Channel Planning", "Launch Campaign", "Pre-Launch", "Post-Launch"],
    image: "/services/02.png",
  },
  {
    id: "03",
    title: "Performance <em>Marketing</em>",
    desc: "We don\u2019t just run ads. We build campaigns that track every birr spent and tell you exactly what it delivered.",
    tags: ["Meta Ads", "Google Ads", "Audience Research", "A/B Testing", "Retargeting", "Analytics"],
    image: "/services/03.png",
  },
  {
    id: "04",
    title: "Social Media Strategy & <em>Management</em>",
    desc: "Consistent, strategic social media presence is not optional anymore. We handle the thinking and the execution.",
    tags: ["Platform Strategy", "Content Calendar", "Community Management", "Growth", "Reporting"],
    image: "/services/04.png",
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];
