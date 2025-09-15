import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Dream Haulers</title>
      </Head>
      <div className="container" style={{ padding: '32px 0' }}>
        <h1>Contact</h1>
        <p><strong>Phone:</strong> <a href="tel:+14164736404">+1 (416) 473-6404</a></p>
        <p><strong>Email:</strong> <a href="mailto:dreamhaulers2025@gmail.com">dreamhaulers2025@gmail.com</a></p>
        <p><strong>Address:</strong> Edmonton, AB, Canada</p>
        <p>Business Hours: 9–5 (Canada-wide)</p>
      </div>
    </>
  )
}


