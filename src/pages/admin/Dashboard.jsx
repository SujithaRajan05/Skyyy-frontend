import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import DashboardCard from '../../components/admin/DashboardCard';
import '../../styles/super-admin.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPlans: 0,
    totalOffers: 0,
    activeServices: 4
  });

  useEffect(() => {
    // Fetch dashboard stats
    fetchStats();
  }, []);

  const fetchStats = async () => {
    // Mock data for now
    setStats({
      totalUsers: 1250,
      totalPlans: 45,
      totalOffers: 12,
      activeServices: 4
    });
  };

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome back! Here's what's happening with Sky Recharge.</p>
        </div>

        <div className="dashboard-stats">
          <DashboardCard
            title="Total Users"
            value={stats.totalUsers.toLocaleString()}
            icon="👥"
            color="#4F46E5"
            change="+12% from last month"
          />
          <DashboardCard
            title="Recharge Plans"
            value={stats.totalPlans}
            icon="📋"
            color="#059669"
            change="+5 new plans"
          />
          <DashboardCard
            title="Special Offers"
            value={stats.totalOffers}
            icon="🎁"
            color="#DC2626"
            change="+3 active offers"
          />
          <DashboardCard
            title="Active Services"
            value={stats.activeServices}
            icon="⚡"
            color="#7C2D12"
            change="All systems online"
          />
        </div>

        <div className="dashboard-content">
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">👤</span>
                <span>New user registered</span>
                <span className="activity-time">2 minutes ago</span>
              </div>
              <div className="activity-item">
                <span className="activity-icon">💳</span>
                <span>Recharge completed - ₹299</span>
                <span className="activity-time">5 minutes ago</span>
              </div>
              <div className="activity-item">
                <span className="activity-icon">📋</span>
                <span>New plan added - Jio Prime</span>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button onClick={() => navigate('/admin/plans')} className="action-btn primary">Add New Plan</button>
              <button onClick={() => navigate('/admin/offers')} className="action-btn secondary">Create Offer</button>
              <button onClick={() => navigate('/admin/services')} className="action-btn tertiary">Manage Services</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;