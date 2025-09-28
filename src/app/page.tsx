import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CallToActionSection } from "@/components/cta-section";
import PartnershipSection from "@/components/partnership-section";
import { Footer } from "@/components/footer";
import IntroductionSection from "../components/introduction-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <PartnershipSection />
      <Footer />
    </div>
  );
}
