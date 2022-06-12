import * as React from 'react'
import styles from './Layout.module.scss'
import {Header} from '../Header'
import {Footer} from '../Footer'
import Head from "next/head";

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="description"
            content="Hello and welcome to my website! My name is Adrián Ferrera, I'm a Full Stack Developer that love Typescript and likes to help the developers community. Here you can check my blog, talks, resources or just contact with me."/>
      <meta property="og:image" content="/images/profile.jpg"/>
    </Head>

    <div className={styles.container}>
      <Header title={'Adrián Ferrera'}/>
      <main>
          {children}
      </main>
      <Footer />
    </div>
  </>
)
