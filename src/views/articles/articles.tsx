import * as React from 'react'
import Head from 'next/head'
import styles from './articles.module.scss'
import {SearchBar} from '@/components/SearchBar'
import {ArticleCard} from '@/components/ArticleCard'
import {Article} from '@/models/article'
import {Layout} from '@/components/Layout'
import {useTranslation} from "next-i18next";
import {calculateHrefLang} from "@/hooks/useHrefLang/useHrefLang";

interface ArticlesProps {
  articles: Article[]
}

export const Articles: React.FC<ArticlesProps> = ({articles = []}) => {
  const {t, i18n} = useTranslation('articles')
  const [filter, setFilter] = React.useState<string>('')
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([])
  const hrefLangs = calculateHrefLang(i18n.language, '/articles');
  const baseURL = process.env.NEXT_PUBLIC_URL;


  const handleFilterChange = (value: string) => {
    setFilter(value)
  }

  const articleIncludeText = (article: Article) => article.title
    .toLocaleLowerCase()
    .includes(filter.toLocaleLowerCase())

  const articleHasSelectedType = (article: Article) => selectedTypes.length === 0 || selectedTypes.includes(article.type)

  const matchFilters = (article: Article) => articleIncludeText(article) && articleHasSelectedType(article)

  const sortArticlesByDate = (first: Article, second: Article) => {
    const firstDate = new Date(first.date).getTime()
    const secondDate = new Date(second.date).getTime()
    if (firstDate < secondDate) {
      return -1
    } else if (firstDate === secondDate) {
      return 0
    } else {
      return 1
    }
  }

  const filteredArticles = React.useMemo(() => articles
      .filter(matchFilters)
    , [articles, filter, selectedTypes])

  console.log(hrefLangs)

  return (
    <Layout>
      <Head>
        <title>Adrián Ferrera - {t('title')}</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content={t('meta.description') ?? ''}/>
        <link rel="alternate" href={`${baseURL}/articles`} hrefLang="x-default"/>
        {hrefLangs.map((hrefLang) => (
          <link key={hrefLang.locale} hrefLang={hrefLang.locale} rel="alternate" href={`${baseURL}/${hrefLang.locale}${hrefLang.path}`}/>
        ))}
        <meta property="og:image" content="/images/profile.jpg"/>
      </Head>
      <SearchBar types={['Post', 'Talk']} onChangeSelectedTypes={setSelectedTypes} onChangeFilter={handleFilterChange}/>
      <section className={styles.articles}>
        <ul>
          {filteredArticles.sort(sortArticlesByDate).reverse().map((article) => (
            <li key={article.title}>
              <a
                href={article.link}
                target={article.external ? '_blank' : ''}
                rel="noreferrer"
              >
                <ArticleCard item={article}/>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Articles
