import * as React from 'react';
import Head from 'next/head';
import { posts, talks } from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faPhotoVideo,
} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import Link from "next/link";
import { ApplicationRoutes } from "../src/ApplicationRoutes";

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header title={'Adrián Ferrera'}/>
    <main>
      <h1 className="title">
        I&#39;m working to give you access to the content soon as possible
      </h1>

      <p className="description">We will be up soon!!</p>

      <Link href={ApplicationRoutes.articles} >
        <a href={ApplicationRoutes.articles} className="LinkButton">Check my publications!</a>
      </Link>
    </main>

    <Footer />
  </div>
);

export default Home;
