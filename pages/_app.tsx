import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import '@fontsource/mulish';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import '../src/config/i18next';
import store from '../src/redux/store';
import '../styles/layout.css';
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
  const theme = createTheme({
    typography: {
      fontFamily: typeof window !== 'undefined' && localStorage.getItem('i18nextLng') !== 'ar' ? 'Mulish' : 'Dubai',
    },
  });
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <ThemeProvider theme={theme}>
        <CacheProvider value={dir}>
          <Component handleChangeLanguage={handleChangeLanguage} {...pageProps} />
        </CacheProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
