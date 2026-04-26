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
    ],
  }),
  component: HomePage,
});
