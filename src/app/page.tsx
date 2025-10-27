import { PageLayout } from "@/components/page-layout";
import { HeroSectionLight } from "@/components/hero-section-light";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CallToActionSection } from "@/components/cta-section";
import PartnershipSection from "@/components/partnership-section";
import IntroductionSection from "../components/introduction-section";

export default function Home() {
  return (
    <PageLayout backgroundColor="white" textColor="black">
      <HeroSectionLight />
      <IntroductionSection />
      <ServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <PartnershipSection />
    </PageLayout>
  );
}
