import * as React from 'react';
import Head from 'next/head';
import './home.scss';
import Link from "next/link";
import { ApplicationRoutes } from "../src/ApplicationRoutes";
import { Layout } from "../src/components/Layout";

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="image-wrapper">
      <img src="/images/profile.jpg" alt="Profile picture" />
    </div>

    <h1 className="title">
      I&#39;m working to give you access to the content soon as possible
    </h1>

    <p className="description">We will be up soon!!</p>

    <Link href={ApplicationRoutes.articles} >
      <a href={ApplicationRoutes.articles} className="LinkButton">Check my publications!</a>
    </Link>

  </Layout>
);

export default Home;
