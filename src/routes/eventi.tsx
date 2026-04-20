import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { events } from "@/data/events";

export const Route = createFileRoute("/eventi")({
  head: () => ({
    meta: [
      { title: "Eventi — Marchebrick" },
      { name: "description", content: "Tutti gli eventi e le esposizioni di Marchebrick: passati, presenti e futuri." },
      { property: "og:title", content: "Eventi Marchebrick" },
      { property: "og:description", content: "Esposizioni, fiere e raduni di mattoncini con Marchebrick." },
    ],
  }),
  component: EventiPage,
});

const categories = ["Tutti", "Eventi", "Girovagando", "Sociale"] as const;

function EventiPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tutti");
  const list = filter === "Tutti" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">Eventi</span>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Tutti i nostri appuntamenti</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Esposizioni, fiere, raduni e iniziative sociali. Filtra per categoria.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={
              filter === c
                ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                : "rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/70"
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <article key={e.slug} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{e.category}</span>
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{e.date}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}