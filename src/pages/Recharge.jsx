import React from 'react';
import { Link } from 'react-router-dom';
// Use public folder for reliable deployment
const JioLogo = '/images/Jio.png';
const AirtelLogo = '/images/Airtel.png';
const BsnlLogo = '/images/bsnl.png';
import '../styles/recharge.css';

const Recharge = () => {
  const operators = [
    { id: 1, name: 'Jio', logo: JioLogo, bgColor: '#E3F2FD', color: '#1976D2' },
    { id: 2, name: 'Airtel', logo: AirtelLogo, bgColor: '#FFEBEE', color: '#D32F2F' },
    { id: 3, name: 'BSNL', logo: BsnlLogo, bgColor: '#FFF8E1', color: '#F57C00' },
  ];

  return (
    <div className="recharge-container">
      <div className="recharge-header">
        <Link to="/home" className="back-link">
          ← Back to Home
        </Link>
        <h1>Select Your Operator</h1>
        <p className="subtitle">
          Choose your mobile operator to view available recharge plans
        </p>
      </div>

      <div className="operators-grid">
        {operators.map((operator) => (
          <div key={operator.id} className="operator-card">
            <div 
              className="operator-logo"
              style={{ backgroundColor: operator.bgColor }}
            >
              <img src={operator.logo} alt={operator.name} className="operator-img" />
            </div>
            <div className="operator-info">
              <h3>{operator.name}</h3>
              <p>{operator.name}</p>
            </div>
            <Link 
              to={`/plans/${operator.name.toLowerCase()}`}
              className="view-plans-btn"
            >
              View Plans →
            </Link>
          </div>
        ))}
      </div>

      <div className="support-note">
        <p>Can't find your operator? <Link to="/contact">Contact Support</Link></p>
      </div>
    </div>
  );
};

export default Recharge;
