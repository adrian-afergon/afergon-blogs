import * as React from 'react'
import styles from './resources.module.scss'
import Link from 'next/link'
import {Layout} from '@/components/Layout'
import {Resource} from '@/lib/resources/domain/resource'
import {ResourceCard} from '@/components/ResourceCard'

interface ResourcesProps {
  resources: Resource[]
}

export const Resources: React.FC<ResourcesProps> = ({resources = []}) =>
  (
    <Layout>
      <section className={styles.resources}>
        <ul>
          {resources &&
            resources.map((resource) => (
              <li key={resource.title}>
                <Link href={resource.link}>
                  <a href={resource.link} target="_blank" rel="noreferrer">
                    <ResourceCard resource={resource}/>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  )

export default Resources
