import { useEffect } from 'react'
import { useLocation } from 'react-router'

/* Remet la page en haut à chaque changement de « fiche ». */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}
