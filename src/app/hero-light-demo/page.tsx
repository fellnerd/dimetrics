import { HeroSectionLight } from "@/components/hero-section-light";
import { HeroSection } from "@/components/hero-section";
import { PageLayout } from "@/components/page-layout";

export default function HeroLightDemo() {
  return (
    <PageLayout backgroundColor="white" textColor="black">
      {/* Light Hero Section */}
      <HeroSectionLight />

      {/* Comparison Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            🌟 Light vs Dark Hero Section
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Dies ist die <strong>Light-Variante</strong> der Hero Section mit:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200/50">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                ✨ Light Theme Features
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Helle Farbpalette (Blue, Purple, Cyan)</li>
                <li>• Weißer Container mit Schatten</li>
                <li>• Gradient-Text für Akzente</li>
                <li>• Sanfte Blur-Effekte</li>
                <li>• Professionell & freundlich</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                🌙 Dark Theme Features
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Dunkle Farbpalette</li>
                <li>• Schwarzer Hintergrund</li>
                <li>• Corporate-Farben</li>
                <li>• Dramatische Effekte</li>
                <li>• Modern & elegant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Hero Section for Comparison */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-100 to-black h-20 z-10"></div>
        <HeroSection />
      </div>
    </PageLayout>
  );
}
