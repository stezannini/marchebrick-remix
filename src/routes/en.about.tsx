import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: translations.about.metaTitle.en },
      { name: "description", content: translations.about.metaDesc.en },
      { property: "og:title", content: translations.about.metaTitle.en },
      { property: "og:description", content: translations.about.metaDesc.en },
    ],
  }),
  component: AboutPage,
});