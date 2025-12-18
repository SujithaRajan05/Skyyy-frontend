import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/electricity-bill.css';

const ElectricityBill = () => {
  const [formData, setFormData] = useState({
    provider: '',
    consumerNumber: '',
    amount: ''
  });
  const navigate = useNavigate();

  const providers = [
    { id: 'bescom', name: 'BESCOM', logo: '⚡', color: '#FFD700' },
    { id: 'tsnpdcl', name: 'TSNPDCL', logo: '💡', color: '#4CAF50' },
    { id: 'msedcl', name: 'MSEDCL', logo: '🔌', color: '#2196F3' },
    { id: 'adani', name: 'Adani Electricity', logo: '⚡', color: '#FF5722' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        serviceType: 'electricity',
        provider: formData.provider,
        consumerNumber: formData.consumerNumber,
        amount: formData.amount
      }
    });
  };

  return (
    <div className="electricity-bill">
      <Navbar />
      
      <div className="electricity-hero">
        <div className="hero-content">
          <h1>⚡ Electricity Bill Payment</h1>
          <p>Pay your electricity bill instantly and securely</p>
        </div>
      </div>

      <div className="electricity-container">
        <div className="payment-section">
          <form onSubmit={handleSubmit} className="electricity-form">
            <div className="form-group">
              <label>Select Electricity Board</label>
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
              <label>Consumer Number</label>
              <input
                type="text"
                value={formData.consumerNumber}
                onChange={(e) => setFormData({...formData, consumerNumber: e.target.value})}
                placeholder="Enter your consumer number"
                required
              />
            </div>

            <div className="form-group">
              <label>Bill Amount</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                placeholder="Enter bill amount"
                min="50"
                required
              />
            </div>

            <button type="submit" className="payment-btn">
              Proceed to Payment
            </button>
          </form>

          <div className="info-section">
            <h3>Why Pay Online?</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h4>Instant Payment</h4>
                <p>Pay your bill instantly without any delay</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔒</div>
                <h4>100% Secure</h4>
                <p>All transactions are encrypted and secure</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📱</div>
                <h4>24/7 Available</h4>
                <p>Pay anytime, anywhere from your device</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h4>No Extra Charges</h4>
                <p>Pay exactly what you owe, no hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityBill;