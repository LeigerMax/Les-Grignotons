# Configuration des couleurs travaillées

## ✅ Modifications effectuées

### 1. Couleurs hardcodées
Les couleurs sont maintenant hardcodées dans le fichier `src/lib/data/colors.ts` :
- **Péruviens** : 7 couleurs
- **Teddy suisse** : 15 couleurs
- **Poils courts** : En construction
- **Alpaga** : En construction

### 2. Affichage automatique
Les pages `/categories/peruviens` et `/categories/teddys-suisses` affichent maintenant les couleurs au lieu des animaux.

### 3. Dossiers images créés
Structure créée dans `public/images/colors/` :
```
public/images/colors/
├── peruviens/
├── teddy-suisse/
└── README.md
```

## 🚀 Prochaines étapes

### 1. Créer les catégories dans Sanity (si elles n'existent pas)

```bash
cd sanity
node scripts/create-cobaye-categories.js
```

Ce script va créer les catégories :
- Péruviens
- Teddys suisses
- Poils courts
- Alpaga

### 2. Ajouter les images des couleurs

Placez vos photos dans les dossiers correspondants :

**Pour les Péruviens** (`public/images/colors/peruviens/`) :
- `creme-blanc-satin.jpg`
- `argente-blanc.jpg`
- `choco-rouge-blanc.jpg`
- `rouge.jpg`
- `noir.jpg`
- `rouan-bicolore.jpg`
- `lila-gold-safran.jpg`

**Pour les Teddy suisse** (`public/images/colors/teddy-suisse/`) :
- `agouti-argente.jpg`
- `agouti-citron.jpg`
- `tricolore.jpg`
- `noir.jpg`
- `noir-blanc.jpg`
- `creme.jpg`
- `lila.jpg`
- `rouge.jpg`
- `rouan-bicolore.jpg`
- `rouan-noir-creme.jpg`
- `choco.jpg`
- `choco-rouge.jpg`
- `tan-fox-loutre.jpg`
- `hymalayen.jpg`
- `blanc-yeux-noir.jpg`

### 3. Tester les pages

Accédez aux URLs suivantes :
- `http://localhost:3000/categories/peruviens` - Affiche les 7 couleurs
- `http://localhost:3000/categories/teddys-suisses` - Affiche les 15 couleurs
- `http://localhost:3000/categories/poils-courts` - Affiche "En construction"
- `http://localhost:3000/categories/alpaga` - Affiche "En construction"

## 📝 Pour ajouter des couleurs plus tard

### Pour Poils courts et Alpaga

Éditez le fichier `src/lib/data/colors.ts` et ajoutez les couleurs dans les tableaux correspondants :

```typescript
'poils-courts': [
  {
    name: 'Nom de la couleur',
    image: '/images/colors/poils-courts/nom-fichier.jpg',
    category: 'poils-courts'
  }
],
'alpaga': [
  {
    name: 'Nom de la couleur',
    image: '/images/colors/alpaga/nom-fichier.jpg',
    category: 'alpaga'
  }
]
```

N'oubliez pas de créer les dossiers et d'ajouter les images !

## ❌ Résolution du problème 404

Si vous avez une erreur 404 sur `/categories/peruviens` :

1. **Vérifier que la catégorie existe dans Sanity**
   - Aller dans Sanity Studio (`http://localhost:3333`)
   - Vérifier dans "🏷️ Catégories"
   - Créer manuellement ou exécuter le script ci-dessus

2. **Vérifier le slug**
   - Le slug doit être exactement `peruviens` (sans accent, en minuscules)
   - Même chose pour `teddys-suisses`, `poils-courts`, `alpaga`

3. **Rebuild Next.js**
   ```bash
   cd les-grignotons
   npm run build
   npm run dev
   ```

## 🎨 Format des images recommandé

- **Format** : JPG ou PNG
- **Taille** : Minimum 800x800px (carré ou 4:3)
- **Qualité** : Photos nettes, bien éclairées
- **Poids** : Optimisé, moins de 500KB par image
