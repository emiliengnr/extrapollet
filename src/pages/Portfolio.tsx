import { useEffect, useState, type CSSProperties } from 'react'
import { portfolioGroupes, type Project } from '../data/projects'

/* Le cadre intérieur : vignette YouTube si disponible, sinon aplat de teinte. */
function Cadre({ p }: { p: Project }) {
  const style: CSSProperties = p.youtubeId
    ? { backgroundImage: `url(https://img.youtube.com/vi/${p.youtubeId}/mqdefault.jpg)` }
    : { backgroundColor: p.teinte }

  /* Recadrage des vidéos cinémascope : on zoome pour masquer les bandes noires. */
  if (p.youtubeId && p.recadrage) {
    style.backgroundSize = `${(p.recadrage * 100).toFixed(0)}%`
  }

  return (
    <div className="plaque-cadre">
      <div className="plaque-image" style={style}>
        {p.detail && <span className="plaque-categorie label">{p.detail}</span>}

        {p.youtubeId && (
          <span className="plaque-play" aria-hidden="true">
            <span className="triangle" />
          </span>
        )}
        {p.url && (
          <span className="plaque-play plaque-lien" aria-hidden="true">
            ↗
          </span>
        )}
        {p.aVenir && <span className="plaque-badge label">Bientôt</span>}

        <span className="plaque-bobine" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [actif, setActif] = useState<Project | null>(null)

  /* Fermeture au clavier + verrouillage du défilement quand le lecteur est ouvert */
  useEffect(() => {
    if (!actif) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActif(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [actif])

  return (
    <main className="page portfolio">
      <header className="page-tete apparition">
        <span className="label section-surtitre">Galerie · Réalisations 2017 — 2025</span>
        <h1 className="section-titre">Portfolio</h1>
        <div className="filet">
          <span className="losange" />
        </div>
      </header>

      {portfolioGroupes.map((groupe) => (
        <section className="galerie-groupe apparition-2" key={groupe.nom}>
          <div className="groupe-tete">
            <span className="label groupe-fiche">{groupe.fiche}</span>
            <h2 className="groupe-nom">{groupe.nom}</h2>
            <div className="fiche-filet" aria-hidden="true" />
          </div>

          <div className="galerie">
            {groupe.projets.map((p, i) => (
              <figure className="plaque" key={p.titre + p.annee + i}>
                {p.youtubeId ? (
                  <button
                    type="button"
                    className="plaque-action"
                    onClick={() => setActif(p)}
                    aria-label={`Lire la vidéo : ${p.titre} (${p.annee})`}
                  >
                    <Cadre p={p} />
                  </button>
                ) : p.url ? (
                  <a
                    className="plaque-action"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir : ${p.titre}`}
                  >
                    <Cadre p={p} />
                  </a>
                ) : (
                  <div className="plaque-action est-avenir">
                    <Cadre p={p} />
                  </div>
                )}
                <figcaption className="plaque-legende label">
                  {p.titre} — {p.annee}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      {/* Lecteur vidéo en lightbox — fond uni (aucun dégradé) */}
      {actif?.youtubeId && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${actif.titre} — ${actif.annee}`}
          onClick={() => setActif(null)}
        >
          <div className="lightbox-cadre cadre" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-tete">
              <span className="label">
                {actif.titre} — {actif.annee}
              </span>
              <button
                type="button"
                className="lightbox-fermer"
                onClick={() => setActif(null)}
                aria-label="Fermer le lecteur"
              >
                ✕
              </button>
            </div>
            <div className="lightbox-video">
              <iframe
                src={`https://www.youtube.com/embed/${actif.youtubeId}?autoplay=1&rel=0`}
                title={actif.titre}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
