import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { events } from "@/data/events";

const BASE_URL = "https://marchebrick.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/chi-siamo", changefreq: "monthly", priority: "0.8" },
          { path: "/eventi", changefreq: "weekly", priority: "0.9" },
          { path: "/sociale", changefreq: "monthly", priority: "0.7" },
          { path: "/contatti", changefreq: "yearly", priority: "0.6" },
          { path: "/en", changefreq: "weekly", priority: "0.9" },
          { path: "/en/about", changefreq: "monthly", priority: "0.7" },
          { path: "/en/events", changefreq: "weekly", priority: "0.8" },
          { path: "/en/charity", changefreq: "monthly", priority: "0.6" },
          { path: "/en/contact", changefreq: "yearly", priority: "0.5" },
        ];

        const eventEntries: SitemapEntry[] = events.flatMap((e) => [
          { path: `/eventi/${e.slug}`, changefreq: "monthly", priority: "0.7" },
          { path: `/en/events/${e.slug}`, changefreq: "monthly", priority: "0.6" },
        ]);

        const entries = [...staticPaths, ...eventEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});