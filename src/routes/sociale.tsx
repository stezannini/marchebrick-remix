import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/sociale")({
  head: () => ({
    meta: [
      { title: "Marchebrick per il sociale" },
      { name: "description", content: "Le iniziative benefiche e i progetti sociali del gruppo Marchebrick." },
      { property: "og:title", content: "Marchebrick per il sociale" },
      { property: "og:description", content: "Mattoncini, solidarietà e impegno sul territorio." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
      <Heart className="h-10 w-10 text-destructive" />
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Mattoncini per il sociale</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Crediamo che la passione possa fare la differenza. Per questo collaboriamo con associazioni, ospedali e scuole del territorio marchigiano per portare il sorriso dei mattoncini dove serve di più.
      </p>
      <p className="mt-4 text-muted-foreground">
        Vuoi proporci un progetto solidale? Scrivici dalla pagina contatti: ogni iniziativa è benvenuta.
      </p>
    </div>
  ),
});