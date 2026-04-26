import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: translations.home.metaTitle.en },
      { name: "description", content: translations.home.metaDesc.en },
      { property: "og:title", content: translations.home.metaTitle.en },
      { property: "og:description", content: translations.home.metaDesc.en },
    ],
  }),
  component: HomePage,
});