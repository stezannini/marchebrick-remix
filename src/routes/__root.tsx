import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marchebrick — Mattoncini, eventi e passione nelle Marche" },
      { name: "description", content: "Marchebrick è il gruppo marchigiano di appassionati di mattoncini: eventi, esposizioni e iniziative sociali in tutta Italia." },
      { name: "author", content: "Marchebrick" },
      { property: "og:title", content: "Marchebrick — Mattoncini, eventi e passione nelle Marche" },
      { property: "og:description", content: "Marchebrick è il gruppo marchigiano di appassionati di mattoncini: eventi, esposizioni e iniziative sociali in tutta Italia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Marchebrick — Mattoncini, eventi e passione nelle Marche" },
      { name: "twitter:description", content: "Marchebrick è il gruppo marchigiano di appassionati di mattoncini: eventi, esposizioni e iniziative sociali in tutta Italia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11831100-deb0-49ed-ae8c-489534f924c4/id-preview-1b65de5d--f188314e-556b-401c-962a-eb4a4513f5b8.lovable.app-1776704292162.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11831100-deb0-49ed-ae8c-489534f924c4/id-preview-1b65de5d--f188314e-556b-401c-962a-eb4a4513f5b8.lovable.app-1776704292162.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
