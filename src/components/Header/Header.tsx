import * as React from 'react';
import './Header.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useMedia } from "../../hooks/useMedia";
import { useScroll } from "../../hooks/useScroll";
import { ApplicationRoutes } from "../../ApplicationRoutes";
import { useDarkMode } from "../../hooks/useDarkMode/useDarkMode";

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  const [toggled, setToggled] = React.useState(false)
  const { isTop } = useScroll();
  const { isMediumScreen } = useMedia();
  const handleToggle = () => setToggled(!toggled);
  const { isDarkMode, changeMode } = useDarkMode();

  return (
    <header className={`Header ${isTop ? '' : 'scrolled'}`}>
      <Link href={ApplicationRoutes.root}><a href={ApplicationRoutes.root}>{title}</a></Link>
      {!isMediumScreen && <button
        onClick={handleToggle}
        className={`${toggled ? 'active' : '' }`}
        aria-label="menu">
        <FontAwesomeIcon icon={faBars} size="xs" />
      </button>}
      {(toggled || isMediumScreen) && <ul role="navigation" onClick={handleToggle}>
        <li><Link href={ApplicationRoutes.articles}><a href={ApplicationRoutes.articles}>Articles</a></Link></li>
        <li><a href={ApplicationRoutes.articles} target="_blank">Newsletter</a></li>
      </ul>}
      <button onClick={changeMode}><FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} /></button>

    </header>
  );
};

Header.displayName = 'Header';
