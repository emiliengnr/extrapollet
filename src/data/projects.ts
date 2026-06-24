export interface Project {
  titre: string
  annee: string
  /* Niveau / contexte (ESIS, collège, commande…) */
  detail?: string
  /* Identifiant YouTube — ouvre le lecteur dans une lightbox */
  youtubeId?: string
  /* Lien externe (ex. Lumni) — ouvre dans un nouvel onglet */
  url?: string
  /* Teinte de repli quand il n'y a pas encore de visuel */
  teinte: string
  /* Projet annoncé, lien à venir */
  aVenir?: boolean
  /* Zoom sur la vignette (vidéos cinémascope à bandes noires incrustées) */
  recadrage?: number
}

export interface PortfolioGroupe {
  nom: string
  fiche: string
  projets: Project[]
}

/* Portfolio — archives organisées en trois dossiers, du plus récent au plus ancien. */
export const portfolioGroupes: PortfolioGroupe[] = [
  {
    nom: 'Projets professionnels',
    fiche: 'Dossier n°01',
    projets: [
      {
        titre: 'Histoire de réviser',
        annee: '2025',
        detail: 'Série · Lumni / France tv',
        url: 'https://www.lumni.fr/programme/histoire-de-reviser-avec-thibault-hycarius',
        teinte: 'var(--renard)',
      },
      { titre: "L'ombre d'une rencontre", annee: '2025', detail: 'Projet professionnel', aVenir: true, teinte: 'var(--bordeaux)' },
    ],
  },
  {
    nom: 'Nikon',
    fiche: 'Dossier n°02',
    projets: [
      { titre: 'Nikon', annee: '2025', detail: 'Commande', youtubeId: 'qxwXxk0i5_o', teinte: 'var(--sauge)' },
      { titre: 'Nikon', annee: '2024', detail: 'Commande', youtubeId: '4J1io10Bhhg', teinte: 'var(--moutarde)' },
    ],
  },
  {
    nom: "Projets d'école",
    fiche: 'Dossier n°03',
    projets: [
      { titre: 'Court-métrage', annee: '2024', detail: 'ESIS · 3ᵉ année', youtubeId: 'TqxK6kAECbQ', teinte: 'var(--bordeaux)', recadrage: 1.34 },
      { titre: 'Pub', annee: '2024', detail: 'ESIS · 3ᵉ année', youtubeId: 'YGwABBbpgBY', teinte: 'var(--rose)' },
      { titre: 'Shortcom', annee: '2024', detail: 'ESIS · 3ᵉ année', youtubeId: 'NZ73qUCrAmA', teinte: 'var(--renard)' },
      { titre: 'Court-métrage', annee: '2023', detail: 'ESIS · 2ᵉ année', youtubeId: 'Ddy-v2eo_Ww', teinte: 'var(--moutarde)', recadrage: 1.34 },
      { titre: 'Court-métrage', annee: '2023', detail: 'ESIS · 2ᵉ année', youtubeId: 'UFiJ8CmdM7k', teinte: 'var(--sauge)' },
      { titre: 'Court-métrage', annee: '2023', detail: 'ESIS · 2ᵉ année', youtubeId: '75LIJHWcjxI', teinte: 'var(--bordeaux)', recadrage: 1.34 },
      { titre: 'Fan film', annee: '2022', detail: 'ESIS · 2ᵉ année', youtubeId: 'MV9CtQfY1vg', teinte: 'var(--rose)', recadrage: 1.34 },
      { titre: 'Brainstorming', annee: '2022', detail: 'ESIS · 1ʳᵉ année', youtubeId: 'zJuQaxJX8W0', teinte: 'var(--renard)' },
      { titre: 'Bande-annonce', annee: '2021', detail: 'ESIS · 1ʳᵉ année', youtubeId: 'p0tbvPy4WzU', teinte: 'var(--moutarde)', recadrage: 1.34 },
      { titre: 'Court-métrage', annee: '2017', detail: '3ᵉ — Collège', youtubeId: 'E6FvxDrKVjM', teinte: 'var(--bordeaux)', recadrage: 1.34 },
    ],
  },
]

export interface Service {
  titre: string
  texte: string
  fiche: string
}

/* Services — fiches type dossier d'archive. */
export const services: Service[] = [
  {
    titre: 'Direction de production',
    fiche: 'Fiche n°01',
    texte:
      "Pilotage global du projet : budget, planning, équipes et logistique. Je garantis la faisabilité d'un film de sa genèse à sa livraison.",
  },
  {
    titre: 'Chargée de production',
    fiche: 'Fiche n°02',
    texte:
      'Coordination du quotidien : contrats, autorisations, suivi comptable et relations prestataires. La rigueur administrative au service de la création.',
  },
  {
    titre: 'Assistanat de production',
    fiche: 'Fiche n°03',
    texte:
      "Soutien opérationnel sur le terrain et en préparation. Organisation, repérages et gestion documentaire pour que rien ne soit laissé au hasard.",
  },
]

export interface NavItem {
  label: string
  to: string
  teinte: string
}

/* Menu — symétrique : deux entrées à gauche, deux à droite, marque au centre. */
export const navItems: NavItem[] = [
  { label: 'À propos', to: '/a-propos', teinte: 'var(--bordeaux)' },
  { label: 'Portfolio', to: '/portfolio', teinte: 'var(--moutarde)' },
  { label: 'Services', to: '/services', teinte: 'var(--sauge)' },
  { label: 'Contact', to: '/contact', teinte: 'var(--bordeaux)' },
]
