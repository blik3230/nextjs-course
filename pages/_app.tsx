import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <meta name="description" content="Курс изучения nextjs из udemy" />
        <link rel="icon" href={ '/favicon.ico' } />
      </Head>

      <Component { ...pageProps } />
    </Fragment>
  );
}

export default MyApp;
