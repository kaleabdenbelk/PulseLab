import { CASES, CASE_ORDER } from "@/components/casestudy/data";
import CaseStudyPage from "./CaseStudyPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return CASE_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASES[slug];
  if (!cs) return {};
  return {
    title: `${cs.name} — Case Study | Pulse Digital`,
    description: cs.kicker,
    openGraph: {
      title: `${cs.name} — Pulse Digital`,
      description: cs.kicker,
      images: [{ url: cs.images.hero, width: 1672, height: 941, alt: cs.name }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASES[slug];
  if (!cs) notFound();
  return <CaseStudyPage slug={slug} />;
}
