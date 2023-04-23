import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
import * as React from "react";
import { appWithTranslation } from 'next-i18next'
import Script from "next/script"; // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Adrián Ferrera</title>
    </Head>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-171380182-1"/>
    <Script type="text/javascript" src="/gtm.js"/>
    <Component {...pageProps} />
  </>)
}

export default appWithTranslation(MyApp)
