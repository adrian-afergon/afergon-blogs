import * as React from 'react'
import styles from './LocaleTag.module.scss'

type Props = {
  children: React.ReactNode
}

export const LocaleTag: React.FC<Props> = ({ children }) => (
  <span className={styles.LocaleTag}>
    {children}
  </span>
)
