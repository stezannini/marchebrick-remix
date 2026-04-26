import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useT } from "@/i18n/useI18n";

export function ContactPage() {
  const { t } = useT();
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t("contact.eyebrow")}</span>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("contact.title")}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{t("contact.subtitle")}</p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{t("contact.email")}</h3>
              <a href="mailto:marchebrick@gmail.com" className="text-sm text-muted-foreground hover:text-primary">marchebrick@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{t("contact.where")}</h3>
              <p className="text-sm text-muted-foreground">{t("contact.whereText")}</p>
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
              <h3 className="mt-4 text-xl font-semibold">{t("contact.sentTitle")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("contact.sentText")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">{t("contact.name")}</label>
                <input required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t("contact.email")}</label>
                <input required type="email" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t("contact.message")}</label>
                <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 brick-shadow">
                {t("contact.send")} <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}