import * as React from 'react';
import './Header.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMedia } from "../../hooks/useMedia";
import { useScroll } from "../../hooks/useScroll";
import { ApplicationRoutes } from "../../lib/ApplicationRoutes";

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  const [toggled, setToggled] = React.useState(false)
  const { isTop } = useScroll();
  const { isLargeScreen } = useMedia();
  return (
    <header className={`Header ${isTop ? '' : 'scrolled'}`}>
      <Link href={ApplicationRoutes.root}>{title}</Link>
      {!isLargeScreen && <button
        onClick={() => setToggled(!toggled)}
        className={`${toggled ? 'active' : '' }`}
        aria-label="menu">
        <FontAwesomeIcon icon={faBars} size="xs" />
      </button>}
      {(toggled || isLargeScreen) && <ul role="navigation">
        <li><Link href={ApplicationRoutes.articles}>Articles</Link></li>
      </ul>}

    </header>
  );
};

Header.displayName = 'Header';
