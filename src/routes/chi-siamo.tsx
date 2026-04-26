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
       <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Una passione che unisce le Marche</h1>
       <div className="mt-6 text-lg text-muted-foreground text-justify whitespace-pre-line">
         Marchebrick è la community di riferimento nelle Marche per tutti gli appassionati di mattoncini LEGO® (AFOL). Uniamo creatività, divertimento e condivisione per trasformare una passione in esperienze coinvolgenti per tutte le età. Organizziamo eventi, esposizioni e attività interattive dove fantasia e ingegno prendono vita: dai grandi diorami alle costruzioni dal vivo, ogni occasione è pensata per stupire, ispirare e far partecipare.



         Marchebrick è più di un’associazione... è un punto di incontro per chi ama costruire, immaginare e condividere.

         Entra anche tu nel nostro mondo… e inizia a costruire con noi!
       </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-primary">MISSION</h2>
          <p className="mt-3 text-lg text-muted-foreground text-justify">Crediamo nel valore educativo del Gioco, e nella forza della collaborazione: per questo promuoviamo iniziative che stimolano la creatività, la socializzazione e l'apprendimento, coinvolgendo famiglie, scuole e appassionati.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-primary">VALORI</h2>
          <p className="mt-3 text-lg text-muted-foreground text-justify">Comunità, creatività, condivisione e impegno verso il territorio: questi sono i pilastri che ci guidano nella realizzazione di ogni evento.</p>
        </div>
      </div>
      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-primary">Consiglio direttivo</h2>
          <div className="mt-4 text-lg text-muted-foreground space-y-4">
             <p className="text-justify">
               Il Consiglio Direttivo è l’organo che guida e coordina le attività di Marchebrick, promuovendo iniziative, eventi e progetti per la crescita dell’associazione.
             </p>
            <p className="text-justify">
              È composto da 5 membri eletti dall’Assemblea dei soci, in carica per 3 anni:
            </p>
            <ul className="space-y-1">
              <li><strong className="font-semibold text-foreground">Presidente:</strong> Stefano Zannini</li>
              <li><strong className="font-semibold text-foreground">Vicepresidente:</strong> Danilo Calcinari</li>
              <li><strong className="font-semibold text-foreground">Segretario:</strong> Michele Cocco</li>
              <li><strong className="font-semibold text-foreground">Tesoriere:</strong> David Lambertucci</li>
              <li><strong className="font-semibold text-foreground">Ambassador:</strong> Matteo Mobili</li>
            </ul>
             <p className="text-justify">
               Tutte le cariche sono svolte a titolo volontario e gratuito, nel rispetto dei valori di condivisione, partecipazione e passione che caratterizzano Marchebrick.
             </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary">Galateo dell’associazione</h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground italic">(linee guida e codice di condotta)</p>
           <div className="mt-4 text-lg text-muted-foreground text-justify whitespace-pre-line">
             Marchebrick si basa su rispetto, collaborazione e responsabilità condivisa.
             Ci aspettiamo che ogni membro contribuisca in modo positivo alla community, mantenendo un comportamento corretto, inclusivo e costruttivo verso tutti.

             Durante attività ed eventi, è richiesto spirito di squadra, puntualità e affidabilità, nel rispetto dei ruoli e dell’organizzazione. Ogni partecipante è invitato a collaborare attivamente, supportare gli altri e rappresentare la community in modo professionale verso il pubblico e gli organizzatori.

             Non sono tollerati comportamenti offensivi, discriminatori o che possano danneggiare la community o i suoi membri.

             Far parte di Marchebrick significa condividere valori, passione e impegno nel costruire esperienze positive per tutti.
           </div>
        </section>
      </div>
    </div>
  );
}