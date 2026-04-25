import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { events } from "@/data/events";

export const Route = createFileRoute("/eventi/")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Marchebrick` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.image },
          { property: "twitter:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center lg:px-8">
      <h1 className="text-3xl font-bold">Evento non trovato</h1>
      <p className="mt-3 text-muted-foreground">L'evento che cerchi non esiste o è stato rimosso.</p>
      <Link
        to="/eventi"
        className="mt-6 inline-block rounded-full border-2 border-black bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
      >
        Torna agli eventi
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center lg:px-8">
      <h1 className="text-3xl font-bold">Qualcosa è andato storto</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: EventDetailPage,
});

function EventDetailPage() {
  const event = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <Link to="/eventi" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        ← Torna agli eventi
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl border-2 border-black">
        <img src={event.image} alt={event.title} className="aspect-[16/9] w-full object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="tag-lego rounded-full border-2 border-black px-3 py-1 text-xs font-semibold">
          {event.category}
        </span>
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{event.date}</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{event.title}</h1>

      <div className="prose prose-neutral mt-6 max-w-none">
        {(event.description ?? event.excerpt).split("\n").map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-foreground/90">
            {p}
          </p>
        ))}
      </div>

      {event.gallery && event.gallery.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Galleria</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl border-2 border-black">
                <img src={src} alt={`${event.title} — foto ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
