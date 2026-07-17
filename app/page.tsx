"use client";

import { useState } from "react";
import ChangeHero from "@/components/ChangeHero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import BenefitsSection from "@/components/benefits/BenefitsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FaqSection from "@/components/faq/FaqSection";
import ContactSection from "@/components/contact/ContactSection";
import CaseStudyOverlay from "@/components/casestudy/CaseStudyOverlay";
import Footer from "@/components/footer/Footer";
import ThreadNav from "@/components/nav/ThreadNav";
import MobileMenu from "@/components/nav/MobileMenu";
import AsideStack from "@/components/aside/AsideStack";

export default function ChangeClient() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  return (
    <>
      <ThreadNav />
      <MobileMenu />
      <ChangeHero />
      <div className="split">
        <aside className="split-aside">
          <AsideStack />
        </aside>
        <div className="rhs">
          <ProjectsSection onOpenCase={setActiveCase} />
          <ServicesSection />
          <ProcessTimeline />
          <BenefitsSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
      <CaseStudyOverlay activeCase={activeCase} onClose={() => setActiveCase(null)} />
    </>
  );
}
