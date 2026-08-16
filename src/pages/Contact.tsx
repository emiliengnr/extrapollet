/* Pictogrammes au trait, dessinés comme les filets du reste du site. */
function IconeCourriel() {
  return (
    <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  )
}

function IconeLinkedIn() {
  return (
    <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconeInstagram() {
  return (
    <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

export default function Contact() {
  return (
    <main className="page contact">
      <header className="page-tete apparition">
        <span className="label section-surtitre">Correspondance · Bureau de production</span>
        <h1 className="section-titre">Contact</h1>
        <div className="filet">
          <span className="losange" />
        </div>
      </header>

      {/* Fiche de coordonnées, façon carton d'archive */}
      <aside className="cadre contact-coordonnees apparition-2">
        <p className="label contact-num">Coordonnées</p>
        <h2 className="contact-titre">Écrivons votre prochain projet.</h2>
        <p className="contact-intro">
          Disponible pour des missions de coordination, de production et de
          communication audiovisuelle. Parlez-moi de votre projet.
        </p>
        <dl className="contact-liste">
          <div>
            <dt className="label">Courriel</dt>
            <dd>
              <a className="contact-lien" href="mailto:e.pollet@icloud.com">
                <IconeCourriel />
                e.pollet@icloud.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="label">Réseaux</dt>
            <dd className="contact-reseaux">
              <a
                className="contact-lien"
                href="https://www.linkedin.com/in/emilie-pollet-232494214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconeLinkedIn />
                LinkedIn
              </a>
              <a
                className="contact-lien"
                href="https://www.instagram.com/itsemilieplt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconeInstagram />
                Instagram
              </a>
            </dd>
          </div>
        </dl>
      </aside>
    </main>
  )
}
