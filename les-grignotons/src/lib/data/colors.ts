/**
 * Couleurs travaillées hardcodées par catégorie
 */

export interface HardcodedColor {
  name: string
  image: string
  category: string
}

export const COLORS_BY_CATEGORY: Record<string, HardcodedColor[]> = {
  'peruviens': [
    {
      name: 'Crème et blanc (satin)',
      image: '/images/colors/peruviens/creme-blanc-satin.jpg',
      category: 'peruviens'
    },
    {
      name: 'Argenté et blanc',
      image: '/images/colors/peruviens/argente-blanc.jpg',
      category: 'peruviens'
    },
    {
      name: 'Choco, rouge, blanc',
      image: '/images/colors/peruviens/choco-rouge-blanc.jpg',
      category: 'peruviens'
    },
    {
      name: 'Rouge',
      image: '/images/colors/peruviens/rouge.jpg',
      category: 'peruviens'
    },
    {
      name: 'Noir',
      image: '/images/colors/peruviens/noir.jpg',
      category: 'peruviens'
    },
    {
      name: 'Rouan et bicolore',
      image: '/images/colors/peruviens/rouan-bicolore.jpg',
      category: 'peruviens'
    },
    {
      name: 'Lila gold blanc et lila safran et blanc',
      image: '/images/colors/peruviens/lila-gold-safran.jpg',
      category: 'peruviens'
    }
  ],
  'teddys-suisses': [
    {
      name: 'Agouti argenté (argenté satin)',
      image: '/images/colors/teddy-suisse/agouti-argente.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Agouti citron (satin)',
      image: '/images/colors/teddy-suisse/agouti-citron.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Tricolore (tricolore satin)',
      image: '/images/colors/teddy-suisse/tricolore.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Noir (Noir satin)',
      image: '/images/colors/teddy-suisse/noir.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Noir et blanc (noir et blanc satin)',
      image: '/images/colors/teddy-suisse/noir-blanc.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Crème, crème et blanc (crème satin)',
      image: '/images/colors/teddy-suisse/creme.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Lila, lila Gold, lila safran, tan lila (satin)',
      image: '/images/colors/teddy-suisse/lila.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Rouge, rouge et blanc (satin)',
      image: '/images/colors/teddy-suisse/rouge.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Rouan [Bicolore tricolore] (satin)',
      image: '/images/colors/teddy-suisse/rouan-bicolore.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Rouan noir, crème et blanc',
      image: '/images/colors/teddy-suisse/rouan-noir-creme.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Choco [Choco/crème]',
      image: '/images/colors/teddy-suisse/choco.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Choco, rouge [blanc]',
      image: '/images/colors/teddy-suisse/choco-rouge.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Tan, fox, loutre',
      image: '/images/colors/teddy-suisse/tan-fox-loutre.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Hymalayen',
      image: '/images/colors/teddy-suisse/hymalayen.jpg',
      category: 'teddys-suisses'
    },
    {
      name: 'Blanc yeux noir (satin)',
      image: '/images/colors/teddy-suisse/blanc-yeux-noir.jpg',
      category: 'teddys-suisses'
    }
  ],
  'poils-courts': [],
  'alpaga': []
}

/**
 * Vérifie si une catégorie affiche des couleurs hardcodées
 */
export function hasHardcodedColors(categorySlug: string): boolean {
  return categorySlug in COLORS_BY_CATEGORY && COLORS_BY_CATEGORY[categorySlug].length > 0
}

/**
 * Récupère les couleurs hardcodées pour une catégorie
 */
export function getHardcodedColors(categorySlug: string): HardcodedColor[] {
  return COLORS_BY_CATEGORY[categorySlug] || []
}

/**
 * Vérifie si une catégorie est en construction
 */
export function isUnderConstruction(categorySlug: string): boolean {
  return ['poils-courts', 'alpaga'].includes(categorySlug)
}
