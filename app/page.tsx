import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ApiPreview } from "@/components/ApiPreview";
import { UseCases } from "@/components/UseCases";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-ink-950">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <ApiPreview />
      <UseCases />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
