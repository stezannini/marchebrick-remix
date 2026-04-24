import marinaBrickense2026 from "@/assets/events/marina-brickense-2026.jpg";

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  category: "Eventi" | "Girovagando" | "Sociale";
  excerpt: string;
  image: string;
};

export const events: EventItem[] = [
  {
    slug: "marina-brickense-2026",
    title: "Marina BRICKense 2026",
    date: "18-19 Apr 2026",
    category: "Eventi",
    excerpt:
      "Marchebrick torna a Marina Palmense, che per l'occasione diventa Brickense: opere originali, concorso piccoli costruttori, area sfuso e tante attività con i mattoncini.",
    image: marinaBrickense2026,
  },
  {
    slug: "model-expo-italy-2026",
    title: "Model Expo Italy 2026",
    date: "7 Mar 2026",
    category: "Eventi",
    excerpt: "Torniamo a Verona con una grande esposizione di diorami e creazioni originali.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  },
  {
    slug: "italy-brick-expo-2025",
    title: "Italy Brick Expo 2025",
    date: "25 Ott 2025",
    category: "Girovagando",
    excerpt: "Il più grande evento dedicato ai mattoncini al Palazzo dei Congressi di Roma.",
    image: "https://images.unsplash.com/photo-1558877385-8c1c2dd0a395?w=800&q=80",
  },
  {
    slug: "borgo-magico-2025",
    title: "Borgo magico 2025",
    date: "28 Giu 2025",
    category: "Eventi",
    excerpt: "Una giornata tra borghi marchigiani e fantasia di mattoncini per tutte le età.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
  },
  {
    slug: "san-beach-in-brick-2025",
    title: "San Beach in Brick 2025",
    date: "24 Mag 2025",
    category: "Eventi",
    excerpt: "Mattoncini in spiaggia: due giorni di mare, costruzioni e divertimento.",
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&q=80",
  },
  {
    slug: "marina-brickense-2025",
    title: "Marina BRICKense 2025",
    date: "12 Apr 2025",
    category: "Eventi",
    excerpt: "L'appuntamento marchigiano per AFOL e famiglie: esposizioni, gioco libero e contest.",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&q=80",
  },
  {
    slug: "carnevale-fano-2025",
    title: "Carnevale di Mattoncini a Fano 2025",
    date: "23 Feb 2025",
    category: "Eventi",
    excerpt: "Tra coriandoli e brick: un Carnevale unico nel cuore di Fano.",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80",
  },
];