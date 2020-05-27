import * as React from 'react';
import './Header.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMedia } from "../../hooks/useMedia";
import { useScroll } from "../../hooks/useScroll";

export const Header: React.FC<{}> = () => {
  const [toggled, setToggled] = React.useState(false)
  const { isTop } = useScroll();
  const { isLargeScreen } = useMedia();
  return (
    <header className={`Header ${isTop ? '' : 'scrolled'}`}>
      <Link href="/">Logo</Link>
      {!isLargeScreen && <button onClick={() => setToggled(!toggled)} className={`${toggled ? 'active' : '' }`}>
        <FontAwesomeIcon icon={faBars} size="xs" />
      </button>}
      {(toggled || isLargeScreen) && <ul>
        <li><Link href="/articles">Articles</Link></li>
      </ul>}

    </header>
  );
};

Header.displayName = 'Header';
