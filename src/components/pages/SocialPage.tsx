import { Heart } from "lucide-react";
import { useT } from "@/i18n/useI18n";

export function SocialPage() {
  const { t } = useT();
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
      <Heart className="h-10 w-10 text-destructive" />
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{t("social.title")}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{t("social.p1")}</p>
      <p className="mt-4 text-muted-foreground">{t("social.p2")}</p>
    </div>
  );
}