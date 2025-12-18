import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-hero">
        <h1 className="about-title">About Sky Recharge</h1>
        <p className="about-description">
          We're on a mission to make mobile recharges simple, fast, and hassle-free for everyone across India.
        </p>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">10M+</h3>
            <p className="stat-label">Happy Users</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">99.9%</h3>
            <p className="stat-label">Uptime</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">24/7</h3>
            <p className="stat-label">Support</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">100+</h3>
            <p className="stat-label">Plans</p>
          </div>
        </div>
      </div>

      {/* Optional: Additional content section */}
      <div className="mission-section">
        <h2>Our Commitment</h2>
        <p>
          Sky Recharge is committed to providing seamless and secure recharge services 
          with 24/7 customer support and the widest range of plans for all major operators.
        </p>
      </div>
    </div>
  );
};

export default About;