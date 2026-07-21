export const testimonials = [
  {
    quote: `What Pulse Digital built for Buna Mahber wasn\u2019t just a website. It was the foundation that turned a viral moment into a <em>real community.</em> The platform handled thousands of members, tens of thousands of votes, and gave us a digital home we didn\u2019t know we needed until we saw it. The quality and speed of execution was unlike anything I expected.`,
    author: {
      name: "\u127b\u1209",
      tiktok: "https://vt.tiktok.com/ZSX9cWR6p/",
      initials: "\u127b\u1209",
      photo: "/challu.jpg",
      role: "Buna Mahber \u00b7 \u1261\u1293 \u130e\u130a\u12ce\u127d \u121b\u200b\u1215\u1260\u122d",
      tag: "Community Platform \u00b7 Digital Brand \u00b7 2026",
    },
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
