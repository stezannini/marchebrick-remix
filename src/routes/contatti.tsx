import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Marchebrick" },
      { name: "description", content: "Contatta il gruppo Marchebrick per eventi, collaborazioni o per esporre con noi." },
      { property: "og:title", content: "Contatti — Marchebrick" },
      { property: "og:description", content: "Scrivici per eventi, collaborazioni o per unirti alla community." },
    ],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contatti</span>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Parliamone insieme.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Per organizzare eventi, esporre con noi o proporre collaborazioni, scrivici: ti risponderemo al più presto.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:info@marchebrick.it" className="text-sm text-muted-foreground hover:text-primary">info@marchebrick.it</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Dove siamo</h3>
              <p className="text-sm text-muted-foreground">Regione Marche, Italia</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Messaggio inviato!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Nome</label>
                <input required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input required type="email" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Messaggio</label>
                <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 brick-shadow">
                Invia messaggio <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}