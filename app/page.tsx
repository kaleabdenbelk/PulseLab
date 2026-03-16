import { GlobalStyles } from "@/components/GlobalStyles";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <GlobalStyles />
      <div style={{ background: "#050508", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Results />
        <CTA />
        <Footer />
      </div>
      </>
  );
}
