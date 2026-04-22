import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Users, Heart } from "lucide-react";
import hero from "@/assets/hero-event.jpg";
import { events } from "@/data/events";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marchebrick — Eventi e passione per i mattoncini nelle Marche" },
      { name: "description", content: "Scopri Marchebrick: il gruppo marchigiano di appassionati di mattoncini. Eventi, esposizioni e iniziative sociali." },
      { property: "og:title", content: "Marchebrick — Eventi di mattoncini" },
      { property: "og:description", content: "La community marchigiana dei mattoncini: eventi, esposizioni e iniziative." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const latest = events.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Community AFOL · Marche
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Costruiamo emozioni, un mattoncino alla volta.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">
            Marchebrick riunisce appassionati di mattoncini delle Marche e d'Italia: eventi, esposizioni, contest e iniziative per il sociale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/eventi" className="btn-lego inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5">
              Scopri gli eventi <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/chi-siamo" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20">
              Chi siamo
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Calendar, title: "Eventi & Esposizioni", text: "Organizziamo e partecipiamo a manifestazioni in tutta Italia." },
            { icon: Users, title: "Una community", text: "AFOL, famiglie e curiosi: il mattoncino unisce tutte le età." },
            { icon: Heart, title: "Sociale", text: "Iniziative benefiche e progetti per il territorio marchigiano." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest events */}
      <section className="brick-pattern bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Ultime news</h2>
              <p className="mt-2 text-muted-foreground">Gli eventi più recenti della community Marchebrick.</p>
            </div>
            <Link to="/eventi" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex">
              Tutti gli eventi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latest.map((e) => (
              <article key={e.slug} className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="tag-lego absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold">{e.category}</span>
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground brick-shadow lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Vuoi esporre con noi?</h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/85">
                Sei un AFOL o un gruppo di appassionati? Unisciti ai nostri eventi e porta le tue creazioni davanti a un pubblico entusiasta.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link to="/contatti" className="btn-lego inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold">
                Contattaci <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
