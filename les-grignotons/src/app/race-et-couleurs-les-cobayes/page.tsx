import { Metadata } from 'next'
import { ArticlePageLayout, generateArticleMetadata } from '@/components/articles/ArticlePageLayout'

const ARTICLE_SLUG = 'race-et-couleurs-les-cobayes'

export async function generateMetadata(): Promise<Metadata> {
  return generateArticleMetadata(ARTICLE_SLUG)
}

export default async function RaceEtCouleursCobayesPage() {
  return (
    <ArticlePageLayout slug={ARTICLE_SLUG} />
  )
}
