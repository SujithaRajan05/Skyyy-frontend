import React from 'react';

const DashboardCard = ({ title, value, icon, color, change }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="card-icon" style={{ color }}>{icon}</span>
      </div>
      <div className="card-value">{value}</div>
      {change && <div className="card-change">{change}</div>}
    </div>
  );
};

export default DashboardCard;