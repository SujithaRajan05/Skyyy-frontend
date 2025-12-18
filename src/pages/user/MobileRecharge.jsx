import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const MobileRecharge = () => {
  const [formData, setFormData] = useState({
    provider: '',
    mobileNumber: '',
    amount: ''
  });
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const providers = [
    { id: 'jio', name: 'Jio', logo: '🔵' },
    { id: 'airtel', name: 'Airtel', logo: '🔴' },
    { id: 'vi', name: 'Vi', logo: '🟣' },
    { id: 'bsnl', name: 'BSNL', logo: '🟡' }
  ];

  const popularPlans = [
    { id: 1, price: 199, validity: '28 days', data: '1.5GB/day', provider: 'jio' },
    { id: 2, price: 299, validity: '28 days', data: '2GB/day', provider: 'jio' },
    { id: 3, price: 399, validity: '56 days', data: '2GB/day', provider: 'airtel' },
    { id: 4, price: 499, validity: '84 days', data: '1.5GB/day', provider: 'vi' }
  ];

  useEffect(() => {
    if (formData.provider) {
      const filteredPlans = popularPlans.filter(plan => plan.provider === formData.provider);
      setPlans(filteredPlans);
    }
  }, [formData.provider]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlanSelect = (plan) => {
    setFormData({
      ...formData,
      amount: plan.price.toString()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.provider || !formData.mobileNumber || !formData.amount) {
      alert('Please fill all fields');
      return;
    }
    
    navigate('/payment', {
      state: {
        serviceType: 'mobile',
        provider: formData.provider,
        number: formData.mobileNumber,
        amount: formData.amount
      }
    });
  };

  return (
    <div className="mobile-recharge">
      <Navbar />
      
      <div className="service-container">
        <div className="service-header">
          <h1>Mobile Recharge</h1>
          <p>Recharge your mobile instantly with best plans</p>
        </div>

        <div className="recharge-form-container">
          <form onSubmit={handleSubmit} className="recharge-form">
            <div className="form-group">
              <label>Select Provider</label>
              <select
                name="provider"
                value={formData.provider}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose your provider</option>
                {providers.map(provider => (
                  <option key={provider.id} value={provider.id}>
                    {provider.logo} {provider.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <label>Recharge Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter amount"
                min="10"
                required
              />
            </div>

            <button type="submit" className="proceed-btn" disabled={loading}>
              Proceed to Payment
            </button>
          </form>

          {plans.length > 0 && (
            <div className="plans-section">
              <h3>Popular Plans</h3>
              <div className="plans-grid">
                {plans.map(plan => (
                  <div
                    key={plan.id}
                    className="plan-card"
                    onClick={() => handlePlanSelect(plan)}
                  >
                    <div className="plan-price">₹{plan.price}</div>
                    <div className="plan-details">
                      <div>Validity: {plan.validity}</div>
                      <div>Data: {plan.data}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileRecharge;