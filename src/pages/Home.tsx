import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [joue, setJoue] = useState(false)

  return (
    <main className="page accueil">
      {/* Bobine d'ouverture — un plan de film présenté comme une plaque d'archive */}
      <section className="hero apparition">
        <p className="label hero-bobine">Bobine 01 — Accueil</p>

        <div className="hero-cadre">
          <div className="hero-plan">
            {/* Décor de tournage suggéré en aplats (aucun dégradé moderne) */}
            <div className="hero-scene" aria-hidden="true">
              <span className="scene-mur" />
              <span className="scene-fenetre" />
              <span className="scene-carton scene-carton-a" />
              <span className="scene-carton scene-carton-b" />
              <span className="scene-carton scene-carton-c" />
              <span className="scene-sol" />
            </div>

            <button
              className={'hero-play' + (joue ? ' est-actif' : '')}
              aria-label="Lire la bande démo"
              onClick={() => setJoue((v) => !v)}
            >
              <span className="triangle" />
            </button>

            <p className="hero-plaque label">
              {joue ? 'Lecture · bande démo' : 'Bande démo · 02:14'}
            </p>
          </div>
        </div>

        <div className="hero-titre apparition-2">
          <p className="label hero-fonction">Productrice audiovisuelle</p>
          <h1 className="hero-accroche">
            Accompagner un film de sa genèse à sa distribution.
          </h1>
          <p className="hero-sous">
            Bienvenue dans la maison de production d'<em>Emilie Pollet</em> —
            une collection d'archives, de souvenirs et de projets soignés.
          </p>
          <div className="hero-actions apparition-3">
            <Link to="/portfolio" className="btn">
              Voir le portfolio
            </Link>
            <Link to="/contact" className="lien-souligne">
              Travailler ensemble →
            </Link>
          </div>
        </div>
      </section>

      {/* Petites « fiches » d'introduction, très symétriques */}
      <section className="accueil-fiches">
        <article className="cadre fiche-intro apparition">
          <p className="label fiche-num">01</p>
          <h3>8 projets produits</h3>
          <p>Publicités et courts-métrages menés de la préparation au livrable.</p>
        </article>
        <article className="cadre fiche-intro apparition-2">
          <p className="label fiche-num">02</p>
          <h3>4 stages accomplis</h3>
          <p>Une expérience forgée à l'exigence des plateaux et des bureaux de production.</p>
        </article>
        <article className="cadre fiche-intro apparition-3">
          <p className="label fiche-num">03</p>
          <h3>Gestion & droit</h3>
          <p>Contrats, comptabilité et veille réglementaire maîtrisés de bout en bout.</p>
        </article>
      </section>
    </main>
  )
}
