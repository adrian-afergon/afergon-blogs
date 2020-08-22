import * as React from 'react';
import Head from 'next/head';
import './home.scss';
import { Layout } from "../../src/components/Layout";

export const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section className="intro">
      <h2>Hey there!</h2>
    </section>
    <section className="image-wrapper">
      <img src="/images/profile.jpg" alt="Profile picture" />
    </section>
    <section className="adjectives">
      <ul>
        <li><h3>Full Stack</h3></li>
        <li><h3>Typescript Lover</h3></li>
        <li><h3>Crafter</h3></li>
      </ul>
    </section>
  </Layout>
);
