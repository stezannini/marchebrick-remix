import { Link } from "@tanstack/react-router";
import { events, localized, categoryLabel, type EventItem } from "@/data/events";
import { useT } from "@/i18n/useI18n";

export function EventDetailPage({ event }: { event: EventItem }) {
  const { t, p, lang } = useT();
  const title = localized(event.title, lang);
  const description = localized(event.description ?? event.excerpt, lang);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <Link to={p("/eventi")} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        {t("events.backToEvents")}
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl border-2 border-black">
        <img src={event.image} alt={title} className="aspect-[16/9] w-full object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="tag-lego rounded-full border-2 border-black px-3 py-1 text-xs font-semibold">
          {categoryLabel(event.category, lang)}
        </span>
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{localized(event.date, lang)}</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>

      <div className="prose prose-neutral mt-6 max-w-none">
        {description.split("\n").map((para, i) => (
          <p key={i} className="text-base leading-relaxed text-foreground/90">
            {para}
          </p>
        ))}
      </div>

      {event.gallery && event.gallery.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">{t("events.galleryTitle")}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl border-2 border-black">
                <img src={src} alt={`${title} — ${t("events.photoAlt")} ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export function EventNotFound() {
  const { t, p } = useT();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center lg:px-8">
      <h1 className="text-3xl font-bold">{t("events.notFoundTitle")}</h1>
      <p className="mt-3 text-muted-foreground">{t("events.notFoundText")}</p>
      <Link to={p("/eventi")} className="mt-6 inline-block rounded-full border-2 border-black bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
        {t("events.notFoundCta")}
      </Link>
    </div>
  );
}

export function findEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}