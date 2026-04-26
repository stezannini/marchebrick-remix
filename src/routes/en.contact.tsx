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
    ],
  }),
  component: ContactPage,
});