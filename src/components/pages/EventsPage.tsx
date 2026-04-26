import { useState } from "react";
import { events, localized, categoryLabel, type EventItem } from "@/data/events";
import { useT } from "@/i18n/useI18n";

const cats: EventItem["category"][] = ["Eventi", "Girovagando", "Sociale"];

export function EventsPage() {
  const { t, lang } = useT();
  const [filter, setFilter] = useState<"All" | EventItem["category"]>("All");
  const list = filter === "All" ? events : events.filter((e) => e.category === filter);
  const detailBase = lang === "en" ? "/en/events/" : "/eventi/";

  const allLabel = t("events.catAll");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t("events.eyebrow")}</span>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("events.title")}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{t("events.subtitle")}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...cats] as const).map((c) => {
          const label = c === "All" ? allLabel : categoryLabel(c, lang);
          const active = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={
                active
                  ? "rounded-full border-2 border-black bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  : "rounded-full border-2 border-black bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/70"
              }
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => {
          const title = localized(e.title, lang);
          return (
            <a
              key={e.slug}
              href={detailBase + e.slug}
              className="group block overflow-hidden rounded-2xl border-2 border-black bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={e.image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="tag-lego absolute left-3 top-3 rounded-full border-2 border-black px-3 py-1 text-xs font-semibold">{categoryLabel(e.category, lang)}</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{localized(e.date, lang)}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{localized(e.excerpt, lang)}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}