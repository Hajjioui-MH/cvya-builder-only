import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '../store'
import Script from 'next/script';
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="icon" type="image/svg" href="/favicons/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp