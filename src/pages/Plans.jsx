import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Plans.css';

const Plans = () => {
  const { operator } = useParams();
  const navigate = useNavigate();

  // Sample plans data for different operators
  const operatorPlans = {
    jio: [
      { id: 1, name: 'Jio Prime', validity: '28 days', data: '2GB/day', price: '₹299' },
      { id: 2, name: 'Jio Unlimited', validity: '56 days', data: '1.5GB/day', price: '₹499' },
      { id: 3, name: 'Jio Annual', validity: '365 days', data: '2GB/day', price: '₹2999' },
      { id: 4, name: 'Jio Truly Unlimited', validity: '84 days', data: '3GB/day', price: '₹799' },
    ],
    airtel: [
      { id: 1, name: 'Airtel Rs. 299', validity: '28 days', data: '1.5GB/day', price: '₹299' },
      { id: 2, name: 'Airtel Rs. 399', validity: '56 days', data: '2GB/day', price: '₹399' },
      { id: 3, name: 'Airtel Rs. 499', validity: '84 days', data: '2.5GB/day', price: '₹499' },
      { id: 4, name: 'Airtel Rs. 799', validity: '84 days', data: '3GB/day', price: '₹799' },
    ],
    bsnl: [
      { id: 1, name: 'BSNL Rs. 249', validity: '28 days', data: '2GB/day', price: '₹249' },
      { id: 2, name: 'BSNL Rs. 333', validity: '56 days', data: '2GB/day', price: '₹333' },
      { id: 3, name: 'BSNL Rs. 549', validity: '84 days', data: '3GB/day', price: '₹549' },
      { id: 4, name: 'BSNL Annual', validity: '365 days', data: '2GB/day', price: '₹1999' },
    ],
  };

  // Get plans for current operator or default to Jio
  const plans = operatorPlans[operator?.toLowerCase()] || operatorPlans.jio;

  // Get operator logo and color
  const getOperatorDetails = () => {
    switch(operator?.toLowerCase()) {
      case 'jio':
        return { name: 'Jio', logo: 'J', color: '#FF6B6B', bgColor: '#FFF5F5' };
      case 'airtel':
        return { name: 'Airtel', logo: 'A', color: '#4ECDC4', bgColor: '#F0F9F8' };
      case 'bsnl':
        return { name: 'BSNL', logo: 'B', color: '#45B7D1', bgColor: '#F0F9FF' };
      default:
        return { name: 'Jio', logo: 'J', color: '#FF6B6B', bgColor: '#FFF5F5' };
    }
  };

  const operatorDetails = getOperatorDetails();

  const handleRecharge = (plan) => {
    // Navigate to payment page with plan details
    navigate('/payment', { 
      state: { 
        operator: operatorDetails.name,
        plan: plan 
      } 
    });
  };

  const handleBack = () => {
    navigate('/recharge');
  };

  return (
    <div className="plans-container">
      <div className="plans-header">
        <button onClick={handleBack} className="back-button">
          ← Back to Operators
        </button>
        <div className="operator-header">
          <div 
            className="operator-logo-large"
            style={{ 
              backgroundColor: operatorDetails.bgColor,
              color: operatorDetails.color
            }}
          >
            {operatorDetails.logo}
          </div>
          <div>
            <h1>{operatorDetails.name} Recharge Plans</h1>
            <p className="subtitle">Select a plan that suits your needs</p>
          </div>
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
            </div>
            
            <div className="plan-details">
              <div className="plan-feature">
                <span className="feature-label">Validity:</span>
                <span className="feature-value">{plan.validity}</span>
              </div>
              <div className="plan-feature">
                <span className="feature-label">Daily Data:</span>
                <span className="feature-value">{plan.data}</span>
              </div>
              <div className="plan-feature">
                <span className="feature-label">Type:</span>
                <span className="feature-value">Prepaid</span>
              </div>
            </div>

            <button 
              onClick={() => handleRecharge(plan)}
              className="recharge-button"
            >
              Recharge Now
            </button>

            <div className="plan-benefits">
              <span className="benefit">✓ Unlimited Calls</span>
              <span className="benefit">✓ 100 SMS/day</span>
              <span className="benefit">✓ Free Hotstar</span>
            </div>
          </div>
        ))}
      </div>

      <div className="support-section">
        <p>Need help choosing a plan? <Link to="/contact">Contact our support team</Link></p>
      </div>
    </div>
  );
};

export default Plans;