import { useT } from "@/i18n/useI18n";
import teamPhoto from "@/assets/marchebrick-team.jpg";

export function AboutPage() {
  const { t } = useT();
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t("about.eyebrow")}</span>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t("about.title")}</h1>
      <div className="mt-8 flex justify-center">
        <img
          src={teamPhoto}
          alt="Marchebrick team"
          className="w-full max-w-3xl rounded-lg border-2 border-lego-dark-red"
        />
      </div>
      <div className="mt-6 text-lg text-muted-foreground text-justify whitespace-pre-line">
        {t("about.intro")}
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-primary">{t("about.missionTitle")}</h2>
          <p className="mt-3 text-lg text-muted-foreground text-justify">{t("about.missionText")}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-primary">{t("about.valuesTitle")}</h2>
          <p className="mt-3 text-lg text-muted-foreground text-justify">{t("about.valuesText")}</p>
        </div>
      </div>
      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-primary">{t("about.boardTitle")}</h2>
          <div className="mt-4 text-lg text-muted-foreground space-y-4">
            <p className="text-justify">{t("about.boardIntro1")}</p>
            <p className="text-justify">{t("about.boardIntro2")}</p>
            <ul className="space-y-1">
              <li><strong className="font-semibold text-foreground">{t("about.rolePresident")}:</strong> Stefano Zannini</li>
              <li><strong className="font-semibold text-foreground">{t("about.roleVice")}:</strong> Danilo Calcinari</li>
              <li><strong className="font-semibold text-foreground">{t("about.roleSecretary")}:</strong> Michele Cocco</li>
              <li><strong className="font-semibold text-foreground">{t("about.roleTreasurer")}:</strong> David Lambertucci</li>
              <li><strong className="font-semibold text-foreground">{t("about.roleAmbassador")}:</strong> Matteo Mobili</li>
            </ul>
            <p className="text-justify">{t("about.boardOutro")}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary">{t("about.galateoTitle")}</h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground italic">{t("about.galateoSubtitle")}</p>
          <div className="mt-4 text-lg text-muted-foreground text-justify whitespace-pre-line">
            {t("about.galateoText")}
          </div>
        </section>
      </div>
    </div>
  );
}