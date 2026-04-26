import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: translations.about.metaTitle.it },
      { name: "description", content: translations.about.metaDesc.it },
      { property: "og:title", content: translations.about.metaTitle.it },
      { property: "og:description", content: translations.about.metaDesc.it },
    ],
  }),
  component: AboutPage,
});