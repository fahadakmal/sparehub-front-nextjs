import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/mulish";
import store from './redux/store';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import LazyHydrate from "react-lazy-hydration";
import './config/i18next';

function App({ Component, pageProps }: AppProps) {
  
  return (<>
     <Component {...pageProps} />
     </>)
}

export default App