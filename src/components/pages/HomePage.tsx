import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Users, Heart } from "lucide-react";
import hero from "@/assets/hero-event.jpg";
import { events, localized, categoryLabel } from "@/data/events";
import { useT } from "@/i18n/useI18n";

export function HomePage() {
  const { t, p, lang } = useT();
  const latest = events.slice(0, 3);
  const eventDetailBase = lang === "en" ? "/en/events/" : "/eventi/";
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border-2 border-white bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {t("home.badgeCommunity")}
            </span>
            <span className="inline-flex items-center rounded-full border-2 border-white bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {t("home.badgeRlug")}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">{t("home.heroSubtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={p("/eventi")} className="btn-lego inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black">
              {t("home.ctaEvents")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to={p("/chi-siamo")} className="btn-lego inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black">
              {t("home.ctaAbout")}
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Calendar, title: t("home.pillarEventsTitle"), text: t("home.pillarEventsText"), to: p("/eventi") },
            { icon: Users, title: t("home.pillarCommunityTitle"), text: t("home.pillarCommunityText"), to: p("/chi-siamo") },
            { icon: Heart, title: t("home.pillarSocialTitle"), text: t("home.pillarSocialText"), to: p("/sociale") },
          ].map(({ icon: Icon, title, text, to }) => (
            <Link key={title} to={to} className="block rounded-2xl border-2 border-lego-dark-red bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest events */}
      <section className="bg-lego-sand-green/70 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl text-lego-sand-green-foreground">{t("home.latestTitle")}</h2>
              <p className="mt-2 text-lego-sand-green-foreground/80">{t("home.latestSubtitle")}</p>
            </div>
            <Link to={p("/eventi")} className="hidden items-center gap-1 text-sm font-semibold text-lego-sand-green-foreground hover:underline sm:inline-flex">
              {t("home.allEvents")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latest.map((e) => {
              const title = localized(e.title, lang);
              return (
                <a key={e.slug} href={eventDetailBase + e.slug} className="group block overflow-hidden rounded-2xl border-2 border-black bg-card shadow-sm transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={e.image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="tag-lego absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold">{categoryLabel(e.category, lang)}</span>
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground brick-shadow lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t("home.ctaTitle")}</h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/85">{t("home.ctaText")}</p>
            </div>
            <div className="flex lg:justify-end">
              <Link to={p("/contatti")} className="btn-lego inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold">
                {t("home.ctaButton")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}