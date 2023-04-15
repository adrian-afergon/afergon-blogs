import * as React from 'react'
import styles from './resources.module.scss'
import Link from 'next/link'
import {Layout} from '@/components/Layout'
import {Resource} from '@/lib/resources/domain/resource'
import {ResourceCard} from '@/components/ResourceCard'
import Head from "next/head";
import {useTranslation} from "next-i18next";

interface ResourcesProps {
  resources: Resource[]
}

export const Resources: React.FC<ResourcesProps> = ({resources = []}) => {
  const {t} = useTranslation('resources')
  return (
    <Layout>
      <Head>
        <title>Adrián Ferrera - {t('title')}</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content={t('meta.description') ?? ''}/>
        <meta property="og:image" content="/images/profile.jpg"/>
      </Head>
      <section className={styles.resources}>
        <ul>
          {resources &&
            resources.map((resource) => (
              <li key={resource.title}>
                <Link href={resource.link} target="_blank" rel="noreferrer">
                  <ResourceCard resource={resource}/>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Resources
