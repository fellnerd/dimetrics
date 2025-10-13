"use client";

import { CTAHeader } from "./sections/cta/cta-header";
import { CTAButtons } from "./sections/cta/cta-buttons";

export function CallToActionSection() {
  return (
    <section className="bg-black py-10 border-t border-gray-800">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <CTAHeader />
        <CTAButtons />
      </div>
    </section>
  );
}
