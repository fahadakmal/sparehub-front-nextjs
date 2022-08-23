import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import '@fontsource/mulish';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import '../src/config/i18next';
import store from '../src/redux/store';
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
