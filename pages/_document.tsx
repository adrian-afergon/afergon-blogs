import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <title>Adrián Ferrera</title>
        <meta name="description" content="Hello and welcome to my website! My name is Adrián Ferrera, I'm a Full Stack Developer that love Typescript and likes to help the developers community. Here you can check my blog, talks, resources or just contact with me." />
        <meta property="og:image" content="/images/profile.jpg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171380182-1" />
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-171380182-1');`}} />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
