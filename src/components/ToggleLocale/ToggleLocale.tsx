import * as React from 'react'
import styles from './ToggleLocale.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ToggleLocaleProps {
  locales: string[],
  handle: string,
}

export const ToggleLocale: React.FC<ToggleLocaleProps> = ({
  locales,
  handle
}) => {
  const { asPath } = useRouter()
  const isActive = (link: string) => link === asPath
  const calculateClassNames = (link: string) => isActive(link) ? styles.active : ''

  const paths: Record<string, string> = {
    'english': 'en',
    'spanish': 'es'
  }

  return (
    <div className={styles.ToggleLocale}>
      {
        locales.map(locale =>
          <Link
            key={locale}
            href={`/posts/${paths[locale]}/${handle}`}
            className={calculateClassNames(`/posts/${paths[locale]}/${handle}`)}>
              {locale}
          </Link>)
      }
    </div>
  )
}
