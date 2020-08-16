import * as React from 'react';
import './ResourceCard.scss';
import { Resource } from "../../models/resource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { ArticleCardText } from "../ArticleCard/ArticleCard";

interface ResourceCardProps {
  resource: Resource
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => (
    <article className="ResourceCard" style={{backgroundImage: `url(${resource.image})`}}>
      <section className="card-header">

      </section>
      <section className="card-body">
      </section>
      <section className="card-footer">
        <h2>{resource.title}</h2>
        <span className="date">{resource.date}</span>
        {resource.external && (
          <div className="external">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" aria-label={ArticleCardText.EXTERNAL_LINK} />
          </div>
        )}
      </section>
    </article>
);
