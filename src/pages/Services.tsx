import { services } from '../data/projects'

export default function Services() {
  return (
    <main className="page services">
      <header className="page-tete apparition">
        <span className="label section-surtitre">Maison de production · Prestations</span>
        <h1 className="section-titre">Services</h1>
        <div className="filet">
          <span className="losange" />
        </div>
      </header>

      {/* Trois fiches type dossier, bords dentelés comme du papier découpé */}
      <div className="fiches">
        {services.map((s, i) => (
          <article
            key={s.titre}
            className={'fiche apparition' + (i === 1 ? '-2' : i === 2 ? '-3' : '')}
          >
            <span className="fiche-onglet label">{s.fiche}</span>
            <h2 className="fiche-titre">{s.titre}</h2>
            <div className="fiche-filet" aria-hidden="true" />
            <p className="fiche-texte">{s.texte}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
