import * as React from 'react'
import styles from './ResourceCard.module.scss'
import {Resource} from '../../models/resource'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {ArticleCardText} from '../ArticleCard/ArticleCard'

interface ResourceCardProps {
  resource: Resource
}

export const ResourceCard: React.FC<ResourceCardProps> = ({resource}) => (
  <article className={styles.ResourceCard} style={{backgroundImage: `url(${resource.image})`}}>
    <section className={styles.cardHeader}>

    </section>
    <section className={styles.cardBody}>
    </section>
    <section className={styles.cardFooter}>
      <h2>{resource.title}</h2>
      <span className={styles.date}>{resource.date.toString()}</span>
      {resource.external && (
        <div className={styles.external}>
          <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" aria-label={ArticleCardText.EXTERNAL_LINK}/>
        </div>
      )}
    </section>
  </article>
)
