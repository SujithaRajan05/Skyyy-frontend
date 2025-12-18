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
import Dashboard from "./pages/admin/Dashboard";
import UserHome from "./pages/user/UserHome";
import MobileRecharge from "./pages/user/MobileRecharge";
import ManagePlans from "./pages/admin/ManagePlans";
import ManageOffers from "./pages/admin/ManageOffers";
import ManageServices from "./pages/admin/ManageServices";
import TVRecharge from "./pages/user/TVRecharge";
import DTHRecharge from "./pages/user/DTHRecharge";
import ElectricityBill from "./pages/user/ElectricityBill";
import Offers from "./pages/Offers";
import ProtectedRoute from "./components/common/ProtectedRoute";

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
        <Route path="/admin/dashboard" element={
          <ProtectedRoute requiredRole="admin">
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/mobile-recharge" element={<MobileRecharge />} />
        <Route path="/admin/plans" element={
          <ProtectedRoute requiredRole="admin">
            <ManagePlans />
          </ProtectedRoute>
        } />
        <Route path="/admin/offers" element={
          <ProtectedRoute requiredRole="admin">
            <ManageOffers />
          </ProtectedRoute>
        } />
        <Route path="/admin/services" element={
          <ProtectedRoute requiredRole="admin">
            <ManageServices />
          </ProtectedRoute>
        } />
        <Route path="/tv-recharge" element={<TVRecharge />} />
        <Route path="/dth-recharge" element={<DTHRecharge />} />
        <Route path="/electricity-bill" element={<ElectricityBill />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;
