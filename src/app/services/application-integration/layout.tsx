import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Application Integration | dimetrics.io",
  description:
    "Professionelle Enterprise Application Integration Services in Österreich. Wir verbinden Ihre Geschäftssysteme nahtlos und schaffen intelligente Datenflüsse für maximale Effizienz.",
  keywords:
    "Enterprise Integration, Application Integration, System Integration, API Integration, Middleware, Enterprise Service Bus, Datenintegration, Systemvernetzung, B2B Integration, Cloud Integration, ERP Integration, CRM Integration, Österreich, dimetrics",
  openGraph: {
    title: "Enterprise Application Integration | dimetrics.io",
    description:
      "Professionelle Enterprise Application Integration Services in Österreich. Nahtlose Systemvernetzung für maximale Effizienz.",
    url: "https://dimetrics.io/services/application-integration",
    type: "website",
    images: [
      {
        url: "https://dimetrics.io/images/services/enterprise-integration.png",
        width: 1200,
        height: 630,
        alt: "Enterprise Application Integration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Application Integration | dimetrics.io",
    description:
      "Professionelle Enterprise Application Integration Services in Österreich.",
    images: ["https://dimetrics.io/images/services/enterprise-integration.png"],
  },
  alternates: {
    canonical: "https://dimetrics.io/services/application-integration",
  },
};

export default function ApplicationIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
