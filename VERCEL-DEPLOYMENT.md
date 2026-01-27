# Configuration à faire sur Vercel

## 1. Variables d'environnement dans Vercel

Dans les paramètres de votre projet Vercel, ajoutez :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=arbgz41i
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://votre-domaine-vercel.vercel.app
```

(Remplacez `votre-domaine-vercel.vercel.app` par votre vrai domaine, puis mettez `https://les-grignotons.be` une fois le domaine custom configuré)

## 2. CORS Sanity

Allez sur https://www.sanity.io/manage/personal/project/arbgz41i/api

Ajoutez ces origines CORS :
- `https://votre-domaine-vercel.vercel.app` (votre domaine Vercel)
- `https://les-grignotons.be` (votre domaine custom)
- `https://*.vercel.app` (pour les preview deployments - optionnel)

Avec les options :
- ✅ Allow credentials

## 3. Domaine custom sur Vercel

1. Dans Vercel > Settings > Domains
2. Ajoutez `les-grignotons.be` et `www.les-grignotons.be`
3. Suivez les instructions pour configurer les DNS

## 4. Build Settings (normalement auto-détecté)

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## 5. Revalidation (déjà configuré dans le code)

Les pages sont déjà configurées avec ISR :
- Page d'accueil : 1 minute
- Adoption : 30 secondes
- Catégories : 1 minute
- Conseils : 5 minutes
- Témoignages : 1 minute

## 6. Webhooks Sanity (optionnel mais recommandé)

Pour revalider automatiquement quand vous modifiez le contenu dans Sanity :

1. Dans Sanity : https://www.sanity.io/manage/personal/project/arbgz41i/api/webhooks
2. Créez un webhook pointant vers : `https://votre-domaine.vercel.app/api/revalidate`
3. (Note : vous devrez créer cette route API si vous voulez la revalidation on-demand)
