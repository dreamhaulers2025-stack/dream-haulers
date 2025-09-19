import React from 'react';

export default function Services() {
  return (
    <div className="container" style={{ padding: '32px 0' }}>
      <h1>Services</h1>
      <div className="features">
        <div className="card">
          <h3>Dry Van</h3>
          <p>General freight with secure, clean trailers for a wide range of goods.</p>
        </div>
        <div className="card">
          <h3>Temperature-Controlled / Reefer</h3>
          <p>Cold chain and temperature-sensitive freight handled with care.</p>
        </div>
        <div className="card">
          <h3>LTL / FTL</h3>
          <p>Flexible solutions from partial to full truckload to match your demand.</p>
        </div>
        <div className="card">
          <h3>Cross-border (Canada / US)</h3>
          <p>Experienced cross-border operations and documentation support.</p>
        </div>
        <div className="card">
          <h3>Expedited</h3>
          <p>Time-critical shipments with priority dispatch and updates.</p>
        </div>
        <div className="card">
          <h3>Warehousing</h3>
          <p>Short-term storage and coordination to support your supply chain.</p>
        </div>
      </div>
    </div>
  );
}


