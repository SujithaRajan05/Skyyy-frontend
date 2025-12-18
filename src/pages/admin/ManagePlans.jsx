import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import JioLogo from '../../assets/Jio.png';
import AirtelLogo from '../../assets/Airtel.png';
import BsnlLogo from '../../assets/bsnl.png';
import '../../styles/super-admin.css';

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    provider: 'jio',
    serviceType: 'mobile',
    price: '',
    validity: '',
    data: '',
    benefits: ''
  });

  const providers = [
    { id: 'jio', name: 'Jio', logo: JioLogo },
    { id: 'airtel', name: 'Airtel', logo: AirtelLogo },
    { id: 'bsnl', name: 'BSNL', logo: BsnlLogo }
  ];
  const serviceTypes = ['mobile', 'tv', 'dth', 'electricity'];

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    // Mock data for now
    setPlans([
      { id: 1, name: 'Jio Prime', provider: 'jio', serviceType: 'mobile', price: 299, validity: '28 days', data: '2GB/day' },
      { id: 2, name: 'Airtel Unlimited', provider: 'airtel', serviceType: 'mobile', price: 399, validity: '56 days', data: '1.5GB/day' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPlan) {
      setPlans(plans.map(plan => plan.id === editingPlan.id ? { ...formData, id: editingPlan.id } : plan));
    } else {
      setPlans([...plans, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', provider: 'jio', serviceType: 'mobile', price: '', validity: '', data: '', benefits: '' });
    setShowForm(false);
    setEditingPlan(null);
  };

  const handleEdit = (plan) => {
    setFormData(plan);
    setEditingPlan(plan);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <AdminLayout>
      <div className="manage-plans">
        <div className="page-header">
          <h1>Manage Plans</h1>
          <button onClick={() => setShowForm(true)} className="add-btn">
            Add New Plan
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-container">
              <h3>{editingPlan ? 'Edit Plan' : 'Add New Plan'}</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Plan Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <select
                    value={formData.provider}
                    onChange={(e) => setFormData({...formData, provider: e.target.value})}
                  >
                    <option value="">Select Provider</option>
                    {providers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    {serviceTypes.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
                  </select>
                  <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Validity"
                    value={formData.validity}
                    onChange={(e) => setFormData({...formData, validity: e.target.value})}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Data"
                    value={formData.data}
                    onChange={(e) => setFormData({...formData, data: e.target.value})}
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="save-btn">Save</button>
                  <button type="button" onClick={resetForm} className="cancel-btn">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="plans-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Price</th>
                <th>Validity</th>
                <th>Data</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {plans.map(plan => (
                <tr key={plan.id}>
                  <td>{plan.name}</td>
                  <td>
                    <div className="provider-select">
                      {providers.find(p => p.id === plan.provider) && (
                        <img 
                          src={providers.find(p => p.id === plan.provider).logo} 
                          alt={plan.provider} 
                          className="operator-logo-img"
                        />
                      )}
                      {plan.provider.toUpperCase()}
                    </div>
                  </td>
                  <td>{plan.serviceType.toUpperCase()}</td>
                  <td>₹{plan.price}</td>
                  <td>{plan.validity}</td>
                  <td>{plan.data}</td>
                  <td>
                    <button onClick={() => handleEdit(plan)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(plan.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManagePlans;