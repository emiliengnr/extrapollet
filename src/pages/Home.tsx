import { useState } from 'react'
import { Link } from 'react-router'

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
              {joue ? 'Moteur — ça tourne' : 'Clap · Séquence 01'}
            </p>
          </div>
        </div>

        <div className="hero-titre apparition-2">
          <p className="label hero-fonction">Coordination & production audiovisuelle</p>
          <h1 className="hero-accroche">
            Tenir un projet de la préparation à la post-production.
          </h1>
          <p className="hero-sous">
            Bienvenue dans les archives d'<em>Emilie Pollet</em> — coordination de
            projets, organisation de tournages et gestion d'équipes.
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
          <h3>Bachelor Production</h3>
          <p>Audiovisuel Production à l'ESIS Paris, après un Bac STMG option Cinéma.</p>
        </article>
        <article className="cadre fiche-intro apparition-2">
          <p className="label fiche-num">02</p>
          <h3>Sept expériences</h3>
          <p>Stages, service civique et postes en production et communication depuis 2021.</p>
        </article>
        <article className="cadre fiche-intro apparition-3">
          <p className="label fiche-num">03</p>
          <h3>Toute la chaîne</h3>
          <p>Plannings, ressources et livrables suivis de la préparation à la post-production.</p>
        </article>
      </section>
    </main>
  )
}
