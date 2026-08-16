import { competences, experiences, formations, langues, outils } from '../data/projects'

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
            Professionnelle de la production audiovisuelle, j'ai de l'expérience en
            coordination de projets, organisation de tournages et gestion d'équipes.
          </p>
          <p>
            J'ai su très tôt que je voulais évoluer dans l'audiovisuel, non pas à la
            réalisation, mais à la production. J'ai donc commencé par une base solide en
            management et en communication au lycée, option Cinéma, avant de valider mon
            Bachelor Audiovisuel Production à l'ESIS Paris.
          </p>
          <p>
            Depuis, je pilote des projets pour deux associations, Fractal et Tech 5 :
            plannings, ressources, livrables et coordination entre la direction et les
            équipes. Je contribue à toutes les étapes d'une production, de la préparation
            à la post-production.
          </p>
          <p className="carnet-signature">— Emilie</p>
        </div>
      </article>

      {/* Le parcours, présenté comme un relevé d'archives daté */}
      <section className="dossier apparition-3">
        <div className="groupe-tete">
          <span className="label groupe-fiche">Dossier n°01</span>
          <h2 className="groupe-nom">Parcours</h2>
          <div className="fiche-filet" aria-hidden="true" />
        </div>

        <ol className="parcours">
          {experiences.map((e) => (
            <li className="parcours-entree" key={e.poste + e.structure}>
              <p className="parcours-date label">{e.periode}</p>
              <div>
                <h3 className="parcours-poste">{e.poste}</h3>
                <p className="parcours-structure">{e.structure}</p>
                <ul className="parcours-missions">
                  {e.missions.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="dossier apparition-3">
        <div className="groupe-tete">
          <span className="label groupe-fiche">Dossier n°02</span>
          <h2 className="groupe-nom">Formation</h2>
          <div className="fiche-filet" aria-hidden="true" />
        </div>

        <ol className="parcours">
          {formations.map((f) => (
            <li className="parcours-entree" key={f.intitule}>
              <p className="parcours-date label">{f.periode}</p>
              <div>
                <h3 className="parcours-poste">{f.intitule}</h3>
                <p className="parcours-structure">{f.etablissement}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="dossier apparition-3">
        <div className="groupe-tete">
          <span className="label groupe-fiche">Dossier n°03</span>
          <h2 className="groupe-nom">Compétences</h2>
          <div className="fiche-filet" aria-hidden="true" />
        </div>

        <div className="cartes-info">
          <article className="cadre carte-info">
            <p className="label carte-info-tete">Savoir-faire</p>
            <ul className="liste-pointee">
              {competences.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
          <article className="cadre carte-info">
            <p className="label carte-info-tete">Outils</p>
            <ul className="liste-pointee">
              {outils.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </article>
          <article className="cadre carte-info">
            <p className="label carte-info-tete">Langues</p>
            <ul className="liste-pointee">
              {langues.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
