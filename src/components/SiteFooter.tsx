import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/marchebrick-logo.png";
import { useT } from "@/i18n/useI18n";

export function SiteFooter() {
  const { t, p } = useT();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <img src={logo} alt="Marchebrick" className="h-21 w-auto" style={{ height: "5.25rem" }} />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">{t("footer.explore")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to={p("/chi-siamo")} className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to={p("/eventi")} className="hover:text-primary">{t("nav.events")}</Link></li>
            <li><Link to={p("/sociale")} className="hover:text-primary">{t("nav.social")}</Link></li>
            <li><Link to={p("/contatti")} className="hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">{t("footer.follow")}</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/marchebrick/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-background p-2 text-primary shadow-sm hover:bg-primary hover:text-primary-foreground"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/marchebrick/" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-background p-2 text-primary shadow-sm hover:bg-primary hover:text-primary-foreground"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.youtube.com/@MarcheBrick" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full bg-background p-2 text-primary shadow-sm hover:bg-primary hover:text-primary-foreground"><Youtube className="h-4 w-4" /></a>
            <a href="mailto:marchebrick@gmail.com" aria-label="Email" className="rounded-full bg-background p-2 text-primary shadow-sm hover:bg-primary hover:text-primary-foreground"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Marchebrick — {t("footer.rights")}
      </div>
    </footer>
  );
}