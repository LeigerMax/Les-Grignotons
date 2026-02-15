# Gestion des couleurs de cobayes

## Nouvelles fonctionnalités

### 1. Schéma "Couleur" dans Sanity

Un nouveau type de document `color` a été ajouté pour gérer les couleurs travaillées des cobayes.

**Champs disponibles :**
- Nom de la couleur (ex: Doré, Argenté, Tricolore)
- Slug (URL)
- Catégorie (référence vers une catégorie de cobaye)
- Description
- Photo représentative
- Ordre d'affichage

### 2. Affichage automatique par catégorie

Les catégories suivantes affichent maintenant les **couleurs travaillées** au lieu des animaux :
- Péruviens (`peruviens`)
- Teddys suisses (`teddys-suisses`)
- Poils courts (`poils-courts`)
- Alpaga (`alpaga`)

Les autres catégories (lapins) continuent d'afficher les animaux normalement.

### 3. Navigation améliorée dans Sanity Studio

Le Studio Sanity a été restructuré avec une navigation organisée :

**🐾 Animaux** (menu déroulant)
- Tous les animaux
- 🏠 Reproducteurs
- ❤️ À l'adoption
- 🐰 Lapins
- 🐹 Cobayes
- ✅ Disponibles
- ⏳ Réservés
- 💚 Adoptés

**Autres sections :**
- 🏷️ Catégories
- 🎨 Couleurs travaillées
- 💬 Témoignages
- 📚 Articles & Conseils

### 4. Options de tri avancées

Le schéma `animal` propose maintenant plusieurs options de tri :
- Par catégorie A-Z
- Par espèce et catégorie
- Par type (Reproducteur/Adoption)
- Par statut d'adoption
- Par sexe
- Plus récent d'abord
- Plus ancien d'abord

## Utilisation

### Ajouter une couleur

1. Aller dans Sanity Studio
2. Cliquer sur "🎨 Couleurs travaillées"
3. Créer un nouveau document
4. Remplir :
   - Nom de la couleur
   - Générer le slug
   - Sélectionner la catégorie (Péruviens, Teddys suisses, etc.)
   - Ajouter une description (optionnel)
   - Uploader une photo
   - Définir l'ordre d'affichage

### Retrouver facilement des animaux

Utiliser la navigation du menu "🐾 Animaux" pour filtrer rapidement :
- Par espèce (Lapins/Cobayes)
- Par type (Reproducteur/Adoption)
- Par statut (Disponible/Réservé/Adopté)

Ou utiliser les options de tri dans chaque vue pour organiser par :
- Catégorie
- Date d'ajout
- Statut
- Sexe

## Développement

### Types TypeScript

Le nouveau type `Color` a été ajouté dans `src/types/sanity.ts`

### Queries

Nouvelles fonctions dans `src/lib/sanity/queries.ts` :
- `getColors()` - Récupère toutes les couleurs
- `getColorsByCategory(categorySlug)` - Couleurs d'une catégorie spécifique

### Composants

- `src/components/ui/ColorCard.tsx` - Carte d'affichage d'une couleur
