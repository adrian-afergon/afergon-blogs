import * as React from 'react';
import './Header.scss';
import Link from "next/link";

export const Header: React.FC<{}> = () => (
  <div className="Header">
    <Link href="/">Logo</Link>
    <ul>
      <li><Link href="/articles">Articles</Link></li>
    </ul>
  </div>
);

Header.displayName = 'Header';
