export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Dream Haulers</div>
          <p>Reliable Canada–US trucking from Edmonton, AB.</p>
        </div>
        <div>
          <div className="footer-title">Contact</div>
          <ul className="footer-list">
            <li><a href="tel:+14164736404">+1 (416) 473-6404</a></li>
            <li><a href="mailto:dreamhaulers2025@gmail.com">dreamhaulers2025@gmail.com</a></li>
            <li>Edmonton, AB, Canada</li>
            <li>Hours: 9–5 (Canada-wide)</li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Follow</div>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <small>© {new Date().getFullYear()} Dream Haulers. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}


