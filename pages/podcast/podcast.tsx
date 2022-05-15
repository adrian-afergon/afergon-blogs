import * as React from 'react'
import Head from 'next/head'
import styles from './podcast.module.scss'
import {Layout} from '../../src/components/Layout'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faYoutube, faSpotify, faAmazon, faTiktok, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {ExternalRoutes} from "../../src/ApplicationRoutes";

export const Podcast: React.FC = () =>
  (
    <Layout>
      <Head>
        <title>Devs Lives - Podcast</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content="Hello and welcome to my website! My name is Adrián Ferrera, and this is Devs Lives podcast! Here we will talk with different person and their lives as developers."/>
        <meta property="og:image" content="/images/profile.jpg"/>
      </Head>

      <section className={styles.podcast}>
        <ul>
          <li>
            <iframe src="https://www.ivoox.com/player_ej_87053001_6_1.html?c1=94bc4c" width="100%" height="200"
                    allowFullScreen loading="lazy"/>
          </li>
          <li>
            <iframe src="https://www.ivoox.com/player_ej_86729581_6_1.html?c1=94bc4c" width="100%" height="200"
                    allowFullScreen loading="lazy"/>
          </li>
          <li>
            <iframe src="https://www.ivoox.com/player_ej_86468563_6_1.html?c1=94bc4c" width="100%" height="200"
                    allowFullScreen loading="lazy"/>
          </li>
          <li>
            <iframe src="https://www.ivoox.com/player_ej_86086007_6_1.html?c1=94bc4c" width="100%" height="200"
                    allowFullScreen loading="lazy"/>
          </li>
        </ul>
      </section>
      <section className={styles.rss}>
        <h3>Follow Devs Lives at:</h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.youtube}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faYoutube} size="sm" /></span> Youtube
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.spotify}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faSpotify} size="sm" /></span> Spotify
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.amazon}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faAmazon} size="sm" /></span> Amazon Music
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.tiktok}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTiktok} size="sm" /></span> TikTok
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.instagram}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faInstagram} size="sm" /></span> Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.twitter}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTwitter} size="sm" /></span> Twitter
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )

export default Podcast
