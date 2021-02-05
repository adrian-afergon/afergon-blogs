import * as React from 'react';
import './resources.scss';
import Link from 'next/link';
import { Layout } from '../../src/components/Layout';
import { RepositoryContext } from '../../src/contexts/repositories.context';
import { Resource } from '../../src/models/resource';
import { ResourceCard } from '../../src/components/ResourceCard';

export const Resources = () => {
  const [resources, setResources] = React.useState<Resource[]>([]);
  const { resourcesRepository } = React.useContext(RepositoryContext);

  React.useEffect(() => {
    resourcesRepository.getResources().then(setResources);
  });

  return (
    <Layout>
      <section className="resources">
        <ul>
          {resources &&
            resources.map((resource) => (
              <li key={resource.title}>
                <Link href={resource.link}>
                  <a href={resource.link} target="_blank" rel="noreferrer">
                    <ResourceCard resource={resource} />
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Resources;
