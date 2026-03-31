"use client";

import { ClientFlowProvider } from "@/components/ClientFlowContext";
import { ClientFlowModal } from "@/components/ClientFlowModal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { GrowthSystemsSection } from "@/components/GrowthSystemsSection";
import { WhyPLGSection } from "@/components/WhyPLGSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { StatsSection } from "@/components/StatsSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ClientFlowProvider>
      <main className="pd-page">
        <Navbar />
        <HeroSection />
        <GrowthSystemsSection />
        <WhyPLGSection />
        <HowItWorksSection />
        <StatsSection />
        <WhoWeHelpSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
      <ClientFlowModal />
    </ClientFlowProvider>
  );
}
