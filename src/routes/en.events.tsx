import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { EventsPage } from "@/components/pages/EventsPage";

export const Route = createFileRoute("/en/events")({
  head: () => ({
    meta: [
      { title: translations.events.metaTitle.en },
      { name: "description", content: translations.events.metaDesc.en },
      { property: "og:title", content: translations.events.metaTitle.en },
      { property: "og:description", content: translations.events.metaDesc.en },
    ],
  }),
  component: EventsPage,
});