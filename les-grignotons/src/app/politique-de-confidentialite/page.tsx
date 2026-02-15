import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles (RGPD) du site Les Grignotons.',
  openGraph: {
    title: 'Politique de confidentialité - Les Grignotons',
    description: 'Politique de confidentialité et protection des données personnelles (RGPD) du site Les Grignotons.',
    url: getPageUrl('politique-de-confidentialite'),
    images: [SITE_CONFIG.defaultImages.og],
  },
  alternates: {
    canonical: getPageUrl('politique-de-confidentialite'),
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary to-beige text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-white-700">
            Protection de vos données personnelles conformément au RGPD
          </p>
        </div>
      </Section>

      {/* Contenu */}
      <Section className="bg-beige/50">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:text-gray-900 prose-a:text-primary">

          <p>
            La protection de vos données personnelles est une priorité pour Les Grignotons.
            La présente politique de confidentialité vous informe de la manière dont nous collectons,
            utilisons et protégeons vos données, conformément au{' '}
            <strong>Règlement Général sur la Protection des Données (UE) 2016/679</strong> (ci-après « RGPD »)
            et à la <strong>Loi belge du 30 juillet 2018</strong> relative à la protection des personnes physiques
            à l'égard des traitements de données à caractère personnel.
          </p>

          {/* 1. Responsable du traitement */}
          <h2>1. Responsable du traitement</h2>
          <p>Le responsable du traitement des données collectées sur ce site est :</p>
          <ul>
            <li><strong>Nom :</strong> Les Grignotons – {SITE_CONFIG.responsable}</li>
            <li><strong>Adresse :</strong> {SITE_CONFIG.address}</li>
            <li><strong>Numéro d'entreprise (BCE) :</strong> {SITE_CONFIG.bce}</li>
            <li><strong>E-mail :</strong> {SITE_CONFIG.email}</li>
            <li><strong>Téléphone :</strong> {SITE_CONFIG.phone}</li>
          </ul>

          {/* 2. Données collectées */}
          <h2>2. Données personnelles collectées</h2>
          <p>
            Dans le cadre de l'utilisation du Site et notamment via nos canaux de contact
            (formulaire de contact, e-mail, téléphone, WhatsApp), nous sommes susceptibles de collecter
            les données personnelles suivantes :
          </p>
          <ul>
            <li><strong>Nom et prénom</strong></li>
            <li><strong>Adresse e-mail</strong></li>
            <li><strong>Numéro de téléphone</strong></li>
            <li><strong>Contenu du message</strong> (description de votre demande)</li>
          </ul>
          <p>
            Ces données sont communiquées <strong>volontairement</strong> par l'utilisateur lorsqu'il nous contacte
            via l'un de nos canaux de communication directs :
          </p>
          <ul>
            <li><strong>E-mail</strong> : en nous écrivant à {SITE_CONFIG.email}</li>
            <li><strong>Téléphone</strong> : en nous appelant au {SITE_CONFIG.phone}</li>
            <li><strong>WhatsApp</strong> : en nous contactant via l'application WhatsApp</li>
          </ul>
          <p>
            Le Site ne comporte <strong>aucun formulaire de collecte de données</strong>. Toutes vos informations
            personnelles nous parviennent uniquement par ces canaux que vous choisissez d'utiliser.
            Aucune donnée n'est collectée de manière automatique à des fins de profilage ou de marketing.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-2">Note concernant WhatsApp</p>
            <p className="text-gray-700 text-sm">
              WhatsApp est un service exploité par <strong>Meta Platforms, Inc.</strong> Lorsque vous nous contactez
              via WhatsApp, vos données (numéro de téléphone, contenu des messages, métadonnées de communication)
              sont également traitées par Meta selon ses propres{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                conditions d'utilisation et politique de confidentialité
              </a>.
              Ce traitement par Meta est indépendant de notre responsabilité. Nous vous invitons à consulter
              la politique de confidentialité de WhatsApp avant d'utiliser ce canal.
              Si vous souhaitez éviter ce traitement par Meta, vous pouvez nous contacter par e-mail ou par téléphone.
            </p>
          </div>

          {/* 3. Finalités du traitement */}
          <h2>3. Finalités du traitement</h2>
          <p>Vos données personnelles sont traitées pour les finalités suivantes :</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Finalité</th>
                  <th className="text-left p-3 font-semibold">Base légale (art. 6 RGPD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Répondre à vos demandes de renseignements</td>
                  <td className="p-3">Consentement (art. 6.1.a)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gestion des demandes d'adoption</td>
                  <td className="p-3">Exécution de mesures précontractuelles (art. 6.1.b)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Suivi des portées et informations aux adoptants</td>
                  <td className="p-3">Intérêt légitime (art. 6.1.f)</td>
                </tr>
                <tr>
                  <td className="p-3">Respect des obligations légales liées à l'agrément HK</td>
                  <td className="p-3">Obligation légale (art. 6.1.c)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4. Durée de conservation */}
          <h2>4. Durée de conservation des données</h2>
          <p>Vos données personnelles sont conservées pour les durées suivantes :</p>
          <ul>
            <li>
              <strong>Demandes de contact :</strong> 1 an après le dernier échange, sauf si une adoption est conclue.
            </li>
            <li>
              <strong>Données liées à une adoption :</strong> 5 ans après l'adoption, conformément aux obligations
              légales de traçabilité et de suivi imposées par l'agrément HK.
            </li>
            <li>
              <strong>Données de suivi des portées :</strong> conservées aussi longtemps que nécessaire
              pour assurer le suivi sanitaire et généalogique des animaux.
            </li>
          </ul>
          <p>
            Au-delà de ces durées, vos données sont supprimées ou anonymisées de manière irréversible.
          </p>

          {/* 5. Destinataires des données */}
          <h2>5. Destinataires des données</h2>
          <p>
            Vos données personnelles sont destinées exclusivement au responsable du traitement
            (Les Grignotons) et ne sont <strong>jamais vendues, louées ou cédées à des tiers</strong> à des fins
            commerciales ou publicitaires.
          </p>
          <p>Vos données peuvent uniquement être communiquées :</p>
          <ul>
            <li>
              Aux <strong>autorités compétentes</strong> (Service du Bien-être animal du SPW), dans le cadre
              des contrôles liés à l'agrément HK, si la loi l'exige.
            </li>
            <li>
              À notre <strong>hébergeur</strong> (Vercel Inc.), dans la mesure strictement nécessaire
              au fonctionnement technique du Site. Vercel applique des mesures de sécurité conformes
              et est soumis au cadre EU-US Data Privacy Framework.
            </li>
          </ul>

          {/* 6. Transferts hors UE */}
          <h2>6. Transferts de données hors de l'Union européenne</h2>
          <p>
            Notre hébergeur Vercel peut traiter certaines données sur des serveurs situés aux États-Unis.
            Ces transferts sont encadrés par le <strong>EU-US Data Privacy Framework</strong> (décision d'adéquation
            de la Commission européenne du 10 juillet 2023), garantissant un niveau de protection adéquat
            de vos données personnelles.
          </p>

          {/* 7. Droits des utilisateurs */}
          <h2>7. Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi belge, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul>
            <li>
              <strong>Droit d'accès</strong> (art. 15 RGPD) : obtenir confirmation que vos données sont traitées
              et en recevoir une copie.
            </li>
            <li>
              <strong>Droit de rectification</strong> (art. 16 RGPD) : corriger des données inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit à l'effacement</strong> (art. 17 RGPD) : demander la suppression de vos données,
              sous réserve des obligations légales de conservation.
            </li>
            <li>
              <strong>Droit à la limitation du traitement</strong> (art. 18 RGPD) : demander la limitation
              du traitement dans certains cas.
            </li>
            <li>
              <strong>Droit à la portabilité</strong> (art. 20 RGPD) : recevoir vos données dans un format structuré
              et couramment utilisé.
            </li>
            <li>
              <strong>Droit d'opposition</strong> (art. 21 RGPD) : vous opposer au traitement de vos données
              fondé sur l'intérêt légitime.
            </li>
            <li>
              <strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment,
              sans affecter la licéité du traitement effectué avant ce retrait.
            </li>
          </ul>


          {/* 8. Réclamation */}
          <h2>8. Droit de réclamation</h2>
          <p>
            Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD,
            vous avez le droit d'introduire une réclamation auprès de l'<strong>Autorité de protection des données</strong> (APD) :
          </p>
          <ul>
            <li><strong>Autorité de protection des données (APD)</strong></li>
            <li>Rue de la Presse 35, 1000 Bruxelles</li>
            <li>
              Téléphone : <a href="tel:+3222744800">+32 2 274 48 00</a>
            </li>
            <li>
              E-mail : <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a>
            </li>
            <li>
              Site web : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer">
                www.autoriteprotectiondonnees.be
              </a>
            </li>
          </ul>

          {/* 9. Cookies */}
          <h2>9. Cookies et technologies similaires</h2>
          <p>
            Le Site n'utilise <strong>aucun cookie publicitaire, analytique ou de traçage</strong>.
          </p>
          <p>
            Seules des données techniques strictement nécessaires au fonctionnement du Site peuvent être stockées
            localement dans votre navigateur (par exemple, la liste de vos animaux favoris via le <em>localStorage</em>).
            Ces données restent exclusivement sur votre appareil et ne sont jamais transmises à nos serveurs.
          </p>

          {/* 10. Sécurité */}
          <h2>10. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
            vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation, notamment :
          </p>
          <ul>
            <li>Connexion sécurisée via <strong>HTTPS</strong> (chiffrement TLS)</li>
            <li>Accès aux données limité au seul responsable du traitement</li>
            <li>Hébergement chez un prestataire conforme aux standards de sécurité internationaux</li>
          </ul>

          {/* 11. Modification */}
          <h2>11. Modification de la présente politique</h2>
          <p>
            La présente politique de confidentialité peut être modifiée à tout moment pour se conformer
            aux évolutions légales ou réglementaires. Toute modification sera publiée sur cette page
            avec indication de la date de mise à jour. Nous vous invitons à consulter régulièrement
            cette page.
          </p>

          {/* 12. Contact */}
          <h2>12. Contact</h2>
          <p>
            Pour toute question relative à la présente politique de confidentialité ou à l'exercice de vos droits,
            vous pouvez nous contacter :
          </p>
          <ul>
            <li>Par e-mail : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></li>
            <li>Par téléphone : <a href="tel:+32476742193">{SITE_CONFIG.phone}</a></li>
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
