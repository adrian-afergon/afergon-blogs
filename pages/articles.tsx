import * as React from 'react';
import Head from 'next/head';
import { posts, talks } from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faPhotoVideo, faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <div>
      <input name="Filter" placeholder="filter"/>
      <button><FontAwesomeIcon icon={faSearch} /></button>
    </div>
    <main>
      <p className="description">
        Temporary you can read my current posts in the following links:
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <a
              href={post.link}
              key={post.date}
              target="_blank"
              rel="noreferrer"
            >
              {post.title}{' '}
              {post.external && (
                <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
              )}
            </a>
          </li>
        ))}
      </ul>
      <p className="description">Or you can check my talks :</p>
      <ul>
        {talks.map((talk) => (
          <li key={talk.title}>
            <a
              href={talk.video ? talk.video : talk.slides}
              target="_blank"
              rel="noreferrer"
            >
              {talk.title}
              <FontAwesomeIcon
                icon={talk.video ? faYoutube : faPhotoVideo}
                size="xs"
              />
            </a>
          </li>
        ))}
      </ul>
    </main>

    <Footer />
  </div>
);

export default Home;
