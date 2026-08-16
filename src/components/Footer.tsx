import { Link } from 'react-router'
import { navItems } from '../data/projects'

export default function Footer() {
  return (
    <footer className="pied">
      <div className="filet">
        <span className="losange" />
      </div>
      <p className="pied-marque">
        <span className="marque-prenom">Emilie</span>{' '}
        <span className="marque-nom">Pollet</span>
      </p>
      <p className="label pied-sous">Coordination & production audiovisuelle · Depuis 2021</p>
      <nav className="pied-nav">
        <Link to="/">Accueil</Link>
        {navItems.map((i) => (
          <Link key={i.to} to={i.to}>
            {i.label}
          </Link>
        ))}
      </nav>
      <p className="label pied-credit">
        © {new Date().getFullYear()} Emilie Pollet — Production audiovisuelle
      </p>
    </footer>
  )
}
