import { useState } from 'react'

export default function Contact() {
  const [envoye, setEnvoye] = useState(false)

  return (
    <main className="page contact">
      <header className="page-tete apparition">
        <span className="label section-surtitre">Correspondance · Bureau de production</span>
        <h1 className="section-titre">Contact</h1>
        <div className="filet">
          <span className="losange" />
        </div>
      </header>

      <div className="contact-grille">
        {/* Fiche de coordonnées, façon carton d'archive */}
        <aside className="cadre contact-coordonnees apparition-2">
          <p className="label contact-num">Fiche n°00 — Coordonnées</p>
          <h2 className="contact-titre">Écrivons votre prochain projet.</h2>
          <p className="contact-intro">
            Disponible pour des missions de direction, de chargée et d'assistanat de
            production. Parlez-moi de votre film.
          </p>
          <dl className="contact-liste">
            <div>
              <dt className="label">Courriel</dt>
              <dd>contact@emiliepollet.fr</dd>
            </div>
            <div>
              <dt className="label">Téléphone</dt>
              <dd>+33 6 00 00 00 00</dd>
            </div>
            <div>
              <dt className="label">Réseaux</dt>
              <dd>LinkedIn · Vimeo · Instagram</dd>
            </div>
          </dl>
        </aside>

        {/* Formulaire présenté comme un bon de commande dactylographié */}
        <form
          className="cadre contact-form apparition-3"
          onSubmit={(e) => {
            e.preventDefault()
            setEnvoye(true)
          }}
        >
          <p className="label contact-num">Bon de correspondance</p>

          <label className="champ">
            <span className="label">Nom</span>
            <input type="text" name="nom" required placeholder="Votre nom" />
          </label>

          <label className="champ">
            <span className="label">Courriel</span>
            <input type="email" name="email" required placeholder="vous@exemple.fr" />
          </label>

          <label className="champ">
            <span className="label">Projet</span>
            <input type="text" name="projet" placeholder="Court-métrage, pub, série…" />
          </label>

          <label className="champ">
            <span className="label">Message</span>
            <textarea name="message" rows={5} required placeholder="Quelques mots sur votre projet…" />
          </label>

          <button className="btn" type="submit" disabled={envoye}>
            {envoye ? 'Message déposé ✓' : 'Envoyer'}
          </button>
          {envoye && (
            <p className="contact-confirme label">
              Merci — votre message a bien été classé aux archives. Réponse sous 48 h.
            </p>
          )}
        </form>
      </div>
    </main>
  )
}
