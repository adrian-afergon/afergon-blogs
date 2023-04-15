import * as React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import {useMedia} from '@/hooks/useMedia'
import {useScroll} from '@/hooks/useScroll'
import {ApplicationRoutes} from '@/ApplicationRoutes'
import {useDarkMode} from '@/hooks/useDarkMode'
import {useTranslation} from "next-i18next";

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  const {t} = useTranslation('common');
  const [toggled, setToggled] = React.useState(false)
  const {isTop} = useScroll()
  const {isMediumScreen} = useMedia()
  const handleToggle = () => setToggled(!toggled)
  const {isDarkMode, changeMode} = useDarkMode()

  return (
    <header
      className={[styles.Header, isTop ? '' : styles.scrolled].join(" ")}> {/* `Header ${isTop ? '' : 'scrolled'}` */}
      <Link href={ApplicationRoutes.root}>{title}</Link>
      {!isMediumScreen && <button
          onClick={handleToggle}
          className={`${toggled ? 'active' : ''}`}
          aria-label="menu">
          <FontAwesomeIcon icon={faBars} size="xs"/>
      </button>}
      {(toggled || isMediumScreen) && <ul role="navigation" onClick={handleToggle}>
          <li><Link href={ApplicationRoutes.articles}>{t('navbar.articles')}</Link></li>
          <li><Link href={ApplicationRoutes.resources}>{t('navbar.resources')}</Link></li>
          <li><Link href={ApplicationRoutes.podcast}>{t('navbar.podcast')}</Link></li>
        {/* <li><a href={ApplicationRoutes.articles} target="_blank">Newsletter</a></li> */}
      </ul>}
      <button onClick={changeMode}><FontAwesomeIcon icon={isDarkMode ? faMoon : faSun}/></button>
    </header>
  )
}

Header.displayName = 'Header'
