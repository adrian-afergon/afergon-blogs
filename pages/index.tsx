import * as React from 'react';
import Head from 'next/head';
import { posts, talks } from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faExternalLinkAlt,
  faPhotoVideo,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        I&#39;m working to give you access to the content early as possible
      </h1>

      <p className="description">We will be up soon!!</p>

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

    <footer>
      <ul>
        <li>
          <a href="mailto:adrian.afergon@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            Contact with me
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AdrianFerrera91"
          >
            <FontAwesomeIcon icon={faTwitter} size="sm" /> Twiter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/afergon/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="sm" /> LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Home;
