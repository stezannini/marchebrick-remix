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
    ],
  }),
  component: ContactPage,
});