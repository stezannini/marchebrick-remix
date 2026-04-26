import { createFileRoute, notFound } from "@tanstack/react-router";
import { events, localized } from "@/data/events";
import { translations } from "@/i18n/translations";
import { EventDetailPage, EventNotFound } from "@/components/pages/EventDetailPage";

export const Route = createFileRoute("/eventi/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${localized(loaderData.title, "it")} — Marchebrick` },
          { name: "description", content: localized(loaderData.excerpt, "it") },
          { property: "og:title", content: localized(loaderData.title, "it") },
          { property: "og:description", content: localized(loaderData.excerpt, "it") },
          { property: "og:image", content: loaderData.image },
          { property: "twitter:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: EventNotFound,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center lg:px-8">
      <h1 className="text-3xl font-bold">{translations.events.errorTitle.it}</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: () => {
    const event = Route.useLoaderData();
    return <EventDetailPage event={event} />;
  },
});
