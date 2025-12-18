import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState('');
  
  const { 
    serviceType, 
    provider, 
    plan, 
    subscriberId, 
    consumerNumber, 
    mobileNumber, 
    amount 
  } = location.state || {};

  // Service type labels
  const serviceLabels = {
    mobile: 'Mobile Recharge',
    tv: 'TV Recharge',
    dth: 'DTH Recharge', 
    electricity: 'Electricity Bill Payment'
  };

  useEffect(() => {
    // If no data, redirect to home
    if (!amount) {
      navigate('/');
    }
    
    // Generate a random transaction ID
    const generateTransactionId = () => {
      const timestamp = Date.now().toString().slice(-8);
      const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      return `TX${timestamp}${random}`;
    };
    
    setTransactionId(generateTransactionId());
  }, [plan, amount, navigate]);

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="success-icon">✅</div>
        
        <h1>Payment Successful!</h1>
        <p className="success-message">
          Your {serviceLabels[serviceType] || 'recharge'} has been completed successfully
        </p>
        
        <div className="confirmation-details">
          <div className="detail-card">
            <div className="detail-row">
              <span>Service:</span>
              <span>{serviceLabels[serviceType] || 'Mobile Recharge'}</span>
            </div>
            <div className="detail-row">
              <span>Provider:</span>
              <span>{provider || 'Jio'}</span>
            </div>
            {mobileNumber && (
              <div className="detail-row">
                <span>Mobile Number:</span>
                <span>+91 {mobileNumber}</span>
              </div>
            )}
            {subscriberId && (
              <div className="detail-row">
                <span>Subscriber ID:</span>
                <span>{subscriberId}</span>
              </div>
            )}
            {consumerNumber && (
              <div className="detail-row">
                <span>Consumer Number:</span>
                <span>{consumerNumber}</span>
              </div>
            )}
            {plan && (
              <div className="detail-row">
                <span>Plan:</span>
                <span>{plan.name}</span>
              </div>
            )}
            <div className="detail-row">
              <span>Amount Paid:</span>
              <span className="amount">{amount || '₹299'}</span>
            </div>
            <div className="detail-row">
              <span>Transaction ID:</span>
              <span className="transaction-id">{transactionId || 'Generating...'}</span>
            </div>
            <div className="detail-row">
              <span>Date & Time:</span>
              <span>{new Date().toLocaleString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <Link to="/home" className="btn-primary">
            Back to Home
          </Link>
          <Link to="/recharge" className="btn-secondary">
            Make Another Recharge
          </Link>
        </div>
        
        <div className="support-note">
          <p> A confirmation email has been sent to your registered email</p>
          <p> Your recharge will be activated within 2 minutes</p>
          <p>For any issues, contact support: support@skyrecharge.in</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;