import * as React from 'react';
import './ArticleCard.scss';
import { Talk } from "../../models/talk";
import { Post } from '../../models/post';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface ArticleCardProps {
  item: Post | Talk
}

export enum ArticleCardText {
  EXTERNAL_LINK = 'external link'
}

export const ArticleCard: React.FC<ArticleCardProps> = ({item}) => (
  <article className="ArticleCard">
    <section className="card-header">
      <h2>{item.title}</h2>
      <span className="date">{item.date}</span>
    </section>
    <section className="card-body">
      <p>{item.intro}</p>
    </section>
    <section className="card-footer">
      <div className="locale">{item.locale}</div>

      {item.external && (
        <div className="external">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" aria-label={ArticleCardText.EXTERNAL_LINK} />
        </div>
      )}
    </section>
  </article>
);
