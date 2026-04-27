import { useRouterState } from "@tanstack/react-router";
import type { Lang } from "./translations";
import { t as translate } from "./translations";

export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname.startsWith("/en") ? "en" : "it";
}

export function useT() {
  const lang = useLang();
  return {
    lang,
    t: (key: string) => translate(key, lang),
    /** Map an IT path to its localized equivalent for the current language. Pass IT path like "/eventi". */
    p: (path: string) => (lang === "en" ? IT_TO_EN_PATH[path] ?? (path === "/" ? "/en" : `/en${path}`) : path),
  };
}

/** Map an IT base path to its EN equivalent (used by language switcher). */
export const IT_TO_EN_PATH: Record<string, string> = {
  "/": "/en",
  "/chi-siamo": "/en/about",
  "/eventi": "/en/events",
  "/sociale": "/en/charity",
  "/contatti": "/en/contact",
};

export const EN_TO_IT_PATH: Record<string, string> = {
  "/en": "/",
  "/en/about": "/chi-siamo",
  "/en/events": "/eventi",
  "/en/charity": "/sociale",
  "/en/contact": "/contatti",
};

/** Given current pathname, compute the equivalent path in the target language. */
export function switchLangPath(pathname: string, target: Lang): string {
  if (target === "en") {
    if (pathname.startsWith("/en")) return pathname;
    // Event detail: /eventi/$slug -> /en/events/$slug
    if (pathname.startsWith("/eventi/")) return "/en/events/" + pathname.slice("/eventi/".length);
    return IT_TO_EN_PATH[pathname] ?? "/en";
  }
  // target it
  if (!pathname.startsWith("/en")) return pathname;
  if (pathname.startsWith("/en/events/")) return "/eventi/" + pathname.slice("/en/events/".length);
  return EN_TO_IT_PATH[pathname] ?? "/";
}