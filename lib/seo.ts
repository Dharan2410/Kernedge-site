import { site } from "@/data/content";

// Set NEXT_PUBLIC_SITE_URL in Vercel (Settings > Environment Variables). When you buy a custom domain, change only that value.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kernedge-site.vercel.app").replace(/\/$/, "");
export const AREAS = ["Coimbatore", "Tiruppur"];

export const SEO = {
  title: "Kernedge | Internships, Training & IT Services in Coimbatore, Tiruppur",
  description:
    "Internships, job-ability training and college workshops, plus software, AI and IoT services for businesses in Coimbatore and Tiruppur. Book free career guidance.",
};

const tel = (p: string) => "+" + p.replace(/\D/g, "");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
      {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Kernedge",
      alternateName: ["Kernedge Pvt. Ltd.", new URL(SITE_URL).hostname],
      inLanguage: "en-IN",
    },
    {
      "@type": ["EducationalOrganization", "ProfessionalService"],
      "@id": `${SITE_URL}/#org`,
      name: site.name,
      alternateName: "Kernedge",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-mark.jpeg`,
      image: `${SITE_URL}/opengraph-image`,
      description: SEO.description,
      email: site.email,
      telephone: tel(site.phones[0]),
      sameAs: [site.instagram.url],
      areaServed: AREAS.map((name) => ({
        "@type": "City",
        name,
        containedInPlace: { "@type": "State", name: "Tamil Nadu" },
      })),
      contactPoint: site.phones.map((p) => ({
        "@type": "ContactPoint",
        telephone: tel(p),
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English"],
      })),
      knowsAbout: ["Internships", "Corporate skills training", "Career guidance", "Full stack development", "AI and machine learning", "IoT and embedded systems", "Biomedical equipment training"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Kernedge services",
        itemListElement: [
          "Internships",
          "Job-ability training and workshops",
          "Free career guidance",
          "Software and web development",
          "AI and data solutions",
          "IoT and embedded products",
          "Technology consulting",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
  ],
};