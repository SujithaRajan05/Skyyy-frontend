import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Recharge from "./pages/Recharge";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import Plans from "./pages/Plans";
import ProviderPlans from "./pages/ProviderPlans";
import Signup from "./pages/Signup";

// ✅ Backend API Base URL (Render)
export const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/:operator" element={<Plans />} />
        <Route path="/provider-plans" element={<ProviderPlans />} />
      </Routes>
    </Router>
  );
}

export default App;
