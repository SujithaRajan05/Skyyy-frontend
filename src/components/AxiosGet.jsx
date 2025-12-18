import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AxiosGet() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://69329a66e5a9e342d26ff2d3.mockapi.io/SkyRecharge")
      .then((res) => {
        setPlans(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to load plans. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Handle clicking a plan → go to Recharge page
  const handleRecharge = (plan) => {
    // You can pass plan details via state
    navigate("/recharge", { state: { plan } });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-pink-50 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center mb-6 text-pink-700">Available Plans</h1>

      {loading && <p className="text-center text-gray-500">Loading plans...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-4 border border-pink-200 rounded-lg bg-white shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold mb-2">{plan.name}</h2>
              <p className="mb-2">Operator: {plan.operator}</p>
              <p className="mb-4">Price: ₹{plan.price}</p>
              <button
                onClick={() => handleRecharge(plan)}
                className="w-full p-2 bg-pink-300 rounded-lg font-semibold hover:bg-pink-400"
              >
                Recharge
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AxiosGet;
