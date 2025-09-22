import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  const deriveBase = () => {
    const pub = process.env.PUBLIC_URL || '';
    if (pub) {
      const path = pub.replace(/^https?:\/\/[^/]+/, '');
      return path || '/';
    }
    const guess = '/dream-haulers';
    return window.location.pathname.startsWith(guess) ? guess : '/';
  };

  return (
    <Router basename={deriveBase()}>
      <Header />
      <main className="site-main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
