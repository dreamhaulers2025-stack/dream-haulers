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
        <h2>What we do</h2>
        <p>
          We move freight across Canada and the United States with flexible capacity for both
          Less-Than-Truckload (LTL) and Full Truckload (FTL). Our team prioritizes clear
          communication and predictable service from pickup to delivery.
        </p>
        <h2>Coverage</h2>
        <p>Canada and US cross-border lanes. Edmonton-based operations with Canada-wide hours (9–5).</p>
        <h2>Why shippers choose us</h2>
        <ul>
          <li>On-time delivery focus with professional dispatch</li>
          <li>Temperature-controlled (reefer) and dry van capacity</li>
          <li>LTL and FTL options for flexibility and cost-efficiency</li>
          <li>Cross-border experience (Canada / US)</li>
        </ul>
      </div>
    </>
  )
}


