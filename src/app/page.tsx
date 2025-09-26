import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CallToActionSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
