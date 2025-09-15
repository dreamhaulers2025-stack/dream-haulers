import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dream Haulers | Canada–US Trucking</title>
        <meta name="description" content="Dream Haulers provides reliable Canada–US dry van and temperature-controlled freight. LTL/FTL, expedited, warehousing. Edmonton-based, serving North America." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="site-main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
