import * as React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC<{}> = () => (
  <footer>
    <ul>
      <li>
        <a href="mailto:adrian.afergon@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="sm" />
          Contact with me
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/AdrianFerrera91"
        >
          <FontAwesomeIcon icon={faTwitter} size="sm" /> Twiter
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/afergon/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="sm" /> LinkedIn
        </a>
      </li>
    </ul>
  </footer>
);
