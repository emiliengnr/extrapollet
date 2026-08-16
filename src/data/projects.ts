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
    titre: 'Coordination de production',
    fiche: 'Fiche n°01',
    texte:
      "Pilotage opérationnel du projet : plannings, ressources et livrables. Je fais le lien entre la direction et les équipes de production, du premier repérage à la livraison.",
  },
  {
    titre: 'Organisation de tournages',
    fiche: 'Fiche n°02',
    texte:
      "Logistique de plateau et coordination des équipes techniques et artistiques, doublées d'un suivi administratif rigoureux. Rien n'est laissé au hasard le jour J.",
  },
  {
    titre: 'Assistanat de production',
    fiche: 'Fiche n°03',
    texte:
      "Soutien opérationnel sur le terrain et en préparation. Organisation, repérages et gestion documentaire pour que rien ne soit laissé au hasard.",
  },
]

export interface Experience {
  periode: string
  poste: string
  structure: string
  missions: string[]
}

/* Parcours professionnel — du plus récent au plus ancien. */
export const experiences: Experience[] = [
  {
    periode: '2025 — Ajd.',
    poste: 'Chargée de coordination & production',
    structure: 'Fractal (association)',
    missions: [
      'Pilotage opérationnel de projets audiovisuels',
      'Coordination entre direction et équipes de production',
      'Suivi des plannings, ressources et livrables',
    ],
  },
  {
    periode: '2025 — Ajd.',
    poste: 'Chargée de production junior',
    structure: 'Tech 5 (association)',
    missions: [
      'Pilotage opérationnel de projets audiovisuels',
      'Coordination entre direction et équipes de production',
      'Suivi des plannings, ressources et livrables',
    ],
  },
  {
    periode: '2024 — 2025',
    poste: 'Chargée de communication (Service civique)',
    structure: 'La Source — Ville de Poissy',
    missions: [
      'Déploiement de stratégies de communication digitale',
      'Création de contenus et gestion des réseaux sociaux',
      'Valorisation de projets artistiques et culturels',
    ],
  },
  {
    periode: '2024',
    poste: 'Assistante de production',
    structure: 'Goldenia Studios',
    missions: [
      'Organisation logistique de tournages',
      'Coordination des équipes techniques et artistiques',
      'Suivi administratif de production',
    ],
  },
  {
    periode: '2023',
    poste: 'Community manager & chargée de casting (Stage)',
    structure: 'Smith & Smith',
    missions: [
      'Organisation et gestion de castings',
      'Accompagnement des talents',
      'Gestion des réseaux sociaux',
    ],
  },
  {
    periode: '2022 — 2023',
    poste: 'Community manager (Stage)',
    structure: 'Fedhubs',
    missions: [
      'Animation éditoriale des réseaux sociaux',
      'Production de contenus digitaux',
    ],
  },
  {
    periode: '2021',
    poste: 'Assistante de production & rédaction (Stage)',
    structure: 'Radio J',
    missions: [
      'Programmation des invités',
      "Participation à la rédaction et à la préparation d'émissions",
    ],
  },
]

export interface Formation {
  periode: string
  intitule: string
  etablissement: string
}

export const formations: Formation[] = [
  {
    periode: '2021 — 2024',
    intitule: 'Bachelor Audiovisuel Production',
    etablissement: 'ESIS Paris',
  },
  {
    periode: '2017 — 2021',
    intitule: 'Bac STMG — Communication & ressources humaines, option Cinéma',
    etablissement: 'Lycée Marguerite de Navarre',
  },
]

/* Compétences, outils et langues — les trois colonnes de la fiche métier. */
export const competences: string[] = [
  'Coordination de production audiovisuelle',
  'Organisation de tournages',
  'Gestion de projet',
  'Suivi logistique et administratif',
  'Management & gouvernance',
  'Production vidéo',
  'Communication digitale & contenus',
]

export const outils: string[] = [
  'Premiere Pro',
  'DaVinci Resolve',
  'Suite Adobe',
  'Adobe Express',
  'Canva',
  'Excel · PowerPoint',
  'Suite Google',
]

export const langues: string[] = [
  'Français — langue maternelle',
  'Anglais — courant (B2)',
  'Allemand — notions (A1)',
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
