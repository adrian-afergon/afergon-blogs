import * as React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import { posts } from '../data.json';
import {faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Home = () => (
  <div className="container">
    <Head>
      <title>Adrián Ferrera</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        I'm working to give you access to the content early as possible
      </h1>

      <p className="description">
        We will be up soon!!
      </p>

      <p className="description">
        Temporary you can read my current posts in the following links:
      </p>
      <ul>
        {posts.map((post) =>
          <li>
            <a href={post.link} key={post.date} target="_blank">{post.title} {post.external && <FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/>}</a>
          </li>)}
      </ul>
    </main>

    <footer>
      <ul>
        <li><a href="mailto:adrian.afergon@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="sm"/>Contact with me</a></li>
        <li><a target="_blank" href="https://twitter.com/AdrianFerrera91"><FontAwesomeIcon icon={faTwitter} size="sm"/> Twiter</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/afergon/"><FontAwesomeIcon icon={faLinkedinIn} size="sm"/> LinkedIn</a></li>
      </ul>
    </footer>

    <style>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer ul {
        list-style-type: none;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

// @ts-ignore
export default Home;
