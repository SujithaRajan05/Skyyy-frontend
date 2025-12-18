import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Link to={service.path} className="service-card">
      <div className="service-icon" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-arrow">→</div>
    </Link>
  );
};

export default ServiceCard;