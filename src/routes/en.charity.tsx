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
      { property: "og:url", content: "https://marchebrick.lovable.app/en/charity" },
    ],
    links: [
      { rel: "canonical", href: "https://marchebrick.lovable.app/en/charity" },
    ],
  }),
  component: SocialPage,
});