import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../src/redux/store';
import '../src/config/i18next';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/mulish';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
