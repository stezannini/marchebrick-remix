import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: translations.contact.metaTitle.it },
      { name: "description", content: translations.contact.metaDesc.it },
      { property: "og:title", content: translations.contact.metaTitle.it },
      { property: "og:description", content: translations.contact.metaDesc.it },
      { property: "og:url", content: "https://marchebrick.lovable.app/contatti" },
    ],
    links: [
      { rel: "canonical", href: "https://marchebrick.lovable.app/contatti" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Marchebrick",
          description: translations.contact.metaDesc.it,
          email: "marchebrick@gmail.com",
          url: "https://marchebrick.lovable.app/contatti",
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