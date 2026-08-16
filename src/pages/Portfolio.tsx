import { useEffect, useState, type CSSProperties } from 'react'
import { portfolioGroupes, type Project } from '../data/projects'

/* La photo du polaroïd : vignette YouTube si disponible, sinon aplat de teinte. */
function Photo({ p, numero }: { p: Project; numero: number }) {
  return (
    <div className="tirage-photo" style={{ backgroundColor: p.teinte }}>
      {p.youtubeId && (
        <img
          className="tirage-img"
          /* Recadrage des vidéos cinémascope : on zoome pour masquer les bandes noires. */
          style={{ '--zoom': p.recadrage ?? 1 } as CSSProperties}
          src={`https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`}
          alt={`Image du film ${p.titre}`}
          loading="lazy"
        />
      )}

      <span className="tirage-no label">N° {String(numero).padStart(2, '0')}</span>

      {p.youtubeId && (
        <span className="tirage-play" aria-hidden="true">
          <span className="triangle" />
        </span>
      )}
      {p.url && (
        <span className="tirage-play tirage-lien" aria-hidden="true">
          ↗
        </span>
      )}
      {p.aVenir && <span className="tirage-badge label">Bientôt</span>}
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
              <figure
                className={`tirage cadre${p.youtubeId || p.url ? '' : ' est-avenir'}`}
                key={p.titre + p.annee + i}
              >
                <Photo p={p} numero={i + 1} />

                {/* La plaque manuscrite du polaroïd — le titre porte le lien,
                    dont la zone cliquable est étendue à toute la vignette. */}
                <figcaption className="tirage-plaque">
                  <h3 className="tirage-titre">
                    {p.youtubeId ? (
                      <button
                        type="button"
                        className="tirage-action"
                        onClick={() => setActif(p)}
                        aria-label={`Lire la vidéo : ${p.titre} (${p.annee})`}
                      >
                        {p.titre}
                      </button>
                    ) : p.url ? (
                      <a
                        className="tirage-action"
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir : ${p.titre} (${p.annee})`}
                      >
                        {p.titre}
                      </a>
                    ) : (
                      p.titre
                    )}
                  </h3>
                  {p.detail && <p className="tirage-meta label">{p.detail}</p>}
                  <p className="tirage-annee">{p.annee}</p>
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
