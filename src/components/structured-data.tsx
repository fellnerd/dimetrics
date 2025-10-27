import Script from "next/script";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TechnologyCompany",
    "@id": "https://dimetrics.io/#organization",
    name: "dimetrics.io",
    legalName: "dimetrics - Digital Solutions",
    url: "https://dimetrics.io",
    logo: "https://dimetrics.io/images/logos/dimetrics-logo.png",
    description:
      "Digitale Transformation, Microsoft Power Platform und Azure Cloud Migration Beratung in Österreich. Spezialisiert auf Enterprise Integration und Low-Code Entwicklung.",
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AT",
      addressRegion: "Kärnten",
      addressLocality: "Klagenfurt",
      postalCode: "9020",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.6247",
      longitude: "14.3051",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+43-xxx-xxx-xxx",
      contactType: "Business",
      availableLanguage: ["German", "English"],
      areaServed: "AT",
    },
    sameAs: ["https://www.linkedin.com/company/dimetrics"],
    service: [
      {
        "@type": "Service",
        name: "Digitale Transformation Beratung",
        description:
          "Strategische Digitalberatung und Umsetzung für österreichische Unternehmen",
        provider: {
          "@id": "https://dimetrics.io/#organization",
        },
        areaServed: "AT",
        serviceType: "Business Consulting",
      },
      {
        "@type": "Service",
        name: "Microsoft Power Platform Entwicklung",
        description:
          "Low-Code Anwendungsentwicklung mit Microsoft Power Platform und Power BI",
        provider: {
          "@id": "https://dimetrics.io/#organization",
        },
        areaServed: "AT",
        serviceType: "Software Development",
      },
      {
        "@type": "Service",
        name: "Azure Cloud Migration",
        description:
          "Cloud-Strategie und Migration zu Microsoft Azure, AWS und Google Cloud Platform",
        provider: {
          "@id": "https://dimetrics.io/#organization",
        },
        areaServed: "AT",
        serviceType: "Cloud Computing",
      },
      {
        "@type": "Service",
        name: "Enterprise Integration",
        description:
          "API-Integration und Systemvernetzung für Unternehmenssoftware",
        provider: {
          "@id": "https://dimetrics.io/#organization",
        },
        areaServed: "AT",
        serviceType: "System Integration",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Microsoft Partner",
        recognizedBy: {
          "@type": "Organization",
          name: "Microsoft",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dimetrics.io/#website",
    url: "https://dimetrics.io",
    name: "dimetrics.io",
    description:
      "Digitale Transformation und Cloud Migration Beratung in Österreich",
    publisher: {
      "@id": "https://dimetrics.io/#organization",
    },
    inLanguage: "de-AT",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://dimetrics.io/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "@id": "https://dimetrics.io/#servicearea",
    name: "Österreich",
    description:
      "Digitale Transformation Services in ganz Österreich mit Fokus auf Kärnten",
    geo: {
      "@type": "Country",
      name: "Austria",
      alternateName: "Österreich",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dimetrics.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://dimetrics.io/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://dimetrics.io/about",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
