import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dimetrics.io";
  const currentDate = new Date();

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Service Pages - High Priority for SEO
    {
      url: `${baseUrl}/services/cloud-strategy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/enterprise-integration`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/business-insights`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/platform`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // About & Company Pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Contact & Legal
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karriere`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Blog (wenn vorhanden)
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Legal Pages - Lower Priority but Important
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Platform Pages
    {
      url: `${baseUrl}/business-process-automation-platform`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Case Study URLs (External but important for reference)
    // These are external links so we don't include them in sitemap
    // but track for analytics:
    // projektmanagement-system-inkl-power-bi
    // wko-cashback-aktion
    // customer-relationship-management-tool
    // dynamisches-recruiting-crm
    // lieferantenmanagement-in-der-energietechnik
    // dokumentenautomatisierung-mit-ocr
  ];
}
