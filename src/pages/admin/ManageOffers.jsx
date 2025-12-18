import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const ManageOffers = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: 'Netflix Free', type: 'netflix', validityDays: 30, minRechargeAmount: 599 },
    { id: 2, title: 'Hotstar Premium', type: 'hotstar', validityDays: 365, minRechargeAmount: 999 }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'netflix',
    validityDays: '',
    minRechargeAmount: ''
  });

  const offerTypes = ['netflix', 'hotstar', 'prime', 'spotify', 'youtube'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setOffers([...offers, { ...formData, id: Date.now() }]);
    setFormData({ title: '', type: 'netflix', validityDays: '', minRechargeAmount: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  return (
    <AdminLayout>
      <div className="manage-offers">
        <div className="page-header">
          <h1>Manage Offers</h1>
          <button onClick={() => setShowForm(true)} className="add-btn">
            Add New Offer
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-container">
              <h3>Add New Offer</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Offer Title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    {offerTypes.map(type => <option key={type} value={type}>{type.toUpperCase()}</option>)}
                  </select>
                  <input
                    type="number"
                    placeholder="Validity Days"
                    value={formData.validityDays}
                    onChange={(e) => setFormData({...formData, validityDays: e.target.value})}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Min Recharge Amount"
                    value={formData.minRechargeAmount}
                    onChange={(e) => setFormData({...formData, minRechargeAmount: e.target.value})}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="save-btn">Save</button>
                  <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card">
              <h3>{offer.title}</h3>
              <p>Type: {offer.type.toUpperCase()}</p>
              <p>Validity: {offer.validityDays} days</p>
              <p>Min Amount: ₹{offer.minRechargeAmount}</p>
              <button onClick={() => handleDelete(offer.id)} className="delete-btn">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageOffers;