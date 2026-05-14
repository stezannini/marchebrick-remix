import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: translations.home.metaTitle.it },
      { name: "description", content: translations.home.metaDesc.it },
      { property: "og:title", content: translations.home.metaTitle.it },
      { property: "og:description", content: translations.home.metaDesc.it },
      { property: "og:url", content: "https://marchebrick.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://marchebrick.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Marchebrick",
              url: "https://marchebrick.lovable.app/",
              description: translations.home.metaDesc.it,
              areaServed: "IT",
              email: "marchebrick@gmail.com",
            },
            {
              "@type": "WebSite",
              name: "Marchebrick",
              url: "https://marchebrick.lovable.app/",
              inLanguage: ["it", "en"],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});
