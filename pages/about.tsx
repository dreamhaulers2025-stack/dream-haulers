import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Dream Haulers</title>
      </Head>
      <div className="container" style={{ padding: '32px 0' }}>
        <h1>About Dream Haulers</h1>
        <p>
          Dream Haulers is a Canada–US carrier based in Edmonton, AB. We provide reliable
          dry van and temperature-controlled transportation with a focus on safety,
          professionalism, and on-time delivery.
        </p>
      </div>
    </>
  )
}


