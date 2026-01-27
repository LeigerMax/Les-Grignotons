/**
 * Calcule l'âge d'un animal à partir de sa date de naissance
 * Retourne une chaîne formatée en français (ex: "6 mois", "1 an et 3 mois")
 */
export function calculateAge(birthDate: string): string {
  const birth = new Date(birthDate)
  const today = new Date()
  
  let years = today.getFullYear() - birth.getFullYear()
  let months = today.getMonth() - birth.getMonth()
  
  // Ajuster si le mois/jour n'est pas encore passé cette année
  if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
    years--
    months += 12
  }
  
  // Ajuster les mois si le jour n'est pas encore passé ce mois
  if (today.getDate() < birth.getDate()) {
    months--
  }
  
  // Formater la sortie
  if (years === 0 && months === 0) {
    return 'Moins d\'1 mois'
  } else if (years === 0) {
    return months === 1 ? '1 mois' : `${months} mois`
  } else if (months === 0) {
    return years === 1 ? '1 an' : `${years} ans`
  } else {
    const yearStr = years === 1 ? '1 an' : `${years} ans`
    const monthStr = months === 1 ? '1 mois' : `${months} mois`
    return `${yearStr} et ${monthStr}`
  }
}

/**
 * Retourne le symbole du sexe formaté avec emoji
 */
export function formatSex(sex: 'Male' | 'Femelle'): string {
  return sex === 'Male' ? '♂️ Mâle' : '♀️ Femelle'
}

/**
 * Retourne l'emoji du sexe uniquement
 */
export function getSexEmoji(sex: 'Male' | 'Femelle'): string {
  return sex === 'Male' ? '♂️' : '♀️'
}
