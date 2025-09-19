import React from 'react';
import { Link } from 'react-router-dom';

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
            <li><a href="mailto:dreamhauler2025@gmail.com">dreamhauler2025@gmail.com</a></li>
            <li>Edmonton, AB, Canada</li>
            <li>Hours: 9–5 (Canada-wide)</li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Company</div>
          <ul className="footer-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
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
  );
}


