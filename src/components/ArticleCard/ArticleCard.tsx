import * as React from 'react'
import styles from './ArticleCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Article } from '@/models/article'
import { LocaleTag } from '../LocaleTag'

export interface ArticleCardProps {
  item: Article
}

export const ArticleCardText = {
  EXTERNAL_LINK: 'external link',
  VIDEO_LINK: 'video link',
  SLIDES_LINK: 'slides link'
} as const

const formatDate = (dateTime: number) => {
  const date = new Date(dateTime)
  return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ item }) => (
    <article className={styles.ArticleCard}>
      <section className={styles.cardHeader}>
        <h2>{item.title}</h2>
        <span className={styles.date}>{formatDate(item.date)}</span>
      </section>
      <section className={styles.cardBody}>
        <p/>
      </section>
      <section className={styles.cardFooter}>
        <div className={styles.locales}>
        {
          item.locales
            ? item.locales.map(localeResource => <LocaleTag
              key={localeResource.link}>{localeResource.locale}</LocaleTag>)
            : <LocaleTag>{item.locale}</LocaleTag>

        }
        </div>
        {item.external && (
          <div className="external">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" aria-label={ArticleCardText.EXTERNAL_LINK}/>
          </div>
        )}

      </section>
    </article>
)
