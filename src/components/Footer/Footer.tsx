import * as React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {useTranslation} from "next-i18next";

export const Footer: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <a href="mailto:adrian.afergon@gmail.com">
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faEnvelope} size="sm"/></span>
            {t('footer.contact')}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/adrian-afergon"
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faGithub} size="sm"/></span> Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AdrianFerrera91"
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTwitter} size="sm"/></span> Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/afergon/"
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faLinkedinIn} size="sm"/></span> LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
