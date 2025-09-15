import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Dream Haulers</title>
      </Head>
      <div className="container" style={{ padding: '32px 0' }}>
        <h1>Services</h1>
        <ul>
          <li>Dry Van</li>
          <li>Temperature-Controlled / Reefer</li>
          <li>LTL / FTL</li>
          <li>Cross-border (Canada / US)</li>
          <li>Expedited</li>
          <li>Warehousing</li>
        </ul>
      </div>
    </>
  )
}


