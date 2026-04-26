import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { SocialPage } from "@/components/pages/SocialPage";

export const Route = createFileRoute("/sociale")({
  head: () => ({
    meta: [
      { title: translations.social.metaTitle.it },
      { name: "description", content: translations.social.metaDesc.it },
      { property: "og:title", content: translations.social.metaTitle.it },
      { property: "og:description", content: translations.social.metaDesc.it },
    ],
  }),
  component: SocialPage,
});