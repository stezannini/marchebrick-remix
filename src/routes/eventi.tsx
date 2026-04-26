import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { EventsPage } from "@/components/pages/EventsPage";

export const Route = createFileRoute("/eventi")({
  head: () => ({
    meta: [
      { title: translations.events.metaTitle.it },
      { name: "description", content: translations.events.metaDesc.it },
      { property: "og:title", content: translations.events.metaTitle.it },
      { property: "og:description", content: translations.events.metaDesc.it },
    ],
  }),
  component: EventsPage,
});