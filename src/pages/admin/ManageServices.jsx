import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import '../../styles/super-admin.css';

const ManageServices = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Mobile Recharge', type: 'mobile', icon: '📱', isActive: true },
    { id: 2, name: 'TV Recharge', type: 'tv', icon: '📺', isActive: true },
    { id: 3, name: 'DTH Recharge', type: 'dth', icon: '📡', isActive: true },
    { id: 4, name: 'Electricity Bill', type: 'electricity', icon: '⚡', isActive: true }
  ]);

  const toggleService = (id) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, isActive: !service.isActive } : service
    ));
  };

  return (
    <AdminLayout>
      <div className="manage-services">
        <div className="page-header">
          <h1>Manage Services</h1>
          <button className="add-btn">
            Add New Service
          </button>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className={`service-card ${service.isActive ? 'active' : 'inactive'}`}>
              <div className="service-icon-large">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>Type: {service.type.toUpperCase()}</p>
              <div className="service-actions">
                <button 
                  onClick={() => toggleService(service.id)}
                  className={`toggle-btn ${service.isActive ? 'active' : 'inactive'}`}
                >
                  {service.isActive ? 'Disable' : 'Enable'}
                </button>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageServices;