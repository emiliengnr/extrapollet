export default function APropos() {
  return (
    <main className="page apropos">
      <header className="page-tete apparition">
        <span className="label section-surtitre">Maison de production · Dossier personnel</span>
        <h1 className="section-titre">À propos</h1>
        <div className="filet">
          <span className="losange" />
        </div>
      </header>

      {/* Carnet ouvert posé sur le bureau : polaroïds à gauche, texte à droite */}
      <article className="carnet cadre apparition-2">
        <div className="carnet-reliure" aria-hidden="true" />

        <div className="carnet-page carnet-gauche">
          <div className="polaroids">
            <figure className="polaroid polaroid-1">
              <span className="polaroid-image" style={{ backgroundColor: 'var(--sauge)' }} />
              <figcaption>Repérages — extérieur</figcaption>
            </figure>
            <figure className="polaroid polaroid-2">
              <span className="polaroid-image" style={{ backgroundColor: 'var(--rose)' }} />
              <figcaption>Sur le plateau</figcaption>
            </figure>
            <figure className="polaroid polaroid-3">
              <span className="polaroid-image" style={{ backgroundColor: 'var(--moutarde)' }} />
              <figcaption>Régie</figcaption>
            </figure>
            <figure className="polaroid polaroid-4">
              <span className="polaroid-image" style={{ backgroundColor: 'var(--renard)' }} />
              <figcaption>Tournage nature</figcaption>
            </figure>
          </div>
          <span className="fox" aria-hidden="true">🦊</span>
        </div>

        <div className="carnet-page carnet-droite">
          <h2 className="carnet-titre">Ça, c'est moi</h2>
          <p>
            J'ai su très tôt que je voulais évoluer dans l'audiovisuel, non pas à la
            réalisation, mais à la production pour accompagner un projet de sa genèse à
            sa distribution.
          </p>
          <p>
            Pour y arriver, j'ai fait un choix stratégique : acquérir des bases solides
            en gestion, droit et comptabilité avant de valider mon Bachelor en
            Production Audiovisuelle (Bac+3). Ce bagage m'a donné une vraie longueur
            d'avance.
          </p>
          <p>
            Je ne suis pas restée dans la théorie. J'ai produit 8 projets (publicités,
            courts-métrages) et accompli 4 stages. Ces expériences m'ont forgée à
            l'exigence du métier : je maîtrise la création de contrats, la gestion
            comptable, l'édition de documents clairs et la veille réglementaire.
          </p>
          <p className="carnet-signature">— Emilie</p>
        </div>
      </article>
    </main>
  )
}
