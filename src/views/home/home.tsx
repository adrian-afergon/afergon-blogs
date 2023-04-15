import * as React from 'react'
import Head from 'next/head'
import styles from './home.module.scss'
import {Layout} from '@/components/Layout'
import {useTranslation} from "next-i18next";

export const Home: React.FC = () => {

  const {t} = useTranslation('home');
  return (
    <Layout>
      <Head>
        <title>Adrián Ferrera</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content={t('meta.description') ?? ''}/>
        <meta property="og:image" content="/images/profile.jpg"/>
      </Head>

      <section className={styles.intro}>
        <h2>{t('h2')}<span>!</span></h2>
      </section>
      <section className={styles.imageWrapper}>
        <img src="/images/profile.jpg" alt="Profile picture"/>
      </section>
      <section className={styles.adjectives}>
        <ul>
          <li><h3>{t('adjectives.0')}</h3></li>
          <li><h3>{t('adjectives.1')}</h3></li>
          <li><h3>{t('adjectives.2')}</h3></li>
          <li><h3>{t('adjectives.3')}</h3></li>
        </ul>
      </section>
    </Layout>
  );
}

export default Home
