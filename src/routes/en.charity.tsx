import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { SocialPage } from "@/components/pages/SocialPage";

export const Route = createFileRoute("/en/charity")({
  head: () => ({
    meta: [
      { title: translations.social.metaTitle.en },
      { name: "description", content: translations.social.metaDesc.en },
      { property: "og:title", content: translations.social.metaTitle.en },
      { property: "og:description", content: translations.social.metaDesc.en },
    ],
  }),
  component: SocialPage,
});