import * as React from 'react'
import Head from 'next/head'
import styles from './home.module.scss'
import { Layout } from '../../components/Layout'

export const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/home/afergon/projects/afergon/afergon-blogs/public/favicon.ico" />
      <meta name="description"
            content="Hello and welcome to my website! My name is Adrián Ferrera, I'm a Full Stack Developer that love Typescript and likes to help the developers community. Here you can check my blog, talks, resources or just contact with me."/>
      <meta property="og:image" content="/images/profile.jpg"/>
    </Head>

    <section className={styles.intro}>
      <h2>Hey there<span>!</span></h2>
    </section>
    <section className={styles.imageWrapper}>
      <img src="/images/profile.jpg" alt="Profile picture"/>
    </section>
    <section className={styles.adjectives}>
      <ul>
        <li><h3>Full Stack</h3></li>
        <li><h3>Typescript Lover</h3></li>
        <li><h3>Crafter</h3></li>
      </ul>
    </section>
  </Layout>
)

export default Home
