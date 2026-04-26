export type Lang = "it" | "en";

export const translations = {
  // Header / Nav
  nav: {
    home: { it: "Home", en: "Home" },
    about: { it: "Chi siamo", en: "About" },
    events: { it: "Eventi", en: "Events" },
    social: { it: "Sociale", en: "Charity" },
    contact: { it: "Contatti", en: "Contact" },
  },
  // Footer
  footer: {
    tagline: {
      it: "Gruppo di appassionati di mattoncini delle Marche. Eventi, esposizioni e iniziative sociali in tutta Italia.",
      en: "A group of brick enthusiasts from the Marche region. Events, exhibitions and charity initiatives across Italy.",
    },
    explore: { it: "Esplora", en: "Explore" },
    follow: { it: "Seguici", en: "Follow us" },
    rights: { it: "Tutti i diritti riservati.", en: "All rights reserved." },
  },
  // Home page
  home: {
    metaTitle: {
      it: "Marchebrick — Eventi e passione per i mattoncini nelle Marche",
      en: "Marchebrick — Brick events and passion in the Marche region",
    },
    metaDesc: {
      it: "Scopri Marchebrick: il gruppo marchigiano di appassionati di mattoncini. Eventi, esposizioni e iniziative sociali.",
      en: "Discover Marchebrick: the brick enthusiasts group from Marche. Events, exhibitions and charity initiatives.",
    },
    badgeCommunity: { it: "Community AFOL · Marche", en: "AFOL Community · Marche" },
    badgeRlug: { it: "RLUG · Recognized LEGO® User Group", en: "RLUG · Recognized LEGO® User Group" },
    heroTitle: {
      it: "Costruiamo emozioni, un mattoncino alla volta.",
      en: "Building emotions, one brick at a time.",
    },
    heroSubtitle: {
      it: "Marchebrick riunisce appassionati di mattoncini delle Marche e d'Italia: eventi, esposizioni, contest e iniziative per il sociale.",
      en: "Marchebrick brings together brick enthusiasts from Marche and across Italy: events, exhibitions, contests and charity initiatives.",
    },
    ctaEvents: { it: "Scopri gli eventi", en: "Discover events" },
    ctaAbout: { it: "Chi siamo", en: "About us" },
    pillarEventsTitle: { it: "Eventi & Esposizioni", en: "Events & Exhibitions" },
    pillarEventsText: {
      it: "Organizziamo e partecipiamo a manifestazioni in tutta Italia.",
      en: "We organize and take part in events all over Italy.",
    },
    pillarCommunityTitle: { it: "La nostra community", en: "Our community" },
    pillarCommunityText: {
      it: "AFOL, famiglie e curiosi: il mattoncino unisce tutte le età.",
      en: "AFOLs, families and the curious: bricks unite all ages.",
    },
    pillarSocialTitle: { it: "Marchebrick per il sociale", en: "Marchebrick for charity" },
    pillarSocialText: {
      it: "Iniziative benefiche e progetti per il territorio marchigiano.",
      en: "Charity initiatives and projects for the Marche region.",
    },
    latestTitle: { it: "Ultime news", en: "Latest news" },
    latestSubtitle: {
      it: "Gli eventi più recenti della community Marchebrick.",
      en: "The most recent events of the Marchebrick community.",
    },
    allEvents: { it: "Tutti gli eventi", en: "All events" },
    ctaTitle: { it: "Vuoi esporre con noi?", en: "Want to exhibit with us?" },
    ctaText: {
      it: "Sei un AFOL o un gruppo di appassionati? Unisciti ai nostri eventi e porta le tue creazioni davanti a un pubblico entusiasta.",
      en: "Are you an AFOL or a group of enthusiasts? Join our events and bring your creations before an enthusiastic audience.",
    },
    ctaButton: { it: "Contattaci", en: "Contact us" },
  },
  // About page
  about: {
    metaTitle: { it: "Chi siamo — Marchebrick", en: "About — Marchebrick" },
    metaDesc: {
      it: "La storia, la mission e i valori del gruppo Marchebrick: appassionati di mattoncini delle Marche.",
      en: "The story, mission and values of Marchebrick: brick enthusiasts from the Marche region.",
    },
    eyebrow: { it: "Chi siamo", en: "About us" },
    title: { it: "Una passione che unisce le Marche", en: "A passion that unites the Marche region" },
    intro: {
      it: "Marchebrick è la community di riferimento nelle Marche per tutti gli appassionati di mattoncini LEGO® (AFOL). Uniamo creatività, divertimento e condivisione per trasformare una passione in esperienze coinvolgenti per tutte le età. Organizziamo eventi, esposizioni e attività interattive dove fantasia e ingegno prendono vita: dai grandi diorami alle costruzioni dal vivo, ogni occasione è pensata per stupire, ispirare e far partecipare.\n\n\nMarchebrick è più di un’associazione... è un punto di incontro per chi ama costruire, immaginare e condividere.\n\n\nEntra anche tu nel nostro mondo… e inizia a costruire con noi!",
      en: "Marchebrick is the leading community in the Marche region for all LEGO® brick enthusiasts (AFOL). We combine creativity, fun and sharing to turn a passion into engaging experiences for all ages. We organize events, exhibitions and interactive activities where imagination and ingenuity come to life: from large dioramas to live builds, every occasion is designed to amaze, inspire and involve.\n\n\nMarchebrick is more than an association... it is a meeting point for those who love to build, imagine and share.\n\n\nJoin our world too… and start building with us!",
    },
    missionTitle: { it: "MISSION", en: "MISSION" },
    missionText: {
      it: "Crediamo nel valore educativo del Gioco, e nella forza della collaborazione: per questo promuoviamo iniziative che stimolano la creatività, la socializzazione e l'apprendimento, coinvolgendo famiglie, scuole e appassionati.",
      en: "We believe in the educational value of Play and in the power of collaboration: for this reason we promote initiatives that foster creativity, socialization and learning, involving families, schools and enthusiasts.",
    },
    valuesTitle: { it: "VALORI", en: "VALUES" },
    valuesText: {
      it: "Comunità, creatività, condivisione e impegno verso il territorio: questi sono i pilastri che ci guidano nella realizzazione di ogni evento.",
      en: "Community, creativity, sharing and commitment to our region: these are the pillars that guide us in creating every event.",
    },
    boardTitle: { it: "Consiglio Direttivo", en: "Board of Directors" },
    boardIntro1: {
      it: "Il Consiglio Direttivo è l’organo che guida e coordina le attività di Marchebrick, promuovendo iniziative, eventi e progetti per la crescita dell’associazione. Il suo mandato dura 3 anni.",
      en: "The Board of Directors is the body that leads and coordinates Marchebrick's activities, promoting initiatives, events and projects for the growth of the association. Its mandate lasts 3 years.",
    },
    boardIntro2: {
      it: "Quello attuale è stato eletto dall’Assemblea dei soci del 27/01/2026, ed è così composto:",
      en: "The current Board was elected by the members' Assembly on 27/01/2026, and is composed as follows:",
    },
    rolePresident: { it: "Presidente", en: "President" },
    roleVice: { it: "Vicepresidente", en: "Vice President" },
    roleSecretary: { it: "Segretario", en: "Secretary" },
    roleTreasurer: { it: "Tesoriere", en: "Treasurer" },
    roleAmbassador: { it: "Ambassador", en: "Ambassador" },
    boardOutro: {
      it: "Tutte le cariche sono svolte a titolo volontario e gratuito, nel rispetto dei valori di condivisione, partecipazione e passione che caratterizzano Marchebrick.",
      en: "All roles are carried out on a voluntary and unpaid basis, in line with the values of sharing, participation and passion that define Marchebrick.",
    },
    galateoTitle: { it: "Galateo dell’associazione", en: "Association code of conduct" },
    galateoSubtitle: { it: "(linee guida e codice di condotta)", en: "(guidelines and code of conduct)" },
    galateoText: {
      it: "Marchebrick si basa su rispetto, collaborazione e responsabilità condivisa.\nCi aspettiamo che ogni membro contribuisca in modo positivo alla community, mantenendo un comportamento corretto, inclusivo e costruttivo verso tutti.\n\nDurante attività ed eventi, è richiesto spirito di squadra, puntualità e affidabilità, nel rispetto dei ruoli e dell’organizzazione. Ogni partecipante è invitato a collaborare attivamente, supportare gli altri e rappresentare la community in modo professionale verso il pubblico e gli organizzatori.\n\nNon sono tollerati comportamenti offensivi, discriminatori o che possano danneggiare la community o i suoi membri.\n\nFar parte di Marchebrick significa condividere valori, passione e impegno nel costruire esperienze positive per tutti.",
      en: "Marchebrick is based on respect, collaboration and shared responsibility.\nWe expect every member to contribute positively to the community, maintaining correct, inclusive and constructive behavior towards everyone.\n\nDuring activities and events, team spirit, punctuality and reliability are required, with respect for roles and organization. Each participant is invited to actively collaborate, support others and represent the community professionally towards the public and organizers.\n\nOffensive or discriminatory behavior, or anything that may harm the community or its members, will not be tolerated.\n\nBeing part of Marchebrick means sharing values, passion and commitment to building positive experiences for everyone.",
    },
  },
  // Events page
  events: {
    metaTitle: { it: "Eventi — Marchebrick", en: "Events — Marchebrick" },
    metaDesc: {
      it: "Tutti gli eventi e le esposizioni di Marchebrick: passati, presenti e futuri.",
      en: "All Marchebrick events and exhibitions: past, present and future.",
    },
    eyebrow: { it: "Eventi", en: "Events" },
    title: { it: "Tutti i nostri appuntamenti", en: "All our events" },
    subtitle: {
      it: "Esposizioni, fiere, raduni e iniziative sociali. Filtra per categoria.",
      en: "Exhibitions, fairs, gatherings and charity initiatives. Filter by category.",
    },
    catAll: { it: "Tutti", en: "All" },
    catEvents: { it: "Eventi", en: "Events" },
    catTravel: { it: "Girovagando", en: "On the road" },
    catSocial: { it: "Sociale", en: "Charity" },
    backToEvents: { it: "← Torna agli eventi", en: "← Back to events" },
    notFoundTitle: { it: "Evento non trovato", en: "Event not found" },
    notFoundText: {
      it: "L'evento che cerchi non esiste o è stato rimosso.",
      en: "The event you are looking for does not exist or has been removed.",
    },
    notFoundCta: { it: "Torna agli eventi", en: "Back to events" },
    errorTitle: { it: "Qualcosa è andato storto", en: "Something went wrong" },
    galleryTitle: { it: "Galleria", en: "Gallery" },
    photoAlt: { it: "foto", en: "photo" },
  },
  // Social page
  social: {
    metaTitle: { it: "Marchebrick per il sociale", en: "Marchebrick for charity" },
    metaDesc: {
      it: "Le iniziative benefiche e i progetti sociali del gruppo Marchebrick.",
      en: "The charity initiatives and social projects of the Marchebrick group.",
    },
    title: { it: "Mattoncini per il sociale", en: "Bricks for charity" },
    p1: {
      it: "Crediamo che la passione possa fare la differenza. Per questo collaboriamo con associazioni, ospedali e scuole del territorio marchigiano per portare il sorriso dei mattoncini dove serve di più.",
      en: "We believe that passion can make a difference. That's why we collaborate with associations, hospitals and schools in the Marche region to bring the smile of bricks where it is needed most.",
    },
    p2: {
      it: "Vuoi proporci un progetto solidale? Scrivici dalla pagina contatti: ogni iniziativa è benvenuta.",
      en: "Want to propose a charity project? Write to us from the contact page: every initiative is welcome.",
    },
  },
  // Contact page
  contact: {
    metaTitle: { it: "Contatti — Marchebrick", en: "Contact — Marchebrick" },
    metaDesc: {
      it: "Contatta il gruppo Marchebrick per eventi, collaborazioni o per esporre con noi.",
      en: "Contact the Marchebrick group for events, collaborations or to exhibit with us.",
    },
    eyebrow: { it: "Contatti", en: "Contact" },
    title: { it: "Parliamone insieme.", en: "Let's talk." },
    subtitle: {
      it: "Per organizzare eventi, esporre con noi o proporre collaborazioni, scrivici: ti risponderemo al più presto.",
      en: "To organize events, exhibit with us or propose collaborations, write to us: we will reply as soon as possible.",
    },
    email: { it: "Email", en: "Email" },
    where: { it: "Dove siamo", en: "Where we are" },
    whereText: { it: "Regione Marche, Italia", en: "Marche Region, Italy" },
    name: { it: "Nome", en: "Name" },
    message: { it: "Messaggio", en: "Message" },
    send: { it: "Invia messaggio", en: "Send message" },
    sentTitle: { it: "Messaggio inviato!", en: "Message sent!" },
    sentText: { it: "Ti risponderemo al più presto.", en: "We will reply as soon as possible." },
  },
} as const;

export function t(key: string, lang: Lang): string {
  const parts = key.split(".");
  let cur: any = translations;
  for (const p of parts) {
    cur = cur?.[p];
    if (cur === undefined) return key;
  }
  if (cur && typeof cur === "object" && lang in cur) return cur[lang];
  return key;
}