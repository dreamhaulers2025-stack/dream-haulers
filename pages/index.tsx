import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <div className="container">
          <h1>Reliable Canada–US Trucking</h1>
          <p>Dry Van • Temperature-Controlled • LTL/FTL • Expedited • Warehousing</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/contact">Request a Quote</a>
            <a className="btn btn-outline" href="/services">View Services</a>
          </div>
          <div className="features">
            <div className="card"><strong>Edmonton-based</strong><div>Serving Canada and the US</div></div>
            <div className="card"><strong>On-time delivery</strong><div>Professional dispatch and tracking</div></div>
            <div className="card"><strong>Reefer & Dry Van</strong><div>Temperature-controlled and dry freight</div></div>
            <div className="card"><strong>LTL and FTL</strong><div>Flexible capacity for your shipments</div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
