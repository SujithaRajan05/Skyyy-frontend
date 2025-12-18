import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Validate password length first
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        setLoading(false);
        return;
      }

      // Check for admin credentials
      if (formData.email === 'admin@skyrecharge.com' && formData.password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'admin@skyrecharge.com');
        localStorage.setItem('userName', 'Admin');
        localStorage.setItem('userRole', 'admin');
        alert('Admin login successful!');
        navigate('/admin/dashboard');
        return;
      }

      // Regular user login (offline mode)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', formData.email.split('@')[0]);
      localStorage.setItem('userRole', 'user');
      alert('Login successful!');
      navigate('/home');
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Demo login for testing
  const handleDemoLogin = (type) => {
    if (type === 'admin') {
      setFormData({
        email: 'admin@skyrecharge.com',
        password: 'admin123'
      });
    } else {
      setFormData({
        email: 'user@example.com',
        password: 'user123'
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="logo">☁️ Sky Recharge</div>
          <h1>Welcome Back</h1>
          <p>Login to your Sky Recharge account</p>
        </div>

        {/* Demo buttons for testing */}
        <div className="demo-buttons">
          <p className="demo-note">Quick Login (or use any email with 6+ character password):</p>
          <div className="demo-buttons-container">
            <button 
              onClick={() => handleDemoLogin('admin')}
              className="demo-btn admin-btn"
            >
              Admin Login
            </button>
            <button 
              onClick={() => handleDemoLogin('user')}
              className="demo-btn user-btn"
            >
              User Login
            </button>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              <span className="social-icon">G</span>
              Continue with Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              <span className="social-icon">f</span>
              Continue with Facebook
            </button>
          </div>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;