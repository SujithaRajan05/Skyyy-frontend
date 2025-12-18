import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log('Payment Page - Location State:', location.state); // Debug log
  
  // Get plan details from navigation state or use defaults
  const plan = location.state?.plan || {
    name: 'Jio Prime',
    price: '₹299',
    validity: '28 days',
    data: '2GB/day'
  };
  
  const operator = location.state?.operator || 'Jio';

  const [formData, setFormData] = useState({
    mobileNumber: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  // Format card number with spaces
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setFormData(prev => ({ ...prev, cardNumber: value }));
  };

  // Format expiry date
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({ ...prev, expiryDate: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked'); // Debug log
    setLoading(true);
    setError('');

    // Validation
    if (!formData.mobileNumber || !formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      setLoading(false);
      return;
    }

    if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      setError('Please enter a valid 16-digit card number');
      setLoading(false);
      return;
    }

    if (formData.cvv.length !== 3) {
      setError('Please enter a valid 3-digit CVV');
      setLoading(false);
      return;
    }

    try {
      console.log('Starting payment process...'); // Debug log
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - navigate to confirmation
      console.log('Payment successful, navigating to confirmation...'); // Debug log
      
      navigate('/confirmation', {
        state: {
          plan,
          operator,
          mobileNumber: formData.mobileNumber,
          amount: plan.price
        }
      });
    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
      console.log('Payment process completed'); // Debug log
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  // Test function to pre-fill form for testing
  const fillTestData = () => {
    setFormData({
      mobileNumber: '9876543210',
      cardNumber: '4111 1111 1111 1111',
      cardName: 'Test User',
      expiryDate: '12/25',
      cvv: '123',
      saveCard: false
    });
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        {/* Debug button - remove in production */}
        <button 
          onClick={fillTestData}
          className="test-fill-btn"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Fill Test Data
        </button>

        {/* Header */}
        <div className="payment-header">
          <h1 className="logo">☁️ Sky Recharge</h1>
          <h2>Payment</h2>
          <p>Complete your recharge with secure payment</p>
        </div>

        <div className="payment-content">
          {/* Order Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-details">
              <div className="summary-row">
                <span>Operator:</span>
                <span>{operator}</span>
              </div>
              <div className="summary-row">
                <span>Plan:</span>
                <span>{plan.name}</span>
              </div>
              <div className="summary-row">
                <span>Validity:</span>
                <span>{plan.validity}</span>
              </div>
              <div className="summary-row">
                <span>Data:</span>
                <span>{plan.data}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total Amount:</span>
                <span className="amount">{plan.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="payment-form-section">
            <form className="payment-form" onSubmit={handleSubmit}>
              {error && (
                <div className="error-message">
                  ⚠️ {error}
                </div>
              )}

              {/* Mobile Number */}
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <div className="input-with-prefix">
                  <span className="prefix">+91</span>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Card Details */}
              <div className="form-group">
                <label htmlFor="cardNumber">Card Details</label>
                <div className="card-inputs">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                    disabled={loading}
                  />
                  
                  <div className="card-details-grid">
                    <div className="card-input-group">
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder="Name on card"
                        required
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="card-input-group">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="card-input-group">
                      <input
                        type="password"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="CVV"
                        maxLength="3"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Card Option */}
              <div className="save-card-option">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="saveCard"
                    checked={formData.saveCard}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <span>Save card for future payments</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button
                  type="button"
                  onClick={handleBack}
                  className="back-btn"
                  disabled={loading}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="pay-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    `Pay ${plan.price}`
                  )}
                </button>
              </div>

              {/* Security Note */}
              <div className="security-note">
                <p> Your payment is secure and encrypted</p>
                <p> 100% safe transactions guaranteed</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;