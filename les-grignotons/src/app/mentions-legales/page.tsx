import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Les Grignotons – Élevage familial agréé de lapins et cobayes en Belgique.',
  openGraph: {
    title: 'Mentions légales - Les Grignotons',
    description: 'Mentions légales du site Les Grignotons – Élevage familial agréé de lapins et cobayes en Belgique.',
    url: getPageUrl('mentions-legales'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  alternates: {
    canonical: getPageUrl('mentions-legales'),
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary to-beige text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mentions légales
          </h1>
          <p className="text-lg text-white-700">
            Informations légales relatives au site Les Grignotons
          </p>
        </div>
      </Section>

      {/* Contenu */}
      <Section className="bg-beige/50">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:text-gray-900 prose-a:text-primary">

          {/* 1. Éditeur du site */}
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site internet <strong>les-grignotons-elevage.vercel.app</strong> (ci-après « le Site ») est édité par :
          </p>
          <ul>
            <li><strong>Nom de l'élevage :</strong> Les Grignotons</li>
            <li><strong>Responsable de la publication :</strong> {SITE_CONFIG.responsable}</li>
            <li><strong>Adresse du siège :</strong> {SITE_CONFIG.address}</li>
            <li><strong>Numéro d'entreprise (BCE) :</strong> {SITE_CONFIG.bce}</li>
            <li><strong>E-mail :</strong> {SITE_CONFIG.email}</li>
            <li><strong>Téléphone :</strong> {SITE_CONFIG.phone}</li>
          </ul>

          {/* 2. Agrément et autorité de surveillance */}
          <h2>2. Agrément et bien-être animal</h2>
          <p>
            L'élevage Les Grignotons est un élevage agréé conformément à la législation belge en matière de bien-être animal.
          </p>
          <ul>
            <li><strong>Numéro d'agrément :</strong> {SITE_CONFIG.agrement}</li>
            <li>
              <strong>Autorité de surveillance :</strong> Service public de Wallonie (SPW) – Direction du Bien-être animal
              <br />
              <span className="text-sm text-gray-600">
                SPW Agriculture, Ressources naturelles et Environnement – Département du Développement, de la Ruralité et des Cours d'eau et du Bien-être animal
              </span>
            </li>
          </ul>
          <p>
            Cet agrément atteste du respect des normes d'hébergement, de soins et d'entretien des animaux,
            conformément à l'Arrêté royal du 27 avril 2007 et au Code wallon du Bien-être animal.
          </p>

          {/* 3. Hébergeur */}
          <h2>3. Hébergement du site</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>Vercel Inc.</strong></li>
            <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
            <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          </ul>

          {/* 4. Propriété intellectuelle */}
          <h2>4. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le Site (textes, photographies, illustrations, logos, vidéos, structure générale)
            est la propriété exclusive de Les Grignotons ou de ses partenaires et est protégé par le droit d'auteur
            (Livre XI du Code de droit économique belge) et le droit international de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du Site,
            quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'éditeur.
          </p>

          {/* 5. Responsabilité */}
          <h2>5. Limitation de responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir des informations aussi précises que possible sur le Site.
            Toutefois, il ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour de ces informations,
            qu'elles soient de son fait ou du fait de tiers partenaires.
          </p>
          <p>
            Le Site est un <strong>site vitrine</strong> : aucune vente directe en ligne n'est réalisée via ce site.
            Les adoptions sont gérées exclusivement par contact direct (téléphone, e-mail ou WhatsApp).
          </p>

          {/* 6. Liens hypertextes */}
          <h2>6. Liens hypertextes</h2>
          <p>
            Le Site peut contenir des liens hypertextes vers d'autres sites internet.
            L'éditeur ne dispose d'aucun moyen de contrôle du contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
          </p>

          {/* 7. Cookies */}
          <h2>7. Cookies</h2>
          <p>
            Le Site n'utilise pas de cookies à des fins publicitaires ou de traçage.
            Seuls des cookies techniques strictement nécessaires au fonctionnement du Site peuvent être utilisés
            (par exemple, mémorisation des favoris côté navigateur).
          </p>
          <p>
            Pour toute information complémentaire relative à la protection de vos données personnelles,
            veuillez consulter notre{' '}
            <a href="/politique-de-confidentialite">Politique de Confidentialité</a>.
          </p>

          {/* 8. Droit applicable */}
          <h2>8. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit belge.
            En cas de litige, et après tentative de résolution amiable, les tribunaux compétents
            de l'arrondissement judiciaire du Brabant Wallon seront seuls compétents.
          </p>

          {/* 9. Crédits */}
          <h2>9. Conception et réalisation du site</h2>
          <p>
            La conception, le design et le développement technique du présent site ont été réalisés par :
          </p>
          <ul>
            <li><strong>Allemeersch Maxime</strong></li>
            <li>Site web : <a href="https://github.com/LeigerMax/" target="_blank" rel="noopener noreferrer">https://github.com/LeigerMax/</a></li>
          </ul>
          <p>
            Le prestataire technique intervient uniquement dans la réalisation du site.
            L'<strong>éditeur du site (Les Grignotons – {SITE_CONFIG.responsable})</strong> reste
            seul responsable du contenu éditorial, des informations publiées, des photographies
            et de l'ensemble des données diffusées sur le Site.
          </p>

          {/* 10. Contact */}
          <h2>10. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
          </p>
          <ul>
            <li>Par e-mail : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></li>
            <li>Par téléphone : <a href={`tel:+32476742193`}>{SITE_CONFIG.phone}</a></li>
            <li>Via notre <a href="/contact">page de contact</a></li>
          </ul>

          <p className="text-sm text-gray-500 mt-8 border-t pt-4">
            Dernière mise à jour : février 2026
          </p>
        </div>
      </Section>
    </main>
  )
}
