// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// import 'bootstrap/dist/css/bootstrap.css';
// import "@fontsource/mulish";
// import store from '../src/redux/store';
// import { Provider } from 'react-redux';
// import '../src/config/i18next';
// import React from 'react';
// import Head from 'next/head';

// function App({ Component, pageProps }: AppProps) {

//   return (<Provider store={store} >
//         <Head>
//           <meta
//               name="viewport"
//               content="width=device-width, initial-scale=1, shrink-to-fit=no"
//           />
//         </Head>
//         <Component {...pageProps} />
//        </Provider>)
// }

// export default App;

// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/mulish';
import store, { langStore } from '../src/redux/store';
import { Provider, useSelector } from 'react-redux';
import '../src/config/i18next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import i18next from 'i18next';
import LanguageSlice from '../src/redux/slices/languageSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer],
});

function App({ Component, pageProps }: AppProps) {
  const [dir, setDir] = useState(cacheLtr);
  // const language = useSelector((state: any) => state.languageSlice);
  //console.log(store.getState().languageSlice, 'Heyyyyyyy');
  let language;
  store.subscribe(() => {
    const storedLang = localStorage.getItem('i18nextLng');
    language = store.getState().languageSlice.language;
    if (storedLang === 'ar') {
      setDir(cacheRtl);
    } else {
      setDir(cacheLtr);
    }
  });

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang === 'ar') {
      setDir(cacheRtl);
    } else {
      setDir(cacheLtr);
    }
  }, [language]);
  const handleChangeLanguage = (lng: any) => {
    if (lng === 'ar') {
      setDir(cacheRtl);
    } else {
      setDir(cacheLtr);
    }
  };
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <CacheProvider value={dir}>
        <Component handleChangeLanguage={handleChangeLanguage} {...pageProps} />
      </CacheProvider>
    </Provider>
  );
}

export default App;
