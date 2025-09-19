import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="Dream Haulers" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}


