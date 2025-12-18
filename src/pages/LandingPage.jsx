import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to Sky Recharge</h1>
        <p>Your one-stop solution for all recharges</p>
        <Link to="/home" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;