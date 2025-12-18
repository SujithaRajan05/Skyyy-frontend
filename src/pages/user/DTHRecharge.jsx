import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/dth-recharge.css';

const DTHRecharge = () => {
  const [formData, setFormData] = useState({
    provider: '',
    customerId: '',
    amount: ''
  });
  const navigate = useNavigate();

  const providers = [
    { id: 'tatasky', name: 'Tata Sky', logo: '🛰️', color: '#0066CC' },
    { id: 'airtel', name: 'Airtel Digital TV', logo: '📡', color: '#E60000' },
    { id: 'dishtv', name: 'Dish TV', logo: '📺', color: '#FF6600' },
    { id: 'sundirect', name: 'Sun Direct', logo: '☀️', color: '#FFD700' }
  ];

  const popularPlans = [
    { id: 1, name: 'Basic HD', price: 199, validity: '30 days', channels: '100+ HD Channels' },
    { id: 2, name: 'Family HD', price: 349, validity: '30 days', channels: '200+ HD Channels' },
    { id: 3, name: 'Premium HD', price: 549, validity: '30 days', channels: '300+ HD Channels' },
    { id: 4, name: 'Ultimate 4K', price: 799, validity: '30 days', channels: '400+ Channels + 4K' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        serviceType: 'dth',
        provider: formData.provider,
        customerId: formData.customerId,
        amount: formData.amount
      }
    });
  };

  return (
    <div className="dth-recharge">
      <Navbar />
      
      <div className="dth-hero">
        <div className="hero-content">
          <h1>📡 DTH Recharge</h1>
          <p>Recharge your DTH connection instantly</p>
        </div>
      </div>

      <div className="dth-container">
        <div className="recharge-section">
          <form onSubmit={handleSubmit} className="dth-form">
            <div className="form-group">
              <label>Select DTH Provider</label>
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
              <label>Customer ID / VC Number</label>
              <input
                type="text"
                value={formData.customerId}
                onChange={(e) => setFormData({...formData, customerId: e.target.value})}
                placeholder="Enter your customer ID"
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
            <h3>Popular DTH Plans</h3>
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

export default DTHRecharge;