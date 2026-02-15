import { Metadata } from 'next'
import { ArticlePageLayout, generateArticleMetadata } from '@/components/articles/ArticlePageLayout'
import { getPageUrl, SITE_CONFIG } from '@/lib/config/site'

const ARTICLE_SLUG = 'conseils-aux-adoptants-pour-les-cobayes'

export async function generateMetadata(): Promise<Metadata> {
  return generateArticleMetadata(ARTICLE_SLUG)
}

export default async function ConseilsCobayesPage() {
  return (
    <ArticlePageLayout
      slug={ARTICLE_SLUG}
      breadcrumbs={[
        { name: 'Accueil', url: SITE_CONFIG.url },
        { name: 'Conseils aux adoptants', url: getPageUrl('adoptants') },
        { name: 'Conseils pour les cobayes', url: getPageUrl(ARTICLE_SLUG) },
      ]}
      backButton={{
        href: '/adoptants',
        label: '← Conseils aux adoptants'
      }}
    />
  )
}
