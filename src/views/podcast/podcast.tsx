import * as React from 'react'
import Head from 'next/head'
import styles from './podcast.module.scss'
import {Layout} from '@/components/Layout'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAmazon,
  faGoogle,
  faInstagram,
  faItunes,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {faRss} from "@fortawesome/free-solid-svg-icons";
import {ExternalRoutes} from "@/ApplicationRoutes";
import {Podcast} from "@/lib/podcast/domain/podcast";
import {useTranslation} from "next-i18next";

interface PodcastPageProps {
  episodes: Podcast[]
}

export const PodcastPage: React.FC<PodcastPageProps> = ({episodes = []}) => {

  const {t} = useTranslation('podcast')

  return (
    <Layout>
      <Head>
        <title>Devs Lives - Podcast</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content={t('meta.description') ?? ''}/>
        <meta property="og:image" content="/images/profile.jpg"/>
      </Head>

      <section className={styles.podcast}>
        <ul>
          {episodes.map(episode =>
            <li key={episode.episodeNumber}>
              <h4>{episode.episodeTitle}</h4>
              <iframe src={episode.link}
                      allowFullScreen loading="lazy"/>
            </li>
          )}
        </ul>
      </section>
      <section className={styles.rss}>
        <h3>{t('follow', {name: 'Devs Lives'})}</h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.rss}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faRss} size="sm"/></span> Feed RSS
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.youtube}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faYoutube} size="sm"/></span> Youtube
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.spotify}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faSpotify} size="sm"/></span> Spotify
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.applePodcast}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faItunes} size="sm"/></span> Apple Podcast
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.googlePodcast}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faGoogle} size="sm"/></span> Google Podcast
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.amazon}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faAmazon} size="sm"/></span> Amazon Music
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.tiktok}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTiktok} size="sm"/></span> TikTok
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.instagram}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faInstagram} size="sm"/></span> Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={ExternalRoutes.devsLives.twitter}
            >
              <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTwitter} size="sm"/></span> Twitter
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default PodcastPage
