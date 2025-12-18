import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/plans', label: 'Manage Plans', icon: '📋' },
    { path: '/admin/offers', label: 'Manage Offers', icon: '🎁' },
    { path: '/admin/services', label: 'Manage Services', icon: '⚙️' },
    { path: '/admin/users', label: 'Users', icon: '👥' }
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-logo">
        <h3>☁️ Sky Admin</h3>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;