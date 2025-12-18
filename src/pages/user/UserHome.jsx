import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ServiceCard from '../../components/user/ServiceCard';

const UserHome = () => {
  const services = [
    {
      id: 'mobile',
      title: 'Mobile Recharge',
      icon: '📱',
      description: 'Recharge your mobile instantly',
      path: '/mobile-recharge',
      color: '#4F46E5'
    },
    {
      id: 'tv',
      title: 'TV Recharge',
      icon: '📺',
      description: 'Recharge your TV subscription',
      path: '/tv-recharge',
      color: '#059669'
    },
    {
      id: 'dth',
      title: 'DTH Recharge',
      icon: '📡',
      description: 'Recharge your DTH connection',
      path: '/dth-recharge',
      color: '#DC2626'
    },
    {
      id: 'electricity',
      title: 'Electricity Bill',
      icon: '⚡',
      description: 'Pay your electricity bill',
      path: '/electricity-bill',
      color: '#7C2D12'
    }
  ];

  return (
    <div className="user-home">
      <Navbar />
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Sky Recharge</h1>
          <p>Fast, secure, and reliable recharge services at your fingertips</p>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Why Choose Sky Recharge?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>100% safe and encrypted transactions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Instant Recharge</h3>
              <p>Lightning fast recharge processing</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Best Plans</h3>
              <p>Curated plans for maximum savings</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🕒</div>
              <h3>24/7 Support</h3>
              <p>Round the clock customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;