import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/">
          <a className="brand">
            <img src="/logo.svg" alt="Dream Haulers" className="logo" />
            <span className="brand-name">Dream Haulers</span>
          </a>
        </Link>
        <nav className="nav">
          <Link href="/about"><a>About</a></Link>
          <Link href="/services"><a>Services</a></Link>
          <Link href="/careers"><a>Careers</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}


