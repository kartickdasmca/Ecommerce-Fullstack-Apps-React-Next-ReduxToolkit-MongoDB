import '../styles/globals.scss'
import { Provider } from "react-redux";
import {store} from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
let persistor = persistStore(store)
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
       <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Online shopping service for all of your need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
        </Provider>
    </SessionProvider>
    </>
   

  )
}

export default MyApp
