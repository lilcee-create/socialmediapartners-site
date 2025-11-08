# Social Media Partners — site vitrine (starter)

Ce dépôt contient un site statique prêt à être mis en ligne pour **Social Media Partners** (agence de mise en relation Marques × Influenceurs).

## Structure
- `index.html` — page unique avec sections (services, marques, influenceurs, tarifs, inscription, FAQ, contact)
- `styles.css` — styles modernes, responsive, accessibles (support dark mode, focus visibles)
- `script.js` — menu mobile, calcul de commission, formulaire d'inscription (fallback localStorage)
- `assets/logo.svg` — logo vectoriel (maillons entrelacés)

## Lancement local
Ouvrez `index.html` dans votre navigateur (double‑clic). Tout fonctionne en statique.
Le formulaire enverra les données dans le stockage local (démo).

## Connecter un backend (optionnel)
Exposez un endpoint `POST /api/register` qui accepte `{ role, name, email, phone, consent, ts }` en JSON.
Réponse attendue : `200`/`201`.

Exemple minimal en Node.js/Express :
```js
import express from "express";
const app = express();
app.use(express.json());
app.post("/api/register", (req, res) => {
  // TODO: valider, enregistrer en base, envoyer un email, etc.
  console.log("New signup:", req.body);
  res.status(201).json({ ok: true });
});
app.listen(3000, () => console.log("API listening on http://localhost:3000"));
```

## Déploiement
- **Netlify / Vercel / GitHub Pages** : glissez‑déposez le dossier ou connectez le dépôt.
- Domaine personnalisé : configurez votre DNS pour pointer vers votre hébergeur.
- Sécurité & RGPD : mettez à jour l’email, le téléphone, l’adresse, les CGU/Confidentialité.

Bon lancement !
