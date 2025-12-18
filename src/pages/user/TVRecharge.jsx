import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/tv-recharge.css';

const TVRecharge = () => {
  const [formData, setFormData] = useState({
    provider: '',
    subscriberId: '',
    amount: ''
  });
  const navigate = useNavigate();

  const providers = [
    { id: 'tatasky', name: 'Tata Sky', logo: '📺', color: '#FF6B35' },
    { id: 'dishtv', name: 'Dish TV', logo: '🛰️', color: '#4ECDC4' },
    { id: 'sundirect', name: 'Sun Direct', logo: '☀️', color: '#FFE66D' },
    { id: 'videocon', name: 'Videocon D2H', logo: '📡', color: '#A8E6CF' }
  ];

  const popularPlans = [
    { id: 1, name: 'Family Pack', price: 299, validity: '30 days', channels: '150+ Channels' },
    { id: 2, name: 'Sports Pack', price: 399, validity: '30 days', channels: '200+ Channels + Sports' },
    { id: 3, name: 'Premium Pack', price: 599, validity: '30 days', channels: '300+ Channels + HD' },
    { id: 4, name: 'Ultimate Pack', price: 899, validity: '30 days', channels: '500+ Channels + Premium' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        serviceType: 'tv',
        provider: formData.provider,
        subscriberId: formData.subscriberId,
        amount: formData.amount
      }
    });
  };

  return (
    <div className="tv-recharge">
      <Navbar />
      
      <div className="tv-hero">
        <div className="hero-content">
          <h1>📺 TV Recharge</h1>
          <p>Recharge your TV subscription instantly</p>
        </div>
      </div>

      <div className="tv-container">
        <div className="recharge-section">
          <form onSubmit={handleSubmit} className="tv-form">
            <div className="form-group">
              <label>Select TV Provider</label>
              <div className="provider-grid">
                {providers.map(provider => (
                  <div
                    key={provider.id}
                    className={`provider-card ${formData.provider === provider.id ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, provider: provider.id})}
                    style={{ borderColor: provider.color }}
                  >
                    <span className="provider-icon">{provider.logo}</span>
                    <span className="provider-name">{provider.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Subscriber ID / Customer ID</label>
              <input
                type="text"
                value={formData.subscriberId}
                onChange={(e) => setFormData({...formData, subscriberId: e.target.value})}
                placeholder="Enter your subscriber ID"
                required
              />
            </div>

            <div className="form-group">
              <label>Recharge Amount</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                placeholder="Enter amount"
                min="100"
                required
              />
            </div>

            <button type="submit" className="recharge-btn">
              Proceed to Payment
            </button>
          </form>

          <div className="plans-section">
            <h3>Popular TV Plans</h3>
            <div className="plans-grid">
              {popularPlans.map(plan => (
                <div
                  key={plan.id}
                  className="plan-card"
                  onClick={() => setFormData({...formData, amount: plan.price.toString()})}
                >
                  <div className="plan-price">₹{plan.price}</div>
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-details">
                    <div>Validity: {plan.validity}</div>
                    <div>{plan.channels}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVRecharge;