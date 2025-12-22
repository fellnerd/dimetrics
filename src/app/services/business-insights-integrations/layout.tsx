import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Insights & Integrations | dimetrics.io",
  description:
    "Business Intelligence und Data Analytics Services in Österreich. Wir transformieren Ihre Daten in wertvolle Geschäftseinsichten und ermöglichen datengetriebene Entscheidungen.",
  keywords:
    "Business Intelligence, Data Analytics, Business Insights, Data Integration, Dashboard, Reporting, Power BI, Data Warehouse, ETL Prozesse, Datenanalyse, KPI Dashboards, Predictive Analytics, Österreich, dimetrics",
  openGraph: {
    title: "Business Insights & Integrations | dimetrics.io",
    description:
      "Business Intelligence und Data Analytics Services in Österreich. Transformieren Sie Ihre Daten in wertvolle Geschäftseinsichten.",
    url: "https://dimetrics.io/services/business-insights-integrations",
    type: "website",
    images: [
      {
        url: "https://dimetrics.io/images/services/business-insights.png",
        width: 1200,
        height: 630,
        alt: "Business Insights & Integrations Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Insights & Integrations | dimetrics.io",
    description:
      "Business Intelligence und Data Analytics Services in Österreich.",
    images: ["https://dimetrics.io/images/services/business-insights.png"],
  },
  alternates: {
    canonical: "https://dimetrics.io/services/business-insights-integrations",
  },
};

export default function BusinessInsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
