# Emilie Pollet — Portfolio (site_v1)

Site portfolio d'Emilie Pollet, productrice audiovisuelle.
Vite + React + TypeScript + React Router.

## Direction artistique — « Grand Budapest Fox »

Élégance symétrique et pastel (The Grand Budapest Hotel) × chaleur artisanale
automnale (Fantastic Mr. Fox). Le site évoque une maison de production fictive,
pleine d'archives et de souvenirs : papier imprimé puis scanné, cadres fins,
doubles bordures, sections symétriques, animations lentes et théâtrales.

- **Palette** : crème papier, rose vieux palace, moutarde rétro, bordeaux velours,
  brun renard, vert sauge, brun encre (voir `src/index.css`).
- **Typographie** : Jost (titres, ≈ Futura), Cormorant / EB Garamond (texte),
  Courier Prime (labels), Parisienne (marque).
- **À éviter** (respecté) : glassmorphism, néons cyberpunk, dégradés modernes.

## Pages

- `/` — Accueil : bobine d'ouverture (plan de film + bouton lecture) et fiches.
- `/a-propos` — Carnet ouvert : polaroïds + texte « Ça, c'est moi ».
- `/portfolio` — Mur d'archives : 9 réalisations encadrées (2021–2025).
- `/services` — 3 fiches dossier (Direction / Chargée / Assistanat de production).
- `/contact` — Fiche de coordonnées + bon de correspondance.

## Commandes

```bash
npm install      # dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production (vérifie aussi les types)
npm run preview  # prévisualise le build
```

## Remplacer les visuels

Les images sont pour l'instant suggérées en aplats de couleur (la maquette
n'étant pas fournie en fichiers). Pour les vrais visuels :

- **Portfolio** : remplacer le `<div className="plaque-image">` par une `<img>`
  dans `src/pages/Portfolio.tsx` ; les métadonnées sont dans `src/data/projects.ts`.
- **À propos** : remplacer les `polaroid-image` par de vraies photos.
- **Accueil** : remplacer le décor `.hero-scene` par une `<video>` ou une affiche.
