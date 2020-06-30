import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
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
