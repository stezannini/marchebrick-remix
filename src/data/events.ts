import marinaBrickense2026 from "@/assets/events/marina-brickense-2026.jpg";

type Localized = { it: string; en: string };

export type EventItem = {
  slug: string;
  title: string | Localized;
  date: string | Localized;
  category: "Eventi" | "Girovagando" | "Sociale";
  excerpt: string | Localized;
  image: string;
  description?: string | Localized;
  gallery?: string[];
};

export const events: EventItem[] = [
  {
    slug: "marina-brickense-2026",
    title: { it: "Marina BRICKense 2026", en: "Marina BRICKense 2026" },
    date: { it: "18-19 Apr 2026", en: "Apr 18-19, 2026" },
    category: "Eventi",
    excerpt: {
      it: "Marchebrick torna a Marina Palmense, che per l'occasione diventa Brickense: opere originali, concorso piccoli costruttori, area sfuso e tante attività con i mattoncini.",
      en: "Marchebrick returns to Marina Palmense, which for the occasion becomes Brickense: original works, young builders contest, loose brick area and lots of activities with bricks.",
    },
    image: marinaBrickense2026,
  },
  {
    slug: "model-expo-italy-2026",
    title: { it: "Model Expo Italy 2026", en: "Model Expo Italy 2026" },
    date: { it: "7 Mar 2026", en: "Mar 7, 2026" },
    category: "Eventi",
    excerpt: {
      it: "Torniamo a Verona con una grande esposizione di diorami e creazioni originali.",
      en: "We return to Verona with a great exhibition of dioramas and original creations.",
    },
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  },
  {
    slug: "italy-brick-expo-2025",
    title: { it: "Italy Brick Expo 2025", en: "Italy Brick Expo 2025" },
    date: { it: "25 Ott 2025", en: "Oct 25, 2025" },
    category: "Girovagando",
    excerpt: {
      it: "Il più grande evento dedicato ai mattoncini al Palazzo dei Congressi di Roma.",
      en: "The biggest brick-dedicated event at the Palazzo dei Congressi in Rome.",
    },
    image: "https://images.unsplash.com/photo-1558877385-8c1c2dd0a395?w=800&q=80",
  },
  {
    slug: "borgo-magico-2025",
    title: { it: "Borgo magico 2025", en: "Magic Village 2025" },
    date: { it: "28 Giu 2025", en: "Jun 28, 2025" },
    category: "Eventi",
    excerpt: {
      it: "Una giornata tra borghi marchigiani e fantasia di mattoncini per tutte le età.",
      en: "A day among Marche villages and brick imagination for all ages.",
    },
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
  },
  {
    slug: "san-beach-in-brick-2025",
    title: { it: "San Beach in Brick 2025", en: "San Beach in Brick 2025" },
    date: { it: "24 Mag 2025", en: "May 24, 2025" },
    category: "Eventi",
    excerpt: {
      it: "Mattoncini in spiaggia: due giorni di mare, costruzioni e divertimento.",
      en: "Bricks on the beach: two days of sea, builds and fun.",
    },
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&q=80",
  },
  {
    slug: "marina-brickense-2025",
    title: { it: "Marina BRICKense 2025", en: "Marina BRICKense 2025" },
    date: { it: "12 Apr 2025", en: "Apr 12, 2025" },
    category: "Eventi",
    excerpt: {
      it: "L'appuntamento marchigiano per AFOL e famiglie: esposizioni, gioco libero e contest.",
      en: "The Marche meeting point for AFOLs and families: exhibitions, free play and contests.",
    },
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&q=80",
  },
  {
    slug: "carnevale-fano-2025",
    title: { it: "Carnevale di Mattoncini a Fano 2025", en: "Brick Carnival in Fano 2025" },
    date: { it: "23 Feb 2025", en: "Feb 23, 2025" },
    category: "Eventi",
    excerpt: {
      it: "Tra coriandoli e brick: un Carnevale unico nel cuore di Fano.",
      en: "Between confetti and bricks: a unique Carnival in the heart of Fano.",
    },
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
  },
];

export function localized(value: string | Localized | undefined, lang: "it" | "en"): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.it;
}

/** Translate category label for display. */
export function categoryLabel(cat: EventItem["category"], lang: "it" | "en"): string {
  if (lang === "it") return cat;
  switch (cat) {
    case "Eventi": return "Events";
    case "Girovagando": return "On the road";
    case "Sociale": return "Charity";
  }
}