import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Netflix Free for 3 Months',
      description: 'Get Netflix Premium subscription free for 3 months with any recharge of ₹599 or above',
      icon: '🎬',
      color: '#E50914',
      minAmount: 599,
      validity: '3 months',
      terms: 'Valid for new Netflix users only'
    },
    {
      id: 2,
      title: 'Disney+ Hotstar Premium',
      description: 'Enjoy Disney+ Hotstar Premium subscription free for 1 year with ₹399+ recharge',
      icon: '🏏',
      color: '#0F79AF',
      minAmount: 399,
      validity: '1 year',
      terms: 'Valid for all users'
    },
    {
      id: 3,
      title: 'Amazon Prime Membership',
      description: 'Get Amazon Prime membership free for 6 months with any recharge of ₹799 or above',
      icon: '📦',
      color: '#FF9900',
      minAmount: 799,
      validity: '6 months',
      terms: 'Valid for new Prime users'
    },
    {
      id: 4,
      title: 'Spotify Premium',
      description: 'Enjoy ad-free music with Spotify Premium for 2 months free with ₹299+ recharge',
      icon: '🎵',
      color: '#1DB954',
      minAmount: 299,
      validity: '2 months',
      terms: 'Valid for new Spotify users'
    },
    {
      id: 5,
      title: 'YouTube Premium',
      description: 'Watch YouTube without ads and download videos with YouTube Premium for 1 month',
      icon: '📺',
      color: '#FF0000',
      minAmount: 199,
      validity: '1 month',
      terms: 'Valid for all users'
    },
    {
      id: 6,
      title: 'Cashback Offer',
      description: 'Get 10% cashback up to ₹100 on your first recharge. Use code: FIRST10',
      icon: '💰',
      color: '#00C851',
      minAmount: 100,
      validity: 'One time',
      terms: 'Valid for new users only'
    }
  ];

  return (
    <div className="offers-page">
      <Navbar />
      
      <div className="offers-hero">
        <div className="hero-content">
          <h1>🎁 Special Offers</h1>
          <p>Exclusive deals and offers on recharges</p>
        </div>
      </div>

      <div className="offers-container">
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ borderColor: offer.color }}>
              <div className="offer-header">
                <div className="offer-icon" style={{ color: offer.color }}>
                  {offer.icon}
                </div>
                <h3>{offer.title}</h3>
              </div>
              
              <div className="offer-content">
                <p className="offer-description">{offer.description}</p>
                
                <div className="offer-details">
                  <div className="offer-detail">
                    <span className="detail-label">Min Recharge:</span>
                    <span className="detail-value">₹{offer.minAmount}</span>
                  </div>
                  <div className="offer-detail">
                    <span className="detail-label">Validity:</span>
                    <span className="detail-value">{offer.validity}</span>
                  </div>
                </div>
                
                <div className="offer-terms">
                  <small>{offer.terms}</small>
                </div>
              </div>
              
              <div className="offer-actions">
                <Link to="/recharge" className="claim-btn" style={{ backgroundColor: offer.color }}>
                  Claim Offer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;