export const testimonials = [
  {
    quote: `What Amos built for Buna Mahber wasn\u2019t just a website \u2014 it was the foundation that turned a viral moment into a <em>real community.</em> The platform handled thousands of members, tens of thousands of votes, and gave us a digital home we didn\u2019t know we needed until we saw it.`,
    author: {
      name: "\u127b\u1209",
      tiktok: "[DEVELOPER: insert Chalu TikTok link here]",
      initials: "\u127b\u1209",
      role: "Buna Mahber \u00b7 \u1261\u1293 \u130e\u130a\u12ce\u127d \u121b\u200b\u1215\u1260\u122d",
      tag: "Community Platform \u00b7 Digital Brand \u00b7 2024",
    },
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
