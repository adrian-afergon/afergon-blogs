import * as React from 'react';
import './ArticleCard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Article } from "../../models/article";
import { LocaleTag } from "../LocaleTag";

interface ArticleCardProps {
  item: Article
}

export enum ArticleCardText {
  EXTERNAL_LINK = 'external link',
  VIDEO_LINK = 'video link',
  SLIDES_LINK = 'slides link'
}

const formatDate = (date: Date) => {
  return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`
}

export const ArticleCard: React.FC<ArticleCardProps> = ({item}) => (
    <article className="ArticleCard">
      <section className="card-header">
        <h2>{item.title}</h2>
        <span className="date">{formatDate(item.date)}</span>
      </section>
      <section className="card-body">
        <p>{item.intro}</p>
      </section>
      <section className="card-footer">
        {
          item.locales
            ? item.locales.map(localeResource => <LocaleTag
              key={localeResource.link}>{localeResource.locale}</LocaleTag>)
            : <LocaleTag>{item.locale}</LocaleTag>

        }
        {/*{"video" in item && item.video && (*/}
        {/*  <div className="external">*/}
        {/*    <Link href={item.video}>*/}
        {/*      <a href={item.video} target="_blank">*/}
        {/*        Watch the video*/}
        {/*        <FontAwesomeIcon icon={faYoutube} size="xs" aria-label={ArticleCardText.VIDEO_LINK}/>*/}
        {/*      </a>*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*)}*/}
        {item.external && (
          <div className="external">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" aria-label={ArticleCardText.EXTERNAL_LINK}/>
          </div>
        )}

      </section>
    </article>
  );
