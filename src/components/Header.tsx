import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navItems } from '../data/projects'

/* Menu type « fiche d'archives » : symétrique autour de la marque calligraphiée. */
export default function Header() {
  const [ouvert, setOuvert] = useState(false)
  const gauche = navItems.slice(0, 2)
  const droite = navItems.slice(2)

  const lien = (item: (typeof navItems)[number]) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) => 'nav-lien' + (isActive ? ' est-actif' : '')}
      style={{ ['--accent' as string]: item.teinte }}
      onClick={() => setOuvert(false)}
    >
      {item.label}
    </NavLink>
  )

  return (
    <header className="entete">
      <div className="entete-rangee">
        <nav className="nav-groupe nav-gauche">{gauche.map(lien)}</nav>

        <Link to="/" className="marque" onClick={() => setOuvert(false)}>
          <span className="marque-prenom">Emilie</span>
          <span className="marque-nom">Pollet</span>
        </Link>

        <nav className="nav-groupe nav-droite">{droite.map(lien)}</nav>

        <button
          className="nav-burger"
          aria-label="Ouvrir le menu"
          aria-expanded={ouvert}
          onClick={() => setOuvert((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu déroulant mobile, présenté comme une fiche dépliée */}
      <div className={'nav-mobile' + (ouvert ? ' est-ouvert' : '')}>
        {navItems.map(lien)}
      </div>
    </header>
  )
}
