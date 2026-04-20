import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Marchebrick" },
      { name: "description", content: "La storia, la mission e i valori del gruppo Marchebrick: appassionati di mattoncini delle Marche." },
      { property: "og:title", content: "Chi siamo — Marchebrick" },
      { property: "og:description", content: "Scopri il gruppo Marchebrick e la nostra passione per i mattoncini." },
    ],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">Chi siamo</span>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Una passione che unisce le Marche.</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Marchebrick è una community di AFOL (Adult Fan of LEGO®) marchigiani. Ci ritroviamo per costruire, esporre e condividere la passione per i mattoncini, organizzando eventi e collaborando con realtà del territorio.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-primary">La nostra missione</h2>
          <p className="mt-3 text-muted-foreground">
            Diffondere la cultura del costruire creativamente, coinvolgendo bambini, famiglie e collezionisti in eventi inclusivi e divertenti.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-primary">I nostri valori</h2>
          <p className="mt-3 text-muted-foreground">
            Comunità, creatività, condivisione e impegno verso il territorio: questi sono i pilastri che ci guidano in ogni evento.
          </p>
        </div>
      </div>
    </div>
  );
}