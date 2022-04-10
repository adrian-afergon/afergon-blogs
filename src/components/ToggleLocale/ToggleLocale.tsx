import * as React from 'react'
import styles from './ToggleLocale.module.scss'
import { LocaleResource } from '../../models/locale-resource'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ToggleLocaleProps {
  locales: LocaleResource[]
}

export const ToggleLocale: React.FC<ToggleLocaleProps> = ({
  locales
}) => {
  const { asPath } = useRouter()
  const isActive = (link: string) => link === asPath
  const calculateClassNames = (link: string) => isActive(link) ? styles.active : ''

  return (
    <div className={styles.ToggleLocale}>
      {
        locales.map(localeResource =>
          <Link
            key={localeResource.locale}
            href={localeResource.link}>
            <a href={localeResource.link} className={calculateClassNames(localeResource.link)}>
              {localeResource.locale}
            </a>
          </Link>)
      }
    </div>
  )
}
