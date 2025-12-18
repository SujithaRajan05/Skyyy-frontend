import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function ProviderPlans() {
  const { operator } = useParams();
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://69329a66e5a9e342d26ff2d3.mockapi.io/SkyRecharge")
      .then(res => setPlans(res.data.slice(0, 21)));
  }, []);

  return (
    <div className="plans-container">
      <h2>{operator.toUpperCase()} Plans</h2>
      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            <p>₹{plan.amount} - {plan.validity}</p>
            <button onClick={() => navigate("/payment", { state: plan })}>Recharge Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}