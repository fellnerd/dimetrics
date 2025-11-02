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
      url: `${baseUrl}/services/application-integration`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/business-insights-integrations`,
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
    // Karriere/Blog placeholders removed until routes exist

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

    // Solution Reports
    {
      url: `${baseUrl}/solutions/projektmanagement-system-inkl-power-bi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/solutions/wko-cashback-aktion`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/solutions/customer-relationship-management-tool`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/solutions/dynamisches-recruiting-crm`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/solutions/lieferantenmanagement-in-der-energietechnik`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/solutions/dokumentenautomatisierung-mit-ocr`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
