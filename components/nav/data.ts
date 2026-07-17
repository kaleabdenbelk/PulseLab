export const sections = [
  { key: "works", num: "1", label: "Works", href: "#works" },
  { key: "services", num: "2", label: "Services", href: "#services" },
  { key: "process", num: "3", label: "Process", href: "#process" },
  { key: "why", num: "4", label: "Benefits", href: "#why" },
  { key: "words", num: "5", label: "Testimonials", href: "#words" },
  { key: "contact", num: "6", label: "Contact", href: "#contact" },
] as const;

export type SectionKey = (typeof sections)[number]["key"];
