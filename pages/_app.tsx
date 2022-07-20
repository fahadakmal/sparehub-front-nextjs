import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/mulish";

function MyApp({ Component, pageProps }: AppProps) {
  return (<div className="">
     <Component {...pageProps} />
     </div>)
}

export default MyApp
