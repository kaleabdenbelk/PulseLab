"use client";

import ChangeHero from "@/components/ChangeHero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import BenefitsSection from "@/components/benefits/BenefitsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FaqSection from "@/components/faq/FaqSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import ThreadNav from "@/components/nav/ThreadNav";
import MobileMenu from "@/components/nav/MobileMenu";
import AsideStack from "@/components/aside/AsideStack";

export default function ChangeClient() {
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
          <ProjectsSection />
          <ServicesSection />
          <ProcessTimeline />
          <BenefitsSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
