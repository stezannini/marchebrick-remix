import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/marchebrick-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/eventi", label: "Eventi" },
  { to: "/sociale", label: "Sociale" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Marchebrick" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "font-display rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="https://www.facebook.com/marchebrick/" aria-label="Facebook" target="_blank" rel="noreferrer" className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-primary">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/marchebrick/" aria-label="Instagram" target="_blank" rel="noreferrer" className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.youtube.com/@MarcheBrick" aria-label="YouTube" target="_blank" rel="noreferrer" className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-primary">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 md:hidden" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-secondary"
              activeProps={{ className: "font-display rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}