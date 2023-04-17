import * as React from 'react'
import Head from 'next/head'
import styles from './home.module.scss'
import {Layout} from '@/components/Layout'
import {useTranslation} from "next-i18next";
import {calculateHrefLang} from "@/hooks/useHrefLang/useHrefLang";
import {useRouter} from "next/router";

export const Home: React.FC = () => {

  const {} = useRouter();
  const {t, i18n} = useTranslation('home');
  const hrefLangs = calculateHrefLang(i18n.language, '/home');
  const baseURL = process.env.NEXT_PUBLIC_URL;

  return (
    <Layout>
      <Head>
        <title>Adrián Ferrera</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content={t('meta.description') ?? ''}/>
        <meta property="og:image" content="/images/profile.jpg"/>
        <link rel="alternate" href={`${baseURL}/home`} hrefLang="x-default"/>
        {hrefLangs.map((hrefLang) => (
          <link key={hrefLang.locale} hrefLang={hrefLang.locale} rel="alternate" href={`${baseURL}/${hrefLang.locale}${hrefLang.path}`}/>
        ))}

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
