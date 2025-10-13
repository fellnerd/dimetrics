import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CallToActionSection } from "@/components/cta-section";
import PartnershipSection from "@/components/partnership-section";
import IntroductionSection from "../components/introduction-section";

export default function Home() {
  return (
    <PageLayout backgroundColor="black" textColor="white">
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <PartnershipSection />
    </PageLayout>
  );
}
