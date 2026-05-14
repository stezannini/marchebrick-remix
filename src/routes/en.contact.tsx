import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: translations.contact.metaTitle.en },
      { name: "description", content: translations.contact.metaDesc.en },
      { property: "og:title", content: translations.contact.metaTitle.en },
      { property: "og:description", content: translations.contact.metaDesc.en },
      { property: "og:url", content: "https://marchebrick.lovable.app/en/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://marchebrick.lovable.app/en/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Marchebrick",
          description: translations.contact.metaDesc.en,
          email: "marchebrick@gmail.com",
          url: "https://marchebrick.lovable.app/en/contact",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Marche",
            addressCountry: "IT",
          },
          areaServed: "IT",
        }),
      },
    ],
  }),
  component: ContactPage,
});