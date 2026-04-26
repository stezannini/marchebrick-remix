import { Link, useRouterState } from "@tanstack/react-router";
import { switchLangPath, useLang } from "@/i18n/useI18n";

function FlagIT({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="1" height="2" x="0" fill="#009246" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#ce2b37" />
    </svg>
  );
}

function FlagGB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const itHref = switchLangPath(pathname, "it");
  const enHref = switchLangPath(pathname, "en");

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Link
        to={itHref}
        aria-label="Italiano"
        title="Italiano"
        className={`overflow-hidden rounded-sm border transition-opacity ${
          lang === "it" ? "border-primary opacity-100" : "border-border opacity-60 hover:opacity-100"
        }`}
      >
        <FlagIT className="h-4 w-6 block" />
      </Link>
      <Link
        to={enHref}
        aria-label="English"
        title="English"
        className={`overflow-hidden rounded-sm border transition-opacity ${
          lang === "en" ? "border-primary opacity-100" : "border-border opacity-60 hover:opacity-100"
        }`}
      >
        <FlagGB className="h-4 w-6 block" />
      </Link>
    </div>
  );
}