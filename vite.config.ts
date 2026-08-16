import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/* GitHub Pages ne sait pas réécrire les URL : une adresse profonde comme
   /portfolio ne correspond à aucun fichier. En servant une copie d'index.html
   sous le nom 404.html, l'application démarre quand même et affiche la bonne
   page, l'adresse restant intacte. */
function repliPages(): Plugin {
  let dossier = 'dist'
  return {
    name: 'repli-404-pages',
    apply: 'build',
    configResolved(config) {
      dossier = config.build.outDir
    },
    closeBundle() {
      copyFileSync(join(dossier, 'index.html'), join(dossier, '404.html'))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  /* Site de projet : tout est servi sous https://<compte>.github.io/extrapollet/ */
  base: '/extrapollet/',
  plugins: [react(), repliPages()],
})
